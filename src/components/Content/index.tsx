import { FC, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


interface IProps {

}

const Content: FC<IProps> = (props) => {
    return (
        <div>
            <Router>
                <Suspense fallback="loading" >
                    <Routes>
                        <Route />
                    </Routes>
                </Suspense>
            </Router>
        </div>
    )
}

export default Content