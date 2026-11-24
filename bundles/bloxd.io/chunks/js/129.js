export const id = 129;
export const ids = [129];
export const modules = {
  6615: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      default: () => sT
    });
    var WT = mT(63),
      zT = mT(1641),
      MT = mT(1126),
      gT = mT.n(MT),
      nT = mT(351),
      HT = mT(6630),
      kT = mT(1135),
      jT = mT(1633),
      lT = mT(4660),
      LT = mT(1569),
      pT = mT(3267),
      BT = mT(4667),
      ZT = mT(1792),
      cT = mT(4655),
      vT = mT(1225),
      fT = mT(25),
      qT = mT(1613),
      iT = mT(1302),
      bT = mT(102),
      OT = mT(1288),
      eT = mT(1446),
      YT = mT(1321),
      JT = mT(6623),
      xT = mT(6633),
      dT = mT(1188);

    function wT(TT) {
      let {
        pack: UT,
        view: mT,
        favourite: WT,
        notice: zT
      } = TT;
      const {
        width: MT,
        height: nT
      } = HT.t.thumb, {
        live: lT
      } = UT;
      return (0, dT.jsx)("div", {
        className: "ShaderPackCard",
        children: (0, dT.jsxs)("div", {
          className: "ShaderPackCardTile",
          children: [(0, dT.jsxs)(jT.LinkPreserveSearch, {
            to: (0, JT.N)(UT.packId),
            className: "ShaderPackCardLink",
            children: [lT && (0, dT.jsx)("img", {
              className: "ShaderPackCardImage",
              src: (0, HT.x)(iT.clientSideServerUrls.s3Url, lT, mT, "thumb"),
              width: MT,
              height: nT,
              loading: "lazy",
              alt: "",
              draggable: !1
            }), lT && (0, dT.jsx)(xT.e, {
              item: lT
            }), !lT && (0, dT.jsx)("div", {
              className: "ShaderPackCardImage ShaderPackCardImagePending",
              children: (0, dT.jsx)(kT.c, {
                name: "hourglass"
              })
            }), (0, dT.jsxs)("div", {
              className: "ShaderPackCardText",
              children: [zT && (0, dT.jsx)("div", {
                className: gT()("ShaderPackCardNotice", {
                  Warning: "warning" === zT.tone
                }),
                children: zT.text
              }), (0, dT.jsx)("div", {
                className: "ShaderPackCardName SmallTextBold",
                children: UT.name
              })]
            })]
          }), lT && (0, dT.jsxs)("div", {
            className: "ShaderPackCardStats",
            children: [(0, dT.jsxs)("div", {
              className: "ShaderPackCardUses SmallTextBold",
              children: [(0, dT.jsx)(kT.c, {
                name: "download"
              }), (0, YT.V)(lT.downloads)]
            }), WT && (0, dT.jsx)(LT.t, {
              onClick: WT.onToggle,
              isLiked: !0 === WT.isFavourite,
              isLoading: null === WT.isFavourite
            })]
          })]
        })
      })
    }
    var tT = mT(6641);

    function aT(TT) {
      let {
        results: UT,
        loading: mT,
        failed: WT,
        onRetry: zT,
        view: MT,
        previewView: nT
      } = TT;
      const {
        t: HT
      } = (0, OT.z)(), kT = (0, tT.m)(), jT = Date.now(), lT = null === UT ? 0 : "owned" === UT.kind ? UT.packs.length : UT.page.results.length;
      return (0, dT.jsxs)("div", {
        className: gT()("ShaderPackBrowseResults", {
          Loading: mT && null !== UT
        }),
        children: [mT && null === UT && (0, dT.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: (0, dT.jsx)(eT.c, {})
        }), WT && (0, dT.jsxs)("div", {
          className: "ShaderPackBrowseMessage",
          children: [HT("shaderPackListing:loadFailed"), (0, dT.jsx)(LT.e, {
            onClick: zT,
            children: HT("general:tryAgain")
          })]
        }), "listing" === (null === UT || void 0 === UT ? void 0 : UT.kind) && lT > 0 && (0, dT.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: UT.page.results.map((TT => (0, dT.jsx)(wT, {
            pack: {
              packId: TT.packId,
              name: TT.name,
              live: TT
            },
            view: nT,
            favourite: {
              isFavourite: kT.isFavourite(TT.packId),
              onToggle: () => {
                kT.toggle(TT.packId)
              }
            }
          }, TT.packId)))
        }), "owned" === (null === UT || void 0 === UT ? void 0 : UT.kind) && lT > 0 && (0, dT.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: UT.packs.map((TT => {
            var UT;
            return (0, dT.jsx)(wT, {
              pack: TT,
              view: nT,
              notice: TT.owner ? (0, JT.M)(TT.owner, !(null === (UT = TT.live) || void 0 === UT || !UT.renderId), jT, HT)[0] : void 0
            }, TT.packId)
          }))
        }), null !== UT && 0 === lT && (0, dT.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: HT(yT(MT))
        })]
      })
    }

    function yT(TT) {
      return "mine" === TT.section ? "shaderPackListing:noOwnPacks" : (0, JT.r)(TT) ? "general:noResults" : "favourites" === TT.section ? "shaderPackListing:noFavourites" : "general:noResults"
    }
    var XT = mT(6654);
    const IT = 24,
      QT = {
        favourites: "general:favourites",
        mine: "shaderPackListing:mine"
      };

    function sT() {
      var TT, UT, mT, MT;
      const {
        t: eT
      } = (0, OT.z)(), YT = (0, jT.useNavigatePreserveSearch)(), xT = (0, zT.p)(), {
        userContext: wT,
        isUserContextUpdating: yT
      } = (0, vT.d)(), [sT, FT] = (0, tT.j)(), [PT, VT] = (0, tT.f)(), uT = (0, WT.useRef)(!1), [CT, rT] = (0, lT.l)(), KT = (0, JT.x)(CT), [ST, GT] = (0, WT.useState)(null !== (TT = KT.searchQuery) && void 0 !== TT ? TT : ""), NT = (0, WT.useRef)(null), {
        searchQuery: ET
      } = KT;
      (0, WT.useEffect)((() => {
        GT(null !== ET && void 0 !== ET ? ET : ""), NT.current && (NT.current.value = null !== ET && void 0 !== ET ? ET : "")
      }), [ET]);
      const [hT, DT] = (0, WT.useState)(null), [oT, AT] = (0, WT.useState)(!1), [RT, TU] = (0, WT.useState)(!1), [UU, mU] = (0, WT.useState)(0), WU = (0, WT.useRef)(0), zU = JSON.stringify(KT), MU = (0, JT.k)();

      function gU() {
        null !== MU ? (YT(MU), fT.b.set({
          openEverythingMenuName: nT.k.SETTINGS,
          openSettingsCategory: "Np"
        })) : YT("/")
      }

      function nU(TT) {
        rT((UT => {
          (0, JT._)(UT, {
            ...KT,
            pageNumber: 1,
            ...TT
          })
        }))
      }

      function HU() {
        const TT = ST.trim() || null;
        nU({
          searchQuery: TT,
          ...null !== TT && !uT.current && (0, JT.l)(KT) && {
            withFeatures: [],
            withoutFeatures: []
          }
        })
      }(0, cT.d)(gU), (0, tT.d)(), (0, WT.useEffect)((() => {
        if (yT) return;
        const TT = ++WU.current,
          UT = JSON.parse(zU);
        AT(!0), TU(!1), async function(TT) {
          if ("mine" === TT.section) return {
            kind: "owned",
            packs: await qT.b.getOwnedShaderPacks(wT)
          };
          const UT = "favourites" === TT.section,
            mT = UT && (0, JT.l)(TT),
            WT = await qT.b.getShaderPacks(wT, {
              sort: UT ? JT.c : TT.sort,
              features: mT ? [] : TT.withFeatures,
              withoutFeatures: mT ? [] : TT.withoutFeatures,
              searchQuery: TT.searchQuery,
              pageNumber: TT.pageNumber,
              pageSize: IT,
              onlyFavourites: UT,
              banned: (0, JT.o)(wT) ? (0, JT.b)(TT.banned) : void 0
            });
          return {
            kind: "listing",
            page: WT
          }
        }(UT).then((UT => {
          WU.current === TT && DT(UT)
        })).catch((UT => {
          WU.current === TT && (console.error("Failed to get shader packs", UT), DT(null), TU(!0))
        })).finally((() => {
          WU.current === TT && AT(!1)
        }))
      }), [zU, wT, yT, UU]);
      const [kU, jU] = (0, WT.useState)(null), lU = null !== (mT = null === (MT = ("listing" === (null === hT || void 0 === hT ? void 0 : hT.kind) ? hT.page.results : (null !== (UT = null === hT || void 0 === hT ? void 0 : hT.packs) && void 0 !== UT ? UT : []).flatMap((TT => TT.live ? [TT.live] : [])))[0]) || void 0 === MT ? void 0 : MT.baselineVersion) && void 0 !== mT ? mT : null;
      (0, WT.useEffect)((() => {
        null !== lU && jU(lU)
      }), [lU]);
      const LU = "mine" === KT.section,
        pU = (0, JT.o)(wT),
        BU = TT => {
          "explore" !== KT.section && (TT.stopPropagation(), TT.preventDefault(), nU({
            section: "explore"
          }))
        };
      return (0, dT.jsxs)("div", {
        className: "ShaderPackBrowse AnimFadeIn",
        children: [(0, dT.jsx)(LT.d, {
          onClick: gU,
          children: eT(null === MU ? "homePage:backToGames" : "shaderPackListing:backToSettings")
        }), (0, dT.jsxs)("div", {
          className: "ShaderPackBrowseHeader",
          children: [(0, dT.jsxs)("div", {
            className: "ShaderPackBrowseHeaderRow",
            children: [(0, dT.jsx)("h1", {
              className: "VisuallyHidden",
              children: eT("shaderPackListing:title")
            }), (0, dT.jsxs)("div", {
              className: "ShaderPackBrowseTabs",
              children: [(0, dT.jsx)("div", {
                className: gT()("ShaderPackBrowseSort", {
                  Active: "explore" === KT.section
                }),
                onMouseDownCapture: BU,
                onTouchEndCapture: BU,
                children: (0, dT.jsx)(pT.d, {
                  options: HT.z.map((TT => ({
                    value: TT,
                    label: eT(JT.R[TT])
                  }))),
                  value: KT.sort,
                  onChange: TT => {
                    nU({
                      section: "explore",
                      sort: TT.value
                    })
                  }
                })
              }), Object.keys(QT).map((TT => (0, dT.jsx)(LT.L, {
                active: KT.section === TT,
                onClick: () => {
                  nU({
                    section: TT
                  })
                },
                children: eT(QT[TT])
              }, TT)))]
            }), !LU && (0, dT.jsx)("div", {
              className: "ShaderPackBrowseDivider"
            }), !LU && (0, dT.jsxs)("div", {
              className: "ShaderPackBrowseSearch",
              children: [(0, dT.jsx)("div", {
                className: "ShaderPackBrowseSearchIcon",
                children: (0, dT.jsx)(kT.c, {
                  name: "magnifying-glass"
                })
              }), (0, dT.jsx)(ZT.e, {
                className: "ShaderPackBrowseSearchInput",
                placeholderText: eT("shaderPackListing:searchPlaceholder"),
                maxLength: HT.L,
                defaultValue: ST,
                domRef: NT,
                onValueChange: GT,
                onEnter: HU
              }), (0, dT.jsx)(LT.e, {
                onClick: HU,
                children: eT("general:search")
              })]
            }), !LU && (0, dT.jsxs)(LT.L, {
              className: gT()("ShaderPackBrowseFilterToggle", {
                Open: PT
              }),
              pressed: PT,
              onClick: () => {
                VT(!PT)
              },
              children: [eT("shaderPackListing:filter"), " ", (0, dT.jsx)(kT.c, {
                name: PT ? "angle-up" : "angle-down"
              })]
            }), (0, dT.jsx)("div", {
              className: "ShaderPackBrowseSpace"
            }), bT.featureFlags.settings.canUseShaderPacks && (0, dT.jsxs)(LT.l, {
              onClick: () => {
                YT(JT.O)
              },
              children: [(0, dT.jsx)(kT.c, {
                name: "upload"
              }), " ", eT("shaderPackListing:publish")]
            })]
          }), !LU && PT && (0, dT.jsxs)("div", {
            className: "ShaderPackBrowseFeatures",
            children: [JT.t.map((TT => {
              const UT = (0, JT.e)(KT, TT),
                mT = eT(JT.C[TT]);
              return (0, dT.jsx)(LT.L, {
                className: gT()("ShaderPackBrowseFeature", {
                  Without: "without" === UT
                }),
                active: "with" === UT,
                pressed: null !== UT,
                onClick: () => {
                  uT.current = !0, nU((0, JT.W)(KT, TT))
                },
                children: (0, dT.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureLabel",
                  children: [(0, dT.jsxs)("span", {
                    className: "ShaderPackBrowseFeatureReserve",
                    children: [(0, dT.jsx)(kT.c, {
                      name: "check"
                    }), " ", mT]
                  }), (0, dT.jsxs)("span", {
                    children: [null !== UT && (0, dT.jsx)(kT.c, {
                      name: "with" === UT ? "check" : "xmark"
                    }), " ", mT]
                  })]
                })
              }, TT)
            })), pU && (0, dT.jsx)(LT.L, {
              className: gT()("ShaderPackBrowseFeature", {
                Without: "without" === KT.banned
              }),
              active: "with" === KT.banned,
              pressed: null !== KT.banned,
              onClick: () => {
                const TT = "without" === KT.banned && !uT.current && (0, JT.l)(KT);
                nU({
                  banned: (0, JT.u)(KT.banned),
                  ...TT && {
                    withFeatures: [],
                    withoutFeatures: []
                  }
                })
              },
              children: (0, dT.jsxs)("span", {
                className: "ShaderPackBrowseFeatureLabel",
                children: [(0, dT.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureReserve",
                  children: [(0, dT.jsx)(kT.c, {
                    name: "check"
                  }), " BANNED"]
                }), (0, dT.jsxs)("span", {
                  children: [null !== KT.banned && (0, dT.jsx)(kT.c, {
                    name: "with" === KT.banned ? "check" : "xmark"
                  }), " BANNED"]
                })]
              })
            })]
          })]
        }), (!LU || null !== kU) && (0, dT.jsx)("div", {
          className: "ShaderPackBrowseScenes",
          children: (0, dT.jsx)(XT.d, {
            selected: sT,
            onSelect: FT,
            imageUrl: TT => null === kU ? null : (0, HT.q)(iT.clientSideServerUrls.s3Url, kU, TT, "thumb")
          })
        }), (0, dT.jsx)(aT, {
          results: hT,
          loading: oT,
          failed: RT,
          onRetry: () => {
            mU((TT => TT + 1))
          },
          view: KT,
          previewView: sT
        }), "listing" === (null === hT || void 0 === hT ? void 0 : hT.kind) && (0, dT.jsx)(BT.b, {
          className: "ShaderPackBrowsePagination",
          page: hT.page.pageNumber,
          totalPages: hT.page.totalPages,
          onSetPage: TT => {
            rT((UT => {
              (0, lT.k)(UT, TT)
            }))
          },
          getPageHref: function(TT) {
            const UT = new URLSearchParams(CT);
            (0, lT.k)(UT, TT);
            const mT = UT.toString();
            return mT ? `${xT.pathname}?${mT}` : xT.pathname
          }
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);