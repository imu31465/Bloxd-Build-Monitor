export const id = 610;
export const ids = [610];
export const modules = {
  44956: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      default: () => UH
    });
    var AH = LH(45),
      rH = LH(5220),
      SH = LH(1706),
      hH = LH(1038),
      tH = LH.n(hH),
      zH = LH(1455),
      CH = LH(1123),
      EH = LH(5194),
      XH = LH(5207),
      GH = LH(5214),
      YH = LH(1225);

    function uH(HH) {
      return HH.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    EH.c.registerLanguage("javascript", XH.e), EH.c.registerLanguage("typescript", GH.b);

    function QH(HH, BH) {
      const LH = uH(HH).replace(/"/g, "&quot;");
      return `<button type="button" class="DocsCopyButton ${BH}" title="${LH}" aria-label="${LH}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5"/><path d="M10.5 3.5V1.5H1.5v9h2"/></svg><svg class="DocsCopiedIcon" viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 8.5l3.5 3.5 7.5-7.5"/></svg></button>`
    }

    function WH(HH, BH) {
      const LH = [],
        AH = HH.toLowerCase(),
        rH = BH.toLowerCase();
      let SH = 0;
      for (; SH < HH.length;) {
        const hH = AH.indexOf(rH, SH);
        if (-1 === hH) {
          LH.push(HH.slice(SH));
          break
        }
        hH > SH && LH.push(HH.slice(SH, hH)), LH.push((0, YH.jsx)("mark", {
          className: "DocsHighlight",
          children: HH.slice(hH, hH + BH.length)
        }, hH)), SH = hH + BH.length
      }
      return LH
    }
    var MH = LH(1315),
      xH = LH(1365),
      vH = LH(37747),
      PH = LH(37754);
    const TH = {
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
      UH = (0, AH.memo)((function(HH) {
        var BH, LH, hH, XH, GH, UH, VH;
        let {
          popOutDocs: OH,
          hideDocs: bH,
          tutorialEnabled: kH
        } = HH;
        const [mH, oH] = (0, AH.useState)(rH.c[0].id), IH = (0, AH.useRef)(null), fH = (0, AH.useRef)(null), [lH, KH] = (0, AH.useState)(""), [cH, eH] = (0, AH.useState)(0), [qH, gH] = (0, AH.useState)(null), [NH, RH] = (0, AH.useState)(!1), [jH, nH] = (0, AH.useState)(160), FH = (0, AH.useRef)(!1), DH = (0, AH.useRef)(null), wH = (0, vH.j)("docsOverview"), [ZH, dH] = (0, AH.useState)(0), aH = Object.values(TH).some((HH => (null === HH || void 0 === HH ? void 0 : HH.tabStep) === wH));
        (0, AH.useEffect)((() => {
          aH && lH.length > 0 && (KH(""), dH((HH => HH + 1)))
        }), [aH, lH]);
        const sH = lH.length > 0,
          JH = (0, AH.useMemo)((() => function(HH) {
            if (!HH) return [];
            const BH = HH.toLowerCase(),
              LH = [];
            for (const AH of rH.c) {
              const HH = AH.content.toLowerCase();
              let rH = 0,
                SH = -1,
                hH = 0,
                tH = HH.indexOf(BH, hH);
              for (; - 1 !== tH;) - 1 === SH && (SH = tH), rH++, hH = tH + BH.length, tH = HH.indexOf(BH, hH);
              if (0 === rH) continue;
              const zH = Math.max(0, SH - 40),
                CH = Math.min(AH.content.length, SH + BH.length + 40),
                EH = (zH > 0 ? "..." : "") + AH.content.slice(zH, CH).replace(/\n/g, " ") + (CH < AH.content.length ? "..." : "");
              LH.push({
                doc: AH,
                matchCount: rH,
                snippet: EH
              })
            }
            return LH.sort(((HH, BH) => BH.matchCount - HH.matchCount)), LH
          }(lH)), [lH]),
          iH = sH ? null !== (BH = null !== (LH = null === (hH = JH.find((HH => HH.doc.id === mH))) || void 0 === hH ? void 0 : hH.doc) && void 0 !== LH ? LH : null === (XH = JH[0]) || void 0 === XH ? void 0 : XH.doc) && void 0 !== BH ? BH : null : null !== (GH = rH.c.find((HH => HH.id === mH))) && void 0 !== GH ? GH : rH.c[0],
          {
            t: pH
          } = (0, CH.B)(),
          yH = pH("codeEditor:copySnippet"),
          HB = (0, AH.useMemo)((() => iH ? function(HH, BH, LH, AH) {
            let rH = BH;
            rH = rH.replace(/\r\n/g, "\n");
            const SH = [];
            rH = rH.replace(/```(\w*)\n([\s\S]*?)```/g, ((HH, BH, AH) => {
              const rH = SH.length;
              let hH = uH(AH);
              try {
                hH = EH.c.highlight(AH.trimEnd(), {
                  language: BH
                }).value
              } catch (tH) {
                console.warn("Could not highlight documentation code block", tH)
              }
              return SH.push(`<div class="DocsCodeBlockRow"><pre class="DocsCodeBlock" data-lang="${BH}"><code>${hH}</code></pre>${QH(LH,"DocsCopyBlock")}</div>`), `\0PLACEHOLDER_${rH}\0`
            })), rH = rH.replace(/(`{1,2})([^\n]+?)\1(?!`)/g, ((BH, AH, rH) => {
              const hH = SH.length,
                tH = 2 === AH.length ? rH.replace(/^ (.*) $/, "$1") : rH;
              let zH = uH(tH);
              try {
                "apiReference" !== HH && "callbacks" !== HH || (zH = EH.c.highlight(tH.trimEnd().replaceAll("\\|", "|"), {
                  language: "typescript"
                }).value)
              } catch (CH) {
                console.warn("Could not highlight documentation snippet", CH)
              }
              return SH.push(`<span class="DocsInlineCodeRow"><code class="DocsInlineCode">${zH}</code>${QH(LH,"DocsCopyInline")}</span>`), `\0PLACEHOLDER_${hH}\0`
            })), rH = uH(rH), rH = rH.replace(/^#### (.+)$/gm, '<h4 class="DocsH4">$1</h4>'), rH = rH.replace(/^### (.+)$/gm, '<h3 class="DocsH3">$1</h3>'), rH = rH.replace(/^## (.+)$/gm, '<h2 class="DocsH2">$1</h2>'), rH = rH.replace(/^# (.+)$/gm, '<h1 class="DocsH1">$1</h1>'), rH = rH.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"), rH = rH.replace(/\[([^\]]+)\]\(([^)]+)\)/g, ((HH, BH, LH) => LH.startsWith("#") ? `<a class="DocsAnchor" data-id="${LH}">${BH}</a>` : `<a href="${LH}" target="_blank" rel="noopener noreferrer">${BH}</a>`)), rH = rH.replace(/^(\|.+\|)\n(\|[\s:\-|]+\|)\n((?:\|.+\|\s*\r?\n?)*)/gm, ((HH, BH, LH, AH) => `<table class="DocsTable"><thead><tr>${BH.split("|").slice(1,-1).map((HH=>`<th>${HH.trim()}</th>`)).join("")}</tr></thead><tbody>${AH.trim().split("\n").map((HH=>`<tr>${HH.split("|").slice(1,-1).map((HH=>`<td>${HH.trim()}</td>`)).join("")}</tr>`)).join("")}</tbody></table>`)), rH = rH.replace(/(?:^[ \t]*([*-])[ \t]+.+(?:\n|$))+/gm, ((HH, BH) => function(HH, BH) {
              const LH = "*" === BH,
                AH = [];
              for (const tH of HH.split("\n")) {
                const HH = tH.match(/^([ \t]*)(?:[*-])[ \t]+(.+)$/);
                HH && AH.push({
                  indent: HH[1].replace(/\t/g, "  ").length,
                  content: HH[2]
                })
              }
              let rH = "";
              const SH = [],
                hH = LH ? "ol" : "ul";
              for (const {
                  indent: tH,
                  content: zH
                }
                of AH) {
                for (; SH.length > 0 && tH < SH[SH.length - 1];) rH += `</${hH}></li>`, SH.pop();
                (0 === SH.length || tH > SH[SH.length - 1]) && (SH.length > 0 && (rH = rH.replace(/<\/li>$/, "")), rH += `<${hH} class="DocsList">`, SH.push(tH)), rH += `<li class="DocsListItem">${zH}</li>`
              }
              for (; SH.length > 0;) rH += `</${hH}>`, SH.pop(), SH.length > 0 && (rH += "</li>");
              return rH
            }(HH, BH))), rH = rH.replace(/\n{2,}/g, "\n<br/>\n");
            for (let hH = 0; hH < SH.length; hH++) rH = rH.replace(`\0PLACEHOLDER_${hH}\0`, SH[hH]);
            if (AH) {
              const HH = uH(AH).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                BH = new RegExp(HH, "gi");
              rH = rH.replace(/([^<>]+)(?=<|$)/g, (HH => HH.replace(BH, (HH => `<mark class="DocsHighlight">${HH}</mark>`))))
            }
            return rH
          }(iH.id, iH.content, yH, sH ? lH : void 0) : ""), [iH, yH, sH, lH]);
        (0, AH.useEffect)((() => {
          const HH = fH.current;
          if (!HH) return;
          const BH = HH => {
            var BH, LH, AH, rH, SH;
            const hH = null === (BH = (LH = HH.target).closest) || void 0 === BH ? void 0 : BH.call(LH, ".DocsCopyButton");
            if (!hH) return;
            HH.preventDefault(), HH.stopPropagation();
            const tH = null !== (AH = null === (rH = hH.parentElement) || void 0 === rH || null === (SH = rH.querySelector("code")) || void 0 === SH ? void 0 : SH.textContent) && void 0 !== AH ? AH : "";
            navigator.clipboard.writeText(tH.trimEnd()).then((() => {
              hH.classList.add("Copied"), setTimeout((() => {
                hH.classList.remove("Copied")
              }), 1500)
            })).catch((HH => {
              console.warn("Could not copy documentation code", HH)
            }))
          };
          return HH.addEventListener("click", BH, !0), () => {
            HH.removeEventListener("click", BH, !0)
          }
        }), []);
        const [BB, LB] = (0, AH.useState)(0);
        (0, AH.useEffect)((() => {
          if (!sH || !fH.current) return void LB(0);
          const HH = fH.current.querySelectorAll(".DocsHighlight").length;
          LB(HH)
        }), [sH, HB]), (0, AH.useEffect)((() => {
          if (null === qH || !fH.current) return;
          gH(null);
          const HH = fH.current.querySelectorAll(".DocsHighlight");
          if (0 === HH.length) return;
          const BH = Math.min(qH, HH.length - 1);
          eH(BH), HH.forEach((HH => {
            HH.classList.remove("DocsHighlightActive")
          })), HH[BH].classList.add("DocsHighlightActive"), HH[BH].scrollIntoView({
            block: "center",
            behavior: "smooth"
          })
        }), [qH, HB]);
        const AB = (0, AH.useCallback)((HH => {
            if (!fH.current) return;
            const BH = fH.current.querySelectorAll(".DocsHighlight");
            if (0 === BH.length) return;
            const LH = (cH + HH + BH.length) % BH.length;
            eH(LH), gH(LH)
          }), [cH]),
          rB = (0, AH.useCallback)((HH => {
            var BH;
            const LH = null === (BH = TH[HH]) || void 0 === BH ? void 0 : BH.tabStep;
            LH && LH === wH && (0, PH.e)(LH), HH !== mH ? (RH(!0), oH(HH), eH(0), fH.current && (fH.current.scrollTop = 0), sH && gH(0)) : RH(!NH)
          }), [sH, mH, NH, wH]),
          SB = (0, AH.useCallback)((HH => {
            var BH;
            const LH = Array.from((null === (BH = fH.current) || void 0 === BH ? void 0 : BH.querySelectorAll(".DocsH2, .DocsH3")) || []).find((BH => {
              var LH;
              return null === (LH = BH.textContent) || void 0 === LH ? void 0 : LH.includes(HH)
            }));
            LH && LH.scrollIntoView({
              block: "start",
              behavior: "smooth"
            })
          }), [fH]),
          hB = (0, AH.useCallback)((HH => {
            var BH, LH;
            const AH = null !== (BH = null === (LH = IH.current) || void 0 === LH ? void 0 : LH.clientWidth) && void 0 !== BH ? BH : window.innerWidth,
              rH = Math.max(120, AH - 200);
            return Math.min(Math.max(HH, 120), rH)
          }), []),
          tB = (0, AH.useCallback)((() => {
            var HH;
            FH.current && (FH.current = !1, null === (HH = IH.current) || void 0 === HH || HH.classList.remove("DocsSidebarResizing"))
          }), []),
          zB = (0, AH.useCallback)((HH => {
            var BH;
            HH.preventDefault(), FH.current = !0, null === (BH = IH.current) || void 0 === BH || BH.classList.add("DocsSidebarResizing")
          }), []);
        (0, AH.useEffect)((() => {
          const HH = IH.current,
            BH = HH => {
              if (!FH.current || !IH.current) return;
              const BH = IH.current.getBoundingClientRect().left;
              nH(hB(HH.clientX - BH))
            };
          return window.addEventListener("mousemove", BH), window.addEventListener("mouseup", tB), () => {
            window.removeEventListener("mousemove", BH), window.removeEventListener("mouseup", tB), null === HH || void 0 === HH || HH.classList.remove("DocsSidebarResizing")
          }
        }), [hB, tB]);
        const CB = (0, AH.useCallback)((HH => {
          if (HH) {
            const [BH, LH] = HH.slice(1).split("-");
            LH && (DH.current = {
              docId: BH,
              subsection: LH
            }), BH && rB(BH)
          }
        }), [rB]);
        (0, AH.useEffect)((() => {
          const HH = DH.current;
          HH && mH === HH.docId && (setTimeout((() => {
            SB(HH.subsection)
          }), 0), DH.current = null)
        })), (0, AH.useEffect)((() => {
          if (!fH.current) return;
          fH.current.querySelectorAll("a.DocsAnchor").forEach((HH => {
            HH.addEventListener("click", (BH => {
              BH.preventDefault(), CB(HH.dataset.id)
            }))
          }))
        }), [mH, CB]);
        const EB = Object.values(TH).find((HH => (null === HH || void 0 === HH ? void 0 : HH.pageStep) === wH));
        return (0, YH.jsx)(vH.h, {
          tutorial: "docsOverview",
          step: null !== (UH = null === EB || void 0 === EB ? void 0 : EB.pageStep) && void 0 !== UH ? UH : "docsPanel",
          text: pH(null !== (VH = null === EB || void 0 === EB ? void 0 : EB.pageText) && void 0 !== VH ? VH : "codeEditor:tutorialDocsPanel"),
          enabled: kH,
          placement: "left",
          onPrevious: EB ? void 0 : bH,
          children: (0, YH.jsxs)("div", {
            className: "DocsPanel",
            ref: IH,
            children: [(0, YH.jsxs)("div", {
              className: "DocsSidebar",
              style: {
                width: jH,
                minWidth: jH,
                maxWidth: jH
              },
              children: [(0, YH.jsx)(SH.e, {
                className: "DocsSearch",
                placeholderText: "\ud83d\udd0e Search docs...",
                onValueChange: HH => {
                  KH(HH), eH(0), gH(0)
                }
              }, ZH), (0, YH.jsx)("div", {
                className: "DocsNavList",
                children: sH ? JH.map((HH => (0, YH.jsxs)("div", {
                  className: tH()("DocsNavItem", "SearchResult", {
                    Active: HH.doc.id === (null === iH || void 0 === iH ? void 0 : iH.id)
                  }),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    rB(HH.doc.id)
                  },
                  children: [(0, YH.jsxs)("div", {
                    className: "SearchResultTitle",
                    children: [HH.doc.title, (0, YH.jsx)("span", {
                      className: "SearchResultCount",
                      children: HH.matchCount
                    })]
                  }), (0, YH.jsx)("div", {
                    className: "SearchResultSnippet",
                    children: WH(HH.snippet, lH)
                  })]
                }, HH.doc.id))) : rH.c.map((HH => {
                  const BH = (0, YH.jsxs)("div", {
                      className: tH()("DocsNavItem", {
                        Active: HH.id === (null === iH || void 0 === iH ? void 0 : iH.id)
                      }),
                      "data-pad-focusable": !0,
                      onClick: () => {
                        rB(HH.id)
                      },
                      children: [(0, YH.jsx)("span", {
                        className: "DocsNavItemTitle",
                        children: HH.title
                      }), HH.subsections && HH.id === (null === iH || void 0 === iH ? void 0 : iH.id) && NH && (0, YH.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, YH.jsx)(MH.c, {
                          name: "angle-down"
                        })
                      }), HH.subsections && (HH.id !== (null === iH || void 0 === iH ? void 0 : iH.id) || !NH) && (0, YH.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, YH.jsx)(MH.c, {
                          name: "angle-up"
                        })
                      })]
                    }),
                    LH = TH[HH.id];
                  return (0, YH.jsxs)(AH.Fragment, {
                    children: [LH && (0, YH.jsx)(vH.h, {
                      tutorial: "docsOverview",
                      step: LH.tabStep,
                      text: pH(LH.tabText),
                      enabled: kH,
                      placement: "left",
                      waitForClick: !0,
                      children: BH
                    }), !LH && BH, NH && HH.subsections && HH.id === (null === iH || void 0 === iH ? void 0 : iH.id) && HH.subsections.map((HH => (0, YH.jsx)("div", {
                      className: "DocsNavItem DocsSubsection",
                      "data-pad-focusable": !0,
                      onClick: () => {
                        SB(HH)
                      },
                      children: HH
                    }, HH)))]
                  }, HH.id)
                }))
              }), (0, YH.jsx)("div", {
                className: "DocsSidebarButtonContainer",
                children: (0, YH.jsx)(xH.g, {
                  tooltipInner: pH("codeEditor:popOutDocsTooltip"),
                  placement: "top",
                  children: (0, YH.jsx)(zH.i, {
                    className: "DocsSidebarButton",
                    onClick: OH,
                    children: pH("codeEditor:popOutDocs")
                  })
                })
              })]
            }), (0, YH.jsx)("div", {
              className: "DocsSidebarResizeHandle",
              onMouseDown: zB
            }), (0, YH.jsxs)("div", {
              className: "DocsContentWrapper",
              children: [sH && BB > 0 && (0, YH.jsxs)("div", {
                className: "DocsMatchNav",
                children: [(0, YH.jsxs)("span", {
                  className: "DocsMatchNavLabel",
                  children: [cH + 1, " / ", BB]
                }), (0, YH.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    AB(-1)
                  },
                  children: "\u25b2"
                }), (0, YH.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    AB(1)
                  },
                  children: "\u25bc"
                })]
              }), (0, YH.jsx)("div", {
                className: "DocsContent",
                ref: fH,
                dangerouslySetInnerHTML: {
                  __html: HB
                }
              })]
            })]
          })
        })
      }))
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);