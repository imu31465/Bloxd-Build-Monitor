export const id = 194;
export const ids = [194];
export const modules = {
  35367: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      CreateCustomLobby: () => FB
    });
    dB(35373);
    var VB = dB(4027),
      yB = dB(62),
      pB = dB(1555),
      lB = dB(933),
      JB = dB.n(lB),
      YB = dB(2602),
      gB = dB(1020),
      oB = dB(1089),
      kB = dB(3993),
      LB = dB(1324),
      OB = dB(35381),
      DB = dB(1078),
      uB = dB(1214),
      HB = dB(1407),
      EB = dB(21),
      vB = dB(1330),
      mB = dB(572),
      iB = dB(4339),
      NB = dB(663),
      tB = dB(1117),
      fB = dB(1105),
      sB = dB(4354),
      MB = dB(946),
      zB = dB(35386),
      wB = dB(35394),
      UB = dB(980);

    function FB(BB) {
      var TB, dB, lB, FB;
      let {
        gameNameWithVariation: KB,
        close: rB,
        initialDefaultGamemode: IB
      } = BB;
      const {
        t: cB
      } = (0, DB.z)(), SB = (0, HB.useNavigatePreserveSearch)(), [PB, QB] = (0, yB.useState)("Enter"), [RB, aB] = (0, yB.useState)(""), ZB = yB.useRef(null), XB = null === (TB = NB.e[KB]) || void 0 === TB ? void 0 : TB.showWorldsInsteadOfCustomLobbies, WB = XB ? 1 : null === (dB = NB.e[KB]) || void 0 === dB ? void 0 : dB.customLobbyCustomSchematicLimit, [hB, CB] = (0, yB.useState)(!XB);
      IB || (IB = "classic_creative" === KB || "classic_creativeFlat" === KB ? "creative" : "classic" === KB ? "peaceful" : "survival");
      const GB = {
        baseOptions: {
          gameNameWithVariation: XB ? "classic" : KB,
          name: "",
          visibility: "unlisted"
        },
        listedOptions: {
          description: "",
          color: "",
          emojis: ""
        },
        mapOptions: {
          mapType: "classic_creativeFlat" === KB ? "flat" : "default",
          schematicIdList: []
        },
        worldOptions: null
      };
      XB && (GB.worldOptions = {
        defaultGamemode: IB,
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
      const [qB, xB] = (0, yB.useState)(GB), [jB, AB] = (0, yB.useState)(null);

      function bB(BB, TB) {
        xB({
          ...qB,
          baseOptions: {
            ...qB.baseOptions,
            [BB]: TB
          }
        })
      }

      function nB(BB, TB) {
        xB({
          ...qB,
          listedOptions: {
            ...qB.listedOptions,
            [BB]: TB
          }
        })
      }

      function eB(BB, TB) {
        xB({
          ...qB,
          worldOptions: {
            ...qB.worldOptions,
            [BB]: TB
          }
        })
      }

      function BT(BB) {
        xB({
          ...qB,
          mapOptions: {
            ...qB.mapOptions,
            ...BB
          }
        })
      }(0, yB.useEffect)((() => {
        kB.e.getNewStarterName().then((BB => {
          xB((TB => "" !== TB.baseOptions.name ? TB : {
            ...TB,
            baseOptions: {
              ...TB.baseOptions,
              name: BB
            }
          }))
        })).catch((BB => {
          console.error("Error getting new starter name:", BB)
        }))
      }), []), (0, yB.useEffect)((() => {
        "customSchematic" === qB.mapOptions.mapType && null === jB && (0, gB.postJsonWithMetricsCookiesAndJsonResponse)(`${oB.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
          retries: 0,
          minTimeout: 3e3
        }).then((BB => {
          AB(BB)
        }))
      }), [qB.mapOptions.mapType, jB]);
      const TT = {
          tpRequests: {
            isEnabled: () => !qB.worldOptions.disableTpRequests,
            hN: BB => {
              eB("disableTpRequests", !BB)
            }
          },
          spawnProtection: {
            isEnabled: () => qB.worldOptions.spawnProtection,
            hN: BB => {
              eB("spawnProtection", BB)
            }
          },
          spawnReset: {
            isEnabled: () => qB.worldOptions.enableSpawnReset,
            hN: BB => {
              eB("enableSpawnReset", BB)
            }
          },
          smpMarketplace: {
            isEnabled: () => qB.worldOptions.enableSmpMarketplace,
            hN: BB => {
              eB("enableSmpMarketplace", BB)
            }
          },
          survivalGuns: {
            isEnabled: () => qB.worldOptions.enableSurvivalGuns,
            hN: BB => {
              eB("enableSurvivalGuns", BB)
            }
          },
          fallDamage: {
            isEnabled: () => !qB.worldOptions.disableFallDamage,
            hN: BB => {
              eB("disableFallDamage", !BB)
            }
          },
          dayNight: {
            isEnabled: () => qB.worldOptions.enableDayNight,
            hN: BB => {
              eB("enableDayNight", BB)
            }
          }
        },
        dT = "Enter" !== PB,
        VT = (0, UB.jsx)(iB.g, {
          className: "NameInput",
          label: "general:name",
          disabled: "Enter" !== PB,
          children: (0, UB.jsx)(pB.e, {
            domRef: ZB,
            onValueChange: (BB, TB) => {
              const dB = (0, fB.xb)(BB);
              bB("name", dB), ZB.current.value = dB
            },
            maxLength: fB.R,
            defaultValue: qB.baseOptions.name
          })
        });
      return (0, UB.jsxs)("div", {
        className: JB()("CreateCustomLobby", {
          CreateCustomLobbySuccess: "Success" === PB,
          AdvancedMode: hB
        }),
        children: ["Success" === PB && (0, UB.jsxs)("div", {
          className: "CreateCustomLobbySuccessOverlay",
          children: [(0, UB.jsxs)("div", {
            className: "CreateCustomLobbySuccessTitle FullyFancyText AnimFadeInScaleUp",
            children: [(0, UB.jsx)(MB.e, {
              name: "check"
            }), (0, UB.jsx)(vB.c, {})]
          }), (0, UB.jsx)("div", {
            className: "CreateCustomLobbySuccessButtons AnimFadeInScaleUp",
            children: (0, UB.jsx)(LB.k, {
              padDefaultFocus: !0,
              onClick: () => {
                (0, EB.i)("worldCreation"), SB((0, uB.b)(KB, qB.baseOptions.name))
              },
              children: cB("homePage:joinLobbyName", {
                lobbyName: qB.baseOptions.name
              })
            })
          })]
        }), (0, UB.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, UB.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: cB(XB ? "homePage:createWorld" : "homePage:createCustomLobby")
          })
        }), (0, UB.jsx)(wB.e, {
          locked: dT,
          children: (0, UB.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [!hB && VT, hB && (0, UB.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, UB.jsx)("div", {
                className: "SectionTitle",
                children: cB("customLobby:generalOptions")
              }), (0, UB.jsxs)("div", {
                className: "SectionBody",
                children: [VT, (0, UB.jsx)(iB.g, {
                  label: "customLobby:visibility",
                  circleInfoText: cB("customLobby:visibilityDescription"),
                  disabled: "Enter" !== PB,
                  children: (0, UB.jsx)(YB.e, {
                    options: VB.m.map((BB => ({
                      value: BB,
                      label: VB.c[BB]
                    }))),
                    value: qB.baseOptions.visibility,
                    onChange: BB => {
                      bB("visibility", BB.value)
                    }
                  })
                })]
              })]
            }), XB && (0, UB.jsx)(zB.c, {
              value: qB.worldOptions.defaultGamemode,
              onChange: BB => {
                eB("defaultGamemode", BB)
              },
              showAll: hB,
              disabled: dT
            }), (XB || !(0, mB.M)(WB) && WB > 0) && (0, UB.jsx)(zB.g, {
              mapTypes: XB ? VB.D : VB.k,
              value: qB.mapOptions.mapType,
              onChange: BB => {
                const TB = {
                  mapType: BB
                };
                "customSchematic" !== BB && (TB.schematicIdList = []), BT(TB)
              },
              showAll: hB,
              disabled: dT,
              children: "customSchematic" === qB.mapOptions.mapType && (0, UB.jsxs)(UB.Fragment, {
                children: [(0, UB.jsxs)("div", {
                  className: "SchematicListTitle AnimFadeIn",
                  children: [XB && cB("customLobby:selectWorldSchematic"), !XB && cB("customLobby:selectCustomLobbySchematics", {
                    schematicLimit: WB
                  })]
                }), (0, UB.jsx)("div", {
                  className: JB()("SchematicListContainer AnimFadeIn", {
                    SchematicListContainerDisabled: "Enter" !== PB
                  }),
                  children: (0, UB.jsx)(OB.b, {
                    loading: null === jB,
                    schematics: null !== jB && void 0 !== jB ? jB : [],
                    onSchematicPicked: function(BB) {
                      const TB = qB.mapOptions.schematicIdList;
                      if (TB.includes(BB.schematicId)) BT({
                        schematicIdList: TB.filter((TB => TB !== BB.schematicId))
                      });
                      else {
                        if (WB && qB.mapOptions.schematicIdList.length >= WB) return;
                        BT({
                          schematicIdList: [...qB.mapOptions.schematicIdList, BB.schematicId]
                        })
                      }
                    },
                    selectedSchematicIdList: qB.mapOptions.schematicIdList,
                    disableAutoExport: !0
                  })
                })]
              })
            }), hB && (0, UB.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, UB.jsx)("div", {
                className: "SectionTitle",
                children: cB("customLobby:listedOptions")
              }), (0, UB.jsxs)("div", {
                className: "SectionBody",
                children: [(0, UB.jsx)(iB.g, {
                  label: "general:description",
                  className: "CustomLobbyDescription",
                  disabled: "Enter" !== PB,
                  children: (0, UB.jsx)(pB.e, {
                    onValueChange: (BB, TB) => {
                      nB("description", BB)
                    },
                    maxLength: 100,
                    defaultValue: qB.listedOptions.description
                  })
                }), (0, UB.jsx)(iB.g, {
                  label: "general:color",
                  circleInfoText: "customLobby:lobbyColorDescription",
                  disabled: "Enter" !== PB,
                  children: (0, UB.jsx)("div", {
                    className: "OtherInput",
                    children: (0, UB.jsx)("input", {
                      type: "color",
                      value: qB.listedOptions.color,
                      onChange: BB => {
                        nB("color", BB.target.value)
                      }
                    })
                  })
                }), (0, UB.jsx)(iB.g, {
                  label: "general:emojis",
                  circleInfoText: "customLobby:lobbyEmojisDescription",
                  disabled: "Enter" !== PB,
                  children: (0, UB.jsx)(pB.e, {
                    onValueChange: (BB, TB) => {
                      nB("emojis", BB)
                    },
                    maxLength: 6,
                    defaultValue: qB.listedOptions.emojis
                  })
                })]
              })]
            }), hB && XB && (0, UB.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, UB.jsx)("div", {
                className: "SectionTitle",
                children: cB("customLobby:advancedOptions")
              }), (0, UB.jsxs)("div", {
                className: "SectionBody",
                children: [(0, UB.jsx)(iB.g, {
                  label: "classic:worldGenSeed",
                  disabled: "Enter" !== PB,
                  children: (0, UB.jsx)(pB.e, {
                    onValueChange: (BB, TB) => {
                      eB("worldGenSeed", BB)
                    },
                    maxLength: fB.R
                  })
                }), (0, UB.jsx)(iB.g, {
                  label: "classic:disableProtectors",
                  disabled: "Enter" !== PB,
                  children: (0, UB.jsx)(iB.d, {
                    checked: qB.worldOptions.disableProtectors,
                    setChecked: BB => {
                      eB("disableProtectors", BB)
                    }
                  })
                }), (0, UB.jsx)(iB.g, {
                  label: "classic:disableTribeCreation",
                  disabled: "Enter" !== PB,
                  children: (0, UB.jsx)(iB.d, {
                    checked: qB.worldOptions.disableTribeCreation,
                    setChecked: BB => {
                      eB("disableTribeCreation", BB)
                    }
                  })
                }), (0, UB.jsx)(iB.g, {
                  label: "classic:voidDeathHeight",
                  circleInfoText: "classic:voidDeathHeightDescription",
                  disabled: "Enter" !== PB,
                  children: (0, UB.jsx)("input", {
                    type: "number",
                    max: tB.z,
                    value: null !== (lB = qB.worldOptions.voidDeathHeight) && void 0 !== lB ? lB : "",
                    onChange: BB => {
                      const TB = parseInt(BB.target.value);
                      eB("voidDeathHeight", isNaN(TB) ? null : TB)
                    }
                  })
                }), (0, UB.jsx)(iB.g, {
                  label: "classic:disableLobbySpawn",
                  disabled: "Enter" !== PB,
                  children: (0, UB.jsx)(iB.d, {
                    checked: qB.worldOptions.disableLobbySpawn,
                    setChecked: BB => {
                      eB("disableLobbySpawn", BB)
                    }
                  })
                }), (0, UB.jsx)(iB.g, {
                  label: "classic:worldBorder",
                  circleInfoText: "classic:worldBorderDescription",
                  disabled: "Enter" !== PB,
                  children: (0, UB.jsx)("input", {
                    type: "number",
                    min: tB.F,
                    max: tB.A,
                    value: null !== (FB = qB.worldOptions.worldBorder) && void 0 !== FB ? FB : "",
                    onChange: BB => {
                      const TB = parseInt(BB.target.value);
                      eB("worldBorder", isNaN(TB) ? null : TB)
                    }
                  })
                }), (0, UB.jsx)(iB.g, {
                  label: "classic:disableMobs",
                  disabled: "Enter" !== PB,
                  children: (0, UB.jsx)(iB.d, {
                    checked: qB.worldOptions.disableMobs,
                    setChecked: BB => {
                      eB("disableMobs", BB)
                    }
                  })
                })]
              })]
            }), XB && (0, UB.jsx)(sB.b, {
              callbacks: TT,
              disabled: "Enter" !== PB,
              advancedMode: hB
            })]
          })
        }), (0, UB.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, UB.jsx)(LB.k, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: "Enter" !== PB,
            onClick: () => {
              !async function() {
                if ("Enter" === PB) {
                  QB("Loading"), aB("");
                  try {
                    await kB.e.createCustomLobby(qB), QB("Success")
                  } catch (BB) {
                    aB(BB.message), console.error(BB.message), QB("Enter")
                  }
                }
              }()
            },
            children: cB("general:create")
          }), XB && (0, UB.jsx)("div", {
            className: "CreateCustomLobbyAdvancedToggle",
            "data-pad-ignore": dT || void 0,
            children: (0, UB.jsx)(iB.g, {
              label: "customLobby:showAdvancedOptions",
              disabled: dT,
              onLabelClick: () => {
                CB(!hB)
              },
              children: (0, UB.jsx)(iB.d, {
                checked: hB,
                setChecked: CB
              })
            })
          }), RB && (0, UB.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: RB
          })]
        })]
      })
    }
  },
  35394: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => YB
    });
    var VB = dB(933),
      yB = dB.n(VB),
      pB = dB(62),
      lB = dB(3988),
      JB = dB(980);

    function YB(BB) {
      let {
        locked: TB,
        children: dB
      } = BB;
      const VB = (0, pB.useRef)(null),
        YB = (0, lB.d)(VB, "y");
      return (0, JB.jsx)("div", {
        ref: VB,
        className: yB()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: YB.before,
          CreateCustomLobbyBodyMoreBelow: YB.after
        }),
        "data-pad-ignore": TB || void 0,
        children: dB
      })
    }
  },
  35381: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => oB,
      e: () => LB
    });
    var VB = dB(62),
      yB = dB(1235),
      pB = dB(1078),
      lB = dB(1225),
      JB = dB(2971),
      YB = dB(4334),
      gB = dB(980);

    function oB(BB) {
      let {
        loading: TB,
        schematics: dB,
        onSchematicPicked: VB,
        selectedSchematicIdList: yB = [],
        disableAutoExport: YB
      } = BB;
      const {
        t: oB
      } = (0, pB.z)();
      return (0, gB.jsxs)("div", {
        className: "SchematicList",
        children: [TB && (0, gB.jsx)(lB.b, {}), !TB && 0 === dB.length && (0, gB.jsx)("div", {
          className: "NoSchematicsText",
          children: oB("worldBuilder:noSavedSchematic")
        }), !TB && dB.map((BB => (0, gB.jsx)(JB.f, {
          source: {
            type: "schematic",
            schematic: BB
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            VB(BB)
          },
          isSelected: yB.includes(BB.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: BB.isAutoExported && YB,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, BB.schematicId)))]
      })
    }

    function kB(BB) {
      let {
        ownedSchematics: TB,
        currentWorldSchematicId: dB,
        onClose: yB
      } = BB;
      const {
        t: lB
      } = (0, pB.z)(), [JB, kB] = (0, VB.useState)(null);
      return (0, gB.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === JB && (0, gB.jsxs)(gB.Fragment, {
          children: [(0, gB.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: lB("worldBuilder:schematicList")
          }), (0, gB.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: lB("worldBuilder:clickSchematicForOptions")
          }), (0, gB.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, gB.jsx)(oB, {
              loading: !1,
              schematics: TB,
              onSchematicPicked: BB => {
                kB(BB)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== JB && (0, gB.jsx)(YB.h, {
          schematic: JB,
          inSourceWorld: JB.schematicId === dB,
          onSchematicUpdate: BB => {
            kB(BB)
          },
          onClose: () => {
            kB(null), yB()
          }
        })]
      })
    }

    function LB(BB) {
      let {
        ownedSchematics: TB,
        currentWorldSchematicId: dB,
        onClose: VB
      } = BB;
      yB.NotificationProvider.showCustomPopup({
        body: BB => (0, gB.jsx)(kB, {
          ownedSchematics: TB,
          currentWorldSchematicId: dB,
          onClose: BB
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: VB,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  35386: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => gB,
      g: () => oB
    });
    dB(62);
    var VB = dB(933),
      yB = dB.n(VB),
      pB = dB(4027),
      lB = dB(270),
      JB = dB(1078),
      YB = dB(980);

    function gB(BB) {
      let {
        value: TB,
        onChange: dB,
        showAll: VB,
        disabled: gB = !1
      } = BB;
      const {
        t: oB
      } = (0, JB.z)();
      return (0, YB.jsxs)("div", {
        className: yB()("BloxdForm GamemodeForm", {
          BasicOptions: !VB
        }),
        children: [(0, YB.jsx)("div", {
          className: "SectionTitle",
          children: oB("classic:defaultGamemode")
        }), (0, YB.jsx)("div", {
          className: "SectionBody",
          children: pB.z.map((BB => VB || (0, pB.u)(BB) ? (0, YB.jsx)("button", {
            type: "button",
            className: yB()("WorldGamemode", {
              Selected: TB === BB
            }),
            disabled: gB,
            onClick: () => {
              dB(BB)
            },
            style: {
              "--background-image": `url(${lB.o[BB]})`
            },
            children: lB.n[BB]
          }, BB) : null))
        })]
      })
    }

    function oB(BB) {
      let {
        mapTypes: TB,
        value: dB,
        onChange: VB,
        showAll: gB,
        disabled: oB = !1,
        children: kB
      } = BB;
      const {
        t: LB
      } = (0, JB.z)();
      return (0, YB.jsxs)("div", {
        className: yB()("BloxdForm MapTypeForm", {
          BasicOptions: !gB
        }),
        children: [(0, YB.jsx)("div", {
          className: "SectionTitle",
          children: LB("customLobby:mapType")
        }), (0, YB.jsx)("div", {
          className: "SectionBody",
          children: TB.map((BB => gB || (0, pB.x)(BB) ? (0, YB.jsx)("button", {
            type: "button",
            className: yB()("MapType", {
              Selected: dB === BB
            }),
            disabled: oB,
            onClick: () => {
              VB(BB)
            },
            style: {
              "--background-image": `url(${lB.l[BB]})`
            },
            children: lB.k[BB]
          }, BB) : null))
        }), kB]
      })
    }
  },
  35373: () => {}
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);