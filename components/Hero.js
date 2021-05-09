import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <article className={styles.Hero}>
      <div className={styles.HeroTitle}>
        <h1>
          Gantan<span className={styles.HeroTitleAsterisk}>*</span>
        </h1>
        <span className={styles.HeroSubTitle}>* lorem ipsum</span>
      </div>
      <footer className={styles.HeroMarquee}>
        <div className={styles.HeroMarqueeContainer}>
          <ul>
            <li>Reflexologie</li>
            <li>Massage</li>
            <li>Physioscan</li>
            <li>Contact</li>
          </ul>
        </div>
      </footer>
      <figure>
        <img
          className={styles.HeroPicture}
          sizes="(max-width: 1900px) 100vw, 1900px"
          srcSet="
pexels-anete-lusina-5240697_hhe07n_c_scale,w_320.jpg 320w,
pexels-anete-lusina-5240697_hhe07n_c_scale,w_1503.jpg 1503w,
pexels-anete-lusina-5240697_hhe07n_c_scale,w_1742.jpg 1742w,
pexels-anete-lusina-5240697_hhe07n_c_scale,w_1900.jpg 1900w"
          src="pexels-anete-lusina-5240697_hhe07n_c_scale,w_1900.jpg"
          alt=""
        />
      </figure>
    </article>
  );
};

export default Hero;
