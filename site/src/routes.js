import {BrowserRouter as Router, Routes, Route} from  'react-router-dom';
import Home from './pages/home';
import OperationAdd from './pages/4Operations/Add';
import OperationMultiplication from './pages/4Operations/multiplication';
import OperationDivision from './pages/4Operations/division';
import OperationSubtract from './pages/4Operations/subtract';
import GeometricTriangle from './pages/geometric calculations/triangle';
import GeometricCircle from './pages/geometric calculations/circle';
import GeometricRectangles from './pages/geometric calculations/rectangle';


export default function Rou() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="OperationAdd" element={<OperationAdd/>} />
                <Route path="OperationMultiplication" element={<OperationMultiplication/>} />
                <Route path="OperationDivision" element={<OperationDivision/>} />
                <Route path="OperationSubtract" element={<OperationSubtract/>} />
                <Route path="GeometricTriangle" element={<GeometricTriangle/>} />
                <Route path="GeometricCircle" element={<GeometricCircle/>} />
                <Route path="GeometricRectangles" element={<GeometricRectangles/>} />

            </Routes>
        </Router>

    )
}