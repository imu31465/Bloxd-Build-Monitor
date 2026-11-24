export const id = 305;
export const ids = [305];
export const modules = {
  41711: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      default: () => ut
    });
    var Ot = Vt(63),
      qt = Vt(4914),
      Dt = Vt(1770),
      mt = Vt(1140),
      dt = Vt.n(mt),
      jt = Vt(1556),
      Ht = Vt(1286),
      Xt = Vt(4882),
      Qt = Vt(4894),
      lt = Vt(4903),
      Et = Vt(1188);

    function ft(tt) {
      return tt.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    Xt.c.registerLanguage("javascript", Qt.e), Xt.c.registerLanguage("typescript", lt.b);

    function wt(tt, et) {
      const Vt = ft(tt).replace(/"/g, "&quot;");
      return `<button type="button" class="DocsCopyButton ${et}" title="${Vt}" aria-label="${Vt}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5"/><path d="M10.5 3.5V1.5H1.5v9h2"/></svg><svg class="DocsCopiedIcon" viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 8.5l3.5 3.5 7.5-7.5"/></svg></button>`
    }

    function yt(tt, et) {
      const Vt = [],
        Ot = tt.toLowerCase(),
        qt = et.toLowerCase();
      let Dt = 0;
      for (; Dt < tt.length;) {
        const mt = Ot.indexOf(qt, Dt);
        if (-1 === mt) {
          Vt.push(tt.slice(Dt));
          break
        }
        mt > Dt && Vt.push(tt.slice(Dt, mt)), Vt.push((0, Et.jsx)("mark", {
          className: "DocsHighlight",
          children: tt.slice(mt, mt + et.length)
        }, mt)), Dt = mt + et.length
      }
      return Vt
    }
    var Nt = Vt(1152),
      Mt = Vt(1464),
      bt = Vt(37110),
      Jt = Vt(37112);
    const Ct = {
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
      ut = (0, Ot.memo)((function(tt) {
        var et, Vt, mt, Qt, lt, ut, Kt;
        let {
          popOutDocs: ht,
          hideDocs: vt,
          tutorialEnabled: Wt
        } = tt;
        const [St, ct] = (0, Ot.useState)(qt.d[0].id), Rt = (0, Ot.useRef)(null), It = (0, Ot.useRef)(null), [Pt, Zt] = (0, Ot.useState)(""), [Lt, Ft] = (0, Ot.useState)(0), [kt, Gt] = (0, Ot.useState)(null), [zt, ot] = (0, Ot.useState)(!1), [rt, Ut] = (0, Ot.useState)(160), At = (0, Ot.useRef)(!1), it = (0, Ot.useRef)(null), Yt = (0, bt.k)("docsOverview"), [Bt, pt] = (0, Ot.useState)(0), xt = Object.values(Ct).some((tt => (null === tt || void 0 === tt ? void 0 : tt.tabStep) === Yt));
        (0, Ot.useEffect)((() => {
          xt && Pt.length > 0 && (Zt(""), pt((tt => tt + 1)))
        }), [xt, Pt]);
        const Tt = Pt.length > 0,
          gt = (0, Ot.useMemo)((() => function(tt) {
            if (!tt) return [];
            const et = tt.toLowerCase(),
              Vt = [];
            for (const Ot of qt.d) {
              const tt = Ot.content.toLowerCase();
              let qt = 0,
                Dt = -1,
                mt = 0,
                dt = tt.indexOf(et, mt);
              for (; - 1 !== dt;) - 1 === Dt && (Dt = dt), qt++, mt = dt + et.length, dt = tt.indexOf(et, mt);
              if (0 === qt) continue;
              const jt = Math.max(0, Dt - 40),
                Ht = Math.min(Ot.content.length, Dt + et.length + 40),
                Xt = (jt > 0 ? "..." : "") + Ot.content.slice(jt, Ht).replace(/\n/g, " ") + (Ht < Ot.content.length ? "..." : "");
              Vt.push({
                doc: Ot,
                matchCount: qt,
                snippet: Xt
              })
            }
            return Vt.sort(((tt, et) => et.matchCount - tt.matchCount)), Vt
          }(Pt)), [Pt]),
          st = Tt ? null !== (et = null !== (Vt = null === (mt = gt.find((tt => tt.doc.id === St))) || void 0 === mt ? void 0 : mt.doc) && void 0 !== Vt ? Vt : null === (Qt = gt[0]) || void 0 === Qt ? void 0 : Qt.doc) && void 0 !== et ? et : null : null !== (lt = qt.d.find((tt => tt.id === St))) && void 0 !== lt ? lt : qt.d[0],
          {
            t: nt
          } = (0, Ht.H)(),
          te = nt("codeEditor:copySnippet"),
          ee = (0, Ot.useMemo)((() => st ? function(tt, et, Vt, Ot) {
            let qt = et;
            qt = qt.replace(/\r\n/g, "\n");
            const Dt = [];
            qt = qt.replace(/```(\w*)\n([\s\S]*?)```/g, ((tt, et, Ot) => {
              const qt = Dt.length;
              let mt = ft(Ot);
              try {
                mt = Xt.c.highlight(Ot.trimEnd(), {
                  language: et
                }).value
              } catch (dt) {
                console.warn("Could not highlight documentation code block", dt)
              }
              return Dt.push(`<div class="DocsCodeBlockRow"><pre class="DocsCodeBlock" data-lang="${et}"><code>${mt}</code></pre>${wt(Vt,"DocsCopyBlock")}</div>`), `\0PLACEHOLDER_${qt}\0`
            })), qt = qt.replace(/(`{1,2})([^\n]+?)\1(?!`)/g, ((et, Ot, qt) => {
              const mt = Dt.length,
                dt = 2 === Ot.length ? qt.replace(/^ (.*) $/, "$1") : qt;
              let jt = ft(dt);
              try {
                "apiReference" !== tt && "callbacks" !== tt || (jt = Xt.c.highlight(dt.trimEnd().replaceAll("\\|", "|"), {
                  language: "typescript"
                }).value)
              } catch (Ht) {
                console.warn("Could not highlight documentation snippet", Ht)
              }
              return Dt.push(`<span class="DocsInlineCodeRow"><code class="DocsInlineCode">${jt}</code>${wt(Vt,"DocsCopyInline")}</span>`), `\0PLACEHOLDER_${mt}\0`
            })), qt = ft(qt), qt = qt.replace(/^#### (.+)$/gm, '<h4 class="DocsH4">$1</h4>'), qt = qt.replace(/^### (.+)$/gm, '<h3 class="DocsH3">$1</h3>'), qt = qt.replace(/^## (.+)$/gm, '<h2 class="DocsH2">$1</h2>'), qt = qt.replace(/^# (.+)$/gm, '<h1 class="DocsH1">$1</h1>'), qt = qt.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"), qt = qt.replace(/\[([^\]]+)\]\(([^)]+)\)/g, ((tt, et, Vt) => Vt.startsWith("#") ? `<a class="DocsAnchor" data-id="${Vt}">${et}</a>` : `<a href="${Vt}" target="_blank" rel="noopener noreferrer">${et}</a>`)), qt = qt.replace(/^(\|.+\|)\n(\|[\s:\-|]+\|)\n((?:\|.+\|\s*\r?\n?)*)/gm, ((tt, et, Vt, Ot) => `<table class="DocsTable"><thead><tr>${et.split("|").slice(1,-1).map((tt=>`<th>${tt.trim()}</th>`)).join("")}</tr></thead><tbody>${Ot.trim().split("\n").map((tt=>`<tr>${tt.split("|").slice(1,-1).map((tt=>`<td>${tt.trim()}</td>`)).join("")}</tr>`)).join("")}</tbody></table>`)), qt = qt.replace(/(?:^[ \t]*([*-])[ \t]+.+(?:\n|$))+/gm, ((tt, et) => function(tt, et) {
              const Vt = "*" === et,
                Ot = [];
              for (const dt of tt.split("\n")) {
                const tt = dt.match(/^([ \t]*)(?:[*-])[ \t]+(.+)$/);
                tt && Ot.push({
                  indent: tt[1].replace(/\t/g, "  ").length,
                  content: tt[2]
                })
              }
              let qt = "";
              const Dt = [],
                mt = Vt ? "ol" : "ul";
              for (const {
                  indent: dt,
                  content: jt
                }
                of Ot) {
                for (; Dt.length > 0 && dt < Dt[Dt.length - 1];) qt += `</${mt}></li>`, Dt.pop();
                (0 === Dt.length || dt > Dt[Dt.length - 1]) && (Dt.length > 0 && (qt = qt.replace(/<\/li>$/, "")), qt += `<${mt} class="DocsList">`, Dt.push(dt)), qt += `<li class="DocsListItem">${jt}</li>`
              }
              for (; Dt.length > 0;) qt += `</${mt}>`, Dt.pop(), Dt.length > 0 && (qt += "</li>");
              return qt
            }(tt, et))), qt = qt.replace(/\n{2,}/g, "\n<br/>\n");
            for (let mt = 0; mt < Dt.length; mt++) qt = qt.replace(`\0PLACEHOLDER_${mt}\0`, Dt[mt]);
            if (Ot) {
              const tt = ft(Ot).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                et = new RegExp(tt, "gi");
              qt = qt.replace(/([^<>]+)(?=<|$)/g, (tt => tt.replace(et, (tt => `<mark class="DocsHighlight">${tt}</mark>`))))
            }
            return qt
          }(st.id, st.content, te, Tt ? Pt : void 0) : ""), [st, te, Tt, Pt]);
        (0, Ot.useEffect)((() => {
          const tt = It.current;
          if (!tt) return;
          const et = tt => {
            var et, Vt, Ot, qt, Dt;
            const mt = null === (et = (Vt = tt.target).closest) || void 0 === et ? void 0 : et.call(Vt, ".DocsCopyButton");
            if (!mt) return;
            tt.preventDefault(), tt.stopPropagation();
            const dt = null !== (Ot = null === (qt = mt.parentElement) || void 0 === qt || null === (Dt = qt.querySelector("code")) || void 0 === Dt ? void 0 : Dt.textContent) && void 0 !== Ot ? Ot : "";
            navigator.clipboard.writeText(dt.trimEnd()).then((() => {
              mt.classList.add("Copied"), setTimeout((() => {
                mt.classList.remove("Copied")
              }), 1500)
            })).catch((tt => {
              console.warn("Could not copy documentation code", tt)
            }))
          };
          return tt.addEventListener("click", et, !0), () => {
            tt.removeEventListener("click", et, !0)
          }
        }), []);
        const [Ve, Oe] = (0, Ot.useState)(0);
        (0, Ot.useEffect)((() => {
          if (!Tt || !It.current) return void Oe(0);
          const tt = It.current.querySelectorAll(".DocsHighlight").length;
          Oe(tt)
        }), [Tt, ee]), (0, Ot.useEffect)((() => {
          if (null === kt || !It.current) return;
          Gt(null);
          const tt = It.current.querySelectorAll(".DocsHighlight");
          if (0 === tt.length) return;
          const et = Math.min(kt, tt.length - 1);
          Ft(et), tt.forEach((tt => {
            tt.classList.remove("DocsHighlightActive")
          })), tt[et].classList.add("DocsHighlightActive"), tt[et].scrollIntoView({
            block: "center",
            behavior: "smooth"
          })
        }), [kt, ee]);
        const qe = (0, Ot.useCallback)((tt => {
            if (!It.current) return;
            const et = It.current.querySelectorAll(".DocsHighlight");
            if (0 === et.length) return;
            const Vt = (Lt + tt + et.length) % et.length;
            Ft(Vt), Gt(Vt)
          }), [Lt]),
          De = (0, Ot.useCallback)((tt => {
            var et;
            const Vt = null === (et = Ct[tt]) || void 0 === et ? void 0 : et.tabStep;
            Vt && Vt === Yt && (0, Jt.d)(Vt), tt !== St ? (ot(!0), ct(tt), Ft(0), It.current && (It.current.scrollTop = 0), Tt && Gt(0)) : ot(!zt)
          }), [Tt, St, zt, Yt]),
          me = (0, Ot.useCallback)((tt => {
            var et;
            const Vt = Array.from((null === (et = It.current) || void 0 === et ? void 0 : et.querySelectorAll(".DocsH2, .DocsH3")) || []).find((et => {
              var Vt;
              return null === (Vt = et.textContent) || void 0 === Vt ? void 0 : Vt.includes(tt)
            }));
            Vt && Vt.scrollIntoView({
              block: "start",
              behavior: "smooth"
            })
          }), [It]),
          de = (0, Ot.useCallback)((tt => {
            var et, Vt;
            const Ot = null !== (et = null === (Vt = Rt.current) || void 0 === Vt ? void 0 : Vt.clientWidth) && void 0 !== et ? et : window.innerWidth,
              qt = Math.max(120, Ot - 200);
            return Math.min(Math.max(tt, 120), qt)
          }), []),
          je = (0, Ot.useCallback)((() => {
            var tt;
            At.current && (At.current = !1, null === (tt = Rt.current) || void 0 === tt || tt.classList.remove("DocsSidebarResizing"))
          }), []),
          He = (0, Ot.useCallback)((tt => {
            var et;
            tt.preventDefault(), At.current = !0, null === (et = Rt.current) || void 0 === et || et.classList.add("DocsSidebarResizing")
          }), []);
        (0, Ot.useEffect)((() => {
          const tt = Rt.current,
            et = tt => {
              if (!At.current || !Rt.current) return;
              const et = Rt.current.getBoundingClientRect().left;
              Ut(de(tt.clientX - et))
            };
          return window.addEventListener("mousemove", et), window.addEventListener("mouseup", je), () => {
            window.removeEventListener("mousemove", et), window.removeEventListener("mouseup", je), null === tt || void 0 === tt || tt.classList.remove("DocsSidebarResizing")
          }
        }), [de, je]);
        const Xe = (0, Ot.useCallback)((tt => {
          if (tt) {
            const [et, Vt] = tt.slice(1).split("-");
            Vt && (it.current = {
              docId: et,
              subsection: Vt
            }), et && De(et)
          }
        }), [De]);
        (0, Ot.useEffect)((() => {
          const tt = it.current;
          tt && St === tt.docId && (setTimeout((() => {
            me(tt.subsection)
          }), 0), it.current = null)
        })), (0, Ot.useEffect)((() => {
          if (!It.current) return;
          It.current.querySelectorAll("a.DocsAnchor").forEach((tt => {
            tt.addEventListener("click", (et => {
              et.preventDefault(), Xe(tt.dataset.id)
            }))
          }))
        }), [St, Xe]);
        const Qe = Object.values(Ct).find((tt => (null === tt || void 0 === tt ? void 0 : tt.pageStep) === Yt));
        return (0, Et.jsx)(bt.i, {
          tutorial: "docsOverview",
          step: null !== (ut = null === Qe || void 0 === Qe ? void 0 : Qe.pageStep) && void 0 !== ut ? ut : "docsPanel",
          text: nt(null !== (Kt = null === Qe || void 0 === Qe ? void 0 : Qe.pageText) && void 0 !== Kt ? Kt : "codeEditor:tutorialDocsPanel"),
          enabled: Wt,
          placement: "left",
          onPrevious: Qe ? void 0 : vt,
          children: (0, Et.jsxs)("div", {
            className: "DocsPanel",
            ref: Rt,
            children: [(0, Et.jsxs)("div", {
              className: "DocsSidebar",
              style: {
                width: rt,
                minWidth: rt,
                maxWidth: rt
              },
              children: [(0, Et.jsx)(Dt.d, {
                className: "DocsSearch",
                placeholderText: "\ud83d\udd0e Search docs...",
                onValueChange: tt => {
                  Zt(tt), Ft(0), Gt(0)
                }
              }, Bt), (0, Et.jsx)("div", {
                className: "DocsNavList",
                children: Tt ? gt.map((tt => (0, Et.jsxs)("div", {
                  className: dt()("DocsNavItem", "SearchResult", {
                    Active: tt.doc.id === (null === st || void 0 === st ? void 0 : st.id)
                  }),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    De(tt.doc.id)
                  },
                  children: [(0, Et.jsxs)("div", {
                    className: "SearchResultTitle",
                    children: [tt.doc.title, (0, Et.jsx)("span", {
                      className: "SearchResultCount",
                      children: tt.matchCount
                    })]
                  }), (0, Et.jsx)("div", {
                    className: "SearchResultSnippet",
                    children: yt(tt.snippet, Pt)
                  })]
                }, tt.doc.id))) : qt.d.map((tt => {
                  const et = (0, Et.jsxs)("div", {
                      className: dt()("DocsNavItem", {
                        Active: tt.id === (null === st || void 0 === st ? void 0 : st.id)
                      }),
                      "data-pad-focusable": !0,
                      onClick: () => {
                        De(tt.id)
                      },
                      children: [(0, Et.jsx)("span", {
                        className: "DocsNavItemTitle",
                        children: tt.title
                      }), tt.subsections && tt.id === (null === st || void 0 === st ? void 0 : st.id) && zt && (0, Et.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, Et.jsx)(Nt.b, {
                          name: "angle-down"
                        })
                      }), tt.subsections && (tt.id !== (null === st || void 0 === st ? void 0 : st.id) || !zt) && (0, Et.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, Et.jsx)(Nt.b, {
                          name: "angle-up"
                        })
                      })]
                    }),
                    Vt = Ct[tt.id];
                  return (0, Et.jsxs)(Ot.Fragment, {
                    children: [Vt && (0, Et.jsx)(bt.i, {
                      tutorial: "docsOverview",
                      step: Vt.tabStep,
                      text: nt(Vt.tabText),
                      enabled: Wt,
                      placement: "left",
                      waitForClick: !0,
                      children: et
                    }), !Vt && et, zt && tt.subsections && tt.id === (null === st || void 0 === st ? void 0 : st.id) && tt.subsections.map((tt => (0, Et.jsx)("div", {
                      className: "DocsNavItem DocsSubsection",
                      "data-pad-focusable": !0,
                      onClick: () => {
                        me(tt)
                      },
                      children: tt
                    }, tt)))]
                  }, tt.id)
                }))
              }), (0, Et.jsx)("div", {
                className: "DocsSidebarButtonContainer",
                children: (0, Et.jsx)(Mt.g, {
                  tooltipInner: nt("codeEditor:popOutDocsTooltip"),
                  placement: "top",
                  children: (0, Et.jsx)(jt.f, {
                    className: "DocsSidebarButton",
                    onClick: ht,
                    children: nt("codeEditor:popOutDocs")
                  })
                })
              })]
            }), (0, Et.jsx)("div", {
              className: "DocsSidebarResizeHandle",
              onMouseDown: He
            }), (0, Et.jsxs)("div", {
              className: "DocsContentWrapper",
              children: [Tt && Ve > 0 && (0, Et.jsxs)("div", {
                className: "DocsMatchNav",
                children: [(0, Et.jsxs)("span", {
                  className: "DocsMatchNavLabel",
                  children: [Lt + 1, " / ", Ve]
                }), (0, Et.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    qe(-1)
                  },
                  children: "\u25b2"
                }), (0, Et.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    qe(1)
                  },
                  children: "\u25bc"
                })]
              }), (0, Et.jsx)("div", {
                className: "DocsContent",
                ref: It,
                dangerouslySetInnerHTML: {
                  __html: ee
                }
              })]
            })]
          })
        })
      }))
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);