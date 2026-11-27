export const id = 242;
export const ids = [242];
export const modules = {
  37153: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      default: () => We
    });
    var ye = He(1053),
      be = He.n(ye),
      Me = He(1515),
      Ke = He(1051),
      Ue = He(780),
      Fe = He(1127),
      Je = He(1438),
      oe = He(1502),
      Re = He(3958),
      ke = He(1323),
      qe = He(3865),
      fe = He(2735),
      Te = He(1228);
    const pe = 2;

    function Xe(ee) {
      return "firstPartyGame" === ee.type ? {
        type: "game",
        gameNameWithVariation: ee.gameNameWithVariation
      } : {
        type: "preview",
        preview: ee.preview
      }
    }

    function ze(ee) {
      let {
        game: ie,
        disabled: He,
        showPlaceholder: ye
      } = ee;
      return null !== ie ? (0, Te.jsx)(qe.c, {
        source: Xe(ie),
        gameWidth: "100%",
        useLongRatio: !0,
        disabled: He,
        entrySource: "customGamePlace"
      }) : ye ? (0, Te.jsx)(qe.b, {
        gameWidth: "100%",
        useLongRatio: !0
      }) : null
    }

    function Be(ee) {
      var ie;
      let {
        category: He,
        title: ye,
        tintColour: be,
        layout: Me,
        games: Ke,
        landscape: Ue = !1
      } = ee;
      const {
        followsLeader: Fe
      } = (0, fe.c)(), Je = null !== (ie = null === Ke || void 0 === Ke ? void 0 : Ke.slice(0, Me.gameCount)) && void 0 !== ie ? ie : [], Re = {
        "--custom-game-place-tint": be
      };
      return (0, Te.jsxs)("div", {
        className: "CustomGamePlacePanel AnimFadeIn",
        style: Re,
        children: [(0, Te.jsx)("h2", {
          className: "CustomGamePlacePanelHeading",
          children: (0, Te.jsxs)(oe.LinkPreserveSearch, {
            to: `/custom-games/${encodeURIComponent(He)}`,
            className: "CustomGamePlacePanelTitle SmallTextBold",
            children: [(0, Te.jsx)("span", {
              children: ye
            }), (0, Te.jsx)(ke.e, {
              name: "arrow-up"
            })]
          })
        }), (0, Te.jsx)("div", {
          className: "CustomGamePlacePanelGames",
          style: {
            gridTemplateColumns: `repeat(${Ue?Me.columnCount:pe}, ${Ue?"var(--custom-game-place-tile-width)":"minmax(0, 1fr)"})`
          },
          children: Array.from({
            length: Me.gameCount
          }, ((ee, ie) => {
            var He;
            return (0, Te.jsx)(ze, {
              game: null !== (He = Je[ie]) && void 0 !== He ? He : null,
              disabled: Fe,
              showPlaceholder: !Ke
            }, ie)
          }))
        })]
      })
    }

    function Ee(ee) {
      let {
        categories: ie
      } = ee;

      function He(ee) {
        const He = ie[ee];
        return (0, Te.jsx)(Be, {
          ...He,
          landscape: !0
        }, He.id)
      }
      return (0, Te.jsxs)("div", {
        className: "CustomGamePlaceMosaic CustomGamePlaceMosaicLandscape AnimFadeIn",
        children: [(0, Te.jsxs)("div", {
          className: "CustomGamePlaceUpper",
          children: [(0, Te.jsxs)("div", {
            className: "CustomGamePlaceMain",
            children: [(0, Te.jsxs)("div", {
              className: "CustomGamePlaceRow",
              children: [He(0), He(2)]
            }), He(1)]
          }), He(4)]
        }), (0, Te.jsxs)("div", {
          className: "CustomGamePlaceRow",
          children: [He(3), He(5)]
        })]
      })
    }
    const ge = ["section1", "section2", "section3", "section4", "section5", "section6"],
      Oe = {
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
    var de = He(1062);

    function We() {
      var ee;
      const {
        t: ie
      } = (0, Fe.v)(), He = (0, Me.B)(), ye = (0, de.g)(), ke = (0, Re.b)({
        refresh: !0
      }), qe = He.customGamePlace;
      if (!(0, Ke.g)(qe)) return (0, Te.jsx)(oe.NavigatePreserveSearch, {
        to: "/"
      });
      const fe = Ue.e[qe],
        pe = Ke.b[qe],
        Xe = null !== (ee = null === ke || void 0 === ke ? void 0 : ke[qe]) && void 0 !== ee ? ee : null,
        ze = [];
      for (let be = 0; be < pe.length; be++) {
        var We;
        const ee = ge[be];
        if (!ee) continue;
        const He = pe[be];
        ze.push({
          id: He.id,
          category: He.category,
          title: ie(He.displayTranslationKey),
          tintColour: He.tintColour,
          layout: Oe[ee],
          games: null !== (We = null === Xe || void 0 === Xe ? void 0 : Xe[He.id]) && void 0 !== We ? We : null
        })
      }
      return (0, Te.jsxs)("div", {
        className: "CustomGamePlaceContainer AnimFadeIn",
        children: [(0, Te.jsx)("div", {
          className: "BackgroundImage",
          style: {
            backgroundImage: `url(/textures/games/${qe}/${fe.largePicture}.png)`
          }
        }), (0, Te.jsx)("h1", {
          className: "VisuallyHidden",
          children: ie(fe.title)
        }), (0, Te.jsx)("div", {
          className: "CustomGamePlaceHeaderContainer",
          children: (0, Te.jsx)(Je.b, {
            onClick: () => (0, oe.navigatePreserveSearch)("/"),
            children: ie("homePage:backToGames")
          })
        }), !ye && (0, Te.jsx)(Ee, {
          categories: ze
        }), ye && (0, Te.jsx)("div", {
          className: be()("CustomGamePlaceMosaic", "CustomGamePlaceMosaicPortrait"),
          children: ze.map((ee => (0, Te.jsx)(Be, {
            category: ee.category,
            title: ee.title,
            tintColour: ee.tintColour,
            layout: ee.layout,
            games: ee.games
          }, ee.id)))
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);