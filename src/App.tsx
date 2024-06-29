import { ReactElement } from "react";

import { Layout } from "./layout";

import Home from "./screens/home/Home";
import About from "./screens/about/About";
import Works from "./screens/works/Works";
import Contact from "./screens/contact";

const App = (): ReactElement => {
  return (
    <Layout>
      <Home />
      <About />
      <Works />
      <Contact />
    </Layout>
  );
};

export default App;
