import Image from "next/image";
import { useTranslations } from "next-intl";
import styles from "./hero.module.css";
import { PhoneList } from "./phone-list";

export function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.media}>
        <Image
          className={styles.disc}
          src="/images/photos/hero.webp"
          alt=""
          width={2000}
          height={1333}
          loading="eager"
          fetchPriority="high"
        />
      </div>
      <div className={styles.content}>
        <h1 id="hero-title" className={styles.title}>
          {t("title")}
        </h1>
        <p className={styles.text}>{t("text")}</p>
        <PhoneList className={styles.phones} />
      </div>
    </section>
  );
}
