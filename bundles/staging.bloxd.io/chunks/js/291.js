export const id = 291;
export const ids = [291];
export const modules = {
  40536: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      default: () => lY
    });
    var FY = DY(61),
      AY = DY(4322),
      IY = DY(1654),
      RY = DY(1092),
      OY = DY.n(RY),
      gY = DY(1437),
      aY = DY(1211),
      vY = DY(4290),
      uY = DY(4299),
      sY = DY(4308),
      iY = DY(1125);

    function yY(YY) {
      return YY.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    vY.e.registerLanguage("javascript", uY.d), vY.e.registerLanguage("typescript", sY.d);

    function QY(YY, rY) {
      const DY = yY(YY).replace(/"/g, "&quot;");
      return `<button type="button" class="DocsCopyButton ${rY}" title="${DY}" aria-label="${DY}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5"/><path d="M10.5 3.5V1.5H1.5v9h2"/></svg><svg class="DocsCopiedIcon" viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 8.5l3.5 3.5 7.5-7.5"/></svg></button>`
    }

    function oY(YY, rY) {
      const DY = [],
        FY = YY.toLowerCase(),
        AY = rY.toLowerCase();
      let IY = 0;
      for (; IY < YY.length;) {
        const RY = FY.indexOf(AY, IY);
        if (-1 === RY) {
          DY.push(YY.slice(IY));
          break
        }
        RY > IY && DY.push(YY.slice(IY, RY)), DY.push((0, iY.jsx)("mark", {
          className: "DocsHighlight",
          children: YY.slice(RY, RY + rY.length)
        }, RY)), IY = RY + rY.length
      }
      return DY
    }
    var WY = DY(1098),
      EY = DY(1354),
      mY = DY(36263),
      VY = DY(36268);
    const SY = {
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
      lY = (0, FY.memo)((function(YY) {
        var rY, DY, RY, uY, sY, lY, TY;
        let {
          popOutDocs: eY,
          hideDocs: NY,
          tutorialEnabled: BY
        } = YY;
        const [cY, KY] = (0, FY.useState)(AY.b[0].id), HY = (0, FY.useRef)(null), zY = (0, FY.useRef)(null), [ZY, CY] = (0, FY.useState)(""), [fY, jY] = (0, FY.useState)(0), [hY, dY] = (0, FY.useState)(null), [JY, MY] = (0, FY.useState)(!1), [wY, bY] = (0, FY.useState)(160), XY = (0, FY.useRef)(!1), qY = (0, FY.useRef)(null), pY = (0, mY.j)("docsOverview"), [kY, GY] = (0, FY.useState)(0), xY = Object.values(SY).some((YY => (null === YY || void 0 === YY ? void 0 : YY.tabStep) === pY));
        (0, FY.useEffect)((() => {
          xY && ZY.length > 0 && (CY(""), GY((YY => YY + 1)))
        }), [xY, ZY]);
        const nY = ZY.length > 0,
          PY = (0, FY.useMemo)((() => function(YY) {
            if (!YY) return [];
            const rY = YY.toLowerCase(),
              DY = [];
            for (const FY of AY.b) {
              const YY = FY.content.toLowerCase();
              let AY = 0,
                IY = -1,
                RY = 0,
                OY = YY.indexOf(rY, RY);
              for (; - 1 !== OY;) - 1 === IY && (IY = OY), AY++, RY = OY + rY.length, OY = YY.indexOf(rY, RY);
              if (0 === AY) continue;
              const gY = Math.max(0, IY - 40),
                aY = Math.min(FY.content.length, IY + rY.length + 40),
                vY = (gY > 0 ? "..." : "") + FY.content.slice(gY, aY).replace(/\n/g, " ") + (aY < FY.content.length ? "..." : "");
              DY.push({
                doc: FY,
                matchCount: AY,
                snippet: vY
              })
            }
            return DY.sort(((YY, rY) => rY.matchCount - YY.matchCount)), DY
          }(ZY)), [ZY]),
          UY = nY ? null !== (rY = null !== (DY = null === (RY = PY.find((YY => YY.doc.id === cY))) || void 0 === RY ? void 0 : RY.doc) && void 0 !== DY ? DY : null === (uY = PY[0]) || void 0 === uY ? void 0 : uY.doc) && void 0 !== rY ? rY : null : null !== (sY = AY.b.find((YY => YY.id === cY))) && void 0 !== sY ? sY : AY.b[0],
          {
            t: LY
          } = (0, aY.C)(),
          tY = LY("codeEditor:copySnippet"),
          Yr = (0, FY.useMemo)((() => UY ? function(YY, rY, DY, FY) {
            let AY = rY;
            AY = AY.replace(/\r\n/g, "\n");
            const IY = [];
            AY = AY.replace(/```(\w*)\n([\s\S]*?)```/g, ((YY, rY, FY) => {
              const AY = IY.length;
              let RY = yY(FY);
              try {
                RY = vY.e.highlight(FY.trimEnd(), {
                  language: rY
                }).value
              } catch (OY) {
                console.warn("Could not highlight documentation code block", OY)
              }
              return IY.push(`<div class="DocsCodeBlockRow"><pre class="DocsCodeBlock" data-lang="${rY}"><code>${RY}</code></pre>${QY(DY,"DocsCopyBlock")}</div>`), `\0PLACEHOLDER_${AY}\0`
            })), AY = AY.replace(/(`{1,2})([^\n]+?)\1(?!`)/g, ((rY, FY, AY) => {
              const RY = IY.length,
                OY = 2 === FY.length ? AY.replace(/^ (.*) $/, "$1") : AY;
              let gY = yY(OY);
              try {
                "apiReference" !== YY && "callbacks" !== YY || (gY = vY.e.highlight(OY.trimEnd().replaceAll("\\|", "|"), {
                  language: "typescript"
                }).value)
              } catch (aY) {
                console.warn("Could not highlight documentation snippet", aY)
              }
              return IY.push(`<span class="DocsInlineCodeRow"><code class="DocsInlineCode">${gY}</code>${QY(DY,"DocsCopyInline")}</span>`), `\0PLACEHOLDER_${RY}\0`
            })), AY = yY(AY), AY = AY.replace(/^#### (.+)$/gm, '<h4 class="DocsH4">$1</h4>'), AY = AY.replace(/^### (.+)$/gm, '<h3 class="DocsH3">$1</h3>'), AY = AY.replace(/^## (.+)$/gm, '<h2 class="DocsH2">$1</h2>'), AY = AY.replace(/^# (.+)$/gm, '<h1 class="DocsH1">$1</h1>'), AY = AY.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"), AY = AY.replace(/\[([^\]]+)\]\(([^)]+)\)/g, ((YY, rY, DY) => DY.startsWith("#") ? `<a class="DocsAnchor" data-id="${DY}">${rY}</a>` : `<a href="${DY}" target="_blank" rel="noopener noreferrer">${rY}</a>`)), AY = AY.replace(/^(\|.+\|)\n(\|[\s:\-|]+\|)\n((?:\|.+\|\s*\r?\n?)*)/gm, ((YY, rY, DY, FY) => `<table class="DocsTable"><thead><tr>${rY.split("|").slice(1,-1).map((YY=>`<th>${YY.trim()}</th>`)).join("")}</tr></thead><tbody>${FY.trim().split("\n").map((YY=>`<tr>${YY.split("|").slice(1,-1).map((YY=>`<td>${YY.trim()}</td>`)).join("")}</tr>`)).join("")}</tbody></table>`)), AY = AY.replace(/(?:^[ \t]*([*-])[ \t]+.+(?:\n|$))+/gm, ((YY, rY) => function(YY, rY) {
              const DY = "*" === rY,
                FY = [];
              for (const OY of YY.split("\n")) {
                const YY = OY.match(/^([ \t]*)(?:[*-])[ \t]+(.+)$/);
                YY && FY.push({
                  indent: YY[1].replace(/\t/g, "  ").length,
                  content: YY[2]
                })
              }
              let AY = "";
              const IY = [],
                RY = DY ? "ol" : "ul";
              for (const {
                  indent: OY,
                  content: gY
                }
                of FY) {
                for (; IY.length > 0 && OY < IY[IY.length - 1];) AY += `</${RY}></li>`, IY.pop();
                (0 === IY.length || OY > IY[IY.length - 1]) && (IY.length > 0 && (AY = AY.replace(/<\/li>$/, "")), AY += `<${RY} class="DocsList">`, IY.push(OY)), AY += `<li class="DocsListItem">${gY}</li>`
              }
              for (; IY.length > 0;) AY += `</${RY}>`, IY.pop(), IY.length > 0 && (AY += "</li>");
              return AY
            }(YY, rY))), AY = AY.replace(/\n{2,}/g, "\n<br/>\n");
            for (let RY = 0; RY < IY.length; RY++) AY = AY.replace(`\0PLACEHOLDER_${RY}\0`, IY[RY]);
            if (FY) {
              const YY = yY(FY).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                rY = new RegExp(YY, "gi");
              AY = AY.replace(/([^<>]+)(?=<|$)/g, (YY => YY.replace(rY, (YY => `<mark class="DocsHighlight">${YY}</mark>`))))
            }
            return AY
          }(UY.id, UY.content, tY, nY ? ZY : void 0) : ""), [UY, tY, nY, ZY]);
        (0, FY.useEffect)((() => {
          const YY = zY.current;
          if (!YY) return;
          const rY = YY => {
            var rY, DY, FY, AY, IY;
            const RY = null === (rY = (DY = YY.target).closest) || void 0 === rY ? void 0 : rY.call(DY, ".DocsCopyButton");
            if (!RY) return;
            YY.preventDefault(), YY.stopPropagation();
            const OY = null !== (FY = null === (AY = RY.parentElement) || void 0 === AY || null === (IY = AY.querySelector("code")) || void 0 === IY ? void 0 : IY.textContent) && void 0 !== FY ? FY : "";
            navigator.clipboard.writeText(OY.trimEnd()).then((() => {
              RY.classList.add("Copied"), setTimeout((() => {
                RY.classList.remove("Copied")
              }), 1500)
            })).catch((YY => {
              console.warn("Could not copy documentation code", YY)
            }))
          };
          return YY.addEventListener("click", rY, !0), () => {
            YY.removeEventListener("click", rY, !0)
          }
        }), []);
        const [rr, Dr] = (0, FY.useState)(0);
        (0, FY.useEffect)((() => {
          if (!nY || !zY.current) return void Dr(0);
          const YY = zY.current.querySelectorAll(".DocsHighlight").length;
          Dr(YY)
        }), [nY, Yr]), (0, FY.useEffect)((() => {
          if (null === hY || !zY.current) return;
          dY(null);
          const YY = zY.current.querySelectorAll(".DocsHighlight");
          if (0 === YY.length) return;
          const rY = Math.min(hY, YY.length - 1);
          jY(rY), YY.forEach((YY => {
            YY.classList.remove("DocsHighlightActive")
          })), YY[rY].classList.add("DocsHighlightActive"), YY[rY].scrollIntoView({
            block: "center",
            behavior: "smooth"
          })
        }), [hY, Yr]);
        const Fr = (0, FY.useCallback)((YY => {
            if (!zY.current) return;
            const rY = zY.current.querySelectorAll(".DocsHighlight");
            if (0 === rY.length) return;
            const DY = (fY + YY + rY.length) % rY.length;
            jY(DY), dY(DY)
          }), [fY]),
          Ar = (0, FY.useCallback)((YY => {
            var rY;
            const DY = null === (rY = SY[YY]) || void 0 === rY ? void 0 : rY.tabStep;
            DY && DY === pY && (0, VY.d)(DY), YY !== cY ? (MY(!0), KY(YY), jY(0), zY.current && (zY.current.scrollTop = 0), nY && dY(0)) : MY(!JY)
          }), [nY, cY, JY, pY]),
          Ir = (0, FY.useCallback)((YY => {
            var rY;
            const DY = Array.from((null === (rY = zY.current) || void 0 === rY ? void 0 : rY.querySelectorAll(".DocsH2, .DocsH3")) || []).find((rY => {
              var DY;
              return null === (DY = rY.textContent) || void 0 === DY ? void 0 : DY.includes(YY)
            }));
            DY && DY.scrollIntoView({
              block: "start",
              behavior: "smooth"
            })
          }), [zY]),
          Rr = (0, FY.useCallback)((YY => {
            var rY, DY;
            const FY = null !== (rY = null === (DY = HY.current) || void 0 === DY ? void 0 : DY.clientWidth) && void 0 !== rY ? rY : window.innerWidth,
              AY = Math.max(120, FY - 200);
            return Math.min(Math.max(YY, 120), AY)
          }), []),
          Or = (0, FY.useCallback)((() => {
            var YY;
            XY.current && (XY.current = !1, null === (YY = HY.current) || void 0 === YY || YY.classList.remove("DocsSidebarResizing"))
          }), []),
          gr = (0, FY.useCallback)((YY => {
            var rY;
            YY.preventDefault(), XY.current = !0, null === (rY = HY.current) || void 0 === rY || rY.classList.add("DocsSidebarResizing")
          }), []);
        (0, FY.useEffect)((() => {
          const YY = HY.current,
            rY = YY => {
              if (!XY.current || !HY.current) return;
              const rY = HY.current.getBoundingClientRect().left;
              bY(Rr(YY.clientX - rY))
            };
          return window.addEventListener("mousemove", rY), window.addEventListener("mouseup", Or), () => {
            window.removeEventListener("mousemove", rY), window.removeEventListener("mouseup", Or), null === YY || void 0 === YY || YY.classList.remove("DocsSidebarResizing")
          }
        }), [Rr, Or]);
        const ar = (0, FY.useCallback)((YY => {
          if (YY) {
            const [rY, DY] = YY.slice(1).split("-");
            DY && (qY.current = {
              docId: rY,
              subsection: DY
            }), rY && Ar(rY)
          }
        }), [Ar]);
        (0, FY.useEffect)((() => {
          const YY = qY.current;
          YY && cY === YY.docId && (setTimeout((() => {
            Ir(YY.subsection)
          }), 0), qY.current = null)
        })), (0, FY.useEffect)((() => {
          if (!zY.current) return;
          zY.current.querySelectorAll("a.DocsAnchor").forEach((YY => {
            YY.addEventListener("click", (rY => {
              rY.preventDefault(), ar(YY.dataset.id)
            }))
          }))
        }), [cY, ar]);
        const vr = Object.values(SY).find((YY => (null === YY || void 0 === YY ? void 0 : YY.pageStep) === pY));
        return (0, iY.jsx)(mY.f, {
          tutorial: "docsOverview",
          step: null !== (lY = null === vr || void 0 === vr ? void 0 : vr.pageStep) && void 0 !== lY ? lY : "docsPanel",
          text: LY(null !== (TY = null === vr || void 0 === vr ? void 0 : vr.pageText) && void 0 !== TY ? TY : "codeEditor:tutorialDocsPanel"),
          enabled: BY,
          placement: "left",
          onPrevious: vr ? void 0 : NY,
          children: (0, iY.jsxs)("div", {
            className: "DocsPanel",
            ref: HY,
            children: [(0, iY.jsxs)("div", {
              className: "DocsSidebar",
              style: {
                width: wY,
                minWidth: wY,
                maxWidth: wY
              },
              children: [(0, iY.jsx)(IY.d, {
                className: "DocsSearch",
                placeholderText: "\ud83d\udd0e Search docs...",
                onValueChange: YY => {
                  CY(YY), jY(0), dY(0)
                }
              }, kY), (0, iY.jsx)("div", {
                className: "DocsNavList",
                children: nY ? PY.map((YY => (0, iY.jsxs)("div", {
                  className: OY()("DocsNavItem", "SearchResult", {
                    Active: YY.doc.id === (null === UY || void 0 === UY ? void 0 : UY.id)
                  }),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    Ar(YY.doc.id)
                  },
                  children: [(0, iY.jsxs)("div", {
                    className: "SearchResultTitle",
                    children: [YY.doc.title, (0, iY.jsx)("span", {
                      className: "SearchResultCount",
                      children: YY.matchCount
                    })]
                  }), (0, iY.jsx)("div", {
                    className: "SearchResultSnippet",
                    children: oY(YY.snippet, ZY)
                  })]
                }, YY.doc.id))) : AY.b.map((YY => {
                  const rY = (0, iY.jsxs)("div", {
                      className: OY()("DocsNavItem", {
                        Active: YY.id === (null === UY || void 0 === UY ? void 0 : UY.id)
                      }),
                      "data-pad-focusable": !0,
                      onClick: () => {
                        Ar(YY.id)
                      },
                      children: [(0, iY.jsx)("span", {
                        className: "DocsNavItemTitle",
                        children: YY.title
                      }), YY.subsections && YY.id === (null === UY || void 0 === UY ? void 0 : UY.id) && JY && (0, iY.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, iY.jsx)(WY.e, {
                          name: "angle-down"
                        })
                      }), YY.subsections && (YY.id !== (null === UY || void 0 === UY ? void 0 : UY.id) || !JY) && (0, iY.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, iY.jsx)(WY.e, {
                          name: "angle-up"
                        })
                      })]
                    }),
                    DY = SY[YY.id];
                  return (0, iY.jsxs)(FY.Fragment, {
                    children: [DY && (0, iY.jsx)(mY.f, {
                      tutorial: "docsOverview",
                      step: DY.tabStep,
                      text: LY(DY.tabText),
                      enabled: BY,
                      placement: "left",
                      waitForClick: !0,
                      children: rY
                    }), !DY && rY, JY && YY.subsections && YY.id === (null === UY || void 0 === UY ? void 0 : UY.id) && YY.subsections.map((YY => (0, iY.jsx)("div", {
                      className: "DocsNavItem DocsSubsection",
                      "data-pad-focusable": !0,
                      onClick: () => {
                        Ir(YY)
                      },
                      children: YY
                    }, YY)))]
                  }, YY.id)
                }))
              }), (0, iY.jsx)("div", {
                className: "DocsSidebarButtonContainer",
                children: (0, iY.jsx)(EY.g, {
                  tooltipInner: LY("codeEditor:popOutDocsTooltip"),
                  placement: "top",
                  children: (0, iY.jsx)(gY.f, {
                    className: "DocsSidebarButton",
                    onClick: eY,
                    children: LY("codeEditor:popOutDocs")
                  })
                })
              })]
            }), (0, iY.jsx)("div", {
              className: "DocsSidebarResizeHandle",
              onMouseDown: gr
            }), (0, iY.jsxs)("div", {
              className: "DocsContentWrapper",
              children: [nY && rr > 0 && (0, iY.jsxs)("div", {
                className: "DocsMatchNav",
                children: [(0, iY.jsxs)("span", {
                  className: "DocsMatchNavLabel",
                  children: [fY + 1, " / ", rr]
                }), (0, iY.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    Fr(-1)
                  },
                  children: "\u25b2"
                }), (0, iY.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    Fr(1)
                  },
                  children: "\u25bc"
                })]
              }), (0, iY.jsx)("div", {
                className: "DocsContent",
                ref: zY,
                dangerouslySetInnerHTML: {
                  __html: Yr
                }
              })]
            })]
          })
        })
      }))
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);