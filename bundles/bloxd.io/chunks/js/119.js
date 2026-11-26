export const id = 119;
export const ids = [119];
export const modules = {
  37046: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => yB
    });
    var YB = GB(1090),
      DB = GB.n(YB),
      QB = GB(56),
      oB = GB(4998),
      jB = GB(1282);

    function yB(BB) {
      let {
        locked: OB,
        children: GB
      } = BB;
      const YB = (0, QB.useRef)(null),
        yB = (0, oB.d)(YB, "y");
      return (0, jB.jsx)("div", {
        ref: YB,
        className: DB()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: yB.before,
          CreateCustomLobbyBodyMoreBelow: yB.after
        }),
        "data-pad-ignore": OB || void 0,
        children: GB
      })
    }
  },
  37108: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      showFirstWorldSetupPopup: () => qB
    });
    GB(5426), GB(37036);
    var YB = GB(5047),
      DB = GB(56),
      QB = GB(5011),
      oB = GB(1175),
      jB = GB(1400),
      yB = GB(37046),
      JB = GB(5430),
      MB = GB(1485),
      PB = GB(3928),
      zB = GB(37044),
      lB = GB(5039),
      pB = GB(1282);

    function qB(BB) {
      const OB = {
        requested: !1,
        closed: !1
      };
      jB.NotificationProvider.showCustomPopup({
        body: GB => (0, pB.jsx)(ZB, {
          flow: OB,
          close: GB,
          ...BB
        }),
        middleScreenPopupClassName: "CreateCustomLobbyPopup",
        onClose: () => {
          OB.closed = !0, OB.requested || (0, lB.i)()
        }
      })
    }

    function ZB(BB) {
      let {
        flow: OB,
        close: GB,
        onCreating: jB,
        onCreated: qB,
        onFailedClosed: ZB,
        join: NB
      } = BB;
      const {
        t: RB
      } = (0, oB.H)(), [WB, AB] = (0, DB.useState)(YB.v), [VB, SB] = (0, DB.useState)(!1), [nB, UB] = (0, DB.useState)(""), fB = (0, PB.c)();
      (0, DB.useEffect)((() => {
        (0, lB.o)()
      }), []);
      const kB = BB => ({
        isEnabled: () => WB.plugins[BB],
        Zk: OB => {
          (0, lB.m)({
            plugin: BB,
            enabled: OB
          }), AB({
            ...WB,
            plugins: {
              ...WB.plugins,
              [BB]: OB
            }
          })
        }
      });
      return (0, pB.jsxs)("div", {
        className: "CreateCustomLobby",
        children: [(0, pB.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, pB.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: RB("homePage:myWorld")
          })
        }), (0, pB.jsx)(yB.e, {
          locked: VB,
          children: (0, pB.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [(0, pB.jsx)(zB.d, {
              value: WB.defaultGamemode,
              onChange: BB => {
                (0, YB.w)(BB) && BB !== WB.defaultGamemode && ((0, lB.m)({
                  defaultGamemode: BB
                }), AB({
                  ...WB,
                  defaultGamemode: BB
                }))
              },
              showAll: !1,
              disabled: VB
            }), (0, pB.jsx)(zB.g, {
              mapTypes: YB.g,
              value: WB.mapType,
              onChange: BB => {
                (0, YB.A)(BB) && BB !== WB.mapType && ((0, lB.m)({
                  mapType: BB
                }), AB({
                  ...WB,
                  mapType: BB
                }))
              },
              showAll: !1,
              disabled: VB
            }), (0, pB.jsx)(JB.d, {
              callbacks: {
                dayNight: kB("dayNight"),
                fallDamage: kB("fallDamage"),
                survivalGuns: kB("survivalGuns")
              },
              disabled: VB,
              advancedMode: !1
            })]
          })
        }), (0, pB.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, pB.jsx)(MB.q, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: VB,
            onClick: () => {
              OB.requested = !0, SB(!0), jB(!0), UB(""), (0, lB.n)(WB), QB.c.createPersonalWorld(WB).then((BB => {
                jB(!1);
                const YB = qB(BB);
                !OB.closed && fB.current ? (GB(), NB(BB)) : YB || (0, lB.i)()
              }), (BB => {
                if (console.error("Failed to create personal world:", BB), jB(!1), OB.requested = !1, OB.closed || !fB.current) return (0, lB.i)(), void ZB(BB);
                UB(BB.message), SB(!1)
              }))
            },
            children: RB("general:play")
          }), nB && (0, pB.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: nB
          })]
        })]
      })
    }
  },
  5430: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => JB
    });
    var YB = GB(1090),
      DB = GB.n(YB),
      QB = GB(5047),
      oB = GB(1175),
      jB = GB(1282);
    const yB = [...QB.k, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function JB(BB) {
      const {
        disabled: OB,
        hideWrapper: GB
      } = BB, {
        t: YB
      } = (0, oB.H)(), JB = BB.advancedMode ? yB.map((OB => [OB, BB.callbacks[OB]])) : QB.k.map((OB => [OB, BB.callbacks[OB]])), PB = (0, jB.jsx)("div", {
        className: DB()("PluginsGrid", {
          SectionBody: !GB
        }),
        children: JB.map((BB => {
          let [GB, YB] = BB;
          return (0, jB.jsx)(MB, {
            plugin: GB,
            callbacks: YB,
            disabled: OB
          }, GB)
        }))
      });
      return GB ? PB : (0, jB.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, jB.jsx)("div", {
          className: "SectionTitle",
          children: YB("worldBuilder:pluginsSection")
        }), PB]
      })
    }

    function MB(BB) {
      let {
        plugin: OB,
        callbacks: {
          isEnabled: GB,
          Zk: YB
        },
        disabled: QB
      } = BB;
      const {
        t: yB
      } = (0, oB.H)(), JB = GB();
      return (0, jB.jsxs)("div", {
        className: DB()("PluginCard", {
          PluginCardEnabled: JB,
          PluginCardDisabledForm: QB
        }),
        "data-pad-focusable": !0,
        "aria-disabled": QB || void 0,
        onClick: () => {
          QB || YB(!JB)
        },
        children: [(0, jB.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, jB.jsx)("img", {
            src: `/textures/games/classic/customGames/${OB}.png`,
            alt: OB
          })
        }), (0, jB.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, jB.jsx)("div", {
            className: "PluginCardTitle",
            children: yB(PB[OB])
          }), (0, jB.jsx)("div", {
            className: "PluginCardDescription",
            children: yB(zB[OB])
          })]
        }), (0, jB.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: yB(JB ? "general:on" : "general:off")
        })]
      })
    }
    const PB = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      zB = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  37044: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => JB,
      g: () => MB
    });
    GB(56);
    var YB = GB(1090),
      DB = GB.n(YB),
      QB = GB(5047),
      oB = GB(331),
      jB = GB(1175),
      yB = GB(1282);

    function JB(BB) {
      let {
        value: OB,
        onChange: GB,
        showAll: YB,
        disabled: JB = !1
      } = BB;
      const {
        t: MB
      } = (0, jB.H)();
      return (0, yB.jsxs)("div", {
        className: DB()("BloxdForm GamemodeForm", {
          BasicOptions: !YB
        }),
        children: [(0, yB.jsx)("div", {
          className: "SectionTitle",
          children: MB("classic:defaultGamemode")
        }), (0, yB.jsx)("div", {
          className: "SectionBody",
          children: QB.F.map((BB => YB || (0, QB.w)(BB) ? (0, yB.jsx)("button", {
            type: "button",
            className: DB()("WorldGamemode", {
              Selected: OB === BB
            }),
            disabled: JB,
            onClick: () => {
              GB(BB)
            },
            style: {
              "--background-image": `url(${oB.x[BB]})`
            },
            children: oB.t[BB]
          }, BB) : null))
        })]
      })
    }

    function MB(BB) {
      let {
        mapTypes: OB,
        value: GB,
        onChange: YB,
        showAll: JB,
        disabled: MB = !1,
        children: PB
      } = BB;
      const {
        t: zB
      } = (0, jB.H)();
      return (0, yB.jsxs)("div", {
        className: DB()("BloxdForm MapTypeForm", {
          BasicOptions: !JB
        }),
        children: [(0, yB.jsx)("div", {
          className: "SectionTitle",
          children: zB("customLobby:mapType")
        }), (0, yB.jsx)("div", {
          className: "SectionBody",
          children: OB.map((BB => JB || (0, QB.A)(BB) ? (0, yB.jsx)("button", {
            type: "button",
            className: DB()("MapType", {
              Selected: GB === BB
            }),
            disabled: MB,
            onClick: () => {
              YB(BB)
            },
            style: {
              "--background-image": `url(${oB.m[BB]})`
            },
            children: oB.l[BB]
          }, BB) : null))
        }), PB]
      })
    }
  },
  5426: () => {},
  37036: () => {}
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);