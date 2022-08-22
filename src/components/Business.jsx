import { features } from '../constants';
import styles, { layout } from '../style';
import Button from './Button';

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business, <br className="sm:block hidden" />
          we'll handle the money.{' '}
        </h2>
        <p className={`${styles.paragraph} max-w-[460px] mt-4`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money.
        </p>
        <Button styles="mt-10" />
      </div>
    </section>
  );
};

export default Business;
