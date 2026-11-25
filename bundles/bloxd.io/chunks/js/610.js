export const id = 610;
export const ids = [610];
export const modules = {
  44122: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      default: () => CM
    });
    var OM = iM(44),
      SM = iM(5150),
      jM = iM(1763),
      aM = iM(1116),
      PM = iM.n(aM),
      nM = iM(1520),
      QM = iM(1188),
      zM = iM(5115),
      LM = iM(5125),
      mM = iM(5134),
      HM = iM(1303);

    function hM(MM) {
      return MM.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    zM.d.registerLanguage("javascript", LM.c), zM.d.registerLanguage("typescript", mM.d);

    function JM(MM, rM) {
      const iM = hM(MM).replace(/"/g, "&quot;");
      return `<button type="button" class="DocsCopyButton ${rM}" title="${iM}" aria-label="${iM}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5"/><path d="M10.5 3.5V1.5H1.5v9h2"/></svg><svg class="DocsCopiedIcon" viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 8.5l3.5 3.5 7.5-7.5"/></svg></button>`
    }

    function dM(MM, rM) {
      const iM = [],
        OM = MM.toLowerCase(),
        SM = rM.toLowerCase();
      let jM = 0;
      for (; jM < MM.length;) {
        const aM = OM.indexOf(SM, jM);
        if (-1 === aM) {
          iM.push(MM.slice(jM));
          break
        }
        aM > jM && iM.push(MM.slice(jM, aM)), iM.push((0, HM.jsx)("mark", {
          className: "DocsHighlight",
          children: MM.slice(aM, aM + rM.length)
        }, aM)), jM = aM + rM.length
      }
      return iM
    }
    var yM = iM(1398),
      lM = iM(1440),
      EM = iM(37821),
      UM = iM(37828);
    const GM = {
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
      CM = (0, OM.memo)((function(MM) {
        var rM, iM, aM, LM, mM, CM, eM;
        let {
          popOutDocs: bM,
          hideDocs: wM,
          tutorialEnabled: tM
        } = MM;
        const [gM, uM] = (0, OM.useState)(SM.e[0].id), RM = (0, OM.useRef)(null), pM = (0, OM.useRef)(null), [WM, sM] = (0, OM.useState)(""), [DM, kM] = (0, OM.useState)(0), [ZM, oM] = (0, OM.useState)(null), [fM, YM] = (0, OM.useState)(!1), [NM, AM] = (0, OM.useState)(160), xM = (0, OM.useRef)(!1), vM = (0, OM.useRef)(null), FM = (0, EM.k)("docsOverview"), [BM, XM] = (0, OM.useState)(0), IM = Object.values(GM).some((MM => (null === MM || void 0 === MM ? void 0 : MM.tabStep) === FM));
        (0, OM.useEffect)((() => {
          IM && WM.length > 0 && (sM(""), XM((MM => MM + 1)))
        }), [IM, WM]);
        const KM = WM.length > 0,
          qM = (0, OM.useMemo)((() => function(MM) {
            if (!MM) return [];
            const rM = MM.toLowerCase(),
              iM = [];
            for (const OM of SM.e) {
              const MM = OM.content.toLowerCase();
              let SM = 0,
                jM = -1,
                aM = 0,
                PM = MM.indexOf(rM, aM);
              for (; - 1 !== PM;) - 1 === jM && (jM = PM), SM++, aM = PM + rM.length, PM = MM.indexOf(rM, aM);
              if (0 === SM) continue;
              const nM = Math.max(0, jM - 40),
                QM = Math.min(OM.content.length, jM + rM.length + 40),
                zM = (nM > 0 ? "..." : "") + OM.content.slice(nM, QM).replace(/\n/g, " ") + (QM < OM.content.length ? "..." : "");
              iM.push({
                doc: OM,
                matchCount: SM,
                snippet: zM
              })
            }
            return iM.sort(((MM, rM) => rM.matchCount - MM.matchCount)), iM
          }(WM)), [WM]),
          TM = KM ? null !== (rM = null !== (iM = null === (aM = qM.find((MM => MM.doc.id === gM))) || void 0 === aM ? void 0 : aM.doc) && void 0 !== iM ? iM : null === (LM = qM[0]) || void 0 === LM ? void 0 : LM.doc) && void 0 !== rM ? rM : null : null !== (mM = SM.e.find((MM => MM.id === gM))) && void 0 !== mM ? mM : SM.e[0],
          {
            t: VM
          } = (0, QM.A)(),
          cM = VM("codeEditor:copySnippet"),
          Mr = (0, OM.useMemo)((() => TM ? function(MM, rM, iM, OM) {
            let SM = rM;
            SM = SM.replace(/\r\n/g, "\n");
            const jM = [];
            SM = SM.replace(/```(\w*)\n([\s\S]*?)```/g, ((MM, rM, OM) => {
              const SM = jM.length;
              let aM = hM(OM);
              try {
                aM = zM.d.highlight(OM.trimEnd(), {
                  language: rM
                }).value
              } catch (PM) {
                console.warn("Could not highlight documentation code block", PM)
              }
              return jM.push(`<div class="DocsCodeBlockRow"><pre class="DocsCodeBlock" data-lang="${rM}"><code>${aM}</code></pre>${JM(iM,"DocsCopyBlock")}</div>`), `\0PLACEHOLDER_${SM}\0`
            })), SM = SM.replace(/(`{1,2})([^\n]+?)\1(?!`)/g, ((rM, OM, SM) => {
              const aM = jM.length,
                PM = 2 === OM.length ? SM.replace(/^ (.*) $/, "$1") : SM;
              let nM = hM(PM);
              try {
                "apiReference" !== MM && "callbacks" !== MM || (nM = zM.d.highlight(PM.trimEnd().replaceAll("\\|", "|"), {
                  language: "typescript"
                }).value)
              } catch (QM) {
                console.warn("Could not highlight documentation snippet", QM)
              }
              return jM.push(`<span class="DocsInlineCodeRow"><code class="DocsInlineCode">${nM}</code>${JM(iM,"DocsCopyInline")}</span>`), `\0PLACEHOLDER_${aM}\0`
            })), SM = hM(SM), SM = SM.replace(/^#### (.+)$/gm, '<h4 class="DocsH4">$1</h4>'), SM = SM.replace(/^### (.+)$/gm, '<h3 class="DocsH3">$1</h3>'), SM = SM.replace(/^## (.+)$/gm, '<h2 class="DocsH2">$1</h2>'), SM = SM.replace(/^# (.+)$/gm, '<h1 class="DocsH1">$1</h1>'), SM = SM.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"), SM = SM.replace(/\[([^\]]+)\]\(([^)]+)\)/g, ((MM, rM, iM) => iM.startsWith("#") ? `<a class="DocsAnchor" data-id="${iM}">${rM}</a>` : `<a href="${iM}" target="_blank" rel="noopener noreferrer">${rM}</a>`)), SM = SM.replace(/^(\|.+\|)\n(\|[\s:\-|]+\|)\n((?:\|.+\|\s*\r?\n?)*)/gm, ((MM, rM, iM, OM) => `<table class="DocsTable"><thead><tr>${rM.split("|").slice(1,-1).map((MM=>`<th>${MM.trim()}</th>`)).join("")}</tr></thead><tbody>${OM.trim().split("\n").map((MM=>`<tr>${MM.split("|").slice(1,-1).map((MM=>`<td>${MM.trim()}</td>`)).join("")}</tr>`)).join("")}</tbody></table>`)), SM = SM.replace(/(?:^[ \t]*([*-])[ \t]+.+(?:\n|$))+/gm, ((MM, rM) => function(MM, rM) {
              const iM = "*" === rM,
                OM = [];
              for (const PM of MM.split("\n")) {
                const MM = PM.match(/^([ \t]*)(?:[*-])[ \t]+(.+)$/);
                MM && OM.push({
                  indent: MM[1].replace(/\t/g, "  ").length,
                  content: MM[2]
                })
              }
              let SM = "";
              const jM = [],
                aM = iM ? "ol" : "ul";
              for (const {
                  indent: PM,
                  content: nM
                }
                of OM) {
                for (; jM.length > 0 && PM < jM[jM.length - 1];) SM += `</${aM}></li>`, jM.pop();
                (0 === jM.length || PM > jM[jM.length - 1]) && (jM.length > 0 && (SM = SM.replace(/<\/li>$/, "")), SM += `<${aM} class="DocsList">`, jM.push(PM)), SM += `<li class="DocsListItem">${nM}</li>`
              }
              for (; jM.length > 0;) SM += `</${aM}>`, jM.pop(), jM.length > 0 && (SM += "</li>");
              return SM
            }(MM, rM))), SM = SM.replace(/\n{2,}/g, "\n<br/>\n");
            for (let aM = 0; aM < jM.length; aM++) SM = SM.replace(`\0PLACEHOLDER_${aM}\0`, jM[aM]);
            if (OM) {
              const MM = hM(OM).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                rM = new RegExp(MM, "gi");
              SM = SM.replace(/([^<>]+)(?=<|$)/g, (MM => MM.replace(rM, (MM => `<mark class="DocsHighlight">${MM}</mark>`))))
            }
            return SM
          }(TM.id, TM.content, cM, KM ? WM : void 0) : ""), [TM, cM, KM, WM]);
        (0, OM.useEffect)((() => {
          const MM = pM.current;
          if (!MM) return;
          const rM = MM => {
            var rM, iM, OM, SM, jM;
            const aM = null === (rM = (iM = MM.target).closest) || void 0 === rM ? void 0 : rM.call(iM, ".DocsCopyButton");
            if (!aM) return;
            MM.preventDefault(), MM.stopPropagation();
            const PM = null !== (OM = null === (SM = aM.parentElement) || void 0 === SM || null === (jM = SM.querySelector("code")) || void 0 === jM ? void 0 : jM.textContent) && void 0 !== OM ? OM : "";
            navigator.clipboard.writeText(PM.trimEnd()).then((() => {
              aM.classList.add("Copied"), setTimeout((() => {
                aM.classList.remove("Copied")
              }), 1500)
            })).catch((MM => {
              console.warn("Could not copy documentation code", MM)
            }))
          };
          return MM.addEventListener("click", rM, !0), () => {
            MM.removeEventListener("click", rM, !0)
          }
        }), []);
        const [rr, ir] = (0, OM.useState)(0);
        (0, OM.useEffect)((() => {
          if (!KM || !pM.current) return void ir(0);
          const MM = pM.current.querySelectorAll(".DocsHighlight").length;
          ir(MM)
        }), [KM, Mr]), (0, OM.useEffect)((() => {
          if (null === ZM || !pM.current) return;
          oM(null);
          const MM = pM.current.querySelectorAll(".DocsHighlight");
          if (0 === MM.length) return;
          const rM = Math.min(ZM, MM.length - 1);
          kM(rM), MM.forEach((MM => {
            MM.classList.remove("DocsHighlightActive")
          })), MM[rM].classList.add("DocsHighlightActive"), MM[rM].scrollIntoView({
            block: "center",
            behavior: "smooth"
          })
        }), [ZM, Mr]);
        const Or = (0, OM.useCallback)((MM => {
            if (!pM.current) return;
            const rM = pM.current.querySelectorAll(".DocsHighlight");
            if (0 === rM.length) return;
            const iM = (DM + MM + rM.length) % rM.length;
            kM(iM), oM(iM)
          }), [DM]),
          Sr = (0, OM.useCallback)((MM => {
            var rM;
            const iM = null === (rM = GM[MM]) || void 0 === rM ? void 0 : rM.tabStep;
            iM && iM === FM && (0, UM.h)(iM), MM !== gM ? (YM(!0), uM(MM), kM(0), pM.current && (pM.current.scrollTop = 0), KM && oM(0)) : YM(!fM)
          }), [KM, gM, fM, FM]),
          jr = (0, OM.useCallback)((MM => {
            var rM;
            const iM = Array.from((null === (rM = pM.current) || void 0 === rM ? void 0 : rM.querySelectorAll(".DocsH2, .DocsH3")) || []).find((rM => {
              var iM;
              return null === (iM = rM.textContent) || void 0 === iM ? void 0 : iM.includes(MM)
            }));
            iM && iM.scrollIntoView({
              block: "start",
              behavior: "smooth"
            })
          }), [pM]),
          ar = (0, OM.useCallback)((MM => {
            var rM, iM;
            const OM = null !== (rM = null === (iM = RM.current) || void 0 === iM ? void 0 : iM.clientWidth) && void 0 !== rM ? rM : window.innerWidth,
              SM = Math.max(120, OM - 200);
            return Math.min(Math.max(MM, 120), SM)
          }), []),
          Pr = (0, OM.useCallback)((() => {
            var MM;
            xM.current && (xM.current = !1, null === (MM = RM.current) || void 0 === MM || MM.classList.remove("DocsSidebarResizing"))
          }), []),
          nr = (0, OM.useCallback)((MM => {
            var rM;
            MM.preventDefault(), xM.current = !0, null === (rM = RM.current) || void 0 === rM || rM.classList.add("DocsSidebarResizing")
          }), []);
        (0, OM.useEffect)((() => {
          const MM = RM.current,
            rM = MM => {
              if (!xM.current || !RM.current) return;
              const rM = RM.current.getBoundingClientRect().left;
              AM(ar(MM.clientX - rM))
            };
          return window.addEventListener("mousemove", rM), window.addEventListener("mouseup", Pr), () => {
            window.removeEventListener("mousemove", rM), window.removeEventListener("mouseup", Pr), null === MM || void 0 === MM || MM.classList.remove("DocsSidebarResizing")
          }
        }), [ar, Pr]);
        const Qr = (0, OM.useCallback)((MM => {
          if (MM) {
            const [rM, iM] = MM.slice(1).split("-");
            iM && (vM.current = {
              docId: rM,
              subsection: iM
            }), rM && Sr(rM)
          }
        }), [Sr]);
        (0, OM.useEffect)((() => {
          const MM = vM.current;
          MM && gM === MM.docId && (setTimeout((() => {
            jr(MM.subsection)
          }), 0), vM.current = null)
        })), (0, OM.useEffect)((() => {
          if (!pM.current) return;
          pM.current.querySelectorAll("a.DocsAnchor").forEach((MM => {
            MM.addEventListener("click", (rM => {
              rM.preventDefault(), Qr(MM.dataset.id)
            }))
          }))
        }), [gM, Qr]);
        const zr = Object.values(GM).find((MM => (null === MM || void 0 === MM ? void 0 : MM.pageStep) === FM));
        return (0, HM.jsx)(EM.g, {
          tutorial: "docsOverview",
          step: null !== (CM = null === zr || void 0 === zr ? void 0 : zr.pageStep) && void 0 !== CM ? CM : "docsPanel",
          text: VM(null !== (eM = null === zr || void 0 === zr ? void 0 : zr.pageText) && void 0 !== eM ? eM : "codeEditor:tutorialDocsPanel"),
          enabled: tM,
          placement: "left",
          onPrevious: zr ? void 0 : wM,
          children: (0, HM.jsxs)("div", {
            className: "DocsPanel",
            ref: RM,
            children: [(0, HM.jsxs)("div", {
              className: "DocsSidebar",
              style: {
                width: NM,
                minWidth: NM,
                maxWidth: NM
              },
              children: [(0, HM.jsx)(jM.b, {
                className: "DocsSearch",
                placeholderText: "\ud83d\udd0e Search docs...",
                onValueChange: MM => {
                  sM(MM), kM(0), oM(0)
                }
              }, BM), (0, HM.jsx)("div", {
                className: "DocsNavList",
                children: KM ? qM.map((MM => (0, HM.jsxs)("div", {
                  className: PM()("DocsNavItem", "SearchResult", {
                    Active: MM.doc.id === (null === TM || void 0 === TM ? void 0 : TM.id)
                  }),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    Sr(MM.doc.id)
                  },
                  children: [(0, HM.jsxs)("div", {
                    className: "SearchResultTitle",
                    children: [MM.doc.title, (0, HM.jsx)("span", {
                      className: "SearchResultCount",
                      children: MM.matchCount
                    })]
                  }), (0, HM.jsx)("div", {
                    className: "SearchResultSnippet",
                    children: dM(MM.snippet, WM)
                  })]
                }, MM.doc.id))) : SM.e.map((MM => {
                  const rM = (0, HM.jsxs)("div", {
                      className: PM()("DocsNavItem", {
                        Active: MM.id === (null === TM || void 0 === TM ? void 0 : TM.id)
                      }),
                      "data-pad-focusable": !0,
                      onClick: () => {
                        Sr(MM.id)
                      },
                      children: [(0, HM.jsx)("span", {
                        className: "DocsNavItemTitle",
                        children: MM.title
                      }), MM.subsections && MM.id === (null === TM || void 0 === TM ? void 0 : TM.id) && fM && (0, HM.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, HM.jsx)(yM.b, {
                          name: "angle-down"
                        })
                      }), MM.subsections && (MM.id !== (null === TM || void 0 === TM ? void 0 : TM.id) || !fM) && (0, HM.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, HM.jsx)(yM.b, {
                          name: "angle-up"
                        })
                      })]
                    }),
                    iM = GM[MM.id];
                  return (0, HM.jsxs)(OM.Fragment, {
                    children: [iM && (0, HM.jsx)(EM.g, {
                      tutorial: "docsOverview",
                      step: iM.tabStep,
                      text: VM(iM.tabText),
                      enabled: tM,
                      placement: "left",
                      waitForClick: !0,
                      children: rM
                    }), !iM && rM, fM && MM.subsections && MM.id === (null === TM || void 0 === TM ? void 0 : TM.id) && MM.subsections.map((MM => (0, HM.jsx)("div", {
                      className: "DocsNavItem DocsSubsection",
                      "data-pad-focusable": !0,
                      onClick: () => {
                        jr(MM)
                      },
                      children: MM
                    }, MM)))]
                  }, MM.id)
                }))
              }), (0, HM.jsx)("div", {
                className: "DocsSidebarButtonContainer",
                children: (0, HM.jsx)(lM.i, {
                  tooltipInner: VM("codeEditor:popOutDocsTooltip"),
                  placement: "top",
                  children: (0, HM.jsx)(nM.e, {
                    className: "DocsSidebarButton",
                    onClick: bM,
                    children: VM("codeEditor:popOutDocs")
                  })
                })
              })]
            }), (0, HM.jsx)("div", {
              className: "DocsSidebarResizeHandle",
              onMouseDown: nr
            }), (0, HM.jsxs)("div", {
              className: "DocsContentWrapper",
              children: [KM && rr > 0 && (0, HM.jsxs)("div", {
                className: "DocsMatchNav",
                children: [(0, HM.jsxs)("span", {
                  className: "DocsMatchNavLabel",
                  children: [DM + 1, " / ", rr]
                }), (0, HM.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    Or(-1)
                  },
                  children: "\u25b2"
                }), (0, HM.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    Or(1)
                  },
                  children: "\u25bc"
                })]
              }), (0, HM.jsx)("div", {
                className: "DocsContent",
                ref: pM,
                dangerouslySetInnerHTML: {
                  __html: Mr
                }
              })]
            })]
          })
        })
      }))
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);