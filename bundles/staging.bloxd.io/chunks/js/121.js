export const id = 121;
export const ids = [121];
export const modules = {
  6039: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      default: () => QT
    });
    var iT = IT(46),
      zT = IT(1484),
      kT = IT(1042),
      WT = IT.n(kT),
      XT = IT(306),
      BT = IT(6045),
      FT = IT(1055),
      ST = IT(1468),
      DT = IT(4074),
      LT = IT(1408),
      xT = IT(2695),
      cT = IT(4079),
      KT = IT(1624),
      MT = IT(4068),
      rT = IT(1110),
      AT = IT(12),
      gT = IT(1451),
      hT = IT(1183),
      wT = IT(90),
      mT = IT(1171),
      eT = IT(1310),
      RT = IT(1193),
      uT = IT(6042),
      vT = IT(6052),
      ET = IT(1083);

    function fT(TT) {
      let {
        pack: oT,
        view: IT,
        favourite: iT,
        notice: zT
      } = TT;
      const {
        width: kT,
        height: XT
      } = BT.v.thumb, {
        live: DT
      } = oT;
      return (0, ET.jsx)("div", {
        className: "ShaderPackCard",
        children: (0, ET.jsxs)("div", {
          className: "ShaderPackCardTile",
          children: [(0, ET.jsxs)(ST.LinkPreserveSearch, {
            to: (0, uT.ab)(oT.packId),
            className: "ShaderPackCardLink",
            children: [DT && (0, ET.jsx)("img", {
              className: "ShaderPackCardImage",
              src: (0, BT.y)(hT.clientSideServerUrls.s3Url, DT, IT, "thumb"),
              width: kT,
              height: XT,
              loading: "lazy",
              alt: "",
              draggable: !1
            }), DT && (0, ET.jsx)(vT.c, {
              item: DT
            }), !DT && (0, ET.jsx)("div", {
              className: "ShaderPackCardImage ShaderPackCardImagePending",
              children: (0, ET.jsx)(FT.e, {
                name: "hourglass"
              })
            }), (0, ET.jsxs)("div", {
              className: "ShaderPackCardText",
              children: [zT && (0, ET.jsx)("div", {
                className: WT()("ShaderPackCardNotice", {
                  Warning: "warning" === zT.tone
                }),
                children: zT.text
              }), (0, ET.jsx)("div", {
                className: "ShaderPackCardName SmallTextBold",
                children: oT.name
              })]
            })]
          }), DT && (0, ET.jsxs)("div", {
            className: "ShaderPackCardStats",
            children: [(0, ET.jsxs)("div", {
              className: "ShaderPackCardUses SmallTextBold",
              children: [(0, ET.jsx)(FT.e, {
                name: "download"
              }), (0, RT.S)(DT.downloads)]
            }), iT && (0, ET.jsx)(LT.t, {
              onClick: iT.onToggle,
              isLiked: !0 === iT.isFavourite,
              isLoading: null === iT.isFavourite
            })]
          })]
        })
      })
    }
    var CT = IT(6059);

    function jT(TT) {
      let {
        results: oT,
        loading: IT,
        failed: iT,
        onRetry: zT,
        view: kT,
        previewView: XT
      } = TT;
      const {
        t: BT
      } = (0, mT.t)(), FT = (0, CT.i)(), ST = Date.now(), DT = null === oT ? 0 : "owned" === oT.kind ? oT.packs.length : oT.page.results.length;
      return (0, ET.jsxs)("div", {
        className: WT()("ShaderPackBrowseResults", {
          Loading: IT && null !== oT
        }),
        children: [IT && null === oT && (0, ET.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: (0, ET.jsx)(eT.d, {})
        }), iT && (0, ET.jsxs)("div", {
          className: "ShaderPackBrowseMessage",
          children: [BT("shaderPackListing:loadFailed"), (0, ET.jsx)(LT.e, {
            onClick: zT,
            children: BT("general:tryAgain")
          })]
        }), "listing" === (null === oT || void 0 === oT ? void 0 : oT.kind) && DT > 0 && (0, ET.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: oT.page.results.map((TT => (0, ET.jsx)(fT, {
            pack: {
              packId: TT.packId,
              name: TT.name,
              live: TT
            },
            view: XT,
            favourite: {
              isFavourite: FT.isFavourite(TT.packId),
              onToggle: () => {
                FT.toggle(TT.packId)
              }
            }
          }, TT.packId)))
        }), "owned" === (null === oT || void 0 === oT ? void 0 : oT.kind) && DT > 0 && (0, ET.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: oT.packs.map((TT => {
            var oT;
            return (0, ET.jsx)(fT, {
              pack: TT,
              view: XT,
              notice: TT.owner ? (0, uT.Y)(TT.owner, !(null === (oT = TT.live) || void 0 === oT || !oT.renderId), ST, BT)[0] : void 0
            }, TT.packId)
          }))
        }), null !== oT && 0 === DT && (0, ET.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: BT(JT(kT))
        })]
      })
    }

    function JT(TT) {
      return "mine" === TT.section ? "shaderPackListing:noOwnPacks" : (0, uT.x)(TT) ? "general:noResults" : "favourites" === TT.section ? "shaderPackListing:noFavourites" : "general:noResults"
    }
    var UT = IT(6069);
    const aT = 24,
      YT = {
        favourites: "general:favourites",
        mine: "shaderPackListing:mine"
      };

    function QT() {
      var TT, oT, IT, kT;
      const {
        t: eT
      } = (0, mT.t)(), RT = (0, ST.useNavigatePreserveSearch)(), vT = (0, zT.t)(), {
        userContext: fT,
        isUserContextUpdating: JT
      } = (0, rT.b)(), [QT, OT] = (0, CT.g)(), [HT, nT] = (0, CT.e)(), qT = (0, iT.useRef)(!1), [ZT, lT] = (0, DT.o)(), sT = (0, uT.I)(ZT), [tT, GT] = (0, iT.useState)(null !== (TT = sT.searchQuery) && void 0 !== TT ? TT : ""), pT = (0, iT.useRef)(null), {
        searchQuery: bT
      } = sT;
      (0, iT.useEffect)((() => {
        GT(null !== bT && void 0 !== bT ? bT : ""), pT.current && (pT.current.value = null !== bT && void 0 !== bT ? bT : "")
      }), [bT]);
      const [yT, NT] = (0, iT.useState)(null), [PT, dT] = (0, iT.useState)(!1), [VT, To] = (0, iT.useState)(!1), [oo, Io] = (0, iT.useState)(0), io = (0, iT.useRef)(0), zo = JSON.stringify(sT), ko = (0, uT.p)();

      function Wo() {
        null !== ko ? (RT(ko), AT.c.set({
          openEverythingMenuName: XT.q.SETTINGS,
          openSettingsCategory: "Fc"
        })) : RT("/")
      }

      function Xo(TT) {
        lT((oT => {
          (0, uT.mb)(oT, {
            ...sT,
            pageNumber: 1,
            ...TT
          })
        }))
      }

      function Bo() {
        const TT = tT.trim() || null;
        Xo({
          searchQuery: TT,
          ...null !== TT && !qT.current && (0, uT.t)(sT) && {
            withFeatures: [],
            withoutFeatures: []
          }
        })
      }(0, MT.e)(Wo), (0, CT.b)(), (0, iT.useEffect)((() => {
        if (JT) return;
        const TT = ++io.current,
          oT = JSON.parse(zo);
        dT(!0), To(!1), async function(TT) {
          if ("mine" === TT.section) return {
            kind: "owned",
            packs: await gT.e.getOwnedShaderPacks(fT)
          };
          const oT = "favourites" === TT.section,
            IT = oT && (0, uT.t)(TT),
            iT = await gT.e.getShaderPacks(fT, {
              sort: oT ? uT.f : TT.sort,
              features: IT ? [] : TT.withFeatures,
              withoutFeatures: IT ? [] : TT.withoutFeatures,
              searchQuery: TT.searchQuery,
              pageNumber: TT.pageNumber,
              pageSize: aT,
              onlyFavourites: oT,
              banned: (0, uT.u)(fT) ? (0, uT.d)(TT.banned) : void 0
            });
          return {
            kind: "listing",
            page: iT
          }
        }(oT).then((oT => {
          io.current === TT && NT(oT)
        })).catch((oT => {
          io.current === TT && (console.error("Failed to get shader packs", oT), NT(null), To(!0))
        })).finally((() => {
          io.current === TT && dT(!1)
        }))
      }), [zo, fT, JT, oo]);
      const [Fo, So] = (0, iT.useState)(null), Do = null !== (IT = null === (kT = ("listing" === (null === yT || void 0 === yT ? void 0 : yT.kind) ? yT.page.results : (null !== (oT = null === yT || void 0 === yT ? void 0 : yT.packs) && void 0 !== oT ? oT : []).flatMap((TT => TT.live ? [TT.live] : [])))[0]) || void 0 === kT ? void 0 : kT.baselineVersion) && void 0 !== IT ? IT : null;
      (0, iT.useEffect)((() => {
        null !== Do && So(Do)
      }), [Do]);
      const Lo = "mine" === sT.section,
        xo = (0, uT.u)(fT),
        co = TT => {
          "explore" !== sT.section && (TT.stopPropagation(), TT.preventDefault(), Xo({
            section: "explore"
          }))
        };
      return (0, ET.jsxs)("div", {
        className: "ShaderPackBrowse AnimFadeIn",
        children: [(0, ET.jsx)(LT.c, {
          onClick: Wo,
          children: eT(null === ko ? "homePage:backToGames" : "shaderPackListing:backToSettings")
        }), (0, ET.jsxs)("div", {
          className: "ShaderPackBrowseHeader",
          children: [(0, ET.jsxs)("div", {
            className: "ShaderPackBrowseHeaderRow",
            children: [(0, ET.jsx)("h1", {
              className: "VisuallyHidden",
              children: eT("shaderPackListing:title")
            }), (0, ET.jsxs)("div", {
              className: "ShaderPackBrowseTabs",
              children: [(0, ET.jsx)("div", {
                className: WT()("ShaderPackBrowseSort", {
                  Active: "explore" === sT.section
                }),
                onMouseDownCapture: co,
                onTouchEndCapture: co,
                children: (0, ET.jsx)(xT.d, {
                  options: BT.A.map((TT => ({
                    value: TT,
                    label: eT(uT.fb[TT])
                  }))),
                  value: sT.sort,
                  onChange: TT => {
                    Xo({
                      section: "explore",
                      sort: TT.value
                    })
                  }
                })
              }), Object.keys(YT).map((TT => (0, ET.jsx)(LT.J, {
                active: sT.section === TT,
                onClick: () => {
                  Xo({
                    section: TT
                  })
                },
                children: eT(YT[TT])
              }, TT)))]
            }), !Lo && (0, ET.jsx)("div", {
              className: "ShaderPackBrowseDivider"
            }), !Lo && (0, ET.jsxs)("div", {
              className: "ShaderPackBrowseSearch",
              children: [(0, ET.jsx)("div", {
                className: "ShaderPackBrowseSearchIcon",
                children: (0, ET.jsx)(FT.e, {
                  name: "magnifying-glass"
                })
              }), (0, ET.jsx)(KT.e, {
                className: "ShaderPackBrowseSearchInput",
                placeholderText: eT("shaderPackListing:searchPlaceholder"),
                maxLength: BT.Q,
                defaultValue: tT,
                domRef: pT,
                onValueChange: GT,
                onEnter: Bo
              }), (0, ET.jsx)(LT.e, {
                onClick: Bo,
                children: eT("general:search")
              })]
            }), !Lo && (0, ET.jsxs)(LT.J, {
              className: WT()("ShaderPackBrowseFilterToggle", {
                Open: HT
              }),
              pressed: HT,
              onClick: () => {
                nT(!HT)
              },
              children: [eT("shaderPackListing:filter"), " ", (0, ET.jsx)(FT.e, {
                name: HT ? "angle-up" : "angle-down"
              })]
            }), (0, ET.jsx)("div", {
              className: "ShaderPackBrowseSpace"
            }), wT.featureFlags.settings.canUseShaderPacks && (0, ET.jsxs)(LT.m, {
              onClick: () => {
                RT(uT.db)
              },
              children: [(0, ET.jsx)(FT.e, {
                name: "upload"
              }), " ", eT("shaderPackListing:publish")]
            })]
          }), !Lo && HT && (0, ET.jsxs)("div", {
            className: "ShaderPackBrowseFeatures",
            children: [uT.D.map((TT => {
              const oT = (0, uT.i)(sT, TT),
                IT = eT(uT.N[TT]);
              return (0, ET.jsx)(LT.J, {
                className: WT()("ShaderPackBrowseFeature", {
                  Without: "without" === oT
                }),
                active: "with" === oT,
                pressed: null !== oT,
                onClick: () => {
                  qT.current = !0, Xo((0, uT.kb)(sT, TT))
                },
                children: (0, ET.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureLabel",
                  children: [(0, ET.jsxs)("span", {
                    className: "ShaderPackBrowseFeatureReserve",
                    children: [(0, ET.jsx)(FT.e, {
                      name: "check"
                    }), " ", IT]
                  }), (0, ET.jsxs)("span", {
                    children: [null !== oT && (0, ET.jsx)(FT.e, {
                      name: "with" === oT ? "check" : "xmark"
                    }), " ", IT]
                  })]
                })
              }, TT)
            })), xo && (0, ET.jsx)(LT.J, {
              className: WT()("ShaderPackBrowseFeature", {
                Without: "without" === sT.banned
              }),
              active: "with" === sT.banned,
              pressed: null !== sT.banned,
              onClick: () => {
                const TT = "without" === sT.banned && !qT.current && (0, uT.t)(sT);
                Xo({
                  banned: (0, uT.G)(sT.banned),
                  ...TT && {
                    withFeatures: [],
                    withoutFeatures: []
                  }
                })
              },
              children: (0, ET.jsxs)("span", {
                className: "ShaderPackBrowseFeatureLabel",
                children: [(0, ET.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureReserve",
                  children: [(0, ET.jsx)(FT.e, {
                    name: "check"
                  }), " BANNED"]
                }), (0, ET.jsxs)("span", {
                  children: [null !== sT.banned && (0, ET.jsx)(FT.e, {
                    name: "with" === sT.banned ? "check" : "xmark"
                  }), " BANNED"]
                })]
              })
            })]
          })]
        }), (!Lo || null !== Fo) && (0, ET.jsx)("div", {
          className: "ShaderPackBrowseScenes",
          children: (0, ET.jsx)(UT.d, {
            selected: QT,
            onSelect: OT,
            imageUrl: TT => null === Fo ? null : (0, BT.o)(hT.clientSideServerUrls.s3Url, Fo, TT, "thumb")
          })
        }), (0, ET.jsx)(jT, {
          results: yT,
          loading: PT,
          failed: VT,
          onRetry: () => {
            Io((TT => TT + 1))
          },
          view: sT,
          previewView: QT
        }), "listing" === (null === yT || void 0 === yT ? void 0 : yT.kind) && (0, ET.jsx)(cT.c, {
          className: "ShaderPackBrowsePagination",
          page: yT.page.pageNumber,
          totalPages: yT.page.totalPages,
          onSetPage: TT => {
            lT((oT => {
              (0, DT.n)(oT, TT)
            }))
          },
          getPageHref: function(TT) {
            const oT = new URLSearchParams(ZT);
            (0, DT.n)(oT, TT);
            const IT = oT.toString();
            return IT ? `${vT.pathname}?${IT}` : vT.pathname
          }
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);