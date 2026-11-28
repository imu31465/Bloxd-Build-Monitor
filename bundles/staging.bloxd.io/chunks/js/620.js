export const id = 620;
export const ids = [620];
export const modules = {
  53922: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      default: () => wd
    });
    var Wd = md(66),
      Fd = md(5513),
      Rd = md(1808),
      Xd = md(1155),
      Kd = md.n(Xd),
      hd = md(1572),
      vd = md(1238),
      Qd = md(5489),
      td = md(5495),
      od = md(5504),
      Nd = md(1341);

    function qd(dd) {
      return dd.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    Qd.e.registerLanguage("javascript", td.b), Qd.e.registerLanguage("typescript", od.e);

    function Hd(dd, Od) {
      const md = qd(dd).replace(/"/g, "&quot;");
      return `<button type="button" class="DocsCopyButton ${Od}" title="${md}" aria-label="${md}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5"/><path d="M10.5 3.5V1.5H1.5v9h2"/></svg><svg class="DocsCopiedIcon" viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 8.5l3.5 3.5 7.5-7.5"/></svg></button>`
    }

    function yd(dd, Od) {
      const md = [],
        Wd = dd.toLowerCase(),
        Fd = Od.toLowerCase();
      let Rd = 0;
      for (; Rd < dd.length;) {
        const Xd = Wd.indexOf(Fd, Rd);
        if (-1 === Xd) {
          md.push(dd.slice(Rd));
          break
        }
        Xd > Rd && md.push(dd.slice(Rd, Xd)), md.push((0, Nd.jsx)("mark", {
          className: "DocsHighlight",
          children: dd.slice(Xd, Xd + Od.length)
        }, Xd)), Rd = Xd + Od.length
      }
      return md
    }
    var bd = md(1443),
      Td = md(1471),
      pd = md(38431),
      Yd = md(38439);
    const gd = {
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
      wd = (0, Wd.memo)((function(dd) {
        var Od, md, Xd, td, od, wd, Ed;
        let {
          popOutDocs: Jd,
          hideDocs: Ud,
          tutorialEnabled: xd
        } = dd;
        const [Bd, Sd] = (0, Wd.useState)(Fd.c[0].id), sd = (0, Wd.useRef)(null), ud = (0, Wd.useRef)(null), [Vd, Ad] = (0, Wd.useState)(""), [rd, Gd] = (0, Wd.useState)(0), [nd, Ld] = (0, Wd.useState)(null), [Pd, zd] = (0, Wd.useState)(!1), [cd, jd] = (0, Wd.useState)(160), Dd = (0, Wd.useRef)(!1), ed = (0, Wd.useRef)(null), Id = (0, pd.j)("docsOverview"), [ld, Cd] = (0, Wd.useState)(0), Zd = Object.values(gd).some((dd => (null === dd || void 0 === dd ? void 0 : dd.tabStep) === Id));
        (0, Wd.useEffect)((() => {
          Zd && Vd.length > 0 && (Ad(""), Cd((dd => dd + 1)))
        }), [Zd, Vd]);
        const kd = Vd.length > 0,
          fd = (0, Wd.useMemo)((() => function(dd) {
            if (!dd) return [];
            const Od = dd.toLowerCase(),
              md = [];
            for (const Wd of Fd.c) {
              const dd = Wd.content.toLowerCase();
              let Fd = 0,
                Rd = -1,
                Xd = 0,
                Kd = dd.indexOf(Od, Xd);
              for (; - 1 !== Kd;) - 1 === Rd && (Rd = Kd), Fd++, Xd = Kd + Od.length, Kd = dd.indexOf(Od, Xd);
              if (0 === Fd) continue;
              const hd = Math.max(0, Rd - 40),
                vd = Math.min(Wd.content.length, Rd + Od.length + 40),
                Qd = (hd > 0 ? "..." : "") + Wd.content.slice(hd, vd).replace(/\n/g, " ") + (vd < Wd.content.length ? "..." : "");
              md.push({
                doc: Wd,
                matchCount: Fd,
                snippet: Qd
              })
            }
            return md.sort(((dd, Od) => Od.matchCount - dd.matchCount)), md
          }(Vd)), [Vd]),
          Md = kd ? null !== (Od = null !== (md = null === (Xd = fd.find((dd => dd.doc.id === Bd))) || void 0 === Xd ? void 0 : Xd.doc) && void 0 !== md ? md : null === (td = fd[0]) || void 0 === td ? void 0 : td.doc) && void 0 !== Od ? Od : null : null !== (od = Fd.c.find((dd => dd.id === Bd))) && void 0 !== od ? od : Fd.c[0],
          {
            t: dO
          } = (0, vd.G)(),
          OO = dO("codeEditor:copySnippet"),
          mO = (0, Wd.useMemo)((() => Md ? function(dd, Od, md, Wd) {
            let Fd = Od;
            Fd = Fd.replace(/\r\n/g, "\n");
            const Rd = [];
            Fd = Fd.replace(/```(\w*)\n([\s\S]*?)```/g, ((dd, Od, Wd) => {
              const Fd = Rd.length;
              let Xd = qd(Wd);
              try {
                Xd = Qd.e.highlight(Wd.trimEnd(), {
                  language: Od
                }).value
              } catch (Kd) {
                console.warn("Could not highlight documentation code block", Kd)
              }
              return Rd.push(`<div class="DocsCodeBlockRow"><pre class="DocsCodeBlock" data-lang="${Od}"><code>${Xd}</code></pre>${Hd(md,"DocsCopyBlock")}</div>`), `\0PLACEHOLDER_${Fd}\0`
            })), Fd = Fd.replace(/(`{1,2})([^\n]+?)\1(?!`)/g, ((Od, Wd, Fd) => {
              const Xd = Rd.length,
                Kd = 2 === Wd.length ? Fd.replace(/^ (.*) $/, "$1") : Fd;
              let hd = qd(Kd);
              try {
                "apiReference" !== dd && "callbacks" !== dd || (hd = Qd.e.highlight(Kd.trimEnd().replaceAll("\\|", "|"), {
                  language: "typescript"
                }).value)
              } catch (vd) {
                console.warn("Could not highlight documentation snippet", vd)
              }
              return Rd.push(`<span class="DocsInlineCodeRow"><code class="DocsInlineCode">${hd}</code>${Hd(md,"DocsCopyInline")}</span>`), `\0PLACEHOLDER_${Xd}\0`
            })), Fd = qd(Fd), Fd = Fd.replace(/^#### (.+)$/gm, '<h4 class="DocsH4">$1</h4>'), Fd = Fd.replace(/^### (.+)$/gm, '<h3 class="DocsH3">$1</h3>'), Fd = Fd.replace(/^## (.+)$/gm, '<h2 class="DocsH2">$1</h2>'), Fd = Fd.replace(/^# (.+)$/gm, '<h1 class="DocsH1">$1</h1>'), Fd = Fd.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"), Fd = Fd.replace(/\[([^\]]+)\]\(([^)]+)\)/g, ((dd, Od, md) => md.startsWith("#") ? `<a class="DocsAnchor" data-id="${md}">${Od}</a>` : `<a href="${md}" target="_blank" rel="noopener noreferrer">${Od}</a>`)), Fd = Fd.replace(/^(\|.+\|)\n(\|[\s:\-|]+\|)\n((?:\|.+\|\s*\r?\n?)*)/gm, ((dd, Od, md, Wd) => `<table class="DocsTable"><thead><tr>${Od.split("|").slice(1,-1).map((dd=>`<th>${dd.trim()}</th>`)).join("")}</tr></thead><tbody>${Wd.trim().split("\n").map((dd=>`<tr>${dd.split("|").slice(1,-1).map((dd=>`<td>${dd.trim()}</td>`)).join("")}</tr>`)).join("")}</tbody></table>`)), Fd = Fd.replace(/(?:^[ \t]*([*-])[ \t]+.+(?:\n|$))+/gm, ((dd, Od) => function(dd, Od) {
              const md = "*" === Od,
                Wd = [];
              for (const Kd of dd.split("\n")) {
                const dd = Kd.match(/^([ \t]*)(?:[*-])[ \t]+(.+)$/);
                dd && Wd.push({
                  indent: dd[1].replace(/\t/g, "  ").length,
                  content: dd[2]
                })
              }
              let Fd = "";
              const Rd = [],
                Xd = md ? "ol" : "ul";
              for (const {
                  indent: Kd,
                  content: hd
                }
                of Wd) {
                for (; Rd.length > 0 && Kd < Rd[Rd.length - 1];) Fd += `</${Xd}></li>`, Rd.pop();
                (0 === Rd.length || Kd > Rd[Rd.length - 1]) && (Rd.length > 0 && (Fd = Fd.replace(/<\/li>$/, "")), Fd += `<${Xd} class="DocsList">`, Rd.push(Kd)), Fd += `<li class="DocsListItem">${hd}</li>`
              }
              for (; Rd.length > 0;) Fd += `</${Xd}>`, Rd.pop(), Rd.length > 0 && (Fd += "</li>");
              return Fd
            }(dd, Od))), Fd = Fd.replace(/\n{2,}/g, "\n<br/>\n");
            for (let Xd = 0; Xd < Rd.length; Xd++) Fd = Fd.replace(`\0PLACEHOLDER_${Xd}\0`, Rd[Xd]);
            if (Wd) {
              const dd = qd(Wd).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                Od = new RegExp(dd, "gi");
              Fd = Fd.replace(/([^<>]+)(?=<|$)/g, (dd => dd.replace(Od, (dd => `<mark class="DocsHighlight">${dd}</mark>`))))
            }
            return Fd
          }(Md.id, Md.content, OO, kd ? Vd : void 0) : ""), [Md, OO, kd, Vd]);
        (0, Wd.useEffect)((() => {
          const dd = ud.current;
          if (!dd) return;
          const Od = dd => {
            var Od, md, Wd, Fd, Rd;
            const Xd = null === (Od = (md = dd.target).closest) || void 0 === Od ? void 0 : Od.call(md, ".DocsCopyButton");
            if (!Xd) return;
            dd.preventDefault(), dd.stopPropagation();
            const Kd = null !== (Wd = null === (Fd = Xd.parentElement) || void 0 === Fd || null === (Rd = Fd.querySelector("code")) || void 0 === Rd ? void 0 : Rd.textContent) && void 0 !== Wd ? Wd : "";
            navigator.clipboard.writeText(Kd.trimEnd()).then((() => {
              Xd.classList.add("Copied"), setTimeout((() => {
                Xd.classList.remove("Copied")
              }), 1500)
            })).catch((dd => {
              console.warn("Could not copy documentation code", dd)
            }))
          };
          return dd.addEventListener("click", Od, !0), () => {
            dd.removeEventListener("click", Od, !0)
          }
        }), []);
        const [WO, FO] = (0, Wd.useState)(0);
        (0, Wd.useEffect)((() => {
          if (!kd || !ud.current) return void FO(0);
          const dd = ud.current.querySelectorAll(".DocsHighlight").length;
          FO(dd)
        }), [kd, mO]), (0, Wd.useEffect)((() => {
          if (null === nd || !ud.current) return;
          Ld(null);
          const dd = ud.current.querySelectorAll(".DocsHighlight");
          if (0 === dd.length) return;
          const Od = Math.min(nd, dd.length - 1);
          Gd(Od), dd.forEach((dd => {
            dd.classList.remove("DocsHighlightActive")
          })), dd[Od].classList.add("DocsHighlightActive"), dd[Od].scrollIntoView({
            block: "center",
            behavior: "smooth"
          })
        }), [nd, mO]);
        const RO = (0, Wd.useCallback)((dd => {
            if (!ud.current) return;
            const Od = ud.current.querySelectorAll(".DocsHighlight");
            if (0 === Od.length) return;
            const md = (rd + dd + Od.length) % Od.length;
            Gd(md), Ld(md)
          }), [rd]),
          XO = (0, Wd.useCallback)((dd => {
            var Od;
            const md = null === (Od = gd[dd]) || void 0 === Od ? void 0 : Od.tabStep;
            md && md === Id && (0, Yd.e)(md), dd !== Bd ? (zd(!0), Sd(dd), Gd(0), ud.current && (ud.current.scrollTop = 0), kd && Ld(0)) : zd(!Pd)
          }), [kd, Bd, Pd, Id]),
          KO = (0, Wd.useCallback)((dd => {
            var Od;
            const md = Array.from((null === (Od = ud.current) || void 0 === Od ? void 0 : Od.querySelectorAll(".DocsH2, .DocsH3")) || []).find((Od => {
              var md;
              return null === (md = Od.textContent) || void 0 === md ? void 0 : md.includes(dd)
            }));
            md && md.scrollIntoView({
              block: "start",
              behavior: "smooth"
            })
          }), [ud]),
          hO = (0, Wd.useCallback)((dd => {
            var Od, md;
            const Wd = null !== (Od = null === (md = sd.current) || void 0 === md ? void 0 : md.clientWidth) && void 0 !== Od ? Od : window.innerWidth,
              Fd = Math.max(120, Wd - 200);
            return Math.min(Math.max(dd, 120), Fd)
          }), []),
          vO = (0, Wd.useCallback)((() => {
            var dd;
            Dd.current && (Dd.current = !1, null === (dd = sd.current) || void 0 === dd || dd.classList.remove("DocsSidebarResizing"))
          }), []),
          QO = (0, Wd.useCallback)((dd => {
            var Od;
            dd.preventDefault(), Dd.current = !0, null === (Od = sd.current) || void 0 === Od || Od.classList.add("DocsSidebarResizing")
          }), []);
        (0, Wd.useEffect)((() => {
          const dd = sd.current,
            Od = dd => {
              if (!Dd.current || !sd.current) return;
              const Od = sd.current.getBoundingClientRect().left;
              jd(hO(dd.clientX - Od))
            };
          return window.addEventListener("mousemove", Od), window.addEventListener("mouseup", vO), () => {
            window.removeEventListener("mousemove", Od), window.removeEventListener("mouseup", vO), null === dd || void 0 === dd || dd.classList.remove("DocsSidebarResizing")
          }
        }), [hO, vO]);
        const tO = (0, Wd.useCallback)((dd => {
          if (dd) {
            const [Od, md] = dd.slice(1).split("-");
            md && (ed.current = {
              docId: Od,
              subsection: md
            }), Od && XO(Od)
          }
        }), [XO]);
        (0, Wd.useEffect)((() => {
          const dd = ed.current;
          dd && Bd === dd.docId && (setTimeout((() => {
            KO(dd.subsection)
          }), 0), ed.current = null)
        })), (0, Wd.useEffect)((() => {
          if (!ud.current) return;
          ud.current.querySelectorAll("a.DocsAnchor").forEach((dd => {
            dd.addEventListener("click", (Od => {
              Od.preventDefault(), tO(dd.dataset.id)
            }))
          }))
        }), [Bd, tO]);
        const oO = Object.values(gd).find((dd => (null === dd || void 0 === dd ? void 0 : dd.pageStep) === Id));
        return (0, Nd.jsx)(pd.h, {
          tutorial: "docsOverview",
          step: null !== (wd = null === oO || void 0 === oO ? void 0 : oO.pageStep) && void 0 !== wd ? wd : "docsPanel",
          text: dO(null !== (Ed = null === oO || void 0 === oO ? void 0 : oO.pageText) && void 0 !== Ed ? Ed : "codeEditor:tutorialDocsPanel"),
          enabled: xd,
          placement: "left",
          onPrevious: oO ? void 0 : Ud,
          children: (0, Nd.jsxs)("div", {
            className: "DocsPanel",
            ref: sd,
            children: [(0, Nd.jsxs)("div", {
              className: "DocsSidebar",
              style: {
                width: cd,
                minWidth: cd,
                maxWidth: cd
              },
              children: [(0, Nd.jsx)(Rd.c, {
                className: "DocsSearch",
                placeholderText: "\ud83d\udd0e Search docs...",
                onValueChange: dd => {
                  Ad(dd), Gd(0), Ld(0)
                }
              }, ld), (0, Nd.jsx)("div", {
                className: "DocsNavList",
                children: kd ? fd.map((dd => (0, Nd.jsxs)("div", {
                  className: Kd()("DocsNavItem", "SearchResult", {
                    Active: dd.doc.id === (null === Md || void 0 === Md ? void 0 : Md.id)
                  }),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    XO(dd.doc.id)
                  },
                  children: [(0, Nd.jsxs)("div", {
                    className: "SearchResultTitle",
                    children: [dd.doc.title, (0, Nd.jsx)("span", {
                      className: "SearchResultCount",
                      children: dd.matchCount
                    })]
                  }), (0, Nd.jsx)("div", {
                    className: "SearchResultSnippet",
                    children: yd(dd.snippet, Vd)
                  })]
                }, dd.doc.id))) : Fd.c.map((dd => {
                  const Od = (0, Nd.jsxs)("div", {
                      className: Kd()("DocsNavItem", {
                        Active: dd.id === (null === Md || void 0 === Md ? void 0 : Md.id)
                      }),
                      "data-pad-focusable": !0,
                      onClick: () => {
                        XO(dd.id)
                      },
                      children: [(0, Nd.jsx)("span", {
                        className: "DocsNavItemTitle",
                        children: dd.title
                      }), dd.subsections && dd.id === (null === Md || void 0 === Md ? void 0 : Md.id) && Pd && (0, Nd.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, Nd.jsx)(bd.c, {
                          name: "angle-down"
                        })
                      }), dd.subsections && (dd.id !== (null === Md || void 0 === Md ? void 0 : Md.id) || !Pd) && (0, Nd.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, Nd.jsx)(bd.c, {
                          name: "angle-up"
                        })
                      })]
                    }),
                    md = gd[dd.id];
                  return (0, Nd.jsxs)(Wd.Fragment, {
                    children: [md && (0, Nd.jsx)(pd.h, {
                      tutorial: "docsOverview",
                      step: md.tabStep,
                      text: dO(md.tabText),
                      enabled: xd,
                      placement: "left",
                      waitForClick: !0,
                      children: Od
                    }), !md && Od, Pd && dd.subsections && dd.id === (null === Md || void 0 === Md ? void 0 : Md.id) && dd.subsections.map((dd => (0, Nd.jsx)("div", {
                      className: "DocsNavItem DocsSubsection",
                      "data-pad-focusable": !0,
                      onClick: () => {
                        KO(dd)
                      },
                      children: dd
                    }, dd)))]
                  }, dd.id)
                }))
              }), (0, Nd.jsx)("div", {
                className: "DocsSidebarButtonContainer",
                children: (0, Nd.jsx)(Td.g, {
                  tooltipInner: dO("codeEditor:popOutDocsTooltip"),
                  placement: "top",
                  children: (0, Nd.jsx)(hd.g, {
                    className: "DocsSidebarButton",
                    onClick: Jd,
                    children: dO("codeEditor:popOutDocs")
                  })
                })
              })]
            }), (0, Nd.jsx)("div", {
              className: "DocsSidebarResizeHandle",
              onMouseDown: QO
            }), (0, Nd.jsxs)("div", {
              className: "DocsContentWrapper",
              children: [kd && WO > 0 && (0, Nd.jsxs)("div", {
                className: "DocsMatchNav",
                children: [(0, Nd.jsxs)("span", {
                  className: "DocsMatchNavLabel",
                  children: [rd + 1, " / ", WO]
                }), (0, Nd.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    RO(-1)
                  },
                  children: "\u25b2"
                }), (0, Nd.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    RO(1)
                  },
                  children: "\u25bc"
                })]
              }), (0, Nd.jsx)("div", {
                className: "DocsContent",
                ref: ud,
                dangerouslySetInnerHTML: {
                  __html: mO
                }
              })]
            })]
          })
        })
      }))
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);