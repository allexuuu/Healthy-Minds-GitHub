import React from 'react'
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import {styles} from "../styles";
import {services} from "../constants/constants";
import {fadeIn, textVariant} from "../utils/motion";
import { SectionWrapper } from '../hoc';

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div options={{
          max:45,
          scale:1,
          speed:450
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className='w-30 h-20 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const More = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Ce este Healthy Minds</p>
        <h2 className={styles.sectionHeadText}>Despre noi</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-5xl leading-[30px]'>Avem ca obiectiv organizarea unor serii de activități și evenimente care includ seminarii educaționale pentru a oferi cunoștințe despre nutriție, sănătate mentală și educație financiară, sesiuni de alergare în aer liber pentru a încuraja activitatea fizică, antrenamente pentru a dezvolta forța și rezistența, precum și evenimente caritabile pentru a ne implica în comunitate.<br/><br/>Scopul nostru este să oferim membrilor noștri resursele și inspirația necesare pentru a duce un stil de viață echilibrat și sănătos.<br/><br/>Suntem dedicați transformării vieților noastre și ale colegilor noștri prin promovarea sănătății fizice și mentale. Noi credem că învățarea și sprijinul reciproc într-o comunitate pot avea un impact semnificativ asupra bunăstării noastre. Prin intermediul experiențelor noastre, seminariilor și evenimentelor, vrem să inspirăm și să ajutăm tinerii să-și îmbunătățească sănătatea și să-și atingă potențialul maxim. Ne dorim să fim locul în care tinerii se pot conecta, învăța și crește împreună pentru a deveni versiuni mai bune și mai fericite ale lor înșiși.</motion.p>
    </>
  )
}

export default SectionWrapper(More, "");