export const id = 291;
export const ids = [291];
export const modules = {
  40523: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      default: () => nD
    });
    var ID = cD(53),
      pD = cD(4537),
      iD = cD(1655),
      fD = cD(1049),
      bD = cD.n(fD),
      QD = cD(1442),
      wD = cD(1192),
      SD = cD(4512),
      BD = cD(4524),
      yD = cD(4526),
      MD = cD(1093);

    function tD(DD) {
      return DD.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    SD.c.registerLanguage("javascript", BD.e), SD.c.registerLanguage("typescript", yD.d);

    function ZD(DD, CD) {
      const cD = tD(DD).replace(/"/g, "&quot;");
      return `<button type="button" class="DocsCopyButton ${CD}" title="${cD}" aria-label="${cD}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5"/><path d="M10.5 3.5V1.5H1.5v9h2"/></svg><svg class="DocsCopiedIcon" viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 8.5l3.5 3.5 7.5-7.5"/></svg></button>`
    }

    function oD(DD, CD) {
      const cD = [],
        ID = DD.toLowerCase(),
        pD = CD.toLowerCase();
      let iD = 0;
      for (; iD < DD.length;) {
        const fD = ID.indexOf(pD, iD);
        if (-1 === fD) {
          cD.push(DD.slice(iD));
          break
        }
        fD > iD && cD.push(DD.slice(iD, fD)), cD.push((0, MD.jsx)("mark", {
          className: "DocsHighlight",
          children: DD.slice(fD, fD + CD.length)
        }, fD)), iD = fD + CD.length
      }
      return cD
    }
    var vD = cD(1064),
      ND = cD(1356),
      gD = cD(36235),
      XD = cD(36240);
    const mD = {
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
      nD = (0, ID.memo)((function(DD) {
        var CD, cD, fD, BD, yD, nD, OD;
        let {
          popOutDocs: PD,
          hideDocs: HD,
          tutorialEnabled: UD
        } = DD;
        const [xD, qD] = (0, ID.useState)(pD.c[0].id), JD = (0, ID.useRef)(null), KD = (0, ID.useRef)(null), [aD, VD] = (0, ID.useState)(""), [zD, jD] = (0, ID.useState)(0), [lD, LD] = (0, ID.useState)(null), [TD, GD] = (0, ID.useState)(!1), [RD, kD] = (0, ID.useState)(160), dD = (0, ID.useRef)(!1), YD = (0, ID.useRef)(null), WD = (0, gD.n)("docsOverview"), [sD, ED] = (0, ID.useState)(0), eD = Object.values(mD).some((DD => (null === DD || void 0 === DD ? void 0 : DD.tabStep) === WD));
        (0, ID.useEffect)((() => {
          eD && aD.length > 0 && (VD(""), ED((DD => DD + 1)))
        }), [eD, aD]);
        const uD = aD.length > 0,
          hD = (0, ID.useMemo)((() => function(DD) {
            if (!DD) return [];
            const CD = DD.toLowerCase(),
              cD = [];
            for (const ID of pD.c) {
              const DD = ID.content.toLowerCase();
              let pD = 0,
                iD = -1,
                fD = 0,
                bD = DD.indexOf(CD, fD);
              for (; - 1 !== bD;) - 1 === iD && (iD = bD), pD++, fD = bD + CD.length, bD = DD.indexOf(CD, fD);
              if (0 === pD) continue;
              const QD = Math.max(0, iD - 40),
                wD = Math.min(ID.content.length, iD + CD.length + 40),
                SD = (QD > 0 ? "..." : "") + ID.content.slice(QD, wD).replace(/\n/g, " ") + (wD < ID.content.length ? "..." : "");
              cD.push({
                doc: ID,
                matchCount: pD,
                snippet: SD
              })
            }
            return cD.sort(((DD, CD) => CD.matchCount - DD.matchCount)), cD
          }(aD)), [aD]),
          rD = uD ? null !== (CD = null !== (cD = null === (fD = hD.find((DD => DD.doc.id === xD))) || void 0 === fD ? void 0 : fD.doc) && void 0 !== cD ? cD : null === (BD = hD[0]) || void 0 === BD ? void 0 : BD.doc) && void 0 !== CD ? CD : null : null !== (yD = pD.c.find((DD => DD.id === xD))) && void 0 !== yD ? yD : pD.c[0],
          {
            t: AD
          } = (0, wD.F)(),
          FD = AD("codeEditor:copySnippet"),
          DC = (0, ID.useMemo)((() => rD ? function(DD, CD, cD, ID) {
            let pD = CD;
            pD = pD.replace(/\r\n/g, "\n");
            const iD = [];
            pD = pD.replace(/```(\w*)\n([\s\S]*?)```/g, ((DD, CD, ID) => {
              const pD = iD.length;
              let fD = tD(ID);
              try {
                fD = SD.c.highlight(ID.trimEnd(), {
                  language: CD
                }).value
              } catch (bD) {
                console.warn("Could not highlight documentation code block", bD)
              }
              return iD.push(`<div class="DocsCodeBlockRow"><pre class="DocsCodeBlock" data-lang="${CD}"><code>${fD}</code></pre>${ZD(cD,"DocsCopyBlock")}</div>`), `\0PLACEHOLDER_${pD}\0`
            })), pD = pD.replace(/(`{1,2})([^\n]+?)\1(?!`)/g, ((CD, ID, pD) => {
              const fD = iD.length,
                bD = 2 === ID.length ? pD.replace(/^ (.*) $/, "$1") : pD;
              let QD = tD(bD);
              try {
                "apiReference" !== DD && "callbacks" !== DD || (QD = SD.c.highlight(bD.trimEnd().replaceAll("\\|", "|"), {
                  language: "typescript"
                }).value)
              } catch (wD) {
                console.warn("Could not highlight documentation snippet", wD)
              }
              return iD.push(`<span class="DocsInlineCodeRow"><code class="DocsInlineCode">${QD}</code>${ZD(cD,"DocsCopyInline")}</span>`), `\0PLACEHOLDER_${fD}\0`
            })), pD = tD(pD), pD = pD.replace(/^#### (.+)$/gm, '<h4 class="DocsH4">$1</h4>'), pD = pD.replace(/^### (.+)$/gm, '<h3 class="DocsH3">$1</h3>'), pD = pD.replace(/^## (.+)$/gm, '<h2 class="DocsH2">$1</h2>'), pD = pD.replace(/^# (.+)$/gm, '<h1 class="DocsH1">$1</h1>'), pD = pD.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"), pD = pD.replace(/\[([^\]]+)\]\(([^)]+)\)/g, ((DD, CD, cD) => cD.startsWith("#") ? `<a class="DocsAnchor" data-id="${cD}">${CD}</a>` : `<a href="${cD}" target="_blank" rel="noopener noreferrer">${CD}</a>`)), pD = pD.replace(/^(\|.+\|)\n(\|[\s:\-|]+\|)\n((?:\|.+\|\s*\r?\n?)*)/gm, ((DD, CD, cD, ID) => `<table class="DocsTable"><thead><tr>${CD.split("|").slice(1,-1).map((DD=>`<th>${DD.trim()}</th>`)).join("")}</tr></thead><tbody>${ID.trim().split("\n").map((DD=>`<tr>${DD.split("|").slice(1,-1).map((DD=>`<td>${DD.trim()}</td>`)).join("")}</tr>`)).join("")}</tbody></table>`)), pD = pD.replace(/(?:^[ \t]*([*-])[ \t]+.+(?:\n|$))+/gm, ((DD, CD) => function(DD, CD) {
              const cD = "*" === CD,
                ID = [];
              for (const bD of DD.split("\n")) {
                const DD = bD.match(/^([ \t]*)(?:[*-])[ \t]+(.+)$/);
                DD && ID.push({
                  indent: DD[1].replace(/\t/g, "  ").length,
                  content: DD[2]
                })
              }
              let pD = "";
              const iD = [],
                fD = cD ? "ol" : "ul";
              for (const {
                  indent: bD,
                  content: QD
                }
                of ID) {
                for (; iD.length > 0 && bD < iD[iD.length - 1];) pD += `</${fD}></li>`, iD.pop();
                (0 === iD.length || bD > iD[iD.length - 1]) && (iD.length > 0 && (pD = pD.replace(/<\/li>$/, "")), pD += `<${fD} class="DocsList">`, iD.push(bD)), pD += `<li class="DocsListItem">${QD}</li>`
              }
              for (; iD.length > 0;) pD += `</${fD}>`, iD.pop(), iD.length > 0 && (pD += "</li>");
              return pD
            }(DD, CD))), pD = pD.replace(/\n{2,}/g, "\n<br/>\n");
            for (let fD = 0; fD < iD.length; fD++) pD = pD.replace(`\0PLACEHOLDER_${fD}\0`, iD[fD]);
            if (ID) {
              const DD = tD(ID).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                CD = new RegExp(DD, "gi");
              pD = pD.replace(/([^<>]+)(?=<|$)/g, (DD => DD.replace(CD, (DD => `<mark class="DocsHighlight">${DD}</mark>`))))
            }
            return pD
          }(rD.id, rD.content, FD, uD ? aD : void 0) : ""), [rD, FD, uD, aD]);
        (0, ID.useEffect)((() => {
          const DD = KD.current;
          if (!DD) return;
          const CD = DD => {
            var CD, cD, ID, pD, iD;
            const fD = null === (CD = (cD = DD.target).closest) || void 0 === CD ? void 0 : CD.call(cD, ".DocsCopyButton");
            if (!fD) return;
            DD.preventDefault(), DD.stopPropagation();
            const bD = null !== (ID = null === (pD = fD.parentElement) || void 0 === pD || null === (iD = pD.querySelector("code")) || void 0 === iD ? void 0 : iD.textContent) && void 0 !== ID ? ID : "";
            navigator.clipboard.writeText(bD.trimEnd()).then((() => {
              fD.classList.add("Copied"), setTimeout((() => {
                fD.classList.remove("Copied")
              }), 1500)
            })).catch((DD => {
              console.warn("Could not copy documentation code", DD)
            }))
          };
          return DD.addEventListener("click", CD, !0), () => {
            DD.removeEventListener("click", CD, !0)
          }
        }), []);
        const [CC, cC] = (0, ID.useState)(0);
        (0, ID.useEffect)((() => {
          if (!uD || !KD.current) return void cC(0);
          const DD = KD.current.querySelectorAll(".DocsHighlight").length;
          cC(DD)
        }), [uD, DC]), (0, ID.useEffect)((() => {
          if (null === lD || !KD.current) return;
          LD(null);
          const DD = KD.current.querySelectorAll(".DocsHighlight");
          if (0 === DD.length) return;
          const CD = Math.min(lD, DD.length - 1);
          jD(CD), DD.forEach((DD => {
            DD.classList.remove("DocsHighlightActive")
          })), DD[CD].classList.add("DocsHighlightActive"), DD[CD].scrollIntoView({
            block: "center",
            behavior: "smooth"
          })
        }), [lD, DC]);
        const IC = (0, ID.useCallback)((DD => {
            if (!KD.current) return;
            const CD = KD.current.querySelectorAll(".DocsHighlight");
            if (0 === CD.length) return;
            const cD = (zD + DD + CD.length) % CD.length;
            jD(cD), LD(cD)
          }), [zD]),
          pC = (0, ID.useCallback)((DD => {
            var CD;
            const cD = null === (CD = mD[DD]) || void 0 === CD ? void 0 : CD.tabStep;
            cD && cD === WD && (0, XD.f)(cD), DD !== xD ? (GD(!0), qD(DD), jD(0), KD.current && (KD.current.scrollTop = 0), uD && LD(0)) : GD(!TD)
          }), [uD, xD, TD, WD]),
          iC = (0, ID.useCallback)((DD => {
            var CD;
            const cD = Array.from((null === (CD = KD.current) || void 0 === CD ? void 0 : CD.querySelectorAll(".DocsH2, .DocsH3")) || []).find((CD => {
              var cD;
              return null === (cD = CD.textContent) || void 0 === cD ? void 0 : cD.includes(DD)
            }));
            cD && cD.scrollIntoView({
              block: "start",
              behavior: "smooth"
            })
          }), [KD]),
          fC = (0, ID.useCallback)((DD => {
            var CD, cD;
            const ID = null !== (CD = null === (cD = JD.current) || void 0 === cD ? void 0 : cD.clientWidth) && void 0 !== CD ? CD : window.innerWidth,
              pD = Math.max(120, ID - 200);
            return Math.min(Math.max(DD, 120), pD)
          }), []),
          bC = (0, ID.useCallback)((() => {
            var DD;
            dD.current && (dD.current = !1, null === (DD = JD.current) || void 0 === DD || DD.classList.remove("DocsSidebarResizing"))
          }), []),
          QC = (0, ID.useCallback)((DD => {
            var CD;
            DD.preventDefault(), dD.current = !0, null === (CD = JD.current) || void 0 === CD || CD.classList.add("DocsSidebarResizing")
          }), []);
        (0, ID.useEffect)((() => {
          const DD = JD.current,
            CD = DD => {
              if (!dD.current || !JD.current) return;
              const CD = JD.current.getBoundingClientRect().left;
              kD(fC(DD.clientX - CD))
            };
          return window.addEventListener("mousemove", CD), window.addEventListener("mouseup", bC), () => {
            window.removeEventListener("mousemove", CD), window.removeEventListener("mouseup", bC), null === DD || void 0 === DD || DD.classList.remove("DocsSidebarResizing")
          }
        }), [fC, bC]);
        const wC = (0, ID.useCallback)((DD => {
          if (DD) {
            const [CD, cD] = DD.slice(1).split("-");
            cD && (YD.current = {
              docId: CD,
              subsection: cD
            }), CD && pC(CD)
          }
        }), [pC]);
        (0, ID.useEffect)((() => {
          const DD = YD.current;
          DD && xD === DD.docId && (setTimeout((() => {
            iC(DD.subsection)
          }), 0), YD.current = null)
        })), (0, ID.useEffect)((() => {
          if (!KD.current) return;
          KD.current.querySelectorAll("a.DocsAnchor").forEach((DD => {
            DD.addEventListener("click", (CD => {
              CD.preventDefault(), wC(DD.dataset.id)
            }))
          }))
        }), [xD, wC]);
        const SC = Object.values(mD).find((DD => (null === DD || void 0 === DD ? void 0 : DD.pageStep) === WD));
        return (0, MD.jsx)(gD.l, {
          tutorial: "docsOverview",
          step: null !== (nD = null === SC || void 0 === SC ? void 0 : SC.pageStep) && void 0 !== nD ? nD : "docsPanel",
          text: AD(null !== (OD = null === SC || void 0 === SC ? void 0 : SC.pageText) && void 0 !== OD ? OD : "codeEditor:tutorialDocsPanel"),
          enabled: UD,
          placement: "left",
          onPrevious: SC ? void 0 : HD,
          children: (0, MD.jsxs)("div", {
            className: "DocsPanel",
            ref: JD,
            children: [(0, MD.jsxs)("div", {
              className: "DocsSidebar",
              style: {
                width: RD,
                minWidth: RD,
                maxWidth: RD
              },
              children: [(0, MD.jsx)(iD.b, {
                className: "DocsSearch",
                placeholderText: "\ud83d\udd0e Search docs...",
                onValueChange: DD => {
                  VD(DD), jD(0), LD(0)
                }
              }, sD), (0, MD.jsx)("div", {
                className: "DocsNavList",
                children: uD ? hD.map((DD => (0, MD.jsxs)("div", {
                  className: bD()("DocsNavItem", "SearchResult", {
                    Active: DD.doc.id === (null === rD || void 0 === rD ? void 0 : rD.id)
                  }),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    pC(DD.doc.id)
                  },
                  children: [(0, MD.jsxs)("div", {
                    className: "SearchResultTitle",
                    children: [DD.doc.title, (0, MD.jsx)("span", {
                      className: "SearchResultCount",
                      children: DD.matchCount
                    })]
                  }), (0, MD.jsx)("div", {
                    className: "SearchResultSnippet",
                    children: oD(DD.snippet, aD)
                  })]
                }, DD.doc.id))) : pD.c.map((DD => {
                  const CD = (0, MD.jsxs)("div", {
                      className: bD()("DocsNavItem", {
                        Active: DD.id === (null === rD || void 0 === rD ? void 0 : rD.id)
                      }),
                      "data-pad-focusable": !0,
                      onClick: () => {
                        pC(DD.id)
                      },
                      children: [(0, MD.jsx)("span", {
                        className: "DocsNavItemTitle",
                        children: DD.title
                      }), DD.subsections && DD.id === (null === rD || void 0 === rD ? void 0 : rD.id) && TD && (0, MD.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, MD.jsx)(vD.c, {
                          name: "angle-down"
                        })
                      }), DD.subsections && (DD.id !== (null === rD || void 0 === rD ? void 0 : rD.id) || !TD) && (0, MD.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, MD.jsx)(vD.c, {
                          name: "angle-up"
                        })
                      })]
                    }),
                    cD = mD[DD.id];
                  return (0, MD.jsxs)(ID.Fragment, {
                    children: [cD && (0, MD.jsx)(gD.l, {
                      tutorial: "docsOverview",
                      step: cD.tabStep,
                      text: AD(cD.tabText),
                      enabled: UD,
                      placement: "left",
                      waitForClick: !0,
                      children: CD
                    }), !cD && CD, TD && DD.subsections && DD.id === (null === rD || void 0 === rD ? void 0 : rD.id) && DD.subsections.map((DD => (0, MD.jsx)("div", {
                      className: "DocsNavItem DocsSubsection",
                      "data-pad-focusable": !0,
                      onClick: () => {
                        iC(DD)
                      },
                      children: DD
                    }, DD)))]
                  }, DD.id)
                }))
              }), (0, MD.jsx)("div", {
                className: "DocsSidebarButtonContainer",
                children: (0, MD.jsx)(ND.f, {
                  tooltipInner: AD("codeEditor:popOutDocsTooltip"),
                  placement: "top",
                  children: (0, MD.jsx)(QD.i, {
                    className: "DocsSidebarButton",
                    onClick: PD,
                    children: AD("codeEditor:popOutDocs")
                  })
                })
              })]
            }), (0, MD.jsx)("div", {
              className: "DocsSidebarResizeHandle",
              onMouseDown: QC
            }), (0, MD.jsxs)("div", {
              className: "DocsContentWrapper",
              children: [uD && CC > 0 && (0, MD.jsxs)("div", {
                className: "DocsMatchNav",
                children: [(0, MD.jsxs)("span", {
                  className: "DocsMatchNavLabel",
                  children: [zD + 1, " / ", CC]
                }), (0, MD.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    IC(-1)
                  },
                  children: "\u25b2"
                }), (0, MD.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    IC(1)
                  },
                  children: "\u25bc"
                })]
              }), (0, MD.jsx)("div", {
                className: "DocsContent",
                ref: KD,
                dangerouslySetInnerHTML: {
                  __html: DC
                }
              })]
            })]
          })
        })
      }))
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);