export const id = 194;
export const ids = [194];
export const modules = {
  35465: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      CreateCustomLobby: () => bJ
    });
    ZJ(35468);
    var FJ = ZJ(4049),
      UJ = ZJ(47),
      eJ = ZJ(1566),
      XJ = ZJ(926),
      AJ = ZJ.n(XJ),
      qJ = ZJ(2623),
      jJ = ZJ(1028),
      YJ = ZJ(1098),
      hJ = ZJ(4006),
      DJ = ZJ(1329),
      sJ = ZJ(35474),
      nJ = ZJ(1086),
      GJ = ZJ(1221),
      fJ = ZJ(1406),
      xJ = ZJ(13),
      rJ = ZJ(1335),
      vJ = ZJ(535),
      mJ = ZJ(4345),
      QJ = ZJ(622),
      EJ = ZJ(1137),
      VJ = ZJ(1122),
      KJ = ZJ(4359),
      yJ = ZJ(942),
      SJ = ZJ(35477),
      IJ = ZJ(35481),
      MJ = ZJ(990);

    function bJ(JJ) {
      var cJ, ZJ, XJ, bJ;
      let {
        gameNameWithVariation: wJ,
        close: WJ,
        initialDefaultGamemode: gJ
      } = JJ;
      const {
        t: HJ
      } = (0, nJ.F)(), PJ = (0, fJ.useNavigatePreserveSearch)(), [kJ, pJ] = (0, UJ.useState)("Enter"), [dJ, zJ] = (0, UJ.useState)(""), NJ = UJ.useRef(null), OJ = null === (cJ = QJ.d[wJ]) || void 0 === cJ ? void 0 : cJ.showWorldsInsteadOfCustomLobbies, TJ = OJ ? 1 : null === (ZJ = QJ.d[wJ]) || void 0 === ZJ ? void 0 : ZJ.customLobbyCustomSchematicLimit, [CJ, uJ] = (0, UJ.useState)(!OJ);
      gJ || (gJ = "classic_creative" === wJ || "classic_creativeFlat" === wJ ? "creative" : "classic" === wJ ? "peaceful" : "survival");
      const iJ = {
        baseOptions: {
          gameNameWithVariation: OJ ? "classic" : wJ,
          name: "",
          visibility: "unlisted"
        },
        listedOptions: {
          description: "",
          color: "",
          emojis: ""
        },
        mapOptions: {
          mapType: "classic_creativeFlat" === wJ ? "flat" : "default",
          schematicIdList: []
        },
        worldOptions: null
      };
      OJ && (iJ.worldOptions = {
        defaultGamemode: gJ,
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
      const [RJ, LJ] = (0, UJ.useState)(iJ), [aJ, BJ] = (0, UJ.useState)(null);

      function tJ(JJ, cJ) {
        LJ({
          ...RJ,
          baseOptions: {
            ...RJ.baseOptions,
            [JJ]: cJ
          }
        })
      }

      function oJ(JJ, cJ) {
        LJ({
          ...RJ,
          listedOptions: {
            ...RJ.listedOptions,
            [JJ]: cJ
          }
        })
      }

      function lJ(JJ, cJ) {
        LJ({
          ...RJ,
          worldOptions: {
            ...RJ.worldOptions,
            [JJ]: cJ
          }
        })
      }

      function Jc(JJ) {
        LJ({
          ...RJ,
          mapOptions: {
            ...RJ.mapOptions,
            ...JJ
          }
        })
      }(0, UJ.useEffect)((() => {
        hJ.e.getNewStarterName().then((JJ => {
          LJ((cJ => "" !== cJ.baseOptions.name ? cJ : {
            ...cJ,
            baseOptions: {
              ...cJ.baseOptions,
              name: JJ
            }
          }))
        })).catch((JJ => {
          console.error("Error getting new starter name:", JJ)
        }))
      }), []), (0, UJ.useEffect)((() => {
        "customSchematic" === RJ.mapOptions.mapType && null === aJ && (0, jJ.postJsonWithMetricsCookiesAndJsonResponse)(`${YJ.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
          retries: 0,
          minTimeout: 3e3
        }).then((JJ => {
          BJ(JJ)
        }))
      }), [RJ.mapOptions.mapType, aJ]);
      const cc = {
          tpRequests: {
            isEnabled: () => !RJ.worldOptions.disableTpRequests,
            GV: JJ => {
              lJ("disableTpRequests", !JJ)
            }
          },
          spawnProtection: {
            isEnabled: () => RJ.worldOptions.spawnProtection,
            GV: JJ => {
              lJ("spawnProtection", JJ)
            }
          },
          spawnReset: {
            isEnabled: () => RJ.worldOptions.enableSpawnReset,
            GV: JJ => {
              lJ("enableSpawnReset", JJ)
            }
          },
          smpMarketplace: {
            isEnabled: () => RJ.worldOptions.enableSmpMarketplace,
            GV: JJ => {
              lJ("enableSmpMarketplace", JJ)
            }
          },
          survivalGuns: {
            isEnabled: () => RJ.worldOptions.enableSurvivalGuns,
            GV: JJ => {
              lJ("enableSurvivalGuns", JJ)
            }
          },
          fallDamage: {
            isEnabled: () => !RJ.worldOptions.disableFallDamage,
            GV: JJ => {
              lJ("disableFallDamage", !JJ)
            }
          },
          dayNight: {
            isEnabled: () => RJ.worldOptions.enableDayNight,
            GV: JJ => {
              lJ("enableDayNight", JJ)
            }
          }
        },
        Zc = "Enter" !== kJ,
        Fc = (0, MJ.jsx)(mJ.g, {
          className: "NameInput",
          label: "general:name",
          disabled: "Enter" !== kJ,
          children: (0, MJ.jsx)(eJ.e, {
            domRef: NJ,
            onValueChange: (JJ, cJ) => {
              const ZJ = (0, VJ.rb)(JJ);
              tJ("name", ZJ), NJ.current.value = ZJ
            },
            maxLength: VJ.R,
            defaultValue: RJ.baseOptions.name
          })
        });
      return (0, MJ.jsxs)("div", {
        className: AJ()("CreateCustomLobby", {
          CreateCustomLobbySuccess: "Success" === kJ,
          AdvancedMode: CJ
        }),
        children: ["Success" === kJ && (0, MJ.jsxs)("div", {
          className: "CreateCustomLobbySuccessOverlay",
          children: [(0, MJ.jsxs)("div", {
            className: "CreateCustomLobbySuccessTitle FullyFancyText AnimFadeInScaleUp",
            children: [(0, MJ.jsx)(yJ.c, {
              name: "check"
            }), (0, MJ.jsx)(rJ.c, {})]
          }), (0, MJ.jsx)("div", {
            className: "CreateCustomLobbySuccessButtons AnimFadeInScaleUp",
            children: (0, MJ.jsx)(DJ.m, {
              padDefaultFocus: !0,
              onClick: () => {
                (0, xJ.h)("worldCreation"), PJ((0, GJ.c)(wJ, RJ.baseOptions.name))
              },
              children: HJ("homePage:joinLobbyName", {
                lobbyName: RJ.baseOptions.name
              })
            })
          })]
        }), (0, MJ.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, MJ.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: HJ(OJ ? "homePage:createWorld" : "homePage:createCustomLobby")
          })
        }), (0, MJ.jsx)(IJ.c, {
          locked: Zc,
          children: (0, MJ.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [!CJ && Fc, CJ && (0, MJ.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, MJ.jsx)("div", {
                className: "SectionTitle",
                children: HJ("customLobby:generalOptions")
              }), (0, MJ.jsxs)("div", {
                className: "SectionBody",
                children: [Fc, (0, MJ.jsx)(mJ.g, {
                  label: "customLobby:visibility",
                  circleInfoText: HJ("customLobby:visibilityDescription"),
                  disabled: "Enter" !== kJ,
                  children: (0, MJ.jsx)(qJ.d, {
                    options: FJ.p.map((JJ => ({
                      value: JJ,
                      label: FJ.f[JJ]
                    }))),
                    value: RJ.baseOptions.visibility,
                    onChange: JJ => {
                      tJ("visibility", JJ.value)
                    }
                  })
                })]
              })]
            }), OJ && (0, MJ.jsx)(SJ.c, {
              value: RJ.worldOptions.defaultGamemode,
              onChange: JJ => {
                lJ("defaultGamemode", JJ)
              },
              showAll: CJ,
              disabled: Zc
            }), (OJ || !(0, vJ.P)(TJ) && TJ > 0) && (0, MJ.jsx)(SJ.e, {
              mapTypes: OJ ? FJ.D : FJ.o,
              value: RJ.mapOptions.mapType,
              onChange: JJ => {
                const cJ = {
                  mapType: JJ
                };
                "customSchematic" !== JJ && (cJ.schematicIdList = []), Jc(cJ)
              },
              showAll: CJ,
              disabled: Zc,
              children: "customSchematic" === RJ.mapOptions.mapType && (0, MJ.jsxs)(MJ.Fragment, {
                children: [(0, MJ.jsxs)("div", {
                  className: "SchematicListTitle AnimFadeIn",
                  children: [OJ && HJ("customLobby:selectWorldSchematic"), !OJ && HJ("customLobby:selectCustomLobbySchematics", {
                    schematicLimit: TJ
                  })]
                }), (0, MJ.jsx)("div", {
                  className: AJ()("SchematicListContainer AnimFadeIn", {
                    SchematicListContainerDisabled: "Enter" !== kJ
                  }),
                  children: (0, MJ.jsx)(sJ.e, {
                    loading: null === aJ,
                    schematics: null !== aJ && void 0 !== aJ ? aJ : [],
                    onSchematicPicked: function(JJ) {
                      const cJ = RJ.mapOptions.schematicIdList;
                      if (cJ.includes(JJ.schematicId)) Jc({
                        schematicIdList: cJ.filter((cJ => cJ !== JJ.schematicId))
                      });
                      else {
                        if (TJ && RJ.mapOptions.schematicIdList.length >= TJ) return;
                        Jc({
                          schematicIdList: [...RJ.mapOptions.schematicIdList, JJ.schematicId]
                        })
                      }
                    },
                    selectedSchematicIdList: RJ.mapOptions.schematicIdList,
                    disableAutoExport: !0
                  })
                })]
              })
            }), CJ && (0, MJ.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, MJ.jsx)("div", {
                className: "SectionTitle",
                children: HJ("customLobby:listedOptions")
              }), (0, MJ.jsxs)("div", {
                className: "SectionBody",
                children: [(0, MJ.jsx)(mJ.g, {
                  label: "general:description",
                  className: "CustomLobbyDescription",
                  disabled: "Enter" !== kJ,
                  children: (0, MJ.jsx)(eJ.e, {
                    onValueChange: (JJ, cJ) => {
                      oJ("description", JJ)
                    },
                    maxLength: 100,
                    defaultValue: RJ.listedOptions.description
                  })
                }), (0, MJ.jsx)(mJ.g, {
                  label: "general:color",
                  circleInfoText: "customLobby:lobbyColorDescription",
                  disabled: "Enter" !== kJ,
                  children: (0, MJ.jsx)("div", {
                    className: "OtherInput",
                    children: (0, MJ.jsx)("input", {
                      type: "color",
                      value: RJ.listedOptions.color,
                      onChange: JJ => {
                        oJ("color", JJ.target.value)
                      }
                    })
                  })
                }), (0, MJ.jsx)(mJ.g, {
                  label: "general:emojis",
                  circleInfoText: "customLobby:lobbyEmojisDescription",
                  disabled: "Enter" !== kJ,
                  children: (0, MJ.jsx)(eJ.e, {
                    onValueChange: (JJ, cJ) => {
                      oJ("emojis", JJ)
                    },
                    maxLength: 6,
                    defaultValue: RJ.listedOptions.emojis
                  })
                })]
              })]
            }), CJ && OJ && (0, MJ.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, MJ.jsx)("div", {
                className: "SectionTitle",
                children: HJ("customLobby:advancedOptions")
              }), (0, MJ.jsxs)("div", {
                className: "SectionBody",
                children: [(0, MJ.jsx)(mJ.g, {
                  label: "classic:worldGenSeed",
                  disabled: "Enter" !== kJ,
                  children: (0, MJ.jsx)(eJ.e, {
                    onValueChange: (JJ, cJ) => {
                      lJ("worldGenSeed", JJ)
                    },
                    maxLength: VJ.R
                  })
                }), (0, MJ.jsx)(mJ.g, {
                  label: "classic:disableProtectors",
                  disabled: "Enter" !== kJ,
                  children: (0, MJ.jsx)(mJ.e, {
                    checked: RJ.worldOptions.disableProtectors,
                    setChecked: JJ => {
                      lJ("disableProtectors", JJ)
                    }
                  })
                }), (0, MJ.jsx)(mJ.g, {
                  label: "classic:disableTribeCreation",
                  disabled: "Enter" !== kJ,
                  children: (0, MJ.jsx)(mJ.e, {
                    checked: RJ.worldOptions.disableTribeCreation,
                    setChecked: JJ => {
                      lJ("disableTribeCreation", JJ)
                    }
                  })
                }), (0, MJ.jsx)(mJ.g, {
                  label: "classic:voidDeathHeight",
                  circleInfoText: "classic:voidDeathHeightDescription",
                  disabled: "Enter" !== kJ,
                  children: (0, MJ.jsx)("input", {
                    type: "number",
                    max: EJ.B,
                    value: null !== (XJ = RJ.worldOptions.voidDeathHeight) && void 0 !== XJ ? XJ : "",
                    onChange: JJ => {
                      const cJ = parseInt(JJ.target.value);
                      lJ("voidDeathHeight", isNaN(cJ) ? null : cJ)
                    }
                  })
                }), (0, MJ.jsx)(mJ.g, {
                  label: "classic:disableLobbySpawn",
                  disabled: "Enter" !== kJ,
                  children: (0, MJ.jsx)(mJ.e, {
                    checked: RJ.worldOptions.disableLobbySpawn,
                    setChecked: JJ => {
                      lJ("disableLobbySpawn", JJ)
                    }
                  })
                }), (0, MJ.jsx)(mJ.g, {
                  label: "classic:worldBorder",
                  circleInfoText: "classic:worldBorderDescription",
                  disabled: "Enter" !== kJ,
                  children: (0, MJ.jsx)("input", {
                    type: "number",
                    min: EJ.J,
                    max: EJ.C,
                    value: null !== (bJ = RJ.worldOptions.worldBorder) && void 0 !== bJ ? bJ : "",
                    onChange: JJ => {
                      const cJ = parseInt(JJ.target.value);
                      lJ("worldBorder", isNaN(cJ) ? null : cJ)
                    }
                  })
                }), (0, MJ.jsx)(mJ.g, {
                  label: "classic:disableMobs",
                  disabled: "Enter" !== kJ,
                  children: (0, MJ.jsx)(mJ.e, {
                    checked: RJ.worldOptions.disableMobs,
                    setChecked: JJ => {
                      lJ("disableMobs", JJ)
                    }
                  })
                })]
              })]
            }), OJ && (0, MJ.jsx)(KJ.b, {
              callbacks: cc,
              disabled: "Enter" !== kJ,
              advancedMode: CJ
            })]
          })
        }), (0, MJ.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, MJ.jsx)(DJ.m, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: "Enter" !== kJ,
            onClick: () => {
              !async function() {
                if ("Enter" === kJ) {
                  pJ("Loading"), zJ("");
                  try {
                    await hJ.e.createCustomLobby(RJ), pJ("Success")
                  } catch (JJ) {
                    zJ(JJ.message), console.error(JJ.message), pJ("Enter")
                  }
                }
              }()
            },
            children: HJ("general:create")
          }), OJ && (0, MJ.jsx)("div", {
            className: "CreateCustomLobbyAdvancedToggle",
            "data-pad-ignore": Zc || void 0,
            children: (0, MJ.jsx)(mJ.g, {
              label: "customLobby:showAdvancedOptions",
              disabled: Zc,
              onLabelClick: () => {
                uJ(!CJ)
              },
              children: (0, MJ.jsx)(mJ.e, {
                checked: CJ,
                setChecked: uJ
              })
            })
          }), dJ && (0, MJ.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: dJ
          })]
        })]
      })
    }
  },
  35481: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => qJ
    });
    var FJ = ZJ(926),
      UJ = ZJ.n(FJ),
      eJ = ZJ(47),
      XJ = ZJ(4e3),
      AJ = ZJ(990);

    function qJ(JJ) {
      let {
        locked: cJ,
        children: ZJ
      } = JJ;
      const FJ = (0, eJ.useRef)(null),
        qJ = (0, XJ.e)(FJ, "y");
      return (0, AJ.jsx)("div", {
        ref: FJ,
        className: UJ()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: qJ.before,
          CreateCustomLobbyBodyMoreBelow: qJ.after
        }),
        "data-pad-ignore": cJ || void 0,
        children: ZJ
      })
    }
  },
  35474: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => YJ,
      g: () => DJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(1247),
      eJ = ZJ(1086),
      XJ = ZJ(1232),
      AJ = ZJ(2969),
      qJ = ZJ(4340),
      jJ = ZJ(990);

    function YJ(JJ) {
      let {
        loading: cJ,
        schematics: ZJ,
        onSchematicPicked: FJ,
        selectedSchematicIdList: UJ = [],
        disableAutoExport: qJ
      } = JJ;
      const {
        t: YJ
      } = (0, eJ.F)();
      return (0, jJ.jsxs)("div", {
        className: "SchematicList",
        children: [cJ && (0, jJ.jsx)(XJ.c, {}), !cJ && 0 === ZJ.length && (0, jJ.jsx)("div", {
          className: "NoSchematicsText",
          children: YJ("worldBuilder:noSavedSchematic")
        }), !cJ && ZJ.map((JJ => (0, jJ.jsx)(AJ.f, {
          source: {
            type: "schematic",
            schematic: JJ
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            FJ(JJ)
          },
          isSelected: UJ.includes(JJ.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: JJ.isAutoExported && qJ,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, JJ.schematicId)))]
      })
    }

    function hJ(JJ) {
      let {
        ownedSchematics: cJ,
        currentWorldSchematicId: ZJ,
        onClose: UJ
      } = JJ;
      const {
        t: XJ
      } = (0, eJ.F)(), [AJ, hJ] = (0, FJ.useState)(null);
      return (0, jJ.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === AJ && (0, jJ.jsxs)(jJ.Fragment, {
          children: [(0, jJ.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: XJ("worldBuilder:schematicList")
          }), (0, jJ.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: XJ("worldBuilder:clickSchematicForOptions")
          }), (0, jJ.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, jJ.jsx)(YJ, {
              loading: !1,
              schematics: cJ,
              onSchematicPicked: JJ => {
                hJ(JJ)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== AJ && (0, jJ.jsx)(qJ.h, {
          schematic: AJ,
          inSourceWorld: AJ.schematicId === ZJ,
          onSchematicUpdate: JJ => {
            hJ(JJ)
          },
          onClose: () => {
            hJ(null), UJ()
          }
        })]
      })
    }

    function DJ(JJ) {
      let {
        ownedSchematics: cJ,
        currentWorldSchematicId: ZJ,
        onClose: FJ
      } = JJ;
      UJ.NotificationProvider.showCustomPopup({
        body: JJ => (0, jJ.jsx)(hJ, {
          ownedSchematics: cJ,
          currentWorldSchematicId: ZJ,
          onClose: JJ
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: FJ,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  35477: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => jJ,
      e: () => YJ
    });
    ZJ(47);
    var FJ = ZJ(926),
      UJ = ZJ.n(FJ),
      eJ = ZJ(4049),
      XJ = ZJ(227),
      AJ = ZJ(1086),
      qJ = ZJ(990);

    function jJ(JJ) {
      let {
        value: cJ,
        onChange: ZJ,
        showAll: FJ,
        disabled: jJ = !1
      } = JJ;
      const {
        t: YJ
      } = (0, AJ.F)();
      return (0, qJ.jsxs)("div", {
        className: UJ()("BloxdForm GamemodeForm", {
          BasicOptions: !FJ
        }),
        children: [(0, qJ.jsx)("div", {
          className: "SectionTitle",
          children: YJ("classic:defaultGamemode")
        }), (0, qJ.jsx)("div", {
          className: "SectionBody",
          children: eJ.B.map((JJ => FJ || (0, eJ.t)(JJ) ? (0, qJ.jsx)("button", {
            type: "button",
            className: UJ()("WorldGamemode", {
              Selected: cJ === JJ
            }),
            disabled: jJ,
            onClick: () => {
              ZJ(JJ)
            },
            style: {
              "--background-image": `url(${XJ.q[JJ]})`
            },
            children: XJ.p[JJ]
          }, JJ) : null))
        })]
      })
    }

    function YJ(JJ) {
      let {
        mapTypes: cJ,
        value: ZJ,
        onChange: FJ,
        showAll: jJ,
        disabled: YJ = !1,
        children: hJ
      } = JJ;
      const {
        t: DJ
      } = (0, AJ.F)();
      return (0, qJ.jsxs)("div", {
        className: UJ()("BloxdForm MapTypeForm", {
          BasicOptions: !jJ
        }),
        children: [(0, qJ.jsx)("div", {
          className: "SectionTitle",
          children: DJ("customLobby:mapType")
        }), (0, qJ.jsx)("div", {
          className: "SectionBody",
          children: cJ.map((JJ => jJ || (0, eJ.w)(JJ) ? (0, qJ.jsx)("button", {
            type: "button",
            className: UJ()("MapType", {
              Selected: ZJ === JJ
            }),
            disabled: YJ,
            onClick: () => {
              FJ(JJ)
            },
            style: {
              "--background-image": `url(${XJ.k[JJ]})`
            },
            children: XJ.h[JJ]
          }, JJ) : null))
        }), hJ]
      })
    }
  },
  35468: () => {}
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);