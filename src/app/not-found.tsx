import Link from "next/link";
import { useTranslations } from "next-intl";
import styles from "./page.module.css";

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>{t("title")}</h1>
        <p>{t("description")}</p>
        <Link href="/">{t("home")}</Link>
      </main>
    </div>
  );
}
