import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing scroll-mt-28" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="grid-1">
          <div className="grid-default-color flex items-end h-full w-full relative overflow-hidden">
            <img
              src="assets/coding-pov.png"
              className="absolute scale-150 md:scale-[3] -right-10 top-0 md:inset-y-10 lg:scale-[2.5] pointer-events-none"
              alt="coding pov"
            />
            <div className="z-10">
              <p className="headtext">Hi, I'm Abilash EG</p>
              <p className="subtext">
                A passionate and curious Cloud, Data, and AI/ML Engineer with a Computer Science degree from VIT. I enjoy building intelligent solutions using AWS, machine learning, and automation.
                <br /><br />
                I specialize in data analytics and ML algorithms, with experience in predictive modeling, statistical analysis, and extracting insights from large datasets. I work with tools like Amazon SageMaker, Athena, QuickSight, and ML libraries such as XGBoost, scikit-learn, and Pandas.
                <br /><br />
                My projects include developing intelligent chatbots with Amazon Bedrock, building ETL pipelines, deploying ML models, and designing full-stack apps using Flask and React.
                <br /><br />
                Currently, I'm working as a Data and AI Engineer, focusing on data-driven solutions while expanding my skills in DevOps, CI/CD, and cloud-native infrastructure.
                <br /><br />
                Outside of work, I enjoy contributing to open-source, writing clear documentation, and staying up to date with the latest in AI and cloud innovations.
              </p>
            </div>
            <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
          </div>
        </div>

        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              CODE IS CRAFT
            </p>
            <Card style={{ rotate: "75deg", top: "30%", left: "20%" }} text="Flask" />
            <Card style={{ rotate: "-30deg", top: "60%", left: "45%" }} text="SageMaker" />
            <Card style={{ rotate: "90deg", bottom: "30%", left: "70%" }} text="DevOps" />
            <Card style={{ rotate: "-45deg", top: "55%", left: "0%" }} text="CI/CD" />
            <Card style={{ rotate: "20deg", top: "10%", left: "38%" }} text="xgBoost" />
            <Card style={{ rotate: "30deg", top: "70%", left: "70%" }} image="assets/logos/AWS.svg" containerRef={grid2Container} />
            <Card style={{ rotate: "-45deg", top: "70%", left: "25%" }} image="assets/logos/python.svg" containerRef={grid2Container} />
            <Card style={{ rotate: "-45deg", top: "5%", left: "10%" }} image="assets/logos/react.svg" containerRef={grid2Container} />
          </div>
        </div>

        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">I'm based in India.</p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>

        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>

        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">Tech Stack</p>
            <p className="subtext">
              I specialize in a variety of cloud tools, frameworks, and ML pipelines that allow me to build robust and scalable applications.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
