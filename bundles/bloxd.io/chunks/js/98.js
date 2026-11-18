export const id = 98;
export const ids = [98];
export const modules = {
  35481: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => qJ
    });
    var FJ = ZJ(926),
      UJ = ZJ.n(FJ),
      eJ = ZJ(47),
      XJ = ZJ(4e3),
      AJ = ZJ(990);

    function qJ(JJ) {
      let {
        locked: cJ,
        children: ZJ
      } = JJ;
      const FJ = (0, eJ.useRef)(null),
        qJ = (0, XJ.e)(FJ, "y");
      return (0, AJ.jsx)("div", {
        ref: FJ,
        className: UJ()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: qJ.before,
          CreateCustomLobbyBodyMoreBelow: qJ.after
        }),
        "data-pad-ignore": cJ || void 0,
        children: ZJ
      })
    }
  },
  35526: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      showFirstWorldSetupPopup: () => GJ
    });
    ZJ(4351), ZJ(35468);
    var FJ = ZJ(4049),
      UJ = ZJ(47),
      eJ = ZJ(4006),
      XJ = ZJ(1086),
      AJ = ZJ(1247),
      qJ = ZJ(35481),
      jJ = ZJ(4359),
      YJ = ZJ(1329),
      hJ = ZJ(2975),
      DJ = ZJ(35477),
      sJ = ZJ(4038),
      nJ = ZJ(990);

    function GJ(JJ) {
      const cJ = {
        requested: !1,
        closed: !1
      };
      AJ.NotificationProvider.showCustomPopup({
        body: ZJ => (0, nJ.jsx)(fJ, {
          flow: cJ,
          close: ZJ,
          ...JJ
        }),
        middleScreenPopupClassName: "CreateCustomLobbyPopup",
        onClose: () => {
          cJ.closed = !0, cJ.requested || (0, sJ.e)()
        }
      })
    }

    function fJ(JJ) {
      let {
        flow: cJ,
        close: ZJ,
        onCreating: AJ,
        onCreated: GJ,
        onFailedClosed: fJ,
        join: xJ
      } = JJ;
      const {
        t: rJ
      } = (0, XJ.F)(), [vJ, mJ] = (0, UJ.useState)(FJ.r), [QJ, EJ] = (0, UJ.useState)(!1), [VJ, KJ] = (0, UJ.useState)(""), yJ = (0, hJ.e)();
      (0, UJ.useEffect)((() => {
        (0, sJ.p)()
      }), []);
      const SJ = JJ => ({
        isEnabled: () => vJ.plugins[JJ],
        GV: cJ => {
          (0, sJ.i)({
            plugin: JJ,
            enabled: cJ
          }), mJ({
            ...vJ,
            plugins: {
              ...vJ.plugins,
              [JJ]: cJ
            }
          })
        }
      });
      return (0, nJ.jsxs)("div", {
        className: "CreateCustomLobby",
        children: [(0, nJ.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, nJ.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: rJ("homePage:myWorld")
          })
        }), (0, nJ.jsx)(qJ.c, {
          locked: QJ,
          children: (0, nJ.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [(0, nJ.jsx)(DJ.c, {
              value: vJ.defaultGamemode,
              onChange: JJ => {
                (0, FJ.t)(JJ) && JJ !== vJ.defaultGamemode && ((0, sJ.i)({
                  defaultGamemode: JJ
                }), mJ({
                  ...vJ,
                  defaultGamemode: JJ
                }))
              },
              showAll: !1,
              disabled: QJ
            }), (0, nJ.jsx)(DJ.e, {
              mapTypes: FJ.i,
              value: vJ.mapType,
              onChange: JJ => {
                (0, FJ.w)(JJ) && JJ !== vJ.mapType && ((0, sJ.i)({
                  mapType: JJ
                }), mJ({
                  ...vJ,
                  mapType: JJ
                }))
              },
              showAll: !1,
              disabled: QJ
            }), (0, nJ.jsx)(jJ.b, {
              callbacks: {
                dayNight: SJ("dayNight"),
                fallDamage: SJ("fallDamage"),
                survivalGuns: SJ("survivalGuns")
              },
              disabled: QJ,
              advancedMode: !1
            })]
          })
        }), (0, nJ.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, nJ.jsx)(YJ.m, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: QJ,
            onClick: () => {
              cJ.requested = !0, EJ(!0), AJ(!0), KJ(""), (0, sJ.m)(vJ), eJ.e.createPersonalWorld(vJ).then((JJ => {
                AJ(!1);
                const FJ = GJ(JJ);
                !cJ.closed && yJ.current ? (ZJ(), xJ(JJ)) : FJ || (0, sJ.e)()
              }), (JJ => {
                if (console.error("Failed to create personal world:", JJ), AJ(!1), cJ.requested = !1, cJ.closed || !yJ.current) return (0, sJ.e)(), void fJ(JJ);
                KJ(JJ.message), EJ(!1)
              }))
            },
            children: rJ("general:play")
          }), VJ && (0, nJ.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: VJ
          })]
        })]
      })
    }
  },
  4359: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => jJ
    });
    var FJ = ZJ(926),
      UJ = ZJ.n(FJ),
      eJ = ZJ(4049),
      XJ = ZJ(1086),
      AJ = ZJ(990);
    const qJ = [...eJ.m, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function jJ(JJ) {
      const {
        disabled: cJ,
        hideWrapper: ZJ
      } = JJ, {
        t: FJ
      } = (0, XJ.F)(), jJ = JJ.advancedMode ? qJ.map((cJ => [cJ, JJ.callbacks[cJ]])) : eJ.m.map((cJ => [cJ, JJ.callbacks[cJ]])), hJ = (0, AJ.jsx)("div", {
        className: UJ()("PluginsGrid", {
          SectionBody: !ZJ
        }),
        children: jJ.map((JJ => {
          let [ZJ, FJ] = JJ;
          return (0, AJ.jsx)(YJ, {
            plugin: ZJ,
            callbacks: FJ,
            disabled: cJ
          }, ZJ)
        }))
      });
      return ZJ ? hJ : (0, AJ.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, AJ.jsx)("div", {
          className: "SectionTitle",
          children: FJ("worldBuilder:pluginsSection")
        }), hJ]
      })
    }

    function YJ(JJ) {
      let {
        plugin: cJ,
        callbacks: {
          isEnabled: ZJ,
          GV: FJ
        },
        disabled: eJ
      } = JJ;
      const {
        t: qJ
      } = (0, XJ.F)(), jJ = ZJ();
      return (0, AJ.jsxs)("div", {
        className: UJ()("PluginCard", {
          PluginCardEnabled: jJ,
          PluginCardDisabledForm: eJ
        }),
        "data-pad-focusable": !0,
        "aria-disabled": eJ || void 0,
        onClick: () => {
          eJ || FJ(!jJ)
        },
        children: [(0, AJ.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, AJ.jsx)("img", {
            src: `/textures/games/classic/customGames/${cJ}.png`,
            alt: cJ
          })
        }), (0, AJ.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, AJ.jsx)("div", {
            className: "PluginCardTitle",
            children: qJ(hJ[cJ])
          }), (0, AJ.jsx)("div", {
            className: "PluginCardDescription",
            children: qJ(DJ[cJ])
          })]
        }), (0, AJ.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: qJ(jJ ? "general:on" : "general:off")
        })]
      })
    }
    const hJ = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      DJ = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  35477: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => jJ,
      e: () => YJ
    });
    ZJ(47);
    var FJ = ZJ(926),
      UJ = ZJ.n(FJ),
      eJ = ZJ(4049),
      XJ = ZJ(227),
      AJ = ZJ(1086),
      qJ = ZJ(990);

    function jJ(JJ) {
      let {
        value: cJ,
        onChange: ZJ,
        showAll: FJ,
        disabled: jJ = !1
      } = JJ;
      const {
        t: YJ
      } = (0, AJ.F)();
      return (0, qJ.jsxs)("div", {
        className: UJ()("BloxdForm GamemodeForm", {
          BasicOptions: !FJ
        }),
        children: [(0, qJ.jsx)("div", {
          className: "SectionTitle",
          children: YJ("classic:defaultGamemode")
        }), (0, qJ.jsx)("div", {
          className: "SectionBody",
          children: eJ.B.map((JJ => FJ || (0, eJ.t)(JJ) ? (0, qJ.jsx)("button", {
            type: "button",
            className: UJ()("WorldGamemode", {
              Selected: cJ === JJ
            }),
            disabled: jJ,
            onClick: () => {
              ZJ(JJ)
            },
            style: {
              "--background-image": `url(${XJ.q[JJ]})`
            },
            children: XJ.p[JJ]
          }, JJ) : null))
        })]
      })
    }

    function YJ(JJ) {
      let {
        mapTypes: cJ,
        value: ZJ,
        onChange: FJ,
        showAll: jJ,
        disabled: YJ = !1,
        children: hJ
      } = JJ;
      const {
        t: DJ
      } = (0, AJ.F)();
      return (0, qJ.jsxs)("div", {
        className: UJ()("BloxdForm MapTypeForm", {
          BasicOptions: !jJ
        }),
        children: [(0, qJ.jsx)("div", {
          className: "SectionTitle",
          children: DJ("customLobby:mapType")
        }), (0, qJ.jsx)("div", {
          className: "SectionBody",
          children: cJ.map((JJ => jJ || (0, eJ.w)(JJ) ? (0, qJ.jsx)("button", {
            type: "button",
            className: UJ()("MapType", {
              Selected: ZJ === JJ
            }),
            disabled: YJ,
            onClick: () => {
              FJ(JJ)
            },
            style: {
              "--background-image": `url(${XJ.k[JJ]})`
            },
            children: XJ.h[JJ]
          }, JJ) : null))
        }), hJ]
      })
    }
  },
  4351: () => {},
  35468: () => {}
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);