import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import images from "../assets";
import { logOutSuccess, loginSuccess } from "../redux/user/actions";
import { getUserToken } from "../redux/user/selectors";
import "./styles.css";

const Layout: FC = ({ children }) => {
  const { CarlsIso, TwitterLogo, FacebookLogo, InstagramLogo } = images;

  const infoUser = useSelector(getUserToken);
  console.log(infoUser);

  const dispatch = useDispatch()

  const checkUser =() => {
    if (infoUser===""){
     dispatch(
       loginSuccess({
         info:{
            userName: "Samuel",
            email: "xame2005@gmail.com",
         },
          token: "DFKJGHBSDFKGNJSDFNGGKSJDFG"
       })
     )
    } else{
      dispatch(logOutSuccess())
    }
  }

  return (
    <div className="restaurant-container">
      <header className="restaurant-header">
        <CarlsIso className="restaurant-logo" />
        <ul className="restaurant-firstMenu">
          <li className="clickable">Menu</li>
          <li className="clickable">Locations</li>
          <li className="clickable">ClubHouse</li>
        </ul>
        <ul className="restaurant-secondMenu">
          <li className="clickable">The front yard</li>
          <li className="clickable">Own a BYB</li>
          <li className="clickable">Contact</li>
          <li className="clickable" onClick={checkUser}>{infoUser==="" ? "Log in" : "Log Out"}</li>
        </ul>
      </header>
      <div className="restaurant-content">{children}</div>
      <footer className="restaurant-footer">
        <ul className="footer-greyList">
          <li className="clickable">Catering</li>
          <li className="clickable">Community</li>
          <li className="clickable">Restaurant resources</li>
        </ul>
        <ul className="footer-greyList">
          <li className="clickable">Careers</li>
          <li className="clickable">Press</li>
        </ul>
        <div>
          <img
            className="social-media-logo clickable"
            alt="TwitterLogo"
            src={TwitterLogo}
          />
          <img
            className="social-media-logo clickable"
            alt="FacebookLogo"
            src={FacebookLogo}
          />
          <img
            className="social-media-logo clickable"
            alt="InstagramLogo"
            src={InstagramLogo}
          />
        </div>
        <ul className="footer-second-greyList">
          <li className="clickable">{"Terms & conditions"}</li>
          <li className="clickable">Privacy Policy</li>
        </ul>
        <div className="footer-rights">
          <p>© 2021 Carl's jr.</p>
          <p>All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
