(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "react-dom"
const external_react_dom_namespaceObject = require("react-dom");
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__(7544);
var app_default = /*#__PURE__*/__webpack_require__.n(app);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: ./components/PageChange/PageChange.js


// reactstrap components
// import { Spinner } from "reactstrap";
// core components
function PageChange(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "bg-cover fixed z-40 w-full h-full top-0 left-0",
                style: {
                    backgroundImage: "url('/img/img-1-1000x600.jpg')"
                }
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "top-0 left-0 w-full h-full block z-50 absolute bg-black bg-opacity-50"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "my-32 mx-auto max-w-sm text-center relative z-50 top-0",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "block mb-4",
                        children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                            className: "fas fa-circle-notch animate-spin text-white mx-auto text-6xl"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("h4", {
                        className: "text-lg font-medium text-white",
                        children: [
                            "Loading page contents for: ",
                            props.path
                        ]
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/@fortawesome/fontawesome-free/css/all.min.css
var all_min = __webpack_require__(4595);
// EXTERNAL MODULE: ./styles/tailwind.css
var tailwind = __webpack_require__(5594);
;// CONCATENATED MODULE: ./pages/_app.js









router_default().events.on("routeChangeStart", (url)=>{
    console.log(`Loading: ${url}`);
    document.body.classList.add("body-page-transition");
    external_react_dom_default().render(/*#__PURE__*/ jsx_runtime.jsx(PageChange, {
        path: url
    }), document.getElementById("page-transition"));
});
router_default().events.on("routeChangeComplete", ()=>{
    external_react_dom_default().unmountComponentAtNode(document.getElementById("page-transition"));
    document.body.classList.remove("body-page-transition");
});
router_default().events.on("routeChangeError", ()=>{
    external_react_dom_default().unmountComponentAtNode(document.getElementById("page-transition"));
    document.body.classList.remove("body-page-transition");
});
class MyApp extends (app_default()) {
    componentDidMount() {
        let comment = document.createComment(`

=========================================================
* Notus NextJS - v1.1.0 based on Tailwind Starter Kit by Creative Tim
=========================================================

* Product Page: https://www.creative-tim.com/product/notus-nextjs
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/notus-nextjs/blob/main/LICENSE.md)

* Tailwind Starter Kit Page: https://www.creative-tim.com/learning-lab/tailwind-starter-kit/presentation

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

`);
        document.insertBefore(comment, document.documentElement);
    }
    static async getInitialProps({ Component , router , ctx  }) {
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        return {
            pageProps
        };
    }
    render() {
        const { Component , pageProps  } = this.props;
        const Layout = Component.layout || (({ children  })=>/*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                children: children
            }));
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)((external_react_default()).Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("meta", {
                            name: "viewport",
                            content: "width=device-width, initial-scale=1, shrink-to-fit=no"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("title", {
                            children: "Notus NextJS by Creative Tim"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("script", {
                            src: "https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx(Layout, {
                    children: /*#__PURE__*/ jsx_runtime.jsx(Component, {
                        ...pageProps
                    })
                })
            ]
        });
    }
}


/***/ }),

/***/ 5594:
/***/ (() => {



/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,501], () => (__webpack_exec__(3909)));
module.exports = __webpack_exports__;

})();