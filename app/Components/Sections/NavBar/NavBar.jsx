import Link from "next/link";
import Image from "next/image";
import styles from 
//svgs
import dreamersLogo from "../../../../public/svg/dreamersLogo.svg"

//components
import Button from "../../UI/Button";

export default function NavBar() {
  const NavElements = [
    {
      title: "Home",
      path: '/',
    },
    {
      title: "News",
      path: '/News',
    },
    {
      title: "Clubs",
      path: '/Clubs',
    },
    {
      title: "Press",
      path: '/Press',
    },
  ];

  const NavList = NavElements.map((Element)=>(
    <Link href={Element.path} key={Element.title}>{Element.title}</Link>
  ))

  return (
    <div className={styles.NavContainer}>
      <Image src={dreamersLogo}></Image>
      <div>{NavList}</div>
      <Button text="Contact us" link="/contact"/>
    </div>
  )
}