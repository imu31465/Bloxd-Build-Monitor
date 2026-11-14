export const id = 106;
export const ids = [106];
export const modules = {
  5507: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      default: () => zW
    });
    var CF = SF(46),
      AF = SF(1360),
      uF = SF(918),
      hF = SF.n(uF),
      bW = SF(220),
      dF = SF(5520),
      PF = SF(929),
      RF = SF(1352),
      iW = SF(3629),
      eF = SF(1266),
      EF = SF(2332),
      QF = SF(3632),
      rW = SF(1504),
      gW = SF(3626),
      tW = SF(996),
      TF = SF(11),
      aW = SF(1336),
      kW = SF(1056),
      qW = SF(89),
      VF = SF(1046),
      NF = SF(1186),
      DF = SF(1085),
      LF = SF(5512),
      mW = SF(5529),
      OF = SF(971);

    function xW(FF) {
      let {
        pack: WF,
        view: SF,
        favourite: CF,
        notice: AF
      } = FF;
      const {
        width: uF,
        height: bW
      } = dF.t.thumb, {
        live: iW
      } = WF;
      return (0, OF.jsx)("div", {
        className: "ShaderPackCard",
        children: (0, OF.jsxs)("div", {
          className: "ShaderPackCardTile",
          children: [(0, OF.jsxs)(RF.LinkPreserveSearch, {
            to: (0, LF.W)(WF.packId),
            className: "ShaderPackCardLink",
            children: [iW && (0, OF.jsx)("img", {
              className: "ShaderPackCardImage",
              src: (0, dF.w)(kW.clientSideServerUrls.s3Url, iW, SF, "thumb"),
              width: uF,
              height: bW,
              loading: "lazy",
              alt: "",
              draggable: !1
            }), iW && (0, OF.jsx)(mW.c, {
              item: iW
            }), !iW && (0, OF.jsx)("div", {
              className: "ShaderPackCardImage ShaderPackCardImagePending",
              children: (0, OF.jsx)(PF.e, {
                name: "hourglass"
              })
            }), (0, OF.jsxs)("div", {
              className: "ShaderPackCardText",
              children: [AF && (0, OF.jsx)("div", {
                className: hF()("ShaderPackCardNotice", {
                  Warning: "warning" === AF.tone
                }),
                children: AF.text
              }), (0, OF.jsx)("div", {
                className: "ShaderPackCardName SmallTextBold",
                children: WF.name
              })]
            })]
          }), iW && (0, OF.jsxs)("div", {
            className: "ShaderPackCardStats",
            children: [(0, OF.jsxs)("div", {
              className: "ShaderPackCardUses SmallTextBold",
              children: [(0, OF.jsx)(PF.e, {
                name: "download"
              }), (0, DF.R)(iW.downloads)]
            }), CF && (0, OF.jsx)(eF.s, {
              onClick: CF.onToggle,
              isLiked: !0 === CF.isFavourite,
              isLoading: null === CF.isFavourite
            })]
          })]
        })
      })
    }
    var ZF = SF(5533);

    function oF(FF) {
      let {
        results: WF,
        loading: SF,
        failed: CF,
        onRetry: AF,
        view: uF,
        previewView: bW
      } = FF;
      const {
        t: dF
      } = (0, VF.B)(), PF = (0, ZF.h)(), RF = Date.now(), iW = null === WF ? 0 : "owned" === WF.kind ? WF.packs.length : WF.page.results.length;
      return (0, OF.jsxs)("div", {
        className: hF()("ShaderPackBrowseResults", {
          Loading: SF && null !== WF
        }),
        children: [SF && null === WF && (0, OF.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: (0, OF.jsx)(NF.c, {})
        }), CF && (0, OF.jsxs)("div", {
          className: "ShaderPackBrowseMessage",
          children: [dF("shaderPackListing:loadFailed"), (0, OF.jsx)(eF.e, {
            onClick: AF,
            children: dF("general:tryAgain")
          })]
        }), "listing" === (null === WF || void 0 === WF ? void 0 : WF.kind) && iW > 0 && (0, OF.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: WF.page.results.map((FF => (0, OF.jsx)(xW, {
            pack: {
              packId: FF.packId,
              name: FF.name,
              live: FF
            },
            view: bW,
            favourite: {
              isFavourite: PF.isFavourite(FF.packId),
              onToggle: () => {
                PF.toggle(FF.packId)
              }
            }
          }, FF.packId)))
        }), "owned" === (null === WF || void 0 === WF ? void 0 : WF.kind) && iW > 0 && (0, OF.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: WF.packs.map((FF => {
            var WF;
            return (0, OF.jsx)(xW, {
              pack: FF,
              view: bW,
              notice: FF.owner ? (0, LF.U)(FF.owner, !(null === (WF = FF.live) || void 0 === WF || !WF.renderId), RF, dF)[0] : void 0
            }, FF.packId)
          }))
        }), null !== WF && 0 === iW && (0, OF.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: dF(YF(uF))
        })]
      })
    }

    function YF(FF) {
      return "mine" === FF.section ? "shaderPackListing:noOwnPacks" : (0, LF.q)(FF) ? "general:noResults" : "favourites" === FF.section ? "shaderPackListing:noFavourites" : "general:noResults"
    }
    var MF = SF(5543);
    const cW = 24,
      GF = {
        favourites: "general:favourites",
        mine: "shaderPackListing:mine"
      };

    function zW() {
      var FF, WF, SF, uF;
      const {
        t: NF
      } = (0, VF.B)(), DF = (0, RF.useNavigatePreserveSearch)(), mW = (0, AF.p)(), {
        userContext: xW,
        isUserContextUpdating: YF
      } = (0, tW.b)(), [zW, IF] = (0, ZF.e)(), [fF, yW] = (0, ZF.d)(), sF = (0, CF.useRef)(!1), [nF, HF] = (0, iW.n)(), KF = (0, LF.C)(nF), [wF, XF] = (0, CF.useState)(null !== (FF = KF.searchQuery) && void 0 !== FF ? FF : ""), UF = (0, CF.useRef)(null), {
        searchQuery: BF
      } = KF;
      (0, CF.useEffect)((() => {
        XF(null !== BF && void 0 !== BF ? BF : ""), UF.current && (UF.current.value = null !== BF && void 0 !== BF ? BF : "")
      }), [BF]);
      const [jW, vW] = (0, CF.useState)(null), [JF, pF] = (0, CF.useState)(!1), [lF, FW] = (0, CF.useState)(!1), [WW, SW] = (0, CF.useState)(0), CW = (0, CF.useRef)(0), AW = JSON.stringify(KF), uW = (0, LF.l)();

      function hW() {
        null !== uW ? (DF(uW), TF.b.set({
          openEverythingMenuName: bW.n.SETTINGS,
          openSettingsCategory: "CC"
        })) : DF("/")
      }

      function bS(FF) {
        HF((WF => {
          (0, LF.eb)(WF, {
            ...KF,
            pageNumber: 1,
            ...FF
          })
        }))
      }

      function dW() {
        const FF = wF.trim() || null;
        bS({
          searchQuery: FF,
          ...null !== FF && !sF.current && (0, LF.m)(KF) && {
            withFeatures: [],
            withoutFeatures: []
          }
        })
      }(0, gW.b)(hW), (0, ZF.b)(), (0, CF.useEffect)((() => {
        if (YF) return;
        const FF = ++CW.current,
          WF = JSON.parse(AW);
        pF(!0), FW(!1), async function(FF) {
          if ("mine" === FF.section) return {
            kind: "owned",
            packs: await aW.b.getOwnedShaderPacks(xW)
          };
          const WF = "favourites" === FF.section,
            SF = WF && (0, LF.m)(FF),
            CF = await aW.b.getShaderPacks(xW, {
              sort: WF ? LF.h : FF.sort,
              features: SF ? [] : FF.withFeatures,
              withoutFeatures: SF ? [] : FF.withoutFeatures,
              searchQuery: FF.searchQuery,
              pageNumber: FF.pageNumber,
              pageSize: cW,
              onlyFavourites: WF,
              banned: (0, LF.o)(xW) ? (0, LF.e)(FF.banned) : void 0
            });
          return {
            kind: "listing",
            page: CF
          }
        }(WF).then((WF => {
          CW.current === FF && vW(WF)
        })).catch((WF => {
          CW.current === FF && (console.error("Failed to get shader packs", WF), vW(null), FW(!0))
        })).finally((() => {
          CW.current === FF && pF(!1)
        }))
      }), [AW, xW, YF, WW]);
      const [PW, RW] = (0, CF.useState)(null), iS = null !== (SF = null === (uF = ("listing" === (null === jW || void 0 === jW ? void 0 : jW.kind) ? jW.page.results : (null !== (WF = null === jW || void 0 === jW ? void 0 : jW.packs) && void 0 !== WF ? WF : []).flatMap((FF => FF.live ? [FF.live] : [])))[0]) || void 0 === uF ? void 0 : uF.baselineVersion) && void 0 !== SF ? SF : null;
      (0, CF.useEffect)((() => {
        null !== iS && RW(iS)
      }), [iS]);
      const eW = "mine" === KF.section,
        EW = (0, LF.o)(xW),
        QW = FF => {
          "explore" !== KF.section && (FF.stopPropagation(), FF.preventDefault(), bS({
            section: "explore"
          }))
        };
      return (0, OF.jsxs)("div", {
        className: "ShaderPackBrowse AnimFadeIn",
        children: [(0, OF.jsx)(eF.c, {
          onClick: hW,
          children: NF(null === uW ? "homePage:backToGames" : "shaderPackListing:backToSettings")
        }), (0, OF.jsxs)("div", {
          className: "ShaderPackBrowseHeader",
          children: [(0, OF.jsxs)("div", {
            className: "ShaderPackBrowseHeaderRow",
            children: [(0, OF.jsx)("h1", {
              className: "VisuallyHidden",
              children: NF("shaderPackListing:title")
            }), (0, OF.jsxs)("div", {
              className: "ShaderPackBrowseTabs",
              children: [(0, OF.jsx)("div", {
                className: hF()("ShaderPackBrowseSort", {
                  Active: "explore" === KF.section
                }),
                onMouseDownCapture: QW,
                onTouchEndCapture: QW,
                children: (0, OF.jsx)(EF.c, {
                  options: dF.A.map((FF => ({
                    value: FF,
                    label: NF(LF.$[FF])
                  }))),
                  value: KF.sort,
                  onChange: FF => {
                    bS({
                      section: "explore",
                      sort: FF.value
                    })
                  }
                })
              }), Object.keys(GF).map((FF => (0, OF.jsx)(eF.N, {
                active: KF.section === FF,
                onClick: () => {
                  bS({
                    section: FF
                  })
                },
                children: NF(GF[FF])
              }, FF)))]
            }), !eW && (0, OF.jsx)("div", {
              className: "ShaderPackBrowseDivider"
            }), !eW && (0, OF.jsxs)("div", {
              className: "ShaderPackBrowseSearch",
              children: [(0, OF.jsx)("div", {
                className: "ShaderPackBrowseSearchIcon",
                children: (0, OF.jsx)(PF.e, {
                  name: "magnifying-glass"
                })
              }), (0, OF.jsx)(rW.d, {
                className: "ShaderPackBrowseSearchInput",
                placeholderText: NF("shaderPackListing:searchPlaceholder"),
                maxLength: dF.M,
                defaultValue: wF,
                domRef: UF,
                onValueChange: XF,
                onEnter: dW
              }), (0, OF.jsx)(eF.e, {
                onClick: dW,
                children: NF("general:search")
              })]
            }), !eW && (0, OF.jsxs)(eF.N, {
              className: hF()("ShaderPackBrowseFilterToggle", {
                Open: fF
              }),
              pressed: fF,
              onClick: () => {
                yW(!fF)
              },
              children: [NF("shaderPackListing:filter"), " ", (0, OF.jsx)(PF.e, {
                name: fF ? "angle-up" : "angle-down"
              })]
            }), (0, OF.jsx)("div", {
              className: "ShaderPackBrowseSpace"
            }), qW.featureFlags.settings.canUseShaderPacks && (0, OF.jsxs)(eF.k, {
              onClick: () => {
                DF(LF._)
              },
              children: [(0, OF.jsx)(PF.e, {
                name: "upload"
              }), " ", NF("shaderPackListing:publish")]
            })]
          }), !eW && fF && (0, OF.jsxs)("div", {
            className: "ShaderPackBrowseFeatures",
            children: [LF.y.map((FF => {
              const WF = (0, LF.j)(KF, FF),
                SF = NF(LF.J[FF]);
              return (0, OF.jsx)(eF.N, {
                className: hF()("ShaderPackBrowseFeature", {
                  Without: "without" === WF
                }),
                active: "with" === WF,
                pressed: null !== WF,
                onClick: () => {
                  sF.current = !0, bS((0, LF.db)(KF, FF))
                },
                children: (0, OF.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureLabel",
                  children: [(0, OF.jsxs)("span", {
                    className: "ShaderPackBrowseFeatureReserve",
                    children: [(0, OF.jsx)(PF.e, {
                      name: "check"
                    }), " ", SF]
                  }), (0, OF.jsxs)("span", {
                    children: [null !== WF && (0, OF.jsx)(PF.e, {
                      name: "with" === WF ? "check" : "xmark"
                    }), " ", SF]
                  })]
                })
              }, FF)
            })), EW && (0, OF.jsx)(eF.N, {
              className: hF()("ShaderPackBrowseFeature", {
                Without: "without" === KF.banned
              }),
              active: "with" === KF.banned,
              pressed: null !== KF.banned,
              onClick: () => {
                const FF = "without" === KF.banned && !sF.current && (0, LF.m)(KF);
                bS({
                  banned: (0, LF.A)(KF.banned),
                  ...FF && {
                    withFeatures: [],
                    withoutFeatures: []
                  }
                })
              },
              children: (0, OF.jsxs)("span", {
                className: "ShaderPackBrowseFeatureLabel",
                children: [(0, OF.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureReserve",
                  children: [(0, OF.jsx)(PF.e, {
                    name: "check"
                  }), " BANNED"]
                }), (0, OF.jsxs)("span", {
                  children: [null !== KF.banned && (0, OF.jsx)(PF.e, {
                    name: "with" === KF.banned ? "check" : "xmark"
                  }), " BANNED"]
                })]
              })
            })]
          })]
        }), (!eW || null !== PW) && (0, OF.jsx)("div", {
          className: "ShaderPackBrowseScenes",
          children: (0, OF.jsx)(MF.e, {
            selected: zW,
            onSelect: IF,
            imageUrl: FF => null === PW ? null : (0, dF.o)(kW.clientSideServerUrls.s3Url, PW, FF, "thumb")
          })
        }), (0, OF.jsx)(oF, {
          results: jW,
          loading: JF,
          failed: lF,
          onRetry: () => {
            SW((FF => FF + 1))
          },
          view: KF,
          previewView: zW
        }), "listing" === (null === jW || void 0 === jW ? void 0 : jW.kind) && (0, OF.jsx)(QF.c, {
          className: "ShaderPackBrowsePagination",
          page: jW.page.pageNumber,
          totalPages: jW.page.totalPages,
          onSetPage: FF => {
            HF((WF => {
              (0, iW.l)(WF, FF)
            }))
          },
          getPageHref: function(FF) {
            const WF = new URLSearchParams(nF);
            (0, iW.l)(WF, FF);
            const SF = WF.toString();
            return SF ? `${mW.pathname}?${SF}` : mW.pathname
          }
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);