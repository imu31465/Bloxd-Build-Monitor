export const id = 120;
export const ids = [120];
export const modules = {
  6215: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      default: () => vU
    });
    var tU = gU(56),
      pU = gU(1481),
      EU = gU(1037),
      PU = gU.n(EU),
      TU = gU(299),
      qU = gU(6222),
      KU = gU(1049),
      cU = gU(1475),
      GU = gU(4222),
      jU = gU(1412),
      uU = gU(2825),
      CU = gU(4228),
      hU = gU(1602),
      QU = gU(4214),
      eU = gU(1112),
      WU = gU(21),
      fU = gU(1461),
      xU = gU(1196),
      mU = gU(96),
      IU = gU(1181),
      JU = gU(1326),
      wU = gU(1217),
      nU = gU(6220),
      bU = gU(6226),
      oU = gU(1090);

    function ZU(UU) {
      let {
        pack: RU,
        view: gU,
        favourite: tU,
        notice: pU
      } = UU;
      const {
        width: EU,
        height: TU
      } = qU.s.thumb, {
        live: GU
      } = RU;
      return (0, oU.jsx)("div", {
        className: "ShaderPackCard",
        children: (0, oU.jsxs)("div", {
          className: "ShaderPackCardTile",
          children: [(0, oU.jsxs)(cU.LinkPreserveSearch, {
            to: (0, nU.T)(RU.packId),
            className: "ShaderPackCardLink",
            children: [GU && (0, oU.jsx)("img", {
              className: "ShaderPackCardImage",
              src: (0, qU.v)(xU.clientSideServerUrls.s3Url, GU, gU, "thumb"),
              width: EU,
              height: TU,
              loading: "lazy",
              alt: "",
              draggable: !1
            }), GU && (0, oU.jsx)(bU.d, {
              item: GU
            }), !GU && (0, oU.jsx)("div", {
              className: "ShaderPackCardImage ShaderPackCardImagePending",
              children: (0, oU.jsx)(KU.c, {
                name: "hourglass"
              })
            }), (0, oU.jsxs)("div", {
              className: "ShaderPackCardText",
              children: [pU && (0, oU.jsx)("div", {
                className: PU()("ShaderPackCardNotice", {
                  Warning: "warning" === pU.tone
                }),
                children: pU.text
              }), (0, oU.jsx)("div", {
                className: "ShaderPackCardName SmallTextBold",
                children: RU.name
              })]
            })]
          }), GU && (0, oU.jsxs)("div", {
            className: "ShaderPackCardStats",
            children: [(0, oU.jsxs)("div", {
              className: "ShaderPackCardUses SmallTextBold",
              children: [(0, oU.jsx)(KU.c, {
                name: "download"
              }), (0, wU.R)(GU.downloads)]
            }), tU && (0, oU.jsx)(jU.s, {
              onClick: tU.onToggle,
              isLiked: !0 === tU.isFavourite,
              isLoading: null === tU.isFavourite
            })]
          })]
        })
      })
    }
    var aU = gU(6235);

    function YU(UU) {
      let {
        results: RU,
        loading: gU,
        failed: tU,
        onRetry: pU,
        view: EU,
        previewView: TU
      } = UU;
      const {
        t: qU
      } = (0, IU.B)(), KU = (0, aU.j)(), cU = Date.now(), GU = null === RU ? 0 : "owned" === RU.kind ? RU.packs.length : RU.page.results.length;
      return (0, oU.jsxs)("div", {
        className: PU()("ShaderPackBrowseResults", {
          Loading: gU && null !== RU
        }),
        children: [gU && null === RU && (0, oU.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: (0, oU.jsx)(JU.d, {})
        }), tU && (0, oU.jsxs)("div", {
          className: "ShaderPackBrowseMessage",
          children: [qU("shaderPackListing:loadFailed"), (0, oU.jsx)(jU.e, {
            onClick: pU,
            children: qU("general:tryAgain")
          })]
        }), "listing" === (null === RU || void 0 === RU ? void 0 : RU.kind) && GU > 0 && (0, oU.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: RU.page.results.map((UU => (0, oU.jsx)(ZU, {
            pack: {
              packId: UU.packId,
              name: UU.name,
              live: UU
            },
            view: TU,
            favourite: {
              isFavourite: KU.isFavourite(UU.packId),
              onToggle: () => {
                KU.toggle(UU.packId)
              }
            }
          }, UU.packId)))
        }), "owned" === (null === RU || void 0 === RU ? void 0 : RU.kind) && GU > 0 && (0, oU.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: RU.packs.map((UU => {
            var RU;
            return (0, oU.jsx)(ZU, {
              pack: UU,
              view: TU,
              notice: UU.owner ? (0, nU.S)(UU.owner, !(null === (RU = UU.live) || void 0 === RU || !RU.renderId), cU, qU)[0] : void 0
            }, UU.packId)
          }))
        }), null !== RU && 0 === GU && (0, oU.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: qU(BU(EU))
        })]
      })
    }

    function BU(UU) {
      return "mine" === UU.section ? "shaderPackListing:noOwnPacks" : (0, nU.p)(UU) ? "general:noResults" : "favourites" === UU.section ? "shaderPackListing:noFavourites" : "general:noResults"
    }
    var VU = gU(6247);
    const rU = 24,
      XU = {
        favourites: "general:favourites",
        mine: "shaderPackListing:mine"
      };

    function vU() {
      var UU, RU, gU, EU;
      const {
        t: JU
      } = (0, IU.B)(), wU = (0, cU.useNavigatePreserveSearch)(), bU = (0, pU.s)(), {
        userContext: ZU,
        isUserContextUpdating: BU
      } = (0, eU.e)(), [vU, dU] = (0, aU.i)(), [HU, SU] = (0, aU.e)(), sU = (0, tU.useRef)(!1), [yU, kU] = (0, GU.o)(), FU = (0, nU.y)(yU), [iU, AU] = (0, tU.useState)(null !== (UU = FU.searchQuery) && void 0 !== UU ? UU : ""), zU = (0, tU.useRef)(null), {
        searchQuery: MU
      } = FU;
      (0, tU.useEffect)((() => {
        AU(null !== MU && void 0 !== MU ? MU : ""), zU.current && (zU.current.value = null !== MU && void 0 !== MU ? MU : "")
      }), [MU]);
      const [DU, LU] = (0, tU.useState)(null), [NU, lU] = (0, tU.useState)(!1), [OU, UR] = (0, tU.useState)(!1), [RR, gR] = (0, tU.useState)(0), tR = (0, tU.useRef)(0), pR = JSON.stringify(FU), ER = (0, nU.h)();

      function PR() {
        null !== ER ? (wU(ER), WU.b.set({
          openEverythingMenuName: TU.n.SETTINGS,
          openSettingsCategory: "Fu"
        })) : wU("/")
      }

      function TR(UU) {
        kU((RU => {
          (0, nU.cb)(RU, {
            ...FU,
            pageNumber: 1,
            ...UU
          })
        }))
      }

      function qR() {
        const UU = iU.trim() || null;
        TR({
          searchQuery: UU,
          ...null !== UU && !sU.current && (0, nU.k)(FU) && {
            withFeatures: [],
            withoutFeatures: []
          }
        })
      }(0, QU.c)(PR), (0, aU.d)(), (0, tU.useEffect)((() => {
        if (BU) return;
        const UU = ++tR.current,
          RU = JSON.parse(pR);
        lU(!0), UR(!1), async function(UU) {
          if ("mine" === UU.section) return {
            kind: "owned",
            packs: await fU.c.getOwnedShaderPacks(ZU)
          };
          const RU = "favourites" === UU.section,
            gU = RU && (0, nU.k)(UU),
            tU = await fU.c.getShaderPacks(ZU, {
              sort: RU ? nU.d : UU.sort,
              features: gU ? [] : UU.withFeatures,
              withoutFeatures: gU ? [] : UU.withoutFeatures,
              searchQuery: UU.searchQuery,
              pageNumber: UU.pageNumber,
              pageSize: rU,
              onlyFavourites: RU,
              banned: (0, nU.o)(ZU) ? (0, nU.c)(UU.banned) : void 0
            });
          return {
            kind: "listing",
            page: tU
          }
        }(RU).then((RU => {
          tR.current === UU && LU(RU)
        })).catch((RU => {
          tR.current === UU && (console.error("Failed to get shader packs", RU), LU(null), UR(!0))
        })).finally((() => {
          tR.current === UU && lU(!1)
        }))
      }), [pR, ZU, BU, RR]);
      const [KR, cR] = (0, tU.useState)(null), GR = null !== (gU = null === (EU = ("listing" === (null === DU || void 0 === DU ? void 0 : DU.kind) ? DU.page.results : (null !== (RU = null === DU || void 0 === DU ? void 0 : DU.packs) && void 0 !== RU ? RU : []).flatMap((UU => UU.live ? [UU.live] : [])))[0]) || void 0 === EU ? void 0 : EU.baselineVersion) && void 0 !== gU ? gU : null;
      (0, tU.useEffect)((() => {
        null !== GR && cR(GR)
      }), [GR]);
      const jR = "mine" === FU.section,
        uR = (0, nU.o)(ZU),
        CR = UU => {
          "explore" !== FU.section && (UU.stopPropagation(), UU.preventDefault(), TR({
            section: "explore"
          }))
        };
      return (0, oU.jsxs)("div", {
        className: "ShaderPackBrowse AnimFadeIn",
        children: [(0, oU.jsx)(jU.d, {
          onClick: PR,
          children: JU(null === ER ? "homePage:backToGames" : "shaderPackListing:backToSettings")
        }), (0, oU.jsxs)("div", {
          className: "ShaderPackBrowseHeader",
          children: [(0, oU.jsxs)("div", {
            className: "ShaderPackBrowseHeaderRow",
            children: [(0, oU.jsx)("h1", {
              className: "VisuallyHidden",
              children: JU("shaderPackListing:title")
            }), (0, oU.jsxs)("div", {
              className: "ShaderPackBrowseTabs",
              children: [(0, oU.jsx)("div", {
                className: PU()("ShaderPackBrowseSort", {
                  Active: "explore" === FU.section
                }),
                onMouseDownCapture: CR,
                onTouchEndCapture: CR,
                children: (0, oU.jsx)(uU.c, {
                  options: qU.x.map((UU => ({
                    value: UU,
                    label: JU(nU.X[UU])
                  }))),
                  value: FU.sort,
                  onChange: UU => {
                    TR({
                      section: "explore",
                      sort: UU.value
                    })
                  }
                })
              }), Object.keys(XU).map((UU => (0, oU.jsx)(jU.M, {
                active: FU.section === UU,
                onClick: () => {
                  TR({
                    section: UU
                  })
                },
                children: JU(XU[UU])
              }, UU)))]
            }), !jR && (0, oU.jsx)("div", {
              className: "ShaderPackBrowseDivider"
            }), !jR && (0, oU.jsxs)("div", {
              className: "ShaderPackBrowseSearch",
              children: [(0, oU.jsx)("div", {
                className: "ShaderPackBrowseSearchIcon",
                children: (0, oU.jsx)(KU.c, {
                  name: "magnifying-glass"
                })
              }), (0, oU.jsx)(hU.d, {
                className: "ShaderPackBrowseSearchInput",
                placeholderText: JU("shaderPackListing:searchPlaceholder"),
                maxLength: qU.L,
                defaultValue: iU,
                domRef: zU,
                onValueChange: AU,
                onEnter: qR
              }), (0, oU.jsx)(jU.e, {
                onClick: qR,
                children: JU("general:search")
              })]
            }), !jR && (0, oU.jsxs)(jU.M, {
              className: PU()("ShaderPackBrowseFilterToggle", {
                Open: HU
              }),
              pressed: HU,
              onClick: () => {
                SU(!HU)
              },
              children: [JU("shaderPackListing:filter"), " ", (0, oU.jsx)(KU.c, {
                name: HU ? "angle-up" : "angle-down"
              })]
            }), (0, oU.jsx)("div", {
              className: "ShaderPackBrowseSpace"
            }), mU.featureFlags.settings.canUseShaderPacks && (0, oU.jsxs)(jU.j, {
              onClick: () => {
                wU(nU.U)
              },
              children: [(0, oU.jsx)(KU.c, {
                name: "upload"
              }), " ", JU("shaderPackListing:publish")]
            })]
          }), !jR && HU && (0, oU.jsxs)("div", {
            className: "ShaderPackBrowseFeatures",
            children: [nU.t.map((UU => {
              const RU = (0, nU.e)(FU, UU),
                gU = JU(nU.H[UU]);
              return (0, oU.jsx)(jU.M, {
                className: PU()("ShaderPackBrowseFeature", {
                  Without: "without" === RU
                }),
                active: "with" === RU,
                pressed: null !== RU,
                onClick: () => {
                  sU.current = !0, TR((0, nU.$)(FU, UU))
                },
                children: (0, oU.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureLabel",
                  children: [(0, oU.jsxs)("span", {
                    className: "ShaderPackBrowseFeatureReserve",
                    children: [(0, oU.jsx)(KU.c, {
                      name: "check"
                    }), " ", gU]
                  }), (0, oU.jsxs)("span", {
                    children: [null !== RU && (0, oU.jsx)(KU.c, {
                      name: "with" === RU ? "check" : "xmark"
                    }), " ", gU]
                  })]
                })
              }, UU)
            })), uR && (0, oU.jsx)(jU.M, {
              className: PU()("ShaderPackBrowseFeature", {
                Without: "without" === FU.banned
              }),
              active: "with" === FU.banned,
              pressed: null !== FU.banned,
              onClick: () => {
                const UU = "without" === FU.banned && !sU.current && (0, nU.k)(FU);
                TR({
                  banned: (0, nU.x)(FU.banned),
                  ...UU && {
                    withFeatures: [],
                    withoutFeatures: []
                  }
                })
              },
              children: (0, oU.jsxs)("span", {
                className: "ShaderPackBrowseFeatureLabel",
                children: [(0, oU.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureReserve",
                  children: [(0, oU.jsx)(KU.c, {
                    name: "check"
                  }), " BANNED"]
                }), (0, oU.jsxs)("span", {
                  children: [null !== FU.banned && (0, oU.jsx)(KU.c, {
                    name: "with" === FU.banned ? "check" : "xmark"
                  }), " BANNED"]
                })]
              })
            })]
          })]
        }), (!jR || null !== KR) && (0, oU.jsx)("div", {
          className: "ShaderPackBrowseScenes",
          children: (0, oU.jsx)(VU.b, {
            selected: vU,
            onSelect: dU,
            imageUrl: UU => null === KR ? null : (0, qU.q)(xU.clientSideServerUrls.s3Url, KR, UU, "thumb")
          })
        }), (0, oU.jsx)(YU, {
          results: DU,
          loading: NU,
          failed: OU,
          onRetry: () => {
            gR((UU => UU + 1))
          },
          view: FU,
          previewView: vU
        }), "listing" === (null === DU || void 0 === DU ? void 0 : DU.kind) && (0, oU.jsx)(CU.b, {
          className: "ShaderPackBrowsePagination",
          page: DU.page.pageNumber,
          totalPages: DU.page.totalPages,
          onSetPage: UU => {
            kU((RU => {
              (0, GU.l)(RU, UU)
            }))
          },
          getPageHref: function(UU) {
            const RU = new URLSearchParams(yU);
            (0, GU.l)(RU, UU);
            const gU = RU.toString();
            return gU ? `${bU.pathname}?${gU}` : bU.pathname
          }
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);