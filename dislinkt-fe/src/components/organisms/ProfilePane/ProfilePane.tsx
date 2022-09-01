import { Fragment, ReactNode } from "react";
import { ReactComponent as PlusIcon } from "../../../assets/svg/plus.svg";
import ProfileInfoData from "../../../models/data/ProfileInfoData";
import IconButton from "../../atoms/IconButton/IconButton";
import ProfileInfo from "../../atoms/ProfileInfo/ProfileInfo";
import ProfileMenu from "../../molecules/ProfileMenu/ProfileMenu";
import classes from "./ProfilePane.module.css";

interface ProfilePaneProps {
  onAddButtonClick?: () => void;
  children?: ReactNode;
}

const ProfilePane: React.FC<ProfilePaneProps> = ({
  onAddButtonClick,
  children,
}) => {
  const profile: ProfileInfoData = {
    name: "Ksenija",
    surname: "Prcic",
    username: "@resetKsenija",
    email: "ksenija@ksenija.com",
    gender: "Female",
    dateOfBirth: new Date(),
    phone: "392055235",
    info: "I am a robot human hybrid sent to this planet to investigate.",
    public: true,
    picture: "picture",
  };
  return (
    // redirektuj ga na formu i on popuni sve te informacije, izmeni ih i sta vec hoce
    // za ostale (skil, expierince i ostalo) se pravi posebna komponenta koja je kao tabelica
    // koja ce imati kanticu i plusic, da doda novi red i da obrise postojeci
    // voditi racuna da bude lep prikaz za experience i education (da ima uvuceno ispod)
    <Fragment>
      <ProfileInfo profile={profile} />
      <ProfileMenu
        menuItems={[
          { text: "Skills", link: "/profile" },
          { text: "Work experience", link: "/profile/work" },
          { text: "Education", link: "/profile/edu" },
          { text: "Posts", link: "/profile/posts" },
        ]}
      />
      {children}
      <div className={classes["add-button"]}>
        <IconButton icon={<PlusIcon />} boxShadow onClick={onAddButtonClick!} />
      </div>
    </Fragment>
    // <Skills />
  );
};

export default ProfilePane;
