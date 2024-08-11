import { useEffect, useMemo } from 'react';
import { useState } from 'react';
import styles from "./styles/content.module.css";

export default function Content({ cuisineTypes, cartCount, alldish }) {
    const [cuisine, setCuisine] = useState(cuisineTypes);
    
    useEffect(() => {
        setCuisine(cuisineTypes);
    }, [cuisineTypes]);
    
    const FoodList = useMemo(() => {
      if (cuisine) {
        return alldish[cuisine] || [];
      } else {
      return Object.values(alldish).flat();
      }
    }, [cuisine, alldish]);
    return (
        <>
            <h1 style={{
                marginLeft: "20px"
            }}>{cuisine ? cuisine : "All Dishes"}</h1>
            <div className={styles.content}>
                {FoodList.map(({ id, foodName, price, url, count }) => {
                        return (<div className={styles.card} key={id}>
                            <img
                                src={url}
                                alt={url}
                            />
                            <p>{foodName}</p>
                            <p>{price}</p>
                            <button
                              onClick={() => {
                              cartCount({id, foodName, price, url, count: 1})
                              }}
                            >Add to Cart</button>
                        </div>);
                    })
                }
                
            </div>
        </>
    );
}