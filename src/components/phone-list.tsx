import { useTranslations } from "next-intl";
import styles from "./phone-list.module.css";

export function toTelHref(phone: string) {
  return `tel:${phone.replace(/[^+\d]/g, "")}`;
}

type PhoneListProps = {
  variant?: "cobalt" | "white";
  className?: string;
};

export function PhoneList({ variant = "cobalt", className }: PhoneListProps) {
  const t = useTranslations("PhoneList");
  const phones = [t("phonePrimary"), t("phoneSecondary")];

  return (
    <ul className={[styles.list, className].filter(Boolean).join(" ")}>
      {phones.map((phone) => (
        <li key={phone}>
          <a
            className={`${styles.button} ${styles[variant]}`}
            href={toTelHref(phone)}
          >
            {phone}
          </a>
        </li>
      ))}
    </ul>
  );
}
