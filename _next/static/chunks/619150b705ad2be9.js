(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 4032, e => {
    "use strict";
    var t = e.i(1972),
        s = e.i(75305);
    let a = {
            questionsAnswered: 0,
            correctAnswers: 0,
            studyHours: 0,
            essaysWritten: 0,
            testResults: [],
            essayResults: [],
            subjectStats: {
                linguagens: {
                    correct: 0,
                    total: 0
                },
                matematica: {
                    correct: 0,
                    total: 0
                },
                humanas: {
                    correct: 0,
                    total: 0
                },
                natureza: {
                    correct: 0,
                    total: 0
                }
            }
        },
        r = (0, s.createContext)(void 0);

    function o({
        children: e
    }) {
        let [o, l] = (0, s.useState)(a);
        return (0, s.useEffect)(() => {
            console.log("[v0] StudyDataProvider mounted, loading from localStorage");
            let e = localStorage.getItem("enem-study-data");
            if (e) try {
                let t = JSON.parse(e);
                console.log("[v0] Loaded data from localStorage:", t), l(t)
            } catch (e) {
                console.error("[v0] Failed to load study data:", e)
            } else console.log("[v0] No saved data found, using initial data")
        }, []), (0, s.useEffect)(() => {
            console.log("[v0] Saving data to localStorage:", o), localStorage.setItem("enem-study-data", JSON.stringify(o))
        }, [o]), (0, t.jsx)(r.Provider, {
            value: {
                data: o,
                addTestResult: e => {
                    console.log("[v0] addTestResult called with:", e), l(t => {
                        console.log("[v0] Previous data:", t);
                        let s = { ...t
                        };
                        s.testResults = [...t.testResults, e], s.questionsAnswered = t.questionsAnswered + e.total, s.correctAnswers = t.correctAnswers + e.correct;
                        let a = e.subject.toLowerCase();
                        if ("matemática" === a && (a = "matematica"), "ciências humanas" === a && (a = "humanas"), "ciências da natureza" === a && (a = "natureza"), s.subjectStats[a]) {
                            let t = s.subjectStats[a];
                            s.subjectStats[a] = {
                                correct: t.correct + e.correct,
                                total: t.total + e.total
                            }, console.log("[v0] Updated subject stats for", a, ":", s.subjectStats[a])
                        } else console.log("[v0] Subject not found in stats:", e.subject, "normalized:", a);
                        return s.studyHours = t.studyHours + Math.round(e.timeSpent / 3600 * 10) / 10, console.log("[v0] New data after test result:", {
                            questionsAnswered: s.questionsAnswered,
                            correctAnswers: s.correctAnswers,
                            studyHours: s.studyHours,
                            subjectStats: s.subjectStats
                        }), s
                    })
                },
                addEssayResult: e => {
                    l(t => ({ ...t,
                        essayResults: [...t.essayResults, e],
                        essaysWritten: t.essaysWritten + 1,
                        studyHours: t.studyHours + 1
                    }))
                },
                resetData: () => {
                    l(a), localStorage.removeItem("enem-study-data")
                }
            },
            children: e
        })
    }

    function l() {
        let e = (0, s.useContext)(r);
        if (!e) throw Error("useStudyData must be used within StudyDataProvider");
        return e
    }
    e.s(["StudyDataProvider", () => o, "useStudyData", () => l])
}, 30499, (e, t, s) => {
    t.exports = e.r(49725)
}, 91432, e => {
    "use strict";
    var t = e.i(1972),
        s = e.i(75305),
        a = e.i(30499);
    let r = (0, s.createContext)(void 0);

    function o({
        children: e
    }) {
        let [o, l] = (0, s.useState)(null), [u, n] = (0, s.useState)(!1), c = (0, a.useRouter)();
        return (0, s.useEffect)(() => {
            let e = localStorage.getItem("enemapp_user");
            e && (l(JSON.parse(e)), n(!0))
        }, []), (0, t.jsx)(r.Provider, {
            value: {
                user: o,
                isAuthenticated: u,
                login: (e, t) => {
                    let s = localStorage.getItem("enemapp_credentials");
                    if (s) {
                        let a = JSON.parse(s);
                        if (a.email === e && a.password === t) {
                            let t = {
                                email: e,
                                name: a.name
                            };
                            return l(t), n(!0), localStorage.setItem("enemapp_user", JSON.stringify(t)), !0
                        }
                    }
                    return !1
                },
                register: (e, t, s) => {
                    let a = localStorage.getItem("enemapp_credentials");
                    if (a && JSON.parse(a).email === e) return !1;
                    localStorage.setItem("enemapp_credentials", JSON.stringify({
                        email: e,
                        password: t,
                        name: s
                    }));
                    let r = {
                        email: e,
                        name: s
                    };
                    return l(r), n(!0), localStorage.setItem("enemapp_user", JSON.stringify(r)), !0
                },
                logout: () => {
                    l(null), n(!1), localStorage.removeItem("enemapp_user"), c.push("/login")
                },
                updateProfile: (e, t) => {
                    if (o) {
                        let s = { ...o,
                            name: e,
                            email: t
                        };
                        l(s), localStorage.setItem("enemapp_user", JSON.stringify(s));
                        let a = localStorage.getItem("enemapp_credentials");
                        if (a) {
                            let s = JSON.parse(a);
                            localStorage.setItem("enemapp_credentials", JSON.stringify({ ...s,
                                name: e,
                                email: t
                            }))
                        }
                    }
                }
            },
            children: e
        })
    }

    function l() {
        let e = (0, s.useContext)(r);
        if (void 0 === e) throw Error("useAuth must be used within an AuthProvider");
        return e
    }
    e.s(["AuthProvider", () => o, "useAuth", () => l])
}]);