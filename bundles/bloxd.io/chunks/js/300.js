export const id = 300;
export const ids = [300];
export const modules = {
  41470: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      default: () => wS
    });
    var tS = gS(64),
      bS = gS(4867),
      XS = gS(1774),
      xS = gS(1121),
      NS = gS.n(xS),
      qS = gS(1528),
      uS = gS(1281),
      IS = gS(4832),
      fS = gS(4848),
      kS = gS(4855),
      aS = gS(1181);

    function KS(SS) {
      return SS.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    IS.d.registerLanguage("javascript", fS.e), IS.d.registerLanguage("typescript", kS.d);

    function jS(SS, HS) {
      const gS = KS(SS).replace(/"/g, "&quot;");
      return `<button type="button" class="DocsCopyButton ${HS}" title="${gS}" aria-label="${gS}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5"/><path d="M10.5 3.5V1.5H1.5v9h2"/></svg><svg class="DocsCopiedIcon" viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 8.5l3.5 3.5 7.5-7.5"/></svg></button>`
    }

    function GS(SS, HS) {
      const gS = [],
        tS = SS.toLowerCase(),
        bS = HS.toLowerCase();
      let XS = 0;
      for (; XS < SS.length;) {
        const xS = tS.indexOf(bS, XS);
        if (-1 === xS) {
          gS.push(SS.slice(XS));
          break
        }
        xS > XS && gS.push(SS.slice(XS, xS)), gS.push((0, aS.jsx)("mark", {
          className: "DocsHighlight",
          children: SS.slice(xS, xS + HS.length)
        }, xS)), XS = xS + HS.length
      }
      return gS
    }
    var CS = gS(1127),
      nS = gS(1444),
      PS = gS(36906),
      QS = gS(36908);
    const DS = {
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
      wS = (0, tS.memo)((function(SS) {
        var HS, gS, xS, fS, kS, wS, hS;
        let {
          popOutDocs: ZS,
          hideDocs: JS,
          tutorialEnabled: OS
        } = SS;
        const [dS, cS] = (0, tS.useState)(bS.d[0].id), vS = (0, tS.useRef)(null), ES = (0, tS.useRef)(null), [LS, YS] = (0, tS.useState)(""), [AS, yS] = (0, tS.useState)(0), [VS, iS] = (0, tS.useState)(null), [WS, zS] = (0, tS.useState)(!1), [US, pS] = (0, tS.useState)(160), sS = (0, tS.useRef)(!1), BS = (0, tS.useRef)(null), MS = (0, PS.m)("docsOverview"), [FS, RS] = (0, tS.useState)(0), TS = Object.values(DS).some((SS => (null === SS || void 0 === SS ? void 0 : SS.tabStep) === MS));
        (0, tS.useEffect)((() => {
          TS && LS.length > 0 && (YS(""), RS((SS => SS + 1)))
        }), [TS, LS]);
        const oS = LS.length > 0,
          lS = (0, tS.useMemo)((() => function(SS) {
            if (!SS) return [];
            const HS = SS.toLowerCase(),
              gS = [];
            for (const tS of bS.d) {
              const SS = tS.content.toLowerCase();
              let bS = 0,
                XS = -1,
                xS = 0,
                NS = SS.indexOf(HS, xS);
              for (; - 1 !== NS;) - 1 === XS && (XS = NS), bS++, xS = NS + HS.length, NS = SS.indexOf(HS, xS);
              if (0 === bS) continue;
              const qS = Math.max(0, XS - 40),
                uS = Math.min(tS.content.length, XS + HS.length + 40),
                IS = (qS > 0 ? "..." : "") + tS.content.slice(qS, uS).replace(/\n/g, " ") + (uS < tS.content.length ? "..." : "");
              gS.push({
                doc: tS,
                matchCount: bS,
                snippet: IS
              })
            }
            return gS.sort(((SS, HS) => HS.matchCount - SS.matchCount)), gS
          }(LS)), [LS]),
          mS = oS ? null !== (HS = null !== (gS = null === (xS = lS.find((SS => SS.doc.id === dS))) || void 0 === xS ? void 0 : xS.doc) && void 0 !== gS ? gS : null === (fS = lS[0]) || void 0 === fS ? void 0 : fS.doc) && void 0 !== HS ? HS : null : null !== (kS = bS.d.find((SS => SS.id === dS))) && void 0 !== kS ? kS : bS.d[0],
          {
            t: eS
          } = (0, uS.F)(),
          rS = eS("codeEditor:copySnippet"),
          SH = (0, tS.useMemo)((() => mS ? function(SS, HS, gS, tS) {
            let bS = HS;
            bS = bS.replace(/\r\n/g, "\n");
            const XS = [];
            bS = bS.replace(/```(\w*)\n([\s\S]*?)```/g, ((SS, HS, tS) => {
              const bS = XS.length;
              let xS = KS(tS);
              try {
                xS = IS.d.highlight(tS.trimEnd(), {
                  language: HS
                }).value
              } catch (NS) {
                console.warn("Could not highlight documentation code block", NS)
              }
              return XS.push(`<div class="DocsCodeBlockRow"><pre class="DocsCodeBlock" data-lang="${HS}"><code>${xS}</code></pre>${jS(gS,"DocsCopyBlock")}</div>`), `\0PLACEHOLDER_${bS}\0`
            })), bS = bS.replace(/(`{1,2})([^\n]+?)\1(?!`)/g, ((HS, tS, bS) => {
              const xS = XS.length,
                NS = 2 === tS.length ? bS.replace(/^ (.*) $/, "$1") : bS;
              let qS = KS(NS);
              try {
                "apiReference" !== SS && "callbacks" !== SS || (qS = IS.d.highlight(NS.trimEnd().replaceAll("\\|", "|"), {
                  language: "typescript"
                }).value)
              } catch (uS) {
                console.warn("Could not highlight documentation snippet", uS)
              }
              return XS.push(`<span class="DocsInlineCodeRow"><code class="DocsInlineCode">${qS}</code>${jS(gS,"DocsCopyInline")}</span>`), `\0PLACEHOLDER_${xS}\0`
            })), bS = KS(bS), bS = bS.replace(/^#### (.+)$/gm, '<h4 class="DocsH4">$1</h4>'), bS = bS.replace(/^### (.+)$/gm, '<h3 class="DocsH3">$1</h3>'), bS = bS.replace(/^## (.+)$/gm, '<h2 class="DocsH2">$1</h2>'), bS = bS.replace(/^# (.+)$/gm, '<h1 class="DocsH1">$1</h1>'), bS = bS.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"), bS = bS.replace(/\[([^\]]+)\]\(([^)]+)\)/g, ((SS, HS, gS) => gS.startsWith("#") ? `<a class="DocsAnchor" data-id="${gS}">${HS}</a>` : `<a href="${gS}" target="_blank" rel="noopener noreferrer">${HS}</a>`)), bS = bS.replace(/^(\|.+\|)\n(\|[\s:\-|]+\|)\n((?:\|.+\|\s*\r?\n?)*)/gm, ((SS, HS, gS, tS) => `<table class="DocsTable"><thead><tr>${HS.split("|").slice(1,-1).map((SS=>`<th>${SS.trim()}</th>`)).join("")}</tr></thead><tbody>${tS.trim().split("\n").map((SS=>`<tr>${SS.split("|").slice(1,-1).map((SS=>`<td>${SS.trim()}</td>`)).join("")}</tr>`)).join("")}</tbody></table>`)), bS = bS.replace(/(?:^[ \t]*([*-])[ \t]+.+(?:\n|$))+/gm, ((SS, HS) => function(SS, HS) {
              const gS = "*" === HS,
                tS = [];
              for (const NS of SS.split("\n")) {
                const SS = NS.match(/^([ \t]*)(?:[*-])[ \t]+(.+)$/);
                SS && tS.push({
                  indent: SS[1].replace(/\t/g, "  ").length,
                  content: SS[2]
                })
              }
              let bS = "";
              const XS = [],
                xS = gS ? "ol" : "ul";
              for (const {
                  indent: NS,
                  content: qS
                }
                of tS) {
                for (; XS.length > 0 && NS < XS[XS.length - 1];) bS += `</${xS}></li>`, XS.pop();
                (0 === XS.length || NS > XS[XS.length - 1]) && (XS.length > 0 && (bS = bS.replace(/<\/li>$/, "")), bS += `<${xS} class="DocsList">`, XS.push(NS)), bS += `<li class="DocsListItem">${qS}</li>`
              }
              for (; XS.length > 0;) bS += `</${xS}>`, XS.pop(), XS.length > 0 && (bS += "</li>");
              return bS
            }(SS, HS))), bS = bS.replace(/\n{2,}/g, "\n<br/>\n");
            for (let xS = 0; xS < XS.length; xS++) bS = bS.replace(`\0PLACEHOLDER_${xS}\0`, XS[xS]);
            if (tS) {
              const SS = KS(tS).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                HS = new RegExp(SS, "gi");
              bS = bS.replace(/([^<>]+)(?=<|$)/g, (SS => SS.replace(HS, (SS => `<mark class="DocsHighlight">${SS}</mark>`))))
            }
            return bS
          }(mS.id, mS.content, rS, oS ? LS : void 0) : ""), [mS, rS, oS, LS]);
        (0, tS.useEffect)((() => {
          const SS = ES.current;
          if (!SS) return;
          const HS = SS => {
            var HS, gS, tS, bS, XS;
            const xS = null === (HS = (gS = SS.target).closest) || void 0 === HS ? void 0 : HS.call(gS, ".DocsCopyButton");
            if (!xS) return;
            SS.preventDefault(), SS.stopPropagation();
            const NS = null !== (tS = null === (bS = xS.parentElement) || void 0 === bS || null === (XS = bS.querySelector("code")) || void 0 === XS ? void 0 : XS.textContent) && void 0 !== tS ? tS : "";
            navigator.clipboard.writeText(NS.trimEnd()).then((() => {
              xS.classList.add("Copied"), setTimeout((() => {
                xS.classList.remove("Copied")
              }), 1500)
            })).catch((SS => {
              console.warn("Could not copy documentation code", SS)
            }))
          };
          return SS.addEventListener("click", HS, !0), () => {
            SS.removeEventListener("click", HS, !0)
          }
        }), []);
        const [HH, gH] = (0, tS.useState)(0);
        (0, tS.useEffect)((() => {
          if (!oS || !ES.current) return void gH(0);
          const SS = ES.current.querySelectorAll(".DocsHighlight").length;
          gH(SS)
        }), [oS, SH]), (0, tS.useEffect)((() => {
          if (null === VS || !ES.current) return;
          iS(null);
          const SS = ES.current.querySelectorAll(".DocsHighlight");
          if (0 === SS.length) return;
          const HS = Math.min(VS, SS.length - 1);
          yS(HS), SS.forEach((SS => {
            SS.classList.remove("DocsHighlightActive")
          })), SS[HS].classList.add("DocsHighlightActive"), SS[HS].scrollIntoView({
            block: "center",
            behavior: "smooth"
          })
        }), [VS, SH]);
        const tH = (0, tS.useCallback)((SS => {
            if (!ES.current) return;
            const HS = ES.current.querySelectorAll(".DocsHighlight");
            if (0 === HS.length) return;
            const gS = (AS + SS + HS.length) % HS.length;
            yS(gS), iS(gS)
          }), [AS]),
          bH = (0, tS.useCallback)((SS => {
            var HS;
            const gS = null === (HS = DS[SS]) || void 0 === HS ? void 0 : HS.tabStep;
            gS && gS === MS && (0, QS.e)(gS), SS !== dS ? (zS(!0), cS(SS), yS(0), ES.current && (ES.current.scrollTop = 0), oS && iS(0)) : zS(!WS)
          }), [oS, dS, WS, MS]),
          XH = (0, tS.useCallback)((SS => {
            var HS;
            const gS = Array.from((null === (HS = ES.current) || void 0 === HS ? void 0 : HS.querySelectorAll(".DocsH2, .DocsH3")) || []).find((HS => {
              var gS;
              return null === (gS = HS.textContent) || void 0 === gS ? void 0 : gS.includes(SS)
            }));
            gS && gS.scrollIntoView({
              block: "start",
              behavior: "smooth"
            })
          }), [ES]),
          xH = (0, tS.useCallback)((SS => {
            var HS, gS;
            const tS = null !== (HS = null === (gS = vS.current) || void 0 === gS ? void 0 : gS.clientWidth) && void 0 !== HS ? HS : window.innerWidth,
              bS = Math.max(120, tS - 200);
            return Math.min(Math.max(SS, 120), bS)
          }), []),
          NH = (0, tS.useCallback)((() => {
            var SS;
            sS.current && (sS.current = !1, null === (SS = vS.current) || void 0 === SS || SS.classList.remove("DocsSidebarResizing"))
          }), []),
          qH = (0, tS.useCallback)((SS => {
            var HS;
            SS.preventDefault(), sS.current = !0, null === (HS = vS.current) || void 0 === HS || HS.classList.add("DocsSidebarResizing")
          }), []);
        (0, tS.useEffect)((() => {
          const SS = vS.current,
            HS = SS => {
              if (!sS.current || !vS.current) return;
              const HS = vS.current.getBoundingClientRect().left;
              pS(xH(SS.clientX - HS))
            };
          return window.addEventListener("mousemove", HS), window.addEventListener("mouseup", NH), () => {
            window.removeEventListener("mousemove", HS), window.removeEventListener("mouseup", NH), null === SS || void 0 === SS || SS.classList.remove("DocsSidebarResizing")
          }
        }), [xH, NH]);
        const uH = (0, tS.useCallback)((SS => {
          if (SS) {
            const [HS, gS] = SS.slice(1).split("-");
            gS && (BS.current = {
              docId: HS,
              subsection: gS
            }), HS && bH(HS)
          }
        }), [bH]);
        (0, tS.useEffect)((() => {
          const SS = BS.current;
          SS && dS === SS.docId && (setTimeout((() => {
            XH(SS.subsection)
          }), 0), BS.current = null)
        })), (0, tS.useEffect)((() => {
          if (!ES.current) return;
          ES.current.querySelectorAll("a.DocsAnchor").forEach((SS => {
            SS.addEventListener("click", (HS => {
              HS.preventDefault(), uH(SS.dataset.id)
            }))
          }))
        }), [dS, uH]);
        const IH = Object.values(DS).find((SS => (null === SS || void 0 === SS ? void 0 : SS.pageStep) === MS));
        return (0, aS.jsx)(PS.j, {
          tutorial: "docsOverview",
          step: null !== (wS = null === IH || void 0 === IH ? void 0 : IH.pageStep) && void 0 !== wS ? wS : "docsPanel",
          text: eS(null !== (hS = null === IH || void 0 === IH ? void 0 : IH.pageText) && void 0 !== hS ? hS : "codeEditor:tutorialDocsPanel"),
          enabled: OS,
          placement: "left",
          onPrevious: IH ? void 0 : JS,
          children: (0, aS.jsxs)("div", {
            className: "DocsPanel",
            ref: vS,
            children: [(0, aS.jsxs)("div", {
              className: "DocsSidebar",
              style: {
                width: US,
                minWidth: US,
                maxWidth: US
              },
              children: [(0, aS.jsx)(XS.e, {
                className: "DocsSearch",
                placeholderText: "\ud83d\udd0e Search docs...",
                onValueChange: SS => {
                  YS(SS), yS(0), iS(0)
                }
              }, FS), (0, aS.jsx)("div", {
                className: "DocsNavList",
                children: oS ? lS.map((SS => (0, aS.jsxs)("div", {
                  className: NS()("DocsNavItem", "SearchResult", {
                    Active: SS.doc.id === (null === mS || void 0 === mS ? void 0 : mS.id)
                  }),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    bH(SS.doc.id)
                  },
                  children: [(0, aS.jsxs)("div", {
                    className: "SearchResultTitle",
                    children: [SS.doc.title, (0, aS.jsx)("span", {
                      className: "SearchResultCount",
                      children: SS.matchCount
                    })]
                  }), (0, aS.jsx)("div", {
                    className: "SearchResultSnippet",
                    children: GS(SS.snippet, LS)
                  })]
                }, SS.doc.id))) : bS.d.map((SS => {
                  const HS = (0, aS.jsxs)("div", {
                      className: NS()("DocsNavItem", {
                        Active: SS.id === (null === mS || void 0 === mS ? void 0 : mS.id)
                      }),
                      "data-pad-focusable": !0,
                      onClick: () => {
                        bH(SS.id)
                      },
                      children: [(0, aS.jsx)("span", {
                        className: "DocsNavItemTitle",
                        children: SS.title
                      }), SS.subsections && SS.id === (null === mS || void 0 === mS ? void 0 : mS.id) && WS && (0, aS.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, aS.jsx)(CS.d, {
                          name: "angle-down"
                        })
                      }), SS.subsections && (SS.id !== (null === mS || void 0 === mS ? void 0 : mS.id) || !WS) && (0, aS.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, aS.jsx)(CS.d, {
                          name: "angle-up"
                        })
                      })]
                    }),
                    gS = DS[SS.id];
                  return (0, aS.jsxs)(tS.Fragment, {
                    children: [gS && (0, aS.jsx)(PS.j, {
                      tutorial: "docsOverview",
                      step: gS.tabStep,
                      text: eS(gS.tabText),
                      enabled: OS,
                      placement: "left",
                      waitForClick: !0,
                      children: HS
                    }), !gS && HS, WS && SS.subsections && SS.id === (null === mS || void 0 === mS ? void 0 : mS.id) && SS.subsections.map((SS => (0, aS.jsx)("div", {
                      className: "DocsNavItem DocsSubsection",
                      "data-pad-focusable": !0,
                      onClick: () => {
                        XH(SS)
                      },
                      children: SS
                    }, SS)))]
                  }, SS.id)
                }))
              }), (0, aS.jsx)("div", {
                className: "DocsSidebarButtonContainer",
                children: (0, aS.jsx)(nS.h, {
                  tooltipInner: eS("codeEditor:popOutDocsTooltip"),
                  placement: "top",
                  children: (0, aS.jsx)(qS.g, {
                    className: "DocsSidebarButton",
                    onClick: ZS,
                    children: eS("codeEditor:popOutDocs")
                  })
                })
              })]
            }), (0, aS.jsx)("div", {
              className: "DocsSidebarResizeHandle",
              onMouseDown: qH
            }), (0, aS.jsxs)("div", {
              className: "DocsContentWrapper",
              children: [oS && HH > 0 && (0, aS.jsxs)("div", {
                className: "DocsMatchNav",
                children: [(0, aS.jsxs)("span", {
                  className: "DocsMatchNavLabel",
                  children: [AS + 1, " / ", HH]
                }), (0, aS.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    tH(-1)
                  },
                  children: "\u25b2"
                }), (0, aS.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    tH(1)
                  },
                  children: "\u25bc"
                })]
              }), (0, aS.jsx)("div", {
                className: "DocsContent",
                ref: ES,
                dangerouslySetInnerHTML: {
                  __html: SH
                }
              })]
            })]
          })
        })
      }))
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);