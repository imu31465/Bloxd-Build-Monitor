export const id = 142;
export const ids = [142];
export const modules = {
  7104: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      default: () => qH
    });
    var AH = LH(45),
      rH = LH(1520),
      SH = LH(1038),
      hH = LH.n(SH),
      tH = LH(304),
      zH = LH(7114),
      CH = LH(1315),
      EH = LH(1509),
      XH = LH(4969),
      GH = LH(1455),
      YH = LH(3473),
      uH = LH(4973),
      QH = LH(1706),
      WH = LH(4961),
      MH = LH(1061),
      xH = LH(15),
      vH = LH(1502),
      PH = LH(1131),
      TH = LH(81),
      UH = LH(1123),
      VH = LH(1313),
      OH = LH(1168),
      bH = LH(7111),
      kH = LH(7121),
      mH = LH(1225);

    function oH(HH) {
      let {
        pack: BH,
        view: LH,
        favourite: AH,
        notice: rH
      } = HH;
      const {
        width: SH,
        height: tH
      } = zH.w.thumb, {
        live: XH
      } = BH;
      return (0, mH.jsx)("div", {
        className: "ShaderPackCard",
        children: (0, mH.jsxs)("div", {
          className: "ShaderPackCardTile",
          children: [(0, mH.jsxs)(EH.LinkPreserveSearch, {
            to: (0, bH.S)(BH.packId),
            className: "ShaderPackCardLink",
            children: [XH && (0, mH.jsx)("img", {
              className: "ShaderPackCardImage",
              src: (0, zH.x)(PH.clientSideServerUrls.s3Url, XH, LH, "thumb"),
              width: SH,
              height: tH,
              loading: "lazy",
              alt: "",
              draggable: !1
            }), XH && (0, mH.jsx)(kH.d, {
              item: XH
            }), !XH && (0, mH.jsx)("div", {
              className: "ShaderPackCardImage ShaderPackCardImagePending",
              children: (0, mH.jsx)(CH.c, {
                name: "hourglass"
              })
            }), (0, mH.jsxs)("div", {
              className: "ShaderPackCardText",
              children: [rH && (0, mH.jsx)("div", {
                className: hH()("ShaderPackCardNotice", {
                  Warning: "warning" === rH.tone
                }),
                children: rH.text
              }), (0, mH.jsx)("div", {
                className: "ShaderPackCardName SmallTextBold",
                children: BH.name
              })]
            })]
          }), XH && (0, mH.jsxs)("div", {
            className: "ShaderPackCardStats",
            children: [(0, mH.jsxs)("div", {
              className: "ShaderPackCardUses SmallTextBold",
              children: [(0, mH.jsx)(CH.c, {
                name: "download"
              }), (0, OH.T)(XH.downloads)]
            }), AH && (0, mH.jsx)(GH.C, {
              onClick: AH.onToggle,
              isLiked: !0 === AH.isFavourite,
              isLoading: null === AH.isFavourite
            })]
          })]
        })
      })
    }
    var IH = LH(7129);

    function fH(HH) {
      let {
        results: BH,
        loading: LH,
        failed: AH,
        onRetry: rH,
        view: SH,
        previewView: tH
      } = HH;
      const {
        t: zH
      } = (0, UH.B)(), CH = (0, IH.k)(), EH = Date.now(), XH = null === BH ? 0 : "owned" === BH.kind ? BH.packs.length : BH.page.results.length;
      return (0, mH.jsxs)("div", {
        className: hH()("ShaderPackBrowseResults", {
          Loading: LH && null !== BH
        }),
        children: [LH && null === BH && (0, mH.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: (0, mH.jsx)(VH.d, {})
        }), AH && (0, mH.jsxs)("div", {
          className: "ShaderPackBrowseMessage",
          children: [zH("shaderPackListing:loadFailed"), (0, mH.jsx)(GH.i, {
            onClick: rH,
            children: zH("general:tryAgain")
          })]
        }), "listing" === (null === BH || void 0 === BH ? void 0 : BH.kind) && XH > 0 && (0, mH.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: BH.page.results.map((HH => (0, mH.jsx)(oH, {
            pack: {
              packId: HH.packId,
              name: HH.name,
              live: HH
            },
            view: tH,
            favourite: {
              isFavourite: CH.isFavourite(HH.packId),
              onToggle: () => {
                CH.toggle(HH.packId)
              }
            }
          }, HH.packId)))
        }), "owned" === (null === BH || void 0 === BH ? void 0 : BH.kind) && XH > 0 && (0, mH.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: BH.packs.map((HH => {
            var BH;
            return (0, mH.jsx)(oH, {
              pack: HH,
              view: tH,
              notice: HH.owner ? (0, bH.R)(HH.owner, !(null === (BH = HH.live) || void 0 === BH || !BH.renderId), EH, zH)[0] : void 0
            }, HH.packId)
          }))
        }), null !== BH && 0 === XH && (0, mH.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: zH(lH(SH))
        })]
      })
    }

    function lH(HH) {
      return "mine" === HH.section ? "shaderPackListing:noOwnPacks" : (0, bH.q)(HH) ? "general:noResults" : "favourites" === HH.section ? "shaderPackListing:noFavourites" : "general:noResults"
    }
    var KH = LH(7141);
    const cH = 24,
      eH = {
        favourites: "general:favourites",
        mine: "shaderPackListing:mine"
      };

    function qH() {
      var HH, BH, LH, SH;
      const {
        t: VH
      } = (0, UH.B)(), OH = (0, EH.useNavigatePreserveSearch)(), kH = (0, rH.s)(), {
        userContext: oH,
        isUserContextUpdating: lH
      } = (0, MH.e)(), [qH, gH] = (0, IH.i)(), [NH, RH] = (0, IH.g)(), jH = (0, AH.useRef)(!1), [nH, FH] = (0, XH.p)(), DH = (0, bH.B)(nH), [wH, ZH] = (0, AH.useState)(null !== (HH = DH.searchQuery) && void 0 !== HH ? HH : ""), dH = (0, AH.useRef)(null), {
        searchQuery: aH
      } = DH;
      (0, AH.useEffect)((() => {
        ZH(null !== aH && void 0 !== aH ? aH : ""), dH.current && (dH.current.value = null !== aH && void 0 !== aH ? aH : "")
      }), [aH]);
      const [sH, JH] = (0, AH.useState)(null), [iH, pH] = (0, AH.useState)(!1), [yH, HB] = (0, AH.useState)(!1), [BB, LB] = (0, AH.useState)(0), AB = (0, AH.useRef)(0), rB = JSON.stringify(DH), SB = (0, bH.m)();

      function hB() {
        null !== SB ? (OH(SB), xH.c.set({
          openEverythingMenuName: tH.o.SETTINGS,
          openSettingsCategory: "Cu"
        })) : OH("/")
      }

      function tB(HH) {
        FH((BH => {
          (0, bH.bb)(BH, {
            ...DH,
            pageNumber: 1,
            ...HH
          })
        }))
      }

      function zB() {
        const HH = wH.trim() || null;
        tB({
          searchQuery: HH,
          ...null !== HH && !jH.current && (0, bH.n)(DH) && {
            withFeatures: [],
            withoutFeatures: []
          }
        })
      }(0, WH.c)(hB), (0, IH.d)(), (0, AH.useEffect)((() => {
        if (lH) return;
        const HH = ++AB.current,
          BH = JSON.parse(rB);
        pH(!0), HB(!1), async function(HH) {
          if ("mine" === HH.section) return {
            kind: "owned",
            packs: await vH.d.getOwnedShaderPacks(oH)
          };
          const BH = "favourites" === HH.section,
            LH = BH && (0, bH.n)(HH),
            AH = await vH.d.getShaderPacks(oH, {
              sort: BH ? bH.h : HH.sort,
              features: LH ? [] : HH.withFeatures,
              withoutFeatures: LH ? [] : HH.withoutFeatures,
              searchQuery: HH.searchQuery,
              pageNumber: HH.pageNumber,
              pageSize: cH,
              onlyFavourites: BH,
              banned: (0, bH.p)(oH) ? (0, bH.e)(HH.banned) : void 0
            });
          return {
            kind: "listing",
            page: AH
          }
        }(BH).then((BH => {
          AB.current === HH && JH(BH)
        })).catch((BH => {
          AB.current === HH && (console.error("Failed to get shader packs", BH), JH(null), HB(!0))
        })).finally((() => {
          AB.current === HH && pH(!1)
        }))
      }), [rB, oH, lH, BB]);
      const [CB, EB] = (0, AH.useState)(null), XB = null !== (LH = null === (SH = ("listing" === (null === sH || void 0 === sH ? void 0 : sH.kind) ? sH.page.results : (null !== (BH = null === sH || void 0 === sH ? void 0 : sH.packs) && void 0 !== BH ? BH : []).flatMap((HH => HH.live ? [HH.live] : [])))[0]) || void 0 === SH ? void 0 : SH.baselineVersion) && void 0 !== LH ? LH : null;
      (0, AH.useEffect)((() => {
        null !== XB && EB(XB)
      }), [XB]);
      const GB = "mine" === DH.section,
        YB = (0, bH.p)(oH),
        uB = HH => {
          "explore" !== DH.section && (HH.stopPropagation(), HH.preventDefault(), tB({
            section: "explore"
          }))
        };
      return (0, mH.jsxs)("div", {
        className: "ShaderPackBrowse AnimFadeIn",
        children: [(0, mH.jsx)(GH.e, {
          onClick: hB,
          children: VH(null === SB ? "homePage:backToGames" : "shaderPackListing:backToSettings")
        }), (0, mH.jsxs)("div", {
          className: "ShaderPackBrowseHeader",
          children: [(0, mH.jsxs)("div", {
            className: "ShaderPackBrowseHeaderRow",
            children: [(0, mH.jsx)("h1", {
              className: "VisuallyHidden",
              children: VH("shaderPackListing:title")
            }), (0, mH.jsxs)("div", {
              className: "ShaderPackBrowseTabs",
              children: [(0, mH.jsx)("div", {
                className: hH()("ShaderPackBrowseSort", {
                  Active: "explore" === DH.section
                }),
                onMouseDownCapture: uB,
                onTouchEndCapture: uB,
                children: (0, mH.jsx)(YH.b, {
                  options: zH.B.map((HH => ({
                    value: HH,
                    label: VH(bH.X[HH])
                  }))),
                  value: DH.sort,
                  onChange: HH => {
                    tB({
                      section: "explore",
                      sort: HH.value
                    })
                  }
                })
              }), Object.keys(eH).map((HH => (0, mH.jsx)(GH.W, {
                active: DH.section === HH,
                onClick: () => {
                  tB({
                    section: HH
                  })
                },
                children: VH(eH[HH])
              }, HH)))]
            }), !GB && (0, mH.jsx)("div", {
              className: "ShaderPackBrowseDivider"
            }), !GB && (0, mH.jsxs)("div", {
              className: "ShaderPackBrowseSearch",
              children: [(0, mH.jsx)("div", {
                className: "ShaderPackBrowseSearchIcon",
                children: (0, mH.jsx)(CH.c, {
                  name: "magnifying-glass"
                })
              }), (0, mH.jsx)(QH.e, {
                className: "ShaderPackBrowseSearchInput",
                placeholderText: VH("shaderPackListing:searchPlaceholder"),
                maxLength: zH.P,
                defaultValue: wH,
                domRef: dH,
                onValueChange: ZH,
                onEnter: zB
              }), (0, mH.jsx)(GH.i, {
                onClick: zB,
                children: VH("general:search")
              })]
            }), !GB && (0, mH.jsxs)(GH.W, {
              className: hH()("ShaderPackBrowseFilterToggle", {
                Open: NH
              }),
              pressed: NH,
              onClick: () => {
                RH(!NH)
              },
              children: [VH("shaderPackListing:filter"), " ", (0, mH.jsx)(CH.c, {
                name: NH ? "angle-up" : "angle-down"
              })]
            }), (0, mH.jsx)("div", {
              className: "ShaderPackBrowseSpace"
            }), TH.featureFlags.settings.canUseShaderPacks && (0, mH.jsxs)(GH.u, {
              onClick: () => {
                OH(bH.T)
              },
              children: [(0, mH.jsx)(CH.c, {
                name: "upload"
              }), " ", VH("shaderPackListing:publish")]
            })]
          }), !GB && NH && (0, mH.jsxs)("div", {
            className: "ShaderPackBrowseFeatures",
            children: [bH.w.map((HH => {
              const BH = (0, bH.j)(DH, HH),
                LH = VH(bH.L[HH]);
              return (0, mH.jsx)(GH.W, {
                className: hH()("ShaderPackBrowseFeature", {
                  Without: "without" === BH
                }),
                active: "with" === BH,
                pressed: null !== BH,
                onClick: () => {
                  jH.current = !0, tB((0, bH.ab)(DH, HH))
                },
                children: (0, mH.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureLabel",
                  children: [(0, mH.jsxs)("span", {
                    className: "ShaderPackBrowseFeatureReserve",
                    children: [(0, mH.jsx)(CH.c, {
                      name: "check"
                    }), " ", LH]
                  }), (0, mH.jsxs)("span", {
                    children: [null !== BH && (0, mH.jsx)(CH.c, {
                      name: "with" === BH ? "check" : "xmark"
                    }), " ", LH]
                  })]
                })
              }, HH)
            })), YB && (0, mH.jsx)(GH.W, {
              className: hH()("ShaderPackBrowseFeature", {
                Without: "without" === DH.banned
              }),
              active: "with" === DH.banned,
              pressed: null !== DH.banned,
              onClick: () => {
                const HH = "without" === DH.banned && !jH.current && (0, bH.n)(DH);
                tB({
                  banned: (0, bH.z)(DH.banned),
                  ...HH && {
                    withFeatures: [],
                    withoutFeatures: []
                  }
                })
              },
              children: (0, mH.jsxs)("span", {
                className: "ShaderPackBrowseFeatureLabel",
                children: [(0, mH.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureReserve",
                  children: [(0, mH.jsx)(CH.c, {
                    name: "check"
                  }), " BANNED"]
                }), (0, mH.jsxs)("span", {
                  children: [null !== DH.banned && (0, mH.jsx)(CH.c, {
                    name: "with" === DH.banned ? "check" : "xmark"
                  }), " BANNED"]
                })]
              })
            })]
          })]
        }), (!GB || null !== CB) && (0, mH.jsx)("div", {
          className: "ShaderPackBrowseScenes",
          children: (0, mH.jsx)(KH.d, {
            selected: qH,
            onSelect: gH,
            imageUrl: HH => null === CB ? null : (0, zH.s)(PH.clientSideServerUrls.s3Url, CB, HH, "thumb")
          })
        }), (0, mH.jsx)(fH, {
          results: sH,
          loading: iH,
          failed: yH,
          onRetry: () => {
            LB((HH => HH + 1))
          },
          view: DH,
          previewView: qH
        }), "listing" === (null === sH || void 0 === sH ? void 0 : sH.kind) && (0, mH.jsx)(uH.e, {
          className: "ShaderPackBrowsePagination",
          page: sH.page.pageNumber,
          totalPages: sH.page.totalPages,
          onSetPage: HH => {
            FH((BH => {
              (0, XH.m)(BH, HH)
            }))
          },
          getPageHref: function(HH) {
            const BH = new URLSearchParams(nH);
            (0, XH.m)(BH, HH);
            const LH = BH.toString();
            return LH ? `${kH.pathname}?${LH}` : kH.pathname
          }
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);