export const id = 142;
export const ids = [142];
export const modules = {
  7193: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      default: () => xe
    });
    var ye = He(59),
      be = He(1515),
      Me = He(1053),
      Ke = He.n(Me),
      Ue = He(335),
      Fe = He(7206),
      Je = He(1323),
      oe = He(1502),
      Re = He(4947),
      ke = He(1438),
      qe = He(3442),
      fe = He(4953),
      Te = He(1674),
      pe = He(4942),
      Xe = He(1075),
      ze = He(18),
      Be = He(1490),
      Ee = He(1141),
      ge = He(97),
      Oe = He(1127),
      de = He(1320),
      We = He(1169),
      te = He(7201),
      Ze = He(7210),
      we = He(1228);

    function De(ee) {
      let {
        pack: ie,
        view: He,
        favourite: ye,
        notice: be
      } = ee;
      const {
        width: Me,
        height: Ue
      } = Fe.s.thumb, {
        live: Re
      } = ie;
      return (0, we.jsx)("div", {
        className: "ShaderPackCard",
        children: (0, we.jsxs)("div", {
          className: "ShaderPackCardTile",
          children: [(0, we.jsxs)(oe.LinkPreserveSearch, {
            to: (0, te.eb)(ie.packId),
            className: "ShaderPackCardLink",
            children: [Re && (0, we.jsx)("img", {
              className: "ShaderPackCardImage",
              src: (0, Fe.t)(Ee.clientSideServerUrls.s3Url, Re, He, "thumb"),
              width: Me,
              height: Ue,
              loading: "lazy",
              alt: "",
              draggable: !1
            }), Re && (0, we.jsx)(Ze.b, {
              item: Re
            }), !Re && (0, we.jsx)("div", {
              className: "ShaderPackCardImage ShaderPackCardImagePending",
              children: (0, we.jsx)(Je.e, {
                name: "hourglass"
              })
            }), (0, we.jsxs)("div", {
              className: "ShaderPackCardText",
              children: [be && (0, we.jsx)("div", {
                className: Ke()("ShaderPackCardNotice", {
                  Warning: "warning" === be.tone
                }),
                children: be.text
              }), (0, we.jsx)("div", {
                className: "ShaderPackCardName SmallTextBold",
                children: ie.name
              })]
            })]
          }), Re && (0, we.jsxs)("div", {
            className: "ShaderPackCardStats",
            children: [(0, we.jsxs)("div", {
              className: "ShaderPackCardUses SmallTextBold",
              children: [(0, we.jsx)(Je.e, {
                name: "download"
              }), (0, We.P)(Re.downloads)]
            }), ye && (0, we.jsx)(ke.r, {
              onClick: ye.onToggle,
              isLiked: !0 === ye.isFavourite,
              isLoading: null === ye.isFavourite
            })]
          })]
        })
      })
    }
    var Pe = He(7213);

    function Ae(ee) {
      let {
        results: ie,
        loading: He,
        failed: ye,
        onRetry: be,
        view: Me,
        previewView: Ue
      } = ee;
      const {
        t: Fe
      } = (0, Oe.v)(), Je = (0, Pe.l)(), oe = Date.now(), Re = null === ie ? 0 : "owned" === ie.kind ? ie.packs.length : ie.page.results.length;
      return (0, we.jsxs)("div", {
        className: Ke()("ShaderPackBrowseResults", {
          Loading: He && null !== ie
        }),
        children: [He && null === ie && (0, we.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: (0, we.jsx)(de.b, {})
        }), ye && (0, we.jsxs)("div", {
          className: "ShaderPackBrowseMessage",
          children: [Fe("shaderPackListing:loadFailed"), (0, we.jsx)(ke.c, {
            onClick: be,
            children: Fe("general:tryAgain")
          })]
        }), "listing" === (null === ie || void 0 === ie ? void 0 : ie.kind) && Re > 0 && (0, we.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: ie.page.results.map((ee => (0, we.jsx)(De, {
            pack: {
              packId: ee.packId,
              name: ee.name,
              live: ee
            },
            view: Ue,
            favourite: {
              isFavourite: Je.isFavourite(ee.packId),
              onToggle: () => {
                Je.toggle(ee.packId)
              }
            }
          }, ee.packId)))
        }), "owned" === (null === ie || void 0 === ie ? void 0 : ie.kind) && Re > 0 && (0, we.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: ie.packs.map((ee => {
            var ie;
            return (0, we.jsx)(De, {
              pack: ee,
              view: Ue,
              notice: ee.owner ? (0, te.ab)(ee.owner, !(null === (ie = ee.live) || void 0 === ie || !ie.renderId), oe, Fe)[0] : void 0
            }, ee.packId)
          }))
        }), null !== ie && 0 === Re && (0, we.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: Fe(Ye(Me))
        })]
      })
    }

    function Ye(ee) {
      return "mine" === ee.section ? "shaderPackListing:noOwnPacks" : (0, te.w)(ee) ? "general:noResults" : "favourites" === ee.section ? "shaderPackListing:noFavourites" : "general:noResults"
    }
    var Ve = He(7227);
    const ae = 24,
      ce = {
        favourites: "general:favourites",
        mine: "shaderPackListing:mine"
      };

    function xe() {
      var ee, ie, He, Me;
      const {
        t: de
      } = (0, Oe.v)(), We = (0, oe.useNavigatePreserveSearch)(), Ze = (0, be.u)(), {
        userContext: De,
        isUserContextUpdating: Ye
      } = (0, Xe.b)(), [xe, Le] = (0, Pe.i)(), [Ce, ve] = (0, Pe.e)(), ue = (0, ye.useRef)(!1), [me, le] = (0, Re.l)(), Se = (0, te.H)(me), [ne, je] = (0, ye.useState)(null !== (ee = Se.searchQuery) && void 0 !== ee ? ee : ""), se = (0, ye.useRef)(null), {
        searchQuery: Ie
      } = Se;
      (0, ye.useEffect)((() => {
        je(null !== Ie && void 0 !== Ie ? Ie : ""), se.current && (se.current.value = null !== Ie && void 0 !== Ie ? Ie : "")
      }), [Ie]);
      const [he, Ne] = (0, ye.useState)(null), [Ge, re] = (0, ye.useState)(!1), [Qe, ei] = (0, ye.useState)(!1), [ii, Hi] = (0, ye.useState)(0), yi = (0, ye.useRef)(0), bi = JSON.stringify(Se), Mi = (0, te.p)();

      function Ki() {
        null !== Mi ? (We(Mi), ze.e.set({
          openEverythingMenuName: Ue.r.SETTINGS,
          openSettingsCategory: "Zf"
        })) : We("/")
      }

      function Ui(ee) {
        le((ie => {
          (0, te.rb)(ie, {
            ...Se,
            pageNumber: 1,
            ...ee
          })
        }))
      }

      function Fi() {
        const ee = ne.trim() || null;
        Ui({
          searchQuery: ee,
          ...null !== ee && !ue.current && (0, te.r)(Se) && {
            withFeatures: [],
            withoutFeatures: []
          }
        })
      }(0, pe.c)(Ki), (0, Pe.b)(), (0, ye.useEffect)((() => {
        if (Ye) return;
        const ee = ++yi.current,
          ie = JSON.parse(bi);
        re(!0), ei(!1), async function(ee) {
          if ("mine" === ee.section) return {
            kind: "owned",
            packs: await Be.b.getOwnedShaderPacks(De)
          };
          const ie = "favourites" === ee.section,
            He = ie && (0, te.r)(ee),
            ye = await Be.b.getShaderPacks(De, {
              sort: ie ? te.g : ee.sort,
              features: He ? [] : ee.withFeatures,
              withoutFeatures: He ? [] : ee.withoutFeatures,
              searchQuery: ee.searchQuery,
              pageNumber: ee.pageNumber,
              pageSize: ae,
              onlyFavourites: ie,
              banned: (0, te.t)(De) ? (0, te.c)(ee.banned) : void 0
            });
          return {
            kind: "listing",
            page: ye
          }
        }(ie).then((ie => {
          yi.current === ee && Ne(ie)
        })).catch((ie => {
          yi.current === ee && (console.error("Failed to get shader packs", ie), Ne(null), ei(!0))
        })).finally((() => {
          yi.current === ee && re(!1)
        }))
      }), [bi, De, Ye, ii]);
      const [Ji, oi] = (0, ye.useState)(null), Ri = null !== (He = null === (Me = ("listing" === (null === he || void 0 === he ? void 0 : he.kind) ? he.page.results : (null !== (ie = null === he || void 0 === he ? void 0 : he.packs) && void 0 !== ie ? ie : []).flatMap((ee => ee.live ? [ee.live] : [])))[0]) || void 0 === Me ? void 0 : Me.baselineVersion) && void 0 !== He ? He : null;
      (0, ye.useEffect)((() => {
        null !== Ri && oi(Ri)
      }), [Ri]);
      const ki = "mine" === Se.section,
        qi = (0, te.t)(De),
        fi = ee => {
          "explore" !== Se.section && (ee.stopPropagation(), ee.preventDefault(), Ui({
            section: "explore"
          }))
        };
      return (0, we.jsxs)("div", {
        className: "ShaderPackBrowse AnimFadeIn",
        children: [(0, we.jsx)(ke.b, {
          onClick: Ki,
          children: de(null === Mi ? "homePage:backToGames" : "shaderPackListing:backToSettings")
        }), (0, we.jsxs)("div", {
          className: "ShaderPackBrowseHeader",
          children: [(0, we.jsxs)("div", {
            className: "ShaderPackBrowseHeaderRow",
            children: [(0, we.jsx)("h1", {
              className: "VisuallyHidden",
              children: de("shaderPackListing:title")
            }), (0, we.jsxs)("div", {
              className: "ShaderPackBrowseTabs",
              children: [(0, we.jsx)("div", {
                className: Ke()("ShaderPackBrowseSort", {
                  Active: "explore" === Se.section
                }),
                onMouseDownCapture: fi,
                onTouchEndCapture: fi,
                children: (0, we.jsx)(qe.e, {
                  options: Fe.w.map((ee => ({
                    value: ee,
                    label: de(te.ib[ee])
                  }))),
                  value: Se.sort,
                  onChange: ee => {
                    Ui({
                      section: "explore",
                      sort: ee.value
                    })
                  }
                })
              }), Object.keys(ce).map((ee => (0, we.jsx)(ke.M, {
                active: Se.section === ee,
                onClick: () => {
                  Ui({
                    section: ee
                  })
                },
                children: de(ce[ee])
              }, ee)))]
            }), !ki && (0, we.jsx)("div", {
              className: "ShaderPackBrowseDivider"
            }), !ki && (0, we.jsxs)("div", {
              className: "ShaderPackBrowseSearch",
              children: [(0, we.jsx)("div", {
                className: "ShaderPackBrowseSearchIcon",
                children: (0, we.jsx)(Je.e, {
                  name: "magnifying-glass"
                })
              }), (0, we.jsx)(Te.d, {
                className: "ShaderPackBrowseSearchInput",
                placeholderText: de("shaderPackListing:searchPlaceholder"),
                maxLength: Fe.G,
                defaultValue: ne,
                domRef: se,
                onValueChange: je,
                onEnter: Fi
              }), (0, we.jsx)(ke.c, {
                onClick: Fi,
                children: de("general:search")
              })]
            }), !ki && (0, we.jsxs)(ke.M, {
              className: Ke()("ShaderPackBrowseFilterToggle", {
                Open: Ce
              }),
              pressed: Ce,
              onClick: () => {
                ve(!Ce)
              },
              children: [de("shaderPackListing:filter"), " ", (0, we.jsx)(Je.e, {
                name: Ce ? "angle-up" : "angle-down"
              })]
            }), (0, we.jsx)("div", {
              className: "ShaderPackBrowseSpace"
            }), ge.featureFlags.settings.canUseShaderPacks && (0, we.jsxs)(ke.m, {
              onClick: () => {
                We(te.hb)
              },
              children: [(0, we.jsx)(Je.e, {
                name: "upload"
              }), " ", de("shaderPackListing:publish")]
            })]
          }), !ki && Ce && (0, we.jsxs)("div", {
            className: "ShaderPackBrowseFeatures",
            children: [te.C.map((ee => {
              const ie = (0, te.i)(Se, ee),
                He = de(te.P[ee]);
              return (0, we.jsx)(ke.M, {
                className: Ke()("ShaderPackBrowseFeature", {
                  Without: "without" === ie
                }),
                active: "with" === ie,
                pressed: null !== ie,
                onClick: () => {
                  ue.current = !0, Ui((0, te.pb)(Se, ee))
                },
                children: (0, we.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureLabel",
                  children: [(0, we.jsxs)("span", {
                    className: "ShaderPackBrowseFeatureReserve",
                    children: [(0, we.jsx)(Je.e, {
                      name: "check"
                    }), " ", He]
                  }), (0, we.jsxs)("span", {
                    children: [null !== ie && (0, we.jsx)(Je.e, {
                      name: "with" === ie ? "check" : "xmark"
                    }), " ", He]
                  })]
                })
              }, ee)
            })), qi && (0, we.jsx)(ke.M, {
              className: Ke()("ShaderPackBrowseFeature", {
                Without: "without" === Se.banned
              }),
              active: "with" === Se.banned,
              pressed: null !== Se.banned,
              onClick: () => {
                const ee = "without" === Se.banned && !ue.current && (0, te.r)(Se);
                Ui({
                  banned: (0, te.F)(Se.banned),
                  ...ee && {
                    withFeatures: [],
                    withoutFeatures: []
                  }
                })
              },
              children: (0, we.jsxs)("span", {
                className: "ShaderPackBrowseFeatureLabel",
                children: [(0, we.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureReserve",
                  children: [(0, we.jsx)(Je.e, {
                    name: "check"
                  }), " BANNED"]
                }), (0, we.jsxs)("span", {
                  children: [null !== Se.banned && (0, we.jsx)(Je.e, {
                    name: "with" === Se.banned ? "check" : "xmark"
                  }), " BANNED"]
                })]
              })
            })]
          })]
        }), (!ki || null !== Ji) && (0, we.jsx)("div", {
          className: "ShaderPackBrowseScenes",
          children: (0, we.jsx)(Ve.e, {
            selected: xe,
            onSelect: Le,
            imageUrl: ee => null === Ji ? null : (0, Fe.m)(Ee.clientSideServerUrls.s3Url, Ji, ee, "thumb")
          })
        }), (0, we.jsx)(Ae, {
          results: he,
          loading: Ge,
          failed: Qe,
          onRetry: () => {
            Hi((ee => ee + 1))
          },
          view: Se,
          previewView: xe
        }), "listing" === (null === he || void 0 === he ? void 0 : he.kind) && (0, we.jsx)(fe.d, {
          className: "ShaderPackBrowsePagination",
          page: he.page.pageNumber,
          totalPages: he.page.totalPages,
          onSetPage: ee => {
            le((ie => {
              (0, Re.k)(ie, ee)
            }))
          },
          getPageHref: function(ee) {
            const ie = new URLSearchParams(me);
            (0, Re.k)(ie, ee);
            const He = ie.toString();
            return He ? `${Ze.pathname}?${He}` : Ze.pathname
          }
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);