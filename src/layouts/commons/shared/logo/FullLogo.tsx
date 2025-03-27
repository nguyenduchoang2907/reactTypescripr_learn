import Logo from "../../../../assets/images/logo/logo.svg";
import { Link } from "react-router-dom";
const FullLogo=()=>{
    return(
        <Link to={"/"}>
            <img src={Logo} alt="logo" className="block h-40 w-40"/>
        </Link>
    )
}
export default FullLogo;