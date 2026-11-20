export const id = 292;
export const ids = [292];
export const modules = {
  40912: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      default: () => db
    });
    var Bb = hb(49),
      Ob = hb(4515),
      Gb = hb(1585),
      Ub = hb(958),
      Lb = hb.n(Ub),
      Yb = hb(1357),
      Sb = hb(1095),
      ab = hb(4481),
      Hb = hb(4493),
      wb = hb(4502),
      Zb = hb(1007);

    function Xb(bb) {
      return bb.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    ab.c.registerLanguage("javascript", Hb.e), ab.c.registerLanguage("typescript", wb.d);

    function pb(bb, ub) {
      const hb = Xb(bb).replace(/"/g, "&quot;");
      return `<button type="button" class="DocsCopyButton ${ub}" title="${hb}" aria-label="${hb}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5"/><path d="M10.5 3.5V1.5H1.5v9h2"/></svg><svg class="DocsCopiedIcon" viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 8.5l3.5 3.5 7.5-7.5"/></svg></button>`
    }

    function ob(bb, ub) {
      const hb = [],
        Bb = bb.toLowerCase(),
        Ob = ub.toLowerCase();
      let Gb = 0;
      for (; Gb < bb.length;) {
        const Ub = Bb.indexOf(Ob, Gb);
        if (-1 === Ub) {
          hb.push(bb.slice(Gb));
          break
        }
        Ub > Gb && hb.push(bb.slice(Gb, Ub)), hb.push((0, Zb.jsx)("mark", {
          className: "DocsHighlight",
          children: bb.slice(Ub, Ub + ub.length)
        }, Ub)), Gb = Ub + ub.length
      }
      return hb
    }
    var Ab = hb(966),
      lb = hb(1260),
      Kb = hb(36527),
      Wb = hb(36533);
    const Cb = {
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
      db = (0, Bb.memo)((function(bb) {
        var ub, hb, Ub, Hb, wb, db, rb;
        let {
          popOutDocs: jb,
          hideDocs: nb,
          tutorialEnabled: Db
        } = bb;
        const [xb, zb] = (0, Bb.useState)(Ob.b[0].id), gb = (0, Bb.useRef)(null), ib = (0, Bb.useRef)(null), [vb, tb] = (0, Bb.useState)(""), [Jb, eb] = (0, Bb.useState)(0), [Nb, sb] = (0, Bb.useState)(null), [Mb, mb] = (0, Bb.useState)(!1), [Ib, Pb] = (0, Bb.useState)(160), qb = (0, Bb.useRef)(!1), Eb = (0, Bb.useRef)(null), yb = (0, Kb.k)("docsOverview"), [Vb, Fb] = (0, Bb.useState)(0), fb = Object.values(Cb).some((bb => (null === bb || void 0 === bb ? void 0 : bb.tabStep) === yb));
        (0, Bb.useEffect)((() => {
          fb && vb.length > 0 && (tb(""), Fb((bb => bb + 1)))
        }), [fb, vb]);
        const kb = vb.length > 0,
          Tb = (0, Bb.useMemo)((() => function(bb) {
            if (!bb) return [];
            const ub = bb.toLowerCase(),
              hb = [];
            for (const Bb of Ob.b) {
              const bb = Bb.content.toLowerCase();
              let Ob = 0,
                Gb = -1,
                Ub = 0,
                Lb = bb.indexOf(ub, Ub);
              for (; - 1 !== Lb;) - 1 === Gb && (Gb = Lb), Ob++, Ub = Lb + ub.length, Lb = bb.indexOf(ub, Ub);
              if (0 === Ob) continue;
              const Yb = Math.max(0, Gb - 40),
                Sb = Math.min(Bb.content.length, Gb + ub.length + 40),
                ab = (Yb > 0 ? "..." : "") + Bb.content.slice(Yb, Sb).replace(/\n/g, " ") + (Sb < Bb.content.length ? "..." : "");
              hb.push({
                doc: Bb,
                matchCount: Ob,
                snippet: ab
              })
            }
            return hb.sort(((bb, ub) => ub.matchCount - bb.matchCount)), hb
          }(vb)), [vb]),
          cb = kb ? null !== (ub = null !== (hb = null === (Ub = Tb.find((bb => bb.doc.id === xb))) || void 0 === Ub ? void 0 : Ub.doc) && void 0 !== hb ? hb : null === (Hb = Tb[0]) || void 0 === Hb ? void 0 : Hb.doc) && void 0 !== ub ? ub : null : null !== (wb = Ob.b.find((bb => bb.id === xb))) && void 0 !== wb ? wb : Ob.b[0],
          {
            t: Qb
          } = (0, Sb.K)(),
          Rb = Qb("codeEditor:copySnippet"),
          bu = (0, Bb.useMemo)((() => cb ? function(bb, ub, hb, Bb) {
            let Ob = ub;
            Ob = Ob.replace(/\r\n/g, "\n");
            const Gb = [];
            Ob = Ob.replace(/```(\w*)\n([\s\S]*?)```/g, ((bb, ub, Bb) => {
              const Ob = Gb.length;
              let Ub = Xb(Bb);
              try {
                Ub = ab.c.highlight(Bb.trimEnd(), {
                  language: ub
                }).value
              } catch (Lb) {
                console.warn("Could not highlight documentation code block", Lb)
              }
              return Gb.push(`<div class="DocsCodeBlockRow"><pre class="DocsCodeBlock" data-lang="${ub}"><code>${Ub}</code></pre>${pb(hb,"DocsCopyBlock")}</div>`), `\0PLACEHOLDER_${Ob}\0`
            })), Ob = Ob.replace(/(`{1,2})([^\n]+?)\1(?!`)/g, ((ub, Bb, Ob) => {
              const Ub = Gb.length,
                Lb = 2 === Bb.length ? Ob.replace(/^ (.*) $/, "$1") : Ob;
              let Yb = Xb(Lb);
              try {
                "apiReference" !== bb && "callbacks" !== bb || (Yb = ab.c.highlight(Lb.trimEnd().replaceAll("\\|", "|"), {
                  language: "typescript"
                }).value)
              } catch (Sb) {
                console.warn("Could not highlight documentation snippet", Sb)
              }
              return Gb.push(`<span class="DocsInlineCodeRow"><code class="DocsInlineCode">${Yb}</code>${pb(hb,"DocsCopyInline")}</span>`), `\0PLACEHOLDER_${Ub}\0`
            })), Ob = Xb(Ob), Ob = Ob.replace(/^#### (.+)$/gm, '<h4 class="DocsH4">$1</h4>'), Ob = Ob.replace(/^### (.+)$/gm, '<h3 class="DocsH3">$1</h3>'), Ob = Ob.replace(/^## (.+)$/gm, '<h2 class="DocsH2">$1</h2>'), Ob = Ob.replace(/^# (.+)$/gm, '<h1 class="DocsH1">$1</h1>'), Ob = Ob.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"), Ob = Ob.replace(/\[([^\]]+)\]\(([^)]+)\)/g, ((bb, ub, hb) => hb.startsWith("#") ? `<a class="DocsAnchor" data-id="${hb}">${ub}</a>` : `<a href="${hb}" target="_blank" rel="noopener noreferrer">${ub}</a>`)), Ob = Ob.replace(/^(\|.+\|)\n(\|[\s:\-|]+\|)\n((?:\|.+\|\s*\r?\n?)*)/gm, ((bb, ub, hb, Bb) => `<table class="DocsTable"><thead><tr>${ub.split("|").slice(1,-1).map((bb=>`<th>${bb.trim()}</th>`)).join("")}</tr></thead><tbody>${Bb.trim().split("\n").map((bb=>`<tr>${bb.split("|").slice(1,-1).map((bb=>`<td>${bb.trim()}</td>`)).join("")}</tr>`)).join("")}</tbody></table>`)), Ob = Ob.replace(/(?:^[ \t]*([*-])[ \t]+.+(?:\n|$))+/gm, ((bb, ub) => function(bb, ub) {
              const hb = "*" === ub,
                Bb = [];
              for (const Lb of bb.split("\n")) {
                const bb = Lb.match(/^([ \t]*)(?:[*-])[ \t]+(.+)$/);
                bb && Bb.push({
                  indent: bb[1].replace(/\t/g, "  ").length,
                  content: bb[2]
                })
              }
              let Ob = "";
              const Gb = [],
                Ub = hb ? "ol" : "ul";
              for (const {
                  indent: Lb,
                  content: Yb
                }
                of Bb) {
                for (; Gb.length > 0 && Lb < Gb[Gb.length - 1];) Ob += `</${Ub}></li>`, Gb.pop();
                (0 === Gb.length || Lb > Gb[Gb.length - 1]) && (Gb.length > 0 && (Ob = Ob.replace(/<\/li>$/, "")), Ob += `<${Ub} class="DocsList">`, Gb.push(Lb)), Ob += `<li class="DocsListItem">${Yb}</li>`
              }
              for (; Gb.length > 0;) Ob += `</${Ub}>`, Gb.pop(), Gb.length > 0 && (Ob += "</li>");
              return Ob
            }(bb, ub))), Ob = Ob.replace(/\n{2,}/g, "\n<br/>\n");
            for (let Ub = 0; Ub < Gb.length; Ub++) Ob = Ob.replace(`\0PLACEHOLDER_${Ub}\0`, Gb[Ub]);
            if (Bb) {
              const bb = Xb(Bb).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                ub = new RegExp(bb, "gi");
              Ob = Ob.replace(/([^<>]+)(?=<|$)/g, (bb => bb.replace(ub, (bb => `<mark class="DocsHighlight">${bb}</mark>`))))
            }
            return Ob
          }(cb.id, cb.content, Rb, kb ? vb : void 0) : ""), [cb, Rb, kb, vb]);
        (0, Bb.useEffect)((() => {
          const bb = ib.current;
          if (!bb) return;
          const ub = bb => {
            var ub, hb, Bb, Ob, Gb;
            const Ub = null === (ub = (hb = bb.target).closest) || void 0 === ub ? void 0 : ub.call(hb, ".DocsCopyButton");
            if (!Ub) return;
            bb.preventDefault(), bb.stopPropagation();
            const Lb = null !== (Bb = null === (Ob = Ub.parentElement) || void 0 === Ob || null === (Gb = Ob.querySelector("code")) || void 0 === Gb ? void 0 : Gb.textContent) && void 0 !== Bb ? Bb : "";
            navigator.clipboard.writeText(Lb.trimEnd()).then((() => {
              Ub.classList.add("Copied"), setTimeout((() => {
                Ub.classList.remove("Copied")
              }), 1500)
            })).catch((bb => {
              console.warn("Could not copy documentation code", bb)
            }))
          };
          return bb.addEventListener("click", ub, !0), () => {
            bb.removeEventListener("click", ub, !0)
          }
        }), []);
        const [uu, hu] = (0, Bb.useState)(0);
        (0, Bb.useEffect)((() => {
          if (!kb || !ib.current) return void hu(0);
          const bb = ib.current.querySelectorAll(".DocsHighlight").length;
          hu(bb)
        }), [kb, bu]), (0, Bb.useEffect)((() => {
          if (null === Nb || !ib.current) return;
          sb(null);
          const bb = ib.current.querySelectorAll(".DocsHighlight");
          if (0 === bb.length) return;
          const ub = Math.min(Nb, bb.length - 1);
          eb(ub), bb.forEach((bb => {
            bb.classList.remove("DocsHighlightActive")
          })), bb[ub].classList.add("DocsHighlightActive"), bb[ub].scrollIntoView({
            block: "center",
            behavior: "smooth"
          })
        }), [Nb, bu]);
        const Bu = (0, Bb.useCallback)((bb => {
            if (!ib.current) return;
            const ub = ib.current.querySelectorAll(".DocsHighlight");
            if (0 === ub.length) return;
            const hb = (Jb + bb + ub.length) % ub.length;
            eb(hb), sb(hb)
          }), [Jb]),
          Ou = (0, Bb.useCallback)((bb => {
            var ub;
            const hb = null === (ub = Cb[bb]) || void 0 === ub ? void 0 : ub.tabStep;
            hb && hb === yb && (0, Wb.h)(hb), bb !== xb ? (mb(!0), zb(bb), eb(0), ib.current && (ib.current.scrollTop = 0), kb && sb(0)) : mb(!Mb)
          }), [kb, xb, Mb, yb]),
          Gu = (0, Bb.useCallback)((bb => {
            var ub;
            const hb = Array.from((null === (ub = ib.current) || void 0 === ub ? void 0 : ub.querySelectorAll(".DocsH2, .DocsH3")) || []).find((ub => {
              var hb;
              return null === (hb = ub.textContent) || void 0 === hb ? void 0 : hb.includes(bb)
            }));
            hb && hb.scrollIntoView({
              block: "start",
              behavior: "smooth"
            })
          }), [ib]),
          Uu = (0, Bb.useCallback)((bb => {
            var ub, hb;
            const Bb = null !== (ub = null === (hb = gb.current) || void 0 === hb ? void 0 : hb.clientWidth) && void 0 !== ub ? ub : window.innerWidth,
              Ob = Math.max(120, Bb - 200);
            return Math.min(Math.max(bb, 120), Ob)
          }), []),
          Lu = (0, Bb.useCallback)((() => {
            var bb;
            qb.current && (qb.current = !1, null === (bb = gb.current) || void 0 === bb || bb.classList.remove("DocsSidebarResizing"))
          }), []),
          Yu = (0, Bb.useCallback)((bb => {
            var ub;
            bb.preventDefault(), qb.current = !0, null === (ub = gb.current) || void 0 === ub || ub.classList.add("DocsSidebarResizing")
          }), []);
        (0, Bb.useEffect)((() => {
          const bb = gb.current,
            ub = bb => {
              if (!qb.current || !gb.current) return;
              const ub = gb.current.getBoundingClientRect().left;
              Pb(Uu(bb.clientX - ub))
            };
          return window.addEventListener("mousemove", ub), window.addEventListener("mouseup", Lu), () => {
            window.removeEventListener("mousemove", ub), window.removeEventListener("mouseup", Lu), null === bb || void 0 === bb || bb.classList.remove("DocsSidebarResizing")
          }
        }), [Uu, Lu]);
        const Su = (0, Bb.useCallback)((bb => {
          if (bb) {
            const [ub, hb] = bb.slice(1).split("-");
            hb && (Eb.current = {
              docId: ub,
              subsection: hb
            }), ub && Ou(ub)
          }
        }), [Ou]);
        (0, Bb.useEffect)((() => {
          const bb = Eb.current;
          bb && xb === bb.docId && (setTimeout((() => {
            Gu(bb.subsection)
          }), 0), Eb.current = null)
        })), (0, Bb.useEffect)((() => {
          if (!ib.current) return;
          ib.current.querySelectorAll("a.DocsAnchor").forEach((bb => {
            bb.addEventListener("click", (ub => {
              ub.preventDefault(), Su(bb.dataset.id)
            }))
          }))
        }), [xb, Su]);
        const au = Object.values(Cb).find((bb => (null === bb || void 0 === bb ? void 0 : bb.pageStep) === yb));
        return (0, Zb.jsx)(Kb.h, {
          tutorial: "docsOverview",
          step: null !== (db = null === au || void 0 === au ? void 0 : au.pageStep) && void 0 !== db ? db : "docsPanel",
          text: Qb(null !== (rb = null === au || void 0 === au ? void 0 : au.pageText) && void 0 !== rb ? rb : "codeEditor:tutorialDocsPanel"),
          enabled: Db,
          placement: "left",
          onPrevious: au ? void 0 : nb,
          children: (0, Zb.jsxs)("div", {
            className: "DocsPanel",
            ref: gb,
            children: [(0, Zb.jsxs)("div", {
              className: "DocsSidebar",
              style: {
                width: Ib,
                minWidth: Ib,
                maxWidth: Ib
              },
              children: [(0, Zb.jsx)(Gb.b, {
                className: "DocsSearch",
                placeholderText: "\ud83d\udd0e Search docs...",
                onValueChange: bb => {
                  tb(bb), eb(0), sb(0)
                }
              }, Vb), (0, Zb.jsx)("div", {
                className: "DocsNavList",
                children: kb ? Tb.map((bb => (0, Zb.jsxs)("div", {
                  className: Lb()("DocsNavItem", "SearchResult", {
                    Active: bb.doc.id === (null === cb || void 0 === cb ? void 0 : cb.id)
                  }),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    Ou(bb.doc.id)
                  },
                  children: [(0, Zb.jsxs)("div", {
                    className: "SearchResultTitle",
                    children: [bb.doc.title, (0, Zb.jsx)("span", {
                      className: "SearchResultCount",
                      children: bb.matchCount
                    })]
                  }), (0, Zb.jsx)("div", {
                    className: "SearchResultSnippet",
                    children: ob(bb.snippet, vb)
                  })]
                }, bb.doc.id))) : Ob.b.map((bb => {
                  const ub = (0, Zb.jsxs)("div", {
                      className: Lb()("DocsNavItem", {
                        Active: bb.id === (null === cb || void 0 === cb ? void 0 : cb.id)
                      }),
                      "data-pad-focusable": !0,
                      onClick: () => {
                        Ou(bb.id)
                      },
                      children: [(0, Zb.jsx)("span", {
                        className: "DocsNavItemTitle",
                        children: bb.title
                      }), bb.subsections && bb.id === (null === cb || void 0 === cb ? void 0 : cb.id) && Mb && (0, Zb.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, Zb.jsx)(Ab.e, {
                          name: "angle-down"
                        })
                      }), bb.subsections && (bb.id !== (null === cb || void 0 === cb ? void 0 : cb.id) || !Mb) && (0, Zb.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, Zb.jsx)(Ab.e, {
                          name: "angle-up"
                        })
                      })]
                    }),
                    hb = Cb[bb.id];
                  return (0, Zb.jsxs)(Bb.Fragment, {
                    children: [hb && (0, Zb.jsx)(Kb.h, {
                      tutorial: "docsOverview",
                      step: hb.tabStep,
                      text: Qb(hb.tabText),
                      enabled: Db,
                      placement: "left",
                      waitForClick: !0,
                      children: ub
                    }), !hb && ub, Mb && bb.subsections && bb.id === (null === cb || void 0 === cb ? void 0 : cb.id) && bb.subsections.map((bb => (0, Zb.jsx)("div", {
                      className: "DocsNavItem DocsSubsection",
                      "data-pad-focusable": !0,
                      onClick: () => {
                        Gu(bb)
                      },
                      children: bb
                    }, bb)))]
                  }, bb.id)
                }))
              }), (0, Zb.jsx)("div", {
                className: "DocsSidebarButtonContainer",
                children: (0, Zb.jsx)(lb.d, {
                  tooltipInner: Qb("codeEditor:popOutDocsTooltip"),
                  placement: "top",
                  children: (0, Zb.jsx)(Yb.e, {
                    className: "DocsSidebarButton",
                    onClick: jb,
                    children: Qb("codeEditor:popOutDocs")
                  })
                })
              })]
            }), (0, Zb.jsx)("div", {
              className: "DocsSidebarResizeHandle",
              onMouseDown: Yu
            }), (0, Zb.jsxs)("div", {
              className: "DocsContentWrapper",
              children: [kb && uu > 0 && (0, Zb.jsxs)("div", {
                className: "DocsMatchNav",
                children: [(0, Zb.jsxs)("span", {
                  className: "DocsMatchNavLabel",
                  children: [Jb + 1, " / ", uu]
                }), (0, Zb.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    Bu(-1)
                  },
                  children: "\u25b2"
                }), (0, Zb.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    Bu(1)
                  },
                  children: "\u25bc"
                })]
              }), (0, Zb.jsx)("div", {
                className: "DocsContent",
                ref: ib,
                dangerouslySetInnerHTML: {
                  __html: bu
                }
              })]
            })]
          })
        })
      }))
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);