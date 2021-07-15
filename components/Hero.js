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
        <h4 className=" tracking-widest uppercase font-bold font-body text-center mt-5 z-20  text-lg  sm:text-xl md:text-xl  ">
          _Web Development // Agency // Digital Services_
        </h4>
      </div>
    </div>
  );
}
