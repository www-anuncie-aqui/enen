(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 17534, e => {
    "use strict";
    var r = e.i(75305),
        t = e.i(1972);

    function n(e, a = []) {
        let s = [],
            o = () => {
                let t = s.map(e => r.createContext(e));
                return function(n) {
                    let a = n ? .[e] || t;
                    return r.useMemo(() => ({
                        [`__scope${e}`]: { ...n,
                            [e]: a
                        }
                    }), [n, a])
                }
            };
        return o.scopeName = e, [function(n, a) {
            let o = r.createContext(a),
                i = s.length;
            s = [...s, a];
            let l = n => {
                let {
                    scope: a,
                    children: s,
                    ...l
                } = n, u = a ? .[e] ? .[i] || o, c = r.useMemo(() => l, Object.values(l));
                return (0, t.jsx)(u.Provider, {
                    value: c,
                    children: s
                })
            };
            return l.displayName = n + "Provider", [l, function(t, s) {
                let l = s ? .[e] ? .[i] || o,
                    u = r.useContext(l);
                if (u) return u;
                if (void 0 !== a) return a;
                throw Error(`\`${t}\` must be used within \`${n}\``)
            }]
        }, function(...e) {
            let t = e[0];
            if (1 === e.length) return t;
            let n = () => {
                let n = e.map(e => ({
                    useScope: e(),
                    scopeName: e.scopeName
                }));
                return function(e) {
                    let a = n.reduce((r, {
                        useScope: t,
                        scopeName: n
                    }) => {
                        let a = t(e)[`__scope${n}`];
                        return { ...r,
                            ...a
                        }
                    }, {});
                    return r.useMemo(() => ({
                        [`__scope${t.scopeName}`]: a
                    }), [a])
                }
            };
            return n.scopeName = t.scopeName, n
        }(o, ...a)]
    }
    e.s(["createContextScope", () => n])
}, 64462, (e, r, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), Object.defineProperty(t, "warnOnce", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let n = e => {}
}, 90177, (e, r, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = {
        assign: function() {
            return l
        },
        searchParamsToUrlQuery: function() {
            return s
        },
        urlQueryToSearchParams: function() {
            return i
        }
    };
    for (var a in n) Object.defineProperty(t, a, {
        enumerable: !0,
        get: n[a]
    });

    function s(e) {
        let r = {};
        for (let [t, n] of e.entries()) {
            let e = r[t];
            void 0 === e ? r[t] = n : Array.isArray(e) ? e.push(n) : r[t] = [e, n]
        }
        return r
    }

    function o(e) {
        return "string" == typeof e ? e : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e ? "" : String(e)
    }

    function i(e) {
        let r = new URLSearchParams;
        for (let [t, n] of Object.entries(e))
            if (Array.isArray(n))
                for (let e of n) r.append(t, o(e));
            else r.set(t, o(n));
        return r
    }

    function l(e, ...r) {
        for (let t of r) {
            for (let r of t.keys()) e.delete(r);
            for (let [r, n] of t.entries()) e.append(r, n)
        }
        return e
    }
}, 3614, (e, r, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = {
        formatUrl: function() {
            return i
        },
        formatWithValidation: function() {
            return u
        },
        urlObjectKeys: function() {
            return l
        }
    };
    for (var a in n) Object.defineProperty(t, a, {
        enumerable: !0,
        get: n[a]
    });
    let s = e.r(44066)._(e.r(90177)),
        o = /https?|ftp|gopher|file/;

    function i(e) {
        let {
            auth: r,
            hostname: t
        } = e, n = e.protocol || "", a = e.pathname || "", i = e.hash || "", l = e.query || "", u = !1;
        r = r ? encodeURIComponent(r).replace(/%3A/i, ":") + "@" : "", e.host ? u = r + e.host : t && (u = r + (~t.indexOf(":") ? `[${t}]` : t), e.port && (u += ":" + e.port)), l && "object" == typeof l && (l = String(s.urlQueryToSearchParams(l)));
        let c = e.search || l && `?${l}` || "";
        return n && !n.endsWith(":") && (n += ":"), e.slashes || (!n || o.test(n)) && !1 !== u ? (u = "//" + (u || ""), a && "/" !== a[0] && (a = "/" + a)) : u || (u = ""), i && "#" !== i[0] && (i = "#" + i), c && "?" !== c[0] && (c = "?" + c), a = a.replace(/[?#]/g, encodeURIComponent), c = c.replace("#", "%23"), `${n}${u}${a}${c}${i}`
    }
    let l = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];

    function u(e) {
        return i(e)
    }
}, 93359, (e, r, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), Object.defineProperty(t, "useMergedRef", {
        enumerable: !0,
        get: function() {
            return a
        }
    });
    let n = e.r(75305);

    function a(e, r) {
        let t = (0, n.useRef)(null),
            a = (0, n.useRef)(null);
        return (0, n.useCallback)(n => {
            if (null === n) {
                let e = t.current;
                e && (t.current = null, e());
                let r = a.current;
                r && (a.current = null, r())
            } else e && (t.current = s(e, n)), r && (a.current = s(r, n))
        }, [e, r])
    }

    function s(e, r) {
        if ("function" != typeof e) return e.current = r, () => {
            e.current = null
        }; {
            let t = e(r);
            return "function" == typeof t ? t : () => e(null)
        }
    }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
        value: !0
    }), Object.assign(t.default, t), r.exports = t.default)
}, 94216, (e, r, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = {
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
            return m
        },
        ST: function() {
            return x
        },
        WEB_VITALS: function() {
            return s
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
    for (var a in n) Object.defineProperty(t, a, {
        enumerable: !0,
        get: n[a]
    });
    let s = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];

    function o(e) {
        let r, t = !1;
        return (...n) => (t || (t = !0, r = e(...n)), r)
    }
    let i = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        l = e => i.test(e);

    function u() {
        let {
            protocol: e,
            hostname: r,
            port: t
        } = window.location;
        return `${e}//${r}${t?":"+t:""}`
    }

    function c() {
        let {
            href: e
        } = window.location, r = u();
        return e.substring(r.length)
    }

    function d(e) {
        return "string" == typeof e ? e : e.displayName || e.name || "Unknown"
    }

    function f(e) {
        return e.finished || e.headersSent
    }

    function p(e) {
        let r = e.split("?");
        return r[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (r[1] ? `?${r.slice(1).join("?")}` : "")
    }
    async function h(e, r) {
        let t = r.res || r.ctx && r.ctx.res;
        if (!e.getInitialProps) return r.ctx && r.Component ? {
            pageProps: await h(r.Component, r.ctx)
        } : {};
        let n = await e.getInitialProps(r);
        if (t && f(t)) return n;
        if (!n) throw Object.defineProperty(Error(`"${d(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: !1,
            configurable: !0
        });
        return n
    }
    let m = "undefined" != typeof performance,
        x = m && ["mark", "measure", "getEntriesByName"].every(e => "function" == typeof performance[e]);
    class g extends Error {}
    class v extends Error {}
    class b extends Error {
        constructor(e) {
            super(), this.code = "ENOENT", this.name = "PageNotFoundError", this.message = `Cannot find module for page: ${e}`
        }
    }
    class j extends Error {
        constructor(e, r) {
            super(), this.message = `Failed to load static file for page: ${e} ${r}`
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
}, 26856, (e, r, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), Object.defineProperty(t, "isLocalURL", {
        enumerable: !0,
        get: function() {
            return s
        }
    });
    let n = e.r(94216),
        a = e.r(17054);

    function s(e) {
        if (!(0, n.isAbsoluteUrl)(e)) return !0;
        try {
            let r = (0, n.getLocationOrigin)(),
                t = new URL(e, r);
            return t.origin === r && (0, a.hasBasePath)(t.pathname)
        } catch (e) {
            return !1
        }
    }
}, 52335, (e, r, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), Object.defineProperty(t, "errorOnce", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let n = e => {}
}, 2854, (e, r, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = {
        default: function() {
            return g
        },
        useLinkStatus: function() {
            return b
        }
    };
    for (var a in n) Object.defineProperty(t, a, {
        enumerable: !0,
        get: n[a]
    });
    let s = e.r(44066),
        o = e.r(1972),
        i = s._(e.r(75305)),
        l = e.r(3614),
        u = e.r(311),
        c = e.r(93359),
        d = e.r(94216),
        f = e.r(38636);
    e.r(64462);
    let p = e.r(77514),
        h = e.r(26856),
        m = e.r(64914);

    function x(e) {
        return "string" == typeof e ? e : (0, l.formatUrl)(e)
    }

    function g(r) {
        var t;
        let n, a, s, [l, g] = (0, i.useOptimistic)(p.IDLE_LINK_STATUS),
            b = (0, i.useRef)(null),
            {
                href: j,
                as: y,
                children: N,
                prefetch: C = null,
                passHref: P,
                replace: w,
                shallow: E,
                scroll: _,
                onClick: O,
                onMouseEnter: T,
                onTouchStart: S,
                legacyBehavior: M = !1,
                onNavigate: R,
                ref: A,
                unstable_dynamicOnHover: $,
                ...k
            } = r;
        n = N, M && ("string" == typeof n || "number" == typeof n) && (n = (0, o.jsx)("a", {
            children: n
        }));
        let D = i.default.useContext(u.AppRouterContext),
            L = !1 !== C,
            z = !1 !== C ? null === (t = C) || "auto" === t ? m.FetchStrategy.PPR : m.FetchStrategy.Full : m.FetchStrategy.PPR,
            {
                href: I,
                as: U
            } = i.default.useMemo(() => {
                let e = x(j);
                return {
                    href: e,
                    as: y ? x(y) : e
                }
            }, [j, y]);
        if (M) {
            if (n ? .$$typeof === Symbol.for("react.lazy")) throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."), "__NEXT_ERROR_CODE", {
                value: "E863",
                enumerable: !1,
                configurable: !0
            });
            a = i.default.Children.only(n)
        }
        let B = M ? a && "object" == typeof a && a.ref : A,
            F = i.default.useCallback(e => (null !== D && (b.current = (0, p.mountLinkInstance)(e, I, D, z, L, g)), () => {
                b.current && ((0, p.unmountLinkForCurrentNavigation)(b.current), b.current = null), (0, p.unmountPrefetchableInstance)(e)
            }), [L, I, D, z, g]),
            H = {
                ref: (0, c.useMergedRef)(F, B),
                onClick(r) {
                    M || "function" != typeof O || O(r), M && a.props && "function" == typeof a.props.onClick && a.props.onClick(r), !D || r.defaultPrevented || function(r, t, n, a, s, o, l) {
                        if ("undefined" != typeof window) {
                            let u, {
                                nodeName: c
                            } = r.currentTarget;
                            if ("A" === c.toUpperCase() && ((u = r.currentTarget.getAttribute("target")) && "_self" !== u || r.metaKey || r.ctrlKey || r.shiftKey || r.altKey || r.nativeEvent && 2 === r.nativeEvent.which) || r.currentTarget.hasAttribute("download")) return;
                            if (!(0, h.isLocalURL)(t)) {
                                s && (r.preventDefault(), location.replace(t));
                                return
                            }
                            if (r.preventDefault(), l) {
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
                            i.default.startTransition(() => {
                                d(n || t, s ? "replace" : "push", o ? ? !0, a.current)
                            })
                        }
                    }(r, I, U, b, w, _, R)
                },
                onMouseEnter(e) {
                    M || "function" != typeof T || T(e), M && a.props && "function" == typeof a.props.onMouseEnter && a.props.onMouseEnter(e), D && L && (0, p.onNavigationIntent)(e.currentTarget, !0 === $)
                },
                onTouchStart: function(e) {
                    M || "function" != typeof S || S(e), M && a.props && "function" == typeof a.props.onTouchStart && a.props.onTouchStart(e), D && L && (0, p.onNavigationIntent)(e.currentTarget, !0 === $)
                }
            };
        return (0, d.isAbsoluteUrl)(U) ? H.href = U : M && !P && ("a" !== a.type || "href" in a.props) || (H.href = (0, f.addBasePath)(U)), s = M ? i.default.cloneElement(a, H) : (0, o.jsx)("a", { ...k,
            ...H,
            children: n
        }), (0, o.jsx)(v.Provider, {
            value: l,
            children: s
        })
    }
    e.r(52335);
    let v = (0, i.createContext)(p.IDLE_LINK_STATUS),
        b = () => (0, i.useContext)(v);
    ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
        value: !0
    }), Object.assign(t.default, t), r.exports = t.default)
}, 69756, e => {
    "use strict";
    var r = e.i(75305);
    e.i(23674);
    var t = e.i(84739),
        n = e.i(1972),
        a = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e, a) => {
            let s = r.forwardRef((e, r) => {
                let {
                    asChild: s,
                    ...o
                } = e, i = s ? t.Slot : a;
                return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, n.jsx)(i, { ...o,
                    ref: r
                })
            });
            return s.displayName = `Primitive.${a}`, { ...e,
                [a]: s
            }
        }, {});
    e.s(["Primitive", () => a])
}, 70065, 94237, 67881, e => {
    "use strict";
    var r = e.i(1972),
        t = e.i(47163);

    function n({
        className: e,
        ...n
    }) {
        return (0, r.jsx)("div", {
            "data-slot": "card",
            className: (0, t.cn)("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", e),
            ...n
        })
    }

    function a({
        className: e,
        ...n
    }) {
        return (0, r.jsx)("div", {
            "data-slot": "card-header",
            className: (0, t.cn)("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", e),
            ...n
        })
    }

    function s({
        className: e,
        ...n
    }) {
        return (0, r.jsx)("div", {
            "data-slot": "card-title",
            className: (0, t.cn)("leading-none font-semibold", e),
            ...n
        })
    }

    function o({
        className: e,
        ...n
    }) {
        return (0, r.jsx)("div", {
            "data-slot": "card-description",
            className: (0, t.cn)("text-muted-foreground text-sm", e),
            ...n
        })
    }

    function i({
        className: e,
        ...n
    }) {
        return (0, r.jsx)("div", {
            "data-slot": "card-content",
            className: (0, t.cn)("px-6", e),
            ...n
        })
    }
    e.s(["Card", () => n, "CardContent", () => i, "CardDescription", () => o, "CardHeader", () => a, "CardTitle", () => s], 70065);
    var l = e.i(84739),
        u = e.i(7284);
    let c = e => "boolean" == typeof e ? `${e}` : 0 === e ? "0" : e,
        d = u.clsx,
        f = (e, r) => t => {
            var n;
            if ((null == r ? void 0 : r.variants) == null) return d(e, null == t ? void 0 : t.class, null == t ? void 0 : t.className);
            let {
                variants: a,
                defaultVariants: s
            } = r, o = Object.keys(a).map(e => {
                let r = null == t ? void 0 : t[e],
                    n = null == s ? void 0 : s[e];
                if (null === r) return null;
                let o = c(r) || c(n);
                return a[e][o]
            }), i = t && Object.entries(t).reduce((e, r) => {
                let [t, n] = r;
                return void 0 === n || (e[t] = n), e
            }, {});
            return d(e, o, null == r || null == (n = r.compoundVariants) ? void 0 : n.reduce((e, r) => {
                let {
                    class: t,
                    className: n,
                    ...a
                } = r;
                return Object.entries(a).every(e => {
                    let [r, t] = e;
                    return Array.isArray(t) ? t.includes({ ...s,
                        ...i
                    }[r]) : ({ ...s,
                        ...i
                    })[r] === t
                }) ? [...e, t, n] : e
            }, []), null == t ? void 0 : t.class, null == t ? void 0 : t.className)
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
        asChild: s = !1,
        ...o
    }) {
        let i = s ? l.Slot : "button";
        return (0, r.jsx)(i, {
            "data-slot": "button",
            className: (0, t.cn)(p({
                variant: n,
                size: a,
                className: e
            })),
            ...o
        })
    }
    e.s(["Button", () => h], 67881)
}, 87336, e => {
    "use strict";
    var r = e.i(1972),
        t = e.i(75305),
        n = e.i(17534),
        a = e.i(69756),
        s = "Progress",
        [o, i] = (0, n.createContextScope)(s),
        [l, u] = o(s),
        c = t.forwardRef((e, t) => {
            var n, s;
            let {
                __scopeProgress: o,
                value: i = null,
                max: u,
                getValueLabel: c = p,
                ...d
            } = e;
            (u || 0 === u) && !x(u) && console.error((n = `${u}`, `Invalid prop \`max\` of value \`${n}\` supplied to \`Progress\`. Only numbers greater than 0 are valid max values. Defaulting to \`100\`.`));
            let f = x(u) ? u : 100;
            null === i || g(i, f) || console.error((s = `${i}`, `Invalid prop \`value\` of value \`${s}\` supplied to \`Progress\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or 100 if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`));
            let v = g(i, f) ? i : null,
                b = m(v) ? c(v, f) : void 0;
            return (0, r.jsx)(l, {
                scope: o,
                value: v,
                max: f,
                children: (0, r.jsx)(a.Primitive.div, {
                    "aria-valuemax": f,
                    "aria-valuemin": 0,
                    "aria-valuenow": m(v) ? v : void 0,
                    "aria-valuetext": b,
                    role: "progressbar",
                    "data-state": h(v, f),
                    "data-value": v ? ? void 0,
                    "data-max": f,
                    ...d,
                    ref: t
                })
            })
        });
    c.displayName = s;
    var d = "ProgressIndicator",
        f = t.forwardRef((e, t) => {
            let {
                __scopeProgress: n,
                ...s
            } = e, o = u(d, n);
            return (0, r.jsx)(a.Primitive.div, {
                "data-state": h(o.value, o.max),
                "data-value": o.value ? ? void 0,
                "data-max": o.max,
                ...s,
                ref: t
            })
        });

    function p(e, r) {
        return `${Math.round(e/r*100)}%`
    }

    function h(e, r) {
        return null == e ? "indeterminate" : e === r ? "complete" : "loading"
    }

    function m(e) {
        return "number" == typeof e
    }

    function x(e) {
        return m(e) && !isNaN(e) && e > 0
    }

    function g(e, r) {
        return m(e) && !isNaN(e) && e <= r && e >= 0
    }
    f.displayName = d;
    var v = e.i(47163);

    function b({
        className: e,
        value: t,
        ...n
    }) {
        return (0, r.jsx)(c, {
            "data-slot": "progress",
            className: (0, v.cn)("bg-primary/20 relative h-2 w-full overflow-hidden rounded-full", e),
            ...n,
            children: (0, r.jsx)(f, {
                "data-slot": "progress-indicator",
                className: "bg-primary h-full w-full flex-1 transition-all",
                style: {
                    transform: `translateX(-${100-(t||0)}%)`
                }
            })
        })
    }
    e.s(["Progress", () => b], 87336)
}, 31713, e => {
    "use strict";
    var r = e.i(1972),
        t = e.i(70065),
        n = e.i(67881),
        a = e.i(87336),
        s = e.i(2854),
        o = e.i(4032),
        i = e.i(91432),
        l = e.i(75305),
        u = e.i(30499);

    function c() {
        let {
            data: e
        } = (0, o.useStudyData)(), {
            user: c,
            isAuthenticated: d
        } = (0, i.useAuth)(), f = (0, u.useRouter)();
        if ((0, l.useEffect)(() => {
                d || f.push("/login")
            }, [d, f]), !d) return null;
        let p = e.questionsAnswered > 0 ? Math.round(e.correctAnswers / e.questionsAnswered * 100) : 0,
            h = Math.min(e.studyHours / 20 * 100, 100);
        return (0, r.jsxs)("div", {
            className: "min-h-screen bg-background",
            children: [(0, r.jsx)("header", {
                className: "border-b bg-card sticky top-0 z-50",
                children: (0, r.jsx)("div", {
                    className: "container mx-auto px-4 py-4",
                    children: (0, r.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [(0, r.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [(0, r.jsx)("img", {
                                src: "/logo.png",
                                alt: "AprovaENEM Logo",
                                className: "w-10 h-10 object-contain"
                            }), (0, r.jsxs)("div", {
                                children: [(0, r.jsx)("h1", {
                                    className: "text-xl font-bold text-foreground",
                                    children: "AprovaENEM"
                                }), (0, r.jsx)("p", {
                                    className: "text-xs text-muted-foreground",
                                    children: "Sua aprovação começa aqui"
                                })]
                            })]
                        }), (0, r.jsx)(s.default, {
                            href: "/perfil",
                            children: (0, r.jsx)(n.Button, {
                                variant: "outline",
                                size: "sm",
                                children: "Meu Perfil"
                            })
                        })]
                    })
                })
            }), (0, r.jsxs)("main", {
                className: "container mx-auto px-4 py-8",
                children: [(0, r.jsxs)("div", {
                    className: "mb-8",
                    children: [(0, r.jsxs)("h2", {
                        className: "text-3xl font-bold text-foreground mb-2 text-balance",
                        children: ["Olá, ", c ? .name || "Estudante", "!"]
                    }), (0, r.jsx)("p", {
                        className: "text-muted-foreground",
                        children: "Continue sua jornada rumo à aprovação no ENEM"
                    })]
                }), (0, r.jsxs)(t.Card, {
                    className: "mb-8 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent",
                    children: [(0, r.jsxs)(t.CardHeader, {
                        children: [(0, r.jsxs)(t.CardTitle, {
                            className: "flex items-center gap-2",
                            children: [(0, r.jsx)("span", {
                                className: "text-xl",
                                children: "📈"
                            }), "Progresso Semanal"]
                        }), (0, r.jsxs)(t.CardDescription, {
                            children: ["Você estudou ", e.studyHours.toFixed(1), "h esta semana"]
                        })]
                    }), (0, r.jsx)(t.CardContent, {
                        children: (0, r.jsxs)("div", {
                            className: "space-y-2",
                            children: [(0, r.jsxs)("div", {
                                className: "flex justify-between text-sm",
                                children: [(0, r.jsxs)("span", {
                                    className: "text-muted-foreground",
                                    children: ["Meta: ", 20, "h"]
                                }), (0, r.jsxs)("span", {
                                    className: "font-semibold text-primary",
                                    children: [h.toFixed(0), "%"]
                                })]
                            }), (0, r.jsx)(a.Progress, {
                                value: h,
                                className: "h-3"
                            })]
                        })
                    })]
                }), (0, r.jsxs)("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8",
                    children: [(0, r.jsxs)(t.Card, {
                        className: "hover:shadow-lg transition-all cursor-pointer group border-2 hover:border-primary",
                        children: [(0, r.jsxs)(t.CardHeader, {
                            children: [(0, r.jsx)("div", {
                                className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary group-hover:scale-110 transition-all text-2xl",
                                children: "📝"
                            }), (0, r.jsx)(t.CardTitle, {
                                className: "text-lg",
                                children: "Simulados"
                            }), (0, r.jsx)(t.CardDescription, {
                                children: "Pratique com questões reais do ENEM"
                            })]
                        }), (0, r.jsx)(t.CardContent, {
                            children: (0, r.jsx)(s.default, {
                                href: "/simulados",
                                children: (0, r.jsx)(n.Button, {
                                    className: "w-full",
                                    size: "lg",
                                    children: "Praticar Agora"
                                })
                            })
                        })]
                    }), (0, r.jsxs)(t.Card, {
                        className: "hover:shadow-lg transition-all cursor-pointer group border-2 hover:border-accent",
                        children: [(0, r.jsxs)(t.CardHeader, {
                            children: [(0, r.jsx)("div", {
                                className: "w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-3 group-hover:bg-accent group-hover:scale-110 transition-all text-2xl",
                                children: "✍️"
                            }), (0, r.jsx)(t.CardTitle, {
                                className: "text-lg",
                                children: "Redação"
                            }), (0, r.jsx)(t.CardDescription, {
                                children: "Escreva e receba correção automática"
                            })]
                        }), (0, r.jsx)(t.CardContent, {
                            children: (0, r.jsx)(s.default, {
                                href: "/redacao",
                                children: (0, r.jsx)(n.Button, {
                                    className: "w-full bg-transparent",
                                    size: "lg",
                                    variant: "outline",
                                    children: "Escrever Redação"
                                })
                            })
                        })]
                    }), (0, r.jsxs)(t.Card, {
                        className: "hover:shadow-lg transition-all cursor-pointer group border-2 hover:border-chart-3",
                        children: [(0, r.jsxs)(t.CardHeader, {
                            children: [(0, r.jsx)("div", {
                                className: "w-12 h-12 rounded-xl bg-chart-3/10 flex items-center justify-center mb-3 group-hover:bg-chart-3 group-hover:scale-110 transition-all text-2xl",
                                children: "📖"
                            }), (0, r.jsx)(t.CardTitle, {
                                className: "text-lg",
                                children: "Matérias"
                            }), (0, r.jsx)(t.CardDescription, {
                                children: "Conteúdos organizados por disciplina"
                            })]
                        }), (0, r.jsx)(t.CardContent, {
                            children: (0, r.jsx)(s.default, {
                                href: "/materias",
                                children: (0, r.jsx)(n.Button, {
                                    className: "w-full bg-transparent",
                                    size: "lg",
                                    variant: "outline",
                                    children: "Ver Matérias"
                                })
                            })
                        })]
                    }), (0, r.jsxs)(t.Card, {
                        className: "hover:shadow-lg transition-all cursor-pointer group border-2 hover:border-chart-4",
                        children: [(0, r.jsxs)(t.CardHeader, {
                            children: [(0, r.jsx)("div", {
                                className: "w-12 h-12 rounded-xl bg-chart-4/10 flex items-center justify-center mb-3 group-hover:bg-chart-4 group-hover:scale-110 transition-all text-2xl",
                                children: "💡"
                            }), (0, r.jsx)(t.CardTitle, {
                                className: "text-lg",
                                children: "Dicas ENEM"
                            }), (0, r.jsx)(t.CardDescription, {
                                children: "Estratégias e técnicas de estudo"
                            })]
                        }), (0, r.jsx)(t.CardContent, {
                            children: (0, r.jsx)(s.default, {
                                href: "/dicas",
                                children: (0, r.jsx)(n.Button, {
                                    className: "w-full bg-transparent",
                                    size: "lg",
                                    variant: "outline",
                                    children: "Ver Dicas"
                                })
                            })
                        })]
                    }), (0, r.jsxs)(t.Card, {
                        className: "hover:shadow-lg transition-all cursor-pointer group border-2 hover:border-chart-5",
                        children: [(0, r.jsxs)(t.CardHeader, {
                            children: [(0, r.jsx)("div", {
                                className: "w-12 h-12 rounded-xl bg-chart-5/10 flex items-center justify-center mb-3 group-hover:bg-chart-5 group-hover:scale-110 transition-all text-2xl",
                                children: "📊"
                            }), (0, r.jsx)(t.CardTitle, {
                                className: "text-lg",
                                children: "Meu Desempenho"
                            }), (0, r.jsx)(t.CardDescription, {
                                children: "Análise completa do seu progresso"
                            })]
                        }), (0, r.jsx)(t.CardContent, {
                            children: (0, r.jsx)(s.default, {
                                href: "/desempenho",
                                children: (0, r.jsx)(n.Button, {
                                    className: "w-full bg-transparent",
                                    size: "lg",
                                    variant: "outline",
                                    children: "Ver Análise"
                                })
                            })
                        })]
                    })]
                }), (0, r.jsxs)("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                    children: [(0, r.jsx)(t.Card, {
                        children: (0, r.jsxs)(t.CardHeader, {
                            className: "pb-3",
                            children: [(0, r.jsx)(t.CardDescription, {
                                children: "Questões Respondidas"
                            }), (0, r.jsx)(t.CardTitle, {
                                className: "text-3xl text-primary",
                                children: e.questionsAnswered
                            })]
                        })
                    }), (0, r.jsx)(t.Card, {
                        children: (0, r.jsxs)(t.CardHeader, {
                            className: "pb-3",
                            children: [(0, r.jsx)(t.CardDescription, {
                                children: "Taxa de Acerto"
                            }), (0, r.jsxs)(t.CardTitle, {
                                className: "text-3xl text-chart-3",
                                children: [p, "%"]
                            })]
                        })
                    }), (0, r.jsx)(t.Card, {
                        children: (0, r.jsxs)(t.CardHeader, {
                            className: "pb-3",
                            children: [(0, r.jsx)(t.CardDescription, {
                                children: "Redações Corrigidas"
                            }), (0, r.jsx)(t.CardTitle, {
                                className: "text-3xl text-accent",
                                children: e.essaysWritten
                            })]
                        })
                    })]
                })]
            })]
        })
    }
    e.s(["default", () => c])
}]);