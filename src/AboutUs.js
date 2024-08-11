import styles from './styles/aboutus.module.css';

export default function AboutUs() {
    return (
        <div className={styles['about-us']}>
          <h1>About Us</h1>
          <p>Welcome to <strong>Fantastic foods</strong>! Our restaurant is dedicated to bringing you an unforgettable dining experience with a menu that celebrates the finest ingredients and culinary craftsmanship.</p>
          <p>Established in 2015, we pride ourselves on offering a unique blend of traditional and contemporary dishes. Our chefs use only the freshest, locally-sourced ingredients to create mouthwatering meals that cater to a variety of tastes and dietary preferences.</p>
          <p>At Fantastic foods, we believe dining is not just about food—it's about creating memories. Whether you're here for a casual meal with friends, a special celebration, or a romantic dinner, our welcoming atmosphere and attentive service ensure that every visit is a memorable one.</p>
          <p>We look forward to serving you and making your dining experience truly exceptional!</p>
          <p>For reservations or inquiries, please contact us at: <a href="mailto:fantasticfoods.com">info@fantasticfoods.com</a></p>
        </div>
      );
}