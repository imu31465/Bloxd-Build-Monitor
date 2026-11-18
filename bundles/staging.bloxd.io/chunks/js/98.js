export const id = 98;
export const ids = [98];
export const modules = {
  35394: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => YB
    });
    var VB = dB(933),
      yB = dB.n(VB),
      pB = dB(62),
      lB = dB(3988),
      JB = dB(980);

    function YB(BB) {
      let {
        locked: TB,
        children: dB
      } = BB;
      const VB = (0, pB.useRef)(null),
        YB = (0, lB.d)(VB, "y");
      return (0, JB.jsx)("div", {
        ref: VB,
        className: yB()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: YB.before,
          CreateCustomLobbyBodyMoreBelow: YB.after
        }),
        "data-pad-ignore": TB || void 0,
        children: dB
      })
    }
  },
  35450: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      showFirstWorldSetupPopup: () => uB
    });
    dB(4346), dB(35373);
    var VB = dB(4027),
      yB = dB(62),
      pB = dB(3993),
      lB = dB(1078),
      JB = dB(1235),
      YB = dB(35394),
      gB = dB(4354),
      oB = dB(1324),
      kB = dB(2983),
      LB = dB(35386),
      OB = dB(4016),
      DB = dB(980);

    function uB(BB) {
      const TB = {
        requested: !1,
        closed: !1
      };
      JB.NotificationProvider.showCustomPopup({
        body: dB => (0, DB.jsx)(HB, {
          flow: TB,
          close: dB,
          ...BB
        }),
        middleScreenPopupClassName: "CreateCustomLobbyPopup",
        onClose: () => {
          TB.closed = !0, TB.requested || (0, OB.e)()
        }
      })
    }

    function HB(BB) {
      let {
        flow: TB,
        close: dB,
        onCreating: JB,
        onCreated: uB,
        onFailedClosed: HB,
        join: EB
      } = BB;
      const {
        t: vB
      } = (0, lB.z)(), [mB, iB] = (0, yB.useState)(VB.q), [NB, tB] = (0, yB.useState)(!1), [fB, sB] = (0, yB.useState)(""), MB = (0, kB.b)();
      (0, yB.useEffect)((() => {
        (0, OB.l)()
      }), []);
      const zB = BB => ({
        isEnabled: () => mB.plugins[BB],
        hN: TB => {
          (0, OB.g)({
            plugin: BB,
            enabled: TB
          }), iB({
            ...mB,
            plugins: {
              ...mB.plugins,
              [BB]: TB
            }
          })
        }
      });
      return (0, DB.jsxs)("div", {
        className: "CreateCustomLobby",
        children: [(0, DB.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, DB.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: vB("homePage:myWorld")
          })
        }), (0, DB.jsx)(YB.e, {
          locked: NB,
          children: (0, DB.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [(0, DB.jsx)(LB.c, {
              value: mB.defaultGamemode,
              onChange: BB => {
                (0, VB.u)(BB) && BB !== mB.defaultGamemode && ((0, OB.g)({
                  defaultGamemode: BB
                }), iB({
                  ...mB,
                  defaultGamemode: BB
                }))
              },
              showAll: !1,
              disabled: NB
            }), (0, DB.jsx)(LB.g, {
              mapTypes: VB.d,
              value: mB.mapType,
              onChange: BB => {
                (0, VB.x)(BB) && BB !== mB.mapType && ((0, OB.g)({
                  mapType: BB
                }), iB({
                  ...mB,
                  mapType: BB
                }))
              },
              showAll: !1,
              disabled: NB
            }), (0, DB.jsx)(gB.b, {
              callbacks: {
                dayNight: zB("dayNight"),
                fallDamage: zB("fallDamage"),
                survivalGuns: zB("survivalGuns")
              },
              disabled: NB,
              advancedMode: !1
            })]
          })
        }), (0, DB.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, DB.jsx)(oB.k, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: NB,
            onClick: () => {
              TB.requested = !0, tB(!0), JB(!0), sB(""), (0, OB.h)(mB), pB.e.createPersonalWorld(mB).then((BB => {
                JB(!1);
                const VB = uB(BB);
                !TB.closed && MB.current ? (dB(), EB(BB)) : VB || (0, OB.e)()
              }), (BB => {
                if (console.error("Failed to create personal world:", BB), JB(!1), TB.requested = !1, TB.closed || !MB.current) return (0, OB.e)(), void HB(BB);
                sB(BB.message), tB(!1)
              }))
            },
            children: vB("general:play")
          }), fB && (0, DB.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: fB
          })]
        })]
      })
    }
  },
  4354: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => gB
    });
    var VB = dB(933),
      yB = dB.n(VB),
      pB = dB(4027),
      lB = dB(1078),
      JB = dB(980);
    const YB = [...pB.f, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function gB(BB) {
      const {
        disabled: TB,
        hideWrapper: dB
      } = BB, {
        t: VB
      } = (0, lB.z)(), gB = BB.advancedMode ? YB.map((TB => [TB, BB.callbacks[TB]])) : pB.f.map((TB => [TB, BB.callbacks[TB]])), kB = (0, JB.jsx)("div", {
        className: yB()("PluginsGrid", {
          SectionBody: !dB
        }),
        children: gB.map((BB => {
          let [dB, VB] = BB;
          return (0, JB.jsx)(oB, {
            plugin: dB,
            callbacks: VB,
            disabled: TB
          }, dB)
        }))
      });
      return dB ? kB : (0, JB.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, JB.jsx)("div", {
          className: "SectionTitle",
          children: VB("worldBuilder:pluginsSection")
        }), kB]
      })
    }

    function oB(BB) {
      let {
        plugin: TB,
        callbacks: {
          isEnabled: dB,
          hN: VB
        },
        disabled: pB
      } = BB;
      const {
        t: YB
      } = (0, lB.z)(), gB = dB();
      return (0, JB.jsxs)("div", {
        className: yB()("PluginCard", {
          PluginCardEnabled: gB,
          PluginCardDisabledForm: pB
        }),
        "data-pad-focusable": !0,
        "aria-disabled": pB || void 0,
        onClick: () => {
          pB || VB(!gB)
        },
        children: [(0, JB.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, JB.jsx)("img", {
            src: `/textures/games/classic/customGames/${TB}.png`,
            alt: TB
          })
        }), (0, JB.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, JB.jsx)("div", {
            className: "PluginCardTitle",
            children: YB(kB[TB])
          }), (0, JB.jsx)("div", {
            className: "PluginCardDescription",
            children: YB(LB[TB])
          })]
        }), (0, JB.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: YB(gB ? "general:on" : "general:off")
        })]
      })
    }
    const kB = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      LB = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  35386: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => gB,
      g: () => oB
    });
    dB(62);
    var VB = dB(933),
      yB = dB.n(VB),
      pB = dB(4027),
      lB = dB(270),
      JB = dB(1078),
      YB = dB(980);

    function gB(BB) {
      let {
        value: TB,
        onChange: dB,
        showAll: VB,
        disabled: gB = !1
      } = BB;
      const {
        t: oB
      } = (0, JB.z)();
      return (0, YB.jsxs)("div", {
        className: yB()("BloxdForm GamemodeForm", {
          BasicOptions: !VB
        }),
        children: [(0, YB.jsx)("div", {
          className: "SectionTitle",
          children: oB("classic:defaultGamemode")
        }), (0, YB.jsx)("div", {
          className: "SectionBody",
          children: pB.z.map((BB => VB || (0, pB.u)(BB) ? (0, YB.jsx)("button", {
            type: "button",
            className: yB()("WorldGamemode", {
              Selected: TB === BB
            }),
            disabled: gB,
            onClick: () => {
              dB(BB)
            },
            style: {
              "--background-image": `url(${lB.o[BB]})`
            },
            children: lB.n[BB]
          }, BB) : null))
        })]
      })
    }

    function oB(BB) {
      let {
        mapTypes: TB,
        value: dB,
        onChange: VB,
        showAll: gB,
        disabled: oB = !1,
        children: kB
      } = BB;
      const {
        t: LB
      } = (0, JB.z)();
      return (0, YB.jsxs)("div", {
        className: yB()("BloxdForm MapTypeForm", {
          BasicOptions: !gB
        }),
        children: [(0, YB.jsx)("div", {
          className: "SectionTitle",
          children: LB("customLobby:mapType")
        }), (0, YB.jsx)("div", {
          className: "SectionBody",
          children: TB.map((BB => gB || (0, pB.x)(BB) ? (0, YB.jsx)("button", {
            type: "button",
            className: yB()("MapType", {
              Selected: dB === BB
            }),
            disabled: oB,
            onClick: () => {
              VB(BB)
            },
            style: {
              "--background-image": `url(${lB.l[BB]})`
            },
            children: lB.k[BB]
          }, BB) : null))
        }), kB]
      })
    }
  },
  4346: () => {},
  35373: () => {}
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);