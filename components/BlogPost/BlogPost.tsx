type BlogPostProps = {
    content: string;
    title: string;
    date: string;
  };
  
  export default function BlogPost({ content, title, date }: BlogPostProps) {
    return (
      <div>
        <h1>{title}</h1>
        <p>{date}</p>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    );
  }