export const id = 292;
export const ids = [292];
export const modules = {
  40857: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      default: () => CQ
    });
    var LQ = wQ(53),
      qQ = wQ(4593),
      oQ = wQ(1682),
      DQ = wQ(1070),
      kQ = wQ.n(DQ),
      vQ = wQ(1451),
      mQ = wQ(1207),
      uQ = wQ(4557),
      HQ = wQ(4575),
      bQ = wQ(4582),
      YQ = wQ(1107);

    function xQ(QQ) {
      return QQ.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    uQ.d.registerLanguage("javascript", HQ.e), uQ.d.registerLanguage("typescript", bQ.c);

    function AQ(QQ, FQ) {
      const wQ = xQ(QQ).replace(/"/g, "&quot;");
      return `<button type="button" class="DocsCopyButton ${FQ}" title="${wQ}" aria-label="${wQ}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5"/><path d="M10.5 3.5V1.5H1.5v9h2"/></svg><svg class="DocsCopiedIcon" viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 8.5l3.5 3.5 7.5-7.5"/></svg></button>`
    }

    function tQ(QQ, FQ) {
      const wQ = [],
        LQ = QQ.toLowerCase(),
        qQ = FQ.toLowerCase();
      let oQ = 0;
      for (; oQ < QQ.length;) {
        const DQ = LQ.indexOf(qQ, oQ);
        if (-1 === DQ) {
          wQ.push(QQ.slice(oQ));
          break
        }
        DQ > oQ && wQ.push(QQ.slice(oQ, DQ)), wQ.push((0, YQ.jsx)("mark", {
          className: "DocsHighlight",
          children: QQ.slice(DQ, DQ + FQ.length)
        }, DQ)), oQ = DQ + FQ.length
      }
      return wQ
    }
    var eQ = wQ(1079),
      MQ = wQ(1367),
      GQ = wQ(36508),
      pQ = wQ(36514);
    const cQ = {
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
      CQ = (0, LQ.memo)((function(QQ) {
        var FQ, wQ, DQ, HQ, bQ, CQ, SQ;
        let {
          popOutDocs: iQ,
          hideDocs: WQ,
          tutorialEnabled: RQ
        } = QQ;
        const [OQ, sQ] = (0, LQ.useState)(qQ.c[0].id), rQ = (0, LQ.useRef)(null), IQ = (0, LQ.useRef)(null), [UQ, NQ] = (0, LQ.useState)(""), [TQ, KQ] = (0, LQ.useState)(0), [zQ, lQ] = (0, LQ.useState)(null), [jQ, aQ] = (0, LQ.useState)(!1), [XQ, fQ] = (0, LQ.useState)(160), VQ = (0, LQ.useRef)(!1), hQ = (0, LQ.useRef)(null), JQ = (0, GQ.l)("docsOverview"), [EQ, nQ] = (0, LQ.useState)(0), gQ = Object.values(cQ).some((QQ => (null === QQ || void 0 === QQ ? void 0 : QQ.tabStep) === JQ));
        (0, LQ.useEffect)((() => {
          gQ && UQ.length > 0 && (NQ(""), nQ((QQ => QQ + 1)))
        }), [gQ, UQ]);
        const PQ = UQ.length > 0,
          ZQ = (0, LQ.useMemo)((() => function(QQ) {
            if (!QQ) return [];
            const FQ = QQ.toLowerCase(),
              wQ = [];
            for (const LQ of qQ.c) {
              const QQ = LQ.content.toLowerCase();
              let qQ = 0,
                oQ = -1,
                DQ = 0,
                kQ = QQ.indexOf(FQ, DQ);
              for (; - 1 !== kQ;) - 1 === oQ && (oQ = kQ), qQ++, DQ = kQ + FQ.length, kQ = QQ.indexOf(FQ, DQ);
              if (0 === qQ) continue;
              const vQ = Math.max(0, oQ - 40),
                mQ = Math.min(LQ.content.length, oQ + FQ.length + 40),
                uQ = (vQ > 0 ? "..." : "") + LQ.content.slice(vQ, mQ).replace(/\n/g, " ") + (mQ < LQ.content.length ? "..." : "");
              wQ.push({
                doc: LQ,
                matchCount: qQ,
                snippet: uQ
              })
            }
            return wQ.sort(((QQ, FQ) => FQ.matchCount - QQ.matchCount)), wQ
          }(UQ)), [UQ]),
          yQ = PQ ? null !== (FQ = null !== (wQ = null === (DQ = ZQ.find((QQ => QQ.doc.id === OQ))) || void 0 === DQ ? void 0 : DQ.doc) && void 0 !== wQ ? wQ : null === (HQ = ZQ[0]) || void 0 === HQ ? void 0 : HQ.doc) && void 0 !== FQ ? FQ : null : null !== (bQ = qQ.c.find((QQ => QQ.id === OQ))) && void 0 !== bQ ? bQ : qQ.c[0],
          {
            t: BQ
          } = (0, mQ.y)(),
          dQ = BQ("codeEditor:copySnippet"),
          QF = (0, LQ.useMemo)((() => yQ ? function(QQ, FQ, wQ, LQ) {
            let qQ = FQ;
            qQ = qQ.replace(/\r\n/g, "\n");
            const oQ = [];
            qQ = qQ.replace(/```(\w*)\n([\s\S]*?)```/g, ((QQ, FQ, LQ) => {
              const qQ = oQ.length;
              let DQ = xQ(LQ);
              try {
                DQ = uQ.d.highlight(LQ.trimEnd(), {
                  language: FQ
                }).value
              } catch (kQ) {
                console.warn("Could not highlight documentation code block", kQ)
              }
              return oQ.push(`<div class="DocsCodeBlockRow"><pre class="DocsCodeBlock" data-lang="${FQ}"><code>${DQ}</code></pre>${AQ(wQ,"DocsCopyBlock")}</div>`), `\0PLACEHOLDER_${qQ}\0`
            })), qQ = qQ.replace(/(`{1,2})([^\n]+?)\1(?!`)/g, ((FQ, LQ, qQ) => {
              const DQ = oQ.length,
                kQ = 2 === LQ.length ? qQ.replace(/^ (.*) $/, "$1") : qQ;
              let vQ = xQ(kQ);
              try {
                "apiReference" !== QQ && "callbacks" !== QQ || (vQ = uQ.d.highlight(kQ.trimEnd().replaceAll("\\|", "|"), {
                  language: "typescript"
                }).value)
              } catch (mQ) {
                console.warn("Could not highlight documentation snippet", mQ)
              }
              return oQ.push(`<span class="DocsInlineCodeRow"><code class="DocsInlineCode">${vQ}</code>${AQ(wQ,"DocsCopyInline")}</span>`), `\0PLACEHOLDER_${DQ}\0`
            })), qQ = xQ(qQ), qQ = qQ.replace(/^#### (.+)$/gm, '<h4 class="DocsH4">$1</h4>'), qQ = qQ.replace(/^### (.+)$/gm, '<h3 class="DocsH3">$1</h3>'), qQ = qQ.replace(/^## (.+)$/gm, '<h2 class="DocsH2">$1</h2>'), qQ = qQ.replace(/^# (.+)$/gm, '<h1 class="DocsH1">$1</h1>'), qQ = qQ.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"), qQ = qQ.replace(/\[([^\]]+)\]\(([^)]+)\)/g, ((QQ, FQ, wQ) => wQ.startsWith("#") ? `<a class="DocsAnchor" data-id="${wQ}">${FQ}</a>` : `<a href="${wQ}" target="_blank" rel="noopener noreferrer">${FQ}</a>`)), qQ = qQ.replace(/^(\|.+\|)\n(\|[\s:\-|]+\|)\n((?:\|.+\|\s*\r?\n?)*)/gm, ((QQ, FQ, wQ, LQ) => `<table class="DocsTable"><thead><tr>${FQ.split("|").slice(1,-1).map((QQ=>`<th>${QQ.trim()}</th>`)).join("")}</tr></thead><tbody>${LQ.trim().split("\n").map((QQ=>`<tr>${QQ.split("|").slice(1,-1).map((QQ=>`<td>${QQ.trim()}</td>`)).join("")}</tr>`)).join("")}</tbody></table>`)), qQ = qQ.replace(/(?:^[ \t]*([*-])[ \t]+.+(?:\n|$))+/gm, ((QQ, FQ) => function(QQ, FQ) {
              const wQ = "*" === FQ,
                LQ = [];
              for (const kQ of QQ.split("\n")) {
                const QQ = kQ.match(/^([ \t]*)(?:[*-])[ \t]+(.+)$/);
                QQ && LQ.push({
                  indent: QQ[1].replace(/\t/g, "  ").length,
                  content: QQ[2]
                })
              }
              let qQ = "";
              const oQ = [],
                DQ = wQ ? "ol" : "ul";
              for (const {
                  indent: kQ,
                  content: vQ
                }
                of LQ) {
                for (; oQ.length > 0 && kQ < oQ[oQ.length - 1];) qQ += `</${DQ}></li>`, oQ.pop();
                (0 === oQ.length || kQ > oQ[oQ.length - 1]) && (oQ.length > 0 && (qQ = qQ.replace(/<\/li>$/, "")), qQ += `<${DQ} class="DocsList">`, oQ.push(kQ)), qQ += `<li class="DocsListItem">${vQ}</li>`
              }
              for (; oQ.length > 0;) qQ += `</${DQ}>`, oQ.pop(), oQ.length > 0 && (qQ += "</li>");
              return qQ
            }(QQ, FQ))), qQ = qQ.replace(/\n{2,}/g, "\n<br/>\n");
            for (let DQ = 0; DQ < oQ.length; DQ++) qQ = qQ.replace(`\0PLACEHOLDER_${DQ}\0`, oQ[DQ]);
            if (LQ) {
              const QQ = xQ(LQ).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                FQ = new RegExp(QQ, "gi");
              qQ = qQ.replace(/([^<>]+)(?=<|$)/g, (QQ => QQ.replace(FQ, (QQ => `<mark class="DocsHighlight">${QQ}</mark>`))))
            }
            return qQ
          }(yQ.id, yQ.content, dQ, PQ ? UQ : void 0) : ""), [yQ, dQ, PQ, UQ]);
        (0, LQ.useEffect)((() => {
          const QQ = IQ.current;
          if (!QQ) return;
          const FQ = QQ => {
            var FQ, wQ, LQ, qQ, oQ;
            const DQ = null === (FQ = (wQ = QQ.target).closest) || void 0 === FQ ? void 0 : FQ.call(wQ, ".DocsCopyButton");
            if (!DQ) return;
            QQ.preventDefault(), QQ.stopPropagation();
            const kQ = null !== (LQ = null === (qQ = DQ.parentElement) || void 0 === qQ || null === (oQ = qQ.querySelector("code")) || void 0 === oQ ? void 0 : oQ.textContent) && void 0 !== LQ ? LQ : "";
            navigator.clipboard.writeText(kQ.trimEnd()).then((() => {
              DQ.classList.add("Copied"), setTimeout((() => {
                DQ.classList.remove("Copied")
              }), 1500)
            })).catch((QQ => {
              console.warn("Could not copy documentation code", QQ)
            }))
          };
          return QQ.addEventListener("click", FQ, !0), () => {
            QQ.removeEventListener("click", FQ, !0)
          }
        }), []);
        const [FF, wF] = (0, LQ.useState)(0);
        (0, LQ.useEffect)((() => {
          if (!PQ || !IQ.current) return void wF(0);
          const QQ = IQ.current.querySelectorAll(".DocsHighlight").length;
          wF(QQ)
        }), [PQ, QF]), (0, LQ.useEffect)((() => {
          if (null === zQ || !IQ.current) return;
          lQ(null);
          const QQ = IQ.current.querySelectorAll(".DocsHighlight");
          if (0 === QQ.length) return;
          const FQ = Math.min(zQ, QQ.length - 1);
          KQ(FQ), QQ.forEach((QQ => {
            QQ.classList.remove("DocsHighlightActive")
          })), QQ[FQ].classList.add("DocsHighlightActive"), QQ[FQ].scrollIntoView({
            block: "center",
            behavior: "smooth"
          })
        }), [zQ, QF]);
        const LF = (0, LQ.useCallback)((QQ => {
            if (!IQ.current) return;
            const FQ = IQ.current.querySelectorAll(".DocsHighlight");
            if (0 === FQ.length) return;
            const wQ = (TQ + QQ + FQ.length) % FQ.length;
            KQ(wQ), lQ(wQ)
          }), [TQ]),
          qF = (0, LQ.useCallback)((QQ => {
            var FQ;
            const wQ = null === (FQ = cQ[QQ]) || void 0 === FQ ? void 0 : FQ.tabStep;
            wQ && wQ === JQ && (0, pQ.f)(wQ), QQ !== OQ ? (aQ(!0), sQ(QQ), KQ(0), IQ.current && (IQ.current.scrollTop = 0), PQ && lQ(0)) : aQ(!jQ)
          }), [PQ, OQ, jQ, JQ]),
          oF = (0, LQ.useCallback)((QQ => {
            var FQ;
            const wQ = Array.from((null === (FQ = IQ.current) || void 0 === FQ ? void 0 : FQ.querySelectorAll(".DocsH2, .DocsH3")) || []).find((FQ => {
              var wQ;
              return null === (wQ = FQ.textContent) || void 0 === wQ ? void 0 : wQ.includes(QQ)
            }));
            wQ && wQ.scrollIntoView({
              block: "start",
              behavior: "smooth"
            })
          }), [IQ]),
          DF = (0, LQ.useCallback)((QQ => {
            var FQ, wQ;
            const LQ = null !== (FQ = null === (wQ = rQ.current) || void 0 === wQ ? void 0 : wQ.clientWidth) && void 0 !== FQ ? FQ : window.innerWidth,
              qQ = Math.max(120, LQ - 200);
            return Math.min(Math.max(QQ, 120), qQ)
          }), []),
          kF = (0, LQ.useCallback)((() => {
            var QQ;
            VQ.current && (VQ.current = !1, null === (QQ = rQ.current) || void 0 === QQ || QQ.classList.remove("DocsSidebarResizing"))
          }), []),
          vF = (0, LQ.useCallback)((QQ => {
            var FQ;
            QQ.preventDefault(), VQ.current = !0, null === (FQ = rQ.current) || void 0 === FQ || FQ.classList.add("DocsSidebarResizing")
          }), []);
        (0, LQ.useEffect)((() => {
          const QQ = rQ.current,
            FQ = QQ => {
              if (!VQ.current || !rQ.current) return;
              const FQ = rQ.current.getBoundingClientRect().left;
              fQ(DF(QQ.clientX - FQ))
            };
          return window.addEventListener("mousemove", FQ), window.addEventListener("mouseup", kF), () => {
            window.removeEventListener("mousemove", FQ), window.removeEventListener("mouseup", kF), null === QQ || void 0 === QQ || QQ.classList.remove("DocsSidebarResizing")
          }
        }), [DF, kF]);
        const mF = (0, LQ.useCallback)((QQ => {
          if (QQ) {
            const [FQ, wQ] = QQ.slice(1).split("-");
            wQ && (hQ.current = {
              docId: FQ,
              subsection: wQ
            }), FQ && qF(FQ)
          }
        }), [qF]);
        (0, LQ.useEffect)((() => {
          const QQ = hQ.current;
          QQ && OQ === QQ.docId && (setTimeout((() => {
            oF(QQ.subsection)
          }), 0), hQ.current = null)
        })), (0, LQ.useEffect)((() => {
          if (!IQ.current) return;
          IQ.current.querySelectorAll("a.DocsAnchor").forEach((QQ => {
            QQ.addEventListener("click", (FQ => {
              FQ.preventDefault(), mF(QQ.dataset.id)
            }))
          }))
        }), [OQ, mF]);
        const uF = Object.values(cQ).find((QQ => (null === QQ || void 0 === QQ ? void 0 : QQ.pageStep) === JQ));
        return (0, YQ.jsx)(GQ.i, {
          tutorial: "docsOverview",
          step: null !== (CQ = null === uF || void 0 === uF ? void 0 : uF.pageStep) && void 0 !== CQ ? CQ : "docsPanel",
          text: BQ(null !== (SQ = null === uF || void 0 === uF ? void 0 : uF.pageText) && void 0 !== SQ ? SQ : "codeEditor:tutorialDocsPanel"),
          enabled: RQ,
          placement: "left",
          onPrevious: uF ? void 0 : WQ,
          children: (0, YQ.jsxs)("div", {
            className: "DocsPanel",
            ref: rQ,
            children: [(0, YQ.jsxs)("div", {
              className: "DocsSidebar",
              style: {
                width: XQ,
                minWidth: XQ,
                maxWidth: XQ
              },
              children: [(0, YQ.jsx)(oQ.b, {
                className: "DocsSearch",
                placeholderText: "\ud83d\udd0e Search docs...",
                onValueChange: QQ => {
                  NQ(QQ), KQ(0), lQ(0)
                }
              }, EQ), (0, YQ.jsx)("div", {
                className: "DocsNavList",
                children: PQ ? ZQ.map((QQ => (0, YQ.jsxs)("div", {
                  className: kQ()("DocsNavItem", "SearchResult", {
                    Active: QQ.doc.id === (null === yQ || void 0 === yQ ? void 0 : yQ.id)
                  }),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    qF(QQ.doc.id)
                  },
                  children: [(0, YQ.jsxs)("div", {
                    className: "SearchResultTitle",
                    children: [QQ.doc.title, (0, YQ.jsx)("span", {
                      className: "SearchResultCount",
                      children: QQ.matchCount
                    })]
                  }), (0, YQ.jsx)("div", {
                    className: "SearchResultSnippet",
                    children: tQ(QQ.snippet, UQ)
                  })]
                }, QQ.doc.id))) : qQ.c.map((QQ => {
                  const FQ = (0, YQ.jsxs)("div", {
                      className: kQ()("DocsNavItem", {
                        Active: QQ.id === (null === yQ || void 0 === yQ ? void 0 : yQ.id)
                      }),
                      "data-pad-focusable": !0,
                      onClick: () => {
                        qF(QQ.id)
                      },
                      children: [(0, YQ.jsx)("span", {
                        className: "DocsNavItemTitle",
                        children: QQ.title
                      }), QQ.subsections && QQ.id === (null === yQ || void 0 === yQ ? void 0 : yQ.id) && jQ && (0, YQ.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, YQ.jsx)(eQ.c, {
                          name: "angle-down"
                        })
                      }), QQ.subsections && (QQ.id !== (null === yQ || void 0 === yQ ? void 0 : yQ.id) || !jQ) && (0, YQ.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, YQ.jsx)(eQ.c, {
                          name: "angle-up"
                        })
                      })]
                    }),
                    wQ = cQ[QQ.id];
                  return (0, YQ.jsxs)(LQ.Fragment, {
                    children: [wQ && (0, YQ.jsx)(GQ.i, {
                      tutorial: "docsOverview",
                      step: wQ.tabStep,
                      text: BQ(wQ.tabText),
                      enabled: RQ,
                      placement: "left",
                      waitForClick: !0,
                      children: FQ
                    }), !wQ && FQ, jQ && QQ.subsections && QQ.id === (null === yQ || void 0 === yQ ? void 0 : yQ.id) && QQ.subsections.map((QQ => (0, YQ.jsx)("div", {
                      className: "DocsNavItem DocsSubsection",
                      "data-pad-focusable": !0,
                      onClick: () => {
                        oF(QQ)
                      },
                      children: QQ
                    }, QQ)))]
                  }, QQ.id)
                }))
              }), (0, YQ.jsx)("div", {
                className: "DocsSidebarButtonContainer",
                children: (0, YQ.jsx)(MQ.f, {
                  tooltipInner: BQ("codeEditor:popOutDocsTooltip"),
                  placement: "top",
                  children: (0, YQ.jsx)(vQ.f, {
                    className: "DocsSidebarButton",
                    onClick: iQ,
                    children: BQ("codeEditor:popOutDocs")
                  })
                })
              })]
            }), (0, YQ.jsx)("div", {
              className: "DocsSidebarResizeHandle",
              onMouseDown: vF
            }), (0, YQ.jsxs)("div", {
              className: "DocsContentWrapper",
              children: [PQ && FF > 0 && (0, YQ.jsxs)("div", {
                className: "DocsMatchNav",
                children: [(0, YQ.jsxs)("span", {
                  className: "DocsMatchNavLabel",
                  children: [TQ + 1, " / ", FF]
                }), (0, YQ.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    LF(-1)
                  },
                  children: "\u25b2"
                }), (0, YQ.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    LF(1)
                  },
                  children: "\u25bc"
                })]
              }), (0, YQ.jsx)("div", {
                className: "DocsContent",
                ref: IQ,
                dangerouslySetInnerHTML: {
                  __html: QF
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