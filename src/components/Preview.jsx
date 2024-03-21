import PropTypes from 'prop-types';

function Preview({ projectInfo }) {
  return (
    <section className="preview">
      <div className="projectImage"></div>
      <article className="card">
        <h2 className="card__projectTitle">
          <span className="card__projectTitle--text">Proyectos Molones</span>
        </h2>

        <div className="card__author">
          <div className="card__authorPhoto"></div>
          <p className="card__job">{projectInfo.job}</p>
          <h3 className="card__name">{projectInfo.autor}</h3>
        </div>

        <div className="card__project">
          <h3 className="card__name">{projectInfo.name}</h3>
          <p className="card__slogan">{projectInfo.slogan}</p>
          <h3 className="card__descriptionTitle">Product description</h3>
          <p className="card__description">{projectInfo.desc}</p>

          <div className="card__technicalInfo">
            <p className="card__technologies">{projectInfo.technologies}</p>

            <a
              className="icon icon__www"
              href={projectInfo.demo}
              title="Haz click para ver el proyecto online"
            >
              Web link
            </a>
            <a
              className="icon icon__github"
              href={projectInfo.repo}
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
  projectInfo: PropTypes.object.isRequired,
};

export default Preview;
