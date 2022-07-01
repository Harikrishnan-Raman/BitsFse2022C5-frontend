import {CustomerLandingPage} from "../components/CustomerLandingPage"
// import {OrderMedicinePage} from "../components/OrderMedicinePage"
import { Route } from "react-router-dom";
// import {UnderConstructionPage } from "../components/UnderConstructionPage"
const Routes = () => {
    return (
        <div>
            {/* <Switch> */}
            {/* <Routes> */}
                <Route path="/customerlandingpage" component={CustomerLandingPage}/>
                {/* <Route exact path="/" component={CustomerLandingPage}/> */}
                {/* <Route path="/ordermedicines" component={OrderMedicinePage}/> */}
                {/* <Route path="/underconstruction" component={UnderConstructionPage}/> */}
            {/* </Routes> */}
            {/* </Switch> */}
        </div>
    )
}
export default Routes;