export const id = 305;
export const ids = [305];
export const modules = {
  41603: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      default: () => OT
    });
    var WT = mT(63),
      zT = mT(4850),
      MT = mT(1792),
      gT = mT(1126),
      nT = mT.n(gT),
      HT = mT(1569),
      kT = mT(1288),
      jT = mT(4808),
      lT = mT(4825),
      LT = mT(4833),
      pT = mT(1188);

    function BT(TT) {
      return TT.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    jT.c.registerLanguage("javascript", lT.b), jT.c.registerLanguage("typescript", LT.d);

    function ZT(TT, UT) {
      const mT = BT(TT).replace(/"/g, "&quot;");
      return `<button type="button" class="DocsCopyButton ${UT}" title="${mT}" aria-label="${mT}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5"/><path d="M10.5 3.5V1.5H1.5v9h2"/></svg><svg class="DocsCopiedIcon" viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 8.5l3.5 3.5 7.5-7.5"/></svg></button>`
    }

    function cT(TT, UT) {
      const mT = [],
        WT = TT.toLowerCase(),
        zT = UT.toLowerCase();
      let MT = 0;
      for (; MT < TT.length;) {
        const gT = WT.indexOf(zT, MT);
        if (-1 === gT) {
          mT.push(TT.slice(MT));
          break
        }
        gT > MT && mT.push(TT.slice(MT, gT)), mT.push((0, pT.jsx)("mark", {
          className: "DocsHighlight",
          children: TT.slice(gT, gT + UT.length)
        }, gT)), MT = gT + UT.length
      }
      return mT
    }
    var vT = mT(1135),
      fT = mT(1475),
      qT = mT(36974),
      iT = mT(36982);
    const bT = {
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
      OT = (0, WT.memo)((function(TT) {
        var UT, mT, gT, lT, LT, OT, eT;
        let {
          popOutDocs: YT,
          hideDocs: JT,
          tutorialEnabled: xT
        } = TT;
        const [dT, wT] = (0, WT.useState)(zT.d[0].id), tT = (0, WT.useRef)(null), aT = (0, WT.useRef)(null), [yT, XT] = (0, WT.useState)(""), [IT, QT] = (0, WT.useState)(0), [sT, FT] = (0, WT.useState)(null), [PT, VT] = (0, WT.useState)(!1), [uT, CT] = (0, WT.useState)(160), rT = (0, WT.useRef)(!1), KT = (0, WT.useRef)(null), ST = (0, qT.i)("docsOverview"), [GT, NT] = (0, WT.useState)(0), ET = Object.values(bT).some((TT => (null === TT || void 0 === TT ? void 0 : TT.tabStep) === ST));
        (0, WT.useEffect)((() => {
          ET && yT.length > 0 && (XT(""), NT((TT => TT + 1)))
        }), [ET, yT]);
        const hT = yT.length > 0,
          DT = (0, WT.useMemo)((() => function(TT) {
            if (!TT) return [];
            const UT = TT.toLowerCase(),
              mT = [];
            for (const WT of zT.d) {
              const TT = WT.content.toLowerCase();
              let zT = 0,
                MT = -1,
                gT = 0,
                nT = TT.indexOf(UT, gT);
              for (; - 1 !== nT;) - 1 === MT && (MT = nT), zT++, gT = nT + UT.length, nT = TT.indexOf(UT, gT);
              if (0 === zT) continue;
              const HT = Math.max(0, MT - 40),
                kT = Math.min(WT.content.length, MT + UT.length + 40),
                jT = (HT > 0 ? "..." : "") + WT.content.slice(HT, kT).replace(/\n/g, " ") + (kT < WT.content.length ? "..." : "");
              mT.push({
                doc: WT,
                matchCount: zT,
                snippet: jT
              })
            }
            return mT.sort(((TT, UT) => UT.matchCount - TT.matchCount)), mT
          }(yT)), [yT]),
          oT = hT ? null !== (UT = null !== (mT = null === (gT = DT.find((TT => TT.doc.id === dT))) || void 0 === gT ? void 0 : gT.doc) && void 0 !== mT ? mT : null === (lT = DT[0]) || void 0 === lT ? void 0 : lT.doc) && void 0 !== UT ? UT : null : null !== (LT = zT.d.find((TT => TT.id === dT))) && void 0 !== LT ? LT : zT.d[0],
          {
            t: AT
          } = (0, kT.z)(),
          RT = AT("codeEditor:copySnippet"),
          TU = (0, WT.useMemo)((() => oT ? function(TT, UT, mT, WT) {
            let zT = UT;
            zT = zT.replace(/\r\n/g, "\n");
            const MT = [];
            zT = zT.replace(/```(\w*)\n([\s\S]*?)```/g, ((TT, UT, WT) => {
              const zT = MT.length;
              let gT = BT(WT);
              try {
                gT = jT.c.highlight(WT.trimEnd(), {
                  language: UT
                }).value
              } catch (nT) {
                console.warn("Could not highlight documentation code block", nT)
              }
              return MT.push(`<div class="DocsCodeBlockRow"><pre class="DocsCodeBlock" data-lang="${UT}"><code>${gT}</code></pre>${ZT(mT,"DocsCopyBlock")}</div>`), `\0PLACEHOLDER_${zT}\0`
            })), zT = zT.replace(/(`{1,2})([^\n]+?)\1(?!`)/g, ((UT, WT, zT) => {
              const gT = MT.length,
                nT = 2 === WT.length ? zT.replace(/^ (.*) $/, "$1") : zT;
              let HT = BT(nT);
              try {
                "apiReference" !== TT && "callbacks" !== TT || (HT = jT.c.highlight(nT.trimEnd().replaceAll("\\|", "|"), {
                  language: "typescript"
                }).value)
              } catch (kT) {
                console.warn("Could not highlight documentation snippet", kT)
              }
              return MT.push(`<span class="DocsInlineCodeRow"><code class="DocsInlineCode">${HT}</code>${ZT(mT,"DocsCopyInline")}</span>`), `\0PLACEHOLDER_${gT}\0`
            })), zT = BT(zT), zT = zT.replace(/^#### (.+)$/gm, '<h4 class="DocsH4">$1</h4>'), zT = zT.replace(/^### (.+)$/gm, '<h3 class="DocsH3">$1</h3>'), zT = zT.replace(/^## (.+)$/gm, '<h2 class="DocsH2">$1</h2>'), zT = zT.replace(/^# (.+)$/gm, '<h1 class="DocsH1">$1</h1>'), zT = zT.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"), zT = zT.replace(/\[([^\]]+)\]\(([^)]+)\)/g, ((TT, UT, mT) => mT.startsWith("#") ? `<a class="DocsAnchor" data-id="${mT}">${UT}</a>` : `<a href="${mT}" target="_blank" rel="noopener noreferrer">${UT}</a>`)), zT = zT.replace(/^(\|.+\|)\n(\|[\s:\-|]+\|)\n((?:\|.+\|\s*\r?\n?)*)/gm, ((TT, UT, mT, WT) => `<table class="DocsTable"><thead><tr>${UT.split("|").slice(1,-1).map((TT=>`<th>${TT.trim()}</th>`)).join("")}</tr></thead><tbody>${WT.trim().split("\n").map((TT=>`<tr>${TT.split("|").slice(1,-1).map((TT=>`<td>${TT.trim()}</td>`)).join("")}</tr>`)).join("")}</tbody></table>`)), zT = zT.replace(/(?:^[ \t]*([*-])[ \t]+.+(?:\n|$))+/gm, ((TT, UT) => function(TT, UT) {
              const mT = "*" === UT,
                WT = [];
              for (const nT of TT.split("\n")) {
                const TT = nT.match(/^([ \t]*)(?:[*-])[ \t]+(.+)$/);
                TT && WT.push({
                  indent: TT[1].replace(/\t/g, "  ").length,
                  content: TT[2]
                })
              }
              let zT = "";
              const MT = [],
                gT = mT ? "ol" : "ul";
              for (const {
                  indent: nT,
                  content: HT
                }
                of WT) {
                for (; MT.length > 0 && nT < MT[MT.length - 1];) zT += `</${gT}></li>`, MT.pop();
                (0 === MT.length || nT > MT[MT.length - 1]) && (MT.length > 0 && (zT = zT.replace(/<\/li>$/, "")), zT += `<${gT} class="DocsList">`, MT.push(nT)), zT += `<li class="DocsListItem">${HT}</li>`
              }
              for (; MT.length > 0;) zT += `</${gT}>`, MT.pop(), MT.length > 0 && (zT += "</li>");
              return zT
            }(TT, UT))), zT = zT.replace(/\n{2,}/g, "\n<br/>\n");
            for (let gT = 0; gT < MT.length; gT++) zT = zT.replace(`\0PLACEHOLDER_${gT}\0`, MT[gT]);
            if (WT) {
              const TT = BT(WT).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                UT = new RegExp(TT, "gi");
              zT = zT.replace(/([^<>]+)(?=<|$)/g, (TT => TT.replace(UT, (TT => `<mark class="DocsHighlight">${TT}</mark>`))))
            }
            return zT
          }(oT.id, oT.content, RT, hT ? yT : void 0) : ""), [oT, RT, hT, yT]);
        (0, WT.useEffect)((() => {
          const TT = aT.current;
          if (!TT) return;
          const UT = TT => {
            var UT, mT, WT, zT, MT;
            const gT = null === (UT = (mT = TT.target).closest) || void 0 === UT ? void 0 : UT.call(mT, ".DocsCopyButton");
            if (!gT) return;
            TT.preventDefault(), TT.stopPropagation();
            const nT = null !== (WT = null === (zT = gT.parentElement) || void 0 === zT || null === (MT = zT.querySelector("code")) || void 0 === MT ? void 0 : MT.textContent) && void 0 !== WT ? WT : "";
            navigator.clipboard.writeText(nT.trimEnd()).then((() => {
              gT.classList.add("Copied"), setTimeout((() => {
                gT.classList.remove("Copied")
              }), 1500)
            })).catch((TT => {
              console.warn("Could not copy documentation code", TT)
            }))
          };
          return TT.addEventListener("click", UT, !0), () => {
            TT.removeEventListener("click", UT, !0)
          }
        }), []);
        const [UU, mU] = (0, WT.useState)(0);
        (0, WT.useEffect)((() => {
          if (!hT || !aT.current) return void mU(0);
          const TT = aT.current.querySelectorAll(".DocsHighlight").length;
          mU(TT)
        }), [hT, TU]), (0, WT.useEffect)((() => {
          if (null === sT || !aT.current) return;
          FT(null);
          const TT = aT.current.querySelectorAll(".DocsHighlight");
          if (0 === TT.length) return;
          const UT = Math.min(sT, TT.length - 1);
          QT(UT), TT.forEach((TT => {
            TT.classList.remove("DocsHighlightActive")
          })), TT[UT].classList.add("DocsHighlightActive"), TT[UT].scrollIntoView({
            block: "center",
            behavior: "smooth"
          })
        }), [sT, TU]);
        const WU = (0, WT.useCallback)((TT => {
            if (!aT.current) return;
            const UT = aT.current.querySelectorAll(".DocsHighlight");
            if (0 === UT.length) return;
            const mT = (IT + TT + UT.length) % UT.length;
            QT(mT), FT(mT)
          }), [IT]),
          zU = (0, WT.useCallback)((TT => {
            var UT;
            const mT = null === (UT = bT[TT]) || void 0 === UT ? void 0 : UT.tabStep;
            mT && mT === ST && (0, iT.g)(mT), TT !== dT ? (VT(!0), wT(TT), QT(0), aT.current && (aT.current.scrollTop = 0), hT && FT(0)) : VT(!PT)
          }), [hT, dT, PT, ST]),
          MU = (0, WT.useCallback)((TT => {
            var UT;
            const mT = Array.from((null === (UT = aT.current) || void 0 === UT ? void 0 : UT.querySelectorAll(".DocsH2, .DocsH3")) || []).find((UT => {
              var mT;
              return null === (mT = UT.textContent) || void 0 === mT ? void 0 : mT.includes(TT)
            }));
            mT && mT.scrollIntoView({
              block: "start",
              behavior: "smooth"
            })
          }), [aT]),
          gU = (0, WT.useCallback)((TT => {
            var UT, mT;
            const WT = null !== (UT = null === (mT = tT.current) || void 0 === mT ? void 0 : mT.clientWidth) && void 0 !== UT ? UT : window.innerWidth,
              zT = Math.max(120, WT - 200);
            return Math.min(Math.max(TT, 120), zT)
          }), []),
          nU = (0, WT.useCallback)((() => {
            var TT;
            rT.current && (rT.current = !1, null === (TT = tT.current) || void 0 === TT || TT.classList.remove("DocsSidebarResizing"))
          }), []),
          HU = (0, WT.useCallback)((TT => {
            var UT;
            TT.preventDefault(), rT.current = !0, null === (UT = tT.current) || void 0 === UT || UT.classList.add("DocsSidebarResizing")
          }), []);
        (0, WT.useEffect)((() => {
          const TT = tT.current,
            UT = TT => {
              if (!rT.current || !tT.current) return;
              const UT = tT.current.getBoundingClientRect().left;
              CT(gU(TT.clientX - UT))
            };
          return window.addEventListener("mousemove", UT), window.addEventListener("mouseup", nU), () => {
            window.removeEventListener("mousemove", UT), window.removeEventListener("mouseup", nU), null === TT || void 0 === TT || TT.classList.remove("DocsSidebarResizing")
          }
        }), [gU, nU]);
        const kU = (0, WT.useCallback)((TT => {
          if (TT) {
            const [UT, mT] = TT.slice(1).split("-");
            mT && (KT.current = {
              docId: UT,
              subsection: mT
            }), UT && zU(UT)
          }
        }), [zU]);
        (0, WT.useEffect)((() => {
          const TT = KT.current;
          TT && dT === TT.docId && (setTimeout((() => {
            MU(TT.subsection)
          }), 0), KT.current = null)
        })), (0, WT.useEffect)((() => {
          if (!aT.current) return;
          aT.current.querySelectorAll("a.DocsAnchor").forEach((TT => {
            TT.addEventListener("click", (UT => {
              UT.preventDefault(), kU(TT.dataset.id)
            }))
          }))
        }), [dT, kU]);
        const jU = Object.values(bT).find((TT => (null === TT || void 0 === TT ? void 0 : TT.pageStep) === ST));
        return (0, pT.jsx)(qT.f, {
          tutorial: "docsOverview",
          step: null !== (OT = null === jU || void 0 === jU ? void 0 : jU.pageStep) && void 0 !== OT ? OT : "docsPanel",
          text: AT(null !== (eT = null === jU || void 0 === jU ? void 0 : jU.pageText) && void 0 !== eT ? eT : "codeEditor:tutorialDocsPanel"),
          enabled: xT,
          placement: "left",
          onPrevious: jU ? void 0 : JT,
          children: (0, pT.jsxs)("div", {
            className: "DocsPanel",
            ref: tT,
            children: [(0, pT.jsxs)("div", {
              className: "DocsSidebar",
              style: {
                width: uT,
                minWidth: uT,
                maxWidth: uT
              },
              children: [(0, pT.jsx)(MT.e, {
                className: "DocsSearch",
                placeholderText: "\ud83d\udd0e Search docs...",
                onValueChange: TT => {
                  XT(TT), QT(0), FT(0)
                }
              }, GT), (0, pT.jsx)("div", {
                className: "DocsNavList",
                children: hT ? DT.map((TT => (0, pT.jsxs)("div", {
                  className: nT()("DocsNavItem", "SearchResult", {
                    Active: TT.doc.id === (null === oT || void 0 === oT ? void 0 : oT.id)
                  }),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    zU(TT.doc.id)
                  },
                  children: [(0, pT.jsxs)("div", {
                    className: "SearchResultTitle",
                    children: [TT.doc.title, (0, pT.jsx)("span", {
                      className: "SearchResultCount",
                      children: TT.matchCount
                    })]
                  }), (0, pT.jsx)("div", {
                    className: "SearchResultSnippet",
                    children: cT(TT.snippet, yT)
                  })]
                }, TT.doc.id))) : zT.d.map((TT => {
                  const UT = (0, pT.jsxs)("div", {
                      className: nT()("DocsNavItem", {
                        Active: TT.id === (null === oT || void 0 === oT ? void 0 : oT.id)
                      }),
                      "data-pad-focusable": !0,
                      onClick: () => {
                        zU(TT.id)
                      },
                      children: [(0, pT.jsx)("span", {
                        className: "DocsNavItemTitle",
                        children: TT.title
                      }), TT.subsections && TT.id === (null === oT || void 0 === oT ? void 0 : oT.id) && PT && (0, pT.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, pT.jsx)(vT.c, {
                          name: "angle-down"
                        })
                      }), TT.subsections && (TT.id !== (null === oT || void 0 === oT ? void 0 : oT.id) || !PT) && (0, pT.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, pT.jsx)(vT.c, {
                          name: "angle-up"
                        })
                      })]
                    }),
                    mT = bT[TT.id];
                  return (0, pT.jsxs)(WT.Fragment, {
                    children: [mT && (0, pT.jsx)(qT.f, {
                      tutorial: "docsOverview",
                      step: mT.tabStep,
                      text: AT(mT.tabText),
                      enabled: xT,
                      placement: "left",
                      waitForClick: !0,
                      children: UT
                    }), !mT && UT, PT && TT.subsections && TT.id === (null === oT || void 0 === oT ? void 0 : oT.id) && TT.subsections.map((TT => (0, pT.jsx)("div", {
                      className: "DocsNavItem DocsSubsection",
                      "data-pad-focusable": !0,
                      onClick: () => {
                        MU(TT)
                      },
                      children: TT
                    }, TT)))]
                  }, TT.id)
                }))
              }), (0, pT.jsx)("div", {
                className: "DocsSidebarButtonContainer",
                children: (0, pT.jsx)(fT.e, {
                  tooltipInner: AT("codeEditor:popOutDocsTooltip"),
                  placement: "top",
                  children: (0, pT.jsx)(HT.e, {
                    className: "DocsSidebarButton",
                    onClick: YT,
                    children: AT("codeEditor:popOutDocs")
                  })
                })
              })]
            }), (0, pT.jsx)("div", {
              className: "DocsSidebarResizeHandle",
              onMouseDown: HU
            }), (0, pT.jsxs)("div", {
              className: "DocsContentWrapper",
              children: [hT && UU > 0 && (0, pT.jsxs)("div", {
                className: "DocsMatchNav",
                children: [(0, pT.jsxs)("span", {
                  className: "DocsMatchNavLabel",
                  children: [IT + 1, " / ", UU]
                }), (0, pT.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    WU(-1)
                  },
                  children: "\u25b2"
                }), (0, pT.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    WU(1)
                  },
                  children: "\u25bc"
                })]
              }), (0, pT.jsx)("div", {
                className: "DocsContent",
                ref: aT,
                dangerouslySetInnerHTML: {
                  __html: TU
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