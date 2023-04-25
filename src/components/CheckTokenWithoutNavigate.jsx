import { connect } from "react-redux";
import mapStateToProps from "../storage/mapStateToProps";
import mapDispatchToProps from "../storage/mapDispatchToProps";

function CheckTokenWithoutNavigate({ setAuth }) {
    const now = new Date();
    const expire = new Date(localStorage.getItem("expire"));

    setAuth(now < expire);
}

export default connect(mapStateToProps("CheckToken"), mapDispatchToProps("CheckToken"))(CheckTokenWithoutNavigate);