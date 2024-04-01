import { useState } from "react";
import "../scss/App.scss";

import Header from "./Header";
import Preview from "./Preview";
import Form from "./Form";
import Footer from "./Footer";
import localStorage from "../services/localStorage";

const App = () => {
  const infoDefault = {
    name: "",
    slogan: "",
    repo: "",
    demo: "",
    technologies: "",
    desc: "",
    autor: "",
    job: "",
    image:
      "https://i.blogs.es/25fd38/disney-mary-poppins-critica-1964/450_1000.jpg",
    photo:
      "https://img.rtve.es/imagenes/mary-poppins-dificultades-su-rodaje/1641918077286.jpg",
  };
  const [projectInfo, setProjectInfo] = useState(
    localStorage.get("project") || infoDefault
  );
  const [url, setUrl] = useState("");

  const handleCreateProject = () => {
    fetch("https://dev.adalab.es/api/projectCard", {
      method: "POST",
      body: JSON.stringify(projectInfo),
      headers: { "Content-type": "application/json" },
    })
      .then((response) => response.json())
      .then((result) => {
        setUrl(result.cardURL);
      })
      .catch((error) => console.log(error));
  };

  const handleProjectInfo = (value, id) => {
    setProjectInfo({ ...projectInfo, [id]: value });
    localStorage.set("project", projectInfo);
  };
  const handleReset = () => {
    setProjectInfo(infoDefault);
    localStorage.clear();
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
        <Preview projectInfo={projectInfo} cardUrl={url} />
        <Form
          onChangeProjectInfo={handleProjectInfo}
          projectInfo={projectInfo}
          updateAvatar={handleProjectInfo}
          onClickSave={handleCreateProject}
          onClickReset={handleReset}
          cardUrl={url}
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;
