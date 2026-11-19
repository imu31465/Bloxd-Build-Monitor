export const id = 105;
export const ids = [105];
export const modules = {
  35374: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => BT
    });
    var iT = IT(1042),
      zT = IT.n(iT),
      kT = IT(46),
      WT = IT(4091),
      XT = IT(1083);

    function BT(TT) {
      let {
        locked: oT,
        children: IT
      } = TT;
      const iT = (0, kT.useRef)(null),
        BT = (0, WT.b)(iT, "y");
      return (0, XT.jsx)("div", {
        ref: iT,
        className: zT()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: BT.before,
          CreateCustomLobbyBodyMoreBelow: BT.after
        }),
        "data-pad-ignore": oT || void 0,
        children: IT
      })
    }
  },
  35435: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      showFirstWorldSetupPopup: () => KT
    });
    IT(4418), IT(35362);
    var iT = IT(4137),
      zT = IT(46),
      kT = IT(4098),
      WT = IT(1171),
      XT = IT(1325),
      BT = IT(35374),
      FT = IT(4422),
      ST = IT(1408),
      DT = IT(3049),
      LT = IT(35370),
      xT = IT(4127),
      cT = IT(1083);

    function KT(TT) {
      const oT = {
        requested: !1,
        closed: !1
      };
      XT.NotificationProvider.showCustomPopup({
        body: IT => (0, cT.jsx)(MT, {
          flow: oT,
          close: IT,
          ...TT
        }),
        middleScreenPopupClassName: "CreateCustomLobbyPopup",
        onClose: () => {
          oT.closed = !0, oT.requested || (0, xT.e)()
        }
      })
    }

    function MT(TT) {
      let {
        flow: oT,
        close: IT,
        onCreating: XT,
        onCreated: KT,
        onFailedClosed: MT,
        join: rT
      } = TT;
      const {
        t: AT
      } = (0, WT.t)(), [gT, hT] = (0, zT.useState)(iT.p), [wT, mT] = (0, zT.useState)(!1), [eT, RT] = (0, zT.useState)(""), uT = (0, DT.c)();
      (0, zT.useEffect)((() => {
        (0, xT.n)()
      }), []);
      const vT = TT => ({
        isEnabled: () => gT.plugins[TT],
        Fv: oT => {
          (0, xT.g)({
            plugin: TT,
            enabled: oT
          }), hT({
            ...gT,
            plugins: {
              ...gT.plugins,
              [TT]: oT
            }
          })
        }
      });
      return (0, cT.jsxs)("div", {
        className: "CreateCustomLobby",
        children: [(0, cT.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, cT.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: AT("homePage:myWorld")
          })
        }), (0, cT.jsx)(BT.b, {
          locked: wT,
          children: (0, cT.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [(0, cT.jsx)(LT.c, {
              value: gT.defaultGamemode,
              onChange: TT => {
                (0, iT.t)(TT) && TT !== gT.defaultGamemode && ((0, xT.g)({
                  defaultGamemode: TT
                }), hT({
                  ...gT,
                  defaultGamemode: TT
                }))
              },
              showAll: !1,
              disabled: wT
            }), (0, cT.jsx)(LT.f, {
              mapTypes: iT.h,
              value: gT.mapType,
              onChange: TT => {
                (0, iT.v)(TT) && TT !== gT.mapType && ((0, xT.g)({
                  mapType: TT
                }), hT({
                  ...gT,
                  mapType: TT
                }))
              },
              showAll: !1,
              disabled: wT
            }), (0, cT.jsx)(FT.e, {
              callbacks: {
                dayNight: vT("dayNight"),
                fallDamage: vT("fallDamage"),
                survivalGuns: vT("survivalGuns")
              },
              disabled: wT,
              advancedMode: !1
            })]
          })
        }), (0, cT.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, cT.jsx)(ST.m, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: wT,
            onClick: () => {
              oT.requested = !0, mT(!0), XT(!0), RT(""), (0, xT.j)(gT), kT.e.createPersonalWorld(gT).then((TT => {
                XT(!1);
                const iT = KT(TT);
                !oT.closed && uT.current ? (IT(), rT(TT)) : iT || (0, xT.e)()
              }), (TT => {
                if (console.error("Failed to create personal world:", TT), XT(!1), oT.requested = !1, oT.closed || !uT.current) return (0, xT.e)(), void MT(TT);
                RT(TT.message), mT(!1)
              }))
            },
            children: AT("general:play")
          }), eT && (0, cT.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: eT
          })]
        })]
      })
    }
  },
  4422: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => FT
    });
    var iT = IT(1042),
      zT = IT.n(iT),
      kT = IT(4137),
      WT = IT(1171),
      XT = IT(1083);
    const BT = [...kT.i, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function FT(TT) {
      const {
        disabled: oT,
        hideWrapper: IT
      } = TT, {
        t: iT
      } = (0, WT.t)(), FT = TT.advancedMode ? BT.map((oT => [oT, TT.callbacks[oT]])) : kT.i.map((oT => [oT, TT.callbacks[oT]])), DT = (0, XT.jsx)("div", {
        className: zT()("PluginsGrid", {
          SectionBody: !IT
        }),
        children: FT.map((TT => {
          let [IT, iT] = TT;
          return (0, XT.jsx)(ST, {
            plugin: IT,
            callbacks: iT,
            disabled: oT
          }, IT)
        }))
      });
      return IT ? DT : (0, XT.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, XT.jsx)("div", {
          className: "SectionTitle",
          children: iT("worldBuilder:pluginsSection")
        }), DT]
      })
    }

    function ST(TT) {
      let {
        plugin: oT,
        callbacks: {
          isEnabled: IT,
          Fv: iT
        },
        disabled: kT
      } = TT;
      const {
        t: BT
      } = (0, WT.t)(), FT = IT();
      return (0, XT.jsxs)("div", {
        className: zT()("PluginCard", {
          PluginCardEnabled: FT,
          PluginCardDisabledForm: kT
        }),
        "data-pad-focusable": !0,
        "aria-disabled": kT || void 0,
        onClick: () => {
          kT || iT(!FT)
        },
        children: [(0, XT.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, XT.jsx)("img", {
            src: `/textures/games/classic/customGames/${oT}.png`,
            alt: oT
          })
        }), (0, XT.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, XT.jsx)("div", {
            className: "PluginCardTitle",
            children: BT(DT[oT])
          }), (0, XT.jsx)("div", {
            className: "PluginCardDescription",
            children: BT(LT[oT])
          })]
        }), (0, XT.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: BT(FT ? "general:on" : "general:off")
        })]
      })
    }
    const DT = {
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
  35370: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => FT,
      f: () => ST
    });
    IT(46);
    var iT = IT(1042),
      zT = IT.n(iT),
      kT = IT(4137),
      WT = IT(306),
      XT = IT(1171),
      BT = IT(1083);

    function FT(TT) {
      let {
        value: oT,
        onChange: IT,
        showAll: iT,
        disabled: FT = !1
      } = TT;
      const {
        t: ST
      } = (0, XT.t)();
      return (0, BT.jsxs)("div", {
        className: zT()("BloxdForm GamemodeForm", {
          BasicOptions: !iT
        }),
        children: [(0, BT.jsx)("div", {
          className: "SectionTitle",
          children: ST("classic:defaultGamemode")
        }), (0, BT.jsx)("div", {
          className: "SectionBody",
          children: kT.z.map((TT => iT || (0, kT.t)(TT) ? (0, BT.jsx)("button", {
            type: "button",
            className: zT()("WorldGamemode", {
              Selected: oT === TT
            }),
            disabled: FT,
            onClick: () => {
              IT(TT)
            },
            style: {
              "--background-image": `url(${WT.x[TT]})`
            },
            children: WT.t[TT]
          }, TT) : null))
        })]
      })
    }

    function ST(TT) {
      let {
        mapTypes: oT,
        value: IT,
        onChange: iT,
        showAll: FT,
        disabled: ST = !1,
        children: DT
      } = TT;
      const {
        t: LT
      } = (0, XT.t)();
      return (0, BT.jsxs)("div", {
        className: zT()("BloxdForm MapTypeForm", {
          BasicOptions: !FT
        }),
        children: [(0, BT.jsx)("div", {
          className: "SectionTitle",
          children: LT("customLobby:mapType")
        }), (0, BT.jsx)("div", {
          className: "SectionBody",
          children: oT.map((TT => FT || (0, kT.v)(TT) ? (0, BT.jsx)("button", {
            type: "button",
            className: zT()("MapType", {
              Selected: IT === TT
            }),
            disabled: ST,
            onClick: () => {
              iT(TT)
            },
            style: {
              "--background-image": `url(${WT.p[TT]})`
            },
            children: WT.l[TT]
          }, TT) : null))
        }), DT]
      })
    }
  },
  4418: () => {},
  35362: () => {}
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);