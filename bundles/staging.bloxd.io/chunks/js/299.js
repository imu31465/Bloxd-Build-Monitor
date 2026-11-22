export const id = 299;
export const ids = [299];
export const modules = {
  41027: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      default: () => Ck
    });
    var Dk = ik(60),
      fk = ik(4689),
      Sk = ik(1648),
      bk = ik(1021),
      rk = ik.n(bk),
      Pk = ik(1410),
      mk = ik(1172),
      Mk = ik(4659),
      Kk = ik(4674),
      xk = ik(4678),
      nk = ik(1066);

    function Uk(kk) {
      return kk.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    Mk.b.registerLanguage("javascript", Kk.d), Mk.b.registerLanguage("typescript", xk.c);

    function Hk(kk, ek) {
      const ik = Uk(kk).replace(/"/g, "&quot;");
      return `<button type="button" class="DocsCopyButton ${ek}" title="${ik}" aria-label="${ik}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5"/><path d="M10.5 3.5V1.5H1.5v9h2"/></svg><svg class="DocsCopiedIcon" viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 8.5l3.5 3.5 7.5-7.5"/></svg></button>`
    }

    function wk(kk, ek) {
      const ik = [],
        Dk = kk.toLowerCase(),
        fk = ek.toLowerCase();
      let Sk = 0;
      for (; Sk < kk.length;) {
        const bk = Dk.indexOf(fk, Sk);
        if (-1 === bk) {
          ik.push(kk.slice(Sk));
          break
        }
        bk > Sk && ik.push(kk.slice(Sk, bk)), ik.push((0, nk.jsx)("mark", {
          className: "DocsHighlight",
          children: kk.slice(bk, bk + ek.length)
        }, bk)), Sk = bk + ek.length
      }
      return ik
    }
    var lk = ik(1033),
      pk = ik(1345),
      yk = ik(36486),
      Yk = ik(36489);
    const Lk = {
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
      Ck = (0, Dk.memo)((function(kk) {
        var ek, ik, bk, Kk, xk, Ck, Ak;
        let {
          popOutDocs: jk,
          hideDocs: sk,
          tutorialEnabled: dk
        } = kk;
        const [Vk, Fk] = (0, Dk.useState)(fk.b[0].id), uk = (0, Dk.useRef)(null), qk = (0, Dk.useRef)(null), [Ik, zk] = (0, Dk.useState)(""), [Qk, vk] = (0, Dk.useState)(0), [Ek, hk] = (0, Dk.useState)(null), [ak, Wk] = (0, Dk.useState)(!1), [tk, Xk] = (0, Dk.useState)(160), Bk = (0, Dk.useRef)(!1), ck = (0, Dk.useRef)(null), Tk = (0, yk.m)("docsOverview"), [Zk, Ok] = (0, Dk.useState)(0), gk = Object.values(Lk).some((kk => (null === kk || void 0 === kk ? void 0 : kk.tabStep) === Tk));
        (0, Dk.useEffect)((() => {
          gk && Ik.length > 0 && (zk(""), Ok((kk => kk + 1)))
        }), [gk, Ik]);
        const Gk = Ik.length > 0,
          Nk = (0, Dk.useMemo)((() => function(kk) {
            if (!kk) return [];
            const ek = kk.toLowerCase(),
              ik = [];
            for (const Dk of fk.b) {
              const kk = Dk.content.toLowerCase();
              let fk = 0,
                Sk = -1,
                bk = 0,
                rk = kk.indexOf(ek, bk);
              for (; - 1 !== rk;) - 1 === Sk && (Sk = rk), fk++, bk = rk + ek.length, rk = kk.indexOf(ek, bk);
              if (0 === fk) continue;
              const Pk = Math.max(0, Sk - 40),
                mk = Math.min(Dk.content.length, Sk + ek.length + 40),
                Mk = (Pk > 0 ? "..." : "") + Dk.content.slice(Pk, mk).replace(/\n/g, " ") + (mk < Dk.content.length ? "..." : "");
              ik.push({
                doc: Dk,
                matchCount: fk,
                snippet: Mk
              })
            }
            return ik.sort(((kk, ek) => ek.matchCount - kk.matchCount)), ik
          }(Ik)), [Ik]),
          Rk = Gk ? null !== (ek = null !== (ik = null === (bk = Nk.find((kk => kk.doc.id === Vk))) || void 0 === bk ? void 0 : bk.doc) && void 0 !== ik ? ik : null === (Kk = Nk[0]) || void 0 === Kk ? void 0 : Kk.doc) && void 0 !== ek ? ek : null : null !== (xk = fk.b.find((kk => kk.id === Vk))) && void 0 !== xk ? xk : fk.b[0],
          {
            t: Jk
          } = (0, mk.D)(),
          ke = Jk("codeEditor:copySnippet"),
          ee = (0, Dk.useMemo)((() => Rk ? function(kk, ek, ik, Dk) {
            let fk = ek;
            fk = fk.replace(/\r\n/g, "\n");
            const Sk = [];
            fk = fk.replace(/```(\w*)\n([\s\S]*?)```/g, ((kk, ek, Dk) => {
              const fk = Sk.length;
              let bk = Uk(Dk);
              try {
                bk = Mk.b.highlight(Dk.trimEnd(), {
                  language: ek
                }).value
              } catch (rk) {
                console.warn("Could not highlight documentation code block", rk)
              }
              return Sk.push(`<div class="DocsCodeBlockRow"><pre class="DocsCodeBlock" data-lang="${ek}"><code>${bk}</code></pre>${Hk(ik,"DocsCopyBlock")}</div>`), `\0PLACEHOLDER_${fk}\0`
            })), fk = fk.replace(/(`{1,2})([^\n]+?)\1(?!`)/g, ((ek, Dk, fk) => {
              const bk = Sk.length,
                rk = 2 === Dk.length ? fk.replace(/^ (.*) $/, "$1") : fk;
              let Pk = Uk(rk);
              try {
                "apiReference" !== kk && "callbacks" !== kk || (Pk = Mk.b.highlight(rk.trimEnd().replaceAll("\\|", "|"), {
                  language: "typescript"
                }).value)
              } catch (mk) {
                console.warn("Could not highlight documentation snippet", mk)
              }
              return Sk.push(`<span class="DocsInlineCodeRow"><code class="DocsInlineCode">${Pk}</code>${Hk(ik,"DocsCopyInline")}</span>`), `\0PLACEHOLDER_${bk}\0`
            })), fk = Uk(fk), fk = fk.replace(/^#### (.+)$/gm, '<h4 class="DocsH4">$1</h4>'), fk = fk.replace(/^### (.+)$/gm, '<h3 class="DocsH3">$1</h3>'), fk = fk.replace(/^## (.+)$/gm, '<h2 class="DocsH2">$1</h2>'), fk = fk.replace(/^# (.+)$/gm, '<h1 class="DocsH1">$1</h1>'), fk = fk.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"), fk = fk.replace(/\[([^\]]+)\]\(([^)]+)\)/g, ((kk, ek, ik) => ik.startsWith("#") ? `<a class="DocsAnchor" data-id="${ik}">${ek}</a>` : `<a href="${ik}" target="_blank" rel="noopener noreferrer">${ek}</a>`)), fk = fk.replace(/^(\|.+\|)\n(\|[\s:\-|]+\|)\n((?:\|.+\|\s*\r?\n?)*)/gm, ((kk, ek, ik, Dk) => `<table class="DocsTable"><thead><tr>${ek.split("|").slice(1,-1).map((kk=>`<th>${kk.trim()}</th>`)).join("")}</tr></thead><tbody>${Dk.trim().split("\n").map((kk=>`<tr>${kk.split("|").slice(1,-1).map((kk=>`<td>${kk.trim()}</td>`)).join("")}</tr>`)).join("")}</tbody></table>`)), fk = fk.replace(/(?:^[ \t]*([*-])[ \t]+.+(?:\n|$))+/gm, ((kk, ek) => function(kk, ek) {
              const ik = "*" === ek,
                Dk = [];
              for (const rk of kk.split("\n")) {
                const kk = rk.match(/^([ \t]*)(?:[*-])[ \t]+(.+)$/);
                kk && Dk.push({
                  indent: kk[1].replace(/\t/g, "  ").length,
                  content: kk[2]
                })
              }
              let fk = "";
              const Sk = [],
                bk = ik ? "ol" : "ul";
              for (const {
                  indent: rk,
                  content: Pk
                }
                of Dk) {
                for (; Sk.length > 0 && rk < Sk[Sk.length - 1];) fk += `</${bk}></li>`, Sk.pop();
                (0 === Sk.length || rk > Sk[Sk.length - 1]) && (Sk.length > 0 && (fk = fk.replace(/<\/li>$/, "")), fk += `<${bk} class="DocsList">`, Sk.push(rk)), fk += `<li class="DocsListItem">${Pk}</li>`
              }
              for (; Sk.length > 0;) fk += `</${bk}>`, Sk.pop(), Sk.length > 0 && (fk += "</li>");
              return fk
            }(kk, ek))), fk = fk.replace(/\n{2,}/g, "\n<br/>\n");
            for (let bk = 0; bk < Sk.length; bk++) fk = fk.replace(`\0PLACEHOLDER_${bk}\0`, Sk[bk]);
            if (Dk) {
              const kk = Uk(Dk).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                ek = new RegExp(kk, "gi");
              fk = fk.replace(/([^<>]+)(?=<|$)/g, (kk => kk.replace(ek, (kk => `<mark class="DocsHighlight">${kk}</mark>`))))
            }
            return fk
          }(Rk.id, Rk.content, ke, Gk ? Ik : void 0) : ""), [Rk, ke, Gk, Ik]);
        (0, Dk.useEffect)((() => {
          const kk = qk.current;
          if (!kk) return;
          const ek = kk => {
            var ek, ik, Dk, fk, Sk;
            const bk = null === (ek = (ik = kk.target).closest) || void 0 === ek ? void 0 : ek.call(ik, ".DocsCopyButton");
            if (!bk) return;
            kk.preventDefault(), kk.stopPropagation();
            const rk = null !== (Dk = null === (fk = bk.parentElement) || void 0 === fk || null === (Sk = fk.querySelector("code")) || void 0 === Sk ? void 0 : Sk.textContent) && void 0 !== Dk ? Dk : "";
            navigator.clipboard.writeText(rk.trimEnd()).then((() => {
              bk.classList.add("Copied"), setTimeout((() => {
                bk.classList.remove("Copied")
              }), 1500)
            })).catch((kk => {
              console.warn("Could not copy documentation code", kk)
            }))
          };
          return kk.addEventListener("click", ek, !0), () => {
            kk.removeEventListener("click", ek, !0)
          }
        }), []);
        const [ie, De] = (0, Dk.useState)(0);
        (0, Dk.useEffect)((() => {
          if (!Gk || !qk.current) return void De(0);
          const kk = qk.current.querySelectorAll(".DocsHighlight").length;
          De(kk)
        }), [Gk, ee]), (0, Dk.useEffect)((() => {
          if (null === Ek || !qk.current) return;
          hk(null);
          const kk = qk.current.querySelectorAll(".DocsHighlight");
          if (0 === kk.length) return;
          const ek = Math.min(Ek, kk.length - 1);
          vk(ek), kk.forEach((kk => {
            kk.classList.remove("DocsHighlightActive")
          })), kk[ek].classList.add("DocsHighlightActive"), kk[ek].scrollIntoView({
            block: "center",
            behavior: "smooth"
          })
        }), [Ek, ee]);
        const fe = (0, Dk.useCallback)((kk => {
            if (!qk.current) return;
            const ek = qk.current.querySelectorAll(".DocsHighlight");
            if (0 === ek.length) return;
            const ik = (Qk + kk + ek.length) % ek.length;
            vk(ik), hk(ik)
          }), [Qk]),
          Se = (0, Dk.useCallback)((kk => {
            var ek;
            const ik = null === (ek = Lk[kk]) || void 0 === ek ? void 0 : ek.tabStep;
            ik && ik === Tk && (0, Yk.e)(ik), kk !== Vk ? (Wk(!0), Fk(kk), vk(0), qk.current && (qk.current.scrollTop = 0), Gk && hk(0)) : Wk(!ak)
          }), [Gk, Vk, ak, Tk]),
          be = (0, Dk.useCallback)((kk => {
            var ek;
            const ik = Array.from((null === (ek = qk.current) || void 0 === ek ? void 0 : ek.querySelectorAll(".DocsH2, .DocsH3")) || []).find((ek => {
              var ik;
              return null === (ik = ek.textContent) || void 0 === ik ? void 0 : ik.includes(kk)
            }));
            ik && ik.scrollIntoView({
              block: "start",
              behavior: "smooth"
            })
          }), [qk]),
          re = (0, Dk.useCallback)((kk => {
            var ek, ik;
            const Dk = null !== (ek = null === (ik = uk.current) || void 0 === ik ? void 0 : ik.clientWidth) && void 0 !== ek ? ek : window.innerWidth,
              fk = Math.max(120, Dk - 200);
            return Math.min(Math.max(kk, 120), fk)
          }), []),
          Pe = (0, Dk.useCallback)((() => {
            var kk;
            Bk.current && (Bk.current = !1, null === (kk = uk.current) || void 0 === kk || kk.classList.remove("DocsSidebarResizing"))
          }), []),
          me = (0, Dk.useCallback)((kk => {
            var ek;
            kk.preventDefault(), Bk.current = !0, null === (ek = uk.current) || void 0 === ek || ek.classList.add("DocsSidebarResizing")
          }), []);
        (0, Dk.useEffect)((() => {
          const kk = uk.current,
            ek = kk => {
              if (!Bk.current || !uk.current) return;
              const ek = uk.current.getBoundingClientRect().left;
              Xk(re(kk.clientX - ek))
            };
          return window.addEventListener("mousemove", ek), window.addEventListener("mouseup", Pe), () => {
            window.removeEventListener("mousemove", ek), window.removeEventListener("mouseup", Pe), null === kk || void 0 === kk || kk.classList.remove("DocsSidebarResizing")
          }
        }), [re, Pe]);
        const Me = (0, Dk.useCallback)((kk => {
          if (kk) {
            const [ek, ik] = kk.slice(1).split("-");
            ik && (ck.current = {
              docId: ek,
              subsection: ik
            }), ek && Se(ek)
          }
        }), [Se]);
        (0, Dk.useEffect)((() => {
          const kk = ck.current;
          kk && Vk === kk.docId && (setTimeout((() => {
            be(kk.subsection)
          }), 0), ck.current = null)
        })), (0, Dk.useEffect)((() => {
          if (!qk.current) return;
          qk.current.querySelectorAll("a.DocsAnchor").forEach((kk => {
            kk.addEventListener("click", (ek => {
              ek.preventDefault(), Me(kk.dataset.id)
            }))
          }))
        }), [Vk, Me]);
        const Ke = Object.values(Lk).find((kk => (null === kk || void 0 === kk ? void 0 : kk.pageStep) === Tk));
        return (0, nk.jsx)(yk.j, {
          tutorial: "docsOverview",
          step: null !== (Ck = null === Ke || void 0 === Ke ? void 0 : Ke.pageStep) && void 0 !== Ck ? Ck : "docsPanel",
          text: Jk(null !== (Ak = null === Ke || void 0 === Ke ? void 0 : Ke.pageText) && void 0 !== Ak ? Ak : "codeEditor:tutorialDocsPanel"),
          enabled: dk,
          placement: "left",
          onPrevious: Ke ? void 0 : sk,
          children: (0, nk.jsxs)("div", {
            className: "DocsPanel",
            ref: uk,
            children: [(0, nk.jsxs)("div", {
              className: "DocsSidebar",
              style: {
                width: tk,
                minWidth: tk,
                maxWidth: tk
              },
              children: [(0, nk.jsx)(Sk.b, {
                className: "DocsSearch",
                placeholderText: "\ud83d\udd0e Search docs...",
                onValueChange: kk => {
                  zk(kk), vk(0), hk(0)
                }
              }, Zk), (0, nk.jsx)("div", {
                className: "DocsNavList",
                children: Gk ? Nk.map((kk => (0, nk.jsxs)("div", {
                  className: rk()("DocsNavItem", "SearchResult", {
                    Active: kk.doc.id === (null === Rk || void 0 === Rk ? void 0 : Rk.id)
                  }),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    Se(kk.doc.id)
                  },
                  children: [(0, nk.jsxs)("div", {
                    className: "SearchResultTitle",
                    children: [kk.doc.title, (0, nk.jsx)("span", {
                      className: "SearchResultCount",
                      children: kk.matchCount
                    })]
                  }), (0, nk.jsx)("div", {
                    className: "SearchResultSnippet",
                    children: wk(kk.snippet, Ik)
                  })]
                }, kk.doc.id))) : fk.b.map((kk => {
                  const ek = (0, nk.jsxs)("div", {
                      className: rk()("DocsNavItem", {
                        Active: kk.id === (null === Rk || void 0 === Rk ? void 0 : Rk.id)
                      }),
                      "data-pad-focusable": !0,
                      onClick: () => {
                        Se(kk.id)
                      },
                      children: [(0, nk.jsx)("span", {
                        className: "DocsNavItemTitle",
                        children: kk.title
                      }), kk.subsections && kk.id === (null === Rk || void 0 === Rk ? void 0 : Rk.id) && ak && (0, nk.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, nk.jsx)(lk.d, {
                          name: "angle-down"
                        })
                      }), kk.subsections && (kk.id !== (null === Rk || void 0 === Rk ? void 0 : Rk.id) || !ak) && (0, nk.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, nk.jsx)(lk.d, {
                          name: "angle-up"
                        })
                      })]
                    }),
                    ik = Lk[kk.id];
                  return (0, nk.jsxs)(Dk.Fragment, {
                    children: [ik && (0, nk.jsx)(yk.j, {
                      tutorial: "docsOverview",
                      step: ik.tabStep,
                      text: Jk(ik.tabText),
                      enabled: dk,
                      placement: "left",
                      waitForClick: !0,
                      children: ek
                    }), !ik && ek, ak && kk.subsections && kk.id === (null === Rk || void 0 === Rk ? void 0 : Rk.id) && kk.subsections.map((kk => (0, nk.jsx)("div", {
                      className: "DocsNavItem DocsSubsection",
                      "data-pad-focusable": !0,
                      onClick: () => {
                        be(kk)
                      },
                      children: kk
                    }, kk)))]
                  }, kk.id)
                }))
              }), (0, nk.jsx)("div", {
                className: "DocsSidebarButtonContainer",
                children: (0, nk.jsx)(pk.i, {
                  tooltipInner: Jk("codeEditor:popOutDocsTooltip"),
                  placement: "top",
                  children: (0, nk.jsx)(Pk.f, {
                    className: "DocsSidebarButton",
                    onClick: jk,
                    children: Jk("codeEditor:popOutDocs")
                  })
                })
              })]
            }), (0, nk.jsx)("div", {
              className: "DocsSidebarResizeHandle",
              onMouseDown: me
            }), (0, nk.jsxs)("div", {
              className: "DocsContentWrapper",
              children: [Gk && ie > 0 && (0, nk.jsxs)("div", {
                className: "DocsMatchNav",
                children: [(0, nk.jsxs)("span", {
                  className: "DocsMatchNavLabel",
                  children: [Qk + 1, " / ", ie]
                }), (0, nk.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    fe(-1)
                  },
                  children: "\u25b2"
                }), (0, nk.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    fe(1)
                  },
                  children: "\u25bc"
                })]
              }), (0, nk.jsx)("div", {
                className: "DocsContent",
                ref: qk,
                dangerouslySetInnerHTML: {
                  __html: ee
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