import { bindActionCreators } from "redux";
import { setAuth, setAccountInfo, setHistogram, setHistogramDate, setPublicationsList } from "./actions";

function mapDispatchToProps(component) { 
    switch(component) {
        case "App":
        case "Menu":
        case "AuthWidget":
        case "CheckToken": return dispatch => {
            return {
                setAuth: bindActionCreators(setAuth, dispatch)
            };
        };

        case "ProfileWidget": return dispatch => {
            return {
                setAuth: bindActionCreators(setAuth, dispatch),
                setAccountInfo: bindActionCreators(setAccountInfo, dispatch)
            };
        };

        case "SearchWidget": return dispatch => {
            return {
                setHistogram: bindActionCreators(setHistogram, dispatch),
                setHistogramDate: bindActionCreators(setHistogramDate, dispatch),
                setPublicationsList: bindActionCreators(setPublicationsList, dispatch)
            }
        }

        default: return undefined;
    }
}

export default mapDispatchToProps;