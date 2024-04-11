import React from "react";
import PropTypes from "prop-types";
import { Routes, Route } from "react-router-dom";
import { routeCodes } from "./routes";
//views
import Homepage from "../views/Homepage";
import NotFound from "../views/NotFound";

Router.propTypes = {
    location: PropTypes.object,
    history: PropTypes.object
};

function Router(props = {}) {

    function renderRouter() {
        return (
            <Routes>
                <Route exact path={routeCodes.HOMEPAGE} element={<Homepage {...props} />} />
                <Route path={"*"} element={<NotFound />} />
            </Routes>
        );
    }

    return renderRouter();
}

export default Router;