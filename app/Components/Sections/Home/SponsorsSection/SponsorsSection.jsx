import Image from "next/image";
import styles from "./SponsorsSection.module.css";

//Images
import shapeBlur from "../../../../../public/images/shapeBlur.webp";

//components
import TitleBox from "../../../UI/TitleBox";
import SponsorsInfosList from "./SponsorsInfos.jsx";

export default function SponsorsSection() {
  return (
    <div className={styles.container}>
      <div className={styles.titleBox}>
        <TitleBox title="Our Sponsors" />
      </div>
      <div className={styles.Slider}>
        <SponsorsInfosList />
        <SponsorsInfosList />
      </div>
      <Image className={styles.blurRight} src={shapeBlur}></Image>
      <Image className={styles.blurLeft} src={shapeBlur}></Image>
    </div>
  );
}