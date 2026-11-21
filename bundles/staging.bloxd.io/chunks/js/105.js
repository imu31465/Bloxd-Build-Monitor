export const id = 105;
export const ids = [105];
export const modules = {
  36013: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => vQ
    });
    var LQ = wQ(1070),
      qQ = wQ.n(LQ),
      oQ = wQ(53),
      DQ = wQ(4426),
      kQ = wQ(1107);

    function vQ(QQ) {
      let {
        locked: FQ,
        children: wQ
      } = QQ;
      const LQ = (0, oQ.useRef)(null),
        vQ = (0, DQ.b)(LQ, "y");
      return (0, kQ.jsx)("div", {
        ref: LQ,
        className: qQ()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: vQ.before,
          CreateCustomLobbyBodyMoreBelow: vQ.after
        }),
        "data-pad-ignore": FQ || void 0,
        children: wQ
      })
    }
  },
  36073: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      showFirstWorldSetupPopup: () => AQ
    });
    wQ(4783), wQ(35995);
    var LQ = wQ(4475),
      qQ = wQ(53),
      oQ = wQ(4435),
      DQ = wQ(1207),
      kQ = wQ(1362),
      vQ = wQ(36013),
      mQ = wQ(4787),
      uQ = wQ(1451),
      HQ = wQ(3363),
      bQ = wQ(36007),
      YQ = wQ(4460),
      xQ = wQ(1107);

    function AQ(QQ) {
      const FQ = {
        requested: !1,
        closed: !1
      };
      kQ.NotificationProvider.showCustomPopup({
        body: wQ => (0, xQ.jsx)(tQ, {
          flow: FQ,
          close: wQ,
          ...QQ
        }),
        middleScreenPopupClassName: "CreateCustomLobbyPopup",
        onClose: () => {
          FQ.closed = !0, FQ.requested || (0, YQ.g)()
        }
      })
    }

    function tQ(QQ) {
      let {
        flow: FQ,
        close: wQ,
        onCreating: kQ,
        onCreated: AQ,
        onFailedClosed: tQ,
        join: eQ
      } = QQ;
      const {
        t: MQ
      } = (0, DQ.y)(), [GQ, pQ] = (0, qQ.useState)(LQ.t), [cQ, CQ] = (0, qQ.useState)(!1), [SQ, iQ] = (0, qQ.useState)(""), WQ = (0, HQ.c)();
      (0, qQ.useEffect)((() => {
        (0, YQ.m)()
      }), []);
      const RQ = QQ => ({
        isEnabled: () => GQ.plugins[QQ],
        Qr: FQ => {
          (0, YQ.h)({
            plugin: QQ,
            enabled: FQ
          }), pQ({
            ...GQ,
            plugins: {
              ...GQ.plugins,
              [QQ]: FQ
            }
          })
        }
      });
      return (0, xQ.jsxs)("div", {
        className: "CreateCustomLobby",
        children: [(0, xQ.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, xQ.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: MQ("homePage:myWorld")
          })
        }), (0, xQ.jsx)(vQ.c, {
          locked: cQ,
          children: (0, xQ.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [(0, xQ.jsx)(bQ.c, {
              value: GQ.defaultGamemode,
              onChange: QQ => {
                (0, LQ.u)(QQ) && QQ !== GQ.defaultGamemode && ((0, YQ.h)({
                  defaultGamemode: QQ
                }), pQ({
                  ...GQ,
                  defaultGamemode: QQ
                }))
              },
              showAll: !1,
              disabled: cQ
            }), (0, xQ.jsx)(bQ.d, {
              mapTypes: LQ.h,
              value: GQ.mapType,
              onChange: QQ => {
                (0, LQ.w)(QQ) && QQ !== GQ.mapType && ((0, YQ.h)({
                  mapType: QQ
                }), pQ({
                  ...GQ,
                  mapType: QQ
                }))
              },
              showAll: !1,
              disabled: cQ
            }), (0, xQ.jsx)(mQ.c, {
              callbacks: {
                dayNight: RQ("dayNight"),
                fallDamage: RQ("fallDamage"),
                survivalGuns: RQ("survivalGuns")
              },
              disabled: cQ,
              advancedMode: !1
            })]
          })
        }), (0, xQ.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, xQ.jsx)(uQ.m, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: cQ,
            onClick: () => {
              FQ.requested = !0, CQ(!0), kQ(!0), iQ(""), (0, YQ.i)(GQ), oQ.d.createPersonalWorld(GQ).then((QQ => {
                kQ(!1);
                const LQ = AQ(QQ);
                !FQ.closed && WQ.current ? (wQ(), eQ(QQ)) : LQ || (0, YQ.g)()
              }), (QQ => {
                if (console.error("Failed to create personal world:", QQ), kQ(!1), FQ.requested = !1, FQ.closed || !WQ.current) return (0, YQ.g)(), void tQ(QQ);
                iQ(QQ.message), CQ(!1)
              }))
            },
            children: MQ("general:play")
          }), SQ && (0, xQ.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: SQ
          })]
        })]
      })
    }
  },
  4787: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => mQ
    });
    var LQ = wQ(1070),
      qQ = wQ.n(LQ),
      oQ = wQ(4475),
      DQ = wQ(1207),
      kQ = wQ(1107);
    const vQ = [...oQ.j, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function mQ(QQ) {
      const {
        disabled: FQ,
        hideWrapper: wQ
      } = QQ, {
        t: LQ
      } = (0, DQ.y)(), mQ = QQ.advancedMode ? vQ.map((FQ => [FQ, QQ.callbacks[FQ]])) : oQ.j.map((FQ => [FQ, QQ.callbacks[FQ]])), HQ = (0, kQ.jsx)("div", {
        className: qQ()("PluginsGrid", {
          SectionBody: !wQ
        }),
        children: mQ.map((QQ => {
          let [wQ, LQ] = QQ;
          return (0, kQ.jsx)(uQ, {
            plugin: wQ,
            callbacks: LQ,
            disabled: FQ
          }, wQ)
        }))
      });
      return wQ ? HQ : (0, kQ.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, kQ.jsx)("div", {
          className: "SectionTitle",
          children: LQ("worldBuilder:pluginsSection")
        }), HQ]
      })
    }

    function uQ(QQ) {
      let {
        plugin: FQ,
        callbacks: {
          isEnabled: wQ,
          Qr: LQ
        },
        disabled: oQ
      } = QQ;
      const {
        t: vQ
      } = (0, DQ.y)(), mQ = wQ();
      return (0, kQ.jsxs)("div", {
        className: qQ()("PluginCard", {
          PluginCardEnabled: mQ,
          PluginCardDisabledForm: oQ
        }),
        "data-pad-focusable": !0,
        "aria-disabled": oQ || void 0,
        onClick: () => {
          oQ || LQ(!mQ)
        },
        children: [(0, kQ.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, kQ.jsx)("img", {
            src: `/textures/games/classic/customGames/${FQ}.png`,
            alt: FQ
          })
        }), (0, kQ.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, kQ.jsx)("div", {
            className: "PluginCardTitle",
            children: vQ(HQ[FQ])
          }), (0, kQ.jsx)("div", {
            className: "PluginCardDescription",
            children: vQ(bQ[FQ])
          })]
        }), (0, kQ.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: vQ(mQ ? "general:on" : "general:off")
        })]
      })
    }
    const HQ = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      bQ = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  36007: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => mQ,
      d: () => uQ
    });
    wQ(53);
    var LQ = wQ(1070),
      qQ = wQ.n(LQ),
      oQ = wQ(4475),
      DQ = wQ(307),
      kQ = wQ(1207),
      vQ = wQ(1107);

    function mQ(QQ) {
      let {
        value: FQ,
        onChange: wQ,
        showAll: LQ,
        disabled: mQ = !1
      } = QQ;
      const {
        t: uQ
      } = (0, kQ.y)();
      return (0, vQ.jsxs)("div", {
        className: qQ()("BloxdForm GamemodeForm", {
          BasicOptions: !LQ
        }),
        children: [(0, vQ.jsx)("div", {
          className: "SectionTitle",
          children: uQ("classic:defaultGamemode")
        }), (0, vQ.jsx)("div", {
          className: "SectionBody",
          children: oQ.C.map((QQ => LQ || (0, oQ.u)(QQ) ? (0, vQ.jsx)("button", {
            type: "button",
            className: qQ()("WorldGamemode", {
              Selected: FQ === QQ
            }),
            disabled: mQ,
            onClick: () => {
              wQ(QQ)
            },
            style: {
              "--background-image": `url(${DQ.s[QQ]})`
            },
            children: DQ.q[QQ]
          }, QQ) : null))
        })]
      })
    }

    function uQ(QQ) {
      let {
        mapTypes: FQ,
        value: wQ,
        onChange: LQ,
        showAll: mQ,
        disabled: uQ = !1,
        children: HQ
      } = QQ;
      const {
        t: bQ
      } = (0, kQ.y)();
      return (0, vQ.jsxs)("div", {
        className: qQ()("BloxdForm MapTypeForm", {
          BasicOptions: !mQ
        }),
        children: [(0, vQ.jsx)("div", {
          className: "SectionTitle",
          children: bQ("customLobby:mapType")
        }), (0, vQ.jsx)("div", {
          className: "SectionBody",
          children: FQ.map((QQ => mQ || (0, oQ.w)(QQ) ? (0, vQ.jsx)("button", {
            type: "button",
            className: qQ()("MapType", {
              Selected: wQ === QQ
            }),
            disabled: uQ,
            onClick: () => {
              LQ(QQ)
            },
            style: {
              "--background-image": `url(${DQ.k[QQ]})`
            },
            children: DQ.i[QQ]
          }, QQ) : null))
        }), HQ]
      })
    }
  },
  4783: () => {},
  35995: () => {}
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);