(() => {
var exports = {};
exports.id = 931;
exports.ids = [931];
exports.modules = {

/***/ 8038:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 8704:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-dom/server-rendering-stub");

/***/ }),

/***/ 7897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-server-dom-webpack/client");

/***/ }),

/***/ 6786:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 5868:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/app-render");

/***/ }),

/***/ 1844:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/get-segment-param");

/***/ }),

/***/ 6624:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/helpers/interception-routes");

/***/ }),

/***/ 5281:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module");

/***/ }),

/***/ 7085:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context");

/***/ }),

/***/ 199:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hash");

/***/ }),

/***/ 6819:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context");

/***/ }),

/***/ 9569:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hooks-client-context");

/***/ }),

/***/ 893:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix");

/***/ }),

/***/ 7887:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll");

/***/ }),

/***/ 8735:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot");

/***/ }),

/***/ 8231:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path");

/***/ }),

/***/ 4614:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix");

/***/ }),

/***/ 3750:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash");

/***/ }),

/***/ 9618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/server-inserted-html");

/***/ }),

/***/ 1895:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7262);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9513);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1823);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2502);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
// @ts-ignore this need to be imported from next/dist to be external


const AppPageRouteModule = next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__.AppPageRouteModule;
// We inject the tree and pages here so that we can use them in the route
// module.
const tree = {
        children: [
        '',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7399)), "/Users/mac/Documents/portfolio/src/app/page.js"],
          
        }]
      },
        {
        'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2911)), "/Users/mac/Documents/portfolio/src/app/layout.js"],
'not-found': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5493, 23)), "next/dist/client/components/not-found-error"],
        
      }
      ]
      }.children;
const pages = ["/Users/mac/Documents/portfolio/src/app/page.js"];

// @ts-expect-error - replaced by webpack/turbopack loader

const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__/* .RouteKind */ .x.APP_PAGE,
        page: "/page",
        pathname: "/",
        // The following aren't used in production.
        bundlePath: "",
        filename: "",
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
});

//# sourceMappingURL=app-page.js.map

/***/ }),

/***/ 8175:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6505, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23))

/***/ }),

/***/ 9138:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6173, 23))

/***/ }),

/***/ 8960:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9393));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1034));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9708, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3385))

/***/ }),

/***/ 3385:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Earth)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6450);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4997);
/* harmony import */ var framer_motion_3d__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2449);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var three_src_loaders_TextureLoader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4020);
/* __next_internal_client_entry_do_not_use__ default auto */ 





function Earth() {
    const [color, normal, aoMap] = (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__/* .useLoader */ .U2)(three_src_loaders_TextureLoader_js__WEBPACK_IMPORTED_MODULE_3__/* .TextureLoader */ .d, [
        "/assets/color.jpg",
        "/assets/normal.png",
        "/assets/occlusion.jpg"
    ]);
    const scene = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { scrollYProgress } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__/* .useScroll */ .v)({
        target: scene,
        offset: [
            "start end",
            "end start"
        ]
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__/* .Canvas */ .Xz, {
        ref: scene,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ambientLight", {
                intensity: .1
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("directionalLight", {
                intensity: 3.5,
                position: [
                    1,
                    0,
                    -.25
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion_3d__WEBPACK_IMPORTED_MODULE_5__/* .motion */ .E.mesh, {
                scale: 2.5,
                "rotation-y": scrollYProgress,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("sphereGeometry", {
                        args: [
                            1,
                            64,
                            64
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meshStandardMaterial", {
                        map: color,
                        normalMap: normal,
                        aoMap: aoMap
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 1034:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShopPOSAnimation)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(569);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3163);
/* __next_internal_client_entry_do_not_use__ default auto */ 


const spring = {
    type: "spring",
    stiffness: 300,
    damping: 24
};
const BEIGE = "#b7ab98";
const BLUE_ACCENT = "#3b82f6";
const SIDEBAR_BG = "rgba(20,30,45,0.95)";
const DARK = "#0d0d0d";
const CARD_BG = "rgba(255,255,255,0.04)";
const techStack = [
    {
        name: "Next.js",
        symbol: "▲"
    },
    {
        name: "Prisma",
        symbol: "◆"
    },
    {
        name: "PostgreSQL",
        symbol: "⬡"
    }
];
const posCategories = [
    "All Items",
    "Coffee",
    "Tea",
    "Bakery"
];
const posProducts = [
    {
        name: "Classic Latte",
        price: "$4.50"
    },
    {
        name: "Cappuccino",
        price: "$4.00"
    },
    {
        name: "Double Espresso",
        price: "$3.00"
    }
];
function ShopPOSAnimation() {
    const [scene, setScene] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const interval = setInterval(()=>{
            setScene((s)=>(s + 1) % 5);
        }, 3500);
        return ()=>clearInterval(interval);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "shop-pos-animation",
        style: {
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            width: "100%",
            height: "100%",
            padding: "clamp(0.5rem, 2vw, 1.5rem)",
            boxSizing: "border-box"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__/* .AnimatePresence */ .M, {
            mode: "wait",
            children: [
                scene === 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0,
                        scale: 0.98
                    },
                    transition: {
                        duration: 0.5
                    },
                    style: {
                        textAlign: "center",
                        color: BEIGE,
                        width: "100%",
                        maxWidth: "100vw"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.p, {
                            initial: {
                                opacity: 0,
                                y: 20,
                                filter: "blur(8px)"
                            },
                            animate: {
                                opacity: 0.9,
                                y: 0,
                                filter: "blur(0px)"
                            },
                            transition: {
                                ...spring,
                                delay: 0.1
                            },
                            style: {
                                fontSize: "clamp(14px, 1.8vw, 22px)",
                                letterSpacing: "0.25em",
                                marginBottom: "clamp(0.75rem, 2vh, 1.5rem)",
                                textTransform: "uppercase"
                            },
                            children: "Coffee Shop Management"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.h2, {
                            initial: {
                                opacity: 0,
                                scale: 0.8,
                                y: 30
                            },
                            animate: {
                                opacity: 1,
                                scale: 1,
                                y: 0
                            },
                            transition: {
                                ...spring,
                                delay: 0.2
                            },
                            style: {
                                fontSize: "clamp(36px, 8vw, 96px)",
                                fontWeight: 700,
                                letterSpacing: "-0.03em",
                                marginBottom: "clamp(0.5rem, 1.5vh, 1rem)",
                                lineHeight: 0.95,
                                color: BLUE_ACCENT
                            },
                            children: "SHOP-POS"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.p, {
                            initial: {
                                opacity: 0,
                                y: 16,
                                filter: "blur(4px)"
                            },
                            animate: {
                                opacity: 0.85,
                                y: 0,
                                filter: "blur(0px)"
                            },
                            transition: {
                                ...spring,
                                delay: 0.45
                            },
                            style: {
                                fontSize: "clamp(14px, 1.5vw, 20px)"
                            },
                            children: "Next.js 16 \xb7 Prisma 7 \xb7 PostgreSQL"
                        })
                    ]
                }, "title"),
                scene === 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0,
                        scale: 0.96
                    },
                    transition: {
                        duration: 0.4
                    },
                    style: {
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "clamp(1.5rem, 4vw, 3rem)",
                        alignItems: "stretch",
                        justifyContent: "center",
                        width: "min(100%, 1100px)"
                    },
                    children: techStack.map((t, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.div, {
                            initial: {
                                opacity: 0,
                                y: 40,
                                scale: 0.7,
                                rotateY: -15
                            },
                            animate: {
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                rotateY: 0
                            },
                            transition: {
                                ...spring,
                                delay: 0.1 + i * 0.15
                            },
                            whileHover: {
                                scale: 1.03,
                                y: -4
                            },
                            style: {
                                textAlign: "center",
                                color: BEIGE,
                                flex: "1 1 min(180px, 100%)",
                                minWidth: 140,
                                maxWidth: 260,
                                padding: "clamp(1.25rem, 3vw, 2rem)",
                                background: "rgba(20,30,45,0.6)",
                                borderRadius: 16,
                                border: "1px solid rgba(59,130,246,0.2)",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.span, {
                                    initial: {
                                        scale: 0,
                                        rotate: -180
                                    },
                                    animate: {
                                        scale: 1,
                                        rotate: 0
                                    },
                                    transition: {
                                        ...spring,
                                        delay: 0.25 + i * 0.15
                                    },
                                    style: {
                                        display: "block",
                                        fontSize: "clamp(2rem, 4vw, 3rem)",
                                        color: BLUE_ACCENT,
                                        marginBottom: "clamp(0.6rem, 1.5vh, 1rem)",
                                        lineHeight: 1
                                    },
                                    children: t.symbol
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.span, {
                                    initial: {
                                        opacity: 0,
                                        y: 8
                                    },
                                    animate: {
                                        opacity: 0.95,
                                        y: 0
                                    },
                                    transition: {
                                        delay: 0.35 + i * 0.15
                                    },
                                    style: {
                                        fontSize: "clamp(1rem, 1.8vw, 1.4rem)",
                                        fontWeight: 600,
                                        letterSpacing: "-0.02em",
                                        opacity: 0.95
                                    },
                                    children: t.name
                                })
                            ]
                        }, t.name))
                }, "tech"),
                scene === 2 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.div, {
                    initial: {
                        opacity: 0,
                        scale: 0.9,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        scale: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        scale: 0.95
                    },
                    transition: {
                        ...spring
                    },
                    style: {
                        width: "min(96vw, 92vh, 900px)",
                        maxHeight: "min(90vh, 600px)",
                        borderRadius: "clamp(12px, 2vw, 20px)",
                        overflow: "hidden",
                        border: "1px solid rgba(59,130,246,0.2)",
                        boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(59,130,246,0.1)",
                        background: "linear-gradient(180deg, rgba(20,30,45,0.9) 0%, rgba(13,13,13,0.98) 100%)"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.div, {
                            initial: {
                                opacity: 0,
                                y: -16
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                ...spring,
                                delay: 0.1
                            },
                            style: {
                                padding: "clamp(0.75rem, 2vh, 1.25rem) clamp(1rem, 2.5vw, 1.5rem)",
                                borderBottom: "1px solid rgba(59,130,246,0.15)",
                                display: "flex",
                                alignItems: "center"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.span, {
                                initial: {
                                    opacity: 0,
                                    x: -12
                                },
                                animate: {
                                    opacity: 0.95,
                                    x: 0
                                },
                                transition: {
                                    delay: 0.2
                                },
                                style: {
                                    fontSize: "clamp(13px, 1.5vw, 18px)",
                                    color: BEIGE,
                                    opacity: 0.95
                                },
                                children: "Create New Sale (POS)"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            transition: {
                                delay: 0.15
                            },
                            style: {
                                padding: "clamp(0.6rem, 1.5vh, 1rem) clamp(1rem, 2.5vw, 1.5rem)",
                                display: "flex",
                                gap: "clamp(0.4rem, 1vw, 0.8rem)",
                                flexWrap: "wrap",
                                borderBottom: "1px solid rgba(59,130,246,0.1)"
                            },
                            children: posCategories.map((c, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.span, {
                                    initial: {
                                        opacity: 0,
                                        x: -20,
                                        scale: 0.8
                                    },
                                    animate: {
                                        opacity: 0.98,
                                        x: 0,
                                        scale: 1
                                    },
                                    transition: {
                                        ...spring,
                                        delay: 0.2 + i * 0.08
                                    },
                                    style: {
                                        fontSize: "clamp(11px, 1.2vw, 15px)",
                                        padding: "clamp(0.4rem, 1vh, 0.6rem) clamp(0.6rem, 1.5vw, 1rem)",
                                        borderRadius: 8,
                                        background: i === 0 ? "rgba(59,130,246,0.25)" : "rgba(255,255,255,0.06)",
                                        color: i === 0 ? BLUE_ACCENT : BEIGE,
                                        opacity: 0.98
                                    },
                                    children: c
                                }, c))
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                padding: "clamp(1rem, 2.5vh, 1.5rem)",
                                display: "grid",
                                gridTemplateColumns: "repeat(3, 1fr)",
                                gap: "clamp(0.5rem, 1.5vw, 1rem)"
                            },
                            children: posProducts.map((p, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.div, {
                                    initial: {
                                        opacity: 0,
                                        y: 24,
                                        scale: 0.85
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0,
                                        scale: 1
                                    },
                                    transition: {
                                        ...spring,
                                        delay: 0.35 + i * 0.1
                                    },
                                    style: {
                                        background: CARD_BG,
                                        borderRadius: 10,
                                        padding: "clamp(0.6rem, 1.5vw, 1rem)",
                                        border: "1px solid rgba(59,130,246,0.1)"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.div, {
                                            initial: {
                                                scale: 0.9,
                                                opacity: 0.5
                                            },
                                            animate: {
                                                scale: 1,
                                                opacity: 1
                                            },
                                            transition: {
                                                delay: 0.45 + i * 0.1
                                            },
                                            style: {
                                                width: "100%",
                                                aspectRatio: "1",
                                                background: "rgba(255,255,255,0.05)",
                                                borderRadius: 8,
                                                marginBottom: "clamp(0.4rem, 1vh, 0.6rem)"
                                            }
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            style: {
                                                fontSize: "clamp(12px, 1.3vw, 16px)",
                                                color: BEIGE,
                                                opacity: 0.95
                                            },
                                            children: p.name
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            style: {
                                                fontSize: "clamp(13px, 1.4vw, 17px)",
                                                color: BLUE_ACCENT,
                                                fontWeight: 600,
                                                marginTop: "0.25rem"
                                            },
                                            children: p.price
                                        })
                                    ]
                                }, p.name))
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                ...spring,
                                delay: 0.6
                            },
                            style: {
                                padding: "clamp(0.75rem, 2vh, 1.25rem) clamp(1rem, 2.5vw, 1.5rem)",
                                borderTop: "1px solid rgba(59,130,246,0.15)",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.span, {
                                    initial: {
                                        opacity: 0,
                                        x: -10
                                    },
                                    animate: {
                                        opacity: 0.9,
                                        x: 0
                                    },
                                    transition: {
                                        delay: 0.7
                                    },
                                    style: {
                                        fontSize: "clamp(13px, 1.4vw, 17px)",
                                        color: BEIGE,
                                        opacity: 0.9
                                    },
                                    children: "Current Sale"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.span, {
                                    initial: {
                                        opacity: 0,
                                        scale: 0.8,
                                        x: 10
                                    },
                                    animate: {
                                        opacity: 1,
                                        scale: 1,
                                        x: 0
                                    },
                                    transition: {
                                        ...spring,
                                        delay: 0.75
                                    },
                                    style: {
                                        fontSize: "clamp(16px, 2vw, 24px)",
                                        fontWeight: 700,
                                        color: BLUE_ACCENT
                                    },
                                    children: "$17.05"
                                })
                            ]
                        })
                    ]
                }, "pos-mockup"),
                scene === 3 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.div, {
                    initial: {
                        opacity: 0,
                        scale: 0.96
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    exit: {
                        opacity: 0,
                        scale: 0.98
                    },
                    transition: {
                        ...spring
                    },
                    style: {
                        width: "min(98vw, 95vh, 1600px)",
                        height: "min(90vh, 700px)",
                        display: "flex",
                        borderRadius: "clamp(10px, 1.5vw, 16px)",
                        overflow: "hidden",
                        border: "1px solid rgba(59,130,246,0.2)",
                        boxShadow: "0 24px 80px rgba(0,0,0,0.5)",
                        background: "linear-gradient(180deg, #0d1419 0%, #0d0d0d 100%)"
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "shop-pos-dashboard",
                        style: {
                            display: "flex",
                            width: "100%",
                            height: "100%",
                            flexDirection: "row"
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.div, {
                                initial: {
                                    opacity: 0,
                                    x: -40
                                },
                                animate: {
                                    opacity: 1,
                                    x: 0
                                },
                                transition: {
                                    ...spring,
                                    delay: 0.1
                                },
                                style: {
                                    width: "clamp(180px, 18%, 220px)",
                                    minWidth: 140,
                                    background: SIDEBAR_BG,
                                    padding: "clamp(0.75rem, 2vw, 1.25rem)",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "clamp(0.5rem, 1.5vh, 1rem)"
                                },
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.div, {
                                        initial: {
                                            opacity: 0
                                        },
                                        animate: {
                                            opacity: 1
                                        },
                                        transition: {
                                            delay: 0.2
                                        },
                                        style: {
                                            padding: "0 0.5rem",
                                            marginBottom: "0.5rem"
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.div, {
                                                initial: {
                                                    opacity: 0,
                                                    x: -8
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    x: 0
                                                },
                                                transition: {
                                                    delay: 0.25
                                                },
                                                style: {
                                                    fontSize: "clamp(14px, 1.2vw, 18px)",
                                                    fontWeight: 700,
                                                    color: BLUE_ACCENT
                                                },
                                                children: "SHOP-POS"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.div, {
                                                initial: {
                                                    opacity: 0
                                                },
                                                animate: {
                                                    opacity: 0.7
                                                },
                                                transition: {
                                                    delay: 0.3
                                                },
                                                style: {
                                                    fontSize: "clamp(10px, 0.9vw, 12px)",
                                                    color: BEIGE
                                                },
                                                children: "Admin Panel"
                                            })
                                        ]
                                    }),
                                    [
                                        "Dashboard",
                                        "Sales",
                                        "Inventory",
                                        "Employees",
                                        "Reports"
                                    ].map((nav, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.div, {
                                            initial: {
                                                opacity: 0,
                                                x: -12
                                            },
                                            animate: {
                                                opacity: i === 0 ? 1 : 0.85,
                                                x: 0
                                            },
                                            transition: {
                                                ...spring,
                                                delay: 0.15 + i * 0.06
                                            },
                                            style: {
                                                fontSize: "clamp(11px, 1vw, 14px)",
                                                padding: "0.5rem 0.75rem",
                                                borderRadius: 8,
                                                color: i === 0 ? BLUE_ACCENT : BEIGE,
                                                background: i === 0 ? "rgba(59,130,246,0.15)" : "transparent",
                                                opacity: i === 0 ? 1 : 0.85
                                            },
                                            children: nav
                                        }, nav)),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            flex: 1
                                        }
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.div, {
                                        initial: {
                                            opacity: 0,
                                            y: 12
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            delay: 0.5
                                        },
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.5rem",
                                            padding: "0.5rem"
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                style: {
                                                    width: 32,
                                                    height: 32,
                                                    borderRadius: "50%",
                                                    background: "rgba(183,171,152,0.3)"
                                                }
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        style: {
                                                            fontSize: "clamp(11px, 1vw, 13px)",
                                                            color: BEIGE
                                                        },
                                                        children: "John Doe"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        style: {
                                                            fontSize: "clamp(9px, 0.8vw, 11px)",
                                                            color: BEIGE,
                                                            opacity: 0.6
                                                        },
                                                        children: "john@shoppos.com"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.div, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                transition: {
                                    delay: 0.12
                                },
                                style: {
                                    flex: 1,
                                    padding: "clamp(0.75rem, 2vw, 1.5rem)",
                                    overflow: "hidden",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "clamp(0.5rem, 1.5vh, 1rem)",
                                    background: "rgba(243,244,246,0.03)"
                                },
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.div, {
                                        initial: {
                                            opacity: 0,
                                            y: -8
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            delay: 0.18
                                        },
                                        style: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "flex-start",
                                            flexWrap: "wrap",
                                            gap: "0.75rem"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.h3, {
                                                        initial: {
                                                            opacity: 0
                                                        },
                                                        animate: {
                                                            opacity: 1
                                                        },
                                                        transition: {
                                                            delay: 0.22
                                                        },
                                                        style: {
                                                            fontSize: "clamp(16px, 1.5vw, 22px)",
                                                            fontWeight: 700,
                                                            color: BEIGE,
                                                            margin: 0
                                                        },
                                                        children: "Dashboard Overview"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.p, {
                                                        initial: {
                                                            opacity: 0
                                                        },
                                                        animate: {
                                                            opacity: 0.75
                                                        },
                                                        transition: {
                                                            delay: 0.26
                                                        },
                                                        style: {
                                                            fontSize: "clamp(11px, 1vw, 14px)",
                                                            color: BEIGE,
                                                            margin: "0.25rem 0 0"
                                                        },
                                                        children: "Welcome back, here's what's happening with your store today."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                style: {
                                                    display: "flex",
                                                    gap: "0.5rem"
                                                },
                                                children: [
                                                    "Today",
                                                    "7 Days",
                                                    "30 Days"
                                                ].map((d, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.span, {
                                                        initial: {
                                                            opacity: 0,
                                                            scale: 0.9
                                                        },
                                                        animate: {
                                                            opacity: 1,
                                                            scale: 1
                                                        },
                                                        transition: {
                                                            ...spring,
                                                            delay: 0.2 + i * 0.05
                                                        },
                                                        style: {
                                                            fontSize: "clamp(10px, 0.9vw, 12px)",
                                                            padding: "0.4rem 0.75rem",
                                                            borderRadius: 6,
                                                            background: i === 2 ? BLUE_ACCENT : "rgba(255,255,255,0.08)",
                                                            color: i === 2 ? "#fff" : BEIGE
                                                        },
                                                        children: d
                                                    }, d))
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "shop-pos-metrics",
                                        style: {
                                            display: "grid",
                                            gridTemplateColumns: "repeat(4, 1fr)",
                                            gap: "clamp(0.5rem, 1.5vw, 1rem)"
                                        },
                                        children: [
                                            {
                                                label: "Total Sales",
                                                value: "$24,500",
                                                change: "+12%",
                                                color: "#22c55e"
                                            },
                                            {
                                                label: "Transactions",
                                                value: "1,204",
                                                change: "+5%",
                                                color: "#22c55e"
                                            },
                                            {
                                                label: "Total Expenses",
                                                value: "$8,200",
                                                change: "-2%",
                                                color: "#ef4444"
                                            },
                                            {
                                                label: "Net Revenue",
                                                value: "$16,300",
                                                change: "+15%",
                                                color: "#22c55e"
                                            }
                                        ].map((m, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.div, {
                                                initial: {
                                                    opacity: 0,
                                                    y: 12,
                                                    scale: 0.95
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    y: 0,
                                                    scale: 1
                                                },
                                                transition: {
                                                    ...spring,
                                                    delay: 0.25 + i * 0.06
                                                },
                                                style: {
                                                    background: "rgba(255,255,255,0.06)",
                                                    borderRadius: 12,
                                                    padding: "clamp(0.6rem, 1.5vw, 1rem)",
                                                    border: "1px solid rgba(59,130,246,0.12)"
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        style: {
                                                            fontSize: "clamp(10px, 0.9vw, 12px)",
                                                            color: BEIGE,
                                                            opacity: 0.8
                                                        },
                                                        children: m.label
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        style: {
                                                            fontSize: "clamp(14px, 1.4vw, 20px)",
                                                            fontWeight: 700,
                                                            color: BEIGE,
                                                            marginTop: "0.25rem"
                                                        },
                                                        children: m.value
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        style: {
                                                            fontSize: "clamp(10px, 0.85vw, 11px)",
                                                            color: m.color,
                                                            marginTop: "0.2rem"
                                                        },
                                                        children: m.change
                                                    })
                                                ]
                                            }, m.label))
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "shop-pos-charts",
                                        style: {
                                            flex: 1,
                                            minHeight: 0,
                                            display: "grid",
                                            gridTemplateColumns: "1.2fr 1fr",
                                            gap: "clamp(0.5rem, 1.5vw, 1rem)"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.div, {
                                                initial: {
                                                    opacity: 0,
                                                    scale: 0.97
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    scale: 1
                                                },
                                                transition: {
                                                    delay: 0.45
                                                },
                                                style: {
                                                    background: "rgba(255,255,255,0.04)",
                                                    borderRadius: 12,
                                                    padding: "clamp(0.6rem, 1.5vw, 1rem)",
                                                    border: "1px solid rgba(59,130,246,0.1)",
                                                    display: "flex",
                                                    flexDirection: "column"
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        style: {
                                                            fontSize: "clamp(12px, 1.1vw, 14px)",
                                                            fontWeight: 600,
                                                            color: BEIGE,
                                                            marginBottom: "0.5rem"
                                                        },
                                                        children: "Sales Trend"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.div, {
                                                        initial: {
                                                            opacity: 0
                                                        },
                                                        animate: {
                                                            opacity: 1
                                                        },
                                                        transition: {
                                                            delay: 0.55
                                                        },
                                                        style: {
                                                            flex: 1,
                                                            background: "rgba(59,130,246,0.12)",
                                                            borderRadius: 8,
                                                            minHeight: 80
                                                        }
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.div, {
                                                initial: {
                                                    opacity: 0,
                                                    scale: 0.97
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    scale: 1
                                                },
                                                transition: {
                                                    delay: 0.5
                                                },
                                                style: {
                                                    background: "rgba(255,255,255,0.04)",
                                                    borderRadius: 12,
                                                    padding: "clamp(0.6rem, 1.5vw, 1rem)",
                                                    border: "1px solid rgba(59,130,246,0.1)",
                                                    display: "flex",
                                                    flexDirection: "column"
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        style: {
                                                            fontSize: "clamp(12px, 1.1vw, 14px)",
                                                            fontWeight: 600,
                                                            color: BEIGE,
                                                            marginBottom: "0.5rem"
                                                        },
                                                        children: "Expense Breakdown"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        style: {
                                                            flex: 1,
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            gap: "0.5rem"
                                                        },
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.div, {
                                                            initial: {
                                                                scale: 0,
                                                                opacity: 0
                                                            },
                                                            animate: {
                                                                scale: 1,
                                                                opacity: 1
                                                            },
                                                            transition: {
                                                                ...spring,
                                                                delay: 0.6
                                                            },
                                                            style: {
                                                                width: "clamp(60px, 8vw, 90px)",
                                                                height: "clamp(60px, 8vw, 90px)",
                                                                borderRadius: "50%",
                                                                border: `4px solid ${BLUE_ACCENT}`,
                                                                display: "flex",
                                                                alignItems: "center",
                                                                justifyContent: "center",
                                                                fontSize: "clamp(10px, 1vw, 12px)",
                                                                color: BEIGE
                                                            },
                                                            children: "$8.2k"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.div, {
                                        initial: {
                                            opacity: 0,
                                            y: 12,
                                            x: -8
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0,
                                            x: 0
                                        },
                                        transition: {
                                            ...spring,
                                            delay: 0.65
                                        },
                                        style: {
                                            background: "rgba(239,68,68,0.08)",
                                            borderRadius: 10,
                                            padding: "clamp(0.5rem, 1.2vw, 0.75rem)",
                                            border: "1px solid rgba(239,68,68,0.2)",
                                            fontSize: "clamp(10px, 0.9vw, 12px)",
                                            color: "#ef4444"
                                        },
                                        children: "▲ Low Stock Alerts — Espresso Beans (3 left), Almond Milk (8 left)"
                                    })
                                ]
                            })
                        ]
                    })
                }, "dashboard"),
                scene === 4 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0,
                        scale: 0.98
                    },
                    style: {
                        textAlign: "center",
                        color: BEIGE,
                        width: "min(100%, 600px)"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.p, {
                            initial: {
                                opacity: 0,
                                y: 16,
                                filter: "blur(6px)"
                            },
                            animate: {
                                opacity: 0.95,
                                y: 0,
                                filter: "blur(0px)"
                            },
                            transition: {
                                ...spring,
                                delay: 0.1
                            },
                            style: {
                                fontSize: "clamp(14px, 1.6vw, 22px)",
                                marginBottom: "clamp(1rem, 3vh, 1.5rem)",
                                opacity: 0.95
                            },
                            children: "Production-ready multi-tenant SaaS"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.div, {
                            initial: {
                                opacity: 0,
                                y: 24,
                                scale: 0.9
                            },
                            animate: {
                                opacity: 1,
                                y: 0,
                                scale: 1
                            },
                            transition: {
                                ...spring,
                                delay: 0.3
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "https://shop-pos-sand.vercel.app/",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                style: {
                                    display: "inline-block",
                                    padding: "clamp(0.75rem, 2vh, 1rem) clamp(2rem, 5vw, 3rem)",
                                    border: `2px solid ${BLUE_ACCENT}`,
                                    color: BLUE_ACCENT,
                                    fontSize: "clamp(13px, 1.4vw, 18px)",
                                    fontWeight: 600,
                                    textTransform: "uppercase",
                                    letterSpacing: "0.15em",
                                    textDecoration: "none",
                                    borderRadius: 8,
                                    transition: "background 0.3s, color 0.3s"
                                },
                                onMouseEnter: (e)=>{
                                    e.currentTarget.style.background = BLUE_ACCENT;
                                    e.currentTarget.style.color = "#fff";
                                },
                                onMouseLeave: (e)=>{
                                    e.currentTarget.style.background = "transparent";
                                    e.currentTarget.style.color = BLUE_ACCENT;
                                },
                                children: "View Live Demo"
                            })
                        })
                    ]
                }, "cta")
            ]
        })
    });
}


/***/ }),

/***/ 9393:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SoundToggle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ default auto */ 

function SoundToggle() {
    const [isOn, setIsOn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const audioRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const audio = document.querySelector(".js-web-sound");
        if (audio) {
            audioRef.current = audio;
            audio.loop = true;
        }
    }, []);
    const handleClick = ()=>{
        const audio = audioRef.current || document.querySelector(".js-web-sound");
        if (!audio) return;
        const next = !isOn;
        setIsOn(next);
        if (next) {
            audio.muted = false;
            audio.play().catch(()=>{});
        } else {
            audio.muted = true;
            audio.pause();
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        type: "button",
        className: "footer_sound js-cursor-contract js-footer_sound",
        onClick: handleClick,
        "aria-label": isOn ? "Sound on" : "Sound off",
        "aria-pressed": isOn,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "footer_sound_label",
                children: "SOUND"
            }),
            " ",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "footer_sound_state footer_sound_state--animate",
                children: isOn ? "ON" : "OFF"
            }, isOn ? "on" : "off")
        ]
    });
}


/***/ }),

/***/ 2911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout),
/* harmony export */   metadata: () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4862);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5023);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_globals_css__WEBPACK_IMPORTED_MODULE_2__);



const metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://abdulsami.dev"),
    title: "Abdul Sami - Full Stack Developer & UI/UX Designer",
    description: "I'm a Computer Science graduate with expertise in UI/UX design, AI-assisted full-stack development, React, Next.js, and Flutter. Building clean, functional digital products.",
    openGraph: {
        title: "Abdul Sami - Full Stack Developer & UI/UX Designer",
        description: "I'm a Computer Science graduate with expertise in UI/UX design, AI-assisted full-stack development, React, Next.js, and Flutter. Building clean, functional digital products.",
        images: [
            "/images/screenshot.jpg"
        ]
    }
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("html", {
        lang: "en",
        className: "js no-system-cursor",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("head", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                        dangerouslySetInnerHTML: {
                            __html: 'history.scrollRestoration = "manual";'
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                        dangerouslySetInnerHTML: {
                            __html: 'var siteData = {"siteUrl": ""};'
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "apple-touch-icon",
                        sizes: "180x180",
                        href: "/images/apple-touch-icon.png"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "32x32",
                        href: "/images/favicon-32x32.png"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "16x16",
                        href: "/images/favicon-16x16.png"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "manifest",
                        href: "/assets/favicon/site.webmanifest"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "theme-color",
                        content: "#0d0d0d"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        href: "/css/app.css",
                        rel: "stylesheet"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                className: "home",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_1___default()), {
                        src: "/js/caching.js",
                        strategy: "beforeInteractive"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_1___default()), {
                        src: "https://www.googletagmanager.com/gtag/js?id=G-79VFDFP12E",
                        strategy: "afterInteractive"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_1___default()), {
                        id: "gtag",
                        strategy: "afterInteractive",
                        children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-79VFDFP12E');
          `
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_1___default()), {
                        src: "/js/vendor.bundle.js",
                        strategy: "afterInteractive"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_1___default()), {
                        id: "videojs-guard",
                        strategy: "afterInteractive",
                        children: `(function(){
            var stub = { ready: function(f){ (f&&f)(); return this; }, on: function(){ return this; }, play: function(){ return this; }, pause: function(){ return this; } };
            if (typeof window.videojs !== 'undefined') {
              var orig = window.videojs;
              window.videojs = function(el, opts) {
                var target = typeof el === 'string' ? document.getElementById(el) : el;
                if (!target || !target.tagName) return stub;
                try {
                  var result = orig.apply(this, arguments);
                  return (result && typeof result.on === 'function') ? result : stub;
                } catch (e) {
                  return stub;
                }
              };
            } else {
              window.videojs = function(){ return stub; };
            }
          })();`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_1___default()), {
                        id: "videojs-fix",
                        strategy: "afterInteractive",
                        children: `(function(){
            var ensure = function(id) {
              if (!document.getElementById(id)) {
                var v = document.createElement('video');
                v.id = id;
                v.setAttribute('playsinline','');
                v.setAttribute('muted','');
                v.setAttribute('loop','');
                v.setAttribute('preload','none');
                v.style.cssText = 'position:absolute;width:1px;height:1px;opacity:0;visibility:hidden;pointer-events:none';
                document.body.appendChild(v);
              }
            };
            ensure('videoPlayer');
            ensure('videoPlayer_red');
          })();`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_1___default()), {
                        id: "app-bundle-loader",
                        strategy: "afterInteractive",
                        children: `(function(){
            function loadAppBundle() {
              var s = document.createElement('script');
              s.src = '/js/app.bundle.js';
              s.async = false;
              document.body.appendChild(s);
            }
            if (document.readyState === 'complete') {
              setTimeout(loadAppBundle, 300);
            } else {
              window.addEventListener('load', function(){ setTimeout(loadAppBundle, 300); });
            }
          })();`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_1___default()), {
                        id: "cursor-video-fix",
                        strategy: "afterInteractive",
                        children: `(function(){
            var CONTRACT_R = 56;
            function init() {
              var video = document.querySelector('.video');
              if (!video) return setTimeout(init, 200);
              function onEnter() {
                document.body.setAttribute('data-cursor-contract', '1');
                document.documentElement.style.setProperty('--r', CONTRACT_R + 'px');
              }
              function onLeave() {
                document.body.removeAttribute('data-cursor-contract');
                document.documentElement.style.removeProperty('--r');
              }
              video.addEventListener('mouseenter', onEnter);
              video.addEventListener('mouseleave', onLeave);
              document.addEventListener('mousemove', function(e) {
                if (video.contains(e.target)) {
                  requestAnimationFrame(function() {
                    document.documentElement.style.setProperty('--r', CONTRACT_R + 'px');
                  });
                }
              });
            }
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', init);
            } else {
              setTimeout(init, 100);
            }
          })();`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_1___default()), {
                        src: "/js/email-decode.min.js",
                        strategy: "afterInteractive"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_1___default()), {
                        id: "preloader-scroll",
                        strategy: "afterInteractive",
                        children: `
            (function(){
              var startBtn = document.getElementById('js-page-loading_start');
              if (startBtn) setTimeout(function(){ startBtn.click(); }, 3000);
              setTimeout(function(){
                document.documentElement.style.setProperty('overflow-y','auto','important');
                document.body.style.setProperty('overflow-y','auto','important');
                document.addEventListener('wheel', function(e){
                  var h = document.documentElement.scrollHeight - window.innerHeight;
                  if (h < 50) return;
                  var top = window.scrollY || document.documentElement.scrollTop;
                  if ((e.deltaY > 0 && top < h - 2) || (e.deltaY < 0 && top > 2)) {
                    window.scrollBy(0, e.deltaY);
                    e.preventDefault();
                  }
                }, { passive: false });
              }, 4000);
            })();
          `
                    }),
                    children
                ]
            })
        ]
    });
}


/***/ }),

/***/ 7399:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/dist/shared/lib/app-dynamic.js
var app_dynamic = __webpack_require__(2964);
var app_dynamic_default = /*#__PURE__*/__webpack_require__.n(app_dynamic);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1363);
;// CONCATENATED MODULE: ./src/components/ShopPOSAnimation.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/mac/Documents/portfolio/src/components/ShopPOSAnimation.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const ShopPOSAnimation = (__default__);
;// CONCATENATED MODULE: ./src/components/SoundToggle.tsx

const SoundToggle_proxy = (0,module_proxy.createProxy)(String.raw`/Users/mac/Documents/portfolio/src/components/SoundToggle.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: SoundToggle_esModule, $$typeof: SoundToggle_$$typeof } = SoundToggle_proxy;
const SoundToggle_default_ = SoundToggle_proxy.default;


/* harmony default export */ const SoundToggle = (SoundToggle_default_);
;// CONCATENATED MODULE: ./src/components/PortfolioBody.tsx




const Earth = app_dynamic_default()(()=>__webpack_require__.e(/* import() */ 232).then(__webpack_require__.bind(__webpack_require__, 232)), {
    loadableGenerated: {
        modules: [
            "/Users/mac/Documents/portfolio/src/components/PortfolioBody.tsx -> " + "./Earth"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "earth-canvas earth-canvas--loading",
            style: {
                minHeight: "50vw"
            }
        })
});
function PortfolioBody() {
    const pageLoadingStyle = {
        position: "fixed",
        top: 0,
        zIndex: 99999999,
        width: "100%",
        height: "100%",
        left: 0,
        backgroundColor: "#0d0d0d"
    };
    const sectionBgStyle = {
        position: "absolute",
        inset: 0,
        backgroundColor: "#0d0d0d"
    };
    const videoPlaceholderStyle = {
        position: "absolute",
        inset: 0,
        background: "linear-gradient(160deg,#0d0d0d 0%,#1a1a1a 50%,#0d0d0d 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    };
    const videoPlaceholderImgStyle = {
        maxWidth: "40%",
        opacity: 0.15,
        objectFit: "contain"
    };
    const mottoLabelStyle = {
        letterSpacing: "0.15em",
        color: "#b7ab98"
    };
    const mottoDescStyle = {
        color: "#b7ab98"
    };
    const workExpVisualStyle = {
        width: 120,
        height: 120,
        borderRadius: "50%",
        background: "linear-gradient(135deg,#2a2a2a 0%,#1a1a1a 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        filter: "grayscale(1)",
        opacity: 0.8
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "home",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "page-loading js-page-loading",
                style: pageLoadingStyle,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "page-loading_inner js-page-loading_inner",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                            id: "page-loading_circle",
                            width: "270",
                            height: "270",
                            viewBox: "0 0 270 270",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                cx: "136",
                                cy: "136",
                                r: "132",
                                stroke: "#B7AB98"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "page-loading_logo",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                id: "page-loading_logo",
                                src: "/images/logo.gif",
                                width: 64,
                                height: 64,
                                alt: "logo"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            id: "js-page-loading_start",
                            className: "body-text page-loading_start",
                            children: "Start"
                        }),
                        " ",
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            id: "js-page-loading_text",
                            className: "page-loading_text",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                    className: "js-loading_text",
                                    children: "00"
                                }),
                                "%"
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                className: "header js-header",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "header_logo js-header_logo",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "link-logo",
                            "aria-label": "Home page",
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: "svg",
                                src: "/images/logo.gif",
                                alt: "logo"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "header_menu",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "header_menu_list ul__reset",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "header_menu_item js-cursor-contract",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#about",
                                        className: "desc text-uppercase",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            className: "header_menu_item_inner",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "header_menu_item_link header_menu_item_link__deep",
                                                    children: "About"
                                                }),
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "header_menu_item_link header_menu_item_link__active",
                                                    children: "About"
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "header_menu_item js-cursor-contract",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#work",
                                        className: "desc text-uppercase",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            className: "header_menu_item_inner",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "header_menu_item_link header_menu_item_link__deep",
                                                    children: "Work"
                                                }),
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "header_menu_item_link header_menu_item_link__active",
                                                    children: "Work"
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "header_menu_item js-cursor-contract",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#contact",
                                        className: "desc text-uppercase",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            className: "header_menu_item_inner",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "header_menu_item_link header_menu_item_link__deep",
                                                    children: "Contact"
                                                }),
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "header_menu_item_link header_menu_item_link__active",
                                                    children: "Contact"
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: "main-layer js-pageContent",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "layer layer__dark",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "container",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    id: "about",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "hero",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "hero_bg",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        style: sectionBgStyle,
                                                        "aria-hidden": true
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "hero_content",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "row justify-content-center",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "col-lg-4 col-sm-8 col-12 hero_content_inner js-cursor-extend",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                    className: "text-center hero_content_inner_subtitle js-anim--lines--sim",
                                                                    "data-screen-offset": "0.8",
                                                                    children: "Abdul Sami"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                                                    className: "text-center js-anim--chars mb-0",
                                                                    "data-screen-offset": "0.6",
                                                                    children: [
                                                                        "making",
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                                            children: "good"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                                            children: "shit"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                        "since",
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                        "2021"
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "about js-about",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "row about_me",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-lg-8 col-sm-10 col-12 offset-lg-2 offset-sm-1",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "about_content container_content js-cursor-extend",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "about_content_label body-text text-uppercase",
                                                                children: "About me"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "about_content_desc h2",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "scroll-paragraph-mask js-scroll-paragraph-mask",
                                                                    children: [
                                                                        "I'm a ",
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                                            children: "selectively skilled"
                                                                        }),
                                                                        " developer with strong focus on producing high quality & impactful digital products."
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "about_ido",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "js-about_ido_coffee about_ido_coffee",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "js-about_ido_inner about_ido_inner",
                                                        "data-lenis-speed": "-.1"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "js-about_ido_mouse about_ido_mouse",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "js-about_ido_inner about_ido_inner",
                                                        "data-lenis-speed": ".1"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "row",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "col-lg-8 col-sm-10 offset-lg-2 offset-sm-1 col-12",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: "about_content_label container_content body-text text-uppercase",
                                                            children: "What i do"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "heading-mask js-heading-mask",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "heading-mask_el heading-mask_el__deep container_content",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "row align-items-center",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "col-sm-6 offset-lg-2 offset-sm-1 col-12",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "simple-masking",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "js-simple-masking_el simple-masking_el js-cursor-contract",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                                    className: "h1 mb-0 js-heading-mask_heading",
                                                                                    children: "UI/UX"
                                                                                })
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "col-3 op-0 d-lg-block d-none",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            className: "mb-0 desc",
                                                                            children: "I design clean, functional interfaces that users actually enjoy using"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "heading-mask_el heading-mask_el__masking container_content",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "row align-items-center",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "col-sm-6 offset-lg-2 offset-sm-1 col-12",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "simple-masking overflow-hidden",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "simple-masking_el",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                                    className: "h1 mb-0 text-dark",
                                                                                    children: "UI/UX"
                                                                                })
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "col-lg-3 col-sm-4 col-12 text-dark d-sm-block d-none",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            className: "mb-0 desc",
                                                                            children: "I design clean, functional interfaces that users actually enjoy using"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "heading-mask js-heading-mask",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "heading-mask_el heading-mask_el__deep container_content",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "row align-items-center",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "col-sm-6 offset-lg-2 offset-sm-1 col-12",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "simple-masking",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "js-simple-masking_el simple-masking_el js-cursor-contract",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                                    className: "h1 mb-0 js-heading-mask_heading",
                                                                                    children: "Full Stack"
                                                                                })
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "col-3 op-0 d-lg-block d-none",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            className: "mb-0 desc",
                                                                            children: "I build production-ready apps with React, Next.js, PostgreSQL, and AI-assisted workflows."
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "heading-mask_el heading-mask_el__masking container_content",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "row align-items-center",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "col-sm-6 offset-lg-2 offset-sm-1 col-12",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "simple-masking overflow-hidden",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "simple-masking_el",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                                    className: "h1 mb-0 text-dark",
                                                                                    children: "Full Stack"
                                                                                })
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "col-lg-3 col-sm-4 col-12 text-dark d-sm-block d-none",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            className: "mb-0 desc",
                                                                            children: "I build production-ready apps with React, Next.js, PostgreSQL, and AI-assisted workflows."
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "heading-mask js-heading-mask",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "heading-mask_el heading-mask_el__deep container_content",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "row align-items-center",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "col-sm-6 offset-lg-2 offset-sm-1 col-12",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "simple-masking",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "js-simple-masking_el simple-masking_el js-cursor-contract",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                                    className: "h1 mb-0 js-heading-mask_heading",
                                                                                    children: "Flutter"
                                                                                })
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "col-3 op-0 d-lg-block d-none",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            className: "mb-0 desc",
                                                                            children: "I craft cross-platform mobile experiences that work everywhere"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "heading-mask_el heading-mask_el__masking container_content",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "row align-items-center",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "col-sm-6 offset-lg-2 offset-sm-1 col-12",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "simple-masking overflow-hidden",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "simple-masking_el",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                                    className: "h1 mb-0 text-dark",
                                                                                    children: "Flutter"
                                                                                })
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "col-lg-3 col-sm-4 col-12 text-dark d-sm-block d-none",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            className: "mb-0 desc",
                                                                            children: "I craft cross-platform mobile experiences that work everywhere"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "heading-mask js-heading-mask",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "heading-mask_el heading-mask_el__deep container_content",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "row align-items-center",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "col-sm-6 offset-lg-2 offset-sm-1 col-12",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "simple-masking",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "js-simple-masking_el simple-masking_el js-cursor-contract",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                                    className: "h1 mb-0 js-heading-mask_heading",
                                                                                    children: "Prompt Eng."
                                                                                })
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "col-3 op-0 d-lg-block d-none",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            className: "mb-0 desc",
                                                                            children: "Database modeling, REST API structuring, auth systems & multi-tenant data isolation."
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "heading-mask_el heading-mask_el__masking container_content",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "row align-items-center",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "col-sm-6 offset-lg-2 offset-sm-1 col-12",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "simple-masking overflow-hidden",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "simple-masking_el",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                                    className: "h1 mb-0 text-dark",
                                                                                    children: "Prompt Eng."
                                                                                })
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "col-lg-3 col-sm-4 col-12 text-dark d-sm-block d-none",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            className: "mb-0 desc",
                                                                            children: "Database modeling, REST API structuring, auth systems & multi-tenant data isolation."
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "heading-mask js-heading-mask",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "heading-mask_el heading-mask_el__deep container_content",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "row align-items-center",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "col-sm-6 offset-lg-2 offset-sm-1 col-12",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "simple-masking",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "js-simple-masking_el simple-masking_el js-cursor-contract",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                                    className: "h1 mb-0 js-heading-mask_heading",
                                                                                    children: "AI Tools"
                                                                                })
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "col-3 op-0 d-lg-block d-none",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            className: "mb-0 desc",
                                                                            children: "I leverage AI tools to design, structure, and deliver digital products efficiently"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "heading-mask_el heading-mask_el__masking container_content",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "row align-items-center",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "col-sm-6 offset-lg-2 offset-sm-1 col-12",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "simple-masking overflow-hidden",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "simple-masking_el",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                                    className: "h1 mb-0 text-dark",
                                                                                    children: "AI Tools"
                                                                                })
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "col-lg-3 col-sm-4 col-12 text-dark d-sm-block d-none",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            className: "mb-0 desc",
                                                                            children: "I leverage AI tools to design, structure, and deliver digital products efficiently"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    id: "work",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "work",
                                        id: "work",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "row work_experience",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "work_bg",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            style: sectionBgStyle,
                                                            "aria-hidden": true
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "col-lg-8 col-sm-10 offset-lg-2 offset-sm-1 col-12",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "work_content container_content js-cursor-extend",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "work_content_label body-text text-uppercase",
                                                                    children: "Experience"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "work_content_desc h2",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        className: "scroll-paragraph-mask js-scroll-paragraph-mask",
                                                                        children: [
                                                                            "Experience in",
                                                                            " ",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                                                children: "frontend development"
                                                                            }),
                                                                            ", UI/UX design, and AI-assisted full-stack application development using modern engineering workflows"
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "work_history",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "row work_heading work_history_heading",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "col-lg-8 col-sm-10 offset-lg-2 offset-sm-1 col-12",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "work_content_label container_content body-text text-uppercase mb-0",
                                                                children: "Skills"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "heading-mask heading-mask__now",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "heading-mask_el container_content heading-mask_el__deep",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "row",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "col-sm-2 offset-lg-2 offset-sm-1 col-3",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "simple-masking",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                    className: "simple-masking_el",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        className: "h3 mb-1",
                                                                                        children: "NOW"
                                                                                    })
                                                                                })
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "col-lg-6 col-sm-8 col-9",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                className: "simple-masking_el js-simple-masking_el js-cursor-contract",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                        className: "h3 mb-1",
                                                                                        children: "AI-Assisted Full Stack Developer"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                        className: "mb-0 desc font-400",
                                                                                        children: "Project Based"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "heading-mask_el container_content heading-mask_el__masking",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "row",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "col-sm-2 offset-lg-2 offset-sm-1 col-3",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "simple-masking",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                    className: "simple-masking_el",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        className: "h3 mb-1 text-dark",
                                                                                        children: "NOW"
                                                                                    })
                                                                                })
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "col-lg-6 col-sm-8 col-9",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                className: "simple-masking_el",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                                        className: "h3 mb-1 text-dark",
                                                                                        children: "AI-Assisted Full Stack Developer"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                        className: "reveal-pseudo mb-0 desc font-400 text-dark",
                                                                                        "data-reveal": "Project Based",
                                                                                        "aria-hidden": true
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "heading-mask",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "heading-mask_el container_content heading-mask_el__deep",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "row",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "col-sm-2 offset-lg-2 offset-sm-1 col-3",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "simple-masking",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                    className: "simple-masking_el",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        className: "h3 mb-1",
                                                                                        children: "2025"
                                                                                    })
                                                                                })
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "col-lg-6 col-sm-8 col-9",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                className: "simple-masking_el js-simple-masking_el js-cursor-contract",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                        className: "h3 mb-1",
                                                                                        children: "UI / UX Design"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                        className: "mb-0 desc font-400",
                                                                                        children: "Designing user-focused digital product experiences"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "heading-mask_el container_content heading-mask_el__masking",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "row",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "col-sm-2 offset-lg-2 offset-sm-1 col-3",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "simple-masking",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                    className: "simple-masking_el",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        className: "h3 mb-1 text-dark",
                                                                                        children: "2025"
                                                                                    })
                                                                                })
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "col-lg-6 col-sm-8 col-9",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                className: "simple-masking_el",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                        className: "h3 mb-1 text-dark",
                                                                                        children: "Frontend Engineering"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                        className: "mb-0 desc font-400 text-dark",
                                                                                        children: "Developing responsive web interfaces with React and Next.js"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "heading-mask",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "heading-mask_el container_content heading-mask_el__deep",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "row",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "col-sm-2 offset-lg-2 offset-sm-1 col-3",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "simple-masking",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                    className: "simple-masking_el",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        className: "h3 mb-1",
                                                                                        children: "2024"
                                                                                    })
                                                                                })
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "col-lg-6 col-sm-8 col-9",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                className: "simple-masking_el js-simple-masking_el js-cursor-contract",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                        className: "h3 mb-1",
                                                                                        children: "AI Tooling & Workflow Optimization"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                        className: "mb-0 desc font-400",
                                                                                        children: "Leveraging AI tools"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "heading-mask_el container_content heading-mask_el__masking",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "row",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "col-sm-2 offset-lg-2 offset-sm-1 col-3",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "simple-masking",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                    className: "simple-masking_el",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        className: "h3 mb-1 text-dark",
                                                                                        children: "2024"
                                                                                    })
                                                                                })
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "col-lg-6 col-sm-8 col-9",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                className: "simple-masking_el",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                        className: "h3 mb-1 text-dark",
                                                                                        children: "AI Workflow Engineering"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                        className: "mb-0 desc font-400 text-dark",
                                                                                        children: "Leveraging AI tools to improve development speed and productivity"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "heading-mask",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "heading-mask_el container_content heading-mask_el__deep",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "row",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "col-sm-2 offset-lg-2 offset-sm-1 col-3",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "simple-masking",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                    className: "simple-masking_el",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        className: "h3 mb-1",
                                                                                        children: "2023"
                                                                                    })
                                                                                })
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "col-lg-6 col-sm-8 col-9",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                className: "simple-masking_el js-simple-masking_el js-cursor-contract",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                        className: "h3 mb-1",
                                                                                        children: "Graphic Designer"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                        className: "mb-0 desc font-400",
                                                                                        children: "Freelance (Twitch Streamers)"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "heading-mask_el container_content heading-mask_el__masking",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "row",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "col-sm-2 offset-lg-2 offset-sm-1 col-3",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "simple-masking",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                    className: "simple-masking_el",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        className: "h3 mb-1 text-dark",
                                                                                        children: "2023"
                                                                                    })
                                                                                })
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "col-lg-6 col-sm-8 col-9",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                className: "simple-masking_el",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                        className: "h3 mb-1 text-dark",
                                                                                        children: "Graphic Designer (illustrator, Photoshop, Canva)"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                        className: "mb-0 desc font-400 text-dark",
                                                                                        children: "Visual design and branding for online creators"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "client js-client",
                                    id: "client",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "row client_info",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-lg-9 col-sm-10 offset-lg-2 offset-sm-1 col-12",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "client_content container_content js-cursor-extend",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: "client_content_label body-text text-uppercase",
                                                            children: "My focus"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "client_content_desc h2",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "scroll-paragraph-mask js-scroll-paragraph-mask",
                                                                children: [
                                                                    "Experienced in ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                                        children: "building modern interfaces"
                                                                    }),
                                                                    ", product design, and AI-assisted full-stack development using ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                                        children: "scalable engineering workflows"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "client_list",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "client_list_3d",
                                                    "data-lenis-speed": ".1",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "earth-canvas",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Earth, {})
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "js-client_list_3d client_list_3d_inner"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "client_list_3d_image",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "/images/planet-1-1.png",
                                                                alt: "planet"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "client_list_inner",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "heading-mask js-heading-mask",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "heading-mask_el heading-mask_el__deep",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "row align-items-center",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "col-lg-10 offset-lg-2 col-sm-11 offset-sm-1 col-12",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "simple-masking overflow-hidden",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                    className: "simple-masking_el js-simple-masking_el js-cursor-contract",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                                        className: "h1 mb-0 js-heading-mask_heading container_content none-break",
                                                                                        children: "SHOP-POS"
                                                                                    })
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "heading-mask_el heading-mask_el__masking",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        className: "row align-items-center",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "col-sm-6 offset-lg-2 offset-sm-1 col-12",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                    className: "simple-masking overflow-hidden",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                        className: "simple-masking_el",
                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                                            className: "h1 mb-0 text-dark none-break none-break",
                                                                                            children: "SHOP-POS"
                                                                                        })
                                                                                    })
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "col-lg-3 col-sm-4 text-dark d-sm-block d-none",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                    className: "mb-0 desc",
                                                                                    children: "Multi-tenant Coffee Shop Management System built with AI-driven development. POS, inventory, staff shifts, reporting & role-based auth."
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "heading-mask js-heading-mask",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "heading-mask_el heading-mask_el__deep",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "row align-items-center",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "col-lg-10 offset-lg-2 col-sm-11 offset-sm-1 col-12",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "simple-masking overflow-hidden",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                    className: "simple-masking_el js-simple-masking_el js-cursor-contract",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                                        className: "h1 mb-0 js-heading-mask_heading container_content none-break",
                                                                                        children: "Portfolio & UI"
                                                                                    })
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "heading-mask_el heading-mask_el__masking container_content",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        className: "row align-items-center",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "col-sm-6 offset-lg-2 offset-sm-1 col-12",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                    className: "simple-masking overflow-hidden",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                        className: "simple-masking_el",
                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                                            className: "h1 mb-0 text-dark none-break",
                                                                                            children: "Portfolio & UI"
                                                                                        })
                                                                                    })
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "col-lg-3 col-sm-4 text-dark d-sm-block d-none",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                    className: "mb-0 desc",
                                                                                    children: "Personal portfolio and UI/UX design projects. Clean, functional interfaces."
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "heading-mask js-heading-mask",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "heading-mask_el heading-mask_el__deep",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "row align-items-center",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "col-lg-10 offset-lg-2 col-sm-11 offset-sm-1 col-12",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "simple-masking overflow-hidden",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                    className: "simple-masking_el js-simple-masking_el js-cursor-contract",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                                        className: "h1 mb-0 js-heading-mask_heading container_content none-break",
                                                                                        children: "AI-BUDDY"
                                                                                    })
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "heading-mask_el heading-mask_el__masking container_content",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        className: "row align-items-center",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "col-sm-6 offset-lg-2 offset-sm-1 col-12",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                    className: "simple-masking overflow-hidden",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                        className: "simple-masking_el",
                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                                            className: "h1 mb-0 text-dark none-break",
                                                                                            children: "AI-Buddy"
                                                                                        })
                                                                                    })
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "col-lg-3 col-sm-4 text-dark d-sm-block d-none",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                    className: "mb-0 desc",
                                                                                    children: "AI-powered content and image compressor free online tool for creators."
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "heading-mask js-heading-mask",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "heading-mask_el heading-mask_el__deep",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "row align-items-center",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "col-lg-10 offset-lg-2 col-sm-11 offset-sm-1 col-12",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "simple-masking overflow-hidden",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                    className: "simple-masking_el js-simple-masking_el js-cursor-contract",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                                        className: "h1 mb-0 js-heading-mask_heading container_content none-break",
                                                                                        children: "MODERN WEB APPS"
                                                                                    })
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "heading-mask_el heading-mask_el__masking container_content",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        className: "row align-items-center",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "col-sm-6 offset-lg-2 offset-sm-1 col-12",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                    className: "simple-masking overflow-hidden",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                        className: "simple-masking_el",
                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                                            className: "h1 mb-0 text-dark none-break",
                                                                                            children: "MODERN WEB APPS"
                                                                                        })
                                                                                    })
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "col-lg-3 col-sm-4 text-dark d-sm-block d-none",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                    className: "mb-0 desc",
                                                                                    children: "Custom full-stack web applications built with Next.js, React, and cloud infrastructure."
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "row",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "col-lg-10 offset-lg-2 col-sm-11 offset-sm-1 col-12",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "dots container_content",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                                                " ",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                                                " ",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                                                " ",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                                            ]
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "video",
                                    id: "video",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "videoPlayer js-videoPlayer",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "videoPlayer_inner js-videoPlayer_inner",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("video", {
                                                    id: "videoPlayer",
                                                    className: "js-videoPlayer-placeholder",
                                                    playsInline: true,
                                                    muted: true,
                                                    loop: true,
                                                    preload: "none",
                                                    style: {
                                                        position: "absolute",
                                                        width: 1,
                                                        height: 1,
                                                        opacity: 0,
                                                        pointerEvents: "none",
                                                        visibility: "hidden"
                                                    },
                                                    "aria-hidden": true
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "video-placeholder",
                                                    style: videoPlaceholderStyle,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(ShopPOSAnimation, {})
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "testimonials js-testimonials",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "row align-items-center",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "col-lg-7 col-sm-10 col-12 offset-lg-2 offset-sm-1",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "testimonials_content_label container_content body-text text-uppercase mb-4",
                                                        children: "Work Experience"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "work-exp-list",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "mb-4",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: "h4 mb-1",
                                                                        children: "AI-Assisted Full Stack Developer"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: "desc mb-0",
                                                                        children: "Project Based — 2026"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: "sub-content mt-1",
                                                                        children: "React, Next.js, PostgreSQL, Prisma. Rapid MVP delivery with AI-assisted workflows."
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "mb-4",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: "h4 mb-1",
                                                                        children: "Graphic Designer"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: "desc mb-0",
                                                                        children: "Freelance (Twitch Streamers) — 2021–2024"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: "sub-content mt-1",
                                                                        children: "Visual design for streamers and content creators."
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "desc mb-0",
                                                                    children: "References available upon request."
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-lg-2 col-12 d-flex justify-content-center align-items-start",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "work-exp-visual",
                                                    style: workExpVisualStyle,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                        width: "60",
                                                        height: "60",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "#888",
                                                        strokeWidth: "1.5",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            d: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M12 12v10"
                                                        })
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    id: "contact-section",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "motto",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "motto_bg",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        style: sectionBgStyle,
                                                        "aria-hidden": true
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "motto_content container_content",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "row justify-content-center align-items-center",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "col-lg-8 col-12 motto_content_inner js-cursor-extend",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: "text-center mb-0 h6 text-uppercase",
                                                                        style: mottoLabelStyle,
                                                                        children: "MY MOTTO"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                        className: "text-center motto_content_heading motto-light h1 mb-0",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                className: "d-block",
                                                                                children: "GOOD DESIGN"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                className: "d-block",
                                                                                children: "IS HONEST"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: "desc text-center mb-0",
                                                                        style: mottoDescStyle,
                                                                        children: "Dieter Rams"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            id: "contact",
                                            className: "contact container_content",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "row",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "col-lg-8 col-sm-10 col-12 offset-lg-2 offset-sm-1",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: "contact_label body-text text-uppercase",
                                                            children: "Connect"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "row",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "col-lg-3 col-sm-5 offset-lg-2 offset-sm-1 col-12",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                className: "ul__reset",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                        className: "heading-mask social-link js-cursor-contract heading-mask__now h3",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "heading-mask_el heading-mask_el__deep",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    href: "#",
                                                                                    className: "contact_link",
                                                                                    target: "_blank",
                                                                                    children: "Dribbble"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "heading-mask_el heading-mask_el__masking",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    href: "#",
                                                                                    className: "text-dark contact_link",
                                                                                    target: "_blank",
                                                                                    children: "Fake works"
                                                                                })
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                        className: "heading-mask social-link js-cursor-contract heading-mask__now h3",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "heading-mask_el heading-mask_el__deep",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    href: "#",
                                                                                    className: "contact_link",
                                                                                    target: "_blank",
                                                                                    children: "Youtube"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "heading-mask_el heading-mask_el__masking",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    href: "#",
                                                                                    className: "text-dark contact_link",
                                                                                    target: "_blank",
                                                                                    children: "Random tutorials"
                                                                                })
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                        className: "heading-mask social-link js-cursor-contract heading-mask__now h3",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "heading-mask_el heading-mask_el__deep",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    href: "https://www.linkedin.com/in/abdul-sami-4960963b4/",
                                                                                    className: "contact_link",
                                                                                    target: "_blank",
                                                                                    children: "Linkedin"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "heading-mask_el heading-mask_el__masking",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    href: "https://www.linkedin.com/in/abdul-sami-4960963b4/",
                                                                                    className: "text-dark contact_link",
                                                                                    target: "_blank",
                                                                                    children: "Serious me"
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "col-lg-3 col-sm-5 col-12",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                className: "ul__reset",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                        className: "heading-mask social-link js-cursor-contract heading-mask__now h3",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "heading-mask_el heading-mask_el__deep",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    href: "https://www.instagram.com/svh29",
                                                                                    className: "contact_link",
                                                                                    target: "_blank",
                                                                                    children: "Instagram"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "heading-mask_el heading-mask_el__masking",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    href: "https://www.instagram.com/svh29",
                                                                                    className: "text-dark contact_link",
                                                                                    target: "_blank",
                                                                                    children: "Not Tiktok"
                                                                                })
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                        className: "heading-mask social-link js-cursor-contract heading-mask__now h3",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "heading-mask_el heading-mask_el__deep",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    href: "#",
                                                                                    className: "contact_link",
                                                                                    target: "_blank",
                                                                                    children: "Facebook"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "heading-mask_el heading-mask_el__masking",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    href: "#",
                                                                                    className: "text-dark contact_link",
                                                                                    target: "_blank",
                                                                                    children: "Mostly dog stories"
                                                                                })
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                        className: "heading-mask social-link js-cursor-contract heading-mask__now h3",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "heading-mask_el heading-mask_el__deep",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    href: "#",
                                                                                    className: "contact_link",
                                                                                    target: "_blank",
                                                                                    children: "Behance"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "heading-mask_el heading-mask_el__masking",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    href: "#",
                                                                                    className: "text-dark contact_link",
                                                                                    target: "_blank",
                                                                                    children: "The Jurassic Park"
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "col-lg-3 col-12 contact_content",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "row",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "col-lg-12 col-sm-5 offset-lg-0 offset-sm-1 col-12",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: "heading-mask contact_info contact_info__top js-cursor-contract heading-mask__now",
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                    className: "heading-mask_el heading-mask_el__deep",
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                            className: "h4 d-block",
                                                                                            children: "Email"
                                                                                        }),
                                                                                        " ",
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                            className: "sub-content",
                                                                                            href: "mailto:sami.vh@yahoo.com",
                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                className: "__cf_email__",
                                                                                                "data-cfemail": "f4999d9a9c849c9599da9091879d939ab49399959d98da979b99",
                                                                                                children: "sami.vh@yahoo.com"
                                                                                            })
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                    className: "heading-mask_el heading-mask_el__masking",
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                            className: "h4 d-block text-dark",
                                                                                            children: "100% chance I read it"
                                                                                        }),
                                                                                        " ",
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                            className: "sub-content text-dark",
                                                                                            href: "mailto:sami.vh@yahoo.com",
                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                className: "__cf_email__",
                                                                                                "data-cfemail": "e38e8a8d8b938b828ecd8786908a848da3848e828a8fcd808c8e",
                                                                                                children: "sami.vh@yahoo.com"
                                                                                            })
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "col-lg-12 col-sm-5 col-12",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: "heading-mask contact_info js-cursor-contract heading-mask__now",
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                    className: "heading-mask_el heading-mask_el__deep",
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                            className: "h4 d-block",
                                                                                            children: "Phone"
                                                                                        }),
                                                                                        " ",
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                            className: "sub-content",
                                                                                            href: "tel:+923320548592",
                                                                                            children: "+923320548592"
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                    className: "heading-mask_el heading-mask_el__masking",
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                            className: "h4 d-block text-dark",
                                                                                            children: "90% chance I don't pickup"
                                                                                        }),
                                                                                        " ",
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                            className: "sub-content text-dark",
                                                                                            href: "tel:+923320548592",
                                                                                            children: "+923320548592"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "frame-mobile"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        id: "js-btn_clipPath",
                        className: "btn_clipPath",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            className: "btn_clipPath_inner",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    className: "btn_clipPath_image btn_clipPath_image__ring",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/images/ic-text-ring.svg",
                                            alt: "ic-text-ring"
                                        }),
                                        " "
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "btn_clipPath_image btn_clipPath_image__touch",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/images/ic-touch.svg",
                                        alt: "ic-touch"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "layer layer__red js-masker",
                        "aria-hidden": "true",
                        ...{
                            inert: "true"
                        },
                        style: {
                            userSelect: "none",
                            pointerEvents: "none"
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "container",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "hero hero__red",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "hero_content",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "row justify-content-center",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "col-lg-4 col-sm-8 col-12 hero_content_inner",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "reveal-pseudo text-center h6 hero_content_inner_subtitle text-dark",
                                                        "data-reveal": "Abdul Sami",
                                                        "aria-hidden": true
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                        className: "reveal-pseudo text-center text-dark js-anim--chars mb-0",
                                                        "data-screen-offset": "0.6",
                                                        "data-reveal": "Hiding\nbad\nshit\nsince\n2021",
                                                        "aria-hidden": true
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "about about__red",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "row about_me",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-lg-8 col-sm-10 col-12 offset-lg-2 offset-sm-1",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "about_content container_content",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "reveal-pseudo about_content_label body-text text-uppercase text-dark",
                                                        "data-reveal": "About me",
                                                        "aria-hidden": true
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "about_content_desc h2",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "reveal-pseudo scroll-paragraph-mask text-dark",
                                                            "data-reveal": "A selectively skilled developer with strong focus on producing high quality & impactful digital products.",
                                                            "aria-hidden": true
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "about_ido op-0",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "heading-mask",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "heading-mask_el heading-mask_el__deep container_content",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "row align-items-center",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "col-sm-6 offset-lg-2 offset-sm-1 col-12 d-sm-block d-none",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "simple-masking overflow-hidden",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                        className: "reveal-pseudo h1 mb-0 text-dark",
                                                                        "data-reveal": "UI/UX",
                                                                        "aria-hidden": true
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "col-lg-3 col-sm-4 col-12 text-dark d-lg-none d-block",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "reveal-pseudo mb-0 desc text-dark",
                                                                    "data-reveal": "I design clean, functional interfaces that users actually enjoy using",
                                                                    "aria-hidden": true
                                                                })
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "heading-mask_el heading-mask_el__masking container_content",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "row align-items-center",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "col-sm-6 offset-lg-2 offset-sm-1 col-12 d-sm-block d-none",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "simple-masking overflow-hidden",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                        className: "reveal-pseudo h1 mb-0 text-dark",
                                                                        "data-reveal": "UI/UX",
                                                                        "aria-hidden": true
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "col-lg-3 col-sm-4 col-12 text-dark d-lg-none d-block",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "reveal-pseudo mb-0 desc",
                                                                    "data-reveal": "I design clean, functional interfaces that users actually enjoy using",
                                                                    "aria-hidden": true
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "heading-mask",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "heading-mask_el heading-mask_el__deep container_content",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "row align-items-center",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "col-sm-6 offset-lg-2 offset-sm-1 col-12 d-sm-block d-none",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "simple-masking overflow-hidden",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                        className: "reveal-pseudo h1 mb-0 text-dark",
                                                                        "data-reveal": "Full Stack",
                                                                        "aria-hidden": true
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "col-lg-3 col-sm-4 col-12 text-dark d-lg-none d-block",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "reveal-pseudo mb-0 desc text-dark",
                                                                    "data-reveal": "I build production-ready apps with React, Next.js, PostgreSQL, and AI-assisted workflows.",
                                                                    "aria-hidden": true
                                                                })
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "heading-mask_el heading-mask_el__masking container_content",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "row align-items-center",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "col-sm-6 offset-lg-2 offset-sm-1 col-12 d-sm-block d-none",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "simple-masking overflow-hidden",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                        className: "reveal-pseudo h1 mb-0 text-dark",
                                                                        "data-reveal": "Full Stack",
                                                                        "aria-hidden": true
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "col-lg-3 col-sm-4 col-12 text-dark d-lg-none d-block",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "reveal-pseudo mb-0 desc",
                                                                    "data-reveal": "I build production-ready apps with React, Next.js, PostgreSQL, and AI-assisted workflows.",
                                                                    "aria-hidden": true
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "heading-mask",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "heading-mask_el heading-mask_el__deep container_content",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "row align-items-center",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "col-sm-6 offset-lg-2 offset-sm-1 col-12 d-sm-block d-none",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "simple-masking overflow-hidden",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                        className: "reveal-pseudo h1 mb-0 text-dark",
                                                                        "data-reveal": "Flutter",
                                                                        "aria-hidden": true
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "col-lg-3 col-sm-4 col-12 text-dark d-lg-none d-block",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "reveal-pseudo mb-0 desc text-dark",
                                                                    "data-reveal": "I craft cross-platform mobile experiences that work everywhere",
                                                                    "aria-hidden": true
                                                                })
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "heading-mask_el heading-mask_el__masking container_content",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "row align-items-center",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "col-sm-6 offset-lg-2 offset-sm-1 col-12 d-sm-block d-none",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "simple-masking overflow-hidden",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                        className: "reveal-pseudo h1 mb-0 text-dark",
                                                                        "data-reveal": "Flutter",
                                                                        "aria-hidden": true
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "col-lg-3 col-sm-4 col-12 text-dark d-lg-none d-block",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "reveal-pseudo mb-0 desc",
                                                                    "data-reveal": "I craft cross-platform mobile experiences that work everywhere",
                                                                    "aria-hidden": true
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "heading-mask",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "heading-mask_el heading-mask_el__deep container_content",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "row align-items-center",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "col-sm-6 offset-lg-2 offset-sm-1 col-12 d-sm-block d-none",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "simple-masking overflow-hidden",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                        className: "reveal-pseudo h1 mb-0 text-dark",
                                                                        "data-reveal": "Prompt Eng.",
                                                                        "aria-hidden": true
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "col-lg-3 col-sm-4 col-12 text-dark d-lg-none d-block",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "reveal-pseudo mb-0 desc text-dark",
                                                                    "data-reveal": "Database modeling, REST API structuring, auth systems & multi-tenant data isolation.",
                                                                    "aria-hidden": true
                                                                })
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "heading-mask_el heading-mask_el__masking container_content",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "row align-items-center",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "col-sm-6 offset-lg-2 offset-sm-1 col-12 d-sm-block d-none",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "simple-masking overflow-hidden",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                        className: "reveal-pseudo h1 mb-0 text-dark",
                                                                        "data-reveal": "Prompt Eng.",
                                                                        "aria-hidden": true
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "col-lg-3 col-sm-4 col-12 text-dark d-lg-none d-block",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "reveal-pseudo mb-0 desc",
                                                                    "data-reveal": "Database modeling, REST API structuring, auth systems & multi-tenant data isolation.",
                                                                    "aria-hidden": true
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "heading-mask",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "heading-mask_el heading-mask_el__deep container_content",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "row align-items-center",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "col-sm-6 offset-lg-2 offset-sm-1 col-12 d-sm-block d-none",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "simple-masking overflow-hidden",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                        className: "reveal-pseudo h1 mb-0 text-dark",
                                                                        "data-reveal": "AI Tools",
                                                                        "aria-hidden": true
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "col-lg-3 col-sm-4 col-12 text-dark d-lg-none d-block",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "reveal-pseudo mb-0 desc text-dark",
                                                                    "data-reveal": "I leverage AI tools to design, structure, and deliver digital products efficiently",
                                                                    "aria-hidden": true
                                                                })
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "heading-mask_el heading-mask_el__masking container_content",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "row align-items-center",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "col-sm-6 offset-lg-2 offset-sm-1 col-12 d-sm-block d-none",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "simple-masking overflow-hidden",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                        className: "reveal-pseudo h1 mb-0 text-dark",
                                                                        "data-reveal": "AI Tools",
                                                                        "aria-hidden": true
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "col-lg-3 col-sm-4 col-12 text-dark d-lg-none d-block",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "reveal-pseudo mb-0 desc",
                                                                    "data-reveal": "I leverage AI tools to design, structure, and deliver digital products efficiently",
                                                                    "aria-hidden": true
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "work work__red",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "row work_experience",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-lg-8 col-sm-10 offset-lg-2 offset-sm-1 col-12",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "work_content container_content",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "reveal-pseudo work_content_label body-text text-uppercase text-dark",
                                                        "data-reveal": "Experience",
                                                        "aria-hidden": true
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "work_content_desc h2",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "reveal-pseudo scroll-paragraph-mask text-dark",
                                                            "data-reveal": "Frontend development, UI/UX design, and AI-assisted full-stack application development.",
                                                            "aria-hidden": true
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "work_history op-0",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "heading-mask heading-mask__now",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "heading-mask_el container_content heading-mask_el__deep",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "row",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "col-sm-2 offset-lg-2 offset-sm-1 col-3",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "simple-masking",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "simple-masking_el",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "reveal-pseudo h3 mb-1 text-dark",
                                                                            "data-reveal": "NOW",
                                                                            "aria-hidden": true
                                                                        })
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "col-lg-6 col-sm-8 col-9",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "simple-masking_el",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            className: "reveal-pseudo h3 mb-1 text-dark",
                                                                            "data-reveal": "AI-Assisted Full Stack Developer",
                                                                            "aria-hidden": true
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            className: "reveal-pseudo mb-0 desc font-400 text-dark",
                                                                            "data-reveal": "Project Based",
                                                                            "aria-hidden": true
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "heading-mask_el container_content heading-mask_el__masking",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "row",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "col-sm-2 offset-lg-2 offset-sm-1 col-3",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "simple-masking",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "simple-masking_el",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "reveal-pseudo h3 mb-1 text-dark",
                                                                            "data-reveal": "NOW",
                                                                            "aria-hidden": true
                                                                        })
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "col-lg-6 col-sm-8 col-9",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "simple-masking_el",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            className: "reveal-pseudo h3 mb-1 text-dark",
                                                                            "data-reveal": "AI-Assisted Full Stack Developer",
                                                                            "aria-hidden": true
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            className: "reveal-pseudo mb-0 desc font-400 text-dark",
                                                                            "data-reveal": "Project Based",
                                                                            "aria-hidden": true
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "heading-mask",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "heading-mask_el container_content heading-mask_el__deep",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "row",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "col-sm-2 offset-lg-2 offset-sm-1 col-3",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "simple-masking",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "simple-masking_el",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "reveal-pseudo h3 mb-1 text-dark",
                                                                            "data-reveal": "2021",
                                                                            "aria-hidden": true
                                                                        })
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "col-lg-6 col-sm-8 col-9",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "simple-masking_el",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            className: "reveal-pseudo h3 mb-1 text-dark",
                                                                            "data-reveal": "Graphic Designer",
                                                                            "aria-hidden": true
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            className: "reveal-pseudo mb-0 desc font-400 text-dark",
                                                                            "data-reveal": "Freelance (Twitch Streamers)",
                                                                            "aria-hidden": true
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "heading-mask_el container_content heading-mask_el__masking",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "row",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "col-sm-2 offset-lg-2 offset-sm-1 col-3",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "simple-masking",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "simple-masking_el",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "reveal-pseudo h3 mb-1 text-dark",
                                                                            "data-reveal": "2021",
                                                                            "aria-hidden": true
                                                                        })
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "col-lg-6 col-sm-8 col-9",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "simple-masking_el",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            className: "reveal-pseudo h3 mb-1 text-dark",
                                                                            "data-reveal": "Graphic Designer",
                                                                            "aria-hidden": true
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            className: "reveal-pseudo mb-0 desc font-400 text-dark",
                                                                            "data-reveal": "Freelance (Twitch Streamers)",
                                                                            "aria-hidden": true
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "heading-mask",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "heading-mask_el container_content heading-mask_el__deep",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "row",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "col-sm-2 offset-lg-2 offset-sm-1 col-3",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "simple-masking",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "simple-masking_el",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "reveal-pseudo h3 mb-1 text-dark",
                                                                            "data-reveal": "2012",
                                                                            "aria-hidden": true
                                                                        })
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "col-lg-6 col-sm-8 col-9",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "simple-masking_el",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            className: "reveal-pseudo h3 mb-1 text-dark",
                                                                            "data-reveal": "Photoshop Doodler",
                                                                            "aria-hidden": true
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            className: "reveal-pseudo mb-0 desc font-400 text-dark",
                                                                            "data-reveal": "DR Com Group",
                                                                            "aria-hidden": true
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "heading-mask_el container_content heading-mask_el__masking",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "row",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "col-sm-2 offset-lg-2 offset-sm-1 col-3",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "simple-masking",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "simple-masking_el",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "reveal-pseudo h3 mb-1 text-dark",
                                                                            "data-reveal": "2012",
                                                                            "aria-hidden": true
                                                                        })
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "col-lg-6 col-sm-8 col-9",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "simple-masking_el",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            className: "reveal-pseudo h3 mb-1 text-dark",
                                                                            "data-reveal": "Photoshop Doodler",
                                                                            "aria-hidden": true
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            className: "reveal-pseudo mb-0 desc font-400 text-dark",
                                                                            "data-reveal": "DR Com Group",
                                                                            "aria-hidden": true
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "heading-mask",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "heading-mask_el container_content heading-mask_el__deep",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "row",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "col-sm-2 offset-lg-2 offset-sm-1 col-3",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "simple-masking",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "simple-masking_el",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "reveal-pseudo h3 mb-1 text-dark",
                                                                            "data-reveal": "2009",
                                                                            "aria-hidden": true
                                                                        })
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "col-lg-6 col-sm-8 col-9",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "simple-masking_el",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            className: "reveal-pseudo h3 mb-1 text-dark",
                                                                            "data-reveal": "Jurassic Designer",
                                                                            "aria-hidden": true
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            className: "reveal-pseudo mb-0 desc font-400 text-dark",
                                                                            "data-reveal": "DR Com Group",
                                                                            "aria-hidden": true
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "heading-mask_el container_content heading-mask_el__masking",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "row",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "col-sm-2 offset-lg-2 offset-sm-1 col-3",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "simple-masking",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "simple-masking_el",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "reveal-pseudo h3 mb-1 text-dark",
                                                                            "data-reveal": "2009",
                                                                            "aria-hidden": true
                                                                        })
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "col-lg-6 col-sm-8 col-9",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "simple-masking_el",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            className: "reveal-pseudo h3 mb-1 text-dark",
                                                                            "data-reveal": "Jurassic Designer",
                                                                            "aria-hidden": true
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            className: "reveal-pseudo mb-0 desc font-400 text-dark",
                                                                            "data-reveal": "DR Com Group",
                                                                            "aria-hidden": true
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "client client__red",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "client_list op-0 text-dark",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "client_list_inner",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "heading-mask",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "heading-mask_el heading-mask_el__deep container_content",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "row align-items-center",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "col-sm-6 offset-lg-2 offset-sm-1 col-12 d-sm-block d-none",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "simple-masking overflow-hidden",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                                    className: "reveal-pseudo h1 mb-0 none-break",
                                                                                    "data-reveal": "SHOP-POS",
                                                                                    "aria-hidden": true
                                                                                })
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "col-lg-3 col-sm-4 text-dark col-12 d-lg-none d-block",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                className: "reveal-pseudo mb-0 desc",
                                                                                "data-reveal": "Multi-tenant Coffee Shop Management System built with AI-driven development. POS, inventory, staff shifts, reporting & role-based auth.",
                                                                                "aria-hidden": true
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "heading-mask_el heading-mask_el__masking",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "row align-items-center",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "col-sm-6 offset-lg-2 offset-sm-1 col-12 d-sm-block d-none",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "simple-masking overflow-hidden",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                                    className: "reveal-pseudo h1 mb-0 none-break",
                                                                                    "data-reveal": "SHOP-POS",
                                                                                    "aria-hidden": true
                                                                                })
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "col-lg-3 col-sm-4 col-12 op-0 text-dark d-sm-none d-block",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                className: "reveal-pseudo mb-0 desc",
                                                                                "data-reveal": "Multi-tenant Coffee Shop Management System built with AI-driven development. POS, inventory, staff shifts, reporting & role-based auth.",
                                                                                "aria-hidden": true
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "heading-mask",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "heading-mask_el heading-mask_el__deep container_content",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "row align-items-center",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "col-sm-6 offset-lg-2 offset-sm-1 col-12 d-sm-block d-none",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "simple-masking overflow-hidden",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                                    className: "reveal-pseudo h1 mb-0 none-break",
                                                                                    "data-reveal": "Portfolio & UI",
                                                                                    "aria-hidden": true
                                                                                })
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "col-lg-3 col-sm-4 text-dark col-12 d-lg-none d-block",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                className: "reveal-pseudo mb-0 desc",
                                                                                "data-reveal": "Personal portfolio and UI/UX design projects. Clean, functional interfaces.",
                                                                                "aria-hidden": true
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "heading-mask_el heading-mask_el__masking",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "row align-items-center",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "col-sm-6 offset-lg-2 offset-sm-1 col-12 d-sm-block d-none",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "simple-masking overflow-hidden",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                                    className: "reveal-pseudo h1 mb-0 none-break",
                                                                                    "data-reveal": "Portfolio & UI",
                                                                                    "aria-hidden": true
                                                                                })
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "col-lg-3 col-sm-4 col-12 d-sm-none d-block",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                className: "reveal-pseudo mb-0 desc",
                                                                                "data-reveal": "Personal portfolio and UI/UX design projects. Clean, functional interfaces.",
                                                                                "aria-hidden": true
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "heading-mask",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "heading-mask_el heading-mask_el__deep container_content",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "row align-items-center",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "col-sm-6 offset-lg-2 offset-sm-1 col-12 d-sm-block d-none",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "simple-masking overflow-hidden",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                                    className: "reveal-pseudo h1 mb-0 none-break",
                                                                                    "data-reveal": "AI-Buddy",
                                                                                    "aria-hidden": true
                                                                                })
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "col-lg-3 col-sm-4 text-dark col-12 d-lg-none d-block",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                className: "reveal-pseudo mb-0 desc",
                                                                                "data-reveal": "AI-powered content and image compressor free online tool for creators.",
                                                                                "aria-hidden": true
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "heading-mask_el heading-mask_el__masking",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "row align-items-center",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "col-sm-6 offset-lg-2 offset-sm-1 col-12 d-sm-block d-none",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "simple-masking overflow-hidden",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                                    className: "reveal-pseudo h1 mb-0 none-break",
                                                                                    "data-reveal": "AI-Buddy",
                                                                                    "aria-hidden": true
                                                                                })
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "col-lg-3 col-sm-4 col-12 d-sm-none d-block",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                className: "reveal-pseudo mb-0 desc",
                                                                                "data-reveal": "AI-powered content and image compressor free online tool for creators.",
                                                                                "aria-hidden": true
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "heading-mask",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "heading-mask_el heading-mask_el__deep container_content",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "row align-items-center",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "col-sm-6 offset-lg-2 offset-sm-1 col-12 d-sm-block d-none",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "simple-masking overflow-hidden",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                                    className: "reveal-pseudo h1 mb-0 none-break",
                                                                                    "data-reveal": "MODERN WEB APPS",
                                                                                    "aria-hidden": true
                                                                                })
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "col-lg-3 col-sm-4 text-dark col-12 d-lg-none d-block",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                className: "reveal-pseudo mb-0 desc",
                                                                                "data-reveal": "Custom full-stack web applications built with Next.js, React, and cloud infrastructure.",
                                                                                "aria-hidden": true
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "heading-mask_el heading-mask_el__masking",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "row align-items-center",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "col-sm-6 offset-lg-2 offset-sm-1 col-12 d-sm-block d-none",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "simple-masking overflow-hidden",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                                    className: "reveal-pseudo h1 mb-0 none-break",
                                                                                    "data-reveal": "MODERN WEB APPS",
                                                                                    "aria-hidden": true
                                                                                })
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "col-lg-3 col-sm-4 col-12 d-sm-none d-block",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                className: "reveal-pseudo mb-0 desc",
                                                                                "data-reveal": "Custom full-stack web applications built with Next.js, React, and cloud infrastructure.",
                                                                                "aria-hidden": true
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "row",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-sm-6 offset-lg-2 offset-sm-1 col-12",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "dots container_content",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                                            " ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                                            " ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                                            " ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                                        ]
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "video video__red op-0 js-cursor-contract",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "videoPlayer op-0",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "videoPlayer_inner videoPlayer_inner__red js-videoPlayer_inner__red",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("video", {
                                                    id: "videoPlayer_red",
                                                    playsInline: true,
                                                    muted: true,
                                                    loop: true,
                                                    preload: "none",
                                                    style: {
                                                        position: "absolute",
                                                        width: 1,
                                                        height: 1,
                                                        opacity: 0,
                                                        pointerEvents: "none",
                                                        visibility: "hidden"
                                                    },
                                                    "aria-hidden": true
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "video-placeholder",
                                                    style: videoPlaceholderStyle,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(ShopPOSAnimation, {})
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "testimonials testimonials__red js-testimonials__red op-0",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "row",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-lg-8 col-sm-10 col-12 offset-lg-2 offset-sm-1",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "work-exp-list",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "mb-4",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "reveal-pseudo h4 mb-1 text-dark",
                                                                    "data-reveal": "AI-Assisted Full Stack Developer",
                                                                    "aria-hidden": true
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "reveal-pseudo desc mb-0 text-dark",
                                                                    "data-reveal": "Project Based — 2026",
                                                                    "aria-hidden": true
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "reveal-pseudo sub-content mt-1 text-dark",
                                                                    "data-reveal": "React, Next.js, PostgreSQL, Prisma. Rapid MVP delivery with AI-assisted workflows.",
                                                                    "aria-hidden": true
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "mb-4",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "reveal-pseudo h4 mb-1 text-dark",
                                                                    "data-reveal": "Graphic Designer",
                                                                    "aria-hidden": true
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "reveal-pseudo desc mb-0 text-dark",
                                                                    "data-reveal": "Freelance (Twitch Streamers) — 2021–2024",
                                                                    "aria-hidden": true
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "reveal-pseudo sub-content mt-1 text-dark",
                                                                    "data-reveal": "Visual design for streamers and content creators.",
                                                                    "aria-hidden": true
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "reveal-pseudo desc mb-0 text-dark",
                                                                "data-reveal": "References available upon request.",
                                                                "aria-hidden": true
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-lg-2 col-12 d-flex justify-content-center align-items-start",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "work-exp-visual",
                                                    style: workExpVisualStyle,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                        width: "60",
                                                        height: "60",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "#888",
                                                        strokeWidth: "1.5",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            d: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M12 12v10"
                                                        })
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "contact contact__red container_content op-0",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "row",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-lg-3 col-sm-5 offset-lg-2 offset-sm-1 col-12",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: "ul__reset",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "heading-mask social-link js-cursor-contract heading-mask__now h3",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#",
                                                                className: "text-dark contact_link",
                                                                target: "_blank",
                                                                tabIndex: -1,
                                                                "aria-hidden": true,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "reveal-pseudo",
                                                                    "data-reveal": "Fake works",
                                                                    "aria-hidden": true
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "heading-mask social-link js-cursor-contract heading-mask__now h3",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#",
                                                                className: "text-dark contact_link",
                                                                target: "_blank",
                                                                tabIndex: -1,
                                                                "aria-hidden": true,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "reveal-pseudo",
                                                                    "data-reveal": "Random tutorials",
                                                                    "aria-hidden": true
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "heading-mask social-link js-cursor-contract heading-mask__now h3",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "https://www.linkedin.com/in/abdul-sami-4960963b4/",
                                                                className: "text-dark contact_link",
                                                                target: "_blank",
                                                                tabIndex: -1,
                                                                "aria-hidden": true,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "reveal-pseudo",
                                                                    "data-reveal": "Serious me",
                                                                    "aria-hidden": true
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-lg-3 col-sm-5 col-12",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: "ul__reset",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "heading-mask social-link js-cursor-contract heading-mask__now h3",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "https://www.instagram.com/svh29",
                                                                className: "text-dark contact_link",
                                                                target: "_blank",
                                                                tabIndex: -1,
                                                                "aria-hidden": true,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "reveal-pseudo",
                                                                    "data-reveal": "Not Tiktok",
                                                                    "aria-hidden": true
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "heading-mask social-link js-cursor-contract heading-mask__now h3",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#",
                                                                className: "text-dark contact_link",
                                                                target: "_blank",
                                                                tabIndex: -1,
                                                                "aria-hidden": true,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "reveal-pseudo",
                                                                    "data-reveal": "Mostly dog stories",
                                                                    "aria-hidden": true
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "heading-mask social-link js-cursor-contract heading-mask__now h3",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#",
                                                                className: "text-dark contact_link",
                                                                target: "_blank",
                                                                tabIndex: -1,
                                                                "aria-hidden": true,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "reveal-pseudo",
                                                                    "data-reveal": "The Jurassic Park",
                                                                    "aria-hidden": true
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-lg-3 col-12 contact_content",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "row",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "col-lg-12 col-sm-5 offset-lg-0 offset-sm-1 col-12",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "heading-mask contact_info contact_info__red contact_info__top js-cursor-contract heading-mask__now",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "reveal-pseudo h4 d-block text-dark",
                                                                        "data-reveal": "100% chance I read it",
                                                                        "aria-hidden": true
                                                                    }),
                                                                    " ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        className: "sub-content text-dark",
                                                                        href: "mailto:sami.vh@yahoo.com",
                                                                        tabIndex: -1,
                                                                        "aria-hidden": true,
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "reveal-pseudo __cf_email__",
                                                                            "data-reveal": "sami.vh@yahoo.com",
                                                                            "data-cfemail": "f4999d9a9c849c9599da9091879d939ab49399959d98da979b99",
                                                                            "aria-hidden": true
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "col-lg-12 col-sm-5 col-12",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "heading-mask contact_info contact_info__red js-cursor-contract heading-mask__now",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "reveal-pseudo h4 d-block text-dark",
                                                                        "data-reveal": "90% chance I don't pickup",
                                                                        "aria-hidden": true
                                                                    }),
                                                                    " ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        className: "sub-content text-dark",
                                                                        href: "tel:+923320548592",
                                                                        tabIndex: -1,
                                                                        "aria-hidden": true,
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "reveal-pseudo",
                                                                            "data-reveal": "+923320548592",
                                                                            "aria-hidden": true
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                id: "js-footer",
                className: "footer",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    className: "footer_socials ul__reset",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "social js-social",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "social_link social_link__dribbble",
                                href: "#",
                                target: "_blank",
                                "aria-label": "Visit my Dribbble profile",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/images/ic-dribbble.svg",
                                    className: "svg",
                                    alt: "Dribbble icon"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "social js-social",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "social_link social_link__instagram",
                                href: "https://www.instagram.com/svh29",
                                target: "_blank",
                                "aria-label": "Visit my Instagram profile",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/images/ic-ig.svg",
                                    className: "svg",
                                    alt: "Instagram icon"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "social js-social",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "social_link social_link__youtube",
                                href: "#",
                                target: "_blank",
                                "aria-label": "Visit my YouTube channel",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/images/ic-ytb.svg",
                                    className: "svg",
                                    alt: "YouTube icon"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "social js-social",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "social_link social_link__linkedin",
                                href: "https://www.linkedin.com/in/abdul-sami-4960963b4/",
                                target: "_blank",
                                "aria-label": "Visit my LinkedIn profile",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/images/ic-in.svg",
                                    className: "svg",
                                    alt: "LinkedIn icon"
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SoundToggle, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("audio", {
                loop: true,
                className: "js-web-sound",
                src: "/media/audio-site.mp3"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/app/page.js


function Home() {
    return /*#__PURE__*/ jsx_runtime_.jsx(PortfolioBody, {});
}


/***/ }),

/***/ 5023:
/***/ (() => {



/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [506], () => (__webpack_exec__(1895)));
module.exports = __webpack_exports__;

})();