import { Link } from 'react-router-dom';
import styles from './banner.module.scss';
import items from '../BurgerMenu/constants';
import { RightArrow } from '../../assets/constants';
import { useMediaQuery } from 'react-responsive';

export default function Banner() {
  const isMaxWidth1070 = useMediaQuery({
    query: '(max-width: 1070px)',
  });
  return (
    <>
      {!isMaxWidth1070 && (
        <div className={styles.bannerContainer}>
          <div className={styles.bannerContainerLeft}>
            <ul>
              {items.map((item) => (
                <Link to={item.link} className={styles.bannerContainerLeftItem}>
                  <div className={styles.bannerContainerLeftItemRight}>
                    <img src={item.img} />
                    <p style={item.style}>{item.title}</p>
                  </div>
                  <img src={RightArrow} />
                </Link>
              ))}
            </ul>
          </div>
          <div className={styles.bannerContainerRight} />
        </div>
      )}
    </>
  );
}
