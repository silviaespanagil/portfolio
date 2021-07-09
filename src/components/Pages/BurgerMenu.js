import { slide as Menu } from "react-burger-menu";

const BurgerMenu = () => {
  return (
    <>
      <Menu width={280}>
        <a id="home" className="menu-item" href="/">
          Home
        </a>
      </Menu>
    </>
  );
};
export default BurgerMenu;
