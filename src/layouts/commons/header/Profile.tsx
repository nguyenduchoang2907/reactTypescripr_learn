import { Dropdown } from "flowbite-react";
import {Icon} from "@iconify/react";
import user1 from "../../../assets/images/profile/user-1.jpg"

const Profile = () => {
    return (
      <div className="relative group/menu">
        <Dropdown
          label=""
          className="rounded-sm w-44"
          dismissOnClick={false}
          renderTrigger={() => (
            <span className="h-10 w-10 hover:text-primary hover:bg-lightprimary rounded-full flex justify-center items-center cursor-pointer group-hover/menu:bg-lightprimary group-hover/menu:text-primary">
              <img
                src={user1}
                alt="logo"
                height="35"
                width="35"
                className="rounded-full"
              />
            </span>
          )}
        >
          <div
            className="px-3 py-3 flex items-center bg-hover group/link w-full gap-3 text-dark cursor-pointer"
            onClick={() => window.location.href = "#"}
          >
            <Icon icon="solar:user-circle-outline" height={20} />
            My Profile
          </div>
          <div
            className="px-3 py-3 flex items-center bg-hover group/link w-full gap-3 text-dark cursor-pointer"
            onClick={() => window.location.href = "#"}
          >
            <Icon icon="solar:letter-linear" height={20} />
            My Account
          </div>
          <div
            className="px-3 py-3 flex items-center bg-hover group/link w-full gap-3 text-dark cursor-pointer"
            onClick={() => window.location.href = "#"}
          >
            <Icon icon="solar:checklist-linear" height={20} />
            My Task
          </div>
        </Dropdown>
      </div>
    );
  };
  export default Profile;
