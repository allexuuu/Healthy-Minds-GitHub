import React from 'react'
import Tilt from "react-tilt";
import {motion} from "framer-motion";
import {styles} from "../styles"
import {github} from "../assets";
import { SectionWrapper } from '../hoc';
import {members} from "../constants/constants";
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description, image }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max:45,
          scale:1,
          speed:450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className='relative w-full h-[230px]'>
          <img src={image} alt={name} className='w-[200px] h-[200px] mx-auto my-[20px] object-cover rounded-full'/>
          {/* <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div 
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
              <img src={github} alt="github" className='w-1/2 h-1/2 object-contain'/>
            </div>
          </div> */}
        </div>

        <div>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
      </Tilt>
    </motion.div>
  )
}

const Members = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Cine suntem</p>
        <h2 className={styles.sectionHeadText}>Conducerea clubului</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-3 text-secondary text=[17px] max-w-6xl leading-[30px]'>
        Suntem o echipă tânără și motivată de elevi din cadrul Colegiului Național Gheorghe Lazăr, dedicată dezvoltării personale și profesionale. Ne-am unit pasiunea pentru îmbunătățirea stilului de viață cu dorința de a învăța și de a ne dezvolta competențele financiare și antreprenoriale. Clubul nostru oferă un mediu propice învățării și schimbului de idei, unde ne concentrăm să ne împlinim aspirațiile și să ne atingem obiectivele în acest domeniu. 
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {members.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Members, "members");