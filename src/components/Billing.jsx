import { apple, bill, google } from '../assets';
import styles, { layout } from '../style';

import { motion } from 'framer-motion';

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt="billings"
        className="w-[100%] h-[100%] relative z-[5]"
      />

      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden" /> billing &
        invoicing.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        {' '}
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio commodi
        impedit provident molestiae eum aspernatur deserunt magni sit iusto
        dolorum explicabo aut obcaecati corrupti est, dolores unde accusamus, at
        vitae?{' '}
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <motion.img
          src={apple}
          alt="download on apple store"
          className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
          whileHover={{ scale: 1.1 }}
        />
        <motion.img
          src={google}
          alt="download on google play"
          className="w-[128px] h-[42px] object-contain cursor-pointer"
          whileHover={{ scale: 1.1 }}
        />
      </div>
    </div>
  </section>
);

export default Billing;
