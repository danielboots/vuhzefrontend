import styles from "@/styles/Hero.module.css";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import Header from "./Header";

export default function Hero() {
  return (
    <div>
      <div className={styles.herohome}>
        <Header />

        <div
          className="  
        text-6xl  font-bold text-white font-body "
        >
          <div className="flex justify-center text-center mt-40">
            <h1 className=" z-20 ">EDM Music Services</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
