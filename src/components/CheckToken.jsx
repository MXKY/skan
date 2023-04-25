import { connect } from "react-redux";
import mapStateToProps from "../storage/mapStateToProps";
import mapDispatchToProps from "../storage/mapDispatchToProps";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function CheckToken({ unauthRedirect, isAuth, setAuth }) {
    const navigate = useNavigate();

    useEffect(() => {
        let itervalId;

        execute();

        itervalId = setInterval(execute, 15000);

        function execute() {
            const now = new Date();
            const expire = new Date(localStorage.getItem("expire"));
    
            setAuth(now < expire);
    
            if (!isAuth)
                navigate(unauthRedirect);
        }
        
        return () => {
            clearInterval(itervalId);
        }
    }, [unauthRedirect, isAuth, setAuth, navigate]);
}

export default connect(mapStateToProps("CheckToken"), mapDispatchToProps("CheckToken"))(CheckToken);