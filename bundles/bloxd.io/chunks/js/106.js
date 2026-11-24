export const id = 106;
export const ids = [106];
export const modules = {
  36377: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => qS
    });
    var tS = gS(1121),
      bS = gS.n(tS),
      XS = gS(64),
      xS = gS(4703),
      NS = gS(1181);

    function qS(SS) {
      let {
        locked: HS,
        children: gS
      } = SS;
      const tS = (0, XS.useRef)(null),
        qS = (0, xS.c)(tS, "y");
      return (0, NS.jsx)("div", {
        ref: tS,
        className: bS()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: qS.before,
          CreateCustomLobbyBodyMoreBelow: qS.after
        }),
        "data-pad-ignore": HS || void 0,
        children: gS
      })
    }
  },
  36443: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      showFirstWorldSetupPopup: () => jS
    });
    gS(5099), gS(36355);
    var tS = gS(4749),
      bS = gS(64),
      XS = gS(4712),
      xS = gS(1281),
      NS = gS(1435),
      qS = gS(36377),
      uS = gS(5103),
      IS = gS(1528),
      fS = gS(3623),
      kS = gS(36369),
      aS = gS(4747),
      KS = gS(1181);

    function jS(SS) {
      const HS = {
        requested: !1,
        closed: !1
      };
      NS.NotificationProvider.showCustomPopup({
        body: gS => (0, KS.jsx)(GS, {
          flow: HS,
          close: gS,
          ...SS
        }),
        middleScreenPopupClassName: "CreateCustomLobbyPopup",
        onClose: () => {
          HS.closed = !0, HS.requested || (0, aS.d)()
        }
      })
    }

    function GS(SS) {
      let {
        flow: HS,
        close: gS,
        onCreating: NS,
        onCreated: jS,
        onFailedClosed: GS,
        join: CS
      } = SS;
      const {
        t: nS
      } = (0, xS.F)(), [PS, QS] = (0, bS.useState)(tS.C), [DS, wS] = (0, bS.useState)(!1), [hS, ZS] = (0, bS.useState)(""), JS = (0, fS.b)();
      (0, bS.useEffect)((() => {
        (0, aS.m)()
      }), []);
      const OS = SS => ({
        isEnabled: () => PS.plugins[SS],
        MJ: HS => {
          (0, aS.f)({
            plugin: SS,
            enabled: HS
          }), QS({
            ...PS,
            plugins: {
              ...PS.plugins,
              [SS]: HS
            }
          })
        }
      });
      return (0, KS.jsxs)("div", {
        className: "CreateCustomLobby",
        children: [(0, KS.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, KS.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: nS("homePage:myWorld")
          })
        }), (0, KS.jsx)(qS.c, {
          locked: DS,
          children: (0, KS.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [(0, KS.jsx)(kS.c, {
              value: PS.defaultGamemode,
              onChange: SS => {
                (0, tS.G)(SS) && SS !== PS.defaultGamemode && ((0, aS.f)({
                  defaultGamemode: SS
                }), QS({
                  ...PS,
                  defaultGamemode: SS
                }))
              },
              showAll: !1,
              disabled: DS
            }), (0, KS.jsx)(kS.g, {
              mapTypes: tS.l,
              value: PS.mapType,
              onChange: SS => {
                (0, tS.J)(SS) && SS !== PS.mapType && ((0, aS.f)({
                  mapType: SS
                }), QS({
                  ...PS,
                  mapType: SS
                }))
              },
              showAll: !1,
              disabled: DS
            }), (0, KS.jsx)(uS.e, {
              callbacks: {
                dayNight: OS("dayNight"),
                fallDamage: OS("fallDamage"),
                survivalGuns: OS("survivalGuns")
              },
              disabled: DS,
              advancedMode: !1
            })]
          })
        }), (0, KS.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, KS.jsx)(IS.p, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: DS,
            onClick: () => {
              HS.requested = !0, wS(!0), NS(!0), ZS(""), (0, aS.i)(PS), XS.e.createPersonalWorld(PS).then((SS => {
                NS(!1);
                const tS = jS(SS);
                !HS.closed && JS.current ? (gS(), CS(SS)) : tS || (0, aS.d)()
              }), (SS => {
                if (console.error("Failed to create personal world:", SS), NS(!1), HS.requested = !1, HS.closed || !JS.current) return (0, aS.d)(), void GS(SS);
                ZS(SS.message), wS(!1)
              }))
            },
            children: nS("general:play")
          }), hS && (0, KS.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: hS
          })]
        })]
      })
    }
  },
  5103: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => uS
    });
    var tS = gS(1121),
      bS = gS.n(tS),
      XS = gS(4749),
      xS = gS(1281),
      NS = gS(1181);
    const qS = [...XS.p, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function uS(SS) {
      const {
        disabled: HS,
        hideWrapper: gS
      } = SS, {
        t: tS
      } = (0, xS.F)(), uS = SS.advancedMode ? qS.map((HS => [HS, SS.callbacks[HS]])) : XS.p.map((HS => [HS, SS.callbacks[HS]])), fS = (0, NS.jsx)("div", {
        className: bS()("PluginsGrid", {
          SectionBody: !gS
        }),
        children: uS.map((SS => {
          let [gS, tS] = SS;
          return (0, NS.jsx)(IS, {
            plugin: gS,
            callbacks: tS,
            disabled: HS
          }, gS)
        }))
      });
      return gS ? fS : (0, NS.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, NS.jsx)("div", {
          className: "SectionTitle",
          children: tS("worldBuilder:pluginsSection")
        }), fS]
      })
    }

    function IS(SS) {
      let {
        plugin: HS,
        callbacks: {
          isEnabled: gS,
          MJ: tS
        },
        disabled: XS
      } = SS;
      const {
        t: qS
      } = (0, xS.F)(), uS = gS();
      return (0, NS.jsxs)("div", {
        className: bS()("PluginCard", {
          PluginCardEnabled: uS,
          PluginCardDisabledForm: XS
        }),
        "data-pad-focusable": !0,
        "aria-disabled": XS || void 0,
        onClick: () => {
          XS || tS(!uS)
        },
        children: [(0, NS.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, NS.jsx)("img", {
            src: `/textures/games/classic/customGames/${HS}.png`,
            alt: HS
          })
        }), (0, NS.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, NS.jsx)("div", {
            className: "PluginCardTitle",
            children: qS(fS[HS])
          }), (0, NS.jsx)("div", {
            className: "PluginCardDescription",
            children: qS(kS[HS])
          })]
        }), (0, NS.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: qS(uS ? "general:on" : "general:off")
        })]
      })
    }
    const fS = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      kS = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  36369: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => uS,
      g: () => IS
    });
    gS(64);
    var tS = gS(1121),
      bS = gS.n(tS),
      XS = gS(4749),
      xS = gS(369),
      NS = gS(1281),
      qS = gS(1181);

    function uS(SS) {
      let {
        value: HS,
        onChange: gS,
        showAll: tS,
        disabled: uS = !1
      } = SS;
      const {
        t: IS
      } = (0, NS.F)();
      return (0, qS.jsxs)("div", {
        className: bS()("BloxdForm GamemodeForm", {
          BasicOptions: !tS
        }),
        children: [(0, qS.jsx)("div", {
          className: "SectionTitle",
          children: IS("classic:defaultGamemode")
        }), (0, qS.jsx)("div", {
          className: "SectionBody",
          children: XS.O.map((SS => tS || (0, XS.G)(SS) ? (0, qS.jsx)("button", {
            type: "button",
            className: bS()("WorldGamemode", {
              Selected: HS === SS
            }),
            disabled: uS,
            onClick: () => {
              gS(SS)
            },
            style: {
              "--background-image": `url(${xS.u[SS]})`
            },
            children: xS.t[SS]
          }, SS) : null))
        })]
      })
    }

    function IS(SS) {
      let {
        mapTypes: HS,
        value: gS,
        onChange: tS,
        showAll: uS,
        disabled: IS = !1,
        children: fS
      } = SS;
      const {
        t: kS
      } = (0, NS.F)();
      return (0, qS.jsxs)("div", {
        className: bS()("BloxdForm MapTypeForm", {
          BasicOptions: !uS
        }),
        children: [(0, qS.jsx)("div", {
          className: "SectionTitle",
          children: kS("customLobby:mapType")
        }), (0, qS.jsx)("div", {
          className: "SectionBody",
          children: HS.map((SS => uS || (0, XS.J)(SS) ? (0, qS.jsx)("button", {
            type: "button",
            className: bS()("MapType", {
              Selected: gS === SS
            }),
            disabled: IS,
            onClick: () => {
              tS(SS)
            },
            style: {
              "--background-image": `url(${xS.p[SS]})`
            },
            children: xS.m[SS]
          }, SS) : null))
        }), fS]
      })
    }
  },
  5099: () => {},
  36355: () => {}
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);