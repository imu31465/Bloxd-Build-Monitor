export const id = 620;
export const ids = [620];
export const modules = {
  53681: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      default: () => Xb
    });
    var eb = Mb(64),
      Hb = Mb(5637),
      pb = Mb(1876),
      Vb = Mb(1159),
      gb = Mb.n(Vb),
      lb = Mb(1616),
      Lb = Mb(1259),
      Ib = Mb(5612),
      Ob = Mb(5620),
      Ub = Mb(5627),
      tb = Mb(1364);

    function Cb(bb) {
      return bb.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    Ib.d.registerLanguage("javascript", Ob.d), Ib.d.registerLanguage("typescript", Ub.b);

    function Eb(bb, wb) {
      const Mb = Cb(bb).replace(/"/g, "&quot;");
      return `<button type="button" class="DocsCopyButton ${wb}" title="${Mb}" aria-label="${Mb}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5"/><path d="M10.5 3.5V1.5H1.5v9h2"/></svg><svg class="DocsCopiedIcon" viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 8.5l3.5 3.5 7.5-7.5"/></svg></button>`
    }

    function Fb(bb, wb) {
      const Mb = [],
        eb = bb.toLowerCase(),
        Hb = wb.toLowerCase();
      let pb = 0;
      for (; pb < bb.length;) {
        const Vb = eb.indexOf(Hb, pb);
        if (-1 === Vb) {
          Mb.push(bb.slice(pb));
          break
        }
        Vb > pb && Mb.push(bb.slice(pb, Vb)), Mb.push((0, tb.jsx)("mark", {
          className: "DocsHighlight",
          children: bb.slice(Vb, Vb + wb.length)
        }, Vb)), pb = Vb + wb.length
      }
      return Mb
    }
    var Bb = Mb(1475),
      sb = Mb(1516),
      mb = Mb(38095),
      hb = Mb(38103);
    const zb = {
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
      Xb = (0, eb.memo)((function(bb) {
        var wb, Mb, Vb, Ob, Ub, Xb, xb;
        let {
          popOutDocs: jb,
          hideDocs: Kb,
          tutorialEnabled: rb
        } = bb;
        const [Rb, Db] = (0, eb.useState)(Hb.b[0].id), cb = (0, eb.useRef)(null), Yb = (0, eb.useRef)(null), [Zb, fb] = (0, eb.useState)(""), [Ab, Wb] = (0, eb.useState)(0), [Jb, Sb] = (0, eb.useState)(null), [Nb, vb] = (0, eb.useState)(!1), [Qb, Gb] = (0, eb.useState)(160), qb = (0, eb.useRef)(!1), ab = (0, eb.useRef)(null), ib = (0, mb.l)("docsOverview"), [ub, db] = (0, eb.useState)(0), Pb = Object.values(zb).some((bb => (null === bb || void 0 === bb ? void 0 : bb.tabStep) === ib));
        (0, eb.useEffect)((() => {
          Pb && Zb.length > 0 && (fb(""), db((bb => bb + 1)))
        }), [Pb, Zb]);
        const nb = Zb.length > 0,
          yb = (0, eb.useMemo)((() => function(bb) {
            if (!bb) return [];
            const wb = bb.toLowerCase(),
              Mb = [];
            for (const eb of Hb.b) {
              const bb = eb.content.toLowerCase();
              let Hb = 0,
                pb = -1,
                Vb = 0,
                gb = bb.indexOf(wb, Vb);
              for (; - 1 !== gb;) - 1 === pb && (pb = gb), Hb++, Vb = gb + wb.length, gb = bb.indexOf(wb, Vb);
              if (0 === Hb) continue;
              const lb = Math.max(0, pb - 40),
                Lb = Math.min(eb.content.length, pb + wb.length + 40),
                Ib = (lb > 0 ? "..." : "") + eb.content.slice(lb, Lb).replace(/\n/g, " ") + (Lb < eb.content.length ? "..." : "");
              Mb.push({
                doc: eb,
                matchCount: Hb,
                snippet: Ib
              })
            }
            return Mb.sort(((bb, wb) => wb.matchCount - bb.matchCount)), Mb
          }(Zb)), [Zb]),
          ob = nb ? null !== (wb = null !== (Mb = null === (Vb = yb.find((bb => bb.doc.id === Rb))) || void 0 === Vb ? void 0 : Vb.doc) && void 0 !== Mb ? Mb : null === (Ob = yb[0]) || void 0 === Ob ? void 0 : Ob.doc) && void 0 !== wb ? wb : null : null !== (Ub = Hb.b.find((bb => bb.id === Rb))) && void 0 !== Ub ? Ub : Hb.b[0],
          {
            t: Tb
          } = (0, Lb.C)(),
          kb = Tb("codeEditor:copySnippet"),
          bw = (0, eb.useMemo)((() => ob ? function(bb, wb, Mb, eb) {
            let Hb = wb;
            Hb = Hb.replace(/\r\n/g, "\n");
            const pb = [];
            Hb = Hb.replace(/```(\w*)\n([\s\S]*?)```/g, ((bb, wb, eb) => {
              const Hb = pb.length;
              let Vb = Cb(eb);
              try {
                Vb = Ib.d.highlight(eb.trimEnd(), {
                  language: wb
                }).value
              } catch (gb) {
                console.warn("Could not highlight documentation code block", gb)
              }
              return pb.push(`<div class="DocsCodeBlockRow"><pre class="DocsCodeBlock" data-lang="${wb}"><code>${Vb}</code></pre>${Eb(Mb,"DocsCopyBlock")}</div>`), `\0PLACEHOLDER_${Hb}\0`
            })), Hb = Hb.replace(/(`{1,2})([^\n]+?)\1(?!`)/g, ((wb, eb, Hb) => {
              const Vb = pb.length,
                gb = 2 === eb.length ? Hb.replace(/^ (.*) $/, "$1") : Hb;
              let lb = Cb(gb);
              try {
                "apiReference" !== bb && "callbacks" !== bb || (lb = Ib.d.highlight(gb.trimEnd().replaceAll("\\|", "|"), {
                  language: "typescript"
                }).value)
              } catch (Lb) {
                console.warn("Could not highlight documentation snippet", Lb)
              }
              return pb.push(`<span class="DocsInlineCodeRow"><code class="DocsInlineCode">${lb}</code>${Eb(Mb,"DocsCopyInline")}</span>`), `\0PLACEHOLDER_${Vb}\0`
            })), Hb = Cb(Hb), Hb = Hb.replace(/^#### (.+)$/gm, '<h4 class="DocsH4">$1</h4>'), Hb = Hb.replace(/^### (.+)$/gm, '<h3 class="DocsH3">$1</h3>'), Hb = Hb.replace(/^## (.+)$/gm, '<h2 class="DocsH2">$1</h2>'), Hb = Hb.replace(/^# (.+)$/gm, '<h1 class="DocsH1">$1</h1>'), Hb = Hb.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"), Hb = Hb.replace(/\[([^\]]+)\]\(([^)]+)\)/g, ((bb, wb, Mb) => Mb.startsWith("#") ? `<a class="DocsAnchor" data-id="${Mb}">${wb}</a>` : `<a href="${Mb}" target="_blank" rel="noopener noreferrer">${wb}</a>`)), Hb = Hb.replace(/^(\|.+\|)\n(\|[\s:\-|]+\|)\n((?:\|.+\|\s*\r?\n?)*)/gm, ((bb, wb, Mb, eb) => `<table class="DocsTable"><thead><tr>${wb.split("|").slice(1,-1).map((bb=>`<th>${bb.trim()}</th>`)).join("")}</tr></thead><tbody>${eb.trim().split("\n").map((bb=>`<tr>${bb.split("|").slice(1,-1).map((bb=>`<td>${bb.trim()}</td>`)).join("")}</tr>`)).join("")}</tbody></table>`)), Hb = Hb.replace(/(?:^[ \t]*([*-])[ \t]+.+(?:\n|$))+/gm, ((bb, wb) => function(bb, wb) {
              const Mb = "*" === wb,
                eb = [];
              for (const gb of bb.split("\n")) {
                const bb = gb.match(/^([ \t]*)(?:[*-])[ \t]+(.+)$/);
                bb && eb.push({
                  indent: bb[1].replace(/\t/g, "  ").length,
                  content: bb[2]
                })
              }
              let Hb = "";
              const pb = [],
                Vb = Mb ? "ol" : "ul";
              for (const {
                  indent: gb,
                  content: lb
                }
                of eb) {
                for (; pb.length > 0 && gb < pb[pb.length - 1];) Hb += `</${Vb}></li>`, pb.pop();
                (0 === pb.length || gb > pb[pb.length - 1]) && (pb.length > 0 && (Hb = Hb.replace(/<\/li>$/, "")), Hb += `<${Vb} class="DocsList">`, pb.push(gb)), Hb += `<li class="DocsListItem">${lb}</li>`
              }
              for (; pb.length > 0;) Hb += `</${Vb}>`, pb.pop(), pb.length > 0 && (Hb += "</li>");
              return Hb
            }(bb, wb))), Hb = Hb.replace(/\n{2,}/g, "\n<br/>\n");
            for (let Vb = 0; Vb < pb.length; Vb++) Hb = Hb.replace(`\0PLACEHOLDER_${Vb}\0`, pb[Vb]);
            if (eb) {
              const bb = Cb(eb).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                wb = new RegExp(bb, "gi");
              Hb = Hb.replace(/([^<>]+)(?=<|$)/g, (bb => bb.replace(wb, (bb => `<mark class="DocsHighlight">${bb}</mark>`))))
            }
            return Hb
          }(ob.id, ob.content, kb, nb ? Zb : void 0) : ""), [ob, kb, nb, Zb]);
        (0, eb.useEffect)((() => {
          const bb = Yb.current;
          if (!bb) return;
          const wb = bb => {
            var wb, Mb, eb, Hb, pb;
            const Vb = null === (wb = (Mb = bb.target).closest) || void 0 === wb ? void 0 : wb.call(Mb, ".DocsCopyButton");
            if (!Vb) return;
            bb.preventDefault(), bb.stopPropagation();
            const gb = null !== (eb = null === (Hb = Vb.parentElement) || void 0 === Hb || null === (pb = Hb.querySelector("code")) || void 0 === pb ? void 0 : pb.textContent) && void 0 !== eb ? eb : "";
            navigator.clipboard.writeText(gb.trimEnd()).then((() => {
              Vb.classList.add("Copied"), setTimeout((() => {
                Vb.classList.remove("Copied")
              }), 1500)
            })).catch((bb => {
              console.warn("Could not copy documentation code", bb)
            }))
          };
          return bb.addEventListener("click", wb, !0), () => {
            bb.removeEventListener("click", wb, !0)
          }
        }), []);
        const [ww, Mw] = (0, eb.useState)(0);
        (0, eb.useEffect)((() => {
          if (!nb || !Yb.current) return void Mw(0);
          const bb = Yb.current.querySelectorAll(".DocsHighlight").length;
          Mw(bb)
        }), [nb, bw]), (0, eb.useEffect)((() => {
          if (null === Jb || !Yb.current) return;
          Sb(null);
          const bb = Yb.current.querySelectorAll(".DocsHighlight");
          if (0 === bb.length) return;
          const wb = Math.min(Jb, bb.length - 1);
          Wb(wb), bb.forEach((bb => {
            bb.classList.remove("DocsHighlightActive")
          })), bb[wb].classList.add("DocsHighlightActive"), bb[wb].scrollIntoView({
            block: "center",
            behavior: "smooth"
          })
        }), [Jb, bw]);
        const ew = (0, eb.useCallback)((bb => {
            if (!Yb.current) return;
            const wb = Yb.current.querySelectorAll(".DocsHighlight");
            if (0 === wb.length) return;
            const Mb = (Ab + bb + wb.length) % wb.length;
            Wb(Mb), Sb(Mb)
          }), [Ab]),
          Hw = (0, eb.useCallback)((bb => {
            var wb;
            const Mb = null === (wb = zb[bb]) || void 0 === wb ? void 0 : wb.tabStep;
            Mb && Mb === ib && (0, hb.f)(Mb), bb !== Rb ? (vb(!0), Db(bb), Wb(0), Yb.current && (Yb.current.scrollTop = 0), nb && Sb(0)) : vb(!Nb)
          }), [nb, Rb, Nb, ib]),
          pw = (0, eb.useCallback)((bb => {
            var wb;
            const Mb = Array.from((null === (wb = Yb.current) || void 0 === wb ? void 0 : wb.querySelectorAll(".DocsH2, .DocsH3")) || []).find((wb => {
              var Mb;
              return null === (Mb = wb.textContent) || void 0 === Mb ? void 0 : Mb.includes(bb)
            }));
            Mb && Mb.scrollIntoView({
              block: "start",
              behavior: "smooth"
            })
          }), [Yb]),
          Vw = (0, eb.useCallback)((bb => {
            var wb, Mb;
            const eb = null !== (wb = null === (Mb = cb.current) || void 0 === Mb ? void 0 : Mb.clientWidth) && void 0 !== wb ? wb : window.innerWidth,
              Hb = Math.max(120, eb - 200);
            return Math.min(Math.max(bb, 120), Hb)
          }), []),
          gw = (0, eb.useCallback)((() => {
            var bb;
            qb.current && (qb.current = !1, null === (bb = cb.current) || void 0 === bb || bb.classList.remove("DocsSidebarResizing"))
          }), []),
          lw = (0, eb.useCallback)((bb => {
            var wb;
            bb.preventDefault(), qb.current = !0, null === (wb = cb.current) || void 0 === wb || wb.classList.add("DocsSidebarResizing")
          }), []);
        (0, eb.useEffect)((() => {
          const bb = cb.current,
            wb = bb => {
              if (!qb.current || !cb.current) return;
              const wb = cb.current.getBoundingClientRect().left;
              Gb(Vw(bb.clientX - wb))
            };
          return window.addEventListener("mousemove", wb), window.addEventListener("mouseup", gw), () => {
            window.removeEventListener("mousemove", wb), window.removeEventListener("mouseup", gw), null === bb || void 0 === bb || bb.classList.remove("DocsSidebarResizing")
          }
        }), [Vw, gw]);
        const Lw = (0, eb.useCallback)((bb => {
          if (bb) {
            const [wb, Mb] = bb.slice(1).split("-");
            Mb && (ab.current = {
              docId: wb,
              subsection: Mb
            }), wb && Hw(wb)
          }
        }), [Hw]);
        (0, eb.useEffect)((() => {
          const bb = ab.current;
          bb && Rb === bb.docId && (setTimeout((() => {
            pw(bb.subsection)
          }), 0), ab.current = null)
        })), (0, eb.useEffect)((() => {
          if (!Yb.current) return;
          Yb.current.querySelectorAll("a.DocsAnchor").forEach((bb => {
            bb.addEventListener("click", (wb => {
              wb.preventDefault(), Lw(bb.dataset.id)
            }))
          }))
        }), [Rb, Lw]);
        const Iw = Object.values(zb).find((bb => (null === bb || void 0 === bb ? void 0 : bb.pageStep) === ib));
        return (0, tb.jsx)(mb.i, {
          tutorial: "docsOverview",
          step: null !== (Xb = null === Iw || void 0 === Iw ? void 0 : Iw.pageStep) && void 0 !== Xb ? Xb : "docsPanel",
          text: Tb(null !== (xb = null === Iw || void 0 === Iw ? void 0 : Iw.pageText) && void 0 !== xb ? xb : "codeEditor:tutorialDocsPanel"),
          enabled: rb,
          placement: "left",
          onPrevious: Iw ? void 0 : Kb,
          children: (0, tb.jsxs)("div", {
            className: "DocsPanel",
            ref: cb,
            children: [(0, tb.jsxs)("div", {
              className: "DocsSidebar",
              style: {
                width: Qb,
                minWidth: Qb,
                maxWidth: Qb
              },
              children: [(0, tb.jsx)(pb.d, {
                className: "DocsSearch",
                placeholderText: "\ud83d\udd0e Search docs...",
                onValueChange: bb => {
                  fb(bb), Wb(0), Sb(0)
                }
              }, ub), (0, tb.jsx)("div", {
                className: "DocsNavList",
                children: nb ? yb.map((bb => (0, tb.jsxs)("div", {
                  className: gb()("DocsNavItem", "SearchResult", {
                    Active: bb.doc.id === (null === ob || void 0 === ob ? void 0 : ob.id)
                  }),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    Hw(bb.doc.id)
                  },
                  children: [(0, tb.jsxs)("div", {
                    className: "SearchResultTitle",
                    children: [bb.doc.title, (0, tb.jsx)("span", {
                      className: "SearchResultCount",
                      children: bb.matchCount
                    })]
                  }), (0, tb.jsx)("div", {
                    className: "SearchResultSnippet",
                    children: Fb(bb.snippet, Zb)
                  })]
                }, bb.doc.id))) : Hb.b.map((bb => {
                  const wb = (0, tb.jsxs)("div", {
                      className: gb()("DocsNavItem", {
                        Active: bb.id === (null === ob || void 0 === ob ? void 0 : ob.id)
                      }),
                      "data-pad-focusable": !0,
                      onClick: () => {
                        Hw(bb.id)
                      },
                      children: [(0, tb.jsx)("span", {
                        className: "DocsNavItemTitle",
                        children: bb.title
                      }), bb.subsections && bb.id === (null === ob || void 0 === ob ? void 0 : ob.id) && Nb && (0, tb.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, tb.jsx)(Bb.b, {
                          name: "angle-down"
                        })
                      }), bb.subsections && (bb.id !== (null === ob || void 0 === ob ? void 0 : ob.id) || !Nb) && (0, tb.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, tb.jsx)(Bb.b, {
                          name: "angle-up"
                        })
                      })]
                    }),
                    Mb = zb[bb.id];
                  return (0, tb.jsxs)(eb.Fragment, {
                    children: [Mb && (0, tb.jsx)(mb.i, {
                      tutorial: "docsOverview",
                      step: Mb.tabStep,
                      text: Tb(Mb.tabText),
                      enabled: rb,
                      placement: "left",
                      waitForClick: !0,
                      children: wb
                    }), !Mb && wb, Nb && bb.subsections && bb.id === (null === ob || void 0 === ob ? void 0 : ob.id) && bb.subsections.map((bb => (0, tb.jsx)("div", {
                      className: "DocsNavItem DocsSubsection",
                      "data-pad-focusable": !0,
                      onClick: () => {
                        pw(bb)
                      },
                      children: bb
                    }, bb)))]
                  }, bb.id)
                }))
              }), (0, tb.jsx)("div", {
                className: "DocsSidebarButtonContainer",
                children: (0, tb.jsx)(sb.d, {
                  tooltipInner: Tb("codeEditor:popOutDocsTooltip"),
                  placement: "top",
                  children: (0, tb.jsx)(lb.f, {
                    className: "DocsSidebarButton",
                    onClick: jb,
                    children: Tb("codeEditor:popOutDocs")
                  })
                })
              })]
            }), (0, tb.jsx)("div", {
              className: "DocsSidebarResizeHandle",
              onMouseDown: lw
            }), (0, tb.jsxs)("div", {
              className: "DocsContentWrapper",
              children: [nb && ww > 0 && (0, tb.jsxs)("div", {
                className: "DocsMatchNav",
                children: [(0, tb.jsxs)("span", {
                  className: "DocsMatchNavLabel",
                  children: [Ab + 1, " / ", ww]
                }), (0, tb.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    ew(-1)
                  },
                  children: "\u25b2"
                }), (0, tb.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    ew(1)
                  },
                  children: "\u25bc"
                })]
              }), (0, tb.jsx)("div", {
                className: "DocsContent",
                ref: Yb,
                dangerouslySetInnerHTML: {
                  __html: bw
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