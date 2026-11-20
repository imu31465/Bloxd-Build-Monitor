export const id = 98;
export const ids = [98];
export const modules = {
  4519: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      default: () => rz
    });
    var Fz = sz(1493),
      Wz = sz(65),
      Xz = sz(1173),
      Oz = sz(1116),
      oz = sz(1106),
      vz = sz(2014),
      Uz = sz(1483),
      Kz = sz(1306),
      uz = sz(1100),
      Nz = sz(30),
      bz = sz(1419),
      wz = sz(1036),
      Dz = sz(2372),
      gz = sz(1506),
      Hz = sz(1087);
    const Bz = [{
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
      Pz = {
        myGames: "/studio",
        leaderboard: "/studio/leaderboard",
        docs: "/studio/docs"
      };

    function rz() {
      const {
        t: zz
      } = (0, Xz.B)(), tz = (0, Uz.useNavigatePreserveSearch)(), sz = (0, Fz.s)(), {
        isUserContextUpdating: rz
      } = (0, Oz.b)(), Yz = (0, vz.c)(), xz = (0, oz.i)(), mz = (Jz = sz.pathname).startsWith(gz.p) ? null : Jz.startsWith(Pz.docs) ? "docs" : Jz.startsWith(Pz.leaderboard) ? "leaderboard" : "myGames";
      var Jz;
      const Iz = function(zz) {
        if (!zz.startsWith(gz.p)) return {
          title: "studio:leaveStudio",
          icon: "left-from-bracket",
          to: "/"
        };
        const tz = (0, Uz.getPreviousLocation)();
        return {
          title: "general:back",
          icon: "arrow-left",
          to: null !== tz && tz.startsWith(Pz.myGames) ? -1 : Pz.myGames
        }
      }(sz.pathname);
      return (0, Wz.useEffect)((() => {
        Nz.b.set({
          gameState: "studio",
          openEverythingMenuName: null
        })
      }), []), (0, Hz.jsxs)("div", {
        className: "StudioLayout AnimFadeIn",
        children: [Yz && (0, Hz.jsx)("aside", {
          className: "StudioLayoutLeft",
          children: (0, Hz.jsx)(Dz.e, {})
        }), (0, Hz.jsxs)("div", {
          className: "StudioLayoutRight",
          children: [(0, Hz.jsxs)("div", {
            className: "StudioTop",
            children: [(0, Hz.jsx)(uz.d, {
              show: !0,
              socialBarIsDocked: Yz
            }), (0, Hz.jsxs)("nav", {
              className: "StudioNav",
              children: [(0, Hz.jsx)(bz.e, {
                icon: Iz.icon,
                onClick: () => {
                  tz(Iz.to)
                },
                children: zz(Iz.title)
              }), (0, Hz.jsx)("div", {
                className: "StudioNavTabs",
                children: Bz.map((sz => (0, Hz.jsxs)(bz.Q, {
                  active: mz === sz.id,
                  href: Pz[sz.id],
                  onClick: () => {
                    tz(Pz[sz.id])
                  },
                  children: [(0, Hz.jsx)(wz.c, {
                    name: sz.icon
                  }), !xz && zz(sz.title)]
                }, sz.id)))
              })]
            })]
          }), (0, Hz.jsxs)("main", {
            className: "StudioBottom",
            children: [rz && (0, Hz.jsx)("div", {
              className: "StudioCentredMessage",
              children: (0, Hz.jsx)(Kz.d, {})
            }), !rz && (0, Hz.jsx)("div", {
              className: "StudioContent",
              children: (0, Hz.jsx)(Fz.d, {})
            })]
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);