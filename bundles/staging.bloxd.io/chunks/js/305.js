export const id = 305;
export const ids = [305];
export const modules = {
  41879: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      default: () => XG
    });
    var wG = ZG(51),
      SG = ZG(4760),
      LG = ZG(1621),
      yG = ZG(1006),
      kG = ZG.n(yG),
      UG = ZG(1393),
      YG = ZG(1151),
      VG = ZG(4734),
      pG = ZG(4745),
      fG = ZG(4750),
      QG = ZG(1067);

    function KG(GG) {
      return GG.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    VG.e.registerLanguage("javascript", pG.e), VG.e.registerLanguage("typescript", fG.c);

    function hG(GG, bG) {
      const ZG = KG(GG).replace(/"/g, "&quot;");
      return `<button type="button" class="DocsCopyButton ${bG}" title="${ZG}" aria-label="${ZG}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5"/><path d="M10.5 3.5V1.5H1.5v9h2"/></svg><svg class="DocsCopiedIcon" viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 8.5l3.5 3.5 7.5-7.5"/></svg></button>`
    }

    function dG(GG, bG) {
      const ZG = [],
        wG = GG.toLowerCase(),
        SG = bG.toLowerCase();
      let LG = 0;
      for (; LG < GG.length;) {
        const yG = wG.indexOf(SG, LG);
        if (-1 === yG) {
          ZG.push(GG.slice(LG));
          break
        }
        yG > LG && ZG.push(GG.slice(LG, yG)), ZG.push((0, QG.jsx)("mark", {
          className: "DocsHighlight",
          children: GG.slice(yG, yG + bG.length)
        }, yG)), LG = yG + bG.length
      }
      return ZG
    }
    var JG = ZG(1016),
      rG = ZG(1320),
      zG = ZG(37224),
      EG = ZG(37231);
    const oG = {
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
      XG = (0, wG.memo)((function(GG) {
        var bG, ZG, yG, pG, fG, XG, uG;
        let {
          popOutDocs: iG,
          hideDocs: CG,
          tutorialEnabled: WG
        } = GG;
        const [mG, IG] = (0, wG.useState)(SG.e[0].id), FG = (0, wG.useRef)(null), vG = (0, wG.useRef)(null), [aG, cG] = (0, wG.useState)(""), [lG, jG] = (0, wG.useState)(0), [PG, MG] = (0, wG.useState)(null), [AG, sG] = (0, wG.useState)(!1), [qG, nG] = (0, wG.useState)(160), gG = (0, wG.useRef)(!1), eG = (0, wG.useRef)(null), RG = (0, zG.l)("docsOverview"), [TG, HG] = (0, wG.useState)(0), tG = Object.values(oG).some((GG => (null === GG || void 0 === GG ? void 0 : GG.tabStep) === RG));
        (0, wG.useEffect)((() => {
          tG && aG.length > 0 && (cG(""), HG((GG => GG + 1)))
        }), [tG, aG]);
        const DG = aG.length > 0,
          NG = (0, wG.useMemo)((() => function(GG) {
            if (!GG) return [];
            const bG = GG.toLowerCase(),
              ZG = [];
            for (const wG of SG.e) {
              const GG = wG.content.toLowerCase();
              let SG = 0,
                LG = -1,
                yG = 0,
                kG = GG.indexOf(bG, yG);
              for (; - 1 !== kG;) - 1 === LG && (LG = kG), SG++, yG = kG + bG.length, kG = GG.indexOf(bG, yG);
              if (0 === SG) continue;
              const UG = Math.max(0, LG - 40),
                YG = Math.min(wG.content.length, LG + bG.length + 40),
                VG = (UG > 0 ? "..." : "") + wG.content.slice(UG, YG).replace(/\n/g, " ") + (YG < wG.content.length ? "..." : "");
              ZG.push({
                doc: wG,
                matchCount: SG,
                snippet: VG
              })
            }
            return ZG.sort(((GG, bG) => bG.matchCount - GG.matchCount)), ZG
          }(aG)), [aG]),
          OG = DG ? null !== (bG = null !== (ZG = null === (yG = NG.find((GG => GG.doc.id === mG))) || void 0 === yG ? void 0 : yG.doc) && void 0 !== ZG ? ZG : null === (pG = NG[0]) || void 0 === pG ? void 0 : pG.doc) && void 0 !== bG ? bG : null : null !== (fG = SG.e.find((GG => GG.id === mG))) && void 0 !== fG ? fG : SG.e[0],
          {
            t: xG
          } = (0, YG.w)(),
          BG = xG("codeEditor:copySnippet"),
          Gb = (0, wG.useMemo)((() => OG ? function(GG, bG, ZG, wG) {
            let SG = bG;
            SG = SG.replace(/\r\n/g, "\n");
            const LG = [];
            SG = SG.replace(/```(\w*)\n([\s\S]*?)```/g, ((GG, bG, wG) => {
              const SG = LG.length;
              let yG = KG(wG);
              try {
                yG = VG.e.highlight(wG.trimEnd(), {
                  language: bG
                }).value
              } catch (kG) {
                console.warn("Could not highlight documentation code block", kG)
              }
              return LG.push(`<div class="DocsCodeBlockRow"><pre class="DocsCodeBlock" data-lang="${bG}"><code>${yG}</code></pre>${hG(ZG,"DocsCopyBlock")}</div>`), `\0PLACEHOLDER_${SG}\0`
            })), SG = SG.replace(/(`{1,2})([^\n]+?)\1(?!`)/g, ((bG, wG, SG) => {
              const yG = LG.length,
                kG = 2 === wG.length ? SG.replace(/^ (.*) $/, "$1") : SG;
              let UG = KG(kG);
              try {
                "apiReference" !== GG && "callbacks" !== GG || (UG = VG.e.highlight(kG.trimEnd().replaceAll("\\|", "|"), {
                  language: "typescript"
                }).value)
              } catch (YG) {
                console.warn("Could not highlight documentation snippet", YG)
              }
              return LG.push(`<span class="DocsInlineCodeRow"><code class="DocsInlineCode">${UG}</code>${hG(ZG,"DocsCopyInline")}</span>`), `\0PLACEHOLDER_${yG}\0`
            })), SG = KG(SG), SG = SG.replace(/^#### (.+)$/gm, '<h4 class="DocsH4">$1</h4>'), SG = SG.replace(/^### (.+)$/gm, '<h3 class="DocsH3">$1</h3>'), SG = SG.replace(/^## (.+)$/gm, '<h2 class="DocsH2">$1</h2>'), SG = SG.replace(/^# (.+)$/gm, '<h1 class="DocsH1">$1</h1>'), SG = SG.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"), SG = SG.replace(/\[([^\]]+)\]\(([^)]+)\)/g, ((GG, bG, ZG) => ZG.startsWith("#") ? `<a class="DocsAnchor" data-id="${ZG}">${bG}</a>` : `<a href="${ZG}" target="_blank" rel="noopener noreferrer">${bG}</a>`)), SG = SG.replace(/^(\|.+\|)\n(\|[\s:\-|]+\|)\n((?:\|.+\|\s*\r?\n?)*)/gm, ((GG, bG, ZG, wG) => `<table class="DocsTable"><thead><tr>${bG.split("|").slice(1,-1).map((GG=>`<th>${GG.trim()}</th>`)).join("")}</tr></thead><tbody>${wG.trim().split("\n").map((GG=>`<tr>${GG.split("|").slice(1,-1).map((GG=>`<td>${GG.trim()}</td>`)).join("")}</tr>`)).join("")}</tbody></table>`)), SG = SG.replace(/(?:^[ \t]*([*-])[ \t]+.+(?:\n|$))+/gm, ((GG, bG) => function(GG, bG) {
              const ZG = "*" === bG,
                wG = [];
              for (const kG of GG.split("\n")) {
                const GG = kG.match(/^([ \t]*)(?:[*-])[ \t]+(.+)$/);
                GG && wG.push({
                  indent: GG[1].replace(/\t/g, "  ").length,
                  content: GG[2]
                })
              }
              let SG = "";
              const LG = [],
                yG = ZG ? "ol" : "ul";
              for (const {
                  indent: kG,
                  content: UG
                }
                of wG) {
                for (; LG.length > 0 && kG < LG[LG.length - 1];) SG += `</${yG}></li>`, LG.pop();
                (0 === LG.length || kG > LG[LG.length - 1]) && (LG.length > 0 && (SG = SG.replace(/<\/li>$/, "")), SG += `<${yG} class="DocsList">`, LG.push(kG)), SG += `<li class="DocsListItem">${UG}</li>`
              }
              for (; LG.length > 0;) SG += `</${yG}>`, LG.pop(), LG.length > 0 && (SG += "</li>");
              return SG
            }(GG, bG))), SG = SG.replace(/\n{2,}/g, "\n<br/>\n");
            for (let yG = 0; yG < LG.length; yG++) SG = SG.replace(`\0PLACEHOLDER_${yG}\0`, LG[yG]);
            if (wG) {
              const GG = KG(wG).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                bG = new RegExp(GG, "gi");
              SG = SG.replace(/([^<>]+)(?=<|$)/g, (GG => GG.replace(bG, (GG => `<mark class="DocsHighlight">${GG}</mark>`))))
            }
            return SG
          }(OG.id, OG.content, BG, DG ? aG : void 0) : ""), [OG, BG, DG, aG]);
        (0, wG.useEffect)((() => {
          const GG = vG.current;
          if (!GG) return;
          const bG = GG => {
            var bG, ZG, wG, SG, LG;
            const yG = null === (bG = (ZG = GG.target).closest) || void 0 === bG ? void 0 : bG.call(ZG, ".DocsCopyButton");
            if (!yG) return;
            GG.preventDefault(), GG.stopPropagation();
            const kG = null !== (wG = null === (SG = yG.parentElement) || void 0 === SG || null === (LG = SG.querySelector("code")) || void 0 === LG ? void 0 : LG.textContent) && void 0 !== wG ? wG : "";
            navigator.clipboard.writeText(kG.trimEnd()).then((() => {
              yG.classList.add("Copied"), setTimeout((() => {
                yG.classList.remove("Copied")
              }), 1500)
            })).catch((GG => {
              console.warn("Could not copy documentation code", GG)
            }))
          };
          return GG.addEventListener("click", bG, !0), () => {
            GG.removeEventListener("click", bG, !0)
          }
        }), []);
        const [bb, Zb] = (0, wG.useState)(0);
        (0, wG.useEffect)((() => {
          if (!DG || !vG.current) return void Zb(0);
          const GG = vG.current.querySelectorAll(".DocsHighlight").length;
          Zb(GG)
        }), [DG, Gb]), (0, wG.useEffect)((() => {
          if (null === PG || !vG.current) return;
          MG(null);
          const GG = vG.current.querySelectorAll(".DocsHighlight");
          if (0 === GG.length) return;
          const bG = Math.min(PG, GG.length - 1);
          jG(bG), GG.forEach((GG => {
            GG.classList.remove("DocsHighlightActive")
          })), GG[bG].classList.add("DocsHighlightActive"), GG[bG].scrollIntoView({
            block: "center",
            behavior: "smooth"
          })
        }), [PG, Gb]);
        const wb = (0, wG.useCallback)((GG => {
            if (!vG.current) return;
            const bG = vG.current.querySelectorAll(".DocsHighlight");
            if (0 === bG.length) return;
            const ZG = (lG + GG + bG.length) % bG.length;
            jG(ZG), MG(ZG)
          }), [lG]),
          Sb = (0, wG.useCallback)((GG => {
            var bG;
            const ZG = null === (bG = oG[GG]) || void 0 === bG ? void 0 : bG.tabStep;
            ZG && ZG === RG && (0, EG.e)(ZG), GG !== mG ? (sG(!0), IG(GG), jG(0), vG.current && (vG.current.scrollTop = 0), DG && MG(0)) : sG(!AG)
          }), [DG, mG, AG, RG]),
          Lb = (0, wG.useCallback)((GG => {
            var bG;
            const ZG = Array.from((null === (bG = vG.current) || void 0 === bG ? void 0 : bG.querySelectorAll(".DocsH2, .DocsH3")) || []).find((bG => {
              var ZG;
              return null === (ZG = bG.textContent) || void 0 === ZG ? void 0 : ZG.includes(GG)
            }));
            ZG && ZG.scrollIntoView({
              block: "start",
              behavior: "smooth"
            })
          }), [vG]),
          yb = (0, wG.useCallback)((GG => {
            var bG, ZG;
            const wG = null !== (bG = null === (ZG = FG.current) || void 0 === ZG ? void 0 : ZG.clientWidth) && void 0 !== bG ? bG : window.innerWidth,
              SG = Math.max(120, wG - 200);
            return Math.min(Math.max(GG, 120), SG)
          }), []),
          kb = (0, wG.useCallback)((() => {
            var GG;
            gG.current && (gG.current = !1, null === (GG = FG.current) || void 0 === GG || GG.classList.remove("DocsSidebarResizing"))
          }), []),
          Ub = (0, wG.useCallback)((GG => {
            var bG;
            GG.preventDefault(), gG.current = !0, null === (bG = FG.current) || void 0 === bG || bG.classList.add("DocsSidebarResizing")
          }), []);
        (0, wG.useEffect)((() => {
          const GG = FG.current,
            bG = GG => {
              if (!gG.current || !FG.current) return;
              const bG = FG.current.getBoundingClientRect().left;
              nG(yb(GG.clientX - bG))
            };
          return window.addEventListener("mousemove", bG), window.addEventListener("mouseup", kb), () => {
            window.removeEventListener("mousemove", bG), window.removeEventListener("mouseup", kb), null === GG || void 0 === GG || GG.classList.remove("DocsSidebarResizing")
          }
        }), [yb, kb]);
        const Yb = (0, wG.useCallback)((GG => {
          if (GG) {
            const [bG, ZG] = GG.slice(1).split("-");
            ZG && (eG.current = {
              docId: bG,
              subsection: ZG
            }), bG && Sb(bG)
          }
        }), [Sb]);
        (0, wG.useEffect)((() => {
          const GG = eG.current;
          GG && mG === GG.docId && (setTimeout((() => {
            Lb(GG.subsection)
          }), 0), eG.current = null)
        })), (0, wG.useEffect)((() => {
          if (!vG.current) return;
          vG.current.querySelectorAll("a.DocsAnchor").forEach((GG => {
            GG.addEventListener("click", (bG => {
              bG.preventDefault(), Yb(GG.dataset.id)
            }))
          }))
        }), [mG, Yb]);
        const Vb = Object.values(oG).find((GG => (null === GG || void 0 === GG ? void 0 : GG.pageStep) === RG));
        return (0, QG.jsx)(zG.i, {
          tutorial: "docsOverview",
          step: null !== (XG = null === Vb || void 0 === Vb ? void 0 : Vb.pageStep) && void 0 !== XG ? XG : "docsPanel",
          text: xG(null !== (uG = null === Vb || void 0 === Vb ? void 0 : Vb.pageText) && void 0 !== uG ? uG : "codeEditor:tutorialDocsPanel"),
          enabled: WG,
          placement: "left",
          onPrevious: Vb ? void 0 : CG,
          children: (0, QG.jsxs)("div", {
            className: "DocsPanel",
            ref: FG,
            children: [(0, QG.jsxs)("div", {
              className: "DocsSidebar",
              style: {
                width: qG,
                minWidth: qG,
                maxWidth: qG
              },
              children: [(0, QG.jsx)(LG.b, {
                className: "DocsSearch",
                placeholderText: "\ud83d\udd0e Search docs...",
                onValueChange: GG => {
                  cG(GG), jG(0), MG(0)
                }
              }, TG), (0, QG.jsx)("div", {
                className: "DocsNavList",
                children: DG ? NG.map((GG => (0, QG.jsxs)("div", {
                  className: kG()("DocsNavItem", "SearchResult", {
                    Active: GG.doc.id === (null === OG || void 0 === OG ? void 0 : OG.id)
                  }),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    Sb(GG.doc.id)
                  },
                  children: [(0, QG.jsxs)("div", {
                    className: "SearchResultTitle",
                    children: [GG.doc.title, (0, QG.jsx)("span", {
                      className: "SearchResultCount",
                      children: GG.matchCount
                    })]
                  }), (0, QG.jsx)("div", {
                    className: "SearchResultSnippet",
                    children: dG(GG.snippet, aG)
                  })]
                }, GG.doc.id))) : SG.e.map((GG => {
                  const bG = (0, QG.jsxs)("div", {
                      className: kG()("DocsNavItem", {
                        Active: GG.id === (null === OG || void 0 === OG ? void 0 : OG.id)
                      }),
                      "data-pad-focusable": !0,
                      onClick: () => {
                        Sb(GG.id)
                      },
                      children: [(0, QG.jsx)("span", {
                        className: "DocsNavItemTitle",
                        children: GG.title
                      }), GG.subsections && GG.id === (null === OG || void 0 === OG ? void 0 : OG.id) && AG && (0, QG.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, QG.jsx)(JG.c, {
                          name: "angle-down"
                        })
                      }), GG.subsections && (GG.id !== (null === OG || void 0 === OG ? void 0 : OG.id) || !AG) && (0, QG.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, QG.jsx)(JG.c, {
                          name: "angle-up"
                        })
                      })]
                    }),
                    ZG = oG[GG.id];
                  return (0, QG.jsxs)(wG.Fragment, {
                    children: [ZG && (0, QG.jsx)(zG.i, {
                      tutorial: "docsOverview",
                      step: ZG.tabStep,
                      text: xG(ZG.tabText),
                      enabled: WG,
                      placement: "left",
                      waitForClick: !0,
                      children: bG
                    }), !ZG && bG, AG && GG.subsections && GG.id === (null === OG || void 0 === OG ? void 0 : OG.id) && GG.subsections.map((GG => (0, QG.jsx)("div", {
                      className: "DocsNavItem DocsSubsection",
                      "data-pad-focusable": !0,
                      onClick: () => {
                        Lb(GG)
                      },
                      children: GG
                    }, GG)))]
                  }, GG.id)
                }))
              }), (0, QG.jsx)("div", {
                className: "DocsSidebarButtonContainer",
                children: (0, QG.jsx)(rG.h, {
                  tooltipInner: xG("codeEditor:popOutDocsTooltip"),
                  placement: "top",
                  children: (0, QG.jsx)(UG.d, {
                    className: "DocsSidebarButton",
                    onClick: iG,
                    children: xG("codeEditor:popOutDocs")
                  })
                })
              })]
            }), (0, QG.jsx)("div", {
              className: "DocsSidebarResizeHandle",
              onMouseDown: Ub
            }), (0, QG.jsxs)("div", {
              className: "DocsContentWrapper",
              children: [DG && bb > 0 && (0, QG.jsxs)("div", {
                className: "DocsMatchNav",
                children: [(0, QG.jsxs)("span", {
                  className: "DocsMatchNavLabel",
                  children: [lG + 1, " / ", bb]
                }), (0, QG.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    wb(-1)
                  },
                  children: "\u25b2"
                }), (0, QG.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    wb(1)
                  },
                  children: "\u25bc"
                })]
              }), (0, QG.jsx)("div", {
                className: "DocsContent",
                ref: vG,
                dangerouslySetInnerHTML: {
                  __html: Gb
                }
              })]
            })]
          })
        })
      }))
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);