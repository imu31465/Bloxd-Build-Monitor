export const id = 211;
export const ids = [211];
export const modules = {
  35870: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      default: () => vz
    });
    var Ez = bz(1038),
      nz = bz.n(Ez),
      iz = bz(1490),
      lz = bz(1030),
      Mz = bz(738),
      tz = bz(1181),
      Hz = bz(1419),
      Oz = bz(1482),
      pz = bz(3313),
      dz = bz(1047),
      Fz = bz(3230),
      Zz = bz(2442),
      Rz = bz(1089);
    const Kz = 2;

    function wz(zz) {
      return "firstPartyGame" === zz.type ? {
        type: "game",
        gameNameWithVariation: zz.gameNameWithVariation
      } : {
        type: "preview",
        preview: zz.preview
      }
    }

    function Xz(zz) {
      let {
        game: uz,
        disabled: bz,
        showPlaceholder: Ez
      } = zz;
      return null !== uz ? (0, Rz.jsx)(Fz.i, {
        source: wz(uz),
        gameWidth: "100%",
        useLongRatio: !0,
        disabled: bz,
        entrySource: "customGamePlace"
      }) : Ez ? (0, Rz.jsx)(Fz.e, {
        gameWidth: "100%",
        useLongRatio: !0
      }) : null
    }

    function fz(zz) {
      var uz;
      let {
        category: bz,
        title: Ez,
        tintColour: nz,
        layout: iz,
        games: lz,
        landscape: Mz = !1
      } = zz;
      const {
        followsLeader: tz
      } = (0, Zz.f)(), Hz = null !== (uz = null === lz || void 0 === lz ? void 0 : lz.slice(0, iz.gameCount)) && void 0 !== uz ? uz : [], pz = {
        "--custom-game-place-tint": nz
      };
      return (0, Rz.jsxs)("div", {
        className: "CustomGamePlacePanel AnimFadeIn",
        style: pz,
        children: [(0, Rz.jsx)("h2", {
          className: "CustomGamePlacePanelHeading",
          children: (0, Rz.jsxs)(Oz.LinkPreserveSearch, {
            to: `/custom-games/${encodeURIComponent(bz)}`,
            className: "CustomGamePlacePanelTitle SmallTextBold",
            children: [(0, Rz.jsx)("span", {
              children: Ez
            }), (0, Rz.jsx)(dz.c, {
              name: "arrow-up"
            })]
          })
        }), (0, Rz.jsx)("div", {
          className: "CustomGamePlacePanelGames",
          style: {
            gridTemplateColumns: `repeat(${Mz?iz.columnCount:Kz}, ${Mz?"var(--custom-game-place-tile-width)":"minmax(0, 1fr)"})`
          },
          children: Array.from({
            length: iz.gameCount
          }, ((zz, uz) => {
            var bz;
            return (0, Rz.jsx)(Xz, {
              game: null !== (bz = Hz[uz]) && void 0 !== bz ? bz : null,
              disabled: tz,
              showPlaceholder: !lz
            }, uz)
          }))
        })]
      })
    }

    function sz(zz) {
      let {
        categories: uz
      } = zz;

      function bz(zz) {
        const bz = uz[zz];
        return (0, Rz.jsx)(fz, {
          ...bz,
          landscape: !0
        }, bz.id)
      }
      return (0, Rz.jsxs)("div", {
        className: "CustomGamePlaceMosaic CustomGamePlaceMosaicLandscape AnimFadeIn",
        children: [(0, Rz.jsxs)("div", {
          className: "CustomGamePlaceUpper",
          children: [(0, Rz.jsxs)("div", {
            className: "CustomGamePlaceMain",
            children: [(0, Rz.jsxs)("div", {
              className: "CustomGamePlaceRow",
              children: [bz(0), bz(2)]
            }), bz(1)]
          }), bz(4)]
        }), (0, Rz.jsxs)("div", {
          className: "CustomGamePlaceRow",
          children: [bz(3), bz(5)]
        })]
      })
    }
    const rz = ["section1", "section2", "section3", "section4", "section5", "section6"],
      oz = {
        section1: {
          gameCount: 4,
          columnCount: 2
        },
        section2: {
          gameCount: 6,
          columnCount: 6
        },
        section3: {
          gameCount: 8,
          columnCount: 4
        },
        section4: {
          gameCount: 6,
          columnCount: 3
        },
        section5: {
          gameCount: 3,
          columnCount: 1
        },
        section6: {
          gameCount: 8,
          columnCount: 4
        }
      };
    var Nz = bz(1102);

    function vz() {
      var zz;
      const {
        t: uz
      } = (0, tz.F)(), bz = (0, iz.D)(), Ez = (0, Nz.n)(), dz = (0, pz.b)({
        refresh: !0
      }), Fz = bz.customGamePlace;
      if (!(0, lz.m)(Fz)) return (0, Rz.jsx)(Oz.NavigatePreserveSearch, {
        to: "/"
      });
      const Zz = Mz.b[Fz],
        Kz = lz.e[Fz],
        wz = null !== (zz = null === dz || void 0 === dz ? void 0 : dz[Fz]) && void 0 !== zz ? zz : null,
        Xz = [];
      for (let nz = 0; nz < Kz.length; nz++) {
        var vz;
        const zz = rz[nz];
        if (!zz) continue;
        const bz = Kz[nz];
        Xz.push({
          id: bz.id,
          category: bz.category,
          title: uz(bz.displayTranslationKey),
          tintColour: bz.tintColour,
          layout: oz[zz],
          games: null !== (vz = null === wz || void 0 === wz ? void 0 : wz[bz.id]) && void 0 !== vz ? vz : null
        })
      }
      return (0, Rz.jsxs)("div", {
        className: "CustomGamePlaceContainer AnimFadeIn",
        children: [(0, Rz.jsx)("div", {
          className: "BackgroundImage",
          style: {
            backgroundImage: `url(/textures/games/${Fz}/${Zz.largePicture}.png)`
          }
        }), (0, Rz.jsx)("h1", {
          className: "VisuallyHidden",
          children: uz(Zz.title)
        }), (0, Rz.jsx)("div", {
          className: "CustomGamePlaceHeaderContainer",
          children: (0, Rz.jsx)(Hz.d, {
            onClick: () => (0, Oz.navigatePreserveSearch)("/"),
            children: uz("homePage:backToGames")
          })
        }), !Ez && (0, Rz.jsx)(sz, {
          categories: Xz
        }), Ez && (0, Rz.jsx)("div", {
          className: nz()("CustomGamePlaceMosaic", "CustomGamePlaceMosaicPortrait"),
          children: Xz.map((zz => (0, Rz.jsx)(fz, {
            category: zz.category,
            title: zz.title,
            tintColour: zz.tintColour,
            layout: zz.layout,
            games: zz.games
          }, zz.id)))
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);