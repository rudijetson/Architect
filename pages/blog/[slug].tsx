
// -------------------- pages/blog/[slug].tsx --------------------
import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

interface BlogPost {
  title?: string;
  date?: string;
  content: string;
}

const BlogPost: React.FC<BlogPost> = ({ title = 'Untitled Post', date = 'No date', content }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-gray-100 pt-16">
        <article className="blog-container">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
          <time className="text-gray-600 mb-8 block">{date}</time>
          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
        </article>
      </main>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const postsDirectory = path.join(process.cwd(), 'pages', 'blog', 'posts');
  let paths: { params: { slug: string } }[] = [];

  try {
    const files = fs.readdirSync(postsDirectory);
    paths = files.map(filename => ({
      params: {
        slug: filename.replace('.md', '')
      }
    }));
  } catch (error) {
    console.error('Error reading blog posts directory:', error);
  }

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug;
  const postsDirectory = path.join(process.cwd(), 'pages', 'blog', 'posts');
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  
  try {
    const markdownWithMeta = fs.readFileSync(fullPath, 'utf-8');
    const { data: frontmatter, content } = matter(markdownWithMeta);
    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    return {
      props: {
        title: frontmatter.title || null,
        date: frontmatter.date || null,
        content: contentHtml,
      },
    };
  } catch (error) {
    console.error('Error reading blog post:', error);
    return {
      notFound: true,
    };
  }
};

export default BlogPost;
