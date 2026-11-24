export const id = 108;
export const ids = [108];
export const modules = {
  36565: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Lp
    });
    var Op = cp(1049),
      op = cp.n(Op),
      Ip = cp(62),
      Sp = cp(4664),
      xp = cp(1112);

    function Lp(pp) {
      let {
        locked: ip,
        children: cp
      } = pp;
      const Op = (0, Ip.useRef)(null),
        Lp = (0, Sp.c)(Op, "y");
      return (0, xp.jsx)("div", {
        ref: Op,
        className: op()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: Lp.before,
          CreateCustomLobbyBodyMoreBelow: Lp.after
        }),
        "data-pad-ignore": ip || void 0,
        children: cp
      })
    }
  },
  36652: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      showFirstWorldSetupPopup: () => Up
    });
    cp(5054), cp(36543);
    var Op = cp(4719),
      op = cp(62),
      Ip = cp(4677),
      Sp = cp(1201),
      xp = cp(1372),
      Lp = cp(36565),
      Yp = cp(5061),
      Dp = cp(1480),
      Ap = cp(3587),
      Pp = cp(36557),
      Wp = cp(4710),
      yp = cp(1112);

    function Up(pp) {
      const ip = {
        requested: !1,
        closed: !1
      };
      xp.NotificationProvider.showCustomPopup({
        body: cp => (0, yp.jsx)(wp, {
          flow: ip,
          close: cp,
          ...pp
        }),
        middleScreenPopupClassName: "CreateCustomLobbyPopup",
        onClose: () => {
          ip.closed = !0, ip.requested || (0, Wp.d)()
        }
      })
    }

    function wp(pp) {
      let {
        flow: ip,
        close: cp,
        onCreating: xp,
        onCreated: Up,
        onFailedClosed: wp,
        join: vp
      } = pp;
      const {
        t: tp
      } = (0, Sp.H)(), [Hp, dp] = (0, op.useState)(Op.s), [ep, jp] = (0, op.useState)(!1), [kp, mp] = (0, op.useState)(""), Rp = (0, Ap.b)();
      (0, op.useEffect)((() => {
        (0, Wp.n)()
      }), []);
      const qp = pp => ({
        isEnabled: () => Hp.plugins[pp],
        eC: ip => {
          (0, Wp.g)({
            plugin: pp,
            enabled: ip
          }), dp({
            ...Hp,
            plugins: {
              ...Hp.plugins,
              [pp]: ip
            }
          })
        }
      });
      return (0, yp.jsxs)("div", {
        className: "CreateCustomLobby",
        children: [(0, yp.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, yp.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: tp("homePage:myWorld")
          })
        }), (0, yp.jsx)(Lp.b, {
          locked: ep,
          children: (0, yp.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [(0, yp.jsx)(Pp.e, {
              value: Hp.defaultGamemode,
              onChange: pp => {
                (0, Op.u)(pp) && pp !== Hp.defaultGamemode && ((0, Wp.g)({
                  defaultGamemode: pp
                }), dp({
                  ...Hp,
                  defaultGamemode: pp
                }))
              },
              showAll: !1,
              disabled: ep
            }), (0, yp.jsx)(Pp.i, {
              mapTypes: Op.e,
              value: Hp.mapType,
              onChange: pp => {
                (0, Op.y)(pp) && pp !== Hp.mapType && ((0, Wp.g)({
                  mapType: pp
                }), dp({
                  ...Hp,
                  mapType: pp
                }))
              },
              showAll: !1,
              disabled: ep
            }), (0, yp.jsx)(Yp.e, {
              callbacks: {
                dayNight: qp("dayNight"),
                fallDamage: qp("fallDamage"),
                survivalGuns: qp("survivalGuns")
              },
              disabled: ep,
              advancedMode: !1
            })]
          })
        }), (0, yp.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, yp.jsx)(Dp.o, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: ep,
            onClick: () => {
              ip.requested = !0, jp(!0), xp(!0), mp(""), (0, Wp.j)(Hp), Ip.b.createPersonalWorld(Hp).then((pp => {
                xp(!1);
                const Op = Up(pp);
                !ip.closed && Rp.current ? (cp(), vp(pp)) : Op || (0, Wp.d)()
              }), (pp => {
                if (console.error("Failed to create personal world:", pp), xp(!1), ip.requested = !1, ip.closed || !Rp.current) return (0, Wp.d)(), void wp(pp);
                mp(pp.message), jp(!1)
              }))
            },
            children: tp("general:play")
          }), kp && (0, yp.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: kp
          })]
        })]
      })
    }
  },
  5061: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Yp
    });
    var Op = cp(1049),
      op = cp.n(Op),
      Ip = cp(4719),
      Sp = cp(1201),
      xp = cp(1112);
    const Lp = [...Ip.h, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function Yp(pp) {
      const {
        disabled: ip,
        hideWrapper: cp
      } = pp, {
        t: Op
      } = (0, Sp.H)(), Yp = pp.advancedMode ? Lp.map((ip => [ip, pp.callbacks[ip]])) : Ip.h.map((ip => [ip, pp.callbacks[ip]])), Ap = (0, xp.jsx)("div", {
        className: op()("PluginsGrid", {
          SectionBody: !cp
        }),
        children: Yp.map((pp => {
          let [cp, Op] = pp;
          return (0, xp.jsx)(Dp, {
            plugin: cp,
            callbacks: Op,
            disabled: ip
          }, cp)
        }))
      });
      return cp ? Ap : (0, xp.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, xp.jsx)("div", {
          className: "SectionTitle",
          children: Op("worldBuilder:pluginsSection")
        }), Ap]
      })
    }

    function Dp(pp) {
      let {
        plugin: ip,
        callbacks: {
          isEnabled: cp,
          eC: Op
        },
        disabled: Ip
      } = pp;
      const {
        t: Lp
      } = (0, Sp.H)(), Yp = cp();
      return (0, xp.jsxs)("div", {
        className: op()("PluginCard", {
          PluginCardEnabled: Yp,
          PluginCardDisabledForm: Ip
        }),
        "data-pad-focusable": !0,
        "aria-disabled": Ip || void 0,
        onClick: () => {
          Ip || Op(!Yp)
        },
        children: [(0, xp.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, xp.jsx)("img", {
            src: `/textures/games/classic/customGames/${ip}.png`,
            alt: ip
          })
        }), (0, xp.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, xp.jsx)("div", {
            className: "PluginCardTitle",
            children: Lp(Ap[ip])
          }), (0, xp.jsx)("div", {
            className: "PluginCardDescription",
            children: Lp(Pp[ip])
          })]
        }), (0, xp.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: Lp(Yp ? "general:on" : "general:off")
        })]
      })
    }
    const Ap = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      Pp = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  36557: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Yp,
      i: () => Dp
    });
    cp(62);
    var Op = cp(1049),
      op = cp.n(Op),
      Ip = cp(4719),
      Sp = cp(322),
      xp = cp(1201),
      Lp = cp(1112);

    function Yp(pp) {
      let {
        value: ip,
        onChange: cp,
        showAll: Op,
        disabled: Yp = !1
      } = pp;
      const {
        t: Dp
      } = (0, xp.H)();
      return (0, Lp.jsxs)("div", {
        className: op()("BloxdForm GamemodeForm", {
          BasicOptions: !Op
        }),
        children: [(0, Lp.jsx)("div", {
          className: "SectionTitle",
          children: Dp("classic:defaultGamemode")
        }), (0, Lp.jsx)("div", {
          className: "SectionBody",
          children: Ip.E.map((pp => Op || (0, Ip.u)(pp) ? (0, Lp.jsx)("button", {
            type: "button",
            className: op()("WorldGamemode", {
              Selected: ip === pp
            }),
            disabled: Yp,
            onClick: () => {
              cp(pp)
            },
            style: {
              "--background-image": `url(${Sp.p[pp]})`
            },
            children: Sp.o[pp]
          }, pp) : null))
        })]
      })
    }

    function Dp(pp) {
      let {
        mapTypes: ip,
        value: cp,
        onChange: Op,
        showAll: Yp,
        disabled: Dp = !1,
        children: Ap
      } = pp;
      const {
        t: Pp
      } = (0, xp.H)();
      return (0, Lp.jsxs)("div", {
        className: op()("BloxdForm MapTypeForm", {
          BasicOptions: !Yp
        }),
        children: [(0, Lp.jsx)("div", {
          className: "SectionTitle",
          children: Pp("customLobby:mapType")
        }), (0, Lp.jsx)("div", {
          className: "SectionBody",
          children: ip.map((pp => Yp || (0, Ip.y)(pp) ? (0, Lp.jsx)("button", {
            type: "button",
            className: op()("MapType", {
              Selected: cp === pp
            }),
            disabled: Dp,
            onClick: () => {
              Op(pp)
            },
            style: {
              "--background-image": `url(${Sp.k[pp]})`
            },
            children: Sp.h[pp]
          }, pp) : null))
        }), Ap]
      })
    }
  },
  5054: () => {},
  36543: () => {}
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);