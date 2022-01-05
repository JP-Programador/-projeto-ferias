import {BrowserRouter as Router, Routes, Route} from  'react-router-dom';
import Home from './pages/home';
import OperationAdd from './pages/4Operations/Add';


export default function Rou() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="OperationAdd" element={<OperationAdd/>} />
            </Routes>
        </Router>

    )
}