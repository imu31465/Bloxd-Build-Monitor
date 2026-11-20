export const id = 104;
export const ids = [104];
export const modules = {
  36235: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Nu
    });
    var Eu = yu(1035),
      Ku = yu.n(Eu),
      Qu = yu(64),
      mu = yu(4347),
      Ju = yu(1079);

    function Nu(uu) {
      let {
        locked: Ru,
        children: yu
      } = uu;
      const Eu = (0, Qu.useRef)(null),
        Nu = (0, mu.d)(Eu, "y");
      return (0, Ju.jsx)("div", {
        ref: Eu,
        className: Ku()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: Nu.before,
          CreateCustomLobbyBodyMoreBelow: Nu.after
        }),
        "data-pad-ignore": Ru || void 0,
        children: yu
      })
    }
  },
  36289: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      showFirstWorldSetupPopup: () => pu
    });
    yu(4725), yu(36225);
    var Eu = yu(4409),
      Ku = yu(64),
      Qu = yu(4362),
      mu = yu(1170),
      Ju = yu(1311),
      Nu = yu(36235),
      Xu = yu(4728),
      Vu = yu(1408),
      ru = yu(3307),
      Bu = yu(36233),
      xu = yu(4396),
      Su = yu(1079);

    function pu(uu) {
      const Ru = {
        requested: !1,
        closed: !1
      };
      Ju.NotificationProvider.showCustomPopup({
        body: yu => (0, Su.jsx)(Tu, {
          flow: Ru,
          close: yu,
          ...uu
        }),
        middleScreenPopupClassName: "CreateCustomLobbyPopup",
        onClose: () => {
          Ru.closed = !0, Ru.requested || (0, xu.c)()
        }
      })
    }

    function Tu(uu) {
      let {
        flow: Ru,
        close: yu,
        onCreating: Ju,
        onCreated: pu,
        onFailedClosed: Tu,
        join: Wu
      } = uu;
      const {
        t: ju
      } = (0, mu.E)(), [Hu, du] = (0, Ku.useState)(Eu.w), [bu, Cu] = (0, Ku.useState)(!1), [ku, eu] = (0, Ku.useState)(""), Au = (0, ru.b)();
      (0, Ku.useEffect)((() => {
        (0, xu.k)()
      }), []);
      const Du = uu => ({
        isEnabled: () => Hu.plugins[uu],
        tC: Ru => {
          (0, xu.e)({
            plugin: uu,
            enabled: Ru
          }), du({
            ...Hu,
            plugins: {
              ...Hu.plugins,
              [uu]: Ru
            }
          })
        }
      });
      return (0, Su.jsxs)("div", {
        className: "CreateCustomLobby",
        children: [(0, Su.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, Su.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: ju("homePage:myWorld")
          })
        }), (0, Su.jsx)(Nu.e, {
          locked: bu,
          children: (0, Su.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [(0, Su.jsx)(Bu.d, {
              value: Hu.defaultGamemode,
              onChange: uu => {
                (0, Eu.y)(uu) && uu !== Hu.defaultGamemode && ((0, xu.e)({
                  defaultGamemode: uu
                }), du({
                  ...Hu,
                  defaultGamemode: uu
                }))
              },
              showAll: !1,
              disabled: bu
            }), (0, Su.jsx)(Bu.g, {
              mapTypes: Eu.k,
              value: Hu.mapType,
              onChange: uu => {
                (0, Eu.B)(uu) && uu !== Hu.mapType && ((0, xu.e)({
                  mapType: uu
                }), du({
                  ...Hu,
                  mapType: uu
                }))
              },
              showAll: !1,
              disabled: bu
            }), (0, Su.jsx)(Xu.e, {
              callbacks: {
                dayNight: Du("dayNight"),
                fallDamage: Du("fallDamage"),
                survivalGuns: Du("survivalGuns")
              },
              disabled: bu,
              advancedMode: !1
            })]
          })
        }), (0, Su.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, Su.jsx)(Vu.l, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: bu,
            onClick: () => {
              Ru.requested = !0, Cu(!0), Ju(!0), eu(""), (0, xu.h)(Hu), Qu.e.createPersonalWorld(Hu).then((uu => {
                Ju(!1);
                const Eu = pu(uu);
                !Ru.closed && Au.current ? (yu(), Wu(uu)) : Eu || (0, xu.c)()
              }), (uu => {
                if (console.error("Failed to create personal world:", uu), Ju(!1), Ru.requested = !1, Ru.closed || !Au.current) return (0, xu.c)(), void Tu(uu);
                eu(uu.message), Cu(!1)
              }))
            },
            children: ju("general:play")
          }), ku && (0, Su.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: ku
          })]
        })]
      })
    }
  },
  4728: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Xu
    });
    var Eu = yu(1035),
      Ku = yu.n(Eu),
      Qu = yu(4409),
      mu = yu(1170),
      Ju = yu(1079);
    const Nu = [...Qu.n, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function Xu(uu) {
      const {
        disabled: Ru,
        hideWrapper: yu
      } = uu, {
        t: Eu
      } = (0, mu.E)(), Xu = uu.advancedMode ? Nu.map((Ru => [Ru, uu.callbacks[Ru]])) : Qu.n.map((Ru => [Ru, uu.callbacks[Ru]])), ru = (0, Ju.jsx)("div", {
        className: Ku()("PluginsGrid", {
          SectionBody: !yu
        }),
        children: Xu.map((uu => {
          let [yu, Eu] = uu;
          return (0, Ju.jsx)(Vu, {
            plugin: yu,
            callbacks: Eu,
            disabled: Ru
          }, yu)
        }))
      });
      return yu ? ru : (0, Ju.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, Ju.jsx)("div", {
          className: "SectionTitle",
          children: Eu("worldBuilder:pluginsSection")
        }), ru]
      })
    }

    function Vu(uu) {
      let {
        plugin: Ru,
        callbacks: {
          isEnabled: yu,
          tC: Eu
        },
        disabled: Qu
      } = uu;
      const {
        t: Nu
      } = (0, mu.E)(), Xu = yu();
      return (0, Ju.jsxs)("div", {
        className: Ku()("PluginCard", {
          PluginCardEnabled: Xu,
          PluginCardDisabledForm: Qu
        }),
        "data-pad-focusable": !0,
        "aria-disabled": Qu || void 0,
        onClick: () => {
          Qu || Eu(!Xu)
        },
        children: [(0, Ju.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, Ju.jsx)("img", {
            src: `/textures/games/classic/customGames/${Ru}.png`,
            alt: Ru
          })
        }), (0, Ju.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, Ju.jsx)("div", {
            className: "PluginCardTitle",
            children: Nu(ru[Ru])
          }), (0, Ju.jsx)("div", {
            className: "PluginCardDescription",
            children: Nu(Bu[Ru])
          })]
        }), (0, Ju.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: Nu(Xu ? "general:on" : "general:off")
        })]
      })
    }
    const ru = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      Bu = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  36233: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Xu,
      g: () => Vu
    });
    yu(64);
    var Eu = yu(1035),
      Ku = yu.n(Eu),
      Qu = yu(4409),
      mu = yu(330),
      Ju = yu(1170),
      Nu = yu(1079);

    function Xu(uu) {
      let {
        value: Ru,
        onChange: yu,
        showAll: Eu,
        disabled: Xu = !1
      } = uu;
      const {
        t: Vu
      } = (0, Ju.E)();
      return (0, Nu.jsxs)("div", {
        className: Ku()("BloxdForm GamemodeForm", {
          BasicOptions: !Eu
        }),
        children: [(0, Nu.jsx)("div", {
          className: "SectionTitle",
          children: Vu("classic:defaultGamemode")
        }), (0, Nu.jsx)("div", {
          className: "SectionBody",
          children: Qu.E.map((uu => Eu || (0, Qu.y)(uu) ? (0, Nu.jsx)("button", {
            type: "button",
            className: Ku()("WorldGamemode", {
              Selected: Ru === uu
            }),
            disabled: Xu,
            onClick: () => {
              yu(uu)
            },
            style: {
              "--background-image": `url(${mu.w[uu]})`
            },
            children: mu.v[uu]
          }, uu) : null))
        })]
      })
    }

    function Vu(uu) {
      let {
        mapTypes: Ru,
        value: yu,
        onChange: Eu,
        showAll: Xu,
        disabled: Vu = !1,
        children: ru
      } = uu;
      const {
        t: Bu
      } = (0, Ju.E)();
      return (0, Nu.jsxs)("div", {
        className: Ku()("BloxdForm MapTypeForm", {
          BasicOptions: !Xu
        }),
        children: [(0, Nu.jsx)("div", {
          className: "SectionTitle",
          children: Bu("customLobby:mapType")
        }), (0, Nu.jsx)("div", {
          className: "SectionBody",
          children: Ru.map((uu => Xu || (0, Qu.B)(uu) ? (0, Nu.jsx)("button", {
            type: "button",
            className: Ku()("MapType", {
              Selected: yu === uu
            }),
            disabled: Vu,
            onClick: () => {
              Eu(uu)
            },
            style: {
              "--background-image": `url(${mu.r[uu]})`
            },
            children: mu.o[uu]
          }, uu) : null))
        }), ru]
      })
    }
  },
  4725: () => {},
  36225: () => {}
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);