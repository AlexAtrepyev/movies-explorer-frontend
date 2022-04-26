import './Auth.css';

import AppLogo from '../AppLogo/AppLogo';
import Form from '../Form/Form';
import Redirection from '../Redirection/Redirection';

function Auth({
  title,
  fields,
  submitText,
  onSubmit,
  apiError,
  resetApiError,
  redirectionText,
  redirectionLinkText,
  redirectionLink
}) {
  return (
    <section className="auth">
      <div className="auth__container">
        <AppLogo />
        <h1 className="auth__title">{title}</h1>
        <Form
          fields={fields}
          apiError={apiError}
          resetApiError={resetApiError}
          submitText={submitText}
          onSubmit={onSubmit}
        />
        <Redirection
          resetApiError={resetApiError}
          text={redirectionText}
          linkText={redirectionLinkText}
          link={redirectionLink}
        />
      </div>
    </section>
  );
}

export default Auth;
