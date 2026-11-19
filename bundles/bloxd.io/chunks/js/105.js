export const id = 105;
export const ids = [105];
export const modules = {
  35794: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => gY
    });
    var FY = DY(1092),
      AY = DY.n(FY),
      IY = DY(61),
      RY = DY(4140),
      OY = DY(1125);

    function gY(YY) {
      let {
        locked: rY,
        children: DY
      } = YY;
      const FY = (0, IY.useRef)(null),
        gY = (0, RY.c)(FY, "y");
      return (0, OY.jsx)("div", {
        ref: FY,
        className: AY()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: gY.before,
          CreateCustomLobbyBodyMoreBelow: gY.after
        }),
        "data-pad-ignore": rY || void 0,
        children: DY
      })
    }
  },
  35864: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      showFirstWorldSetupPopup: () => QY
    });
    DY(4523), DY(35778);
    var FY = DY(4201),
      AY = DY(61),
      IY = DY(4147),
      RY = DY(1211),
      OY = DY(1346),
      gY = DY(35794),
      aY = DY(4529),
      vY = DY(1437),
      uY = DY(3069),
      sY = DY(35790),
      iY = DY(4188),
      yY = DY(1125);

    function QY(YY) {
      const rY = {
        requested: !1,
        closed: !1
      };
      OY.NotificationProvider.showCustomPopup({
        body: DY => (0, yY.jsx)(oY, {
          flow: rY,
          close: DY,
          ...YY
        }),
        middleScreenPopupClassName: "CreateCustomLobbyPopup",
        onClose: () => {
          rY.closed = !0, rY.requested || (0, iY.h)()
        }
      })
    }

    function oY(YY) {
      let {
        flow: rY,
        close: DY,
        onCreating: OY,
        onCreated: QY,
        onFailedClosed: oY,
        join: WY
      } = YY;
      const {
        t: EY
      } = (0, RY.C)(), [mY, VY] = (0, AY.useState)(FY.r), [SY, lY] = (0, AY.useState)(!1), [TY, eY] = (0, AY.useState)(""), NY = (0, uY.b)();
      (0, AY.useEffect)((() => {
        (0, iY.q)()
      }), []);
      const BY = YY => ({
        isEnabled: () => mY.plugins[YY],
        mV: rY => {
          (0, iY.k)({
            plugin: YY,
            enabled: rY
          }), VY({
            ...mY,
            plugins: {
              ...mY.plugins,
              [YY]: rY
            }
          })
        }
      });
      return (0, yY.jsxs)("div", {
        className: "CreateCustomLobby",
        children: [(0, yY.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, yY.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: EY("homePage:myWorld")
          })
        }), (0, yY.jsx)(gY.e, {
          locked: SY,
          children: (0, yY.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [(0, yY.jsx)(sY.d, {
              value: mY.defaultGamemode,
              onChange: YY => {
                (0, FY.v)(YY) && YY !== mY.defaultGamemode && ((0, iY.k)({
                  defaultGamemode: YY
                }), VY({
                  ...mY,
                  defaultGamemode: YY
                }))
              },
              showAll: !1,
              disabled: SY
            }), (0, yY.jsx)(sY.e, {
              mapTypes: FY.i,
              value: mY.mapType,
              onChange: YY => {
                (0, FY.z)(YY) && YY !== mY.mapType && ((0, iY.k)({
                  mapType: YY
                }), VY({
                  ...mY,
                  mapType: YY
                }))
              },
              showAll: !1,
              disabled: SY
            }), (0, yY.jsx)(aY.c, {
              callbacks: {
                dayNight: BY("dayNight"),
                fallDamage: BY("fallDamage"),
                survivalGuns: BY("survivalGuns")
              },
              disabled: SY,
              advancedMode: !1
            })]
          })
        }), (0, yY.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, yY.jsx)(vY.n, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: SY,
            onClick: () => {
              rY.requested = !0, lY(!0), OY(!0), eY(""), (0, iY.m)(mY), IY.e.createPersonalWorld(mY).then((YY => {
                OY(!1);
                const FY = QY(YY);
                !rY.closed && NY.current ? (DY(), WY(YY)) : FY || (0, iY.h)()
              }), (YY => {
                if (console.error("Failed to create personal world:", YY), OY(!1), rY.requested = !1, rY.closed || !NY.current) return (0, iY.h)(), void oY(YY);
                eY(YY.message), lY(!1)
              }))
            },
            children: EY("general:play")
          }), TY && (0, yY.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: TY
          })]
        })]
      })
    }
  },
  4529: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => aY
    });
    var FY = DY(1092),
      AY = DY.n(FY),
      IY = DY(4201),
      RY = DY(1211),
      OY = DY(1125);
    const gY = [...IY.l, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function aY(YY) {
      const {
        disabled: rY,
        hideWrapper: DY
      } = YY, {
        t: FY
      } = (0, RY.C)(), aY = YY.advancedMode ? gY.map((rY => [rY, YY.callbacks[rY]])) : IY.l.map((rY => [rY, YY.callbacks[rY]])), uY = (0, OY.jsx)("div", {
        className: AY()("PluginsGrid", {
          SectionBody: !DY
        }),
        children: aY.map((YY => {
          let [DY, FY] = YY;
          return (0, OY.jsx)(vY, {
            plugin: DY,
            callbacks: FY,
            disabled: rY
          }, DY)
        }))
      });
      return DY ? uY : (0, OY.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, OY.jsx)("div", {
          className: "SectionTitle",
          children: FY("worldBuilder:pluginsSection")
        }), uY]
      })
    }

    function vY(YY) {
      let {
        plugin: rY,
        callbacks: {
          isEnabled: DY,
          mV: FY
        },
        disabled: IY
      } = YY;
      const {
        t: gY
      } = (0, RY.C)(), aY = DY();
      return (0, OY.jsxs)("div", {
        className: AY()("PluginCard", {
          PluginCardEnabled: aY,
          PluginCardDisabledForm: IY
        }),
        "data-pad-focusable": !0,
        "aria-disabled": IY || void 0,
        onClick: () => {
          IY || FY(!aY)
        },
        children: [(0, OY.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, OY.jsx)("img", {
            src: `/textures/games/classic/customGames/${rY}.png`,
            alt: rY
          })
        }), (0, OY.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, OY.jsx)("div", {
            className: "PluginCardTitle",
            children: gY(uY[rY])
          }), (0, OY.jsx)("div", {
            className: "PluginCardDescription",
            children: gY(sY[rY])
          })]
        }), (0, OY.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: gY(aY ? "general:on" : "general:off")
        })]
      })
    }
    const uY = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      sY = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  35790: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => aY,
      e: () => vY
    });
    DY(61);
    var FY = DY(1092),
      AY = DY.n(FY),
      IY = DY(4201),
      RY = DY(332),
      OY = DY(1211),
      gY = DY(1125);

    function aY(YY) {
      let {
        value: rY,
        onChange: DY,
        showAll: FY,
        disabled: aY = !1
      } = YY;
      const {
        t: vY
      } = (0, OY.C)();
      return (0, gY.jsxs)("div", {
        className: AY()("BloxdForm GamemodeForm", {
          BasicOptions: !FY
        }),
        children: [(0, gY.jsx)("div", {
          className: "SectionTitle",
          children: vY("classic:defaultGamemode")
        }), (0, gY.jsx)("div", {
          className: "SectionBody",
          children: IY.D.map((YY => FY || (0, IY.v)(YY) ? (0, gY.jsx)("button", {
            type: "button",
            className: AY()("WorldGamemode", {
              Selected: rY === YY
            }),
            disabled: aY,
            onClick: () => {
              DY(YY)
            },
            style: {
              "--background-image": `url(${RY.v[YY]})`
            },
            children: RY.u[YY]
          }, YY) : null))
        })]
      })
    }

    function vY(YY) {
      let {
        mapTypes: rY,
        value: DY,
        onChange: FY,
        showAll: aY,
        disabled: vY = !1,
        children: uY
      } = YY;
      const {
        t: sY
      } = (0, OY.C)();
      return (0, gY.jsxs)("div", {
        className: AY()("BloxdForm MapTypeForm", {
          BasicOptions: !aY
        }),
        children: [(0, gY.jsx)("div", {
          className: "SectionTitle",
          children: sY("customLobby:mapType")
        }), (0, gY.jsx)("div", {
          className: "SectionBody",
          children: rY.map((YY => aY || (0, IY.z)(YY) ? (0, gY.jsx)("button", {
            type: "button",
            className: AY()("MapType", {
              Selected: DY === YY
            }),
            disabled: vY,
            onClick: () => {
              FY(YY)
            },
            style: {
              "--background-image": `url(${RY.q[YY]})`
            },
            children: RY.m[YY]
          }, YY) : null))
        }), uY]
      })
    }
  },
  4523: () => {},
  35778: () => {}
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);