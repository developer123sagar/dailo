import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Autocomplete, TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "10px",
};

export default function DeliveryForm() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const age = ["Male", "Female", "Other"];
  return (
    <div>
      <p className="text-white font-primary text-lg" onClick={handleOpen}>
        Add new delivery form
      </p>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade style={style} className="z-10 p-3 bg-slate-200" in={open}>
          <div>
            <p className="text-[#328a85] font-primary text-xl mb-4">
              Please fill up your form to continue
            </p>
            <div className="flex gap-4 justify-between flex-wrap">
              <TextField
                id="outlined-basic"
                label="Full Name"
                variant="outlined"
                className="w-[48%]"
                placeholder="Enter your full name"
              />
              <TextField
                id="outlined-basic"
                label="Address"
                variant="outlined"
                className="w-[48%]"
                placeholder="Enter your address"
              />
              <TextField
                id="outlined-basic"
                label="Mobile Number"
                placeholder="9811111111"
                type="tel"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                variant="outlined"
                className="w-[48%]"
              />
              <TextField
                id="outlined-basic"
                label="Landmark"
                placeholder="opposite of Laxmi bank"
                type="text"
                variant="outlined"
                className="w-[48%]"
              />
              <TextField
                id="outlined-basic"
                type="date"
                variant="outlined"
                className="w-[48%]"
              />

              <Autocomplete
                disablePortal
                id="combo-box-demo"
                className="w-[48%]"
                options={age}
                renderInput={(params) => <TextField {...params} label="Age" />}
              />

              <button className=" bg-green-900 px-16 font-primary text-white py-3 rounded-md" type="submit">Save</button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
