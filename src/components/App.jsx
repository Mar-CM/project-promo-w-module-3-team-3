import { useState } from 'react';
import '../scss/App.scss';

import Header from './Header';
//import Main from './Main';
import Preview from './Preview';
import Form from './Form';
import Footer from './Footer';
import LabelButton from './LabelButton';

const App = () => {
  const [projectName, setProjectName] = useState('');
  const [slogan, setSlogan] = useState('');
  const [repository, setRepository] = useState('');
  const [demo, setDemo] = useState('');
  const [tech, setTech] = useState('');
  const [descripction, setDescription] = useState('');
  const [userName, setUserName] = useState('');
  const [userJob, setUserJob] = useState('');

  const handleProjectName = (event) => {
    setProjectName(event.target.value);
  };
  const handleSlogan = (event) => {
    setSlogan(event.target.value);
  };
  const handleRepository = (event) => {
    setRepository(event.target.value);
  };
  const handleDemo = (event) => {
    setDemo(event.target.value);
  };
  const handleTech = (event) => {
    setTech(event.target.value);
  };
  const handleDescription = (event) => {
    setDescription(event.target.value);
  };
  const handleUserName = (event) => {
    setUserName(event.target.value);
  };
  const handleUserJob = (event) => {
    setUserJob(event.target.value);
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
          descripction={descripction}
          userName={userName}
          userJob={userJob}
        />
        <Form />
      </main>
      <Footer />
    </div>
  );
};

export default App;
