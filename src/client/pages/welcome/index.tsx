import React from "react";
import WelcomePage from "./welcome";
import WithHTML from "../../utils/WithHTML";
import { assets } from "./assets";

export default function Welcome(){
    return (
        <WithHTML assetMap={assets}>
            <WelcomePage/>
        </WithHTML>
    )
}

export { assets };