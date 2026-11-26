export const id = 119;
export const ids = [119];
export const modules = {
  37060: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => oU
    });
    var cU = zU(1106),
      yU = zU.n(cU),
      QU = zU(61),
      AU = zU(5014),
      FU = zU(1305);

    function oU(UU) {
      let {
        locked: XU,
        children: zU
      } = UU;
      const cU = (0, QU.useRef)(null),
        oU = (0, AU.b)(cU, "y");
      return (0, FU.jsx)("div", {
        ref: cU,
        className: yU()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: oU.before,
          CreateCustomLobbyBodyMoreBelow: oU.after
        }),
        "data-pad-ignore": XU || void 0,
        children: zU
      })
    }
  },
  37139: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      showFirstWorldSetupPopup: () => aU
    });
    zU(5465), zU(37039);
    var cU = zU(5057),
      yU = zU(61),
      QU = zU(5026),
      AU = zU(1193),
      FU = zU(1410),
      oU = zU(37060),
      DU = zU(5471),
      EU = zU(1494),
      YU = zU(3873),
      NU = zU(37055),
      IU = zU(5051),
      pU = zU(1305);

    function aU(UU) {
      const XU = {
        requested: !1,
        closed: !1
      };
      FU.NotificationProvider.showCustomPopup({
        body: zU => (0, pU.jsx)(tU, {
          flow: XU,
          close: zU,
          ...UU
        }),
        middleScreenPopupClassName: "CreateCustomLobbyPopup",
        onClose: () => {
          XU.closed = !0, XU.requested || (0, IU.h)()
        }
      })
    }

    function tU(UU) {
      let {
        flow: XU,
        close: zU,
        onCreating: FU,
        onCreated: aU,
        onFailedClosed: tU,
        join: gU
      } = UU;
      const {
        t: kU
      } = (0, AU.I)(), [GU, BU] = (0, yU.useState)(cU.s), [ZU, RU] = (0, yU.useState)(!1), [PU, WU] = (0, yU.useState)(""), dU = (0, YU.b)();
      (0, yU.useEffect)((() => {
        (0, IU.o)()
      }), []);
      const LU = UU => ({
        isEnabled: () => GU.plugins[UU],
        YC: XU => {
          (0, IU.l)({
            plugin: UU,
            enabled: XU
          }), BU({
            ...GU,
            plugins: {
              ...GU.plugins,
              [UU]: XU
            }
          })
        }
      });
      return (0, pU.jsxs)("div", {
        className: "CreateCustomLobby",
        children: [(0, pU.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, pU.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: kU("homePage:myWorld")
          })
        }), (0, pU.jsx)(oU.e, {
          locked: ZU,
          children: (0, pU.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [(0, pU.jsx)(NU.c, {
              value: GU.defaultGamemode,
              onChange: UU => {
                (0, cU.t)(UU) && UU !== GU.defaultGamemode && ((0, IU.l)({
                  defaultGamemode: UU
                }), BU({
                  ...GU,
                  defaultGamemode: UU
                }))
              },
              showAll: !1,
              disabled: ZU
            }), (0, pU.jsx)(NU.g, {
              mapTypes: cU.i,
              value: GU.mapType,
              onChange: UU => {
                (0, cU.x)(UU) && UU !== GU.mapType && ((0, IU.l)({
                  mapType: UU
                }), BU({
                  ...GU,
                  mapType: UU
                }))
              },
              showAll: !1,
              disabled: ZU
            }), (0, pU.jsx)(DU.b, {
              callbacks: {
                dayNight: LU("dayNight"),
                fallDamage: LU("fallDamage"),
                survivalGuns: LU("survivalGuns")
              },
              disabled: ZU,
              advancedMode: !1
            })]
          })
        }), (0, pU.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, pU.jsx)(EU.l, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: ZU,
            onClick: () => {
              XU.requested = !0, RU(!0), FU(!0), WU(""), (0, IU.m)(GU), QU.d.createPersonalWorld(GU).then((UU => {
                FU(!1);
                const cU = aU(UU);
                !XU.closed && dU.current ? (zU(), gU(UU)) : cU || (0, IU.h)()
              }), (UU => {
                if (console.error("Failed to create personal world:", UU), FU(!1), XU.requested = !1, XU.closed || !dU.current) return (0, IU.h)(), void tU(UU);
                WU(UU.message), RU(!1)
              }))
            },
            children: kU("general:play")
          }), PU && (0, pU.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: PU
          })]
        })]
      })
    }
  },
  5471: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => DU
    });
    var cU = zU(1106),
      yU = zU.n(cU),
      QU = zU(5057),
      AU = zU(1193),
      FU = zU(1305);
    const oU = [...QU.j, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function DU(UU) {
      const {
        disabled: XU,
        hideWrapper: zU
      } = UU, {
        t: cU
      } = (0, AU.I)(), DU = UU.advancedMode ? oU.map((XU => [XU, UU.callbacks[XU]])) : QU.j.map((XU => [XU, UU.callbacks[XU]])), YU = (0, FU.jsx)("div", {
        className: yU()("PluginsGrid", {
          SectionBody: !zU
        }),
        children: DU.map((UU => {
          let [zU, cU] = UU;
          return (0, FU.jsx)(EU, {
            plugin: zU,
            callbacks: cU,
            disabled: XU
          }, zU)
        }))
      });
      return zU ? YU : (0, FU.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, FU.jsx)("div", {
          className: "SectionTitle",
          children: cU("worldBuilder:pluginsSection")
        }), YU]
      })
    }

    function EU(UU) {
      let {
        plugin: XU,
        callbacks: {
          isEnabled: zU,
          YC: cU
        },
        disabled: QU
      } = UU;
      const {
        t: oU
      } = (0, AU.I)(), DU = zU();
      return (0, FU.jsxs)("div", {
        className: yU()("PluginCard", {
          PluginCardEnabled: DU,
          PluginCardDisabledForm: QU
        }),
        "data-pad-focusable": !0,
        "aria-disabled": QU || void 0,
        onClick: () => {
          QU || cU(!DU)
        },
        children: [(0, FU.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, FU.jsx)("img", {
            src: `/textures/games/classic/customGames/${XU}.png`,
            alt: XU
          })
        }), (0, FU.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, FU.jsx)("div", {
            className: "PluginCardTitle",
            children: oU(YU[XU])
          }), (0, FU.jsx)("div", {
            className: "PluginCardDescription",
            children: oU(NU[XU])
          })]
        }), (0, FU.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: oU(DU ? "general:on" : "general:off")
        })]
      })
    }
    const YU = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      NU = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  37055: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => DU,
      g: () => EU
    });
    zU(61);
    var cU = zU(1106),
      yU = zU.n(cU),
      QU = zU(5057),
      AU = zU(320),
      FU = zU(1193),
      oU = zU(1305);

    function DU(UU) {
      let {
        value: XU,
        onChange: zU,
        showAll: cU,
        disabled: DU = !1
      } = UU;
      const {
        t: EU
      } = (0, FU.I)();
      return (0, oU.jsxs)("div", {
        className: yU()("BloxdForm GamemodeForm", {
          BasicOptions: !cU
        }),
        children: [(0, oU.jsx)("div", {
          className: "SectionTitle",
          children: EU("classic:defaultGamemode")
        }), (0, oU.jsx)("div", {
          className: "SectionBody",
          children: QU.E.map((UU => cU || (0, QU.t)(UU) ? (0, oU.jsx)("button", {
            type: "button",
            className: yU()("WorldGamemode", {
              Selected: XU === UU
            }),
            disabled: DU,
            onClick: () => {
              zU(UU)
            },
            style: {
              "--background-image": `url(${AU.w[UU]})`
            },
            children: AU.u[UU]
          }, UU) : null))
        })]
      })
    }

    function EU(UU) {
      let {
        mapTypes: XU,
        value: zU,
        onChange: cU,
        showAll: DU,
        disabled: EU = !1,
        children: YU
      } = UU;
      const {
        t: NU
      } = (0, FU.I)();
      return (0, oU.jsxs)("div", {
        className: yU()("BloxdForm MapTypeForm", {
          BasicOptions: !DU
        }),
        children: [(0, oU.jsx)("div", {
          className: "SectionTitle",
          children: NU("customLobby:mapType")
        }), (0, oU.jsx)("div", {
          className: "SectionBody",
          children: XU.map((UU => DU || (0, QU.x)(UU) ? (0, oU.jsx)("button", {
            type: "button",
            className: yU()("MapType", {
              Selected: zU === UU
            }),
            disabled: EU,
            onClick: () => {
              cU(UU)
            },
            style: {
              "--background-image": `url(${AU.q[UU]})`
            },
            children: AU.m[UU]
          }, UU) : null))
        }), YU]
      })
    }
  },
  5465: () => {},
  37039: () => {}
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);