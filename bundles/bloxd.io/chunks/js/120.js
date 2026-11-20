export const id = 120;
export const ids = [120];
export const modules = {
  6311: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      default: () => gu
    });
    var Eu = yu(64),
      Ku = yu(1483),
      Qu = yu(1035),
      mu = yu.n(Qu),
      Ju = yu(330),
      Nu = yu(6322),
      Xu = yu(1043),
      Vu = yu(1467),
      ru = yu(4331),
      Bu = yu(1408),
      xu = yu(2916),
      Su = yu(4338),
      pu = yu(1617),
      Tu = yu(4322),
      Wu = yu(1107),
      ju = yu(27),
      Hu = yu(1447),
      du = yu(1176),
      bu = yu(106),
      Cu = yu(1170),
      ku = yu(1300),
      eu = yu(1199),
      Au = yu(6314),
      Du = yu(6325),
      Mu = yu(1079);

    function Iu(uu) {
      let {
        pack: Ru,
        view: yu,
        favourite: Eu,
        notice: Ku
      } = uu;
      const {
        width: Qu,
        height: Ju
      } = Nu.o.thumb, {
        live: ru
      } = Ru;
      return (0, Mu.jsx)("div", {
        className: "ShaderPackCard",
        children: (0, Mu.jsxs)("div", {
          className: "ShaderPackCardTile",
          children: [(0, Mu.jsxs)(Vu.LinkPreserveSearch, {
            to: (0, Au.X)(Ru.packId),
            className: "ShaderPackCardLink",
            children: [ru && (0, Mu.jsx)("img", {
              className: "ShaderPackCardImage",
              src: (0, Nu.q)(du.clientSideServerUrls.s3Url, ru, yu, "thumb"),
              width: Qu,
              height: Ju,
              loading: "lazy",
              alt: "",
              draggable: !1
            }), ru && (0, Mu.jsx)(Du.d, {
              item: ru
            }), !ru && (0, Mu.jsx)("div", {
              className: "ShaderPackCardImage ShaderPackCardImagePending",
              children: (0, Mu.jsx)(Xu.c, {
                name: "hourglass"
              })
            }), (0, Mu.jsxs)("div", {
              className: "ShaderPackCardText",
              children: [Ku && (0, Mu.jsx)("div", {
                className: mu()("ShaderPackCardNotice", {
                  Warning: "warning" === Ku.tone
                }),
                children: Ku.text
              }), (0, Mu.jsx)("div", {
                className: "ShaderPackCardName SmallTextBold",
                children: Ru.name
              })]
            })]
          }), ru && (0, Mu.jsxs)("div", {
            className: "ShaderPackCardStats",
            children: [(0, Mu.jsxs)("div", {
              className: "ShaderPackCardUses SmallTextBold",
              children: [(0, Mu.jsx)(Xu.c, {
                name: "download"
              }), (0, eu.Q)(ru.downloads)]
            }), Eu && (0, Mu.jsx)(Bu.q, {
              onClick: Eu.onToggle,
              isLiked: !0 === Eu.isFavourite,
              isLoading: null === Eu.isFavourite
            })]
          })]
        })
      })
    }
    var Gu = yu(6333);

    function Uu(uu) {
      let {
        results: Ru,
        loading: yu,
        failed: Eu,
        onRetry: Ku,
        view: Qu,
        previewView: Ju
      } = uu;
      const {
        t: Nu
      } = (0, Cu.E)(), Xu = (0, Gu.m)(), Vu = Date.now(), ru = null === Ru ? 0 : "owned" === Ru.kind ? Ru.packs.length : Ru.page.results.length;
      return (0, Mu.jsxs)("div", {
        className: mu()("ShaderPackBrowseResults", {
          Loading: yu && null !== Ru
        }),
        children: [yu && null === Ru && (0, Mu.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: (0, Mu.jsx)(ku.b, {})
        }), Eu && (0, Mu.jsxs)("div", {
          className: "ShaderPackBrowseMessage",
          children: [Nu("shaderPackListing:loadFailed"), (0, Mu.jsx)(Bu.e, {
            onClick: Ku,
            children: Nu("general:tryAgain")
          })]
        }), "listing" === (null === Ru || void 0 === Ru ? void 0 : Ru.kind) && ru > 0 && (0, Mu.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: Ru.page.results.map((uu => (0, Mu.jsx)(Iu, {
            pack: {
              packId: uu.packId,
              name: uu.name,
              live: uu
            },
            view: Ju,
            favourite: {
              isFavourite: Xu.isFavourite(uu.packId),
              onToggle: () => {
                Xu.toggle(uu.packId)
              }
            }
          }, uu.packId)))
        }), "owned" === (null === Ru || void 0 === Ru ? void 0 : Ru.kind) && ru > 0 && (0, Mu.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: Ru.packs.map((uu => {
            var Ru;
            return (0, Mu.jsx)(Iu, {
              pack: uu,
              view: Ju,
              notice: uu.owner ? (0, Au.W)(uu.owner, !(null === (Ru = uu.live) || void 0 === Ru || !Ru.renderId), Vu, Nu)[0] : void 0
            }, uu.packId)
          }))
        }), null !== Ru && 0 === ru && (0, Mu.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: Nu(nu(Qu))
        })]
      })
    }

    function nu(uu) {
      return "mine" === uu.section ? "shaderPackListing:noOwnPacks" : (0, Au.t)(uu) ? "general:noResults" : "favourites" === uu.section ? "shaderPackListing:noFavourites" : "general:noResults"
    }
    var su = yu(6344);
    const tu = 24,
      lu = {
        favourites: "general:favourites",
        mine: "shaderPackListing:mine"
      };

    function gu() {
      var uu, Ru, yu, Qu;
      const {
        t: ku
      } = (0, Cu.E)(), eu = (0, Vu.useNavigatePreserveSearch)(), Du = (0, Ku.s)(), {
        userContext: Iu,
        isUserContextUpdating: nu
      } = (0, Wu.d)(), [gu, cu] = (0, Gu.i)(), [Lu, zu] = (0, Gu.e)(), Fu = (0, Eu.useRef)(!1), [wu, Zu] = (0, ru.m)(), hu = (0, Au.z)(wu), [Pu, iu] = (0, Eu.useState)(null !== (uu = hu.searchQuery) && void 0 !== uu ? uu : ""), Yu = (0, Eu.useRef)(null), {
        searchQuery: ou
      } = hu;
      (0, Eu.useEffect)((() => {
        iu(null !== ou && void 0 !== ou ? ou : ""), Yu.current && (Yu.current.value = null !== ou && void 0 !== ou ? ou : "")
      }), [ou]);
      const [qu, Ou] = (0, Eu.useState)(null), [vu, au] = (0, Eu.useState)(!1), [fu, uR] = (0, Eu.useState)(!1), [RR, yR] = (0, Eu.useState)(0), ER = (0, Eu.useRef)(0), KR = JSON.stringify(hu), QR = (0, Au.k)();

      function mR() {
        null !== QR ? (eu(QR), ju.d.set({
          openEverythingMenuName: Ju.s.SETTINGS,
          openSettingsCategory: "ix"
        })) : eu("/")
      }

      function JR(uu) {
        Zu((Ru => {
          (0, Au.ib)(Ru, {
            ...hu,
            pageNumber: 1,
            ...uu
          })
        }))
      }

      function NR() {
        const uu = Pu.trim() || null;
        JR({
          searchQuery: uu,
          ...null !== uu && !Fu.current && (0, Au.m)(hu) && {
            withFeatures: [],
            withoutFeatures: []
          }
        })
      }(0, Tu.c)(mR), (0, Gu.b)(), (0, Eu.useEffect)((() => {
        if (nu) return;
        const uu = ++ER.current,
          Ru = JSON.parse(KR);
        au(!0), uR(!1), async function(uu) {
          if ("mine" === uu.section) return {
            kind: "owned",
            packs: await Hu.e.getOwnedShaderPacks(Iu)
          };
          const Ru = "favourites" === uu.section,
            yu = Ru && (0, Au.m)(uu),
            Eu = await Hu.e.getShaderPacks(Iu, {
              sort: Ru ? Au.g : uu.sort,
              features: yu ? [] : uu.withFeatures,
              withoutFeatures: yu ? [] : uu.withoutFeatures,
              searchQuery: uu.searchQuery,
              pageNumber: uu.pageNumber,
              pageSize: tu,
              onlyFavourites: Ru,
              banned: (0, Au.p)(Iu) ? (0, Au.d)(uu.banned) : void 0
            });
          return {
            kind: "listing",
            page: Eu
          }
        }(Ru).then((Ru => {
          ER.current === uu && Ou(Ru)
        })).catch((Ru => {
          ER.current === uu && (console.error("Failed to get shader packs", Ru), Ou(null), uR(!0))
        })).finally((() => {
          ER.current === uu && au(!1)
        }))
      }), [KR, Iu, nu, RR]);
      const [XR, VR] = (0, Eu.useState)(null), rR = null !== (yu = null === (Qu = ("listing" === (null === qu || void 0 === qu ? void 0 : qu.kind) ? qu.page.results : (null !== (Ru = null === qu || void 0 === qu ? void 0 : qu.packs) && void 0 !== Ru ? Ru : []).flatMap((uu => uu.live ? [uu.live] : [])))[0]) || void 0 === Qu ? void 0 : Qu.baselineVersion) && void 0 !== yu ? yu : null;
      (0, Eu.useEffect)((() => {
        null !== rR && VR(rR)
      }), [rR]);
      const BR = "mine" === hu.section,
        xR = (0, Au.p)(Iu),
        SR = uu => {
          "explore" !== hu.section && (uu.stopPropagation(), uu.preventDefault(), JR({
            section: "explore"
          }))
        };
      return (0, Mu.jsxs)("div", {
        className: "ShaderPackBrowse AnimFadeIn",
        children: [(0, Mu.jsx)(Bu.b, {
          onClick: mR,
          children: ku(null === QR ? "homePage:backToGames" : "shaderPackListing:backToSettings")
        }), (0, Mu.jsxs)("div", {
          className: "ShaderPackBrowseHeader",
          children: [(0, Mu.jsxs)("div", {
            className: "ShaderPackBrowseHeaderRow",
            children: [(0, Mu.jsx)("h1", {
              className: "VisuallyHidden",
              children: ku("shaderPackListing:title")
            }), (0, Mu.jsxs)("div", {
              className: "ShaderPackBrowseTabs",
              children: [(0, Mu.jsx)("div", {
                className: mu()("ShaderPackBrowseSort", {
                  Active: "explore" === hu.section
                }),
                onMouseDownCapture: SR,
                onTouchEndCapture: SR,
                children: (0, Mu.jsx)(xu.d, {
                  options: Nu.u.map((uu => ({
                    value: uu,
                    label: ku(Au.cb[uu])
                  }))),
                  value: hu.sort,
                  onChange: uu => {
                    JR({
                      section: "explore",
                      sort: uu.value
                    })
                  }
                })
              }), Object.keys(lu).map((uu => (0, Mu.jsx)(Bu.P, {
                active: hu.section === uu,
                onClick: () => {
                  JR({
                    section: uu
                  })
                },
                children: ku(lu[uu])
              }, uu)))]
            }), !BR && (0, Mu.jsx)("div", {
              className: "ShaderPackBrowseDivider"
            }), !BR && (0, Mu.jsxs)("div", {
              className: "ShaderPackBrowseSearch",
              children: [(0, Mu.jsx)("div", {
                className: "ShaderPackBrowseSearchIcon",
                children: (0, Mu.jsx)(Xu.c, {
                  name: "magnifying-glass"
                })
              }), (0, Mu.jsx)(pu.b, {
                className: "ShaderPackBrowseSearchInput",
                placeholderText: ku("shaderPackListing:searchPlaceholder"),
                maxLength: Nu.H,
                defaultValue: Pu,
                domRef: Yu,
                onValueChange: iu,
                onEnter: NR
              }), (0, Mu.jsx)(Bu.e, {
                onClick: NR,
                children: ku("general:search")
              })]
            }), !BR && (0, Mu.jsxs)(Bu.P, {
              className: mu()("ShaderPackBrowseFilterToggle", {
                Open: Lu
              }),
              pressed: Lu,
              onClick: () => {
                zu(!Lu)
              },
              children: [ku("shaderPackListing:filter"), " ", (0, Mu.jsx)(Xu.c, {
                name: Lu ? "angle-up" : "angle-down"
              })]
            }), (0, Mu.jsx)("div", {
              className: "ShaderPackBrowseSpace"
            }), bu.featureFlags.settings.canUseShaderPacks && (0, Mu.jsxs)(Bu.l, {
              onClick: () => {
                eu(Au._)
              },
              children: [(0, Mu.jsx)(Xu.c, {
                name: "upload"
              }), " ", ku("shaderPackListing:publish")]
            })]
          }), !BR && Lu && (0, Mu.jsxs)("div", {
            className: "ShaderPackBrowseFeatures",
            children: [Au.v.map((uu => {
              const Ru = (0, Au.h)(hu, uu),
                yu = ku(Au.I[uu]);
              return (0, Mu.jsx)(Bu.P, {
                className: mu()("ShaderPackBrowseFeature", {
                  Without: "without" === Ru
                }),
                active: "with" === Ru,
                pressed: null !== Ru,
                onClick: () => {
                  Fu.current = !0, JR((0, Au.hb)(hu, uu))
                },
                children: (0, Mu.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureLabel",
                  children: [(0, Mu.jsxs)("span", {
                    className: "ShaderPackBrowseFeatureReserve",
                    children: [(0, Mu.jsx)(Xu.c, {
                      name: "check"
                    }), " ", yu]
                  }), (0, Mu.jsxs)("span", {
                    children: [null !== Ru && (0, Mu.jsx)(Xu.c, {
                      name: "with" === Ru ? "check" : "xmark"
                    }), " ", yu]
                  })]
                })
              }, uu)
            })), xR && (0, Mu.jsx)(Bu.P, {
              className: mu()("ShaderPackBrowseFeature", {
                Without: "without" === hu.banned
              }),
              active: "with" === hu.banned,
              pressed: null !== hu.banned,
              onClick: () => {
                const uu = "without" === hu.banned && !Fu.current && (0, Au.m)(hu);
                JR({
                  banned: (0, Au.x)(hu.banned),
                  ...uu && {
                    withFeatures: [],
                    withoutFeatures: []
                  }
                })
              },
              children: (0, Mu.jsxs)("span", {
                className: "ShaderPackBrowseFeatureLabel",
                children: [(0, Mu.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureReserve",
                  children: [(0, Mu.jsx)(Xu.c, {
                    name: "check"
                  }), " BANNED"]
                }), (0, Mu.jsxs)("span", {
                  children: [null !== hu.banned && (0, Mu.jsx)(Xu.c, {
                    name: "with" === hu.banned ? "check" : "xmark"
                  }), " BANNED"]
                })]
              })
            })]
          })]
        }), (!BR || null !== XR) && (0, Mu.jsx)("div", {
          className: "ShaderPackBrowseScenes",
          children: (0, Mu.jsx)(su.c, {
            selected: gu,
            onSelect: cu,
            imageUrl: uu => null === XR ? null : (0, Nu.h)(du.clientSideServerUrls.s3Url, XR, uu, "thumb")
          })
        }), (0, Mu.jsx)(Uu, {
          results: qu,
          loading: vu,
          failed: fu,
          onRetry: () => {
            yR((uu => uu + 1))
          },
          view: hu,
          previewView: gu
        }), "listing" === (null === qu || void 0 === qu ? void 0 : qu.kind) && (0, Mu.jsx)(Su.d, {
          className: "ShaderPackBrowsePagination",
          page: qu.page.pageNumber,
          totalPages: qu.page.totalPages,
          onSetPage: uu => {
            Zu((Ru => {
              (0, ru.j)(Ru, uu)
            }))
          },
          getPageHref: function(uu) {
            const Ru = new URLSearchParams(wu);
            (0, ru.j)(Ru, uu);
            const yu = Ru.toString();
            return yu ? `${Du.pathname}?${yu}` : Du.pathname
          }
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);