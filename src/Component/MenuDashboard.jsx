import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAdminStatus, setLoginStatus, setUserEmail } from "../Redux/auth/AuthSlice";
import { emptyCart } from "../Redux/Slices/CartProductSlice";
import { BiLogOut, BiSolidLeaf } from "react-icons/bi";
import { TbSettings } from "react-icons/tb";

export default function MenuDashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoggedIn, userEmail, isAdmin } = useSelector((state) => state.auth);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //logout
  const handleLogout = () => {
    setAnchorEl(null);
    dispatch(setLoginStatus(false));
    dispatch(setUserEmail(""));
    dispatch(setAdminStatus(false));

    // removing islogged in and email from localstorage
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("deliveryFormSubmit");
    dispatch(emptyCart());
    navigate("/");
  };

  return (
    <>
      {isLoggedIn ? (
        <>
          <Box>
            <Tooltip title={"Account"} className="text-4xl font-primary">
              <button
                onClick={handleClick}
                size="medium"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <FaUser size={17} color="black" />
              </button>
            </Tooltip>
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <Link className="cursor-pointer hover:no-underline hover:text-black" to={"/profile"}>
              <MenuItem onClick={handleClose}>
                <Avatar />
                <p className="text-xl font-bold ml-4">Profile</p>
              </MenuItem>
            </Link>
            <p className="text-lg px-10 mb-1  font-bold">
              {userEmail}
            </p>
            <Divider />
            {isAdmin ? null : (
              <Link className="cursor-pointer hover:no-underline" to={"/order"}>
                <MenuItem>
                  <BiSolidLeaf size={20} />
                  <p className="text-xl font-bold ml-8 ">My Orders</p>
                </MenuItem>
              </Link>
            )}

            <MenuItem onClick={handleClose}>
              <TbSettings fontSize="large" />
              <p className="text-xl font-bold ml-8">Settings</p>
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              <BiLogOut fontSize="large" />
              <p className="text-xl font-bold ml-8">Logout</p>
            </MenuItem>
          </Menu>
        </>
      ) : (
        <Tooltip title="Login">
          <Link to={"/login"} className="hover:no-underline">
            <button className="px-6 rounded bg-purple-400/30">
              Login
            </button>
          </Link>
        </Tooltip>
      )}
    </>
  );
}