export const id = 105;
export const ids = [105];
export const modules = {
  35913: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => dv
    });
    var hv = Pv(1035),
      Sv = Pv.n(hv),
      ev = Pv(52),
      gv = Pv(4337),
      pv = Pv(1082);

    function dv(vv) {
      let {
        locked: zv,
        children: Pv
      } = vv;
      const hv = (0, ev.useRef)(null),
        dv = (0, gv.e)(hv, "y");
      return (0, pv.jsx)("div", {
        ref: hv,
        className: Sv()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: dv.before,
          CreateCustomLobbyBodyMoreBelow: dv.after
        }),
        "data-pad-ignore": zv || void 0,
        children: Pv
      })
    }
  },
  35978: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      showFirstWorldSetupPopup: () => sv
    });
    Pv(4685), Pv(35902);
    var hv = Pv(4386),
      Sv = Pv(52),
      ev = Pv(4342),
      gv = Pv(1175),
      pv = Pv(1336),
      dv = Pv(35913),
      Nv = Pv(4694),
      lv = Pv(1442),
      Tv = Pv(3247),
      Wv = Pv(35908),
      wv = Pv(4379),
      av = Pv(1082);

    function sv(vv) {
      const zv = {
        requested: !1,
        closed: !1
      };
      pv.NotificationProvider.showCustomPopup({
        body: Pv => (0, av.jsx)(Cv, {
          flow: zv,
          close: Pv,
          ...vv
        }),
        middleScreenPopupClassName: "CreateCustomLobbyPopup",
        onClose: () => {
          zv.closed = !0, zv.requested || (0, wv.e)()
        }
      })
    }

    function Cv(vv) {
      let {
        flow: zv,
        close: Pv,
        onCreating: pv,
        onCreated: sv,
        onFailedClosed: Cv,
        join: iv
      } = vv;
      const {
        t: cv
      } = (0, gv.x)(), [Gv, mv] = (0, Sv.useState)(hv.q), [jv, fv] = (0, Sv.useState)(!1), [Fv, Yv] = (0, Sv.useState)(""), nv = (0, Tv.b)();
      (0, Sv.useEffect)((() => {
        (0, wv.k)()
      }), []);
      const Ov = vv => ({
        isEnabled: () => Gv.plugins[vv],
        uF: zv => {
          (0, wv.f)({
            plugin: vv,
            enabled: zv
          }), mv({
            ...Gv,
            plugins: {
              ...Gv.plugins,
              [vv]: zv
            }
          })
        }
      });
      return (0, av.jsxs)("div", {
        className: "CreateCustomLobby",
        children: [(0, av.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, av.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: cv("homePage:myWorld")
          })
        }), (0, av.jsx)(dv.c, {
          locked: jv,
          children: (0, av.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [(0, av.jsx)(Wv.e, {
              value: Gv.defaultGamemode,
              onChange: vv => {
                (0, hv.u)(vv) && vv !== Gv.defaultGamemode && ((0, wv.f)({
                  defaultGamemode: vv
                }), mv({
                  ...Gv,
                  defaultGamemode: vv
                }))
              },
              showAll: !1,
              disabled: jv
            }), (0, av.jsx)(Wv.i, {
              mapTypes: hv.g,
              value: Gv.mapType,
              onChange: vv => {
                (0, hv.x)(vv) && vv !== Gv.mapType && ((0, wv.f)({
                  mapType: vv
                }), mv({
                  ...Gv,
                  mapType: vv
                }))
              },
              showAll: !1,
              disabled: jv
            }), (0, av.jsx)(Nv.d, {
              callbacks: {
                dayNight: Ov("dayNight"),
                fallDamage: Ov("fallDamage"),
                survivalGuns: Ov("survivalGuns")
              },
              disabled: jv,
              advancedMode: !1
            })]
          })
        }), (0, av.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, av.jsx)(lv.j, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: jv,
            onClick: () => {
              zv.requested = !0, fv(!0), pv(!0), Yv(""), (0, wv.h)(Gv), ev.e.createPersonalWorld(Gv).then((vv => {
                pv(!1);
                const hv = sv(vv);
                !zv.closed && nv.current ? (Pv(), iv(vv)) : hv || (0, wv.e)()
              }), (vv => {
                if (console.error("Failed to create personal world:", vv), pv(!1), zv.requested = !1, zv.closed || !nv.current) return (0, wv.e)(), void Cv(vv);
                Yv(vv.message), fv(!1)
              }))
            },
            children: cv("general:play")
          }), Fv && (0, av.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: Fv
          })]
        })]
      })
    }
  },
  4694: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => Nv
    });
    var hv = Pv(1035),
      Sv = Pv.n(hv),
      ev = Pv(4386),
      gv = Pv(1175),
      pv = Pv(1082);
    const dv = [...ev.j, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function Nv(vv) {
      const {
        disabled: zv,
        hideWrapper: Pv
      } = vv, {
        t: hv
      } = (0, gv.x)(), Nv = vv.advancedMode ? dv.map((zv => [zv, vv.callbacks[zv]])) : ev.j.map((zv => [zv, vv.callbacks[zv]])), Tv = (0, pv.jsx)("div", {
        className: Sv()("PluginsGrid", {
          SectionBody: !Pv
        }),
        children: Nv.map((vv => {
          let [Pv, hv] = vv;
          return (0, pv.jsx)(lv, {
            plugin: Pv,
            callbacks: hv,
            disabled: zv
          }, Pv)
        }))
      });
      return Pv ? Tv : (0, pv.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, pv.jsx)("div", {
          className: "SectionTitle",
          children: hv("worldBuilder:pluginsSection")
        }), Tv]
      })
    }

    function lv(vv) {
      let {
        plugin: zv,
        callbacks: {
          isEnabled: Pv,
          uF: hv
        },
        disabled: ev
      } = vv;
      const {
        t: dv
      } = (0, gv.x)(), Nv = Pv();
      return (0, pv.jsxs)("div", {
        className: Sv()("PluginCard", {
          PluginCardEnabled: Nv,
          PluginCardDisabledForm: ev
        }),
        "data-pad-focusable": !0,
        "aria-disabled": ev || void 0,
        onClick: () => {
          ev || hv(!Nv)
        },
        children: [(0, pv.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, pv.jsx)("img", {
            src: `/textures/games/classic/customGames/${zv}.png`,
            alt: zv
          })
        }), (0, pv.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, pv.jsx)("div", {
            className: "PluginCardTitle",
            children: dv(Tv[zv])
          }), (0, pv.jsx)("div", {
            className: "PluginCardDescription",
            children: dv(Wv[zv])
          })]
        }), (0, pv.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: dv(Nv ? "general:on" : "general:off")
        })]
      })
    }
    const Tv = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      Wv = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  35908: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Nv,
      i: () => lv
    });
    Pv(52);
    var hv = Pv(1035),
      Sv = Pv.n(hv),
      ev = Pv(4386),
      gv = Pv(302),
      pv = Pv(1175),
      dv = Pv(1082);

    function Nv(vv) {
      let {
        value: zv,
        onChange: Pv,
        showAll: hv,
        disabled: Nv = !1
      } = vv;
      const {
        t: lv
      } = (0, pv.x)();
      return (0, dv.jsxs)("div", {
        className: Sv()("BloxdForm GamemodeForm", {
          BasicOptions: !hv
        }),
        children: [(0, dv.jsx)("div", {
          className: "SectionTitle",
          children: lv("classic:defaultGamemode")
        }), (0, dv.jsx)("div", {
          className: "SectionBody",
          children: ev.B.map((vv => hv || (0, ev.u)(vv) ? (0, dv.jsx)("button", {
            type: "button",
            className: Sv()("WorldGamemode", {
              Selected: zv === vv
            }),
            disabled: Nv,
            onClick: () => {
              Pv(vv)
            },
            style: {
              "--background-image": `url(${gv.s[vv]})`
            },
            children: gv.p[vv]
          }, vv) : null))
        })]
      })
    }

    function lv(vv) {
      let {
        mapTypes: zv,
        value: Pv,
        onChange: hv,
        showAll: Nv,
        disabled: lv = !1,
        children: Tv
      } = vv;
      const {
        t: Wv
      } = (0, pv.x)();
      return (0, dv.jsxs)("div", {
        className: Sv()("BloxdForm MapTypeForm", {
          BasicOptions: !Nv
        }),
        children: [(0, dv.jsx)("div", {
          className: "SectionTitle",
          children: Wv("customLobby:mapType")
        }), (0, dv.jsx)("div", {
          className: "SectionBody",
          children: zv.map((vv => Nv || (0, ev.x)(vv) ? (0, dv.jsx)("button", {
            type: "button",
            className: Sv()("MapType", {
              Selected: Pv === vv
            }),
            disabled: lv,
            onClick: () => {
              hv(vv)
            },
            style: {
              "--background-image": `url(${gv.l[vv]})`
            },
            children: gv.k[vv]
          }, vv) : null))
        }), Tv]
      })
    }
  },
  4685: () => {},
  35902: () => {}
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);