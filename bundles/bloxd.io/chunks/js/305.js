export const id = 305;
export const ids = [305];
export const modules = {
  41493: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      default: () => QB
    });
    var TB = ZB(63),
      JB = ZB(4922),
      oB = ZB(1746),
      GB = ZB(1091),
      vB = ZB.n(GB),
      kB = ZB(1516),
      cB = ZB(1248),
      nB = ZB(4902),
      hB = ZB(4908),
      zB = ZB(4910),
      FB = ZB(1153);

    function NB(BB) {
      return BB.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    nB.c.registerLanguage("javascript", hB.d), nB.c.registerLanguage("typescript", zB.c);

    function gB(BB, IB) {
      const ZB = NB(BB).replace(/"/g, "&quot;");
      return `<button type="button" class="DocsCopyButton ${IB}" title="${ZB}" aria-label="${ZB}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5"/><path d="M10.5 3.5V1.5H1.5v9h2"/></svg><svg class="DocsCopiedIcon" viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 8.5l3.5 3.5 7.5-7.5"/></svg></button>`
    }

    function qB(BB, IB) {
      const ZB = [],
        TB = BB.toLowerCase(),
        JB = IB.toLowerCase();
      let oB = 0;
      for (; oB < BB.length;) {
        const GB = TB.indexOf(JB, oB);
        if (-1 === GB) {
          ZB.push(BB.slice(oB));
          break
        }
        GB > oB && ZB.push(BB.slice(oB, GB)), ZB.push((0, FB.jsx)("mark", {
          className: "DocsHighlight",
          children: BB.slice(GB, GB + IB.length)
        }, GB)), oB = GB + IB.length
      }
      return ZB
    }
    var yB = ZB(1102),
      UB = ZB(1421),
      WB = ZB(36909),
      dB = ZB(36916);
    const CB = {
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
      QB = (0, TB.memo)((function(BB) {
        var IB, ZB, GB, hB, zB, QB, sB;
        let {
          popOutDocs: wB,
          hideDocs: OB,
          tutorialEnabled: YB
        } = BB;
        const [iB, pB] = (0, TB.useState)(JB.b[0].id), aB = (0, TB.useRef)(null), HB = (0, TB.useRef)(null), [MB, jB] = (0, TB.useState)(""), [PB, RB] = (0, TB.useState)(0), [rB, mB] = (0, TB.useState)(null), [XB, LB] = (0, TB.useState)(!1), [eB, uB] = (0, TB.useState)(160), fB = (0, TB.useRef)(!1), lB = (0, TB.useRef)(null), AB = (0, WB.h)("docsOverview"), [tB, bB] = (0, TB.useState)(0), xB = Object.values(CB).some((BB => (null === BB || void 0 === BB ? void 0 : BB.tabStep) === AB));
        (0, TB.useEffect)((() => {
          xB && MB.length > 0 && (jB(""), bB((BB => BB + 1)))
        }), [xB, MB]);
        const EB = MB.length > 0,
          DB = (0, TB.useMemo)((() => function(BB) {
            if (!BB) return [];
            const IB = BB.toLowerCase(),
              ZB = [];
            for (const TB of JB.b) {
              const BB = TB.content.toLowerCase();
              let JB = 0,
                oB = -1,
                GB = 0,
                vB = BB.indexOf(IB, GB);
              for (; - 1 !== vB;) - 1 === oB && (oB = vB), JB++, GB = vB + IB.length, vB = BB.indexOf(IB, GB);
              if (0 === JB) continue;
              const kB = Math.max(0, oB - 40),
                cB = Math.min(TB.content.length, oB + IB.length + 40),
                nB = (kB > 0 ? "..." : "") + TB.content.slice(kB, cB).replace(/\n/g, " ") + (cB < TB.content.length ? "..." : "");
              ZB.push({
                doc: TB,
                matchCount: JB,
                snippet: nB
              })
            }
            return ZB.sort(((BB, IB) => IB.matchCount - BB.matchCount)), ZB
          }(MB)), [MB]),
          KB = EB ? null !== (IB = null !== (ZB = null === (GB = DB.find((BB => BB.doc.id === iB))) || void 0 === GB ? void 0 : GB.doc) && void 0 !== ZB ? ZB : null === (hB = DB[0]) || void 0 === hB ? void 0 : hB.doc) && void 0 !== IB ? IB : null : null !== (zB = JB.b.find((BB => BB.id === iB))) && void 0 !== zB ? zB : JB.b[0],
          {
            t: VB
          } = (0, cB.G)(),
          SB = VB("codeEditor:copySnippet"),
          BI = (0, TB.useMemo)((() => KB ? function(BB, IB, ZB, TB) {
            let JB = IB;
            JB = JB.replace(/\r\n/g, "\n");
            const oB = [];
            JB = JB.replace(/```(\w*)\n([\s\S]*?)```/g, ((BB, IB, TB) => {
              const JB = oB.length;
              let GB = NB(TB);
              try {
                GB = nB.c.highlight(TB.trimEnd(), {
                  language: IB
                }).value
              } catch (vB) {
                console.warn("Could not highlight documentation code block", vB)
              }
              return oB.push(`<div class="DocsCodeBlockRow"><pre class="DocsCodeBlock" data-lang="${IB}"><code>${GB}</code></pre>${gB(ZB,"DocsCopyBlock")}</div>`), `\0PLACEHOLDER_${JB}\0`
            })), JB = JB.replace(/(`{1,2})([^\n]+?)\1(?!`)/g, ((IB, TB, JB) => {
              const GB = oB.length,
                vB = 2 === TB.length ? JB.replace(/^ (.*) $/, "$1") : JB;
              let kB = NB(vB);
              try {
                "apiReference" !== BB && "callbacks" !== BB || (kB = nB.c.highlight(vB.trimEnd().replaceAll("\\|", "|"), {
                  language: "typescript"
                }).value)
              } catch (cB) {
                console.warn("Could not highlight documentation snippet", cB)
              }
              return oB.push(`<span class="DocsInlineCodeRow"><code class="DocsInlineCode">${kB}</code>${gB(ZB,"DocsCopyInline")}</span>`), `\0PLACEHOLDER_${GB}\0`
            })), JB = NB(JB), JB = JB.replace(/^#### (.+)$/gm, '<h4 class="DocsH4">$1</h4>'), JB = JB.replace(/^### (.+)$/gm, '<h3 class="DocsH3">$1</h3>'), JB = JB.replace(/^## (.+)$/gm, '<h2 class="DocsH2">$1</h2>'), JB = JB.replace(/^# (.+)$/gm, '<h1 class="DocsH1">$1</h1>'), JB = JB.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"), JB = JB.replace(/\[([^\]]+)\]\(([^)]+)\)/g, ((BB, IB, ZB) => ZB.startsWith("#") ? `<a class="DocsAnchor" data-id="${ZB}">${IB}</a>` : `<a href="${ZB}" target="_blank" rel="noopener noreferrer">${IB}</a>`)), JB = JB.replace(/^(\|.+\|)\n(\|[\s:\-|]+\|)\n((?:\|.+\|\s*\r?\n?)*)/gm, ((BB, IB, ZB, TB) => `<table class="DocsTable"><thead><tr>${IB.split("|").slice(1,-1).map((BB=>`<th>${BB.trim()}</th>`)).join("")}</tr></thead><tbody>${TB.trim().split("\n").map((BB=>`<tr>${BB.split("|").slice(1,-1).map((BB=>`<td>${BB.trim()}</td>`)).join("")}</tr>`)).join("")}</tbody></table>`)), JB = JB.replace(/(?:^[ \t]*([*-])[ \t]+.+(?:\n|$))+/gm, ((BB, IB) => function(BB, IB) {
              const ZB = "*" === IB,
                TB = [];
              for (const vB of BB.split("\n")) {
                const BB = vB.match(/^([ \t]*)(?:[*-])[ \t]+(.+)$/);
                BB && TB.push({
                  indent: BB[1].replace(/\t/g, "  ").length,
                  content: BB[2]
                })
              }
              let JB = "";
              const oB = [],
                GB = ZB ? "ol" : "ul";
              for (const {
                  indent: vB,
                  content: kB
                }
                of TB) {
                for (; oB.length > 0 && vB < oB[oB.length - 1];) JB += `</${GB}></li>`, oB.pop();
                (0 === oB.length || vB > oB[oB.length - 1]) && (oB.length > 0 && (JB = JB.replace(/<\/li>$/, "")), JB += `<${GB} class="DocsList">`, oB.push(vB)), JB += `<li class="DocsListItem">${kB}</li>`
              }
              for (; oB.length > 0;) JB += `</${GB}>`, oB.pop(), oB.length > 0 && (JB += "</li>");
              return JB
            }(BB, IB))), JB = JB.replace(/\n{2,}/g, "\n<br/>\n");
            for (let GB = 0; GB < oB.length; GB++) JB = JB.replace(`\0PLACEHOLDER_${GB}\0`, oB[GB]);
            if (TB) {
              const BB = NB(TB).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                IB = new RegExp(BB, "gi");
              JB = JB.replace(/([^<>]+)(?=<|$)/g, (BB => BB.replace(IB, (BB => `<mark class="DocsHighlight">${BB}</mark>`))))
            }
            return JB
          }(KB.id, KB.content, SB, EB ? MB : void 0) : ""), [KB, SB, EB, MB]);
        (0, TB.useEffect)((() => {
          const BB = HB.current;
          if (!BB) return;
          const IB = BB => {
            var IB, ZB, TB, JB, oB;
            const GB = null === (IB = (ZB = BB.target).closest) || void 0 === IB ? void 0 : IB.call(ZB, ".DocsCopyButton");
            if (!GB) return;
            BB.preventDefault(), BB.stopPropagation();
            const vB = null !== (TB = null === (JB = GB.parentElement) || void 0 === JB || null === (oB = JB.querySelector("code")) || void 0 === oB ? void 0 : oB.textContent) && void 0 !== TB ? TB : "";
            navigator.clipboard.writeText(vB.trimEnd()).then((() => {
              GB.classList.add("Copied"), setTimeout((() => {
                GB.classList.remove("Copied")
              }), 1500)
            })).catch((BB => {
              console.warn("Could not copy documentation code", BB)
            }))
          };
          return BB.addEventListener("click", IB, !0), () => {
            BB.removeEventListener("click", IB, !0)
          }
        }), []);
        const [II, ZI] = (0, TB.useState)(0);
        (0, TB.useEffect)((() => {
          if (!EB || !HB.current) return void ZI(0);
          const BB = HB.current.querySelectorAll(".DocsHighlight").length;
          ZI(BB)
        }), [EB, BI]), (0, TB.useEffect)((() => {
          if (null === rB || !HB.current) return;
          mB(null);
          const BB = HB.current.querySelectorAll(".DocsHighlight");
          if (0 === BB.length) return;
          const IB = Math.min(rB, BB.length - 1);
          RB(IB), BB.forEach((BB => {
            BB.classList.remove("DocsHighlightActive")
          })), BB[IB].classList.add("DocsHighlightActive"), BB[IB].scrollIntoView({
            block: "center",
            behavior: "smooth"
          })
        }), [rB, BI]);
        const TI = (0, TB.useCallback)((BB => {
            if (!HB.current) return;
            const IB = HB.current.querySelectorAll(".DocsHighlight");
            if (0 === IB.length) return;
            const ZB = (PB + BB + IB.length) % IB.length;
            RB(ZB), mB(ZB)
          }), [PB]),
          JI = (0, TB.useCallback)((BB => {
            var IB;
            const ZB = null === (IB = CB[BB]) || void 0 === IB ? void 0 : IB.tabStep;
            ZB && ZB === AB && (0, dB.f)(ZB), BB !== iB ? (LB(!0), pB(BB), RB(0), HB.current && (HB.current.scrollTop = 0), EB && mB(0)) : LB(!XB)
          }), [EB, iB, XB, AB]),
          oI = (0, TB.useCallback)((BB => {
            var IB;
            const ZB = Array.from((null === (IB = HB.current) || void 0 === IB ? void 0 : IB.querySelectorAll(".DocsH2, .DocsH3")) || []).find((IB => {
              var ZB;
              return null === (ZB = IB.textContent) || void 0 === ZB ? void 0 : ZB.includes(BB)
            }));
            ZB && ZB.scrollIntoView({
              block: "start",
              behavior: "smooth"
            })
          }), [HB]),
          GI = (0, TB.useCallback)((BB => {
            var IB, ZB;
            const TB = null !== (IB = null === (ZB = aB.current) || void 0 === ZB ? void 0 : ZB.clientWidth) && void 0 !== IB ? IB : window.innerWidth,
              JB = Math.max(120, TB - 200);
            return Math.min(Math.max(BB, 120), JB)
          }), []),
          vI = (0, TB.useCallback)((() => {
            var BB;
            fB.current && (fB.current = !1, null === (BB = aB.current) || void 0 === BB || BB.classList.remove("DocsSidebarResizing"))
          }), []),
          kI = (0, TB.useCallback)((BB => {
            var IB;
            BB.preventDefault(), fB.current = !0, null === (IB = aB.current) || void 0 === IB || IB.classList.add("DocsSidebarResizing")
          }), []);
        (0, TB.useEffect)((() => {
          const BB = aB.current,
            IB = BB => {
              if (!fB.current || !aB.current) return;
              const IB = aB.current.getBoundingClientRect().left;
              uB(GI(BB.clientX - IB))
            };
          return window.addEventListener("mousemove", IB), window.addEventListener("mouseup", vI), () => {
            window.removeEventListener("mousemove", IB), window.removeEventListener("mouseup", vI), null === BB || void 0 === BB || BB.classList.remove("DocsSidebarResizing")
          }
        }), [GI, vI]);
        const cI = (0, TB.useCallback)((BB => {
          if (BB) {
            const [IB, ZB] = BB.slice(1).split("-");
            ZB && (lB.current = {
              docId: IB,
              subsection: ZB
            }), IB && JI(IB)
          }
        }), [JI]);
        (0, TB.useEffect)((() => {
          const BB = lB.current;
          BB && iB === BB.docId && (setTimeout((() => {
            oI(BB.subsection)
          }), 0), lB.current = null)
        })), (0, TB.useEffect)((() => {
          if (!HB.current) return;
          HB.current.querySelectorAll("a.DocsAnchor").forEach((BB => {
            BB.addEventListener("click", (IB => {
              IB.preventDefault(), cI(BB.dataset.id)
            }))
          }))
        }), [iB, cI]);
        const nI = Object.values(CB).find((BB => (null === BB || void 0 === BB ? void 0 : BB.pageStep) === AB));
        return (0, FB.jsx)(WB.f, {
          tutorial: "docsOverview",
          step: null !== (QB = null === nI || void 0 === nI ? void 0 : nI.pageStep) && void 0 !== QB ? QB : "docsPanel",
          text: VB(null !== (sB = null === nI || void 0 === nI ? void 0 : nI.pageText) && void 0 !== sB ? sB : "codeEditor:tutorialDocsPanel"),
          enabled: YB,
          placement: "left",
          onPrevious: nI ? void 0 : OB,
          children: (0, FB.jsxs)("div", {
            className: "DocsPanel",
            ref: aB,
            children: [(0, FB.jsxs)("div", {
              className: "DocsSidebar",
              style: {
                width: eB,
                minWidth: eB,
                maxWidth: eB
              },
              children: [(0, FB.jsx)(oB.c, {
                className: "DocsSearch",
                placeholderText: "\ud83d\udd0e Search docs...",
                onValueChange: BB => {
                  jB(BB), RB(0), mB(0)
                }
              }, tB), (0, FB.jsx)("div", {
                className: "DocsNavList",
                children: EB ? DB.map((BB => (0, FB.jsxs)("div", {
                  className: vB()("DocsNavItem", "SearchResult", {
                    Active: BB.doc.id === (null === KB || void 0 === KB ? void 0 : KB.id)
                  }),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    JI(BB.doc.id)
                  },
                  children: [(0, FB.jsxs)("div", {
                    className: "SearchResultTitle",
                    children: [BB.doc.title, (0, FB.jsx)("span", {
                      className: "SearchResultCount",
                      children: BB.matchCount
                    })]
                  }), (0, FB.jsx)("div", {
                    className: "SearchResultSnippet",
                    children: qB(BB.snippet, MB)
                  })]
                }, BB.doc.id))) : JB.b.map((BB => {
                  const IB = (0, FB.jsxs)("div", {
                      className: vB()("DocsNavItem", {
                        Active: BB.id === (null === KB || void 0 === KB ? void 0 : KB.id)
                      }),
                      "data-pad-focusable": !0,
                      onClick: () => {
                        JI(BB.id)
                      },
                      children: [(0, FB.jsx)("span", {
                        className: "DocsNavItemTitle",
                        children: BB.title
                      }), BB.subsections && BB.id === (null === KB || void 0 === KB ? void 0 : KB.id) && XB && (0, FB.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, FB.jsx)(yB.d, {
                          name: "angle-down"
                        })
                      }), BB.subsections && (BB.id !== (null === KB || void 0 === KB ? void 0 : KB.id) || !XB) && (0, FB.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, FB.jsx)(yB.d, {
                          name: "angle-up"
                        })
                      })]
                    }),
                    ZB = CB[BB.id];
                  return (0, FB.jsxs)(TB.Fragment, {
                    children: [ZB && (0, FB.jsx)(WB.f, {
                      tutorial: "docsOverview",
                      step: ZB.tabStep,
                      text: VB(ZB.tabText),
                      enabled: YB,
                      placement: "left",
                      waitForClick: !0,
                      children: IB
                    }), !ZB && IB, XB && BB.subsections && BB.id === (null === KB || void 0 === KB ? void 0 : KB.id) && BB.subsections.map((BB => (0, FB.jsx)("div", {
                      className: "DocsNavItem DocsSubsection",
                      "data-pad-focusable": !0,
                      onClick: () => {
                        oI(BB)
                      },
                      children: BB
                    }, BB)))]
                  }, BB.id)
                }))
              }), (0, FB.jsx)("div", {
                className: "DocsSidebarButtonContainer",
                children: (0, FB.jsx)(UB.e, {
                  tooltipInner: VB("codeEditor:popOutDocsTooltip"),
                  placement: "top",
                  children: (0, FB.jsx)(kB.g, {
                    className: "DocsSidebarButton",
                    onClick: wB,
                    children: VB("codeEditor:popOutDocs")
                  })
                })
              })]
            }), (0, FB.jsx)("div", {
              className: "DocsSidebarResizeHandle",
              onMouseDown: kI
            }), (0, FB.jsxs)("div", {
              className: "DocsContentWrapper",
              children: [EB && II > 0 && (0, FB.jsxs)("div", {
                className: "DocsMatchNav",
                children: [(0, FB.jsxs)("span", {
                  className: "DocsMatchNavLabel",
                  children: [PB + 1, " / ", II]
                }), (0, FB.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    TI(-1)
                  },
                  children: "\u25b2"
                }), (0, FB.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    TI(1)
                  },
                  children: "\u25bc"
                })]
              }), (0, FB.jsx)("div", {
                className: "DocsContent",
                ref: HB,
                dangerouslySetInnerHTML: {
                  __html: BI
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