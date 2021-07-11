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
      </div>
    </div>
  );
}
