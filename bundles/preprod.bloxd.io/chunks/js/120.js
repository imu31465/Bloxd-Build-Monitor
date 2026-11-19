export const id = 120;
export const ids = [120];
export const modules = {
  6267: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      default: () => qz
    });
    var Ez = bz(56),
      nz = bz(1490),
      iz = bz(1038),
      lz = bz.n(iz),
      Mz = bz(316),
      tz = bz(6283),
      Hz = bz(1047),
      Oz = bz(1482),
      pz = bz(4313),
      dz = bz(1419),
      Fz = bz(2882),
      Zz = bz(4316),
      Rz = bz(1628),
      Kz = bz(4305),
      wz = bz(1114),
      Xz = bz(20),
      fz = bz(1473),
      sz = bz(1195),
      rz = bz(96),
      oz = bz(1181),
      Nz = bz(1305),
      vz = bz(1212),
      xz = bz(6274),
      Jz = bz(6286),
      Az = bz(1089);

    function Tz(zz) {
      let {
        pack: uz,
        view: bz,
        favourite: Ez,
        notice: nz
      } = zz;
      const {
        width: iz,
        height: Mz
      } = tz.m.thumb, {
        live: pz
      } = uz;
      return (0, Az.jsx)("div", {
        className: "ShaderPackCard",
        children: (0, Az.jsxs)("div", {
          className: "ShaderPackCardTile",
          children: [(0, Az.jsxs)(Oz.LinkPreserveSearch, {
            to: (0, xz.W)(uz.packId),
            className: "ShaderPackCardLink",
            children: [pz && (0, Az.jsx)("img", {
              className: "ShaderPackCardImage",
              src: (0, tz.q)(sz.clientSideServerUrls.s3Url, pz, bz, "thumb"),
              width: iz,
              height: Mz,
              loading: "lazy",
              alt: "",
              draggable: !1
            }), pz && (0, Az.jsx)(Jz.c, {
              item: pz
            }), !pz && (0, Az.jsx)("div", {
              className: "ShaderPackCardImage ShaderPackCardImagePending",
              children: (0, Az.jsx)(Hz.c, {
                name: "hourglass"
              })
            }), (0, Az.jsxs)("div", {
              className: "ShaderPackCardText",
              children: [nz && (0, Az.jsx)("div", {
                className: lz()("ShaderPackCardNotice", {
                  Warning: "warning" === nz.tone
                }),
                children: nz.text
              }), (0, Az.jsx)("div", {
                className: "ShaderPackCardName SmallTextBold",
                children: uz.name
              })]
            })]
          }), pz && (0, Az.jsxs)("div", {
            className: "ShaderPackCardStats",
            children: [(0, Az.jsxs)("div", {
              className: "ShaderPackCardUses SmallTextBold",
              children: [(0, Az.jsx)(Hz.c, {
                name: "download"
              }), (0, vz.T)(pz.downloads)]
            }), Ez && (0, Az.jsx)(dz.z, {
              onClick: Ez.onToggle,
              isLiked: !0 === Ez.isFavourite,
              isLoading: null === Ez.isFavourite
            })]
          })]
        })
      })
    }
    var Lz = bz(6289);

    function Pz(zz) {
      let {
        results: uz,
        loading: bz,
        failed: Ez,
        onRetry: nz,
        view: iz,
        previewView: Mz
      } = zz;
      const {
        t: tz
      } = (0, oz.F)(), Hz = (0, Lz.m)(), Oz = Date.now(), pz = null === uz ? 0 : "owned" === uz.kind ? uz.packs.length : uz.page.results.length;
      return (0, Az.jsxs)("div", {
        className: lz()("ShaderPackBrowseResults", {
          Loading: bz && null !== uz
        }),
        children: [bz && null === uz && (0, Az.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: (0, Az.jsx)(Nz.c, {})
        }), Ez && (0, Az.jsxs)("div", {
          className: "ShaderPackBrowseMessage",
          children: [tz("shaderPackListing:loadFailed"), (0, Az.jsx)(dz.f, {
            onClick: nz,
            children: tz("general:tryAgain")
          })]
        }), "listing" === (null === uz || void 0 === uz ? void 0 : uz.kind) && pz > 0 && (0, Az.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: uz.page.results.map((zz => (0, Az.jsx)(Tz, {
            pack: {
              packId: zz.packId,
              name: zz.name,
              live: zz
            },
            view: Mz,
            favourite: {
              isFavourite: Hz.isFavourite(zz.packId),
              onToggle: () => {
                Hz.toggle(zz.packId)
              }
            }
          }, zz.packId)))
        }), "owned" === (null === uz || void 0 === uz ? void 0 : uz.kind) && pz > 0 && (0, Az.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: uz.packs.map((zz => {
            var uz;
            return (0, Az.jsx)(Tz, {
              pack: zz,
              view: Mz,
              notice: zz.owner ? (0, xz.T)(zz.owner, !(null === (uz = zz.live) || void 0 === uz || !uz.renderId), Oz, tz)[0] : void 0
            }, zz.packId)
          }))
        }), null !== uz && 0 === pz && (0, Az.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: tz(Gz(iz))
        })]
      })
    }

    function Gz(zz) {
      return "mine" === zz.section ? "shaderPackListing:noOwnPacks" : (0, xz.u)(zz) ? "general:noResults" : "favourites" === zz.section ? "shaderPackListing:noFavourites" : "general:noResults"
    }
    var az = bz(6296);
    const Vz = 24,
      mz = {
        favourites: "general:favourites",
        mine: "shaderPackListing:mine"
      };

    function qz() {
      var zz, uz, bz, iz;
      const {
        t: Nz
      } = (0, oz.F)(), vz = (0, Oz.useNavigatePreserveSearch)(), Jz = (0, nz.v)(), {
        userContext: Tz,
        isUserContextUpdating: Gz
      } = (0, wz.c)(), [qz, hz] = (0, Lz.k)(), [Uz, cz] = (0, Lz.g)(), gz = (0, Ez.useRef)(!1), [Sz, yz] = (0, pz.n)(), Dz = (0, xz.F)(Sz), [Qz, Wz] = (0, Ez.useState)(null !== (zz = Dz.searchQuery) && void 0 !== zz ? zz : ""), ez = (0, Ez.useRef)(null), {
        searchQuery: jz
      } = Dz;
      (0, Ez.useEffect)((() => {
        Wz(null !== jz && void 0 !== jz ? jz : ""), ez.current && (ez.current.value = null !== jz && void 0 !== jz ? jz : "")
      }), [jz]);
      const [Iz, Bz] = (0, Ez.useState)(null), [Cz, Yz] = (0, Ez.useState)(!1), [kz, zu] = (0, Ez.useState)(!1), [uu, bu] = (0, Ez.useState)(0), Eu = (0, Ez.useRef)(0), nu = JSON.stringify(Dz), iu = (0, xz.m)();

      function lu() {
        null !== iu ? (vz(iu), Xz.e.set({
          openEverythingMenuName: Mz.r.SETTINGS,
          openSettingsCategory: "JZ"
        })) : vz("/")
      }

      function Mu(zz) {
        yz((uz => {
          (0, xz.gb)(uz, {
            ...Dz,
            pageNumber: 1,
            ...zz
          })
        }))
      }

      function tu() {
        const zz = Qz.trim() || null;
        Mu({
          searchQuery: zz,
          ...null !== zz && !gz.current && (0, xz.p)(Dz) && {
            withFeatures: [],
            withoutFeatures: []
          }
        })
      }(0, Kz.e)(lu), (0, Lz.e)(), (0, Ez.useEffect)((() => {
        if (Gz) return;
        const zz = ++Eu.current,
          uz = JSON.parse(nu);
        Yz(!0), zu(!1), async function(zz) {
          if ("mine" === zz.section) return {
            kind: "owned",
            packs: await fz.c.getOwnedShaderPacks(Tz)
          };
          const uz = "favourites" === zz.section,
            bz = uz && (0, xz.p)(zz),
            Ez = await fz.c.getShaderPacks(Tz, {
              sort: uz ? xz.f : zz.sort,
              features: bz ? [] : zz.withFeatures,
              withoutFeatures: bz ? [] : zz.withoutFeatures,
              searchQuery: zz.searchQuery,
              pageNumber: zz.pageNumber,
              pageSize: Vz,
              onlyFavourites: uz,
              banned: (0, xz.q)(Tz) ? (0, xz.e)(zz.banned) : void 0
            });
          return {
            kind: "listing",
            page: Ez
          }
        }(uz).then((uz => {
          Eu.current === zz && Bz(uz)
        })).catch((uz => {
          Eu.current === zz && (console.error("Failed to get shader packs", uz), Bz(null), zu(!0))
        })).finally((() => {
          Eu.current === zz && Yz(!1)
        }))
      }), [nu, Tz, Gz, uu]);
      const [Hu, Ou] = (0, Ez.useState)(null), pu = null !== (bz = null === (iz = ("listing" === (null === Iz || void 0 === Iz ? void 0 : Iz.kind) ? Iz.page.results : (null !== (uz = null === Iz || void 0 === Iz ? void 0 : Iz.packs) && void 0 !== uz ? uz : []).flatMap((zz => zz.live ? [zz.live] : [])))[0]) || void 0 === iz ? void 0 : iz.baselineVersion) && void 0 !== bz ? bz : null;
      (0, Ez.useEffect)((() => {
        null !== pu && Ou(pu)
      }), [pu]);
      const du = "mine" === Dz.section,
        Fu = (0, xz.q)(Tz),
        Zu = zz => {
          "explore" !== Dz.section && (zz.stopPropagation(), zz.preventDefault(), Mu({
            section: "explore"
          }))
        };
      return (0, Az.jsxs)("div", {
        className: "ShaderPackBrowse AnimFadeIn",
        children: [(0, Az.jsx)(dz.d, {
          onClick: lu,
          children: Nz(null === iu ? "homePage:backToGames" : "shaderPackListing:backToSettings")
        }), (0, Az.jsxs)("div", {
          className: "ShaderPackBrowseHeader",
          children: [(0, Az.jsxs)("div", {
            className: "ShaderPackBrowseHeaderRow",
            children: [(0, Az.jsx)("h1", {
              className: "VisuallyHidden",
              children: Nz("shaderPackListing:title")
            }), (0, Az.jsxs)("div", {
              className: "ShaderPackBrowseTabs",
              children: [(0, Az.jsx)("div", {
                className: lz()("ShaderPackBrowseSort", {
                  Active: "explore" === Dz.section
                }),
                onMouseDownCapture: Zu,
                onTouchEndCapture: Zu,
                children: (0, Az.jsx)(Fz.d, {
                  options: tz.u.map((zz => ({
                    value: zz,
                    label: Nz(xz.bb[zz])
                  }))),
                  value: Dz.sort,
                  onChange: zz => {
                    Mu({
                      section: "explore",
                      sort: zz.value
                    })
                  }
                })
              }), Object.keys(mz).map((zz => (0, Az.jsx)(dz.V, {
                active: Dz.section === zz,
                onClick: () => {
                  Mu({
                    section: zz
                  })
                },
                children: Nz(mz[zz])
              }, zz)))]
            }), !du && (0, Az.jsx)("div", {
              className: "ShaderPackBrowseDivider"
            }), !du && (0, Az.jsxs)("div", {
              className: "ShaderPackBrowseSearch",
              children: [(0, Az.jsx)("div", {
                className: "ShaderPackBrowseSearchIcon",
                children: (0, Az.jsx)(Hz.c, {
                  name: "magnifying-glass"
                })
              }), (0, Az.jsx)(Rz.d, {
                className: "ShaderPackBrowseSearchInput",
                placeholderText: Nz("shaderPackListing:searchPlaceholder"),
                maxLength: tz.G,
                defaultValue: Qz,
                domRef: ez,
                onValueChange: Wz,
                onEnter: tu
              }), (0, Az.jsx)(dz.f, {
                onClick: tu,
                children: Nz("general:search")
              })]
            }), !du && (0, Az.jsxs)(dz.V, {
              className: lz()("ShaderPackBrowseFilterToggle", {
                Open: Uz
              }),
              pressed: Uz,
              onClick: () => {
                cz(!Uz)
              },
              children: [Nz("shaderPackListing:filter"), " ", (0, Az.jsx)(Hz.c, {
                name: Uz ? "angle-up" : "angle-down"
              })]
            }), (0, Az.jsx)("div", {
              className: "ShaderPackBrowseSpace"
            }), rz.featureFlags.settings.canUseShaderPacks && (0, Az.jsxs)(dz.q, {
              onClick: () => {
                vz(xz._)
              },
              children: [(0, Az.jsx)(Hz.c, {
                name: "upload"
              }), " ", Nz("shaderPackListing:publish")]
            })]
          }), !du && Uz && (0, Az.jsxs)("div", {
            className: "ShaderPackBrowseFeatures",
            children: [xz.z.map((zz => {
              const uz = (0, xz.h)(Dz, zz),
                bz = Nz(xz.M[zz]);
              return (0, Az.jsx)(dz.V, {
                className: lz()("ShaderPackBrowseFeature", {
                  Without: "without" === uz
                }),
                active: "with" === uz,
                pressed: null !== uz,
                onClick: () => {
                  gz.current = !0, Mu((0, xz.eb)(Dz, zz))
                },
                children: (0, Az.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureLabel",
                  children: [(0, Az.jsxs)("span", {
                    className: "ShaderPackBrowseFeatureReserve",
                    children: [(0, Az.jsx)(Hz.c, {
                      name: "check"
                    }), " ", bz]
                  }), (0, Az.jsxs)("span", {
                    children: [null !== uz && (0, Az.jsx)(Hz.c, {
                      name: "with" === uz ? "check" : "xmark"
                    }), " ", bz]
                  })]
                })
              }, zz)
            })), Fu && (0, Az.jsx)(dz.V, {
              className: lz()("ShaderPackBrowseFeature", {
                Without: "without" === Dz.banned
              }),
              active: "with" === Dz.banned,
              pressed: null !== Dz.banned,
              onClick: () => {
                const zz = "without" === Dz.banned && !gz.current && (0, xz.p)(Dz);
                Mu({
                  banned: (0, xz.D)(Dz.banned),
                  ...zz && {
                    withFeatures: [],
                    withoutFeatures: []
                  }
                })
              },
              children: (0, Az.jsxs)("span", {
                className: "ShaderPackBrowseFeatureLabel",
                children: [(0, Az.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureReserve",
                  children: [(0, Az.jsx)(Hz.c, {
                    name: "check"
                  }), " BANNED"]
                }), (0, Az.jsxs)("span", {
                  children: [null !== Dz.banned && (0, Az.jsx)(Hz.c, {
                    name: "with" === Dz.banned ? "check" : "xmark"
                  }), " BANNED"]
                })]
              })
            })]
          })]
        }), (!du || null !== Hu) && (0, Az.jsx)("div", {
          className: "ShaderPackBrowseScenes",
          children: (0, Az.jsx)(az.d, {
            selected: qz,
            onSelect: hz,
            imageUrl: zz => null === Hu ? null : (0, tz.i)(sz.clientSideServerUrls.s3Url, Hu, zz, "thumb")
          })
        }), (0, Az.jsx)(Pz, {
          results: Iz,
          loading: Cz,
          failed: kz,
          onRetry: () => {
            bu((zz => zz + 1))
          },
          view: Dz,
          previewView: qz
        }), "listing" === (null === Iz || void 0 === Iz ? void 0 : Iz.kind) && (0, Az.jsx)(Zz.c, {
          className: "ShaderPackBrowsePagination",
          page: Iz.page.pageNumber,
          totalPages: Iz.page.totalPages,
          onSetPage: zz => {
            yz((uz => {
              (0, pz.m)(uz, zz)
            }))
          },
          getPageHref: function(zz) {
            const uz = new URLSearchParams(Sz);
            (0, pz.m)(uz, zz);
            const bz = uz.toString();
            return bz ? `${Jz.pathname}?${bz}` : Jz.pathname
          }
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);