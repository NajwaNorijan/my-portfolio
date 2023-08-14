"use strict";
(() => {
var exports = {};
exports.id = 473;
exports.ids = [473];
exports.modules = {

/***/ 4913:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ api_services)
});

;// CONCATENATED MODULE: external "react-icons/ri"
const ri_namespaceObject = require("react-icons/ri");
;// CONCATENATED MODULE: external "react-icons/fa"
const fa_namespaceObject = require("react-icons/fa");
;// CONCATENATED MODULE: external "react-icons/bs"
const bs_namespaceObject = require("react-icons/bs");
;// CONCATENATED MODULE: ./data.ts



const services = [
    {
        title: "Frontend Development",
        about: "I can build a web and mobile applications",
        Icon: ri_namespaceObject.RiComputerLine,
        tools: [
            "HTML",
            "CSS",
            "Javascript",
            "React.js",
            "Next.js",
            "React Native",
            "Material UI",
            "Bootstrap",
            "Tailwind CSS"
        ]
    },
    {
        title: "Backend Development",
        about: "Handle database and api",
        Icon: fa_namespaceObject.FaServer,
        tools: [
            "Express",
            "Node.js",
            "Javascript",
            "Mongo DB"
        ]
    }, 
];
//ISkill is the type of the aray
const languages = [
    {
        name: "Python",
        level: "70",
        Icon: bs_namespaceObject.BsCircleFill
    },
    {
        name: "Javascript",
        level: "80",
        Icon: bs_namespaceObject.BsCircleFill
    },
    {
        name: "Scss",
        level: "90",
        Icon: bs_namespaceObject.BsCircleFill
    },
    {
        name: "MongoSql",
        level: "30",
        Icon: bs_namespaceObject.BsCircleFill
    },
    {
        name: "React",
        level: "50",
        Icon: bs_namespaceObject.BsCircleFill
    }, 
];
const tools = [
    {
        name: "Photoshop",
        level: "10",
        Icon: bs_namespaceObject.BsCircleFill
    },
    {
        name: "Figma",
        level: "20",
        Icon: bs_namespaceObject.BsCircleFill
    }, 
];
const projects = [
    {
        id: 1,
        name: "YouTube Clone",
        description: "This application was build from React JS consisting of stunning video sections, custom categories, channel pages and the videos can be view directly in the YouTube Clone App",
        image_path: "/images/youtube-clone.jpg",
        deployed_url: "https://private-youtube.najwanorijan.website/",
        gitlab_url: "https://gitlab.com/najwanorijan/youtube-clone",
        category: [
            "react",
            "material ui",
            "rapidapi"
        ],
        key_techs: [
            "ReactJS",
            "Material UI",
            "RapidAPI"
        ]
    },
    {
        id: 2,
        name: "Flight Widget API",
        image_path: "/images/flight-widget.jpg",
        deployed_url: "/",
        gitlab_url: "https://gitlab.com/najwanorijan/flight-widget-api",
        category: [
            "javascript",
            "node",
            "rapidapi"
        ],
        description: "Build a flight widget using NodeJS and real data from Toronto Pearson Airport from RapidAPI",
        key_techs: [
            "Javascript",
            "NodeJS",
            "RapidAPI"
        ]
    },
    {
        id: 3,
        name: "Climate Change API",
        image_path: "/images/climate-change.jpg",
        deployed_url: "https://climatechangeapinajwa.herokuapp.com/news",
        gitlab_url: "https://gitlab.com/najwanorijan/climate-change-api",
        category: [
            "node",
            "express",
            "javascript"
        ],
        description: "Climate Change API is an API that tells us climate change news from various websites such as Guardian, Los Angeles Times, New York Post, Evening Standard and many more by scraping from these websites by using Cheerio, which is a Javascript library",
        key_techs: [
            "Javascript",
            "NodeJS",
            "Express",
            "REST API"
        ]
    },
    {
        id: 4,
        name: "Comic Chapters API",
        image_path: "/images/comic-chapter.jpg",
        deployed_url: "https://manga-searcher.herokuapp.com/",
        gitlab_url: "https://gitlab.com/najwanorijan/comic-chapters-api",
        category: [
            "node",
            "express",
            "javascript"
        ],
        description: "The API was use to scrape all of the chapters exist for a particular comic from several websites",
        key_techs: [
            "Javascript",
            "NodeJS",
            "Express",
            "REST API"
        ]
    },
    {
        id: 5,
        name: "Cupcake Store Website",
        image_path: "/images/cupcake-shopping-app.jpg",
        deployed_url: "/",
        gitlab_url: "https://gitlab.com/najwanorijan/cupcake-store-website",
        category: [
            "react",
            "redux",
            "node",
            "express",
            "mongo"
        ],
        description: "Using React and Redux for frontend and Node, Express and MongoDB for backend.",
        key_techs: [
            "React",
            "Redux",
            "NodeJS",
            "Express",
            "MongoDB"
        ]
    }, 
];

;// CONCATENATED MODULE: ./pages/api/services.ts
/* eslint-disable import/no-anonymous-default-export */ 
/* harmony default export */ const api_services = ((req, res)=>{
    //by default get request
    //   console.log("services in services", services);
    res.status(200).json({
        services: services
    });
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4913));
module.exports = __webpack_exports__;

})();