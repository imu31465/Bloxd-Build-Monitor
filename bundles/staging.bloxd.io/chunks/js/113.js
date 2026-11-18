export const id = 113;
export const ids = [113];
export const modules = {
  5884: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      default: () => PB
    });
    var VB = dB(62),
      yB = dB(1422),
      pB = dB(933),
      lB = dB.n(pB),
      JB = dB(270),
      YB = dB(5898),
      gB = dB(946),
      oB = dB(1407),
      kB = dB(3971),
      LB = dB(1324),
      OB = dB(2602),
      DB = dB(3980),
      uB = dB(1555),
      HB = dB(3962),
      EB = dB(1011),
      vB = dB(21),
      mB = dB(1393),
      iB = dB(1089),
      NB = dB(95),
      tB = dB(1078),
      fB = dB(1225),
      sB = dB(1105),
      MB = dB(5891),
      zB = dB(5902),
      wB = dB(980);

    function UB(BB) {
      let {
        pack: TB,
        view: dB,
        favourite: VB,
        notice: yB
      } = BB;
      const {
        width: pB,
        height: JB
      } = YB.q.thumb, {
        live: kB
      } = TB;
      return (0, wB.jsx)("div", {
        className: "ShaderPackCard",
        children: (0, wB.jsxs)("div", {
          className: "ShaderPackCardTile",
          children: [(0, wB.jsxs)(oB.LinkPreserveSearch, {
            to: (0, MB.X)(TB.packId),
            className: "ShaderPackCardLink",
            children: [kB && (0, wB.jsx)("img", {
              className: "ShaderPackCardImage",
              src: (0, YB.r)(iB.clientSideServerUrls.s3Url, kB, dB, "thumb"),
              width: pB,
              height: JB,
              loading: "lazy",
              alt: "",
              draggable: !1
            }), kB && (0, wB.jsx)(zB.b, {
              item: kB
            }), !kB && (0, wB.jsx)("div", {
              className: "ShaderPackCardImage ShaderPackCardImagePending",
              children: (0, wB.jsx)(gB.e, {
                name: "hourglass"
              })
            }), (0, wB.jsxs)("div", {
              className: "ShaderPackCardText",
              children: [yB && (0, wB.jsx)("div", {
                className: lB()("ShaderPackCardNotice", {
                  Warning: "warning" === yB.tone
                }),
                children: yB.text
              }), (0, wB.jsx)("div", {
                className: "ShaderPackCardName SmallTextBold",
                children: TB.name
              })]
            })]
          }), kB && (0, wB.jsxs)("div", {
            className: "ShaderPackCardStats",
            children: [(0, wB.jsxs)("div", {
              className: "ShaderPackCardUses SmallTextBold",
              children: [(0, wB.jsx)(gB.e, {
                name: "download"
              }), (0, sB.S)(kB.downloads)]
            }), VB && (0, wB.jsx)(LB.t, {
              onClick: VB.onToggle,
              isLiked: !0 === VB.isFavourite,
              isLoading: null === VB.isFavourite
            })]
          })]
        })
      })
    }
    var FB = dB(5906);

    function KB(BB) {
      let {
        results: TB,
        loading: dB,
        failed: VB,
        onRetry: yB,
        view: pB,
        previewView: JB
      } = BB;
      const {
        t: YB
      } = (0, tB.z)(), gB = (0, FB.k)(), oB = Date.now(), kB = null === TB ? 0 : "owned" === TB.kind ? TB.packs.length : TB.page.results.length;
      return (0, wB.jsxs)("div", {
        className: lB()("ShaderPackBrowseResults", {
          Loading: dB && null !== TB
        }),
        children: [dB && null === TB && (0, wB.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: (0, wB.jsx)(fB.b, {})
        }), VB && (0, wB.jsxs)("div", {
          className: "ShaderPackBrowseMessage",
          children: [YB("shaderPackListing:loadFailed"), (0, wB.jsx)(LB.d, {
            onClick: yB,
            children: YB("general:tryAgain")
          })]
        }), "listing" === (null === TB || void 0 === TB ? void 0 : TB.kind) && kB > 0 && (0, wB.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: TB.page.results.map((BB => (0, wB.jsx)(UB, {
            pack: {
              packId: BB.packId,
              name: BB.name,
              live: BB
            },
            view: JB,
            favourite: {
              isFavourite: gB.isFavourite(BB.packId),
              onToggle: () => {
                gB.toggle(BB.packId)
              }
            }
          }, BB.packId)))
        }), "owned" === (null === TB || void 0 === TB ? void 0 : TB.kind) && kB > 0 && (0, wB.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: TB.packs.map((BB => {
            var TB;
            return (0, wB.jsx)(UB, {
              pack: BB,
              view: JB,
              notice: BB.owner ? (0, MB.V)(BB.owner, !(null === (TB = BB.live) || void 0 === TB || !TB.renderId), oB, YB)[0] : void 0
            }, BB.packId)
          }))
        }), null !== TB && 0 === kB && (0, wB.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: YB(rB(pB))
        })]
      })
    }

    function rB(BB) {
      return "mine" === BB.section ? "shaderPackListing:noOwnPacks" : (0, MB.z)(BB) ? "general:noResults" : "favourites" === BB.section ? "shaderPackListing:noFavourites" : "general:noResults"
    }
    var IB = dB(5915);
    const cB = 24,
      SB = {
        favourites: "general:favourites",
        mine: "shaderPackListing:mine"
      };

    function PB() {
      var BB, TB, dB, pB;
      const {
        t: fB
      } = (0, tB.z)(), sB = (0, oB.useNavigatePreserveSearch)(), zB = (0, yB.o)(), {
        userContext: UB,
        isUserContextUpdating: rB
      } = (0, EB.b)(), [PB, QB] = (0, FB.i)(), [RB, aB] = (0, FB.g)(), ZB = (0, VB.useRef)(!1), [XB, WB] = (0, kB.j)(), hB = (0, MB.J)(XB), [CB, GB] = (0, VB.useState)(null !== (BB = hB.searchQuery) && void 0 !== BB ? BB : ""), qB = (0, VB.useRef)(null), {
        searchQuery: xB
      } = hB;
      (0, VB.useEffect)((() => {
        GB(null !== xB && void 0 !== xB ? xB : ""), qB.current && (qB.current.value = null !== xB && void 0 !== xB ? xB : "")
      }), [xB]);
      const [jB, AB] = (0, VB.useState)(null), [bB, nB] = (0, VB.useState)(!1), [eB, BT] = (0, VB.useState)(!1), [TT, dT] = (0, VB.useState)(0), VT = (0, VB.useRef)(0), yT = JSON.stringify(hB), pT = (0, MB.s)();

      function lT() {
        null !== pT ? (sB(pT), vB.d.set({
          openEverythingMenuName: JB.m.SETTINGS,
          openSettingsCategory: "pD"
        })) : sB("/")
      }

      function JT(BB) {
        WB((TB => {
          (0, MB.gb)(TB, {
            ...hB,
            pageNumber: 1,
            ...BB
          })
        }))
      }

      function YT() {
        const BB = CB.trim() || null;
        JT({
          searchQuery: BB,
          ...null !== BB && !ZB.current && (0, MB.v)(hB) && {
            withFeatures: [],
            withoutFeatures: []
          }
        })
      }(0, HB.d)(lT), (0, FB.d)(), (0, VB.useEffect)((() => {
        if (rB) return;
        const BB = ++VT.current,
          TB = JSON.parse(yT);
        nB(!0), BT(!1), async function(BB) {
          if ("mine" === BB.section) return {
            kind: "owned",
            packs: await mB.c.getOwnedShaderPacks(UB)
          };
          const TB = "favourites" === BB.section,
            dB = TB && (0, MB.v)(BB),
            VB = await mB.c.getShaderPacks(UB, {
              sort: TB ? MB.i : BB.sort,
              features: dB ? [] : BB.withFeatures,
              withoutFeatures: dB ? [] : BB.withoutFeatures,
              searchQuery: BB.searchQuery,
              pageNumber: BB.pageNumber,
              pageSize: cB,
              onlyFavourites: TB,
              banned: (0, MB.w)(UB) ? (0, MB.e)(BB.banned) : void 0
            });
          return {
            kind: "listing",
            page: VB
          }
        }(TB).then((TB => {
          VT.current === BB && AB(TB)
        })).catch((TB => {
          VT.current === BB && (console.error("Failed to get shader packs", TB), AB(null), BT(!0))
        })).finally((() => {
          VT.current === BB && nB(!1)
        }))
      }), [yT, UB, rB, TT]);
      const [gT, oT] = (0, VB.useState)(null), kT = null !== (dB = null === (pB = ("listing" === (null === jB || void 0 === jB ? void 0 : jB.kind) ? jB.page.results : (null !== (TB = null === jB || void 0 === jB ? void 0 : jB.packs) && void 0 !== TB ? TB : []).flatMap((BB => BB.live ? [BB.live] : [])))[0]) || void 0 === pB ? void 0 : pB.baselineVersion) && void 0 !== dB ? dB : null;
      (0, VB.useEffect)((() => {
        null !== kT && oT(kT)
      }), [kT]);
      const LT = "mine" === hB.section,
        OT = (0, MB.w)(UB),
        DT = BB => {
          "explore" !== hB.section && (BB.stopPropagation(), BB.preventDefault(), JT({
            section: "explore"
          }))
        };
      return (0, wB.jsxs)("div", {
        className: "ShaderPackBrowse AnimFadeIn",
        children: [(0, wB.jsx)(LB.b, {
          onClick: lT,
          children: fB(null === pT ? "homePage:backToGames" : "shaderPackListing:backToSettings")
        }), (0, wB.jsxs)("div", {
          className: "ShaderPackBrowseHeader",
          children: [(0, wB.jsxs)("div", {
            className: "ShaderPackBrowseHeaderRow",
            children: [(0, wB.jsx)("h1", {
              className: "VisuallyHidden",
              children: fB("shaderPackListing:title")
            }), (0, wB.jsxs)("div", {
              className: "ShaderPackBrowseTabs",
              children: [(0, wB.jsx)("div", {
                className: lB()("ShaderPackBrowseSort", {
                  Active: "explore" === hB.section
                }),
                onMouseDownCapture: DT,
                onTouchEndCapture: DT,
                children: (0, wB.jsx)(OB.e, {
                  options: YB.u.map((BB => ({
                    value: BB,
                    label: fB(MB.$[BB])
                  }))),
                  value: hB.sort,
                  onChange: BB => {
                    JT({
                      section: "explore",
                      sort: BB.value
                    })
                  }
                })
              }), Object.keys(SB).map((BB => (0, wB.jsx)(LB.T, {
                active: hB.section === BB,
                onClick: () => {
                  JT({
                    section: BB
                  })
                },
                children: fB(SB[BB])
              }, BB)))]
            }), !LT && (0, wB.jsx)("div", {
              className: "ShaderPackBrowseDivider"
            }), !LT && (0, wB.jsxs)("div", {
              className: "ShaderPackBrowseSearch",
              children: [(0, wB.jsx)("div", {
                className: "ShaderPackBrowseSearchIcon",
                children: (0, wB.jsx)(gB.e, {
                  name: "magnifying-glass"
                })
              }), (0, wB.jsx)(uB.e, {
                className: "ShaderPackBrowseSearchInput",
                placeholderText: fB("shaderPackListing:searchPlaceholder"),
                maxLength: YB.J,
                defaultValue: CB,
                domRef: qB,
                onValueChange: GB,
                onEnter: YT
              }), (0, wB.jsx)(LB.d, {
                onClick: YT,
                children: fB("general:search")
              })]
            }), !LT && (0, wB.jsxs)(LB.T, {
              className: lB()("ShaderPackBrowseFilterToggle", {
                Open: RB
              }),
              pressed: RB,
              onClick: () => {
                aB(!RB)
              },
              children: [fB("shaderPackListing:filter"), " ", (0, wB.jsx)(gB.e, {
                name: RB ? "angle-up" : "angle-down"
              })]
            }), (0, wB.jsx)("div", {
              className: "ShaderPackBrowseSpace"
            }), NB.featureFlags.settings.canUseShaderPacks && (0, wB.jsxs)(LB.k, {
              onClick: () => {
                sB(MB.Y)
              },
              children: [(0, wB.jsx)(gB.e, {
                name: "upload"
              }), " ", fB("shaderPackListing:publish")]
            })]
          }), !LT && RB && (0, wB.jsxs)("div", {
            className: "ShaderPackBrowseFeatures",
            children: [MB.E.map((BB => {
              const TB = (0, MB.m)(hB, BB),
                dB = fB(MB.M[BB]);
              return (0, wB.jsx)(LB.T, {
                className: lB()("ShaderPackBrowseFeature", {
                  Without: "without" === TB
                }),
                active: "with" === TB,
                pressed: null !== TB,
                onClick: () => {
                  ZB.current = !0, JT((0, MB.eb)(hB, BB))
                },
                children: (0, wB.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureLabel",
                  children: [(0, wB.jsxs)("span", {
                    className: "ShaderPackBrowseFeatureReserve",
                    children: [(0, wB.jsx)(gB.e, {
                      name: "check"
                    }), " ", dB]
                  }), (0, wB.jsxs)("span", {
                    children: [null !== TB && (0, wB.jsx)(gB.e, {
                      name: "with" === TB ? "check" : "xmark"
                    }), " ", dB]
                  })]
                })
              }, BB)
            })), OT && (0, wB.jsx)(LB.T, {
              className: lB()("ShaderPackBrowseFeature", {
                Without: "without" === hB.banned
              }),
              active: "with" === hB.banned,
              pressed: null !== hB.banned,
              onClick: () => {
                const BB = "without" === hB.banned && !ZB.current && (0, MB.v)(hB);
                JT({
                  banned: (0, MB.H)(hB.banned),
                  ...BB && {
                    withFeatures: [],
                    withoutFeatures: []
                  }
                })
              },
              children: (0, wB.jsxs)("span", {
                className: "ShaderPackBrowseFeatureLabel",
                children: [(0, wB.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureReserve",
                  children: [(0, wB.jsx)(gB.e, {
                    name: "check"
                  }), " BANNED"]
                }), (0, wB.jsxs)("span", {
                  children: [null !== hB.banned && (0, wB.jsx)(gB.e, {
                    name: "with" === hB.banned ? "check" : "xmark"
                  }), " BANNED"]
                })]
              })
            })]
          })]
        }), (!LT || null !== gT) && (0, wB.jsx)("div", {
          className: "ShaderPackBrowseScenes",
          children: (0, wB.jsx)(IB.e, {
            selected: PB,
            onSelect: QB,
            imageUrl: BB => null === gT ? null : (0, YB.k)(iB.clientSideServerUrls.s3Url, gT, BB, "thumb")
          })
        }), (0, wB.jsx)(KB, {
          results: jB,
          loading: bB,
          failed: eB,
          onRetry: () => {
            dT((BB => BB + 1))
          },
          view: hB,
          previewView: PB
        }), "listing" === (null === jB || void 0 === jB ? void 0 : jB.kind) && (0, wB.jsx)(DB.c, {
          className: "ShaderPackBrowsePagination",
          page: jB.page.pageNumber,
          totalPages: jB.page.totalPages,
          onSetPage: BB => {
            WB((TB => {
              (0, kB.i)(TB, BB)
            }))
          },
          getPageHref: function(BB) {
            const TB = new URLSearchParams(XB);
            (0, kB.i)(TB, BB);
            const dB = TB.toString();
            return dB ? `${zB.pathname}?${dB}` : zB.pathname
          }
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);