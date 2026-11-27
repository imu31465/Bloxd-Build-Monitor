export const id = 119;
export const ids = [119];
export const modules = {
  37147: (ee, ie, He) => {
    He.d(ie, {
      c: () => Fe
    });
    var ye = He(1053),
      be = He.n(ye),
      Me = He(59),
      Ke = He(4968),
      Ue = He(1228);

    function Fe(ee) {
      let {
        locked: ie,
        children: He
      } = ee;
      const ye = (0, Me.useRef)(null),
        Fe = (0, Ke.c)(ye, "y");
      return (0, Ue.jsx)("div", {
        ref: ye,
        className: be()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: Fe.before,
          CreateCustomLobbyBodyMoreBelow: Fe.after
        }),
        "data-pad-ignore": ie || void 0,
        children: He
      })
    }
  },
  37222: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      showFirstWorldSetupPopup: () => Te
    });
    He(5420), He(37132);
    var ye = He(5018),
      be = He(59),
      Me = He(4974),
      Ke = He(1127),
      Ue = He(1340),
      Fe = He(37147),
      Je = He(5424),
      oe = He(1438),
      Re = He(3871),
      ke = He(37144),
      qe = He(5015),
      fe = He(1228);

    function Te(ee) {
      const ie = {
        requested: !1,
        closed: !1
      };
      Ue.NotificationProvider.showCustomPopup({
        body: He => (0, fe.jsx)(pe, {
          flow: ie,
          close: He,
          ...ee
        }),
        middleScreenPopupClassName: "CreateCustomLobbyPopup",
        onClose: () => {
          ie.closed = !0, ie.requested || (0, qe.c)()
        }
      })
    }

    function pe(ee) {
      let {
        flow: ie,
        close: He,
        onCreating: Ue,
        onCreated: Te,
        onFailedClosed: pe,
        join: Xe
      } = ee;
      const {
        t: ze
      } = (0, Ke.v)(), [Be, Ee] = (0, be.useState)(ye.t), [ge, Oe] = (0, be.useState)(!1), [de, We] = (0, be.useState)(""), te = (0, Re.c)();
      (0, be.useEffect)((() => {
        (0, qe.j)()
      }), []);
      const Ze = ee => ({
        isEnabled: () => Be.plugins[ee],
        JY: ie => {
          (0, qe.d)({
            plugin: ee,
            enabled: ie
          }), Ee({
            ...Be,
            plugins: {
              ...Be.plugins,
              [ee]: ie
            }
          })
        }
      });
      return (0, fe.jsxs)("div", {
        className: "CreateCustomLobby",
        children: [(0, fe.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, fe.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: ze("homePage:myWorld")
          })
        }), (0, fe.jsx)(Fe.c, {
          locked: ge,
          children: (0, fe.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [(0, fe.jsx)(ke.c, {
              value: Be.defaultGamemode,
              onChange: ee => {
                (0, ye.w)(ee) && ee !== Be.defaultGamemode && ((0, qe.d)({
                  defaultGamemode: ee
                }), Ee({
                  ...Be,
                  defaultGamemode: ee
                }))
              },
              showAll: !1,
              disabled: ge
            }), (0, fe.jsx)(ke.g, {
              mapTypes: ye.l,
              value: Be.mapType,
              onChange: ee => {
                (0, ye.y)(ee) && ee !== Be.mapType && ((0, qe.d)({
                  mapType: ee
                }), Ee({
                  ...Be,
                  mapType: ee
                }))
              },
              showAll: !1,
              disabled: ge
            }), (0, fe.jsx)(Je.c, {
              callbacks: {
                dayNight: Ze("dayNight"),
                fallDamage: Ze("fallDamage"),
                survivalGuns: Ze("survivalGuns")
              },
              disabled: ge,
              advancedMode: !1
            })]
          })
        }), (0, fe.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, fe.jsx)(oe.m, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: ge,
            onClick: () => {
              ie.requested = !0, Oe(!0), Ue(!0), We(""), (0, qe.h)(Be), Me.c.createPersonalWorld(Be).then((ee => {
                Ue(!1);
                const ye = Te(ee);
                !ie.closed && te.current ? (He(), Xe(ee)) : ye || (0, qe.c)()
              }), (ee => {
                if (console.error("Failed to create personal world:", ee), Ue(!1), ie.requested = !1, ie.closed || !te.current) return (0, qe.c)(), void pe(ee);
                We(ee.message), Oe(!1)
              }))
            },
            children: ze("general:play")
          }), de && (0, fe.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: de
          })]
        })]
      })
    }
  },
  5424: (ee, ie, He) => {
    He.d(ie, {
      c: () => Je
    });
    var ye = He(1053),
      be = He.n(ye),
      Me = He(5018),
      Ke = He(1127),
      Ue = He(1228);
    const Fe = [...Me.m, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function Je(ee) {
      const {
        disabled: ie,
        hideWrapper: He
      } = ee, {
        t: ye
      } = (0, Ke.v)(), Je = ee.advancedMode ? Fe.map((ie => [ie, ee.callbacks[ie]])) : Me.m.map((ie => [ie, ee.callbacks[ie]])), Re = (0, Ue.jsx)("div", {
        className: be()("PluginsGrid", {
          SectionBody: !He
        }),
        children: Je.map((ee => {
          let [He, ye] = ee;
          return (0, Ue.jsx)(oe, {
            plugin: He,
            callbacks: ye,
            disabled: ie
          }, He)
        }))
      });
      return He ? Re : (0, Ue.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, Ue.jsx)("div", {
          className: "SectionTitle",
          children: ye("worldBuilder:pluginsSection")
        }), Re]
      })
    }

    function oe(ee) {
      let {
        plugin: ie,
        callbacks: {
          isEnabled: He,
          JY: ye
        },
        disabled: Me
      } = ee;
      const {
        t: Fe
      } = (0, Ke.v)(), Je = He();
      return (0, Ue.jsxs)("div", {
        className: be()("PluginCard", {
          PluginCardEnabled: Je,
          PluginCardDisabledForm: Me
        }),
        "data-pad-focusable": !0,
        "aria-disabled": Me || void 0,
        onClick: () => {
          Me || ye(!Je)
        },
        children: [(0, Ue.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, Ue.jsx)("img", {
            src: `/textures/games/classic/customGames/${ie}.png`,
            alt: ie
          })
        }), (0, Ue.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, Ue.jsx)("div", {
            className: "PluginCardTitle",
            children: Fe(Re[ie])
          }), (0, Ue.jsx)("div", {
            className: "PluginCardDescription",
            children: Fe(ke[ie])
          })]
        }), (0, Ue.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: Fe(Je ? "general:on" : "general:off")
        })]
      })
    }
    const Re = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      ke = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  37144: (ee, ie, He) => {
    He.d(ie, {
      c: () => Je,
      g: () => oe
    });
    He(59);
    var ye = He(1053),
      be = He.n(ye),
      Me = He(5018),
      Ke = He(335),
      Ue = He(1127),
      Fe = He(1228);

    function Je(ee) {
      let {
        value: ie,
        onChange: He,
        showAll: ye,
        disabled: Je = !1
      } = ee;
      const {
        t: oe
      } = (0, Ue.v)();
      return (0, Fe.jsxs)("div", {
        className: be()("BloxdForm GamemodeForm", {
          BasicOptions: !ye
        }),
        children: [(0, Fe.jsx)("div", {
          className: "SectionTitle",
          children: oe("classic:defaultGamemode")
        }), (0, Fe.jsx)("div", {
          className: "SectionBody",
          children: Me.B.map((ee => ye || (0, Me.w)(ee) ? (0, Fe.jsx)("button", {
            type: "button",
            className: be()("WorldGamemode", {
              Selected: ie === ee
            }),
            disabled: Je,
            onClick: () => {
              He(ee)
            },
            style: {
              "--background-image": `url(${Ke.x[ee]})`
            },
            children: Ke.v[ee]
          }, ee) : null))
        })]
      })
    }

    function oe(ee) {
      let {
        mapTypes: ie,
        value: He,
        onChange: ye,
        showAll: Je,
        disabled: oe = !1,
        children: Re
      } = ee;
      const {
        t: ke
      } = (0, Ue.v)();
      return (0, Fe.jsxs)("div", {
        className: be()("BloxdForm MapTypeForm", {
          BasicOptions: !Je
        }),
        children: [(0, Fe.jsx)("div", {
          className: "SectionTitle",
          children: ke("customLobby:mapType")
        }), (0, Fe.jsx)("div", {
          className: "SectionBody",
          children: ie.map((ee => Je || (0, Me.y)(ee) ? (0, Fe.jsx)("button", {
            type: "button",
            className: be()("MapType", {
              Selected: He === ee
            }),
            disabled: oe,
            onClick: () => {
              ye(ee)
            },
            style: {
              "--background-image": `url(${Ke.o[ee]})`
            },
            children: Ke.l[ee]
          }, ee) : null))
        }), Re]
      })
    }
  },
  5420: () => {},
  37132: () => {}
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);