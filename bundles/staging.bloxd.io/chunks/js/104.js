export const id = 104;
export const ids = [104];
export const modules = {
  35782: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => QD
    });
    var ID = cD(1049),
      pD = cD.n(ID),
      iD = cD(53),
      fD = cD(4374),
      bD = cD(1093);

    function QD(DD) {
      let {
        locked: CD,
        children: cD
      } = DD;
      const ID = (0, iD.useRef)(null),
        QD = (0, fD.b)(ID, "y");
      return (0, bD.jsx)("div", {
        ref: ID,
        className: pD()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: QD.before,
          CreateCustomLobbyBodyMoreBelow: QD.after
        }),
        "data-pad-ignore": CD || void 0,
        children: cD
      })
    }
  },
  35858: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      showFirstWorldSetupPopup: () => ZD
    });
    cD(4720), cD(35762);
    var ID = cD(4431),
      pD = cD(53),
      iD = cD(4388),
      fD = cD(1192),
      bD = cD(1340),
      QD = cD(35782),
      wD = cD(4727),
      SD = cD(1442),
      BD = cD(3306),
      yD = cD(35775),
      MD = cD(4416),
      tD = cD(1093);

    function ZD(DD) {
      const CD = {
        requested: !1,
        closed: !1
      };
      bD.NotificationProvider.showCustomPopup({
        body: cD => (0, tD.jsx)(oD, {
          flow: CD,
          close: cD,
          ...DD
        }),
        middleScreenPopupClassName: "CreateCustomLobbyPopup",
        onClose: () => {
          CD.closed = !0, CD.requested || (0, MD.g)()
        }
      })
    }

    function oD(DD) {
      let {
        flow: CD,
        close: cD,
        onCreating: bD,
        onCreated: ZD,
        onFailedClosed: oD,
        join: vD
      } = DD;
      const {
        t: ND
      } = (0, fD.F)(), [gD, XD] = (0, pD.useState)(ID.r), [mD, nD] = (0, pD.useState)(!1), [OD, PD] = (0, pD.useState)(""), HD = (0, BD.d)();
      (0, pD.useEffect)((() => {
        (0, MD.n)()
      }), []);
      const UD = DD => ({
        isEnabled: () => gD.plugins[DD],
        lH: CD => {
          (0, MD.h)({
            plugin: DD,
            enabled: CD
          }), XD({
            ...gD,
            plugins: {
              ...gD.plugins,
              [DD]: CD
            }
          })
        }
      });
      return (0, tD.jsxs)("div", {
        className: "CreateCustomLobby",
        children: [(0, tD.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, tD.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: ND("homePage:myWorld")
          })
        }), (0, tD.jsx)(QD.c, {
          locked: mD,
          children: (0, tD.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [(0, tD.jsx)(yD.d, {
              value: gD.defaultGamemode,
              onChange: DD => {
                (0, ID.u)(DD) && DD !== gD.defaultGamemode && ((0, MD.h)({
                  defaultGamemode: DD
                }), XD({
                  ...gD,
                  defaultGamemode: DD
                }))
              },
              showAll: !1,
              disabled: mD
            }), (0, tD.jsx)(yD.f, {
              mapTypes: ID.i,
              value: gD.mapType,
              onChange: DD => {
                (0, ID.w)(DD) && DD !== gD.mapType && ((0, MD.h)({
                  mapType: DD
                }), XD({
                  ...gD,
                  mapType: DD
                }))
              },
              showAll: !1,
              disabled: mD
            }), (0, tD.jsx)(wD.e, {
              callbacks: {
                dayNight: UD("dayNight"),
                fallDamage: UD("fallDamage"),
                survivalGuns: UD("survivalGuns")
              },
              disabled: mD,
              advancedMode: !1
            })]
          })
        }), (0, tD.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, tD.jsx)(SD.o, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: mD,
            onClick: () => {
              CD.requested = !0, nD(!0), bD(!0), PD(""), (0, MD.k)(gD), iD.b.createPersonalWorld(gD).then((DD => {
                bD(!1);
                const ID = ZD(DD);
                !CD.closed && HD.current ? (cD(), vD(DD)) : ID || (0, MD.g)()
              }), (DD => {
                if (console.error("Failed to create personal world:", DD), bD(!1), CD.requested = !1, CD.closed || !HD.current) return (0, MD.g)(), void oD(DD);
                PD(DD.message), nD(!1)
              }))
            },
            children: ND("general:play")
          }), OD && (0, tD.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: OD
          })]
        })]
      })
    }
  },
  4727: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => wD
    });
    var ID = cD(1049),
      pD = cD.n(ID),
      iD = cD(4431),
      fD = cD(1192),
      bD = cD(1093);
    const QD = [...iD.j, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function wD(DD) {
      const {
        disabled: CD,
        hideWrapper: cD
      } = DD, {
        t: ID
      } = (0, fD.F)(), wD = DD.advancedMode ? QD.map((CD => [CD, DD.callbacks[CD]])) : iD.j.map((CD => [CD, DD.callbacks[CD]])), BD = (0, bD.jsx)("div", {
        className: pD()("PluginsGrid", {
          SectionBody: !cD
        }),
        children: wD.map((DD => {
          let [cD, ID] = DD;
          return (0, bD.jsx)(SD, {
            plugin: cD,
            callbacks: ID,
            disabled: CD
          }, cD)
        }))
      });
      return cD ? BD : (0, bD.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, bD.jsx)("div", {
          className: "SectionTitle",
          children: ID("worldBuilder:pluginsSection")
        }), BD]
      })
    }

    function SD(DD) {
      let {
        plugin: CD,
        callbacks: {
          isEnabled: cD,
          lH: ID
        },
        disabled: iD
      } = DD;
      const {
        t: QD
      } = (0, fD.F)(), wD = cD();
      return (0, bD.jsxs)("div", {
        className: pD()("PluginCard", {
          PluginCardEnabled: wD,
          PluginCardDisabledForm: iD
        }),
        "data-pad-focusable": !0,
        "aria-disabled": iD || void 0,
        onClick: () => {
          iD || ID(!wD)
        },
        children: [(0, bD.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, bD.jsx)("img", {
            src: `/textures/games/classic/customGames/${CD}.png`,
            alt: CD
          })
        }), (0, bD.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, bD.jsx)("div", {
            className: "PluginCardTitle",
            children: QD(BD[CD])
          }), (0, bD.jsx)("div", {
            className: "PluginCardDescription",
            children: QD(yD[CD])
          })]
        }), (0, bD.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: QD(wD ? "general:on" : "general:off")
        })]
      })
    }
    const BD = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      yD = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  35775: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => wD,
      f: () => SD
    });
    cD(53);
    var ID = cD(1049),
      pD = cD.n(ID),
      iD = cD(4431),
      fD = cD(312),
      bD = cD(1192),
      QD = cD(1093);

    function wD(DD) {
      let {
        value: CD,
        onChange: cD,
        showAll: ID,
        disabled: wD = !1
      } = DD;
      const {
        t: SD
      } = (0, bD.F)();
      return (0, QD.jsxs)("div", {
        className: pD()("BloxdForm GamemodeForm", {
          BasicOptions: !ID
        }),
        children: [(0, QD.jsx)("div", {
          className: "SectionTitle",
          children: SD("classic:defaultGamemode")
        }), (0, QD.jsx)("div", {
          className: "SectionBody",
          children: iD.C.map((DD => ID || (0, iD.u)(DD) ? (0, QD.jsx)("button", {
            type: "button",
            className: pD()("WorldGamemode", {
              Selected: CD === DD
            }),
            disabled: wD,
            onClick: () => {
              cD(DD)
            },
            style: {
              "--background-image": `url(${fD.u[DD]})`
            },
            children: fD.s[DD]
          }, DD) : null))
        })]
      })
    }

    function SD(DD) {
      let {
        mapTypes: CD,
        value: cD,
        onChange: ID,
        showAll: wD,
        disabled: SD = !1,
        children: BD
      } = DD;
      const {
        t: yD
      } = (0, bD.F)();
      return (0, QD.jsxs)("div", {
        className: pD()("BloxdForm MapTypeForm", {
          BasicOptions: !wD
        }),
        children: [(0, QD.jsx)("div", {
          className: "SectionTitle",
          children: yD("customLobby:mapType")
        }), (0, QD.jsx)("div", {
          className: "SectionBody",
          children: CD.map((DD => wD || (0, iD.w)(DD) ? (0, QD.jsx)("button", {
            type: "button",
            className: pD()("MapType", {
              Selected: cD === DD
            }),
            disabled: SD,
            onClick: () => {
              ID(DD)
            },
            style: {
              "--background-image": `url(${fD.p[DD]})`
            },
            children: fD.m[DD]
          }, DD) : null))
        }), BD]
      })
    }
  },
  4720: () => {},
  35762: () => {}
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);