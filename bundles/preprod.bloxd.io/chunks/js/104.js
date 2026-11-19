export const id = 104;
export const ids = [104];
export const modules = {
  35852: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => tz
    });
    var Ez = bz(1038),
      nz = bz.n(Ez),
      iz = bz(56),
      lz = bz(4327),
      Mz = bz(1089);

    function tz(zz) {
      let {
        locked: uz,
        children: bz
      } = zz;
      const Ez = (0, iz.useRef)(null),
        tz = (0, lz.e)(Ez, "y");
      return (0, Mz.jsx)("div", {
        ref: Ez,
        className: nz()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: tz.before,
          CreateCustomLobbyBodyMoreBelow: tz.after
        }),
        "data-pad-ignore": uz || void 0,
        children: bz
      })
    }
  },
  35916: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      showFirstWorldSetupPopup: () => Rz
    });
    bz(4700), bz(35838);
    var Ez = bz(4385),
      nz = bz(56),
      iz = bz(4335),
      lz = bz(1181),
      Mz = bz(1322),
      tz = bz(35852),
      Hz = bz(4702),
      Oz = bz(1419),
      pz = bz(3238),
      dz = bz(35845),
      Fz = bz(4372),
      Zz = bz(1089);

    function Rz(zz) {
      const uz = {
        requested: !1,
        closed: !1
      };
      Mz.NotificationProvider.showCustomPopup({
        body: bz => (0, Zz.jsx)(Kz, {
          flow: uz,
          close: bz,
          ...zz
        }),
        middleScreenPopupClassName: "CreateCustomLobbyPopup",
        onClose: () => {
          uz.closed = !0, uz.requested || (0, Fz.f)()
        }
      })
    }

    function Kz(zz) {
      let {
        flow: uz,
        close: bz,
        onCreating: Mz,
        onCreated: Rz,
        onFailedClosed: Kz,
        join: wz
      } = zz;
      const {
        t: Xz
      } = (0, lz.F)(), [fz, sz] = (0, nz.useState)(Ez.A), [rz, oz] = (0, nz.useState)(!1), [Nz, vz] = (0, nz.useState)(""), xz = (0, pz.e)();
      (0, nz.useEffect)((() => {
        (0, Fz.n)()
      }), []);
      const Jz = zz => ({
        isEnabled: () => fz.plugins[zz],
        Zx: uz => {
          (0, Fz.i)({
            plugin: zz,
            enabled: uz
          }), sz({
            ...fz,
            plugins: {
              ...fz.plugins,
              [zz]: uz
            }
          })
        }
      });
      return (0, Zz.jsxs)("div", {
        className: "CreateCustomLobby",
        children: [(0, Zz.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, Zz.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: Xz("homePage:myWorld")
          })
        }), (0, Zz.jsx)(tz.e, {
          locked: rz,
          children: (0, Zz.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [(0, Zz.jsx)(dz.d, {
              value: fz.defaultGamemode,
              onChange: zz => {
                (0, Ez.C)(zz) && zz !== fz.defaultGamemode && ((0, Fz.i)({
                  defaultGamemode: zz
                }), sz({
                  ...fz,
                  defaultGamemode: zz
                }))
              },
              showAll: !1,
              disabled: rz
            }), (0, Zz.jsx)(dz.f, {
              mapTypes: Ez.k,
              value: fz.mapType,
              onChange: zz => {
                (0, Ez.E)(zz) && zz !== fz.mapType && ((0, Fz.i)({
                  mapType: zz
                }), sz({
                  ...fz,
                  mapType: zz
                }))
              },
              showAll: !1,
              disabled: rz
            }), (0, Zz.jsx)(Hz.b, {
              callbacks: {
                dayNight: Jz("dayNight"),
                fallDamage: Jz("fallDamage"),
                survivalGuns: Jz("survivalGuns")
              },
              disabled: rz,
              advancedMode: !1
            })]
          })
        }), (0, Zz.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, Zz.jsx)(Oz.q, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: rz,
            onClick: () => {
              uz.requested = !0, oz(!0), Mz(!0), vz(""), (0, Fz.j)(fz), iz.e.createPersonalWorld(fz).then((zz => {
                Mz(!1);
                const Ez = Rz(zz);
                !uz.closed && xz.current ? (bz(), wz(zz)) : Ez || (0, Fz.f)()
              }), (zz => {
                if (console.error("Failed to create personal world:", zz), Mz(!1), uz.requested = !1, uz.closed || !xz.current) return (0, Fz.f)(), void Kz(zz);
                vz(zz.message), oz(!1)
              }))
            },
            children: Xz("general:play")
          }), Nz && (0, Zz.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: Nz
          })]
        })]
      })
    }
  },
  4702: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Hz
    });
    var Ez = bz(1038),
      nz = bz.n(Ez),
      iz = bz(4385),
      lz = bz(1181),
      Mz = bz(1089);
    const tz = [...iz.l, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function Hz(zz) {
      const {
        disabled: uz,
        hideWrapper: bz
      } = zz, {
        t: Ez
      } = (0, lz.F)(), Hz = zz.advancedMode ? tz.map((uz => [uz, zz.callbacks[uz]])) : iz.l.map((uz => [uz, zz.callbacks[uz]])), pz = (0, Mz.jsx)("div", {
        className: nz()("PluginsGrid", {
          SectionBody: !bz
        }),
        children: Hz.map((zz => {
          let [bz, Ez] = zz;
          return (0, Mz.jsx)(Oz, {
            plugin: bz,
            callbacks: Ez,
            disabled: uz
          }, bz)
        }))
      });
      return bz ? pz : (0, Mz.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, Mz.jsx)("div", {
          className: "SectionTitle",
          children: Ez("worldBuilder:pluginsSection")
        }), pz]
      })
    }

    function Oz(zz) {
      let {
        plugin: uz,
        callbacks: {
          isEnabled: bz,
          Zx: Ez
        },
        disabled: iz
      } = zz;
      const {
        t: tz
      } = (0, lz.F)(), Hz = bz();
      return (0, Mz.jsxs)("div", {
        className: nz()("PluginCard", {
          PluginCardEnabled: Hz,
          PluginCardDisabledForm: iz
        }),
        "data-pad-focusable": !0,
        "aria-disabled": iz || void 0,
        onClick: () => {
          iz || Ez(!Hz)
        },
        children: [(0, Mz.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, Mz.jsx)("img", {
            src: `/textures/games/classic/customGames/${uz}.png`,
            alt: uz
          })
        }), (0, Mz.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, Mz.jsx)("div", {
            className: "PluginCardTitle",
            children: tz(pz[uz])
          }), (0, Mz.jsx)("div", {
            className: "PluginCardDescription",
            children: tz(dz[uz])
          })]
        }), (0, Mz.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: tz(Hz ? "general:on" : "general:off")
        })]
      })
    }
    const pz = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      dz = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  35845: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Hz,
      f: () => Oz
    });
    bz(56);
    var Ez = bz(1038),
      nz = bz.n(Ez),
      iz = bz(4385),
      lz = bz(316),
      Mz = bz(1181),
      tz = bz(1089);

    function Hz(zz) {
      let {
        value: uz,
        onChange: bz,
        showAll: Ez,
        disabled: Hz = !1
      } = zz;
      const {
        t: Oz
      } = (0, Mz.F)();
      return (0, tz.jsxs)("div", {
        className: nz()("BloxdForm GamemodeForm", {
          BasicOptions: !Ez
        }),
        children: [(0, tz.jsx)("div", {
          className: "SectionTitle",
          children: Oz("classic:defaultGamemode")
        }), (0, tz.jsx)("div", {
          className: "SectionBody",
          children: iz.I.map((zz => Ez || (0, iz.C)(zz) ? (0, tz.jsx)("button", {
            type: "button",
            className: nz()("WorldGamemode", {
              Selected: uz === zz
            }),
            disabled: Hz,
            onClick: () => {
              bz(zz)
            },
            style: {
              "--background-image": `url(${lz.y[zz]})`
            },
            children: lz.u[zz]
          }, zz) : null))
        })]
      })
    }

    function Oz(zz) {
      let {
        mapTypes: uz,
        value: bz,
        onChange: Ez,
        showAll: Hz,
        disabled: Oz = !1,
        children: pz
      } = zz;
      const {
        t: dz
      } = (0, Mz.F)();
      return (0, tz.jsxs)("div", {
        className: nz()("BloxdForm MapTypeForm", {
          BasicOptions: !Hz
        }),
        children: [(0, tz.jsx)("div", {
          className: "SectionTitle",
          children: dz("customLobby:mapType")
        }), (0, tz.jsx)("div", {
          className: "SectionBody",
          children: uz.map((zz => Hz || (0, iz.E)(zz) ? (0, tz.jsx)("button", {
            type: "button",
            className: nz()("MapType", {
              Selected: bz === zz
            }),
            disabled: Oz,
            onClick: () => {
              Ez(zz)
            },
            style: {
              "--background-image": `url(${lz.n[zz]})`
            },
            children: lz.j[zz]
          }, zz) : null))
        }), pz]
      })
    }
  },
  4700: () => {},
  35838: () => {}
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);