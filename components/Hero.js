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
        <div className={styles.HeroScrollButtonContainer}>
          <a className={styles.HeroScrollButton} href="#">
            ›
          </a>
        </div>
      </footer>
      <figure className={styles.HeroPictureContainer}>
        <img
          className={styles.HeroPicture}
          sizes="(max-width: 1900px) 100vw, 1900px"
          srcSet="
pexels-koolshooters-6628599_fkydwb_c_scale,w_320.jpg 320w,
pexels-koolshooters-6628599_fkydwb_c_scale,w_1060.jpg 1060w,
pexels-koolshooters-6628599_fkydwb_c_scale,w_1588.jpg 1588w,
pexels-koolshooters-6628599_fkydwb_c_scale,w_1900.jpg 1900w"
          src="pexels-koolshooters-6628599_fkydwb_c_scale,w_1900.jpg"
          alt=""
        />
      </figure>
    </article>
  );
};

export default Hero;
