export const id = 121;
export const ids = [121];
export const modules = {
  6410: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      default: () => nd
    });
    var pd = kd(56),
      Nd = kd(1557),
      Wd = kd(1044),
      Pd = kd.n(Wd),
      Zd = kd(300),
      gd = kd(6425),
      Cd = kd(1059),
      Kd = kd(1543),
      od = kd(4411),
      ld = kd(1461),
      Qd = kd(2999),
      Ld = kd(4417),
      Od = kd(1714),
      ed = kd(4403),
      Rd = kd(1140),
      Id = kd(22),
      Gd = kd(1520),
      vd = kd(1220),
      xd = kd(95),
      qd = kd(1211),
      Bd = kd(1359),
      sd = kd(1245),
      ad = kd(6419),
      Md = kd(6428),
      Fd = kd(1103);

    function Yd(dd) {
      let {
        pack: Jd,
        view: kd,
        favourite: pd,
        notice: Nd
      } = dd;
      const {
        width: Wd,
        height: Zd
      } = gd.p.thumb, {
        live: od
      } = Jd;
      return (0, Fd.jsx)("div", {
        className: "ShaderPackCard",
        children: (0, Fd.jsxs)("div", {
          className: "ShaderPackCardTile",
          children: [(0, Fd.jsxs)(Kd.LinkPreserveSearch, {
            to: (0, ad.$)(Jd.packId),
            className: "ShaderPackCardLink",
            children: [od && (0, Fd.jsx)("img", {
              className: "ShaderPackCardImage",
              src: (0, gd.q)(vd.clientSideServerUrls.s3Url, od, kd, "thumb"),
              width: Wd,
              height: Zd,
              loading: "lazy",
              alt: "",
              draggable: !1
            }), od && (0, Fd.jsx)(Md.b, {
              item: od
            }), !od && (0, Fd.jsx)("div", {
              className: "ShaderPackCardImage ShaderPackCardImagePending",
              children: (0, Fd.jsx)(Cd.e, {
                name: "hourglass"
              })
            }), (0, Fd.jsxs)("div", {
              className: "ShaderPackCardText",
              children: [Nd && (0, Fd.jsx)("div", {
                className: Pd()("ShaderPackCardNotice", {
                  Warning: "warning" === Nd.tone
                }),
                children: Nd.text
              }), (0, Fd.jsx)("div", {
                className: "ShaderPackCardName SmallTextBold",
                children: Jd.name
              })]
            })]
          }), od && (0, Fd.jsxs)("div", {
            className: "ShaderPackCardStats",
            children: [(0, Fd.jsxs)("div", {
              className: "ShaderPackCardUses SmallTextBold",
              children: [(0, Fd.jsx)(Cd.e, {
                name: "download"
              }), (0, sd.Q)(od.downloads)]
            }), pd && (0, Fd.jsx)(ld.p, {
              onClick: pd.onToggle,
              isLiked: !0 === pd.isFavourite,
              isLoading: null === pd.isFavourite
            })]
          })]
        })
      })
    }
    var md = kd(6430);

    function bd(dd) {
      let {
        results: Jd,
        loading: kd,
        failed: pd,
        onRetry: Nd,
        view: Wd,
        previewView: Zd
      } = dd;
      const {
        t: gd
      } = (0, qd.B)(), Cd = (0, md.j)(), Kd = Date.now(), od = null === Jd ? 0 : "owned" === Jd.kind ? Jd.packs.length : Jd.page.results.length;
      return (0, Fd.jsxs)("div", {
        className: Pd()("ShaderPackBrowseResults", {
          Loading: kd && null !== Jd
        }),
        children: [kd && null === Jd && (0, Fd.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: (0, Fd.jsx)(Bd.b, {})
        }), pd && (0, Fd.jsxs)("div", {
          className: "ShaderPackBrowseMessage",
          children: [gd("shaderPackListing:loadFailed"), (0, Fd.jsx)(ld.d, {
            onClick: Nd,
            children: gd("general:tryAgain")
          })]
        }), "listing" === (null === Jd || void 0 === Jd ? void 0 : Jd.kind) && od > 0 && (0, Fd.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: Jd.page.results.map((dd => (0, Fd.jsx)(Yd, {
            pack: {
              packId: dd.packId,
              name: dd.name,
              live: dd
            },
            view: Zd,
            favourite: {
              isFavourite: Cd.isFavourite(dd.packId),
              onToggle: () => {
                Cd.toggle(dd.packId)
              }
            }
          }, dd.packId)))
        }), "owned" === (null === Jd || void 0 === Jd ? void 0 : Jd.kind) && od > 0 && (0, Fd.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: Jd.packs.map((dd => {
            var Jd;
            return (0, Fd.jsx)(Yd, {
              pack: dd,
              view: Zd,
              notice: dd.owner ? (0, ad._)(dd.owner, !(null === (Jd = dd.live) || void 0 === Jd || !Jd.renderId), Kd, gd)[0] : void 0
            }, dd.packId)
          }))
        }), null !== Jd && 0 === od && (0, Fd.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: gd(Sd(Wd))
        })]
      })
    }

    function Sd(dd) {
      return "mine" === dd.section ? "shaderPackListing:noOwnPacks" : (0, ad.v)(dd) ? "general:noResults" : "favourites" === dd.section ? "shaderPackListing:noFavourites" : "general:noResults"
    }
    var jd = kd(6441);
    const Xd = 24,
      fd = {
        favourites: "general:favourites",
        mine: "shaderPackListing:mine"
      };

    function nd() {
      var dd, Jd, kd, Wd;
      const {
        t: Bd
      } = (0, qd.B)(), sd = (0, Kd.useNavigatePreserveSearch)(), Md = (0, Nd.v)(), {
        userContext: Yd,
        isUserContextUpdating: Sd
      } = (0, Rd.c)(), [nd, Ud] = (0, md.i)(), [yd, Dd] = (0, md.g)(), Td = (0, pd.useRef)(!1), [Ed, cd] = (0, od.l)(), hd = (0, ad.E)(Ed), [rd, ud] = (0, pd.useState)(null !== (dd = hd.searchQuery) && void 0 !== dd ? dd : ""), td = (0, pd.useRef)(null), {
        searchQuery: Vd
      } = hd;
      (0, pd.useEffect)((() => {
        ud(null !== Vd && void 0 !== Vd ? Vd : ""), td.current && (td.current.value = null !== Vd && void 0 !== Vd ? Vd : "")
      }), [Vd]);
      const [zd, Hd] = (0, pd.useState)(null), [wd, Ad] = (0, pd.useState)(!1), [dJ, JJ] = (0, pd.useState)(!1), [kJ, pJ] = (0, pd.useState)(0), NJ = (0, pd.useRef)(0), WJ = JSON.stringify(hd), PJ = (0, ad.q)();

      function ZJ() {
        null !== PJ ? (sd(PJ), Id.d.set({
          openEverythingMenuName: Zd.s.SETTINGS,
          openSettingsCategory: "EQ"
        })) : sd("/")
      }

      function gJ(dd) {
        cd((Jd => {
          (0, ad.kb)(Jd, {
            ...hd,
            pageNumber: 1,
            ...dd
          })
        }))
      }

      function CJ() {
        const dd = rd.trim() || null;
        gJ({
          searchQuery: dd,
          ...null !== dd && !Td.current && (0, ad.r)(hd) && {
            withFeatures: [],
            withoutFeatures: []
          }
        })
      }(0, ed.d)(ZJ), (0, md.d)(), (0, pd.useEffect)((() => {
        if (Sd) return;
        const dd = ++NJ.current,
          Jd = JSON.parse(WJ);
        Ad(!0), JJ(!1), async function(dd) {
          if ("mine" === dd.section) return {
            kind: "owned",
            packs: await Gd.d.getOwnedShaderPacks(Yd)
          };
          const Jd = "favourites" === dd.section,
            kd = Jd && (0, ad.r)(dd),
            pd = await Gd.d.getShaderPacks(Yd, {
              sort: Jd ? ad.g : dd.sort,
              features: kd ? [] : dd.withFeatures,
              withoutFeatures: kd ? [] : dd.withoutFeatures,
              searchQuery: dd.searchQuery,
              pageNumber: dd.pageNumber,
              pageSize: Xd,
              onlyFavourites: Jd,
              banned: (0, ad.t)(Yd) ? (0, ad.e)(dd.banned) : void 0
            });
          return {
            kind: "listing",
            page: pd
          }
        }(Jd).then((Jd => {
          NJ.current === dd && Hd(Jd)
        })).catch((Jd => {
          NJ.current === dd && (console.error("Failed to get shader packs", Jd), Hd(null), JJ(!0))
        })).finally((() => {
          NJ.current === dd && Ad(!1)
        }))
      }), [WJ, Yd, Sd, kJ]);
      const [KJ, oJ] = (0, pd.useState)(null), lJ = null !== (kd = null === (Wd = ("listing" === (null === zd || void 0 === zd ? void 0 : zd.kind) ? zd.page.results : (null !== (Jd = null === zd || void 0 === zd ? void 0 : zd.packs) && void 0 !== Jd ? Jd : []).flatMap((dd => dd.live ? [dd.live] : [])))[0]) || void 0 === Wd ? void 0 : Wd.baselineVersion) && void 0 !== kd ? kd : null;
      (0, pd.useEffect)((() => {
        null !== lJ && oJ(lJ)
      }), [lJ]);
      const QJ = "mine" === hd.section,
        LJ = (0, ad.t)(Yd),
        OJ = dd => {
          "explore" !== hd.section && (dd.stopPropagation(), dd.preventDefault(), gJ({
            section: "explore"
          }))
        };
      return (0, Fd.jsxs)("div", {
        className: "ShaderPackBrowse AnimFadeIn",
        children: [(0, Fd.jsx)(ld.b, {
          onClick: ZJ,
          children: Bd(null === PJ ? "homePage:backToGames" : "shaderPackListing:backToSettings")
        }), (0, Fd.jsxs)("div", {
          className: "ShaderPackBrowseHeader",
          children: [(0, Fd.jsxs)("div", {
            className: "ShaderPackBrowseHeaderRow",
            children: [(0, Fd.jsx)("h1", {
              className: "VisuallyHidden",
              children: Bd("shaderPackListing:title")
            }), (0, Fd.jsxs)("div", {
              className: "ShaderPackBrowseTabs",
              children: [(0, Fd.jsx)("div", {
                className: Pd()("ShaderPackBrowseSort", {
                  Active: "explore" === hd.section
                }),
                onMouseDownCapture: OJ,
                onTouchEndCapture: OJ,
                children: (0, Fd.jsx)(Qd.c, {
                  options: gd.s.map((dd => ({
                    value: dd,
                    label: Bd(ad.fb[dd])
                  }))),
                  value: hd.sort,
                  onChange: dd => {
                    gJ({
                      section: "explore",
                      sort: dd.value
                    })
                  }
                })
              }), Object.keys(fd).map((dd => (0, Fd.jsx)(ld.G, {
                active: hd.section === dd,
                onClick: () => {
                  gJ({
                    section: dd
                  })
                },
                children: Bd(fd[dd])
              }, dd)))]
            }), !QJ && (0, Fd.jsx)("div", {
              className: "ShaderPackBrowseDivider"
            }), !QJ && (0, Fd.jsxs)("div", {
              className: "ShaderPackBrowseSearch",
              children: [(0, Fd.jsx)("div", {
                className: "ShaderPackBrowseSearchIcon",
                children: (0, Fd.jsx)(Cd.e, {
                  name: "magnifying-glass"
                })
              }), (0, Fd.jsx)(Od.e, {
                className: "ShaderPackBrowseSearchInput",
                placeholderText: Bd("shaderPackListing:searchPlaceholder"),
                maxLength: gd.B,
                defaultValue: rd,
                domRef: td,
                onValueChange: ud,
                onEnter: CJ
              }), (0, Fd.jsx)(ld.d, {
                onClick: CJ,
                children: Bd("general:search")
              })]
            }), !QJ && (0, Fd.jsxs)(ld.G, {
              className: Pd()("ShaderPackBrowseFilterToggle", {
                Open: yd
              }),
              pressed: yd,
              onClick: () => {
                Dd(!yd)
              },
              children: [Bd("shaderPackListing:filter"), " ", (0, Fd.jsx)(Cd.e, {
                name: yd ? "angle-up" : "angle-down"
              })]
            }), (0, Fd.jsx)("div", {
              className: "ShaderPackBrowseSpace"
            }), xd.featureFlags.settings.canUseShaderPacks && (0, Fd.jsxs)(ld.j, {
              onClick: () => {
                sd(ad.cb)
              },
              children: [(0, Fd.jsx)(Cd.e, {
                name: "upload"
              }), " ", Bd("shaderPackListing:publish")]
            })]
          }), !QJ && yd && (0, Fd.jsxs)("div", {
            className: "ShaderPackBrowseFeatures",
            children: [ad.B.map((dd => {
              const Jd = (0, ad.j)(hd, dd),
                kd = Bd(ad.P[dd]);
              return (0, Fd.jsx)(ld.G, {
                className: Pd()("ShaderPackBrowseFeature", {
                  Without: "without" === Jd
                }),
                active: "with" === Jd,
                pressed: null !== Jd,
                onClick: () => {
                  Td.current = !0, gJ((0, ad.ib)(hd, dd))
                },
                children: (0, Fd.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureLabel",
                  children: [(0, Fd.jsxs)("span", {
                    className: "ShaderPackBrowseFeatureReserve",
                    children: [(0, Fd.jsx)(Cd.e, {
                      name: "check"
                    }), " ", kd]
                  }), (0, Fd.jsxs)("span", {
                    children: [null !== Jd && (0, Fd.jsx)(Cd.e, {
                      name: "with" === Jd ? "check" : "xmark"
                    }), " ", kd]
                  })]
                })
              }, dd)
            })), LJ && (0, Fd.jsx)(ld.G, {
              className: Pd()("ShaderPackBrowseFeature", {
                Without: "without" === hd.banned
              }),
              active: "with" === hd.banned,
              pressed: null !== hd.banned,
              onClick: () => {
                const dd = "without" === hd.banned && !Td.current && (0, ad.r)(hd);
                gJ({
                  banned: (0, ad.C)(hd.banned),
                  ...dd && {
                    withFeatures: [],
                    withoutFeatures: []
                  }
                })
              },
              children: (0, Fd.jsxs)("span", {
                className: "ShaderPackBrowseFeatureLabel",
                children: [(0, Fd.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureReserve",
                  children: [(0, Fd.jsx)(Cd.e, {
                    name: "check"
                  }), " BANNED"]
                }), (0, Fd.jsxs)("span", {
                  children: [null !== hd.banned && (0, Fd.jsx)(Cd.e, {
                    name: "with" === hd.banned ? "check" : "xmark"
                  }), " BANNED"]
                })]
              })
            })]
          })]
        }), (!QJ || null !== KJ) && (0, Fd.jsx)("div", {
          className: "ShaderPackBrowseScenes",
          children: (0, Fd.jsx)(jd.b, {
            selected: nd,
            onSelect: Ud,
            imageUrl: dd => null === KJ ? null : (0, gd.k)(vd.clientSideServerUrls.s3Url, KJ, dd, "thumb")
          })
        }), (0, Fd.jsx)(bd, {
          results: zd,
          loading: wd,
          failed: dJ,
          onRetry: () => {
            pJ((dd => dd + 1))
          },
          view: hd,
          previewView: nd
        }), "listing" === (null === zd || void 0 === zd ? void 0 : zd.kind) && (0, Fd.jsx)(Ld.b, {
          className: "ShaderPackBrowsePagination",
          page: zd.page.pageNumber,
          totalPages: zd.page.totalPages,
          onSetPage: dd => {
            cd((Jd => {
              (0, od.k)(Jd, dd)
            }))
          },
          getPageHref: function(dd) {
            const Jd = new URLSearchParams(Ed);
            (0, od.k)(Jd, dd);
            const kd = Jd.toString();
            return kd ? `${Md.pathname}?${kd}` : Md.pathname
          }
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);