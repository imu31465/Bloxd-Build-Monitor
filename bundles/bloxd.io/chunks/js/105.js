export const id = 105;
export const ids = [105];
export const modules = {
  36527: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => gd
    });
    var pd = kd(1044),
      Nd = kd.n(pd),
      Wd = kd(56),
      Pd = kd(4429),
      Zd = kd(1103);

    function gd(dd) {
      let {
        locked: Jd,
        children: kd
      } = dd;
      const pd = (0, Wd.useRef)(null),
        gd = (0, Pd.b)(pd, "y");
      return (0, Zd.jsx)("div", {
        ref: pd,
        className: Nd()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: gd.before,
          CreateCustomLobbyBodyMoreBelow: gd.after
        }),
        "data-pad-ignore": Jd || void 0,
        children: kd
      })
    }
  },
  36596: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      showFirstWorldSetupPopup: () => Od
    });
    kd(4825), kd(36513);
    var pd = kd(4482),
      Nd = kd(56),
      Wd = kd(4434),
      Pd = kd(1211),
      Zd = kd(1371),
      gd = kd(36527),
      Cd = kd(4829),
      Kd = kd(1461),
      od = kd(3342),
      ld = kd(36524),
      Qd = kd(4475),
      Ld = kd(1103);

    function Od(dd) {
      const Jd = {
        requested: !1,
        closed: !1
      };
      Zd.NotificationProvider.showCustomPopup({
        body: kd => (0, Ld.jsx)(ed, {
          flow: Jd,
          close: kd,
          ...dd
        }),
        middleScreenPopupClassName: "CreateCustomLobbyPopup",
        onClose: () => {
          Jd.closed = !0, Jd.requested || (0, Qd.g)()
        }
      })
    }

    function ed(dd) {
      let {
        flow: Jd,
        close: kd,
        onCreating: Zd,
        onCreated: Od,
        onFailedClosed: ed,
        join: Rd
      } = dd;
      const {
        t: Id
      } = (0, Pd.B)(), [Gd, vd] = (0, Nd.useState)(pd.s), [xd, qd] = (0, Nd.useState)(!1), [Bd, sd] = (0, Nd.useState)(""), ad = (0, od.d)();
      (0, Nd.useEffect)((() => {
        (0, Qd.q)()
      }), []);
      const Md = dd => ({
        isEnabled: () => Gd.plugins[dd],
        XM: Jd => {
          (0, Qd.i)({
            plugin: dd,
            enabled: Jd
          }), vd({
            ...Gd,
            plugins: {
              ...Gd.plugins,
              [dd]: Jd
            }
          })
        }
      });
      return (0, Ld.jsxs)("div", {
        className: "CreateCustomLobby",
        children: [(0, Ld.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, Ld.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: Id("homePage:myWorld")
          })
        }), (0, Ld.jsx)(gd.c, {
          locked: xd,
          children: (0, Ld.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [(0, Ld.jsx)(ld.e, {
              value: Gd.defaultGamemode,
              onChange: dd => {
                (0, pd.t)(dd) && dd !== Gd.defaultGamemode && ((0, Qd.i)({
                  defaultGamemode: dd
                }), vd({
                  ...Gd,
                  defaultGamemode: dd
                }))
              },
              showAll: !1,
              disabled: xd
            }), (0, Ld.jsx)(ld.h, {
              mapTypes: pd.h,
              value: Gd.mapType,
              onChange: dd => {
                (0, pd.v)(dd) && dd !== Gd.mapType && ((0, Qd.i)({
                  mapType: dd
                }), vd({
                  ...Gd,
                  mapType: dd
                }))
              },
              showAll: !1,
              disabled: xd
            }), (0, Ld.jsx)(Cd.d, {
              callbacks: {
                dayNight: Md("dayNight"),
                fallDamage: Md("fallDamage"),
                survivalGuns: Md("survivalGuns")
              },
              disabled: xd,
              advancedMode: !1
            })]
          })
        }), (0, Ld.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, Ld.jsx)(Kd.j, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: xd,
            onClick: () => {
              Jd.requested = !0, qd(!0), Zd(!0), sd(""), (0, Qd.m)(Gd), Wd.e.createPersonalWorld(Gd).then((dd => {
                Zd(!1);
                const pd = Od(dd);
                !Jd.closed && ad.current ? (kd(), Rd(dd)) : pd || (0, Qd.g)()
              }), (dd => {
                if (console.error("Failed to create personal world:", dd), Zd(!1), Jd.requested = !1, Jd.closed || !ad.current) return (0, Qd.g)(), void ed(dd);
                sd(dd.message), qd(!1)
              }))
            },
            children: Id("general:play")
          }), Bd && (0, Ld.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: Bd
          })]
        })]
      })
    }
  },
  4829: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Cd
    });
    var pd = kd(1044),
      Nd = kd.n(pd),
      Wd = kd(4482),
      Pd = kd(1211),
      Zd = kd(1103);
    const gd = [...Wd.l, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function Cd(dd) {
      const {
        disabled: Jd,
        hideWrapper: kd
      } = dd, {
        t: pd
      } = (0, Pd.B)(), Cd = dd.advancedMode ? gd.map((Jd => [Jd, dd.callbacks[Jd]])) : Wd.l.map((Jd => [Jd, dd.callbacks[Jd]])), od = (0, Zd.jsx)("div", {
        className: Nd()("PluginsGrid", {
          SectionBody: !kd
        }),
        children: Cd.map((dd => {
          let [kd, pd] = dd;
          return (0, Zd.jsx)(Kd, {
            plugin: kd,
            callbacks: pd,
            disabled: Jd
          }, kd)
        }))
      });
      return kd ? od : (0, Zd.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, Zd.jsx)("div", {
          className: "SectionTitle",
          children: pd("worldBuilder:pluginsSection")
        }), od]
      })
    }

    function Kd(dd) {
      let {
        plugin: Jd,
        callbacks: {
          isEnabled: kd,
          XM: pd
        },
        disabled: Wd
      } = dd;
      const {
        t: gd
      } = (0, Pd.B)(), Cd = kd();
      return (0, Zd.jsxs)("div", {
        className: Nd()("PluginCard", {
          PluginCardEnabled: Cd,
          PluginCardDisabledForm: Wd
        }),
        "data-pad-focusable": !0,
        "aria-disabled": Wd || void 0,
        onClick: () => {
          Wd || pd(!Cd)
        },
        children: [(0, Zd.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, Zd.jsx)("img", {
            src: `/textures/games/classic/customGames/${Jd}.png`,
            alt: Jd
          })
        }), (0, Zd.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, Zd.jsx)("div", {
            className: "PluginCardTitle",
            children: gd(od[Jd])
          }), (0, Zd.jsx)("div", {
            className: "PluginCardDescription",
            children: gd(ld[Jd])
          })]
        }), (0, Zd.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: gd(Cd ? "general:on" : "general:off")
        })]
      })
    }
    const od = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      ld = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  36524: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Cd,
      h: () => Kd
    });
    kd(56);
    var pd = kd(1044),
      Nd = kd.n(pd),
      Wd = kd(4482),
      Pd = kd(300),
      Zd = kd(1211),
      gd = kd(1103);

    function Cd(dd) {
      let {
        value: Jd,
        onChange: kd,
        showAll: pd,
        disabled: Cd = !1
      } = dd;
      const {
        t: Kd
      } = (0, Zd.B)();
      return (0, gd.jsxs)("div", {
        className: Nd()("BloxdForm GamemodeForm", {
          BasicOptions: !pd
        }),
        children: [(0, gd.jsx)("div", {
          className: "SectionTitle",
          children: Kd("classic:defaultGamemode")
        }), (0, gd.jsx)("div", {
          className: "SectionBody",
          children: Wd.B.map((dd => pd || (0, Wd.t)(dd) ? (0, gd.jsx)("button", {
            type: "button",
            className: Nd()("WorldGamemode", {
              Selected: Jd === dd
            }),
            disabled: Cd,
            onClick: () => {
              kd(dd)
            },
            style: {
              "--background-image": `url(${Pd.x[dd]})`
            },
            children: Pd.w[dd]
          }, dd) : null))
        })]
      })
    }

    function Kd(dd) {
      let {
        mapTypes: Jd,
        value: kd,
        onChange: pd,
        showAll: Cd,
        disabled: Kd = !1,
        children: od
      } = dd;
      const {
        t: ld
      } = (0, Zd.B)();
      return (0, gd.jsxs)("div", {
        className: Nd()("BloxdForm MapTypeForm", {
          BasicOptions: !Cd
        }),
        children: [(0, gd.jsx)("div", {
          className: "SectionTitle",
          children: ld("customLobby:mapType")
        }), (0, gd.jsx)("div", {
          className: "SectionBody",
          children: Jd.map((dd => Cd || (0, Wd.v)(dd) ? (0, gd.jsx)("button", {
            type: "button",
            className: Nd()("MapType", {
              Selected: kd === dd
            }),
            disabled: Kd,
            onClick: () => {
              pd(dd)
            },
            style: {
              "--background-image": `url(${Pd.o[dd]})`
            },
            children: Pd.k[dd]
          }, dd) : null))
        }), od]
      })
    }
  },
  4825: () => {},
  36513: () => {}
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);