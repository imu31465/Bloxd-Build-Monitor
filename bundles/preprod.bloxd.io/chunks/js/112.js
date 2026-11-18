export const id = 112;
export const ids = [112];
export const modules = {
  5796: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      default: () => Hy
    });
    var Uy = Wy(55),
      hy = Wy(1370),
      fy = Wy(898),
      Zy = Wy.n(fy),
      cb = Wy(248),
      Py = Wy(5801),
      oy = Wy(910),
      By = Wy(1356),
      Ky = Wy(3758),
      ey = Wy(1273),
      qb = Wy(2459),
      sy = Wy(3761),
      Sy = Wy(1486),
      Ey = Wy(3750),
      ly = Wy(980),
      mb = Wy(19),
      Cy = Wy(1339),
      Ty = Wy(1052),
      Vy = Wy(94),
      Jy = Wy(1042),
      gb = Wy(1194),
      Gy = Wy(1080),
      Oy = Wy(5799),
      Ry = Wy(5807),
      vb = Wy(952);

    function ib(yb) {
      let {
        pack: bb,
        view: Wy,
        favourite: Uy,
        notice: hy
      } = yb;
      const {
        width: fy,
        height: cb
      } = Py.v.thumb, {
        live: Ky
      } = bb;
      return (0, vb.jsx)("div", {
        className: "ShaderPackCard",
        children: (0, vb.jsxs)("div", {
          className: "ShaderPackCardTile",
          children: [(0, vb.jsxs)(By.LinkPreserveSearch, {
            to: (0, Oy.U)(bb.packId),
            className: "ShaderPackCardLink",
            children: [Ky && (0, vb.jsx)("img", {
              className: "ShaderPackCardImage",
              src: (0, Py.z)(Ty.clientSideServerUrls.s3Url, Ky, Wy, "thumb"),
              width: fy,
              height: cb,
              loading: "lazy",
              alt: "",
              draggable: !1
            }), Ky && (0, vb.jsx)(Ry.c, {
              item: Ky
            }), !Ky && (0, vb.jsx)("div", {
              className: "ShaderPackCardImage ShaderPackCardImagePending",
              children: (0, vb.jsx)(oy.e, {
                name: "hourglass"
              })
            }), (0, vb.jsxs)("div", {
              className: "ShaderPackCardText",
              children: [hy && (0, vb.jsx)("div", {
                className: Zy()("ShaderPackCardNotice", {
                  Warning: "warning" === hy.tone
                }),
                children: hy.text
              }), (0, vb.jsx)("div", {
                className: "ShaderPackCardName SmallTextBold",
                children: bb.name
              })]
            })]
          }), Ky && (0, vb.jsxs)("div", {
            className: "ShaderPackCardStats",
            children: [(0, vb.jsxs)("div", {
              className: "ShaderPackCardUses SmallTextBold",
              children: [(0, vb.jsx)(oy.e, {
                name: "download"
              }), (0, Gy.S)(Ky.downloads)]
            }), Uy && (0, vb.jsx)(ey.n, {
              onClick: Uy.onToggle,
              isLiked: !0 === Uy.isFavourite,
              isLoading: null === Uy.isFavourite
            })]
          })]
        })
      })
    }
    var My = Wy(5815);

    function Yy(yb) {
      let {
        results: bb,
        loading: Wy,
        failed: Uy,
        onRetry: hy,
        view: fy,
        previewView: cb
      } = yb;
      const {
        t: Py
      } = (0, Jy.D)(), oy = (0, My.o)(), By = Date.now(), Ky = null === bb ? 0 : "owned" === bb.kind ? bb.packs.length : bb.page.results.length;
      return (0, vb.jsxs)("div", {
        className: Zy()("ShaderPackBrowseResults", {
          Loading: Wy && null !== bb
        }),
        children: [Wy && null === bb && (0, vb.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: (0, vb.jsx)(gb.e, {})
        }), Uy && (0, vb.jsxs)("div", {
          className: "ShaderPackBrowseMessage",
          children: [Py("shaderPackListing:loadFailed"), (0, vb.jsx)(ey.f, {
            onClick: hy,
            children: Py("general:tryAgain")
          })]
        }), "listing" === (null === bb || void 0 === bb ? void 0 : bb.kind) && Ky > 0 && (0, vb.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: bb.page.results.map((yb => (0, vb.jsx)(ib, {
            pack: {
              packId: yb.packId,
              name: yb.name,
              live: yb
            },
            view: cb,
            favourite: {
              isFavourite: oy.isFavourite(yb.packId),
              onToggle: () => {
                oy.toggle(yb.packId)
              }
            }
          }, yb.packId)))
        }), "owned" === (null === bb || void 0 === bb ? void 0 : bb.kind) && Ky > 0 && (0, vb.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: bb.packs.map((yb => {
            var bb;
            return (0, vb.jsx)(ib, {
              pack: yb,
              view: cb,
              notice: yb.owner ? (0, Oy.S)(yb.owner, !(null === (bb = yb.live) || void 0 === bb || !bb.renderId), By, Py)[0] : void 0
            }, yb.packId)
          }))
        }), null !== bb && 0 === Ky && (0, vb.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: Py(Xy(fy))
        })]
      })
    }

    function Xy(yb) {
      return "mine" === yb.section ? "shaderPackListing:noOwnPacks" : (0, Oy.p)(yb) ? "general:noResults" : "favourites" === yb.section ? "shaderPackListing:noFavourites" : "general:noResults"
    }
    var ny = Wy(5821);
    const uy = 24,
      rb = {
        favourites: "general:favourites",
        mine: "shaderPackListing:mine"
      };

    function Hy() {
      var yb, bb, Wy, fy;
      const {
        t: gb
      } = (0, Jy.D)(), Gy = (0, By.useNavigatePreserveSearch)(), Ry = (0, hy.y)(), {
        userContext: ib,
        isUserContextUpdating: Xy
      } = (0, ly.c)(), [Hy, ab] = (0, My.k)(), [Fy, py] = (0, My.h)(), Ly = (0, Uy.useRef)(!1), [Qy, jb] = (0, Ky.o)(), Dy = (0, Oy.z)(Qy), [tb, wy] = (0, Uy.useState)(null !== (yb = Dy.searchQuery) && void 0 !== yb ? yb : ""), kb = (0, Uy.useRef)(null), {
        searchQuery: Ny
      } = Dy;
      (0, Uy.useEffect)((() => {
        wy(null !== Ny && void 0 !== Ny ? Ny : ""), kb.current && (kb.current.value = null !== Ny && void 0 !== Ny ? Ny : "")
      }), [Ny]);
      const [zb, Iy] = (0, Uy.useState)(null), [xb, Ay] = (0, Uy.useState)(!1), [dy, yW] = (0, Uy.useState)(!1), [bW, Wb] = (0, Uy.useState)(0), Ub = (0, Uy.useRef)(0), hb = JSON.stringify(Dy), fb = (0, Oy.m)();

      function Zb() {
        null !== fb ? (Gy(fb), mb.d.set({
          openEverythingMenuName: cb.o.SETTINGS,
          openSettingsCategory: "eU"
        })) : Gy("/")
      }

      function cW(yb) {
        jb((bb => {
          (0, Oy.bb)(bb, {
            ...Dy,
            pageNumber: 1,
            ...yb
          })
        }))
      }

      function Pb() {
        const yb = tb.trim() || null;
        cW({
          searchQuery: yb,
          ...null !== yb && !Ly.current && (0, Oy.n)(Dy) && {
            withFeatures: [],
            withoutFeatures: []
          }
        })
      }(0, Ey.e)(Zb), (0, My.e)(), (0, Uy.useEffect)((() => {
        if (Xy) return;
        const yb = ++Ub.current,
          bb = JSON.parse(hb);
        Ay(!0), yW(!1), async function(yb) {
          if ("mine" === yb.section) return {
            kind: "owned",
            packs: await Cy.c.getOwnedShaderPacks(ib)
          };
          const bb = "favourites" === yb.section,
            Wy = bb && (0, Oy.n)(yb),
            Uy = await Cy.c.getShaderPacks(ib, {
              sort: bb ? Oy.g : yb.sort,
              features: Wy ? [] : yb.withFeatures,
              withoutFeatures: Wy ? [] : yb.withoutFeatures,
              searchQuery: yb.searchQuery,
              pageNumber: yb.pageNumber,
              pageSize: uy,
              onlyFavourites: bb,
              banned: (0, Oy.o)(ib) ? (0, Oy.d)(yb.banned) : void 0
            });
          return {
            kind: "listing",
            page: Uy
          }
        }(bb).then((bb => {
          Ub.current === yb && Iy(bb)
        })).catch((bb => {
          Ub.current === yb && (console.error("Failed to get shader packs", bb), Iy(null), yW(!0))
        })).finally((() => {
          Ub.current === yb && Ay(!1)
        }))
      }), [hb, ib, Xy, bW]);
      const [ob, Bb] = (0, Uy.useState)(null), Kb = null !== (Wy = null === (fy = ("listing" === (null === zb || void 0 === zb ? void 0 : zb.kind) ? zb.page.results : (null !== (bb = null === zb || void 0 === zb ? void 0 : zb.packs) && void 0 !== bb ? bb : []).flatMap((yb => yb.live ? [yb.live] : [])))[0]) || void 0 === fy ? void 0 : fy.baselineVersion) && void 0 !== Wy ? Wy : null;
      (0, Uy.useEffect)((() => {
        null !== Kb && Bb(Kb)
      }), [Kb]);
      const eb = "mine" === Dy.section,
        qW = (0, Oy.o)(ib),
        sb = yb => {
          "explore" !== Dy.section && (yb.stopPropagation(), yb.preventDefault(), cW({
            section: "explore"
          }))
        };
      return (0, vb.jsxs)("div", {
        className: "ShaderPackBrowse AnimFadeIn",
        children: [(0, vb.jsx)(ey.d, {
          onClick: Zb,
          children: gb(null === fb ? "homePage:backToGames" : "shaderPackListing:backToSettings")
        }), (0, vb.jsxs)("div", {
          className: "ShaderPackBrowseHeader",
          children: [(0, vb.jsxs)("div", {
            className: "ShaderPackBrowseHeaderRow",
            children: [(0, vb.jsx)("h1", {
              className: "VisuallyHidden",
              children: gb("shaderPackListing:title")
            }), (0, vb.jsxs)("div", {
              className: "ShaderPackBrowseTabs",
              children: [(0, vb.jsx)("div", {
                className: Zy()("ShaderPackBrowseSort", {
                  Active: "explore" === Dy.section
                }),
                onMouseDownCapture: sb,
                onTouchEndCapture: sb,
                children: (0, vb.jsx)(qb.c, {
                  options: Py.D.map((yb => ({
                    value: yb,
                    label: gb(Oy.Z[yb])
                  }))),
                  value: Dy.sort,
                  onChange: yb => {
                    cW({
                      section: "explore",
                      sort: yb.value
                    })
                  }
                })
              }), Object.keys(rb).map((yb => (0, vb.jsx)(ey.M, {
                active: Dy.section === yb,
                onClick: () => {
                  cW({
                    section: yb
                  })
                },
                children: gb(rb[yb])
              }, yb)))]
            }), !eb && (0, vb.jsx)("div", {
              className: "ShaderPackBrowseDivider"
            }), !eb && (0, vb.jsxs)("div", {
              className: "ShaderPackBrowseSearch",
              children: [(0, vb.jsx)("div", {
                className: "ShaderPackBrowseSearchIcon",
                children: (0, vb.jsx)(oy.e, {
                  name: "magnifying-glass"
                })
              }), (0, vb.jsx)(Sy.c, {
                className: "ShaderPackBrowseSearchInput",
                placeholderText: gb("shaderPackListing:searchPlaceholder"),
                maxLength: Py.S,
                defaultValue: tb,
                domRef: kb,
                onValueChange: wy,
                onEnter: Pb
              }), (0, vb.jsx)(ey.f, {
                onClick: Pb,
                children: gb("general:search")
              })]
            }), !eb && (0, vb.jsxs)(ey.M, {
              className: Zy()("ShaderPackBrowseFilterToggle", {
                Open: Fy
              }),
              pressed: Fy,
              onClick: () => {
                py(!Fy)
              },
              children: [gb("shaderPackListing:filter"), " ", (0, vb.jsx)(oy.e, {
                name: Fy ? "angle-up" : "angle-down"
              })]
            }), (0, vb.jsx)("div", {
              className: "ShaderPackBrowseSpace"
            }), Vy.featureFlags.settings.canUseShaderPacks && (0, vb.jsxs)(ey.i, {
              onClick: () => {
                Gy(Oy.V)
              },
              children: [(0, vb.jsx)(oy.e, {
                name: "upload"
              }), " ", gb("shaderPackListing:publish")]
            })]
          }), !eb && Fy && (0, vb.jsxs)("div", {
            className: "ShaderPackBrowseFeatures",
            children: [Oy.u.map((yb => {
              const bb = (0, Oy.j)(Dy, yb),
                Wy = gb(Oy.I[yb]);
              return (0, vb.jsx)(ey.M, {
                className: Zy()("ShaderPackBrowseFeature", {
                  Without: "without" === bb
                }),
                active: "with" === bb,
                pressed: null !== bb,
                onClick: () => {
                  Ly.current = !0, cW((0, Oy.ab)(Dy, yb))
                },
                children: (0, vb.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureLabel",
                  children: [(0, vb.jsxs)("span", {
                    className: "ShaderPackBrowseFeatureReserve",
                    children: [(0, vb.jsx)(oy.e, {
                      name: "check"
                    }), " ", Wy]
                  }), (0, vb.jsxs)("span", {
                    children: [null !== bb && (0, vb.jsx)(oy.e, {
                      name: "with" === bb ? "check" : "xmark"
                    }), " ", Wy]
                  })]
                })
              }, yb)
            })), qW && (0, vb.jsx)(ey.M, {
              className: Zy()("ShaderPackBrowseFeature", {
                Without: "without" === Dy.banned
              }),
              active: "with" === Dy.banned,
              pressed: null !== Dy.banned,
              onClick: () => {
                const yb = "without" === Dy.banned && !Ly.current && (0, Oy.n)(Dy);
                cW({
                  banned: (0, Oy.v)(Dy.banned),
                  ...yb && {
                    withFeatures: [],
                    withoutFeatures: []
                  }
                })
              },
              children: (0, vb.jsxs)("span", {
                className: "ShaderPackBrowseFeatureLabel",
                children: [(0, vb.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureReserve",
                  children: [(0, vb.jsx)(oy.e, {
                    name: "check"
                  }), " BANNED"]
                }), (0, vb.jsxs)("span", {
                  children: [null !== Dy.banned && (0, vb.jsx)(oy.e, {
                    name: "with" === Dy.banned ? "check" : "xmark"
                  }), " BANNED"]
                })]
              })
            })]
          })]
        }), (!eb || null !== ob) && (0, vb.jsx)("div", {
          className: "ShaderPackBrowseScenes",
          children: (0, vb.jsx)(ny.d, {
            selected: Hy,
            onSelect: ab,
            imageUrl: yb => null === ob ? null : (0, Py.p)(Ty.clientSideServerUrls.s3Url, ob, yb, "thumb")
          })
        }), (0, vb.jsx)(Yy, {
          results: zb,
          loading: xb,
          failed: dy,
          onRetry: () => {
            Wb((yb => yb + 1))
          },
          view: Dy,
          previewView: Hy
        }), "listing" === (null === zb || void 0 === zb ? void 0 : zb.kind) && (0, vb.jsx)(sy.e, {
          className: "ShaderPackBrowsePagination",
          page: zb.page.pageNumber,
          totalPages: zb.page.totalPages,
          onSetPage: yb => {
            jb((bb => {
              (0, Ky.n)(bb, yb)
            }))
          },
          getPageHref: function(yb) {
            const bb = new URLSearchParams(Qy);
            (0, Ky.n)(bb, yb);
            const Wy = bb.toString();
            return Wy ? `${Ry.pathname}?${Wy}` : Ry.pathname
          }
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);