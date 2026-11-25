export const id = 305;
export const ids = [305];
export const modules = {
  41734: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      default: () => pu
    });
    var su = ju(58),
      Uu = ju(4931),
      Zu = ju(1723),
      Xu = ju(1105),
      lu = ju.n(Xu),
      qu = ju(1506),
      fu = ju(1244),
      Cu = ju(4899),
      bu = ju(4916),
      cu = ju(4925),
      Nu = ju(1154);

    function Ou(uu) {
      return uu.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    Cu.b.registerLanguage("javascript", bu.d), Cu.b.registerLanguage("typescript", cu.c);

    function Yu(uu, Eu) {
      const ju = Ou(uu).replace(/"/g, "&quot;");
      return `<button type="button" class="DocsCopyButton ${Eu}" title="${ju}" aria-label="${ju}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5"/><path d="M10.5 3.5V1.5H1.5v9h2"/></svg><svg class="DocsCopiedIcon" viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 8.5l3.5 3.5 7.5-7.5"/></svg></button>`
    }

    function hu(uu, Eu) {
      const ju = [],
        su = uu.toLowerCase(),
        Uu = Eu.toLowerCase();
      let Zu = 0;
      for (; Zu < uu.length;) {
        const Xu = su.indexOf(Uu, Zu);
        if (-1 === Xu) {
          ju.push(uu.slice(Zu));
          break
        }
        Xu > Zu && ju.push(uu.slice(Zu, Xu)), ju.push((0, Nu.jsx)("mark", {
          className: "DocsHighlight",
          children: uu.slice(Xu, Xu + Eu.length)
        }, Xu)), Zu = Xu + Eu.length
      }
      return ju
    }
    var Du = ju(1116),
      gu = ju(1419),
      Mu = ju(37282),
      eu = ju(37284);
    const Gu = {
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
      pu = (0, su.memo)((function(uu) {
        var Eu, ju, Xu, bu, cu, pu, wu;
        let {
          popOutDocs: Ju,
          hideDocs: du,
          tutorialEnabled: au
        } = uu;
        const [Pu, ou] = (0, su.useState)(Uu.d[0].id), ku = (0, su.useRef)(null), mu = (0, su.useRef)(null), [vu, Ku] = (0, su.useState)(""), [Vu, ru] = (0, su.useState)(0), [Qu, iu] = (0, su.useState)(null), [Wu, Su] = (0, su.useState)(!1), [Iu, Fu] = (0, su.useState)(160), Bu = (0, su.useRef)(!1), Lu = (0, su.useRef)(null), tu = (0, Mu.i)("docsOverview"), [xu, Tu] = (0, su.useState)(0), Hu = Object.values(Gu).some((uu => (null === uu || void 0 === uu ? void 0 : uu.tabStep) === tu));
        (0, su.useEffect)((() => {
          Hu && vu.length > 0 && (Ku(""), Tu((uu => uu + 1)))
        }), [Hu, vu]);
        const Au = vu.length > 0,
          nu = (0, su.useMemo)((() => function(uu) {
            if (!uu) return [];
            const Eu = uu.toLowerCase(),
              ju = [];
            for (const su of Uu.d) {
              const uu = su.content.toLowerCase();
              let Uu = 0,
                Zu = -1,
                Xu = 0,
                lu = uu.indexOf(Eu, Xu);
              for (; - 1 !== lu;) - 1 === Zu && (Zu = lu), Uu++, Xu = lu + Eu.length, lu = uu.indexOf(Eu, Xu);
              if (0 === Uu) continue;
              const qu = Math.max(0, Zu - 40),
                fu = Math.min(su.content.length, Zu + Eu.length + 40),
                Cu = (qu > 0 ? "..." : "") + su.content.slice(qu, fu).replace(/\n/g, " ") + (fu < su.content.length ? "..." : "");
              ju.push({
                doc: su,
                matchCount: Uu,
                snippet: Cu
              })
            }
            return ju.sort(((uu, Eu) => Eu.matchCount - uu.matchCount)), ju
          }(vu)), [vu]),
          yu = Au ? null !== (Eu = null !== (ju = null === (Xu = nu.find((uu => uu.doc.id === Pu))) || void 0 === Xu ? void 0 : Xu.doc) && void 0 !== ju ? ju : null === (bu = nu[0]) || void 0 === bu ? void 0 : bu.doc) && void 0 !== Eu ? Eu : null : null !== (cu = Uu.d.find((uu => uu.id === Pu))) && void 0 !== cu ? cu : Uu.d[0],
          {
            t: zu
          } = (0, fu.A)(),
          Ru = zu("codeEditor:copySnippet"),
          uE = (0, su.useMemo)((() => yu ? function(uu, Eu, ju, su) {
            let Uu = Eu;
            Uu = Uu.replace(/\r\n/g, "\n");
            const Zu = [];
            Uu = Uu.replace(/```(\w*)\n([\s\S]*?)```/g, ((uu, Eu, su) => {
              const Uu = Zu.length;
              let Xu = Ou(su);
              try {
                Xu = Cu.b.highlight(su.trimEnd(), {
                  language: Eu
                }).value
              } catch (lu) {
                console.warn("Could not highlight documentation code block", lu)
              }
              return Zu.push(`<div class="DocsCodeBlockRow"><pre class="DocsCodeBlock" data-lang="${Eu}"><code>${Xu}</code></pre>${Yu(ju,"DocsCopyBlock")}</div>`), `\0PLACEHOLDER_${Uu}\0`
            })), Uu = Uu.replace(/(`{1,2})([^\n]+?)\1(?!`)/g, ((Eu, su, Uu) => {
              const Xu = Zu.length,
                lu = 2 === su.length ? Uu.replace(/^ (.*) $/, "$1") : Uu;
              let qu = Ou(lu);
              try {
                "apiReference" !== uu && "callbacks" !== uu || (qu = Cu.b.highlight(lu.trimEnd().replaceAll("\\|", "|"), {
                  language: "typescript"
                }).value)
              } catch (fu) {
                console.warn("Could not highlight documentation snippet", fu)
              }
              return Zu.push(`<span class="DocsInlineCodeRow"><code class="DocsInlineCode">${qu}</code>${Yu(ju,"DocsCopyInline")}</span>`), `\0PLACEHOLDER_${Xu}\0`
            })), Uu = Ou(Uu), Uu = Uu.replace(/^#### (.+)$/gm, '<h4 class="DocsH4">$1</h4>'), Uu = Uu.replace(/^### (.+)$/gm, '<h3 class="DocsH3">$1</h3>'), Uu = Uu.replace(/^## (.+)$/gm, '<h2 class="DocsH2">$1</h2>'), Uu = Uu.replace(/^# (.+)$/gm, '<h1 class="DocsH1">$1</h1>'), Uu = Uu.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"), Uu = Uu.replace(/\[([^\]]+)\]\(([^)]+)\)/g, ((uu, Eu, ju) => ju.startsWith("#") ? `<a class="DocsAnchor" data-id="${ju}">${Eu}</a>` : `<a href="${ju}" target="_blank" rel="noopener noreferrer">${Eu}</a>`)), Uu = Uu.replace(/^(\|.+\|)\n(\|[\s:\-|]+\|)\n((?:\|.+\|\s*\r?\n?)*)/gm, ((uu, Eu, ju, su) => `<table class="DocsTable"><thead><tr>${Eu.split("|").slice(1,-1).map((uu=>`<th>${uu.trim()}</th>`)).join("")}</tr></thead><tbody>${su.trim().split("\n").map((uu=>`<tr>${uu.split("|").slice(1,-1).map((uu=>`<td>${uu.trim()}</td>`)).join("")}</tr>`)).join("")}</tbody></table>`)), Uu = Uu.replace(/(?:^[ \t]*([*-])[ \t]+.+(?:\n|$))+/gm, ((uu, Eu) => function(uu, Eu) {
              const ju = "*" === Eu,
                su = [];
              for (const lu of uu.split("\n")) {
                const uu = lu.match(/^([ \t]*)(?:[*-])[ \t]+(.+)$/);
                uu && su.push({
                  indent: uu[1].replace(/\t/g, "  ").length,
                  content: uu[2]
                })
              }
              let Uu = "";
              const Zu = [],
                Xu = ju ? "ol" : "ul";
              for (const {
                  indent: lu,
                  content: qu
                }
                of su) {
                for (; Zu.length > 0 && lu < Zu[Zu.length - 1];) Uu += `</${Xu}></li>`, Zu.pop();
                (0 === Zu.length || lu > Zu[Zu.length - 1]) && (Zu.length > 0 && (Uu = Uu.replace(/<\/li>$/, "")), Uu += `<${Xu} class="DocsList">`, Zu.push(lu)), Uu += `<li class="DocsListItem">${qu}</li>`
              }
              for (; Zu.length > 0;) Uu += `</${Xu}>`, Zu.pop(), Zu.length > 0 && (Uu += "</li>");
              return Uu
            }(uu, Eu))), Uu = Uu.replace(/\n{2,}/g, "\n<br/>\n");
            for (let Xu = 0; Xu < Zu.length; Xu++) Uu = Uu.replace(`\0PLACEHOLDER_${Xu}\0`, Zu[Xu]);
            if (su) {
              const uu = Ou(su).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                Eu = new RegExp(uu, "gi");
              Uu = Uu.replace(/([^<>]+)(?=<|$)/g, (uu => uu.replace(Eu, (uu => `<mark class="DocsHighlight">${uu}</mark>`))))
            }
            return Uu
          }(yu.id, yu.content, Ru, Au ? vu : void 0) : ""), [yu, Ru, Au, vu]);
        (0, su.useEffect)((() => {
          const uu = mu.current;
          if (!uu) return;
          const Eu = uu => {
            var Eu, ju, su, Uu, Zu;
            const Xu = null === (Eu = (ju = uu.target).closest) || void 0 === Eu ? void 0 : Eu.call(ju, ".DocsCopyButton");
            if (!Xu) return;
            uu.preventDefault(), uu.stopPropagation();
            const lu = null !== (su = null === (Uu = Xu.parentElement) || void 0 === Uu || null === (Zu = Uu.querySelector("code")) || void 0 === Zu ? void 0 : Zu.textContent) && void 0 !== su ? su : "";
            navigator.clipboard.writeText(lu.trimEnd()).then((() => {
              Xu.classList.add("Copied"), setTimeout((() => {
                Xu.classList.remove("Copied")
              }), 1500)
            })).catch((uu => {
              console.warn("Could not copy documentation code", uu)
            }))
          };
          return uu.addEventListener("click", Eu, !0), () => {
            uu.removeEventListener("click", Eu, !0)
          }
        }), []);
        const [EE, jE] = (0, su.useState)(0);
        (0, su.useEffect)((() => {
          if (!Au || !mu.current) return void jE(0);
          const uu = mu.current.querySelectorAll(".DocsHighlight").length;
          jE(uu)
        }), [Au, uE]), (0, su.useEffect)((() => {
          if (null === Qu || !mu.current) return;
          iu(null);
          const uu = mu.current.querySelectorAll(".DocsHighlight");
          if (0 === uu.length) return;
          const Eu = Math.min(Qu, uu.length - 1);
          ru(Eu), uu.forEach((uu => {
            uu.classList.remove("DocsHighlightActive")
          })), uu[Eu].classList.add("DocsHighlightActive"), uu[Eu].scrollIntoView({
            block: "center",
            behavior: "smooth"
          })
        }), [Qu, uE]);
        const sE = (0, su.useCallback)((uu => {
            if (!mu.current) return;
            const Eu = mu.current.querySelectorAll(".DocsHighlight");
            if (0 === Eu.length) return;
            const ju = (Vu + uu + Eu.length) % Eu.length;
            ru(ju), iu(ju)
          }), [Vu]),
          UE = (0, su.useCallback)((uu => {
            var Eu;
            const ju = null === (Eu = Gu[uu]) || void 0 === Eu ? void 0 : Eu.tabStep;
            ju && ju === tu && (0, eu.f)(ju), uu !== Pu ? (Su(!0), ou(uu), ru(0), mu.current && (mu.current.scrollTop = 0), Au && iu(0)) : Su(!Wu)
          }), [Au, Pu, Wu, tu]),
          ZE = (0, su.useCallback)((uu => {
            var Eu;
            const ju = Array.from((null === (Eu = mu.current) || void 0 === Eu ? void 0 : Eu.querySelectorAll(".DocsH2, .DocsH3")) || []).find((Eu => {
              var ju;
              return null === (ju = Eu.textContent) || void 0 === ju ? void 0 : ju.includes(uu)
            }));
            ju && ju.scrollIntoView({
              block: "start",
              behavior: "smooth"
            })
          }), [mu]),
          XE = (0, su.useCallback)((uu => {
            var Eu, ju;
            const su = null !== (Eu = null === (ju = ku.current) || void 0 === ju ? void 0 : ju.clientWidth) && void 0 !== Eu ? Eu : window.innerWidth,
              Uu = Math.max(120, su - 200);
            return Math.min(Math.max(uu, 120), Uu)
          }), []),
          lE = (0, su.useCallback)((() => {
            var uu;
            Bu.current && (Bu.current = !1, null === (uu = ku.current) || void 0 === uu || uu.classList.remove("DocsSidebarResizing"))
          }), []),
          qE = (0, su.useCallback)((uu => {
            var Eu;
            uu.preventDefault(), Bu.current = !0, null === (Eu = ku.current) || void 0 === Eu || Eu.classList.add("DocsSidebarResizing")
          }), []);
        (0, su.useEffect)((() => {
          const uu = ku.current,
            Eu = uu => {
              if (!Bu.current || !ku.current) return;
              const Eu = ku.current.getBoundingClientRect().left;
              Fu(XE(uu.clientX - Eu))
            };
          return window.addEventListener("mousemove", Eu), window.addEventListener("mouseup", lE), () => {
            window.removeEventListener("mousemove", Eu), window.removeEventListener("mouseup", lE), null === uu || void 0 === uu || uu.classList.remove("DocsSidebarResizing")
          }
        }), [XE, lE]);
        const fE = (0, su.useCallback)((uu => {
          if (uu) {
            const [Eu, ju] = uu.slice(1).split("-");
            ju && (Lu.current = {
              docId: Eu,
              subsection: ju
            }), Eu && UE(Eu)
          }
        }), [UE]);
        (0, su.useEffect)((() => {
          const uu = Lu.current;
          uu && Pu === uu.docId && (setTimeout((() => {
            ZE(uu.subsection)
          }), 0), Lu.current = null)
        })), (0, su.useEffect)((() => {
          if (!mu.current) return;
          mu.current.querySelectorAll("a.DocsAnchor").forEach((uu => {
            uu.addEventListener("click", (Eu => {
              Eu.preventDefault(), fE(uu.dataset.id)
            }))
          }))
        }), [Pu, fE]);
        const CE = Object.values(Gu).find((uu => (null === uu || void 0 === uu ? void 0 : uu.pageStep) === tu));
        return (0, Nu.jsx)(Mu.h, {
          tutorial: "docsOverview",
          step: null !== (pu = null === CE || void 0 === CE ? void 0 : CE.pageStep) && void 0 !== pu ? pu : "docsPanel",
          text: zu(null !== (wu = null === CE || void 0 === CE ? void 0 : CE.pageText) && void 0 !== wu ? wu : "codeEditor:tutorialDocsPanel"),
          enabled: au,
          placement: "left",
          onPrevious: CE ? void 0 : du,
          children: (0, Nu.jsxs)("div", {
            className: "DocsPanel",
            ref: ku,
            children: [(0, Nu.jsxs)("div", {
              className: "DocsSidebar",
              style: {
                width: Iu,
                minWidth: Iu,
                maxWidth: Iu
              },
              children: [(0, Nu.jsx)(Zu.d, {
                className: "DocsSearch",
                placeholderText: "\ud83d\udd0e Search docs...",
                onValueChange: uu => {
                  Ku(uu), ru(0), iu(0)
                }
              }, xu), (0, Nu.jsx)("div", {
                className: "DocsNavList",
                children: Au ? nu.map((uu => (0, Nu.jsxs)("div", {
                  className: lu()("DocsNavItem", "SearchResult", {
                    Active: uu.doc.id === (null === yu || void 0 === yu ? void 0 : yu.id)
                  }),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    UE(uu.doc.id)
                  },
                  children: [(0, Nu.jsxs)("div", {
                    className: "SearchResultTitle",
                    children: [uu.doc.title, (0, Nu.jsx)("span", {
                      className: "SearchResultCount",
                      children: uu.matchCount
                    })]
                  }), (0, Nu.jsx)("div", {
                    className: "SearchResultSnippet",
                    children: hu(uu.snippet, vu)
                  })]
                }, uu.doc.id))) : Uu.d.map((uu => {
                  const Eu = (0, Nu.jsxs)("div", {
                      className: lu()("DocsNavItem", {
                        Active: uu.id === (null === yu || void 0 === yu ? void 0 : yu.id)
                      }),
                      "data-pad-focusable": !0,
                      onClick: () => {
                        UE(uu.id)
                      },
                      children: [(0, Nu.jsx)("span", {
                        className: "DocsNavItemTitle",
                        children: uu.title
                      }), uu.subsections && uu.id === (null === yu || void 0 === yu ? void 0 : yu.id) && Wu && (0, Nu.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, Nu.jsx)(Du.e, {
                          name: "angle-down"
                        })
                      }), uu.subsections && (uu.id !== (null === yu || void 0 === yu ? void 0 : yu.id) || !Wu) && (0, Nu.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, Nu.jsx)(Du.e, {
                          name: "angle-up"
                        })
                      })]
                    }),
                    ju = Gu[uu.id];
                  return (0, Nu.jsxs)(su.Fragment, {
                    children: [ju && (0, Nu.jsx)(Mu.h, {
                      tutorial: "docsOverview",
                      step: ju.tabStep,
                      text: zu(ju.tabText),
                      enabled: au,
                      placement: "left",
                      waitForClick: !0,
                      children: Eu
                    }), !ju && Eu, Wu && uu.subsections && uu.id === (null === yu || void 0 === yu ? void 0 : yu.id) && uu.subsections.map((uu => (0, Nu.jsx)("div", {
                      className: "DocsNavItem DocsSubsection",
                      "data-pad-focusable": !0,
                      onClick: () => {
                        ZE(uu)
                      },
                      children: uu
                    }, uu)))]
                  }, uu.id)
                }))
              }), (0, Nu.jsx)("div", {
                className: "DocsSidebarButtonContainer",
                children: (0, Nu.jsx)(gu.e, {
                  tooltipInner: zu("codeEditor:popOutDocsTooltip"),
                  placement: "top",
                  children: (0, Nu.jsx)(qu.f, {
                    className: "DocsSidebarButton",
                    onClick: Ju,
                    children: zu("codeEditor:popOutDocs")
                  })
                })
              })]
            }), (0, Nu.jsx)("div", {
              className: "DocsSidebarResizeHandle",
              onMouseDown: qE
            }), (0, Nu.jsxs)("div", {
              className: "DocsContentWrapper",
              children: [Au && EE > 0 && (0, Nu.jsxs)("div", {
                className: "DocsMatchNav",
                children: [(0, Nu.jsxs)("span", {
                  className: "DocsMatchNavLabel",
                  children: [Vu + 1, " / ", EE]
                }), (0, Nu.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    sE(-1)
                  },
                  children: "\u25b2"
                }), (0, Nu.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    sE(1)
                  },
                  children: "\u25bc"
                })]
              }), (0, Nu.jsx)("div", {
                className: "DocsContent",
                ref: mu,
                dangerouslySetInnerHTML: {
                  __html: uE
                }
              })]
            })]
          })
        })
      }))
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);