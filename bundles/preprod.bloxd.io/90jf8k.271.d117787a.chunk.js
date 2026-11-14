export const id = 271;
export const ids = [271];
export const modules = {
  39327: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      default: () => VF
    });
    var CF = SF(46),
      AF = SF(3733),
      uF = SF(1504),
      hF = SF(918),
      bW = SF.n(hF),
      dF = SF(1266),
      PF = SF(1046),
      RF = SF(3705),
      iW = SF(3716),
      eF = SF(3720),
      EF = SF(971);

    function QF(FF) {
      return FF.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    RF.c.registerLanguage("javascript", iW.e), RF.c.registerLanguage("typescript", eF.c);

    function rW(FF, WF) {
      const SF = QF(FF).replace(/"/g, "&quot;");
      return `<button type="button" class="DocsCopyButton ${WF}" title="${SF}" aria-label="${SF}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5" rx="1.5"/><path d="M10.5 3.5V3A1.5 1.5 0 0 0 9 1.5H3A1.5 1.5 0 0 0 1.5 3v6A1.5 1.5 0 0 0 3 10.5h.5"/></svg><svg class="DocsCopiedIcon" viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 8.5l3.5 3.5 7.5-7.5"/></svg></button>`
    }

    function gW(FF, WF) {
      const SF = [],
        CF = FF.toLowerCase(),
        AF = WF.toLowerCase();
      let uF = 0;
      for (; uF < FF.length;) {
        const hF = CF.indexOf(AF, uF);
        if (-1 === hF) {
          SF.push(FF.slice(uF));
          break
        }
        hF > uF && SF.push(FF.slice(uF, hF)), SF.push((0, EF.jsx)("mark", {
          className: "DocsHighlight",
          children: FF.slice(hF, hF + WF.length)
        }, hF)), uF = hF + WF.length
      }
      return SF
    }
    var tW = SF(929),
      TF = SF(1198),
      aW = SF(35358),
      kW = SF(35361);
    const qW = {
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
      VF = (0, CF.memo)((function(FF) {
        var WF, SF, hF, iW, eF, VF, NF;
        let {
          popOutDocs: DF,
          hideDocs: LF,
          tutorialEnabled: mW
        } = FF;
        const [OF, xW] = (0, CF.useState)(AF.b[0].id), ZF = (0, CF.useRef)(null), oF = (0, CF.useRef)(null), [YF, MF] = (0, CF.useState)(""), [cW, GF] = (0, CF.useState)(0), [zW, IF] = (0, CF.useState)(null), [fF, yW] = (0, CF.useState)(!1), [sF, nF] = (0, CF.useState)(160), HF = (0, CF.useRef)(!1), KF = (0, CF.useRef)(null), wF = (0, aW.i)("docsOverview"), [XF, UF] = (0, CF.useState)(0), BF = Object.values(qW).some((FF => (null === FF || void 0 === FF ? void 0 : FF.tabStep) === wF));
        (0, CF.useEffect)((() => {
          BF && YF.length > 0 && (MF(""), UF((FF => FF + 1)))
        }), [BF, YF]);
        const jW = YF.length > 0,
          vW = (0, CF.useMemo)((() => function(FF) {
            if (!FF) return [];
            const WF = FF.toLowerCase(),
              SF = [];
            for (const CF of AF.b) {
              const FF = CF.content.toLowerCase();
              let AF = 0,
                uF = -1,
                hF = 0,
                bW = FF.indexOf(WF, hF);
              for (; - 1 !== bW;) - 1 === uF && (uF = bW), AF++, hF = bW + WF.length, bW = FF.indexOf(WF, hF);
              if (0 === AF) continue;
              const dF = Math.max(0, uF - 40),
                PF = Math.min(CF.content.length, uF + WF.length + 40),
                RF = (dF > 0 ? "..." : "") + CF.content.slice(dF, PF).replace(/\n/g, " ") + (PF < CF.content.length ? "..." : "");
              SF.push({
                doc: CF,
                matchCount: AF,
                snippet: RF
              })
            }
            return SF.sort(((FF, WF) => WF.matchCount - FF.matchCount)), SF
          }(YF)), [YF]),
          JF = jW ? null !== (WF = null !== (SF = null === (hF = vW.find((FF => FF.doc.id === OF))) || void 0 === hF ? void 0 : hF.doc) && void 0 !== SF ? SF : null === (iW = vW[0]) || void 0 === iW ? void 0 : iW.doc) && void 0 !== WF ? WF : null : null !== (eF = AF.b.find((FF => FF.id === OF))) && void 0 !== eF ? eF : AF.b[0],
          {
            t: pF
          } = (0, PF.B)(),
          lF = pF("codeEditor:copySnippet"),
          FW = (0, CF.useMemo)((() => JF ? function(FF, WF, SF, CF) {
            let AF = WF;
            AF = AF.replace(/\r\n/g, "\n");
            const uF = [];
            AF = AF.replace(/```(\w*)\n([\s\S]*?)```/g, ((FF, WF, CF) => {
              const AF = uF.length;
              let hF = QF(CF);
              try {
                hF = RF.c.highlight(CF.trimEnd(), {
                  language: WF
                }).value
              } catch (bW) {
                console.warn("Could not highlight documentation code block", bW)
              }
              return uF.push(`<div class="DocsCodeBlockRow"><pre class="DocsCodeBlock" data-lang="${WF}"><code>${hF}</code></pre>${rW(SF,"DocsCopyBlock")}</div>`), `\0PLACEHOLDER_${AF}\0`
            })), AF = AF.replace(/(`{1,2})([^\n]+?)\1(?!`)/g, ((WF, CF, AF) => {
              const hF = uF.length,
                bW = 2 === CF.length ? AF.replace(/^ (.*) $/, "$1") : AF;
              let dF = QF(bW);
              try {
                "apiReference" !== FF && "callbacks" !== FF || (dF = RF.c.highlight(bW.trimEnd().replaceAll("\\|", "|"), {
                  language: "typescript"
                }).value)
              } catch (PF) {
                console.warn("Could not highlight documentation snippet", PF)
              }
              return uF.push(`<span class="DocsInlineCodeRow"><code class="DocsInlineCode">${dF}</code>${rW(SF,"DocsCopyInline")}</span>`), `\0PLACEHOLDER_${hF}\0`
            })), AF = QF(AF), AF = AF.replace(/^#### (.+)$/gm, '<h4 class="DocsH4">$1</h4>'), AF = AF.replace(/^### (.+)$/gm, '<h3 class="DocsH3">$1</h3>'), AF = AF.replace(/^## (.+)$/gm, '<h2 class="DocsH2">$1</h2>'), AF = AF.replace(/^# (.+)$/gm, '<h1 class="DocsH1">$1</h1>'), AF = AF.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"), AF = AF.replace(/\[([^\]]+)\]\(([^)]+)\)/g, ((FF, WF, SF) => SF.startsWith("#") ? `<a class="DocsAnchor" data-id="${SF}">${WF}</a>` : `<a href="${SF}" target="_blank" rel="noopener noreferrer">${WF}</a>`)), AF = AF.replace(/^(\|.+\|)\n(\|[\s:\-|]+\|)\n((?:\|.+\|\s*\r?\n?)*)/gm, ((FF, WF, SF, CF) => `<table class="DocsTable"><thead><tr>${WF.split("|").slice(1,-1).map((FF=>`<th>${FF.trim()}</th>`)).join("")}</tr></thead><tbody>${CF.trim().split("\n").map((FF=>`<tr>${FF.split("|").slice(1,-1).map((FF=>`<td>${FF.trim()}</td>`)).join("")}</tr>`)).join("")}</tbody></table>`)), AF = AF.replace(/(?:^[ \t]*([*-])[ \t]+.+(?:\n|$))+/gm, ((FF, WF) => function(FF, WF) {
              const SF = "*" === WF,
                CF = [];
              for (const bW of FF.split("\n")) {
                const FF = bW.match(/^([ \t]*)(?:[*-])[ \t]+(.+)$/);
                FF && CF.push({
                  indent: FF[1].replace(/\t/g, "  ").length,
                  content: FF[2]
                })
              }
              let AF = "";
              const uF = [],
                hF = SF ? "ol" : "ul";
              for (const {
                  indent: bW,
                  content: dF
                }
                of CF) {
                for (; uF.length > 0 && bW < uF[uF.length - 1];) AF += `</${hF}></li>`, uF.pop();
                (0 === uF.length || bW > uF[uF.length - 1]) && (uF.length > 0 && (AF = AF.replace(/<\/li>$/, "")), AF += `<${hF} class="DocsList">`, uF.push(bW)), AF += `<li class="DocsListItem">${dF}</li>`
              }
              for (; uF.length > 0;) AF += `</${hF}>`, uF.pop(), uF.length > 0 && (AF += "</li>");
              return AF
            }(FF, WF))), AF = AF.replace(/\n{2,}/g, "\n<br/>\n");
            for (let hF = 0; hF < uF.length; hF++) AF = AF.replace(`\0PLACEHOLDER_${hF}\0`, uF[hF]);
            if (CF) {
              const FF = QF(CF).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                WF = new RegExp(FF, "gi");
              AF = AF.replace(/([^<>]+)(?=<|$)/g, (FF => FF.replace(WF, (FF => `<mark class="DocsHighlight">${FF}</mark>`))))
            }
            return AF
          }(JF.id, JF.content, lF, jW ? YF : void 0) : ""), [JF, lF, jW, YF]);
        (0, CF.useEffect)((() => {
          const FF = oF.current;
          if (!FF) return;
          const WF = FF => {
            var WF, SF, CF, AF, uF;
            const hF = null === (WF = (SF = FF.target).closest) || void 0 === WF ? void 0 : WF.call(SF, ".DocsCopyButton");
            if (!hF) return;
            FF.preventDefault(), FF.stopPropagation();
            const bW = null !== (CF = null === (AF = hF.parentElement) || void 0 === AF || null === (uF = AF.querySelector("code")) || void 0 === uF ? void 0 : uF.textContent) && void 0 !== CF ? CF : "";
            navigator.clipboard.writeText(bW.trimEnd()).then((() => {
              hF.classList.add("Copied"), setTimeout((() => {
                hF.classList.remove("Copied")
              }), 1500)
            })).catch((FF => {
              console.warn("Could not copy documentation code", FF)
            }))
          };
          return FF.addEventListener("click", WF, !0), () => {
            FF.removeEventListener("click", WF, !0)
          }
        }), []);
        const [WW, SW] = (0, CF.useState)(0);
        (0, CF.useEffect)((() => {
          if (!jW || !oF.current) return void SW(0);
          const FF = oF.current.querySelectorAll(".DocsHighlight").length;
          SW(FF)
        }), [jW, FW]), (0, CF.useEffect)((() => {
          if (null === zW || !oF.current) return;
          IF(null);
          const FF = oF.current.querySelectorAll(".DocsHighlight");
          if (0 === FF.length) return;
          const WF = Math.min(zW, FF.length - 1);
          GF(WF), FF.forEach((FF => {
            FF.classList.remove("DocsHighlightActive")
          })), FF[WF].classList.add("DocsHighlightActive"), FF[WF].scrollIntoView({
            block: "center",
            behavior: "smooth"
          })
        }), [zW, FW]);
        const CW = (0, CF.useCallback)((FF => {
            if (!oF.current) return;
            const WF = oF.current.querySelectorAll(".DocsHighlight");
            if (0 === WF.length) return;
            const SF = (cW + FF + WF.length) % WF.length;
            GF(SF), IF(SF)
          }), [cW]),
          AW = (0, CF.useCallback)((FF => {
            var WF;
            const SF = null === (WF = qW[FF]) || void 0 === WF ? void 0 : WF.tabStep;
            SF && SF === wF && (0, kW.h)(SF), FF !== OF ? (yW(!0), xW(FF), GF(0), oF.current && (oF.current.scrollTop = 0), jW && IF(0)) : yW(!fF)
          }), [jW, OF, fF, wF]),
          uW = (0, CF.useCallback)((FF => {
            var WF;
            const SF = Array.from((null === (WF = oF.current) || void 0 === WF ? void 0 : WF.querySelectorAll(".DocsH2, .DocsH3")) || []).find((WF => {
              var SF;
              return null === (SF = WF.textContent) || void 0 === SF ? void 0 : SF.includes(FF)
            }));
            SF && SF.scrollIntoView({
              block: "start",
              behavior: "smooth"
            })
          }), [oF]),
          hW = (0, CF.useCallback)((FF => {
            var WF, SF;
            const CF = null !== (WF = null === (SF = ZF.current) || void 0 === SF ? void 0 : SF.clientWidth) && void 0 !== WF ? WF : window.innerWidth,
              AF = Math.max(120, CF - 200);
            return Math.min(Math.max(FF, 120), AF)
          }), []),
          bS = (0, CF.useCallback)((() => {
            var FF;
            HF.current && (HF.current = !1, null === (FF = ZF.current) || void 0 === FF || FF.classList.remove("DocsSidebarResizing"))
          }), []),
          dW = (0, CF.useCallback)((FF => {
            var WF;
            FF.preventDefault(), HF.current = !0, null === (WF = ZF.current) || void 0 === WF || WF.classList.add("DocsSidebarResizing")
          }), []);
        (0, CF.useEffect)((() => {
          const FF = ZF.current,
            WF = FF => {
              if (!HF.current || !ZF.current) return;
              const WF = ZF.current.getBoundingClientRect().left;
              nF(hW(FF.clientX - WF))
            };
          return window.addEventListener("mousemove", WF), window.addEventListener("mouseup", bS), () => {
            window.removeEventListener("mousemove", WF), window.removeEventListener("mouseup", bS), null === FF || void 0 === FF || FF.classList.remove("DocsSidebarResizing")
          }
        }), [hW, bS]);
        const PW = (0, CF.useCallback)((FF => {
          if (FF) {
            const [WF, SF] = FF.slice(1).split("-");
            SF && (KF.current = {
              docId: WF,
              subsection: SF
            }), WF && AW(WF)
          }
        }), [AW]);
        (0, CF.useEffect)((() => {
          const FF = KF.current;
          FF && OF === FF.docId && (setTimeout((() => {
            uW(FF.subsection)
          }), 0), KF.current = null)
        })), (0, CF.useEffect)((() => {
          if (!oF.current) return;
          oF.current.querySelectorAll("a.DocsAnchor").forEach((FF => {
            FF.addEventListener("click", (WF => {
              WF.preventDefault(), PW(FF.dataset.id)
            }))
          }))
        }), [OF, PW]);
        const RW = Object.values(qW).find((FF => (null === FF || void 0 === FF ? void 0 : FF.pageStep) === wF));
        return (0, EF.jsx)(aW.e, {
          tutorial: "docsOverview",
          step: null !== (VF = null === RW || void 0 === RW ? void 0 : RW.pageStep) && void 0 !== VF ? VF : "docsPanel",
          text: pF(null !== (NF = null === RW || void 0 === RW ? void 0 : RW.pageText) && void 0 !== NF ? NF : "codeEditor:tutorialDocsPanel"),
          enabled: mW,
          placement: "left",
          onPrevious: RW ? void 0 : LF,
          children: (0, EF.jsxs)("div", {
            className: "DocsPanel",
            ref: ZF,
            children: [(0, EF.jsxs)("div", {
              className: "DocsSidebar",
              style: {
                width: sF,
                minWidth: sF,
                maxWidth: sF
              },
              children: [(0, EF.jsx)(uF.d, {
                className: "DocsSearch",
                placeholderText: "\ud83d\udd0e Search docs...",
                onValueChange: FF => {
                  MF(FF), GF(0), IF(0)
                }
              }, XF), (0, EF.jsx)("div", {
                className: "DocsNavList",
                children: jW ? vW.map((FF => (0, EF.jsxs)("div", {
                  className: bW()("DocsNavItem", "SearchResult", {
                    Active: FF.doc.id === (null === JF || void 0 === JF ? void 0 : JF.id)
                  }),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    AW(FF.doc.id)
                  },
                  children: [(0, EF.jsxs)("div", {
                    className: "SearchResultTitle",
                    children: [FF.doc.title, (0, EF.jsx)("span", {
                      className: "SearchResultCount",
                      children: FF.matchCount
                    })]
                  }), (0, EF.jsx)("div", {
                    className: "SearchResultSnippet",
                    children: gW(FF.snippet, YF)
                  })]
                }, FF.doc.id))) : AF.b.map((FF => {
                  const WF = (0, EF.jsxs)("div", {
                      className: bW()("DocsNavItem", {
                        Active: FF.id === (null === JF || void 0 === JF ? void 0 : JF.id)
                      }),
                      "data-pad-focusable": !0,
                      onClick: () => {
                        AW(FF.id)
                      },
                      children: [(0, EF.jsx)("span", {
                        className: "DocsNavItemTitle",
                        children: FF.title
                      }), FF.subsections && FF.id === (null === JF || void 0 === JF ? void 0 : JF.id) && fF && (0, EF.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, EF.jsx)(tW.e, {
                          name: "angle-down"
                        })
                      }), FF.subsections && (FF.id !== (null === JF || void 0 === JF ? void 0 : JF.id) || !fF) && (0, EF.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, EF.jsx)(tW.e, {
                          name: "angle-up"
                        })
                      })]
                    }),
                    SF = qW[FF.id];
                  return (0, EF.jsxs)(CF.Fragment, {
                    children: [SF && (0, EF.jsx)(aW.e, {
                      tutorial: "docsOverview",
                      step: SF.tabStep,
                      text: pF(SF.tabText),
                      enabled: mW,
                      placement: "left",
                      waitForClick: !0,
                      children: WF
                    }), !SF && WF, fF && FF.subsections && FF.id === (null === JF || void 0 === JF ? void 0 : JF.id) && FF.subsections.map((FF => (0, EF.jsx)("div", {
                      className: "DocsNavItem DocsSubsection",
                      "data-pad-focusable": !0,
                      onClick: () => {
                        uW(FF)
                      },
                      children: FF
                    }, FF)))]
                  }, FF.id)
                }))
              }), (0, EF.jsx)("div", {
                className: "DocsSidebarButtonContainer",
                children: (0, EF.jsx)(TF.g, {
                  tooltipInner: pF("codeEditor:popOutDocsTooltip"),
                  placement: "top",
                  children: (0, EF.jsx)(dF.e, {
                    className: "DocsSidebarButton",
                    onClick: DF,
                    children: pF("codeEditor:popOutDocs")
                  })
                })
              })]
            }), (0, EF.jsx)("div", {
              className: "DocsSidebarResizeHandle",
              onMouseDown: dW
            }), (0, EF.jsxs)("div", {
              className: "DocsContentWrapper",
              children: [jW && WW > 0 && (0, EF.jsxs)("div", {
                className: "DocsMatchNav",
                children: [(0, EF.jsxs)("span", {
                  className: "DocsMatchNavLabel",
                  children: [cW + 1, " / ", WW]
                }), (0, EF.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    CW(-1)
                  },
                  children: "\u25b2"
                }), (0, EF.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    CW(1)
                  },
                  children: "\u25bc"
                })]
              }), (0, EF.jsx)("div", {
                className: "DocsContent",
                ref: oF,
                dangerouslySetInnerHTML: {
                  __html: FW
                }
              })]
            })]
          })
        })
      }))
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);