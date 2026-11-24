export const id = 213;
export const ids = [213];
export const modules = {
  36318: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      CreateCustomLobby: () => TD
    });
    wD(36326);
    var pD = wD(4657),
      sD = wD(58),
      KD = wD(1687),
      rD = wD(1044),
      LD = wD.n(rD),
      cD = wD(3115),
      gD = wD(1130),
      RD = wD(1211),
      AD = wD(4612),
      UD = wD(1447),
      fD = wD(36330),
      ID = wD(1200),
      BD = wD(1339),
      GD = wD(1511),
      hD = wD(20),
      nD = wD(1453),
      MD = wD(619),
      OD = wD(4954),
      JD = wD(760),
      ED = wD(1245),
      QD = wD(1232),
      XD = wD(4963),
      VD = wD(1057),
      PD = wD(36338),
      CD = wD(36345),
      xD = wD(1096);

    function TD(DD) {
      var zD, wD, rD, TD;
      let {
        gameNameWithVariation: bD,
        close: jD,
        initialDefaultGamemode: dD
      } = DD;
      const {
        t: SD
      } = (0, ID.E)(), iD = (0, GD.useNavigatePreserveSearch)(), [lD, WD] = (0, sD.useState)("Enter"), [ND, ZD] = (0, sD.useState)(""), yD = sD.useRef(null), kD = null === (zD = JD.e[bD]) || void 0 === zD ? void 0 : zD.showWorldsInsteadOfCustomLobbies, mD = kD ? 1 : null === (wD = JD.e[bD]) || void 0 === wD ? void 0 : wD.customLobbyCustomSchematicLimit, [eD, oD] = (0, sD.useState)(!kD);
      dD || (dD = "classic_creative" === bD || "classic_creativeFlat" === bD ? "creative" : "classic" === bD ? "peaceful" : "survival");
      const aD = {
        baseOptions: {
          gameNameWithVariation: kD ? "classic" : bD,
          name: "",
          visibility: "unlisted"
        },
        listedOptions: {
          description: "",
          color: "",
          emojis: ""
        },
        mapOptions: {
          mapType: "classic_creativeFlat" === bD ? "flat" : "default",
          schematicIdList: []
        },
        worldOptions: null
      };
      kD && (aD.worldOptions = {
        defaultGamemode: dD,
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
      const [uD, vD] = (0, sD.useState)(aD), [tD, FD] = (0, sD.useState)(null);

      function YD(DD, zD) {
        vD({
          ...uD,
          baseOptions: {
            ...uD.baseOptions,
            [DD]: zD
          }
        })
      }

      function HD(DD, zD) {
        vD({
          ...uD,
          listedOptions: {
            ...uD.listedOptions,
            [DD]: zD
          }
        })
      }

      function qD(DD, zD) {
        vD({
          ...uD,
          worldOptions: {
            ...uD.worldOptions,
            [DD]: zD
          }
        })
      }

      function Dz(DD) {
        vD({
          ...uD,
          mapOptions: {
            ...uD.mapOptions,
            ...DD
          }
        })
      }(0, sD.useEffect)((() => {
        AD.d.getNewStarterName().then((DD => {
          vD((zD => "" !== zD.baseOptions.name ? zD : {
            ...zD,
            baseOptions: {
              ...zD.baseOptions,
              name: DD
            }
          }))
        })).catch((DD => {
          console.error("Error getting new starter name:", DD)
        }))
      }), []), (0, sD.useEffect)((() => {
        "customSchematic" === uD.mapOptions.mapType && null === tD && (0, gD.postJsonWithMetricsCookiesAndJsonResponse)(`${RD.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
          retries: 0,
          minTimeout: 3e3
        }).then((DD => {
          FD(DD)
        }))
      }), [uD.mapOptions.mapType, tD]);
      const zz = {
          tpRequests: {
            isEnabled: () => !uD.worldOptions.disableTpRequests,
            nC: DD => {
              qD("disableTpRequests", !DD)
            }
          },
          spawnProtection: {
            isEnabled: () => uD.worldOptions.spawnProtection,
            nC: DD => {
              qD("spawnProtection", DD)
            }
          },
          spawnReset: {
            isEnabled: () => uD.worldOptions.enableSpawnReset,
            nC: DD => {
              qD("enableSpawnReset", DD)
            }
          },
          smpMarketplace: {
            isEnabled: () => uD.worldOptions.enableSmpMarketplace,
            nC: DD => {
              qD("enableSmpMarketplace", DD)
            }
          },
          survivalGuns: {
            isEnabled: () => uD.worldOptions.enableSurvivalGuns,
            nC: DD => {
              qD("enableSurvivalGuns", DD)
            }
          },
          fallDamage: {
            isEnabled: () => !uD.worldOptions.disableFallDamage,
            nC: DD => {
              qD("disableFallDamage", !DD)
            }
          },
          dayNight: {
            isEnabled: () => uD.worldOptions.enableDayNight,
            nC: DD => {
              qD("enableDayNight", DD)
            }
          }
        },
        wz = "Enter" !== lD,
        pz = (0, xD.jsx)(OD.e, {
          className: "NameInput",
          label: "general:name",
          disabled: "Enter" !== lD,
          children: (0, xD.jsx)(KD.e, {
            domRef: yD,
            onValueChange: (DD, zD) => {
              const wD = (0, QD.mb)(DD);
              YD("name", wD), yD.current.value = wD
            },
            maxLength: QD.L,
            defaultValue: uD.baseOptions.name
          })
        });
      return (0, xD.jsxs)("div", {
        className: LD()("CreateCustomLobby", {
          CreateCustomLobbySuccess: "Success" === lD,
          AdvancedMode: eD
        }),
        children: ["Success" === lD && (0, xD.jsxs)("div", {
          className: "CreateCustomLobbySuccessOverlay",
          children: [(0, xD.jsxs)("div", {
            className: "CreateCustomLobbySuccessTitle FullyFancyText AnimFadeInScaleUp",
            children: [(0, xD.jsx)(VD.e, {
              name: "check"
            }), (0, xD.jsx)(nD.b, {})]
          }), (0, xD.jsx)("div", {
            className: "CreateCustomLobbySuccessButtons AnimFadeInScaleUp",
            children: (0, xD.jsx)(UD.o, {
              padDefaultFocus: !0,
              onClick: () => {
                (0, hD.k)("worldCreation"), iD((0, BD.c)(bD, uD.baseOptions.name))
              },
              children: SD("homePage:joinLobbyName", {
                lobbyName: uD.baseOptions.name
              })
            })
          })]
        }), (0, xD.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, xD.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: SD(kD ? "homePage:createWorld" : "homePage:createCustomLobby")
          })
        }), (0, xD.jsx)(CD.e, {
          locked: wz,
          children: (0, xD.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [!eD && pz, eD && (0, xD.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, xD.jsx)("div", {
                className: "SectionTitle",
                children: SD("customLobby:generalOptions")
              }), (0, xD.jsxs)("div", {
                className: "SectionBody",
                children: [pz, (0, xD.jsx)(OD.e, {
                  label: "customLobby:visibility",
                  circleInfoText: SD("customLobby:visibilityDescription"),
                  disabled: "Enter" !== lD,
                  children: (0, xD.jsx)(cD.c, {
                    options: pD.q.map((DD => ({
                      value: DD,
                      label: pD.f[DD]
                    }))),
                    value: uD.baseOptions.visibility,
                    onChange: DD => {
                      YD("visibility", DD.value)
                    }
                  })
                })]
              })]
            }), kD && (0, xD.jsx)(PD.c, {
              value: uD.worldOptions.defaultGamemode,
              onChange: DD => {
                qD("defaultGamemode", DD)
              },
              showAll: eD,
              disabled: wz
            }), (kD || !(0, MD.B)(mD) && mD > 0) && (0, xD.jsx)(PD.d, {
              mapTypes: kD ? pD.C : pD.p,
              value: uD.mapOptions.mapType,
              onChange: DD => {
                const zD = {
                  mapType: DD
                };
                "customSchematic" !== DD && (zD.schematicIdList = []), Dz(zD)
              },
              showAll: eD,
              disabled: wz,
              children: "customSchematic" === uD.mapOptions.mapType && (0, xD.jsxs)(xD.Fragment, {
                children: [(0, xD.jsxs)("div", {
                  className: "SchematicListTitle AnimFadeIn",
                  children: [kD && SD("customLobby:selectWorldSchematic"), !kD && SD("customLobby:selectCustomLobbySchematics", {
                    schematicLimit: mD
                  })]
                }), (0, xD.jsx)("div", {
                  className: LD()("SchematicListContainer AnimFadeIn", {
                    SchematicListContainerDisabled: "Enter" !== lD
                  }),
                  children: (0, xD.jsx)(fD.c, {
                    loading: null === tD,
                    schematics: null !== tD && void 0 !== tD ? tD : [],
                    onSchematicPicked: function(DD) {
                      const zD = uD.mapOptions.schematicIdList;
                      if (zD.includes(DD.schematicId)) Dz({
                        schematicIdList: zD.filter((zD => zD !== DD.schematicId))
                      });
                      else {
                        if (mD && uD.mapOptions.schematicIdList.length >= mD) return;
                        Dz({
                          schematicIdList: [...uD.mapOptions.schematicIdList, DD.schematicId]
                        })
                      }
                    },
                    selectedSchematicIdList: uD.mapOptions.schematicIdList,
                    disableAutoExport: !0
                  })
                })]
              })
            }), eD && (0, xD.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, xD.jsx)("div", {
                className: "SectionTitle",
                children: SD("customLobby:listedOptions")
              }), (0, xD.jsxs)("div", {
                className: "SectionBody",
                children: [(0, xD.jsx)(OD.e, {
                  label: "general:description",
                  className: "CustomLobbyDescription",
                  disabled: "Enter" !== lD,
                  children: (0, xD.jsx)(KD.e, {
                    onValueChange: (DD, zD) => {
                      HD("description", DD)
                    },
                    maxLength: 100,
                    defaultValue: uD.listedOptions.description
                  })
                }), (0, xD.jsx)(OD.e, {
                  label: "general:color",
                  circleInfoText: "customLobby:lobbyColorDescription",
                  disabled: "Enter" !== lD,
                  children: (0, xD.jsx)("div", {
                    className: "OtherInput",
                    children: (0, xD.jsx)("input", {
                      type: "color",
                      value: uD.listedOptions.color,
                      onChange: DD => {
                        HD("color", DD.target.value)
                      }
                    })
                  })
                }), (0, xD.jsx)(OD.e, {
                  label: "general:emojis",
                  circleInfoText: "customLobby:lobbyEmojisDescription",
                  disabled: "Enter" !== lD,
                  children: (0, xD.jsx)(KD.e, {
                    onValueChange: (DD, zD) => {
                      HD("emojis", DD)
                    },
                    maxLength: 6,
                    defaultValue: uD.listedOptions.emojis
                  })
                })]
              })]
            }), eD && kD && (0, xD.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, xD.jsx)("div", {
                className: "SectionTitle",
                children: SD("customLobby:advancedOptions")
              }), (0, xD.jsxs)("div", {
                className: "SectionBody",
                children: [(0, xD.jsx)(OD.e, {
                  label: "classic:worldGenSeed",
                  disabled: "Enter" !== lD,
                  children: (0, xD.jsx)(KD.e, {
                    onValueChange: (DD, zD) => {
                      qD("worldGenSeed", DD)
                    },
                    maxLength: QD.L
                  })
                }), (0, xD.jsx)(OD.e, {
                  label: "classic:disableProtectors",
                  disabled: "Enter" !== lD,
                  children: (0, xD.jsx)(OD.d, {
                    checked: uD.worldOptions.disableProtectors,
                    setChecked: DD => {
                      qD("disableProtectors", DD)
                    }
                  })
                }), (0, xD.jsx)(OD.e, {
                  label: "classic:disableTribeCreation",
                  disabled: "Enter" !== lD,
                  children: (0, xD.jsx)(OD.d, {
                    checked: uD.worldOptions.disableTribeCreation,
                    setChecked: DD => {
                      qD("disableTribeCreation", DD)
                    }
                  })
                }), (0, xD.jsx)(OD.e, {
                  label: "classic:voidDeathHeight",
                  circleInfoText: "classic:voidDeathHeightDescription",
                  disabled: "Enter" !== lD,
                  children: (0, xD.jsx)("input", {
                    type: "number",
                    max: ED.F,
                    value: null !== (rD = uD.worldOptions.voidDeathHeight) && void 0 !== rD ? rD : "",
                    onChange: DD => {
                      const zD = parseInt(DD.target.value);
                      qD("voidDeathHeight", isNaN(zD) ? null : zD)
                    }
                  })
                }), (0, xD.jsx)(OD.e, {
                  label: "classic:disableLobbySpawn",
                  disabled: "Enter" !== lD,
                  children: (0, xD.jsx)(OD.d, {
                    checked: uD.worldOptions.disableLobbySpawn,
                    setChecked: DD => {
                      qD("disableLobbySpawn", DD)
                    }
                  })
                }), (0, xD.jsx)(OD.e, {
                  label: "classic:worldBorder",
                  circleInfoText: "classic:worldBorderDescription",
                  disabled: "Enter" !== lD,
                  children: (0, xD.jsx)("input", {
                    type: "number",
                    min: ED.P,
                    max: ED.I,
                    value: null !== (TD = uD.worldOptions.worldBorder) && void 0 !== TD ? TD : "",
                    onChange: DD => {
                      const zD = parseInt(DD.target.value);
                      qD("worldBorder", isNaN(zD) ? null : zD)
                    }
                  })
                }), (0, xD.jsx)(OD.e, {
                  label: "classic:disableMobs",
                  disabled: "Enter" !== lD,
                  children: (0, xD.jsx)(OD.d, {
                    checked: uD.worldOptions.disableMobs,
                    setChecked: DD => {
                      qD("disableMobs", DD)
                    }
                  })
                })]
              })]
            }), kD && (0, xD.jsx)(XD.b, {
              callbacks: zz,
              disabled: "Enter" !== lD,
              advancedMode: eD
            })]
          })
        }), (0, xD.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, xD.jsx)(UD.o, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: "Enter" !== lD,
            onClick: () => {
              !async function() {
                if ("Enter" === lD) {
                  WD("Loading"), ZD("");
                  try {
                    await AD.d.createCustomLobby(uD), WD("Success")
                  } catch (DD) {
                    ZD(DD.message), console.error(DD.message), WD("Enter")
                  }
                }
              }()
            },
            children: SD("general:create")
          }), kD && (0, xD.jsx)("div", {
            className: "CreateCustomLobbyAdvancedToggle",
            "data-pad-ignore": wz || void 0,
            children: (0, xD.jsx)(OD.e, {
              label: "customLobby:showAdvancedOptions",
              disabled: wz,
              onLabelClick: () => {
                oD(!eD)
              },
              children: (0, xD.jsx)(OD.d, {
                checked: eD,
                setChecked: oD
              })
            })
          }), ND && (0, xD.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: ND
          })]
        })]
      })
    }
  },
  36345: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => cD
    });
    var pD = wD(1044),
      sD = wD.n(pD),
      KD = wD(58),
      rD = wD(4595),
      LD = wD(1096);

    function cD(DD) {
      let {
        locked: zD,
        children: wD
      } = DD;
      const pD = (0, KD.useRef)(null),
        cD = (0, rD.d)(pD, "y");
      return (0, LD.jsx)("div", {
        ref: pD,
        className: sD()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: cD.before,
          CreateCustomLobbyBodyMoreBelow: cD.after
        }),
        "data-pad-ignore": zD || void 0,
        children: wD
      })
    }
  },
  36330: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => RD,
      g: () => UD
    });
    var pD = wD(58),
      sD = wD(1355),
      KD = wD(1200),
      rD = wD(1346),
      LD = wD(3473),
      cD = wD(4948),
      gD = wD(1096);

    function RD(DD) {
      let {
        loading: zD,
        schematics: wD,
        onSchematicPicked: pD,
        selectedSchematicIdList: sD = [],
        disableAutoExport: cD
      } = DD;
      const {
        t: RD
      } = (0, KD.E)();
      return (0, gD.jsxs)("div", {
        className: "SchematicList",
        children: [zD && (0, gD.jsx)(rD.e, {}), !zD && 0 === wD.length && (0, gD.jsx)("div", {
          className: "NoSchematicsText",
          children: RD("worldBuilder:noSavedSchematic")
        }), !zD && wD.map((DD => (0, gD.jsx)(LD.g, {
          source: {
            type: "schematic",
            schematic: DD
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            pD(DD)
          },
          isSelected: sD.includes(DD.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: DD.isAutoExported && cD,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, DD.schematicId)))]
      })
    }

    function AD(DD) {
      let {
        ownedSchematics: zD,
        currentWorldSchematicId: wD,
        onClose: sD
      } = DD;
      const {
        t: rD
      } = (0, KD.E)(), [LD, AD] = (0, pD.useState)(null);
      return (0, gD.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === LD && (0, gD.jsxs)(gD.Fragment, {
          children: [(0, gD.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: rD("worldBuilder:schematicList")
          }), (0, gD.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: rD("worldBuilder:clickSchematicForOptions")
          }), (0, gD.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, gD.jsx)(RD, {
              loading: !1,
              schematics: zD,
              onSchematicPicked: DD => {
                AD(DD)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== LD && (0, gD.jsx)(cD.j, {
          schematic: LD,
          inSourceWorld: LD.schematicId === wD,
          onSchematicUpdate: DD => {
            AD(DD)
          },
          onClose: () => {
            AD(null), sD()
          }
        })]
      })
    }

    function UD(DD) {
      let {
        ownedSchematics: zD,
        currentWorldSchematicId: wD,
        onClose: pD
      } = DD;
      sD.NotificationProvider.showCustomPopup({
        body: DD => (0, gD.jsx)(AD, {
          ownedSchematics: zD,
          currentWorldSchematicId: wD,
          onClose: DD
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: pD,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  36338: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => gD,
      d: () => RD
    });
    wD(58);
    var pD = wD(1044),
      sD = wD.n(pD),
      KD = wD(4657),
      rD = wD(338),
      LD = wD(1200),
      cD = wD(1096);

    function gD(DD) {
      let {
        value: zD,
        onChange: wD,
        showAll: pD,
        disabled: gD = !1
      } = DD;
      const {
        t: RD
      } = (0, LD.E)();
      return (0, cD.jsxs)("div", {
        className: sD()("BloxdForm GamemodeForm", {
          BasicOptions: !pD
        }),
        children: [(0, cD.jsx)("div", {
          className: "SectionTitle",
          children: RD("classic:defaultGamemode")
        }), (0, cD.jsx)("div", {
          className: "SectionBody",
          children: KD.z.map((DD => pD || (0, KD.s)(DD) ? (0, cD.jsx)("button", {
            type: "button",
            className: sD()("WorldGamemode", {
              Selected: zD === DD
            }),
            disabled: gD,
            onClick: () => {
              wD(DD)
            },
            style: {
              "--background-image": `url(${rD.r[DD]})`
            },
            children: rD.o[DD]
          }, DD) : null))
        })]
      })
    }

    function RD(DD) {
      let {
        mapTypes: zD,
        value: wD,
        onChange: pD,
        showAll: gD,
        disabled: RD = !1,
        children: AD
      } = DD;
      const {
        t: UD
      } = (0, LD.E)();
      return (0, cD.jsxs)("div", {
        className: sD()("BloxdForm MapTypeForm", {
          BasicOptions: !gD
        }),
        children: [(0, cD.jsx)("div", {
          className: "SectionTitle",
          children: UD("customLobby:mapType")
        }), (0, cD.jsx)("div", {
          className: "SectionBody",
          children: zD.map((DD => gD || (0, KD.u)(DD) ? (0, cD.jsx)("button", {
            type: "button",
            className: sD()("MapType", {
              Selected: wD === DD
            }),
            disabled: RD,
            onClick: () => {
              pD(DD)
            },
            style: {
              "--background-image": `url(${rD.k[DD]})`
            },
            children: rD.h[DD]
          }, DD) : null))
        }), AD]
      })
    }
  },
  36326: () => {}
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);