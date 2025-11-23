(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 64462, (e, t, r) => {
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
            return h
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
            return m
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
    async function m(e, t) {
        let r = t.res || t.ctx && t.ctx.res;
        if (!e.getInitialProps) return t.ctx && t.Component ? {
            pageProps: await m(t.Component, t.ctx)
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
    let h = "undefined" != typeof performance,
        g = h && ["mark", "measure", "getEntriesByName"].every(e => "function" == typeof performance[e]);
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
        m = e.r(26856),
        h = e.r(64914);

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
                prefetch: C = null,
                passHref: P,
                replace: w,
                shallow: E,
                scroll: _,
                onClick: O,
                onMouseEnter: S,
                onTouchStart: k,
                legacyBehavior: T = !1,
                onNavigate: R,
                ref: M,
                unstable_dynamicOnHover: A,
                ...L
            } = t;
        n = N, T && ("string" == typeof n || "number" == typeof n) && (n = (0, o.jsx)("a", {
            children: n
        }));
        let I = s.default.useContext(u.AppRouterContext),
            $ = !1 !== C,
            U = !1 !== C ? null === (r = C) || "auto" === r ? h.FetchStrategy.PPR : h.FetchStrategy.Full : h.FetchStrategy.PPR,
            {
                href: z,
                as: D
            } = s.default.useMemo(() => {
                let e = g(y);
                return {
                    href: e,
                    as: j ? g(j) : e
                }
            }, [y, j]);
        if (T) {
            if (n ? .$$typeof === Symbol.for("react.lazy")) throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."), "__NEXT_ERROR_CODE", {
                value: "E863",
                enumerable: !1,
                configurable: !0
            });
            a = s.default.Children.only(n)
        }
        let B = T ? a && "object" == typeof a && a.ref : M,
            F = s.default.useCallback(e => (null !== I && (x.current = (0, p.mountLinkInstance)(e, z, I, U, $, v)), () => {
                x.current && ((0, p.unmountLinkForCurrentNavigation)(x.current), x.current = null), (0, p.unmountPrefetchableInstance)(e)
            }), [$, z, I, U, v]),
            K = {
                ref: (0, c.useMergedRef)(F, B),
                onClick(t) {
                    T || "function" != typeof O || O(t), T && a.props && "function" == typeof a.props.onClick && a.props.onClick(t), !I || t.defaultPrevented || function(t, r, n, a, i, o, l) {
                        if ("undefined" != typeof window) {
                            let u, {
                                nodeName: c
                            } = t.currentTarget;
                            if ("A" === c.toUpperCase() && ((u = t.currentTarget.getAttribute("target")) && "_self" !== u || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && 2 === t.nativeEvent.which) || t.currentTarget.hasAttribute("download")) return;
                            if (!(0, m.isLocalURL)(r)) {
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
                    }(t, z, D, x, w, _, R)
                },
                onMouseEnter(e) {
                    T || "function" != typeof S || S(e), T && a.props && "function" == typeof a.props.onMouseEnter && a.props.onMouseEnter(e), I && $ && (0, p.onNavigationIntent)(e.currentTarget, !0 === A)
                },
                onTouchStart: function(e) {
                    T || "function" != typeof k || k(e), T && a.props && "function" == typeof a.props.onTouchStart && a.props.onTouchStart(e), I && $ && (0, p.onNavigationIntent)(e.currentTarget, !0 === A)
                }
            };
        return (0, d.isAbsoluteUrl)(D) ? K.href = D : T && !P && ("a" !== a.type || "href" in a.props) || (K.href = (0, f.addBasePath)(D)), i = T ? s.default.cloneElement(a, K) : (0, o.jsx)("a", { ...L,
            ...K,
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
}, 69756, e => {
    "use strict";
    var t = e.i(75305);
    e.i(23674);
    var r = e.i(84739),
        n = e.i(1972),
        a = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e, a) => {
            let i = t.forwardRef((e, t) => {
                let {
                    asChild: i,
                    ...o
                } = e, s = i ? r.Slot : a;
                return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, n.jsx)(s, { ...o,
                    ref: t
                })
            });
            return i.displayName = `Primitive.${a}`, { ...e,
                [a]: i
            }
        }, {});
    e.s(["Primitive", () => a])
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

    function m({
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
    e.s(["Button", () => m], 67881)
}, 10708, e => {
    "use strict";
    var t = e.i(1972),
        r = e.i(75305),
        n = e.i(69756),
        a = r.forwardRef((e, r) => (0, t.jsx)(n.Primitive.label, { ...e,
            ref: r,
            onMouseDown: t => {
                t.target.closest("button, input, select, textarea") || (e.onMouseDown ? .(t), !t.defaultPrevented && t.detail > 1 && t.preventDefault())
            }
        }));
    a.displayName = "Label";
    var i = e.i(47163);

    function o({
        className: e,
        ...r
    }) {
        return (0, t.jsx)(a, {
            "data-slot": "label",
            className: (0, i.cn)("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", e),
            ...r
        })
    }
    e.s(["Label", () => o], 10708)
}, 23750, e => {
    "use strict";
    var t = e.i(1972),
        r = e.i(47163);

    function n({
        className: e,
        type: n,
        ...a
    }) {
        return (0, t.jsx)("input", {
            type: n,
            "data-slot": "input",
            className: (0, r.cn)("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", e),
            ...a
        })
    }
    e.s(["Input", () => n])
}, 42784, e => {
    "use strict";
    var t = e.i(1972),
        r = e.i(75305),
        n = e.i(70065),
        a = e.i(67881),
        i = e.i(23750),
        o = e.i(10708),
        s = e.i(91432),
        l = e.i(30499),
        u = e.i(2854);

    function c() {
        let {
            user: e,
            isAuthenticated: c,
            logout: d,
            updateProfile: f
        } = (0, s.useAuth)(), p = (0, l.useRouter)(), [m, h] = (0, r.useState)(""), [g, v] = (0, r.useState)(""), [b, x] = (0, r.useState)(!1), [y, j] = (0, r.useState)("");
        return ((0, r.useEffect)(() => {
            c ? e && (h(e.name), v(e.email)) : p.push("/login")
        }, [c, e, p]), c && e) ? (0, t.jsxs)("div", {
            className: "min-h-screen bg-background",
            children: [(0, t.jsx)("header", {
                className: "border-b bg-card sticky top-0 z-50",
                children: (0, t.jsx)("div", {
                    className: "container mx-auto px-4 py-4",
                    children: (0, t.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [(0, t.jsxs)(u.default, {
                            href: "/",
                            className: "flex items-center gap-2",
                            children: [(0, t.jsx)("img", {
                                src: "/logo.png",
                                alt: "AprovaENEM Logo",
                                className: "w-10 h-10 object-contain"
                            }), (0, t.jsxs)("div", {
                                children: [(0, t.jsx)("h1", {
                                    className: "text-xl font-bold text-foreground",
                                    children: "AprovaENEM"
                                }), (0, t.jsx)("p", {
                                    className: "text-xs text-muted-foreground",
                                    children: "Sua aprovação começa aqui"
                                })]
                            })]
                        }), (0, t.jsx)(u.default, {
                            href: "/",
                            children: (0, t.jsx)(a.Button, {
                                variant: "outline",
                                size: "sm",
                                children: "Voltar ao Início"
                            })
                        })]
                    })
                })
            }), (0, t.jsxs)("main", {
                className: "container mx-auto px-4 py-8 max-w-2xl",
                children: [(0, t.jsxs)("div", {
                    className: "mb-8",
                    children: [(0, t.jsx)("h2", {
                        className: "text-3xl font-bold text-foreground mb-2",
                        children: "Meu Perfil"
                    }), (0, t.jsx)("p", {
                        className: "text-muted-foreground",
                        children: "Gerencie suas informações pessoais"
                    })]
                }), y && (0, t.jsx)("div", {
                    className: "mb-6 bg-chart-3/10 text-chart-3 p-4 rounded-lg",
                    children: y
                }), (0, t.jsxs)(n.Card, {
                    children: [(0, t.jsxs)(n.CardHeader, {
                        children: [(0, t.jsx)(n.CardTitle, {
                            children: "Informações Pessoais"
                        }), (0, t.jsx)(n.CardDescription, {
                            children: "Seus dados de cadastro no AprovaENEM"
                        })]
                    }), (0, t.jsx)(n.CardContent, {
                        children: (0, t.jsxs)("form", {
                            onSubmit: e => {
                                e.preventDefault(), f(m, g), x(!1), j("Perfil atualizado com sucesso!"), setTimeout(() => j(""), 3e3)
                            },
                            className: "space-y-4",
                            children: [(0, t.jsxs)("div", {
                                className: "space-y-2",
                                children: [(0, t.jsx)(o.Label, {
                                    htmlFor: "name",
                                    children: "Nome Completo"
                                }), (0, t.jsx)(i.Input, {
                                    id: "name",
                                    type: "text",
                                    value: m,
                                    onChange: e => h(e.target.value),
                                    disabled: !b,
                                    required: !0
                                })]
                            }), (0, t.jsxs)("div", {
                                className: "space-y-2",
                                children: [(0, t.jsx)(o.Label, {
                                    htmlFor: "email",
                                    children: "Email"
                                }), (0, t.jsx)(i.Input, {
                                    id: "email",
                                    type: "email",
                                    value: g,
                                    onChange: e => v(e.target.value),
                                    disabled: !b,
                                    required: !0
                                })]
                            }), (0, t.jsx)("div", {
                                className: "flex gap-3 pt-4",
                                children: b ? (0, t.jsxs)(t.Fragment, {
                                    children: [(0, t.jsx)(a.Button, {
                                        type: "submit",
                                        className: "flex-1",
                                        children: "Salvar Alterações"
                                    }), (0, t.jsx)(a.Button, {
                                        type: "button",
                                        variant: "outline",
                                        onClick: () => {
                                            x(!1), h(e.name), v(e.email)
                                        },
                                        className: "flex-1",
                                        children: "Cancelar"
                                    })]
                                }) : (0, t.jsx)(a.Button, {
                                    type: "button",
                                    onClick: () => x(!0),
                                    className: "w-full",
                                    children: "Editar Perfil"
                                })
                            })]
                        })
                    })]
                }), (0, t.jsxs)(n.Card, {
                    className: "mt-6 border-destructive/20",
                    children: [(0, t.jsxs)(n.CardHeader, {
                        children: [(0, t.jsx)(n.CardTitle, {
                            className: "text-destructive",
                            children: "Sair da Conta"
                        }), (0, t.jsx)(n.CardDescription, {
                            children: "Você precisará fazer login novamente para acessar o app"
                        })]
                    }), (0, t.jsx)(n.CardContent, {
                        children: (0, t.jsx)(a.Button, {
                            variant: "destructive",
                            onClick: () => {
                                confirm("Tem certeza que deseja sair?") && d()
                            },
                            className: "w-full",
                            children: "Sair da Conta"
                        })
                    })]
                })]
            })]
        }) : null
    }
    e.s(["default", () => c])
}]);