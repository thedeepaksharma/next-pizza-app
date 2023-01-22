import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";
import Link from "next/link";

const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Link href={`/product/}`} passHref>
        <Image src="/img/pizza.png" alt="" width="200" height="200" />
      </Link>
      <h1 className={styles.title}>Pizza</h1>
      <span className={styles.price}>$21</span>
      <p className={styles.desc}>Special pizza in city</p>
    </div>
  );
};

export default PizzaCard;
