export const id = 291;
export const ids = [291];
export const modules = {
  40572: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      default: () => xz
    });
    var Fz = sz(65),
      Wz = sz(4382),
      Xz = sz(1622),
      Oz = sz(1020),
      oz = sz.n(Oz),
      vz = sz(1419),
      Uz = sz(1173),
      Kz = sz(4359),
      uz = sz(4367),
      Nz = sz(4373),
      bz = sz(1087);

    function wz(zz) {
      return zz.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    Kz.d.registerLanguage("javascript", uz.c), Kz.d.registerLanguage("typescript", Nz.e);

    function Dz(zz, tz) {
      const sz = wz(zz).replace(/"/g, "&quot;");
      return `<button type="button" class="DocsCopyButton ${tz}" title="${sz}" aria-label="${sz}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5"/><path d="M10.5 3.5V1.5H1.5v9h2"/></svg><svg class="DocsCopiedIcon" viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 8.5l3.5 3.5 7.5-7.5"/></svg></button>`
    }

    function gz(zz, tz) {
      const sz = [],
        Fz = zz.toLowerCase(),
        Wz = tz.toLowerCase();
      let Xz = 0;
      for (; Xz < zz.length;) {
        const Oz = Fz.indexOf(Wz, Xz);
        if (-1 === Oz) {
          sz.push(zz.slice(Xz));
          break
        }
        Oz > Xz && sz.push(zz.slice(Xz, Oz)), sz.push((0, bz.jsx)("mark", {
          className: "DocsHighlight",
          children: zz.slice(Oz, Oz + tz.length)
        }, Oz)), Xz = Oz + tz.length
      }
      return sz
    }
    var Hz = sz(1036),
      Bz = sz(1333),
      Pz = sz(36297),
      rz = sz(36303);
    const Yz = {
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
      xz = (0, Fz.memo)((function(zz) {
        var tz, sz, Oz, uz, Nz, xz, mz;
        let {
          popOutDocs: Jz,
          hideDocs: Iz,
          tutorialEnabled: Cz
        } = zz;
        const [ez, Zz] = (0, Fz.useState)(Wz.d[0].id), Gz = (0, Fz.useRef)(null), Tz = (0, Fz.useRef)(null), [cz, jz] = (0, Fz.useState)(""), [Az, yz] = (0, Fz.useState)(0), [Mz, dz] = (0, Fz.useState)(null), [hz, Qz] = (0, Fz.useState)(!1), [kz, iz] = (0, Fz.useState)(160), Lz = (0, Fz.useRef)(!1), lz = (0, Fz.useRef)(null), nz = (0, Pz.j)("docsOverview"), [az, qz] = (0, Fz.useState)(0), Sz = Object.values(Yz).some((zz => (null === zz || void 0 === zz ? void 0 : zz.tabStep) === nz));
        (0, Fz.useEffect)((() => {
          Sz && cz.length > 0 && (jz(""), qz((zz => zz + 1)))
        }), [Sz, cz]);
        const Vz = cz.length > 0,
          Rz = (0, Fz.useMemo)((() => function(zz) {
            if (!zz) return [];
            const tz = zz.toLowerCase(),
              sz = [];
            for (const Fz of Wz.d) {
              const zz = Fz.content.toLowerCase();
              let Wz = 0,
                Xz = -1,
                Oz = 0,
                oz = zz.indexOf(tz, Oz);
              for (; - 1 !== oz;) - 1 === Xz && (Xz = oz), Wz++, Oz = oz + tz.length, oz = zz.indexOf(tz, Oz);
              if (0 === Wz) continue;
              const vz = Math.max(0, Xz - 40),
                Uz = Math.min(Fz.content.length, Xz + tz.length + 40),
                Kz = (vz > 0 ? "..." : "") + Fz.content.slice(vz, Uz).replace(/\n/g, " ") + (Uz < Fz.content.length ? "..." : "");
              sz.push({
                doc: Fz,
                matchCount: Wz,
                snippet: Kz
              })
            }
            return sz.sort(((zz, tz) => tz.matchCount - zz.matchCount)), sz
          }(cz)), [cz]),
          pz = Vz ? null !== (tz = null !== (sz = null === (Oz = Rz.find((zz => zz.doc.id === ez))) || void 0 === Oz ? void 0 : Oz.doc) && void 0 !== sz ? sz : null === (uz = Rz[0]) || void 0 === uz ? void 0 : uz.doc) && void 0 !== tz ? tz : null : null !== (Nz = Wz.d.find((zz => zz.id === ez))) && void 0 !== Nz ? Nz : Wz.d[0],
          {
            t: fz
          } = (0, Uz.B)(),
          Ez = fz("codeEditor:copySnippet"),
          zt = (0, Fz.useMemo)((() => pz ? function(zz, tz, sz, Fz) {
            let Wz = tz;
            Wz = Wz.replace(/\r\n/g, "\n");
            const Xz = [];
            Wz = Wz.replace(/```(\w*)\n([\s\S]*?)```/g, ((zz, tz, Fz) => {
              const Wz = Xz.length;
              let Oz = wz(Fz);
              try {
                Oz = Kz.d.highlight(Fz.trimEnd(), {
                  language: tz
                }).value
              } catch (oz) {
                console.warn("Could not highlight documentation code block", oz)
              }
              return Xz.push(`<div class="DocsCodeBlockRow"><pre class="DocsCodeBlock" data-lang="${tz}"><code>${Oz}</code></pre>${Dz(sz,"DocsCopyBlock")}</div>`), `\0PLACEHOLDER_${Wz}\0`
            })), Wz = Wz.replace(/(`{1,2})([^\n]+?)\1(?!`)/g, ((tz, Fz, Wz) => {
              const Oz = Xz.length,
                oz = 2 === Fz.length ? Wz.replace(/^ (.*) $/, "$1") : Wz;
              let vz = wz(oz);
              try {
                "apiReference" !== zz && "callbacks" !== zz || (vz = Kz.d.highlight(oz.trimEnd().replaceAll("\\|", "|"), {
                  language: "typescript"
                }).value)
              } catch (Uz) {
                console.warn("Could not highlight documentation snippet", Uz)
              }
              return Xz.push(`<span class="DocsInlineCodeRow"><code class="DocsInlineCode">${vz}</code>${Dz(sz,"DocsCopyInline")}</span>`), `\0PLACEHOLDER_${Oz}\0`
            })), Wz = wz(Wz), Wz = Wz.replace(/^#### (.+)$/gm, '<h4 class="DocsH4">$1</h4>'), Wz = Wz.replace(/^### (.+)$/gm, '<h3 class="DocsH3">$1</h3>'), Wz = Wz.replace(/^## (.+)$/gm, '<h2 class="DocsH2">$1</h2>'), Wz = Wz.replace(/^# (.+)$/gm, '<h1 class="DocsH1">$1</h1>'), Wz = Wz.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"), Wz = Wz.replace(/\[([^\]]+)\]\(([^)]+)\)/g, ((zz, tz, sz) => sz.startsWith("#") ? `<a class="DocsAnchor" data-id="${sz}">${tz}</a>` : `<a href="${sz}" target="_blank" rel="noopener noreferrer">${tz}</a>`)), Wz = Wz.replace(/^(\|.+\|)\n(\|[\s:\-|]+\|)\n((?:\|.+\|\s*\r?\n?)*)/gm, ((zz, tz, sz, Fz) => `<table class="DocsTable"><thead><tr>${tz.split("|").slice(1,-1).map((zz=>`<th>${zz.trim()}</th>`)).join("")}</tr></thead><tbody>${Fz.trim().split("\n").map((zz=>`<tr>${zz.split("|").slice(1,-1).map((zz=>`<td>${zz.trim()}</td>`)).join("")}</tr>`)).join("")}</tbody></table>`)), Wz = Wz.replace(/(?:^[ \t]*([*-])[ \t]+.+(?:\n|$))+/gm, ((zz, tz) => function(zz, tz) {
              const sz = "*" === tz,
                Fz = [];
              for (const oz of zz.split("\n")) {
                const zz = oz.match(/^([ \t]*)(?:[*-])[ \t]+(.+)$/);
                zz && Fz.push({
                  indent: zz[1].replace(/\t/g, "  ").length,
                  content: zz[2]
                })
              }
              let Wz = "";
              const Xz = [],
                Oz = sz ? "ol" : "ul";
              for (const {
                  indent: oz,
                  content: vz
                }
                of Fz) {
                for (; Xz.length > 0 && oz < Xz[Xz.length - 1];) Wz += `</${Oz}></li>`, Xz.pop();
                (0 === Xz.length || oz > Xz[Xz.length - 1]) && (Xz.length > 0 && (Wz = Wz.replace(/<\/li>$/, "")), Wz += `<${Oz} class="DocsList">`, Xz.push(oz)), Wz += `<li class="DocsListItem">${vz}</li>`
              }
              for (; Xz.length > 0;) Wz += `</${Oz}>`, Xz.pop(), Xz.length > 0 && (Wz += "</li>");
              return Wz
            }(zz, tz))), Wz = Wz.replace(/\n{2,}/g, "\n<br/>\n");
            for (let Oz = 0; Oz < Xz.length; Oz++) Wz = Wz.replace(`\0PLACEHOLDER_${Oz}\0`, Xz[Oz]);
            if (Fz) {
              const zz = wz(Fz).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                tz = new RegExp(zz, "gi");
              Wz = Wz.replace(/([^<>]+)(?=<|$)/g, (zz => zz.replace(tz, (zz => `<mark class="DocsHighlight">${zz}</mark>`))))
            }
            return Wz
          }(pz.id, pz.content, Ez, Vz ? cz : void 0) : ""), [pz, Ez, Vz, cz]);
        (0, Fz.useEffect)((() => {
          const zz = Tz.current;
          if (!zz) return;
          const tz = zz => {
            var tz, sz, Fz, Wz, Xz;
            const Oz = null === (tz = (sz = zz.target).closest) || void 0 === tz ? void 0 : tz.call(sz, ".DocsCopyButton");
            if (!Oz) return;
            zz.preventDefault(), zz.stopPropagation();
            const oz = null !== (Fz = null === (Wz = Oz.parentElement) || void 0 === Wz || null === (Xz = Wz.querySelector("code")) || void 0 === Xz ? void 0 : Xz.textContent) && void 0 !== Fz ? Fz : "";
            navigator.clipboard.writeText(oz.trimEnd()).then((() => {
              Oz.classList.add("Copied"), setTimeout((() => {
                Oz.classList.remove("Copied")
              }), 1500)
            })).catch((zz => {
              console.warn("Could not copy documentation code", zz)
            }))
          };
          return zz.addEventListener("click", tz, !0), () => {
            zz.removeEventListener("click", tz, !0)
          }
        }), []);
        const [tt, st] = (0, Fz.useState)(0);
        (0, Fz.useEffect)((() => {
          if (!Vz || !Tz.current) return void st(0);
          const zz = Tz.current.querySelectorAll(".DocsHighlight").length;
          st(zz)
        }), [Vz, zt]), (0, Fz.useEffect)((() => {
          if (null === Mz || !Tz.current) return;
          dz(null);
          const zz = Tz.current.querySelectorAll(".DocsHighlight");
          if (0 === zz.length) return;
          const tz = Math.min(Mz, zz.length - 1);
          yz(tz), zz.forEach((zz => {
            zz.classList.remove("DocsHighlightActive")
          })), zz[tz].classList.add("DocsHighlightActive"), zz[tz].scrollIntoView({
            block: "center",
            behavior: "smooth"
          })
        }), [Mz, zt]);
        const Ft = (0, Fz.useCallback)((zz => {
            if (!Tz.current) return;
            const tz = Tz.current.querySelectorAll(".DocsHighlight");
            if (0 === tz.length) return;
            const sz = (Az + zz + tz.length) % tz.length;
            yz(sz), dz(sz)
          }), [Az]),
          Wt = (0, Fz.useCallback)((zz => {
            var tz;
            const sz = null === (tz = Yz[zz]) || void 0 === tz ? void 0 : tz.tabStep;
            sz && sz === nz && (0, rz.d)(sz), zz !== ez ? (Qz(!0), Zz(zz), yz(0), Tz.current && (Tz.current.scrollTop = 0), Vz && dz(0)) : Qz(!hz)
          }), [Vz, ez, hz, nz]),
          Xt = (0, Fz.useCallback)((zz => {
            var tz;
            const sz = Array.from((null === (tz = Tz.current) || void 0 === tz ? void 0 : tz.querySelectorAll(".DocsH2, .DocsH3")) || []).find((tz => {
              var sz;
              return null === (sz = tz.textContent) || void 0 === sz ? void 0 : sz.includes(zz)
            }));
            sz && sz.scrollIntoView({
              block: "start",
              behavior: "smooth"
            })
          }), [Tz]),
          Ot = (0, Fz.useCallback)((zz => {
            var tz, sz;
            const Fz = null !== (tz = null === (sz = Gz.current) || void 0 === sz ? void 0 : sz.clientWidth) && void 0 !== tz ? tz : window.innerWidth,
              Wz = Math.max(120, Fz - 200);
            return Math.min(Math.max(zz, 120), Wz)
          }), []),
          ot = (0, Fz.useCallback)((() => {
            var zz;
            Lz.current && (Lz.current = !1, null === (zz = Gz.current) || void 0 === zz || zz.classList.remove("DocsSidebarResizing"))
          }), []),
          vt = (0, Fz.useCallback)((zz => {
            var tz;
            zz.preventDefault(), Lz.current = !0, null === (tz = Gz.current) || void 0 === tz || tz.classList.add("DocsSidebarResizing")
          }), []);
        (0, Fz.useEffect)((() => {
          const zz = Gz.current,
            tz = zz => {
              if (!Lz.current || !Gz.current) return;
              const tz = Gz.current.getBoundingClientRect().left;
              iz(Ot(zz.clientX - tz))
            };
          return window.addEventListener("mousemove", tz), window.addEventListener("mouseup", ot), () => {
            window.removeEventListener("mousemove", tz), window.removeEventListener("mouseup", ot), null === zz || void 0 === zz || zz.classList.remove("DocsSidebarResizing")
          }
        }), [Ot, ot]);
        const Ut = (0, Fz.useCallback)((zz => {
          if (zz) {
            const [tz, sz] = zz.slice(1).split("-");
            sz && (lz.current = {
              docId: tz,
              subsection: sz
            }), tz && Wt(tz)
          }
        }), [Wt]);
        (0, Fz.useEffect)((() => {
          const zz = lz.current;
          zz && ez === zz.docId && (setTimeout((() => {
            Xt(zz.subsection)
          }), 0), lz.current = null)
        })), (0, Fz.useEffect)((() => {
          if (!Tz.current) return;
          Tz.current.querySelectorAll("a.DocsAnchor").forEach((zz => {
            zz.addEventListener("click", (tz => {
              tz.preventDefault(), Ut(zz.dataset.id)
            }))
          }))
        }), [ez, Ut]);
        const Kt = Object.values(Yz).find((zz => (null === zz || void 0 === zz ? void 0 : zz.pageStep) === nz));
        return (0, bz.jsx)(Pz.g, {
          tutorial: "docsOverview",
          step: null !== (xz = null === Kt || void 0 === Kt ? void 0 : Kt.pageStep) && void 0 !== xz ? xz : "docsPanel",
          text: fz(null !== (mz = null === Kt || void 0 === Kt ? void 0 : Kt.pageText) && void 0 !== mz ? mz : "codeEditor:tutorialDocsPanel"),
          enabled: Cz,
          placement: "left",
          onPrevious: Kt ? void 0 : Iz,
          children: (0, bz.jsxs)("div", {
            className: "DocsPanel",
            ref: Gz,
            children: [(0, bz.jsxs)("div", {
              className: "DocsSidebar",
              style: {
                width: kz,
                minWidth: kz,
                maxWidth: kz
              },
              children: [(0, bz.jsx)(Xz.d, {
                className: "DocsSearch",
                placeholderText: "\ud83d\udd0e Search docs...",
                onValueChange: zz => {
                  jz(zz), yz(0), dz(0)
                }
              }, az), (0, bz.jsx)("div", {
                className: "DocsNavList",
                children: Vz ? Rz.map((zz => (0, bz.jsxs)("div", {
                  className: oz()("DocsNavItem", "SearchResult", {
                    Active: zz.doc.id === (null === pz || void 0 === pz ? void 0 : pz.id)
                  }),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    Wt(zz.doc.id)
                  },
                  children: [(0, bz.jsxs)("div", {
                    className: "SearchResultTitle",
                    children: [zz.doc.title, (0, bz.jsx)("span", {
                      className: "SearchResultCount",
                      children: zz.matchCount
                    })]
                  }), (0, bz.jsx)("div", {
                    className: "SearchResultSnippet",
                    children: gz(zz.snippet, cz)
                  })]
                }, zz.doc.id))) : Wz.d.map((zz => {
                  const tz = (0, bz.jsxs)("div", {
                      className: oz()("DocsNavItem", {
                        Active: zz.id === (null === pz || void 0 === pz ? void 0 : pz.id)
                      }),
                      "data-pad-focusable": !0,
                      onClick: () => {
                        Wt(zz.id)
                      },
                      children: [(0, bz.jsx)("span", {
                        className: "DocsNavItemTitle",
                        children: zz.title
                      }), zz.subsections && zz.id === (null === pz || void 0 === pz ? void 0 : pz.id) && hz && (0, bz.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, bz.jsx)(Hz.c, {
                          name: "angle-down"
                        })
                      }), zz.subsections && (zz.id !== (null === pz || void 0 === pz ? void 0 : pz.id) || !hz) && (0, bz.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, bz.jsx)(Hz.c, {
                          name: "angle-up"
                        })
                      })]
                    }),
                    sz = Yz[zz.id];
                  return (0, bz.jsxs)(Fz.Fragment, {
                    children: [sz && (0, bz.jsx)(Pz.g, {
                      tutorial: "docsOverview",
                      step: sz.tabStep,
                      text: fz(sz.tabText),
                      enabled: Cz,
                      placement: "left",
                      waitForClick: !0,
                      children: tz
                    }), !sz && tz, hz && zz.subsections && zz.id === (null === pz || void 0 === pz ? void 0 : pz.id) && zz.subsections.map((zz => (0, bz.jsx)("div", {
                      className: "DocsNavItem DocsSubsection",
                      "data-pad-focusable": !0,
                      onClick: () => {
                        Xt(zz)
                      },
                      children: zz
                    }, zz)))]
                  }, zz.id)
                }))
              }), (0, bz.jsx)("div", {
                className: "DocsSidebarButtonContainer",
                children: (0, bz.jsx)(Bz.h, {
                  tooltipInner: fz("codeEditor:popOutDocsTooltip"),
                  placement: "top",
                  children: (0, bz.jsx)(vz.h, {
                    className: "DocsSidebarButton",
                    onClick: Jz,
                    children: fz("codeEditor:popOutDocs")
                  })
                })
              })]
            }), (0, bz.jsx)("div", {
              className: "DocsSidebarResizeHandle",
              onMouseDown: vt
            }), (0, bz.jsxs)("div", {
              className: "DocsContentWrapper",
              children: [Vz && tt > 0 && (0, bz.jsxs)("div", {
                className: "DocsMatchNav",
                children: [(0, bz.jsxs)("span", {
                  className: "DocsMatchNavLabel",
                  children: [Az + 1, " / ", tt]
                }), (0, bz.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    Ft(-1)
                  },
                  children: "\u25b2"
                }), (0, bz.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    Ft(1)
                  },
                  children: "\u25bc"
                })]
              }), (0, bz.jsx)("div", {
                className: "DocsContent",
                ref: Tz,
                dangerouslySetInnerHTML: {
                  __html: zt
                }
              })]
            })]
          })
        })
      }))
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);