import { useState } from "react";
import "../scss/App.scss";

import Header from "./Header";
//import Main from './Main';
import Preview from "./Preview";
import Form from "./Form";
import Footer from "./Footer";

const App = () => {
	const [projectName, setProjectName] = useState("");
	const [slogan, setSlogan] = useState("");
	const [repository, setRepository] = useState("");
	const [demo, setDemo] = useState("");
	const [tech, setTech] = useState("");
	const [description, setDescription] = useState("");
	const [userName, setUserName] = useState("");
	const [userJob, setUserJob] = useState("");

	const handleProjectName = (value) => {
		setProjectName(value);
	};
	const handleSlogan = (value) => {
		setSlogan(value);
	};
	const handleRepository = (value) => {
		setRepository(value);
	};
	const handleDemo = (value) => {
		setDemo(value);
	};
	const handleTech = (value) => {
		setTech(value);
	};
	const handleDescription = (value) => {
		setDescription(value);
	};
	const handleUserName = (value) => {
		setUserName(value);
	};
	const handleUserJob = (value) => {
		setUserJob(value);
	};

	return (
		<div className="container">
			<Header />
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
				<Preview
					projectName={projectName}
					slogan={slogan}
					repository={repository}
					demo={demo}
					tech={tech}
					description={description}
					userName={userName}
					userJob={userJob}
				/>
				<Form
					handleProjectName={handleProjectName}
					handleSlogan={handleSlogan}
					handleRepository={handleRepository}
					handleDemo={handleDemo}
					handleTech={handleTech}
					handleDescription={handleDescription}
					handleUserName={handleUserName}
					handleUserJob={handleUserJob}
				/>
			</main>
			<Footer />
		</div>
	);
};

export default App;
