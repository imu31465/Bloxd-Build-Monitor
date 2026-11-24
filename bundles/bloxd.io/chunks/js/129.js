export const id = 129;
export const ids = [129];
export const modules = {
  6510: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      default: () => XB
    });
    var QB = zB(62),
      nB = zB(1547),
      dB = zB(1091),
      IB = zB.n(dB),
      NB = zB(363),
      uB = zB(6523),
      UB = zB(1108),
      aB = zB(1543),
      pB = zB(4673),
      rB = zB(1478),
      sB = zB(3252),
      JB = zB(4676),
      mB = zB(1710),
      yB = zB(4668),
      kB = zB(1169),
      GB = zB(28),
      LB = zB(1532),
      gB = zB(1244),
      tB = zB(106),
      SB = zB(1240),
      MB = zB(1369),
      EB = zB(1263),
      iB = zB(6515),
      qB = zB(6532),
      fB = zB(1148);

    function oB(BB) {
      let {
        pack: jB,
        view: zB,
        favourite: QB,
        notice: nB
      } = BB;
      const {
        width: dB,
        height: NB
      } = uB.s.thumb, {
        live: pB
      } = jB;
      return (0, fB.jsx)("div", {
        className: "ShaderPackCard",
        children: (0, fB.jsxs)("div", {
          className: "ShaderPackCardTile",
          children: [(0, fB.jsxs)(aB.LinkPreserveSearch, {
            to: (0, iB.W)(jB.packId),
            className: "ShaderPackCardLink",
            children: [pB && (0, fB.jsx)("img", {
              className: "ShaderPackCardImage",
              src: (0, uB.u)(gB.clientSideServerUrls.s3Url, pB, zB, "thumb"),
              width: dB,
              height: NB,
              loading: "lazy",
              alt: "",
              draggable: !1
            }), pB && (0, fB.jsx)(qB.d, {
              item: pB
            }), !pB && (0, fB.jsx)("div", {
              className: "ShaderPackCardImage ShaderPackCardImagePending",
              children: (0, fB.jsx)(UB.c, {
                name: "hourglass"
              })
            }), (0, fB.jsxs)("div", {
              className: "ShaderPackCardText",
              children: [nB && (0, fB.jsx)("div", {
                className: IB()("ShaderPackCardNotice", {
                  Warning: "warning" === nB.tone
                }),
                children: nB.text
              }), (0, fB.jsx)("div", {
                className: "ShaderPackCardName SmallTextBold",
                children: jB.name
              })]
            })]
          }), pB && (0, fB.jsxs)("div", {
            className: "ShaderPackCardStats",
            children: [(0, fB.jsxs)("div", {
              className: "ShaderPackCardUses SmallTextBold",
              children: [(0, fB.jsx)(UB.c, {
                name: "download"
              }), (0, EB.J)(pB.downloads)]
            }), QB && (0, fB.jsx)(rB.t, {
              onClick: QB.onToggle,
              isLiked: !0 === QB.isFavourite,
              isLoading: null === QB.isFavourite
            })]
          })]
        })
      })
    }
    var HB = zB(6537);

    function DB(BB) {
      let {
        results: jB,
        loading: zB,
        failed: QB,
        onRetry: nB,
        view: dB,
        previewView: NB
      } = BB;
      const {
        t: uB
      } = (0, SB.D)(), UB = (0, HB.m)(), aB = Date.now(), pB = null === jB ? 0 : "owned" === jB.kind ? jB.packs.length : jB.page.results.length;
      return (0, fB.jsxs)("div", {
        className: IB()("ShaderPackBrowseResults", {
          Loading: zB && null !== jB
        }),
        children: [zB && null === jB && (0, fB.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: (0, fB.jsx)(MB.e, {})
        }), QB && (0, fB.jsxs)("div", {
          className: "ShaderPackBrowseMessage",
          children: [uB("shaderPackListing:loadFailed"), (0, fB.jsx)(rB.f, {
            onClick: nB,
            children: uB("general:tryAgain")
          })]
        }), "listing" === (null === jB || void 0 === jB ? void 0 : jB.kind) && pB > 0 && (0, fB.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: jB.page.results.map((BB => (0, fB.jsx)(oB, {
            pack: {
              packId: BB.packId,
              name: BB.name,
              live: BB
            },
            view: NB,
            favourite: {
              isFavourite: UB.isFavourite(BB.packId),
              onToggle: () => {
                UB.toggle(BB.packId)
              }
            }
          }, BB.packId)))
        }), "owned" === (null === jB || void 0 === jB ? void 0 : jB.kind) && pB > 0 && (0, fB.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: jB.packs.map((BB => {
            var jB;
            return (0, fB.jsx)(oB, {
              pack: BB,
              view: NB,
              notice: BB.owner ? (0, iB.S)(BB.owner, !(null === (jB = BB.live) || void 0 === jB || !jB.renderId), aB, uB)[0] : void 0
            }, BB.packId)
          }))
        }), null !== jB && 0 === pB && (0, fB.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: uB(FB(dB))
        })]
      })
    }

    function FB(BB) {
      return "mine" === BB.section ? "shaderPackListing:noOwnPacks" : (0, iB.v)(BB) ? "general:noResults" : "favourites" === BB.section ? "shaderPackListing:noFavourites" : "general:noResults"
    }
    var YB = zB(6547);
    const VB = 24,
      hB = {
        favourites: "general:favourites",
        mine: "shaderPackListing:mine"
      };

    function XB() {
      var BB, jB, zB, dB;
      const {
        t: MB
      } = (0, SB.D)(), EB = (0, aB.useNavigatePreserveSearch)(), qB = (0, nB.n)(), {
        userContext: oB,
        isUserContextUpdating: FB
      } = (0, kB.d)(), [XB, ZB] = (0, HB.k)(), [AB, TB] = (0, HB.g)(), PB = (0, QB.useRef)(!1), [WB, eB] = (0, pB.k)(), lB = (0, iB.D)(WB), [wB, xB] = (0, QB.useState)(null !== (BB = lB.searchQuery) && void 0 !== BB ? BB : ""), KB = (0, QB.useRef)(null), {
        searchQuery: CB
      } = lB;
      (0, QB.useEffect)((() => {
        xB(null !== CB && void 0 !== CB ? CB : ""), KB.current && (KB.current.value = null !== CB && void 0 !== CB ? CB : "")
      }), [CB]);
      const [cB, bB] = (0, QB.useState)(null), [vB, RB] = (0, QB.useState)(!1), [OB, Bj] = (0, QB.useState)(!1), [jj, zj] = (0, QB.useState)(0), Qj = (0, QB.useRef)(0), nj = JSON.stringify(lB), dj = (0, iB.p)();

      function Ij() {
        null !== dj ? (EB(dj), GB.c.set({
          openEverythingMenuName: NB.o.SETTINGS,
          openSettingsCategory: "mJ"
        })) : EB("/")
      }

      function Nj(BB) {
        eB((jB => {
          (0, iB.gb)(jB, {
            ...lB,
            pageNumber: 1,
            ...BB
          })
        }))
      }

      function uj() {
        const BB = wB.trim() || null;
        Nj({
          searchQuery: BB,
          ...null !== BB && !PB.current && (0, iB.s)(lB) && {
            withFeatures: [],
            withoutFeatures: []
          }
        })
      }(0, yB.b)(Ij), (0, HB.d)(), (0, QB.useEffect)((() => {
        if (FB) return;
        const BB = ++Qj.current,
          jB = JSON.parse(nj);
        RB(!0), Bj(!1), async function(BB) {
          if ("mine" === BB.section) return {
            kind: "owned",
            packs: await LB.b.getOwnedShaderPacks(oB)
          };
          const jB = "favourites" === BB.section,
            zB = jB && (0, iB.s)(BB),
            QB = await LB.b.getShaderPacks(oB, {
              sort: jB ? iB.i : BB.sort,
              features: zB ? [] : BB.withFeatures,
              withoutFeatures: zB ? [] : BB.withoutFeatures,
              searchQuery: BB.searchQuery,
              pageNumber: BB.pageNumber,
              pageSize: VB,
              onlyFavourites: jB,
              banned: (0, iB.u)(oB) ? (0, iB.e)(BB.banned) : void 0
            });
          return {
            kind: "listing",
            page: QB
          }
        }(jB).then((jB => {
          Qj.current === BB && bB(jB)
        })).catch((jB => {
          Qj.current === BB && (console.error("Failed to get shader packs", jB), bB(null), Bj(!0))
        })).finally((() => {
          Qj.current === BB && RB(!1)
        }))
      }), [nj, oB, FB, jj]);
      const [Uj, aj] = (0, QB.useState)(null), pj = null !== (zB = null === (dB = ("listing" === (null === cB || void 0 === cB ? void 0 : cB.kind) ? cB.page.results : (null !== (jB = null === cB || void 0 === cB ? void 0 : cB.packs) && void 0 !== jB ? jB : []).flatMap((BB => BB.live ? [BB.live] : [])))[0]) || void 0 === dB ? void 0 : dB.baselineVersion) && void 0 !== zB ? zB : null;
      (0, QB.useEffect)((() => {
        null !== pj && aj(pj)
      }), [pj]);
      const rj = "mine" === lB.section,
        sj = (0, iB.u)(oB),
        Jj = BB => {
          "explore" !== lB.section && (BB.stopPropagation(), BB.preventDefault(), Nj({
            section: "explore"
          }))
        };
      return (0, fB.jsxs)("div", {
        className: "ShaderPackBrowse AnimFadeIn",
        children: [(0, fB.jsx)(rB.c, {
          onClick: Ij,
          children: MB(null === dj ? "homePage:backToGames" : "shaderPackListing:backToSettings")
        }), (0, fB.jsxs)("div", {
          className: "ShaderPackBrowseHeader",
          children: [(0, fB.jsxs)("div", {
            className: "ShaderPackBrowseHeaderRow",
            children: [(0, fB.jsx)("h1", {
              className: "VisuallyHidden",
              children: MB("shaderPackListing:title")
            }), (0, fB.jsxs)("div", {
              className: "ShaderPackBrowseTabs",
              children: [(0, fB.jsx)("div", {
                className: IB()("ShaderPackBrowseSort", {
                  Active: "explore" === lB.section
                }),
                onMouseDownCapture: Jj,
                onTouchEndCapture: Jj,
                children: (0, fB.jsx)(sB.e, {
                  options: uB.y.map((BB => ({
                    value: BB,
                    label: MB(iB.Z[BB])
                  }))),
                  value: lB.sort,
                  onChange: BB => {
                    Nj({
                      section: "explore",
                      sort: BB.value
                    })
                  }
                })
              }), Object.keys(hB).map((BB => (0, fB.jsx)(rB.M, {
                active: lB.section === BB,
                onClick: () => {
                  Nj({
                    section: BB
                  })
                },
                children: MB(hB[BB])
              }, BB)))]
            }), !rj && (0, fB.jsx)("div", {
              className: "ShaderPackBrowseDivider"
            }), !rj && (0, fB.jsxs)("div", {
              className: "ShaderPackBrowseSearch",
              children: [(0, fB.jsx)("div", {
                className: "ShaderPackBrowseSearchIcon",
                children: (0, fB.jsx)(UB.c, {
                  name: "magnifying-glass"
                })
              }), (0, fB.jsx)(mB.d, {
                className: "ShaderPackBrowseSearchInput",
                placeholderText: MB("shaderPackListing:searchPlaceholder"),
                maxLength: uB.O,
                defaultValue: wB,
                domRef: KB,
                onValueChange: xB,
                onEnter: uj
              }), (0, fB.jsx)(rB.f, {
                onClick: uj,
                children: MB("general:search")
              })]
            }), !rj && (0, fB.jsxs)(rB.M, {
              className: IB()("ShaderPackBrowseFilterToggle", {
                Open: AB
              }),
              pressed: AB,
              onClick: () => {
                TB(!AB)
              },
              children: [MB("shaderPackListing:filter"), " ", (0, fB.jsx)(UB.c, {
                name: AB ? "angle-up" : "angle-down"
              })]
            }), (0, fB.jsx)("div", {
              className: "ShaderPackBrowseSpace"
            }), tB.featureFlags.settings.canUseShaderPacks && (0, fB.jsxs)(rB.m, {
              onClick: () => {
                EB(iB.X)
              },
              children: [(0, fB.jsx)(UB.c, {
                name: "upload"
              }), " ", MB("shaderPackListing:publish")]
            })]
          }), !rj && AB && (0, fB.jsxs)("div", {
            className: "ShaderPackBrowseFeatures",
            children: [iB.A.map((BB => {
              const jB = (0, iB.j)(lB, BB),
                zB = MB(iB.L[BB]);
              return (0, fB.jsx)(rB.M, {
                className: IB()("ShaderPackBrowseFeature", {
                  Without: "without" === jB
                }),
                active: "with" === jB,
                pressed: null !== jB,
                onClick: () => {
                  PB.current = !0, Nj((0, iB.eb)(lB, BB))
                },
                children: (0, fB.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureLabel",
                  children: [(0, fB.jsxs)("span", {
                    className: "ShaderPackBrowseFeatureReserve",
                    children: [(0, fB.jsx)(UB.c, {
                      name: "check"
                    }), " ", zB]
                  }), (0, fB.jsxs)("span", {
                    children: [null !== jB && (0, fB.jsx)(UB.c, {
                      name: "with" === jB ? "check" : "xmark"
                    }), " ", zB]
                  })]
                })
              }, BB)
            })), sj && (0, fB.jsx)(rB.M, {
              className: IB()("ShaderPackBrowseFeature", {
                Without: "without" === lB.banned
              }),
              active: "with" === lB.banned,
              pressed: null !== lB.banned,
              onClick: () => {
                const BB = "without" === lB.banned && !PB.current && (0, iB.s)(lB);
                Nj({
                  banned: (0, iB.B)(lB.banned),
                  ...BB && {
                    withFeatures: [],
                    withoutFeatures: []
                  }
                })
              },
              children: (0, fB.jsxs)("span", {
                className: "ShaderPackBrowseFeatureLabel",
                children: [(0, fB.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureReserve",
                  children: [(0, fB.jsx)(UB.c, {
                    name: "check"
                  }), " BANNED"]
                }), (0, fB.jsxs)("span", {
                  children: [null !== lB.banned && (0, fB.jsx)(UB.c, {
                    name: "with" === lB.banned ? "check" : "xmark"
                  }), " BANNED"]
                })]
              })
            })]
          })]
        }), (!rj || null !== Uj) && (0, fB.jsx)("div", {
          className: "ShaderPackBrowseScenes",
          children: (0, fB.jsx)(YB.e, {
            selected: XB,
            onSelect: ZB,
            imageUrl: BB => null === Uj ? null : (0, uB.n)(gB.clientSideServerUrls.s3Url, Uj, BB, "thumb")
          })
        }), (0, fB.jsx)(DB, {
          results: cB,
          loading: vB,
          failed: OB,
          onRetry: () => {
            zj((BB => BB + 1))
          },
          view: lB,
          previewView: XB
        }), "listing" === (null === cB || void 0 === cB ? void 0 : cB.kind) && (0, fB.jsx)(JB.d, {
          className: "ShaderPackBrowsePagination",
          page: cB.page.pageNumber,
          totalPages: cB.page.totalPages,
          onSetPage: BB => {
            eB((jB => {
              (0, pB.i)(jB, BB)
            }))
          },
          getPageHref: function(BB) {
            const jB = new URLSearchParams(WB);
            (0, pB.i)(jB, BB);
            const zB = jB.toString();
            return zB ? `${qB.pathname}?${zB}` : qB.pathname
          }
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);