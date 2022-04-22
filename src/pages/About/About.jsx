/* eslint-disable max-len */
import React from 'react';
import './About.css';
import image from '../../images/personal.png';
import imageLinkedin from '../../images/linkedin.png';
import imageGit from '../../images/github.png';

function About() {
  return (
    <div className="about">
      <h1>!!! Hola !!!</h1>
      <h2>Soy Boris Monroy :) </h2>
      <img className="fotopresentacion" src={image} alt="" />
      <div className="contenedorimgtext">
        <div className="contenerdortext">
          <p>
            Soy Ingeniero Civil y programador en formación FULL SATACK con conocimiento en FRONT-END & BACK-END. Cuento con 3 años de experiencia en manejo de personal, funciones administrativas, capacidad de análisis y desarrollo de cualquier tipo de obra en ingeniería.
            Me caracterizo por estar en formación constante y adquirir nuevas habilidad de acuerdo a las necesidades actuales del mercado. Me gusta liderar, trabajar en equipo y conseguir nuevos retos.
          </p>
          <p>
            Adicional, gracias a la experiencia que he obtenido en la Ingeniería he desarrollado diferentes habilidades que me han hecho un mejor profesional;
            cumpliendo siempre con cada una de los proyectos y así mismo, entregando resultados satisfactorios.

          </p>
          <ul>
            <h3>Skills:</h3>
            <li>React</li>
            <li>NodeJS</li>
            <li>MongoDB</li>
            <li>Git</li>
            <li>GitHub</li>
          </ul>
          <h5>
            Para mas información,
            {' '}
            <a href="https://www.linkedin.com/in/boris-monroy-g/">Linkedin</a>
            {' , '}
            <a href="https://github.com/borismg04">GitHub</a>
            {' '}
          </h5>
        </div>

      </div>

      <div>
        <img className="logos" src={imageLinkedin} alt="" />
        <img className="logos" src={imageGit} alt="" />
      </div>
    </div>
  );
}

export default About;
