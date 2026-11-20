export const id = 104;
export const ids = [104];
export const modules = {
  36030: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Ib
    });
    var kb = sb(1033),
      Wb = sb.n(kb),
      ab = sb(64),
      Tb = sb(4319),
      Ub = sb(1087);

    function Ib(bb) {
      let {
        locked: cb,
        children: sb
      } = bb;
      const kb = (0, ab.useRef)(null),
        Ib = (0, Tb.d)(kb, "y");
      return (0, Ub.jsx)("div", {
        ref: kb,
        className: Wb()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: Ib.before,
          CreateCustomLobbyBodyMoreBelow: Ib.after
        }),
        "data-pad-ignore": cb || void 0,
        children: sb
      })
    }
  },
  36090: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      showFirstWorldSetupPopup: () => lb
    });
    sb(4643), sb(36007);
    var kb = sb(4371),
      Wb = sb(64),
      ab = sb(4330),
      Tb = sb(1197),
      Ub = sb(1332),
      Ib = sb(36030),
      Hb = sb(4648),
      fb = sb(1431),
      Mb = sb(3281),
      Xb = sb(36025),
      nb = sb(4361),
      mb = sb(1087);

    function lb(bb) {
      const cb = {
        requested: !1,
        closed: !1
      };
      Ub.NotificationProvider.showCustomPopup({
        body: sb => (0, mb.jsx)(Qb, {
          flow: cb,
          close: sb,
          ...bb
        }),
        middleScreenPopupClassName: "CreateCustomLobbyPopup",
        onClose: () => {
          cb.closed = !0, cb.requested || (0, nb.h)()
        }
      })
    }

    function Qb(bb) {
      let {
        flow: cb,
        close: sb,
        onCreating: Ub,
        onCreated: lb,
        onFailedClosed: Qb,
        join: eb
      } = bb;
      const {
        t: Cb
      } = (0, Tb.E)(), [Nb, Vb] = (0, Wb.useState)(kb.x), [Lb, ub] = (0, Wb.useState)(!1), [Yb, hb] = (0, Wb.useState)(""), Jb = (0, Mb.e)();
      (0, Wb.useEffect)((() => {
        (0, nb.l)()
      }), []);
      const gb = bb => ({
        isEnabled: () => Nb.plugins[bb],
        GV: cb => {
          (0, nb.i)({
            plugin: bb,
            enabled: cb
          }), Vb({
            ...Nb,
            plugins: {
              ...Nb.plugins,
              [bb]: cb
            }
          })
        }
      });
      return (0, mb.jsxs)("div", {
        className: "CreateCustomLobby",
        children: [(0, mb.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, mb.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: Cb("homePage:myWorld")
          })
        }), (0, mb.jsx)(Ib.b, {
          locked: Lb,
          children: (0, mb.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [(0, mb.jsx)(Xb.b, {
              value: Nb.defaultGamemode,
              onChange: bb => {
                (0, kb.y)(bb) && bb !== Nb.defaultGamemode && ((0, nb.i)({
                  defaultGamemode: bb
                }), Vb({
                  ...Nb,
                  defaultGamemode: bb
                }))
              },
              showAll: !1,
              disabled: Lb
            }), (0, mb.jsx)(Xb.c, {
              mapTypes: kb.h,
              value: Nb.mapType,
              onChange: bb => {
                (0, kb.A)(bb) && bb !== Nb.mapType && ((0, nb.i)({
                  mapType: bb
                }), Vb({
                  ...Nb,
                  mapType: bb
                }))
              },
              showAll: !1,
              disabled: Lb
            }), (0, mb.jsx)(Hb.b, {
              callbacks: {
                dayNight: gb("dayNight"),
                fallDamage: gb("fallDamage"),
                survivalGuns: gb("survivalGuns")
              },
              disabled: Lb,
              advancedMode: !1
            })]
          })
        }), (0, mb.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, mb.jsx)(fb.n, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: Lb,
            onClick: () => {
              cb.requested = !0, ub(!0), Ub(!0), hb(""), (0, nb.j)(Nb), ab.d.createPersonalWorld(Nb).then((bb => {
                Ub(!1);
                const kb = lb(bb);
                !cb.closed && Jb.current ? (sb(), eb(bb)) : kb || (0, nb.h)()
              }), (bb => {
                if (console.error("Failed to create personal world:", bb), Ub(!1), cb.requested = !1, cb.closed || !Jb.current) return (0, nb.h)(), void Qb(bb);
                hb(bb.message), ub(!1)
              }))
            },
            children: Cb("general:play")
          }), Yb && (0, mb.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: Yb
          })]
        })]
      })
    }
  },
  4648: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Hb
    });
    var kb = sb(1033),
      Wb = sb.n(kb),
      ab = sb(4371),
      Tb = sb(1197),
      Ub = sb(1087);
    const Ib = [...ab.l, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function Hb(bb) {
      const {
        disabled: cb,
        hideWrapper: sb
      } = bb, {
        t: kb
      } = (0, Tb.E)(), Hb = bb.advancedMode ? Ib.map((cb => [cb, bb.callbacks[cb]])) : ab.l.map((cb => [cb, bb.callbacks[cb]])), Mb = (0, Ub.jsx)("div", {
        className: Wb()("PluginsGrid", {
          SectionBody: !sb
        }),
        children: Hb.map((bb => {
          let [sb, kb] = bb;
          return (0, Ub.jsx)(fb, {
            plugin: sb,
            callbacks: kb,
            disabled: cb
          }, sb)
        }))
      });
      return sb ? Mb : (0, Ub.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, Ub.jsx)("div", {
          className: "SectionTitle",
          children: kb("worldBuilder:pluginsSection")
        }), Mb]
      })
    }

    function fb(bb) {
      let {
        plugin: cb,
        callbacks: {
          isEnabled: sb,
          GV: kb
        },
        disabled: ab
      } = bb;
      const {
        t: Ib
      } = (0, Tb.E)(), Hb = sb();
      return (0, Ub.jsxs)("div", {
        className: Wb()("PluginCard", {
          PluginCardEnabled: Hb,
          PluginCardDisabledForm: ab
        }),
        "data-pad-focusable": !0,
        "aria-disabled": ab || void 0,
        onClick: () => {
          ab || kb(!Hb)
        },
        children: [(0, Ub.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, Ub.jsx)("img", {
            src: `/textures/games/classic/customGames/${cb}.png`,
            alt: cb
          })
        }), (0, Ub.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, Ub.jsx)("div", {
            className: "PluginCardTitle",
            children: Ib(Mb[cb])
          }), (0, Ub.jsx)("div", {
            className: "PluginCardDescription",
            children: Ib(Xb[cb])
          })]
        }), (0, Ub.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: Ib(Hb ? "general:on" : "general:off")
        })]
      })
    }
    const Mb = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      Xb = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  36025: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Hb,
      c: () => fb
    });
    sb(64);
    var kb = sb(1033),
      Wb = sb.n(kb),
      ab = sb(4371),
      Tb = sb(334),
      Ub = sb(1197),
      Ib = sb(1087);

    function Hb(bb) {
      let {
        value: cb,
        onChange: sb,
        showAll: kb,
        disabled: Hb = !1
      } = bb;
      const {
        t: fb
      } = (0, Ub.E)();
      return (0, Ib.jsxs)("div", {
        className: Wb()("BloxdForm GamemodeForm", {
          BasicOptions: !kb
        }),
        children: [(0, Ib.jsx)("div", {
          className: "SectionTitle",
          children: fb("classic:defaultGamemode")
        }), (0, Ib.jsx)("div", {
          className: "SectionBody",
          children: ab.D.map((bb => kb || (0, ab.y)(bb) ? (0, Ib.jsx)("button", {
            type: "button",
            className: Wb()("WorldGamemode", {
              Selected: cb === bb
            }),
            disabled: Hb,
            onClick: () => {
              sb(bb)
            },
            style: {
              "--background-image": `url(${Tb.w[bb]})`
            },
            children: Tb.s[bb]
          }, bb) : null))
        })]
      })
    }

    function fb(bb) {
      let {
        mapTypes: cb,
        value: sb,
        onChange: kb,
        showAll: Hb,
        disabled: fb = !1,
        children: Mb
      } = bb;
      const {
        t: Xb
      } = (0, Ub.E)();
      return (0, Ib.jsxs)("div", {
        className: Wb()("BloxdForm MapTypeForm", {
          BasicOptions: !Hb
        }),
        children: [(0, Ib.jsx)("div", {
          className: "SectionTitle",
          children: Xb("customLobby:mapType")
        }), (0, Ib.jsx)("div", {
          className: "SectionBody",
          children: cb.map((bb => Hb || (0, ab.A)(bb) ? (0, Ib.jsx)("button", {
            type: "button",
            className: Wb()("MapType", {
              Selected: sb === bb
            }),
            disabled: fb,
            onClick: () => {
              kb(bb)
            },
            style: {
              "--background-image": `url(${Tb.o[bb]})`
            },
            children: Tb.l[bb]
          }, bb) : null))
        }), Mb]
      })
    }
  },
  4643: () => {},
  36007: () => {}
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);