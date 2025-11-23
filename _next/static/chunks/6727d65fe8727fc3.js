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
            return s
        },
        urlQueryToSearchParams: function() {
            return o
        }
    };
    for (var n in a) Object.defineProperty(r, n, {
        enumerable: !0,
        get: a[n]
    });

    function s(e) {
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
    for (var n in a) Object.defineProperty(r, n, {
        enumerable: !0,
        get: a[n]
    });
    let s = e.r(44066)._(e.r(90177)),
        i = /https?|ftp|gopher|file/;

    function o(e) {
        let {
            auth: t,
            hostname: r
        } = e, a = e.protocol || "", n = e.pathname || "", o = e.hash || "", l = e.query || "", c = !1;
        t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : "", e.host ? c = t + e.host : r && (c = t + (~r.indexOf(":") ? `[${r}]` : r), e.port && (c += ":" + e.port)), l && "object" == typeof l && (l = String(s.urlQueryToSearchParams(l)));
        let d = e.search || l && `?${l}` || "";
        return a && !a.endsWith(":") && (a += ":"), e.slashes || (!a || i.test(a)) && !1 !== c ? (c = "//" + (c || ""), n && "/" !== n[0] && (n = "/" + n)) : c || (c = ""), o && "#" !== o[0] && (o = "#" + o), d && "?" !== d[0] && (d = "?" + d), n = n.replace(/[?#]/g, encodeURIComponent), d = d.replace("#", "%23"), `${a}${c}${n}${d}${o}`
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
            return n
        }
    });
    let a = e.r(75305);

    function n(e, t) {
        let r = (0, a.useRef)(null),
            n = (0, a.useRef)(null);
        return (0, a.useCallback)(a => {
            if (null === a) {
                let e = r.current;
                e && (r.current = null, e());
                let t = n.current;
                t && (n.current = null, t())
            } else e && (r.current = s(e, a)), t && (n.current = s(t, a))
        }, [e, t])
    }

    function s(e, t) {
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
            return v
        },
        MiddlewareNotFoundError: function() {
            return y
        },
        MissingStaticPage: function() {
            return j
        },
        NormalizeError: function() {
            return g
        },
        PageNotFoundError: function() {
            return b
        },
        SP: function() {
            return x
        },
        ST: function() {
            return h
        },
        WEB_VITALS: function() {
            return s
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
            return m
        },
        loadGetInitialProps: function() {
            return p
        },
        normalizeRepeatedSlashes: function() {
            return f
        },
        stringifyError: function() {
            return N
        }
    };
    for (var n in a) Object.defineProperty(r, n, {
        enumerable: !0,
        get: a[n]
    });
    let s = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];

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

    function m(e) {
        return e.finished || e.headersSent
    }

    function f(e) {
        let t = e.split("?");
        return t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (t[1] ? `?${t.slice(1).join("?")}` : "")
    }
    async function p(e, t) {
        let r = t.res || t.ctx && t.ctx.res;
        if (!e.getInitialProps) return t.ctx && t.Component ? {
            pageProps: await p(t.Component, t.ctx)
        } : {};
        let a = await e.getInitialProps(t);
        if (r && m(r)) return a;
        if (!a) throw Object.defineProperty(Error(`"${u(e)}.getInitialProps()" should resolve to an object. But found "${a}" instead.`), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: !1,
            configurable: !0
        });
        return a
    }
    let x = "undefined" != typeof performance,
        h = x && ["mark", "measure", "getEntriesByName"].every(e => "function" == typeof performance[e]);
    class v extends Error {}
    class g extends Error {}
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
            return s
        }
    });
    let a = e.r(94216),
        n = e.r(17054);

    function s(e) {
        if (!(0, a.isAbsoluteUrl)(e)) return !0;
        try {
            let t = (0, a.getLocationOrigin)(),
                r = new URL(e, t);
            return r.origin === t && (0, n.hasBasePath)(r.pathname)
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
            return v
        },
        useLinkStatus: function() {
            return b
        }
    };
    for (var n in a) Object.defineProperty(r, n, {
        enumerable: !0,
        get: a[n]
    });
    let s = e.r(44066),
        i = e.r(1972),
        o = s._(e.r(75305)),
        l = e.r(3614),
        c = e.r(311),
        d = e.r(93359),
        u = e.r(94216),
        m = e.r(38636);
    e.r(64462);
    let f = e.r(77514),
        p = e.r(26856),
        x = e.r(64914);

    function h(e) {
        return "string" == typeof e ? e : (0, l.formatUrl)(e)
    }

    function v(t) {
        var r;
        let a, n, s, [l, v] = (0, o.useOptimistic)(f.IDLE_LINK_STATUS),
            b = (0, o.useRef)(null),
            {
                href: j,
                as: y,
                children: N,
                prefetch: C = null,
                passHref: w,
                replace: P,
                shallow: k,
                scroll: S,
                onClick: _,
                onMouseEnter: O,
                onTouchStart: M,
                legacyBehavior: E = !1,
                onNavigate: T,
                ref: R,
                unstable_dynamicOnHover: $,
                ...A
            } = t;
        a = N, E && ("string" == typeof a || "number" == typeof a) && (a = (0, i.jsx)("a", {
            children: a
        }));
        let L = o.default.useContext(c.AppRouterContext),
            B = !1 !== C,
            z = !1 !== C ? null === (r = C) || "auto" === r ? x.FetchStrategy.PPR : x.FetchStrategy.Full : x.FetchStrategy.PPR,
            {
                href: I,
                as: D
            } = o.default.useMemo(() => {
                let e = h(j);
                return {
                    href: e,
                    as: y ? h(y) : e
                }
            }, [j, y]);
        if (E) {
            if (a ? .$$typeof === Symbol.for("react.lazy")) throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."), "__NEXT_ERROR_CODE", {
                value: "E863",
                enumerable: !1,
                configurable: !0
            });
            n = o.default.Children.only(a)
        }
        let U = E ? n && "object" == typeof n && n.ref : R,
            F = o.default.useCallback(e => (null !== L && (b.current = (0, f.mountLinkInstance)(e, I, L, z, B, v)), () => {
                b.current && ((0, f.unmountLinkForCurrentNavigation)(b.current), b.current = null), (0, f.unmountPrefetchableInstance)(e)
            }), [B, I, L, z, v]),
            H = {
                ref: (0, d.useMergedRef)(F, U),
                onClick(t) {
                    E || "function" != typeof _ || _(t), E && n.props && "function" == typeof n.props.onClick && n.props.onClick(t), !L || t.defaultPrevented || function(t, r, a, n, s, i, l) {
                        if ("undefined" != typeof window) {
                            let c, {
                                nodeName: d
                            } = t.currentTarget;
                            if ("A" === d.toUpperCase() && ((c = t.currentTarget.getAttribute("target")) && "_self" !== c || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && 2 === t.nativeEvent.which) || t.currentTarget.hasAttribute("download")) return;
                            if (!(0, p.isLocalURL)(r)) {
                                s && (t.preventDefault(), location.replace(r));
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
                                u(a || r, s ? "replace" : "push", i ? ? !0, n.current)
                            })
                        }
                    }(t, I, D, b, P, S, T)
                },
                onMouseEnter(e) {
                    E || "function" != typeof O || O(e), E && n.props && "function" == typeof n.props.onMouseEnter && n.props.onMouseEnter(e), L && B && (0, f.onNavigationIntent)(e.currentTarget, !0 === $)
                },
                onTouchStart: function(e) {
                    E || "function" != typeof M || M(e), E && n.props && "function" == typeof n.props.onTouchStart && n.props.onTouchStart(e), L && B && (0, f.onNavigationIntent)(e.currentTarget, !0 === $)
                }
            };
        return (0, u.isAbsoluteUrl)(D) ? H.href = D : E && !w && ("a" !== n.type || "href" in n.props) || (H.href = (0, m.addBasePath)(D)), s = E ? o.default.cloneElement(n, H) : (0, i.jsx)("a", { ...A,
            ...H,
            children: a
        }), (0, i.jsx)(g.Provider, {
            value: l,
            children: s
        })
    }
    e.r(52335);
    let g = (0, o.createContext)(f.IDLE_LINK_STATUS),
        b = () => (0, o.useContext)(g);
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 69756, e => {
    "use strict";
    var t = e.i(75305);
    e.i(23674);
    var r = e.i(84739),
        a = e.i(1972),
        n = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e, n) => {
            let s = t.forwardRef((e, t) => {
                let {
                    asChild: s,
                    ...i
                } = e, o = s ? r.Slot : n;
                return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, a.jsx)(o, { ...i,
                    ref: t
                })
            });
            return s.displayName = `Primitive.${n}`, { ...e,
                [n]: s
            }
        }, {});
    e.s(["Primitive", () => n])
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

    function n({
        className: e,
        ...a
    }) {
        return (0, t.jsx)("div", {
            "data-slot": "card-header",
            className: (0, r.cn)("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", e),
            ...a
        })
    }

    function s({
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
    e.s(["Card", () => a, "CardContent", () => o, "CardDescription", () => i, "CardHeader", () => n, "CardTitle", () => s], 70065);
    var l = e.i(84739),
        c = e.i(7284);
    let d = e => "boolean" == typeof e ? `${e}` : 0 === e ? "0" : e,
        u = c.clsx,
        m = (e, t) => r => {
            var a;
            if ((null == t ? void 0 : t.variants) == null) return u(e, null == r ? void 0 : r.class, null == r ? void 0 : r.className);
            let {
                variants: n,
                defaultVariants: s
            } = t, i = Object.keys(n).map(e => {
                let t = null == r ? void 0 : r[e],
                    a = null == s ? void 0 : s[e];
                if (null === t) return null;
                let i = d(t) || d(a);
                return n[e][i]
            }), o = r && Object.entries(r).reduce((e, t) => {
                let [r, a] = t;
                return void 0 === a || (e[r] = a), e
            }, {});
            return u(e, i, null == t || null == (a = t.compoundVariants) ? void 0 : a.reduce((e, t) => {
                let {
                    class: r,
                    className: a,
                    ...n
                } = t;
                return Object.entries(n).every(e => {
                    let [t, r] = e;
                    return Array.isArray(r) ? r.includes({ ...s,
                        ...o
                    }[t]) : ({ ...s,
                        ...o
                    })[t] === r
                }) ? [...e, r, a] : e
            }, []), null == r ? void 0 : r.class, null == r ? void 0 : r.className)
        };
    e.s(["cva", 0, m], 94237);
    let f = m("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
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
        size: n,
        asChild: s = !1,
        ...i
    }) {
        let o = s ? l.Slot : "button";
        return (0, t.jsx)(o, {
            "data-slot": "button",
            className: (0, r.cn)(f({
                variant: a,
                size: n,
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
        n = e.i(69756),
        s = "Progress",
        [i, o] = (0, a.createContextScope)(s),
        [l, c] = i(s),
        d = r.forwardRef((e, r) => {
            var a, s;
            let {
                __scopeProgress: i,
                value: o = null,
                max: c,
                getValueLabel: d = f,
                ...u
            } = e;
            (c || 0 === c) && !h(c) && console.error((a = `${c}`, `Invalid prop \`max\` of value \`${a}\` supplied to \`Progress\`. Only numbers greater than 0 are valid max values. Defaulting to \`100\`.`));
            let m = h(c) ? c : 100;
            null === o || v(o, m) || console.error((s = `${o}`, `Invalid prop \`value\` of value \`${s}\` supplied to \`Progress\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or 100 if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`));
            let g = v(o, m) ? o : null,
                b = x(g) ? d(g, m) : void 0;
            return (0, t.jsx)(l, {
                scope: i,
                value: g,
                max: m,
                children: (0, t.jsx)(n.Primitive.div, {
                    "aria-valuemax": m,
                    "aria-valuemin": 0,
                    "aria-valuenow": x(g) ? g : void 0,
                    "aria-valuetext": b,
                    role: "progressbar",
                    "data-state": p(g, m),
                    "data-value": g ? ? void 0,
                    "data-max": m,
                    ...u,
                    ref: r
                })
            })
        });
    d.displayName = s;
    var u = "ProgressIndicator",
        m = r.forwardRef((e, r) => {
            let {
                __scopeProgress: a,
                ...s
            } = e, i = c(u, a);
            return (0, t.jsx)(n.Primitive.div, {
                "data-state": p(i.value, i.max),
                "data-value": i.value ? ? void 0,
                "data-max": i.max,
                ...s,
                ref: r
            })
        });

    function f(e, t) {
        return `${Math.round(e/t*100)}%`
    }

    function p(e, t) {
        return null == e ? "indeterminate" : e === t ? "complete" : "loading"
    }

    function x(e) {
        return "number" == typeof e
    }

    function h(e) {
        return x(e) && !isNaN(e) && e > 0
    }

    function v(e, t) {
        return x(e) && !isNaN(e) && e <= t && e >= 0
    }
    m.displayName = u;
    var g = e.i(47163);

    function b({
        className: e,
        value: r,
        ...a
    }) {
        return (0, t.jsx)(d, {
            "data-slot": "progress",
            className: (0, g.cn)("bg-primary/20 relative h-2 w-full overflow-hidden rounded-full", e),
            ...a,
            children: (0, t.jsx)(m, {
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
        n = e.i(47163);
    let s = (0, a.cva)("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
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
            className: (0, n.cn)(s({
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
    let n = (0, t.forwardRef)(({
            color: e = "currentColor",
            size: n = 24,
            strokeWidth: s = 2,
            absoluteStrokeWidth: i,
            className: o = "",
            children: l,
            iconNode: c,
            ...d
        }, u) => (0, t.createElement)("svg", {
            ref: u,
            ...a,
            width: n,
            height: n,
            stroke: e,
            strokeWidth: i ? 24 * Number(s) / Number(n) : s,
            className: r("lucide", o),
            ...d
        }, [...c.map(([e, r]) => (0, t.createElement)(e, r)), ...Array.isArray(l) ? l : [l]])),
        s = (e, a) => {
            let s = (0, t.forwardRef)(({
                className: s,
                ...i
            }, o) => (0, t.createElement)(n, {
                ref: o,
                iconNode: a,
                className: r(`lucide-${e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`, s),
                ...i
            }));
            return s.displayName = `${e}`, s
        };
    e.s(["default", () => s], 10965)
}, 17534, e => {
    "use strict";
    var t = e.i(75305),
        r = e.i(1972);

    function a(e, n = []) {
        let s = [],
            i = () => {
                let r = s.map(e => t.createContext(e));
                return function(a) {
                    let n = a ? .[e] || r;
                    return t.useMemo(() => ({
                        [`__scope${e}`]: { ...a,
                            [e]: n
                        }
                    }), [a, n])
                }
            };
        return i.scopeName = e, [function(a, n) {
            let i = t.createContext(n),
                o = s.length;
            s = [...s, n];
            let l = a => {
                let {
                    scope: n,
                    children: s,
                    ...l
                } = a, c = n ? .[e] ? .[o] || i, d = t.useMemo(() => l, Object.values(l));
                return (0, r.jsx)(c.Provider, {
                    value: d,
                    children: s
                })
            };
            return l.displayName = a + "Provider", [l, function(r, s) {
                let l = s ? .[e] ? .[o] || i,
                    c = t.useContext(l);
                if (c) return c;
                if (void 0 !== n) return n;
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
                    let n = a.reduce((t, {
                        useScope: r,
                        scopeName: a
                    }) => {
                        let n = r(e)[`__scope${a}`];
                        return { ...t,
                            ...n
                        }
                    }, {});
                    return t.useMemo(() => ({
                        [`__scope${r.scopeName}`]: n
                    }), [n])
                }
            };
            return a.scopeName = r.scopeName, a
        }(i, ...n)]
    }
    e.s(["createContextScope", () => a])
}, 86591, e => {
    "use strict";
    let t = (0, e.i(10965).default)("Clock", [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }],
        ["polyline", {
            points: "12 6 12 12 16 14",
            key: "68esgv"
        }]
    ]);
    e.s(["Clock", () => t], 86591)
}, 83637, e => {
    "use strict";
    var t = e.i(1972),
        r = e.i(75305),
        a = e.i(84675),
        n = e.i(86591),
        s = e.i(10965);
    let i = (0, s.default)("Send", [
            ["path", {
                d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
                key: "1ffxy3"
            }],
            ["path", {
                d: "m21.854 2.147-10.94 10.939",
                key: "12cjpa"
            }]
        ]),
        o = (0, s.default)("Sparkles", [
            ["path", {
                d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
                key: "4pj2yx"
            }],
            ["path", {
                d: "M20 3v4",
                key: "1olli1"
            }],
            ["path", {
                d: "M22 5h-4",
                key: "1gvqau"
            }],
            ["path", {
                d: "M4 17v2",
                key: "vumght"
            }],
            ["path", {
                d: "M5 18H3",
                key: "zchphs"
            }]
        ]);
    var l = e.i(70065),
        c = e.i(67881),
        d = e.i(47163);

    function u({
        className: e,
        ...r
    }) {
        return (0, t.jsx)("textarea", {
            "data-slot": "textarea",
            className: (0, d.cn)("border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", e),
            ...r
        })
    }
    var m = e.i(94179),
        f = e.i(87336),
        p = e.i(2854),
        x = e.i(4032);

    function h() {
        let e, [s, d] = (0, r.useState)(""),
            [h, v] = (0, r.useState)(3600),
            [g, b] = (0, r.useState)(!1),
            [j, y] = (0, r.useState)(!1),
            [N, C] = (0, r.useState)({
                competencia1: 0,
                competencia2: 0,
                competencia3: 0,
                competencia4: 0,
                competencia5: 0,
                total: 0
            }),
            {
                addEssayResult: w
            } = (0, x.useStudyData)(),
            P = s.trim().split(/\s+/).filter(e => e.length > 0).length,
            k = s.length,
            S = "Os impactos da inteligência artificial na sociedade contemporânea brasileira.";
        return j ? (0, t.jsxs)("div", {
            className: "min-h-screen bg-background",
            children: [(0, t.jsx)("header", {
                className: "border-b bg-card sticky top-0 z-50",
                children: (0, t.jsx)("div", {
                    className: "container mx-auto px-4 py-4",
                    children: (0, t.jsxs)("div", {
                        className: "flex items-center gap-3",
                        children: [(0, t.jsx)(c.Button, {
                            variant: "ghost",
                            size: "icon",
                            onClick: () => y(!1),
                            children: (0, t.jsx)(a.ArrowLeft, {
                                className: "w-5 h-5"
                            })
                        }), (0, t.jsx)("div", {
                            children: (0, t.jsx)("h1", {
                                className: "text-xl font-bold",
                                children: "Resultado da Correção"
                            })
                        })]
                    })
                })
            }), (0, t.jsx)("main", {
                className: "container mx-auto px-4 py-8 max-w-4xl",
                children: (0, t.jsxs)(l.Card, {
                    className: "mb-6 border-2 border-primary",
                    children: [(0, t.jsxs)(l.CardHeader, {
                        className: "text-center",
                        children: [(0, t.jsxs)("div", {
                            className: "w-32 h-32 rounded-full bg-primary/10 flex flex-col items-center justify-center mx-auto mb-4",
                            children: [(0, t.jsx)("span", {
                                className: "text-5xl font-bold text-primary",
                                children: N.total
                            }), (0, t.jsx)("span", {
                                className: "text-sm text-muted-foreground",
                                children: "/1000"
                            })]
                        }), (0, t.jsx)(l.CardTitle, {
                            className: "text-2xl",
                            children: "Sua redação foi corrigida!"
                        }), (0, t.jsx)(l.CardDescription, {
                            children: "Confira a nota em cada competência"
                        })]
                    }), (0, t.jsxs)(l.CardContent, {
                        className: "space-y-4",
                        children: [(0, t.jsxs)("div", {
                            className: "space-y-2",
                            children: [(0, t.jsxs)("div", {
                                className: "flex items-center justify-between",
                                children: [(0, t.jsxs)("div", {
                                    children: [(0, t.jsx)("p", {
                                        className: "font-semibold text-sm",
                                        children: "Competência 1"
                                    }), (0, t.jsx)("p", {
                                        className: "text-xs text-muted-foreground",
                                        children: "Domínio da norma padrão"
                                    })]
                                }), (0, t.jsxs)(m.Badge, {
                                    variant: "secondary",
                                    className: "text-base",
                                    children: [N.competencia1, "/200"]
                                })]
                            }), (0, t.jsx)(f.Progress, {
                                value: N.competencia1 / 200 * 100,
                                className: "h-2"
                            }), (0, t.jsx)("p", {
                                className: "text-sm text-muted-foreground leading-relaxed",
                                children: "Boa demonstração do domínio da norma culta. Poucos desvios gramaticais."
                            })]
                        }), (0, t.jsxs)("div", {
                            className: "space-y-2",
                            children: [(0, t.jsxs)("div", {
                                className: "flex items-center justify-between",
                                children: [(0, t.jsxs)("div", {
                                    children: [(0, t.jsx)("p", {
                                        className: "font-semibold text-sm",
                                        children: "Competência 2"
                                    }), (0, t.jsx)("p", {
                                        className: "text-xs text-muted-foreground",
                                        children: "Compreensão do tema"
                                    })]
                                }), (0, t.jsxs)(m.Badge, {
                                    variant: "secondary",
                                    className: "text-base",
                                    children: [N.competencia2, "/200"]
                                })]
                            }), (0, t.jsx)(f.Progress, {
                                value: N.competencia2 / 200 * 100,
                                className: "h-2"
                            }), (0, t.jsx)("p", {
                                className: "text-sm text-muted-foreground leading-relaxed",
                                children: "Tema bem desenvolvido com argumentos pertinentes. Poderia explorar mais aspectos."
                            })]
                        }), (0, t.jsxs)("div", {
                            className: "space-y-2",
                            children: [(0, t.jsxs)("div", {
                                className: "flex items-center justify-between",
                                children: [(0, t.jsxs)("div", {
                                    children: [(0, t.jsx)("p", {
                                        className: "font-semibold text-sm",
                                        children: "Competência 3"
                                    }), (0, t.jsx)("p", {
                                        className: "text-xs text-muted-foreground",
                                        children: "Organização e coesão"
                                    })]
                                }), (0, t.jsxs)(m.Badge, {
                                    variant: "secondary",
                                    className: "text-base",
                                    children: [N.competencia3, "/200"]
                                })]
                            }), (0, t.jsx)(f.Progress, {
                                value: N.competencia3 / 200 * 100,
                                className: "h-2"
                            }), (0, t.jsx)("p", {
                                className: "text-sm text-muted-foreground leading-relaxed",
                                children: "Texto bem estruturado com boa progressão temática e uso adequado de conectivos."
                            })]
                        }), (0, t.jsxs)("div", {
                            className: "space-y-2",
                            children: [(0, t.jsxs)("div", {
                                className: "flex items-center justify-between",
                                children: [(0, t.jsxs)("div", {
                                    children: [(0, t.jsx)("p", {
                                        className: "font-semibold text-sm",
                                        children: "Competência 4"
                                    }), (0, t.jsx)("p", {
                                        className: "text-xs text-muted-foreground",
                                        children: "Argumentação"
                                    })]
                                }), (0, t.jsxs)(m.Badge, {
                                    variant: "secondary",
                                    className: "text-base",
                                    children: [N.competencia4, "/200"]
                                })]
                            }), (0, t.jsx)(f.Progress, {
                                value: N.competencia4 / 200 * 100,
                                className: "h-2"
                            }), (0, t.jsx)("p", {
                                className: "text-sm text-muted-foreground leading-relaxed",
                                children: "Argumentos consistentes apoiados em conhecimentos diversificados."
                            })]
                        }), (0, t.jsxs)("div", {
                            className: "space-y-2",
                            children: [(0, t.jsxs)("div", {
                                className: "flex items-center justify-between",
                                children: [(0, t.jsxs)("div", {
                                    children: [(0, t.jsx)("p", {
                                        className: "font-semibold text-sm",
                                        children: "Competência 5"
                                    }), (0, t.jsx)("p", {
                                        className: "text-xs text-muted-foreground",
                                        children: "Proposta de intervenção"
                                    })]
                                }), (0, t.jsxs)(m.Badge, {
                                    variant: "secondary",
                                    className: "text-base",
                                    children: [N.competencia5, "/200"]
                                })]
                            }), (0, t.jsx)(f.Progress, {
                                value: N.competencia5 / 200 * 100,
                                className: "h-2"
                            }), (0, t.jsx)("p", {
                                className: "text-sm text-muted-foreground leading-relaxed",
                                children: "Proposta clara e detalhada respeitando os direitos humanos."
                            })]
                        }), (0, t.jsxs)("div", {
                            className: "flex gap-2 pt-4",
                            children: [(0, t.jsx)(c.Button, {
                                onClick: () => {
                                    y(!1), d(""), v(3600)
                                },
                                className: "flex-1",
                                children: "Escrever Nova Redação"
                            }), (0, t.jsx)(p.default, {
                                href: "/desempenho",
                                className: "flex-1",
                                children: (0, t.jsx)(c.Button, {
                                    variant: "outline",
                                    className: "w-full bg-transparent",
                                    children: "Ver Todas as Redações"
                                })
                            })]
                        })]
                    })]
                })
            })]
        }) : (0, t.jsxs)("div", {
            className: "min-h-screen bg-background",
            children: [(0, t.jsx)("header", {
                className: "border-b bg-card sticky top-0 z-50",
                children: (0, t.jsx)("div", {
                    className: "container mx-auto px-4 py-4",
                    children: (0, t.jsxs)("div", {
                        className: "flex items-center justify-between gap-4",
                        children: [(0, t.jsxs)("div", {
                            className: "flex items-center gap-3 flex-1",
                            children: [(0, t.jsx)(p.default, {
                                href: "/",
                                children: (0, t.jsx)(c.Button, {
                                    variant: "ghost",
                                    size: "icon",
                                    children: (0, t.jsx)(a.ArrowLeft, {
                                        className: "w-5 h-5"
                                    })
                                })
                            }), (0, t.jsxs)("div", {
                                children: [(0, t.jsx)("h1", {
                                    className: "text-xl font-bold",
                                    children: "Redação"
                                }), (0, t.jsx)("p", {
                                    className: "text-xs text-muted-foreground",
                                    children: "Pratique e receba correção"
                                })]
                            })]
                        }), (0, t.jsx)("div", {
                            className: "flex items-center gap-2",
                            children: g ? (0, t.jsx)(l.Card, {
                                className: "p-3",
                                children: (0, t.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [(0, t.jsx)(n.Clock, {
                                        className: "w-4 h-4 text-primary"
                                    }), (0, t.jsx)("span", {
                                        className: "font-mono font-bold text-lg",
                                        children: (e = Math.floor(h / 60), `${String(e).padStart(2,"0")}:${String(h%60).padStart(2,"0")}`)
                                    })]
                                })
                            }) : (0, t.jsxs)(c.Button, {
                                onClick: () => {
                                    b(!0);
                                    let e = setInterval(() => {
                                        v(t => t <= 1 ? (clearInterval(e), b(!1), 0) : t - 1)
                                    }, 1e3)
                                },
                                variant: "outline",
                                size: "sm",
                                children: [(0, t.jsx)(n.Clock, {
                                    className: "w-4 h-4 mr-2"
                                }), "Iniciar Timer (60min)"]
                            })
                        })]
                    })
                })
            }), (0, t.jsxs)("main", {
                className: "container mx-auto px-4 py-8 max-w-5xl",
                children: [(0, t.jsx)(l.Card, {
                    className: "mb-6 bg-gradient-to-br from-accent/10 to-transparent border-accent/30",
                    children: (0, t.jsx)(l.CardHeader, {
                        children: (0, t.jsxs)("div", {
                            className: "flex items-start gap-3",
                            children: [(0, t.jsx)("div", {
                                className: "w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0",
                                children: (0, t.jsx)(o, {
                                    className: "w-5 h-5 text-accent-foreground"
                                })
                            }), (0, t.jsxs)("div", {
                                children: [(0, t.jsx)(l.CardTitle, {
                                    className: "text-lg mb-2",
                                    children: "Tema da Redação"
                                }), (0, t.jsx)("p", {
                                    className: "text-foreground font-semibold leading-relaxed",
                                    children: S
                                })]
                            })]
                        })
                    })
                }), (0, t.jsxs)("div", {
                    className: "grid lg:grid-cols-3 gap-6",
                    children: [(0, t.jsx)("div", {
                        className: "lg:col-span-2",
                        children: (0, t.jsxs)(l.Card, {
                            children: [(0, t.jsx)(l.CardHeader, {
                                children: (0, t.jsxs)("div", {
                                    className: "flex items-center justify-between",
                                    children: [(0, t.jsx)(l.CardTitle, {
                                        children: "Escreva sua redação"
                                    }), (0, t.jsxs)("div", {
                                        className: "flex gap-4 text-sm text-muted-foreground",
                                        children: [(0, t.jsxs)("span", {
                                            children: [P, " palavras"]
                                        }), (0, t.jsxs)("span", {
                                            children: [k, " caracteres"]
                                        })]
                                    })]
                                })
                            }), (0, t.jsxs)(l.CardContent, {
                                children: [(0, t.jsx)(u, {
                                    placeholder: "Comece a escrever sua redação aqui... Lembre-se de fazer uma introdução clara, desenvolver seus argumentos no corpo do texto e apresentar uma proposta de intervenção na conclusão.",
                                    value: s,
                                    onChange: e => d(e.target.value),
                                    className: "min-h-[500px] text-base leading-relaxed resize-none"
                                }), (0, t.jsxs)("div", {
                                    className: "flex gap-2 mt-4",
                                    children: [(0, t.jsxs)(c.Button, {
                                        onClick: () => {
                                            if (s.trim().length < 100) return void alert("Sua redação está muito curta. Escreva pelo menos 100 caracteres.");
                                            let e = Math.min(180, Math.floor(P / 5) + 100),
                                                t = () => Math.floor(40 * Math.random()) - 20,
                                                r = {
                                                    competencia1: Math.max(120, Math.min(200, e + t())),
                                                    competencia2: Math.max(120, Math.min(200, e + t())),
                                                    competencia3: Math.max(120, Math.min(200, e + t())),
                                                    competencia4: Math.max(120, Math.min(200, e + t())),
                                                    competencia5: Math.max(120, Math.min(200, e + t())),
                                                    total: 0
                                                };
                                            r.total = r.competencia1 + r.competencia2 + r.competencia3 + r.competencia4 + r.competencia5, C(r), w({
                                                id: `essay-${Date.now()}`,
                                                date: new Date().toLocaleDateString("pt-BR"),
                                                theme: S,
                                                score: r.total,
                                                competences: [r.competencia1, r.competencia2, r.competencia3, r.competencia4, r.competencia5]
                                            }), y(!0)
                                        },
                                        className: "flex-1",
                                        disabled: s.trim().length < 100,
                                        children: [(0, t.jsx)(i, {
                                            className: "w-4 h-4 mr-2"
                                        }), "Enviar para Correção"]
                                    }), (0, t.jsx)(c.Button, {
                                        variant: "outline",
                                        onClick: () => {
                                            d(""), v(3600), b(!1)
                                        },
                                        children: "Limpar"
                                    })]
                                })]
                            })]
                        })
                    }), (0, t.jsxs)("div", {
                        className: "space-y-4",
                        children: [(0, t.jsxs)(l.Card, {
                            children: [(0, t.jsx)(l.CardHeader, {
                                children: (0, t.jsx)(l.CardTitle, {
                                    className: "text-base",
                                    children: "Estrutura da Redação"
                                })
                            }), (0, t.jsxs)(l.CardContent, {
                                className: "space-y-3 text-sm",
                                children: [(0, t.jsxs)("div", {
                                    children: [(0, t.jsx)("p", {
                                        className: "font-semibold mb-1",
                                        children: "Introdução (7-8 linhas)"
                                    }), (0, t.jsx)("p", {
                                        className: "text-muted-foreground text-xs leading-relaxed",
                                        children: "Apresente o tema e sua tese"
                                    })]
                                }), (0, t.jsxs)("div", {
                                    children: [(0, t.jsx)("p", {
                                        className: "font-semibold mb-1",
                                        children: "Desenvolvimento (18-20 linhas)"
                                    }), (0, t.jsx)("p", {
                                        className: "text-muted-foreground text-xs leading-relaxed",
                                        children: "2 parágrafos com argumentos"
                                    })]
                                }), (0, t.jsxs)("div", {
                                    children: [(0, t.jsx)("p", {
                                        className: "font-semibold mb-1",
                                        children: "Conclusão (5-7 linhas)"
                                    }), (0, t.jsx)("p", {
                                        className: "text-muted-foreground text-xs leading-relaxed",
                                        children: "Proposta de intervenção completa"
                                    })]
                                })]
                            })]
                        }), (0, t.jsxs)(l.Card, {
                            children: [(0, t.jsx)(l.CardHeader, {
                                children: (0, t.jsx)(l.CardTitle, {
                                    className: "text-base",
                                    children: "5 Competências"
                                })
                            }), (0, t.jsxs)(l.CardContent, {
                                className: "space-y-2 text-xs leading-relaxed",
                                children: [(0, t.jsxs)("div", {
                                    children: [(0, t.jsx)(m.Badge, {
                                        variant: "outline",
                                        className: "mb-1",
                                        children: "C1"
                                    }), (0, t.jsx)("p", {
                                        className: "text-muted-foreground",
                                        children: "Norma padrão da língua"
                                    })]
                                }), (0, t.jsxs)("div", {
                                    children: [(0, t.jsx)(m.Badge, {
                                        variant: "outline",
                                        className: "mb-1",
                                        children: "C2"
                                    }), (0, t.jsx)("p", {
                                        className: "text-muted-foreground",
                                        children: "Compreensão do tema"
                                    })]
                                }), (0, t.jsxs)("div", {
                                    children: [(0, t.jsx)(m.Badge, {
                                        variant: "outline",
                                        className: "mb-1",
                                        children: "C3"
                                    }), (0, t.jsx)("p", {
                                        className: "text-muted-foreground",
                                        children: "Organização e coesão"
                                    })]
                                }), (0, t.jsxs)("div", {
                                    children: [(0, t.jsx)(m.Badge, {
                                        variant: "outline",
                                        className: "mb-1",
                                        children: "C4"
                                    }), (0, t.jsx)("p", {
                                        className: "text-muted-foreground",
                                        children: "Argumentação consistente"
                                    })]
                                }), (0, t.jsxs)("div", {
                                    children: [(0, t.jsx)(m.Badge, {
                                        variant: "outline",
                                        className: "mb-1",
                                        children: "C5"
                                    }), (0, t.jsx)("p", {
                                        className: "text-muted-foreground",
                                        children: "Proposta de intervenção"
                                    })]
                                })]
                            })]
                        }), (0, t.jsxs)(l.Card, {
                            className: "bg-muted/50",
                            children: [(0, t.jsx)(l.CardHeader, {
                                children: (0, t.jsx)(l.CardTitle, {
                                    className: "text-base",
                                    children: "Dica"
                                })
                            }), (0, t.jsx)(l.CardContent, {
                                children: (0, t.jsx)("p", {
                                    className: "text-sm text-muted-foreground leading-relaxed",
                                    children: "Use conectivos para dar fluidez ao texto: além disso, por outro lado, portanto, dessa forma, etc."
                                })
                            })]
                        })]
                    })]
                })]
            })]
        })
    }
    e.s(["default", () => h], 83637)
}]);