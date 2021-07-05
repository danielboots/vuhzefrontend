import styles from "@/styles/Hero.module.css";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Hero() {
  return (
    <div className={styles.herohome}>
      <div className="flex  items-center ">
        <h1 className="text-6xl font-bold text-white font-body z-10">
          EDM Music Services
        </h1>
      </div>
      <div className={styles.container}></div>
    </div>
  );
}
