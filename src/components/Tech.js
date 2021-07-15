const Tech = () => {
  const techClass = [
    "fab fa-html5 fa-3x",
    "fab fa-css3-alt fa-3x",
    "fab fa-js-square fa-3x",
    "fab fa-react fa-3x",
    "fab fa-sass fa-3x",
    "fab fa-github-alt fa-3x",
    "fab fa-node-js fa-3x",
    "fab fa-npm fa-3x",
    "fab fa-slack fa-3x",
  ];

  const techs = techClass.map((tech, index) => {
    return <i key={index} className={`${tech} tech__items`} />;
  });

  return (
    <>
      <section className="tech" id="techs">
        <h2 className="tech__title">Tecnologías</h2>
        <div className="tech__itemsWrap">{techs}</div>
        <div></div>
      </section>
    </>
  );
};

export default Tech;
