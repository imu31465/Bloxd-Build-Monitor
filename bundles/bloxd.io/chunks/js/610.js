export const id = 610;
export const ids = [610];
export const modules = {
  44656: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      default: () => Oe
    });
    var ye = He(59),
      be = He(5222),
      Me = He(1674),
      Ke = He(1053),
      Ue = He.n(Ke),
      Fe = He(1438),
      Je = He(1127),
      oe = He(5198),
      Re = He(5209),
      ke = He(5212),
      qe = He(1228);

    function fe(ee) {
      return ee.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    oe.b.registerLanguage("javascript", Re.b), oe.b.registerLanguage("typescript", ke.b);

    function Te(ee, ie) {
      const He = fe(ee).replace(/"/g, "&quot;");
      return `<button type="button" class="DocsCopyButton ${ie}" title="${He}" aria-label="${He}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5"/><path d="M10.5 3.5V1.5H1.5v9h2"/></svg><svg class="DocsCopiedIcon" viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 8.5l3.5 3.5 7.5-7.5"/></svg></button>`
    }

    function pe(ee, ie) {
      const He = [],
        ye = ee.toLowerCase(),
        be = ie.toLowerCase();
      let Me = 0;
      for (; Me < ee.length;) {
        const Ke = ye.indexOf(be, Me);
        if (-1 === Ke) {
          He.push(ee.slice(Me));
          break
        }
        Ke > Me && He.push(ee.slice(Me, Ke)), He.push((0, qe.jsx)("mark", {
          className: "DocsHighlight",
          children: ee.slice(Ke, Ke + ie.length)
        }, Ke)), Me = Ke + ie.length
      }
      return He
    }
    var Xe = He(1323),
      ze = He(1351),
      Be = He(37708),
      Ee = He(37716);
    const ge = {
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
      Oe = (0, ye.memo)((function(ee) {
        var ie, He, Ke, Re, ke, Oe, de;
        let {
          popOutDocs: We,
          hideDocs: te,
          tutorialEnabled: Ze
        } = ee;
        const [we, De] = (0, ye.useState)(be.c[0].id), Pe = (0, ye.useRef)(null), Ae = (0, ye.useRef)(null), [Ye, Ve] = (0, ye.useState)(""), [ae, ce] = (0, ye.useState)(0), [xe, Le] = (0, ye.useState)(null), [Ce, ve] = (0, ye.useState)(!1), [ue, me] = (0, ye.useState)(160), le = (0, ye.useRef)(!1), Se = (0, ye.useRef)(null), ne = (0, Be.i)("docsOverview"), [je, se] = (0, ye.useState)(0), Ie = Object.values(ge).some((ee => (null === ee || void 0 === ee ? void 0 : ee.tabStep) === ne));
        (0, ye.useEffect)((() => {
          Ie && Ye.length > 0 && (Ve(""), se((ee => ee + 1)))
        }), [Ie, Ye]);
        const he = Ye.length > 0,
          Ne = (0, ye.useMemo)((() => function(ee) {
            if (!ee) return [];
            const ie = ee.toLowerCase(),
              He = [];
            for (const ye of be.c) {
              const ee = ye.content.toLowerCase();
              let be = 0,
                Me = -1,
                Ke = 0,
                Ue = ee.indexOf(ie, Ke);
              for (; - 1 !== Ue;) - 1 === Me && (Me = Ue), be++, Ke = Ue + ie.length, Ue = ee.indexOf(ie, Ke);
              if (0 === be) continue;
              const Fe = Math.max(0, Me - 40),
                Je = Math.min(ye.content.length, Me + ie.length + 40),
                oe = (Fe > 0 ? "..." : "") + ye.content.slice(Fe, Je).replace(/\n/g, " ") + (Je < ye.content.length ? "..." : "");
              He.push({
                doc: ye,
                matchCount: be,
                snippet: oe
              })
            }
            return He.sort(((ee, ie) => ie.matchCount - ee.matchCount)), He
          }(Ye)), [Ye]),
          Ge = he ? null !== (ie = null !== (He = null === (Ke = Ne.find((ee => ee.doc.id === we))) || void 0 === Ke ? void 0 : Ke.doc) && void 0 !== He ? He : null === (Re = Ne[0]) || void 0 === Re ? void 0 : Re.doc) && void 0 !== ie ? ie : null : null !== (ke = be.c.find((ee => ee.id === we))) && void 0 !== ke ? ke : be.c[0],
          {
            t: re
          } = (0, Je.v)(),
          Qe = re("codeEditor:copySnippet"),
          ei = (0, ye.useMemo)((() => Ge ? function(ee, ie, He, ye) {
            let be = ie;
            be = be.replace(/\r\n/g, "\n");
            const Me = [];
            be = be.replace(/```(\w*)\n([\s\S]*?)```/g, ((ee, ie, ye) => {
              const be = Me.length;
              let Ke = fe(ye);
              try {
                Ke = oe.b.highlight(ye.trimEnd(), {
                  language: ie
                }).value
              } catch (Ue) {
                console.warn("Could not highlight documentation code block", Ue)
              }
              return Me.push(`<div class="DocsCodeBlockRow"><pre class="DocsCodeBlock" data-lang="${ie}"><code>${Ke}</code></pre>${Te(He,"DocsCopyBlock")}</div>`), `\0PLACEHOLDER_${be}\0`
            })), be = be.replace(/(`{1,2})([^\n]+?)\1(?!`)/g, ((ie, ye, be) => {
              const Ke = Me.length,
                Ue = 2 === ye.length ? be.replace(/^ (.*) $/, "$1") : be;
              let Fe = fe(Ue);
              try {
                "apiReference" !== ee && "callbacks" !== ee || (Fe = oe.b.highlight(Ue.trimEnd().replaceAll("\\|", "|"), {
                  language: "typescript"
                }).value)
              } catch (Je) {
                console.warn("Could not highlight documentation snippet", Je)
              }
              return Me.push(`<span class="DocsInlineCodeRow"><code class="DocsInlineCode">${Fe}</code>${Te(He,"DocsCopyInline")}</span>`), `\0PLACEHOLDER_${Ke}\0`
            })), be = fe(be), be = be.replace(/^#### (.+)$/gm, '<h4 class="DocsH4">$1</h4>'), be = be.replace(/^### (.+)$/gm, '<h3 class="DocsH3">$1</h3>'), be = be.replace(/^## (.+)$/gm, '<h2 class="DocsH2">$1</h2>'), be = be.replace(/^# (.+)$/gm, '<h1 class="DocsH1">$1</h1>'), be = be.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"), be = be.replace(/\[([^\]]+)\]\(([^)]+)\)/g, ((ee, ie, He) => He.startsWith("#") ? `<a class="DocsAnchor" data-id="${He}">${ie}</a>` : `<a href="${He}" target="_blank" rel="noopener noreferrer">${ie}</a>`)), be = be.replace(/^(\|.+\|)\n(\|[\s:\-|]+\|)\n((?:\|.+\|\s*\r?\n?)*)/gm, ((ee, ie, He, ye) => `<table class="DocsTable"><thead><tr>${ie.split("|").slice(1,-1).map((ee=>`<th>${ee.trim()}</th>`)).join("")}</tr></thead><tbody>${ye.trim().split("\n").map((ee=>`<tr>${ee.split("|").slice(1,-1).map((ee=>`<td>${ee.trim()}</td>`)).join("")}</tr>`)).join("")}</tbody></table>`)), be = be.replace(/(?:^[ \t]*([*-])[ \t]+.+(?:\n|$))+/gm, ((ee, ie) => function(ee, ie) {
              const He = "*" === ie,
                ye = [];
              for (const Ue of ee.split("\n")) {
                const ee = Ue.match(/^([ \t]*)(?:[*-])[ \t]+(.+)$/);
                ee && ye.push({
                  indent: ee[1].replace(/\t/g, "  ").length,
                  content: ee[2]
                })
              }
              let be = "";
              const Me = [],
                Ke = He ? "ol" : "ul";
              for (const {
                  indent: Ue,
                  content: Fe
                }
                of ye) {
                for (; Me.length > 0 && Ue < Me[Me.length - 1];) be += `</${Ke}></li>`, Me.pop();
                (0 === Me.length || Ue > Me[Me.length - 1]) && (Me.length > 0 && (be = be.replace(/<\/li>$/, "")), be += `<${Ke} class="DocsList">`, Me.push(Ue)), be += `<li class="DocsListItem">${Fe}</li>`
              }
              for (; Me.length > 0;) be += `</${Ke}>`, Me.pop(), Me.length > 0 && (be += "</li>");
              return be
            }(ee, ie))), be = be.replace(/\n{2,}/g, "\n<br/>\n");
            for (let Ke = 0; Ke < Me.length; Ke++) be = be.replace(`\0PLACEHOLDER_${Ke}\0`, Me[Ke]);
            if (ye) {
              const ee = fe(ye).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                ie = new RegExp(ee, "gi");
              be = be.replace(/([^<>]+)(?=<|$)/g, (ee => ee.replace(ie, (ee => `<mark class="DocsHighlight">${ee}</mark>`))))
            }
            return be
          }(Ge.id, Ge.content, Qe, he ? Ye : void 0) : ""), [Ge, Qe, he, Ye]);
        (0, ye.useEffect)((() => {
          const ee = Ae.current;
          if (!ee) return;
          const ie = ee => {
            var ie, He, ye, be, Me;
            const Ke = null === (ie = (He = ee.target).closest) || void 0 === ie ? void 0 : ie.call(He, ".DocsCopyButton");
            if (!Ke) return;
            ee.preventDefault(), ee.stopPropagation();
            const Ue = null !== (ye = null === (be = Ke.parentElement) || void 0 === be || null === (Me = be.querySelector("code")) || void 0 === Me ? void 0 : Me.textContent) && void 0 !== ye ? ye : "";
            navigator.clipboard.writeText(Ue.trimEnd()).then((() => {
              Ke.classList.add("Copied"), setTimeout((() => {
                Ke.classList.remove("Copied")
              }), 1500)
            })).catch((ee => {
              console.warn("Could not copy documentation code", ee)
            }))
          };
          return ee.addEventListener("click", ie, !0), () => {
            ee.removeEventListener("click", ie, !0)
          }
        }), []);
        const [ii, Hi] = (0, ye.useState)(0);
        (0, ye.useEffect)((() => {
          if (!he || !Ae.current) return void Hi(0);
          const ee = Ae.current.querySelectorAll(".DocsHighlight").length;
          Hi(ee)
        }), [he, ei]), (0, ye.useEffect)((() => {
          if (null === xe || !Ae.current) return;
          Le(null);
          const ee = Ae.current.querySelectorAll(".DocsHighlight");
          if (0 === ee.length) return;
          const ie = Math.min(xe, ee.length - 1);
          ce(ie), ee.forEach((ee => {
            ee.classList.remove("DocsHighlightActive")
          })), ee[ie].classList.add("DocsHighlightActive"), ee[ie].scrollIntoView({
            block: "center",
            behavior: "smooth"
          })
        }), [xe, ei]);
        const yi = (0, ye.useCallback)((ee => {
            if (!Ae.current) return;
            const ie = Ae.current.querySelectorAll(".DocsHighlight");
            if (0 === ie.length) return;
            const He = (ae + ee + ie.length) % ie.length;
            ce(He), Le(He)
          }), [ae]),
          bi = (0, ye.useCallback)((ee => {
            var ie;
            const He = null === (ie = ge[ee]) || void 0 === ie ? void 0 : ie.tabStep;
            He && He === ne && (0, Ee.f)(He), ee !== we ? (ve(!0), De(ee), ce(0), Ae.current && (Ae.current.scrollTop = 0), he && Le(0)) : ve(!Ce)
          }), [he, we, Ce, ne]),
          Mi = (0, ye.useCallback)((ee => {
            var ie;
            const He = Array.from((null === (ie = Ae.current) || void 0 === ie ? void 0 : ie.querySelectorAll(".DocsH2, .DocsH3")) || []).find((ie => {
              var He;
              return null === (He = ie.textContent) || void 0 === He ? void 0 : He.includes(ee)
            }));
            He && He.scrollIntoView({
              block: "start",
              behavior: "smooth"
            })
          }), [Ae]),
          Ki = (0, ye.useCallback)((ee => {
            var ie, He;
            const ye = null !== (ie = null === (He = Pe.current) || void 0 === He ? void 0 : He.clientWidth) && void 0 !== ie ? ie : window.innerWidth,
              be = Math.max(120, ye - 200);
            return Math.min(Math.max(ee, 120), be)
          }), []),
          Ui = (0, ye.useCallback)((() => {
            var ee;
            le.current && (le.current = !1, null === (ee = Pe.current) || void 0 === ee || ee.classList.remove("DocsSidebarResizing"))
          }), []),
          Fi = (0, ye.useCallback)((ee => {
            var ie;
            ee.preventDefault(), le.current = !0, null === (ie = Pe.current) || void 0 === ie || ie.classList.add("DocsSidebarResizing")
          }), []);
        (0, ye.useEffect)((() => {
          const ee = Pe.current,
            ie = ee => {
              if (!le.current || !Pe.current) return;
              const ie = Pe.current.getBoundingClientRect().left;
              me(Ki(ee.clientX - ie))
            };
          return window.addEventListener("mousemove", ie), window.addEventListener("mouseup", Ui), () => {
            window.removeEventListener("mousemove", ie), window.removeEventListener("mouseup", Ui), null === ee || void 0 === ee || ee.classList.remove("DocsSidebarResizing")
          }
        }), [Ki, Ui]);
        const Ji = (0, ye.useCallback)((ee => {
          if (ee) {
            const [ie, He] = ee.slice(1).split("-");
            He && (Se.current = {
              docId: ie,
              subsection: He
            }), ie && bi(ie)
          }
        }), [bi]);
        (0, ye.useEffect)((() => {
          const ee = Se.current;
          ee && we === ee.docId && (setTimeout((() => {
            Mi(ee.subsection)
          }), 0), Se.current = null)
        })), (0, ye.useEffect)((() => {
          if (!Ae.current) return;
          Ae.current.querySelectorAll("a.DocsAnchor").forEach((ee => {
            ee.addEventListener("click", (ie => {
              ie.preventDefault(), Ji(ee.dataset.id)
            }))
          }))
        }), [we, Ji]);
        const oi = Object.values(ge).find((ee => (null === ee || void 0 === ee ? void 0 : ee.pageStep) === ne));
        return (0, qe.jsx)(Be.h, {
          tutorial: "docsOverview",
          step: null !== (Oe = null === oi || void 0 === oi ? void 0 : oi.pageStep) && void 0 !== Oe ? Oe : "docsPanel",
          text: re(null !== (de = null === oi || void 0 === oi ? void 0 : oi.pageText) && void 0 !== de ? de : "codeEditor:tutorialDocsPanel"),
          enabled: Ze,
          placement: "left",
          onPrevious: oi ? void 0 : te,
          children: (0, qe.jsxs)("div", {
            className: "DocsPanel",
            ref: Pe,
            children: [(0, qe.jsxs)("div", {
              className: "DocsSidebar",
              style: {
                width: ue,
                minWidth: ue,
                maxWidth: ue
              },
              children: [(0, qe.jsx)(Me.d, {
                className: "DocsSearch",
                placeholderText: "\ud83d\udd0e Search docs...",
                onValueChange: ee => {
                  Ve(ee), ce(0), Le(0)
                }
              }, je), (0, qe.jsx)("div", {
                className: "DocsNavList",
                children: he ? Ne.map((ee => (0, qe.jsxs)("div", {
                  className: Ue()("DocsNavItem", "SearchResult", {
                    Active: ee.doc.id === (null === Ge || void 0 === Ge ? void 0 : Ge.id)
                  }),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    bi(ee.doc.id)
                  },
                  children: [(0, qe.jsxs)("div", {
                    className: "SearchResultTitle",
                    children: [ee.doc.title, (0, qe.jsx)("span", {
                      className: "SearchResultCount",
                      children: ee.matchCount
                    })]
                  }), (0, qe.jsx)("div", {
                    className: "SearchResultSnippet",
                    children: pe(ee.snippet, Ye)
                  })]
                }, ee.doc.id))) : be.c.map((ee => {
                  const ie = (0, qe.jsxs)("div", {
                      className: Ue()("DocsNavItem", {
                        Active: ee.id === (null === Ge || void 0 === Ge ? void 0 : Ge.id)
                      }),
                      "data-pad-focusable": !0,
                      onClick: () => {
                        bi(ee.id)
                      },
                      children: [(0, qe.jsx)("span", {
                        className: "DocsNavItemTitle",
                        children: ee.title
                      }), ee.subsections && ee.id === (null === Ge || void 0 === Ge ? void 0 : Ge.id) && Ce && (0, qe.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, qe.jsx)(Xe.e, {
                          name: "angle-down"
                        })
                      }), ee.subsections && (ee.id !== (null === Ge || void 0 === Ge ? void 0 : Ge.id) || !Ce) && (0, qe.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, qe.jsx)(Xe.e, {
                          name: "angle-up"
                        })
                      })]
                    }),
                    He = ge[ee.id];
                  return (0, qe.jsxs)(ye.Fragment, {
                    children: [He && (0, qe.jsx)(Be.h, {
                      tutorial: "docsOverview",
                      step: He.tabStep,
                      text: re(He.tabText),
                      enabled: Ze,
                      placement: "left",
                      waitForClick: !0,
                      children: ie
                    }), !He && ie, Ce && ee.subsections && ee.id === (null === Ge || void 0 === Ge ? void 0 : Ge.id) && ee.subsections.map((ee => (0, qe.jsx)("div", {
                      className: "DocsNavItem DocsSubsection",
                      "data-pad-focusable": !0,
                      onClick: () => {
                        Mi(ee)
                      },
                      children: ee
                    }, ee)))]
                  }, ee.id)
                }))
              }), (0, qe.jsx)("div", {
                className: "DocsSidebarButtonContainer",
                children: (0, qe.jsx)(ze.g, {
                  tooltipInner: re("codeEditor:popOutDocsTooltip"),
                  placement: "top",
                  children: (0, qe.jsx)(Fe.c, {
                    className: "DocsSidebarButton",
                    onClick: We,
                    children: re("codeEditor:popOutDocs")
                  })
                })
              })]
            }), (0, qe.jsx)("div", {
              className: "DocsSidebarResizeHandle",
              onMouseDown: Fi
            }), (0, qe.jsxs)("div", {
              className: "DocsContentWrapper",
              children: [he && ii > 0 && (0, qe.jsxs)("div", {
                className: "DocsMatchNav",
                children: [(0, qe.jsxs)("span", {
                  className: "DocsMatchNavLabel",
                  children: [ae + 1, " / ", ii]
                }), (0, qe.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    yi(-1)
                  },
                  children: "\u25b2"
                }), (0, qe.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    yi(1)
                  },
                  children: "\u25bc"
                })]
              }), (0, qe.jsx)("div", {
                className: "DocsContent",
                ref: Ae,
                dangerouslySetInnerHTML: {
                  __html: ei
                }
              })]
            })]
          })
        })
      }))
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);