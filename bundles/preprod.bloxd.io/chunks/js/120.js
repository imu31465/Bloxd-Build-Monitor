export const id = 120;
export const ids = [120];
export const modules = {
  37303: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => nM
    });
    var OM = iM(1116),
      SM = iM.n(OM),
      jM = iM(44),
      aM = iM(4950),
      PM = iM(1303);

    function nM(MM) {
      let {
        locked: rM,
        children: iM
      } = MM;
      const OM = (0, jM.useRef)(null),
        nM = (0, aM.e)(OM, "y");
      return (0, PM.jsx)("div", {
        ref: OM,
        className: SM()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: nM.before,
          CreateCustomLobbyBodyMoreBelow: nM.after
        }),
        "data-pad-ignore": rM || void 0,
        children: iM
      })
    }
  },
  37384: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      showFirstWorldSetupPopup: () => JM
    });
    iM(5348), iM(37287);
    var OM = iM(5003),
      SM = iM(44),
      jM = iM(4961),
      aM = iM(1188),
      PM = iM(1429),
      nM = iM(37303),
      QM = iM(5356),
      zM = iM(1520),
      LM = iM(3881),
      mM = iM(37298),
      HM = iM(4996),
      hM = iM(1303);

    function JM(MM) {
      const rM = {
        requested: !1,
        closed: !1
      };
      PM.NotificationProvider.showCustomPopup({
        body: iM => (0, hM.jsx)(dM, {
          flow: rM,
          close: iM,
          ...MM
        }),
        middleScreenPopupClassName: "CreateCustomLobbyPopup",
        onClose: () => {
          rM.closed = !0, rM.requested || (0, HM.g)()
        }
      })
    }

    function dM(MM) {
      let {
        flow: rM,
        close: iM,
        onCreating: PM,
        onCreated: JM,
        onFailedClosed: dM,
        join: yM
      } = MM;
      const {
        t: lM
      } = (0, aM.A)(), [EM, UM] = (0, SM.useState)(OM.u), [GM, CM] = (0, SM.useState)(!1), [eM, bM] = (0, SM.useState)(""), wM = (0, LM.b)();
      (0, SM.useEffect)((() => {
        (0, HM.n)()
      }), []);
      const tM = MM => ({
        isEnabled: () => EM.plugins[MM],
        kR: rM => {
          (0, HM.i)({
            plugin: MM,
            enabled: rM
          }), UM({
            ...EM,
            plugins: {
              ...EM.plugins,
              [MM]: rM
            }
          })
        }
      });
      return (0, hM.jsxs)("div", {
        className: "CreateCustomLobby",
        children: [(0, hM.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, hM.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: lM("homePage:myWorld")
          })
        }), (0, hM.jsx)(nM.d, {
          locked: GM,
          children: (0, hM.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [(0, hM.jsx)(mM.c, {
              value: EM.defaultGamemode,
              onChange: MM => {
                (0, OM.x)(MM) && MM !== EM.defaultGamemode && ((0, HM.i)({
                  defaultGamemode: MM
                }), UM({
                  ...EM,
                  defaultGamemode: MM
                }))
              },
              showAll: !1,
              disabled: GM
            }), (0, hM.jsx)(mM.e, {
              mapTypes: OM.j,
              value: EM.mapType,
              onChange: MM => {
                (0, OM.y)(MM) && MM !== EM.mapType && ((0, HM.i)({
                  mapType: MM
                }), UM({
                  ...EM,
                  mapType: MM
                }))
              },
              showAll: !1,
              disabled: GM
            }), (0, hM.jsx)(QM.b, {
              callbacks: {
                dayNight: tM("dayNight"),
                fallDamage: tM("fallDamage"),
                survivalGuns: tM("survivalGuns")
              },
              disabled: GM,
              advancedMode: !1
            })]
          })
        }), (0, hM.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, hM.jsx)(zM.p, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: GM,
            onClick: () => {
              rM.requested = !0, CM(!0), PM(!0), bM(""), (0, HM.k)(EM), jM.b.createPersonalWorld(EM).then((MM => {
                PM(!1);
                const OM = JM(MM);
                !rM.closed && wM.current ? (iM(), yM(MM)) : OM || (0, HM.g)()
              }), (MM => {
                if (console.error("Failed to create personal world:", MM), PM(!1), rM.requested = !1, rM.closed || !wM.current) return (0, HM.g)(), void dM(MM);
                bM(MM.message), CM(!1)
              }))
            },
            children: lM("general:play")
          }), eM && (0, hM.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: eM
          })]
        })]
      })
    }
  },
  5356: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => QM
    });
    var OM = iM(1116),
      SM = iM.n(OM),
      jM = iM(5003),
      aM = iM(1188),
      PM = iM(1303);
    const nM = [...jM.m, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function QM(MM) {
      const {
        disabled: rM,
        hideWrapper: iM
      } = MM, {
        t: OM
      } = (0, aM.A)(), QM = MM.advancedMode ? nM.map((rM => [rM, MM.callbacks[rM]])) : jM.m.map((rM => [rM, MM.callbacks[rM]])), LM = (0, PM.jsx)("div", {
        className: SM()("PluginsGrid", {
          SectionBody: !iM
        }),
        children: QM.map((MM => {
          let [iM, OM] = MM;
          return (0, PM.jsx)(zM, {
            plugin: iM,
            callbacks: OM,
            disabled: rM
          }, iM)
        }))
      });
      return iM ? LM : (0, PM.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, PM.jsx)("div", {
          className: "SectionTitle",
          children: OM("worldBuilder:pluginsSection")
        }), LM]
      })
    }

    function zM(MM) {
      let {
        plugin: rM,
        callbacks: {
          isEnabled: iM,
          kR: OM
        },
        disabled: jM
      } = MM;
      const {
        t: nM
      } = (0, aM.A)(), QM = iM();
      return (0, PM.jsxs)("div", {
        className: SM()("PluginCard", {
          PluginCardEnabled: QM,
          PluginCardDisabledForm: jM
        }),
        "data-pad-focusable": !0,
        "aria-disabled": jM || void 0,
        onClick: () => {
          jM || OM(!QM)
        },
        children: [(0, PM.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, PM.jsx)("img", {
            src: `/textures/games/classic/customGames/${rM}.png`,
            alt: rM
          })
        }), (0, PM.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, PM.jsx)("div", {
            className: "PluginCardTitle",
            children: nM(LM[rM])
          }), (0, PM.jsx)("div", {
            className: "PluginCardDescription",
            children: nM(mM[rM])
          })]
        }), (0, PM.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: nM(QM ? "general:on" : "general:off")
        })]
      })
    }
    const LM = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      mM = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  37298: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => QM,
      e: () => zM
    });
    iM(44);
    var OM = iM(1116),
      SM = iM.n(OM),
      jM = iM(5003),
      aM = iM(313),
      PM = iM(1188),
      nM = iM(1303);

    function QM(MM) {
      let {
        value: rM,
        onChange: iM,
        showAll: OM,
        disabled: QM = !1
      } = MM;
      const {
        t: zM
      } = (0, PM.A)();
      return (0, nM.jsxs)("div", {
        className: SM()("BloxdForm GamemodeForm", {
          BasicOptions: !OM
        }),
        children: [(0, nM.jsx)("div", {
          className: "SectionTitle",
          children: zM("classic:defaultGamemode")
        }), (0, nM.jsx)("div", {
          className: "SectionBody",
          children: jM.C.map((MM => OM || (0, jM.x)(MM) ? (0, nM.jsx)("button", {
            type: "button",
            className: SM()("WorldGamemode", {
              Selected: rM === MM
            }),
            disabled: QM,
            onClick: () => {
              iM(MM)
            },
            style: {
              "--background-image": `url(${aM.s[MM]})`
            },
            children: aM.p[MM]
          }, MM) : null))
        })]
      })
    }

    function zM(MM) {
      let {
        mapTypes: rM,
        value: iM,
        onChange: OM,
        showAll: QM,
        disabled: zM = !1,
        children: LM
      } = MM;
      const {
        t: mM
      } = (0, PM.A)();
      return (0, nM.jsxs)("div", {
        className: SM()("BloxdForm MapTypeForm", {
          BasicOptions: !QM
        }),
        children: [(0, nM.jsx)("div", {
          className: "SectionTitle",
          children: mM("customLobby:mapType")
        }), (0, nM.jsx)("div", {
          className: "SectionBody",
          children: rM.map((MM => QM || (0, jM.y)(MM) ? (0, nM.jsx)("button", {
            type: "button",
            className: SM()("MapType", {
              Selected: iM === MM
            }),
            disabled: zM,
            onClick: () => {
              OM(MM)
            },
            style: {
              "--background-image": `url(${aM.j[MM]})`
            },
            children: aM.i[MM]
          }, MM) : null))
        }), LM]
      })
    }
  },
  5348: () => {},
  37287: () => {}
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);