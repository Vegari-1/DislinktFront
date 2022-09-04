import SidebarItem from "../../atoms/SidebarItem/SidebarItem";
import { ReactComponent as HomeIcon } from "../../../assets/svg/home.svg";
import { ReactComponent as JobOfferIcon } from "../../../assets/svg/job-offer.svg";
import { ReactComponent as ConnectionRequestIcon } from "../../../assets/svg/connection-request.svg";
import { ReactComponent as MessagesIcon } from "../../../assets/svg/messages.svg";
import { ReactComponent as ProfileIcon } from "../../../assets/svg/profile.svg";
import { ReactComponent as PeopleIcon } from "../../../assets/svg/people.svg";
import { ReactComponent as SettingsIcon } from "../../../assets/svg/settings.svg";
import { ReactComponent as LogoutIcon } from "../../../assets/svg/logout-danger.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../../../store/actions/auth-actions";
import SidebarItemLogout from "../../atoms/SidebarItemLogout/SidebarItemLogout";
import classes from "./SidebarItemList.module.css";

const SidebarItemList: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const selected = window.location.href.split("/").at(-1)!;
  const selectedProfile = window.location.href.split("/").slice(-2).join("/");
  const clickHandler = (value: string) => {
    navigate("/" + value);
    console.log("DODATI DOBAVLJANJE ULOGOVANOG KORISNIKA");
  };

  const logoutHandler = () => {
    dispatch(logOut());
    navigate("/auth");
  };
  return (
    <div className={classes["wrapper"]}>
      <SidebarItem
        text="Home"
        value="home"
        selected={selected}
        icon={<HomeIcon height={25} width={25} />}
        onClick={clickHandler}
      />
      <SidebarItem
        text="My profile"
        value="profile/id_ulogovanog_korisnika"
        selected={selectedProfile}
        icon={<ProfileIcon height={25} width={25} />}
        onClick={clickHandler}
      />
      <SidebarItem
        text="People"
        value="people"
        selected={selected}
        icon={<PeopleIcon height={25} width={25} />}
        onClick={clickHandler}
      />
      <SidebarItem
        text="Job Offers"
        value="job-offers"
        selected={selected}
        icon={<JobOfferIcon height={25} width={25} />}
        onClick={clickHandler}
      />
      <SidebarItem
        text="Messages"
        value="messages"
        selected={selected}
        icon={<MessagesIcon height={25} width={25} />}
        onClick={clickHandler}
      />
      <SidebarItem
        text="Connection Requests"
        value="conn-requests"
        selected={selected}
        icon={<ConnectionRequestIcon height={25} width={25} />}
        onClick={clickHandler}
      />
      <SidebarItem
        text="Settings"
        value="settings"
        selected={selected}
        icon={<SettingsIcon height={25} width={25} />}
        onClick={clickHandler}
      />
      <SidebarItem
        text="Events"
        value="events"
        selected={selected}
        icon={<SettingsIcon height={25} width={25} />}
        onClick={clickHandler}
      />
      <div className={classes["bottom"]}>
        <SidebarItemLogout
          text="Logout"
          value="logout"
          selected={selected}
          icon={<LogoutIcon height={25} width={25} />}
          onClick={logoutHandler}
        />
      </div>
    </div>
  );
};

export default SidebarItemList;
