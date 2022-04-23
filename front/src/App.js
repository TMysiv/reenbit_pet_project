import React from 'react';
import {Route, Routes} from 'react-router-dom';

import {Layout, UserDetails} from "./components";

const App = () => {

    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'/:name'} element={<UserDetails/>}/>
                </Route>

            </Routes>
        </>
    );
};

export default App;
