export const id = 305;
export const ids = [305];
export const modules = {
  41571: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      default: () => SB
    });
    var QB = zB(62),
      nB = zB(4829),
      dB = zB(1710),
      IB = zB(1091),
      NB = zB.n(IB),
      uB = zB(1478),
      UB = zB(1240),
      aB = zB(4808),
      pB = zB(4817),
      rB = zB(4821),
      sB = zB(1148);

    function JB(BB) {
      return BB.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    aB.c.registerLanguage("javascript", pB.c), aB.c.registerLanguage("typescript", rB.b);

    function mB(BB, jB) {
      const zB = JB(BB).replace(/"/g, "&quot;");
      return `<button type="button" class="DocsCopyButton ${jB}" title="${zB}" aria-label="${zB}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5"/><path d="M10.5 3.5V1.5H1.5v9h2"/></svg><svg class="DocsCopiedIcon" viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 8.5l3.5 3.5 7.5-7.5"/></svg></button>`
    }

    function yB(BB, jB) {
      const zB = [],
        QB = BB.toLowerCase(),
        nB = jB.toLowerCase();
      let dB = 0;
      for (; dB < BB.length;) {
        const IB = QB.indexOf(nB, dB);
        if (-1 === IB) {
          zB.push(BB.slice(dB));
          break
        }
        IB > dB && zB.push(BB.slice(dB, IB)), zB.push((0, sB.jsx)("mark", {
          className: "DocsHighlight",
          children: BB.slice(IB, IB + jB.length)
        }, IB)), dB = IB + jB.length
      }
      return zB
    }
    var kB = zB(1108),
      GB = zB(1388),
      LB = zB(36946),
      gB = zB(36955);
    const tB = {
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
      SB = (0, QB.memo)((function(BB) {
        var jB, zB, IB, pB, rB, SB, MB;
        let {
          popOutDocs: EB,
          hideDocs: iB,
          tutorialEnabled: qB
        } = BB;
        const [fB, oB] = (0, QB.useState)(nB.c[0].id), HB = (0, QB.useRef)(null), DB = (0, QB.useRef)(null), [FB, YB] = (0, QB.useState)(""), [VB, hB] = (0, QB.useState)(0), [XB, ZB] = (0, QB.useState)(null), [AB, TB] = (0, QB.useState)(!1), [PB, WB] = (0, QB.useState)(160), eB = (0, QB.useRef)(!1), lB = (0, QB.useRef)(null), wB = (0, LB.l)("docsOverview"), [xB, KB] = (0, QB.useState)(0), CB = Object.values(tB).some((BB => (null === BB || void 0 === BB ? void 0 : BB.tabStep) === wB));
        (0, QB.useEffect)((() => {
          CB && FB.length > 0 && (YB(""), KB((BB => BB + 1)))
        }), [CB, FB]);
        const cB = FB.length > 0,
          bB = (0, QB.useMemo)((() => function(BB) {
            if (!BB) return [];
            const jB = BB.toLowerCase(),
              zB = [];
            for (const QB of nB.c) {
              const BB = QB.content.toLowerCase();
              let nB = 0,
                dB = -1,
                IB = 0,
                NB = BB.indexOf(jB, IB);
              for (; - 1 !== NB;) - 1 === dB && (dB = NB), nB++, IB = NB + jB.length, NB = BB.indexOf(jB, IB);
              if (0 === nB) continue;
              const uB = Math.max(0, dB - 40),
                UB = Math.min(QB.content.length, dB + jB.length + 40),
                aB = (uB > 0 ? "..." : "") + QB.content.slice(uB, UB).replace(/\n/g, " ") + (UB < QB.content.length ? "..." : "");
              zB.push({
                doc: QB,
                matchCount: nB,
                snippet: aB
              })
            }
            return zB.sort(((BB, jB) => jB.matchCount - BB.matchCount)), zB
          }(FB)), [FB]),
          vB = cB ? null !== (jB = null !== (zB = null === (IB = bB.find((BB => BB.doc.id === fB))) || void 0 === IB ? void 0 : IB.doc) && void 0 !== zB ? zB : null === (pB = bB[0]) || void 0 === pB ? void 0 : pB.doc) && void 0 !== jB ? jB : null : null !== (rB = nB.c.find((BB => BB.id === fB))) && void 0 !== rB ? rB : nB.c[0],
          {
            t: RB
          } = (0, UB.D)(),
          OB = RB("codeEditor:copySnippet"),
          Bj = (0, QB.useMemo)((() => vB ? function(BB, jB, zB, QB) {
            let nB = jB;
            nB = nB.replace(/\r\n/g, "\n");
            const dB = [];
            nB = nB.replace(/```(\w*)\n([\s\S]*?)```/g, ((BB, jB, QB) => {
              const nB = dB.length;
              let IB = JB(QB);
              try {
                IB = aB.c.highlight(QB.trimEnd(), {
                  language: jB
                }).value
              } catch (NB) {
                console.warn("Could not highlight documentation code block", NB)
              }
              return dB.push(`<div class="DocsCodeBlockRow"><pre class="DocsCodeBlock" data-lang="${jB}"><code>${IB}</code></pre>${mB(zB,"DocsCopyBlock")}</div>`), `\0PLACEHOLDER_${nB}\0`
            })), nB = nB.replace(/(`{1,2})([^\n]+?)\1(?!`)/g, ((jB, QB, nB) => {
              const IB = dB.length,
                NB = 2 === QB.length ? nB.replace(/^ (.*) $/, "$1") : nB;
              let uB = JB(NB);
              try {
                "apiReference" !== BB && "callbacks" !== BB || (uB = aB.c.highlight(NB.trimEnd().replaceAll("\\|", "|"), {
                  language: "typescript"
                }).value)
              } catch (UB) {
                console.warn("Could not highlight documentation snippet", UB)
              }
              return dB.push(`<span class="DocsInlineCodeRow"><code class="DocsInlineCode">${uB}</code>${mB(zB,"DocsCopyInline")}</span>`), `\0PLACEHOLDER_${IB}\0`
            })), nB = JB(nB), nB = nB.replace(/^#### (.+)$/gm, '<h4 class="DocsH4">$1</h4>'), nB = nB.replace(/^### (.+)$/gm, '<h3 class="DocsH3">$1</h3>'), nB = nB.replace(/^## (.+)$/gm, '<h2 class="DocsH2">$1</h2>'), nB = nB.replace(/^# (.+)$/gm, '<h1 class="DocsH1">$1</h1>'), nB = nB.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"), nB = nB.replace(/\[([^\]]+)\]\(([^)]+)\)/g, ((BB, jB, zB) => zB.startsWith("#") ? `<a class="DocsAnchor" data-id="${zB}">${jB}</a>` : `<a href="${zB}" target="_blank" rel="noopener noreferrer">${jB}</a>`)), nB = nB.replace(/^(\|.+\|)\n(\|[\s:\-|]+\|)\n((?:\|.+\|\s*\r?\n?)*)/gm, ((BB, jB, zB, QB) => `<table class="DocsTable"><thead><tr>${jB.split("|").slice(1,-1).map((BB=>`<th>${BB.trim()}</th>`)).join("")}</tr></thead><tbody>${QB.trim().split("\n").map((BB=>`<tr>${BB.split("|").slice(1,-1).map((BB=>`<td>${BB.trim()}</td>`)).join("")}</tr>`)).join("")}</tbody></table>`)), nB = nB.replace(/(?:^[ \t]*([*-])[ \t]+.+(?:\n|$))+/gm, ((BB, jB) => function(BB, jB) {
              const zB = "*" === jB,
                QB = [];
              for (const NB of BB.split("\n")) {
                const BB = NB.match(/^([ \t]*)(?:[*-])[ \t]+(.+)$/);
                BB && QB.push({
                  indent: BB[1].replace(/\t/g, "  ").length,
                  content: BB[2]
                })
              }
              let nB = "";
              const dB = [],
                IB = zB ? "ol" : "ul";
              for (const {
                  indent: NB,
                  content: uB
                }
                of QB) {
                for (; dB.length > 0 && NB < dB[dB.length - 1];) nB += `</${IB}></li>`, dB.pop();
                (0 === dB.length || NB > dB[dB.length - 1]) && (dB.length > 0 && (nB = nB.replace(/<\/li>$/, "")), nB += `<${IB} class="DocsList">`, dB.push(NB)), nB += `<li class="DocsListItem">${uB}</li>`
              }
              for (; dB.length > 0;) nB += `</${IB}>`, dB.pop(), dB.length > 0 && (nB += "</li>");
              return nB
            }(BB, jB))), nB = nB.replace(/\n{2,}/g, "\n<br/>\n");
            for (let IB = 0; IB < dB.length; IB++) nB = nB.replace(`\0PLACEHOLDER_${IB}\0`, dB[IB]);
            if (QB) {
              const BB = JB(QB).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                jB = new RegExp(BB, "gi");
              nB = nB.replace(/([^<>]+)(?=<|$)/g, (BB => BB.replace(jB, (BB => `<mark class="DocsHighlight">${BB}</mark>`))))
            }
            return nB
          }(vB.id, vB.content, OB, cB ? FB : void 0) : ""), [vB, OB, cB, FB]);
        (0, QB.useEffect)((() => {
          const BB = DB.current;
          if (!BB) return;
          const jB = BB => {
            var jB, zB, QB, nB, dB;
            const IB = null === (jB = (zB = BB.target).closest) || void 0 === jB ? void 0 : jB.call(zB, ".DocsCopyButton");
            if (!IB) return;
            BB.preventDefault(), BB.stopPropagation();
            const NB = null !== (QB = null === (nB = IB.parentElement) || void 0 === nB || null === (dB = nB.querySelector("code")) || void 0 === dB ? void 0 : dB.textContent) && void 0 !== QB ? QB : "";
            navigator.clipboard.writeText(NB.trimEnd()).then((() => {
              IB.classList.add("Copied"), setTimeout((() => {
                IB.classList.remove("Copied")
              }), 1500)
            })).catch((BB => {
              console.warn("Could not copy documentation code", BB)
            }))
          };
          return BB.addEventListener("click", jB, !0), () => {
            BB.removeEventListener("click", jB, !0)
          }
        }), []);
        const [jj, zj] = (0, QB.useState)(0);
        (0, QB.useEffect)((() => {
          if (!cB || !DB.current) return void zj(0);
          const BB = DB.current.querySelectorAll(".DocsHighlight").length;
          zj(BB)
        }), [cB, Bj]), (0, QB.useEffect)((() => {
          if (null === XB || !DB.current) return;
          ZB(null);
          const BB = DB.current.querySelectorAll(".DocsHighlight");
          if (0 === BB.length) return;
          const jB = Math.min(XB, BB.length - 1);
          hB(jB), BB.forEach((BB => {
            BB.classList.remove("DocsHighlightActive")
          })), BB[jB].classList.add("DocsHighlightActive"), BB[jB].scrollIntoView({
            block: "center",
            behavior: "smooth"
          })
        }), [XB, Bj]);
        const Qj = (0, QB.useCallback)((BB => {
            if (!DB.current) return;
            const jB = DB.current.querySelectorAll(".DocsHighlight");
            if (0 === jB.length) return;
            const zB = (VB + BB + jB.length) % jB.length;
            hB(zB), ZB(zB)
          }), [VB]),
          nj = (0, QB.useCallback)((BB => {
            var jB;
            const zB = null === (jB = tB[BB]) || void 0 === jB ? void 0 : jB.tabStep;
            zB && zB === wB && (0, gB.e)(zB), BB !== fB ? (TB(!0), oB(BB), hB(0), DB.current && (DB.current.scrollTop = 0), cB && ZB(0)) : TB(!AB)
          }), [cB, fB, AB, wB]),
          dj = (0, QB.useCallback)((BB => {
            var jB;
            const zB = Array.from((null === (jB = DB.current) || void 0 === jB ? void 0 : jB.querySelectorAll(".DocsH2, .DocsH3")) || []).find((jB => {
              var zB;
              return null === (zB = jB.textContent) || void 0 === zB ? void 0 : zB.includes(BB)
            }));
            zB && zB.scrollIntoView({
              block: "start",
              behavior: "smooth"
            })
          }), [DB]),
          Ij = (0, QB.useCallback)((BB => {
            var jB, zB;
            const QB = null !== (jB = null === (zB = HB.current) || void 0 === zB ? void 0 : zB.clientWidth) && void 0 !== jB ? jB : window.innerWidth,
              nB = Math.max(120, QB - 200);
            return Math.min(Math.max(BB, 120), nB)
          }), []),
          Nj = (0, QB.useCallback)((() => {
            var BB;
            eB.current && (eB.current = !1, null === (BB = HB.current) || void 0 === BB || BB.classList.remove("DocsSidebarResizing"))
          }), []),
          uj = (0, QB.useCallback)((BB => {
            var jB;
            BB.preventDefault(), eB.current = !0, null === (jB = HB.current) || void 0 === jB || jB.classList.add("DocsSidebarResizing")
          }), []);
        (0, QB.useEffect)((() => {
          const BB = HB.current,
            jB = BB => {
              if (!eB.current || !HB.current) return;
              const jB = HB.current.getBoundingClientRect().left;
              WB(Ij(BB.clientX - jB))
            };
          return window.addEventListener("mousemove", jB), window.addEventListener("mouseup", Nj), () => {
            window.removeEventListener("mousemove", jB), window.removeEventListener("mouseup", Nj), null === BB || void 0 === BB || BB.classList.remove("DocsSidebarResizing")
          }
        }), [Ij, Nj]);
        const Uj = (0, QB.useCallback)((BB => {
          if (BB) {
            const [jB, zB] = BB.slice(1).split("-");
            zB && (lB.current = {
              docId: jB,
              subsection: zB
            }), jB && nj(jB)
          }
        }), [nj]);
        (0, QB.useEffect)((() => {
          const BB = lB.current;
          BB && fB === BB.docId && (setTimeout((() => {
            dj(BB.subsection)
          }), 0), lB.current = null)
        })), (0, QB.useEffect)((() => {
          if (!DB.current) return;
          DB.current.querySelectorAll("a.DocsAnchor").forEach((BB => {
            BB.addEventListener("click", (jB => {
              jB.preventDefault(), Uj(BB.dataset.id)
            }))
          }))
        }), [fB, Uj]);
        const aj = Object.values(tB).find((BB => (null === BB || void 0 === BB ? void 0 : BB.pageStep) === wB));
        return (0, sB.jsx)(LB.h, {
          tutorial: "docsOverview",
          step: null !== (SB = null === aj || void 0 === aj ? void 0 : aj.pageStep) && void 0 !== SB ? SB : "docsPanel",
          text: RB(null !== (MB = null === aj || void 0 === aj ? void 0 : aj.pageText) && void 0 !== MB ? MB : "codeEditor:tutorialDocsPanel"),
          enabled: qB,
          placement: "left",
          onPrevious: aj ? void 0 : iB,
          children: (0, sB.jsxs)("div", {
            className: "DocsPanel",
            ref: HB,
            children: [(0, sB.jsxs)("div", {
              className: "DocsSidebar",
              style: {
                width: PB,
                minWidth: PB,
                maxWidth: PB
              },
              children: [(0, sB.jsx)(dB.d, {
                className: "DocsSearch",
                placeholderText: "\ud83d\udd0e Search docs...",
                onValueChange: BB => {
                  YB(BB), hB(0), ZB(0)
                }
              }, xB), (0, sB.jsx)("div", {
                className: "DocsNavList",
                children: cB ? bB.map((BB => (0, sB.jsxs)("div", {
                  className: NB()("DocsNavItem", "SearchResult", {
                    Active: BB.doc.id === (null === vB || void 0 === vB ? void 0 : vB.id)
                  }),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    nj(BB.doc.id)
                  },
                  children: [(0, sB.jsxs)("div", {
                    className: "SearchResultTitle",
                    children: [BB.doc.title, (0, sB.jsx)("span", {
                      className: "SearchResultCount",
                      children: BB.matchCount
                    })]
                  }), (0, sB.jsx)("div", {
                    className: "SearchResultSnippet",
                    children: yB(BB.snippet, FB)
                  })]
                }, BB.doc.id))) : nB.c.map((BB => {
                  const jB = (0, sB.jsxs)("div", {
                      className: NB()("DocsNavItem", {
                        Active: BB.id === (null === vB || void 0 === vB ? void 0 : vB.id)
                      }),
                      "data-pad-focusable": !0,
                      onClick: () => {
                        nj(BB.id)
                      },
                      children: [(0, sB.jsx)("span", {
                        className: "DocsNavItemTitle",
                        children: BB.title
                      }), BB.subsections && BB.id === (null === vB || void 0 === vB ? void 0 : vB.id) && AB && (0, sB.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, sB.jsx)(kB.c, {
                          name: "angle-down"
                        })
                      }), BB.subsections && (BB.id !== (null === vB || void 0 === vB ? void 0 : vB.id) || !AB) && (0, sB.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, sB.jsx)(kB.c, {
                          name: "angle-up"
                        })
                      })]
                    }),
                    zB = tB[BB.id];
                  return (0, sB.jsxs)(QB.Fragment, {
                    children: [zB && (0, sB.jsx)(LB.h, {
                      tutorial: "docsOverview",
                      step: zB.tabStep,
                      text: RB(zB.tabText),
                      enabled: qB,
                      placement: "left",
                      waitForClick: !0,
                      children: jB
                    }), !zB && jB, AB && BB.subsections && BB.id === (null === vB || void 0 === vB ? void 0 : vB.id) && BB.subsections.map((BB => (0, sB.jsx)("div", {
                      className: "DocsNavItem DocsSubsection",
                      "data-pad-focusable": !0,
                      onClick: () => {
                        dj(BB)
                      },
                      children: BB
                    }, BB)))]
                  }, BB.id)
                }))
              }), (0, sB.jsx)("div", {
                className: "DocsSidebarButtonContainer",
                children: (0, sB.jsx)(GB.g, {
                  tooltipInner: RB("codeEditor:popOutDocsTooltip"),
                  placement: "top",
                  children: (0, sB.jsx)(uB.f, {
                    className: "DocsSidebarButton",
                    onClick: EB,
                    children: RB("codeEditor:popOutDocs")
                  })
                })
              })]
            }), (0, sB.jsx)("div", {
              className: "DocsSidebarResizeHandle",
              onMouseDown: uj
            }), (0, sB.jsxs)("div", {
              className: "DocsContentWrapper",
              children: [cB && jj > 0 && (0, sB.jsxs)("div", {
                className: "DocsMatchNav",
                children: [(0, sB.jsxs)("span", {
                  className: "DocsMatchNavLabel",
                  children: [VB + 1, " / ", jj]
                }), (0, sB.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    Qj(-1)
                  },
                  children: "\u25b2"
                }), (0, sB.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    Qj(1)
                  },
                  children: "\u25bc"
                })]
              }), (0, sB.jsx)("div", {
                className: "DocsContent",
                ref: DB,
                dangerouslySetInnerHTML: {
                  __html: Bj
                }
              })]
            })]
          })
        })
      }))
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);