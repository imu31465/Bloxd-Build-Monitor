export const id = 151;
export const ids = [151];
export const modules = {
  7745: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      default: () => Jb
    });
    var eb = Mb(64),
      Hb = Mb(1696),
      pb = Mb(1159),
      Vb = Mb.n(pb),
      gb = Mb(366),
      lb = Mb(7760),
      Lb = Mb(1475),
      Ib = Mb(1686),
      Ob = Mb(5411),
      Ub = Mb(1616),
      tb = Mb(4490),
      Cb = Mb(5417),
      Eb = Mb(1876),
      Fb = Mb(5405),
      Bb = Mb(1179),
      sb = Mb(26),
      mb = Mb(1677),
      hb = Mb(1271),
      zb = Mb(110),
      Xb = Mb(1259),
      xb = Mb(1468),
      jb = Mb(1301),
      Kb = Mb(7754),
      rb = Mb(7762),
      Rb = Mb(1364);

    function Db(bb) {
      let {
        pack: wb,
        view: Mb,
        favourite: eb,
        notice: Hb
      } = bb;
      const {
        width: pb,
        height: gb
      } = lb.z.thumb, {
        live: Ob
      } = wb;
      return (0, Rb.jsx)("div", {
        className: "ShaderPackCard",
        children: (0, Rb.jsxs)("div", {
          className: "ShaderPackCardTile",
          children: [(0, Rb.jsxs)(Ib.LinkPreserveSearch, {
            to: (0, Kb.T)(wb.packId),
            className: "ShaderPackCardLink",
            children: [Ob && (0, Rb.jsx)("img", {
              className: "ShaderPackCardImage",
              src: (0, lb.B)(hb.clientSideServerUrls.s3Url, Ob, Mb, "thumb"),
              width: pb,
              height: gb,
              loading: "lazy",
              alt: "",
              draggable: !1
            }), Ob && (0, Rb.jsx)(rb.b, {
              item: Ob
            }), !Ob && (0, Rb.jsx)("div", {
              className: "ShaderPackCardImage ShaderPackCardImagePending",
              children: (0, Rb.jsx)(Lb.b, {
                name: "hourglass"
              })
            }), (0, Rb.jsxs)("div", {
              className: "ShaderPackCardText",
              children: [Hb && (0, Rb.jsx)("div", {
                className: Vb()("ShaderPackCardNotice", {
                  Warning: "warning" === Hb.tone
                }),
                children: Hb.text
              }), (0, Rb.jsx)("div", {
                className: "ShaderPackCardName SmallTextBold",
                children: wb.name
              })]
            })]
          }), Ob && (0, Rb.jsxs)("div", {
            className: "ShaderPackCardStats",
            children: [(0, Rb.jsxs)("div", {
              className: "ShaderPackCardUses SmallTextBold",
              children: [(0, Rb.jsx)(Lb.b, {
                name: "download"
              }), (0, jb.L)(Ob.downloads)]
            }), eb && (0, Rb.jsx)(Ub.C, {
              onClick: eb.onToggle,
              isLiked: !0 === eb.isFavourite,
              isLoading: null === eb.isFavourite
            })]
          })]
        })
      })
    }
    var cb = Mb(7768);

    function Yb(bb) {
      let {
        results: wb,
        loading: Mb,
        failed: eb,
        onRetry: Hb,
        view: pb,
        previewView: gb
      } = bb;
      const {
        t: lb
      } = (0, Xb.C)(), Lb = (0, cb.n)(), Ib = Date.now(), Ob = null === wb ? 0 : "owned" === wb.kind ? wb.packs.length : wb.page.results.length;
      return (0, Rb.jsxs)("div", {
        className: Vb()("ShaderPackBrowseResults", {
          Loading: Mb && null !== wb
        }),
        children: [Mb && null === wb && (0, Rb.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: (0, Rb.jsx)(xb.c, {})
        }), eb && (0, Rb.jsxs)("div", {
          className: "ShaderPackBrowseMessage",
          children: [lb("shaderPackListing:loadFailed"), (0, Rb.jsx)(Ub.f, {
            onClick: Hb,
            children: lb("general:tryAgain")
          })]
        }), "listing" === (null === wb || void 0 === wb ? void 0 : wb.kind) && Ob > 0 && (0, Rb.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: wb.page.results.map((bb => (0, Rb.jsx)(Db, {
            pack: {
              packId: bb.packId,
              name: bb.name,
              live: bb
            },
            view: gb,
            favourite: {
              isFavourite: Lb.isFavourite(bb.packId),
              onToggle: () => {
                Lb.toggle(bb.packId)
              }
            }
          }, bb.packId)))
        }), "owned" === (null === wb || void 0 === wb ? void 0 : wb.kind) && Ob > 0 && (0, Rb.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: wb.packs.map((bb => {
            var wb;
            return (0, Rb.jsx)(Db, {
              pack: bb,
              view: gb,
              notice: bb.owner ? (0, Kb.Q)(bb.owner, !(null === (wb = bb.live) || void 0 === wb || !wb.renderId), Ib, lb)[0] : void 0
            }, bb.packId)
          }))
        }), null !== wb && 0 === Ob && (0, Rb.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: lb(Zb(pb))
        })]
      })
    }

    function Zb(bb) {
      return "mine" === bb.section ? "shaderPackListing:noOwnPacks" : (0, Kb.q)(bb) ? "general:noResults" : "favourites" === bb.section ? "shaderPackListing:noFavourites" : "general:noResults"
    }
    var fb = Mb(7780);
    const Ab = 24,
      Wb = {
        favourites: "general:favourites",
        mine: "shaderPackListing:mine"
      };

    function Jb() {
      var bb, wb, Mb, pb;
      const {
        t: xb
      } = (0, Xb.C)(), jb = (0, Ib.useNavigatePreserveSearch)(), rb = (0, Hb.v)(), {
        userContext: Db,
        isUserContextUpdating: Zb
      } = (0, Bb.e)(), [Jb, Sb] = (0, cb.j)(), [Nb, vb] = (0, cb.h)(), Qb = (0, eb.useRef)(!1), [Gb, qb] = (0, Ob.m)(), ab = (0, Kb.C)(Gb), [ib, ub] = (0, eb.useState)(null !== (bb = ab.searchQuery) && void 0 !== bb ? bb : ""), db = (0, eb.useRef)(null), {
        searchQuery: Pb
      } = ab;
      (0, eb.useEffect)((() => {
        ub(null !== Pb && void 0 !== Pb ? Pb : ""), db.current && (db.current.value = null !== Pb && void 0 !== Pb ? Pb : "")
      }), [Pb]);
      const [nb, yb] = (0, eb.useState)(null), [ob, Tb] = (0, eb.useState)(!1), [kb, bw] = (0, eb.useState)(!1), [ww, Mw] = (0, eb.useState)(0), ew = (0, eb.useRef)(0), Hw = JSON.stringify(ab), pw = (0, Kb.j)();

      function Vw() {
        null !== pw ? (jb(pw), sb.c.set({
          openEverythingMenuName: gb.l.SETTINGS,
          openSettingsCategory: "LC"
        })) : jb("/")
      }

      function gw(bb) {
        qb((wb => {
          (0, Kb.fb)(wb, {
            ...ab,
            pageNumber: 1,
            ...bb
          })
        }))
      }

      function lw() {
        const bb = ib.trim() || null;
        gw({
          searchQuery: bb,
          ...null !== bb && !Qb.current && (0, Kb.l)(ab) && {
            withFeatures: [],
            withoutFeatures: []
          }
        })
      }(0, Fb.e)(Vw), (0, cb.d)(), (0, eb.useEffect)((() => {
        if (Zb) return;
        const bb = ++ew.current,
          wb = JSON.parse(Hw);
        Tb(!0), bw(!1), async function(bb) {
          if ("mine" === bb.section) return {
            kind: "owned",
            packs: await mb.e.getOwnedShaderPacks(Db)
          };
          const wb = "favourites" === bb.section,
            Mb = wb && (0, Kb.l)(bb),
            eb = await mb.e.getShaderPacks(Db, {
              sort: wb ? Kb.d : bb.sort,
              features: Mb ? [] : bb.withFeatures,
              withoutFeatures: Mb ? [] : bb.withoutFeatures,
              searchQuery: bb.searchQuery,
              pageNumber: bb.pageNumber,
              pageSize: Ab,
              onlyFavourites: wb,
              banned: (0, Kb.m)(Db) ? (0, Kb.b)(bb.banned) : void 0
            });
          return {
            kind: "listing",
            page: eb
          }
        }(wb).then((wb => {
          ew.current === bb && yb(wb)
        })).catch((wb => {
          ew.current === bb && (console.error("Failed to get shader packs", wb), yb(null), bw(!0))
        })).finally((() => {
          ew.current === bb && Tb(!1)
        }))
      }), [Hw, Db, Zb, ww]);
      const [Lw, Iw] = (0, eb.useState)(null), Ow = null !== (Mb = null === (pb = ("listing" === (null === nb || void 0 === nb ? void 0 : nb.kind) ? nb.page.results : (null !== (wb = null === nb || void 0 === nb ? void 0 : nb.packs) && void 0 !== wb ? wb : []).flatMap((bb => bb.live ? [bb.live] : [])))[0]) || void 0 === pb ? void 0 : pb.baselineVersion) && void 0 !== Mb ? Mb : null;
      (0, eb.useEffect)((() => {
        null !== Ow && Iw(Ow)
      }), [Ow]);
      const Uw = "mine" === ab.section,
        tw = (0, Kb.m)(Db),
        Cw = bb => {
          "explore" !== ab.section && (bb.stopPropagation(), bb.preventDefault(), gw({
            section: "explore"
          }))
        };
      return (0, Rb.jsxs)("div", {
        className: "ShaderPackBrowse AnimFadeIn",
        children: [(0, Rb.jsx)(Ub.b, {
          onClick: Vw,
          children: xb(null === pw ? "homePage:backToGames" : "shaderPackListing:backToSettings")
        }), (0, Rb.jsxs)("div", {
          className: "ShaderPackBrowseHeader",
          children: [(0, Rb.jsxs)("div", {
            className: "ShaderPackBrowseHeaderRow",
            children: [(0, Rb.jsx)("h1", {
              className: "VisuallyHidden",
              children: xb("shaderPackListing:title")
            }), (0, Rb.jsxs)("div", {
              className: "ShaderPackBrowseTabs",
              children: [(0, Rb.jsx)("div", {
                className: Vb()("ShaderPackBrowseSort", {
                  Active: "explore" === ab.section
                }),
                onMouseDownCapture: Cw,
                onTouchEndCapture: Cw,
                children: (0, Rb.jsx)(tb.c, {
                  options: lb.C.map((bb => ({
                    value: bb,
                    label: xb(Kb._[bb])
                  }))),
                  value: ab.sort,
                  onChange: bb => {
                    gw({
                      section: "explore",
                      sort: bb.value
                    })
                  }
                })
              }), Object.keys(Wb).map((bb => (0, Rb.jsx)(Ub.Y, {
                active: ab.section === bb,
                onClick: () => {
                  gw({
                    section: bb
                  })
                },
                children: xb(Wb[bb])
              }, bb)))]
            }), !Uw && (0, Rb.jsx)("div", {
              className: "ShaderPackBrowseDivider"
            }), !Uw && (0, Rb.jsxs)("div", {
              className: "ShaderPackBrowseSearch",
              children: [(0, Rb.jsx)("div", {
                className: "ShaderPackBrowseSearchIcon",
                children: (0, Rb.jsx)(Lb.b, {
                  name: "magnifying-glass"
                })
              }), (0, Rb.jsx)(Eb.d, {
                className: "ShaderPackBrowseSearchInput",
                placeholderText: xb("shaderPackListing:searchPlaceholder"),
                maxLength: lb.M,
                defaultValue: ib,
                domRef: db,
                onValueChange: ub,
                onEnter: lw
              }), (0, Rb.jsx)(Ub.f, {
                onClick: lw,
                children: xb("general:search")
              })]
            }), !Uw && (0, Rb.jsxs)(Ub.Y, {
              className: Vb()("ShaderPackBrowseFilterToggle", {
                Open: Nb
              }),
              pressed: Nb,
              onClick: () => {
                vb(!Nb)
              },
              children: [xb("shaderPackListing:filter"), " ", (0, Rb.jsx)(Lb.b, {
                name: Nb ? "angle-up" : "angle-down"
              })]
            }), (0, Rb.jsx)("div", {
              className: "ShaderPackBrowseSpace"
            }), zb.featureFlags.settings.canUseShaderPacks && (0, Rb.jsxs)(Ub.p, {
              onClick: () => {
                jb(Kb.W)
              },
              children: [(0, Rb.jsx)(Lb.b, {
                name: "upload"
              }), " ", xb("shaderPackListing:publish")]
            })]
          }), !Uw && Nb && (0, Rb.jsxs)("div", {
            className: "ShaderPackBrowseFeatures",
            children: [Kb.w.map((bb => {
              const wb = (0, Kb.h)(ab, bb),
                Mb = xb(Kb.H[bb]);
              return (0, Rb.jsx)(Ub.Y, {
                className: Vb()("ShaderPackBrowseFeature", {
                  Without: "without" === wb
                }),
                active: "with" === wb,
                pressed: null !== wb,
                onClick: () => {
                  Qb.current = !0, gw((0, Kb.eb)(ab, bb))
                },
                children: (0, Rb.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureLabel",
                  children: [(0, Rb.jsxs)("span", {
                    className: "ShaderPackBrowseFeatureReserve",
                    children: [(0, Rb.jsx)(Lb.b, {
                      name: "check"
                    }), " ", Mb]
                  }), (0, Rb.jsxs)("span", {
                    children: [null !== wb && (0, Rb.jsx)(Lb.b, {
                      name: "with" === wb ? "check" : "xmark"
                    }), " ", Mb]
                  })]
                })
              }, bb)
            })), tw && (0, Rb.jsx)(Ub.Y, {
              className: Vb()("ShaderPackBrowseFeature", {
                Without: "without" === ab.banned
              }),
              active: "with" === ab.banned,
              pressed: null !== ab.banned,
              onClick: () => {
                const bb = "without" === ab.banned && !Qb.current && (0, Kb.l)(ab);
                gw({
                  banned: (0, Kb.y)(ab.banned),
                  ...bb && {
                    withFeatures: [],
                    withoutFeatures: []
                  }
                })
              },
              children: (0, Rb.jsxs)("span", {
                className: "ShaderPackBrowseFeatureLabel",
                children: [(0, Rb.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureReserve",
                  children: [(0, Rb.jsx)(Lb.b, {
                    name: "check"
                  }), " BANNED"]
                }), (0, Rb.jsxs)("span", {
                  children: [null !== ab.banned && (0, Rb.jsx)(Lb.b, {
                    name: "with" === ab.banned ? "check" : "xmark"
                  }), " BANNED"]
                })]
              })
            })]
          })]
        }), (!Uw || null !== Lw) && (0, Rb.jsx)("div", {
          className: "ShaderPackBrowseScenes",
          children: (0, Rb.jsx)(fb.c, {
            selected: Jb,
            onSelect: Sb,
            imageUrl: bb => null === Lw ? null : (0, lb.u)(hb.clientSideServerUrls.s3Url, Lw, bb, "thumb")
          })
        }), (0, Rb.jsx)(Yb, {
          results: nb,
          loading: ob,
          failed: kb,
          onRetry: () => {
            Mw((bb => bb + 1))
          },
          view: ab,
          previewView: Jb
        }), "listing" === (null === nb || void 0 === nb ? void 0 : nb.kind) && (0, Rb.jsx)(Cb.d, {
          className: "ShaderPackBrowsePagination",
          page: nb.page.pageNumber,
          totalPages: nb.page.totalPages,
          onSetPage: bb => {
            qb((wb => {
              (0, Ob.i)(wb, bb)
            }))
          },
          getPageHref: function(bb) {
            const wb = new URLSearchParams(Gb);
            (0, Ob.i)(wb, bb);
            const Mb = wb.toString();
            return Mb ? `${rb.pathname}?${Mb}` : rb.pathname
          }
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);