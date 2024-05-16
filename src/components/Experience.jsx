import React from 'react'
import { VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import {motion} from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import {styles} from "../styles";
import {experiences} from "../constants/constants";
import {SectionWrapper} from "../hoc"
import { textVariant } from '../utils/motion';

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{background:"#101e30", color:"#fff"}}
    contentArrowStyle={{borderRight:"7px solid #232631"}}
    date={experience.date}
    iconStyle={{background:experience.iconBg}}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img 
          src={experience.icon}
          alt={experience.company_name}
          className='w-[60%] h-[60%] object-contain'
        />
      </div>
    }
  >
    <div>
      <img src={experience.image} alt={experience.title} className='w-full h-full object-cover rounded-[5px] mb-3'/>
      <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
      <p className='text-secondary text-[16px] font-semibold' style={{margin: 0}}>{experience.company_name}</p>
    </div>

    <ul className='mt-5 list-disc ml-5 space-y-2'>
      {experience.points.map((point, index) => (
        <li key={`experience-point-${index}`} className='text-white-100 text-[14px] pl-1 tracking-wider'>
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Activități</p>
        <h2 className={styles.sectionHeadText}>Timeline</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "work")