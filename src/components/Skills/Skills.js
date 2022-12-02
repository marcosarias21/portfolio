/* eslint-disable no-shadow */
import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { Container } from '../Container';
import { dataSkills } from '../../helper/dataSkills';
import './skill.scss';

const Skills = ({ theme }) => {
  return (
    <Container className={classNames({
      'bg-skills-dark': theme === 'dark',
      'bg-skills': theme === 'light',
    })}>
      <div className='d-flex flex-column'>
          <h2 className='color-title mb-4'> My Skillset</h2>
          <div className='d-flex flex-wrap justify-content-center skill-section-space'>
            <AnimatePresence>
              {dataSkills.map(({
                iconClass, title, cardClass, id,
              }, i) => {
                return (
                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                    },
                    visible: (i) => ({
                      opacity: 1,
                      transition: {
                        delay: i * 0.2,
                      },
                    }),
                  }}
                  key={id}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true }}
                  custom={i}
                  className={`text-center skillCard ${cardClass}`}>
                  <i className={`skillIcon ${iconClass}`}></i>
                  <h5> {title} </h5>
                </motion.div>);
              })}
            </AnimatePresence>
          </div>
      </div>
    </Container>
  );
};

export default Skills;
