export const id = 120;
export const ids = [120];
export const modules = {
  37500: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => QV
    });
    var JV = xV(1146),
      YV = xV.n(JV),
      UV = xV(62),
      yV = xV(5050),
      pV = xV(1321);

    function QV(VV) {
      let {
        locked: eV,
        children: xV
      } = VV;
      const JV = (0, UV.useRef)(null),
        QV = (0, yV.d)(JV, "y");
      return (0, pV.jsx)("div", {
        ref: JV,
        className: YV()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: QV.before,
          CreateCustomLobbyBodyMoreBelow: QV.after
        }),
        "data-pad-ignore": eV || void 0,
        children: xV
      })
    }
  },
  37584: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      showFirstWorldSetupPopup: () => bV
    });
    xV(5433), xV(37489);
    var JV = xV(5103),
      YV = xV(62),
      UV = xV(5056),
      yV = xV(1220),
      pV = xV(1439),
      QV = xV(37500),
      nV = xV(5442),
      wV = xV(1551),
      ZV = xV(3931),
      vV = xV(37497),
      rV = xV(5095),
      kV = xV(1321);

    function bV(VV) {
      const eV = {
        requested: !1,
        closed: !1
      };
      pV.NotificationProvider.showCustomPopup({
        body: xV => (0, kV.jsx)(EV, {
          flow: eV,
          close: xV,
          ...VV
        }),
        middleScreenPopupClassName: "CreateCustomLobbyPopup",
        onClose: () => {
          eV.closed = !0, eV.requested || (0, rV.i)()
        }
      })
    }

    function EV(VV) {
      let {
        flow: eV,
        close: xV,
        onCreating: pV,
        onCreated: bV,
        onFailedClosed: EV,
        join: BV
      } = VV;
      const {
        t: jV
      } = (0, yV.A)(), [qV, tV] = (0, YV.useState)(JV.r), [FV, TV] = (0, YV.useState)(!1), [PV, AV] = (0, YV.useState)(""), NV = (0, ZV.e)();
      (0, YV.useEffect)((() => {
        (0, rV.o)()
      }), []);
      const XV = VV => ({
        isEnabled: () => qV.plugins[VV],
        pW: eV => {
          (0, rV.j)({
            plugin: VV,
            enabled: eV
          }), tV({
            ...qV,
            plugins: {
              ...qV.plugins,
              [VV]: eV
            }
          })
        }
      });
      return (0, kV.jsxs)("div", {
        className: "CreateCustomLobby",
        children: [(0, kV.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, kV.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: jV("homePage:myWorld")
          })
        }), (0, kV.jsx)(QV.c, {
          locked: FV,
          children: (0, kV.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [(0, kV.jsx)(vV.d, {
              value: qV.defaultGamemode,
              onChange: VV => {
                (0, JV.t)(VV) && VV !== qV.defaultGamemode && ((0, rV.j)({
                  defaultGamemode: VV
                }), tV({
                  ...qV,
                  defaultGamemode: VV
                }))
              },
              showAll: !1,
              disabled: FV
            }), (0, kV.jsx)(vV.g, {
              mapTypes: JV.h,
              value: qV.mapType,
              onChange: VV => {
                (0, JV.w)(VV) && VV !== qV.mapType && ((0, rV.j)({
                  mapType: VV
                }), tV({
                  ...qV,
                  mapType: VV
                }))
              },
              showAll: !1,
              disabled: FV
            }), (0, kV.jsx)(nV.e, {
              callbacks: {
                dayNight: XV("dayNight"),
                fallDamage: XV("fallDamage"),
                survivalGuns: XV("survivalGuns")
              },
              disabled: FV,
              advancedMode: !1
            })]
          })
        }), (0, kV.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, kV.jsx)(wV.m, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: FV,
            onClick: () => {
              eV.requested = !0, TV(!0), pV(!0), AV(""), (0, rV.k)(qV), UV.e.createPersonalWorld(qV).then((VV => {
                pV(!1);
                const JV = bV(VV);
                !eV.closed && NV.current ? (xV(), BV(VV)) : JV || (0, rV.i)()
              }), (VV => {
                if (console.error("Failed to create personal world:", VV), pV(!1), eV.requested = !1, eV.closed || !NV.current) return (0, rV.i)(), void EV(VV);
                AV(VV.message), TV(!1)
              }))
            },
            children: jV("general:play")
          }), PV && (0, kV.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: PV
          })]
        })]
      })
    }
  },
  5442: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => nV
    });
    var JV = xV(1146),
      YV = xV.n(JV),
      UV = xV(5103),
      yV = xV(1220),
      pV = xV(1321);
    const QV = [...UV.i, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function nV(VV) {
      const {
        disabled: eV,
        hideWrapper: xV
      } = VV, {
        t: JV
      } = (0, yV.A)(), nV = VV.advancedMode ? QV.map((eV => [eV, VV.callbacks[eV]])) : UV.i.map((eV => [eV, VV.callbacks[eV]])), ZV = (0, pV.jsx)("div", {
        className: YV()("PluginsGrid", {
          SectionBody: !xV
        }),
        children: nV.map((VV => {
          let [xV, JV] = VV;
          return (0, pV.jsx)(wV, {
            plugin: xV,
            callbacks: JV,
            disabled: eV
          }, xV)
        }))
      });
      return xV ? ZV : (0, pV.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, pV.jsx)("div", {
          className: "SectionTitle",
          children: JV("worldBuilder:pluginsSection")
        }), ZV]
      })
    }

    function wV(VV) {
      let {
        plugin: eV,
        callbacks: {
          isEnabled: xV,
          pW: JV
        },
        disabled: UV
      } = VV;
      const {
        t: QV
      } = (0, yV.A)(), nV = xV();
      return (0, pV.jsxs)("div", {
        className: YV()("PluginCard", {
          PluginCardEnabled: nV,
          PluginCardDisabledForm: UV
        }),
        "data-pad-focusable": !0,
        "aria-disabled": UV || void 0,
        onClick: () => {
          UV || JV(!nV)
        },
        children: [(0, pV.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, pV.jsx)("img", {
            src: `/textures/games/classic/customGames/${eV}.png`,
            alt: eV
          })
        }), (0, pV.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, pV.jsx)("div", {
            className: "PluginCardTitle",
            children: QV(ZV[eV])
          }), (0, pV.jsx)("div", {
            className: "PluginCardDescription",
            children: QV(vV[eV])
          })]
        }), (0, pV.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: QV(nV ? "general:on" : "general:off")
        })]
      })
    }
    const ZV = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      vV = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  37497: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => nV,
      g: () => wV
    });
    xV(62);
    var JV = xV(1146),
      YV = xV.n(JV),
      UV = xV(5103),
      yV = xV(364),
      pV = xV(1220),
      QV = xV(1321);

    function nV(VV) {
      let {
        value: eV,
        onChange: xV,
        showAll: JV,
        disabled: nV = !1
      } = VV;
      const {
        t: wV
      } = (0, pV.A)();
      return (0, QV.jsxs)("div", {
        className: YV()("BloxdForm GamemodeForm", {
          BasicOptions: !JV
        }),
        children: [(0, QV.jsx)("div", {
          className: "SectionTitle",
          children: wV("classic:defaultGamemode")
        }), (0, QV.jsx)("div", {
          className: "SectionBody",
          children: UV.A.map((VV => JV || (0, UV.t)(VV) ? (0, QV.jsx)("button", {
            type: "button",
            className: YV()("WorldGamemode", {
              Selected: eV === VV
            }),
            disabled: nV,
            onClick: () => {
              xV(VV)
            },
            style: {
              "--background-image": `url(${yV.v[VV]})`
            },
            children: yV.r[VV]
          }, VV) : null))
        })]
      })
    }

    function wV(VV) {
      let {
        mapTypes: eV,
        value: xV,
        onChange: JV,
        showAll: nV,
        disabled: wV = !1,
        children: ZV
      } = VV;
      const {
        t: vV
      } = (0, pV.A)();
      return (0, QV.jsxs)("div", {
        className: YV()("BloxdForm MapTypeForm", {
          BasicOptions: !nV
        }),
        children: [(0, QV.jsx)("div", {
          className: "SectionTitle",
          children: vV("customLobby:mapType")
        }), (0, QV.jsx)("div", {
          className: "SectionBody",
          children: eV.map((VV => nV || (0, UV.w)(VV) ? (0, QV.jsx)("button", {
            type: "button",
            className: YV()("MapType", {
              Selected: xV === VV
            }),
            disabled: wV,
            onClick: () => {
              JV(VV)
            },
            style: {
              "--background-image": `url(${yV.m[VV]})`
            },
            children: yV.j[VV]
          }, VV) : null))
        }), ZV]
      })
    }
  },
  5433: () => {},
  37489: () => {}
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);