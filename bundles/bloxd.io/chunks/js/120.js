export const id = 120;
export const ids = [120];
export const modules = {
  6285: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      default: () => lD
    });
    var ID = cD(53),
      pD = cD(1517),
      iD = cD(1049),
      fD = cD.n(iD),
      bD = cD(312),
      QD = cD(6298),
      wD = cD(1064),
      SD = cD(1508),
      BD = cD(4353),
      yD = cD(1442),
      MD = cD(2921),
      tD = cD(4361),
      ZD = cD(1655),
      oD = cD(4346),
      vD = cD(1120),
      ND = cD(16),
      gD = cD(1497),
      XD = cD(1199),
      mD = cD(90),
      nD = cD(1192),
      OD = cD(1328),
      PD = cD(1221),
      HD = cD(6291),
      UD = cD(6303),
      xD = cD(1093);

    function qD(DD) {
      let {
        pack: CD,
        view: cD,
        favourite: ID,
        notice: pD
      } = DD;
      const {
        width: iD,
        height: bD
      } = QD.u.thumb, {
        live: BD
      } = CD;
      return (0, xD.jsx)("div", {
        className: "ShaderPackCard",
        children: (0, xD.jsxs)("div", {
          className: "ShaderPackCardTile",
          children: [(0, xD.jsxs)(SD.LinkPreserveSearch, {
            to: (0, HD.$)(CD.packId),
            className: "ShaderPackCardLink",
            children: [BD && (0, xD.jsx)("img", {
              className: "ShaderPackCardImage",
              src: (0, QD.w)(XD.clientSideServerUrls.s3Url, BD, cD, "thumb"),
              width: iD,
              height: bD,
              loading: "lazy",
              alt: "",
              draggable: !1
            }), BD && (0, xD.jsx)(UD.b, {
              item: BD
            }), !BD && (0, xD.jsx)("div", {
              className: "ShaderPackCardImage ShaderPackCardImagePending",
              children: (0, xD.jsx)(wD.c, {
                name: "hourglass"
              })
            }), (0, xD.jsxs)("div", {
              className: "ShaderPackCardText",
              children: [pD && (0, xD.jsx)("div", {
                className: fD()("ShaderPackCardNotice", {
                  Warning: "warning" === pD.tone
                }),
                children: pD.text
              }), (0, xD.jsx)("div", {
                className: "ShaderPackCardName SmallTextBold",
                children: CD.name
              })]
            })]
          }), BD && (0, xD.jsxs)("div", {
            className: "ShaderPackCardStats",
            children: [(0, xD.jsxs)("div", {
              className: "ShaderPackCardUses SmallTextBold",
              children: [(0, xD.jsx)(wD.c, {
                name: "download"
              }), (0, PD.S)(BD.downloads)]
            }), ID && (0, xD.jsx)(yD.t, {
              onClick: ID.onToggle,
              isLiked: !0 === ID.isFavourite,
              isLoading: null === ID.isFavourite
            })]
          })]
        })
      })
    }
    var JD = cD(6312);

    function KD(DD) {
      let {
        results: CD,
        loading: cD,
        failed: ID,
        onRetry: pD,
        view: iD,
        previewView: bD
      } = DD;
      const {
        t: QD
      } = (0, nD.F)(), wD = (0, JD.i)(), SD = Date.now(), BD = null === CD ? 0 : "owned" === CD.kind ? CD.packs.length : CD.page.results.length;
      return (0, xD.jsxs)("div", {
        className: fD()("ShaderPackBrowseResults", {
          Loading: cD && null !== CD
        }),
        children: [cD && null === CD && (0, xD.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: (0, xD.jsx)(OD.e, {})
        }), ID && (0, xD.jsxs)("div", {
          className: "ShaderPackBrowseMessage",
          children: [QD("shaderPackListing:loadFailed"), (0, xD.jsx)(yD.i, {
            onClick: pD,
            children: QD("general:tryAgain")
          })]
        }), "listing" === (null === CD || void 0 === CD ? void 0 : CD.kind) && BD > 0 && (0, xD.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: CD.page.results.map((DD => (0, xD.jsx)(qD, {
            pack: {
              packId: DD.packId,
              name: DD.name,
              live: DD
            },
            view: bD,
            favourite: {
              isFavourite: wD.isFavourite(DD.packId),
              onToggle: () => {
                wD.toggle(DD.packId)
              }
            }
          }, DD.packId)))
        }), "owned" === (null === CD || void 0 === CD ? void 0 : CD.kind) && BD > 0 && (0, xD.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: CD.packs.map((DD => {
            var CD;
            return (0, xD.jsx)(qD, {
              pack: DD,
              view: bD,
              notice: DD.owner ? (0, HD.Y)(DD.owner, !(null === (CD = DD.live) || void 0 === CD || !CD.renderId), SD, QD)[0] : void 0
            }, DD.packId)
          }))
        }), null !== CD && 0 === BD && (0, xD.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: QD(aD(iD))
        })]
      })
    }

    function aD(DD) {
      return "mine" === DD.section ? "shaderPackListing:noOwnPacks" : (0, HD.s)(DD) ? "general:noResults" : "favourites" === DD.section ? "shaderPackListing:noFavourites" : "general:noResults"
    }
    var VD = cD(6325);
    const zD = 24,
      jD = {
        favourites: "general:favourites",
        mine: "shaderPackListing:mine"
      };

    function lD() {
      var DD, CD, cD, iD;
      const {
        t: OD
      } = (0, nD.F)(), PD = (0, SD.useNavigatePreserveSearch)(), UD = (0, pD.w)(), {
        userContext: qD,
        isUserContextUpdating: aD
      } = (0, vD.c)(), [lD, LD] = (0, JD.g)(), [TD, GD] = (0, JD.f)(), RD = (0, ID.useRef)(!1), [kD, dD] = (0, BD.k)(), YD = (0, HD.E)(kD), [WD, sD] = (0, ID.useState)(null !== (DD = YD.searchQuery) && void 0 !== DD ? DD : ""), ED = (0, ID.useRef)(null), {
        searchQuery: eD
      } = YD;
      (0, ID.useEffect)((() => {
        sD(null !== eD && void 0 !== eD ? eD : ""), ED.current && (ED.current.value = null !== eD && void 0 !== eD ? eD : "")
      }), [eD]);
      const [uD, hD] = (0, ID.useState)(null), [rD, AD] = (0, ID.useState)(!1), [FD, DC] = (0, ID.useState)(!1), [CC, cC] = (0, ID.useState)(0), IC = (0, ID.useRef)(0), pC = JSON.stringify(YD), iC = (0, HD.p)();

      function fC() {
        null !== iC ? (PD(iC), ND.d.set({
          openEverythingMenuName: bD.q.SETTINGS,
          openSettingsCategory: "gt"
        })) : PD("/")
      }

      function bC(DD) {
        dD((CD => {
          (0, HD.fb)(CD, {
            ...YD,
            pageNumber: 1,
            ...DD
          })
        }))
      }

      function QC() {
        const DD = WD.trim() || null;
        bC({
          searchQuery: DD,
          ...null !== DD && !RD.current && (0, HD.q)(YD) && {
            withFeatures: [],
            withoutFeatures: []
          }
        })
      }(0, oD.d)(fC), (0, JD.c)(), (0, ID.useEffect)((() => {
        if (aD) return;
        const DD = ++IC.current,
          CD = JSON.parse(pC);
        AD(!0), DC(!1), async function(DD) {
          if ("mine" === DD.section) return {
            kind: "owned",
            packs: await gD.c.getOwnedShaderPacks(qD)
          };
          const CD = "favourites" === DD.section,
            cD = CD && (0, HD.q)(DD),
            ID = await gD.c.getShaderPacks(qD, {
              sort: CD ? HD.g : DD.sort,
              features: cD ? [] : DD.withFeatures,
              withoutFeatures: cD ? [] : DD.withoutFeatures,
              searchQuery: DD.searchQuery,
              pageNumber: DD.pageNumber,
              pageSize: zD,
              onlyFavourites: CD,
              banned: (0, HD.r)(qD) ? (0, HD.c)(DD.banned) : void 0
            });
          return {
            kind: "listing",
            page: ID
          }
        }(CD).then((CD => {
          IC.current === DD && hD(CD)
        })).catch((CD => {
          IC.current === DD && (console.error("Failed to get shader packs", CD), hD(null), DC(!0))
        })).finally((() => {
          IC.current === DD && AD(!1)
        }))
      }), [pC, qD, aD, CC]);
      const [wC, SC] = (0, ID.useState)(null), BC = null !== (cD = null === (iD = ("listing" === (null === uD || void 0 === uD ? void 0 : uD.kind) ? uD.page.results : (null !== (CD = null === uD || void 0 === uD ? void 0 : uD.packs) && void 0 !== CD ? CD : []).flatMap((DD => DD.live ? [DD.live] : [])))[0]) || void 0 === iD ? void 0 : iD.baselineVersion) && void 0 !== cD ? cD : null;
      (0, ID.useEffect)((() => {
        null !== BC && SC(BC)
      }), [BC]);
      const yC = "mine" === YD.section,
        MC = (0, HD.r)(qD),
        tC = DD => {
          "explore" !== YD.section && (DD.stopPropagation(), DD.preventDefault(), bC({
            section: "explore"
          }))
        };
      return (0, xD.jsxs)("div", {
        className: "ShaderPackBrowse AnimFadeIn",
        children: [(0, xD.jsx)(yD.e, {
          onClick: fC,
          children: OD(null === iC ? "homePage:backToGames" : "shaderPackListing:backToSettings")
        }), (0, xD.jsxs)("div", {
          className: "ShaderPackBrowseHeader",
          children: [(0, xD.jsxs)("div", {
            className: "ShaderPackBrowseHeaderRow",
            children: [(0, xD.jsx)("h1", {
              className: "VisuallyHidden",
              children: OD("shaderPackListing:title")
            }), (0, xD.jsxs)("div", {
              className: "ShaderPackBrowseTabs",
              children: [(0, xD.jsx)("div", {
                className: fD()("ShaderPackBrowseSort", {
                  Active: "explore" === YD.section
                }),
                onMouseDownCapture: tC,
                onTouchEndCapture: tC,
                children: (0, xD.jsx)(MD.b, {
                  options: QD.z.map((DD => ({
                    value: DD,
                    label: OD(HD.bb[DD])
                  }))),
                  value: YD.sort,
                  onChange: DD => {
                    bC({
                      section: "explore",
                      sort: DD.value
                    })
                  }
                })
              }), Object.keys(jD).map((DD => (0, xD.jsx)(yD.P, {
                active: YD.section === DD,
                onClick: () => {
                  bC({
                    section: DD
                  })
                },
                children: OD(jD[DD])
              }, DD)))]
            }), !yC && (0, xD.jsx)("div", {
              className: "ShaderPackBrowseDivider"
            }), !yC && (0, xD.jsxs)("div", {
              className: "ShaderPackBrowseSearch",
              children: [(0, xD.jsx)("div", {
                className: "ShaderPackBrowseSearchIcon",
                children: (0, xD.jsx)(wD.c, {
                  name: "magnifying-glass"
                })
              }), (0, xD.jsx)(ZD.b, {
                className: "ShaderPackBrowseSearchInput",
                placeholderText: OD("shaderPackListing:searchPlaceholder"),
                maxLength: QD.N,
                defaultValue: WD,
                domRef: ED,
                onValueChange: sD,
                onEnter: QC
              }), (0, xD.jsx)(yD.i, {
                onClick: QC,
                children: OD("general:search")
              })]
            }), !yC && (0, xD.jsxs)(yD.P, {
              className: fD()("ShaderPackBrowseFilterToggle", {
                Open: TD
              }),
              pressed: TD,
              onClick: () => {
                GD(!TD)
              },
              children: [OD("shaderPackListing:filter"), " ", (0, xD.jsx)(wD.c, {
                name: TD ? "angle-up" : "angle-down"
              })]
            }), (0, xD.jsx)("div", {
              className: "ShaderPackBrowseSpace"
            }), mD.featureFlags.settings.canUseShaderPacks && (0, xD.jsxs)(yD.o, {
              onClick: () => {
                PD(HD.ab)
              },
              children: [(0, xD.jsx)(wD.c, {
                name: "upload"
              }), " ", OD("shaderPackListing:publish")]
            })]
          }), !yC && TD && (0, xD.jsxs)("div", {
            className: "ShaderPackBrowseFeatures",
            children: [HD.x.map((DD => {
              const CD = (0, HD.k)(YD, DD),
                cD = OD(HD.M[DD]);
              return (0, xD.jsx)(yD.P, {
                className: fD()("ShaderPackBrowseFeature", {
                  Without: "without" === CD
                }),
                active: "with" === CD,
                pressed: null !== CD,
                onClick: () => {
                  RD.current = !0, bC((0, HD.eb)(YD, DD))
                },
                children: (0, xD.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureLabel",
                  children: [(0, xD.jsxs)("span", {
                    className: "ShaderPackBrowseFeatureReserve",
                    children: [(0, xD.jsx)(wD.c, {
                      name: "check"
                    }), " ", cD]
                  }), (0, xD.jsxs)("span", {
                    children: [null !== CD && (0, xD.jsx)(wD.c, {
                      name: "with" === CD ? "check" : "xmark"
                    }), " ", cD]
                  })]
                })
              }, DD)
            })), MC && (0, xD.jsx)(yD.P, {
              className: fD()("ShaderPackBrowseFeature", {
                Without: "without" === YD.banned
              }),
              active: "with" === YD.banned,
              pressed: null !== YD.banned,
              onClick: () => {
                const DD = "without" === YD.banned && !RD.current && (0, HD.q)(YD);
                bC({
                  banned: (0, HD.A)(YD.banned),
                  ...DD && {
                    withFeatures: [],
                    withoutFeatures: []
                  }
                })
              },
              children: (0, xD.jsxs)("span", {
                className: "ShaderPackBrowseFeatureLabel",
                children: [(0, xD.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureReserve",
                  children: [(0, xD.jsx)(wD.c, {
                    name: "check"
                  }), " BANNED"]
                }), (0, xD.jsxs)("span", {
                  children: [null !== YD.banned && (0, xD.jsx)(wD.c, {
                    name: "with" === YD.banned ? "check" : "xmark"
                  }), " BANNED"]
                })]
              })
            })]
          })]
        }), (!yC || null !== wC) && (0, xD.jsx)("div", {
          className: "ShaderPackBrowseScenes",
          children: (0, xD.jsx)(VD.d, {
            selected: lD,
            onSelect: LD,
            imageUrl: DD => null === wC ? null : (0, QD.p)(XD.clientSideServerUrls.s3Url, wC, DD, "thumb")
          })
        }), (0, xD.jsx)(KD, {
          results: uD,
          loading: rD,
          failed: FD,
          onRetry: () => {
            cC((DD => DD + 1))
          },
          view: YD,
          previewView: lD
        }), "listing" === (null === uD || void 0 === uD ? void 0 : uD.kind) && (0, xD.jsx)(tD.c, {
          className: "ShaderPackBrowsePagination",
          page: uD.page.pageNumber,
          totalPages: uD.page.totalPages,
          onSetPage: DD => {
            dD((CD => {
              (0, BD.h)(CD, DD)
            }))
          },
          getPageHref: function(DD) {
            const CD = new URLSearchParams(kD);
            (0, BD.h)(CD, DD);
            const cD = CD.toString();
            return cD ? `${UD.pathname}?${cD}` : UD.pathname
          }
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);