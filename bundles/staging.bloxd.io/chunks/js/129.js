export const id = 129;
export const ids = [129];
export const modules = {
  6724: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      default: () => rB
    });
    var TB = ZB(63),
      JB = ZB(1591),
      oB = ZB(1091),
      GB = ZB.n(oB),
      vB = ZB(342),
      kB = ZB(6731),
      cB = ZB(1102),
      nB = ZB(1579),
      hB = ZB(4750),
      zB = ZB(1516),
      FB = ZB(3294),
      NB = ZB(4752),
      gB = ZB(1746),
      qB = ZB(4741),
      yB = ZB(1179),
      UB = ZB(20),
      WB = ZB(1561),
      dB = ZB(1258),
      CB = ZB(105),
      QB = ZB(1248),
      sB = ZB(1397),
      wB = ZB(1281),
      OB = ZB(6726),
      YB = ZB(6735),
      iB = ZB(1153);

    function pB(BB) {
      let {
        pack: IB,
        view: ZB,
        favourite: TB,
        notice: JB
      } = BB;
      const {
        width: oB,
        height: vB
      } = kB.r.thumb, {
        live: hB
      } = IB;
      return (0, iB.jsx)("div", {
        className: "ShaderPackCard",
        children: (0, iB.jsxs)("div", {
          className: "ShaderPackCardTile",
          children: [(0, iB.jsxs)(nB.LinkPreserveSearch, {
            to: (0, OB.X)(IB.packId),
            className: "ShaderPackCardLink",
            children: [hB && (0, iB.jsx)("img", {
              className: "ShaderPackCardImage",
              src: (0, kB.u)(dB.clientSideServerUrls.s3Url, hB, ZB, "thumb"),
              width: oB,
              height: vB,
              loading: "lazy",
              alt: "",
              draggable: !1
            }), hB && (0, iB.jsx)(YB.b, {
              item: hB
            }), !hB && (0, iB.jsx)("div", {
              className: "ShaderPackCardImage ShaderPackCardImagePending",
              children: (0, iB.jsx)(cB.d, {
                name: "hourglass"
              })
            }), (0, iB.jsxs)("div", {
              className: "ShaderPackCardText",
              children: [JB && (0, iB.jsx)("div", {
                className: GB()("ShaderPackCardNotice", {
                  Warning: "warning" === JB.tone
                }),
                children: JB.text
              }), (0, iB.jsx)("div", {
                className: "ShaderPackCardName SmallTextBold",
                children: IB.name
              })]
            })]
          }), hB && (0, iB.jsxs)("div", {
            className: "ShaderPackCardStats",
            children: [(0, iB.jsxs)("div", {
              className: "ShaderPackCardUses SmallTextBold",
              children: [(0, iB.jsx)(cB.d, {
                name: "download"
              }), (0, wB.J)(hB.downloads)]
            }), TB && (0, iB.jsx)(zB.w, {
              onClick: TB.onToggle,
              isLiked: !0 === TB.isFavourite,
              isLoading: null === TB.isFavourite
            })]
          })]
        })
      })
    }
    var aB = ZB(6737);

    function HB(BB) {
      let {
        results: IB,
        loading: ZB,
        failed: TB,
        onRetry: JB,
        view: oB,
        previewView: vB
      } = BB;
      const {
        t: kB
      } = (0, QB.G)(), cB = (0, aB.l)(), nB = Date.now(), hB = null === IB ? 0 : "owned" === IB.kind ? IB.packs.length : IB.page.results.length;
      return (0, iB.jsxs)("div", {
        className: GB()("ShaderPackBrowseResults", {
          Loading: ZB && null !== IB
        }),
        children: [ZB && null === IB && (0, iB.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: (0, iB.jsx)(sB.d, {})
        }), TB && (0, iB.jsxs)("div", {
          className: "ShaderPackBrowseMessage",
          children: [kB("shaderPackListing:loadFailed"), (0, iB.jsx)(zB.g, {
            onClick: JB,
            children: kB("general:tryAgain")
          })]
        }), "listing" === (null === IB || void 0 === IB ? void 0 : IB.kind) && hB > 0 && (0, iB.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: IB.page.results.map((BB => (0, iB.jsx)(pB, {
            pack: {
              packId: BB.packId,
              name: BB.name,
              live: BB
            },
            view: vB,
            favourite: {
              isFavourite: cB.isFavourite(BB.packId),
              onToggle: () => {
                cB.toggle(BB.packId)
              }
            }
          }, BB.packId)))
        }), "owned" === (null === IB || void 0 === IB ? void 0 : IB.kind) && hB > 0 && (0, iB.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: IB.packs.map((BB => {
            var IB;
            return (0, iB.jsx)(pB, {
              pack: BB,
              view: vB,
              notice: BB.owner ? (0, OB.T)(BB.owner, !(null === (IB = BB.live) || void 0 === IB || !IB.renderId), nB, kB)[0] : void 0
            }, BB.packId)
          }))
        }), null !== IB && 0 === hB && (0, iB.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: kB(MB(oB))
        })]
      })
    }

    function MB(BB) {
      return "mine" === BB.section ? "shaderPackListing:noOwnPacks" : (0, OB.u)(BB) ? "general:noResults" : "favourites" === BB.section ? "shaderPackListing:noFavourites" : "general:noResults"
    }
    var jB = ZB(6745);
    const PB = 24,
      RB = {
        favourites: "general:favourites",
        mine: "shaderPackListing:mine"
      };

    function rB() {
      var BB, IB, ZB, oB;
      const {
        t: sB
      } = (0, QB.G)(), wB = (0, nB.useNavigatePreserveSearch)(), YB = (0, JB.r)(), {
        userContext: pB,
        isUserContextUpdating: MB
      } = (0, yB.d)(), [rB, mB] = (0, aB.k)(), [XB, LB] = (0, aB.g)(), eB = (0, TB.useRef)(!1), [uB, fB] = (0, hB.o)(), lB = (0, OB.F)(uB), [AB, tB] = (0, TB.useState)(null !== (BB = lB.searchQuery) && void 0 !== BB ? BB : ""), bB = (0, TB.useRef)(null), {
        searchQuery: xB
      } = lB;
      (0, TB.useEffect)((() => {
        tB(null !== xB && void 0 !== xB ? xB : ""), bB.current && (bB.current.value = null !== xB && void 0 !== xB ? xB : "")
      }), [xB]);
      const [EB, DB] = (0, TB.useState)(null), [KB, VB] = (0, TB.useState)(!1), [SB, BI] = (0, TB.useState)(!1), [II, ZI] = (0, TB.useState)(0), TI = (0, TB.useRef)(0), JI = JSON.stringify(lB), oI = (0, OB.p)();

      function GI() {
        null !== oI ? (wB(oI), UB.d.set({
          openEverythingMenuName: vB.q.SETTINGS,
          openSettingsCategory: "oN"
        })) : wB("/")
      }

      function vI(BB) {
        fB((IB => {
          (0, OB.kb)(IB, {
            ...lB,
            pageNumber: 1,
            ...BB
          })
        }))
      }

      function kI() {
        const BB = AB.trim() || null;
        vI({
          searchQuery: BB,
          ...null !== BB && !eB.current && (0, OB.q)(lB) && {
            withFeatures: [],
            withoutFeatures: []
          }
        })
      }(0, qB.e)(GI), (0, aB.d)(), (0, TB.useEffect)((() => {
        if (MB) return;
        const BB = ++TI.current,
          IB = JSON.parse(JI);
        VB(!0), BI(!1), async function(BB) {
          if ("mine" === BB.section) return {
            kind: "owned",
            packs: await WB.c.getOwnedShaderPacks(pB)
          };
          const IB = "favourites" === BB.section,
            ZB = IB && (0, OB.q)(BB),
            TB = await WB.c.getShaderPacks(pB, {
              sort: IB ? OB.i : BB.sort,
              features: ZB ? [] : BB.withFeatures,
              withoutFeatures: ZB ? [] : BB.withoutFeatures,
              searchQuery: BB.searchQuery,
              pageNumber: BB.pageNumber,
              pageSize: PB,
              onlyFavourites: IB,
              banned: (0, OB.r)(pB) ? (0, OB.e)(BB.banned) : void 0
            });
          return {
            kind: "listing",
            page: TB
          }
        }(IB).then((IB => {
          TI.current === BB && DB(IB)
        })).catch((IB => {
          TI.current === BB && (console.error("Failed to get shader packs", IB), DB(null), BI(!0))
        })).finally((() => {
          TI.current === BB && VB(!1)
        }))
      }), [JI, pB, MB, II]);
      const [cI, nI] = (0, TB.useState)(null), hI = null !== (ZB = null === (oB = ("listing" === (null === EB || void 0 === EB ? void 0 : EB.kind) ? EB.page.results : (null !== (IB = null === EB || void 0 === EB ? void 0 : EB.packs) && void 0 !== IB ? IB : []).flatMap((BB => BB.live ? [BB.live] : [])))[0]) || void 0 === oB ? void 0 : oB.baselineVersion) && void 0 !== ZB ? ZB : null;
      (0, TB.useEffect)((() => {
        null !== hI && nI(hI)
      }), [hI]);
      const zI = "mine" === lB.section,
        FI = (0, OB.r)(pB),
        NI = BB => {
          "explore" !== lB.section && (BB.stopPropagation(), BB.preventDefault(), vI({
            section: "explore"
          }))
        };
      return (0, iB.jsxs)("div", {
        className: "ShaderPackBrowse AnimFadeIn",
        children: [(0, iB.jsx)(zB.c, {
          onClick: GI,
          children: sB(null === oI ? "homePage:backToGames" : "shaderPackListing:backToSettings")
        }), (0, iB.jsxs)("div", {
          className: "ShaderPackBrowseHeader",
          children: [(0, iB.jsxs)("div", {
            className: "ShaderPackBrowseHeaderRow",
            children: [(0, iB.jsx)("h1", {
              className: "VisuallyHidden",
              children: sB("shaderPackListing:title")
            }), (0, iB.jsxs)("div", {
              className: "ShaderPackBrowseTabs",
              children: [(0, iB.jsx)("div", {
                className: GB()("ShaderPackBrowseSort", {
                  Active: "explore" === lB.section
                }),
                onMouseDownCapture: NI,
                onTouchEndCapture: NI,
                children: (0, iB.jsx)(FB.c, {
                  options: kB.y.map((BB => ({
                    value: BB,
                    label: sB(OB.ab[BB])
                  }))),
                  value: lB.sort,
                  onChange: BB => {
                    vI({
                      section: "explore",
                      sort: BB.value
                    })
                  }
                })
              }), Object.keys(RB).map((BB => (0, iB.jsx)(zB.V, {
                active: lB.section === BB,
                onClick: () => {
                  vI({
                    section: BB
                  })
                },
                children: sB(RB[BB])
              }, BB)))]
            }), !zI && (0, iB.jsx)("div", {
              className: "ShaderPackBrowseDivider"
            }), !zI && (0, iB.jsxs)("div", {
              className: "ShaderPackBrowseSearch",
              children: [(0, iB.jsx)("div", {
                className: "ShaderPackBrowseSearchIcon",
                children: (0, iB.jsx)(cB.d, {
                  name: "magnifying-glass"
                })
              }), (0, iB.jsx)(gB.c, {
                className: "ShaderPackBrowseSearchInput",
                placeholderText: sB("shaderPackListing:searchPlaceholder"),
                maxLength: kB.K,
                defaultValue: AB,
                domRef: bB,
                onValueChange: tB,
                onEnter: kI
              }), (0, iB.jsx)(zB.g, {
                onClick: kI,
                children: sB("general:search")
              })]
            }), !zI && (0, iB.jsxs)(zB.V, {
              className: GB()("ShaderPackBrowseFilterToggle", {
                Open: XB
              }),
              pressed: XB,
              onClick: () => {
                LB(!XB)
              },
              children: [sB("shaderPackListing:filter"), " ", (0, iB.jsx)(cB.d, {
                name: XB ? "angle-up" : "angle-down"
              })]
            }), (0, iB.jsx)("div", {
              className: "ShaderPackBrowseSpace"
            }), CB.featureFlags.settings.canUseShaderPacks && (0, iB.jsxs)(zB.p, {
              onClick: () => {
                wB(OB.Y)
              },
              children: [(0, iB.jsx)(cB.d, {
                name: "upload"
              }), " ", sB("shaderPackListing:publish")]
            })]
          }), !zI && XB && (0, iB.jsxs)("div", {
            className: "ShaderPackBrowseFeatures",
            children: [OB.y.map((BB => {
              const IB = (0, OB.l)(lB, BB),
                ZB = sB(OB.K[BB]);
              return (0, iB.jsx)(zB.V, {
                className: GB()("ShaderPackBrowseFeature", {
                  Without: "without" === IB
                }),
                active: "with" === IB,
                pressed: null !== IB,
                onClick: () => {
                  eB.current = !0, vI((0, OB.hb)(lB, BB))
                },
                children: (0, iB.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureLabel",
                  children: [(0, iB.jsxs)("span", {
                    className: "ShaderPackBrowseFeatureReserve",
                    children: [(0, iB.jsx)(cB.d, {
                      name: "check"
                    }), " ", ZB]
                  }), (0, iB.jsxs)("span", {
                    children: [null !== IB && (0, iB.jsx)(cB.d, {
                      name: "with" === IB ? "check" : "xmark"
                    }), " ", ZB]
                  })]
                })
              }, BB)
            })), FI && (0, iB.jsx)(zB.V, {
              className: GB()("ShaderPackBrowseFeature", {
                Without: "without" === lB.banned
              }),
              active: "with" === lB.banned,
              pressed: null !== lB.banned,
              onClick: () => {
                const BB = "without" === lB.banned && !eB.current && (0, OB.q)(lB);
                vI({
                  banned: (0, OB.B)(lB.banned),
                  ...BB && {
                    withFeatures: [],
                    withoutFeatures: []
                  }
                })
              },
              children: (0, iB.jsxs)("span", {
                className: "ShaderPackBrowseFeatureLabel",
                children: [(0, iB.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureReserve",
                  children: [(0, iB.jsx)(cB.d, {
                    name: "check"
                  }), " BANNED"]
                }), (0, iB.jsxs)("span", {
                  children: [null !== lB.banned && (0, iB.jsx)(cB.d, {
                    name: "with" === lB.banned ? "check" : "xmark"
                  }), " BANNED"]
                })]
              })
            })]
          })]
        }), (!zI || null !== cI) && (0, iB.jsx)("div", {
          className: "ShaderPackBrowseScenes",
          children: (0, iB.jsx)(jB.b, {
            selected: rB,
            onSelect: mB,
            imageUrl: BB => null === cI ? null : (0, kB.n)(dB.clientSideServerUrls.s3Url, cI, BB, "thumb")
          })
        }), (0, iB.jsx)(HB, {
          results: EB,
          loading: KB,
          failed: SB,
          onRetry: () => {
            ZI((BB => BB + 1))
          },
          view: lB,
          previewView: rB
        }), "listing" === (null === EB || void 0 === EB ? void 0 : EB.kind) && (0, iB.jsx)(NB.e, {
          className: "ShaderPackBrowsePagination",
          page: EB.page.pageNumber,
          totalPages: EB.page.totalPages,
          onSetPage: BB => {
            fB((IB => {
              (0, hB.m)(IB, BB)
            }))
          },
          getPageHref: function(BB) {
            const IB = new URLSearchParams(uB);
            (0, hB.m)(IB, BB);
            const ZB = IB.toString();
            return ZB ? `${YB.pathname}?${ZB}` : YB.pathname
          }
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);