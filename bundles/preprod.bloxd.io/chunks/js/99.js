export const id = 99;
export const ids = [99];
export const modules = {
  4724: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      default: () => Pq
    });
    var Yq = gq(1512),
      lq = gq(57),
      Oq = gq(1183),
      mq = gq(1101),
      xq = gq(1086),
      Aq = gq(2068),
      cq = gq(1498),
      uq = gq(1326),
      Bq = gq(1077),
      Wq = gq(24),
      Nq = gq(1422),
      aq = gq(1025),
      Vq = gq(2493),
      dq = gq(1529),
      jq = gq(1070);
    const Hq = [{
        id: "myGames",
        icon: "joystick",
        title: "studio:myGames"
      }, {
        id: "leaderboard",
        icon: "trophy",
        title: "studio:leaderboard"
      }, {
        id: "docs",
        icon: "file-lines",
        title: "general:docs"
      }],
      oq = {
        myGames: "/studio",
        leaderboard: "/studio/leaderboard",
        docs: "/studio/docs"
      };

    function Pq() {
      const {
        t: qq
      } = (0, Oq.v)(), Eq = (0, cq.useNavigatePreserveSearch)(), gq = (0, Yq.q)(), {
        isUserContextUpdating: Pq
      } = (0, mq.c)(), Qq = (0, Aq.e)(), yq = (0, xq.l)(), tq = (rq = gq.pathname).startsWith(dq.o) ? null : rq.startsWith(oq.docs) ? "docs" : rq.startsWith(oq.leaderboard) ? "leaderboard" : "myGames";
      var rq;
      const vq = function(qq) {
        if (!qq.startsWith(dq.o)) return {
          title: "studio:leaveStudio",
          icon: "left-from-bracket",
          to: "/"
        };
        const Eq = (0, cq.getPreviousLocation)();
        return {
          title: "general:back",
          icon: "arrow-left",
          to: null !== Eq && Eq.startsWith(oq.myGames) ? -1 : oq.myGames
        }
      }(gq.pathname);
      return (0, lq.useEffect)((() => {
        Wq.b.set({
          gameState: "studio",
          openEverythingMenuName: null
        })
      }), []), (0, jq.jsxs)("div", {
        className: "StudioLayout AnimFadeIn",
        children: [Qq && (0, jq.jsx)("aside", {
          className: "StudioLayoutLeft",
          children: (0, jq.jsx)(Vq.d, {})
        }), (0, jq.jsxs)("div", {
          className: "StudioLayoutRight",
          children: [(0, jq.jsxs)("div", {
            className: "StudioTop",
            children: [(0, jq.jsx)(Bq.b, {
              show: !0,
              socialBarIsDocked: Qq
            }), (0, jq.jsxs)("nav", {
              className: "StudioNav",
              children: [(0, jq.jsx)(Nq.d, {
                icon: vq.icon,
                onClick: () => {
                  Eq(vq.to)
                },
                children: qq(vq.title)
              }), (0, jq.jsx)("div", {
                className: "StudioNavTabs",
                children: Hq.map((gq => (0, jq.jsxs)(Nq.Q, {
                  active: tq === gq.id,
                  href: oq[gq.id],
                  onClick: () => {
                    Eq(oq[gq.id])
                  },
                  children: [(0, jq.jsx)(aq.d, {
                    name: gq.icon
                  }), !yq && qq(gq.title)]
                }, gq.id)))
              })]
            })]
          }), (0, jq.jsxs)("main", {
            className: "StudioBottom",
            children: [Pq && (0, jq.jsx)("div", {
              className: "StudioCentredMessage",
              children: (0, jq.jsx)(uq.e, {})
            }), !Pq && (0, jq.jsx)("div", {
              className: "StudioContent",
              children: (0, jq.jsx)(Yq.f, {})
            })]
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);