import Image from "next/image";
import { useTranslations } from "next-intl";
import styles from "./category-bands.module.css";

const splitBands = [
  { key: "sealsBearings", width: 1400, height: 934 },
  { key: "drivetrain", width: 1400, height: 787 },
  { key: "engine", width: 1400, height: 933 },
  { key: "rubberSuspension", width: 1400, height: 933 },
  { key: "body", width: 1400, height: 1050 },
] as const;

export function CategoryBands() {
  const t = useTranslations("CategoryBands");

  return (
    <>
      <section className={styles.featured} aria-labelledby="category-brakes">
        <Image
          className={styles.featuredPhoto}
          src="/images/photos/brakes.webp"
          alt=""
          width={2000}
          height={1200}
        />
        <div className={styles.featuredContent}>
          <h2 id="category-brakes" className={styles.title}>
            {t("categories.brakes.name")}
          </h2>
          <p className={styles.lead}>{t("brakesNote")}</p>
          <p className={styles.description}>
            {t("categories.brakes.description")}
          </p>
        </div>
      </section>
      {splitBands.map(({ key, width, height }, index) => (
        <section
          key={key}
          className={`${styles.band} ${index % 2 === 0 ? styles.photoRight : styles.photoLeft}`}
          aria-labelledby={`category-${key}`}
        >
          <div className={styles.media}>
            <Image
              className={styles.photo}
              src={`/images/photos/${key}.webp`}
              alt=""
              width={width}
              height={height}
            />
          </div>
          <div className={styles.content}>
            <h2 id={`category-${key}`} className={styles.title}>
              {t(`categories.${key}.name`)}
            </h2>
            <p className={styles.description}>
              {t(`categories.${key}.description`)}
            </p>
          </div>
        </section>
      ))}
    </>
  );
}
