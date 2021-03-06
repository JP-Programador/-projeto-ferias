import {BrowserRouter as Router, Routes, Route} from  'react-router-dom';
import Home from './pages/home';
import OperationAdd from './pages/4Operations/Add';
import OperationMultiplication from './pages/4Operations/multiplication';
import OperationDivision from './pages/4Operations/division';
import OperationSubtract from './pages/4Operations/subtract';
import GeometricTriangle from './pages/geometric calculations/triangle';
import GeometricCircle from './pages/geometric calculations/circle';
import GeometricRectangles from './pages/geometric calculations/rectangle';
import OnedegreeEquation from './pages/equations/1st degree equation';

import OperationPotency from './pages/potency';
import OperationPercentage from './pages/percentage';
import DescriptionTips from './pages/tips';
import Conversions from './pages/Conversions';



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
                <Route path="1stDegreeEquation" element={<OnedegreeEquation/>} />
                <Route path="DescriptionTips" element={<DescriptionTips/>} />


                <Route path="OperationPotency" element={<OperationPotency/>} />
                <Route path="OperationPercentage" element={<OperationPercentage/>} />
                <Route path="Conversions" element={<Conversions/>} />


            </Routes>
        </Router>

    )
}