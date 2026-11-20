export const id = 100;
export const ids = [100];
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
  6097: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      default: () => hz
    });
    sz(4531);
    var Fz = sz(65),
      Wz = sz(1020),
      Xz = sz.n(Wz),
      Oz = sz(308),
      oz = sz(1001),
      vz = sz(1213),
      Uz = sz(982),
      Kz = sz(1173),
      uz = sz(1466),
      Nz = sz(3229),
      bz = sz(1116),
      wz = sz(4539),
      Dz = sz(2391),
      gz = sz(1419),
      Hz = sz(4201),
      Bz = sz(4542),
      Pz = sz(1306),
      rz = sz(1483),
      Yz = sz(4194),
      xz = sz(2353),
      mz = sz(4545),
      Jz = sz(5999),
      Iz = sz(1506),
      Cz = sz(1087);
    const ez = [{
        scope: "customGames",
        title: "studio:leaderboardCustomGames"
      }, {
        scope: "allGames",
        title: "studio:leaderboardAllGames"
      }, {
        scope: "dormantGames",
        title: "studio:leaderboardDormantGames"
      }],
      Zz = 25,
      Gz = "scope",
      Tz = "category",
      cz = "customGames";
    const jz = 7,
      Az = {
        playsPerDay: null,
        avgPlaytimeMinutes: null,
        retention: null
      };

    function yz(zz) {
      let {
        position: tz
      } = zz;
      const sz = Jz.c[tz];
      return (0, Cz.jsxs)("td", {
        className: Xz()("StudioLeaderboardPosition", {
          StudioLeaderboardTopPosition: void 0 !== sz,
          [`StudioLeaderboardTopPosition${tz}`]: void 0 !== sz
        }),
        children: [void 0 !== sz && (0, Cz.jsx)("img", {
          className: "StudioLeaderboardPositionItem",
          src: sz,
          alt: ""
        }), tz]
      })
    }

    function Mz(zz) {
      let {
        discoverability: tz
      } = zz;
      const {
        playsPerDay: sz,
        avgPlaytimeMinutes: Wz,
        retention: Xz
      } = null === tz ? Az : (0, Nz.i)(tz);
      return (0, Cz.jsxs)(Fz.Fragment, {
        children: [(0, Cz.jsx)("td", {
          children: null !== sz ? (0, Nz.b)(sz) : "-"
        }), (0, Cz.jsx)("td", {
          children: null !== Wz ? (0, Nz.d)(Wz) : "-"
        }), (0, Cz.jsx)("td", {
          children: null !== Xz ? (0, Nz.e)(Xz) : "-"
        })]
      })
    }

    function dz(zz) {
      let {
        discoverability: tz
      } = zz;
      return (0, Cz.jsx)("td", {
        className: "StudioLeaderboardEngagementScore",
        children: void 0 !== (null === tz || void 0 === tz ? void 0 : tz.engagementScore) ? (0, vz.R)(Math.round(tz.engagementScore)) : "-"
      })
    }

    function hz() {
      var zz, tz;
      const {
        t: sz
      } = (0, Kz.B)(), Wz = (0, rz.useNavigatePreserveSearch)(), {
        userContext: Xz,
        isUserContextUpdating: Jz
      } = (0, bz.b)(), Az = (0, xz.k)(), [hz, Qz] = (0, Yz.i)(), kz = (iz = hz.get(Gz), ez.some((zz => zz.scope === iz)) ? iz : cz);
      var iz;
      const Lz = function(zz) {
          return Oz.U.includes(zz) ? zz : null
        }(hz.get(Tz)),
        lz = (0, Yz.e)(hz.get(Yz.b)),
        [nz, az] = (0, Fz.useState)(null),
        [qz, Sz] = (0, Fz.useState)(!1);

      function Vz(zz) {
        Qz((tz => {
          (0, Yz.f)(tz, Gz, zz.scope === cz ? null : zz.scope), (0, Yz.f)(tz, Tz, zz.category), (0, Yz.g)(tz, zz.page)
        }))
      }
      const Rz = !Jz && Xz.playerHasRank("developer"),
        pz = Rz && "allGames" === kz,
        fz = Rz && "dormantGames" === kz;
      (0, Fz.useEffect)((() => {
        if (Jz) return;
        let zz = !1;
        return az(null), Sz(!1), uz.d.getPublishedGamePreviews(Xz, {
          searchQuery: null,
          pageNumber: lz,
          pageSize: Zz,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !1,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: null !== Lz ? [Lz] : [],
          upAndComing: !1,
          dormantGames: fz,
          sortByEngagementScore: !0,
          firstPartyGameNames: pz ? Uz.d : void 0,
          includeOwners: !0
        }).then((tz => {
          zz || az(tz)
        })).catch((tz => {
          console.error("Failed to load the studio leaderboard", tz), zz || Sz(!0)
        })), () => {
          zz = !0
        }
      }), [Jz, pz, fz, Lz, lz, Xz]);
      const Ez = null !== (zz = null === nz || void 0 === nz ? void 0 : nz.results) && void 0 !== zz ? zz : null,
        zt = function(zz, tz, sz) {
          const [Wz, Xz] = (0, Fz.useState)({}), Oz = sz ? (null !== zz && void 0 !== zz ? zz : []).flatMap((zz => "firstPartyGame" === zz.type ? [(0, oz.e)(zz.gameNameWithVariation, !0)] : [])).join(",") : "", vz = (0, Fz.useMemo)((() => "" === Oz ? [] : Oz.split(",")), [Oz]);
          return (0, Fz.useEffect)((() => {
            if (0 === vz.length) return void Xz({});
            let zz = !1;
            return uz.d.getGamesByAnalyticsIds(tz, vz).then((tz => {
              zz || Xz(tz)
            })).catch((zz => {
              console.error("Failed to load first party discoverability for the studio leaderboard", zz)
            })), () => {
              zz = !0
            }
          }), [vz, tz]), Wz
        }(Ez, Xz, Rz),
        tt = null !== Ez ? function(zz, tz, sz, Fz, Wz) {
          return zz.map(((zz, Xz) => {
            var Oz;
            const vz = Fz + Xz + 1;
            if ("customGame" === zz.type) {
              const tz = zz.preview;
              return {
                key: tz.schematicId,
                position: vz,
                thumbnail: (0, Cz.jsx)(wz.c, {
                  game: tz
                }),
                name: tz.name,
                owner: zz.owner,
                category: tz.gameCategory,
                ccu: tz.ccu,
                favourites: tz.favourites,
                discoverability: (0, Nz.m)(tz) ? tz : null,
                url: (0, Iz.n)((0, oz.b)(tz.schematicId))
              }
            }
            const Uz = zz.gameNameWithVariation,
              Kz = (0, oz.e)(Uz, !0);
            return {
              key: Uz,
              position: vz,
              thumbnail: (0, Cz.jsx)(mz.d, {
                game: Uz
              }),
              name: (0, Iz.m)(Uz, Wz),
              owner: null,
              category: (0, Iz.d)(Uz),
              ccu: (0, xz.c)(Uz, tz),
              favourites: null,
              discoverability: null !== (Oz = sz[Kz]) && void 0 !== Oz ? Oz : null,
              url: (0, Iz.n)(Kz)
            }
          }))
        }(Ez, Az, zt, (lz - 1) * Zz, sz) : [],
        st = !qz && null === nz,
        Ft = !st && !qz && 0 === tt.length,
        Wt = null !== (tz = null === nz || void 0 === nz ? void 0 : nz.totalPages) && void 0 !== tz ? tz : 1;
      return (0, Cz.jsxs)("div", {
        className: "StudioPage StudioLeaderboard",
        children: [(0, Cz.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, Cz.jsx)("h1", {
            className: "StudioPageTitle",
            children: sz("studio:leaderboard")
          })
        }), (0, Cz.jsxs)("div", {
          className: "StudioLeaderboardBanner",
          children: [!fz && (0, Cz.jsx)("div", {
            children: sz("studio:leaderboardBanner")
          }), fz && (0, Cz.jsx)("div", {
            children: sz("studio:leaderboardDormantBanner")
          }), (0, Cz.jsx)("div", {
            children: sz("studio:leaderboardMetricsBanner", {
              days: jz
            })
          })]
        }), Rz && (0, Cz.jsx)("div", {
          className: "StudioLeaderboardScopes",
          children: ez.map((zz => (0, Cz.jsx)(gz.Q, {
            active: kz === zz.scope,
            onClick: () => {
              Vz({
                scope: zz.scope,
                category: Lz,
                page: 1
              })
            },
            children: sz(zz.title)
          }, zz.scope)))
        }), (0, Cz.jsxs)("div", {
          className: "StudioLeaderboardCategories",
          children: [(0, Cz.jsx)(gz.Q, {
            active: null === Lz,
            onClick: () => {
              Vz({
                scope: kz,
                category: null,
                page: 1
              })
            },
            children: sz("studio:leaderboardAllCategories")
          }), Oz.U.map((zz => (0, Cz.jsx)(gz.Q, {
            active: Lz === zz,
            onClick: () => {
              Vz({
                scope: kz,
                category: zz,
                page: 1
              })
            },
            children: (0, Oz.gb)(zz)
          }, zz)))]
        }), st && (0, Cz.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, Cz.jsx)(Pz.d, {})
        }), qz && (0, Cz.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: sz("studio:failedToLoadLeaderboard")
        }), Ft && (0, Cz.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: sz("studio:leaderboardEmpty")
        }), !st && !qz && !Ft && (0, Cz.jsx)("div", {
          className: "StudioLeaderboardTableScroll AnimFadeIn",
          children: (0, Cz.jsx)(Bz.c, {
            className: "StudioTable",
            columns: [{
              key: "position",
              header: "#"
            }, {
              key: "game",
              header: sz("general:game")
            }, {
              key: "owner",
              header: sz("general:owner")
            }, ...null === Lz ? [{
              key: "category",
              header: sz("general:category")
            }] : [], ...Rz ? [{
              key: "engagementScore",
              header: "engagementScore"
            }] : [], {
              key: "playsPerDay",
              header: sz("studio:leaderboardPlaysPerDay")
            }, {
              key: "sessionLength",
              header: sz("studio:leaderboardSessionLength")
            }, {
              key: "retention",
              header: sz("studio:leaderboardSessionsPerPlayer")
            }, ...fz ? [] : [{
              key: "ccu",
              header: sz("studio:metricCcu")
            }], {
              key: "favourites",
              header: sz("general:favourites")
            }],
            rows: tt,
            getRowKey: zz => zz.key,
            renderRow: zz => (0, Cz.jsxs)("tr", {
              onClick: () => {
                Wz(zz.url)
              },
              children: [(0, Cz.jsx)(yz, {
                position: zz.position
              }), (0, Cz.jsx)("td", {
                children: (0, Cz.jsx)(mz.f, {
                  thumbnail: zz.thumbnail,
                  name: zz.name
                })
              }), (0, Cz.jsxs)("td", {
                className: "StudioLeaderboardOwner",
                children: [null === zz.owner && "-", null !== zz.owner && (0, Cz.jsx)(Dz.g, {
                  playerSocialPreview: zz.owner,
                  showLocation: !1,
                  opensProfileCard: !1
                })]
              }), null === Lz && (0, Cz.jsx)("td", {
                children: (0, Oz.gb)(zz.category)
              }), Rz && (0, Cz.jsx)(dz, {
                discoverability: zz.discoverability
              }), (0, Cz.jsx)(Mz, {
                discoverability: zz.discoverability
              }), !fz && (0, Cz.jsx)("td", {
                children: null !== zz.ccu ? (0, vz.R)(zz.ccu) : "-"
              }), (0, Cz.jsx)("td", {
                children: null !== zz.favourites ? (0, vz.R)(zz.favourites) : "-"
              })]
            })
          })
        }), !qz && (0, Cz.jsx)(Hz.d, {
          className: "AnimFadeIn",
          page: lz,
          totalPages: Wt,
          onSetPage: zz => {
            Vz({
              scope: kz,
              category: Lz,
              page: zz
            })
          }
        })]
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
  5999: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Fz
    });
    const Fz = {
      1: sz(6007),
      2: sz(6012),
      3: sz(6020)
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
  4531: () => {},
  6007: zz => {
    zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGVJREFUGJVjYKAZ4LF0YGBgYPiPhrErsn9/8v/Tv5//P/37+b/9+5NYFaMowqaYCaby2Z4fDAwMDAwO684xOKw7hyLGwMDAwIhmKlxSyoWD4aCgOVwNskK4YgYGBhRFuAB2HxMLAPX+QYFf3uJZAAAAAElFTkSuQmCC"
  },
  6012: zz => {
    zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAKhJREFUOI1jYBhxgJGQAntrHgYGBgaGg0e//EcWDw0NZWRgYGBYvXo1inom6rkNAjBciMtFv18bQhhCEBexMqtgdSlNXYjXRbgAzKUws6juQhZ0AUIu+7HWA6+BtA9DuAthLtr/GatG3rA7WM2iXRiG+AkwMjAwMLCKnsfqUnQX2WhxMjIwMDAcufYdRZz2OSXET4CBgYGBYc2mDyjpEpeL0AHVXTgCAQAJXjDPnoKDuAAAAABJRU5ErkJggg=="
  },
  6020: zz => {
    zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAK9JREFUOI3l0zEKwjAYhuE3QY+hWEWQ4lwovYE4WY+pDg7iBURwlrYgWtGD1EGCtk3aJZn6jV9+fh5CAp2LaBuY+zMArklW/PfreCUANttdaV7as31TE5pEyf0BwNQbAdCXUit1KmwUmaKkapd1Ya9atMn2h2PjQvdClVv+BCBNM+15vFxoe3fCKAwEgD8ZF/C7S5PIGw4EQP56uxXWfkoUBgCczpfSuzSJqrEu7GA+v28v0x7vVwcAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);