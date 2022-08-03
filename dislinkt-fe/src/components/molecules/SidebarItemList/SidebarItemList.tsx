import SidebarItem from "../../atoms/SidebarItem/SidebarItem";
import { ReactComponent as HomeIcon } from "../../../assets/svg/home.svg";
import { ReactComponent as JobOfferIcon } from "../../../assets/svg/job-offer.svg";
import { ReactComponent as ConnectionRequestIcon } from "../../../assets/svg/connection-request.svg";
import { ReactComponent as MessagesIcon } from "../../../assets/svg/messages.svg";
import { ReactComponent as ProfileIcon } from "../../../assets/svg/profile.svg";
import { ReactComponent as SettingsIcon } from "../../../assets/svg/settings.svg";
import { ReactComponent as LogoutIcon } from "../../../assets/svg/logout.svg";

const SidebarItemList: React.FC = () => {
  return (
    <div>
      <SidebarItem text="Home" icon={<HomeIcon height={25} width={25} />} />
      <SidebarItem
        text="Job Offers"
        icon={<JobOfferIcon height={25} width={25} />}
      />
      <SidebarItem
        text="Connection Requests"
        icon={<ConnectionRequestIcon height={25} width={25} />}
      />
      <SidebarItem
        text="Messages"
        icon={<MessagesIcon height={25} width={25} />}
      />
      <SidebarItem
        text="Profile"
        icon={<ProfileIcon height={25} width={25} />}
      />
      <SidebarItem
        text="Settings"
        icon={<SettingsIcon height={25} width={25} />}
      />
      <SidebarItem text="Logout" icon={<LogoutIcon height={25} width={25} />} />
    </div>
  );
};

export default SidebarItemList;
