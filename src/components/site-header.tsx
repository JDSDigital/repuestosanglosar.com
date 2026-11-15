import Image from "next/image";
import { useTranslations } from "next-intl";
import { toTelHref } from "./phone-list";
import styles from "./site-header.module.css";

export function SiteHeader() {
  const t = useTranslations("SiteHeader");
  const phone = useTranslations("PhoneList")("phonePrimary");

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <p className={styles.brand}>
          <Image
            className={styles.mark}
            src="/images/isotipo.webp"
            alt=""
            width={128}
            height={126}
            loading="eager"
          />
          <span className={styles.name}>{t("name")}</span>
        </p>
        <a className={styles.call} href={toTelHref(phone)}>
          {t("call")}
        </a>
      </div>
    </header>
  );
}
