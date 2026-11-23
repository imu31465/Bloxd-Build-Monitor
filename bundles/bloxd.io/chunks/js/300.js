export const id = 300;
export const ids = [300];
export const modules = {
  41474: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      default: () => sk
    });
    var Xk = Ik(58),
      Tk = Ik(4745),
      ik = Ik(1617),
      yk = Ik(1055),
      lk = Ik.n(yk),
      ak = Ik(1406),
      qk = Ik(1179),
      Lk = Ik(4714),
      tk = Ik(4729),
      Zk = Ik(4731),
      jk = Ik(1096);

    function ek(kk) {
      return kk.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    Lk.c.registerLanguage("javascript", tk.b), Lk.c.registerLanguage("typescript", Zk.d);

    function wk(kk, Fk) {
      const Ik = ek(kk).replace(/"/g, "&quot;");
      return `<button type="button" class="DocsCopyButton ${Fk}" title="${Ik}" aria-label="${Ik}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5"/><path d="M10.5 3.5V1.5H1.5v9h2"/></svg><svg class="DocsCopiedIcon" viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 8.5l3.5 3.5 7.5-7.5"/></svg></button>`
    }

    function Hk(kk, Fk) {
      const Ik = [],
        Xk = kk.toLowerCase(),
        Tk = Fk.toLowerCase();
      let ik = 0;
      for (; ik < kk.length;) {
        const yk = Xk.indexOf(Tk, ik);
        if (-1 === yk) {
          Ik.push(kk.slice(ik));
          break
        }
        yk > ik && Ik.push(kk.slice(ik, yk)), Ik.push((0, jk.jsx)("mark", {
          className: "DocsHighlight",
          children: kk.slice(yk, yk + Fk.length)
        }, yk)), ik = yk + Fk.length
      }
      return Ik
    }
    var Jk = Ik(1066),
      xk = Ik(1333),
      Pk = Ik(36920),
      Kk = Ik(36927);
    const Qk = {
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
      sk = (0, Xk.memo)((function(kk) {
        var Fk, Ik, yk, tk, Zk, sk, Vk;
        let {
          popOutDocs: zk,
          hideDocs: Sk,
          tutorialEnabled: vk
        } = kk;
        const [Ek, Ok] = (0, Xk.useState)(Tk.d[0].id), nk = (0, Xk.useRef)(null), Gk = (0, Xk.useRef)(null), [pk, uk] = (0, Xk.useState)(""), [bk, Rk] = (0, Xk.useState)(0), [Uk, Ck] = (0, Xk.useState)(null), [Nk, ck] = (0, Xk.useState)(!1), [Wk, fk] = (0, Xk.useState)(160), Bk = (0, Xk.useRef)(!1), dk = (0, Xk.useRef)(null), Yk = (0, Pk.k)("docsOverview"), [Ak, gk] = (0, Xk.useState)(0), mk = Object.values(Qk).some((kk => (null === kk || void 0 === kk ? void 0 : kk.tabStep) === Yk));
        (0, Xk.useEffect)((() => {
          mk && pk.length > 0 && (uk(""), gk((kk => kk + 1)))
        }), [mk, pk]);
        const hk = pk.length > 0,
          rk = (0, Xk.useMemo)((() => function(kk) {
            if (!kk) return [];
            const Fk = kk.toLowerCase(),
              Ik = [];
            for (const Xk of Tk.d) {
              const kk = Xk.content.toLowerCase();
              let Tk = 0,
                ik = -1,
                yk = 0,
                lk = kk.indexOf(Fk, yk);
              for (; - 1 !== lk;) - 1 === ik && (ik = lk), Tk++, yk = lk + Fk.length, lk = kk.indexOf(Fk, yk);
              if (0 === Tk) continue;
              const ak = Math.max(0, ik - 40),
                qk = Math.min(Xk.content.length, ik + Fk.length + 40),
                Lk = (ak > 0 ? "..." : "") + Xk.content.slice(ak, qk).replace(/\n/g, " ") + (qk < Xk.content.length ? "..." : "");
              Ik.push({
                doc: Xk,
                matchCount: Tk,
                snippet: Lk
              })
            }
            return Ik.sort(((kk, Fk) => Fk.matchCount - kk.matchCount)), Ik
          }(pk)), [pk]),
          Dk = hk ? null !== (Fk = null !== (Ik = null === (yk = rk.find((kk => kk.doc.id === Ek))) || void 0 === yk ? void 0 : yk.doc) && void 0 !== Ik ? Ik : null === (tk = rk[0]) || void 0 === tk ? void 0 : tk.doc) && void 0 !== Fk ? Fk : null : null !== (Zk = Tk.d.find((kk => kk.id === Ek))) && void 0 !== Zk ? Zk : Tk.d[0],
          {
            t: Mk
          } = (0, qk.y)(),
          kF = Mk("codeEditor:copySnippet"),
          FF = (0, Xk.useMemo)((() => Dk ? function(kk, Fk, Ik, Xk) {
            let Tk = Fk;
            Tk = Tk.replace(/\r\n/g, "\n");
            const ik = [];
            Tk = Tk.replace(/```(\w*)\n([\s\S]*?)```/g, ((kk, Fk, Xk) => {
              const Tk = ik.length;
              let yk = ek(Xk);
              try {
                yk = Lk.c.highlight(Xk.trimEnd(), {
                  language: Fk
                }).value
              } catch (lk) {
                console.warn("Could not highlight documentation code block", lk)
              }
              return ik.push(`<div class="DocsCodeBlockRow"><pre class="DocsCodeBlock" data-lang="${Fk}"><code>${yk}</code></pre>${wk(Ik,"DocsCopyBlock")}</div>`), `\0PLACEHOLDER_${Tk}\0`
            })), Tk = Tk.replace(/(`{1,2})([^\n]+?)\1(?!`)/g, ((Fk, Xk, Tk) => {
              const yk = ik.length,
                lk = 2 === Xk.length ? Tk.replace(/^ (.*) $/, "$1") : Tk;
              let ak = ek(lk);
              try {
                "apiReference" !== kk && "callbacks" !== kk || (ak = Lk.c.highlight(lk.trimEnd().replaceAll("\\|", "|"), {
                  language: "typescript"
                }).value)
              } catch (qk) {
                console.warn("Could not highlight documentation snippet", qk)
              }
              return ik.push(`<span class="DocsInlineCodeRow"><code class="DocsInlineCode">${ak}</code>${wk(Ik,"DocsCopyInline")}</span>`), `\0PLACEHOLDER_${yk}\0`
            })), Tk = ek(Tk), Tk = Tk.replace(/^#### (.+)$/gm, '<h4 class="DocsH4">$1</h4>'), Tk = Tk.replace(/^### (.+)$/gm, '<h3 class="DocsH3">$1</h3>'), Tk = Tk.replace(/^## (.+)$/gm, '<h2 class="DocsH2">$1</h2>'), Tk = Tk.replace(/^# (.+)$/gm, '<h1 class="DocsH1">$1</h1>'), Tk = Tk.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"), Tk = Tk.replace(/\[([^\]]+)\]\(([^)]+)\)/g, ((kk, Fk, Ik) => Ik.startsWith("#") ? `<a class="DocsAnchor" data-id="${Ik}">${Fk}</a>` : `<a href="${Ik}" target="_blank" rel="noopener noreferrer">${Fk}</a>`)), Tk = Tk.replace(/^(\|.+\|)\n(\|[\s:\-|]+\|)\n((?:\|.+\|\s*\r?\n?)*)/gm, ((kk, Fk, Ik, Xk) => `<table class="DocsTable"><thead><tr>${Fk.split("|").slice(1,-1).map((kk=>`<th>${kk.trim()}</th>`)).join("")}</tr></thead><tbody>${Xk.trim().split("\n").map((kk=>`<tr>${kk.split("|").slice(1,-1).map((kk=>`<td>${kk.trim()}</td>`)).join("")}</tr>`)).join("")}</tbody></table>`)), Tk = Tk.replace(/(?:^[ \t]*([*-])[ \t]+.+(?:\n|$))+/gm, ((kk, Fk) => function(kk, Fk) {
              const Ik = "*" === Fk,
                Xk = [];
              for (const lk of kk.split("\n")) {
                const kk = lk.match(/^([ \t]*)(?:[*-])[ \t]+(.+)$/);
                kk && Xk.push({
                  indent: kk[1].replace(/\t/g, "  ").length,
                  content: kk[2]
                })
              }
              let Tk = "";
              const ik = [],
                yk = Ik ? "ol" : "ul";
              for (const {
                  indent: lk,
                  content: ak
                }
                of Xk) {
                for (; ik.length > 0 && lk < ik[ik.length - 1];) Tk += `</${yk}></li>`, ik.pop();
                (0 === ik.length || lk > ik[ik.length - 1]) && (ik.length > 0 && (Tk = Tk.replace(/<\/li>$/, "")), Tk += `<${yk} class="DocsList">`, ik.push(lk)), Tk += `<li class="DocsListItem">${ak}</li>`
              }
              for (; ik.length > 0;) Tk += `</${yk}>`, ik.pop(), ik.length > 0 && (Tk += "</li>");
              return Tk
            }(kk, Fk))), Tk = Tk.replace(/\n{2,}/g, "\n<br/>\n");
            for (let yk = 0; yk < ik.length; yk++) Tk = Tk.replace(`\0PLACEHOLDER_${yk}\0`, ik[yk]);
            if (Xk) {
              const kk = ek(Xk).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                Fk = new RegExp(kk, "gi");
              Tk = Tk.replace(/([^<>]+)(?=<|$)/g, (kk => kk.replace(Fk, (kk => `<mark class="DocsHighlight">${kk}</mark>`))))
            }
            return Tk
          }(Dk.id, Dk.content, kF, hk ? pk : void 0) : ""), [Dk, kF, hk, pk]);
        (0, Xk.useEffect)((() => {
          const kk = Gk.current;
          if (!kk) return;
          const Fk = kk => {
            var Fk, Ik, Xk, Tk, ik;
            const yk = null === (Fk = (Ik = kk.target).closest) || void 0 === Fk ? void 0 : Fk.call(Ik, ".DocsCopyButton");
            if (!yk) return;
            kk.preventDefault(), kk.stopPropagation();
            const lk = null !== (Xk = null === (Tk = yk.parentElement) || void 0 === Tk || null === (ik = Tk.querySelector("code")) || void 0 === ik ? void 0 : ik.textContent) && void 0 !== Xk ? Xk : "";
            navigator.clipboard.writeText(lk.trimEnd()).then((() => {
              yk.classList.add("Copied"), setTimeout((() => {
                yk.classList.remove("Copied")
              }), 1500)
            })).catch((kk => {
              console.warn("Could not copy documentation code", kk)
            }))
          };
          return kk.addEventListener("click", Fk, !0), () => {
            kk.removeEventListener("click", Fk, !0)
          }
        }), []);
        const [IF, XF] = (0, Xk.useState)(0);
        (0, Xk.useEffect)((() => {
          if (!hk || !Gk.current) return void XF(0);
          const kk = Gk.current.querySelectorAll(".DocsHighlight").length;
          XF(kk)
        }), [hk, FF]), (0, Xk.useEffect)((() => {
          if (null === Uk || !Gk.current) return;
          Ck(null);
          const kk = Gk.current.querySelectorAll(".DocsHighlight");
          if (0 === kk.length) return;
          const Fk = Math.min(Uk, kk.length - 1);
          Rk(Fk), kk.forEach((kk => {
            kk.classList.remove("DocsHighlightActive")
          })), kk[Fk].classList.add("DocsHighlightActive"), kk[Fk].scrollIntoView({
            block: "center",
            behavior: "smooth"
          })
        }), [Uk, FF]);
        const TF = (0, Xk.useCallback)((kk => {
            if (!Gk.current) return;
            const Fk = Gk.current.querySelectorAll(".DocsHighlight");
            if (0 === Fk.length) return;
            const Ik = (bk + kk + Fk.length) % Fk.length;
            Rk(Ik), Ck(Ik)
          }), [bk]),
          iF = (0, Xk.useCallback)((kk => {
            var Fk;
            const Ik = null === (Fk = Qk[kk]) || void 0 === Fk ? void 0 : Fk.tabStep;
            Ik && Ik === Yk && (0, Kk.e)(Ik), kk !== Ek ? (ck(!0), Ok(kk), Rk(0), Gk.current && (Gk.current.scrollTop = 0), hk && Ck(0)) : ck(!Nk)
          }), [hk, Ek, Nk, Yk]),
          yF = (0, Xk.useCallback)((kk => {
            var Fk;
            const Ik = Array.from((null === (Fk = Gk.current) || void 0 === Fk ? void 0 : Fk.querySelectorAll(".DocsH2, .DocsH3")) || []).find((Fk => {
              var Ik;
              return null === (Ik = Fk.textContent) || void 0 === Ik ? void 0 : Ik.includes(kk)
            }));
            Ik && Ik.scrollIntoView({
              block: "start",
              behavior: "smooth"
            })
          }), [Gk]),
          lF = (0, Xk.useCallback)((kk => {
            var Fk, Ik;
            const Xk = null !== (Fk = null === (Ik = nk.current) || void 0 === Ik ? void 0 : Ik.clientWidth) && void 0 !== Fk ? Fk : window.innerWidth,
              Tk = Math.max(120, Xk - 200);
            return Math.min(Math.max(kk, 120), Tk)
          }), []),
          aF = (0, Xk.useCallback)((() => {
            var kk;
            Bk.current && (Bk.current = !1, null === (kk = nk.current) || void 0 === kk || kk.classList.remove("DocsSidebarResizing"))
          }), []),
          qF = (0, Xk.useCallback)((kk => {
            var Fk;
            kk.preventDefault(), Bk.current = !0, null === (Fk = nk.current) || void 0 === Fk || Fk.classList.add("DocsSidebarResizing")
          }), []);
        (0, Xk.useEffect)((() => {
          const kk = nk.current,
            Fk = kk => {
              if (!Bk.current || !nk.current) return;
              const Fk = nk.current.getBoundingClientRect().left;
              fk(lF(kk.clientX - Fk))
            };
          return window.addEventListener("mousemove", Fk), window.addEventListener("mouseup", aF), () => {
            window.removeEventListener("mousemove", Fk), window.removeEventListener("mouseup", aF), null === kk || void 0 === kk || kk.classList.remove("DocsSidebarResizing")
          }
        }), [lF, aF]);
        const LF = (0, Xk.useCallback)((kk => {
          if (kk) {
            const [Fk, Ik] = kk.slice(1).split("-");
            Ik && (dk.current = {
              docId: Fk,
              subsection: Ik
            }), Fk && iF(Fk)
          }
        }), [iF]);
        (0, Xk.useEffect)((() => {
          const kk = dk.current;
          kk && Ek === kk.docId && (setTimeout((() => {
            yF(kk.subsection)
          }), 0), dk.current = null)
        })), (0, Xk.useEffect)((() => {
          if (!Gk.current) return;
          Gk.current.querySelectorAll("a.DocsAnchor").forEach((kk => {
            kk.addEventListener("click", (Fk => {
              Fk.preventDefault(), LF(kk.dataset.id)
            }))
          }))
        }), [Ek, LF]);
        const tF = Object.values(Qk).find((kk => (null === kk || void 0 === kk ? void 0 : kk.pageStep) === Yk));
        return (0, jk.jsx)(Pk.j, {
          tutorial: "docsOverview",
          step: null !== (sk = null === tF || void 0 === tF ? void 0 : tF.pageStep) && void 0 !== sk ? sk : "docsPanel",
          text: Mk(null !== (Vk = null === tF || void 0 === tF ? void 0 : tF.pageText) && void 0 !== Vk ? Vk : "codeEditor:tutorialDocsPanel"),
          enabled: vk,
          placement: "left",
          onPrevious: tF ? void 0 : Sk,
          children: (0, jk.jsxs)("div", {
            className: "DocsPanel",
            ref: nk,
            children: [(0, jk.jsxs)("div", {
              className: "DocsSidebar",
              style: {
                width: Wk,
                minWidth: Wk,
                maxWidth: Wk
              },
              children: [(0, jk.jsx)(ik.c, {
                className: "DocsSearch",
                placeholderText: "\ud83d\udd0e Search docs...",
                onValueChange: kk => {
                  uk(kk), Rk(0), Ck(0)
                }
              }, Ak), (0, jk.jsx)("div", {
                className: "DocsNavList",
                children: hk ? rk.map((kk => (0, jk.jsxs)("div", {
                  className: lk()("DocsNavItem", "SearchResult", {
                    Active: kk.doc.id === (null === Dk || void 0 === Dk ? void 0 : Dk.id)
                  }),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    iF(kk.doc.id)
                  },
                  children: [(0, jk.jsxs)("div", {
                    className: "SearchResultTitle",
                    children: [kk.doc.title, (0, jk.jsx)("span", {
                      className: "SearchResultCount",
                      children: kk.matchCount
                    })]
                  }), (0, jk.jsx)("div", {
                    className: "SearchResultSnippet",
                    children: Hk(kk.snippet, pk)
                  })]
                }, kk.doc.id))) : Tk.d.map((kk => {
                  const Fk = (0, jk.jsxs)("div", {
                      className: lk()("DocsNavItem", {
                        Active: kk.id === (null === Dk || void 0 === Dk ? void 0 : Dk.id)
                      }),
                      "data-pad-focusable": !0,
                      onClick: () => {
                        iF(kk.id)
                      },
                      children: [(0, jk.jsx)("span", {
                        className: "DocsNavItemTitle",
                        children: kk.title
                      }), kk.subsections && kk.id === (null === Dk || void 0 === Dk ? void 0 : Dk.id) && Nk && (0, jk.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, jk.jsx)(Jk.e, {
                          name: "angle-down"
                        })
                      }), kk.subsections && (kk.id !== (null === Dk || void 0 === Dk ? void 0 : Dk.id) || !Nk) && (0, jk.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, jk.jsx)(Jk.e, {
                          name: "angle-up"
                        })
                      })]
                    }),
                    Ik = Qk[kk.id];
                  return (0, jk.jsxs)(Xk.Fragment, {
                    children: [Ik && (0, jk.jsx)(Pk.j, {
                      tutorial: "docsOverview",
                      step: Ik.tabStep,
                      text: Mk(Ik.tabText),
                      enabled: vk,
                      placement: "left",
                      waitForClick: !0,
                      children: Fk
                    }), !Ik && Fk, Nk && kk.subsections && kk.id === (null === Dk || void 0 === Dk ? void 0 : Dk.id) && kk.subsections.map((kk => (0, jk.jsx)("div", {
                      className: "DocsNavItem DocsSubsection",
                      "data-pad-focusable": !0,
                      onClick: () => {
                        yF(kk)
                      },
                      children: kk
                    }, kk)))]
                  }, kk.id)
                }))
              }), (0, jk.jsx)("div", {
                className: "DocsSidebarButtonContainer",
                children: (0, jk.jsx)(xk.g, {
                  tooltipInner: Mk("codeEditor:popOutDocsTooltip"),
                  placement: "top",
                  children: (0, jk.jsx)(ak.d, {
                    className: "DocsSidebarButton",
                    onClick: zk,
                    children: Mk("codeEditor:popOutDocs")
                  })
                })
              })]
            }), (0, jk.jsx)("div", {
              className: "DocsSidebarResizeHandle",
              onMouseDown: qF
            }), (0, jk.jsxs)("div", {
              className: "DocsContentWrapper",
              children: [hk && IF > 0 && (0, jk.jsxs)("div", {
                className: "DocsMatchNav",
                children: [(0, jk.jsxs)("span", {
                  className: "DocsMatchNavLabel",
                  children: [bk + 1, " / ", IF]
                }), (0, jk.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    TF(-1)
                  },
                  children: "\u25b2"
                }), (0, jk.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    TF(1)
                  },
                  children: "\u25bc"
                })]
              }), (0, jk.jsx)("div", {
                className: "DocsContent",
                ref: Gk,
                dangerouslySetInnerHTML: {
                  __html: FF
                }
              })]
            })]
          })
        })
      }))
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);