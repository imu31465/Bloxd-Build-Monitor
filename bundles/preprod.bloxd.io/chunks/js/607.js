export const id = 607;
export const ids = [607];
export const modules = {
  44152: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      default: () => RU
    });
    var cU = zU(61),
      yU = zU(5270),
      QU = zU(1726),
      AU = zU(1106),
      FU = zU.n(AU),
      oU = zU(1494),
      DU = zU(1193),
      EU = zU(5235),
      YU = zU(5251),
      NU = zU(5253),
      IU = zU(1305);

    function pU(UU) {
      return UU.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    EU.b.registerLanguage("javascript", YU.c), EU.b.registerLanguage("typescript", NU.c);

    function aU(UU, XU) {
      const zU = pU(UU).replace(/"/g, "&quot;");
      return `<button type="button" class="DocsCopyButton ${XU}" title="${zU}" aria-label="${zU}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5"/><path d="M10.5 3.5V1.5H1.5v9h2"/></svg><svg class="DocsCopiedIcon" viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 8.5l3.5 3.5 7.5-7.5"/></svg></button>`
    }

    function tU(UU, XU) {
      const zU = [],
        cU = UU.toLowerCase(),
        yU = XU.toLowerCase();
      let QU = 0;
      for (; QU < UU.length;) {
        const AU = cU.indexOf(yU, QU);
        if (-1 === AU) {
          zU.push(UU.slice(QU));
          break
        }
        AU > QU && zU.push(UU.slice(QU, AU)), zU.push((0, IU.jsx)("mark", {
          className: "DocsHighlight",
          children: UU.slice(AU, AU + XU.length)
        }, AU)), QU = AU + XU.length
      }
      return zU
    }
    var gU = zU(1390),
      kU = zU(1420),
      GU = zU(37604),
      BU = zU(37612);
    const ZU = {
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
      RU = (0, cU.memo)((function(UU) {
        var XU, zU, AU, YU, NU, RU, PU;
        let {
          popOutDocs: WU,
          hideDocs: dU,
          tutorialEnabled: LU
        } = UU;
        const [eU, CU] = (0, cU.useState)(yU.b[0].id), wU = (0, cU.useRef)(null), qU = (0, cU.useRef)(null), [OU, SU] = (0, cU.useState)(""), [rU, uU] = (0, cU.useState)(0), [fU, iU] = (0, cU.useState)(null), [HU, MU] = (0, cU.useState)(!1), [vU, VU] = (0, cU.useState)(160), sU = (0, cU.useRef)(!1), nU = (0, cU.useRef)(null), mU = (0, GU.k)("docsOverview"), [lU, xU] = (0, cU.useState)(0), JU = Object.values(ZU).some((UU => (null === UU || void 0 === UU ? void 0 : UU.tabStep) === mU));
        (0, cU.useEffect)((() => {
          JU && OU.length > 0 && (SU(""), xU((UU => UU + 1)))
        }), [JU, OU]);
        const jU = OU.length > 0,
          KU = (0, cU.useMemo)((() => function(UU) {
            if (!UU) return [];
            const XU = UU.toLowerCase(),
              zU = [];
            for (const cU of yU.b) {
              const UU = cU.content.toLowerCase();
              let yU = 0,
                QU = -1,
                AU = 0,
                FU = UU.indexOf(XU, AU);
              for (; - 1 !== FU;) - 1 === QU && (QU = FU), yU++, AU = FU + XU.length, FU = UU.indexOf(XU, AU);
              if (0 === yU) continue;
              const oU = Math.max(0, QU - 40),
                DU = Math.min(cU.content.length, QU + XU.length + 40),
                EU = (oU > 0 ? "..." : "") + cU.content.slice(oU, DU).replace(/\n/g, " ") + (DU < cU.content.length ? "..." : "");
              zU.push({
                doc: cU,
                matchCount: yU,
                snippet: EU
              })
            }
            return zU.sort(((UU, XU) => XU.matchCount - UU.matchCount)), zU
          }(OU)), [OU]),
          bU = jU ? null !== (XU = null !== (zU = null === (AU = KU.find((UU => UU.doc.id === eU))) || void 0 === AU ? void 0 : AU.doc) && void 0 !== zU ? zU : null === (YU = KU[0]) || void 0 === YU ? void 0 : YU.doc) && void 0 !== XU ? XU : null : null !== (NU = yU.b.find((UU => UU.id === eU))) && void 0 !== NU ? NU : yU.b[0],
          {
            t: TU
          } = (0, DU.I)(),
          hU = TU("codeEditor:copySnippet"),
          UX = (0, cU.useMemo)((() => bU ? function(UU, XU, zU, cU) {
            let yU = XU;
            yU = yU.replace(/\r\n/g, "\n");
            const QU = [];
            yU = yU.replace(/```(\w*)\n([\s\S]*?)```/g, ((UU, XU, cU) => {
              const yU = QU.length;
              let AU = pU(cU);
              try {
                AU = EU.b.highlight(cU.trimEnd(), {
                  language: XU
                }).value
              } catch (FU) {
                console.warn("Could not highlight documentation code block", FU)
              }
              return QU.push(`<div class="DocsCodeBlockRow"><pre class="DocsCodeBlock" data-lang="${XU}"><code>${AU}</code></pre>${aU(zU,"DocsCopyBlock")}</div>`), `\0PLACEHOLDER_${yU}\0`
            })), yU = yU.replace(/(`{1,2})([^\n]+?)\1(?!`)/g, ((XU, cU, yU) => {
              const AU = QU.length,
                FU = 2 === cU.length ? yU.replace(/^ (.*) $/, "$1") : yU;
              let oU = pU(FU);
              try {
                "apiReference" !== UU && "callbacks" !== UU || (oU = EU.b.highlight(FU.trimEnd().replaceAll("\\|", "|"), {
                  language: "typescript"
                }).value)
              } catch (DU) {
                console.warn("Could not highlight documentation snippet", DU)
              }
              return QU.push(`<span class="DocsInlineCodeRow"><code class="DocsInlineCode">${oU}</code>${aU(zU,"DocsCopyInline")}</span>`), `\0PLACEHOLDER_${AU}\0`
            })), yU = pU(yU), yU = yU.replace(/^#### (.+)$/gm, '<h4 class="DocsH4">$1</h4>'), yU = yU.replace(/^### (.+)$/gm, '<h3 class="DocsH3">$1</h3>'), yU = yU.replace(/^## (.+)$/gm, '<h2 class="DocsH2">$1</h2>'), yU = yU.replace(/^# (.+)$/gm, '<h1 class="DocsH1">$1</h1>'), yU = yU.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"), yU = yU.replace(/\[([^\]]+)\]\(([^)]+)\)/g, ((UU, XU, zU) => zU.startsWith("#") ? `<a class="DocsAnchor" data-id="${zU}">${XU}</a>` : `<a href="${zU}" target="_blank" rel="noopener noreferrer">${XU}</a>`)), yU = yU.replace(/^(\|.+\|)\n(\|[\s:\-|]+\|)\n((?:\|.+\|\s*\r?\n?)*)/gm, ((UU, XU, zU, cU) => `<table class="DocsTable"><thead><tr>${XU.split("|").slice(1,-1).map((UU=>`<th>${UU.trim()}</th>`)).join("")}</tr></thead><tbody>${cU.trim().split("\n").map((UU=>`<tr>${UU.split("|").slice(1,-1).map((UU=>`<td>${UU.trim()}</td>`)).join("")}</tr>`)).join("")}</tbody></table>`)), yU = yU.replace(/(?:^[ \t]*([*-])[ \t]+.+(?:\n|$))+/gm, ((UU, XU) => function(UU, XU) {
              const zU = "*" === XU,
                cU = [];
              for (const FU of UU.split("\n")) {
                const UU = FU.match(/^([ \t]*)(?:[*-])[ \t]+(.+)$/);
                UU && cU.push({
                  indent: UU[1].replace(/\t/g, "  ").length,
                  content: UU[2]
                })
              }
              let yU = "";
              const QU = [],
                AU = zU ? "ol" : "ul";
              for (const {
                  indent: FU,
                  content: oU
                }
                of cU) {
                for (; QU.length > 0 && FU < QU[QU.length - 1];) yU += `</${AU}></li>`, QU.pop();
                (0 === QU.length || FU > QU[QU.length - 1]) && (QU.length > 0 && (yU = yU.replace(/<\/li>$/, "")), yU += `<${AU} class="DocsList">`, QU.push(FU)), yU += `<li class="DocsListItem">${oU}</li>`
              }
              for (; QU.length > 0;) yU += `</${AU}>`, QU.pop(), QU.length > 0 && (yU += "</li>");
              return yU
            }(UU, XU))), yU = yU.replace(/\n{2,}/g, "\n<br/>\n");
            for (let AU = 0; AU < QU.length; AU++) yU = yU.replace(`\0PLACEHOLDER_${AU}\0`, QU[AU]);
            if (cU) {
              const UU = pU(cU).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                XU = new RegExp(UU, "gi");
              yU = yU.replace(/([^<>]+)(?=<|$)/g, (UU => UU.replace(XU, (UU => `<mark class="DocsHighlight">${UU}</mark>`))))
            }
            return yU
          }(bU.id, bU.content, hU, jU ? OU : void 0) : ""), [bU, hU, jU, OU]);
        (0, cU.useEffect)((() => {
          const UU = qU.current;
          if (!UU) return;
          const XU = UU => {
            var XU, zU, cU, yU, QU;
            const AU = null === (XU = (zU = UU.target).closest) || void 0 === XU ? void 0 : XU.call(zU, ".DocsCopyButton");
            if (!AU) return;
            UU.preventDefault(), UU.stopPropagation();
            const FU = null !== (cU = null === (yU = AU.parentElement) || void 0 === yU || null === (QU = yU.querySelector("code")) || void 0 === QU ? void 0 : QU.textContent) && void 0 !== cU ? cU : "";
            navigator.clipboard.writeText(FU.trimEnd()).then((() => {
              AU.classList.add("Copied"), setTimeout((() => {
                AU.classList.remove("Copied")
              }), 1500)
            })).catch((UU => {
              console.warn("Could not copy documentation code", UU)
            }))
          };
          return UU.addEventListener("click", XU, !0), () => {
            UU.removeEventListener("click", XU, !0)
          }
        }), []);
        const [XX, zX] = (0, cU.useState)(0);
        (0, cU.useEffect)((() => {
          if (!jU || !qU.current) return void zX(0);
          const UU = qU.current.querySelectorAll(".DocsHighlight").length;
          zX(UU)
        }), [jU, UX]), (0, cU.useEffect)((() => {
          if (null === fU || !qU.current) return;
          iU(null);
          const UU = qU.current.querySelectorAll(".DocsHighlight");
          if (0 === UU.length) return;
          const XU = Math.min(fU, UU.length - 1);
          uU(XU), UU.forEach((UU => {
            UU.classList.remove("DocsHighlightActive")
          })), UU[XU].classList.add("DocsHighlightActive"), UU[XU].scrollIntoView({
            block: "center",
            behavior: "smooth"
          })
        }), [fU, UX]);
        const cX = (0, cU.useCallback)((UU => {
            if (!qU.current) return;
            const XU = qU.current.querySelectorAll(".DocsHighlight");
            if (0 === XU.length) return;
            const zU = (rU + UU + XU.length) % XU.length;
            uU(zU), iU(zU)
          }), [rU]),
          yX = (0, cU.useCallback)((UU => {
            var XU;
            const zU = null === (XU = ZU[UU]) || void 0 === XU ? void 0 : XU.tabStep;
            zU && zU === mU && (0, BU.d)(zU), UU !== eU ? (MU(!0), CU(UU), uU(0), qU.current && (qU.current.scrollTop = 0), jU && iU(0)) : MU(!HU)
          }), [jU, eU, HU, mU]),
          QX = (0, cU.useCallback)((UU => {
            var XU;
            const zU = Array.from((null === (XU = qU.current) || void 0 === XU ? void 0 : XU.querySelectorAll(".DocsH2, .DocsH3")) || []).find((XU => {
              var zU;
              return null === (zU = XU.textContent) || void 0 === zU ? void 0 : zU.includes(UU)
            }));
            zU && zU.scrollIntoView({
              block: "start",
              behavior: "smooth"
            })
          }), [qU]),
          AX = (0, cU.useCallback)((UU => {
            var XU, zU;
            const cU = null !== (XU = null === (zU = wU.current) || void 0 === zU ? void 0 : zU.clientWidth) && void 0 !== XU ? XU : window.innerWidth,
              yU = Math.max(120, cU - 200);
            return Math.min(Math.max(UU, 120), yU)
          }), []),
          FX = (0, cU.useCallback)((() => {
            var UU;
            sU.current && (sU.current = !1, null === (UU = wU.current) || void 0 === UU || UU.classList.remove("DocsSidebarResizing"))
          }), []),
          oX = (0, cU.useCallback)((UU => {
            var XU;
            UU.preventDefault(), sU.current = !0, null === (XU = wU.current) || void 0 === XU || XU.classList.add("DocsSidebarResizing")
          }), []);
        (0, cU.useEffect)((() => {
          const UU = wU.current,
            XU = UU => {
              if (!sU.current || !wU.current) return;
              const XU = wU.current.getBoundingClientRect().left;
              VU(AX(UU.clientX - XU))
            };
          return window.addEventListener("mousemove", XU), window.addEventListener("mouseup", FX), () => {
            window.removeEventListener("mousemove", XU), window.removeEventListener("mouseup", FX), null === UU || void 0 === UU || UU.classList.remove("DocsSidebarResizing")
          }
        }), [AX, FX]);
        const DX = (0, cU.useCallback)((UU => {
          if (UU) {
            const [XU, zU] = UU.slice(1).split("-");
            zU && (nU.current = {
              docId: XU,
              subsection: zU
            }), XU && yX(XU)
          }
        }), [yX]);
        (0, cU.useEffect)((() => {
          const UU = nU.current;
          UU && eU === UU.docId && (setTimeout((() => {
            QX(UU.subsection)
          }), 0), nU.current = null)
        })), (0, cU.useEffect)((() => {
          if (!qU.current) return;
          qU.current.querySelectorAll("a.DocsAnchor").forEach((UU => {
            UU.addEventListener("click", (XU => {
              XU.preventDefault(), DX(UU.dataset.id)
            }))
          }))
        }), [eU, DX]);
        const EX = Object.values(ZU).find((UU => (null === UU || void 0 === UU ? void 0 : UU.pageStep) === mU));
        return (0, IU.jsx)(GU.h, {
          tutorial: "docsOverview",
          step: null !== (RU = null === EX || void 0 === EX ? void 0 : EX.pageStep) && void 0 !== RU ? RU : "docsPanel",
          text: TU(null !== (PU = null === EX || void 0 === EX ? void 0 : EX.pageText) && void 0 !== PU ? PU : "codeEditor:tutorialDocsPanel"),
          enabled: LU,
          placement: "left",
          onPrevious: EX ? void 0 : dU,
          children: (0, IU.jsxs)("div", {
            className: "DocsPanel",
            ref: wU,
            children: [(0, IU.jsxs)("div", {
              className: "DocsSidebar",
              style: {
                width: vU,
                minWidth: vU,
                maxWidth: vU
              },
              children: [(0, IU.jsx)(QU.e, {
                className: "DocsSearch",
                placeholderText: "\ud83d\udd0e Search docs...",
                onValueChange: UU => {
                  SU(UU), uU(0), iU(0)
                }
              }, lU), (0, IU.jsx)("div", {
                className: "DocsNavList",
                children: jU ? KU.map((UU => (0, IU.jsxs)("div", {
                  className: FU()("DocsNavItem", "SearchResult", {
                    Active: UU.doc.id === (null === bU || void 0 === bU ? void 0 : bU.id)
                  }),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    yX(UU.doc.id)
                  },
                  children: [(0, IU.jsxs)("div", {
                    className: "SearchResultTitle",
                    children: [UU.doc.title, (0, IU.jsx)("span", {
                      className: "SearchResultCount",
                      children: UU.matchCount
                    })]
                  }), (0, IU.jsx)("div", {
                    className: "SearchResultSnippet",
                    children: tU(UU.snippet, OU)
                  })]
                }, UU.doc.id))) : yU.b.map((UU => {
                  const XU = (0, IU.jsxs)("div", {
                      className: FU()("DocsNavItem", {
                        Active: UU.id === (null === bU || void 0 === bU ? void 0 : bU.id)
                      }),
                      "data-pad-focusable": !0,
                      onClick: () => {
                        yX(UU.id)
                      },
                      children: [(0, IU.jsx)("span", {
                        className: "DocsNavItemTitle",
                        children: UU.title
                      }), UU.subsections && UU.id === (null === bU || void 0 === bU ? void 0 : bU.id) && HU && (0, IU.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, IU.jsx)(gU.d, {
                          name: "angle-down"
                        })
                      }), UU.subsections && (UU.id !== (null === bU || void 0 === bU ? void 0 : bU.id) || !HU) && (0, IU.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, IU.jsx)(gU.d, {
                          name: "angle-up"
                        })
                      })]
                    }),
                    zU = ZU[UU.id];
                  return (0, IU.jsxs)(cU.Fragment, {
                    children: [zU && (0, IU.jsx)(GU.h, {
                      tutorial: "docsOverview",
                      step: zU.tabStep,
                      text: TU(zU.tabText),
                      enabled: LU,
                      placement: "left",
                      waitForClick: !0,
                      children: XU
                    }), !zU && XU, HU && UU.subsections && UU.id === (null === bU || void 0 === bU ? void 0 : bU.id) && UU.subsections.map((UU => (0, IU.jsx)("div", {
                      className: "DocsNavItem DocsSubsection",
                      "data-pad-focusable": !0,
                      onClick: () => {
                        QX(UU)
                      },
                      children: UU
                    }, UU)))]
                  }, UU.id)
                }))
              }), (0, IU.jsx)("div", {
                className: "DocsSidebarButtonContainer",
                children: (0, IU.jsx)(kU.d, {
                  tooltipInner: TU("codeEditor:popOutDocsTooltip"),
                  placement: "top",
                  children: (0, IU.jsx)(oU.f, {
                    className: "DocsSidebarButton",
                    onClick: WU,
                    children: TU("codeEditor:popOutDocs")
                  })
                })
              })]
            }), (0, IU.jsx)("div", {
              className: "DocsSidebarResizeHandle",
              onMouseDown: oX
            }), (0, IU.jsxs)("div", {
              className: "DocsContentWrapper",
              children: [jU && XX > 0 && (0, IU.jsxs)("div", {
                className: "DocsMatchNav",
                children: [(0, IU.jsxs)("span", {
                  className: "DocsMatchNavLabel",
                  children: [rU + 1, " / ", XX]
                }), (0, IU.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    cX(-1)
                  },
                  children: "\u25b2"
                }), (0, IU.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    cX(1)
                  },
                  children: "\u25bc"
                })]
              }), (0, IU.jsx)("div", {
                className: "DocsContent",
                ref: qU,
                dangerouslySetInnerHTML: {
                  __html: UX
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