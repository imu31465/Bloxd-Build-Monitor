export const id = 142;
export const ids = [142];
export const modules = {
  7048: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      default: () => ZM
    });
    var OM = iM(44),
      SM = iM(1608),
      jM = iM(1116),
      aM = iM.n(jM),
      PM = iM(313),
      nM = iM(7054),
      QM = iM(1398),
      zM = iM(1591),
      LM = iM(4937),
      mM = iM(1520),
      HM = iM(3530),
      hM = iM(4945),
      JM = iM(1763),
      dM = iM(4934),
      yM = iM(1142),
      lM = iM(19),
      EM = iM(1573),
      UM = iM(1202),
      GM = iM(83),
      CM = iM(1188),
      eM = iM(1396),
      bM = iM(1229),
      wM = iM(7051),
      tM = iM(7061),
      gM = iM(1303);

    function uM(MM) {
      let {
        pack: rM,
        view: iM,
        favourite: OM,
        notice: SM
      } = MM;
      const {
        width: jM,
        height: PM
      } = nM.v.thumb, {
        live: LM
      } = rM;
      return (0, gM.jsx)("div", {
        className: "ShaderPackCard",
        children: (0, gM.jsxs)("div", {
          className: "ShaderPackCardTile",
          children: [(0, gM.jsxs)(zM.LinkPreserveSearch, {
            to: (0, wM.W)(rM.packId),
            className: "ShaderPackCardLink",
            children: [LM && (0, gM.jsx)("img", {
              className: "ShaderPackCardImage",
              src: (0, nM.w)(UM.clientSideServerUrls.s3Url, LM, iM, "thumb"),
              width: jM,
              height: PM,
              loading: "lazy",
              alt: "",
              draggable: !1
            }), LM && (0, gM.jsx)(tM.e, {
              item: LM
            }), !LM && (0, gM.jsx)("div", {
              className: "ShaderPackCardImage ShaderPackCardImagePending",
              children: (0, gM.jsx)(QM.b, {
                name: "hourglass"
              })
            }), (0, gM.jsxs)("div", {
              className: "ShaderPackCardText",
              children: [SM && (0, gM.jsx)("div", {
                className: aM()("ShaderPackCardNotice", {
                  Warning: "warning" === SM.tone
                }),
                children: SM.text
              }), (0, gM.jsx)("div", {
                className: "ShaderPackCardName SmallTextBold",
                children: rM.name
              })]
            })]
          }), LM && (0, gM.jsxs)("div", {
            className: "ShaderPackCardStats",
            children: [(0, gM.jsxs)("div", {
              className: "ShaderPackCardUses SmallTextBold",
              children: [(0, gM.jsx)(QM.b, {
                name: "download"
              }), (0, bM.T)(LM.downloads)]
            }), OM && (0, gM.jsx)(mM.y, {
              onClick: OM.onToggle,
              isLiked: !0 === OM.isFavourite,
              isLoading: null === OM.isFavourite
            })]
          })]
        })
      })
    }
    var RM = iM(7068);

    function pM(MM) {
      let {
        results: rM,
        loading: iM,
        failed: OM,
        onRetry: SM,
        view: jM,
        previewView: PM
      } = MM;
      const {
        t: nM
      } = (0, CM.A)(), QM = (0, RM.l)(), zM = Date.now(), LM = null === rM ? 0 : "owned" === rM.kind ? rM.packs.length : rM.page.results.length;
      return (0, gM.jsxs)("div", {
        className: aM()("ShaderPackBrowseResults", {
          Loading: iM && null !== rM
        }),
        children: [iM && null === rM && (0, gM.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: (0, gM.jsx)(eM.d, {})
        }), OM && (0, gM.jsxs)("div", {
          className: "ShaderPackBrowseMessage",
          children: [nM("shaderPackListing:loadFailed"), (0, gM.jsx)(mM.e, {
            onClick: SM,
            children: nM("general:tryAgain")
          })]
        }), "listing" === (null === rM || void 0 === rM ? void 0 : rM.kind) && LM > 0 && (0, gM.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: rM.page.results.map((MM => (0, gM.jsx)(uM, {
            pack: {
              packId: MM.packId,
              name: MM.name,
              live: MM
            },
            view: PM,
            favourite: {
              isFavourite: QM.isFavourite(MM.packId),
              onToggle: () => {
                QM.toggle(MM.packId)
              }
            }
          }, MM.packId)))
        }), "owned" === (null === rM || void 0 === rM ? void 0 : rM.kind) && LM > 0 && (0, gM.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: rM.packs.map((MM => {
            var rM;
            return (0, gM.jsx)(uM, {
              pack: MM,
              view: PM,
              notice: MM.owner ? (0, wM.S)(MM.owner, !(null === (rM = MM.live) || void 0 === rM || !rM.renderId), zM, nM)[0] : void 0
            }, MM.packId)
          }))
        }), null !== rM && 0 === LM && (0, gM.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: nM(WM(jM))
        })]
      })
    }

    function WM(MM) {
      return "mine" === MM.section ? "shaderPackListing:noOwnPacks" : (0, wM.r)(MM) ? "general:noResults" : "favourites" === MM.section ? "shaderPackListing:noFavourites" : "general:noResults"
    }
    var sM = iM(7081);
    const DM = 24,
      kM = {
        favourites: "general:favourites",
        mine: "shaderPackListing:mine"
      };

    function ZM() {
      var MM, rM, iM, jM;
      const {
        t: eM
      } = (0, CM.A)(), bM = (0, zM.useNavigatePreserveSearch)(), tM = (0, SM.u)(), {
        userContext: uM,
        isUserContextUpdating: WM
      } = (0, yM.b)(), [ZM, oM] = (0, RM.h)(), [fM, YM] = (0, RM.e)(), NM = (0, OM.useRef)(!1), [AM, xM] = (0, LM.k)(), vM = (0, wM.z)(AM), [FM, BM] = (0, OM.useState)(null !== (MM = vM.searchQuery) && void 0 !== MM ? MM : ""), XM = (0, OM.useRef)(null), {
        searchQuery: IM
      } = vM;
      (0, OM.useEffect)((() => {
        BM(null !== IM && void 0 !== IM ? IM : ""), XM.current && (XM.current.value = null !== IM && void 0 !== IM ? IM : "")
      }), [IM]);
      const [KM, qM] = (0, OM.useState)(null), [TM, VM] = (0, OM.useState)(!1), [cM, Mr] = (0, OM.useState)(!1), [rr, ir] = (0, OM.useState)(0), Or = (0, OM.useRef)(0), Sr = JSON.stringify(vM), jr = (0, wM.j)();

      function ar() {
        null !== jr ? (bM(jr), lM.d.set({
          openEverythingMenuName: PM.m.SETTINGS,
          openSettingsCategory: "nh"
        })) : bM("/")
      }

      function Pr(MM) {
        xM((rM => {
          (0, wM.jb)(rM, {
            ...vM,
            pageNumber: 1,
            ...MM
          })
        }))
      }

      function nr() {
        const MM = FM.trim() || null;
        Pr({
          searchQuery: MM,
          ...null !== MM && !NM.current && (0, wM.n)(vM) && {
            withFeatures: [],
            withoutFeatures: []
          }
        })
      }(0, dM.e)(ar), (0, RM.c)(), (0, OM.useEffect)((() => {
        if (WM) return;
        const MM = ++Or.current,
          rM = JSON.parse(Sr);
        VM(!0), Mr(!1), async function(MM) {
          if ("mine" === MM.section) return {
            kind: "owned",
            packs: await EM.c.getOwnedShaderPacks(uM)
          };
          const rM = "favourites" === MM.section,
            iM = rM && (0, wM.n)(MM),
            OM = await EM.c.getShaderPacks(uM, {
              sort: rM ? wM.d : MM.sort,
              features: iM ? [] : MM.withFeatures,
              withoutFeatures: iM ? [] : MM.withoutFeatures,
              searchQuery: MM.searchQuery,
              pageNumber: MM.pageNumber,
              pageSize: DM,
              onlyFavourites: rM,
              banned: (0, wM.q)(uM) ? (0, wM.c)(MM.banned) : void 0
            });
          return {
            kind: "listing",
            page: OM
          }
        }(rM).then((rM => {
          Or.current === MM && qM(rM)
        })).catch((rM => {
          Or.current === MM && (console.error("Failed to get shader packs", rM), qM(null), Mr(!0))
        })).finally((() => {
          Or.current === MM && VM(!1)
        }))
      }), [Sr, uM, WM, rr]);
      const [Qr, zr] = (0, OM.useState)(null), Lr = null !== (iM = null === (jM = ("listing" === (null === KM || void 0 === KM ? void 0 : KM.kind) ? KM.page.results : (null !== (rM = null === KM || void 0 === KM ? void 0 : KM.packs) && void 0 !== rM ? rM : []).flatMap((MM => MM.live ? [MM.live] : [])))[0]) || void 0 === jM ? void 0 : jM.baselineVersion) && void 0 !== iM ? iM : null;
      (0, OM.useEffect)((() => {
        null !== Lr && zr(Lr)
      }), [Lr]);
      const mr = "mine" === vM.section,
        Hr = (0, wM.q)(uM),
        hr = MM => {
          "explore" !== vM.section && (MM.stopPropagation(), MM.preventDefault(), Pr({
            section: "explore"
          }))
        };
      return (0, gM.jsxs)("div", {
        className: "ShaderPackBrowse AnimFadeIn",
        children: [(0, gM.jsx)(mM.c, {
          onClick: ar,
          children: eM(null === jr ? "homePage:backToGames" : "shaderPackListing:backToSettings")
        }), (0, gM.jsxs)("div", {
          className: "ShaderPackBrowseHeader",
          children: [(0, gM.jsxs)("div", {
            className: "ShaderPackBrowseHeaderRow",
            children: [(0, gM.jsx)("h1", {
              className: "VisuallyHidden",
              children: eM("shaderPackListing:title")
            }), (0, gM.jsxs)("div", {
              className: "ShaderPackBrowseTabs",
              children: [(0, gM.jsx)("div", {
                className: aM()("ShaderPackBrowseSort", {
                  Active: "explore" === vM.section
                }),
                onMouseDownCapture: hr,
                onTouchEndCapture: hr,
                children: (0, gM.jsx)(HM.e, {
                  options: nM.y.map((MM => ({
                    value: MM,
                    label: eM(wM.$[MM])
                  }))),
                  value: vM.sort,
                  onChange: MM => {
                    Pr({
                      section: "explore",
                      sort: MM.value
                    })
                  }
                })
              }), Object.keys(kM).map((MM => (0, gM.jsx)(mM.V, {
                active: vM.section === MM,
                onClick: () => {
                  Pr({
                    section: MM
                  })
                },
                children: eM(kM[MM])
              }, MM)))]
            }), !mr && (0, gM.jsx)("div", {
              className: "ShaderPackBrowseDivider"
            }), !mr && (0, gM.jsxs)("div", {
              className: "ShaderPackBrowseSearch",
              children: [(0, gM.jsx)("div", {
                className: "ShaderPackBrowseSearchIcon",
                children: (0, gM.jsx)(QM.b, {
                  name: "magnifying-glass"
                })
              }), (0, gM.jsx)(JM.b, {
                className: "ShaderPackBrowseSearchInput",
                placeholderText: eM("shaderPackListing:searchPlaceholder"),
                maxLength: nM.M,
                defaultValue: FM,
                domRef: XM,
                onValueChange: BM,
                onEnter: nr
              }), (0, gM.jsx)(mM.e, {
                onClick: nr,
                children: eM("general:search")
              })]
            }), !mr && (0, gM.jsxs)(mM.V, {
              className: aM()("ShaderPackBrowseFilterToggle", {
                Open: fM
              }),
              pressed: fM,
              onClick: () => {
                YM(!fM)
              },
              children: [eM("shaderPackListing:filter"), " ", (0, gM.jsx)(QM.b, {
                name: fM ? "angle-up" : "angle-down"
              })]
            }), (0, gM.jsx)("div", {
              className: "ShaderPackBrowseSpace"
            }), GM.featureFlags.settings.canUseShaderPacks && (0, gM.jsxs)(mM.p, {
              onClick: () => {
                bM(wM.Y)
              },
              children: [(0, gM.jsx)(QM.b, {
                name: "upload"
              }), " ", eM("shaderPackListing:publish")]
            })]
          }), !mr && fM && (0, gM.jsxs)("div", {
            className: "ShaderPackBrowseFeatures",
            children: [wM.w.map((MM => {
              const rM = (0, wM.g)(vM, MM),
                iM = eM(wM.I[MM]);
              return (0, gM.jsx)(mM.V, {
                className: aM()("ShaderPackBrowseFeature", {
                  Without: "without" === rM
                }),
                active: "with" === rM,
                pressed: null !== rM,
                onClick: () => {
                  NM.current = !0, Pr((0, wM.fb)(vM, MM))
                },
                children: (0, gM.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureLabel",
                  children: [(0, gM.jsxs)("span", {
                    className: "ShaderPackBrowseFeatureReserve",
                    children: [(0, gM.jsx)(QM.b, {
                      name: "check"
                    }), " ", iM]
                  }), (0, gM.jsxs)("span", {
                    children: [null !== rM && (0, gM.jsx)(QM.b, {
                      name: "with" === rM ? "check" : "xmark"
                    }), " ", iM]
                  })]
                })
              }, MM)
            })), Hr && (0, gM.jsx)(mM.V, {
              className: aM()("ShaderPackBrowseFeature", {
                Without: "without" === vM.banned
              }),
              active: "with" === vM.banned,
              pressed: null !== vM.banned,
              onClick: () => {
                const MM = "without" === vM.banned && !NM.current && (0, wM.n)(vM);
                Pr({
                  banned: (0, wM.x)(vM.banned),
                  ...MM && {
                    withFeatures: [],
                    withoutFeatures: []
                  }
                })
              },
              children: (0, gM.jsxs)("span", {
                className: "ShaderPackBrowseFeatureLabel",
                children: [(0, gM.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureReserve",
                  children: [(0, gM.jsx)(QM.b, {
                    name: "check"
                  }), " BANNED"]
                }), (0, gM.jsxs)("span", {
                  children: [null !== vM.banned && (0, gM.jsx)(QM.b, {
                    name: "with" === vM.banned ? "check" : "xmark"
                  }), " BANNED"]
                })]
              })
            })]
          })]
        }), (!mr || null !== Qr) && (0, gM.jsx)("div", {
          className: "ShaderPackBrowseScenes",
          children: (0, gM.jsx)(sM.c, {
            selected: ZM,
            onSelect: oM,
            imageUrl: MM => null === Qr ? null : (0, nM.q)(UM.clientSideServerUrls.s3Url, Qr, MM, "thumb")
          })
        }), (0, gM.jsx)(pM, {
          results: KM,
          loading: TM,
          failed: cM,
          onRetry: () => {
            ir((MM => MM + 1))
          },
          view: vM,
          previewView: ZM
        }), "listing" === (null === KM || void 0 === KM ? void 0 : KM.kind) && (0, gM.jsx)(hM.d, {
          className: "ShaderPackBrowsePagination",
          page: KM.page.pageNumber,
          totalPages: KM.page.totalPages,
          onSetPage: MM => {
            xM((rM => {
              (0, LM.h)(rM, MM)
            }))
          },
          getPageHref: function(MM) {
            const rM = new URLSearchParams(AM);
            (0, LM.h)(rM, MM);
            const iM = rM.toString();
            return iM ? `${tM.pathname}?${iM}` : tM.pathname
          }
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);