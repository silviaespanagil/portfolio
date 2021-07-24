const AboutMe = () => {
  return (
    <>
      <article className="AboutMe" id="sobreMi">
        <h2 className="AboutMe__title">Hola mundo...</h2>
        <div className="AboutMe__content">
          <h1 className="AboutMe__content-title">
            Soy Silvia España , Front End Developer
          </h1>
          <p className="AboutMe__content-paragraph">
            Apasionada y curiosa por naturaleza, tras varios años
            desarrollándome en Marketing y formando parte de equipos
            multidisciplinarios desarrollando diversos proyectos, decidí hacer
            caso a un llamado{" "}
            <span className="AboutMe__content-paragraph-bold">
              de curiosidad y pasión
            </span>{" "}
            y me apunté a un Bootcamp intensivo para aprender a programar 👩🏻‍💻.
          </p>
          <p className="AboutMe__content-paragraph">
            Pasé de diseñar e implementar estrategias de comunicación digital
            para desarrollar código que permite comunicar todo el tiempo. Porque
            somos todo lo que hacemos y toda presencia tiene voz.
          </p>
          <p className="AboutMe__content-paragraph">
            En la programación encontré una conjunción de cosas que me gustan:
            resolver problemas 🧩, mejorar experiencias 🚀 y crear ⛏️. Ahora
            estoy en la búsqueda de{" "}
            <span className="AboutMe__content-paragraph-bold">
              mi primera oportunidad laboral como Front End Developer.
            </span>{" "}
            ¿Creamos algo?
          </p>
          <p className="AboutMe__content-paragraph">
            Cuando no estoy entre líneas de código me puedes conseguir detrás de
            un libro, jugando videojuegos 🎮 o haciendo rutas con mi familia y
            perro 🐶.
          </p>
          <p className="AboutMe__content-paragraph">
            Actualmente estoy perfeccionando{" "}
            <span className="AboutMe__content-paragraph-bold">
              Javascript y React{" "}
            </span>
            mientras aprendo un poco de{" "}
            <span className="AboutMe__content-paragraph-bold">
              Typescript y Angular ⌨️
            </span>
            .
          </p>
        </div>
      </article>
    </>
  );
};

export default AboutMe;
