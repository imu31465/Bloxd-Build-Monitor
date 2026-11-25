export const id = 108;
export const ids = [108];
export const modules = {
  36686: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => UG
    });
    var wG = ZG(1006),
      SG = ZG.n(wG),
      LG = ZG(51),
      yG = ZG(4596),
      kG = ZG(1067);

    function UG(GG) {
      let {
        locked: bG,
        children: ZG
      } = GG;
      const wG = (0, LG.useRef)(null),
        UG = (0, yG.e)(wG, "y");
      return (0, kG.jsx)("div", {
        ref: wG,
        className: SG()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: UG.before,
          CreateCustomLobbyBodyMoreBelow: UG.after
        }),
        "data-pad-ignore": bG || void 0,
        children: ZG
      })
    }
  },
  36769: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      showFirstWorldSetupPopup: () => hG
    });
    ZG(4967), ZG(36670);
    var wG = ZG(4655),
      SG = ZG(51),
      LG = ZG(4611),
      yG = ZG(1151),
      kG = ZG(1311),
      UG = ZG(36686),
      YG = ZG(4973),
      VG = ZG(1393),
      pG = ZG(3465),
      fG = ZG(36680),
      QG = ZG(4651),
      KG = ZG(1067);

    function hG(GG) {
      const bG = {
        requested: !1,
        closed: !1
      };
      kG.NotificationProvider.showCustomPopup({
        body: ZG => (0, KG.jsx)(dG, {
          flow: bG,
          close: ZG,
          ...GG
        }),
        middleScreenPopupClassName: "CreateCustomLobbyPopup",
        onClose: () => {
          bG.closed = !0, bG.requested || (0, QG.i)()
        }
      })
    }

    function dG(GG) {
      let {
        flow: bG,
        close: ZG,
        onCreating: kG,
        onCreated: hG,
        onFailedClosed: dG,
        join: JG
      } = GG;
      const {
        t: rG
      } = (0, yG.w)(), [zG, EG] = (0, SG.useState)(wG.t), [oG, XG] = (0, SG.useState)(!1), [uG, iG] = (0, SG.useState)(""), CG = (0, pG.c)();
      (0, SG.useEffect)((() => {
        (0, QG.o)()
      }), []);
      const WG = GG => ({
        isEnabled: () => zG.plugins[GG],
        DW: bG => {
          (0, QG.l)({
            plugin: GG,
            enabled: bG
          }), EG({
            ...zG,
            plugins: {
              ...zG.plugins,
              [GG]: bG
            }
          })
        }
      });
      return (0, KG.jsxs)("div", {
        className: "CreateCustomLobby",
        children: [(0, KG.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, KG.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: rG("homePage:myWorld")
          })
        }), (0, KG.jsx)(UG.d, {
          locked: oG,
          children: (0, KG.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [(0, KG.jsx)(fG.d, {
              value: zG.defaultGamemode,
              onChange: GG => {
                (0, wG.w)(GG) && GG !== zG.defaultGamemode && ((0, QG.l)({
                  defaultGamemode: GG
                }), EG({
                  ...zG,
                  defaultGamemode: GG
                }))
              },
              showAll: !1,
              disabled: oG
            }), (0, KG.jsx)(fG.f, {
              mapTypes: wG.h,
              value: zG.mapType,
              onChange: GG => {
                (0, wG.A)(GG) && GG !== zG.mapType && ((0, QG.l)({
                  mapType: GG
                }), EG({
                  ...zG,
                  mapType: GG
                }))
              },
              showAll: !1,
              disabled: oG
            }), (0, KG.jsx)(YG.d, {
              callbacks: {
                dayNight: WG("dayNight"),
                fallDamage: WG("fallDamage"),
                survivalGuns: WG("survivalGuns")
              },
              disabled: oG,
              advancedMode: !1
            })]
          })
        }), (0, KG.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, KG.jsx)(VG.k, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: oG,
            onClick: () => {
              bG.requested = !0, XG(!0), kG(!0), iG(""), (0, QG.m)(zG), LG.d.createPersonalWorld(zG).then((GG => {
                kG(!1);
                const wG = hG(GG);
                !bG.closed && CG.current ? (ZG(), JG(GG)) : wG || (0, QG.i)()
              }), (GG => {
                if (console.error("Failed to create personal world:", GG), kG(!1), bG.requested = !1, bG.closed || !CG.current) return (0, QG.i)(), void dG(GG);
                iG(GG.message), XG(!1)
              }))
            },
            children: rG("general:play")
          }), uG && (0, KG.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: uG
          })]
        })]
      })
    }
  },
  4973: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => YG
    });
    var wG = ZG(1006),
      SG = ZG.n(wG),
      LG = ZG(4655),
      yG = ZG(1151),
      kG = ZG(1067);
    const UG = [...LG.i, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function YG(GG) {
      const {
        disabled: bG,
        hideWrapper: ZG
      } = GG, {
        t: wG
      } = (0, yG.w)(), YG = GG.advancedMode ? UG.map((bG => [bG, GG.callbacks[bG]])) : LG.i.map((bG => [bG, GG.callbacks[bG]])), pG = (0, kG.jsx)("div", {
        className: SG()("PluginsGrid", {
          SectionBody: !ZG
        }),
        children: YG.map((GG => {
          let [ZG, wG] = GG;
          return (0, kG.jsx)(VG, {
            plugin: ZG,
            callbacks: wG,
            disabled: bG
          }, ZG)
        }))
      });
      return ZG ? pG : (0, kG.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, kG.jsx)("div", {
          className: "SectionTitle",
          children: wG("worldBuilder:pluginsSection")
        }), pG]
      })
    }

    function VG(GG) {
      let {
        plugin: bG,
        callbacks: {
          isEnabled: ZG,
          DW: wG
        },
        disabled: LG
      } = GG;
      const {
        t: UG
      } = (0, yG.w)(), YG = ZG();
      return (0, kG.jsxs)("div", {
        className: SG()("PluginCard", {
          PluginCardEnabled: YG,
          PluginCardDisabledForm: LG
        }),
        "data-pad-focusable": !0,
        "aria-disabled": LG || void 0,
        onClick: () => {
          LG || wG(!YG)
        },
        children: [(0, kG.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, kG.jsx)("img", {
            src: `/textures/games/classic/customGames/${bG}.png`,
            alt: bG
          })
        }), (0, kG.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, kG.jsx)("div", {
            className: "PluginCardTitle",
            children: UG(pG[bG])
          }), (0, kG.jsx)("div", {
            className: "PluginCardDescription",
            children: UG(fG[bG])
          })]
        }), (0, kG.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: UG(YG ? "general:on" : "general:off")
        })]
      })
    }
    const pG = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      fG = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  36680: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => YG,
      f: () => VG
    });
    ZG(51);
    var wG = ZG(1006),
      SG = ZG.n(wG),
      LG = ZG(4655),
      yG = ZG(333),
      kG = ZG(1151),
      UG = ZG(1067);

    function YG(GG) {
      let {
        value: bG,
        onChange: ZG,
        showAll: wG,
        disabled: YG = !1
      } = GG;
      const {
        t: VG
      } = (0, kG.w)();
      return (0, UG.jsxs)("div", {
        className: SG()("BloxdForm GamemodeForm", {
          BasicOptions: !wG
        }),
        children: [(0, UG.jsx)("div", {
          className: "SectionTitle",
          children: VG("classic:defaultGamemode")
        }), (0, UG.jsx)("div", {
          className: "SectionBody",
          children: LG.F.map((GG => wG || (0, LG.w)(GG) ? (0, UG.jsx)("button", {
            type: "button",
            className: SG()("WorldGamemode", {
              Selected: bG === GG
            }),
            disabled: YG,
            onClick: () => {
              ZG(GG)
            },
            style: {
              "--background-image": `url(${yG.C[GG]})`
            },
            children: yG.y[GG]
          }, GG) : null))
        })]
      })
    }

    function VG(GG) {
      let {
        mapTypes: bG,
        value: ZG,
        onChange: wG,
        showAll: YG,
        disabled: VG = !1,
        children: pG
      } = GG;
      const {
        t: fG
      } = (0, kG.w)();
      return (0, UG.jsxs)("div", {
        className: SG()("BloxdForm MapTypeForm", {
          BasicOptions: !YG
        }),
        children: [(0, UG.jsx)("div", {
          className: "SectionTitle",
          children: fG("customLobby:mapType")
        }), (0, UG.jsx)("div", {
          className: "SectionBody",
          children: bG.map((GG => YG || (0, LG.A)(GG) ? (0, UG.jsx)("button", {
            type: "button",
            className: SG()("MapType", {
              Selected: ZG === GG
            }),
            disabled: VG,
            onClick: () => {
              wG(GG)
            },
            style: {
              "--background-image": `url(${yG.r[GG]})`
            },
            children: yG.n[GG]
          }, GG) : null))
        }), pG]
      })
    }
  },
  4967: () => {},
  36670: () => {}
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);