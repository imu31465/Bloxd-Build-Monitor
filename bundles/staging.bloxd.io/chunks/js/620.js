export const id = 620;
export const ids = [620];
export const modules = {
  54028: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      default: () => yr
    });
    var Zr = Qr(72),
      Wr = Qr(5566),
      ar = Qr(1804),
      jr = Qr(1155),
      Ir = Qr.n(jr),
      fr = Qr(1576),
      Er = Qr(1251),
      pr = Qr(5538),
      xr = Qr(5553),
      mr = Qr(5562),
      Nr = Qr(1338);

    function Ur(rr) {
      return rr.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    pr.d.registerLanguage("javascript", xr.d), pr.d.registerLanguage("typescript", mr.c);

    function tr(rr, Sr) {
      const Qr = Ur(rr).replace(/"/g, "&quot;");
      return `<button type="button" class="DocsCopyButton ${Sr}" title="${Qr}" aria-label="${Qr}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5"/><path d="M10.5 3.5V1.5H1.5v9h2"/></svg><svg class="DocsCopiedIcon" viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 8.5l3.5 3.5 7.5-7.5"/></svg></button>`
    }

    function hr(rr, Sr) {
      const Qr = [],
        Zr = rr.toLowerCase(),
        Wr = Sr.toLowerCase();
      let ar = 0;
      for (; ar < rr.length;) {
        const jr = Zr.indexOf(Wr, ar);
        if (-1 === jr) {
          Qr.push(rr.slice(ar));
          break
        }
        jr > ar && Qr.push(rr.slice(ar, jr)), Qr.push((0, Nr.jsx)("mark", {
          className: "DocsHighlight",
          children: rr.slice(jr, jr + Sr.length)
        }, jr)), ar = jr + Sr.length
      }
      return Qr
    }
    var zr = Qr(1448),
      Yr = Qr(1489),
      nr = Qr(38361),
      er = Qr(38363);
    const Kr = {
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
      yr = (0, Zr.memo)((function(rr) {
        var Sr, Qr, jr, xr, mr, yr, Br;
        let {
          popOutDocs: Tr,
          hideDocs: vr,
          tutorialEnabled: Or
        } = rr;
        const [Lr, lr] = (0, Zr.useState)(Wr.e[0].id), Xr = (0, Zr.useRef)(null), Pr = (0, Zr.useRef)(null), [Hr, qr] = (0, Zr.useState)(""), [Rr, gr] = (0, Zr.useState)(0), [Cr, Mr] = (0, Zr.useState)(null), [Gr, kr] = (0, Zr.useState)(!1), [Ar, Vr] = (0, Zr.useState)(160), ir = (0, Zr.useRef)(!1), wr = (0, Zr.useRef)(null), cr = (0, nr.i)("docsOverview"), [Fr, or] = (0, Zr.useState)(0), br = Object.values(Kr).some((rr => (null === rr || void 0 === rr ? void 0 : rr.tabStep) === cr));
        (0, Zr.useEffect)((() => {
          br && Hr.length > 0 && (qr(""), or((rr => rr + 1)))
        }), [br, Hr]);
        const Jr = Hr.length > 0,
          Dr = (0, Zr.useMemo)((() => function(rr) {
            if (!rr) return [];
            const Sr = rr.toLowerCase(),
              Qr = [];
            for (const Zr of Wr.e) {
              const rr = Zr.content.toLowerCase();
              let Wr = 0,
                ar = -1,
                jr = 0,
                Ir = rr.indexOf(Sr, jr);
              for (; - 1 !== Ir;) - 1 === ar && (ar = Ir), Wr++, jr = Ir + Sr.length, Ir = rr.indexOf(Sr, jr);
              if (0 === Wr) continue;
              const fr = Math.max(0, ar - 40),
                Er = Math.min(Zr.content.length, ar + Sr.length + 40),
                pr = (fr > 0 ? "..." : "") + Zr.content.slice(fr, Er).replace(/\n/g, " ") + (Er < Zr.content.length ? "..." : "");
              Qr.push({
                doc: Zr,
                matchCount: Wr,
                snippet: pr
              })
            }
            return Qr.sort(((rr, Sr) => Sr.matchCount - rr.matchCount)), Qr
          }(Hr)), [Hr]),
          dr = Jr ? null !== (Sr = null !== (Qr = null === (jr = Dr.find((rr => rr.doc.id === Lr))) || void 0 === jr ? void 0 : jr.doc) && void 0 !== Qr ? Qr : null === (xr = Dr[0]) || void 0 === xr ? void 0 : xr.doc) && void 0 !== Sr ? Sr : null : null !== (mr = Wr.e.find((rr => rr.id === Lr))) && void 0 !== mr ? mr : Wr.e[0],
          {
            t: sr
          } = (0, Er.E)(),
          ur = sr("codeEditor:copySnippet"),
          rS = (0, Zr.useMemo)((() => dr ? function(rr, Sr, Qr, Zr) {
            let Wr = Sr;
            Wr = Wr.replace(/\r\n/g, "\n");
            const ar = [];
            Wr = Wr.replace(/```(\w*)\n([\s\S]*?)```/g, ((rr, Sr, Zr) => {
              const Wr = ar.length;
              let jr = Ur(Zr);
              try {
                jr = pr.d.highlight(Zr.trimEnd(), {
                  language: Sr
                }).value
              } catch (Ir) {
                console.warn("Could not highlight documentation code block", Ir)
              }
              return ar.push(`<div class="DocsCodeBlockRow"><pre class="DocsCodeBlock" data-lang="${Sr}"><code>${jr}</code></pre>${tr(Qr,"DocsCopyBlock")}</div>`), `\0PLACEHOLDER_${Wr}\0`
            })), Wr = Wr.replace(/(`{1,2})([^\n]+?)\1(?!`)/g, ((Sr, Zr, Wr) => {
              const jr = ar.length,
                Ir = 2 === Zr.length ? Wr.replace(/^ (.*) $/, "$1") : Wr;
              let fr = Ur(Ir);
              try {
                "apiReference" !== rr && "callbacks" !== rr || (fr = pr.d.highlight(Ir.trimEnd().replaceAll("\\|", "|"), {
                  language: "typescript"
                }).value)
              } catch (Er) {
                console.warn("Could not highlight documentation snippet", Er)
              }
              return ar.push(`<span class="DocsInlineCodeRow"><code class="DocsInlineCode">${fr}</code>${tr(Qr,"DocsCopyInline")}</span>`), `\0PLACEHOLDER_${jr}\0`
            })), Wr = Ur(Wr), Wr = Wr.replace(/^#### (.+)$/gm, '<h4 class="DocsH4">$1</h4>'), Wr = Wr.replace(/^### (.+)$/gm, '<h3 class="DocsH3">$1</h3>'), Wr = Wr.replace(/^## (.+)$/gm, '<h2 class="DocsH2">$1</h2>'), Wr = Wr.replace(/^# (.+)$/gm, '<h1 class="DocsH1">$1</h1>'), Wr = Wr.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"), Wr = Wr.replace(/\[([^\]]+)\]\(([^)]+)\)/g, ((rr, Sr, Qr) => Qr.startsWith("#") ? `<a class="DocsAnchor" data-id="${Qr}">${Sr}</a>` : `<a href="${Qr}" target="_blank" rel="noopener noreferrer">${Sr}</a>`)), Wr = Wr.replace(/^(\|.+\|)\n(\|[\s:\-|]+\|)\n((?:\|.+\|\s*\r?\n?)*)/gm, ((rr, Sr, Qr, Zr) => `<table class="DocsTable"><thead><tr>${Sr.split("|").slice(1,-1).map((rr=>`<th>${rr.trim()}</th>`)).join("")}</tr></thead><tbody>${Zr.trim().split("\n").map((rr=>`<tr>${rr.split("|").slice(1,-1).map((rr=>`<td>${rr.trim()}</td>`)).join("")}</tr>`)).join("")}</tbody></table>`)), Wr = Wr.replace(/(?:^[ \t]*([*-])[ \t]+.+(?:\n|$))+/gm, ((rr, Sr) => function(rr, Sr) {
              const Qr = "*" === Sr,
                Zr = [];
              for (const Ir of rr.split("\n")) {
                const rr = Ir.match(/^([ \t]*)(?:[*-])[ \t]+(.+)$/);
                rr && Zr.push({
                  indent: rr[1].replace(/\t/g, "  ").length,
                  content: rr[2]
                })
              }
              let Wr = "";
              const ar = [],
                jr = Qr ? "ol" : "ul";
              for (const {
                  indent: Ir,
                  content: fr
                }
                of Zr) {
                for (; ar.length > 0 && Ir < ar[ar.length - 1];) Wr += `</${jr}></li>`, ar.pop();
                (0 === ar.length || Ir > ar[ar.length - 1]) && (ar.length > 0 && (Wr = Wr.replace(/<\/li>$/, "")), Wr += `<${jr} class="DocsList">`, ar.push(Ir)), Wr += `<li class="DocsListItem">${fr}</li>`
              }
              for (; ar.length > 0;) Wr += `</${jr}>`, ar.pop(), ar.length > 0 && (Wr += "</li>");
              return Wr
            }(rr, Sr))), Wr = Wr.replace(/\n{2,}/g, "\n<br/>\n");
            for (let jr = 0; jr < ar.length; jr++) Wr = Wr.replace(`\0PLACEHOLDER_${jr}\0`, ar[jr]);
            if (Zr) {
              const rr = Ur(Zr).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                Sr = new RegExp(rr, "gi");
              Wr = Wr.replace(/([^<>]+)(?=<|$)/g, (rr => rr.replace(Sr, (rr => `<mark class="DocsHighlight">${rr}</mark>`))))
            }
            return Wr
          }(dr.id, dr.content, ur, Jr ? Hr : void 0) : ""), [dr, ur, Jr, Hr]);
        (0, Zr.useEffect)((() => {
          const rr = Pr.current;
          if (!rr) return;
          const Sr = rr => {
            var Sr, Qr, Zr, Wr, ar;
            const jr = null === (Sr = (Qr = rr.target).closest) || void 0 === Sr ? void 0 : Sr.call(Qr, ".DocsCopyButton");
            if (!jr) return;
            rr.preventDefault(), rr.stopPropagation();
            const Ir = null !== (Zr = null === (Wr = jr.parentElement) || void 0 === Wr || null === (ar = Wr.querySelector("code")) || void 0 === ar ? void 0 : ar.textContent) && void 0 !== Zr ? Zr : "";
            navigator.clipboard.writeText(Ir.trimEnd()).then((() => {
              jr.classList.add("Copied"), setTimeout((() => {
                jr.classList.remove("Copied")
              }), 1500)
            })).catch((rr => {
              console.warn("Could not copy documentation code", rr)
            }))
          };
          return rr.addEventListener("click", Sr, !0), () => {
            rr.removeEventListener("click", Sr, !0)
          }
        }), []);
        const [SS, QS] = (0, Zr.useState)(0);
        (0, Zr.useEffect)((() => {
          if (!Jr || !Pr.current) return void QS(0);
          const rr = Pr.current.querySelectorAll(".DocsHighlight").length;
          QS(rr)
        }), [Jr, rS]), (0, Zr.useEffect)((() => {
          if (null === Cr || !Pr.current) return;
          Mr(null);
          const rr = Pr.current.querySelectorAll(".DocsHighlight");
          if (0 === rr.length) return;
          const Sr = Math.min(Cr, rr.length - 1);
          gr(Sr), rr.forEach((rr => {
            rr.classList.remove("DocsHighlightActive")
          })), rr[Sr].classList.add("DocsHighlightActive"), rr[Sr].scrollIntoView({
            block: "center",
            behavior: "smooth"
          })
        }), [Cr, rS]);
        const ZS = (0, Zr.useCallback)((rr => {
            if (!Pr.current) return;
            const Sr = Pr.current.querySelectorAll(".DocsHighlight");
            if (0 === Sr.length) return;
            const Qr = (Rr + rr + Sr.length) % Sr.length;
            gr(Qr), Mr(Qr)
          }), [Rr]),
          WS = (0, Zr.useCallback)((rr => {
            var Sr;
            const Qr = null === (Sr = Kr[rr]) || void 0 === Sr ? void 0 : Sr.tabStep;
            Qr && Qr === cr && (0, er.i)(Qr), rr !== Lr ? (kr(!0), lr(rr), gr(0), Pr.current && (Pr.current.scrollTop = 0), Jr && Mr(0)) : kr(!Gr)
          }), [Jr, Lr, Gr, cr]),
          aS = (0, Zr.useCallback)((rr => {
            var Sr;
            const Qr = Array.from((null === (Sr = Pr.current) || void 0 === Sr ? void 0 : Sr.querySelectorAll(".DocsH2, .DocsH3")) || []).find((Sr => {
              var Qr;
              return null === (Qr = Sr.textContent) || void 0 === Qr ? void 0 : Qr.includes(rr)
            }));
            Qr && Qr.scrollIntoView({
              block: "start",
              behavior: "smooth"
            })
          }), [Pr]),
          jS = (0, Zr.useCallback)((rr => {
            var Sr, Qr;
            const Zr = null !== (Sr = null === (Qr = Xr.current) || void 0 === Qr ? void 0 : Qr.clientWidth) && void 0 !== Sr ? Sr : window.innerWidth,
              Wr = Math.max(120, Zr - 200);
            return Math.min(Math.max(rr, 120), Wr)
          }), []),
          IS = (0, Zr.useCallback)((() => {
            var rr;
            ir.current && (ir.current = !1, null === (rr = Xr.current) || void 0 === rr || rr.classList.remove("DocsSidebarResizing"))
          }), []),
          fS = (0, Zr.useCallback)((rr => {
            var Sr;
            rr.preventDefault(), ir.current = !0, null === (Sr = Xr.current) || void 0 === Sr || Sr.classList.add("DocsSidebarResizing")
          }), []);
        (0, Zr.useEffect)((() => {
          const rr = Xr.current,
            Sr = rr => {
              if (!ir.current || !Xr.current) return;
              const Sr = Xr.current.getBoundingClientRect().left;
              Vr(jS(rr.clientX - Sr))
            };
          return window.addEventListener("mousemove", Sr), window.addEventListener("mouseup", IS), () => {
            window.removeEventListener("mousemove", Sr), window.removeEventListener("mouseup", IS), null === rr || void 0 === rr || rr.classList.remove("DocsSidebarResizing")
          }
        }), [jS, IS]);
        const ES = (0, Zr.useCallback)((rr => {
          if (rr) {
            const [Sr, Qr] = rr.slice(1).split("-");
            Qr && (wr.current = {
              docId: Sr,
              subsection: Qr
            }), Sr && WS(Sr)
          }
        }), [WS]);
        (0, Zr.useEffect)((() => {
          const rr = wr.current;
          rr && Lr === rr.docId && (setTimeout((() => {
            aS(rr.subsection)
          }), 0), wr.current = null)
        })), (0, Zr.useEffect)((() => {
          if (!Pr.current) return;
          Pr.current.querySelectorAll("a.DocsAnchor").forEach((rr => {
            rr.addEventListener("click", (Sr => {
              Sr.preventDefault(), ES(rr.dataset.id)
            }))
          }))
        }), [Lr, ES]);
        const pS = Object.values(Kr).find((rr => (null === rr || void 0 === rr ? void 0 : rr.pageStep) === cr));
        return (0, Nr.jsx)(nr.h, {
          tutorial: "docsOverview",
          step: null !== (yr = null === pS || void 0 === pS ? void 0 : pS.pageStep) && void 0 !== yr ? yr : "docsPanel",
          text: sr(null !== (Br = null === pS || void 0 === pS ? void 0 : pS.pageText) && void 0 !== Br ? Br : "codeEditor:tutorialDocsPanel"),
          enabled: Or,
          placement: "left",
          onPrevious: pS ? void 0 : vr,
          children: (0, Nr.jsxs)("div", {
            className: "DocsPanel",
            ref: Xr,
            children: [(0, Nr.jsxs)("div", {
              className: "DocsSidebar",
              style: {
                width: Ar,
                minWidth: Ar,
                maxWidth: Ar
              },
              children: [(0, Nr.jsx)(ar.b, {
                className: "DocsSearch",
                placeholderText: "\ud83d\udd0e Search docs...",
                onValueChange: rr => {
                  qr(rr), gr(0), Mr(0)
                }
              }, Fr), (0, Nr.jsx)("div", {
                className: "DocsNavList",
                children: Jr ? Dr.map((rr => (0, Nr.jsxs)("div", {
                  className: Ir()("DocsNavItem", "SearchResult", {
                    Active: rr.doc.id === (null === dr || void 0 === dr ? void 0 : dr.id)
                  }),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    WS(rr.doc.id)
                  },
                  children: [(0, Nr.jsxs)("div", {
                    className: "SearchResultTitle",
                    children: [rr.doc.title, (0, Nr.jsx)("span", {
                      className: "SearchResultCount",
                      children: rr.matchCount
                    })]
                  }), (0, Nr.jsx)("div", {
                    className: "SearchResultSnippet",
                    children: hr(rr.snippet, Hr)
                  })]
                }, rr.doc.id))) : Wr.e.map((rr => {
                  const Sr = (0, Nr.jsxs)("div", {
                      className: Ir()("DocsNavItem", {
                        Active: rr.id === (null === dr || void 0 === dr ? void 0 : dr.id)
                      }),
                      "data-pad-focusable": !0,
                      onClick: () => {
                        WS(rr.id)
                      },
                      children: [(0, Nr.jsx)("span", {
                        className: "DocsNavItemTitle",
                        children: rr.title
                      }), rr.subsections && rr.id === (null === dr || void 0 === dr ? void 0 : dr.id) && Gr && (0, Nr.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, Nr.jsx)(zr.c, {
                          name: "angle-down"
                        })
                      }), rr.subsections && (rr.id !== (null === dr || void 0 === dr ? void 0 : dr.id) || !Gr) && (0, Nr.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, Nr.jsx)(zr.c, {
                          name: "angle-up"
                        })
                      })]
                    }),
                    Qr = Kr[rr.id];
                  return (0, Nr.jsxs)(Zr.Fragment, {
                    children: [Qr && (0, Nr.jsx)(nr.h, {
                      tutorial: "docsOverview",
                      step: Qr.tabStep,
                      text: sr(Qr.tabText),
                      enabled: Or,
                      placement: "left",
                      waitForClick: !0,
                      children: Sr
                    }), !Qr && Sr, Gr && rr.subsections && rr.id === (null === dr || void 0 === dr ? void 0 : dr.id) && rr.subsections.map((rr => (0, Nr.jsx)("div", {
                      className: "DocsNavItem DocsSubsection",
                      "data-pad-focusable": !0,
                      onClick: () => {
                        aS(rr)
                      },
                      children: rr
                    }, rr)))]
                  }, rr.id)
                }))
              }), (0, Nr.jsx)("div", {
                className: "DocsSidebarButtonContainer",
                children: (0, Nr.jsx)(Yr.f, {
                  tooltipInner: sr("codeEditor:popOutDocsTooltip"),
                  placement: "top",
                  children: (0, Nr.jsx)(fr.h, {
                    className: "DocsSidebarButton",
                    onClick: Tr,
                    children: sr("codeEditor:popOutDocs")
                  })
                })
              })]
            }), (0, Nr.jsx)("div", {
              className: "DocsSidebarResizeHandle",
              onMouseDown: fS
            }), (0, Nr.jsxs)("div", {
              className: "DocsContentWrapper",
              children: [Jr && SS > 0 && (0, Nr.jsxs)("div", {
                className: "DocsMatchNav",
                children: [(0, Nr.jsxs)("span", {
                  className: "DocsMatchNavLabel",
                  children: [Rr + 1, " / ", SS]
                }), (0, Nr.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    ZS(-1)
                  },
                  children: "\u25b2"
                }), (0, Nr.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    ZS(1)
                  },
                  children: "\u25bc"
                })]
              }), (0, Nr.jsx)("div", {
                className: "DocsContent",
                ref: Pr,
                dangerouslySetInnerHTML: {
                  __html: rS
                }
              })]
            })]
          })
        })
      }))
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);