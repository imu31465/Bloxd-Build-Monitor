export const id = 120;
export const ids = [120];
export const modules = {
  6197: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      default: () => Gb
    });
    var kb = sb(64),
      Wb = sb(1511),
      ab = sb(1033),
      Tb = sb.n(ab),
      Ub = sb(334),
      Ib = sb(6209),
      Hb = sb(1039),
      fb = sb(1495),
      Mb = sb(4295),
      Xb = sb(1431),
      nb = sb(2889),
      mb = sb(4304),
      lb = sb(1664),
      Qb = sb(4293),
      eb = sb(1117),
      Cb = sb(19),
      Nb = sb(1474),
      Vb = sb(1208),
      Lb = sb(117),
      ub = sb(1197),
      Yb = sb(1327),
      hb = sb(1235),
      Jb = sb(6204),
      gb = sb(6214),
      Bb = sb(1087);

    function tb(bb) {
      let {
        pack: cb,
        view: sb,
        favourite: kb,
        notice: Wb
      } = bb;
      const {
        width: ab,
        height: Ub
      } = Ib.w.thumb, {
        live: Mb
      } = cb;
      return (0, Bb.jsx)("div", {
        className: "ShaderPackCard",
        children: (0, Bb.jsxs)("div", {
          className: "ShaderPackCardTile",
          children: [(0, Bb.jsxs)(fb.LinkPreserveSearch, {
            to: (0, Jb.Z)(cb.packId),
            className: "ShaderPackCardLink",
            children: [Mb && (0, Bb.jsx)("img", {
              className: "ShaderPackCardImage",
              src: (0, Ib.y)(Vb.clientSideServerUrls.s3Url, Mb, sb, "thumb"),
              width: ab,
              height: Ub,
              loading: "lazy",
              alt: "",
              draggable: !1
            }), Mb && (0, Bb.jsx)(gb.c, {
              item: Mb
            }), !Mb && (0, Bb.jsx)("div", {
              className: "ShaderPackCardImage ShaderPackCardImagePending",
              children: (0, Bb.jsx)(Hb.b, {
                name: "hourglass"
              })
            }), (0, Bb.jsxs)("div", {
              className: "ShaderPackCardText",
              children: [Wb && (0, Bb.jsx)("div", {
                className: Tb()("ShaderPackCardNotice", {
                  Warning: "warning" === Wb.tone
                }),
                children: Wb.text
              }), (0, Bb.jsx)("div", {
                className: "ShaderPackCardName SmallTextBold",
                children: cb.name
              })]
            })]
          }), Mb && (0, Bb.jsxs)("div", {
            className: "ShaderPackCardStats",
            children: [(0, Bb.jsxs)("div", {
              className: "ShaderPackCardUses SmallTextBold",
              children: [(0, Bb.jsx)(Hb.b, {
                name: "download"
              }), (0, hb.K)(Mb.downloads)]
            }), kb && (0, Bb.jsx)(Xb.r, {
              onClick: kb.onToggle,
              isLiked: !0 === kb.isFavourite,
              isLoading: null === kb.isFavourite
            })]
          })]
        })
      })
    }
    var yb = sb(6219);

    function Pb(bb) {
      let {
        results: cb,
        loading: sb,
        failed: kb,
        onRetry: Wb,
        view: ab,
        previewView: Ub
      } = bb;
      const {
        t: Ib
      } = (0, ub.E)(), Hb = (0, yb.l)(), fb = Date.now(), Mb = null === cb ? 0 : "owned" === cb.kind ? cb.packs.length : cb.page.results.length;
      return (0, Bb.jsxs)("div", {
        className: Tb()("ShaderPackBrowseResults", {
          Loading: sb && null !== cb
        }),
        children: [sb && null === cb && (0, Bb.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: (0, Bb.jsx)(Yb.d, {})
        }), kb && (0, Bb.jsxs)("div", {
          className: "ShaderPackBrowseMessage",
          children: [Ib("shaderPackListing:loadFailed"), (0, Bb.jsx)(Xb.d, {
            onClick: Wb,
            children: Ib("general:tryAgain")
          })]
        }), "listing" === (null === cb || void 0 === cb ? void 0 : cb.kind) && Mb > 0 && (0, Bb.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: cb.page.results.map((bb => (0, Bb.jsx)(tb, {
            pack: {
              packId: bb.packId,
              name: bb.name,
              live: bb
            },
            view: Ub,
            favourite: {
              isFavourite: Hb.isFavourite(bb.packId),
              onToggle: () => {
                Hb.toggle(bb.packId)
              }
            }
          }, bb.packId)))
        }), "owned" === (null === cb || void 0 === cb ? void 0 : cb.kind) && Mb > 0 && (0, Bb.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: cb.packs.map((bb => {
            var cb;
            return (0, Bb.jsx)(tb, {
              pack: bb,
              view: Ub,
              notice: bb.owner ? (0, Jb.X)(bb.owner, !(null === (cb = bb.live) || void 0 === cb || !cb.renderId), fb, Ib)[0] : void 0
            }, bb.packId)
          }))
        }), null !== cb && 0 === Mb && (0, Bb.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: Ib(Db(ab))
        })]
      })
    }

    function Db(bb) {
      return "mine" === bb.section ? "shaderPackListing:noOwnPacks" : (0, Jb.x)(bb) ? "general:noResults" : "favourites" === bb.section ? "shaderPackListing:noFavourites" : "general:noResults"
    }
    var Eb = sb(6232);
    const ib = 24,
      Ob = {
        favourites: "general:favourites",
        mine: "shaderPackListing:mine"
      };

    function Gb() {
      var bb, cb, sb, ab;
      const {
        t: Yb
      } = (0, ub.E)(), hb = (0, fb.useNavigatePreserveSearch)(), gb = (0, Wb.r)(), {
        userContext: tb,
        isUserContextUpdating: Db
      } = (0, eb.c)(), [Gb, Kb] = (0, yb.h)(), [Zb, zb] = (0, yb.f)(), qb = (0, kb.useRef)(!1), [db, Ab] = (0, Mb.m)(), wb = (0, Jb.F)(db), [rb, ob] = (0, kb.useState)(null !== (bb = wb.searchQuery) && void 0 !== bb ? bb : ""), Sb = (0, kb.useRef)(null), {
        searchQuery: Rb
      } = wb;
      (0, kb.useEffect)((() => {
        ob(null !== Rb && void 0 !== Rb ? Rb : ""), Sb.current && (Sb.current.value = null !== Rb && void 0 !== Rb ? Rb : "")
      }), [Rb]);
      const [vb, Fb] = (0, kb.useState)(null), [xb, jb] = (0, kb.useState)(!1), [pb, bc] = (0, kb.useState)(!1), [cc, sc] = (0, kb.useState)(0), kc = (0, kb.useRef)(0), Wc = JSON.stringify(wb), ac = (0, Jb.m)();

      function Tc() {
        null !== ac ? (hb(ac), Cb.d.set({
          openEverythingMenuName: Ub.r.SETTINGS,
          openSettingsCategory: "Qm"
        })) : hb("/")
      }

      function Uc(bb) {
        Ab((cb => {
          (0, Jb.gb)(cb, {
            ...wb,
            pageNumber: 1,
            ...bb
          })
        }))
      }

      function Ic() {
        const bb = rb.trim() || null;
        Uc({
          searchQuery: bb,
          ...null !== bb && !qb.current && (0, Jb.p)(wb) && {
            withFeatures: [],
            withoutFeatures: []
          }
        })
      }(0, Qb.d)(Tc), (0, yb.c)(), (0, kb.useEffect)((() => {
        if (Db) return;
        const bb = ++kc.current,
          cb = JSON.parse(Wc);
        jb(!0), bc(!1), async function(bb) {
          if ("mine" === bb.section) return {
            kind: "owned",
            packs: await Nb.b.getOwnedShaderPacks(tb)
          };
          const cb = "favourites" === bb.section,
            sb = cb && (0, Jb.p)(bb),
            kb = await Nb.b.getShaderPacks(tb, {
              sort: cb ? Jb.f : bb.sort,
              features: sb ? [] : bb.withFeatures,
              withoutFeatures: sb ? [] : bb.withoutFeatures,
              searchQuery: bb.searchQuery,
              pageNumber: bb.pageNumber,
              pageSize: ib,
              onlyFavourites: cb,
              banned: (0, Jb.t)(tb) ? (0, Jb.e)(bb.banned) : void 0
            });
          return {
            kind: "listing",
            page: kb
          }
        }(cb).then((cb => {
          kc.current === bb && Fb(cb)
        })).catch((cb => {
          kc.current === bb && (console.error("Failed to get shader packs", cb), Fb(null), bc(!0))
        })).finally((() => {
          kc.current === bb && jb(!1)
        }))
      }), [Wc, tb, Db, cc]);
      const [Hc, fc] = (0, kb.useState)(null), Mc = null !== (sb = null === (ab = ("listing" === (null === vb || void 0 === vb ? void 0 : vb.kind) ? vb.page.results : (null !== (cb = null === vb || void 0 === vb ? void 0 : vb.packs) && void 0 !== cb ? cb : []).flatMap((bb => bb.live ? [bb.live] : [])))[0]) || void 0 === ab ? void 0 : ab.baselineVersion) && void 0 !== sb ? sb : null;
      (0, kb.useEffect)((() => {
        null !== Mc && fc(Mc)
      }), [Mc]);
      const Xc = "mine" === wb.section,
        nc = (0, Jb.t)(tb),
        mc = bb => {
          "explore" !== wb.section && (bb.stopPropagation(), bb.preventDefault(), Uc({
            section: "explore"
          }))
        };
      return (0, Bb.jsxs)("div", {
        className: "ShaderPackBrowse AnimFadeIn",
        children: [(0, Bb.jsx)(Xb.b, {
          onClick: Tc,
          children: Yb(null === ac ? "homePage:backToGames" : "shaderPackListing:backToSettings")
        }), (0, Bb.jsxs)("div", {
          className: "ShaderPackBrowseHeader",
          children: [(0, Bb.jsxs)("div", {
            className: "ShaderPackBrowseHeaderRow",
            children: [(0, Bb.jsx)("h1", {
              className: "VisuallyHidden",
              children: Yb("shaderPackListing:title")
            }), (0, Bb.jsxs)("div", {
              className: "ShaderPackBrowseTabs",
              children: [(0, Bb.jsx)("div", {
                className: Tb()("ShaderPackBrowseSort", {
                  Active: "explore" === wb.section
                }),
                onMouseDownCapture: mc,
                onTouchEndCapture: mc,
                children: (0, Bb.jsx)(nb.e, {
                  options: Ib.A.map((bb => ({
                    value: bb,
                    label: Yb(Jb.ab[bb])
                  }))),
                  value: wb.sort,
                  onChange: bb => {
                    Uc({
                      section: "explore",
                      sort: bb.value
                    })
                  }
                })
              }), Object.keys(Ob).map((bb => (0, Bb.jsx)(Xb.M, {
                active: wb.section === bb,
                onClick: () => {
                  Uc({
                    section: bb
                  })
                },
                children: Yb(Ob[bb])
              }, bb)))]
            }), !Xc && (0, Bb.jsx)("div", {
              className: "ShaderPackBrowseDivider"
            }), !Xc && (0, Bb.jsxs)("div", {
              className: "ShaderPackBrowseSearch",
              children: [(0, Bb.jsx)("div", {
                className: "ShaderPackBrowseSearchIcon",
                children: (0, Bb.jsx)(Hb.b, {
                  name: "magnifying-glass"
                })
              }), (0, Bb.jsx)(lb.c, {
                className: "ShaderPackBrowseSearchInput",
                placeholderText: Yb("shaderPackListing:searchPlaceholder"),
                maxLength: Ib.N,
                defaultValue: rb,
                domRef: Sb,
                onValueChange: ob,
                onEnter: Ic
              }), (0, Bb.jsx)(Xb.d, {
                onClick: Ic,
                children: Yb("general:search")
              })]
            }), !Xc && (0, Bb.jsxs)(Xb.M, {
              className: Tb()("ShaderPackBrowseFilterToggle", {
                Open: Zb
              }),
              pressed: Zb,
              onClick: () => {
                zb(!Zb)
              },
              children: [Yb("shaderPackListing:filter"), " ", (0, Bb.jsx)(Hb.b, {
                name: Zb ? "angle-up" : "angle-down"
              })]
            }), (0, Bb.jsx)("div", {
              className: "ShaderPackBrowseSpace"
            }), Lb.featureFlags.settings.canUseShaderPacks && (0, Bb.jsxs)(Xb.n, {
              onClick: () => {
                hb(Jb._)
              },
              children: [(0, Bb.jsx)(Hb.b, {
                name: "upload"
              }), " ", Yb("shaderPackListing:publish")]
            })]
          }), !Xc && Zb && (0, Bb.jsxs)("div", {
            className: "ShaderPackBrowseFeatures",
            children: [Jb.A.map((bb => {
              const cb = (0, Jb.h)(wb, bb),
                sb = Yb(Jb.K[bb]);
              return (0, Bb.jsx)(Xb.M, {
                className: Tb()("ShaderPackBrowseFeature", {
                  Without: "without" === cb
                }),
                active: "with" === cb,
                pressed: null !== cb,
                onClick: () => {
                  qb.current = !0, Uc((0, Jb.db)(wb, bb))
                },
                children: (0, Bb.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureLabel",
                  children: [(0, Bb.jsxs)("span", {
                    className: "ShaderPackBrowseFeatureReserve",
                    children: [(0, Bb.jsx)(Hb.b, {
                      name: "check"
                    }), " ", sb]
                  }), (0, Bb.jsxs)("span", {
                    children: [null !== cb && (0, Bb.jsx)(Hb.b, {
                      name: "with" === cb ? "check" : "xmark"
                    }), " ", sb]
                  })]
                })
              }, bb)
            })), nc && (0, Bb.jsx)(Xb.M, {
              className: Tb()("ShaderPackBrowseFeature", {
                Without: "without" === wb.banned
              }),
              active: "with" === wb.banned,
              pressed: null !== wb.banned,
              onClick: () => {
                const bb = "without" === wb.banned && !qb.current && (0, Jb.p)(wb);
                Uc({
                  banned: (0, Jb.D)(wb.banned),
                  ...bb && {
                    withFeatures: [],
                    withoutFeatures: []
                  }
                })
              },
              children: (0, Bb.jsxs)("span", {
                className: "ShaderPackBrowseFeatureLabel",
                children: [(0, Bb.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureReserve",
                  children: [(0, Bb.jsx)(Hb.b, {
                    name: "check"
                  }), " BANNED"]
                }), (0, Bb.jsxs)("span", {
                  children: [null !== wb.banned && (0, Bb.jsx)(Hb.b, {
                    name: "with" === wb.banned ? "check" : "xmark"
                  }), " BANNED"]
                })]
              })
            })]
          })]
        }), (!Xc || null !== Hc) && (0, Bb.jsx)("div", {
          className: "ShaderPackBrowseScenes",
          children: (0, Bb.jsx)(Eb.d, {
            selected: Gb,
            onSelect: Kb,
            imageUrl: bb => null === Hc ? null : (0, Ib.p)(Vb.clientSideServerUrls.s3Url, Hc, bb, "thumb")
          })
        }), (0, Bb.jsx)(Pb, {
          results: vb,
          loading: xb,
          failed: pb,
          onRetry: () => {
            sc((bb => bb + 1))
          },
          view: wb,
          previewView: Gb
        }), "listing" === (null === vb || void 0 === vb ? void 0 : vb.kind) && (0, Bb.jsx)(mb.d, {
          className: "ShaderPackBrowsePagination",
          page: vb.page.pageNumber,
          totalPages: vb.page.totalPages,
          onSetPage: bb => {
            Ab((cb => {
              (0, Mb.k)(cb, bb)
            }))
          },
          getPageHref: function(bb) {
            const cb = new URLSearchParams(db);
            (0, Mb.k)(cb, bb);
            const sb = cb.toString();
            return sb ? `${gb.pathname}?${sb}` : gb.pathname
          }
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);