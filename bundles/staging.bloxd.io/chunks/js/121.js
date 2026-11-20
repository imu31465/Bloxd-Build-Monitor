export const id = 121;
export const ids = [121];
export const modules = {
  6276: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      default: () => Nb
    });
    var Bb = hb(49),
      Ob = hb(1431),
      Gb = hb(958),
      Ub = hb.n(Gb),
      Lb = hb(298),
      Yb = hb(6281),
      Sb = hb(966),
      ab = hb(1415),
      Hb = hb(4322),
      wb = hb(1357),
      Zb = hb(2925),
      Xb = hb(4327),
      pb = hb(1585),
      ob = hb(4318),
      Ab = hb(1029),
      lb = hb(13),
      Kb = hb(1398),
      Wb = hb(1103),
      Cb = hb(86),
      db = hb(1095),
      rb = hb(1242),
      jb = hb(1124),
      nb = hb(6279),
      Db = hb(6285),
      xb = hb(1007);

    function zb(bb) {
      let {
        pack: ub,
        view: hb,
        favourite: Bb,
        notice: Ob
      } = bb;
      const {
        width: Gb,
        height: Lb
      } = Yb.o.thumb, {
        live: Hb
      } = ub;
      return (0, xb.jsx)("div", {
        className: "ShaderPackCard",
        children: (0, xb.jsxs)("div", {
          className: "ShaderPackCardTile",
          children: [(0, xb.jsxs)(ab.LinkPreserveSearch, {
            to: (0, nb.Z)(ub.packId),
            className: "ShaderPackCardLink",
            children: [Hb && (0, xb.jsx)("img", {
              className: "ShaderPackCardImage",
              src: (0, Yb.p)(Wb.clientSideServerUrls.s3Url, Hb, hb, "thumb"),
              width: Gb,
              height: Lb,
              loading: "lazy",
              alt: "",
              draggable: !1
            }), Hb && (0, xb.jsx)(Db.d, {
              item: Hb
            }), !Hb && (0, xb.jsx)("div", {
              className: "ShaderPackCardImage ShaderPackCardImagePending",
              children: (0, xb.jsx)(Sb.e, {
                name: "hourglass"
              })
            }), (0, xb.jsxs)("div", {
              className: "ShaderPackCardText",
              children: [Ob && (0, xb.jsx)("div", {
                className: Ub()("ShaderPackCardNotice", {
                  Warning: "warning" === Ob.tone
                }),
                children: Ob.text
              }), (0, xb.jsx)("div", {
                className: "ShaderPackCardName SmallTextBold",
                children: ub.name
              })]
            })]
          }), Hb && (0, xb.jsxs)("div", {
            className: "ShaderPackCardStats",
            children: [(0, xb.jsxs)("div", {
              className: "ShaderPackCardUses SmallTextBold",
              children: [(0, xb.jsx)(Sb.e, {
                name: "download"
              }), (0, jb._)(Hb.downloads)]
            }), Bb && (0, xb.jsx)(wb.u, {
              onClick: Bb.onToggle,
              isLiked: !0 === Bb.isFavourite,
              isLoading: null === Bb.isFavourite
            })]
          })]
        })
      })
    }
    var gb = hb(6292);

    function ib(bb) {
      let {
        results: ub,
        loading: hb,
        failed: Bb,
        onRetry: Ob,
        view: Gb,
        previewView: Lb
      } = bb;
      const {
        t: Yb
      } = (0, db.K)(), Sb = (0, gb.f)(), ab = Date.now(), Hb = null === ub ? 0 : "owned" === ub.kind ? ub.packs.length : ub.page.results.length;
      return (0, xb.jsxs)("div", {
        className: Ub()("ShaderPackBrowseResults", {
          Loading: hb && null !== ub
        }),
        children: [hb && null === ub && (0, xb.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: (0, xb.jsx)(rb.c, {})
        }), Bb && (0, xb.jsxs)("div", {
          className: "ShaderPackBrowseMessage",
          children: [Yb("shaderPackListing:loadFailed"), (0, xb.jsx)(wb.e, {
            onClick: Ob,
            children: Yb("general:tryAgain")
          })]
        }), "listing" === (null === ub || void 0 === ub ? void 0 : ub.kind) && Hb > 0 && (0, xb.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: ub.page.results.map((bb => (0, xb.jsx)(zb, {
            pack: {
              packId: bb.packId,
              name: bb.name,
              live: bb
            },
            view: Lb,
            favourite: {
              isFavourite: Sb.isFavourite(bb.packId),
              onToggle: () => {
                Sb.toggle(bb.packId)
              }
            }
          }, bb.packId)))
        }), "owned" === (null === ub || void 0 === ub ? void 0 : ub.kind) && Hb > 0 && (0, xb.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: ub.packs.map((bb => {
            var ub;
            return (0, xb.jsx)(zb, {
              pack: bb,
              view: Lb,
              notice: bb.owner ? (0, nb.V)(bb.owner, !(null === (ub = bb.live) || void 0 === ub || !ub.renderId), ab, Yb)[0] : void 0
            }, bb.packId)
          }))
        }), null !== ub && 0 === Hb && (0, xb.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: Yb(vb(Gb))
        })]
      })
    }

    function vb(bb) {
      return "mine" === bb.section ? "shaderPackListing:noOwnPacks" : (0, nb.v)(bb) ? "general:noResults" : "favourites" === bb.section ? "shaderPackListing:noFavourites" : "general:noResults"
    }
    var tb = hb(6309);
    const Jb = 24,
      eb = {
        favourites: "general:favourites",
        mine: "shaderPackListing:mine"
      };

    function Nb() {
      var bb, ub, hb, Gb;
      const {
        t: rb
      } = (0, db.K)(), jb = (0, ab.useNavigatePreserveSearch)(), Db = (0, Ob.x)(), {
        userContext: zb,
        isUserContextUpdating: vb
      } = (0, Ab.d)(), [Nb, sb] = (0, gb.d)(), [Mb, mb] = (0, gb.c)(), Ib = (0, Bb.useRef)(!1), [Pb, qb] = (0, Hb.k)(), Eb = (0, nb.F)(Pb), [yb, Vb] = (0, Bb.useState)(null !== (bb = Eb.searchQuery) && void 0 !== bb ? bb : ""), Fb = (0, Bb.useRef)(null), {
        searchQuery: fb
      } = Eb;
      (0, Bb.useEffect)((() => {
        Vb(null !== fb && void 0 !== fb ? fb : ""), Fb.current && (Fb.current.value = null !== fb && void 0 !== fb ? fb : "")
      }), [fb]);
      const [kb, Tb] = (0, Bb.useState)(null), [cb, Qb] = (0, Bb.useState)(!1), [Rb, bu] = (0, Bb.useState)(!1), [uu, hu] = (0, Bb.useState)(0), Bu = (0, Bb.useRef)(0), Ou = JSON.stringify(Eb), Gu = (0, nb.m)();

      function Uu() {
        null !== Gu ? (jb(Gu), lb.d.set({
          openEverythingMenuName: Lb.u.SETTINGS,
          openSettingsCategory: "vZ"
        })) : jb("/")
      }

      function Lu(bb) {
        qb((ub => {
          (0, nb.jb)(ub, {
            ...Eb,
            pageNumber: 1,
            ...bb
          })
        }))
      }

      function Yu() {
        const bb = yb.trim() || null;
        Lu({
          searchQuery: bb,
          ...null !== bb && !Ib.current && (0, nb.q)(Eb) && {
            withFeatures: [],
            withoutFeatures: []
          }
        })
      }(0, ob.c)(Uu), (0, gb.b)(), (0, Bb.useEffect)((() => {
        if (vb) return;
        const bb = ++Bu.current,
          ub = JSON.parse(Ou);
        Qb(!0), bu(!1), async function(bb) {
          if ("mine" === bb.section) return {
            kind: "owned",
            packs: await Kb.e.getOwnedShaderPacks(zb)
          };
          const ub = "favourites" === bb.section,
            hb = ub && (0, nb.q)(bb),
            Bb = await Kb.e.getShaderPacks(zb, {
              sort: ub ? nb.i : bb.sort,
              features: hb ? [] : bb.withFeatures,
              withoutFeatures: hb ? [] : bb.withoutFeatures,
              searchQuery: bb.searchQuery,
              pageNumber: bb.pageNumber,
              pageSize: Jb,
              onlyFavourites: ub,
              banned: (0, nb.u)(zb) ? (0, nb.e)(bb.banned) : void 0
            });
          return {
            kind: "listing",
            page: Bb
          }
        }(ub).then((ub => {
          Bu.current === bb && Tb(ub)
        })).catch((ub => {
          Bu.current === bb && (console.error("Failed to get shader packs", ub), Tb(null), bu(!0))
        })).finally((() => {
          Bu.current === bb && Qb(!1)
        }))
      }), [Ou, zb, vb, uu]);
      const [Su, au] = (0, Bb.useState)(null), Hu = null !== (hb = null === (Gb = ("listing" === (null === kb || void 0 === kb ? void 0 : kb.kind) ? kb.page.results : (null !== (ub = null === kb || void 0 === kb ? void 0 : kb.packs) && void 0 !== ub ? ub : []).flatMap((bb => bb.live ? [bb.live] : [])))[0]) || void 0 === Gb ? void 0 : Gb.baselineVersion) && void 0 !== hb ? hb : null;
      (0, Bb.useEffect)((() => {
        null !== Hu && au(Hu)
      }), [Hu]);
      const wu = "mine" === Eb.section,
        Zu = (0, nb.u)(zb),
        Xu = bb => {
          "explore" !== Eb.section && (bb.stopPropagation(), bb.preventDefault(), Lu({
            section: "explore"
          }))
        };
      return (0, xb.jsxs)("div", {
        className: "ShaderPackBrowse AnimFadeIn",
        children: [(0, xb.jsx)(wb.d, {
          onClick: Uu,
          children: rb(null === Gu ? "homePage:backToGames" : "shaderPackListing:backToSettings")
        }), (0, xb.jsxs)("div", {
          className: "ShaderPackBrowseHeader",
          children: [(0, xb.jsxs)("div", {
            className: "ShaderPackBrowseHeaderRow",
            children: [(0, xb.jsx)("h1", {
              className: "VisuallyHidden",
              children: rb("shaderPackListing:title")
            }), (0, xb.jsxs)("div", {
              className: "ShaderPackBrowseTabs",
              children: [(0, xb.jsx)("div", {
                className: Ub()("ShaderPackBrowseSort", {
                  Active: "explore" === Eb.section
                }),
                onMouseDownCapture: Xu,
                onTouchEndCapture: Xu,
                children: (0, xb.jsx)(Zb.b, {
                  options: Yb.q.map((bb => ({
                    value: bb,
                    label: rb(nb.cb[bb])
                  }))),
                  value: Eb.sort,
                  onChange: bb => {
                    Lu({
                      section: "explore",
                      sort: bb.value
                    })
                  }
                })
              }), Object.keys(eb).map((bb => (0, xb.jsx)(wb.O, {
                active: Eb.section === bb,
                onClick: () => {
                  Lu({
                    section: bb
                  })
                },
                children: rb(eb[bb])
              }, bb)))]
            }), !wu && (0, xb.jsx)("div", {
              className: "ShaderPackBrowseDivider"
            }), !wu && (0, xb.jsxs)("div", {
              className: "ShaderPackBrowseSearch",
              children: [(0, xb.jsx)("div", {
                className: "ShaderPackBrowseSearchIcon",
                children: (0, xb.jsx)(Sb.e, {
                  name: "magnifying-glass"
                })
              }), (0, xb.jsx)(pb.b, {
                className: "ShaderPackBrowseSearchInput",
                placeholderText: rb("shaderPackListing:searchPlaceholder"),
                maxLength: Yb.C,
                defaultValue: yb,
                domRef: Fb,
                onValueChange: Vb,
                onEnter: Yu
              }), (0, xb.jsx)(wb.e, {
                onClick: Yu,
                children: rb("general:search")
              })]
            }), !wu && (0, xb.jsxs)(wb.O, {
              className: Ub()("ShaderPackBrowseFilterToggle", {
                Open: Mb
              }),
              pressed: Mb,
              onClick: () => {
                mb(!Mb)
              },
              children: [rb("shaderPackListing:filter"), " ", (0, xb.jsx)(Sb.e, {
                name: Mb ? "angle-up" : "angle-down"
              })]
            }), (0, xb.jsx)("div", {
              className: "ShaderPackBrowseSpace"
            }), Cb.featureFlags.settings.canUseShaderPacks && (0, xb.jsxs)(wb.m, {
              onClick: () => {
                jb(nb._)
              },
              children: [(0, xb.jsx)(Sb.e, {
                name: "upload"
              }), " ", rb("shaderPackListing:publish")]
            })]
          }), !wu && Mb && (0, xb.jsxs)("div", {
            className: "ShaderPackBrowseFeatures",
            children: [nb.A.map((bb => {
              const ub = (0, nb.j)(Eb, bb),
                hb = rb(nb.M[bb]);
              return (0, xb.jsx)(wb.O, {
                className: Ub()("ShaderPackBrowseFeature", {
                  Without: "without" === ub
                }),
                active: "with" === ub,
                pressed: null !== ub,
                onClick: () => {
                  Ib.current = !0, Lu((0, nb.gb)(Eb, bb))
                },
                children: (0, xb.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureLabel",
                  children: [(0, xb.jsxs)("span", {
                    className: "ShaderPackBrowseFeatureReserve",
                    children: [(0, xb.jsx)(Sb.e, {
                      name: "check"
                    }), " ", hb]
                  }), (0, xb.jsxs)("span", {
                    children: [null !== ub && (0, xb.jsx)(Sb.e, {
                      name: "with" === ub ? "check" : "xmark"
                    }), " ", hb]
                  })]
                })
              }, bb)
            })), Zu && (0, xb.jsx)(wb.O, {
              className: Ub()("ShaderPackBrowseFeature", {
                Without: "without" === Eb.banned
              }),
              active: "with" === Eb.banned,
              pressed: null !== Eb.banned,
              onClick: () => {
                const bb = "without" === Eb.banned && !Ib.current && (0, nb.q)(Eb);
                Lu({
                  banned: (0, nb.D)(Eb.banned),
                  ...bb && {
                    withFeatures: [],
                    withoutFeatures: []
                  }
                })
              },
              children: (0, xb.jsxs)("span", {
                className: "ShaderPackBrowseFeatureLabel",
                children: [(0, xb.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureReserve",
                  children: [(0, xb.jsx)(Sb.e, {
                    name: "check"
                  }), " BANNED"]
                }), (0, xb.jsxs)("span", {
                  children: [null !== Eb.banned && (0, xb.jsx)(Sb.e, {
                    name: "with" === Eb.banned ? "check" : "xmark"
                  }), " BANNED"]
                })]
              })
            })]
          })]
        }), (!wu || null !== Su) && (0, xb.jsx)("div", {
          className: "ShaderPackBrowseScenes",
          children: (0, xb.jsx)(tb.d, {
            selected: Nb,
            onSelect: sb,
            imageUrl: bb => null === Su ? null : (0, Yb.k)(Wb.clientSideServerUrls.s3Url, Su, bb, "thumb")
          })
        }), (0, xb.jsx)(ib, {
          results: kb,
          loading: cb,
          failed: Rb,
          onRetry: () => {
            hu((bb => bb + 1))
          },
          view: Eb,
          previewView: Nb
        }), "listing" === (null === kb || void 0 === kb ? void 0 : kb.kind) && (0, xb.jsx)(Xb.e, {
          className: "ShaderPackBrowsePagination",
          page: kb.page.pageNumber,
          totalPages: kb.page.totalPages,
          onSetPage: bb => {
            qb((ub => {
              (0, Hb.h)(ub, bb)
            }))
          },
          getPageHref: function(bb) {
            const ub = new URLSearchParams(Pb);
            (0, Hb.h)(ub, bb);
            const hb = ub.toString();
            return hb ? `${Db.pathname}?${hb}` : Db.pathname
          }
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);