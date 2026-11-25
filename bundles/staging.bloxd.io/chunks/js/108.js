export const id = 108;
export const ids = [108];
export const modules = {
  36751: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => qu
    });
    var su = ju(1105),
      Uu = ju.n(su),
      Zu = ju(58),
      Xu = ju(4756),
      lu = ju(1154);

    function qu(uu) {
      let {
        locked: Eu,
        children: ju
      } = uu;
      const su = (0, Zu.useRef)(null),
        qu = (0, Xu.b)(su, "y");
      return (0, lu.jsx)("div", {
        ref: su,
        className: Uu()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: qu.before,
          CreateCustomLobbyBodyMoreBelow: qu.after
        }),
        "data-pad-ignore": Eu || void 0,
        children: ju
      })
    }
  },
  36815: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      showFirstWorldSetupPopup: () => Yu
    });
    ju(5105), ju(36737);
    var su = ju(4809),
      Uu = ju(58),
      Zu = ju(4769),
      Xu = ju(1244),
      lu = ju(1405),
      qu = ju(36751),
      fu = ju(5110),
      Cu = ju(1506),
      bu = ju(3678),
      cu = ju(36748),
      Nu = ju(4801),
      Ou = ju(1154);

    function Yu(uu) {
      const Eu = {
        requested: !1,
        closed: !1
      };
      lu.NotificationProvider.showCustomPopup({
        body: ju => (0, Ou.jsx)(hu, {
          flow: Eu,
          close: ju,
          ...uu
        }),
        middleScreenPopupClassName: "CreateCustomLobbyPopup",
        onClose: () => {
          Eu.closed = !0, Eu.requested || (0, Nu.c)()
        }
      })
    }

    function hu(uu) {
      let {
        flow: Eu,
        close: ju,
        onCreating: lu,
        onCreated: Yu,
        onFailedClosed: hu,
        join: Du
      } = uu;
      const {
        t: gu
      } = (0, Xu.A)(), [Mu, eu] = (0, Uu.useState)(su.v), [Gu, pu] = (0, Uu.useState)(!1), [wu, Ju] = (0, Uu.useState)(""), du = (0, bu.c)();
      (0, Uu.useEffect)((() => {
        (0, Nu.k)()
      }), []);
      const au = uu => ({
        isEnabled: () => Mu.plugins[uu],
        Wk: Eu => {
          (0, Nu.e)({
            plugin: uu,
            enabled: Eu
          }), eu({
            ...Mu,
            plugins: {
              ...Mu.plugins,
              [uu]: Eu
            }
          })
        }
      });
      return (0, Ou.jsxs)("div", {
        className: "CreateCustomLobby",
        children: [(0, Ou.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, Ou.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: gu("homePage:myWorld")
          })
        }), (0, Ou.jsx)(qu.c, {
          locked: Gu,
          children: (0, Ou.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [(0, Ou.jsx)(cu.d, {
              value: Mu.defaultGamemode,
              onChange: uu => {
                (0, su.z)(uu) && uu !== Mu.defaultGamemode && ((0, Nu.e)({
                  defaultGamemode: uu
                }), eu({
                  ...Mu,
                  defaultGamemode: uu
                }))
              },
              showAll: !1,
              disabled: Gu
            }), (0, Ou.jsx)(cu.g, {
              mapTypes: su.i,
              value: Mu.mapType,
              onChange: uu => {
                (0, su.D)(uu) && uu !== Mu.mapType && ((0, Nu.e)({
                  mapType: uu
                }), eu({
                  ...Mu,
                  mapType: uu
                }))
              },
              showAll: !1,
              disabled: Gu
            }), (0, Ou.jsx)(fu.d, {
              callbacks: {
                dayNight: au("dayNight"),
                fallDamage: au("fallDamage"),
                survivalGuns: au("survivalGuns")
              },
              disabled: Gu,
              advancedMode: !1
            })]
          })
        }), (0, Ou.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, Ou.jsx)(Cu.p, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: Gu,
            onClick: () => {
              Eu.requested = !0, pu(!0), lu(!0), Ju(""), (0, Nu.g)(Mu), Zu.d.createPersonalWorld(Mu).then((uu => {
                lu(!1);
                const su = Yu(uu);
                !Eu.closed && du.current ? (ju(), Du(uu)) : su || (0, Nu.c)()
              }), (uu => {
                if (console.error("Failed to create personal world:", uu), lu(!1), Eu.requested = !1, Eu.closed || !du.current) return (0, Nu.c)(), void hu(uu);
                Ju(uu.message), pu(!1)
              }))
            },
            children: gu("general:play")
          }), wu && (0, Ou.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: wu
          })]
        })]
      })
    }
  },
  5110: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => fu
    });
    var su = ju(1105),
      Uu = ju.n(su),
      Zu = ju(4809),
      Xu = ju(1244),
      lu = ju(1154);
    const qu = [...Zu.l, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function fu(uu) {
      const {
        disabled: Eu,
        hideWrapper: ju
      } = uu, {
        t: su
      } = (0, Xu.A)(), fu = uu.advancedMode ? qu.map((Eu => [Eu, uu.callbacks[Eu]])) : Zu.l.map((Eu => [Eu, uu.callbacks[Eu]])), bu = (0, lu.jsx)("div", {
        className: Uu()("PluginsGrid", {
          SectionBody: !ju
        }),
        children: fu.map((uu => {
          let [ju, su] = uu;
          return (0, lu.jsx)(Cu, {
            plugin: ju,
            callbacks: su,
            disabled: Eu
          }, ju)
        }))
      });
      return ju ? bu : (0, lu.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, lu.jsx)("div", {
          className: "SectionTitle",
          children: su("worldBuilder:pluginsSection")
        }), bu]
      })
    }

    function Cu(uu) {
      let {
        plugin: Eu,
        callbacks: {
          isEnabled: ju,
          Wk: su
        },
        disabled: Zu
      } = uu;
      const {
        t: qu
      } = (0, Xu.A)(), fu = ju();
      return (0, lu.jsxs)("div", {
        className: Uu()("PluginCard", {
          PluginCardEnabled: fu,
          PluginCardDisabledForm: Zu
        }),
        "data-pad-focusable": !0,
        "aria-disabled": Zu || void 0,
        onClick: () => {
          Zu || su(!fu)
        },
        children: [(0, lu.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, lu.jsx)("img", {
            src: `/textures/games/classic/customGames/${Eu}.png`,
            alt: Eu
          })
        }), (0, lu.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, lu.jsx)("div", {
            className: "PluginCardTitle",
            children: qu(bu[Eu])
          }), (0, lu.jsx)("div", {
            className: "PluginCardDescription",
            children: qu(cu[Eu])
          })]
        }), (0, lu.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: qu(fu ? "general:on" : "general:off")
        })]
      })
    }
    const bu = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      cu = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  36748: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => fu,
      g: () => Cu
    });
    ju(58);
    var su = ju(1105),
      Uu = ju.n(su),
      Zu = ju(4809),
      Xu = ju(337),
      lu = ju(1244),
      qu = ju(1154);

    function fu(uu) {
      let {
        value: Eu,
        onChange: ju,
        showAll: su,
        disabled: fu = !1
      } = uu;
      const {
        t: Cu
      } = (0, lu.A)();
      return (0, qu.jsxs)("div", {
        className: Uu()("BloxdForm GamemodeForm", {
          BasicOptions: !su
        }),
        children: [(0, qu.jsx)("div", {
          className: "SectionTitle",
          children: Cu("classic:defaultGamemode")
        }), (0, qu.jsx)("div", {
          className: "SectionBody",
          children: Zu.G.map((uu => su || (0, Zu.z)(uu) ? (0, qu.jsx)("button", {
            type: "button",
            className: Uu()("WorldGamemode", {
              Selected: Eu === uu
            }),
            disabled: fu,
            onClick: () => {
              ju(uu)
            },
            style: {
              "--background-image": `url(${Xu.v[uu]})`
            },
            children: Xu.r[uu]
          }, uu) : null))
        })]
      })
    }

    function Cu(uu) {
      let {
        mapTypes: Eu,
        value: ju,
        onChange: su,
        showAll: fu,
        disabled: Cu = !1,
        children: bu
      } = uu;
      const {
        t: cu
      } = (0, lu.A)();
      return (0, qu.jsxs)("div", {
        className: Uu()("BloxdForm MapTypeForm", {
          BasicOptions: !fu
        }),
        children: [(0, qu.jsx)("div", {
          className: "SectionTitle",
          children: cu("customLobby:mapType")
        }), (0, qu.jsx)("div", {
          className: "SectionBody",
          children: Eu.map((uu => fu || (0, Zu.D)(uu) ? (0, qu.jsx)("button", {
            type: "button",
            className: Uu()("MapType", {
              Selected: ju === uu
            }),
            disabled: Cu,
            onClick: () => {
              su(uu)
            },
            style: {
              "--background-image": `url(${Xu.k[uu]})`
            },
            children: Xu.j[uu]
          }, uu) : null))
        }), bu]
      })
    }
  },
  5105: () => {},
  36737: () => {}
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);