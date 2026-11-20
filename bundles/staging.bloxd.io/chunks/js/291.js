export const id = 291;
export const ids = [291];
export const modules = {
  40866: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      default: () => IU
    });
    var tU = gU(56),
      pU = gU(4405),
      EU = gU(1602),
      PU = gU(1037),
      TU = gU.n(PU),
      qU = gU(1412),
      KU = gU(1181),
      cU = gU(4365),
      GU = gU(4378),
      jU = gU(4387),
      uU = gU(1090);

    function CU(UU) {
      return UU.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    cU.d.registerLanguage("javascript", GU.b), cU.d.registerLanguage("typescript", jU.c);

    function hU(UU, RU) {
      const gU = CU(UU).replace(/"/g, "&quot;");
      return `<button type="button" class="DocsCopyButton ${RU}" title="${gU}" aria-label="${gU}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5"/><path d="M10.5 3.5V1.5H1.5v9h2"/></svg><svg class="DocsCopiedIcon" viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 8.5l3.5 3.5 7.5-7.5"/></svg></button>`
    }

    function QU(UU, RU) {
      const gU = [],
        tU = UU.toLowerCase(),
        pU = RU.toLowerCase();
      let EU = 0;
      for (; EU < UU.length;) {
        const PU = tU.indexOf(pU, EU);
        if (-1 === PU) {
          gU.push(UU.slice(EU));
          break
        }
        PU > EU && gU.push(UU.slice(EU, PU)), gU.push((0, uU.jsx)("mark", {
          className: "DocsHighlight",
          children: UU.slice(PU, PU + RU.length)
        }, PU)), EU = PU + RU.length
      }
      return gU
    }
    var eU = gU(1049),
      WU = gU(1344),
      fU = gU(36425),
      xU = gU(36427);
    const mU = {
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
      IU = (0, tU.memo)((function(UU) {
        var RU, gU, PU, GU, jU, IU, JU;
        let {
          popOutDocs: wU,
          hideDocs: nU,
          tutorialEnabled: bU
        } = UU;
        const [oU, ZU] = (0, tU.useState)(pU.e[0].id), aU = (0, tU.useRef)(null), YU = (0, tU.useRef)(null), [BU, VU] = (0, tU.useState)(""), [rU, XU] = (0, tU.useState)(0), [vU, dU] = (0, tU.useState)(null), [HU, SU] = (0, tU.useState)(!1), [sU, yU] = (0, tU.useState)(160), kU = (0, tU.useRef)(!1), FU = (0, tU.useRef)(null), iU = (0, fU.j)("docsOverview"), [AU, zU] = (0, tU.useState)(0), MU = Object.values(mU).some((UU => (null === UU || void 0 === UU ? void 0 : UU.tabStep) === iU));
        (0, tU.useEffect)((() => {
          MU && BU.length > 0 && (VU(""), zU((UU => UU + 1)))
        }), [MU, BU]);
        const DU = BU.length > 0,
          LU = (0, tU.useMemo)((() => function(UU) {
            if (!UU) return [];
            const RU = UU.toLowerCase(),
              gU = [];
            for (const tU of pU.e) {
              const UU = tU.content.toLowerCase();
              let pU = 0,
                EU = -1,
                PU = 0,
                TU = UU.indexOf(RU, PU);
              for (; - 1 !== TU;) - 1 === EU && (EU = TU), pU++, PU = TU + RU.length, TU = UU.indexOf(RU, PU);
              if (0 === pU) continue;
              const qU = Math.max(0, EU - 40),
                KU = Math.min(tU.content.length, EU + RU.length + 40),
                cU = (qU > 0 ? "..." : "") + tU.content.slice(qU, KU).replace(/\n/g, " ") + (KU < tU.content.length ? "..." : "");
              gU.push({
                doc: tU,
                matchCount: pU,
                snippet: cU
              })
            }
            return gU.sort(((UU, RU) => RU.matchCount - UU.matchCount)), gU
          }(BU)), [BU]),
          NU = DU ? null !== (RU = null !== (gU = null === (PU = LU.find((UU => UU.doc.id === oU))) || void 0 === PU ? void 0 : PU.doc) && void 0 !== gU ? gU : null === (GU = LU[0]) || void 0 === GU ? void 0 : GU.doc) && void 0 !== RU ? RU : null : null !== (jU = pU.e.find((UU => UU.id === oU))) && void 0 !== jU ? jU : pU.e[0],
          {
            t: lU
          } = (0, KU.B)(),
          OU = lU("codeEditor:copySnippet"),
          UR = (0, tU.useMemo)((() => NU ? function(UU, RU, gU, tU) {
            let pU = RU;
            pU = pU.replace(/\r\n/g, "\n");
            const EU = [];
            pU = pU.replace(/```(\w*)\n([\s\S]*?)```/g, ((UU, RU, tU) => {
              const pU = EU.length;
              let PU = CU(tU);
              try {
                PU = cU.d.highlight(tU.trimEnd(), {
                  language: RU
                }).value
              } catch (TU) {
                console.warn("Could not highlight documentation code block", TU)
              }
              return EU.push(`<div class="DocsCodeBlockRow"><pre class="DocsCodeBlock" data-lang="${RU}"><code>${PU}</code></pre>${hU(gU,"DocsCopyBlock")}</div>`), `\0PLACEHOLDER_${pU}\0`
            })), pU = pU.replace(/(`{1,2})([^\n]+?)\1(?!`)/g, ((RU, tU, pU) => {
              const PU = EU.length,
                TU = 2 === tU.length ? pU.replace(/^ (.*) $/, "$1") : pU;
              let qU = CU(TU);
              try {
                "apiReference" !== UU && "callbacks" !== UU || (qU = cU.d.highlight(TU.trimEnd().replaceAll("\\|", "|"), {
                  language: "typescript"
                }).value)
              } catch (KU) {
                console.warn("Could not highlight documentation snippet", KU)
              }
              return EU.push(`<span class="DocsInlineCodeRow"><code class="DocsInlineCode">${qU}</code>${hU(gU,"DocsCopyInline")}</span>`), `\0PLACEHOLDER_${PU}\0`
            })), pU = CU(pU), pU = pU.replace(/^#### (.+)$/gm, '<h4 class="DocsH4">$1</h4>'), pU = pU.replace(/^### (.+)$/gm, '<h3 class="DocsH3">$1</h3>'), pU = pU.replace(/^## (.+)$/gm, '<h2 class="DocsH2">$1</h2>'), pU = pU.replace(/^# (.+)$/gm, '<h1 class="DocsH1">$1</h1>'), pU = pU.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"), pU = pU.replace(/\[([^\]]+)\]\(([^)]+)\)/g, ((UU, RU, gU) => gU.startsWith("#") ? `<a class="DocsAnchor" data-id="${gU}">${RU}</a>` : `<a href="${gU}" target="_blank" rel="noopener noreferrer">${RU}</a>`)), pU = pU.replace(/^(\|.+\|)\n(\|[\s:\-|]+\|)\n((?:\|.+\|\s*\r?\n?)*)/gm, ((UU, RU, gU, tU) => `<table class="DocsTable"><thead><tr>${RU.split("|").slice(1,-1).map((UU=>`<th>${UU.trim()}</th>`)).join("")}</tr></thead><tbody>${tU.trim().split("\n").map((UU=>`<tr>${UU.split("|").slice(1,-1).map((UU=>`<td>${UU.trim()}</td>`)).join("")}</tr>`)).join("")}</tbody></table>`)), pU = pU.replace(/(?:^[ \t]*([*-])[ \t]+.+(?:\n|$))+/gm, ((UU, RU) => function(UU, RU) {
              const gU = "*" === RU,
                tU = [];
              for (const TU of UU.split("\n")) {
                const UU = TU.match(/^([ \t]*)(?:[*-])[ \t]+(.+)$/);
                UU && tU.push({
                  indent: UU[1].replace(/\t/g, "  ").length,
                  content: UU[2]
                })
              }
              let pU = "";
              const EU = [],
                PU = gU ? "ol" : "ul";
              for (const {
                  indent: TU,
                  content: qU
                }
                of tU) {
                for (; EU.length > 0 && TU < EU[EU.length - 1];) pU += `</${PU}></li>`, EU.pop();
                (0 === EU.length || TU > EU[EU.length - 1]) && (EU.length > 0 && (pU = pU.replace(/<\/li>$/, "")), pU += `<${PU} class="DocsList">`, EU.push(TU)), pU += `<li class="DocsListItem">${qU}</li>`
              }
              for (; EU.length > 0;) pU += `</${PU}>`, EU.pop(), EU.length > 0 && (pU += "</li>");
              return pU
            }(UU, RU))), pU = pU.replace(/\n{2,}/g, "\n<br/>\n");
            for (let PU = 0; PU < EU.length; PU++) pU = pU.replace(`\0PLACEHOLDER_${PU}\0`, EU[PU]);
            if (tU) {
              const UU = CU(tU).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                RU = new RegExp(UU, "gi");
              pU = pU.replace(/([^<>]+)(?=<|$)/g, (UU => UU.replace(RU, (UU => `<mark class="DocsHighlight">${UU}</mark>`))))
            }
            return pU
          }(NU.id, NU.content, OU, DU ? BU : void 0) : ""), [NU, OU, DU, BU]);
        (0, tU.useEffect)((() => {
          const UU = YU.current;
          if (!UU) return;
          const RU = UU => {
            var RU, gU, tU, pU, EU;
            const PU = null === (RU = (gU = UU.target).closest) || void 0 === RU ? void 0 : RU.call(gU, ".DocsCopyButton");
            if (!PU) return;
            UU.preventDefault(), UU.stopPropagation();
            const TU = null !== (tU = null === (pU = PU.parentElement) || void 0 === pU || null === (EU = pU.querySelector("code")) || void 0 === EU ? void 0 : EU.textContent) && void 0 !== tU ? tU : "";
            navigator.clipboard.writeText(TU.trimEnd()).then((() => {
              PU.classList.add("Copied"), setTimeout((() => {
                PU.classList.remove("Copied")
              }), 1500)
            })).catch((UU => {
              console.warn("Could not copy documentation code", UU)
            }))
          };
          return UU.addEventListener("click", RU, !0), () => {
            UU.removeEventListener("click", RU, !0)
          }
        }), []);
        const [RR, gR] = (0, tU.useState)(0);
        (0, tU.useEffect)((() => {
          if (!DU || !YU.current) return void gR(0);
          const UU = YU.current.querySelectorAll(".DocsHighlight").length;
          gR(UU)
        }), [DU, UR]), (0, tU.useEffect)((() => {
          if (null === vU || !YU.current) return;
          dU(null);
          const UU = YU.current.querySelectorAll(".DocsHighlight");
          if (0 === UU.length) return;
          const RU = Math.min(vU, UU.length - 1);
          XU(RU), UU.forEach((UU => {
            UU.classList.remove("DocsHighlightActive")
          })), UU[RU].classList.add("DocsHighlightActive"), UU[RU].scrollIntoView({
            block: "center",
            behavior: "smooth"
          })
        }), [vU, UR]);
        const tR = (0, tU.useCallback)((UU => {
            if (!YU.current) return;
            const RU = YU.current.querySelectorAll(".DocsHighlight");
            if (0 === RU.length) return;
            const gU = (rU + UU + RU.length) % RU.length;
            XU(gU), dU(gU)
          }), [rU]),
          pR = (0, tU.useCallback)((UU => {
            var RU;
            const gU = null === (RU = mU[UU]) || void 0 === RU ? void 0 : RU.tabStep;
            gU && gU === iU && (0, xU.g)(gU), UU !== oU ? (SU(!0), ZU(UU), XU(0), YU.current && (YU.current.scrollTop = 0), DU && dU(0)) : SU(!HU)
          }), [DU, oU, HU, iU]),
          ER = (0, tU.useCallback)((UU => {
            var RU;
            const gU = Array.from((null === (RU = YU.current) || void 0 === RU ? void 0 : RU.querySelectorAll(".DocsH2, .DocsH3")) || []).find((RU => {
              var gU;
              return null === (gU = RU.textContent) || void 0 === gU ? void 0 : gU.includes(UU)
            }));
            gU && gU.scrollIntoView({
              block: "start",
              behavior: "smooth"
            })
          }), [YU]),
          PR = (0, tU.useCallback)((UU => {
            var RU, gU;
            const tU = null !== (RU = null === (gU = aU.current) || void 0 === gU ? void 0 : gU.clientWidth) && void 0 !== RU ? RU : window.innerWidth,
              pU = Math.max(120, tU - 200);
            return Math.min(Math.max(UU, 120), pU)
          }), []),
          TR = (0, tU.useCallback)((() => {
            var UU;
            kU.current && (kU.current = !1, null === (UU = aU.current) || void 0 === UU || UU.classList.remove("DocsSidebarResizing"))
          }), []),
          qR = (0, tU.useCallback)((UU => {
            var RU;
            UU.preventDefault(), kU.current = !0, null === (RU = aU.current) || void 0 === RU || RU.classList.add("DocsSidebarResizing")
          }), []);
        (0, tU.useEffect)((() => {
          const UU = aU.current,
            RU = UU => {
              if (!kU.current || !aU.current) return;
              const RU = aU.current.getBoundingClientRect().left;
              yU(PR(UU.clientX - RU))
            };
          return window.addEventListener("mousemove", RU), window.addEventListener("mouseup", TR), () => {
            window.removeEventListener("mousemove", RU), window.removeEventListener("mouseup", TR), null === UU || void 0 === UU || UU.classList.remove("DocsSidebarResizing")
          }
        }), [PR, TR]);
        const KR = (0, tU.useCallback)((UU => {
          if (UU) {
            const [RU, gU] = UU.slice(1).split("-");
            gU && (FU.current = {
              docId: RU,
              subsection: gU
            }), RU && pR(RU)
          }
        }), [pR]);
        (0, tU.useEffect)((() => {
          const UU = FU.current;
          UU && oU === UU.docId && (setTimeout((() => {
            ER(UU.subsection)
          }), 0), FU.current = null)
        })), (0, tU.useEffect)((() => {
          if (!YU.current) return;
          YU.current.querySelectorAll("a.DocsAnchor").forEach((UU => {
            UU.addEventListener("click", (RU => {
              RU.preventDefault(), KR(UU.dataset.id)
            }))
          }))
        }), [oU, KR]);
        const cR = Object.values(mU).find((UU => (null === UU || void 0 === UU ? void 0 : UU.pageStep) === iU));
        return (0, uU.jsx)(fU.h, {
          tutorial: "docsOverview",
          step: null !== (IU = null === cR || void 0 === cR ? void 0 : cR.pageStep) && void 0 !== IU ? IU : "docsPanel",
          text: lU(null !== (JU = null === cR || void 0 === cR ? void 0 : cR.pageText) && void 0 !== JU ? JU : "codeEditor:tutorialDocsPanel"),
          enabled: bU,
          placement: "left",
          onPrevious: cR ? void 0 : nU,
          children: (0, uU.jsxs)("div", {
            className: "DocsPanel",
            ref: aU,
            children: [(0, uU.jsxs)("div", {
              className: "DocsSidebar",
              style: {
                width: sU,
                minWidth: sU,
                maxWidth: sU
              },
              children: [(0, uU.jsx)(EU.d, {
                className: "DocsSearch",
                placeholderText: "\ud83d\udd0e Search docs...",
                onValueChange: UU => {
                  VU(UU), XU(0), dU(0)
                }
              }, AU), (0, uU.jsx)("div", {
                className: "DocsNavList",
                children: DU ? LU.map((UU => (0, uU.jsxs)("div", {
                  className: TU()("DocsNavItem", "SearchResult", {
                    Active: UU.doc.id === (null === NU || void 0 === NU ? void 0 : NU.id)
                  }),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    pR(UU.doc.id)
                  },
                  children: [(0, uU.jsxs)("div", {
                    className: "SearchResultTitle",
                    children: [UU.doc.title, (0, uU.jsx)("span", {
                      className: "SearchResultCount",
                      children: UU.matchCount
                    })]
                  }), (0, uU.jsx)("div", {
                    className: "SearchResultSnippet",
                    children: QU(UU.snippet, BU)
                  })]
                }, UU.doc.id))) : pU.e.map((UU => {
                  const RU = (0, uU.jsxs)("div", {
                      className: TU()("DocsNavItem", {
                        Active: UU.id === (null === NU || void 0 === NU ? void 0 : NU.id)
                      }),
                      "data-pad-focusable": !0,
                      onClick: () => {
                        pR(UU.id)
                      },
                      children: [(0, uU.jsx)("span", {
                        className: "DocsNavItemTitle",
                        children: UU.title
                      }), UU.subsections && UU.id === (null === NU || void 0 === NU ? void 0 : NU.id) && HU && (0, uU.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, uU.jsx)(eU.c, {
                          name: "angle-down"
                        })
                      }), UU.subsections && (UU.id !== (null === NU || void 0 === NU ? void 0 : NU.id) || !HU) && (0, uU.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, uU.jsx)(eU.c, {
                          name: "angle-up"
                        })
                      })]
                    }),
                    gU = mU[UU.id];
                  return (0, uU.jsxs)(tU.Fragment, {
                    children: [gU && (0, uU.jsx)(fU.h, {
                      tutorial: "docsOverview",
                      step: gU.tabStep,
                      text: lU(gU.tabText),
                      enabled: bU,
                      placement: "left",
                      waitForClick: !0,
                      children: RU
                    }), !gU && RU, HU && UU.subsections && UU.id === (null === NU || void 0 === NU ? void 0 : NU.id) && UU.subsections.map((UU => (0, uU.jsx)("div", {
                      className: "DocsNavItem DocsSubsection",
                      "data-pad-focusable": !0,
                      onClick: () => {
                        ER(UU)
                      },
                      children: UU
                    }, UU)))]
                  }, UU.id)
                }))
              }), (0, uU.jsx)("div", {
                className: "DocsSidebarButtonContainer",
                children: (0, uU.jsx)(WU.g, {
                  tooltipInner: lU("codeEditor:popOutDocsTooltip"),
                  placement: "top",
                  children: (0, uU.jsx)(qU.e, {
                    className: "DocsSidebarButton",
                    onClick: wU,
                    children: lU("codeEditor:popOutDocs")
                  })
                })
              })]
            }), (0, uU.jsx)("div", {
              className: "DocsSidebarResizeHandle",
              onMouseDown: qR
            }), (0, uU.jsxs)("div", {
              className: "DocsContentWrapper",
              children: [DU && RR > 0 && (0, uU.jsxs)("div", {
                className: "DocsMatchNav",
                children: [(0, uU.jsxs)("span", {
                  className: "DocsMatchNavLabel",
                  children: [rU + 1, " / ", RR]
                }), (0, uU.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    tR(-1)
                  },
                  children: "\u25b2"
                }), (0, uU.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    tR(1)
                  },
                  children: "\u25bc"
                })]
              }), (0, uU.jsx)("div", {
                className: "DocsContent",
                ref: YU,
                dangerouslySetInnerHTML: {
                  __html: UR
                }
              })]
            })]
          })
        })
      }))
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);