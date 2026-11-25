export const id = 129;
export const ids = [129];
export const modules = {
  6747: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      default: () => kt
    });
    var Ot = Vt(63),
      qt = Vt(1623),
      Dt = Vt(1140),
      mt = Vt.n(Dt),
      dt = Vt(377),
      jt = Vt(6756),
      Ht = Vt(1152),
      Xt = Vt(1613),
      Qt = Vt(4691),
      lt = Vt(1556),
      Et = Vt(3192),
      ft = Vt(4700),
      wt = Vt(1770),
      yt = Vt(4689),
      Nt = Vt(1218),
      Mt = Vt(26),
      bt = Vt(1600),
      Jt = Vt(1293),
      Ct = Vt(106),
      ut = Vt(1286),
      Kt = Vt(1436),
      ht = Vt(1308),
      vt = Vt(6754),
      Wt = Vt(6763),
      St = Vt(1188);

    function ct(tt) {
      let {
        pack: et,
        view: Vt,
        favourite: Ot,
        notice: qt
      } = tt;
      const {
        width: Dt,
        height: dt
      } = jt.v.thumb, {
        live: Qt
      } = et;
      return (0, St.jsx)("div", {
        className: "ShaderPackCard",
        children: (0, St.jsxs)("div", {
          className: "ShaderPackCardTile",
          children: [(0, St.jsxs)(Xt.LinkPreserveSearch, {
            to: (0, vt.cb)(et.packId),
            className: "ShaderPackCardLink",
            children: [Qt && (0, St.jsx)("img", {
              className: "ShaderPackCardImage",
              src: (0, jt.w)(Jt.clientSideServerUrls.s3Url, Qt, Vt, "thumb"),
              width: Dt,
              height: dt,
              loading: "lazy",
              alt: "",
              draggable: !1
            }), Qt && (0, St.jsx)(Wt.b, {
              item: Qt
            }), !Qt && (0, St.jsx)("div", {
              className: "ShaderPackCardImage ShaderPackCardImagePending",
              children: (0, St.jsx)(Ht.b, {
                name: "hourglass"
              })
            }), (0, St.jsxs)("div", {
              className: "ShaderPackCardText",
              children: [qt && (0, St.jsx)("div", {
                className: mt()("ShaderPackCardNotice", {
                  Warning: "warning" === qt.tone
                }),
                children: qt.text
              }), (0, St.jsx)("div", {
                className: "ShaderPackCardName SmallTextBold",
                children: et.name
              })]
            })]
          }), Qt && (0, St.jsxs)("div", {
            className: "ShaderPackCardStats",
            children: [(0, St.jsxs)("div", {
              className: "ShaderPackCardUses SmallTextBold",
              children: [(0, St.jsx)(Ht.b, {
                name: "download"
              }), (0, ht.S)(Qt.downloads)]
            }), Ot && (0, St.jsx)(lt.t, {
              onClick: Ot.onToggle,
              isLiked: !0 === Ot.isFavourite,
              isLoading: null === Ot.isFavourite
            })]
          })]
        })
      })
    }
    var Rt = Vt(6772);

    function It(tt) {
      let {
        results: et,
        loading: Vt,
        failed: Ot,
        onRetry: qt,
        view: Dt,
        previewView: dt
      } = tt;
      const {
        t: jt
      } = (0, ut.H)(), Ht = (0, Rt.h)(), Xt = Date.now(), Qt = null === et ? 0 : "owned" === et.kind ? et.packs.length : et.page.results.length;
      return (0, St.jsxs)("div", {
        className: mt()("ShaderPackBrowseResults", {
          Loading: Vt && null !== et
        }),
        children: [Vt && null === et && (0, St.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: (0, St.jsx)(Kt.b, {})
        }), Ot && (0, St.jsxs)("div", {
          className: "ShaderPackBrowseMessage",
          children: [jt("shaderPackListing:loadFailed"), (0, St.jsx)(lt.f, {
            onClick: qt,
            children: jt("general:tryAgain")
          })]
        }), "listing" === (null === et || void 0 === et ? void 0 : et.kind) && Qt > 0 && (0, St.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: et.page.results.map((tt => (0, St.jsx)(ct, {
            pack: {
              packId: tt.packId,
              name: tt.name,
              live: tt
            },
            view: dt,
            favourite: {
              isFavourite: Ht.isFavourite(tt.packId),
              onToggle: () => {
                Ht.toggle(tt.packId)
              }
            }
          }, tt.packId)))
        }), "owned" === (null === et || void 0 === et ? void 0 : et.kind) && Qt > 0 && (0, St.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: et.packs.map((tt => {
            var et;
            return (0, St.jsx)(ct, {
              pack: tt,
              view: dt,
              notice: tt.owner ? (0, vt._)(tt.owner, !(null === (et = tt.live) || void 0 === et || !et.renderId), Xt, jt)[0] : void 0
            }, tt.packId)
          }))
        }), null !== et && 0 === Qt && (0, St.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: jt(Pt(Dt))
        })]
      })
    }

    function Pt(tt) {
      return "mine" === tt.section ? "shaderPackListing:noOwnPacks" : (0, vt.v)(tt) ? "general:noResults" : "favourites" === tt.section ? "shaderPackListing:noFavourites" : "general:noResults"
    }
    var Zt = Vt(6785);
    const Lt = 24,
      Ft = {
        favourites: "general:favourites",
        mine: "shaderPackListing:mine"
      };

    function kt() {
      var tt, et, Vt, Dt;
      const {
        t: Kt
      } = (0, ut.H)(), ht = (0, Xt.useNavigatePreserveSearch)(), Wt = (0, qt.s)(), {
        userContext: ct,
        isUserContextUpdating: Pt
      } = (0, Nt.d)(), [kt, Gt] = (0, Rt.g)(), [zt, ot] = (0, Rt.f)(), rt = (0, Ot.useRef)(!1), [Ut, At] = (0, Qt.r)(), it = (0, vt.I)(Ut), [Yt, Bt] = (0, Ot.useState)(null !== (tt = it.searchQuery) && void 0 !== tt ? tt : ""), pt = (0, Ot.useRef)(null), {
        searchQuery: xt
      } = it;
      (0, Ot.useEffect)((() => {
        Bt(null !== xt && void 0 !== xt ? xt : ""), pt.current && (pt.current.value = null !== xt && void 0 !== xt ? xt : "")
      }), [xt]);
      const [Tt, gt] = (0, Ot.useState)(null), [st, nt] = (0, Ot.useState)(!1), [te, ee] = (0, Ot.useState)(!1), [Ve, Oe] = (0, Ot.useState)(0), qe = (0, Ot.useRef)(0), De = JSON.stringify(it), me = (0, vt.n)();

      function de() {
        null !== me ? (ht(me), Mt.b.set({
          openEverythingMenuName: dt.o.SETTINGS,
          openSettingsCategory: "YE"
        })) : ht("/")
      }

      function je(tt) {
        At((et => {
          (0, vt.qb)(et, {
            ...it,
            pageNumber: 1,
            ...tt
          })
        }))
      }

      function He() {
        const tt = Yt.trim() || null;
        je({
          searchQuery: tt,
          ...null !== tt && !rt.current && (0, vt.r)(it) && {
            withFeatures: [],
            withoutFeatures: []
          }
        })
      }(0, yt.b)(de), (0, Rt.e)(), (0, Ot.useEffect)((() => {
        if (Pt) return;
        const tt = ++qe.current,
          et = JSON.parse(De);
        nt(!0), ee(!1), async function(tt) {
          if ("mine" === tt.section) return {
            kind: "owned",
            packs: await bt.e.getOwnedShaderPacks(ct)
          };
          const et = "favourites" === tt.section,
            Vt = et && (0, vt.r)(tt),
            Ot = await bt.e.getShaderPacks(ct, {
              sort: et ? vt.f : tt.sort,
              features: Vt ? [] : tt.withFeatures,
              withoutFeatures: Vt ? [] : tt.withoutFeatures,
              searchQuery: tt.searchQuery,
              pageNumber: tt.pageNumber,
              pageSize: Lt,
              onlyFavourites: et,
              banned: (0, vt.s)(ct) ? (0, vt.c)(tt.banned) : void 0
            });
          return {
            kind: "listing",
            page: Ot
          }
        }(et).then((et => {
          qe.current === tt && gt(et)
        })).catch((et => {
          qe.current === tt && (console.error("Failed to get shader packs", et), gt(null), ee(!0))
        })).finally((() => {
          qe.current === tt && nt(!1)
        }))
      }), [De, ct, Pt, Ve]);
      const [Xe, Qe] = (0, Ot.useState)(null), le = null !== (Vt = null === (Dt = ("listing" === (null === Tt || void 0 === Tt ? void 0 : Tt.kind) ? Tt.page.results : (null !== (et = null === Tt || void 0 === Tt ? void 0 : Tt.packs) && void 0 !== et ? et : []).flatMap((tt => tt.live ? [tt.live] : [])))[0]) || void 0 === Dt ? void 0 : Dt.baselineVersion) && void 0 !== Vt ? Vt : null;
      (0, Ot.useEffect)((() => {
        null !== le && Qe(le)
      }), [le]);
      const Ee = "mine" === it.section,
        fe = (0, vt.s)(ct),
        we = tt => {
          "explore" !== it.section && (tt.stopPropagation(), tt.preventDefault(), je({
            section: "explore"
          }))
        };
      return (0, St.jsxs)("div", {
        className: "ShaderPackBrowse AnimFadeIn",
        children: [(0, St.jsx)(lt.d, {
          onClick: de,
          children: Kt(null === me ? "homePage:backToGames" : "shaderPackListing:backToSettings")
        }), (0, St.jsxs)("div", {
          className: "ShaderPackBrowseHeader",
          children: [(0, St.jsxs)("div", {
            className: "ShaderPackBrowseHeaderRow",
            children: [(0, St.jsx)("h1", {
              className: "VisuallyHidden",
              children: Kt("shaderPackListing:title")
            }), (0, St.jsxs)("div", {
              className: "ShaderPackBrowseTabs",
              children: [(0, St.jsx)("div", {
                className: mt()("ShaderPackBrowseSort", {
                  Active: "explore" === it.section
                }),
                onMouseDownCapture: we,
                onTouchEndCapture: we,
                children: (0, St.jsx)(Et.e, {
                  options: jt.x.map((tt => ({
                    value: tt,
                    label: Kt(vt.ib[tt])
                  }))),
                  value: it.sort,
                  onChange: tt => {
                    je({
                      section: "explore",
                      sort: tt.value
                    })
                  }
                })
              }), Object.keys(Ft).map((tt => (0, St.jsx)(lt.Q, {
                active: it.section === tt,
                onClick: () => {
                  je({
                    section: tt
                  })
                },
                children: Kt(Ft[tt])
              }, tt)))]
            }), !Ee && (0, St.jsx)("div", {
              className: "ShaderPackBrowseDivider"
            }), !Ee && (0, St.jsxs)("div", {
              className: "ShaderPackBrowseSearch",
              children: [(0, St.jsx)("div", {
                className: "ShaderPackBrowseSearchIcon",
                children: (0, St.jsx)(Ht.b, {
                  name: "magnifying-glass"
                })
              }), (0, St.jsx)(wt.d, {
                className: "ShaderPackBrowseSearchInput",
                placeholderText: Kt("shaderPackListing:searchPlaceholder"),
                maxLength: jt.I,
                defaultValue: Yt,
                domRef: pt,
                onValueChange: Bt,
                onEnter: He
              }), (0, St.jsx)(lt.f, {
                onClick: He,
                children: Kt("general:search")
              })]
            }), !Ee && (0, St.jsxs)(lt.Q, {
              className: mt()("ShaderPackBrowseFilterToggle", {
                Open: zt
              }),
              pressed: zt,
              onClick: () => {
                ot(!zt)
              },
              children: [Kt("shaderPackListing:filter"), " ", (0, St.jsx)(Ht.b, {
                name: zt ? "angle-up" : "angle-down"
              })]
            }), (0, St.jsx)("div", {
              className: "ShaderPackBrowseSpace"
            }), Ct.featureFlags.settings.canUseShaderPacks && (0, St.jsxs)(lt.m, {
              onClick: () => {
                ht(vt.fb)
              },
              children: [(0, St.jsx)(Ht.b, {
                name: "upload"
              }), " ", Kt("shaderPackListing:publish")]
            })]
          }), !Ee && zt && (0, St.jsxs)("div", {
            className: "ShaderPackBrowseFeatures",
            children: [vt.B.map((tt => {
              const et = (0, vt.g)(it, tt),
                Vt = Kt(vt.Q[tt]);
              return (0, St.jsx)(lt.Q, {
                className: mt()("ShaderPackBrowseFeature", {
                  Without: "without" === et
                }),
                active: "with" === et,
                pressed: null !== et,
                onClick: () => {
                  rt.current = !0, je((0, vt.nb)(it, tt))
                },
                children: (0, St.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureLabel",
                  children: [(0, St.jsxs)("span", {
                    className: "ShaderPackBrowseFeatureReserve",
                    children: [(0, St.jsx)(Ht.b, {
                      name: "check"
                    }), " ", Vt]
                  }), (0, St.jsxs)("span", {
                    children: [null !== et && (0, St.jsx)(Ht.b, {
                      name: "with" === et ? "check" : "xmark"
                    }), " ", Vt]
                  })]
                })
              }, tt)
            })), fe && (0, St.jsx)(lt.Q, {
              className: mt()("ShaderPackBrowseFeature", {
                Without: "without" === it.banned
              }),
              active: "with" === it.banned,
              pressed: null !== it.banned,
              onClick: () => {
                const tt = "without" === it.banned && !rt.current && (0, vt.r)(it);
                je({
                  banned: (0, vt.E)(it.banned),
                  ...tt && {
                    withFeatures: [],
                    withoutFeatures: []
                  }
                })
              },
              children: (0, St.jsxs)("span", {
                className: "ShaderPackBrowseFeatureLabel",
                children: [(0, St.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureReserve",
                  children: [(0, St.jsx)(Ht.b, {
                    name: "check"
                  }), " BANNED"]
                }), (0, St.jsxs)("span", {
                  children: [null !== it.banned && (0, St.jsx)(Ht.b, {
                    name: "with" === it.banned ? "check" : "xmark"
                  }), " BANNED"]
                })]
              })
            })]
          })]
        }), (!Ee || null !== Xe) && (0, St.jsx)("div", {
          className: "ShaderPackBrowseScenes",
          children: (0, St.jsx)(Zt.d, {
            selected: kt,
            onSelect: Gt,
            imageUrl: tt => null === Xe ? null : (0, jt.t)(Jt.clientSideServerUrls.s3Url, Xe, tt, "thumb")
          })
        }), (0, St.jsx)(It, {
          results: Tt,
          loading: st,
          failed: te,
          onRetry: () => {
            Oe((tt => tt + 1))
          },
          view: it,
          previewView: kt
        }), "listing" === (null === Tt || void 0 === Tt ? void 0 : Tt.kind) && (0, St.jsx)(ft.d, {
          className: "ShaderPackBrowsePagination",
          page: Tt.page.pageNumber,
          totalPages: Tt.page.totalPages,
          onSetPage: tt => {
            At((et => {
              (0, Qt.n)(et, tt)
            }))
          },
          getPageHref: function(tt) {
            const et = new URLSearchParams(Ut);
            (0, Qt.n)(et, tt);
            const Vt = et.toString();
            return Vt ? `${Wt.pathname}?${Vt}` : Wt.pathname
          }
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);