export const id = 108;
export const ids = [108];
export const modules = {
  36585: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => jt
    });
    var Ot = Vt(1140),
      qt = Vt.n(Ot),
      Dt = Vt(63),
      mt = Vt(4715),
      dt = Vt(1188);

    function jt(tt) {
      let {
        locked: et,
        children: Vt
      } = tt;
      const Ot = (0, Dt.useRef)(null),
        jt = (0, mt.e)(Ot, "y");
      return (0, dt.jsx)("div", {
        ref: Ot,
        className: qt()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: jt.before,
          CreateCustomLobbyBodyMoreBelow: jt.after
        }),
        "data-pad-ignore": et || void 0,
        children: Vt
      })
    }
  },
  36679: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      showFirstWorldSetupPopup: () => wt
    });
    Vt(5108), Vt(36562);
    var Ot = Vt(4771),
      qt = Vt(63),
      Dt = Vt(4725),
      mt = Vt(1286),
      dt = Vt(1450),
      jt = Vt(36585),
      Ht = Vt(5116),
      Xt = Vt(1556),
      Qt = Vt(3555),
      lt = Vt(36578),
      Et = Vt(4762),
      ft = Vt(1188);

    function wt(tt) {
      const et = {
        requested: !1,
        closed: !1
      };
      dt.NotificationProvider.showCustomPopup({
        body: Vt => (0, ft.jsx)(yt, {
          flow: et,
          close: Vt,
          ...tt
        }),
        middleScreenPopupClassName: "CreateCustomLobbyPopup",
        onClose: () => {
          et.closed = !0, et.requested || (0, Et.f)()
        }
      })
    }

    function yt(tt) {
      let {
        flow: et,
        close: Vt,
        onCreating: dt,
        onCreated: wt,
        onFailedClosed: yt,
        join: Nt
      } = tt;
      const {
        t: Mt
      } = (0, mt.H)(), [bt, Jt] = (0, qt.useState)(Ot.v), [Ct, ut] = (0, qt.useState)(!1), [Kt, ht] = (0, qt.useState)(""), vt = (0, Qt.b)();
      (0, qt.useEffect)((() => {
        (0, Et.o)()
      }), []);
      const Wt = tt => ({
        isEnabled: () => bt.plugins[tt],
        Av: et => {
          (0, Et.i)({
            plugin: tt,
            enabled: et
          }), Jt({
            ...bt,
            plugins: {
              ...bt.plugins,
              [tt]: et
            }
          })
        }
      });
      return (0, ft.jsxs)("div", {
        className: "CreateCustomLobby",
        children: [(0, ft.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, ft.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: Mt("homePage:myWorld")
          })
        }), (0, ft.jsx)(jt.e, {
          locked: Ct,
          children: (0, ft.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [(0, ft.jsx)(lt.e, {
              value: bt.defaultGamemode,
              onChange: tt => {
                (0, Ot.z)(tt) && tt !== bt.defaultGamemode && ((0, Et.i)({
                  defaultGamemode: tt
                }), Jt({
                  ...bt,
                  defaultGamemode: tt
                }))
              },
              showAll: !1,
              disabled: Ct
            }), (0, ft.jsx)(lt.h, {
              mapTypes: Ot.h,
              value: bt.mapType,
              onChange: tt => {
                (0, Ot.D)(tt) && tt !== bt.mapType && ((0, Et.i)({
                  mapType: tt
                }), Jt({
                  ...bt,
                  mapType: tt
                }))
              },
              showAll: !1,
              disabled: Ct
            }), (0, ft.jsx)(Ht.c, {
              callbacks: {
                dayNight: Wt("dayNight"),
                fallDamage: Wt("fallDamage"),
                survivalGuns: Wt("survivalGuns")
              },
              disabled: Ct,
              advancedMode: !1
            })]
          })
        }), (0, ft.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, ft.jsx)(Xt.m, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: Ct,
            onClick: () => {
              et.requested = !0, ut(!0), dt(!0), ht(""), (0, Et.m)(bt), Dt.e.createPersonalWorld(bt).then((tt => {
                dt(!1);
                const Ot = wt(tt);
                !et.closed && vt.current ? (Vt(), Nt(tt)) : Ot || (0, Et.f)()
              }), (tt => {
                if (console.error("Failed to create personal world:", tt), dt(!1), et.requested = !1, et.closed || !vt.current) return (0, Et.f)(), void yt(tt);
                ht(tt.message), ut(!1)
              }))
            },
            children: Mt("general:play")
          }), Kt && (0, ft.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: Kt
          })]
        })]
      })
    }
  },
  5116: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Ht
    });
    var Ot = Vt(1140),
      qt = Vt.n(Ot),
      Dt = Vt(4771),
      mt = Vt(1286),
      dt = Vt(1188);
    const jt = [...Dt.k, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function Ht(tt) {
      const {
        disabled: et,
        hideWrapper: Vt
      } = tt, {
        t: Ot
      } = (0, mt.H)(), Ht = tt.advancedMode ? jt.map((et => [et, tt.callbacks[et]])) : Dt.k.map((et => [et, tt.callbacks[et]])), Qt = (0, dt.jsx)("div", {
        className: qt()("PluginsGrid", {
          SectionBody: !Vt
        }),
        children: Ht.map((tt => {
          let [Vt, Ot] = tt;
          return (0, dt.jsx)(Xt, {
            plugin: Vt,
            callbacks: Ot,
            disabled: et
          }, Vt)
        }))
      });
      return Vt ? Qt : (0, dt.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, dt.jsx)("div", {
          className: "SectionTitle",
          children: Ot("worldBuilder:pluginsSection")
        }), Qt]
      })
    }

    function Xt(tt) {
      let {
        plugin: et,
        callbacks: {
          isEnabled: Vt,
          Av: Ot
        },
        disabled: Dt
      } = tt;
      const {
        t: jt
      } = (0, mt.H)(), Ht = Vt();
      return (0, dt.jsxs)("div", {
        className: qt()("PluginCard", {
          PluginCardEnabled: Ht,
          PluginCardDisabledForm: Dt
        }),
        "data-pad-focusable": !0,
        "aria-disabled": Dt || void 0,
        onClick: () => {
          Dt || Ot(!Ht)
        },
        children: [(0, dt.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, dt.jsx)("img", {
            src: `/textures/games/classic/customGames/${et}.png`,
            alt: et
          })
        }), (0, dt.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, dt.jsx)("div", {
            className: "PluginCardTitle",
            children: jt(Qt[et])
          }), (0, dt.jsx)("div", {
            className: "PluginCardDescription",
            children: jt(lt[et])
          })]
        }), (0, dt.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: jt(Ht ? "general:on" : "general:off")
        })]
      })
    }
    const Qt = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      lt = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  36578: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Ht,
      h: () => Xt
    });
    Vt(63);
    var Ot = Vt(1140),
      qt = Vt.n(Ot),
      Dt = Vt(4771),
      mt = Vt(377),
      dt = Vt(1286),
      jt = Vt(1188);

    function Ht(tt) {
      let {
        value: et,
        onChange: Vt,
        showAll: Ot,
        disabled: Ht = !1
      } = tt;
      const {
        t: Xt
      } = (0, dt.H)();
      return (0, jt.jsxs)("div", {
        className: qt()("BloxdForm GamemodeForm", {
          BasicOptions: !Ot
        }),
        children: [(0, jt.jsx)("div", {
          className: "SectionTitle",
          children: Xt("classic:defaultGamemode")
        }), (0, jt.jsx)("div", {
          className: "SectionBody",
          children: Dt.I.map((tt => Ot || (0, Dt.z)(tt) ? (0, jt.jsx)("button", {
            type: "button",
            className: qt()("WorldGamemode", {
              Selected: et === tt
            }),
            disabled: Ht,
            onClick: () => {
              Vt(tt)
            },
            style: {
              "--background-image": `url(${mt.s[tt]})`
            },
            children: mt.p[tt]
          }, tt) : null))
        })]
      })
    }

    function Xt(tt) {
      let {
        mapTypes: et,
        value: Vt,
        onChange: Ot,
        showAll: Ht,
        disabled: Xt = !1,
        children: Qt
      } = tt;
      const {
        t: lt
      } = (0, dt.H)();
      return (0, jt.jsxs)("div", {
        className: qt()("BloxdForm MapTypeForm", {
          BasicOptions: !Ht
        }),
        children: [(0, jt.jsx)("div", {
          className: "SectionTitle",
          children: lt("customLobby:mapType")
        }), (0, jt.jsx)("div", {
          className: "SectionBody",
          children: et.map((tt => Ht || (0, Dt.D)(tt) ? (0, jt.jsx)("button", {
            type: "button",
            className: qt()("MapType", {
              Selected: Vt === tt
            }),
            disabled: Xt,
            onClick: () => {
              Ot(tt)
            },
            style: {
              "--background-image": `url(${mt.l[tt]})`
            },
            children: mt.h[tt]
          }, tt) : null))
        }), Qt]
      })
    }
  },
  5108: () => {},
  36562: () => {}
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);