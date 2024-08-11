import styles from "./styles/header.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function Header({ myFunc, cartCount, alldish, cartDisplay }) {
  const cuisineTypes = Object.keys(alldish);

  return (
    <>
      <div className={styles.hero}>
        <img
          src="food_image/hero1-removebg-preview.png"
          alt="hero"
        />
        <div className={styles.logo}>
          <h1>Fantastic Foods</h1>
        </div>
        <ul className={styles.nav}>
          <li className={styles.active}>Home</li>
          <li className={styles.menuP}>Menu
            <ul className={styles.menuC}>
              {cuisineTypes.map(name => {
                return <li
                  key={name}
                  onClick={() => myFunc(name)}
                >
                  {name}
                </li>;
              })}
            </ul>
          </li>
          <li className={styles.cart} onClick={cartDisplay} ><FontAwesomeIcon
            className={styles.customIcon}
            icon={faCartShopping} />
            {(cartCount > 0) && <div className={styles.cartCount}>{cartCount}</div>}
          </li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  );
}