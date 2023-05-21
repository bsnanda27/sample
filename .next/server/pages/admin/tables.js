"use strict";
(() => {
var exports = {};
exports.id = 19;
exports.ids = [19];
exports.modules = {

/***/ 9862:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Tables)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@popperjs/core"
var core_ = __webpack_require__(3841);
;// CONCATENATED MODULE: ./components/Dropdowns/TableDropdown.js



const NotificationDropdown = ()=>{
    // dropdown props
    const [dropdownPopoverShow, setDropdownPopoverShow] = external_react_default().useState(false);
    const btnDropdownRef = /*#__PURE__*/ external_react_default().createRef();
    const popoverDropdownRef = /*#__PURE__*/ external_react_default().createRef();
    const openDropdownPopover = ()=>{
        (0,core_.createPopper)(btnDropdownRef.current, popoverDropdownRef.current, {
            placement: "left-start"
        });
        setDropdownPopoverShow(true);
    };
    const closeDropdownPopover = ()=>{
        setDropdownPopoverShow(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("a", {
                className: "text-blueGray-500 py-1 px-3",
                href: "#pablo",
                ref: btnDropdownRef,
                onClick: (e)=>{
                    e.preventDefault();
                    dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
                },
                children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                    className: "fas fa-ellipsis-v"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                ref: popoverDropdownRef,
                className: (dropdownPopoverShow ? "block " : "hidden ") + "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                        href: "#pablo",
                        className: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",
                        onClick: (e)=>e.preventDefault(),
                        children: "Action"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                        href: "#pablo",
                        className: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",
                        onClick: (e)=>e.preventDefault(),
                        children: "Another action"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                        href: "#pablo",
                        className: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",
                        onClick: (e)=>e.preventDefault(),
                        children: "Something else here"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const TableDropdown = (NotificationDropdown);

;// CONCATENATED MODULE: ./components/Cards/CardTable.js
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'prop-types'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



// components

function CardTable({ color  }) {
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " + (color === "light" ? "bg-white" : "bg-blueGray-700 text-white"),
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "rounded-t mb-0 px-4 py-3 border-0",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "flex flex-wrap items-center",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "relative w-full px-4 max-w-full flex-grow flex-1",
                            children: /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                className: "font-semibold text-lg " + (color === "light" ? "text-blueGray-700" : "text-white"),
                                children: "Card Tables"
                            })
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "block w-full overflow-x-auto",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("table", {
                        className: "items-center w-full bg-transparent border-collapse",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("thead", {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("th", {
                                            className: "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " + (color === "light" ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100" : "bg-blueGray-600 text-blueGray-200 border-blueGray-500"),
                                            children: "Project"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("th", {
                                            className: "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " + (color === "light" ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100" : "bg-blueGray-600 text-blueGray-200 border-blueGray-500"),
                                            children: "Budget"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("th", {
                                            className: "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " + (color === "light" ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100" : "bg-blueGray-600 text-blueGray-200 border-blueGray-500"),
                                            children: "Status"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("th", {
                                            className: "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " + (color === "light" ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100" : "bg-blueGray-600 text-blueGray-200 border-blueGray-500"),
                                            children: "Users"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("th", {
                                            className: "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " + (color === "light" ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100" : "bg-blueGray-600 text-blueGray-200 border-blueGray-500"),
                                            children: "Completion"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("th", {
                                            className: "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " + (color === "light" ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100" : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("tbody", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("th", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                        src: "/img/bootstrap.jpg",
                                                        className: "h-12 w-12 bg-white rounded-full border",
                                                        alt: "..."
                                                    }),
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "ml-3 font-bold " + +(color === "light" ? "text-blueGray-600" : "text-white"),
                                                        children: "Argon Design System"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4",
                                                children: "$2,500 USD"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("td", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                        className: "fas fa-circle text-orange-500 mr-2"
                                                    }),
                                                    " pending"
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                            src: "/img/team-1-800x800.jpg",
                                                            alt: "...",
                                                            className: "w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                            src: "/img/team-2-800x800.jpg",
                                                            alt: "...",
                                                            className: "w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                            src: "/img/team-3-800x800.jpg",
                                                            alt: "...",
                                                            className: "w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                            src: "/img/team-4-470x470.png",
                                                            alt: "...",
                                                            className: "w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "mr-2",
                                                            children: "60%"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "relative w-full",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "overflow-hidden h-2 text-xs flex rounded bg-red-200",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    style: {
                                                                        width: "60%"
                                                                    },
                                                                    className: "shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right",
                                                children: /*#__PURE__*/ jsx_runtime.jsx(TableDropdown, {})
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("th", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                        src: "/img/angular.jpg",
                                                        className: "h-12 w-12 bg-white rounded-full border",
                                                        alt: "..."
                                                    }),
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "ml-3 font-bold " + +(color === "light" ? "text-blueGray-600" : "text-white"),
                                                        children: "Angular Now UI Kit PRO"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4",
                                                children: "$1,800 USD"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("td", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                        className: "fas fa-circle text-emerald-500 mr-2"
                                                    }),
                                                    " ",
                                                    "completed"
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                            src: "/img/team-1-800x800.jpg",
                                                            alt: "...",
                                                            className: "w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                            src: "/img/team-2-800x800.jpg",
                                                            alt: "...",
                                                            className: "w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                            src: "/img/team-3-800x800.jpg",
                                                            alt: "...",
                                                            className: "w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                            src: "/img/team-4-470x470.png",
                                                            alt: "...",
                                                            className: "w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "mr-2",
                                                            children: "100%"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "relative w-full",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "overflow-hidden h-2 text-xs flex rounded bg-emerald-200",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    style: {
                                                                        width: "100%"
                                                                    },
                                                                    className: "shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right",
                                                children: /*#__PURE__*/ jsx_runtime.jsx(TableDropdown, {})
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("th", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                        src: "/img/sketch.jpg",
                                                        className: "h-12 w-12 bg-white rounded-full border",
                                                        alt: "..."
                                                    }),
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "ml-3 font-bold " + +(color === "light" ? "text-blueGray-600" : "text-white"),
                                                        children: "Black Dashboard Sketch"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4",
                                                children: "$3,150 USD"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("td", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                        className: "fas fa-circle text-red-500 mr-2"
                                                    }),
                                                    " delayed"
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                            src: "/img/team-1-800x800.jpg",
                                                            alt: "...",
                                                            className: "w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                            src: "/img/team-2-800x800.jpg",
                                                            alt: "...",
                                                            className: "w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                            src: "/img/team-3-800x800.jpg",
                                                            alt: "...",
                                                            className: "w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                            src: "/img/team-4-470x470.png",
                                                            alt: "...",
                                                            className: "w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "mr-2",
                                                            children: "73%"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "relative w-full",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "overflow-hidden h-2 text-xs flex rounded bg-red-200",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    style: {
                                                                        width: "73%"
                                                                    },
                                                                    className: "shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right",
                                                children: /*#__PURE__*/ jsx_runtime.jsx(TableDropdown, {})
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("th", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                        src: "/img/react.jpg",
                                                        className: "h-12 w-12 bg-white rounded-full border",
                                                        alt: "..."
                                                    }),
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "ml-3 font-bold " + +(color === "light" ? "text-blueGray-600" : "text-white"),
                                                        children: "React Material Dashboard"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4",
                                                children: "$4,400 USD"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("td", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                        className: "fas fa-circle text-teal-500 mr-2"
                                                    }),
                                                    " on schedule"
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                            src: "/img/team-1-800x800.jpg",
                                                            alt: "...",
                                                            className: "w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                            src: "/img/team-2-800x800.jpg",
                                                            alt: "...",
                                                            className: "w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                            src: "/img/team-3-800x800.jpg",
                                                            alt: "...",
                                                            className: "w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                            src: "/img/team-4-470x470.png",
                                                            alt: "...",
                                                            className: "w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "mr-2",
                                                            children: "90%"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "relative w-full",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "overflow-hidden h-2 text-xs flex rounded bg-teal-200",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    style: {
                                                                        width: "90%"
                                                                    },
                                                                    className: "shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right",
                                                children: /*#__PURE__*/ jsx_runtime.jsx(TableDropdown, {})
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("th", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                        src: "/img/vue.jpg",
                                                        className: "h-12 w-12 bg-white rounded-full border",
                                                        alt: "..."
                                                    }),
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "ml-3 font-bold " + +(color === "light" ? "text-blueGray-600" : "text-white"),
                                                        children: "React Material Dashboard"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4",
                                                children: "$2,200 USD"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("td", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                        className: "fas fa-circle text-emerald-500 mr-2"
                                                    }),
                                                    " ",
                                                    "completed"
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                            src: "/img/team-1-800x800.jpg",
                                                            alt: "...",
                                                            className: "w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                            src: "/img/team-2-800x800.jpg",
                                                            alt: "...",
                                                            className: "w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                            src: "/img/team-3-800x800.jpg",
                                                            alt: "...",
                                                            className: "w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                            src: "/img/team-4-470x470.png",
                                                            alt: "...",
                                                            className: "w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "mr-2",
                                                            children: "100%"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "relative w-full",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "overflow-hidden h-2 text-xs flex rounded bg-emerald-200",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    style: {
                                                                        width: "100%"
                                                                    },
                                                                    className: "shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                className: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right",
                                                children: /*#__PURE__*/ jsx_runtime.jsx(TableDropdown, {})
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
}
CardTable.defaultProps = {
    color: "light"
};
CardTable.propTypes = {
    color: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'prop-types'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())([
        "light",
        "dark"
    ])
};

// EXTERNAL MODULE: ./layouts/Admin.js + 7 modules
var Admin = __webpack_require__(2213);
;// CONCATENATED MODULE: ./pages/admin/tables.js


// components

// layout for page

function Tables() {
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "flex flex-wrap mt-4",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "w-full mb-12 px-4",
                    children: /*#__PURE__*/ jsx_runtime.jsx(CardTable, {})
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "w-full mb-12 px-4",
                    children: /*#__PURE__*/ jsx_runtime.jsx(CardTable, {
                        color: "dark"
                    })
                })
            ]
        })
    });
}
Tables.layout = Admin/* default */.Z;


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
var __webpack_exports__ = __webpack_require__.X(0, [893,664,213], () => (__webpack_exec__(9862)));
module.exports = __webpack_exports__;

})();