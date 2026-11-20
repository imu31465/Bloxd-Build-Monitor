export const id = 209;
export const ids = [209];
export const modules = {
  35856: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      CreateCustomLobby: () => Gz
    });
    sz(35864);
    var Fz = sz(4278),
      Wz = sz(65),
      Xz = sz(1622),
      Oz = sz(1020),
      oz = sz.n(Oz),
      vz = sz(2862),
      Uz = sz(1120),
      Kz = sz(1191),
      uz = sz(4229),
      Nz = sz(1419),
      bz = sz(35873),
      wz = sz(1173),
      Dz = sz(1297),
      gz = sz(1483),
      Hz = sz(30),
      Bz = sz(1423),
      Pz = sz(580),
      rz = sz(4562),
      Yz = sz(725),
      xz = sz(1223),
      mz = sz(1213),
      Jz = sz(4570),
      Iz = sz(1036),
      Cz = sz(35879),
      ez = sz(35885),
      Zz = sz(1087);

    function Gz(zz) {
      var tz, sz, Oz, Gz;
      let {
        gameNameWithVariation: Tz,
        close: cz,
        initialDefaultGamemode: jz
      } = zz;
      const {
        t: Az
      } = (0, wz.B)(), yz = (0, gz.useNavigatePreserveSearch)(), [Mz, dz] = (0, Wz.useState)("Enter"), [hz, Qz] = (0, Wz.useState)(""), kz = Wz.useRef(null), iz = null === (tz = Yz.e[Tz]) || void 0 === tz ? void 0 : tz.showWorldsInsteadOfCustomLobbies, Lz = iz ? 1 : null === (sz = Yz.e[Tz]) || void 0 === sz ? void 0 : sz.customLobbyCustomSchematicLimit, [lz, nz] = (0, Wz.useState)(!iz);
      jz || (jz = "classic_creative" === Tz || "classic_creativeFlat" === Tz ? "creative" : "classic" === Tz ? "peaceful" : "survival");
      const az = {
        baseOptions: {
          gameNameWithVariation: iz ? "classic" : Tz,
          name: "",
          visibility: "unlisted"
        },
        listedOptions: {
          description: "",
          color: "",
          emojis: ""
        },
        mapOptions: {
          mapType: "classic_creativeFlat" === Tz ? "flat" : "default",
          schematicIdList: []
        },
        worldOptions: null
      };
      iz && (az.worldOptions = {
        defaultGamemode: jz,
        disableProtectors: !1,
        spawnProtection: !0,
        disableTpRequests: !1,
        disableTribeCreation: !1,
        disableLobbySpawn: !1,
        voidDeathHeight: -1e4,
        worldBorder: null,
        disableFallDamage: !0,
        disableMobs: !1,
        worldGenSeed: "",
        enableSmpMarketplace: !1,
        enableSurvivalGuns: !1,
        enableSpawnReset: !1,
        enableDayNight: !0
      });
      const [qz, Sz] = (0, Wz.useState)(az), [Vz, Rz] = (0, Wz.useState)(null);

      function pz(zz, tz) {
        Sz({
          ...qz,
          baseOptions: {
            ...qz.baseOptions,
            [zz]: tz
          }
        })
      }

      function fz(zz, tz) {
        Sz({
          ...qz,
          listedOptions: {
            ...qz.listedOptions,
            [zz]: tz
          }
        })
      }

      function Ez(zz, tz) {
        Sz({
          ...qz,
          worldOptions: {
            ...qz.worldOptions,
            [zz]: tz
          }
        })
      }

      function zt(zz) {
        Sz({
          ...qz,
          mapOptions: {
            ...qz.mapOptions,
            ...zz
          }
        })
      }(0, Wz.useEffect)((() => {
        uz.b.getNewStarterName().then((zz => {
          Sz((tz => "" !== tz.baseOptions.name ? tz : {
            ...tz,
            baseOptions: {
              ...tz.baseOptions,
              name: zz
            }
          }))
        })).catch((zz => {
          console.error("Error getting new starter name:", zz)
        }))
      }), []), (0, Wz.useEffect)((() => {
        "customSchematic" === qz.mapOptions.mapType && null === Vz && (0, Uz.postJsonWithMetricsCookiesAndJsonResponse)(`${Kz.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
          retries: 0,
          minTimeout: 3e3
        }).then((zz => {
          Rz(zz)
        }))
      }), [qz.mapOptions.mapType, Vz]);
      const tt = {
          tpRequests: {
            isEnabled: () => !qz.worldOptions.disableTpRequests,
            Xx: zz => {
              Ez("disableTpRequests", !zz)
            }
          },
          spawnProtection: {
            isEnabled: () => qz.worldOptions.spawnProtection,
            Xx: zz => {
              Ez("spawnProtection", zz)
            }
          },
          spawnReset: {
            isEnabled: () => qz.worldOptions.enableSpawnReset,
            Xx: zz => {
              Ez("enableSpawnReset", zz)
            }
          },
          smpMarketplace: {
            isEnabled: () => qz.worldOptions.enableSmpMarketplace,
            Xx: zz => {
              Ez("enableSmpMarketplace", zz)
            }
          },
          survivalGuns: {
            isEnabled: () => qz.worldOptions.enableSurvivalGuns,
            Xx: zz => {
              Ez("enableSurvivalGuns", zz)
            }
          },
          fallDamage: {
            isEnabled: () => !qz.worldOptions.disableFallDamage,
            Xx: zz => {
              Ez("disableFallDamage", !zz)
            }
          },
          dayNight: {
            isEnabled: () => qz.worldOptions.enableDayNight,
            Xx: zz => {
              Ez("enableDayNight", zz)
            }
          }
        },
        st = "Enter" !== Mz,
        Ft = (0, Zz.jsx)(rz.h, {
          className: "NameInput",
          label: "general:name",
          disabled: "Enter" !== Mz,
          children: (0, Zz.jsx)(Xz.d, {
            domRef: kz,
            onValueChange: (zz, tz) => {
              const sz = (0, mz.vb)(zz);
              pz("name", sz), kz.current.value = sz
            },
            maxLength: mz.P,
            defaultValue: qz.baseOptions.name
          })
        });
      return (0, Zz.jsxs)("div", {
        className: oz()("CreateCustomLobby", {
          CreateCustomLobbySuccess: "Success" === Mz,
          AdvancedMode: lz
        }),
        children: ["Success" === Mz && (0, Zz.jsxs)("div", {
          className: "CreateCustomLobbySuccessOverlay",
          children: [(0, Zz.jsxs)("div", {
            className: "CreateCustomLobbySuccessTitle FullyFancyText AnimFadeInScaleUp",
            children: [(0, Zz.jsx)(Iz.c, {
              name: "check"
            }), (0, Zz.jsx)(Bz.e, {})]
          }), (0, Zz.jsx)("div", {
            className: "CreateCustomLobbySuccessButtons AnimFadeInScaleUp",
            children: (0, Zz.jsx)(Nz.p, {
              padDefaultFocus: !0,
              onClick: () => {
                (0, Hz.e)("worldCreation"), yz((0, Dz.c)(Tz, qz.baseOptions.name))
              },
              children: Az("homePage:joinLobbyName", {
                lobbyName: qz.baseOptions.name
              })
            })
          })]
        }), (0, Zz.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, Zz.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: Az(iz ? "homePage:createWorld" : "homePage:createCustomLobby")
          })
        }), (0, Zz.jsx)(ez.b, {
          locked: st,
          children: (0, Zz.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [!lz && Ft, lz && (0, Zz.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, Zz.jsx)("div", {
                className: "SectionTitle",
                children: Az("customLobby:generalOptions")
              }), (0, Zz.jsxs)("div", {
                className: "SectionBody",
                children: [Ft, (0, Zz.jsx)(rz.h, {
                  label: "customLobby:visibility",
                  circleInfoText: Az("customLobby:visibilityDescription"),
                  disabled: "Enter" !== Mz,
                  children: (0, Zz.jsx)(vz.d, {
                    options: Fz.v.map((zz => ({
                      value: zz,
                      label: Fz.g[zz]
                    }))),
                    value: qz.baseOptions.visibility,
                    onChange: zz => {
                      pz("visibility", zz.value)
                    }
                  })
                })]
              })]
            }), iz && (0, Zz.jsx)(Cz.d, {
              value: qz.worldOptions.defaultGamemode,
              onChange: zz => {
                Ez("defaultGamemode", zz)
              },
              showAll: lz,
              disabled: st
            }), (iz || !(0, Pz.G)(Lz) && Lz > 0) && (0, Zz.jsx)(Cz.g, {
              mapTypes: iz ? Fz.M : Fz.s,
              value: qz.mapOptions.mapType,
              onChange: zz => {
                const tz = {
                  mapType: zz
                };
                "customSchematic" !== zz && (tz.schematicIdList = []), zt(tz)
              },
              showAll: lz,
              disabled: st,
              children: "customSchematic" === qz.mapOptions.mapType && (0, Zz.jsxs)(Zz.Fragment, {
                children: [(0, Zz.jsxs)("div", {
                  className: "SchematicListTitle AnimFadeIn",
                  children: [iz && Az("customLobby:selectWorldSchematic"), !iz && Az("customLobby:selectCustomLobbySchematics", {
                    schematicLimit: Lz
                  })]
                }), (0, Zz.jsx)("div", {
                  className: oz()("SchematicListContainer AnimFadeIn", {
                    SchematicListContainerDisabled: "Enter" !== Mz
                  }),
                  children: (0, Zz.jsx)(bz.c, {
                    loading: null === Vz,
                    schematics: null !== Vz && void 0 !== Vz ? Vz : [],
                    onSchematicPicked: function(zz) {
                      const tz = qz.mapOptions.schematicIdList;
                      if (tz.includes(zz.schematicId)) zt({
                        schematicIdList: tz.filter((tz => tz !== zz.schematicId))
                      });
                      else {
                        if (Lz && qz.mapOptions.schematicIdList.length >= Lz) return;
                        zt({
                          schematicIdList: [...qz.mapOptions.schematicIdList, zz.schematicId]
                        })
                      }
                    },
                    selectedSchematicIdList: qz.mapOptions.schematicIdList,
                    disableAutoExport: !0
                  })
                })]
              })
            }), lz && (0, Zz.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, Zz.jsx)("div", {
                className: "SectionTitle",
                children: Az("customLobby:listedOptions")
              }), (0, Zz.jsxs)("div", {
                className: "SectionBody",
                children: [(0, Zz.jsx)(rz.h, {
                  label: "general:description",
                  className: "CustomLobbyDescription",
                  disabled: "Enter" !== Mz,
                  children: (0, Zz.jsx)(Xz.d, {
                    onValueChange: (zz, tz) => {
                      fz("description", zz)
                    },
                    maxLength: 100,
                    defaultValue: qz.listedOptions.description
                  })
                }), (0, Zz.jsx)(rz.h, {
                  label: "general:color",
                  circleInfoText: "customLobby:lobbyColorDescription",
                  disabled: "Enter" !== Mz,
                  children: (0, Zz.jsx)("div", {
                    className: "OtherInput",
                    children: (0, Zz.jsx)("input", {
                      type: "color",
                      value: qz.listedOptions.color,
                      onChange: zz => {
                        fz("color", zz.target.value)
                      }
                    })
                  })
                }), (0, Zz.jsx)(rz.h, {
                  label: "general:emojis",
                  circleInfoText: "customLobby:lobbyEmojisDescription",
                  disabled: "Enter" !== Mz,
                  children: (0, Zz.jsx)(Xz.d, {
                    onValueChange: (zz, tz) => {
                      fz("emojis", zz)
                    },
                    maxLength: 6,
                    defaultValue: qz.listedOptions.emojis
                  })
                })]
              })]
            }), lz && iz && (0, Zz.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, Zz.jsx)("div", {
                className: "SectionTitle",
                children: Az("customLobby:advancedOptions")
              }), (0, Zz.jsxs)("div", {
                className: "SectionBody",
                children: [(0, Zz.jsx)(rz.h, {
                  label: "classic:worldGenSeed",
                  disabled: "Enter" !== Mz,
                  children: (0, Zz.jsx)(Xz.d, {
                    onValueChange: (zz, tz) => {
                      Ez("worldGenSeed", zz)
                    },
                    maxLength: mz.P
                  })
                }), (0, Zz.jsx)(rz.h, {
                  label: "classic:disableProtectors",
                  disabled: "Enter" !== Mz,
                  children: (0, Zz.jsx)(rz.d, {
                    checked: qz.worldOptions.disableProtectors,
                    setChecked: zz => {
                      Ez("disableProtectors", zz)
                    }
                  })
                }), (0, Zz.jsx)(rz.h, {
                  label: "classic:disableTribeCreation",
                  disabled: "Enter" !== Mz,
                  children: (0, Zz.jsx)(rz.d, {
                    checked: qz.worldOptions.disableTribeCreation,
                    setChecked: zz => {
                      Ez("disableTribeCreation", zz)
                    }
                  })
                }), (0, Zz.jsx)(rz.h, {
                  label: "classic:voidDeathHeight",
                  circleInfoText: "classic:voidDeathHeightDescription",
                  disabled: "Enter" !== Mz,
                  children: (0, Zz.jsx)("input", {
                    type: "number",
                    max: xz.D,
                    value: null !== (Oz = qz.worldOptions.voidDeathHeight) && void 0 !== Oz ? Oz : "",
                    onChange: zz => {
                      const tz = parseInt(zz.target.value);
                      Ez("voidDeathHeight", isNaN(tz) ? null : tz)
                    }
                  })
                }), (0, Zz.jsx)(rz.h, {
                  label: "classic:disableLobbySpawn",
                  disabled: "Enter" !== Mz,
                  children: (0, Zz.jsx)(rz.d, {
                    checked: qz.worldOptions.disableLobbySpawn,
                    setChecked: zz => {
                      Ez("disableLobbySpawn", zz)
                    }
                  })
                }), (0, Zz.jsx)(rz.h, {
                  label: "classic:worldBorder",
                  circleInfoText: "classic:worldBorderDescription",
                  disabled: "Enter" !== Mz,
                  children: (0, Zz.jsx)("input", {
                    type: "number",
                    min: xz.J,
                    max: xz.E,
                    value: null !== (Gz = qz.worldOptions.worldBorder) && void 0 !== Gz ? Gz : "",
                    onChange: zz => {
                      const tz = parseInt(zz.target.value);
                      Ez("worldBorder", isNaN(tz) ? null : tz)
                    }
                  })
                }), (0, Zz.jsx)(rz.h, {
                  label: "classic:disableMobs",
                  disabled: "Enter" !== Mz,
                  children: (0, Zz.jsx)(rz.d, {
                    checked: qz.worldOptions.disableMobs,
                    setChecked: zz => {
                      Ez("disableMobs", zz)
                    }
                  })
                })]
              })]
            }), iz && (0, Zz.jsx)(Jz.c, {
              callbacks: tt,
              disabled: "Enter" !== Mz,
              advancedMode: lz
            })]
          })
        }), (0, Zz.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, Zz.jsx)(Nz.p, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: "Enter" !== Mz,
            onClick: () => {
              !async function() {
                if ("Enter" === Mz) {
                  dz("Loading"), Qz("");
                  try {
                    await uz.b.createCustomLobby(qz), dz("Success")
                  } catch (zz) {
                    Qz(zz.message), console.error(zz.message), dz("Enter")
                  }
                }
              }()
            },
            children: Az("general:create")
          }), iz && (0, Zz.jsx)("div", {
            className: "CreateCustomLobbyAdvancedToggle",
            "data-pad-ignore": st || void 0,
            children: (0, Zz.jsx)(rz.h, {
              label: "customLobby:showAdvancedOptions",
              disabled: st,
              onLabelClick: () => {
                nz(!lz)
              },
              children: (0, Zz.jsx)(rz.d, {
                checked: lz,
                setChecked: nz
              })
            })
          }), hz && (0, Zz.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: hz
          })]
        })]
      })
    }
  },
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
  35873: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Kz,
      e: () => Nz
    });
    var Fz = sz(65),
      Wz = sz(1319),
      Xz = sz(1173),
      Oz = sz(1306),
      oz = sz(3158),
      vz = sz(4559),
      Uz = sz(1087);

    function Kz(zz) {
      let {
        loading: tz,
        schematics: sz,
        onSchematicPicked: Fz,
        selectedSchematicIdList: Wz = [],
        disableAutoExport: vz
      } = zz;
      const {
        t: Kz
      } = (0, Xz.B)();
      return (0, Uz.jsxs)("div", {
        className: "SchematicList",
        children: [tz && (0, Uz.jsx)(Oz.d, {}), !tz && 0 === sz.length && (0, Uz.jsx)("div", {
          className: "NoSchematicsText",
          children: Kz("worldBuilder:noSavedSchematic")
        }), !tz && sz.map((zz => (0, Uz.jsx)(oz.g, {
          source: {
            type: "schematic",
            schematic: zz
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            Fz(zz)
          },
          isSelected: Wz.includes(zz.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: zz.isAutoExported && vz,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, zz.schematicId)))]
      })
    }

    function uz(zz) {
      let {
        ownedSchematics: tz,
        currentWorldSchematicId: sz,
        onClose: Wz
      } = zz;
      const {
        t: Oz
      } = (0, Xz.B)(), [oz, uz] = (0, Fz.useState)(null);
      return (0, Uz.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === oz && (0, Uz.jsxs)(Uz.Fragment, {
          children: [(0, Uz.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: Oz("worldBuilder:schematicList")
          }), (0, Uz.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: Oz("worldBuilder:clickSchematicForOptions")
          }), (0, Uz.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, Uz.jsx)(Kz, {
              loading: !1,
              schematics: tz,
              onSchematicPicked: zz => {
                uz(zz)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== oz && (0, Uz.jsx)(vz.g, {
          schematic: oz,
          inSourceWorld: oz.schematicId === sz,
          onSchematicUpdate: zz => {
            uz(zz)
          },
          onClose: () => {
            uz(null), Wz()
          }
        })]
      })
    }

    function Nz(zz) {
      let {
        ownedSchematics: tz,
        currentWorldSchematicId: sz,
        onClose: Fz
      } = zz;
      Wz.NotificationProvider.showCustomPopup({
        body: zz => (0, Uz.jsx)(uz, {
          ownedSchematics: tz,
          currentWorldSchematicId: sz,
          onClose: zz
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: Fz,
        unlockPointerKey: "schematicListPopup"
      })
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
  35864: () => {}
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);