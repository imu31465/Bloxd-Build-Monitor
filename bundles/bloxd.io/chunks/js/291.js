export const id = 291;
export const ids = [291];
export const modules = {
  40882: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      default: () => ub
    });
    var kb = sb(64),
      Wb = sb(4469),
      ab = sb(1664),
      Tb = sb(1033),
      Ub = sb.n(Tb),
      Ib = sb(1431),
      Hb = sb(1197),
      fb = sb(4441),
      Mb = sb(4451),
      Xb = sb(4456),
      nb = sb(1087);

    function mb(bb) {
      return bb.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    fb.d.registerLanguage("javascript", Mb.d), fb.d.registerLanguage("typescript", Xb.c);

    function lb(bb, cb) {
      const sb = mb(bb).replace(/"/g, "&quot;");
      return `<button type="button" class="DocsCopyButton ${cb}" title="${sb}" aria-label="${sb}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5"/><path d="M10.5 3.5V1.5H1.5v9h2"/></svg><svg class="DocsCopiedIcon" viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 8.5l3.5 3.5 7.5-7.5"/></svg></button>`
    }

    function Qb(bb, cb) {
      const sb = [],
        kb = bb.toLowerCase(),
        Wb = cb.toLowerCase();
      let ab = 0;
      for (; ab < bb.length;) {
        const Tb = kb.indexOf(Wb, ab);
        if (-1 === Tb) {
          sb.push(bb.slice(ab));
          break
        }
        Tb > ab && sb.push(bb.slice(ab, Tb)), sb.push((0, nb.jsx)("mark", {
          className: "DocsHighlight",
          children: bb.slice(Tb, Tb + cb.length)
        }, Tb)), ab = Tb + cb.length
      }
      return sb
    }
    var eb = sb(1039),
      Cb = sb(1341),
      Nb = sb(36452),
      Vb = sb(36455);
    const Lb = {
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
      ub = (0, kb.memo)((function(bb) {
        var cb, sb, Tb, Mb, Xb, ub, Yb;
        let {
          popOutDocs: hb,
          hideDocs: Jb,
          tutorialEnabled: gb
        } = bb;
        const [Bb, tb] = (0, kb.useState)(Wb.c[0].id), yb = (0, kb.useRef)(null), Pb = (0, kb.useRef)(null), [Db, Eb] = (0, kb.useState)(""), [ib, Ob] = (0, kb.useState)(0), [Gb, Kb] = (0, kb.useState)(null), [Zb, zb] = (0, kb.useState)(!1), [qb, db] = (0, kb.useState)(160), Ab = (0, kb.useRef)(!1), wb = (0, kb.useRef)(null), rb = (0, Nb.i)("docsOverview"), [ob, Sb] = (0, kb.useState)(0), Rb = Object.values(Lb).some((bb => (null === bb || void 0 === bb ? void 0 : bb.tabStep) === rb));
        (0, kb.useEffect)((() => {
          Rb && Db.length > 0 && (Eb(""), Sb((bb => bb + 1)))
        }), [Rb, Db]);
        const vb = Db.length > 0,
          Fb = (0, kb.useMemo)((() => function(bb) {
            if (!bb) return [];
            const cb = bb.toLowerCase(),
              sb = [];
            for (const kb of Wb.c) {
              const bb = kb.content.toLowerCase();
              let Wb = 0,
                ab = -1,
                Tb = 0,
                Ub = bb.indexOf(cb, Tb);
              for (; - 1 !== Ub;) - 1 === ab && (ab = Ub), Wb++, Tb = Ub + cb.length, Ub = bb.indexOf(cb, Tb);
              if (0 === Wb) continue;
              const Ib = Math.max(0, ab - 40),
                Hb = Math.min(kb.content.length, ab + cb.length + 40),
                fb = (Ib > 0 ? "..." : "") + kb.content.slice(Ib, Hb).replace(/\n/g, " ") + (Hb < kb.content.length ? "..." : "");
              sb.push({
                doc: kb,
                matchCount: Wb,
                snippet: fb
              })
            }
            return sb.sort(((bb, cb) => cb.matchCount - bb.matchCount)), sb
          }(Db)), [Db]),
          xb = vb ? null !== (cb = null !== (sb = null === (Tb = Fb.find((bb => bb.doc.id === Bb))) || void 0 === Tb ? void 0 : Tb.doc) && void 0 !== sb ? sb : null === (Mb = Fb[0]) || void 0 === Mb ? void 0 : Mb.doc) && void 0 !== cb ? cb : null : null !== (Xb = Wb.c.find((bb => bb.id === Bb))) && void 0 !== Xb ? Xb : Wb.c[0],
          {
            t: jb
          } = (0, Hb.E)(),
          pb = jb("codeEditor:copySnippet"),
          bc = (0, kb.useMemo)((() => xb ? function(bb, cb, sb, kb) {
            let Wb = cb;
            Wb = Wb.replace(/\r\n/g, "\n");
            const ab = [];
            Wb = Wb.replace(/```(\w*)\n([\s\S]*?)```/g, ((bb, cb, kb) => {
              const Wb = ab.length;
              let Tb = mb(kb);
              try {
                Tb = fb.d.highlight(kb.trimEnd(), {
                  language: cb
                }).value
              } catch (Ub) {
                console.warn("Could not highlight documentation code block", Ub)
              }
              return ab.push(`<div class="DocsCodeBlockRow"><pre class="DocsCodeBlock" data-lang="${cb}"><code>${Tb}</code></pre>${lb(sb,"DocsCopyBlock")}</div>`), `\0PLACEHOLDER_${Wb}\0`
            })), Wb = Wb.replace(/(`{1,2})([^\n]+?)\1(?!`)/g, ((cb, kb, Wb) => {
              const Tb = ab.length,
                Ub = 2 === kb.length ? Wb.replace(/^ (.*) $/, "$1") : Wb;
              let Ib = mb(Ub);
              try {
                "apiReference" !== bb && "callbacks" !== bb || (Ib = fb.d.highlight(Ub.trimEnd().replaceAll("\\|", "|"), {
                  language: "typescript"
                }).value)
              } catch (Hb) {
                console.warn("Could not highlight documentation snippet", Hb)
              }
              return ab.push(`<span class="DocsInlineCodeRow"><code class="DocsInlineCode">${Ib}</code>${lb(sb,"DocsCopyInline")}</span>`), `\0PLACEHOLDER_${Tb}\0`
            })), Wb = mb(Wb), Wb = Wb.replace(/^#### (.+)$/gm, '<h4 class="DocsH4">$1</h4>'), Wb = Wb.replace(/^### (.+)$/gm, '<h3 class="DocsH3">$1</h3>'), Wb = Wb.replace(/^## (.+)$/gm, '<h2 class="DocsH2">$1</h2>'), Wb = Wb.replace(/^# (.+)$/gm, '<h1 class="DocsH1">$1</h1>'), Wb = Wb.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"), Wb = Wb.replace(/\[([^\]]+)\]\(([^)]+)\)/g, ((bb, cb, sb) => sb.startsWith("#") ? `<a class="DocsAnchor" data-id="${sb}">${cb}</a>` : `<a href="${sb}" target="_blank" rel="noopener noreferrer">${cb}</a>`)), Wb = Wb.replace(/^(\|.+\|)\n(\|[\s:\-|]+\|)\n((?:\|.+\|\s*\r?\n?)*)/gm, ((bb, cb, sb, kb) => `<table class="DocsTable"><thead><tr>${cb.split("|").slice(1,-1).map((bb=>`<th>${bb.trim()}</th>`)).join("")}</tr></thead><tbody>${kb.trim().split("\n").map((bb=>`<tr>${bb.split("|").slice(1,-1).map((bb=>`<td>${bb.trim()}</td>`)).join("")}</tr>`)).join("")}</tbody></table>`)), Wb = Wb.replace(/(?:^[ \t]*([*-])[ \t]+.+(?:\n|$))+/gm, ((bb, cb) => function(bb, cb) {
              const sb = "*" === cb,
                kb = [];
              for (const Ub of bb.split("\n")) {
                const bb = Ub.match(/^([ \t]*)(?:[*-])[ \t]+(.+)$/);
                bb && kb.push({
                  indent: bb[1].replace(/\t/g, "  ").length,
                  content: bb[2]
                })
              }
              let Wb = "";
              const ab = [],
                Tb = sb ? "ol" : "ul";
              for (const {
                  indent: Ub,
                  content: Ib
                }
                of kb) {
                for (; ab.length > 0 && Ub < ab[ab.length - 1];) Wb += `</${Tb}></li>`, ab.pop();
                (0 === ab.length || Ub > ab[ab.length - 1]) && (ab.length > 0 && (Wb = Wb.replace(/<\/li>$/, "")), Wb += `<${Tb} class="DocsList">`, ab.push(Ub)), Wb += `<li class="DocsListItem">${Ib}</li>`
              }
              for (; ab.length > 0;) Wb += `</${Tb}>`, ab.pop(), ab.length > 0 && (Wb += "</li>");
              return Wb
            }(bb, cb))), Wb = Wb.replace(/\n{2,}/g, "\n<br/>\n");
            for (let Tb = 0; Tb < ab.length; Tb++) Wb = Wb.replace(`\0PLACEHOLDER_${Tb}\0`, ab[Tb]);
            if (kb) {
              const bb = mb(kb).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                cb = new RegExp(bb, "gi");
              Wb = Wb.replace(/([^<>]+)(?=<|$)/g, (bb => bb.replace(cb, (bb => `<mark class="DocsHighlight">${bb}</mark>`))))
            }
            return Wb
          }(xb.id, xb.content, pb, vb ? Db : void 0) : ""), [xb, pb, vb, Db]);
        (0, kb.useEffect)((() => {
          const bb = Pb.current;
          if (!bb) return;
          const cb = bb => {
            var cb, sb, kb, Wb, ab;
            const Tb = null === (cb = (sb = bb.target).closest) || void 0 === cb ? void 0 : cb.call(sb, ".DocsCopyButton");
            if (!Tb) return;
            bb.preventDefault(), bb.stopPropagation();
            const Ub = null !== (kb = null === (Wb = Tb.parentElement) || void 0 === Wb || null === (ab = Wb.querySelector("code")) || void 0 === ab ? void 0 : ab.textContent) && void 0 !== kb ? kb : "";
            navigator.clipboard.writeText(Ub.trimEnd()).then((() => {
              Tb.classList.add("Copied"), setTimeout((() => {
                Tb.classList.remove("Copied")
              }), 1500)
            })).catch((bb => {
              console.warn("Could not copy documentation code", bb)
            }))
          };
          return bb.addEventListener("click", cb, !0), () => {
            bb.removeEventListener("click", cb, !0)
          }
        }), []);
        const [cc, sc] = (0, kb.useState)(0);
        (0, kb.useEffect)((() => {
          if (!vb || !Pb.current) return void sc(0);
          const bb = Pb.current.querySelectorAll(".DocsHighlight").length;
          sc(bb)
        }), [vb, bc]), (0, kb.useEffect)((() => {
          if (null === Gb || !Pb.current) return;
          Kb(null);
          const bb = Pb.current.querySelectorAll(".DocsHighlight");
          if (0 === bb.length) return;
          const cb = Math.min(Gb, bb.length - 1);
          Ob(cb), bb.forEach((bb => {
            bb.classList.remove("DocsHighlightActive")
          })), bb[cb].classList.add("DocsHighlightActive"), bb[cb].scrollIntoView({
            block: "center",
            behavior: "smooth"
          })
        }), [Gb, bc]);
        const kc = (0, kb.useCallback)((bb => {
            if (!Pb.current) return;
            const cb = Pb.current.querySelectorAll(".DocsHighlight");
            if (0 === cb.length) return;
            const sb = (ib + bb + cb.length) % cb.length;
            Ob(sb), Kb(sb)
          }), [ib]),
          Wc = (0, kb.useCallback)((bb => {
            var cb;
            const sb = null === (cb = Lb[bb]) || void 0 === cb ? void 0 : cb.tabStep;
            sb && sb === rb && (0, Vb.e)(sb), bb !== Bb ? (zb(!0), tb(bb), Ob(0), Pb.current && (Pb.current.scrollTop = 0), vb && Kb(0)) : zb(!Zb)
          }), [vb, Bb, Zb, rb]),
          ac = (0, kb.useCallback)((bb => {
            var cb;
            const sb = Array.from((null === (cb = Pb.current) || void 0 === cb ? void 0 : cb.querySelectorAll(".DocsH2, .DocsH3")) || []).find((cb => {
              var sb;
              return null === (sb = cb.textContent) || void 0 === sb ? void 0 : sb.includes(bb)
            }));
            sb && sb.scrollIntoView({
              block: "start",
              behavior: "smooth"
            })
          }), [Pb]),
          Tc = (0, kb.useCallback)((bb => {
            var cb, sb;
            const kb = null !== (cb = null === (sb = yb.current) || void 0 === sb ? void 0 : sb.clientWidth) && void 0 !== cb ? cb : window.innerWidth,
              Wb = Math.max(120, kb - 200);
            return Math.min(Math.max(bb, 120), Wb)
          }), []),
          Uc = (0, kb.useCallback)((() => {
            var bb;
            Ab.current && (Ab.current = !1, null === (bb = yb.current) || void 0 === bb || bb.classList.remove("DocsSidebarResizing"))
          }), []),
          Ic = (0, kb.useCallback)((bb => {
            var cb;
            bb.preventDefault(), Ab.current = !0, null === (cb = yb.current) || void 0 === cb || cb.classList.add("DocsSidebarResizing")
          }), []);
        (0, kb.useEffect)((() => {
          const bb = yb.current,
            cb = bb => {
              if (!Ab.current || !yb.current) return;
              const cb = yb.current.getBoundingClientRect().left;
              db(Tc(bb.clientX - cb))
            };
          return window.addEventListener("mousemove", cb), window.addEventListener("mouseup", Uc), () => {
            window.removeEventListener("mousemove", cb), window.removeEventListener("mouseup", Uc), null === bb || void 0 === bb || bb.classList.remove("DocsSidebarResizing")
          }
        }), [Tc, Uc]);
        const Hc = (0, kb.useCallback)((bb => {
          if (bb) {
            const [cb, sb] = bb.slice(1).split("-");
            sb && (wb.current = {
              docId: cb,
              subsection: sb
            }), cb && Wc(cb)
          }
        }), [Wc]);
        (0, kb.useEffect)((() => {
          const bb = wb.current;
          bb && Bb === bb.docId && (setTimeout((() => {
            ac(bb.subsection)
          }), 0), wb.current = null)
        })), (0, kb.useEffect)((() => {
          if (!Pb.current) return;
          Pb.current.querySelectorAll("a.DocsAnchor").forEach((bb => {
            bb.addEventListener("click", (cb => {
              cb.preventDefault(), Hc(bb.dataset.id)
            }))
          }))
        }), [Bb, Hc]);
        const fc = Object.values(Lb).find((bb => (null === bb || void 0 === bb ? void 0 : bb.pageStep) === rb));
        return (0, nb.jsx)(Nb.g, {
          tutorial: "docsOverview",
          step: null !== (ub = null === fc || void 0 === fc ? void 0 : fc.pageStep) && void 0 !== ub ? ub : "docsPanel",
          text: jb(null !== (Yb = null === fc || void 0 === fc ? void 0 : fc.pageText) && void 0 !== Yb ? Yb : "codeEditor:tutorialDocsPanel"),
          enabled: gb,
          placement: "left",
          onPrevious: fc ? void 0 : Jb,
          children: (0, nb.jsxs)("div", {
            className: "DocsPanel",
            ref: yb,
            children: [(0, nb.jsxs)("div", {
              className: "DocsSidebar",
              style: {
                width: qb,
                minWidth: qb,
                maxWidth: qb
              },
              children: [(0, nb.jsx)(ab.c, {
                className: "DocsSearch",
                placeholderText: "\ud83d\udd0e Search docs...",
                onValueChange: bb => {
                  Eb(bb), Ob(0), Kb(0)
                }
              }, ob), (0, nb.jsx)("div", {
                className: "DocsNavList",
                children: vb ? Fb.map((bb => (0, nb.jsxs)("div", {
                  className: Ub()("DocsNavItem", "SearchResult", {
                    Active: bb.doc.id === (null === xb || void 0 === xb ? void 0 : xb.id)
                  }),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    Wc(bb.doc.id)
                  },
                  children: [(0, nb.jsxs)("div", {
                    className: "SearchResultTitle",
                    children: [bb.doc.title, (0, nb.jsx)("span", {
                      className: "SearchResultCount",
                      children: bb.matchCount
                    })]
                  }), (0, nb.jsx)("div", {
                    className: "SearchResultSnippet",
                    children: Qb(bb.snippet, Db)
                  })]
                }, bb.doc.id))) : Wb.c.map((bb => {
                  const cb = (0, nb.jsxs)("div", {
                      className: Ub()("DocsNavItem", {
                        Active: bb.id === (null === xb || void 0 === xb ? void 0 : xb.id)
                      }),
                      "data-pad-focusable": !0,
                      onClick: () => {
                        Wc(bb.id)
                      },
                      children: [(0, nb.jsx)("span", {
                        className: "DocsNavItemTitle",
                        children: bb.title
                      }), bb.subsections && bb.id === (null === xb || void 0 === xb ? void 0 : xb.id) && Zb && (0, nb.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, nb.jsx)(eb.b, {
                          name: "angle-down"
                        })
                      }), bb.subsections && (bb.id !== (null === xb || void 0 === xb ? void 0 : xb.id) || !Zb) && (0, nb.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, nb.jsx)(eb.b, {
                          name: "angle-up"
                        })
                      })]
                    }),
                    sb = Lb[bb.id];
                  return (0, nb.jsxs)(kb.Fragment, {
                    children: [sb && (0, nb.jsx)(Nb.g, {
                      tutorial: "docsOverview",
                      step: sb.tabStep,
                      text: jb(sb.tabText),
                      enabled: gb,
                      placement: "left",
                      waitForClick: !0,
                      children: cb
                    }), !sb && cb, Zb && bb.subsections && bb.id === (null === xb || void 0 === xb ? void 0 : xb.id) && bb.subsections.map((bb => (0, nb.jsx)("div", {
                      className: "DocsNavItem DocsSubsection",
                      "data-pad-focusable": !0,
                      onClick: () => {
                        ac(bb)
                      },
                      children: bb
                    }, bb)))]
                  }, bb.id)
                }))
              }), (0, nb.jsx)("div", {
                className: "DocsSidebarButtonContainer",
                children: (0, nb.jsx)(Cb.f, {
                  tooltipInner: jb("codeEditor:popOutDocsTooltip"),
                  placement: "top",
                  children: (0, nb.jsx)(Ib.d, {
                    className: "DocsSidebarButton",
                    onClick: hb,
                    children: jb("codeEditor:popOutDocs")
                  })
                })
              })]
            }), (0, nb.jsx)("div", {
              className: "DocsSidebarResizeHandle",
              onMouseDown: Ic
            }), (0, nb.jsxs)("div", {
              className: "DocsContentWrapper",
              children: [vb && cc > 0 && (0, nb.jsxs)("div", {
                className: "DocsMatchNav",
                children: [(0, nb.jsxs)("span", {
                  className: "DocsMatchNavLabel",
                  children: [ib + 1, " / ", cc]
                }), (0, nb.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    kc(-1)
                  },
                  children: "\u25b2"
                }), (0, nb.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    kc(1)
                  },
                  children: "\u25bc"
                })]
              }), (0, nb.jsx)("div", {
                className: "DocsContent",
                ref: Pb,
                dangerouslySetInnerHTML: {
                  __html: bc
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