export const id = 212;
export const ids = [212];
export const modules = {
  36433: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      default: () => rq
    });
    var Yq = gq(1018),
      lq = gq.n(Yq),
      Oq = gq(1512),
      mq = gq(1015),
      xq = gq(729),
      Aq = gq(1183),
      cq = gq(1422),
      uq = gq(1498),
      Bq = gq(3440),
      Wq = gq(1025),
      Nq = gq(3358),
      aq = gq(2506),
      Vq = gq(1070);
    const dq = 2;

    function jq(qq) {
      return "firstPartyGame" === qq.type ? {
        type: "game",
        gameNameWithVariation: qq.gameNameWithVariation
      } : {
        type: "preview",
        preview: qq.preview
      }
    }

    function Hq(qq) {
      let {
        game: Eq,
        disabled: gq,
        showPlaceholder: Yq
      } = qq;
      return null !== Eq ? (0, Vq.jsx)(Nq.e, {
        source: jq(Eq),
        gameWidth: "100%",
        useLongRatio: !0,
        disabled: gq,
        entrySource: "customGamePlace"
      }) : Yq ? (0, Vq.jsx)(Nq.c, {
        gameWidth: "100%",
        useLongRatio: !0
      }) : null
    }

    function oq(qq) {
      var Eq;
      let {
        category: gq,
        title: Yq,
        tintColour: lq,
        layout: Oq,
        games: mq,
        landscape: xq = !1
      } = qq;
      const {
        followsLeader: Aq
      } = (0, aq.c)(), cq = null !== (Eq = null === mq || void 0 === mq ? void 0 : mq.slice(0, Oq.gameCount)) && void 0 !== Eq ? Eq : [], Bq = {
        "--custom-game-place-tint": lq
      };
      return (0, Vq.jsxs)("div", {
        className: "CustomGamePlacePanel AnimFadeIn",
        style: Bq,
        children: [(0, Vq.jsx)("h2", {
          className: "CustomGamePlacePanelHeading",
          children: (0, Vq.jsxs)(uq.LinkPreserveSearch, {
            to: `/custom-games/${encodeURIComponent(gq)}`,
            className: "CustomGamePlacePanelTitle SmallTextBold",
            children: [(0, Vq.jsx)("span", {
              children: Yq
            }), (0, Vq.jsx)(Wq.d, {
              name: "arrow-up"
            })]
          })
        }), (0, Vq.jsx)("div", {
          className: "CustomGamePlacePanelGames",
          style: {
            gridTemplateColumns: `repeat(${xq?Oq.columnCount:dq}, ${xq?"var(--custom-game-place-tile-width)":"minmax(0, 1fr)"})`
          },
          children: Array.from({
            length: Oq.gameCount
          }, ((qq, Eq) => {
            var gq;
            return (0, Vq.jsx)(Hq, {
              game: null !== (gq = cq[Eq]) && void 0 !== gq ? gq : null,
              disabled: Aq,
              showPlaceholder: !mq
            }, Eq)
          }))
        })]
      })
    }

    function Pq(qq) {
      let {
        categories: Eq
      } = qq;

      function gq(qq) {
        const gq = Eq[qq];
        return (0, Vq.jsx)(oq, {
          ...gq,
          landscape: !0
        }, gq.id)
      }
      return (0, Vq.jsxs)("div", {
        className: "CustomGamePlaceMosaic CustomGamePlaceMosaicLandscape AnimFadeIn",
        children: [(0, Vq.jsxs)("div", {
          className: "CustomGamePlaceUpper",
          children: [(0, Vq.jsxs)("div", {
            className: "CustomGamePlaceMain",
            children: [(0, Vq.jsxs)("div", {
              className: "CustomGamePlaceRow",
              children: [gq(0), gq(2)]
            }), gq(1)]
          }), gq(4)]
        }), (0, Vq.jsxs)("div", {
          className: "CustomGamePlaceRow",
          children: [gq(3), gq(5)]
        })]
      })
    }
    const Qq = ["section1", "section2", "section3", "section4", "section5", "section6"],
      yq = {
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
    var tq = gq(1086);

    function rq() {
      var qq;
      const {
        t: Eq
      } = (0, Aq.v)(), gq = (0, Oq.v)(), Yq = (0, tq.l)(), Wq = (0, Bq.d)({
        refresh: !0
      }), Nq = gq.customGamePlace;
      if (!(0, mq.m)(Nq)) return (0, Vq.jsx)(uq.NavigatePreserveSearch, {
        to: "/"
      });
      const aq = xq.c[Nq],
        dq = mq.e[Nq],
        jq = null !== (qq = null === Wq || void 0 === Wq ? void 0 : Wq[Nq]) && void 0 !== qq ? qq : null,
        Hq = [];
      for (let lq = 0; lq < dq.length; lq++) {
        var rq;
        const qq = Qq[lq];
        if (!qq) continue;
        const gq = dq[lq];
        Hq.push({
          id: gq.id,
          category: gq.category,
          title: Eq(gq.displayTranslationKey),
          tintColour: gq.tintColour,
          layout: yq[qq],
          games: null !== (rq = null === jq || void 0 === jq ? void 0 : jq[gq.id]) && void 0 !== rq ? rq : null
        })
      }
      return (0, Vq.jsxs)("div", {
        className: "CustomGamePlaceContainer AnimFadeIn",
        children: [(0, Vq.jsx)("div", {
          className: "BackgroundImage",
          style: {
            backgroundImage: `url(/textures/games/${Nq}/${aq.largePicture}.png)`
          }
        }), (0, Vq.jsx)("h1", {
          className: "VisuallyHidden",
          children: Eq(aq.title)
        }), (0, Vq.jsx)("div", {
          className: "CustomGamePlaceHeaderContainer",
          children: (0, Vq.jsx)(cq.d, {
            onClick: () => (0, uq.navigatePreserveSearch)("/"),
            children: Eq("homePage:backToGames")
          })
        }), !Yq && (0, Vq.jsx)(Pq, {
          categories: Hq
        }), Yq && (0, Vq.jsx)("div", {
          className: lq()("CustomGamePlaceMosaic", "CustomGamePlaceMosaicPortrait"),
          children: Hq.map((qq => (0, Vq.jsx)(oq, {
            category: qq.category,
            title: qq.title,
            tintColour: qq.tintColour,
            layout: qq.layout,
            games: qq.games
          }, qq.id)))
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);