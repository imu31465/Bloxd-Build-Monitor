export const id = 99;
export const ids = [99];
export const modules = {
  4539: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Nz
    });
    var Fz = sz(1020),
      Wz = sz.n(Fz),
      Xz = sz(1036),
      Oz = sz(1306),
      oz = sz(3169),
      vz = sz(133),
      Uz = sz(3215),
      Kz = sz(3202),
      uz = sz(1087);

    function Nz(zz) {
      let {
        game: tz
      } = zz;
      const sz = (0, vz.p)() ? "large" : "small",
        Fz = (0, Uz.e)(tz, sz),
        Nz = (0, oz.e)(Fz),
        bz = void 0 !== Nz.blurhash;
      return (0, uz.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [Nz.isLoading && !bz && (0, uz.jsx)(Oz.d, {
          loaderType: "Secondary"
        }), !Nz.failed && (null !== Nz.src || bz) && (0, uz.jsx)("div", {
          className: Wz()("SchematicImage", Kz.h, {
            SchematicImageFadeIn: Nz.fadeIn && !bz
          }),
          style: (0, Kz.f)(Nz),
          children: (0, uz.jsx)(Kz.d, {
            image: Nz
          })
        }), Nz.failed && (0, uz.jsx)("div", {
          className: "SchematicImageError",
          children: (0, uz.jsx)(Xz.c, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  4527: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      default: () => Iz
    });
    sz(4531);
    var Fz = sz(65),
      Wz = sz(1020),
      Xz = sz.n(Wz),
      Oz = sz(308),
      oz = sz(1001),
      vz = sz(1213),
      Uz = sz(1173),
      Kz = sz(1116),
      uz = sz(1466),
      Nz = sz(4539),
      bz = sz(1419),
      wz = sz(4542),
      Dz = sz(1306),
      gz = sz(1483),
      Hz = sz(4287),
      Bz = sz(1036),
      Pz = sz(982),
      rz = sz(2353),
      Yz = sz(4545),
      xz = sz(1506),
      mz = sz(1087);

    function Jz() {
      const {
        t: zz
      } = (0, Uz.B)(), tz = (0, gz.useNavigatePreserveSearch)(), sz = (0, rz.k)(), Wz = (0, Fz.useMemo)((() => [...Pz.d].sort(((tz, Fz) => {
        var Wz, Xz;
        const Oz = (null !== (Wz = (0, rz.c)(Fz, sz)) && void 0 !== Wz ? Wz : 0) - (null !== (Xz = (0, rz.c)(tz, sz)) && void 0 !== Xz ? Xz : 0);
        return 0 !== Oz ? Oz : (0, xz.m)(tz, zz).localeCompare((0, xz.m)(Fz, zz))
      }))), [sz, zz]);
      return (0, mz.jsxs)(mz.Fragment, {
        children: [(0, mz.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, mz.jsx)("h1", {
            className: "StudioPageTitle",
            children: zz("studio:firstPartyGames")
          })
        }), (0, mz.jsx)(wz.c, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: zz("general:game")
          }, {
            key: "ccu",
            header: zz("studio:metricCcu")
          }],
          rows: Wz,
          getRowKey: zz => zz,
          renderRow: Fz => {
            var Wz;
            return (0, mz.jsxs)("tr", {
              onClick: () => {
                tz((0, xz.n)((0, oz.e)(Fz, !0)))
              },
              children: [(0, mz.jsx)("td", {
                children: (0, mz.jsx)(Yz.f, {
                  thumbnail: (0, mz.jsx)(Yz.d, {
                    game: Fz
                  }),
                  name: (0, xz.m)(Fz, zz)
                })
              }), (0, mz.jsx)("td", {
                children: (0, vz.R)(null !== (Wz = (0, rz.c)(Fz, sz)) && void 0 !== Wz ? Wz : 0)
              })]
            })
          }
        })]
      })
    }

    function Iz() {
      const {
        t: zz
      } = (0, Uz.B)(), tz = (0, gz.useNavigatePreserveSearch)(), {
        userContext: sz,
        isUserContextUpdating: Wz
      } = (0, Kz.b)(), {
        isCreating: Pz,
        create: rz
      } = (0, Hz.e)(), [Iz, Cz] = (0, Fz.useState)(null), [ez, Zz] = (0, Fz.useState)(null), [Gz, Tz] = (0, Fz.useState)(!1);
      (0, Fz.useEffect)((() => {
        Wz || (Tz(!1), uz.d.getPublishedGamePreviews(sz, {
          searchQuery: null,
          pageNumber: 1,
          pageSize: 50,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !0,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: [],
          upAndComing: !1
        }).then((zz => {
          Cz({
            ...zz,
            results: (0, Oz.ab)(zz.results)
          })
        })).catch((zz => {
          console.error("Failed to get owned published games", zz), Tz(!0)
        })), uz.d.getOwnedUnpublishedGames(sz).then((zz => {
          Zz(zz)
        })).catch((zz => {
          console.error("Failed to get owned unpublished games", zz), Tz(!0)
        })))
      }), [Wz, sz]);
      const cz = null !== Iz && null !== ez ? [...Iz.results, ...ez] : [],
        jz = !Gz && (null === Iz || null === ez),
        Az = !jz && !Gz && 0 === cz.length,
        yz = !Wz && sz.playerHasRank("developer");
      return (0, mz.jsxs)("div", {
        className: "StudioPage StudioGameList",
        children: [(0, mz.jsxs)("div", {
          className: "StudioPageHeader",
          children: [(0, mz.jsx)("h1", {
            className: "StudioPageTitle",
            children: zz("studio:myGames")
          }), (0, mz.jsxs)(bz.p, {
            onClick: rz,
            loading: Pz,
            children: [(0, mz.jsx)(Bz.c, {
              name: "plus"
            }), " ", zz("homePage:createCustomGame")]
          })]
        }), jz && (0, mz.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, mz.jsx)(Dz.d, {})
        }), Gz && (0, mz.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: zz("studio:failedToLoadGames")
        }), Az && (0, mz.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: zz("studio:noGamesYet")
        }), !jz && !Gz && !Az && (0, mz.jsx)(wz.c, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: zz("general:game")
          }, {
            key: "status",
            header: zz("general:status")
          }, {
            key: "ccu",
            header: zz("studio:metricCcu")
          }, {
            key: "favourites",
            header: zz("general:favourites")
          }],
          rows: cz,
          getRowKey: zz => zz.schematicId,
          renderRow: sz => (0, mz.jsxs)("tr", {
            onClick: () => {
              var zz;
              zz = sz.schematicId, tz((0, xz.n)((0, oz.b)(zz)))
            },
            children: [(0, mz.jsx)("td", {
              children: (0, mz.jsx)(Yz.f, {
                thumbnail: (0, mz.jsx)(Nz.c, {
                  game: sz
                }),
                name: sz.name
              })
            }), (0, mz.jsx)("td", {
              children: (0, mz.jsx)("span", {
                className: Xz()("StudioGameListStatusChip", {
                  StudioGameListStatusChipPublished: sz.gamePublished
                }),
                children: sz.gamePublished ? zz("general:published") : zz("general:draft")
              })
            }), (0, mz.jsx)("td", {
              children: (0, vz.R)(sz.ccu)
            }), (0, mz.jsx)("td", {
              children: (0, vz.R)(sz.favourites)
            })]
          })
        }), yz && (0, mz.jsx)(Jz, {})]
      })
    }
  },
  4545: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Oz,
      f: () => Xz
    });
    var Fz = sz(1506),
      Wz = sz(1087);

    function Xz(zz) {
      let {
        thumbnail: tz,
        name: sz
      } = zz;
      return (0, Wz.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, Wz.jsx)("div", {
          className: "StudioTableThumbnail",
          children: tz
        }), (0, Wz.jsx)("span", {
          className: "StudioTableGameName",
          children: sz
        })]
      })
    }

    function Oz(zz) {
      let {
        game: tz
      } = zz;
      return (0, Wz.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, Fz.i)(tz),
        alt: ""
      })
    }
  },
  4542: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => oz
    });
    var Fz = sz(65),
      Wz = sz(1020),
      Xz = sz.n(Wz),
      Oz = sz(1087);

    function oz(zz) {
      let {
        columns: tz,
        rows: sz,
        getRowKey: Wz,
        renderRow: oz,
        className: vz
      } = zz;
      return (0, Oz.jsxs)("table", {
        className: Xz()("Table", vz),
        children: [(0, Oz.jsx)("thead", {
          children: (0, Oz.jsx)("tr", {
            children: tz.map((zz => (0, Oz.jsx)("th", {
              children: zz.header
            }, zz.key)))
          })
        }), (0, Oz.jsx)("tbody", {
          children: sz.map((zz => (0, Oz.jsx)(Fz.Fragment, {
            children: oz(zz)
          }, Wz(zz))))
        })]
      })
    }
  },
  4531: () => {}
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);