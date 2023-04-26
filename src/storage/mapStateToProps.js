function mapStateToProps(component) {
    switch(component) {
        case "MainPage": {
            return state => {
                return {
                    isAuth: state.account.isAuth,
                    currentTariff: state.account.tariff
                };
            }
        }

        case "ProfileWidget": {
            return state => {
                return {
                    isAuth: state.account.isAuth,
                    usedCompanyCount: state.account.usedCompanyCount, 
                    companyLimit: state.account.companyLimit
                }
            }
        }

        case "Menu":
        case "AuthPage":
        case "CheckToken": {
            return state => {
                return {
                    isAuth: state.account.isAuth
                }
            }
        }

        case "ResultsPage": {
            return state => {
                return {
                    histogramLoadedDate: state.publications.histogramLoadedDate,
                    publicationsList: state.publications.publicationsList
                }
            }
        }

        case "ReportSlider": {
            return state => {
                return {
                    histogram: state.publications.histogram,
                    histogramLoadedDate: state.publications.histogramLoadedDate
                }
            }
        }

        default: return undefined;
    }
}

export default mapStateToProps;