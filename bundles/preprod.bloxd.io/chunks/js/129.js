export const id = 129;
export const ids = [129];
export const modules = {
  6690: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      default: () => Np
    });
    var Op = cp(62),
      op = cp(1543),
      Ip = cp(1049),
      Sp = cp.n(Ip),
      xp = cp(322),
      Lp = cp(6704),
      Yp = cp(1060),
      Dp = cp(1538),
      Ap = cp(4653),
      Pp = cp(1480),
      Wp = cp(3224),
      yp = cp(4656),
      Up = cp(1692),
      wp = cp(4648),
      vp = cp(1141),
      tp = cp(25),
      Hp = cp(1520),
      dp = cp(1211),
      ep = cp(104),
      jp = cp(1201),
      kp = cp(1361),
      mp = cp(1234),
      Rp = cp(6698),
      qp = cp(6712),
      Mp = cp(1112);

    function Cp(pp) {
      let {
        pack: ip,
        view: cp,
        favourite: Op,
        notice: op
      } = pp;
      const {
        width: Ip,
        height: xp
      } = Lp.u.thumb, {
        live: Ap
      } = ip;
      return (0, Mp.jsx)("div", {
        className: "ShaderPackCard",
        children: (0, Mp.jsxs)("div", {
          className: "ShaderPackCardTile",
          children: [(0, Mp.jsxs)(Dp.LinkPreserveSearch, {
            to: (0, Rp.V)(ip.packId),
            className: "ShaderPackCardLink",
            children: [Ap && (0, Mp.jsx)("img", {
              className: "ShaderPackCardImage",
              src: (0, Lp.x)(dp.clientSideServerUrls.s3Url, Ap, cp, "thumb"),
              width: Ip,
              height: xp,
              loading: "lazy",
              alt: "",
              draggable: !1
            }), Ap && (0, Mp.jsx)(qp.d, {
              item: Ap
            }), !Ap && (0, Mp.jsx)("div", {
              className: "ShaderPackCardImage ShaderPackCardImagePending",
              children: (0, Mp.jsx)(Yp.d, {
                name: "hourglass"
              })
            }), (0, Mp.jsxs)("div", {
              className: "ShaderPackCardText",
              children: [op && (0, Mp.jsx)("div", {
                className: Sp()("ShaderPackCardNotice", {
                  Warning: "warning" === op.tone
                }),
                children: op.text
              }), (0, Mp.jsx)("div", {
                className: "ShaderPackCardName SmallTextBold",
                children: ip.name
              })]
            })]
          }), Ap && (0, Mp.jsxs)("div", {
            className: "ShaderPackCardStats",
            children: [(0, Mp.jsxs)("div", {
              className: "ShaderPackCardUses SmallTextBold",
              children: [(0, Mp.jsx)(Yp.d, {
                name: "download"
              }), (0, mp.O)(Ap.downloads)]
            }), Op && (0, Mp.jsx)(Pp.x, {
              onClick: Op.onToggle,
              isLiked: !0 === Op.isFavourite,
              isLoading: null === Op.isFavourite
            })]
          })]
        })
      })
    }
    var Ep = cp(6716);

    function Xp(pp) {
      let {
        results: ip,
        loading: cp,
        failed: Op,
        onRetry: op,
        view: Ip,
        previewView: xp
      } = pp;
      const {
        t: Lp
      } = (0, jp.H)(), Yp = (0, Ep.i)(), Dp = Date.now(), Ap = null === ip ? 0 : "owned" === ip.kind ? ip.packs.length : ip.page.results.length;
      return (0, Mp.jsxs)("div", {
        className: Sp()("ShaderPackBrowseResults", {
          Loading: cp && null !== ip
        }),
        children: [cp && null === ip && (0, Mp.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: (0, Mp.jsx)(kp.c, {})
        }), Op && (0, Mp.jsxs)("div", {
          className: "ShaderPackBrowseMessage",
          children: [Lp("shaderPackListing:loadFailed"), (0, Mp.jsx)(Pp.f, {
            onClick: op,
            children: Lp("general:tryAgain")
          })]
        }), "listing" === (null === ip || void 0 === ip ? void 0 : ip.kind) && Ap > 0 && (0, Mp.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: ip.page.results.map((pp => (0, Mp.jsx)(Cp, {
            pack: {
              packId: pp.packId,
              name: pp.name,
              live: pp
            },
            view: xp,
            favourite: {
              isFavourite: Yp.isFavourite(pp.packId),
              onToggle: () => {
                Yp.toggle(pp.packId)
              }
            }
          }, pp.packId)))
        }), "owned" === (null === ip || void 0 === ip ? void 0 : ip.kind) && Ap > 0 && (0, Mp.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: ip.packs.map((pp => {
            var ip;
            return (0, Mp.jsx)(Cp, {
              pack: pp,
              view: xp,
              notice: pp.owner ? (0, Rp.S)(pp.owner, !(null === (ip = pp.live) || void 0 === ip || !ip.renderId), Dp, Lp)[0] : void 0
            }, pp.packId)
          }))
        }), null !== ip && 0 === Ap && (0, Mp.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: Lp(lp(Ip))
        })]
      })
    }

    function lp(pp) {
      return "mine" === pp.section ? "shaderPackListing:noOwnPacks" : (0, Rp.r)(pp) ? "general:noResults" : "favourites" === pp.section ? "shaderPackListing:noFavourites" : "general:noResults"
    }
    var Qp = cp(6733);
    const Jp = 24,
      Bp = {
        favourites: "general:favourites",
        mine: "shaderPackListing:mine"
      };

    function Np() {
      var pp, ip, cp, Ip;
      const {
        t: kp
      } = (0, jp.H)(), mp = (0, Dp.useNavigatePreserveSearch)(), qp = (0, op.r)(), {
        userContext: Cp,
        isUserContextUpdating: lp
      } = (0, vp.b)(), [Np, Tp] = (0, Ep.h)(), [fp, bp] = (0, Ep.d)(), hp = (0, Op.useRef)(!1), [ap, np] = (0, Ap.o)(), Fp = (0, Rp.C)(ap), [gp, Gp] = (0, Op.useState)(null !== (pp = Fp.searchQuery) && void 0 !== pp ? pp : ""), rp = (0, Op.useRef)(null), {
        searchQuery: Zp
      } = Fp;
      (0, Op.useEffect)((() => {
        Gp(null !== Zp && void 0 !== Zp ? Zp : ""), rp.current && (rp.current.value = null !== Zp && void 0 !== Zp ? Zp : "")
      }), [Zp]);
      const [zp, sp] = (0, Op.useState)(null), [Kp, Vp] = (0, Op.useState)(!1), [ii, ci] = (0, Op.useState)(!1), [Oi, oi] = (0, Op.useState)(0), Ii = (0, Op.useRef)(0), Si = JSON.stringify(Fp), xi = (0, Rp.k)();

      function Li() {
        null !== xi ? (mp(xi), tp.c.set({
          openEverythingMenuName: xp.n.SETTINGS,
          openSettingsCategory: "Dy"
        })) : mp("/")
      }

      function Yi(pp) {
        np((ip => {
          (0, Rp.eb)(ip, {
            ...Fp,
            pageNumber: 1,
            ...pp
          })
        }))
      }

      function Di() {
        const pp = gp.trim() || null;
        Yi({
          searchQuery: pp,
          ...null !== pp && !hp.current && (0, Rp.l)(Fp) && {
            withFeatures: [],
            withoutFeatures: []
          }
        })
      }(0, wp.e)(Li), (0, Ep.b)(), (0, Op.useEffect)((() => {
        if (lp) return;
        const pp = ++Ii.current,
          ip = JSON.parse(Si);
        Vp(!0), ci(!1), async function(pp) {
          if ("mine" === pp.section) return {
            kind: "owned",
            packs: await Hp.b.getOwnedShaderPacks(Cp)
          };
          const ip = "favourites" === pp.section,
            cp = ip && (0, Rp.l)(pp),
            Op = await Hp.b.getShaderPacks(Cp, {
              sort: ip ? Rp.d : pp.sort,
              features: cp ? [] : pp.withFeatures,
              withoutFeatures: cp ? [] : pp.withoutFeatures,
              searchQuery: pp.searchQuery,
              pageNumber: pp.pageNumber,
              pageSize: Jp,
              onlyFavourites: ip,
              banned: (0, Rp.n)(Cp) ? (0, Rp.b)(pp.banned) : void 0
            });
          return {
            kind: "listing",
            page: Op
          }
        }(ip).then((ip => {
          Ii.current === pp && sp(ip)
        })).catch((ip => {
          Ii.current === pp && (console.error("Failed to get shader packs", ip), sp(null), ci(!0))
        })).finally((() => {
          Ii.current === pp && Vp(!1)
        }))
      }), [Si, Cp, lp, Oi]);
      const [Ai, Pi] = (0, Op.useState)(null), Wi = null !== (cp = null === (Ip = ("listing" === (null === zp || void 0 === zp ? void 0 : zp.kind) ? zp.page.results : (null !== (ip = null === zp || void 0 === zp ? void 0 : zp.packs) && void 0 !== ip ? ip : []).flatMap((pp => pp.live ? [pp.live] : [])))[0]) || void 0 === Ip ? void 0 : Ip.baselineVersion) && void 0 !== cp ? cp : null;
      (0, Op.useEffect)((() => {
        null !== Wi && Pi(Wi)
      }), [Wi]);
      const yi = "mine" === Fp.section,
        Ui = (0, Rp.n)(Cp),
        wi = pp => {
          "explore" !== Fp.section && (pp.stopPropagation(), pp.preventDefault(), Yi({
            section: "explore"
          }))
        };
      return (0, Mp.jsxs)("div", {
        className: "ShaderPackBrowse AnimFadeIn",
        children: [(0, Mp.jsx)(Pp.d, {
          onClick: Li,
          children: kp(null === xi ? "homePage:backToGames" : "shaderPackListing:backToSettings")
        }), (0, Mp.jsxs)("div", {
          className: "ShaderPackBrowseHeader",
          children: [(0, Mp.jsxs)("div", {
            className: "ShaderPackBrowseHeaderRow",
            children: [(0, Mp.jsx)("h1", {
              className: "VisuallyHidden",
              children: kp("shaderPackListing:title")
            }), (0, Mp.jsxs)("div", {
              className: "ShaderPackBrowseTabs",
              children: [(0, Mp.jsx)("div", {
                className: Sp()("ShaderPackBrowseSort", {
                  Active: "explore" === Fp.section
                }),
                onMouseDownCapture: wi,
                onTouchEndCapture: wi,
                children: (0, Mp.jsx)(Wp.d, {
                  options: Lp.A.map((pp => ({
                    value: pp,
                    label: kp(Rp.Z[pp])
                  }))),
                  value: Fp.sort,
                  onChange: pp => {
                    Yi({
                      section: "explore",
                      sort: pp.value
                    })
                  }
                })
              }), Object.keys(Bp).map((pp => (0, Mp.jsx)(Pp.S, {
                active: Fp.section === pp,
                onClick: () => {
                  Yi({
                    section: pp
                  })
                },
                children: kp(Bp[pp])
              }, pp)))]
            }), !yi && (0, Mp.jsx)("div", {
              className: "ShaderPackBrowseDivider"
            }), !yi && (0, Mp.jsxs)("div", {
              className: "ShaderPackBrowseSearch",
              children: [(0, Mp.jsx)("div", {
                className: "ShaderPackBrowseSearchIcon",
                children: (0, Mp.jsx)(Yp.d, {
                  name: "magnifying-glass"
                })
              }), (0, Mp.jsx)(Up.c, {
                className: "ShaderPackBrowseSearchInput",
                placeholderText: kp("shaderPackListing:searchPlaceholder"),
                maxLength: Lp.P,
                defaultValue: gp,
                domRef: rp,
                onValueChange: Gp,
                onEnter: Di
              }), (0, Mp.jsx)(Pp.f, {
                onClick: Di,
                children: kp("general:search")
              })]
            }), !yi && (0, Mp.jsxs)(Pp.S, {
              className: Sp()("ShaderPackBrowseFilterToggle", {
                Open: fp
              }),
              pressed: fp,
              onClick: () => {
                bp(!fp)
              },
              children: [kp("shaderPackListing:filter"), " ", (0, Mp.jsx)(Yp.d, {
                name: fp ? "angle-up" : "angle-down"
              })]
            }), (0, Mp.jsx)("div", {
              className: "ShaderPackBrowseSpace"
            }), ep.featureFlags.settings.canUseShaderPacks && (0, Mp.jsxs)(Pp.o, {
              onClick: () => {
                mp(Rp.X)
              },
              children: [(0, Mp.jsx)(Yp.d, {
                name: "upload"
              }), " ", kp("shaderPackListing:publish")]
            })]
          }), !yi && fp && (0, Mp.jsxs)("div", {
            className: "ShaderPackBrowseFeatures",
            children: [Rp.w.map((pp => {
              const ip = (0, Rp.e)(Fp, pp),
                cp = kp(Rp.L[pp]);
              return (0, Mp.jsx)(Pp.S, {
                className: Sp()("ShaderPackBrowseFeature", {
                  Without: "without" === ip
                }),
                active: "with" === ip,
                pressed: null !== ip,
                onClick: () => {
                  hp.current = !0, Yi((0, Rp.bb)(Fp, pp))
                },
                children: (0, Mp.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureLabel",
                  children: [(0, Mp.jsxs)("span", {
                    className: "ShaderPackBrowseFeatureReserve",
                    children: [(0, Mp.jsx)(Yp.d, {
                      name: "check"
                    }), " ", cp]
                  }), (0, Mp.jsxs)("span", {
                    children: [null !== ip && (0, Mp.jsx)(Yp.d, {
                      name: "with" === ip ? "check" : "xmark"
                    }), " ", cp]
                  })]
                })
              }, pp)
            })), Ui && (0, Mp.jsx)(Pp.S, {
              className: Sp()("ShaderPackBrowseFeature", {
                Without: "without" === Fp.banned
              }),
              active: "with" === Fp.banned,
              pressed: null !== Fp.banned,
              onClick: () => {
                const pp = "without" === Fp.banned && !hp.current && (0, Rp.l)(Fp);
                Yi({
                  banned: (0, Rp.z)(Fp.banned),
                  ...pp && {
                    withFeatures: [],
                    withoutFeatures: []
                  }
                })
              },
              children: (0, Mp.jsxs)("span", {
                className: "ShaderPackBrowseFeatureLabel",
                children: [(0, Mp.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureReserve",
                  children: [(0, Mp.jsx)(Yp.d, {
                    name: "check"
                  }), " BANNED"]
                }), (0, Mp.jsxs)("span", {
                  children: [null !== Fp.banned && (0, Mp.jsx)(Yp.d, {
                    name: "with" === Fp.banned ? "check" : "xmark"
                  }), " BANNED"]
                })]
              })
            })]
          })]
        }), (!yi || null !== Ai) && (0, Mp.jsx)("div", {
          className: "ShaderPackBrowseScenes",
          children: (0, Mp.jsx)(Qp.e, {
            selected: Np,
            onSelect: Tp,
            imageUrl: pp => null === Ai ? null : (0, Lp.r)(dp.clientSideServerUrls.s3Url, Ai, pp, "thumb")
          })
        }), (0, Mp.jsx)(Xp, {
          results: zp,
          loading: Kp,
          failed: ii,
          onRetry: () => {
            oi((pp => pp + 1))
          },
          view: Fp,
          previewView: Np
        }), "listing" === (null === zp || void 0 === zp ? void 0 : zp.kind) && (0, Mp.jsx)(yp.d, {
          className: "ShaderPackBrowsePagination",
          page: zp.page.pageNumber,
          totalPages: zp.page.totalPages,
          onSetPage: pp => {
            np((ip => {
              (0, Ap.k)(ip, pp)
            }))
          },
          getPageHref: function(pp) {
            const ip = new URLSearchParams(ap);
            (0, Ap.k)(ip, pp);
            const cp = ip.toString();
            return cp ? `${qp.pathname}?${cp}` : qp.pathname
          }
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);