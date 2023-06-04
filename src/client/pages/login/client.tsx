import React from "react";
import { hydrateRoot } from "react-dom/client";
import WithHTML from '../../utils/WithHTML';
import LoginPage from "./login";
import { assets } from "./assets";

const Page = () =>{
    return (
        <WithHTML assetMap={assets}><LoginPage/></WithHTML>
    )
}

hydrateRoot(document,<Page/>);