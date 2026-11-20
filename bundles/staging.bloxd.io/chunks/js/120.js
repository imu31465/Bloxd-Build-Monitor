export const id = 120;
export const ids = [120];
export const modules = {
  6119: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      default: () => Mz
    });
    var Fz = sz(65),
      Wz = sz(1493),
      Xz = sz(1020),
      Oz = sz.n(Xz),
      oz = sz(308),
      vz = sz(6129),
      Uz = sz(1036),
      Kz = sz(1483),
      uz = sz(4194),
      Nz = sz(1419),
      bz = sz(2862),
      wz = sz(4201),
      Dz = sz(1622),
      gz = sz(4191),
      Hz = sz(1116),
      Bz = sz(30),
      Pz = sz(1466),
      rz = sz(1191),
      Yz = sz(106),
      xz = sz(1173),
      mz = sz(1306),
      Jz = sz(1213),
      Iz = sz(6122),
      Cz = sz(6138),
      ez = sz(1087);

    function Zz(zz) {
      let {
        pack: tz,
        view: sz,
        favourite: Fz,
        notice: Wz
      } = zz;
      const {
        width: Xz,
        height: oz
      } = vz.q.thumb, {
        live: uz
      } = tz;
      return (0, ez.jsx)("div", {
        className: "ShaderPackCard",
        children: (0, ez.jsxs)("div", {
          className: "ShaderPackCardTile",
          children: [(0, ez.jsxs)(Kz.LinkPreserveSearch, {
            to: (0, Iz.jb)(tz.packId),
            className: "ShaderPackCardLink",
            children: [uz && (0, ez.jsx)("img", {
              className: "ShaderPackCardImage",
              src: (0, vz.r)(rz.clientSideServerUrls.s3Url, uz, sz, "thumb"),
              width: Xz,
              height: oz,
              loading: "lazy",
              alt: "",
              draggable: !1
            }), uz && (0, ez.jsx)(Cz.d, {
              item: uz
            }), !uz && (0, ez.jsx)("div", {
              className: "ShaderPackCardImage ShaderPackCardImagePending",
              children: (0, ez.jsx)(Uz.c, {
                name: "hourglass"
              })
            }), (0, ez.jsxs)("div", {
              className: "ShaderPackCardText",
              children: [Wz && (0, ez.jsx)("div", {
                className: Oz()("ShaderPackCardNotice", {
                  Warning: "warning" === Wz.tone
                }),
                children: Wz.text
              }), (0, ez.jsx)("div", {
                className: "ShaderPackCardName SmallTextBold",
                children: tz.name
              })]
            })]
          }), uz && (0, ez.jsxs)("div", {
            className: "ShaderPackCardStats",
            children: [(0, ez.jsxs)("div", {
              className: "ShaderPackCardUses SmallTextBold",
              children: [(0, ez.jsx)(Uz.c, {
                name: "download"
              }), (0, Jz.R)(uz.downloads)]
            }), Fz && (0, ez.jsx)(Nz.v, {
              onClick: Fz.onToggle,
              isLiked: !0 === Fz.isFavourite,
              isLoading: null === Fz.isFavourite
            })]
          })]
        })
      })
    }
    var Gz = sz(6143);

    function Tz(zz) {
      let {
        results: tz,
        loading: sz,
        failed: Fz,
        onRetry: Wz,
        view: Xz,
        previewView: oz
      } = zz;
      const {
        t: vz
      } = (0, xz.B)(), Uz = (0, Gz.g)(), Kz = Date.now(), uz = null === tz ? 0 : "owned" === tz.kind ? tz.packs.length : tz.page.results.length;
      return (0, ez.jsxs)("div", {
        className: Oz()("ShaderPackBrowseResults", {
          Loading: sz && null !== tz
        }),
        children: [sz && null === tz && (0, ez.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: (0, ez.jsx)(mz.d, {})
        }), Fz && (0, ez.jsxs)("div", {
          className: "ShaderPackBrowseMessage",
          children: [vz("shaderPackListing:loadFailed"), (0, ez.jsx)(Nz.h, {
            onClick: Wz,
            children: vz("general:tryAgain")
          })]
        }), "listing" === (null === tz || void 0 === tz ? void 0 : tz.kind) && uz > 0 && (0, ez.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: tz.page.results.map((zz => (0, ez.jsx)(Zz, {
            pack: {
              packId: zz.packId,
              name: zz.name,
              live: zz
            },
            view: oz,
            favourite: {
              isFavourite: Uz.isFavourite(zz.packId),
              onToggle: () => {
                Uz.toggle(zz.packId)
              }
            }
          }, zz.packId)))
        }), "owned" === (null === tz || void 0 === tz ? void 0 : tz.kind) && uz > 0 && (0, ez.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: tz.packs.map((zz => {
            var tz;
            return (0, ez.jsx)(Zz, {
              pack: zz,
              view: oz,
              notice: zz.owner ? (0, Iz.hb)(zz.owner, !(null === (tz = zz.live) || void 0 === tz || !tz.renderId), Kz, vz)[0] : void 0
            }, zz.packId)
          }))
        }), null !== tz && 0 === uz && (0, ez.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: vz(cz(Xz))
        })]
      })
    }

    function cz(zz) {
      return "mine" === zz.section ? "shaderPackListing:noOwnPacks" : (0, Iz.x)(zz) ? "general:noResults" : "favourites" === zz.section ? "shaderPackListing:noFavourites" : "general:noResults"
    }
    var jz = sz(6153);
    const Az = 24,
      yz = {
        favourites: "general:favourites",
        mine: "shaderPackListing:mine"
      };

    function Mz() {
      var zz, tz, sz, Xz;
      const {
        t: mz
      } = (0, xz.B)(), Jz = (0, Kz.useNavigatePreserveSearch)(), Cz = (0, Wz.s)(), {
        userContext: Zz,
        isUserContextUpdating: cz
      } = (0, Hz.b)(), [Mz, dz] = (0, Gz.f)(), [hz, Qz] = (0, Gz.e)(), kz = (0, Fz.useRef)(!1), [iz, Lz] = (0, uz.i)(), lz = (0, Iz.K)(iz), [nz, az] = (0, Fz.useState)(null !== (zz = lz.searchQuery) && void 0 !== zz ? zz : ""), qz = (0, Fz.useRef)(null), {
        searchQuery: Sz
      } = lz;
      (0, Fz.useEffect)((() => {
        az(null !== Sz && void 0 !== Sz ? Sz : ""), qz.current && (qz.current.value = null !== Sz && void 0 !== Sz ? Sz : "")
      }), [Sz]);
      const [Vz, Rz] = (0, Fz.useState)(null), [pz, fz] = (0, Fz.useState)(!1), [Ez, zt] = (0, Fz.useState)(!1), [tt, st] = (0, Fz.useState)(0), Ft = (0, Fz.useRef)(0), Wt = JSON.stringify(lz), Xt = (0, Iz.s)();

      function Ot() {
        null !== Xt ? (Jz(Xt), Bz.b.set({
          openEverythingMenuName: oz.r.SETTINGS,
          openSettingsCategory: "Cw"
        })) : Jz("/")
      }

      function ot(zz) {
        Lz((tz => {
          (0, Iz.wb)(tz, {
            ...lz,
            pageNumber: 1,
            ...zz
          })
        }))
      }

      function vt() {
        const zz = nz.trim() || null;
        ot({
          searchQuery: zz,
          ...null !== zz && !kz.current && (0, Iz.t)(lz) && {
            withFeatures: [],
            withoutFeatures: []
          }
        })
      }(0, gz.b)(Ot), (0, Gz.c)(), (0, Fz.useEffect)((() => {
        if (cz) return;
        const zz = ++Ft.current,
          tz = JSON.parse(Wt);
        fz(!0), zt(!1), async function(zz) {
          if ("mine" === zz.section) return {
            kind: "owned",
            packs: await Pz.d.getOwnedShaderPacks(Zz)
          };
          const tz = "favourites" === zz.section,
            sz = tz && (0, Iz.t)(zz),
            Fz = await Pz.d.getShaderPacks(Zz, {
              sort: tz ? Iz.h : zz.sort,
              features: sz ? [] : zz.withFeatures,
              withoutFeatures: sz ? [] : zz.withoutFeatures,
              searchQuery: zz.searchQuery,
              pageNumber: zz.pageNumber,
              pageSize: Az,
              onlyFavourites: tz,
              banned: (0, Iz.u)(Zz) ? (0, Iz.d)(zz.banned) : void 0
            });
          return {
            kind: "listing",
            page: Fz
          }
        }(tz).then((tz => {
          Ft.current === zz && Rz(tz)
        })).catch((tz => {
          Ft.current === zz && (console.error("Failed to get shader packs", tz), Rz(null), zt(!0))
        })).finally((() => {
          Ft.current === zz && fz(!1)
        }))
      }), [Wt, Zz, cz, tt]);
      const [Ut, Kt] = (0, Fz.useState)(null), ut = null !== (sz = null === (Xz = ("listing" === (null === Vz || void 0 === Vz ? void 0 : Vz.kind) ? Vz.page.results : (null !== (tz = null === Vz || void 0 === Vz ? void 0 : Vz.packs) && void 0 !== tz ? tz : []).flatMap((zz => zz.live ? [zz.live] : [])))[0]) || void 0 === Xz ? void 0 : Xz.baselineVersion) && void 0 !== sz ? sz : null;
      (0, Fz.useEffect)((() => {
        null !== ut && Kt(ut)
      }), [ut]);
      const Nt = "mine" === lz.section,
        bt = (0, Iz.u)(Zz),
        wt = zz => {
          "explore" !== lz.section && (zz.stopPropagation(), zz.preventDefault(), ot({
            section: "explore"
          }))
        };
      return (0, ez.jsxs)("div", {
        className: "ShaderPackBrowse AnimFadeIn",
        children: [(0, ez.jsx)(Nz.e, {
          onClick: Ot,
          children: mz(null === Xt ? "homePage:backToGames" : "shaderPackListing:backToSettings")
        }), (0, ez.jsxs)("div", {
          className: "ShaderPackBrowseHeader",
          children: [(0, ez.jsxs)("div", {
            className: "ShaderPackBrowseHeaderRow",
            children: [(0, ez.jsx)("h1", {
              className: "VisuallyHidden",
              children: mz("shaderPackListing:title")
            }), (0, ez.jsxs)("div", {
              className: "ShaderPackBrowseTabs",
              children: [(0, ez.jsx)("div", {
                className: Oz()("ShaderPackBrowseSort", {
                  Active: "explore" === lz.section
                }),
                onMouseDownCapture: wt,
                onTouchEndCapture: wt,
                children: (0, ez.jsx)(bz.d, {
                  options: vz.u.map((zz => ({
                    value: zz,
                    label: mz(Iz.mb[zz])
                  }))),
                  value: lz.sort,
                  onChange: zz => {
                    ot({
                      section: "explore",
                      sort: zz.value
                    })
                  }
                })
              }), Object.keys(yz).map((zz => (0, ez.jsx)(Nz.Q, {
                active: lz.section === zz,
                onClick: () => {
                  ot({
                    section: zz
                  })
                },
                children: mz(yz[zz])
              }, zz)))]
            }), !Nt && (0, ez.jsx)("div", {
              className: "ShaderPackBrowseDivider"
            }), !Nt && (0, ez.jsxs)("div", {
              className: "ShaderPackBrowseSearch",
              children: [(0, ez.jsx)("div", {
                className: "ShaderPackBrowseSearchIcon",
                children: (0, ez.jsx)(Uz.c, {
                  name: "magnifying-glass"
                })
              }), (0, ez.jsx)(Dz.d, {
                className: "ShaderPackBrowseSearchInput",
                placeholderText: mz("shaderPackListing:searchPlaceholder"),
                maxLength: vz.G,
                defaultValue: nz,
                domRef: qz,
                onValueChange: az,
                onEnter: vt
              }), (0, ez.jsx)(Nz.h, {
                onClick: vt,
                children: mz("general:search")
              })]
            }), !Nt && (0, ez.jsxs)(Nz.Q, {
              className: Oz()("ShaderPackBrowseFilterToggle", {
                Open: hz
              }),
              pressed: hz,
              onClick: () => {
                Qz(!hz)
              },
              children: [mz("shaderPackListing:filter"), " ", (0, ez.jsx)(Uz.c, {
                name: hz ? "angle-up" : "angle-down"
              })]
            }), (0, ez.jsx)("div", {
              className: "ShaderPackBrowseSpace"
            }), Yz.featureFlags.settings.canUseShaderPacks && (0, ez.jsxs)(Nz.p, {
              onClick: () => {
                Jz(Iz.kb)
              },
              children: [(0, ez.jsx)(Uz.c, {
                name: "upload"
              }), " ", mz("shaderPackListing:publish")]
            })]
          }), !Nt && hz && (0, ez.jsxs)("div", {
            className: "ShaderPackBrowseFeatures",
            children: [Iz.E.map((zz => {
              const tz = (0, Iz.l)(lz, zz),
                sz = mz(Iz.U[zz]);
              return (0, ez.jsx)(Nz.Q, {
                className: Oz()("ShaderPackBrowseFeature", {
                  Without: "without" === tz
                }),
                active: "with" === tz,
                pressed: null !== tz,
                onClick: () => {
                  kz.current = !0, ot((0, Iz.ub)(lz, zz))
                },
                children: (0, ez.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureLabel",
                  children: [(0, ez.jsxs)("span", {
                    className: "ShaderPackBrowseFeatureReserve",
                    children: [(0, ez.jsx)(Uz.c, {
                      name: "check"
                    }), " ", sz]
                  }), (0, ez.jsxs)("span", {
                    children: [null !== tz && (0, ez.jsx)(Uz.c, {
                      name: "with" === tz ? "check" : "xmark"
                    }), " ", sz]
                  })]
                })
              }, zz)
            })), bt && (0, ez.jsx)(Nz.Q, {
              className: Oz()("ShaderPackBrowseFeature", {
                Without: "without" === lz.banned
              }),
              active: "with" === lz.banned,
              pressed: null !== lz.banned,
              onClick: () => {
                const zz = "without" === lz.banned && !kz.current && (0, Iz.t)(lz);
                ot({
                  banned: (0, Iz.H)(lz.banned),
                  ...zz && {
                    withFeatures: [],
                    withoutFeatures: []
                  }
                })
              },
              children: (0, ez.jsxs)("span", {
                className: "ShaderPackBrowseFeatureLabel",
                children: [(0, ez.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureReserve",
                  children: [(0, ez.jsx)(Uz.c, {
                    name: "check"
                  }), " BANNED"]
                }), (0, ez.jsxs)("span", {
                  children: [null !== lz.banned && (0, ez.jsx)(Uz.c, {
                    name: "with" === lz.banned ? "check" : "xmark"
                  }), " BANNED"]
                })]
              })
            })]
          })]
        }), (!Nt || null !== Ut) && (0, ez.jsx)("div", {
          className: "ShaderPackBrowseScenes",
          children: (0, ez.jsx)(jz.d, {
            selected: Mz,
            onSelect: dz,
            imageUrl: zz => null === Ut ? null : (0, vz.m)(rz.clientSideServerUrls.s3Url, Ut, zz, "thumb")
          })
        }), (0, ez.jsx)(Tz, {
          results: Vz,
          loading: pz,
          failed: Ez,
          onRetry: () => {
            st((zz => zz + 1))
          },
          view: lz,
          previewView: Mz
        }), "listing" === (null === Vz || void 0 === Vz ? void 0 : Vz.kind) && (0, ez.jsx)(wz.d, {
          className: "ShaderPackBrowsePagination",
          page: Vz.page.pageNumber,
          totalPages: Vz.page.totalPages,
          onSetPage: zz => {
            Lz((tz => {
              (0, uz.g)(tz, zz)
            }))
          },
          getPageHref: function(zz) {
            const tz = new URLSearchParams(iz);
            (0, uz.g)(tz, zz);
            const sz = tz.toString();
            return sz ? `${Cz.pathname}?${sz}` : Cz.pathname
          }
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);