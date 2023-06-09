"use strict";
(() => {
var exports = {};
exports.id = 577;
exports.ids = [577];
exports.modules = {

/***/ 6849:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Settings)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/Cards/CardSettings.js


// components
function CardSettings() {
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "rounded-t bg-white mb-0 px-6 py-6",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "text-center flex justify-between",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                className: "text-blueGray-700 text-xl font-bold",
                                children: "My account"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                className: "bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150",
                                type: "button",
                                children: "Settings"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "flex-auto px-4 lg:px-10 py-10 pt-0",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                className: "text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase",
                                children: "User Information"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex flex-wrap",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "w-full lg:w-6/12 px-4",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "relative w-full mb-3",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                    className: "block uppercase text-blueGray-600 text-xs font-bold mb-2",
                                                    htmlFor: "grid-password",
                                                    children: "Username"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                    type: "text",
                                                    className: "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",
                                                    defaultValue: "lucky.jesse"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "w-full lg:w-6/12 px-4",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "relative w-full mb-3",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                    className: "block uppercase text-blueGray-600 text-xs font-bold mb-2",
                                                    htmlFor: "grid-password",
                                                    children: "Email address"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                    type: "email",
                                                    className: "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",
                                                    defaultValue: "jesse@example.com"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "w-full lg:w-6/12 px-4",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "relative w-full mb-3",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                    className: "block uppercase text-blueGray-600 text-xs font-bold mb-2",
                                                    htmlFor: "grid-password",
                                                    children: "First Name"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                    type: "text",
                                                    className: "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",
                                                    defaultValue: "Lucky"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "w-full lg:w-6/12 px-4",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "relative w-full mb-3",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                    className: "block uppercase text-blueGray-600 text-xs font-bold mb-2",
                                                    htmlFor: "grid-password",
                                                    children: "Last Name"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                    type: "text",
                                                    className: "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",
                                                    defaultValue: "Jesse"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("hr", {
                                className: "mt-6 border-b-1 border-blueGray-300"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                className: "text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase",
                                children: "Contact Information"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex flex-wrap",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "w-full lg:w-12/12 px-4",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "relative w-full mb-3",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                    className: "block uppercase text-blueGray-600 text-xs font-bold mb-2",
                                                    htmlFor: "grid-password",
                                                    children: "Address"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                    type: "text",
                                                    className: "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",
                                                    defaultValue: "Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "w-full lg:w-4/12 px-4",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "relative w-full mb-3",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                    className: "block uppercase text-blueGray-600 text-xs font-bold mb-2",
                                                    htmlFor: "grid-password",
                                                    children: "City"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                    type: "email",
                                                    className: "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",
                                                    defaultValue: "New York"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "w-full lg:w-4/12 px-4",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "relative w-full mb-3",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                    className: "block uppercase text-blueGray-600 text-xs font-bold mb-2",
                                                    htmlFor: "grid-password",
                                                    children: "Country"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                    type: "text",
                                                    className: "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",
                                                    defaultValue: "United States"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "w-full lg:w-4/12 px-4",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "relative w-full mb-3",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                    className: "block uppercase text-blueGray-600 text-xs font-bold mb-2",
                                                    htmlFor: "grid-password",
                                                    children: "Postal Code"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                    type: "text",
                                                    className: "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",
                                                    defaultValue: "Postal Code"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("hr", {
                                className: "mt-6 border-b-1 border-blueGray-300"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                className: "text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase",
                                children: "About Me"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "flex flex-wrap",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "w-full lg:w-12/12 px-4",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "relative w-full mb-3",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                className: "block uppercase text-blueGray-600 text-xs font-bold mb-2",
                                                htmlFor: "grid-password",
                                                children: "About me"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("textarea", {
                                                type: "text",
                                                className: "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",
                                                rows: "4",
                                                defaultValue: "A beautiful UI Kit and Admin for NextJS & Tailwind CSS. It is Free and Open Source."
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/Cards/CardProfile.js


// components
function CardProfile() {
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "px-6",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex flex-wrap justify-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "w-full px-4 flex justify-center",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "relative",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        alt: "...",
                                        src: "/img/team-2-800x800.jpg",
                                        className: "shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "w-full px-4 text-center mt-20",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex justify-center py-4 lg:pt-4 pt-8",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "mr-4 p-3 text-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "text-xl font-bold block uppercase tracking-wide text-blueGray-600",
                                                    children: "22"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "text-sm text-blueGray-400",
                                                    children: "Friends"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "mr-4 p-3 text-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "text-xl font-bold block uppercase tracking-wide text-blueGray-600",
                                                    children: "10"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "text-sm text-blueGray-400",
                                                    children: "Photos"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "lg:mr-4 p-3 text-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "text-xl font-bold block uppercase tracking-wide text-blueGray-600",
                                                    children: "89"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "text-sm text-blueGray-400",
                                                    children: "Comments"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "text-center mt-12",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                className: "text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2",
                                children: "Jenna Stones"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("i", {
                                        className: "fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"
                                    }),
                                    " ",
                                    "Los Angeles, California"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "mb-2 text-blueGray-600 mt-10",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("i", {
                                        className: "fas fa-briefcase mr-2 text-lg text-blueGray-400"
                                    }),
                                    "Solution Manager - Creative Tim Officer"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "mb-2 text-blueGray-600",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("i", {
                                        className: "fas fa-university mr-2 text-lg text-blueGray-400"
                                    }),
                                    "University of Computer Science"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "mt-10 py-10 border-t border-blueGray-200 text-center",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "flex flex-wrap justify-center",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "w-full lg:w-9/12 px-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: "mb-4 text-lg leading-relaxed text-blueGray-700",
                                        children: "An artist of considerable range, Jenna the name taken by Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range."
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        href: "#pablo",
                                        className: "font-normal text-lightBlue-500",
                                        onClick: (e)=>e.preventDefault(),
                                        children: "Show more"
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        })
    });
}

// EXTERNAL MODULE: ./layouts/Admin.js + 7 modules
var Admin = __webpack_require__(2213);
;// CONCATENATED MODULE: ./pages/admin/settings.js


// components


// layout for page

function Settings() {
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "flex flex-wrap",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "w-full lg:w-8/12 px-4",
                    children: /*#__PURE__*/ jsx_runtime.jsx(CardSettings, {})
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "w-full lg:w-4/12 px-4",
                    children: /*#__PURE__*/ jsx_runtime.jsx(CardProfile, {})
                })
            ]
        })
    });
}
Settings.layout = Admin/* default */.Z;


/***/ }),

/***/ 3841:
/***/ ((module) => {

module.exports = require("@popperjs/core");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664,213], () => (__webpack_exec__(6849)));
module.exports = __webpack_exports__;

})();