export const id = 120;
export const ids = [120];
export const modules = {
  6542: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      default: () => ET
    });
    var lT = cT(71),
      MT = cT(1535),
      KT = cT(1046),
      OT = cT.n(KT),
      yT = cT(328),
      fT = cT(6550),
      xT = cT(1061),
      IT = cT(1530),
      AT = cT(4543),
      CT = cT(1470),
      jT = cT(3059),
      vT = cT(4545),
      tT = cT(1692),
      hT = cT(4537),
      NT = cT(1130),
      QT = cT(31),
      ST = cT(1518),
      DT = cT(1202),
      aT = cT(118),
      FT = cT(1195),
      rT = cT(1348),
      PT = cT(1226),
      wT = cT(6547),
      mT = cT(6555),
      bT = cT(1099);

    function zT(TT) {
      let {
        pack: kT,
        view: cT,
        favourite: lT,
        notice: MT
      } = TT;
      const {
        width: KT,
        height: yT
      } = fT.o.thumb, {
        live: AT
      } = kT;
      return (0, bT.jsx)("div", {
        className: "ShaderPackCard",
        children: (0, bT.jsxs)("div", {
          className: "ShaderPackCardTile",
          children: [(0, bT.jsxs)(IT.LinkPreserveSearch, {
            to: (0, wT.V)(kT.packId),
            className: "ShaderPackCardLink",
            children: [AT && (0, bT.jsx)("img", {
              className: "ShaderPackCardImage",
              src: (0, fT.q)(DT.clientSideServerUrls.s3Url, AT, cT, "thumb"),
              width: KT,
              height: yT,
              loading: "lazy",
              alt: "",
              draggable: !1
            }), AT && (0, bT.jsx)(mT.d, {
              item: AT
            }), !AT && (0, bT.jsx)("div", {
              className: "ShaderPackCardImage ShaderPackCardImagePending",
              children: (0, bT.jsx)(xT.e, {
                name: "hourglass"
              })
            }), (0, bT.jsxs)("div", {
              className: "ShaderPackCardText",
              children: [MT && (0, bT.jsx)("div", {
                className: OT()("ShaderPackCardNotice", {
                  Warning: "warning" === MT.tone
                }),
                children: MT.text
              }), (0, bT.jsx)("div", {
                className: "ShaderPackCardName SmallTextBold",
                children: kT.name
              })]
            })]
          }), AT && (0, bT.jsxs)("div", {
            className: "ShaderPackCardStats",
            children: [(0, bT.jsxs)("div", {
              className: "ShaderPackCardUses SmallTextBold",
              children: [(0, bT.jsx)(xT.e, {
                name: "download"
              }), (0, PT.P)(AT.downloads)]
            }), lT && (0, bT.jsx)(CT.s, {
              onClick: lT.onToggle,
              isLiked: !0 === lT.isFavourite,
              isLoading: null === lT.isFavourite
            })]
          })]
        })
      })
    }
    var JT = cT(6557);

    function oT(TT) {
      let {
        results: kT,
        loading: cT,
        failed: lT,
        onRetry: MT,
        view: KT,
        previewView: yT
      } = TT;
      const {
        t: fT
      } = (0, FT.B)(), xT = (0, JT.j)(), IT = Date.now(), AT = null === kT ? 0 : "owned" === kT.kind ? kT.packs.length : kT.page.results.length;
      return (0, bT.jsxs)("div", {
        className: OT()("ShaderPackBrowseResults", {
          Loading: cT && null !== kT
        }),
        children: [cT && null === kT && (0, bT.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: (0, bT.jsx)(rT.d, {})
        }), lT && (0, bT.jsxs)("div", {
          className: "ShaderPackBrowseMessage",
          children: [fT("shaderPackListing:loadFailed"), (0, bT.jsx)(CT.e, {
            onClick: MT,
            children: fT("general:tryAgain")
          })]
        }), "listing" === (null === kT || void 0 === kT ? void 0 : kT.kind) && AT > 0 && (0, bT.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: kT.page.results.map((TT => (0, bT.jsx)(zT, {
            pack: {
              packId: TT.packId,
              name: TT.name,
              live: TT
            },
            view: yT,
            favourite: {
              isFavourite: xT.isFavourite(TT.packId),
              onToggle: () => {
                xT.toggle(TT.packId)
              }
            }
          }, TT.packId)))
        }), "owned" === (null === kT || void 0 === kT ? void 0 : kT.kind) && AT > 0 && (0, bT.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: kT.packs.map((TT => {
            var kT;
            return (0, bT.jsx)(zT, {
              pack: TT,
              view: yT,
              notice: TT.owner ? (0, wT.R)(TT.owner, !(null === (kT = TT.live) || void 0 === kT || !kT.renderId), IT, fT)[0] : void 0
            }, TT.packId)
          }))
        }), null !== kT && 0 === AT && (0, bT.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: fT(HT(KT))
        })]
      })
    }

    function HT(TT) {
      return "mine" === TT.section ? "shaderPackListing:noOwnPacks" : (0, wT.t)(TT) ? "general:noResults" : "favourites" === TT.section ? "shaderPackListing:noFavourites" : "general:noResults"
    }
    var eT = cT(6567);
    const GT = 24,
      VT = {
        favourites: "general:favourites",
        mine: "shaderPackListing:mine"
      };

    function ET() {
      var TT, kT, cT, KT;
      const {
        t: rT
      } = (0, FT.B)(), PT = (0, IT.useNavigatePreserveSearch)(), mT = (0, MT.s)(), {
        userContext: zT,
        isUserContextUpdating: HT
      } = (0, NT.b)(), [ET, ZT] = (0, JT.g)(), [uT, XT] = (0, JT.f)(), dT = (0, lT.useRef)(!1), [LT, RT] = (0, AT.o)(), gT = (0, wT.z)(LT), [UT, YT] = (0, lT.useState)(null !== (TT = gT.searchQuery) && void 0 !== TT ? TT : ""), BT = (0, lT.useRef)(null), {
        searchQuery: WT
      } = gT;
      (0, lT.useEffect)((() => {
        YT(null !== WT && void 0 !== WT ? WT : ""), BT.current && (BT.current.value = null !== WT && void 0 !== WT ? WT : "")
      }), [WT]);
      const [nT, pT] = (0, lT.useState)(null), [iT, qT] = (0, lT.useState)(!1), [sT, Tk] = (0, lT.useState)(!1), [kk, ck] = (0, lT.useState)(0), lk = (0, lT.useRef)(0), Mk = JSON.stringify(gT), Kk = (0, wT.l)();

      function Ok() {
        null !== Kk ? (PT(Kk), QT.e.set({
          openEverythingMenuName: yT.o.SETTINGS,
          openSettingsCategory: "Bj"
        })) : PT("/")
      }

      function yk(TT) {
        RT((kT => {
          (0, wT.kb)(kT, {
            ...gT,
            pageNumber: 1,
            ...TT
          })
        }))
      }

      function fk() {
        const TT = UT.trim() || null;
        yk({
          searchQuery: TT,
          ...null !== TT && !dT.current && (0, wT.n)(gT) && {
            withFeatures: [],
            withoutFeatures: []
          }
        })
      }(0, hT.e)(Ok), (0, JT.d)(), (0, lT.useEffect)((() => {
        if (HT) return;
        const TT = ++lk.current,
          kT = JSON.parse(Mk);
        qT(!0), Tk(!1), async function(TT) {
          if ("mine" === TT.section) return {
            kind: "owned",
            packs: await ST.d.getOwnedShaderPacks(zT)
          };
          const kT = "favourites" === TT.section,
            cT = kT && (0, wT.n)(TT),
            lT = await ST.d.getShaderPacks(zT, {
              sort: kT ? wT.f : TT.sort,
              features: cT ? [] : TT.withFeatures,
              withoutFeatures: cT ? [] : TT.withoutFeatures,
              searchQuery: TT.searchQuery,
              pageNumber: TT.pageNumber,
              pageSize: GT,
              onlyFavourites: kT,
              banned: (0, wT.r)(zT) ? (0, wT.b)(TT.banned) : void 0
            });
          return {
            kind: "listing",
            page: lT
          }
        }(kT).then((kT => {
          lk.current === TT && pT(kT)
        })).catch((kT => {
          lk.current === TT && (console.error("Failed to get shader packs", kT), pT(null), Tk(!0))
        })).finally((() => {
          lk.current === TT && qT(!1)
        }))
      }), [Mk, zT, HT, kk]);
      const [xk, Ik] = (0, lT.useState)(null), Ak = null !== (cT = null === (KT = ("listing" === (null === nT || void 0 === nT ? void 0 : nT.kind) ? nT.page.results : (null !== (kT = null === nT || void 0 === nT ? void 0 : nT.packs) && void 0 !== kT ? kT : []).flatMap((TT => TT.live ? [TT.live] : [])))[0]) || void 0 === KT ? void 0 : KT.baselineVersion) && void 0 !== cT ? cT : null;
      (0, lT.useEffect)((() => {
        null !== Ak && Ik(Ak)
      }), [Ak]);
      const Ck = "mine" === gT.section,
        jk = (0, wT.r)(zT),
        vk = TT => {
          "explore" !== gT.section && (TT.stopPropagation(), TT.preventDefault(), yk({
            section: "explore"
          }))
        };
      return (0, bT.jsxs)("div", {
        className: "ShaderPackBrowse AnimFadeIn",
        children: [(0, bT.jsx)(CT.b, {
          onClick: Ok,
          children: rT(null === Kk ? "homePage:backToGames" : "shaderPackListing:backToSettings")
        }), (0, bT.jsxs)("div", {
          className: "ShaderPackBrowseHeader",
          children: [(0, bT.jsxs)("div", {
            className: "ShaderPackBrowseHeaderRow",
            children: [(0, bT.jsx)("h1", {
              className: "VisuallyHidden",
              children: rT("shaderPackListing:title")
            }), (0, bT.jsxs)("div", {
              className: "ShaderPackBrowseTabs",
              children: [(0, bT.jsx)("div", {
                className: OT()("ShaderPackBrowseSort", {
                  Active: "explore" === gT.section
                }),
                onMouseDownCapture: vk,
                onTouchEndCapture: vk,
                children: (0, bT.jsx)(jT.d, {
                  options: fT.r.map((TT => ({
                    value: TT,
                    label: rT(wT.ab[TT])
                  }))),
                  value: gT.sort,
                  onChange: TT => {
                    yk({
                      section: "explore",
                      sort: TT.value
                    })
                  }
                })
              }), Object.keys(VT).map((TT => (0, bT.jsx)(CT.P, {
                active: gT.section === TT,
                onClick: () => {
                  yk({
                    section: TT
                  })
                },
                children: rT(VT[TT])
              }, TT)))]
            }), !Ck && (0, bT.jsx)("div", {
              className: "ShaderPackBrowseDivider"
            }), !Ck && (0, bT.jsxs)("div", {
              className: "ShaderPackBrowseSearch",
              children: [(0, bT.jsx)("div", {
                className: "ShaderPackBrowseSearchIcon",
                children: (0, bT.jsx)(xT.e, {
                  name: "magnifying-glass"
                })
              }), (0, bT.jsx)(tT.b, {
                className: "ShaderPackBrowseSearchInput",
                placeholderText: rT("shaderPackListing:searchPlaceholder"),
                maxLength: fT.C,
                defaultValue: UT,
                domRef: BT,
                onValueChange: YT,
                onEnter: fk
              }), (0, bT.jsx)(CT.e, {
                onClick: fk,
                children: rT("general:search")
              })]
            }), !Ck && (0, bT.jsxs)(CT.P, {
              className: OT()("ShaderPackBrowseFilterToggle", {
                Open: uT
              }),
              pressed: uT,
              onClick: () => {
                XT(!uT)
              },
              children: [rT("shaderPackListing:filter"), " ", (0, bT.jsx)(xT.e, {
                name: uT ? "angle-up" : "angle-down"
              })]
            }), (0, bT.jsx)("div", {
              className: "ShaderPackBrowseSpace"
            }), aT.featureFlags.settings.canUseShaderPacks && (0, bT.jsxs)(CT.m, {
              onClick: () => {
                PT(wT.Y)
              },
              children: [(0, bT.jsx)(xT.e, {
                name: "upload"
              }), " ", rT("shaderPackListing:publish")]
            })]
          }), !Ck && uT && (0, bT.jsxs)("div", {
            className: "ShaderPackBrowseFeatures",
            children: [wT.w.map((TT => {
              const kT = (0, wT.j)(gT, TT),
                cT = rT(wT.G[TT]);
              return (0, bT.jsx)(CT.P, {
                className: OT()("ShaderPackBrowseFeature", {
                  Without: "without" === kT
                }),
                active: "with" === kT,
                pressed: null !== kT,
                onClick: () => {
                  dT.current = !0, yk((0, wT.hb)(gT, TT))
                },
                children: (0, bT.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureLabel",
                  children: [(0, bT.jsxs)("span", {
                    className: "ShaderPackBrowseFeatureReserve",
                    children: [(0, bT.jsx)(xT.e, {
                      name: "check"
                    }), " ", cT]
                  }), (0, bT.jsxs)("span", {
                    children: [null !== kT && (0, bT.jsx)(xT.e, {
                      name: "with" === kT ? "check" : "xmark"
                    }), " ", cT]
                  })]
                })
              }, TT)
            })), jk && (0, bT.jsx)(CT.P, {
              className: OT()("ShaderPackBrowseFeature", {
                Without: "without" === gT.banned
              }),
              active: "with" === gT.banned,
              pressed: null !== gT.banned,
              onClick: () => {
                const TT = "without" === gT.banned && !dT.current && (0, wT.n)(gT);
                yk({
                  banned: (0, wT.y)(gT.banned),
                  ...TT && {
                    withFeatures: [],
                    withoutFeatures: []
                  }
                })
              },
              children: (0, bT.jsxs)("span", {
                className: "ShaderPackBrowseFeatureLabel",
                children: [(0, bT.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureReserve",
                  children: [(0, bT.jsx)(xT.e, {
                    name: "check"
                  }), " BANNED"]
                }), (0, bT.jsxs)("span", {
                  children: [null !== gT.banned && (0, bT.jsx)(xT.e, {
                    name: "with" === gT.banned ? "check" : "xmark"
                  }), " BANNED"]
                })]
              })
            })]
          })]
        }), (!Ck || null !== xk) && (0, bT.jsx)("div", {
          className: "ShaderPackBrowseScenes",
          children: (0, bT.jsx)(eT.e, {
            selected: ET,
            onSelect: ZT,
            imageUrl: TT => null === xk ? null : (0, fT.i)(DT.clientSideServerUrls.s3Url, xk, TT, "thumb")
          })
        }), (0, bT.jsx)(oT, {
          results: nT,
          loading: iT,
          failed: sT,
          onRetry: () => {
            ck((TT => TT + 1))
          },
          view: gT,
          previewView: ET
        }), "listing" === (null === nT || void 0 === nT ? void 0 : nT.kind) && (0, bT.jsx)(vT.b, {
          className: "ShaderPackBrowsePagination",
          page: nT.page.pageNumber,
          totalPages: nT.page.totalPages,
          onSetPage: TT => {
            RT((kT => {
              (0, AT.k)(kT, TT)
            }))
          },
          getPageHref: function(TT) {
            const kT = new URLSearchParams(LT);
            (0, AT.k)(kT, TT);
            const cT = kT.toString();
            return cT ? `${mT.pathname}?${cT}` : mT.pathname
          }
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);