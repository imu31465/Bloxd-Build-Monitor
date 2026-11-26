export const id = 142;
export const ids = [142];
export const modules = {
  7093: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      default: () => gB
    });
    var YB = GB(56),
      DB = GB(1571),
      QB = GB(1090),
      oB = GB.n(QB),
      jB = GB(331),
      yB = GB(7107),
      JB = GB(1383),
      MB = GB(1560),
      PB = GB(4975),
      zB = GB(1485),
      lB = GB(3544),
      pB = GB(4982),
      qB = GB(1735),
      ZB = GB(4967),
      NB = GB(1112),
      RB = GB(16),
      WB = GB(1540),
      AB = GB(1186),
      VB = GB(92),
      SB = GB(1175),
      nB = GB(1375),
      UB = GB(1217),
      fB = GB(7099),
      kB = GB(7113),
      dB = GB(1282);

    function KB(BB) {
      let {
        pack: OB,
        view: GB,
        favourite: YB,
        notice: DB
      } = BB;
      const {
        width: QB,
        height: jB
      } = yB.t.thumb, {
        live: PB
      } = OB;
      return (0, dB.jsx)("div", {
        className: "ShaderPackCard",
        children: (0, dB.jsxs)("div", {
          className: "ShaderPackCardTile",
          children: [(0, dB.jsxs)(MB.LinkPreserveSearch, {
            to: (0, fB.$)(OB.packId),
            className: "ShaderPackCardLink",
            children: [PB && (0, dB.jsx)("img", {
              className: "ShaderPackCardImage",
              src: (0, yB.x)(AB.clientSideServerUrls.s3Url, PB, GB, "thumb"),
              width: QB,
              height: jB,
              loading: "lazy",
              alt: "",
              draggable: !1
            }), PB && (0, dB.jsx)(kB.b, {
              item: PB
            }), !PB && (0, dB.jsx)("div", {
              className: "ShaderPackCardImage ShaderPackCardImagePending",
              children: (0, dB.jsx)(JB.b, {
                name: "hourglass"
              })
            }), (0, dB.jsxs)("div", {
              className: "ShaderPackCardText",
              children: [DB && (0, dB.jsx)("div", {
                className: oB()("ShaderPackCardNotice", {
                  Warning: "warning" === DB.tone
                }),
                children: DB.text
              }), (0, dB.jsx)("div", {
                className: "ShaderPackCardName SmallTextBold",
                children: OB.name
              })]
            })]
          }), PB && (0, dB.jsxs)("div", {
            className: "ShaderPackCardStats",
            children: [(0, dB.jsxs)("div", {
              className: "ShaderPackCardUses SmallTextBold",
              children: [(0, dB.jsx)(JB.b, {
                name: "download"
              }), (0, UB.U)(PB.downloads)]
            }), YB && (0, dB.jsx)(zB.z, {
              onClick: YB.onToggle,
              isLiked: !0 === YB.isFavourite,
              isLoading: null === YB.isFavourite
            })]
          })]
        })
      })
    }
    var uB = GB(7116);

    function mB(BB) {
      let {
        results: OB,
        loading: GB,
        failed: YB,
        onRetry: DB,
        view: QB,
        previewView: jB
      } = BB;
      const {
        t: yB
      } = (0, SB.H)(), JB = (0, uB.k)(), MB = Date.now(), PB = null === OB ? 0 : "owned" === OB.kind ? OB.packs.length : OB.page.results.length;
      return (0, dB.jsxs)("div", {
        className: oB()("ShaderPackBrowseResults", {
          Loading: GB && null !== OB
        }),
        children: [GB && null === OB && (0, dB.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: (0, dB.jsx)(nB.b, {})
        }), YB && (0, dB.jsxs)("div", {
          className: "ShaderPackBrowseMessage",
          children: [yB("shaderPackListing:loadFailed"), (0, dB.jsx)(zB.f, {
            onClick: DB,
            children: yB("general:tryAgain")
          })]
        }), "listing" === (null === OB || void 0 === OB ? void 0 : OB.kind) && PB > 0 && (0, dB.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: OB.page.results.map((BB => (0, dB.jsx)(KB, {
            pack: {
              packId: BB.packId,
              name: BB.name,
              live: BB
            },
            view: jB,
            favourite: {
              isFavourite: JB.isFavourite(BB.packId),
              onToggle: () => {
                JB.toggle(BB.packId)
              }
            }
          }, BB.packId)))
        }), "owned" === (null === OB || void 0 === OB ? void 0 : OB.kind) && PB > 0 && (0, dB.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: OB.packs.map((BB => {
            var OB;
            return (0, dB.jsx)(KB, {
              pack: BB,
              view: jB,
              notice: BB.owner ? (0, fB.X)(BB.owner, !(null === (OB = BB.live) || void 0 === OB || !OB.renderId), MB, yB)[0] : void 0
            }, BB.packId)
          }))
        }), null !== OB && 0 === PB && (0, dB.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: yB(IB(QB))
        })]
      })
    }

    function IB(BB) {
      return "mine" === BB.section ? "shaderPackListing:noOwnPacks" : (0, fB.q)(BB) ? "general:noResults" : "favourites" === BB.section ? "shaderPackListing:noFavourites" : "general:noResults"
    }
    var FB = GB(7125);
    const iB = 24,
      LB = {
        favourites: "general:favourites",
        mine: "shaderPackListing:mine"
      };

    function gB() {
      var BB, OB, GB, QB;
      const {
        t: nB
      } = (0, SB.H)(), UB = (0, MB.useNavigatePreserveSearch)(), kB = (0, DB.r)(), {
        userContext: KB,
        isUserContextUpdating: IB
      } = (0, NB.d)(), [gB, rB] = (0, uB.i)(), [XB, wB] = (0, uB.e)(), EB = (0, YB.useRef)(!1), [cB, hB] = (0, PB.l)(), aB = (0, fB.C)(cB), [eB, TB] = (0, YB.useState)(null !== (BB = aB.searchQuery) && void 0 !== BB ? BB : ""), bB = (0, YB.useRef)(null), {
        searchQuery: CB
      } = aB;
      (0, YB.useEffect)((() => {
        TB(null !== CB && void 0 !== CB ? CB : ""), bB.current && (bB.current.value = null !== CB && void 0 !== CB ? CB : "")
      }), [CB]);
      const [HB, vB] = (0, YB.useState)(null), [sB, xB] = (0, YB.useState)(!1), [tB, BO] = (0, YB.useState)(!1), [OO, GO] = (0, YB.useState)(0), YO = (0, YB.useRef)(0), DO = JSON.stringify(aB), QO = (0, fB.j)();

      function oO() {
        null !== QO ? (UB(QO), RB.c.set({
          openEverythingMenuName: jB.p.SETTINGS,
          openSettingsCategory: "zp"
        })) : UB("/")
      }

      function jO(BB) {
        hB((OB => {
          (0, fB.lb)(OB, {
            ...aB,
            pageNumber: 1,
            ...BB
          })
        }))
      }

      function yO() {
        const BB = eB.trim() || null;
        jO({
          searchQuery: BB,
          ...null !== BB && !EB.current && (0, fB.n)(aB) && {
            withFeatures: [],
            withoutFeatures: []
          }
        })
      }(0, ZB.e)(oO), (0, uB.c)(), (0, YB.useEffect)((() => {
        if (IB) return;
        const BB = ++YO.current,
          OB = JSON.parse(DO);
        xB(!0), BO(!1), async function(BB) {
          if ("mine" === BB.section) return {
            kind: "owned",
            packs: await WB.b.getOwnedShaderPacks(KB)
          };
          const OB = "favourites" === BB.section,
            GB = OB && (0, fB.n)(BB),
            YB = await WB.b.getShaderPacks(KB, {
              sort: OB ? fB.c : BB.sort,
              features: GB ? [] : BB.withFeatures,
              withoutFeatures: GB ? [] : BB.withoutFeatures,
              searchQuery: BB.searchQuery,
              pageNumber: BB.pageNumber,
              pageSize: iB,
              onlyFavourites: OB,
              banned: (0, fB.p)(KB) ? (0, fB.b)(BB.banned) : void 0
            });
          return {
            kind: "listing",
            page: YB
          }
        }(OB).then((OB => {
          YO.current === BB && vB(OB)
        })).catch((OB => {
          YO.current === BB && (console.error("Failed to get shader packs", OB), vB(null), BO(!0))
        })).finally((() => {
          YO.current === BB && xB(!1)
        }))
      }), [DO, KB, IB, OO]);
      const [JO, MO] = (0, YB.useState)(null), PO = null !== (GB = null === (QB = ("listing" === (null === HB || void 0 === HB ? void 0 : HB.kind) ? HB.page.results : (null !== (OB = null === HB || void 0 === HB ? void 0 : HB.packs) && void 0 !== OB ? OB : []).flatMap((BB => BB.live ? [BB.live] : [])))[0]) || void 0 === QB ? void 0 : QB.baselineVersion) && void 0 !== GB ? GB : null;
      (0, YB.useEffect)((() => {
        null !== PO && MO(PO)
      }), [PO]);
      const zO = "mine" === aB.section,
        lO = (0, fB.p)(KB),
        pO = BB => {
          "explore" !== aB.section && (BB.stopPropagation(), BB.preventDefault(), jO({
            section: "explore"
          }))
        };
      return (0, dB.jsxs)("div", {
        className: "ShaderPackBrowse AnimFadeIn",
        children: [(0, dB.jsx)(zB.c, {
          onClick: oO,
          children: nB(null === QO ? "homePage:backToGames" : "shaderPackListing:backToSettings")
        }), (0, dB.jsxs)("div", {
          className: "ShaderPackBrowseHeader",
          children: [(0, dB.jsxs)("div", {
            className: "ShaderPackBrowseHeaderRow",
            children: [(0, dB.jsx)("h1", {
              className: "VisuallyHidden",
              children: nB("shaderPackListing:title")
            }), (0, dB.jsxs)("div", {
              className: "ShaderPackBrowseTabs",
              children: [(0, dB.jsx)("div", {
                className: oB()("ShaderPackBrowseSort", {
                  Active: "explore" === aB.section
                }),
                onMouseDownCapture: pO,
                onTouchEndCapture: pO,
                children: (0, dB.jsx)(lB.c, {
                  options: yB.z.map((BB => ({
                    value: BB,
                    label: nB(fB.eb[BB])
                  }))),
                  value: aB.sort,
                  onChange: BB => {
                    jO({
                      section: "explore",
                      sort: BB.value
                    })
                  }
                })
              }), Object.keys(LB).map((BB => (0, dB.jsx)(zB.Z, {
                active: aB.section === BB,
                onClick: () => {
                  jO({
                    section: BB
                  })
                },
                children: nB(LB[BB])
              }, BB)))]
            }), !zO && (0, dB.jsx)("div", {
              className: "ShaderPackBrowseDivider"
            }), !zO && (0, dB.jsxs)("div", {
              className: "ShaderPackBrowseSearch",
              children: [(0, dB.jsx)("div", {
                className: "ShaderPackBrowseSearchIcon",
                children: (0, dB.jsx)(JB.b, {
                  name: "magnifying-glass"
                })
              }), (0, dB.jsx)(qB.b, {
                className: "ShaderPackBrowseSearchInput",
                placeholderText: nB("shaderPackListing:searchPlaceholder"),
                maxLength: yB.M,
                defaultValue: eB,
                domRef: bB,
                onValueChange: TB,
                onEnter: yO
              }), (0, dB.jsx)(zB.f, {
                onClick: yO,
                children: nB("general:search")
              })]
            }), !zO && (0, dB.jsxs)(zB.Z, {
              className: oB()("ShaderPackBrowseFilterToggle", {
                Open: XB
              }),
              pressed: XB,
              onClick: () => {
                wB(!XB)
              },
              children: [nB("shaderPackListing:filter"), " ", (0, dB.jsx)(JB.b, {
                name: XB ? "angle-up" : "angle-down"
              })]
            }), (0, dB.jsx)("div", {
              className: "ShaderPackBrowseSpace"
            }), VB.featureFlags.settings.canUseShaderPacks && (0, dB.jsxs)(zB.q, {
              onClick: () => {
                UB(fB.ab)
              },
              children: [(0, dB.jsx)(JB.b, {
                name: "upload"
              }), " ", nB("shaderPackListing:publish")]
            })]
          }), !zO && XB && (0, dB.jsxs)("div", {
            className: "ShaderPackBrowseFeatures",
            children: [fB.x.map((BB => {
              const OB = (0, fB.f)(aB, BB),
                GB = nB(fB.L[BB]);
              return (0, dB.jsx)(zB.Z, {
                className: oB()("ShaderPackBrowseFeature", {
                  Without: "without" === OB
                }),
                active: "with" === OB,
                pressed: null !== OB,
                onClick: () => {
                  EB.current = !0, jO((0, fB.ib)(aB, BB))
                },
                children: (0, dB.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureLabel",
                  children: [(0, dB.jsxs)("span", {
                    className: "ShaderPackBrowseFeatureReserve",
                    children: [(0, dB.jsx)(JB.b, {
                      name: "check"
                    }), " ", GB]
                  }), (0, dB.jsxs)("span", {
                    children: [null !== OB && (0, dB.jsx)(JB.b, {
                      name: "with" === OB ? "check" : "xmark"
                    }), " ", GB]
                  })]
                })
              }, BB)
            })), lO && (0, dB.jsx)(zB.Z, {
              className: oB()("ShaderPackBrowseFeature", {
                Without: "without" === aB.banned
              }),
              active: "with" === aB.banned,
              pressed: null !== aB.banned,
              onClick: () => {
                const BB = "without" === aB.banned && !EB.current && (0, fB.n)(aB);
                jO({
                  banned: (0, fB.y)(aB.banned),
                  ...BB && {
                    withFeatures: [],
                    withoutFeatures: []
                  }
                })
              },
              children: (0, dB.jsxs)("span", {
                className: "ShaderPackBrowseFeatureLabel",
                children: [(0, dB.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureReserve",
                  children: [(0, dB.jsx)(JB.b, {
                    name: "check"
                  }), " BANNED"]
                }), (0, dB.jsxs)("span", {
                  children: [null !== aB.banned && (0, dB.jsx)(JB.b, {
                    name: "with" === aB.banned ? "check" : "xmark"
                  }), " BANNED"]
                })]
              })
            })]
          })]
        }), (!zO || null !== JO) && (0, dB.jsx)("div", {
          className: "ShaderPackBrowseScenes",
          children: (0, dB.jsx)(FB.b, {
            selected: gB,
            onSelect: rB,
            imageUrl: BB => null === JO ? null : (0, yB.q)(AB.clientSideServerUrls.s3Url, JO, BB, "thumb")
          })
        }), (0, dB.jsx)(mB, {
          results: HB,
          loading: sB,
          failed: tB,
          onRetry: () => {
            GO((BB => BB + 1))
          },
          view: aB,
          previewView: gB
        }), "listing" === (null === HB || void 0 === HB ? void 0 : HB.kind) && (0, dB.jsx)(pB.b, {
          className: "ShaderPackBrowsePagination",
          page: HB.page.pageNumber,
          totalPages: HB.page.totalPages,
          onSetPage: BB => {
            hB((OB => {
              (0, PB.k)(OB, BB)
            }))
          },
          getPageHref: function(BB) {
            const OB = new URLSearchParams(cB);
            (0, PB.k)(OB, BB);
            const GB = OB.toString();
            return GB ? `${kB.pathname}?${GB}` : kB.pathname
          }
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);