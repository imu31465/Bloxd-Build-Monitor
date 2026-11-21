export const id = 212;
export const ids = [212];
export const modules = {
  36543: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      default: () => sd
    });
    var pd = kd(1044),
      Nd = kd.n(pd),
      Wd = kd(1557),
      Pd = kd(1042),
      Zd = kd(756),
      gd = kd(1211),
      Cd = kd(1461),
      Kd = kd(1543),
      od = kd(3430),
      ld = kd(1059),
      Qd = kd(3332),
      Ld = kd(2468),
      Od = kd(1103);
    const ed = 2;

    function Rd(dd) {
      return "firstPartyGame" === dd.type ? {
        type: "game",
        gameNameWithVariation: dd.gameNameWithVariation
      } : {
        type: "preview",
        preview: dd.preview
      }
    }

    function Id(dd) {
      let {
        game: Jd,
        disabled: kd,
        showPlaceholder: pd
      } = dd;
      return null !== Jd ? (0, Od.jsx)(Qd.h, {
        source: Rd(Jd),
        gameWidth: "100%",
        useLongRatio: !0,
        disabled: kd,
        entrySource: "customGamePlace"
      }) : pd ? (0, Od.jsx)(Qd.d, {
        gameWidth: "100%",
        useLongRatio: !0
      }) : null
    }

    function Gd(dd) {
      var Jd;
      let {
        category: kd,
        title: pd,
        tintColour: Nd,
        layout: Wd,
        games: Pd,
        landscape: Zd = !1
      } = dd;
      const {
        followsLeader: gd
      } = (0, Ld.d)(), Cd = null !== (Jd = null === Pd || void 0 === Pd ? void 0 : Pd.slice(0, Wd.gameCount)) && void 0 !== Jd ? Jd : [], od = {
        "--custom-game-place-tint": Nd
      };
      return (0, Od.jsxs)("div", {
        className: "CustomGamePlacePanel AnimFadeIn",
        style: od,
        children: [(0, Od.jsx)("h2", {
          className: "CustomGamePlacePanelHeading",
          children: (0, Od.jsxs)(Kd.LinkPreserveSearch, {
            to: `/custom-games/${encodeURIComponent(kd)}`,
            className: "CustomGamePlacePanelTitle SmallTextBold",
            children: [(0, Od.jsx)("span", {
              children: pd
            }), (0, Od.jsx)(ld.e, {
              name: "arrow-up"
            })]
          })
        }), (0, Od.jsx)("div", {
          className: "CustomGamePlacePanelGames",
          style: {
            gridTemplateColumns: `repeat(${Zd?Wd.columnCount:ed}, ${Zd?"var(--custom-game-place-tile-width)":"minmax(0, 1fr)"})`
          },
          children: Array.from({
            length: Wd.gameCount
          }, ((dd, Jd) => {
            var kd;
            return (0, Od.jsx)(Id, {
              game: null !== (kd = Cd[Jd]) && void 0 !== kd ? kd : null,
              disabled: gd,
              showPlaceholder: !Pd
            }, Jd)
          }))
        })]
      })
    }

    function vd(dd) {
      let {
        categories: Jd
      } = dd;

      function kd(dd) {
        const kd = Jd[dd];
        return (0, Od.jsx)(Gd, {
          ...kd,
          landscape: !0
        }, kd.id)
      }
      return (0, Od.jsxs)("div", {
        className: "CustomGamePlaceMosaic CustomGamePlaceMosaicLandscape AnimFadeIn",
        children: [(0, Od.jsxs)("div", {
          className: "CustomGamePlaceUpper",
          children: [(0, Od.jsxs)("div", {
            className: "CustomGamePlaceMain",
            children: [(0, Od.jsxs)("div", {
              className: "CustomGamePlaceRow",
              children: [kd(0), kd(2)]
            }), kd(1)]
          }), kd(4)]
        }), (0, Od.jsxs)("div", {
          className: "CustomGamePlaceRow",
          children: [kd(3), kd(5)]
        })]
      })
    }
    const xd = ["section1", "section2", "section3", "section4", "section5", "section6"],
      qd = {
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
    var Bd = kd(1124);

    function sd() {
      var dd;
      const {
        t: Jd
      } = (0, gd.B)(), kd = (0, Wd.y)(), pd = (0, Bd.g)(), ld = (0, od.c)({
        refresh: !0
      }), Qd = kd.customGamePlace;
      if (!(0, Pd.i)(Qd)) return (0, Od.jsx)(Kd.NavigatePreserveSearch, {
        to: "/"
      });
      const Ld = Zd.d[Qd],
        ed = Pd.b[Qd],
        Rd = null !== (dd = null === ld || void 0 === ld ? void 0 : ld[Qd]) && void 0 !== dd ? dd : null,
        Id = [];
      for (let Nd = 0; Nd < ed.length; Nd++) {
        var sd;
        const dd = xd[Nd];
        if (!dd) continue;
        const kd = ed[Nd];
        Id.push({
          id: kd.id,
          category: kd.category,
          title: Jd(kd.displayTranslationKey),
          tintColour: kd.tintColour,
          layout: qd[dd],
          games: null !== (sd = null === Rd || void 0 === Rd ? void 0 : Rd[kd.id]) && void 0 !== sd ? sd : null
        })
      }
      return (0, Od.jsxs)("div", {
        className: "CustomGamePlaceContainer AnimFadeIn",
        children: [(0, Od.jsx)("div", {
          className: "BackgroundImage",
          style: {
            backgroundImage: `url(/textures/games/${Qd}/${Ld.largePicture}.png)`
          }
        }), (0, Od.jsx)("h1", {
          className: "VisuallyHidden",
          children: Jd(Ld.title)
        }), (0, Od.jsx)("div", {
          className: "CustomGamePlaceHeaderContainer",
          children: (0, Od.jsx)(Cd.b, {
            onClick: () => (0, Kd.navigatePreserveSearch)("/"),
            children: Jd("homePage:backToGames")
          })
        }), !pd && (0, Od.jsx)(vd, {
          categories: Id
        }), pd && (0, Od.jsx)("div", {
          className: Nd()("CustomGamePlaceMosaic", "CustomGamePlaceMosaicPortrait"),
          children: Id.map((dd => (0, Od.jsx)(Gd, {
            category: dd.category,
            title: dd.title,
            tintColour: dd.tintColour,
            layout: dd.layout,
            games: dd.games
          }, dd.id)))
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);