import { Link } from "react-router-dom";
import * as C from "./styled";
import iconWhatss from "../../assets/image/icons/whatsapp.webp";
import iconLinkedin from "../../assets/image/icons/linkedin.webp";
import iconGithubs from "../../assets/image/icons/github.webp";

export const Footer = () => {
    return(
        <C.FooterContainer id="contato">
          <h4>ENTRE EM CONTATO</h4>
          <C.Contato>
            <p>
              <i className="fa-solid fa-phone"></i> (28) 9 9996-1628
            </p>
            <p>
              <i className="fa-regular fa-envelope"></i>
              <Link className="btnMail" to="mailto:dev.robsonom@hotmail.com">
                dev.robsonom@hotmail.com
              </Link>
            </p>
            <C.RedeSociais>
              <Link
                to="https://api.whatsapp.com/send?phone=5528999961628"
                target="_blank"
              >
                <C.ImgIcon src={iconWhatss} alt="whatsApp" loading="lazy" />
              </Link>
              <Link to="https://github.com/robson-magalhaes" target="_blank">
                <C.ImgIcon src={iconGithubs} alt="GitHub" loading="lazy" />
              </Link>
              <Link
                to="https://www.linkedin.com/in/robson-o-magalhaes/"
                target="_blank"
              >
                <C.ImgIcon src={iconLinkedin} alt="Linkedin" loading="lazy" />
              </Link>
            </C.RedeSociais>
          </C.Contato>
          <div>
            <p></p>© 2024. RobynTec. Todos os Direitos Reservados
          </div>
        </C.FooterContainer>
    )
}