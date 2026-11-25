export const id = 309;
export const ids = [309];
export const modules = {
  41701: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      default: () => bQ
    });
    var wQ = XQ(61),
      qQ = XQ(5071),
      TQ = XQ(1739),
      zQ = XQ(1081),
      sQ = XQ.n(zQ),
      FQ = XQ(1507),
      PQ = XQ(1226),
      gQ = XQ(5036),
      JQ = XQ(5049),
      rQ = XQ(5057),
      IQ = XQ(1145);

    function jQ(QQ) {
      return QQ.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    gQ.d.registerLanguage("javascript", JQ.b), gQ.d.registerLanguage("typescript", rQ.c);

    function BQ(QQ, WQ) {
      const XQ = jQ(QQ).replace(/"/g, "&quot;");
      return `<button type="button" class="DocsCopyButton ${WQ}" title="${XQ}" aria-label="${XQ}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5"/><path d="M10.5 3.5V1.5H1.5v9h2"/></svg><svg class="DocsCopiedIcon" viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 8.5l3.5 3.5 7.5-7.5"/></svg></button>`
    }

    function yQ(QQ, WQ) {
      const XQ = [],
        wQ = QQ.toLowerCase(),
        qQ = WQ.toLowerCase();
      let TQ = 0;
      for (; TQ < QQ.length;) {
        const zQ = wQ.indexOf(qQ, TQ);
        if (-1 === zQ) {
          XQ.push(QQ.slice(TQ));
          break
        }
        zQ > TQ && XQ.push(QQ.slice(TQ, zQ)), XQ.push((0, IQ.jsx)("mark", {
          className: "DocsHighlight",
          children: QQ.slice(zQ, zQ + WQ.length)
        }, zQ)), TQ = zQ + WQ.length
      }
      return XQ
    }
    var VQ = XQ(1094),
      DQ = XQ(1416),
      pQ = XQ(37169),
      GQ = XQ(37172);
    const UQ = {
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
      bQ = (0, wQ.memo)((function(QQ) {
        var WQ, XQ, zQ, JQ, rQ, bQ, vQ;
        let {
          popOutDocs: dQ,
          hideDocs: HQ,
          tutorialEnabled: aQ
        } = QQ;
        const [lQ, hQ] = (0, wQ.useState)(qQ.e[0].id), iQ = (0, wQ.useRef)(null), cQ = (0, wQ.useRef)(null), [AQ, RQ] = (0, wQ.useState)(""), [EQ, CQ] = (0, wQ.useState)(0), [uQ, LQ] = (0, wQ.useState)(null), [kQ, fQ] = (0, wQ.useState)(!1), [SQ, tQ] = (0, wQ.useState)(160), oQ = (0, wQ.useRef)(!1), eQ = (0, wQ.useRef)(null), nQ = (0, pQ.i)("docsOverview"), [xQ, YQ] = (0, wQ.useState)(0), NQ = Object.values(UQ).some((QQ => (null === QQ || void 0 === QQ ? void 0 : QQ.tabStep) === nQ));
        (0, wQ.useEffect)((() => {
          NQ && AQ.length > 0 && (RQ(""), YQ((QQ => QQ + 1)))
        }), [NQ, AQ]);
        const ZQ = AQ.length > 0,
          OQ = (0, wQ.useMemo)((() => function(QQ) {
            if (!QQ) return [];
            const WQ = QQ.toLowerCase(),
              XQ = [];
            for (const wQ of qQ.e) {
              const QQ = wQ.content.toLowerCase();
              let qQ = 0,
                TQ = -1,
                zQ = 0,
                sQ = QQ.indexOf(WQ, zQ);
              for (; - 1 !== sQ;) - 1 === TQ && (TQ = sQ), qQ++, zQ = sQ + WQ.length, sQ = QQ.indexOf(WQ, zQ);
              if (0 === qQ) continue;
              const FQ = Math.max(0, TQ - 40),
                PQ = Math.min(wQ.content.length, TQ + WQ.length + 40),
                gQ = (FQ > 0 ? "..." : "") + wQ.content.slice(FQ, PQ).replace(/\n/g, " ") + (PQ < wQ.content.length ? "..." : "");
              XQ.push({
                doc: wQ,
                matchCount: qQ,
                snippet: gQ
              })
            }
            return XQ.sort(((QQ, WQ) => WQ.matchCount - QQ.matchCount)), XQ
          }(AQ)), [AQ]),
          KQ = ZQ ? null !== (WQ = null !== (XQ = null === (zQ = OQ.find((QQ => QQ.doc.id === lQ))) || void 0 === zQ ? void 0 : zQ.doc) && void 0 !== XQ ? XQ : null === (JQ = OQ[0]) || void 0 === JQ ? void 0 : JQ.doc) && void 0 !== WQ ? WQ : null : null !== (rQ = qQ.e.find((QQ => QQ.id === lQ))) && void 0 !== rQ ? rQ : qQ.e[0],
          {
            t: mQ
          } = (0, PQ.C)(),
          MQ = mQ("codeEditor:copySnippet"),
          QW = (0, wQ.useMemo)((() => KQ ? function(QQ, WQ, XQ, wQ) {
            let qQ = WQ;
            qQ = qQ.replace(/\r\n/g, "\n");
            const TQ = [];
            qQ = qQ.replace(/```(\w*)\n([\s\S]*?)```/g, ((QQ, WQ, wQ) => {
              const qQ = TQ.length;
              let zQ = jQ(wQ);
              try {
                zQ = gQ.d.highlight(wQ.trimEnd(), {
                  language: WQ
                }).value
              } catch (sQ) {
                console.warn("Could not highlight documentation code block", sQ)
              }
              return TQ.push(`<div class="DocsCodeBlockRow"><pre class="DocsCodeBlock" data-lang="${WQ}"><code>${zQ}</code></pre>${BQ(XQ,"DocsCopyBlock")}</div>`), `\0PLACEHOLDER_${qQ}\0`
            })), qQ = qQ.replace(/(`{1,2})([^\n]+?)\1(?!`)/g, ((WQ, wQ, qQ) => {
              const zQ = TQ.length,
                sQ = 2 === wQ.length ? qQ.replace(/^ (.*) $/, "$1") : qQ;
              let FQ = jQ(sQ);
              try {
                "apiReference" !== QQ && "callbacks" !== QQ || (FQ = gQ.d.highlight(sQ.trimEnd().replaceAll("\\|", "|"), {
                  language: "typescript"
                }).value)
              } catch (PQ) {
                console.warn("Could not highlight documentation snippet", PQ)
              }
              return TQ.push(`<span class="DocsInlineCodeRow"><code class="DocsInlineCode">${FQ}</code>${BQ(XQ,"DocsCopyInline")}</span>`), `\0PLACEHOLDER_${zQ}\0`
            })), qQ = jQ(qQ), qQ = qQ.replace(/^#### (.+)$/gm, '<h4 class="DocsH4">$1</h4>'), qQ = qQ.replace(/^### (.+)$/gm, '<h3 class="DocsH3">$1</h3>'), qQ = qQ.replace(/^## (.+)$/gm, '<h2 class="DocsH2">$1</h2>'), qQ = qQ.replace(/^# (.+)$/gm, '<h1 class="DocsH1">$1</h1>'), qQ = qQ.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"), qQ = qQ.replace(/\[([^\]]+)\]\(([^)]+)\)/g, ((QQ, WQ, XQ) => XQ.startsWith("#") ? `<a class="DocsAnchor" data-id="${XQ}">${WQ}</a>` : `<a href="${XQ}" target="_blank" rel="noopener noreferrer">${WQ}</a>`)), qQ = qQ.replace(/^(\|.+\|)\n(\|[\s:\-|]+\|)\n((?:\|.+\|\s*\r?\n?)*)/gm, ((QQ, WQ, XQ, wQ) => `<table class="DocsTable"><thead><tr>${WQ.split("|").slice(1,-1).map((QQ=>`<th>${QQ.trim()}</th>`)).join("")}</tr></thead><tbody>${wQ.trim().split("\n").map((QQ=>`<tr>${QQ.split("|").slice(1,-1).map((QQ=>`<td>${QQ.trim()}</td>`)).join("")}</tr>`)).join("")}</tbody></table>`)), qQ = qQ.replace(/(?:^[ \t]*([*-])[ \t]+.+(?:\n|$))+/gm, ((QQ, WQ) => function(QQ, WQ) {
              const XQ = "*" === WQ,
                wQ = [];
              for (const sQ of QQ.split("\n")) {
                const QQ = sQ.match(/^([ \t]*)(?:[*-])[ \t]+(.+)$/);
                QQ && wQ.push({
                  indent: QQ[1].replace(/\t/g, "  ").length,
                  content: QQ[2]
                })
              }
              let qQ = "";
              const TQ = [],
                zQ = XQ ? "ol" : "ul";
              for (const {
                  indent: sQ,
                  content: FQ
                }
                of wQ) {
                for (; TQ.length > 0 && sQ < TQ[TQ.length - 1];) qQ += `</${zQ}></li>`, TQ.pop();
                (0 === TQ.length || sQ > TQ[TQ.length - 1]) && (TQ.length > 0 && (qQ = qQ.replace(/<\/li>$/, "")), qQ += `<${zQ} class="DocsList">`, TQ.push(sQ)), qQ += `<li class="DocsListItem">${FQ}</li>`
              }
              for (; TQ.length > 0;) qQ += `</${zQ}>`, TQ.pop(), TQ.length > 0 && (qQ += "</li>");
              return qQ
            }(QQ, WQ))), qQ = qQ.replace(/\n{2,}/g, "\n<br/>\n");
            for (let zQ = 0; zQ < TQ.length; zQ++) qQ = qQ.replace(`\0PLACEHOLDER_${zQ}\0`, TQ[zQ]);
            if (wQ) {
              const QQ = jQ(wQ).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                WQ = new RegExp(QQ, "gi");
              qQ = qQ.replace(/([^<>]+)(?=<|$)/g, (QQ => QQ.replace(WQ, (QQ => `<mark class="DocsHighlight">${QQ}</mark>`))))
            }
            return qQ
          }(KQ.id, KQ.content, MQ, ZQ ? AQ : void 0) : ""), [KQ, MQ, ZQ, AQ]);
        (0, wQ.useEffect)((() => {
          const QQ = cQ.current;
          if (!QQ) return;
          const WQ = QQ => {
            var WQ, XQ, wQ, qQ, TQ;
            const zQ = null === (WQ = (XQ = QQ.target).closest) || void 0 === WQ ? void 0 : WQ.call(XQ, ".DocsCopyButton");
            if (!zQ) return;
            QQ.preventDefault(), QQ.stopPropagation();
            const sQ = null !== (wQ = null === (qQ = zQ.parentElement) || void 0 === qQ || null === (TQ = qQ.querySelector("code")) || void 0 === TQ ? void 0 : TQ.textContent) && void 0 !== wQ ? wQ : "";
            navigator.clipboard.writeText(sQ.trimEnd()).then((() => {
              zQ.classList.add("Copied"), setTimeout((() => {
                zQ.classList.remove("Copied")
              }), 1500)
            })).catch((QQ => {
              console.warn("Could not copy documentation code", QQ)
            }))
          };
          return QQ.addEventListener("click", WQ, !0), () => {
            QQ.removeEventListener("click", WQ, !0)
          }
        }), []);
        const [WW, XW] = (0, wQ.useState)(0);
        (0, wQ.useEffect)((() => {
          if (!ZQ || !cQ.current) return void XW(0);
          const QQ = cQ.current.querySelectorAll(".DocsHighlight").length;
          XW(QQ)
        }), [ZQ, QW]), (0, wQ.useEffect)((() => {
          if (null === uQ || !cQ.current) return;
          LQ(null);
          const QQ = cQ.current.querySelectorAll(".DocsHighlight");
          if (0 === QQ.length) return;
          const WQ = Math.min(uQ, QQ.length - 1);
          CQ(WQ), QQ.forEach((QQ => {
            QQ.classList.remove("DocsHighlightActive")
          })), QQ[WQ].classList.add("DocsHighlightActive"), QQ[WQ].scrollIntoView({
            block: "center",
            behavior: "smooth"
          })
        }), [uQ, QW]);
        const wW = (0, wQ.useCallback)((QQ => {
            if (!cQ.current) return;
            const WQ = cQ.current.querySelectorAll(".DocsHighlight");
            if (0 === WQ.length) return;
            const XQ = (EQ + QQ + WQ.length) % WQ.length;
            CQ(XQ), LQ(XQ)
          }), [EQ]),
          qW = (0, wQ.useCallback)((QQ => {
            var WQ;
            const XQ = null === (WQ = UQ[QQ]) || void 0 === WQ ? void 0 : WQ.tabStep;
            XQ && XQ === nQ && (0, GQ.e)(XQ), QQ !== lQ ? (fQ(!0), hQ(QQ), CQ(0), cQ.current && (cQ.current.scrollTop = 0), ZQ && LQ(0)) : fQ(!kQ)
          }), [ZQ, lQ, kQ, nQ]),
          TW = (0, wQ.useCallback)((QQ => {
            var WQ;
            const XQ = Array.from((null === (WQ = cQ.current) || void 0 === WQ ? void 0 : WQ.querySelectorAll(".DocsH2, .DocsH3")) || []).find((WQ => {
              var XQ;
              return null === (XQ = WQ.textContent) || void 0 === XQ ? void 0 : XQ.includes(QQ)
            }));
            XQ && XQ.scrollIntoView({
              block: "start",
              behavior: "smooth"
            })
          }), [cQ]),
          zW = (0, wQ.useCallback)((QQ => {
            var WQ, XQ;
            const wQ = null !== (WQ = null === (XQ = iQ.current) || void 0 === XQ ? void 0 : XQ.clientWidth) && void 0 !== WQ ? WQ : window.innerWidth,
              qQ = Math.max(120, wQ - 200);
            return Math.min(Math.max(QQ, 120), qQ)
          }), []),
          sW = (0, wQ.useCallback)((() => {
            var QQ;
            oQ.current && (oQ.current = !1, null === (QQ = iQ.current) || void 0 === QQ || QQ.classList.remove("DocsSidebarResizing"))
          }), []),
          FW = (0, wQ.useCallback)((QQ => {
            var WQ;
            QQ.preventDefault(), oQ.current = !0, null === (WQ = iQ.current) || void 0 === WQ || WQ.classList.add("DocsSidebarResizing")
          }), []);
        (0, wQ.useEffect)((() => {
          const QQ = iQ.current,
            WQ = QQ => {
              if (!oQ.current || !iQ.current) return;
              const WQ = iQ.current.getBoundingClientRect().left;
              tQ(zW(QQ.clientX - WQ))
            };
          return window.addEventListener("mousemove", WQ), window.addEventListener("mouseup", sW), () => {
            window.removeEventListener("mousemove", WQ), window.removeEventListener("mouseup", sW), null === QQ || void 0 === QQ || QQ.classList.remove("DocsSidebarResizing")
          }
        }), [zW, sW]);
        const PW = (0, wQ.useCallback)((QQ => {
          if (QQ) {
            const [WQ, XQ] = QQ.slice(1).split("-");
            XQ && (eQ.current = {
              docId: WQ,
              subsection: XQ
            }), WQ && qW(WQ)
          }
        }), [qW]);
        (0, wQ.useEffect)((() => {
          const QQ = eQ.current;
          QQ && lQ === QQ.docId && (setTimeout((() => {
            TW(QQ.subsection)
          }), 0), eQ.current = null)
        })), (0, wQ.useEffect)((() => {
          if (!cQ.current) return;
          cQ.current.querySelectorAll("a.DocsAnchor").forEach((QQ => {
            QQ.addEventListener("click", (WQ => {
              WQ.preventDefault(), PW(QQ.dataset.id)
            }))
          }))
        }), [lQ, PW]);
        const gW = Object.values(UQ).find((QQ => (null === QQ || void 0 === QQ ? void 0 : QQ.pageStep) === nQ));
        return (0, IQ.jsx)(pQ.h, {
          tutorial: "docsOverview",
          step: null !== (bQ = null === gW || void 0 === gW ? void 0 : gW.pageStep) && void 0 !== bQ ? bQ : "docsPanel",
          text: mQ(null !== (vQ = null === gW || void 0 === gW ? void 0 : gW.pageText) && void 0 !== vQ ? vQ : "codeEditor:tutorialDocsPanel"),
          enabled: aQ,
          placement: "left",
          onPrevious: gW ? void 0 : HQ,
          children: (0, IQ.jsxs)("div", {
            className: "DocsPanel",
            ref: iQ,
            children: [(0, IQ.jsxs)("div", {
              className: "DocsSidebar",
              style: {
                width: SQ,
                minWidth: SQ,
                maxWidth: SQ
              },
              children: [(0, IQ.jsx)(TQ.e, {
                className: "DocsSearch",
                placeholderText: "\ud83d\udd0e Search docs...",
                onValueChange: QQ => {
                  RQ(QQ), CQ(0), LQ(0)
                }
              }, xQ), (0, IQ.jsx)("div", {
                className: "DocsNavList",
                children: ZQ ? OQ.map((QQ => (0, IQ.jsxs)("div", {
                  className: sQ()("DocsNavItem", "SearchResult", {
                    Active: QQ.doc.id === (null === KQ || void 0 === KQ ? void 0 : KQ.id)
                  }),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    qW(QQ.doc.id)
                  },
                  children: [(0, IQ.jsxs)("div", {
                    className: "SearchResultTitle",
                    children: [QQ.doc.title, (0, IQ.jsx)("span", {
                      className: "SearchResultCount",
                      children: QQ.matchCount
                    })]
                  }), (0, IQ.jsx)("div", {
                    className: "SearchResultSnippet",
                    children: yQ(QQ.snippet, AQ)
                  })]
                }, QQ.doc.id))) : qQ.e.map((QQ => {
                  const WQ = (0, IQ.jsxs)("div", {
                      className: sQ()("DocsNavItem", {
                        Active: QQ.id === (null === KQ || void 0 === KQ ? void 0 : KQ.id)
                      }),
                      "data-pad-focusable": !0,
                      onClick: () => {
                        qW(QQ.id)
                      },
                      children: [(0, IQ.jsx)("span", {
                        className: "DocsNavItemTitle",
                        children: QQ.title
                      }), QQ.subsections && QQ.id === (null === KQ || void 0 === KQ ? void 0 : KQ.id) && kQ && (0, IQ.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, IQ.jsx)(VQ.d, {
                          name: "angle-down"
                        })
                      }), QQ.subsections && (QQ.id !== (null === KQ || void 0 === KQ ? void 0 : KQ.id) || !kQ) && (0, IQ.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, IQ.jsx)(VQ.d, {
                          name: "angle-up"
                        })
                      })]
                    }),
                    XQ = UQ[QQ.id];
                  return (0, IQ.jsxs)(wQ.Fragment, {
                    children: [XQ && (0, IQ.jsx)(pQ.h, {
                      tutorial: "docsOverview",
                      step: XQ.tabStep,
                      text: mQ(XQ.tabText),
                      enabled: aQ,
                      placement: "left",
                      waitForClick: !0,
                      children: WQ
                    }), !XQ && WQ, kQ && QQ.subsections && QQ.id === (null === KQ || void 0 === KQ ? void 0 : KQ.id) && QQ.subsections.map((QQ => (0, IQ.jsx)("div", {
                      className: "DocsNavItem DocsSubsection",
                      "data-pad-focusable": !0,
                      onClick: () => {
                        TW(QQ)
                      },
                      children: QQ
                    }, QQ)))]
                  }, QQ.id)
                }))
              }), (0, IQ.jsx)("div", {
                className: "DocsSidebarButtonContainer",
                children: (0, IQ.jsx)(DQ.e, {
                  tooltipInner: mQ("codeEditor:popOutDocsTooltip"),
                  placement: "top",
                  children: (0, IQ.jsx)(FQ.h, {
                    className: "DocsSidebarButton",
                    onClick: dQ,
                    children: mQ("codeEditor:popOutDocs")
                  })
                })
              })]
            }), (0, IQ.jsx)("div", {
              className: "DocsSidebarResizeHandle",
              onMouseDown: FW
            }), (0, IQ.jsxs)("div", {
              className: "DocsContentWrapper",
              children: [ZQ && WW > 0 && (0, IQ.jsxs)("div", {
                className: "DocsMatchNav",
                children: [(0, IQ.jsxs)("span", {
                  className: "DocsMatchNavLabel",
                  children: [EQ + 1, " / ", WW]
                }), (0, IQ.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    wW(-1)
                  },
                  children: "\u25b2"
                }), (0, IQ.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    wW(1)
                  },
                  children: "\u25bc"
                })]
              }), (0, IQ.jsx)("div", {
                className: "DocsContent",
                ref: cQ,
                dangerouslySetInnerHTML: {
                  __html: QW
                }
              })]
            })]
          })
        })
      }))
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);