export const id = 98;
export const ids = [98];
export const modules = {
  4654: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      default: () => sz
    });
    var Ez = bz(1490),
      nz = bz(56),
      iz = bz(1181),
      lz = bz(1114),
      Mz = bz(1102),
      tz = bz(2009),
      Hz = bz(1482),
      Oz = bz(1305),
      pz = bz(1096),
      dz = bz(20),
      Fz = bz(1419),
      Zz = bz(1047),
      Rz = bz(2425),
      Kz = bz(1513),
      wz = bz(1089);
    const Xz = [{
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
      fz = {
        myGames: "/studio",
        leaderboard: "/studio/leaderboard",
        docs: "/studio/docs"
      };

    function sz() {
      const {
        t: zz
      } = (0, iz.F)(), uz = (0, Hz.useNavigatePreserveSearch)(), bz = (0, Ez.v)(), {
        isUserContextUpdating: sz
      } = (0, lz.c)(), rz = (0, tz.e)(), oz = (0, Mz.n)(), Nz = (vz = bz.pathname).startsWith(Kz.u) ? null : vz.startsWith(fz.docs) ? "docs" : vz.startsWith(fz.leaderboard) ? "leaderboard" : "myGames";
      var vz;
      const xz = function(zz) {
        if (!zz.startsWith(Kz.u)) return {
          title: "studio:leaveStudio",
          icon: "left-from-bracket",
          to: "/"
        };
        const uz = (0, Hz.getPreviousLocation)();
        return {
          title: "general:back",
          icon: "arrow-left",
          to: null !== uz && uz.startsWith(fz.myGames) ? -1 : fz.myGames
        }
      }(bz.pathname);
      return (0, nz.useEffect)((() => {
        dz.e.set({
          gameState: "studio",
          openEverythingMenuName: null
        })
      }), []), (0, wz.jsxs)("div", {
        className: "StudioLayout AnimFadeIn",
        children: [rz && (0, wz.jsx)("aside", {
          className: "StudioLayoutLeft",
          children: (0, wz.jsx)(Rz.c, {})
        }), (0, wz.jsxs)("div", {
          className: "StudioLayoutRight",
          children: [(0, wz.jsxs)("div", {
            className: "StudioTop",
            children: [(0, wz.jsx)(pz.d, {
              show: !0,
              socialBarIsDocked: rz
            }), (0, wz.jsxs)("nav", {
              className: "StudioNav",
              children: [(0, wz.jsx)(Fz.d, {
                icon: xz.icon,
                onClick: () => {
                  uz(xz.to)
                },
                children: zz(xz.title)
              }), (0, wz.jsx)("div", {
                className: "StudioNavTabs",
                children: Xz.map((bz => (0, wz.jsxs)(Fz.V, {
                  active: Nz === bz.id,
                  href: fz[bz.id],
                  onClick: () => {
                    uz(fz[bz.id])
                  },
                  children: [(0, wz.jsx)(Zz.c, {
                    name: bz.icon
                  }), !oz && zz(bz.title)]
                }, bz.id)))
              })]
            })]
          }), (0, wz.jsxs)("main", {
            className: "StudioBottom",
            children: [sz && (0, wz.jsx)("div", {
              className: "StudioCentredMessage",
              children: (0, wz.jsx)(Oz.c, {})
            }), !sz && (0, wz.jsx)("div", {
              className: "StudioContent",
              children: (0, wz.jsx)(Ez.f, {})
            })]
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);