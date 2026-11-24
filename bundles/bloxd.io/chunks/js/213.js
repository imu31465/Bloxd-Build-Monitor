export const id = 213;
export const ids = [213];
export const modules = {
  36353: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      CreateCustomLobby: () => vS
    });
    gS(36355);
    var tS = gS(4749),
      bS = gS(64),
      XS = gS(1774),
      xS = gS(1121),
      NS = gS.n(xS),
      qS = gS(3300),
      uS = gS(1216),
      IS = gS(1286),
      fS = gS(4712),
      kS = gS(1528),
      aS = gS(36364),
      KS = gS(1281),
      jS = gS(1406),
      GS = gS(1608),
      CS = gS(24),
      nS = gS(1534),
      PS = gS(680),
      QS = gS(5093),
      DS = gS(830),
      wS = gS(1327),
      hS = gS(1309),
      ZS = gS(5103),
      JS = gS(1127),
      OS = gS(36369),
      dS = gS(36377),
      cS = gS(1181);

    function vS(SS) {
      var HS, gS, xS, vS;
      let {
        gameNameWithVariation: ES,
        close: LS,
        initialDefaultGamemode: YS
      } = SS;
      const {
        t: AS
      } = (0, KS.F)(), yS = (0, GS.useNavigatePreserveSearch)(), [VS, iS] = (0, bS.useState)("Enter"), [WS, zS] = (0, bS.useState)(""), US = bS.useRef(null), pS = null === (HS = DS.d[ES]) || void 0 === HS ? void 0 : HS.showWorldsInsteadOfCustomLobbies, sS = pS ? 1 : null === (gS = DS.d[ES]) || void 0 === gS ? void 0 : gS.customLobbyCustomSchematicLimit, [BS, MS] = (0, bS.useState)(!pS);
      YS || (YS = "classic_creative" === ES || "classic_creativeFlat" === ES ? "creative" : "classic" === ES ? "peaceful" : "survival");
      const FS = {
        baseOptions: {
          gameNameWithVariation: pS ? "classic" : ES,
          name: "",
          visibility: "unlisted"
        },
        listedOptions: {
          description: "",
          color: "",
          emojis: ""
        },
        mapOptions: {
          mapType: "classic_creativeFlat" === ES ? "flat" : "default",
          schematicIdList: []
        },
        worldOptions: null
      };
      pS && (FS.worldOptions = {
        defaultGamemode: YS,
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
      const [RS, TS] = (0, bS.useState)(FS), [oS, lS] = (0, bS.useState)(null);

      function mS(SS, HS) {
        TS({
          ...RS,
          baseOptions: {
            ...RS.baseOptions,
            [SS]: HS
          }
        })
      }

      function eS(SS, HS) {
        TS({
          ...RS,
          listedOptions: {
            ...RS.listedOptions,
            [SS]: HS
          }
        })
      }

      function rS(SS, HS) {
        TS({
          ...RS,
          worldOptions: {
            ...RS.worldOptions,
            [SS]: HS
          }
        })
      }

      function SH(SS) {
        TS({
          ...RS,
          mapOptions: {
            ...RS.mapOptions,
            ...SS
          }
        })
      }(0, bS.useEffect)((() => {
        fS.e.getNewStarterName().then((SS => {
          TS((HS => "" !== HS.baseOptions.name ? HS : {
            ...HS,
            baseOptions: {
              ...HS.baseOptions,
              name: SS
            }
          }))
        })).catch((SS => {
          console.error("Error getting new starter name:", SS)
        }))
      }), []), (0, bS.useEffect)((() => {
        "customSchematic" === RS.mapOptions.mapType && null === oS && (0, uS.postJsonWithMetricsCookiesAndJsonResponse)(`${IS.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
          retries: 0,
          minTimeout: 3e3
        }).then((SS => {
          lS(SS)
        }))
      }), [RS.mapOptions.mapType, oS]);
      const HH = {
          tpRequests: {
            isEnabled: () => !RS.worldOptions.disableTpRequests,
            MJ: SS => {
              rS("disableTpRequests", !SS)
            }
          },
          spawnProtection: {
            isEnabled: () => RS.worldOptions.spawnProtection,
            MJ: SS => {
              rS("spawnProtection", SS)
            }
          },
          spawnReset: {
            isEnabled: () => RS.worldOptions.enableSpawnReset,
            MJ: SS => {
              rS("enableSpawnReset", SS)
            }
          },
          smpMarketplace: {
            isEnabled: () => RS.worldOptions.enableSmpMarketplace,
            MJ: SS => {
              rS("enableSmpMarketplace", SS)
            }
          },
          survivalGuns: {
            isEnabled: () => RS.worldOptions.enableSurvivalGuns,
            MJ: SS => {
              rS("enableSurvivalGuns", SS)
            }
          },
          fallDamage: {
            isEnabled: () => !RS.worldOptions.disableFallDamage,
            MJ: SS => {
              rS("disableFallDamage", !SS)
            }
          },
          dayNight: {
            isEnabled: () => RS.worldOptions.enableDayNight,
            MJ: SS => {
              rS("enableDayNight", SS)
            }
          }
        },
        gH = "Enter" !== VS,
        tH = (0, cS.jsx)(QS.d, {
          className: "NameInput",
          label: "general:name",
          disabled: "Enter" !== VS,
          children: (0, cS.jsx)(XS.e, {
            domRef: US,
            onValueChange: (SS, HS) => {
              const gS = (0, hS.ob)(SS);
              mS("name", gS), US.current.value = gS
            },
            maxLength: hS.Q,
            defaultValue: RS.baseOptions.name
          })
        });
      return (0, cS.jsxs)("div", {
        className: NS()("CreateCustomLobby", {
          CreateCustomLobbySuccess: "Success" === VS,
          AdvancedMode: BS
        }),
        children: ["Success" === VS && (0, cS.jsxs)("div", {
          className: "CreateCustomLobbySuccessOverlay",
          children: [(0, cS.jsxs)("div", {
            className: "CreateCustomLobbySuccessTitle FullyFancyText AnimFadeInScaleUp",
            children: [(0, cS.jsx)(JS.d, {
              name: "check"
            }), (0, cS.jsx)(nS.d, {})]
          }), (0, cS.jsx)("div", {
            className: "CreateCustomLobbySuccessButtons AnimFadeInScaleUp",
            children: (0, cS.jsx)(kS.p, {
              padDefaultFocus: !0,
              onClick: () => {
                (0, CS.k)("worldCreation"), yS((0, jS.d)(ES, RS.baseOptions.name))
              },
              children: AS("homePage:joinLobbyName", {
                lobbyName: RS.baseOptions.name
              })
            })
          })]
        }), (0, cS.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, cS.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: AS(pS ? "homePage:createWorld" : "homePage:createCustomLobby")
          })
        }), (0, cS.jsx)(dS.c, {
          locked: gH,
          children: (0, cS.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [!BS && tH, BS && (0, cS.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, cS.jsx)("div", {
                className: "SectionTitle",
                children: AS("customLobby:generalOptions")
              }), (0, cS.jsxs)("div", {
                className: "SectionBody",
                children: [tH, (0, cS.jsx)(QS.d, {
                  label: "customLobby:visibility",
                  circleInfoText: AS("customLobby:visibilityDescription"),
                  disabled: "Enter" !== VS,
                  children: (0, cS.jsx)(qS.e, {
                    options: tS.y.map((SS => ({
                      value: SS,
                      label: tS.h[SS]
                    }))),
                    value: RS.baseOptions.visibility,
                    onChange: SS => {
                      mS("visibility", SS.value)
                    }
                  })
                })]
              })]
            }), pS && (0, cS.jsx)(OS.c, {
              value: RS.worldOptions.defaultGamemode,
              onChange: SS => {
                rS("defaultGamemode", SS)
              },
              showAll: BS,
              disabled: gH
            }), (pS || !(0, PS.K)(sS) && sS > 0) && (0, cS.jsx)(OS.g, {
              mapTypes: pS ? tS.Q : tS.w,
              value: RS.mapOptions.mapType,
              onChange: SS => {
                const HS = {
                  mapType: SS
                };
                "customSchematic" !== SS && (HS.schematicIdList = []), SH(HS)
              },
              showAll: BS,
              disabled: gH,
              children: "customSchematic" === RS.mapOptions.mapType && (0, cS.jsxs)(cS.Fragment, {
                children: [(0, cS.jsxs)("div", {
                  className: "SchematicListTitle AnimFadeIn",
                  children: [pS && AS("customLobby:selectWorldSchematic"), !pS && AS("customLobby:selectCustomLobbySchematics", {
                    schematicLimit: sS
                  })]
                }), (0, cS.jsx)("div", {
                  className: NS()("SchematicListContainer AnimFadeIn", {
                    SchematicListContainerDisabled: "Enter" !== VS
                  }),
                  children: (0, cS.jsx)(aS.e, {
                    loading: null === oS,
                    schematics: null !== oS && void 0 !== oS ? oS : [],
                    onSchematicPicked: function(SS) {
                      const HS = RS.mapOptions.schematicIdList;
                      if (HS.includes(SS.schematicId)) SH({
                        schematicIdList: HS.filter((HS => HS !== SS.schematicId))
                      });
                      else {
                        if (sS && RS.mapOptions.schematicIdList.length >= sS) return;
                        SH({
                          schematicIdList: [...RS.mapOptions.schematicIdList, SS.schematicId]
                        })
                      }
                    },
                    selectedSchematicIdList: RS.mapOptions.schematicIdList,
                    disableAutoExport: !0
                  })
                })]
              })
            }), BS && (0, cS.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, cS.jsx)("div", {
                className: "SectionTitle",
                children: AS("customLobby:listedOptions")
              }), (0, cS.jsxs)("div", {
                className: "SectionBody",
                children: [(0, cS.jsx)(QS.d, {
                  label: "general:description",
                  className: "CustomLobbyDescription",
                  disabled: "Enter" !== VS,
                  children: (0, cS.jsx)(XS.e, {
                    onValueChange: (SS, HS) => {
                      eS("description", SS)
                    },
                    maxLength: 100,
                    defaultValue: RS.listedOptions.description
                  })
                }), (0, cS.jsx)(QS.d, {
                  label: "general:color",
                  circleInfoText: "customLobby:lobbyColorDescription",
                  disabled: "Enter" !== VS,
                  children: (0, cS.jsx)("div", {
                    className: "OtherInput",
                    children: (0, cS.jsx)("input", {
                      type: "color",
                      value: RS.listedOptions.color,
                      onChange: SS => {
                        eS("color", SS.target.value)
                      }
                    })
                  })
                }), (0, cS.jsx)(QS.d, {
                  label: "general:emojis",
                  circleInfoText: "customLobby:lobbyEmojisDescription",
                  disabled: "Enter" !== VS,
                  children: (0, cS.jsx)(XS.e, {
                    onValueChange: (SS, HS) => {
                      eS("emojis", SS)
                    },
                    maxLength: 6,
                    defaultValue: RS.listedOptions.emojis
                  })
                })]
              })]
            }), BS && pS && (0, cS.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, cS.jsx)("div", {
                className: "SectionTitle",
                children: AS("customLobby:advancedOptions")
              }), (0, cS.jsxs)("div", {
                className: "SectionBody",
                children: [(0, cS.jsx)(QS.d, {
                  label: "classic:worldGenSeed",
                  disabled: "Enter" !== VS,
                  children: (0, cS.jsx)(XS.e, {
                    onValueChange: (SS, HS) => {
                      rS("worldGenSeed", SS)
                    },
                    maxLength: hS.Q
                  })
                }), (0, cS.jsx)(QS.d, {
                  label: "classic:disableProtectors",
                  disabled: "Enter" !== VS,
                  children: (0, cS.jsx)(QS.c, {
                    checked: RS.worldOptions.disableProtectors,
                    setChecked: SS => {
                      rS("disableProtectors", SS)
                    }
                  })
                }), (0, cS.jsx)(QS.d, {
                  label: "classic:disableTribeCreation",
                  disabled: "Enter" !== VS,
                  children: (0, cS.jsx)(QS.c, {
                    checked: RS.worldOptions.disableTribeCreation,
                    setChecked: SS => {
                      rS("disableTribeCreation", SS)
                    }
                  })
                }), (0, cS.jsx)(QS.d, {
                  label: "classic:voidDeathHeight",
                  circleInfoText: "classic:voidDeathHeightDescription",
                  disabled: "Enter" !== VS,
                  children: (0, cS.jsx)("input", {
                    type: "number",
                    max: wS.G,
                    value: null !== (xS = RS.worldOptions.voidDeathHeight) && void 0 !== xS ? xS : "",
                    onChange: SS => {
                      const HS = parseInt(SS.target.value);
                      rS("voidDeathHeight", isNaN(HS) ? null : HS)
                    }
                  })
                }), (0, cS.jsx)(QS.d, {
                  label: "classic:disableLobbySpawn",
                  disabled: "Enter" !== VS,
                  children: (0, cS.jsx)(QS.c, {
                    checked: RS.worldOptions.disableLobbySpawn,
                    setChecked: SS => {
                      rS("disableLobbySpawn", SS)
                    }
                  })
                }), (0, cS.jsx)(QS.d, {
                  label: "classic:worldBorder",
                  circleInfoText: "classic:worldBorderDescription",
                  disabled: "Enter" !== VS,
                  children: (0, cS.jsx)("input", {
                    type: "number",
                    min: wS.K,
                    max: wS.I,
                    value: null !== (vS = RS.worldOptions.worldBorder) && void 0 !== vS ? vS : "",
                    onChange: SS => {
                      const HS = parseInt(SS.target.value);
                      rS("worldBorder", isNaN(HS) ? null : HS)
                    }
                  })
                }), (0, cS.jsx)(QS.d, {
                  label: "classic:disableMobs",
                  disabled: "Enter" !== VS,
                  children: (0, cS.jsx)(QS.c, {
                    checked: RS.worldOptions.disableMobs,
                    setChecked: SS => {
                      rS("disableMobs", SS)
                    }
                  })
                })]
              })]
            }), pS && (0, cS.jsx)(ZS.e, {
              callbacks: HH,
              disabled: "Enter" !== VS,
              advancedMode: BS
            })]
          })
        }), (0, cS.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, cS.jsx)(kS.p, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: "Enter" !== VS,
            onClick: () => {
              !async function() {
                if ("Enter" === VS) {
                  iS("Loading"), zS("");
                  try {
                    await fS.e.createCustomLobby(RS), iS("Success")
                  } catch (SS) {
                    zS(SS.message), console.error(SS.message), iS("Enter")
                  }
                }
              }()
            },
            children: AS("general:create")
          }), pS && (0, cS.jsx)("div", {
            className: "CreateCustomLobbyAdvancedToggle",
            "data-pad-ignore": gH || void 0,
            children: (0, cS.jsx)(QS.d, {
              label: "customLobby:showAdvancedOptions",
              disabled: gH,
              onLabelClick: () => {
                MS(!BS)
              },
              children: (0, cS.jsx)(QS.c, {
                checked: BS,
                setChecked: MS
              })
            })
          }), WS && (0, cS.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: WS
          })]
        })]
      })
    }
  },
  36377: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => qS
    });
    var tS = gS(1121),
      bS = gS.n(tS),
      XS = gS(64),
      xS = gS(4703),
      NS = gS(1181);

    function qS(SS) {
      let {
        locked: HS,
        children: gS
      } = SS;
      const tS = (0, XS.useRef)(null),
        qS = (0, xS.c)(tS, "y");
      return (0, NS.jsx)("div", {
        ref: tS,
        className: bS()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: qS.before,
          CreateCustomLobbyBodyMoreBelow: qS.after
        }),
        "data-pad-ignore": HS || void 0,
        children: gS
      })
    }
  },
  36364: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => IS,
      f: () => kS
    });
    var tS = gS(64),
      bS = gS(1435),
      XS = gS(1281),
      xS = gS(1419),
      NS = gS(3608),
      qS = gS(5089),
      uS = gS(1181);

    function IS(SS) {
      let {
        loading: HS,
        schematics: gS,
        onSchematicPicked: tS,
        selectedSchematicIdList: bS = [],
        disableAutoExport: qS
      } = SS;
      const {
        t: IS
      } = (0, XS.F)();
      return (0, uS.jsxs)("div", {
        className: "SchematicList",
        children: [HS && (0, uS.jsx)(xS.c, {}), !HS && 0 === gS.length && (0, uS.jsx)("div", {
          className: "NoSchematicsText",
          children: IS("worldBuilder:noSavedSchematic")
        }), !HS && gS.map((SS => (0, uS.jsx)(NS.g, {
          source: {
            type: "schematic",
            schematic: SS
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            tS(SS)
          },
          isSelected: bS.includes(SS.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: SS.isAutoExported && qS,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, SS.schematicId)))]
      })
    }

    function fS(SS) {
      let {
        ownedSchematics: HS,
        currentWorldSchematicId: gS,
        onClose: bS
      } = SS;
      const {
        t: xS
      } = (0, XS.F)(), [NS, fS] = (0, tS.useState)(null);
      return (0, uS.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === NS && (0, uS.jsxs)(uS.Fragment, {
          children: [(0, uS.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: xS("worldBuilder:schematicList")
          }), (0, uS.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: xS("worldBuilder:clickSchematicForOptions")
          }), (0, uS.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, uS.jsx)(IS, {
              loading: !1,
              schematics: HS,
              onSchematicPicked: SS => {
                fS(SS)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== NS && (0, uS.jsx)(qS.j, {
          schematic: NS,
          inSourceWorld: NS.schematicId === gS,
          onSchematicUpdate: SS => {
            fS(SS)
          },
          onClose: () => {
            fS(null), bS()
          }
        })]
      })
    }

    function kS(SS) {
      let {
        ownedSchematics: HS,
        currentWorldSchematicId: gS,
        onClose: tS
      } = SS;
      bS.NotificationProvider.showCustomPopup({
        body: SS => (0, uS.jsx)(fS, {
          ownedSchematics: HS,
          currentWorldSchematicId: gS,
          onClose: SS
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: tS,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  36369: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => uS,
      g: () => IS
    });
    gS(64);
    var tS = gS(1121),
      bS = gS.n(tS),
      XS = gS(4749),
      xS = gS(369),
      NS = gS(1281),
      qS = gS(1181);

    function uS(SS) {
      let {
        value: HS,
        onChange: gS,
        showAll: tS,
        disabled: uS = !1
      } = SS;
      const {
        t: IS
      } = (0, NS.F)();
      return (0, qS.jsxs)("div", {
        className: bS()("BloxdForm GamemodeForm", {
          BasicOptions: !tS
        }),
        children: [(0, qS.jsx)("div", {
          className: "SectionTitle",
          children: IS("classic:defaultGamemode")
        }), (0, qS.jsx)("div", {
          className: "SectionBody",
          children: XS.O.map((SS => tS || (0, XS.G)(SS) ? (0, qS.jsx)("button", {
            type: "button",
            className: bS()("WorldGamemode", {
              Selected: HS === SS
            }),
            disabled: uS,
            onClick: () => {
              gS(SS)
            },
            style: {
              "--background-image": `url(${xS.u[SS]})`
            },
            children: xS.t[SS]
          }, SS) : null))
        })]
      })
    }

    function IS(SS) {
      let {
        mapTypes: HS,
        value: gS,
        onChange: tS,
        showAll: uS,
        disabled: IS = !1,
        children: fS
      } = SS;
      const {
        t: kS
      } = (0, NS.F)();
      return (0, qS.jsxs)("div", {
        className: bS()("BloxdForm MapTypeForm", {
          BasicOptions: !uS
        }),
        children: [(0, qS.jsx)("div", {
          className: "SectionTitle",
          children: kS("customLobby:mapType")
        }), (0, qS.jsx)("div", {
          className: "SectionBody",
          children: HS.map((SS => uS || (0, XS.J)(SS) ? (0, qS.jsx)("button", {
            type: "button",
            className: bS()("MapType", {
              Selected: gS === SS
            }),
            disabled: IS,
            onClick: () => {
              tS(SS)
            },
            style: {
              "--background-image": `url(${xS.p[SS]})`
            },
            children: xS.m[SS]
          }, SS) : null))
        }), fS]
      })
    }
  },
  36355: () => {}
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);