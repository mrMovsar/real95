
import FooterLogo from "./FooterLogo";
import FooterMenu from "./FooterMenu";
import CopyRight from "./CopyRight";
function Footer(){
    return(
        <div className="footerWrap">
        <div className="footer">
            <FooterLogo/>
            <FooterMenu/>
            <CopyRight/>
        </div>
        </div>
    )
}
export default Footer;