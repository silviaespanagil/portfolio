const GoTop = (props) => {
  return (
    <>
      <div className={props.showGoTop} onClick={props.scrollUp}>
        <section className="goTop">
          <p className="goTop__text">Top</p>
        </section>
      </div>
    </>
  );
};
export default GoTop;
