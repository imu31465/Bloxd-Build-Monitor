export const id = 276;
export const ids = [276];
export const modules = {
  39426: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      default: () => aB
    });
    var Vc = nc(73),
      Ic = nc(3795),
      rB = nc(1485),
      uc = nc(912),
      sc = nc.n(uc),
      Mc = nc(1255),
      Pc = nc(1051),
      qB = nc(3766),
      Oc = nc(3781),
      Tc = nc(3783),
      fc = nc(957);

    function mB(cB) {
      return cB.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    qB.b.registerLanguage("javascript", Oc.d), qB.b.registerLanguage("typescript", Tc.e);

    function ec(cB, Bc) {
      const nc = mB(cB).replace(/"/g, "&quot;");
      return `<button type="button" class="DocsCopyButton ${Bc}" title="${nc}" aria-label="${nc}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5" rx="1.5"/><path d="M10.5 3.5V3A1.5 1.5 0 0 0 9 1.5H3A1.5 1.5 0 0 0 1.5 3v6A1.5 1.5 0 0 0 3 10.5h.5"/></svg><svg class="DocsCopiedIcon" viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 8.5l3.5 3.5 7.5-7.5"/></svg></button>`
    }

    function tB(cB, Bc) {
      const nc = [],
        Vc = cB.toLowerCase(),
        Ic = Bc.toLowerCase();
      let rB = 0;
      for (; rB < cB.length;) {
        const uc = Vc.indexOf(Ic, rB);
        if (-1 === uc) {
          nc.push(cB.slice(rB));
          break
        }
        uc > rB && nc.push(cB.slice(rB, uc)), nc.push((0, fc.jsx)("mark", {
          className: "DocsHighlight",
          children: cB.slice(uc, uc + Bc.length)
        }, uc)), rB = uc + Bc.length
      }
      return nc
    }
    var Sc = nc(926),
      yB = nc(1205),
      zB = nc(35498),
      pc = nc(35501);
    const hc = {
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
      aB = (0, Vc.memo)((function(cB) {
        var Bc, nc, uc, Oc, Tc, aB, lc;
        let {
          popOutDocs: Yc,
          hideDocs: Lc,
          tutorialEnabled: gB
        } = cB;
        const [Uc, bB] = (0, Vc.useState)(Ic.b[0].id), Zc = (0, Vc.useRef)(null), Qc = (0, Vc.useRef)(null), [Cc, vB] = (0, Vc.useState)(""), [Dc, Nc] = (0, Vc.useState)(0), [Ec, oc] = (0, Vc.useState)(null), [Wc, wc] = (0, Vc.useState)(!1), [kB, Xc] = (0, Vc.useState)(160), Hc = (0, Vc.useRef)(!1), Fc = (0, Vc.useRef)(null), Jc = (0, zB.h)("docsOverview"), [jB, Rc] = (0, Vc.useState)(0), iB = Object.values(hc).some((cB => (null === cB || void 0 === cB ? void 0 : cB.tabStep) === Jc));
        (0, Vc.useEffect)((() => {
          iB && Cc.length > 0 && (vB(""), Rc((cB => cB + 1)))
        }), [iB, Cc]);
        const Kc = Cc.length > 0,
          xB = (0, Vc.useMemo)((() => function(cB) {
            if (!cB) return [];
            const Bc = cB.toLowerCase(),
              nc = [];
            for (const Vc of Ic.b) {
              const cB = Vc.content.toLowerCase();
              let Ic = 0,
                rB = -1,
                uc = 0,
                sc = cB.indexOf(Bc, uc);
              for (; - 1 !== sc;) - 1 === rB && (rB = sc), Ic++, uc = sc + Bc.length, sc = cB.indexOf(Bc, uc);
              if (0 === Ic) continue;
              const Mc = Math.max(0, rB - 40),
                Pc = Math.min(Vc.content.length, rB + Bc.length + 40),
                qB = (Mc > 0 ? "..." : "") + Vc.content.slice(Mc, Pc).replace(/\n/g, " ") + (Pc < Vc.content.length ? "..." : "");
              nc.push({
                doc: Vc,
                matchCount: Ic,
                snippet: qB
              })
            }
            return nc.sort(((cB, Bc) => Bc.matchCount - cB.matchCount)), nc
          }(Cc)), [Cc]),
          dc = Kc ? null !== (Bc = null !== (nc = null === (uc = xB.find((cB => cB.doc.id === Uc))) || void 0 === uc ? void 0 : uc.doc) && void 0 !== nc ? nc : null === (Oc = xB[0]) || void 0 === Oc ? void 0 : Oc.doc) && void 0 !== Bc ? Bc : null : null !== (Tc = Ic.b.find((cB => cB.id === Uc))) && void 0 !== Tc ? Tc : Ic.b[0],
          {
            t: Ac
          } = (0, Pc.x)(),
          Gc = Ac("codeEditor:copySnippet"),
          cn = (0, Vc.useMemo)((() => dc ? function(cB, Bc, nc, Vc) {
            let Ic = Bc;
            Ic = Ic.replace(/\r\n/g, "\n");
            const rB = [];
            Ic = Ic.replace(/```(\w*)\n([\s\S]*?)```/g, ((cB, Bc, Vc) => {
              const Ic = rB.length;
              let uc = mB(Vc);
              try {
                uc = qB.b.highlight(Vc.trimEnd(), {
                  language: Bc
                }).value
              } catch (sc) {
                console.warn("Could not highlight documentation code block", sc)
              }
              return rB.push(`<div class="DocsCodeBlockRow"><pre class="DocsCodeBlock" data-lang="${Bc}"><code>${uc}</code></pre>${ec(nc,"DocsCopyBlock")}</div>`), `\0PLACEHOLDER_${Ic}\0`
            })), Ic = Ic.replace(/(`{1,2})([^\n]+?)\1(?!`)/g, ((Bc, Vc, Ic) => {
              const uc = rB.length,
                sc = 2 === Vc.length ? Ic.replace(/^ (.*) $/, "$1") : Ic;
              let Mc = mB(sc);
              try {
                "apiReference" !== cB && "callbacks" !== cB || (Mc = qB.b.highlight(sc.trimEnd().replaceAll("\\|", "|"), {
                  language: "typescript"
                }).value)
              } catch (Pc) {
                console.warn("Could not highlight documentation snippet", Pc)
              }
              return rB.push(`<span class="DocsInlineCodeRow"><code class="DocsInlineCode">${Mc}</code>${ec(nc,"DocsCopyInline")}</span>`), `\0PLACEHOLDER_${uc}\0`
            })), Ic = mB(Ic), Ic = Ic.replace(/^#### (.+)$/gm, '<h4 class="DocsH4">$1</h4>'), Ic = Ic.replace(/^### (.+)$/gm, '<h3 class="DocsH3">$1</h3>'), Ic = Ic.replace(/^## (.+)$/gm, '<h2 class="DocsH2">$1</h2>'), Ic = Ic.replace(/^# (.+)$/gm, '<h1 class="DocsH1">$1</h1>'), Ic = Ic.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"), Ic = Ic.replace(/\[([^\]]+)\]\(([^)]+)\)/g, ((cB, Bc, nc) => nc.startsWith("#") ? `<a class="DocsAnchor" data-id="${nc}">${Bc}</a>` : `<a href="${nc}" target="_blank" rel="noopener noreferrer">${Bc}</a>`)), Ic = Ic.replace(/^(\|.+\|)\n(\|[\s:\-|]+\|)\n((?:\|.+\|\s*\r?\n?)*)/gm, ((cB, Bc, nc, Vc) => `<table class="DocsTable"><thead><tr>${Bc.split("|").slice(1,-1).map((cB=>`<th>${cB.trim()}</th>`)).join("")}</tr></thead><tbody>${Vc.trim().split("\n").map((cB=>`<tr>${cB.split("|").slice(1,-1).map((cB=>`<td>${cB.trim()}</td>`)).join("")}</tr>`)).join("")}</tbody></table>`)), Ic = Ic.replace(/(?:^[ \t]*([*-])[ \t]+.+(?:\n|$))+/gm, ((cB, Bc) => function(cB, Bc) {
              const nc = "*" === Bc,
                Vc = [];
              for (const sc of cB.split("\n")) {
                const cB = sc.match(/^([ \t]*)(?:[*-])[ \t]+(.+)$/);
                cB && Vc.push({
                  indent: cB[1].replace(/\t/g, "  ").length,
                  content: cB[2]
                })
              }
              let Ic = "";
              const rB = [],
                uc = nc ? "ol" : "ul";
              for (const {
                  indent: sc,
                  content: Mc
                }
                of Vc) {
                for (; rB.length > 0 && sc < rB[rB.length - 1];) Ic += `</${uc}></li>`, rB.pop();
                (0 === rB.length || sc > rB[rB.length - 1]) && (rB.length > 0 && (Ic = Ic.replace(/<\/li>$/, "")), Ic += `<${uc} class="DocsList">`, rB.push(sc)), Ic += `<li class="DocsListItem">${Mc}</li>`
              }
              for (; rB.length > 0;) Ic += `</${uc}>`, rB.pop(), rB.length > 0 && (Ic += "</li>");
              return Ic
            }(cB, Bc))), Ic = Ic.replace(/\n{2,}/g, "\n<br/>\n");
            for (let uc = 0; uc < rB.length; uc++) Ic = Ic.replace(`\0PLACEHOLDER_${uc}\0`, rB[uc]);
            if (Vc) {
              const cB = mB(Vc).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                Bc = new RegExp(cB, "gi");
              Ic = Ic.replace(/([^<>]+)(?=<|$)/g, (cB => cB.replace(Bc, (cB => `<mark class="DocsHighlight">${cB}</mark>`))))
            }
            return Ic
          }(dc.id, dc.content, Gc, Kc ? Cc : void 0) : ""), [dc, Gc, Kc, Cc]);
        (0, Vc.useEffect)((() => {
          const cB = Qc.current;
          if (!cB) return;
          const Bc = cB => {
            var Bc, nc, Vc, Ic, rB;
            const uc = null === (Bc = (nc = cB.target).closest) || void 0 === Bc ? void 0 : Bc.call(nc, ".DocsCopyButton");
            if (!uc) return;
            cB.preventDefault(), cB.stopPropagation();
            const sc = null !== (Vc = null === (Ic = uc.parentElement) || void 0 === Ic || null === (rB = Ic.querySelector("code")) || void 0 === rB ? void 0 : rB.textContent) && void 0 !== Vc ? Vc : "";
            navigator.clipboard.writeText(sc.trimEnd()).then((() => {
              uc.classList.add("Copied"), setTimeout((() => {
                uc.classList.remove("Copied")
              }), 1500)
            })).catch((cB => {
              console.warn("Could not copy documentation code", cB)
            }))
          };
          return cB.addEventListener("click", Bc, !0), () => {
            cB.removeEventListener("click", Bc, !0)
          }
        }), []);
        const [BB, nB] = (0, Vc.useState)(0);
        (0, Vc.useEffect)((() => {
          if (!Kc || !Qc.current) return void nB(0);
          const cB = Qc.current.querySelectorAll(".DocsHighlight").length;
          nB(cB)
        }), [Kc, cn]), (0, Vc.useEffect)((() => {
          if (null === Ec || !Qc.current) return;
          oc(null);
          const cB = Qc.current.querySelectorAll(".DocsHighlight");
          if (0 === cB.length) return;
          const Bc = Math.min(Ec, cB.length - 1);
          Nc(Bc), cB.forEach((cB => {
            cB.classList.remove("DocsHighlightActive")
          })), cB[Bc].classList.add("DocsHighlightActive"), cB[Bc].scrollIntoView({
            block: "center",
            behavior: "smooth"
          })
        }), [Ec, cn]);
        const VB = (0, Vc.useCallback)((cB => {
            if (!Qc.current) return;
            const Bc = Qc.current.querySelectorAll(".DocsHighlight");
            if (0 === Bc.length) return;
            const nc = (Dc + cB + Bc.length) % Bc.length;
            Nc(nc), oc(nc)
          }), [Dc]),
          IB = (0, Vc.useCallback)((cB => {
            var Bc;
            const nc = null === (Bc = hc[cB]) || void 0 === Bc ? void 0 : Bc.tabStep;
            nc && nc === Jc && (0, pc.f)(nc), cB !== Uc ? (wc(!0), bB(cB), Nc(0), Qc.current && (Qc.current.scrollTop = 0), Kc && oc(0)) : wc(!Wc)
          }), [Kc, Uc, Wc, Jc]),
          rn = (0, Vc.useCallback)((cB => {
            var Bc;
            const nc = Array.from((null === (Bc = Qc.current) || void 0 === Bc ? void 0 : Bc.querySelectorAll(".DocsH2, .DocsH3")) || []).find((Bc => {
              var nc;
              return null === (nc = Bc.textContent) || void 0 === nc ? void 0 : nc.includes(cB)
            }));
            nc && nc.scrollIntoView({
              block: "start",
              behavior: "smooth"
            })
          }), [Qc]),
          uB = (0, Vc.useCallback)((cB => {
            var Bc, nc;
            const Vc = null !== (Bc = null === (nc = Zc.current) || void 0 === nc ? void 0 : nc.clientWidth) && void 0 !== Bc ? Bc : window.innerWidth,
              Ic = Math.max(120, Vc - 200);
            return Math.min(Math.max(cB, 120), Ic)
          }), []),
          sB = (0, Vc.useCallback)((() => {
            var cB;
            Hc.current && (Hc.current = !1, null === (cB = Zc.current) || void 0 === cB || cB.classList.remove("DocsSidebarResizing"))
          }), []),
          MB = (0, Vc.useCallback)((cB => {
            var Bc;
            cB.preventDefault(), Hc.current = !0, null === (Bc = Zc.current) || void 0 === Bc || Bc.classList.add("DocsSidebarResizing")
          }), []);
        (0, Vc.useEffect)((() => {
          const cB = Zc.current,
            Bc = cB => {
              if (!Hc.current || !Zc.current) return;
              const Bc = Zc.current.getBoundingClientRect().left;
              Xc(uB(cB.clientX - Bc))
            };
          return window.addEventListener("mousemove", Bc), window.addEventListener("mouseup", sB), () => {
            window.removeEventListener("mousemove", Bc), window.removeEventListener("mouseup", sB), null === cB || void 0 === cB || cB.classList.remove("DocsSidebarResizing")
          }
        }), [uB, sB]);
        const PB = (0, Vc.useCallback)((cB => {
          if (cB) {
            const [Bc, nc] = cB.slice(1).split("-");
            nc && (Fc.current = {
              docId: Bc,
              subsection: nc
            }), Bc && IB(Bc)
          }
        }), [IB]);
        (0, Vc.useEffect)((() => {
          const cB = Fc.current;
          cB && Uc === cB.docId && (setTimeout((() => {
            rn(cB.subsection)
          }), 0), Fc.current = null)
        })), (0, Vc.useEffect)((() => {
          if (!Qc.current) return;
          Qc.current.querySelectorAll("a.DocsAnchor").forEach((cB => {
            cB.addEventListener("click", (Bc => {
              Bc.preventDefault(), PB(cB.dataset.id)
            }))
          }))
        }), [Uc, PB]);
        const qn = Object.values(hc).find((cB => (null === cB || void 0 === cB ? void 0 : cB.pageStep) === Jc));
        return (0, fc.jsx)(zB.f, {
          tutorial: "docsOverview",
          step: null !== (aB = null === qn || void 0 === qn ? void 0 : qn.pageStep) && void 0 !== aB ? aB : "docsPanel",
          text: Ac(null !== (lc = null === qn || void 0 === qn ? void 0 : qn.pageText) && void 0 !== lc ? lc : "codeEditor:tutorialDocsPanel"),
          enabled: gB,
          placement: "left",
          onPrevious: qn ? void 0 : Lc,
          children: (0, fc.jsxs)("div", {
            className: "DocsPanel",
            ref: Zc,
            children: [(0, fc.jsxs)("div", {
              className: "DocsSidebar",
              style: {
                width: kB,
                minWidth: kB,
                maxWidth: kB
              },
              children: [(0, fc.jsx)(rB.e, {
                className: "DocsSearch",
                placeholderText: "\ud83d\udd0e Search docs...",
                onValueChange: cB => {
                  vB(cB), Nc(0), oc(0)
                }
              }, jB), (0, fc.jsx)("div", {
                className: "DocsNavList",
                children: Kc ? xB.map((cB => (0, fc.jsxs)("div", {
                  className: sc()("DocsNavItem", "SearchResult", {
                    Active: cB.doc.id === (null === dc || void 0 === dc ? void 0 : dc.id)
                  }),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    IB(cB.doc.id)
                  },
                  children: [(0, fc.jsxs)("div", {
                    className: "SearchResultTitle",
                    children: [cB.doc.title, (0, fc.jsx)("span", {
                      className: "SearchResultCount",
                      children: cB.matchCount
                    })]
                  }), (0, fc.jsx)("div", {
                    className: "SearchResultSnippet",
                    children: tB(cB.snippet, Cc)
                  })]
                }, cB.doc.id))) : Ic.b.map((cB => {
                  const Bc = (0, fc.jsxs)("div", {
                      className: sc()("DocsNavItem", {
                        Active: cB.id === (null === dc || void 0 === dc ? void 0 : dc.id)
                      }),
                      "data-pad-focusable": !0,
                      onClick: () => {
                        IB(cB.id)
                      },
                      children: [(0, fc.jsx)("span", {
                        className: "DocsNavItemTitle",
                        children: cB.title
                      }), cB.subsections && cB.id === (null === dc || void 0 === dc ? void 0 : dc.id) && Wc && (0, fc.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, fc.jsx)(Sc.e, {
                          name: "angle-down"
                        })
                      }), cB.subsections && (cB.id !== (null === dc || void 0 === dc ? void 0 : dc.id) || !Wc) && (0, fc.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, fc.jsx)(Sc.e, {
                          name: "angle-up"
                        })
                      })]
                    }),
                    nc = hc[cB.id];
                  return (0, fc.jsxs)(Vc.Fragment, {
                    children: [nc && (0, fc.jsx)(zB.f, {
                      tutorial: "docsOverview",
                      step: nc.tabStep,
                      text: Ac(nc.tabText),
                      enabled: gB,
                      placement: "left",
                      waitForClick: !0,
                      children: Bc
                    }), !nc && Bc, Wc && cB.subsections && cB.id === (null === dc || void 0 === dc ? void 0 : dc.id) && cB.subsections.map((cB => (0, fc.jsx)("div", {
                      className: "DocsNavItem DocsSubsection",
                      "data-pad-focusable": !0,
                      onClick: () => {
                        rn(cB)
                      },
                      children: cB
                    }, cB)))]
                  }, cB.id)
                }))
              }), (0, fc.jsx)("div", {
                className: "DocsSidebarButtonContainer",
                children: (0, fc.jsx)(yB.d, {
                  tooltipInner: Ac("codeEditor:popOutDocsTooltip"),
                  placement: "top",
                  children: (0, fc.jsx)(Mc.d, {
                    className: "DocsSidebarButton",
                    onClick: Yc,
                    children: Ac("codeEditor:popOutDocs")
                  })
                })
              })]
            }), (0, fc.jsx)("div", {
              className: "DocsSidebarResizeHandle",
              onMouseDown: MB
            }), (0, fc.jsxs)("div", {
              className: "DocsContentWrapper",
              children: [Kc && BB > 0 && (0, fc.jsxs)("div", {
                className: "DocsMatchNav",
                children: [(0, fc.jsxs)("span", {
                  className: "DocsMatchNavLabel",
                  children: [Dc + 1, " / ", BB]
                }), (0, fc.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    VB(-1)
                  },
                  children: "\u25b2"
                }), (0, fc.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    VB(1)
                  },
                  children: "\u25bc"
                })]
              }), (0, fc.jsx)("div", {
                className: "DocsContent",
                ref: Qc,
                dangerouslySetInnerHTML: {
                  __html: cn
                }
              })]
            })]
          })
        })
      }))
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);