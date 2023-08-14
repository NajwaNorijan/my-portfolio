import { FunctionComponent } from "react";
import { IService } from "../../type";
import ReactHtmlParser from "react-html-parser";

//                      means  <define the props>
const ServiceCard: FunctionComponent<{ service: IService }> = ({
  service: { Icon, about, title, tools },
}) => {
  return (
    <>
      <div className="flex flex-col items-center py-10 my-10 text-center border-black border-solid lg:m-0 place-content-center rounded-xl dark:bg-white">
        <Icon className="w-12 h-12 text-teal-400" />
        <h3 className="mt-8 p-1 mb-2 text-align-center text-lg font-bold dark:text-black w-full bg-teal-400 border-gray-400">
          {title}
        </h3>
        
        <p className="dark:text-black">
          {ReactHtmlParser(about)}
        </p>
        {/* <div className="w-full my-4 border-gray-400 border-y-2">
          <h3 className="py-4 text-lg font-bold text-teal-600">
            Tools I Use
          </h3>
        </div> */}
      
        <div className="grid grid-cols-3 gap-5 py-10"> 
          {tools.map((tool) => (
          <div className="bg-teal-600 rounded-xl" key={tool}>
            <p className="p-2 text-white">{tool}</p>
          </div>
        ))}
        </div>
       
      </div>
    </>
  );
};

export default ServiceCard;
