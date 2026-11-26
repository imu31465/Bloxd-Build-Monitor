export const id = 140;
export const ids = [140];
export const modules = {
  7142: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      default: () => fU
    });
    var cU = zU(61),
      yU = zU(1577),
      QU = zU(1106),
      AU = zU.n(QU),
      FU = zU(320),
      oU = zU(7158),
      DU = zU(1390),
      EU = zU(1568),
      YU = zU(4997),
      NU = zU(1494),
      IU = zU(3490),
      pU = zU(5004),
      aU = zU(1726),
      tU = zU(4991),
      gU = zU(1129),
      kU = zU(27),
      GU = zU(1545),
      BU = zU(1203),
      ZU = zU(97),
      RU = zU(1193),
      PU = zU(1384),
      WU = zU(1236),
      dU = zU(7150),
      LU = zU(7167),
      eU = zU(1305);

    function CU(UU) {
      let {
        pack: XU,
        view: zU,
        favourite: cU,
        notice: yU
      } = UU;
      const {
        width: QU,
        height: FU
      } = oU.s.thumb, {
        live: YU
      } = XU;
      return (0, eU.jsx)("div", {
        className: "ShaderPackCard",
        children: (0, eU.jsxs)("div", {
          className: "ShaderPackCardTile",
          children: [(0, eU.jsxs)(EU.LinkPreserveSearch, {
            to: (0, dU.Z)(XU.packId),
            className: "ShaderPackCardLink",
            children: [YU && (0, eU.jsx)("img", {
              className: "ShaderPackCardImage",
              src: (0, oU.v)(BU.clientSideServerUrls.s3Url, YU, zU, "thumb"),
              width: QU,
              height: FU,
              loading: "lazy",
              alt: "",
              draggable: !1
            }), YU && (0, eU.jsx)(LU.d, {
              item: YU
            }), !YU && (0, eU.jsx)("div", {
              className: "ShaderPackCardImage ShaderPackCardImagePending",
              children: (0, eU.jsx)(DU.d, {
                name: "hourglass"
              })
            }), (0, eU.jsxs)("div", {
              className: "ShaderPackCardText",
              children: [yU && (0, eU.jsx)("div", {
                className: AU()("ShaderPackCardNotice", {
                  Warning: "warning" === yU.tone
                }),
                children: yU.text
              }), (0, eU.jsx)("div", {
                className: "ShaderPackCardName SmallTextBold",
                children: XU.name
              })]
            })]
          }), YU && (0, eU.jsxs)("div", {
            className: "ShaderPackCardStats",
            children: [(0, eU.jsxs)("div", {
              className: "ShaderPackCardUses SmallTextBold",
              children: [(0, eU.jsx)(DU.d, {
                name: "download"
              }), (0, WU.I)(YU.downloads)]
            }), cU && (0, eU.jsx)(NU.q, {
              onClick: cU.onToggle,
              isLiked: !0 === cU.isFavourite,
              isLoading: null === cU.isFavourite
            })]
          })]
        })
      })
    }
    var wU = zU(7172);

    function qU(UU) {
      let {
        results: XU,
        loading: zU,
        failed: cU,
        onRetry: yU,
        view: QU,
        previewView: FU
      } = UU;
      const {
        t: oU
      } = (0, RU.I)(), DU = (0, wU.h)(), EU = Date.now(), YU = null === XU ? 0 : "owned" === XU.kind ? XU.packs.length : XU.page.results.length;
      return (0, eU.jsxs)("div", {
        className: AU()("ShaderPackBrowseResults", {
          Loading: zU && null !== XU
        }),
        children: [zU && null === XU && (0, eU.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: (0, eU.jsx)(PU.b, {})
        }), cU && (0, eU.jsxs)("div", {
          className: "ShaderPackBrowseMessage",
          children: [oU("shaderPackListing:loadFailed"), (0, eU.jsx)(NU.f, {
            onClick: yU,
            children: oU("general:tryAgain")
          })]
        }), "listing" === (null === XU || void 0 === XU ? void 0 : XU.kind) && YU > 0 && (0, eU.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: XU.page.results.map((UU => (0, eU.jsx)(CU, {
            pack: {
              packId: UU.packId,
              name: UU.name,
              live: UU
            },
            view: FU,
            favourite: {
              isFavourite: DU.isFavourite(UU.packId),
              onToggle: () => {
                DU.toggle(UU.packId)
              }
            }
          }, UU.packId)))
        }), "owned" === (null === XU || void 0 === XU ? void 0 : XU.kind) && YU > 0 && (0, eU.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: XU.packs.map((UU => {
            var XU;
            return (0, eU.jsx)(CU, {
              pack: UU,
              view: FU,
              notice: UU.owner ? (0, dU.V)(UU.owner, !(null === (XU = UU.live) || void 0 === XU || !XU.renderId), EU, oU)[0] : void 0
            }, UU.packId)
          }))
        }), null !== XU && 0 === YU && (0, eU.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: oU(OU(QU))
        })]
      })
    }

    function OU(UU) {
      return "mine" === UU.section ? "shaderPackListing:noOwnPacks" : (0, dU.s)(UU) ? "general:noResults" : "favourites" === UU.section ? "shaderPackListing:noFavourites" : "general:noResults"
    }
    var SU = zU(7181);
    const rU = 24,
      uU = {
        favourites: "general:favourites",
        mine: "shaderPackListing:mine"
      };

    function fU() {
      var UU, XU, zU, QU;
      const {
        t: PU
      } = (0, RU.I)(), WU = (0, EU.useNavigatePreserveSearch)(), LU = (0, yU.w)(), {
        userContext: CU,
        isUserContextUpdating: OU
      } = (0, gU.d)(), [fU, iU] = (0, wU.g)(), [HU, MU] = (0, wU.e)(), vU = (0, cU.useRef)(!1), [VU, sU] = (0, YU.q)(), nU = (0, dU.F)(VU), [mU, lU] = (0, cU.useState)(null !== (UU = nU.searchQuery) && void 0 !== UU ? UU : ""), xU = (0, cU.useRef)(null), {
        searchQuery: JU
      } = nU;
      (0, cU.useEffect)((() => {
        lU(null !== JU && void 0 !== JU ? JU : ""), xU.current && (xU.current.value = null !== JU && void 0 !== JU ? JU : "")
      }), [JU]);
      const [jU, KU] = (0, cU.useState)(null), [bU, TU] = (0, cU.useState)(!1), [hU, UX] = (0, cU.useState)(!1), [XX, zX] = (0, cU.useState)(0), cX = (0, cU.useRef)(0), yX = JSON.stringify(nU), QX = (0, dU.m)();

      function AX() {
        null !== QX ? (WU(QX), kU.e.set({
          openEverythingMenuName: FU.s.SETTINGS,
          openSettingsCategory: "Fp"
        })) : WU("/")
      }

      function FX(UU) {
        sU((XU => {
          (0, dU.jb)(XU, {
            ...nU,
            pageNumber: 1,
            ...UU
          })
        }))
      }

      function oX() {
        const UU = mU.trim() || null;
        FX({
          searchQuery: UU,
          ...null !== UU && !vU.current && (0, dU.n)(nU) && {
            withFeatures: [],
            withoutFeatures: []
          }
        })
      }(0, tU.e)(AX), (0, wU.d)(), (0, cU.useEffect)((() => {
        if (OU) return;
        const UU = ++cX.current,
          XU = JSON.parse(yX);
        TU(!0), UX(!1), async function(UU) {
          if ("mine" === UU.section) return {
            kind: "owned",
            packs: await GU.c.getOwnedShaderPacks(CU)
          };
          const XU = "favourites" === UU.section,
            zU = XU && (0, dU.n)(UU),
            cU = await GU.c.getShaderPacks(CU, {
              sort: XU ? dU.g : UU.sort,
              features: zU ? [] : UU.withFeatures,
              withoutFeatures: zU ? [] : UU.withoutFeatures,
              searchQuery: UU.searchQuery,
              pageNumber: UU.pageNumber,
              pageSize: rU,
              onlyFavourites: XU,
              banned: (0, dU.p)(CU) ? (0, dU.c)(UU.banned) : void 0
            });
          return {
            kind: "listing",
            page: cU
          }
        }(XU).then((XU => {
          cX.current === UU && KU(XU)
        })).catch((XU => {
          cX.current === UU && (console.error("Failed to get shader packs", XU), KU(null), UX(!0))
        })).finally((() => {
          cX.current === UU && TU(!1)
        }))
      }), [yX, CU, OU, XX]);
      const [DX, EX] = (0, cU.useState)(null), YX = null !== (zU = null === (QU = ("listing" === (null === jU || void 0 === jU ? void 0 : jU.kind) ? jU.page.results : (null !== (XU = null === jU || void 0 === jU ? void 0 : jU.packs) && void 0 !== XU ? XU : []).flatMap((UU => UU.live ? [UU.live] : [])))[0]) || void 0 === QU ? void 0 : QU.baselineVersion) && void 0 !== zU ? zU : null;
      (0, cU.useEffect)((() => {
        null !== YX && EX(YX)
      }), [YX]);
      const NX = "mine" === nU.section,
        IX = (0, dU.p)(CU),
        pX = UU => {
          "explore" !== nU.section && (UU.stopPropagation(), UU.preventDefault(), FX({
            section: "explore"
          }))
        };
      return (0, eU.jsxs)("div", {
        className: "ShaderPackBrowse AnimFadeIn",
        children: [(0, eU.jsx)(NU.e, {
          onClick: AX,
          children: PU(null === QX ? "homePage:backToGames" : "shaderPackListing:backToSettings")
        }), (0, eU.jsxs)("div", {
          className: "ShaderPackBrowseHeader",
          children: [(0, eU.jsxs)("div", {
            className: "ShaderPackBrowseHeaderRow",
            children: [(0, eU.jsx)("h1", {
              className: "VisuallyHidden",
              children: PU("shaderPackListing:title")
            }), (0, eU.jsxs)("div", {
              className: "ShaderPackBrowseTabs",
              children: [(0, eU.jsx)("div", {
                className: AU()("ShaderPackBrowseSort", {
                  Active: "explore" === nU.section
                }),
                onMouseDownCapture: pX,
                onTouchEndCapture: pX,
                children: (0, eU.jsx)(IU.d, {
                  options: oU.z.map((UU => ({
                    value: UU,
                    label: PU(dU.bb[UU])
                  }))),
                  value: nU.sort,
                  onChange: UU => {
                    FX({
                      section: "explore",
                      sort: UU.value
                    })
                  }
                })
              }), Object.keys(uU).map((UU => (0, eU.jsx)(NU.O, {
                active: nU.section === UU,
                onClick: () => {
                  FX({
                    section: UU
                  })
                },
                children: PU(uU[UU])
              }, UU)))]
            }), !NX && (0, eU.jsx)("div", {
              className: "ShaderPackBrowseDivider"
            }), !NX && (0, eU.jsxs)("div", {
              className: "ShaderPackBrowseSearch",
              children: [(0, eU.jsx)("div", {
                className: "ShaderPackBrowseSearchIcon",
                children: (0, eU.jsx)(DU.d, {
                  name: "magnifying-glass"
                })
              }), (0, eU.jsx)(aU.e, {
                className: "ShaderPackBrowseSearchInput",
                placeholderText: PU("shaderPackListing:searchPlaceholder"),
                maxLength: oU.I,
                defaultValue: mU,
                domRef: xU,
                onValueChange: lU,
                onEnter: oX
              }), (0, eU.jsx)(NU.f, {
                onClick: oX,
                children: PU("general:search")
              })]
            }), !NX && (0, eU.jsxs)(NU.O, {
              className: AU()("ShaderPackBrowseFilterToggle", {
                Open: HU
              }),
              pressed: HU,
              onClick: () => {
                MU(!HU)
              },
              children: [PU("shaderPackListing:filter"), " ", (0, eU.jsx)(DU.d, {
                name: HU ? "angle-up" : "angle-down"
              })]
            }), (0, eU.jsx)("div", {
              className: "ShaderPackBrowseSpace"
            }), ZU.featureFlags.settings.canUseShaderPacks && (0, eU.jsxs)(NU.l, {
              onClick: () => {
                WU(dU.$)
              },
              children: [(0, eU.jsx)(DU.d, {
                name: "upload"
              }), " ", PU("shaderPackListing:publish")]
            })]
          }), !NX && HU && (0, eU.jsxs)("div", {
            className: "ShaderPackBrowseFeatures",
            children: [dU.z.map((UU => {
              const XU = (0, dU.h)(nU, UU),
                zU = PU(dU.N[UU]);
              return (0, eU.jsx)(NU.O, {
                className: AU()("ShaderPackBrowseFeature", {
                  Without: "without" === XU
                }),
                active: "with" === XU,
                pressed: null !== XU,
                onClick: () => {
                  vU.current = !0, FX((0, dU.gb)(nU, UU))
                },
                children: (0, eU.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureLabel",
                  children: [(0, eU.jsxs)("span", {
                    className: "ShaderPackBrowseFeatureReserve",
                    children: [(0, eU.jsx)(DU.d, {
                      name: "check"
                    }), " ", zU]
                  }), (0, eU.jsxs)("span", {
                    children: [null !== XU && (0, eU.jsx)(DU.d, {
                      name: "with" === XU ? "check" : "xmark"
                    }), " ", zU]
                  })]
                })
              }, UU)
            })), IX && (0, eU.jsx)(NU.O, {
              className: AU()("ShaderPackBrowseFeature", {
                Without: "without" === nU.banned
              }),
              active: "with" === nU.banned,
              pressed: null !== nU.banned,
              onClick: () => {
                const UU = "without" === nU.banned && !vU.current && (0, dU.n)(nU);
                FX({
                  banned: (0, dU.D)(nU.banned),
                  ...UU && {
                    withFeatures: [],
                    withoutFeatures: []
                  }
                })
              },
              children: (0, eU.jsxs)("span", {
                className: "ShaderPackBrowseFeatureLabel",
                children: [(0, eU.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureReserve",
                  children: [(0, eU.jsx)(DU.d, {
                    name: "check"
                  }), " BANNED"]
                }), (0, eU.jsxs)("span", {
                  children: [null !== nU.banned && (0, eU.jsx)(DU.d, {
                    name: "with" === nU.banned ? "check" : "xmark"
                  }), " BANNED"]
                })]
              })
            })]
          })]
        }), (!NX || null !== DX) && (0, eU.jsx)("div", {
          className: "ShaderPackBrowseScenes",
          children: (0, eU.jsx)(SU.b, {
            selected: fU,
            onSelect: iU,
            imageUrl: UU => null === DX ? null : (0, oU.o)(BU.clientSideServerUrls.s3Url, DX, UU, "thumb")
          })
        }), (0, eU.jsx)(qU, {
          results: jU,
          loading: bU,
          failed: hU,
          onRetry: () => {
            zX((UU => UU + 1))
          },
          view: nU,
          previewView: fU
        }), "listing" === (null === jU || void 0 === jU ? void 0 : jU.kind) && (0, eU.jsx)(pU.c, {
          className: "ShaderPackBrowsePagination",
          page: jU.page.pageNumber,
          totalPages: jU.page.totalPages,
          onSetPage: UU => {
            sU((XU => {
              (0, YU.m)(XU, UU)
            }))
          },
          getPageHref: function(UU) {
            const XU = new URLSearchParams(VU);
            (0, YU.m)(XU, UU);
            const zU = XU.toString();
            return zU ? `${LU.pathname}?${zU}` : LU.pathname
          }
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);