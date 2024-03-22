import bgContact from "../assets/backContact.svg";
import { CopyRights } from "../components/Footer/CopyRights";
import { Footer } from "../components/Footer/Footer";
export const PageContact = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${bgContact})` }}
        className="w-full h-[25rem]"
      >
        <div>INI PAGE CONTACT</div>
      </div>
      <Footer />
      <CopyRights />
    </div>
  );
};
