// import Image from "next/image";
// import styles from "./sliderSection.module.css";

// //Images
// import shapeBlur from "../../../../../public/images/shapeBlur.webp";

// //components
// import TitleBox from "../../../UI/TitleBox";
// import SliderCard from "../ClubsSlider/ClubCard";

// export default function SliderSection({ title, images }) {
//   const imagesSlider = images.map((img, index) => (
//     <SliderCard key={`${img.name}-${index}`} image={img.src} name={img.name} />
//   ));

//   return (
//     <div className={styles.container}>
//       <div className={styles.titleBox}>
//         <TitleBox title={title} />
//       </div>
//       <div className={styles.Slider}>{imagesSlider}</div>
//       <Image className={styles.blurRight} src={shapeBlur}></Image>
//       <Image className={styles.blurLeft} src={shapeBlur}></Image>
//     </div>
//   );
// }
