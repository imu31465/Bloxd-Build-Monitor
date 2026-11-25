export const id = 110;
export const ids = [110];
export const modules = {
  36658: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => FQ
    });
    var wQ = XQ(1081),
      qQ = XQ.n(wQ),
      TQ = XQ(61),
      zQ = XQ(4894),
      sQ = XQ(1145);

    function FQ(QQ) {
      let {
        locked: WQ,
        children: XQ
      } = QQ;
      const wQ = (0, TQ.useRef)(null),
        FQ = (0, zQ.b)(wQ, "y");
      return (0, sQ.jsx)("div", {
        ref: wQ,
        className: qQ()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: FQ.before,
          CreateCustomLobbyBodyMoreBelow: FQ.after
        }),
        "data-pad-ignore": WQ || void 0,
        children: XQ
      })
    }
  },
  36742: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      showFirstWorldSetupPopup: () => BQ
    });
    XQ(5299), XQ(36641);
    var wQ = XQ(4948),
      qQ = XQ(61),
      TQ = XQ(4912),
      zQ = XQ(1226),
      sQ = XQ(1404),
      FQ = XQ(36658),
      PQ = XQ(5304),
      gQ = XQ(1507),
      JQ = XQ(3736),
      rQ = XQ(36653),
      IQ = XQ(4944),
      jQ = XQ(1145);

    function BQ(QQ) {
      const WQ = {
        requested: !1,
        closed: !1
      };
      sQ.NotificationProvider.showCustomPopup({
        body: XQ => (0, jQ.jsx)(yQ, {
          flow: WQ,
          close: XQ,
          ...QQ
        }),
        middleScreenPopupClassName: "CreateCustomLobbyPopup",
        onClose: () => {
          WQ.closed = !0, WQ.requested || (0, IQ.d)()
        }
      })
    }

    function yQ(QQ) {
      let {
        flow: WQ,
        close: XQ,
        onCreating: sQ,
        onCreated: BQ,
        onFailedClosed: yQ,
        join: VQ
      } = QQ;
      const {
        t: DQ
      } = (0, zQ.C)(), [pQ, GQ] = (0, qQ.useState)(wQ.v), [UQ, bQ] = (0, qQ.useState)(!1), [vQ, dQ] = (0, qQ.useState)(""), HQ = (0, JQ.d)();
      (0, qQ.useEffect)((() => {
        (0, IQ.i)()
      }), []);
      const aQ = QQ => ({
        isEnabled: () => pQ.plugins[QQ],
        UH: WQ => {
          (0, IQ.f)({
            plugin: QQ,
            enabled: WQ
          }), GQ({
            ...pQ,
            plugins: {
              ...pQ.plugins,
              [QQ]: WQ
            }
          })
        }
      });
      return (0, jQ.jsxs)("div", {
        className: "CreateCustomLobby",
        children: [(0, jQ.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, jQ.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: DQ("homePage:myWorld")
          })
        }), (0, jQ.jsx)(FQ.c, {
          locked: UQ,
          children: (0, jQ.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [(0, jQ.jsx)(rQ.e, {
              value: pQ.defaultGamemode,
              onChange: QQ => {
                (0, wQ.y)(QQ) && QQ !== pQ.defaultGamemode && ((0, IQ.f)({
                  defaultGamemode: QQ
                }), GQ({
                  ...pQ,
                  defaultGamemode: QQ
                }))
              },
              showAll: !1,
              disabled: UQ
            }), (0, jQ.jsx)(rQ.f, {
              mapTypes: wQ.h,
              value: pQ.mapType,
              onChange: QQ => {
                (0, wQ.z)(QQ) && QQ !== pQ.mapType && ((0, IQ.f)({
                  mapType: QQ
                }), GQ({
                  ...pQ,
                  mapType: QQ
                }))
              },
              showAll: !1,
              disabled: UQ
            }), (0, jQ.jsx)(PQ.c, {
              callbacks: {
                dayNight: aQ("dayNight"),
                fallDamage: aQ("fallDamage"),
                survivalGuns: aQ("survivalGuns")
              },
              disabled: UQ,
              advancedMode: !1
            })]
          })
        }), (0, jQ.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, jQ.jsx)(gQ.s, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: UQ,
            onClick: () => {
              WQ.requested = !0, bQ(!0), sQ(!0), dQ(""), (0, IQ.g)(pQ), TQ.b.createPersonalWorld(pQ).then((QQ => {
                sQ(!1);
                const wQ = BQ(QQ);
                !WQ.closed && HQ.current ? (XQ(), VQ(QQ)) : wQ || (0, IQ.d)()
              }), (QQ => {
                if (console.error("Failed to create personal world:", QQ), sQ(!1), WQ.requested = !1, WQ.closed || !HQ.current) return (0, IQ.d)(), void yQ(QQ);
                dQ(QQ.message), bQ(!1)
              }))
            },
            children: DQ("general:play")
          }), vQ && (0, jQ.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: vQ
          })]
        })]
      })
    }
  },
  5304: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => PQ
    });
    var wQ = XQ(1081),
      qQ = XQ.n(wQ),
      TQ = XQ(4948),
      zQ = XQ(1226),
      sQ = XQ(1145);
    const FQ = [...TQ.j, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function PQ(QQ) {
      const {
        disabled: WQ,
        hideWrapper: XQ
      } = QQ, {
        t: wQ
      } = (0, zQ.C)(), PQ = QQ.advancedMode ? FQ.map((WQ => [WQ, QQ.callbacks[WQ]])) : TQ.j.map((WQ => [WQ, QQ.callbacks[WQ]])), JQ = (0, sQ.jsx)("div", {
        className: qQ()("PluginsGrid", {
          SectionBody: !XQ
        }),
        children: PQ.map((QQ => {
          let [XQ, wQ] = QQ;
          return (0, sQ.jsx)(gQ, {
            plugin: XQ,
            callbacks: wQ,
            disabled: WQ
          }, XQ)
        }))
      });
      return XQ ? JQ : (0, sQ.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, sQ.jsx)("div", {
          className: "SectionTitle",
          children: wQ("worldBuilder:pluginsSection")
        }), JQ]
      })
    }

    function gQ(QQ) {
      let {
        plugin: WQ,
        callbacks: {
          isEnabled: XQ,
          UH: wQ
        },
        disabled: TQ
      } = QQ;
      const {
        t: FQ
      } = (0, zQ.C)(), PQ = XQ();
      return (0, sQ.jsxs)("div", {
        className: qQ()("PluginCard", {
          PluginCardEnabled: PQ,
          PluginCardDisabledForm: TQ
        }),
        "data-pad-focusable": !0,
        "aria-disabled": TQ || void 0,
        onClick: () => {
          TQ || wQ(!PQ)
        },
        children: [(0, sQ.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, sQ.jsx)("img", {
            src: `/textures/games/classic/customGames/${WQ}.png`,
            alt: WQ
          })
        }), (0, sQ.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, sQ.jsx)("div", {
            className: "PluginCardTitle",
            children: FQ(JQ[WQ])
          }), (0, sQ.jsx)("div", {
            className: "PluginCardDescription",
            children: FQ(rQ[WQ])
          })]
        }), (0, sQ.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: FQ(PQ ? "general:on" : "general:off")
        })]
      })
    }
    const JQ = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      rQ = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  36653: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => PQ,
      f: () => gQ
    });
    XQ(61);
    var wQ = XQ(1081),
      qQ = XQ.n(wQ),
      TQ = XQ(4948),
      zQ = XQ(382),
      sQ = XQ(1226),
      FQ = XQ(1145);

    function PQ(QQ) {
      let {
        value: WQ,
        onChange: XQ,
        showAll: wQ,
        disabled: PQ = !1
      } = QQ;
      const {
        t: gQ
      } = (0, sQ.C)();
      return (0, FQ.jsxs)("div", {
        className: qQ()("BloxdForm GamemodeForm", {
          BasicOptions: !wQ
        }),
        children: [(0, FQ.jsx)("div", {
          className: "SectionTitle",
          children: gQ("classic:defaultGamemode")
        }), (0, FQ.jsx)("div", {
          className: "SectionBody",
          children: TQ.E.map((QQ => wQ || (0, TQ.y)(QQ) ? (0, FQ.jsx)("button", {
            type: "button",
            className: qQ()("WorldGamemode", {
              Selected: WQ === QQ
            }),
            disabled: PQ,
            onClick: () => {
              XQ(QQ)
            },
            style: {
              "--background-image": `url(${zQ.y[QQ]})`
            },
            children: zQ.u[QQ]
          }, QQ) : null))
        })]
      })
    }

    function gQ(QQ) {
      let {
        mapTypes: WQ,
        value: XQ,
        onChange: wQ,
        showAll: PQ,
        disabled: gQ = !1,
        children: JQ
      } = QQ;
      const {
        t: rQ
      } = (0, sQ.C)();
      return (0, FQ.jsxs)("div", {
        className: qQ()("BloxdForm MapTypeForm", {
          BasicOptions: !PQ
        }),
        children: [(0, FQ.jsx)("div", {
          className: "SectionTitle",
          children: rQ("customLobby:mapType")
        }), (0, FQ.jsx)("div", {
          className: "SectionBody",
          children: WQ.map((QQ => PQ || (0, TQ.z)(QQ) ? (0, FQ.jsx)("button", {
            type: "button",
            className: qQ()("MapType", {
              Selected: XQ === QQ
            }),
            disabled: gQ,
            onClick: () => {
              wQ(QQ)
            },
            style: {
              "--background-image": `url(${zQ.n[QQ]})`
            },
            children: zQ.k[QQ]
          }, QQ) : null))
        }), JQ]
      })
    }
  },
  5299: () => {},
  36641: () => {}
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);