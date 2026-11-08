import Image from "next/image";
import { useTranslations } from "next-intl";
import styles from "./page.module.css";

function toTelHref(phone: string) {
  return `tel:${phone.replace(/[^+\d]/g, "")}`;
}

export default function Home() {
  const t = useTranslations("HomePage");
  const phones = [t("phonePrimary"), t("phoneSecondary")];

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.logo}>
          <Image
            src="/images/logo.png"
            alt={t("title")}
            width={2400}
            height={1340}
            sizes="(max-width: 736px) 100vw, 720px"
            loading="eager"
          />
        </h1>
        <p className={styles.status}>{t("status")}</p>
        <p>{t("tagline")}</p>
        <address className={styles.contact}>
          <h2>{t("contactTitle")}</h2>
          <ul>
            {phones.map((phone) => (
              <li key={phone}>
                <a href={toTelHref(phone)}>{phone}</a>
              </li>
            ))}
          </ul>
        </address>
      </main>
    </div>
  );
}
