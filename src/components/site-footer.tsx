import { useTranslations } from "next-intl";
import styles from "./site-footer.module.css";

export function SiteFooter() {
  const t = useTranslations("SiteFooter");

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.name}>{t("name")}</p>
        <p className={styles.location}>{t("location")}</p>
      </div>
    </footer>
  );
}
