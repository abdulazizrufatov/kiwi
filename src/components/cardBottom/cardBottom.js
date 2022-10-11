import "./cardBottom.scss";
import AppleNotebook from "../../assets/images/apple.png";
import GlassImg from "../../assets/images/glassimg.png";
import Ofice from "../../assets/images/ofice.png";
export const CardBottom = () => {
  return (
    <>
      <section className="card-bottom">
        <div className="container">
          <ul className="card-bottom-list">
            <li className="card-bottom-item">
              <img src={AppleNotebook} alt="picture" width="359" height="238" />
            </li>
            <li className="card-bottom-item">
              <img src={GlassImg} alt="picture" width="359" height="238" />
            </li>
            <li className="card-bottom-item">
              <img src={Ofice} alt="picture" width="359" height="238" />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};
