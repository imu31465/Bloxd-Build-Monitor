export const id = 104;
export const ids = [104];
export const modules = {
  35885: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => vz
    });
    var Fz = sz(1020),
      Wz = sz.n(Fz),
      Xz = sz(65),
      Oz = sz(4214),
      oz = sz(1087);

    function vz(zz) {
      let {
        locked: tz,
        children: sz
      } = zz;
      const Fz = (0, Xz.useRef)(null),
        vz = (0, Oz.d)(Fz, "y");
      return (0, oz.jsx)("div", {
        ref: Fz,
        className: Wz()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: vz.before,
          CreateCustomLobbyBodyMoreBelow: vz.after
        }),
        "data-pad-ignore": tz || void 0,
        children: sz
      })
    }
  },
  35942: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      showFirstWorldSetupPopup: () => Dz
    });
    sz(4565), sz(35864);
    var Fz = sz(4278),
      Wz = sz(65),
      Xz = sz(4229),
      Oz = sz(1173),
      oz = sz(1319),
      vz = sz(35885),
      Uz = sz(4570),
      Kz = sz(1419),
      uz = sz(3163),
      Nz = sz(35879),
      bz = sz(4268),
      wz = sz(1087);

    function Dz(zz) {
      const tz = {
        requested: !1,
        closed: !1
      };
      oz.NotificationProvider.showCustomPopup({
        body: sz => (0, wz.jsx)(gz, {
          flow: tz,
          close: sz,
          ...zz
        }),
        middleScreenPopupClassName: "CreateCustomLobbyPopup",
        onClose: () => {
          tz.closed = !0, tz.requested || (0, bz.f)()
        }
      })
    }

    function gz(zz) {
      let {
        flow: tz,
        close: sz,
        onCreating: oz,
        onCreated: Dz,
        onFailedClosed: gz,
        join: Hz
      } = zz;
      const {
        t: Bz
      } = (0, Oz.B)(), [Pz, rz] = (0, Wz.useState)(Fz.z), [Yz, xz] = (0, Wz.useState)(!1), [mz, Jz] = (0, Wz.useState)(""), Iz = (0, uz.d)();
      (0, Wz.useEffect)((() => {
        (0, bz.k)()
      }), []);
      const Cz = zz => ({
        isEnabled: () => Pz.plugins[zz],
        Xx: tz => {
          (0, bz.h)({
            plugin: zz,
            enabled: tz
          }), rz({
            ...Pz,
            plugins: {
              ...Pz.plugins,
              [zz]: tz
            }
          })
        }
      });
      return (0, wz.jsxs)("div", {
        className: "CreateCustomLobby",
        children: [(0, wz.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, wz.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: Bz("homePage:myWorld")
          })
        }), (0, wz.jsx)(vz.b, {
          locked: Yz,
          children: (0, wz.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [(0, wz.jsx)(Nz.d, {
              value: Pz.defaultGamemode,
              onChange: zz => {
                (0, Fz.D)(zz) && zz !== Pz.defaultGamemode && ((0, bz.h)({
                  defaultGamemode: zz
                }), rz({
                  ...Pz,
                  defaultGamemode: zz
                }))
              },
              showAll: !1,
              disabled: Yz
            }), (0, wz.jsx)(Nz.g, {
              mapTypes: Fz.j,
              value: Pz.mapType,
              onChange: zz => {
                (0, Fz.G)(zz) && zz !== Pz.mapType && ((0, bz.h)({
                  mapType: zz
                }), rz({
                  ...Pz,
                  mapType: zz
                }))
              },
              showAll: !1,
              disabled: Yz
            }), (0, wz.jsx)(Uz.c, {
              callbacks: {
                dayNight: Cz("dayNight"),
                fallDamage: Cz("fallDamage"),
                survivalGuns: Cz("survivalGuns")
              },
              disabled: Yz,
              advancedMode: !1
            })]
          })
        }), (0, wz.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, wz.jsx)(Kz.p, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: Yz,
            onClick: () => {
              tz.requested = !0, xz(!0), oz(!0), Jz(""), (0, bz.j)(Pz), Xz.b.createPersonalWorld(Pz).then((zz => {
                oz(!1);
                const Fz = Dz(zz);
                !tz.closed && Iz.current ? (sz(), Hz(zz)) : Fz || (0, bz.f)()
              }), (zz => {
                if (console.error("Failed to create personal world:", zz), oz(!1), tz.requested = !1, tz.closed || !Iz.current) return (0, bz.f)(), void gz(zz);
                Jz(zz.message), xz(!1)
              }))
            },
            children: Bz("general:play")
          }), mz && (0, wz.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: mz
          })]
        })]
      })
    }
  },
  4570: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Uz
    });
    var Fz = sz(1020),
      Wz = sz.n(Fz),
      Xz = sz(4278),
      Oz = sz(1173),
      oz = sz(1087);
    const vz = [...Xz.m, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function Uz(zz) {
      const {
        disabled: tz,
        hideWrapper: sz
      } = zz, {
        t: Fz
      } = (0, Oz.B)(), Uz = zz.advancedMode ? vz.map((tz => [tz, zz.callbacks[tz]])) : Xz.m.map((tz => [tz, zz.callbacks[tz]])), uz = (0, oz.jsx)("div", {
        className: Wz()("PluginsGrid", {
          SectionBody: !sz
        }),
        children: Uz.map((zz => {
          let [sz, Fz] = zz;
          return (0, oz.jsx)(Kz, {
            plugin: sz,
            callbacks: Fz,
            disabled: tz
          }, sz)
        }))
      });
      return sz ? uz : (0, oz.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, oz.jsx)("div", {
          className: "SectionTitle",
          children: Fz("worldBuilder:pluginsSection")
        }), uz]
      })
    }

    function Kz(zz) {
      let {
        plugin: tz,
        callbacks: {
          isEnabled: sz,
          Xx: Fz
        },
        disabled: Xz
      } = zz;
      const {
        t: vz
      } = (0, Oz.B)(), Uz = sz();
      return (0, oz.jsxs)("div", {
        className: Wz()("PluginCard", {
          PluginCardEnabled: Uz,
          PluginCardDisabledForm: Xz
        }),
        "data-pad-focusable": !0,
        "aria-disabled": Xz || void 0,
        onClick: () => {
          Xz || Fz(!Uz)
        },
        children: [(0, oz.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, oz.jsx)("img", {
            src: `/textures/games/classic/customGames/${tz}.png`,
            alt: tz
          })
        }), (0, oz.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, oz.jsx)("div", {
            className: "PluginCardTitle",
            children: vz(uz[tz])
          }), (0, oz.jsx)("div", {
            className: "PluginCardDescription",
            children: vz(Nz[tz])
          })]
        }), (0, oz.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: vz(Uz ? "general:on" : "general:off")
        })]
      })
    }
    const uz = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      Nz = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  35879: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Uz,
      g: () => Kz
    });
    sz(65);
    var Fz = sz(1020),
      Wz = sz.n(Fz),
      Xz = sz(4278),
      Oz = sz(308),
      oz = sz(1173),
      vz = sz(1087);

    function Uz(zz) {
      let {
        value: tz,
        onChange: sz,
        showAll: Fz,
        disabled: Uz = !1
      } = zz;
      const {
        t: Kz
      } = (0, oz.B)();
      return (0, vz.jsxs)("div", {
        className: Wz()("BloxdForm GamemodeForm", {
          BasicOptions: !Fz
        }),
        children: [(0, vz.jsx)("div", {
          className: "SectionTitle",
          children: Kz("classic:defaultGamemode")
        }), (0, vz.jsx)("div", {
          className: "SectionBody",
          children: Xz.K.map((zz => Fz || (0, Xz.D)(zz) ? (0, vz.jsx)("button", {
            type: "button",
            className: Wz()("WorldGamemode", {
              Selected: tz === zz
            }),
            disabled: Uz,
            onClick: () => {
              sz(zz)
            },
            style: {
              "--background-image": `url(${Oz.w[zz]})`
            },
            children: Oz.t[zz]
          }, zz) : null))
        })]
      })
    }

    function Kz(zz) {
      let {
        mapTypes: tz,
        value: sz,
        onChange: Fz,
        showAll: Uz,
        disabled: Kz = !1,
        children: uz
      } = zz;
      const {
        t: Nz
      } = (0, oz.B)();
      return (0, vz.jsxs)("div", {
        className: Wz()("BloxdForm MapTypeForm", {
          BasicOptions: !Uz
        }),
        children: [(0, vz.jsx)("div", {
          className: "SectionTitle",
          children: Nz("customLobby:mapType")
        }), (0, vz.jsx)("div", {
          className: "SectionBody",
          children: tz.map((zz => Uz || (0, Xz.G)(zz) ? (0, vz.jsx)("button", {
            type: "button",
            className: Wz()("MapType", {
              Selected: sz === zz
            }),
            disabled: Kz,
            onClick: () => {
              Fz(zz)
            },
            style: {
              "--background-image": `url(${Oz.n[zz]})`
            },
            children: Oz.k[zz]
          }, zz) : null))
        }), uz]
      })
    }
  },
  4565: () => {},
  35864: () => {}
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);