"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 6210:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Index)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "@popperjs/core"
var core_ = __webpack_require__(3841);
;// CONCATENATED MODULE: ./components/Dropdowns/IndexDropdown.js




const IndexDropdown = ()=>{
    // dropdown props
    const [dropdownPopoverShow, setDropdownPopoverShow] = external_react_default().useState(false);
    const btnDropdownRef = /*#__PURE__*/ external_react_default().createRef();
    const popoverDropdownRef = /*#__PURE__*/ external_react_default().createRef();
    const openDropdownPopover = ()=>{
        (0,core_.createPopper)(btnDropdownRef.current, popoverDropdownRef.current, {
            placement: "bottom-start"
        });
        setDropdownPopoverShow(true);
    };
    const closeDropdownPopover = ()=>{
        setDropdownPopoverShow(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("a", {
                className: "hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",
                href: "#pablo",
                ref: btnDropdownRef,
                onClick: (e)=>{
                    e.preventDefault();
                    dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
                },
                children: "Demo Pages"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                ref: popoverDropdownRef,
                className: (dropdownPopoverShow ? "block " : "hidden ") + "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                        className: "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400",
                        children: "Admin Layout"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "/admin/dashboard",
                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                            href: "#pablo",
                            className: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",
                            children: "Dashboard"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "/admin/settings",
                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                            href: "#pablo",
                            className: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",
                            children: "Settings"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "/admin/tables",
                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                            href: "#pablo",
                            className: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",
                            children: "Tables"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "/admin/maps",
                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                            href: "#pablo",
                            className: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",
                            children: "Maps"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "h-0 mx-4 my-2 border border-solid border-blueGray-100"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                        className: "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400",
                        children: "Auth Layout"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "/auth/login",
                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                            href: "#pablo",
                            className: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",
                            children: "Login"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "/auth/register",
                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                            href: "#pablo",
                            className: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",
                            children: "Register"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "h-0 mx-4 my-2 border border-solid border-blueGray-100"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                        className: "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400",
                        children: "No Layout"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "/landing",
                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                            href: "#pablo",
                            className: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",
                            children: "Landing"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "/profile",
                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                            href: "#pablo",
                            className: "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",
                            children: "Profile"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Dropdowns_IndexDropdown = (IndexDropdown);

;// CONCATENATED MODULE: ./components/Navbars/IndexNavbar.js



// components

function Navbar(props) {
    const [navbarOpen, setNavbarOpen] = external_react_default().useState(false);
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("nav", {
            className: "top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "container px-4 mx-auto flex flex-wrap items-center justify-between",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                    className: "text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase",
                                    href: "#pablo",
                                    children: "Notus NextJS"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                className: "cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none",
                                type: "button",
                                onClick: ()=>setNavbarOpen(!navbarOpen),
                                children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                    className: "fas fa-bars"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" + (navbarOpen ? " block" : " hidden"),
                        id: "example-navbar-warning",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                className: "flex flex-col lg:flex-row list-none mr-auto",
                                children: /*#__PURE__*/ jsx_runtime.jsx("li", {
                                    className: "flex items-center",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                        className: "hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",
                                        href: "https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus?ref=nnjs-index-navbar",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                className: "text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2"
                                            }),
                                            " ",
                                            "Docs"
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                className: "flex flex-col lg:flex-row list-none lg:ml-auto",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        className: "flex items-center",
                                        children: /*#__PURE__*/ jsx_runtime.jsx(Dropdowns_IndexDropdown, {})
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        className: "flex items-center",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                            className: "hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",
                                            href: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-nextjs%2F",
                                            target: "_blank",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                    className: "text-blueGray-400 fab fa-facebook text-lg leading-lg "
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "lg:hidden inline-block ml-2",
                                                    children: "Share"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        className: "flex items-center",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                            className: "hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",
                                            href: "https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-nextjs%2F&text=Start%20your%20development%20with%20a%20Free%20Tailwind%20CSS%20and%20NextJS%20UI%20Kit%20and%20Admin.%20Let%20Notus%20NextJS%20amaze%20you%20with%20its%20cool%20features%20and%20build%20tools%20and%20get%20your%20project%20to%20a%20whole%20new%20level.",
                                            target: "_blank",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                    className: "text-blueGray-400 fab fa-twitter text-lg leading-lg "
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "lg:hidden inline-block ml-2",
                                                    children: "Tweet"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        className: "flex items-center",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                            className: "hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",
                                            href: "https://github.com/creativetimofficial/notus-nextjs?ref=nnjs-index-navbar",
                                            target: "_blank",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                    className: "text-blueGray-400 fab fa-github text-lg leading-lg "
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "lg:hidden inline-block ml-2",
                                                    children: "Star"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        className: "flex items-center",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                            className: "bg-blueGray-700 text-white active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150",
                                            type: "button",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                    className: "fas fa-arrow-alt-circle-down"
                                                }),
                                                " Download"
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
}

// EXTERNAL MODULE: ./components/Footers/Footer.js
var Footer = __webpack_require__(7655);
;// CONCATENATED MODULE: ./pages/index.js
/* eslint-disable react/jsx-no-target-blank */ 




function Index() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Navbar, {
                fixed: true
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                className: "header relative pt-16 items-center flex h-screen max-h-860-px",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "container mx-auto items-center flex flex-wrap",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "pt-32 sm:pt-0",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                        className: "font-semibold text-4xl text-blueGray-600",
                                        children: "Notus NextJS - A beautiful extension for Tailwind CSS."
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                        className: "mt-4 text-lg leading-relaxed text-blueGray-500",
                                        children: [
                                            "Notus NextJS is Free and Open Source. It does not change any of the CSS from",
                                            " ",
                                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                href: "https://tailwindcss.com/?ref=creativetim",
                                                className: "text-blueGray-600",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: "Tailwind CSS"
                                            }),
                                            ". It features multiple HTML elements and it comes with dynamic components for ReactJS, Vue and Angular."
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "mt-12",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                href: "https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus?ref=nnjs-index",
                                                target: "_blank",
                                                className: "get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150",
                                                children: "Get started"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                href: "https://github.com/creativetimofficial/notus-nextjs?ref=nnjs-index",
                                                className: "github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg",
                                                target: "_blank",
                                                children: "Github Star"
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                        className: "absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px",
                        src: "/img/pattern_nextjs.png",
                        alt: "..."
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                className: "mt-48 md:mt-40 pb-40 relative bg-blueGray-100",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20",
                        style: {
                            transform: "translateZ(0)"
                        },
                        children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                            className: "absolute bottom-0 overflow-hidden",
                            xmlns: "http://www.w3.org/2000/svg",
                            preserveAspectRatio: "none",
                            version: "1.1",
                            viewBox: "0 0 2560 100",
                            x: "0",
                            y: "0",
                            children: /*#__PURE__*/ jsx_runtime.jsx("polygon", {
                                className: "text-blueGray-100 fill-current",
                                points: "2560 0 2560 100 0 100"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "container mx-auto",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex flex-wrap items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                alt: "...",
                                                src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
                                                className: "w-full align-middle rounded-t-lg"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("blockquote", {
                                                className: "relative p-8 mb-4",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                        preserveAspectRatio: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        viewBox: "0 0 583 95",
                                                        className: "absolute left-0 w-full block h-95-px -top-94-px",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("polygon", {
                                                            points: "-30,95 583,95 583,65",
                                                            className: "text-blueGray-700 fill-current"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                        className: "text-xl font-bold text-white",
                                                        children: "Great for your awesome project"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        className: "text-md font-light mt-2 text-white",
                                                        children: "Putting together a page has never been easier than matching together pre-made components. From landing pages presentation to login areas, you can easily customise and built your pages."
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "w-full md:w-6/12 px-4",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex flex-wrap",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "w-full md:w-6/12 px-4",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "relative flex flex-col mt-4",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "px-4 py-5 flex-auto",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                        className: "fas fa-sitemap"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                                    className: "text-xl mb-1 font-semibold",
                                                                    children: "CSS Components"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                    className: "mb-4 text-blueGray-500",
                                                                    children: "Notus NextJS comes with a huge number of Fully Coded CSS components."
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "relative flex flex-col min-w-0",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "px-4 py-5 flex-auto",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                        className: "fas fa-drafting-compass"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                                    className: "text-xl mb-1 font-semibold",
                                                                    children: "JavaScript Components"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                    className: "mb-4 text-blueGray-500",
                                                                    children: "We also feature many dynamic components for React, NextJS, Vue and Angular."
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "w-full md:w-6/12 px-4",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "relative flex flex-col min-w-0 mt-4",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "px-4 py-5 flex-auto",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                        className: "fas fa-newspaper"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                                    className: "text-xl mb-1 font-semibold",
                                                                    children: "Pages"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                    className: "mb-4 text-blueGray-500",
                                                                    children: "This extension also comes with 3 sample pages. They are fully coded so you can start working instantly."
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "relative flex flex-col min-w-0",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "px-4 py-5 flex-auto",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                        className: "fas fa-file-alt"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                                    className: "text-xl mb-1 font-semibold",
                                                                    children: "Documentation"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                    className: "mb-4 text-blueGray-500",
                                                                    children: "Built by developers for developers. You will love how easy is to to work with Notus NextJS."
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "container mx-auto overflow-hidden pb-20",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex flex-wrap items-center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                    className: "fas fa-sitemap text-xl"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                className: "text-3xl mb-2 font-semibold leading-normal",
                                                children: "CSS Components"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600",
                                                children: "Every element that you need in a product comes built in as a component. All components fit perfectly with each other and can have different colours."
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "block pb-6",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2",
                                                        children: "Buttons"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2",
                                                        children: "Inputs"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2",
                                                        children: "Labels"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2",
                                                        children: "Menus"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2",
                                                        children: "Navbars"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2",
                                                        children: "Pagination"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2",
                                                        children: "Progressbars"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2",
                                                        children: "Typography"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                href: "https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=nnjs-index",
                                                target: "_blank",
                                                className: "font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150",
                                                children: [
                                                    "View All",
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                        className: "fa fa-angle-double-right ml-1 leading-relaxed"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "w-full md:w-5/12 px-4 mr-auto ml-auto mt-32",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                    alt: "...",
                                                    src: "/img/component-btn.png",
                                                    className: "w-full align-middle rounded absolute shadow-lg max-w-100-px left-145-px -top-29-px z-3"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                    alt: "...",
                                                    src: "/img/component-profile-card.png",
                                                    className: "w-full align-middle rounded-lg absolute shadow-lg max-w-210-px left-260-px -top-160-px"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                    alt: "...",
                                                    src: "/img/component-info-card.png",
                                                    className: "w-full align-middle rounded-lg absolute shadow-lg max-w-180-px left-40-px -top-225-px z-2"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                    alt: "...",
                                                    src: "/img/component-info-2.png",
                                                    className: "w-full align-middle rounded-lg absolute shadow-2xl max-w-200-px -left-50-px top-25-px"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                    alt: "...",
                                                    src: "/img/component-menu.png",
                                                    className: "w-full align-middle rounded absolute shadow-lg max-w-580-px -left-20-px top-210-px"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                    alt: "...",
                                                    src: "/img/component-btn-pink.png",
                                                    className: "w-full align-middle rounded absolute shadow-xl max-w-120-px left-195-px top-95-px"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex flex-wrap items-center pt-32",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "w-full md:w-6/12 px-4 mr-auto ml-auto mt-32",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "justify-center flex flex-wrap relative",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "my-4 w-full lg:w-6/12 px-4",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                            href: "https://www.creative-tim.com/learning-lab/tailwind/svelte/alerts/notus?ref=vtw-index",
                                                            target: "_blank",
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "bg-red-600 shadow-lg rounded-lg text-center p-8",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                        alt: "...",
                                                                        className: "shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white",
                                                                        src: "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/svelte.jpg"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                        className: "text-lg text-white mt-4 font-semibold",
                                                                        children: "Svelte"
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                            href: "https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=vtw-index",
                                                            target: "_blank",
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "bg-lightBlue-500 shadow-lg rounded-lg text-center p-8 mt-8",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                        alt: "...",
                                                                        className: "shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white",
                                                                        src: "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                        className: "text-lg text-white mt-4 font-semibold",
                                                                        children: "ReactJS"
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                            href: "https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vtw-index",
                                                            target: "_blank",
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                        alt: "...",
                                                                        className: "shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white",
                                                                        src: "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nextjs.jpg"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                        className: "text-lg text-white mt-4 font-semibold",
                                                                        children: "NextJS"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "my-4 w-full lg:w-6/12 px-4 lg:mt-16",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                            href: "https://www.creative-tim.com/learning-lab/tailwind/js/alerts/notus?ref=vtw-index",
                                                            target: "_blank",
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "bg-yellow-500 shadow-lg rounded-lg text-center p-8",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                        alt: "...",
                                                                        className: "shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white",
                                                                        src: "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/js.png"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                        className: "text-lg text-white mt-4 font-semibold",
                                                                        children: "JavaScript"
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                            href: "https://www.creative-tim.com/learning-lab/tailwind/angular/alerts/notus?ref=vtw-index",
                                                            target: "_blank",
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "bg-red-700 shadow-lg rounded-lg text-center p-8 mt-8",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                        alt: "...",
                                                                        className: "shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white",
                                                                        src: "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/angular.jpg"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                        className: "text-lg text-white mt-4 font-semibold",
                                                                        children: "Angular"
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                            href: "https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus?ref=vtw-index",
                                                            target: "_blank",
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "bg-emerald-500 shadow-lg rounded-lg text-center p-8 mt-8",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                        alt: "...",
                                                                        className: "shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white",
                                                                        src: "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/vue.jpg"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                        className: "text-lg text-white mt-4 font-semibold",
                                                                        children: "Vue.js"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                    className: "fas fa-drafting-compass text-xl"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                className: "text-3xl mb-2 font-semibold leading-normal",
                                                children: "Javascript Components"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600",
                                                children: "In order to create a great User Experience some components require JavaScript. In this way you can manipulate the elements on the page and give more options to your users."
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600",
                                                children: "We created a set of Components that are dynamic and come to help you."
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "block pb-6",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2",
                                                        children: "Alerts"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2",
                                                        children: "Dropdowns"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2",
                                                        children: "Menus"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2",
                                                        children: "Modals"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2",
                                                        children: "Navbars"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2",
                                                        children: "Popovers"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2",
                                                        children: "Tabs"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2",
                                                        children: "Tooltips"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                href: "https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=nnjs-index",
                                                target: "_blank",
                                                className: "font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150",
                                                children: [
                                                    "View all",
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                        className: "fa fa-angle-double-right ml-1 leading-relaxed"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "container mx-auto px-4 pb-32 pt-48",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "items-center flex flex-wrap",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "w-full md:w-5/12 ml-auto px-12 md:px-4",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "md:pr-12",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                    className: "fas fa-file-alt text-xl"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                className: "text-3xl font-semibold",
                                                children: "Complex Documentation"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "mt-4 text-lg leading-relaxed text-blueGray-500",
                                                children: "This extension comes a lot of fully coded examples that help you get started faster. You can adjust the colors and also the programming language. You can change the text and images and you're good to go."
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                className: "list-none mt-6",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        className: "py-2",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                        className: "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3",
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                            className: "fas fa-fingerprint"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                                        className: "text-blueGray-500",
                                                                        children: "Built by Developers for Developers"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        className: "py-2",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                        className: "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3",
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                            className: "fab fa-html5"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                                        className: "text-blueGray-500",
                                                                        children: "Carefully crafted code for Components"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        className: "py-2",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                        className: "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3",
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                            className: "far fa-paper-plane"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                                        className: "text-blueGray-500",
                                                                        children: "Dynamic Javascript Components"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        alt: "...",
                                        className: "max-w-full rounded-lg shadow-xl",
                                        style: {
                                            transform: "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)"
                                        },
                                        src: "/img/documentation.png"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "justify-center text-center flex flex-wrap mt-24",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "w-full md:w-6/12 px-12 md:px-4",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                    className: "font-semibold text-4xl",
                                    children: "Beautiful Example Pages"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "text-lg leading-relaxed mt-4 mb-4 text-blueGray-500",
                                    children: "Notus NextJS is a completly new product built using our past experience in web templates. Take the examples we made for you and start playing with them."
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "block relative z-1 bg-blueGray-600",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "container mx-auto",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "justify-center flex flex-wrap",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "w-full lg:w-12/12 px-4  -mt-24",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex flex-wrap",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "w-full lg:w-4/12 px-4",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                className: "text-xl font-semibold pb-4 text-center",
                                                children: "Login Page"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                href: "/auth/login",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                        alt: "...",
                                                        className: "align-middle border-none max-w-full h-auto rounded-lg",
                                                        src: "/img/login.jpg"
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "w-full lg:w-4/12 px-4",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                className: "text-xl font-semibold pb-4 text-center",
                                                children: "Profile Page"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                href: "/profile",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                        alt: "...",
                                                        className: "align-middle border-none max-w-full h-auto rounded-lg",
                                                        src: "/img/profile.jpg"
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "w-full lg:w-4/12 px-4",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                className: "text-xl font-semibold pb-4 text-center",
                                                children: "Landing Page"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                href: "/landing",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                        alt: "...",
                                                        className: "align-middle border-none max-w-full h-auto rounded-lg",
                                                        src: "/img/landing.jpg"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "py-20 bg-blueGray-600 overflow-hidden",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "container mx-auto pb-64",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex flex-wrap justify-center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                            className: "fas fa-code-branch text-xl"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                        className: "text-3xl mb-2 font-semibold leading-normal text-white",
                                        children: "Open Source"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                        className: "text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-400",
                                        children: [
                                            "Since",
                                            " ",
                                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                href: "https://tailwindcss.com/?ref=creative",
                                                className: "text-blueGray-300",
                                                target: "_blank",
                                                children: "Tailwind CSS"
                                            }),
                                            " ",
                                            "is an open source project we wanted to continue this movement too. You can give this version a try to feel the design and also test the quality of the code!"
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: "text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-400",
                                        children: "Get it free on Github and please help us spread the news with a Star!"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        href: "https://github.com/creativetimofficial/notus-nextjs?ref=nnjs-index",
                                        target: "_blank",
                                        className: "github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg",
                                        children: "Github Star"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative",
                                children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                    className: "fab fa-github text-blueGray-700 absolute text-55 -top-150-px -right-100 left-auto opacity-80"
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                className: "pb-16 bg-blueGray-200 relative pt-32",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20",
                        style: {
                            transform: "translateZ(0)"
                        },
                        children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                            className: "absolute bottom-0 overflow-hidden",
                            xmlns: "http://www.w3.org/2000/svg",
                            preserveAspectRatio: "none",
                            version: "1.1",
                            viewBox: "0 0 2560 100",
                            x: "0",
                            y: "0",
                            children: /*#__PURE__*/ jsx_runtime.jsx("polygon", {
                                className: "text-blueGray-200 fill-current",
                                points: "2560 0 2560 100 0 100"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "container mx-auto",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "w-full text-center lg:w-8/12",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: "text-4xl text-center",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            role: "img",
                                            "aria-label": "love",
                                            children: "\uD83D\uDE0D"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                        className: "font-semibold text-3xl",
                                        children: "Do you love this Starter Kit?"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: "text-blueGray-500 text-lg leading-relaxed mt-4 mb-4",
                                        children: "Cause if you do, it can be yours now. Hit the buttons below to navigate to get the Free version for your next project. Build a new web app or give an old project a new look!"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "sm:block flex flex-col mt-10",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                href: "https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus?ref=nnjs-index",
                                                target: "_blank",
                                                className: "get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-blueGray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150",
                                                children: "Get started"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                href: "https://github.com/creativetimofficial/notus-nextjs?ref=nnjs-index",
                                                target: "_blank",
                                                className: "github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                        className: "fab fa-github text-lg mr-1"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        children: "Help With a Star"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "text-center mt-16"
                                    })
                                ]
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Footer/* default */.Z, {})
        ]
    });
}


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

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664,655], () => (__webpack_exec__(6210)));
module.exports = __webpack_exports__;

})();