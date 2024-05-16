import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative w-full mx-auto highsmall">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#147bfb]"/>
          <div className="w-1 sm:h-50 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}><span className="text-[#147bfb]">Healthy </span>Minds</h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 z-50`}>Proiectul Healthy Minds a început din dorința de a promova un stil de viață sănătos și activ în rândul elevilor de liceu. Suntem o comunitate formată din tineri care își doresc să aducă o îmbunătățire semnificativă vieții și activității fizice.</p>
        </div>
      </div>
      {/* <ComputersCanvas /> */}

      {/* <div className="absolute xs:top-100 top-20 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">

          </div>
        </a>
      </div> */}
    </section>
  )
}

export default Hero