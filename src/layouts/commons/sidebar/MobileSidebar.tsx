/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import SideBarItems from "./SideBarItems";
import NavItems from "./NavItems";
import SimpleBar from "simplebar-react";
import FullLogo from "../shared/logo/FullLogo";
import "simplebar-react/dist/simplebar.min.css";
import { Sidebar } from "flowbite-react";

const MobileSidebar: React.FC = () => {
  return (
    <>
      <div>
        <Sidebar
          className="fixed menu-sidebar pt-0 bg-white dark:bg-darkgray transition-all"
          aria-label="Sidebar with multi-Level Fropdown example"
        >
          <div className="px-5 py-4 pb-7 flex items-center sidebarlogo">
            <FullLogo />
          </div>
          <SimpleBar className="h-150">
            <div className="px-5 mt-2">
              <div className="sidebar-nav hide-menu">
                {SideBarItems &&
                  SideBarItems?.map((item, index) => (
                    <div className="caption" key={item.heading}>
                      <React.Fragment key={index}>
                        <h5 className="text-link dark:text-white/70 caption font-semibold leading-6 tracking-widest text-xs pb-2 uppercase">
                          {item.heading}
                        </h5>
                        {item.children?.map((child, index) => (
                          <React.Fragment key={child.id && index}>
                            <NavItems item={child} />
                          </React.Fragment>
                        ))}
                      </React.Fragment>
                    </div>
                  ))}
              </div>
            </div>
          </SimpleBar>
        </Sidebar>
      </div>
    </>
  );
};
export default MobileSidebar;
