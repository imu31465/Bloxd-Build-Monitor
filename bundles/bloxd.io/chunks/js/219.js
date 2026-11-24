export const id = 219;
export const ids = [219];
export const modules = {
  36575: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      default: () => mp
    });
    var Op = cp(1049),
      op = cp.n(Op),
      Ip = cp(1543),
      Sp = cp(1042),
      xp = cp(768),
      Lp = cp(1201),
      Yp = cp(1480),
      Dp = cp(1538),
      Ap = cp(3654),
      Pp = cp(1060),
      Wp = cp(3581),
      yp = cp(2661),
      Up = cp(1112);
    const wp = 2;

    function vp(pp) {
      return "firstPartyGame" === pp.type ? {
        type: "game",
        gameNameWithVariation: pp.gameNameWithVariation
      } : {
        type: "preview",
        preview: pp.preview
      }
    }

    function tp(pp) {
      let {
        game: ip,
        disabled: cp,
        showPlaceholder: Op
      } = pp;
      return null !== ip ? (0, Up.jsx)(Wp.g, {
        source: vp(ip),
        gameWidth: "100%",
        useLongRatio: !0,
        disabled: cp,
        entrySource: "customGamePlace"
      }) : Op ? (0, Up.jsx)(Wp.e, {
        gameWidth: "100%",
        useLongRatio: !0
      }) : null
    }

    function Hp(pp) {
      var ip;
      let {
        category: cp,
        title: Op,
        tintColour: op,
        layout: Ip,
        games: Sp,
        landscape: xp = !1
      } = pp;
      const {
        followsLeader: Lp
      } = (0, yp.i)(), Yp = null !== (ip = null === Sp || void 0 === Sp ? void 0 : Sp.slice(0, Ip.gameCount)) && void 0 !== ip ? ip : [], Ap = {
        "--custom-game-place-tint": op
      };
      return (0, Up.jsxs)("div", {
        className: "CustomGamePlacePanel AnimFadeIn",
        style: Ap,
        children: [(0, Up.jsx)("h2", {
          className: "CustomGamePlacePanelHeading",
          children: (0, Up.jsxs)(Dp.LinkPreserveSearch, {
            to: `/custom-games/${encodeURIComponent(cp)}`,
            className: "CustomGamePlacePanelTitle SmallTextBold",
            children: [(0, Up.jsx)("span", {
              children: Op
            }), (0, Up.jsx)(Pp.d, {
              name: "arrow-up"
            })]
          })
        }), (0, Up.jsx)("div", {
          className: "CustomGamePlacePanelGames",
          style: {
            gridTemplateColumns: `repeat(${xp?Ip.columnCount:wp}, ${xp?"var(--custom-game-place-tile-width)":"minmax(0, 1fr)"})`
          },
          children: Array.from({
            length: Ip.gameCount
          }, ((pp, ip) => {
            var cp;
            return (0, Up.jsx)(tp, {
              game: null !== (cp = Yp[ip]) && void 0 !== cp ? cp : null,
              disabled: Lp,
              showPlaceholder: !Sp
            }, ip)
          }))
        })]
      })
    }

    function dp(pp) {
      let {
        categories: ip
      } = pp;

      function cp(pp) {
        const cp = ip[pp];
        return (0, Up.jsx)(Hp, {
          ...cp,
          landscape: !0
        }, cp.id)
      }
      return (0, Up.jsxs)("div", {
        className: "CustomGamePlaceMosaic CustomGamePlaceMosaicLandscape AnimFadeIn",
        children: [(0, Up.jsxs)("div", {
          className: "CustomGamePlaceUpper",
          children: [(0, Up.jsxs)("div", {
            className: "CustomGamePlaceMain",
            children: [(0, Up.jsxs)("div", {
              className: "CustomGamePlaceRow",
              children: [cp(0), cp(2)]
            }), cp(1)]
          }), cp(4)]
        }), (0, Up.jsxs)("div", {
          className: "CustomGamePlaceRow",
          children: [cp(3), cp(5)]
        })]
      })
    }
    const ep = ["section1", "section2", "section3", "section4", "section5", "section6"],
      jp = {
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
    var kp = cp(1133);

    function mp() {
      var pp;
      const {
        t: ip
      } = (0, Lp.H)(), cp = (0, Ip.A)(), Op = (0, kp.h)(), Pp = (0, Ap.b)({
        refresh: !0
      }), Wp = cp.customGamePlace;
      if (!(0, Sp.k)(Wp)) return (0, Up.jsx)(Dp.NavigatePreserveSearch, {
        to: "/"
      });
      const yp = xp.c[Wp],
        wp = Sp.b[Wp],
        vp = null !== (pp = null === Pp || void 0 === Pp ? void 0 : Pp[Wp]) && void 0 !== pp ? pp : null,
        tp = [];
      for (let op = 0; op < wp.length; op++) {
        var mp;
        const pp = ep[op];
        if (!pp) continue;
        const cp = wp[op];
        tp.push({
          id: cp.id,
          category: cp.category,
          title: ip(cp.displayTranslationKey),
          tintColour: cp.tintColour,
          layout: jp[pp],
          games: null !== (mp = null === vp || void 0 === vp ? void 0 : vp[cp.id]) && void 0 !== mp ? mp : null
        })
      }
      return (0, Up.jsxs)("div", {
        className: "CustomGamePlaceContainer AnimFadeIn",
        children: [(0, Up.jsx)("div", {
          className: "BackgroundImage",
          style: {
            backgroundImage: `url(/textures/games/${Wp}/${yp.largePicture}.png)`
          }
        }), (0, Up.jsx)("h1", {
          className: "VisuallyHidden",
          children: ip(yp.title)
        }), (0, Up.jsx)("div", {
          className: "CustomGamePlaceHeaderContainer",
          children: (0, Up.jsx)(Yp.d, {
            onClick: () => (0, Dp.navigatePreserveSearch)("/"),
            children: ip("homePage:backToGames")
          })
        }), !Op && (0, Up.jsx)(dp, {
          categories: tp
        }), Op && (0, Up.jsx)("div", {
          className: op()("CustomGamePlaceMosaic", "CustomGamePlaceMosaicPortrait"),
          children: tp.map((pp => (0, Up.jsx)(Hp, {
            category: pp.category,
            title: pp.title,
            tintColour: pp.tintColour,
            layout: pp.layout,
            games: pp.games
          }, pp.id)))
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);