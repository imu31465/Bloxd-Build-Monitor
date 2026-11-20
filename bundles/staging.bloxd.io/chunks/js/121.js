export const id = 121;
export const ids = [121];
export const modules = {
  6414: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      default: () => Sq
    });
    var Yq = gq(57),
      lq = gq(1512),
      Oq = gq(1018),
      mq = gq.n(Oq),
      xq = gq(296),
      Aq = gq(6424),
      cq = gq(1025),
      uq = gq(1498),
      Bq = gq(4387),
      Wq = gq(1422),
      Nq = gq(3040),
      aq = gq(4393),
      Vq = gq(1659),
      dq = gq(4379),
      jq = gq(1101),
      Hq = gq(24),
      oq = gq(1477),
      Pq = gq(1195),
      Qq = gq(96),
      yq = gq(1183),
      tq = gq(1326),
      rq = gq(1214),
      vq = gq(6422),
      hq = gq(6428),
      nq = gq(1070);

    function bq(qq) {
      let {
        pack: Eq,
        view: gq,
        favourite: Yq,
        notice: lq
      } = qq;
      const {
        width: Oq,
        height: xq
      } = Aq.p.thumb, {
        live: Bq
      } = Eq;
      return (0, nq.jsx)("div", {
        className: "ShaderPackCard",
        children: (0, nq.jsxs)("div", {
          className: "ShaderPackCardTile",
          children: [(0, nq.jsxs)(uq.LinkPreserveSearch, {
            to: (0, vq.$)(Eq.packId),
            className: "ShaderPackCardLink",
            children: [Bq && (0, nq.jsx)("img", {
              className: "ShaderPackCardImage",
              src: (0, Aq.r)(Pq.clientSideServerUrls.s3Url, Bq, gq, "thumb"),
              width: Oq,
              height: xq,
              loading: "lazy",
              alt: "",
              draggable: !1
            }), Bq && (0, nq.jsx)(hq.e, {
              item: Bq
            }), !Bq && (0, nq.jsx)("div", {
              className: "ShaderPackCardImage ShaderPackCardImagePending",
              children: (0, nq.jsx)(cq.d, {
                name: "hourglass"
              })
            }), (0, nq.jsxs)("div", {
              className: "ShaderPackCardText",
              children: [lq && (0, nq.jsx)("div", {
                className: mq()("ShaderPackCardNotice", {
                  Warning: "warning" === lq.tone
                }),
                children: lq.text
              }), (0, nq.jsx)("div", {
                className: "ShaderPackCardName SmallTextBold",
                children: Eq.name
              })]
            })]
          }), Bq && (0, nq.jsxs)("div", {
            className: "ShaderPackCardStats",
            children: [(0, nq.jsxs)("div", {
              className: "ShaderPackCardUses SmallTextBold",
              children: [(0, nq.jsx)(cq.d, {
                name: "download"
              }), (0, rq.S)(Bq.downloads)]
            }), Yq && (0, nq.jsx)(Wq.x, {
              onClick: Yq.onToggle,
              isLiked: !0 === Yq.isFavourite,
              isLoading: null === Yq.isFavourite
            })]
          })]
        })
      })
    }
    var iq = gq(6431);

    function Zq(qq) {
      let {
        results: Eq,
        loading: gq,
        failed: Yq,
        onRetry: lq,
        view: Oq,
        previewView: xq
      } = qq;
      const {
        t: Aq
      } = (0, yq.v)(), cq = (0, iq.m)(), uq = Date.now(), Bq = null === Eq ? 0 : "owned" === Eq.kind ? Eq.packs.length : Eq.page.results.length;
      return (0, nq.jsxs)("div", {
        className: mq()("ShaderPackBrowseResults", {
          Loading: gq && null !== Eq
        }),
        children: [gq && null === Eq && (0, nq.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: (0, nq.jsx)(tq.e, {})
        }), Yq && (0, nq.jsxs)("div", {
          className: "ShaderPackBrowseMessage",
          children: [Aq("shaderPackListing:loadFailed"), (0, nq.jsx)(Wq.g, {
            onClick: lq,
            children: Aq("general:tryAgain")
          })]
        }), "listing" === (null === Eq || void 0 === Eq ? void 0 : Eq.kind) && Bq > 0 && (0, nq.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: Eq.page.results.map((qq => (0, nq.jsx)(bq, {
            pack: {
              packId: qq.packId,
              name: qq.name,
              live: qq
            },
            view: xq,
            favourite: {
              isFavourite: cq.isFavourite(qq.packId),
              onToggle: () => {
                cq.toggle(qq.packId)
              }
            }
          }, qq.packId)))
        }), "owned" === (null === Eq || void 0 === Eq ? void 0 : Eq.kind) && Bq > 0 && (0, nq.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: Eq.packs.map((qq => {
            var Eq;
            return (0, nq.jsx)(bq, {
              pack: qq,
              view: xq,
              notice: qq.owner ? (0, vq.X)(qq.owner, !(null === (Eq = qq.live) || void 0 === Eq || !Eq.renderId), uq, Aq)[0] : void 0
            }, qq.packId)
          }))
        }), null !== Eq && 0 === Bq && (0, nq.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: Aq(fq(Oq))
        })]
      })
    }

    function fq(qq) {
      return "mine" === qq.section ? "shaderPackListing:noOwnPacks" : (0, vq.r)(qq) ? "general:noResults" : "favourites" === qq.section ? "shaderPackListing:noFavourites" : "general:noResults"
    }
    var Mq = gq(6443);
    const Tq = 24,
      zq = {
        favourites: "general:favourites",
        mine: "shaderPackListing:mine"
      };

    function Sq() {
      var qq, Eq, gq, Oq;
      const {
        t: tq
      } = (0, yq.v)(), rq = (0, uq.useNavigatePreserveSearch)(), hq = (0, lq.q)(), {
        userContext: bq,
        isUserContextUpdating: fq
      } = (0, jq.c)(), [Sq, pq] = (0, iq.l)(), [Gq, Lq] = (0, iq.h)(), Jq = (0, Yq.useRef)(!1), [kq, Rq] = (0, Bq.k)(), Uq = (0, vq.B)(kq), [Fq, sq] = (0, Yq.useState)(null !== (qq = Uq.searchQuery) && void 0 !== qq ? qq : ""), Xq = (0, Yq.useRef)(null), {
        searchQuery: wq
      } = Uq;
      (0, Yq.useEffect)((() => {
        sq(null !== wq && void 0 !== wq ? wq : ""), Xq.current && (Xq.current.value = null !== wq && void 0 !== wq ? wq : "")
      }), [wq]);
      const [Kq, Cq] = (0, Yq.useState)(null), [Iq, eq] = (0, Yq.useState)(!1), [Dq, qE] = (0, Yq.useState)(!1), [EE, gE] = (0, Yq.useState)(0), YE = (0, Yq.useRef)(0), lE = JSON.stringify(Uq), OE = (0, vq.j)();

      function mE() {
        null !== OE ? (rq(OE), Hq.b.set({
          openEverythingMenuName: xq.p.SETTINGS,
          openSettingsCategory: "pN"
        })) : rq("/")
      }

      function xE(qq) {
        Rq((Eq => {
          (0, vq.ib)(Eq, {
            ...Uq,
            pageNumber: 1,
            ...qq
          })
        }))
      }

      function AE() {
        const qq = Fq.trim() || null;
        xE({
          searchQuery: qq,
          ...null !== qq && !Jq.current && (0, vq.m)(Uq) && {
            withFeatures: [],
            withoutFeatures: []
          }
        })
      }(0, dq.b)(mE), (0, iq.e)(), (0, Yq.useEffect)((() => {
        if (fq) return;
        const qq = ++YE.current,
          Eq = JSON.parse(lE);
        eq(!0), qE(!1), async function(qq) {
          if ("mine" === qq.section) return {
            kind: "owned",
            packs: await oq.e.getOwnedShaderPacks(bq)
          };
          const Eq = "favourites" === qq.section,
            gq = Eq && (0, vq.m)(qq),
            Yq = await oq.e.getShaderPacks(bq, {
              sort: Eq ? vq.c : qq.sort,
              features: gq ? [] : qq.withFeatures,
              withoutFeatures: gq ? [] : qq.withoutFeatures,
              searchQuery: qq.searchQuery,
              pageNumber: qq.pageNumber,
              pageSize: Tq,
              onlyFavourites: Eq,
              banned: (0, vq.p)(bq) ? (0, vq.b)(qq.banned) : void 0
            });
          return {
            kind: "listing",
            page: Yq
          }
        }(Eq).then((Eq => {
          YE.current === qq && Cq(Eq)
        })).catch((Eq => {
          YE.current === qq && (console.error("Failed to get shader packs", Eq), Cq(null), qE(!0))
        })).finally((() => {
          YE.current === qq && eq(!1)
        }))
      }), [lE, bq, fq, EE]);
      const [cE, uE] = (0, Yq.useState)(null), BE = null !== (gq = null === (Oq = ("listing" === (null === Kq || void 0 === Kq ? void 0 : Kq.kind) ? Kq.page.results : (null !== (Eq = null === Kq || void 0 === Kq ? void 0 : Kq.packs) && void 0 !== Eq ? Eq : []).flatMap((qq => qq.live ? [qq.live] : [])))[0]) || void 0 === Oq ? void 0 : Oq.baselineVersion) && void 0 !== gq ? gq : null;
      (0, Yq.useEffect)((() => {
        null !== BE && uE(BE)
      }), [BE]);
      const WE = "mine" === Uq.section,
        NE = (0, vq.p)(bq),
        aE = qq => {
          "explore" !== Uq.section && (qq.stopPropagation(), qq.preventDefault(), xE({
            section: "explore"
          }))
        };
      return (0, nq.jsxs)("div", {
        className: "ShaderPackBrowse AnimFadeIn",
        children: [(0, nq.jsx)(Wq.d, {
          onClick: mE,
          children: tq(null === OE ? "homePage:backToGames" : "shaderPackListing:backToSettings")
        }), (0, nq.jsxs)("div", {
          className: "ShaderPackBrowseHeader",
          children: [(0, nq.jsxs)("div", {
            className: "ShaderPackBrowseHeaderRow",
            children: [(0, nq.jsx)("h1", {
              className: "VisuallyHidden",
              children: tq("shaderPackListing:title")
            }), (0, nq.jsxs)("div", {
              className: "ShaderPackBrowseTabs",
              children: [(0, nq.jsx)("div", {
                className: mq()("ShaderPackBrowseSort", {
                  Active: "explore" === Uq.section
                }),
                onMouseDownCapture: aE,
                onTouchEndCapture: aE,
                children: (0, nq.jsx)(Nq.d, {
                  options: Aq.v.map((qq => ({
                    value: qq,
                    label: tq(vq.db[qq])
                  }))),
                  value: Uq.sort,
                  onChange: qq => {
                    xE({
                      section: "explore",
                      sort: qq.value
                    })
                  }
                })
              }), Object.keys(zq).map((qq => (0, nq.jsx)(Wq.Q, {
                active: Uq.section === qq,
                onClick: () => {
                  xE({
                    section: qq
                  })
                },
                children: tq(zq[qq])
              }, qq)))]
            }), !WE && (0, nq.jsx)("div", {
              className: "ShaderPackBrowseDivider"
            }), !WE && (0, nq.jsxs)("div", {
              className: "ShaderPackBrowseSearch",
              children: [(0, nq.jsx)("div", {
                className: "ShaderPackBrowseSearchIcon",
                children: (0, nq.jsx)(cq.d, {
                  name: "magnifying-glass"
                })
              }), (0, nq.jsx)(Vq.b, {
                className: "ShaderPackBrowseSearchInput",
                placeholderText: tq("shaderPackListing:searchPlaceholder"),
                maxLength: Aq.I,
                defaultValue: Fq,
                domRef: Xq,
                onValueChange: sq,
                onEnter: AE
              }), (0, nq.jsx)(Wq.g, {
                onClick: AE,
                children: tq("general:search")
              })]
            }), !WE && (0, nq.jsxs)(Wq.Q, {
              className: mq()("ShaderPackBrowseFilterToggle", {
                Open: Gq
              }),
              pressed: Gq,
              onClick: () => {
                Lq(!Gq)
              },
              children: [tq("shaderPackListing:filter"), " ", (0, nq.jsx)(cq.d, {
                name: Gq ? "angle-up" : "angle-down"
              })]
            }), (0, nq.jsx)("div", {
              className: "ShaderPackBrowseSpace"
            }), Qq.featureFlags.settings.canUseShaderPacks && (0, nq.jsxs)(Wq.p, {
              onClick: () => {
                rq(vq.ab)
              },
              children: [(0, nq.jsx)(cq.d, {
                name: "upload"
              }), " ", tq("shaderPackListing:publish")]
            })]
          }), !WE && Gq && (0, nq.jsxs)("div", {
            className: "ShaderPackBrowseFeatures",
            children: [vq.w.map((qq => {
              const Eq = (0, vq.f)(Uq, qq),
                gq = tq(vq.K[qq]);
              return (0, nq.jsx)(Wq.Q, {
                className: mq()("ShaderPackBrowseFeature", {
                  Without: "without" === Eq
                }),
                active: "with" === Eq,
                pressed: null !== Eq,
                onClick: () => {
                  Jq.current = !0, xE((0, vq.hb)(Uq, qq))
                },
                children: (0, nq.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureLabel",
                  children: [(0, nq.jsxs)("span", {
                    className: "ShaderPackBrowseFeatureReserve",
                    children: [(0, nq.jsx)(cq.d, {
                      name: "check"
                    }), " ", gq]
                  }), (0, nq.jsxs)("span", {
                    children: [null !== Eq && (0, nq.jsx)(cq.d, {
                      name: "with" === Eq ? "check" : "xmark"
                    }), " ", gq]
                  })]
                })
              }, qq)
            })), NE && (0, nq.jsx)(Wq.Q, {
              className: mq()("ShaderPackBrowseFeature", {
                Without: "without" === Uq.banned
              }),
              active: "with" === Uq.banned,
              pressed: null !== Uq.banned,
              onClick: () => {
                const qq = "without" === Uq.banned && !Jq.current && (0, vq.m)(Uq);
                xE({
                  banned: (0, vq.z)(Uq.banned),
                  ...qq && {
                    withFeatures: [],
                    withoutFeatures: []
                  }
                })
              },
              children: (0, nq.jsxs)("span", {
                className: "ShaderPackBrowseFeatureLabel",
                children: [(0, nq.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureReserve",
                  children: [(0, nq.jsx)(cq.d, {
                    name: "check"
                  }), " BANNED"]
                }), (0, nq.jsxs)("span", {
                  children: [null !== Uq.banned && (0, nq.jsx)(cq.d, {
                    name: "with" === Uq.banned ? "check" : "xmark"
                  }), " BANNED"]
                })]
              })
            })]
          })]
        }), (!WE || null !== cE) && (0, nq.jsx)("div", {
          className: "ShaderPackBrowseScenes",
          children: (0, nq.jsx)(Mq.c, {
            selected: Sq,
            onSelect: pq,
            imageUrl: qq => null === cE ? null : (0, Aq.m)(Pq.clientSideServerUrls.s3Url, cE, qq, "thumb")
          })
        }), (0, nq.jsx)(Zq, {
          results: Kq,
          loading: Iq,
          failed: Dq,
          onRetry: () => {
            gE((qq => qq + 1))
          },
          view: Uq,
          previewView: Sq
        }), "listing" === (null === Kq || void 0 === Kq ? void 0 : Kq.kind) && (0, nq.jsx)(aq.d, {
          className: "ShaderPackBrowsePagination",
          page: Kq.page.pageNumber,
          totalPages: Kq.page.totalPages,
          onSetPage: qq => {
            Rq((Eq => {
              (0, Bq.g)(Eq, qq)
            }))
          },
          getPageHref: function(qq) {
            const Eq = new URLSearchParams(kq);
            (0, Bq.g)(Eq, qq);
            const gq = Eq.toString();
            return gq ? `${hq.pathname}?${gq}` : hq.pathname
          }
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);