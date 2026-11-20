export const id = 292;
export const ids = [292];
export const modules = {
  41216: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      default: () => yq
    });
    var Yq = gq(57),
      lq = gq(4572),
      Oq = gq(1659),
      mq = gq(1018),
      xq = gq.n(mq),
      Aq = gq(1422),
      cq = gq(1183),
      uq = gq(4540),
      Bq = gq(4553),
      Wq = gq(4562),
      Nq = gq(1070);

    function aq(qq) {
      return qq.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    uq.b.registerLanguage("javascript", Bq.e), uq.b.registerLanguage("typescript", Wq.b);

    function Vq(qq, Eq) {
      const gq = aq(qq).replace(/"/g, "&quot;");
      return `<button type="button" class="DocsCopyButton ${Eq}" title="${gq}" aria-label="${gq}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5"/><path d="M10.5 3.5V1.5H1.5v9h2"/></svg><svg class="DocsCopiedIcon" viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 8.5l3.5 3.5 7.5-7.5"/></svg></button>`
    }

    function dq(qq, Eq) {
      const gq = [],
        Yq = qq.toLowerCase(),
        lq = Eq.toLowerCase();
      let Oq = 0;
      for (; Oq < qq.length;) {
        const mq = Yq.indexOf(lq, Oq);
        if (-1 === mq) {
          gq.push(qq.slice(Oq));
          break
        }
        mq > Oq && gq.push(qq.slice(Oq, mq)), gq.push((0, Nq.jsx)("mark", {
          className: "DocsHighlight",
          children: qq.slice(mq, mq + Eq.length)
        }, mq)), Oq = mq + Eq.length
      }
      return gq
    }
    var jq = gq(1025),
      Hq = gq(1341),
      oq = gq(36931),
      Pq = gq(36935);
    const Qq = {
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
      yq = (0, Yq.memo)((function(qq) {
        var Eq, gq, mq, Bq, Wq, yq, tq;
        let {
          popOutDocs: rq,
          hideDocs: vq,
          tutorialEnabled: hq
        } = qq;
        const [nq, bq] = (0, Yq.useState)(lq.e[0].id), iq = (0, Yq.useRef)(null), Zq = (0, Yq.useRef)(null), [fq, Mq] = (0, Yq.useState)(""), [Tq, zq] = (0, Yq.useState)(0), [Sq, pq] = (0, Yq.useState)(null), [Gq, Lq] = (0, Yq.useState)(!1), [Jq, kq] = (0, Yq.useState)(160), Rq = (0, Yq.useRef)(!1), Uq = (0, Yq.useRef)(null), Fq = (0, oq.l)("docsOverview"), [sq, Xq] = (0, Yq.useState)(0), wq = Object.values(Qq).some((qq => (null === qq || void 0 === qq ? void 0 : qq.tabStep) === Fq));
        (0, Yq.useEffect)((() => {
          wq && fq.length > 0 && (Mq(""), Xq((qq => qq + 1)))
        }), [wq, fq]);
        const Kq = fq.length > 0,
          Cq = (0, Yq.useMemo)((() => function(qq) {
            if (!qq) return [];
            const Eq = qq.toLowerCase(),
              gq = [];
            for (const Yq of lq.e) {
              const qq = Yq.content.toLowerCase();
              let lq = 0,
                Oq = -1,
                mq = 0,
                xq = qq.indexOf(Eq, mq);
              for (; - 1 !== xq;) - 1 === Oq && (Oq = xq), lq++, mq = xq + Eq.length, xq = qq.indexOf(Eq, mq);
              if (0 === lq) continue;
              const Aq = Math.max(0, Oq - 40),
                cq = Math.min(Yq.content.length, Oq + Eq.length + 40),
                uq = (Aq > 0 ? "..." : "") + Yq.content.slice(Aq, cq).replace(/\n/g, " ") + (cq < Yq.content.length ? "..." : "");
              gq.push({
                doc: Yq,
                matchCount: lq,
                snippet: uq
              })
            }
            return gq.sort(((qq, Eq) => Eq.matchCount - qq.matchCount)), gq
          }(fq)), [fq]),
          Iq = Kq ? null !== (Eq = null !== (gq = null === (mq = Cq.find((qq => qq.doc.id === nq))) || void 0 === mq ? void 0 : mq.doc) && void 0 !== gq ? gq : null === (Bq = Cq[0]) || void 0 === Bq ? void 0 : Bq.doc) && void 0 !== Eq ? Eq : null : null !== (Wq = lq.e.find((qq => qq.id === nq))) && void 0 !== Wq ? Wq : lq.e[0],
          {
            t: eq
          } = (0, cq.v)(),
          Dq = eq("codeEditor:copySnippet"),
          qE = (0, Yq.useMemo)((() => Iq ? function(qq, Eq, gq, Yq) {
            let lq = Eq;
            lq = lq.replace(/\r\n/g, "\n");
            const Oq = [];
            lq = lq.replace(/```(\w*)\n([\s\S]*?)```/g, ((qq, Eq, Yq) => {
              const lq = Oq.length;
              let mq = aq(Yq);
              try {
                mq = uq.b.highlight(Yq.trimEnd(), {
                  language: Eq
                }).value
              } catch (xq) {
                console.warn("Could not highlight documentation code block", xq)
              }
              return Oq.push(`<div class="DocsCodeBlockRow"><pre class="DocsCodeBlock" data-lang="${Eq}"><code>${mq}</code></pre>${Vq(gq,"DocsCopyBlock")}</div>`), `\0PLACEHOLDER_${lq}\0`
            })), lq = lq.replace(/(`{1,2})([^\n]+?)\1(?!`)/g, ((Eq, Yq, lq) => {
              const mq = Oq.length,
                xq = 2 === Yq.length ? lq.replace(/^ (.*) $/, "$1") : lq;
              let Aq = aq(xq);
              try {
                "apiReference" !== qq && "callbacks" !== qq || (Aq = uq.b.highlight(xq.trimEnd().replaceAll("\\|", "|"), {
                  language: "typescript"
                }).value)
              } catch (cq) {
                console.warn("Could not highlight documentation snippet", cq)
              }
              return Oq.push(`<span class="DocsInlineCodeRow"><code class="DocsInlineCode">${Aq}</code>${Vq(gq,"DocsCopyInline")}</span>`), `\0PLACEHOLDER_${mq}\0`
            })), lq = aq(lq), lq = lq.replace(/^#### (.+)$/gm, '<h4 class="DocsH4">$1</h4>'), lq = lq.replace(/^### (.+)$/gm, '<h3 class="DocsH3">$1</h3>'), lq = lq.replace(/^## (.+)$/gm, '<h2 class="DocsH2">$1</h2>'), lq = lq.replace(/^# (.+)$/gm, '<h1 class="DocsH1">$1</h1>'), lq = lq.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"), lq = lq.replace(/\[([^\]]+)\]\(([^)]+)\)/g, ((qq, Eq, gq) => gq.startsWith("#") ? `<a class="DocsAnchor" data-id="${gq}">${Eq}</a>` : `<a href="${gq}" target="_blank" rel="noopener noreferrer">${Eq}</a>`)), lq = lq.replace(/^(\|.+\|)\n(\|[\s:\-|]+\|)\n((?:\|.+\|\s*\r?\n?)*)/gm, ((qq, Eq, gq, Yq) => `<table class="DocsTable"><thead><tr>${Eq.split("|").slice(1,-1).map((qq=>`<th>${qq.trim()}</th>`)).join("")}</tr></thead><tbody>${Yq.trim().split("\n").map((qq=>`<tr>${qq.split("|").slice(1,-1).map((qq=>`<td>${qq.trim()}</td>`)).join("")}</tr>`)).join("")}</tbody></table>`)), lq = lq.replace(/(?:^[ \t]*([*-])[ \t]+.+(?:\n|$))+/gm, ((qq, Eq) => function(qq, Eq) {
              const gq = "*" === Eq,
                Yq = [];
              for (const xq of qq.split("\n")) {
                const qq = xq.match(/^([ \t]*)(?:[*-])[ \t]+(.+)$/);
                qq && Yq.push({
                  indent: qq[1].replace(/\t/g, "  ").length,
                  content: qq[2]
                })
              }
              let lq = "";
              const Oq = [],
                mq = gq ? "ol" : "ul";
              for (const {
                  indent: xq,
                  content: Aq
                }
                of Yq) {
                for (; Oq.length > 0 && xq < Oq[Oq.length - 1];) lq += `</${mq}></li>`, Oq.pop();
                (0 === Oq.length || xq > Oq[Oq.length - 1]) && (Oq.length > 0 && (lq = lq.replace(/<\/li>$/, "")), lq += `<${mq} class="DocsList">`, Oq.push(xq)), lq += `<li class="DocsListItem">${Aq}</li>`
              }
              for (; Oq.length > 0;) lq += `</${mq}>`, Oq.pop(), Oq.length > 0 && (lq += "</li>");
              return lq
            }(qq, Eq))), lq = lq.replace(/\n{2,}/g, "\n<br/>\n");
            for (let mq = 0; mq < Oq.length; mq++) lq = lq.replace(`\0PLACEHOLDER_${mq}\0`, Oq[mq]);
            if (Yq) {
              const qq = aq(Yq).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                Eq = new RegExp(qq, "gi");
              lq = lq.replace(/([^<>]+)(?=<|$)/g, (qq => qq.replace(Eq, (qq => `<mark class="DocsHighlight">${qq}</mark>`))))
            }
            return lq
          }(Iq.id, Iq.content, Dq, Kq ? fq : void 0) : ""), [Iq, Dq, Kq, fq]);
        (0, Yq.useEffect)((() => {
          const qq = Zq.current;
          if (!qq) return;
          const Eq = qq => {
            var Eq, gq, Yq, lq, Oq;
            const mq = null === (Eq = (gq = qq.target).closest) || void 0 === Eq ? void 0 : Eq.call(gq, ".DocsCopyButton");
            if (!mq) return;
            qq.preventDefault(), qq.stopPropagation();
            const xq = null !== (Yq = null === (lq = mq.parentElement) || void 0 === lq || null === (Oq = lq.querySelector("code")) || void 0 === Oq ? void 0 : Oq.textContent) && void 0 !== Yq ? Yq : "";
            navigator.clipboard.writeText(xq.trimEnd()).then((() => {
              mq.classList.add("Copied"), setTimeout((() => {
                mq.classList.remove("Copied")
              }), 1500)
            })).catch((qq => {
              console.warn("Could not copy documentation code", qq)
            }))
          };
          return qq.addEventListener("click", Eq, !0), () => {
            qq.removeEventListener("click", Eq, !0)
          }
        }), []);
        const [EE, gE] = (0, Yq.useState)(0);
        (0, Yq.useEffect)((() => {
          if (!Kq || !Zq.current) return void gE(0);
          const qq = Zq.current.querySelectorAll(".DocsHighlight").length;
          gE(qq)
        }), [Kq, qE]), (0, Yq.useEffect)((() => {
          if (null === Sq || !Zq.current) return;
          pq(null);
          const qq = Zq.current.querySelectorAll(".DocsHighlight");
          if (0 === qq.length) return;
          const Eq = Math.min(Sq, qq.length - 1);
          zq(Eq), qq.forEach((qq => {
            qq.classList.remove("DocsHighlightActive")
          })), qq[Eq].classList.add("DocsHighlightActive"), qq[Eq].scrollIntoView({
            block: "center",
            behavior: "smooth"
          })
        }), [Sq, qE]);
        const YE = (0, Yq.useCallback)((qq => {
            if (!Zq.current) return;
            const Eq = Zq.current.querySelectorAll(".DocsHighlight");
            if (0 === Eq.length) return;
            const gq = (Tq + qq + Eq.length) % Eq.length;
            zq(gq), pq(gq)
          }), [Tq]),
          lE = (0, Yq.useCallback)((qq => {
            var Eq;
            const gq = null === (Eq = Qq[qq]) || void 0 === Eq ? void 0 : Eq.tabStep;
            gq && gq === Fq && (0, Pq.e)(gq), qq !== nq ? (Lq(!0), bq(qq), zq(0), Zq.current && (Zq.current.scrollTop = 0), Kq && pq(0)) : Lq(!Gq)
          }), [Kq, nq, Gq, Fq]),
          OE = (0, Yq.useCallback)((qq => {
            var Eq;
            const gq = Array.from((null === (Eq = Zq.current) || void 0 === Eq ? void 0 : Eq.querySelectorAll(".DocsH2, .DocsH3")) || []).find((Eq => {
              var gq;
              return null === (gq = Eq.textContent) || void 0 === gq ? void 0 : gq.includes(qq)
            }));
            gq && gq.scrollIntoView({
              block: "start",
              behavior: "smooth"
            })
          }), [Zq]),
          mE = (0, Yq.useCallback)((qq => {
            var Eq, gq;
            const Yq = null !== (Eq = null === (gq = iq.current) || void 0 === gq ? void 0 : gq.clientWidth) && void 0 !== Eq ? Eq : window.innerWidth,
              lq = Math.max(120, Yq - 200);
            return Math.min(Math.max(qq, 120), lq)
          }), []),
          xE = (0, Yq.useCallback)((() => {
            var qq;
            Rq.current && (Rq.current = !1, null === (qq = iq.current) || void 0 === qq || qq.classList.remove("DocsSidebarResizing"))
          }), []),
          AE = (0, Yq.useCallback)((qq => {
            var Eq;
            qq.preventDefault(), Rq.current = !0, null === (Eq = iq.current) || void 0 === Eq || Eq.classList.add("DocsSidebarResizing")
          }), []);
        (0, Yq.useEffect)((() => {
          const qq = iq.current,
            Eq = qq => {
              if (!Rq.current || !iq.current) return;
              const Eq = iq.current.getBoundingClientRect().left;
              kq(mE(qq.clientX - Eq))
            };
          return window.addEventListener("mousemove", Eq), window.addEventListener("mouseup", xE), () => {
            window.removeEventListener("mousemove", Eq), window.removeEventListener("mouseup", xE), null === qq || void 0 === qq || qq.classList.remove("DocsSidebarResizing")
          }
        }), [mE, xE]);
        const cE = (0, Yq.useCallback)((qq => {
          if (qq) {
            const [Eq, gq] = qq.slice(1).split("-");
            gq && (Uq.current = {
              docId: Eq,
              subsection: gq
            }), Eq && lE(Eq)
          }
        }), [lE]);
        (0, Yq.useEffect)((() => {
          const qq = Uq.current;
          qq && nq === qq.docId && (setTimeout((() => {
            OE(qq.subsection)
          }), 0), Uq.current = null)
        })), (0, Yq.useEffect)((() => {
          if (!Zq.current) return;
          Zq.current.querySelectorAll("a.DocsAnchor").forEach((qq => {
            qq.addEventListener("click", (Eq => {
              Eq.preventDefault(), cE(qq.dataset.id)
            }))
          }))
        }), [nq, cE]);
        const uE = Object.values(Qq).find((qq => (null === qq || void 0 === qq ? void 0 : qq.pageStep) === Fq));
        return (0, Nq.jsx)(oq.h, {
          tutorial: "docsOverview",
          step: null !== (yq = null === uE || void 0 === uE ? void 0 : uE.pageStep) && void 0 !== yq ? yq : "docsPanel",
          text: eq(null !== (tq = null === uE || void 0 === uE ? void 0 : uE.pageText) && void 0 !== tq ? tq : "codeEditor:tutorialDocsPanel"),
          enabled: hq,
          placement: "left",
          onPrevious: uE ? void 0 : vq,
          children: (0, Nq.jsxs)("div", {
            className: "DocsPanel",
            ref: iq,
            children: [(0, Nq.jsxs)("div", {
              className: "DocsSidebar",
              style: {
                width: Jq,
                minWidth: Jq,
                maxWidth: Jq
              },
              children: [(0, Nq.jsx)(Oq.b, {
                className: "DocsSearch",
                placeholderText: "\ud83d\udd0e Search docs...",
                onValueChange: qq => {
                  Mq(qq), zq(0), pq(0)
                }
              }, sq), (0, Nq.jsx)("div", {
                className: "DocsNavList",
                children: Kq ? Cq.map((qq => (0, Nq.jsxs)("div", {
                  className: xq()("DocsNavItem", "SearchResult", {
                    Active: qq.doc.id === (null === Iq || void 0 === Iq ? void 0 : Iq.id)
                  }),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    lE(qq.doc.id)
                  },
                  children: [(0, Nq.jsxs)("div", {
                    className: "SearchResultTitle",
                    children: [qq.doc.title, (0, Nq.jsx)("span", {
                      className: "SearchResultCount",
                      children: qq.matchCount
                    })]
                  }), (0, Nq.jsx)("div", {
                    className: "SearchResultSnippet",
                    children: dq(qq.snippet, fq)
                  })]
                }, qq.doc.id))) : lq.e.map((qq => {
                  const Eq = (0, Nq.jsxs)("div", {
                      className: xq()("DocsNavItem", {
                        Active: qq.id === (null === Iq || void 0 === Iq ? void 0 : Iq.id)
                      }),
                      "data-pad-focusable": !0,
                      onClick: () => {
                        lE(qq.id)
                      },
                      children: [(0, Nq.jsx)("span", {
                        className: "DocsNavItemTitle",
                        children: qq.title
                      }), qq.subsections && qq.id === (null === Iq || void 0 === Iq ? void 0 : Iq.id) && Gq && (0, Nq.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, Nq.jsx)(jq.d, {
                          name: "angle-down"
                        })
                      }), qq.subsections && (qq.id !== (null === Iq || void 0 === Iq ? void 0 : Iq.id) || !Gq) && (0, Nq.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, Nq.jsx)(jq.d, {
                          name: "angle-up"
                        })
                      })]
                    }),
                    gq = Qq[qq.id];
                  return (0, Nq.jsxs)(Yq.Fragment, {
                    children: [gq && (0, Nq.jsx)(oq.h, {
                      tutorial: "docsOverview",
                      step: gq.tabStep,
                      text: eq(gq.tabText),
                      enabled: hq,
                      placement: "left",
                      waitForClick: !0,
                      children: Eq
                    }), !gq && Eq, Gq && qq.subsections && qq.id === (null === Iq || void 0 === Iq ? void 0 : Iq.id) && qq.subsections.map((qq => (0, Nq.jsx)("div", {
                      className: "DocsNavItem DocsSubsection",
                      "data-pad-focusable": !0,
                      onClick: () => {
                        OE(qq)
                      },
                      children: qq
                    }, qq)))]
                  }, qq.id)
                }))
              }), (0, Nq.jsx)("div", {
                className: "DocsSidebarButtonContainer",
                children: (0, Nq.jsx)(Hq.e, {
                  tooltipInner: eq("codeEditor:popOutDocsTooltip"),
                  placement: "top",
                  children: (0, Nq.jsx)(Aq.g, {
                    className: "DocsSidebarButton",
                    onClick: rq,
                    children: eq("codeEditor:popOutDocs")
                  })
                })
              })]
            }), (0, Nq.jsx)("div", {
              className: "DocsSidebarResizeHandle",
              onMouseDown: AE
            }), (0, Nq.jsxs)("div", {
              className: "DocsContentWrapper",
              children: [Kq && EE > 0 && (0, Nq.jsxs)("div", {
                className: "DocsMatchNav",
                children: [(0, Nq.jsxs)("span", {
                  className: "DocsMatchNavLabel",
                  children: [Tq + 1, " / ", EE]
                }), (0, Nq.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    YE(-1)
                  },
                  children: "\u25b2"
                }), (0, Nq.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    YE(1)
                  },
                  children: "\u25bc"
                })]
              }), (0, Nq.jsx)("div", {
                className: "DocsContent",
                ref: Zq,
                dangerouslySetInnerHTML: {
                  __html: qE
                }
              })]
            })]
          })
        })
      }))
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);