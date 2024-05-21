import FooterName from "../Componentes/FooterName"
import Creditos from "../Componentes/atomos/Creditos"
import Links from "../Componentes/atomos/Links"
import "./Footer.css"

function Footer(){

    return(
<div>
            <div id="footer">
                <Links></Links>
            </div>
            <div id="footerName">
                <FooterName></FooterName>
            </div>

            <div id="creditos">
                <Creditos></Creditos>
            </div>

</div>
    )

}

export default Footer