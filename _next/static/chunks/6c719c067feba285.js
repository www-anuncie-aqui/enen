(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 84675, e => {
    "use strict";
    let t = (0, e.i(10965).default)("ArrowLeft", [
        ["path", {
            d: "m12 19-7-7 7-7",
            key: "1l729n"
        }],
        ["path", {
            d: "M19 12H5",
            key: "x3x0zl"
        }]
    ]);
    e.s(["ArrowLeft", () => t], 84675)
}, 64462, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "warnOnce", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let n = e => {}
}, 90177, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        assign: function() {
            return l
        },
        searchParamsToUrlQuery: function() {
            return i
        },
        urlQueryToSearchParams: function() {
            return s
        }
    };
    for (var a in n) Object.defineProperty(r, a, {
        enumerable: !0,
        get: n[a]
    });

    function i(e) {
        let t = {};
        for (let [r, n] of e.entries()) {
            let e = t[r];
            void 0 === e ? t[r] = n : Array.isArray(e) ? e.push(n) : t[r] = [e, n]
        }
        return t
    }

    function o(e) {
        return "string" == typeof e ? e : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e ? "" : String(e)
    }

    function s(e) {
        let t = new URLSearchParams;
        for (let [r, n] of Object.entries(e))
            if (Array.isArray(n))
                for (let e of n) t.append(r, o(e));
            else t.set(r, o(n));
        return t
    }

    function l(e, ...t) {
        for (let r of t) {
            for (let t of r.keys()) e.delete(t);
            for (let [t, n] of r.entries()) e.append(t, n)
        }
        return e
    }
}, 3614, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        formatUrl: function() {
            return s
        },
        formatWithValidation: function() {
            return u
        },
        urlObjectKeys: function() {
            return l
        }
    };
    for (var a in n) Object.defineProperty(r, a, {
        enumerable: !0,
        get: n[a]
    });
    let i = e.r(44066)._(e.r(90177)),
        o = /https?|ftp|gopher|file/;

    function s(e) {
        let {
            auth: t,
            hostname: r
        } = e, n = e.protocol || "", a = e.pathname || "", s = e.hash || "", l = e.query || "", u = !1;
        t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : "", e.host ? u = t + e.host : r && (u = t + (~r.indexOf(":") ? `[${r}]` : r), e.port && (u += ":" + e.port)), l && "object" == typeof l && (l = String(i.urlQueryToSearchParams(l)));
        let c = e.search || l && `?${l}` || "";
        return n && !n.endsWith(":") && (n += ":"), e.slashes || (!n || o.test(n)) && !1 !== u ? (u = "//" + (u || ""), a && "/" !== a[0] && (a = "/" + a)) : u || (u = ""), s && "#" !== s[0] && (s = "#" + s), c && "?" !== c[0] && (c = "?" + c), a = a.replace(/[?#]/g, encodeURIComponent), c = c.replace("#", "%23"), `${n}${u}${a}${c}${s}`
    }
    let l = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];

    function u(e) {
        return s(e)
    }
}, 93359, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "useMergedRef", {
        enumerable: !0,
        get: function() {
            return a
        }
    });
    let n = e.r(75305);

    function a(e, t) {
        let r = (0, n.useRef)(null),
            a = (0, n.useRef)(null);
        return (0, n.useCallback)(n => {
            if (null === n) {
                let e = r.current;
                e && (r.current = null, e());
                let t = a.current;
                t && (a.current = null, t())
            } else e && (r.current = i(e, n)), t && (a.current = i(t, n))
        }, [e, t])
    }

    function i(e, t) {
        if ("function" != typeof e) return e.current = t, () => {
            e.current = null
        }; {
            let r = e(t);
            return "function" == typeof r ? r : () => e(null)
        }
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 94216, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        DecodeError: function() {
            return v
        },
        MiddlewareNotFoundError: function() {
            return j
        },
        MissingStaticPage: function() {
            return y
        },
        NormalizeError: function() {
            return b
        },
        PageNotFoundError: function() {
            return x
        },
        SP: function() {
            return m
        },
        ST: function() {
            return g
        },
        WEB_VITALS: function() {
            return i
        },
        execOnce: function() {
            return o
        },
        getDisplayName: function() {
            return d
        },
        getLocationOrigin: function() {
            return u
        },
        getURL: function() {
            return c
        },
        isAbsoluteUrl: function() {
            return l
        },
        isResSent: function() {
            return f
        },
        loadGetInitialProps: function() {
            return h
        },
        normalizeRepeatedSlashes: function() {
            return p
        },
        stringifyError: function() {
            return N
        }
    };
    for (var a in n) Object.defineProperty(r, a, {
        enumerable: !0,
        get: n[a]
    });
    let i = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];

    function o(e) {
        let t, r = !1;
        return (...n) => (r || (r = !0, t = e(...n)), t)
    }
    let s = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        l = e => s.test(e);

    function u() {
        let {
            protocol: e,
            hostname: t,
            port: r
        } = window.location;
        return `${e}//${t}${r?":"+r:""}`
    }

    function c() {
        let {
            href: e
        } = window.location, t = u();
        return e.substring(t.length)
    }

    function d(e) {
        return "string" == typeof e ? e : e.displayName || e.name || "Unknown"
    }

    function f(e) {
        return e.finished || e.headersSent
    }

    function p(e) {
        let t = e.split("?");
        return t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (t[1] ? `?${t.slice(1).join("?")}` : "")
    }
    async function h(e, t) {
        let r = t.res || t.ctx && t.ctx.res;
        if (!e.getInitialProps) return t.ctx && t.Component ? {
            pageProps: await h(t.Component, t.ctx)
        } : {};
        let n = await e.getInitialProps(t);
        if (r && f(r)) return n;
        if (!n) throw Object.defineProperty(Error(`"${d(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: !1,
            configurable: !0
        });
        return n
    }
    let m = "undefined" != typeof performance,
        g = m && ["mark", "measure", "getEntriesByName"].every(e => "function" == typeof performance[e]);
    class v extends Error {}
    class b extends Error {}
    class x extends Error {
        constructor(e) {
            super(), this.code = "ENOENT", this.name = "PageNotFoundError", this.message = `Cannot find module for page: ${e}`
        }
    }
    class y extends Error {
        constructor(e, t) {
            super(), this.message = `Failed to load static file for page: ${e} ${t}`
        }
    }
    class j extends Error {
        constructor() {
            super(), this.code = "ENOENT", this.message = "Cannot find the middleware module"
        }
    }

    function N(e) {
        return JSON.stringify({
            message: e.message,
            stack: e.stack
        })
    }
}, 26856, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "isLocalURL", {
        enumerable: !0,
        get: function() {
            return i
        }
    });
    let n = e.r(94216),
        a = e.r(17054);

    function i(e) {
        if (!(0, n.isAbsoluteUrl)(e)) return !0;
        try {
            let t = (0, n.getLocationOrigin)(),
                r = new URL(e, t);
            return r.origin === t && (0, a.hasBasePath)(r.pathname)
        } catch (e) {
            return !1
        }
    }
}, 52335, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "errorOnce", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let n = e => {}
}, 2854, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        default: function() {
            return v
        },
        useLinkStatus: function() {
            return x
        }
    };
    for (var a in n) Object.defineProperty(r, a, {
        enumerable: !0,
        get: n[a]
    });
    let i = e.r(44066),
        o = e.r(1972),
        s = i._(e.r(75305)),
        l = e.r(3614),
        u = e.r(311),
        c = e.r(93359),
        d = e.r(94216),
        f = e.r(38636);
    e.r(64462);
    let p = e.r(77514),
        h = e.r(26856),
        m = e.r(64914);

    function g(e) {
        return "string" == typeof e ? e : (0, l.formatUrl)(e)
    }

    function v(t) {
        var r;
        let n, a, i, [l, v] = (0, s.useOptimistic)(p.IDLE_LINK_STATUS),
            x = (0, s.useRef)(null),
            {
                href: y,
                as: j,
                children: N,
                prefetch: k = null,
                passHref: w,
                replace: P,
                shallow: E,
                scroll: C,
                onClick: O,
                onMouseEnter: M,
                onTouchStart: _,
                legacyBehavior: S = !1,
                onNavigate: T,
                ref: A,
                unstable_dynamicOnHover: L,
                ...R
            } = t;
        n = N, S && ("string" == typeof n || "number" == typeof n) && (n = (0, o.jsx)("a", {
            children: n
        }));
        let z = s.default.useContext(u.AppRouterContext),
            $ = !1 !== k,
            B = !1 !== k ? null === (r = k) || "auto" === r ? m.FetchStrategy.PPR : m.FetchStrategy.Full : m.FetchStrategy.PPR,
            {
                href: F,
                as: I
            } = s.default.useMemo(() => {
                let e = g(y);
                return {
                    href: e,
                    as: j ? g(j) : e
                }
            }, [y, j]);
        if (S) {
            if (n ? .$$typeof === Symbol.for("react.lazy")) throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."), "__NEXT_ERROR_CODE", {
                value: "E863",
                enumerable: !1,
                configurable: !0
            });
            a = s.default.Children.only(n)
        }
        let U = S ? a && "object" == typeof a && a.ref : A,
            q = s.default.useCallback(e => (null !== z && (x.current = (0, p.mountLinkInstance)(e, F, z, B, $, v)), () => {
                x.current && ((0, p.unmountLinkForCurrentNavigation)(x.current), x.current = null), (0, p.unmountPrefetchableInstance)(e)
            }), [$, F, z, B, v]),
            D = {
                ref: (0, c.useMergedRef)(q, U),
                onClick(t) {
                    S || "function" != typeof O || O(t), S && a.props && "function" == typeof a.props.onClick && a.props.onClick(t), !z || t.defaultPrevented || function(t, r, n, a, i, o, l) {
                        if ("undefined" != typeof window) {
                            let u, {
                                nodeName: c
                            } = t.currentTarget;
                            if ("A" === c.toUpperCase() && ((u = t.currentTarget.getAttribute("target")) && "_self" !== u || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && 2 === t.nativeEvent.which) || t.currentTarget.hasAttribute("download")) return;
                            if (!(0, h.isLocalURL)(r)) {
                                i && (t.preventDefault(), location.replace(r));
                                return
                            }
                            if (t.preventDefault(), l) {
                                let e = !1;
                                if (l({
                                        preventDefault: () => {
                                            e = !0
                                        }
                                    }), e) return
                            }
                            let {
                                dispatchNavigateAction: d
                            } = e.r(75441);
                            s.default.startTransition(() => {
                                d(n || r, i ? "replace" : "push", o ? ? !0, a.current)
                            })
                        }
                    }(t, F, I, x, P, C, T)
                },
                onMouseEnter(e) {
                    S || "function" != typeof M || M(e), S && a.props && "function" == typeof a.props.onMouseEnter && a.props.onMouseEnter(e), z && $ && (0, p.onNavigationIntent)(e.currentTarget, !0 === L)
                },
                onTouchStart: function(e) {
                    S || "function" != typeof _ || _(e), S && a.props && "function" == typeof a.props.onTouchStart && a.props.onTouchStart(e), z && $ && (0, p.onNavigationIntent)(e.currentTarget, !0 === L)
                }
            };
        return (0, d.isAbsoluteUrl)(I) ? D.href = I : S && !w && ("a" !== a.type || "href" in a.props) || (D.href = (0, f.addBasePath)(I)), i = S ? s.default.cloneElement(a, D) : (0, o.jsx)("a", { ...R,
            ...D,
            children: n
        }), (0, o.jsx)(b.Provider, {
            value: l,
            children: i
        })
    }
    e.r(52335);
    let b = (0, s.createContext)(p.IDLE_LINK_STATUS),
        x = () => (0, s.useContext)(b);
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 70065, 94237, 67881, e => {
    "use strict";
    var t = e.i(1972),
        r = e.i(47163);

    function n({
        className: e,
        ...n
    }) {
        return (0, t.jsx)("div", {
            "data-slot": "card",
            className: (0, r.cn)("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", e),
            ...n
        })
    }

    function a({
        className: e,
        ...n
    }) {
        return (0, t.jsx)("div", {
            "data-slot": "card-header",
            className: (0, r.cn)("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", e),
            ...n
        })
    }

    function i({
        className: e,
        ...n
    }) {
        return (0, t.jsx)("div", {
            "data-slot": "card-title",
            className: (0, r.cn)("leading-none font-semibold", e),
            ...n
        })
    }

    function o({
        className: e,
        ...n
    }) {
        return (0, t.jsx)("div", {
            "data-slot": "card-description",
            className: (0, r.cn)("text-muted-foreground text-sm", e),
            ...n
        })
    }

    function s({
        className: e,
        ...n
    }) {
        return (0, t.jsx)("div", {
            "data-slot": "card-content",
            className: (0, r.cn)("px-6", e),
            ...n
        })
    }
    e.s(["Card", () => n, "CardContent", () => s, "CardDescription", () => o, "CardHeader", () => a, "CardTitle", () => i], 70065);
    var l = e.i(84739),
        u = e.i(7284);
    let c = e => "boolean" == typeof e ? `${e}` : 0 === e ? "0" : e,
        d = u.clsx,
        f = (e, t) => r => {
            var n;
            if ((null == t ? void 0 : t.variants) == null) return d(e, null == r ? void 0 : r.class, null == r ? void 0 : r.className);
            let {
                variants: a,
                defaultVariants: i
            } = t, o = Object.keys(a).map(e => {
                let t = null == r ? void 0 : r[e],
                    n = null == i ? void 0 : i[e];
                if (null === t) return null;
                let o = c(t) || c(n);
                return a[e][o]
            }), s = r && Object.entries(r).reduce((e, t) => {
                let [r, n] = t;
                return void 0 === n || (e[r] = n), e
            }, {});
            return d(e, o, null == t || null == (n = t.compoundVariants) ? void 0 : n.reduce((e, t) => {
                let {
                    class: r,
                    className: n,
                    ...a
                } = t;
                return Object.entries(a).every(e => {
                    let [t, r] = e;
                    return Array.isArray(r) ? r.includes({ ...i,
                        ...s
                    }[t]) : ({ ...i,
                        ...s
                    })[t] === r
                }) ? [...e, r, n] : e
            }, []), null == r ? void 0 : r.class, null == r ? void 0 : r.className)
        };
    e.s(["cva", 0, f], 94237);
    let p = f("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
                outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
                secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
                link: "text-primary underline-offset-4 hover:underline"
            },
            size: {
                default: "h-9 px-4 py-2 has-[>svg]:px-3",
                sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
                lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
                icon: "size-9",
                "icon-sm": "size-8",
                "icon-lg": "size-10"
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default"
        }
    });

    function h({
        className: e,
        variant: n,
        size: a,
        asChild: i = !1,
        ...o
    }) {
        let s = i ? l.Slot : "button";
        return (0, t.jsx)(s, {
            "data-slot": "button",
            className: (0, r.cn)(p({
                variant: n,
                size: a,
                className: e
            })),
            ...o
        })
    }
    e.s(["Button", () => h], 67881)
}, 10965, e => {
    "use strict";
    var t = e.i(75305);
    let r = (...e) => e.filter((e, t, r) => !!e && "" !== e.trim() && r.indexOf(e) === t).join(" ").trim();
    var n = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    };
    let a = (0, t.forwardRef)(({
            color: e = "currentColor",
            size: a = 24,
            strokeWidth: i = 2,
            absoluteStrokeWidth: o,
            className: s = "",
            children: l,
            iconNode: u,
            ...c
        }, d) => (0, t.createElement)("svg", {
            ref: d,
            ...n,
            width: a,
            height: a,
            stroke: e,
            strokeWidth: o ? 24 * Number(i) / Number(a) : i,
            className: r("lucide", s),
            ...c
        }, [...u.map(([e, r]) => (0, t.createElement)(e, r)), ...Array.isArray(l) ? l : [l]])),
        i = (e, n) => {
            let i = (0, t.forwardRef)(({
                className: i,
                ...o
            }, s) => (0, t.createElement)(a, {
                ref: s,
                iconNode: n,
                className: r(`lucide-${e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`, i),
                ...o
            }));
            return i.displayName = `${e}`, i
        };
    e.s(["default", () => i], 10965)
}, 94179, e => {
    "use strict";
    var t = e.i(1972),
        r = e.i(84739),
        n = e.i(94237),
        a = e.i(47163);
    let i = (0, n.cva)("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
        variants: {
            variant: {
                default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
                secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
                destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
                outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
            }
        },
        defaultVariants: {
            variant: "default"
        }
    });

    function o({
        className: e,
        variant: n,
        asChild: o = !1,
        ...s
    }) {
        let l = o ? r.Slot : "span";
        return (0, t.jsx)(l, {
            "data-slot": "badge",
            className: (0, a.cn)(i({
                variant: n
            }), e),
            ...s
        })
    }
    e.s(["Badge", () => o])
}, 2544, e => {
    "use strict";
    let t = (0, e.i(10965).default)("BookOpen", [
        ["path", {
            d: "M12 7v14",
            key: "1akyts"
        }],
        ["path", {
            d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
            key: "ruj8y"
        }]
    ]);
    e.s(["BookOpen", () => t], 2544)
}, 62412, e => {
    "use strict";
    let t = (0, e.i(10965).default)("FileText", [
        ["path", {
            d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
            key: "1rqfz7"
        }],
        ["path", {
            d: "M14 2v4a2 2 0 0 0 2 2h4",
            key: "tnqrlb"
        }],
        ["path", {
            d: "M10 9H8",
            key: "b1mrlr"
        }],
        ["path", {
            d: "M16 13H8",
            key: "t4e002"
        }],
        ["path", {
            d: "M16 17H8",
            key: "z1uh3a"
        }]
    ]);
    e.s(["FileText", () => t], 62412)
}, 49991, e => {
    "use strict";
    var t = e.i(1972),
        r = e.i(2544),
        n = e.i(62412),
        a = e.i(10965);
    let i = (0, a.default)("Lightbulb", [
            ["path", {
                d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
                key: "1gvzjb"
            }],
            ["path", {
                d: "M9 18h6",
                key: "x1upvd"
            }],
            ["path", {
                d: "M10 22h4",
                key: "ceow96"
            }]
        ]),
        o = (0, a.default)("Brain", [
            ["path", {
                d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
                key: "l5xja"
            }],
            ["path", {
                d: "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",
                key: "ep3f8r"
            }],
            ["path", {
                d: "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",
                key: "1p4c4q"
            }],
            ["path", {
                d: "M17.599 6.5a3 3 0 0 0 .399-1.375",
                key: "tmeiqw"
            }],
            ["path", {
                d: "M6.003 5.125A3 3 0 0 0 6.401 6.5",
                key: "105sqy"
            }],
            ["path", {
                d: "M3.477 10.896a4 4 0 0 1 .585-.396",
                key: "ql3yin"
            }],
            ["path", {
                d: "M19.938 10.5a4 4 0 0 1 .585.396",
                key: "1qfode"
            }],
            ["path", {
                d: "M6 18a4 4 0 0 1-1.967-.516",
                key: "2e4loj"
            }],
            ["path", {
                d: "M19.967 17.484A4 4 0 0 1 18 18",
                key: "159ez6"
            }]
        ]);
    var s = e.i(84675),
        l = e.i(70065),
        u = e.i(67881),
        c = e.i(94179),
        d = e.i(2854),
        f = e.i(4032);
    let p = [{
        id: "linguagens",
        name: "Linguagens",
        icon: r.BookOpen,
        color: "bg-blue-500",
        description: "Português, Literatura, Língua Estrangeira",
        topics: ["Interpretação de texto", "Funções da linguagem", "Gêneros textuais", "Semântica", "Análise de charges e tirinhas"],
        questions: 45
    }, {
        id: "matematica",
        name: "Matemática",
        icon: o,
        color: "bg-purple-500",
        description: "Matemática e suas Tecnologias",
        topics: ["Porcentagem", "Probabilidade", "Estatística", "Funções (1º e 2º grau)", "Geometria plana"],
        questions: 45
    }, {
        id: "humanas",
        name: "Ciências Humanas",
        icon: i,
        color: "bg-orange-500",
        description: "História, Geografia, Filosofia, Sociologia",
        topics: ["Cidadania e democracia", "Globalização", "Brasil colônia", "Ditadura militar", "Revolução Industrial"],
        questions: 45
    }, {
        id: "natureza",
        name: "Ciências da Natureza",
        icon: n.FileText,
        color: "bg-green-500",
        description: "Biologia, Física, Química",
        topics: ["Genética e evolução", "Ecologia", "Eletricidade", "Termodinâmica", "Química orgânica"],
        questions: 45
    }];

    function h() {
        let {
            data: e
        } = (0, f.useStudyData)();
        return (0, t.jsxs)("div", {
            className: "min-h-screen bg-background",
            children: [(0, t.jsx)("header", {
                className: "border-b bg-card sticky top-0 z-50",
                children: (0, t.jsx)("div", {
                    className: "container mx-auto px-4 py-4",
                    children: (0, t.jsx)("div", {
                        className: "flex items-center justify-between",
                        children: (0, t.jsxs)("div", {
                            className: "flex items-center gap-3",
                            children: [(0, t.jsx)(d.default, {
                                href: "/",
                                children: (0, t.jsx)(u.Button, {
                                    variant: "ghost",
                                    size: "icon",
                                    children: (0, t.jsx)(s.ArrowLeft, {
                                        className: "w-5 h-5"
                                    })
                                })
                            }), (0, t.jsxs)("div", {
                                children: [(0, t.jsx)("h1", {
                                    className: "text-xl font-bold text-foreground",
                                    children: "Matérias"
                                }), (0, t.jsx)("p", {
                                    className: "text-xs text-muted-foreground",
                                    children: "Conteúdos organizados por disciplina"
                                })]
                            })]
                        })
                    })
                })
            }), (0, t.jsxs)("main", {
                className: "container mx-auto px-4 py-8",
                children: [(0, t.jsxs)("div", {
                    className: "mb-8",
                    children: [(0, t.jsx)("h2", {
                        className: "text-3xl font-bold text-foreground mb-2 text-balance",
                        children: "Escolha uma área de conhecimento"
                    }), (0, t.jsx)("p", {
                        className: "text-muted-foreground",
                        children: "Estude os conteúdos que mais caem no ENEM"
                    })]
                }), (0, t.jsx)("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                    children: p.map(r => {
                        let n = r.icon,
                            a = e.subjectStats[r.id],
                            i = a.total > 0 ? Math.round(a.correct / a.total * 100) : 0;
                        return (0, t.jsx)(d.default, {
                            href: `/materias/${r.id}`,
                            children: (0, t.jsxs)(l.Card, {
                                className: "hover:shadow-lg transition-all cursor-pointer group border-2 hover:border-primary",
                                children: [(0, t.jsxs)(l.CardHeader, {
                                    children: [(0, t.jsxs)("div", {
                                        className: "flex items-start justify-between mb-4",
                                        children: [(0, t.jsx)("div", {
                                            className: `w-14 h-14 rounded-xl ${r.color} flex items-center justify-center group-hover:scale-110 transition-all`,
                                            children: (0, t.jsx)(n, {
                                                className: "w-7 h-7 text-white"
                                            })
                                        }), (0, t.jsxs)(c.Badge, {
                                            variant: "secondary",
                                            children: [r.questions, " questões"]
                                        })]
                                    }), (0, t.jsx)(l.CardTitle, {
                                        className: "text-xl mb-2",
                                        children: r.name
                                    }), (0, t.jsx)(l.CardDescription, {
                                        className: "text-sm mb-4",
                                        children: r.description
                                    })]
                                }), (0, t.jsx)(l.CardContent, {
                                    children: (0, t.jsxs)("div", {
                                        className: "space-y-3",
                                        children: [(0, t.jsxs)("div", {
                                            children: [(0, t.jsx)("p", {
                                                className: "text-sm font-semibold text-foreground mb-2",
                                                children: "Assuntos que mais caem:"
                                            }), (0, t.jsxs)("div", {
                                                className: "flex flex-wrap gap-2",
                                                children: [r.topics.slice(0, 3).map((e, r) => (0, t.jsx)(c.Badge, {
                                                    variant: "outline",
                                                    className: "text-xs",
                                                    children: e
                                                }, r)), r.topics.length > 3 && (0, t.jsxs)(c.Badge, {
                                                    variant: "outline",
                                                    className: "text-xs",
                                                    children: ["+", r.topics.length - 3, " mais"]
                                                })]
                                            })]
                                        }), (0, t.jsxs)("div", {
                                            className: "pt-2",
                                            children: [(0, t.jsxs)("div", {
                                                className: "flex justify-between text-sm mb-1",
                                                children: [(0, t.jsx)("span", {
                                                    className: "text-muted-foreground",
                                                    children: "Seu progresso"
                                                }), (0, t.jsxs)("span", {
                                                    className: "font-semibold text-primary",
                                                    children: [i, "%"]
                                                })]
                                            }), (0, t.jsx)("div", {
                                                className: "h-2 bg-muted rounded-full overflow-hidden",
                                                children: (0, t.jsx)("div", {
                                                    className: `h-full ${r.color} transition-all`,
                                                    style: {
                                                        width: `${i}%`
                                                    }
                                                })
                                            })]
                                        })]
                                    })
                                })]
                            })
                        }, r.id)
                    })
                })]
            })]
        })
    }
    e.s(["default", () => h], 49991)
}]);