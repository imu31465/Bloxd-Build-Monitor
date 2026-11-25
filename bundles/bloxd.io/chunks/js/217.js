export const id = 217;
export const ids = [217];
export const modules = {
  36668: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      CreateCustomLobby: () => FG
    });
    ZG(36670);
    var wG = ZG(4655),
      SG = ZG(51),
      LG = ZG(1621),
      yG = ZG(1006),
      kG = ZG.n(yG),
      UG = ZG(3113),
      YG = ZG(1096),
      VG = ZG(1163),
      pG = ZG(4611),
      fG = ZG(1393),
      QG = ZG(36672),
      KG = ZG(1151),
      hG = ZG(1290),
      dG = ZG(1444),
      JG = ZG(17),
      rG = ZG(1396),
      zG = ZG(604),
      EG = ZG(4959),
      oG = ZG(751),
      XG = ZG(1198),
      uG = ZG(1177),
      iG = ZG(4973),
      CG = ZG(1016),
      WG = ZG(36680),
      mG = ZG(36686),
      IG = ZG(1067);

    function FG(GG) {
      var bG, ZG, yG, FG;
      let {
        gameNameWithVariation: vG,
        close: aG,
        initialDefaultGamemode: cG
      } = GG;
      const {
        t: lG
      } = (0, KG.w)(), jG = (0, dG.useNavigatePreserveSearch)(), [PG, MG] = (0, SG.useState)("Enter"), [AG, sG] = (0, SG.useState)(""), qG = SG.useRef(null), nG = null === (bG = oG.d[vG]) || void 0 === bG ? void 0 : bG.showWorldsInsteadOfCustomLobbies, gG = nG ? 1 : null === (ZG = oG.d[vG]) || void 0 === ZG ? void 0 : ZG.customLobbyCustomSchematicLimit, [eG, RG] = (0, SG.useState)(!nG);
      cG || (cG = "classic_creative" === vG || "classic_creativeFlat" === vG ? "creative" : "classic" === vG ? "peaceful" : "survival");
      const TG = {
        baseOptions: {
          gameNameWithVariation: nG ? "classic" : vG,
          name: "",
          visibility: "unlisted"
        },
        listedOptions: {
          description: "",
          color: "",
          emojis: ""
        },
        mapOptions: {
          mapType: "classic_creativeFlat" === vG ? "flat" : "default",
          schematicIdList: []
        },
        worldOptions: null
      };
      nG && (TG.worldOptions = {
        defaultGamemode: cG,
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
      const [HG, tG] = (0, SG.useState)(TG), [DG, NG] = (0, SG.useState)(null);

      function OG(GG, bG) {
        tG({
          ...HG,
          baseOptions: {
            ...HG.baseOptions,
            [GG]: bG
          }
        })
      }

      function xG(GG, bG) {
        tG({
          ...HG,
          listedOptions: {
            ...HG.listedOptions,
            [GG]: bG
          }
        })
      }

      function BG(GG, bG) {
        tG({
          ...HG,
          worldOptions: {
            ...HG.worldOptions,
            [GG]: bG
          }
        })
      }

      function Gb(GG) {
        tG({
          ...HG,
          mapOptions: {
            ...HG.mapOptions,
            ...GG
          }
        })
      }(0, SG.useEffect)((() => {
        pG.d.getNewStarterName().then((GG => {
          tG((bG => "" !== bG.baseOptions.name ? bG : {
            ...bG,
            baseOptions: {
              ...bG.baseOptions,
              name: GG
            }
          }))
        })).catch((GG => {
          console.error("Error getting new starter name:", GG)
        }))
      }), []), (0, SG.useEffect)((() => {
        "customSchematic" === HG.mapOptions.mapType && null === DG && (0, YG.postJsonWithMetricsCookiesAndJsonResponse)(`${VG.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
          retries: 0,
          minTimeout: 3e3
        }).then((GG => {
          NG(GG)
        }))
      }), [HG.mapOptions.mapType, DG]);
      const bb = {
          tpRequests: {
            isEnabled: () => !HG.worldOptions.disableTpRequests,
            DW: GG => {
              BG("disableTpRequests", !GG)
            }
          },
          spawnProtection: {
            isEnabled: () => HG.worldOptions.spawnProtection,
            DW: GG => {
              BG("spawnProtection", GG)
            }
          },
          spawnReset: {
            isEnabled: () => HG.worldOptions.enableSpawnReset,
            DW: GG => {
              BG("enableSpawnReset", GG)
            }
          },
          smpMarketplace: {
            isEnabled: () => HG.worldOptions.enableSmpMarketplace,
            DW: GG => {
              BG("enableSmpMarketplace", GG)
            }
          },
          survivalGuns: {
            isEnabled: () => HG.worldOptions.enableSurvivalGuns,
            DW: GG => {
              BG("enableSurvivalGuns", GG)
            }
          },
          fallDamage: {
            isEnabled: () => !HG.worldOptions.disableFallDamage,
            DW: GG => {
              BG("disableFallDamage", !GG)
            }
          },
          dayNight: {
            isEnabled: () => HG.worldOptions.enableDayNight,
            DW: GG => {
              BG("enableDayNight", GG)
            }
          }
        },
        Zb = "Enter" !== PG,
        wb = (0, IG.jsx)(EG.e, {
          className: "NameInput",
          label: "general:name",
          disabled: "Enter" !== PG,
          children: (0, IG.jsx)(LG.b, {
            domRef: qG,
            onValueChange: (GG, bG) => {
              const ZG = (0, uG.wb)(GG);
              OG("name", ZG), qG.current.value = ZG
            },
            maxLength: uG.L,
            defaultValue: HG.baseOptions.name
          })
        });
      return (0, IG.jsxs)("div", {
        className: kG()("CreateCustomLobby", {
          CreateCustomLobbySuccess: "Success" === PG,
          AdvancedMode: eG
        }),
        children: ["Success" === PG && (0, IG.jsxs)("div", {
          className: "CreateCustomLobbySuccessOverlay",
          children: [(0, IG.jsxs)("div", {
            className: "CreateCustomLobbySuccessTitle FullyFancyText AnimFadeInScaleUp",
            children: [(0, IG.jsx)(CG.c, {
              name: "check"
            }), (0, IG.jsx)(rG.d, {})]
          }), (0, IG.jsx)("div", {
            className: "CreateCustomLobbySuccessButtons AnimFadeInScaleUp",
            children: (0, IG.jsx)(fG.k, {
              padDefaultFocus: !0,
              onClick: () => {
                (0, JG.n)("worldCreation"), jG((0, hG.d)(vG, HG.baseOptions.name))
              },
              children: lG("homePage:joinLobbyName", {
                lobbyName: HG.baseOptions.name
              })
            })
          })]
        }), (0, IG.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, IG.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: lG(nG ? "homePage:createWorld" : "homePage:createCustomLobby")
          })
        }), (0, IG.jsx)(mG.d, {
          locked: Zb,
          children: (0, IG.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [!eG && wb, eG && (0, IG.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, IG.jsx)("div", {
                className: "SectionTitle",
                children: lG("customLobby:generalOptions")
              }), (0, IG.jsxs)("div", {
                className: "SectionBody",
                children: [wb, (0, IG.jsx)(EG.e, {
                  label: "customLobby:visibility",
                  circleInfoText: lG("customLobby:visibilityDescription"),
                  disabled: "Enter" !== PG,
                  children: (0, IG.jsx)(UG.b, {
                    options: wG.q.map((GG => ({
                      value: GG,
                      label: wG.f[GG]
                    }))),
                    value: HG.baseOptions.visibility,
                    onChange: GG => {
                      OG("visibility", GG.value)
                    }
                  })
                })]
              })]
            }), nG && (0, IG.jsx)(WG.d, {
              value: HG.worldOptions.defaultGamemode,
              onChange: GG => {
                BG("defaultGamemode", GG)
              },
              showAll: eG,
              disabled: Zb
            }), (nG || !(0, zG.L)(gG) && gG > 0) && (0, IG.jsx)(WG.f, {
              mapTypes: nG ? wG.J : wG.m,
              value: HG.mapOptions.mapType,
              onChange: GG => {
                const bG = {
                  mapType: GG
                };
                "customSchematic" !== GG && (bG.schematicIdList = []), Gb(bG)
              },
              showAll: eG,
              disabled: Zb,
              children: "customSchematic" === HG.mapOptions.mapType && (0, IG.jsxs)(IG.Fragment, {
                children: [(0, IG.jsxs)("div", {
                  className: "SchematicListTitle AnimFadeIn",
                  children: [nG && lG("customLobby:selectWorldSchematic"), !nG && lG("customLobby:selectCustomLobbySchematics", {
                    schematicLimit: gG
                  })]
                }), (0, IG.jsx)("div", {
                  className: kG()("SchematicListContainer AnimFadeIn", {
                    SchematicListContainerDisabled: "Enter" !== PG
                  }),
                  children: (0, IG.jsx)(QG.b, {
                    loading: null === DG,
                    schematics: null !== DG && void 0 !== DG ? DG : [],
                    onSchematicPicked: function(GG) {
                      const bG = HG.mapOptions.schematicIdList;
                      if (bG.includes(GG.schematicId)) Gb({
                        schematicIdList: bG.filter((bG => bG !== GG.schematicId))
                      });
                      else {
                        if (gG && HG.mapOptions.schematicIdList.length >= gG) return;
                        Gb({
                          schematicIdList: [...HG.mapOptions.schematicIdList, GG.schematicId]
                        })
                      }
                    },
                    selectedSchematicIdList: HG.mapOptions.schematicIdList,
                    disableAutoExport: !0
                  })
                })]
              })
            }), eG && (0, IG.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, IG.jsx)("div", {
                className: "SectionTitle",
                children: lG("customLobby:listedOptions")
              }), (0, IG.jsxs)("div", {
                className: "SectionBody",
                children: [(0, IG.jsx)(EG.e, {
                  label: "general:description",
                  className: "CustomLobbyDescription",
                  disabled: "Enter" !== PG,
                  children: (0, IG.jsx)(LG.b, {
                    onValueChange: (GG, bG) => {
                      xG("description", GG)
                    },
                    maxLength: 100,
                    defaultValue: HG.listedOptions.description
                  })
                }), (0, IG.jsx)(EG.e, {
                  label: "general:color",
                  circleInfoText: "customLobby:lobbyColorDescription",
                  disabled: "Enter" !== PG,
                  children: (0, IG.jsx)("div", {
                    className: "OtherInput",
                    children: (0, IG.jsx)("input", {
                      type: "color",
                      value: HG.listedOptions.color,
                      onChange: GG => {
                        xG("color", GG.target.value)
                      }
                    })
                  })
                }), (0, IG.jsx)(EG.e, {
                  label: "general:emojis",
                  circleInfoText: "customLobby:lobbyEmojisDescription",
                  disabled: "Enter" !== PG,
                  children: (0, IG.jsx)(LG.b, {
                    onValueChange: (GG, bG) => {
                      xG("emojis", GG)
                    },
                    maxLength: 6,
                    defaultValue: HG.listedOptions.emojis
                  })
                })]
              })]
            }), eG && nG && (0, IG.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, IG.jsx)("div", {
                className: "SectionTitle",
                children: lG("customLobby:advancedOptions")
              }), (0, IG.jsxs)("div", {
                className: "SectionBody",
                children: [(0, IG.jsx)(EG.e, {
                  label: "classic:worldGenSeed",
                  disabled: "Enter" !== PG,
                  children: (0, IG.jsx)(LG.b, {
                    onValueChange: (GG, bG) => {
                      BG("worldGenSeed", GG)
                    },
                    maxLength: uG.L
                  })
                }), (0, IG.jsx)(EG.e, {
                  label: "classic:disableProtectors",
                  disabled: "Enter" !== PG,
                  children: (0, IG.jsx)(EG.b, {
                    checked: HG.worldOptions.disableProtectors,
                    setChecked: GG => {
                      BG("disableProtectors", GG)
                    }
                  })
                }), (0, IG.jsx)(EG.e, {
                  label: "classic:disableTribeCreation",
                  disabled: "Enter" !== PG,
                  children: (0, IG.jsx)(EG.b, {
                    checked: HG.worldOptions.disableTribeCreation,
                    setChecked: GG => {
                      BG("disableTribeCreation", GG)
                    }
                  })
                }), (0, IG.jsx)(EG.e, {
                  label: "classic:voidDeathHeight",
                  circleInfoText: "classic:voidDeathHeightDescription",
                  disabled: "Enter" !== PG,
                  children: (0, IG.jsx)("input", {
                    type: "number",
                    max: XG.F,
                    value: null !== (yG = HG.worldOptions.voidDeathHeight) && void 0 !== yG ? yG : "",
                    onChange: GG => {
                      const bG = parseInt(GG.target.value);
                      BG("voidDeathHeight", isNaN(bG) ? null : bG)
                    }
                  })
                }), (0, IG.jsx)(EG.e, {
                  label: "classic:disableLobbySpawn",
                  disabled: "Enter" !== PG,
                  children: (0, IG.jsx)(EG.b, {
                    checked: HG.worldOptions.disableLobbySpawn,
                    setChecked: GG => {
                      BG("disableLobbySpawn", GG)
                    }
                  })
                }), (0, IG.jsx)(EG.e, {
                  label: "classic:worldBorder",
                  circleInfoText: "classic:worldBorderDescription",
                  disabled: "Enter" !== PG,
                  children: (0, IG.jsx)("input", {
                    type: "number",
                    min: XG.N,
                    max: XG.I,
                    value: null !== (FG = HG.worldOptions.worldBorder) && void 0 !== FG ? FG : "",
                    onChange: GG => {
                      const bG = parseInt(GG.target.value);
                      BG("worldBorder", isNaN(bG) ? null : bG)
                    }
                  })
                }), (0, IG.jsx)(EG.e, {
                  label: "classic:disableMobs",
                  disabled: "Enter" !== PG,
                  children: (0, IG.jsx)(EG.b, {
                    checked: HG.worldOptions.disableMobs,
                    setChecked: GG => {
                      BG("disableMobs", GG)
                    }
                  })
                })]
              })]
            }), nG && (0, IG.jsx)(iG.d, {
              callbacks: bb,
              disabled: "Enter" !== PG,
              advancedMode: eG
            })]
          })
        }), (0, IG.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, IG.jsx)(fG.k, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: "Enter" !== PG,
            onClick: () => {
              !async function() {
                if ("Enter" === PG) {
                  MG("Loading"), sG("");
                  try {
                    await pG.d.createCustomLobby(HG), MG("Success")
                  } catch (GG) {
                    sG(GG.message), console.error(GG.message), MG("Enter")
                  }
                }
              }()
            },
            children: lG("general:create")
          }), nG && (0, IG.jsx)("div", {
            className: "CreateCustomLobbyAdvancedToggle",
            "data-pad-ignore": Zb || void 0,
            children: (0, IG.jsx)(EG.e, {
              label: "customLobby:showAdvancedOptions",
              disabled: Zb,
              onLabelClick: () => {
                RG(!eG)
              },
              children: (0, IG.jsx)(EG.b, {
                checked: eG,
                setChecked: RG
              })
            })
          }), AG && (0, IG.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: AG
          })]
        })]
      })
    }
  },
  36686: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => UG
    });
    var wG = ZG(1006),
      SG = ZG.n(wG),
      LG = ZG(51),
      yG = ZG(4596),
      kG = ZG(1067);

    function UG(GG) {
      let {
        locked: bG,
        children: ZG
      } = GG;
      const wG = (0, LG.useRef)(null),
        UG = (0, yG.e)(wG, "y");
      return (0, kG.jsx)("div", {
        ref: wG,
        className: SG()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: UG.before,
          CreateCustomLobbyBodyMoreBelow: UG.after
        }),
        "data-pad-ignore": bG || void 0,
        children: ZG
      })
    }
  },
  36672: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => VG,
      f: () => fG
    });
    var wG = ZG(51),
      SG = ZG(1311),
      LG = ZG(1151),
      yG = ZG(1302),
      kG = ZG(3458),
      UG = ZG(4955),
      YG = ZG(1067);

    function VG(GG) {
      let {
        loading: bG,
        schematics: ZG,
        onSchematicPicked: wG,
        selectedSchematicIdList: SG = [],
        disableAutoExport: UG
      } = GG;
      const {
        t: VG
      } = (0, LG.w)();
      return (0, YG.jsxs)("div", {
        className: "SchematicList",
        children: [bG && (0, YG.jsx)(yG.b, {}), !bG && 0 === ZG.length && (0, YG.jsx)("div", {
          className: "NoSchematicsText",
          children: VG("worldBuilder:noSavedSchematic")
        }), !bG && ZG.map((GG => (0, YG.jsx)(kG.g, {
          source: {
            type: "schematic",
            schematic: GG
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            wG(GG)
          },
          isSelected: SG.includes(GG.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: GG.isAutoExported && UG,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, GG.schematicId)))]
      })
    }

    function pG(GG) {
      let {
        ownedSchematics: bG,
        currentWorldSchematicId: ZG,
        onClose: SG
      } = GG;
      const {
        t: yG
      } = (0, LG.w)(), [kG, pG] = (0, wG.useState)(null);
      return (0, YG.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === kG && (0, YG.jsxs)(YG.Fragment, {
          children: [(0, YG.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: yG("worldBuilder:schematicList")
          }), (0, YG.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: yG("worldBuilder:clickSchematicForOptions")
          }), (0, YG.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, YG.jsx)(VG, {
              loading: !1,
              schematics: bG,
              onSchematicPicked: GG => {
                pG(GG)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== kG && (0, YG.jsx)(UG.i, {
          schematic: kG,
          inSourceWorld: kG.schematicId === ZG,
          onSchematicUpdate: GG => {
            pG(GG)
          },
          onClose: () => {
            pG(null), SG()
          }
        })]
      })
    }

    function fG(GG) {
      let {
        ownedSchematics: bG,
        currentWorldSchematicId: ZG,
        onClose: wG
      } = GG;
      SG.NotificationProvider.showCustomPopup({
        body: GG => (0, YG.jsx)(pG, {
          ownedSchematics: bG,
          currentWorldSchematicId: ZG,
          onClose: GG
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: wG,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  36680: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => YG,
      f: () => VG
    });
    ZG(51);
    var wG = ZG(1006),
      SG = ZG.n(wG),
      LG = ZG(4655),
      yG = ZG(333),
      kG = ZG(1151),
      UG = ZG(1067);

    function YG(GG) {
      let {
        value: bG,
        onChange: ZG,
        showAll: wG,
        disabled: YG = !1
      } = GG;
      const {
        t: VG
      } = (0, kG.w)();
      return (0, UG.jsxs)("div", {
        className: SG()("BloxdForm GamemodeForm", {
          BasicOptions: !wG
        }),
        children: [(0, UG.jsx)("div", {
          className: "SectionTitle",
          children: VG("classic:defaultGamemode")
        }), (0, UG.jsx)("div", {
          className: "SectionBody",
          children: LG.F.map((GG => wG || (0, LG.w)(GG) ? (0, UG.jsx)("button", {
            type: "button",
            className: SG()("WorldGamemode", {
              Selected: bG === GG
            }),
            disabled: YG,
            onClick: () => {
              ZG(GG)
            },
            style: {
              "--background-image": `url(${yG.C[GG]})`
            },
            children: yG.y[GG]
          }, GG) : null))
        })]
      })
    }

    function VG(GG) {
      let {
        mapTypes: bG,
        value: ZG,
        onChange: wG,
        showAll: YG,
        disabled: VG = !1,
        children: pG
      } = GG;
      const {
        t: fG
      } = (0, kG.w)();
      return (0, UG.jsxs)("div", {
        className: SG()("BloxdForm MapTypeForm", {
          BasicOptions: !YG
        }),
        children: [(0, UG.jsx)("div", {
          className: "SectionTitle",
          children: fG("customLobby:mapType")
        }), (0, UG.jsx)("div", {
          className: "SectionBody",
          children: bG.map((GG => YG || (0, LG.A)(GG) ? (0, UG.jsx)("button", {
            type: "button",
            className: SG()("MapType", {
              Selected: ZG === GG
            }),
            disabled: VG,
            onClick: () => {
              wG(GG)
            },
            style: {
              "--background-image": `url(${yG.r[GG]})`
            },
            children: yG.n[GG]
          }, GG) : null))
        }), pG]
      })
    }
  },
  36670: () => {}
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);