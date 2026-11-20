export const id = 292;
export const ids = [292];
export const modules = {
  40757: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      default: () => fv
    });
    var hv = Pv(52),
      Sv = Pv(4493),
      ev = Pv(1647),
      gv = Pv(1035),
      pv = Pv.n(gv),
      dv = Pv(1442),
      Nv = Pv(1175),
      lv = Pv(4465),
      Tv = Pv(4474),
      Wv = Pv(4483),
      wv = Pv(1082);

    function av(vv) {
      return vv.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    lv.c.registerLanguage("javascript", Tv.c), lv.c.registerLanguage("typescript", Wv.e);

    function sv(vv, zv) {
      const Pv = av(vv).replace(/"/g, "&quot;");
      return `<button type="button" class="DocsCopyButton ${zv}" title="${Pv}" aria-label="${Pv}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5"/><path d="M10.5 3.5V1.5H1.5v9h2"/></svg><svg class="DocsCopiedIcon" viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 8.5l3.5 3.5 7.5-7.5"/></svg></button>`
    }

    function Cv(vv, zv) {
      const Pv = [],
        hv = vv.toLowerCase(),
        Sv = zv.toLowerCase();
      let ev = 0;
      for (; ev < vv.length;) {
        const gv = hv.indexOf(Sv, ev);
        if (-1 === gv) {
          Pv.push(vv.slice(ev));
          break
        }
        gv > ev && Pv.push(vv.slice(ev, gv)), Pv.push((0, wv.jsx)("mark", {
          className: "DocsHighlight",
          children: vv.slice(gv, gv + zv.length)
        }, gv)), ev = gv + zv.length
      }
      return Pv
    }
    var iv = Pv(1042),
      cv = Pv(1344),
      Gv = Pv(36379),
      mv = Pv(36387);
    const jv = {
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
      fv = (0, hv.memo)((function(vv) {
        var zv, Pv, gv, Tv, Wv, fv, Fv;
        let {
          popOutDocs: Yv,
          hideDocs: nv,
          tutorialEnabled: Ov
        } = vv;
        const [Dv, Kv] = (0, hv.useState)(Sv.d[0].id), Vv = (0, hv.useRef)(null), Uv = (0, hv.useRef)(null), [Rv, xv] = (0, hv.useState)(""), [tv, qv] = (0, hv.useState)(0), [Iv, Qv] = (0, hv.useState)(null), [Zv, Av] = (0, hv.useState)(!1), [Lv, Hv] = (0, hv.useState)(160), Mv = (0, hv.useRef)(!1), yv = (0, hv.useRef)(null), Bv = (0, Gv.p)("docsOverview"), [Jv, Ev] = (0, hv.useState)(0), ov = Object.values(jv).some((vv => (null === vv || void 0 === vv ? void 0 : vv.tabStep) === Bv));
        (0, hv.useEffect)((() => {
          ov && Rv.length > 0 && (xv(""), Ev((vv => vv + 1)))
        }), [ov, Rv]);
        const bv = Rv.length > 0,
          rv = (0, hv.useMemo)((() => function(vv) {
            if (!vv) return [];
            const zv = vv.toLowerCase(),
              Pv = [];
            for (const hv of Sv.d) {
              const vv = hv.content.toLowerCase();
              let Sv = 0,
                ev = -1,
                gv = 0,
                pv = vv.indexOf(zv, gv);
              for (; - 1 !== pv;) - 1 === ev && (ev = pv), Sv++, gv = pv + zv.length, pv = vv.indexOf(zv, gv);
              if (0 === Sv) continue;
              const dv = Math.max(0, ev - 40),
                Nv = Math.min(hv.content.length, ev + zv.length + 40),
                lv = (dv > 0 ? "..." : "") + hv.content.slice(dv, Nv).replace(/\n/g, " ") + (Nv < hv.content.length ? "..." : "");
              Pv.push({
                doc: hv,
                matchCount: Sv,
                snippet: lv
              })
            }
            return Pv.sort(((vv, zv) => zv.matchCount - vv.matchCount)), Pv
          }(Rv)), [Rv]),
          kv = bv ? null !== (zv = null !== (Pv = null === (gv = rv.find((vv => vv.doc.id === Dv))) || void 0 === gv ? void 0 : gv.doc) && void 0 !== Pv ? Pv : null === (Tv = rv[0]) || void 0 === Tv ? void 0 : Tv.doc) && void 0 !== zv ? zv : null : null !== (Wv = Sv.d.find((vv => vv.id === Dv))) && void 0 !== Wv ? Wv : Sv.d[0],
          {
            t: Xv
          } = (0, Nv.x)(),
          uv = Xv("codeEditor:copySnippet"),
          vz = (0, hv.useMemo)((() => kv ? function(vv, zv, Pv, hv) {
            let Sv = zv;
            Sv = Sv.replace(/\r\n/g, "\n");
            const ev = [];
            Sv = Sv.replace(/```(\w*)\n([\s\S]*?)```/g, ((vv, zv, hv) => {
              const Sv = ev.length;
              let gv = av(hv);
              try {
                gv = lv.c.highlight(hv.trimEnd(), {
                  language: zv
                }).value
              } catch (pv) {
                console.warn("Could not highlight documentation code block", pv)
              }
              return ev.push(`<div class="DocsCodeBlockRow"><pre class="DocsCodeBlock" data-lang="${zv}"><code>${gv}</code></pre>${sv(Pv,"DocsCopyBlock")}</div>`), `\0PLACEHOLDER_${Sv}\0`
            })), Sv = Sv.replace(/(`{1,2})([^\n]+?)\1(?!`)/g, ((zv, hv, Sv) => {
              const gv = ev.length,
                pv = 2 === hv.length ? Sv.replace(/^ (.*) $/, "$1") : Sv;
              let dv = av(pv);
              try {
                "apiReference" !== vv && "callbacks" !== vv || (dv = lv.c.highlight(pv.trimEnd().replaceAll("\\|", "|"), {
                  language: "typescript"
                }).value)
              } catch (Nv) {
                console.warn("Could not highlight documentation snippet", Nv)
              }
              return ev.push(`<span class="DocsInlineCodeRow"><code class="DocsInlineCode">${dv}</code>${sv(Pv,"DocsCopyInline")}</span>`), `\0PLACEHOLDER_${gv}\0`
            })), Sv = av(Sv), Sv = Sv.replace(/^#### (.+)$/gm, '<h4 class="DocsH4">$1</h4>'), Sv = Sv.replace(/^### (.+)$/gm, '<h3 class="DocsH3">$1</h3>'), Sv = Sv.replace(/^## (.+)$/gm, '<h2 class="DocsH2">$1</h2>'), Sv = Sv.replace(/^# (.+)$/gm, '<h1 class="DocsH1">$1</h1>'), Sv = Sv.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"), Sv = Sv.replace(/\[([^\]]+)\]\(([^)]+)\)/g, ((vv, zv, Pv) => Pv.startsWith("#") ? `<a class="DocsAnchor" data-id="${Pv}">${zv}</a>` : `<a href="${Pv}" target="_blank" rel="noopener noreferrer">${zv}</a>`)), Sv = Sv.replace(/^(\|.+\|)\n(\|[\s:\-|]+\|)\n((?:\|.+\|\s*\r?\n?)*)/gm, ((vv, zv, Pv, hv) => `<table class="DocsTable"><thead><tr>${zv.split("|").slice(1,-1).map((vv=>`<th>${vv.trim()}</th>`)).join("")}</tr></thead><tbody>${hv.trim().split("\n").map((vv=>`<tr>${vv.split("|").slice(1,-1).map((vv=>`<td>${vv.trim()}</td>`)).join("")}</tr>`)).join("")}</tbody></table>`)), Sv = Sv.replace(/(?:^[ \t]*([*-])[ \t]+.+(?:\n|$))+/gm, ((vv, zv) => function(vv, zv) {
              const Pv = "*" === zv,
                hv = [];
              for (const pv of vv.split("\n")) {
                const vv = pv.match(/^([ \t]*)(?:[*-])[ \t]+(.+)$/);
                vv && hv.push({
                  indent: vv[1].replace(/\t/g, "  ").length,
                  content: vv[2]
                })
              }
              let Sv = "";
              const ev = [],
                gv = Pv ? "ol" : "ul";
              for (const {
                  indent: pv,
                  content: dv
                }
                of hv) {
                for (; ev.length > 0 && pv < ev[ev.length - 1];) Sv += `</${gv}></li>`, ev.pop();
                (0 === ev.length || pv > ev[ev.length - 1]) && (ev.length > 0 && (Sv = Sv.replace(/<\/li>$/, "")), Sv += `<${gv} class="DocsList">`, ev.push(pv)), Sv += `<li class="DocsListItem">${dv}</li>`
              }
              for (; ev.length > 0;) Sv += `</${gv}>`, ev.pop(), ev.length > 0 && (Sv += "</li>");
              return Sv
            }(vv, zv))), Sv = Sv.replace(/\n{2,}/g, "\n<br/>\n");
            for (let gv = 0; gv < ev.length; gv++) Sv = Sv.replace(`\0PLACEHOLDER_${gv}\0`, ev[gv]);
            if (hv) {
              const vv = av(hv).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                zv = new RegExp(vv, "gi");
              Sv = Sv.replace(/([^<>]+)(?=<|$)/g, (vv => vv.replace(zv, (vv => `<mark class="DocsHighlight">${vv}</mark>`))))
            }
            return Sv
          }(kv.id, kv.content, uv, bv ? Rv : void 0) : ""), [kv, uv, bv, Rv]);
        (0, hv.useEffect)((() => {
          const vv = Uv.current;
          if (!vv) return;
          const zv = vv => {
            var zv, Pv, hv, Sv, ev;
            const gv = null === (zv = (Pv = vv.target).closest) || void 0 === zv ? void 0 : zv.call(Pv, ".DocsCopyButton");
            if (!gv) return;
            vv.preventDefault(), vv.stopPropagation();
            const pv = null !== (hv = null === (Sv = gv.parentElement) || void 0 === Sv || null === (ev = Sv.querySelector("code")) || void 0 === ev ? void 0 : ev.textContent) && void 0 !== hv ? hv : "";
            navigator.clipboard.writeText(pv.trimEnd()).then((() => {
              gv.classList.add("Copied"), setTimeout((() => {
                gv.classList.remove("Copied")
              }), 1500)
            })).catch((vv => {
              console.warn("Could not copy documentation code", vv)
            }))
          };
          return vv.addEventListener("click", zv, !0), () => {
            vv.removeEventListener("click", zv, !0)
          }
        }), []);
        const [zz, Pz] = (0, hv.useState)(0);
        (0, hv.useEffect)((() => {
          if (!bv || !Uv.current) return void Pz(0);
          const vv = Uv.current.querySelectorAll(".DocsHighlight").length;
          Pz(vv)
        }), [bv, vz]), (0, hv.useEffect)((() => {
          if (null === Iv || !Uv.current) return;
          Qv(null);
          const vv = Uv.current.querySelectorAll(".DocsHighlight");
          if (0 === vv.length) return;
          const zv = Math.min(Iv, vv.length - 1);
          qv(zv), vv.forEach((vv => {
            vv.classList.remove("DocsHighlightActive")
          })), vv[zv].classList.add("DocsHighlightActive"), vv[zv].scrollIntoView({
            block: "center",
            behavior: "smooth"
          })
        }), [Iv, vz]);
        const hz = (0, hv.useCallback)((vv => {
            if (!Uv.current) return;
            const zv = Uv.current.querySelectorAll(".DocsHighlight");
            if (0 === zv.length) return;
            const Pv = (tv + vv + zv.length) % zv.length;
            qv(Pv), Qv(Pv)
          }), [tv]),
          Sz = (0, hv.useCallback)((vv => {
            var zv;
            const Pv = null === (zv = jv[vv]) || void 0 === zv ? void 0 : zv.tabStep;
            Pv && Pv === Bv && (0, mv.f)(Pv), vv !== Dv ? (Av(!0), Kv(vv), qv(0), Uv.current && (Uv.current.scrollTop = 0), bv && Qv(0)) : Av(!Zv)
          }), [bv, Dv, Zv, Bv]),
          ez = (0, hv.useCallback)((vv => {
            var zv;
            const Pv = Array.from((null === (zv = Uv.current) || void 0 === zv ? void 0 : zv.querySelectorAll(".DocsH2, .DocsH3")) || []).find((zv => {
              var Pv;
              return null === (Pv = zv.textContent) || void 0 === Pv ? void 0 : Pv.includes(vv)
            }));
            Pv && Pv.scrollIntoView({
              block: "start",
              behavior: "smooth"
            })
          }), [Uv]),
          gz = (0, hv.useCallback)((vv => {
            var zv, Pv;
            const hv = null !== (zv = null === (Pv = Vv.current) || void 0 === Pv ? void 0 : Pv.clientWidth) && void 0 !== zv ? zv : window.innerWidth,
              Sv = Math.max(120, hv - 200);
            return Math.min(Math.max(vv, 120), Sv)
          }), []),
          pz = (0, hv.useCallback)((() => {
            var vv;
            Mv.current && (Mv.current = !1, null === (vv = Vv.current) || void 0 === vv || vv.classList.remove("DocsSidebarResizing"))
          }), []),
          dz = (0, hv.useCallback)((vv => {
            var zv;
            vv.preventDefault(), Mv.current = !0, null === (zv = Vv.current) || void 0 === zv || zv.classList.add("DocsSidebarResizing")
          }), []);
        (0, hv.useEffect)((() => {
          const vv = Vv.current,
            zv = vv => {
              if (!Mv.current || !Vv.current) return;
              const zv = Vv.current.getBoundingClientRect().left;
              Hv(gz(vv.clientX - zv))
            };
          return window.addEventListener("mousemove", zv), window.addEventListener("mouseup", pz), () => {
            window.removeEventListener("mousemove", zv), window.removeEventListener("mouseup", pz), null === vv || void 0 === vv || vv.classList.remove("DocsSidebarResizing")
          }
        }), [gz, pz]);
        const Nz = (0, hv.useCallback)((vv => {
          if (vv) {
            const [zv, Pv] = vv.slice(1).split("-");
            Pv && (yv.current = {
              docId: zv,
              subsection: Pv
            }), zv && Sz(zv)
          }
        }), [Sz]);
        (0, hv.useEffect)((() => {
          const vv = yv.current;
          vv && Dv === vv.docId && (setTimeout((() => {
            ez(vv.subsection)
          }), 0), yv.current = null)
        })), (0, hv.useEffect)((() => {
          if (!Uv.current) return;
          Uv.current.querySelectorAll("a.DocsAnchor").forEach((vv => {
            vv.addEventListener("click", (zv => {
              zv.preventDefault(), Nz(vv.dataset.id)
            }))
          }))
        }), [Dv, Nz]);
        const lz = Object.values(jv).find((vv => (null === vv || void 0 === vv ? void 0 : vv.pageStep) === Bv));
        return (0, wv.jsx)(Gv.m, {
          tutorial: "docsOverview",
          step: null !== (fv = null === lz || void 0 === lz ? void 0 : lz.pageStep) && void 0 !== fv ? fv : "docsPanel",
          text: Xv(null !== (Fv = null === lz || void 0 === lz ? void 0 : lz.pageText) && void 0 !== Fv ? Fv : "codeEditor:tutorialDocsPanel"),
          enabled: Ov,
          placement: "left",
          onPrevious: lz ? void 0 : nv,
          children: (0, wv.jsxs)("div", {
            className: "DocsPanel",
            ref: Vv,
            children: [(0, wv.jsxs)("div", {
              className: "DocsSidebar",
              style: {
                width: Lv,
                minWidth: Lv,
                maxWidth: Lv
              },
              children: [(0, wv.jsx)(ev.c, {
                className: "DocsSearch",
                placeholderText: "\ud83d\udd0e Search docs...",
                onValueChange: vv => {
                  xv(vv), qv(0), Qv(0)
                }
              }, Jv), (0, wv.jsx)("div", {
                className: "DocsNavList",
                children: bv ? rv.map((vv => (0, wv.jsxs)("div", {
                  className: pv()("DocsNavItem", "SearchResult", {
                    Active: vv.doc.id === (null === kv || void 0 === kv ? void 0 : kv.id)
                  }),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    Sz(vv.doc.id)
                  },
                  children: [(0, wv.jsxs)("div", {
                    className: "SearchResultTitle",
                    children: [vv.doc.title, (0, wv.jsx)("span", {
                      className: "SearchResultCount",
                      children: vv.matchCount
                    })]
                  }), (0, wv.jsx)("div", {
                    className: "SearchResultSnippet",
                    children: Cv(vv.snippet, Rv)
                  })]
                }, vv.doc.id))) : Sv.d.map((vv => {
                  const zv = (0, wv.jsxs)("div", {
                      className: pv()("DocsNavItem", {
                        Active: vv.id === (null === kv || void 0 === kv ? void 0 : kv.id)
                      }),
                      "data-pad-focusable": !0,
                      onClick: () => {
                        Sz(vv.id)
                      },
                      children: [(0, wv.jsx)("span", {
                        className: "DocsNavItemTitle",
                        children: vv.title
                      }), vv.subsections && vv.id === (null === kv || void 0 === kv ? void 0 : kv.id) && Zv && (0, wv.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, wv.jsx)(iv.b, {
                          name: "angle-down"
                        })
                      }), vv.subsections && (vv.id !== (null === kv || void 0 === kv ? void 0 : kv.id) || !Zv) && (0, wv.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, wv.jsx)(iv.b, {
                          name: "angle-up"
                        })
                      })]
                    }),
                    Pv = jv[vv.id];
                  return (0, wv.jsxs)(hv.Fragment, {
                    children: [Pv && (0, wv.jsx)(Gv.m, {
                      tutorial: "docsOverview",
                      step: Pv.tabStep,
                      text: Xv(Pv.tabText),
                      enabled: Ov,
                      placement: "left",
                      waitForClick: !0,
                      children: zv
                    }), !Pv && zv, Zv && vv.subsections && vv.id === (null === kv || void 0 === kv ? void 0 : kv.id) && vv.subsections.map((vv => (0, wv.jsx)("div", {
                      className: "DocsNavItem DocsSubsection",
                      "data-pad-focusable": !0,
                      onClick: () => {
                        ez(vv)
                      },
                      children: vv
                    }, vv)))]
                  }, vv.id)
                }))
              }), (0, wv.jsx)("div", {
                className: "DocsSidebarButtonContainer",
                children: (0, wv.jsx)(cv.h, {
                  tooltipInner: Xv("codeEditor:popOutDocsTooltip"),
                  placement: "top",
                  children: (0, wv.jsx)(dv.d, {
                    className: "DocsSidebarButton",
                    onClick: Yv,
                    children: Xv("codeEditor:popOutDocs")
                  })
                })
              })]
            }), (0, wv.jsx)("div", {
              className: "DocsSidebarResizeHandle",
              onMouseDown: dz
            }), (0, wv.jsxs)("div", {
              className: "DocsContentWrapper",
              children: [bv && zz > 0 && (0, wv.jsxs)("div", {
                className: "DocsMatchNav",
                children: [(0, wv.jsxs)("span", {
                  className: "DocsMatchNavLabel",
                  children: [tv + 1, " / ", zz]
                }), (0, wv.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    hz(-1)
                  },
                  children: "\u25b2"
                }), (0, wv.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    hz(1)
                  },
                  children: "\u25bc"
                })]
              }), (0, wv.jsx)("div", {
                className: "DocsContent",
                ref: Uv,
                dangerouslySetInnerHTML: {
                  __html: vz
                }
              })]
            })]
          })
        })
      }))
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);