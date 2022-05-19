import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PaymentDetails from "./PaymentDetails";
import CreditCardForm from "./components/CreditCardForm";

function Home() {
    return(
        <Router>
            <Routes>
                <Route exact path="/pay" component={PaymentDetails} />
                <Route exact path="/creditcard" component={CreditCardForm}
                />
            </Routes>
        </Router>
        );
}
export default Home;