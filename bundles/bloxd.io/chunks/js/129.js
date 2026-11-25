export const id = 129;
export const ids = [129];
export const modules = {
  6753: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      default: () => Qu
    });
    var su = ju(58),
      Uu = ju(1580),
      Zu = ju(1105),
      Xu = ju.n(Zu),
      lu = ju(337),
      qu = ju(6764),
      fu = ju(1116),
      Cu = ju(1570),
      bu = ju(4740),
      cu = ju(1506),
      Nu = ju(3309),
      Ou = ju(4749),
      Yu = ju(1723),
      hu = ju(4737),
      Du = ju(1178),
      gu = ju(22),
      Mu = ju(1559),
      eu = ju(1255),
      Gu = ju(91),
      pu = ju(1244),
      wu = ju(1393),
      Ju = ju(1278),
      du = ju(6761),
      au = ju(6768),
      Pu = ju(1154);

    function ou(uu) {
      let {
        pack: Eu,
        view: ju,
        favourite: su,
        notice: Uu
      } = uu;
      const {
        width: Zu,
        height: lu
      } = qu.z.thumb, {
        live: bu
      } = Eu;
      return (0, Pu.jsx)("div", {
        className: "ShaderPackCard",
        children: (0, Pu.jsxs)("div", {
          className: "ShaderPackCardTile",
          children: [(0, Pu.jsxs)(Cu.LinkPreserveSearch, {
            to: (0, du.U)(Eu.packId),
            className: "ShaderPackCardLink",
            children: [bu && (0, Pu.jsx)("img", {
              className: "ShaderPackCardImage",
              src: (0, qu.C)(eu.clientSideServerUrls.s3Url, bu, ju, "thumb"),
              width: Zu,
              height: lu,
              loading: "lazy",
              alt: "",
              draggable: !1
            }), bu && (0, Pu.jsx)(au.c, {
              item: bu
            }), !bu && (0, Pu.jsx)("div", {
              className: "ShaderPackCardImage ShaderPackCardImagePending",
              children: (0, Pu.jsx)(fu.e, {
                name: "hourglass"
              })
            }), (0, Pu.jsxs)("div", {
              className: "ShaderPackCardText",
              children: [Uu && (0, Pu.jsx)("div", {
                className: Xu()("ShaderPackCardNotice", {
                  Warning: "warning" === Uu.tone
                }),
                children: Uu.text
              }), (0, Pu.jsx)("div", {
                className: "ShaderPackCardName SmallTextBold",
                children: Eu.name
              })]
            })]
          }), bu && (0, Pu.jsxs)("div", {
            className: "ShaderPackCardStats",
            children: [(0, Pu.jsxs)("div", {
              className: "ShaderPackCardUses SmallTextBold",
              children: [(0, Pu.jsx)(fu.e, {
                name: "download"
              }), (0, Ju.S)(bu.downloads)]
            }), su && (0, Pu.jsx)(cu.A, {
              onClick: su.onToggle,
              isLiked: !0 === su.isFavourite,
              isLoading: null === su.isFavourite
            })]
          })]
        })
      })
    }
    var ku = ju(6771);

    function mu(uu) {
      let {
        results: Eu,
        loading: ju,
        failed: su,
        onRetry: Uu,
        view: Zu,
        previewView: lu
      } = uu;
      const {
        t: qu
      } = (0, pu.A)(), fu = (0, ku.g)(), Cu = Date.now(), bu = null === Eu ? 0 : "owned" === Eu.kind ? Eu.packs.length : Eu.page.results.length;
      return (0, Pu.jsxs)("div", {
        className: Xu()("ShaderPackBrowseResults", {
          Loading: ju && null !== Eu
        }),
        children: [ju && null === Eu && (0, Pu.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: (0, Pu.jsx)(wu.b, {})
        }), su && (0, Pu.jsxs)("div", {
          className: "ShaderPackBrowseMessage",
          children: [qu("shaderPackListing:loadFailed"), (0, Pu.jsx)(cu.f, {
            onClick: Uu,
            children: qu("general:tryAgain")
          })]
        }), "listing" === (null === Eu || void 0 === Eu ? void 0 : Eu.kind) && bu > 0 && (0, Pu.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: Eu.page.results.map((uu => (0, Pu.jsx)(ou, {
            pack: {
              packId: uu.packId,
              name: uu.name,
              live: uu
            },
            view: lu,
            favourite: {
              isFavourite: fu.isFavourite(uu.packId),
              onToggle: () => {
                fu.toggle(uu.packId)
              }
            }
          }, uu.packId)))
        }), "owned" === (null === Eu || void 0 === Eu ? void 0 : Eu.kind) && bu > 0 && (0, Pu.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: Eu.packs.map((uu => {
            var Eu;
            return (0, Pu.jsx)(ou, {
              pack: uu,
              view: lu,
              notice: uu.owner ? (0, du.T)(uu.owner, !(null === (Eu = uu.live) || void 0 === Eu || !Eu.renderId), Cu, qu)[0] : void 0
            }, uu.packId)
          }))
        }), null !== Eu && 0 === bu && (0, Pu.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: qu(vu(Zu))
        })]
      })
    }

    function vu(uu) {
      return "mine" === uu.section ? "shaderPackListing:noOwnPacks" : (0, du.w)(uu) ? "general:noResults" : "favourites" === uu.section ? "shaderPackListing:noFavourites" : "general:noResults"
    }
    var Ku = ju(6779);
    const Vu = 24,
      ru = {
        favourites: "general:favourites",
        mine: "shaderPackListing:mine"
      };

    function Qu() {
      var uu, Eu, ju, Zu;
      const {
        t: wu
      } = (0, pu.A)(), Ju = (0, Cu.useNavigatePreserveSearch)(), au = (0, Uu.r)(), {
        userContext: ou,
        isUserContextUpdating: vu
      } = (0, Du.c)(), [Qu, iu] = (0, ku.f)(), [Wu, Su] = (0, ku.c)(), Iu = (0, su.useRef)(!1), [Fu, Bu] = (0, bu.k)(), Lu = (0, du.B)(Fu), [tu, xu] = (0, su.useState)(null !== (uu = Lu.searchQuery) && void 0 !== uu ? uu : ""), Tu = (0, su.useRef)(null), {
        searchQuery: Hu
      } = Lu;
      (0, su.useEffect)((() => {
        xu(null !== Hu && void 0 !== Hu ? Hu : ""), Tu.current && (Tu.current.value = null !== Hu && void 0 !== Hu ? Hu : "")
      }), [Hu]);
      const [Au, nu] = (0, su.useState)(null), [yu, zu] = (0, su.useState)(!1), [Ru, uE] = (0, su.useState)(!1), [EE, jE] = (0, su.useState)(0), sE = (0, su.useRef)(0), UE = JSON.stringify(Lu), ZE = (0, du.o)();

      function XE() {
        null !== ZE ? (Ju(ZE), gu.d.set({
          openEverythingMenuName: lu.o.SETTINGS,
          openSettingsCategory: "AN"
        })) : Ju("/")
      }

      function lE(uu) {
        Bu((Eu => {
          (0, du.gb)(Eu, {
            ...Lu,
            pageNumber: 1,
            ...uu
          })
        }))
      }

      function qE() {
        const uu = tu.trim() || null;
        lE({
          searchQuery: uu,
          ...null !== uu && !Iu.current && (0, du.r)(Lu) && {
            withFeatures: [],
            withoutFeatures: []
          }
        })
      }(0, hu.b)(XE), (0, ku.b)(), (0, su.useEffect)((() => {
        if (vu) return;
        const uu = ++sE.current,
          Eu = JSON.parse(UE);
        zu(!0), uE(!1), async function(uu) {
          if ("mine" === uu.section) return {
            kind: "owned",
            packs: await Mu.b.getOwnedShaderPacks(ou)
          };
          const Eu = "favourites" === uu.section,
            ju = Eu && (0, du.r)(uu),
            su = await Mu.b.getShaderPacks(ou, {
              sort: Eu ? du.h : uu.sort,
              features: ju ? [] : uu.withFeatures,
              withoutFeatures: ju ? [] : uu.withoutFeatures,
              searchQuery: uu.searchQuery,
              pageNumber: uu.pageNumber,
              pageSize: Vu,
              onlyFavourites: Eu,
              banned: (0, du.s)(ou) ? (0, du.d)(uu.banned) : void 0
            });
          return {
            kind: "listing",
            page: su
          }
        }(Eu).then((Eu => {
          sE.current === uu && nu(Eu)
        })).catch((Eu => {
          sE.current === uu && (console.error("Failed to get shader packs", Eu), nu(null), uE(!0))
        })).finally((() => {
          sE.current === uu && zu(!1)
        }))
      }), [UE, ou, vu, EE]);
      const [fE, CE] = (0, su.useState)(null), bE = null !== (ju = null === (Zu = ("listing" === (null === Au || void 0 === Au ? void 0 : Au.kind) ? Au.page.results : (null !== (Eu = null === Au || void 0 === Au ? void 0 : Au.packs) && void 0 !== Eu ? Eu : []).flatMap((uu => uu.live ? [uu.live] : [])))[0]) || void 0 === Zu ? void 0 : Zu.baselineVersion) && void 0 !== ju ? ju : null;
      (0, su.useEffect)((() => {
        null !== bE && CE(bE)
      }), [bE]);
      const cE = "mine" === Lu.section,
        NE = (0, du.s)(ou),
        OE = uu => {
          "explore" !== Lu.section && (uu.stopPropagation(), uu.preventDefault(), lE({
            section: "explore"
          }))
        };
      return (0, Pu.jsxs)("div", {
        className: "ShaderPackBrowse AnimFadeIn",
        children: [(0, Pu.jsx)(cu.d, {
          onClick: XE,
          children: wu(null === ZE ? "homePage:backToGames" : "shaderPackListing:backToSettings")
        }), (0, Pu.jsxs)("div", {
          className: "ShaderPackBrowseHeader",
          children: [(0, Pu.jsxs)("div", {
            className: "ShaderPackBrowseHeaderRow",
            children: [(0, Pu.jsx)("h1", {
              className: "VisuallyHidden",
              children: wu("shaderPackListing:title")
            }), (0, Pu.jsxs)("div", {
              className: "ShaderPackBrowseTabs",
              children: [(0, Pu.jsx)("div", {
                className: Xu()("ShaderPackBrowseSort", {
                  Active: "explore" === Lu.section
                }),
                onMouseDownCapture: OE,
                onTouchEndCapture: OE,
                children: (0, Pu.jsx)(Nu.c, {
                  options: qu.E.map((uu => ({
                    value: uu,
                    label: wu(du.Y[uu])
                  }))),
                  value: Lu.sort,
                  onChange: uu => {
                    lE({
                      section: "explore",
                      sort: uu.value
                    })
                  }
                })
              }), Object.keys(ru).map((uu => (0, Pu.jsx)(cu.$, {
                active: Lu.section === uu,
                onClick: () => {
                  lE({
                    section: uu
                  })
                },
                children: wu(ru[uu])
              }, uu)))]
            }), !cE && (0, Pu.jsx)("div", {
              className: "ShaderPackBrowseDivider"
            }), !cE && (0, Pu.jsxs)("div", {
              className: "ShaderPackBrowseSearch",
              children: [(0, Pu.jsx)("div", {
                className: "ShaderPackBrowseSearchIcon",
                children: (0, Pu.jsx)(fu.e, {
                  name: "magnifying-glass"
                })
              }), (0, Pu.jsx)(Yu.d, {
                className: "ShaderPackBrowseSearchInput",
                placeholderText: wu("shaderPackListing:searchPlaceholder"),
                maxLength: qu.R,
                defaultValue: tu,
                domRef: Tu,
                onValueChange: xu,
                onEnter: qE
              }), (0, Pu.jsx)(cu.f, {
                onClick: qE,
                children: wu("general:search")
              })]
            }), !cE && (0, Pu.jsxs)(cu.$, {
              className: Xu()("ShaderPackBrowseFilterToggle", {
                Open: Wu
              }),
              pressed: Wu,
              onClick: () => {
                Su(!Wu)
              },
              children: [wu("shaderPackListing:filter"), " ", (0, Pu.jsx)(fu.e, {
                name: Wu ? "angle-up" : "angle-down"
              })]
            }), (0, Pu.jsx)("div", {
              className: "ShaderPackBrowseSpace"
            }), Gu.featureFlags.settings.canUseShaderPacks && (0, Pu.jsxs)(cu.p, {
              onClick: () => {
                Ju(du.V)
              },
              children: [(0, Pu.jsx)(fu.e, {
                name: "upload"
              }), " ", wu("shaderPackListing:publish")]
            })]
          }), !cE && Wu && (0, Pu.jsxs)("div", {
            className: "ShaderPackBrowseFeatures",
            children: [du.y.map((uu => {
              const Eu = (0, du.k)(Lu, uu),
                ju = wu(du.I[uu]);
              return (0, Pu.jsx)(cu.$, {
                className: Xu()("ShaderPackBrowseFeature", {
                  Without: "without" === Eu
                }),
                active: "with" === Eu,
                pressed: null !== Eu,
                onClick: () => {
                  Iu.current = !0, lE((0, du.eb)(Lu, uu))
                },
                children: (0, Pu.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureLabel",
                  children: [(0, Pu.jsxs)("span", {
                    className: "ShaderPackBrowseFeatureReserve",
                    children: [(0, Pu.jsx)(fu.e, {
                      name: "check"
                    }), " ", ju]
                  }), (0, Pu.jsxs)("span", {
                    children: [null !== Eu && (0, Pu.jsx)(fu.e, {
                      name: "with" === Eu ? "check" : "xmark"
                    }), " ", ju]
                  })]
                })
              }, uu)
            })), NE && (0, Pu.jsx)(cu.$, {
              className: Xu()("ShaderPackBrowseFeature", {
                Without: "without" === Lu.banned
              }),
              active: "with" === Lu.banned,
              pressed: null !== Lu.banned,
              onClick: () => {
                const uu = "without" === Lu.banned && !Iu.current && (0, du.r)(Lu);
                lE({
                  banned: (0, du.A)(Lu.banned),
                  ...uu && {
                    withFeatures: [],
                    withoutFeatures: []
                  }
                })
              },
              children: (0, Pu.jsxs)("span", {
                className: "ShaderPackBrowseFeatureLabel",
                children: [(0, Pu.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureReserve",
                  children: [(0, Pu.jsx)(fu.e, {
                    name: "check"
                  }), " BANNED"]
                }), (0, Pu.jsxs)("span", {
                  children: [null !== Lu.banned && (0, Pu.jsx)(fu.e, {
                    name: "with" === Lu.banned ? "check" : "xmark"
                  }), " BANNED"]
                })]
              })
            })]
          })]
        }), (!cE || null !== fE) && (0, Pu.jsx)("div", {
          className: "ShaderPackBrowseScenes",
          children: (0, Pu.jsx)(Ku.b, {
            selected: Qu,
            onSelect: iu,
            imageUrl: uu => null === fE ? null : (0, qu.t)(eu.clientSideServerUrls.s3Url, fE, uu, "thumb")
          })
        }), (0, Pu.jsx)(mu, {
          results: Au,
          loading: yu,
          failed: Ru,
          onRetry: () => {
            jE((uu => uu + 1))
          },
          view: Lu,
          previewView: Qu
        }), "listing" === (null === Au || void 0 === Au ? void 0 : Au.kind) && (0, Pu.jsx)(Ou.d, {
          className: "ShaderPackBrowsePagination",
          page: Au.page.pageNumber,
          totalPages: Au.page.totalPages,
          onSetPage: uu => {
            Bu((Eu => {
              (0, bu.i)(Eu, uu)
            }))
          },
          getPageHref: function(uu) {
            const Eu = new URLSearchParams(Fu);
            (0, bu.i)(Eu, uu);
            const ju = Eu.toString();
            return ju ? `${au.pathname}?${ju}` : au.pathname
          }
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);