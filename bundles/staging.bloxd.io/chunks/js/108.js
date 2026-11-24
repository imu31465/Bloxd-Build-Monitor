export const id = 108;
export const ids = [108];
export const modules = {
  36435: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => HT
    });
    var WT = mT(1126),
      zT = mT.n(WT),
      MT = mT(63),
      gT = mT(4677),
      nT = mT(1188);

    function HT(TT) {
      let {
        locked: UT,
        children: mT
      } = TT;
      const WT = (0, MT.useRef)(null),
        HT = (0, gT.e)(WT, "y");
      return (0, nT.jsx)("div", {
        ref: WT,
        className: zT()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: HT.before,
          CreateCustomLobbyBodyMoreBelow: HT.after
        }),
        "data-pad-ignore": UT || void 0,
        children: mT
      })
    }
  },
  36506: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      showFirstWorldSetupPopup: () => ZT
    });
    mT(5045), mT(36419);
    var WT = mT(4719),
      zT = mT(63),
      MT = mT(4686),
      gT = mT(1288),
      nT = mT(1457),
      HT = mT(36435),
      kT = mT(5048),
      jT = mT(1569),
      lT = mT(3582),
      LT = mT(36432),
      pT = mT(4712),
      BT = mT(1188);

    function ZT(TT) {
      const UT = {
        requested: !1,
        closed: !1
      };
      nT.NotificationProvider.showCustomPopup({
        body: mT => (0, BT.jsx)(cT, {
          flow: UT,
          close: mT,
          ...TT
        }),
        middleScreenPopupClassName: "CreateCustomLobbyPopup",
        onClose: () => {
          UT.closed = !0, UT.requested || (0, pT.d)()
        }
      })
    }

    function cT(TT) {
      let {
        flow: UT,
        close: mT,
        onCreating: nT,
        onCreated: ZT,
        onFailedClosed: cT,
        join: vT
      } = TT;
      const {
        t: fT
      } = (0, gT.z)(), [qT, iT] = (0, zT.useState)(WT.u), [bT, OT] = (0, zT.useState)(!1), [eT, YT] = (0, zT.useState)(""), JT = (0, lT.c)();
      (0, zT.useEffect)((() => {
        (0, pT.l)()
      }), []);
      const xT = TT => ({
        isEnabled: () => qT.plugins[TT],
        Qy: UT => {
          (0, pT.g)({
            plugin: TT,
            enabled: UT
          }), iT({
            ...qT,
            plugins: {
              ...qT.plugins,
              [TT]: UT
            }
          })
        }
      });
      return (0, BT.jsxs)("div", {
        className: "CreateCustomLobby",
        children: [(0, BT.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, BT.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: fT("homePage:myWorld")
          })
        }), (0, BT.jsx)(HT.b, {
          locked: bT,
          children: (0, BT.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [(0, BT.jsx)(LT.c, {
              value: qT.defaultGamemode,
              onChange: TT => {
                (0, WT.v)(TT) && TT !== qT.defaultGamemode && ((0, pT.g)({
                  defaultGamemode: TT
                }), iT({
                  ...qT,
                  defaultGamemode: TT
                }))
              },
              showAll: !1,
              disabled: bT
            }), (0, BT.jsx)(LT.d, {
              mapTypes: WT.g,
              value: qT.mapType,
              onChange: TT => {
                (0, WT.w)(TT) && TT !== qT.mapType && ((0, pT.g)({
                  mapType: TT
                }), iT({
                  ...qT,
                  mapType: TT
                }))
              },
              showAll: !1,
              disabled: bT
            }), (0, BT.jsx)(kT.c, {
              callbacks: {
                dayNight: xT("dayNight"),
                fallDamage: xT("fallDamage"),
                survivalGuns: xT("survivalGuns")
              },
              disabled: bT,
              advancedMode: !1
            })]
          })
        }), (0, BT.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, BT.jsx)(jT.l, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: bT,
            onClick: () => {
              UT.requested = !0, OT(!0), nT(!0), YT(""), (0, pT.k)(qT), MT.d.createPersonalWorld(qT).then((TT => {
                nT(!1);
                const WT = ZT(TT);
                !UT.closed && JT.current ? (mT(), vT(TT)) : WT || (0, pT.d)()
              }), (TT => {
                if (console.error("Failed to create personal world:", TT), nT(!1), UT.requested = !1, UT.closed || !JT.current) return (0, pT.d)(), void cT(TT);
                YT(TT.message), OT(!1)
              }))
            },
            children: fT("general:play")
          }), eT && (0, BT.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: eT
          })]
        })]
      })
    }
  },
  5048: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => kT
    });
    var WT = mT(1126),
      zT = mT.n(WT),
      MT = mT(4719),
      gT = mT(1288),
      nT = mT(1188);
    const HT = [...MT.k, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function kT(TT) {
      const {
        disabled: UT,
        hideWrapper: mT
      } = TT, {
        t: WT
      } = (0, gT.z)(), kT = TT.advancedMode ? HT.map((UT => [UT, TT.callbacks[UT]])) : MT.k.map((UT => [UT, TT.callbacks[UT]])), lT = (0, nT.jsx)("div", {
        className: zT()("PluginsGrid", {
          SectionBody: !mT
        }),
        children: kT.map((TT => {
          let [mT, WT] = TT;
          return (0, nT.jsx)(jT, {
            plugin: mT,
            callbacks: WT,
            disabled: UT
          }, mT)
        }))
      });
      return mT ? lT : (0, nT.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, nT.jsx)("div", {
          className: "SectionTitle",
          children: WT("worldBuilder:pluginsSection")
        }), lT]
      })
    }

    function jT(TT) {
      let {
        plugin: UT,
        callbacks: {
          isEnabled: mT,
          Qy: WT
        },
        disabled: MT
      } = TT;
      const {
        t: HT
      } = (0, gT.z)(), kT = mT();
      return (0, nT.jsxs)("div", {
        className: zT()("PluginCard", {
          PluginCardEnabled: kT,
          PluginCardDisabledForm: MT
        }),
        "data-pad-focusable": !0,
        "aria-disabled": MT || void 0,
        onClick: () => {
          MT || WT(!kT)
        },
        children: [(0, nT.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, nT.jsx)("img", {
            src: `/textures/games/classic/customGames/${UT}.png`,
            alt: UT
          })
        }), (0, nT.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, nT.jsx)("div", {
            className: "PluginCardTitle",
            children: HT(lT[UT])
          }), (0, nT.jsx)("div", {
            className: "PluginCardDescription",
            children: HT(LT[UT])
          })]
        }), (0, nT.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: HT(kT ? "general:on" : "general:off")
        })]
      })
    }
    const lT = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      LT = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  36432: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => kT,
      d: () => jT
    });
    mT(63);
    var WT = mT(1126),
      zT = mT.n(WT),
      MT = mT(4719),
      gT = mT(351),
      nT = mT(1288),
      HT = mT(1188);

    function kT(TT) {
      let {
        value: UT,
        onChange: mT,
        showAll: WT,
        disabled: kT = !1
      } = TT;
      const {
        t: jT
      } = (0, nT.z)();
      return (0, HT.jsxs)("div", {
        className: zT()("BloxdForm GamemodeForm", {
          BasicOptions: !WT
        }),
        children: [(0, HT.jsx)("div", {
          className: "SectionTitle",
          children: jT("classic:defaultGamemode")
        }), (0, HT.jsx)("div", {
          className: "SectionBody",
          children: MT.C.map((TT => WT || (0, MT.v)(TT) ? (0, HT.jsx)("button", {
            type: "button",
            className: zT()("WorldGamemode", {
              Selected: UT === TT
            }),
            disabled: kT,
            onClick: () => {
              mT(TT)
            },
            style: {
              "--background-image": `url(${gT.p[TT]})`
            },
            children: gT.m[TT]
          }, TT) : null))
        })]
      })
    }

    function jT(TT) {
      let {
        mapTypes: UT,
        value: mT,
        onChange: WT,
        showAll: kT,
        disabled: jT = !1,
        children: lT
      } = TT;
      const {
        t: LT
      } = (0, nT.z)();
      return (0, HT.jsxs)("div", {
        className: zT()("BloxdForm MapTypeForm", {
          BasicOptions: !kT
        }),
        children: [(0, HT.jsx)("div", {
          className: "SectionTitle",
          children: LT("customLobby:mapType")
        }), (0, HT.jsx)("div", {
          className: "SectionBody",
          children: UT.map((TT => kT || (0, MT.w)(TT) ? (0, HT.jsx)("button", {
            type: "button",
            className: zT()("MapType", {
              Selected: mT === TT
            }),
            disabled: jT,
            onClick: () => {
              WT(TT)
            },
            style: {
              "--background-image": `url(${gT.h[TT]})`
            },
            children: gT.g[TT]
          }, TT) : null))
        }), lT]
      })
    }
  },
  5045: () => {},
  36419: () => {}
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);