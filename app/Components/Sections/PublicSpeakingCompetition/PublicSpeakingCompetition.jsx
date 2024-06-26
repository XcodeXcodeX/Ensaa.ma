import styles from "./page.module.css";
import SocialMediaList from "../../UI/SocialMediaList";
import participants from "../../../Database/participants";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Ensaa - PublicSpeakingCompetition",
  description: "ADE Ensaa - PublicSpeakingCompetition",
};

function PublicSpeakingCompetition({New}) {
  const links = {
    facebook:
      "https://www.facebook.com/photo/?fbid=788434646635668&set=a.454223453390124/",
    instagram: "https://www.instagram.com/p/C3GVkUvsNZU/",
  };
  return (
    <div className={styles.container}>
      <h1>{New.title}</h1>
      <div className={styles.infos}>
        <span>{New.category}</span>
        <SocialMediaList
          direction="row"
          className={styles.SocialMediaList}
          links={links}
          iconsSize="23"
          iconsGap="1.2rem"
          brightness="1"
        />
      </div>
      <p>
        Découvrez les participants du concours L’INGÉNIEUR ENSAA PREND LA PAROLE
        ! Chaque image représente un individu talentueux prêt à mettre en valeur
        ses compétences. Gardez un œil sur les participants éliminés que nous
        marquons en niveau de gris. Qui émergera victorieux et prendra la parole
        ?
      </p>
      <div className={styles.participants}>
      {participants[0].map((participant, index) => {
          return (
            <Link
              href={`/News/Event/PublicSpeakingCompetition/${participant.slug}`}
              key={index}
              className={styles.winner}
            >
              <Image
                className={styles.img}
                src={participant.img}
                alt={participant.name}
              />
            </Link>
          );
        })}
      </div>
      <div className={styles.participants}>
        {participants[1].map((participant, index) => {
          return (
            <Link
              href={
                participant.in
                  ? `/News/Event/PublicSpeakingCompetition/${participant.slug}`
                  : `#`
              }
              key={index}
              className={
                participant.win == true ? styles.participant : styles.demi
              }
            >
              <Image
                className={styles.img}
                src={participant.img}
                alt={participant.name}
              />
            </Link>
          );
        })}
      </div>
      <div className={styles.participants}>
        {participants[2].map((participant, index) => {
          return (
            <Link
              href={
                participant.in
                  ? `/News/Event/PublicSpeakingCompetition/${participant.slug}`
                  : `#`
              }
              key={index}
              className={
                participant.in == true ? styles.participant : styles.out
              }
            >
              <Image
                className={styles.img}
                src={participant.img}
                alt={participant.name}
              />
            </Link>
          );
        })}
      </div>
      {New.content.map((item, index) => (
        <>
          {item.text && <p dangerouslySetInnerHTML={{__html: item.text}}></p>}
          {item.img && (
            <div className={styles.imgContainer}>
              <Image
                placeholder="blur"
                className={styles.img}
                alt={slug}
                src={item.img}
              />
            </div>
          )}
          {item.youtubeId && (
            <div className={styles.iframeContainer}>
              <iframe
                src={"https://www.youtube.com/embed/" + item.youtubeId}
                title={New.slug}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </>
      ))}
    </div>
  );
}

export default PublicSpeakingCompetition;
