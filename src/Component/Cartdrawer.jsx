import React, { useState } from "react";
import {
  Drawer,
} from "@mui/material";
import { HiShoppingCart } from "react-icons/hi";
import CartItems from "./CartItems";

const CartDrawer = () => {
  const [state, setState] = useState({ left: false });

  const toggleDrawer = (anchor, open) => () => {
    setState({ ...state, [anchor]: open });
  };
   
  return (
    <>
      {["right"].map((anchor, id) => (
        <React.Fragment key={`left ${id}.${anchor}`}>
          <HiShoppingCart
            size={25}
            onClick={toggleDrawer(anchor, true)}
            color="#328a85"
            className="hover:cursor-pointer"
          />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            PaperProps={{
              style: {
                width: "90%",
                maxWidth: "500px", 
              },
            }}
          >
            <CartItems onClose={toggleDrawer(anchor,false)} />
          </Drawer>
        </React.Fragment>
      ))}
    </>
  );
};

export default CartDrawer;
