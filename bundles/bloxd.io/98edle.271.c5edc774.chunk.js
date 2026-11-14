export const id = 271;
export const ids = [271];
export const modules = {
  38942: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      default: () => FW
    });
    var wW = MW(75),
      CW = MW(3713),
      zR = MW(1489),
      AW = MW(897),
      bR = MW.n(AW),
      yR = MW(1255),
      NW = MW(1027),
      eW = MW(3674),
      BW = MW(3690),
      tR = MW(3699),
      TW = MW(940);

    function gR(WW) {
      return WW.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    eW.b.registerLanguage("javascript", BW.d), eW.b.registerLanguage("typescript", tR.b);

    function iR(WW, RW) {
      const MW = gR(WW).replace(/"/g, "&quot;");
      return `<button type="button" class="DocsCopyButton ${RW}" title="${MW}" aria-label="${MW}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5" rx="1.5"/><path d="M10.5 3.5V3A1.5 1.5 0 0 0 9 1.5H3A1.5 1.5 0 0 0 1.5 3v6A1.5 1.5 0 0 0 3 10.5h.5"/></svg><svg class="DocsCopiedIcon" viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 8.5l3.5 3.5 7.5-7.5"/></svg></button>`
    }

    function YW(WW, RW) {
      const MW = [],
        wW = WW.toLowerCase(),
        CW = RW.toLowerCase();
      let zR = 0;
      for (; zR < WW.length;) {
        const AW = wW.indexOf(CW, zR);
        if (-1 === AW) {
          MW.push(WW.slice(zR));
          break
        }
        AW > zR && MW.push(WW.slice(zR, AW)), MW.push((0, TW.jsx)("mark", {
          className: "DocsHighlight",
          children: WW.slice(AW, AW + RW.length)
        }, AW)), zR = AW + RW.length
      }
      return MW
    }
    var JW = MW(904),
      PW = MW(1180),
      IW = MW(35067),
      oW = MW(35072);
    const lW = {
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
      FW = (0, wW.memo)((function(WW) {
        var RW, MW, AW, BW, tR, FW, fW;
        let {
          popOutDocs: QW,
          hideDocs: rR,
          tutorialEnabled: cR
        } = WW;
        const [XW, jR] = (0, wW.useState)(CW.b[0].id), kR = (0, wW.useRef)(null), aR = (0, wW.useRef)(null), [sW, dW] = (0, wW.useState)(""), [pW, hW] = (0, wW.useState)(0), [UW, EW] = (0, wW.useState)(null), [VW, mR] = (0, wW.useState)(!1), [xR, vR] = (0, wW.useState)(160), KW = (0, wW.useRef)(!1), uW = (0, wW.useRef)(null), OW = (0, IW.f)("docsOverview"), [nW, GW] = (0, wW.useState)(0), LW = Object.values(lW).some((WW => (null === WW || void 0 === WW ? void 0 : WW.tabStep) === OW));
        (0, wW.useEffect)((() => {
          LW && sW.length > 0 && (dW(""), GW((WW => WW + 1)))
        }), [LW, sW]);
        const HW = sW.length > 0,
          DW = (0, wW.useMemo)((() => function(WW) {
            if (!WW) return [];
            const RW = WW.toLowerCase(),
              MW = [];
            for (const wW of CW.b) {
              const WW = wW.content.toLowerCase();
              let CW = 0,
                zR = -1,
                AW = 0,
                bR = WW.indexOf(RW, AW);
              for (; - 1 !== bR;) - 1 === zR && (zR = bR), CW++, AW = bR + RW.length, bR = WW.indexOf(RW, AW);
              if (0 === CW) continue;
              const yR = Math.max(0, zR - 40),
                NW = Math.min(wW.content.length, zR + RW.length + 40),
                eW = (yR > 0 ? "..." : "") + wW.content.slice(yR, NW).replace(/\n/g, " ") + (NW < wW.content.length ? "..." : "");
              MW.push({
                doc: wW,
                matchCount: CW,
                snippet: eW
              })
            }
            return MW.sort(((WW, RW) => RW.matchCount - WW.matchCount)), MW
          }(sW)), [sW]),
          qR = HW ? null !== (RW = null !== (MW = null === (AW = DW.find((WW => WW.doc.id === XW))) || void 0 === AW ? void 0 : AW.doc) && void 0 !== MW ? MW : null === (BW = DW[0]) || void 0 === BW ? void 0 : BW.doc) && void 0 !== RW ? RW : null : null !== (tR = CW.b.find((WW => WW.id === XW))) && void 0 !== tR ? tR : CW.b[0],
          {
            t: ZW
          } = (0, NW.C)(),
          SW = ZW("codeEditor:copySnippet"),
          WR = (0, wW.useMemo)((() => qR ? function(WW, RW, MW, wW) {
            let CW = RW;
            CW = CW.replace(/\r\n/g, "\n");
            const zR = [];
            CW = CW.replace(/```(\w*)\n([\s\S]*?)```/g, ((WW, RW, wW) => {
              const CW = zR.length;
              let AW = gR(wW);
              try {
                AW = eW.b.highlight(wW.trimEnd(), {
                  language: RW
                }).value
              } catch (bR) {
                console.warn("Could not highlight documentation code block", bR)
              }
              return zR.push(`<div class="DocsCodeBlockRow"><pre class="DocsCodeBlock" data-lang="${RW}"><code>${AW}</code></pre>${iR(MW,"DocsCopyBlock")}</div>`), `\0PLACEHOLDER_${CW}\0`
            })), CW = CW.replace(/(`{1,2})([^\n]+?)\1(?!`)/g, ((RW, wW, CW) => {
              const AW = zR.length,
                bR = 2 === wW.length ? CW.replace(/^ (.*) $/, "$1") : CW;
              let yR = gR(bR);
              try {
                "apiReference" !== WW && "callbacks" !== WW || (yR = eW.b.highlight(bR.trimEnd().replaceAll("\\|", "|"), {
                  language: "typescript"
                }).value)
              } catch (NW) {
                console.warn("Could not highlight documentation snippet", NW)
              }
              return zR.push(`<span class="DocsInlineCodeRow"><code class="DocsInlineCode">${yR}</code>${iR(MW,"DocsCopyInline")}</span>`), `\0PLACEHOLDER_${AW}\0`
            })), CW = gR(CW), CW = CW.replace(/^#### (.+)$/gm, '<h4 class="DocsH4">$1</h4>'), CW = CW.replace(/^### (.+)$/gm, '<h3 class="DocsH3">$1</h3>'), CW = CW.replace(/^## (.+)$/gm, '<h2 class="DocsH2">$1</h2>'), CW = CW.replace(/^# (.+)$/gm, '<h1 class="DocsH1">$1</h1>'), CW = CW.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"), CW = CW.replace(/\[([^\]]+)\]\(([^)]+)\)/g, ((WW, RW, MW) => MW.startsWith("#") ? `<a class="DocsAnchor" data-id="${MW}">${RW}</a>` : `<a href="${MW}" target="_blank" rel="noopener noreferrer">${RW}</a>`)), CW = CW.replace(/^(\|.+\|)\n(\|[\s:\-|]+\|)\n((?:\|.+\|\s*\r?\n?)*)/gm, ((WW, RW, MW, wW) => `<table class="DocsTable"><thead><tr>${RW.split("|").slice(1,-1).map((WW=>`<th>${WW.trim()}</th>`)).join("")}</tr></thead><tbody>${wW.trim().split("\n").map((WW=>`<tr>${WW.split("|").slice(1,-1).map((WW=>`<td>${WW.trim()}</td>`)).join("")}</tr>`)).join("")}</tbody></table>`)), CW = CW.replace(/(?:^[ \t]*([*-])[ \t]+.+(?:\n|$))+/gm, ((WW, RW) => function(WW, RW) {
              const MW = "*" === RW,
                wW = [];
              for (const bR of WW.split("\n")) {
                const WW = bR.match(/^([ \t]*)(?:[*-])[ \t]+(.+)$/);
                WW && wW.push({
                  indent: WW[1].replace(/\t/g, "  ").length,
                  content: WW[2]
                })
              }
              let CW = "";
              const zR = [],
                AW = MW ? "ol" : "ul";
              for (const {
                  indent: bR,
                  content: yR
                }
                of wW) {
                for (; zR.length > 0 && bR < zR[zR.length - 1];) CW += `</${AW}></li>`, zR.pop();
                (0 === zR.length || bR > zR[zR.length - 1]) && (zR.length > 0 && (CW = CW.replace(/<\/li>$/, "")), CW += `<${AW} class="DocsList">`, zR.push(bR)), CW += `<li class="DocsListItem">${yR}</li>`
              }
              for (; zR.length > 0;) CW += `</${AW}>`, zR.pop(), zR.length > 0 && (CW += "</li>");
              return CW
            }(WW, RW))), CW = CW.replace(/\n{2,}/g, "\n<br/>\n");
            for (let AW = 0; AW < zR.length; AW++) CW = CW.replace(`\0PLACEHOLDER_${AW}\0`, zR[AW]);
            if (wW) {
              const WW = gR(wW).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                RW = new RegExp(WW, "gi");
              CW = CW.replace(/([^<>]+)(?=<|$)/g, (WW => WW.replace(RW, (WW => `<mark class="DocsHighlight">${WW}</mark>`))))
            }
            return CW
          }(qR.id, qR.content, SW, HW ? sW : void 0) : ""), [qR, SW, HW, sW]);
        (0, wW.useEffect)((() => {
          const WW = aR.current;
          if (!WW) return;
          const RW = WW => {
            var RW, MW, wW, CW, zR;
            const AW = null === (RW = (MW = WW.target).closest) || void 0 === RW ? void 0 : RW.call(MW, ".DocsCopyButton");
            if (!AW) return;
            WW.preventDefault(), WW.stopPropagation();
            const bR = null !== (wW = null === (CW = AW.parentElement) || void 0 === CW || null === (zR = CW.querySelector("code")) || void 0 === zR ? void 0 : zR.textContent) && void 0 !== wW ? wW : "";
            navigator.clipboard.writeText(bR.trimEnd()).then((() => {
              AW.classList.add("Copied"), setTimeout((() => {
                AW.classList.remove("Copied")
              }), 1500)
            })).catch((WW => {
              console.warn("Could not copy documentation code", WW)
            }))
          };
          return WW.addEventListener("click", RW, !0), () => {
            WW.removeEventListener("click", RW, !0)
          }
        }), []);
        const [RR, MR] = (0, wW.useState)(0);
        (0, wW.useEffect)((() => {
          if (!HW || !aR.current) return void MR(0);
          const WW = aR.current.querySelectorAll(".DocsHighlight").length;
          MR(WW)
        }), [HW, WR]), (0, wW.useEffect)((() => {
          if (null === UW || !aR.current) return;
          EW(null);
          const WW = aR.current.querySelectorAll(".DocsHighlight");
          if (0 === WW.length) return;
          const RW = Math.min(UW, WW.length - 1);
          hW(RW), WW.forEach((WW => {
            WW.classList.remove("DocsHighlightActive")
          })), WW[RW].classList.add("DocsHighlightActive"), WW[RW].scrollIntoView({
            block: "center",
            behavior: "smooth"
          })
        }), [UW, WR]);
        const wR = (0, wW.useCallback)((WW => {
            if (!aR.current) return;
            const RW = aR.current.querySelectorAll(".DocsHighlight");
            if (0 === RW.length) return;
            const MW = (pW + WW + RW.length) % RW.length;
            hW(MW), EW(MW)
          }), [pW]),
          CR = (0, wW.useCallback)((WW => {
            var RW;
            const MW = null === (RW = lW[WW]) || void 0 === RW ? void 0 : RW.tabStep;
            MW && MW === OW && (0, oW.f)(MW), WW !== XW ? (mR(!0), jR(WW), hW(0), aR.current && (aR.current.scrollTop = 0), HW && EW(0)) : mR(!VW)
          }), [HW, XW, VW, OW]),
          zM = (0, wW.useCallback)((WW => {
            var RW;
            const MW = Array.from((null === (RW = aR.current) || void 0 === RW ? void 0 : RW.querySelectorAll(".DocsH2, .DocsH3")) || []).find((RW => {
              var MW;
              return null === (MW = RW.textContent) || void 0 === MW ? void 0 : MW.includes(WW)
            }));
            MW && MW.scrollIntoView({
              block: "start",
              behavior: "smooth"
            })
          }), [aR]),
          AR = (0, wW.useCallback)((WW => {
            var RW, MW;
            const wW = null !== (RW = null === (MW = kR.current) || void 0 === MW ? void 0 : MW.clientWidth) && void 0 !== RW ? RW : window.innerWidth,
              CW = Math.max(120, wW - 200);
            return Math.min(Math.max(WW, 120), CW)
          }), []),
          bM = (0, wW.useCallback)((() => {
            var WW;
            KW.current && (KW.current = !1, null === (WW = kR.current) || void 0 === WW || WW.classList.remove("DocsSidebarResizing"))
          }), []),
          yM = (0, wW.useCallback)((WW => {
            var RW;
            WW.preventDefault(), KW.current = !0, null === (RW = kR.current) || void 0 === RW || RW.classList.add("DocsSidebarResizing")
          }), []);
        (0, wW.useEffect)((() => {
          const WW = kR.current,
            RW = WW => {
              if (!KW.current || !kR.current) return;
              const RW = kR.current.getBoundingClientRect().left;
              vR(AR(WW.clientX - RW))
            };
          return window.addEventListener("mousemove", RW), window.addEventListener("mouseup", bM), () => {
            window.removeEventListener("mousemove", RW), window.removeEventListener("mouseup", bM), null === WW || void 0 === WW || WW.classList.remove("DocsSidebarResizing")
          }
        }), [AR, bM]);
        const NR = (0, wW.useCallback)((WW => {
          if (WW) {
            const [RW, MW] = WW.slice(1).split("-");
            MW && (uW.current = {
              docId: RW,
              subsection: MW
            }), RW && CR(RW)
          }
        }), [CR]);
        (0, wW.useEffect)((() => {
          const WW = uW.current;
          WW && XW === WW.docId && (setTimeout((() => {
            zM(WW.subsection)
          }), 0), uW.current = null)
        })), (0, wW.useEffect)((() => {
          if (!aR.current) return;
          aR.current.querySelectorAll("a.DocsAnchor").forEach((WW => {
            WW.addEventListener("click", (RW => {
              RW.preventDefault(), NR(WW.dataset.id)
            }))
          }))
        }), [XW, NR]);
        const eR = Object.values(lW).find((WW => (null === WW || void 0 === WW ? void 0 : WW.pageStep) === OW));
        return (0, TW.jsx)(IW.d, {
          tutorial: "docsOverview",
          step: null !== (FW = null === eR || void 0 === eR ? void 0 : eR.pageStep) && void 0 !== FW ? FW : "docsPanel",
          text: ZW(null !== (fW = null === eR || void 0 === eR ? void 0 : eR.pageText) && void 0 !== fW ? fW : "codeEditor:tutorialDocsPanel"),
          enabled: cR,
          placement: "left",
          onPrevious: eR ? void 0 : rR,
          children: (0, TW.jsxs)("div", {
            className: "DocsPanel",
            ref: kR,
            children: [(0, TW.jsxs)("div", {
              className: "DocsSidebar",
              style: {
                width: xR,
                minWidth: xR,
                maxWidth: xR
              },
              children: [(0, TW.jsx)(zR.e, {
                className: "DocsSearch",
                placeholderText: "\ud83d\udd0e Search docs...",
                onValueChange: WW => {
                  dW(WW), hW(0), EW(0)
                }
              }, nW), (0, TW.jsx)("div", {
                className: "DocsNavList",
                children: HW ? DW.map((WW => (0, TW.jsxs)("div", {
                  className: bR()("DocsNavItem", "SearchResult", {
                    Active: WW.doc.id === (null === qR || void 0 === qR ? void 0 : qR.id)
                  }),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    CR(WW.doc.id)
                  },
                  children: [(0, TW.jsxs)("div", {
                    className: "SearchResultTitle",
                    children: [WW.doc.title, (0, TW.jsx)("span", {
                      className: "SearchResultCount",
                      children: WW.matchCount
                    })]
                  }), (0, TW.jsx)("div", {
                    className: "SearchResultSnippet",
                    children: YW(WW.snippet, sW)
                  })]
                }, WW.doc.id))) : CW.b.map((WW => {
                  const RW = (0, TW.jsxs)("div", {
                      className: bR()("DocsNavItem", {
                        Active: WW.id === (null === qR || void 0 === qR ? void 0 : qR.id)
                      }),
                      "data-pad-focusable": !0,
                      onClick: () => {
                        CR(WW.id)
                      },
                      children: [(0, TW.jsx)("span", {
                        className: "DocsNavItemTitle",
                        children: WW.title
                      }), WW.subsections && WW.id === (null === qR || void 0 === qR ? void 0 : qR.id) && VW && (0, TW.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, TW.jsx)(JW.e, {
                          name: "angle-down"
                        })
                      }), WW.subsections && (WW.id !== (null === qR || void 0 === qR ? void 0 : qR.id) || !VW) && (0, TW.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, TW.jsx)(JW.e, {
                          name: "angle-up"
                        })
                      })]
                    }),
                    MW = lW[WW.id];
                  return (0, TW.jsxs)(wW.Fragment, {
                    children: [MW && (0, TW.jsx)(IW.d, {
                      tutorial: "docsOverview",
                      step: MW.tabStep,
                      text: ZW(MW.tabText),
                      enabled: cR,
                      placement: "left",
                      waitForClick: !0,
                      children: RW
                    }), !MW && RW, VW && WW.subsections && WW.id === (null === qR || void 0 === qR ? void 0 : qR.id) && WW.subsections.map((WW => (0, TW.jsx)("div", {
                      className: "DocsNavItem DocsSubsection",
                      "data-pad-focusable": !0,
                      onClick: () => {
                        zM(WW)
                      },
                      children: WW
                    }, WW)))]
                  }, WW.id)
                }))
              }), (0, TW.jsx)("div", {
                className: "DocsSidebarButtonContainer",
                children: (0, TW.jsx)(PW.e, {
                  tooltipInner: ZW("codeEditor:popOutDocsTooltip"),
                  placement: "top",
                  children: (0, TW.jsx)(yR.h, {
                    className: "DocsSidebarButton",
                    onClick: QW,
                    children: ZW("codeEditor:popOutDocs")
                  })
                })
              })]
            }), (0, TW.jsx)("div", {
              className: "DocsSidebarResizeHandle",
              onMouseDown: yM
            }), (0, TW.jsxs)("div", {
              className: "DocsContentWrapper",
              children: [HW && RR > 0 && (0, TW.jsxs)("div", {
                className: "DocsMatchNav",
                children: [(0, TW.jsxs)("span", {
                  className: "DocsMatchNavLabel",
                  children: [pW + 1, " / ", RR]
                }), (0, TW.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    wR(-1)
                  },
                  children: "\u25b2"
                }), (0, TW.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    wR(1)
                  },
                  children: "\u25bc"
                })]
              }), (0, TW.jsx)("div", {
                className: "DocsContent",
                ref: aR,
                dangerouslySetInnerHTML: {
                  __html: WR
                }
              })]
            })]
          })
        })
      }))
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);