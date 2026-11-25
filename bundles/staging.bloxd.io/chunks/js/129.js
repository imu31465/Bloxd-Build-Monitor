export const id = 129;
export const ids = [129];
export const modules = {
  6553: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      default: () => PG
    });
    var wG = ZG(51),
      SG = ZG(1457),
      LG = ZG(1006),
      yG = ZG.n(LG),
      kG = ZG(333),
      UG = ZG(6561),
      YG = ZG(1016),
      VG = ZG(1444),
      pG = ZG(4575),
      fG = ZG(1393),
      QG = ZG(3113),
      KG = ZG(4581),
      hG = ZG(1621),
      dG = ZG(4573),
      JG = ZG(1092),
      rG = ZG(17),
      zG = ZG(1431),
      EG = ZG(1163),
      oG = ZG(80),
      XG = ZG(1151),
      uG = ZG(1302),
      iG = ZG(1177),
      CG = ZG(6559),
      WG = ZG(6567),
      mG = ZG(1067);

    function IG(GG) {
      let {
        pack: bG,
        view: ZG,
        favourite: wG,
        notice: SG
      } = GG;
      const {
        width: LG,
        height: kG
      } = UG.u.thumb, {
        live: pG
      } = bG;
      return (0, mG.jsx)("div", {
        className: "ShaderPackCard",
        children: (0, mG.jsxs)("div", {
          className: "ShaderPackCardTile",
          children: [(0, mG.jsxs)(VG.LinkPreserveSearch, {
            to: (0, CG.bb)(bG.packId),
            className: "ShaderPackCardLink",
            children: [pG && (0, mG.jsx)("img", {
              className: "ShaderPackCardImage",
              src: (0, UG.v)(EG.clientSideServerUrls.s3Url, pG, ZG, "thumb"),
              width: LG,
              height: kG,
              loading: "lazy",
              alt: "",
              draggable: !1
            }), pG && (0, mG.jsx)(WG.b, {
              item: pG
            }), !pG && (0, mG.jsx)("div", {
              className: "ShaderPackCardImage ShaderPackCardImagePending",
              children: (0, mG.jsx)(YG.c, {
                name: "hourglass"
              })
            }), (0, mG.jsxs)("div", {
              className: "ShaderPackCardText",
              children: [SG && (0, mG.jsx)("div", {
                className: yG()("ShaderPackCardNotice", {
                  Warning: "warning" === SG.tone
                }),
                children: SG.text
              }), (0, mG.jsx)("div", {
                className: "ShaderPackCardName SmallTextBold",
                children: bG.name
              })]
            })]
          }), pG && (0, mG.jsxs)("div", {
            className: "ShaderPackCardStats",
            children: [(0, mG.jsxs)("div", {
              className: "ShaderPackCardUses SmallTextBold",
              children: [(0, mG.jsx)(YG.c, {
                name: "download"
              }), (0, iG.O)(pG.downloads)]
            }), wG && (0, mG.jsx)(fG.o, {
              onClick: wG.onToggle,
              isLiked: !0 === wG.isFavourite,
              isLoading: null === wG.isFavourite
            })]
          })]
        })
      })
    }
    var FG = ZG(6576);

    function vG(GG) {
      let {
        results: bG,
        loading: ZG,
        failed: wG,
        onRetry: SG,
        view: LG,
        previewView: kG
      } = GG;
      const {
        t: UG
      } = (0, XG.w)(), YG = (0, FG.k)(), VG = Date.now(), pG = null === bG ? 0 : "owned" === bG.kind ? bG.packs.length : bG.page.results.length;
      return (0, mG.jsxs)("div", {
        className: yG()("ShaderPackBrowseResults", {
          Loading: ZG && null !== bG
        }),
        children: [ZG && null === bG && (0, mG.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: (0, mG.jsx)(uG.b, {})
        }), wG && (0, mG.jsxs)("div", {
          className: "ShaderPackBrowseMessage",
          children: [UG("shaderPackListing:loadFailed"), (0, mG.jsx)(fG.d, {
            onClick: SG,
            children: UG("general:tryAgain")
          })]
        }), "listing" === (null === bG || void 0 === bG ? void 0 : bG.kind) && pG > 0 && (0, mG.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: bG.page.results.map((GG => (0, mG.jsx)(IG, {
            pack: {
              packId: GG.packId,
              name: GG.name,
              live: GG
            },
            view: kG,
            favourite: {
              isFavourite: YG.isFavourite(GG.packId),
              onToggle: () => {
                YG.toggle(GG.packId)
              }
            }
          }, GG.packId)))
        }), "owned" === (null === bG || void 0 === bG ? void 0 : bG.kind) && pG > 0 && (0, mG.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: bG.packs.map((GG => {
            var bG;
            return (0, mG.jsx)(IG, {
              pack: GG,
              view: kG,
              notice: GG.owner ? (0, CG.Z)(GG.owner, !(null === (bG = GG.live) || void 0 === bG || !bG.renderId), VG, UG)[0] : void 0
            }, GG.packId)
          }))
        }), null !== bG && 0 === pG && (0, mG.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: UG(aG(LG))
        })]
      })
    }

    function aG(GG) {
      return "mine" === GG.section ? "shaderPackListing:noOwnPacks" : (0, CG.v)(GG) ? "general:noResults" : "favourites" === GG.section ? "shaderPackListing:noFavourites" : "general:noResults"
    }
    var cG = ZG(6583);
    const lG = 24,
      jG = {
        favourites: "general:favourites",
        mine: "shaderPackListing:mine"
      };

    function PG() {
      var GG, bG, ZG, LG;
      const {
        t: uG
      } = (0, XG.w)(), iG = (0, VG.useNavigatePreserveSearch)(), WG = (0, SG.n)(), {
        userContext: IG,
        isUserContextUpdating: aG
      } = (0, JG.e)(), [PG, MG] = (0, FG.i)(), [AG, sG] = (0, FG.e)(), qG = (0, wG.useRef)(!1), [nG, gG] = (0, pG.o)(), eG = (0, CG.K)(nG), [RG, TG] = (0, wG.useState)(null !== (GG = eG.searchQuery) && void 0 !== GG ? GG : ""), HG = (0, wG.useRef)(null), {
        searchQuery: tG
      } = eG;
      (0, wG.useEffect)((() => {
        TG(null !== tG && void 0 !== tG ? tG : ""), HG.current && (HG.current.value = null !== tG && void 0 !== tG ? tG : "")
      }), [tG]);
      const [DG, NG] = (0, wG.useState)(null), [OG, xG] = (0, wG.useState)(!1), [BG, Gb] = (0, wG.useState)(!1), [bb, Zb] = (0, wG.useState)(0), wb = (0, wG.useRef)(0), Sb = JSON.stringify(eG), Lb = (0, CG.n)();

      function yb() {
        null !== Lb ? (iG(Lb), rG.e.set({
          openEverythingMenuName: kG.u.SETTINGS,
          openSettingsCategory: "OQ"
        })) : iG("/")
      }

      function kb(GG) {
        gG((bG => {
          (0, CG.qb)(bG, {
            ...eG,
            pageNumber: 1,
            ...GG
          })
        }))
      }

      function Ub() {
        const GG = RG.trim() || null;
        kb({
          searchQuery: GG,
          ...null !== GG && !qG.current && (0, CG.q)(eG) && {
            withFeatures: [],
            withoutFeatures: []
          }
        })
      }(0, dG.e)(yb), (0, FG.d)(), (0, wG.useEffect)((() => {
        if (aG) return;
        const GG = ++wb.current,
          bG = JSON.parse(Sb);
        xG(!0), Gb(!1), async function(GG) {
          if ("mine" === GG.section) return {
            kind: "owned",
            packs: await zG.d.getOwnedShaderPacks(IG)
          };
          const bG = "favourites" === GG.section,
            ZG = bG && (0, CG.q)(GG),
            wG = await zG.d.getShaderPacks(IG, {
              sort: bG ? CG.f : GG.sort,
              features: ZG ? [] : GG.withFeatures,
              withoutFeatures: ZG ? [] : GG.withoutFeatures,
              searchQuery: GG.searchQuery,
              pageNumber: GG.pageNumber,
              pageSize: lG,
              onlyFavourites: bG,
              banned: (0, CG.s)(IG) ? (0, CG.c)(GG.banned) : void 0
            });
          return {
            kind: "listing",
            page: wG
          }
        }(bG).then((bG => {
          wb.current === GG && NG(bG)
        })).catch((bG => {
          wb.current === GG && (console.error("Failed to get shader packs", bG), NG(null), Gb(!0))
        })).finally((() => {
          wb.current === GG && xG(!1)
        }))
      }), [Sb, IG, aG, bb]);
      const [Yb, Vb] = (0, wG.useState)(null), pb = null !== (ZG = null === (LG = ("listing" === (null === DG || void 0 === DG ? void 0 : DG.kind) ? DG.page.results : (null !== (bG = null === DG || void 0 === DG ? void 0 : DG.packs) && void 0 !== bG ? bG : []).flatMap((GG => GG.live ? [GG.live] : [])))[0]) || void 0 === LG ? void 0 : LG.baselineVersion) && void 0 !== ZG ? ZG : null;
      (0, wG.useEffect)((() => {
        null !== pb && Vb(pb)
      }), [pb]);
      const fb = "mine" === eG.section,
        Qb = (0, CG.s)(IG),
        Kb = GG => {
          "explore" !== eG.section && (GG.stopPropagation(), GG.preventDefault(), kb({
            section: "explore"
          }))
        };
      return (0, mG.jsxs)("div", {
        className: "ShaderPackBrowse AnimFadeIn",
        children: [(0, mG.jsx)(fG.b, {
          onClick: yb,
          children: uG(null === Lb ? "homePage:backToGames" : "shaderPackListing:backToSettings")
        }), (0, mG.jsxs)("div", {
          className: "ShaderPackBrowseHeader",
          children: [(0, mG.jsxs)("div", {
            className: "ShaderPackBrowseHeaderRow",
            children: [(0, mG.jsx)("h1", {
              className: "VisuallyHidden",
              children: uG("shaderPackListing:title")
            }), (0, mG.jsxs)("div", {
              className: "ShaderPackBrowseTabs",
              children: [(0, mG.jsx)("div", {
                className: yG()("ShaderPackBrowseSort", {
                  Active: "explore" === eG.section
                }),
                onMouseDownCapture: Kb,
                onTouchEndCapture: Kb,
                children: (0, mG.jsx)(QG.b, {
                  options: UG.z.map((GG => ({
                    value: GG,
                    label: uG(CG.hb[GG])
                  }))),
                  value: eG.sort,
                  onChange: GG => {
                    kb({
                      section: "explore",
                      sort: GG.value
                    })
                  }
                })
              }), Object.keys(jG).map((GG => (0, mG.jsx)(fG.K, {
                active: eG.section === GG,
                onClick: () => {
                  kb({
                    section: GG
                  })
                },
                children: uG(jG[GG])
              }, GG)))]
            }), !fb && (0, mG.jsx)("div", {
              className: "ShaderPackBrowseDivider"
            }), !fb && (0, mG.jsxs)("div", {
              className: "ShaderPackBrowseSearch",
              children: [(0, mG.jsx)("div", {
                className: "ShaderPackBrowseSearchIcon",
                children: (0, mG.jsx)(YG.c, {
                  name: "magnifying-glass"
                })
              }), (0, mG.jsx)(hG.b, {
                className: "ShaderPackBrowseSearchInput",
                placeholderText: uG("shaderPackListing:searchPlaceholder"),
                maxLength: UG.K,
                defaultValue: RG,
                domRef: HG,
                onValueChange: TG,
                onEnter: Ub
              }), (0, mG.jsx)(fG.d, {
                onClick: Ub,
                children: uG("general:search")
              })]
            }), !fb && (0, mG.jsxs)(fG.K, {
              className: yG()("ShaderPackBrowseFilterToggle", {
                Open: AG
              }),
              pressed: AG,
              onClick: () => {
                sG(!AG)
              },
              children: [uG("shaderPackListing:filter"), " ", (0, mG.jsx)(YG.c, {
                name: AG ? "angle-up" : "angle-down"
              })]
            }), (0, mG.jsx)("div", {
              className: "ShaderPackBrowseSpace"
            }), oG.featureFlags.settings.canUseShaderPacks && (0, mG.jsxs)(fG.k, {
              onClick: () => {
                iG(CG.eb)
              },
              children: [(0, mG.jsx)(YG.c, {
                name: "upload"
              }), " ", uG("shaderPackListing:publish")]
            })]
          }), !fb && AG && (0, mG.jsxs)("div", {
            className: "ShaderPackBrowseFeatures",
            children: [CG.D.map((GG => {
              const bG = (0, CG.g)(eG, GG),
                ZG = uG(CG.S[GG]);
              return (0, mG.jsx)(fG.K, {
                className: yG()("ShaderPackBrowseFeature", {
                  Without: "without" === bG
                }),
                active: "with" === bG,
                pressed: null !== bG,
                onClick: () => {
                  qG.current = !0, kb((0, CG.mb)(eG, GG))
                },
                children: (0, mG.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureLabel",
                  children: [(0, mG.jsxs)("span", {
                    className: "ShaderPackBrowseFeatureReserve",
                    children: [(0, mG.jsx)(YG.c, {
                      name: "check"
                    }), " ", ZG]
                  }), (0, mG.jsxs)("span", {
                    children: [null !== bG && (0, mG.jsx)(YG.c, {
                      name: "with" === bG ? "check" : "xmark"
                    }), " ", ZG]
                  })]
                })
              }, GG)
            })), Qb && (0, mG.jsx)(fG.K, {
              className: yG()("ShaderPackBrowseFeature", {
                Without: "without" === eG.banned
              }),
              active: "with" === eG.banned,
              pressed: null !== eG.banned,
              onClick: () => {
                const GG = "without" === eG.banned && !qG.current && (0, CG.q)(eG);
                kb({
                  banned: (0, CG.G)(eG.banned),
                  ...GG && {
                    withFeatures: [],
                    withoutFeatures: []
                  }
                })
              },
              children: (0, mG.jsxs)("span", {
                className: "ShaderPackBrowseFeatureLabel",
                children: [(0, mG.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureReserve",
                  children: [(0, mG.jsx)(YG.c, {
                    name: "check"
                  }), " BANNED"]
                }), (0, mG.jsxs)("span", {
                  children: [null !== eG.banned && (0, mG.jsx)(YG.c, {
                    name: "with" === eG.banned ? "check" : "xmark"
                  }), " BANNED"]
                })]
              })
            })]
          })]
        }), (!fb || null !== Yb) && (0, mG.jsx)("div", {
          className: "ShaderPackBrowseScenes",
          children: (0, mG.jsx)(cG.b, {
            selected: PG,
            onSelect: MG,
            imageUrl: GG => null === Yb ? null : (0, UG.n)(EG.clientSideServerUrls.s3Url, Yb, GG, "thumb")
          })
        }), (0, mG.jsx)(vG, {
          results: DG,
          loading: OG,
          failed: BG,
          onRetry: () => {
            Zb((GG => GG + 1))
          },
          view: eG,
          previewView: PG
        }), "listing" === (null === DG || void 0 === DG ? void 0 : DG.kind) && (0, mG.jsx)(KG.e, {
          className: "ShaderPackBrowsePagination",
          page: DG.page.pageNumber,
          totalPages: DG.page.totalPages,
          onSetPage: GG => {
            gG((bG => {
              (0, pG.k)(bG, GG)
            }))
          },
          getPageHref: function(GG) {
            const bG = new URLSearchParams(nG);
            (0, pG.k)(bG, GG);
            const ZG = bG.toString();
            return ZG ? `${WG.pathname}?${ZG}` : WG.pathname
          }
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);