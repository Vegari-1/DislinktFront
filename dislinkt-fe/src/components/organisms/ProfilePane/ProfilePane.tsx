import { Fragment, ReactNode } from "react";
import { useParams } from "react-router-dom";
import { ReactComponent as PlusIcon } from "../../../assets/svg/plus.svg";
import ProfileInfoData from "../../../models/data/ProfileInfoData";
import IconButton from "../../atoms/IconButton/IconButton";
import ProfileInfo from "../../atoms/ProfileInfo/ProfileInfo";
import ProfileMenu from "../../molecules/ProfileMenu/ProfileMenu";
import classes from "./ProfilePane.module.css";

interface ProfilePaneProps {
  onAddButtonClick: () => void;
  children?: ReactNode;
}

const ProfilePane: React.FC<ProfilePaneProps> = ({
  onAddButtonClick,
  children,
}) => {
  const { id } = useParams();

  const profile: ProfileInfoData = {
    id: "1",
    name: "Ksenija",
    surname: "Prcic",
    username: "resetKsenija",
    email: "ksenija@ksenija.com",
    gender: "Female",
    dateOfBirth: new Date(),
    phone: "392055235",
    info: "I am a robot human hybrid sent to this planet to investigate.",
    public: false,
    picture: "picture",
    following: true,
  };
  return (
    <Fragment>
      <ProfileInfo profile={profile} />
      {/* profile menu i ikonice vidljive samo ako je profil public
          ili ako je profil private, ali se prate! */}
      {(profile.public || profile.following) && (
        <ProfileMenu
          menuItems={[
            { text: "Skills", link: "/profile/" + id },
            { text: "Work experience", link: "/profile/" + id + "/work" },
            { text: "Education", link: "/profile/" + id + "/edu" },
            { text: "Posts", link: "/profile/" + id + "/posts" },
          ]}
        />
      )}
      {(profile.public || profile.following) && children}
      {!profile.public && !profile.following && (
        <div className={classes["private"]}>
          <div className={classes["private-title"]}>
            This Profile is Private
          </div>
          <div>Link with this profile to view more content</div>
        </div>
      )}
      {/* add icon je vidljivo samo ako je profil.id=ulogovan.id */}
      <div className={classes["add-button"]}>
        <IconButton icon={<PlusIcon />} boxShadow onClick={onAddButtonClick!} />
      </div>
    </Fragment>
  );
};

export default ProfilePane;
