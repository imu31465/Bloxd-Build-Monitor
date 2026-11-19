export const id = 291;
export const ids = [291];
export const modules = {
  40682: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      default: () => oz
    });
    var Ez = bz(56),
      nz = bz(4497),
      iz = bz(1628),
      lz = bz(1038),
      Mz = bz.n(lz),
      tz = bz(1419),
      Hz = bz(1181),
      Oz = bz(4465),
      pz = bz(4480),
      dz = bz(4483),
      Fz = bz(1089);

    function Zz(zz) {
      return zz.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    Oz.e.registerLanguage("javascript", pz.d), Oz.e.registerLanguage("typescript", dz.e);

    function Rz(zz, uz) {
      const bz = Zz(zz).replace(/"/g, "&quot;");
      return `<button type="button" class="DocsCopyButton ${uz}" title="${bz}" aria-label="${bz}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5"/><path d="M10.5 3.5V1.5H1.5v9h2"/></svg><svg class="DocsCopiedIcon" viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 8.5l3.5 3.5 7.5-7.5"/></svg></button>`
    }

    function Kz(zz, uz) {
      const bz = [],
        Ez = zz.toLowerCase(),
        nz = uz.toLowerCase();
      let iz = 0;
      for (; iz < zz.length;) {
        const lz = Ez.indexOf(nz, iz);
        if (-1 === lz) {
          bz.push(zz.slice(iz));
          break
        }
        lz > iz && bz.push(zz.slice(iz, lz)), bz.push((0, Fz.jsx)("mark", {
          className: "DocsHighlight",
          children: zz.slice(lz, lz + uz.length)
        }, lz)), iz = lz + uz.length
      }
      return bz
    }
    var wz = bz(1047),
      Xz = bz(1332),
      fz = bz(36316),
      sz = bz(36319);
    const rz = {
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
      oz = (0, Ez.memo)((function(zz) {
        var uz, bz, lz, pz, dz, oz, Nz;
        let {
          popOutDocs: vz,
          hideDocs: xz,
          tutorialEnabled: Jz
        } = zz;
        const [Az, Tz] = (0, Ez.useState)(nz.d[0].id), Lz = (0, Ez.useRef)(null), Pz = (0, Ez.useRef)(null), [Gz, az] = (0, Ez.useState)(""), [Vz, mz] = (0, Ez.useState)(0), [qz, hz] = (0, Ez.useState)(null), [Uz, cz] = (0, Ez.useState)(!1), [gz, Sz] = (0, Ez.useState)(160), yz = (0, Ez.useRef)(!1), Dz = (0, Ez.useRef)(null), Qz = (0, fz.j)("docsOverview"), [Wz, ez] = (0, Ez.useState)(0), jz = Object.values(rz).some((zz => (null === zz || void 0 === zz ? void 0 : zz.tabStep) === Qz));
        (0, Ez.useEffect)((() => {
          jz && Gz.length > 0 && (az(""), ez((zz => zz + 1)))
        }), [jz, Gz]);
        const Iz = Gz.length > 0,
          Bz = (0, Ez.useMemo)((() => function(zz) {
            if (!zz) return [];
            const uz = zz.toLowerCase(),
              bz = [];
            for (const Ez of nz.d) {
              const zz = Ez.content.toLowerCase();
              let nz = 0,
                iz = -1,
                lz = 0,
                Mz = zz.indexOf(uz, lz);
              for (; - 1 !== Mz;) - 1 === iz && (iz = Mz), nz++, lz = Mz + uz.length, Mz = zz.indexOf(uz, lz);
              if (0 === nz) continue;
              const tz = Math.max(0, iz - 40),
                Hz = Math.min(Ez.content.length, iz + uz.length + 40),
                Oz = (tz > 0 ? "..." : "") + Ez.content.slice(tz, Hz).replace(/\n/g, " ") + (Hz < Ez.content.length ? "..." : "");
              bz.push({
                doc: Ez,
                matchCount: nz,
                snippet: Oz
              })
            }
            return bz.sort(((zz, uz) => uz.matchCount - zz.matchCount)), bz
          }(Gz)), [Gz]),
          Cz = Iz ? null !== (uz = null !== (bz = null === (lz = Bz.find((zz => zz.doc.id === Az))) || void 0 === lz ? void 0 : lz.doc) && void 0 !== bz ? bz : null === (pz = Bz[0]) || void 0 === pz ? void 0 : pz.doc) && void 0 !== uz ? uz : null : null !== (dz = nz.d.find((zz => zz.id === Az))) && void 0 !== dz ? dz : nz.d[0],
          {
            t: Yz
          } = (0, Hz.F)(),
          kz = Yz("codeEditor:copySnippet"),
          zu = (0, Ez.useMemo)((() => Cz ? function(zz, uz, bz, Ez) {
            let nz = uz;
            nz = nz.replace(/\r\n/g, "\n");
            const iz = [];
            nz = nz.replace(/```(\w*)\n([\s\S]*?)```/g, ((zz, uz, Ez) => {
              const nz = iz.length;
              let lz = Zz(Ez);
              try {
                lz = Oz.e.highlight(Ez.trimEnd(), {
                  language: uz
                }).value
              } catch (Mz) {
                console.warn("Could not highlight documentation code block", Mz)
              }
              return iz.push(`<div class="DocsCodeBlockRow"><pre class="DocsCodeBlock" data-lang="${uz}"><code>${lz}</code></pre>${Rz(bz,"DocsCopyBlock")}</div>`), `\0PLACEHOLDER_${nz}\0`
            })), nz = nz.replace(/(`{1,2})([^\n]+?)\1(?!`)/g, ((uz, Ez, nz) => {
              const lz = iz.length,
                Mz = 2 === Ez.length ? nz.replace(/^ (.*) $/, "$1") : nz;
              let tz = Zz(Mz);
              try {
                "apiReference" !== zz && "callbacks" !== zz || (tz = Oz.e.highlight(Mz.trimEnd().replaceAll("\\|", "|"), {
                  language: "typescript"
                }).value)
              } catch (Hz) {
                console.warn("Could not highlight documentation snippet", Hz)
              }
              return iz.push(`<span class="DocsInlineCodeRow"><code class="DocsInlineCode">${tz}</code>${Rz(bz,"DocsCopyInline")}</span>`), `\0PLACEHOLDER_${lz}\0`
            })), nz = Zz(nz), nz = nz.replace(/^#### (.+)$/gm, '<h4 class="DocsH4">$1</h4>'), nz = nz.replace(/^### (.+)$/gm, '<h3 class="DocsH3">$1</h3>'), nz = nz.replace(/^## (.+)$/gm, '<h2 class="DocsH2">$1</h2>'), nz = nz.replace(/^# (.+)$/gm, '<h1 class="DocsH1">$1</h1>'), nz = nz.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"), nz = nz.replace(/\[([^\]]+)\]\(([^)]+)\)/g, ((zz, uz, bz) => bz.startsWith("#") ? `<a class="DocsAnchor" data-id="${bz}">${uz}</a>` : `<a href="${bz}" target="_blank" rel="noopener noreferrer">${uz}</a>`)), nz = nz.replace(/^(\|.+\|)\n(\|[\s:\-|]+\|)\n((?:\|.+\|\s*\r?\n?)*)/gm, ((zz, uz, bz, Ez) => `<table class="DocsTable"><thead><tr>${uz.split("|").slice(1,-1).map((zz=>`<th>${zz.trim()}</th>`)).join("")}</tr></thead><tbody>${Ez.trim().split("\n").map((zz=>`<tr>${zz.split("|").slice(1,-1).map((zz=>`<td>${zz.trim()}</td>`)).join("")}</tr>`)).join("")}</tbody></table>`)), nz = nz.replace(/(?:^[ \t]*([*-])[ \t]+.+(?:\n|$))+/gm, ((zz, uz) => function(zz, uz) {
              const bz = "*" === uz,
                Ez = [];
              for (const Mz of zz.split("\n")) {
                const zz = Mz.match(/^([ \t]*)(?:[*-])[ \t]+(.+)$/);
                zz && Ez.push({
                  indent: zz[1].replace(/\t/g, "  ").length,
                  content: zz[2]
                })
              }
              let nz = "";
              const iz = [],
                lz = bz ? "ol" : "ul";
              for (const {
                  indent: Mz,
                  content: tz
                }
                of Ez) {
                for (; iz.length > 0 && Mz < iz[iz.length - 1];) nz += `</${lz}></li>`, iz.pop();
                (0 === iz.length || Mz > iz[iz.length - 1]) && (iz.length > 0 && (nz = nz.replace(/<\/li>$/, "")), nz += `<${lz} class="DocsList">`, iz.push(Mz)), nz += `<li class="DocsListItem">${tz}</li>`
              }
              for (; iz.length > 0;) nz += `</${lz}>`, iz.pop(), iz.length > 0 && (nz += "</li>");
              return nz
            }(zz, uz))), nz = nz.replace(/\n{2,}/g, "\n<br/>\n");
            for (let lz = 0; lz < iz.length; lz++) nz = nz.replace(`\0PLACEHOLDER_${lz}\0`, iz[lz]);
            if (Ez) {
              const zz = Zz(Ez).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                uz = new RegExp(zz, "gi");
              nz = nz.replace(/([^<>]+)(?=<|$)/g, (zz => zz.replace(uz, (zz => `<mark class="DocsHighlight">${zz}</mark>`))))
            }
            return nz
          }(Cz.id, Cz.content, kz, Iz ? Gz : void 0) : ""), [Cz, kz, Iz, Gz]);
        (0, Ez.useEffect)((() => {
          const zz = Pz.current;
          if (!zz) return;
          const uz = zz => {
            var uz, bz, Ez, nz, iz;
            const lz = null === (uz = (bz = zz.target).closest) || void 0 === uz ? void 0 : uz.call(bz, ".DocsCopyButton");
            if (!lz) return;
            zz.preventDefault(), zz.stopPropagation();
            const Mz = null !== (Ez = null === (nz = lz.parentElement) || void 0 === nz || null === (iz = nz.querySelector("code")) || void 0 === iz ? void 0 : iz.textContent) && void 0 !== Ez ? Ez : "";
            navigator.clipboard.writeText(Mz.trimEnd()).then((() => {
              lz.classList.add("Copied"), setTimeout((() => {
                lz.classList.remove("Copied")
              }), 1500)
            })).catch((zz => {
              console.warn("Could not copy documentation code", zz)
            }))
          };
          return zz.addEventListener("click", uz, !0), () => {
            zz.removeEventListener("click", uz, !0)
          }
        }), []);
        const [uu, bu] = (0, Ez.useState)(0);
        (0, Ez.useEffect)((() => {
          if (!Iz || !Pz.current) return void bu(0);
          const zz = Pz.current.querySelectorAll(".DocsHighlight").length;
          bu(zz)
        }), [Iz, zu]), (0, Ez.useEffect)((() => {
          if (null === qz || !Pz.current) return;
          hz(null);
          const zz = Pz.current.querySelectorAll(".DocsHighlight");
          if (0 === zz.length) return;
          const uz = Math.min(qz, zz.length - 1);
          mz(uz), zz.forEach((zz => {
            zz.classList.remove("DocsHighlightActive")
          })), zz[uz].classList.add("DocsHighlightActive"), zz[uz].scrollIntoView({
            block: "center",
            behavior: "smooth"
          })
        }), [qz, zu]);
        const Eu = (0, Ez.useCallback)((zz => {
            if (!Pz.current) return;
            const uz = Pz.current.querySelectorAll(".DocsHighlight");
            if (0 === uz.length) return;
            const bz = (Vz + zz + uz.length) % uz.length;
            mz(bz), hz(bz)
          }), [Vz]),
          nu = (0, Ez.useCallback)((zz => {
            var uz;
            const bz = null === (uz = rz[zz]) || void 0 === uz ? void 0 : uz.tabStep;
            bz && bz === Qz && (0, sz.e)(bz), zz !== Az ? (cz(!0), Tz(zz), mz(0), Pz.current && (Pz.current.scrollTop = 0), Iz && hz(0)) : cz(!Uz)
          }), [Iz, Az, Uz, Qz]),
          iu = (0, Ez.useCallback)((zz => {
            var uz;
            const bz = Array.from((null === (uz = Pz.current) || void 0 === uz ? void 0 : uz.querySelectorAll(".DocsH2, .DocsH3")) || []).find((uz => {
              var bz;
              return null === (bz = uz.textContent) || void 0 === bz ? void 0 : bz.includes(zz)
            }));
            bz && bz.scrollIntoView({
              block: "start",
              behavior: "smooth"
            })
          }), [Pz]),
          lu = (0, Ez.useCallback)((zz => {
            var uz, bz;
            const Ez = null !== (uz = null === (bz = Lz.current) || void 0 === bz ? void 0 : bz.clientWidth) && void 0 !== uz ? uz : window.innerWidth,
              nz = Math.max(120, Ez - 200);
            return Math.min(Math.max(zz, 120), nz)
          }), []),
          Mu = (0, Ez.useCallback)((() => {
            var zz;
            yz.current && (yz.current = !1, null === (zz = Lz.current) || void 0 === zz || zz.classList.remove("DocsSidebarResizing"))
          }), []),
          tu = (0, Ez.useCallback)((zz => {
            var uz;
            zz.preventDefault(), yz.current = !0, null === (uz = Lz.current) || void 0 === uz || uz.classList.add("DocsSidebarResizing")
          }), []);
        (0, Ez.useEffect)((() => {
          const zz = Lz.current,
            uz = zz => {
              if (!yz.current || !Lz.current) return;
              const uz = Lz.current.getBoundingClientRect().left;
              Sz(lu(zz.clientX - uz))
            };
          return window.addEventListener("mousemove", uz), window.addEventListener("mouseup", Mu), () => {
            window.removeEventListener("mousemove", uz), window.removeEventListener("mouseup", Mu), null === zz || void 0 === zz || zz.classList.remove("DocsSidebarResizing")
          }
        }), [lu, Mu]);
        const Hu = (0, Ez.useCallback)((zz => {
          if (zz) {
            const [uz, bz] = zz.slice(1).split("-");
            bz && (Dz.current = {
              docId: uz,
              subsection: bz
            }), uz && nu(uz)
          }
        }), [nu]);
        (0, Ez.useEffect)((() => {
          const zz = Dz.current;
          zz && Az === zz.docId && (setTimeout((() => {
            iu(zz.subsection)
          }), 0), Dz.current = null)
        })), (0, Ez.useEffect)((() => {
          if (!Pz.current) return;
          Pz.current.querySelectorAll("a.DocsAnchor").forEach((zz => {
            zz.addEventListener("click", (uz => {
              uz.preventDefault(), Hu(zz.dataset.id)
            }))
          }))
        }), [Az, Hu]);
        const Ou = Object.values(rz).find((zz => (null === zz || void 0 === zz ? void 0 : zz.pageStep) === Qz));
        return (0, Fz.jsx)(fz.i, {
          tutorial: "docsOverview",
          step: null !== (oz = null === Ou || void 0 === Ou ? void 0 : Ou.pageStep) && void 0 !== oz ? oz : "docsPanel",
          text: Yz(null !== (Nz = null === Ou || void 0 === Ou ? void 0 : Ou.pageText) && void 0 !== Nz ? Nz : "codeEditor:tutorialDocsPanel"),
          enabled: Jz,
          placement: "left",
          onPrevious: Ou ? void 0 : xz,
          children: (0, Fz.jsxs)("div", {
            className: "DocsPanel",
            ref: Lz,
            children: [(0, Fz.jsxs)("div", {
              className: "DocsSidebar",
              style: {
                width: gz,
                minWidth: gz,
                maxWidth: gz
              },
              children: [(0, Fz.jsx)(iz.d, {
                className: "DocsSearch",
                placeholderText: "\ud83d\udd0e Search docs...",
                onValueChange: zz => {
                  az(zz), mz(0), hz(0)
                }
              }, Wz), (0, Fz.jsx)("div", {
                className: "DocsNavList",
                children: Iz ? Bz.map((zz => (0, Fz.jsxs)("div", {
                  className: Mz()("DocsNavItem", "SearchResult", {
                    Active: zz.doc.id === (null === Cz || void 0 === Cz ? void 0 : Cz.id)
                  }),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    nu(zz.doc.id)
                  },
                  children: [(0, Fz.jsxs)("div", {
                    className: "SearchResultTitle",
                    children: [zz.doc.title, (0, Fz.jsx)("span", {
                      className: "SearchResultCount",
                      children: zz.matchCount
                    })]
                  }), (0, Fz.jsx)("div", {
                    className: "SearchResultSnippet",
                    children: Kz(zz.snippet, Gz)
                  })]
                }, zz.doc.id))) : nz.d.map((zz => {
                  const uz = (0, Fz.jsxs)("div", {
                      className: Mz()("DocsNavItem", {
                        Active: zz.id === (null === Cz || void 0 === Cz ? void 0 : Cz.id)
                      }),
                      "data-pad-focusable": !0,
                      onClick: () => {
                        nu(zz.id)
                      },
                      children: [(0, Fz.jsx)("span", {
                        className: "DocsNavItemTitle",
                        children: zz.title
                      }), zz.subsections && zz.id === (null === Cz || void 0 === Cz ? void 0 : Cz.id) && Uz && (0, Fz.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, Fz.jsx)(wz.c, {
                          name: "angle-down"
                        })
                      }), zz.subsections && (zz.id !== (null === Cz || void 0 === Cz ? void 0 : Cz.id) || !Uz) && (0, Fz.jsx)("span", {
                        className: "DocsNavItemSubsectionArrow",
                        children: (0, Fz.jsx)(wz.c, {
                          name: "angle-up"
                        })
                      })]
                    }),
                    bz = rz[zz.id];
                  return (0, Fz.jsxs)(Ez.Fragment, {
                    children: [bz && (0, Fz.jsx)(fz.i, {
                      tutorial: "docsOverview",
                      step: bz.tabStep,
                      text: Yz(bz.tabText),
                      enabled: Jz,
                      placement: "left",
                      waitForClick: !0,
                      children: uz
                    }), !bz && uz, Uz && zz.subsections && zz.id === (null === Cz || void 0 === Cz ? void 0 : Cz.id) && zz.subsections.map((zz => (0, Fz.jsx)("div", {
                      className: "DocsNavItem DocsSubsection",
                      "data-pad-focusable": !0,
                      onClick: () => {
                        iu(zz)
                      },
                      children: zz
                    }, zz)))]
                  }, zz.id)
                }))
              }), (0, Fz.jsx)("div", {
                className: "DocsSidebarButtonContainer",
                children: (0, Fz.jsx)(Xz.f, {
                  tooltipInner: Yz("codeEditor:popOutDocsTooltip"),
                  placement: "top",
                  children: (0, Fz.jsx)(tz.f, {
                    className: "DocsSidebarButton",
                    onClick: vz,
                    children: Yz("codeEditor:popOutDocs")
                  })
                })
              })]
            }), (0, Fz.jsx)("div", {
              className: "DocsSidebarResizeHandle",
              onMouseDown: tu
            }), (0, Fz.jsxs)("div", {
              className: "DocsContentWrapper",
              children: [Iz && uu > 0 && (0, Fz.jsxs)("div", {
                className: "DocsMatchNav",
                children: [(0, Fz.jsxs)("span", {
                  className: "DocsMatchNavLabel",
                  children: [Vz + 1, " / ", uu]
                }), (0, Fz.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    Eu(-1)
                  },
                  children: "\u25b2"
                }), (0, Fz.jsx)("button", {
                  className: "DocsMatchNavButton",
                  onClick: () => {
                    Eu(1)
                  },
                  children: "\u25bc"
                })]
              }), (0, Fz.jsx)("div", {
                className: "DocsContent",
                ref: Pz,
                dangerouslySetInnerHTML: {
                  __html: zu
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