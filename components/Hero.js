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
          font-bold text-white font-body "
        >
          <div className="flex justify-center text-center ">
            <h1 className=" z-20 tracking-tight text-4xl mt-20 md:text-6xlmt-32">
              EDM Music Services
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
