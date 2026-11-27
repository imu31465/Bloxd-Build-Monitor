export const id = 619;
export const ids = [619];
export const modules = {
  53646: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      default: () => SW
    });
    var mW = OW(62),
      EW = OW(5488),
      NW = OW(1782),
      PW = OW(1089),
      LW = OW.n(PW),
      cW = OW(1532),
      wW = OW(1172),
      tW = OW(5460),
      ZW = OW(5467),
      xW = OW(5470),
      lW = OW(1283);

    function AW(WW) {
      return WW.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    tW.c.registerLanguage("javascript", ZW.e), tW.c.registerLanguage("typescript", xW.b);

    function bW(WW, iW) {
      const OW = AW(WW).replace(/"/g, "&quot;");
      return `<button type="button" class="DocsCopyButton ${iW}" title="${OW}" aria-label="${OW}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5"/><path d="M10.5 3.5V1.5H1.5v9h2"/></svg><svg class="DocsCopiedIcon" viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 8.5l3.5 3.5 7.5-7.5"/></svg></button>`
    }

    function jW(WW, iW) {
      const OW = [],
        mW = WW.toLowerCase(),
        EW = iW.toLowerCase();
      let NW = 0;
      for (; NW < WW.length;) {
        const PW = mW.indexOf(EW, NW);
        if (-1 === PW) {
          OW.push(WW.slice(NW));
          break
        }
        PW > NW && OW.push(WW.slice(NW, PW)), OW.push((0, lW.jsx)("mark", {
          className: "DocsHighlight",
          children: WW.slice(PW, PW + iW.length)
        }, PW)), NW = PW + iW.length
      }
      return OW
    }
    var UW = OW(1391),
      kW = OW(1434),
      sW = OW(38030),
      MW = OW(38039);
    const KW = {
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
      SW = (0, mW.memo)((function(WW) {
        var iW, OW, PW, ZW, xW, SW, YW;
        let {
          popOutDocs: yW,
          hideDocs: TW,
          tutorialEnabled: JW
        } = WW;
        const [hW, HW] = (0, mW.useState)(EW.b[0].id), nW = (0, mW.useRef)(null), uW = (0, mW.useRef)(null), [oW, dW] = (0, mW.useState)(""), [eW, vW] = (0, mW.useState)(0), [gW, DW] = (0, mW.useState)(null), [VW, pW] = (0, mW.useState)(!1), [fW, CW] = (0, mW.useState)(160), XW = (0, mW.useRef)(!1), BW = (0, mW.useRef)(null), qW = (0, sW.n)("docsOverview"), [RW, GW] = (0, mW.useState)(0), IW = Object.values(KW).some((WW => (null === WW || void 0 === WW ? void 0 : WW.tabStep) === qW));
        (0, mW.useEffect)((() => {
          IW && oW.length > 0 && (dW(""), GW((WW => WW + 1)))
        }), [IW, oW]);
        const aW = oW.length > 0,
          rW = (0, mW.useMemo)((() => function(WW) {
            if (!WW) return [];
            const iW = WW.toLowerCase(),
              OW = [];
            for (const mW of EW.b) {
              const WW = mW.content.toLowerCase();
              let EW = 0,
                NW = -1,
                PW = 0,
                LW = WW.indexOf(iW, PW);
              for (; - 1 !== LW;) - 1 === NW && (NW = LW), EW++, PW = LW + iW.length, LW = WW.indexOf(iW, PW);
              if (0 === EW) continue;
              const cW = Math.max(0, NW - 40),
                wW = Math.min(mW.content.length, NW + iW.length + 40),
                tW = (cW > 0 ? "..." : "") + mW.content.slice(cW, wW).replace(/\n/g, " ") + (wW < mW.content.length ? "..." : "");
              OW.push({
                doc: mW,
                matchCount: EW,
                snippet: tW
              })
            }
            return OW.sort(((WW, iW) => iW.matchCount - WW.matchCount)), OW
          }(oW)), [oW]),
          zW = aW ? null !== (iW = null !== (OW = null === (PW = rW.find((WW => WW.doc.id === hW))) || void 0 === PW ? void 0 : PW.doc) && void 0 !== OW ? OW : null === (ZW = rW[0]) || void 0 === ZW ? void 0 : ZW.doc) && void 0 !== iW ? iW : null : null !== (xW = EW.b.find((WW => WW.id === hW))) && void 0 !== xW ? xW : EW.b[0],
          {
            t: FW
          } = (0, wW.B)(),
          QW = FW("codeEditor:copySnippet"),
          Wi = (0, mW.useMemo)((() => zW ? function(WW, iW, OW, mW) {
            let EW = iW;
            EW = EW.replace(/\r\n/g, "\n");
            const NW = [];
            EW = EW.replace(/```(\w*)\n([\s\S]*?)```/g, ((WW, iW, mW) => {
              const EW = NW.length;
              let PW = AW(mW);
              try {
                PW = tW.c.highlight(mW.trimEnd(), {
                  language: iW
                }).value
              } catch (LW) {
                console.warn("Could not highlight documentation code block", LW)
              }
              return NW.push(`<div class="DocsCodeBlockRow"><pre class="DocsCodeBlock" data-lang="${iW}"><code>${PW}</code></pre>${bW(OW,"DocsCopyBlock")}</div>`), `\0PLACEHOLDER_${EW}\0`
            })), EW = EW.replace(/(`{1,2})([^\n]+?)\1(?!`)/g, ((iW, mW, EW) => {
              const PW = NW.length,
                LW = 2 === mW.length ? EW.replace(/^ (.*) $/, "$1") : EW;
              let cW = AW(LW);
              try {
                "apiReference" !== WW && "callbacks" !== WW || (cW = tW.c.highlight(LW.trimEnd().replaceAll("\\|", "|"), {
                  language: "typescript"
                }).value)
              } catch (wW) {
                console.warn("Could not highlight documentation snippet", wW)
              }
              return NW.push(`<span class="DocsInlineCodeRow"><code class="DocsInlineCode">${cW}</code>${bW(OW,"DocsCopyInline")}</span>`), `\0PLACEHOLDER_${PW}\0`
            })), EW = AW(EW), EW = EW.replace(/^#### (.+)$/gm, '<h4 class="DocsH4">$1</h4>'), EW = EW.replace(/^### (.+)$/gm, '<h3 class="DocsH3">$1</h3>'), EW = EW.replace(/^## (.+)$/gm, '<h2 class="DocsH2">$1</h2>'), EW = EW.replace(/^# (.+)$/gm, '<h1 class="DocsH1">$1</h1>'), EW = EW.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"), EW = EW.replace(/\[([^\]]+)\]\(([^)]+)\)/g, ((WW, iW, OW) => OW.startsWith("#") ? `<a class="DocsAnchor" data-id="${OW}">${iW}</a>` : `<a href="${OW}" target="_blank" rel="noopener noreferrer">${iW}</a>`)), EW = EW.replace(/^(\|.+\|)\n(\|[\s:\-|]+\|)\n((?:\|.+\|\s*\r?\n?)*)/gm, ((WW, iW, OW, mW) => `<table class="DocsTable"><thead><tr>${iW.split("|").slice(1,-1).map((WW=>`<th>${WW.trim()}</th>`)).join("")}</tr></thead><tbody>${mW.trim().split("\n").map((WW=>`<tr>${WW.split("|").slice(1,-1).map((WW=>`<td>${WW.trim()}</td>`)).join("")}</tr>`)).join("")}</tbody></table>`)), EW = EW.replace(/(?:^[ \t]*([*-])[ \t]+.+(?:\n|$))+/gm, ((WW, iW) => function(WW, iW) {
              const OW = "*" === iW,
                mW = [];
              for (const LW of WW.split("\n")) {
                const WW = LW.match(/^([ \t]*)(?:[*-])[ \t]+(.+)$/);
                WW && mW.push({
                  indent: WW[1].replace(/\t/g, "  ").length,
                  content: WW[2]
                })
              }
              let EW = "";
              const NW = [],
                PW = OW ? "ol" : "ul";
              for (const {
                  indent: LW,
                  content: cW
                }
                of mW) {
                for (; NW.length > 0 && LW < NW[NW.length - 1];) EW += `</${PW}></li>`, NW.pop();
                (0 === NW.length || LW > NW[NW.length - 1]) && (NW.length > 0 && (EW = EW.replace(/<\/li>$/, "")), EW += `<${PW} class="DocsList">`, NW.push(LW)), EW += `<li class="DocsListItem">${cW}</li>`
              }
              for (; NW.length > 0;) EW += `</${PW}>`, NW.pop(), NW.length > 0 && (EW += "</li>");
              return EW
            }(WW, iW))), EW = EW.replace(/\n{2,}/g, "\n<br/>\n");
            for (let PW = 0; PW < NW.length; PW++) EW = EW.replace(`\0PLACEHOLDER_${PW}\0`, NW[PW]);
            if (mW) {
              const WW = AW(mW).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                iW = new RegExp(WW, "gi");
              EW = EW.replace(/([^<>]+)(?=<|$)/g, (WW => WW.replace(iW, (WW => `<mark class="DocsHighlight">${WW}</mark>`))))
            }
            return EW
          }(zW.id, zW.content, QW, aW ? oW : void 0) : ""), [zW, QW, aW, oW]);
        (0, mW.useEffect)((() => {
          const WW = uW.current;
          if (!WW) return;
          const iW = WW => {
            var iW, OW, mW, EW, NW;
            const PW = null === (iW = (OW = WW.target).closest) || void 0 === iW ? void 0 : iW.call(OW, ".DocsCopyButton");
            if (!PW) return;
            WW.preventDefault(), WW.stopPropagation();
            const LW = null !== (mW = null === (EW = PW.parentElement) || void 0 === EW || null === (NW = EW.querySelector("code")) || void 0 === NW ? void 0 : NW.textContent) && void 0 !== mW ? mW : "";
            navigator.clipboard.writeText(LW.trimEnd()).then((() => {
              PW.classList.add("Copied"), setTimeout((() => {
                PW.classList.remove("Copied")
              }), 1500)
            })).catch((WW => {
              console.warn("Could not copy documentation code", WW)
            }))
          };
          return WW.addEventListener("click", iW, !0), () => {
            WW.removeEventListener("click", iW, !0)
          }
        }), []);
        const [ii, Oi] = (0, mW.useState)(0);
        (0, mW.useEffect)((() => {
          if (!aW || !uW.current) return void Oi(0);
          const WW = uW.current.querySelectorAll(".DocsHighlight").length;
          Oi(WW)
        }), [aW, Wi]), (0, mW.useEffect)((() => {
          if (null === gW || !uW.current) return;
          DW(null);
          const WW = uW.current.querySelectorAll(".DocsHighlight");
          if (0 === WW.length) return;
          const iW = Math.min(gW, WW.length - 1);
          vW(iW), WW.forEach((WW => {
            WW.classList.remove("DocsHighlightActive")
          })), WW[iW].classList.add("DocsHighlightActive"), WW[iW].scrollIntoView({
            block: "center",
            behavior: "smooth"
          })
        }), [gW, Wi]);
        const mi = (0, mW.useCallback)((WW => {
            if (!uW.current) return;
            const iW = uW.current.querySelectorAll(".DocsHighlight");
            if (0 === iW.length) return;
            const OW = (eW + WW + iW.length) % iW.length;
            vW(OW), DW(OW)
          }), [eW]),
          Ei = (0, mW.useCallback)((WW => {
            var iW;
            const OW = null === (iW = KW[WW]) || void 0 === iW ? void 0 : iW.tabStep;
            OW && OW === qW && (0, MW.h)(OW), WW !== hW ? (pW(!0), HW(WW), vW(0), uW.current && (uW.current.scrollTop = 0), aW && DW(0)) : pW(!VW)
          }), [aW, hW, VW, qW]),
          Ni = (0, mW.useCallback)((WW => {
            var iW;
            const OW = Array.from((null === (iW = uW.current) || void 0 === iW ? void 0 : iW.querySelectorAll(".DocsH2, .DocsH3")) || []).find((iW => {
              var OW;
              return null === (OW = iW.textContent) || void 0 === OW ? void 0 : OW.includes(WW)
            }));
            OW && OW.scrollIntoView({
              block: "start",
              behavior: "smooth"
            })
          }), [uW]),
          Pi = (0, mW.useCallback)((WW => {
            var iW, OW;
            const mW = null !== (iW = null === (OW = nW.current) || void 0 === OW ? void 0 : OW.clientWidth) && void 0 !== iW ? iW : window.innerWidth,
              EW = Math.max(120, mW - 200);
            return Math.min(Math.max(WW, 120), EW)
          }), []),
          Li = (0, mW.useCallback)((() => {
            var WW;
            XW.current && (XW.current = !1, null === (WW = nW.current) || void 0 === WW || WW.classList.remove("DocsSidebarResizing"))
          }), []),
          ci = (0, mW.useCallback)((WW => {
            var iW;
            WW.preventDefault(), XW.current = !0, null === (iW = nW.current) || void 0 === iW || iW.classList.add("DocsSidebarResizing")
          }), []);
        (0, mW.useEffect)((() => {
          const WW = nW.current,
            iW = WW => {
              if (!XW.current || !nW.current) return;
              const iW = nW.current.getBoundingClientRect().left;
              CW(Pi(WW.clientX - iW))
            };
          return window.addEventListener("mousemove", iW), window.addEventListener("mouseup", Li), () => {
            window.removeEventListener("mousemove", iW), window.removeEventListener("mouseup", Li), null === WW || void 0 === WW || WW.classList.remove("DocsSidebarResizing")
          }
        }), [Pi, Li]);
        const wi = (0, mW.useCallback)((WW => {
          if (WW) {
            const [iW, OW] = WW.slice(1).split("-");
            OW && (BW.current = {
              docId: iW,
              subsection: OW
            }), iW && Ei(iW)
          }
        }), [Ei]);
        (0, mW.useEffect)((() => {
          const WW = BW.current;
          WW && hW === WW.docId && (setTimeout((() => {
            Ni(WW.subsection)
          }), 0), BW.current = null)
        })), (0, mW.useEffect)((() => {
          if (!uW.current) return;
          uW.current.querySelectorAll("a.DocsAnchor").forEach((WW => {
            WW.addEventListener("click", (iW => {
              iW.preventDefault(), wi(WW.dataset.id)
            }))
          }))
        }), [hW, wi]);
        const ti = Object.values(KW).find((WW => (null === WW || void 0 === WW ? void 0 : WW.pageStep) === qW));
        return (0, lW.jsx)(sW.j, {
          tutorial: "docsOverview",
          step: null !== (SW = null === ti || void 0 === ti ? void 0 : ti.pageStep) && void 0 !== SW ? SW : "docsPanel",
          text: FW(null !== (YW = null === ti || void 0 === ti ? void 0 : ti.pageText) && void 0 !== YW ? YW : "codeEditor:tutorialDocsPanel"),
          enabled: JW,
          placement: "left",
          onPrevious: ti ? void 0 : TW,
          children: (0, lW.jsxs)("div", {
            className: "DocsPanel",
            ref: nW,
            children: [(0, lW.jsxs)("div", {
              className: "DocsSidebar",
              style: {
                width: fW,
                minWidth: fW,
                maxWidth: fW
              },
              children: [(0, lW.jsx)(NW.b, {
                className: "DocsSearch",
                placeholderText: "\ud83d\udd0e Search docs...",
                onValueChange: WW => {
                  dW(WW), vW(0), DW(0)
                }
              }, RW), (0, lW.jsx)("div", {
                className: "DocsNavList",
                children: aW ? rW.map((WW => (0, lW.jsxs)("div", {
                  className: LW()("DocsNavItem", "SearchResult", {
                    Active: WW.doc.id === (null === zW || void 0 === zW ? void 0 : zW.id)
                  }),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    Ei(WW.doc.id)
                  },
                  children: [(0, lW.jsxs)("div", {
                    className: "SearchResultTitle",
                    children: [WW.doc.title, (0, lW.jsx)("span", {
                      className: "SearchResultCount",
                      children: WW.matchCount
                    })]
                  }), (0, lW.jsx)("div", {
                    className: "SearchResultSnippet",
                    children: jW(WW.snippet, oW)
                  })]
                }, WW.doc.id))) : EW.b.map((WW => {
                  const iW = (0, lW.jsxs)("div", {
                      className: LW()("DocsNavItem", {
                        Active: WW.id === (null === zW || void 0 === zW ? void 0 : zW.id)
                      }),
                      "data-pad-focusable": !0,
                      onClick: () => {
                        Ei(WW.id)
                      },
                      children: [(0, lW.jsx)("span", {
                        className: "DocsNavItemTitle",
                        children: WW.title
                      }), WW.subsections && WW.id === (null === zW || void 0 === zW ? void 0 : zW.id) && VW && (0, lW.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, lW.jsx)(UW.c, {
                          name: "angle-down"
                        })
                      }), WW.subsections && (WW.id !== (null === zW || void 0 === zW ? void 0 : zW.id) || !VW) && (0, lW.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, lW.jsx)(UW.c, {
                          name: "angle-up"
                        })
                      })]
                    }),
                    OW = KW[WW.id];
                  return (0, lW.jsxs)(mW.Fragment, {
                    children: [OW && (0, lW.jsx)(sW.j, {
                      tutorial: "docsOverview",
                      step: OW.tabStep,
                      text: FW(OW.tabText),
                      enabled: JW,
                      placement: "left",
                      waitForClick: !0,
                      children: iW
                    }), !OW && iW, VW && WW.subsections && WW.id === (null === zW || void 0 === zW ? void 0 : zW.id) && WW.subsections.map((WW => (0, lW.jsx)("div", {
                      className: "DocsNavItem DocsSubsection",
                      "data-pad-focusable": !0,
                      onClick: () => {
                        Ni(WW)
                      },
                      children: WW
                    }, WW)))]
                  }, WW.id)
                }))
              }), (0, lW.jsx)("div", {
                className: "DocsSidebarButtonContainer",
                children: (0, lW.jsx)(kW.f, {
                  tooltipInner: FW("codeEditor:popOutDocsTooltip"),
                  placement: "top",
                  children: (0, lW.jsx)(cW.f, {
                    className: "DocsSidebarButton",
                    onClick: yW,
                    children: FW("codeEditor:popOutDocs")
                  })
                })
              })]
            }), (0, lW.jsx)("div", {
              className: "DocsSidebarResizeHandle",
              onMouseDown: ci
            }), (0, lW.jsxs)("div", {
              className: "DocsContentWrapper",
              children: [aW && ii > 0 && (0, lW.jsxs)("div", {
                className: "DocsMatchNav",
                children: [(0, lW.jsxs)("span", {
                  className: "DocsMatchNavLabel",
                  children: [eW + 1, " / ", ii]
                }), (0, lW.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    mi(-1)
                  },
                  children: "\u25b2"
                }), (0, lW.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    mi(1)
                  },
                  children: "\u25bc"
                })]
              }), (0, lW.jsx)("div", {
                className: "DocsContent",
                ref: uW,
                dangerouslySetInnerHTML: {
                  __html: Wi
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