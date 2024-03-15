const Main = () => {
  return (
    <main className="main">
      <section className="hero">
        <h2 className="title">Proyectos molones</h2>
        <p className="hero__text">
          Escaparate en línea para recoger ideas a través de la tecnología
        </p>
        <a className="button--link" href="./">
          Ver proyectos
        </a>
      </section>
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
            <p className="card__description">{descripction}</p>

            <div className="card__technicalInfo">
              <p className="card__technologies">{tech}</p>

              <a
                className="icon icon__www"
                href={demo}
                title="Haz click para ver el proyecto online"
              >
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
      <form className="addForm">
        <h2 className="title">Información</h2>
        <fieldset className="addForm__group">
          <legend className="addForm__title">
            Cuéntanos sobre el proyecto
          </legend>
          <input
            onChange={handleProjectName}
            className="addForm__input"
            type="text"
            name="name"
            id="name"
            placeholder="Nombre del proyecto"
          />
          <input
            onChange={handleSlogan}
            className="addForm__input"
            type="text"
            name="slogan"
            id="slogan"
            placeholder="Slogan"
          />
          <div className="addForm__2col">
            <input
              onChange={handleRepository}
              className="addForm__input"
              type="url"
              name="repo"
              id="repo"
              placeholder="Repositorio"
            />
            <input
              onChange={handleDemo}
              className="addForm__input"
              type="url"
              name="demo"
              id="demo"
              placeholder="Demo"
            />
          </div>
          <input
            onChange={handleTech}
            className="addForm__input"
            type="text"
            name="technologies"
            id="technologies"
            placeholder="Tecnologías"
          />
          <textarea
            onChange={handleDescription}
            className="addForm__input"
            type="text"
            name="desc"
            id="desc"
            placeholder="Descripción"
            rows="5"
          ></textarea>
        </fieldset>

        <fieldset className="addForm__group">
          <legend className="addForm__title">Cuéntanos sobre la autora</legend>
          <input
            onChange={handleUserName}
            className="addForm__input"
            type="text"
            name="autor"
            id="autor"
            placeholder="Nombre"
          />
          <input
            onChange={handleUserJob}
            className="addForm__input"
            type="text"
            name="job"
            id="job"
            placeholder="Trabajo"
          />
        </fieldset>
        <div className="messageCardCreatedMobile hidden">
          <p>La tarjeta ha sido creada:</p>
          <a href="">Aquí estaría tu tarjeta</a>
        </div>
        <fieldset className="addForm__group--upload">
          <label htmlFor="image" className="button">
            Subir foto del proyecto
          </label>
          <input
            className="addForm__hidden"
            type="file"
            name="image"
            id="image"
          />
          <label htmlFor="photo" className="button">
            Subir foto de la autora
          </label>
          <input
            className="addForm__hidden"
            type="file"
            name="photo"
            id="photo"
          />
          <button className="button--large">Guardar proyecto</button>
        </fieldset>
      </form>
    </main>
  );
};

export default Main;
