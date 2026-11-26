export const id = 610;
export const ids = [610];
export const modules = {
  44363: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      default: () => TV
    });
    var JV = xV(62),
      YV = xV(5246),
      UV = xV(1772),
      yV = xV(1146),
      pV = xV.n(yV),
      QV = xV(1551),
      nV = xV(1220),
      wV = xV(5226),
      ZV = xV(5239),
      vV = xV(5241),
      rV = xV(1321);

    function kV(VV) {
      return VV.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    wV.c.registerLanguage("javascript", ZV.e), wV.c.registerLanguage("typescript", vV.b);

    function bV(VV, eV) {
      const xV = kV(VV).replace(/"/g, "&quot;");
      return `<button type="button" class="DocsCopyButton ${eV}" title="${xV}" aria-label="${xV}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5"/><path d="M10.5 3.5V1.5H1.5v9h2"/></svg><svg class="DocsCopiedIcon" viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 8.5l3.5 3.5 7.5-7.5"/></svg></button>`
    }

    function EV(VV, eV) {
      const xV = [],
        JV = VV.toLowerCase(),
        YV = eV.toLowerCase();
      let UV = 0;
      for (; UV < VV.length;) {
        const yV = JV.indexOf(YV, UV);
        if (-1 === yV) {
          xV.push(VV.slice(UV));
          break
        }
        yV > UV && xV.push(VV.slice(UV, yV)), xV.push((0, rV.jsx)("mark", {
          className: "DocsHighlight",
          children: VV.slice(yV, yV + eV.length)
        }, yV)), UV = yV + eV.length
      }
      return xV
    }
    var BV = xV(1414),
      jV = xV(1446),
      qV = xV(38067),
      tV = xV(38073);
    const FV = {
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
      TV = (0, JV.memo)((function(VV) {
        var eV, xV, yV, ZV, vV, TV, PV;
        let {
          popOutDocs: AV,
          hideDocs: NV,
          tutorialEnabled: XV
        } = VV;
        const [MV, zV] = (0, JV.useState)(YV.c[0].id), GV = (0, JV.useRef)(null), WV = (0, JV.useRef)(null), [RV, gV] = (0, JV.useState)(""), [DV, iV] = (0, JV.useState)(0), [CV, aV] = (0, JV.useState)(null), [oV, cV] = (0, JV.useState)(!1), [hV, lV] = (0, JV.useState)(160), LV = (0, JV.useRef)(!1), fV = (0, JV.useRef)(null), mV = (0, qV.p)("docsOverview"), [KV, HV] = (0, JV.useState)(0), uV = Object.values(FV).some((VV => (null === VV || void 0 === VV ? void 0 : VV.tabStep) === mV));
        (0, JV.useEffect)((() => {
          uV && RV.length > 0 && (gV(""), HV((VV => VV + 1)))
        }), [uV, RV]);
        const sV = RV.length > 0,
          SV = (0, JV.useMemo)((() => function(VV) {
            if (!VV) return [];
            const eV = VV.toLowerCase(),
              xV = [];
            for (const JV of YV.c) {
              const VV = JV.content.toLowerCase();
              let YV = 0,
                UV = -1,
                yV = 0,
                pV = VV.indexOf(eV, yV);
              for (; - 1 !== pV;) - 1 === UV && (UV = pV), YV++, yV = pV + eV.length, pV = VV.indexOf(eV, yV);
              if (0 === YV) continue;
              const QV = Math.max(0, UV - 40),
                nV = Math.min(JV.content.length, UV + eV.length + 40),
                wV = (QV > 0 ? "..." : "") + JV.content.slice(QV, nV).replace(/\n/g, " ") + (nV < JV.content.length ? "..." : "");
              xV.push({
                doc: JV,
                matchCount: YV,
                snippet: wV
              })
            }
            return xV.sort(((VV, eV) => eV.matchCount - VV.matchCount)), xV
          }(RV)), [RV]),
          IV = sV ? null !== (eV = null !== (xV = null === (yV = SV.find((VV => VV.doc.id === MV))) || void 0 === yV ? void 0 : yV.doc) && void 0 !== xV ? xV : null === (ZV = SV[0]) || void 0 === ZV ? void 0 : ZV.doc) && void 0 !== eV ? eV : null : null !== (vV = YV.c.find((VV => VV.id === MV))) && void 0 !== vV ? vV : YV.c[0],
          {
            t: dV
          } = (0, nV.A)(),
          OV = dV("codeEditor:copySnippet"),
          Ve = (0, JV.useMemo)((() => IV ? function(VV, eV, xV, JV) {
            let YV = eV;
            YV = YV.replace(/\r\n/g, "\n");
            const UV = [];
            YV = YV.replace(/```(\w*)\n([\s\S]*?)```/g, ((VV, eV, JV) => {
              const YV = UV.length;
              let yV = kV(JV);
              try {
                yV = wV.c.highlight(JV.trimEnd(), {
                  language: eV
                }).value
              } catch (pV) {
                console.warn("Could not highlight documentation code block", pV)
              }
              return UV.push(`<div class="DocsCodeBlockRow"><pre class="DocsCodeBlock" data-lang="${eV}"><code>${yV}</code></pre>${bV(xV,"DocsCopyBlock")}</div>`), `\0PLACEHOLDER_${YV}\0`
            })), YV = YV.replace(/(`{1,2})([^\n]+?)\1(?!`)/g, ((eV, JV, YV) => {
              const yV = UV.length,
                pV = 2 === JV.length ? YV.replace(/^ (.*) $/, "$1") : YV;
              let QV = kV(pV);
              try {
                "apiReference" !== VV && "callbacks" !== VV || (QV = wV.c.highlight(pV.trimEnd().replaceAll("\\|", "|"), {
                  language: "typescript"
                }).value)
              } catch (nV) {
                console.warn("Could not highlight documentation snippet", nV)
              }
              return UV.push(`<span class="DocsInlineCodeRow"><code class="DocsInlineCode">${QV}</code>${bV(xV,"DocsCopyInline")}</span>`), `\0PLACEHOLDER_${yV}\0`
            })), YV = kV(YV), YV = YV.replace(/^#### (.+)$/gm, '<h4 class="DocsH4">$1</h4>'), YV = YV.replace(/^### (.+)$/gm, '<h3 class="DocsH3">$1</h3>'), YV = YV.replace(/^## (.+)$/gm, '<h2 class="DocsH2">$1</h2>'), YV = YV.replace(/^# (.+)$/gm, '<h1 class="DocsH1">$1</h1>'), YV = YV.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"), YV = YV.replace(/\[([^\]]+)\]\(([^)]+)\)/g, ((VV, eV, xV) => xV.startsWith("#") ? `<a class="DocsAnchor" data-id="${xV}">${eV}</a>` : `<a href="${xV}" target="_blank" rel="noopener noreferrer">${eV}</a>`)), YV = YV.replace(/^(\|.+\|)\n(\|[\s:\-|]+\|)\n((?:\|.+\|\s*\r?\n?)*)/gm, ((VV, eV, xV, JV) => `<table class="DocsTable"><thead><tr>${eV.split("|").slice(1,-1).map((VV=>`<th>${VV.trim()}</th>`)).join("")}</tr></thead><tbody>${JV.trim().split("\n").map((VV=>`<tr>${VV.split("|").slice(1,-1).map((VV=>`<td>${VV.trim()}</td>`)).join("")}</tr>`)).join("")}</tbody></table>`)), YV = YV.replace(/(?:^[ \t]*([*-])[ \t]+.+(?:\n|$))+/gm, ((VV, eV) => function(VV, eV) {
              const xV = "*" === eV,
                JV = [];
              for (const pV of VV.split("\n")) {
                const VV = pV.match(/^([ \t]*)(?:[*-])[ \t]+(.+)$/);
                VV && JV.push({
                  indent: VV[1].replace(/\t/g, "  ").length,
                  content: VV[2]
                })
              }
              let YV = "";
              const UV = [],
                yV = xV ? "ol" : "ul";
              for (const {
                  indent: pV,
                  content: QV
                }
                of JV) {
                for (; UV.length > 0 && pV < UV[UV.length - 1];) YV += `</${yV}></li>`, UV.pop();
                (0 === UV.length || pV > UV[UV.length - 1]) && (UV.length > 0 && (YV = YV.replace(/<\/li>$/, "")), YV += `<${yV} class="DocsList">`, UV.push(pV)), YV += `<li class="DocsListItem">${QV}</li>`
              }
              for (; UV.length > 0;) YV += `</${yV}>`, UV.pop(), UV.length > 0 && (YV += "</li>");
              return YV
            }(VV, eV))), YV = YV.replace(/\n{2,}/g, "\n<br/>\n");
            for (let yV = 0; yV < UV.length; yV++) YV = YV.replace(`\0PLACEHOLDER_${yV}\0`, UV[yV]);
            if (JV) {
              const VV = kV(JV).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                eV = new RegExp(VV, "gi");
              YV = YV.replace(/([^<>]+)(?=<|$)/g, (VV => VV.replace(eV, (VV => `<mark class="DocsHighlight">${VV}</mark>`))))
            }
            return YV
          }(IV.id, IV.content, OV, sV ? RV : void 0) : ""), [IV, OV, sV, RV]);
        (0, JV.useEffect)((() => {
          const VV = WV.current;
          if (!VV) return;
          const eV = VV => {
            var eV, xV, JV, YV, UV;
            const yV = null === (eV = (xV = VV.target).closest) || void 0 === eV ? void 0 : eV.call(xV, ".DocsCopyButton");
            if (!yV) return;
            VV.preventDefault(), VV.stopPropagation();
            const pV = null !== (JV = null === (YV = yV.parentElement) || void 0 === YV || null === (UV = YV.querySelector("code")) || void 0 === UV ? void 0 : UV.textContent) && void 0 !== JV ? JV : "";
            navigator.clipboard.writeText(pV.trimEnd()).then((() => {
              yV.classList.add("Copied"), setTimeout((() => {
                yV.classList.remove("Copied")
              }), 1500)
            })).catch((VV => {
              console.warn("Could not copy documentation code", VV)
            }))
          };
          return VV.addEventListener("click", eV, !0), () => {
            VV.removeEventListener("click", eV, !0)
          }
        }), []);
        const [ee, xe] = (0, JV.useState)(0);
        (0, JV.useEffect)((() => {
          if (!sV || !WV.current) return void xe(0);
          const VV = WV.current.querySelectorAll(".DocsHighlight").length;
          xe(VV)
        }), [sV, Ve]), (0, JV.useEffect)((() => {
          if (null === CV || !WV.current) return;
          aV(null);
          const VV = WV.current.querySelectorAll(".DocsHighlight");
          if (0 === VV.length) return;
          const eV = Math.min(CV, VV.length - 1);
          iV(eV), VV.forEach((VV => {
            VV.classList.remove("DocsHighlightActive")
          })), VV[eV].classList.add("DocsHighlightActive"), VV[eV].scrollIntoView({
            block: "center",
            behavior: "smooth"
          })
        }), [CV, Ve]);
        const Je = (0, JV.useCallback)((VV => {
            if (!WV.current) return;
            const eV = WV.current.querySelectorAll(".DocsHighlight");
            if (0 === eV.length) return;
            const xV = (DV + VV + eV.length) % eV.length;
            iV(xV), aV(xV)
          }), [DV]),
          Ye = (0, JV.useCallback)((VV => {
            var eV;
            const xV = null === (eV = FV[VV]) || void 0 === eV ? void 0 : eV.tabStep;
            xV && xV === mV && (0, tV.f)(xV), VV !== MV ? (cV(!0), zV(VV), iV(0), WV.current && (WV.current.scrollTop = 0), sV && aV(0)) : cV(!oV)
          }), [sV, MV, oV, mV]),
          Ue = (0, JV.useCallback)((VV => {
            var eV;
            const xV = Array.from((null === (eV = WV.current) || void 0 === eV ? void 0 : eV.querySelectorAll(".DocsH2, .DocsH3")) || []).find((eV => {
              var xV;
              return null === (xV = eV.textContent) || void 0 === xV ? void 0 : xV.includes(VV)
            }));
            xV && xV.scrollIntoView({
              block: "start",
              behavior: "smooth"
            })
          }), [WV]),
          ye = (0, JV.useCallback)((VV => {
            var eV, xV;
            const JV = null !== (eV = null === (xV = GV.current) || void 0 === xV ? void 0 : xV.clientWidth) && void 0 !== eV ? eV : window.innerWidth,
              YV = Math.max(120, JV - 200);
            return Math.min(Math.max(VV, 120), YV)
          }), []),
          pe = (0, JV.useCallback)((() => {
            var VV;
            LV.current && (LV.current = !1, null === (VV = GV.current) || void 0 === VV || VV.classList.remove("DocsSidebarResizing"))
          }), []),
          Qe = (0, JV.useCallback)((VV => {
            var eV;
            VV.preventDefault(), LV.current = !0, null === (eV = GV.current) || void 0 === eV || eV.classList.add("DocsSidebarResizing")
          }), []);
        (0, JV.useEffect)((() => {
          const VV = GV.current,
            eV = VV => {
              if (!LV.current || !GV.current) return;
              const eV = GV.current.getBoundingClientRect().left;
              lV(ye(VV.clientX - eV))
            };
          return window.addEventListener("mousemove", eV), window.addEventListener("mouseup", pe), () => {
            window.removeEventListener("mousemove", eV), window.removeEventListener("mouseup", pe), null === VV || void 0 === VV || VV.classList.remove("DocsSidebarResizing")
          }
        }), [ye, pe]);
        const ne = (0, JV.useCallback)((VV => {
          if (VV) {
            const [eV, xV] = VV.slice(1).split("-");
            xV && (fV.current = {
              docId: eV,
              subsection: xV
            }), eV && Ye(eV)
          }
        }), [Ye]);
        (0, JV.useEffect)((() => {
          const VV = fV.current;
          VV && MV === VV.docId && (setTimeout((() => {
            Ue(VV.subsection)
          }), 0), fV.current = null)
        })), (0, JV.useEffect)((() => {
          if (!WV.current) return;
          WV.current.querySelectorAll("a.DocsAnchor").forEach((VV => {
            VV.addEventListener("click", (eV => {
              eV.preventDefault(), ne(VV.dataset.id)
            }))
          }))
        }), [MV, ne]);
        const we = Object.values(FV).find((VV => (null === VV || void 0 === VV ? void 0 : VV.pageStep) === mV));
        return (0, rV.jsx)(qV.l, {
          tutorial: "docsOverview",
          step: null !== (TV = null === we || void 0 === we ? void 0 : we.pageStep) && void 0 !== TV ? TV : "docsPanel",
          text: dV(null !== (PV = null === we || void 0 === we ? void 0 : we.pageText) && void 0 !== PV ? PV : "codeEditor:tutorialDocsPanel"),
          enabled: XV,
          placement: "left",
          onPrevious: we ? void 0 : NV,
          children: (0, rV.jsxs)("div", {
            className: "DocsPanel",
            ref: GV,
            children: [(0, rV.jsxs)("div", {
              className: "DocsSidebar",
              style: {
                width: hV,
                minWidth: hV,
                maxWidth: hV
              },
              children: [(0, rV.jsx)(UV.d, {
                className: "DocsSearch",
                placeholderText: "\ud83d\udd0e Search docs...",
                onValueChange: VV => {
                  gV(VV), iV(0), aV(0)
                }
              }, KV), (0, rV.jsx)("div", {
                className: "DocsNavList",
                children: sV ? SV.map((VV => (0, rV.jsxs)("div", {
                  className: pV()("DocsNavItem", "SearchResult", {
                    Active: VV.doc.id === (null === IV || void 0 === IV ? void 0 : IV.id)
                  }),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    Ye(VV.doc.id)
                  },
                  children: [(0, rV.jsxs)("div", {
                    className: "SearchResultTitle",
                    children: [VV.doc.title, (0, rV.jsx)("span", {
                      className: "SearchResultCount",
                      children: VV.matchCount
                    })]
                  }), (0, rV.jsx)("div", {
                    className: "SearchResultSnippet",
                    children: EV(VV.snippet, RV)
                  })]
                }, VV.doc.id))) : YV.c.map((VV => {
                  const eV = (0, rV.jsxs)("div", {
                      className: pV()("DocsNavItem", {
                        Active: VV.id === (null === IV || void 0 === IV ? void 0 : IV.id)
                      }),
                      "data-pad-focusable": !0,
                      onClick: () => {
                        Ye(VV.id)
                      },
                      children: [(0, rV.jsx)("span", {
                        className: "DocsNavItemTitle",
                        children: VV.title
                      }), VV.subsections && VV.id === (null === IV || void 0 === IV ? void 0 : IV.id) && oV && (0, rV.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, rV.jsx)(BV.b, {
                          name: "angle-down"
                        })
                      }), VV.subsections && (VV.id !== (null === IV || void 0 === IV ? void 0 : IV.id) || !oV) && (0, rV.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, rV.jsx)(BV.b, {
                          name: "angle-up"
                        })
                      })]
                    }),
                    xV = FV[VV.id];
                  return (0, rV.jsxs)(JV.Fragment, {
                    children: [xV && (0, rV.jsx)(qV.l, {
                      tutorial: "docsOverview",
                      step: xV.tabStep,
                      text: dV(xV.tabText),
                      enabled: XV,
                      placement: "left",
                      waitForClick: !0,
                      children: eV
                    }), !xV && eV, oV && VV.subsections && VV.id === (null === IV || void 0 === IV ? void 0 : IV.id) && VV.subsections.map((VV => (0, rV.jsx)("div", {
                      className: "DocsNavItem DocsSubsection",
                      "data-pad-focusable": !0,
                      onClick: () => {
                        Ue(VV)
                      },
                      children: VV
                    }, VV)))]
                  }, VV.id)
                }))
              }), (0, rV.jsx)("div", {
                className: "DocsSidebarButtonContainer",
                children: (0, rV.jsx)(jV.d, {
                  tooltipInner: dV("codeEditor:popOutDocsTooltip"),
                  placement: "top",
                  children: (0, rV.jsx)(QV.f, {
                    className: "DocsSidebarButton",
                    onClick: AV,
                    children: dV("codeEditor:popOutDocs")
                  })
                })
              })]
            }), (0, rV.jsx)("div", {
              className: "DocsSidebarResizeHandle",
              onMouseDown: Qe
            }), (0, rV.jsxs)("div", {
              className: "DocsContentWrapper",
              children: [sV && ee > 0 && (0, rV.jsxs)("div", {
                className: "DocsMatchNav",
                children: [(0, rV.jsxs)("span", {
                  className: "DocsMatchNavLabel",
                  children: [DV + 1, " / ", ee]
                }), (0, rV.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    Je(-1)
                  },
                  children: "\u25b2"
                }), (0, rV.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    Je(1)
                  },
                  children: "\u25bc"
                })]
              }), (0, rV.jsx)("div", {
                className: "DocsContent",
                ref: WV,
                dangerouslySetInnerHTML: {
                  __html: Ve
                }
              })]
            })]
          })
        })
      }))
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);