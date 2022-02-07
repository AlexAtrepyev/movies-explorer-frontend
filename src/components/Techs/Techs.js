import './Techs.css';
import Article from '../Article/Article';

function Techs() {
  return (
    <section className="techs" id="techs">
      <h2 className="techs__title">Технологии</h2>

      <Article
        section="tech"
        title="7 технологий"
        description="На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте."
      />

      <ul className="tech__items">
        <li className="tech__item">HTML</li>
        <li className="tech__item">CSS</li>
        <li className="tech__item">JS</li>
        <li className="tech__item">React</li>
        <li className="tech__item">Git</li>
        <li className="tech__item">Express.js</li>
        <li className="tech__item">mongoDB</li>
      </ul>
      
    </section>
  );
}

export default Techs;
