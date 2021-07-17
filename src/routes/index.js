import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { routes } from "./routes";

const Routes = () => {
    const renderLayout = () => {
        return routes.map((item) => {
            return (
                <Route key={item.path} {...item}>
                    {console.log(item.path)}
                    <item.Component />
                </Route>
            )
        })
    }

    return (
        <BrowserRouter>
            <Suspense fallback={null}>
                <Switch>
                    {renderLayout()}
                </Switch>
            </Suspense>
        </BrowserRouter>
    )
}


export default Routes;