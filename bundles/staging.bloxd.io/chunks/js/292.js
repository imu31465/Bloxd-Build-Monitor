export const id = 292;
export const ids = [292];
export const modules = {
  41070: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      default: () => FT
    });
    var lT = cT(71),
      MT = cT(4711),
      KT = cT(1692),
      OT = cT(1046),
      yT = cT.n(OT),
      fT = cT(1470),
      xT = cT(1195),
      IT = cT(4698),
      AT = cT(4702),
      CT = cT(4705),
      jT = cT(1099);

    function vT(TT) {
      return TT.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    IT.d.registerLanguage("javascript", AT.b), IT.d.registerLanguage("typescript", CT.d);

    function tT(TT, kT) {
      const cT = vT(TT).replace(/"/g, "&quot;");
      return `<button type="button" class="DocsCopyButton ${kT}" title="${cT}" aria-label="${cT}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5"/><path d="M10.5 3.5V1.5H1.5v9h2"/></svg><svg class="DocsCopiedIcon" viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 8.5l3.5 3.5 7.5-7.5"/></svg></button>`
    }

    function hT(TT, kT) {
      const cT = [],
        lT = TT.toLowerCase(),
        MT = kT.toLowerCase();
      let KT = 0;
      for (; KT < TT.length;) {
        const OT = lT.indexOf(MT, KT);
        if (-1 === OT) {
          cT.push(TT.slice(KT));
          break
        }
        OT > KT && cT.push(TT.slice(KT, OT)), cT.push((0, jT.jsx)("mark", {
          className: "DocsHighlight",
          children: TT.slice(OT, OT + kT.length)
        }, OT)), KT = OT + kT.length
      }
      return cT
    }
    var NT = cT(1061),
      QT = cT(1379),
      ST = cT(36712),
      DT = cT(36717);
    const aT = {
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
      FT = (0, lT.memo)((function(TT) {
        var kT, cT, OT, AT, CT, FT, rT;
        let {
          popOutDocs: PT,
          hideDocs: wT,
          tutorialEnabled: mT
        } = TT;
        const [bT, zT] = (0, lT.useState)(MT.b[0].id), JT = (0, lT.useRef)(null), oT = (0, lT.useRef)(null), [HT, eT] = (0, lT.useState)(""), [GT, VT] = (0, lT.useState)(0), [ET, ZT] = (0, lT.useState)(null), [uT, XT] = (0, lT.useState)(!1), [dT, LT] = (0, lT.useState)(160), RT = (0, lT.useRef)(!1), gT = (0, lT.useRef)(null), UT = (0, ST.l)("docsOverview"), [YT, BT] = (0, lT.useState)(0), WT = Object.values(aT).some((TT => (null === TT || void 0 === TT ? void 0 : TT.tabStep) === UT));
        (0, lT.useEffect)((() => {
          WT && HT.length > 0 && (eT(""), BT((TT => TT + 1)))
        }), [WT, HT]);
        const nT = HT.length > 0,
          pT = (0, lT.useMemo)((() => function(TT) {
            if (!TT) return [];
            const kT = TT.toLowerCase(),
              cT = [];
            for (const lT of MT.b) {
              const TT = lT.content.toLowerCase();
              let MT = 0,
                KT = -1,
                OT = 0,
                yT = TT.indexOf(kT, OT);
              for (; - 1 !== yT;) - 1 === KT && (KT = yT), MT++, OT = yT + kT.length, yT = TT.indexOf(kT, OT);
              if (0 === MT) continue;
              const fT = Math.max(0, KT - 40),
                xT = Math.min(lT.content.length, KT + kT.length + 40),
                IT = (fT > 0 ? "..." : "") + lT.content.slice(fT, xT).replace(/\n/g, " ") + (xT < lT.content.length ? "..." : "");
              cT.push({
                doc: lT,
                matchCount: MT,
                snippet: IT
              })
            }
            return cT.sort(((TT, kT) => kT.matchCount - TT.matchCount)), cT
          }(HT)), [HT]),
          iT = nT ? null !== (kT = null !== (cT = null === (OT = pT.find((TT => TT.doc.id === bT))) || void 0 === OT ? void 0 : OT.doc) && void 0 !== cT ? cT : null === (AT = pT[0]) || void 0 === AT ? void 0 : AT.doc) && void 0 !== kT ? kT : null : null !== (CT = MT.b.find((TT => TT.id === bT))) && void 0 !== CT ? CT : MT.b[0],
          {
            t: qT
          } = (0, xT.B)(),
          sT = qT("codeEditor:copySnippet"),
          Tk = (0, lT.useMemo)((() => iT ? function(TT, kT, cT, lT) {
            let MT = kT;
            MT = MT.replace(/\r\n/g, "\n");
            const KT = [];
            MT = MT.replace(/```(\w*)\n([\s\S]*?)```/g, ((TT, kT, lT) => {
              const MT = KT.length;
              let OT = vT(lT);
              try {
                OT = IT.d.highlight(lT.trimEnd(), {
                  language: kT
                }).value
              } catch (yT) {
                console.warn("Could not highlight documentation code block", yT)
              }
              return KT.push(`<div class="DocsCodeBlockRow"><pre class="DocsCodeBlock" data-lang="${kT}"><code>${OT}</code></pre>${tT(cT,"DocsCopyBlock")}</div>`), `\0PLACEHOLDER_${MT}\0`
            })), MT = MT.replace(/(`{1,2})([^\n]+?)\1(?!`)/g, ((kT, lT, MT) => {
              const OT = KT.length,
                yT = 2 === lT.length ? MT.replace(/^ (.*) $/, "$1") : MT;
              let fT = vT(yT);
              try {
                "apiReference" !== TT && "callbacks" !== TT || (fT = IT.d.highlight(yT.trimEnd().replaceAll("\\|", "|"), {
                  language: "typescript"
                }).value)
              } catch (xT) {
                console.warn("Could not highlight documentation snippet", xT)
              }
              return KT.push(`<span class="DocsInlineCodeRow"><code class="DocsInlineCode">${fT}</code>${tT(cT,"DocsCopyInline")}</span>`), `\0PLACEHOLDER_${OT}\0`
            })), MT = vT(MT), MT = MT.replace(/^#### (.+)$/gm, '<h4 class="DocsH4">$1</h4>'), MT = MT.replace(/^### (.+)$/gm, '<h3 class="DocsH3">$1</h3>'), MT = MT.replace(/^## (.+)$/gm, '<h2 class="DocsH2">$1</h2>'), MT = MT.replace(/^# (.+)$/gm, '<h1 class="DocsH1">$1</h1>'), MT = MT.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"), MT = MT.replace(/\[([^\]]+)\]\(([^)]+)\)/g, ((TT, kT, cT) => cT.startsWith("#") ? `<a class="DocsAnchor" data-id="${cT}">${kT}</a>` : `<a href="${cT}" target="_blank" rel="noopener noreferrer">${kT}</a>`)), MT = MT.replace(/^(\|.+\|)\n(\|[\s:\-|]+\|)\n((?:\|.+\|\s*\r?\n?)*)/gm, ((TT, kT, cT, lT) => `<table class="DocsTable"><thead><tr>${kT.split("|").slice(1,-1).map((TT=>`<th>${TT.trim()}</th>`)).join("")}</tr></thead><tbody>${lT.trim().split("\n").map((TT=>`<tr>${TT.split("|").slice(1,-1).map((TT=>`<td>${TT.trim()}</td>`)).join("")}</tr>`)).join("")}</tbody></table>`)), MT = MT.replace(/(?:^[ \t]*([*-])[ \t]+.+(?:\n|$))+/gm, ((TT, kT) => function(TT, kT) {
              const cT = "*" === kT,
                lT = [];
              for (const yT of TT.split("\n")) {
                const TT = yT.match(/^([ \t]*)(?:[*-])[ \t]+(.+)$/);
                TT && lT.push({
                  indent: TT[1].replace(/\t/g, "  ").length,
                  content: TT[2]
                })
              }
              let MT = "";
              const KT = [],
                OT = cT ? "ol" : "ul";
              for (const {
                  indent: yT,
                  content: fT
                }
                of lT) {
                for (; KT.length > 0 && yT < KT[KT.length - 1];) MT += `</${OT}></li>`, KT.pop();
                (0 === KT.length || yT > KT[KT.length - 1]) && (KT.length > 0 && (MT = MT.replace(/<\/li>$/, "")), MT += `<${OT} class="DocsList">`, KT.push(yT)), MT += `<li class="DocsListItem">${fT}</li>`
              }
              for (; KT.length > 0;) MT += `</${OT}>`, KT.pop(), KT.length > 0 && (MT += "</li>");
              return MT
            }(TT, kT))), MT = MT.replace(/\n{2,}/g, "\n<br/>\n");
            for (let OT = 0; OT < KT.length; OT++) MT = MT.replace(`\0PLACEHOLDER_${OT}\0`, KT[OT]);
            if (lT) {
              const TT = vT(lT).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                kT = new RegExp(TT, "gi");
              MT = MT.replace(/([^<>]+)(?=<|$)/g, (TT => TT.replace(kT, (TT => `<mark class="DocsHighlight">${TT}</mark>`))))
            }
            return MT
          }(iT.id, iT.content, sT, nT ? HT : void 0) : ""), [iT, sT, nT, HT]);
        (0, lT.useEffect)((() => {
          const TT = oT.current;
          if (!TT) return;
          const kT = TT => {
            var kT, cT, lT, MT, KT;
            const OT = null === (kT = (cT = TT.target).closest) || void 0 === kT ? void 0 : kT.call(cT, ".DocsCopyButton");
            if (!OT) return;
            TT.preventDefault(), TT.stopPropagation();
            const yT = null !== (lT = null === (MT = OT.parentElement) || void 0 === MT || null === (KT = MT.querySelector("code")) || void 0 === KT ? void 0 : KT.textContent) && void 0 !== lT ? lT : "";
            navigator.clipboard.writeText(yT.trimEnd()).then((() => {
              OT.classList.add("Copied"), setTimeout((() => {
                OT.classList.remove("Copied")
              }), 1500)
            })).catch((TT => {
              console.warn("Could not copy documentation code", TT)
            }))
          };
          return TT.addEventListener("click", kT, !0), () => {
            TT.removeEventListener("click", kT, !0)
          }
        }), []);
        const [kk, ck] = (0, lT.useState)(0);
        (0, lT.useEffect)((() => {
          if (!nT || !oT.current) return void ck(0);
          const TT = oT.current.querySelectorAll(".DocsHighlight").length;
          ck(TT)
        }), [nT, Tk]), (0, lT.useEffect)((() => {
          if (null === ET || !oT.current) return;
          ZT(null);
          const TT = oT.current.querySelectorAll(".DocsHighlight");
          if (0 === TT.length) return;
          const kT = Math.min(ET, TT.length - 1);
          VT(kT), TT.forEach((TT => {
            TT.classList.remove("DocsHighlightActive")
          })), TT[kT].classList.add("DocsHighlightActive"), TT[kT].scrollIntoView({
            block: "center",
            behavior: "smooth"
          })
        }), [ET, Tk]);
        const lk = (0, lT.useCallback)((TT => {
            if (!oT.current) return;
            const kT = oT.current.querySelectorAll(".DocsHighlight");
            if (0 === kT.length) return;
            const cT = (GT + TT + kT.length) % kT.length;
            VT(cT), ZT(cT)
          }), [GT]),
          Mk = (0, lT.useCallback)((TT => {
            var kT;
            const cT = null === (kT = aT[TT]) || void 0 === kT ? void 0 : kT.tabStep;
            cT && cT === UT && (0, DT.f)(cT), TT !== bT ? (XT(!0), zT(TT), VT(0), oT.current && (oT.current.scrollTop = 0), nT && ZT(0)) : XT(!uT)
          }), [nT, bT, uT, UT]),
          Kk = (0, lT.useCallback)((TT => {
            var kT;
            const cT = Array.from((null === (kT = oT.current) || void 0 === kT ? void 0 : kT.querySelectorAll(".DocsH2, .DocsH3")) || []).find((kT => {
              var cT;
              return null === (cT = kT.textContent) || void 0 === cT ? void 0 : cT.includes(TT)
            }));
            cT && cT.scrollIntoView({
              block: "start",
              behavior: "smooth"
            })
          }), [oT]),
          Ok = (0, lT.useCallback)((TT => {
            var kT, cT;
            const lT = null !== (kT = null === (cT = JT.current) || void 0 === cT ? void 0 : cT.clientWidth) && void 0 !== kT ? kT : window.innerWidth,
              MT = Math.max(120, lT - 200);
            return Math.min(Math.max(TT, 120), MT)
          }), []),
          yk = (0, lT.useCallback)((() => {
            var TT;
            RT.current && (RT.current = !1, null === (TT = JT.current) || void 0 === TT || TT.classList.remove("DocsSidebarResizing"))
          }), []),
          fk = (0, lT.useCallback)((TT => {
            var kT;
            TT.preventDefault(), RT.current = !0, null === (kT = JT.current) || void 0 === kT || kT.classList.add("DocsSidebarResizing")
          }), []);
        (0, lT.useEffect)((() => {
          const TT = JT.current,
            kT = TT => {
              if (!RT.current || !JT.current) return;
              const kT = JT.current.getBoundingClientRect().left;
              LT(Ok(TT.clientX - kT))
            };
          return window.addEventListener("mousemove", kT), window.addEventListener("mouseup", yk), () => {
            window.removeEventListener("mousemove", kT), window.removeEventListener("mouseup", yk), null === TT || void 0 === TT || TT.classList.remove("DocsSidebarResizing")
          }
        }), [Ok, yk]);
        const xk = (0, lT.useCallback)((TT => {
          if (TT) {
            const [kT, cT] = TT.slice(1).split("-");
            cT && (gT.current = {
              docId: kT,
              subsection: cT
            }), kT && Mk(kT)
          }
        }), [Mk]);
        (0, lT.useEffect)((() => {
          const TT = gT.current;
          TT && bT === TT.docId && (setTimeout((() => {
            Kk(TT.subsection)
          }), 0), gT.current = null)
        })), (0, lT.useEffect)((() => {
          if (!oT.current) return;
          oT.current.querySelectorAll("a.DocsAnchor").forEach((TT => {
            TT.addEventListener("click", (kT => {
              kT.preventDefault(), xk(TT.dataset.id)
            }))
          }))
        }), [bT, xk]);
        const Ik = Object.values(aT).find((TT => (null === TT || void 0 === TT ? void 0 : TT.pageStep) === UT));
        return (0, jT.jsx)(ST.i, {
          tutorial: "docsOverview",
          step: null !== (FT = null === Ik || void 0 === Ik ? void 0 : Ik.pageStep) && void 0 !== FT ? FT : "docsPanel",
          text: qT(null !== (rT = null === Ik || void 0 === Ik ? void 0 : Ik.pageText) && void 0 !== rT ? rT : "codeEditor:tutorialDocsPanel"),
          enabled: mT,
          placement: "left",
          onPrevious: Ik ? void 0 : wT,
          children: (0, jT.jsxs)("div", {
            className: "DocsPanel",
            ref: JT,
            children: [(0, jT.jsxs)("div", {
              className: "DocsSidebar",
              style: {
                width: dT,
                minWidth: dT,
                maxWidth: dT
              },
              children: [(0, jT.jsx)(KT.b, {
                className: "DocsSearch",
                placeholderText: "\ud83d\udd0e Search docs...",
                onValueChange: TT => {
                  eT(TT), VT(0), ZT(0)
                }
              }, YT), (0, jT.jsx)("div", {
                className: "DocsNavList",
                children: nT ? pT.map((TT => (0, jT.jsxs)("div", {
                  className: yT()("DocsNavItem", "SearchResult", {
                    Active: TT.doc.id === (null === iT || void 0 === iT ? void 0 : iT.id)
                  }),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    Mk(TT.doc.id)
                  },
                  children: [(0, jT.jsxs)("div", {
                    className: "SearchResultTitle",
                    children: [TT.doc.title, (0, jT.jsx)("span", {
                      className: "SearchResultCount",
                      children: TT.matchCount
                    })]
                  }), (0, jT.jsx)("div", {
                    className: "SearchResultSnippet",
                    children: hT(TT.snippet, HT)
                  })]
                }, TT.doc.id))) : MT.b.map((TT => {
                  const kT = (0, jT.jsxs)("div", {
                      className: yT()("DocsNavItem", {
                        Active: TT.id === (null === iT || void 0 === iT ? void 0 : iT.id)
                      }),
                      "data-pad-focusable": !0,
                      onClick: () => {
                        Mk(TT.id)
                      },
                      children: [(0, jT.jsx)("span", {
                        className: "DocsNavItemTitle",
                        children: TT.title
                      }), TT.subsections && TT.id === (null === iT || void 0 === iT ? void 0 : iT.id) && uT && (0, jT.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, jT.jsx)(NT.e, {
                          name: "angle-down"
                        })
                      }), TT.subsections && (TT.id !== (null === iT || void 0 === iT ? void 0 : iT.id) || !uT) && (0, jT.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, jT.jsx)(NT.e, {
                          name: "angle-up"
                        })
                      })]
                    }),
                    cT = aT[TT.id];
                  return (0, jT.jsxs)(lT.Fragment, {
                    children: [cT && (0, jT.jsx)(ST.i, {
                      tutorial: "docsOverview",
                      step: cT.tabStep,
                      text: qT(cT.tabText),
                      enabled: mT,
                      placement: "left",
                      waitForClick: !0,
                      children: kT
                    }), !cT && kT, uT && TT.subsections && TT.id === (null === iT || void 0 === iT ? void 0 : iT.id) && TT.subsections.map((TT => (0, jT.jsx)("div", {
                      className: "DocsNavItem DocsSubsection",
                      "data-pad-focusable": !0,
                      onClick: () => {
                        Kk(TT)
                      },
                      children: TT
                    }, TT)))]
                  }, TT.id)
                }))
              }), (0, jT.jsx)("div", {
                className: "DocsSidebarButtonContainer",
                children: (0, jT.jsx)(QT.c, {
                  tooltipInner: qT("codeEditor:popOutDocsTooltip"),
                  placement: "top",
                  children: (0, jT.jsx)(fT.e, {
                    className: "DocsSidebarButton",
                    onClick: PT,
                    children: qT("codeEditor:popOutDocs")
                  })
                })
              })]
            }), (0, jT.jsx)("div", {
              className: "DocsSidebarResizeHandle",
              onMouseDown: fk
            }), (0, jT.jsxs)("div", {
              className: "DocsContentWrapper",
              children: [nT && kk > 0 && (0, jT.jsxs)("div", {
                className: "DocsMatchNav",
                children: [(0, jT.jsxs)("span", {
                  className: "DocsMatchNavLabel",
                  children: [GT + 1, " / ", kk]
                }), (0, jT.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    lk(-1)
                  },
                  children: "\u25b2"
                }), (0, jT.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    lk(1)
                  },
                  children: "\u25bc"
                })]
              }), (0, jT.jsx)("div", {
                className: "DocsContent",
                ref: oT,
                dangerouslySetInnerHTML: {
                  __html: Tk
                }
              })]
            })]
          })
        })
      }))
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);