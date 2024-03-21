import { useState } from 'react';
import '../scss/App.scss';

import Header from './Header';
//import Main from './Main';
import Preview from './Preview';
import Form from './Form';
import Footer from './Footer';
import GetAvatar from './GetAvatar';

const App = () => {
  const [projectInfo, setProjectInfo] = useState({
    name: 'Elegant Workspaces',
    slogan: 'Exclusive designs',
    repo: '',
    demo: '',
    technologies: 'React, CSS, HTML',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas ab quod voluptatibus unde! Voluptates consequuntur dolorum eligendi ipsa amet voluptatum ipsam doloremque quia non? Voluptate provident ipsum nihil repudiandae. Nihil?',
    autor: 'Mary Poppins',
    job: 'Babysitter',
    imageProject: '',
    imageAuthor: '',
  });

  const handleProjectInfo = (value, id) => {
    setProjectInfo({ ...projectInfo, [id]: value });
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
        <Preview projectInfo={projectInfo} />
        <Form onChangeProjectInfo={handleProjectInfo} projectInfo={projectInfo} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
