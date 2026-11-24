export const id = 127;
export const ids = [127];
export const modules = {
  6749: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      default: () => VS
    });
    var tS = gS(64),
      bS = gS(1622),
      XS = gS(1121),
      xS = gS.n(XS),
      NS = gS(369),
      qS = gS(6760),
      uS = gS(1127),
      IS = gS(1608),
      fS = gS(4693),
      kS = gS(1528),
      aS = gS(3300),
      KS = gS(4697),
      jS = gS(1774),
      GS = gS(4691),
      CS = gS(1211),
      nS = gS(24),
      PS = gS(1588),
      QS = gS(1286),
      DS = gS(104),
      wS = gS(1281),
      hS = gS(1419),
      ZS = gS(1309),
      JS = gS(6754),
      OS = gS(6768),
      dS = gS(1181);

    function cS(SS) {
      let {
        pack: HS,
        view: gS,
        favourite: tS,
        notice: bS
      } = SS;
      const {
        width: XS,
        height: NS
      } = qS.w.thumb, {
        live: fS
      } = HS;
      return (0, dS.jsx)("div", {
        className: "ShaderPackCard",
        children: (0, dS.jsxs)("div", {
          className: "ShaderPackCardTile",
          children: [(0, dS.jsxs)(IS.LinkPreserveSearch, {
            to: (0, JS.W)(HS.packId),
            className: "ShaderPackCardLink",
            children: [fS && (0, dS.jsx)("img", {
              className: "ShaderPackCardImage",
              src: (0, qS.z)(QS.clientSideServerUrls.s3Url, fS, gS, "thumb"),
              width: XS,
              height: NS,
              loading: "lazy",
              alt: "",
              draggable: !1
            }), fS && (0, dS.jsx)(OS.c, {
              item: fS
            }), !fS && (0, dS.jsx)("div", {
              className: "ShaderPackCardImage ShaderPackCardImagePending",
              children: (0, dS.jsx)(uS.d, {
                name: "hourglass"
              })
            }), (0, dS.jsxs)("div", {
              className: "ShaderPackCardText",
              children: [bS && (0, dS.jsx)("div", {
                className: xS()("ShaderPackCardNotice", {
                  Warning: "warning" === bS.tone
                }),
                children: bS.text
              }), (0, dS.jsx)("div", {
                className: "ShaderPackCardName SmallTextBold",
                children: HS.name
              })]
            })]
          }), fS && (0, dS.jsxs)("div", {
            className: "ShaderPackCardStats",
            children: [(0, dS.jsxs)("div", {
              className: "ShaderPackCardUses SmallTextBold",
              children: [(0, dS.jsx)(uS.d, {
                name: "download"
              }), (0, ZS.R)(fS.downloads)]
            }), tS && (0, dS.jsx)(kS.w, {
              onClick: tS.onToggle,
              isLiked: !0 === tS.isFavourite,
              isLoading: null === tS.isFavourite
            })]
          })]
        })
      })
    }
    var vS = gS(6775);

    function ES(SS) {
      let {
        results: HS,
        loading: gS,
        failed: tS,
        onRetry: bS,
        view: XS,
        previewView: NS
      } = SS;
      const {
        t: qS
      } = (0, wS.F)(), uS = (0, vS.j)(), IS = Date.now(), fS = null === HS ? 0 : "owned" === HS.kind ? HS.packs.length : HS.page.results.length;
      return (0, dS.jsxs)("div", {
        className: xS()("ShaderPackBrowseResults", {
          Loading: gS && null !== HS
        }),
        children: [gS && null === HS && (0, dS.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: (0, dS.jsx)(hS.c, {})
        }), tS && (0, dS.jsxs)("div", {
          className: "ShaderPackBrowseMessage",
          children: [qS("shaderPackListing:loadFailed"), (0, dS.jsx)(kS.g, {
            onClick: bS,
            children: qS("general:tryAgain")
          })]
        }), "listing" === (null === HS || void 0 === HS ? void 0 : HS.kind) && fS > 0 && (0, dS.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: HS.page.results.map((SS => (0, dS.jsx)(cS, {
            pack: {
              packId: SS.packId,
              name: SS.name,
              live: SS
            },
            view: NS,
            favourite: {
              isFavourite: uS.isFavourite(SS.packId),
              onToggle: () => {
                uS.toggle(SS.packId)
              }
            }
          }, SS.packId)))
        }), "owned" === (null === HS || void 0 === HS ? void 0 : HS.kind) && fS > 0 && (0, dS.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: HS.packs.map((SS => {
            var HS;
            return (0, dS.jsx)(cS, {
              pack: SS,
              view: NS,
              notice: SS.owner ? (0, JS.S)(SS.owner, !(null === (HS = SS.live) || void 0 === HS || !HS.renderId), IS, qS)[0] : void 0
            }, SS.packId)
          }))
        }), null !== HS && 0 === fS && (0, dS.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: qS(LS(XS))
        })]
      })
    }

    function LS(SS) {
      return "mine" === SS.section ? "shaderPackListing:noOwnPacks" : (0, JS.p)(SS) ? "general:noResults" : "favourites" === SS.section ? "shaderPackListing:noFavourites" : "general:noResults"
    }
    var YS = gS(6783);
    const AS = 24,
      yS = {
        favourites: "general:favourites",
        mine: "shaderPackListing:mine"
      };

    function VS() {
      var SS, HS, gS, XS;
      const {
        t: hS
      } = (0, wS.F)(), ZS = (0, IS.useNavigatePreserveSearch)(), OS = (0, bS.t)(), {
        userContext: cS,
        isUserContextUpdating: LS
      } = (0, CS.b)(), [VS, iS] = (0, vS.h)(), [WS, zS] = (0, vS.g)(), US = (0, tS.useRef)(!1), [pS, sS] = (0, fS.m)(), BS = (0, JS.A)(pS), [MS, FS] = (0, tS.useState)(null !== (SS = BS.searchQuery) && void 0 !== SS ? SS : ""), RS = (0, tS.useRef)(null), {
        searchQuery: TS
      } = BS;
      (0, tS.useEffect)((() => {
        FS(null !== TS && void 0 !== TS ? TS : ""), RS.current && (RS.current.value = null !== TS && void 0 !== TS ? TS : "")
      }), [TS]);
      const [oS, lS] = (0, tS.useState)(null), [mS, eS] = (0, tS.useState)(!1), [rS, SH] = (0, tS.useState)(!1), [HH, gH] = (0, tS.useState)(0), tH = (0, tS.useRef)(0), bH = JSON.stringify(BS), XH = (0, JS.l)();

      function xH() {
        null !== XH ? (ZS(XH), nS.b.set({
          openEverythingMenuName: NS.q.SETTINGS,
          openSettingsCategory: "bK"
        })) : ZS("/")
      }

      function NH(SS) {
        sS((HS => {
          (0, JS.gb)(HS, {
            ...BS,
            pageNumber: 1,
            ...SS
          })
        }))
      }

      function qH() {
        const SS = MS.trim() || null;
        NH({
          searchQuery: SS,
          ...null !== SS && !US.current && (0, JS.n)(BS) && {
            withFeatures: [],
            withoutFeatures: []
          }
        })
      }(0, GS.c)(xH), (0, vS.d)(), (0, tS.useEffect)((() => {
        if (LS) return;
        const SS = ++tH.current,
          HS = JSON.parse(bH);
        eS(!0), SH(!1), async function(SS) {
          if ("mine" === SS.section) return {
            kind: "owned",
            packs: await PS.b.getOwnedShaderPacks(cS)
          };
          const HS = "favourites" === SS.section,
            gS = HS && (0, JS.n)(SS),
            tS = await PS.b.getShaderPacks(cS, {
              sort: HS ? JS.h : SS.sort,
              features: gS ? [] : SS.withFeatures,
              withoutFeatures: gS ? [] : SS.withoutFeatures,
              searchQuery: SS.searchQuery,
              pageNumber: SS.pageNumber,
              pageSize: AS,
              onlyFavourites: HS,
              banned: (0, JS.o)(cS) ? (0, JS.e)(SS.banned) : void 0
            });
          return {
            kind: "listing",
            page: tS
          }
        }(HS).then((HS => {
          tH.current === SS && lS(HS)
        })).catch((HS => {
          tH.current === SS && (console.error("Failed to get shader packs", HS), lS(null), SH(!0))
        })).finally((() => {
          tH.current === SS && eS(!1)
        }))
      }), [bH, cS, LS, HH]);
      const [uH, IH] = (0, tS.useState)(null), fH = null !== (gS = null === (XS = ("listing" === (null === oS || void 0 === oS ? void 0 : oS.kind) ? oS.page.results : (null !== (HS = null === oS || void 0 === oS ? void 0 : oS.packs) && void 0 !== HS ? HS : []).flatMap((SS => SS.live ? [SS.live] : [])))[0]) || void 0 === XS ? void 0 : XS.baselineVersion) && void 0 !== gS ? gS : null;
      (0, tS.useEffect)((() => {
        null !== fH && IH(fH)
      }), [fH]);
      const kH = "mine" === BS.section,
        aH = (0, JS.o)(cS),
        KH = SS => {
          "explore" !== BS.section && (SS.stopPropagation(), SS.preventDefault(), NH({
            section: "explore"
          }))
        };
      return (0, dS.jsxs)("div", {
        className: "ShaderPackBrowse AnimFadeIn",
        children: [(0, dS.jsx)(kS.d, {
          onClick: xH,
          children: hS(null === XH ? "homePage:backToGames" : "shaderPackListing:backToSettings")
        }), (0, dS.jsxs)("div", {
          className: "ShaderPackBrowseHeader",
          children: [(0, dS.jsxs)("div", {
            className: "ShaderPackBrowseHeaderRow",
            children: [(0, dS.jsx)("h1", {
              className: "VisuallyHidden",
              children: hS("shaderPackListing:title")
            }), (0, dS.jsxs)("div", {
              className: "ShaderPackBrowseTabs",
              children: [(0, dS.jsx)("div", {
                className: xS()("ShaderPackBrowseSort", {
                  Active: "explore" === BS.section
                }),
                onMouseDownCapture: KH,
                onTouchEndCapture: KH,
                children: (0, dS.jsx)(aS.e, {
                  options: qS.C.map((SS => ({
                    value: SS,
                    label: hS(JS.ab[SS])
                  }))),
                  value: BS.sort,
                  onChange: SS => {
                    NH({
                      section: "explore",
                      sort: SS.value
                    })
                  }
                })
              }), Object.keys(yS).map((SS => (0, dS.jsx)(kS.P, {
                active: BS.section === SS,
                onClick: () => {
                  NH({
                    section: SS
                  })
                },
                children: hS(yS[SS])
              }, SS)))]
            }), !kH && (0, dS.jsx)("div", {
              className: "ShaderPackBrowseDivider"
            }), !kH && (0, dS.jsxs)("div", {
              className: "ShaderPackBrowseSearch",
              children: [(0, dS.jsx)("div", {
                className: "ShaderPackBrowseSearchIcon",
                children: (0, dS.jsx)(uS.d, {
                  name: "magnifying-glass"
                })
              }), (0, dS.jsx)(jS.e, {
                className: "ShaderPackBrowseSearchInput",
                placeholderText: hS("shaderPackListing:searchPlaceholder"),
                maxLength: qS.Q,
                defaultValue: MS,
                domRef: RS,
                onValueChange: FS,
                onEnter: qH
              }), (0, dS.jsx)(kS.g, {
                onClick: qH,
                children: hS("general:search")
              })]
            }), !kH && (0, dS.jsxs)(kS.P, {
              className: xS()("ShaderPackBrowseFilterToggle", {
                Open: WS
              }),
              pressed: WS,
              onClick: () => {
                zS(!WS)
              },
              children: [hS("shaderPackListing:filter"), " ", (0, dS.jsx)(uS.d, {
                name: WS ? "angle-up" : "angle-down"
              })]
            }), (0, dS.jsx)("div", {
              className: "ShaderPackBrowseSpace"
            }), DS.featureFlags.settings.canUseShaderPacks && (0, dS.jsxs)(kS.p, {
              onClick: () => {
                ZS(JS._)
              },
              children: [(0, dS.jsx)(uS.d, {
                name: "upload"
              }), " ", hS("shaderPackListing:publish")]
            })]
          }), !kH && WS && (0, dS.jsxs)("div", {
            className: "ShaderPackBrowseFeatures",
            children: [JS.w.map((SS => {
              const HS = (0, JS.j)(BS, SS),
                gS = hS(JS.J[SS]);
              return (0, dS.jsx)(kS.P, {
                className: xS()("ShaderPackBrowseFeature", {
                  Without: "without" === HS
                }),
                active: "with" === HS,
                pressed: null !== HS,
                onClick: () => {
                  US.current = !0, NH((0, JS.eb)(BS, SS))
                },
                children: (0, dS.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureLabel",
                  children: [(0, dS.jsxs)("span", {
                    className: "ShaderPackBrowseFeatureReserve",
                    children: [(0, dS.jsx)(uS.d, {
                      name: "check"
                    }), " ", gS]
                  }), (0, dS.jsxs)("span", {
                    children: [null !== HS && (0, dS.jsx)(uS.d, {
                      name: "with" === HS ? "check" : "xmark"
                    }), " ", gS]
                  })]
                })
              }, SS)
            })), aH && (0, dS.jsx)(kS.P, {
              className: xS()("ShaderPackBrowseFeature", {
                Without: "without" === BS.banned
              }),
              active: "with" === BS.banned,
              pressed: null !== BS.banned,
              onClick: () => {
                const SS = "without" === BS.banned && !US.current && (0, JS.n)(BS);
                NH({
                  banned: (0, JS.y)(BS.banned),
                  ...SS && {
                    withFeatures: [],
                    withoutFeatures: []
                  }
                })
              },
              children: (0, dS.jsxs)("span", {
                className: "ShaderPackBrowseFeatureLabel",
                children: [(0, dS.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureReserve",
                  children: [(0, dS.jsx)(uS.d, {
                    name: "check"
                  }), " BANNED"]
                }), (0, dS.jsxs)("span", {
                  children: [null !== BS.banned && (0, dS.jsx)(uS.d, {
                    name: "with" === BS.banned ? "check" : "xmark"
                  }), " BANNED"]
                })]
              })
            })]
          })]
        }), (!kH || null !== uH) && (0, dS.jsx)("div", {
          className: "ShaderPackBrowseScenes",
          children: (0, dS.jsx)(YS.e, {
            selected: VS,
            onSelect: iS,
            imageUrl: SS => null === uH ? null : (0, qS.u)(QS.clientSideServerUrls.s3Url, uH, SS, "thumb")
          })
        }), (0, dS.jsx)(ES, {
          results: oS,
          loading: mS,
          failed: rS,
          onRetry: () => {
            gH((SS => SS + 1))
          },
          view: BS,
          previewView: VS
        }), "listing" === (null === oS || void 0 === oS ? void 0 : oS.kind) && (0, dS.jsx)(KS.c, {
          className: "ShaderPackBrowsePagination",
          page: oS.page.pageNumber,
          totalPages: oS.page.totalPages,
          onSetPage: SS => {
            sS((HS => {
              (0, fS.i)(HS, SS)
            }))
          },
          getPageHref: function(SS) {
            const HS = new URLSearchParams(pS);
            (0, fS.i)(HS, SS);
            const gS = HS.toString();
            return gS ? `${OS.pathname}?${gS}` : OS.pathname
          }
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);