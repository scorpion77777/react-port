exports.id = 657;
exports.ids = [657];
exports.modules = {

/***/ 9849:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "layout_main__o_HW1"
};


/***/ }),

/***/ 1071:
/***/ ((module) => {

// Exports
module.exports = {
	"nav": "sidebar_nav__bZN_R",
	"input": "sidebar_input__5LiiT",
	"glow": "sidebar_glow__tq8sf"
};


/***/ }),

/***/ 2469:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9849);
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_layout_module_css__WEBPACK_IMPORTED_MODULE_2__);



function Layout({ children  }) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "ml-2 mt-2 bg-[url('https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80')]"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Next"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_2___default().main),
                children: children
            })
        ]
    }));
};


/***/ }),

/***/ 8506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Sidebar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/sidebar.module.css
var sidebar_module = __webpack_require__(1071);
var sidebar_module_default = /*#__PURE__*/__webpack_require__.n(sidebar_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./assets/logo.svg
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.edf3092c.svg","height":245,"width":245});
// EXTERNAL MODULE: external "react-icons/gi"
var gi_ = __webpack_require__(8866);
// EXTERNAL MODULE: external "react-icons/si"
var si_ = __webpack_require__(764);
;// CONCATENATED MODULE: ./components/sidebar.js







function Sidebar() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
            className: (sidebar_module_default()).nav,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "cursor-pointer flex flex-col items-center justify-center ml-8",
                    style: {
                        position: "relative",
                        width: "100px",
                        height: "100px"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(gi_.GiCoffeeBeans, {
                            className: "flex flex-col mr-24 w-45 h-45 text-gray-400",
                            alt: "Logo",
                            layout: "responsive",
                            objectfit: "contain",
                            quality: 100
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: (sidebar_module_default()).glow,
                            children: "Ilumination"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-sm text-gray-500 flex flex-row align-middle justify-center ml-4",
                            children: "by vahan"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                    className: (sidebar_module_default()).input,
                    placeholder: "Search..."
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "bg-black",
                        children: "Home"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/stack",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "bg-black",
                        children: "Stack"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/contact",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "bg-black",
                        children: "Contact"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/portfolio",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "bg-black",
                        children: "Portfolio"
                    })
                })
            ]
        })
    }));
};


/***/ })

};
;