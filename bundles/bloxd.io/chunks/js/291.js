export const id = 291;
export const ids = [291];
export const modules = {
  40588: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      default: () => ib
    });
    var Ab = Ub(52),
      Mb = Ub(4428),
      Tb = Ub(1589),
      Eb = Ub(984),
      Yb = Ub.n(Eb),
      Bb = Ub(1352),
      eb = Ub(1134),
      vb = Ub(4399),
      Lb = Ub(4405),
      Pb = Ub(4413),
      Xb = Ub(1023);

    function jb(bb) {
      return bb.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    vb.d.registerLanguage("javascript", Lb.c), vb.d.registerLanguage("typescript", Pb.d);

    function Rb(bb, ab) {
      const Ub = jb(bb).replace(/"/g, "&quot;");
      return `<button type="button" class="DocsCopyButton ${ab}" title="${Ub}" aria-label="${Ub}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5"/><path d="M10.5 3.5V1.5H1.5v9h2"/></svg><svg class="DocsCopiedIcon" viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 8.5l3.5 3.5 7.5-7.5"/></svg></button>`
    }

    function kb(bb, ab) {
      const Ub = [],
        Ab = bb.toLowerCase(),
        Mb = ab.toLowerCase();
      let Tb = 0;
      for (; Tb < bb.length;) {
        const Eb = Ab.indexOf(Mb, Tb);
        if (-1 === Eb) {
          Ub.push(bb.slice(Tb));
          break
        }
        Eb > Tb && Ub.push(bb.slice(Tb, Eb)), Ub.push((0, Xb.jsx)("mark", {
          className: "DocsHighlight",
          children: bb.slice(Eb, Eb + ab.length)
        }, Eb)), Tb = Eb + ab.length
      }
      return Ub
    }
    var yb = Ub(990),
      Zb = Ub(1268),
      Db = Ub(36209),
      zb = Ub(36214);
    const xb = {
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
      ib = (0, Ab.memo)((function(bb) {
        var ab, Ub, Eb, Lb, Pb, ib, fb;
        let {
          popOutDocs: mb,
          hideDocs: pb,
          tutorialEnabled: Nb
        } = bb;
        const [Wb, Hb] = (0, Ab.useState)(Mb.d[0].id), Ib = (0, Ab.useRef)(null), db = (0, Ab.useRef)(null), [Fb, hb] = (0, Ab.useState)(""), [Gb, Qb] = (0, Ab.useState)(0), [qb, ub] = (0, Ab.useState)(null), [rb, Kb] = (0, Ab.useState)(!1), [ob, lb] = (0, Ab.useState)(160), tb = (0, Ab.useRef)(!1), wb = (0, Ab.useRef)(null), sb = (0, Db.k)("docsOverview"), [gb, Cb] = (0, Ab.useState)(0), Vb = Object.values(xb).some((bb => (null === bb || void 0 === bb ? void 0 : bb.tabStep) === sb));
        (0, Ab.useEffect)((() => {
          Vb && Fb.length > 0 && (hb(""), Cb((bb => bb + 1)))
        }), [Vb, Fb]);
        const Ob = Fb.length > 0,
          cb = (0, Ab.useMemo)((() => function(bb) {
            if (!bb) return [];
            const ab = bb.toLowerCase(),
              Ub = [];
            for (const Ab of Mb.d) {
              const bb = Ab.content.toLowerCase();
              let Mb = 0,
                Tb = -1,
                Eb = 0,
                Yb = bb.indexOf(ab, Eb);
              for (; - 1 !== Yb;) - 1 === Tb && (Tb = Yb), Mb++, Eb = Yb + ab.length, Yb = bb.indexOf(ab, Eb);
              if (0 === Mb) continue;
              const Bb = Math.max(0, Tb - 40),
                eb = Math.min(Ab.content.length, Tb + ab.length + 40),
                vb = (Bb > 0 ? "..." : "") + Ab.content.slice(Bb, eb).replace(/\n/g, " ") + (eb < Ab.content.length ? "..." : "");
              Ub.push({
                doc: Ab,
                matchCount: Mb,
                snippet: vb
              })
            }
            return Ub.sort(((bb, ab) => ab.matchCount - bb.matchCount)), Ub
          }(Fb)), [Fb]),
          Jb = Ob ? null !== (ab = null !== (Ub = null === (Eb = cb.find((bb => bb.doc.id === Wb))) || void 0 === Eb ? void 0 : Eb.doc) && void 0 !== Ub ? Ub : null === (Lb = cb[0]) || void 0 === Lb ? void 0 : Lb.doc) && void 0 !== ab ? ab : null : null !== (Pb = Mb.d.find((bb => bb.id === Wb))) && void 0 !== Pb ? Pb : Mb.d[0],
          {
            t: nb
          } = (0, eb.A)(),
          Sb = nb("codeEditor:copySnippet"),
          ba = (0, Ab.useMemo)((() => Jb ? function(bb, ab, Ub, Ab) {
            let Mb = ab;
            Mb = Mb.replace(/\r\n/g, "\n");
            const Tb = [];
            Mb = Mb.replace(/```(\w*)\n([\s\S]*?)```/g, ((bb, ab, Ab) => {
              const Mb = Tb.length;
              let Eb = jb(Ab);
              try {
                Eb = vb.d.highlight(Ab.trimEnd(), {
                  language: ab
                }).value
              } catch (Yb) {
                console.warn("Could not highlight documentation code block", Yb)
              }
              return Tb.push(`<div class="DocsCodeBlockRow"><pre class="DocsCodeBlock" data-lang="${ab}"><code>${Eb}</code></pre>${Rb(Ub,"DocsCopyBlock")}</div>`), `\0PLACEHOLDER_${Mb}\0`
            })), Mb = Mb.replace(/(`{1,2})([^\n]+?)\1(?!`)/g, ((ab, Ab, Mb) => {
              const Eb = Tb.length,
                Yb = 2 === Ab.length ? Mb.replace(/^ (.*) $/, "$1") : Mb;
              let Bb = jb(Yb);
              try {
                "apiReference" !== bb && "callbacks" !== bb || (Bb = vb.d.highlight(Yb.trimEnd().replaceAll("\\|", "|"), {
                  language: "typescript"
                }).value)
              } catch (eb) {
                console.warn("Could not highlight documentation snippet", eb)
              }
              return Tb.push(`<span class="DocsInlineCodeRow"><code class="DocsInlineCode">${Bb}</code>${Rb(Ub,"DocsCopyInline")}</span>`), `\0PLACEHOLDER_${Eb}\0`
            })), Mb = jb(Mb), Mb = Mb.replace(/^#### (.+)$/gm, '<h4 class="DocsH4">$1</h4>'), Mb = Mb.replace(/^### (.+)$/gm, '<h3 class="DocsH3">$1</h3>'), Mb = Mb.replace(/^## (.+)$/gm, '<h2 class="DocsH2">$1</h2>'), Mb = Mb.replace(/^# (.+)$/gm, '<h1 class="DocsH1">$1</h1>'), Mb = Mb.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"), Mb = Mb.replace(/\[([^\]]+)\]\(([^)]+)\)/g, ((bb, ab, Ub) => Ub.startsWith("#") ? `<a class="DocsAnchor" data-id="${Ub}">${ab}</a>` : `<a href="${Ub}" target="_blank" rel="noopener noreferrer">${ab}</a>`)), Mb = Mb.replace(/^(\|.+\|)\n(\|[\s:\-|]+\|)\n((?:\|.+\|\s*\r?\n?)*)/gm, ((bb, ab, Ub, Ab) => `<table class="DocsTable"><thead><tr>${ab.split("|").slice(1,-1).map((bb=>`<th>${bb.trim()}</th>`)).join("")}</tr></thead><tbody>${Ab.trim().split("\n").map((bb=>`<tr>${bb.split("|").slice(1,-1).map((bb=>`<td>${bb.trim()}</td>`)).join("")}</tr>`)).join("")}</tbody></table>`)), Mb = Mb.replace(/(?:^[ \t]*([*-])[ \t]+.+(?:\n|$))+/gm, ((bb, ab) => function(bb, ab) {
              const Ub = "*" === ab,
                Ab = [];
              for (const Yb of bb.split("\n")) {
                const bb = Yb.match(/^([ \t]*)(?:[*-])[ \t]+(.+)$/);
                bb && Ab.push({
                  indent: bb[1].replace(/\t/g, "  ").length,
                  content: bb[2]
                })
              }
              let Mb = "";
              const Tb = [],
                Eb = Ub ? "ol" : "ul";
              for (const {
                  indent: Yb,
                  content: Bb
                }
                of Ab) {
                for (; Tb.length > 0 && Yb < Tb[Tb.length - 1];) Mb += `</${Eb}></li>`, Tb.pop();
                (0 === Tb.length || Yb > Tb[Tb.length - 1]) && (Tb.length > 0 && (Mb = Mb.replace(/<\/li>$/, "")), Mb += `<${Eb} class="DocsList">`, Tb.push(Yb)), Mb += `<li class="DocsListItem">${Bb}</li>`
              }
              for (; Tb.length > 0;) Mb += `</${Eb}>`, Tb.pop(), Tb.length > 0 && (Mb += "</li>");
              return Mb
            }(bb, ab))), Mb = Mb.replace(/\n{2,}/g, "\n<br/>\n");
            for (let Eb = 0; Eb < Tb.length; Eb++) Mb = Mb.replace(`\0PLACEHOLDER_${Eb}\0`, Tb[Eb]);
            if (Ab) {
              const bb = jb(Ab).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                ab = new RegExp(bb, "gi");
              Mb = Mb.replace(/([^<>]+)(?=<|$)/g, (bb => bb.replace(ab, (bb => `<mark class="DocsHighlight">${bb}</mark>`))))
            }
            return Mb
          }(Jb.id, Jb.content, Sb, Ob ? Fb : void 0) : ""), [Jb, Sb, Ob, Fb]);
        (0, Ab.useEffect)((() => {
          const bb = db.current;
          if (!bb) return;
          const ab = bb => {
            var ab, Ub, Ab, Mb, Tb;
            const Eb = null === (ab = (Ub = bb.target).closest) || void 0 === ab ? void 0 : ab.call(Ub, ".DocsCopyButton");
            if (!Eb) return;
            bb.preventDefault(), bb.stopPropagation();
            const Yb = null !== (Ab = null === (Mb = Eb.parentElement) || void 0 === Mb || null === (Tb = Mb.querySelector("code")) || void 0 === Tb ? void 0 : Tb.textContent) && void 0 !== Ab ? Ab : "";
            navigator.clipboard.writeText(Yb.trimEnd()).then((() => {
              Eb.classList.add("Copied"), setTimeout((() => {
                Eb.classList.remove("Copied")
              }), 1500)
            })).catch((bb => {
              console.warn("Could not copy documentation code", bb)
            }))
          };
          return bb.addEventListener("click", ab, !0), () => {
            bb.removeEventListener("click", ab, !0)
          }
        }), []);
        const [aa, Ua] = (0, Ab.useState)(0);
        (0, Ab.useEffect)((() => {
          if (!Ob || !db.current) return void Ua(0);
          const bb = db.current.querySelectorAll(".DocsHighlight").length;
          Ua(bb)
        }), [Ob, ba]), (0, Ab.useEffect)((() => {
          if (null === qb || !db.current) return;
          ub(null);
          const bb = db.current.querySelectorAll(".DocsHighlight");
          if (0 === bb.length) return;
          const ab = Math.min(qb, bb.length - 1);
          Qb(ab), bb.forEach((bb => {
            bb.classList.remove("DocsHighlightActive")
          })), bb[ab].classList.add("DocsHighlightActive"), bb[ab].scrollIntoView({
            block: "center",
            behavior: "smooth"
          })
        }), [qb, ba]);
        const Aa = (0, Ab.useCallback)((bb => {
            if (!db.current) return;
            const ab = db.current.querySelectorAll(".DocsHighlight");
            if (0 === ab.length) return;
            const Ub = (Gb + bb + ab.length) % ab.length;
            Qb(Ub), ub(Ub)
          }), [Gb]),
          Ma = (0, Ab.useCallback)((bb => {
            var ab;
            const Ub = null === (ab = xb[bb]) || void 0 === ab ? void 0 : ab.tabStep;
            Ub && Ub === sb && (0, zb.e)(Ub), bb !== Wb ? (Kb(!0), Hb(bb), Qb(0), db.current && (db.current.scrollTop = 0), Ob && ub(0)) : Kb(!rb)
          }), [Ob, Wb, rb, sb]),
          Ta = (0, Ab.useCallback)((bb => {
            var ab;
            const Ub = Array.from((null === (ab = db.current) || void 0 === ab ? void 0 : ab.querySelectorAll(".DocsH2, .DocsH3")) || []).find((ab => {
              var Ub;
              return null === (Ub = ab.textContent) || void 0 === Ub ? void 0 : Ub.includes(bb)
            }));
            Ub && Ub.scrollIntoView({
              block: "start",
              behavior: "smooth"
            })
          }), [db]),
          Ea = (0, Ab.useCallback)((bb => {
            var ab, Ub;
            const Ab = null !== (ab = null === (Ub = Ib.current) || void 0 === Ub ? void 0 : Ub.clientWidth) && void 0 !== ab ? ab : window.innerWidth,
              Mb = Math.max(120, Ab - 200);
            return Math.min(Math.max(bb, 120), Mb)
          }), []),
          Ya = (0, Ab.useCallback)((() => {
            var bb;
            tb.current && (tb.current = !1, null === (bb = Ib.current) || void 0 === bb || bb.classList.remove("DocsSidebarResizing"))
          }), []),
          Ba = (0, Ab.useCallback)((bb => {
            var ab;
            bb.preventDefault(), tb.current = !0, null === (ab = Ib.current) || void 0 === ab || ab.classList.add("DocsSidebarResizing")
          }), []);
        (0, Ab.useEffect)((() => {
          const bb = Ib.current,
            ab = bb => {
              if (!tb.current || !Ib.current) return;
              const ab = Ib.current.getBoundingClientRect().left;
              lb(Ea(bb.clientX - ab))
            };
          return window.addEventListener("mousemove", ab), window.addEventListener("mouseup", Ya), () => {
            window.removeEventListener("mousemove", ab), window.removeEventListener("mouseup", Ya), null === bb || void 0 === bb || bb.classList.remove("DocsSidebarResizing")
          }
        }), [Ea, Ya]);
        const ea = (0, Ab.useCallback)((bb => {
          if (bb) {
            const [ab, Ub] = bb.slice(1).split("-");
            Ub && (wb.current = {
              docId: ab,
              subsection: Ub
            }), ab && Ma(ab)
          }
        }), [Ma]);
        (0, Ab.useEffect)((() => {
          const bb = wb.current;
          bb && Wb === bb.docId && (setTimeout((() => {
            Ta(bb.subsection)
          }), 0), wb.current = null)
        })), (0, Ab.useEffect)((() => {
          if (!db.current) return;
          db.current.querySelectorAll("a.DocsAnchor").forEach((bb => {
            bb.addEventListener("click", (ab => {
              ab.preventDefault(), ea(bb.dataset.id)
            }))
          }))
        }), [Wb, ea]);
        const va = Object.values(xb).find((bb => (null === bb || void 0 === bb ? void 0 : bb.pageStep) === sb));
        return (0, Xb.jsx)(Db.j, {
          tutorial: "docsOverview",
          step: null !== (ib = null === va || void 0 === va ? void 0 : va.pageStep) && void 0 !== ib ? ib : "docsPanel",
          text: nb(null !== (fb = null === va || void 0 === va ? void 0 : va.pageText) && void 0 !== fb ? fb : "codeEditor:tutorialDocsPanel"),
          enabled: Nb,
          placement: "left",
          onPrevious: va ? void 0 : pb,
          children: (0, Xb.jsxs)("div", {
            className: "DocsPanel",
            ref: Ib,
            children: [(0, Xb.jsxs)("div", {
              className: "DocsSidebar",
              style: {
                width: ob,
                minWidth: ob,
                maxWidth: ob
              },
              children: [(0, Xb.jsx)(Tb.c, {
                className: "DocsSearch",
                placeholderText: "\ud83d\udd0e Search docs...",
                onValueChange: bb => {
                  hb(bb), Qb(0), ub(0)
                }
              }, gb), (0, Xb.jsx)("div", {
                className: "DocsNavList",
                children: Ob ? cb.map((bb => (0, Xb.jsxs)("div", {
                  className: Yb()("DocsNavItem", "SearchResult", {
                    Active: bb.doc.id === (null === Jb || void 0 === Jb ? void 0 : Jb.id)
                  }),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    Ma(bb.doc.id)
                  },
                  children: [(0, Xb.jsxs)("div", {
                    className: "SearchResultTitle",
                    children: [bb.doc.title, (0, Xb.jsx)("span", {
                      className: "SearchResultCount",
                      children: bb.matchCount
                    })]
                  }), (0, Xb.jsx)("div", {
                    className: "SearchResultSnippet",
                    children: kb(bb.snippet, Fb)
                  })]
                }, bb.doc.id))) : Mb.d.map((bb => {
                  const ab = (0, Xb.jsxs)("div", {
                      className: Yb()("DocsNavItem", {
                        Active: bb.id === (null === Jb || void 0 === Jb ? void 0 : Jb.id)
                      }),
                      "data-pad-focusable": !0,
                      onClick: () => {
                        Ma(bb.id)
                      },
                      children: [(0, Xb.jsx)("span", {
                        className: "DocsNavItemTitle",
                        children: bb.title
                      }), bb.subsections && bb.id === (null === Jb || void 0 === Jb ? void 0 : Jb.id) && rb && (0, Xb.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, Xb.jsx)(yb.e, {
                          name: "angle-down"
                        })
                      }), bb.subsections && (bb.id !== (null === Jb || void 0 === Jb ? void 0 : Jb.id) || !rb) && (0, Xb.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, Xb.jsx)(yb.e, {
                          name: "angle-up"
                        })
                      })]
                    }),
                    Ub = xb[bb.id];
                  return (0, Xb.jsxs)(Ab.Fragment, {
                    children: [Ub && (0, Xb.jsx)(Db.j, {
                      tutorial: "docsOverview",
                      step: Ub.tabStep,
                      text: nb(Ub.tabText),
                      enabled: Nb,
                      placement: "left",
                      waitForClick: !0,
                      children: ab
                    }), !Ub && ab, rb && bb.subsections && bb.id === (null === Jb || void 0 === Jb ? void 0 : Jb.id) && bb.subsections.map((bb => (0, Xb.jsx)("div", {
                      className: "DocsNavItem DocsSubsection",
                      "data-pad-focusable": !0,
                      onClick: () => {
                        Ta(bb)
                      },
                      children: bb
                    }, bb)))]
                  }, bb.id)
                }))
              }), (0, Xb.jsx)("div", {
                className: "DocsSidebarButtonContainer",
                children: (0, Xb.jsx)(Zb.g, {
                  tooltipInner: nb("codeEditor:popOutDocsTooltip"),
                  placement: "top",
                  children: (0, Xb.jsx)(Bb.g, {
                    className: "DocsSidebarButton",
                    onClick: mb,
                    children: nb("codeEditor:popOutDocs")
                  })
                })
              })]
            }), (0, Xb.jsx)("div", {
              className: "DocsSidebarResizeHandle",
              onMouseDown: Ba
            }), (0, Xb.jsxs)("div", {
              className: "DocsContentWrapper",
              children: [Ob && aa > 0 && (0, Xb.jsxs)("div", {
                className: "DocsMatchNav",
                children: [(0, Xb.jsxs)("span", {
                  className: "DocsMatchNavLabel",
                  children: [Gb + 1, " / ", aa]
                }), (0, Xb.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    Aa(-1)
                  },
                  children: "\u25b2"
                }), (0, Xb.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    Aa(1)
                  },
                  children: "\u25bc"
                })]
              }), (0, Xb.jsx)("div", {
                className: "DocsContent",
                ref: db,
                dangerouslySetInnerHTML: {
                  __html: ba
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