import React, { Suspense, lazy } from "react";
import Layout from "../../layouts";
import Loading from "../../components/loading";
import { delayForDemo } from "../../utils";

import "./index.scss";

const Chart = lazy(() => delayForDemo(import("../../components/chart"), 3000));
const Cows = lazy(() => delayForDemo(import("../../components/list"), 1500));

export default function WelcomePage() {
  return (
    <Layout>
      <p className="test">test</p>
      <Suspense fallback={<Loading />}>
        <Chart />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Cows />
      </Suspense>
    </Layout>
  );
}
