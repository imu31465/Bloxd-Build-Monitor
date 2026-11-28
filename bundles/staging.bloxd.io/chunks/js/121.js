export const id = 121;
export const ids = [121];
export const modules = {
  37899: (dd, Od, md) => {
    md.d(Od, {
      b: () => hd
    });
    var Wd = md(1155),
      Fd = md.n(Wd),
      Rd = md(66),
      Xd = md(5241),
      Kd = md(1341);

    function hd(dd) {
      let {
        locked: Od,
        children: md
      } = dd;
      const Wd = (0, Rd.useRef)(null),
        hd = (0, Xd.b)(Wd, "y");
      return (0, Kd.jsx)("div", {
        ref: Wd,
        className: Fd()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: hd.before,
          CreateCustomLobbyBodyMoreBelow: hd.after
        }),
        "data-pad-ignore": Od || void 0,
        children: md
      })
    }
  },
  38054: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      showFirstWorldSetupPopup: () => Hd
    });
    md(5716), md(37882);
    var Wd = md(5294),
      Fd = md(66),
      Rd = md(5255),
      Xd = md(1238),
      Kd = md(1462),
      hd = md(37899),
      vd = md(5719),
      Qd = md(1572),
      td = md(4717),
      od = md(37892),
      Nd = md(5288),
      qd = md(1341);

    function Hd(dd) {
      const Od = {
        requested: !1,
        closed: !1
      };
      Kd.NotificationProvider.showCustomPopup({
        body: md => (0, qd.jsx)(yd, {
          flow: Od,
          close: md,
          ...dd
        }),
        middleScreenPopupClassName: "CreateCustomLobbyPopup",
        onClose: () => {
          Od.closed = !0, Od.requested || (0, Nd.f)()
        }
      })
    }

    function yd(dd) {
      let {
        flow: Od,
        close: md,
        onCreating: Kd,
        onCreated: Hd,
        onFailedClosed: yd,
        join: bd
      } = dd;
      const {
        t: Td
      } = (0, Xd.G)(), [pd, Yd] = (0, Fd.useState)(Wd.w), [gd, wd] = (0, Fd.useState)(!1), [Ed, Jd] = (0, Fd.useState)(""), Ud = (0, td.b)();
      (0, Fd.useEffect)((() => {
        (0, Nd.n)()
      }), []);
      const xd = dd => ({
        isEnabled: () => pd.plugins[dd],
        rY: Od => {
          (0, Nd.j)({
            plugin: dd,
            enabled: Od
          }), Yd({
            ...pd,
            plugins: {
              ...pd.plugins,
              [dd]: Od
            }
          })
        }
      });
      return (0, qd.jsxs)("div", {
        className: "CreateCustomLobby",
        children: [(0, qd.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, qd.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: Td("homePage:myWorld")
          })
        }), (0, qd.jsx)(hd.b, {
          locked: gd,
          children: (0, qd.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [(0, qd.jsx)(od.d, {
              value: pd.defaultGamemode,
              onChange: dd => {
                (0, Wd.x)(dd) && dd !== pd.defaultGamemode && ((0, Nd.j)({
                  defaultGamemode: dd
                }), Yd({
                  ...pd,
                  defaultGamemode: dd
                }))
              },
              showAll: !1,
              disabled: gd
            }), (0, qd.jsx)(od.f, {
              mapTypes: Wd.i,
              value: pd.mapType,
              onChange: dd => {
                (0, Wd.y)(dd) && dd !== pd.mapType && ((0, Nd.j)({
                  mapType: dd
                }), Yd({
                  ...pd,
                  mapType: dd
                }))
              },
              showAll: !1,
              disabled: gd
            }), (0, qd.jsx)(vd.b, {
              callbacks: {
                dayNight: xd("dayNight"),
                fallDamage: xd("fallDamage"),
                survivalGuns: xd("survivalGuns")
              },
              disabled: gd,
              advancedMode: !1
            })]
          })
        }), (0, qd.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, qd.jsx)(Qd.m, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: gd,
            onClick: () => {
              Od.requested = !0, wd(!0), Kd(!0), Jd(""), (0, Nd.k)(pd), Rd.e.createPersonalWorld(pd).then((dd => {
                Kd(!1);
                const Wd = Hd(dd);
                !Od.closed && Ud.current ? (md(), bd(dd)) : Wd || (0, Nd.f)()
              }), (dd => {
                if (console.error("Failed to create personal world:", dd), Kd(!1), Od.requested = !1, Od.closed || !Ud.current) return (0, Nd.f)(), void yd(dd);
                Jd(dd.message), wd(!1)
              }))
            },
            children: Td("general:play")
          }), Ed && (0, qd.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: Ed
          })]
        })]
      })
    }
  },
  5719: (dd, Od, md) => {
    md.d(Od, {
      b: () => vd
    });
    var Wd = md(1155),
      Fd = md.n(Wd),
      Rd = md(5294),
      Xd = md(1238),
      Kd = md(1341);
    const hd = [...Rd.l, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function vd(dd) {
      const {
        disabled: Od,
        hideWrapper: md
      } = dd, {
        t: Wd
      } = (0, Xd.G)(), vd = dd.advancedMode ? hd.map((Od => [Od, dd.callbacks[Od]])) : Rd.l.map((Od => [Od, dd.callbacks[Od]])), td = (0, Kd.jsx)("div", {
        className: Fd()("PluginsGrid", {
          SectionBody: !md
        }),
        children: vd.map((dd => {
          let [md, Wd] = dd;
          return (0, Kd.jsx)(Qd, {
            plugin: md,
            callbacks: Wd,
            disabled: Od
          }, md)
        }))
      });
      return md ? td : (0, Kd.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, Kd.jsx)("div", {
          className: "SectionTitle",
          children: Wd("worldBuilder:pluginsSection")
        }), td]
      })
    }

    function Qd(dd) {
      let {
        plugin: Od,
        callbacks: {
          isEnabled: md,
          rY: Wd
        },
        disabled: Rd
      } = dd;
      const {
        t: hd
      } = (0, Xd.G)(), vd = md();
      return (0, Kd.jsxs)("div", {
        className: Fd()("PluginCard", {
          PluginCardEnabled: vd,
          PluginCardDisabledForm: Rd
        }),
        "data-pad-focusable": !0,
        "aria-disabled": Rd || void 0,
        onClick: () => {
          Rd || Wd(!vd)
        },
        children: [(0, Kd.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, Kd.jsx)("img", {
            src: `/textures/games/classic/customGames/${Od}.png`,
            alt: Od
          })
        }), (0, Kd.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, Kd.jsx)("div", {
            className: "PluginCardTitle",
            children: hd(td[Od])
          }), (0, Kd.jsx)("div", {
            className: "PluginCardDescription",
            children: hd(od[Od])
          })]
        }), (0, Kd.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: hd(vd ? "general:on" : "general:off")
        })]
      })
    }
    const td = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      od = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  37892: (dd, Od, md) => {
    md.d(Od, {
      d: () => vd,
      f: () => Qd
    });
    md(66);
    var Wd = md(1155),
      Fd = md.n(Wd),
      Rd = md(5294),
      Xd = md(387),
      Kd = md(1238),
      hd = md(1341);

    function vd(dd) {
      let {
        value: Od,
        onChange: md,
        showAll: Wd,
        disabled: vd = !1
      } = dd;
      const {
        t: Qd
      } = (0, Kd.G)();
      return (0, hd.jsxs)("div", {
        className: Fd()("BloxdForm GamemodeForm", {
          BasicOptions: !Wd
        }),
        children: [(0, hd.jsx)("div", {
          className: "SectionTitle",
          children: Qd("classic:defaultGamemode")
        }), (0, hd.jsx)("div", {
          className: "SectionBody",
          children: Rd.F.map((dd => Wd || (0, Rd.x)(dd) ? (0, hd.jsx)("button", {
            type: "button",
            className: Fd()("WorldGamemode", {
              Selected: Od === dd
            }),
            disabled: vd,
            onClick: () => {
              md(dd)
            },
            style: {
              "--background-image": `url(${Xd.s[dd]})`
            },
            children: Xd.p[dd]
          }, dd) : null))
        })]
      })
    }

    function Qd(dd) {
      let {
        mapTypes: Od,
        value: md,
        onChange: Wd,
        showAll: vd,
        disabled: Qd = !1,
        children: td
      } = dd;
      const {
        t: od
      } = (0, Kd.G)();
      return (0, hd.jsxs)("div", {
        className: Fd()("BloxdForm MapTypeForm", {
          BasicOptions: !vd
        }),
        children: [(0, hd.jsx)("div", {
          className: "SectionTitle",
          children: od("customLobby:mapType")
        }), (0, hd.jsx)("div", {
          className: "SectionBody",
          children: Od.map((dd => vd || (0, Rd.y)(dd) ? (0, hd.jsx)("button", {
            type: "button",
            className: Fd()("MapType", {
              Selected: md === dd
            }),
            disabled: Qd,
            onClick: () => {
              Wd(dd)
            },
            style: {
              "--background-image": `url(${Xd.l[dd]})`
            },
            children: Xd.j[dd]
          }, dd) : null))
        }), td]
      })
    }
  },
  5716: () => {},
  37882: () => {}
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);