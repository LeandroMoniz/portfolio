import {Routes as RoutesDom, Route} from 'react-router-dom';
import PageFull from '../PageFull/PagesFull';

function Routes() {
    return (
        <RoutesDom>
            <Route element={<PageFull />} path="/" exact />
        </RoutesDom>
    );
}
 
export default Routes