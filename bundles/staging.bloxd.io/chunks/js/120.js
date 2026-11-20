export const id = 120;
export const ids = [120];
export const modules = {
  6240: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      default: () => rk
    });
    var Rk = Bk(61),
      tk = Bk(1473),
      ak = Bk(1020),
      Xk = Bk.n(ak),
      bk = Bk(279),
      wk = Bk(6253),
      dk = Bk(1028),
      sk = Bk(1459),
      Vk = Bk(4299),
      Jk = Bk(1389),
      Ak = Bk(2926),
      ek = Bk(4302),
      yk = Bk(1620),
      fk = Bk(4291),
      mk = Bk(1096),
      Wk = Bk(22),
      vk = Bk(1441),
      ik = Bk(1154),
      Yk = Bk(98),
      Lk = Bk(1149),
      Ok = Bk(1288),
      Ek = Bk(1173),
      Sk = Bk(6245),
      Nk = Bk(6260),
      Hk = Bk(1069);

    function uk(kk) {
      let {
        pack: Fk,
        view: Bk,
        favourite: Rk,
        notice: tk
      } = kk;
      const {
        width: ak,
        height: bk
      } = wk.t.thumb, {
        live: Vk
      } = Fk;
      return (0, Hk.jsx)("div", {
        className: "ShaderPackCard",
        children: (0, Hk.jsxs)("div", {
          className: "ShaderPackCardTile",
          children: [(0, Hk.jsxs)(sk.LinkPreserveSearch, {
            to: (0, Sk.W)(Fk.packId),
            className: "ShaderPackCardLink",
            children: [Vk && (0, Hk.jsx)("img", {
              className: "ShaderPackCardImage",
              src: (0, wk.x)(ik.clientSideServerUrls.s3Url, Vk, Bk, "thumb"),
              width: ak,
              height: bk,
              loading: "lazy",
              alt: "",
              draggable: !1
            }), Vk && (0, Hk.jsx)(Nk.b, {
              item: Vk
            }), !Vk && (0, Hk.jsx)("div", {
              className: "ShaderPackCardImage ShaderPackCardImagePending",
              children: (0, Hk.jsx)(dk.d, {
                name: "hourglass"
              })
            }), (0, Hk.jsxs)("div", {
              className: "ShaderPackCardText",
              children: [tk && (0, Hk.jsx)("div", {
                className: Xk()("ShaderPackCardNotice", {
                  Warning: "warning" === tk.tone
                }),
                children: tk.text
              }), (0, Hk.jsx)("div", {
                className: "ShaderPackCardName SmallTextBold",
                children: Fk.name
              })]
            })]
          }), Vk && (0, Hk.jsxs)("div", {
            className: "ShaderPackCardStats",
            children: [(0, Hk.jsxs)("div", {
              className: "ShaderPackCardUses SmallTextBold",
              children: [(0, Hk.jsx)(dk.d, {
                name: "download"
              }), (0, Ek.R)(Vk.downloads)]
            }), Rk && (0, Hk.jsx)(Jk.y, {
              onClick: Rk.onToggle,
              isLiked: !0 === Rk.isFavourite,
              isLoading: null === Rk.isFavourite
            })]
          })]
        })
      })
    }
    var Mk = Bk(6264);

    function gk(kk) {
      let {
        results: Fk,
        loading: Bk,
        failed: Rk,
        onRetry: tk,
        view: ak,
        previewView: bk
      } = kk;
      const {
        t: wk
      } = (0, Lk.x)(), dk = (0, Mk.h)(), sk = Date.now(), Vk = null === Fk ? 0 : "owned" === Fk.kind ? Fk.packs.length : Fk.page.results.length;
      return (0, Hk.jsxs)("div", {
        className: Xk()("ShaderPackBrowseResults", {
          Loading: Bk && null !== Fk
        }),
        children: [Bk && null === Fk && (0, Hk.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: (0, Hk.jsx)(Ok.b, {})
        }), Rk && (0, Hk.jsxs)("div", {
          className: "ShaderPackBrowseMessage",
          children: [wk("shaderPackListing:loadFailed"), (0, Hk.jsx)(Jk.g, {
            onClick: tk,
            children: wk("general:tryAgain")
          })]
        }), "listing" === (null === Fk || void 0 === Fk ? void 0 : Fk.kind) && Vk > 0 && (0, Hk.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: Fk.page.results.map((kk => (0, Hk.jsx)(uk, {
            pack: {
              packId: kk.packId,
              name: kk.name,
              live: kk
            },
            view: bk,
            favourite: {
              isFavourite: dk.isFavourite(kk.packId),
              onToggle: () => {
                dk.toggle(kk.packId)
              }
            }
          }, kk.packId)))
        }), "owned" === (null === Fk || void 0 === Fk ? void 0 : Fk.kind) && Vk > 0 && (0, Hk.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: Fk.packs.map((kk => {
            var Fk;
            return (0, Hk.jsx)(uk, {
              pack: kk,
              view: bk,
              notice: kk.owner ? (0, Sk.U)(kk.owner, !(null === (Fk = kk.live) || void 0 === Fk || !Fk.renderId), sk, wk)[0] : void 0
            }, kk.packId)
          }))
        }), null !== Fk && 0 === Vk && (0, Hk.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: wk(Uk(ak))
        })]
      })
    }

    function Uk(kk) {
      return "mine" === kk.section ? "shaderPackListing:noOwnPacks" : (0, Sk.r)(kk) ? "general:noResults" : "favourites" === kk.section ? "shaderPackListing:noFavourites" : "general:noResults"
    }
    var ck = Bk(6273);
    const Gk = 24,
      Tk = {
        favourites: "general:favourites",
        mine: "shaderPackListing:mine"
      };

    function rk() {
      var kk, Fk, Bk, ak;
      const {
        t: Ok
      } = (0, Lk.x)(), Ek = (0, sk.useNavigatePreserveSearch)(), Nk = (0, tk.s)(), {
        userContext: uk,
        isUserContextUpdating: Uk
      } = (0, mk.e)(), [rk, Dk] = (0, Mk.g)(), [zk, Pk] = (0, Mk.f)(), hk = (0, Rk.useRef)(!1), [qk, Ck] = (0, Vk.o)(), Zk = (0, Sk.E)(qk), [pk, Kk] = (0, Rk.useState)(null !== (kk = Zk.searchQuery) && void 0 !== kk ? kk : ""), xk = (0, Rk.useRef)(null), {
        searchQuery: jk
      } = Zk;
      (0, Rk.useEffect)((() => {
        Kk(null !== jk && void 0 !== jk ? jk : ""), xk.current && (xk.current.value = null !== jk && void 0 !== jk ? jk : "")
      }), [jk]);
      const [lk, nk] = (0, Rk.useState)(null), [Ik, Qk] = (0, Rk.useState)(!1), [kF, FF] = (0, Rk.useState)(!1), [BF, RF] = (0, Rk.useState)(0), tF = (0, Rk.useRef)(0), aF = JSON.stringify(Zk), XF = (0, Sk.j)();

      function bF() {
        null !== XF ? (Ek(XF), Wk.c.set({
          openEverythingMenuName: bk.p.SETTINGS,
          openSettingsCategory: "ie"
        })) : Ek("/")
      }

      function wF(kk) {
        Ck((Fk => {
          (0, Sk.eb)(Fk, {
            ...Zk,
            pageNumber: 1,
            ...kk
          })
        }))
      }

      function dF() {
        const kk = pk.trim() || null;
        wF({
          searchQuery: kk,
          ...null !== kk && !hk.current && (0, Sk.m)(Zk) && {
            withFeatures: [],
            withoutFeatures: []
          }
        })
      }(0, fk.d)(bF), (0, Mk.d)(), (0, Rk.useEffect)((() => {
        if (Uk) return;
        const kk = ++tF.current,
          Fk = JSON.parse(aF);
        Qk(!0), FF(!1), async function(kk) {
          if ("mine" === kk.section) return {
            kind: "owned",
            packs: await vk.b.getOwnedShaderPacks(uk)
          };
          const Fk = "favourites" === kk.section,
            Bk = Fk && (0, Sk.m)(kk),
            Rk = await vk.b.getShaderPacks(uk, {
              sort: Fk ? Sk.e : kk.sort,
              features: Bk ? [] : kk.withFeatures,
              withoutFeatures: Bk ? [] : kk.withoutFeatures,
              searchQuery: kk.searchQuery,
              pageNumber: kk.pageNumber,
              pageSize: Gk,
              onlyFavourites: Fk,
              banned: (0, Sk.q)(uk) ? (0, Sk.b)(kk.banned) : void 0
            });
          return {
            kind: "listing",
            page: Rk
          }
        }(Fk).then((Fk => {
          tF.current === kk && nk(Fk)
        })).catch((Fk => {
          tF.current === kk && (console.error("Failed to get shader packs", Fk), nk(null), FF(!0))
        })).finally((() => {
          tF.current === kk && Qk(!1)
        }))
      }), [aF, uk, Uk, BF]);
      const [sF, VF] = (0, Rk.useState)(null), JF = null !== (Bk = null === (ak = ("listing" === (null === lk || void 0 === lk ? void 0 : lk.kind) ? lk.page.results : (null !== (Fk = null === lk || void 0 === lk ? void 0 : lk.packs) && void 0 !== Fk ? Fk : []).flatMap((kk => kk.live ? [kk.live] : [])))[0]) || void 0 === ak ? void 0 : ak.baselineVersion) && void 0 !== Bk ? Bk : null;
      (0, Rk.useEffect)((() => {
        null !== JF && VF(JF)
      }), [JF]);
      const AF = "mine" === Zk.section,
        eF = (0, Sk.q)(uk),
        yF = kk => {
          "explore" !== Zk.section && (kk.stopPropagation(), kk.preventDefault(), wF({
            section: "explore"
          }))
        };
      return (0, Hk.jsxs)("div", {
        className: "ShaderPackBrowse AnimFadeIn",
        children: [(0, Hk.jsx)(Jk.c, {
          onClick: bF,
          children: Ok(null === XF ? "homePage:backToGames" : "shaderPackListing:backToSettings")
        }), (0, Hk.jsxs)("div", {
          className: "ShaderPackBrowseHeader",
          children: [(0, Hk.jsxs)("div", {
            className: "ShaderPackBrowseHeaderRow",
            children: [(0, Hk.jsx)("h1", {
              className: "VisuallyHidden",
              children: Ok("shaderPackListing:title")
            }), (0, Hk.jsxs)("div", {
              className: "ShaderPackBrowseTabs",
              children: [(0, Hk.jsx)("div", {
                className: Xk()("ShaderPackBrowseSort", {
                  Active: "explore" === Zk.section
                }),
                onMouseDownCapture: yF,
                onTouchEndCapture: yF,
                children: (0, Hk.jsx)(Ak.c, {
                  options: wk.B.map((kk => ({
                    value: kk,
                    label: Ok(Sk.Z[kk])
                  }))),
                  value: Zk.sort,
                  onChange: kk => {
                    wF({
                      section: "explore",
                      sort: kk.value
                    })
                  }
                })
              }), Object.keys(Tk).map((kk => (0, Hk.jsx)(Jk.O, {
                active: Zk.section === kk,
                onClick: () => {
                  wF({
                    section: kk
                  })
                },
                children: Ok(Tk[kk])
              }, kk)))]
            }), !AF && (0, Hk.jsx)("div", {
              className: "ShaderPackBrowseDivider"
            }), !AF && (0, Hk.jsxs)("div", {
              className: "ShaderPackBrowseSearch",
              children: [(0, Hk.jsx)("div", {
                className: "ShaderPackBrowseSearchIcon",
                children: (0, Hk.jsx)(dk.d, {
                  name: "magnifying-glass"
                })
              }), (0, Hk.jsx)(yk.e, {
                className: "ShaderPackBrowseSearchInput",
                placeholderText: Ok("shaderPackListing:searchPlaceholder"),
                maxLength: wk.M,
                defaultValue: pk,
                domRef: xk,
                onValueChange: Kk,
                onEnter: dF
              }), (0, Hk.jsx)(Jk.g, {
                onClick: dF,
                children: Ok("general:search")
              })]
            }), !AF && (0, Hk.jsxs)(Jk.O, {
              className: Xk()("ShaderPackBrowseFilterToggle", {
                Open: zk
              }),
              pressed: zk,
              onClick: () => {
                Pk(!zk)
              },
              children: [Ok("shaderPackListing:filter"), " ", (0, Hk.jsx)(dk.d, {
                name: zk ? "angle-up" : "angle-down"
              })]
            }), (0, Hk.jsx)("div", {
              className: "ShaderPackBrowseSpace"
            }), Yk.featureFlags.settings.canUseShaderPacks && (0, Hk.jsxs)(Jk.o, {
              onClick: () => {
                Ek(Sk.Y)
              },
              children: [(0, Hk.jsx)(dk.d, {
                name: "upload"
              }), " ", Ok("shaderPackListing:publish")]
            })]
          }), !AF && zk && (0, Hk.jsxs)("div", {
            className: "ShaderPackBrowseFeatures",
            children: [Sk.z.map((kk => {
              const Fk = (0, Sk.f)(Zk, kk),
                Bk = Ok(Sk.L[kk]);
              return (0, Hk.jsx)(Jk.O, {
                className: Xk()("ShaderPackBrowseFeature", {
                  Without: "without" === Fk
                }),
                active: "with" === Fk,
                pressed: null !== Fk,
                onClick: () => {
                  hk.current = !0, wF((0, Sk.db)(Zk, kk))
                },
                children: (0, Hk.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureLabel",
                  children: [(0, Hk.jsxs)("span", {
                    className: "ShaderPackBrowseFeatureReserve",
                    children: [(0, Hk.jsx)(dk.d, {
                      name: "check"
                    }), " ", Bk]
                  }), (0, Hk.jsxs)("span", {
                    children: [null !== Fk && (0, Hk.jsx)(dk.d, {
                      name: "with" === Fk ? "check" : "xmark"
                    }), " ", Bk]
                  })]
                })
              }, kk)
            })), eF && (0, Hk.jsx)(Jk.O, {
              className: Xk()("ShaderPackBrowseFeature", {
                Without: "without" === Zk.banned
              }),
              active: "with" === Zk.banned,
              pressed: null !== Zk.banned,
              onClick: () => {
                const kk = "without" === Zk.banned && !hk.current && (0, Sk.m)(Zk);
                wF({
                  banned: (0, Sk.A)(Zk.banned),
                  ...kk && {
                    withFeatures: [],
                    withoutFeatures: []
                  }
                })
              },
              children: (0, Hk.jsxs)("span", {
                className: "ShaderPackBrowseFeatureLabel",
                children: [(0, Hk.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureReserve",
                  children: [(0, Hk.jsx)(dk.d, {
                    name: "check"
                  }), " BANNED"]
                }), (0, Hk.jsxs)("span", {
                  children: [null !== Zk.banned && (0, Hk.jsx)(dk.d, {
                    name: "with" === Zk.banned ? "check" : "xmark"
                  }), " BANNED"]
                })]
              })
            })]
          })]
        }), (!AF || null !== sF) && (0, Hk.jsx)("div", {
          className: "ShaderPackBrowseScenes",
          children: (0, Hk.jsx)(ck.d, {
            selected: rk,
            onSelect: Dk,
            imageUrl: kk => null === sF ? null : (0, wk.n)(ik.clientSideServerUrls.s3Url, sF, kk, "thumb")
          })
        }), (0, Hk.jsx)(gk, {
          results: lk,
          loading: Ik,
          failed: kF,
          onRetry: () => {
            RF((kk => kk + 1))
          },
          view: Zk,
          previewView: rk
        }), "listing" === (null === lk || void 0 === lk ? void 0 : lk.kind) && (0, Hk.jsx)(ek.c, {
          className: "ShaderPackBrowsePagination",
          page: lk.page.pageNumber,
          totalPages: lk.page.totalPages,
          onSetPage: kk => {
            Ck((Fk => {
              (0, Vk.l)(Fk, kk)
            }))
          },
          getPageHref: function(kk) {
            const Fk = new URLSearchParams(qk);
            (0, Vk.l)(Fk, kk);
            const Bk = Fk.toString();
            return Bk ? `${Nk.pathname}?${Bk}` : Nk.pathname
          }
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);