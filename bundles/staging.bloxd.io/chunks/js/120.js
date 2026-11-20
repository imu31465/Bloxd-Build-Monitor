export const id = 120;
export const ids = [120];
export const modules = {
  6260: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      default: () => Iv
    });
    var hv = Pv(52),
      Sv = Pv(1505),
      ev = Pv(1035),
      gv = Pv.n(ev),
      pv = Pv(302),
      dv = Pv(6268),
      Nv = Pv(1042),
      lv = Pv(1492),
      Tv = Pv(4319),
      Wv = Pv(1442),
      wv = Pv(2917),
      av = Pv(4326),
      sv = Pv(1647),
      Cv = Pv(4310),
      iv = Pv(1108),
      cv = Pv(22),
      Gv = Pv(1482),
      mv = Pv(1184),
      jv = Pv(73),
      fv = Pv(1175),
      Fv = Pv(1327),
      Yv = Pv(1209),
      nv = Pv(6263),
      Ov = Pv(6276),
      Dv = Pv(1082);

    function Kv(vv) {
      let {
        pack: zv,
        view: Pv,
        favourite: hv,
        notice: Sv
      } = vv;
      const {
        width: ev,
        height: pv
      } = dv.t.thumb, {
        live: Tv
      } = zv;
      return (0, Dv.jsx)("div", {
        className: "ShaderPackCard",
        children: (0, Dv.jsxs)("div", {
          className: "ShaderPackCardTile",
          children: [(0, Dv.jsxs)(lv.LinkPreserveSearch, {
            to: (0, nv.U)(zv.packId),
            className: "ShaderPackCardLink",
            children: [Tv && (0, Dv.jsx)("img", {
              className: "ShaderPackCardImage",
              src: (0, dv.v)(mv.clientSideServerUrls.s3Url, Tv, Pv, "thumb"),
              width: ev,
              height: pv,
              loading: "lazy",
              alt: "",
              draggable: !1
            }), Tv && (0, Dv.jsx)(Ov.d, {
              item: Tv
            }), !Tv && (0, Dv.jsx)("div", {
              className: "ShaderPackCardImage ShaderPackCardImagePending",
              children: (0, Dv.jsx)(Nv.b, {
                name: "hourglass"
              })
            }), (0, Dv.jsxs)("div", {
              className: "ShaderPackCardText",
              children: [Sv && (0, Dv.jsx)("div", {
                className: gv()("ShaderPackCardNotice", {
                  Warning: "warning" === Sv.tone
                }),
                children: Sv.text
              }), (0, Dv.jsx)("div", {
                className: "ShaderPackCardName SmallTextBold",
                children: zv.name
              })]
            })]
          }), Tv && (0, Dv.jsxs)("div", {
            className: "ShaderPackCardStats",
            children: [(0, Dv.jsxs)("div", {
              className: "ShaderPackCardUses SmallTextBold",
              children: [(0, Dv.jsx)(Nv.b, {
                name: "download"
              }), (0, Yv.X)(Tv.downloads)]
            }), hv && (0, Dv.jsx)(Wv.m, {
              onClick: hv.onToggle,
              isLiked: !0 === hv.isFavourite,
              isLoading: null === hv.isFavourite
            })]
          })]
        })
      })
    }
    var Vv = Pv(6278);

    function Uv(vv) {
      let {
        results: zv,
        loading: Pv,
        failed: hv,
        onRetry: Sv,
        view: ev,
        previewView: pv
      } = vv;
      const {
        t: dv
      } = (0, fv.x)(), Nv = (0, Vv.i)(), lv = Date.now(), Tv = null === zv ? 0 : "owned" === zv.kind ? zv.packs.length : zv.page.results.length;
      return (0, Dv.jsxs)("div", {
        className: gv()("ShaderPackBrowseResults", {
          Loading: Pv && null !== zv
        }),
        children: [Pv && null === zv && (0, Dv.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: (0, Dv.jsx)(Fv.c, {})
        }), hv && (0, Dv.jsxs)("div", {
          className: "ShaderPackBrowseMessage",
          children: [dv("shaderPackListing:loadFailed"), (0, Dv.jsx)(Wv.d, {
            onClick: Sv,
            children: dv("general:tryAgain")
          })]
        }), "listing" === (null === zv || void 0 === zv ? void 0 : zv.kind) && Tv > 0 && (0, Dv.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: zv.page.results.map((vv => (0, Dv.jsx)(Kv, {
            pack: {
              packId: vv.packId,
              name: vv.name,
              live: vv
            },
            view: pv,
            favourite: {
              isFavourite: Nv.isFavourite(vv.packId),
              onToggle: () => {
                Nv.toggle(vv.packId)
              }
            }
          }, vv.packId)))
        }), "owned" === (null === zv || void 0 === zv ? void 0 : zv.kind) && Tv > 0 && (0, Dv.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: zv.packs.map((vv => {
            var zv;
            return (0, Dv.jsx)(Kv, {
              pack: vv,
              view: pv,
              notice: vv.owner ? (0, nv.R)(vv.owner, !(null === (zv = vv.live) || void 0 === zv || !zv.renderId), lv, dv)[0] : void 0
            }, vv.packId)
          }))
        }), null !== zv && 0 === Tv && (0, Dv.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: dv(Rv(ev))
        })]
      })
    }

    function Rv(vv) {
      return "mine" === vv.section ? "shaderPackListing:noOwnPacks" : (0, nv.u)(vv) ? "general:noResults" : "favourites" === vv.section ? "shaderPackListing:noFavourites" : "general:noResults"
    }
    var xv = Pv(6294);
    const tv = 24,
      qv = {
        favourites: "general:favourites",
        mine: "shaderPackListing:mine"
      };

    function Iv() {
      var vv, zv, Pv, ev;
      const {
        t: Fv
      } = (0, fv.x)(), Yv = (0, lv.useNavigatePreserveSearch)(), Ov = (0, Sv.p)(), {
        userContext: Kv,
        isUserContextUpdating: Rv
      } = (0, iv.d)(), [Iv, Qv] = (0, Vv.h)(), [Zv, Av] = (0, Vv.e)(), Lv = (0, hv.useRef)(!1), [Hv, Mv] = (0, Tv.r)(), yv = (0, nv.E)(Hv), [Bv, Jv] = (0, hv.useState)(null !== (vv = yv.searchQuery) && void 0 !== vv ? vv : ""), Ev = (0, hv.useRef)(null), {
        searchQuery: ov
      } = yv;
      (0, hv.useEffect)((() => {
        Jv(null !== ov && void 0 !== ov ? ov : ""), Ev.current && (Ev.current.value = null !== ov && void 0 !== ov ? ov : "")
      }), [ov]);
      const [bv, rv] = (0, hv.useState)(null), [kv, Xv] = (0, hv.useState)(!1), [uv, vz] = (0, hv.useState)(!1), [zz, Pz] = (0, hv.useState)(0), hz = (0, hv.useRef)(0), Sz = JSON.stringify(yv), ez = (0, nv.m)();

      function gz() {
        null !== ez ? (Yv(ez), cv.c.set({
          openEverythingMenuName: pv.o.SETTINGS,
          openSettingsCategory: "Bw"
        })) : Yv("/")
      }

      function pz(vv) {
        Mv((zv => {
          (0, nv.gb)(zv, {
            ...yv,
            pageNumber: 1,
            ...vv
          })
        }))
      }

      function dz() {
        const vv = Bv.trim() || null;
        pz({
          searchQuery: vv,
          ...null !== vv && !Lv.current && (0, nv.n)(yv) && {
            withFeatures: [],
            withoutFeatures: []
          }
        })
      }(0, Cv.c)(gz), (0, Vv.d)(), (0, hv.useEffect)((() => {
        if (Rv) return;
        const vv = ++hz.current,
          zv = JSON.parse(Sz);
        Xv(!0), vz(!1), async function(vv) {
          if ("mine" === vv.section) return {
            kind: "owned",
            packs: await Gv.e.getOwnedShaderPacks(Kv)
          };
          const zv = "favourites" === vv.section,
            Pv = zv && (0, nv.n)(vv),
            hv = await Gv.e.getShaderPacks(Kv, {
              sort: zv ? nv.h : vv.sort,
              features: Pv ? [] : vv.withFeatures,
              withoutFeatures: Pv ? [] : vv.withoutFeatures,
              searchQuery: vv.searchQuery,
              pageNumber: vv.pageNumber,
              pageSize: tv,
              onlyFavourites: zv,
              banned: (0, nv.q)(Kv) ? (0, nv.e)(vv.banned) : void 0
            });
          return {
            kind: "listing",
            page: hv
          }
        }(zv).then((zv => {
          hz.current === vv && rv(zv)
        })).catch((zv => {
          hz.current === vv && (console.error("Failed to get shader packs", zv), rv(null), vz(!0))
        })).finally((() => {
          hz.current === vv && Xv(!1)
        }))
      }), [Sz, Kv, Rv, zz]);
      const [Nz, lz] = (0, hv.useState)(null), Tz = null !== (Pv = null === (ev = ("listing" === (null === bv || void 0 === bv ? void 0 : bv.kind) ? bv.page.results : (null !== (zv = null === bv || void 0 === bv ? void 0 : bv.packs) && void 0 !== zv ? zv : []).flatMap((vv => vv.live ? [vv.live] : [])))[0]) || void 0 === ev ? void 0 : ev.baselineVersion) && void 0 !== Pv ? Pv : null;
      (0, hv.useEffect)((() => {
        null !== Tz && lz(Tz)
      }), [Tz]);
      const Wz = "mine" === yv.section,
        wz = (0, nv.q)(Kv),
        az = vv => {
          "explore" !== yv.section && (vv.stopPropagation(), vv.preventDefault(), pz({
            section: "explore"
          }))
        };
      return (0, Dv.jsxs)("div", {
        className: "ShaderPackBrowse AnimFadeIn",
        children: [(0, Dv.jsx)(Wv.b, {
          onClick: gz,
          children: Fv(null === ez ? "homePage:backToGames" : "shaderPackListing:backToSettings")
        }), (0, Dv.jsxs)("div", {
          className: "ShaderPackBrowseHeader",
          children: [(0, Dv.jsxs)("div", {
            className: "ShaderPackBrowseHeaderRow",
            children: [(0, Dv.jsx)("h1", {
              className: "VisuallyHidden",
              children: Fv("shaderPackListing:title")
            }), (0, Dv.jsxs)("div", {
              className: "ShaderPackBrowseTabs",
              children: [(0, Dv.jsx)("div", {
                className: gv()("ShaderPackBrowseSort", {
                  Active: "explore" === yv.section
                }),
                onMouseDownCapture: az,
                onTouchEndCapture: az,
                children: (0, Dv.jsx)(wv.e, {
                  options: dv.z.map((vv => ({
                    value: vv,
                    label: Fv(nv._[vv])
                  }))),
                  value: yv.sort,
                  onChange: vv => {
                    pz({
                      section: "explore",
                      sort: vv.value
                    })
                  }
                })
              }), Object.keys(qv).map((vv => (0, Dv.jsx)(Wv.K, {
                active: yv.section === vv,
                onClick: () => {
                  pz({
                    section: vv
                  })
                },
                children: Fv(qv[vv])
              }, vv)))]
            }), !Wz && (0, Dv.jsx)("div", {
              className: "ShaderPackBrowseDivider"
            }), !Wz && (0, Dv.jsxs)("div", {
              className: "ShaderPackBrowseSearch",
              children: [(0, Dv.jsx)("div", {
                className: "ShaderPackBrowseSearchIcon",
                children: (0, Dv.jsx)(Nv.b, {
                  name: "magnifying-glass"
                })
              }), (0, Dv.jsx)(sv.c, {
                className: "ShaderPackBrowseSearchInput",
                placeholderText: Fv("shaderPackListing:searchPlaceholder"),
                maxLength: dv.I,
                defaultValue: Bv,
                domRef: Ev,
                onValueChange: Jv,
                onEnter: dz
              }), (0, Dv.jsx)(Wv.d, {
                onClick: dz,
                children: Fv("general:search")
              })]
            }), !Wz && (0, Dv.jsxs)(Wv.K, {
              className: gv()("ShaderPackBrowseFilterToggle", {
                Open: Zv
              }),
              pressed: Zv,
              onClick: () => {
                Av(!Zv)
              },
              children: [Fv("shaderPackListing:filter"), " ", (0, Dv.jsx)(Nv.b, {
                name: Zv ? "angle-up" : "angle-down"
              })]
            }), (0, Dv.jsx)("div", {
              className: "ShaderPackBrowseSpace"
            }), jv.featureFlags.settings.canUseShaderPacks && (0, Dv.jsxs)(Wv.j, {
              onClick: () => {
                Yv(nv.W)
              },
              children: [(0, Dv.jsx)(Nv.b, {
                name: "upload"
              }), " ", Fv("shaderPackListing:publish")]
            })]
          }), !Wz && Zv && (0, Dv.jsxs)("div", {
            className: "ShaderPackBrowseFeatures",
            children: [nv.y.map((vv => {
              const zv = (0, nv.k)(yv, vv),
                Pv = Fv(nv.J[vv]);
              return (0, Dv.jsx)(Wv.K, {
                className: gv()("ShaderPackBrowseFeature", {
                  Without: "without" === zv
                }),
                active: "with" === zv,
                pressed: null !== zv,
                onClick: () => {
                  Lv.current = !0, pz((0, nv.fb)(yv, vv))
                },
                children: (0, Dv.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureLabel",
                  children: [(0, Dv.jsxs)("span", {
                    className: "ShaderPackBrowseFeatureReserve",
                    children: [(0, Dv.jsx)(Nv.b, {
                      name: "check"
                    }), " ", Pv]
                  }), (0, Dv.jsxs)("span", {
                    children: [null !== zv && (0, Dv.jsx)(Nv.b, {
                      name: "with" === zv ? "check" : "xmark"
                    }), " ", Pv]
                  })]
                })
              }, vv)
            })), wz && (0, Dv.jsx)(Wv.K, {
              className: gv()("ShaderPackBrowseFeature", {
                Without: "without" === yv.banned
              }),
              active: "with" === yv.banned,
              pressed: null !== yv.banned,
              onClick: () => {
                const vv = "without" === yv.banned && !Lv.current && (0, nv.n)(yv);
                pz({
                  banned: (0, nv.B)(yv.banned),
                  ...vv && {
                    withFeatures: [],
                    withoutFeatures: []
                  }
                })
              },
              children: (0, Dv.jsxs)("span", {
                className: "ShaderPackBrowseFeatureLabel",
                children: [(0, Dv.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureReserve",
                  children: [(0, Dv.jsx)(Nv.b, {
                    name: "check"
                  }), " BANNED"]
                }), (0, Dv.jsxs)("span", {
                  children: [null !== yv.banned && (0, Dv.jsx)(Nv.b, {
                    name: "with" === yv.banned ? "check" : "xmark"
                  }), " BANNED"]
                })]
              })
            })]
          })]
        }), (!Wz || null !== Nz) && (0, Dv.jsx)("div", {
          className: "ShaderPackBrowseScenes",
          children: (0, Dv.jsx)(xv.c, {
            selected: Iv,
            onSelect: Qv,
            imageUrl: vv => null === Nz ? null : (0, dv.o)(mv.clientSideServerUrls.s3Url, Nz, vv, "thumb")
          })
        }), (0, Dv.jsx)(Uv, {
          results: bv,
          loading: kv,
          failed: uv,
          onRetry: () => {
            Pz((vv => vv + 1))
          },
          view: yv,
          previewView: Iv
        }), "listing" === (null === bv || void 0 === bv ? void 0 : bv.kind) && (0, Dv.jsx)(av.c, {
          className: "ShaderPackBrowsePagination",
          page: bv.page.pageNumber,
          totalPages: bv.page.totalPages,
          onSetPage: vv => {
            Mv((zv => {
              (0, Tv.n)(zv, vv)
            }))
          },
          getPageHref: function(vv) {
            const zv = new URLSearchParams(Hv);
            (0, Tv.n)(zv, vv);
            const Pv = zv.toString();
            return Pv ? `${Ov.pathname}?${Pv}` : Ov.pathname
          }
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);