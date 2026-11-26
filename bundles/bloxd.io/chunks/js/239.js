export const id = 239;
export const ids = [239];
export const modules = {
  37029: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      CreateCustomLobby: () => uB
    });
    GB(37036);
    var YB = GB(5047),
      DB = GB(56),
      QB = GB(1735),
      oB = GB(1090),
      jB = GB.n(oB),
      yB = GB(3544),
      JB = GB(1121),
      MB = GB(1186),
      PB = GB(5011),
      zB = GB(1485),
      lB = GB(37041),
      pB = GB(1175),
      qB = GB(1360),
      ZB = GB(1560),
      NB = GB(16),
      RB = GB(1493),
      WB = GB(641),
      AB = GB(5418),
      VB = GB(791),
      SB = GB(1238),
      nB = GB(1217),
      UB = GB(5430),
      fB = GB(1383),
      kB = GB(37044),
      dB = GB(37046),
      KB = GB(1282);

    function uB(BB) {
      var OB, GB, oB, uB;
      let {
        gameNameWithVariation: mB,
        close: IB,
        initialDefaultGamemode: FB
      } = BB;
      const {
        t: iB
      } = (0, pB.H)(), LB = (0, ZB.useNavigatePreserveSearch)(), [gB, rB] = (0, DB.useState)("Enter"), [XB, wB] = (0, DB.useState)(""), EB = DB.useRef(null), cB = null === (OB = VB.b[mB]) || void 0 === OB ? void 0 : OB.showWorldsInsteadOfCustomLobbies, hB = cB ? 1 : null === (GB = VB.b[mB]) || void 0 === GB ? void 0 : GB.customLobbyCustomSchematicLimit, [aB, eB] = (0, DB.useState)(!cB);
      FB || (FB = "classic_creative" === mB || "classic_creativeFlat" === mB ? "creative" : "classic" === mB ? "peaceful" : "survival");
      const TB = {
        baseOptions: {
          gameNameWithVariation: cB ? "classic" : mB,
          name: "",
          visibility: "unlisted"
        },
        listedOptions: {
          description: "",
          color: "",
          emojis: ""
        },
        mapOptions: {
          mapType: "classic_creativeFlat" === mB ? "flat" : "default",
          schematicIdList: []
        },
        worldOptions: null
      };
      cB && (TB.worldOptions = {
        defaultGamemode: FB,
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
      const [bB, CB] = (0, DB.useState)(TB), [HB, vB] = (0, DB.useState)(null);

      function sB(BB, OB) {
        CB({
          ...bB,
          baseOptions: {
            ...bB.baseOptions,
            [BB]: OB
          }
        })
      }

      function xB(BB, OB) {
        CB({
          ...bB,
          listedOptions: {
            ...bB.listedOptions,
            [BB]: OB
          }
        })
      }

      function tB(BB, OB) {
        CB({
          ...bB,
          worldOptions: {
            ...bB.worldOptions,
            [BB]: OB
          }
        })
      }

      function BO(BB) {
        CB({
          ...bB,
          mapOptions: {
            ...bB.mapOptions,
            ...BB
          }
        })
      }(0, DB.useEffect)((() => {
        PB.c.getNewStarterName().then((BB => {
          CB((OB => "" !== OB.baseOptions.name ? OB : {
            ...OB,
            baseOptions: {
              ...OB.baseOptions,
              name: BB
            }
          }))
        })).catch((BB => {
          console.error("Error getting new starter name:", BB)
        }))
      }), []), (0, DB.useEffect)((() => {
        "customSchematic" === bB.mapOptions.mapType && null === HB && (0, JB.postJsonWithMetricsCookiesAndJsonResponse)(`${MB.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
          retries: 0,
          minTimeout: 3e3
        }).then((BB => {
          vB(BB)
        }))
      }), [bB.mapOptions.mapType, HB]);
      const OO = {
          tpRequests: {
            isEnabled: () => !bB.worldOptions.disableTpRequests,
            Zk: BB => {
              tB("disableTpRequests", !BB)
            }
          },
          spawnProtection: {
            isEnabled: () => bB.worldOptions.spawnProtection,
            Zk: BB => {
              tB("spawnProtection", BB)
            }
          },
          spawnReset: {
            isEnabled: () => bB.worldOptions.enableSpawnReset,
            Zk: BB => {
              tB("enableSpawnReset", BB)
            }
          },
          smpMarketplace: {
            isEnabled: () => bB.worldOptions.enableSmpMarketplace,
            Zk: BB => {
              tB("enableSmpMarketplace", BB)
            }
          },
          survivalGuns: {
            isEnabled: () => bB.worldOptions.enableSurvivalGuns,
            Zk: BB => {
              tB("enableSurvivalGuns", BB)
            }
          },
          fallDamage: {
            isEnabled: () => !bB.worldOptions.disableFallDamage,
            Zk: BB => {
              tB("disableFallDamage", !BB)
            }
          },
          dayNight: {
            isEnabled: () => bB.worldOptions.enableDayNight,
            Zk: BB => {
              tB("enableDayNight", BB)
            }
          }
        },
        GO = "Enter" !== gB,
        YO = (0, KB.jsx)(AB.d, {
          className: "NameInput",
          label: "general:name",
          disabled: "Enter" !== gB,
          children: (0, KB.jsx)(QB.b, {
            domRef: EB,
            onValueChange: (BB, OB) => {
              const GB = (0, nB.vb)(BB);
              sB("name", GB), EB.current.value = GB
            },
            maxLength: nB.T,
            defaultValue: bB.baseOptions.name
          })
        });
      return (0, KB.jsxs)("div", {
        className: jB()("CreateCustomLobby", {
          CreateCustomLobbySuccess: "Success" === gB,
          AdvancedMode: aB
        }),
        children: ["Success" === gB && (0, KB.jsxs)("div", {
          className: "CreateCustomLobbySuccessOverlay",
          children: [(0, KB.jsxs)("div", {
            className: "CreateCustomLobbySuccessTitle FullyFancyText AnimFadeInScaleUp",
            children: [(0, KB.jsx)(fB.b, {
              name: "check"
            }), (0, KB.jsx)(RB.c, {})]
          }), (0, KB.jsx)("div", {
            className: "CreateCustomLobbySuccessButtons AnimFadeInScaleUp",
            children: (0, KB.jsx)(zB.q, {
              padDefaultFocus: !0,
              onClick: () => {
                (0, NB.m)("worldCreation"), LB((0, qB.c)(mB, bB.baseOptions.name))
              },
              children: iB("homePage:joinLobbyName", {
                lobbyName: bB.baseOptions.name
              })
            })
          })]
        }), (0, KB.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, KB.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: iB(cB ? "homePage:createWorld" : "homePage:createCustomLobby")
          })
        }), (0, KB.jsx)(dB.e, {
          locked: GO,
          children: (0, KB.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [!aB && YO, aB && (0, KB.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, KB.jsx)("div", {
                className: "SectionTitle",
                children: iB("customLobby:generalOptions")
              }), (0, KB.jsxs)("div", {
                className: "SectionBody",
                children: [YO, (0, KB.jsx)(AB.d, {
                  label: "customLobby:visibility",
                  circleInfoText: iB("customLobby:visibilityDescription"),
                  disabled: "Enter" !== gB,
                  children: (0, KB.jsx)(yB.c, {
                    options: YB.s.map((BB => ({
                      value: BB,
                      label: YB.e[BB]
                    }))),
                    value: bB.baseOptions.visibility,
                    onChange: BB => {
                      sB("visibility", BB.value)
                    }
                  })
                })]
              })]
            }), cB && (0, KB.jsx)(kB.d, {
              value: bB.worldOptions.defaultGamemode,
              onChange: BB => {
                tB("defaultGamemode", BB)
              },
              showAll: aB,
              disabled: GO
            }), (cB || !(0, WB.Q)(hB) && hB > 0) && (0, KB.jsx)(kB.g, {
              mapTypes: cB ? YB.I : YB.q,
              value: bB.mapOptions.mapType,
              onChange: BB => {
                const OB = {
                  mapType: BB
                };
                "customSchematic" !== BB && (OB.schematicIdList = []), BO(OB)
              },
              showAll: aB,
              disabled: GO,
              children: "customSchematic" === bB.mapOptions.mapType && (0, KB.jsxs)(KB.Fragment, {
                children: [(0, KB.jsxs)("div", {
                  className: "SchematicListTitle AnimFadeIn",
                  children: [cB && iB("customLobby:selectWorldSchematic"), !cB && iB("customLobby:selectCustomLobbySchematics", {
                    schematicLimit: hB
                  })]
                }), (0, KB.jsx)("div", {
                  className: jB()("SchematicListContainer AnimFadeIn", {
                    SchematicListContainerDisabled: "Enter" !== gB
                  }),
                  children: (0, KB.jsx)(lB.d, {
                    loading: null === HB,
                    schematics: null !== HB && void 0 !== HB ? HB : [],
                    onSchematicPicked: function(BB) {
                      const OB = bB.mapOptions.schematicIdList;
                      if (OB.includes(BB.schematicId)) BO({
                        schematicIdList: OB.filter((OB => OB !== BB.schematicId))
                      });
                      else {
                        if (hB && bB.mapOptions.schematicIdList.length >= hB) return;
                        BO({
                          schematicIdList: [...bB.mapOptions.schematicIdList, BB.schematicId]
                        })
                      }
                    },
                    selectedSchematicIdList: bB.mapOptions.schematicIdList,
                    disableAutoExport: !0
                  })
                })]
              })
            }), aB && (0, KB.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, KB.jsx)("div", {
                className: "SectionTitle",
                children: iB("customLobby:listedOptions")
              }), (0, KB.jsxs)("div", {
                className: "SectionBody",
                children: [(0, KB.jsx)(AB.d, {
                  label: "general:description",
                  className: "CustomLobbyDescription",
                  disabled: "Enter" !== gB,
                  children: (0, KB.jsx)(QB.b, {
                    onValueChange: (BB, OB) => {
                      xB("description", BB)
                    },
                    maxLength: 100,
                    defaultValue: bB.listedOptions.description
                  })
                }), (0, KB.jsx)(AB.d, {
                  label: "general:color",
                  circleInfoText: "customLobby:lobbyColorDescription",
                  disabled: "Enter" !== gB,
                  children: (0, KB.jsx)("div", {
                    className: "OtherInput",
                    children: (0, KB.jsx)("input", {
                      type: "color",
                      value: bB.listedOptions.color,
                      onChange: BB => {
                        xB("color", BB.target.value)
                      }
                    })
                  })
                }), (0, KB.jsx)(AB.d, {
                  label: "general:emojis",
                  circleInfoText: "customLobby:lobbyEmojisDescription",
                  disabled: "Enter" !== gB,
                  children: (0, KB.jsx)(QB.b, {
                    onValueChange: (BB, OB) => {
                      xB("emojis", BB)
                    },
                    maxLength: 6,
                    defaultValue: bB.listedOptions.emojis
                  })
                })]
              })]
            }), aB && cB && (0, KB.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, KB.jsx)("div", {
                className: "SectionTitle",
                children: iB("customLobby:advancedOptions")
              }), (0, KB.jsxs)("div", {
                className: "SectionBody",
                children: [(0, KB.jsx)(AB.d, {
                  label: "classic:worldGenSeed",
                  disabled: "Enter" !== gB,
                  children: (0, KB.jsx)(QB.b, {
                    onValueChange: (BB, OB) => {
                      tB("worldGenSeed", BB)
                    },
                    maxLength: nB.T
                  })
                }), (0, KB.jsx)(AB.d, {
                  label: "classic:disableProtectors",
                  disabled: "Enter" !== gB,
                  children: (0, KB.jsx)(AB.b, {
                    checked: bB.worldOptions.disableProtectors,
                    setChecked: BB => {
                      tB("disableProtectors", BB)
                    }
                  })
                }), (0, KB.jsx)(AB.d, {
                  label: "classic:disableTribeCreation",
                  disabled: "Enter" !== gB,
                  children: (0, KB.jsx)(AB.b, {
                    checked: bB.worldOptions.disableTribeCreation,
                    setChecked: BB => {
                      tB("disableTribeCreation", BB)
                    }
                  })
                }), (0, KB.jsx)(AB.d, {
                  label: "classic:voidDeathHeight",
                  circleInfoText: "classic:voidDeathHeightDescription",
                  disabled: "Enter" !== gB,
                  children: (0, KB.jsx)("input", {
                    type: "number",
                    max: SB.D,
                    value: null !== (oB = bB.worldOptions.voidDeathHeight) && void 0 !== oB ? oB : "",
                    onChange: BB => {
                      const OB = parseInt(BB.target.value);
                      tB("voidDeathHeight", isNaN(OB) ? null : OB)
                    }
                  })
                }), (0, KB.jsx)(AB.d, {
                  label: "classic:disableLobbySpawn",
                  disabled: "Enter" !== gB,
                  children: (0, KB.jsx)(AB.b, {
                    checked: bB.worldOptions.disableLobbySpawn,
                    setChecked: BB => {
                      tB("disableLobbySpawn", BB)
                    }
                  })
                }), (0, KB.jsx)(AB.d, {
                  label: "classic:worldBorder",
                  circleInfoText: "classic:worldBorderDescription",
                  disabled: "Enter" !== gB,
                  children: (0, KB.jsx)("input", {
                    type: "number",
                    min: SB.M,
                    max: SB.H,
                    value: null !== (uB = bB.worldOptions.worldBorder) && void 0 !== uB ? uB : "",
                    onChange: BB => {
                      const OB = parseInt(BB.target.value);
                      tB("worldBorder", isNaN(OB) ? null : OB)
                    }
                  })
                }), (0, KB.jsx)(AB.d, {
                  label: "classic:disableMobs",
                  disabled: "Enter" !== gB,
                  children: (0, KB.jsx)(AB.b, {
                    checked: bB.worldOptions.disableMobs,
                    setChecked: BB => {
                      tB("disableMobs", BB)
                    }
                  })
                })]
              })]
            }), cB && (0, KB.jsx)(UB.d, {
              callbacks: OO,
              disabled: "Enter" !== gB,
              advancedMode: aB
            })]
          })
        }), (0, KB.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, KB.jsx)(zB.q, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: "Enter" !== gB,
            onClick: () => {
              !async function() {
                if ("Enter" === gB) {
                  rB("Loading"), wB("");
                  try {
                    await PB.c.createCustomLobby(bB), rB("Success")
                  } catch (BB) {
                    wB(BB.message), console.error(BB.message), rB("Enter")
                  }
                }
              }()
            },
            children: iB("general:create")
          }), cB && (0, KB.jsx)("div", {
            className: "CreateCustomLobbyAdvancedToggle",
            "data-pad-ignore": GO || void 0,
            children: (0, KB.jsx)(AB.d, {
              label: "customLobby:showAdvancedOptions",
              disabled: GO,
              onLabelClick: () => {
                eB(!aB)
              },
              children: (0, KB.jsx)(AB.b, {
                checked: aB,
                setChecked: eB
              })
            })
          }), XB && (0, KB.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: XB
          })]
        })]
      })
    }
  },
  37046: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => yB
    });
    var YB = GB(1090),
      DB = GB.n(YB),
      QB = GB(56),
      oB = GB(4998),
      jB = GB(1282);

    function yB(BB) {
      let {
        locked: OB,
        children: GB
      } = BB;
      const YB = (0, QB.useRef)(null),
        yB = (0, oB.d)(YB, "y");
      return (0, jB.jsx)("div", {
        ref: YB,
        className: DB()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: yB.before,
          CreateCustomLobbyBodyMoreBelow: yB.after
        }),
        "data-pad-ignore": OB || void 0,
        children: GB
      })
    }
  },
  37041: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => MB,
      f: () => zB
    });
    var YB = GB(56),
      DB = GB(1400),
      QB = GB(1175),
      oB = GB(1375),
      jB = GB(3926),
      yB = GB(5414),
      JB = GB(1282);

    function MB(BB) {
      let {
        loading: OB,
        schematics: GB,
        onSchematicPicked: YB,
        selectedSchematicIdList: DB = [],
        disableAutoExport: yB
      } = BB;
      const {
        t: MB
      } = (0, QB.H)();
      return (0, JB.jsxs)("div", {
        className: "SchematicList",
        children: [OB && (0, JB.jsx)(oB.b, {}), !OB && 0 === GB.length && (0, JB.jsx)("div", {
          className: "NoSchematicsText",
          children: MB("worldBuilder:noSavedSchematic")
        }), !OB && GB.map((BB => (0, JB.jsx)(jB.h, {
          source: {
            type: "schematic",
            schematic: BB
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            YB(BB)
          },
          isSelected: DB.includes(BB.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: BB.isAutoExported && yB,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, BB.schematicId)))]
      })
    }

    function PB(BB) {
      let {
        ownedSchematics: OB,
        currentWorldSchematicId: GB,
        onClose: DB
      } = BB;
      const {
        t: oB
      } = (0, QB.H)(), [jB, PB] = (0, YB.useState)(null);
      return (0, JB.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === jB && (0, JB.jsxs)(JB.Fragment, {
          children: [(0, JB.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: oB("worldBuilder:schematicList")
          }), (0, JB.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: oB("worldBuilder:clickSchematicForOptions")
          }), (0, JB.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, JB.jsx)(MB, {
              loading: !1,
              schematics: OB,
              onSchematicPicked: BB => {
                PB(BB)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== jB && (0, JB.jsx)(yB.k, {
          schematic: jB,
          inSourceWorld: jB.schematicId === GB,
          onSchematicUpdate: BB => {
            PB(BB)
          },
          onClose: () => {
            PB(null), DB()
          }
        })]
      })
    }

    function zB(BB) {
      let {
        ownedSchematics: OB,
        currentWorldSchematicId: GB,
        onClose: YB
      } = BB;
      DB.NotificationProvider.showCustomPopup({
        body: BB => (0, JB.jsx)(PB, {
          ownedSchematics: OB,
          currentWorldSchematicId: GB,
          onClose: BB
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: YB,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  37044: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => JB,
      g: () => MB
    });
    GB(56);
    var YB = GB(1090),
      DB = GB.n(YB),
      QB = GB(5047),
      oB = GB(331),
      jB = GB(1175),
      yB = GB(1282);

    function JB(BB) {
      let {
        value: OB,
        onChange: GB,
        showAll: YB,
        disabled: JB = !1
      } = BB;
      const {
        t: MB
      } = (0, jB.H)();
      return (0, yB.jsxs)("div", {
        className: DB()("BloxdForm GamemodeForm", {
          BasicOptions: !YB
        }),
        children: [(0, yB.jsx)("div", {
          className: "SectionTitle",
          children: MB("classic:defaultGamemode")
        }), (0, yB.jsx)("div", {
          className: "SectionBody",
          children: QB.F.map((BB => YB || (0, QB.w)(BB) ? (0, yB.jsx)("button", {
            type: "button",
            className: DB()("WorldGamemode", {
              Selected: OB === BB
            }),
            disabled: JB,
            onClick: () => {
              GB(BB)
            },
            style: {
              "--background-image": `url(${oB.x[BB]})`
            },
            children: oB.t[BB]
          }, BB) : null))
        })]
      })
    }

    function MB(BB) {
      let {
        mapTypes: OB,
        value: GB,
        onChange: YB,
        showAll: JB,
        disabled: MB = !1,
        children: PB
      } = BB;
      const {
        t: zB
      } = (0, jB.H)();
      return (0, yB.jsxs)("div", {
        className: DB()("BloxdForm MapTypeForm", {
          BasicOptions: !JB
        }),
        children: [(0, yB.jsx)("div", {
          className: "SectionTitle",
          children: zB("customLobby:mapType")
        }), (0, yB.jsx)("div", {
          className: "SectionBody",
          children: OB.map((BB => JB || (0, QB.A)(BB) ? (0, yB.jsx)("button", {
            type: "button",
            className: DB()("MapType", {
              Selected: GB === BB
            }),
            disabled: MB,
            onClick: () => {
              YB(BB)
            },
            style: {
              "--background-image": `url(${oB.m[BB]})`
            },
            children: oB.l[BB]
          }, BB) : null))
        }), PB]
      })
    }
  },
  37036: () => {}
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);