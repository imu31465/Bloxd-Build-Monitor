export const id = 209;
export const ids = [209];
export const modules = {
  35829: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      CreateCustomLobby: () => Lz
    });
    bz(35838);
    var Ez = bz(4385),
      nz = bz(56),
      iz = bz(1628),
      lz = bz(1038),
      Mz = bz.n(lz),
      tz = bz(2882),
      Hz = bz(1118),
      Oz = bz(1195),
      pz = bz(4335),
      dz = bz(1419),
      Fz = bz(35840),
      Zz = bz(1181),
      Rz = bz(1298),
      Kz = bz(1482),
      wz = bz(20),
      Xz = bz(1424),
      fz = bz(588),
      sz = bz(4696),
      rz = bz(738),
      oz = bz(1226),
      Nz = bz(1212),
      vz = bz(4702),
      xz = bz(1047),
      Jz = bz(35845),
      Az = bz(35852),
      Tz = bz(1089);

    function Lz(zz) {
      var uz, bz, lz, Lz;
      let {
        gameNameWithVariation: Pz,
        close: Gz,
        initialDefaultGamemode: az
      } = zz;
      const {
        t: Vz
      } = (0, Zz.F)(), mz = (0, Kz.useNavigatePreserveSearch)(), [qz, hz] = (0, nz.useState)("Enter"), [Uz, cz] = (0, nz.useState)(""), gz = nz.useRef(null), Sz = null === (uz = rz.b[Pz]) || void 0 === uz ? void 0 : uz.showWorldsInsteadOfCustomLobbies, yz = Sz ? 1 : null === (bz = rz.b[Pz]) || void 0 === bz ? void 0 : bz.customLobbyCustomSchematicLimit, [Dz, Qz] = (0, nz.useState)(!Sz);
      az || (az = "classic_creative" === Pz || "classic_creativeFlat" === Pz ? "creative" : "classic" === Pz ? "peaceful" : "survival");
      const Wz = {
        baseOptions: {
          gameNameWithVariation: Sz ? "classic" : Pz,
          name: "",
          visibility: "unlisted"
        },
        listedOptions: {
          description: "",
          color: "",
          emojis: ""
        },
        mapOptions: {
          mapType: "classic_creativeFlat" === Pz ? "flat" : "default",
          schematicIdList: []
        },
        worldOptions: null
      };
      Sz && (Wz.worldOptions = {
        defaultGamemode: az,
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
      const [ez, jz] = (0, nz.useState)(Wz), [Iz, Bz] = (0, nz.useState)(null);

      function Cz(zz, uz) {
        jz({
          ...ez,
          baseOptions: {
            ...ez.baseOptions,
            [zz]: uz
          }
        })
      }

      function Yz(zz, uz) {
        jz({
          ...ez,
          listedOptions: {
            ...ez.listedOptions,
            [zz]: uz
          }
        })
      }

      function kz(zz, uz) {
        jz({
          ...ez,
          worldOptions: {
            ...ez.worldOptions,
            [zz]: uz
          }
        })
      }

      function zu(zz) {
        jz({
          ...ez,
          mapOptions: {
            ...ez.mapOptions,
            ...zz
          }
        })
      }(0, nz.useEffect)((() => {
        pz.e.getNewStarterName().then((zz => {
          jz((uz => "" !== uz.baseOptions.name ? uz : {
            ...uz,
            baseOptions: {
              ...uz.baseOptions,
              name: zz
            }
          }))
        })).catch((zz => {
          console.error("Error getting new starter name:", zz)
        }))
      }), []), (0, nz.useEffect)((() => {
        "customSchematic" === ez.mapOptions.mapType && null === Iz && (0, Hz.postJsonWithMetricsCookiesAndJsonResponse)(`${Oz.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
          retries: 0,
          minTimeout: 3e3
        }).then((zz => {
          Bz(zz)
        }))
      }), [ez.mapOptions.mapType, Iz]);
      const uu = {
          tpRequests: {
            isEnabled: () => !ez.worldOptions.disableTpRequests,
            Zx: zz => {
              kz("disableTpRequests", !zz)
            }
          },
          spawnProtection: {
            isEnabled: () => ez.worldOptions.spawnProtection,
            Zx: zz => {
              kz("spawnProtection", zz)
            }
          },
          spawnReset: {
            isEnabled: () => ez.worldOptions.enableSpawnReset,
            Zx: zz => {
              kz("enableSpawnReset", zz)
            }
          },
          smpMarketplace: {
            isEnabled: () => ez.worldOptions.enableSmpMarketplace,
            Zx: zz => {
              kz("enableSmpMarketplace", zz)
            }
          },
          survivalGuns: {
            isEnabled: () => ez.worldOptions.enableSurvivalGuns,
            Zx: zz => {
              kz("enableSurvivalGuns", zz)
            }
          },
          fallDamage: {
            isEnabled: () => !ez.worldOptions.disableFallDamage,
            Zx: zz => {
              kz("disableFallDamage", !zz)
            }
          },
          dayNight: {
            isEnabled: () => ez.worldOptions.enableDayNight,
            Zx: zz => {
              kz("enableDayNight", zz)
            }
          }
        },
        bu = "Enter" !== qz,
        Eu = (0, Tz.jsx)(sz.d, {
          className: "NameInput",
          label: "general:name",
          disabled: "Enter" !== qz,
          children: (0, Tz.jsx)(iz.d, {
            domRef: gz,
            onValueChange: (zz, uz) => {
              const bz = (0, Nz.yb)(zz);
              Cz("name", bz), gz.current.value = bz
            },
            maxLength: Nz.Q,
            defaultValue: ez.baseOptions.name
          })
        });
      return (0, Tz.jsxs)("div", {
        className: Mz()("CreateCustomLobby", {
          CreateCustomLobbySuccess: "Success" === qz,
          AdvancedMode: Dz
        }),
        children: ["Success" === qz && (0, Tz.jsxs)("div", {
          className: "CreateCustomLobbySuccessOverlay",
          children: [(0, Tz.jsxs)("div", {
            className: "CreateCustomLobbySuccessTitle FullyFancyText AnimFadeInScaleUp",
            children: [(0, Tz.jsx)(xz.c, {
              name: "check"
            }), (0, Tz.jsx)(Xz.c, {})]
          }), (0, Tz.jsx)("div", {
            className: "CreateCustomLobbySuccessButtons AnimFadeInScaleUp",
            children: (0, Tz.jsx)(dz.q, {
              padDefaultFocus: !0,
              onClick: () => {
                (0, wz.k)("worldCreation"), mz((0, Rz.c)(Pz, ez.baseOptions.name))
              },
              children: Vz("homePage:joinLobbyName", {
                lobbyName: ez.baseOptions.name
              })
            })
          })]
        }), (0, Tz.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, Tz.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: Vz(Sz ? "homePage:createWorld" : "homePage:createCustomLobby")
          })
        }), (0, Tz.jsx)(Az.e, {
          locked: bu,
          children: (0, Tz.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [!Dz && Eu, Dz && (0, Tz.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, Tz.jsx)("div", {
                className: "SectionTitle",
                children: Vz("customLobby:generalOptions")
              }), (0, Tz.jsxs)("div", {
                className: "SectionBody",
                children: [Eu, (0, Tz.jsx)(sz.d, {
                  label: "customLobby:visibility",
                  circleInfoText: Vz("customLobby:visibilityDescription"),
                  disabled: "Enter" !== qz,
                  children: (0, Tz.jsx)(tz.d, {
                    options: Ez.x.map((zz => ({
                      value: zz,
                      label: Ez.g[zz]
                    }))),
                    value: ez.baseOptions.visibility,
                    onChange: zz => {
                      Cz("visibility", zz.value)
                    }
                  })
                })]
              })]
            }), Sz && (0, Tz.jsx)(Jz.d, {
              value: ez.worldOptions.defaultGamemode,
              onChange: zz => {
                kz("defaultGamemode", zz)
              },
              showAll: Dz,
              disabled: bu
            }), (Sz || !(0, fz.F)(yz) && yz > 0) && (0, Tz.jsx)(Jz.f, {
              mapTypes: Sz ? Ez.K : Ez.t,
              value: ez.mapOptions.mapType,
              onChange: zz => {
                const uz = {
                  mapType: zz
                };
                "customSchematic" !== zz && (uz.schematicIdList = []), zu(uz)
              },
              showAll: Dz,
              disabled: bu,
              children: "customSchematic" === ez.mapOptions.mapType && (0, Tz.jsxs)(Tz.Fragment, {
                children: [(0, Tz.jsxs)("div", {
                  className: "SchematicListTitle AnimFadeIn",
                  children: [Sz && Vz("customLobby:selectWorldSchematic"), !Sz && Vz("customLobby:selectCustomLobbySchematics", {
                    schematicLimit: yz
                  })]
                }), (0, Tz.jsx)("div", {
                  className: Mz()("SchematicListContainer AnimFadeIn", {
                    SchematicListContainerDisabled: "Enter" !== qz
                  }),
                  children: (0, Tz.jsx)(Fz.b, {
                    loading: null === Iz,
                    schematics: null !== Iz && void 0 !== Iz ? Iz : [],
                    onSchematicPicked: function(zz) {
                      const uz = ez.mapOptions.schematicIdList;
                      if (uz.includes(zz.schematicId)) zu({
                        schematicIdList: uz.filter((uz => uz !== zz.schematicId))
                      });
                      else {
                        if (yz && ez.mapOptions.schematicIdList.length >= yz) return;
                        zu({
                          schematicIdList: [...ez.mapOptions.schematicIdList, zz.schematicId]
                        })
                      }
                    },
                    selectedSchematicIdList: ez.mapOptions.schematicIdList,
                    disableAutoExport: !0
                  })
                })]
              })
            }), Dz && (0, Tz.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, Tz.jsx)("div", {
                className: "SectionTitle",
                children: Vz("customLobby:listedOptions")
              }), (0, Tz.jsxs)("div", {
                className: "SectionBody",
                children: [(0, Tz.jsx)(sz.d, {
                  label: "general:description",
                  className: "CustomLobbyDescription",
                  disabled: "Enter" !== qz,
                  children: (0, Tz.jsx)(iz.d, {
                    onValueChange: (zz, uz) => {
                      Yz("description", zz)
                    },
                    maxLength: 100,
                    defaultValue: ez.listedOptions.description
                  })
                }), (0, Tz.jsx)(sz.d, {
                  label: "general:color",
                  circleInfoText: "customLobby:lobbyColorDescription",
                  disabled: "Enter" !== qz,
                  children: (0, Tz.jsx)("div", {
                    className: "OtherInput",
                    children: (0, Tz.jsx)("input", {
                      type: "color",
                      value: ez.listedOptions.color,
                      onChange: zz => {
                        Yz("color", zz.target.value)
                      }
                    })
                  })
                }), (0, Tz.jsx)(sz.d, {
                  label: "general:emojis",
                  circleInfoText: "customLobby:lobbyEmojisDescription",
                  disabled: "Enter" !== qz,
                  children: (0, Tz.jsx)(iz.d, {
                    onValueChange: (zz, uz) => {
                      Yz("emojis", zz)
                    },
                    maxLength: 6,
                    defaultValue: ez.listedOptions.emojis
                  })
                })]
              })]
            }), Dz && Sz && (0, Tz.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, Tz.jsx)("div", {
                className: "SectionTitle",
                children: Vz("customLobby:advancedOptions")
              }), (0, Tz.jsxs)("div", {
                className: "SectionBody",
                children: [(0, Tz.jsx)(sz.d, {
                  label: "classic:worldGenSeed",
                  disabled: "Enter" !== qz,
                  children: (0, Tz.jsx)(iz.d, {
                    onValueChange: (zz, uz) => {
                      kz("worldGenSeed", zz)
                    },
                    maxLength: Nz.Q
                  })
                }), (0, Tz.jsx)(sz.d, {
                  label: "classic:disableProtectors",
                  disabled: "Enter" !== qz,
                  children: (0, Tz.jsx)(sz.b, {
                    checked: ez.worldOptions.disableProtectors,
                    setChecked: zz => {
                      kz("disableProtectors", zz)
                    }
                  })
                }), (0, Tz.jsx)(sz.d, {
                  label: "classic:disableTribeCreation",
                  disabled: "Enter" !== qz,
                  children: (0, Tz.jsx)(sz.b, {
                    checked: ez.worldOptions.disableTribeCreation,
                    setChecked: zz => {
                      kz("disableTribeCreation", zz)
                    }
                  })
                }), (0, Tz.jsx)(sz.d, {
                  label: "classic:voidDeathHeight",
                  circleInfoText: "classic:voidDeathHeightDescription",
                  disabled: "Enter" !== qz,
                  children: (0, Tz.jsx)("input", {
                    type: "number",
                    max: oz.C,
                    value: null !== (lz = ez.worldOptions.voidDeathHeight) && void 0 !== lz ? lz : "",
                    onChange: zz => {
                      const uz = parseInt(zz.target.value);
                      kz("voidDeathHeight", isNaN(uz) ? null : uz)
                    }
                  })
                }), (0, Tz.jsx)(sz.d, {
                  label: "classic:disableLobbySpawn",
                  disabled: "Enter" !== qz,
                  children: (0, Tz.jsx)(sz.b, {
                    checked: ez.worldOptions.disableLobbySpawn,
                    setChecked: zz => {
                      kz("disableLobbySpawn", zz)
                    }
                  })
                }), (0, Tz.jsx)(sz.d, {
                  label: "classic:worldBorder",
                  circleInfoText: "classic:worldBorderDescription",
                  disabled: "Enter" !== qz,
                  children: (0, Tz.jsx)("input", {
                    type: "number",
                    min: oz.G,
                    max: oz.D,
                    value: null !== (Lz = ez.worldOptions.worldBorder) && void 0 !== Lz ? Lz : "",
                    onChange: zz => {
                      const uz = parseInt(zz.target.value);
                      kz("worldBorder", isNaN(uz) ? null : uz)
                    }
                  })
                }), (0, Tz.jsx)(sz.d, {
                  label: "classic:disableMobs",
                  disabled: "Enter" !== qz,
                  children: (0, Tz.jsx)(sz.b, {
                    checked: ez.worldOptions.disableMobs,
                    setChecked: zz => {
                      kz("disableMobs", zz)
                    }
                  })
                })]
              })]
            }), Sz && (0, Tz.jsx)(vz.b, {
              callbacks: uu,
              disabled: "Enter" !== qz,
              advancedMode: Dz
            })]
          })
        }), (0, Tz.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, Tz.jsx)(dz.q, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: "Enter" !== qz,
            onClick: () => {
              !async function() {
                if ("Enter" === qz) {
                  hz("Loading"), cz("");
                  try {
                    await pz.e.createCustomLobby(ez), hz("Success")
                  } catch (zz) {
                    cz(zz.message), console.error(zz.message), hz("Enter")
                  }
                }
              }()
            },
            children: Vz("general:create")
          }), Sz && (0, Tz.jsx)("div", {
            className: "CreateCustomLobbyAdvancedToggle",
            "data-pad-ignore": bu || void 0,
            children: (0, Tz.jsx)(sz.d, {
              label: "customLobby:showAdvancedOptions",
              disabled: bu,
              onLabelClick: () => {
                Qz(!Dz)
              },
              children: (0, Tz.jsx)(sz.b, {
                checked: Dz,
                setChecked: Qz
              })
            })
          }), Uz && (0, Tz.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: Uz
          })]
        })]
      })
    }
  },
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
  35840: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Oz,
      d: () => dz
    });
    var Ez = bz(56),
      nz = bz(1322),
      iz = bz(1181),
      lz = bz(1305),
      Mz = bz(3230),
      tz = bz(4690),
      Hz = bz(1089);

    function Oz(zz) {
      let {
        loading: uz,
        schematics: bz,
        onSchematicPicked: Ez,
        selectedSchematicIdList: nz = [],
        disableAutoExport: tz
      } = zz;
      const {
        t: Oz
      } = (0, iz.F)();
      return (0, Hz.jsxs)("div", {
        className: "SchematicList",
        children: [uz && (0, Hz.jsx)(lz.c, {}), !uz && 0 === bz.length && (0, Hz.jsx)("div", {
          className: "NoSchematicsText",
          children: Oz("worldBuilder:noSavedSchematic")
        }), !uz && bz.map((zz => (0, Hz.jsx)(Mz.i, {
          source: {
            type: "schematic",
            schematic: zz
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            Ez(zz)
          },
          isSelected: nz.includes(zz.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: zz.isAutoExported && tz,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, zz.schematicId)))]
      })
    }

    function pz(zz) {
      let {
        ownedSchematics: uz,
        currentWorldSchematicId: bz,
        onClose: nz
      } = zz;
      const {
        t: lz
      } = (0, iz.F)(), [Mz, pz] = (0, Ez.useState)(null);
      return (0, Hz.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === Mz && (0, Hz.jsxs)(Hz.Fragment, {
          children: [(0, Hz.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: lz("worldBuilder:schematicList")
          }), (0, Hz.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: lz("worldBuilder:clickSchematicForOptions")
          }), (0, Hz.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, Hz.jsx)(Oz, {
              loading: !1,
              schematics: uz,
              onSchematicPicked: zz => {
                pz(zz)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== Mz && (0, Hz.jsx)(tz.i, {
          schematic: Mz,
          inSourceWorld: Mz.schematicId === bz,
          onSchematicUpdate: zz => {
            pz(zz)
          },
          onClose: () => {
            pz(null), nz()
          }
        })]
      })
    }

    function dz(zz) {
      let {
        ownedSchematics: uz,
        currentWorldSchematicId: bz,
        onClose: Ez
      } = zz;
      nz.NotificationProvider.showCustomPopup({
        body: zz => (0, Hz.jsx)(pz, {
          ownedSchematics: uz,
          currentWorldSchematicId: bz,
          onClose: zz
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: Ez,
        unlockPointerKey: "schematicListPopup"
      })
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
  35838: () => {}
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);