export const id = 291;
export const ids = [291];
export const modules = {
  41063: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      default: () => Cu
    });
    var Eu = yu(64),
      Ku = yu(4513),
      Qu = yu(1617),
      mu = yu(1035),
      Ju = yu.n(mu),
      Nu = yu(1408),
      Xu = yu(1170),
      Vu = yu(4484),
      ru = yu(4499),
      Bu = yu(4507),
      xu = yu(1079);

    function Su(uu) {
      return uu.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    Vu.c.registerLanguage("javascript", ru.b), Vu.c.registerLanguage("typescript", Bu.c);

    function pu(uu, Ru) {
      const yu = Su(uu).replace(/"/g, "&quot;");
      return `<button type="button" class="DocsCopyButton ${Ru}" title="${yu}" aria-label="${yu}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5"/><path d="M10.5 3.5V1.5H1.5v9h2"/></svg><svg class="DocsCopiedIcon" viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 8.5l3.5 3.5 7.5-7.5"/></svg></button>`
    }

    function Tu(uu, Ru) {
      const yu = [],
        Eu = uu.toLowerCase(),
        Ku = Ru.toLowerCase();
      let Qu = 0;
      for (; Qu < uu.length;) {
        const mu = Eu.indexOf(Ku, Qu);
        if (-1 === mu) {
          yu.push(uu.slice(Qu));
          break
        }
        mu > Qu && yu.push(uu.slice(Qu, mu)), yu.push((0, xu.jsx)("mark", {
          className: "DocsHighlight",
          children: uu.slice(mu, mu + Ru.length)
        }, mu)), Qu = mu + Ru.length
      }
      return yu
    }
    var Wu = yu(1043),
      ju = yu(1325),
      Hu = yu(36650),
      du = yu(36656);
    const bu = {
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
      Cu = (0, Eu.memo)((function(uu) {
        var Ru, yu, mu, ru, Bu, Cu, ku;
        let {
          popOutDocs: eu,
          hideDocs: Au,
          tutorialEnabled: Du
        } = uu;
        const [Mu, Iu] = (0, Eu.useState)(Ku.c[0].id), Gu = (0, Eu.useRef)(null), Uu = (0, Eu.useRef)(null), [nu, su] = (0, Eu.useState)(""), [tu, lu] = (0, Eu.useState)(0), [gu, cu] = (0, Eu.useState)(null), [Lu, zu] = (0, Eu.useState)(!1), [Fu, wu] = (0, Eu.useState)(160), Zu = (0, Eu.useRef)(!1), hu = (0, Eu.useRef)(null), Pu = (0, Hu.l)("docsOverview"), [iu, Yu] = (0, Eu.useState)(0), ou = Object.values(bu).some((uu => (null === uu || void 0 === uu ? void 0 : uu.tabStep) === Pu));
        (0, Eu.useEffect)((() => {
          ou && nu.length > 0 && (su(""), Yu((uu => uu + 1)))
        }), [ou, nu]);
        const qu = nu.length > 0,
          Ou = (0, Eu.useMemo)((() => function(uu) {
            if (!uu) return [];
            const Ru = uu.toLowerCase(),
              yu = [];
            for (const Eu of Ku.c) {
              const uu = Eu.content.toLowerCase();
              let Ku = 0,
                Qu = -1,
                mu = 0,
                Ju = uu.indexOf(Ru, mu);
              for (; - 1 !== Ju;) - 1 === Qu && (Qu = Ju), Ku++, mu = Ju + Ru.length, Ju = uu.indexOf(Ru, mu);
              if (0 === Ku) continue;
              const Nu = Math.max(0, Qu - 40),
                Xu = Math.min(Eu.content.length, Qu + Ru.length + 40),
                Vu = (Nu > 0 ? "..." : "") + Eu.content.slice(Nu, Xu).replace(/\n/g, " ") + (Xu < Eu.content.length ? "..." : "");
              yu.push({
                doc: Eu,
                matchCount: Ku,
                snippet: Vu
              })
            }
            return yu.sort(((uu, Ru) => Ru.matchCount - uu.matchCount)), yu
          }(nu)), [nu]),
          vu = qu ? null !== (Ru = null !== (yu = null === (mu = Ou.find((uu => uu.doc.id === Mu))) || void 0 === mu ? void 0 : mu.doc) && void 0 !== yu ? yu : null === (ru = Ou[0]) || void 0 === ru ? void 0 : ru.doc) && void 0 !== Ru ? Ru : null : null !== (Bu = Ku.c.find((uu => uu.id === Mu))) && void 0 !== Bu ? Bu : Ku.c[0],
          {
            t: au
          } = (0, Xu.E)(),
          fu = au("codeEditor:copySnippet"),
          uR = (0, Eu.useMemo)((() => vu ? function(uu, Ru, yu, Eu) {
            let Ku = Ru;
            Ku = Ku.replace(/\r\n/g, "\n");
            const Qu = [];
            Ku = Ku.replace(/```(\w*)\n([\s\S]*?)```/g, ((uu, Ru, Eu) => {
              const Ku = Qu.length;
              let mu = Su(Eu);
              try {
                mu = Vu.c.highlight(Eu.trimEnd(), {
                  language: Ru
                }).value
              } catch (Ju) {
                console.warn("Could not highlight documentation code block", Ju)
              }
              return Qu.push(`<div class="DocsCodeBlockRow"><pre class="DocsCodeBlock" data-lang="${Ru}"><code>${mu}</code></pre>${pu(yu,"DocsCopyBlock")}</div>`), `\0PLACEHOLDER_${Ku}\0`
            })), Ku = Ku.replace(/(`{1,2})([^\n]+?)\1(?!`)/g, ((Ru, Eu, Ku) => {
              const mu = Qu.length,
                Ju = 2 === Eu.length ? Ku.replace(/^ (.*) $/, "$1") : Ku;
              let Nu = Su(Ju);
              try {
                "apiReference" !== uu && "callbacks" !== uu || (Nu = Vu.c.highlight(Ju.trimEnd().replaceAll("\\|", "|"), {
                  language: "typescript"
                }).value)
              } catch (Xu) {
                console.warn("Could not highlight documentation snippet", Xu)
              }
              return Qu.push(`<span class="DocsInlineCodeRow"><code class="DocsInlineCode">${Nu}</code>${pu(yu,"DocsCopyInline")}</span>`), `\0PLACEHOLDER_${mu}\0`
            })), Ku = Su(Ku), Ku = Ku.replace(/^#### (.+)$/gm, '<h4 class="DocsH4">$1</h4>'), Ku = Ku.replace(/^### (.+)$/gm, '<h3 class="DocsH3">$1</h3>'), Ku = Ku.replace(/^## (.+)$/gm, '<h2 class="DocsH2">$1</h2>'), Ku = Ku.replace(/^# (.+)$/gm, '<h1 class="DocsH1">$1</h1>'), Ku = Ku.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"), Ku = Ku.replace(/\[([^\]]+)\]\(([^)]+)\)/g, ((uu, Ru, yu) => yu.startsWith("#") ? `<a class="DocsAnchor" data-id="${yu}">${Ru}</a>` : `<a href="${yu}" target="_blank" rel="noopener noreferrer">${Ru}</a>`)), Ku = Ku.replace(/^(\|.+\|)\n(\|[\s:\-|]+\|)\n((?:\|.+\|\s*\r?\n?)*)/gm, ((uu, Ru, yu, Eu) => `<table class="DocsTable"><thead><tr>${Ru.split("|").slice(1,-1).map((uu=>`<th>${uu.trim()}</th>`)).join("")}</tr></thead><tbody>${Eu.trim().split("\n").map((uu=>`<tr>${uu.split("|").slice(1,-1).map((uu=>`<td>${uu.trim()}</td>`)).join("")}</tr>`)).join("")}</tbody></table>`)), Ku = Ku.replace(/(?:^[ \t]*([*-])[ \t]+.+(?:\n|$))+/gm, ((uu, Ru) => function(uu, Ru) {
              const yu = "*" === Ru,
                Eu = [];
              for (const Ju of uu.split("\n")) {
                const uu = Ju.match(/^([ \t]*)(?:[*-])[ \t]+(.+)$/);
                uu && Eu.push({
                  indent: uu[1].replace(/\t/g, "  ").length,
                  content: uu[2]
                })
              }
              let Ku = "";
              const Qu = [],
                mu = yu ? "ol" : "ul";
              for (const {
                  indent: Ju,
                  content: Nu
                }
                of Eu) {
                for (; Qu.length > 0 && Ju < Qu[Qu.length - 1];) Ku += `</${mu}></li>`, Qu.pop();
                (0 === Qu.length || Ju > Qu[Qu.length - 1]) && (Qu.length > 0 && (Ku = Ku.replace(/<\/li>$/, "")), Ku += `<${mu} class="DocsList">`, Qu.push(Ju)), Ku += `<li class="DocsListItem">${Nu}</li>`
              }
              for (; Qu.length > 0;) Ku += `</${mu}>`, Qu.pop(), Qu.length > 0 && (Ku += "</li>");
              return Ku
            }(uu, Ru))), Ku = Ku.replace(/\n{2,}/g, "\n<br/>\n");
            for (let mu = 0; mu < Qu.length; mu++) Ku = Ku.replace(`\0PLACEHOLDER_${mu}\0`, Qu[mu]);
            if (Eu) {
              const uu = Su(Eu).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                Ru = new RegExp(uu, "gi");
              Ku = Ku.replace(/([^<>]+)(?=<|$)/g, (uu => uu.replace(Ru, (uu => `<mark class="DocsHighlight">${uu}</mark>`))))
            }
            return Ku
          }(vu.id, vu.content, fu, qu ? nu : void 0) : ""), [vu, fu, qu, nu]);
        (0, Eu.useEffect)((() => {
          const uu = Uu.current;
          if (!uu) return;
          const Ru = uu => {
            var Ru, yu, Eu, Ku, Qu;
            const mu = null === (Ru = (yu = uu.target).closest) || void 0 === Ru ? void 0 : Ru.call(yu, ".DocsCopyButton");
            if (!mu) return;
            uu.preventDefault(), uu.stopPropagation();
            const Ju = null !== (Eu = null === (Ku = mu.parentElement) || void 0 === Ku || null === (Qu = Ku.querySelector("code")) || void 0 === Qu ? void 0 : Qu.textContent) && void 0 !== Eu ? Eu : "";
            navigator.clipboard.writeText(Ju.trimEnd()).then((() => {
              mu.classList.add("Copied"), setTimeout((() => {
                mu.classList.remove("Copied")
              }), 1500)
            })).catch((uu => {
              console.warn("Could not copy documentation code", uu)
            }))
          };
          return uu.addEventListener("click", Ru, !0), () => {
            uu.removeEventListener("click", Ru, !0)
          }
        }), []);
        const [RR, yR] = (0, Eu.useState)(0);
        (0, Eu.useEffect)((() => {
          if (!qu || !Uu.current) return void yR(0);
          const uu = Uu.current.querySelectorAll(".DocsHighlight").length;
          yR(uu)
        }), [qu, uR]), (0, Eu.useEffect)((() => {
          if (null === gu || !Uu.current) return;
          cu(null);
          const uu = Uu.current.querySelectorAll(".DocsHighlight");
          if (0 === uu.length) return;
          const Ru = Math.min(gu, uu.length - 1);
          lu(Ru), uu.forEach((uu => {
            uu.classList.remove("DocsHighlightActive")
          })), uu[Ru].classList.add("DocsHighlightActive"), uu[Ru].scrollIntoView({
            block: "center",
            behavior: "smooth"
          })
        }), [gu, uR]);
        const ER = (0, Eu.useCallback)((uu => {
            if (!Uu.current) return;
            const Ru = Uu.current.querySelectorAll(".DocsHighlight");
            if (0 === Ru.length) return;
            const yu = (tu + uu + Ru.length) % Ru.length;
            lu(yu), cu(yu)
          }), [tu]),
          KR = (0, Eu.useCallback)((uu => {
            var Ru;
            const yu = null === (Ru = bu[uu]) || void 0 === Ru ? void 0 : Ru.tabStep;
            yu && yu === Pu && (0, du.e)(yu), uu !== Mu ? (zu(!0), Iu(uu), lu(0), Uu.current && (Uu.current.scrollTop = 0), qu && cu(0)) : zu(!Lu)
          }), [qu, Mu, Lu, Pu]),
          QR = (0, Eu.useCallback)((uu => {
            var Ru;
            const yu = Array.from((null === (Ru = Uu.current) || void 0 === Ru ? void 0 : Ru.querySelectorAll(".DocsH2, .DocsH3")) || []).find((Ru => {
              var yu;
              return null === (yu = Ru.textContent) || void 0 === yu ? void 0 : yu.includes(uu)
            }));
            yu && yu.scrollIntoView({
              block: "start",
              behavior: "smooth"
            })
          }), [Uu]),
          mR = (0, Eu.useCallback)((uu => {
            var Ru, yu;
            const Eu = null !== (Ru = null === (yu = Gu.current) || void 0 === yu ? void 0 : yu.clientWidth) && void 0 !== Ru ? Ru : window.innerWidth,
              Ku = Math.max(120, Eu - 200);
            return Math.min(Math.max(uu, 120), Ku)
          }), []),
          JR = (0, Eu.useCallback)((() => {
            var uu;
            Zu.current && (Zu.current = !1, null === (uu = Gu.current) || void 0 === uu || uu.classList.remove("DocsSidebarResizing"))
          }), []),
          NR = (0, Eu.useCallback)((uu => {
            var Ru;
            uu.preventDefault(), Zu.current = !0, null === (Ru = Gu.current) || void 0 === Ru || Ru.classList.add("DocsSidebarResizing")
          }), []);
        (0, Eu.useEffect)((() => {
          const uu = Gu.current,
            Ru = uu => {
              if (!Zu.current || !Gu.current) return;
              const Ru = Gu.current.getBoundingClientRect().left;
              wu(mR(uu.clientX - Ru))
            };
          return window.addEventListener("mousemove", Ru), window.addEventListener("mouseup", JR), () => {
            window.removeEventListener("mousemove", Ru), window.removeEventListener("mouseup", JR), null === uu || void 0 === uu || uu.classList.remove("DocsSidebarResizing")
          }
        }), [mR, JR]);
        const XR = (0, Eu.useCallback)((uu => {
          if (uu) {
            const [Ru, yu] = uu.slice(1).split("-");
            yu && (hu.current = {
              docId: Ru,
              subsection: yu
            }), Ru && KR(Ru)
          }
        }), [KR]);
        (0, Eu.useEffect)((() => {
          const uu = hu.current;
          uu && Mu === uu.docId && (setTimeout((() => {
            QR(uu.subsection)
          }), 0), hu.current = null)
        })), (0, Eu.useEffect)((() => {
          if (!Uu.current) return;
          Uu.current.querySelectorAll("a.DocsAnchor").forEach((uu => {
            uu.addEventListener("click", (Ru => {
              Ru.preventDefault(), XR(uu.dataset.id)
            }))
          }))
        }), [Mu, XR]);
        const VR = Object.values(bu).find((uu => (null === uu || void 0 === uu ? void 0 : uu.pageStep) === Pu));
        return (0, xu.jsx)(Hu.h, {
          tutorial: "docsOverview",
          step: null !== (Cu = null === VR || void 0 === VR ? void 0 : VR.pageStep) && void 0 !== Cu ? Cu : "docsPanel",
          text: au(null !== (ku = null === VR || void 0 === VR ? void 0 : VR.pageText) && void 0 !== ku ? ku : "codeEditor:tutorialDocsPanel"),
          enabled: Du,
          placement: "left",
          onPrevious: VR ? void 0 : Au,
          children: (0, xu.jsxs)("div", {
            className: "DocsPanel",
            ref: Gu,
            children: [(0, xu.jsxs)("div", {
              className: "DocsSidebar",
              style: {
                width: Fu,
                minWidth: Fu,
                maxWidth: Fu
              },
              children: [(0, xu.jsx)(Qu.b, {
                className: "DocsSearch",
                placeholderText: "\ud83d\udd0e Search docs...",
                onValueChange: uu => {
                  su(uu), lu(0), cu(0)
                }
              }, iu), (0, xu.jsx)("div", {
                className: "DocsNavList",
                children: qu ? Ou.map((uu => (0, xu.jsxs)("div", {
                  className: Ju()("DocsNavItem", "SearchResult", {
                    Active: uu.doc.id === (null === vu || void 0 === vu ? void 0 : vu.id)
                  }),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    KR(uu.doc.id)
                  },
                  children: [(0, xu.jsxs)("div", {
                    className: "SearchResultTitle",
                    children: [uu.doc.title, (0, xu.jsx)("span", {
                      className: "SearchResultCount",
                      children: uu.matchCount
                    })]
                  }), (0, xu.jsx)("div", {
                    className: "SearchResultSnippet",
                    children: Tu(uu.snippet, nu)
                  })]
                }, uu.doc.id))) : Ku.c.map((uu => {
                  const Ru = (0, xu.jsxs)("div", {
                      className: Ju()("DocsNavItem", {
                        Active: uu.id === (null === vu || void 0 === vu ? void 0 : vu.id)
                      }),
                      "data-pad-focusable": !0,
                      onClick: () => {
                        KR(uu.id)
                      },
                      children: [(0, xu.jsx)("span", {
                        className: "DocsNavItemTitle",
                        children: uu.title
                      }), uu.subsections && uu.id === (null === vu || void 0 === vu ? void 0 : vu.id) && Lu && (0, xu.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, xu.jsx)(Wu.c, {
                          name: "angle-down"
                        })
                      }), uu.subsections && (uu.id !== (null === vu || void 0 === vu ? void 0 : vu.id) || !Lu) && (0, xu.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, xu.jsx)(Wu.c, {
                          name: "angle-up"
                        })
                      })]
                    }),
                    yu = bu[uu.id];
                  return (0, xu.jsxs)(Eu.Fragment, {
                    children: [yu && (0, xu.jsx)(Hu.h, {
                      tutorial: "docsOverview",
                      step: yu.tabStep,
                      text: au(yu.tabText),
                      enabled: Du,
                      placement: "left",
                      waitForClick: !0,
                      children: Ru
                    }), !yu && Ru, Lu && uu.subsections && uu.id === (null === vu || void 0 === vu ? void 0 : vu.id) && uu.subsections.map((uu => (0, xu.jsx)("div", {
                      className: "DocsNavItem DocsSubsection",
                      "data-pad-focusable": !0,
                      onClick: () => {
                        QR(uu)
                      },
                      children: uu
                    }, uu)))]
                  }, uu.id)
                }))
              }), (0, xu.jsx)("div", {
                className: "DocsSidebarButtonContainer",
                children: (0, xu.jsx)(ju.i, {
                  tooltipInner: au("codeEditor:popOutDocsTooltip"),
                  placement: "top",
                  children: (0, xu.jsx)(Nu.e, {
                    className: "DocsSidebarButton",
                    onClick: eu,
                    children: au("codeEditor:popOutDocs")
                  })
                })
              })]
            }), (0, xu.jsx)("div", {
              className: "DocsSidebarResizeHandle",
              onMouseDown: NR
            }), (0, xu.jsxs)("div", {
              className: "DocsContentWrapper",
              children: [qu && RR > 0 && (0, xu.jsxs)("div", {
                className: "DocsMatchNav",
                children: [(0, xu.jsxs)("span", {
                  className: "DocsMatchNavLabel",
                  children: [tu + 1, " / ", RR]
                }), (0, xu.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    ER(-1)
                  },
                  children: "\u25b2"
                }), (0, xu.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    ER(1)
                  },
                  children: "\u25bc"
                })]
              }), (0, xu.jsx)("div", {
                className: "DocsContent",
                ref: Uu,
                dangerouslySetInnerHTML: {
                  __html: uR
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