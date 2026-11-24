export const id = 106;
export const ids = [106];
export const modules = {
  36345: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => cD
    });
    var pD = wD(1044),
      sD = wD.n(pD),
      KD = wD(58),
      rD = wD(4595),
      LD = wD(1096);

    function cD(DD) {
      let {
        locked: zD,
        children: wD
      } = DD;
      const pD = (0, KD.useRef)(null),
        cD = (0, rD.d)(pD, "y");
      return (0, LD.jsx)("div", {
        ref: pD,
        className: sD()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: cD.before,
          CreateCustomLobbyBodyMoreBelow: cD.after
        }),
        "data-pad-ignore": zD || void 0,
        children: wD
      })
    }
  },
  36426: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      showFirstWorldSetupPopup: () => BD
    });
    wD(4959), wD(36326);
    var pD = wD(4657),
      sD = wD(58),
      KD = wD(4612),
      rD = wD(1200),
      LD = wD(1355),
      cD = wD(36345),
      gD = wD(4963),
      RD = wD(1447),
      AD = wD(3482),
      UD = wD(36338),
      fD = wD(4651),
      ID = wD(1096);

    function BD(DD) {
      const zD = {
        requested: !1,
        closed: !1
      };
      LD.NotificationProvider.showCustomPopup({
        body: wD => (0, ID.jsx)(GD, {
          flow: zD,
          close: wD,
          ...DD
        }),
        middleScreenPopupClassName: "CreateCustomLobbyPopup",
        onClose: () => {
          zD.closed = !0, zD.requested || (0, fD.h)()
        }
      })
    }

    function GD(DD) {
      let {
        flow: zD,
        close: wD,
        onCreating: LD,
        onCreated: BD,
        onFailedClosed: GD,
        join: hD
      } = DD;
      const {
        t: nD
      } = (0, rD.E)(), [MD, OD] = (0, sD.useState)(pD.r), [JD, ED] = (0, sD.useState)(!1), [QD, XD] = (0, sD.useState)(""), VD = (0, AD.c)();
      (0, sD.useEffect)((() => {
        (0, fD.p)()
      }), []);
      const PD = DD => ({
        isEnabled: () => MD.plugins[DD],
        nC: zD => {
          (0, fD.i)({
            plugin: DD,
            enabled: zD
          }), OD({
            ...MD,
            plugins: {
              ...MD.plugins,
              [DD]: zD
            }
          })
        }
      });
      return (0, ID.jsxs)("div", {
        className: "CreateCustomLobby",
        children: [(0, ID.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, ID.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: nD("homePage:myWorld")
          })
        }), (0, ID.jsx)(cD.e, {
          locked: JD,
          children: (0, ID.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [(0, ID.jsx)(UD.c, {
              value: MD.defaultGamemode,
              onChange: DD => {
                (0, pD.s)(DD) && DD !== MD.defaultGamemode && ((0, fD.i)({
                  defaultGamemode: DD
                }), OD({
                  ...MD,
                  defaultGamemode: DD
                }))
              },
              showAll: !1,
              disabled: JD
            }), (0, ID.jsx)(UD.d, {
              mapTypes: pD.h,
              value: MD.mapType,
              onChange: DD => {
                (0, pD.u)(DD) && DD !== MD.mapType && ((0, fD.i)({
                  mapType: DD
                }), OD({
                  ...MD,
                  mapType: DD
                }))
              },
              showAll: !1,
              disabled: JD
            }), (0, ID.jsx)(gD.b, {
              callbacks: {
                dayNight: PD("dayNight"),
                fallDamage: PD("fallDamage"),
                survivalGuns: PD("survivalGuns")
              },
              disabled: JD,
              advancedMode: !1
            })]
          })
        }), (0, ID.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, ID.jsx)(RD.o, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: JD,
            onClick: () => {
              zD.requested = !0, ED(!0), LD(!0), XD(""), (0, fD.m)(MD), KD.d.createPersonalWorld(MD).then((DD => {
                LD(!1);
                const pD = BD(DD);
                !zD.closed && VD.current ? (wD(), hD(DD)) : pD || (0, fD.h)()
              }), (DD => {
                if (console.error("Failed to create personal world:", DD), LD(!1), zD.requested = !1, zD.closed || !VD.current) return (0, fD.h)(), void GD(DD);
                XD(DD.message), ED(!1)
              }))
            },
            children: nD("general:play")
          }), QD && (0, ID.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: QD
          })]
        })]
      })
    }
  },
  4963: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => gD
    });
    var pD = wD(1044),
      sD = wD.n(pD),
      KD = wD(4657),
      rD = wD(1200),
      LD = wD(1096);
    const cD = [...KD.j, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function gD(DD) {
      const {
        disabled: zD,
        hideWrapper: wD
      } = DD, {
        t: pD
      } = (0, rD.E)(), gD = DD.advancedMode ? cD.map((zD => [zD, DD.callbacks[zD]])) : KD.j.map((zD => [zD, DD.callbacks[zD]])), AD = (0, LD.jsx)("div", {
        className: sD()("PluginsGrid", {
          SectionBody: !wD
        }),
        children: gD.map((DD => {
          let [wD, pD] = DD;
          return (0, LD.jsx)(RD, {
            plugin: wD,
            callbacks: pD,
            disabled: zD
          }, wD)
        }))
      });
      return wD ? AD : (0, LD.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, LD.jsx)("div", {
          className: "SectionTitle",
          children: pD("worldBuilder:pluginsSection")
        }), AD]
      })
    }

    function RD(DD) {
      let {
        plugin: zD,
        callbacks: {
          isEnabled: wD,
          nC: pD
        },
        disabled: KD
      } = DD;
      const {
        t: cD
      } = (0, rD.E)(), gD = wD();
      return (0, LD.jsxs)("div", {
        className: sD()("PluginCard", {
          PluginCardEnabled: gD,
          PluginCardDisabledForm: KD
        }),
        "data-pad-focusable": !0,
        "aria-disabled": KD || void 0,
        onClick: () => {
          KD || pD(!gD)
        },
        children: [(0, LD.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, LD.jsx)("img", {
            src: `/textures/games/classic/customGames/${zD}.png`,
            alt: zD
          })
        }), (0, LD.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, LD.jsx)("div", {
            className: "PluginCardTitle",
            children: cD(AD[zD])
          }), (0, LD.jsx)("div", {
            className: "PluginCardDescription",
            children: cD(UD[zD])
          })]
        }), (0, LD.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: cD(gD ? "general:on" : "general:off")
        })]
      })
    }
    const AD = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      UD = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  36338: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => gD,
      d: () => RD
    });
    wD(58);
    var pD = wD(1044),
      sD = wD.n(pD),
      KD = wD(4657),
      rD = wD(338),
      LD = wD(1200),
      cD = wD(1096);

    function gD(DD) {
      let {
        value: zD,
        onChange: wD,
        showAll: pD,
        disabled: gD = !1
      } = DD;
      const {
        t: RD
      } = (0, LD.E)();
      return (0, cD.jsxs)("div", {
        className: sD()("BloxdForm GamemodeForm", {
          BasicOptions: !pD
        }),
        children: [(0, cD.jsx)("div", {
          className: "SectionTitle",
          children: RD("classic:defaultGamemode")
        }), (0, cD.jsx)("div", {
          className: "SectionBody",
          children: KD.z.map((DD => pD || (0, KD.s)(DD) ? (0, cD.jsx)("button", {
            type: "button",
            className: sD()("WorldGamemode", {
              Selected: zD === DD
            }),
            disabled: gD,
            onClick: () => {
              wD(DD)
            },
            style: {
              "--background-image": `url(${rD.r[DD]})`
            },
            children: rD.o[DD]
          }, DD) : null))
        })]
      })
    }

    function RD(DD) {
      let {
        mapTypes: zD,
        value: wD,
        onChange: pD,
        showAll: gD,
        disabled: RD = !1,
        children: AD
      } = DD;
      const {
        t: UD
      } = (0, LD.E)();
      return (0, cD.jsxs)("div", {
        className: sD()("BloxdForm MapTypeForm", {
          BasicOptions: !gD
        }),
        children: [(0, cD.jsx)("div", {
          className: "SectionTitle",
          children: UD("customLobby:mapType")
        }), (0, cD.jsx)("div", {
          className: "SectionBody",
          children: zD.map((DD => gD || (0, KD.u)(DD) ? (0, cD.jsx)("button", {
            type: "button",
            className: sD()("MapType", {
              Selected: wD === DD
            }),
            disabled: RD,
            onClick: () => {
              pD(DD)
            },
            style: {
              "--background-image": `url(${rD.k[DD]})`
            },
            children: rD.h[DD]
          }, DD) : null))
        }), AD]
      })
    }
  },
  4959: () => {},
  36326: () => {}
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);