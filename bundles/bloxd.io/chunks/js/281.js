export const id = 281;
export const ids = [281];
export const modules = {
  40205: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      default: () => EJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(4139),
      eJ = ZJ(1566),
      XJ = ZJ(926),
      AJ = ZJ.n(XJ),
      qJ = ZJ(1329),
      jJ = ZJ(1086),
      YJ = ZJ(4111),
      hJ = ZJ(4122),
      DJ = ZJ(4128),
      sJ = ZJ(990);

    function nJ(JJ) {
      return JJ.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    YJ.e.registerLanguage("javascript", hJ.e), YJ.e.registerLanguage("typescript", DJ.d);

    function GJ(JJ, cJ) {
      const ZJ = nJ(JJ).replace(/"/g, "&quot;");
      return `<button type="button" class="DocsCopyButton ${cJ}" title="${ZJ}" aria-label="${ZJ}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5" rx="1.5"/><path d="M10.5 3.5V3A1.5 1.5 0 0 0 9 1.5H3A1.5 1.5 0 0 0 1.5 3v6A1.5 1.5 0 0 0 3 10.5h.5"/></svg><svg class="DocsCopiedIcon" viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 8.5l3.5 3.5 7.5-7.5"/></svg></button>`
    }

    function fJ(JJ, cJ) {
      const ZJ = [],
        FJ = JJ.toLowerCase(),
        UJ = cJ.toLowerCase();
      let eJ = 0;
      for (; eJ < JJ.length;) {
        const XJ = FJ.indexOf(UJ, eJ);
        if (-1 === XJ) {
          ZJ.push(JJ.slice(eJ));
          break
        }
        XJ > eJ && ZJ.push(JJ.slice(eJ, XJ)), ZJ.push((0, sJ.jsx)("mark", {
          className: "DocsHighlight",
          children: JJ.slice(XJ, XJ + cJ.length)
        }, XJ)), eJ = XJ + cJ.length
      }
      return ZJ
    }
    var xJ = ZJ(942),
      rJ = ZJ(1259),
      vJ = ZJ(35897),
      mJ = ZJ(35901);
    const QJ = {
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
      EJ = (0, FJ.memo)((function(JJ) {
        var cJ, ZJ, XJ, hJ, DJ, EJ, VJ;
        let {
          popOutDocs: KJ,
          hideDocs: yJ,
          tutorialEnabled: SJ
        } = JJ;
        const [IJ, MJ] = (0, FJ.useState)(UJ.c[0].id), bJ = (0, FJ.useRef)(null), wJ = (0, FJ.useRef)(null), [WJ, gJ] = (0, FJ.useState)(""), [HJ, PJ] = (0, FJ.useState)(0), [kJ, pJ] = (0, FJ.useState)(null), [dJ, zJ] = (0, FJ.useState)(!1), [NJ, OJ] = (0, FJ.useState)(160), TJ = (0, FJ.useRef)(!1), CJ = (0, FJ.useRef)(null), uJ = (0, vJ.i)("docsOverview"), [iJ, RJ] = (0, FJ.useState)(0), LJ = Object.values(QJ).some((JJ => (null === JJ || void 0 === JJ ? void 0 : JJ.tabStep) === uJ));
        (0, FJ.useEffect)((() => {
          LJ && WJ.length > 0 && (gJ(""), RJ((JJ => JJ + 1)))
        }), [LJ, WJ]);
        const aJ = WJ.length > 0,
          BJ = (0, FJ.useMemo)((() => function(JJ) {
            if (!JJ) return [];
            const cJ = JJ.toLowerCase(),
              ZJ = [];
            for (const FJ of UJ.c) {
              const JJ = FJ.content.toLowerCase();
              let UJ = 0,
                eJ = -1,
                XJ = 0,
                AJ = JJ.indexOf(cJ, XJ);
              for (; - 1 !== AJ;) - 1 === eJ && (eJ = AJ), UJ++, XJ = AJ + cJ.length, AJ = JJ.indexOf(cJ, XJ);
              if (0 === UJ) continue;
              const qJ = Math.max(0, eJ - 40),
                jJ = Math.min(FJ.content.length, eJ + cJ.length + 40),
                YJ = (qJ > 0 ? "..." : "") + FJ.content.slice(qJ, jJ).replace(/\n/g, " ") + (jJ < FJ.content.length ? "..." : "");
              ZJ.push({
                doc: FJ,
                matchCount: UJ,
                snippet: YJ
              })
            }
            return ZJ.sort(((JJ, cJ) => cJ.matchCount - JJ.matchCount)), ZJ
          }(WJ)), [WJ]),
          tJ = aJ ? null !== (cJ = null !== (ZJ = null === (XJ = BJ.find((JJ => JJ.doc.id === IJ))) || void 0 === XJ ? void 0 : XJ.doc) && void 0 !== ZJ ? ZJ : null === (hJ = BJ[0]) || void 0 === hJ ? void 0 : hJ.doc) && void 0 !== cJ ? cJ : null : null !== (DJ = UJ.c.find((JJ => JJ.id === IJ))) && void 0 !== DJ ? DJ : UJ.c[0],
          {
            t: oJ
          } = (0, jJ.F)(),
          lJ = oJ("codeEditor:copySnippet"),
          Jc = (0, FJ.useMemo)((() => tJ ? function(JJ, cJ, ZJ, FJ) {
            let UJ = cJ;
            UJ = UJ.replace(/\r\n/g, "\n");
            const eJ = [];
            UJ = UJ.replace(/```(\w*)\n([\s\S]*?)```/g, ((JJ, cJ, FJ) => {
              const UJ = eJ.length;
              let XJ = nJ(FJ);
              try {
                XJ = YJ.e.highlight(FJ.trimEnd(), {
                  language: cJ
                }).value
              } catch (AJ) {
                console.warn("Could not highlight documentation code block", AJ)
              }
              return eJ.push(`<div class="DocsCodeBlockRow"><pre class="DocsCodeBlock" data-lang="${cJ}"><code>${XJ}</code></pre>${GJ(ZJ,"DocsCopyBlock")}</div>`), `\0PLACEHOLDER_${UJ}\0`
            })), UJ = UJ.replace(/(`{1,2})([^\n]+?)\1(?!`)/g, ((cJ, FJ, UJ) => {
              const XJ = eJ.length,
                AJ = 2 === FJ.length ? UJ.replace(/^ (.*) $/, "$1") : UJ;
              let qJ = nJ(AJ);
              try {
                "apiReference" !== JJ && "callbacks" !== JJ || (qJ = YJ.e.highlight(AJ.trimEnd().replaceAll("\\|", "|"), {
                  language: "typescript"
                }).value)
              } catch (jJ) {
                console.warn("Could not highlight documentation snippet", jJ)
              }
              return eJ.push(`<span class="DocsInlineCodeRow"><code class="DocsInlineCode">${qJ}</code>${GJ(ZJ,"DocsCopyInline")}</span>`), `\0PLACEHOLDER_${XJ}\0`
            })), UJ = nJ(UJ), UJ = UJ.replace(/^#### (.+)$/gm, '<h4 class="DocsH4">$1</h4>'), UJ = UJ.replace(/^### (.+)$/gm, '<h3 class="DocsH3">$1</h3>'), UJ = UJ.replace(/^## (.+)$/gm, '<h2 class="DocsH2">$1</h2>'), UJ = UJ.replace(/^# (.+)$/gm, '<h1 class="DocsH1">$1</h1>'), UJ = UJ.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"), UJ = UJ.replace(/\[([^\]]+)\]\(([^)]+)\)/g, ((JJ, cJ, ZJ) => ZJ.startsWith("#") ? `<a class="DocsAnchor" data-id="${ZJ}">${cJ}</a>` : `<a href="${ZJ}" target="_blank" rel="noopener noreferrer">${cJ}</a>`)), UJ = UJ.replace(/^(\|.+\|)\n(\|[\s:\-|]+\|)\n((?:\|.+\|\s*\r?\n?)*)/gm, ((JJ, cJ, ZJ, FJ) => `<table class="DocsTable"><thead><tr>${cJ.split("|").slice(1,-1).map((JJ=>`<th>${JJ.trim()}</th>`)).join("")}</tr></thead><tbody>${FJ.trim().split("\n").map((JJ=>`<tr>${JJ.split("|").slice(1,-1).map((JJ=>`<td>${JJ.trim()}</td>`)).join("")}</tr>`)).join("")}</tbody></table>`)), UJ = UJ.replace(/(?:^[ \t]*([*-])[ \t]+.+(?:\n|$))+/gm, ((JJ, cJ) => function(JJ, cJ) {
              const ZJ = "*" === cJ,
                FJ = [];
              for (const AJ of JJ.split("\n")) {
                const JJ = AJ.match(/^([ \t]*)(?:[*-])[ \t]+(.+)$/);
                JJ && FJ.push({
                  indent: JJ[1].replace(/\t/g, "  ").length,
                  content: JJ[2]
                })
              }
              let UJ = "";
              const eJ = [],
                XJ = ZJ ? "ol" : "ul";
              for (const {
                  indent: AJ,
                  content: qJ
                }
                of FJ) {
                for (; eJ.length > 0 && AJ < eJ[eJ.length - 1];) UJ += `</${XJ}></li>`, eJ.pop();
                (0 === eJ.length || AJ > eJ[eJ.length - 1]) && (eJ.length > 0 && (UJ = UJ.replace(/<\/li>$/, "")), UJ += `<${XJ} class="DocsList">`, eJ.push(AJ)), UJ += `<li class="DocsListItem">${qJ}</li>`
              }
              for (; eJ.length > 0;) UJ += `</${XJ}>`, eJ.pop(), eJ.length > 0 && (UJ += "</li>");
              return UJ
            }(JJ, cJ))), UJ = UJ.replace(/\n{2,}/g, "\n<br/>\n");
            for (let XJ = 0; XJ < eJ.length; XJ++) UJ = UJ.replace(`\0PLACEHOLDER_${XJ}\0`, eJ[XJ]);
            if (FJ) {
              const JJ = nJ(FJ).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                cJ = new RegExp(JJ, "gi");
              UJ = UJ.replace(/([^<>]+)(?=<|$)/g, (JJ => JJ.replace(cJ, (JJ => `<mark class="DocsHighlight">${JJ}</mark>`))))
            }
            return UJ
          }(tJ.id, tJ.content, lJ, aJ ? WJ : void 0) : ""), [tJ, lJ, aJ, WJ]);
        (0, FJ.useEffect)((() => {
          const JJ = wJ.current;
          if (!JJ) return;
          const cJ = JJ => {
            var cJ, ZJ, FJ, UJ, eJ;
            const XJ = null === (cJ = (ZJ = JJ.target).closest) || void 0 === cJ ? void 0 : cJ.call(ZJ, ".DocsCopyButton");
            if (!XJ) return;
            JJ.preventDefault(), JJ.stopPropagation();
            const AJ = null !== (FJ = null === (UJ = XJ.parentElement) || void 0 === UJ || null === (eJ = UJ.querySelector("code")) || void 0 === eJ ? void 0 : eJ.textContent) && void 0 !== FJ ? FJ : "";
            navigator.clipboard.writeText(AJ.trimEnd()).then((() => {
              XJ.classList.add("Copied"), setTimeout((() => {
                XJ.classList.remove("Copied")
              }), 1500)
            })).catch((JJ => {
              console.warn("Could not copy documentation code", JJ)
            }))
          };
          return JJ.addEventListener("click", cJ, !0), () => {
            JJ.removeEventListener("click", cJ, !0)
          }
        }), []);
        const [cc, Zc] = (0, FJ.useState)(0);
        (0, FJ.useEffect)((() => {
          if (!aJ || !wJ.current) return void Zc(0);
          const JJ = wJ.current.querySelectorAll(".DocsHighlight").length;
          Zc(JJ)
        }), [aJ, Jc]), (0, FJ.useEffect)((() => {
          if (null === kJ || !wJ.current) return;
          pJ(null);
          const JJ = wJ.current.querySelectorAll(".DocsHighlight");
          if (0 === JJ.length) return;
          const cJ = Math.min(kJ, JJ.length - 1);
          PJ(cJ), JJ.forEach((JJ => {
            JJ.classList.remove("DocsHighlightActive")
          })), JJ[cJ].classList.add("DocsHighlightActive"), JJ[cJ].scrollIntoView({
            block: "center",
            behavior: "smooth"
          })
        }), [kJ, Jc]);
        const Fc = (0, FJ.useCallback)((JJ => {
            if (!wJ.current) return;
            const cJ = wJ.current.querySelectorAll(".DocsHighlight");
            if (0 === cJ.length) return;
            const ZJ = (HJ + JJ + cJ.length) % cJ.length;
            PJ(ZJ), pJ(ZJ)
          }), [HJ]),
          Uc = (0, FJ.useCallback)((JJ => {
            var cJ;
            const ZJ = null === (cJ = QJ[JJ]) || void 0 === cJ ? void 0 : cJ.tabStep;
            ZJ && ZJ === uJ && (0, mJ.f)(ZJ), JJ !== IJ ? (zJ(!0), MJ(JJ), PJ(0), wJ.current && (wJ.current.scrollTop = 0), aJ && pJ(0)) : zJ(!dJ)
          }), [aJ, IJ, dJ, uJ]),
          ec = (0, FJ.useCallback)((JJ => {
            var cJ;
            const ZJ = Array.from((null === (cJ = wJ.current) || void 0 === cJ ? void 0 : cJ.querySelectorAll(".DocsH2, .DocsH3")) || []).find((cJ => {
              var ZJ;
              return null === (ZJ = cJ.textContent) || void 0 === ZJ ? void 0 : ZJ.includes(JJ)
            }));
            ZJ && ZJ.scrollIntoView({
              block: "start",
              behavior: "smooth"
            })
          }), [wJ]),
          Xc = (0, FJ.useCallback)((JJ => {
            var cJ, ZJ;
            const FJ = null !== (cJ = null === (ZJ = bJ.current) || void 0 === ZJ ? void 0 : ZJ.clientWidth) && void 0 !== cJ ? cJ : window.innerWidth,
              UJ = Math.max(120, FJ - 200);
            return Math.min(Math.max(JJ, 120), UJ)
          }), []),
          Ac = (0, FJ.useCallback)((() => {
            var JJ;
            TJ.current && (TJ.current = !1, null === (JJ = bJ.current) || void 0 === JJ || JJ.classList.remove("DocsSidebarResizing"))
          }), []),
          qc = (0, FJ.useCallback)((JJ => {
            var cJ;
            JJ.preventDefault(), TJ.current = !0, null === (cJ = bJ.current) || void 0 === cJ || cJ.classList.add("DocsSidebarResizing")
          }), []);
        (0, FJ.useEffect)((() => {
          const JJ = bJ.current,
            cJ = JJ => {
              if (!TJ.current || !bJ.current) return;
              const cJ = bJ.current.getBoundingClientRect().left;
              OJ(Xc(JJ.clientX - cJ))
            };
          return window.addEventListener("mousemove", cJ), window.addEventListener("mouseup", Ac), () => {
            window.removeEventListener("mousemove", cJ), window.removeEventListener("mouseup", Ac), null === JJ || void 0 === JJ || JJ.classList.remove("DocsSidebarResizing")
          }
        }), [Xc, Ac]);
        const jc = (0, FJ.useCallback)((JJ => {
          if (JJ) {
            const [cJ, ZJ] = JJ.slice(1).split("-");
            ZJ && (CJ.current = {
              docId: cJ,
              subsection: ZJ
            }), cJ && Uc(cJ)
          }
        }), [Uc]);
        (0, FJ.useEffect)((() => {
          const JJ = CJ.current;
          JJ && IJ === JJ.docId && (setTimeout((() => {
            ec(JJ.subsection)
          }), 0), CJ.current = null)
        })), (0, FJ.useEffect)((() => {
          if (!wJ.current) return;
          wJ.current.querySelectorAll("a.DocsAnchor").forEach((JJ => {
            JJ.addEventListener("click", (cJ => {
              cJ.preventDefault(), jc(JJ.dataset.id)
            }))
          }))
        }), [IJ, jc]);
        const Yc = Object.values(QJ).find((JJ => (null === JJ || void 0 === JJ ? void 0 : JJ.pageStep) === uJ));
        return (0, sJ.jsx)(vJ.e, {
          tutorial: "docsOverview",
          step: null !== (EJ = null === Yc || void 0 === Yc ? void 0 : Yc.pageStep) && void 0 !== EJ ? EJ : "docsPanel",
          text: oJ(null !== (VJ = null === Yc || void 0 === Yc ? void 0 : Yc.pageText) && void 0 !== VJ ? VJ : "codeEditor:tutorialDocsPanel"),
          enabled: SJ,
          placement: "left",
          onPrevious: Yc ? void 0 : yJ,
          children: (0, sJ.jsxs)("div", {
            className: "DocsPanel",
            ref: bJ,
            children: [(0, sJ.jsxs)("div", {
              className: "DocsSidebar",
              style: {
                width: NJ,
                minWidth: NJ,
                maxWidth: NJ
              },
              children: [(0, sJ.jsx)(eJ.e, {
                className: "DocsSearch",
                placeholderText: "\ud83d\udd0e Search docs...",
                onValueChange: JJ => {
                  gJ(JJ), PJ(0), pJ(0)
                }
              }, iJ), (0, sJ.jsx)("div", {
                className: "DocsNavList",
                children: aJ ? BJ.map((JJ => (0, sJ.jsxs)("div", {
                  className: AJ()("DocsNavItem", "SearchResult", {
                    Active: JJ.doc.id === (null === tJ || void 0 === tJ ? void 0 : tJ.id)
                  }),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    Uc(JJ.doc.id)
                  },
                  children: [(0, sJ.jsxs)("div", {
                    className: "SearchResultTitle",
                    children: [JJ.doc.title, (0, sJ.jsx)("span", {
                      className: "SearchResultCount",
                      children: JJ.matchCount
                    })]
                  }), (0, sJ.jsx)("div", {
                    className: "SearchResultSnippet",
                    children: fJ(JJ.snippet, WJ)
                  })]
                }, JJ.doc.id))) : UJ.c.map((JJ => {
                  const cJ = (0, sJ.jsxs)("div", {
                      className: AJ()("DocsNavItem", {
                        Active: JJ.id === (null === tJ || void 0 === tJ ? void 0 : tJ.id)
                      }),
                      "data-pad-focusable": !0,
                      onClick: () => {
                        Uc(JJ.id)
                      },
                      children: [(0, sJ.jsx)("span", {
                        className: "DocsNavItemTitle",
                        children: JJ.title
                      }), JJ.subsections && JJ.id === (null === tJ || void 0 === tJ ? void 0 : tJ.id) && dJ && (0, sJ.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, sJ.jsx)(xJ.c, {
                          name: "angle-down"
                        })
                      }), JJ.subsections && (JJ.id !== (null === tJ || void 0 === tJ ? void 0 : tJ.id) || !dJ) && (0, sJ.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, sJ.jsx)(xJ.c, {
                          name: "angle-up"
                        })
                      })]
                    }),
                    ZJ = QJ[JJ.id];
                  return (0, sJ.jsxs)(FJ.Fragment, {
                    children: [ZJ && (0, sJ.jsx)(vJ.e, {
                      tutorial: "docsOverview",
                      step: ZJ.tabStep,
                      text: oJ(ZJ.tabText),
                      enabled: SJ,
                      placement: "left",
                      waitForClick: !0,
                      children: cJ
                    }), !ZJ && cJ, dJ && JJ.subsections && JJ.id === (null === tJ || void 0 === tJ ? void 0 : tJ.id) && JJ.subsections.map((JJ => (0, sJ.jsx)("div", {
                      className: "DocsNavItem DocsSubsection",
                      "data-pad-focusable": !0,
                      onClick: () => {
                        ec(JJ)
                      },
                      children: JJ
                    }, JJ)))]
                  }, JJ.id)
                }))
              }), (0, sJ.jsx)("div", {
                className: "DocsSidebarButtonContainer",
                children: (0, sJ.jsx)(rJ.g, {
                  tooltipInner: oJ("codeEditor:popOutDocsTooltip"),
                  placement: "top",
                  children: (0, sJ.jsx)(qJ.d, {
                    className: "DocsSidebarButton",
                    onClick: KJ,
                    children: oJ("codeEditor:popOutDocs")
                  })
                })
              })]
            }), (0, sJ.jsx)("div", {
              className: "DocsSidebarResizeHandle",
              onMouseDown: qc
            }), (0, sJ.jsxs)("div", {
              className: "DocsContentWrapper",
              children: [aJ && cc > 0 && (0, sJ.jsxs)("div", {
                className: "DocsMatchNav",
                children: [(0, sJ.jsxs)("span", {
                  className: "DocsMatchNavLabel",
                  children: [HJ + 1, " / ", cc]
                }), (0, sJ.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    Fc(-1)
                  },
                  children: "\u25b2"
                }), (0, sJ.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    Fc(1)
                  },
                  children: "\u25bc"
                })]
              }), (0, sJ.jsx)("div", {
                className: "DocsContent",
                ref: wJ,
                dangerouslySetInnerHTML: {
                  __html: Jc
                }
              })]
            })]
          })
        })
      }))
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);