export const id = 189;
export const ids = [189];
export const modules = {
  34653: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      CreateCustomLobby: () => jR
    });
    var wW = MW(3926),
      CW = MW(232),
      zR = MW(75),
      AW = MW(1489),
      bR = MW(897),
      yR = MW.n(bR),
      NW = MW(2273),
      eW = MW(975),
      BW = MW(1033),
      tR = MW(3618),
      TW = MW(1255),
      gR = MW(34656),
      iR = MW(1027),
      YW = MW(1379),
      JW = MW(1330),
      PW = MW(27),
      IW = MW(1264),
      oW = MW(564),
      lW = MW(3919),
      FW = MW(607),
      fW = MW(1066),
      QW = MW(1053),
      rR = MW(3922),
      cR = MW(904),
      XW = MW(940);

    function jR(WW) {
      var RW, MW, bR, jR;
      let {
        gameNameWithVariation: kR,
        close: aR,
        initialDefaultGamemode: sW
      } = WW;
      const {
        t: dW
      } = (0, iR.C)(), pW = (0, JW.useNavigatePreserveSearch)(), [hW, UW] = (0, zR.useState)("Enter"), [EW, VW] = (0, zR.useState)(""), mR = zR.useRef(null), xR = null === (RW = FW.b[kR]) || void 0 === RW ? void 0 : RW.showWorldsInsteadOfCustomLobbies, vR = xR ? 1 : null === (MW = FW.b[kR]) || void 0 === MW ? void 0 : MW.customLobbyCustomSchematicLimit, [KW, uW] = (0, zR.useState)(!xR);
      sW || (sW = "classic_creative" === kR || "classic_creativeFlat" === kR ? "creative" : "classic" === kR ? "peaceful" : "survival");
      const OW = {
        baseOptions: {
          gameNameWithVariation: xR ? "classic" : kR,
          name: "",
          visibility: "unlisted"
        },
        listedOptions: {
          description: "",
          color: "",
          emojis: ""
        },
        mapOptions: {
          mapType: "classic_creativeFlat" === kR ? "flat" : "default",
          schematicIdList: []
        },
        worldOptions: null
      };
      xR && (OW.worldOptions = {
        defaultGamemode: sW,
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
      const [nW, GW] = (0, zR.useState)(OW), [LW, HW] = (0, zR.useState)(null);

      function DW(WW, RW) {
        GW({
          ...nW,
          baseOptions: {
            ...nW.baseOptions,
            [WW]: RW
          }
        })
      }

      function qR(WW, RW) {
        GW({
          ...nW,
          listedOptions: {
            ...nW.listedOptions,
            [WW]: RW
          }
        })
      }

      function ZW(WW, RW) {
        GW({
          ...nW,
          worldOptions: {
            ...nW.worldOptions,
            [WW]: RW
          }
        })
      }

      function SW(WW) {
        GW({
          ...nW,
          mapOptions: {
            ...nW.mapOptions,
            ...WW
          }
        })
      }(0, zR.useEffect)((() => {
        tR.d.getNewStarterName().then((WW => {
          GW((RW => "" !== RW.baseOptions.name ? RW : {
            ...RW,
            baseOptions: {
              ...RW.baseOptions,
              name: WW
            }
          }))
        })).catch((WW => {
          console.error("Error getting new starter name:", WW)
        }))
      }), []), (0, zR.useEffect)((() => {
        "customSchematic" === nW.mapOptions.mapType && null === LW && (0, eW.postJsonWithMetricsCookiesAndJsonResponse)(`${BW.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
          retries: 0,
          minTimeout: 3e3
        }).then((WW => {
          HW(WW)
        }))
      }), [nW.mapOptions.mapType, LW]);
      const WR = {
          tpRequests: {
            isEnabled: () => !nW.worldOptions.disableTpRequests,
            kMW: WW => {
              ZW("disableTpRequests", !WW)
            }
          },
          spawnProtection: {
            isEnabled: () => nW.worldOptions.spawnProtection,
            kMW: WW => {
              ZW("spawnProtection", WW)
            }
          },
          spawnReset: {
            isEnabled: () => nW.worldOptions.enableSpawnReset,
            kMW: WW => {
              ZW("enableSpawnReset", WW)
            }
          },
          smpMarketplace: {
            isEnabled: () => nW.worldOptions.enableSmpMarketplace,
            kMW: WW => {
              ZW("enableSmpMarketplace", WW)
            }
          },
          survivalGuns: {
            isEnabled: () => nW.worldOptions.enableSurvivalGuns,
            kMW: WW => {
              ZW("enableSurvivalGuns", WW)
            }
          },
          fallDamage: {
            isEnabled: () => !nW.worldOptions.disableFallDamage,
            kMW: WW => {
              ZW("disableFallDamage", !WW)
            }
          },
          dayNight: {
            isEnabled: () => nW.worldOptions.enableDayNight,
            kMW: WW => {
              ZW("enableDayNight", WW)
            }
          }
        },
        RR = "Enter" !== hW,
        MR = (0, XW.jsx)(lW.e, {
          className: "NameInput",
          label: "general:name",
          disabled: "Enter" !== hW,
          children: (0, XW.jsx)(AW.e, {
            domRef: mR,
            onValueChange: (WW, RW) => {
              const MW = (0, QW.lb)(WW);
              DW("name", MW), mR.current.value = MW
            },
            maxLength: QW.H,
            defaultValue: nW.baseOptions.name
          })
        });
      return (0, XW.jsxs)("div", {
        className: yR()("CreateCustomLobby", {
          CreateCustomLobbySuccess: "Success" === hW,
          AdvancedMode: KW
        }),
        children: ["Success" === hW && (0, XW.jsxs)("div", {
          className: "CreateCustomLobbySuccessOverlay",
          children: [(0, XW.jsxs)("div", {
            className: "CreateCustomLobbySuccessTitle FullyFancyText AnimFadeInScaleUp",
            children: [(0, XW.jsx)(cR.e, {
              name: "check"
            }), (0, XW.jsx)(IW.b, {})]
          }), (0, XW.jsx)("div", {
            className: "CreateCustomLobbySuccessButtons AnimFadeInScaleUp",
            children: (0, XW.jsx)(TW.m, {
              padDefaultFocus: !0,
              onClick: () => {
                (0, PW.f)("worldCreation"), pW((0, YW.d)(kR, nW.baseOptions.name))
              },
              children: dW("homePage:joinLobbyName", {
                lobbyName: nW.baseOptions.name
              })
            })
          })]
        }), (0, XW.jsxs)("div", {
          className: "CreateCustomLobbyTitleContainer",
          "data-pad-ignore": RR || void 0,
          children: [(0, XW.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: dW(xR ? "homePage:createWorld" : "homePage:createCustomLobby")
          }), xR && (0, XW.jsx)(lW.e, {
            label: "customLobby:showAdvancedOptions",
            disabled: "Enter" !== hW,
            children: (0, XW.jsx)(lW.c, {
              checked: KW,
              setChecked: WW => {
                uW(WW)
              }
            })
          })]
        }), (0, XW.jsxs)("div", {
          className: "CreateCustomLobbyBody",
          children: [(0, XW.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            "data-pad-ignore": RR || void 0,
            children: [!KW && MR, KW && (0, XW.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, XW.jsx)("div", {
                className: "SectionTitle",
                children: dW("customLobby:generalOptions")
              }), (0, XW.jsxs)("div", {
                className: "SectionBody",
                children: [MR, (0, XW.jsx)(lW.e, {
                  label: "customLobby:visibility",
                  circleInfoText: dW("customLobby:visibilityDescription"),
                  disabled: "Enter" !== hW,
                  children: (0, XW.jsx)(NW.b, {
                    options: wW.m.map((WW => ({
                      value: WW,
                      label: wW.d[WW]
                    }))),
                    value: nW.baseOptions.visibility,
                    onChange: WW => {
                      DW("visibility", WW.value)
                    }
                  })
                })]
              })]
            }), xR && (0, XW.jsxs)("div", {
              className: "BloxdForm GamemodeForm",
              children: [(0, XW.jsx)("div", {
                className: "SectionTitle",
                children: dW("classic:defaultGamemode")
              }), (0, XW.jsx)("div", {
                className: "SectionBody",
                children: wW.o.map((WW => KW || "creative" === WW || "survival" === WW || "peaceful" === WW ? (0, XW.jsx)("div", {
                  className: yR()("WorldGamemode", {
                    Selected: nW.worldOptions.defaultGamemode === WW
                  }),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    RR || ZW("defaultGamemode", WW)
                  },
                  style: {
                    "--background-image": `url(${CW.w[WW]})`
                  },
                  children: (0, XW.jsx)("div", {
                    className: "WorldGamemodeName",
                    children: CW.u[WW]
                  })
                }, WW) : null))
              })]
            }), (xR || !(0, oW.S)(vR) && vR > 0) && (0, XW.jsxs)("div", {
              className: "BloxdForm MapTypeForm",
              children: [(0, XW.jsx)("div", {
                className: "SectionTitle",
                children: dW("customLobby:mapType")
              }), (0, XW.jsx)("div", {
                className: "SectionBody",
                children: (xR ? wW.p : wW.j).map((WW => KW || "customSchematic" !== WW ? (0, XW.jsx)("div", {
                  className: yR()("MapType", {
                    Selected: nW.mapOptions.mapType === WW
                  }),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    if (RR) return;
                    const RW = {
                      mapType: WW
                    };
                    "customSchematic" !== WW && (RW.schematicIdList = []), SW(RW)
                  },
                  style: {
                    "--background-image": `url(${CW.p[WW]})`
                  },
                  children: (0, XW.jsx)("div", {
                    className: "MapTypeName",
                    children: CW.m[WW]
                  })
                }, WW) : null))
              }), "customSchematic" === nW.mapOptions.mapType && (0, XW.jsxs)(XW.Fragment, {
                children: [(0, XW.jsxs)("div", {
                  className: "SchematicListTitle AnimFadeIn",
                  children: [xR && dW("customLobby:selectWorldSchematic"), !xR && dW("customLobby:selectCustomLobbySchematics", {
                    schematicLimit: vR
                  })]
                }), (0, XW.jsx)("div", {
                  className: yR()("SchematicListContainer AnimFadeIn", {
                    SchematicListContainerDisabled: "Enter" !== hW
                  }),
                  children: (0, XW.jsx)(gR.d, {
                    loading: null === LW,
                    schematics: null !== LW && void 0 !== LW ? LW : [],
                    onSchematicPicked: function(WW) {
                      const RW = nW.mapOptions.schematicIdList;
                      if (RW.includes(WW.schematicId)) SW({
                        schematicIdList: RW.filter((RW => RW !== WW.schematicId))
                      });
                      else {
                        if (vR && nW.mapOptions.schematicIdList.length >= vR) return;
                        SW({
                          schematicIdList: [...nW.mapOptions.schematicIdList, WW.schematicId]
                        })
                      }
                    },
                    selectedSchematicIdList: nW.mapOptions.schematicIdList,
                    disableAutoExport: !0
                  })
                })]
              })]
            }), KW && (0, XW.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, XW.jsx)("div", {
                className: "SectionTitle",
                children: dW("customLobby:listedOptions")
              }), (0, XW.jsxs)("div", {
                className: "SectionBody",
                children: [(0, XW.jsx)(lW.e, {
                  label: "general:description",
                  className: "CustomLobbyDescription",
                  disabled: "Enter" !== hW,
                  children: (0, XW.jsx)(AW.e, {
                    onValueChange: (WW, RW) => {
                      qR("description", WW)
                    },
                    maxLength: 100,
                    defaultValue: nW.listedOptions.description
                  })
                }), (0, XW.jsx)(lW.e, {
                  label: "general:color",
                  circleInfoText: "customLobby:lobbyColorDescription",
                  disabled: "Enter" !== hW,
                  children: (0, XW.jsx)("div", {
                    className: "OtherInput",
                    children: (0, XW.jsx)("input", {
                      type: "color",
                      value: nW.listedOptions.color,
                      onChange: WW => {
                        qR("color", WW.target.value)
                      }
                    })
                  })
                }), (0, XW.jsx)(lW.e, {
                  label: "general:emojis",
                  circleInfoText: "customLobby:lobbyEmojisDescription",
                  disabled: "Enter" !== hW,
                  children: (0, XW.jsx)(AW.e, {
                    onValueChange: (WW, RW) => {
                      qR("emojis", WW)
                    },
                    maxLength: 6,
                    defaultValue: nW.listedOptions.emojis
                  })
                })]
              })]
            }), KW && xR && (0, XW.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, XW.jsx)("div", {
                className: "SectionTitle",
                children: dW("customLobby:advancedOptions")
              }), (0, XW.jsxs)("div", {
                className: "SectionBody",
                children: [(0, XW.jsx)(lW.e, {
                  label: "classic:worldGenSeed",
                  disabled: "Enter" !== hW,
                  children: (0, XW.jsx)(AW.e, {
                    onValueChange: (WW, RW) => {
                      ZW("worldGenSeed", WW)
                    },
                    maxLength: QW.H
                  })
                }), (0, XW.jsx)(lW.e, {
                  label: "classic:disableProtectors",
                  disabled: "Enter" !== hW,
                  children: (0, XW.jsx)(lW.c, {
                    checked: nW.worldOptions.disableProtectors,
                    setChecked: WW => {
                      ZW("disableProtectors", WW)
                    }
                  })
                }), (0, XW.jsx)(lW.e, {
                  label: "classic:disableTribeCreation",
                  disabled: "Enter" !== hW,
                  children: (0, XW.jsx)(lW.c, {
                    checked: nW.worldOptions.disableTribeCreation,
                    setChecked: WW => {
                      ZW("disableTribeCreation", WW)
                    }
                  })
                }), (0, XW.jsx)(lW.e, {
                  label: "classic:voidDeathHeight",
                  circleInfoText: "classic:voidDeathHeightDescription",
                  disabled: "Enter" !== hW,
                  children: (0, XW.jsx)("input", {
                    type: "number",
                    max: fW.K,
                    value: null !== (bR = nW.worldOptions.voidDeathHeight) && void 0 !== bR ? bR : "",
                    onChange: WW => {
                      const RW = parseInt(WW.target.value);
                      ZW("voidDeathHeight", isNaN(RW) ? null : RW)
                    }
                  })
                }), (0, XW.jsx)(lW.e, {
                  label: "classic:disableLobbySpawn",
                  disabled: "Enter" !== hW,
                  children: (0, XW.jsx)(lW.c, {
                    checked: nW.worldOptions.disableLobbySpawn,
                    setChecked: WW => {
                      ZW("disableLobbySpawn", WW)
                    }
                  })
                }), (0, XW.jsx)(lW.e, {
                  label: "classic:worldBorder",
                  circleInfoText: "classic:worldBorderDescription",
                  disabled: "Enter" !== hW,
                  children: (0, XW.jsx)("input", {
                    type: "number",
                    min: fW.U,
                    max: fW.M,
                    value: null !== (jR = nW.worldOptions.worldBorder) && void 0 !== jR ? jR : "",
                    onChange: WW => {
                      const RW = parseInt(WW.target.value);
                      ZW("worldBorder", isNaN(RW) ? null : RW)
                    }
                  })
                }), (0, XW.jsx)(lW.e, {
                  label: "classic:disableMobs",
                  disabled: "Enter" !== hW,
                  children: (0, XW.jsx)(lW.c, {
                    checked: nW.worldOptions.disableMobs,
                    setChecked: WW => {
                      ZW("disableMobs", WW)
                    }
                  })
                })]
              })]
            }), xR && (0, XW.jsx)(rR.d, {
              callbacks: WR,
              disabled: "Enter" !== hW,
              advancedMode: KW
            })]
          }), (0, XW.jsxs)("div", {
            className: "CreateCustomLobbyFooter",
            children: [(0, XW.jsx)(TW.m, {
              className: "CreateCustomLobbyButton",
              padDefaultFocus: !0,
              loading: "Enter" !== hW,
              onClick: () => {
                !async function() {
                  if ("Enter" === hW) {
                    UW("Loading"), VW("");
                    try {
                      await tR.d.createCustomLobby(nW), UW("Success")
                    } catch (WW) {
                      VW(WW.message), console.error(WW.message), UW("Enter")
                    }
                  }
                }()
              },
              children: dW("general:create")
            }), EW && (0, XW.jsx)("div", {
              className: "CreateCustomLobbyError AnimFadeInScaleUp",
              children: EW
            })]
          })]
        })]
      })
    }
  },
  34656: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => eW,
      e: () => tR
    });
    var wW = MW(75),
      CW = MW(1166),
      zR = MW(1027),
      AW = MW(1157),
      bR = MW(2576),
      yR = MW(3911),
      NW = MW(940);

    function eW(WW) {
      let {
        loading: RW,
        schematics: MW,
        onSchematicPicked: wW,
        selectedSchematicIdList: CW = [],
        disableAutoExport: yR
      } = WW;
      const {
        t: eW
      } = (0, zR.C)();
      return (0, NW.jsxs)("div", {
        className: "SchematicList",
        children: [RW && (0, NW.jsx)(AW.d, {}), !RW && 0 === MW.length && (0, NW.jsx)("div", {
          className: "NoSchematicsText",
          children: eW("worldBuilder:noSavedSchematic")
        }), !RW && MW.map((WW => (0, NW.jsx)(bR.d, {
          source: {
            type: "schematic",
            schematic: WW
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            wW(WW)
          },
          isSelected: CW.includes(WW.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: WW.isAutoExported && yR,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, WW.schematicId)))]
      })
    }

    function BW(WW) {
      let {
        ownedSchematics: RW,
        currentWorldSchematicId: MW,
        onClose: CW
      } = WW;
      const {
        t: AW
      } = (0, zR.C)(), [bR, BW] = (0, wW.useState)(null);
      return (0, NW.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === bR && (0, NW.jsxs)(NW.Fragment, {
          children: [(0, NW.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: AW("worldBuilder:schematicList")
          }), (0, NW.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: AW("worldBuilder:clickSchematicForOptions")
          }), (0, NW.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, NW.jsx)(eW, {
              loading: !1,
              schematics: RW,
              onSchematicPicked: WW => {
                BW(WW)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== bR && (0, NW.jsx)(yR.h, {
          schematic: bR,
          inSourceWorld: bR.schematicId === MW,
          onSchematicUpdate: WW => {
            BW(WW)
          },
          onClose: () => {
            BW(null), CW()
          }
        })]
      })
    }

    function tR(WW) {
      let {
        ownedSchematics: RW,
        currentWorldSchematicId: MW,
        onClose: wW
      } = WW;
      CW.NotificationProvider.showCustomPopup({
        body: WW => (0, NW.jsx)(BW, {
          ownedSchematics: RW,
          currentWorldSchematicId: MW,
          onClose: WW
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: wW,
        unlockPointerKey: "schematicListPopup"
      })
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);