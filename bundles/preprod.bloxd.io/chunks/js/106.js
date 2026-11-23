export const id = 106;
export const ids = [106];
export const modules = {
  36244: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => oC
    });
    var QC = ZC(1002),
      wC = ZC.n(QC),
      bC = ZC(48),
      nC = ZC(4515),
      fC = ZC(1056);

    function oC(CC) {
      let {
        locked: zC,
        children: ZC
      } = CC;
      const QC = (0, bC.useRef)(null),
        oC = (0, nC.b)(QC, "y");
      return (0, fC.jsx)("div", {
        ref: QC,
        className: wC()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: oC.before,
          CreateCustomLobbyBodyMoreBelow: oC.after
        }),
        "data-pad-ignore": zC || void 0,
        children: ZC
      })
    }
  },
  36314: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      showFirstWorldSetupPopup: () => SC
    });
    ZC(4880), ZC(36227);
    var QC = ZC(4562),
      wC = ZC(48),
      bC = ZC(4525),
      nC = ZC(1143),
      fC = ZC(1307),
      oC = ZC(36244),
      qC = ZC(4887),
      FC = ZC(1388),
      WC = ZC(3452),
      NC = ZC(36241),
      MC = ZC(4554),
      gC = ZC(1056);

    function SC(CC) {
      const zC = {
        requested: !1,
        closed: !1
      };
      fC.NotificationProvider.showCustomPopup({
        body: ZC => (0, gC.jsx)(pC, {
          flow: zC,
          close: ZC,
          ...CC
        }),
        middleScreenPopupClassName: "CreateCustomLobbyPopup",
        onClose: () => {
          zC.closed = !0, zC.requested || (0, MC.f)()
        }
      })
    }

    function pC(CC) {
      let {
        flow: zC,
        close: ZC,
        onCreating: fC,
        onCreated: SC,
        onFailedClosed: pC,
        join: PC
      } = CC;
      const {
        t: GC
      } = (0, nC.y)(), [RC, AC] = (0, wC.useState)(QC.x), [xC, JC] = (0, wC.useState)(!1), [IC, iC] = (0, wC.useState)(""), vC = (0, WC.e)();
      (0, wC.useEffect)((() => {
        (0, MC.m)()
      }), []);
      const eC = CC => ({
        isEnabled: () => RC.plugins[CC],
        IK: zC => {
          (0, MC.h)({
            plugin: CC,
            enabled: zC
          }), AC({
            ...RC,
            plugins: {
              ...RC.plugins,
              [CC]: zC
            }
          })
        }
      });
      return (0, gC.jsxs)("div", {
        className: "CreateCustomLobby",
        children: [(0, gC.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, gC.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: GC("homePage:myWorld")
          })
        }), (0, gC.jsx)(oC.c, {
          locked: xC,
          children: (0, gC.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [(0, gC.jsx)(NC.e, {
              value: RC.defaultGamemode,
              onChange: CC => {
                (0, QC.B)(CC) && CC !== RC.defaultGamemode && ((0, MC.h)({
                  defaultGamemode: CC
                }), AC({
                  ...RC,
                  defaultGamemode: CC
                }))
              },
              showAll: !1,
              disabled: xC
            }), (0, gC.jsx)(NC.h, {
              mapTypes: QC.g,
              value: RC.mapType,
              onChange: CC => {
                (0, QC.D)(CC) && CC !== RC.mapType && ((0, MC.h)({
                  mapType: CC
                }), AC({
                  ...RC,
                  mapType: CC
                }))
              },
              showAll: !1,
              disabled: xC
            }), (0, gC.jsx)(qC.e, {
              callbacks: {
                dayNight: eC("dayNight"),
                fallDamage: eC("fallDamage"),
                survivalGuns: eC("survivalGuns")
              },
              disabled: xC,
              advancedMode: !1
            })]
          })
        }), (0, gC.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, gC.jsx)(FC.o, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: xC,
            onClick: () => {
              zC.requested = !0, JC(!0), fC(!0), iC(""), (0, MC.l)(RC), bC.d.createPersonalWorld(RC).then((CC => {
                fC(!1);
                const QC = SC(CC);
                !zC.closed && vC.current ? (ZC(), PC(CC)) : QC || (0, MC.f)()
              }), (CC => {
                if (console.error("Failed to create personal world:", CC), fC(!1), zC.requested = !1, zC.closed || !vC.current) return (0, MC.f)(), void pC(CC);
                iC(CC.message), JC(!1)
              }))
            },
            children: GC("general:play")
          }), IC && (0, gC.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: IC
          })]
        })]
      })
    }
  },
  4887: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => qC
    });
    var QC = ZC(1002),
      wC = ZC.n(QC),
      bC = ZC(4562),
      nC = ZC(1143),
      fC = ZC(1056);
    const oC = [...bC.j, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function qC(CC) {
      const {
        disabled: zC,
        hideWrapper: ZC
      } = CC, {
        t: QC
      } = (0, nC.y)(), qC = CC.advancedMode ? oC.map((zC => [zC, CC.callbacks[zC]])) : bC.j.map((zC => [zC, CC.callbacks[zC]])), WC = (0, fC.jsx)("div", {
        className: wC()("PluginsGrid", {
          SectionBody: !ZC
        }),
        children: qC.map((CC => {
          let [ZC, QC] = CC;
          return (0, fC.jsx)(FC, {
            plugin: ZC,
            callbacks: QC,
            disabled: zC
          }, ZC)
        }))
      });
      return ZC ? WC : (0, fC.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, fC.jsx)("div", {
          className: "SectionTitle",
          children: QC("worldBuilder:pluginsSection")
        }), WC]
      })
    }

    function FC(CC) {
      let {
        plugin: zC,
        callbacks: {
          isEnabled: ZC,
          IK: QC
        },
        disabled: bC
      } = CC;
      const {
        t: oC
      } = (0, nC.y)(), qC = ZC();
      return (0, fC.jsxs)("div", {
        className: wC()("PluginCard", {
          PluginCardEnabled: qC,
          PluginCardDisabledForm: bC
        }),
        "data-pad-focusable": !0,
        "aria-disabled": bC || void 0,
        onClick: () => {
          bC || QC(!qC)
        },
        children: [(0, fC.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, fC.jsx)("img", {
            src: `/textures/games/classic/customGames/${zC}.png`,
            alt: zC
          })
        }), (0, fC.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, fC.jsx)("div", {
            className: "PluginCardTitle",
            children: oC(WC[zC])
          }), (0, fC.jsx)("div", {
            className: "PluginCardDescription",
            children: oC(NC[zC])
          })]
        }), (0, fC.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: oC(qC ? "general:on" : "general:off")
        })]
      })
    }
    const WC = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      NC = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  36241: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => qC,
      h: () => FC
    });
    ZC(48);
    var QC = ZC(1002),
      wC = ZC.n(QC),
      bC = ZC(4562),
      nC = ZC(310),
      fC = ZC(1143),
      oC = ZC(1056);

    function qC(CC) {
      let {
        value: zC,
        onChange: ZC,
        showAll: QC,
        disabled: qC = !1
      } = CC;
      const {
        t: FC
      } = (0, fC.y)();
      return (0, oC.jsxs)("div", {
        className: wC()("BloxdForm GamemodeForm", {
          BasicOptions: !QC
        }),
        children: [(0, oC.jsx)("div", {
          className: "SectionTitle",
          children: FC("classic:defaultGamemode")
        }), (0, oC.jsx)("div", {
          className: "SectionBody",
          children: bC.H.map((CC => QC || (0, bC.B)(CC) ? (0, oC.jsx)("button", {
            type: "button",
            className: wC()("WorldGamemode", {
              Selected: zC === CC
            }),
            disabled: qC,
            onClick: () => {
              ZC(CC)
            },
            style: {
              "--background-image": `url(${nC.s[CC]})`
            },
            children: nC.q[CC]
          }, CC) : null))
        })]
      })
    }

    function FC(CC) {
      let {
        mapTypes: zC,
        value: ZC,
        onChange: QC,
        showAll: qC,
        disabled: FC = !1,
        children: WC
      } = CC;
      const {
        t: NC
      } = (0, fC.y)();
      return (0, oC.jsxs)("div", {
        className: wC()("BloxdForm MapTypeForm", {
          BasicOptions: !qC
        }),
        children: [(0, oC.jsx)("div", {
          className: "SectionTitle",
          children: NC("customLobby:mapType")
        }), (0, oC.jsx)("div", {
          className: "SectionBody",
          children: zC.map((CC => qC || (0, bC.D)(CC) ? (0, oC.jsx)("button", {
            type: "button",
            className: wC()("MapType", {
              Selected: ZC === CC
            }),
            disabled: FC,
            onClick: () => {
              QC(CC)
            },
            style: {
              "--background-image": `url(${nC.k[CC]})`
            },
            children: nC.j[CC]
          }, CC) : null))
        }), WC]
      })
    }
  },
  4880: () => {},
  36227: () => {}
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);