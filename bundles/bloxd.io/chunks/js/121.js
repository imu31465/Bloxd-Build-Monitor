export const id = 121;
export const ids = [121];
export const modules = {
  37792: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => fr
    });
    var Zr = Qr(1155),
      Wr = Qr.n(Zr),
      ar = Qr(72),
      jr = Qr(5338),
      Ir = Qr(1338);

    function fr(rr) {
      let {
        locked: Sr,
        children: Qr
      } = rr;
      const Zr = (0, ar.useRef)(null),
        fr = (0, jr.b)(Zr, "y");
      return (0, Ir.jsx)("div", {
        ref: Zr,
        className: Wr()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: fr.before,
          CreateCustomLobbyBodyMoreBelow: fr.after
        }),
        "data-pad-ignore": Sr || void 0,
        children: Qr
      })
    }
  },
  37971: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      showFirstWorldSetupPopup: () => tr
    });
    Qr(5753), Qr(37774);
    var Zr = Qr(5384),
      Wr = Qr(72),
      ar = Qr(5347),
      jr = Qr(1251),
      Ir = Qr(1475),
      fr = Qr(37792),
      Er = Qr(5762),
      pr = Qr(1576),
      xr = Qr(4746),
      mr = Qr(37789),
      Nr = Qr(5380),
      Ur = Qr(1338);

    function tr(rr) {
      const Sr = {
        requested: !1,
        closed: !1
      };
      Ir.NotificationProvider.showCustomPopup({
        body: Qr => (0, Ur.jsx)(hr, {
          flow: Sr,
          close: Qr,
          ...rr
        }),
        middleScreenPopupClassName: "CreateCustomLobbyPopup",
        onClose: () => {
          Sr.closed = !0, Sr.requested || (0, Nr.f)()
        }
      })
    }

    function hr(rr) {
      let {
        flow: Sr,
        close: Qr,
        onCreating: Ir,
        onCreated: tr,
        onFailedClosed: hr,
        join: zr
      } = rr;
      const {
        t: Yr
      } = (0, jr.E)(), [nr, er] = (0, Wr.useState)(Zr.r), [Kr, yr] = (0, Wr.useState)(!1), [Br, Tr] = (0, Wr.useState)(""), vr = (0, xr.b)();
      (0, Wr.useEffect)((() => {
        (0, Nr.l)()
      }), []);
      const Or = rr => ({
        isEnabled: () => nr.plugins[rr],
        VK: Sr => {
          (0, Nr.i)({
            plugin: rr,
            enabled: Sr
          }), er({
            ...nr,
            plugins: {
              ...nr.plugins,
              [rr]: Sr
            }
          })
        }
      });
      return (0, Ur.jsxs)("div", {
        className: "CreateCustomLobby",
        children: [(0, Ur.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, Ur.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: Yr("homePage:myWorld")
          })
        }), (0, Ur.jsx)(fr.c, {
          locked: Kr,
          children: (0, Ur.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [(0, Ur.jsx)(mr.b, {
              value: nr.defaultGamemode,
              onChange: rr => {
                (0, Zr.s)(rr) && rr !== nr.defaultGamemode && ((0, Nr.i)({
                  defaultGamemode: rr
                }), er({
                  ...nr,
                  defaultGamemode: rr
                }))
              },
              showAll: !1,
              disabled: Kr
            }), (0, Ur.jsx)(mr.f, {
              mapTypes: Zr.e,
              value: nr.mapType,
              onChange: rr => {
                (0, Zr.t)(rr) && rr !== nr.mapType && ((0, Nr.i)({
                  mapType: rr
                }), er({
                  ...nr,
                  mapType: rr
                }))
              },
              showAll: !1,
              disabled: Kr
            }), (0, Ur.jsx)(Er.d, {
              callbacks: {
                dayNight: Or("dayNight"),
                fallDamage: Or("fallDamage"),
                survivalGuns: Or("survivalGuns")
              },
              disabled: Kr,
              advancedMode: !1
            })]
          })
        }), (0, Ur.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, Ur.jsx)(pr.p, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: Kr,
            onClick: () => {
              Sr.requested = !0, yr(!0), Ir(!0), Tr(""), (0, Nr.k)(nr), ar.c.createPersonalWorld(nr).then((rr => {
                Ir(!1);
                const Zr = tr(rr);
                !Sr.closed && vr.current ? (Qr(), zr(rr)) : Zr || (0, Nr.f)()
              }), (rr => {
                if (console.error("Failed to create personal world:", rr), Ir(!1), Sr.requested = !1, Sr.closed || !vr.current) return (0, Nr.f)(), void hr(rr);
                Tr(rr.message), yr(!1)
              }))
            },
            children: Yr("general:play")
          }), Br && (0, Ur.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: Br
          })]
        })]
      })
    }
  },
  5762: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Er
    });
    var Zr = Qr(1155),
      Wr = Qr.n(Zr),
      ar = Qr(5384),
      jr = Qr(1251),
      Ir = Qr(1338);
    const fr = [...ar.i, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function Er(rr) {
      const {
        disabled: Sr,
        hideWrapper: Qr
      } = rr, {
        t: Zr
      } = (0, jr.E)(), Er = rr.advancedMode ? fr.map((Sr => [Sr, rr.callbacks[Sr]])) : ar.i.map((Sr => [Sr, rr.callbacks[Sr]])), xr = (0, Ir.jsx)("div", {
        className: Wr()("PluginsGrid", {
          SectionBody: !Qr
        }),
        children: Er.map((rr => {
          let [Qr, Zr] = rr;
          return (0, Ir.jsx)(pr, {
            plugin: Qr,
            callbacks: Zr,
            disabled: Sr
          }, Qr)
        }))
      });
      return Qr ? xr : (0, Ir.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, Ir.jsx)("div", {
          className: "SectionTitle",
          children: Zr("worldBuilder:pluginsSection")
        }), xr]
      })
    }

    function pr(rr) {
      let {
        plugin: Sr,
        callbacks: {
          isEnabled: Qr,
          VK: Zr
        },
        disabled: ar
      } = rr;
      const {
        t: fr
      } = (0, jr.E)(), Er = Qr();
      return (0, Ir.jsxs)("div", {
        className: Wr()("PluginCard", {
          PluginCardEnabled: Er,
          PluginCardDisabledForm: ar
        }),
        "data-pad-focusable": !0,
        "aria-disabled": ar || void 0,
        onClick: () => {
          ar || Zr(!Er)
        },
        children: [(0, Ir.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, Ir.jsx)("img", {
            src: `/textures/games/classic/customGames/${Sr}.png`,
            alt: Sr
          })
        }), (0, Ir.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, Ir.jsx)("div", {
            className: "PluginCardTitle",
            children: fr(xr[Sr])
          }), (0, Ir.jsx)("div", {
            className: "PluginCardDescription",
            children: fr(mr[Sr])
          })]
        }), (0, Ir.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: fr(Er ? "general:on" : "general:off")
        })]
      })
    }
    const xr = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      mr = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  37789: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Er,
      f: () => pr
    });
    Qr(72);
    var Zr = Qr(1155),
      Wr = Qr.n(Zr),
      ar = Qr(5384),
      jr = Qr(360),
      Ir = Qr(1251),
      fr = Qr(1338);

    function Er(rr) {
      let {
        value: Sr,
        onChange: Qr,
        showAll: Zr,
        disabled: Er = !1
      } = rr;
      const {
        t: pr
      } = (0, Ir.E)();
      return (0, fr.jsxs)("div", {
        className: Wr()("BloxdForm GamemodeForm", {
          BasicOptions: !Zr
        }),
        children: [(0, fr.jsx)("div", {
          className: "SectionTitle",
          children: pr("classic:defaultGamemode")
        }), (0, fr.jsx)("div", {
          className: "SectionBody",
          children: ar.A.map((rr => Zr || (0, ar.s)(rr) ? (0, fr.jsx)("button", {
            type: "button",
            className: Wr()("WorldGamemode", {
              Selected: Sr === rr
            }),
            disabled: Er,
            onClick: () => {
              Qr(rr)
            },
            style: {
              "--background-image": `url(${jr.u[rr]})`
            },
            children: jr.t[rr]
          }, rr) : null))
        })]
      })
    }

    function pr(rr) {
      let {
        mapTypes: Sr,
        value: Qr,
        onChange: Zr,
        showAll: Er,
        disabled: pr = !1,
        children: xr
      } = rr;
      const {
        t: mr
      } = (0, Ir.E)();
      return (0, fr.jsxs)("div", {
        className: Wr()("BloxdForm MapTypeForm", {
          BasicOptions: !Er
        }),
        children: [(0, fr.jsx)("div", {
          className: "SectionTitle",
          children: mr("customLobby:mapType")
        }), (0, fr.jsx)("div", {
          className: "SectionBody",
          children: Sr.map((rr => Er || (0, ar.t)(rr) ? (0, fr.jsx)("button", {
            type: "button",
            className: Wr()("MapType", {
              Selected: Qr === rr
            }),
            disabled: pr,
            onClick: () => {
              Zr(rr)
            },
            style: {
              "--background-image": `url(${jr.n[rr]})`
            },
            children: jr.j[rr]
          }, rr) : null))
        }), xr]
      })
    }
  },
  5753: () => {},
  37774: () => {}
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);