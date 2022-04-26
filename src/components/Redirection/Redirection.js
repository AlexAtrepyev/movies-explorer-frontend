import './Redirection.css';

import { Link } from 'react-router-dom';

function Redirection({ text, linkText, link }) {
  return (
    <div className="redirection">
      {text}
      <Link className="redirection__link" to={link}>{linkText}</Link>
    </div>
  );
}

export default Redirection;
