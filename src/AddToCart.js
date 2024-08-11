import styles from "./styles/addtocart.module.css";
export default function AddToCart({ addCount, selectedDish, cartDisplay }) {
    const dishes = selectedDish.dishes;
    const total = dishes.reduce((sum, dish) => {
        const price = parseFloat(dish.price.toFixed(2));
        const count = Number(dish.count);
        return sum + (price * count);
    }, 0).toFixed(2);
    return (
        <div className={styles.addCart}>
            <div className={styles.showCart} onClick={cartDisplay}>x</div>
            {(selectedDish.count > 0) ? (<div className={styles.child}>
                <h1>Your Order</h1>
                <table>
                    <tr>
                        <th>Dishes</th>
                        <th>Price</th>
                        <th>Qty</th>
                    </tr>
                    {dishes.map(dish => {
                        return <tr key={dish.id}>
                            <td>{dish.foodName}</td>
                            <td>{dish.price}</td>
                            <td>
                                <button onClick={() => addCount(dish, 0)}>-</button>
                                <span className={styles.qty}>{dish.count}</span>
                                <button onClick={() => addCount(dish, 1)}>+</button>
                            </td>
                        </tr>
                    })}
                    <tr className={styles.total}>
                        <td>Total</td>
                        <td colSpan={2}>{total}</td>
                    </tr>
                </table>
            </div>) : (<div className={styles.child}>
                <h1>Select some dishes!</h1>
            </div>)}
        </div>
    );
}