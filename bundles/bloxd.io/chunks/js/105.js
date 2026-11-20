export const id = 105;
export const ids = [105];
export const modules = {
  36166: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => fT
    });
    var lT = cT(1046),
      MT = cT.n(lT),
      KT = cT(71),
      OT = cT(4552),
      yT = cT(1099);

    function fT(TT) {
      let {
        locked: kT,
        children: cT
      } = TT;
      const lT = (0, KT.useRef)(null),
        fT = (0, OT.b)(lT, "y");
      return (0, yT.jsx)("div", {
        ref: lT,
        className: MT()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: fT.before,
          CreateCustomLobbyBodyMoreBelow: fT.after
        }),
        "data-pad-ignore": kT || void 0,
        children: cT
      })
    }
  },
  36236: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      showFirstWorldSetupPopup: () => tT
    });
    cT(4893), cT(36147);
    var lT = cT(4611),
      MT = cT(71),
      KT = cT(4566),
      OT = cT(1195),
      yT = cT(1363),
      fT = cT(36166),
      xT = cT(4899),
      IT = cT(1470),
      AT = cT(3436),
      CT = cT(36160),
      jT = cT(4598),
      vT = cT(1099);

    function tT(TT) {
      const kT = {
        requested: !1,
        closed: !1
      };
      yT.NotificationProvider.showCustomPopup({
        body: cT => (0, vT.jsx)(hT, {
          flow: kT,
          close: cT,
          ...TT
        }),
        middleScreenPopupClassName: "CreateCustomLobbyPopup",
        onClose: () => {
          kT.closed = !0, kT.requested || (0, jT.g)()
        }
      })
    }

    function hT(TT) {
      let {
        flow: kT,
        close: cT,
        onCreating: yT,
        onCreated: tT,
        onFailedClosed: hT,
        join: NT
      } = TT;
      const {
        t: QT
      } = (0, OT.B)(), [ST, DT] = (0, MT.useState)(lT.y), [aT, FT] = (0, MT.useState)(!1), [rT, PT] = (0, MT.useState)(""), wT = (0, AT.b)();
      (0, MT.useEffect)((() => {
        (0, jT.l)()
      }), []);
      const mT = TT => ({
        isEnabled: () => ST.plugins[TT],
        PD: kT => {
          (0, jT.i)({
            plugin: TT,
            enabled: kT
          }), DT({
            ...ST,
            plugins: {
              ...ST.plugins,
              [TT]: kT
            }
          })
        }
      });
      return (0, vT.jsxs)("div", {
        className: "CreateCustomLobby",
        children: [(0, vT.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, vT.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: QT("homePage:myWorld")
          })
        }), (0, vT.jsx)(fT.b, {
          locked: aT,
          children: (0, vT.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [(0, vT.jsx)(CT.b, {
              value: ST.defaultGamemode,
              onChange: TT => {
                (0, lT.z)(TT) && TT !== ST.defaultGamemode && ((0, jT.i)({
                  defaultGamemode: TT
                }), DT({
                  ...ST,
                  defaultGamemode: TT
                }))
              },
              showAll: !1,
              disabled: aT
            }), (0, vT.jsx)(CT.d, {
              mapTypes: lT.j,
              value: ST.mapType,
              onChange: TT => {
                (0, lT.A)(TT) && TT !== ST.mapType && ((0, jT.i)({
                  mapType: TT
                }), DT({
                  ...ST,
                  mapType: TT
                }))
              },
              showAll: !1,
              disabled: aT
            }), (0, vT.jsx)(xT.b, {
              callbacks: {
                dayNight: mT("dayNight"),
                fallDamage: mT("fallDamage"),
                survivalGuns: mT("survivalGuns")
              },
              disabled: aT,
              advancedMode: !1
            })]
          })
        }), (0, vT.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, vT.jsx)(IT.m, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: aT,
            onClick: () => {
              kT.requested = !0, FT(!0), yT(!0), PT(""), (0, jT.j)(ST), KT.c.createPersonalWorld(ST).then((TT => {
                yT(!1);
                const lT = tT(TT);
                !kT.closed && wT.current ? (cT(), NT(TT)) : lT || (0, jT.g)()
              }), (TT => {
                if (console.error("Failed to create personal world:", TT), yT(!1), kT.requested = !1, kT.closed || !wT.current) return (0, jT.g)(), void hT(TT);
                PT(TT.message), FT(!1)
              }))
            },
            children: QT("general:play")
          }), rT && (0, vT.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: rT
          })]
        })]
      })
    }
  },
  4899: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => xT
    });
    var lT = cT(1046),
      MT = cT.n(lT),
      KT = cT(4611),
      OT = cT(1195),
      yT = cT(1099);
    const fT = [...KT.n, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function xT(TT) {
      const {
        disabled: kT,
        hideWrapper: cT
      } = TT, {
        t: lT
      } = (0, OT.B)(), xT = TT.advancedMode ? fT.map((kT => [kT, TT.callbacks[kT]])) : KT.n.map((kT => [kT, TT.callbacks[kT]])), AT = (0, yT.jsx)("div", {
        className: MT()("PluginsGrid", {
          SectionBody: !cT
        }),
        children: xT.map((TT => {
          let [cT, lT] = TT;
          return (0, yT.jsx)(IT, {
            plugin: cT,
            callbacks: lT,
            disabled: kT
          }, cT)
        }))
      });
      return cT ? AT : (0, yT.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, yT.jsx)("div", {
          className: "SectionTitle",
          children: lT("worldBuilder:pluginsSection")
        }), AT]
      })
    }

    function IT(TT) {
      let {
        plugin: kT,
        callbacks: {
          isEnabled: cT,
          PD: lT
        },
        disabled: KT
      } = TT;
      const {
        t: fT
      } = (0, OT.B)(), xT = cT();
      return (0, yT.jsxs)("div", {
        className: MT()("PluginCard", {
          PluginCardEnabled: xT,
          PluginCardDisabledForm: KT
        }),
        "data-pad-focusable": !0,
        "aria-disabled": KT || void 0,
        onClick: () => {
          KT || lT(!xT)
        },
        children: [(0, yT.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, yT.jsx)("img", {
            src: `/textures/games/classic/customGames/${kT}.png`,
            alt: kT
          })
        }), (0, yT.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, yT.jsx)("div", {
            className: "PluginCardTitle",
            children: fT(AT[kT])
          }), (0, yT.jsx)("div", {
            className: "PluginCardDescription",
            children: fT(CT[kT])
          })]
        }), (0, yT.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: fT(xT ? "general:on" : "general:off")
        })]
      })
    }
    const AT = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      CT = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  36160: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => xT,
      d: () => IT
    });
    cT(71);
    var lT = cT(1046),
      MT = cT.n(lT),
      KT = cT(4611),
      OT = cT(328),
      yT = cT(1195),
      fT = cT(1099);

    function xT(TT) {
      let {
        value: kT,
        onChange: cT,
        showAll: lT,
        disabled: xT = !1
      } = TT;
      const {
        t: IT
      } = (0, yT.B)();
      return (0, fT.jsxs)("div", {
        className: MT()("BloxdForm GamemodeForm", {
          BasicOptions: !lT
        }),
        children: [(0, fT.jsx)("div", {
          className: "SectionTitle",
          children: IT("classic:defaultGamemode")
        }), (0, fT.jsx)("div", {
          className: "SectionBody",
          children: KT.G.map((TT => lT || (0, KT.z)(TT) ? (0, fT.jsx)("button", {
            type: "button",
            className: MT()("WorldGamemode", {
              Selected: kT === TT
            }),
            disabled: xT,
            onClick: () => {
              cT(TT)
            },
            style: {
              "--background-image": `url(${OT.u[TT]})`
            },
            children: OT.q[TT]
          }, TT) : null))
        })]
      })
    }

    function IT(TT) {
      let {
        mapTypes: kT,
        value: cT,
        onChange: lT,
        showAll: xT,
        disabled: IT = !1,
        children: AT
      } = TT;
      const {
        t: CT
      } = (0, yT.B)();
      return (0, fT.jsxs)("div", {
        className: MT()("BloxdForm MapTypeForm", {
          BasicOptions: !xT
        }),
        children: [(0, fT.jsx)("div", {
          className: "SectionTitle",
          children: CT("customLobby:mapType")
        }), (0, fT.jsx)("div", {
          className: "SectionBody",
          children: kT.map((TT => xT || (0, KT.A)(TT) ? (0, fT.jsx)("button", {
            type: "button",
            className: MT()("MapType", {
              Selected: cT === TT
            }),
            disabled: IT,
            onClick: () => {
              lT(TT)
            },
            style: {
              "--background-image": `url(${OT.k[TT]})`
            },
            children: OT.i[TT]
          }, TT) : null))
        }), AT]
      })
    }
  },
  4893: () => {},
  36147: () => {}
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);