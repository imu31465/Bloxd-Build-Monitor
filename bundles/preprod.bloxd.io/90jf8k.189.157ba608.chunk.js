export const id = 189;
export const ids = [189];
export const modules = {
  34938: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      CreateCustomLobby: () => xW
    });
    var CF = SF(3951),
      AF = SF(220),
      uF = SF(46),
      hF = SF(1504),
      bW = SF(918),
      dF = SF.n(bW),
      PF = SF(2332),
      RF = SF(1001),
      iW = SF(1056),
      eF = SF(3649),
      EF = SF(1266),
      QF = SF(34940),
      rW = SF(1046),
      gW = SF(1392),
      tW = SF(1352),
      TF = SF(11),
      aW = SF(1273),
      kW = SF(568),
      qW = SF(3933),
      VF = SF(612),
      NF = SF(1101),
      DF = SF(1085),
      LF = SF(3942),
      mW = SF(929),
      OF = SF(971);

    function xW(FF) {
      var WF, SF, bW, xW;
      let {
        gameNameWithVariation: ZF,
        close: oF,
        initialDefaultGamemode: YF
      } = FF;
      const {
        t: MF
      } = (0, rW.B)(), cW = (0, tW.useNavigatePreserveSearch)(), [GF, zW] = (0, uF.useState)("Enter"), [IF, fF] = (0, uF.useState)(""), yW = uF.useRef(null), sF = null === (WF = VF.e[ZF]) || void 0 === WF ? void 0 : WF.showWorldsInsteadOfCustomLobbies, nF = sF ? 1 : null === (SF = VF.e[ZF]) || void 0 === SF ? void 0 : SF.customLobbyCustomSchematicLimit, [HF, KF] = (0, uF.useState)(!sF);
      YF || (YF = "classic_creative" === ZF || "classic_creativeFlat" === ZF ? "creative" : "classic" === ZF ? "peaceful" : "survival");
      const wF = {
        baseOptions: {
          gameNameWithVariation: sF ? "classic" : ZF,
          name: "",
          visibility: "unlisted"
        },
        listedOptions: {
          description: "",
          color: "",
          emojis: ""
        },
        mapOptions: {
          mapType: "classic_creativeFlat" === ZF ? "flat" : "default",
          schematicIdList: []
        },
        worldOptions: null
      };
      sF && (wF.worldOptions = {
        defaultGamemode: YF,
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
      const [XF, UF] = (0, uF.useState)(wF), [BF, jW] = (0, uF.useState)(null);

      function vW(FF, WF) {
        UF({
          ...XF,
          baseOptions: {
            ...XF.baseOptions,
            [FF]: WF
          }
        })
      }

      function JF(FF, WF) {
        UF({
          ...XF,
          listedOptions: {
            ...XF.listedOptions,
            [FF]: WF
          }
        })
      }

      function pF(FF, WF) {
        UF({
          ...XF,
          worldOptions: {
            ...XF.worldOptions,
            [FF]: WF
          }
        })
      }

      function lF(FF) {
        UF({
          ...XF,
          mapOptions: {
            ...XF.mapOptions,
            ...FF
          }
        })
      }(0, uF.useEffect)((() => {
        eF.d.getNewStarterName().then((FF => {
          UF((WF => "" !== WF.baseOptions.name ? WF : {
            ...WF,
            baseOptions: {
              ...WF.baseOptions,
              name: FF
            }
          }))
        })).catch((FF => {
          console.error("Error getting new starter name:", FF)
        }))
      }), []), (0, uF.useEffect)((() => {
        "customSchematic" === XF.mapOptions.mapType && null === BF && (0, RF.postJsonWithMetricsCookiesAndJsonResponse)(`${iW.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
          retries: 0,
          minTimeout: 3e3
        }).then((FF => {
          jW(FF)
        }))
      }), [XF.mapOptions.mapType, BF]);
      const FW = {
          tpRequests: {
            isEnabled: () => !XF.worldOptions.disableTpRequests,
            MWF: FF => {
              pF("disableTpRequests", !FF)
            }
          },
          spawnProtection: {
            isEnabled: () => XF.worldOptions.spawnProtection,
            MWF: FF => {
              pF("spawnProtection", FF)
            }
          },
          spawnReset: {
            isEnabled: () => XF.worldOptions.enableSpawnReset,
            MWF: FF => {
              pF("enableSpawnReset", FF)
            }
          },
          smpMarketplace: {
            isEnabled: () => XF.worldOptions.enableSmpMarketplace,
            MWF: FF => {
              pF("enableSmpMarketplace", FF)
            }
          },
          survivalGuns: {
            isEnabled: () => XF.worldOptions.enableSurvivalGuns,
            MWF: FF => {
              pF("enableSurvivalGuns", FF)
            }
          },
          fallDamage: {
            isEnabled: () => !XF.worldOptions.disableFallDamage,
            MWF: FF => {
              pF("disableFallDamage", !FF)
            }
          },
          dayNight: {
            isEnabled: () => XF.worldOptions.enableDayNight,
            MWF: FF => {
              pF("enableDayNight", FF)
            }
          }
        },
        WW = "Enter" !== GF,
        SW = (0, OF.jsx)(qW.d, {
          className: "NameInput",
          label: "general:name",
          disabled: "Enter" !== GF,
          children: (0, OF.jsx)(hF.d, {
            domRef: yW,
            onValueChange: (FF, WF) => {
              const SF = (0, DF.wb)(FF);
              vW("name", SF), yW.current.value = SF
            },
            maxLength: DF.O,
            defaultValue: XF.baseOptions.name
          })
        });
      return (0, OF.jsxs)("div", {
        className: dF()("CreateCustomLobby", {
          CreateCustomLobbySuccess: "Success" === GF,
          AdvancedMode: HF
        }),
        children: ["Success" === GF && (0, OF.jsxs)("div", {
          className: "CreateCustomLobbySuccessOverlay",
          children: [(0, OF.jsxs)("div", {
            className: "CreateCustomLobbySuccessTitle FullyFancyText AnimFadeInScaleUp",
            children: [(0, OF.jsx)(mW.e, {
              name: "check"
            }), (0, OF.jsx)(aW.e, {})]
          }), (0, OF.jsx)("div", {
            className: "CreateCustomLobbySuccessButtons AnimFadeInScaleUp",
            children: (0, OF.jsx)(EF.k, {
              padDefaultFocus: !0,
              onClick: () => {
                (0, TF.c)("worldCreation"), cW((0, gW.c)(ZF, XF.baseOptions.name))
              },
              children: MF("homePage:joinLobbyName", {
                lobbyName: XF.baseOptions.name
              })
            })
          })]
        }), (0, OF.jsxs)("div", {
          className: "CreateCustomLobbyTitleContainer",
          "data-pad-ignore": WW || void 0,
          children: [(0, OF.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: MF(sF ? "homePage:createWorld" : "homePage:createCustomLobby")
          }), sF && (0, OF.jsx)(qW.d, {
            label: "customLobby:showAdvancedOptions",
            disabled: "Enter" !== GF,
            children: (0, OF.jsx)(qW.b, {
              checked: HF,
              setChecked: FF => {
                KF(FF)
              }
            })
          })]
        }), (0, OF.jsxs)("div", {
          className: "CreateCustomLobbyBody",
          children: [(0, OF.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            "data-pad-ignore": WW || void 0,
            children: [!HF && SW, HF && (0, OF.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, OF.jsx)("div", {
                className: "SectionTitle",
                children: MF("customLobby:generalOptions")
              }), (0, OF.jsxs)("div", {
                className: "SectionBody",
                children: [SW, (0, OF.jsx)(qW.d, {
                  label: "customLobby:visibility",
                  circleInfoText: MF("customLobby:visibilityDescription"),
                  disabled: "Enter" !== GF,
                  children: (0, OF.jsx)(PF.c, {
                    options: CF.h.map((FF => ({
                      value: FF,
                      label: CF.b[FF]
                    }))),
                    value: XF.baseOptions.visibility,
                    onChange: FF => {
                      vW("visibility", FF.value)
                    }
                  })
                })]
              })]
            }), sF && (0, OF.jsxs)("div", {
              className: "BloxdForm GamemodeForm",
              children: [(0, OF.jsx)("div", {
                className: "SectionTitle",
                children: MF("classic:defaultGamemode")
              }), (0, OF.jsx)("div", {
                className: "SectionBody",
                children: CF.j.map((FF => HF || "creative" === FF || "survival" === FF || "peaceful" === FF ? (0, OF.jsx)("div", {
                  className: dF()("WorldGamemode", {
                    Selected: XF.worldOptions.defaultGamemode === FF
                  }),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    WW || pF("defaultGamemode", FF)
                  },
                  style: {
                    "--background-image": `url(${AF.s[FF]})`
                  },
                  children: (0, OF.jsx)("div", {
                    className: "WorldGamemodeName",
                    children: AF.o[FF]
                  })
                }, FF) : null))
              })]
            }), (sF || !(0, kW.Q)(nF) && nF > 0) && (0, OF.jsxs)("div", {
              className: "BloxdForm MapTypeForm",
              children: [(0, OF.jsx)("div", {
                className: "SectionTitle",
                children: MF("customLobby:mapType")
              }), (0, OF.jsx)("div", {
                className: "SectionBody",
                children: (sF ? CF.l : CF.e).map((FF => HF || "customSchematic" !== FF ? (0, OF.jsx)("div", {
                  className: dF()("MapType", {
                    Selected: XF.mapOptions.mapType === FF
                  }),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    if (WW) return;
                    const WF = {
                      mapType: FF
                    };
                    "customSchematic" !== FF && (WF.schematicIdList = []), lF(WF)
                  },
                  style: {
                    "--background-image": `url(${AF.m[FF]})`
                  },
                  children: (0, OF.jsx)("div", {
                    className: "MapTypeName",
                    children: AF.k[FF]
                  })
                }, FF) : null))
              }), "customSchematic" === XF.mapOptions.mapType && (0, OF.jsxs)(OF.Fragment, {
                children: [(0, OF.jsxs)("div", {
                  className: "SchematicListTitle AnimFadeIn",
                  children: [sF && MF("customLobby:selectWorldSchematic"), !sF && MF("customLobby:selectCustomLobbySchematics", {
                    schematicLimit: nF
                  })]
                }), (0, OF.jsx)("div", {
                  className: dF()("SchematicListContainer AnimFadeIn", {
                    SchematicListContainerDisabled: "Enter" !== GF
                  }),
                  children: (0, OF.jsx)(QF.b, {
                    loading: null === BF,
                    schematics: null !== BF && void 0 !== BF ? BF : [],
                    onSchematicPicked: function(FF) {
                      const WF = XF.mapOptions.schematicIdList;
                      if (WF.includes(FF.schematicId)) lF({
                        schematicIdList: WF.filter((WF => WF !== FF.schematicId))
                      });
                      else {
                        if (nF && XF.mapOptions.schematicIdList.length >= nF) return;
                        lF({
                          schematicIdList: [...XF.mapOptions.schematicIdList, FF.schematicId]
                        })
                      }
                    },
                    selectedSchematicIdList: XF.mapOptions.schematicIdList,
                    disableAutoExport: !0
                  })
                })]
              })]
            }), HF && (0, OF.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, OF.jsx)("div", {
                className: "SectionTitle",
                children: MF("customLobby:listedOptions")
              }), (0, OF.jsxs)("div", {
                className: "SectionBody",
                children: [(0, OF.jsx)(qW.d, {
                  label: "general:description",
                  className: "CustomLobbyDescription",
                  disabled: "Enter" !== GF,
                  children: (0, OF.jsx)(hF.d, {
                    onValueChange: (FF, WF) => {
                      JF("description", FF)
                    },
                    maxLength: 100,
                    defaultValue: XF.listedOptions.description
                  })
                }), (0, OF.jsx)(qW.d, {
                  label: "general:color",
                  circleInfoText: "customLobby:lobbyColorDescription",
                  disabled: "Enter" !== GF,
                  children: (0, OF.jsx)("div", {
                    className: "OtherInput",
                    children: (0, OF.jsx)("input", {
                      type: "color",
                      value: XF.listedOptions.color,
                      onChange: FF => {
                        JF("color", FF.target.value)
                      }
                    })
                  })
                }), (0, OF.jsx)(qW.d, {
                  label: "general:emojis",
                  circleInfoText: "customLobby:lobbyEmojisDescription",
                  disabled: "Enter" !== GF,
                  children: (0, OF.jsx)(hF.d, {
                    onValueChange: (FF, WF) => {
                      JF("emojis", FF)
                    },
                    maxLength: 6,
                    defaultValue: XF.listedOptions.emojis
                  })
                })]
              })]
            }), HF && sF && (0, OF.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, OF.jsx)("div", {
                className: "SectionTitle",
                children: MF("customLobby:advancedOptions")
              }), (0, OF.jsxs)("div", {
                className: "SectionBody",
                children: [(0, OF.jsx)(qW.d, {
                  label: "classic:worldGenSeed",
                  disabled: "Enter" !== GF,
                  children: (0, OF.jsx)(hF.d, {
                    onValueChange: (FF, WF) => {
                      pF("worldGenSeed", FF)
                    },
                    maxLength: DF.O
                  })
                }), (0, OF.jsx)(qW.d, {
                  label: "classic:disableProtectors",
                  disabled: "Enter" !== GF,
                  children: (0, OF.jsx)(qW.b, {
                    checked: XF.worldOptions.disableProtectors,
                    setChecked: FF => {
                      pF("disableProtectors", FF)
                    }
                  })
                }), (0, OF.jsx)(qW.d, {
                  label: "classic:disableTribeCreation",
                  disabled: "Enter" !== GF,
                  children: (0, OF.jsx)(qW.b, {
                    checked: XF.worldOptions.disableTribeCreation,
                    setChecked: FF => {
                      pF("disableTribeCreation", FF)
                    }
                  })
                }), (0, OF.jsx)(qW.d, {
                  label: "classic:voidDeathHeight",
                  circleInfoText: "classic:voidDeathHeightDescription",
                  disabled: "Enter" !== GF,
                  children: (0, OF.jsx)("input", {
                    type: "number",
                    max: NF.H,
                    value: null !== (bW = XF.worldOptions.voidDeathHeight) && void 0 !== bW ? bW : "",
                    onChange: FF => {
                      const WF = parseInt(FF.target.value);
                      pF("voidDeathHeight", isNaN(WF) ? null : WF)
                    }
                  })
                }), (0, OF.jsx)(qW.d, {
                  label: "classic:disableLobbySpawn",
                  disabled: "Enter" !== GF,
                  children: (0, OF.jsx)(qW.b, {
                    checked: XF.worldOptions.disableLobbySpawn,
                    setChecked: FF => {
                      pF("disableLobbySpawn", FF)
                    }
                  })
                }), (0, OF.jsx)(qW.d, {
                  label: "classic:worldBorder",
                  circleInfoText: "classic:worldBorderDescription",
                  disabled: "Enter" !== GF,
                  children: (0, OF.jsx)("input", {
                    type: "number",
                    min: NF.O,
                    max: NF.J,
                    value: null !== (xW = XF.worldOptions.worldBorder) && void 0 !== xW ? xW : "",
                    onChange: FF => {
                      const WF = parseInt(FF.target.value);
                      pF("worldBorder", isNaN(WF) ? null : WF)
                    }
                  })
                }), (0, OF.jsx)(qW.d, {
                  label: "classic:disableMobs",
                  disabled: "Enter" !== GF,
                  children: (0, OF.jsx)(qW.b, {
                    checked: XF.worldOptions.disableMobs,
                    setChecked: FF => {
                      pF("disableMobs", FF)
                    }
                  })
                })]
              })]
            }), sF && (0, OF.jsx)(LF.d, {
              callbacks: FW,
              disabled: "Enter" !== GF,
              advancedMode: HF
            })]
          }), (0, OF.jsxs)("div", {
            className: "CreateCustomLobbyFooter",
            children: [(0, OF.jsx)(EF.k, {
              className: "CreateCustomLobbyButton",
              padDefaultFocus: !0,
              loading: "Enter" !== GF,
              onClick: () => {
                !async function() {
                  if ("Enter" === GF) {
                    zW("Loading"), fF("");
                    try {
                      await eF.d.createCustomLobby(XF), zW("Success")
                    } catch (FF) {
                      fF(FF.message), console.error(FF.message), zW("Enter")
                    }
                  }
                }()
              },
              children: MF("general:create")
            }), IF && (0, OF.jsx)("div", {
              className: "CreateCustomLobbyError AnimFadeInScaleUp",
              children: IF
            })]
          })]
        })]
      })
    }
  },
  34940: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => RF,
      f: () => eF
    });
    var CF = SF(46),
      AF = SF(1189),
      uF = SF(1046),
      hF = SF(1186),
      bW = SF(2649),
      dF = SF(3924),
      PF = SF(971);

    function RF(FF) {
      let {
        loading: WF,
        schematics: SF,
        onSchematicPicked: CF,
        selectedSchematicIdList: AF = [],
        disableAutoExport: dF
      } = FF;
      const {
        t: RF
      } = (0, uF.B)();
      return (0, PF.jsxs)("div", {
        className: "SchematicList",
        children: [WF && (0, PF.jsx)(hF.c, {}), !WF && 0 === SF.length && (0, PF.jsx)("div", {
          className: "NoSchematicsText",
          children: RF("worldBuilder:noSavedSchematic")
        }), !WF && SF.map((FF => (0, PF.jsx)(bW.f, {
          source: {
            type: "schematic",
            schematic: FF
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            CF(FF)
          },
          isSelected: AF.includes(FF.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: FF.isAutoExported && dF,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, FF.schematicId)))]
      })
    }

    function iW(FF) {
      let {
        ownedSchematics: WF,
        currentWorldSchematicId: SF,
        onClose: AF
      } = FF;
      const {
        t: hF
      } = (0, uF.B)(), [bW, iW] = (0, CF.useState)(null);
      return (0, PF.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === bW && (0, PF.jsxs)(PF.Fragment, {
          children: [(0, PF.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: hF("worldBuilder:schematicList")
          }), (0, PF.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: hF("worldBuilder:clickSchematicForOptions")
          }), (0, PF.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, PF.jsx)(RF, {
              loading: !1,
              schematics: WF,
              onSchematicPicked: FF => {
                iW(FF)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== bW && (0, PF.jsx)(dF.g, {
          schematic: bW,
          inSourceWorld: bW.schematicId === SF,
          onSchematicUpdate: FF => {
            iW(FF)
          },
          onClose: () => {
            iW(null), AF()
          }
        })]
      })
    }

    function eF(FF) {
      let {
        ownedSchematics: WF,
        currentWorldSchematicId: SF,
        onClose: CF
      } = FF;
      AF.NotificationProvider.showCustomPopup({
        body: FF => (0, PF.jsx)(iW, {
          ownedSchematics: WF,
          currentWorldSchematicId: SF,
          onClose: FF
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: CF,
        unlockPointerKey: "schematicListPopup"
      })
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);