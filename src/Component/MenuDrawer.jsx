import React, { useState } from "react";
import { Link } from "react-scroll";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import { HiMenuAlt1 } from "react-icons/hi";

const MenuDrawer = () => {
  const [state, setState] = useState({ left: false });
  const toggleDrawer = (anchor, open) => () => {
    setState({ ...state, [anchor]: open });
  };

  const Navitems = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "About",
      to: "#about",
    },
    {
      name: "Chefs ",
      to: "/chefs",
    },
    {
      name: "Menu",
      to: "/menu",
    },
    {
      name: "Contact Us",
      to: "/Footer",
    },
  ];

  const list = (anchor) => (
    <div
      className="h-full drawerBg"
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {Navitems.map((text, id) => (
          <Link to={text.to} key={text.name + id}>
            <ListItem className="w-full border-b-[1px] border-primary">
              <ListItemButton onClick={toggleDrawer(anchor, false)}>
                <Typography
                  variant="body1"
                  style={{ fontSize: "16px", fontFamily: "cursive" }}
                >
                  {text.name}
                </Typography>
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
        <img
          src="https://media.discordapp.net/attachments/1043905461193285702/1114603582751260712/dailo_final_logo.png?width=100&height=100"
          alt="Dailo"
          className="w-full h-[220px] mt-10 object-contain"
        />
      </List>
    </div>
  );
  return (
    <>
      {["left"].map((anchor, id) => (
        <React.Fragment key={`left ${id}.${anchor}`}>
          <HiMenuAlt1
            color="#328a85"
            onClick={toggleDrawer(anchor, true)}
            className="text-[40px] lg:hidden hover:cursor-pointer"
          />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            PaperProps={{
              style: {
                width: "80%",
              },
            }}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </>
  );
};

export default MenuDrawer;
