export const id = 291;
export const ids = [291];
export const modules = {
  40282: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      default: () => mT
    });
    var iT = IT(46),
      zT = IT(4231),
      kT = IT(1624),
      WT = IT(1042),
      XT = IT.n(WT),
      BT = IT(1408),
      FT = IT(1171),
      ST = IT(4209),
      DT = IT(4224),
      LT = IT(4226),
      xT = IT(1083);

    function cT(TT) {
      return TT.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    ST.b.registerLanguage("javascript", DT.b), ST.b.registerLanguage("typescript", LT.c);

    function KT(TT, oT) {
      const IT = cT(TT).replace(/"/g, "&quot;");
      return `<button type="button" class="DocsCopyButton ${oT}" title="${IT}" aria-label="${IT}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5"/><path d="M10.5 3.5V1.5H1.5v9h2"/></svg><svg class="DocsCopiedIcon" viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 8.5l3.5 3.5 7.5-7.5"/></svg></button>`
    }

    function MT(TT, oT) {
      const IT = [],
        iT = TT.toLowerCase(),
        zT = oT.toLowerCase();
      let kT = 0;
      for (; kT < TT.length;) {
        const WT = iT.indexOf(zT, kT);
        if (-1 === WT) {
          IT.push(TT.slice(kT));
          break
        }
        WT > kT && IT.push(TT.slice(kT, WT)), IT.push((0, xT.jsx)("mark", {
          className: "DocsHighlight",
          children: TT.slice(WT, WT + oT.length)
        }, WT)), kT = WT + oT.length
      }
      return IT
    }
    var rT = IT(1055),
      AT = IT(1337),
      gT = IT(35839),
      hT = IT(35842);
    const wT = {
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
      mT = (0, iT.memo)((function(TT) {
        var oT, IT, WT, DT, LT, mT, eT;
        let {
          popOutDocs: RT,
          hideDocs: uT,
          tutorialEnabled: vT
        } = TT;
        const [ET, fT] = (0, iT.useState)(zT.d[0].id), CT = (0, iT.useRef)(null), jT = (0, iT.useRef)(null), [JT, UT] = (0, iT.useState)(""), [aT, YT] = (0, iT.useState)(0), [QT, OT] = (0, iT.useState)(null), [HT, nT] = (0, iT.useState)(!1), [qT, ZT] = (0, iT.useState)(160), lT = (0, iT.useRef)(!1), sT = (0, iT.useRef)(null), tT = (0, gT.i)("docsOverview"), [GT, pT] = (0, iT.useState)(0), bT = Object.values(wT).some((TT => (null === TT || void 0 === TT ? void 0 : TT.tabStep) === tT));
        (0, iT.useEffect)((() => {
          bT && JT.length > 0 && (UT(""), pT((TT => TT + 1)))
        }), [bT, JT]);
        const yT = JT.length > 0,
          NT = (0, iT.useMemo)((() => function(TT) {
            if (!TT) return [];
            const oT = TT.toLowerCase(),
              IT = [];
            for (const iT of zT.d) {
              const TT = iT.content.toLowerCase();
              let zT = 0,
                kT = -1,
                WT = 0,
                XT = TT.indexOf(oT, WT);
              for (; - 1 !== XT;) - 1 === kT && (kT = XT), zT++, WT = XT + oT.length, XT = TT.indexOf(oT, WT);
              if (0 === zT) continue;
              const BT = Math.max(0, kT - 40),
                FT = Math.min(iT.content.length, kT + oT.length + 40),
                ST = (BT > 0 ? "..." : "") + iT.content.slice(BT, FT).replace(/\n/g, " ") + (FT < iT.content.length ? "..." : "");
              IT.push({
                doc: iT,
                matchCount: zT,
                snippet: ST
              })
            }
            return IT.sort(((TT, oT) => oT.matchCount - TT.matchCount)), IT
          }(JT)), [JT]),
          PT = yT ? null !== (oT = null !== (IT = null === (WT = NT.find((TT => TT.doc.id === ET))) || void 0 === WT ? void 0 : WT.doc) && void 0 !== IT ? IT : null === (DT = NT[0]) || void 0 === DT ? void 0 : DT.doc) && void 0 !== oT ? oT : null : null !== (LT = zT.d.find((TT => TT.id === ET))) && void 0 !== LT ? LT : zT.d[0],
          {
            t: dT
          } = (0, FT.t)(),
          VT = dT("codeEditor:copySnippet"),
          To = (0, iT.useMemo)((() => PT ? function(TT, oT, IT, iT) {
            let zT = oT;
            zT = zT.replace(/\r\n/g, "\n");
            const kT = [];
            zT = zT.replace(/```(\w*)\n([\s\S]*?)```/g, ((TT, oT, iT) => {
              const zT = kT.length;
              let WT = cT(iT);
              try {
                WT = ST.b.highlight(iT.trimEnd(), {
                  language: oT
                }).value
              } catch (XT) {
                console.warn("Could not highlight documentation code block", XT)
              }
              return kT.push(`<div class="DocsCodeBlockRow"><pre class="DocsCodeBlock" data-lang="${oT}"><code>${WT}</code></pre>${KT(IT,"DocsCopyBlock")}</div>`), `\0PLACEHOLDER_${zT}\0`
            })), zT = zT.replace(/(`{1,2})([^\n]+?)\1(?!`)/g, ((oT, iT, zT) => {
              const WT = kT.length,
                XT = 2 === iT.length ? zT.replace(/^ (.*) $/, "$1") : zT;
              let BT = cT(XT);
              try {
                "apiReference" !== TT && "callbacks" !== TT || (BT = ST.b.highlight(XT.trimEnd().replaceAll("\\|", "|"), {
                  language: "typescript"
                }).value)
              } catch (FT) {
                console.warn("Could not highlight documentation snippet", FT)
              }
              return kT.push(`<span class="DocsInlineCodeRow"><code class="DocsInlineCode">${BT}</code>${KT(IT,"DocsCopyInline")}</span>`), `\0PLACEHOLDER_${WT}\0`
            })), zT = cT(zT), zT = zT.replace(/^#### (.+)$/gm, '<h4 class="DocsH4">$1</h4>'), zT = zT.replace(/^### (.+)$/gm, '<h3 class="DocsH3">$1</h3>'), zT = zT.replace(/^## (.+)$/gm, '<h2 class="DocsH2">$1</h2>'), zT = zT.replace(/^# (.+)$/gm, '<h1 class="DocsH1">$1</h1>'), zT = zT.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"), zT = zT.replace(/\[([^\]]+)\]\(([^)]+)\)/g, ((TT, oT, IT) => IT.startsWith("#") ? `<a class="DocsAnchor" data-id="${IT}">${oT}</a>` : `<a href="${IT}" target="_blank" rel="noopener noreferrer">${oT}</a>`)), zT = zT.replace(/^(\|.+\|)\n(\|[\s:\-|]+\|)\n((?:\|.+\|\s*\r?\n?)*)/gm, ((TT, oT, IT, iT) => `<table class="DocsTable"><thead><tr>${oT.split("|").slice(1,-1).map((TT=>`<th>${TT.trim()}</th>`)).join("")}</tr></thead><tbody>${iT.trim().split("\n").map((TT=>`<tr>${TT.split("|").slice(1,-1).map((TT=>`<td>${TT.trim()}</td>`)).join("")}</tr>`)).join("")}</tbody></table>`)), zT = zT.replace(/(?:^[ \t]*([*-])[ \t]+.+(?:\n|$))+/gm, ((TT, oT) => function(TT, oT) {
              const IT = "*" === oT,
                iT = [];
              for (const XT of TT.split("\n")) {
                const TT = XT.match(/^([ \t]*)(?:[*-])[ \t]+(.+)$/);
                TT && iT.push({
                  indent: TT[1].replace(/\t/g, "  ").length,
                  content: TT[2]
                })
              }
              let zT = "";
              const kT = [],
                WT = IT ? "ol" : "ul";
              for (const {
                  indent: XT,
                  content: BT
                }
                of iT) {
                for (; kT.length > 0 && XT < kT[kT.length - 1];) zT += `</${WT}></li>`, kT.pop();
                (0 === kT.length || XT > kT[kT.length - 1]) && (kT.length > 0 && (zT = zT.replace(/<\/li>$/, "")), zT += `<${WT} class="DocsList">`, kT.push(XT)), zT += `<li class="DocsListItem">${BT}</li>`
              }
              for (; kT.length > 0;) zT += `</${WT}>`, kT.pop(), kT.length > 0 && (zT += "</li>");
              return zT
            }(TT, oT))), zT = zT.replace(/\n{2,}/g, "\n<br/>\n");
            for (let WT = 0; WT < kT.length; WT++) zT = zT.replace(`\0PLACEHOLDER_${WT}\0`, kT[WT]);
            if (iT) {
              const TT = cT(iT).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                oT = new RegExp(TT, "gi");
              zT = zT.replace(/([^<>]+)(?=<|$)/g, (TT => TT.replace(oT, (TT => `<mark class="DocsHighlight">${TT}</mark>`))))
            }
            return zT
          }(PT.id, PT.content, VT, yT ? JT : void 0) : ""), [PT, VT, yT, JT]);
        (0, iT.useEffect)((() => {
          const TT = jT.current;
          if (!TT) return;
          const oT = TT => {
            var oT, IT, iT, zT, kT;
            const WT = null === (oT = (IT = TT.target).closest) || void 0 === oT ? void 0 : oT.call(IT, ".DocsCopyButton");
            if (!WT) return;
            TT.preventDefault(), TT.stopPropagation();
            const XT = null !== (iT = null === (zT = WT.parentElement) || void 0 === zT || null === (kT = zT.querySelector("code")) || void 0 === kT ? void 0 : kT.textContent) && void 0 !== iT ? iT : "";
            navigator.clipboard.writeText(XT.trimEnd()).then((() => {
              WT.classList.add("Copied"), setTimeout((() => {
                WT.classList.remove("Copied")
              }), 1500)
            })).catch((TT => {
              console.warn("Could not copy documentation code", TT)
            }))
          };
          return TT.addEventListener("click", oT, !0), () => {
            TT.removeEventListener("click", oT, !0)
          }
        }), []);
        const [oo, Io] = (0, iT.useState)(0);
        (0, iT.useEffect)((() => {
          if (!yT || !jT.current) return void Io(0);
          const TT = jT.current.querySelectorAll(".DocsHighlight").length;
          Io(TT)
        }), [yT, To]), (0, iT.useEffect)((() => {
          if (null === QT || !jT.current) return;
          OT(null);
          const TT = jT.current.querySelectorAll(".DocsHighlight");
          if (0 === TT.length) return;
          const oT = Math.min(QT, TT.length - 1);
          YT(oT), TT.forEach((TT => {
            TT.classList.remove("DocsHighlightActive")
          })), TT[oT].classList.add("DocsHighlightActive"), TT[oT].scrollIntoView({
            block: "center",
            behavior: "smooth"
          })
        }), [QT, To]);
        const io = (0, iT.useCallback)((TT => {
            if (!jT.current) return;
            const oT = jT.current.querySelectorAll(".DocsHighlight");
            if (0 === oT.length) return;
            const IT = (aT + TT + oT.length) % oT.length;
            YT(IT), OT(IT)
          }), [aT]),
          zo = (0, iT.useCallback)((TT => {
            var oT;
            const IT = null === (oT = wT[TT]) || void 0 === oT ? void 0 : oT.tabStep;
            IT && IT === tT && (0, hT.e)(IT), TT !== ET ? (nT(!0), fT(TT), YT(0), jT.current && (jT.current.scrollTop = 0), yT && OT(0)) : nT(!HT)
          }), [yT, ET, HT, tT]),
          ko = (0, iT.useCallback)((TT => {
            var oT;
            const IT = Array.from((null === (oT = jT.current) || void 0 === oT ? void 0 : oT.querySelectorAll(".DocsH2, .DocsH3")) || []).find((oT => {
              var IT;
              return null === (IT = oT.textContent) || void 0 === IT ? void 0 : IT.includes(TT)
            }));
            IT && IT.scrollIntoView({
              block: "start",
              behavior: "smooth"
            })
          }), [jT]),
          Wo = (0, iT.useCallback)((TT => {
            var oT, IT;
            const iT = null !== (oT = null === (IT = CT.current) || void 0 === IT ? void 0 : IT.clientWidth) && void 0 !== oT ? oT : window.innerWidth,
              zT = Math.max(120, iT - 200);
            return Math.min(Math.max(TT, 120), zT)
          }), []),
          Xo = (0, iT.useCallback)((() => {
            var TT;
            lT.current && (lT.current = !1, null === (TT = CT.current) || void 0 === TT || TT.classList.remove("DocsSidebarResizing"))
          }), []),
          Bo = (0, iT.useCallback)((TT => {
            var oT;
            TT.preventDefault(), lT.current = !0, null === (oT = CT.current) || void 0 === oT || oT.classList.add("DocsSidebarResizing")
          }), []);
        (0, iT.useEffect)((() => {
          const TT = CT.current,
            oT = TT => {
              if (!lT.current || !CT.current) return;
              const oT = CT.current.getBoundingClientRect().left;
              ZT(Wo(TT.clientX - oT))
            };
          return window.addEventListener("mousemove", oT), window.addEventListener("mouseup", Xo), () => {
            window.removeEventListener("mousemove", oT), window.removeEventListener("mouseup", Xo), null === TT || void 0 === TT || TT.classList.remove("DocsSidebarResizing")
          }
        }), [Wo, Xo]);
        const Fo = (0, iT.useCallback)((TT => {
          if (TT) {
            const [oT, IT] = TT.slice(1).split("-");
            IT && (sT.current = {
              docId: oT,
              subsection: IT
            }), oT && zo(oT)
          }
        }), [zo]);
        (0, iT.useEffect)((() => {
          const TT = sT.current;
          TT && ET === TT.docId && (setTimeout((() => {
            ko(TT.subsection)
          }), 0), sT.current = null)
        })), (0, iT.useEffect)((() => {
          if (!jT.current) return;
          jT.current.querySelectorAll("a.DocsAnchor").forEach((TT => {
            TT.addEventListener("click", (oT => {
              oT.preventDefault(), Fo(TT.dataset.id)
            }))
          }))
        }), [ET, Fo]);
        const So = Object.values(wT).find((TT => (null === TT || void 0 === TT ? void 0 : TT.pageStep) === tT));
        return (0, xT.jsx)(gT.g, {
          tutorial: "docsOverview",
          step: null !== (mT = null === So || void 0 === So ? void 0 : So.pageStep) && void 0 !== mT ? mT : "docsPanel",
          text: dT(null !== (eT = null === So || void 0 === So ? void 0 : So.pageText) && void 0 !== eT ? eT : "codeEditor:tutorialDocsPanel"),
          enabled: vT,
          placement: "left",
          onPrevious: So ? void 0 : uT,
          children: (0, xT.jsxs)("div", {
            className: "DocsPanel",
            ref: CT,
            children: [(0, xT.jsxs)("div", {
              className: "DocsSidebar",
              style: {
                width: qT,
                minWidth: qT,
                maxWidth: qT
              },
              children: [(0, xT.jsx)(kT.e, {
                className: "DocsSearch",
                placeholderText: "\ud83d\udd0e Search docs...",
                onValueChange: TT => {
                  UT(TT), YT(0), OT(0)
                }
              }, GT), (0, xT.jsx)("div", {
                className: "DocsNavList",
                children: yT ? NT.map((TT => (0, xT.jsxs)("div", {
                  className: XT()("DocsNavItem", "SearchResult", {
                    Active: TT.doc.id === (null === PT || void 0 === PT ? void 0 : PT.id)
                  }),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    zo(TT.doc.id)
                  },
                  children: [(0, xT.jsxs)("div", {
                    className: "SearchResultTitle",
                    children: [TT.doc.title, (0, xT.jsx)("span", {
                      className: "SearchResultCount",
                      children: TT.matchCount
                    })]
                  }), (0, xT.jsx)("div", {
                    className: "SearchResultSnippet",
                    children: MT(TT.snippet, JT)
                  })]
                }, TT.doc.id))) : zT.d.map((TT => {
                  const oT = (0, xT.jsxs)("div", {
                      className: XT()("DocsNavItem", {
                        Active: TT.id === (null === PT || void 0 === PT ? void 0 : PT.id)
                      }),
                      "data-pad-focusable": !0,
                      onClick: () => {
                        zo(TT.id)
                      },
                      children: [(0, xT.jsx)("span", {
                        className: "DocsNavItemTitle",
                        children: TT.title
                      }), TT.subsections && TT.id === (null === PT || void 0 === PT ? void 0 : PT.id) && HT && (0, xT.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, xT.jsx)(rT.e, {
                          name: "angle-down"
                        })
                      }), TT.subsections && (TT.id !== (null === PT || void 0 === PT ? void 0 : PT.id) || !HT) && (0, xT.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, xT.jsx)(rT.e, {
                          name: "angle-up"
                        })
                      })]
                    }),
                    IT = wT[TT.id];
                  return (0, xT.jsxs)(iT.Fragment, {
                    children: [IT && (0, xT.jsx)(gT.g, {
                      tutorial: "docsOverview",
                      step: IT.tabStep,
                      text: dT(IT.tabText),
                      enabled: vT,
                      placement: "left",
                      waitForClick: !0,
                      children: oT
                    }), !IT && oT, HT && TT.subsections && TT.id === (null === PT || void 0 === PT ? void 0 : PT.id) && TT.subsections.map((TT => (0, xT.jsx)("div", {
                      className: "DocsNavItem DocsSubsection",
                      "data-pad-focusable": !0,
                      onClick: () => {
                        ko(TT)
                      },
                      children: TT
                    }, TT)))]
                  }, TT.id)
                }))
              }), (0, xT.jsx)("div", {
                className: "DocsSidebarButtonContainer",
                children: (0, xT.jsx)(AT.e, {
                  tooltipInner: dT("codeEditor:popOutDocsTooltip"),
                  placement: "top",
                  children: (0, xT.jsx)(BT.e, {
                    className: "DocsSidebarButton",
                    onClick: RT,
                    children: dT("codeEditor:popOutDocs")
                  })
                })
              })]
            }), (0, xT.jsx)("div", {
              className: "DocsSidebarResizeHandle",
              onMouseDown: Bo
            }), (0, xT.jsxs)("div", {
              className: "DocsContentWrapper",
              children: [yT && oo > 0 && (0, xT.jsxs)("div", {
                className: "DocsMatchNav",
                children: [(0, xT.jsxs)("span", {
                  className: "DocsMatchNavLabel",
                  children: [aT + 1, " / ", oo]
                }), (0, xT.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    io(-1)
                  },
                  children: "\u25b2"
                }), (0, xT.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    io(1)
                  },
                  children: "\u25bc"
                })]
              }), (0, xT.jsx)("div", {
                className: "DocsContent",
                ref: jT,
                dangerouslySetInnerHTML: {
                  __html: To
                }
              })]
            })]
          })
        })
      }))
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);