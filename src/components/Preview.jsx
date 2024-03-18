import PropTypes from 'prop-types';

function Preview({ projectName, slogan, repository, demo, tech, description, userName, userJob }) {
  return (
    <section className="preview">
      <div className="projectImage"></div>
      <article className="card">
        <h2 className="card__projectTitle">
          <span className="card__projectTitle--text">Proyectos Molones</span>
        </h2>

        <div className="card__author">
          <div className="card__authorPhoto"></div>
          <p className="card__job">{userJob}</p>
          <h3 className="card__name">{userName}</h3>
        </div>

        <div className="card__project">
          <h3 className="card__name">{projectName}</h3>
          <p className="card__slogan">{slogan}</p>
          <h3 className="card__descriptionTitle">Product description</h3>
          <p className="card__description">{description}</p>

          <div className="card__technicalInfo">
            <p className="card__technologies">{tech}</p>

            <a className="icon icon__www" href={demo} title="Haz click para ver el proyecto online">
              Web link
            </a>
            <a
              className="icon icon__github"
              href={repository}
              title="Haz click para ver el código del proyecto"
            >
              GitHub link
            </a>
          </div>
        </div>
      </article>
      <div className="messageCardCreated hidden">
        <p>La tarjeta ha sido creada:</p>
      </div>
    </section>
  );
}
Preview.propTypes = {
  projectName: PropTypes.string.isRequired,
  slogan: PropTypes.string.isRequired,
  repository: PropTypes.string.isRequired,
  demo: PropTypes.string.isRequired,
  tech: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  userJob: PropTypes.string.isRequired,
};

export default Preview;
