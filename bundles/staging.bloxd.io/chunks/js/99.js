export const id = 99;
export const ids = [99];
export const modules = {
  4670: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => dz
    });
    var Ez = bz(1038),
      nz = bz.n(Ez),
      iz = bz(1047),
      lz = bz(1305),
      Mz = bz(3248),
      tz = bz(128),
      Hz = bz(3298),
      Oz = bz(3286),
      pz = bz(1089);

    function dz(zz) {
      let {
        game: uz
      } = zz;
      const bz = (0, tz.o)() ? "large" : "small",
        Ez = (0, Hz.e)(uz, bz),
        dz = (0, Mz.f)(Ez),
        Fz = void 0 !== dz.blurhash;
      return (0, pz.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [dz.isLoading && !Fz && (0, pz.jsx)(lz.c, {
          loaderType: "Secondary"
        }), !dz.failed && (null !== dz.src || Fz) && (0, pz.jsx)("div", {
          className: nz()("SchematicImage", Oz.i, {
            SchematicImageFadeIn: dz.fadeIn && !Fz
          }),
          style: (0, Oz.f)(dz),
          children: (0, pz.jsx)(Oz.d, {
            image: dz
          })
        }), dz.failed && (0, pz.jsx)("div", {
          className: "SchematicImageError",
          children: (0, pz.jsx)(iz.c, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  4660: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      default: () => xz
    });
    bz(4665);
    var Ez = bz(56),
      nz = bz(1038),
      iz = bz.n(nz),
      lz = bz(316),
      Mz = bz(1009),
      tz = bz(1212),
      Hz = bz(1181),
      Oz = bz(1114),
      pz = bz(1473),
      dz = bz(4670),
      Fz = bz(1419),
      Zz = bz(4678),
      Rz = bz(1305),
      Kz = bz(1482),
      wz = bz(4387),
      Xz = bz(1047),
      fz = bz(987),
      sz = bz(2399),
      rz = bz(4680),
      oz = bz(1513),
      Nz = bz(1089);

    function vz() {
      const {
        t: zz
      } = (0, Hz.F)(), uz = (0, Kz.useNavigatePreserveSearch)(), bz = (0, sz.m)(), nz = (0, Ez.useMemo)((() => [...fz.d].sort(((uz, Ez) => {
        var nz, iz;
        const lz = (null !== (nz = (0, sz.d)(Ez, bz)) && void 0 !== nz ? nz : 0) - (null !== (iz = (0, sz.d)(uz, bz)) && void 0 !== iz ? iz : 0);
        return 0 !== lz ? lz : (0, oz.q)(uz, zz).localeCompare((0, oz.q)(Ez, zz))
      }))), [bz, zz]);
      return (0, Nz.jsxs)(Nz.Fragment, {
        children: [(0, Nz.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, Nz.jsx)("h1", {
            className: "StudioPageTitle",
            children: zz("studio:firstPartyGames")
          })
        }), (0, Nz.jsx)(Zz.c, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: zz("general:game")
          }, {
            key: "ccu",
            header: zz("studio:metricCcu")
          }],
          rows: nz,
          getRowKey: zz => zz,
          renderRow: Ez => {
            var nz;
            return (0, Nz.jsxs)("tr", {
              onClick: () => {
                uz((0, oz.t)((0, Mz.d)(Ez, !0)))
              },
              children: [(0, Nz.jsx)("td", {
                children: (0, Nz.jsx)(rz.f, {
                  thumbnail: (0, Nz.jsx)(rz.b, {
                    game: Ez
                  }),
                  name: (0, oz.q)(Ez, zz)
                })
              }), (0, Nz.jsx)("td", {
                children: (0, tz.T)(null !== (nz = (0, sz.d)(Ez, bz)) && void 0 !== nz ? nz : 0)
              })]
            })
          }
        })]
      })
    }

    function xz() {
      const {
        t: zz
      } = (0, Hz.F)(), uz = (0, Kz.useNavigatePreserveSearch)(), {
        userContext: bz,
        isUserContextUpdating: nz
      } = (0, Oz.c)(), {
        isCreating: fz,
        create: sz
      } = (0, wz.h)(), [xz, Jz] = (0, Ez.useState)(null), [Az, Tz] = (0, Ez.useState)(null), [Lz, Pz] = (0, Ez.useState)(!1);
      (0, Ez.useEffect)((() => {
        nz || (Pz(!1), pz.c.getPublishedGamePreviews(bz, {
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
          Jz({
            ...zz,
            results: (0, lz.ib)(zz.results)
          })
        })).catch((zz => {
          console.error("Failed to get owned published games", zz), Pz(!0)
        })), pz.c.getOwnedUnpublishedGames(bz).then((zz => {
          Tz(zz)
        })).catch((zz => {
          console.error("Failed to get owned unpublished games", zz), Pz(!0)
        })))
      }), [nz, bz]);
      const Gz = null !== xz && null !== Az ? [...xz.results, ...Az] : [],
        az = !Lz && (null === xz || null === Az),
        Vz = !az && !Lz && 0 === Gz.length,
        mz = !nz && bz.playerHasRank("developer");
      return (0, Nz.jsxs)("div", {
        className: "StudioPage StudioGameList",
        children: [(0, Nz.jsxs)("div", {
          className: "StudioPageHeader",
          children: [(0, Nz.jsx)("h1", {
            className: "StudioPageTitle",
            children: zz("studio:myGames")
          }), (0, Nz.jsxs)(Fz.q, {
            onClick: sz,
            loading: fz,
            children: [(0, Nz.jsx)(Xz.c, {
              name: "plus"
            }), " ", zz("homePage:createCustomGame")]
          })]
        }), az && (0, Nz.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, Nz.jsx)(Rz.c, {})
        }), Lz && (0, Nz.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: zz("studio:failedToLoadGames")
        }), Vz && (0, Nz.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: zz("studio:noGamesYet")
        }), !az && !Lz && !Vz && (0, Nz.jsx)(Zz.c, {
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
          rows: Gz,
          getRowKey: zz => zz.schematicId,
          renderRow: bz => (0, Nz.jsxs)("tr", {
            onClick: () => {
              var zz;
              zz = bz.schematicId, uz((0, oz.t)((0, Mz.c)(zz)))
            },
            children: [(0, Nz.jsx)("td", {
              children: (0, Nz.jsx)(rz.f, {
                thumbnail: (0, Nz.jsx)(dz.b, {
                  game: bz
                }),
                name: bz.name
              })
            }), (0, Nz.jsx)("td", {
              children: (0, Nz.jsx)("span", {
                className: iz()("StudioGameListStatusChip", {
                  StudioGameListStatusChipPublished: bz.gamePublished
                }),
                children: bz.gamePublished ? zz("general:published") : zz("general:draft")
              })
            }), (0, Nz.jsx)("td", {
              children: (0, tz.T)(bz.ccu)
            }), (0, Nz.jsx)("td", {
              children: (0, tz.T)(bz.favourites)
            })]
          })
        }), mz && (0, Nz.jsx)(vz, {})]
      })
    }
  },
  4680: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => lz,
      f: () => iz
    });
    var Ez = bz(1513),
      nz = bz(1089);

    function iz(zz) {
      let {
        thumbnail: uz,
        name: bz
      } = zz;
      return (0, nz.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, nz.jsx)("div", {
          className: "StudioTableThumbnail",
          children: uz
        }), (0, nz.jsx)("span", {
          className: "StudioTableGameName",
          children: bz
        })]
      })
    }

    function lz(zz) {
      let {
        game: uz
      } = zz;
      return (0, nz.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, Ez.m)(uz),
        alt: ""
      })
    }
  },
  4678: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Mz
    });
    var Ez = bz(56),
      nz = bz(1038),
      iz = bz.n(nz),
      lz = bz(1089);

    function Mz(zz) {
      let {
        columns: uz,
        rows: bz,
        getRowKey: nz,
        renderRow: Mz,
        className: tz
      } = zz;
      return (0, lz.jsxs)("table", {
        className: iz()("Table", tz),
        children: [(0, lz.jsx)("thead", {
          children: (0, lz.jsx)("tr", {
            children: uz.map((zz => (0, lz.jsx)("th", {
              children: zz.header
            }, zz.key)))
          })
        }), (0, lz.jsx)("tbody", {
          children: bz.map((zz => (0, lz.jsx)(Ez.Fragment, {
            children: Mz(zz)
          }, nz(zz))))
        })]
      })
    }
  },
  4665: () => {}
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);