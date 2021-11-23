import { FC } from "react";
import "./styles.css";
import { MdLocationOn } from "react-icons/md";
import images from "../../assets";

const Home: FC = () => {
  const { HamburguerTransparent, CarlsLogo } = images;

  return (
    <div className="home-container">
      <div className="product-section-1">
        <div className="section-1-content">
          <p className="section-title">Eat better</p>
          <p className="section-title">burgers</p>
          <button className="button Our-burgers-button">
            <span>View our burgers</span>
          </button>
        </div>
      </div>
      <div className="info-section-1">
        <div className="info-section-1-content-1">
          <MdLocationOn />
          <span>Burger locator</span>
        </div>
        <div className="info-section-1-content-2">
          <p>Restaurant hours. Local menus. Catering options.</p>
          <p>Find burgers, chicken sandwiches, milkshakes and more.</p>
        </div>
        <button className="info-section-1-content-3 button">
          Find burgers
        </button>
      </div>
      <div className="half-section-1">
        <img
          className="hamburger-half"
          alt="Hamburger not load :c"
          src={HamburguerTransparent}
        />
        <div className="half-section-1-content">
          <div className="new-announcement">
            <p>New</p>
          </div>
          <p className="half-product-name">
            Black <br />
            Jack
            <br />
            Chicken
            <br />
            Club
          </p>
          <p className="half-product-description">
            Blackened chicken. Paper jack cheese. Beacon. Creole mayo. No, we
            aren´t bluffing...
          </p>
          <a className="find-more link">Find out more</a>
        </div>
      </div>
      <div className="half-section-2">
        <CarlsLogo />
        <p className="clubhouse-title">
          GET A<br />
          FREE BURGER
        </p>
        <p className="clubhouse-description">
          Be the first to know about our newest menu items and latest offers.
          More food. Less money. Commence mouthwatering.
        </p>
        <button className="button-join-club button">join the clubhouse</button>
      </div>
      <div className="product-section-2"></div>
      <div className="info-section-2"></div>
      <div className="product-section-3"></div>
    </div>
  );
};

export default Home;
