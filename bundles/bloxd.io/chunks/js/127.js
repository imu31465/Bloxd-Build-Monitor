export const id = 127;
export const ids = [127];
export const modules = {
  6498: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      default: () => Hm
    });
    var hm = fm(59),
      Am = fm(1537),
      am = fm(1080),
      xm = fm.n(am),
      wm = fm(339),
      Dm = fm(6509),
      im = fm(1089),
      Rm = fm(1519),
      pm = fm(4501),
      Em = fm(1454),
      om = fm(3127),
      Om = fm(4507),
      Ym = fm(1676),
      qm = fm(4495),
      jm = fm(1160),
      Vm = fm(23),
      Im = fm(1494),
      Km = fm(1214),
      Qm = fm(105),
      nm = fm(1208),
      Jm = fm(1345),
      cm = fm(1235),
      zm = fm(6507),
      Zm = fm(6518),
      km = fm(1135);

    function bm(mm) {
      let {
        pack: Tm,
        view: fm,
        favourite: hm,
        notice: Am
      } = mm;
      const {
        width: am,
        height: wm
      } = Dm.t.thumb, {
        live: pm
      } = Tm;
      return (0, km.jsx)("div", {
        className: "ShaderPackCard",
        children: (0, km.jsxs)("div", {
          className: "ShaderPackCardTile",
          children: [(0, km.jsxs)(Rm.LinkPreserveSearch, {
            to: (0, zm.V)(Tm.packId),
            className: "ShaderPackCardLink",
            children: [pm && (0, km.jsx)("img", {
              className: "ShaderPackCardImage",
              src: (0, Dm.v)(Km.clientSideServerUrls.s3Url, pm, fm, "thumb"),
              width: am,
              height: wm,
              loading: "lazy",
              alt: "",
              draggable: !1
            }), pm && (0, km.jsx)(Zm.c, {
              item: pm
            }), !pm && (0, km.jsx)("div", {
              className: "ShaderPackCardImage ShaderPackCardImagePending",
              children: (0, km.jsx)(im.c, {
                name: "hourglass"
              })
            }), (0, km.jsxs)("div", {
              className: "ShaderPackCardText",
              children: [Am && (0, km.jsx)("div", {
                className: xm()("ShaderPackCardNotice", {
                  Warning: "warning" === Am.tone
                }),
                children: Am.text
              }), (0, km.jsx)("div", {
                className: "ShaderPackCardName SmallTextBold",
                children: Tm.name
              })]
            })]
          }), pm && (0, km.jsxs)("div", {
            className: "ShaderPackCardStats",
            children: [(0, km.jsxs)("div", {
              className: "ShaderPackCardUses SmallTextBold",
              children: [(0, km.jsx)(im.c, {
                name: "download"
              }), (0, cm.J)(pm.downloads)]
            }), hm && (0, km.jsx)(Em.s, {
              onClick: hm.onToggle,
              isLiked: !0 === hm.isFavourite,
              isLoading: null === hm.isFavourite
            })]
          })]
        })
      })
    }
    var Sm = fm(6521);

    function em(mm) {
      let {
        results: Tm,
        loading: fm,
        failed: hm,
        onRetry: Am,
        view: am,
        previewView: wm
      } = mm;
      const {
        t: Dm
      } = (0, nm.A)(), im = (0, Sm.k)(), Rm = Date.now(), pm = null === Tm ? 0 : "owned" === Tm.kind ? Tm.packs.length : Tm.page.results.length;
      return (0, km.jsxs)("div", {
        className: xm()("ShaderPackBrowseResults", {
          Loading: fm && null !== Tm
        }),
        children: [fm && null === Tm && (0, km.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: (0, km.jsx)(Jm.c, {})
        }), hm && (0, km.jsxs)("div", {
          className: "ShaderPackBrowseMessage",
          children: [Dm("shaderPackListing:loadFailed"), (0, km.jsx)(Em.e, {
            onClick: Am,
            children: Dm("general:tryAgain")
          })]
        }), "listing" === (null === Tm || void 0 === Tm ? void 0 : Tm.kind) && pm > 0 && (0, km.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: Tm.page.results.map((mm => (0, km.jsx)(bm, {
            pack: {
              packId: mm.packId,
              name: mm.name,
              live: mm
            },
            view: wm,
            favourite: {
              isFavourite: im.isFavourite(mm.packId),
              onToggle: () => {
                im.toggle(mm.packId)
              }
            }
          }, mm.packId)))
        }), "owned" === (null === Tm || void 0 === Tm ? void 0 : Tm.kind) && pm > 0 && (0, km.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: Tm.packs.map((mm => {
            var Tm;
            return (0, km.jsx)(bm, {
              pack: mm,
              view: wm,
              notice: mm.owner ? (0, zm.U)(mm.owner, !(null === (Tm = mm.live) || void 0 === Tm || !Tm.renderId), Rm, Dm)[0] : void 0
            }, mm.packId)
          }))
        }), null !== Tm && 0 === pm && (0, km.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: Dm(Nm(am))
        })]
      })
    }

    function Nm(mm) {
      return "mine" === mm.section ? "shaderPackListing:noOwnPacks" : (0, zm.w)(mm) ? "general:noResults" : "favourites" === mm.section ? "shaderPackListing:noFavourites" : "general:noResults"
    }
    var Gm = fm(6538);
    const Xm = 24,
      Pm = {
        favourites: "general:favourites",
        mine: "shaderPackListing:mine"
      };

    function Hm() {
      var mm, Tm, fm, am;
      const {
        t: Jm
      } = (0, nm.A)(), cm = (0, Rm.useNavigatePreserveSearch)(), Zm = (0, Am.w)(), {
        userContext: bm,
        isUserContextUpdating: Nm
      } = (0, jm.e)(), [Hm, ym] = (0, Sm.h)(), [Cm, rm] = (0, Sm.f)(), sm = (0, hm.useRef)(!1), [lm, Mm] = (0, pm.m)(), um = (0, zm.F)(lm), [Bm, Lm] = (0, hm.useState)(null !== (mm = um.searchQuery) && void 0 !== mm ? mm : ""), tm = (0, hm.useRef)(null), {
        searchQuery: Um
      } = um;
      (0, hm.useEffect)((() => {
        Lm(null !== Um && void 0 !== Um ? Um : ""), tm.current && (tm.current.value = null !== Um && void 0 !== Um ? Um : "")
      }), [Um]);
      const [dm, gm] = (0, hm.useState)(null), [Wm, Fm] = (0, hm.useState)(!1), [mT, TT] = (0, hm.useState)(!1), [fT, hT] = (0, hm.useState)(0), AT = (0, hm.useRef)(0), aT = JSON.stringify(um), xT = (0, zm.o)();

      function wT() {
        null !== xT ? (cm(xT), Vm.c.set({
          openEverythingMenuName: wm.n.SETTINGS,
          openSettingsCategory: "KO"
        })) : cm("/")
      }

      function DT(mm) {
        Mm((Tm => {
          (0, zm.fb)(Tm, {
            ...um,
            pageNumber: 1,
            ...mm
          })
        }))
      }

      function iT() {
        const mm = Bm.trim() || null;
        DT({
          searchQuery: mm,
          ...null !== mm && !sm.current && (0, zm.q)(um) && {
            withFeatures: [],
            withoutFeatures: []
          }
        })
      }(0, qm.c)(wT), (0, Sm.e)(), (0, hm.useEffect)((() => {
        if (Nm) return;
        const mm = ++AT.current,
          Tm = JSON.parse(aT);
        Fm(!0), TT(!1), async function(mm) {
          if ("mine" === mm.section) return {
            kind: "owned",
            packs: await Im.d.getOwnedShaderPacks(bm)
          };
          const Tm = "favourites" === mm.section,
            fm = Tm && (0, zm.q)(mm),
            hm = await Im.d.getShaderPacks(bm, {
              sort: Tm ? zm.g : mm.sort,
              features: fm ? [] : mm.withFeatures,
              withoutFeatures: fm ? [] : mm.withoutFeatures,
              searchQuery: mm.searchQuery,
              pageNumber: mm.pageNumber,
              pageSize: Xm,
              onlyFavourites: Tm,
              banned: (0, zm.t)(bm) ? (0, zm.d)(mm.banned) : void 0
            });
          return {
            kind: "listing",
            page: hm
          }
        }(Tm).then((Tm => {
          AT.current === mm && gm(Tm)
        })).catch((Tm => {
          AT.current === mm && (console.error("Failed to get shader packs", Tm), gm(null), TT(!0))
        })).finally((() => {
          AT.current === mm && Fm(!1)
        }))
      }), [aT, bm, Nm, fT]);
      const [RT, pT] = (0, hm.useState)(null), ET = null !== (fm = null === (am = ("listing" === (null === dm || void 0 === dm ? void 0 : dm.kind) ? dm.page.results : (null !== (Tm = null === dm || void 0 === dm ? void 0 : dm.packs) && void 0 !== Tm ? Tm : []).flatMap((mm => mm.live ? [mm.live] : [])))[0]) || void 0 === am ? void 0 : am.baselineVersion) && void 0 !== fm ? fm : null;
      (0, hm.useEffect)((() => {
        null !== ET && pT(ET)
      }), [ET]);
      const oT = "mine" === um.section,
        OT = (0, zm.t)(bm),
        YT = mm => {
          "explore" !== um.section && (mm.stopPropagation(), mm.preventDefault(), DT({
            section: "explore"
          }))
        };
      return (0, km.jsxs)("div", {
        className: "ShaderPackBrowse AnimFadeIn",
        children: [(0, km.jsx)(Em.d, {
          onClick: wT,
          children: Jm(null === xT ? "homePage:backToGames" : "shaderPackListing:backToSettings")
        }), (0, km.jsxs)("div", {
          className: "ShaderPackBrowseHeader",
          children: [(0, km.jsxs)("div", {
            className: "ShaderPackBrowseHeaderRow",
            children: [(0, km.jsx)("h1", {
              className: "VisuallyHidden",
              children: Jm("shaderPackListing:title")
            }), (0, km.jsxs)("div", {
              className: "ShaderPackBrowseTabs",
              children: [(0, km.jsx)("div", {
                className: xm()("ShaderPackBrowseSort", {
                  Active: "explore" === um.section
                }),
                onMouseDownCapture: YT,
                onTouchEndCapture: YT,
                children: (0, km.jsx)(om.d, {
                  options: Dm.z.map((mm => ({
                    value: mm,
                    label: Jm(zm.Z[mm])
                  }))),
                  value: um.sort,
                  onChange: mm => {
                    DT({
                      section: "explore",
                      sort: mm.value
                    })
                  }
                })
              }), Object.keys(Pm).map((mm => (0, km.jsx)(Em.V, {
                active: um.section === mm,
                onClick: () => {
                  DT({
                    section: mm
                  })
                },
                children: Jm(Pm[mm])
              }, mm)))]
            }), !oT && (0, km.jsx)("div", {
              className: "ShaderPackBrowseDivider"
            }), !oT && (0, km.jsxs)("div", {
              className: "ShaderPackBrowseSearch",
              children: [(0, km.jsx)("div", {
                className: "ShaderPackBrowseSearchIcon",
                children: (0, km.jsx)(im.c, {
                  name: "magnifying-glass"
                })
              }), (0, km.jsx)(Ym.e, {
                className: "ShaderPackBrowseSearchInput",
                placeholderText: Jm("shaderPackListing:searchPlaceholder"),
                maxLength: Dm.P,
                defaultValue: Bm,
                domRef: tm,
                onValueChange: Lm,
                onEnter: iT
              }), (0, km.jsx)(Em.e, {
                onClick: iT,
                children: Jm("general:search")
              })]
            }), !oT && (0, km.jsxs)(Em.V, {
              className: xm()("ShaderPackBrowseFilterToggle", {
                Open: Cm
              }),
              pressed: Cm,
              onClick: () => {
                rm(!Cm)
              },
              children: [Jm("shaderPackListing:filter"), " ", (0, km.jsx)(im.c, {
                name: Cm ? "angle-up" : "angle-down"
              })]
            }), (0, km.jsx)("div", {
              className: "ShaderPackBrowseSpace"
            }), Qm.featureFlags.settings.canUseShaderPacks && (0, km.jsxs)(Em.m, {
              onClick: () => {
                cm(zm.W)
              },
              children: [(0, km.jsx)(im.c, {
                name: "upload"
              }), " ", Jm("shaderPackListing:publish")]
            })]
          }), !oT && Cm && (0, km.jsxs)("div", {
            className: "ShaderPackBrowseFeatures",
            children: [zm.y.map((mm => {
              const Tm = (0, zm.j)(um, mm),
                fm = Jm(zm.L[mm]);
              return (0, km.jsx)(Em.V, {
                className: xm()("ShaderPackBrowseFeature", {
                  Without: "without" === Tm
                }),
                active: "with" === Tm,
                pressed: null !== Tm,
                onClick: () => {
                  sm.current = !0, DT((0, zm.eb)(um, mm))
                },
                children: (0, km.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureLabel",
                  children: [(0, km.jsxs)("span", {
                    className: "ShaderPackBrowseFeatureReserve",
                    children: [(0, km.jsx)(im.c, {
                      name: "check"
                    }), " ", fm]
                  }), (0, km.jsxs)("span", {
                    children: [null !== Tm && (0, km.jsx)(im.c, {
                      name: "with" === Tm ? "check" : "xmark"
                    }), " ", fm]
                  })]
                })
              }, mm)
            })), OT && (0, km.jsx)(Em.V, {
              className: xm()("ShaderPackBrowseFeature", {
                Without: "without" === um.banned
              }),
              active: "with" === um.banned,
              pressed: null !== um.banned,
              onClick: () => {
                const mm = "without" === um.banned && !sm.current && (0, zm.q)(um);
                DT({
                  banned: (0, zm.C)(um.banned),
                  ...mm && {
                    withFeatures: [],
                    withoutFeatures: []
                  }
                })
              },
              children: (0, km.jsxs)("span", {
                className: "ShaderPackBrowseFeatureLabel",
                children: [(0, km.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureReserve",
                  children: [(0, km.jsx)(im.c, {
                    name: "check"
                  }), " BANNED"]
                }), (0, km.jsxs)("span", {
                  children: [null !== um.banned && (0, km.jsx)(im.c, {
                    name: "with" === um.banned ? "check" : "xmark"
                  }), " BANNED"]
                })]
              })
            })]
          })]
        }), (!oT || null !== RT) && (0, km.jsx)("div", {
          className: "ShaderPackBrowseScenes",
          children: (0, km.jsx)(Gm.e, {
            selected: Hm,
            onSelect: ym,
            imageUrl: mm => null === RT ? null : (0, Dm.o)(Km.clientSideServerUrls.s3Url, RT, mm, "thumb")
          })
        }), (0, km.jsx)(em, {
          results: dm,
          loading: Wm,
          failed: mT,
          onRetry: () => {
            hT((mm => mm + 1))
          },
          view: um,
          previewView: Hm
        }), "listing" === (null === dm || void 0 === dm ? void 0 : dm.kind) && (0, km.jsx)(Om.e, {
          className: "ShaderPackBrowsePagination",
          page: dm.page.pageNumber,
          totalPages: dm.page.totalPages,
          onSetPage: mm => {
            Mm((Tm => {
              (0, pm.i)(Tm, mm)
            }))
          },
          getPageHref: function(mm) {
            const Tm = new URLSearchParams(lm);
            (0, pm.i)(Tm, mm);
            const fm = Tm.toString();
            return fm ? `${Zm.pathname}?${fm}` : Zm.pathname
          }
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);