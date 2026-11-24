export const id = 108;
export const ids = [108];
export const modules = {
  36430: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => uB
    });
    var QB = zB(1091),
      nB = zB.n(QB),
      dB = zB(62),
      IB = zB(4687),
      NB = zB(1148);

    function uB(BB) {
      let {
        locked: jB,
        children: zB
      } = BB;
      const QB = (0, dB.useRef)(null),
        uB = (0, IB.e)(QB, "y");
      return (0, NB.jsx)("div", {
        ref: QB,
        className: nB()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: uB.before,
          CreateCustomLobbyBodyMoreBelow: uB.after
        }),
        "data-pad-ignore": jB || void 0,
        children: zB
      })
    }
  },
  36507: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      showFirstWorldSetupPopup: () => mB
    });
    zB(5031), zB(36409);
    var QB = zB(4729),
      nB = zB(62),
      dB = zB(4696),
      IB = zB(1240),
      NB = zB(1381),
      uB = zB(36430),
      UB = zB(5036),
      aB = zB(1478),
      pB = zB(3593),
      rB = zB(36426),
      sB = zB(4721),
      JB = zB(1148);

    function mB(BB) {
      const jB = {
        requested: !1,
        closed: !1
      };
      NB.NotificationProvider.showCustomPopup({
        body: zB => (0, JB.jsx)(yB, {
          flow: jB,
          close: zB,
          ...BB
        }),
        middleScreenPopupClassName: "CreateCustomLobbyPopup",
        onClose: () => {
          jB.closed = !0, jB.requested || (0, sB.g)()
        }
      })
    }

    function yB(BB) {
      let {
        flow: jB,
        close: zB,
        onCreating: NB,
        onCreated: mB,
        onFailedClosed: yB,
        join: kB
      } = BB;
      const {
        t: GB
      } = (0, IB.D)(), [LB, gB] = (0, nB.useState)(QB.q), [tB, SB] = (0, nB.useState)(!1), [MB, EB] = (0, nB.useState)(""), iB = (0, pB.d)();
      (0, nB.useEffect)((() => {
        (0, sB.l)()
      }), []);
      const qB = BB => ({
        isEnabled: () => LB.plugins[BB],
        mH: jB => {
          (0, sB.j)({
            plugin: BB,
            enabled: jB
          }), gB({
            ...LB,
            plugins: {
              ...LB.plugins,
              [BB]: jB
            }
          })
        }
      });
      return (0, JB.jsxs)("div", {
        className: "CreateCustomLobby",
        children: [(0, JB.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, JB.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: GB("homePage:myWorld")
          })
        }), (0, JB.jsx)(uB.d, {
          locked: tB,
          children: (0, JB.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [(0, JB.jsx)(rB.b, {
              value: LB.defaultGamemode,
              onChange: BB => {
                (0, QB.u)(BB) && BB !== LB.defaultGamemode && ((0, sB.j)({
                  defaultGamemode: BB
                }), gB({
                  ...LB,
                  defaultGamemode: BB
                }))
              },
              showAll: !1,
              disabled: tB
            }), (0, JB.jsx)(rB.f, {
              mapTypes: QB.d,
              value: LB.mapType,
              onChange: BB => {
                (0, QB.v)(BB) && BB !== LB.mapType && ((0, sB.j)({
                  mapType: BB
                }), gB({
                  ...LB,
                  mapType: BB
                }))
              },
              showAll: !1,
              disabled: tB
            }), (0, JB.jsx)(UB.b, {
              callbacks: {
                dayNight: qB("dayNight"),
                fallDamage: qB("fallDamage"),
                survivalGuns: qB("survivalGuns")
              },
              disabled: tB,
              advancedMode: !1
            })]
          })
        }), (0, JB.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, JB.jsx)(aB.m, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: tB,
            onClick: () => {
              jB.requested = !0, SB(!0), NB(!0), EB(""), (0, sB.k)(LB), dB.b.createPersonalWorld(LB).then((BB => {
                NB(!1);
                const QB = mB(BB);
                !jB.closed && iB.current ? (zB(), kB(BB)) : QB || (0, sB.g)()
              }), (BB => {
                if (console.error("Failed to create personal world:", BB), NB(!1), jB.requested = !1, jB.closed || !iB.current) return (0, sB.g)(), void yB(BB);
                EB(BB.message), SB(!1)
              }))
            },
            children: GB("general:play")
          }), MB && (0, JB.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: MB
          })]
        })]
      })
    }
  },
  5036: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => UB
    });
    var QB = zB(1091),
      nB = zB.n(QB),
      dB = zB(4729),
      IB = zB(1240),
      NB = zB(1148);
    const uB = [...dB.e, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function UB(BB) {
      const {
        disabled: jB,
        hideWrapper: zB
      } = BB, {
        t: QB
      } = (0, IB.D)(), UB = BB.advancedMode ? uB.map((jB => [jB, BB.callbacks[jB]])) : dB.e.map((jB => [jB, BB.callbacks[jB]])), pB = (0, NB.jsx)("div", {
        className: nB()("PluginsGrid", {
          SectionBody: !zB
        }),
        children: UB.map((BB => {
          let [zB, QB] = BB;
          return (0, NB.jsx)(aB, {
            plugin: zB,
            callbacks: QB,
            disabled: jB
          }, zB)
        }))
      });
      return zB ? pB : (0, NB.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, NB.jsx)("div", {
          className: "SectionTitle",
          children: QB("worldBuilder:pluginsSection")
        }), pB]
      })
    }

    function aB(BB) {
      let {
        plugin: jB,
        callbacks: {
          isEnabled: zB,
          mH: QB
        },
        disabled: dB
      } = BB;
      const {
        t: uB
      } = (0, IB.D)(), UB = zB();
      return (0, NB.jsxs)("div", {
        className: nB()("PluginCard", {
          PluginCardEnabled: UB,
          PluginCardDisabledForm: dB
        }),
        "data-pad-focusable": !0,
        "aria-disabled": dB || void 0,
        onClick: () => {
          dB || QB(!UB)
        },
        children: [(0, NB.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, NB.jsx)("img", {
            src: `/textures/games/classic/customGames/${jB}.png`,
            alt: jB
          })
        }), (0, NB.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, NB.jsx)("div", {
            className: "PluginCardTitle",
            children: uB(pB[jB])
          }), (0, NB.jsx)("div", {
            className: "PluginCardDescription",
            children: uB(rB[jB])
          })]
        }), (0, NB.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: uB(UB ? "general:on" : "general:off")
        })]
      })
    }
    const pB = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      rB = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  36426: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => UB,
      f: () => aB
    });
    zB(62);
    var QB = zB(1091),
      nB = zB.n(QB),
      dB = zB(4729),
      IB = zB(363),
      NB = zB(1240),
      uB = zB(1148);

    function UB(BB) {
      let {
        value: jB,
        onChange: zB,
        showAll: QB,
        disabled: UB = !1
      } = BB;
      const {
        t: aB
      } = (0, NB.D)();
      return (0, uB.jsxs)("div", {
        className: nB()("BloxdForm GamemodeForm", {
          BasicOptions: !QB
        }),
        children: [(0, uB.jsx)("div", {
          className: "SectionTitle",
          children: aB("classic:defaultGamemode")
        }), (0, uB.jsx)("div", {
          className: "SectionBody",
          children: dB.y.map((BB => QB || (0, dB.u)(BB) ? (0, uB.jsx)("button", {
            type: "button",
            className: nB()("WorldGamemode", {
              Selected: jB === BB
            }),
            disabled: UB,
            onClick: () => {
              zB(BB)
            },
            style: {
              "--background-image": `url(${IB.t[BB]})`
            },
            children: IB.r[BB]
          }, BB) : null))
        })]
      })
    }

    function aB(BB) {
      let {
        mapTypes: jB,
        value: zB,
        onChange: QB,
        showAll: UB,
        disabled: aB = !1,
        children: pB
      } = BB;
      const {
        t: rB
      } = (0, NB.D)();
      return (0, uB.jsxs)("div", {
        className: nB()("BloxdForm MapTypeForm", {
          BasicOptions: !UB
        }),
        children: [(0, uB.jsx)("div", {
          className: "SectionTitle",
          children: rB("customLobby:mapType")
        }), (0, uB.jsx)("div", {
          className: "SectionBody",
          children: jB.map((BB => UB || (0, dB.v)(BB) ? (0, uB.jsx)("button", {
            type: "button",
            className: nB()("MapType", {
              Selected: zB === BB
            }),
            disabled: aB,
            onClick: () => {
              QB(BB)
            },
            style: {
              "--background-image": `url(${IB.n[BB]})`
            },
            children: IB.m[BB]
          }, BB) : null))
        }), pB]
      })
    }
  },
  5031: () => {},
  36409: () => {}
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);