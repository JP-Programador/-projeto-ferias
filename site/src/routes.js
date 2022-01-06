import {BrowserRouter as Router, Routes, Route} from  'react-router-dom';
import Home from './pages/home';
import OperationAdd from './pages/4Operations/Add';
import OperationPotency from './pages/potency';
import OperationPercentage from './pages/percentage';



export default function Rou() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="OperationAdd" element={<OperationAdd/>} />
                <Route path="OperationPotency" element={<OperationPotency/>} />
                <Route path="OperationPercentage" element={<OperationPercentage/>} />
            </Routes>
        </Router>

    )
}