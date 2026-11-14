export const id = 106;
export const ids = [106];
export const modules = {
  5544: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      default: () => UW
    });
    var wW = MW(75),
      CW = MW(1345),
      zR = MW(897),
      AW = MW.n(zR),
      bR = MW(232),
      yR = MW(5557),
      NW = MW(904),
      eW = MW(1330),
      BW = MW(3600),
      tR = MW(1255),
      TW = MW(2273),
      gR = MW(3604),
      iR = MW(1489),
      YW = MW(3591),
      JW = MW(969),
      PW = MW(27),
      IW = MW(1314),
      oW = MW(1033),
      lW = MW(116),
      FW = MW(1027),
      fW = MW(1157),
      QW = MW(1053),
      rR = MW(5548),
      cR = MW(5560),
      XW = MW(940);

    function jR(WW) {
      let {
        pack: RW,
        view: MW,
        favourite: wW,
        notice: CW
      } = WW;
      const {
        width: zR,
        height: bR
      } = yR.m.thumb, {
        live: BW
      } = RW;
      return (0, XW.jsx)("div", {
        className: "ShaderPackCard",
        children: (0, XW.jsxs)("div", {
          className: "ShaderPackCardTile",
          children: [(0, XW.jsxs)(eW.LinkPreserveSearch, {
            to: (0, rR.cb)(RW.packId),
            className: "ShaderPackCardLink",
            children: [BW && (0, XW.jsx)("img", {
              className: "ShaderPackCardImage",
              src: (0, yR.o)(oW.clientSideServerUrls.s3Url, BW, MW, "thumb"),
              width: zR,
              height: bR,
              loading: "lazy",
              alt: "",
              draggable: !1
            }), BW && (0, XW.jsx)(cR.e, {
              item: BW
            }), !BW && (0, XW.jsx)("div", {
              className: "ShaderPackCardImage ShaderPackCardImagePending",
              children: (0, XW.jsx)(NW.e, {
                name: "hourglass"
              })
            }), (0, XW.jsxs)("div", {
              className: "ShaderPackCardText",
              children: [CW && (0, XW.jsx)("div", {
                className: AW()("ShaderPackCardNotice", {
                  Warning: "warning" === CW.tone
                }),
                children: CW.text
              }), (0, XW.jsx)("div", {
                className: "ShaderPackCardName SmallTextBold",
                children: RW.name
              })]
            })]
          }), BW && (0, XW.jsxs)("div", {
            className: "ShaderPackCardStats",
            children: [(0, XW.jsxs)("div", {
              className: "ShaderPackCardUses SmallTextBold",
              children: [(0, XW.jsx)(NW.e, {
                name: "download"
              }), (0, QW.I)(BW.downloads)]
            }), wW && (0, XW.jsx)(tR.s, {
              onClick: wW.onToggle,
              isLiked: !0 === wW.isFavourite,
              isLoading: null === wW.isFavourite
            })]
          })]
        })
      })
    }
    var kR = MW(5565);

    function aR(WW) {
      let {
        results: RW,
        loading: MW,
        failed: wW,
        onRetry: CW,
        view: zR,
        previewView: bR
      } = WW;
      const {
        t: yR
      } = (0, FW.C)(), NW = (0, kR.k)(), eW = Date.now(), BW = null === RW ? 0 : "owned" === RW.kind ? RW.packs.length : RW.page.results.length;
      return (0, XW.jsxs)("div", {
        className: AW()("ShaderPackBrowseResults", {
          Loading: MW && null !== RW
        }),
        children: [MW && null === RW && (0, XW.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: (0, XW.jsx)(fW.d, {})
        }), wW && (0, XW.jsxs)("div", {
          className: "ShaderPackBrowseMessage",
          children: [yR("shaderPackListing:loadFailed"), (0, XW.jsx)(tR.h, {
            onClick: CW,
            children: yR("general:tryAgain")
          })]
        }), "listing" === (null === RW || void 0 === RW ? void 0 : RW.kind) && BW > 0 && (0, XW.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: RW.page.results.map((WW => (0, XW.jsx)(jR, {
            pack: {
              packId: WW.packId,
              name: WW.name,
              live: WW
            },
            view: bR,
            favourite: {
              isFavourite: NW.isFavourite(WW.packId),
              onToggle: () => {
                NW.toggle(WW.packId)
              }
            }
          }, WW.packId)))
        }), "owned" === (null === RW || void 0 === RW ? void 0 : RW.kind) && BW > 0 && (0, XW.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: RW.packs.map((WW => {
            var RW;
            return (0, XW.jsx)(jR, {
              pack: WW,
              view: bR,
              notice: WW.owner ? (0, rR.bb)(WW.owner, !(null === (RW = WW.live) || void 0 === RW || !RW.renderId), eW, yR)[0] : void 0
            }, WW.packId)
          }))
        }), null !== RW && 0 === BW && (0, XW.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: yR(sW(zR))
        })]
      })
    }

    function sW(WW) {
      return "mine" === WW.section ? "shaderPackListing:noOwnPacks" : (0, rR.w)(WW) ? "general:noResults" : "favourites" === WW.section ? "shaderPackListing:noFavourites" : "general:noResults"
    }
    var dW = MW(5571);
    const pW = 24,
      hW = {
        favourites: "general:favourites",
        mine: "shaderPackListing:mine"
      };

    function UW() {
      var WW, RW, MW, zR;
      const {
        t: fW
      } = (0, FW.C)(), QW = (0, eW.useNavigatePreserveSearch)(), cR = (0, CW.s)(), {
        userContext: jR,
        isUserContextUpdating: sW
      } = (0, JW.c)(), [UW, EW] = (0, kR.i)(), [VW, mR] = (0, kR.f)(), xR = (0, wW.useRef)(!1), [vR, KW] = (0, BW.l)(), uW = (0, rR.K)(vR), [OW, nW] = (0, wW.useState)(null !== (WW = uW.searchQuery) && void 0 !== WW ? WW : ""), GW = (0, wW.useRef)(null), {
        searchQuery: LW
      } = uW;
      (0, wW.useEffect)((() => {
        nW(null !== LW && void 0 !== LW ? LW : ""), GW.current && (GW.current.value = null !== LW && void 0 !== LW ? LW : "")
      }), [LW]);
      const [HW, DW] = (0, wW.useState)(null), [qR, ZW] = (0, wW.useState)(!1), [SW, WR] = (0, wW.useState)(!1), [RR, MR] = (0, wW.useState)(0), wR = (0, wW.useRef)(0), CR = JSON.stringify(uW), zM = (0, rR.o)();

      function AR() {
        null !== zM ? (QW(zM), PW.b.set({
          openEverythingMenuName: bR.t.SETTINGS,
          openSettingsCategory: "ww"
        })) : QW("/")
      }

      function bM(WW) {
        KW((RW => {
          (0, rR.ob)(RW, {
            ...uW,
            pageNumber: 1,
            ...WW
          })
        }))
      }

      function yM() {
        const WW = OW.trim() || null;
        bM({
          searchQuery: WW,
          ...null !== WW && !xR.current && (0, rR.r)(uW) && {
            withFeatures: [],
            withoutFeatures: []
          }
        })
      }(0, YW.c)(AR), (0, kR.d)(), (0, wW.useEffect)((() => {
        if (sW) return;
        const WW = ++wR.current,
          RW = JSON.parse(CR);
        ZW(!0), WR(!1), async function(WW) {
          if ("mine" === WW.section) return {
            kind: "owned",
            packs: await IW.c.getOwnedShaderPacks(jR)
          };
          const RW = "favourites" === WW.section,
            MW = RW && (0, rR.r)(WW),
            wW = await IW.c.getShaderPacks(jR, {
              sort: RW ? rR.h : WW.sort,
              features: MW ? [] : WW.withFeatures,
              withoutFeatures: MW ? [] : WW.withoutFeatures,
              searchQuery: WW.searchQuery,
              pageNumber: WW.pageNumber,
              pageSize: pW,
              onlyFavourites: RW,
              banned: (0, rR.v)(jR) ? (0, rR.e)(WW.banned) : void 0
            });
          return {
            kind: "listing",
            page: wW
          }
        }(RW).then((RW => {
          wR.current === WW && DW(RW)
        })).catch((RW => {
          wR.current === WW && (console.error("Failed to get shader packs", RW), DW(null), WR(!0))
        })).finally((() => {
          wR.current === WW && ZW(!1)
        }))
      }), [CR, jR, sW, RR]);
      const [NR, eR] = (0, wW.useState)(null), BR = null !== (MW = null === (zR = ("listing" === (null === HW || void 0 === HW ? void 0 : HW.kind) ? HW.page.results : (null !== (RW = null === HW || void 0 === HW ? void 0 : HW.packs) && void 0 !== RW ? RW : []).flatMap((WW => WW.live ? [WW.live] : [])))[0]) || void 0 === zR ? void 0 : zR.baselineVersion) && void 0 !== MW ? MW : null;
      (0, wW.useEffect)((() => {
        null !== BR && eR(BR)
      }), [BR]);
      const tM = "mine" === uW.section,
        TR = (0, rR.v)(jR),
        gM = WW => {
          "explore" !== uW.section && (WW.stopPropagation(), WW.preventDefault(), bM({
            section: "explore"
          }))
        };
      return (0, XW.jsxs)("div", {
        className: "ShaderPackBrowse AnimFadeIn",
        children: [(0, XW.jsx)(tR.d, {
          onClick: AR,
          children: fW(null === zM ? "homePage:backToGames" : "shaderPackListing:backToSettings")
        }), (0, XW.jsxs)("div", {
          className: "ShaderPackBrowseHeader",
          children: [(0, XW.jsxs)("div", {
            className: "ShaderPackBrowseHeaderRow",
            children: [(0, XW.jsx)("h1", {
              className: "VisuallyHidden",
              children: fW("shaderPackListing:title")
            }), (0, XW.jsxs)("div", {
              className: "ShaderPackBrowseTabs",
              children: [(0, XW.jsx)("div", {
                className: AW()("ShaderPackBrowseSort", {
                  Active: "explore" === uW.section
                }),
                onMouseDownCapture: gM,
                onTouchEndCapture: gM,
                children: (0, XW.jsx)(TW.b, {
                  options: yR.q.map((WW => ({
                    value: WW,
                    label: fW(rR.hb[WW])
                  }))),
                  value: uW.sort,
                  onChange: WW => {
                    bM({
                      section: "explore",
                      sort: WW.value
                    })
                  }
                })
              }), Object.keys(hW).map((WW => (0, XW.jsx)(tR.O, {
                active: uW.section === WW,
                onClick: () => {
                  bM({
                    section: WW
                  })
                },
                children: fW(hW[WW])
              }, WW)))]
            }), !tM && (0, XW.jsx)("div", {
              className: "ShaderPackBrowseDivider"
            }), !tM && (0, XW.jsxs)("div", {
              className: "ShaderPackBrowseSearch",
              children: [(0, XW.jsx)("div", {
                className: "ShaderPackBrowseSearchIcon",
                children: (0, XW.jsx)(NW.e, {
                  name: "magnifying-glass"
                })
              }), (0, XW.jsx)(iR.e, {
                className: "ShaderPackBrowseSearchInput",
                placeholderText: fW("shaderPackListing:searchPlaceholder"),
                maxLength: yR.G,
                defaultValue: OW,
                domRef: GW,
                onValueChange: nW,
                onEnter: yM
              }), (0, XW.jsx)(tR.h, {
                onClick: yM,
                children: fW("general:search")
              })]
            }), !tM && (0, XW.jsxs)(tR.O, {
              className: AW()("ShaderPackBrowseFilterToggle", {
                Open: VW
              }),
              pressed: VW,
              onClick: () => {
                mR(!VW)
              },
              children: [fW("shaderPackListing:filter"), " ", (0, XW.jsx)(NW.e, {
                name: VW ? "angle-up" : "angle-down"
              })]
            }), (0, XW.jsx)("div", {
              className: "ShaderPackBrowseSpace"
            }), lW.featureFlags.settings.canUseShaderPacks && (0, XW.jsxs)(tR.m, {
              onClick: () => {
                QW(rR.db)
              },
              children: [(0, XW.jsx)(NW.e, {
                name: "upload"
              }), " ", fW("shaderPackListing:publish")]
            })]
          }), !tM && VW && (0, XW.jsxs)("div", {
            className: "ShaderPackBrowseFeatures",
            children: [rR.C.map((WW => {
              const RW = (0, rR.j)(uW, WW),
                MW = fW(rR.P[WW]);
              return (0, XW.jsx)(tR.O, {
                className: AW()("ShaderPackBrowseFeature", {
                  Without: "without" === RW
                }),
                active: "with" === RW,
                pressed: null !== RW,
                onClick: () => {
                  xR.current = !0, bM((0, rR.lb)(uW, WW))
                },
                children: (0, XW.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureLabel",
                  children: [(0, XW.jsxs)("span", {
                    className: "ShaderPackBrowseFeatureReserve",
                    children: [(0, XW.jsx)(NW.e, {
                      name: "check"
                    }), " ", MW]
                  }), (0, XW.jsxs)("span", {
                    children: [null !== RW && (0, XW.jsx)(NW.e, {
                      name: "with" === RW ? "check" : "xmark"
                    }), " ", MW]
                  })]
                })
              }, WW)
            })), TR && (0, XW.jsx)(tR.O, {
              className: AW()("ShaderPackBrowseFeature", {
                Without: "without" === uW.banned
              }),
              active: "with" === uW.banned,
              pressed: null !== uW.banned,
              onClick: () => {
                const WW = "without" === uW.banned && !xR.current && (0, rR.r)(uW);
                bM({
                  banned: (0, rR.G)(uW.banned),
                  ...WW && {
                    withFeatures: [],
                    withoutFeatures: []
                  }
                })
              },
              children: (0, XW.jsxs)("span", {
                className: "ShaderPackBrowseFeatureLabel",
                children: [(0, XW.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureReserve",
                  children: [(0, XW.jsx)(NW.e, {
                    name: "check"
                  }), " BANNED"]
                }), (0, XW.jsxs)("span", {
                  children: [null !== uW.banned && (0, XW.jsx)(NW.e, {
                    name: "with" === uW.banned ? "check" : "xmark"
                  }), " BANNED"]
                })]
              })
            })]
          })]
        }), (!tM || null !== NR) && (0, XW.jsx)("div", {
          className: "ShaderPackBrowseScenes",
          children: (0, XW.jsx)(dW.b, {
            selected: UW,
            onSelect: EW,
            imageUrl: WW => null === NR ? null : (0, yR.j)(oW.clientSideServerUrls.s3Url, NR, WW, "thumb")
          })
        }), (0, XW.jsx)(aR, {
          results: HW,
          loading: qR,
          failed: SW,
          onRetry: () => {
            MR((WW => WW + 1))
          },
          view: uW,
          previewView: UW
        }), "listing" === (null === HW || void 0 === HW ? void 0 : HW.kind) && (0, XW.jsx)(gR.b, {
          className: "ShaderPackBrowsePagination",
          page: HW.page.pageNumber,
          totalPages: HW.page.totalPages,
          onSetPage: WW => {
            KW((RW => {
              (0, BW.k)(RW, WW)
            }))
          },
          getPageHref: function(WW) {
            const RW = new URLSearchParams(vR);
            (0, BW.k)(RW, WW);
            const MW = RW.toString();
            return MW ? `${cR.pathname}?${MW}` : cR.pathname
          }
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);