export const id = 300;
export const ids = [300];
export const modules = {
  41260: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      default: () => JC
    });
    var QC = ZC(48),
      wC = ZC(4679),
      bC = ZC(1593),
      nC = ZC(1002),
      fC = ZC.n(nC),
      oC = ZC(1388),
      qC = ZC(1143),
      FC = ZC(4657),
      WC = ZC(4668),
      NC = ZC(4672),
      MC = ZC(1056);

    function gC(CC) {
      return CC.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    FC.c.registerLanguage("javascript", WC.b), FC.c.registerLanguage("typescript", NC.b);

    function SC(CC, zC) {
      const ZC = gC(CC).replace(/"/g, "&quot;");
      return `<button type="button" class="DocsCopyButton ${zC}" title="${ZC}" aria-label="${ZC}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5"/><path d="M10.5 3.5V1.5H1.5v9h2"/></svg><svg class="DocsCopiedIcon" viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 8.5l3.5 3.5 7.5-7.5"/></svg></button>`
    }

    function pC(CC, zC) {
      const ZC = [],
        QC = CC.toLowerCase(),
        wC = zC.toLowerCase();
      let bC = 0;
      for (; bC < CC.length;) {
        const nC = QC.indexOf(wC, bC);
        if (-1 === nC) {
          ZC.push(CC.slice(bC));
          break
        }
        nC > bC && ZC.push(CC.slice(bC, nC)), ZC.push((0, MC.jsx)("mark", {
          className: "DocsHighlight",
          children: CC.slice(nC, nC + zC.length)
        }, nC)), bC = nC + zC.length
      }
      return ZC
    }
    var PC = ZC(1013),
      GC = ZC(1321),
      RC = ZC(36747),
      AC = ZC(36750);
    const xC = {
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
      JC = (0, QC.memo)((function(CC) {
        var zC, ZC, nC, WC, NC, JC, IC;
        let {
          popOutDocs: iC,
          hideDocs: vC,
          tutorialEnabled: eC
        } = CC;
        const [hC, KC] = (0, QC.useState)(wC.c[0].id), YC = (0, QC.useRef)(null), dC = (0, QC.useRef)(null), [mC, HC] = (0, QC.useState)(""), [EC, lC] = (0, QC.useState)(0), [XC, cC] = (0, QC.useState)(null), [uC, rC] = (0, QC.useState)(!1), [sC, TC] = (0, QC.useState)(160), aC = (0, QC.useRef)(!1), tC = (0, QC.useRef)(null), DC = (0, RC.i)("docsOverview"), [jC, yC] = (0, QC.useState)(0), LC = Object.values(xC).some((CC => (null === CC || void 0 === CC ? void 0 : CC.tabStep) === DC));
        (0, QC.useEffect)((() => {
          LC && mC.length > 0 && (HC(""), yC((CC => CC + 1)))
        }), [LC, mC]);
        const UC = mC.length > 0,
          BC = (0, QC.useMemo)((() => function(CC) {
            if (!CC) return [];
            const zC = CC.toLowerCase(),
              ZC = [];
            for (const QC of wC.c) {
              const CC = QC.content.toLowerCase();
              let wC = 0,
                bC = -1,
                nC = 0,
                fC = CC.indexOf(zC, nC);
              for (; - 1 !== fC;) - 1 === bC && (bC = fC), wC++, nC = fC + zC.length, fC = CC.indexOf(zC, nC);
              if (0 === wC) continue;
              const oC = Math.max(0, bC - 40),
                qC = Math.min(QC.content.length, bC + zC.length + 40),
                FC = (oC > 0 ? "..." : "") + QC.content.slice(oC, qC).replace(/\n/g, " ") + (qC < QC.content.length ? "..." : "");
              ZC.push({
                doc: QC,
                matchCount: wC,
                snippet: FC
              })
            }
            return ZC.sort(((CC, zC) => zC.matchCount - CC.matchCount)), ZC
          }(mC)), [mC]),
          OC = UC ? null !== (zC = null !== (ZC = null === (nC = BC.find((CC => CC.doc.id === hC))) || void 0 === nC ? void 0 : nC.doc) && void 0 !== ZC ? ZC : null === (WC = BC[0]) || void 0 === WC ? void 0 : WC.doc) && void 0 !== zC ? zC : null : null !== (NC = wC.c.find((CC => CC.id === hC))) && void 0 !== NC ? NC : wC.c[0],
          {
            t: kC
          } = (0, qC.y)(),
          VC = kC("codeEditor:copySnippet"),
          Cz = (0, QC.useMemo)((() => OC ? function(CC, zC, ZC, QC) {
            let wC = zC;
            wC = wC.replace(/\r\n/g, "\n");
            const bC = [];
            wC = wC.replace(/```(\w*)\n([\s\S]*?)```/g, ((CC, zC, QC) => {
              const wC = bC.length;
              let nC = gC(QC);
              try {
                nC = FC.c.highlight(QC.trimEnd(), {
                  language: zC
                }).value
              } catch (fC) {
                console.warn("Could not highlight documentation code block", fC)
              }
              return bC.push(`<div class="DocsCodeBlockRow"><pre class="DocsCodeBlock" data-lang="${zC}"><code>${nC}</code></pre>${SC(ZC,"DocsCopyBlock")}</div>`), `\0PLACEHOLDER_${wC}\0`
            })), wC = wC.replace(/(`{1,2})([^\n]+?)\1(?!`)/g, ((zC, QC, wC) => {
              const nC = bC.length,
                fC = 2 === QC.length ? wC.replace(/^ (.*) $/, "$1") : wC;
              let oC = gC(fC);
              try {
                "apiReference" !== CC && "callbacks" !== CC || (oC = FC.c.highlight(fC.trimEnd().replaceAll("\\|", "|"), {
                  language: "typescript"
                }).value)
              } catch (qC) {
                console.warn("Could not highlight documentation snippet", qC)
              }
              return bC.push(`<span class="DocsInlineCodeRow"><code class="DocsInlineCode">${oC}</code>${SC(ZC,"DocsCopyInline")}</span>`), `\0PLACEHOLDER_${nC}\0`
            })), wC = gC(wC), wC = wC.replace(/^#### (.+)$/gm, '<h4 class="DocsH4">$1</h4>'), wC = wC.replace(/^### (.+)$/gm, '<h3 class="DocsH3">$1</h3>'), wC = wC.replace(/^## (.+)$/gm, '<h2 class="DocsH2">$1</h2>'), wC = wC.replace(/^# (.+)$/gm, '<h1 class="DocsH1">$1</h1>'), wC = wC.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"), wC = wC.replace(/\[([^\]]+)\]\(([^)]+)\)/g, ((CC, zC, ZC) => ZC.startsWith("#") ? `<a class="DocsAnchor" data-id="${ZC}">${zC}</a>` : `<a href="${ZC}" target="_blank" rel="noopener noreferrer">${zC}</a>`)), wC = wC.replace(/^(\|.+\|)\n(\|[\s:\-|]+\|)\n((?:\|.+\|\s*\r?\n?)*)/gm, ((CC, zC, ZC, QC) => `<table class="DocsTable"><thead><tr>${zC.split("|").slice(1,-1).map((CC=>`<th>${CC.trim()}</th>`)).join("")}</tr></thead><tbody>${QC.trim().split("\n").map((CC=>`<tr>${CC.split("|").slice(1,-1).map((CC=>`<td>${CC.trim()}</td>`)).join("")}</tr>`)).join("")}</tbody></table>`)), wC = wC.replace(/(?:^[ \t]*([*-])[ \t]+.+(?:\n|$))+/gm, ((CC, zC) => function(CC, zC) {
              const ZC = "*" === zC,
                QC = [];
              for (const fC of CC.split("\n")) {
                const CC = fC.match(/^([ \t]*)(?:[*-])[ \t]+(.+)$/);
                CC && QC.push({
                  indent: CC[1].replace(/\t/g, "  ").length,
                  content: CC[2]
                })
              }
              let wC = "";
              const bC = [],
                nC = ZC ? "ol" : "ul";
              for (const {
                  indent: fC,
                  content: oC
                }
                of QC) {
                for (; bC.length > 0 && fC < bC[bC.length - 1];) wC += `</${nC}></li>`, bC.pop();
                (0 === bC.length || fC > bC[bC.length - 1]) && (bC.length > 0 && (wC = wC.replace(/<\/li>$/, "")), wC += `<${nC} class="DocsList">`, bC.push(fC)), wC += `<li class="DocsListItem">${oC}</li>`
              }
              for (; bC.length > 0;) wC += `</${nC}>`, bC.pop(), bC.length > 0 && (wC += "</li>");
              return wC
            }(CC, zC))), wC = wC.replace(/\n{2,}/g, "\n<br/>\n");
            for (let nC = 0; nC < bC.length; nC++) wC = wC.replace(`\0PLACEHOLDER_${nC}\0`, bC[nC]);
            if (QC) {
              const CC = gC(QC).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                zC = new RegExp(CC, "gi");
              wC = wC.replace(/([^<>]+)(?=<|$)/g, (CC => CC.replace(zC, (CC => `<mark class="DocsHighlight">${CC}</mark>`))))
            }
            return wC
          }(OC.id, OC.content, VC, UC ? mC : void 0) : ""), [OC, VC, UC, mC]);
        (0, QC.useEffect)((() => {
          const CC = dC.current;
          if (!CC) return;
          const zC = CC => {
            var zC, ZC, QC, wC, bC;
            const nC = null === (zC = (ZC = CC.target).closest) || void 0 === zC ? void 0 : zC.call(ZC, ".DocsCopyButton");
            if (!nC) return;
            CC.preventDefault(), CC.stopPropagation();
            const fC = null !== (QC = null === (wC = nC.parentElement) || void 0 === wC || null === (bC = wC.querySelector("code")) || void 0 === bC ? void 0 : bC.textContent) && void 0 !== QC ? QC : "";
            navigator.clipboard.writeText(fC.trimEnd()).then((() => {
              nC.classList.add("Copied"), setTimeout((() => {
                nC.classList.remove("Copied")
              }), 1500)
            })).catch((CC => {
              console.warn("Could not copy documentation code", CC)
            }))
          };
          return CC.addEventListener("click", zC, !0), () => {
            CC.removeEventListener("click", zC, !0)
          }
        }), []);
        const [zz, Zz] = (0, QC.useState)(0);
        (0, QC.useEffect)((() => {
          if (!UC || !dC.current) return void Zz(0);
          const CC = dC.current.querySelectorAll(".DocsHighlight").length;
          Zz(CC)
        }), [UC, Cz]), (0, QC.useEffect)((() => {
          if (null === XC || !dC.current) return;
          cC(null);
          const CC = dC.current.querySelectorAll(".DocsHighlight");
          if (0 === CC.length) return;
          const zC = Math.min(XC, CC.length - 1);
          lC(zC), CC.forEach((CC => {
            CC.classList.remove("DocsHighlightActive")
          })), CC[zC].classList.add("DocsHighlightActive"), CC[zC].scrollIntoView({
            block: "center",
            behavior: "smooth"
          })
        }), [XC, Cz]);
        const Qz = (0, QC.useCallback)((CC => {
            if (!dC.current) return;
            const zC = dC.current.querySelectorAll(".DocsHighlight");
            if (0 === zC.length) return;
            const ZC = (EC + CC + zC.length) % zC.length;
            lC(ZC), cC(ZC)
          }), [EC]),
          wz = (0, QC.useCallback)((CC => {
            var zC;
            const ZC = null === (zC = xC[CC]) || void 0 === zC ? void 0 : zC.tabStep;
            ZC && ZC === DC && (0, AC.f)(ZC), CC !== hC ? (rC(!0), KC(CC), lC(0), dC.current && (dC.current.scrollTop = 0), UC && cC(0)) : rC(!uC)
          }), [UC, hC, uC, DC]),
          bz = (0, QC.useCallback)((CC => {
            var zC;
            const ZC = Array.from((null === (zC = dC.current) || void 0 === zC ? void 0 : zC.querySelectorAll(".DocsH2, .DocsH3")) || []).find((zC => {
              var ZC;
              return null === (ZC = zC.textContent) || void 0 === ZC ? void 0 : ZC.includes(CC)
            }));
            ZC && ZC.scrollIntoView({
              block: "start",
              behavior: "smooth"
            })
          }), [dC]),
          nz = (0, QC.useCallback)((CC => {
            var zC, ZC;
            const QC = null !== (zC = null === (ZC = YC.current) || void 0 === ZC ? void 0 : ZC.clientWidth) && void 0 !== zC ? zC : window.innerWidth,
              wC = Math.max(120, QC - 200);
            return Math.min(Math.max(CC, 120), wC)
          }), []),
          fz = (0, QC.useCallback)((() => {
            var CC;
            aC.current && (aC.current = !1, null === (CC = YC.current) || void 0 === CC || CC.classList.remove("DocsSidebarResizing"))
          }), []),
          oz = (0, QC.useCallback)((CC => {
            var zC;
            CC.preventDefault(), aC.current = !0, null === (zC = YC.current) || void 0 === zC || zC.classList.add("DocsSidebarResizing")
          }), []);
        (0, QC.useEffect)((() => {
          const CC = YC.current,
            zC = CC => {
              if (!aC.current || !YC.current) return;
              const zC = YC.current.getBoundingClientRect().left;
              TC(nz(CC.clientX - zC))
            };
          return window.addEventListener("mousemove", zC), window.addEventListener("mouseup", fz), () => {
            window.removeEventListener("mousemove", zC), window.removeEventListener("mouseup", fz), null === CC || void 0 === CC || CC.classList.remove("DocsSidebarResizing")
          }
        }), [nz, fz]);
        const qz = (0, QC.useCallback)((CC => {
          if (CC) {
            const [zC, ZC] = CC.slice(1).split("-");
            ZC && (tC.current = {
              docId: zC,
              subsection: ZC
            }), zC && wz(zC)
          }
        }), [wz]);
        (0, QC.useEffect)((() => {
          const CC = tC.current;
          CC && hC === CC.docId && (setTimeout((() => {
            bz(CC.subsection)
          }), 0), tC.current = null)
        })), (0, QC.useEffect)((() => {
          if (!dC.current) return;
          dC.current.querySelectorAll("a.DocsAnchor").forEach((CC => {
            CC.addEventListener("click", (zC => {
              zC.preventDefault(), qz(CC.dataset.id)
            }))
          }))
        }), [hC, qz]);
        const Fz = Object.values(xC).find((CC => (null === CC || void 0 === CC ? void 0 : CC.pageStep) === DC));
        return (0, MC.jsx)(RC.h, {
          tutorial: "docsOverview",
          step: null !== (JC = null === Fz || void 0 === Fz ? void 0 : Fz.pageStep) && void 0 !== JC ? JC : "docsPanel",
          text: kC(null !== (IC = null === Fz || void 0 === Fz ? void 0 : Fz.pageText) && void 0 !== IC ? IC : "codeEditor:tutorialDocsPanel"),
          enabled: eC,
          placement: "left",
          onPrevious: Fz ? void 0 : vC,
          children: (0, MC.jsxs)("div", {
            className: "DocsPanel",
            ref: YC,
            children: [(0, MC.jsxs)("div", {
              className: "DocsSidebar",
              style: {
                width: sC,
                minWidth: sC,
                maxWidth: sC
              },
              children: [(0, MC.jsx)(bC.c, {
                className: "DocsSearch",
                placeholderText: "\ud83d\udd0e Search docs...",
                onValueChange: CC => {
                  HC(CC), lC(0), cC(0)
                }
              }, jC), (0, MC.jsx)("div", {
                className: "DocsNavList",
                children: UC ? BC.map((CC => (0, MC.jsxs)("div", {
                  className: fC()("DocsNavItem", "SearchResult", {
                    Active: CC.doc.id === (null === OC || void 0 === OC ? void 0 : OC.id)
                  }),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    wz(CC.doc.id)
                  },
                  children: [(0, MC.jsxs)("div", {
                    className: "SearchResultTitle",
                    children: [CC.doc.title, (0, MC.jsx)("span", {
                      className: "SearchResultCount",
                      children: CC.matchCount
                    })]
                  }), (0, MC.jsx)("div", {
                    className: "SearchResultSnippet",
                    children: pC(CC.snippet, mC)
                  })]
                }, CC.doc.id))) : wC.c.map((CC => {
                  const zC = (0, MC.jsxs)("div", {
                      className: fC()("DocsNavItem", {
                        Active: CC.id === (null === OC || void 0 === OC ? void 0 : OC.id)
                      }),
                      "data-pad-focusable": !0,
                      onClick: () => {
                        wz(CC.id)
                      },
                      children: [(0, MC.jsx)("span", {
                        className: "DocsNavItemTitle",
                        children: CC.title
                      }), CC.subsections && CC.id === (null === OC || void 0 === OC ? void 0 : OC.id) && uC && (0, MC.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, MC.jsx)(PC.c, {
                          name: "angle-down"
                        })
                      }), CC.subsections && (CC.id !== (null === OC || void 0 === OC ? void 0 : OC.id) || !uC) && (0, MC.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, MC.jsx)(PC.c, {
                          name: "angle-up"
                        })
                      })]
                    }),
                    ZC = xC[CC.id];
                  return (0, MC.jsxs)(QC.Fragment, {
                    children: [ZC && (0, MC.jsx)(RC.h, {
                      tutorial: "docsOverview",
                      step: ZC.tabStep,
                      text: kC(ZC.tabText),
                      enabled: eC,
                      placement: "left",
                      waitForClick: !0,
                      children: zC
                    }), !ZC && zC, uC && CC.subsections && CC.id === (null === OC || void 0 === OC ? void 0 : OC.id) && CC.subsections.map((CC => (0, MC.jsx)("div", {
                      className: "DocsNavItem DocsSubsection",
                      "data-pad-focusable": !0,
                      onClick: () => {
                        bz(CC)
                      },
                      children: CC
                    }, CC)))]
                  }, CC.id)
                }))
              }), (0, MC.jsx)("div", {
                className: "DocsSidebarButtonContainer",
                children: (0, MC.jsx)(GC.d, {
                  tooltipInner: kC("codeEditor:popOutDocsTooltip"),
                  placement: "top",
                  children: (0, MC.jsx)(oC.g, {
                    className: "DocsSidebarButton",
                    onClick: iC,
                    children: kC("codeEditor:popOutDocs")
                  })
                })
              })]
            }), (0, MC.jsx)("div", {
              className: "DocsSidebarResizeHandle",
              onMouseDown: oz
            }), (0, MC.jsxs)("div", {
              className: "DocsContentWrapper",
              children: [UC && zz > 0 && (0, MC.jsxs)("div", {
                className: "DocsMatchNav",
                children: [(0, MC.jsxs)("span", {
                  className: "DocsMatchNavLabel",
                  children: [EC + 1, " / ", zz]
                }), (0, MC.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    Qz(-1)
                  },
                  children: "\u25b2"
                }), (0, MC.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    Qz(1)
                  },
                  children: "\u25bc"
                })]
              }), (0, MC.jsx)("div", {
                className: "DocsContent",
                ref: dC,
                dangerouslySetInnerHTML: {
                  __html: Cz
                }
              })]
            })]
          })
        })
      }))
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);