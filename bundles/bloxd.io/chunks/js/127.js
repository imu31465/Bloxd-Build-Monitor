export const id = 127;
export const ids = [127];
export const modules = {
  6582: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      default: () => lD
    });
    var pD = wD(58),
      sD = wD(1523),
      KD = wD(1044),
      rD = wD.n(KD),
      LD = wD(338),
      cD = wD(6594),
      gD = wD(1057),
      RD = wD(1511),
      AD = wD(4576),
      UD = wD(1447),
      fD = wD(3115),
      ID = wD(4583),
      BD = wD(1687),
      GD = wD(4572),
      hD = wD(1127),
      nD = wD(20),
      MD = wD(1495),
      OD = wD(1211),
      JD = wD(103),
      ED = wD(1200),
      QD = wD(1346),
      XD = wD(1232),
      VD = wD(6590),
      PD = wD(6597),
      CD = wD(1096);

    function xD(DD) {
      let {
        pack: zD,
        view: wD,
        favourite: pD,
        notice: sD
      } = DD;
      const {
        width: KD,
        height: LD
      } = cD.s.thumb, {
        live: AD
      } = zD;
      return (0, CD.jsx)("div", {
        className: "ShaderPackCard",
        children: (0, CD.jsxs)("div", {
          className: "ShaderPackCardTile",
          children: [(0, CD.jsxs)(RD.LinkPreserveSearch, {
            to: (0, VD.Y)(zD.packId),
            className: "ShaderPackCardLink",
            children: [AD && (0, CD.jsx)("img", {
              className: "ShaderPackCardImage",
              src: (0, cD.w)(OD.clientSideServerUrls.s3Url, AD, wD, "thumb"),
              width: KD,
              height: LD,
              loading: "lazy",
              alt: "",
              draggable: !1
            }), AD && (0, CD.jsx)(PD.d, {
              item: AD
            }), !AD && (0, CD.jsx)("div", {
              className: "ShaderPackCardImage ShaderPackCardImagePending",
              children: (0, CD.jsx)(gD.e, {
                name: "hourglass"
              })
            }), (0, CD.jsxs)("div", {
              className: "ShaderPackCardText",
              children: [sD && (0, CD.jsx)("div", {
                className: rD()("ShaderPackCardNotice", {
                  Warning: "warning" === sD.tone
                }),
                children: sD.text
              }), (0, CD.jsx)("div", {
                className: "ShaderPackCardName SmallTextBold",
                children: zD.name
              })]
            })]
          }), AD && (0, CD.jsxs)("div", {
            className: "ShaderPackCardStats",
            children: [(0, CD.jsxs)("div", {
              className: "ShaderPackCardUses SmallTextBold",
              children: [(0, CD.jsx)(gD.e, {
                name: "download"
              }), (0, XD.N)(AD.downloads)]
            }), pD && (0, CD.jsx)(UD.x, {
              onClick: pD.onToggle,
              isLiked: !0 === pD.isFavourite,
              isLoading: null === pD.isFavourite
            })]
          })]
        })
      })
    }
    var TD = wD(6601);

    function bD(DD) {
      let {
        results: zD,
        loading: wD,
        failed: pD,
        onRetry: sD,
        view: KD,
        previewView: LD
      } = DD;
      const {
        t: cD
      } = (0, ED.E)(), gD = (0, TD.k)(), RD = Date.now(), AD = null === zD ? 0 : "owned" === zD.kind ? zD.packs.length : zD.page.results.length;
      return (0, CD.jsxs)("div", {
        className: rD()("ShaderPackBrowseResults", {
          Loading: wD && null !== zD
        }),
        children: [wD && null === zD && (0, CD.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: (0, CD.jsx)(QD.e, {})
        }), pD && (0, CD.jsxs)("div", {
          className: "ShaderPackBrowseMessage",
          children: [cD("shaderPackListing:loadFailed"), (0, CD.jsx)(UD.f, {
            onClick: sD,
            children: cD("general:tryAgain")
          })]
        }), "listing" === (null === zD || void 0 === zD ? void 0 : zD.kind) && AD > 0 && (0, CD.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: zD.page.results.map((DD => (0, CD.jsx)(xD, {
            pack: {
              packId: DD.packId,
              name: DD.name,
              live: DD
            },
            view: LD,
            favourite: {
              isFavourite: gD.isFavourite(DD.packId),
              onToggle: () => {
                gD.toggle(DD.packId)
              }
            }
          }, DD.packId)))
        }), "owned" === (null === zD || void 0 === zD ? void 0 : zD.kind) && AD > 0 && (0, CD.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: zD.packs.map((DD => {
            var zD;
            return (0, CD.jsx)(xD, {
              pack: DD,
              view: LD,
              notice: DD.owner ? (0, VD.V)(DD.owner, !(null === (zD = DD.live) || void 0 === zD || !zD.renderId), RD, cD)[0] : void 0
            }, DD.packId)
          }))
        }), null !== zD && 0 === AD && (0, CD.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: cD(jD(KD))
        })]
      })
    }

    function jD(DD) {
      return "mine" === DD.section ? "shaderPackListing:noOwnPacks" : (0, VD.t)(DD) ? "general:noResults" : "favourites" === DD.section ? "shaderPackListing:noFavourites" : "general:noResults"
    }
    var dD = wD(6608);
    const SD = 24,
      iD = {
        favourites: "general:favourites",
        mine: "shaderPackListing:mine"
      };

    function lD() {
      var DD, zD, wD, KD;
      const {
        t: QD
      } = (0, ED.E)(), XD = (0, RD.useNavigatePreserveSearch)(), PD = (0, sD.s)(), {
        userContext: xD,
        isUserContextUpdating: jD
      } = (0, hD.c)(), [lD, WD] = (0, TD.g)(), [ND, ZD] = (0, TD.d)(), yD = (0, pD.useRef)(!1), [kD, mD] = (0, AD.r)(), eD = (0, VD.B)(kD), [oD, aD] = (0, pD.useState)(null !== (DD = eD.searchQuery) && void 0 !== DD ? DD : ""), uD = (0, pD.useRef)(null), {
        searchQuery: vD
      } = eD;
      (0, pD.useEffect)((() => {
        aD(null !== vD && void 0 !== vD ? vD : ""), uD.current && (uD.current.value = null !== vD && void 0 !== vD ? vD : "")
      }), [vD]);
      const [tD, FD] = (0, pD.useState)(null), [YD, HD] = (0, pD.useState)(!1), [qD, Dz] = (0, pD.useState)(!1), [zz, wz] = (0, pD.useState)(0), pz = (0, pD.useRef)(0), sz = JSON.stringify(eD), Kz = (0, VD.m)();

      function rz() {
        null !== Kz ? (XD(Kz), nD.e.set({
          openEverythingMenuName: LD.l.SETTINGS,
          openSettingsCategory: "KI"
        })) : XD("/")
      }

      function Lz(DD) {
        mD((zD => {
          (0, VD.lb)(zD, {
            ...eD,
            pageNumber: 1,
            ...DD
          })
        }))
      }

      function cz() {
        const DD = oD.trim() || null;
        Lz({
          searchQuery: DD,
          ...null !== DD && !yD.current && (0, VD.o)(eD) && {
            withFeatures: [],
            withoutFeatures: []
          }
        })
      }(0, GD.e)(rz), (0, TD.b)(), (0, pD.useEffect)((() => {
        if (jD) return;
        const DD = ++pz.current,
          zD = JSON.parse(sz);
        HD(!0), Dz(!1), async function(DD) {
          if ("mine" === DD.section) return {
            kind: "owned",
            packs: await MD.d.getOwnedShaderPacks(xD)
          };
          const zD = "favourites" === DD.section,
            wD = zD && (0, VD.o)(DD),
            pD = await MD.d.getShaderPacks(xD, {
              sort: zD ? VD.g : DD.sort,
              features: wD ? [] : DD.withFeatures,
              withoutFeatures: wD ? [] : DD.withoutFeatures,
              searchQuery: DD.searchQuery,
              pageNumber: DD.pageNumber,
              pageSize: SD,
              onlyFavourites: zD,
              banned: (0, VD.q)(xD) ? (0, VD.c)(DD.banned) : void 0
            });
          return {
            kind: "listing",
            page: pD
          }
        }(zD).then((zD => {
          pz.current === DD && FD(zD)
        })).catch((zD => {
          pz.current === DD && (console.error("Failed to get shader packs", zD), FD(null), Dz(!0))
        })).finally((() => {
          pz.current === DD && HD(!1)
        }))
      }), [sz, xD, jD, zz]);
      const [gz, Rz] = (0, pD.useState)(null), Az = null !== (wD = null === (KD = ("listing" === (null === tD || void 0 === tD ? void 0 : tD.kind) ? tD.page.results : (null !== (zD = null === tD || void 0 === tD ? void 0 : tD.packs) && void 0 !== zD ? zD : []).flatMap((DD => DD.live ? [DD.live] : [])))[0]) || void 0 === KD ? void 0 : KD.baselineVersion) && void 0 !== wD ? wD : null;
      (0, pD.useEffect)((() => {
        null !== Az && Rz(Az)
      }), [Az]);
      const Uz = "mine" === eD.section,
        fz = (0, VD.q)(xD),
        Iz = DD => {
          "explore" !== eD.section && (DD.stopPropagation(), DD.preventDefault(), Lz({
            section: "explore"
          }))
        };
      return (0, CD.jsxs)("div", {
        className: "ShaderPackBrowse AnimFadeIn",
        children: [(0, CD.jsx)(UD.d, {
          onClick: rz,
          children: QD(null === Kz ? "homePage:backToGames" : "shaderPackListing:backToSettings")
        }), (0, CD.jsxs)("div", {
          className: "ShaderPackBrowseHeader",
          children: [(0, CD.jsxs)("div", {
            className: "ShaderPackBrowseHeaderRow",
            children: [(0, CD.jsx)("h1", {
              className: "VisuallyHidden",
              children: QD("shaderPackListing:title")
            }), (0, CD.jsxs)("div", {
              className: "ShaderPackBrowseTabs",
              children: [(0, CD.jsx)("div", {
                className: rD()("ShaderPackBrowseSort", {
                  Active: "explore" === eD.section
                }),
                onMouseDownCapture: Iz,
                onTouchEndCapture: Iz,
                children: (0, CD.jsx)(fD.c, {
                  options: cD.A.map((DD => ({
                    value: DD,
                    label: QD(VD.cb[DD])
                  }))),
                  value: eD.sort,
                  onChange: DD => {
                    Lz({
                      section: "explore",
                      sort: DD.value
                    })
                  }
                })
              }), Object.keys(iD).map((DD => (0, CD.jsx)(UD.Y, {
                active: eD.section === DD,
                onClick: () => {
                  Lz({
                    section: DD
                  })
                },
                children: QD(iD[DD])
              }, DD)))]
            }), !Uz && (0, CD.jsx)("div", {
              className: "ShaderPackBrowseDivider"
            }), !Uz && (0, CD.jsxs)("div", {
              className: "ShaderPackBrowseSearch",
              children: [(0, CD.jsx)("div", {
                className: "ShaderPackBrowseSearchIcon",
                children: (0, CD.jsx)(gD.e, {
                  name: "magnifying-glass"
                })
              }), (0, CD.jsx)(BD.e, {
                className: "ShaderPackBrowseSearchInput",
                placeholderText: QD("shaderPackListing:searchPlaceholder"),
                maxLength: cD.K,
                defaultValue: oD,
                domRef: uD,
                onValueChange: aD,
                onEnter: cz
              }), (0, CD.jsx)(UD.f, {
                onClick: cz,
                children: QD("general:search")
              })]
            }), !Uz && (0, CD.jsxs)(UD.Y, {
              className: rD()("ShaderPackBrowseFilterToggle", {
                Open: ND
              }),
              pressed: ND,
              onClick: () => {
                ZD(!ND)
              },
              children: [QD("shaderPackListing:filter"), " ", (0, CD.jsx)(gD.e, {
                name: ND ? "angle-up" : "angle-down"
              })]
            }), (0, CD.jsx)("div", {
              className: "ShaderPackBrowseSpace"
            }), JD.featureFlags.settings.canUseShaderPacks && (0, CD.jsxs)(UD.o, {
              onClick: () => {
                XD(VD.$)
              },
              children: [(0, CD.jsx)(gD.e, {
                name: "upload"
              }), " ", QD("shaderPackListing:publish")]
            })]
          }), !Uz && ND && (0, CD.jsxs)("div", {
            className: "ShaderPackBrowseFeatures",
            children: [VD.w.map((DD => {
              const zD = (0, VD.i)(eD, DD),
                wD = QD(VD.I[DD]);
              return (0, CD.jsx)(UD.Y, {
                className: rD()("ShaderPackBrowseFeature", {
                  Without: "without" === zD
                }),
                active: "with" === zD,
                pressed: null !== zD,
                onClick: () => {
                  yD.current = !0, Lz((0, VD.kb)(eD, DD))
                },
                children: (0, CD.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureLabel",
                  children: [(0, CD.jsxs)("span", {
                    className: "ShaderPackBrowseFeatureReserve",
                    children: [(0, CD.jsx)(gD.e, {
                      name: "check"
                    }), " ", wD]
                  }), (0, CD.jsxs)("span", {
                    children: [null !== zD && (0, CD.jsx)(gD.e, {
                      name: "with" === zD ? "check" : "xmark"
                    }), " ", wD]
                  })]
                })
              }, DD)
            })), fz && (0, CD.jsx)(UD.Y, {
              className: rD()("ShaderPackBrowseFeature", {
                Without: "without" === eD.banned
              }),
              active: "with" === eD.banned,
              pressed: null !== eD.banned,
              onClick: () => {
                const DD = "without" === eD.banned && !yD.current && (0, VD.o)(eD);
                Lz({
                  banned: (0, VD.x)(eD.banned),
                  ...DD && {
                    withFeatures: [],
                    withoutFeatures: []
                  }
                })
              },
              children: (0, CD.jsxs)("span", {
                className: "ShaderPackBrowseFeatureLabel",
                children: [(0, CD.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureReserve",
                  children: [(0, CD.jsx)(gD.e, {
                    name: "check"
                  }), " BANNED"]
                }), (0, CD.jsxs)("span", {
                  children: [null !== eD.banned && (0, CD.jsx)(gD.e, {
                    name: "with" === eD.banned ? "check" : "xmark"
                  }), " BANNED"]
                })]
              })
            })]
          })]
        }), (!Uz || null !== gz) && (0, CD.jsx)("div", {
          className: "ShaderPackBrowseScenes",
          children: (0, CD.jsx)(dD.b, {
            selected: lD,
            onSelect: WD,
            imageUrl: DD => null === gz ? null : (0, cD.l)(OD.clientSideServerUrls.s3Url, gz, DD, "thumb")
          })
        }), (0, CD.jsx)(bD, {
          results: tD,
          loading: YD,
          failed: qD,
          onRetry: () => {
            wz((DD => DD + 1))
          },
          view: eD,
          previewView: lD
        }), "listing" === (null === tD || void 0 === tD ? void 0 : tD.kind) && (0, CD.jsx)(ID.c, {
          className: "ShaderPackBrowsePagination",
          page: tD.page.pageNumber,
          totalPages: tD.page.totalPages,
          onSetPage: DD => {
            mD((zD => {
              (0, AD.n)(zD, DD)
            }))
          },
          getPageHref: function(DD) {
            const zD = new URLSearchParams(kD);
            (0, AD.n)(zD, DD);
            const wD = zD.toString();
            return wD ? `${PD.pathname}?${wD}` : PD.pathname
          }
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);