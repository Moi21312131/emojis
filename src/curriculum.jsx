import React from 'react';

function Header() {
  return (
    <header>
      <h1>Curriculum Vitae</h1>
    </header>
  );
}

function PersonalInfo() {
  return (
    <section>
      <h2>Información Personal</h2>
      <p>Nombre: Neyder Fabian Gomez Aguilar</p>
      <p>Correo Electrónico: neyderfabiangomez@gmail.com</p>
      <p>Teléfono: 3188714164</p>
      <p>Ubicación: Medellín, Colombia</p>
    </section>
  );
}

function Experience() {
  return (
    <section>
      <h2>Experiencia Profesional</h2>
      <p>Nombre de la Empresa: Mesero</p>
      <p>Periodo: 2018-2019</p>
      <p>Tareas realizadas:</p>
      <ul>
        <li>Atender a los clientes</li>
        <li>Recibir los pagos</li>
        <li>Organizar el negocio</li>
      </ul>
    </section>
  );
}

function Skills() {
  const skills = [
    "Trabajo en equipo",
    "Puntualidad",
    "Compromiso",
    "Dinamismo",
    "Creatividad",
    "Responsabilidad",
  ];

  return (
    <section>
      <h2>Habilidades</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

function Education() {
  return (
    <section>
      <h2>Educación</h2>
      <p>Título: Bachillerato</p>
      <p> institución: [colegio infantas]</p>
      <p>Periodo: 2013 – 2019</p>
    </section>
  );
}

function Languages() {
  const languages = ["Inglés", "Español", "Portugués"];

  return (
    <section>
      <h2>Idiomas</h2>
      <ul>
        {languages.map((language, index) => (
          <li key={index}>{language}</li>
        ))}
      </ul>
    </section>
  );
}

function Software() {
  const software = [
    "Word",
    "Excel",
    "Photoshop",
    "Google Drive",
    "Adobe",
    "Illustrator",
    "SolidWorks",
  ];

  return (
    <section>
      <h2>Software</h2>
      <ul>
        {software.map((software, index) => (
          <li key={index}>{software}</li>
        ))}
      </ul>
    </section>
  );
}

function References() {
  const references = [
    { name: "Eliana Aguilar Arcila", title: "Comerciante", phone: "3186048019", email: "dianita_aguilar@hotmail.es" },
    { name: "Antonio Torres Albao", title: "Electricista y albañil", phone: "3163588902", email: "antoniotorresalbao@gmail.com" },
    { name: "Beinis Aguilar Arcila", title: "Servicio al cliente", phone: "3053502800", email: "beinis-aguilar@gmail.com" },
  ];

  return (
    <section>
      <h2>Referencias</h2>
      <ul>
        {references.map((reference, index) => (
          <li key={index}>
            <p><strong>{reference.name}</strong></p>
            <p>{reference.title}</p>
            <p>Teléfono: {reference.phone}</p>
            <p>E-mail: {reference.email}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <PersonalInfo />
      <Experience />
      <Skills />
      <Education />
      <Languages />
      <Software />
      <References />
    </div>
  );
}

export default App;
