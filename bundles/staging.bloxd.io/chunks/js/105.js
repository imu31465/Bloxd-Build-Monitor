export const id = 105;
export const ids = [105];
export const modules = {
  35979: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Yb
    });
    var Bb = hb(958),
      Ob = hb.n(Bb),
      Gb = hb(49),
      Ub = hb(4344),
      Lb = hb(1007);

    function Yb(bb) {
      let {
        locked: ub,
        children: hb
      } = bb;
      const Bb = (0, Gb.useRef)(null),
        Yb = (0, Ub.c)(Bb, "y");
      return (0, Lb.jsx)("div", {
        ref: Bb,
        className: Ob()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: Yb.before,
          CreateCustomLobbyBodyMoreBelow: Yb.after
        }),
        "data-pad-ignore": ub || void 0,
        children: hb
      })
    }
  },
  36042: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      showFirstWorldSetupPopup: () => pb
    });
    hb(4707), hb(35972);
    var Bb = hb(4393),
      Ob = hb(49),
      Gb = hb(4353),
      Ub = hb(1095),
      Lb = hb(1249),
      Yb = hb(35979),
      Sb = hb(4710),
      ab = hb(1357),
      Hb = hb(3278),
      wb = hb(35977),
      Zb = hb(4387),
      Xb = hb(1007);

    function pb(bb) {
      const ub = {
        requested: !1,
        closed: !1
      };
      Lb.NotificationProvider.showCustomPopup({
        body: hb => (0, Xb.jsx)(ob, {
          flow: ub,
          close: hb,
          ...bb
        }),
        middleScreenPopupClassName: "CreateCustomLobbyPopup",
        onClose: () => {
          ub.closed = !0, ub.requested || (0, Zb.f)()
        }
      })
    }

    function ob(bb) {
      let {
        flow: ub,
        close: hb,
        onCreating: Lb,
        onCreated: pb,
        onFailedClosed: ob,
        join: Ab
      } = bb;
      const {
        t: lb
      } = (0, Ub.K)(), [Kb, Wb] = (0, Ob.useState)(Bb.u), [Cb, db] = (0, Ob.useState)(!1), [rb, jb] = (0, Ob.useState)(""), nb = (0, Hb.d)();
      (0, Ob.useEffect)((() => {
        (0, Zb.p)()
      }), []);
      const Db = bb => ({
        isEnabled: () => Kb.plugins[bb],
        Zx: ub => {
          (0, Zb.j)({
            plugin: bb,
            enabled: ub
          }), Wb({
            ...Kb,
            plugins: {
              ...Kb.plugins,
              [bb]: ub
            }
          })
        }
      });
      return (0, Xb.jsxs)("div", {
        className: "CreateCustomLobby",
        children: [(0, Xb.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, Xb.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: lb("homePage:myWorld")
          })
        }), (0, Xb.jsx)(Yb.c, {
          locked: Cb,
          children: (0, Xb.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [(0, Xb.jsx)(wb.b, {
              value: Kb.defaultGamemode,
              onChange: bb => {
                (0, Bb.y)(bb) && bb !== Kb.defaultGamemode && ((0, Zb.j)({
                  defaultGamemode: bb
                }), Wb({
                  ...Kb,
                  defaultGamemode: bb
                }))
              },
              showAll: !1,
              disabled: Cb
            }), (0, Xb.jsx)(wb.f, {
              mapTypes: Bb.g,
              value: Kb.mapType,
              onChange: bb => {
                (0, Bb.C)(bb) && bb !== Kb.mapType && ((0, Zb.j)({
                  mapType: bb
                }), Wb({
                  ...Kb,
                  mapType: bb
                }))
              },
              showAll: !1,
              disabled: Cb
            }), (0, Xb.jsx)(Sb.d, {
              callbacks: {
                dayNight: Db("dayNight"),
                fallDamage: Db("fallDamage"),
                survivalGuns: Db("survivalGuns")
              },
              disabled: Cb,
              advancedMode: !1
            })]
          })
        }), (0, Xb.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, Xb.jsx)(ab.m, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: Cb,
            onClick: () => {
              ub.requested = !0, db(!0), Lb(!0), jb(""), (0, Zb.n)(Kb), Gb.d.createPersonalWorld(Kb).then((bb => {
                Lb(!1);
                const Bb = pb(bb);
                !ub.closed && nb.current ? (hb(), Ab(bb)) : Bb || (0, Zb.f)()
              }), (bb => {
                if (console.error("Failed to create personal world:", bb), Lb(!1), ub.requested = !1, ub.closed || !nb.current) return (0, Zb.f)(), void ob(bb);
                jb(bb.message), db(!1)
              }))
            },
            children: lb("general:play")
          }), rb && (0, Xb.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: rb
          })]
        })]
      })
    }
  },
  4710: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Sb
    });
    var Bb = hb(958),
      Ob = hb.n(Bb),
      Gb = hb(4393),
      Ub = hb(1095),
      Lb = hb(1007);
    const Yb = [...Gb.j, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function Sb(bb) {
      const {
        disabled: ub,
        hideWrapper: hb
      } = bb, {
        t: Bb
      } = (0, Ub.K)(), Sb = bb.advancedMode ? Yb.map((ub => [ub, bb.callbacks[ub]])) : Gb.j.map((ub => [ub, bb.callbacks[ub]])), Hb = (0, Lb.jsx)("div", {
        className: Ob()("PluginsGrid", {
          SectionBody: !hb
        }),
        children: Sb.map((bb => {
          let [hb, Bb] = bb;
          return (0, Lb.jsx)(ab, {
            plugin: hb,
            callbacks: Bb,
            disabled: ub
          }, hb)
        }))
      });
      return hb ? Hb : (0, Lb.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, Lb.jsx)("div", {
          className: "SectionTitle",
          children: Bb("worldBuilder:pluginsSection")
        }), Hb]
      })
    }

    function ab(bb) {
      let {
        plugin: ub,
        callbacks: {
          isEnabled: hb,
          Zx: Bb
        },
        disabled: Gb
      } = bb;
      const {
        t: Yb
      } = (0, Ub.K)(), Sb = hb();
      return (0, Lb.jsxs)("div", {
        className: Ob()("PluginCard", {
          PluginCardEnabled: Sb,
          PluginCardDisabledForm: Gb
        }),
        "data-pad-focusable": !0,
        "aria-disabled": Gb || void 0,
        onClick: () => {
          Gb || Bb(!Sb)
        },
        children: [(0, Lb.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, Lb.jsx)("img", {
            src: `/textures/games/classic/customGames/${ub}.png`,
            alt: ub
          })
        }), (0, Lb.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, Lb.jsx)("div", {
            className: "PluginCardTitle",
            children: Yb(Hb[ub])
          }), (0, Lb.jsx)("div", {
            className: "PluginCardDescription",
            children: Yb(wb[ub])
          })]
        }), (0, Lb.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: Yb(Sb ? "general:on" : "general:off")
        })]
      })
    }
    const Hb = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      wb = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  35977: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Sb,
      f: () => ab
    });
    hb(49);
    var Bb = hb(958),
      Ob = hb.n(Bb),
      Gb = hb(4393),
      Ub = hb(298),
      Lb = hb(1095),
      Yb = hb(1007);

    function Sb(bb) {
      let {
        value: ub,
        onChange: hb,
        showAll: Bb,
        disabled: Sb = !1
      } = bb;
      const {
        t: ab
      } = (0, Lb.K)();
      return (0, Yb.jsxs)("div", {
        className: Ob()("BloxdForm GamemodeForm", {
          BasicOptions: !Bb
        }),
        children: [(0, Yb.jsx)("div", {
          className: "SectionTitle",
          children: ab("classic:defaultGamemode")
        }), (0, Yb.jsx)("div", {
          className: "SectionBody",
          children: Gb.I.map((bb => Bb || (0, Gb.y)(bb) ? (0, Yb.jsx)("button", {
            type: "button",
            className: Ob()("WorldGamemode", {
              Selected: ub === bb
            }),
            disabled: Sb,
            onClick: () => {
              hb(bb)
            },
            style: {
              "--background-image": `url(${Ub.y[bb]})`
            },
            children: Ub.x[bb]
          }, bb) : null))
        })]
      })
    }

    function ab(bb) {
      let {
        mapTypes: ub,
        value: hb,
        onChange: Bb,
        showAll: Sb,
        disabled: ab = !1,
        children: Hb
      } = bb;
      const {
        t: wb
      } = (0, Lb.K)();
      return (0, Yb.jsxs)("div", {
        className: Ob()("BloxdForm MapTypeForm", {
          BasicOptions: !Sb
        }),
        children: [(0, Yb.jsx)("div", {
          className: "SectionTitle",
          children: wb("customLobby:mapType")
        }), (0, Yb.jsx)("div", {
          className: "SectionBody",
          children: ub.map((bb => Sb || (0, Gb.C)(bb) ? (0, Yb.jsx)("button", {
            type: "button",
            className: Ob()("MapType", {
              Selected: hb === bb
            }),
            disabled: ab,
            onClick: () => {
              Bb(bb)
            },
            style: {
              "--background-image": `url(${Ub.q[bb]})`
            },
            children: Ub.n[bb]
          }, bb) : null))
        }), Hb]
      })
    }
  },
  4707: () => {},
  35972: () => {}
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);