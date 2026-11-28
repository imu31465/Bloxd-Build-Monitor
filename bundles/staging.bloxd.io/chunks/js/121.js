export const id = 121;
export const ids = [121];
export const modules = {
  37580: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => lb
    });
    var eb = Mb(1159),
      Hb = Mb.n(eb),
      pb = Mb(64),
      Vb = Mb(5430),
      gb = Mb(1364);

    function lb(bb) {
      let {
        locked: wb,
        children: Mb
      } = bb;
      const eb = (0, pb.useRef)(null),
        lb = (0, Vb.e)(eb, "y");
      return (0, gb.jsx)("div", {
        ref: eb,
        className: Hb()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: lb.before,
          CreateCustomLobbyBodyMoreBelow: lb.after
        }),
        "data-pad-ignore": wb || void 0,
        children: Mb
      })
    }
  },
  37732: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      showFirstWorldSetupPopup: () => Eb
    });
    Mb(5850), Mb(37570);
    var eb = Mb(5472),
      Hb = Mb(64),
      pb = Mb(5436),
      Vb = Mb(1259),
      gb = Mb(1504),
      lb = Mb(37580),
      Lb = Mb(5853),
      Ib = Mb(1616),
      Ob = Mb(4883),
      Ub = Mb(37578),
      tb = Mb(5463),
      Cb = Mb(1364);

    function Eb(bb) {
      const wb = {
        requested: !1,
        closed: !1
      };
      gb.NotificationProvider.showCustomPopup({
        body: Mb => (0, Cb.jsx)(Fb, {
          flow: wb,
          close: Mb,
          ...bb
        }),
        middleScreenPopupClassName: "CreateCustomLobbyPopup",
        onClose: () => {
          wb.closed = !0, wb.requested || (0, tb.g)()
        }
      })
    }

    function Fb(bb) {
      let {
        flow: wb,
        close: Mb,
        onCreating: gb,
        onCreated: Eb,
        onFailedClosed: Fb,
        join: Bb
      } = bb;
      const {
        t: sb
      } = (0, Vb.C)(), [mb, hb] = (0, Hb.useState)(eb.s), [zb, Xb] = (0, Hb.useState)(!1), [xb, jb] = (0, Hb.useState)(""), Kb = (0, Ob.d)();
      (0, Hb.useEffect)((() => {
        (0, tb.p)()
      }), []);
      const rb = bb => ({
        isEnabled: () => mb.plugins[bb],
        Bx: wb => {
          (0, tb.j)({
            plugin: bb,
            enabled: wb
          }), hb({
            ...mb,
            plugins: {
              ...mb.plugins,
              [bb]: wb
            }
          })
        }
      });
      return (0, Cb.jsxs)("div", {
        className: "CreateCustomLobby",
        children: [(0, Cb.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, Cb.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: sb("homePage:myWorld")
          })
        }), (0, Cb.jsx)(lb.c, {
          locked: zb,
          children: (0, Cb.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [(0, Cb.jsx)(Ub.b, {
              value: mb.defaultGamemode,
              onChange: bb => {
                (0, eb.u)(bb) && bb !== mb.defaultGamemode && ((0, tb.j)({
                  defaultGamemode: bb
                }), hb({
                  ...mb,
                  defaultGamemode: bb
                }))
              },
              showAll: !1,
              disabled: zb
            }), (0, Cb.jsx)(Ub.c, {
              mapTypes: eb.g,
              value: mb.mapType,
              onChange: bb => {
                (0, eb.v)(bb) && bb !== mb.mapType && ((0, tb.j)({
                  mapType: bb
                }), hb({
                  ...mb,
                  mapType: bb
                }))
              },
              showAll: !1,
              disabled: zb
            }), (0, Cb.jsx)(Lb.d, {
              callbacks: {
                dayNight: rb("dayNight"),
                fallDamage: rb("fallDamage"),
                survivalGuns: rb("survivalGuns")
              },
              disabled: zb,
              advancedMode: !1
            })]
          })
        }), (0, Cb.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, Cb.jsx)(Ib.p, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: zb,
            onClick: () => {
              wb.requested = !0, Xb(!0), gb(!0), jb(""), (0, tb.n)(mb), pb.c.createPersonalWorld(mb).then((bb => {
                gb(!1);
                const eb = Eb(bb);
                !wb.closed && Kb.current ? (Mb(), Bb(bb)) : eb || (0, tb.g)()
              }), (bb => {
                if (console.error("Failed to create personal world:", bb), gb(!1), wb.requested = !1, wb.closed || !Kb.current) return (0, tb.g)(), void Fb(bb);
                jb(bb.message), Xb(!1)
              }))
            },
            children: sb("general:play")
          }), xb && (0, Cb.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: xb
          })]
        })]
      })
    }
  },
  5853: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Lb
    });
    var eb = Mb(1159),
      Hb = Mb.n(eb),
      pb = Mb(5472),
      Vb = Mb(1259),
      gb = Mb(1364);
    const lb = [...pb.i, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function Lb(bb) {
      const {
        disabled: wb,
        hideWrapper: Mb
      } = bb, {
        t: eb
      } = (0, Vb.C)(), Lb = bb.advancedMode ? lb.map((wb => [wb, bb.callbacks[wb]])) : pb.i.map((wb => [wb, bb.callbacks[wb]])), Ob = (0, gb.jsx)("div", {
        className: Hb()("PluginsGrid", {
          SectionBody: !Mb
        }),
        children: Lb.map((bb => {
          let [Mb, eb] = bb;
          return (0, gb.jsx)(Ib, {
            plugin: Mb,
            callbacks: eb,
            disabled: wb
          }, Mb)
        }))
      });
      return Mb ? Ob : (0, gb.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, gb.jsx)("div", {
          className: "SectionTitle",
          children: eb("worldBuilder:pluginsSection")
        }), Ob]
      })
    }

    function Ib(bb) {
      let {
        plugin: wb,
        callbacks: {
          isEnabled: Mb,
          Bx: eb
        },
        disabled: pb
      } = bb;
      const {
        t: lb
      } = (0, Vb.C)(), Lb = Mb();
      return (0, gb.jsxs)("div", {
        className: Hb()("PluginCard", {
          PluginCardEnabled: Lb,
          PluginCardDisabledForm: pb
        }),
        "data-pad-focusable": !0,
        "aria-disabled": pb || void 0,
        onClick: () => {
          pb || eb(!Lb)
        },
        children: [(0, gb.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, gb.jsx)("img", {
            src: `/textures/games/classic/customGames/${wb}.png`,
            alt: wb
          })
        }), (0, gb.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, gb.jsx)("div", {
            className: "PluginCardTitle",
            children: lb(Ob[wb])
          }), (0, gb.jsx)("div", {
            className: "PluginCardDescription",
            children: lb(Ub[wb])
          })]
        }), (0, gb.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: lb(Lb ? "general:on" : "general:off")
        })]
      })
    }
    const Ob = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      Ub = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  37578: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Lb,
      c: () => Ib
    });
    Mb(64);
    var eb = Mb(1159),
      Hb = Mb.n(eb),
      pb = Mb(5472),
      Vb = Mb(366),
      gb = Mb(1259),
      lb = Mb(1364);

    function Lb(bb) {
      let {
        value: wb,
        onChange: Mb,
        showAll: eb,
        disabled: Lb = !1
      } = bb;
      const {
        t: Ib
      } = (0, gb.C)();
      return (0, lb.jsxs)("div", {
        className: Hb()("BloxdForm GamemodeForm", {
          BasicOptions: !eb
        }),
        children: [(0, lb.jsx)("div", {
          className: "SectionTitle",
          children: Ib("classic:defaultGamemode")
        }), (0, lb.jsx)("div", {
          className: "SectionBody",
          children: pb.y.map((bb => eb || (0, pb.u)(bb) ? (0, lb.jsx)("button", {
            type: "button",
            className: Hb()("WorldGamemode", {
              Selected: wb === bb
            }),
            disabled: Lb,
            onClick: () => {
              Mb(bb)
            },
            style: {
              "--background-image": `url(${Vb.r[bb]})`
            },
            children: Vb.o[bb]
          }, bb) : null))
        })]
      })
    }

    function Ib(bb) {
      let {
        mapTypes: wb,
        value: Mb,
        onChange: eb,
        showAll: Lb,
        disabled: Ib = !1,
        children: Ob
      } = bb;
      const {
        t: Ub
      } = (0, gb.C)();
      return (0, lb.jsxs)("div", {
        className: Hb()("BloxdForm MapTypeForm", {
          BasicOptions: !Lb
        }),
        children: [(0, lb.jsx)("div", {
          className: "SectionTitle",
          children: Ub("customLobby:mapType")
        }), (0, lb.jsx)("div", {
          className: "SectionBody",
          children: wb.map((bb => Lb || (0, pb.v)(bb) ? (0, lb.jsx)("button", {
            type: "button",
            className: Hb()("MapType", {
              Selected: Mb === bb
            }),
            disabled: Ib,
            onClick: () => {
              eb(bb)
            },
            style: {
              "--background-image": `url(${Vb.k[bb]})`
            },
            children: Vb.j[bb]
          }, bb) : null))
        }), Ob]
      })
    }
  },
  5850: () => {},
  37570: () => {}
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);