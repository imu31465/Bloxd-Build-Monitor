export const id = 142;
export const ids = [142];
export const modules = {
  7126: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      default: () => CV
    });
    var JV = xV(62),
      YV = xV(1625),
      UV = xV(1146),
      yV = xV.n(UV),
      pV = xV(364),
      QV = xV(7132),
      nV = xV(1414),
      wV = xV(1612),
      ZV = xV(5037),
      vV = xV(1551),
      rV = xV(3551),
      kV = xV(5043),
      bV = xV(1772),
      EV = xV(5031),
      BV = xV(1168),
      jV = xV(27),
      qV = xV(1603),
      tV = xV(1230),
      FV = xV(99),
      TV = xV(1220),
      PV = xV(1408),
      AV = xV(1252),
      NV = xV(7130),
      XV = xV(7135),
      MV = xV(1321);

    function zV(VV) {
      let {
        pack: eV,
        view: xV,
        favourite: JV,
        notice: YV
      } = VV;
      const {
        width: UV,
        height: pV
      } = QV.w.thumb, {
        live: ZV
      } = eV;
      return (0, MV.jsx)("div", {
        className: "ShaderPackCard",
        children: (0, MV.jsxs)("div", {
          className: "ShaderPackCardTile",
          children: [(0, MV.jsxs)(wV.LinkPreserveSearch, {
            to: (0, NV.db)(eV.packId),
            className: "ShaderPackCardLink",
            children: [ZV && (0, MV.jsx)("img", {
              className: "ShaderPackCardImage",
              src: (0, QV.x)(tV.clientSideServerUrls.s3Url, ZV, xV, "thumb"),
              width: UV,
              height: pV,
              loading: "lazy",
              alt: "",
              draggable: !1
            }), ZV && (0, MV.jsx)(XV.e, {
              item: ZV
            }), !ZV && (0, MV.jsx)("div", {
              className: "ShaderPackCardImage ShaderPackCardImagePending",
              children: (0, MV.jsx)(nV.b, {
                name: "hourglass"
              })
            }), (0, MV.jsxs)("div", {
              className: "ShaderPackCardText",
              children: [YV && (0, MV.jsx)("div", {
                className: yV()("ShaderPackCardNotice", {
                  Warning: "warning" === YV.tone
                }),
                children: YV.text
              }), (0, MV.jsx)("div", {
                className: "ShaderPackCardName SmallTextBold",
                children: eV.name
              })]
            })]
          }), ZV && (0, MV.jsxs)("div", {
            className: "ShaderPackCardStats",
            children: [(0, MV.jsxs)("div", {
              className: "ShaderPackCardUses SmallTextBold",
              children: [(0, MV.jsx)(nV.b, {
                name: "download"
              }), (0, AV.N)(ZV.downloads)]
            }), JV && (0, MV.jsx)(vV.s, {
              onClick: JV.onToggle,
              isLiked: !0 === JV.isFavourite,
              isLoading: null === JV.isFavourite
            })]
          })]
        })
      })
    }
    var GV = xV(7141);

    function WV(VV) {
      let {
        results: eV,
        loading: xV,
        failed: JV,
        onRetry: YV,
        view: UV,
        previewView: pV
      } = VV;
      const {
        t: QV
      } = (0, TV.A)(), nV = (0, GV.n)(), wV = Date.now(), ZV = null === eV ? 0 : "owned" === eV.kind ? eV.packs.length : eV.page.results.length;
      return (0, MV.jsxs)("div", {
        className: yV()("ShaderPackBrowseResults", {
          Loading: xV && null !== eV
        }),
        children: [xV && null === eV && (0, MV.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: (0, MV.jsx)(PV.d, {})
        }), JV && (0, MV.jsxs)("div", {
          className: "ShaderPackBrowseMessage",
          children: [QV("shaderPackListing:loadFailed"), (0, MV.jsx)(vV.f, {
            onClick: YV,
            children: QV("general:tryAgain")
          })]
        }), "listing" === (null === eV || void 0 === eV ? void 0 : eV.kind) && ZV > 0 && (0, MV.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: eV.page.results.map((VV => (0, MV.jsx)(zV, {
            pack: {
              packId: VV.packId,
              name: VV.name,
              live: VV
            },
            view: pV,
            favourite: {
              isFavourite: nV.isFavourite(VV.packId),
              onToggle: () => {
                nV.toggle(VV.packId)
              }
            }
          }, VV.packId)))
        }), "owned" === (null === eV || void 0 === eV ? void 0 : eV.kind) && ZV > 0 && (0, MV.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: eV.packs.map((VV => {
            var eV;
            return (0, MV.jsx)(zV, {
              pack: VV,
              view: pV,
              notice: VV.owner ? (0, NV.$)(VV.owner, !(null === (eV = VV.live) || void 0 === eV || !eV.renderId), wV, QV)[0] : void 0
            }, VV.packId)
          }))
        }), null !== eV && 0 === ZV && (0, MV.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: QV(RV(UV))
        })]
      })
    }

    function RV(VV) {
      return "mine" === VV.section ? "shaderPackListing:noOwnPacks" : (0, NV.t)(VV) ? "general:noResults" : "favourites" === VV.section ? "shaderPackListing:noFavourites" : "general:noResults"
    }
    var gV = xV(7154);
    const DV = 24,
      iV = {
        favourites: "general:favourites",
        mine: "shaderPackListing:mine"
      };

    function CV() {
      var VV, eV, xV, UV;
      const {
        t: PV
      } = (0, TV.A)(), AV = (0, wV.useNavigatePreserveSearch)(), XV = (0, YV.r)(), {
        userContext: zV,
        isUserContextUpdating: RV
      } = (0, BV.d)(), [CV, aV] = (0, GV.j)(), [oV, cV] = (0, GV.g)(), hV = (0, JV.useRef)(!1), [lV, LV] = (0, ZV.n)(), fV = (0, NV.I)(lV), [mV, KV] = (0, JV.useState)(null !== (VV = fV.searchQuery) && void 0 !== VV ? VV : ""), HV = (0, JV.useRef)(null), {
        searchQuery: uV
      } = fV;
      (0, JV.useEffect)((() => {
        KV(null !== uV && void 0 !== uV ? uV : ""), HV.current && (HV.current.value = null !== uV && void 0 !== uV ? uV : "")
      }), [uV]);
      const [sV, SV] = (0, JV.useState)(null), [IV, dV] = (0, JV.useState)(!1), [OV, Ve] = (0, JV.useState)(!1), [ee, xe] = (0, JV.useState)(0), Je = (0, JV.useRef)(0), Ye = JSON.stringify(fV), Ue = (0, NV.k)();

      function ye() {
        null !== Ue ? (AV(Ue), jV.b.set({
          openEverythingMenuName: pV.q.SETTINGS,
          openSettingsCategory: "Xk"
        })) : AV("/")
      }

      function pe(VV) {
        LV((eV => {
          (0, NV.qb)(eV, {
            ...fV,
            pageNumber: 1,
            ...VV
          })
        }))
      }

      function Qe() {
        const VV = mV.trim() || null;
        pe({
          searchQuery: VV,
          ...null !== VV && !hV.current && (0, NV.o)(fV) && {
            withFeatures: [],
            withoutFeatures: []
          }
        })
      }(0, EV.d)(ye), (0, GV.e)(), (0, JV.useEffect)((() => {
        if (RV) return;
        const VV = ++Je.current,
          eV = JSON.parse(Ye);
        dV(!0), Ve(!1), async function(VV) {
          if ("mine" === VV.section) return {
            kind: "owned",
            packs: await qV.b.getOwnedShaderPacks(zV)
          };
          const eV = "favourites" === VV.section,
            xV = eV && (0, NV.o)(VV),
            JV = await qV.b.getShaderPacks(zV, {
              sort: eV ? NV.d : VV.sort,
              features: xV ? [] : VV.withFeatures,
              withoutFeatures: xV ? [] : VV.withoutFeatures,
              searchQuery: VV.searchQuery,
              pageNumber: VV.pageNumber,
              pageSize: DV,
              onlyFavourites: eV,
              banned: (0, NV.r)(zV) ? (0, NV.b)(VV.banned) : void 0
            });
          return {
            kind: "listing",
            page: JV
          }
        }(eV).then((eV => {
          Je.current === VV && SV(eV)
        })).catch((eV => {
          Je.current === VV && (console.error("Failed to get shader packs", eV), SV(null), Ve(!0))
        })).finally((() => {
          Je.current === VV && dV(!1)
        }))
      }), [Ye, zV, RV, ee]);
      const [ne, we] = (0, JV.useState)(null), Ze = null !== (xV = null === (UV = ("listing" === (null === sV || void 0 === sV ? void 0 : sV.kind) ? sV.page.results : (null !== (eV = null === sV || void 0 === sV ? void 0 : sV.packs) && void 0 !== eV ? eV : []).flatMap((VV => VV.live ? [VV.live] : [])))[0]) || void 0 === UV ? void 0 : UV.baselineVersion) && void 0 !== xV ? xV : null;
      (0, JV.useEffect)((() => {
        null !== Ze && we(Ze)
      }), [Ze]);
      const ve = "mine" === fV.section,
        re = (0, NV.r)(zV),
        ke = VV => {
          "explore" !== fV.section && (VV.stopPropagation(), VV.preventDefault(), pe({
            section: "explore"
          }))
        };
      return (0, MV.jsxs)("div", {
        className: "ShaderPackBrowse AnimFadeIn",
        children: [(0, MV.jsx)(vV.b, {
          onClick: ye,
          children: PV(null === Ue ? "homePage:backToGames" : "shaderPackListing:backToSettings")
        }), (0, MV.jsxs)("div", {
          className: "ShaderPackBrowseHeader",
          children: [(0, MV.jsxs)("div", {
            className: "ShaderPackBrowseHeaderRow",
            children: [(0, MV.jsx)("h1", {
              className: "VisuallyHidden",
              children: PV("shaderPackListing:title")
            }), (0, MV.jsxs)("div", {
              className: "ShaderPackBrowseTabs",
              children: [(0, MV.jsx)("div", {
                className: yV()("ShaderPackBrowseSort", {
                  Active: "explore" === fV.section
                }),
                onMouseDownCapture: ke,
                onTouchEndCapture: ke,
                children: (0, MV.jsx)(rV.c, {
                  options: QV.B.map((VV => ({
                    value: VV,
                    label: PV(NV.jb[VV])
                  }))),
                  value: fV.sort,
                  onChange: VV => {
                    pe({
                      section: "explore",
                      sort: VV.value
                    })
                  }
                })
              }), Object.keys(iV).map((VV => (0, MV.jsx)(vV.M, {
                active: fV.section === VV,
                onClick: () => {
                  pe({
                    section: VV
                  })
                },
                children: PV(iV[VV])
              }, VV)))]
            }), !ve && (0, MV.jsx)("div", {
              className: "ShaderPackBrowseDivider"
            }), !ve && (0, MV.jsxs)("div", {
              className: "ShaderPackBrowseSearch",
              children: [(0, MV.jsx)("div", {
                className: "ShaderPackBrowseSearchIcon",
                children: (0, MV.jsx)(nV.b, {
                  name: "magnifying-glass"
                })
              }), (0, MV.jsx)(bV.d, {
                className: "ShaderPackBrowseSearchInput",
                placeholderText: PV("shaderPackListing:searchPlaceholder"),
                maxLength: QV.P,
                defaultValue: mV,
                domRef: HV,
                onValueChange: KV,
                onEnter: Qe
              }), (0, MV.jsx)(vV.f, {
                onClick: Qe,
                children: PV("general:search")
              })]
            }), !ve && (0, MV.jsxs)(vV.M, {
              className: yV()("ShaderPackBrowseFilterToggle", {
                Open: oV
              }),
              pressed: oV,
              onClick: () => {
                cV(!oV)
              },
              children: [PV("shaderPackListing:filter"), " ", (0, MV.jsx)(nV.b, {
                name: oV ? "angle-up" : "angle-down"
              })]
            }), (0, MV.jsx)("div", {
              className: "ShaderPackBrowseSpace"
            }), FV.featureFlags.settings.canUseShaderPacks && (0, MV.jsxs)(vV.m, {
              onClick: () => {
                AV(NV.hb)
              },
              children: [(0, MV.jsx)(nV.b, {
                name: "upload"
              }), " ", PV("shaderPackListing:publish")]
            })]
          }), !ve && oV && (0, MV.jsxs)("div", {
            className: "ShaderPackBrowseFeatures",
            children: [NV.A.map((VV => {
              const eV = (0, NV.e)(fV, VV),
                xV = PV(NV.Q[VV]);
              return (0, MV.jsx)(vV.M, {
                className: yV()("ShaderPackBrowseFeature", {
                  Without: "without" === eV
                }),
                active: "with" === eV,
                pressed: null !== eV,
                onClick: () => {
                  hV.current = !0, pe((0, NV.nb)(fV, VV))
                },
                children: (0, MV.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureLabel",
                  children: [(0, MV.jsxs)("span", {
                    className: "ShaderPackBrowseFeatureReserve",
                    children: [(0, MV.jsx)(nV.b, {
                      name: "check"
                    }), " ", xV]
                  }), (0, MV.jsxs)("span", {
                    children: [null !== eV && (0, MV.jsx)(nV.b, {
                      name: "with" === eV ? "check" : "xmark"
                    }), " ", xV]
                  })]
                })
              }, VV)
            })), re && (0, MV.jsx)(vV.M, {
              className: yV()("ShaderPackBrowseFeature", {
                Without: "without" === fV.banned
              }),
              active: "with" === fV.banned,
              pressed: null !== fV.banned,
              onClick: () => {
                const VV = "without" === fV.banned && !hV.current && (0, NV.o)(fV);
                pe({
                  banned: (0, NV.E)(fV.banned),
                  ...VV && {
                    withFeatures: [],
                    withoutFeatures: []
                  }
                })
              },
              children: (0, MV.jsxs)("span", {
                className: "ShaderPackBrowseFeatureLabel",
                children: [(0, MV.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureReserve",
                  children: [(0, MV.jsx)(nV.b, {
                    name: "check"
                  }), " BANNED"]
                }), (0, MV.jsxs)("span", {
                  children: [null !== fV.banned && (0, MV.jsx)(nV.b, {
                    name: "with" === fV.banned ? "check" : "xmark"
                  }), " BANNED"]
                })]
              })
            })]
          })]
        }), (!ve || null !== ne) && (0, MV.jsx)("div", {
          className: "ShaderPackBrowseScenes",
          children: (0, MV.jsx)(gV.d, {
            selected: CV,
            onSelect: aV,
            imageUrl: VV => null === ne ? null : (0, QV.q)(tV.clientSideServerUrls.s3Url, ne, VV, "thumb")
          })
        }), (0, MV.jsx)(WV, {
          results: sV,
          loading: IV,
          failed: OV,
          onRetry: () => {
            xe((VV => VV + 1))
          },
          view: fV,
          previewView: CV
        }), "listing" === (null === sV || void 0 === sV ? void 0 : sV.kind) && (0, MV.jsx)(kV.b, {
          className: "ShaderPackBrowsePagination",
          page: sV.page.pageNumber,
          totalPages: sV.page.totalPages,
          onSetPage: VV => {
            LV((eV => {
              (0, ZV.l)(eV, VV)
            }))
          },
          getPageHref: function(VV) {
            const eV = new URLSearchParams(lV);
            (0, ZV.l)(eV, VV);
            const xV = eV.toString();
            return xV ? `${XV.pathname}?${xV}` : XV.pathname
          }
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);