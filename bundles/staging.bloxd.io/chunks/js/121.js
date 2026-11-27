export const id = 121;
export const ids = [121];
export const modules = {
  37497: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => cW
    });
    var mW = OW(1089),
      EW = OW.n(mW),
      NW = OW(62),
      PW = OW(5277),
      LW = OW(1283);

    function cW(WW) {
      let {
        locked: iW,
        children: OW
      } = WW;
      const mW = (0, NW.useRef)(null),
        cW = (0, PW.d)(mW, "y");
      return (0, LW.jsx)("div", {
        ref: mW,
        className: EW()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: cW.before,
          CreateCustomLobbyBodyMoreBelow: cW.after
        }),
        "data-pad-ignore": iW || void 0,
        children: OW
      })
    }
  },
  37684: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      showFirstWorldSetupPopup: () => bW
    });
    OW(5701), OW(37480);
    var mW = OW(5318),
      EW = OW(62),
      NW = OW(5282),
      PW = OW(1172),
      LW = OW(1422),
      cW = OW(37497),
      wW = OW(5706),
      tW = OW(1532),
      ZW = OW(4723),
      xW = OW(37489),
      lW = OW(5312),
      AW = OW(1283);

    function bW(WW) {
      const iW = {
        requested: !1,
        closed: !1
      };
      LW.NotificationProvider.showCustomPopup({
        body: OW => (0, AW.jsx)(jW, {
          flow: iW,
          close: OW,
          ...WW
        }),
        middleScreenPopupClassName: "CreateCustomLobbyPopup",
        onClose: () => {
          iW.closed = !0, iW.requested || (0, lW.g)()
        }
      })
    }

    function jW(WW) {
      let {
        flow: iW,
        close: OW,
        onCreating: LW,
        onCreated: bW,
        onFailedClosed: jW,
        join: UW
      } = WW;
      const {
        t: kW
      } = (0, PW.B)(), [sW, MW] = (0, EW.useState)(mW.C), [KW, SW] = (0, EW.useState)(!1), [YW, yW] = (0, EW.useState)(""), TW = (0, ZW.c)();
      (0, EW.useEffect)((() => {
        (0, lW.p)()
      }), []);
      const JW = WW => ({
        isEnabled: () => sW.plugins[WW],
        WK: iW => {
          (0, lW.k)({
            plugin: WW,
            enabled: iW
          }), MW({
            ...sW,
            plugins: {
              ...sW.plugins,
              [WW]: iW
            }
          })
        }
      });
      return (0, AW.jsxs)("div", {
        className: "CreateCustomLobby",
        children: [(0, AW.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, AW.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: kW("homePage:myWorld")
          })
        }), (0, AW.jsx)(cW.b, {
          locked: KW,
          children: (0, AW.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [(0, AW.jsx)(xW.c, {
              value: sW.defaultGamemode,
              onChange: WW => {
                (0, mW.D)(WW) && WW !== sW.defaultGamemode && ((0, lW.k)({
                  defaultGamemode: WW
                }), MW({
                  ...sW,
                  defaultGamemode: WW
                }))
              },
              showAll: !1,
              disabled: KW
            }), (0, AW.jsx)(xW.f, {
              mapTypes: mW.j,
              value: sW.mapType,
              onChange: WW => {
                (0, mW.F)(WW) && WW !== sW.mapType && ((0, lW.k)({
                  mapType: WW
                }), MW({
                  ...sW,
                  mapType: WW
                }))
              },
              showAll: !1,
              disabled: KW
            }), (0, AW.jsx)(wW.b, {
              callbacks: {
                dayNight: JW("dayNight"),
                fallDamage: JW("fallDamage"),
                survivalGuns: JW("survivalGuns")
              },
              disabled: KW,
              advancedMode: !1
            })]
          })
        }), (0, AW.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, AW.jsx)(tW.n, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: KW,
            onClick: () => {
              iW.requested = !0, SW(!0), LW(!0), yW(""), (0, lW.n)(sW), NW.b.createPersonalWorld(sW).then((WW => {
                LW(!1);
                const mW = bW(WW);
                !iW.closed && TW.current ? (OW(), UW(WW)) : mW || (0, lW.g)()
              }), (WW => {
                if (console.error("Failed to create personal world:", WW), LW(!1), iW.requested = !1, iW.closed || !TW.current) return (0, lW.g)(), void jW(WW);
                yW(WW.message), SW(!1)
              }))
            },
            children: kW("general:play")
          }), YW && (0, AW.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: YW
          })]
        })]
      })
    }
  },
  5706: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => wW
    });
    var mW = OW(1089),
      EW = OW.n(mW),
      NW = OW(5318),
      PW = OW(1172),
      LW = OW(1283);
    const cW = [...NW.n, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function wW(WW) {
      const {
        disabled: iW,
        hideWrapper: OW
      } = WW, {
        t: mW
      } = (0, PW.B)(), wW = WW.advancedMode ? cW.map((iW => [iW, WW.callbacks[iW]])) : NW.n.map((iW => [iW, WW.callbacks[iW]])), ZW = (0, LW.jsx)("div", {
        className: EW()("PluginsGrid", {
          SectionBody: !OW
        }),
        children: wW.map((WW => {
          let [OW, mW] = WW;
          return (0, LW.jsx)(tW, {
            plugin: OW,
            callbacks: mW,
            disabled: iW
          }, OW)
        }))
      });
      return OW ? ZW : (0, LW.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, LW.jsx)("div", {
          className: "SectionTitle",
          children: mW("worldBuilder:pluginsSection")
        }), ZW]
      })
    }

    function tW(WW) {
      let {
        plugin: iW,
        callbacks: {
          isEnabled: OW,
          WK: mW
        },
        disabled: NW
      } = WW;
      const {
        t: cW
      } = (0, PW.B)(), wW = OW();
      return (0, LW.jsxs)("div", {
        className: EW()("PluginCard", {
          PluginCardEnabled: wW,
          PluginCardDisabledForm: NW
        }),
        "data-pad-focusable": !0,
        "aria-disabled": NW || void 0,
        onClick: () => {
          NW || mW(!wW)
        },
        children: [(0, LW.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, LW.jsx)("img", {
            src: `/textures/games/classic/customGames/${iW}.png`,
            alt: iW
          })
        }), (0, LW.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, LW.jsx)("div", {
            className: "PluginCardTitle",
            children: cW(ZW[iW])
          }), (0, LW.jsx)("div", {
            className: "PluginCardDescription",
            children: cW(xW[iW])
          })]
        }), (0, LW.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: cW(wW ? "general:on" : "general:off")
        })]
      })
    }
    const ZW = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      xW = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  37489: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => wW,
      f: () => tW
    });
    OW(62);
    var mW = OW(1089),
      EW = OW.n(mW),
      NW = OW(5318),
      PW = OW(327),
      LW = OW(1172),
      cW = OW(1283);

    function wW(WW) {
      let {
        value: iW,
        onChange: OW,
        showAll: mW,
        disabled: wW = !1
      } = WW;
      const {
        t: tW
      } = (0, LW.B)();
      return (0, cW.jsxs)("div", {
        className: EW()("BloxdForm GamemodeForm", {
          BasicOptions: !mW
        }),
        children: [(0, cW.jsx)("div", {
          className: "SectionTitle",
          children: tW("classic:defaultGamemode")
        }), (0, cW.jsx)("div", {
          className: "SectionBody",
          children: NW.M.map((WW => mW || (0, NW.D)(WW) ? (0, cW.jsx)("button", {
            type: "button",
            className: EW()("WorldGamemode", {
              Selected: iW === WW
            }),
            disabled: wW,
            onClick: () => {
              OW(WW)
            },
            style: {
              "--background-image": `url(${PW.s[WW]})`
            },
            children: PW.p[WW]
          }, WW) : null))
        })]
      })
    }

    function tW(WW) {
      let {
        mapTypes: iW,
        value: OW,
        onChange: mW,
        showAll: wW,
        disabled: tW = !1,
        children: ZW
      } = WW;
      const {
        t: xW
      } = (0, LW.B)();
      return (0, cW.jsxs)("div", {
        className: EW()("BloxdForm MapTypeForm", {
          BasicOptions: !wW
        }),
        children: [(0, cW.jsx)("div", {
          className: "SectionTitle",
          children: xW("customLobby:mapType")
        }), (0, cW.jsx)("div", {
          className: "SectionBody",
          children: iW.map((WW => wW || (0, NW.F)(WW) ? (0, cW.jsx)("button", {
            type: "button",
            className: EW()("MapType", {
              Selected: OW === WW
            }),
            disabled: tW,
            onClick: () => {
              mW(WW)
            },
            style: {
              "--background-image": `url(${PW.j[WW]})`
            },
            children: PW.h[WW]
          }, WW) : null))
        }), ZW]
      })
    }
  },
  5701: () => {},
  37480: () => {}
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);