export const id = 209;
export const ids = [209];
export const modules = {
  35753: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      CreateCustomLobby: () => JD
    });
    cD(35762);
    var ID = cD(4431),
      pD = cD(53),
      iD = cD(1655),
      fD = cD(1049),
      bD = cD.n(fD),
      QD = cD(2921),
      wD = cD(1127),
      SD = cD(1199),
      BD = cD(4388),
      yD = cD(1442),
      MD = cD(35769),
      tD = cD(1192),
      ZD = cD(1319),
      oD = cD(1508),
      vD = cD(16),
      ND = cD(1444),
      gD = cD(624),
      XD = cD(4713),
      mD = cD(767),
      nD = cD(1240),
      OD = cD(1221),
      PD = cD(4727),
      HD = cD(1064),
      UD = cD(35775),
      xD = cD(35782),
      qD = cD(1093);

    function JD(DD) {
      var CD, cD, fD, JD;
      let {
        gameNameWithVariation: KD,
        close: aD,
        initialDefaultGamemode: VD
      } = DD;
      const {
        t: zD
      } = (0, tD.F)(), jD = (0, oD.useNavigatePreserveSearch)(), [lD, LD] = (0, pD.useState)("Enter"), [TD, GD] = (0, pD.useState)(""), RD = pD.useRef(null), kD = null === (CD = mD.b[KD]) || void 0 === CD ? void 0 : CD.showWorldsInsteadOfCustomLobbies, dD = kD ? 1 : null === (cD = mD.b[KD]) || void 0 === cD ? void 0 : cD.customLobbyCustomSchematicLimit, [YD, WD] = (0, pD.useState)(!kD);
      VD || (VD = "classic_creative" === KD || "classic_creativeFlat" === KD ? "creative" : "classic" === KD ? "peaceful" : "survival");
      const sD = {
        baseOptions: {
          gameNameWithVariation: kD ? "classic" : KD,
          name: "",
          visibility: "unlisted"
        },
        listedOptions: {
          description: "",
          color: "",
          emojis: ""
        },
        mapOptions: {
          mapType: "classic_creativeFlat" === KD ? "flat" : "default",
          schematicIdList: []
        },
        worldOptions: null
      };
      kD && (sD.worldOptions = {
        defaultGamemode: VD,
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
      const [ED, eD] = (0, pD.useState)(sD), [uD, hD] = (0, pD.useState)(null);

      function rD(DD, CD) {
        eD({
          ...ED,
          baseOptions: {
            ...ED.baseOptions,
            [DD]: CD
          }
        })
      }

      function AD(DD, CD) {
        eD({
          ...ED,
          listedOptions: {
            ...ED.listedOptions,
            [DD]: CD
          }
        })
      }

      function FD(DD, CD) {
        eD({
          ...ED,
          worldOptions: {
            ...ED.worldOptions,
            [DD]: CD
          }
        })
      }

      function DC(DD) {
        eD({
          ...ED,
          mapOptions: {
            ...ED.mapOptions,
            ...DD
          }
        })
      }(0, pD.useEffect)((() => {
        BD.b.getNewStarterName().then((DD => {
          eD((CD => "" !== CD.baseOptions.name ? CD : {
            ...CD,
            baseOptions: {
              ...CD.baseOptions,
              name: DD
            }
          }))
        })).catch((DD => {
          console.error("Error getting new starter name:", DD)
        }))
      }), []), (0, pD.useEffect)((() => {
        "customSchematic" === ED.mapOptions.mapType && null === uD && (0, wD.postJsonWithMetricsCookiesAndJsonResponse)(`${SD.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
          retries: 0,
          minTimeout: 3e3
        }).then((DD => {
          hD(DD)
        }))
      }), [ED.mapOptions.mapType, uD]);
      const CC = {
          tpRequests: {
            isEnabled: () => !ED.worldOptions.disableTpRequests,
            lH: DD => {
              FD("disableTpRequests", !DD)
            }
          },
          spawnProtection: {
            isEnabled: () => ED.worldOptions.spawnProtection,
            lH: DD => {
              FD("spawnProtection", DD)
            }
          },
          spawnReset: {
            isEnabled: () => ED.worldOptions.enableSpawnReset,
            lH: DD => {
              FD("enableSpawnReset", DD)
            }
          },
          smpMarketplace: {
            isEnabled: () => ED.worldOptions.enableSmpMarketplace,
            lH: DD => {
              FD("enableSmpMarketplace", DD)
            }
          },
          survivalGuns: {
            isEnabled: () => ED.worldOptions.enableSurvivalGuns,
            lH: DD => {
              FD("enableSurvivalGuns", DD)
            }
          },
          fallDamage: {
            isEnabled: () => !ED.worldOptions.disableFallDamage,
            lH: DD => {
              FD("disableFallDamage", !DD)
            }
          },
          dayNight: {
            isEnabled: () => ED.worldOptions.enableDayNight,
            lH: DD => {
              FD("enableDayNight", DD)
            }
          }
        },
        cC = "Enter" !== lD,
        IC = (0, qD.jsx)(XD.e, {
          className: "NameInput",
          label: "general:name",
          disabled: "Enter" !== lD,
          children: (0, qD.jsx)(iD.b, {
            domRef: RD,
            onValueChange: (DD, CD) => {
              const cD = (0, OD.sb)(DD);
              rD("name", cD), RD.current.value = cD
            },
            maxLength: OD.Q,
            defaultValue: ED.baseOptions.name
          })
        });
      return (0, qD.jsxs)("div", {
        className: bD()("CreateCustomLobby", {
          CreateCustomLobbySuccess: "Success" === lD,
          AdvancedMode: YD
        }),
        children: ["Success" === lD && (0, qD.jsxs)("div", {
          className: "CreateCustomLobbySuccessOverlay",
          children: [(0, qD.jsxs)("div", {
            className: "CreateCustomLobbySuccessTitle FullyFancyText AnimFadeInScaleUp",
            children: [(0, qD.jsx)(HD.c, {
              name: "check"
            }), (0, qD.jsx)(ND.c, {})]
          }), (0, qD.jsx)("div", {
            className: "CreateCustomLobbySuccessButtons AnimFadeInScaleUp",
            children: (0, qD.jsx)(yD.o, {
              padDefaultFocus: !0,
              onClick: () => {
                (0, vD.k)("worldCreation"), jD((0, ZD.b)(KD, ED.baseOptions.name))
              },
              children: zD("homePage:joinLobbyName", {
                lobbyName: ED.baseOptions.name
              })
            })
          })]
        }), (0, qD.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, qD.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: zD(kD ? "homePage:createWorld" : "homePage:createCustomLobby")
          })
        }), (0, qD.jsx)(xD.c, {
          locked: cC,
          children: (0, qD.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [!YD && IC, YD && (0, qD.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, qD.jsx)("div", {
                className: "SectionTitle",
                children: zD("customLobby:generalOptions")
              }), (0, qD.jsxs)("div", {
                className: "SectionBody",
                children: [IC, (0, qD.jsx)(XD.e, {
                  label: "customLobby:visibility",
                  circleInfoText: zD("customLobby:visibilityDescription"),
                  disabled: "Enter" !== lD,
                  children: (0, qD.jsx)(QD.b, {
                    options: ID.q.map((DD => ({
                      value: DD,
                      label: ID.f[DD]
                    }))),
                    value: ED.baseOptions.visibility,
                    onChange: DD => {
                      rD("visibility", DD.value)
                    }
                  })
                })]
              })]
            }), kD && (0, qD.jsx)(UD.d, {
              value: ED.worldOptions.defaultGamemode,
              onChange: DD => {
                FD("defaultGamemode", DD)
              },
              showAll: YD,
              disabled: cC
            }), (kD || !(0, gD.C)(dD) && dD > 0) && (0, qD.jsx)(UD.f, {
              mapTypes: kD ? ID.E : ID.o,
              value: ED.mapOptions.mapType,
              onChange: DD => {
                const CD = {
                  mapType: DD
                };
                "customSchematic" !== DD && (CD.schematicIdList = []), DC(CD)
              },
              showAll: YD,
              disabled: cC,
              children: "customSchematic" === ED.mapOptions.mapType && (0, qD.jsxs)(qD.Fragment, {
                children: [(0, qD.jsxs)("div", {
                  className: "SchematicListTitle AnimFadeIn",
                  children: [kD && zD("customLobby:selectWorldSchematic"), !kD && zD("customLobby:selectCustomLobbySchematics", {
                    schematicLimit: dD
                  })]
                }), (0, qD.jsx)("div", {
                  className: bD()("SchematicListContainer AnimFadeIn", {
                    SchematicListContainerDisabled: "Enter" !== lD
                  }),
                  children: (0, qD.jsx)(MD.e, {
                    loading: null === uD,
                    schematics: null !== uD && void 0 !== uD ? uD : [],
                    onSchematicPicked: function(DD) {
                      const CD = ED.mapOptions.schematicIdList;
                      if (CD.includes(DD.schematicId)) DC({
                        schematicIdList: CD.filter((CD => CD !== DD.schematicId))
                      });
                      else {
                        if (dD && ED.mapOptions.schematicIdList.length >= dD) return;
                        DC({
                          schematicIdList: [...ED.mapOptions.schematicIdList, DD.schematicId]
                        })
                      }
                    },
                    selectedSchematicIdList: ED.mapOptions.schematicIdList,
                    disableAutoExport: !0
                  })
                })]
              })
            }), YD && (0, qD.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, qD.jsx)("div", {
                className: "SectionTitle",
                children: zD("customLobby:listedOptions")
              }), (0, qD.jsxs)("div", {
                className: "SectionBody",
                children: [(0, qD.jsx)(XD.e, {
                  label: "general:description",
                  className: "CustomLobbyDescription",
                  disabled: "Enter" !== lD,
                  children: (0, qD.jsx)(iD.b, {
                    onValueChange: (DD, CD) => {
                      AD("description", DD)
                    },
                    maxLength: 100,
                    defaultValue: ED.listedOptions.description
                  })
                }), (0, qD.jsx)(XD.e, {
                  label: "general:color",
                  circleInfoText: "customLobby:lobbyColorDescription",
                  disabled: "Enter" !== lD,
                  children: (0, qD.jsx)("div", {
                    className: "OtherInput",
                    children: (0, qD.jsx)("input", {
                      type: "color",
                      value: ED.listedOptions.color,
                      onChange: DD => {
                        AD("color", DD.target.value)
                      }
                    })
                  })
                }), (0, qD.jsx)(XD.e, {
                  label: "general:emojis",
                  circleInfoText: "customLobby:lobbyEmojisDescription",
                  disabled: "Enter" !== lD,
                  children: (0, qD.jsx)(iD.b, {
                    onValueChange: (DD, CD) => {
                      AD("emojis", DD)
                    },
                    maxLength: 6,
                    defaultValue: ED.listedOptions.emojis
                  })
                })]
              })]
            }), YD && kD && (0, qD.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, qD.jsx)("div", {
                className: "SectionTitle",
                children: zD("customLobby:advancedOptions")
              }), (0, qD.jsxs)("div", {
                className: "SectionBody",
                children: [(0, qD.jsx)(XD.e, {
                  label: "classic:worldGenSeed",
                  disabled: "Enter" !== lD,
                  children: (0, qD.jsx)(iD.b, {
                    onValueChange: (DD, CD) => {
                      FD("worldGenSeed", DD)
                    },
                    maxLength: OD.Q
                  })
                }), (0, qD.jsx)(XD.e, {
                  label: "classic:disableProtectors",
                  disabled: "Enter" !== lD,
                  children: (0, qD.jsx)(XD.b, {
                    checked: ED.worldOptions.disableProtectors,
                    setChecked: DD => {
                      FD("disableProtectors", DD)
                    }
                  })
                }), (0, qD.jsx)(XD.e, {
                  label: "classic:disableTribeCreation",
                  disabled: "Enter" !== lD,
                  children: (0, qD.jsx)(XD.b, {
                    checked: ED.worldOptions.disableTribeCreation,
                    setChecked: DD => {
                      FD("disableTribeCreation", DD)
                    }
                  })
                }), (0, qD.jsx)(XD.e, {
                  label: "classic:voidDeathHeight",
                  circleInfoText: "classic:voidDeathHeightDescription",
                  disabled: "Enter" !== lD,
                  children: (0, qD.jsx)("input", {
                    type: "number",
                    max: nD.D,
                    value: null !== (fD = ED.worldOptions.voidDeathHeight) && void 0 !== fD ? fD : "",
                    onChange: DD => {
                      const CD = parseInt(DD.target.value);
                      FD("voidDeathHeight", isNaN(CD) ? null : CD)
                    }
                  })
                }), (0, qD.jsx)(XD.e, {
                  label: "classic:disableLobbySpawn",
                  disabled: "Enter" !== lD,
                  children: (0, qD.jsx)(XD.b, {
                    checked: ED.worldOptions.disableLobbySpawn,
                    setChecked: DD => {
                      FD("disableLobbySpawn", DD)
                    }
                  })
                }), (0, qD.jsx)(XD.e, {
                  label: "classic:worldBorder",
                  circleInfoText: "classic:worldBorderDescription",
                  disabled: "Enter" !== lD,
                  children: (0, qD.jsx)("input", {
                    type: "number",
                    min: nD.M,
                    max: nD.H,
                    value: null !== (JD = ED.worldOptions.worldBorder) && void 0 !== JD ? JD : "",
                    onChange: DD => {
                      const CD = parseInt(DD.target.value);
                      FD("worldBorder", isNaN(CD) ? null : CD)
                    }
                  })
                }), (0, qD.jsx)(XD.e, {
                  label: "classic:disableMobs",
                  disabled: "Enter" !== lD,
                  children: (0, qD.jsx)(XD.b, {
                    checked: ED.worldOptions.disableMobs,
                    setChecked: DD => {
                      FD("disableMobs", DD)
                    }
                  })
                })]
              })]
            }), kD && (0, qD.jsx)(PD.e, {
              callbacks: CC,
              disabled: "Enter" !== lD,
              advancedMode: YD
            })]
          })
        }), (0, qD.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, qD.jsx)(yD.o, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: "Enter" !== lD,
            onClick: () => {
              !async function() {
                if ("Enter" === lD) {
                  LD("Loading"), GD("");
                  try {
                    await BD.b.createCustomLobby(ED), LD("Success")
                  } catch (DD) {
                    GD(DD.message), console.error(DD.message), LD("Enter")
                  }
                }
              }()
            },
            children: zD("general:create")
          }), kD && (0, qD.jsx)("div", {
            className: "CreateCustomLobbyAdvancedToggle",
            "data-pad-ignore": cC || void 0,
            children: (0, qD.jsx)(XD.e, {
              label: "customLobby:showAdvancedOptions",
              disabled: cC,
              onLabelClick: () => {
                WD(!YD)
              },
              children: (0, qD.jsx)(XD.b, {
                checked: YD,
                setChecked: WD
              })
            })
          }), TD && (0, qD.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: TD
          })]
        })]
      })
    }
  },
  35782: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => QD
    });
    var ID = cD(1049),
      pD = cD.n(ID),
      iD = cD(53),
      fD = cD(4374),
      bD = cD(1093);

    function QD(DD) {
      let {
        locked: CD,
        children: cD
      } = DD;
      const ID = (0, iD.useRef)(null),
        QD = (0, fD.b)(ID, "y");
      return (0, bD.jsx)("div", {
        ref: ID,
        className: pD()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: QD.before,
          CreateCustomLobbyBodyMoreBelow: QD.after
        }),
        "data-pad-ignore": CD || void 0,
        children: cD
      })
    }
  },
  35769: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => SD,
      g: () => yD
    });
    var ID = cD(53),
      pD = cD(1340),
      iD = cD(1192),
      fD = cD(1328),
      bD = cD(3295),
      QD = cD(4704),
      wD = cD(1093);

    function SD(DD) {
      let {
        loading: CD,
        schematics: cD,
        onSchematicPicked: ID,
        selectedSchematicIdList: pD = [],
        disableAutoExport: QD
      } = DD;
      const {
        t: SD
      } = (0, iD.F)();
      return (0, wD.jsxs)("div", {
        className: "SchematicList",
        children: [CD && (0, wD.jsx)(fD.e, {}), !CD && 0 === cD.length && (0, wD.jsx)("div", {
          className: "NoSchematicsText",
          children: SD("worldBuilder:noSavedSchematic")
        }), !CD && cD.map((DD => (0, wD.jsx)(bD.f, {
          source: {
            type: "schematic",
            schematic: DD
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            ID(DD)
          },
          isSelected: pD.includes(DD.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: DD.isAutoExported && QD,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, DD.schematicId)))]
      })
    }

    function BD(DD) {
      let {
        ownedSchematics: CD,
        currentWorldSchematicId: cD,
        onClose: pD
      } = DD;
      const {
        t: fD
      } = (0, iD.F)(), [bD, BD] = (0, ID.useState)(null);
      return (0, wD.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === bD && (0, wD.jsxs)(wD.Fragment, {
          children: [(0, wD.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: fD("worldBuilder:schematicList")
          }), (0, wD.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: fD("worldBuilder:clickSchematicForOptions")
          }), (0, wD.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, wD.jsx)(SD, {
              loading: !1,
              schematics: CD,
              onSchematicPicked: DD => {
                BD(DD)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== bD && (0, wD.jsx)(QD.i, {
          schematic: bD,
          inSourceWorld: bD.schematicId === cD,
          onSchematicUpdate: DD => {
            BD(DD)
          },
          onClose: () => {
            BD(null), pD()
          }
        })]
      })
    }

    function yD(DD) {
      let {
        ownedSchematics: CD,
        currentWorldSchematicId: cD,
        onClose: ID
      } = DD;
      pD.NotificationProvider.showCustomPopup({
        body: DD => (0, wD.jsx)(BD, {
          ownedSchematics: CD,
          currentWorldSchematicId: cD,
          onClose: DD
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: ID,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  35775: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => wD,
      f: () => SD
    });
    cD(53);
    var ID = cD(1049),
      pD = cD.n(ID),
      iD = cD(4431),
      fD = cD(312),
      bD = cD(1192),
      QD = cD(1093);

    function wD(DD) {
      let {
        value: CD,
        onChange: cD,
        showAll: ID,
        disabled: wD = !1
      } = DD;
      const {
        t: SD
      } = (0, bD.F)();
      return (0, QD.jsxs)("div", {
        className: pD()("BloxdForm GamemodeForm", {
          BasicOptions: !ID
        }),
        children: [(0, QD.jsx)("div", {
          className: "SectionTitle",
          children: SD("classic:defaultGamemode")
        }), (0, QD.jsx)("div", {
          className: "SectionBody",
          children: iD.C.map((DD => ID || (0, iD.u)(DD) ? (0, QD.jsx)("button", {
            type: "button",
            className: pD()("WorldGamemode", {
              Selected: CD === DD
            }),
            disabled: wD,
            onClick: () => {
              cD(DD)
            },
            style: {
              "--background-image": `url(${fD.u[DD]})`
            },
            children: fD.s[DD]
          }, DD) : null))
        })]
      })
    }

    function SD(DD) {
      let {
        mapTypes: CD,
        value: cD,
        onChange: ID,
        showAll: wD,
        disabled: SD = !1,
        children: BD
      } = DD;
      const {
        t: yD
      } = (0, bD.F)();
      return (0, QD.jsxs)("div", {
        className: pD()("BloxdForm MapTypeForm", {
          BasicOptions: !wD
        }),
        children: [(0, QD.jsx)("div", {
          className: "SectionTitle",
          children: yD("customLobby:mapType")
        }), (0, QD.jsx)("div", {
          className: "SectionBody",
          children: CD.map((DD => wD || (0, iD.w)(DD) ? (0, QD.jsx)("button", {
            type: "button",
            className: pD()("MapType", {
              Selected: cD === DD
            }),
            disabled: SD,
            onClick: () => {
              ID(DD)
            },
            style: {
              "--background-image": `url(${fD.p[DD]})`
            },
            children: fD.m[DD]
          }, DD) : null))
        }), BD]
      })
    }
  },
  35762: () => {}
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);