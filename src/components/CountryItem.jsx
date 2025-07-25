import { polyfillCountryFlagEmojis } from "country-flag-emoji-polyfill";
import styles from "./CountryItem.module.css";

// Fix for country flag emoji
polyfillCountryFlagEmojis();

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
