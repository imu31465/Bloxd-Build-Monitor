export const id = 113;
export const ids = [113];
export const modules = {
  5878: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      default: () => kJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(1421),
      eJ = ZJ(926),
      XJ = ZJ.n(eJ),
      AJ = ZJ(227),
      qJ = ZJ(5889),
      jJ = ZJ(942),
      YJ = ZJ(1406),
      hJ = ZJ(3982),
      DJ = ZJ(1329),
      sJ = ZJ(2623),
      nJ = ZJ(3989),
      GJ = ZJ(1566),
      fJ = ZJ(3977),
      xJ = ZJ(1022),
      rJ = ZJ(13),
      vJ = ZJ(1389),
      mJ = ZJ(1098),
      QJ = ZJ(80),
      EJ = ZJ(1086),
      VJ = ZJ(1232),
      KJ = ZJ(1122),
      yJ = ZJ(5886),
      SJ = ZJ(5896),
      IJ = ZJ(990);

    function MJ(JJ) {
      let {
        pack: cJ,
        view: ZJ,
        favourite: FJ,
        notice: UJ
      } = JJ;
      const {
        width: eJ,
        height: AJ
      } = qJ.o.thumb, {
        live: hJ
      } = cJ;
      return (0, IJ.jsx)("div", {
        className: "ShaderPackCard",
        children: (0, IJ.jsxs)("div", {
          className: "ShaderPackCardTile",
          children: [(0, IJ.jsxs)(YJ.LinkPreserveSearch, {
            to: (0, yJ.W)(cJ.packId),
            className: "ShaderPackCardLink",
            children: [hJ && (0, IJ.jsx)("img", {
              className: "ShaderPackCardImage",
              src: (0, qJ.q)(mJ.clientSideServerUrls.s3Url, hJ, ZJ, "thumb"),
              width: eJ,
              height: AJ,
              loading: "lazy",
              alt: "",
              draggable: !1
            }), hJ && (0, IJ.jsx)(SJ.b, {
              item: hJ
            }), !hJ && (0, IJ.jsx)("div", {
              className: "ShaderPackCardImage ShaderPackCardImagePending",
              children: (0, IJ.jsx)(jJ.c, {
                name: "hourglass"
              })
            }), (0, IJ.jsxs)("div", {
              className: "ShaderPackCardText",
              children: [UJ && (0, IJ.jsx)("div", {
                className: XJ()("ShaderPackCardNotice", {
                  Warning: "warning" === UJ.tone
                }),
                children: UJ.text
              }), (0, IJ.jsx)("div", {
                className: "ShaderPackCardName SmallTextBold",
                children: cJ.name
              })]
            })]
          }), hJ && (0, IJ.jsxs)("div", {
            className: "ShaderPackCardStats",
            children: [(0, IJ.jsxs)("div", {
              className: "ShaderPackCardUses SmallTextBold",
              children: [(0, IJ.jsx)(jJ.c, {
                name: "download"
              }), (0, KJ.S)(hJ.downloads)]
            }), FJ && (0, IJ.jsx)(DJ.u, {
              onClick: FJ.onToggle,
              isLiked: !0 === FJ.isFavourite,
              isLoading: null === FJ.isFavourite
            })]
          })]
        })
      })
    }
    var bJ = ZJ(5903);

    function wJ(JJ) {
      let {
        results: cJ,
        loading: ZJ,
        failed: FJ,
        onRetry: UJ,
        view: eJ,
        previewView: AJ
      } = JJ;
      const {
        t: qJ
      } = (0, EJ.F)(), jJ = (0, bJ.h)(), YJ = Date.now(), hJ = null === cJ ? 0 : "owned" === cJ.kind ? cJ.packs.length : cJ.page.results.length;
      return (0, IJ.jsxs)("div", {
        className: XJ()("ShaderPackBrowseResults", {
          Loading: ZJ && null !== cJ
        }),
        children: [ZJ && null === cJ && (0, IJ.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: (0, IJ.jsx)(VJ.c, {})
        }), FJ && (0, IJ.jsxs)("div", {
          className: "ShaderPackBrowseMessage",
          children: [qJ("shaderPackListing:loadFailed"), (0, IJ.jsx)(DJ.d, {
            onClick: UJ,
            children: qJ("general:tryAgain")
          })]
        }), "listing" === (null === cJ || void 0 === cJ ? void 0 : cJ.kind) && hJ > 0 && (0, IJ.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: cJ.page.results.map((JJ => (0, IJ.jsx)(MJ, {
            pack: {
              packId: JJ.packId,
              name: JJ.name,
              live: JJ
            },
            view: AJ,
            favourite: {
              isFavourite: jJ.isFavourite(JJ.packId),
              onToggle: () => {
                jJ.toggle(JJ.packId)
              }
            }
          }, JJ.packId)))
        }), "owned" === (null === cJ || void 0 === cJ ? void 0 : cJ.kind) && hJ > 0 && (0, IJ.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: cJ.packs.map((JJ => {
            var cJ;
            return (0, IJ.jsx)(MJ, {
              pack: JJ,
              view: AJ,
              notice: JJ.owner ? (0, yJ.U)(JJ.owner, !(null === (cJ = JJ.live) || void 0 === cJ || !cJ.renderId), YJ, qJ)[0] : void 0
            }, JJ.packId)
          }))
        }), null !== cJ && 0 === hJ && (0, IJ.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: qJ(WJ(eJ))
        })]
      })
    }

    function WJ(JJ) {
      return "mine" === JJ.section ? "shaderPackListing:noOwnPacks" : (0, yJ.A)(JJ) ? "general:noResults" : "favourites" === JJ.section ? "shaderPackListing:noFavourites" : "general:noResults"
    }
    var gJ = ZJ(5913);
    const HJ = 24,
      PJ = {
        favourites: "general:favourites",
        mine: "shaderPackListing:mine"
      };

    function kJ() {
      var JJ, cJ, ZJ, eJ;
      const {
        t: VJ
      } = (0, EJ.F)(), KJ = (0, YJ.useNavigatePreserveSearch)(), SJ = (0, UJ.q)(), {
        userContext: MJ,
        isUserContextUpdating: WJ
      } = (0, xJ.d)(), [kJ, pJ] = (0, bJ.g)(), [dJ, zJ] = (0, bJ.c)(), NJ = (0, FJ.useRef)(!1), [OJ, TJ] = (0, hJ.n)(), CJ = (0, yJ.K)(OJ), [uJ, iJ] = (0, FJ.useState)(null !== (JJ = CJ.searchQuery) && void 0 !== JJ ? JJ : ""), RJ = (0, FJ.useRef)(null), {
        searchQuery: LJ
      } = CJ;
      (0, FJ.useEffect)((() => {
        iJ(null !== LJ && void 0 !== LJ ? LJ : ""), RJ.current && (RJ.current.value = null !== LJ && void 0 !== LJ ? LJ : "")
      }), [LJ]);
      const [aJ, BJ] = (0, FJ.useState)(null), [tJ, oJ] = (0, FJ.useState)(!1), [lJ, Jc] = (0, FJ.useState)(!1), [cc, Zc] = (0, FJ.useState)(0), Fc = (0, FJ.useRef)(0), Uc = JSON.stringify(CJ), ec = (0, yJ.r)();

      function Xc() {
        null !== ec ? (KJ(ec), rJ.d.set({
          openEverythingMenuName: AJ.m.SETTINGS,
          openSettingsCategory: "Jn"
        })) : KJ("/")
      }

      function Ac(JJ) {
        TJ((cJ => {
          (0, yJ.kb)(cJ, {
            ...CJ,
            pageNumber: 1,
            ...JJ
          })
        }))
      }

      function qc() {
        const JJ = uJ.trim() || null;
        Ac({
          searchQuery: JJ,
          ...null !== JJ && !NJ.current && (0, yJ.s)(CJ) && {
            withFeatures: [],
            withoutFeatures: []
          }
        })
      }(0, fJ.d)(Xc), (0, bJ.b)(), (0, FJ.useEffect)((() => {
        if (WJ) return;
        const JJ = ++Fc.current,
          cJ = JSON.parse(Uc);
        oJ(!0), Jc(!1), async function(JJ) {
          if ("mine" === JJ.section) return {
            kind: "owned",
            packs: await vJ.c.getOwnedShaderPacks(MJ)
          };
          const cJ = "favourites" === JJ.section,
            ZJ = cJ && (0, yJ.s)(JJ),
            FJ = await vJ.c.getShaderPacks(MJ, {
              sort: cJ ? yJ.g : JJ.sort,
              features: ZJ ? [] : JJ.withFeatures,
              withoutFeatures: ZJ ? [] : JJ.withoutFeatures,
              searchQuery: JJ.searchQuery,
              pageNumber: JJ.pageNumber,
              pageSize: HJ,
              onlyFavourites: cJ,
              banned: (0, yJ.w)(MJ) ? (0, yJ.c)(JJ.banned) : void 0
            });
          return {
            kind: "listing",
            page: FJ
          }
        }(cJ).then((cJ => {
          Fc.current === JJ && BJ(cJ)
        })).catch((cJ => {
          Fc.current === JJ && (console.error("Failed to get shader packs", cJ), BJ(null), Jc(!0))
        })).finally((() => {
          Fc.current === JJ && oJ(!1)
        }))
      }), [Uc, MJ, WJ, cc]);
      const [jc, Yc] = (0, FJ.useState)(null), hc = null !== (ZJ = null === (eJ = ("listing" === (null === aJ || void 0 === aJ ? void 0 : aJ.kind) ? aJ.page.results : (null !== (cJ = null === aJ || void 0 === aJ ? void 0 : aJ.packs) && void 0 !== cJ ? cJ : []).flatMap((JJ => JJ.live ? [JJ.live] : [])))[0]) || void 0 === eJ ? void 0 : eJ.baselineVersion) && void 0 !== ZJ ? ZJ : null;
      (0, FJ.useEffect)((() => {
        null !== hc && Yc(hc)
      }), [hc]);
      const Dc = "mine" === CJ.section,
        sc = (0, yJ.w)(MJ),
        nc = JJ => {
          "explore" !== CJ.section && (JJ.stopPropagation(), JJ.preventDefault(), Ac({
            section: "explore"
          }))
        };
      return (0, IJ.jsxs)("div", {
        className: "ShaderPackBrowse AnimFadeIn",
        children: [(0, IJ.jsx)(DJ.b, {
          onClick: Xc,
          children: VJ(null === ec ? "homePage:backToGames" : "shaderPackListing:backToSettings")
        }), (0, IJ.jsxs)("div", {
          className: "ShaderPackBrowseHeader",
          children: [(0, IJ.jsxs)("div", {
            className: "ShaderPackBrowseHeaderRow",
            children: [(0, IJ.jsx)("h1", {
              className: "VisuallyHidden",
              children: VJ("shaderPackListing:title")
            }), (0, IJ.jsxs)("div", {
              className: "ShaderPackBrowseTabs",
              children: [(0, IJ.jsx)("div", {
                className: XJ()("ShaderPackBrowseSort", {
                  Active: "explore" === CJ.section
                }),
                onMouseDownCapture: nc,
                onTouchEndCapture: nc,
                children: (0, IJ.jsx)(sJ.d, {
                  options: qJ.t.map((JJ => ({
                    value: JJ,
                    label: VJ(yJ.ab[JJ])
                  }))),
                  value: CJ.sort,
                  onChange: JJ => {
                    Ac({
                      section: "explore",
                      sort: JJ.value
                    })
                  }
                })
              }), Object.keys(PJ).map((JJ => (0, IJ.jsx)(DJ.O, {
                active: CJ.section === JJ,
                onClick: () => {
                  Ac({
                    section: JJ
                  })
                },
                children: VJ(PJ[JJ])
              }, JJ)))]
            }), !Dc && (0, IJ.jsx)("div", {
              className: "ShaderPackBrowseDivider"
            }), !Dc && (0, IJ.jsxs)("div", {
              className: "ShaderPackBrowseSearch",
              children: [(0, IJ.jsx)("div", {
                className: "ShaderPackBrowseSearchIcon",
                children: (0, IJ.jsx)(jJ.c, {
                  name: "magnifying-glass"
                })
              }), (0, IJ.jsx)(GJ.e, {
                className: "ShaderPackBrowseSearchInput",
                placeholderText: VJ("shaderPackListing:searchPlaceholder"),
                maxLength: qJ.E,
                defaultValue: uJ,
                domRef: RJ,
                onValueChange: iJ,
                onEnter: qc
              }), (0, IJ.jsx)(DJ.d, {
                onClick: qc,
                children: VJ("general:search")
              })]
            }), !Dc && (0, IJ.jsxs)(DJ.O, {
              className: XJ()("ShaderPackBrowseFilterToggle", {
                Open: dJ
              }),
              pressed: dJ,
              onClick: () => {
                zJ(!dJ)
              },
              children: [VJ("shaderPackListing:filter"), " ", (0, IJ.jsx)(jJ.c, {
                name: dJ ? "angle-up" : "angle-down"
              })]
            }), (0, IJ.jsx)("div", {
              className: "ShaderPackBrowseSpace"
            }), QJ.featureFlags.settings.canUseShaderPacks && (0, IJ.jsxs)(DJ.m, {
              onClick: () => {
                KJ(yJ.Y)
              },
              children: [(0, IJ.jsx)(jJ.c, {
                name: "upload"
              }), " ", VJ("shaderPackListing:publish")]
            })]
          }), !Dc && dJ && (0, IJ.jsxs)("div", {
            className: "ShaderPackBrowseFeatures",
            children: [yJ.G.map((JJ => {
              const cJ = (0, yJ.j)(CJ, JJ),
                ZJ = VJ(yJ.N[JJ]);
              return (0, IJ.jsx)(DJ.O, {
                className: XJ()("ShaderPackBrowseFeature", {
                  Without: "without" === cJ
                }),
                active: "with" === cJ,
                pressed: null !== cJ,
                onClick: () => {
                  NJ.current = !0, Ac((0, yJ.ib)(CJ, JJ))
                },
                children: (0, IJ.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureLabel",
                  children: [(0, IJ.jsxs)("span", {
                    className: "ShaderPackBrowseFeatureReserve",
                    children: [(0, IJ.jsx)(jJ.c, {
                      name: "check"
                    }), " ", ZJ]
                  }), (0, IJ.jsxs)("span", {
                    children: [null !== cJ && (0, IJ.jsx)(jJ.c, {
                      name: "with" === cJ ? "check" : "xmark"
                    }), " ", ZJ]
                  })]
                })
              }, JJ)
            })), sc && (0, IJ.jsx)(DJ.O, {
              className: XJ()("ShaderPackBrowseFeature", {
                Without: "without" === CJ.banned
              }),
              active: "with" === CJ.banned,
              pressed: null !== CJ.banned,
              onClick: () => {
                const JJ = "without" === CJ.banned && !NJ.current && (0, yJ.s)(CJ);
                Ac({
                  banned: (0, yJ.H)(CJ.banned),
                  ...JJ && {
                    withFeatures: [],
                    withoutFeatures: []
                  }
                })
              },
              children: (0, IJ.jsxs)("span", {
                className: "ShaderPackBrowseFeatureLabel",
                children: [(0, IJ.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureReserve",
                  children: [(0, IJ.jsx)(jJ.c, {
                    name: "check"
                  }), " BANNED"]
                }), (0, IJ.jsxs)("span", {
                  children: [null !== CJ.banned && (0, IJ.jsx)(jJ.c, {
                    name: "with" === CJ.banned ? "check" : "xmark"
                  }), " BANNED"]
                })]
              })
            })]
          })]
        }), (!Dc || null !== jc) && (0, IJ.jsx)("div", {
          className: "ShaderPackBrowseScenes",
          children: (0, IJ.jsx)(gJ.e, {
            selected: kJ,
            onSelect: pJ,
            imageUrl: JJ => null === jc ? null : (0, qJ.l)(mJ.clientSideServerUrls.s3Url, jc, JJ, "thumb")
          })
        }), (0, IJ.jsx)(wJ, {
          results: aJ,
          loading: tJ,
          failed: lJ,
          onRetry: () => {
            Zc((JJ => JJ + 1))
          },
          view: CJ,
          previewView: kJ
        }), "listing" === (null === aJ || void 0 === aJ ? void 0 : aJ.kind) && (0, IJ.jsx)(nJ.e, {
          className: "ShaderPackBrowsePagination",
          page: aJ.page.pageNumber,
          totalPages: aJ.page.totalPages,
          onSetPage: JJ => {
            TJ((cJ => {
              (0, hJ.m)(cJ, JJ)
            }))
          },
          getPageHref: function(JJ) {
            const cJ = new URLSearchParams(OJ);
            (0, hJ.m)(cJ, JJ);
            const ZJ = cJ.toString();
            return ZJ ? `${SJ.pathname}?${ZJ}` : SJ.pathname
          }
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);