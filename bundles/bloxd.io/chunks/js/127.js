export const id = 127;
export const ids = [127];
export const modules = {
  6386: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      default: () => Ek
    });
    var Dk = ik(60),
      fk = ik(1496),
      Sk = ik(1021),
      bk = ik.n(Sk),
      rk = ik(302),
      Pk = ik(6396),
      mk = ik(1033),
      Mk = ik(1479),
      Kk = ik(4505),
      xk = ik(1410),
      nk = ik(3098),
      Uk = ik(4508),
      Hk = ik(1648),
      wk = ik(4496),
      lk = ik(1095),
      pk = ik(22),
      yk = ik(1459),
      Yk = ik(1177),
      Lk = ik(99),
      Ck = ik(1172),
      Ak = ik(1327),
      jk = ik(1207),
      sk = ik(6393),
      dk = ik(6400),
      Vk = ik(1066);

    function Fk(kk) {
      let {
        pack: ek,
        view: ik,
        favourite: Dk,
        notice: fk
      } = kk;
      const {
        width: Sk,
        height: rk
      } = Pk.x.thumb, {
        live: Kk
      } = ek;
      return (0, Vk.jsx)("div", {
        className: "ShaderPackCard",
        children: (0, Vk.jsxs)("div", {
          className: "ShaderPackCardTile",
          children: [(0, Vk.jsxs)(Mk.LinkPreserveSearch, {
            to: (0, sk.Y)(ek.packId),
            className: "ShaderPackCardLink",
            children: [Kk && (0, Vk.jsx)("img", {
              className: "ShaderPackCardImage",
              src: (0, Pk.y)(Yk.clientSideServerUrls.s3Url, Kk, ik, "thumb"),
              width: Sk,
              height: rk,
              loading: "lazy",
              alt: "",
              draggable: !1
            }), Kk && (0, Vk.jsx)(dk.e, {
              item: Kk
            }), !Kk && (0, Vk.jsx)("div", {
              className: "ShaderPackCardImage ShaderPackCardImagePending",
              children: (0, Vk.jsx)(mk.d, {
                name: "hourglass"
              })
            }), (0, Vk.jsxs)("div", {
              className: "ShaderPackCardText",
              children: [fk && (0, Vk.jsx)("div", {
                className: bk()("ShaderPackCardNotice", {
                  Warning: "warning" === fk.tone
                }),
                children: fk.text
              }), (0, Vk.jsx)("div", {
                className: "ShaderPackCardName SmallTextBold",
                children: ek.name
              })]
            })]
          }), Kk && (0, Vk.jsxs)("div", {
            className: "ShaderPackCardStats",
            children: [(0, Vk.jsxs)("div", {
              className: "ShaderPackCardUses SmallTextBold",
              children: [(0, Vk.jsx)(mk.d, {
                name: "download"
              }), (0, jk.Q)(Kk.downloads)]
            }), Dk && (0, Vk.jsx)(xk.x, {
              onClick: Dk.onToggle,
              isLiked: !0 === Dk.isFavourite,
              isLoading: null === Dk.isFavourite
            })]
          })]
        })
      })
    }
    var uk = ik(6406);

    function qk(kk) {
      let {
        results: ek,
        loading: ik,
        failed: Dk,
        onRetry: fk,
        view: Sk,
        previewView: rk
      } = kk;
      const {
        t: Pk
      } = (0, Ck.D)(), mk = (0, uk.i)(), Mk = Date.now(), Kk = null === ek ? 0 : "owned" === ek.kind ? ek.packs.length : ek.page.results.length;
      return (0, Vk.jsxs)("div", {
        className: bk()("ShaderPackBrowseResults", {
          Loading: ik && null !== ek
        }),
        children: [ik && null === ek && (0, Vk.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: (0, Vk.jsx)(Ak.d, {})
        }), Dk && (0, Vk.jsxs)("div", {
          className: "ShaderPackBrowseMessage",
          children: [Pk("shaderPackListing:loadFailed"), (0, Vk.jsx)(xk.f, {
            onClick: fk,
            children: Pk("general:tryAgain")
          })]
        }), "listing" === (null === ek || void 0 === ek ? void 0 : ek.kind) && Kk > 0 && (0, Vk.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: ek.page.results.map((kk => (0, Vk.jsx)(Fk, {
            pack: {
              packId: kk.packId,
              name: kk.name,
              live: kk
            },
            view: rk,
            favourite: {
              isFavourite: mk.isFavourite(kk.packId),
              onToggle: () => {
                mk.toggle(kk.packId)
              }
            }
          }, kk.packId)))
        }), "owned" === (null === ek || void 0 === ek ? void 0 : ek.kind) && Kk > 0 && (0, Vk.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: ek.packs.map((kk => {
            var ek;
            return (0, Vk.jsx)(Fk, {
              pack: kk,
              view: rk,
              notice: kk.owner ? (0, sk.V)(kk.owner, !(null === (ek = kk.live) || void 0 === ek || !ek.renderId), Mk, Pk)[0] : void 0
            }, kk.packId)
          }))
        }), null !== ek && 0 === Kk && (0, Vk.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: Pk(Ik(Sk))
        })]
      })
    }

    function Ik(kk) {
      return "mine" === kk.section ? "shaderPackListing:noOwnPacks" : (0, sk.B)(kk) ? "general:noResults" : "favourites" === kk.section ? "shaderPackListing:noFavourites" : "general:noResults"
    }
    var zk = ik(6421);
    const Qk = 24,
      vk = {
        favourites: "general:favourites",
        mine: "shaderPackListing:mine"
      };

    function Ek() {
      var kk, ek, ik, Sk;
      const {
        t: Ak
      } = (0, Ck.D)(), jk = (0, Mk.useNavigatePreserveSearch)(), dk = (0, fk.p)(), {
        userContext: Fk,
        isUserContextUpdating: Ik
      } = (0, lk.d)(), [Ek, hk] = (0, uk.h)(), [ak, Wk] = (0, uk.f)(), tk = (0, Dk.useRef)(!1), [Xk, Bk] = (0, Kk.o)(), ck = (0, sk.I)(Xk), [Tk, Zk] = (0, Dk.useState)(null !== (kk = ck.searchQuery) && void 0 !== kk ? kk : ""), Ok = (0, Dk.useRef)(null), {
        searchQuery: gk
      } = ck;
      (0, Dk.useEffect)((() => {
        Zk(null !== gk && void 0 !== gk ? gk : ""), Ok.current && (Ok.current.value = null !== gk && void 0 !== gk ? gk : "")
      }), [gk]);
      const [Gk, Nk] = (0, Dk.useState)(null), [Rk, Jk] = (0, Dk.useState)(!1), [ke, ee] = (0, Dk.useState)(!1), [ie, De] = (0, Dk.useState)(0), fe = (0, Dk.useRef)(0), Se = JSON.stringify(ck), be = (0, sk.q)();

      function re() {
        null !== be ? (jk(be), pk.b.set({
          openEverythingMenuName: rk.r.SETTINGS,
          openSettingsCategory: "AU"
        })) : jk("/")
      }

      function Pe(kk) {
        Bk((ek => {
          (0, sk.ob)(ek, {
            ...ck,
            pageNumber: 1,
            ...kk
          })
        }))
      }

      function me() {
        const kk = Tk.trim() || null;
        Pe({
          searchQuery: kk,
          ...null !== kk && !tk.current && (0, sk.u)(ck) && {
            withFeatures: [],
            withoutFeatures: []
          }
        })
      }(0, wk.b)(re), (0, uk.d)(), (0, Dk.useEffect)((() => {
        if (Ik) return;
        const kk = ++fe.current,
          ek = JSON.parse(Se);
        Jk(!0), ee(!1), async function(kk) {
          if ("mine" === kk.section) return {
            kind: "owned",
            packs: await yk.b.getOwnedShaderPacks(Fk)
          };
          const ek = "favourites" === kk.section,
            ik = ek && (0, sk.u)(kk),
            Dk = await yk.b.getShaderPacks(Fk, {
              sort: ek ? sk.f : kk.sort,
              features: ik ? [] : kk.withFeatures,
              withoutFeatures: ik ? [] : kk.withoutFeatures,
              searchQuery: kk.searchQuery,
              pageNumber: kk.pageNumber,
              pageSize: Qk,
              onlyFavourites: ek,
              banned: (0, sk.x)(Fk) ? (0, sk.c)(kk.banned) : void 0
            });
          return {
            kind: "listing",
            page: Dk
          }
        }(ek).then((ek => {
          fe.current === kk && Nk(ek)
        })).catch((ek => {
          fe.current === kk && (console.error("Failed to get shader packs", ek), Nk(null), ee(!0))
        })).finally((() => {
          fe.current === kk && Jk(!1)
        }))
      }), [Se, Fk, Ik, ie]);
      const [Me, Ke] = (0, Dk.useState)(null), xe = null !== (ik = null === (Sk = ("listing" === (null === Gk || void 0 === Gk ? void 0 : Gk.kind) ? Gk.page.results : (null !== (ek = null === Gk || void 0 === Gk ? void 0 : Gk.packs) && void 0 !== ek ? ek : []).flatMap((kk => kk.live ? [kk.live] : [])))[0]) || void 0 === Sk ? void 0 : Sk.baselineVersion) && void 0 !== ik ? ik : null;
      (0, Dk.useEffect)((() => {
        null !== xe && Ke(xe)
      }), [xe]);
      const ne = "mine" === ck.section,
        Ue = (0, sk.x)(Fk),
        He = kk => {
          "explore" !== ck.section && (kk.stopPropagation(), kk.preventDefault(), Pe({
            section: "explore"
          }))
        };
      return (0, Vk.jsxs)("div", {
        className: "ShaderPackBrowse AnimFadeIn",
        children: [(0, Vk.jsx)(xk.e, {
          onClick: re,
          children: Ak(null === be ? "homePage:backToGames" : "shaderPackListing:backToSettings")
        }), (0, Vk.jsxs)("div", {
          className: "ShaderPackBrowseHeader",
          children: [(0, Vk.jsxs)("div", {
            className: "ShaderPackBrowseHeaderRow",
            children: [(0, Vk.jsx)("h1", {
              className: "VisuallyHidden",
              children: Ak("shaderPackListing:title")
            }), (0, Vk.jsxs)("div", {
              className: "ShaderPackBrowseTabs",
              children: [(0, Vk.jsx)("div", {
                className: bk()("ShaderPackBrowseSort", {
                  Active: "explore" === ck.section
                }),
                onMouseDownCapture: He,
                onTouchEndCapture: He,
                children: (0, Vk.jsx)(nk.e, {
                  options: Pk.C.map((kk => ({
                    value: kk,
                    label: Ak(sk.eb[kk])
                  }))),
                  value: ck.sort,
                  onChange: kk => {
                    Pe({
                      section: "explore",
                      sort: kk.value
                    })
                  }
                })
              }), Object.keys(vk).map((kk => (0, Vk.jsx)(xk.X, {
                active: ck.section === kk,
                onClick: () => {
                  Pe({
                    section: kk
                  })
                },
                children: Ak(vk[kk])
              }, kk)))]
            }), !ne && (0, Vk.jsx)("div", {
              className: "ShaderPackBrowseDivider"
            }), !ne && (0, Vk.jsxs)("div", {
              className: "ShaderPackBrowseSearch",
              children: [(0, Vk.jsx)("div", {
                className: "ShaderPackBrowseSearchIcon",
                children: (0, Vk.jsx)(mk.d, {
                  name: "magnifying-glass"
                })
              }), (0, Vk.jsx)(Hk.b, {
                className: "ShaderPackBrowseSearchInput",
                placeholderText: Ak("shaderPackListing:searchPlaceholder"),
                maxLength: Pk.N,
                defaultValue: Tk,
                domRef: Ok,
                onValueChange: Zk,
                onEnter: me
              }), (0, Vk.jsx)(xk.f, {
                onClick: me,
                children: Ak("general:search")
              })]
            }), !ne && (0, Vk.jsxs)(xk.X, {
              className: bk()("ShaderPackBrowseFilterToggle", {
                Open: ak
              }),
              pressed: ak,
              onClick: () => {
                Wk(!ak)
              },
              children: [Ak("shaderPackListing:filter"), " ", (0, Vk.jsx)(mk.d, {
                name: ak ? "angle-up" : "angle-down"
              })]
            }), (0, Vk.jsx)("div", {
              className: "ShaderPackBrowseSpace"
            }), Lk.featureFlags.settings.canUseShaderPacks && (0, Vk.jsxs)(xk.r, {
              onClick: () => {
                jk(sk.ab)
              },
              children: [(0, Vk.jsx)(mk.d, {
                name: "upload"
              }), " ", Ak("shaderPackListing:publish")]
            })]
          }), !ne && ak && (0, Vk.jsxs)("div", {
            className: "ShaderPackBrowseFeatures",
            children: [sk.E.map((kk => {
              const ek = (0, sk.j)(ck, kk),
                ik = Ak(sk.N[kk]);
              return (0, Vk.jsx)(xk.X, {
                className: bk()("ShaderPackBrowseFeature", {
                  Without: "without" === ek
                }),
                active: "with" === ek,
                pressed: null !== ek,
                onClick: () => {
                  tk.current = !0, Pe((0, sk.lb)(ck, kk))
                },
                children: (0, Vk.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureLabel",
                  children: [(0, Vk.jsxs)("span", {
                    className: "ShaderPackBrowseFeatureReserve",
                    children: [(0, Vk.jsx)(mk.d, {
                      name: "check"
                    }), " ", ik]
                  }), (0, Vk.jsxs)("span", {
                    children: [null !== ek && (0, Vk.jsx)(mk.d, {
                      name: "with" === ek ? "check" : "xmark"
                    }), " ", ik]
                  })]
                })
              }, kk)
            })), Ue && (0, Vk.jsx)(xk.X, {
              className: bk()("ShaderPackBrowseFeature", {
                Without: "without" === ck.banned
              }),
              active: "with" === ck.banned,
              pressed: null !== ck.banned,
              onClick: () => {
                const kk = "without" === ck.banned && !tk.current && (0, sk.u)(ck);
                Pe({
                  banned: (0, sk.F)(ck.banned),
                  ...kk && {
                    withFeatures: [],
                    withoutFeatures: []
                  }
                })
              },
              children: (0, Vk.jsxs)("span", {
                className: "ShaderPackBrowseFeatureLabel",
                children: [(0, Vk.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureReserve",
                  children: [(0, Vk.jsx)(mk.d, {
                    name: "check"
                  }), " BANNED"]
                }), (0, Vk.jsxs)("span", {
                  children: [null !== ck.banned && (0, Vk.jsx)(mk.d, {
                    name: "with" === ck.banned ? "check" : "xmark"
                  }), " BANNED"]
                })]
              })
            })]
          })]
        }), (!ne || null !== Me) && (0, Vk.jsx)("div", {
          className: "ShaderPackBrowseScenes",
          children: (0, Vk.jsx)(zk.c, {
            selected: Ek,
            onSelect: hk,
            imageUrl: kk => null === Me ? null : (0, Pk.t)(Yk.clientSideServerUrls.s3Url, Me, kk, "thumb")
          })
        }), (0, Vk.jsx)(qk, {
          results: Gk,
          loading: Rk,
          failed: ke,
          onRetry: () => {
            De((kk => kk + 1))
          },
          view: ck,
          previewView: Ek
        }), "listing" === (null === Gk || void 0 === Gk ? void 0 : Gk.kind) && (0, Vk.jsx)(Uk.c, {
          className: "ShaderPackBrowsePagination",
          page: Gk.page.pageNumber,
          totalPages: Gk.page.totalPages,
          onSetPage: kk => {
            Bk((ek => {
              (0, Kk.n)(ek, kk)
            }))
          },
          getPageHref: function(kk) {
            const ek = new URLSearchParams(Xk);
            (0, Kk.n)(ek, kk);
            const ik = ek.toString();
            return ik ? `${dk.pathname}?${ik}` : dk.pathname
          }
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);