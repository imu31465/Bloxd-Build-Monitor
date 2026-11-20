export const id = 209;
export const ids = [209];
export const modules = {
  36138: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      CreateCustomLobby: () => JT
    });
    cT(36147);
    var lT = cT(4611),
      MT = cT(71),
      KT = cT(1692),
      OT = cT(1046),
      yT = cT.n(OT),
      fT = cT(3059),
      xT = cT(1136),
      IT = cT(1202),
      AT = cT(4566),
      CT = cT(1470),
      jT = cT(36151),
      vT = cT(1195),
      tT = cT(1333),
      hT = cT(1530),
      NT = cT(31),
      QT = cT(1474),
      ST = cT(617),
      DT = cT(4887),
      aT = cT(761),
      FT = cT(1244),
      rT = cT(1226),
      PT = cT(4899),
      wT = cT(1061),
      mT = cT(36160),
      bT = cT(36166),
      zT = cT(1099);

    function JT(TT) {
      var kT, cT, OT, JT;
      let {
        gameNameWithVariation: oT,
        close: HT,
        initialDefaultGamemode: eT
      } = TT;
      const {
        t: GT
      } = (0, vT.B)(), VT = (0, hT.useNavigatePreserveSearch)(), [ET, ZT] = (0, MT.useState)("Enter"), [uT, XT] = (0, MT.useState)(""), dT = MT.useRef(null), LT = null === (kT = aT.e[oT]) || void 0 === kT ? void 0 : kT.showWorldsInsteadOfCustomLobbies, RT = LT ? 1 : null === (cT = aT.e[oT]) || void 0 === cT ? void 0 : cT.customLobbyCustomSchematicLimit, [gT, UT] = (0, MT.useState)(!LT);
      eT || (eT = "classic_creative" === oT || "classic_creativeFlat" === oT ? "creative" : "classic" === oT ? "peaceful" : "survival");
      const YT = {
        baseOptions: {
          gameNameWithVariation: LT ? "classic" : oT,
          name: "",
          visibility: "unlisted"
        },
        listedOptions: {
          description: "",
          color: "",
          emojis: ""
        },
        mapOptions: {
          mapType: "classic_creativeFlat" === oT ? "flat" : "default",
          schematicIdList: []
        },
        worldOptions: null
      };
      LT && (YT.worldOptions = {
        defaultGamemode: eT,
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
      const [BT, WT] = (0, MT.useState)(YT), [nT, pT] = (0, MT.useState)(null);

      function iT(TT, kT) {
        WT({
          ...BT,
          baseOptions: {
            ...BT.baseOptions,
            [TT]: kT
          }
        })
      }

      function qT(TT, kT) {
        WT({
          ...BT,
          listedOptions: {
            ...BT.listedOptions,
            [TT]: kT
          }
        })
      }

      function sT(TT, kT) {
        WT({
          ...BT,
          worldOptions: {
            ...BT.worldOptions,
            [TT]: kT
          }
        })
      }

      function Tk(TT) {
        WT({
          ...BT,
          mapOptions: {
            ...BT.mapOptions,
            ...TT
          }
        })
      }(0, MT.useEffect)((() => {
        AT.c.getNewStarterName().then((TT => {
          WT((kT => "" !== kT.baseOptions.name ? kT : {
            ...kT,
            baseOptions: {
              ...kT.baseOptions,
              name: TT
            }
          }))
        })).catch((TT => {
          console.error("Error getting new starter name:", TT)
        }))
      }), []), (0, MT.useEffect)((() => {
        "customSchematic" === BT.mapOptions.mapType && null === nT && (0, xT.postJsonWithMetricsCookiesAndJsonResponse)(`${IT.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
          retries: 0,
          minTimeout: 3e3
        }).then((TT => {
          pT(TT)
        }))
      }), [BT.mapOptions.mapType, nT]);
      const kk = {
          tpRequests: {
            isEnabled: () => !BT.worldOptions.disableTpRequests,
            PD: TT => {
              sT("disableTpRequests", !TT)
            }
          },
          spawnProtection: {
            isEnabled: () => BT.worldOptions.spawnProtection,
            PD: TT => {
              sT("spawnProtection", TT)
            }
          },
          spawnReset: {
            isEnabled: () => BT.worldOptions.enableSpawnReset,
            PD: TT => {
              sT("enableSpawnReset", TT)
            }
          },
          smpMarketplace: {
            isEnabled: () => BT.worldOptions.enableSmpMarketplace,
            PD: TT => {
              sT("enableSmpMarketplace", TT)
            }
          },
          survivalGuns: {
            isEnabled: () => BT.worldOptions.enableSurvivalGuns,
            PD: TT => {
              sT("enableSurvivalGuns", TT)
            }
          },
          fallDamage: {
            isEnabled: () => !BT.worldOptions.disableFallDamage,
            PD: TT => {
              sT("disableFallDamage", !TT)
            }
          },
          dayNight: {
            isEnabled: () => BT.worldOptions.enableDayNight,
            PD: TT => {
              sT("enableDayNight", TT)
            }
          }
        },
        ck = "Enter" !== ET,
        lk = (0, zT.jsx)(DT.g, {
          className: "NameInput",
          label: "general:name",
          disabled: "Enter" !== ET,
          children: (0, zT.jsx)(KT.b, {
            domRef: dT,
            onValueChange: (TT, kT) => {
              const cT = (0, rT.Bb)(TT);
              iT("name", cT), dT.current.value = cT
            },
            maxLength: rT.O,
            defaultValue: BT.baseOptions.name
          })
        });
      return (0, zT.jsxs)("div", {
        className: yT()("CreateCustomLobby", {
          CreateCustomLobbySuccess: "Success" === ET,
          AdvancedMode: gT
        }),
        children: ["Success" === ET && (0, zT.jsxs)("div", {
          className: "CreateCustomLobbySuccessOverlay",
          children: [(0, zT.jsxs)("div", {
            className: "CreateCustomLobbySuccessTitle FullyFancyText AnimFadeInScaleUp",
            children: [(0, zT.jsx)(wT.e, {
              name: "check"
            }), (0, zT.jsx)(QT.b, {})]
          }), (0, zT.jsx)("div", {
            className: "CreateCustomLobbySuccessButtons AnimFadeInScaleUp",
            children: (0, zT.jsx)(CT.m, {
              padDefaultFocus: !0,
              onClick: () => {
                (0, NT.l)("worldCreation"), VT((0, tT.c)(oT, BT.baseOptions.name))
              },
              children: GT("homePage:joinLobbyName", {
                lobbyName: BT.baseOptions.name
              })
            })
          })]
        }), (0, zT.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, zT.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: GT(LT ? "homePage:createWorld" : "homePage:createCustomLobby")
          })
        }), (0, zT.jsx)(bT.b, {
          locked: ck,
          children: (0, zT.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [!gT && lk, gT && (0, zT.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, zT.jsx)("div", {
                className: "SectionTitle",
                children: GT("customLobby:generalOptions")
              }), (0, zT.jsxs)("div", {
                className: "SectionBody",
                children: [lk, (0, zT.jsx)(DT.g, {
                  label: "customLobby:visibility",
                  circleInfoText: GT("customLobby:visibilityDescription"),
                  disabled: "Enter" !== ET,
                  children: (0, zT.jsx)(fT.d, {
                    options: lT.u.map((TT => ({
                      value: TT,
                      label: lT.g[TT]
                    }))),
                    value: BT.baseOptions.visibility,
                    onChange: TT => {
                      iT("visibility", TT.value)
                    }
                  })
                })]
              })]
            }), LT && (0, zT.jsx)(mT.b, {
              value: BT.worldOptions.defaultGamemode,
              onChange: TT => {
                sT("defaultGamemode", TT)
              },
              showAll: gT,
              disabled: ck
            }), (LT || !(0, ST.R)(RT) && RT > 0) && (0, zT.jsx)(mT.d, {
              mapTypes: LT ? lT.J : lT.r,
              value: BT.mapOptions.mapType,
              onChange: TT => {
                const kT = {
                  mapType: TT
                };
                "customSchematic" !== TT && (kT.schematicIdList = []), Tk(kT)
              },
              showAll: gT,
              disabled: ck,
              children: "customSchematic" === BT.mapOptions.mapType && (0, zT.jsxs)(zT.Fragment, {
                children: [(0, zT.jsxs)("div", {
                  className: "SchematicListTitle AnimFadeIn",
                  children: [LT && GT("customLobby:selectWorldSchematic"), !LT && GT("customLobby:selectCustomLobbySchematics", {
                    schematicLimit: RT
                  })]
                }), (0, zT.jsx)("div", {
                  className: yT()("SchematicListContainer AnimFadeIn", {
                    SchematicListContainerDisabled: "Enter" !== ET
                  }),
                  children: (0, zT.jsx)(jT.e, {
                    loading: null === nT,
                    schematics: null !== nT && void 0 !== nT ? nT : [],
                    onSchematicPicked: function(TT) {
                      const kT = BT.mapOptions.schematicIdList;
                      if (kT.includes(TT.schematicId)) Tk({
                        schematicIdList: kT.filter((kT => kT !== TT.schematicId))
                      });
                      else {
                        if (RT && BT.mapOptions.schematicIdList.length >= RT) return;
                        Tk({
                          schematicIdList: [...BT.mapOptions.schematicIdList, TT.schematicId]
                        })
                      }
                    },
                    selectedSchematicIdList: BT.mapOptions.schematicIdList,
                    disableAutoExport: !0
                  })
                })]
              })
            }), gT && (0, zT.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, zT.jsx)("div", {
                className: "SectionTitle",
                children: GT("customLobby:listedOptions")
              }), (0, zT.jsxs)("div", {
                className: "SectionBody",
                children: [(0, zT.jsx)(DT.g, {
                  label: "general:description",
                  className: "CustomLobbyDescription",
                  disabled: "Enter" !== ET,
                  children: (0, zT.jsx)(KT.b, {
                    onValueChange: (TT, kT) => {
                      qT("description", TT)
                    },
                    maxLength: 100,
                    defaultValue: BT.listedOptions.description
                  })
                }), (0, zT.jsx)(DT.g, {
                  label: "general:color",
                  circleInfoText: "customLobby:lobbyColorDescription",
                  disabled: "Enter" !== ET,
                  children: (0, zT.jsx)("div", {
                    className: "OtherInput",
                    children: (0, zT.jsx)("input", {
                      type: "color",
                      value: BT.listedOptions.color,
                      onChange: TT => {
                        qT("color", TT.target.value)
                      }
                    })
                  })
                }), (0, zT.jsx)(DT.g, {
                  label: "general:emojis",
                  circleInfoText: "customLobby:lobbyEmojisDescription",
                  disabled: "Enter" !== ET,
                  children: (0, zT.jsx)(KT.b, {
                    onValueChange: (TT, kT) => {
                      qT("emojis", TT)
                    },
                    maxLength: 6,
                    defaultValue: BT.listedOptions.emojis
                  })
                })]
              })]
            }), gT && LT && (0, zT.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, zT.jsx)("div", {
                className: "SectionTitle",
                children: GT("customLobby:advancedOptions")
              }), (0, zT.jsxs)("div", {
                className: "SectionBody",
                children: [(0, zT.jsx)(DT.g, {
                  label: "classic:worldGenSeed",
                  disabled: "Enter" !== ET,
                  children: (0, zT.jsx)(KT.b, {
                    onValueChange: (TT, kT) => {
                      sT("worldGenSeed", TT)
                    },
                    maxLength: rT.O
                  })
                }), (0, zT.jsx)(DT.g, {
                  label: "classic:disableProtectors",
                  disabled: "Enter" !== ET,
                  children: (0, zT.jsx)(DT.e, {
                    checked: BT.worldOptions.disableProtectors,
                    setChecked: TT => {
                      sT("disableProtectors", TT)
                    }
                  })
                }), (0, zT.jsx)(DT.g, {
                  label: "classic:disableTribeCreation",
                  disabled: "Enter" !== ET,
                  children: (0, zT.jsx)(DT.e, {
                    checked: BT.worldOptions.disableTribeCreation,
                    setChecked: TT => {
                      sT("disableTribeCreation", TT)
                    }
                  })
                }), (0, zT.jsx)(DT.g, {
                  label: "classic:voidDeathHeight",
                  circleInfoText: "classic:voidDeathHeightDescription",
                  disabled: "Enter" !== ET,
                  children: (0, zT.jsx)("input", {
                    type: "number",
                    max: FT.B,
                    value: null !== (OT = BT.worldOptions.voidDeathHeight) && void 0 !== OT ? OT : "",
                    onChange: TT => {
                      const kT = parseInt(TT.target.value);
                      sT("voidDeathHeight", isNaN(kT) ? null : kT)
                    }
                  })
                }), (0, zT.jsx)(DT.g, {
                  label: "classic:disableLobbySpawn",
                  disabled: "Enter" !== ET,
                  children: (0, zT.jsx)(DT.e, {
                    checked: BT.worldOptions.disableLobbySpawn,
                    setChecked: TT => {
                      sT("disableLobbySpawn", TT)
                    }
                  })
                }), (0, zT.jsx)(DT.g, {
                  label: "classic:worldBorder",
                  circleInfoText: "classic:worldBorderDescription",
                  disabled: "Enter" !== ET,
                  children: (0, zT.jsx)("input", {
                    type: "number",
                    min: FT.J,
                    max: FT.D,
                    value: null !== (JT = BT.worldOptions.worldBorder) && void 0 !== JT ? JT : "",
                    onChange: TT => {
                      const kT = parseInt(TT.target.value);
                      sT("worldBorder", isNaN(kT) ? null : kT)
                    }
                  })
                }), (0, zT.jsx)(DT.g, {
                  label: "classic:disableMobs",
                  disabled: "Enter" !== ET,
                  children: (0, zT.jsx)(DT.e, {
                    checked: BT.worldOptions.disableMobs,
                    setChecked: TT => {
                      sT("disableMobs", TT)
                    }
                  })
                })]
              })]
            }), LT && (0, zT.jsx)(PT.b, {
              callbacks: kk,
              disabled: "Enter" !== ET,
              advancedMode: gT
            })]
          })
        }), (0, zT.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, zT.jsx)(CT.m, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: "Enter" !== ET,
            onClick: () => {
              !async function() {
                if ("Enter" === ET) {
                  ZT("Loading"), XT("");
                  try {
                    await AT.c.createCustomLobby(BT), ZT("Success")
                  } catch (TT) {
                    XT(TT.message), console.error(TT.message), ZT("Enter")
                  }
                }
              }()
            },
            children: GT("general:create")
          }), LT && (0, zT.jsx)("div", {
            className: "CreateCustomLobbyAdvancedToggle",
            "data-pad-ignore": ck || void 0,
            children: (0, zT.jsx)(DT.g, {
              label: "customLobby:showAdvancedOptions",
              disabled: ck,
              onLabelClick: () => {
                UT(!gT)
              },
              children: (0, zT.jsx)(DT.e, {
                checked: gT,
                setChecked: UT
              })
            })
          }), uT && (0, zT.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: uT
          })]
        })]
      })
    }
  },
  36166: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => fT
    });
    var lT = cT(1046),
      MT = cT.n(lT),
      KT = cT(71),
      OT = cT(4552),
      yT = cT(1099);

    function fT(TT) {
      let {
        locked: kT,
        children: cT
      } = TT;
      const lT = (0, KT.useRef)(null),
        fT = (0, OT.b)(lT, "y");
      return (0, yT.jsx)("div", {
        ref: lT,
        className: MT()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: fT.before,
          CreateCustomLobbyBodyMoreBelow: fT.after
        }),
        "data-pad-ignore": kT || void 0,
        children: cT
      })
    }
  },
  36151: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => IT,
      f: () => CT
    });
    var lT = cT(71),
      MT = cT(1363),
      KT = cT(1195),
      OT = cT(1348),
      yT = cT(3419),
      fT = cT(4880),
      xT = cT(1099);

    function IT(TT) {
      let {
        loading: kT,
        schematics: cT,
        onSchematicPicked: lT,
        selectedSchematicIdList: MT = [],
        disableAutoExport: fT
      } = TT;
      const {
        t: IT
      } = (0, KT.B)();
      return (0, xT.jsxs)("div", {
        className: "SchematicList",
        children: [kT && (0, xT.jsx)(OT.d, {}), !kT && 0 === cT.length && (0, xT.jsx)("div", {
          className: "NoSchematicsText",
          children: IT("worldBuilder:noSavedSchematic")
        }), !kT && cT.map((TT => (0, xT.jsx)(yT.d, {
          source: {
            type: "schematic",
            schematic: TT
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            lT(TT)
          },
          isSelected: MT.includes(TT.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: TT.isAutoExported && fT,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, TT.schematicId)))]
      })
    }

    function AT(TT) {
      let {
        ownedSchematics: kT,
        currentWorldSchematicId: cT,
        onClose: MT
      } = TT;
      const {
        t: OT
      } = (0, KT.B)(), [yT, AT] = (0, lT.useState)(null);
      return (0, xT.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === yT && (0, xT.jsxs)(xT.Fragment, {
          children: [(0, xT.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: OT("worldBuilder:schematicList")
          }), (0, xT.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: OT("worldBuilder:clickSchematicForOptions")
          }), (0, xT.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, xT.jsx)(IT, {
              loading: !1,
              schematics: kT,
              onSchematicPicked: TT => {
                AT(TT)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== yT && (0, xT.jsx)(fT.g, {
          schematic: yT,
          inSourceWorld: yT.schematicId === cT,
          onSchematicUpdate: TT => {
            AT(TT)
          },
          onClose: () => {
            AT(null), MT()
          }
        })]
      })
    }

    function CT(TT) {
      let {
        ownedSchematics: kT,
        currentWorldSchematicId: cT,
        onClose: lT
      } = TT;
      MT.NotificationProvider.showCustomPopup({
        body: TT => (0, xT.jsx)(AT, {
          ownedSchematics: kT,
          currentWorldSchematicId: cT,
          onClose: TT
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: lT,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  36160: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => xT,
      d: () => IT
    });
    cT(71);
    var lT = cT(1046),
      MT = cT.n(lT),
      KT = cT(4611),
      OT = cT(328),
      yT = cT(1195),
      fT = cT(1099);

    function xT(TT) {
      let {
        value: kT,
        onChange: cT,
        showAll: lT,
        disabled: xT = !1
      } = TT;
      const {
        t: IT
      } = (0, yT.B)();
      return (0, fT.jsxs)("div", {
        className: MT()("BloxdForm GamemodeForm", {
          BasicOptions: !lT
        }),
        children: [(0, fT.jsx)("div", {
          className: "SectionTitle",
          children: IT("classic:defaultGamemode")
        }), (0, fT.jsx)("div", {
          className: "SectionBody",
          children: KT.G.map((TT => lT || (0, KT.z)(TT) ? (0, fT.jsx)("button", {
            type: "button",
            className: MT()("WorldGamemode", {
              Selected: kT === TT
            }),
            disabled: xT,
            onClick: () => {
              cT(TT)
            },
            style: {
              "--background-image": `url(${OT.u[TT]})`
            },
            children: OT.q[TT]
          }, TT) : null))
        })]
      })
    }

    function IT(TT) {
      let {
        mapTypes: kT,
        value: cT,
        onChange: lT,
        showAll: xT,
        disabled: IT = !1,
        children: AT
      } = TT;
      const {
        t: CT
      } = (0, yT.B)();
      return (0, fT.jsxs)("div", {
        className: MT()("BloxdForm MapTypeForm", {
          BasicOptions: !xT
        }),
        children: [(0, fT.jsx)("div", {
          className: "SectionTitle",
          children: CT("customLobby:mapType")
        }), (0, fT.jsx)("div", {
          className: "SectionBody",
          children: kT.map((TT => xT || (0, KT.A)(TT) ? (0, fT.jsx)("button", {
            type: "button",
            className: MT()("MapType", {
              Selected: cT === TT
            }),
            disabled: IT,
            onClick: () => {
              lT(TT)
            },
            style: {
              "--background-image": `url(${OT.k[TT]})`
            },
            children: OT.i[TT]
          }, TT) : null))
        }), AT]
      })
    }
  },
  36147: () => {}
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);