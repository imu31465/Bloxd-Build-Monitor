export const id = 215;
export const ids = [215];
export const modules = {
  36453: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      default: () => cm
    });
    var hm = fm(1080),
      Am = fm.n(hm),
      am = fm(1537),
      xm = fm(1072),
      wm = fm(800),
      Dm = fm(1208),
      im = fm(1454),
      Rm = fm(1519),
      pm = fm(3565),
      Em = fm(1089),
      om = fm(3471),
      Om = fm(2578),
      Ym = fm(1135);
    const qm = 2;

    function jm(mm) {
      return "firstPartyGame" === mm.type ? {
        type: "game",
        gameNameWithVariation: mm.gameNameWithVariation
      } : {
        type: "preview",
        preview: mm.preview
      }
    }

    function Vm(mm) {
      let {
        game: Tm,
        disabled: fm,
        showPlaceholder: hm
      } = mm;
      return null !== Tm ? (0, Ym.jsx)(om.f, {
        source: jm(Tm),
        gameWidth: "100%",
        useLongRatio: !0,
        disabled: fm,
        entrySource: "customGamePlace"
      }) : hm ? (0, Ym.jsx)(om.e, {
        gameWidth: "100%",
        useLongRatio: !0
      }) : null
    }

    function Im(mm) {
      var Tm;
      let {
        category: fm,
        title: hm,
        tintColour: Am,
        layout: am,
        games: xm,
        landscape: wm = !1
      } = mm;
      const {
        followsLeader: Dm
      } = (0, Om.i)(), im = null !== (Tm = null === xm || void 0 === xm ? void 0 : xm.slice(0, am.gameCount)) && void 0 !== Tm ? Tm : [], pm = {
        "--custom-game-place-tint": Am
      };
      return (0, Ym.jsxs)("div", {
        className: "CustomGamePlacePanel AnimFadeIn",
        style: pm,
        children: [(0, Ym.jsx)("h2", {
          className: "CustomGamePlacePanelHeading",
          children: (0, Ym.jsxs)(Rm.LinkPreserveSearch, {
            to: `/custom-games/${encodeURIComponent(fm)}`,
            className: "CustomGamePlacePanelTitle SmallTextBold",
            children: [(0, Ym.jsx)("span", {
              children: hm
            }), (0, Ym.jsx)(Em.c, {
              name: "arrow-up"
            })]
          })
        }), (0, Ym.jsx)("div", {
          className: "CustomGamePlacePanelGames",
          style: {
            gridTemplateColumns: `repeat(${wm?am.columnCount:qm}, ${wm?"var(--custom-game-place-tile-width)":"minmax(0, 1fr)"})`
          },
          children: Array.from({
            length: am.gameCount
          }, ((mm, Tm) => {
            var fm;
            return (0, Ym.jsx)(Vm, {
              game: null !== (fm = im[Tm]) && void 0 !== fm ? fm : null,
              disabled: Dm,
              showPlaceholder: !xm
            }, Tm)
          }))
        })]
      })
    }

    function Km(mm) {
      let {
        categories: Tm
      } = mm;

      function fm(mm) {
        const fm = Tm[mm];
        return (0, Ym.jsx)(Im, {
          ...fm,
          landscape: !0
        }, fm.id)
      }
      return (0, Ym.jsxs)("div", {
        className: "CustomGamePlaceMosaic CustomGamePlaceMosaicLandscape AnimFadeIn",
        children: [(0, Ym.jsxs)("div", {
          className: "CustomGamePlaceUpper",
          children: [(0, Ym.jsxs)("div", {
            className: "CustomGamePlaceMain",
            children: [(0, Ym.jsxs)("div", {
              className: "CustomGamePlaceRow",
              children: [fm(0), fm(2)]
            }), fm(1)]
          }), fm(4)]
        }), (0, Ym.jsxs)("div", {
          className: "CustomGamePlaceRow",
          children: [fm(3), fm(5)]
        })]
      })
    }
    const Qm = ["section1", "section2", "section3", "section4", "section5", "section6"],
      nm = {
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
    var Jm = fm(1152);

    function cm() {
      var mm;
      const {
        t: Tm
      } = (0, Dm.A)(), fm = (0, am.G)(), hm = (0, Jm.j)(), Em = (0, pm.b)({
        refresh: !0
      }), om = fm.customGamePlace;
      if (!(0, xm.i)(om)) return (0, Ym.jsx)(Rm.NavigatePreserveSearch, {
        to: "/"
      });
      const Om = wm.e[om],
        qm = xm.d[om],
        jm = null !== (mm = null === Em || void 0 === Em ? void 0 : Em[om]) && void 0 !== mm ? mm : null,
        Vm = [];
      for (let Am = 0; Am < qm.length; Am++) {
        var cm;
        const mm = Qm[Am];
        if (!mm) continue;
        const fm = qm[Am];
        Vm.push({
          id: fm.id,
          category: fm.category,
          title: Tm(fm.displayTranslationKey),
          tintColour: fm.tintColour,
          layout: nm[mm],
          games: null !== (cm = null === jm || void 0 === jm ? void 0 : jm[fm.id]) && void 0 !== cm ? cm : null
        })
      }
      return (0, Ym.jsxs)("div", {
        className: "CustomGamePlaceContainer AnimFadeIn",
        children: [(0, Ym.jsx)("div", {
          className: "BackgroundImage",
          style: {
            backgroundImage: `url(/textures/games/${om}/${Om.largePicture}.png)`
          }
        }), (0, Ym.jsx)("h1", {
          className: "VisuallyHidden",
          children: Tm(Om.title)
        }), (0, Ym.jsx)("div", {
          className: "CustomGamePlaceHeaderContainer",
          children: (0, Ym.jsx)(im.d, {
            onClick: () => (0, Rm.navigatePreserveSearch)("/"),
            children: Tm("homePage:backToGames")
          })
        }), !hm && (0, Ym.jsx)(Km, {
          categories: Vm
        }), hm && (0, Ym.jsx)("div", {
          className: Am()("CustomGamePlaceMosaic", "CustomGamePlaceMosaicPortrait"),
          children: Vm.map((mm => (0, Ym.jsx)(Im, {
            category: mm.category,
            title: mm.title,
            tintColour: mm.tintColour,
            layout: mm.layout,
            games: mm.games
          }, mm.id)))
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);