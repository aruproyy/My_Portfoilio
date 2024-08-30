import { motion } from "framer-motion";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({ index, testimonial, name, designation, company, image }) => {
  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="bg-gray-800 p-10 rounded-3xl xs:w-[320px] w-full" 
    >
      <p className="text-blue-400 font-black text-[48px]"> " </p> 
      <div className="mt-1">
        <p className="text-gray-200 tracking-wider text-[18px]">{testimonial}</p>
        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span>{name}
            </p>
            <p className="mt-1 text-gray-400 text-[12px]">  {/* Changed to text-gray-400 */}
              {/* {designation} of {company} */}
            </p>
          </div>
          {/* <img
            src={image}
            alt={`feedback-by-${name}`}
            className="w-10 h-10 rounded-full object-cover"
          /> */}
        </div>
      </div>
    </motion.div>
  );
};

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-gray-900 rounded-[20px]">  {/* Changed to bg-gray-900 */}
      <div className={`${styles.padding} bg-gray-700 rounded-2xl min-h-[300px]`}>  {/* Changed to bg-gray-700 */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard
            key={testimonial.name}
            index={index}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
