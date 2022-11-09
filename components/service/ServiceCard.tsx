import { FunctionComponent } from "react";
import { IService } from "../../type";
import ReactHtmlParser from "react-html-parser";

//                      means  <define the props>
const ServiceCard: FunctionComponent<{ service: IService }> = ({
  service: { Icon, about, title, tools },
}) => {
  return (
    <>
      {/* className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green to-blue-500" */}
      <div className="flex flex-col items-center p-10 my-10 text-center border-black border-solid md:p-3 lg:m-0 place-content-center rounded-xl dark:bg-white">
        <Icon className="w-12 h-12 text-teal-400 " />
        <h3 className="pt-8 pb-2 text-lg font-bold dark:text-black">{title}</h3>
        <p className="dark:text-black">{ReactHtmlParser(about)}</p>
        <div className="w-full my-4 border-gray-400 border-y-2">
          <h3 className="py-4 text-lg font-bold text-teal-600">Tools I Use</h3>
        </div>
        {tools.map((tool) => (
          <div key={tool}>
            <p className="py-1 text-gray-800">{tool}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ServiceCard;
