import type { Metadata } from "next";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import styles from "./page.module.css";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("NotFound");

  return { title: t("title") };
}

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
