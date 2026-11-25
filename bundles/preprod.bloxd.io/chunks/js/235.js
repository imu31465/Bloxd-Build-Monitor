export const id = 235;
export const ids = [235];
export const modules = {
  37280: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      CreateCustomLobby: () => RM
    });
    iM(37287);
    var OM = iM(5003),
      SM = iM(44),
      jM = iM(1763),
      aM = iM(1116),
      PM = iM.n(aM),
      nM = iM(3530),
      QM = iM(1144),
      zM = iM(1202),
      LM = iM(4961),
      mM = iM(1520),
      HM = iM(37291),
      hM = iM(1188),
      JM = iM(1382),
      dM = iM(1591),
      yM = iM(19),
      lM = iM(1522),
      EM = iM(625),
      UM = iM(5343),
      GM = iM(821),
      CM = iM(1242),
      eM = iM(1229),
      bM = iM(5356),
      wM = iM(1398),
      tM = iM(37298),
      gM = iM(37303),
      uM = iM(1303);

    function RM(MM) {
      var rM, iM, aM, RM;
      let {
        gameNameWithVariation: pM,
        close: WM,
        initialDefaultGamemode: sM
      } = MM;
      const {
        t: DM
      } = (0, hM.A)(), kM = (0, dM.useNavigatePreserveSearch)(), [ZM, oM] = (0, SM.useState)("Enter"), [fM, YM] = (0, SM.useState)(""), NM = SM.useRef(null), AM = null === (rM = GM.e[pM]) || void 0 === rM ? void 0 : rM.showWorldsInsteadOfCustomLobbies, xM = AM ? 1 : null === (iM = GM.e[pM]) || void 0 === iM ? void 0 : iM.customLobbyCustomSchematicLimit, [vM, FM] = (0, SM.useState)(!AM);
      sM || (sM = "classic_creative" === pM || "classic_creativeFlat" === pM ? "creative" : "classic" === pM ? "peaceful" : "survival");
      const BM = {
        baseOptions: {
          gameNameWithVariation: AM ? "classic" : pM,
          name: "",
          visibility: "unlisted"
        },
        listedOptions: {
          description: "",
          color: "",
          emojis: ""
        },
        mapOptions: {
          mapType: "classic_creativeFlat" === pM ? "flat" : "default",
          schematicIdList: []
        },
        worldOptions: null
      };
      AM && (BM.worldOptions = {
        defaultGamemode: sM,
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
      const [XM, IM] = (0, SM.useState)(BM), [KM, qM] = (0, SM.useState)(null);

      function TM(MM, rM) {
        IM({
          ...XM,
          baseOptions: {
            ...XM.baseOptions,
            [MM]: rM
          }
        })
      }

      function VM(MM, rM) {
        IM({
          ...XM,
          listedOptions: {
            ...XM.listedOptions,
            [MM]: rM
          }
        })
      }

      function cM(MM, rM) {
        IM({
          ...XM,
          worldOptions: {
            ...XM.worldOptions,
            [MM]: rM
          }
        })
      }

      function Mr(MM) {
        IM({
          ...XM,
          mapOptions: {
            ...XM.mapOptions,
            ...MM
          }
        })
      }(0, SM.useEffect)((() => {
        LM.b.getNewStarterName().then((MM => {
          IM((rM => "" !== rM.baseOptions.name ? rM : {
            ...rM,
            baseOptions: {
              ...rM.baseOptions,
              name: MM
            }
          }))
        })).catch((MM => {
          console.error("Error getting new starter name:", MM)
        }))
      }), []), (0, SM.useEffect)((() => {
        "customSchematic" === XM.mapOptions.mapType && null === KM && (0, QM.postJsonWithMetricsCookiesAndJsonResponse)(`${zM.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
          retries: 0,
          minTimeout: 3e3
        }).then((MM => {
          qM(MM)
        }))
      }), [XM.mapOptions.mapType, KM]);
      const rr = {
          tpRequests: {
            isEnabled: () => !XM.worldOptions.disableTpRequests,
            kR: MM => {
              cM("disableTpRequests", !MM)
            }
          },
          spawnProtection: {
            isEnabled: () => XM.worldOptions.spawnProtection,
            kR: MM => {
              cM("spawnProtection", MM)
            }
          },
          spawnReset: {
            isEnabled: () => XM.worldOptions.enableSpawnReset,
            kR: MM => {
              cM("enableSpawnReset", MM)
            }
          },
          smpMarketplace: {
            isEnabled: () => XM.worldOptions.enableSmpMarketplace,
            kR: MM => {
              cM("enableSmpMarketplace", MM)
            }
          },
          survivalGuns: {
            isEnabled: () => XM.worldOptions.enableSurvivalGuns,
            kR: MM => {
              cM("enableSurvivalGuns", MM)
            }
          },
          fallDamage: {
            isEnabled: () => !XM.worldOptions.disableFallDamage,
            kR: MM => {
              cM("disableFallDamage", !MM)
            }
          },
          dayNight: {
            isEnabled: () => XM.worldOptions.enableDayNight,
            kR: MM => {
              cM("enableDayNight", MM)
            }
          }
        },
        ir = "Enter" !== ZM,
        Or = (0, uM.jsx)(UM.d, {
          className: "NameInput",
          label: "general:name",
          disabled: "Enter" !== ZM,
          children: (0, uM.jsx)(jM.b, {
            domRef: NM,
            onValueChange: (MM, rM) => {
              const iM = (0, eM.vb)(MM);
              TM("name", iM), NM.current.value = iM
            },
            maxLength: eM.Q,
            defaultValue: XM.baseOptions.name
          })
        });
      return (0, uM.jsxs)("div", {
        className: PM()("CreateCustomLobby", {
          CreateCustomLobbySuccess: "Success" === ZM,
          AdvancedMode: vM
        }),
        children: ["Success" === ZM && (0, uM.jsxs)("div", {
          className: "CreateCustomLobbySuccessOverlay",
          children: [(0, uM.jsxs)("div", {
            className: "CreateCustomLobbySuccessTitle FullyFancyText AnimFadeInScaleUp",
            children: [(0, uM.jsx)(wM.b, {
              name: "check"
            }), (0, uM.jsx)(lM.d, {})]
          }), (0, uM.jsx)("div", {
            className: "CreateCustomLobbySuccessButtons AnimFadeInScaleUp",
            children: (0, uM.jsx)(mM.p, {
              padDefaultFocus: !0,
              onClick: () => {
                (0, yM.j)("worldCreation"), kM((0, JM.b)(pM, XM.baseOptions.name))
              },
              children: DM("homePage:joinLobbyName", {
                lobbyName: XM.baseOptions.name
              })
            })
          })]
        }), (0, uM.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, uM.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: DM(AM ? "homePage:createWorld" : "homePage:createCustomLobby")
          })
        }), (0, uM.jsx)(gM.d, {
          locked: ir,
          children: (0, uM.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [!vM && Or, vM && (0, uM.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, uM.jsx)("div", {
                className: "SectionTitle",
                children: DM("customLobby:generalOptions")
              }), (0, uM.jsxs)("div", {
                className: "SectionBody",
                children: [Or, (0, uM.jsx)(UM.d, {
                  label: "customLobby:visibility",
                  circleInfoText: DM("customLobby:visibilityDescription"),
                  disabled: "Enter" !== ZM,
                  children: (0, uM.jsx)(nM.e, {
                    options: OM.t.map((MM => ({
                      value: MM,
                      label: OM.g[MM]
                    }))),
                    value: XM.baseOptions.visibility,
                    onChange: MM => {
                      TM("visibility", MM.value)
                    }
                  })
                })]
              })]
            }), AM && (0, uM.jsx)(tM.c, {
              value: XM.worldOptions.defaultGamemode,
              onChange: MM => {
                cM("defaultGamemode", MM)
              },
              showAll: vM,
              disabled: ir
            }), (AM || !(0, EM.J)(xM) && xM > 0) && (0, uM.jsx)(tM.e, {
              mapTypes: AM ? OM.E : OM.p,
              value: XM.mapOptions.mapType,
              onChange: MM => {
                const rM = {
                  mapType: MM
                };
                "customSchematic" !== MM && (rM.schematicIdList = []), Mr(rM)
              },
              showAll: vM,
              disabled: ir,
              children: "customSchematic" === XM.mapOptions.mapType && (0, uM.jsxs)(uM.Fragment, {
                children: [(0, uM.jsxs)("div", {
                  className: "SchematicListTitle AnimFadeIn",
                  children: [AM && DM("customLobby:selectWorldSchematic"), !AM && DM("customLobby:selectCustomLobbySchematics", {
                    schematicLimit: xM
                  })]
                }), (0, uM.jsx)("div", {
                  className: PM()("SchematicListContainer AnimFadeIn", {
                    SchematicListContainerDisabled: "Enter" !== ZM
                  }),
                  children: (0, uM.jsx)(HM.d, {
                    loading: null === KM,
                    schematics: null !== KM && void 0 !== KM ? KM : [],
                    onSchematicPicked: function(MM) {
                      const rM = XM.mapOptions.schematicIdList;
                      if (rM.includes(MM.schematicId)) Mr({
                        schematicIdList: rM.filter((rM => rM !== MM.schematicId))
                      });
                      else {
                        if (xM && XM.mapOptions.schematicIdList.length >= xM) return;
                        Mr({
                          schematicIdList: [...XM.mapOptions.schematicIdList, MM.schematicId]
                        })
                      }
                    },
                    selectedSchematicIdList: XM.mapOptions.schematicIdList,
                    disableAutoExport: !0
                  })
                })]
              })
            }), vM && (0, uM.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, uM.jsx)("div", {
                className: "SectionTitle",
                children: DM("customLobby:listedOptions")
              }), (0, uM.jsxs)("div", {
                className: "SectionBody",
                children: [(0, uM.jsx)(UM.d, {
                  label: "general:description",
                  className: "CustomLobbyDescription",
                  disabled: "Enter" !== ZM,
                  children: (0, uM.jsx)(jM.b, {
                    onValueChange: (MM, rM) => {
                      VM("description", MM)
                    },
                    maxLength: 100,
                    defaultValue: XM.listedOptions.description
                  })
                }), (0, uM.jsx)(UM.d, {
                  label: "general:color",
                  circleInfoText: "customLobby:lobbyColorDescription",
                  disabled: "Enter" !== ZM,
                  children: (0, uM.jsx)("div", {
                    className: "OtherInput",
                    children: (0, uM.jsx)("input", {
                      type: "color",
                      value: XM.listedOptions.color,
                      onChange: MM => {
                        VM("color", MM.target.value)
                      }
                    })
                  })
                }), (0, uM.jsx)(UM.d, {
                  label: "general:emojis",
                  circleInfoText: "customLobby:lobbyEmojisDescription",
                  disabled: "Enter" !== ZM,
                  children: (0, uM.jsx)(jM.b, {
                    onValueChange: (MM, rM) => {
                      VM("emojis", MM)
                    },
                    maxLength: 6,
                    defaultValue: XM.listedOptions.emojis
                  })
                })]
              })]
            }), vM && AM && (0, uM.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, uM.jsx)("div", {
                className: "SectionTitle",
                children: DM("customLobby:advancedOptions")
              }), (0, uM.jsxs)("div", {
                className: "SectionBody",
                children: [(0, uM.jsx)(UM.d, {
                  label: "classic:worldGenSeed",
                  disabled: "Enter" !== ZM,
                  children: (0, uM.jsx)(jM.b, {
                    onValueChange: (MM, rM) => {
                      cM("worldGenSeed", MM)
                    },
                    maxLength: eM.Q
                  })
                }), (0, uM.jsx)(UM.d, {
                  label: "classic:disableProtectors",
                  disabled: "Enter" !== ZM,
                  children: (0, uM.jsx)(UM.b, {
                    checked: XM.worldOptions.disableProtectors,
                    setChecked: MM => {
                      cM("disableProtectors", MM)
                    }
                  })
                }), (0, uM.jsx)(UM.d, {
                  label: "classic:disableTribeCreation",
                  disabled: "Enter" !== ZM,
                  children: (0, uM.jsx)(UM.b, {
                    checked: XM.worldOptions.disableTribeCreation,
                    setChecked: MM => {
                      cM("disableTribeCreation", MM)
                    }
                  })
                }), (0, uM.jsx)(UM.d, {
                  label: "classic:voidDeathHeight",
                  circleInfoText: "classic:voidDeathHeightDescription",
                  disabled: "Enter" !== ZM,
                  children: (0, uM.jsx)("input", {
                    type: "number",
                    max: CM.E,
                    value: null !== (aM = XM.worldOptions.voidDeathHeight) && void 0 !== aM ? aM : "",
                    onChange: MM => {
                      const rM = parseInt(MM.target.value);
                      cM("voidDeathHeight", isNaN(rM) ? null : rM)
                    }
                  })
                }), (0, uM.jsx)(UM.d, {
                  label: "classic:disableLobbySpawn",
                  disabled: "Enter" !== ZM,
                  children: (0, uM.jsx)(UM.b, {
                    checked: XM.worldOptions.disableLobbySpawn,
                    setChecked: MM => {
                      cM("disableLobbySpawn", MM)
                    }
                  })
                }), (0, uM.jsx)(UM.d, {
                  label: "classic:worldBorder",
                  circleInfoText: "classic:worldBorderDescription",
                  disabled: "Enter" !== ZM,
                  children: (0, uM.jsx)("input", {
                    type: "number",
                    min: CM.M,
                    max: CM.H,
                    value: null !== (RM = XM.worldOptions.worldBorder) && void 0 !== RM ? RM : "",
                    onChange: MM => {
                      const rM = parseInt(MM.target.value);
                      cM("worldBorder", isNaN(rM) ? null : rM)
                    }
                  })
                }), (0, uM.jsx)(UM.d, {
                  label: "classic:disableMobs",
                  disabled: "Enter" !== ZM,
                  children: (0, uM.jsx)(UM.b, {
                    checked: XM.worldOptions.disableMobs,
                    setChecked: MM => {
                      cM("disableMobs", MM)
                    }
                  })
                })]
              })]
            }), AM && (0, uM.jsx)(bM.b, {
              callbacks: rr,
              disabled: "Enter" !== ZM,
              advancedMode: vM
            })]
          })
        }), (0, uM.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, uM.jsx)(mM.p, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: "Enter" !== ZM,
            onClick: () => {
              !async function() {
                if ("Enter" === ZM) {
                  oM("Loading"), YM("");
                  try {
                    await LM.b.createCustomLobby(XM), oM("Success")
                  } catch (MM) {
                    YM(MM.message), console.error(MM.message), oM("Enter")
                  }
                }
              }()
            },
            children: DM("general:create")
          }), AM && (0, uM.jsx)("div", {
            className: "CreateCustomLobbyAdvancedToggle",
            "data-pad-ignore": ir || void 0,
            children: (0, uM.jsx)(UM.d, {
              label: "customLobby:showAdvancedOptions",
              disabled: ir,
              onLabelClick: () => {
                FM(!vM)
              },
              children: (0, uM.jsx)(UM.b, {
                checked: vM,
                setChecked: FM
              })
            })
          }), fM && (0, uM.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: fM
          })]
        })]
      })
    }
  },
  37303: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => nM
    });
    var OM = iM(1116),
      SM = iM.n(OM),
      jM = iM(44),
      aM = iM(4950),
      PM = iM(1303);

    function nM(MM) {
      let {
        locked: rM,
        children: iM
      } = MM;
      const OM = (0, jM.useRef)(null),
        nM = (0, aM.e)(OM, "y");
      return (0, PM.jsx)("div", {
        ref: OM,
        className: SM()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: nM.before,
          CreateCustomLobbyBodyMoreBelow: nM.after
        }),
        "data-pad-ignore": rM || void 0,
        children: iM
      })
    }
  },
  37291: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => zM,
      g: () => mM
    });
    var OM = iM(44),
      SM = iM(1429),
      jM = iM(1188),
      aM = iM(1396),
      PM = iM(3875),
      nM = iM(5335),
      QM = iM(1303);

    function zM(MM) {
      let {
        loading: rM,
        schematics: iM,
        onSchematicPicked: OM,
        selectedSchematicIdList: SM = [],
        disableAutoExport: nM
      } = MM;
      const {
        t: zM
      } = (0, jM.A)();
      return (0, QM.jsxs)("div", {
        className: "SchematicList",
        children: [rM && (0, QM.jsx)(aM.d, {}), !rM && 0 === iM.length && (0, QM.jsx)("div", {
          className: "NoSchematicsText",
          children: zM("worldBuilder:noSavedSchematic")
        }), !rM && iM.map((MM => (0, QM.jsx)(PM.h, {
          source: {
            type: "schematic",
            schematic: MM
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            OM(MM)
          },
          isSelected: SM.includes(MM.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: MM.isAutoExported && nM,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, MM.schematicId)))]
      })
    }

    function LM(MM) {
      let {
        ownedSchematics: rM,
        currentWorldSchematicId: iM,
        onClose: SM
      } = MM;
      const {
        t: aM
      } = (0, jM.A)(), [PM, LM] = (0, OM.useState)(null);
      return (0, QM.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === PM && (0, QM.jsxs)(QM.Fragment, {
          children: [(0, QM.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: aM("worldBuilder:schematicList")
          }), (0, QM.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: aM("worldBuilder:clickSchematicForOptions")
          }), (0, QM.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, QM.jsx)(zM, {
              loading: !1,
              schematics: rM,
              onSchematicPicked: MM => {
                LM(MM)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== PM && (0, QM.jsx)(nM.g, {
          schematic: PM,
          inSourceWorld: PM.schematicId === iM,
          onSchematicUpdate: MM => {
            LM(MM)
          },
          onClose: () => {
            LM(null), SM()
          }
        })]
      })
    }

    function mM(MM) {
      let {
        ownedSchematics: rM,
        currentWorldSchematicId: iM,
        onClose: OM
      } = MM;
      SM.NotificationProvider.showCustomPopup({
        body: MM => (0, QM.jsx)(LM, {
          ownedSchematics: rM,
          currentWorldSchematicId: iM,
          onClose: MM
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: OM,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  37298: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => QM,
      e: () => zM
    });
    iM(44);
    var OM = iM(1116),
      SM = iM.n(OM),
      jM = iM(5003),
      aM = iM(313),
      PM = iM(1188),
      nM = iM(1303);

    function QM(MM) {
      let {
        value: rM,
        onChange: iM,
        showAll: OM,
        disabled: QM = !1
      } = MM;
      const {
        t: zM
      } = (0, PM.A)();
      return (0, nM.jsxs)("div", {
        className: SM()("BloxdForm GamemodeForm", {
          BasicOptions: !OM
        }),
        children: [(0, nM.jsx)("div", {
          className: "SectionTitle",
          children: zM("classic:defaultGamemode")
        }), (0, nM.jsx)("div", {
          className: "SectionBody",
          children: jM.C.map((MM => OM || (0, jM.x)(MM) ? (0, nM.jsx)("button", {
            type: "button",
            className: SM()("WorldGamemode", {
              Selected: rM === MM
            }),
            disabled: QM,
            onClick: () => {
              iM(MM)
            },
            style: {
              "--background-image": `url(${aM.s[MM]})`
            },
            children: aM.p[MM]
          }, MM) : null))
        })]
      })
    }

    function zM(MM) {
      let {
        mapTypes: rM,
        value: iM,
        onChange: OM,
        showAll: QM,
        disabled: zM = !1,
        children: LM
      } = MM;
      const {
        t: mM
      } = (0, PM.A)();
      return (0, nM.jsxs)("div", {
        className: SM()("BloxdForm MapTypeForm", {
          BasicOptions: !QM
        }),
        children: [(0, nM.jsx)("div", {
          className: "SectionTitle",
          children: mM("customLobby:mapType")
        }), (0, nM.jsx)("div", {
          className: "SectionBody",
          children: rM.map((MM => QM || (0, jM.y)(MM) ? (0, nM.jsx)("button", {
            type: "button",
            className: SM()("MapType", {
              Selected: iM === MM
            }),
            disabled: zM,
            onClick: () => {
              OM(MM)
            },
            style: {
              "--background-image": `url(${aM.j[MM]})`
            },
            children: aM.i[MM]
          }, MM) : null))
        }), LM]
      })
    }
  },
  37287: () => {}
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);