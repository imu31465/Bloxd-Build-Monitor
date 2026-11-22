export const id = 106;
export const ids = [106];
export const modules = {
  35917: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Pk
    });
    var Dk = ik(1021),
      fk = ik.n(Dk),
      Sk = ik(60),
      bk = ik(4519),
      rk = ik(1066);

    function Pk(kk) {
      let {
        locked: ek,
        children: ik
      } = kk;
      const Dk = (0, Sk.useRef)(null),
        Pk = (0, bk.e)(Dk, "y");
      return (0, rk.jsx)("div", {
        ref: Dk,
        className: fk()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: Pk.before,
          CreateCustomLobbyBodyMoreBelow: Pk.after
        }),
        "data-pad-ignore": ek || void 0,
        children: ik
      })
    }
  },
  35958: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      showFirstWorldSetupPopup: () => Hk
    });
    ik(4872), ik(35905);
    var Dk = ik(4563),
      fk = ik(60),
      Sk = ik(4528),
      bk = ik(1172),
      rk = ik(1333),
      Pk = ik(35917),
      mk = ik(4874),
      Mk = ik(1410),
      Kk = ik(3447),
      xk = ik(35913),
      nk = ik(4555),
      Uk = ik(1066);

    function Hk(kk) {
      const ek = {
        requested: !1,
        closed: !1
      };
      rk.NotificationProvider.showCustomPopup({
        body: ik => (0, Uk.jsx)(wk, {
          flow: ek,
          close: ik,
          ...kk
        }),
        middleScreenPopupClassName: "CreateCustomLobbyPopup",
        onClose: () => {
          ek.closed = !0, ek.requested || (0, nk.f)()
        }
      })
    }

    function wk(kk) {
      let {
        flow: ek,
        close: ik,
        onCreating: rk,
        onCreated: Hk,
        onFailedClosed: wk,
        join: lk
      } = kk;
      const {
        t: pk
      } = (0, bk.D)(), [yk, Yk] = (0, fk.useState)(Dk.w), [Lk, Ck] = (0, fk.useState)(!1), [Ak, jk] = (0, fk.useState)(""), sk = (0, Kk.e)();
      (0, fk.useEffect)((() => {
        (0, nk.n)()
      }), []);
      const dk = kk => ({
        isEnabled: () => yk.plugins[kk],
        bV: ek => {
          (0, nk.i)({
            plugin: kk,
            enabled: ek
          }), Yk({
            ...yk,
            plugins: {
              ...yk.plugins,
              [kk]: ek
            }
          })
        }
      });
      return (0, Uk.jsxs)("div", {
        className: "CreateCustomLobby",
        children: [(0, Uk.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, Uk.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: pk("homePage:myWorld")
          })
        }), (0, Uk.jsx)(Pk.b, {
          locked: Lk,
          children: (0, Uk.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [(0, Uk.jsx)(xk.b, {
              value: yk.defaultGamemode,
              onChange: kk => {
                (0, Dk.z)(kk) && kk !== yk.defaultGamemode && ((0, nk.i)({
                  defaultGamemode: kk
                }), Yk({
                  ...yk,
                  defaultGamemode: kk
                }))
              },
              showAll: !1,
              disabled: Lk
            }), (0, Uk.jsx)(xk.d, {
              mapTypes: Dk.j,
              value: yk.mapType,
              onChange: kk => {
                (0, Dk.A)(kk) && kk !== yk.mapType && ((0, nk.i)({
                  mapType: kk
                }), Yk({
                  ...yk,
                  mapType: kk
                }))
              },
              showAll: !1,
              disabled: Lk
            }), (0, Uk.jsx)(mk.e, {
              callbacks: {
                dayNight: dk("dayNight"),
                fallDamage: dk("fallDamage"),
                survivalGuns: dk("survivalGuns")
              },
              disabled: Lk,
              advancedMode: !1
            })]
          })
        }), (0, Uk.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, Uk.jsx)(Mk.r, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: Lk,
            onClick: () => {
              ek.requested = !0, Ck(!0), rk(!0), jk(""), (0, nk.j)(yk), Sk.d.createPersonalWorld(yk).then((kk => {
                rk(!1);
                const Dk = Hk(kk);
                !ek.closed && sk.current ? (ik(), lk(kk)) : Dk || (0, nk.f)()
              }), (kk => {
                if (console.error("Failed to create personal world:", kk), rk(!1), ek.requested = !1, ek.closed || !sk.current) return (0, nk.f)(), void wk(kk);
                jk(kk.message), Ck(!1)
              }))
            },
            children: pk("general:play")
          }), Ak && (0, Uk.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: Ak
          })]
        })]
      })
    }
  },
  4874: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => mk
    });
    var Dk = ik(1021),
      fk = ik.n(Dk),
      Sk = ik(4563),
      bk = ik(1172),
      rk = ik(1066);
    const Pk = [...Sk.k, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function mk(kk) {
      const {
        disabled: ek,
        hideWrapper: ik
      } = kk, {
        t: Dk
      } = (0, bk.D)(), mk = kk.advancedMode ? Pk.map((ek => [ek, kk.callbacks[ek]])) : Sk.k.map((ek => [ek, kk.callbacks[ek]])), Kk = (0, rk.jsx)("div", {
        className: fk()("PluginsGrid", {
          SectionBody: !ik
        }),
        children: mk.map((kk => {
          let [ik, Dk] = kk;
          return (0, rk.jsx)(Mk, {
            plugin: ik,
            callbacks: Dk,
            disabled: ek
          }, ik)
        }))
      });
      return ik ? Kk : (0, rk.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, rk.jsx)("div", {
          className: "SectionTitle",
          children: Dk("worldBuilder:pluginsSection")
        }), Kk]
      })
    }

    function Mk(kk) {
      let {
        plugin: ek,
        callbacks: {
          isEnabled: ik,
          bV: Dk
        },
        disabled: Sk
      } = kk;
      const {
        t: Pk
      } = (0, bk.D)(), mk = ik();
      return (0, rk.jsxs)("div", {
        className: fk()("PluginCard", {
          PluginCardEnabled: mk,
          PluginCardDisabledForm: Sk
        }),
        "data-pad-focusable": !0,
        "aria-disabled": Sk || void 0,
        onClick: () => {
          Sk || Dk(!mk)
        },
        children: [(0, rk.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, rk.jsx)("img", {
            src: `/textures/games/classic/customGames/${ek}.png`,
            alt: ek
          })
        }), (0, rk.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, rk.jsx)("div", {
            className: "PluginCardTitle",
            children: Pk(Kk[ek])
          }), (0, rk.jsx)("div", {
            className: "PluginCardDescription",
            children: Pk(xk[ek])
          })]
        }), (0, rk.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: Pk(mk ? "general:on" : "general:off")
        })]
      })
    }
    const Kk = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      xk = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  35913: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => mk,
      d: () => Mk
    });
    ik(60);
    var Dk = ik(1021),
      fk = ik.n(Dk),
      Sk = ik(4563),
      bk = ik(302),
      rk = ik(1172),
      Pk = ik(1066);

    function mk(kk) {
      let {
        value: ek,
        onChange: ik,
        showAll: Dk,
        disabled: mk = !1
      } = kk;
      const {
        t: Mk
      } = (0, rk.D)();
      return (0, Pk.jsxs)("div", {
        className: fk()("BloxdForm GamemodeForm", {
          BasicOptions: !Dk
        }),
        children: [(0, Pk.jsx)("div", {
          className: "SectionTitle",
          children: Mk("classic:defaultGamemode")
        }), (0, Pk.jsx)("div", {
          className: "SectionBody",
          children: Sk.G.map((kk => Dk || (0, Sk.z)(kk) ? (0, Pk.jsx)("button", {
            type: "button",
            className: fk()("WorldGamemode", {
              Selected: ek === kk
            }),
            disabled: mk,
            onClick: () => {
              ik(kk)
            },
            style: {
              "--background-image": `url(${bk.w[kk]})`
            },
            children: bk.t[kk]
          }, kk) : null))
        })]
      })
    }

    function Mk(kk) {
      let {
        mapTypes: ek,
        value: ik,
        onChange: Dk,
        showAll: mk,
        disabled: Mk = !1,
        children: Kk
      } = kk;
      const {
        t: xk
      } = (0, rk.D)();
      return (0, Pk.jsxs)("div", {
        className: fk()("BloxdForm MapTypeForm", {
          BasicOptions: !mk
        }),
        children: [(0, Pk.jsx)("div", {
          className: "SectionTitle",
          children: xk("customLobby:mapType")
        }), (0, Pk.jsx)("div", {
          className: "SectionBody",
          children: ek.map((kk => mk || (0, Sk.A)(kk) ? (0, Pk.jsx)("button", {
            type: "button",
            className: fk()("MapType", {
              Selected: ik === kk
            }),
            disabled: Mk,
            onClick: () => {
              Dk(kk)
            },
            style: {
              "--background-image": `url(${bk.n[kk]})`
            },
            children: bk.l[kk]
          }, kk) : null))
        }), Kk]
      })
    }
  },
  4872: () => {},
  35905: () => {}
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);