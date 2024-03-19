import PropTypes from "prop-types";
import LabelButton from "./LabelButton";

function Form({
	handleProjectName,
	handleSlogan,
	handleRepository,
	handleDemo,
	handleTech,
	handleDescription,
	handleUserName,
	handleUserJob,
}) {
	const handleProjectNameInput = (event) => {
		handleProjectName(event.target.value);
	};

	const handleSloganInput = (event) => {
		handleSlogan(event.target.value);
	};

	const handleRepositoryInput = (event) => {
		handleRepository(event.target.value);
	};
	const handleDemoInput = (event) => {
		handleDemo(event.target.value);
	};
	const handleTechInput = (event) => {
		handleTech(event.target.value);
	};
	const handleDescriptionInput = (event) => {
		handleDescription(event.target.value);
	};
	const handleUserNameInput = (event) => {
		handleUserName(event.target.value);
	};
	const handleUserJobInput = (event) => {
		handleUserJob(event.target.value);
	};

	return (
		<form className="addForm">
			<h2 className="title">Información</h2>
			<fieldset className="addForm__group">
				<legend className="addForm__title">Cuéntanos sobre el proyecto</legend>
				<input
					onChange={handleProjectNameInput}
					className="addForm__input"
					type="text"
					name="name"
					id="name"
					placeholder="Nombre del proyecto"
				/>
				<input
					onChange={handleSloganInput}
					className="addForm__input"
					type="text"
					name="slogan"
					id="slogan"
					placeholder="Slogan"
				/>
				<div className="addForm__2col">
					<input
						onChange={handleRepositoryInput}
						className="addForm__input"
						type="url"
						name="repo"
						id="repo"
						placeholder="Repositorio"
					/>
					<input
						onChange={handleDemoInput}
						className="addForm__input"
						type="url"
						name="demo"
						id="demo"
						placeholder="Demo"
					/>
				</div>
				<input
					onChange={handleTechInput}
					className="addForm__input"
					type="text"
					name="technologies"
					id="technologies"
					placeholder="Tecnologías"
				/>
				<textarea
					onChange={handleDescriptionInput}
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
					onChange={handleUserNameInput}
					className="addForm__input"
					type="text"
					name="autor"
					id="autor"
					placeholder="Nombre"
				/>
				<input
					onChange={handleUserJobInput}
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
				<input
					className="addForm__hidden"
					type="file"
					name="image"
					id="image"
				/>
				<LabelButton htmlFor="photo" text="Subir foto de la autora" />
				<input
					className="addForm__hidden"
					type="file"
					name="photo"
					id="photo"
				/>
				<button className="button--large">Guardar proyecto</button>
			</fieldset>
		</form>
	);
}

Form.propTypes = {
	handleProjectName: PropTypes.func.isRequired,
	handleSlogan: PropTypes.func.isRequired,
	handleRepository: PropTypes.func.isRequired,
	handleDemo: PropTypes.func.isRequired,
	handleTech: PropTypes.func.isRequired,
	handleDescription: PropTypes.func.isRequired,
	handleUserName: PropTypes.func.isRequired,
	handleUserJob: PropTypes.func.isRequired,
};

export default Form;
