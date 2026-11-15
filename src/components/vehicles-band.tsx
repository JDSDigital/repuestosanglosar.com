import Image from "next/image";
import { useTranslations } from "next-intl";
import styles from "./vehicles-band.module.css";

export function VehiclesBand() {
  const t = useTranslations("VehiclesBand");

  return (
    <section className={styles.band} aria-labelledby="vehicles-title">
      <Image
        className={styles.photo}
        src="/images/photos/vehicles.webp"
        alt=""
        width={1600}
        height={1067}
      />
      <div className={styles.content}>
        <div className={styles.textBlock}>
          <h2 id="vehicles-title" className={styles.title}>
            {t("title")}
          </h2>
          <p className={styles.text}>{t("text")}</p>
        </div>
      </div>
    </section>
  );
}
