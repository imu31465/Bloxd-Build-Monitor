export const id = 300;
export const ids = [300];
export const modules = {
  41523: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      default: () => nm
    });
    var hm = fm(59),
      Am = fm(4674),
      am = fm(1676),
      xm = fm(1080),
      wm = fm.n(xm),
      Dm = fm(1454),
      im = fm(1208),
      Rm = fm(4656),
      pm = fm(4663),
      Em = fm(4665),
      om = fm(1135);

    function Om(mm) {
      return mm.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    Rm.b.registerLanguage("javascript", pm.b), Rm.b.registerLanguage("typescript", Em.d);

    function Ym(mm, Tm) {
      const fm = Om(mm).replace(/"/g, "&quot;");
      return `<button type="button" class="DocsCopyButton ${Tm}" title="${fm}" aria-label="${fm}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5"/><path d="M10.5 3.5V1.5H1.5v9h2"/></svg><svg class="DocsCopiedIcon" viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 8.5l3.5 3.5 7.5-7.5"/></svg></button>`
    }

    function qm(mm, Tm) {
      const fm = [],
        hm = mm.toLowerCase(),
        Am = Tm.toLowerCase();
      let am = 0;
      for (; am < mm.length;) {
        const xm = hm.indexOf(Am, am);
        if (-1 === xm) {
          fm.push(mm.slice(am));
          break
        }
        xm > am && fm.push(mm.slice(am, xm)), fm.push((0, om.jsx)("mark", {
          className: "DocsHighlight",
          children: mm.slice(xm, xm + Tm.length)
        }, xm)), am = xm + Tm.length
      }
      return fm
    }
    var jm = fm(1089),
      Vm = fm(1362),
      Im = fm(36986),
      Km = fm(36992);
    const Qm = {
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
      nm = (0, hm.memo)((function(mm) {
        var Tm, fm, xm, pm, Em, nm, Jm;
        let {
          popOutDocs: cm,
          hideDocs: zm,
          tutorialEnabled: Zm
        } = mm;
        const [km, bm] = (0, hm.useState)(Am.b[0].id), Sm = (0, hm.useRef)(null), em = (0, hm.useRef)(null), [Nm, Gm] = (0, hm.useState)(""), [Xm, Pm] = (0, hm.useState)(0), [Hm, ym] = (0, hm.useState)(null), [Cm, rm] = (0, hm.useState)(!1), [sm, lm] = (0, hm.useState)(160), Mm = (0, hm.useRef)(!1), um = (0, hm.useRef)(null), Bm = (0, Im.i)("docsOverview"), [Lm, tm] = (0, hm.useState)(0), Um = Object.values(Qm).some((mm => (null === mm || void 0 === mm ? void 0 : mm.tabStep) === Bm));
        (0, hm.useEffect)((() => {
          Um && Nm.length > 0 && (Gm(""), tm((mm => mm + 1)))
        }), [Um, Nm]);
        const dm = Nm.length > 0,
          gm = (0, hm.useMemo)((() => function(mm) {
            if (!mm) return [];
            const Tm = mm.toLowerCase(),
              fm = [];
            for (const hm of Am.b) {
              const mm = hm.content.toLowerCase();
              let Am = 0,
                am = -1,
                xm = 0,
                wm = mm.indexOf(Tm, xm);
              for (; - 1 !== wm;) - 1 === am && (am = wm), Am++, xm = wm + Tm.length, wm = mm.indexOf(Tm, xm);
              if (0 === Am) continue;
              const Dm = Math.max(0, am - 40),
                im = Math.min(hm.content.length, am + Tm.length + 40),
                Rm = (Dm > 0 ? "..." : "") + hm.content.slice(Dm, im).replace(/\n/g, " ") + (im < hm.content.length ? "..." : "");
              fm.push({
                doc: hm,
                matchCount: Am,
                snippet: Rm
              })
            }
            return fm.sort(((mm, Tm) => Tm.matchCount - mm.matchCount)), fm
          }(Nm)), [Nm]),
          Wm = dm ? null !== (Tm = null !== (fm = null === (xm = gm.find((mm => mm.doc.id === km))) || void 0 === xm ? void 0 : xm.doc) && void 0 !== fm ? fm : null === (pm = gm[0]) || void 0 === pm ? void 0 : pm.doc) && void 0 !== Tm ? Tm : null : null !== (Em = Am.b.find((mm => mm.id === km))) && void 0 !== Em ? Em : Am.b[0],
          {
            t: Fm
          } = (0, im.A)(),
          mT = Fm("codeEditor:copySnippet"),
          TT = (0, hm.useMemo)((() => Wm ? function(mm, Tm, fm, hm) {
            let Am = Tm;
            Am = Am.replace(/\r\n/g, "\n");
            const am = [];
            Am = Am.replace(/```(\w*)\n([\s\S]*?)```/g, ((mm, Tm, hm) => {
              const Am = am.length;
              let xm = Om(hm);
              try {
                xm = Rm.b.highlight(hm.trimEnd(), {
                  language: Tm
                }).value
              } catch (wm) {
                console.warn("Could not highlight documentation code block", wm)
              }
              return am.push(`<div class="DocsCodeBlockRow"><pre class="DocsCodeBlock" data-lang="${Tm}"><code>${xm}</code></pre>${Ym(fm,"DocsCopyBlock")}</div>`), `\0PLACEHOLDER_${Am}\0`
            })), Am = Am.replace(/(`{1,2})([^\n]+?)\1(?!`)/g, ((Tm, hm, Am) => {
              const xm = am.length,
                wm = 2 === hm.length ? Am.replace(/^ (.*) $/, "$1") : Am;
              let Dm = Om(wm);
              try {
                "apiReference" !== mm && "callbacks" !== mm || (Dm = Rm.b.highlight(wm.trimEnd().replaceAll("\\|", "|"), {
                  language: "typescript"
                }).value)
              } catch (im) {
                console.warn("Could not highlight documentation snippet", im)
              }
              return am.push(`<span class="DocsInlineCodeRow"><code class="DocsInlineCode">${Dm}</code>${Ym(fm,"DocsCopyInline")}</span>`), `\0PLACEHOLDER_${xm}\0`
            })), Am = Om(Am), Am = Am.replace(/^#### (.+)$/gm, '<h4 class="DocsH4">$1</h4>'), Am = Am.replace(/^### (.+)$/gm, '<h3 class="DocsH3">$1</h3>'), Am = Am.replace(/^## (.+)$/gm, '<h2 class="DocsH2">$1</h2>'), Am = Am.replace(/^# (.+)$/gm, '<h1 class="DocsH1">$1</h1>'), Am = Am.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"), Am = Am.replace(/\[([^\]]+)\]\(([^)]+)\)/g, ((mm, Tm, fm) => fm.startsWith("#") ? `<a class="DocsAnchor" data-id="${fm}">${Tm}</a>` : `<a href="${fm}" target="_blank" rel="noopener noreferrer">${Tm}</a>`)), Am = Am.replace(/^(\|.+\|)\n(\|[\s:\-|]+\|)\n((?:\|.+\|\s*\r?\n?)*)/gm, ((mm, Tm, fm, hm) => `<table class="DocsTable"><thead><tr>${Tm.split("|").slice(1,-1).map((mm=>`<th>${mm.trim()}</th>`)).join("")}</tr></thead><tbody>${hm.trim().split("\n").map((mm=>`<tr>${mm.split("|").slice(1,-1).map((mm=>`<td>${mm.trim()}</td>`)).join("")}</tr>`)).join("")}</tbody></table>`)), Am = Am.replace(/(?:^[ \t]*([*-])[ \t]+.+(?:\n|$))+/gm, ((mm, Tm) => function(mm, Tm) {
              const fm = "*" === Tm,
                hm = [];
              for (const wm of mm.split("\n")) {
                const mm = wm.match(/^([ \t]*)(?:[*-])[ \t]+(.+)$/);
                mm && hm.push({
                  indent: mm[1].replace(/\t/g, "  ").length,
                  content: mm[2]
                })
              }
              let Am = "";
              const am = [],
                xm = fm ? "ol" : "ul";
              for (const {
                  indent: wm,
                  content: Dm
                }
                of hm) {
                for (; am.length > 0 && wm < am[am.length - 1];) Am += `</${xm}></li>`, am.pop();
                (0 === am.length || wm > am[am.length - 1]) && (am.length > 0 && (Am = Am.replace(/<\/li>$/, "")), Am += `<${xm} class="DocsList">`, am.push(wm)), Am += `<li class="DocsListItem">${Dm}</li>`
              }
              for (; am.length > 0;) Am += `</${xm}>`, am.pop(), am.length > 0 && (Am += "</li>");
              return Am
            }(mm, Tm))), Am = Am.replace(/\n{2,}/g, "\n<br/>\n");
            for (let xm = 0; xm < am.length; xm++) Am = Am.replace(`\0PLACEHOLDER_${xm}\0`, am[xm]);
            if (hm) {
              const mm = Om(hm).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                Tm = new RegExp(mm, "gi");
              Am = Am.replace(/([^<>]+)(?=<|$)/g, (mm => mm.replace(Tm, (mm => `<mark class="DocsHighlight">${mm}</mark>`))))
            }
            return Am
          }(Wm.id, Wm.content, mT, dm ? Nm : void 0) : ""), [Wm, mT, dm, Nm]);
        (0, hm.useEffect)((() => {
          const mm = em.current;
          if (!mm) return;
          const Tm = mm => {
            var Tm, fm, hm, Am, am;
            const xm = null === (Tm = (fm = mm.target).closest) || void 0 === Tm ? void 0 : Tm.call(fm, ".DocsCopyButton");
            if (!xm) return;
            mm.preventDefault(), mm.stopPropagation();
            const wm = null !== (hm = null === (Am = xm.parentElement) || void 0 === Am || null === (am = Am.querySelector("code")) || void 0 === am ? void 0 : am.textContent) && void 0 !== hm ? hm : "";
            navigator.clipboard.writeText(wm.trimEnd()).then((() => {
              xm.classList.add("Copied"), setTimeout((() => {
                xm.classList.remove("Copied")
              }), 1500)
            })).catch((mm => {
              console.warn("Could not copy documentation code", mm)
            }))
          };
          return mm.addEventListener("click", Tm, !0), () => {
            mm.removeEventListener("click", Tm, !0)
          }
        }), []);
        const [fT, hT] = (0, hm.useState)(0);
        (0, hm.useEffect)((() => {
          if (!dm || !em.current) return void hT(0);
          const mm = em.current.querySelectorAll(".DocsHighlight").length;
          hT(mm)
        }), [dm, TT]), (0, hm.useEffect)((() => {
          if (null === Hm || !em.current) return;
          ym(null);
          const mm = em.current.querySelectorAll(".DocsHighlight");
          if (0 === mm.length) return;
          const Tm = Math.min(Hm, mm.length - 1);
          Pm(Tm), mm.forEach((mm => {
            mm.classList.remove("DocsHighlightActive")
          })), mm[Tm].classList.add("DocsHighlightActive"), mm[Tm].scrollIntoView({
            block: "center",
            behavior: "smooth"
          })
        }), [Hm, TT]);
        const AT = (0, hm.useCallback)((mm => {
            if (!em.current) return;
            const Tm = em.current.querySelectorAll(".DocsHighlight");
            if (0 === Tm.length) return;
            const fm = (Xm + mm + Tm.length) % Tm.length;
            Pm(fm), ym(fm)
          }), [Xm]),
          aT = (0, hm.useCallback)((mm => {
            var Tm;
            const fm = null === (Tm = Qm[mm]) || void 0 === Tm ? void 0 : Tm.tabStep;
            fm && fm === Bm && (0, Km.d)(fm), mm !== km ? (rm(!0), bm(mm), Pm(0), em.current && (em.current.scrollTop = 0), dm && ym(0)) : rm(!Cm)
          }), [dm, km, Cm, Bm]),
          xT = (0, hm.useCallback)((mm => {
            var Tm;
            const fm = Array.from((null === (Tm = em.current) || void 0 === Tm ? void 0 : Tm.querySelectorAll(".DocsH2, .DocsH3")) || []).find((Tm => {
              var fm;
              return null === (fm = Tm.textContent) || void 0 === fm ? void 0 : fm.includes(mm)
            }));
            fm && fm.scrollIntoView({
              block: "start",
              behavior: "smooth"
            })
          }), [em]),
          wT = (0, hm.useCallback)((mm => {
            var Tm, fm;
            const hm = null !== (Tm = null === (fm = Sm.current) || void 0 === fm ? void 0 : fm.clientWidth) && void 0 !== Tm ? Tm : window.innerWidth,
              Am = Math.max(120, hm - 200);
            return Math.min(Math.max(mm, 120), Am)
          }), []),
          DT = (0, hm.useCallback)((() => {
            var mm;
            Mm.current && (Mm.current = !1, null === (mm = Sm.current) || void 0 === mm || mm.classList.remove("DocsSidebarResizing"))
          }), []),
          iT = (0, hm.useCallback)((mm => {
            var Tm;
            mm.preventDefault(), Mm.current = !0, null === (Tm = Sm.current) || void 0 === Tm || Tm.classList.add("DocsSidebarResizing")
          }), []);
        (0, hm.useEffect)((() => {
          const mm = Sm.current,
            Tm = mm => {
              if (!Mm.current || !Sm.current) return;
              const Tm = Sm.current.getBoundingClientRect().left;
              lm(wT(mm.clientX - Tm))
            };
          return window.addEventListener("mousemove", Tm), window.addEventListener("mouseup", DT), () => {
            window.removeEventListener("mousemove", Tm), window.removeEventListener("mouseup", DT), null === mm || void 0 === mm || mm.classList.remove("DocsSidebarResizing")
          }
        }), [wT, DT]);
        const RT = (0, hm.useCallback)((mm => {
          if (mm) {
            const [Tm, fm] = mm.slice(1).split("-");
            fm && (um.current = {
              docId: Tm,
              subsection: fm
            }), Tm && aT(Tm)
          }
        }), [aT]);
        (0, hm.useEffect)((() => {
          const mm = um.current;
          mm && km === mm.docId && (setTimeout((() => {
            xT(mm.subsection)
          }), 0), um.current = null)
        })), (0, hm.useEffect)((() => {
          if (!em.current) return;
          em.current.querySelectorAll("a.DocsAnchor").forEach((mm => {
            mm.addEventListener("click", (Tm => {
              Tm.preventDefault(), RT(mm.dataset.id)
            }))
          }))
        }), [km, RT]);
        const pT = Object.values(Qm).find((mm => (null === mm || void 0 === mm ? void 0 : mm.pageStep) === Bm));
        return (0, om.jsx)(Im.e, {
          tutorial: "docsOverview",
          step: null !== (nm = null === pT || void 0 === pT ? void 0 : pT.pageStep) && void 0 !== nm ? nm : "docsPanel",
          text: Fm(null !== (Jm = null === pT || void 0 === pT ? void 0 : pT.pageText) && void 0 !== Jm ? Jm : "codeEditor:tutorialDocsPanel"),
          enabled: Zm,
          placement: "left",
          onPrevious: pT ? void 0 : zm,
          children: (0, om.jsxs)("div", {
            className: "DocsPanel",
            ref: Sm,
            children: [(0, om.jsxs)("div", {
              className: "DocsSidebar",
              style: {
                width: sm,
                minWidth: sm,
                maxWidth: sm
              },
              children: [(0, om.jsx)(am.e, {
                className: "DocsSearch",
                placeholderText: "\ud83d\udd0e Search docs...",
                onValueChange: mm => {
                  Gm(mm), Pm(0), ym(0)
                }
              }, Lm), (0, om.jsx)("div", {
                className: "DocsNavList",
                children: dm ? gm.map((mm => (0, om.jsxs)("div", {
                  className: wm()("DocsNavItem", "SearchResult", {
                    Active: mm.doc.id === (null === Wm || void 0 === Wm ? void 0 : Wm.id)
                  }),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    aT(mm.doc.id)
                  },
                  children: [(0, om.jsxs)("div", {
                    className: "SearchResultTitle",
                    children: [mm.doc.title, (0, om.jsx)("span", {
                      className: "SearchResultCount",
                      children: mm.matchCount
                    })]
                  }), (0, om.jsx)("div", {
                    className: "SearchResultSnippet",
                    children: qm(mm.snippet, Nm)
                  })]
                }, mm.doc.id))) : Am.b.map((mm => {
                  const Tm = (0, om.jsxs)("div", {
                      className: wm()("DocsNavItem", {
                        Active: mm.id === (null === Wm || void 0 === Wm ? void 0 : Wm.id)
                      }),
                      "data-pad-focusable": !0,
                      onClick: () => {
                        aT(mm.id)
                      },
                      children: [(0, om.jsx)("span", {
                        className: "DocsNavItemTitle",
                        children: mm.title
                      }), mm.subsections && mm.id === (null === Wm || void 0 === Wm ? void 0 : Wm.id) && Cm && (0, om.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, om.jsx)(jm.c, {
                          name: "angle-down"
                        })
                      }), mm.subsections && (mm.id !== (null === Wm || void 0 === Wm ? void 0 : Wm.id) || !Cm) && (0, om.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, om.jsx)(jm.c, {
                          name: "angle-up"
                        })
                      })]
                    }),
                    fm = Qm[mm.id];
                  return (0, om.jsxs)(hm.Fragment, {
                    children: [fm && (0, om.jsx)(Im.e, {
                      tutorial: "docsOverview",
                      step: fm.tabStep,
                      text: Fm(fm.tabText),
                      enabled: Zm,
                      placement: "left",
                      waitForClick: !0,
                      children: Tm
                    }), !fm && Tm, Cm && mm.subsections && mm.id === (null === Wm || void 0 === Wm ? void 0 : Wm.id) && mm.subsections.map((mm => (0, om.jsx)("div", {
                      className: "DocsNavItem DocsSubsection",
                      "data-pad-focusable": !0,
                      onClick: () => {
                        xT(mm)
                      },
                      children: mm
                    }, mm)))]
                  }, mm.id)
                }))
              }), (0, om.jsx)("div", {
                className: "DocsSidebarButtonContainer",
                children: (0, om.jsx)(Vm.h, {
                  tooltipInner: Fm("codeEditor:popOutDocsTooltip"),
                  placement: "top",
                  children: (0, om.jsx)(Dm.e, {
                    className: "DocsSidebarButton",
                    onClick: cm,
                    children: Fm("codeEditor:popOutDocs")
                  })
                })
              })]
            }), (0, om.jsx)("div", {
              className: "DocsSidebarResizeHandle",
              onMouseDown: iT
            }), (0, om.jsxs)("div", {
              className: "DocsContentWrapper",
              children: [dm && fT > 0 && (0, om.jsxs)("div", {
                className: "DocsMatchNav",
                children: [(0, om.jsxs)("span", {
                  className: "DocsMatchNavLabel",
                  children: [Xm + 1, " / ", fT]
                }), (0, om.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    AT(-1)
                  },
                  children: "\u25b2"
                }), (0, om.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    AT(1)
                  },
                  children: "\u25bc"
                })]
              }), (0, om.jsx)("div", {
                className: "DocsContent",
                ref: em,
                dangerouslySetInnerHTML: {
                  __html: TT
                }
              })]
            })]
          })
        })
      }))
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);