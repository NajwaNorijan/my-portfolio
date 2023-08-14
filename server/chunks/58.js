"use strict";
exports.id = 58;
exports.ids = [58];
exports.modules = {

/***/ 8514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EY": () => (/* binding */ stagger),
/* harmony export */   "eu": () => (/* binding */ fadeInUp),
/* harmony export */   "gj": () => (/* binding */ routeAnimation)
/* harmony export */ });
const fadeInUp = {
    initial: {
        opacity: 0,
        y: 60
    },
    animate: {
        opacity: 1,
        y: 0
    }
};
const stagger = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};
const routeAnimation = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.1,
            duration: 0.1
        }
    },
    exit: {
        // when going to other route the current page animation when exit
        opacity: 0,
        transition: {
            delay: 0.1,
            ease: "easeInOut"
        }
    }
};


/***/ }),

/***/ 7312:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8514);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__]);
framer_motion__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* eslint-disable @next/next/no-img-element */ 




const ProjectCard = ({ project: { name , image_path , category , deployed_url , description , gitlab_url , key_techs , id ,  } , //add here to destructure the properties
showDetail , setShowDetail ,  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "mb-10 shadow-lg cursor-pointer shadow-custom-light rounded-xl hover:shadow-xl sm:mb-0",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        src: image_path,
                        alt: name,
                        className: "object-cover cursor-pointer rounded-t-xl",
                        onClick: ()=>{
                            showDetail === id ? setShowDetail(null) : setShowDetail(id);
                        },
                        width: "200",
                        height: "150",
                        // height="50"
                        // width="50"
                        layout: "responsive"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `p-3 bg-teal-600 ${showDetail === id ? null : "rounded-b-xl"} `,
                    onClick: ()=>showDetail === id ? setShowDetail(null) : setShowDetail(id),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "my-2 font-bold text-white text-center md:text-xl",
                        children: name
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: showDetail === id && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full h-auto p-2 text-black bg-gray-100 rounded-b-lg md:p-10 dark:text-white dark:bg-dark-100",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                                variants: _animations__WEBPACK_IMPORTED_MODULE_4__/* .stagger */ .EY,
                                animate: "animate",
                                initial: "initial"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                                variants: _animations__WEBPACK_IMPORTED_MODULE_4__/* .stagger */ .EY,
                                initial: "initial",
                                animate: "animate",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.h3, {
                                        variants: _animations__WEBPACK_IMPORTED_MODULE_4__/* .fadeInUp */ .eu,
                                        className: "mb-3 font-medium",
                                        children: description
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                                        variants: _animations__WEBPACK_IMPORTED_MODULE_4__/* .fadeInUp */ .eu,
                                        className: "flex flex-wrap mt-5 space-x-2 text-sm tracking-wider",
                                        children: key_techs.map((tech)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "px-2 py-1 my-1 bg-cyan-300 rounded-md dark:text-black",
                                                children: tech
                                            }, tech))
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                                variants: _animations__WEBPACK_IMPORTED_MODULE_4__/* .fadeInUp */ .eu,
                                className: "flex justify-center my-4 space-x-3",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    href: gitlab_url,
                                    target: "_blank",
                                    rel: "noreferrer noopener",
                                    className: "flex items-center px-4 py-2 space-x-3 text-lg bg-yellow-300 dark:text-black rounded-lg",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_1__.AiFillGitlab, {}),
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Check out on Gitlab"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2722:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ projects),
/* harmony export */   "uZ": () => (/* binding */ services)
/* harmony export */ });
/* unused harmony exports languages, tools */
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8098);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_icons_ri__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__);



const services = [
    {
        title: "Frontend Development",
        about: "I can build a web and mobile applications",
        Icon: react_icons_ri__WEBPACK_IMPORTED_MODULE_0__.RiComputerLine,
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
        Icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaServer,
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
        Icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsCircleFill
    },
    {
        name: "Javascript",
        level: "80",
        Icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsCircleFill
    },
    {
        name: "Scss",
        level: "90",
        Icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsCircleFill
    },
    {
        name: "MongoSql",
        level: "30",
        Icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsCircleFill
    },
    {
        name: "React",
        level: "50",
        Icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsCircleFill
    }, 
];
const tools = [
    {
        name: "Photoshop",
        level: "10",
        Icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsCircleFill
    },
    {
        name: "Figma",
        level: "20",
        Icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsCircleFill
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


/***/ })

};
;