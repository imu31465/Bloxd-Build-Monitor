export const id = 121;
export const ids = [121];
export const modules = {
  37406: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => iR
    });
    var yR = GR(1163),
      tR = GR.n(yR),
      uR = GR(66),
      ZR = GR(5383),
      qR = GR(1378);

    function iR(RR) {
      let {
        locked: JR,
        children: GR
      } = RR;
      const yR = (0, uR.useRef)(null),
        iR = (0, ZR.b)(yR, "y");
      return (0, qR.jsx)("div", {
        ref: yR,
        className: tR()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: iR.before,
          CreateCustomLobbyBodyMoreBelow: iR.after
        }),
        "data-pad-ignore": JR || void 0,
        children: GR
      })
    }
  },
  37595: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      showFirstWorldSetupPopup: () => aR
    });
    GR(5820), GR(37391);
    var yR = GR(5425),
      tR = GR(66),
      uR = GR(5392),
      ZR = GR(1270),
      qR = GR(1493),
      iR = GR(37406),
      fR = GR(5828),
      VR = GR(1590),
      KR = GR(4829),
      wR = GR(37397),
      rR = GR(5423),
      eR = GR(1378);

    function aR(RR) {
      const JR = {
        requested: !1,
        closed: !1
      };
      qR.NotificationProvider.showCustomPopup({
        body: GR => (0, eR.jsx)(LR, {
          flow: JR,
          close: GR,
          ...RR
        }),
        middleScreenPopupClassName: "CreateCustomLobbyPopup",
        onClose: () => {
          JR.closed = !0, JR.requested || (0, rR.e)()
        }
      })
    }

    function LR(RR) {
      let {
        flow: JR,
        close: GR,
        onCreating: qR,
        onCreated: aR,
        onFailedClosed: LR,
        join: nR
      } = RR;
      const {
        t: UR
      } = (0, ZR.A)(), [WR, AR] = (0, tR.useState)(yR.s), [CR, XR] = (0, tR.useState)(!1), [MR, BR] = (0, tR.useState)(""), lR = (0, KR.d)();
      (0, tR.useEffect)((() => {
        (0, rR.n)()
      }), []);
      const pR = RR => ({
        isEnabled: () => WR.plugins[RR],
        JA: JR => {
          (0, rR.h)({
            plugin: RR,
            enabled: JR
          }), AR({
            ...WR,
            plugins: {
              ...WR.plugins,
              [RR]: JR
            }
          })
        }
      });
      return (0, eR.jsxs)("div", {
        className: "CreateCustomLobby",
        children: [(0, eR.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, eR.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: UR("homePage:myWorld")
          })
        }), (0, eR.jsx)(iR.e, {
          locked: CR,
          children: (0, eR.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [(0, eR.jsx)(wR.d, {
              value: WR.defaultGamemode,
              onChange: RR => {
                (0, yR.v)(RR) && RR !== WR.defaultGamemode && ((0, rR.h)({
                  defaultGamemode: RR
                }), AR({
                  ...WR,
                  defaultGamemode: RR
                }))
              },
              showAll: !1,
              disabled: CR
            }), (0, eR.jsx)(wR.g, {
              mapTypes: yR.i,
              value: WR.mapType,
              onChange: RR => {
                (0, yR.w)(RR) && RR !== WR.mapType && ((0, rR.h)({
                  mapType: RR
                }), AR({
                  ...WR,
                  mapType: RR
                }))
              },
              showAll: !1,
              disabled: CR
            }), (0, eR.jsx)(fR.b, {
              callbacks: {
                dayNight: pR("dayNight"),
                fallDamage: pR("fallDamage"),
                survivalGuns: pR("survivalGuns")
              },
              disabled: CR,
              advancedMode: !1
            })]
          })
        }), (0, eR.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, eR.jsx)(VR.n, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: CR,
            onClick: () => {
              JR.requested = !0, XR(!0), qR(!0), BR(""), (0, rR.j)(WR), uR.c.createPersonalWorld(WR).then((RR => {
                qR(!1);
                const yR = aR(RR);
                !JR.closed && lR.current ? (GR(), nR(RR)) : yR || (0, rR.e)()
              }), (RR => {
                if (console.error("Failed to create personal world:", RR), qR(!1), JR.requested = !1, JR.closed || !lR.current) return (0, rR.e)(), void LR(RR);
                BR(RR.message), XR(!1)
              }))
            },
            children: UR("general:play")
          }), MR && (0, eR.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: MR
          })]
        })]
      })
    }
  },
  5828: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => fR
    });
    var yR = GR(1163),
      tR = GR.n(yR),
      uR = GR(5425),
      ZR = GR(1270),
      qR = GR(1378);
    const iR = [...uR.j, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function fR(RR) {
      const {
        disabled: JR,
        hideWrapper: GR
      } = RR, {
        t: yR
      } = (0, ZR.A)(), fR = RR.advancedMode ? iR.map((JR => [JR, RR.callbacks[JR]])) : uR.j.map((JR => [JR, RR.callbacks[JR]])), KR = (0, qR.jsx)("div", {
        className: tR()("PluginsGrid", {
          SectionBody: !GR
        }),
        children: fR.map((RR => {
          let [GR, yR] = RR;
          return (0, qR.jsx)(VR, {
            plugin: GR,
            callbacks: yR,
            disabled: JR
          }, GR)
        }))
      });
      return GR ? KR : (0, qR.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, qR.jsx)("div", {
          className: "SectionTitle",
          children: yR("worldBuilder:pluginsSection")
        }), KR]
      })
    }

    function VR(RR) {
      let {
        plugin: JR,
        callbacks: {
          isEnabled: GR,
          JA: yR
        },
        disabled: uR
      } = RR;
      const {
        t: iR
      } = (0, ZR.A)(), fR = GR();
      return (0, qR.jsxs)("div", {
        className: tR()("PluginCard", {
          PluginCardEnabled: fR,
          PluginCardDisabledForm: uR
        }),
        "data-pad-focusable": !0,
        "aria-disabled": uR || void 0,
        onClick: () => {
          uR || yR(!fR)
        },
        children: [(0, qR.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, qR.jsx)("img", {
            src: `/textures/games/classic/customGames/${JR}.png`,
            alt: JR
          })
        }), (0, qR.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, qR.jsx)("div", {
            className: "PluginCardTitle",
            children: iR(KR[JR])
          }), (0, qR.jsx)("div", {
            className: "PluginCardDescription",
            children: iR(wR[JR])
          })]
        }), (0, qR.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: iR(fR ? "general:on" : "general:off")
        })]
      })
    }
    const KR = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      wR = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  37397: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => fR,
      g: () => VR
    });
    GR(66);
    var yR = GR(1163),
      tR = GR.n(yR),
      uR = GR(5425),
      ZR = GR(359),
      qR = GR(1270),
      iR = GR(1378);

    function fR(RR) {
      let {
        value: JR,
        onChange: GR,
        showAll: yR,
        disabled: fR = !1
      } = RR;
      const {
        t: VR
      } = (0, qR.A)();
      return (0, iR.jsxs)("div", {
        className: tR()("BloxdForm GamemodeForm", {
          BasicOptions: !yR
        }),
        children: [(0, iR.jsx)("div", {
          className: "SectionTitle",
          children: VR("classic:defaultGamemode")
        }), (0, iR.jsx)("div", {
          className: "SectionBody",
          children: uR.B.map((RR => yR || (0, uR.v)(RR) ? (0, iR.jsx)("button", {
            type: "button",
            className: tR()("WorldGamemode", {
              Selected: JR === RR
            }),
            disabled: fR,
            onClick: () => {
              GR(RR)
            },
            style: {
              "--background-image": `url(${ZR.u[RR]})`
            },
            children: ZR.s[RR]
          }, RR) : null))
        })]
      })
    }

    function VR(RR) {
      let {
        mapTypes: JR,
        value: GR,
        onChange: yR,
        showAll: fR,
        disabled: VR = !1,
        children: KR
      } = RR;
      const {
        t: wR
      } = (0, qR.A)();
      return (0, iR.jsxs)("div", {
        className: tR()("BloxdForm MapTypeForm", {
          BasicOptions: !fR
        }),
        children: [(0, iR.jsx)("div", {
          className: "SectionTitle",
          children: wR("customLobby:mapType")
        }), (0, iR.jsx)("div", {
          className: "SectionBody",
          children: JR.map((RR => fR || (0, uR.w)(RR) ? (0, iR.jsx)("button", {
            type: "button",
            className: tR()("MapType", {
              Selected: GR === RR
            }),
            disabled: VR,
            onClick: () => {
              yR(RR)
            },
            style: {
              "--background-image": `url(${ZR.n[RR]})`
            },
            children: ZR.j[RR]
          }, RR) : null))
        }), KR]
      })
    }
  },
  5820: () => {},
  37391: () => {}
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);