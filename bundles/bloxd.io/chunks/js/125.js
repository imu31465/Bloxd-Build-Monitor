export const id = 125;
export const ids = [125];
export const modules = {
  37474: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      CreateCustomLobby: () => nW
    });
    OW(37480);
    var mW = OW(5318),
      EW = OW(62),
      NW = OW(1782),
      PW = OW(1089),
      LW = OW.n(PW),
      cW = OW(4292),
      wW = OW(1111),
      tW = OW(1185),
      ZW = OW(5282),
      xW = OW(1532),
      lW = OW(37486),
      AW = OW(1172),
      bW = OW(1365),
      jW = OW(1605),
      UW = OW(25),
      kW = OW(1536),
      sW = OW(643),
      MW = OW(5693),
      KW = OW(805),
      SW = OW(1230),
      YW = OW(1217),
      yW = OW(5706),
      TW = OW(1391),
      JW = OW(37489),
      hW = OW(37497),
      HW = OW(1283);

    function nW(WW) {
      var iW, OW, PW, nW;
      let {
        gameNameWithVariation: uW,
        close: oW,
        initialDefaultGamemode: dW
      } = WW;
      const {
        t: eW
      } = (0, AW.B)(), vW = (0, jW.useNavigatePreserveSearch)(), [gW, DW] = (0, EW.useState)("Enter"), [VW, pW] = (0, EW.useState)(""), fW = EW.useRef(null), CW = null === (iW = KW.d[uW]) || void 0 === iW ? void 0 : iW.showWorldsInsteadOfCustomLobbies, XW = CW ? 1 : null === (OW = KW.d[uW]) || void 0 === OW ? void 0 : OW.customLobbyCustomSchematicLimit, [BW, qW] = (0, EW.useState)(!CW);
      dW || (dW = "classic_creative" === uW || "classic_creativeFlat" === uW ? "creative" : "classic" === uW ? "peaceful" : "survival");
      const RW = {
        baseOptions: {
          gameNameWithVariation: CW ? "classic" : uW,
          name: "",
          visibility: "unlisted"
        },
        listedOptions: {
          description: "",
          color: "",
          emojis: ""
        },
        mapOptions: {
          mapType: "classic_creativeFlat" === uW ? "flat" : "default",
          schematicIdList: []
        },
        worldOptions: null
      };
      CW && (RW.worldOptions = {
        defaultGamemode: dW,
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
      const [GW, IW] = (0, EW.useState)(RW), [aW, rW] = (0, EW.useState)(null);

      function zW(WW, iW) {
        IW({
          ...GW,
          baseOptions: {
            ...GW.baseOptions,
            [WW]: iW
          }
        })
      }

      function FW(WW, iW) {
        IW({
          ...GW,
          listedOptions: {
            ...GW.listedOptions,
            [WW]: iW
          }
        })
      }

      function QW(WW, iW) {
        IW({
          ...GW,
          worldOptions: {
            ...GW.worldOptions,
            [WW]: iW
          }
        })
      }

      function Wi(WW) {
        IW({
          ...GW,
          mapOptions: {
            ...GW.mapOptions,
            ...WW
          }
        })
      }(0, EW.useEffect)((() => {
        ZW.b.getNewStarterName().then((WW => {
          IW((iW => "" !== iW.baseOptions.name ? iW : {
            ...iW,
            baseOptions: {
              ...iW.baseOptions,
              name: WW
            }
          }))
        })).catch((WW => {
          console.error("Error getting new starter name:", WW)
        }))
      }), []), (0, EW.useEffect)((() => {
        "customSchematic" === GW.mapOptions.mapType && null === aW && (0, wW.postJsonWithMetricsCookiesAndJsonResponse)(`${tW.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
          retries: 0,
          minTimeout: 3e3
        }).then((WW => {
          rW(WW)
        }))
      }), [GW.mapOptions.mapType, aW]);
      const ii = {
          tpRequests: {
            isEnabled: () => !GW.worldOptions.disableTpRequests,
            WK: WW => {
              QW("disableTpRequests", !WW)
            }
          },
          spawnProtection: {
            isEnabled: () => GW.worldOptions.spawnProtection,
            WK: WW => {
              QW("spawnProtection", WW)
            }
          },
          spawnReset: {
            isEnabled: () => GW.worldOptions.enableSpawnReset,
            WK: WW => {
              QW("enableSpawnReset", WW)
            }
          },
          smpMarketplace: {
            isEnabled: () => GW.worldOptions.enableSmpMarketplace,
            WK: WW => {
              QW("enableSmpMarketplace", WW)
            }
          },
          survivalGuns: {
            isEnabled: () => GW.worldOptions.enableSurvivalGuns,
            WK: WW => {
              QW("enableSurvivalGuns", WW)
            }
          },
          fallDamage: {
            isEnabled: () => !GW.worldOptions.disableFallDamage,
            WK: WW => {
              QW("disableFallDamage", !WW)
            }
          },
          dayNight: {
            isEnabled: () => GW.worldOptions.enableDayNight,
            WK: WW => {
              QW("enableDayNight", WW)
            }
          }
        },
        Oi = "Enter" !== gW,
        mi = (0, HW.jsx)(MW.e, {
          className: "NameInput",
          label: "general:name",
          disabled: "Enter" !== gW,
          children: (0, HW.jsx)(NW.b, {
            domRef: fW,
            onValueChange: (WW, iW) => {
              const OW = (0, YW.Cb)(WW);
              zW("name", OW), fW.current.value = OW
            },
            maxLength: YW.T,
            defaultValue: GW.baseOptions.name
          })
        });
      return (0, HW.jsxs)("div", {
        className: LW()("CreateCustomLobby", {
          CreateCustomLobbySuccess: "Success" === gW,
          AdvancedMode: BW
        }),
        children: ["Success" === gW && (0, HW.jsxs)("div", {
          className: "CreateCustomLobbySuccessOverlay",
          children: [(0, HW.jsxs)("div", {
            className: "CreateCustomLobbySuccessTitle FullyFancyText AnimFadeInScaleUp",
            children: [(0, HW.jsx)(TW.c, {
              name: "check"
            }), (0, HW.jsx)(kW.d, {})]
          }), (0, HW.jsx)("div", {
            className: "CreateCustomLobbySuccessButtons AnimFadeInScaleUp",
            children: (0, HW.jsx)(xW.n, {
              padDefaultFocus: !0,
              onClick: () => {
                (0, UW.l)("worldCreation"), vW((0, bW.e)(uW, GW.baseOptions.name))
              },
              children: eW("homePage:joinLobbyName", {
                lobbyName: GW.baseOptions.name
              })
            })
          })]
        }), (0, HW.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, HW.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: eW(CW ? "homePage:createWorld" : "homePage:createCustomLobby")
          })
        }), (0, HW.jsx)(hW.b, {
          locked: Oi,
          children: (0, HW.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [!BW && mi, BW && (0, HW.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, HW.jsx)("div", {
                className: "SectionTitle",
                children: eW("customLobby:generalOptions")
              }), (0, HW.jsxs)("div", {
                className: "SectionBody",
                children: [mi, (0, HW.jsx)(MW.e, {
                  label: "customLobby:visibility",
                  circleInfoText: eW("customLobby:visibilityDescription"),
                  disabled: "Enter" !== gW,
                  children: (0, HW.jsx)(cW.e, {
                    options: mW.y.map((WW => ({
                      value: WW,
                      label: mW.h[WW]
                    }))),
                    value: GW.baseOptions.visibility,
                    onChange: WW => {
                      zW("visibility", WW.value)
                    }
                  })
                })]
              })]
            }), CW && (0, HW.jsx)(JW.c, {
              value: GW.worldOptions.defaultGamemode,
              onChange: WW => {
                QW("defaultGamemode", WW)
              },
              showAll: BW,
              disabled: Oi
            }), (CW || !(0, sW.K)(XW) && XW > 0) && (0, HW.jsx)(JW.f, {
              mapTypes: CW ? mW.Q : mW.v,
              value: GW.mapOptions.mapType,
              onChange: WW => {
                const iW = {
                  mapType: WW
                };
                "customSchematic" !== WW && (iW.schematicIdList = []), Wi(iW)
              },
              showAll: BW,
              disabled: Oi,
              children: "customSchematic" === GW.mapOptions.mapType && (0, HW.jsxs)(HW.Fragment, {
                children: [(0, HW.jsxs)("div", {
                  className: "SchematicListTitle AnimFadeIn",
                  children: [CW && eW("customLobby:selectWorldSchematic"), !CW && eW("customLobby:selectCustomLobbySchematics", {
                    schematicLimit: XW
                  })]
                }), (0, HW.jsx)("div", {
                  className: LW()("SchematicListContainer AnimFadeIn", {
                    SchematicListContainerDisabled: "Enter" !== gW
                  }),
                  children: (0, HW.jsx)(lW.d, {
                    loading: null === aW,
                    schematics: null !== aW && void 0 !== aW ? aW : [],
                    onSchematicPicked: function(WW) {
                      const iW = GW.mapOptions.schematicIdList;
                      if (iW.includes(WW.schematicId)) Wi({
                        schematicIdList: iW.filter((iW => iW !== WW.schematicId))
                      });
                      else {
                        if (XW && GW.mapOptions.schematicIdList.length >= XW) return;
                        Wi({
                          schematicIdList: [...GW.mapOptions.schematicIdList, WW.schematicId]
                        })
                      }
                    },
                    selectedSchematicIdList: GW.mapOptions.schematicIdList,
                    disableAutoExport: !0
                  })
                })]
              })
            }), BW && (0, HW.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, HW.jsx)("div", {
                className: "SectionTitle",
                children: eW("customLobby:listedOptions")
              }), (0, HW.jsxs)("div", {
                className: "SectionBody",
                children: [(0, HW.jsx)(MW.e, {
                  label: "general:description",
                  className: "CustomLobbyDescription",
                  disabled: "Enter" !== gW,
                  children: (0, HW.jsx)(NW.b, {
                    onValueChange: (WW, iW) => {
                      FW("description", WW)
                    },
                    maxLength: 100,
                    defaultValue: GW.listedOptions.description
                  })
                }), (0, HW.jsx)(MW.e, {
                  label: "general:color",
                  circleInfoText: "customLobby:lobbyColorDescription",
                  disabled: "Enter" !== gW,
                  children: (0, HW.jsx)("div", {
                    className: "OtherInput",
                    children: (0, HW.jsx)("input", {
                      type: "color",
                      value: GW.listedOptions.color,
                      onChange: WW => {
                        FW("color", WW.target.value)
                      }
                    })
                  })
                }), (0, HW.jsx)(MW.e, {
                  label: "general:emojis",
                  circleInfoText: "customLobby:lobbyEmojisDescription",
                  disabled: "Enter" !== gW,
                  children: (0, HW.jsx)(NW.b, {
                    onValueChange: (WW, iW) => {
                      FW("emojis", WW)
                    },
                    maxLength: 6,
                    defaultValue: GW.listedOptions.emojis
                  })
                })]
              })]
            }), BW && CW && (0, HW.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, HW.jsx)("div", {
                className: "SectionTitle",
                children: eW("customLobby:advancedOptions")
              }), (0, HW.jsxs)("div", {
                className: "SectionBody",
                children: [(0, HW.jsx)(MW.e, {
                  label: "classic:worldGenSeed",
                  disabled: "Enter" !== gW,
                  children: (0, HW.jsx)(NW.b, {
                    onValueChange: (WW, iW) => {
                      QW("worldGenSeed", WW)
                    },
                    maxLength: YW.T
                  })
                }), (0, HW.jsx)(MW.e, {
                  label: "classic:disableProtectors",
                  disabled: "Enter" !== gW,
                  children: (0, HW.jsx)(MW.d, {
                    checked: GW.worldOptions.disableProtectors,
                    setChecked: WW => {
                      QW("disableProtectors", WW)
                    }
                  })
                }), (0, HW.jsx)(MW.e, {
                  label: "classic:disableTribeCreation",
                  disabled: "Enter" !== gW,
                  children: (0, HW.jsx)(MW.d, {
                    checked: GW.worldOptions.disableTribeCreation,
                    setChecked: WW => {
                      QW("disableTribeCreation", WW)
                    }
                  })
                }), (0, HW.jsx)(MW.e, {
                  label: "classic:voidDeathHeight",
                  circleInfoText: "classic:voidDeathHeightDescription",
                  disabled: "Enter" !== gW,
                  children: (0, HW.jsx)("input", {
                    type: "number",
                    max: SW.v,
                    value: null !== (PW = GW.worldOptions.voidDeathHeight) && void 0 !== PW ? PW : "",
                    onChange: WW => {
                      const iW = parseInt(WW.target.value);
                      QW("voidDeathHeight", isNaN(iW) ? null : iW)
                    }
                  })
                }), (0, HW.jsx)(MW.e, {
                  label: "classic:disableLobbySpawn",
                  disabled: "Enter" !== gW,
                  children: (0, HW.jsx)(MW.d, {
                    checked: GW.worldOptions.disableLobbySpawn,
                    setChecked: WW => {
                      QW("disableLobbySpawn", WW)
                    }
                  })
                }), (0, HW.jsx)(MW.e, {
                  label: "classic:worldBorder",
                  circleInfoText: "classic:worldBorderDescription",
                  disabled: "Enter" !== gW,
                  children: (0, HW.jsx)("input", {
                    type: "number",
                    min: SW.D,
                    max: SW.z,
                    value: null !== (nW = GW.worldOptions.worldBorder) && void 0 !== nW ? nW : "",
                    onChange: WW => {
                      const iW = parseInt(WW.target.value);
                      QW("worldBorder", isNaN(iW) ? null : iW)
                    }
                  })
                }), (0, HW.jsx)(MW.e, {
                  label: "classic:disableMobs",
                  disabled: "Enter" !== gW,
                  children: (0, HW.jsx)(MW.d, {
                    checked: GW.worldOptions.disableMobs,
                    setChecked: WW => {
                      QW("disableMobs", WW)
                    }
                  })
                })]
              })]
            }), CW && (0, HW.jsx)(yW.b, {
              callbacks: ii,
              disabled: "Enter" !== gW,
              advancedMode: BW
            })]
          })
        }), (0, HW.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, HW.jsx)(xW.n, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: "Enter" !== gW,
            onClick: () => {
              !async function() {
                if ("Enter" === gW) {
                  DW("Loading"), pW("");
                  try {
                    await ZW.b.createCustomLobby(GW), DW("Success")
                  } catch (WW) {
                    pW(WW.message), console.error(WW.message), DW("Enter")
                  }
                }
              }()
            },
            children: eW("general:create")
          }), CW && (0, HW.jsx)("div", {
            className: "CreateCustomLobbyAdvancedToggle",
            "data-pad-ignore": Oi || void 0,
            children: (0, HW.jsx)(MW.e, {
              label: "customLobby:showAdvancedOptions",
              disabled: Oi,
              onLabelClick: () => {
                qW(!BW)
              },
              children: (0, HW.jsx)(MW.d, {
                checked: BW,
                setChecked: qW
              })
            })
          }), VW && (0, HW.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: VW
          })]
        })]
      })
    }
  },
  37497: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => cW
    });
    var mW = OW(1089),
      EW = OW.n(mW),
      NW = OW(62),
      PW = OW(5277),
      LW = OW(1283);

    function cW(WW) {
      let {
        locked: iW,
        children: OW
      } = WW;
      const mW = (0, NW.useRef)(null),
        cW = (0, PW.d)(mW, "y");
      return (0, LW.jsx)("div", {
        ref: mW,
        className: EW()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: cW.before,
          CreateCustomLobbyBodyMoreBelow: cW.after
        }),
        "data-pad-ignore": iW || void 0,
        children: OW
      })
    }
  },
  37486: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => tW,
      g: () => xW
    });
    var mW = OW(62),
      EW = OW(1422),
      NW = OW(1172),
      PW = OW(1383),
      LW = OW(4718),
      cW = OW(5686),
      wW = OW(1283);

    function tW(WW) {
      let {
        loading: iW,
        schematics: OW,
        onSchematicPicked: mW,
        selectedSchematicIdList: EW = [],
        disableAutoExport: cW
      } = WW;
      const {
        t: tW
      } = (0, NW.B)();
      return (0, wW.jsxs)("div", {
        className: "SchematicList",
        children: [iW && (0, wW.jsx)(PW.d, {}), !iW && 0 === OW.length && (0, wW.jsx)("div", {
          className: "NoSchematicsText",
          children: tW("worldBuilder:noSavedSchematic")
        }), !iW && OW.map((WW => (0, wW.jsx)(LW.d, {
          source: {
            type: "schematic",
            schematic: WW
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            mW(WW)
          },
          isSelected: EW.includes(WW.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: WW.isAutoExported && cW,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, WW.schematicId)))]
      })
    }

    function ZW(WW) {
      let {
        ownedSchematics: iW,
        currentWorldSchematicId: OW,
        onClose: EW
      } = WW;
      const {
        t: PW
      } = (0, NW.B)(), [LW, ZW] = (0, mW.useState)(null);
      return (0, wW.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === LW && (0, wW.jsxs)(wW.Fragment, {
          children: [(0, wW.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: PW("worldBuilder:schematicList")
          }), (0, wW.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: PW("worldBuilder:clickSchematicForOptions")
          }), (0, wW.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, wW.jsx)(tW, {
              loading: !1,
              schematics: iW,
              onSchematicPicked: WW => {
                ZW(WW)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== LW && (0, wW.jsx)(cW.h, {
          schematic: LW,
          inSourceWorld: LW.schematicId === OW,
          onSchematicUpdate: WW => {
            ZW(WW)
          },
          onClose: () => {
            ZW(null), EW()
          }
        })]
      })
    }

    function xW(WW) {
      let {
        ownedSchematics: iW,
        currentWorldSchematicId: OW,
        onClose: mW
      } = WW;
      EW.NotificationProvider.showCustomPopup({
        body: WW => (0, wW.jsx)(ZW, {
          ownedSchematics: iW,
          currentWorldSchematicId: OW,
          onClose: WW
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: mW,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  37489: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => wW,
      f: () => tW
    });
    OW(62);
    var mW = OW(1089),
      EW = OW.n(mW),
      NW = OW(5318),
      PW = OW(327),
      LW = OW(1172),
      cW = OW(1283);

    function wW(WW) {
      let {
        value: iW,
        onChange: OW,
        showAll: mW,
        disabled: wW = !1
      } = WW;
      const {
        t: tW
      } = (0, LW.B)();
      return (0, cW.jsxs)("div", {
        className: EW()("BloxdForm GamemodeForm", {
          BasicOptions: !mW
        }),
        children: [(0, cW.jsx)("div", {
          className: "SectionTitle",
          children: tW("classic:defaultGamemode")
        }), (0, cW.jsx)("div", {
          className: "SectionBody",
          children: NW.M.map((WW => mW || (0, NW.D)(WW) ? (0, cW.jsx)("button", {
            type: "button",
            className: EW()("WorldGamemode", {
              Selected: iW === WW
            }),
            disabled: wW,
            onClick: () => {
              OW(WW)
            },
            style: {
              "--background-image": `url(${PW.s[WW]})`
            },
            children: PW.p[WW]
          }, WW) : null))
        })]
      })
    }

    function tW(WW) {
      let {
        mapTypes: iW,
        value: OW,
        onChange: mW,
        showAll: wW,
        disabled: tW = !1,
        children: ZW
      } = WW;
      const {
        t: xW
      } = (0, LW.B)();
      return (0, cW.jsxs)("div", {
        className: EW()("BloxdForm MapTypeForm", {
          BasicOptions: !wW
        }),
        children: [(0, cW.jsx)("div", {
          className: "SectionTitle",
          children: xW("customLobby:mapType")
        }), (0, cW.jsx)("div", {
          className: "SectionBody",
          children: iW.map((WW => wW || (0, NW.F)(WW) ? (0, cW.jsx)("button", {
            type: "button",
            className: EW()("MapType", {
              Selected: OW === WW
            }),
            disabled: tW,
            onClick: () => {
              mW(WW)
            },
            style: {
              "--background-image": `url(${PW.j[WW]})`
            },
            children: PW.h[WW]
          }, WW) : null))
        }), ZW]
      })
    }
  },
  5807: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => EW,
      f: () => NW
    });
    var mW = OW(5766);
    const EW = "Air",
      NW = Object.freeze(new mW.h(EW, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  37480: () => {}
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);