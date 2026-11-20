export const id = 104;
export const ids = [104];
export const modules = {
  35955: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => qU
    });
    var tU = gU(1037),
      pU = gU.n(tU),
      EU = gU(56),
      PU = gU(4237),
      TU = gU(1090);

    function qU(UU) {
      let {
        locked: RU,
        children: gU
      } = UU;
      const tU = (0, EU.useRef)(null),
        qU = (0, PU.e)(tU, "y");
      return (0, TU.jsx)("div", {
        ref: tU,
        className: pU()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: qU.before,
          CreateCustomLobbyBodyMoreBelow: qU.after
        }),
        "data-pad-ignore": RU || void 0,
        children: gU
      })
    }
  },
  36012: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      showFirstWorldSetupPopup: () => hU
    });
    gU(4604), gU(35938);
    var tU = gU(4293),
      pU = gU(56),
      EU = gU(4248),
      PU = gU(1181),
      TU = gU(1333),
      qU = gU(35955),
      KU = gU(4608),
      cU = gU(1412),
      GU = gU(3182),
      jU = gU(35949),
      uU = gU(4282),
      CU = gU(1090);

    function hU(UU) {
      const RU = {
        requested: !1,
        closed: !1
      };
      TU.NotificationProvider.showCustomPopup({
        body: gU => (0, CU.jsx)(QU, {
          flow: RU,
          close: gU,
          ...UU
        }),
        middleScreenPopupClassName: "CreateCustomLobbyPopup",
        onClose: () => {
          RU.closed = !0, RU.requested || (0, uU.c)()
        }
      })
    }

    function QU(UU) {
      let {
        flow: RU,
        close: gU,
        onCreating: TU,
        onCreated: hU,
        onFailedClosed: QU,
        join: eU
      } = UU;
      const {
        t: WU
      } = (0, PU.B)(), [fU, xU] = (0, pU.useState)(tU.t), [mU, IU] = (0, pU.useState)(!1), [JU, wU] = (0, pU.useState)(""), nU = (0, GU.b)();
      (0, pU.useEffect)((() => {
        (0, uU.i)()
      }), []);
      const bU = UU => ({
        isEnabled: () => fU.plugins[UU],
        GJ: RU => {
          (0, uU.d)({
            plugin: UU,
            enabled: RU
          }), xU({
            ...fU,
            plugins: {
              ...fU.plugins,
              [UU]: RU
            }
          })
        }
      });
      return (0, CU.jsxs)("div", {
        className: "CreateCustomLobby",
        children: [(0, CU.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, CU.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: WU("homePage:myWorld")
          })
        }), (0, CU.jsx)(qU.d, {
          locked: mU,
          children: (0, CU.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [(0, CU.jsx)(jU.d, {
              value: fU.defaultGamemode,
              onChange: UU => {
                (0, tU.u)(UU) && UU !== fU.defaultGamemode && ((0, uU.d)({
                  defaultGamemode: UU
                }), xU({
                  ...fU,
                  defaultGamemode: UU
                }))
              },
              showAll: !1,
              disabled: mU
            }), (0, CU.jsx)(jU.e, {
              mapTypes: tU.f,
              value: fU.mapType,
              onChange: UU => {
                (0, tU.w)(UU) && UU !== fU.mapType && ((0, uU.d)({
                  mapType: UU
                }), xU({
                  ...fU,
                  mapType: UU
                }))
              },
              showAll: !1,
              disabled: mU
            }), (0, CU.jsx)(KU.c, {
              callbacks: {
                dayNight: bU("dayNight"),
                fallDamage: bU("fallDamage"),
                survivalGuns: bU("survivalGuns")
              },
              disabled: mU,
              advancedMode: !1
            })]
          })
        }), (0, CU.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, CU.jsx)(cU.j, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: mU,
            onClick: () => {
              RU.requested = !0, IU(!0), TU(!0), wU(""), (0, uU.g)(fU), EU.e.createPersonalWorld(fU).then((UU => {
                TU(!1);
                const tU = hU(UU);
                !RU.closed && nU.current ? (gU(), eU(UU)) : tU || (0, uU.c)()
              }), (UU => {
                if (console.error("Failed to create personal world:", UU), TU(!1), RU.requested = !1, RU.closed || !nU.current) return (0, uU.c)(), void QU(UU);
                wU(UU.message), IU(!1)
              }))
            },
            children: WU("general:play")
          }), JU && (0, CU.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: JU
          })]
        })]
      })
    }
  },
  4608: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => KU
    });
    var tU = gU(1037),
      pU = gU.n(tU),
      EU = gU(4293),
      PU = gU(1181),
      TU = gU(1090);
    const qU = [...EU.i, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function KU(UU) {
      const {
        disabled: RU,
        hideWrapper: gU
      } = UU, {
        t: tU
      } = (0, PU.B)(), KU = UU.advancedMode ? qU.map((RU => [RU, UU.callbacks[RU]])) : EU.i.map((RU => [RU, UU.callbacks[RU]])), GU = (0, TU.jsx)("div", {
        className: pU()("PluginsGrid", {
          SectionBody: !gU
        }),
        children: KU.map((UU => {
          let [gU, tU] = UU;
          return (0, TU.jsx)(cU, {
            plugin: gU,
            callbacks: tU,
            disabled: RU
          }, gU)
        }))
      });
      return gU ? GU : (0, TU.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, TU.jsx)("div", {
          className: "SectionTitle",
          children: tU("worldBuilder:pluginsSection")
        }), GU]
      })
    }

    function cU(UU) {
      let {
        plugin: RU,
        callbacks: {
          isEnabled: gU,
          GJ: tU
        },
        disabled: EU
      } = UU;
      const {
        t: qU
      } = (0, PU.B)(), KU = gU();
      return (0, TU.jsxs)("div", {
        className: pU()("PluginCard", {
          PluginCardEnabled: KU,
          PluginCardDisabledForm: EU
        }),
        "data-pad-focusable": !0,
        "aria-disabled": EU || void 0,
        onClick: () => {
          EU || tU(!KU)
        },
        children: [(0, TU.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, TU.jsx)("img", {
            src: `/textures/games/classic/customGames/${RU}.png`,
            alt: RU
          })
        }), (0, TU.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, TU.jsx)("div", {
            className: "PluginCardTitle",
            children: qU(GU[RU])
          }), (0, TU.jsx)("div", {
            className: "PluginCardDescription",
            children: qU(jU[RU])
          })]
        }), (0, TU.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: qU(KU ? "general:on" : "general:off")
        })]
      })
    }
    const GU = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      jU = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  35949: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => KU,
      e: () => cU
    });
    gU(56);
    var tU = gU(1037),
      pU = gU.n(tU),
      EU = gU(4293),
      PU = gU(299),
      TU = gU(1181),
      qU = gU(1090);

    function KU(UU) {
      let {
        value: RU,
        onChange: gU,
        showAll: tU,
        disabled: KU = !1
      } = UU;
      const {
        t: cU
      } = (0, TU.B)();
      return (0, qU.jsxs)("div", {
        className: pU()("BloxdForm GamemodeForm", {
          BasicOptions: !tU
        }),
        children: [(0, qU.jsx)("div", {
          className: "SectionTitle",
          children: cU("classic:defaultGamemode")
        }), (0, qU.jsx)("div", {
          className: "SectionBody",
          children: EU.C.map((UU => tU || (0, EU.u)(UU) ? (0, qU.jsx)("button", {
            type: "button",
            className: pU()("WorldGamemode", {
              Selected: RU === UU
            }),
            disabled: KU,
            onClick: () => {
              gU(UU)
            },
            style: {
              "--background-image": `url(${PU.v[UU]})`
            },
            children: PU.r[UU]
          }, UU) : null))
        })]
      })
    }

    function cU(UU) {
      let {
        mapTypes: RU,
        value: gU,
        onChange: tU,
        showAll: KU,
        disabled: cU = !1,
        children: GU
      } = UU;
      const {
        t: jU
      } = (0, TU.B)();
      return (0, qU.jsxs)("div", {
        className: pU()("BloxdForm MapTypeForm", {
          BasicOptions: !KU
        }),
        children: [(0, qU.jsx)("div", {
          className: "SectionTitle",
          children: jU("customLobby:mapType")
        }), (0, qU.jsx)("div", {
          className: "SectionBody",
          children: RU.map((UU => KU || (0, EU.w)(UU) ? (0, qU.jsx)("button", {
            type: "button",
            className: pU()("MapType", {
              Selected: gU === UU
            }),
            disabled: cU,
            onClick: () => {
              tU(UU)
            },
            style: {
              "--background-image": `url(${PU.m[UU]})`
            },
            children: PU.l[UU]
          }, UU) : null))
        }), GU]
      })
    }
  },
  4604: () => {},
  35938: () => {}
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);