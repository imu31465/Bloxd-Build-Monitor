export const id = 109;
export const ids = [109];
export const modules = {
  5509: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      default: () => Ec
    });
    var Vc = nc(73),
      Ic = nc(1344),
      rB = nc(912),
      uc = nc.n(rB),
      sc = nc(244),
      Mc = nc(5523),
      Pc = nc(926),
      qB = nc(1330),
      Oc = nc(3668),
      Tc = nc(1255),
      fc = nc(2311),
      mB = nc(3672),
      ec = nc(1485),
      tB = nc(3659),
      Sc = nc(985),
      yB = nc(27),
      zB = nc(1314),
      pc = nc(1062),
      hc = nc(107),
      aB = nc(1051),
      lc = nc(1188),
      Yc = nc(1090),
      Lc = nc(5516),
      gB = nc(5526),
      Uc = nc(957);

    function bB(cB) {
      let {
        pack: Bc,
        view: nc,
        favourite: Vc,
        notice: Ic
      } = cB;
      const {
        width: rB,
        height: sc
      } = Mc.q.thumb, {
        live: Oc
      } = Bc;
      return (0, Uc.jsx)("div", {
        className: "ShaderPackCard",
        children: (0, Uc.jsxs)("div", {
          className: "ShaderPackCardTile",
          children: [(0, Uc.jsxs)(qB.LinkPreserveSearch, {
            to: (0, Lc.db)(Bc.packId),
            className: "ShaderPackCardLink",
            children: [Oc && (0, Uc.jsx)("img", {
              className: "ShaderPackCardImage",
              src: (0, Mc.t)(pc.clientSideServerUrls.s3Url, Oc, nc, "thumb"),
              width: rB,
              height: sc,
              loading: "lazy",
              alt: "",
              draggable: !1
            }), Oc && (0, Uc.jsx)(gB.d, {
              item: Oc
            }), !Oc && (0, Uc.jsx)("div", {
              className: "ShaderPackCardImage ShaderPackCardImagePending",
              children: (0, Uc.jsx)(Pc.e, {
                name: "hourglass"
              })
            }), (0, Uc.jsxs)("div", {
              className: "ShaderPackCardText",
              children: [Ic && (0, Uc.jsx)("div", {
                className: uc()("ShaderPackCardNotice", {
                  Warning: "warning" === Ic.tone
                }),
                children: Ic.text
              }), (0, Uc.jsx)("div", {
                className: "ShaderPackCardName SmallTextBold",
                children: Bc.name
              })]
            })]
          }), Oc && (0, Uc.jsxs)("div", {
            className: "ShaderPackCardStats",
            children: [(0, Uc.jsxs)("div", {
              className: "ShaderPackCardUses SmallTextBold",
              children: [(0, Uc.jsx)(Pc.e, {
                name: "download"
              }), (0, Yc.M)(Oc.downloads)]
            }), Vc && (0, Uc.jsx)(Tc.w, {
              onClick: Vc.onToggle,
              isLiked: !0 === Vc.isFavourite,
              isLoading: null === Vc.isFavourite
            })]
          })]
        })
      })
    }
    var Zc = nc(5533);

    function Qc(cB) {
      let {
        results: Bc,
        loading: nc,
        failed: Vc,
        onRetry: Ic,
        view: rB,
        previewView: sc
      } = cB;
      const {
        t: Mc
      } = (0, aB.x)(), Pc = (0, Zc.n)(), qB = Date.now(), Oc = null === Bc ? 0 : "owned" === Bc.kind ? Bc.packs.length : Bc.page.results.length;
      return (0, Uc.jsxs)("div", {
        className: uc()("ShaderPackBrowseResults", {
          Loading: nc && null !== Bc
        }),
        children: [nc && null === Bc && (0, Uc.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: (0, Uc.jsx)(lc.e, {})
        }), Vc && (0, Uc.jsxs)("div", {
          className: "ShaderPackBrowseMessage",
          children: [Mc("shaderPackListing:loadFailed"), (0, Uc.jsx)(Tc.d, {
            onClick: Ic,
            children: Mc("general:tryAgain")
          })]
        }), "listing" === (null === Bc || void 0 === Bc ? void 0 : Bc.kind) && Oc > 0 && (0, Uc.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: Bc.page.results.map((cB => (0, Uc.jsx)(bB, {
            pack: {
              packId: cB.packId,
              name: cB.name,
              live: cB
            },
            view: sc,
            favourite: {
              isFavourite: Pc.isFavourite(cB.packId),
              onToggle: () => {
                Pc.toggle(cB.packId)
              }
            }
          }, cB.packId)))
        }), "owned" === (null === Bc || void 0 === Bc ? void 0 : Bc.kind) && Oc > 0 && (0, Uc.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: Bc.packs.map((cB => {
            var Bc;
            return (0, Uc.jsx)(bB, {
              pack: cB,
              view: sc,
              notice: cB.owner ? (0, Lc.$)(cB.owner, !(null === (Bc = cB.live) || void 0 === Bc || !Bc.renderId), qB, Mc)[0] : void 0
            }, cB.packId)
          }))
        }), null !== Bc && 0 === Oc && (0, Uc.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: Mc(Cc(rB))
        })]
      })
    }

    function Cc(cB) {
      return "mine" === cB.section ? "shaderPackListing:noOwnPacks" : (0, Lc.x)(cB) ? "general:noResults" : "favourites" === cB.section ? "shaderPackListing:noFavourites" : "general:noResults"
    }
    var vB = nc(5546);
    const Dc = 24,
      Nc = {
        favourites: "general:favourites",
        mine: "shaderPackListing:mine"
      };

    function Ec() {
      var cB, Bc, nc, rB;
      const {
        t: lc
      } = (0, aB.x)(), Yc = (0, qB.useNavigatePreserveSearch)(), gB = (0, Ic.s)(), {
        userContext: bB,
        isUserContextUpdating: Cc
      } = (0, Sc.c)(), [Ec, oc] = (0, Zc.k)(), [Wc, wc] = (0, Zc.g)(), kB = (0, Vc.useRef)(!1), [Xc, Hc] = (0, Oc.l)(), Fc = (0, Lc.I)(Xc), [Jc, jB] = (0, Vc.useState)(null !== (cB = Fc.searchQuery) && void 0 !== cB ? cB : ""), Rc = (0, Vc.useRef)(null), {
        searchQuery: iB
      } = Fc;
      (0, Vc.useEffect)((() => {
        jB(null !== iB && void 0 !== iB ? iB : ""), Rc.current && (Rc.current.value = null !== iB && void 0 !== iB ? iB : "")
      }), [iB]);
      const [Kc, xB] = (0, Vc.useState)(null), [dc, Ac] = (0, Vc.useState)(!1), [Gc, cn] = (0, Vc.useState)(!1), [BB, nB] = (0, Vc.useState)(0), VB = (0, Vc.useRef)(0), IB = JSON.stringify(Fc), rn = (0, Lc.o)();

      function uB() {
        null !== rn ? (Yc(rn), yB.d.set({
          openEverythingMenuName: sc.i.SETTINGS,
          openSettingsCategory: "qI"
        })) : Yc("/")
      }

      function sB(cB) {
        Hc((Bc => {
          (0, Lc.pb)(Bc, {
            ...Fc,
            pageNumber: 1,
            ...cB
          })
        }))
      }

      function MB() {
        const cB = Jc.trim() || null;
        sB({
          searchQuery: cB,
          ...null !== cB && !kB.current && (0, Lc.r)(Fc) && {
            withFeatures: [],
            withoutFeatures: []
          }
        })
      }(0, tB.e)(uB), (0, Zc.d)(), (0, Vc.useEffect)((() => {
        if (Cc) return;
        const cB = ++VB.current,
          Bc = JSON.parse(IB);
        Ac(!0), cn(!1), async function(cB) {
          if ("mine" === cB.section) return {
            kind: "owned",
            packs: await zB.e.getOwnedShaderPacks(bB)
          };
          const Bc = "favourites" === cB.section,
            nc = Bc && (0, Lc.r)(cB),
            Vc = await zB.e.getShaderPacks(bB, {
              sort: Bc ? Lc.g : cB.sort,
              features: nc ? [] : cB.withFeatures,
              withoutFeatures: nc ? [] : cB.withoutFeatures,
              searchQuery: cB.searchQuery,
              pageNumber: cB.pageNumber,
              pageSize: Dc,
              onlyFavourites: Bc,
              banned: (0, Lc.t)(bB) ? (0, Lc.c)(cB.banned) : void 0
            });
          return {
            kind: "listing",
            page: Vc
          }
        }(Bc).then((Bc => {
          VB.current === cB && xB(Bc)
        })).catch((Bc => {
          VB.current === cB && (console.error("Failed to get shader packs", Bc), xB(null), cn(!0))
        })).finally((() => {
          VB.current === cB && Ac(!1)
        }))
      }), [IB, bB, Cc, BB]);
      const [PB, qn] = (0, Vc.useState)(null), OB = null !== (nc = null === (rB = ("listing" === (null === Kc || void 0 === Kc ? void 0 : Kc.kind) ? Kc.page.results : (null !== (Bc = null === Kc || void 0 === Kc ? void 0 : Kc.packs) && void 0 !== Bc ? Bc : []).flatMap((cB => cB.live ? [cB.live] : [])))[0]) || void 0 === rB ? void 0 : rB.baselineVersion) && void 0 !== nc ? nc : null;
      (0, Vc.useEffect)((() => {
        null !== OB && qn(OB)
      }), [OB]);
      const TB = "mine" === Fc.section,
        fB = (0, Lc.t)(bB),
        mn = cB => {
          "explore" !== Fc.section && (cB.stopPropagation(), cB.preventDefault(), sB({
            section: "explore"
          }))
        };
      return (0, Uc.jsxs)("div", {
        className: "ShaderPackBrowse AnimFadeIn",
        children: [(0, Uc.jsx)(Tc.c, {
          onClick: uB,
          children: lc(null === rn ? "homePage:backToGames" : "shaderPackListing:backToSettings")
        }), (0, Uc.jsxs)("div", {
          className: "ShaderPackBrowseHeader",
          children: [(0, Uc.jsxs)("div", {
            className: "ShaderPackBrowseHeaderRow",
            children: [(0, Uc.jsx)("h1", {
              className: "VisuallyHidden",
              children: lc("shaderPackListing:title")
            }), (0, Uc.jsxs)("div", {
              className: "ShaderPackBrowseTabs",
              children: [(0, Uc.jsx)("div", {
                className: uc()("ShaderPackBrowseSort", {
                  Active: "explore" === Fc.section
                }),
                onMouseDownCapture: mn,
                onTouchEndCapture: mn,
                children: (0, Uc.jsx)(fc.c, {
                  options: Mc.w.map((cB => ({
                    value: cB,
                    label: lc(Lc.ib[cB])
                  }))),
                  value: Fc.sort,
                  onChange: cB => {
                    sB({
                      section: "explore",
                      sort: cB.value
                    })
                  }
                })
              }), Object.keys(Nc).map((cB => (0, Uc.jsx)(Tc.Q, {
                active: Fc.section === cB,
                onClick: () => {
                  sB({
                    section: cB
                  })
                },
                children: lc(Nc[cB])
              }, cB)))]
            }), !TB && (0, Uc.jsx)("div", {
              className: "ShaderPackBrowseDivider"
            }), !TB && (0, Uc.jsxs)("div", {
              className: "ShaderPackBrowseSearch",
              children: [(0, Uc.jsx)("div", {
                className: "ShaderPackBrowseSearchIcon",
                children: (0, Uc.jsx)(Pc.e, {
                  name: "magnifying-glass"
                })
              }), (0, Uc.jsx)(ec.e, {
                className: "ShaderPackBrowseSearchInput",
                placeholderText: lc("shaderPackListing:searchPlaceholder"),
                maxLength: Mc.L,
                defaultValue: Jc,
                domRef: Rc,
                onValueChange: jB,
                onEnter: MB
              }), (0, Uc.jsx)(Tc.d, {
                onClick: MB,
                children: lc("general:search")
              })]
            }), !TB && (0, Uc.jsxs)(Tc.Q, {
              className: uc()("ShaderPackBrowseFilterToggle", {
                Open: Wc
              }),
              pressed: Wc,
              onClick: () => {
                wc(!Wc)
              },
              children: [lc("shaderPackListing:filter"), " ", (0, Uc.jsx)(Pc.e, {
                name: Wc ? "angle-up" : "angle-down"
              })]
            }), (0, Uc.jsx)("div", {
              className: "ShaderPackBrowseSpace"
            }), hc.featureFlags.settings.canUseShaderPacks && (0, Uc.jsxs)(Tc.n, {
              onClick: () => {
                Yc(Lc.gb)
              },
              children: [(0, Uc.jsx)(Pc.e, {
                name: "upload"
              }), " ", lc("shaderPackListing:publish")]
            })]
          }), !TB && Wc && (0, Uc.jsxs)("div", {
            className: "ShaderPackBrowseFeatures",
            children: [Lc.D.map((cB => {
              const Bc = (0, Lc.k)(Fc, cB),
                nc = lc(Lc.O[cB]);
              return (0, Uc.jsx)(Tc.Q, {
                className: uc()("ShaderPackBrowseFeature", {
                  Without: "without" === Bc
                }),
                active: "with" === Bc,
                pressed: null !== Bc,
                onClick: () => {
                  kB.current = !0, sB((0, Lc.mb)(Fc, cB))
                },
                children: (0, Uc.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureLabel",
                  children: [(0, Uc.jsxs)("span", {
                    className: "ShaderPackBrowseFeatureReserve",
                    children: [(0, Uc.jsx)(Pc.e, {
                      name: "check"
                    }), " ", nc]
                  }), (0, Uc.jsxs)("span", {
                    children: [null !== Bc && (0, Uc.jsx)(Pc.e, {
                      name: "with" === Bc ? "check" : "xmark"
                    }), " ", nc]
                  })]
                })
              }, cB)
            })), fB && (0, Uc.jsx)(Tc.Q, {
              className: uc()("ShaderPackBrowseFeature", {
                Without: "without" === Fc.banned
              }),
              active: "with" === Fc.banned,
              pressed: null !== Fc.banned,
              onClick: () => {
                const cB = "without" === Fc.banned && !kB.current && (0, Lc.r)(Fc);
                sB({
                  banned: (0, Lc.H)(Fc.banned),
                  ...cB && {
                    withFeatures: [],
                    withoutFeatures: []
                  }
                })
              },
              children: (0, Uc.jsxs)("span", {
                className: "ShaderPackBrowseFeatureLabel",
                children: [(0, Uc.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureReserve",
                  children: [(0, Uc.jsx)(Pc.e, {
                    name: "check"
                  }), " BANNED"]
                }), (0, Uc.jsxs)("span", {
                  children: [null !== Fc.banned && (0, Uc.jsx)(Pc.e, {
                    name: "with" === Fc.banned ? "check" : "xmark"
                  }), " BANNED"]
                })]
              })
            })]
          })]
        }), (!TB || null !== PB) && (0, Uc.jsx)("div", {
          className: "ShaderPackBrowseScenes",
          children: (0, Uc.jsx)(vB.b, {
            selected: Ec,
            onSelect: oc,
            imageUrl: cB => null === PB ? null : (0, Mc.l)(pc.clientSideServerUrls.s3Url, PB, cB, "thumb")
          })
        }), (0, Uc.jsx)(Qc, {
          results: Kc,
          loading: dc,
          failed: Gc,
          onRetry: () => {
            nB((cB => cB + 1))
          },
          view: Fc,
          previewView: Ec
        }), "listing" === (null === Kc || void 0 === Kc ? void 0 : Kc.kind) && (0, Uc.jsx)(mB.c, {
          className: "ShaderPackBrowsePagination",
          page: Kc.page.pageNumber,
          totalPages: Kc.page.totalPages,
          onSetPage: cB => {
            Hc((Bc => {
              (0, Oc.k)(Bc, cB)
            }))
          },
          getPageHref: function(cB) {
            const Bc = new URLSearchParams(Xc);
            (0, Oc.k)(Bc, cB);
            const nc = Bc.toString();
            return nc ? `${gB.pathname}?${nc}` : gB.pathname
          }
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);