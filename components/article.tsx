interface ArticleComponent {
  title: string;
  children: JSX.Element;
}

const Article = ({ title, children }: ArticleComponent) => {
  return (
    <article>
      <h2 className="text-3xl text-center">{title}</h2>
      {children}
    </article>
  );
};

export default Article;
