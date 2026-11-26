export const id = 239;
export const ids = [239];
export const modules = {
  37201: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      CreateCustomLobby: () => IH
    });
    LH(37210);
    var AH = LH(5037),
      rH = LH(45),
      SH = LH(1706),
      hH = LH(1038),
      tH = LH.n(hH),
      zH = LH(3473),
      CH = LH(1070),
      EH = LH(1131),
      XH = LH(4991),
      GH = LH(1455),
      YH = LH(37215),
      uH = LH(1123),
      QH = LH(1306),
      WH = LH(1509),
      MH = LH(15),
      xH = LH(1457),
      vH = LH(619),
      PH = LH(5405),
      TH = LH(761),
      UH = LH(1182),
      VH = LH(1168),
      OH = LH(5418),
      bH = LH(1315),
      kH = LH(37219),
      mH = LH(37228),
      oH = LH(1225);

    function IH(HH) {
      var BH, LH, hH, IH;
      let {
        gameNameWithVariation: fH,
        close: lH,
        initialDefaultGamemode: KH
      } = HH;
      const {
        t: cH
      } = (0, uH.B)(), eH = (0, WH.useNavigatePreserveSearch)(), [qH, gH] = (0, rH.useState)("Enter"), [NH, RH] = (0, rH.useState)(""), jH = rH.useRef(null), nH = null === (BH = TH.b[fH]) || void 0 === BH ? void 0 : BH.showWorldsInsteadOfCustomLobbies, FH = nH ? 1 : null === (LH = TH.b[fH]) || void 0 === LH ? void 0 : LH.customLobbyCustomSchematicLimit, [DH, wH] = (0, rH.useState)(!nH);
      KH || (KH = "classic_creative" === fH || "classic_creativeFlat" === fH ? "creative" : "classic" === fH ? "peaceful" : "survival");
      const ZH = {
        baseOptions: {
          gameNameWithVariation: nH ? "classic" : fH,
          name: "",
          visibility: "unlisted"
        },
        listedOptions: {
          description: "",
          color: "",
          emojis: ""
        },
        mapOptions: {
          mapType: "classic_creativeFlat" === fH ? "flat" : "default",
          schematicIdList: []
        },
        worldOptions: null
      };
      nH && (ZH.worldOptions = {
        defaultGamemode: KH,
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
      const [dH, aH] = (0, rH.useState)(ZH), [sH, JH] = (0, rH.useState)(null);

      function iH(HH, BH) {
        aH({
          ...dH,
          baseOptions: {
            ...dH.baseOptions,
            [HH]: BH
          }
        })
      }

      function pH(HH, BH) {
        aH({
          ...dH,
          listedOptions: {
            ...dH.listedOptions,
            [HH]: BH
          }
        })
      }

      function yH(HH, BH) {
        aH({
          ...dH,
          worldOptions: {
            ...dH.worldOptions,
            [HH]: BH
          }
        })
      }

      function HB(HH) {
        aH({
          ...dH,
          mapOptions: {
            ...dH.mapOptions,
            ...HH
          }
        })
      }(0, rH.useEffect)((() => {
        XH.e.getNewStarterName().then((HH => {
          aH((BH => "" !== BH.baseOptions.name ? BH : {
            ...BH,
            baseOptions: {
              ...BH.baseOptions,
              name: HH
            }
          }))
        })).catch((HH => {
          console.error("Error getting new starter name:", HH)
        }))
      }), []), (0, rH.useEffect)((() => {
        "customSchematic" === dH.mapOptions.mapType && null === sH && (0, CH.postJsonWithMetricsCookiesAndJsonResponse)(`${EH.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
          retries: 0,
          minTimeout: 3e3
        }).then((HH => {
          JH(HH)
        }))
      }), [dH.mapOptions.mapType, sH]);
      const BB = {
          tpRequests: {
            isEnabled: () => !dH.worldOptions.disableTpRequests,
            vI: HH => {
              yH("disableTpRequests", !HH)
            }
          },
          spawnProtection: {
            isEnabled: () => dH.worldOptions.spawnProtection,
            vI: HH => {
              yH("spawnProtection", HH)
            }
          },
          spawnReset: {
            isEnabled: () => dH.worldOptions.enableSpawnReset,
            vI: HH => {
              yH("enableSpawnReset", HH)
            }
          },
          smpMarketplace: {
            isEnabled: () => dH.worldOptions.enableSmpMarketplace,
            vI: HH => {
              yH("enableSmpMarketplace", HH)
            }
          },
          survivalGuns: {
            isEnabled: () => dH.worldOptions.enableSurvivalGuns,
            vI: HH => {
              yH("enableSurvivalGuns", HH)
            }
          },
          fallDamage: {
            isEnabled: () => !dH.worldOptions.disableFallDamage,
            vI: HH => {
              yH("disableFallDamage", !HH)
            }
          },
          dayNight: {
            isEnabled: () => dH.worldOptions.enableDayNight,
            vI: HH => {
              yH("enableDayNight", HH)
            }
          }
        },
        LB = "Enter" !== qH,
        AB = (0, oH.jsx)(PH.g, {
          className: "NameInput",
          label: "general:name",
          disabled: "Enter" !== qH,
          children: (0, oH.jsx)(SH.e, {
            domRef: jH,
            onValueChange: (HH, BH) => {
              const LH = (0, VH.tb)(HH);
              iH("name", LH), jH.current.value = LH
            },
            maxLength: VH.R,
            defaultValue: dH.baseOptions.name
          })
        });
      return (0, oH.jsxs)("div", {
        className: tH()("CreateCustomLobby", {
          CreateCustomLobbySuccess: "Success" === qH,
          AdvancedMode: DH
        }),
        children: ["Success" === qH && (0, oH.jsxs)("div", {
          className: "CreateCustomLobbySuccessOverlay",
          children: [(0, oH.jsxs)("div", {
            className: "CreateCustomLobbySuccessTitle FullyFancyText AnimFadeInScaleUp",
            children: [(0, oH.jsx)(bH.c, {
              name: "check"
            }), (0, oH.jsx)(xH.e, {})]
          }), (0, oH.jsx)("div", {
            className: "CreateCustomLobbySuccessButtons AnimFadeInScaleUp",
            children: (0, oH.jsx)(GH.u, {
              padDefaultFocus: !0,
              onClick: () => {
                (0, MH.l)("worldCreation"), eH((0, QH.b)(fH, dH.baseOptions.name))
              },
              children: cH("homePage:joinLobbyName", {
                lobbyName: dH.baseOptions.name
              })
            })
          })]
        }), (0, oH.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, oH.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: cH(nH ? "homePage:createWorld" : "homePage:createCustomLobby")
          })
        }), (0, oH.jsx)(mH.c, {
          locked: LB,
          children: (0, oH.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [!DH && AB, DH && (0, oH.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, oH.jsx)("div", {
                className: "SectionTitle",
                children: cH("customLobby:generalOptions")
              }), (0, oH.jsxs)("div", {
                className: "SectionBody",
                children: [AB, (0, oH.jsx)(PH.g, {
                  label: "customLobby:visibility",
                  circleInfoText: cH("customLobby:visibilityDescription"),
                  disabled: "Enter" !== qH,
                  children: (0, oH.jsx)(zH.b, {
                    options: AH.t.map((HH => ({
                      value: HH,
                      label: AH.f[HH]
                    }))),
                    value: dH.baseOptions.visibility,
                    onChange: HH => {
                      iH("visibility", HH.value)
                    }
                  })
                })]
              })]
            }), nH && (0, oH.jsx)(kH.c, {
              value: dH.worldOptions.defaultGamemode,
              onChange: HH => {
                yH("defaultGamemode", HH)
              },
              showAll: DH,
              disabled: LB
            }), (nH || !(0, vH.M)(FH) && FH > 0) && (0, oH.jsx)(kH.d, {
              mapTypes: nH ? AH.K : AH.p,
              value: dH.mapOptions.mapType,
              onChange: HH => {
                const BH = {
                  mapType: HH
                };
                "customSchematic" !== HH && (BH.schematicIdList = []), HB(BH)
              },
              showAll: DH,
              disabled: LB,
              children: "customSchematic" === dH.mapOptions.mapType && (0, oH.jsxs)(oH.Fragment, {
                children: [(0, oH.jsxs)("div", {
                  className: "SchematicListTitle AnimFadeIn",
                  children: [nH && cH("customLobby:selectWorldSchematic"), !nH && cH("customLobby:selectCustomLobbySchematics", {
                    schematicLimit: FH
                  })]
                }), (0, oH.jsx)("div", {
                  className: tH()("SchematicListContainer AnimFadeIn", {
                    SchematicListContainerDisabled: "Enter" !== qH
                  }),
                  children: (0, oH.jsx)(YH.b, {
                    loading: null === sH,
                    schematics: null !== sH && void 0 !== sH ? sH : [],
                    onSchematicPicked: function(HH) {
                      const BH = dH.mapOptions.schematicIdList;
                      if (BH.includes(HH.schematicId)) HB({
                        schematicIdList: BH.filter((BH => BH !== HH.schematicId))
                      });
                      else {
                        if (FH && dH.mapOptions.schematicIdList.length >= FH) return;
                        HB({
                          schematicIdList: [...dH.mapOptions.schematicIdList, HH.schematicId]
                        })
                      }
                    },
                    selectedSchematicIdList: dH.mapOptions.schematicIdList,
                    disableAutoExport: !0
                  })
                })]
              })
            }), DH && (0, oH.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, oH.jsx)("div", {
                className: "SectionTitle",
                children: cH("customLobby:listedOptions")
              }), (0, oH.jsxs)("div", {
                className: "SectionBody",
                children: [(0, oH.jsx)(PH.g, {
                  label: "general:description",
                  className: "CustomLobbyDescription",
                  disabled: "Enter" !== qH,
                  children: (0, oH.jsx)(SH.e, {
                    onValueChange: (HH, BH) => {
                      pH("description", HH)
                    },
                    maxLength: 100,
                    defaultValue: dH.listedOptions.description
                  })
                }), (0, oH.jsx)(PH.g, {
                  label: "general:color",
                  circleInfoText: "customLobby:lobbyColorDescription",
                  disabled: "Enter" !== qH,
                  children: (0, oH.jsx)("div", {
                    className: "OtherInput",
                    children: (0, oH.jsx)("input", {
                      type: "color",
                      value: dH.listedOptions.color,
                      onChange: HH => {
                        pH("color", HH.target.value)
                      }
                    })
                  })
                }), (0, oH.jsx)(PH.g, {
                  label: "general:emojis",
                  circleInfoText: "customLobby:lobbyEmojisDescription",
                  disabled: "Enter" !== qH,
                  children: (0, oH.jsx)(SH.e, {
                    onValueChange: (HH, BH) => {
                      pH("emojis", HH)
                    },
                    maxLength: 6,
                    defaultValue: dH.listedOptions.emojis
                  })
                })]
              })]
            }), DH && nH && (0, oH.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, oH.jsx)("div", {
                className: "SectionTitle",
                children: cH("customLobby:advancedOptions")
              }), (0, oH.jsxs)("div", {
                className: "SectionBody",
                children: [(0, oH.jsx)(PH.g, {
                  label: "classic:worldGenSeed",
                  disabled: "Enter" !== qH,
                  children: (0, oH.jsx)(SH.e, {
                    onValueChange: (HH, BH) => {
                      yH("worldGenSeed", HH)
                    },
                    maxLength: VH.R
                  })
                }), (0, oH.jsx)(PH.g, {
                  label: "classic:disableProtectors",
                  disabled: "Enter" !== qH,
                  children: (0, oH.jsx)(PH.e, {
                    checked: dH.worldOptions.disableProtectors,
                    setChecked: HH => {
                      yH("disableProtectors", HH)
                    }
                  })
                }), (0, oH.jsx)(PH.g, {
                  label: "classic:disableTribeCreation",
                  disabled: "Enter" !== qH,
                  children: (0, oH.jsx)(PH.e, {
                    checked: dH.worldOptions.disableTribeCreation,
                    setChecked: HH => {
                      yH("disableTribeCreation", HH)
                    }
                  })
                }), (0, oH.jsx)(PH.g, {
                  label: "classic:voidDeathHeight",
                  circleInfoText: "classic:voidDeathHeightDescription",
                  disabled: "Enter" !== qH,
                  children: (0, oH.jsx)("input", {
                    type: "number",
                    max: UH.B,
                    value: null !== (hH = dH.worldOptions.voidDeathHeight) && void 0 !== hH ? hH : "",
                    onChange: HH => {
                      const BH = parseInt(HH.target.value);
                      yH("voidDeathHeight", isNaN(BH) ? null : BH)
                    }
                  })
                }), (0, oH.jsx)(PH.g, {
                  label: "classic:disableLobbySpawn",
                  disabled: "Enter" !== qH,
                  children: (0, oH.jsx)(PH.e, {
                    checked: dH.worldOptions.disableLobbySpawn,
                    setChecked: HH => {
                      yH("disableLobbySpawn", HH)
                    }
                  })
                }), (0, oH.jsx)(PH.g, {
                  label: "classic:worldBorder",
                  circleInfoText: "classic:worldBorderDescription",
                  disabled: "Enter" !== qH,
                  children: (0, oH.jsx)("input", {
                    type: "number",
                    min: UH.I,
                    max: UH.F,
                    value: null !== (IH = dH.worldOptions.worldBorder) && void 0 !== IH ? IH : "",
                    onChange: HH => {
                      const BH = parseInt(HH.target.value);
                      yH("worldBorder", isNaN(BH) ? null : BH)
                    }
                  })
                }), (0, oH.jsx)(PH.g, {
                  label: "classic:disableMobs",
                  disabled: "Enter" !== qH,
                  children: (0, oH.jsx)(PH.e, {
                    checked: dH.worldOptions.disableMobs,
                    setChecked: HH => {
                      yH("disableMobs", HH)
                    }
                  })
                })]
              })]
            }), nH && (0, oH.jsx)(OH.d, {
              callbacks: BB,
              disabled: "Enter" !== qH,
              advancedMode: DH
            })]
          })
        }), (0, oH.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, oH.jsx)(GH.u, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: "Enter" !== qH,
            onClick: () => {
              !async function() {
                if ("Enter" === qH) {
                  gH("Loading"), RH("");
                  try {
                    await XH.e.createCustomLobby(dH), gH("Success")
                  } catch (HH) {
                    RH(HH.message), console.error(HH.message), gH("Enter")
                  }
                }
              }()
            },
            children: cH("general:create")
          }), nH && (0, oH.jsx)("div", {
            className: "CreateCustomLobbyAdvancedToggle",
            "data-pad-ignore": LB || void 0,
            children: (0, oH.jsx)(PH.g, {
              label: "customLobby:showAdvancedOptions",
              disabled: LB,
              onLabelClick: () => {
                wH(!DH)
              },
              children: (0, oH.jsx)(PH.e, {
                checked: DH,
                setChecked: wH
              })
            })
          }), NH && (0, oH.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: NH
          })]
        })]
      })
    }
  },
  37228: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => zH
    });
    var AH = LH(1038),
      rH = LH.n(AH),
      SH = LH(45),
      hH = LH(4978),
      tH = LH(1225);

    function zH(HH) {
      let {
        locked: BH,
        children: LH
      } = HH;
      const AH = (0, SH.useRef)(null),
        zH = (0, hH.d)(AH, "y");
      return (0, tH.jsx)("div", {
        ref: AH,
        className: rH()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: zH.before,
          CreateCustomLobbyBodyMoreBelow: zH.after
        }),
        "data-pad-ignore": BH || void 0,
        children: LH
      })
    }
  },
  37215: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => EH,
      d: () => GH
    });
    var AH = LH(45),
      rH = LH(1352),
      SH = LH(1123),
      hH = LH(1313),
      tH = LH(3872),
      zH = LH(5399),
      CH = LH(1225);

    function EH(HH) {
      let {
        loading: BH,
        schematics: LH,
        onSchematicPicked: AH,
        selectedSchematicIdList: rH = [],
        disableAutoExport: zH
      } = HH;
      const {
        t: EH
      } = (0, SH.B)();
      return (0, CH.jsxs)("div", {
        className: "SchematicList",
        children: [BH && (0, CH.jsx)(hH.d, {}), !BH && 0 === LH.length && (0, CH.jsx)("div", {
          className: "NoSchematicsText",
          children: EH("worldBuilder:noSavedSchematic")
        }), !BH && LH.map((HH => (0, CH.jsx)(tH.d, {
          source: {
            type: "schematic",
            schematic: HH
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            AH(HH)
          },
          isSelected: rH.includes(HH.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: HH.isAutoExported && zH,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, HH.schematicId)))]
      })
    }

    function XH(HH) {
      let {
        ownedSchematics: BH,
        currentWorldSchematicId: LH,
        onClose: rH
      } = HH;
      const {
        t: hH
      } = (0, SH.B)(), [tH, XH] = (0, AH.useState)(null);
      return (0, CH.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === tH && (0, CH.jsxs)(CH.Fragment, {
          children: [(0, CH.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: hH("worldBuilder:schematicList")
          }), (0, CH.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: hH("worldBuilder:clickSchematicForOptions")
          }), (0, CH.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, CH.jsx)(EH, {
              loading: !1,
              schematics: BH,
              onSchematicPicked: HH => {
                XH(HH)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== tH && (0, CH.jsx)(zH.h, {
          schematic: tH,
          inSourceWorld: tH.schematicId === LH,
          onSchematicUpdate: HH => {
            XH(HH)
          },
          onClose: () => {
            XH(null), rH()
          }
        })]
      })
    }

    function GH(HH) {
      let {
        ownedSchematics: BH,
        currentWorldSchematicId: LH,
        onClose: AH
      } = HH;
      rH.NotificationProvider.showCustomPopup({
        body: HH => (0, CH.jsx)(XH, {
          ownedSchematics: BH,
          currentWorldSchematicId: LH,
          onClose: HH
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: AH,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  37219: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => CH,
      d: () => EH
    });
    LH(45);
    var AH = LH(1038),
      rH = LH.n(AH),
      SH = LH(5037),
      hH = LH(304),
      tH = LH(1123),
      zH = LH(1225);

    function CH(HH) {
      let {
        value: BH,
        onChange: LH,
        showAll: AH,
        disabled: CH = !1
      } = HH;
      const {
        t: EH
      } = (0, tH.B)();
      return (0, zH.jsxs)("div", {
        className: rH()("BloxdForm GamemodeForm", {
          BasicOptions: !AH
        }),
        children: [(0, zH.jsx)("div", {
          className: "SectionTitle",
          children: EH("classic:defaultGamemode")
        }), (0, zH.jsx)("div", {
          className: "SectionBody",
          children: SH.H.map((HH => AH || (0, SH.y)(HH) ? (0, zH.jsx)("button", {
            type: "button",
            className: rH()("WorldGamemode", {
              Selected: BH === HH
            }),
            disabled: CH,
            onClick: () => {
              LH(HH)
            },
            style: {
              "--background-image": `url(${hH.w[HH]})`
            },
            children: hH.s[HH]
          }, HH) : null))
        })]
      })
    }

    function EH(HH) {
      let {
        mapTypes: BH,
        value: LH,
        onChange: AH,
        showAll: CH,
        disabled: EH = !1,
        children: XH
      } = HH;
      const {
        t: GH
      } = (0, tH.B)();
      return (0, zH.jsxs)("div", {
        className: rH()("BloxdForm MapTypeForm", {
          BasicOptions: !CH
        }),
        children: [(0, zH.jsx)("div", {
          className: "SectionTitle",
          children: GH("customLobby:mapType")
        }), (0, zH.jsx)("div", {
          className: "SectionBody",
          children: BH.map((HH => CH || (0, SH.A)(HH) ? (0, zH.jsx)("button", {
            type: "button",
            className: rH()("MapType", {
              Selected: LH === HH
            }),
            disabled: EH,
            onClick: () => {
              AH(HH)
            },
            style: {
              "--background-image": `url(${hH.n[HH]})`
            },
            children: hH.j[HH]
          }, HH) : null))
        }), XH]
      })
    }
  },
  37210: () => {}
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);