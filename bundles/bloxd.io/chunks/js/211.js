export const id = 211;
export const ids = [211];
export const modules = {
  35896: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      default: () => Jz
    });
    var Fz = sz(1020),
      Wz = sz.n(Fz),
      Xz = sz(1493),
      Oz = sz(1014),
      oz = sz(725),
      vz = sz(1173),
      Uz = sz(1419),
      Kz = sz(1483),
      uz = sz(3232),
      Nz = sz(1036),
      bz = sz(3158),
      wz = sz(2379),
      Dz = sz(1087);
    const gz = 2;

    function Hz(zz) {
      return "firstPartyGame" === zz.type ? {
        type: "game",
        gameNameWithVariation: zz.gameNameWithVariation
      } : {
        type: "preview",
        preview: zz.preview
      }
    }

    function Bz(zz) {
      let {
        game: tz,
        disabled: sz,
        showPlaceholder: Fz
      } = zz;
      return null !== tz ? (0, Dz.jsx)(bz.g, {
        source: Hz(tz),
        gameWidth: "100%",
        useLongRatio: !0,
        disabled: sz,
        entrySource: "customGamePlace"
      }) : Fz ? (0, Dz.jsx)(bz.e, {
        gameWidth: "100%",
        useLongRatio: !0
      }) : null
    }

    function Pz(zz) {
      var tz;
      let {
        category: sz,
        title: Fz,
        tintColour: Wz,
        layout: Xz,
        games: Oz,
        landscape: oz = !1
      } = zz;
      const {
        followsLeader: vz
      } = (0, wz.i)(), Uz = null !== (tz = null === Oz || void 0 === Oz ? void 0 : Oz.slice(0, Xz.gameCount)) && void 0 !== tz ? tz : [], uz = {
        "--custom-game-place-tint": Wz
      };
      return (0, Dz.jsxs)("div", {
        className: "CustomGamePlacePanel AnimFadeIn",
        style: uz,
        children: [(0, Dz.jsx)("h2", {
          className: "CustomGamePlacePanelHeading",
          children: (0, Dz.jsxs)(Kz.LinkPreserveSearch, {
            to: `/custom-games/${encodeURIComponent(sz)}`,
            className: "CustomGamePlacePanelTitle SmallTextBold",
            children: [(0, Dz.jsx)("span", {
              children: Fz
            }), (0, Dz.jsx)(Nz.c, {
              name: "arrow-up"
            })]
          })
        }), (0, Dz.jsx)("div", {
          className: "CustomGamePlacePanelGames",
          style: {
            gridTemplateColumns: `repeat(${oz?Xz.columnCount:gz}, ${oz?"var(--custom-game-place-tile-width)":"minmax(0, 1fr)"})`
          },
          children: Array.from({
            length: Xz.gameCount
          }, ((zz, tz) => {
            var sz;
            return (0, Dz.jsx)(Bz, {
              game: null !== (sz = Uz[tz]) && void 0 !== sz ? sz : null,
              disabled: vz,
              showPlaceholder: !Oz
            }, tz)
          }))
        })]
      })
    }

    function rz(zz) {
      let {
        categories: tz
      } = zz;

      function sz(zz) {
        const sz = tz[zz];
        return (0, Dz.jsx)(Pz, {
          ...sz,
          landscape: !0
        }, sz.id)
      }
      return (0, Dz.jsxs)("div", {
        className: "CustomGamePlaceMosaic CustomGamePlaceMosaicLandscape AnimFadeIn",
        children: [(0, Dz.jsxs)("div", {
          className: "CustomGamePlaceUpper",
          children: [(0, Dz.jsxs)("div", {
            className: "CustomGamePlaceMain",
            children: [(0, Dz.jsxs)("div", {
              className: "CustomGamePlaceRow",
              children: [sz(0), sz(2)]
            }), sz(1)]
          }), sz(4)]
        }), (0, Dz.jsxs)("div", {
          className: "CustomGamePlaceRow",
          children: [sz(3), sz(5)]
        })]
      })
    }
    const Yz = ["section1", "section2", "section3", "section4", "section5", "section6"],
      xz = {
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
    var mz = sz(1106);

    function Jz() {
      var zz;
      const {
        t: tz
      } = (0, vz.B)(), sz = (0, Xz.C)(), Fz = (0, mz.i)(), Nz = (0, uz.d)({
        refresh: !0
      }), bz = sz.customGamePlace;
      if (!(0, Oz.n)(bz)) return (0, Dz.jsx)(Kz.NavigatePreserveSearch, {
        to: "/"
      });
      const wz = oz.e[bz],
        gz = Oz.c[bz],
        Hz = null !== (zz = null === Nz || void 0 === Nz ? void 0 : Nz[bz]) && void 0 !== zz ? zz : null,
        Bz = [];
      for (let Wz = 0; Wz < gz.length; Wz++) {
        var Jz;
        const zz = Yz[Wz];
        if (!zz) continue;
        const sz = gz[Wz];
        Bz.push({
          id: sz.id,
          category: sz.category,
          title: tz(sz.displayTranslationKey),
          tintColour: sz.tintColour,
          layout: xz[zz],
          games: null !== (Jz = null === Hz || void 0 === Hz ? void 0 : Hz[sz.id]) && void 0 !== Jz ? Jz : null
        })
      }
      return (0, Dz.jsxs)("div", {
        className: "CustomGamePlaceContainer AnimFadeIn",
        children: [(0, Dz.jsx)("div", {
          className: "BackgroundImage",
          style: {
            backgroundImage: `url(/textures/games/${bz}/${wz.largePicture}.png)`
          }
        }), (0, Dz.jsx)("h1", {
          className: "VisuallyHidden",
          children: tz(wz.title)
        }), (0, Dz.jsx)("div", {
          className: "CustomGamePlaceHeaderContainer",
          children: (0, Dz.jsx)(Uz.e, {
            onClick: () => (0, Kz.navigatePreserveSearch)("/"),
            children: tz("homePage:backToGames")
          })
        }), !Fz && (0, Dz.jsx)(rz, {
          categories: Bz
        }), Fz && (0, Dz.jsx)("div", {
          className: Wz()("CustomGamePlaceMosaic", "CustomGamePlaceMosaicPortrait"),
          children: Bz.map((zz => (0, Dz.jsx)(Pz, {
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