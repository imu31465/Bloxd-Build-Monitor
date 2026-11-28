export const id = 250;
export const ids = [250];
export const modules = {
  37905: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      default: () => Jd
    });
    var Wd = md(1155),
      Fd = md.n(Wd),
      Rd = md(1650),
      Xd = md(1152),
      Kd = md(870),
      hd = md(1238),
      vd = md(1572),
      Qd = md(1641),
      td = md(4798),
      od = md(1443),
      Nd = md(4711),
      qd = md(3647),
      Hd = md(1341);
    const yd = 2;

    function bd(dd) {
      return "firstPartyGame" === dd.type ? {
        type: "game",
        gameNameWithVariation: dd.gameNameWithVariation
      } : {
        type: "preview",
        preview: dd.preview
      }
    }

    function Td(dd) {
      let {
        game: Od,
        disabled: md,
        showPlaceholder: Wd
      } = dd;
      return null !== Od ? (0, Hd.jsx)(Nd.f, {
        source: bd(Od),
        gameWidth: "100%",
        useLongRatio: !0,
        disabled: md,
        entrySource: "customGamePlace"
      }) : Wd ? (0, Hd.jsx)(Nd.c, {
        gameWidth: "100%",
        useLongRatio: !0
      }) : null
    }

    function pd(dd) {
      var Od;
      let {
        category: md,
        title: Wd,
        tintColour: Fd,
        layout: Rd,
        games: Xd,
        landscape: Kd = !1
      } = dd;
      const {
        followsLeader: hd
      } = (0, qd.g)(), vd = null !== (Od = null === Xd || void 0 === Xd ? void 0 : Xd.slice(0, Rd.gameCount)) && void 0 !== Od ? Od : [], td = {
        "--custom-game-place-tint": Fd
      };
      return (0, Hd.jsxs)("div", {
        className: "CustomGamePlacePanel AnimFadeIn",
        style: td,
        children: [(0, Hd.jsx)("h2", {
          className: "CustomGamePlacePanelHeading",
          children: (0, Hd.jsxs)(Qd.LinkPreserveSearch, {
            to: `/custom-games/${encodeURIComponent(md)}`,
            className: "CustomGamePlacePanelTitle SmallTextBold",
            children: [(0, Hd.jsx)("span", {
              children: Wd
            }), (0, Hd.jsx)(od.c, {
              name: "arrow-up"
            })]
          })
        }), (0, Hd.jsx)("div", {
          className: "CustomGamePlacePanelGames",
          style: {
            gridTemplateColumns: `repeat(${Kd?Rd.columnCount:yd}, ${Kd?"var(--custom-game-place-tile-width)":"minmax(0, 1fr)"})`
          },
          children: Array.from({
            length: Rd.gameCount
          }, ((dd, Od) => {
            var md;
            return (0, Hd.jsx)(Td, {
              game: null !== (md = vd[Od]) && void 0 !== md ? md : null,
              disabled: hd,
              showPlaceholder: !Xd
            }, Od)
          }))
        })]
      })
    }

    function Yd(dd) {
      let {
        categories: Od
      } = dd;

      function md(dd) {
        const md = Od[dd];
        return (0, Hd.jsx)(pd, {
          ...md,
          landscape: !0
        }, md.id)
      }
      return (0, Hd.jsxs)("div", {
        className: "CustomGamePlaceMosaic CustomGamePlaceMosaicLandscape AnimFadeIn",
        children: [(0, Hd.jsxs)("div", {
          className: "CustomGamePlaceUpper",
          children: [(0, Hd.jsxs)("div", {
            className: "CustomGamePlaceMain",
            children: [(0, Hd.jsxs)("div", {
              className: "CustomGamePlaceRow",
              children: [md(0), md(2)]
            }), md(1)]
          }), md(4)]
        }), (0, Hd.jsxs)("div", {
          className: "CustomGamePlaceRow",
          children: [md(3), md(5)]
        })]
      })
    }
    const gd = ["section1", "section2", "section3", "section4", "section5", "section6"],
      wd = {
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
    var Ed = md(1170);

    function Jd() {
      var dd;
      const {
        t: Od
      } = (0, hd.G)(), md = (0, Rd.u)(), Wd = (0, Ed.h)(), od = (0, td.b)({
        refresh: !0
      }), Nd = md.customGamePlace;
      if (!(0, Xd.j)(Nd)) return (0, Hd.jsx)(Qd.NavigatePreserveSearch, {
        to: "/"
      });
      const qd = Kd.c[Nd],
        yd = Xd.d[Nd],
        bd = null !== (dd = null === od || void 0 === od ? void 0 : od[Nd]) && void 0 !== dd ? dd : null,
        Td = [];
      for (let Fd = 0; Fd < yd.length; Fd++) {
        var Jd;
        const dd = gd[Fd];
        if (!dd) continue;
        const md = yd[Fd];
        Td.push({
          id: md.id,
          category: md.category,
          title: Od(md.displayTranslationKey),
          tintColour: md.tintColour,
          layout: wd[dd],
          games: null !== (Jd = null === bd || void 0 === bd ? void 0 : bd[md.id]) && void 0 !== Jd ? Jd : null
        })
      }
      return (0, Hd.jsxs)("div", {
        className: "CustomGamePlaceContainer AnimFadeIn",
        children: [(0, Hd.jsx)("div", {
          className: "BackgroundImage",
          style: {
            backgroundImage: `url(/textures/games/${Nd}/${qd.largePicture}.png)`
          }
        }), (0, Hd.jsx)("h1", {
          className: "VisuallyHidden",
          children: Od(qd.title)
        }), (0, Hd.jsx)("div", {
          className: "CustomGamePlaceHeaderContainer",
          children: (0, Hd.jsx)(vd.d, {
            onClick: () => (0, Qd.navigatePreserveSearch)("/"),
            children: Od("homePage:backToGames")
          })
        }), !Wd && (0, Hd.jsx)(Yd, {
          categories: Td
        }), Wd && (0, Hd.jsx)("div", {
          className: Fd()("CustomGamePlaceMosaic", "CustomGamePlaceMosaicPortrait"),
          children: Td.map((dd => (0, Hd.jsx)(pd, {
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