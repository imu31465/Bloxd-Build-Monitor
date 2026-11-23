export const id = 213;
export const ids = [213];
export const modules = {
  36223: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      CreateCustomLobby: () => YC
    });
    ZC(36227);
    var QC = ZC(4562),
      wC = ZC(48),
      bC = ZC(1593),
      nC = ZC(1002),
      fC = ZC.n(nC),
      oC = ZC(3113),
      qC = ZC(1078),
      FC = ZC(1149),
      WC = ZC(4525),
      NC = ZC(1388),
      MC = ZC(36234),
      gC = ZC(1143),
      SC = ZC(1284),
      pC = ZC(1453),
      PC = ZC(20),
      GC = ZC(1392),
      RC = ZC(600),
      AC = ZC(4876),
      xC = ZC(728),
      JC = ZC(1183),
      IC = ZC(1169),
      iC = ZC(4887),
      vC = ZC(1013),
      eC = ZC(36241),
      hC = ZC(36244),
      KC = ZC(1056);

    function YC(CC) {
      var zC, ZC, nC, YC;
      let {
        gameNameWithVariation: dC,
        close: mC,
        initialDefaultGamemode: HC
      } = CC;
      const {
        t: EC
      } = (0, gC.y)(), lC = (0, pC.useNavigatePreserveSearch)(), [XC, cC] = (0, wC.useState)("Enter"), [uC, rC] = (0, wC.useState)(""), sC = wC.useRef(null), TC = null === (zC = xC.d[dC]) || void 0 === zC ? void 0 : zC.showWorldsInsteadOfCustomLobbies, aC = TC ? 1 : null === (ZC = xC.d[dC]) || void 0 === ZC ? void 0 : ZC.customLobbyCustomSchematicLimit, [tC, DC] = (0, wC.useState)(!TC);
      HC || (HC = "classic_creative" === dC || "classic_creativeFlat" === dC ? "creative" : "classic" === dC ? "peaceful" : "survival");
      const jC = {
        baseOptions: {
          gameNameWithVariation: TC ? "classic" : dC,
          name: "",
          visibility: "unlisted"
        },
        listedOptions: {
          description: "",
          color: "",
          emojis: ""
        },
        mapOptions: {
          mapType: "classic_creativeFlat" === dC ? "flat" : "default",
          schematicIdList: []
        },
        worldOptions: null
      };
      TC && (jC.worldOptions = {
        defaultGamemode: HC,
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
      const [yC, LC] = (0, wC.useState)(jC), [UC, BC] = (0, wC.useState)(null);

      function OC(CC, zC) {
        LC({
          ...yC,
          baseOptions: {
            ...yC.baseOptions,
            [CC]: zC
          }
        })
      }

      function kC(CC, zC) {
        LC({
          ...yC,
          listedOptions: {
            ...yC.listedOptions,
            [CC]: zC
          }
        })
      }

      function VC(CC, zC) {
        LC({
          ...yC,
          worldOptions: {
            ...yC.worldOptions,
            [CC]: zC
          }
        })
      }

      function Cz(CC) {
        LC({
          ...yC,
          mapOptions: {
            ...yC.mapOptions,
            ...CC
          }
        })
      }(0, wC.useEffect)((() => {
        WC.d.getNewStarterName().then((CC => {
          LC((zC => "" !== zC.baseOptions.name ? zC : {
            ...zC,
            baseOptions: {
              ...zC.baseOptions,
              name: CC
            }
          }))
        })).catch((CC => {
          console.error("Error getting new starter name:", CC)
        }))
      }), []), (0, wC.useEffect)((() => {
        "customSchematic" === yC.mapOptions.mapType && null === UC && (0, qC.postJsonWithMetricsCookiesAndJsonResponse)(`${FC.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
          retries: 0,
          minTimeout: 3e3
        }).then((CC => {
          BC(CC)
        }))
      }), [yC.mapOptions.mapType, UC]);
      const zz = {
          tpRequests: {
            isEnabled: () => !yC.worldOptions.disableTpRequests,
            IK: CC => {
              VC("disableTpRequests", !CC)
            }
          },
          spawnProtection: {
            isEnabled: () => yC.worldOptions.spawnProtection,
            IK: CC => {
              VC("spawnProtection", CC)
            }
          },
          spawnReset: {
            isEnabled: () => yC.worldOptions.enableSpawnReset,
            IK: CC => {
              VC("enableSpawnReset", CC)
            }
          },
          smpMarketplace: {
            isEnabled: () => yC.worldOptions.enableSmpMarketplace,
            IK: CC => {
              VC("enableSmpMarketplace", CC)
            }
          },
          survivalGuns: {
            isEnabled: () => yC.worldOptions.enableSurvivalGuns,
            IK: CC => {
              VC("enableSurvivalGuns", CC)
            }
          },
          fallDamage: {
            isEnabled: () => !yC.worldOptions.disableFallDamage,
            IK: CC => {
              VC("disableFallDamage", !CC)
            }
          },
          dayNight: {
            isEnabled: () => yC.worldOptions.enableDayNight,
            IK: CC => {
              VC("enableDayNight", CC)
            }
          }
        },
        Zz = "Enter" !== XC,
        Qz = (0, KC.jsx)(AC.h, {
          className: "NameInput",
          label: "general:name",
          disabled: "Enter" !== XC,
          children: (0, KC.jsx)(bC.c, {
            domRef: sC,
            onValueChange: (CC, zC) => {
              const ZC = (0, IC.Ab)(CC);
              OC("name", ZC), sC.current.value = ZC
            },
            maxLength: IC.W,
            defaultValue: yC.baseOptions.name
          })
        });
      return (0, KC.jsxs)("div", {
        className: fC()("CreateCustomLobby", {
          CreateCustomLobbySuccess: "Success" === XC,
          AdvancedMode: tC
        }),
        children: ["Success" === XC && (0, KC.jsxs)("div", {
          className: "CreateCustomLobbySuccessOverlay",
          children: [(0, KC.jsxs)("div", {
            className: "CreateCustomLobbySuccessTitle FullyFancyText AnimFadeInScaleUp",
            children: [(0, KC.jsx)(vC.c, {
              name: "check"
            }), (0, KC.jsx)(GC.c, {})]
          }), (0, KC.jsx)("div", {
            className: "CreateCustomLobbySuccessButtons AnimFadeInScaleUp",
            children: (0, KC.jsx)(NC.o, {
              padDefaultFocus: !0,
              onClick: () => {
                (0, PC.g)("worldCreation"), lC((0, SC.b)(dC, yC.baseOptions.name))
              },
              children: EC("homePage:joinLobbyName", {
                lobbyName: yC.baseOptions.name
              })
            })
          })]
        }), (0, KC.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, KC.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: EC(TC ? "homePage:createWorld" : "homePage:createCustomLobby")
          })
        }), (0, KC.jsx)(hC.c, {
          locked: Zz,
          children: (0, KC.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [!tC && Qz, tC && (0, KC.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, KC.jsx)("div", {
                className: "SectionTitle",
                children: EC("customLobby:generalOptions")
              }), (0, KC.jsxs)("div", {
                className: "SectionBody",
                children: [Qz, (0, KC.jsx)(AC.h, {
                  label: "customLobby:visibility",
                  circleInfoText: EC("customLobby:visibilityDescription"),
                  disabled: "Enter" !== XC,
                  children: (0, KC.jsx)(oC.b, {
                    options: QC.t.map((CC => ({
                      value: CC,
                      label: QC.d[CC]
                    }))),
                    value: yC.baseOptions.visibility,
                    onChange: CC => {
                      OC("visibility", CC.value)
                    }
                  })
                })]
              })]
            }), TC && (0, KC.jsx)(eC.e, {
              value: yC.worldOptions.defaultGamemode,
              onChange: CC => {
                VC("defaultGamemode", CC)
              },
              showAll: tC,
              disabled: Zz
            }), (TC || !(0, RC.H)(aC) && aC > 0) && (0, KC.jsx)(eC.h, {
              mapTypes: TC ? QC.I : QC.p,
              value: yC.mapOptions.mapType,
              onChange: CC => {
                const zC = {
                  mapType: CC
                };
                "customSchematic" !== CC && (zC.schematicIdList = []), Cz(zC)
              },
              showAll: tC,
              disabled: Zz,
              children: "customSchematic" === yC.mapOptions.mapType && (0, KC.jsxs)(KC.Fragment, {
                children: [(0, KC.jsxs)("div", {
                  className: "SchematicListTitle AnimFadeIn",
                  children: [TC && EC("customLobby:selectWorldSchematic"), !TC && EC("customLobby:selectCustomLobbySchematics", {
                    schematicLimit: aC
                  })]
                }), (0, KC.jsx)("div", {
                  className: fC()("SchematicListContainer AnimFadeIn", {
                    SchematicListContainerDisabled: "Enter" !== XC
                  }),
                  children: (0, KC.jsx)(MC.d, {
                    loading: null === UC,
                    schematics: null !== UC && void 0 !== UC ? UC : [],
                    onSchematicPicked: function(CC) {
                      const zC = yC.mapOptions.schematicIdList;
                      if (zC.includes(CC.schematicId)) Cz({
                        schematicIdList: zC.filter((zC => zC !== CC.schematicId))
                      });
                      else {
                        if (aC && yC.mapOptions.schematicIdList.length >= aC) return;
                        Cz({
                          schematicIdList: [...yC.mapOptions.schematicIdList, CC.schematicId]
                        })
                      }
                    },
                    selectedSchematicIdList: yC.mapOptions.schematicIdList,
                    disableAutoExport: !0
                  })
                })]
              })
            }), tC && (0, KC.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, KC.jsx)("div", {
                className: "SectionTitle",
                children: EC("customLobby:listedOptions")
              }), (0, KC.jsxs)("div", {
                className: "SectionBody",
                children: [(0, KC.jsx)(AC.h, {
                  label: "general:description",
                  className: "CustomLobbyDescription",
                  disabled: "Enter" !== XC,
                  children: (0, KC.jsx)(bC.c, {
                    onValueChange: (CC, zC) => {
                      kC("description", CC)
                    },
                    maxLength: 100,
                    defaultValue: yC.listedOptions.description
                  })
                }), (0, KC.jsx)(AC.h, {
                  label: "general:color",
                  circleInfoText: "customLobby:lobbyColorDescription",
                  disabled: "Enter" !== XC,
                  children: (0, KC.jsx)("div", {
                    className: "OtherInput",
                    children: (0, KC.jsx)("input", {
                      type: "color",
                      value: yC.listedOptions.color,
                      onChange: CC => {
                        kC("color", CC.target.value)
                      }
                    })
                  })
                }), (0, KC.jsx)(AC.h, {
                  label: "general:emojis",
                  circleInfoText: "customLobby:lobbyEmojisDescription",
                  disabled: "Enter" !== XC,
                  children: (0, KC.jsx)(bC.c, {
                    onValueChange: (CC, zC) => {
                      kC("emojis", CC)
                    },
                    maxLength: 6,
                    defaultValue: yC.listedOptions.emojis
                  })
                })]
              })]
            }), tC && TC && (0, KC.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, KC.jsx)("div", {
                className: "SectionTitle",
                children: EC("customLobby:advancedOptions")
              }), (0, KC.jsxs)("div", {
                className: "SectionBody",
                children: [(0, KC.jsx)(AC.h, {
                  label: "classic:worldGenSeed",
                  disabled: "Enter" !== XC,
                  children: (0, KC.jsx)(bC.c, {
                    onValueChange: (CC, zC) => {
                      VC("worldGenSeed", CC)
                    },
                    maxLength: IC.W
                  })
                }), (0, KC.jsx)(AC.h, {
                  label: "classic:disableProtectors",
                  disabled: "Enter" !== XC,
                  children: (0, KC.jsx)(AC.d, {
                    checked: yC.worldOptions.disableProtectors,
                    setChecked: CC => {
                      VC("disableProtectors", CC)
                    }
                  })
                }), (0, KC.jsx)(AC.h, {
                  label: "classic:disableTribeCreation",
                  disabled: "Enter" !== XC,
                  children: (0, KC.jsx)(AC.d, {
                    checked: yC.worldOptions.disableTribeCreation,
                    setChecked: CC => {
                      VC("disableTribeCreation", CC)
                    }
                  })
                }), (0, KC.jsx)(AC.h, {
                  label: "classic:voidDeathHeight",
                  circleInfoText: "classic:voidDeathHeightDescription",
                  disabled: "Enter" !== XC,
                  children: (0, KC.jsx)("input", {
                    type: "number",
                    max: JC.G,
                    value: null !== (nC = yC.worldOptions.voidDeathHeight) && void 0 !== nC ? nC : "",
                    onChange: CC => {
                      const zC = parseInt(CC.target.value);
                      VC("voidDeathHeight", isNaN(zC) ? null : zC)
                    }
                  })
                }), (0, KC.jsx)(AC.h, {
                  label: "classic:disableLobbySpawn",
                  disabled: "Enter" !== XC,
                  children: (0, KC.jsx)(AC.d, {
                    checked: yC.worldOptions.disableLobbySpawn,
                    setChecked: CC => {
                      VC("disableLobbySpawn", CC)
                    }
                  })
                }), (0, KC.jsx)(AC.h, {
                  label: "classic:worldBorder",
                  circleInfoText: "classic:worldBorderDescription",
                  disabled: "Enter" !== XC,
                  children: (0, KC.jsx)("input", {
                    type: "number",
                    min: JC.Q,
                    max: JC.K,
                    value: null !== (YC = yC.worldOptions.worldBorder) && void 0 !== YC ? YC : "",
                    onChange: CC => {
                      const zC = parseInt(CC.target.value);
                      VC("worldBorder", isNaN(zC) ? null : zC)
                    }
                  })
                }), (0, KC.jsx)(AC.h, {
                  label: "classic:disableMobs",
                  disabled: "Enter" !== XC,
                  children: (0, KC.jsx)(AC.d, {
                    checked: yC.worldOptions.disableMobs,
                    setChecked: CC => {
                      VC("disableMobs", CC)
                    }
                  })
                })]
              })]
            }), TC && (0, KC.jsx)(iC.e, {
              callbacks: zz,
              disabled: "Enter" !== XC,
              advancedMode: tC
            })]
          })
        }), (0, KC.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, KC.jsx)(NC.o, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: "Enter" !== XC,
            onClick: () => {
              !async function() {
                if ("Enter" === XC) {
                  cC("Loading"), rC("");
                  try {
                    await WC.d.createCustomLobby(yC), cC("Success")
                  } catch (CC) {
                    rC(CC.message), console.error(CC.message), cC("Enter")
                  }
                }
              }()
            },
            children: EC("general:create")
          }), TC && (0, KC.jsx)("div", {
            className: "CreateCustomLobbyAdvancedToggle",
            "data-pad-ignore": Zz || void 0,
            children: (0, KC.jsx)(AC.h, {
              label: "customLobby:showAdvancedOptions",
              disabled: Zz,
              onLabelClick: () => {
                DC(!tC)
              },
              children: (0, KC.jsx)(AC.d, {
                checked: tC,
                setChecked: DC
              })
            })
          }), uC && (0, KC.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: uC
          })]
        })]
      })
    }
  },
  36244: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => oC
    });
    var QC = ZC(1002),
      wC = ZC.n(QC),
      bC = ZC(48),
      nC = ZC(4515),
      fC = ZC(1056);

    function oC(CC) {
      let {
        locked: zC,
        children: ZC
      } = CC;
      const QC = (0, bC.useRef)(null),
        oC = (0, nC.b)(QC, "y");
      return (0, fC.jsx)("div", {
        ref: QC,
        className: wC()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: oC.before,
          CreateCustomLobbyBodyMoreBelow: oC.after
        }),
        "data-pad-ignore": zC || void 0,
        children: ZC
      })
    }
  },
  36234: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => FC,
      e: () => NC
    });
    var QC = ZC(48),
      wC = ZC(1307),
      bC = ZC(1143),
      nC = ZC(1295),
      fC = ZC(3448),
      oC = ZC(4873),
      qC = ZC(1056);

    function FC(CC) {
      let {
        loading: zC,
        schematics: ZC,
        onSchematicPicked: QC,
        selectedSchematicIdList: wC = [],
        disableAutoExport: oC
      } = CC;
      const {
        t: FC
      } = (0, bC.y)();
      return (0, qC.jsxs)("div", {
        className: "SchematicList",
        children: [zC && (0, qC.jsx)(nC.d, {}), !zC && 0 === ZC.length && (0, qC.jsx)("div", {
          className: "NoSchematicsText",
          children: FC("worldBuilder:noSavedSchematic")
        }), !zC && ZC.map((CC => (0, qC.jsx)(fC.d, {
          source: {
            type: "schematic",
            schematic: CC
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            QC(CC)
          },
          isSelected: wC.includes(CC.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: CC.isAutoExported && oC,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, CC.schematicId)))]
      })
    }

    function WC(CC) {
      let {
        ownedSchematics: zC,
        currentWorldSchematicId: ZC,
        onClose: wC
      } = CC;
      const {
        t: nC
      } = (0, bC.y)(), [fC, WC] = (0, QC.useState)(null);
      return (0, qC.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === fC && (0, qC.jsxs)(qC.Fragment, {
          children: [(0, qC.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: nC("worldBuilder:schematicList")
          }), (0, qC.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: nC("worldBuilder:clickSchematicForOptions")
          }), (0, qC.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, qC.jsx)(FC, {
              loading: !1,
              schematics: zC,
              onSchematicPicked: CC => {
                WC(CC)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== fC && (0, qC.jsx)(oC.k, {
          schematic: fC,
          inSourceWorld: fC.schematicId === ZC,
          onSchematicUpdate: CC => {
            WC(CC)
          },
          onClose: () => {
            WC(null), wC()
          }
        })]
      })
    }

    function NC(CC) {
      let {
        ownedSchematics: zC,
        currentWorldSchematicId: ZC,
        onClose: QC
      } = CC;
      wC.NotificationProvider.showCustomPopup({
        body: CC => (0, qC.jsx)(WC, {
          ownedSchematics: zC,
          currentWorldSchematicId: ZC,
          onClose: CC
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: QC,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  36241: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => qC,
      h: () => FC
    });
    ZC(48);
    var QC = ZC(1002),
      wC = ZC.n(QC),
      bC = ZC(4562),
      nC = ZC(310),
      fC = ZC(1143),
      oC = ZC(1056);

    function qC(CC) {
      let {
        value: zC,
        onChange: ZC,
        showAll: QC,
        disabled: qC = !1
      } = CC;
      const {
        t: FC
      } = (0, fC.y)();
      return (0, oC.jsxs)("div", {
        className: wC()("BloxdForm GamemodeForm", {
          BasicOptions: !QC
        }),
        children: [(0, oC.jsx)("div", {
          className: "SectionTitle",
          children: FC("classic:defaultGamemode")
        }), (0, oC.jsx)("div", {
          className: "SectionBody",
          children: bC.H.map((CC => QC || (0, bC.B)(CC) ? (0, oC.jsx)("button", {
            type: "button",
            className: wC()("WorldGamemode", {
              Selected: zC === CC
            }),
            disabled: qC,
            onClick: () => {
              ZC(CC)
            },
            style: {
              "--background-image": `url(${nC.s[CC]})`
            },
            children: nC.q[CC]
          }, CC) : null))
        })]
      })
    }

    function FC(CC) {
      let {
        mapTypes: zC,
        value: ZC,
        onChange: QC,
        showAll: qC,
        disabled: FC = !1,
        children: WC
      } = CC;
      const {
        t: NC
      } = (0, fC.y)();
      return (0, oC.jsxs)("div", {
        className: wC()("BloxdForm MapTypeForm", {
          BasicOptions: !qC
        }),
        children: [(0, oC.jsx)("div", {
          className: "SectionTitle",
          children: NC("customLobby:mapType")
        }), (0, oC.jsx)("div", {
          className: "SectionBody",
          children: zC.map((CC => qC || (0, bC.D)(CC) ? (0, oC.jsx)("button", {
            type: "button",
            className: wC()("MapType", {
              Selected: ZC === CC
            }),
            disabled: FC,
            onClick: () => {
              QC(CC)
            },
            style: {
              "--background-image": `url(${nC.k[CC]})`
            },
            children: nC.j[CC]
          }, CC) : null))
        }), WC]
      })
    }
  },
  36227: () => {}
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);