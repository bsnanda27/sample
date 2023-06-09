"use strict";
exports.id = 480;
exports.ids = [480];
exports.modules = {

/***/ 2480:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Auth)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/Navbars/AuthNavbar.js + 1 modules
var AuthNavbar = __webpack_require__(4744);
;// CONCATENATED MODULE: ./components/Footers/FooterSmall.js


function FooterSmall(props) {
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("footer", {
            className: (props.absolute ? "absolute w-full bottom-0 bg-blueGray-800" : "relative") + " pb-6",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "container mx-auto px-4",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("hr", {
                        className: "mb-6 border-b-1 border-blueGray-600"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex flex-wrap items-center md:justify-between justify-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "w-full md:w-4/12 px-4",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left",
                                    children: [
                                        "Copyright \xa9 ",
                                        new Date().getFullYear(),
                                        " ",
                                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                                            href: "https://www.creative-tim.com?ref=nnjs-footer-small",
                                            className: "text-white hover:text-blueGray-300 text-sm font-semibold py-1",
                                            children: "Creative Tim"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "w-full md:w-8/12 px-4",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                    className: "flex flex-wrap list-none md:justify-end  justify-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                href: "https://www.creative-tim.com?ref=nnjs-footer-small",
                                                className: "text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3",
                                                children: "Creative Tim"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                href: "https://www.creative-tim.com/presentation?ref=nnjs-footer-small",
                                                className: "text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3",
                                                children: "About Us"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                href: "http://blog.creative-tim.com?ref=nnjs-footer-small",
                                                className: "text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3",
                                                children: "Blog"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                href: "https://github.com/creativetimofficial/notus-nextjs/blob/main/LICENSE.md?ref=nnjs-footer-small",
                                                className: "text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3",
                                                children: "MIT License"
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./layouts/Auth.js


// components


function Auth({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(AuthNavbar/* default */.Z, {
                transparent: true
            }),
            /*#__PURE__*/ jsx_runtime.jsx("main", {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                    className: "relative w-full h-full py-40 min-h-screen",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full",
                            style: {
                                backgroundImage: "url('/img/register_bg_2.png')"
                            }
                        }),
                        children,
                        /*#__PURE__*/ jsx_runtime.jsx(FooterSmall, {
                            absolute: true
                        })
                    ]
                })
            })
        ]
    });
}


/***/ })

};
;