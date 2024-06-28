import { ReactElement } from "react";

import { Layout } from "./layout";

import Home from "./screens/home/Home";
import About from "./screens/about/About";
import Works from "./screens/works/Works";

const App = (): ReactElement => {
  return (
    <Layout>
      <Home />
      <About />
      <Works />
    </Layout>
  );
};

export default App;
