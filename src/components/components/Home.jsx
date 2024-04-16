import { About } from "./About";
import { Carousel } from "./Carousel";
import { CopyRights } from "../Footer/CopyRights";

import { Footer } from "../Footer/Footer";
import { Gallery } from "./Gallery";
import { InformationFile } from "./InformationFile";
import { Notes } from "./Notes";
import { Portfolio } from "./Portfolio";
import { Product } from "./Product";
import { Quotes } from "./Quotes";
import { Guide } from "./Guide";

export const Home = () => {
  return (
    <>
      <Carousel />
      <About />
      <Portfolio />
      <Product />
      <Quotes />
      <Guide />
      <InformationFile />
      <Notes />
      <Gallery />
      <Footer />
      <CopyRights />
    </>
  );
};
