import React from "react";
import { hydrateRoot } from "react-dom/client";
import WithHTML from '../../utils/WithHTML';
import WelcomePage from "./welcome";
import { assets } from "./assets";

const Page = () =>{
    return (
        <WithHTML assetMap={assets}><WelcomePage/></WithHTML>
    )
}

hydrateRoot(document,<Page/>);