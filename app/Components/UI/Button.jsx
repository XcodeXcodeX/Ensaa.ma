import Link from "next/link";
import Image from "next/image";

export default function Button({ icon, text, link }) {
  const ButtonStyles = {
    background: "var(--light-glow)",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 12px",
    gap: "10px",
    height: "2.5rem",
  };
  const TextStyles = {
    color: "white",
    textTransform: "uppercase",
    fontWeight: "400",
    fontSize: "1.2rem",
    whiteSpace: "nowrap",
  };
  return (
    <Link href={link} style={ButtonStyles}>
      {icon && <Image width={25} src={icon} alt="icon"></Image>}
      <p style={TextStyles}>{text}</p>
    </Link>
  );
}
