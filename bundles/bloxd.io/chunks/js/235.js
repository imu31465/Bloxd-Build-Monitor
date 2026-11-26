export const id = 235;
export const ids = [235];
export const modules = {
  37486: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      CreateCustomLobby: () => GV
    });
    xV(37489);
    var JV = xV(5103),
      YV = xV(62),
      UV = xV(1772),
      yV = xV(1146),
      pV = xV.n(yV),
      QV = xV(3551),
      nV = xV(1173),
      wV = xV(1230),
      ZV = xV(5056),
      vV = xV(1551),
      rV = xV(37493),
      kV = xV(1220),
      bV = xV(1397),
      EV = xV(1612),
      BV = xV(27),
      jV = xV(1557),
      qV = xV(657),
      tV = xV(5428),
      FV = xV(812),
      TV = xV(1269),
      PV = xV(1252),
      AV = xV(5442),
      NV = xV(1414),
      XV = xV(37497),
      MV = xV(37500),
      zV = xV(1321);

    function GV(VV) {
      var eV, xV, yV, GV;
      let {
        gameNameWithVariation: WV,
        close: RV,
        initialDefaultGamemode: gV
      } = VV;
      const {
        t: DV
      } = (0, kV.A)(), iV = (0, EV.useNavigatePreserveSearch)(), [CV, aV] = (0, YV.useState)("Enter"), [oV, cV] = (0, YV.useState)(""), hV = YV.useRef(null), lV = null === (eV = FV.e[WV]) || void 0 === eV ? void 0 : eV.showWorldsInsteadOfCustomLobbies, LV = lV ? 1 : null === (xV = FV.e[WV]) || void 0 === xV ? void 0 : xV.customLobbyCustomSchematicLimit, [fV, mV] = (0, YV.useState)(!lV);
      gV || (gV = "classic_creative" === WV || "classic_creativeFlat" === WV ? "creative" : "classic" === WV ? "peaceful" : "survival");
      const KV = {
        baseOptions: {
          gameNameWithVariation: lV ? "classic" : WV,
          name: "",
          visibility: "unlisted"
        },
        listedOptions: {
          description: "",
          color: "",
          emojis: ""
        },
        mapOptions: {
          mapType: "classic_creativeFlat" === WV ? "flat" : "default",
          schematicIdList: []
        },
        worldOptions: null
      };
      lV && (KV.worldOptions = {
        defaultGamemode: gV,
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
      const [HV, uV] = (0, YV.useState)(KV), [sV, SV] = (0, YV.useState)(null);

      function IV(VV, eV) {
        uV({
          ...HV,
          baseOptions: {
            ...HV.baseOptions,
            [VV]: eV
          }
        })
      }

      function dV(VV, eV) {
        uV({
          ...HV,
          listedOptions: {
            ...HV.listedOptions,
            [VV]: eV
          }
        })
      }

      function OV(VV, eV) {
        uV({
          ...HV,
          worldOptions: {
            ...HV.worldOptions,
            [VV]: eV
          }
        })
      }

      function Ve(VV) {
        uV({
          ...HV,
          mapOptions: {
            ...HV.mapOptions,
            ...VV
          }
        })
      }(0, YV.useEffect)((() => {
        ZV.e.getNewStarterName().then((VV => {
          uV((eV => "" !== eV.baseOptions.name ? eV : {
            ...eV,
            baseOptions: {
              ...eV.baseOptions,
              name: VV
            }
          }))
        })).catch((VV => {
          console.error("Error getting new starter name:", VV)
        }))
      }), []), (0, YV.useEffect)((() => {
        "customSchematic" === HV.mapOptions.mapType && null === sV && (0, nV.postJsonWithMetricsCookiesAndJsonResponse)(`${wV.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
          retries: 0,
          minTimeout: 3e3
        }).then((VV => {
          SV(VV)
        }))
      }), [HV.mapOptions.mapType, sV]);
      const ee = {
          tpRequests: {
            isEnabled: () => !HV.worldOptions.disableTpRequests,
            pW: VV => {
              OV("disableTpRequests", !VV)
            }
          },
          spawnProtection: {
            isEnabled: () => HV.worldOptions.spawnProtection,
            pW: VV => {
              OV("spawnProtection", VV)
            }
          },
          spawnReset: {
            isEnabled: () => HV.worldOptions.enableSpawnReset,
            pW: VV => {
              OV("enableSpawnReset", VV)
            }
          },
          smpMarketplace: {
            isEnabled: () => HV.worldOptions.enableSmpMarketplace,
            pW: VV => {
              OV("enableSmpMarketplace", VV)
            }
          },
          survivalGuns: {
            isEnabled: () => HV.worldOptions.enableSurvivalGuns,
            pW: VV => {
              OV("enableSurvivalGuns", VV)
            }
          },
          fallDamage: {
            isEnabled: () => !HV.worldOptions.disableFallDamage,
            pW: VV => {
              OV("disableFallDamage", !VV)
            }
          },
          dayNight: {
            isEnabled: () => HV.worldOptions.enableDayNight,
            pW: VV => {
              OV("enableDayNight", VV)
            }
          }
        },
        xe = "Enter" !== CV,
        Je = (0, zV.jsx)(tV.i, {
          className: "NameInput",
          label: "general:name",
          disabled: "Enter" !== CV,
          children: (0, zV.jsx)(UV.d, {
            domRef: hV,
            onValueChange: (VV, eV) => {
              const xV = (0, PV.qb)(VV);
              IV("name", xV), hV.current.value = xV
            },
            maxLength: PV.L,
            defaultValue: HV.baseOptions.name
          })
        });
      return (0, zV.jsxs)("div", {
        className: pV()("CreateCustomLobby", {
          CreateCustomLobbySuccess: "Success" === CV,
          AdvancedMode: fV
        }),
        children: ["Success" === CV && (0, zV.jsxs)("div", {
          className: "CreateCustomLobbySuccessOverlay",
          children: [(0, zV.jsxs)("div", {
            className: "CreateCustomLobbySuccessTitle FullyFancyText AnimFadeInScaleUp",
            children: [(0, zV.jsx)(NV.b, {
              name: "check"
            }), (0, zV.jsx)(jV.b, {})]
          }), (0, zV.jsx)("div", {
            className: "CreateCustomLobbySuccessButtons AnimFadeInScaleUp",
            children: (0, zV.jsx)(vV.m, {
              padDefaultFocus: !0,
              onClick: () => {
                (0, BV.h)("worldCreation"), iV((0, bV.c)(WV, HV.baseOptions.name))
              },
              children: DV("homePage:joinLobbyName", {
                lobbyName: HV.baseOptions.name
              })
            })
          })]
        }), (0, zV.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, zV.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: DV(lV ? "homePage:createWorld" : "homePage:createCustomLobby")
          })
        }), (0, zV.jsx)(MV.c, {
          locked: xe,
          children: (0, zV.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [!fV && Je, fV && (0, zV.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, zV.jsx)("div", {
                className: "SectionTitle",
                children: DV("customLobby:generalOptions")
              }), (0, zV.jsxs)("div", {
                className: "SectionBody",
                children: [Je, (0, zV.jsx)(tV.i, {
                  label: "customLobby:visibility",
                  circleInfoText: DV("customLobby:visibilityDescription"),
                  disabled: "Enter" !== CV,
                  children: (0, zV.jsx)(QV.c, {
                    options: JV.q.map((VV => ({
                      value: VV,
                      label: JV.d[VV]
                    }))),
                    value: HV.baseOptions.visibility,
                    onChange: VV => {
                      IV("visibility", VV.value)
                    }
                  })
                })]
              })]
            }), lV && (0, zV.jsx)(XV.d, {
              value: HV.worldOptions.defaultGamemode,
              onChange: VV => {
                OV("defaultGamemode", VV)
              },
              showAll: fV,
              disabled: xe
            }), (lV || !(0, qV.J)(LV) && LV > 0) && (0, zV.jsx)(XV.g, {
              mapTypes: lV ? JV.E : JV.n,
              value: HV.mapOptions.mapType,
              onChange: VV => {
                const eV = {
                  mapType: VV
                };
                "customSchematic" !== VV && (eV.schematicIdList = []), Ve(eV)
              },
              showAll: fV,
              disabled: xe,
              children: "customSchematic" === HV.mapOptions.mapType && (0, zV.jsxs)(zV.Fragment, {
                children: [(0, zV.jsxs)("div", {
                  className: "SchematicListTitle AnimFadeIn",
                  children: [lV && DV("customLobby:selectWorldSchematic"), !lV && DV("customLobby:selectCustomLobbySchematics", {
                    schematicLimit: LV
                  })]
                }), (0, zV.jsx)("div", {
                  className: pV()("SchematicListContainer AnimFadeIn", {
                    SchematicListContainerDisabled: "Enter" !== CV
                  }),
                  children: (0, zV.jsx)(rV.c, {
                    loading: null === sV,
                    schematics: null !== sV && void 0 !== sV ? sV : [],
                    onSchematicPicked: function(VV) {
                      const eV = HV.mapOptions.schematicIdList;
                      if (eV.includes(VV.schematicId)) Ve({
                        schematicIdList: eV.filter((eV => eV !== VV.schematicId))
                      });
                      else {
                        if (LV && HV.mapOptions.schematicIdList.length >= LV) return;
                        Ve({
                          schematicIdList: [...HV.mapOptions.schematicIdList, VV.schematicId]
                        })
                      }
                    },
                    selectedSchematicIdList: HV.mapOptions.schematicIdList,
                    disableAutoExport: !0
                  })
                })]
              })
            }), fV && (0, zV.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, zV.jsx)("div", {
                className: "SectionTitle",
                children: DV("customLobby:listedOptions")
              }), (0, zV.jsxs)("div", {
                className: "SectionBody",
                children: [(0, zV.jsx)(tV.i, {
                  label: "general:description",
                  className: "CustomLobbyDescription",
                  disabled: "Enter" !== CV,
                  children: (0, zV.jsx)(UV.d, {
                    onValueChange: (VV, eV) => {
                      dV("description", VV)
                    },
                    maxLength: 100,
                    defaultValue: HV.listedOptions.description
                  })
                }), (0, zV.jsx)(tV.i, {
                  label: "general:color",
                  circleInfoText: "customLobby:lobbyColorDescription",
                  disabled: "Enter" !== CV,
                  children: (0, zV.jsx)("div", {
                    className: "OtherInput",
                    children: (0, zV.jsx)("input", {
                      type: "color",
                      value: HV.listedOptions.color,
                      onChange: VV => {
                        dV("color", VV.target.value)
                      }
                    })
                  })
                }), (0, zV.jsx)(tV.i, {
                  label: "general:emojis",
                  circleInfoText: "customLobby:lobbyEmojisDescription",
                  disabled: "Enter" !== CV,
                  children: (0, zV.jsx)(UV.d, {
                    onValueChange: (VV, eV) => {
                      dV("emojis", VV)
                    },
                    maxLength: 6,
                    defaultValue: HV.listedOptions.emojis
                  })
                })]
              })]
            }), fV && lV && (0, zV.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, zV.jsx)("div", {
                className: "SectionTitle",
                children: DV("customLobby:advancedOptions")
              }), (0, zV.jsxs)("div", {
                className: "SectionBody",
                children: [(0, zV.jsx)(tV.i, {
                  label: "classic:worldGenSeed",
                  disabled: "Enter" !== CV,
                  children: (0, zV.jsx)(UV.d, {
                    onValueChange: (VV, eV) => {
                      OV("worldGenSeed", VV)
                    },
                    maxLength: PV.L
                  })
                }), (0, zV.jsx)(tV.i, {
                  label: "classic:disableProtectors",
                  disabled: "Enter" !== CV,
                  children: (0, zV.jsx)(tV.e, {
                    checked: HV.worldOptions.disableProtectors,
                    setChecked: VV => {
                      OV("disableProtectors", VV)
                    }
                  })
                }), (0, zV.jsx)(tV.i, {
                  label: "classic:disableTribeCreation",
                  disabled: "Enter" !== CV,
                  children: (0, zV.jsx)(tV.e, {
                    checked: HV.worldOptions.disableTribeCreation,
                    setChecked: VV => {
                      OV("disableTribeCreation", VV)
                    }
                  })
                }), (0, zV.jsx)(tV.i, {
                  label: "classic:voidDeathHeight",
                  circleInfoText: "classic:voidDeathHeightDescription",
                  disabled: "Enter" !== CV,
                  children: (0, zV.jsx)("input", {
                    type: "number",
                    max: TV.H,
                    value: null !== (yV = HV.worldOptions.voidDeathHeight) && void 0 !== yV ? yV : "",
                    onChange: VV => {
                      const eV = parseInt(VV.target.value);
                      OV("voidDeathHeight", isNaN(eV) ? null : eV)
                    }
                  })
                }), (0, zV.jsx)(tV.i, {
                  label: "classic:disableLobbySpawn",
                  disabled: "Enter" !== CV,
                  children: (0, zV.jsx)(tV.e, {
                    checked: HV.worldOptions.disableLobbySpawn,
                    setChecked: VV => {
                      OV("disableLobbySpawn", VV)
                    }
                  })
                }), (0, zV.jsx)(tV.i, {
                  label: "classic:worldBorder",
                  circleInfoText: "classic:worldBorderDescription",
                  disabled: "Enter" !== CV,
                  children: (0, zV.jsx)("input", {
                    type: "number",
                    min: TV.M,
                    max: TV.J,
                    value: null !== (GV = HV.worldOptions.worldBorder) && void 0 !== GV ? GV : "",
                    onChange: VV => {
                      const eV = parseInt(VV.target.value);
                      OV("worldBorder", isNaN(eV) ? null : eV)
                    }
                  })
                }), (0, zV.jsx)(tV.i, {
                  label: "classic:disableMobs",
                  disabled: "Enter" !== CV,
                  children: (0, zV.jsx)(tV.e, {
                    checked: HV.worldOptions.disableMobs,
                    setChecked: VV => {
                      OV("disableMobs", VV)
                    }
                  })
                })]
              })]
            }), lV && (0, zV.jsx)(AV.e, {
              callbacks: ee,
              disabled: "Enter" !== CV,
              advancedMode: fV
            })]
          })
        }), (0, zV.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, zV.jsx)(vV.m, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: "Enter" !== CV,
            onClick: () => {
              !async function() {
                if ("Enter" === CV) {
                  aV("Loading"), cV("");
                  try {
                    await ZV.e.createCustomLobby(HV), aV("Success")
                  } catch (VV) {
                    cV(VV.message), console.error(VV.message), aV("Enter")
                  }
                }
              }()
            },
            children: DV("general:create")
          }), lV && (0, zV.jsx)("div", {
            className: "CreateCustomLobbyAdvancedToggle",
            "data-pad-ignore": xe || void 0,
            children: (0, zV.jsx)(tV.i, {
              label: "customLobby:showAdvancedOptions",
              disabled: xe,
              onLabelClick: () => {
                mV(!fV)
              },
              children: (0, zV.jsx)(tV.e, {
                checked: fV,
                setChecked: mV
              })
            })
          }), oV && (0, zV.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: oV
          })]
        })]
      })
    }
  },
  37500: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => QV
    });
    var JV = xV(1146),
      YV = xV.n(JV),
      UV = xV(62),
      yV = xV(5050),
      pV = xV(1321);

    function QV(VV) {
      let {
        locked: eV,
        children: xV
      } = VV;
      const JV = (0, UV.useRef)(null),
        QV = (0, yV.d)(JV, "y");
      return (0, pV.jsx)("div", {
        ref: JV,
        className: YV()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: QV.before,
          CreateCustomLobbyBodyMoreBelow: QV.after
        }),
        "data-pad-ignore": eV || void 0,
        children: xV
      })
    }
  },
  37493: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => wV,
      d: () => vV
    });
    var JV = xV(62),
      YV = xV(1439),
      UV = xV(1220),
      yV = xV(1408),
      pV = xV(3922),
      QV = xV(5425),
      nV = xV(1321);

    function wV(VV) {
      let {
        loading: eV,
        schematics: xV,
        onSchematicPicked: JV,
        selectedSchematicIdList: YV = [],
        disableAutoExport: QV
      } = VV;
      const {
        t: wV
      } = (0, UV.A)();
      return (0, nV.jsxs)("div", {
        className: "SchematicList",
        children: [eV && (0, nV.jsx)(yV.d, {}), !eV && 0 === xV.length && (0, nV.jsx)("div", {
          className: "NoSchematicsText",
          children: wV("worldBuilder:noSavedSchematic")
        }), !eV && xV.map((VV => (0, nV.jsx)(pV.g, {
          source: {
            type: "schematic",
            schematic: VV
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            JV(VV)
          },
          isSelected: YV.includes(VV.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: VV.isAutoExported && QV,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, VV.schematicId)))]
      })
    }

    function ZV(VV) {
      let {
        ownedSchematics: eV,
        currentWorldSchematicId: xV,
        onClose: YV
      } = VV;
      const {
        t: yV
      } = (0, UV.A)(), [pV, ZV] = (0, JV.useState)(null);
      return (0, nV.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === pV && (0, nV.jsxs)(nV.Fragment, {
          children: [(0, nV.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: yV("worldBuilder:schematicList")
          }), (0, nV.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: yV("worldBuilder:clickSchematicForOptions")
          }), (0, nV.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, nV.jsx)(wV, {
              loading: !1,
              schematics: eV,
              onSchematicPicked: VV => {
                ZV(VV)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== pV && (0, nV.jsx)(QV.i, {
          schematic: pV,
          inSourceWorld: pV.schematicId === xV,
          onSchematicUpdate: VV => {
            ZV(VV)
          },
          onClose: () => {
            ZV(null), YV()
          }
        })]
      })
    }

    function vV(VV) {
      let {
        ownedSchematics: eV,
        currentWorldSchematicId: xV,
        onClose: JV
      } = VV;
      YV.NotificationProvider.showCustomPopup({
        body: VV => (0, nV.jsx)(ZV, {
          ownedSchematics: eV,
          currentWorldSchematicId: xV,
          onClose: VV
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: JV,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  37497: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => nV,
      g: () => wV
    });
    xV(62);
    var JV = xV(1146),
      YV = xV.n(JV),
      UV = xV(5103),
      yV = xV(364),
      pV = xV(1220),
      QV = xV(1321);

    function nV(VV) {
      let {
        value: eV,
        onChange: xV,
        showAll: JV,
        disabled: nV = !1
      } = VV;
      const {
        t: wV
      } = (0, pV.A)();
      return (0, QV.jsxs)("div", {
        className: YV()("BloxdForm GamemodeForm", {
          BasicOptions: !JV
        }),
        children: [(0, QV.jsx)("div", {
          className: "SectionTitle",
          children: wV("classic:defaultGamemode")
        }), (0, QV.jsx)("div", {
          className: "SectionBody",
          children: UV.A.map((VV => JV || (0, UV.t)(VV) ? (0, QV.jsx)("button", {
            type: "button",
            className: YV()("WorldGamemode", {
              Selected: eV === VV
            }),
            disabled: nV,
            onClick: () => {
              xV(VV)
            },
            style: {
              "--background-image": `url(${yV.v[VV]})`
            },
            children: yV.r[VV]
          }, VV) : null))
        })]
      })
    }

    function wV(VV) {
      let {
        mapTypes: eV,
        value: xV,
        onChange: JV,
        showAll: nV,
        disabled: wV = !1,
        children: ZV
      } = VV;
      const {
        t: vV
      } = (0, pV.A)();
      return (0, QV.jsxs)("div", {
        className: YV()("BloxdForm MapTypeForm", {
          BasicOptions: !nV
        }),
        children: [(0, QV.jsx)("div", {
          className: "SectionTitle",
          children: vV("customLobby:mapType")
        }), (0, QV.jsx)("div", {
          className: "SectionBody",
          children: eV.map((VV => nV || (0, UV.w)(VV) ? (0, QV.jsx)("button", {
            type: "button",
            className: YV()("MapType", {
              Selected: xV === VV
            }),
            disabled: wV,
            onClick: () => {
              JV(VV)
            },
            style: {
              "--background-image": `url(${yV.m[VV]})`
            },
            children: yV.j[VV]
          }, VV) : null))
        }), ZV]
      })
    }
  },
  37489: () => {}
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);