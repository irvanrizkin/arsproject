import { About } from "./About";
import { CopyRights } from "./Footer/CopyRights";

import { Footer } from "./Footer/Footer";
import { GuideLines } from "./GuideLines";
import { HeroBanner } from "./HeroBanner";
import { InformationFile } from "./InformationFile";
import { Notes } from "./Notes";
import { Portfolio } from "./Portfolio";
import { Product } from "./Product";
import { Quotes } from "./Quotes";

export const Home = () => {
  return (
    <>
      <HeroBanner />
      <About />
      <Portfolio />
      <Product />
      <Quotes />
      <GuideLines />
      <InformationFile />
      <Notes />
      <Footer />
      <CopyRights />
    </>
  );
};
