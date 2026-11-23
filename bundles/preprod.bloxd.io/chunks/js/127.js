export const id = 127;
export const ids = [127];
export const modules = {
  6553: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      default: () => XC
    });
    var QC = ZC(48),
      wC = ZC(1463),
      bC = ZC(1002),
      nC = ZC.n(bC),
      fC = ZC(310),
      oC = ZC(6560),
      qC = ZC(1013),
      FC = ZC(1453),
      WC = ZC(4496),
      NC = ZC(1388),
      MC = ZC(3113),
      gC = ZC(4503),
      SC = ZC(1593),
      pC = ZC(4491),
      PC = ZC(1076),
      GC = ZC(20),
      RC = ZC(1439),
      AC = ZC(1149),
      xC = ZC(77),
      JC = ZC(1143),
      IC = ZC(1295),
      iC = ZC(1169),
      vC = ZC(6556),
      eC = ZC(6562),
      hC = ZC(1056);

    function KC(CC) {
      let {
        pack: zC,
        view: ZC,
        favourite: QC,
        notice: wC
      } = CC;
      const {
        width: bC,
        height: fC
      } = oC.s.thumb, {
        live: WC
      } = zC;
      return (0, hC.jsx)("div", {
        className: "ShaderPackCard",
        children: (0, hC.jsxs)("div", {
          className: "ShaderPackCardTile",
          children: [(0, hC.jsxs)(FC.LinkPreserveSearch, {
            to: (0, vC.$)(zC.packId),
            className: "ShaderPackCardLink",
            children: [WC && (0, hC.jsx)("img", {
              className: "ShaderPackCardImage",
              src: (0, oC.w)(AC.clientSideServerUrls.s3Url, WC, ZC, "thumb"),
              width: bC,
              height: fC,
              loading: "lazy",
              alt: "",
              draggable: !1
            }), WC && (0, hC.jsx)(eC.c, {
              item: WC
            }), !WC && (0, hC.jsx)("div", {
              className: "ShaderPackCardImage ShaderPackCardImagePending",
              children: (0, hC.jsx)(qC.c, {
                name: "hourglass"
              })
            }), (0, hC.jsxs)("div", {
              className: "ShaderPackCardText",
              children: [wC && (0, hC.jsx)("div", {
                className: nC()("ShaderPackCardNotice", {
                  Warning: "warning" === wC.tone
                }),
                children: wC.text
              }), (0, hC.jsx)("div", {
                className: "ShaderPackCardName SmallTextBold",
                children: zC.name
              })]
            })]
          }), WC && (0, hC.jsxs)("div", {
            className: "ShaderPackCardStats",
            children: [(0, hC.jsxs)("div", {
              className: "ShaderPackCardUses SmallTextBold",
              children: [(0, hC.jsx)(qC.c, {
                name: "download"
              }), (0, iC.Z)(WC.downloads)]
            }), QC && (0, hC.jsx)(NC.x, {
              onClick: QC.onToggle,
              isLiked: !0 === QC.isFavourite,
              isLoading: null === QC.isFavourite
            })]
          })]
        })
      })
    }
    var YC = ZC(6570);

    function dC(CC) {
      let {
        results: zC,
        loading: ZC,
        failed: QC,
        onRetry: wC,
        view: bC,
        previewView: fC
      } = CC;
      const {
        t: oC
      } = (0, JC.y)(), qC = (0, YC.j)(), FC = Date.now(), WC = null === zC ? 0 : "owned" === zC.kind ? zC.packs.length : zC.page.results.length;
      return (0, hC.jsxs)("div", {
        className: nC()("ShaderPackBrowseResults", {
          Loading: ZC && null !== zC
        }),
        children: [ZC && null === zC && (0, hC.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: (0, hC.jsx)(IC.d, {})
        }), QC && (0, hC.jsxs)("div", {
          className: "ShaderPackBrowseMessage",
          children: [oC("shaderPackListing:loadFailed"), (0, hC.jsx)(NC.g, {
            onClick: wC,
            children: oC("general:tryAgain")
          })]
        }), "listing" === (null === zC || void 0 === zC ? void 0 : zC.kind) && WC > 0 && (0, hC.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: zC.page.results.map((CC => (0, hC.jsx)(KC, {
            pack: {
              packId: CC.packId,
              name: CC.name,
              live: CC
            },
            view: fC,
            favourite: {
              isFavourite: qC.isFavourite(CC.packId),
              onToggle: () => {
                qC.toggle(CC.packId)
              }
            }
          }, CC.packId)))
        }), "owned" === (null === zC || void 0 === zC ? void 0 : zC.kind) && WC > 0 && (0, hC.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: zC.packs.map((CC => {
            var zC;
            return (0, hC.jsx)(KC, {
              pack: CC,
              view: fC,
              notice: CC.owner ? (0, vC.X)(CC.owner, !(null === (zC = CC.live) || void 0 === zC || !zC.renderId), FC, oC)[0] : void 0
            }, CC.packId)
          }))
        }), null !== zC && 0 === WC && (0, hC.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: oC(mC(bC))
        })]
      })
    }

    function mC(CC) {
      return "mine" === CC.section ? "shaderPackListing:noOwnPacks" : (0, vC.w)(CC) ? "general:noResults" : "favourites" === CC.section ? "shaderPackListing:noFavourites" : "general:noResults"
    }
    var HC = ZC(6580);
    const EC = 24,
      lC = {
        favourites: "general:favourites",
        mine: "shaderPackListing:mine"
      };

    function XC() {
      var CC, zC, ZC, bC;
      const {
        t: IC
      } = (0, JC.y)(), iC = (0, FC.useNavigatePreserveSearch)(), eC = (0, wC.v)(), {
        userContext: KC,
        isUserContextUpdating: mC
      } = (0, PC.e)(), [XC, cC] = (0, YC.f)(), [uC, rC] = (0, YC.e)(), sC = (0, QC.useRef)(!1), [TC, aC] = (0, WC.n)(), tC = (0, vC.I)(TC), [DC, jC] = (0, QC.useState)(null !== (CC = tC.searchQuery) && void 0 !== CC ? CC : ""), yC = (0, QC.useRef)(null), {
        searchQuery: LC
      } = tC;
      (0, QC.useEffect)((() => {
        jC(null !== LC && void 0 !== LC ? LC : ""), yC.current && (yC.current.value = null !== LC && void 0 !== LC ? LC : "")
      }), [LC]);
      const [UC, BC] = (0, QC.useState)(null), [OC, kC] = (0, QC.useState)(!1), [VC, Cz] = (0, QC.useState)(!1), [zz, Zz] = (0, QC.useState)(0), Qz = (0, QC.useRef)(0), wz = JSON.stringify(tC), bz = (0, vC.q)();

      function nz() {
        null !== bz ? (iC(bz), GC.b.set({
          openEverythingMenuName: fC.o.SETTINGS,
          openSettingsCategory: "zg"
        })) : iC("/")
      }

      function fz(CC) {
        aC((zC => {
          (0, vC.jb)(zC, {
            ...tC,
            pageNumber: 1,
            ...CC
          })
        }))
      }

      function oz() {
        const CC = DC.trim() || null;
        fz({
          searchQuery: CC,
          ...null !== CC && !sC.current && (0, vC.r)(tC) && {
            withFeatures: [],
            withoutFeatures: []
          }
        })
      }(0, pC.e)(nz), (0, YC.b)(), (0, QC.useEffect)((() => {
        if (mC) return;
        const CC = ++Qz.current,
          zC = JSON.parse(wz);
        kC(!0), Cz(!1), async function(CC) {
          if ("mine" === CC.section) return {
            kind: "owned",
            packs: await RC.d.getOwnedShaderPacks(KC)
          };
          const zC = "favourites" === CC.section,
            ZC = zC && (0, vC.r)(CC),
            QC = await RC.d.getShaderPacks(KC, {
              sort: zC ? vC.f : CC.sort,
              features: ZC ? [] : CC.withFeatures,
              withoutFeatures: ZC ? [] : CC.withoutFeatures,
              searchQuery: CC.searchQuery,
              pageNumber: CC.pageNumber,
              pageSize: EC,
              onlyFavourites: zC,
              banned: (0, vC.u)(KC) ? (0, vC.e)(CC.banned) : void 0
            });
          return {
            kind: "listing",
            page: QC
          }
        }(zC).then((zC => {
          Qz.current === CC && BC(zC)
        })).catch((zC => {
          Qz.current === CC && (console.error("Failed to get shader packs", zC), BC(null), Cz(!0))
        })).finally((() => {
          Qz.current === CC && kC(!1)
        }))
      }), [wz, KC, mC, zz]);
      const [qz, Fz] = (0, QC.useState)(null), Wz = null !== (ZC = null === (bC = ("listing" === (null === UC || void 0 === UC ? void 0 : UC.kind) ? UC.page.results : (null !== (zC = null === UC || void 0 === UC ? void 0 : UC.packs) && void 0 !== zC ? zC : []).flatMap((CC => CC.live ? [CC.live] : [])))[0]) || void 0 === bC ? void 0 : bC.baselineVersion) && void 0 !== ZC ? ZC : null;
      (0, QC.useEffect)((() => {
        null !== Wz && Fz(Wz)
      }), [Wz]);
      const Nz = "mine" === tC.section,
        Mz = (0, vC.u)(KC),
        gz = CC => {
          "explore" !== tC.section && (CC.stopPropagation(), CC.preventDefault(), fz({
            section: "explore"
          }))
        };
      return (0, hC.jsxs)("div", {
        className: "ShaderPackBrowse AnimFadeIn",
        children: [(0, hC.jsx)(NC.c, {
          onClick: nz,
          children: IC(null === bz ? "homePage:backToGames" : "shaderPackListing:backToSettings")
        }), (0, hC.jsxs)("div", {
          className: "ShaderPackBrowseHeader",
          children: [(0, hC.jsxs)("div", {
            className: "ShaderPackBrowseHeaderRow",
            children: [(0, hC.jsx)("h1", {
              className: "VisuallyHidden",
              children: IC("shaderPackListing:title")
            }), (0, hC.jsxs)("div", {
              className: "ShaderPackBrowseTabs",
              children: [(0, hC.jsx)("div", {
                className: nC()("ShaderPackBrowseSort", {
                  Active: "explore" === tC.section
                }),
                onMouseDownCapture: gz,
                onTouchEndCapture: gz,
                children: (0, hC.jsx)(MC.b, {
                  options: oC.x.map((CC => ({
                    value: CC,
                    label: IC(vC.db[CC])
                  }))),
                  value: tC.sort,
                  onChange: CC => {
                    fz({
                      section: "explore",
                      sort: CC.value
                    })
                  }
                })
              }), Object.keys(lC).map((CC => (0, hC.jsx)(NC.O, {
                active: tC.section === CC,
                onClick: () => {
                  fz({
                    section: CC
                  })
                },
                children: IC(lC[CC])
              }, CC)))]
            }), !Nz && (0, hC.jsx)("div", {
              className: "ShaderPackBrowseDivider"
            }), !Nz && (0, hC.jsxs)("div", {
              className: "ShaderPackBrowseSearch",
              children: [(0, hC.jsx)("div", {
                className: "ShaderPackBrowseSearchIcon",
                children: (0, hC.jsx)(qC.c, {
                  name: "magnifying-glass"
                })
              }), (0, hC.jsx)(SC.c, {
                className: "ShaderPackBrowseSearchInput",
                placeholderText: IC("shaderPackListing:searchPlaceholder"),
                maxLength: oC.G,
                defaultValue: DC,
                domRef: yC,
                onValueChange: jC,
                onEnter: oz
              }), (0, hC.jsx)(NC.g, {
                onClick: oz,
                children: IC("general:search")
              })]
            }), !Nz && (0, hC.jsxs)(NC.O, {
              className: nC()("ShaderPackBrowseFilterToggle", {
                Open: uC
              }),
              pressed: uC,
              onClick: () => {
                rC(!uC)
              },
              children: [IC("shaderPackListing:filter"), " ", (0, hC.jsx)(qC.c, {
                name: uC ? "angle-up" : "angle-down"
              })]
            }), (0, hC.jsx)("div", {
              className: "ShaderPackBrowseSpace"
            }), xC.featureFlags.settings.canUseShaderPacks && (0, hC.jsxs)(NC.o, {
              onClick: () => {
                iC(vC.ab)
              },
              children: [(0, hC.jsx)(qC.c, {
                name: "upload"
              }), " ", IC("shaderPackListing:publish")]
            })]
          }), !Nz && uC && (0, hC.jsxs)("div", {
            className: "ShaderPackBrowseFeatures",
            children: [vC.B.map((CC => {
              const zC = (0, vC.i)(tC, CC),
                ZC = IC(vC.Q[CC]);
              return (0, hC.jsx)(NC.O, {
                className: nC()("ShaderPackBrowseFeature", {
                  Without: "without" === zC
                }),
                active: "with" === zC,
                pressed: null !== zC,
                onClick: () => {
                  sC.current = !0, fz((0, vC.ib)(tC, CC))
                },
                children: (0, hC.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureLabel",
                  children: [(0, hC.jsxs)("span", {
                    className: "ShaderPackBrowseFeatureReserve",
                    children: [(0, hC.jsx)(qC.c, {
                      name: "check"
                    }), " ", ZC]
                  }), (0, hC.jsxs)("span", {
                    children: [null !== zC && (0, hC.jsx)(qC.c, {
                      name: "with" === zC ? "check" : "xmark"
                    }), " ", ZC]
                  })]
                })
              }, CC)
            })), Mz && (0, hC.jsx)(NC.O, {
              className: nC()("ShaderPackBrowseFeature", {
                Without: "without" === tC.banned
              }),
              active: "with" === tC.banned,
              pressed: null !== tC.banned,
              onClick: () => {
                const CC = "without" === tC.banned && !sC.current && (0, vC.r)(tC);
                fz({
                  banned: (0, vC.E)(tC.banned),
                  ...CC && {
                    withFeatures: [],
                    withoutFeatures: []
                  }
                })
              },
              children: (0, hC.jsxs)("span", {
                className: "ShaderPackBrowseFeatureLabel",
                children: [(0, hC.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureReserve",
                  children: [(0, hC.jsx)(qC.c, {
                    name: "check"
                  }), " BANNED"]
                }), (0, hC.jsxs)("span", {
                  children: [null !== tC.banned && (0, hC.jsx)(qC.c, {
                    name: "with" === tC.banned ? "check" : "xmark"
                  }), " BANNED"]
                })]
              })
            })]
          })]
        }), (!Nz || null !== qz) && (0, hC.jsx)("div", {
          className: "ShaderPackBrowseScenes",
          children: (0, hC.jsx)(HC.c, {
            selected: XC,
            onSelect: cC,
            imageUrl: CC => null === qz ? null : (0, oC.m)(AC.clientSideServerUrls.s3Url, qz, CC, "thumb")
          })
        }), (0, hC.jsx)(dC, {
          results: UC,
          loading: OC,
          failed: VC,
          onRetry: () => {
            Zz((CC => CC + 1))
          },
          view: tC,
          previewView: XC
        }), "listing" === (null === UC || void 0 === UC ? void 0 : UC.kind) && (0, hC.jsx)(gC.c, {
          className: "ShaderPackBrowsePagination",
          page: UC.page.pageNumber,
          totalPages: UC.page.totalPages,
          onSetPage: CC => {
            aC((zC => {
              (0, WC.l)(zC, CC)
            }))
          },
          getPageHref: function(CC) {
            const zC = new URLSearchParams(TC);
            (0, WC.l)(zC, CC);
            const ZC = zC.toString();
            return ZC ? `${eC.pathname}?${ZC}` : eC.pathname
          }
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);