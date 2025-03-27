import {MenuItem } from "../../../types/common";
import { uniqueId } from "lodash";

const SideBarItems:MenuItem[]=[
    {
        heading:"HOME",
        children:[
            {
                name:"Dashboard",
                icon:"solar:widget-add-line-duotone",
                id:uniqueId(),
                url:"/"
            },

        ]
    },
    {
        heading:"AUTH",
        children:[
            {
                name:"Profile",
                icon:"",
                id:uniqueId(),
                url:"/profile"
            },
            {
                name:"Register",
                icon:"",
                id:uniqueId(),
                url:"/auth/register"
            }
        ]
    },


]
export default SideBarItems;

