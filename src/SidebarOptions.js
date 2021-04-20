import React from "react";
import "./SidebarOptions.css";

Function SidebarOption({ text, Icon, active }) {
    return (
        <div clannName={'sidebarOption ${active && "sidebarOption--active"}'}>
        <Icon />
        <h2>{text}</h2>
        </div>
    );
}
