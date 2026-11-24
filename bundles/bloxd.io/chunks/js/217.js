export const id = 217;
export const ids = [217];
export const modules = {
  36406: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      CreateCustomLobby: () => HB
    });
    zB(36409);
    var QB = zB(4729),
      nB = zB(62),
      dB = zB(1710),
      IB = zB(1091),
      NB = zB.n(IB),
      uB = zB(3252),
      UB = zB(1173),
      aB = zB(1244),
      pB = zB(4696),
      rB = zB(1478),
      sB = zB(36418),
      JB = zB(1240),
      mB = zB(1359),
      yB = zB(1543),
      kB = zB(28),
      GB = zB(1487),
      LB = zB(658),
      gB = zB(5029),
      tB = zB(814),
      SB = zB(1270),
      MB = zB(1263),
      EB = zB(5036),
      iB = zB(1108),
      qB = zB(36426),
      fB = zB(36430),
      oB = zB(1148);

    function HB(BB) {
      var jB, zB, IB, HB;
      let {
        gameNameWithVariation: DB,
        close: FB,
        initialDefaultGamemode: YB
      } = BB;
      const {
        t: VB
      } = (0, JB.D)(), hB = (0, yB.useNavigatePreserveSearch)(), [XB, ZB] = (0, nB.useState)("Enter"), [AB, TB] = (0, nB.useState)(""), PB = nB.useRef(null), WB = null === (jB = tB.c[DB]) || void 0 === jB ? void 0 : jB.showWorldsInsteadOfCustomLobbies, eB = WB ? 1 : null === (zB = tB.c[DB]) || void 0 === zB ? void 0 : zB.customLobbyCustomSchematicLimit, [lB, wB] = (0, nB.useState)(!WB);
      YB || (YB = "classic_creative" === DB || "classic_creativeFlat" === DB ? "creative" : "classic" === DB ? "peaceful" : "survival");
      const xB = {
        baseOptions: {
          gameNameWithVariation: WB ? "classic" : DB,
          name: "",
          visibility: "unlisted"
        },
        listedOptions: {
          description: "",
          color: "",
          emojis: ""
        },
        mapOptions: {
          mapType: "classic_creativeFlat" === DB ? "flat" : "default",
          schematicIdList: []
        },
        worldOptions: null
      };
      WB && (xB.worldOptions = {
        defaultGamemode: YB,
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
      const [KB, CB] = (0, nB.useState)(xB), [cB, bB] = (0, nB.useState)(null);

      function vB(BB, jB) {
        CB({
          ...KB,
          baseOptions: {
            ...KB.baseOptions,
            [BB]: jB
          }
        })
      }

      function RB(BB, jB) {
        CB({
          ...KB,
          listedOptions: {
            ...KB.listedOptions,
            [BB]: jB
          }
        })
      }

      function OB(BB, jB) {
        CB({
          ...KB,
          worldOptions: {
            ...KB.worldOptions,
            [BB]: jB
          }
        })
      }

      function Bj(BB) {
        CB({
          ...KB,
          mapOptions: {
            ...KB.mapOptions,
            ...BB
          }
        })
      }(0, nB.useEffect)((() => {
        pB.b.getNewStarterName().then((BB => {
          CB((jB => "" !== jB.baseOptions.name ? jB : {
            ...jB,
            baseOptions: {
              ...jB.baseOptions,
              name: BB
            }
          }))
        })).catch((BB => {
          console.error("Error getting new starter name:", BB)
        }))
      }), []), (0, nB.useEffect)((() => {
        "customSchematic" === KB.mapOptions.mapType && null === cB && (0, UB.postJsonWithMetricsCookiesAndJsonResponse)(`${aB.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
          retries: 0,
          minTimeout: 3e3
        }).then((BB => {
          bB(BB)
        }))
      }), [KB.mapOptions.mapType, cB]);
      const jj = {
          tpRequests: {
            isEnabled: () => !KB.worldOptions.disableTpRequests,
            mH: BB => {
              OB("disableTpRequests", !BB)
            }
          },
          spawnProtection: {
            isEnabled: () => KB.worldOptions.spawnProtection,
            mH: BB => {
              OB("spawnProtection", BB)
            }
          },
          spawnReset: {
            isEnabled: () => KB.worldOptions.enableSpawnReset,
            mH: BB => {
              OB("enableSpawnReset", BB)
            }
          },
          smpMarketplace: {
            isEnabled: () => KB.worldOptions.enableSmpMarketplace,
            mH: BB => {
              OB("enableSmpMarketplace", BB)
            }
          },
          survivalGuns: {
            isEnabled: () => KB.worldOptions.enableSurvivalGuns,
            mH: BB => {
              OB("enableSurvivalGuns", BB)
            }
          },
          fallDamage: {
            isEnabled: () => !KB.worldOptions.disableFallDamage,
            mH: BB => {
              OB("disableFallDamage", !BB)
            }
          },
          dayNight: {
            isEnabled: () => KB.worldOptions.enableDayNight,
            mH: BB => {
              OB("enableDayNight", BB)
            }
          }
        },
        zj = "Enter" !== XB,
        Qj = (0, oB.jsx)(gB.f, {
          className: "NameInput",
          label: "general:name",
          disabled: "Enter" !== XB,
          children: (0, oB.jsx)(dB.d, {
            domRef: PB,
            onValueChange: (BB, jB) => {
              const zB = (0, MB.db)(BB);
              vB("name", zB), PB.current.value = zB
            },
            maxLength: MB.H,
            defaultValue: KB.baseOptions.name
          })
        });
      return (0, oB.jsxs)("div", {
        className: NB()("CreateCustomLobby", {
          CreateCustomLobbySuccess: "Success" === XB,
          AdvancedMode: lB
        }),
        children: ["Success" === XB && (0, oB.jsxs)("div", {
          className: "CreateCustomLobbySuccessOverlay",
          children: [(0, oB.jsxs)("div", {
            className: "CreateCustomLobbySuccessTitle FullyFancyText AnimFadeInScaleUp",
            children: [(0, oB.jsx)(iB.c, {
              name: "check"
            }), (0, oB.jsx)(GB.b, {})]
          }), (0, oB.jsx)("div", {
            className: "CreateCustomLobbySuccessButtons AnimFadeInScaleUp",
            children: (0, oB.jsx)(rB.m, {
              padDefaultFocus: !0,
              onClick: () => {
                (0, kB.i)("worldCreation"), hB((0, mB.e)(DB, KB.baseOptions.name))
              },
              children: VB("homePage:joinLobbyName", {
                lobbyName: KB.baseOptions.name
              })
            })
          })]
        }), (0, oB.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, oB.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: VB(WB ? "homePage:createWorld" : "homePage:createCustomLobby")
          })
        }), (0, oB.jsx)(fB.d, {
          locked: zj,
          children: (0, oB.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [!lB && Qj, lB && (0, oB.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, oB.jsx)("div", {
                className: "SectionTitle",
                children: VB("customLobby:generalOptions")
              }), (0, oB.jsxs)("div", {
                className: "SectionBody",
                children: [Qj, (0, oB.jsx)(gB.f, {
                  label: "customLobby:visibility",
                  circleInfoText: VB("customLobby:visibilityDescription"),
                  disabled: "Enter" !== XB,
                  children: (0, oB.jsx)(uB.e, {
                    options: QB.n.map((BB => ({
                      value: BB,
                      label: QB.c[BB]
                    }))),
                    value: KB.baseOptions.visibility,
                    onChange: BB => {
                      vB("visibility", BB.value)
                    }
                  })
                })]
              })]
            }), WB && (0, oB.jsx)(qB.b, {
              value: KB.worldOptions.defaultGamemode,
              onChange: BB => {
                OB("defaultGamemode", BB)
              },
              showAll: lB,
              disabled: zj
            }), (WB || !(0, LB.I)(eB) && eB > 0) && (0, oB.jsx)(qB.f, {
              mapTypes: WB ? QB.C : QB.j,
              value: KB.mapOptions.mapType,
              onChange: BB => {
                const jB = {
                  mapType: BB
                };
                "customSchematic" !== BB && (jB.schematicIdList = []), Bj(jB)
              },
              showAll: lB,
              disabled: zj,
              children: "customSchematic" === KB.mapOptions.mapType && (0, oB.jsxs)(oB.Fragment, {
                children: [(0, oB.jsxs)("div", {
                  className: "SchematicListTitle AnimFadeIn",
                  children: [WB && VB("customLobby:selectWorldSchematic"), !WB && VB("customLobby:selectCustomLobbySchematics", {
                    schematicLimit: eB
                  })]
                }), (0, oB.jsx)("div", {
                  className: NB()("SchematicListContainer AnimFadeIn", {
                    SchematicListContainerDisabled: "Enter" !== XB
                  }),
                  children: (0, oB.jsx)(sB.c, {
                    loading: null === cB,
                    schematics: null !== cB && void 0 !== cB ? cB : [],
                    onSchematicPicked: function(BB) {
                      const jB = KB.mapOptions.schematicIdList;
                      if (jB.includes(BB.schematicId)) Bj({
                        schematicIdList: jB.filter((jB => jB !== BB.schematicId))
                      });
                      else {
                        if (eB && KB.mapOptions.schematicIdList.length >= eB) return;
                        Bj({
                          schematicIdList: [...KB.mapOptions.schematicIdList, BB.schematicId]
                        })
                      }
                    },
                    selectedSchematicIdList: KB.mapOptions.schematicIdList,
                    disableAutoExport: !0
                  })
                })]
              })
            }), lB && (0, oB.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, oB.jsx)("div", {
                className: "SectionTitle",
                children: VB("customLobby:listedOptions")
              }), (0, oB.jsxs)("div", {
                className: "SectionBody",
                children: [(0, oB.jsx)(gB.f, {
                  label: "general:description",
                  className: "CustomLobbyDescription",
                  disabled: "Enter" !== XB,
                  children: (0, oB.jsx)(dB.d, {
                    onValueChange: (BB, jB) => {
                      RB("description", BB)
                    },
                    maxLength: 100,
                    defaultValue: KB.listedOptions.description
                  })
                }), (0, oB.jsx)(gB.f, {
                  label: "general:color",
                  circleInfoText: "customLobby:lobbyColorDescription",
                  disabled: "Enter" !== XB,
                  children: (0, oB.jsx)("div", {
                    className: "OtherInput",
                    children: (0, oB.jsx)("input", {
                      type: "color",
                      value: KB.listedOptions.color,
                      onChange: BB => {
                        RB("color", BB.target.value)
                      }
                    })
                  })
                }), (0, oB.jsx)(gB.f, {
                  label: "general:emojis",
                  circleInfoText: "customLobby:lobbyEmojisDescription",
                  disabled: "Enter" !== XB,
                  children: (0, oB.jsx)(dB.d, {
                    onValueChange: (BB, jB) => {
                      RB("emojis", BB)
                    },
                    maxLength: 6,
                    defaultValue: KB.listedOptions.emojis
                  })
                })]
              })]
            }), lB && WB && (0, oB.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, oB.jsx)("div", {
                className: "SectionTitle",
                children: VB("customLobby:advancedOptions")
              }), (0, oB.jsxs)("div", {
                className: "SectionBody",
                children: [(0, oB.jsx)(gB.f, {
                  label: "classic:worldGenSeed",
                  disabled: "Enter" !== XB,
                  children: (0, oB.jsx)(dB.d, {
                    onValueChange: (BB, jB) => {
                      OB("worldGenSeed", BB)
                    },
                    maxLength: MB.H
                  })
                }), (0, oB.jsx)(gB.f, {
                  label: "classic:disableProtectors",
                  disabled: "Enter" !== XB,
                  children: (0, oB.jsx)(gB.d, {
                    checked: KB.worldOptions.disableProtectors,
                    setChecked: BB => {
                      OB("disableProtectors", BB)
                    }
                  })
                }), (0, oB.jsx)(gB.f, {
                  label: "classic:disableTribeCreation",
                  disabled: "Enter" !== XB,
                  children: (0, oB.jsx)(gB.d, {
                    checked: KB.worldOptions.disableTribeCreation,
                    setChecked: BB => {
                      OB("disableTribeCreation", BB)
                    }
                  })
                }), (0, oB.jsx)(gB.f, {
                  label: "classic:voidDeathHeight",
                  circleInfoText: "classic:voidDeathHeightDescription",
                  disabled: "Enter" !== XB,
                  children: (0, oB.jsx)("input", {
                    type: "number",
                    max: SB.G,
                    value: null !== (IB = KB.worldOptions.voidDeathHeight) && void 0 !== IB ? IB : "",
                    onChange: BB => {
                      const jB = parseInt(BB.target.value);
                      OB("voidDeathHeight", isNaN(jB) ? null : jB)
                    }
                  })
                }), (0, oB.jsx)(gB.f, {
                  label: "classic:disableLobbySpawn",
                  disabled: "Enter" !== XB,
                  children: (0, oB.jsx)(gB.d, {
                    checked: KB.worldOptions.disableLobbySpawn,
                    setChecked: BB => {
                      OB("disableLobbySpawn", BB)
                    }
                  })
                }), (0, oB.jsx)(gB.f, {
                  label: "classic:worldBorder",
                  circleInfoText: "classic:worldBorderDescription",
                  disabled: "Enter" !== XB,
                  children: (0, oB.jsx)("input", {
                    type: "number",
                    min: SB.O,
                    max: SB.K,
                    value: null !== (HB = KB.worldOptions.worldBorder) && void 0 !== HB ? HB : "",
                    onChange: BB => {
                      const jB = parseInt(BB.target.value);
                      OB("worldBorder", isNaN(jB) ? null : jB)
                    }
                  })
                }), (0, oB.jsx)(gB.f, {
                  label: "classic:disableMobs",
                  disabled: "Enter" !== XB,
                  children: (0, oB.jsx)(gB.d, {
                    checked: KB.worldOptions.disableMobs,
                    setChecked: BB => {
                      OB("disableMobs", BB)
                    }
                  })
                })]
              })]
            }), WB && (0, oB.jsx)(EB.b, {
              callbacks: jj,
              disabled: "Enter" !== XB,
              advancedMode: lB
            })]
          })
        }), (0, oB.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, oB.jsx)(rB.m, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: "Enter" !== XB,
            onClick: () => {
              !async function() {
                if ("Enter" === XB) {
                  ZB("Loading"), TB("");
                  try {
                    await pB.b.createCustomLobby(KB), ZB("Success")
                  } catch (BB) {
                    TB(BB.message), console.error(BB.message), ZB("Enter")
                  }
                }
              }()
            },
            children: VB("general:create")
          }), WB && (0, oB.jsx)("div", {
            className: "CreateCustomLobbyAdvancedToggle",
            "data-pad-ignore": zj || void 0,
            children: (0, oB.jsx)(gB.f, {
              label: "customLobby:showAdvancedOptions",
              disabled: zj,
              onLabelClick: () => {
                wB(!lB)
              },
              children: (0, oB.jsx)(gB.d, {
                checked: lB,
                setChecked: wB
              })
            })
          }), AB && (0, oB.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: AB
          })]
        })]
      })
    }
  },
  36430: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => uB
    });
    var QB = zB(1091),
      nB = zB.n(QB),
      dB = zB(62),
      IB = zB(4687),
      NB = zB(1148);

    function uB(BB) {
      let {
        locked: jB,
        children: zB
      } = BB;
      const QB = (0, dB.useRef)(null),
        uB = (0, IB.e)(QB, "y");
      return (0, NB.jsx)("div", {
        ref: QB,
        className: nB()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: uB.before,
          CreateCustomLobbyBodyMoreBelow: uB.after
        }),
        "data-pad-ignore": jB || void 0,
        children: zB
      })
    }
  },
  36418: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => aB,
      e: () => rB
    });
    var QB = zB(62),
      nB = zB(1381),
      dB = zB(1240),
      IB = zB(1369),
      NB = zB(3587),
      uB = zB(5026),
      UB = zB(1148);

    function aB(BB) {
      let {
        loading: jB,
        schematics: zB,
        onSchematicPicked: QB,
        selectedSchematicIdList: nB = [],
        disableAutoExport: uB
      } = BB;
      const {
        t: aB
      } = (0, dB.D)();
      return (0, UB.jsxs)("div", {
        className: "SchematicList",
        children: [jB && (0, UB.jsx)(IB.e, {}), !jB && 0 === zB.length && (0, UB.jsx)("div", {
          className: "NoSchematicsText",
          children: aB("worldBuilder:noSavedSchematic")
        }), !jB && zB.map((BB => (0, UB.jsx)(NB.f, {
          source: {
            type: "schematic",
            schematic: BB
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            QB(BB)
          },
          isSelected: nB.includes(BB.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: BB.isAutoExported && uB,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, BB.schematicId)))]
      })
    }

    function pB(BB) {
      let {
        ownedSchematics: jB,
        currentWorldSchematicId: zB,
        onClose: nB
      } = BB;
      const {
        t: IB
      } = (0, dB.D)(), [NB, pB] = (0, QB.useState)(null);
      return (0, UB.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === NB && (0, UB.jsxs)(UB.Fragment, {
          children: [(0, UB.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: IB("worldBuilder:schematicList")
          }), (0, UB.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: IB("worldBuilder:clickSchematicForOptions")
          }), (0, UB.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, UB.jsx)(aB, {
              loading: !1,
              schematics: jB,
              onSchematicPicked: BB => {
                pB(BB)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== NB && (0, UB.jsx)(uB.h, {
          schematic: NB,
          inSourceWorld: NB.schematicId === zB,
          onSchematicUpdate: BB => {
            pB(BB)
          },
          onClose: () => {
            pB(null), nB()
          }
        })]
      })
    }

    function rB(BB) {
      let {
        ownedSchematics: jB,
        currentWorldSchematicId: zB,
        onClose: QB
      } = BB;
      nB.NotificationProvider.showCustomPopup({
        body: BB => (0, UB.jsx)(pB, {
          ownedSchematics: jB,
          currentWorldSchematicId: zB,
          onClose: BB
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: QB,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  36426: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => UB,
      f: () => aB
    });
    zB(62);
    var QB = zB(1091),
      nB = zB.n(QB),
      dB = zB(4729),
      IB = zB(363),
      NB = zB(1240),
      uB = zB(1148);

    function UB(BB) {
      let {
        value: jB,
        onChange: zB,
        showAll: QB,
        disabled: UB = !1
      } = BB;
      const {
        t: aB
      } = (0, NB.D)();
      return (0, uB.jsxs)("div", {
        className: nB()("BloxdForm GamemodeForm", {
          BasicOptions: !QB
        }),
        children: [(0, uB.jsx)("div", {
          className: "SectionTitle",
          children: aB("classic:defaultGamemode")
        }), (0, uB.jsx)("div", {
          className: "SectionBody",
          children: dB.y.map((BB => QB || (0, dB.u)(BB) ? (0, uB.jsx)("button", {
            type: "button",
            className: nB()("WorldGamemode", {
              Selected: jB === BB
            }),
            disabled: UB,
            onClick: () => {
              zB(BB)
            },
            style: {
              "--background-image": `url(${IB.t[BB]})`
            },
            children: IB.r[BB]
          }, BB) : null))
        })]
      })
    }

    function aB(BB) {
      let {
        mapTypes: jB,
        value: zB,
        onChange: QB,
        showAll: UB,
        disabled: aB = !1,
        children: pB
      } = BB;
      const {
        t: rB
      } = (0, NB.D)();
      return (0, uB.jsxs)("div", {
        className: nB()("BloxdForm MapTypeForm", {
          BasicOptions: !UB
        }),
        children: [(0, uB.jsx)("div", {
          className: "SectionTitle",
          children: rB("customLobby:mapType")
        }), (0, uB.jsx)("div", {
          className: "SectionBody",
          children: jB.map((BB => UB || (0, dB.v)(BB) ? (0, uB.jsx)("button", {
            type: "button",
            className: nB()("MapType", {
              Selected: zB === BB
            }),
            disabled: aB,
            onClick: () => {
              QB(BB)
            },
            style: {
              "--background-image": `url(${IB.n[BB]})`
            },
            children: IB.m[BB]
          }, BB) : null))
        }), pB]
      })
    }
  },
  36409: () => {}
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);