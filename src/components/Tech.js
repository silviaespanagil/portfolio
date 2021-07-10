const Tech = () => {
  const techClass = [
    "fab fa-html5",
    "fab fa-css3-alt",
    "fab fa-js-square",
    "fab fa-react",
    "fab fa-sass",
    "fab fa-github-alt",
    "fab fa-node-js",
    "fab fa-npm",
    "fab fa-slack",
  ];

  const techs = techClass.map((tech) => {
    return <i className={tech} />;
  });
  return (
    <>
      <section className="tech">
        <h2>Tecnologías y competencias</h2>
        <div>{techs}</div>
        <div></div>
      </section>
    </>
  );
};

export default Tech;
