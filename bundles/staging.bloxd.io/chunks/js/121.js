export const id = 121;
export const ids = [121];
export const modules = {
  6099: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      default: () => hY
    });
    var FY = DY(61),
      AY = DY(1501),
      IY = DY(1092),
      RY = DY.n(IY),
      OY = DY(332),
      gY = DY(6112),
      aY = DY(1098),
      vY = DY(1488),
      uY = DY(4122),
      sY = DY(1437),
      iY = DY(2722),
      yY = DY(4129),
      QY = DY(1654),
      oY = DY(4113),
      WY = DY(1152),
      EY = DY(19),
      mY = DY(1471),
      VY = DY(1222),
      SY = DY(99),
      lY = DY(1211),
      TY = DY(1337),
      eY = DY(1231),
      NY = DY(6108),
      BY = DY(6118),
      cY = DY(1125);

    function KY(YY) {
      let {
        pack: rY,
        view: DY,
        favourite: FY,
        notice: AY
      } = YY;
      const {
        width: IY,
        height: OY
      } = gY.u.thumb, {
        live: uY
      } = rY;
      return (0, cY.jsx)("div", {
        className: "ShaderPackCard",
        children: (0, cY.jsxs)("div", {
          className: "ShaderPackCardTile",
          children: [(0, cY.jsxs)(vY.LinkPreserveSearch, {
            to: (0, NY.Y)(rY.packId),
            className: "ShaderPackCardLink",
            children: [uY && (0, cY.jsx)("img", {
              className: "ShaderPackCardImage",
              src: (0, gY.x)(VY.clientSideServerUrls.s3Url, uY, DY, "thumb"),
              width: IY,
              height: OY,
              loading: "lazy",
              alt: "",
              draggable: !1
            }), uY && (0, cY.jsx)(BY.c, {
              item: uY
            }), !uY && (0, cY.jsx)("div", {
              className: "ShaderPackCardImage ShaderPackCardImagePending",
              children: (0, cY.jsx)(aY.e, {
                name: "hourglass"
              })
            }), (0, cY.jsxs)("div", {
              className: "ShaderPackCardText",
              children: [AY && (0, cY.jsx)("div", {
                className: RY()("ShaderPackCardNotice", {
                  Warning: "warning" === AY.tone
                }),
                children: AY.text
              }), (0, cY.jsx)("div", {
                className: "ShaderPackCardName SmallTextBold",
                children: rY.name
              })]
            })]
          }), uY && (0, cY.jsxs)("div", {
            className: "ShaderPackCardStats",
            children: [(0, cY.jsxs)("div", {
              className: "ShaderPackCardUses SmallTextBold",
              children: [(0, cY.jsx)(aY.e, {
                name: "download"
              }), (0, eY.S)(uY.downloads)]
            }), FY && (0, cY.jsx)(sY.q, {
              onClick: FY.onToggle,
              isLiked: !0 === FY.isFavourite,
              isLoading: null === FY.isFavourite
            })]
          })]
        })
      })
    }
    var HY = DY(6123);

    function zY(YY) {
      let {
        results: rY,
        loading: DY,
        failed: FY,
        onRetry: AY,
        view: IY,
        previewView: OY
      } = YY;
      const {
        t: gY
      } = (0, lY.C)(), aY = (0, HY.h)(), vY = Date.now(), uY = null === rY ? 0 : "owned" === rY.kind ? rY.packs.length : rY.page.results.length;
      return (0, cY.jsxs)("div", {
        className: RY()("ShaderPackBrowseResults", {
          Loading: DY && null !== rY
        }),
        children: [DY && null === rY && (0, cY.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: (0, cY.jsx)(TY.c, {})
        }), FY && (0, cY.jsxs)("div", {
          className: "ShaderPackBrowseMessage",
          children: [gY("shaderPackListing:loadFailed"), (0, cY.jsx)(sY.f, {
            onClick: AY,
            children: gY("general:tryAgain")
          })]
        }), "listing" === (null === rY || void 0 === rY ? void 0 : rY.kind) && uY > 0 && (0, cY.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: rY.page.results.map((YY => (0, cY.jsx)(KY, {
            pack: {
              packId: YY.packId,
              name: YY.name,
              live: YY
            },
            view: OY,
            favourite: {
              isFavourite: aY.isFavourite(YY.packId),
              onToggle: () => {
                aY.toggle(YY.packId)
              }
            }
          }, YY.packId)))
        }), "owned" === (null === rY || void 0 === rY ? void 0 : rY.kind) && uY > 0 && (0, cY.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: rY.packs.map((YY => {
            var rY;
            return (0, cY.jsx)(KY, {
              pack: YY,
              view: OY,
              notice: YY.owner ? (0, NY.V)(YY.owner, !(null === (rY = YY.live) || void 0 === rY || !rY.renderId), vY, gY)[0] : void 0
            }, YY.packId)
          }))
        }), null !== rY && 0 === uY && (0, cY.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: gY(ZY(IY))
        })]
      })
    }

    function ZY(YY) {
      return "mine" === YY.section ? "shaderPackListing:noOwnPacks" : (0, NY.u)(YY) ? "general:noResults" : "favourites" === YY.section ? "shaderPackListing:noFavourites" : "general:noResults"
    }
    var CY = DY(6136);
    const fY = 24,
      jY = {
        favourites: "general:favourites",
        mine: "shaderPackListing:mine"
      };

    function hY() {
      var YY, rY, DY, IY;
      const {
        t: TY
      } = (0, lY.C)(), eY = (0, vY.useNavigatePreserveSearch)(), BY = (0, AY.u)(), {
        userContext: KY,
        isUserContextUpdating: ZY
      } = (0, WY.d)(), [hY, dY] = (0, HY.f)(), [JY, MY] = (0, HY.e)(), wY = (0, FY.useRef)(!1), [bY, XY] = (0, uY.o)(), qY = (0, NY.C)(bY), [pY, kY] = (0, FY.useState)(null !== (YY = qY.searchQuery) && void 0 !== YY ? YY : ""), GY = (0, FY.useRef)(null), {
        searchQuery: xY
      } = qY;
      (0, FY.useEffect)((() => {
        kY(null !== xY && void 0 !== xY ? xY : ""), GY.current && (GY.current.value = null !== xY && void 0 !== xY ? xY : "")
      }), [xY]);
      const [nY, PY] = (0, FY.useState)(null), [UY, LY] = (0, FY.useState)(!1), [tY, Yr] = (0, FY.useState)(!1), [rr, Dr] = (0, FY.useState)(0), Fr = (0, FY.useRef)(0), Ar = JSON.stringify(qY), Ir = (0, NY.o)();

      function Rr() {
        null !== Ir ? (eY(Ir), EY.b.set({
          openEverythingMenuName: OY.t.SETTINGS,
          openSettingsCategory: "vy"
        })) : eY("/")
      }

      function Or(YY) {
        XY((rY => {
          (0, NY.jb)(rY, {
            ...qY,
            pageNumber: 1,
            ...YY
          })
        }))
      }

      function gr() {
        const YY = pY.trim() || null;
        Or({
          searchQuery: YY,
          ...null !== YY && !wY.current && (0, NY.q)(qY) && {
            withFeatures: [],
            withoutFeatures: []
          }
        })
      }(0, oY.d)(Rr), (0, HY.d)(), (0, FY.useEffect)((() => {
        if (ZY) return;
        const YY = ++Fr.current,
          rY = JSON.parse(Ar);
        LY(!0), Yr(!1), async function(YY) {
          if ("mine" === YY.section) return {
            kind: "owned",
            packs: await mY.e.getOwnedShaderPacks(KY)
          };
          const rY = "favourites" === YY.section,
            DY = rY && (0, NY.q)(YY),
            FY = await mY.e.getShaderPacks(KY, {
              sort: rY ? NY.h : YY.sort,
              features: DY ? [] : YY.withFeatures,
              withoutFeatures: DY ? [] : YY.withoutFeatures,
              searchQuery: YY.searchQuery,
              pageNumber: YY.pageNumber,
              pageSize: fY,
              onlyFavourites: rY,
              banned: (0, NY.s)(KY) ? (0, NY.e)(YY.banned) : void 0
            });
          return {
            kind: "listing",
            page: FY
          }
        }(rY).then((rY => {
          Fr.current === YY && PY(rY)
        })).catch((rY => {
          Fr.current === YY && (console.error("Failed to get shader packs", rY), PY(null), Yr(!0))
        })).finally((() => {
          Fr.current === YY && LY(!1)
        }))
      }), [Ar, KY, ZY, rr]);
      const [ar, vr] = (0, FY.useState)(null), ur = null !== (DY = null === (IY = ("listing" === (null === nY || void 0 === nY ? void 0 : nY.kind) ? nY.page.results : (null !== (rY = null === nY || void 0 === nY ? void 0 : nY.packs) && void 0 !== rY ? rY : []).flatMap((YY => YY.live ? [YY.live] : [])))[0]) || void 0 === IY ? void 0 : IY.baselineVersion) && void 0 !== DY ? DY : null;
      (0, FY.useEffect)((() => {
        null !== ur && vr(ur)
      }), [ur]);
      const sr = "mine" === qY.section,
        ir = (0, NY.s)(KY),
        yr = YY => {
          "explore" !== qY.section && (YY.stopPropagation(), YY.preventDefault(), Or({
            section: "explore"
          }))
        };
      return (0, cY.jsxs)("div", {
        className: "ShaderPackBrowse AnimFadeIn",
        children: [(0, cY.jsx)(sY.b, {
          onClick: Rr,
          children: TY(null === Ir ? "homePage:backToGames" : "shaderPackListing:backToSettings")
        }), (0, cY.jsxs)("div", {
          className: "ShaderPackBrowseHeader",
          children: [(0, cY.jsxs)("div", {
            className: "ShaderPackBrowseHeaderRow",
            children: [(0, cY.jsx)("h1", {
              className: "VisuallyHidden",
              children: TY("shaderPackListing:title")
            }), (0, cY.jsxs)("div", {
              className: "ShaderPackBrowseTabs",
              children: [(0, cY.jsx)("div", {
                className: RY()("ShaderPackBrowseSort", {
                  Active: "explore" === qY.section
                }),
                onMouseDownCapture: yr,
                onTouchEndCapture: yr,
                children: (0, cY.jsx)(iY.b, {
                  options: gY.A.map((YY => ({
                    value: YY,
                    label: TY(NY.bb[YY])
                  }))),
                  value: qY.sort,
                  onChange: YY => {
                    Or({
                      section: "explore",
                      sort: YY.value
                    })
                  }
                })
              }), Object.keys(jY).map((YY => (0, cY.jsx)(sY.J, {
                active: qY.section === YY,
                onClick: () => {
                  Or({
                    section: YY
                  })
                },
                children: TY(jY[YY])
              }, YY)))]
            }), !sr && (0, cY.jsx)("div", {
              className: "ShaderPackBrowseDivider"
            }), !sr && (0, cY.jsxs)("div", {
              className: "ShaderPackBrowseSearch",
              children: [(0, cY.jsx)("div", {
                className: "ShaderPackBrowseSearchIcon",
                children: (0, cY.jsx)(aY.e, {
                  name: "magnifying-glass"
                })
              }), (0, cY.jsx)(QY.d, {
                className: "ShaderPackBrowseSearchInput",
                placeholderText: TY("shaderPackListing:searchPlaceholder"),
                maxLength: gY.L,
                defaultValue: pY,
                domRef: GY,
                onValueChange: kY,
                onEnter: gr
              }), (0, cY.jsx)(sY.f, {
                onClick: gr,
                children: TY("general:search")
              })]
            }), !sr && (0, cY.jsxs)(sY.J, {
              className: RY()("ShaderPackBrowseFilterToggle", {
                Open: JY
              }),
              pressed: JY,
              onClick: () => {
                MY(!JY)
              },
              children: [TY("shaderPackListing:filter"), " ", (0, cY.jsx)(aY.e, {
                name: JY ? "angle-up" : "angle-down"
              })]
            }), (0, cY.jsx)("div", {
              className: "ShaderPackBrowseSpace"
            }), SY.featureFlags.settings.canUseShaderPacks && (0, cY.jsxs)(sY.n, {
              onClick: () => {
                eY(NY.ab)
              },
              children: [(0, cY.jsx)(aY.e, {
                name: "upload"
              }), " ", TY("shaderPackListing:publish")]
            })]
          }), !sr && JY && (0, cY.jsxs)("div", {
            className: "ShaderPackBrowseFeatures",
            children: [NY.z.map((YY => {
              const rY = (0, NY.j)(qY, YY),
                DY = TY(NY.J[YY]);
              return (0, cY.jsx)(sY.J, {
                className: RY()("ShaderPackBrowseFeature", {
                  Without: "without" === rY
                }),
                active: "with" === rY,
                pressed: null !== rY,
                onClick: () => {
                  wY.current = !0, Or((0, NY.fb)(qY, YY))
                },
                children: (0, cY.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureLabel",
                  children: [(0, cY.jsxs)("span", {
                    className: "ShaderPackBrowseFeatureReserve",
                    children: [(0, cY.jsx)(aY.e, {
                      name: "check"
                    }), " ", DY]
                  }), (0, cY.jsxs)("span", {
                    children: [null !== rY && (0, cY.jsx)(aY.e, {
                      name: "with" === rY ? "check" : "xmark"
                    }), " ", DY]
                  })]
                })
              }, YY)
            })), ir && (0, cY.jsx)(sY.J, {
              className: RY()("ShaderPackBrowseFeature", {
                Without: "without" === qY.banned
              }),
              active: "with" === qY.banned,
              pressed: null !== qY.banned,
              onClick: () => {
                const YY = "without" === qY.banned && !wY.current && (0, NY.q)(qY);
                Or({
                  banned: (0, NY.B)(qY.banned),
                  ...YY && {
                    withFeatures: [],
                    withoutFeatures: []
                  }
                })
              },
              children: (0, cY.jsxs)("span", {
                className: "ShaderPackBrowseFeatureLabel",
                children: [(0, cY.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureReserve",
                  children: [(0, cY.jsx)(aY.e, {
                    name: "check"
                  }), " BANNED"]
                }), (0, cY.jsxs)("span", {
                  children: [null !== qY.banned && (0, cY.jsx)(aY.e, {
                    name: "with" === qY.banned ? "check" : "xmark"
                  }), " BANNED"]
                })]
              })
            })]
          })]
        }), (!sr || null !== ar) && (0, cY.jsx)("div", {
          className: "ShaderPackBrowseScenes",
          children: (0, cY.jsx)(CY.d, {
            selected: hY,
            onSelect: dY,
            imageUrl: YY => null === ar ? null : (0, gY.q)(VY.clientSideServerUrls.s3Url, ar, YY, "thumb")
          })
        }), (0, cY.jsx)(zY, {
          results: nY,
          loading: UY,
          failed: tY,
          onRetry: () => {
            Dr((YY => YY + 1))
          },
          view: qY,
          previewView: hY
        }), "listing" === (null === nY || void 0 === nY ? void 0 : nY.kind) && (0, cY.jsx)(yY.d, {
          className: "ShaderPackBrowsePagination",
          page: nY.page.pageNumber,
          totalPages: nY.page.totalPages,
          onSetPage: YY => {
            XY((rY => {
              (0, uY.n)(rY, YY)
            }))
          },
          getPageHref: function(YY) {
            const rY = new URLSearchParams(bY);
            (0, uY.n)(rY, YY);
            const DY = rY.toString();
            return DY ? `${BY.pathname}?${DY}` : BY.pathname
          }
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);