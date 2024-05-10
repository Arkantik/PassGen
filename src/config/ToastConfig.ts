import "react-toastify/dist/ReactToastify.css";
import { Bounce, ToastOptions } from "react-toastify";

export const ToastConfig: ToastOptions = {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  rtl: false,
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: true,
  theme: "dark",
  transition: Bounce
};
