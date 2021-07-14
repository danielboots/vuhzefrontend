import styles from "@/styles/Hero.module.css";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import Header from "./Header";

export default function Hero() {
  return (
    <div>
      <div className={styles.herohome}>
        <h1 className=" uppercase font-body text-center font-bold z-20 tracking-tight text-3xl  sm:text-4xl md:text-6xl ">
          Vuhze
        </h1>
        <h4 className=" tracking-wider  font-body text-center mt-5 z-20  text-2xl  sm:text-xl md:text-3xl  ">
          Professional Web Development Services
        </h4>
      </div>
    </div>
  );
}
