export const id = 104;
export const ids = [104];
export const modules = {
  35814: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Bb
    });
    var Ab = Ub(984),
      Mb = Ub.n(Ab),
      Tb = Ub(52),
      Eb = Ub(4260),
      Yb = Ub(1023);

    function Bb(bb) {
      let {
        locked: ab,
        children: Ub
      } = bb;
      const Ab = (0, Tb.useRef)(null),
        Bb = (0, Eb.d)(Ab, "y");
      return (0, Yb.jsx)("div", {
        ref: Ab,
        className: Mb()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: Bb.before,
          CreateCustomLobbyBodyMoreBelow: Bb.after
        }),
        "data-pad-ignore": ab || void 0,
        children: Ub
      })
    }
  },
  35873: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      showFirstWorldSetupPopup: () => Rb
    });
    Ub(4629), Ub(35798);
    var Ab = Ub(4317),
      Mb = Ub(52),
      Tb = Ub(4269),
      Eb = Ub(1134),
      Yb = Ub(1260),
      Bb = Ub(35814),
      eb = Ub(4631),
      vb = Ub(1352),
      Lb = Ub(3170),
      Pb = Ub(35812),
      Xb = Ub(4301),
      jb = Ub(1023);

    function Rb(bb) {
      const ab = {
        requested: !1,
        closed: !1
      };
      Yb.NotificationProvider.showCustomPopup({
        body: Ub => (0, jb.jsx)(kb, {
          flow: ab,
          close: Ub,
          ...bb
        }),
        middleScreenPopupClassName: "CreateCustomLobbyPopup",
        onClose: () => {
          ab.closed = !0, ab.requested || (0, Xb.d)()
        }
      })
    }

    function kb(bb) {
      let {
        flow: ab,
        close: Ub,
        onCreating: Yb,
        onCreated: Rb,
        onFailedClosed: kb,
        join: yb
      } = bb;
      const {
        t: Zb
      } = (0, Eb.A)(), [Db, zb] = (0, Mb.useState)(Ab.w), [xb, ib] = (0, Mb.useState)(!1), [fb, mb] = (0, Mb.useState)(""), pb = (0, Lb.b)();
      (0, Mb.useEffect)((() => {
        (0, Xb.l)()
      }), []);
      const Nb = bb => ({
        isEnabled: () => Db.plugins[bb],
        Yz: ab => {
          (0, Xb.h)({
            plugin: bb,
            enabled: ab
          }), zb({
            ...Db,
            plugins: {
              ...Db.plugins,
              [bb]: ab
            }
          })
        }
      });
      return (0, jb.jsxs)("div", {
        className: "CreateCustomLobby",
        children: [(0, jb.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, jb.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: Zb("homePage:myWorld")
          })
        }), (0, jb.jsx)(Bb.b, {
          locked: xb,
          children: (0, jb.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [(0, jb.jsx)(Pb.e, {
              value: Db.defaultGamemode,
              onChange: bb => {
                (0, Ab.y)(bb) && bb !== Db.defaultGamemode && ((0, Xb.h)({
                  defaultGamemode: bb
                }), zb({
                  ...Db,
                  defaultGamemode: bb
                }))
              },
              showAll: !1,
              disabled: xb
            }), (0, jb.jsx)(Pb.g, {
              mapTypes: Ab.j,
              value: Db.mapType,
              onChange: bb => {
                (0, Ab.B)(bb) && bb !== Db.mapType && ((0, Xb.h)({
                  mapType: bb
                }), zb({
                  ...Db,
                  mapType: bb
                }))
              },
              showAll: !1,
              disabled: xb
            }), (0, jb.jsx)(eb.d, {
              callbacks: {
                dayNight: Nb("dayNight"),
                fallDamage: Nb("fallDamage"),
                survivalGuns: Nb("survivalGuns")
              },
              disabled: xb,
              advancedMode: !1
            })]
          })
        }), (0, jb.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, jb.jsx)(vb.m, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: xb,
            onClick: () => {
              ab.requested = !0, ib(!0), Yb(!0), mb(""), (0, Xb.k)(Db), Tb.c.createPersonalWorld(Db).then((bb => {
                Yb(!1);
                const Ab = Rb(bb);
                !ab.closed && pb.current ? (Ub(), yb(bb)) : Ab || (0, Xb.d)()
              }), (bb => {
                if (console.error("Failed to create personal world:", bb), Yb(!1), ab.requested = !1, ab.closed || !pb.current) return (0, Xb.d)(), void kb(bb);
                mb(bb.message), ib(!1)
              }))
            },
            children: Zb("general:play")
          }), fb && (0, jb.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: fb
          })]
        })]
      })
    }
  },
  4631: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => eb
    });
    var Ab = Ub(984),
      Mb = Ub.n(Ab),
      Tb = Ub(4317),
      Eb = Ub(1134),
      Yb = Ub(1023);
    const Bb = [...Tb.n, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function eb(bb) {
      const {
        disabled: ab,
        hideWrapper: Ub
      } = bb, {
        t: Ab
      } = (0, Eb.A)(), eb = bb.advancedMode ? Bb.map((ab => [ab, bb.callbacks[ab]])) : Tb.n.map((ab => [ab, bb.callbacks[ab]])), Lb = (0, Yb.jsx)("div", {
        className: Mb()("PluginsGrid", {
          SectionBody: !Ub
        }),
        children: eb.map((bb => {
          let [Ub, Ab] = bb;
          return (0, Yb.jsx)(vb, {
            plugin: Ub,
            callbacks: Ab,
            disabled: ab
          }, Ub)
        }))
      });
      return Ub ? Lb : (0, Yb.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, Yb.jsx)("div", {
          className: "SectionTitle",
          children: Ab("worldBuilder:pluginsSection")
        }), Lb]
      })
    }

    function vb(bb) {
      let {
        plugin: ab,
        callbacks: {
          isEnabled: Ub,
          Yz: Ab
        },
        disabled: Tb
      } = bb;
      const {
        t: Bb
      } = (0, Eb.A)(), eb = Ub();
      return (0, Yb.jsxs)("div", {
        className: Mb()("PluginCard", {
          PluginCardEnabled: eb,
          PluginCardDisabledForm: Tb
        }),
        "data-pad-focusable": !0,
        "aria-disabled": Tb || void 0,
        onClick: () => {
          Tb || Ab(!eb)
        },
        children: [(0, Yb.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, Yb.jsx)("img", {
            src: `/textures/games/classic/customGames/${ab}.png`,
            alt: ab
          })
        }), (0, Yb.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, Yb.jsx)("div", {
            className: "PluginCardTitle",
            children: Bb(Lb[ab])
          }), (0, Yb.jsx)("div", {
            className: "PluginCardDescription",
            children: Bb(Pb[ab])
          })]
        }), (0, Yb.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: Bb(eb ? "general:on" : "general:off")
        })]
      })
    }
    const Lb = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      Pb = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  35812: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => eb,
      g: () => vb
    });
    Ub(52);
    var Ab = Ub(984),
      Mb = Ub.n(Ab),
      Tb = Ub(4317),
      Eb = Ub(307),
      Yb = Ub(1134),
      Bb = Ub(1023);

    function eb(bb) {
      let {
        value: ab,
        onChange: Ub,
        showAll: Ab,
        disabled: eb = !1
      } = bb;
      const {
        t: vb
      } = (0, Yb.A)();
      return (0, Bb.jsxs)("div", {
        className: Mb()("BloxdForm GamemodeForm", {
          BasicOptions: !Ab
        }),
        children: [(0, Bb.jsx)("div", {
          className: "SectionTitle",
          children: vb("classic:defaultGamemode")
        }), (0, Bb.jsx)("div", {
          className: "SectionBody",
          children: Tb.F.map((bb => Ab || (0, Tb.y)(bb) ? (0, Bb.jsx)("button", {
            type: "button",
            className: Mb()("WorldGamemode", {
              Selected: ab === bb
            }),
            disabled: eb,
            onClick: () => {
              Ub(bb)
            },
            style: {
              "--background-image": `url(${Eb.o[bb]})`
            },
            children: Eb.n[bb]
          }, bb) : null))
        })]
      })
    }

    function vb(bb) {
      let {
        mapTypes: ab,
        value: Ub,
        onChange: Ab,
        showAll: eb,
        disabled: vb = !1,
        children: Lb
      } = bb;
      const {
        t: Pb
      } = (0, Yb.A)();
      return (0, Bb.jsxs)("div", {
        className: Mb()("BloxdForm MapTypeForm", {
          BasicOptions: !eb
        }),
        children: [(0, Bb.jsx)("div", {
          className: "SectionTitle",
          children: Pb("customLobby:mapType")
        }), (0, Bb.jsx)("div", {
          className: "SectionBody",
          children: ab.map((bb => eb || (0, Tb.B)(bb) ? (0, Bb.jsx)("button", {
            type: "button",
            className: Mb()("MapType", {
              Selected: Ub === bb
            }),
            disabled: vb,
            onClick: () => {
              Ab(bb)
            },
            style: {
              "--background-image": `url(${Eb.g[bb]})`
            },
            children: Eb.f[bb]
          }, bb) : null))
        }), Lb]
      })
    }
  },
  4629: () => {},
  35798: () => {}
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);