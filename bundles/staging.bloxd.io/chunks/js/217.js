export const id = 217;
export const ids = [217];
export const modules = {
  36356: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      CreateCustomLobby: () => aB
    });
    ZB(36363);
    var TB = ZB(4802),
      JB = ZB(63),
      oB = ZB(1746),
      GB = ZB(1091),
      vB = ZB.n(GB),
      kB = ZB(3294),
      cB = ZB(1186),
      nB = ZB(1258),
      hB = ZB(4768),
      zB = ZB(1516),
      FB = ZB(36372),
      NB = ZB(1248),
      gB = ZB(1385),
      qB = ZB(1579),
      yB = ZB(20),
      UB = ZB(1519),
      WB = ZB(665),
      dB = ZB(5090),
      CB = ZB(810),
      QB = ZB(1300),
      sB = ZB(1281),
      wB = ZB(5101),
      OB = ZB(1102),
      YB = ZB(36378),
      iB = ZB(36382),
      pB = ZB(1153);

    function aB(BB) {
      var IB, ZB, GB, aB;
      let {
        gameNameWithVariation: HB,
        close: MB,
        initialDefaultGamemode: jB
      } = BB;
      const {
        t: PB
      } = (0, NB.G)(), RB = (0, qB.useNavigatePreserveSearch)(), [rB, mB] = (0, JB.useState)("Enter"), [XB, LB] = (0, JB.useState)(""), eB = JB.useRef(null), uB = null === (IB = CB.c[HB]) || void 0 === IB ? void 0 : IB.showWorldsInsteadOfCustomLobbies, fB = uB ? 1 : null === (ZB = CB.c[HB]) || void 0 === ZB ? void 0 : ZB.customLobbyCustomSchematicLimit, [lB, AB] = (0, JB.useState)(!uB);
      jB || (jB = "classic_creative" === HB || "classic_creativeFlat" === HB ? "creative" : "classic" === HB ? "peaceful" : "survival");
      const tB = {
        baseOptions: {
          gameNameWithVariation: uB ? "classic" : HB,
          name: "",
          visibility: "unlisted"
        },
        listedOptions: {
          description: "",
          color: "",
          emojis: ""
        },
        mapOptions: {
          mapType: "classic_creativeFlat" === HB ? "flat" : "default",
          schematicIdList: []
        },
        worldOptions: null
      };
      uB && (tB.worldOptions = {
        defaultGamemode: jB,
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
      const [bB, xB] = (0, JB.useState)(tB), [EB, DB] = (0, JB.useState)(null);

      function KB(BB, IB) {
        xB({
          ...bB,
          baseOptions: {
            ...bB.baseOptions,
            [BB]: IB
          }
        })
      }

      function VB(BB, IB) {
        xB({
          ...bB,
          listedOptions: {
            ...bB.listedOptions,
            [BB]: IB
          }
        })
      }

      function SB(BB, IB) {
        xB({
          ...bB,
          worldOptions: {
            ...bB.worldOptions,
            [BB]: IB
          }
        })
      }

      function BI(BB) {
        xB({
          ...bB,
          mapOptions: {
            ...bB.mapOptions,
            ...BB
          }
        })
      }(0, JB.useEffect)((() => {
        hB.d.getNewStarterName().then((BB => {
          xB((IB => "" !== IB.baseOptions.name ? IB : {
            ...IB,
            baseOptions: {
              ...IB.baseOptions,
              name: BB
            }
          }))
        })).catch((BB => {
          console.error("Error getting new starter name:", BB)
        }))
      }), []), (0, JB.useEffect)((() => {
        "customSchematic" === bB.mapOptions.mapType && null === EB && (0, cB.postJsonWithMetricsCookiesAndJsonResponse)(`${nB.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
          retries: 0,
          minTimeout: 3e3
        }).then((BB => {
          DB(BB)
        }))
      }), [bB.mapOptions.mapType, EB]);
      const II = {
          tpRequests: {
            isEnabled: () => !bB.worldOptions.disableTpRequests,
            qY: BB => {
              SB("disableTpRequests", !BB)
            }
          },
          spawnProtection: {
            isEnabled: () => bB.worldOptions.spawnProtection,
            qY: BB => {
              SB("spawnProtection", BB)
            }
          },
          spawnReset: {
            isEnabled: () => bB.worldOptions.enableSpawnReset,
            qY: BB => {
              SB("enableSpawnReset", BB)
            }
          },
          smpMarketplace: {
            isEnabled: () => bB.worldOptions.enableSmpMarketplace,
            qY: BB => {
              SB("enableSmpMarketplace", BB)
            }
          },
          survivalGuns: {
            isEnabled: () => bB.worldOptions.enableSurvivalGuns,
            qY: BB => {
              SB("enableSurvivalGuns", BB)
            }
          },
          fallDamage: {
            isEnabled: () => !bB.worldOptions.disableFallDamage,
            qY: BB => {
              SB("disableFallDamage", !BB)
            }
          },
          dayNight: {
            isEnabled: () => bB.worldOptions.enableDayNight,
            qY: BB => {
              SB("enableDayNight", BB)
            }
          }
        },
        ZI = "Enter" !== rB,
        TI = (0, pB.jsx)(dB.c, {
          className: "NameInput",
          label: "general:name",
          disabled: "Enter" !== rB,
          children: (0, pB.jsx)(oB.c, {
            domRef: eB,
            onValueChange: (BB, IB) => {
              const ZB = (0, sB.ib)(BB);
              KB("name", ZB), eB.current.value = ZB
            },
            maxLength: sB.H,
            defaultValue: bB.baseOptions.name
          })
        });
      return (0, pB.jsxs)("div", {
        className: vB()("CreateCustomLobby", {
          CreateCustomLobbySuccess: "Success" === rB,
          AdvancedMode: lB
        }),
        children: ["Success" === rB && (0, pB.jsxs)("div", {
          className: "CreateCustomLobbySuccessOverlay",
          children: [(0, pB.jsxs)("div", {
            className: "CreateCustomLobbySuccessTitle FullyFancyText AnimFadeInScaleUp",
            children: [(0, pB.jsx)(OB.d, {
              name: "check"
            }), (0, pB.jsx)(UB.d, {})]
          }), (0, pB.jsx)("div", {
            className: "CreateCustomLobbySuccessButtons AnimFadeInScaleUp",
            children: (0, pB.jsx)(zB.p, {
              padDefaultFocus: !0,
              onClick: () => {
                (0, yB.m)("worldCreation"), RB((0, gB.b)(HB, bB.baseOptions.name))
              },
              children: PB("homePage:joinLobbyName", {
                lobbyName: bB.baseOptions.name
              })
            })
          })]
        }), (0, pB.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, pB.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: PB(uB ? "homePage:createWorld" : "homePage:createCustomLobby")
          })
        }), (0, pB.jsx)(iB.b, {
          locked: ZI,
          children: (0, pB.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [!lB && TI, lB && (0, pB.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, pB.jsx)("div", {
                className: "SectionTitle",
                children: PB("customLobby:generalOptions")
              }), (0, pB.jsxs)("div", {
                className: "SectionBody",
                children: [TI, (0, pB.jsx)(dB.c, {
                  label: "customLobby:visibility",
                  circleInfoText: PB("customLobby:visibilityDescription"),
                  disabled: "Enter" !== rB,
                  children: (0, pB.jsx)(kB.c, {
                    options: TB.m.map((BB => ({
                      value: BB,
                      label: TB.d[BB]
                    }))),
                    value: bB.baseOptions.visibility,
                    onChange: BB => {
                      KB("visibility", BB.value)
                    }
                  })
                })]
              })]
            }), uB && (0, pB.jsx)(YB.d, {
              value: bB.worldOptions.defaultGamemode,
              onChange: BB => {
                SB("defaultGamemode", BB)
              },
              showAll: lB,
              disabled: ZI
            }), (uB || !(0, WB.L)(fB) && fB > 0) && (0, pB.jsx)(YB.e, {
              mapTypes: uB ? TB.H : TB.l,
              value: bB.mapOptions.mapType,
              onChange: BB => {
                const IB = {
                  mapType: BB
                };
                "customSchematic" !== BB && (IB.schematicIdList = []), BI(IB)
              },
              showAll: lB,
              disabled: ZI,
              children: "customSchematic" === bB.mapOptions.mapType && (0, pB.jsxs)(pB.Fragment, {
                children: [(0, pB.jsxs)("div", {
                  className: "SchematicListTitle AnimFadeIn",
                  children: [uB && PB("customLobby:selectWorldSchematic"), !uB && PB("customLobby:selectCustomLobbySchematics", {
                    schematicLimit: fB
                  })]
                }), (0, pB.jsx)("div", {
                  className: vB()("SchematicListContainer AnimFadeIn", {
                    SchematicListContainerDisabled: "Enter" !== rB
                  }),
                  children: (0, pB.jsx)(FB.c, {
                    loading: null === EB,
                    schematics: null !== EB && void 0 !== EB ? EB : [],
                    onSchematicPicked: function(BB) {
                      const IB = bB.mapOptions.schematicIdList;
                      if (IB.includes(BB.schematicId)) BI({
                        schematicIdList: IB.filter((IB => IB !== BB.schematicId))
                      });
                      else {
                        if (fB && bB.mapOptions.schematicIdList.length >= fB) return;
                        BI({
                          schematicIdList: [...bB.mapOptions.schematicIdList, BB.schematicId]
                        })
                      }
                    },
                    selectedSchematicIdList: bB.mapOptions.schematicIdList,
                    disableAutoExport: !0
                  })
                })]
              })
            }), lB && (0, pB.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, pB.jsx)("div", {
                className: "SectionTitle",
                children: PB("customLobby:listedOptions")
              }), (0, pB.jsxs)("div", {
                className: "SectionBody",
                children: [(0, pB.jsx)(dB.c, {
                  label: "general:description",
                  className: "CustomLobbyDescription",
                  disabled: "Enter" !== rB,
                  children: (0, pB.jsx)(oB.c, {
                    onValueChange: (BB, IB) => {
                      VB("description", BB)
                    },
                    maxLength: 100,
                    defaultValue: bB.listedOptions.description
                  })
                }), (0, pB.jsx)(dB.c, {
                  label: "general:color",
                  circleInfoText: "customLobby:lobbyColorDescription",
                  disabled: "Enter" !== rB,
                  children: (0, pB.jsx)("div", {
                    className: "OtherInput",
                    children: (0, pB.jsx)("input", {
                      type: "color",
                      value: bB.listedOptions.color,
                      onChange: BB => {
                        VB("color", BB.target.value)
                      }
                    })
                  })
                }), (0, pB.jsx)(dB.c, {
                  label: "general:emojis",
                  circleInfoText: "customLobby:lobbyEmojisDescription",
                  disabled: "Enter" !== rB,
                  children: (0, pB.jsx)(oB.c, {
                    onValueChange: (BB, IB) => {
                      VB("emojis", BB)
                    },
                    maxLength: 6,
                    defaultValue: bB.listedOptions.emojis
                  })
                })]
              })]
            }), lB && uB && (0, pB.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, pB.jsx)("div", {
                className: "SectionTitle",
                children: PB("customLobby:advancedOptions")
              }), (0, pB.jsxs)("div", {
                className: "SectionBody",
                children: [(0, pB.jsx)(dB.c, {
                  label: "classic:worldGenSeed",
                  disabled: "Enter" !== rB,
                  children: (0, pB.jsx)(oB.c, {
                    onValueChange: (BB, IB) => {
                      SB("worldGenSeed", BB)
                    },
                    maxLength: sB.H
                  })
                }), (0, pB.jsx)(dB.c, {
                  label: "classic:disableProtectors",
                  disabled: "Enter" !== rB,
                  children: (0, pB.jsx)(dB.b, {
                    checked: bB.worldOptions.disableProtectors,
                    setChecked: BB => {
                      SB("disableProtectors", BB)
                    }
                  })
                }), (0, pB.jsx)(dB.c, {
                  label: "classic:disableTribeCreation",
                  disabled: "Enter" !== rB,
                  children: (0, pB.jsx)(dB.b, {
                    checked: bB.worldOptions.disableTribeCreation,
                    setChecked: BB => {
                      SB("disableTribeCreation", BB)
                    }
                  })
                }), (0, pB.jsx)(dB.c, {
                  label: "classic:voidDeathHeight",
                  circleInfoText: "classic:voidDeathHeightDescription",
                  disabled: "Enter" !== rB,
                  children: (0, pB.jsx)("input", {
                    type: "number",
                    max: QB.J,
                    value: null !== (GB = bB.worldOptions.voidDeathHeight) && void 0 !== GB ? GB : "",
                    onChange: BB => {
                      const IB = parseInt(BB.target.value);
                      SB("voidDeathHeight", isNaN(IB) ? null : IB)
                    }
                  })
                }), (0, pB.jsx)(dB.c, {
                  label: "classic:disableLobbySpawn",
                  disabled: "Enter" !== rB,
                  children: (0, pB.jsx)(dB.b, {
                    checked: bB.worldOptions.disableLobbySpawn,
                    setChecked: BB => {
                      SB("disableLobbySpawn", BB)
                    }
                  })
                }), (0, pB.jsx)(dB.c, {
                  label: "classic:worldBorder",
                  circleInfoText: "classic:worldBorderDescription",
                  disabled: "Enter" !== rB,
                  children: (0, pB.jsx)("input", {
                    type: "number",
                    min: QB.T,
                    max: QB.N,
                    value: null !== (aB = bB.worldOptions.worldBorder) && void 0 !== aB ? aB : "",
                    onChange: BB => {
                      const IB = parseInt(BB.target.value);
                      SB("worldBorder", isNaN(IB) ? null : IB)
                    }
                  })
                }), (0, pB.jsx)(dB.c, {
                  label: "classic:disableMobs",
                  disabled: "Enter" !== rB,
                  children: (0, pB.jsx)(dB.b, {
                    checked: bB.worldOptions.disableMobs,
                    setChecked: BB => {
                      SB("disableMobs", BB)
                    }
                  })
                })]
              })]
            }), uB && (0, pB.jsx)(wB.e, {
              callbacks: II,
              disabled: "Enter" !== rB,
              advancedMode: lB
            })]
          })
        }), (0, pB.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, pB.jsx)(zB.p, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: "Enter" !== rB,
            onClick: () => {
              !async function() {
                if ("Enter" === rB) {
                  mB("Loading"), LB("");
                  try {
                    await hB.d.createCustomLobby(bB), mB("Success")
                  } catch (BB) {
                    LB(BB.message), console.error(BB.message), mB("Enter")
                  }
                }
              }()
            },
            children: PB("general:create")
          }), uB && (0, pB.jsx)("div", {
            className: "CreateCustomLobbyAdvancedToggle",
            "data-pad-ignore": ZI || void 0,
            children: (0, pB.jsx)(dB.c, {
              label: "customLobby:showAdvancedOptions",
              disabled: ZI,
              onLabelClick: () => {
                AB(!lB)
              },
              children: (0, pB.jsx)(dB.b, {
                checked: lB,
                setChecked: AB
              })
            })
          }), XB && (0, pB.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: XB
          })]
        })]
      })
    }
  },
  36382: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => kB
    });
    var TB = ZB(1091),
      JB = ZB.n(TB),
      oB = ZB(63),
      GB = ZB(4764),
      vB = ZB(1153);

    function kB(BB) {
      let {
        locked: IB,
        children: ZB
      } = BB;
      const TB = (0, oB.useRef)(null),
        kB = (0, GB.c)(TB, "y");
      return (0, vB.jsx)("div", {
        ref: TB,
        className: JB()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: kB.before,
          CreateCustomLobbyBodyMoreBelow: kB.after
        }),
        "data-pad-ignore": IB || void 0,
        children: ZB
      })
    }
  },
  36372: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => nB,
      d: () => zB
    });
    var TB = ZB(63),
      JB = ZB(1403),
      oB = ZB(1248),
      GB = ZB(1397),
      vB = ZB(3663),
      kB = ZB(5084),
      cB = ZB(1153);

    function nB(BB) {
      let {
        loading: IB,
        schematics: ZB,
        onSchematicPicked: TB,
        selectedSchematicIdList: JB = [],
        disableAutoExport: kB
      } = BB;
      const {
        t: nB
      } = (0, oB.G)();
      return (0, cB.jsxs)("div", {
        className: "SchematicList",
        children: [IB && (0, cB.jsx)(GB.d, {}), !IB && 0 === ZB.length && (0, cB.jsx)("div", {
          className: "NoSchematicsText",
          children: nB("worldBuilder:noSavedSchematic")
        }), !IB && ZB.map((BB => (0, cB.jsx)(vB.f, {
          source: {
            type: "schematic",
            schematic: BB
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            TB(BB)
          },
          isSelected: JB.includes(BB.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: BB.isAutoExported && kB,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, BB.schematicId)))]
      })
    }

    function hB(BB) {
      let {
        ownedSchematics: IB,
        currentWorldSchematicId: ZB,
        onClose: JB
      } = BB;
      const {
        t: GB
      } = (0, oB.G)(), [vB, hB] = (0, TB.useState)(null);
      return (0, cB.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === vB && (0, cB.jsxs)(cB.Fragment, {
          children: [(0, cB.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: GB("worldBuilder:schematicList")
          }), (0, cB.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: GB("worldBuilder:clickSchematicForOptions")
          }), (0, cB.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, cB.jsx)(nB, {
              loading: !1,
              schematics: IB,
              onSchematicPicked: BB => {
                hB(BB)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== vB && (0, cB.jsx)(kB.i, {
          schematic: vB,
          inSourceWorld: vB.schematicId === ZB,
          onSchematicUpdate: BB => {
            hB(BB)
          },
          onClose: () => {
            hB(null), JB()
          }
        })]
      })
    }

    function zB(BB) {
      let {
        ownedSchematics: IB,
        currentWorldSchematicId: ZB,
        onClose: TB
      } = BB;
      JB.NotificationProvider.showCustomPopup({
        body: BB => (0, cB.jsx)(hB, {
          ownedSchematics: IB,
          currentWorldSchematicId: ZB,
          onClose: BB
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: TB,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  36378: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => cB,
      e: () => nB
    });
    ZB(63);
    var TB = ZB(1091),
      JB = ZB.n(TB),
      oB = ZB(4802),
      GB = ZB(342),
      vB = ZB(1248),
      kB = ZB(1153);

    function cB(BB) {
      let {
        value: IB,
        onChange: ZB,
        showAll: TB,
        disabled: cB = !1
      } = BB;
      const {
        t: nB
      } = (0, vB.G)();
      return (0, kB.jsxs)("div", {
        className: JB()("BloxdForm GamemodeForm", {
          BasicOptions: !TB
        }),
        children: [(0, kB.jsx)("div", {
          className: "SectionTitle",
          children: nB("classic:defaultGamemode")
        }), (0, kB.jsx)("div", {
          className: "SectionBody",
          children: oB.E.map((BB => TB || (0, oB.t)(BB) ? (0, kB.jsx)("button", {
            type: "button",
            className: JB()("WorldGamemode", {
              Selected: IB === BB
            }),
            disabled: cB,
            onClick: () => {
              ZB(BB)
            },
            style: {
              "--background-image": `url(${GB.y[BB]})`
            },
            children: GB.u[BB]
          }, BB) : null))
        })]
      })
    }

    function nB(BB) {
      let {
        mapTypes: IB,
        value: ZB,
        onChange: TB,
        showAll: cB,
        disabled: nB = !1,
        children: hB
      } = BB;
      const {
        t: zB
      } = (0, vB.G)();
      return (0, kB.jsxs)("div", {
        className: JB()("BloxdForm MapTypeForm", {
          BasicOptions: !cB
        }),
        children: [(0, kB.jsx)("div", {
          className: "SectionTitle",
          children: zB("customLobby:mapType")
        }), (0, kB.jsx)("div", {
          className: "SectionBody",
          children: IB.map((BB => cB || (0, oB.w)(BB) ? (0, kB.jsx)("button", {
            type: "button",
            className: JB()("MapType", {
              Selected: ZB === BB
            }),
            disabled: nB,
            onClick: () => {
              TB(BB)
            },
            style: {
              "--background-image": `url(${GB.p[BB]})`
            },
            children: GB.o[BB]
          }, BB) : null))
        }), hB]
      })
    }
  },
  36363: () => {}
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);