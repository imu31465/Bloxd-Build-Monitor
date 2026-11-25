export const id = 108;
export const ids = [108];
export const modules = {
  36382: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => kB
    });
    var TB = ZB(1091),
      JB = ZB.n(TB),
      oB = ZB(63),
      GB = ZB(4764),
      vB = ZB(1153);

    function kB(BB) {
      let {
        locked: IB,
        children: ZB
      } = BB;
      const TB = (0, oB.useRef)(null),
        kB = (0, GB.c)(TB, "y");
      return (0, vB.jsx)("div", {
        ref: TB,
        className: JB()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: kB.before,
          CreateCustomLobbyBodyMoreBelow: kB.after
        }),
        "data-pad-ignore": IB || void 0,
        children: ZB
      })
    }
  },
  36458: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      showFirstWorldSetupPopup: () => gB
    });
    ZB(5093), ZB(36363);
    var TB = ZB(4802),
      JB = ZB(63),
      oB = ZB(4768),
      GB = ZB(1248),
      vB = ZB(1403),
      kB = ZB(36382),
      cB = ZB(5101),
      nB = ZB(1516),
      hB = ZB(3668),
      zB = ZB(36378),
      FB = ZB(4794),
      NB = ZB(1153);

    function gB(BB) {
      const IB = {
        requested: !1,
        closed: !1
      };
      vB.NotificationProvider.showCustomPopup({
        body: ZB => (0, NB.jsx)(qB, {
          flow: IB,
          close: ZB,
          ...BB
        }),
        middleScreenPopupClassName: "CreateCustomLobbyPopup",
        onClose: () => {
          IB.closed = !0, IB.requested || (0, FB.f)()
        }
      })
    }

    function qB(BB) {
      let {
        flow: IB,
        close: ZB,
        onCreating: vB,
        onCreated: gB,
        onFailedClosed: qB,
        join: yB
      } = BB;
      const {
        t: UB
      } = (0, GB.G)(), [WB, dB] = (0, JB.useState)(TB.q), [CB, QB] = (0, JB.useState)(!1), [sB, wB] = (0, JB.useState)(""), OB = (0, hB.d)();
      (0, JB.useEffect)((() => {
        (0, FB.p)()
      }), []);
      const YB = BB => ({
        isEnabled: () => WB.plugins[BB],
        qY: IB => {
          (0, FB.h)({
            plugin: BB,
            enabled: IB
          }), dB({
            ...WB,
            plugins: {
              ...WB.plugins,
              [BB]: IB
            }
          })
        }
      });
      return (0, NB.jsxs)("div", {
        className: "CreateCustomLobby",
        children: [(0, NB.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, NB.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: UB("homePage:myWorld")
          })
        }), (0, NB.jsx)(kB.b, {
          locked: CB,
          children: (0, NB.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [(0, NB.jsx)(zB.d, {
              value: WB.defaultGamemode,
              onChange: BB => {
                (0, TB.t)(BB) && BB !== WB.defaultGamemode && ((0, FB.h)({
                  defaultGamemode: BB
                }), dB({
                  ...WB,
                  defaultGamemode: BB
                }))
              },
              showAll: !1,
              disabled: CB
            }), (0, NB.jsx)(zB.e, {
              mapTypes: TB.e,
              value: WB.mapType,
              onChange: BB => {
                (0, TB.w)(BB) && BB !== WB.mapType && ((0, FB.h)({
                  mapType: BB
                }), dB({
                  ...WB,
                  mapType: BB
                }))
              },
              showAll: !1,
              disabled: CB
            }), (0, NB.jsx)(cB.e, {
              callbacks: {
                dayNight: YB("dayNight"),
                fallDamage: YB("fallDamage"),
                survivalGuns: YB("survivalGuns")
              },
              disabled: CB,
              advancedMode: !1
            })]
          })
        }), (0, NB.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, NB.jsx)(nB.p, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: CB,
            onClick: () => {
              IB.requested = !0, QB(!0), vB(!0), wB(""), (0, FB.l)(WB), oB.d.createPersonalWorld(WB).then((BB => {
                vB(!1);
                const TB = gB(BB);
                !IB.closed && OB.current ? (ZB(), yB(BB)) : TB || (0, FB.f)()
              }), (BB => {
                if (console.error("Failed to create personal world:", BB), vB(!1), IB.requested = !1, IB.closed || !OB.current) return (0, FB.f)(), void qB(BB);
                wB(BB.message), QB(!1)
              }))
            },
            children: UB("general:play")
          }), sB && (0, NB.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: sB
          })]
        })]
      })
    }
  },
  5101: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => cB
    });
    var TB = ZB(1091),
      JB = ZB.n(TB),
      oB = ZB(4802),
      GB = ZB(1248),
      vB = ZB(1153);
    const kB = [...oB.f, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function cB(BB) {
      const {
        disabled: IB,
        hideWrapper: ZB
      } = BB, {
        t: TB
      } = (0, GB.G)(), cB = BB.advancedMode ? kB.map((IB => [IB, BB.callbacks[IB]])) : oB.f.map((IB => [IB, BB.callbacks[IB]])), hB = (0, vB.jsx)("div", {
        className: JB()("PluginsGrid", {
          SectionBody: !ZB
        }),
        children: cB.map((BB => {
          let [ZB, TB] = BB;
          return (0, vB.jsx)(nB, {
            plugin: ZB,
            callbacks: TB,
            disabled: IB
          }, ZB)
        }))
      });
      return ZB ? hB : (0, vB.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, vB.jsx)("div", {
          className: "SectionTitle",
          children: TB("worldBuilder:pluginsSection")
        }), hB]
      })
    }

    function nB(BB) {
      let {
        plugin: IB,
        callbacks: {
          isEnabled: ZB,
          qY: TB
        },
        disabled: oB
      } = BB;
      const {
        t: kB
      } = (0, GB.G)(), cB = ZB();
      return (0, vB.jsxs)("div", {
        className: JB()("PluginCard", {
          PluginCardEnabled: cB,
          PluginCardDisabledForm: oB
        }),
        "data-pad-focusable": !0,
        "aria-disabled": oB || void 0,
        onClick: () => {
          oB || TB(!cB)
        },
        children: [(0, vB.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, vB.jsx)("img", {
            src: `/textures/games/classic/customGames/${IB}.png`,
            alt: IB
          })
        }), (0, vB.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, vB.jsx)("div", {
            className: "PluginCardTitle",
            children: kB(hB[IB])
          }), (0, vB.jsx)("div", {
            className: "PluginCardDescription",
            children: kB(zB[IB])
          })]
        }), (0, vB.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: kB(cB ? "general:on" : "general:off")
        })]
      })
    }
    const hB = {
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
  36378: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => cB,
      e: () => nB
    });
    ZB(63);
    var TB = ZB(1091),
      JB = ZB.n(TB),
      oB = ZB(4802),
      GB = ZB(342),
      vB = ZB(1248),
      kB = ZB(1153);

    function cB(BB) {
      let {
        value: IB,
        onChange: ZB,
        showAll: TB,
        disabled: cB = !1
      } = BB;
      const {
        t: nB
      } = (0, vB.G)();
      return (0, kB.jsxs)("div", {
        className: JB()("BloxdForm GamemodeForm", {
          BasicOptions: !TB
        }),
        children: [(0, kB.jsx)("div", {
          className: "SectionTitle",
          children: nB("classic:defaultGamemode")
        }), (0, kB.jsx)("div", {
          className: "SectionBody",
          children: oB.E.map((BB => TB || (0, oB.t)(BB) ? (0, kB.jsx)("button", {
            type: "button",
            className: JB()("WorldGamemode", {
              Selected: IB === BB
            }),
            disabled: cB,
            onClick: () => {
              ZB(BB)
            },
            style: {
              "--background-image": `url(${GB.y[BB]})`
            },
            children: GB.u[BB]
          }, BB) : null))
        })]
      })
    }

    function nB(BB) {
      let {
        mapTypes: IB,
        value: ZB,
        onChange: TB,
        showAll: cB,
        disabled: nB = !1,
        children: hB
      } = BB;
      const {
        t: zB
      } = (0, vB.G)();
      return (0, kB.jsxs)("div", {
        className: JB()("BloxdForm MapTypeForm", {
          BasicOptions: !cB
        }),
        children: [(0, kB.jsx)("div", {
          className: "SectionTitle",
          children: zB("customLobby:mapType")
        }), (0, kB.jsx)("div", {
          className: "SectionBody",
          children: IB.map((BB => cB || (0, oB.w)(BB) ? (0, kB.jsx)("button", {
            type: "button",
            className: JB()("MapType", {
              Selected: ZB === BB
            }),
            disabled: nB,
            onClick: () => {
              TB(BB)
            },
            style: {
              "--background-image": `url(${GB.p[BB]})`
            },
            children: GB.o[BB]
          }, BB) : null))
        }), hB]
      })
    }
  },
  5093: () => {},
  36363: () => {}
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);