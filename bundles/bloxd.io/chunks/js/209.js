export const id = 209;
export const ids = [209];
export const modules = {
  35933: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      CreateCustomLobby: () => aU
    });
    gU(35938);
    var tU = gU(4293),
      pU = gU(56),
      EU = gU(1602),
      PU = gU(1037),
      TU = gU.n(PU),
      qU = gU(2825),
      KU = gU(1120),
      cU = gU(1196),
      GU = gU(4248),
      jU = gU(1412),
      uU = gU(35944),
      CU = gU(1181),
      hU = gU(1320),
      QU = gU(1475),
      eU = gU(21),
      WU = gU(1420),
      fU = gU(581),
      xU = gU(4598),
      mU = gU(731),
      IU = gU(1238),
      JU = gU(1217),
      wU = gU(4608),
      nU = gU(1049),
      bU = gU(35949),
      oU = gU(35955),
      ZU = gU(1090);

    function aU(UU) {
      var RU, gU, PU, aU;
      let {
        gameNameWithVariation: YU,
        close: BU,
        initialDefaultGamemode: VU
      } = UU;
      const {
        t: rU
      } = (0, CU.B)(), XU = (0, QU.useNavigatePreserveSearch)(), [vU, dU] = (0, pU.useState)("Enter"), [HU, SU] = (0, pU.useState)(""), sU = pU.useRef(null), yU = null === (RU = mU.d[YU]) || void 0 === RU ? void 0 : RU.showWorldsInsteadOfCustomLobbies, kU = yU ? 1 : null === (gU = mU.d[YU]) || void 0 === gU ? void 0 : gU.customLobbyCustomSchematicLimit, [FU, iU] = (0, pU.useState)(!yU);
      VU || (VU = "classic_creative" === YU || "classic_creativeFlat" === YU ? "creative" : "classic" === YU ? "peaceful" : "survival");
      const AU = {
        baseOptions: {
          gameNameWithVariation: yU ? "classic" : YU,
          name: "",
          visibility: "unlisted"
        },
        listedOptions: {
          description: "",
          color: "",
          emojis: ""
        },
        mapOptions: {
          mapType: "classic_creativeFlat" === YU ? "flat" : "default",
          schematicIdList: []
        },
        worldOptions: null
      };
      yU && (AU.worldOptions = {
        defaultGamemode: VU,
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
      const [zU, MU] = (0, pU.useState)(AU), [DU, LU] = (0, pU.useState)(null);

      function NU(UU, RU) {
        MU({
          ...zU,
          baseOptions: {
            ...zU.baseOptions,
            [UU]: RU
          }
        })
      }

      function lU(UU, RU) {
        MU({
          ...zU,
          listedOptions: {
            ...zU.listedOptions,
            [UU]: RU
          }
        })
      }

      function OU(UU, RU) {
        MU({
          ...zU,
          worldOptions: {
            ...zU.worldOptions,
            [UU]: RU
          }
        })
      }

      function UR(UU) {
        MU({
          ...zU,
          mapOptions: {
            ...zU.mapOptions,
            ...UU
          }
        })
      }(0, pU.useEffect)((() => {
        GU.e.getNewStarterName().then((UU => {
          MU((RU => "" !== RU.baseOptions.name ? RU : {
            ...RU,
            baseOptions: {
              ...RU.baseOptions,
              name: UU
            }
          }))
        })).catch((UU => {
          console.error("Error getting new starter name:", UU)
        }))
      }), []), (0, pU.useEffect)((() => {
        "customSchematic" === zU.mapOptions.mapType && null === DU && (0, KU.postJsonWithMetricsCookiesAndJsonResponse)(`${cU.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
          retries: 0,
          minTimeout: 3e3
        }).then((UU => {
          LU(UU)
        }))
      }), [zU.mapOptions.mapType, DU]);
      const RR = {
          tpRequests: {
            isEnabled: () => !zU.worldOptions.disableTpRequests,
            GJ: UU => {
              OU("disableTpRequests", !UU)
            }
          },
          spawnProtection: {
            isEnabled: () => zU.worldOptions.spawnProtection,
            GJ: UU => {
              OU("spawnProtection", UU)
            }
          },
          spawnReset: {
            isEnabled: () => zU.worldOptions.enableSpawnReset,
            GJ: UU => {
              OU("enableSpawnReset", UU)
            }
          },
          smpMarketplace: {
            isEnabled: () => zU.worldOptions.enableSmpMarketplace,
            GJ: UU => {
              OU("enableSmpMarketplace", UU)
            }
          },
          survivalGuns: {
            isEnabled: () => zU.worldOptions.enableSurvivalGuns,
            GJ: UU => {
              OU("enableSurvivalGuns", UU)
            }
          },
          fallDamage: {
            isEnabled: () => !zU.worldOptions.disableFallDamage,
            GJ: UU => {
              OU("disableFallDamage", !UU)
            }
          },
          dayNight: {
            isEnabled: () => zU.worldOptions.enableDayNight,
            GJ: UU => {
              OU("enableDayNight", UU)
            }
          }
        },
        gR = "Enter" !== vU,
        tR = (0, ZU.jsx)(xU.g, {
          className: "NameInput",
          label: "general:name",
          disabled: "Enter" !== vU,
          children: (0, ZU.jsx)(EU.d, {
            domRef: sU,
            onValueChange: (UU, RU) => {
              const gU = (0, JU.rb)(UU);
              NU("name", gU), sU.current.value = gU
            },
            maxLength: JU.Q,
            defaultValue: zU.baseOptions.name
          })
        });
      return (0, ZU.jsxs)("div", {
        className: TU()("CreateCustomLobby", {
          CreateCustomLobbySuccess: "Success" === vU,
          AdvancedMode: FU
        }),
        children: ["Success" === vU && (0, ZU.jsxs)("div", {
          className: "CreateCustomLobbySuccessOverlay",
          children: [(0, ZU.jsxs)("div", {
            className: "CreateCustomLobbySuccessTitle FullyFancyText AnimFadeInScaleUp",
            children: [(0, ZU.jsx)(nU.c, {
              name: "check"
            }), (0, ZU.jsx)(WU.c, {})]
          }), (0, ZU.jsx)("div", {
            className: "CreateCustomLobbySuccessButtons AnimFadeInScaleUp",
            children: (0, ZU.jsx)(jU.j, {
              padDefaultFocus: !0,
              onClick: () => {
                (0, eU.h)("worldCreation"), XU((0, hU.e)(YU, zU.baseOptions.name))
              },
              children: rU("homePage:joinLobbyName", {
                lobbyName: zU.baseOptions.name
              })
            })
          })]
        }), (0, ZU.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, ZU.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: rU(yU ? "homePage:createWorld" : "homePage:createCustomLobby")
          })
        }), (0, ZU.jsx)(oU.d, {
          locked: gR,
          children: (0, ZU.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [!FU && tR, FU && (0, ZU.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, ZU.jsx)("div", {
                className: "SectionTitle",
                children: rU("customLobby:generalOptions")
              }), (0, ZU.jsxs)("div", {
                className: "SectionBody",
                children: [tR, (0, ZU.jsx)(xU.g, {
                  label: "customLobby:visibility",
                  circleInfoText: rU("customLobby:visibilityDescription"),
                  disabled: "Enter" !== vU,
                  children: (0, ZU.jsx)(qU.c, {
                    options: tU.s.map((UU => ({
                      value: UU,
                      label: tU.c[UU]
                    }))),
                    value: zU.baseOptions.visibility,
                    onChange: UU => {
                      NU("visibility", UU.value)
                    }
                  })
                })]
              })]
            }), yU && (0, ZU.jsx)(bU.d, {
              value: zU.worldOptions.defaultGamemode,
              onChange: UU => {
                OU("defaultGamemode", UU)
              },
              showAll: FU,
              disabled: gR
            }), (yU || !(0, fU.E)(kU) && kU > 0) && (0, ZU.jsx)(bU.e, {
              mapTypes: yU ? tU.F : tU.o,
              value: zU.mapOptions.mapType,
              onChange: UU => {
                const RU = {
                  mapType: UU
                };
                "customSchematic" !== UU && (RU.schematicIdList = []), UR(RU)
              },
              showAll: FU,
              disabled: gR,
              children: "customSchematic" === zU.mapOptions.mapType && (0, ZU.jsxs)(ZU.Fragment, {
                children: [(0, ZU.jsxs)("div", {
                  className: "SchematicListTitle AnimFadeIn",
                  children: [yU && rU("customLobby:selectWorldSchematic"), !yU && rU("customLobby:selectCustomLobbySchematics", {
                    schematicLimit: kU
                  })]
                }), (0, ZU.jsx)("div", {
                  className: TU()("SchematicListContainer AnimFadeIn", {
                    SchematicListContainerDisabled: "Enter" !== vU
                  }),
                  children: (0, ZU.jsx)(uU.c, {
                    loading: null === DU,
                    schematics: null !== DU && void 0 !== DU ? DU : [],
                    onSchematicPicked: function(UU) {
                      const RU = zU.mapOptions.schematicIdList;
                      if (RU.includes(UU.schematicId)) UR({
                        schematicIdList: RU.filter((RU => RU !== UU.schematicId))
                      });
                      else {
                        if (kU && zU.mapOptions.schematicIdList.length >= kU) return;
                        UR({
                          schematicIdList: [...zU.mapOptions.schematicIdList, UU.schematicId]
                        })
                      }
                    },
                    selectedSchematicIdList: zU.mapOptions.schematicIdList,
                    disableAutoExport: !0
                  })
                })]
              })
            }), FU && (0, ZU.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, ZU.jsx)("div", {
                className: "SectionTitle",
                children: rU("customLobby:listedOptions")
              }), (0, ZU.jsxs)("div", {
                className: "SectionBody",
                children: [(0, ZU.jsx)(xU.g, {
                  label: "general:description",
                  className: "CustomLobbyDescription",
                  disabled: "Enter" !== vU,
                  children: (0, ZU.jsx)(EU.d, {
                    onValueChange: (UU, RU) => {
                      lU("description", UU)
                    },
                    maxLength: 100,
                    defaultValue: zU.listedOptions.description
                  })
                }), (0, ZU.jsx)(xU.g, {
                  label: "general:color",
                  circleInfoText: "customLobby:lobbyColorDescription",
                  disabled: "Enter" !== vU,
                  children: (0, ZU.jsx)("div", {
                    className: "OtherInput",
                    children: (0, ZU.jsx)("input", {
                      type: "color",
                      value: zU.listedOptions.color,
                      onChange: UU => {
                        lU("color", UU.target.value)
                      }
                    })
                  })
                }), (0, ZU.jsx)(xU.g, {
                  label: "general:emojis",
                  circleInfoText: "customLobby:lobbyEmojisDescription",
                  disabled: "Enter" !== vU,
                  children: (0, ZU.jsx)(EU.d, {
                    onValueChange: (UU, RU) => {
                      lU("emojis", UU)
                    },
                    maxLength: 6,
                    defaultValue: zU.listedOptions.emojis
                  })
                })]
              })]
            }), FU && yU && (0, ZU.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, ZU.jsx)("div", {
                className: "SectionTitle",
                children: rU("customLobby:advancedOptions")
              }), (0, ZU.jsxs)("div", {
                className: "SectionBody",
                children: [(0, ZU.jsx)(xU.g, {
                  label: "classic:worldGenSeed",
                  disabled: "Enter" !== vU,
                  children: (0, ZU.jsx)(EU.d, {
                    onValueChange: (UU, RU) => {
                      OU("worldGenSeed", UU)
                    },
                    maxLength: JU.Q
                  })
                }), (0, ZU.jsx)(xU.g, {
                  label: "classic:disableProtectors",
                  disabled: "Enter" !== vU,
                  children: (0, ZU.jsx)(xU.e, {
                    checked: zU.worldOptions.disableProtectors,
                    setChecked: UU => {
                      OU("disableProtectors", UU)
                    }
                  })
                }), (0, ZU.jsx)(xU.g, {
                  label: "classic:disableTribeCreation",
                  disabled: "Enter" !== vU,
                  children: (0, ZU.jsx)(xU.e, {
                    checked: zU.worldOptions.disableTribeCreation,
                    setChecked: UU => {
                      OU("disableTribeCreation", UU)
                    }
                  })
                }), (0, ZU.jsx)(xU.g, {
                  label: "classic:voidDeathHeight",
                  circleInfoText: "classic:voidDeathHeightDescription",
                  disabled: "Enter" !== vU,
                  children: (0, ZU.jsx)("input", {
                    type: "number",
                    max: IU.C,
                    value: null !== (PU = zU.worldOptions.voidDeathHeight) && void 0 !== PU ? PU : "",
                    onChange: UU => {
                      const RU = parseInt(UU.target.value);
                      OU("voidDeathHeight", isNaN(RU) ? null : RU)
                    }
                  })
                }), (0, ZU.jsx)(xU.g, {
                  label: "classic:disableLobbySpawn",
                  disabled: "Enter" !== vU,
                  children: (0, ZU.jsx)(xU.e, {
                    checked: zU.worldOptions.disableLobbySpawn,
                    setChecked: UU => {
                      OU("disableLobbySpawn", UU)
                    }
                  })
                }), (0, ZU.jsx)(xU.g, {
                  label: "classic:worldBorder",
                  circleInfoText: "classic:worldBorderDescription",
                  disabled: "Enter" !== vU,
                  children: (0, ZU.jsx)("input", {
                    type: "number",
                    min: IU.M,
                    max: IU.G,
                    value: null !== (aU = zU.worldOptions.worldBorder) && void 0 !== aU ? aU : "",
                    onChange: UU => {
                      const RU = parseInt(UU.target.value);
                      OU("worldBorder", isNaN(RU) ? null : RU)
                    }
                  })
                }), (0, ZU.jsx)(xU.g, {
                  label: "classic:disableMobs",
                  disabled: "Enter" !== vU,
                  children: (0, ZU.jsx)(xU.e, {
                    checked: zU.worldOptions.disableMobs,
                    setChecked: UU => {
                      OU("disableMobs", UU)
                    }
                  })
                })]
              })]
            }), yU && (0, ZU.jsx)(wU.c, {
              callbacks: RR,
              disabled: "Enter" !== vU,
              advancedMode: FU
            })]
          })
        }), (0, ZU.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, ZU.jsx)(jU.j, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: "Enter" !== vU,
            onClick: () => {
              !async function() {
                if ("Enter" === vU) {
                  dU("Loading"), SU("");
                  try {
                    await GU.e.createCustomLobby(zU), dU("Success")
                  } catch (UU) {
                    SU(UU.message), console.error(UU.message), dU("Enter")
                  }
                }
              }()
            },
            children: rU("general:create")
          }), yU && (0, ZU.jsx)("div", {
            className: "CreateCustomLobbyAdvancedToggle",
            "data-pad-ignore": gR || void 0,
            children: (0, ZU.jsx)(xU.g, {
              label: "customLobby:showAdvancedOptions",
              disabled: gR,
              onLabelClick: () => {
                iU(!FU)
              },
              children: (0, ZU.jsx)(xU.e, {
                checked: FU,
                setChecked: iU
              })
            })
          }), HU && (0, ZU.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: HU
          })]
        })]
      })
    }
  },
  35955: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => qU
    });
    var tU = gU(1037),
      pU = gU.n(tU),
      EU = gU(56),
      PU = gU(4237),
      TU = gU(1090);

    function qU(UU) {
      let {
        locked: RU,
        children: gU
      } = UU;
      const tU = (0, EU.useRef)(null),
        qU = (0, PU.e)(tU, "y");
      return (0, TU.jsx)("div", {
        ref: tU,
        className: pU()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: qU.before,
          CreateCustomLobbyBodyMoreBelow: qU.after
        }),
        "data-pad-ignore": RU || void 0,
        children: gU
      })
    }
  },
  35944: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => cU,
      e: () => jU
    });
    var tU = gU(56),
      pU = gU(1333),
      EU = gU(1181),
      PU = gU(1326),
      TU = gU(3176),
      qU = gU(4593),
      KU = gU(1090);

    function cU(UU) {
      let {
        loading: RU,
        schematics: gU,
        onSchematicPicked: tU,
        selectedSchematicIdList: pU = [],
        disableAutoExport: qU
      } = UU;
      const {
        t: cU
      } = (0, EU.B)();
      return (0, KU.jsxs)("div", {
        className: "SchematicList",
        children: [RU && (0, KU.jsx)(PU.d, {}), !RU && 0 === gU.length && (0, KU.jsx)("div", {
          className: "NoSchematicsText",
          children: cU("worldBuilder:noSavedSchematic")
        }), !RU && gU.map((UU => (0, KU.jsx)(TU.f, {
          source: {
            type: "schematic",
            schematic: UU
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            tU(UU)
          },
          isSelected: pU.includes(UU.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: UU.isAutoExported && qU,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, UU.schematicId)))]
      })
    }

    function GU(UU) {
      let {
        ownedSchematics: RU,
        currentWorldSchematicId: gU,
        onClose: pU
      } = UU;
      const {
        t: PU
      } = (0, EU.B)(), [TU, GU] = (0, tU.useState)(null);
      return (0, KU.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === TU && (0, KU.jsxs)(KU.Fragment, {
          children: [(0, KU.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: PU("worldBuilder:schematicList")
          }), (0, KU.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: PU("worldBuilder:clickSchematicForOptions")
          }), (0, KU.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, KU.jsx)(cU, {
              loading: !1,
              schematics: RU,
              onSchematicPicked: UU => {
                GU(UU)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== TU && (0, KU.jsx)(qU.f, {
          schematic: TU,
          inSourceWorld: TU.schematicId === gU,
          onSchematicUpdate: UU => {
            GU(UU)
          },
          onClose: () => {
            GU(null), pU()
          }
        })]
      })
    }

    function jU(UU) {
      let {
        ownedSchematics: RU,
        currentWorldSchematicId: gU,
        onClose: tU
      } = UU;
      pU.NotificationProvider.showCustomPopup({
        body: UU => (0, KU.jsx)(GU, {
          ownedSchematics: RU,
          currentWorldSchematicId: gU,
          onClose: UU
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: tU,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  35949: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => KU,
      e: () => cU
    });
    gU(56);
    var tU = gU(1037),
      pU = gU.n(tU),
      EU = gU(4293),
      PU = gU(299),
      TU = gU(1181),
      qU = gU(1090);

    function KU(UU) {
      let {
        value: RU,
        onChange: gU,
        showAll: tU,
        disabled: KU = !1
      } = UU;
      const {
        t: cU
      } = (0, TU.B)();
      return (0, qU.jsxs)("div", {
        className: pU()("BloxdForm GamemodeForm", {
          BasicOptions: !tU
        }),
        children: [(0, qU.jsx)("div", {
          className: "SectionTitle",
          children: cU("classic:defaultGamemode")
        }), (0, qU.jsx)("div", {
          className: "SectionBody",
          children: EU.C.map((UU => tU || (0, EU.u)(UU) ? (0, qU.jsx)("button", {
            type: "button",
            className: pU()("WorldGamemode", {
              Selected: RU === UU
            }),
            disabled: KU,
            onClick: () => {
              gU(UU)
            },
            style: {
              "--background-image": `url(${PU.v[UU]})`
            },
            children: PU.r[UU]
          }, UU) : null))
        })]
      })
    }

    function cU(UU) {
      let {
        mapTypes: RU,
        value: gU,
        onChange: tU,
        showAll: KU,
        disabled: cU = !1,
        children: GU
      } = UU;
      const {
        t: jU
      } = (0, TU.B)();
      return (0, qU.jsxs)("div", {
        className: pU()("BloxdForm MapTypeForm", {
          BasicOptions: !KU
        }),
        children: [(0, qU.jsx)("div", {
          className: "SectionTitle",
          children: jU("customLobby:mapType")
        }), (0, qU.jsx)("div", {
          className: "SectionBody",
          children: RU.map((UU => KU || (0, EU.w)(UU) ? (0, qU.jsx)("button", {
            type: "button",
            className: pU()("MapType", {
              Selected: gU === UU
            }),
            disabled: cU,
            onClick: () => {
              tU(UU)
            },
            style: {
              "--background-image": `url(${PU.m[UU]})`
            },
            children: PU.l[UU]
          }, UU) : null))
        }), GU]
      })
    }
  },
  35938: () => {}
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);