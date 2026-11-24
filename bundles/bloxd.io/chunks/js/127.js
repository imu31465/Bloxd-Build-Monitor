export const id = 127;
export const ids = [127];
export const modules = {
  6537: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      default: () => Uk
    });
    var Xk = Ik(58),
      Tk = Ik(1485),
      ik = Ik(1055),
      yk = Ik.n(ik),
      lk = Ik(318),
      ak = Ik(6544),
      qk = Ik(1066),
      Lk = Ik(1475),
      tk = Ik(4550),
      Zk = Ik(1406),
      jk = Ik(3065),
      ek = Ik(4556),
      wk = Ik(1617),
      Hk = Ik(4543),
      Jk = Ik(1118),
      xk = Ik(25),
      Pk = Ik(1453),
      Kk = Ik(1194),
      Qk = Ik(95),
      sk = Ik(1179),
      Vk = Ik(1318),
      zk = Ik(1217),
      Sk = Ik(6541),
      vk = Ik(6551),
      Ek = Ik(1096);

    function Ok(kk) {
      let {
        pack: Fk,
        view: Ik,
        favourite: Xk,
        notice: Tk
      } = kk;
      const {
        width: ik,
        height: lk
      } = ak.u.thumb, {
        live: tk
      } = Fk;
      return (0, Ek.jsx)("div", {
        className: "ShaderPackCard",
        children: (0, Ek.jsxs)("div", {
          className: "ShaderPackCardTile",
          children: [(0, Ek.jsxs)(Lk.LinkPreserveSearch, {
            to: (0, Sk.ab)(Fk.packId),
            className: "ShaderPackCardLink",
            children: [tk && (0, Ek.jsx)("img", {
              className: "ShaderPackCardImage",
              src: (0, ak.y)(Kk.clientSideServerUrls.s3Url, tk, Ik, "thumb"),
              width: ik,
              height: lk,
              loading: "lazy",
              alt: "",
              draggable: !1
            }), tk && (0, Ek.jsx)(vk.d, {
              item: tk
            }), !tk && (0, Ek.jsx)("div", {
              className: "ShaderPackCardImage ShaderPackCardImagePending",
              children: (0, Ek.jsx)(qk.e, {
                name: "hourglass"
              })
            }), (0, Ek.jsxs)("div", {
              className: "ShaderPackCardText",
              children: [Tk && (0, Ek.jsx)("div", {
                className: yk()("ShaderPackCardNotice", {
                  Warning: "warning" === Tk.tone
                }),
                children: Tk.text
              }), (0, Ek.jsx)("div", {
                className: "ShaderPackCardName SmallTextBold",
                children: Fk.name
              })]
            })]
          }), tk && (0, Ek.jsxs)("div", {
            className: "ShaderPackCardStats",
            children: [(0, Ek.jsxs)("div", {
              className: "ShaderPackCardUses SmallTextBold",
              children: [(0, Ek.jsx)(qk.e, {
                name: "download"
              }), (0, zk.Q)(tk.downloads)]
            }), Xk && (0, Ek.jsx)(Zk.t, {
              onClick: Xk.onToggle,
              isLiked: !0 === Xk.isFavourite,
              isLoading: null === Xk.isFavourite
            })]
          })]
        })
      })
    }
    var nk = Ik(6560);

    function Gk(kk) {
      let {
        results: Fk,
        loading: Ik,
        failed: Xk,
        onRetry: Tk,
        view: ik,
        previewView: lk
      } = kk;
      const {
        t: ak
      } = (0, sk.y)(), qk = (0, nk.i)(), Lk = Date.now(), tk = null === Fk ? 0 : "owned" === Fk.kind ? Fk.packs.length : Fk.page.results.length;
      return (0, Ek.jsxs)("div", {
        className: yk()("ShaderPackBrowseResults", {
          Loading: Ik && null !== Fk
        }),
        children: [Ik && null === Fk && (0, Ek.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: (0, Ek.jsx)(Vk.c, {})
        }), Xk && (0, Ek.jsxs)("div", {
          className: "ShaderPackBrowseMessage",
          children: [ak("shaderPackListing:loadFailed"), (0, Ek.jsx)(Zk.d, {
            onClick: Tk,
            children: ak("general:tryAgain")
          })]
        }), "listing" === (null === Fk || void 0 === Fk ? void 0 : Fk.kind) && tk > 0 && (0, Ek.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: Fk.page.results.map((kk => (0, Ek.jsx)(Ok, {
            pack: {
              packId: kk.packId,
              name: kk.name,
              live: kk
            },
            view: lk,
            favourite: {
              isFavourite: qk.isFavourite(kk.packId),
              onToggle: () => {
                qk.toggle(kk.packId)
              }
            }
          }, kk.packId)))
        }), "owned" === (null === Fk || void 0 === Fk ? void 0 : Fk.kind) && tk > 0 && (0, Ek.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: Fk.packs.map((kk => {
            var Fk;
            return (0, Ek.jsx)(Ok, {
              pack: kk,
              view: lk,
              notice: kk.owner ? (0, Sk.Z)(kk.owner, !(null === (Fk = kk.live) || void 0 === Fk || !Fk.renderId), Lk, ak)[0] : void 0
            }, kk.packId)
          }))
        }), null !== Fk && 0 === tk && (0, Ek.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: ak(pk(ik))
        })]
      })
    }

    function pk(kk) {
      return "mine" === kk.section ? "shaderPackListing:noOwnPacks" : (0, Sk.y)(kk) ? "general:noResults" : "favourites" === kk.section ? "shaderPackListing:noFavourites" : "general:noResults"
    }
    var uk = Ik(6569);
    const bk = 24,
      Rk = {
        favourites: "general:favourites",
        mine: "shaderPackListing:mine"
      };

    function Uk() {
      var kk, Fk, Ik, ik;
      const {
        t: Vk
      } = (0, sk.y)(), zk = (0, Lk.useNavigatePreserveSearch)(), vk = (0, Tk.q)(), {
        userContext: Ok,
        isUserContextUpdating: pk
      } = (0, Jk.d)(), [Uk, Ck] = (0, nk.h)(), [Nk, ck] = (0, nk.e)(), Wk = (0, Xk.useRef)(!1), [fk, Bk] = (0, tk.k)(), dk = (0, Sk.J)(fk), [Yk, Ak] = (0, Xk.useState)(null !== (kk = dk.searchQuery) && void 0 !== kk ? kk : ""), gk = (0, Xk.useRef)(null), {
        searchQuery: mk
      } = dk;
      (0, Xk.useEffect)((() => {
        Ak(null !== mk && void 0 !== mk ? mk : ""), gk.current && (gk.current.value = null !== mk && void 0 !== mk ? mk : "")
      }), [mk]);
      const [hk, rk] = (0, Xk.useState)(null), [Dk, Mk] = (0, Xk.useState)(!1), [kF, FF] = (0, Xk.useState)(!1), [IF, XF] = (0, Xk.useState)(0), TF = (0, Xk.useRef)(0), iF = JSON.stringify(dk), yF = (0, Sk.p)();

      function lF() {
        null !== yF ? (zk(yF), xk.d.set({
          openEverythingMenuName: lk.r.SETTINGS,
          openSettingsCategory: "ke"
        })) : zk("/")
      }

      function aF(kk) {
        Bk((Fk => {
          (0, Sk.ob)(Fk, {
            ...dk,
            pageNumber: 1,
            ...kk
          })
        }))
      }

      function qF() {
        const kk = Yk.trim() || null;
        aF({
          searchQuery: kk,
          ...null !== kk && !Wk.current && (0, Sk.r)(dk) && {
            withFeatures: [],
            withoutFeatures: []
          }
        })
      }(0, Hk.b)(lF), (0, nk.c)(), (0, Xk.useEffect)((() => {
        if (pk) return;
        const kk = ++TF.current,
          Fk = JSON.parse(iF);
        Mk(!0), FF(!1), async function(kk) {
          if ("mine" === kk.section) return {
            kind: "owned",
            packs: await Pk.e.getOwnedShaderPacks(Ok)
          };
          const Fk = "favourites" === kk.section,
            Ik = Fk && (0, Sk.r)(kk),
            Xk = await Pk.e.getShaderPacks(Ok, {
              sort: Fk ? Sk.i : kk.sort,
              features: Ik ? [] : kk.withFeatures,
              withoutFeatures: Ik ? [] : kk.withoutFeatures,
              searchQuery: kk.searchQuery,
              pageNumber: kk.pageNumber,
              pageSize: bk,
              onlyFavourites: Fk,
              banned: (0, Sk.u)(Ok) ? (0, Sk.e)(kk.banned) : void 0
            });
          return {
            kind: "listing",
            page: Xk
          }
        }(Fk).then((Fk => {
          TF.current === kk && rk(Fk)
        })).catch((Fk => {
          TF.current === kk && (console.error("Failed to get shader packs", Fk), rk(null), FF(!0))
        })).finally((() => {
          TF.current === kk && Mk(!1)
        }))
      }), [iF, Ok, pk, IF]);
      const [LF, tF] = (0, Xk.useState)(null), ZF = null !== (Ik = null === (ik = ("listing" === (null === hk || void 0 === hk ? void 0 : hk.kind) ? hk.page.results : (null !== (Fk = null === hk || void 0 === hk ? void 0 : hk.packs) && void 0 !== Fk ? Fk : []).flatMap((kk => kk.live ? [kk.live] : [])))[0]) || void 0 === ik ? void 0 : ik.baselineVersion) && void 0 !== Ik ? Ik : null;
      (0, Xk.useEffect)((() => {
        null !== ZF && tF(ZF)
      }), [ZF]);
      const jF = "mine" === dk.section,
        eF = (0, Sk.u)(Ok),
        wF = kk => {
          "explore" !== dk.section && (kk.stopPropagation(), kk.preventDefault(), aF({
            section: "explore"
          }))
        };
      return (0, Ek.jsxs)("div", {
        className: "ShaderPackBrowse AnimFadeIn",
        children: [(0, Ek.jsx)(Zk.c, {
          onClick: lF,
          children: Vk(null === yF ? "homePage:backToGames" : "shaderPackListing:backToSettings")
        }), (0, Ek.jsxs)("div", {
          className: "ShaderPackBrowseHeader",
          children: [(0, Ek.jsxs)("div", {
            className: "ShaderPackBrowseHeaderRow",
            children: [(0, Ek.jsx)("h1", {
              className: "VisuallyHidden",
              children: Vk("shaderPackListing:title")
            }), (0, Ek.jsxs)("div", {
              className: "ShaderPackBrowseTabs",
              children: [(0, Ek.jsx)("div", {
                className: yk()("ShaderPackBrowseSort", {
                  Active: "explore" === dk.section
                }),
                onMouseDownCapture: wF,
                onTouchEndCapture: wF,
                children: (0, Ek.jsx)(jk.e, {
                  options: ak.z.map((kk => ({
                    value: kk,
                    label: Vk(Sk.gb[kk])
                  }))),
                  value: dk.sort,
                  onChange: kk => {
                    aF({
                      section: "explore",
                      sort: kk.value
                    })
                  }
                })
              }), Object.keys(Rk).map((kk => (0, Ek.jsx)(Zk.Q, {
                active: dk.section === kk,
                onClick: () => {
                  aF({
                    section: kk
                  })
                },
                children: Vk(Rk[kk])
              }, kk)))]
            }), !jF && (0, Ek.jsx)("div", {
              className: "ShaderPackBrowseDivider"
            }), !jF && (0, Ek.jsxs)("div", {
              className: "ShaderPackBrowseSearch",
              children: [(0, Ek.jsx)("div", {
                className: "ShaderPackBrowseSearchIcon",
                children: (0, Ek.jsx)(qk.e, {
                  name: "magnifying-glass"
                })
              }), (0, Ek.jsx)(wk.c, {
                className: "ShaderPackBrowseSearchInput",
                placeholderText: Vk("shaderPackListing:searchPlaceholder"),
                maxLength: ak.N,
                defaultValue: Yk,
                domRef: gk,
                onValueChange: Ak,
                onEnter: qF
              }), (0, Ek.jsx)(Zk.d, {
                onClick: qF,
                children: Vk("general:search")
              })]
            }), !jF && (0, Ek.jsxs)(Zk.Q, {
              className: yk()("ShaderPackBrowseFilterToggle", {
                Open: Nk
              }),
              pressed: Nk,
              onClick: () => {
                ck(!Nk)
              },
              children: [Vk("shaderPackListing:filter"), " ", (0, Ek.jsx)(qk.e, {
                name: Nk ? "angle-up" : "angle-down"
              })]
            }), (0, Ek.jsx)("div", {
              className: "ShaderPackBrowseSpace"
            }), Qk.featureFlags.settings.canUseShaderPacks && (0, Ek.jsxs)(Zk.m, {
              onClick: () => {
                zk(Sk.db)
              },
              children: [(0, Ek.jsx)(qk.e, {
                name: "upload"
              }), " ", Vk("shaderPackListing:publish")]
            })]
          }), !jF && Nk && (0, Ek.jsxs)("div", {
            className: "ShaderPackBrowseFeatures",
            children: [Sk.E.map((kk => {
              const Fk = (0, Sk.k)(dk, kk),
                Ik = Vk(Sk.R[kk]);
              return (0, Ek.jsx)(Zk.Q, {
                className: yk()("ShaderPackBrowseFeature", {
                  Without: "without" === Fk
                }),
                active: "with" === Fk,
                pressed: null !== Fk,
                onClick: () => {
                  Wk.current = !0, aF((0, Sk.kb)(dk, kk))
                },
                children: (0, Ek.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureLabel",
                  children: [(0, Ek.jsxs)("span", {
                    className: "ShaderPackBrowseFeatureReserve",
                    children: [(0, Ek.jsx)(qk.e, {
                      name: "check"
                    }), " ", Ik]
                  }), (0, Ek.jsxs)("span", {
                    children: [null !== Fk && (0, Ek.jsx)(qk.e, {
                      name: "with" === Fk ? "check" : "xmark"
                    }), " ", Ik]
                  })]
                })
              }, kk)
            })), eF && (0, Ek.jsx)(Zk.Q, {
              className: yk()("ShaderPackBrowseFeature", {
                Without: "without" === dk.banned
              }),
              active: "with" === dk.banned,
              pressed: null !== dk.banned,
              onClick: () => {
                const kk = "without" === dk.banned && !Wk.current && (0, Sk.r)(dk);
                aF({
                  banned: (0, Sk.G)(dk.banned),
                  ...kk && {
                    withFeatures: [],
                    withoutFeatures: []
                  }
                })
              },
              children: (0, Ek.jsxs)("span", {
                className: "ShaderPackBrowseFeatureLabel",
                children: [(0, Ek.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureReserve",
                  children: [(0, Ek.jsx)(qk.e, {
                    name: "check"
                  }), " BANNED"]
                }), (0, Ek.jsxs)("span", {
                  children: [null !== dk.banned && (0, Ek.jsx)(qk.e, {
                    name: "with" === dk.banned ? "check" : "xmark"
                  }), " BANNED"]
                })]
              })
            })]
          })]
        }), (!jF || null !== LF) && (0, Ek.jsx)("div", {
          className: "ShaderPackBrowseScenes",
          children: (0, Ek.jsx)(uk.c, {
            selected: Uk,
            onSelect: Ck,
            imageUrl: kk => null === LF ? null : (0, ak.p)(Kk.clientSideServerUrls.s3Url, LF, kk, "thumb")
          })
        }), (0, Ek.jsx)(Gk, {
          results: hk,
          loading: Dk,
          failed: kF,
          onRetry: () => {
            XF((kk => kk + 1))
          },
          view: dk,
          previewView: Uk
        }), "listing" === (null === hk || void 0 === hk ? void 0 : hk.kind) && (0, Ek.jsx)(ek.e, {
          className: "ShaderPackBrowsePagination",
          page: hk.page.pageNumber,
          totalPages: hk.page.totalPages,
          onSetPage: kk => {
            Bk((Fk => {
              (0, tk.i)(Fk, kk)
            }))
          },
          getPageHref: function(kk) {
            const Fk = new URLSearchParams(fk);
            (0, tk.i)(Fk, kk);
            const Ik = Fk.toString();
            return Ik ? `${vk.pathname}?${Ik}` : vk.pathname
          }
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);