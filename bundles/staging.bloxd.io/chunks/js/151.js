export const id = 151;
export const ids = [151];
export const modules = {
  7505: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      default: () => nd
    });
    var Wd = md(66),
      Fd = md(1650),
      Rd = md(1155),
      Xd = md.n(Rd),
      Kd = md(387),
      hd = md(7512),
      vd = md(1443),
      Qd = md(1641),
      td = md(5223),
      od = md(1572),
      Nd = md(4327),
      qd = md(5232),
      Hd = md(1808),
      yd = md(5220),
      bd = md(1186),
      Td = md(29),
      pd = md(1627),
      Yd = md(1253),
      gd = md(107),
      wd = md(1238),
      Ed = md(1436),
      Jd = md(1286),
      Ud = md(7509),
      xd = md(7515),
      Bd = md(1341);

    function Sd(dd) {
      let {
        pack: Od,
        view: md,
        favourite: Wd,
        notice: Fd
      } = dd;
      const {
        width: Rd,
        height: Kd
      } = hd.q.thumb, {
        live: td
      } = Od;
      return (0, Bd.jsx)("div", {
        className: "ShaderPackCard",
        children: (0, Bd.jsxs)("div", {
          className: "ShaderPackCardTile",
          children: [(0, Bd.jsxs)(Qd.LinkPreserveSearch, {
            to: (0, Ud.Y)(Od.packId),
            className: "ShaderPackCardLink",
            children: [td && (0, Bd.jsx)("img", {
              className: "ShaderPackCardImage",
              src: (0, hd.r)(Yd.clientSideServerUrls.s3Url, td, md, "thumb"),
              width: Rd,
              height: Kd,
              loading: "lazy",
              alt: "",
              draggable: !1
            }), td && (0, Bd.jsx)(xd.d, {
              item: td
            }), !td && (0, Bd.jsx)("div", {
              className: "ShaderPackCardImage ShaderPackCardImagePending",
              children: (0, Bd.jsx)(vd.c, {
                name: "hourglass"
              })
            }), (0, Bd.jsxs)("div", {
              className: "ShaderPackCardText",
              children: [Fd && (0, Bd.jsx)("div", {
                className: Xd()("ShaderPackCardNotice", {
                  Warning: "warning" === Fd.tone
                }),
                children: Fd.text
              }), (0, Bd.jsx)("div", {
                className: "ShaderPackCardName SmallTextBold",
                children: Od.name
              })]
            })]
          }), td && (0, Bd.jsxs)("div", {
            className: "ShaderPackCardStats",
            children: [(0, Bd.jsxs)("div", {
              className: "ShaderPackCardUses SmallTextBold",
              children: [(0, Bd.jsx)(vd.c, {
                name: "download"
              }), (0, Jd.M)(td.downloads)]
            }), Wd && (0, Bd.jsx)(od.z, {
              onClick: Wd.onToggle,
              isLiked: !0 === Wd.isFavourite,
              isLoading: null === Wd.isFavourite
            })]
          })]
        })
      })
    }
    var sd = md(7523);

    function ud(dd) {
      let {
        results: Od,
        loading: md,
        failed: Wd,
        onRetry: Fd,
        view: Rd,
        previewView: Kd
      } = dd;
      const {
        t: hd
      } = (0, wd.G)(), vd = (0, sd.k)(), Qd = Date.now(), td = null === Od ? 0 : "owned" === Od.kind ? Od.packs.length : Od.page.results.length;
      return (0, Bd.jsxs)("div", {
        className: Xd()("ShaderPackBrowseResults", {
          Loading: md && null !== Od
        }),
        children: [md && null === Od && (0, Bd.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: (0, Bd.jsx)(Ed.c, {})
        }), Wd && (0, Bd.jsxs)("div", {
          className: "ShaderPackBrowseMessage",
          children: [hd("shaderPackListing:loadFailed"), (0, Bd.jsx)(od.g, {
            onClick: Fd,
            children: hd("general:tryAgain")
          })]
        }), "listing" === (null === Od || void 0 === Od ? void 0 : Od.kind) && td > 0 && (0, Bd.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: Od.page.results.map((dd => (0, Bd.jsx)(Sd, {
            pack: {
              packId: dd.packId,
              name: dd.name,
              live: dd
            },
            view: Kd,
            favourite: {
              isFavourite: vd.isFavourite(dd.packId),
              onToggle: () => {
                vd.toggle(dd.packId)
              }
            }
          }, dd.packId)))
        }), "owned" === (null === Od || void 0 === Od ? void 0 : Od.kind) && td > 0 && (0, Bd.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: Od.packs.map((dd => {
            var Od;
            return (0, Bd.jsx)(Sd, {
              pack: dd,
              view: Kd,
              notice: dd.owner ? (0, Ud.X)(dd.owner, !(null === (Od = dd.live) || void 0 === Od || !Od.renderId), Qd, hd)[0] : void 0
            }, dd.packId)
          }))
        }), null !== Od && 0 === td && (0, Bd.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: hd(Vd(Rd))
        })]
      })
    }

    function Vd(dd) {
      return "mine" === dd.section ? "shaderPackListing:noOwnPacks" : (0, Ud.u)(dd) ? "general:noResults" : "favourites" === dd.section ? "shaderPackListing:noFavourites" : "general:noResults"
    }
    var Ad = md(7539);
    const rd = 24,
      Gd = {
        favourites: "general:favourites",
        mine: "shaderPackListing:mine"
      };

    function nd() {
      var dd, Od, md, Rd;
      const {
        t: Ed
      } = (0, wd.G)(), Jd = (0, Qd.useNavigatePreserveSearch)(), xd = (0, Fd.p)(), {
        userContext: Sd,
        isUserContextUpdating: Vd
      } = (0, bd.d)(), [nd, Ld] = (0, sd.j)(), [Pd, zd] = (0, sd.i)(), cd = (0, Wd.useRef)(!1), [jd, Dd] = (0, td.k)(), ed = (0, Ud.H)(jd), [Id, ld] = (0, Wd.useState)(null !== (dd = ed.searchQuery) && void 0 !== dd ? dd : ""), Cd = (0, Wd.useRef)(null), {
        searchQuery: Zd
      } = ed;
      (0, Wd.useEffect)((() => {
        ld(null !== Zd && void 0 !== Zd ? Zd : ""), Cd.current && (Cd.current.value = null !== Zd && void 0 !== Zd ? Zd : "")
      }), [Zd]);
      const [kd, fd] = (0, Wd.useState)(null), [Md, dO] = (0, Wd.useState)(!1), [OO, mO] = (0, Wd.useState)(!1), [WO, FO] = (0, Wd.useState)(0), RO = (0, Wd.useRef)(0), XO = JSON.stringify(ed), KO = (0, Ud.l)();

      function hO() {
        null !== KO ? (Jd(KO), Td.e.set({
          openEverythingMenuName: Kd.m.SETTINGS,
          openSettingsCategory: "Jq"
        })) : Jd("/")
      }

      function vO(dd) {
        Dd((Od => {
          (0, Ud.mb)(Od, {
            ...ed,
            pageNumber: 1,
            ...dd
          })
        }))
      }

      function QO() {
        const dd = Id.trim() || null;
        vO({
          searchQuery: dd,
          ...null !== dd && !cd.current && (0, Ud.p)(ed) && {
            withFeatures: [],
            withoutFeatures: []
          }
        })
      }(0, yd.d)(hO), (0, sd.e)(), (0, Wd.useEffect)((() => {
        if (Vd) return;
        const dd = ++RO.current,
          Od = JSON.parse(XO);
        dO(!0), mO(!1), async function(dd) {
          if ("mine" === dd.section) return {
            kind: "owned",
            packs: await pd.e.getOwnedShaderPacks(Sd)
          };
          const Od = "favourites" === dd.section,
            md = Od && (0, Ud.p)(dd),
            Wd = await pd.e.getShaderPacks(Sd, {
              sort: Od ? Ud.f : dd.sort,
              features: md ? [] : dd.withFeatures,
              withoutFeatures: md ? [] : dd.withoutFeatures,
              searchQuery: dd.searchQuery,
              pageNumber: dd.pageNumber,
              pageSize: rd,
              onlyFavourites: Od,
              banned: (0, Ud.r)(Sd) ? (0, Ud.d)(dd.banned) : void 0
            });
          return {
            kind: "listing",
            page: Wd
          }
        }(Od).then((Od => {
          RO.current === dd && fd(Od)
        })).catch((Od => {
          RO.current === dd && (console.error("Failed to get shader packs", Od), fd(null), mO(!0))
        })).finally((() => {
          RO.current === dd && dO(!1)
        }))
      }), [XO, Sd, Vd, WO]);
      const [tO, oO] = (0, Wd.useState)(null), NO = null !== (md = null === (Rd = ("listing" === (null === kd || void 0 === kd ? void 0 : kd.kind) ? kd.page.results : (null !== (Od = null === kd || void 0 === kd ? void 0 : kd.packs) && void 0 !== Od ? Od : []).flatMap((dd => dd.live ? [dd.live] : [])))[0]) || void 0 === Rd ? void 0 : Rd.baselineVersion) && void 0 !== md ? md : null;
      (0, Wd.useEffect)((() => {
        null !== NO && oO(NO)
      }), [NO]);
      const qO = "mine" === ed.section,
        HO = (0, Ud.r)(Sd),
        yO = dd => {
          "explore" !== ed.section && (dd.stopPropagation(), dd.preventDefault(), vO({
            section: "explore"
          }))
        };
      return (0, Bd.jsxs)("div", {
        className: "ShaderPackBrowse AnimFadeIn",
        children: [(0, Bd.jsx)(od.d, {
          onClick: hO,
          children: Ed(null === KO ? "homePage:backToGames" : "shaderPackListing:backToSettings")
        }), (0, Bd.jsxs)("div", {
          className: "ShaderPackBrowseHeader",
          children: [(0, Bd.jsxs)("div", {
            className: "ShaderPackBrowseHeaderRow",
            children: [(0, Bd.jsx)("h1", {
              className: "VisuallyHidden",
              children: Ed("shaderPackListing:title")
            }), (0, Bd.jsxs)("div", {
              className: "ShaderPackBrowseTabs",
              children: [(0, Bd.jsx)("div", {
                className: Xd()("ShaderPackBrowseSort", {
                  Active: "explore" === ed.section
                }),
                onMouseDownCapture: yO,
                onTouchEndCapture: yO,
                children: (0, Bd.jsx)(Nd.e, {
                  options: hd.v.map((dd => ({
                    value: dd,
                    label: Ed(Ud.eb[dd])
                  }))),
                  value: ed.sort,
                  onChange: dd => {
                    vO({
                      section: "explore",
                      sort: dd.value
                    })
                  }
                })
              }), Object.keys(Gd).map((dd => (0, Bd.jsx)(od.S, {
                active: ed.section === dd,
                onClick: () => {
                  vO({
                    section: dd
                  })
                },
                children: Ed(Gd[dd])
              }, dd)))]
            }), !qO && (0, Bd.jsx)("div", {
              className: "ShaderPackBrowseDivider"
            }), !qO && (0, Bd.jsxs)("div", {
              className: "ShaderPackBrowseSearch",
              children: [(0, Bd.jsx)("div", {
                className: "ShaderPackBrowseSearchIcon",
                children: (0, Bd.jsx)(vd.c, {
                  name: "magnifying-glass"
                })
              }), (0, Bd.jsx)(Hd.c, {
                className: "ShaderPackBrowseSearchInput",
                placeholderText: Ed("shaderPackListing:searchPlaceholder"),
                maxLength: hd.F,
                defaultValue: Id,
                domRef: Cd,
                onValueChange: ld,
                onEnter: QO
              }), (0, Bd.jsx)(od.g, {
                onClick: QO,
                children: Ed("general:search")
              })]
            }), !qO && (0, Bd.jsxs)(od.S, {
              className: Xd()("ShaderPackBrowseFilterToggle", {
                Open: Pd
              }),
              pressed: Pd,
              onClick: () => {
                zd(!Pd)
              },
              children: [Ed("shaderPackListing:filter"), " ", (0, Bd.jsx)(vd.c, {
                name: Pd ? "angle-up" : "angle-down"
              })]
            }), (0, Bd.jsx)("div", {
              className: "ShaderPackBrowseSpace"
            }), gd.featureFlags.settings.canUseShaderPacks && (0, Bd.jsxs)(od.m, {
              onClick: () => {
                Jd(Ud.ab)
              },
              children: [(0, Bd.jsx)(vd.c, {
                name: "upload"
              }), " ", Ed("shaderPackListing:publish")]
            })]
          }), !qO && Pd && (0, Bd.jsxs)("div", {
            className: "ShaderPackBrowseFeatures",
            children: [Ud.z.map((dd => {
              const Od = (0, Ud.i)(ed, dd),
                md = Ed(Ud.O[dd]);
              return (0, Bd.jsx)(od.S, {
                className: Xd()("ShaderPackBrowseFeature", {
                  Without: "without" === Od
                }),
                active: "with" === Od,
                pressed: null !== Od,
                onClick: () => {
                  cd.current = !0, vO((0, Ud.lb)(ed, dd))
                },
                children: (0, Bd.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureLabel",
                  children: [(0, Bd.jsxs)("span", {
                    className: "ShaderPackBrowseFeatureReserve",
                    children: [(0, Bd.jsx)(vd.c, {
                      name: "check"
                    }), " ", md]
                  }), (0, Bd.jsxs)("span", {
                    children: [null !== Od && (0, Bd.jsx)(vd.c, {
                      name: "with" === Od ? "check" : "xmark"
                    }), " ", md]
                  })]
                })
              }, dd)
            })), HO && (0, Bd.jsx)(od.S, {
              className: Xd()("ShaderPackBrowseFeature", {
                Without: "without" === ed.banned
              }),
              active: "with" === ed.banned,
              pressed: null !== ed.banned,
              onClick: () => {
                const dd = "without" === ed.banned && !cd.current && (0, Ud.p)(ed);
                vO({
                  banned: (0, Ud.D)(ed.banned),
                  ...dd && {
                    withFeatures: [],
                    withoutFeatures: []
                  }
                })
              },
              children: (0, Bd.jsxs)("span", {
                className: "ShaderPackBrowseFeatureLabel",
                children: [(0, Bd.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureReserve",
                  children: [(0, Bd.jsx)(vd.c, {
                    name: "check"
                  }), " BANNED"]
                }), (0, Bd.jsxs)("span", {
                  children: [null !== ed.banned && (0, Bd.jsx)(vd.c, {
                    name: "with" === ed.banned ? "check" : "xmark"
                  }), " BANNED"]
                })]
              })
            })]
          })]
        }), (!qO || null !== tO) && (0, Bd.jsx)("div", {
          className: "ShaderPackBrowseScenes",
          children: (0, Bd.jsx)(Ad.d, {
            selected: nd,
            onSelect: Ld,
            imageUrl: dd => null === tO ? null : (0, hd.n)(Yd.clientSideServerUrls.s3Url, tO, dd, "thumb")
          })
        }), (0, Bd.jsx)(ud, {
          results: kd,
          loading: Md,
          failed: OO,
          onRetry: () => {
            FO((dd => dd + 1))
          },
          view: ed,
          previewView: nd
        }), "listing" === (null === kd || void 0 === kd ? void 0 : kd.kind) && (0, Bd.jsx)(qd.e, {
          className: "ShaderPackBrowsePagination",
          page: kd.page.pageNumber,
          totalPages: kd.page.totalPages,
          onSetPage: dd => {
            Dd((Od => {
              (0, td.j)(Od, dd)
            }))
          },
          getPageHref: function(dd) {
            const Od = new URLSearchParams(jd);
            (0, td.j)(Od, dd);
            const md = Od.toString();
            return md ? `${xd.pathname}?${md}` : xd.pathname
          }
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);