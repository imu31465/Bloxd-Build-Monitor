export const id = 281;
export const ids = [281];
export const modules = {
  40202: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      default: () => tB
    });
    var VB = dB(62),
      yB = dB(4133),
      pB = dB(1555),
      lB = dB(933),
      JB = dB.n(lB),
      YB = dB(1324),
      gB = dB(1078),
      oB = dB(4105),
      kB = dB(4117),
      LB = dB(4122),
      OB = dB(980);

    function DB(BB) {
      return BB.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    oB.c.registerLanguage("javascript", kB.b), oB.c.registerLanguage("typescript", LB.d);

    function uB(BB, TB) {
      const dB = DB(BB).replace(/"/g, "&quot;");
      return `<button type="button" class="DocsCopyButton ${TB}" title="${dB}" aria-label="${dB}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5" rx="1.5"/><path d="M10.5 3.5V3A1.5 1.5 0 0 0 9 1.5H3A1.5 1.5 0 0 0 1.5 3v6A1.5 1.5 0 0 0 3 10.5h.5"/></svg><svg class="DocsCopiedIcon" viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 8.5l3.5 3.5 7.5-7.5"/></svg></button>`
    }

    function HB(BB, TB) {
      const dB = [],
        VB = BB.toLowerCase(),
        yB = TB.toLowerCase();
      let pB = 0;
      for (; pB < BB.length;) {
        const lB = VB.indexOf(yB, pB);
        if (-1 === lB) {
          dB.push(BB.slice(pB));
          break
        }
        lB > pB && dB.push(BB.slice(pB, lB)), dB.push((0, OB.jsx)("mark", {
          className: "DocsHighlight",
          children: BB.slice(lB, lB + TB.length)
        }, lB)), pB = lB + TB.length
      }
      return dB
    }
    var EB = dB(946),
      vB = dB(1249),
      mB = dB(35856),
      iB = dB(35860);
    const NB = {
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
      tB = (0, VB.memo)((function(BB) {
        var TB, dB, lB, kB, LB, tB, fB;
        let {
          popOutDocs: sB,
          hideDocs: MB,
          tutorialEnabled: zB
        } = BB;
        const [wB, UB] = (0, VB.useState)(yB.d[0].id), FB = (0, VB.useRef)(null), KB = (0, VB.useRef)(null), [rB, IB] = (0, VB.useState)(""), [cB, SB] = (0, VB.useState)(0), [PB, QB] = (0, VB.useState)(null), [RB, aB] = (0, VB.useState)(!1), [ZB, XB] = (0, VB.useState)(160), WB = (0, VB.useRef)(!1), hB = (0, VB.useRef)(null), CB = (0, mB.l)("docsOverview"), [GB, qB] = (0, VB.useState)(0), xB = Object.values(NB).some((BB => (null === BB || void 0 === BB ? void 0 : BB.tabStep) === CB));
        (0, VB.useEffect)((() => {
          xB && rB.length > 0 && (IB(""), qB((BB => BB + 1)))
        }), [xB, rB]);
        const jB = rB.length > 0,
          AB = (0, VB.useMemo)((() => function(BB) {
            if (!BB) return [];
            const TB = BB.toLowerCase(),
              dB = [];
            for (const VB of yB.d) {
              const BB = VB.content.toLowerCase();
              let yB = 0,
                pB = -1,
                lB = 0,
                JB = BB.indexOf(TB, lB);
              for (; - 1 !== JB;) - 1 === pB && (pB = JB), yB++, lB = JB + TB.length, JB = BB.indexOf(TB, lB);
              if (0 === yB) continue;
              const YB = Math.max(0, pB - 40),
                gB = Math.min(VB.content.length, pB + TB.length + 40),
                oB = (YB > 0 ? "..." : "") + VB.content.slice(YB, gB).replace(/\n/g, " ") + (gB < VB.content.length ? "..." : "");
              dB.push({
                doc: VB,
                matchCount: yB,
                snippet: oB
              })
            }
            return dB.sort(((BB, TB) => TB.matchCount - BB.matchCount)), dB
          }(rB)), [rB]),
          bB = jB ? null !== (TB = null !== (dB = null === (lB = AB.find((BB => BB.doc.id === wB))) || void 0 === lB ? void 0 : lB.doc) && void 0 !== dB ? dB : null === (kB = AB[0]) || void 0 === kB ? void 0 : kB.doc) && void 0 !== TB ? TB : null : null !== (LB = yB.d.find((BB => BB.id === wB))) && void 0 !== LB ? LB : yB.d[0],
          {
            t: nB
          } = (0, gB.z)(),
          eB = nB("codeEditor:copySnippet"),
          BT = (0, VB.useMemo)((() => bB ? function(BB, TB, dB, VB) {
            let yB = TB;
            yB = yB.replace(/\r\n/g, "\n");
            const pB = [];
            yB = yB.replace(/```(\w*)\n([\s\S]*?)```/g, ((BB, TB, VB) => {
              const yB = pB.length;
              let lB = DB(VB);
              try {
                lB = oB.c.highlight(VB.trimEnd(), {
                  language: TB
                }).value
              } catch (JB) {
                console.warn("Could not highlight documentation code block", JB)
              }
              return pB.push(`<div class="DocsCodeBlockRow"><pre class="DocsCodeBlock" data-lang="${TB}"><code>${lB}</code></pre>${uB(dB,"DocsCopyBlock")}</div>`), `\0PLACEHOLDER_${yB}\0`
            })), yB = yB.replace(/(`{1,2})([^\n]+?)\1(?!`)/g, ((TB, VB, yB) => {
              const lB = pB.length,
                JB = 2 === VB.length ? yB.replace(/^ (.*) $/, "$1") : yB;
              let YB = DB(JB);
              try {
                "apiReference" !== BB && "callbacks" !== BB || (YB = oB.c.highlight(JB.trimEnd().replaceAll("\\|", "|"), {
                  language: "typescript"
                }).value)
              } catch (gB) {
                console.warn("Could not highlight documentation snippet", gB)
              }
              return pB.push(`<span class="DocsInlineCodeRow"><code class="DocsInlineCode">${YB}</code>${uB(dB,"DocsCopyInline")}</span>`), `\0PLACEHOLDER_${lB}\0`
            })), yB = DB(yB), yB = yB.replace(/^#### (.+)$/gm, '<h4 class="DocsH4">$1</h4>'), yB = yB.replace(/^### (.+)$/gm, '<h3 class="DocsH3">$1</h3>'), yB = yB.replace(/^## (.+)$/gm, '<h2 class="DocsH2">$1</h2>'), yB = yB.replace(/^# (.+)$/gm, '<h1 class="DocsH1">$1</h1>'), yB = yB.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"), yB = yB.replace(/\[([^\]]+)\]\(([^)]+)\)/g, ((BB, TB, dB) => dB.startsWith("#") ? `<a class="DocsAnchor" data-id="${dB}">${TB}</a>` : `<a href="${dB}" target="_blank" rel="noopener noreferrer">${TB}</a>`)), yB = yB.replace(/^(\|.+\|)\n(\|[\s:\-|]+\|)\n((?:\|.+\|\s*\r?\n?)*)/gm, ((BB, TB, dB, VB) => `<table class="DocsTable"><thead><tr>${TB.split("|").slice(1,-1).map((BB=>`<th>${BB.trim()}</th>`)).join("")}</tr></thead><tbody>${VB.trim().split("\n").map((BB=>`<tr>${BB.split("|").slice(1,-1).map((BB=>`<td>${BB.trim()}</td>`)).join("")}</tr>`)).join("")}</tbody></table>`)), yB = yB.replace(/(?:^[ \t]*([*-])[ \t]+.+(?:\n|$))+/gm, ((BB, TB) => function(BB, TB) {
              const dB = "*" === TB,
                VB = [];
              for (const JB of BB.split("\n")) {
                const BB = JB.match(/^([ \t]*)(?:[*-])[ \t]+(.+)$/);
                BB && VB.push({
                  indent: BB[1].replace(/\t/g, "  ").length,
                  content: BB[2]
                })
              }
              let yB = "";
              const pB = [],
                lB = dB ? "ol" : "ul";
              for (const {
                  indent: JB,
                  content: YB
                }
                of VB) {
                for (; pB.length > 0 && JB < pB[pB.length - 1];) yB += `</${lB}></li>`, pB.pop();
                (0 === pB.length || JB > pB[pB.length - 1]) && (pB.length > 0 && (yB = yB.replace(/<\/li>$/, "")), yB += `<${lB} class="DocsList">`, pB.push(JB)), yB += `<li class="DocsListItem">${YB}</li>`
              }
              for (; pB.length > 0;) yB += `</${lB}>`, pB.pop(), pB.length > 0 && (yB += "</li>");
              return yB
            }(BB, TB))), yB = yB.replace(/\n{2,}/g, "\n<br/>\n");
            for (let lB = 0; lB < pB.length; lB++) yB = yB.replace(`\0PLACEHOLDER_${lB}\0`, pB[lB]);
            if (VB) {
              const BB = DB(VB).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                TB = new RegExp(BB, "gi");
              yB = yB.replace(/([^<>]+)(?=<|$)/g, (BB => BB.replace(TB, (BB => `<mark class="DocsHighlight">${BB}</mark>`))))
            }
            return yB
          }(bB.id, bB.content, eB, jB ? rB : void 0) : ""), [bB, eB, jB, rB]);
        (0, VB.useEffect)((() => {
          const BB = KB.current;
          if (!BB) return;
          const TB = BB => {
            var TB, dB, VB, yB, pB;
            const lB = null === (TB = (dB = BB.target).closest) || void 0 === TB ? void 0 : TB.call(dB, ".DocsCopyButton");
            if (!lB) return;
            BB.preventDefault(), BB.stopPropagation();
            const JB = null !== (VB = null === (yB = lB.parentElement) || void 0 === yB || null === (pB = yB.querySelector("code")) || void 0 === pB ? void 0 : pB.textContent) && void 0 !== VB ? VB : "";
            navigator.clipboard.writeText(JB.trimEnd()).then((() => {
              lB.classList.add("Copied"), setTimeout((() => {
                lB.classList.remove("Copied")
              }), 1500)
            })).catch((BB => {
              console.warn("Could not copy documentation code", BB)
            }))
          };
          return BB.addEventListener("click", TB, !0), () => {
            BB.removeEventListener("click", TB, !0)
          }
        }), []);
        const [TT, dT] = (0, VB.useState)(0);
        (0, VB.useEffect)((() => {
          if (!jB || !KB.current) return void dT(0);
          const BB = KB.current.querySelectorAll(".DocsHighlight").length;
          dT(BB)
        }), [jB, BT]), (0, VB.useEffect)((() => {
          if (null === PB || !KB.current) return;
          QB(null);
          const BB = KB.current.querySelectorAll(".DocsHighlight");
          if (0 === BB.length) return;
          const TB = Math.min(PB, BB.length - 1);
          SB(TB), BB.forEach((BB => {
            BB.classList.remove("DocsHighlightActive")
          })), BB[TB].classList.add("DocsHighlightActive"), BB[TB].scrollIntoView({
            block: "center",
            behavior: "smooth"
          })
        }), [PB, BT]);
        const VT = (0, VB.useCallback)((BB => {
            if (!KB.current) return;
            const TB = KB.current.querySelectorAll(".DocsHighlight");
            if (0 === TB.length) return;
            const dB = (cB + BB + TB.length) % TB.length;
            SB(dB), QB(dB)
          }), [cB]),
          yT = (0, VB.useCallback)((BB => {
            var TB;
            const dB = null === (TB = NB[BB]) || void 0 === TB ? void 0 : TB.tabStep;
            dB && dB === CB && (0, iB.g)(dB), BB !== wB ? (aB(!0), UB(BB), SB(0), KB.current && (KB.current.scrollTop = 0), jB && QB(0)) : aB(!RB)
          }), [jB, wB, RB, CB]),
          pT = (0, VB.useCallback)((BB => {
            var TB;
            const dB = Array.from((null === (TB = KB.current) || void 0 === TB ? void 0 : TB.querySelectorAll(".DocsH2, .DocsH3")) || []).find((TB => {
              var dB;
              return null === (dB = TB.textContent) || void 0 === dB ? void 0 : dB.includes(BB)
            }));
            dB && dB.scrollIntoView({
              block: "start",
              behavior: "smooth"
            })
          }), [KB]),
          lT = (0, VB.useCallback)((BB => {
            var TB, dB;
            const VB = null !== (TB = null === (dB = FB.current) || void 0 === dB ? void 0 : dB.clientWidth) && void 0 !== TB ? TB : window.innerWidth,
              yB = Math.max(120, VB - 200);
            return Math.min(Math.max(BB, 120), yB)
          }), []),
          JT = (0, VB.useCallback)((() => {
            var BB;
            WB.current && (WB.current = !1, null === (BB = FB.current) || void 0 === BB || BB.classList.remove("DocsSidebarResizing"))
          }), []),
          YT = (0, VB.useCallback)((BB => {
            var TB;
            BB.preventDefault(), WB.current = !0, null === (TB = FB.current) || void 0 === TB || TB.classList.add("DocsSidebarResizing")
          }), []);
        (0, VB.useEffect)((() => {
          const BB = FB.current,
            TB = BB => {
              if (!WB.current || !FB.current) return;
              const TB = FB.current.getBoundingClientRect().left;
              XB(lT(BB.clientX - TB))
            };
          return window.addEventListener("mousemove", TB), window.addEventListener("mouseup", JT), () => {
            window.removeEventListener("mousemove", TB), window.removeEventListener("mouseup", JT), null === BB || void 0 === BB || BB.classList.remove("DocsSidebarResizing")
          }
        }), [lT, JT]);
        const gT = (0, VB.useCallback)((BB => {
          if (BB) {
            const [TB, dB] = BB.slice(1).split("-");
            dB && (hB.current = {
              docId: TB,
              subsection: dB
            }), TB && yT(TB)
          }
        }), [yT]);
        (0, VB.useEffect)((() => {
          const BB = hB.current;
          BB && wB === BB.docId && (setTimeout((() => {
            pT(BB.subsection)
          }), 0), hB.current = null)
        })), (0, VB.useEffect)((() => {
          if (!KB.current) return;
          KB.current.querySelectorAll("a.DocsAnchor").forEach((BB => {
            BB.addEventListener("click", (TB => {
              TB.preventDefault(), gT(BB.dataset.id)
            }))
          }))
        }), [wB, gT]);
        const oT = Object.values(NB).find((BB => (null === BB || void 0 === BB ? void 0 : BB.pageStep) === CB));
        return (0, OB.jsx)(mB.h, {
          tutorial: "docsOverview",
          step: null !== (tB = null === oT || void 0 === oT ? void 0 : oT.pageStep) && void 0 !== tB ? tB : "docsPanel",
          text: nB(null !== (fB = null === oT || void 0 === oT ? void 0 : oT.pageText) && void 0 !== fB ? fB : "codeEditor:tutorialDocsPanel"),
          enabled: zB,
          placement: "left",
          onPrevious: oT ? void 0 : MB,
          children: (0, OB.jsxs)("div", {
            className: "DocsPanel",
            ref: FB,
            children: [(0, OB.jsxs)("div", {
              className: "DocsSidebar",
              style: {
                width: ZB,
                minWidth: ZB,
                maxWidth: ZB
              },
              children: [(0, OB.jsx)(pB.e, {
                className: "DocsSearch",
                placeholderText: "\ud83d\udd0e Search docs...",
                onValueChange: BB => {
                  IB(BB), SB(0), QB(0)
                }
              }, GB), (0, OB.jsx)("div", {
                className: "DocsNavList",
                children: jB ? AB.map((BB => (0, OB.jsxs)("div", {
                  className: JB()("DocsNavItem", "SearchResult", {
                    Active: BB.doc.id === (null === bB || void 0 === bB ? void 0 : bB.id)
                  }),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    yT(BB.doc.id)
                  },
                  children: [(0, OB.jsxs)("div", {
                    className: "SearchResultTitle",
                    children: [BB.doc.title, (0, OB.jsx)("span", {
                      className: "SearchResultCount",
                      children: BB.matchCount
                    })]
                  }), (0, OB.jsx)("div", {
                    className: "SearchResultSnippet",
                    children: HB(BB.snippet, rB)
                  })]
                }, BB.doc.id))) : yB.d.map((BB => {
                  const TB = (0, OB.jsxs)("div", {
                      className: JB()("DocsNavItem", {
                        Active: BB.id === (null === bB || void 0 === bB ? void 0 : bB.id)
                      }),
                      "data-pad-focusable": !0,
                      onClick: () => {
                        yT(BB.id)
                      },
                      children: [(0, OB.jsx)("span", {
                        className: "DocsNavItemTitle",
                        children: BB.title
                      }), BB.subsections && BB.id === (null === bB || void 0 === bB ? void 0 : bB.id) && RB && (0, OB.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, OB.jsx)(EB.e, {
                          name: "angle-down"
                        })
                      }), BB.subsections && (BB.id !== (null === bB || void 0 === bB ? void 0 : bB.id) || !RB) && (0, OB.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, OB.jsx)(EB.e, {
                          name: "angle-up"
                        })
                      })]
                    }),
                    dB = NB[BB.id];
                  return (0, OB.jsxs)(VB.Fragment, {
                    children: [dB && (0, OB.jsx)(mB.h, {
                      tutorial: "docsOverview",
                      step: dB.tabStep,
                      text: nB(dB.tabText),
                      enabled: zB,
                      placement: "left",
                      waitForClick: !0,
                      children: TB
                    }), !dB && TB, RB && BB.subsections && BB.id === (null === bB || void 0 === bB ? void 0 : bB.id) && BB.subsections.map((BB => (0, OB.jsx)("div", {
                      className: "DocsNavItem DocsSubsection",
                      "data-pad-focusable": !0,
                      onClick: () => {
                        pT(BB)
                      },
                      children: BB
                    }, BB)))]
                  }, BB.id)
                }))
              }), (0, OB.jsx)("div", {
                className: "DocsSidebarButtonContainer",
                children: (0, OB.jsx)(vB.h, {
                  tooltipInner: nB("codeEditor:popOutDocsTooltip"),
                  placement: "top",
                  children: (0, OB.jsx)(YB.d, {
                    className: "DocsSidebarButton",
                    onClick: sB,
                    children: nB("codeEditor:popOutDocs")
                  })
                })
              })]
            }), (0, OB.jsx)("div", {
              className: "DocsSidebarResizeHandle",
              onMouseDown: YT
            }), (0, OB.jsxs)("div", {
              className: "DocsContentWrapper",
              children: [jB && TT > 0 && (0, OB.jsxs)("div", {
                className: "DocsMatchNav",
                children: [(0, OB.jsxs)("span", {
                  className: "DocsMatchNavLabel",
                  children: [cB + 1, " / ", TT]
                }), (0, OB.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    VT(-1)
                  },
                  children: "\u25b2"
                }), (0, OB.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    VT(1)
                  },
                  children: "\u25bc"
                })]
              }), (0, OB.jsx)("div", {
                className: "DocsContent",
                ref: KB,
                dangerouslySetInnerHTML: {
                  __html: BT
                }
              })]
            })]
          })
        })
      }))
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);