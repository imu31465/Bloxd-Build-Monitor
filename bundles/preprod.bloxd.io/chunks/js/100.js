export const id = 100;
export const ids = [100];
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
  6240: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      default: () => Uz
    });
    bz(4665);
    var Ez = bz(56),
      nz = bz(1038),
      iz = bz.n(nz),
      lz = bz(316),
      Mz = bz(1009),
      tz = bz(1212),
      Hz = bz(987),
      Oz = bz(1181),
      pz = bz(1473),
      dz = bz(3309),
      Fz = bz(1114),
      Zz = bz(4670),
      Rz = bz(2455),
      Kz = bz(1419),
      wz = bz(4316),
      Xz = bz(4678),
      fz = bz(1305),
      sz = bz(1482),
      rz = bz(4313),
      oz = bz(2399),
      Nz = bz(4680),
      vz = bz(6136),
      xz = bz(1513),
      Jz = bz(1089);
    const Az = [{
        scope: "customGames",
        title: "studio:leaderboardCustomGames"
      }, {
        scope: "allGames",
        title: "studio:leaderboardAllGames"
      }, {
        scope: "dormantGames",
        title: "studio:leaderboardDormantGames"
      }],
      Tz = 25,
      Lz = "scope",
      Pz = "category",
      Gz = "customGames";
    const az = 7,
      Vz = {
        playsPerDay: null,
        avgPlaytimeMinutes: null,
        retention: null
      };

    function mz(zz) {
      let {
        position: uz
      } = zz;
      const bz = vz.c[uz];
      return (0, Jz.jsxs)("td", {
        className: iz()("StudioLeaderboardPosition", {
          StudioLeaderboardTopPosition: void 0 !== bz,
          [`StudioLeaderboardTopPosition${uz}`]: void 0 !== bz
        }),
        children: [void 0 !== bz && (0, Jz.jsx)("img", {
          className: "StudioLeaderboardPositionItem",
          src: bz,
          alt: ""
        }), uz]
      })
    }

    function qz(zz) {
      let {
        discoverability: uz
      } = zz;
      const {
        playsPerDay: bz,
        avgPlaytimeMinutes: nz,
        retention: iz
      } = null === uz ? Vz : (0, dz.j)(uz);
      return (0, Jz.jsxs)(Ez.Fragment, {
        children: [(0, Jz.jsx)("td", {
          children: null !== bz ? (0, dz.c)(bz) : "-"
        }), (0, Jz.jsx)("td", {
          children: null !== nz ? (0, dz.d)(nz) : "-"
        }), (0, Jz.jsx)("td", {
          children: null !== iz ? (0, dz.g)(iz) : "-"
        })]
      })
    }

    function hz(zz) {
      let {
        discoverability: uz
      } = zz;
      return (0, Jz.jsx)("td", {
        className: "StudioLeaderboardEngagementScore",
        children: void 0 !== (null === uz || void 0 === uz ? void 0 : uz.engagementScore) ? (0, tz.T)(Math.round(uz.engagementScore)) : "-"
      })
    }

    function Uz() {
      var zz, uz;
      const {
        t: bz
      } = (0, Oz.F)(), nz = (0, sz.useNavigatePreserveSearch)(), {
        userContext: iz,
        isUserContextUpdating: vz
      } = (0, Fz.c)(), Vz = (0, oz.m)(), [Uz, cz] = (0, rz.n)(), gz = (Sz = Uz.get(Lz), Az.some((zz => zz.scope === Sz)) ? Sz : Gz);
      var Sz;
      const yz = function(zz) {
          return lz.ab.includes(zz) ? zz : null
        }(Uz.get(Pz)),
        Dz = (0, rz.h)(Uz.get(rz.e)),
        [Qz, Wz] = (0, Ez.useState)(null),
        [ez, jz] = (0, Ez.useState)(!1);

      function Iz(zz) {
        cz((uz => {
          (0, rz.k)(uz, Lz, zz.scope === Gz ? null : zz.scope), (0, rz.k)(uz, Pz, zz.category), (0, rz.m)(uz, zz.page)
        }))
      }
      const Bz = !vz && iz.playerHasRank("developer"),
        Cz = Bz && "allGames" === gz,
        Yz = Bz && "dormantGames" === gz;
      (0, Ez.useEffect)((() => {
        if (vz) return;
        let zz = !1;
        return Wz(null), jz(!1), pz.c.getPublishedGamePreviews(iz, {
          searchQuery: null,
          pageNumber: Dz,
          pageSize: Tz,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !1,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: null !== yz ? [yz] : [],
          upAndComing: !1,
          dormantGames: Yz,
          sortByEngagementScore: !0,
          firstPartyGameNames: Cz ? Hz.d : void 0,
          includeOwners: !0
        }).then((uz => {
          zz || Wz(uz)
        })).catch((uz => {
          console.error("Failed to load the studio leaderboard", uz), zz || jz(!0)
        })), () => {
          zz = !0
        }
      }), [vz, Cz, Yz, yz, Dz, iz]);
      const kz = null !== (zz = null === Qz || void 0 === Qz ? void 0 : Qz.results) && void 0 !== zz ? zz : null,
        zu = function(zz, uz, bz) {
          const [nz, iz] = (0, Ez.useState)({}), lz = bz ? (null !== zz && void 0 !== zz ? zz : []).flatMap((zz => "firstPartyGame" === zz.type ? [(0, Mz.d)(zz.gameNameWithVariation, !0)] : [])).join(",") : "", tz = (0, Ez.useMemo)((() => "" === lz ? [] : lz.split(",")), [lz]);
          return (0, Ez.useEffect)((() => {
            if (0 === tz.length) return void iz({});
            let zz = !1;
            return pz.c.getGamesByAnalyticsIds(uz, tz).then((uz => {
              zz || iz(uz)
            })).catch((zz => {
              console.error("Failed to load first party discoverability for the studio leaderboard", zz)
            })), () => {
              zz = !0
            }
          }), [tz, uz]), nz
        }(kz, iz, Bz),
        uu = null !== kz ? function(zz, uz, bz, Ez, nz) {
          return zz.map(((zz, iz) => {
            var lz;
            const tz = Ez + iz + 1;
            if ("customGame" === zz.type) {
              const uz = zz.preview;
              return {
                key: uz.schematicId,
                position: tz,
                thumbnail: (0, Jz.jsx)(Zz.b, {
                  game: uz
                }),
                name: uz.name,
                owner: zz.owner,
                category: uz.gameCategory,
                ccu: uz.ccu,
                favourites: uz.favourites,
                discoverability: (0, dz.m)(uz) ? uz : null,
                url: (0, xz.t)((0, Mz.c)(uz.schematicId))
              }
            }
            const Hz = zz.gameNameWithVariation,
              Oz = (0, Mz.d)(Hz, !0);
            return {
              key: Hz,
              position: tz,
              thumbnail: (0, Jz.jsx)(Nz.b, {
                game: Hz
              }),
              name: (0, xz.q)(Hz, nz),
              owner: null,
              category: (0, xz.e)(Hz),
              ccu: (0, oz.d)(Hz, uz),
              favourites: null,
              discoverability: null !== (lz = bz[Oz]) && void 0 !== lz ? lz : null,
              url: (0, xz.t)(Oz)
            }
          }))
        }(kz, Vz, zu, (Dz - 1) * Tz, bz) : [],
        bu = !ez && null === Qz,
        Eu = !bu && !ez && 0 === uu.length,
        nu = null !== (uz = null === Qz || void 0 === Qz ? void 0 : Qz.totalPages) && void 0 !== uz ? uz : 1;
      return (0, Jz.jsxs)("div", {
        className: "StudioPage StudioLeaderboard",
        children: [(0, Jz.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, Jz.jsx)("h1", {
            className: "StudioPageTitle",
            children: bz("studio:leaderboard")
          })
        }), (0, Jz.jsxs)("div", {
          className: "StudioLeaderboardBanner",
          children: [!Yz && (0, Jz.jsx)("div", {
            children: bz("studio:leaderboardBanner")
          }), Yz && (0, Jz.jsx)("div", {
            children: bz("studio:leaderboardDormantBanner")
          }), (0, Jz.jsx)("div", {
            children: bz("studio:leaderboardMetricsBanner", {
              days: az
            })
          })]
        }), Bz && (0, Jz.jsx)("div", {
          className: "StudioLeaderboardScopes",
          children: Az.map((zz => (0, Jz.jsx)(Kz.V, {
            active: gz === zz.scope,
            onClick: () => {
              Iz({
                scope: zz.scope,
                category: yz,
                page: 1
              })
            },
            children: bz(zz.title)
          }, zz.scope)))
        }), (0, Jz.jsxs)("div", {
          className: "StudioLeaderboardCategories",
          children: [(0, Jz.jsx)(Kz.V, {
            active: null === yz,
            onClick: () => {
              Iz({
                scope: gz,
                category: null,
                page: 1
              })
            },
            children: bz("studio:leaderboardAllCategories")
          }), lz.ab.map((zz => (0, Jz.jsx)(Kz.V, {
            active: yz === zz,
            onClick: () => {
              Iz({
                scope: gz,
                category: zz,
                page: 1
              })
            },
            children: (0, lz.nb)(zz)
          }, zz)))]
        }), bu && (0, Jz.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, Jz.jsx)(fz.c, {})
        }), ez && (0, Jz.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: bz("studio:failedToLoadLeaderboard")
        }), Eu && (0, Jz.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: bz("studio:leaderboardEmpty")
        }), !bu && !ez && !Eu && (0, Jz.jsx)("div", {
          className: "StudioLeaderboardTableScroll AnimFadeIn",
          children: (0, Jz.jsx)(Xz.c, {
            className: "StudioTable",
            columns: [{
              key: "position",
              header: "#"
            }, {
              key: "game",
              header: bz("general:game")
            }, {
              key: "owner",
              header: bz("general:owner")
            }, ...null === yz ? [{
              key: "category",
              header: bz("general:category")
            }] : [], ...Bz ? [{
              key: "engagementScore",
              header: "engagementScore"
            }] : [], {
              key: "playsPerDay",
              header: bz("studio:leaderboardPlaysPerDay")
            }, {
              key: "sessionLength",
              header: bz("studio:leaderboardSessionLength")
            }, {
              key: "retention",
              header: bz("studio:leaderboardSessionsPerPlayer")
            }, ...Yz ? [] : [{
              key: "ccu",
              header: bz("studio:metricCcu")
            }], {
              key: "favourites",
              header: bz("general:favourites")
            }],
            rows: uu,
            getRowKey: zz => zz.key,
            renderRow: zz => (0, Jz.jsxs)("tr", {
              onClick: () => {
                nz(zz.url)
              },
              children: [(0, Jz.jsx)(mz, {
                position: zz.position
              }), (0, Jz.jsx)("td", {
                children: (0, Jz.jsx)(Nz.f, {
                  thumbnail: zz.thumbnail,
                  name: zz.name
                })
              }), (0, Jz.jsxs)("td", {
                className: "StudioLeaderboardOwner",
                children: [null === zz.owner && "-", null !== zz.owner && (0, Jz.jsx)(Rz.i, {
                  playerSocialPreview: zz.owner,
                  showLocation: !1,
                  opensProfileCard: !1
                })]
              }), null === yz && (0, Jz.jsx)("td", {
                children: (0, lz.nb)(zz.category)
              }), Bz && (0, Jz.jsx)(hz, {
                discoverability: zz.discoverability
              }), (0, Jz.jsx)(qz, {
                discoverability: zz.discoverability
              }), !Yz && (0, Jz.jsx)("td", {
                children: null !== zz.ccu ? (0, tz.T)(zz.ccu) : "-"
              }), (0, Jz.jsx)("td", {
                children: null !== zz.favourites ? (0, tz.T)(zz.favourites) : "-"
              })]
            })
          })
        }), !ez && (0, Jz.jsx)(wz.c, {
          className: "AnimFadeIn",
          page: Dz,
          totalPages: nu,
          onSetPage: zz => {
            Iz({
              scope: gz,
              category: yz,
              page: zz
            })
          }
        })]
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
  6136: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Ez
    });
    const Ez = {
      1: bz(6145),
      2: bz(6154),
      3: bz(6163)
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
  4665: () => {},
  6145: zz => {
    zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGVJREFUGJVjYKAZ4LF0YGBgYPiPhrErsn9/8v/Tv5//P/37+b/9+5NYFaMowqaYCaby2Z4fDAwMDAwO684xOKw7hyLGwMDAwIhmKlxSyoWD4aCgOVwNskK4YgYGBhRFuAB2HxMLAPX+QYFf3uJZAAAAAElFTkSuQmCC"
  },
  6154: zz => {
    zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAKhJREFUOI1jYBhxgJGQAntrHgYGBgaGg0e//EcWDw0NZWRgYGBYvXo1inom6rkNAjBciMtFv18bQhhCEBexMqtgdSlNXYjXRbgAzKUws6juQhZ0AUIu+7HWA6+BtA9DuAthLtr/GatG3rA7WM2iXRiG+AkwMjAwMLCKnsfqUnQX2WhxMjIwMDAcufYdRZz2OSXET4CBgYGBYc2mDyjpEpeL0AHVXTgCAQAJXjDPnoKDuAAAAABJRU5ErkJggg=="
  },
  6163: zz => {
    zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAK9JREFUOI3l0zEKwjAYhuE3QY+hWEWQ4lwovYE4WY+pDg7iBURwlrYgWtGD1EGCtk3aJZn6jV9+fh5CAp2LaBuY+zMArklW/PfreCUANttdaV7as31TE5pEyf0BwNQbAdCXUit1KmwUmaKkapd1Ya9atMn2h2PjQvdClVv+BCBNM+15vFxoe3fCKAwEgD8ZF/C7S5PIGw4EQP56uxXWfkoUBgCczpfSuzSJqrEu7GA+v28v0x7vVwcAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);