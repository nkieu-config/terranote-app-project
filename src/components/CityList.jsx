import { useCities } from "../hooks/useCities";
import Spinner from "./Spinner";
import Message from "./Message";
import CityRow from "./CityRow";
import styles from "./CityList.module.css";

function CityList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => {
        return <CityRow city={city} key={city.id} />;
      })}
    </ul>
  );
}

export default CityList;
