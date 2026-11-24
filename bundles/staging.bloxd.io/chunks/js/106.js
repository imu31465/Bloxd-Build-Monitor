export const id = 106;
export const ids = [106];
export const modules = {
  36438: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Dm
    });
    var hm = fm(1080),
      Am = fm.n(hm),
      am = fm(59),
      xm = fm(4513),
      wm = fm(1135);

    function Dm(mm) {
      let {
        locked: Tm,
        children: fm
      } = mm;
      const hm = (0, am.useRef)(null),
        Dm = (0, xm.b)(hm, "y");
      return (0, wm.jsx)("div", {
        ref: hm,
        className: Am()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: Dm.before,
          CreateCustomLobbyBodyMoreBelow: Dm.after
        }),
        "data-pad-ignore": Tm || void 0,
        children: fm
      })
    }
  },
  36508: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      showFirstWorldSetupPopup: () => Ym
    });
    fm(4887), fm(36423);
    var hm = fm(4564),
      Am = fm(59),
      am = fm(4523),
      xm = fm(1208),
      wm = fm(1354),
      Dm = fm(36438),
      im = fm(4889),
      Rm = fm(1454),
      pm = fm(3486),
      Em = fm(36435),
      om = fm(4562),
      Om = fm(1135);

    function Ym(mm) {
      const Tm = {
        requested: !1,
        closed: !1
      };
      wm.NotificationProvider.showCustomPopup({
        body: fm => (0, Om.jsx)(qm, {
          flow: Tm,
          close: fm,
          ...mm
        }),
        middleScreenPopupClassName: "CreateCustomLobbyPopup",
        onClose: () => {
          Tm.closed = !0, Tm.requested || (0, om.g)()
        }
      })
    }

    function qm(mm) {
      let {
        flow: Tm,
        close: fm,
        onCreating: wm,
        onCreated: Ym,
        onFailedClosed: qm,
        join: jm
      } = mm;
      const {
        t: Vm
      } = (0, xm.A)(), [Im, Km] = (0, Am.useState)(hm.s), [Qm, nm] = (0, Am.useState)(!1), [Jm, cm] = (0, Am.useState)(""), zm = (0, pm.c)();
      (0, Am.useEffect)((() => {
        (0, om.o)()
      }), []);
      const Zm = mm => ({
        isEnabled: () => Im.plugins[mm],
        Dk: Tm => {
          (0, om.i)({
            plugin: mm,
            enabled: Tm
          }), Km({
            ...Im,
            plugins: {
              ...Im.plugins,
              [mm]: Tm
            }
          })
        }
      });
      return (0, Om.jsxs)("div", {
        className: "CreateCustomLobby",
        children: [(0, Om.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, Om.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: Vm("homePage:myWorld")
          })
        }), (0, Om.jsx)(Dm.c, {
          locked: Qm,
          children: (0, Om.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [(0, Om.jsx)(Em.d, {
              value: Im.defaultGamemode,
              onChange: mm => {
                (0, hm.t)(mm) && mm !== Im.defaultGamemode && ((0, om.i)({
                  defaultGamemode: mm
                }), Km({
                  ...Im,
                  defaultGamemode: mm
                }))
              },
              showAll: !1,
              disabled: Qm
            }), (0, Om.jsx)(Em.g, {
              mapTypes: hm.g,
              value: Im.mapType,
              onChange: mm => {
                (0, hm.w)(mm) && mm !== Im.mapType && ((0, om.i)({
                  mapType: mm
                }), Km({
                  ...Im,
                  mapType: mm
                }))
              },
              showAll: !1,
              disabled: Qm
            }), (0, Om.jsx)(im.c, {
              callbacks: {
                dayNight: Zm("dayNight"),
                fallDamage: Zm("fallDamage"),
                survivalGuns: Zm("survivalGuns")
              },
              disabled: Qm,
              advancedMode: !1
            })]
          })
        }), (0, Om.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, Om.jsx)(Rm.m, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: Qm,
            onClick: () => {
              Tm.requested = !0, nm(!0), wm(!0), cm(""), (0, om.l)(Im), am.b.createPersonalWorld(Im).then((mm => {
                wm(!1);
                const hm = Ym(mm);
                !Tm.closed && zm.current ? (fm(), jm(mm)) : hm || (0, om.g)()
              }), (mm => {
                if (console.error("Failed to create personal world:", mm), wm(!1), Tm.requested = !1, Tm.closed || !zm.current) return (0, om.g)(), void qm(mm);
                cm(mm.message), nm(!1)
              }))
            },
            children: Vm("general:play")
          }), Jm && (0, Om.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: Jm
          })]
        })]
      })
    }
  },
  4889: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => im
    });
    var hm = fm(1080),
      Am = fm.n(hm),
      am = fm(4564),
      xm = fm(1208),
      wm = fm(1135);
    const Dm = [...am.h, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function im(mm) {
      const {
        disabled: Tm,
        hideWrapper: fm
      } = mm, {
        t: hm
      } = (0, xm.A)(), im = mm.advancedMode ? Dm.map((Tm => [Tm, mm.callbacks[Tm]])) : am.h.map((Tm => [Tm, mm.callbacks[Tm]])), pm = (0, wm.jsx)("div", {
        className: Am()("PluginsGrid", {
          SectionBody: !fm
        }),
        children: im.map((mm => {
          let [fm, hm] = mm;
          return (0, wm.jsx)(Rm, {
            plugin: fm,
            callbacks: hm,
            disabled: Tm
          }, fm)
        }))
      });
      return fm ? pm : (0, wm.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, wm.jsx)("div", {
          className: "SectionTitle",
          children: hm("worldBuilder:pluginsSection")
        }), pm]
      })
    }

    function Rm(mm) {
      let {
        plugin: Tm,
        callbacks: {
          isEnabled: fm,
          Dk: hm
        },
        disabled: am
      } = mm;
      const {
        t: Dm
      } = (0, xm.A)(), im = fm();
      return (0, wm.jsxs)("div", {
        className: Am()("PluginCard", {
          PluginCardEnabled: im,
          PluginCardDisabledForm: am
        }),
        "data-pad-focusable": !0,
        "aria-disabled": am || void 0,
        onClick: () => {
          am || hm(!im)
        },
        children: [(0, wm.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, wm.jsx)("img", {
            src: `/textures/games/classic/customGames/${Tm}.png`,
            alt: Tm
          })
        }), (0, wm.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, wm.jsx)("div", {
            className: "PluginCardTitle",
            children: Dm(pm[Tm])
          }), (0, wm.jsx)("div", {
            className: "PluginCardDescription",
            children: Dm(Em[Tm])
          })]
        }), (0, wm.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: Dm(im ? "general:on" : "general:off")
        })]
      })
    }
    const pm = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      Em = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  36435: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => im,
      g: () => Rm
    });
    fm(59);
    var hm = fm(1080),
      Am = fm.n(hm),
      am = fm(4564),
      xm = fm(339),
      wm = fm(1208),
      Dm = fm(1135);

    function im(mm) {
      let {
        value: Tm,
        onChange: fm,
        showAll: hm,
        disabled: im = !1
      } = mm;
      const {
        t: Rm
      } = (0, wm.A)();
      return (0, Dm.jsxs)("div", {
        className: Am()("BloxdForm GamemodeForm", {
          BasicOptions: !hm
        }),
        children: [(0, Dm.jsx)("div", {
          className: "SectionTitle",
          children: Rm("classic:defaultGamemode")
        }), (0, Dm.jsx)("div", {
          className: "SectionBody",
          children: am.B.map((mm => hm || (0, am.t)(mm) ? (0, Dm.jsx)("button", {
            type: "button",
            className: Am()("WorldGamemode", {
              Selected: Tm === mm
            }),
            disabled: im,
            onClick: () => {
              fm(mm)
            },
            style: {
              "--background-image": `url(${xm.r[mm]})`
            },
            children: xm.q[mm]
          }, mm) : null))
        })]
      })
    }

    function Rm(mm) {
      let {
        mapTypes: Tm,
        value: fm,
        onChange: hm,
        showAll: im,
        disabled: Rm = !1,
        children: pm
      } = mm;
      const {
        t: Em
      } = (0, wm.A)();
      return (0, Dm.jsxs)("div", {
        className: Am()("BloxdForm MapTypeForm", {
          BasicOptions: !im
        }),
        children: [(0, Dm.jsx)("div", {
          className: "SectionTitle",
          children: Em("customLobby:mapType")
        }), (0, Dm.jsx)("div", {
          className: "SectionBody",
          children: Tm.map((mm => im || (0, am.w)(mm) ? (0, Dm.jsx)("button", {
            type: "button",
            className: Am()("MapType", {
              Selected: fm === mm
            }),
            disabled: Rm,
            onClick: () => {
              hm(mm)
            },
            style: {
              "--background-image": `url(${xm.j[mm]})`
            },
            children: xm.h[mm]
          }, mm) : null))
        }), pm]
      })
    }
  },
  4887: () => {},
  36423: () => {}
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);