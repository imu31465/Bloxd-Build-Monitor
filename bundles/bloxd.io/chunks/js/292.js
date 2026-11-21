export const id = 292;
export const ids = [292];
export const modules = {
  41434: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      default: () => qd
    });
    var pd = kd(56),
      Nd = kd(4620),
      Wd = kd(1714),
      Pd = kd(1044),
      Zd = kd.n(Pd),
      gd = kd(1461),
      Cd = kd(1211),
      Kd = kd(4583),
      od = kd(4599),
      ld = kd(4603),
      Qd = kd(1103);

    function Ld(dd) {
      return dd.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    Kd.d.registerLanguage("javascript", od.b), Kd.d.registerLanguage("typescript", ld.d);

    function Od(dd, Jd) {
      const kd = Ld(dd).replace(/"/g, "&quot;");
      return `<button type="button" class="DocsCopyButton ${Jd}" title="${kd}" aria-label="${kd}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5"/><path d="M10.5 3.5V1.5H1.5v9h2"/></svg><svg class="DocsCopiedIcon" viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 8.5l3.5 3.5 7.5-7.5"/></svg></button>`
    }

    function ed(dd, Jd) {
      const kd = [],
        pd = dd.toLowerCase(),
        Nd = Jd.toLowerCase();
      let Wd = 0;
      for (; Wd < dd.length;) {
        const Pd = pd.indexOf(Nd, Wd);
        if (-1 === Pd) {
          kd.push(dd.slice(Wd));
          break
        }
        Pd > Wd && kd.push(dd.slice(Wd, Pd)), kd.push((0, Qd.jsx)("mark", {
          className: "DocsHighlight",
          children: dd.slice(Pd, Pd + Jd.length)
        }, Pd)), Wd = Pd + Jd.length
      }
      return kd
    }
    var Rd = kd(1059),
      Id = kd(1384),
      Gd = kd(37061),
      vd = kd(37068);
    const xd = {
        clientOptions: {
          tabStep: "docsClientOptionsTab",
          tabText: "codeEditor:tutorialClientOptionsTab",
          pageStep: "docsClientOptions",
          pageText: "codeEditor:tutorialClientOptions"
        },
        apiReference: {
          tabStep: "docsApiReferenceTab",
          tabText: "codeEditor:tutorialApiReferenceTab",
          pageStep: "docsApiReference",
          pageText: "codeEditor:tutorialApiReference"
        },
        callbacks: {
          tabStep: "docsCallbacksTab",
          tabText: "codeEditor:tutorialCallbacksTab",
          pageStep: "docsCallbacks",
          pageText: "codeEditor:tutorialCallbacks"
        }
      },
      qd = (0, pd.memo)((function(dd) {
        var Jd, kd, Pd, od, ld, qd, Bd;
        let {
          popOutDocs: sd,
          hideDocs: ad,
          tutorialEnabled: Md
        } = dd;
        const [Fd, Yd] = (0, pd.useState)(Nd.e[0].id), md = (0, pd.useRef)(null), bd = (0, pd.useRef)(null), [Sd, jd] = (0, pd.useState)(""), [Xd, fd] = (0, pd.useState)(0), [nd, Ud] = (0, pd.useState)(null), [yd, Dd] = (0, pd.useState)(!1), [Td, Ed] = (0, pd.useState)(160), cd = (0, pd.useRef)(!1), hd = (0, pd.useRef)(null), rd = (0, Gd.j)("docsOverview"), [ud, td] = (0, pd.useState)(0), Vd = Object.values(xd).some((dd => (null === dd || void 0 === dd ? void 0 : dd.tabStep) === rd));
        (0, pd.useEffect)((() => {
          Vd && Sd.length > 0 && (jd(""), td((dd => dd + 1)))
        }), [Vd, Sd]);
        const zd = Sd.length > 0,
          Hd = (0, pd.useMemo)((() => function(dd) {
            if (!dd) return [];
            const Jd = dd.toLowerCase(),
              kd = [];
            for (const pd of Nd.e) {
              const dd = pd.content.toLowerCase();
              let Nd = 0,
                Wd = -1,
                Pd = 0,
                Zd = dd.indexOf(Jd, Pd);
              for (; - 1 !== Zd;) - 1 === Wd && (Wd = Zd), Nd++, Pd = Zd + Jd.length, Zd = dd.indexOf(Jd, Pd);
              if (0 === Nd) continue;
              const gd = Math.max(0, Wd - 40),
                Cd = Math.min(pd.content.length, Wd + Jd.length + 40),
                Kd = (gd > 0 ? "..." : "") + pd.content.slice(gd, Cd).replace(/\n/g, " ") + (Cd < pd.content.length ? "..." : "");
              kd.push({
                doc: pd,
                matchCount: Nd,
                snippet: Kd
              })
            }
            return kd.sort(((dd, Jd) => Jd.matchCount - dd.matchCount)), kd
          }(Sd)), [Sd]),
          wd = zd ? null !== (Jd = null !== (kd = null === (Pd = Hd.find((dd => dd.doc.id === Fd))) || void 0 === Pd ? void 0 : Pd.doc) && void 0 !== kd ? kd : null === (od = Hd[0]) || void 0 === od ? void 0 : od.doc) && void 0 !== Jd ? Jd : null : null !== (ld = Nd.e.find((dd => dd.id === Fd))) && void 0 !== ld ? ld : Nd.e[0],
          {
            t: Ad
          } = (0, Cd.B)(),
          dJ = Ad("codeEditor:copySnippet"),
          JJ = (0, pd.useMemo)((() => wd ? function(dd, Jd, kd, pd) {
            let Nd = Jd;
            Nd = Nd.replace(/\r\n/g, "\n");
            const Wd = [];
            Nd = Nd.replace(/```(\w*)\n([\s\S]*?)```/g, ((dd, Jd, pd) => {
              const Nd = Wd.length;
              let Pd = Ld(pd);
              try {
                Pd = Kd.d.highlight(pd.trimEnd(), {
                  language: Jd
                }).value
              } catch (Zd) {
                console.warn("Could not highlight documentation code block", Zd)
              }
              return Wd.push(`<div class="DocsCodeBlockRow"><pre class="DocsCodeBlock" data-lang="${Jd}"><code>${Pd}</code></pre>${Od(kd,"DocsCopyBlock")}</div>`), `\0PLACEHOLDER_${Nd}\0`
            })), Nd = Nd.replace(/(`{1,2})([^\n]+?)\1(?!`)/g, ((Jd, pd, Nd) => {
              const Pd = Wd.length,
                Zd = 2 === pd.length ? Nd.replace(/^ (.*) $/, "$1") : Nd;
              let gd = Ld(Zd);
              try {
                "apiReference" !== dd && "callbacks" !== dd || (gd = Kd.d.highlight(Zd.trimEnd().replaceAll("\\|", "|"), {
                  language: "typescript"
                }).value)
              } catch (Cd) {
                console.warn("Could not highlight documentation snippet", Cd)
              }
              return Wd.push(`<span class="DocsInlineCodeRow"><code class="DocsInlineCode">${gd}</code>${Od(kd,"DocsCopyInline")}</span>`), `\0PLACEHOLDER_${Pd}\0`
            })), Nd = Ld(Nd), Nd = Nd.replace(/^#### (.+)$/gm, '<h4 class="DocsH4">$1</h4>'), Nd = Nd.replace(/^### (.+)$/gm, '<h3 class="DocsH3">$1</h3>'), Nd = Nd.replace(/^## (.+)$/gm, '<h2 class="DocsH2">$1</h2>'), Nd = Nd.replace(/^# (.+)$/gm, '<h1 class="DocsH1">$1</h1>'), Nd = Nd.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"), Nd = Nd.replace(/\[([^\]]+)\]\(([^)]+)\)/g, ((dd, Jd, kd) => kd.startsWith("#") ? `<a class="DocsAnchor" data-id="${kd}">${Jd}</a>` : `<a href="${kd}" target="_blank" rel="noopener noreferrer">${Jd}</a>`)), Nd = Nd.replace(/^(\|.+\|)\n(\|[\s:\-|]+\|)\n((?:\|.+\|\s*\r?\n?)*)/gm, ((dd, Jd, kd, pd) => `<table class="DocsTable"><thead><tr>${Jd.split("|").slice(1,-1).map((dd=>`<th>${dd.trim()}</th>`)).join("")}</tr></thead><tbody>${pd.trim().split("\n").map((dd=>`<tr>${dd.split("|").slice(1,-1).map((dd=>`<td>${dd.trim()}</td>`)).join("")}</tr>`)).join("")}</tbody></table>`)), Nd = Nd.replace(/(?:^[ \t]*([*-])[ \t]+.+(?:\n|$))+/gm, ((dd, Jd) => function(dd, Jd) {
              const kd = "*" === Jd,
                pd = [];
              for (const Zd of dd.split("\n")) {
                const dd = Zd.match(/^([ \t]*)(?:[*-])[ \t]+(.+)$/);
                dd && pd.push({
                  indent: dd[1].replace(/\t/g, "  ").length,
                  content: dd[2]
                })
              }
              let Nd = "";
              const Wd = [],
                Pd = kd ? "ol" : "ul";
              for (const {
                  indent: Zd,
                  content: gd
                }
                of pd) {
                for (; Wd.length > 0 && Zd < Wd[Wd.length - 1];) Nd += `</${Pd}></li>`, Wd.pop();
                (0 === Wd.length || Zd > Wd[Wd.length - 1]) && (Wd.length > 0 && (Nd = Nd.replace(/<\/li>$/, "")), Nd += `<${Pd} class="DocsList">`, Wd.push(Zd)), Nd += `<li class="DocsListItem">${gd}</li>`
              }
              for (; Wd.length > 0;) Nd += `</${Pd}>`, Wd.pop(), Wd.length > 0 && (Nd += "</li>");
              return Nd
            }(dd, Jd))), Nd = Nd.replace(/\n{2,}/g, "\n<br/>\n");
            for (let Pd = 0; Pd < Wd.length; Pd++) Nd = Nd.replace(`\0PLACEHOLDER_${Pd}\0`, Wd[Pd]);
            if (pd) {
              const dd = Ld(pd).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                Jd = new RegExp(dd, "gi");
              Nd = Nd.replace(/([^<>]+)(?=<|$)/g, (dd => dd.replace(Jd, (dd => `<mark class="DocsHighlight">${dd}</mark>`))))
            }
            return Nd
          }(wd.id, wd.content, dJ, zd ? Sd : void 0) : ""), [wd, dJ, zd, Sd]);
        (0, pd.useEffect)((() => {
          const dd = bd.current;
          if (!dd) return;
          const Jd = dd => {
            var Jd, kd, pd, Nd, Wd;
            const Pd = null === (Jd = (kd = dd.target).closest) || void 0 === Jd ? void 0 : Jd.call(kd, ".DocsCopyButton");
            if (!Pd) return;
            dd.preventDefault(), dd.stopPropagation();
            const Zd = null !== (pd = null === (Nd = Pd.parentElement) || void 0 === Nd || null === (Wd = Nd.querySelector("code")) || void 0 === Wd ? void 0 : Wd.textContent) && void 0 !== pd ? pd : "";
            navigator.clipboard.writeText(Zd.trimEnd()).then((() => {
              Pd.classList.add("Copied"), setTimeout((() => {
                Pd.classList.remove("Copied")
              }), 1500)
            })).catch((dd => {
              console.warn("Could not copy documentation code", dd)
            }))
          };
          return dd.addEventListener("click", Jd, !0), () => {
            dd.removeEventListener("click", Jd, !0)
          }
        }), []);
        const [kJ, pJ] = (0, pd.useState)(0);
        (0, pd.useEffect)((() => {
          if (!zd || !bd.current) return void pJ(0);
          const dd = bd.current.querySelectorAll(".DocsHighlight").length;
          pJ(dd)
        }), [zd, JJ]), (0, pd.useEffect)((() => {
          if (null === nd || !bd.current) return;
          Ud(null);
          const dd = bd.current.querySelectorAll(".DocsHighlight");
          if (0 === dd.length) return;
          const Jd = Math.min(nd, dd.length - 1);
          fd(Jd), dd.forEach((dd => {
            dd.classList.remove("DocsHighlightActive")
          })), dd[Jd].classList.add("DocsHighlightActive"), dd[Jd].scrollIntoView({
            block: "center",
            behavior: "smooth"
          })
        }), [nd, JJ]);
        const NJ = (0, pd.useCallback)((dd => {
            if (!bd.current) return;
            const Jd = bd.current.querySelectorAll(".DocsHighlight");
            if (0 === Jd.length) return;
            const kd = (Xd + dd + Jd.length) % Jd.length;
            fd(kd), Ud(kd)
          }), [Xd]),
          WJ = (0, pd.useCallback)((dd => {
            var Jd;
            const kd = null === (Jd = xd[dd]) || void 0 === Jd ? void 0 : Jd.tabStep;
            kd && kd === rd && (0, vd.h)(kd), dd !== Fd ? (Dd(!0), Yd(dd), fd(0), bd.current && (bd.current.scrollTop = 0), zd && Ud(0)) : Dd(!yd)
          }), [zd, Fd, yd, rd]),
          PJ = (0, pd.useCallback)((dd => {
            var Jd;
            const kd = Array.from((null === (Jd = bd.current) || void 0 === Jd ? void 0 : Jd.querySelectorAll(".DocsH2, .DocsH3")) || []).find((Jd => {
              var kd;
              return null === (kd = Jd.textContent) || void 0 === kd ? void 0 : kd.includes(dd)
            }));
            kd && kd.scrollIntoView({
              block: "start",
              behavior: "smooth"
            })
          }), [bd]),
          ZJ = (0, pd.useCallback)((dd => {
            var Jd, kd;
            const pd = null !== (Jd = null === (kd = md.current) || void 0 === kd ? void 0 : kd.clientWidth) && void 0 !== Jd ? Jd : window.innerWidth,
              Nd = Math.max(120, pd - 200);
            return Math.min(Math.max(dd, 120), Nd)
          }), []),
          gJ = (0, pd.useCallback)((() => {
            var dd;
            cd.current && (cd.current = !1, null === (dd = md.current) || void 0 === dd || dd.classList.remove("DocsSidebarResizing"))
          }), []),
          CJ = (0, pd.useCallback)((dd => {
            var Jd;
            dd.preventDefault(), cd.current = !0, null === (Jd = md.current) || void 0 === Jd || Jd.classList.add("DocsSidebarResizing")
          }), []);
        (0, pd.useEffect)((() => {
          const dd = md.current,
            Jd = dd => {
              if (!cd.current || !md.current) return;
              const Jd = md.current.getBoundingClientRect().left;
              Ed(ZJ(dd.clientX - Jd))
            };
          return window.addEventListener("mousemove", Jd), window.addEventListener("mouseup", gJ), () => {
            window.removeEventListener("mousemove", Jd), window.removeEventListener("mouseup", gJ), null === dd || void 0 === dd || dd.classList.remove("DocsSidebarResizing")
          }
        }), [ZJ, gJ]);
        const KJ = (0, pd.useCallback)((dd => {
          if (dd) {
            const [Jd, kd] = dd.slice(1).split("-");
            kd && (hd.current = {
              docId: Jd,
              subsection: kd
            }), Jd && WJ(Jd)
          }
        }), [WJ]);
        (0, pd.useEffect)((() => {
          const dd = hd.current;
          dd && Fd === dd.docId && (setTimeout((() => {
            PJ(dd.subsection)
          }), 0), hd.current = null)
        })), (0, pd.useEffect)((() => {
          if (!bd.current) return;
          bd.current.querySelectorAll("a.DocsAnchor").forEach((dd => {
            dd.addEventListener("click", (Jd => {
              Jd.preventDefault(), KJ(dd.dataset.id)
            }))
          }))
        }), [Fd, KJ]);
        const oJ = Object.values(xd).find((dd => (null === dd || void 0 === dd ? void 0 : dd.pageStep) === rd));
        return (0, Qd.jsx)(Gd.h, {
          tutorial: "docsOverview",
          step: null !== (qd = null === oJ || void 0 === oJ ? void 0 : oJ.pageStep) && void 0 !== qd ? qd : "docsPanel",
          text: Ad(null !== (Bd = null === oJ || void 0 === oJ ? void 0 : oJ.pageText) && void 0 !== Bd ? Bd : "codeEditor:tutorialDocsPanel"),
          enabled: Md,
          placement: "left",
          onPrevious: oJ ? void 0 : ad,
          children: (0, Qd.jsxs)("div", {
            className: "DocsPanel",
            ref: md,
            children: [(0, Qd.jsxs)("div", {
              className: "DocsSidebar",
              style: {
                width: Td,
                minWidth: Td,
                maxWidth: Td
              },
              children: [(0, Qd.jsx)(Wd.e, {
                className: "DocsSearch",
                placeholderText: "\ud83d\udd0e Search docs...",
                onValueChange: dd => {
                  jd(dd), fd(0), Ud(0)
                }
              }, ud), (0, Qd.jsx)("div", {
                className: "DocsNavList",
                children: zd ? Hd.map((dd => (0, Qd.jsxs)("div", {
                  className: Zd()("DocsNavItem", "SearchResult", {
                    Active: dd.doc.id === (null === wd || void 0 === wd ? void 0 : wd.id)
                  }),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    WJ(dd.doc.id)
                  },
                  children: [(0, Qd.jsxs)("div", {
                    className: "SearchResultTitle",
                    children: [dd.doc.title, (0, Qd.jsx)("span", {
                      className: "SearchResultCount",
                      children: dd.matchCount
                    })]
                  }), (0, Qd.jsx)("div", {
                    className: "SearchResultSnippet",
                    children: ed(dd.snippet, Sd)
                  })]
                }, dd.doc.id))) : Nd.e.map((dd => {
                  const Jd = (0, Qd.jsxs)("div", {
                      className: Zd()("DocsNavItem", {
                        Active: dd.id === (null === wd || void 0 === wd ? void 0 : wd.id)
                      }),
                      "data-pad-focusable": !0,
                      onClick: () => {
                        WJ(dd.id)
                      },
                      children: [(0, Qd.jsx)("span", {
                        className: "DocsNavItemTitle",
                        children: dd.title
                      }), dd.subsections && dd.id === (null === wd || void 0 === wd ? void 0 : wd.id) && yd && (0, Qd.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, Qd.jsx)(Rd.e, {
                          name: "angle-down"
                        })
                      }), dd.subsections && (dd.id !== (null === wd || void 0 === wd ? void 0 : wd.id) || !yd) && (0, Qd.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, Qd.jsx)(Rd.e, {
                          name: "angle-up"
                        })
                      })]
                    }),
                    kd = xd[dd.id];
                  return (0, Qd.jsxs)(pd.Fragment, {
                    children: [kd && (0, Qd.jsx)(Gd.h, {
                      tutorial: "docsOverview",
                      step: kd.tabStep,
                      text: Ad(kd.tabText),
                      enabled: Md,
                      placement: "left",
                      waitForClick: !0,
                      children: Jd
                    }), !kd && Jd, yd && dd.subsections && dd.id === (null === wd || void 0 === wd ? void 0 : wd.id) && dd.subsections.map((dd => (0, Qd.jsx)("div", {
                      className: "DocsNavItem DocsSubsection",
                      "data-pad-focusable": !0,
                      onClick: () => {
                        PJ(dd)
                      },
                      children: dd
                    }, dd)))]
                  }, dd.id)
                }))
              }), (0, Qd.jsx)("div", {
                className: "DocsSidebarButtonContainer",
                children: (0, Qd.jsx)(Id.f, {
                  tooltipInner: Ad("codeEditor:popOutDocsTooltip"),
                  placement: "top",
                  children: (0, Qd.jsx)(gd.d, {
                    className: "DocsSidebarButton",
                    onClick: sd,
                    children: Ad("codeEditor:popOutDocs")
                  })
                })
              })]
            }), (0, Qd.jsx)("div", {
              className: "DocsSidebarResizeHandle",
              onMouseDown: CJ
            }), (0, Qd.jsxs)("div", {
              className: "DocsContentWrapper",
              children: [zd && kJ > 0 && (0, Qd.jsxs)("div", {
                className: "DocsMatchNav",
                children: [(0, Qd.jsxs)("span", {
                  className: "DocsMatchNavLabel",
                  children: [Xd + 1, " / ", kJ]
                }), (0, Qd.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    NJ(-1)
                  },
                  children: "\u25b2"
                }), (0, Qd.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    NJ(1)
                  },
                  children: "\u25bc"
                })]
              }), (0, Qd.jsx)("div", {
                className: "DocsContent",
                ref: bd,
                dangerouslySetInnerHTML: {
                  __html: JJ
                }
              })]
            })]
          })
        })
      }))
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);