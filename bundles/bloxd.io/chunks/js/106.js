export const id = 106;
export const ids = [106];
export const modules = {
  36355: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => ak
    });
    var Xk = Ik(1055),
      Tk = Ik.n(Xk),
      ik = Ik(58),
      yk = Ik(4570),
      lk = Ik(1096);

    function ak(kk) {
      let {
        locked: Fk,
        children: Ik
      } = kk;
      const Xk = (0, ik.useRef)(null),
        ak = (0, yk.e)(Xk, "y");
      return (0, lk.jsx)("div", {
        ref: Xk,
        className: Tk()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: ak.before,
          CreateCustomLobbyBodyMoreBelow: ak.after
        }),
        "data-pad-ignore": Fk || void 0,
        children: Ik
      })
    }
  },
  36428: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      showFirstWorldSetupPopup: () => wk
    });
    Ik(4936), Ik(36335);
    var Xk = Ik(4612),
      Tk = Ik(58),
      ik = Ik(4584),
      yk = Ik(1179),
      lk = Ik(1324),
      ak = Ik(36355),
      qk = Ik(4938),
      Lk = Ik(1406),
      tk = Ik(3428),
      Zk = Ik(36347),
      jk = Ik(4610),
      ek = Ik(1096);

    function wk(kk) {
      const Fk = {
        requested: !1,
        closed: !1
      };
      lk.NotificationProvider.showCustomPopup({
        body: Ik => (0, ek.jsx)(Hk, {
          flow: Fk,
          close: Ik,
          ...kk
        }),
        middleScreenPopupClassName: "CreateCustomLobbyPopup",
        onClose: () => {
          Fk.closed = !0, Fk.requested || (0, jk.f)()
        }
      })
    }

    function Hk(kk) {
      let {
        flow: Fk,
        close: Ik,
        onCreating: lk,
        onCreated: wk,
        onFailedClosed: Hk,
        join: Jk
      } = kk;
      const {
        t: xk
      } = (0, yk.y)(), [Pk, Kk] = (0, Tk.useState)(Xk.q), [Qk, sk] = (0, Tk.useState)(!1), [Vk, zk] = (0, Tk.useState)(""), Sk = (0, tk.d)();
      (0, Tk.useEffect)((() => {
        (0, jk.o)()
      }), []);
      const vk = kk => ({
        isEnabled: () => Pk.plugins[kk],
        Av: Fk => {
          (0, jk.j)({
            plugin: kk,
            enabled: Fk
          }), Kk({
            ...Pk,
            plugins: {
              ...Pk.plugins,
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
            children: xk("homePage:myWorld")
          })
        }), (0, ek.jsx)(ak.d, {
          locked: Qk,
          children: (0, ek.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [(0, ek.jsx)(Zk.e, {
              value: Pk.defaultGamemode,
              onChange: kk => {
                (0, Xk.r)(kk) && kk !== Pk.defaultGamemode && ((0, jk.j)({
                  defaultGamemode: kk
                }), Kk({
                  ...Pk,
                  defaultGamemode: kk
                }))
              },
              showAll: !1,
              disabled: Qk
            }), (0, ek.jsx)(Zk.g, {
              mapTypes: Xk.h,
              value: Pk.mapType,
              onChange: kk => {
                (0, Xk.u)(kk) && kk !== Pk.mapType && ((0, jk.j)({
                  mapType: kk
                }), Kk({
                  ...Pk,
                  mapType: kk
                }))
              },
              showAll: !1,
              disabled: Qk
            }), (0, ek.jsx)(qk.e, {
              callbacks: {
                dayNight: vk("dayNight"),
                fallDamage: vk("fallDamage"),
                survivalGuns: vk("survivalGuns")
              },
              disabled: Qk,
              advancedMode: !1
            })]
          })
        }), (0, ek.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, ek.jsx)(Lk.m, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: Qk,
            onClick: () => {
              Fk.requested = !0, sk(!0), lk(!0), zk(""), (0, jk.k)(Pk), ik.c.createPersonalWorld(Pk).then((kk => {
                lk(!1);
                const Xk = wk(kk);
                !Fk.closed && Sk.current ? (Ik(), Jk(kk)) : Xk || (0, jk.f)()
              }), (kk => {
                if (console.error("Failed to create personal world:", kk), lk(!1), Fk.requested = !1, Fk.closed || !Sk.current) return (0, jk.f)(), void Hk(kk);
                zk(kk.message), sk(!1)
              }))
            },
            children: xk("general:play")
          }), Vk && (0, ek.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: Vk
          })]
        })]
      })
    }
  },
  4938: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => qk
    });
    var Xk = Ik(1055),
      Tk = Ik.n(Xk),
      ik = Ik(4612),
      yk = Ik(1179),
      lk = Ik(1096);
    const ak = [...ik.i, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function qk(kk) {
      const {
        disabled: Fk,
        hideWrapper: Ik
      } = kk, {
        t: Xk
      } = (0, yk.y)(), qk = kk.advancedMode ? ak.map((Fk => [Fk, kk.callbacks[Fk]])) : ik.i.map((Fk => [Fk, kk.callbacks[Fk]])), tk = (0, lk.jsx)("div", {
        className: Tk()("PluginsGrid", {
          SectionBody: !Ik
        }),
        children: qk.map((kk => {
          let [Ik, Xk] = kk;
          return (0, lk.jsx)(Lk, {
            plugin: Ik,
            callbacks: Xk,
            disabled: Fk
          }, Ik)
        }))
      });
      return Ik ? tk : (0, lk.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, lk.jsx)("div", {
          className: "SectionTitle",
          children: Xk("worldBuilder:pluginsSection")
        }), tk]
      })
    }

    function Lk(kk) {
      let {
        plugin: Fk,
        callbacks: {
          isEnabled: Ik,
          Av: Xk
        },
        disabled: ik
      } = kk;
      const {
        t: ak
      } = (0, yk.y)(), qk = Ik();
      return (0, lk.jsxs)("div", {
        className: Tk()("PluginCard", {
          PluginCardEnabled: qk,
          PluginCardDisabledForm: ik
        }),
        "data-pad-focusable": !0,
        "aria-disabled": ik || void 0,
        onClick: () => {
          ik || Xk(!qk)
        },
        children: [(0, lk.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, lk.jsx)("img", {
            src: `/textures/games/classic/customGames/${Fk}.png`,
            alt: Fk
          })
        }), (0, lk.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, lk.jsx)("div", {
            className: "PluginCardTitle",
            children: ak(tk[Fk])
          }), (0, lk.jsx)("div", {
            className: "PluginCardDescription",
            children: ak(Zk[Fk])
          })]
        }), (0, lk.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: ak(qk ? "general:on" : "general:off")
        })]
      })
    }
    const tk = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      Zk = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  36347: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => qk,
      g: () => Lk
    });
    Ik(58);
    var Xk = Ik(1055),
      Tk = Ik.n(Xk),
      ik = Ik(4612),
      yk = Ik(318),
      lk = Ik(1179),
      ak = Ik(1096);

    function qk(kk) {
      let {
        value: Fk,
        onChange: Ik,
        showAll: Xk,
        disabled: qk = !1
      } = kk;
      const {
        t: Lk
      } = (0, lk.y)();
      return (0, ak.jsxs)("div", {
        className: Tk()("BloxdForm GamemodeForm", {
          BasicOptions: !Xk
        }),
        children: [(0, ak.jsx)("div", {
          className: "SectionTitle",
          children: Lk("classic:defaultGamemode")
        }), (0, ak.jsx)("div", {
          className: "SectionBody",
          children: ik.x.map((kk => Xk || (0, ik.r)(kk) ? (0, ak.jsx)("button", {
            type: "button",
            className: Tk()("WorldGamemode", {
              Selected: Fk === kk
            }),
            disabled: qk,
            onClick: () => {
              Ik(kk)
            },
            style: {
              "--background-image": `url(${yk.x[kk]})`
            },
            children: yk.t[kk]
          }, kk) : null))
        })]
      })
    }

    function Lk(kk) {
      let {
        mapTypes: Fk,
        value: Ik,
        onChange: Xk,
        showAll: qk,
        disabled: Lk = !1,
        children: tk
      } = kk;
      const {
        t: Zk
      } = (0, lk.y)();
      return (0, ak.jsxs)("div", {
        className: Tk()("BloxdForm MapTypeForm", {
          BasicOptions: !qk
        }),
        children: [(0, ak.jsx)("div", {
          className: "SectionTitle",
          children: Zk("customLobby:mapType")
        }), (0, ak.jsx)("div", {
          className: "SectionBody",
          children: Fk.map((kk => qk || (0, ik.u)(kk) ? (0, ak.jsx)("button", {
            type: "button",
            className: Tk()("MapType", {
              Selected: Ik === kk
            }),
            disabled: Lk,
            onClick: () => {
              Xk(kk)
            },
            style: {
              "--background-image": `url(${yk.p[kk]})`
            },
            children: yk.n[kk]
          }, kk) : null))
        }), tk]
      })
    }
  },
  4936: () => {},
  36335: () => {}
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);