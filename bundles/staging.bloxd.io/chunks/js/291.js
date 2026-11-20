export const id = 291;
export const ids = [291];
export const modules = {
  40894: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      default: () => Lk
    });
    var Rk = Bk(61),
      tk = Bk(4467),
      ak = Bk(1620),
      Xk = Bk(1020),
      bk = Bk.n(Xk),
      wk = Bk(1389),
      dk = Bk(1149),
      sk = Bk(4437),
      Vk = Bk(4445),
      Jk = Bk(4452),
      Ak = Bk(1069);

    function ek(kk) {
      return kk.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    sk.c.registerLanguage("javascript", Vk.b), sk.c.registerLanguage("typescript", Jk.c);

    function yk(kk, Fk) {
      const Bk = ek(kk).replace(/"/g, "&quot;");
      return `<button type="button" class="DocsCopyButton ${Fk}" title="${Bk}" aria-label="${Bk}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5"/><path d="M10.5 3.5V1.5H1.5v9h2"/></svg><svg class="DocsCopiedIcon" viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 8.5l3.5 3.5 7.5-7.5"/></svg></button>`
    }

    function fk(kk, Fk) {
      const Bk = [],
        Rk = kk.toLowerCase(),
        tk = Fk.toLowerCase();
      let ak = 0;
      for (; ak < kk.length;) {
        const Xk = Rk.indexOf(tk, ak);
        if (-1 === Xk) {
          Bk.push(kk.slice(ak));
          break
        }
        Xk > ak && Bk.push(kk.slice(ak, Xk)), Bk.push((0, Ak.jsx)("mark", {
          className: "DocsHighlight",
          children: kk.slice(Xk, Xk + Fk.length)
        }, Xk)), ak = Xk + Fk.length
      }
      return Bk
    }
    var mk = Bk(1028),
      Wk = Bk(1312),
      vk = Bk(36555),
      ik = Bk(36563);
    const Yk = {
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
      Lk = (0, Rk.memo)((function(kk) {
        var Fk, Bk, Xk, Vk, Jk, Lk, Ok;
        let {
          popOutDocs: Ek,
          hideDocs: Sk,
          tutorialEnabled: Nk
        } = kk;
        const [Hk, uk] = (0, Rk.useState)(tk.e[0].id), Mk = (0, Rk.useRef)(null), gk = (0, Rk.useRef)(null), [Uk, ck] = (0, Rk.useState)(""), [Gk, Tk] = (0, Rk.useState)(0), [rk, Dk] = (0, Rk.useState)(null), [zk, Pk] = (0, Rk.useState)(!1), [hk, qk] = (0, Rk.useState)(160), Ck = (0, Rk.useRef)(!1), Zk = (0, Rk.useRef)(null), pk = (0, vk.h)("docsOverview"), [Kk, xk] = (0, Rk.useState)(0), jk = Object.values(Yk).some((kk => (null === kk || void 0 === kk ? void 0 : kk.tabStep) === pk));
        (0, Rk.useEffect)((() => {
          jk && Uk.length > 0 && (ck(""), xk((kk => kk + 1)))
        }), [jk, Uk]);
        const lk = Uk.length > 0,
          nk = (0, Rk.useMemo)((() => function(kk) {
            if (!kk) return [];
            const Fk = kk.toLowerCase(),
              Bk = [];
            for (const Rk of tk.e) {
              const kk = Rk.content.toLowerCase();
              let tk = 0,
                ak = -1,
                Xk = 0,
                bk = kk.indexOf(Fk, Xk);
              for (; - 1 !== bk;) - 1 === ak && (ak = bk), tk++, Xk = bk + Fk.length, bk = kk.indexOf(Fk, Xk);
              if (0 === tk) continue;
              const wk = Math.max(0, ak - 40),
                dk = Math.min(Rk.content.length, ak + Fk.length + 40),
                sk = (wk > 0 ? "..." : "") + Rk.content.slice(wk, dk).replace(/\n/g, " ") + (dk < Rk.content.length ? "..." : "");
              Bk.push({
                doc: Rk,
                matchCount: tk,
                snippet: sk
              })
            }
            return Bk.sort(((kk, Fk) => Fk.matchCount - kk.matchCount)), Bk
          }(Uk)), [Uk]),
          Ik = lk ? null !== (Fk = null !== (Bk = null === (Xk = nk.find((kk => kk.doc.id === Hk))) || void 0 === Xk ? void 0 : Xk.doc) && void 0 !== Bk ? Bk : null === (Vk = nk[0]) || void 0 === Vk ? void 0 : Vk.doc) && void 0 !== Fk ? Fk : null : null !== (Jk = tk.e.find((kk => kk.id === Hk))) && void 0 !== Jk ? Jk : tk.e[0],
          {
            t: Qk
          } = (0, dk.x)(),
          kF = Qk("codeEditor:copySnippet"),
          FF = (0, Rk.useMemo)((() => Ik ? function(kk, Fk, Bk, Rk) {
            let tk = Fk;
            tk = tk.replace(/\r\n/g, "\n");
            const ak = [];
            tk = tk.replace(/```(\w*)\n([\s\S]*?)```/g, ((kk, Fk, Rk) => {
              const tk = ak.length;
              let Xk = ek(Rk);
              try {
                Xk = sk.c.highlight(Rk.trimEnd(), {
                  language: Fk
                }).value
              } catch (bk) {
                console.warn("Could not highlight documentation code block", bk)
              }
              return ak.push(`<div class="DocsCodeBlockRow"><pre class="DocsCodeBlock" data-lang="${Fk}"><code>${Xk}</code></pre>${yk(Bk,"DocsCopyBlock")}</div>`), `\0PLACEHOLDER_${tk}\0`
            })), tk = tk.replace(/(`{1,2})([^\n]+?)\1(?!`)/g, ((Fk, Rk, tk) => {
              const Xk = ak.length,
                bk = 2 === Rk.length ? tk.replace(/^ (.*) $/, "$1") : tk;
              let wk = ek(bk);
              try {
                "apiReference" !== kk && "callbacks" !== kk || (wk = sk.c.highlight(bk.trimEnd().replaceAll("\\|", "|"), {
                  language: "typescript"
                }).value)
              } catch (dk) {
                console.warn("Could not highlight documentation snippet", dk)
              }
              return ak.push(`<span class="DocsInlineCodeRow"><code class="DocsInlineCode">${wk}</code>${yk(Bk,"DocsCopyInline")}</span>`), `\0PLACEHOLDER_${Xk}\0`
            })), tk = ek(tk), tk = tk.replace(/^#### (.+)$/gm, '<h4 class="DocsH4">$1</h4>'), tk = tk.replace(/^### (.+)$/gm, '<h3 class="DocsH3">$1</h3>'), tk = tk.replace(/^## (.+)$/gm, '<h2 class="DocsH2">$1</h2>'), tk = tk.replace(/^# (.+)$/gm, '<h1 class="DocsH1">$1</h1>'), tk = tk.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"), tk = tk.replace(/\[([^\]]+)\]\(([^)]+)\)/g, ((kk, Fk, Bk) => Bk.startsWith("#") ? `<a class="DocsAnchor" data-id="${Bk}">${Fk}</a>` : `<a href="${Bk}" target="_blank" rel="noopener noreferrer">${Fk}</a>`)), tk = tk.replace(/^(\|.+\|)\n(\|[\s:\-|]+\|)\n((?:\|.+\|\s*\r?\n?)*)/gm, ((kk, Fk, Bk, Rk) => `<table class="DocsTable"><thead><tr>${Fk.split("|").slice(1,-1).map((kk=>`<th>${kk.trim()}</th>`)).join("")}</tr></thead><tbody>${Rk.trim().split("\n").map((kk=>`<tr>${kk.split("|").slice(1,-1).map((kk=>`<td>${kk.trim()}</td>`)).join("")}</tr>`)).join("")}</tbody></table>`)), tk = tk.replace(/(?:^[ \t]*([*-])[ \t]+.+(?:\n|$))+/gm, ((kk, Fk) => function(kk, Fk) {
              const Bk = "*" === Fk,
                Rk = [];
              for (const bk of kk.split("\n")) {
                const kk = bk.match(/^([ \t]*)(?:[*-])[ \t]+(.+)$/);
                kk && Rk.push({
                  indent: kk[1].replace(/\t/g, "  ").length,
                  content: kk[2]
                })
              }
              let tk = "";
              const ak = [],
                Xk = Bk ? "ol" : "ul";
              for (const {
                  indent: bk,
                  content: wk
                }
                of Rk) {
                for (; ak.length > 0 && bk < ak[ak.length - 1];) tk += `</${Xk}></li>`, ak.pop();
                (0 === ak.length || bk > ak[ak.length - 1]) && (ak.length > 0 && (tk = tk.replace(/<\/li>$/, "")), tk += `<${Xk} class="DocsList">`, ak.push(bk)), tk += `<li class="DocsListItem">${wk}</li>`
              }
              for (; ak.length > 0;) tk += `</${Xk}>`, ak.pop(), ak.length > 0 && (tk += "</li>");
              return tk
            }(kk, Fk))), tk = tk.replace(/\n{2,}/g, "\n<br/>\n");
            for (let Xk = 0; Xk < ak.length; Xk++) tk = tk.replace(`\0PLACEHOLDER_${Xk}\0`, ak[Xk]);
            if (Rk) {
              const kk = ek(Rk).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                Fk = new RegExp(kk, "gi");
              tk = tk.replace(/([^<>]+)(?=<|$)/g, (kk => kk.replace(Fk, (kk => `<mark class="DocsHighlight">${kk}</mark>`))))
            }
            return tk
          }(Ik.id, Ik.content, kF, lk ? Uk : void 0) : ""), [Ik, kF, lk, Uk]);
        (0, Rk.useEffect)((() => {
          const kk = gk.current;
          if (!kk) return;
          const Fk = kk => {
            var Fk, Bk, Rk, tk, ak;
            const Xk = null === (Fk = (Bk = kk.target).closest) || void 0 === Fk ? void 0 : Fk.call(Bk, ".DocsCopyButton");
            if (!Xk) return;
            kk.preventDefault(), kk.stopPropagation();
            const bk = null !== (Rk = null === (tk = Xk.parentElement) || void 0 === tk || null === (ak = tk.querySelector("code")) || void 0 === ak ? void 0 : ak.textContent) && void 0 !== Rk ? Rk : "";
            navigator.clipboard.writeText(bk.trimEnd()).then((() => {
              Xk.classList.add("Copied"), setTimeout((() => {
                Xk.classList.remove("Copied")
              }), 1500)
            })).catch((kk => {
              console.warn("Could not copy documentation code", kk)
            }))
          };
          return kk.addEventListener("click", Fk, !0), () => {
            kk.removeEventListener("click", Fk, !0)
          }
        }), []);
        const [BF, RF] = (0, Rk.useState)(0);
        (0, Rk.useEffect)((() => {
          if (!lk || !gk.current) return void RF(0);
          const kk = gk.current.querySelectorAll(".DocsHighlight").length;
          RF(kk)
        }), [lk, FF]), (0, Rk.useEffect)((() => {
          if (null === rk || !gk.current) return;
          Dk(null);
          const kk = gk.current.querySelectorAll(".DocsHighlight");
          if (0 === kk.length) return;
          const Fk = Math.min(rk, kk.length - 1);
          Tk(Fk), kk.forEach((kk => {
            kk.classList.remove("DocsHighlightActive")
          })), kk[Fk].classList.add("DocsHighlightActive"), kk[Fk].scrollIntoView({
            block: "center",
            behavior: "smooth"
          })
        }), [rk, FF]);
        const tF = (0, Rk.useCallback)((kk => {
            if (!gk.current) return;
            const Fk = gk.current.querySelectorAll(".DocsHighlight");
            if (0 === Fk.length) return;
            const Bk = (Gk + kk + Fk.length) % Fk.length;
            Tk(Bk), Dk(Bk)
          }), [Gk]),
          aF = (0, Rk.useCallback)((kk => {
            var Fk;
            const Bk = null === (Fk = Yk[kk]) || void 0 === Fk ? void 0 : Fk.tabStep;
            Bk && Bk === pk && (0, ik.g)(Bk), kk !== Hk ? (Pk(!0), uk(kk), Tk(0), gk.current && (gk.current.scrollTop = 0), lk && Dk(0)) : Pk(!zk)
          }), [lk, Hk, zk, pk]),
          XF = (0, Rk.useCallback)((kk => {
            var Fk;
            const Bk = Array.from((null === (Fk = gk.current) || void 0 === Fk ? void 0 : Fk.querySelectorAll(".DocsH2, .DocsH3")) || []).find((Fk => {
              var Bk;
              return null === (Bk = Fk.textContent) || void 0 === Bk ? void 0 : Bk.includes(kk)
            }));
            Bk && Bk.scrollIntoView({
              block: "start",
              behavior: "smooth"
            })
          }), [gk]),
          bF = (0, Rk.useCallback)((kk => {
            var Fk, Bk;
            const Rk = null !== (Fk = null === (Bk = Mk.current) || void 0 === Bk ? void 0 : Bk.clientWidth) && void 0 !== Fk ? Fk : window.innerWidth,
              tk = Math.max(120, Rk - 200);
            return Math.min(Math.max(kk, 120), tk)
          }), []),
          wF = (0, Rk.useCallback)((() => {
            var kk;
            Ck.current && (Ck.current = !1, null === (kk = Mk.current) || void 0 === kk || kk.classList.remove("DocsSidebarResizing"))
          }), []),
          dF = (0, Rk.useCallback)((kk => {
            var Fk;
            kk.preventDefault(), Ck.current = !0, null === (Fk = Mk.current) || void 0 === Fk || Fk.classList.add("DocsSidebarResizing")
          }), []);
        (0, Rk.useEffect)((() => {
          const kk = Mk.current,
            Fk = kk => {
              if (!Ck.current || !Mk.current) return;
              const Fk = Mk.current.getBoundingClientRect().left;
              qk(bF(kk.clientX - Fk))
            };
          return window.addEventListener("mousemove", Fk), window.addEventListener("mouseup", wF), () => {
            window.removeEventListener("mousemove", Fk), window.removeEventListener("mouseup", wF), null === kk || void 0 === kk || kk.classList.remove("DocsSidebarResizing")
          }
        }), [bF, wF]);
        const sF = (0, Rk.useCallback)((kk => {
          if (kk) {
            const [Fk, Bk] = kk.slice(1).split("-");
            Bk && (Zk.current = {
              docId: Fk,
              subsection: Bk
            }), Fk && aF(Fk)
          }
        }), [aF]);
        (0, Rk.useEffect)((() => {
          const kk = Zk.current;
          kk && Hk === kk.docId && (setTimeout((() => {
            XF(kk.subsection)
          }), 0), Zk.current = null)
        })), (0, Rk.useEffect)((() => {
          if (!gk.current) return;
          gk.current.querySelectorAll("a.DocsAnchor").forEach((kk => {
            kk.addEventListener("click", (Fk => {
              Fk.preventDefault(), sF(kk.dataset.id)
            }))
          }))
        }), [Hk, sF]);
        const VF = Object.values(Yk).find((kk => (null === kk || void 0 === kk ? void 0 : kk.pageStep) === pk));
        return (0, Ak.jsx)(vk.f, {
          tutorial: "docsOverview",
          step: null !== (Lk = null === VF || void 0 === VF ? void 0 : VF.pageStep) && void 0 !== Lk ? Lk : "docsPanel",
          text: Qk(null !== (Ok = null === VF || void 0 === VF ? void 0 : VF.pageText) && void 0 !== Ok ? Ok : "codeEditor:tutorialDocsPanel"),
          enabled: Nk,
          placement: "left",
          onPrevious: VF ? void 0 : Sk,
          children: (0, Ak.jsxs)("div", {
            className: "DocsPanel",
            ref: Mk,
            children: [(0, Ak.jsxs)("div", {
              className: "DocsSidebar",
              style: {
                width: hk,
                minWidth: hk,
                maxWidth: hk
              },
              children: [(0, Ak.jsx)(ak.e, {
                className: "DocsSearch",
                placeholderText: "\ud83d\udd0e Search docs...",
                onValueChange: kk => {
                  ck(kk), Tk(0), Dk(0)
                }
              }, Kk), (0, Ak.jsx)("div", {
                className: "DocsNavList",
                children: lk ? nk.map((kk => (0, Ak.jsxs)("div", {
                  className: bk()("DocsNavItem", "SearchResult", {
                    Active: kk.doc.id === (null === Ik || void 0 === Ik ? void 0 : Ik.id)
                  }),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    aF(kk.doc.id)
                  },
                  children: [(0, Ak.jsxs)("div", {
                    className: "SearchResultTitle",
                    children: [kk.doc.title, (0, Ak.jsx)("span", {
                      className: "SearchResultCount",
                      children: kk.matchCount
                    })]
                  }), (0, Ak.jsx)("div", {
                    className: "SearchResultSnippet",
                    children: fk(kk.snippet, Uk)
                  })]
                }, kk.doc.id))) : tk.e.map((kk => {
                  const Fk = (0, Ak.jsxs)("div", {
                      className: bk()("DocsNavItem", {
                        Active: kk.id === (null === Ik || void 0 === Ik ? void 0 : Ik.id)
                      }),
                      "data-pad-focusable": !0,
                      onClick: () => {
                        aF(kk.id)
                      },
                      children: [(0, Ak.jsx)("span", {
                        className: "DocsNavItemTitle",
                        children: kk.title
                      }), kk.subsections && kk.id === (null === Ik || void 0 === Ik ? void 0 : Ik.id) && zk && (0, Ak.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, Ak.jsx)(mk.d, {
                          name: "angle-down"
                        })
                      }), kk.subsections && (kk.id !== (null === Ik || void 0 === Ik ? void 0 : Ik.id) || !zk) && (0, Ak.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, Ak.jsx)(mk.d, {
                          name: "angle-up"
                        })
                      })]
                    }),
                    Bk = Yk[kk.id];
                  return (0, Ak.jsxs)(Rk.Fragment, {
                    children: [Bk && (0, Ak.jsx)(vk.f, {
                      tutorial: "docsOverview",
                      step: Bk.tabStep,
                      text: Qk(Bk.tabText),
                      enabled: Nk,
                      placement: "left",
                      waitForClick: !0,
                      children: Fk
                    }), !Bk && Fk, zk && kk.subsections && kk.id === (null === Ik || void 0 === Ik ? void 0 : Ik.id) && kk.subsections.map((kk => (0, Ak.jsx)("div", {
                      className: "DocsNavItem DocsSubsection",
                      "data-pad-focusable": !0,
                      onClick: () => {
                        XF(kk)
                      },
                      children: kk
                    }, kk)))]
                  }, kk.id)
                }))
              }), (0, Ak.jsx)("div", {
                className: "DocsSidebarButtonContainer",
                children: (0, Ak.jsx)(Wk.d, {
                  tooltipInner: Qk("codeEditor:popOutDocsTooltip"),
                  placement: "top",
                  children: (0, Ak.jsx)(wk.g, {
                    className: "DocsSidebarButton",
                    onClick: Ek,
                    children: Qk("codeEditor:popOutDocs")
                  })
                })
              })]
            }), (0, Ak.jsx)("div", {
              className: "DocsSidebarResizeHandle",
              onMouseDown: dF
            }), (0, Ak.jsxs)("div", {
              className: "DocsContentWrapper",
              children: [lk && BF > 0 && (0, Ak.jsxs)("div", {
                className: "DocsMatchNav",
                children: [(0, Ak.jsxs)("span", {
                  className: "DocsMatchNavLabel",
                  children: [Gk + 1, " / ", BF]
                }), (0, Ak.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    tF(-1)
                  },
                  children: "\u25b2"
                }), (0, Ak.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    tF(1)
                  },
                  children: "\u25bc"
                })]
              }), (0, Ak.jsx)("div", {
                className: "DocsContent",
                ref: gk,
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