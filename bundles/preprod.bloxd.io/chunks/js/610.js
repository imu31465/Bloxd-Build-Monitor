export const id = 610;
export const ids = [610];
export const modules = {
  44627: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      default: () => SB
    });
    var YB = GB(56),
      DB = GB(5234),
      QB = GB(1735),
      oB = GB(1090),
      jB = GB.n(oB),
      yB = GB(1485),
      JB = GB(1175),
      MB = GB(5207),
      PB = GB(5217),
      zB = GB(5224),
      lB = GB(1282);

    function pB(BB) {
      return BB.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    MB.d.registerLanguage("javascript", PB.c), MB.d.registerLanguage("typescript", zB.c);

    function qB(BB, OB) {
      const GB = pB(BB).replace(/"/g, "&quot;");
      return `<button type="button" class="DocsCopyButton ${OB}" title="${GB}" aria-label="${GB}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5"/><path d="M10.5 3.5V1.5H1.5v9h2"/></svg><svg class="DocsCopiedIcon" viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 8.5l3.5 3.5 7.5-7.5"/></svg></button>`
    }

    function ZB(BB, OB) {
      const GB = [],
        YB = BB.toLowerCase(),
        DB = OB.toLowerCase();
      let QB = 0;
      for (; QB < BB.length;) {
        const oB = YB.indexOf(DB, QB);
        if (-1 === oB) {
          GB.push(BB.slice(QB));
          break
        }
        oB > QB && GB.push(BB.slice(QB, oB)), GB.push((0, lB.jsx)("mark", {
          className: "DocsHighlight",
          children: BB.slice(oB, oB + OB.length)
        }, oB)), QB = oB + OB.length
      }
      return GB
    }
    var NB = GB(1383),
      RB = GB(1405),
      WB = GB(37572),
      AB = GB(37576);
    const VB = {
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
      SB = (0, YB.memo)((function(BB) {
        var OB, GB, oB, PB, zB, SB, nB;
        let {
          popOutDocs: UB,
          hideDocs: fB,
          tutorialEnabled: kB
        } = BB;
        const [dB, KB] = (0, YB.useState)(DB.b[0].id), uB = (0, YB.useRef)(null), mB = (0, YB.useRef)(null), [IB, FB] = (0, YB.useState)(""), [iB, LB] = (0, YB.useState)(0), [gB, rB] = (0, YB.useState)(null), [XB, wB] = (0, YB.useState)(!1), [EB, cB] = (0, YB.useState)(160), hB = (0, YB.useRef)(!1), aB = (0, YB.useRef)(null), eB = (0, WB.m)("docsOverview"), [TB, bB] = (0, YB.useState)(0), CB = Object.values(VB).some((BB => (null === BB || void 0 === BB ? void 0 : BB.tabStep) === eB));
        (0, YB.useEffect)((() => {
          CB && IB.length > 0 && (FB(""), bB((BB => BB + 1)))
        }), [CB, IB]);
        const HB = IB.length > 0,
          vB = (0, YB.useMemo)((() => function(BB) {
            if (!BB) return [];
            const OB = BB.toLowerCase(),
              GB = [];
            for (const YB of DB.b) {
              const BB = YB.content.toLowerCase();
              let DB = 0,
                QB = -1,
                oB = 0,
                jB = BB.indexOf(OB, oB);
              for (; - 1 !== jB;) - 1 === QB && (QB = jB), DB++, oB = jB + OB.length, jB = BB.indexOf(OB, oB);
              if (0 === DB) continue;
              const yB = Math.max(0, QB - 40),
                JB = Math.min(YB.content.length, QB + OB.length + 40),
                MB = (yB > 0 ? "..." : "") + YB.content.slice(yB, JB).replace(/\n/g, " ") + (JB < YB.content.length ? "..." : "");
              GB.push({
                doc: YB,
                matchCount: DB,
                snippet: MB
              })
            }
            return GB.sort(((BB, OB) => OB.matchCount - BB.matchCount)), GB
          }(IB)), [IB]),
          sB = HB ? null !== (OB = null !== (GB = null === (oB = vB.find((BB => BB.doc.id === dB))) || void 0 === oB ? void 0 : oB.doc) && void 0 !== GB ? GB : null === (PB = vB[0]) || void 0 === PB ? void 0 : PB.doc) && void 0 !== OB ? OB : null : null !== (zB = DB.b.find((BB => BB.id === dB))) && void 0 !== zB ? zB : DB.b[0],
          {
            t: xB
          } = (0, JB.H)(),
          tB = xB("codeEditor:copySnippet"),
          BO = (0, YB.useMemo)((() => sB ? function(BB, OB, GB, YB) {
            let DB = OB;
            DB = DB.replace(/\r\n/g, "\n");
            const QB = [];
            DB = DB.replace(/```(\w*)\n([\s\S]*?)```/g, ((BB, OB, YB) => {
              const DB = QB.length;
              let oB = pB(YB);
              try {
                oB = MB.d.highlight(YB.trimEnd(), {
                  language: OB
                }).value
              } catch (jB) {
                console.warn("Could not highlight documentation code block", jB)
              }
              return QB.push(`<div class="DocsCodeBlockRow"><pre class="DocsCodeBlock" data-lang="${OB}"><code>${oB}</code></pre>${qB(GB,"DocsCopyBlock")}</div>`), `\0PLACEHOLDER_${DB}\0`
            })), DB = DB.replace(/(`{1,2})([^\n]+?)\1(?!`)/g, ((OB, YB, DB) => {
              const oB = QB.length,
                jB = 2 === YB.length ? DB.replace(/^ (.*) $/, "$1") : DB;
              let yB = pB(jB);
              try {
                "apiReference" !== BB && "callbacks" !== BB || (yB = MB.d.highlight(jB.trimEnd().replaceAll("\\|", "|"), {
                  language: "typescript"
                }).value)
              } catch (JB) {
                console.warn("Could not highlight documentation snippet", JB)
              }
              return QB.push(`<span class="DocsInlineCodeRow"><code class="DocsInlineCode">${yB}</code>${qB(GB,"DocsCopyInline")}</span>`), `\0PLACEHOLDER_${oB}\0`
            })), DB = pB(DB), DB = DB.replace(/^#### (.+)$/gm, '<h4 class="DocsH4">$1</h4>'), DB = DB.replace(/^### (.+)$/gm, '<h3 class="DocsH3">$1</h3>'), DB = DB.replace(/^## (.+)$/gm, '<h2 class="DocsH2">$1</h2>'), DB = DB.replace(/^# (.+)$/gm, '<h1 class="DocsH1">$1</h1>'), DB = DB.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"), DB = DB.replace(/\[([^\]]+)\]\(([^)]+)\)/g, ((BB, OB, GB) => GB.startsWith("#") ? `<a class="DocsAnchor" data-id="${GB}">${OB}</a>` : `<a href="${GB}" target="_blank" rel="noopener noreferrer">${OB}</a>`)), DB = DB.replace(/^(\|.+\|)\n(\|[\s:\-|]+\|)\n((?:\|.+\|\s*\r?\n?)*)/gm, ((BB, OB, GB, YB) => `<table class="DocsTable"><thead><tr>${OB.split("|").slice(1,-1).map((BB=>`<th>${BB.trim()}</th>`)).join("")}</tr></thead><tbody>${YB.trim().split("\n").map((BB=>`<tr>${BB.split("|").slice(1,-1).map((BB=>`<td>${BB.trim()}</td>`)).join("")}</tr>`)).join("")}</tbody></table>`)), DB = DB.replace(/(?:^[ \t]*([*-])[ \t]+.+(?:\n|$))+/gm, ((BB, OB) => function(BB, OB) {
              const GB = "*" === OB,
                YB = [];
              for (const jB of BB.split("\n")) {
                const BB = jB.match(/^([ \t]*)(?:[*-])[ \t]+(.+)$/);
                BB && YB.push({
                  indent: BB[1].replace(/\t/g, "  ").length,
                  content: BB[2]
                })
              }
              let DB = "";
              const QB = [],
                oB = GB ? "ol" : "ul";
              for (const {
                  indent: jB,
                  content: yB
                }
                of YB) {
                for (; QB.length > 0 && jB < QB[QB.length - 1];) DB += `</${oB}></li>`, QB.pop();
                (0 === QB.length || jB > QB[QB.length - 1]) && (QB.length > 0 && (DB = DB.replace(/<\/li>$/, "")), DB += `<${oB} class="DocsList">`, QB.push(jB)), DB += `<li class="DocsListItem">${yB}</li>`
              }
              for (; QB.length > 0;) DB += `</${oB}>`, QB.pop(), QB.length > 0 && (DB += "</li>");
              return DB
            }(BB, OB))), DB = DB.replace(/\n{2,}/g, "\n<br/>\n");
            for (let oB = 0; oB < QB.length; oB++) DB = DB.replace(`\0PLACEHOLDER_${oB}\0`, QB[oB]);
            if (YB) {
              const BB = pB(YB).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                OB = new RegExp(BB, "gi");
              DB = DB.replace(/([^<>]+)(?=<|$)/g, (BB => BB.replace(OB, (BB => `<mark class="DocsHighlight">${BB}</mark>`))))
            }
            return DB
          }(sB.id, sB.content, tB, HB ? IB : void 0) : ""), [sB, tB, HB, IB]);
        (0, YB.useEffect)((() => {
          const BB = mB.current;
          if (!BB) return;
          const OB = BB => {
            var OB, GB, YB, DB, QB;
            const oB = null === (OB = (GB = BB.target).closest) || void 0 === OB ? void 0 : OB.call(GB, ".DocsCopyButton");
            if (!oB) return;
            BB.preventDefault(), BB.stopPropagation();
            const jB = null !== (YB = null === (DB = oB.parentElement) || void 0 === DB || null === (QB = DB.querySelector("code")) || void 0 === QB ? void 0 : QB.textContent) && void 0 !== YB ? YB : "";
            navigator.clipboard.writeText(jB.trimEnd()).then((() => {
              oB.classList.add("Copied"), setTimeout((() => {
                oB.classList.remove("Copied")
              }), 1500)
            })).catch((BB => {
              console.warn("Could not copy documentation code", BB)
            }))
          };
          return BB.addEventListener("click", OB, !0), () => {
            BB.removeEventListener("click", OB, !0)
          }
        }), []);
        const [OO, GO] = (0, YB.useState)(0);
        (0, YB.useEffect)((() => {
          if (!HB || !mB.current) return void GO(0);
          const BB = mB.current.querySelectorAll(".DocsHighlight").length;
          GO(BB)
        }), [HB, BO]), (0, YB.useEffect)((() => {
          if (null === gB || !mB.current) return;
          rB(null);
          const BB = mB.current.querySelectorAll(".DocsHighlight");
          if (0 === BB.length) return;
          const OB = Math.min(gB, BB.length - 1);
          LB(OB), BB.forEach((BB => {
            BB.classList.remove("DocsHighlightActive")
          })), BB[OB].classList.add("DocsHighlightActive"), BB[OB].scrollIntoView({
            block: "center",
            behavior: "smooth"
          })
        }), [gB, BO]);
        const YO = (0, YB.useCallback)((BB => {
            if (!mB.current) return;
            const OB = mB.current.querySelectorAll(".DocsHighlight");
            if (0 === OB.length) return;
            const GB = (iB + BB + OB.length) % OB.length;
            LB(GB), rB(GB)
          }), [iB]),
          DO = (0, YB.useCallback)((BB => {
            var OB;
            const GB = null === (OB = VB[BB]) || void 0 === OB ? void 0 : OB.tabStep;
            GB && GB === eB && (0, AB.h)(GB), BB !== dB ? (wB(!0), KB(BB), LB(0), mB.current && (mB.current.scrollTop = 0), HB && rB(0)) : wB(!XB)
          }), [HB, dB, XB, eB]),
          QO = (0, YB.useCallback)((BB => {
            var OB;
            const GB = Array.from((null === (OB = mB.current) || void 0 === OB ? void 0 : OB.querySelectorAll(".DocsH2, .DocsH3")) || []).find((OB => {
              var GB;
              return null === (GB = OB.textContent) || void 0 === GB ? void 0 : GB.includes(BB)
            }));
            GB && GB.scrollIntoView({
              block: "start",
              behavior: "smooth"
            })
          }), [mB]),
          oO = (0, YB.useCallback)((BB => {
            var OB, GB;
            const YB = null !== (OB = null === (GB = uB.current) || void 0 === GB ? void 0 : GB.clientWidth) && void 0 !== OB ? OB : window.innerWidth,
              DB = Math.max(120, YB - 200);
            return Math.min(Math.max(BB, 120), DB)
          }), []),
          jO = (0, YB.useCallback)((() => {
            var BB;
            hB.current && (hB.current = !1, null === (BB = uB.current) || void 0 === BB || BB.classList.remove("DocsSidebarResizing"))
          }), []),
          yO = (0, YB.useCallback)((BB => {
            var OB;
            BB.preventDefault(), hB.current = !0, null === (OB = uB.current) || void 0 === OB || OB.classList.add("DocsSidebarResizing")
          }), []);
        (0, YB.useEffect)((() => {
          const BB = uB.current,
            OB = BB => {
              if (!hB.current || !uB.current) return;
              const OB = uB.current.getBoundingClientRect().left;
              cB(oO(BB.clientX - OB))
            };
          return window.addEventListener("mousemove", OB), window.addEventListener("mouseup", jO), () => {
            window.removeEventListener("mousemove", OB), window.removeEventListener("mouseup", jO), null === BB || void 0 === BB || BB.classList.remove("DocsSidebarResizing")
          }
        }), [oO, jO]);
        const JO = (0, YB.useCallback)((BB => {
          if (BB) {
            const [OB, GB] = BB.slice(1).split("-");
            GB && (aB.current = {
              docId: OB,
              subsection: GB
            }), OB && DO(OB)
          }
        }), [DO]);
        (0, YB.useEffect)((() => {
          const BB = aB.current;
          BB && dB === BB.docId && (setTimeout((() => {
            QO(BB.subsection)
          }), 0), aB.current = null)
        })), (0, YB.useEffect)((() => {
          if (!mB.current) return;
          mB.current.querySelectorAll("a.DocsAnchor").forEach((BB => {
            BB.addEventListener("click", (OB => {
              OB.preventDefault(), JO(BB.dataset.id)
            }))
          }))
        }), [dB, JO]);
        const MO = Object.values(VB).find((BB => (null === BB || void 0 === BB ? void 0 : BB.pageStep) === eB));
        return (0, lB.jsx)(WB.j, {
          tutorial: "docsOverview",
          step: null !== (SB = null === MO || void 0 === MO ? void 0 : MO.pageStep) && void 0 !== SB ? SB : "docsPanel",
          text: xB(null !== (nB = null === MO || void 0 === MO ? void 0 : MO.pageText) && void 0 !== nB ? nB : "codeEditor:tutorialDocsPanel"),
          enabled: kB,
          placement: "left",
          onPrevious: MO ? void 0 : fB,
          children: (0, lB.jsxs)("div", {
            className: "DocsPanel",
            ref: uB,
            children: [(0, lB.jsxs)("div", {
              className: "DocsSidebar",
              style: {
                width: EB,
                minWidth: EB,
                maxWidth: EB
              },
              children: [(0, lB.jsx)(QB.b, {
                className: "DocsSearch",
                placeholderText: "\ud83d\udd0e Search docs...",
                onValueChange: BB => {
                  FB(BB), LB(0), rB(0)
                }
              }, TB), (0, lB.jsx)("div", {
                className: "DocsNavList",
                children: HB ? vB.map((BB => (0, lB.jsxs)("div", {
                  className: jB()("DocsNavItem", "SearchResult", {
                    Active: BB.doc.id === (null === sB || void 0 === sB ? void 0 : sB.id)
                  }),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    DO(BB.doc.id)
                  },
                  children: [(0, lB.jsxs)("div", {
                    className: "SearchResultTitle",
                    children: [BB.doc.title, (0, lB.jsx)("span", {
                      className: "SearchResultCount",
                      children: BB.matchCount
                    })]
                  }), (0, lB.jsx)("div", {
                    className: "SearchResultSnippet",
                    children: ZB(BB.snippet, IB)
                  })]
                }, BB.doc.id))) : DB.b.map((BB => {
                  const OB = (0, lB.jsxs)("div", {
                      className: jB()("DocsNavItem", {
                        Active: BB.id === (null === sB || void 0 === sB ? void 0 : sB.id)
                      }),
                      "data-pad-focusable": !0,
                      onClick: () => {
                        DO(BB.id)
                      },
                      children: [(0, lB.jsx)("span", {
                        className: "DocsNavItemTitle",
                        children: BB.title
                      }), BB.subsections && BB.id === (null === sB || void 0 === sB ? void 0 : sB.id) && XB && (0, lB.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, lB.jsx)(NB.b, {
                          name: "angle-down"
                        })
                      }), BB.subsections && (BB.id !== (null === sB || void 0 === sB ? void 0 : sB.id) || !XB) && (0, lB.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, lB.jsx)(NB.b, {
                          name: "angle-up"
                        })
                      })]
                    }),
                    GB = VB[BB.id];
                  return (0, lB.jsxs)(YB.Fragment, {
                    children: [GB && (0, lB.jsx)(WB.j, {
                      tutorial: "docsOverview",
                      step: GB.tabStep,
                      text: xB(GB.tabText),
                      enabled: kB,
                      placement: "left",
                      waitForClick: !0,
                      children: OB
                    }), !GB && OB, XB && BB.subsections && BB.id === (null === sB || void 0 === sB ? void 0 : sB.id) && BB.subsections.map((BB => (0, lB.jsx)("div", {
                      className: "DocsNavItem DocsSubsection",
                      "data-pad-focusable": !0,
                      onClick: () => {
                        QO(BB)
                      },
                      children: BB
                    }, BB)))]
                  }, BB.id)
                }))
              }), (0, lB.jsx)("div", {
                className: "DocsSidebarButtonContainer",
                children: (0, lB.jsx)(RB.g, {
                  tooltipInner: xB("codeEditor:popOutDocsTooltip"),
                  placement: "top",
                  children: (0, lB.jsx)(yB.f, {
                    className: "DocsSidebarButton",
                    onClick: UB,
                    children: xB("codeEditor:popOutDocs")
                  })
                })
              })]
            }), (0, lB.jsx)("div", {
              className: "DocsSidebarResizeHandle",
              onMouseDown: yO
            }), (0, lB.jsxs)("div", {
              className: "DocsContentWrapper",
              children: [HB && OO > 0 && (0, lB.jsxs)("div", {
                className: "DocsMatchNav",
                children: [(0, lB.jsxs)("span", {
                  className: "DocsMatchNavLabel",
                  children: [iB + 1, " / ", OO]
                }), (0, lB.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    YO(-1)
                  },
                  children: "\u25b2"
                }), (0, lB.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    YO(1)
                  },
                  children: "\u25bc"
                })]
              }), (0, lB.jsx)("div", {
                className: "DocsContent",
                ref: mB,
                dangerouslySetInnerHTML: {
                  __html: BO
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