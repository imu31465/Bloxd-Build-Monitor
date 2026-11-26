export const id = 119;
export const ids = [119];
export const modules = {
  37228: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => zH
    });
    var AH = LH(1038),
      rH = LH.n(AH),
      SH = LH(45),
      hH = LH(4978),
      tH = LH(1225);

    function zH(HH) {
      let {
        locked: BH,
        children: LH
      } = HH;
      const AH = (0, SH.useRef)(null),
        zH = (0, hH.d)(AH, "y");
      return (0, tH.jsx)("div", {
        ref: AH,
        className: rH()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: zH.before,
          CreateCustomLobbyBodyMoreBelow: zH.after
        }),
        "data-pad-ignore": BH || void 0,
        children: LH
      })
    }
  },
  37321: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      showFirstWorldSetupPopup: () => QH
    });
    LH(5410), LH(37210);
    var AH = LH(5037),
      rH = LH(45),
      SH = LH(4991),
      hH = LH(1123),
      tH = LH(1352),
      zH = LH(37228),
      CH = LH(5418),
      EH = LH(1455),
      XH = LH(3879),
      GH = LH(37219),
      YH = LH(5028),
      uH = LH(1225);

    function QH(HH) {
      const BH = {
        requested: !1,
        closed: !1
      };
      tH.NotificationProvider.showCustomPopup({
        body: LH => (0, uH.jsx)(WH, {
          flow: BH,
          close: LH,
          ...HH
        }),
        middleScreenPopupClassName: "CreateCustomLobbyPopup",
        onClose: () => {
          BH.closed = !0, BH.requested || (0, YH.g)()
        }
      })
    }

    function WH(HH) {
      let {
        flow: BH,
        close: LH,
        onCreating: tH,
        onCreated: QH,
        onFailedClosed: WH,
        join: MH
      } = HH;
      const {
        t: xH
      } = (0, hH.B)(), [vH, PH] = (0, rH.useState)(AH.u), [TH, UH] = (0, rH.useState)(!1), [VH, OH] = (0, rH.useState)(""), bH = (0, XH.c)();
      (0, rH.useEffect)((() => {
        (0, YH.n)()
      }), []);
      const kH = HH => ({
        isEnabled: () => vH.plugins[HH],
        vI: BH => {
          (0, YH.h)({
            plugin: HH,
            enabled: BH
          }), PH({
            ...vH,
            plugins: {
              ...vH.plugins,
              [HH]: BH
            }
          })
        }
      });
      return (0, uH.jsxs)("div", {
        className: "CreateCustomLobby",
        children: [(0, uH.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, uH.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: xH("homePage:myWorld")
          })
        }), (0, uH.jsx)(zH.c, {
          locked: TH,
          children: (0, uH.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [(0, uH.jsx)(GH.c, {
              value: vH.defaultGamemode,
              onChange: HH => {
                (0, AH.y)(HH) && HH !== vH.defaultGamemode && ((0, YH.h)({
                  defaultGamemode: HH
                }), PH({
                  ...vH,
                  defaultGamemode: HH
                }))
              },
              showAll: !1,
              disabled: TH
            }), (0, uH.jsx)(GH.d, {
              mapTypes: AH.j,
              value: vH.mapType,
              onChange: HH => {
                (0, AH.A)(HH) && HH !== vH.mapType && ((0, YH.h)({
                  mapType: HH
                }), PH({
                  ...vH,
                  mapType: HH
                }))
              },
              showAll: !1,
              disabled: TH
            }), (0, uH.jsx)(CH.d, {
              callbacks: {
                dayNight: kH("dayNight"),
                fallDamage: kH("fallDamage"),
                survivalGuns: kH("survivalGuns")
              },
              disabled: TH,
              advancedMode: !1
            })]
          })
        }), (0, uH.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, uH.jsx)(EH.u, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: TH,
            onClick: () => {
              BH.requested = !0, UH(!0), tH(!0), OH(""), (0, YH.k)(vH), SH.e.createPersonalWorld(vH).then((HH => {
                tH(!1);
                const AH = QH(HH);
                !BH.closed && bH.current ? (LH(), MH(HH)) : AH || (0, YH.g)()
              }), (HH => {
                if (console.error("Failed to create personal world:", HH), tH(!1), BH.requested = !1, BH.closed || !bH.current) return (0, YH.g)(), void WH(HH);
                OH(HH.message), UH(!1)
              }))
            },
            children: xH("general:play")
          }), VH && (0, uH.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: VH
          })]
        })]
      })
    }
  },
  5418: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => CH
    });
    var AH = LH(1038),
      rH = LH.n(AH),
      SH = LH(5037),
      hH = LH(1123),
      tH = LH(1225);
    const zH = [...SH.n, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function CH(HH) {
      const {
        disabled: BH,
        hideWrapper: LH
      } = HH, {
        t: AH
      } = (0, hH.B)(), CH = HH.advancedMode ? zH.map((BH => [BH, HH.callbacks[BH]])) : SH.n.map((BH => [BH, HH.callbacks[BH]])), XH = (0, tH.jsx)("div", {
        className: rH()("PluginsGrid", {
          SectionBody: !LH
        }),
        children: CH.map((HH => {
          let [LH, AH] = HH;
          return (0, tH.jsx)(EH, {
            plugin: LH,
            callbacks: AH,
            disabled: BH
          }, LH)
        }))
      });
      return LH ? XH : (0, tH.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, tH.jsx)("div", {
          className: "SectionTitle",
          children: AH("worldBuilder:pluginsSection")
        }), XH]
      })
    }

    function EH(HH) {
      let {
        plugin: BH,
        callbacks: {
          isEnabled: LH,
          vI: AH
        },
        disabled: SH
      } = HH;
      const {
        t: zH
      } = (0, hH.B)(), CH = LH();
      return (0, tH.jsxs)("div", {
        className: rH()("PluginCard", {
          PluginCardEnabled: CH,
          PluginCardDisabledForm: SH
        }),
        "data-pad-focusable": !0,
        "aria-disabled": SH || void 0,
        onClick: () => {
          SH || AH(!CH)
        },
        children: [(0, tH.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, tH.jsx)("img", {
            src: `/textures/games/classic/customGames/${BH}.png`,
            alt: BH
          })
        }), (0, tH.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, tH.jsx)("div", {
            className: "PluginCardTitle",
            children: zH(XH[BH])
          }), (0, tH.jsx)("div", {
            className: "PluginCardDescription",
            children: zH(GH[BH])
          })]
        }), (0, tH.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: zH(CH ? "general:on" : "general:off")
        })]
      })
    }
    const XH = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      GH = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  37219: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => CH,
      d: () => EH
    });
    LH(45);
    var AH = LH(1038),
      rH = LH.n(AH),
      SH = LH(5037),
      hH = LH(304),
      tH = LH(1123),
      zH = LH(1225);

    function CH(HH) {
      let {
        value: BH,
        onChange: LH,
        showAll: AH,
        disabled: CH = !1
      } = HH;
      const {
        t: EH
      } = (0, tH.B)();
      return (0, zH.jsxs)("div", {
        className: rH()("BloxdForm GamemodeForm", {
          BasicOptions: !AH
        }),
        children: [(0, zH.jsx)("div", {
          className: "SectionTitle",
          children: EH("classic:defaultGamemode")
        }), (0, zH.jsx)("div", {
          className: "SectionBody",
          children: SH.H.map((HH => AH || (0, SH.y)(HH) ? (0, zH.jsx)("button", {
            type: "button",
            className: rH()("WorldGamemode", {
              Selected: BH === HH
            }),
            disabled: CH,
            onClick: () => {
              LH(HH)
            },
            style: {
              "--background-image": `url(${hH.w[HH]})`
            },
            children: hH.s[HH]
          }, HH) : null))
        })]
      })
    }

    function EH(HH) {
      let {
        mapTypes: BH,
        value: LH,
        onChange: AH,
        showAll: CH,
        disabled: EH = !1,
        children: XH
      } = HH;
      const {
        t: GH
      } = (0, tH.B)();
      return (0, zH.jsxs)("div", {
        className: rH()("BloxdForm MapTypeForm", {
          BasicOptions: !CH
        }),
        children: [(0, zH.jsx)("div", {
          className: "SectionTitle",
          children: GH("customLobby:mapType")
        }), (0, zH.jsx)("div", {
          className: "SectionBody",
          children: BH.map((HH => CH || (0, SH.A)(HH) ? (0, zH.jsx)("button", {
            type: "button",
            className: rH()("MapType", {
              Selected: LH === HH
            }),
            disabled: EH,
            onClick: () => {
              AH(HH)
            },
            style: {
              "--background-image": `url(${hH.n[HH]})`
            },
            children: hH.j[HH]
          }, HH) : null))
        }), XH]
      })
    }
  },
  5410: () => {},
  37210: () => {}
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);