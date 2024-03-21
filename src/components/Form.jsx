import PropTypes from 'prop-types';
import LabelButton from './LabelButton';

function Form({ onChangeProjectInfo, projectInfo }) {
  const handleProjectInput = (event) => {
    const value = event.target.value;
    const id = event.target.id;
    onChangeProjectInfo(value, id);
  };

  return (
    <form className="addForm">
      <h2 className="title">Información</h2>
      <fieldset className="addForm__group">
        <legend className="addForm__title">Cuéntanos sobre el proyecto</legend>
        <input
          onChange={handleProjectInput}
          className="addForm__input"
          type="text"
          name="name"
          id="name"
          placeholder="Nombre del proyecto"
        />
        <input
          onChange={handleProjectInput}
          className="addForm__input"
          type="text"
          name="slogan"
          id="slogan"
          placeholder="Slogan"
        />
        <div className="addForm__2col">
          <input
            onChange={handleProjectInput}
            className="addForm__input"
            type="url"
            name="repo"
            id="repo"
            placeholder="Repositorio"
          />
          <input
            onChange={handleProjectInput}
            className="addForm__input"
            type="url"
            name="demo"
            id="demo"
            placeholder="Demo"
          />
        </div>
        <input
          onChange={handleProjectInput}
          className="addForm__input"
          type="text"
          name="technologies"
          id="technologies"
          placeholder="Tecnologías"
        />
        <textarea
          onChange={handleProjectInput}
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
          onChange={handleProjectInput}
          className="addForm__input"
          type="text"
          name="autor"
          id="autor"
          placeholder="Nombre"
        />
        <input
          onChange={handleProjectInput}
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
        <LabelButton htmlFor="image" text="Subir foto del proyecto" />
        <input className="addForm__hidden" type="file" name="image" id="image" />
        <LabelButton htmlFor="photo" text="Subir foto de la autora" />
        <input className="addForm__hidden" type="file" name="photo" id="photo" />
        <button className="button--large">Guardar proyecto</button>
      </fieldset>
    </form>
  );
}

Form.propTypes = {
  projectInfo: PropTypes.object.isRequired,
  onChangeProjectInfo: PropTypes.func.isRequired,
};

export default Form;
