import { services } from "../../data";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation, stagger } from "../../animations";
import ServiceCard from "./ServiceCard";

const ServiceOfferSection = () => {
  return (
    <>
      <section className="md:p-10 md:my-10 bg-gray-600">
        <h3 className="py-1 text-3xl font-bold text-center text-white">
          What I Am Doing
        </h3>

        <div className="gap-10 mx-2 lg:flex">
          {services.map((service) => (
            <motion.div
              variants={fadeInUp}
              className="flex-1 my-10 text-center bg-white shadow-custom-light dark:shadow-custom-dark rounded-xl dark:bg-white"
              key={service.title}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ServiceOfferSection;
