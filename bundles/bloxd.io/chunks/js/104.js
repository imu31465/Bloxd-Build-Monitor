export const id = 104;
export const ids = [104];
export const modules = {
  36091: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => wk
    });
    var Rk = Bk(1020),
      tk = Bk.n(Rk),
      ak = Bk(61),
      Xk = Bk(4309),
      bk = Bk(1069);

    function wk(kk) {
      let {
        locked: Fk,
        children: Bk
      } = kk;
      const Rk = (0, ak.useRef)(null),
        wk = (0, Xk.b)(Rk, "y");
      return (0, bk.jsx)("div", {
        ref: Rk,
        className: tk()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: wk.before,
          CreateCustomLobbyBodyMoreBelow: wk.after
        }),
        "data-pad-ignore": Fk || void 0,
        children: Bk
      })
    }
  },
  36162: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      showFirstWorldSetupPopup: () => yk
    });
    Bk(4645), Bk(36068);
    var Rk = Bk(4366),
      tk = Bk(61),
      ak = Bk(4324),
      Xk = Bk(1149),
      bk = Bk(1300),
      wk = Bk(36091),
      dk = Bk(4650),
      sk = Bk(1389),
      Vk = Bk(3294),
      Jk = Bk(36083),
      Ak = Bk(4357),
      ek = Bk(1069);

    function yk(kk) {
      const Fk = {
        requested: !1,
        closed: !1
      };
      bk.NotificationProvider.showCustomPopup({
        body: Bk => (0, ek.jsx)(fk, {
          flow: Fk,
          close: Bk,
          ...kk
        }),
        middleScreenPopupClassName: "CreateCustomLobbyPopup",
        onClose: () => {
          Fk.closed = !0, Fk.requested || (0, Ak.i)()
        }
      })
    }

    function fk(kk) {
      let {
        flow: Fk,
        close: Bk,
        onCreating: bk,
        onCreated: yk,
        onFailedClosed: fk,
        join: mk
      } = kk;
      const {
        t: Wk
      } = (0, Xk.x)(), [vk, ik] = (0, tk.useState)(Rk.t), [Yk, Lk] = (0, tk.useState)(!1), [Ok, Ek] = (0, tk.useState)(""), Sk = (0, Vk.d)();
      (0, tk.useEffect)((() => {
        (0, Ak.m)()
      }), []);
      const Nk = kk => ({
        isEnabled: () => vk.plugins[kk],
        lY: Fk => {
          (0, Ak.k)({
            plugin: kk,
            enabled: Fk
          }), ik({
            ...vk,
            plugins: {
              ...vk.plugins,
              [kk]: Fk
            }
          })
        }
      });
      return (0, ek.jsxs)("div", {
        className: "CreateCustomLobby",
        children: [(0, ek.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, ek.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: Wk("homePage:myWorld")
          })
        }), (0, ek.jsx)(wk.c, {
          locked: Yk,
          children: (0, ek.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [(0, ek.jsx)(Jk.c, {
              value: vk.defaultGamemode,
              onChange: kk => {
                (0, Rk.w)(kk) && kk !== vk.defaultGamemode && ((0, Ak.k)({
                  defaultGamemode: kk
                }), ik({
                  ...vk,
                  defaultGamemode: kk
                }))
              },
              showAll: !1,
              disabled: Yk
            }), (0, ek.jsx)(Jk.d, {
              mapTypes: Rk.i,
              value: vk.mapType,
              onChange: kk => {
                (0, Rk.x)(kk) && kk !== vk.mapType && ((0, Ak.k)({
                  mapType: kk
                }), ik({
                  ...vk,
                  mapType: kk
                }))
              },
              showAll: !1,
              disabled: Yk
            }), (0, ek.jsx)(dk.b, {
              callbacks: {
                dayNight: Nk("dayNight"),
                fallDamage: Nk("fallDamage"),
                survivalGuns: Nk("survivalGuns")
              },
              disabled: Yk,
              advancedMode: !1
            })]
          })
        }), (0, ek.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, ek.jsx)(sk.o, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: Yk,
            onClick: () => {
              Fk.requested = !0, Lk(!0), bk(!0), Ek(""), (0, Ak.l)(vk), ak.c.createPersonalWorld(vk).then((kk => {
                bk(!1);
                const Rk = yk(kk);
                !Fk.closed && Sk.current ? (Bk(), mk(kk)) : Rk || (0, Ak.i)()
              }), (kk => {
                if (console.error("Failed to create personal world:", kk), bk(!1), Fk.requested = !1, Fk.closed || !Sk.current) return (0, Ak.i)(), void fk(kk);
                Ek(kk.message), Lk(!1)
              }))
            },
            children: Wk("general:play")
          }), Ok && (0, ek.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: Ok
          })]
        })]
      })
    }
  },
  4650: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => dk
    });
    var Rk = Bk(1020),
      tk = Bk.n(Rk),
      ak = Bk(4366),
      Xk = Bk(1149),
      bk = Bk(1069);
    const wk = [...ak.j, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function dk(kk) {
      const {
        disabled: Fk,
        hideWrapper: Bk
      } = kk, {
        t: Rk
      } = (0, Xk.x)(), dk = kk.advancedMode ? wk.map((Fk => [Fk, kk.callbacks[Fk]])) : ak.j.map((Fk => [Fk, kk.callbacks[Fk]])), Vk = (0, bk.jsx)("div", {
        className: tk()("PluginsGrid", {
          SectionBody: !Bk
        }),
        children: dk.map((kk => {
          let [Bk, Rk] = kk;
          return (0, bk.jsx)(sk, {
            plugin: Bk,
            callbacks: Rk,
            disabled: Fk
          }, Bk)
        }))
      });
      return Bk ? Vk : (0, bk.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, bk.jsx)("div", {
          className: "SectionTitle",
          children: Rk("worldBuilder:pluginsSection")
        }), Vk]
      })
    }

    function sk(kk) {
      let {
        plugin: Fk,
        callbacks: {
          isEnabled: Bk,
          lY: Rk
        },
        disabled: ak
      } = kk;
      const {
        t: wk
      } = (0, Xk.x)(), dk = Bk();
      return (0, bk.jsxs)("div", {
        className: tk()("PluginCard", {
          PluginCardEnabled: dk,
          PluginCardDisabledForm: ak
        }),
        "data-pad-focusable": !0,
        "aria-disabled": ak || void 0,
        onClick: () => {
          ak || Rk(!dk)
        },
        children: [(0, bk.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, bk.jsx)("img", {
            src: `/textures/games/classic/customGames/${Fk}.png`,
            alt: Fk
          })
        }), (0, bk.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, bk.jsx)("div", {
            className: "PluginCardTitle",
            children: wk(Vk[Fk])
          }), (0, bk.jsx)("div", {
            className: "PluginCardDescription",
            children: wk(Jk[Fk])
          })]
        }), (0, bk.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: wk(dk ? "general:on" : "general:off")
        })]
      })
    }
    const Vk = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      Jk = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  36083: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => dk,
      d: () => sk
    });
    Bk(61);
    var Rk = Bk(1020),
      tk = Bk.n(Rk),
      ak = Bk(4366),
      Xk = Bk(279),
      bk = Bk(1149),
      wk = Bk(1069);

    function dk(kk) {
      let {
        value: Fk,
        onChange: Bk,
        showAll: Rk,
        disabled: dk = !1
      } = kk;
      const {
        t: sk
      } = (0, bk.x)();
      return (0, wk.jsxs)("div", {
        className: tk()("BloxdForm GamemodeForm", {
          BasicOptions: !Rk
        }),
        children: [(0, wk.jsx)("div", {
          className: "SectionTitle",
          children: sk("classic:defaultGamemode")
        }), (0, wk.jsx)("div", {
          className: "SectionBody",
          children: ak.C.map((kk => Rk || (0, ak.w)(kk) ? (0, wk.jsx)("button", {
            type: "button",
            className: tk()("WorldGamemode", {
              Selected: Fk === kk
            }),
            disabled: dk,
            onClick: () => {
              Bk(kk)
            },
            style: {
              "--background-image": `url(${Xk.t[kk]})`
            },
            children: Xk.r[kk]
          }, kk) : null))
        })]
      })
    }

    function sk(kk) {
      let {
        mapTypes: Fk,
        value: Bk,
        onChange: Rk,
        showAll: dk,
        disabled: sk = !1,
        children: Vk
      } = kk;
      const {
        t: Jk
      } = (0, bk.x)();
      return (0, wk.jsxs)("div", {
        className: tk()("BloxdForm MapTypeForm", {
          BasicOptions: !dk
        }),
        children: [(0, wk.jsx)("div", {
          className: "SectionTitle",
          children: Jk("customLobby:mapType")
        }), (0, wk.jsx)("div", {
          className: "SectionBody",
          children: Fk.map((kk => dk || (0, ak.x)(kk) ? (0, wk.jsx)("button", {
            type: "button",
            className: tk()("MapType", {
              Selected: Bk === kk
            }),
            disabled: sk,
            onClick: () => {
              Rk(kk)
            },
            style: {
              "--background-image": `url(${Xk.o[kk]})`
            },
            children: Xk.k[kk]
          }, kk) : null))
        }), Vk]
      })
    }
  },
  4645: () => {},
  36068: () => {}
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);