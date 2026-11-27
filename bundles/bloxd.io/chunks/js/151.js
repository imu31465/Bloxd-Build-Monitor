export const id = 151;
export const ids = [151];
export const modules = {
  7560: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      default: () => gW
    });
    var mW = OW(62),
      EW = OW(1616),
      NW = OW(1089),
      PW = OW.n(NW),
      LW = OW(327),
      cW = OW(7570),
      wW = OW(1391),
      tW = OW(1605),
      ZW = OW(5268),
      xW = OW(1532),
      lW = OW(4292),
      AW = OW(5271),
      bW = OW(1782),
      jW = OW(5261),
      UW = OW(1107),
      kW = OW(25),
      sW = OW(1584),
      MW = OW(1185),
      KW = OW(100),
      SW = OW(1172),
      YW = OW(1383),
      yW = OW(1217),
      TW = OW(7567),
      JW = OW(7574),
      hW = OW(1283);

    function HW(WW) {
      let {
        pack: iW,
        view: OW,
        favourite: mW,
        notice: EW
      } = WW;
      const {
        width: NW,
        height: LW
      } = cW.n.thumb, {
        live: ZW
      } = iW;
      return (0, hW.jsx)("div", {
        className: "ShaderPackCard",
        children: (0, hW.jsxs)("div", {
          className: "ShaderPackCardTile",
          children: [(0, hW.jsxs)(tW.LinkPreserveSearch, {
            to: (0, TW.$)(iW.packId),
            className: "ShaderPackCardLink",
            children: [ZW && (0, hW.jsx)("img", {
              className: "ShaderPackCardImage",
              src: (0, cW.q)(MW.clientSideServerUrls.s3Url, ZW, OW, "thumb"),
              width: NW,
              height: LW,
              loading: "lazy",
              alt: "",
              draggable: !1
            }), ZW && (0, hW.jsx)(JW.c, {
              item: ZW
            }), !ZW && (0, hW.jsx)("div", {
              className: "ShaderPackCardImage ShaderPackCardImagePending",
              children: (0, hW.jsx)(wW.c, {
                name: "hourglass"
              })
            }), (0, hW.jsxs)("div", {
              className: "ShaderPackCardText",
              children: [EW && (0, hW.jsx)("div", {
                className: PW()("ShaderPackCardNotice", {
                  Warning: "warning" === EW.tone
                }),
                children: EW.text
              }), (0, hW.jsx)("div", {
                className: "ShaderPackCardName SmallTextBold",
                children: iW.name
              })]
            })]
          }), ZW && (0, hW.jsxs)("div", {
            className: "ShaderPackCardStats",
            children: [(0, hW.jsxs)("div", {
              className: "ShaderPackCardUses SmallTextBold",
              children: [(0, hW.jsx)(wW.c, {
                name: "download"
              }), (0, yW.V)(ZW.downloads)]
            }), mW && (0, hW.jsx)(xW.y, {
              onClick: mW.onToggle,
              isLiked: !0 === mW.isFavourite,
              isLoading: null === mW.isFavourite
            })]
          })]
        })
      })
    }
    var nW = OW(7577);

    function uW(WW) {
      let {
        results: iW,
        loading: OW,
        failed: mW,
        onRetry: EW,
        view: NW,
        previewView: LW
      } = WW;
      const {
        t: cW
      } = (0, SW.B)(), wW = (0, nW.j)(), tW = Date.now(), ZW = null === iW ? 0 : "owned" === iW.kind ? iW.packs.length : iW.page.results.length;
      return (0, hW.jsxs)("div", {
        className: PW()("ShaderPackBrowseResults", {
          Loading: OW && null !== iW
        }),
        children: [OW && null === iW && (0, hW.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: (0, hW.jsx)(YW.d, {})
        }), mW && (0, hW.jsxs)("div", {
          className: "ShaderPackBrowseMessage",
          children: [cW("shaderPackListing:loadFailed"), (0, hW.jsx)(xW.f, {
            onClick: EW,
            children: cW("general:tryAgain")
          })]
        }), "listing" === (null === iW || void 0 === iW ? void 0 : iW.kind) && ZW > 0 && (0, hW.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: iW.page.results.map((WW => (0, hW.jsx)(HW, {
            pack: {
              packId: WW.packId,
              name: WW.name,
              live: WW
            },
            view: LW,
            favourite: {
              isFavourite: wW.isFavourite(WW.packId),
              onToggle: () => {
                wW.toggle(WW.packId)
              }
            }
          }, WW.packId)))
        }), "owned" === (null === iW || void 0 === iW ? void 0 : iW.kind) && ZW > 0 && (0, hW.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: iW.packs.map((WW => {
            var iW;
            return (0, hW.jsx)(HW, {
              pack: WW,
              view: LW,
              notice: WW.owner ? (0, TW._)(WW.owner, !(null === (iW = WW.live) || void 0 === iW || !iW.renderId), tW, cW)[0] : void 0
            }, WW.packId)
          }))
        }), null !== iW && 0 === ZW && (0, hW.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: cW(oW(NW))
        })]
      })
    }

    function oW(WW) {
      return "mine" === WW.section ? "shaderPackListing:noOwnPacks" : (0, TW.u)(WW) ? "general:noResults" : "favourites" === WW.section ? "shaderPackListing:noFavourites" : "general:noResults"
    }
    var dW = OW(7591);
    const eW = 24,
      vW = {
        favourites: "general:favourites",
        mine: "shaderPackListing:mine"
      };

    function gW() {
      var WW, iW, OW, NW;
      const {
        t: YW
      } = (0, SW.B)(), yW = (0, tW.useNavigatePreserveSearch)(), JW = (0, EW.u)(), {
        userContext: HW,
        isUserContextUpdating: oW
      } = (0, UW.e)(), [gW, DW] = (0, nW.f)(), [VW, pW] = (0, nW.c)(), fW = (0, mW.useRef)(!1), [CW, XW] = (0, ZW.q)(), BW = (0, TW.G)(CW), [qW, RW] = (0, mW.useState)(null !== (WW = BW.searchQuery) && void 0 !== WW ? WW : ""), GW = (0, mW.useRef)(null), {
        searchQuery: IW
      } = BW;
      (0, mW.useEffect)((() => {
        RW(null !== IW && void 0 !== IW ? IW : ""), GW.current && (GW.current.value = null !== IW && void 0 !== IW ? IW : "")
      }), [IW]);
      const [aW, rW] = (0, mW.useState)(null), [zW, FW] = (0, mW.useState)(!1), [QW, Wi] = (0, mW.useState)(!1), [ii, Oi] = (0, mW.useState)(0), mi = (0, mW.useRef)(0), Ei = JSON.stringify(BW), Ni = (0, TW.l)();

      function Pi() {
        null !== Ni ? (yW(Ni), kW.d.set({
          openEverythingMenuName: LW.m.SETTINGS,
          openSettingsCategory: "kA"
        })) : yW("/")
      }

      function Li(WW) {
        XW((iW => {
          (0, TW.kb)(iW, {
            ...BW,
            pageNumber: 1,
            ...WW
          })
        }))
      }

      function ci() {
        const WW = qW.trim() || null;
        Li({
          searchQuery: WW,
          ...null !== WW && !fW.current && (0, TW.p)(BW) && {
            withFeatures: [],
            withoutFeatures: []
          }
        })
      }(0, jW.c)(Pi), (0, nW.b)(), (0, mW.useEffect)((() => {
        if (oW) return;
        const WW = ++mi.current,
          iW = JSON.parse(Ei);
        FW(!0), Wi(!1), async function(WW) {
          if ("mine" === WW.section) return {
            kind: "owned",
            packs: await sW.e.getOwnedShaderPacks(HW)
          };
          const iW = "favourites" === WW.section,
            OW = iW && (0, TW.p)(WW),
            mW = await sW.e.getShaderPacks(HW, {
              sort: iW ? TW.e : WW.sort,
              features: OW ? [] : WW.withFeatures,
              withoutFeatures: OW ? [] : WW.withoutFeatures,
              searchQuery: WW.searchQuery,
              pageNumber: WW.pageNumber,
              pageSize: eW,
              onlyFavourites: iW,
              banned: (0, TW.q)(HW) ? (0, TW.d)(WW.banned) : void 0
            });
          return {
            kind: "listing",
            page: mW
          }
        }(iW).then((iW => {
          mi.current === WW && rW(iW)
        })).catch((iW => {
          mi.current === WW && (console.error("Failed to get shader packs", iW), rW(null), Wi(!0))
        })).finally((() => {
          mi.current === WW && FW(!1)
        }))
      }), [Ei, HW, oW, ii]);
      const [wi, ti] = (0, mW.useState)(null), Zi = null !== (OW = null === (NW = ("listing" === (null === aW || void 0 === aW ? void 0 : aW.kind) ? aW.page.results : (null !== (iW = null === aW || void 0 === aW ? void 0 : aW.packs) && void 0 !== iW ? iW : []).flatMap((WW => WW.live ? [WW.live] : [])))[0]) || void 0 === NW ? void 0 : NW.baselineVersion) && void 0 !== OW ? OW : null;
      (0, mW.useEffect)((() => {
        null !== Zi && ti(Zi)
      }), [Zi]);
      const xi = "mine" === BW.section,
        li = (0, TW.q)(HW),
        Ai = WW => {
          "explore" !== BW.section && (WW.stopPropagation(), WW.preventDefault(), Li({
            section: "explore"
          }))
        };
      return (0, hW.jsxs)("div", {
        className: "ShaderPackBrowse AnimFadeIn",
        children: [(0, hW.jsx)(xW.b, {
          onClick: Pi,
          children: YW(null === Ni ? "homePage:backToGames" : "shaderPackListing:backToSettings")
        }), (0, hW.jsxs)("div", {
          className: "ShaderPackBrowseHeader",
          children: [(0, hW.jsxs)("div", {
            className: "ShaderPackBrowseHeaderRow",
            children: [(0, hW.jsx)("h1", {
              className: "VisuallyHidden",
              children: YW("shaderPackListing:title")
            }), (0, hW.jsxs)("div", {
              className: "ShaderPackBrowseTabs",
              children: [(0, hW.jsx)("div", {
                className: PW()("ShaderPackBrowseSort", {
                  Active: "explore" === BW.section
                }),
                onMouseDownCapture: Ai,
                onTouchEndCapture: Ai,
                children: (0, hW.jsx)(lW.e, {
                  options: cW.u.map((WW => ({
                    value: WW,
                    label: YW(TW.cb[WW])
                  }))),
                  value: BW.sort,
                  onChange: WW => {
                    Li({
                      section: "explore",
                      sort: WW.value
                    })
                  }
                })
              }), Object.keys(vW).map((WW => (0, hW.jsx)(xW.Z, {
                active: BW.section === WW,
                onClick: () => {
                  Li({
                    section: WW
                  })
                },
                children: YW(vW[WW])
              }, WW)))]
            }), !xi && (0, hW.jsx)("div", {
              className: "ShaderPackBrowseDivider"
            }), !xi && (0, hW.jsxs)("div", {
              className: "ShaderPackBrowseSearch",
              children: [(0, hW.jsx)("div", {
                className: "ShaderPackBrowseSearchIcon",
                children: (0, hW.jsx)(wW.c, {
                  name: "magnifying-glass"
                })
              }), (0, hW.jsx)(bW.b, {
                className: "ShaderPackBrowseSearchInput",
                placeholderText: YW("shaderPackListing:searchPlaceholder"),
                maxLength: cW.K,
                defaultValue: qW,
                domRef: GW,
                onValueChange: RW,
                onEnter: ci
              }), (0, hW.jsx)(xW.f, {
                onClick: ci,
                children: YW("general:search")
              })]
            }), !xi && (0, hW.jsxs)(xW.Z, {
              className: PW()("ShaderPackBrowseFilterToggle", {
                Open: VW
              }),
              pressed: VW,
              onClick: () => {
                pW(!VW)
              },
              children: [YW("shaderPackListing:filter"), " ", (0, hW.jsx)(wW.c, {
                name: VW ? "angle-up" : "angle-down"
              })]
            }), (0, hW.jsx)("div", {
              className: "ShaderPackBrowseSpace"
            }), KW.featureFlags.settings.canUseShaderPacks && (0, hW.jsxs)(xW.n, {
              onClick: () => {
                yW(TW.bb)
              },
              children: [(0, hW.jsx)(wW.c, {
                name: "upload"
              }), " ", YW("shaderPackListing:publish")]
            })]
          }), !xi && VW && (0, hW.jsxs)("div", {
            className: "ShaderPackBrowseFeatures",
            children: [TW.B.map((WW => {
              const iW = (0, TW.f)(BW, WW),
                OW = YW(TW.N[WW]);
              return (0, hW.jsx)(xW.Z, {
                className: PW()("ShaderPackBrowseFeature", {
                  Without: "without" === iW
                }),
                active: "with" === iW,
                pressed: null !== iW,
                onClick: () => {
                  fW.current = !0, Li((0, TW.jb)(BW, WW))
                },
                children: (0, hW.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureLabel",
                  children: [(0, hW.jsxs)("span", {
                    className: "ShaderPackBrowseFeatureReserve",
                    children: [(0, hW.jsx)(wW.c, {
                      name: "check"
                    }), " ", OW]
                  }), (0, hW.jsxs)("span", {
                    children: [null !== iW && (0, hW.jsx)(wW.c, {
                      name: "with" === iW ? "check" : "xmark"
                    }), " ", OW]
                  })]
                })
              }, WW)
            })), li && (0, hW.jsx)(xW.Z, {
              className: PW()("ShaderPackBrowseFeature", {
                Without: "without" === BW.banned
              }),
              active: "with" === BW.banned,
              pressed: null !== BW.banned,
              onClick: () => {
                const WW = "without" === BW.banned && !fW.current && (0, TW.p)(BW);
                Li({
                  banned: (0, TW.E)(BW.banned),
                  ...WW && {
                    withFeatures: [],
                    withoutFeatures: []
                  }
                })
              },
              children: (0, hW.jsxs)("span", {
                className: "ShaderPackBrowseFeatureLabel",
                children: [(0, hW.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureReserve",
                  children: [(0, hW.jsx)(wW.c, {
                    name: "check"
                  }), " BANNED"]
                }), (0, hW.jsxs)("span", {
                  children: [null !== BW.banned && (0, hW.jsx)(wW.c, {
                    name: "with" === BW.banned ? "check" : "xmark"
                  }), " BANNED"]
                })]
              })
            })]
          })]
        }), (!xi || null !== wi) && (0, hW.jsx)("div", {
          className: "ShaderPackBrowseScenes",
          children: (0, hW.jsx)(dW.c, {
            selected: gW,
            onSelect: DW,
            imageUrl: WW => null === wi ? null : (0, cW.i)(MW.clientSideServerUrls.s3Url, wi, WW, "thumb")
          })
        }), (0, hW.jsx)(uW, {
          results: aW,
          loading: zW,
          failed: QW,
          onRetry: () => {
            Oi((WW => WW + 1))
          },
          view: BW,
          previewView: gW
        }), "listing" === (null === aW || void 0 === aW ? void 0 : aW.kind) && (0, hW.jsx)(AW.c, {
          className: "ShaderPackBrowsePagination",
          page: aW.page.pageNumber,
          totalPages: aW.page.totalPages,
          onSetPage: WW => {
            XW((iW => {
              (0, ZW.m)(iW, WW)
            }))
          },
          getPageHref: function(WW) {
            const iW = new URLSearchParams(CW);
            (0, ZW.m)(iW, WW);
            const OW = iW.toString();
            return OW ? `${JW.pathname}?${OW}` : JW.pathname
          }
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);