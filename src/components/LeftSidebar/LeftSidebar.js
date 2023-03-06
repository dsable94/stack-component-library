import React from "react";
import { StyledLeftSidebar } from './LeftSidebar.styled';
import { Icon } from '../Icon';

class LeftSidebar extends React.Component  {
 constructor(){
   super()
   this.state ={

   }
 }
   sidebarNav = [
    {
      sidebarText: "dashboard",
      sidebarLink: "/dashboard",
      sidebarIcon: "dashboard.svg",
      dropDown: [
        {
          navText: "dropDown 1",
          navLink: "/dropDown1",
          navIcon: "dropDown1.svg",
        },
        {
          navText: "dropDown 1",
          navLink: "/dropDown1",
          navIcon: "dropDown1.svg",
        },
      ],
    },
    {
      sidebarText: "Profile",
      sidebarLink: "/profile",
      sidebarIcon: "profile.svg",
    },
  ];
  render(){
    const { icon } = this.props;
  return (
    <StyledLeftSidebar>
      <ul>
    {this.sidebarNav.map((item,index) => {
        return <li key={index}>
             <a href ={item.sidebarLink}>
               <Icon icon={icon} />
               {item.sidebarText}
             
             </a>
             {item.dropDown &&
             <div>
             {item.dropDown.map((dropdrownItem,index) => {
                 return <div key={index}>
                     <a href={dropdrownItem.navLink}>{dropdrownItem.navText}</a>
                 </div>
             })}
             </div>
    }
        </li>
    })}
</ul>
    </StyledLeftSidebar>
  )
  };
}

export default LeftSidebar;