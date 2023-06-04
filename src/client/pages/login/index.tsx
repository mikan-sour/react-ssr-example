import React from "react";
import LoginPage from "./login";
import WithHTML from "../../utils/WithHTML";
import { assets } from "./assets";

export default function Login(){
    return (
        <WithHTML assetMap={assets}>
            <LoginPage/>
        </WithHTML>
    )
}

export { assets };