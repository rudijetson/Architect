
// -------------------- pages/blog/index.tsx --------------------
import React from 'react';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import styles from './blog-index.module.css';

interface BlogPost {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    excerpt: string;
  };
}

interface BlogIndexProps {
  posts: BlogPost[];
}

const BlogIndex: React.FC<BlogIndexProps> = ({ posts }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-gray-100 pt-16">
        <div className="blog-container">
          <h1 className="blog-title">Blog</h1>
          
          {posts.length > 0 ? (
            <div className={styles['blog-post-grid']}>
              {posts.map((post) => (
                <article key={post.slug} className={styles['blog-post-card']}>
                  <div className={styles['blog-post-content']}>
                    <Link href={`/blog/${post.slug}`}>
                      <h2 className={styles['blog-post-title']}>{post.frontmatter.title}</h2>
                    </Link>
                    <p className={styles['blog-post-date']}>{post.frontmatter.date}</p>
                    <p className={styles['blog-post-excerpt']}>{post.frontmatter.excerpt}</p>
                    <Link href={`/blog/${post.slug}`} className={styles['blog-post-link']}>
                      Read more
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className={styles['no-posts-message']}>No blog posts available at the moment.</p>
          )}
        </div>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const postsDirectory = path.join(process.cwd(), 'pages', 'blog', 'posts');
  let posts: BlogPost[] = [];

  try {
    const fileNames = fs.readdirSync(postsDirectory);
    posts = fileNames.map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data: frontmatter } = matter(fileContents);

      return {
        slug,
        frontmatter: frontmatter as BlogPost['frontmatter'],
      };
    });
  } catch (error) {
    console.error('Error reading blog posts:', error);
  }

  return {
    props: {
      posts,
    },
  };
};

export default BlogIndex;