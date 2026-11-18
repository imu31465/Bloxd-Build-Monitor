export const id = 279;
export const ids = [279];
export const modules = {
  39894: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      default: () => Jy
    });
    var Uy = Wy(55),
      hy = Wy(3946),
      fy = Wy(1486),
      Zy = Wy(898),
      cb = Wy.n(Zy),
      Py = Wy(1273),
      oy = Wy(1042),
      By = Wy(3904),
      Ky = Wy(3920),
      ey = Wy(3929),
      qb = Wy(952);

    function sy(yb) {
      return yb.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    By.e.registerLanguage("javascript", Ky.c), By.e.registerLanguage("typescript", ey.c);

    function Sy(yb, bb) {
      const Wy = sy(yb).replace(/"/g, "&quot;");
      return `<button type="button" class="DocsCopyButton ${bb}" title="${Wy}" aria-label="${Wy}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5" rx="1.5"/><path d="M10.5 3.5V3A1.5 1.5 0 0 0 9 1.5H3A1.5 1.5 0 0 0 1.5 3v6A1.5 1.5 0 0 0 3 10.5h.5"/></svg><svg class="DocsCopiedIcon" viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 8.5l3.5 3.5 7.5-7.5"/></svg></button>`
    }

    function Ey(yb, bb) {
      const Wy = [],
        Uy = yb.toLowerCase(),
        hy = bb.toLowerCase();
      let fy = 0;
      for (; fy < yb.length;) {
        const Zy = Uy.indexOf(hy, fy);
        if (-1 === Zy) {
          Wy.push(yb.slice(fy));
          break
        }
        Zy > fy && Wy.push(yb.slice(fy, Zy)), Wy.push((0, qb.jsx)("mark", {
          className: "DocsHighlight",
          children: yb.slice(Zy, Zy + bb.length)
        }, Zy)), fy = Zy + bb.length
      }
      return Wy
    }
    var ly = Wy(910),
      mb = Wy(1217),
      Cy = Wy(35619),
      Ty = Wy(35625);
    const Vy = {
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
      Jy = (0, Uy.memo)((function(yb) {
        var bb, Wy, Zy, Ky, ey, Jy, gb;
        let {
          popOutDocs: Gy,
          hideDocs: Oy,
          tutorialEnabled: Ry
        } = yb;
        const [vb, ib] = (0, Uy.useState)(hy.c[0].id), My = (0, Uy.useRef)(null), Yy = (0, Uy.useRef)(null), [Xy, ny] = (0, Uy.useState)(""), [uy, rb] = (0, Uy.useState)(0), [Hy, ab] = (0, Uy.useState)(null), [Fy, py] = (0, Uy.useState)(!1), [Ly, Qy] = (0, Uy.useState)(160), jb = (0, Uy.useRef)(!1), Dy = (0, Uy.useRef)(null), tb = (0, Cy.h)("docsOverview"), [wy, kb] = (0, Uy.useState)(0), Ny = Object.values(Vy).some((yb => (null === yb || void 0 === yb ? void 0 : yb.tabStep) === tb));
        (0, Uy.useEffect)((() => {
          Ny && Xy.length > 0 && (ny(""), kb((yb => yb + 1)))
        }), [Ny, Xy]);
        const zb = Xy.length > 0,
          Iy = (0, Uy.useMemo)((() => function(yb) {
            if (!yb) return [];
            const bb = yb.toLowerCase(),
              Wy = [];
            for (const Uy of hy.c) {
              const yb = Uy.content.toLowerCase();
              let hy = 0,
                fy = -1,
                Zy = 0,
                cb = yb.indexOf(bb, Zy);
              for (; - 1 !== cb;) - 1 === fy && (fy = cb), hy++, Zy = cb + bb.length, cb = yb.indexOf(bb, Zy);
              if (0 === hy) continue;
              const Py = Math.max(0, fy - 40),
                oy = Math.min(Uy.content.length, fy + bb.length + 40),
                By = (Py > 0 ? "..." : "") + Uy.content.slice(Py, oy).replace(/\n/g, " ") + (oy < Uy.content.length ? "..." : "");
              Wy.push({
                doc: Uy,
                matchCount: hy,
                snippet: By
              })
            }
            return Wy.sort(((yb, bb) => bb.matchCount - yb.matchCount)), Wy
          }(Xy)), [Xy]),
          xb = zb ? null !== (bb = null !== (Wy = null === (Zy = Iy.find((yb => yb.doc.id === vb))) || void 0 === Zy ? void 0 : Zy.doc) && void 0 !== Wy ? Wy : null === (Ky = Iy[0]) || void 0 === Ky ? void 0 : Ky.doc) && void 0 !== bb ? bb : null : null !== (ey = hy.c.find((yb => yb.id === vb))) && void 0 !== ey ? ey : hy.c[0],
          {
            t: Ay
          } = (0, oy.D)(),
          dy = Ay("codeEditor:copySnippet"),
          yW = (0, Uy.useMemo)((() => xb ? function(yb, bb, Wy, Uy) {
            let hy = bb;
            hy = hy.replace(/\r\n/g, "\n");
            const fy = [];
            hy = hy.replace(/```(\w*)\n([\s\S]*?)```/g, ((yb, bb, Uy) => {
              const hy = fy.length;
              let Zy = sy(Uy);
              try {
                Zy = By.e.highlight(Uy.trimEnd(), {
                  language: bb
                }).value
              } catch (cb) {
                console.warn("Could not highlight documentation code block", cb)
              }
              return fy.push(`<div class="DocsCodeBlockRow"><pre class="DocsCodeBlock" data-lang="${bb}"><code>${Zy}</code></pre>${Sy(Wy,"DocsCopyBlock")}</div>`), `\0PLACEHOLDER_${hy}\0`
            })), hy = hy.replace(/(`{1,2})([^\n]+?)\1(?!`)/g, ((bb, Uy, hy) => {
              const Zy = fy.length,
                cb = 2 === Uy.length ? hy.replace(/^ (.*) $/, "$1") : hy;
              let Py = sy(cb);
              try {
                "apiReference" !== yb && "callbacks" !== yb || (Py = By.e.highlight(cb.trimEnd().replaceAll("\\|", "|"), {
                  language: "typescript"
                }).value)
              } catch (oy) {
                console.warn("Could not highlight documentation snippet", oy)
              }
              return fy.push(`<span class="DocsInlineCodeRow"><code class="DocsInlineCode">${Py}</code>${Sy(Wy,"DocsCopyInline")}</span>`), `\0PLACEHOLDER_${Zy}\0`
            })), hy = sy(hy), hy = hy.replace(/^#### (.+)$/gm, '<h4 class="DocsH4">$1</h4>'), hy = hy.replace(/^### (.+)$/gm, '<h3 class="DocsH3">$1</h3>'), hy = hy.replace(/^## (.+)$/gm, '<h2 class="DocsH2">$1</h2>'), hy = hy.replace(/^# (.+)$/gm, '<h1 class="DocsH1">$1</h1>'), hy = hy.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"), hy = hy.replace(/\[([^\]]+)\]\(([^)]+)\)/g, ((yb, bb, Wy) => Wy.startsWith("#") ? `<a class="DocsAnchor" data-id="${Wy}">${bb}</a>` : `<a href="${Wy}" target="_blank" rel="noopener noreferrer">${bb}</a>`)), hy = hy.replace(/^(\|.+\|)\n(\|[\s:\-|]+\|)\n((?:\|.+\|\s*\r?\n?)*)/gm, ((yb, bb, Wy, Uy) => `<table class="DocsTable"><thead><tr>${bb.split("|").slice(1,-1).map((yb=>`<th>${yb.trim()}</th>`)).join("")}</tr></thead><tbody>${Uy.trim().split("\n").map((yb=>`<tr>${yb.split("|").slice(1,-1).map((yb=>`<td>${yb.trim()}</td>`)).join("")}</tr>`)).join("")}</tbody></table>`)), hy = hy.replace(/(?:^[ \t]*([*-])[ \t]+.+(?:\n|$))+/gm, ((yb, bb) => function(yb, bb) {
              const Wy = "*" === bb,
                Uy = [];
              for (const cb of yb.split("\n")) {
                const yb = cb.match(/^([ \t]*)(?:[*-])[ \t]+(.+)$/);
                yb && Uy.push({
                  indent: yb[1].replace(/\t/g, "  ").length,
                  content: yb[2]
                })
              }
              let hy = "";
              const fy = [],
                Zy = Wy ? "ol" : "ul";
              for (const {
                  indent: cb,
                  content: Py
                }
                of Uy) {
                for (; fy.length > 0 && cb < fy[fy.length - 1];) hy += `</${Zy}></li>`, fy.pop();
                (0 === fy.length || cb > fy[fy.length - 1]) && (fy.length > 0 && (hy = hy.replace(/<\/li>$/, "")), hy += `<${Zy} class="DocsList">`, fy.push(cb)), hy += `<li class="DocsListItem">${Py}</li>`
              }
              for (; fy.length > 0;) hy += `</${Zy}>`, fy.pop(), fy.length > 0 && (hy += "</li>");
              return hy
            }(yb, bb))), hy = hy.replace(/\n{2,}/g, "\n<br/>\n");
            for (let Zy = 0; Zy < fy.length; Zy++) hy = hy.replace(`\0PLACEHOLDER_${Zy}\0`, fy[Zy]);
            if (Uy) {
              const yb = sy(Uy).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                bb = new RegExp(yb, "gi");
              hy = hy.replace(/([^<>]+)(?=<|$)/g, (yb => yb.replace(bb, (yb => `<mark class="DocsHighlight">${yb}</mark>`))))
            }
            return hy
          }(xb.id, xb.content, dy, zb ? Xy : void 0) : ""), [xb, dy, zb, Xy]);
        (0, Uy.useEffect)((() => {
          const yb = Yy.current;
          if (!yb) return;
          const bb = yb => {
            var bb, Wy, Uy, hy, fy;
            const Zy = null === (bb = (Wy = yb.target).closest) || void 0 === bb ? void 0 : bb.call(Wy, ".DocsCopyButton");
            if (!Zy) return;
            yb.preventDefault(), yb.stopPropagation();
            const cb = null !== (Uy = null === (hy = Zy.parentElement) || void 0 === hy || null === (fy = hy.querySelector("code")) || void 0 === fy ? void 0 : fy.textContent) && void 0 !== Uy ? Uy : "";
            navigator.clipboard.writeText(cb.trimEnd()).then((() => {
              Zy.classList.add("Copied"), setTimeout((() => {
                Zy.classList.remove("Copied")
              }), 1500)
            })).catch((yb => {
              console.warn("Could not copy documentation code", yb)
            }))
          };
          return yb.addEventListener("click", bb, !0), () => {
            yb.removeEventListener("click", bb, !0)
          }
        }), []);
        const [bW, Wb] = (0, Uy.useState)(0);
        (0, Uy.useEffect)((() => {
          if (!zb || !Yy.current) return void Wb(0);
          const yb = Yy.current.querySelectorAll(".DocsHighlight").length;
          Wb(yb)
        }), [zb, yW]), (0, Uy.useEffect)((() => {
          if (null === Hy || !Yy.current) return;
          ab(null);
          const yb = Yy.current.querySelectorAll(".DocsHighlight");
          if (0 === yb.length) return;
          const bb = Math.min(Hy, yb.length - 1);
          rb(bb), yb.forEach((yb => {
            yb.classList.remove("DocsHighlightActive")
          })), yb[bb].classList.add("DocsHighlightActive"), yb[bb].scrollIntoView({
            block: "center",
            behavior: "smooth"
          })
        }), [Hy, yW]);
        const Ub = (0, Uy.useCallback)((yb => {
            if (!Yy.current) return;
            const bb = Yy.current.querySelectorAll(".DocsHighlight");
            if (0 === bb.length) return;
            const Wy = (uy + yb + bb.length) % bb.length;
            rb(Wy), ab(Wy)
          }), [uy]),
          hb = (0, Uy.useCallback)((yb => {
            var bb;
            const Wy = null === (bb = Vy[yb]) || void 0 === bb ? void 0 : bb.tabStep;
            Wy && Wy === tb && (0, Ty.i)(Wy), yb !== vb ? (py(!0), ib(yb), rb(0), Yy.current && (Yy.current.scrollTop = 0), zb && ab(0)) : py(!Fy)
          }), [zb, vb, Fy, tb]),
          fb = (0, Uy.useCallback)((yb => {
            var bb;
            const Wy = Array.from((null === (bb = Yy.current) || void 0 === bb ? void 0 : bb.querySelectorAll(".DocsH2, .DocsH3")) || []).find((bb => {
              var Wy;
              return null === (Wy = bb.textContent) || void 0 === Wy ? void 0 : Wy.includes(yb)
            }));
            Wy && Wy.scrollIntoView({
              block: "start",
              behavior: "smooth"
            })
          }), [Yy]),
          Zb = (0, Uy.useCallback)((yb => {
            var bb, Wy;
            const Uy = null !== (bb = null === (Wy = My.current) || void 0 === Wy ? void 0 : Wy.clientWidth) && void 0 !== bb ? bb : window.innerWidth,
              hy = Math.max(120, Uy - 200);
            return Math.min(Math.max(yb, 120), hy)
          }), []),
          cW = (0, Uy.useCallback)((() => {
            var yb;
            jb.current && (jb.current = !1, null === (yb = My.current) || void 0 === yb || yb.classList.remove("DocsSidebarResizing"))
          }), []),
          Pb = (0, Uy.useCallback)((yb => {
            var bb;
            yb.preventDefault(), jb.current = !0, null === (bb = My.current) || void 0 === bb || bb.classList.add("DocsSidebarResizing")
          }), []);
        (0, Uy.useEffect)((() => {
          const yb = My.current,
            bb = yb => {
              if (!jb.current || !My.current) return;
              const bb = My.current.getBoundingClientRect().left;
              Qy(Zb(yb.clientX - bb))
            };
          return window.addEventListener("mousemove", bb), window.addEventListener("mouseup", cW), () => {
            window.removeEventListener("mousemove", bb), window.removeEventListener("mouseup", cW), null === yb || void 0 === yb || yb.classList.remove("DocsSidebarResizing")
          }
        }), [Zb, cW]);
        const ob = (0, Uy.useCallback)((yb => {
          if (yb) {
            const [bb, Wy] = yb.slice(1).split("-");
            Wy && (Dy.current = {
              docId: bb,
              subsection: Wy
            }), bb && hb(bb)
          }
        }), [hb]);
        (0, Uy.useEffect)((() => {
          const yb = Dy.current;
          yb && vb === yb.docId && (setTimeout((() => {
            fb(yb.subsection)
          }), 0), Dy.current = null)
        })), (0, Uy.useEffect)((() => {
          if (!Yy.current) return;
          Yy.current.querySelectorAll("a.DocsAnchor").forEach((yb => {
            yb.addEventListener("click", (bb => {
              bb.preventDefault(), ob(yb.dataset.id)
            }))
          }))
        }), [vb, ob]);
        const Bb = Object.values(Vy).find((yb => (null === yb || void 0 === yb ? void 0 : yb.pageStep) === tb));
        return (0, qb.jsx)(Cy.g, {
          tutorial: "docsOverview",
          step: null !== (Jy = null === Bb || void 0 === Bb ? void 0 : Bb.pageStep) && void 0 !== Jy ? Jy : "docsPanel",
          text: Ay(null !== (gb = null === Bb || void 0 === Bb ? void 0 : Bb.pageText) && void 0 !== gb ? gb : "codeEditor:tutorialDocsPanel"),
          enabled: Ry,
          placement: "left",
          onPrevious: Bb ? void 0 : Oy,
          children: (0, qb.jsxs)("div", {
            className: "DocsPanel",
            ref: My,
            children: [(0, qb.jsxs)("div", {
              className: "DocsSidebar",
              style: {
                width: Ly,
                minWidth: Ly,
                maxWidth: Ly
              },
              children: [(0, qb.jsx)(fy.c, {
                className: "DocsSearch",
                placeholderText: "\ud83d\udd0e Search docs...",
                onValueChange: yb => {
                  ny(yb), rb(0), ab(0)
                }
              }, wy), (0, qb.jsx)("div", {
                className: "DocsNavList",
                children: zb ? Iy.map((yb => (0, qb.jsxs)("div", {
                  className: cb()("DocsNavItem", "SearchResult", {
                    Active: yb.doc.id === (null === xb || void 0 === xb ? void 0 : xb.id)
                  }),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    hb(yb.doc.id)
                  },
                  children: [(0, qb.jsxs)("div", {
                    className: "SearchResultTitle",
                    children: [yb.doc.title, (0, qb.jsx)("span", {
                      className: "SearchResultCount",
                      children: yb.matchCount
                    })]
                  }), (0, qb.jsx)("div", {
                    className: "SearchResultSnippet",
                    children: Ey(yb.snippet, Xy)
                  })]
                }, yb.doc.id))) : hy.c.map((yb => {
                  const bb = (0, qb.jsxs)("div", {
                      className: cb()("DocsNavItem", {
                        Active: yb.id === (null === xb || void 0 === xb ? void 0 : xb.id)
                      }),
                      "data-pad-focusable": !0,
                      onClick: () => {
                        hb(yb.id)
                      },
                      children: [(0, qb.jsx)("span", {
                        className: "DocsNavItemTitle",
                        children: yb.title
                      }), yb.subsections && yb.id === (null === xb || void 0 === xb ? void 0 : xb.id) && Fy && (0, qb.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, qb.jsx)(ly.e, {
                          name: "angle-down"
                        })
                      }), yb.subsections && (yb.id !== (null === xb || void 0 === xb ? void 0 : xb.id) || !Fy) && (0, qb.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, qb.jsx)(ly.e, {
                          name: "angle-up"
                        })
                      })]
                    }),
                    Wy = Vy[yb.id];
                  return (0, qb.jsxs)(Uy.Fragment, {
                    children: [Wy && (0, qb.jsx)(Cy.g, {
                      tutorial: "docsOverview",
                      step: Wy.tabStep,
                      text: Ay(Wy.tabText),
                      enabled: Ry,
                      placement: "left",
                      waitForClick: !0,
                      children: bb
                    }), !Wy && bb, Fy && yb.subsections && yb.id === (null === xb || void 0 === xb ? void 0 : xb.id) && yb.subsections.map((yb => (0, qb.jsx)("div", {
                      className: "DocsNavItem DocsSubsection",
                      "data-pad-focusable": !0,
                      onClick: () => {
                        fb(yb)
                      },
                      children: yb
                    }, yb)))]
                  }, yb.id)
                }))
              }), (0, qb.jsx)("div", {
                className: "DocsSidebarButtonContainer",
                children: (0, qb.jsx)(mb.f, {
                  tooltipInner: Ay("codeEditor:popOutDocsTooltip"),
                  placement: "top",
                  children: (0, qb.jsx)(Py.f, {
                    className: "DocsSidebarButton",
                    onClick: Gy,
                    children: Ay("codeEditor:popOutDocs")
                  })
                })
              })]
            }), (0, qb.jsx)("div", {
              className: "DocsSidebarResizeHandle",
              onMouseDown: Pb
            }), (0, qb.jsxs)("div", {
              className: "DocsContentWrapper",
              children: [zb && bW > 0 && (0, qb.jsxs)("div", {
                className: "DocsMatchNav",
                children: [(0, qb.jsxs)("span", {
                  className: "DocsMatchNavLabel",
                  children: [uy + 1, " / ", bW]
                }), (0, qb.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    Ub(-1)
                  },
                  children: "\u25b2"
                }), (0, qb.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    Ub(1)
                  },
                  children: "\u25bc"
                })]
              }), (0, qb.jsx)("div", {
                className: "DocsContent",
                ref: Yy,
                dangerouslySetInnerHTML: {
                  __html: yW
                }
              })]
            })]
          })
        })
      }))
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);