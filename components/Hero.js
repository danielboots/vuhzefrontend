import styles from "@/styles/Hero.module.css";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import Header from "./Header";

export default function Hero() {
  return (
    <div>
      <div className={styles.herohome}>
        <h1 className=" font-body text-center font-bold z-20 tracking-tight text-3xl  sm:text-4xl md:text-6xl ">
          Optimal Surgical
        </h1>
        <h4 className=" font-body text-center mt-5 z-20  text-2xl  sm:text-xl md:text-3xl ">
          Professional Medical Services
        </h4>
      </div>
    </div>
  );
}
