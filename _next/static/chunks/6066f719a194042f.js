(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 69756, e => {
    "use strict";
    var t = e.i(75305);
    e.i(23674);
    var r = e.i(84739),
        a = e.i(1972),
        i = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e, i) => {
            let s = t.forwardRef((e, t) => {
                let {
                    asChild: s,
                    ...n
                } = e, o = s ? r.Slot : i;
                return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, a.jsx)(o, { ...n,
                    ref: t
                })
            });
            return s.displayName = `Primitive.${i}`, { ...e,
                [i]: s
            }
        }, {});
    e.s(["Primitive", () => i])
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

    function i({
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

    function n({
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
    e.s(["Card", () => a, "CardContent", () => o, "CardDescription", () => n, "CardHeader", () => i, "CardTitle", () => s], 70065);
    var l = e.i(84739),
        d = e.i(7284);
    let c = e => "boolean" == typeof e ? `${e}` : 0 === e ? "0" : e,
        u = d.clsx,
        m = (e, t) => r => {
            var a;
            if ((null == t ? void 0 : t.variants) == null) return u(e, null == r ? void 0 : r.class, null == r ? void 0 : r.className);
            let {
                variants: i,
                defaultVariants: s
            } = t, n = Object.keys(i).map(e => {
                let t = null == r ? void 0 : r[e],
                    a = null == s ? void 0 : s[e];
                if (null === t) return null;
                let n = c(t) || c(a);
                return i[e][n]
            }), o = r && Object.entries(r).reduce((e, t) => {
                let [r, a] = t;
                return void 0 === a || (e[r] = a), e
            }, {});
            return u(e, n, null == t || null == (a = t.compoundVariants) ? void 0 : a.reduce((e, t) => {
                let {
                    class: r,
                    className: a,
                    ...i
                } = t;
                return Object.entries(i).every(e => {
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
    let v = m("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
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
        size: i,
        asChild: s = !1,
        ...n
    }) {
        let o = s ? l.Slot : "button";
        return (0, t.jsx)(o, {
            "data-slot": "button",
            className: (0, r.cn)(v({
                variant: a,
                size: i,
                className: e
            })),
            ...n
        })
    }
    e.s(["Button", () => p], 67881)
}, 10708, e => {
    "use strict";
    var t = e.i(1972),
        r = e.i(75305),
        a = e.i(69756),
        i = r.forwardRef((e, r) => (0, t.jsx)(a.Primitive.label, { ...e,
            ref: r,
            onMouseDown: t => {
                t.target.closest("button, input, select, textarea") || (e.onMouseDown ? .(t), !t.defaultPrevented && t.detail > 1 && t.preventDefault())
            }
        }));
    i.displayName = "Label";
    var s = e.i(47163);

    function n({
        className: e,
        ...r
    }) {
        return (0, t.jsx)(i, {
            "data-slot": "label",
            className: (0, s.cn)("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", e),
            ...r
        })
    }
    e.s(["Label", () => n], 10708)
}, 23750, e => {
    "use strict";
    var t = e.i(1972),
        r = e.i(47163);

    function a({
        className: e,
        type: a,
        ...i
    }) {
        return (0, t.jsx)("input", {
            type: a,
            "data-slot": "input",
            className: (0, r.cn)("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", e),
            ...i
        })
    }
    e.s(["Input", () => a])
}, 89954, e => {
    "use strict";
    var t = e.i(1972),
        r = e.i(75305),
        a = e.i(70065),
        i = e.i(67881),
        s = e.i(23750),
        n = e.i(10708),
        o = e.i(91432),
        l = e.i(30499);

    function d() {
        let [e, d] = (0, r.useState)(!0), [c, u] = (0, r.useState)(""), [m, v] = (0, r.useState)(""), [p, x] = (0, r.useState)(""), [g, b] = (0, r.useState)(""), {
            login: f,
            register: h
        } = (0, o.useAuth)(), j = (0, l.useRouter)();
        return (0, t.jsx)("div", {
            className: "min-h-screen bg-background flex items-center justify-center px-4",
            children: (0, t.jsxs)("div", {
                className: "w-full max-w-md",
                children: [(0, t.jsx)("div", {
                    className: "flex justify-center mb-8",
                    children: (0, t.jsx)("img", {
                        src: "/logo.png",
                        alt: "AprovaENEM Logo",
                        className: "w-32 h-32 object-contain"
                    })
                }), (0, t.jsxs)(a.Card, {
                    children: [(0, t.jsxs)(a.CardHeader, {
                        className: "space-y-1",
                        children: [(0, t.jsx)(a.CardTitle, {
                            className: "text-2xl text-center",
                            children: e ? "Entrar" : "Criar Conta"
                        }), (0, t.jsx)(a.CardDescription, {
                            className: "text-center",
                            children: e ? "Entre com seu email e senha para continuar" : "Crie sua conta para começar a estudar"
                        })]
                    }), (0, t.jsx)(a.CardContent, {
                        children: (0, t.jsxs)("form", {
                            onSubmit: t => {
                                if (t.preventDefault(), b(""), e) f(c, m) ? j.push("/") : b("Email ou senha incorretos");
                                else {
                                    if ("" === p.trim()) return void b("Por favor, insira seu nome");
                                    h(c, m, p) ? j.push("/") : b("Este email já está cadastrado")
                                }
                            },
                            className: "space-y-4",
                            children: [!e && (0, t.jsxs)("div", {
                                className: "space-y-2",
                                children: [(0, t.jsx)(n.Label, {
                                    htmlFor: "name",
                                    children: "Nome Completo"
                                }), (0, t.jsx)(s.Input, {
                                    id: "name",
                                    type: "text",
                                    placeholder: "Seu nome",
                                    value: p,
                                    onChange: e => x(e.target.value),
                                    required: !e
                                })]
                            }), (0, t.jsxs)("div", {
                                className: "space-y-2",
                                children: [(0, t.jsx)(n.Label, {
                                    htmlFor: "email",
                                    children: "Email"
                                }), (0, t.jsx)(s.Input, {
                                    id: "email",
                                    type: "email",
                                    placeholder: "seu@email.com",
                                    value: c,
                                    onChange: e => u(e.target.value),
                                    required: !0
                                })]
                            }), (0, t.jsxs)("div", {
                                className: "space-y-2",
                                children: [(0, t.jsx)(n.Label, {
                                    htmlFor: "password",
                                    children: "Senha"
                                }), (0, t.jsx)(s.Input, {
                                    id: "password",
                                    type: "password",
                                    placeholder: "••••••••",
                                    value: m,
                                    onChange: e => v(e.target.value),
                                    required: !0,
                                    minLength: 6
                                })]
                            }), g && (0, t.jsx)("div", {
                                className: "bg-destructive/10 text-destructive text-sm p-3 rounded-lg",
                                children: g
                            }), (0, t.jsx)(i.Button, {
                                type: "submit",
                                className: "w-full",
                                size: "lg",
                                children: e ? "Entrar" : "Criar Conta"
                            }), (0, t.jsx)("div", {
                                className: "text-center text-sm",
                                children: (0, t.jsx)("button", {
                                    type: "button",
                                    onClick: () => {
                                        d(!e), b("")
                                    },
                                    className: "text-primary hover:underline",
                                    children: e ? "Não tem conta? Criar conta" : "Já tem conta? Fazer login"
                                })
                            })]
                        })
                    })]
                })]
            })
        })
    }
    e.s(["default", () => d])
}]);