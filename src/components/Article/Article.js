import './Article.css';

function Article(props) {
  return (
    <article className={`article${props.section === 'tech' ? ' tech__article' : ''}`}>
      <h3 className={`article__title article__title_section_${props.section}`}>{props.title}</h3>
      <p className={`article__description${props.section === 'tech' ? ' article__description_section_tech' : ''}`}>{props.description}</p>
    </article>
  );
}

export default Article;
