import Bar from "../components/Bar";
import { languages, tools } from "../data";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation } from "../animations";

const resume = () => {
  return (
    <>
      <motion.div
        variants={routeAnimation}
        initial="initial"
        animate="animate"
        className="px-6 py-2"
        exit="exit"
      >
        <div className="grid gap-6 md:grid-cols-1">
          <motion.div variants={fadeInUp} initial="initial" animate="animate">
            <h5 className="my-3 text-2xl font-bold border-blue-500 border-y-4">
              WORK EXPERIENCE
            </h5>
            <div className="my-3">
              <div className="flex justify-between">
                <h5 className="my-2 text-xl font-bold">Full Stack Engineer</h5>

                <h5 className="my-2 text-xl font-bold">(07/2021 – 09/2022)</h5>
              </div>

              <p className="font-semibold">Bjak Sdn Bhd</p>
              <div className="my-3 ml-5 ">
                <ul className="list-disc">
                  <li>
                    Develop a new web application with <b>Next.js</b> for
                    frontend.
                  </li>
                  <li>
                    Add new features to existing web application with{" "}
                    <b>React.js</b> for frontend and <b>Node.js</b> for backend.
                  </li>
                  <li>
                    Improve the user interface with <b>Bootstrap</b> and{" "}
                    <b>Sass</b>.
                  </li>
                  <li>
                    Implement a hotfix for the issues happen on the web
                    application.
                  </li>
                  <li>
                    Test <b>APIs</b> with Postman application.
                  </li>
                  <li>
                    Create unit test with <b>Jest</b> framework.
                  </li>
                  <li>Code review on fellow programmers code.</li>
                </ul>
              </div>
            </div>
            <div className="my-3">
              <div className="flex justify-between">
                <h5 className="my-2 text-xl font-bold">Analyst Programmer</h5>

                <h5 className="my-2 text-xl font-bold">(03/2021 – 06/2021)</h5>
              </div>

              <p className="font-semibold">TESS Innovation Sdn Bhd</p>
              <div className="my-3 ml-5 ">
                <ul className="list-disc">
                  <li>Carry previous responsibility during internship.</li>
                  <li>
                    Create queries to solve customer data issue using{" "}
                    <b>SQL Server</b>.
                  </li>
                  <li>
                    Create reports to summarize customer data using <b>SSRS</b>.
                  </li>
                  <li>
                    Create an EOD job using <b>SQL Server</b> and schedule the
                    job on certain time.
                  </li>
                  <li>
                    Create a package to extract, transform and load data using{" "}
                    <b>SSIS</b>.
                  </li>
                  <li>Communicate and keep customer updates every 1-2 days.</li>
                  <li>Respond customers email and feedback within 24 hours.</li>
                  <li>
                    Perform quarterly maintenance for each existing customer.
                  </li>
                </ul>
              </div>
            </div>
            <div className="my-3">
              <div className="flex justify-between">
                <h5 className="my-2 text-xl font-bold">Internship</h5>

                <h5 className="my-2 text-xl font-bold">(09/2020 – 02/2021)</h5>
              </div>

              <p className="font-semibold">TESS Innovation Sdn Bhd</p>
              <div className="my-3 ml-5 ">
                <ul className="list-disc">
                  <li>
                    Providing support and enhancement services to customers.
                  </li>
                  <li>Design, develop and implement software and systems.</li>

                  <li>
                    Implement system with <b>Microsoft .Net</b>, <b>VB</b> and{" "}
                    <b>HTML/XML</b>.
                  </li>
                  <li>
                    Gather requirements for scope of work or system enhancement.
                  </li>
                  <li>Prepare migration form, checklist and release note.</li>
                  <li>
                    Prepare system integration testing and user acceptance
                    testing document.
                  </li>
                  <li>Resolved system bugs.</li>
                  <li>
                    Migrate new fixes or enhancement to customer environment.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* education & exp */}
          <motion.div variants={fadeInUp} initial="initial" animate="animate">
            <h5 className="my-3 text-2xl font-bold border-blue-500 border-y-4">
              EDUCATION BACKGROUND
            </h5>
            <div className="my-3">
              <div className="flex justify-between">
                <h5 className="my-2 text-xl font-bold">
                  Bachelor of Computer Science
                </h5>
                <h5 className="my-2 text-xl font-bold">(2017 – 2021)</h5>
              </div>

              <p className="font-semibold">
                Universiti Kebangsaan Malaysia (UKM) Bangi
              </p>
              <p className="my-3">
                CGPA : <b>3.65 / 4.00</b>
              </p>
              <p>
                Dean List Award for Semester <b>03</b>, <b>06</b> and <b>08</b>
              </p>
            </div>
            <div className="my-3">
              <div className="flex justify-between">
                <h5 className="my-2 text-xl font-bold">
                  Matriculation in Science Stream
                </h5>
                <h5 className="my-2 text-xl font-bold">(2016 – 2017)</h5>
              </div>

              <p className="font-semibold">
                Kolej Matrikulasi Negeri Sembilan (KMNS)
              </p>
              <p className="my-3">
                CGPA : <b>3.71 / 4.00</b>
              </p>
            </div>
            <div className="my-3">
              <div className="flex justify-between">
                <h5 className="my-2 text-xl font-bold">
                  Sijil Pelajaran Malaysia (SPM)
                </h5>
                <h5 className="my-2 text-xl font-bold">(2014 – 2015)</h5>
              </div>

              <p className="font-semibold">
                Sekolah Menengah Kebangsaan Subang Bestari
              </p>
              <p className="my-3">
                Grade : <b>2A 1A-</b>
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h5 className="my-3 text-2xl font-bold border-blue-500 border-y-4">
              TECHNICAL SKILLS
            </h5>
            <p className="my-3 font-bold">Moderate :</p>
            <div className="">
              <p className="">
                JavaScript, React.js, Next.js, CSS, Bootstrap, HTML
              </p>
            </div>
            <p className="my-3 font-bold">Basic :</p>
            <div className="">
              <p className="">
                {" "}
                Java, Microsoft .Net, Microsoft SQL and Mongo DB
              </p>
            </div>
          </div>
          <div>
            <h5 className="my-3 text-2xl font-bold border-blue-500 border-y-4">
              LANGUAGES
            </h5>
            <div className="my-2">
              <p className="my-3 font-bold">Bahasa Malaysia :</p>
              <div className="flex justify-around">
                <p className="">Written: Excellent</p>
                <p className="">Spoken: Excellent</p>
              </div>

              <p className="my-3 font-bold">English :</p>
              <div className="flex justify-around">
                <p className="">Written: Excellent</p>
                <p className="">Spoken: Excellent</p>
              </div>

              <p className="my-3 font-bold">Japanese:</p>
              <div className="flex justify-around">
                {" "}
                <p className="">Written: Basic </p>
                <p className="">Spoken: Basic</p>
              </div>
            </div>
          </div>
        </div>

        {/* languages and tool */}
        {/* <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
            <div className="my-2">
              {languages.map((Language) => (
                <Bar data={Language} key={Language.name} />
              ))}
            </div>
          </div>
          <div>
            <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
            <div className="my-2">
              {tools.map((tool) => (
                <Bar data={tool} key={tool.name} />
              ))}
            </div>
          </div>
        </div> */}
      </motion.div>
    </>
  );
};
export default resume;
