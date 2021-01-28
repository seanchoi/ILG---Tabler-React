import React, {useState} from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import {Site} from 'tabler-react'

export default function SiteHeader() {
    const [toggle, setToggle] = useState(false);
    const { user, isAuthenticated} = useAuth0();
    const logo = "https://interiorlogicgroup.com/wp-content/uploads/2018/12/ILG-Logo-CMYK.png"

    return (
        isAuthenticated?
        <Site.Header
            imageURL={logo}
            alt="logo"
            notificationsTray={{
              unread: true,
              notificationsObjects: [
                {
                  avatarURL: "http://tabler-react.com/demo/faces/male/16.jpg",
                  message: "Nathan pushed new commit: Fix page load performance",
                  time: "10 minutes ago",
                },
                {
                  avatarURL: "http://tabler-react.com/demo/faces/female/1.jpg",
                  message: "Alice started new task: Tabler UI design.",
                  time: "1 hour ago",
                },
              ]
            }}
            accountDropdown={{
              avatarURL: user.picture,
              name: user.name,
              description: "Web Devloper",
              options: [
                "profile",
                { icon: "settings", value: "Settings", to: "/settings" },
                "mail",
                "message",
                "divider",
                "help",                     
              ]
            }}
          onMenuToggleClick={() => setToggle(!toggle)}
          >

          </Site.Header>      
        :       
          <Site.Header
            imageURL={logo}
            alt="logo"            
            accountDropdown={{
              avatarURL: "https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png",
              name: "Visitor",              
            }}
          onMenuToggleClick={() => setToggle(!toggle)}
          >

          </Site.Header>      
    )
        
}
