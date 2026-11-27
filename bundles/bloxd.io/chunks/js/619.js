export const id = 619;
export const ids = [619];
export const modules = {
  53489: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      default: () => XR
    });
    var yR = GR(66),
      tR = GR(5637),
      uR = GR(1867),
      ZR = GR(1163),
      qR = GR.n(ZR),
      iR = GR(1590),
      fR = GR(1270),
      VR = GR(5610),
      KR = GR(5624),
      wR = GR(5629),
      rR = GR(1378);

    function eR(RR) {
      return RR.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    VR.e.registerLanguage("javascript", KR.d), VR.e.registerLanguage("typescript", wR.c);

    function aR(RR, JR) {
      const GR = eR(RR).replace(/"/g, "&quot;");
      return `<button type="button" class="DocsCopyButton ${JR}" title="${GR}" aria-label="${GR}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5"/><path d="M10.5 3.5V1.5H1.5v9h2"/></svg><svg class="DocsCopiedIcon" viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 8.5l3.5 3.5 7.5-7.5"/></svg></button>`
    }

    function LR(RR, JR) {
      const GR = [],
        yR = RR.toLowerCase(),
        tR = JR.toLowerCase();
      let uR = 0;
      for (; uR < RR.length;) {
        const ZR = yR.indexOf(tR, uR);
        if (-1 === ZR) {
          GR.push(RR.slice(uR));
          break
        }
        ZR > uR && GR.push(RR.slice(uR, ZR)), GR.push((0, rR.jsx)("mark", {
          className: "DocsHighlight",
          children: RR.slice(ZR, ZR + JR.length)
        }, ZR)), uR = ZR + JR.length
      }
      return GR
    }
    var nR = GR(1468),
      UR = GR(1501),
      WR = GR(37994),
      AR = GR(37999);
    const CR = {
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
      XR = (0, yR.memo)((function(RR) {
        var JR, GR, ZR, KR, wR, XR, MR;
        let {
          popOutDocs: BR,
          hideDocs: lR,
          tutorialEnabled: pR
        } = RR;
        const [gR, bR] = (0, yR.useState)(tR.e[0].id), vR = (0, yR.useRef)(null), OR = (0, yR.useRef)(null), [xR, NR] = (0, yR.useState)(""), [DR, HR] = (0, yR.useState)(0), [oR, cR] = (0, yR.useState)(null), [PR, IR] = (0, yR.useState)(!1), [mR, zR] = (0, yR.useState)(160), SR = (0, yR.useRef)(!1), jR = (0, yR.useRef)(null), dR = (0, WR.h)("docsOverview"), [ER, YR] = (0, yR.useState)(0), kR = Object.values(CR).some((RR => (null === RR || void 0 === RR ? void 0 : RR.tabStep) === dR));
        (0, yR.useEffect)((() => {
          kR && xR.length > 0 && (NR(""), YR((RR => RR + 1)))
        }), [kR, xR]);
        const QR = xR.length > 0,
          FR = (0, yR.useMemo)((() => function(RR) {
            if (!RR) return [];
            const JR = RR.toLowerCase(),
              GR = [];
            for (const yR of tR.e) {
              const RR = yR.content.toLowerCase();
              let tR = 0,
                uR = -1,
                ZR = 0,
                qR = RR.indexOf(JR, ZR);
              for (; - 1 !== qR;) - 1 === uR && (uR = qR), tR++, ZR = qR + JR.length, qR = RR.indexOf(JR, ZR);
              if (0 === tR) continue;
              const iR = Math.max(0, uR - 40),
                fR = Math.min(yR.content.length, uR + JR.length + 40),
                VR = (iR > 0 ? "..." : "") + yR.content.slice(iR, fR).replace(/\n/g, " ") + (fR < yR.content.length ? "..." : "");
              GR.push({
                doc: yR,
                matchCount: tR,
                snippet: VR
              })
            }
            return GR.sort(((RR, JR) => JR.matchCount - RR.matchCount)), GR
          }(xR)), [xR]),
          TR = QR ? null !== (JR = null !== (GR = null === (ZR = FR.find((RR => RR.doc.id === gR))) || void 0 === ZR ? void 0 : ZR.doc) && void 0 !== GR ? GR : null === (KR = FR[0]) || void 0 === KR ? void 0 : KR.doc) && void 0 !== JR ? JR : null : null !== (wR = tR.e.find((RR => RR.id === gR))) && void 0 !== wR ? wR : tR.e[0],
          {
            t: sR
          } = (0, fR.A)(),
          hR = sR("codeEditor:copySnippet"),
          RJ = (0, yR.useMemo)((() => TR ? function(RR, JR, GR, yR) {
            let tR = JR;
            tR = tR.replace(/\r\n/g, "\n");
            const uR = [];
            tR = tR.replace(/```(\w*)\n([\s\S]*?)```/g, ((RR, JR, yR) => {
              const tR = uR.length;
              let ZR = eR(yR);
              try {
                ZR = VR.e.highlight(yR.trimEnd(), {
                  language: JR
                }).value
              } catch (qR) {
                console.warn("Could not highlight documentation code block", qR)
              }
              return uR.push(`<div class="DocsCodeBlockRow"><pre class="DocsCodeBlock" data-lang="${JR}"><code>${ZR}</code></pre>${aR(GR,"DocsCopyBlock")}</div>`), `\0PLACEHOLDER_${tR}\0`
            })), tR = tR.replace(/(`{1,2})([^\n]+?)\1(?!`)/g, ((JR, yR, tR) => {
              const ZR = uR.length,
                qR = 2 === yR.length ? tR.replace(/^ (.*) $/, "$1") : tR;
              let iR = eR(qR);
              try {
                "apiReference" !== RR && "callbacks" !== RR || (iR = VR.e.highlight(qR.trimEnd().replaceAll("\\|", "|"), {
                  language: "typescript"
                }).value)
              } catch (fR) {
                console.warn("Could not highlight documentation snippet", fR)
              }
              return uR.push(`<span class="DocsInlineCodeRow"><code class="DocsInlineCode">${iR}</code>${aR(GR,"DocsCopyInline")}</span>`), `\0PLACEHOLDER_${ZR}\0`
            })), tR = eR(tR), tR = tR.replace(/^#### (.+)$/gm, '<h4 class="DocsH4">$1</h4>'), tR = tR.replace(/^### (.+)$/gm, '<h3 class="DocsH3">$1</h3>'), tR = tR.replace(/^## (.+)$/gm, '<h2 class="DocsH2">$1</h2>'), tR = tR.replace(/^# (.+)$/gm, '<h1 class="DocsH1">$1</h1>'), tR = tR.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"), tR = tR.replace(/\[([^\]]+)\]\(([^)]+)\)/g, ((RR, JR, GR) => GR.startsWith("#") ? `<a class="DocsAnchor" data-id="${GR}">${JR}</a>` : `<a href="${GR}" target="_blank" rel="noopener noreferrer">${JR}</a>`)), tR = tR.replace(/^(\|.+\|)\n(\|[\s:\-|]+\|)\n((?:\|.+\|\s*\r?\n?)*)/gm, ((RR, JR, GR, yR) => `<table class="DocsTable"><thead><tr>${JR.split("|").slice(1,-1).map((RR=>`<th>${RR.trim()}</th>`)).join("")}</tr></thead><tbody>${yR.trim().split("\n").map((RR=>`<tr>${RR.split("|").slice(1,-1).map((RR=>`<td>${RR.trim()}</td>`)).join("")}</tr>`)).join("")}</tbody></table>`)), tR = tR.replace(/(?:^[ \t]*([*-])[ \t]+.+(?:\n|$))+/gm, ((RR, JR) => function(RR, JR) {
              const GR = "*" === JR,
                yR = [];
              for (const qR of RR.split("\n")) {
                const RR = qR.match(/^([ \t]*)(?:[*-])[ \t]+(.+)$/);
                RR && yR.push({
                  indent: RR[1].replace(/\t/g, "  ").length,
                  content: RR[2]
                })
              }
              let tR = "";
              const uR = [],
                ZR = GR ? "ol" : "ul";
              for (const {
                  indent: qR,
                  content: iR
                }
                of yR) {
                for (; uR.length > 0 && qR < uR[uR.length - 1];) tR += `</${ZR}></li>`, uR.pop();
                (0 === uR.length || qR > uR[uR.length - 1]) && (uR.length > 0 && (tR = tR.replace(/<\/li>$/, "")), tR += `<${ZR} class="DocsList">`, uR.push(qR)), tR += `<li class="DocsListItem">${iR}</li>`
              }
              for (; uR.length > 0;) tR += `</${ZR}>`, uR.pop(), uR.length > 0 && (tR += "</li>");
              return tR
            }(RR, JR))), tR = tR.replace(/\n{2,}/g, "\n<br/>\n");
            for (let ZR = 0; ZR < uR.length; ZR++) tR = tR.replace(`\0PLACEHOLDER_${ZR}\0`, uR[ZR]);
            if (yR) {
              const RR = eR(yR).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                JR = new RegExp(RR, "gi");
              tR = tR.replace(/([^<>]+)(?=<|$)/g, (RR => RR.replace(JR, (RR => `<mark class="DocsHighlight">${RR}</mark>`))))
            }
            return tR
          }(TR.id, TR.content, hR, QR ? xR : void 0) : ""), [TR, hR, QR, xR]);
        (0, yR.useEffect)((() => {
          const RR = OR.current;
          if (!RR) return;
          const JR = RR => {
            var JR, GR, yR, tR, uR;
            const ZR = null === (JR = (GR = RR.target).closest) || void 0 === JR ? void 0 : JR.call(GR, ".DocsCopyButton");
            if (!ZR) return;
            RR.preventDefault(), RR.stopPropagation();
            const qR = null !== (yR = null === (tR = ZR.parentElement) || void 0 === tR || null === (uR = tR.querySelector("code")) || void 0 === uR ? void 0 : uR.textContent) && void 0 !== yR ? yR : "";
            navigator.clipboard.writeText(qR.trimEnd()).then((() => {
              ZR.classList.add("Copied"), setTimeout((() => {
                ZR.classList.remove("Copied")
              }), 1500)
            })).catch((RR => {
              console.warn("Could not copy documentation code", RR)
            }))
          };
          return RR.addEventListener("click", JR, !0), () => {
            RR.removeEventListener("click", JR, !0)
          }
        }), []);
        const [JJ, GJ] = (0, yR.useState)(0);
        (0, yR.useEffect)((() => {
          if (!QR || !OR.current) return void GJ(0);
          const RR = OR.current.querySelectorAll(".DocsHighlight").length;
          GJ(RR)
        }), [QR, RJ]), (0, yR.useEffect)((() => {
          if (null === oR || !OR.current) return;
          cR(null);
          const RR = OR.current.querySelectorAll(".DocsHighlight");
          if (0 === RR.length) return;
          const JR = Math.min(oR, RR.length - 1);
          HR(JR), RR.forEach((RR => {
            RR.classList.remove("DocsHighlightActive")
          })), RR[JR].classList.add("DocsHighlightActive"), RR[JR].scrollIntoView({
            block: "center",
            behavior: "smooth"
          })
        }), [oR, RJ]);
        const yJ = (0, yR.useCallback)((RR => {
            if (!OR.current) return;
            const JR = OR.current.querySelectorAll(".DocsHighlight");
            if (0 === JR.length) return;
            const GR = (DR + RR + JR.length) % JR.length;
            HR(GR), cR(GR)
          }), [DR]),
          tJ = (0, yR.useCallback)((RR => {
            var JR;
            const GR = null === (JR = CR[RR]) || void 0 === JR ? void 0 : JR.tabStep;
            GR && GR === dR && (0, AR.e)(GR), RR !== gR ? (IR(!0), bR(RR), HR(0), OR.current && (OR.current.scrollTop = 0), QR && cR(0)) : IR(!PR)
          }), [QR, gR, PR, dR]),
          uJ = (0, yR.useCallback)((RR => {
            var JR;
            const GR = Array.from((null === (JR = OR.current) || void 0 === JR ? void 0 : JR.querySelectorAll(".DocsH2, .DocsH3")) || []).find((JR => {
              var GR;
              return null === (GR = JR.textContent) || void 0 === GR ? void 0 : GR.includes(RR)
            }));
            GR && GR.scrollIntoView({
              block: "start",
              behavior: "smooth"
            })
          }), [OR]),
          ZJ = (0, yR.useCallback)((RR => {
            var JR, GR;
            const yR = null !== (JR = null === (GR = vR.current) || void 0 === GR ? void 0 : GR.clientWidth) && void 0 !== JR ? JR : window.innerWidth,
              tR = Math.max(120, yR - 200);
            return Math.min(Math.max(RR, 120), tR)
          }), []),
          qJ = (0, yR.useCallback)((() => {
            var RR;
            SR.current && (SR.current = !1, null === (RR = vR.current) || void 0 === RR || RR.classList.remove("DocsSidebarResizing"))
          }), []),
          iJ = (0, yR.useCallback)((RR => {
            var JR;
            RR.preventDefault(), SR.current = !0, null === (JR = vR.current) || void 0 === JR || JR.classList.add("DocsSidebarResizing")
          }), []);
        (0, yR.useEffect)((() => {
          const RR = vR.current,
            JR = RR => {
              if (!SR.current || !vR.current) return;
              const JR = vR.current.getBoundingClientRect().left;
              zR(ZJ(RR.clientX - JR))
            };
          return window.addEventListener("mousemove", JR), window.addEventListener("mouseup", qJ), () => {
            window.removeEventListener("mousemove", JR), window.removeEventListener("mouseup", qJ), null === RR || void 0 === RR || RR.classList.remove("DocsSidebarResizing")
          }
        }), [ZJ, qJ]);
        const fJ = (0, yR.useCallback)((RR => {
          if (RR) {
            const [JR, GR] = RR.slice(1).split("-");
            GR && (jR.current = {
              docId: JR,
              subsection: GR
            }), JR && tJ(JR)
          }
        }), [tJ]);
        (0, yR.useEffect)((() => {
          const RR = jR.current;
          RR && gR === RR.docId && (setTimeout((() => {
            uJ(RR.subsection)
          }), 0), jR.current = null)
        })), (0, yR.useEffect)((() => {
          if (!OR.current) return;
          OR.current.querySelectorAll("a.DocsAnchor").forEach((RR => {
            RR.addEventListener("click", (JR => {
              JR.preventDefault(), fJ(RR.dataset.id)
            }))
          }))
        }), [gR, fJ]);
        const VJ = Object.values(CR).find((RR => (null === RR || void 0 === RR ? void 0 : RR.pageStep) === dR));
        return (0, rR.jsx)(WR.f, {
          tutorial: "docsOverview",
          step: null !== (XR = null === VJ || void 0 === VJ ? void 0 : VJ.pageStep) && void 0 !== XR ? XR : "docsPanel",
          text: sR(null !== (MR = null === VJ || void 0 === VJ ? void 0 : VJ.pageText) && void 0 !== MR ? MR : "codeEditor:tutorialDocsPanel"),
          enabled: pR,
          placement: "left",
          onPrevious: VJ ? void 0 : lR,
          children: (0, rR.jsxs)("div", {
            className: "DocsPanel",
            ref: vR,
            children: [(0, rR.jsxs)("div", {
              className: "DocsSidebar",
              style: {
                width: mR,
                minWidth: mR,
                maxWidth: mR
              },
              children: [(0, rR.jsx)(uR.b, {
                className: "DocsSearch",
                placeholderText: "\ud83d\udd0e Search docs...",
                onValueChange: RR => {
                  NR(RR), HR(0), cR(0)
                }
              }, ER), (0, rR.jsx)("div", {
                className: "DocsNavList",
                children: QR ? FR.map((RR => (0, rR.jsxs)("div", {
                  className: qR()("DocsNavItem", "SearchResult", {
                    Active: RR.doc.id === (null === TR || void 0 === TR ? void 0 : TR.id)
                  }),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    tJ(RR.doc.id)
                  },
                  children: [(0, rR.jsxs)("div", {
                    className: "SearchResultTitle",
                    children: [RR.doc.title, (0, rR.jsx)("span", {
                      className: "SearchResultCount",
                      children: RR.matchCount
                    })]
                  }), (0, rR.jsx)("div", {
                    className: "SearchResultSnippet",
                    children: LR(RR.snippet, xR)
                  })]
                }, RR.doc.id))) : tR.e.map((RR => {
                  const JR = (0, rR.jsxs)("div", {
                      className: qR()("DocsNavItem", {
                        Active: RR.id === (null === TR || void 0 === TR ? void 0 : TR.id)
                      }),
                      "data-pad-focusable": !0,
                      onClick: () => {
                        tJ(RR.id)
                      },
                      children: [(0, rR.jsx)("span", {
                        className: "DocsNavItemTitle",
                        children: RR.title
                      }), RR.subsections && RR.id === (null === TR || void 0 === TR ? void 0 : TR.id) && PR && (0, rR.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, rR.jsx)(nR.d, {
                          name: "angle-down"
                        })
                      }), RR.subsections && (RR.id !== (null === TR || void 0 === TR ? void 0 : TR.id) || !PR) && (0, rR.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, rR.jsx)(nR.d, {
                          name: "angle-up"
                        })
                      })]
                    }),
                    GR = CR[RR.id];
                  return (0, rR.jsxs)(yR.Fragment, {
                    children: [GR && (0, rR.jsx)(WR.f, {
                      tutorial: "docsOverview",
                      step: GR.tabStep,
                      text: sR(GR.tabText),
                      enabled: pR,
                      placement: "left",
                      waitForClick: !0,
                      children: JR
                    }), !GR && JR, PR && RR.subsections && RR.id === (null === TR || void 0 === TR ? void 0 : TR.id) && RR.subsections.map((RR => (0, rR.jsx)("div", {
                      className: "DocsNavItem DocsSubsection",
                      "data-pad-focusable": !0,
                      onClick: () => {
                        uJ(RR)
                      },
                      children: RR
                    }, RR)))]
                  }, RR.id)
                }))
              }), (0, rR.jsx)("div", {
                className: "DocsSidebarButtonContainer",
                children: (0, rR.jsx)(UR.h, {
                  tooltipInner: sR("codeEditor:popOutDocsTooltip"),
                  placement: "top",
                  children: (0, rR.jsx)(iR.g, {
                    className: "DocsSidebarButton",
                    onClick: BR,
                    children: sR("codeEditor:popOutDocs")
                  })
                })
              })]
            }), (0, rR.jsx)("div", {
              className: "DocsSidebarResizeHandle",
              onMouseDown: iJ
            }), (0, rR.jsxs)("div", {
              className: "DocsContentWrapper",
              children: [QR && JJ > 0 && (0, rR.jsxs)("div", {
                className: "DocsMatchNav",
                children: [(0, rR.jsxs)("span", {
                  className: "DocsMatchNavLabel",
                  children: [DR + 1, " / ", JJ]
                }), (0, rR.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    yJ(-1)
                  },
                  children: "\u25b2"
                }), (0, rR.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    yJ(1)
                  },
                  children: "\u25bc"
                })]
              }), (0, rR.jsx)("div", {
                className: "DocsContent",
                ref: OR,
                dangerouslySetInnerHTML: {
                  __html: RJ
                }
              })]
            })]
          })
        })
      }))
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);