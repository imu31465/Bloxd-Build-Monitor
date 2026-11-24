export const id = 305;
export const ids = [305];
export const modules = {
  41709: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      default: () => jp
    });
    var Op = cp(62),
      op = cp(4852),
      Ip = cp(1692),
      Sp = cp(1049),
      xp = cp.n(Sp),
      Lp = cp(1480),
      Yp = cp(1201),
      Dp = cp(4819),
      Ap = cp(4831),
      Pp = cp(4838),
      Wp = cp(1112);

    function yp(pp) {
      return pp.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    Dp.d.registerLanguage("javascript", Ap.d), Dp.d.registerLanguage("typescript", Pp.d);

    function Up(pp, ip) {
      const cp = yp(pp).replace(/"/g, "&quot;");
      return `<button type="button" class="DocsCopyButton ${ip}" title="${cp}" aria-label="${cp}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5"/><path d="M10.5 3.5V1.5H1.5v9h2"/></svg><svg class="DocsCopiedIcon" viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 8.5l3.5 3.5 7.5-7.5"/></svg></button>`
    }

    function wp(pp, ip) {
      const cp = [],
        Op = pp.toLowerCase(),
        op = ip.toLowerCase();
      let Ip = 0;
      for (; Ip < pp.length;) {
        const Sp = Op.indexOf(op, Ip);
        if (-1 === Sp) {
          cp.push(pp.slice(Ip));
          break
        }
        Sp > Ip && cp.push(pp.slice(Ip, Sp)), cp.push((0, Wp.jsx)("mark", {
          className: "DocsHighlight",
          children: pp.slice(Sp, Sp + ip.length)
        }, Sp)), Ip = Sp + ip.length
      }
      return cp
    }
    var vp = cp(1060),
      tp = cp(1387),
      Hp = cp(37084),
      dp = cp(37089);
    const ep = {
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
      jp = (0, Op.memo)((function(pp) {
        var ip, cp, Sp, Ap, Pp, jp, kp;
        let {
          popOutDocs: mp,
          hideDocs: Rp,
          tutorialEnabled: qp
        } = pp;
        const [Mp, Cp] = (0, Op.useState)(op.d[0].id), Ep = (0, Op.useRef)(null), Xp = (0, Op.useRef)(null), [lp, Qp] = (0, Op.useState)(""), [Jp, Bp] = (0, Op.useState)(0), [Np, Tp] = (0, Op.useState)(null), [fp, bp] = (0, Op.useState)(!1), [hp, ap] = (0, Op.useState)(160), np = (0, Op.useRef)(!1), Fp = (0, Op.useRef)(null), gp = (0, Hp.o)("docsOverview"), [Gp, rp] = (0, Op.useState)(0), Zp = Object.values(ep).some((pp => (null === pp || void 0 === pp ? void 0 : pp.tabStep) === gp));
        (0, Op.useEffect)((() => {
          Zp && lp.length > 0 && (Qp(""), rp((pp => pp + 1)))
        }), [Zp, lp]);
        const zp = lp.length > 0,
          sp = (0, Op.useMemo)((() => function(pp) {
            if (!pp) return [];
            const ip = pp.toLowerCase(),
              cp = [];
            for (const Op of op.d) {
              const pp = Op.content.toLowerCase();
              let op = 0,
                Ip = -1,
                Sp = 0,
                xp = pp.indexOf(ip, Sp);
              for (; - 1 !== xp;) - 1 === Ip && (Ip = xp), op++, Sp = xp + ip.length, xp = pp.indexOf(ip, Sp);
              if (0 === op) continue;
              const Lp = Math.max(0, Ip - 40),
                Yp = Math.min(Op.content.length, Ip + ip.length + 40),
                Dp = (Lp > 0 ? "..." : "") + Op.content.slice(Lp, Yp).replace(/\n/g, " ") + (Yp < Op.content.length ? "..." : "");
              cp.push({
                doc: Op,
                matchCount: op,
                snippet: Dp
              })
            }
            return cp.sort(((pp, ip) => ip.matchCount - pp.matchCount)), cp
          }(lp)), [lp]),
          Kp = zp ? null !== (ip = null !== (cp = null === (Sp = sp.find((pp => pp.doc.id === Mp))) || void 0 === Sp ? void 0 : Sp.doc) && void 0 !== cp ? cp : null === (Ap = sp[0]) || void 0 === Ap ? void 0 : Ap.doc) && void 0 !== ip ? ip : null : null !== (Pp = op.d.find((pp => pp.id === Mp))) && void 0 !== Pp ? Pp : op.d[0],
          {
            t: Vp
          } = (0, Yp.H)(),
          ii = Vp("codeEditor:copySnippet"),
          ci = (0, Op.useMemo)((() => Kp ? function(pp, ip, cp, Op) {
            let op = ip;
            op = op.replace(/\r\n/g, "\n");
            const Ip = [];
            op = op.replace(/```(\w*)\n([\s\S]*?)```/g, ((pp, ip, Op) => {
              const op = Ip.length;
              let Sp = yp(Op);
              try {
                Sp = Dp.d.highlight(Op.trimEnd(), {
                  language: ip
                }).value
              } catch (xp) {
                console.warn("Could not highlight documentation code block", xp)
              }
              return Ip.push(`<div class="DocsCodeBlockRow"><pre class="DocsCodeBlock" data-lang="${ip}"><code>${Sp}</code></pre>${Up(cp,"DocsCopyBlock")}</div>`), `\0PLACEHOLDER_${op}\0`
            })), op = op.replace(/(`{1,2})([^\n]+?)\1(?!`)/g, ((ip, Op, op) => {
              const Sp = Ip.length,
                xp = 2 === Op.length ? op.replace(/^ (.*) $/, "$1") : op;
              let Lp = yp(xp);
              try {
                "apiReference" !== pp && "callbacks" !== pp || (Lp = Dp.d.highlight(xp.trimEnd().replaceAll("\\|", "|"), {
                  language: "typescript"
                }).value)
              } catch (Yp) {
                console.warn("Could not highlight documentation snippet", Yp)
              }
              return Ip.push(`<span class="DocsInlineCodeRow"><code class="DocsInlineCode">${Lp}</code>${Up(cp,"DocsCopyInline")}</span>`), `\0PLACEHOLDER_${Sp}\0`
            })), op = yp(op), op = op.replace(/^#### (.+)$/gm, '<h4 class="DocsH4">$1</h4>'), op = op.replace(/^### (.+)$/gm, '<h3 class="DocsH3">$1</h3>'), op = op.replace(/^## (.+)$/gm, '<h2 class="DocsH2">$1</h2>'), op = op.replace(/^# (.+)$/gm, '<h1 class="DocsH1">$1</h1>'), op = op.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"), op = op.replace(/\[([^\]]+)\]\(([^)]+)\)/g, ((pp, ip, cp) => cp.startsWith("#") ? `<a class="DocsAnchor" data-id="${cp}">${ip}</a>` : `<a href="${cp}" target="_blank" rel="noopener noreferrer">${ip}</a>`)), op = op.replace(/^(\|.+\|)\n(\|[\s:\-|]+\|)\n((?:\|.+\|\s*\r?\n?)*)/gm, ((pp, ip, cp, Op) => `<table class="DocsTable"><thead><tr>${ip.split("|").slice(1,-1).map((pp=>`<th>${pp.trim()}</th>`)).join("")}</tr></thead><tbody>${Op.trim().split("\n").map((pp=>`<tr>${pp.split("|").slice(1,-1).map((pp=>`<td>${pp.trim()}</td>`)).join("")}</tr>`)).join("")}</tbody></table>`)), op = op.replace(/(?:^[ \t]*([*-])[ \t]+.+(?:\n|$))+/gm, ((pp, ip) => function(pp, ip) {
              const cp = "*" === ip,
                Op = [];
              for (const xp of pp.split("\n")) {
                const pp = xp.match(/^([ \t]*)(?:[*-])[ \t]+(.+)$/);
                pp && Op.push({
                  indent: pp[1].replace(/\t/g, "  ").length,
                  content: pp[2]
                })
              }
              let op = "";
              const Ip = [],
                Sp = cp ? "ol" : "ul";
              for (const {
                  indent: xp,
                  content: Lp
                }
                of Op) {
                for (; Ip.length > 0 && xp < Ip[Ip.length - 1];) op += `</${Sp}></li>`, Ip.pop();
                (0 === Ip.length || xp > Ip[Ip.length - 1]) && (Ip.length > 0 && (op = op.replace(/<\/li>$/, "")), op += `<${Sp} class="DocsList">`, Ip.push(xp)), op += `<li class="DocsListItem">${Lp}</li>`
              }
              for (; Ip.length > 0;) op += `</${Sp}>`, Ip.pop(), Ip.length > 0 && (op += "</li>");
              return op
            }(pp, ip))), op = op.replace(/\n{2,}/g, "\n<br/>\n");
            for (let Sp = 0; Sp < Ip.length; Sp++) op = op.replace(`\0PLACEHOLDER_${Sp}\0`, Ip[Sp]);
            if (Op) {
              const pp = yp(Op).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                ip = new RegExp(pp, "gi");
              op = op.replace(/([^<>]+)(?=<|$)/g, (pp => pp.replace(ip, (pp => `<mark class="DocsHighlight">${pp}</mark>`))))
            }
            return op
          }(Kp.id, Kp.content, ii, zp ? lp : void 0) : ""), [Kp, ii, zp, lp]);
        (0, Op.useEffect)((() => {
          const pp = Xp.current;
          if (!pp) return;
          const ip = pp => {
            var ip, cp, Op, op, Ip;
            const Sp = null === (ip = (cp = pp.target).closest) || void 0 === ip ? void 0 : ip.call(cp, ".DocsCopyButton");
            if (!Sp) return;
            pp.preventDefault(), pp.stopPropagation();
            const xp = null !== (Op = null === (op = Sp.parentElement) || void 0 === op || null === (Ip = op.querySelector("code")) || void 0 === Ip ? void 0 : Ip.textContent) && void 0 !== Op ? Op : "";
            navigator.clipboard.writeText(xp.trimEnd()).then((() => {
              Sp.classList.add("Copied"), setTimeout((() => {
                Sp.classList.remove("Copied")
              }), 1500)
            })).catch((pp => {
              console.warn("Could not copy documentation code", pp)
            }))
          };
          return pp.addEventListener("click", ip, !0), () => {
            pp.removeEventListener("click", ip, !0)
          }
        }), []);
        const [Oi, oi] = (0, Op.useState)(0);
        (0, Op.useEffect)((() => {
          if (!zp || !Xp.current) return void oi(0);
          const pp = Xp.current.querySelectorAll(".DocsHighlight").length;
          oi(pp)
        }), [zp, ci]), (0, Op.useEffect)((() => {
          if (null === Np || !Xp.current) return;
          Tp(null);
          const pp = Xp.current.querySelectorAll(".DocsHighlight");
          if (0 === pp.length) return;
          const ip = Math.min(Np, pp.length - 1);
          Bp(ip), pp.forEach((pp => {
            pp.classList.remove("DocsHighlightActive")
          })), pp[ip].classList.add("DocsHighlightActive"), pp[ip].scrollIntoView({
            block: "center",
            behavior: "smooth"
          })
        }), [Np, ci]);
        const Ii = (0, Op.useCallback)((pp => {
            if (!Xp.current) return;
            const ip = Xp.current.querySelectorAll(".DocsHighlight");
            if (0 === ip.length) return;
            const cp = (Jp + pp + ip.length) % ip.length;
            Bp(cp), Tp(cp)
          }), [Jp]),
          Si = (0, Op.useCallback)((pp => {
            var ip;
            const cp = null === (ip = ep[pp]) || void 0 === ip ? void 0 : ip.tabStep;
            cp && cp === gp && (0, dp.d)(cp), pp !== Mp ? (bp(!0), Cp(pp), Bp(0), Xp.current && (Xp.current.scrollTop = 0), zp && Tp(0)) : bp(!fp)
          }), [zp, Mp, fp, gp]),
          xi = (0, Op.useCallback)((pp => {
            var ip;
            const cp = Array.from((null === (ip = Xp.current) || void 0 === ip ? void 0 : ip.querySelectorAll(".DocsH2, .DocsH3")) || []).find((ip => {
              var cp;
              return null === (cp = ip.textContent) || void 0 === cp ? void 0 : cp.includes(pp)
            }));
            cp && cp.scrollIntoView({
              block: "start",
              behavior: "smooth"
            })
          }), [Xp]),
          Li = (0, Op.useCallback)((pp => {
            var ip, cp;
            const Op = null !== (ip = null === (cp = Ep.current) || void 0 === cp ? void 0 : cp.clientWidth) && void 0 !== ip ? ip : window.innerWidth,
              op = Math.max(120, Op - 200);
            return Math.min(Math.max(pp, 120), op)
          }), []),
          Yi = (0, Op.useCallback)((() => {
            var pp;
            np.current && (np.current = !1, null === (pp = Ep.current) || void 0 === pp || pp.classList.remove("DocsSidebarResizing"))
          }), []),
          Di = (0, Op.useCallback)((pp => {
            var ip;
            pp.preventDefault(), np.current = !0, null === (ip = Ep.current) || void 0 === ip || ip.classList.add("DocsSidebarResizing")
          }), []);
        (0, Op.useEffect)((() => {
          const pp = Ep.current,
            ip = pp => {
              if (!np.current || !Ep.current) return;
              const ip = Ep.current.getBoundingClientRect().left;
              ap(Li(pp.clientX - ip))
            };
          return window.addEventListener("mousemove", ip), window.addEventListener("mouseup", Yi), () => {
            window.removeEventListener("mousemove", ip), window.removeEventListener("mouseup", Yi), null === pp || void 0 === pp || pp.classList.remove("DocsSidebarResizing")
          }
        }), [Li, Yi]);
        const Ai = (0, Op.useCallback)((pp => {
          if (pp) {
            const [ip, cp] = pp.slice(1).split("-");
            cp && (Fp.current = {
              docId: ip,
              subsection: cp
            }), ip && Si(ip)
          }
        }), [Si]);
        (0, Op.useEffect)((() => {
          const pp = Fp.current;
          pp && Mp === pp.docId && (setTimeout((() => {
            xi(pp.subsection)
          }), 0), Fp.current = null)
        })), (0, Op.useEffect)((() => {
          if (!Xp.current) return;
          Xp.current.querySelectorAll("a.DocsAnchor").forEach((pp => {
            pp.addEventListener("click", (ip => {
              ip.preventDefault(), Ai(pp.dataset.id)
            }))
          }))
        }), [Mp, Ai]);
        const Pi = Object.values(ep).find((pp => (null === pp || void 0 === pp ? void 0 : pp.pageStep) === gp));
        return (0, Wp.jsx)(Hp.k, {
          tutorial: "docsOverview",
          step: null !== (jp = null === Pi || void 0 === Pi ? void 0 : Pi.pageStep) && void 0 !== jp ? jp : "docsPanel",
          text: Vp(null !== (kp = null === Pi || void 0 === Pi ? void 0 : Pi.pageText) && void 0 !== kp ? kp : "codeEditor:tutorialDocsPanel"),
          enabled: qp,
          placement: "left",
          onPrevious: Pi ? void 0 : Rp,
          children: (0, Wp.jsxs)("div", {
            className: "DocsPanel",
            ref: Ep,
            children: [(0, Wp.jsxs)("div", {
              className: "DocsSidebar",
              style: {
                width: hp,
                minWidth: hp,
                maxWidth: hp
              },
              children: [(0, Wp.jsx)(Ip.c, {
                className: "DocsSearch",
                placeholderText: "\ud83d\udd0e Search docs...",
                onValueChange: pp => {
                  Qp(pp), Bp(0), Tp(0)
                }
              }, Gp), (0, Wp.jsx)("div", {
                className: "DocsNavList",
                children: zp ? sp.map((pp => (0, Wp.jsxs)("div", {
                  className: xp()("DocsNavItem", "SearchResult", {
                    Active: pp.doc.id === (null === Kp || void 0 === Kp ? void 0 : Kp.id)
                  }),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    Si(pp.doc.id)
                  },
                  children: [(0, Wp.jsxs)("div", {
                    className: "SearchResultTitle",
                    children: [pp.doc.title, (0, Wp.jsx)("span", {
                      className: "SearchResultCount",
                      children: pp.matchCount
                    })]
                  }), (0, Wp.jsx)("div", {
                    className: "SearchResultSnippet",
                    children: wp(pp.snippet, lp)
                  })]
                }, pp.doc.id))) : op.d.map((pp => {
                  const ip = (0, Wp.jsxs)("div", {
                      className: xp()("DocsNavItem", {
                        Active: pp.id === (null === Kp || void 0 === Kp ? void 0 : Kp.id)
                      }),
                      "data-pad-focusable": !0,
                      onClick: () => {
                        Si(pp.id)
                      },
                      children: [(0, Wp.jsx)("span", {
                        className: "DocsNavItemTitle",
                        children: pp.title
                      }), pp.subsections && pp.id === (null === Kp || void 0 === Kp ? void 0 : Kp.id) && fp && (0, Wp.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, Wp.jsx)(vp.d, {
                          name: "angle-down"
                        })
                      }), pp.subsections && (pp.id !== (null === Kp || void 0 === Kp ? void 0 : Kp.id) || !fp) && (0, Wp.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, Wp.jsx)(vp.d, {
                          name: "angle-up"
                        })
                      })]
                    }),
                    cp = ep[pp.id];
                  return (0, Wp.jsxs)(Op.Fragment, {
                    children: [cp && (0, Wp.jsx)(Hp.k, {
                      tutorial: "docsOverview",
                      step: cp.tabStep,
                      text: Vp(cp.tabText),
                      enabled: qp,
                      placement: "left",
                      waitForClick: !0,
                      children: ip
                    }), !cp && ip, fp && pp.subsections && pp.id === (null === Kp || void 0 === Kp ? void 0 : Kp.id) && pp.subsections.map((pp => (0, Wp.jsx)("div", {
                      className: "DocsNavItem DocsSubsection",
                      "data-pad-focusable": !0,
                      onClick: () => {
                        xi(pp)
                      },
                      children: pp
                    }, pp)))]
                  }, pp.id)
                }))
              }), (0, Wp.jsx)("div", {
                className: "DocsSidebarButtonContainer",
                children: (0, Wp.jsx)(tp.f, {
                  tooltipInner: Vp("codeEditor:popOutDocsTooltip"),
                  placement: "top",
                  children: (0, Wp.jsx)(Lp.f, {
                    className: "DocsSidebarButton",
                    onClick: mp,
                    children: Vp("codeEditor:popOutDocs")
                  })
                })
              })]
            }), (0, Wp.jsx)("div", {
              className: "DocsSidebarResizeHandle",
              onMouseDown: Di
            }), (0, Wp.jsxs)("div", {
              className: "DocsContentWrapper",
              children: [zp && Oi > 0 && (0, Wp.jsxs)("div", {
                className: "DocsMatchNav",
                children: [(0, Wp.jsxs)("span", {
                  className: "DocsMatchNavLabel",
                  children: [Jp + 1, " / ", Oi]
                }), (0, Wp.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    Ii(-1)
                  },
                  children: "\u25b2"
                }), (0, Wp.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    Ii(1)
                  },
                  children: "\u25bc"
                })]
              }), (0, Wp.jsx)("div", {
                className: "DocsContent",
                ref: Xp,
                dangerouslySetInnerHTML: {
                  __html: ci
                }
              })]
            })]
          })
        })
      }))
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);