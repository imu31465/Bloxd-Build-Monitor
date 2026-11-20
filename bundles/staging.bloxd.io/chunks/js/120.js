export const id = 120;
export const ids = [120];
export const modules = {
  6152: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      default: () => qb
    });
    var Ab = Ub(52),
      Mb = Ub(1446),
      Tb = Ub(984),
      Eb = Ub.n(Tb),
      Yb = Ub(307),
      Bb = Ub(6167),
      eb = Ub(990),
      vb = Ub(1433),
      Lb = Ub(4239),
      Pb = Ub(1352),
      Xb = Ub(2851),
      jb = Ub(4244),
      Rb = Ub(1589),
      kb = Ub(4234),
      yb = Ub(1060),
      Zb = Ub(19),
      Db = Ub(1413),
      zb = Ub(1142),
      xb = Ub(101),
      ib = Ub(1134),
      fb = Ub(1254),
      mb = Ub(1162),
      pb = Ub(6161),
      Nb = Ub(6176),
      Wb = Ub(1023);

    function Hb(bb) {
      let {
        pack: ab,
        view: Ub,
        favourite: Ab,
        notice: Mb
      } = bb;
      const {
        width: Tb,
        height: Yb
      } = Bb.s.thumb, {
        live: Lb
      } = ab;
      return (0, Wb.jsx)("div", {
        className: "ShaderPackCard",
        children: (0, Wb.jsxs)("div", {
          className: "ShaderPackCardTile",
          children: [(0, Wb.jsxs)(vb.LinkPreserveSearch, {
            to: (0, pb.Z)(ab.packId),
            className: "ShaderPackCardLink",
            children: [Lb && (0, Wb.jsx)("img", {
              className: "ShaderPackCardImage",
              src: (0, Bb.w)(zb.clientSideServerUrls.s3Url, Lb, Ub, "thumb"),
              width: Tb,
              height: Yb,
              loading: "lazy",
              alt: "",
              draggable: !1
            }), Lb && (0, Wb.jsx)(Nb.b, {
              item: Lb
            }), !Lb && (0, Wb.jsx)("div", {
              className: "ShaderPackCardImage ShaderPackCardImagePending",
              children: (0, Wb.jsx)(eb.e, {
                name: "hourglass"
              })
            }), (0, Wb.jsxs)("div", {
              className: "ShaderPackCardText",
              children: [Mb && (0, Wb.jsx)("div", {
                className: Eb()("ShaderPackCardNotice", {
                  Warning: "warning" === Mb.tone
                }),
                children: Mb.text
              }), (0, Wb.jsx)("div", {
                className: "ShaderPackCardName SmallTextBold",
                children: ab.name
              })]
            })]
          }), Lb && (0, Wb.jsxs)("div", {
            className: "ShaderPackCardStats",
            children: [(0, Wb.jsxs)("div", {
              className: "ShaderPackCardUses SmallTextBold",
              children: [(0, Wb.jsx)(eb.e, {
                name: "download"
              }), (0, mb.T)(Lb.downloads)]
            }), Ab && (0, Wb.jsx)(Pb.w, {
              onClick: Ab.onToggle,
              isLiked: !0 === Ab.isFavourite,
              isLoading: null === Ab.isFavourite
            })]
          })]
        })
      })
    }
    var Ib = Ub(6179);

    function db(bb) {
      let {
        results: ab,
        loading: Ub,
        failed: Ab,
        onRetry: Mb,
        view: Tb,
        previewView: Yb
      } = bb;
      const {
        t: Bb
      } = (0, ib.A)(), eb = (0, Ib.n)(), vb = Date.now(), Lb = null === ab ? 0 : "owned" === ab.kind ? ab.packs.length : ab.page.results.length;
      return (0, Wb.jsxs)("div", {
        className: Eb()("ShaderPackBrowseResults", {
          Loading: Ub && null !== ab
        }),
        children: [Ub && null === ab && (0, Wb.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: (0, Wb.jsx)(fb.b, {})
        }), Ab && (0, Wb.jsxs)("div", {
          className: "ShaderPackBrowseMessage",
          children: [Bb("shaderPackListing:loadFailed"), (0, Wb.jsx)(Pb.g, {
            onClick: Mb,
            children: Bb("general:tryAgain")
          })]
        }), "listing" === (null === ab || void 0 === ab ? void 0 : ab.kind) && Lb > 0 && (0, Wb.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: ab.page.results.map((bb => (0, Wb.jsx)(Hb, {
            pack: {
              packId: bb.packId,
              name: bb.name,
              live: bb
            },
            view: Yb,
            favourite: {
              isFavourite: eb.isFavourite(bb.packId),
              onToggle: () => {
                eb.toggle(bb.packId)
              }
            }
          }, bb.packId)))
        }), "owned" === (null === ab || void 0 === ab ? void 0 : ab.kind) && Lb > 0 && (0, Wb.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: ab.packs.map((bb => {
            var ab;
            return (0, Wb.jsx)(Hb, {
              pack: bb,
              view: Yb,
              notice: bb.owner ? (0, pb.V)(bb.owner, !(null === (ab = bb.live) || void 0 === ab || !ab.renderId), vb, Bb)[0] : void 0
            }, bb.packId)
          }))
        }), null !== ab && 0 === Lb && (0, Wb.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: Bb(Fb(Tb))
        })]
      })
    }

    function Fb(bb) {
      return "mine" === bb.section ? "shaderPackListing:noOwnPacks" : (0, pb.x)(bb) ? "general:noResults" : "favourites" === bb.section ? "shaderPackListing:noFavourites" : "general:noResults"
    }
    var hb = Ub(6194);
    const Gb = 24,
      Qb = {
        favourites: "general:favourites",
        mine: "shaderPackListing:mine"
      };

    function qb() {
      var bb, ab, Ub, Tb;
      const {
        t: fb
      } = (0, ib.A)(), mb = (0, vb.useNavigatePreserveSearch)(), Nb = (0, Mb.v)(), {
        userContext: Hb,
        isUserContextUpdating: Fb
      } = (0, yb.c)(), [qb, ub] = (0, Ib.k)(), [rb, Kb] = (0, Ib.h)(), ob = (0, Ab.useRef)(!1), [lb, tb] = (0, Lb.l)(), wb = (0, pb.H)(lb), [sb, gb] = (0, Ab.useState)(null !== (bb = wb.searchQuery) && void 0 !== bb ? bb : ""), Cb = (0, Ab.useRef)(null), {
        searchQuery: Vb
      } = wb;
      (0, Ab.useEffect)((() => {
        gb(null !== Vb && void 0 !== Vb ? Vb : ""), Cb.current && (Cb.current.value = null !== Vb && void 0 !== Vb ? Vb : "")
      }), [Vb]);
      const [Ob, cb] = (0, Ab.useState)(null), [Jb, nb] = (0, Ab.useState)(!1), [Sb, ba] = (0, Ab.useState)(!1), [aa, Ua] = (0, Ab.useState)(0), Aa = (0, Ab.useRef)(0), Ma = JSON.stringify(wb), Ta = (0, pb.m)();

      function Ea() {
        null !== Ta ? (mb(Ta), Zb.c.set({
          openEverythingMenuName: Yb.j.SETTINGS,
          openSettingsCategory: "QX"
        })) : mb("/")
      }

      function Ya(bb) {
        tb((ab => {
          (0, pb.ib)(ab, {
            ...wb,
            pageNumber: 1,
            ...bb
          })
        }))
      }

      function Ba() {
        const bb = sb.trim() || null;
        Ya({
          searchQuery: bb,
          ...null !== bb && !ob.current && (0, pb.p)(wb) && {
            withFeatures: [],
            withoutFeatures: []
          }
        })
      }(0, kb.c)(Ea), (0, Ib.e)(), (0, Ab.useEffect)((() => {
        if (Fb) return;
        const bb = ++Aa.current,
          ab = JSON.parse(Ma);
        nb(!0), ba(!1), async function(bb) {
          if ("mine" === bb.section) return {
            kind: "owned",
            packs: await Db.b.getOwnedShaderPacks(Hb)
          };
          const ab = "favourites" === bb.section,
            Ub = ab && (0, pb.p)(bb),
            Ab = await Db.b.getShaderPacks(Hb, {
              sort: ab ? pb.g : bb.sort,
              features: Ub ? [] : bb.withFeatures,
              withoutFeatures: Ub ? [] : bb.withoutFeatures,
              searchQuery: bb.searchQuery,
              pageNumber: bb.pageNumber,
              pageSize: Gb,
              onlyFavourites: ab,
              banned: (0, pb.t)(Hb) ? (0, pb.e)(bb.banned) : void 0
            });
          return {
            kind: "listing",
            page: Ab
          }
        }(ab).then((ab => {
          Aa.current === bb && cb(ab)
        })).catch((ab => {
          Aa.current === bb && (console.error("Failed to get shader packs", ab), cb(null), ba(!0))
        })).finally((() => {
          Aa.current === bb && nb(!1)
        }))
      }), [Ma, Hb, Fb, aa]);
      const [ea, va] = (0, Ab.useState)(null), La = null !== (Ub = null === (Tb = ("listing" === (null === Ob || void 0 === Ob ? void 0 : Ob.kind) ? Ob.page.results : (null !== (ab = null === Ob || void 0 === Ob ? void 0 : Ob.packs) && void 0 !== ab ? ab : []).flatMap((bb => bb.live ? [bb.live] : [])))[0]) || void 0 === Tb ? void 0 : Tb.baselineVersion) && void 0 !== Ub ? Ub : null;
      (0, Ab.useEffect)((() => {
        null !== La && va(La)
      }), [La]);
      const Pa = "mine" === wb.section,
        Xa = (0, pb.t)(Hb),
        ja = bb => {
          "explore" !== wb.section && (bb.stopPropagation(), bb.preventDefault(), Ya({
            section: "explore"
          }))
        };
      return (0, Wb.jsxs)("div", {
        className: "ShaderPackBrowse AnimFadeIn",
        children: [(0, Wb.jsx)(Pb.e, {
          onClick: Ea,
          children: fb(null === Ta ? "homePage:backToGames" : "shaderPackListing:backToSettings")
        }), (0, Wb.jsxs)("div", {
          className: "ShaderPackBrowseHeader",
          children: [(0, Wb.jsxs)("div", {
            className: "ShaderPackBrowseHeaderRow",
            children: [(0, Wb.jsx)("h1", {
              className: "VisuallyHidden",
              children: fb("shaderPackListing:title")
            }), (0, Wb.jsxs)("div", {
              className: "ShaderPackBrowseTabs",
              children: [(0, Wb.jsx)("div", {
                className: Eb()("ShaderPackBrowseSort", {
                  Active: "explore" === wb.section
                }),
                onMouseDownCapture: ja,
                onTouchEndCapture: ja,
                children: (0, Wb.jsx)(Xb.c, {
                  options: Bb.z.map((bb => ({
                    value: bb,
                    label: fb(pb.db[bb])
                  }))),
                  value: wb.sort,
                  onChange: bb => {
                    Ya({
                      section: "explore",
                      sort: bb.value
                    })
                  }
                })
              }), Object.keys(Qb).map((bb => (0, Wb.jsx)(Pb.M, {
                active: wb.section === bb,
                onClick: () => {
                  Ya({
                    section: bb
                  })
                },
                children: fb(Qb[bb])
              }, bb)))]
            }), !Pa && (0, Wb.jsx)("div", {
              className: "ShaderPackBrowseDivider"
            }), !Pa && (0, Wb.jsxs)("div", {
              className: "ShaderPackBrowseSearch",
              children: [(0, Wb.jsx)("div", {
                className: "ShaderPackBrowseSearchIcon",
                children: (0, Wb.jsx)(eb.e, {
                  name: "magnifying-glass"
                })
              }), (0, Wb.jsx)(Rb.c, {
                className: "ShaderPackBrowseSearchInput",
                placeholderText: fb("shaderPackListing:searchPlaceholder"),
                maxLength: Bb.M,
                defaultValue: sb,
                domRef: Cb,
                onValueChange: gb,
                onEnter: Ba
              }), (0, Wb.jsx)(Pb.g, {
                onClick: Ba,
                children: fb("general:search")
              })]
            }), !Pa && (0, Wb.jsxs)(Pb.M, {
              className: Eb()("ShaderPackBrowseFilterToggle", {
                Open: rb
              }),
              pressed: rb,
              onClick: () => {
                Kb(!rb)
              },
              children: [fb("shaderPackListing:filter"), " ", (0, Wb.jsx)(eb.e, {
                name: rb ? "angle-up" : "angle-down"
              })]
            }), (0, Wb.jsx)("div", {
              className: "ShaderPackBrowseSpace"
            }), xb.featureFlags.settings.canUseShaderPacks && (0, Wb.jsxs)(Pb.m, {
              onClick: () => {
                mb(pb.ab)
              },
              children: [(0, Wb.jsx)(eb.e, {
                name: "upload"
              }), " ", fb("shaderPackListing:publish")]
            })]
          }), !Pa && rb && (0, Wb.jsxs)("div", {
            className: "ShaderPackBrowseFeatures",
            children: [pb.D.map((bb => {
              const ab = (0, pb.j)(wb, bb),
                Ub = fb(pb.K[bb]);
              return (0, Wb.jsx)(Pb.M, {
                className: Eb()("ShaderPackBrowseFeature", {
                  Without: "without" === ab
                }),
                active: "with" === ab,
                pressed: null !== ab,
                onClick: () => {
                  ob.current = !0, Ya((0, pb.hb)(wb, bb))
                },
                children: (0, Wb.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureLabel",
                  children: [(0, Wb.jsxs)("span", {
                    className: "ShaderPackBrowseFeatureReserve",
                    children: [(0, Wb.jsx)(eb.e, {
                      name: "check"
                    }), " ", Ub]
                  }), (0, Wb.jsxs)("span", {
                    children: [null !== ab && (0, Wb.jsx)(eb.e, {
                      name: "with" === ab ? "check" : "xmark"
                    }), " ", Ub]
                  })]
                })
              }, bb)
            })), Xa && (0, Wb.jsx)(Pb.M, {
              className: Eb()("ShaderPackBrowseFeature", {
                Without: "without" === wb.banned
              }),
              active: "with" === wb.banned,
              pressed: null !== wb.banned,
              onClick: () => {
                const bb = "without" === wb.banned && !ob.current && (0, pb.p)(wb);
                Ya({
                  banned: (0, pb.E)(wb.banned),
                  ...bb && {
                    withFeatures: [],
                    withoutFeatures: []
                  }
                })
              },
              children: (0, Wb.jsxs)("span", {
                className: "ShaderPackBrowseFeatureLabel",
                children: [(0, Wb.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureReserve",
                  children: [(0, Wb.jsx)(eb.e, {
                    name: "check"
                  }), " BANNED"]
                }), (0, Wb.jsxs)("span", {
                  children: [null !== wb.banned && (0, Wb.jsx)(eb.e, {
                    name: "with" === wb.banned ? "check" : "xmark"
                  }), " BANNED"]
                })]
              })
            })]
          })]
        }), (!Pa || null !== ea) && (0, Wb.jsx)("div", {
          className: "ShaderPackBrowseScenes",
          children: (0, Wb.jsx)(hb.c, {
            selected: qb,
            onSelect: ub,
            imageUrl: bb => null === ea ? null : (0, Bb.m)(zb.clientSideServerUrls.s3Url, ea, bb, "thumb")
          })
        }), (0, Wb.jsx)(db, {
          results: Ob,
          loading: Jb,
          failed: Sb,
          onRetry: () => {
            Ua((bb => bb + 1))
          },
          view: wb,
          previewView: qb
        }), "listing" === (null === Ob || void 0 === Ob ? void 0 : Ob.kind) && (0, Wb.jsx)(jb.e, {
          className: "ShaderPackBrowsePagination",
          page: Ob.page.pageNumber,
          totalPages: Ob.page.totalPages,
          onSetPage: bb => {
            tb((ab => {
              (0, Lb.h)(ab, bb)
            }))
          },
          getPageHref: function(bb) {
            const ab = new URLSearchParams(lb);
            (0, Lb.h)(ab, bb);
            const Ub = ab.toString();
            return Ub ? `${Nb.pathname}?${Ub}` : Nb.pathname
          }
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);