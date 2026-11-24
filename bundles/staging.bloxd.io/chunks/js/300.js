export const id = 300;
export const ids = [300];
export const modules = {
  41369: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      default: () => ED
    });
    var pD = wD(58),
      sD = wD(4770),
      KD = wD(1687),
      rD = wD(1044),
      LD = wD.n(rD),
      cD = wD(1447),
      gD = wD(1200),
      RD = wD(4744),
      AD = wD(4757),
      UD = wD(4763),
      fD = wD(1096);

    function ID(DD) {
      return DD.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    RD.d.registerLanguage("javascript", AD.d), RD.d.registerLanguage("typescript", UD.e);

    function BD(DD, zD) {
      const wD = ID(DD).replace(/"/g, "&quot;");
      return `<button type="button" class="DocsCopyButton ${zD}" title="${wD}" aria-label="${wD}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5"/><path d="M10.5 3.5V1.5H1.5v9h2"/></svg><svg class="DocsCopiedIcon" viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 8.5l3.5 3.5 7.5-7.5"/></svg></button>`
    }

    function GD(DD, zD) {
      const wD = [],
        pD = DD.toLowerCase(),
        sD = zD.toLowerCase();
      let KD = 0;
      for (; KD < DD.length;) {
        const rD = pD.indexOf(sD, KD);
        if (-1 === rD) {
          wD.push(DD.slice(KD));
          break
        }
        rD > KD && wD.push(DD.slice(KD, rD)), wD.push((0, fD.jsx)("mark", {
          className: "DocsHighlight",
          children: DD.slice(rD, rD + zD.length)
        }, rD)), KD = rD + zD.length
      }
      return wD
    }
    var hD = wD(1057),
      nD = wD(1366),
      MD = wD(36841),
      OD = wD(36845);
    const JD = {
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
      ED = (0, pD.memo)((function(DD) {
        var zD, wD, rD, AD, UD, ED, QD;
        let {
          popOutDocs: XD,
          hideDocs: VD,
          tutorialEnabled: PD
        } = DD;
        const [CD, xD] = (0, pD.useState)(sD.c[0].id), TD = (0, pD.useRef)(null), bD = (0, pD.useRef)(null), [jD, dD] = (0, pD.useState)(""), [SD, iD] = (0, pD.useState)(0), [lD, WD] = (0, pD.useState)(null), [ND, ZD] = (0, pD.useState)(!1), [yD, kD] = (0, pD.useState)(160), mD = (0, pD.useRef)(!1), eD = (0, pD.useRef)(null), oD = (0, MD.i)("docsOverview"), [aD, uD] = (0, pD.useState)(0), vD = Object.values(JD).some((DD => (null === DD || void 0 === DD ? void 0 : DD.tabStep) === oD));
        (0, pD.useEffect)((() => {
          vD && jD.length > 0 && (dD(""), uD((DD => DD + 1)))
        }), [vD, jD]);
        const tD = jD.length > 0,
          FD = (0, pD.useMemo)((() => function(DD) {
            if (!DD) return [];
            const zD = DD.toLowerCase(),
              wD = [];
            for (const pD of sD.c) {
              const DD = pD.content.toLowerCase();
              let sD = 0,
                KD = -1,
                rD = 0,
                LD = DD.indexOf(zD, rD);
              for (; - 1 !== LD;) - 1 === KD && (KD = LD), sD++, rD = LD + zD.length, LD = DD.indexOf(zD, rD);
              if (0 === sD) continue;
              const cD = Math.max(0, KD - 40),
                gD = Math.min(pD.content.length, KD + zD.length + 40),
                RD = (cD > 0 ? "..." : "") + pD.content.slice(cD, gD).replace(/\n/g, " ") + (gD < pD.content.length ? "..." : "");
              wD.push({
                doc: pD,
                matchCount: sD,
                snippet: RD
              })
            }
            return wD.sort(((DD, zD) => zD.matchCount - DD.matchCount)), wD
          }(jD)), [jD]),
          YD = tD ? null !== (zD = null !== (wD = null === (rD = FD.find((DD => DD.doc.id === CD))) || void 0 === rD ? void 0 : rD.doc) && void 0 !== wD ? wD : null === (AD = FD[0]) || void 0 === AD ? void 0 : AD.doc) && void 0 !== zD ? zD : null : null !== (UD = sD.c.find((DD => DD.id === CD))) && void 0 !== UD ? UD : sD.c[0],
          {
            t: HD
          } = (0, gD.E)(),
          qD = HD("codeEditor:copySnippet"),
          Dz = (0, pD.useMemo)((() => YD ? function(DD, zD, wD, pD) {
            let sD = zD;
            sD = sD.replace(/\r\n/g, "\n");
            const KD = [];
            sD = sD.replace(/```(\w*)\n([\s\S]*?)```/g, ((DD, zD, pD) => {
              const sD = KD.length;
              let rD = ID(pD);
              try {
                rD = RD.d.highlight(pD.trimEnd(), {
                  language: zD
                }).value
              } catch (LD) {
                console.warn("Could not highlight documentation code block", LD)
              }
              return KD.push(`<div class="DocsCodeBlockRow"><pre class="DocsCodeBlock" data-lang="${zD}"><code>${rD}</code></pre>${BD(wD,"DocsCopyBlock")}</div>`), `\0PLACEHOLDER_${sD}\0`
            })), sD = sD.replace(/(`{1,2})([^\n]+?)\1(?!`)/g, ((zD, pD, sD) => {
              const rD = KD.length,
                LD = 2 === pD.length ? sD.replace(/^ (.*) $/, "$1") : sD;
              let cD = ID(LD);
              try {
                "apiReference" !== DD && "callbacks" !== DD || (cD = RD.d.highlight(LD.trimEnd().replaceAll("\\|", "|"), {
                  language: "typescript"
                }).value)
              } catch (gD) {
                console.warn("Could not highlight documentation snippet", gD)
              }
              return KD.push(`<span class="DocsInlineCodeRow"><code class="DocsInlineCode">${cD}</code>${BD(wD,"DocsCopyInline")}</span>`), `\0PLACEHOLDER_${rD}\0`
            })), sD = ID(sD), sD = sD.replace(/^#### (.+)$/gm, '<h4 class="DocsH4">$1</h4>'), sD = sD.replace(/^### (.+)$/gm, '<h3 class="DocsH3">$1</h3>'), sD = sD.replace(/^## (.+)$/gm, '<h2 class="DocsH2">$1</h2>'), sD = sD.replace(/^# (.+)$/gm, '<h1 class="DocsH1">$1</h1>'), sD = sD.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"), sD = sD.replace(/\[([^\]]+)\]\(([^)]+)\)/g, ((DD, zD, wD) => wD.startsWith("#") ? `<a class="DocsAnchor" data-id="${wD}">${zD}</a>` : `<a href="${wD}" target="_blank" rel="noopener noreferrer">${zD}</a>`)), sD = sD.replace(/^(\|.+\|)\n(\|[\s:\-|]+\|)\n((?:\|.+\|\s*\r?\n?)*)/gm, ((DD, zD, wD, pD) => `<table class="DocsTable"><thead><tr>${zD.split("|").slice(1,-1).map((DD=>`<th>${DD.trim()}</th>`)).join("")}</tr></thead><tbody>${pD.trim().split("\n").map((DD=>`<tr>${DD.split("|").slice(1,-1).map((DD=>`<td>${DD.trim()}</td>`)).join("")}</tr>`)).join("")}</tbody></table>`)), sD = sD.replace(/(?:^[ \t]*([*-])[ \t]+.+(?:\n|$))+/gm, ((DD, zD) => function(DD, zD) {
              const wD = "*" === zD,
                pD = [];
              for (const LD of DD.split("\n")) {
                const DD = LD.match(/^([ \t]*)(?:[*-])[ \t]+(.+)$/);
                DD && pD.push({
                  indent: DD[1].replace(/\t/g, "  ").length,
                  content: DD[2]
                })
              }
              let sD = "";
              const KD = [],
                rD = wD ? "ol" : "ul";
              for (const {
                  indent: LD,
                  content: cD
                }
                of pD) {
                for (; KD.length > 0 && LD < KD[KD.length - 1];) sD += `</${rD}></li>`, KD.pop();
                (0 === KD.length || LD > KD[KD.length - 1]) && (KD.length > 0 && (sD = sD.replace(/<\/li>$/, "")), sD += `<${rD} class="DocsList">`, KD.push(LD)), sD += `<li class="DocsListItem">${cD}</li>`
              }
              for (; KD.length > 0;) sD += `</${rD}>`, KD.pop(), KD.length > 0 && (sD += "</li>");
              return sD
            }(DD, zD))), sD = sD.replace(/\n{2,}/g, "\n<br/>\n");
            for (let rD = 0; rD < KD.length; rD++) sD = sD.replace(`\0PLACEHOLDER_${rD}\0`, KD[rD]);
            if (pD) {
              const DD = ID(pD).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                zD = new RegExp(DD, "gi");
              sD = sD.replace(/([^<>]+)(?=<|$)/g, (DD => DD.replace(zD, (DD => `<mark class="DocsHighlight">${DD}</mark>`))))
            }
            return sD
          }(YD.id, YD.content, qD, tD ? jD : void 0) : ""), [YD, qD, tD, jD]);
        (0, pD.useEffect)((() => {
          const DD = bD.current;
          if (!DD) return;
          const zD = DD => {
            var zD, wD, pD, sD, KD;
            const rD = null === (zD = (wD = DD.target).closest) || void 0 === zD ? void 0 : zD.call(wD, ".DocsCopyButton");
            if (!rD) return;
            DD.preventDefault(), DD.stopPropagation();
            const LD = null !== (pD = null === (sD = rD.parentElement) || void 0 === sD || null === (KD = sD.querySelector("code")) || void 0 === KD ? void 0 : KD.textContent) && void 0 !== pD ? pD : "";
            navigator.clipboard.writeText(LD.trimEnd()).then((() => {
              rD.classList.add("Copied"), setTimeout((() => {
                rD.classList.remove("Copied")
              }), 1500)
            })).catch((DD => {
              console.warn("Could not copy documentation code", DD)
            }))
          };
          return DD.addEventListener("click", zD, !0), () => {
            DD.removeEventListener("click", zD, !0)
          }
        }), []);
        const [zz, wz] = (0, pD.useState)(0);
        (0, pD.useEffect)((() => {
          if (!tD || !bD.current) return void wz(0);
          const DD = bD.current.querySelectorAll(".DocsHighlight").length;
          wz(DD)
        }), [tD, Dz]), (0, pD.useEffect)((() => {
          if (null === lD || !bD.current) return;
          WD(null);
          const DD = bD.current.querySelectorAll(".DocsHighlight");
          if (0 === DD.length) return;
          const zD = Math.min(lD, DD.length - 1);
          iD(zD), DD.forEach((DD => {
            DD.classList.remove("DocsHighlightActive")
          })), DD[zD].classList.add("DocsHighlightActive"), DD[zD].scrollIntoView({
            block: "center",
            behavior: "smooth"
          })
        }), [lD, Dz]);
        const pz = (0, pD.useCallback)((DD => {
            if (!bD.current) return;
            const zD = bD.current.querySelectorAll(".DocsHighlight");
            if (0 === zD.length) return;
            const wD = (SD + DD + zD.length) % zD.length;
            iD(wD), WD(wD)
          }), [SD]),
          sz = (0, pD.useCallback)((DD => {
            var zD;
            const wD = null === (zD = JD[DD]) || void 0 === zD ? void 0 : zD.tabStep;
            wD && wD === oD && (0, OD.f)(wD), DD !== CD ? (ZD(!0), xD(DD), iD(0), bD.current && (bD.current.scrollTop = 0), tD && WD(0)) : ZD(!ND)
          }), [tD, CD, ND, oD]),
          Kz = (0, pD.useCallback)((DD => {
            var zD;
            const wD = Array.from((null === (zD = bD.current) || void 0 === zD ? void 0 : zD.querySelectorAll(".DocsH2, .DocsH3")) || []).find((zD => {
              var wD;
              return null === (wD = zD.textContent) || void 0 === wD ? void 0 : wD.includes(DD)
            }));
            wD && wD.scrollIntoView({
              block: "start",
              behavior: "smooth"
            })
          }), [bD]),
          rz = (0, pD.useCallback)((DD => {
            var zD, wD;
            const pD = null !== (zD = null === (wD = TD.current) || void 0 === wD ? void 0 : wD.clientWidth) && void 0 !== zD ? zD : window.innerWidth,
              sD = Math.max(120, pD - 200);
            return Math.min(Math.max(DD, 120), sD)
          }), []),
          Lz = (0, pD.useCallback)((() => {
            var DD;
            mD.current && (mD.current = !1, null === (DD = TD.current) || void 0 === DD || DD.classList.remove("DocsSidebarResizing"))
          }), []),
          cz = (0, pD.useCallback)((DD => {
            var zD;
            DD.preventDefault(), mD.current = !0, null === (zD = TD.current) || void 0 === zD || zD.classList.add("DocsSidebarResizing")
          }), []);
        (0, pD.useEffect)((() => {
          const DD = TD.current,
            zD = DD => {
              if (!mD.current || !TD.current) return;
              const zD = TD.current.getBoundingClientRect().left;
              kD(rz(DD.clientX - zD))
            };
          return window.addEventListener("mousemove", zD), window.addEventListener("mouseup", Lz), () => {
            window.removeEventListener("mousemove", zD), window.removeEventListener("mouseup", Lz), null === DD || void 0 === DD || DD.classList.remove("DocsSidebarResizing")
          }
        }), [rz, Lz]);
        const gz = (0, pD.useCallback)((DD => {
          if (DD) {
            const [zD, wD] = DD.slice(1).split("-");
            wD && (eD.current = {
              docId: zD,
              subsection: wD
            }), zD && sz(zD)
          }
        }), [sz]);
        (0, pD.useEffect)((() => {
          const DD = eD.current;
          DD && CD === DD.docId && (setTimeout((() => {
            Kz(DD.subsection)
          }), 0), eD.current = null)
        })), (0, pD.useEffect)((() => {
          if (!bD.current) return;
          bD.current.querySelectorAll("a.DocsAnchor").forEach((DD => {
            DD.addEventListener("click", (zD => {
              zD.preventDefault(), gz(DD.dataset.id)
            }))
          }))
        }), [CD, gz]);
        const Rz = Object.values(JD).find((DD => (null === DD || void 0 === DD ? void 0 : DD.pageStep) === oD));
        return (0, fD.jsx)(MD.h, {
          tutorial: "docsOverview",
          step: null !== (ED = null === Rz || void 0 === Rz ? void 0 : Rz.pageStep) && void 0 !== ED ? ED : "docsPanel",
          text: HD(null !== (QD = null === Rz || void 0 === Rz ? void 0 : Rz.pageText) && void 0 !== QD ? QD : "codeEditor:tutorialDocsPanel"),
          enabled: PD,
          placement: "left",
          onPrevious: Rz ? void 0 : VD,
          children: (0, fD.jsxs)("div", {
            className: "DocsPanel",
            ref: TD,
            children: [(0, fD.jsxs)("div", {
              className: "DocsSidebar",
              style: {
                width: yD,
                minWidth: yD,
                maxWidth: yD
              },
              children: [(0, fD.jsx)(KD.e, {
                className: "DocsSearch",
                placeholderText: "\ud83d\udd0e Search docs...",
                onValueChange: DD => {
                  dD(DD), iD(0), WD(0)
                }
              }, aD), (0, fD.jsx)("div", {
                className: "DocsNavList",
                children: tD ? FD.map((DD => (0, fD.jsxs)("div", {
                  className: LD()("DocsNavItem", "SearchResult", {
                    Active: DD.doc.id === (null === YD || void 0 === YD ? void 0 : YD.id)
                  }),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    sz(DD.doc.id)
                  },
                  children: [(0, fD.jsxs)("div", {
                    className: "SearchResultTitle",
                    children: [DD.doc.title, (0, fD.jsx)("span", {
                      className: "SearchResultCount",
                      children: DD.matchCount
                    })]
                  }), (0, fD.jsx)("div", {
                    className: "SearchResultSnippet",
                    children: GD(DD.snippet, jD)
                  })]
                }, DD.doc.id))) : sD.c.map((DD => {
                  const zD = (0, fD.jsxs)("div", {
                      className: LD()("DocsNavItem", {
                        Active: DD.id === (null === YD || void 0 === YD ? void 0 : YD.id)
                      }),
                      "data-pad-focusable": !0,
                      onClick: () => {
                        sz(DD.id)
                      },
                      children: [(0, fD.jsx)("span", {
                        className: "DocsNavItemTitle",
                        children: DD.title
                      }), DD.subsections && DD.id === (null === YD || void 0 === YD ? void 0 : YD.id) && ND && (0, fD.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, fD.jsx)(hD.e, {
                          name: "angle-down"
                        })
                      }), DD.subsections && (DD.id !== (null === YD || void 0 === YD ? void 0 : YD.id) || !ND) && (0, fD.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, fD.jsx)(hD.e, {
                          name: "angle-up"
                        })
                      })]
                    }),
                    wD = JD[DD.id];
                  return (0, fD.jsxs)(pD.Fragment, {
                    children: [wD && (0, fD.jsx)(MD.h, {
                      tutorial: "docsOverview",
                      step: wD.tabStep,
                      text: HD(wD.tabText),
                      enabled: PD,
                      placement: "left",
                      waitForClick: !0,
                      children: zD
                    }), !wD && zD, ND && DD.subsections && DD.id === (null === YD || void 0 === YD ? void 0 : YD.id) && DD.subsections.map((DD => (0, fD.jsx)("div", {
                      className: "DocsNavItem DocsSubsection",
                      "data-pad-focusable": !0,
                      onClick: () => {
                        Kz(DD)
                      },
                      children: DD
                    }, DD)))]
                  }, DD.id)
                }))
              }), (0, fD.jsx)("div", {
                className: "DocsSidebarButtonContainer",
                children: (0, fD.jsx)(nD.f, {
                  tooltipInner: HD("codeEditor:popOutDocsTooltip"),
                  placement: "top",
                  children: (0, fD.jsx)(cD.f, {
                    className: "DocsSidebarButton",
                    onClick: XD,
                    children: HD("codeEditor:popOutDocs")
                  })
                })
              })]
            }), (0, fD.jsx)("div", {
              className: "DocsSidebarResizeHandle",
              onMouseDown: cz
            }), (0, fD.jsxs)("div", {
              className: "DocsContentWrapper",
              children: [tD && zz > 0 && (0, fD.jsxs)("div", {
                className: "DocsMatchNav",
                children: [(0, fD.jsxs)("span", {
                  className: "DocsMatchNavLabel",
                  children: [SD + 1, " / ", zz]
                }), (0, fD.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    pz(-1)
                  },
                  children: "\u25b2"
                }), (0, fD.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    pz(1)
                  },
                  children: "\u25bc"
                })]
              }), (0, fD.jsx)("div", {
                className: "DocsContent",
                ref: bD,
                dangerouslySetInnerHTML: {
                  __html: Dz
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