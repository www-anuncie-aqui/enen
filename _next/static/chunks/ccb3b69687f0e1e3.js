(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 64462, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "warnOnce", {
        enumerable: !0,
        get: function() {
            return a
        }
    });
    let a = e => {}
}, 90177, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var a = {
        assign: function() {
            return l
        },
        searchParamsToUrlQuery: function() {
            return n
        },
        urlQueryToSearchParams: function() {
            return o
        }
    };
    for (var s in a) Object.defineProperty(r, s, {
        enumerable: !0,
        get: a[s]
    });

    function n(e) {
        let t = {};
        for (let [r, a] of e.entries()) {
            let e = t[r];
            void 0 === e ? t[r] = a : Array.isArray(e) ? e.push(a) : t[r] = [e, a]
        }
        return t
    }

    function i(e) {
        return "string" == typeof e ? e : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e ? "" : String(e)
    }

    function o(e) {
        let t = new URLSearchParams;
        for (let [r, a] of Object.entries(e))
            if (Array.isArray(a))
                for (let e of a) t.append(r, i(e));
            else t.set(r, i(a));
        return t
    }

    function l(e, ...t) {
        for (let r of t) {
            for (let t of r.keys()) e.delete(t);
            for (let [t, a] of r.entries()) e.append(t, a)
        }
        return e
    }
}, 3614, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var a = {
        formatUrl: function() {
            return o
        },
        formatWithValidation: function() {
            return c
        },
        urlObjectKeys: function() {
            return l
        }
    };
    for (var s in a) Object.defineProperty(r, s, {
        enumerable: !0,
        get: a[s]
    });
    let n = e.r(44066)._(e.r(90177)),
        i = /https?|ftp|gopher|file/;

    function o(e) {
        let {
            auth: t,
            hostname: r
        } = e, a = e.protocol || "", s = e.pathname || "", o = e.hash || "", l = e.query || "", c = !1;
        t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : "", e.host ? c = t + e.host : r && (c = t + (~r.indexOf(":") ? `[${r}]` : r), e.port && (c += ":" + e.port)), l && "object" == typeof l && (l = String(n.urlQueryToSearchParams(l)));
        let d = e.search || l && `?${l}` || "";
        return a && !a.endsWith(":") && (a += ":"), e.slashes || (!a || i.test(a)) && !1 !== c ? (c = "//" + (c || ""), s && "/" !== s[0] && (s = "/" + s)) : c || (c = ""), o && "#" !== o[0] && (o = "#" + o), d && "?" !== d[0] && (d = "?" + d), s = s.replace(/[?#]/g, encodeURIComponent), d = d.replace("#", "%23"), `${a}${c}${s}${d}${o}`
    }
    let l = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];

    function c(e) {
        return o(e)
    }
}, 93359, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "useMergedRef", {
        enumerable: !0,
        get: function() {
            return s
        }
    });
    let a = e.r(75305);

    function s(e, t) {
        let r = (0, a.useRef)(null),
            s = (0, a.useRef)(null);
        return (0, a.useCallback)(a => {
            if (null === a) {
                let e = r.current;
                e && (r.current = null, e());
                let t = s.current;
                t && (s.current = null, t())
            } else e && (r.current = n(e, a)), t && (s.current = n(t, a))
        }, [e, t])
    }

    function n(e, t) {
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
    var a = {
        DecodeError: function() {
            return g
        },
        MiddlewareNotFoundError: function() {
            return y
        },
        MissingStaticPage: function() {
            return j
        },
        NormalizeError: function() {
            return v
        },
        PageNotFoundError: function() {
            return b
        },
        SP: function() {
            return h
        },
        ST: function() {
            return x
        },
        WEB_VITALS: function() {
            return n
        },
        execOnce: function() {
            return i
        },
        getDisplayName: function() {
            return u
        },
        getLocationOrigin: function() {
            return c
        },
        getURL: function() {
            return d
        },
        isAbsoluteUrl: function() {
            return l
        },
        isResSent: function() {
            return f
        },
        loadGetInitialProps: function() {
            return p
        },
        normalizeRepeatedSlashes: function() {
            return m
        },
        stringifyError: function() {
            return N
        }
    };
    for (var s in a) Object.defineProperty(r, s, {
        enumerable: !0,
        get: a[s]
    });
    let n = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];

    function i(e) {
        let t, r = !1;
        return (...a) => (r || (r = !0, t = e(...a)), t)
    }
    let o = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        l = e => o.test(e);

    function c() {
        let {
            protocol: e,
            hostname: t,
            port: r
        } = window.location;
        return `${e}//${t}${r?":"+r:""}`
    }

    function d() {
        let {
            href: e
        } = window.location, t = c();
        return e.substring(t.length)
    }

    function u(e) {
        return "string" == typeof e ? e : e.displayName || e.name || "Unknown"
    }

    function f(e) {
        return e.finished || e.headersSent
    }

    function m(e) {
        let t = e.split("?");
        return t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (t[1] ? `?${t.slice(1).join("?")}` : "")
    }
    async function p(e, t) {
        let r = t.res || t.ctx && t.ctx.res;
        if (!e.getInitialProps) return t.ctx && t.Component ? {
            pageProps: await p(t.Component, t.ctx)
        } : {};
        let a = await e.getInitialProps(t);
        if (r && f(r)) return a;
        if (!a) throw Object.defineProperty(Error(`"${u(e)}.getInitialProps()" should resolve to an object. But found "${a}" instead.`), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: !1,
            configurable: !0
        });
        return a
    }
    let h = "undefined" != typeof performance,
        x = h && ["mark", "measure", "getEntriesByName"].every(e => "function" == typeof performance[e]);
    class g extends Error {}
    class v extends Error {}
    class b extends Error {
        constructor(e) {
            super(), this.code = "ENOENT", this.name = "PageNotFoundError", this.message = `Cannot find module for page: ${e}`
        }
    }
    class j extends Error {
        constructor(e, t) {
            super(), this.message = `Failed to load static file for page: ${e} ${t}`
        }
    }
    class y extends Error {
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
            return n
        }
    });
    let a = e.r(94216),
        s = e.r(17054);

    function n(e) {
        if (!(0, a.isAbsoluteUrl)(e)) return !0;
        try {
            let t = (0, a.getLocationOrigin)(),
                r = new URL(e, t);
            return r.origin === t && (0, s.hasBasePath)(r.pathname)
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
            return a
        }
    });
    let a = e => {}
}, 2854, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var a = {
        default: function() {
            return g
        },
        useLinkStatus: function() {
            return b
        }
    };
    for (var s in a) Object.defineProperty(r, s, {
        enumerable: !0,
        get: a[s]
    });
    let n = e.r(44066),
        i = e.r(1972),
        o = n._(e.r(75305)),
        l = e.r(3614),
        c = e.r(311),
        d = e.r(93359),
        u = e.r(94216),
        f = e.r(38636);
    e.r(64462);
    let m = e.r(77514),
        p = e.r(26856),
        h = e.r(64914);

    function x(e) {
        return "string" == typeof e ? e : (0, l.formatUrl)(e)
    }

    function g(t) {
        var r;
        let a, s, n, [l, g] = (0, o.useOptimistic)(m.IDLE_LINK_STATUS),
            b = (0, o.useRef)(null),
            {
                href: j,
                as: y,
                children: N,
                prefetch: C = null,
                passHref: w,
                replace: k,
                shallow: P,
                scroll: S,
                onClick: _,
                onMouseEnter: T,
                onTouchStart: E,
                legacyBehavior: O = !1,
                onNavigate: M,
                ref: R,
                unstable_dynamicOnHover: $,
                ...z
            } = t;
        a = N, O && ("string" == typeof a || "number" == typeof a) && (a = (0, i.jsx)("a", {
            children: a
        }));
        let A = o.default.useContext(c.AppRouterContext),
            L = !1 !== C,
            D = !1 !== C ? null === (r = C) || "auto" === r ? h.FetchStrategy.PPR : h.FetchStrategy.Full : h.FetchStrategy.PPR,
            {
                href: B,
                as: F
            } = o.default.useMemo(() => {
                let e = x(j);
                return {
                    href: e,
                    as: y ? x(y) : e
                }
            }, [j, y]);
        if (O) {
            if (a ? .$$typeof === Symbol.for("react.lazy")) throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."), "__NEXT_ERROR_CODE", {
                value: "E863",
                enumerable: !1,
                configurable: !0
            });
            s = o.default.Children.only(a)
        }
        let I = O ? s && "object" == typeof s && s.ref : R,
            U = o.default.useCallback(e => (null !== A && (b.current = (0, m.mountLinkInstance)(e, B, A, D, L, g)), () => {
                b.current && ((0, m.unmountLinkForCurrentNavigation)(b.current), b.current = null), (0, m.unmountPrefetchableInstance)(e)
            }), [L, B, A, D, g]),
            H = {
                ref: (0, d.useMergedRef)(U, I),
                onClick(t) {
                    O || "function" != typeof _ || _(t), O && s.props && "function" == typeof s.props.onClick && s.props.onClick(t), !A || t.defaultPrevented || function(t, r, a, s, n, i, l) {
                        if ("undefined" != typeof window) {
                            let c, {
                                nodeName: d
                            } = t.currentTarget;
                            if ("A" === d.toUpperCase() && ((c = t.currentTarget.getAttribute("target")) && "_self" !== c || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && 2 === t.nativeEvent.which) || t.currentTarget.hasAttribute("download")) return;
                            if (!(0, p.isLocalURL)(r)) {
                                n && (t.preventDefault(), location.replace(r));
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
                                dispatchNavigateAction: u
                            } = e.r(75441);
                            o.default.startTransition(() => {
                                u(a || r, n ? "replace" : "push", i ? ? !0, s.current)
                            })
                        }
                    }(t, B, F, b, k, S, M)
                },
                onMouseEnter(e) {
                    O || "function" != typeof T || T(e), O && s.props && "function" == typeof s.props.onMouseEnter && s.props.onMouseEnter(e), A && L && (0, m.onNavigationIntent)(e.currentTarget, !0 === $)
                },
                onTouchStart: function(e) {
                    O || "function" != typeof E || E(e), O && s.props && "function" == typeof s.props.onTouchStart && s.props.onTouchStart(e), A && L && (0, m.onNavigationIntent)(e.currentTarget, !0 === $)
                }
            };
        return (0, u.isAbsoluteUrl)(F) ? H.href = F : O && !w && ("a" !== s.type || "href" in s.props) || (H.href = (0, f.addBasePath)(F)), n = O ? o.default.cloneElement(s, H) : (0, i.jsx)("a", { ...z,
            ...H,
            children: a
        }), (0, i.jsx)(v.Provider, {
            value: l,
            children: n
        })
    }
    e.r(52335);
    let v = (0, o.createContext)(m.IDLE_LINK_STATUS),
        b = () => (0, o.useContext)(v);
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 69756, e => {
    "use strict";
    var t = e.i(75305);
    e.i(23674);
    var r = e.i(84739),
        a = e.i(1972),
        s = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e, s) => {
            let n = t.forwardRef((e, t) => {
                let {
                    asChild: n,
                    ...i
                } = e, o = n ? r.Slot : s;
                return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, a.jsx)(o, { ...i,
                    ref: t
                })
            });
            return n.displayName = `Primitive.${s}`, { ...e,
                [s]: n
            }
        }, {});
    e.s(["Primitive", () => s])
}, 70065, 94237, 67881, e => {
    "use strict";
    var t = e.i(1972),
        r = e.i(47163);

    function a({
        className: e,
        ...a
    }) {
        return (0, t.jsx)("div", {
            "data-slot": "card",
            className: (0, r.cn)("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", e),
            ...a
        })
    }

    function s({
        className: e,
        ...a
    }) {
        return (0, t.jsx)("div", {
            "data-slot": "card-header",
            className: (0, r.cn)("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", e),
            ...a
        })
    }

    function n({
        className: e,
        ...a
    }) {
        return (0, t.jsx)("div", {
            "data-slot": "card-title",
            className: (0, r.cn)("leading-none font-semibold", e),
            ...a
        })
    }

    function i({
        className: e,
        ...a
    }) {
        return (0, t.jsx)("div", {
            "data-slot": "card-description",
            className: (0, r.cn)("text-muted-foreground text-sm", e),
            ...a
        })
    }

    function o({
        className: e,
        ...a
    }) {
        return (0, t.jsx)("div", {
            "data-slot": "card-content",
            className: (0, r.cn)("px-6", e),
            ...a
        })
    }
    e.s(["Card", () => a, "CardContent", () => o, "CardDescription", () => i, "CardHeader", () => s, "CardTitle", () => n], 70065);
    var l = e.i(84739),
        c = e.i(7284);
    let d = e => "boolean" == typeof e ? `${e}` : 0 === e ? "0" : e,
        u = c.clsx,
        f = (e, t) => r => {
            var a;
            if ((null == t ? void 0 : t.variants) == null) return u(e, null == r ? void 0 : r.class, null == r ? void 0 : r.className);
            let {
                variants: s,
                defaultVariants: n
            } = t, i = Object.keys(s).map(e => {
                let t = null == r ? void 0 : r[e],
                    a = null == n ? void 0 : n[e];
                if (null === t) return null;
                let i = d(t) || d(a);
                return s[e][i]
            }), o = r && Object.entries(r).reduce((e, t) => {
                let [r, a] = t;
                return void 0 === a || (e[r] = a), e
            }, {});
            return u(e, i, null == t || null == (a = t.compoundVariants) ? void 0 : a.reduce((e, t) => {
                let {
                    class: r,
                    className: a,
                    ...s
                } = t;
                return Object.entries(s).every(e => {
                    let [t, r] = e;
                    return Array.isArray(r) ? r.includes({ ...n,
                        ...o
                    }[t]) : ({ ...n,
                        ...o
                    })[t] === r
                }) ? [...e, r, a] : e
            }, []), null == r ? void 0 : r.class, null == r ? void 0 : r.className)
        };
    e.s(["cva", 0, f], 94237);
    let m = f("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
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

    function p({
        className: e,
        variant: a,
        size: s,
        asChild: n = !1,
        ...i
    }) {
        let o = n ? l.Slot : "button";
        return (0, t.jsx)(o, {
            "data-slot": "button",
            className: (0, r.cn)(m({
                variant: a,
                size: s,
                className: e
            })),
            ...i
        })
    }
    e.s(["Button", () => p], 67881)
}, 87336, e => {
    "use strict";
    var t = e.i(1972),
        r = e.i(75305),
        a = e.i(17534),
        s = e.i(69756),
        n = "Progress",
        [i, o] = (0, a.createContextScope)(n),
        [l, c] = i(n),
        d = r.forwardRef((e, r) => {
            var a, n;
            let {
                __scopeProgress: i,
                value: o = null,
                max: c,
                getValueLabel: d = m,
                ...u
            } = e;
            (c || 0 === c) && !x(c) && console.error((a = `${c}`, `Invalid prop \`max\` of value \`${a}\` supplied to \`Progress\`. Only numbers greater than 0 are valid max values. Defaulting to \`100\`.`));
            let f = x(c) ? c : 100;
            null === o || g(o, f) || console.error((n = `${o}`, `Invalid prop \`value\` of value \`${n}\` supplied to \`Progress\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or 100 if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`));
            let v = g(o, f) ? o : null,
                b = h(v) ? d(v, f) : void 0;
            return (0, t.jsx)(l, {
                scope: i,
                value: v,
                max: f,
                children: (0, t.jsx)(s.Primitive.div, {
                    "aria-valuemax": f,
                    "aria-valuemin": 0,
                    "aria-valuenow": h(v) ? v : void 0,
                    "aria-valuetext": b,
                    role: "progressbar",
                    "data-state": p(v, f),
                    "data-value": v ? ? void 0,
                    "data-max": f,
                    ...u,
                    ref: r
                })
            })
        });
    d.displayName = n;
    var u = "ProgressIndicator",
        f = r.forwardRef((e, r) => {
            let {
                __scopeProgress: a,
                ...n
            } = e, i = c(u, a);
            return (0, t.jsx)(s.Primitive.div, {
                "data-state": p(i.value, i.max),
                "data-value": i.value ? ? void 0,
                "data-max": i.max,
                ...n,
                ref: r
            })
        });

    function m(e, t) {
        return `${Math.round(e/t*100)}%`
    }

    function p(e, t) {
        return null == e ? "indeterminate" : e === t ? "complete" : "loading"
    }

    function h(e) {
        return "number" == typeof e
    }

    function x(e) {
        return h(e) && !isNaN(e) && e > 0
    }

    function g(e, t) {
        return h(e) && !isNaN(e) && e <= t && e >= 0
    }
    f.displayName = u;
    var v = e.i(47163);

    function b({
        className: e,
        value: r,
        ...a
    }) {
        return (0, t.jsx)(d, {
            "data-slot": "progress",
            className: (0, v.cn)("bg-primary/20 relative h-2 w-full overflow-hidden rounded-full", e),
            ...a,
            children: (0, t.jsx)(f, {
                "data-slot": "progress-indicator",
                className: "bg-primary h-full w-full flex-1 transition-all",
                style: {
                    transform: `translateX(-${100-(r||0)}%)`
                }
            })
        })
    }
    e.s(["Progress", () => b], 87336)
}, 94179, e => {
    "use strict";
    var t = e.i(1972),
        r = e.i(84739),
        a = e.i(94237),
        s = e.i(47163);
    let n = (0, a.cva)("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
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

    function i({
        className: e,
        variant: a,
        asChild: i = !1,
        ...o
    }) {
        let l = i ? r.Slot : "span";
        return (0, t.jsx)(l, {
            "data-slot": "badge",
            className: (0, s.cn)(n({
                variant: a
            }), e),
            ...o
        })
    }
    e.s(["Badge", () => i])
}, 84675, e => {
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
}, 10965, e => {
    "use strict";
    var t = e.i(75305);
    let r = (...e) => e.filter((e, t, r) => !!e && "" !== e.trim() && r.indexOf(e) === t).join(" ").trim();
    var a = {
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
    let s = (0, t.forwardRef)(({
            color: e = "currentColor",
            size: s = 24,
            strokeWidth: n = 2,
            absoluteStrokeWidth: i,
            className: o = "",
            children: l,
            iconNode: c,
            ...d
        }, u) => (0, t.createElement)("svg", {
            ref: u,
            ...a,
            width: s,
            height: s,
            stroke: e,
            strokeWidth: i ? 24 * Number(n) / Number(s) : n,
            className: r("lucide", o),
            ...d
        }, [...c.map(([e, r]) => (0, t.createElement)(e, r)), ...Array.isArray(l) ? l : [l]])),
        n = (e, a) => {
            let n = (0, t.forwardRef)(({
                className: n,
                ...i
            }, o) => (0, t.createElement)(s, {
                ref: o,
                iconNode: a,
                className: r(`lucide-${e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`, n),
                ...i
            }));
            return n.displayName = `${e}`, n
        };
    e.s(["default", () => n], 10965)
}, 17534, e => {
    "use strict";
    var t = e.i(75305),
        r = e.i(1972);

    function a(e, s = []) {
        let n = [],
            i = () => {
                let r = n.map(e => t.createContext(e));
                return function(a) {
                    let s = a ? .[e] || r;
                    return t.useMemo(() => ({
                        [`__scope${e}`]: { ...a,
                            [e]: s
                        }
                    }), [a, s])
                }
            };
        return i.scopeName = e, [function(a, s) {
            let i = t.createContext(s),
                o = n.length;
            n = [...n, s];
            let l = a => {
                let {
                    scope: s,
                    children: n,
                    ...l
                } = a, c = s ? .[e] ? .[o] || i, d = t.useMemo(() => l, Object.values(l));
                return (0, r.jsx)(c.Provider, {
                    value: d,
                    children: n
                })
            };
            return l.displayName = a + "Provider", [l, function(r, n) {
                let l = n ? .[e] ? .[o] || i,
                    c = t.useContext(l);
                if (c) return c;
                if (void 0 !== s) return s;
                throw Error(`\`${r}\` must be used within \`${a}\``)
            }]
        }, function(...e) {
            let r = e[0];
            if (1 === e.length) return r;
            let a = () => {
                let a = e.map(e => ({
                    useScope: e(),
                    scopeName: e.scopeName
                }));
                return function(e) {
                    let s = a.reduce((t, {
                        useScope: r,
                        scopeName: a
                    }) => {
                        let s = r(e)[`__scope${a}`];
                        return { ...t,
                            ...s
                        }
                    }, {});
                    return t.useMemo(() => ({
                        [`__scope${r.scopeName}`]: s
                    }), [s])
                }
            };
            return a.scopeName = r.scopeName, a
        }(i, ...s)]
    }
    e.s(["createContextScope", () => a])
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
}, 17491, e => {
    "use strict";
    var t = e.i(1972),
        r = e.i(84675),
        a = e.i(10965);
    let s = (0, a.default)("TrendingUp", [
            ["polyline", {
                points: "22 7 13.5 15.5 8.5 10.5 2 17",
                key: "126l90"
            }],
            ["polyline", {
                points: "16 7 22 7 22 13",
                key: "kwv8wd"
            }]
        ]),
        n = (0, a.default)("TrendingDown", [
            ["polyline", {
                points: "22 17 13.5 8.5 8.5 13.5 2 7",
                key: "1r2t7k"
            }],
            ["polyline", {
                points: "16 17 22 17 22 11",
                key: "11uiuu"
            }]
        ]),
        i = (0, a.default)("Award", [
            ["path", {
                d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
                key: "1yiouv"
            }],
            ["circle", {
                cx: "12",
                cy: "8",
                r: "6",
                key: "1vp47v"
            }]
        ]),
        o = (0, a.default)("Calendar", [
            ["path", {
                d: "M8 2v4",
                key: "1cmpym"
            }],
            ["path", {
                d: "M16 2v4",
                key: "4m81vk"
            }],
            ["rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "4",
                rx: "2",
                key: "1hopcy"
            }],
            ["path", {
                d: "M3 10h18",
                key: "8toen8"
            }]
        ]);
    var l = e.i(62412);
    let c = (0, a.default)("Target", [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }],
        ["circle", {
            cx: "12",
            cy: "12",
            r: "6",
            key: "1vlfrh"
        }],
        ["circle", {
            cx: "12",
            cy: "12",
            r: "2",
            key: "1c9p78"
        }]
    ]);
    var d = e.i(70065),
        u = e.i(67881),
        f = e.i(94179),
        m = e.i(87336),
        p = e.i(2854),
        h = e.i(4032);

    function x() {
        let {
            data: e,
            resetData: a
        } = (0, h.useStudyData)(), x = e.questionsAnswered > 0 ? Math.round(e.correctAnswers / e.questionsAnswered * 100) : 0, g = [{
            name: "Linguagens",
            correct: e.subjectStats.linguagens.total > 0 ? Math.round(e.subjectStats.linguagens.correct / e.subjectStats.linguagens.total * 100) : 0,
            total: e.subjectStats.linguagens.total,
            color: "bg-blue-500"
        }, {
            name: "Matemática",
            correct: e.subjectStats.matematica.total > 0 ? Math.round(e.subjectStats.matematica.correct / e.subjectStats.matematica.total * 100) : 0,
            total: e.subjectStats.matematica.total,
            color: "bg-purple-500"
        }, {
            name: "Humanas",
            correct: e.subjectStats.humanas.total > 0 ? Math.round(e.subjectStats.humanas.correct / e.subjectStats.humanas.total * 100) : 0,
            total: e.subjectStats.humanas.total,
            color: "bg-orange-500"
        }, {
            name: "Natureza",
            correct: e.subjectStats.natureza.total > 0 ? Math.round(e.subjectStats.natureza.correct / e.subjectStats.natureza.total * 100) : 0,
            total: e.subjectStats.natureza.total,
            color: "bg-green-500"
        }], v = e.essayResults.length > 0 ? Math.round(e.essayResults.reduce((e, t) => e + t.score, 0) / e.essayResults.length) : 0, b = g.filter(e => e.total > 0 && e.correct < 70).map(e => ({
            subject: e.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""),
            topic: `Revisar ${e.name}`,
            reason: `Taxa de acerto de ${e.correct}% em ${e.total} quest\xf5es`
        }));
        return (0, t.jsxs)("div", {
            className: "min-h-screen bg-background",
            children: [(0, t.jsx)("header", {
                className: "border-b bg-card sticky top-0 z-50",
                children: (0, t.jsx)("div", {
                    className: "container mx-auto px-4 py-4",
                    children: (0, t.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [(0, t.jsxs)("div", {
                            className: "flex items-center gap-3",
                            children: [(0, t.jsx)(p.default, {
                                href: "/",
                                children: (0, t.jsx)(u.Button, {
                                    variant: "ghost",
                                    size: "icon",
                                    children: (0, t.jsx)(r.ArrowLeft, {
                                        className: "w-5 h-5"
                                    })
                                })
                            }), (0, t.jsxs)("div", {
                                children: [(0, t.jsx)("h1", {
                                    className: "text-xl font-bold",
                                    children: "Meu Desempenho"
                                }), (0, t.jsx)("p", {
                                    className: "text-xs text-muted-foreground",
                                    children: "Análise completa do seu progresso"
                                })]
                            })]
                        }), (0, t.jsx)(u.Button, {
                            variant: "outline",
                            size: "sm",
                            onClick: a,
                            children: "Zerar Dados"
                        })]
                    })
                })
            }), (0, t.jsxs)("main", {
                className: "container mx-auto px-4 py-8",
                children: [(0, t.jsxs)("div", {
                    className: "mb-8",
                    children: [(0, t.jsx)("h2", {
                        className: "text-3xl font-bold text-foreground mb-2 text-balance",
                        children: "Seu progresso no ENEM"
                    }), (0, t.jsx)("p", {
                        className: "text-muted-foreground",
                        children: "Acompanhe sua evolução e identifique pontos de melhoria"
                    })]
                }), (0, t.jsxs)("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8",
                    children: [(0, t.jsx)(d.Card, {
                        className: "border-primary/30 bg-gradient-to-br from-primary/5 to-transparent",
                        children: (0, t.jsxs)(d.CardHeader, {
                            className: "pb-3",
                            children: [(0, t.jsxs)("div", {
                                className: "flex items-center gap-2 mb-1",
                                children: [(0, t.jsx)(l.FileText, {
                                    className: "w-4 h-4 text-primary"
                                }), (0, t.jsx)(d.CardDescription, {
                                    children: "Questões Respondidas"
                                })]
                            }), (0, t.jsx)(d.CardTitle, {
                                className: "text-3xl text-primary",
                                children: e.questionsAnswered
                            })]
                        })
                    }), (0, t.jsx)(d.Card, {
                        className: "border-chart-3/30 bg-gradient-to-br from-chart-3/5 to-transparent",
                        children: (0, t.jsxs)(d.CardHeader, {
                            className: "pb-3",
                            children: [(0, t.jsxs)("div", {
                                className: "flex items-center gap-2 mb-1",
                                children: [(0, t.jsx)(c, {
                                    className: "w-4 h-4 text-chart-3"
                                }), (0, t.jsx)(d.CardDescription, {
                                    children: "Taxa de Acerto"
                                })]
                            }), (0, t.jsxs)(d.CardTitle, {
                                className: "text-3xl text-chart-3",
                                children: [x, "%"]
                            })]
                        })
                    }), (0, t.jsx)(d.Card, {
                        className: "border-accent/30 bg-gradient-to-br from-accent/5 to-transparent",
                        children: (0, t.jsxs)(d.CardHeader, {
                            className: "pb-3",
                            children: [(0, t.jsxs)("div", {
                                className: "flex items-center gap-2 mb-1",
                                children: [(0, t.jsx)(o, {
                                    className: "w-4 h-4 text-accent"
                                }), (0, t.jsx)(d.CardDescription, {
                                    children: "Horas de Estudo"
                                })]
                            }), (0, t.jsxs)(d.CardTitle, {
                                className: "text-3xl text-accent",
                                children: [e.studyHours.toFixed(1), "h"]
                            })]
                        })
                    }), (0, t.jsx)(d.Card, {
                        className: "border-chart-5/30 bg-gradient-to-br from-chart-5/5 to-transparent",
                        children: (0, t.jsxs)(d.CardHeader, {
                            className: "pb-3",
                            children: [(0, t.jsxs)("div", {
                                className: "flex items-center gap-2 mb-1",
                                children: [(0, t.jsx)(i, {
                                    className: "w-4 h-4 text-chart-5"
                                }), (0, t.jsx)(d.CardDescription, {
                                    children: "Redações Corrigidas"
                                })]
                            }), (0, t.jsx)(d.CardTitle, {
                                className: "text-3xl text-chart-5",
                                children: e.essaysWritten
                            })]
                        })
                    })]
                }), (0, t.jsxs)("div", {
                    className: "grid lg:grid-cols-2 gap-6 mb-6",
                    children: [(0, t.jsxs)(d.Card, {
                        children: [(0, t.jsxs)(d.CardHeader, {
                            children: [(0, t.jsx)(d.CardTitle, {
                                children: "Desempenho por Matéria"
                            }), (0, t.jsx)(d.CardDescription, {
                                children: "Porcentagem de acertos em cada área"
                            })]
                        }), (0, t.jsx)(d.CardContent, {
                            className: "space-y-4",
                            children: g.map((e, r) => (0, t.jsxs)("div", {
                                className: "space-y-2",
                                children: [(0, t.jsxs)("div", {
                                    className: "flex items-center justify-between",
                                    children: [(0, t.jsxs)("div", {
                                        className: "flex items-center gap-2",
                                        children: [(0, t.jsx)("div", {
                                            className: `w-3 h-3 rounded-full ${e.color}`
                                        }), (0, t.jsx)("span", {
                                            className: "font-semibold text-sm",
                                            children: e.name
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: "flex items-center gap-2",
                                        children: [(0, t.jsxs)("span", {
                                            className: "text-sm font-bold",
                                            children: [e.correct, "%"]
                                        }), e.total > 0 && (e.correct >= 70 ? (0, t.jsx)(s, {
                                            className: "w-4 h-4 text-chart-3"
                                        }) : (0, t.jsx)(n, {
                                            className: "w-4 h-4 text-destructive"
                                        }))]
                                    })]
                                }), (0, t.jsx)(m.Progress, {
                                    value: e.correct,
                                    className: "h-2"
                                }), (0, t.jsxs)("p", {
                                    className: "text-xs text-muted-foreground",
                                    children: [e.total, " questões respondidas"]
                                })]
                            }, r))
                        })]
                    }), (0, t.jsxs)(d.Card, {
                        children: [(0, t.jsxs)(d.CardHeader, {
                            children: [(0, t.jsx)(d.CardTitle, {
                                children: "Histórico de Simulados"
                            }), (0, t.jsx)(d.CardDescription, {
                                children: "Últimos testes realizados"
                            })]
                        }), (0, t.jsx)(d.CardContent, {
                            children: 0 === e.testResults.length ? (0, t.jsxs)("div", {
                                className: "text-center py-8 text-muted-foreground",
                                children: [(0, t.jsx)(l.FileText, {
                                    className: "w-12 h-12 mx-auto mb-2 opacity-50"
                                }), (0, t.jsx)("p", {
                                    className: "text-sm",
                                    children: "Nenhum simulado realizado ainda"
                                }), (0, t.jsx)(p.default, {
                                    href: "/simulados",
                                    children: (0, t.jsx)(u.Button, {
                                        size: "sm",
                                        className: "mt-4",
                                        children: "Fazer Simulado"
                                    })
                                })]
                            }) : (0, t.jsx)("div", {
                                className: "space-y-3",
                                children: e.testResults.slice(-5).reverse().map(e => (0, t.jsxs)("div", {
                                    className: "flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors",
                                    children: [(0, t.jsxs)("div", {
                                        className: "flex-1",
                                        children: [(0, t.jsx)("p", {
                                            className: "font-semibold text-sm mb-1 capitalize",
                                            children: e.subject
                                        }), (0, t.jsx)("p", {
                                            className: "text-xs text-muted-foreground",
                                            children: e.date
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: "text-right",
                                        children: [(0, t.jsxs)("p", {
                                            className: "text-lg font-bold",
                                            children: [e.percentage.toFixed(0), "%"]
                                        }), (0, t.jsxs)("p", {
                                            className: "text-xs text-muted-foreground",
                                            children: [e.correct, "/", e.total]
                                        })]
                                    })]
                                }, e.id))
                            })
                        })]
                    })]
                }), e.essayResults.length > 0 && (0, t.jsxs)(d.Card, {
                    className: "mb-6",
                    children: [(0, t.jsxs)(d.CardHeader, {
                        children: [(0, t.jsx)(d.CardTitle, {
                            children: "Histórico de Redações"
                        }), (0, t.jsxs)(d.CardDescription, {
                            children: ["Média: ", v, " pontos | Total: ", e.essayResults.length, " redações"]
                        })]
                    }), (0, t.jsx)(d.CardContent, {
                        children: (0, t.jsx)("div", {
                            className: "space-y-3",
                            children: e.essayResults.slice(-5).reverse().map(e => (0, t.jsxs)("div", {
                                className: "flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors",
                                children: [(0, t.jsxs)("div", {
                                    className: "flex-1",
                                    children: [(0, t.jsx)("p", {
                                        className: "font-semibold text-sm mb-1",
                                        children: e.theme
                                    }), (0, t.jsx)("p", {
                                        className: "text-xs text-muted-foreground",
                                        children: e.date
                                    })]
                                }), (0, t.jsx)(f.Badge, {
                                    variant: "secondary",
                                    className: `text-base font-bold ${e.score>=900?"bg-chart-3 text-white":e.score>=800?"bg-primary text-primary-foreground":"bg-accent text-accent-foreground"}`,
                                    children: e.score
                                })]
                            }, e.id))
                        })
                    })]
                }), b.length > 0 && (0, t.jsxs)(d.Card, {
                    className: "border-2 border-accent/30 bg-gradient-to-br from-accent/5 to-transparent",
                    children: [(0, t.jsxs)(d.CardHeader, {
                        children: [(0, t.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [(0, t.jsx)(c, {
                                className: "w-5 h-5 text-accent"
                            }), (0, t.jsx)(d.CardTitle, {
                                children: "Recomendações de Estudo"
                            })]
                        }), (0, t.jsx)(d.CardDescription, {
                            children: "Baseado no seu desempenho, sugerimos focar nestes conteúdos"
                        })]
                    }), (0, t.jsx)(d.CardContent, {
                        className: "space-y-3",
                        children: b.map((e, r) => (0, t.jsxs)("div", {
                            className: "p-4 rounded-lg bg-card border",
                            children: [(0, t.jsx)("div", {
                                className: "flex items-start justify-between mb-2",
                                children: (0, t.jsxs)("div", {
                                    children: [(0, t.jsx)(f.Badge, {
                                        variant: "outline",
                                        className: "mb-2 capitalize",
                                        children: e.subject
                                    }), (0, t.jsx)("p", {
                                        className: "font-semibold text-sm",
                                        children: e.topic
                                    })]
                                })
                            }), (0, t.jsx)("p", {
                                className: "text-xs text-muted-foreground mb-3",
                                children: e.reason
                            }), (0, t.jsx)(p.default, {
                                href: `/materias/${e.subject}`,
                                children: (0, t.jsx)(u.Button, {
                                    size: "sm",
                                    variant: "outline",
                                    children: "Estudar agora"
                                })
                            })]
                        }, r))
                    })]
                }), 0 === e.questionsAnswered && (0, t.jsx)(d.Card, {
                    className: "border-2 border-primary/30",
                    children: (0, t.jsxs)(d.CardContent, {
                        className: "py-12 text-center",
                        children: [(0, t.jsx)(c, {
                            className: "w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50"
                        }), (0, t.jsx)("h3", {
                            className: "text-xl font-bold mb-2",
                            children: "Comece sua jornada!"
                        }), (0, t.jsx)("p", {
                            className: "text-muted-foreground mb-6",
                            children: "Responda alguns simulados para começar a acompanhar seu progresso"
                        }), (0, t.jsx)(p.default, {
                            href: "/simulados",
                            children: (0, t.jsx)(u.Button, {
                                size: "lg",
                                children: "Fazer Primeiro Simulado"
                            })
                        })]
                    })
                })]
            })]
        })
    }
    e.s(["default", () => x], 17491)
}]);