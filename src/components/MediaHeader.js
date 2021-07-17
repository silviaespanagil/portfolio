const MediaHeader = () => {
  return (
    <>
      <nav>
        <ul className="mediaHeader">
          <li>
            <a
              className="mediaHeader__item"
              href="https://github.com/silviaespanagil"
              alt="Silvia's Github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className=" mediaHeader__font fab fa-github-alt " />
            </a>
          </li>
          <li>
            <a
              className="mediaHeader__item"
              href="https://www.linkedin.com/in/silviaespanagil/"
              alt="Silvia's LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className=" mediaHeader__font fab fa-linkedin-in " />
            </a>
          </li>
          <li>
            <a
              className="mediaHeader__item"
              href="https://dev.to/silviaespanagil"
              alt="Silvia's Blog"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="mediaHeader__font  fab fa-dev " />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MediaHeader;
