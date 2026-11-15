import { useTranslations } from "next-intl";
import styles from "./call-to-action.module.css";
import { PhoneList } from "./phone-list";

export function CallToAction() {
  const t = useTranslations("CallToAction");

  return (
    <section className={styles.band} aria-labelledby="cta-title">
      <h2 id="cta-title" className={styles.title}>
        {t("title")}
      </h2>
      <p className={styles.text}>{t("text")}</p>
      <PhoneList variant="white" className={styles.phones} />
    </section>
  );
}
