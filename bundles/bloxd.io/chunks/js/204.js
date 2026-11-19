export const id = 204;
export const ids = [204];
export const modules = {
  35360: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      CreateCustomLobby: () => CT
    });
    IT(35362);
    var iT = IT(4137),
      zT = IT(46),
      kT = IT(1624),
      WT = IT(1042),
      XT = IT.n(WT),
      BT = IT(2695),
      FT = IT(1117),
      ST = IT(1183),
      DT = IT(4098),
      LT = IT(1408),
      xT = IT(35364),
      cT = IT(1171),
      KT = IT(1296),
      MT = IT(1468),
      rT = IT(12),
      AT = IT(1412),
      gT = IT(618),
      hT = IT(4414),
      wT = IT(748),
      mT = IT(1214),
      eT = IT(1193),
      RT = IT(4422),
      uT = IT(1055),
      vT = IT(35370),
      ET = IT(35374),
      fT = IT(1083);

    function CT(TT) {
      var oT, IT, WT, CT;
      let {
        gameNameWithVariation: jT,
        close: JT,
        initialDefaultGamemode: UT
      } = TT;
      const {
        t: aT
      } = (0, cT.t)(), YT = (0, MT.useNavigatePreserveSearch)(), [QT, OT] = (0, zT.useState)("Enter"), [HT, nT] = (0, zT.useState)(""), qT = zT.useRef(null), ZT = null === (oT = wT.d[jT]) || void 0 === oT ? void 0 : oT.showWorldsInsteadOfCustomLobbies, lT = ZT ? 1 : null === (IT = wT.d[jT]) || void 0 === IT ? void 0 : IT.customLobbyCustomSchematicLimit, [sT, tT] = (0, zT.useState)(!ZT);
      UT || (UT = "classic_creative" === jT || "classic_creativeFlat" === jT ? "creative" : "classic" === jT ? "peaceful" : "survival");
      const GT = {
        baseOptions: {
          gameNameWithVariation: ZT ? "classic" : jT,
          name: "",
          visibility: "unlisted"
        },
        listedOptions: {
          description: "",
          color: "",
          emojis: ""
        },
        mapOptions: {
          mapType: "classic_creativeFlat" === jT ? "flat" : "default",
          schematicIdList: []
        },
        worldOptions: null
      };
      ZT && (GT.worldOptions = {
        defaultGamemode: UT,
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
      const [pT, bT] = (0, zT.useState)(GT), [yT, NT] = (0, zT.useState)(null);

      function PT(TT, oT) {
        bT({
          ...pT,
          baseOptions: {
            ...pT.baseOptions,
            [TT]: oT
          }
        })
      }

      function dT(TT, oT) {
        bT({
          ...pT,
          listedOptions: {
            ...pT.listedOptions,
            [TT]: oT
          }
        })
      }

      function VT(TT, oT) {
        bT({
          ...pT,
          worldOptions: {
            ...pT.worldOptions,
            [TT]: oT
          }
        })
      }

      function To(TT) {
        bT({
          ...pT,
          mapOptions: {
            ...pT.mapOptions,
            ...TT
          }
        })
      }(0, zT.useEffect)((() => {
        DT.e.getNewStarterName().then((TT => {
          bT((oT => "" !== oT.baseOptions.name ? oT : {
            ...oT,
            baseOptions: {
              ...oT.baseOptions,
              name: TT
            }
          }))
        })).catch((TT => {
          console.error("Error getting new starter name:", TT)
        }))
      }), []), (0, zT.useEffect)((() => {
        "customSchematic" === pT.mapOptions.mapType && null === yT && (0, FT.postJsonWithMetricsCookiesAndJsonResponse)(`${ST.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
          retries: 0,
          minTimeout: 3e3
        }).then((TT => {
          NT(TT)
        }))
      }), [pT.mapOptions.mapType, yT]);
      const oo = {
          tpRequests: {
            isEnabled: () => !pT.worldOptions.disableTpRequests,
            Fv: TT => {
              VT("disableTpRequests", !TT)
            }
          },
          spawnProtection: {
            isEnabled: () => pT.worldOptions.spawnProtection,
            Fv: TT => {
              VT("spawnProtection", TT)
            }
          },
          spawnReset: {
            isEnabled: () => pT.worldOptions.enableSpawnReset,
            Fv: TT => {
              VT("enableSpawnReset", TT)
            }
          },
          smpMarketplace: {
            isEnabled: () => pT.worldOptions.enableSmpMarketplace,
            Fv: TT => {
              VT("enableSmpMarketplace", TT)
            }
          },
          survivalGuns: {
            isEnabled: () => pT.worldOptions.enableSurvivalGuns,
            Fv: TT => {
              VT("enableSurvivalGuns", TT)
            }
          },
          fallDamage: {
            isEnabled: () => !pT.worldOptions.disableFallDamage,
            Fv: TT => {
              VT("disableFallDamage", !TT)
            }
          },
          dayNight: {
            isEnabled: () => pT.worldOptions.enableDayNight,
            Fv: TT => {
              VT("enableDayNight", TT)
            }
          }
        },
        Io = "Enter" !== QT,
        io = (0, fT.jsx)(hT.h, {
          className: "NameInput",
          label: "general:name",
          disabled: "Enter" !== QT,
          children: (0, fT.jsx)(kT.e, {
            domRef: qT,
            onValueChange: (TT, oT) => {
              const IT = (0, eT.Db)(TT);
              PT("name", IT), qT.current.value = IT
            },
            maxLength: eT.O,
            defaultValue: pT.baseOptions.name
          })
        });
      return (0, fT.jsxs)("div", {
        className: XT()("CreateCustomLobby", {
          CreateCustomLobbySuccess: "Success" === QT,
          AdvancedMode: sT
        }),
        children: ["Success" === QT && (0, fT.jsxs)("div", {
          className: "CreateCustomLobbySuccessOverlay",
          children: [(0, fT.jsxs)("div", {
            className: "CreateCustomLobbySuccessTitle FullyFancyText AnimFadeInScaleUp",
            children: [(0, fT.jsx)(uT.e, {
              name: "check"
            }), (0, fT.jsx)(AT.d, {})]
          }), (0, fT.jsx)("div", {
            className: "CreateCustomLobbySuccessButtons AnimFadeInScaleUp",
            children: (0, fT.jsx)(LT.m, {
              padDefaultFocus: !0,
              onClick: () => {
                (0, rT.h)("worldCreation"), YT((0, KT.c)(jT, pT.baseOptions.name))
              },
              children: aT("homePage:joinLobbyName", {
                lobbyName: pT.baseOptions.name
              })
            })
          })]
        }), (0, fT.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, fT.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: aT(ZT ? "homePage:createWorld" : "homePage:createCustomLobby")
          })
        }), (0, fT.jsx)(ET.b, {
          locked: Io,
          children: (0, fT.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [!sT && io, sT && (0, fT.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, fT.jsx)("div", {
                className: "SectionTitle",
                children: aT("customLobby:generalOptions")
              }), (0, fT.jsxs)("div", {
                className: "SectionBody",
                children: [io, (0, fT.jsx)(hT.h, {
                  label: "customLobby:visibility",
                  circleInfoText: aT("customLobby:visibilityDescription"),
                  disabled: "Enter" !== QT,
                  children: (0, fT.jsx)(BT.d, {
                    options: iT.m.map((TT => ({
                      value: TT,
                      label: iT.d[TT]
                    }))),
                    value: pT.baseOptions.visibility,
                    onChange: TT => {
                      PT("visibility", TT.value)
                    }
                  })
                })]
              })]
            }), ZT && (0, fT.jsx)(vT.c, {
              value: pT.worldOptions.defaultGamemode,
              onChange: TT => {
                VT("defaultGamemode", TT)
              },
              showAll: sT,
              disabled: Io
            }), (ZT || !(0, gT.K)(lT) && lT > 0) && (0, fT.jsx)(vT.f, {
              mapTypes: ZT ? iT.B : iT.l,
              value: pT.mapOptions.mapType,
              onChange: TT => {
                const oT = {
                  mapType: TT
                };
                "customSchematic" !== TT && (oT.schematicIdList = []), To(oT)
              },
              showAll: sT,
              disabled: Io,
              children: "customSchematic" === pT.mapOptions.mapType && (0, fT.jsxs)(fT.Fragment, {
                children: [(0, fT.jsxs)("div", {
                  className: "SchematicListTitle AnimFadeIn",
                  children: [ZT && aT("customLobby:selectWorldSchematic"), !ZT && aT("customLobby:selectCustomLobbySchematics", {
                    schematicLimit: lT
                  })]
                }), (0, fT.jsx)("div", {
                  className: XT()("SchematicListContainer AnimFadeIn", {
                    SchematicListContainerDisabled: "Enter" !== QT
                  }),
                  children: (0, fT.jsx)(xT.c, {
                    loading: null === yT,
                    schematics: null !== yT && void 0 !== yT ? yT : [],
                    onSchematicPicked: function(TT) {
                      const oT = pT.mapOptions.schematicIdList;
                      if (oT.includes(TT.schematicId)) To({
                        schematicIdList: oT.filter((oT => oT !== TT.schematicId))
                      });
                      else {
                        if (lT && pT.mapOptions.schematicIdList.length >= lT) return;
                        To({
                          schematicIdList: [...pT.mapOptions.schematicIdList, TT.schematicId]
                        })
                      }
                    },
                    selectedSchematicIdList: pT.mapOptions.schematicIdList,
                    disableAutoExport: !0
                  })
                })]
              })
            }), sT && (0, fT.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, fT.jsx)("div", {
                className: "SectionTitle",
                children: aT("customLobby:listedOptions")
              }), (0, fT.jsxs)("div", {
                className: "SectionBody",
                children: [(0, fT.jsx)(hT.h, {
                  label: "general:description",
                  className: "CustomLobbyDescription",
                  disabled: "Enter" !== QT,
                  children: (0, fT.jsx)(kT.e, {
                    onValueChange: (TT, oT) => {
                      dT("description", TT)
                    },
                    maxLength: 100,
                    defaultValue: pT.listedOptions.description
                  })
                }), (0, fT.jsx)(hT.h, {
                  label: "general:color",
                  circleInfoText: "customLobby:lobbyColorDescription",
                  disabled: "Enter" !== QT,
                  children: (0, fT.jsx)("div", {
                    className: "OtherInput",
                    children: (0, fT.jsx)("input", {
                      type: "color",
                      value: pT.listedOptions.color,
                      onChange: TT => {
                        dT("color", TT.target.value)
                      }
                    })
                  })
                }), (0, fT.jsx)(hT.h, {
                  label: "general:emojis",
                  circleInfoText: "customLobby:lobbyEmojisDescription",
                  disabled: "Enter" !== QT,
                  children: (0, fT.jsx)(kT.e, {
                    onValueChange: (TT, oT) => {
                      dT("emojis", TT)
                    },
                    maxLength: 6,
                    defaultValue: pT.listedOptions.emojis
                  })
                })]
              })]
            }), sT && ZT && (0, fT.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, fT.jsx)("div", {
                className: "SectionTitle",
                children: aT("customLobby:advancedOptions")
              }), (0, fT.jsxs)("div", {
                className: "SectionBody",
                children: [(0, fT.jsx)(hT.h, {
                  label: "classic:worldGenSeed",
                  disabled: "Enter" !== QT,
                  children: (0, fT.jsx)(kT.e, {
                    onValueChange: (TT, oT) => {
                      VT("worldGenSeed", TT)
                    },
                    maxLength: eT.O
                  })
                }), (0, fT.jsx)(hT.h, {
                  label: "classic:disableProtectors",
                  disabled: "Enter" !== QT,
                  children: (0, fT.jsx)(hT.e, {
                    checked: pT.worldOptions.disableProtectors,
                    setChecked: TT => {
                      VT("disableProtectors", TT)
                    }
                  })
                }), (0, fT.jsx)(hT.h, {
                  label: "classic:disableTribeCreation",
                  disabled: "Enter" !== QT,
                  children: (0, fT.jsx)(hT.e, {
                    checked: pT.worldOptions.disableTribeCreation,
                    setChecked: TT => {
                      VT("disableTribeCreation", TT)
                    }
                  })
                }), (0, fT.jsx)(hT.h, {
                  label: "classic:voidDeathHeight",
                  circleInfoText: "classic:voidDeathHeightDescription",
                  disabled: "Enter" !== QT,
                  children: (0, fT.jsx)("input", {
                    type: "number",
                    max: mT.B,
                    value: null !== (WT = pT.worldOptions.voidDeathHeight) && void 0 !== WT ? WT : "",
                    onChange: TT => {
                      const oT = parseInt(TT.target.value);
                      VT("voidDeathHeight", isNaN(oT) ? null : oT)
                    }
                  })
                }), (0, fT.jsx)(hT.h, {
                  label: "classic:disableLobbySpawn",
                  disabled: "Enter" !== QT,
                  children: (0, fT.jsx)(hT.e, {
                    checked: pT.worldOptions.disableLobbySpawn,
                    setChecked: TT => {
                      VT("disableLobbySpawn", TT)
                    }
                  })
                }), (0, fT.jsx)(hT.h, {
                  label: "classic:worldBorder",
                  circleInfoText: "classic:worldBorderDescription",
                  disabled: "Enter" !== QT,
                  children: (0, fT.jsx)("input", {
                    type: "number",
                    min: mT.I,
                    max: mT.D,
                    value: null !== (CT = pT.worldOptions.worldBorder) && void 0 !== CT ? CT : "",
                    onChange: TT => {
                      const oT = parseInt(TT.target.value);
                      VT("worldBorder", isNaN(oT) ? null : oT)
                    }
                  })
                }), (0, fT.jsx)(hT.h, {
                  label: "classic:disableMobs",
                  disabled: "Enter" !== QT,
                  children: (0, fT.jsx)(hT.e, {
                    checked: pT.worldOptions.disableMobs,
                    setChecked: TT => {
                      VT("disableMobs", TT)
                    }
                  })
                })]
              })]
            }), ZT && (0, fT.jsx)(RT.e, {
              callbacks: oo,
              disabled: "Enter" !== QT,
              advancedMode: sT
            })]
          })
        }), (0, fT.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, fT.jsx)(LT.m, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: "Enter" !== QT,
            onClick: () => {
              !async function() {
                if ("Enter" === QT) {
                  OT("Loading"), nT("");
                  try {
                    await DT.e.createCustomLobby(pT), OT("Success")
                  } catch (TT) {
                    nT(TT.message), console.error(TT.message), OT("Enter")
                  }
                }
              }()
            },
            children: aT("general:create")
          }), ZT && (0, fT.jsx)("div", {
            className: "CreateCustomLobbyAdvancedToggle",
            "data-pad-ignore": Io || void 0,
            children: (0, fT.jsx)(hT.h, {
              label: "customLobby:showAdvancedOptions",
              disabled: Io,
              onLabelClick: () => {
                tT(!sT)
              },
              children: (0, fT.jsx)(hT.e, {
                checked: sT,
                setChecked: tT
              })
            })
          }), HT && (0, fT.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: HT
          })]
        })]
      })
    }
  },
  35374: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => BT
    });
    var iT = IT(1042),
      zT = IT.n(iT),
      kT = IT(46),
      WT = IT(4091),
      XT = IT(1083);

    function BT(TT) {
      let {
        locked: oT,
        children: IT
      } = TT;
      const iT = (0, kT.useRef)(null),
        BT = (0, WT.b)(iT, "y");
      return (0, XT.jsx)("div", {
        ref: iT,
        className: zT()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: BT.before,
          CreateCustomLobbyBodyMoreBelow: BT.after
        }),
        "data-pad-ignore": oT || void 0,
        children: IT
      })
    }
  },
  35364: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => ST,
      d: () => LT
    });
    var iT = IT(46),
      zT = IT(1325),
      kT = IT(1171),
      WT = IT(1310),
      XT = IT(3041),
      BT = IT(4410),
      FT = IT(1083);

    function ST(TT) {
      let {
        loading: oT,
        schematics: IT,
        onSchematicPicked: iT,
        selectedSchematicIdList: zT = [],
        disableAutoExport: BT
      } = TT;
      const {
        t: ST
      } = (0, kT.t)();
      return (0, FT.jsxs)("div", {
        className: "SchematicList",
        children: [oT && (0, FT.jsx)(WT.d, {}), !oT && 0 === IT.length && (0, FT.jsx)("div", {
          className: "NoSchematicsText",
          children: ST("worldBuilder:noSavedSchematic")
        }), !oT && IT.map((TT => (0, FT.jsx)(XT.g, {
          source: {
            type: "schematic",
            schematic: TT
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            iT(TT)
          },
          isSelected: zT.includes(TT.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: TT.isAutoExported && BT,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, TT.schematicId)))]
      })
    }

    function DT(TT) {
      let {
        ownedSchematics: oT,
        currentWorldSchematicId: IT,
        onClose: zT
      } = TT;
      const {
        t: WT
      } = (0, kT.t)(), [XT, DT] = (0, iT.useState)(null);
      return (0, FT.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === XT && (0, FT.jsxs)(FT.Fragment, {
          children: [(0, FT.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: WT("worldBuilder:schematicList")
          }), (0, FT.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: WT("worldBuilder:clickSchematicForOptions")
          }), (0, FT.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, FT.jsx)(ST, {
              loading: !1,
              schematics: oT,
              onSchematicPicked: TT => {
                DT(TT)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== XT && (0, FT.jsx)(BT.f, {
          schematic: XT,
          inSourceWorld: XT.schematicId === IT,
          onSchematicUpdate: TT => {
            DT(TT)
          },
          onClose: () => {
            DT(null), zT()
          }
        })]
      })
    }

    function LT(TT) {
      let {
        ownedSchematics: oT,
        currentWorldSchematicId: IT,
        onClose: iT
      } = TT;
      zT.NotificationProvider.showCustomPopup({
        body: TT => (0, FT.jsx)(DT, {
          ownedSchematics: oT,
          currentWorldSchematicId: IT,
          onClose: TT
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: iT,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  35370: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => FT,
      f: () => ST
    });
    IT(46);
    var iT = IT(1042),
      zT = IT.n(iT),
      kT = IT(4137),
      WT = IT(306),
      XT = IT(1171),
      BT = IT(1083);

    function FT(TT) {
      let {
        value: oT,
        onChange: IT,
        showAll: iT,
        disabled: FT = !1
      } = TT;
      const {
        t: ST
      } = (0, XT.t)();
      return (0, BT.jsxs)("div", {
        className: zT()("BloxdForm GamemodeForm", {
          BasicOptions: !iT
        }),
        children: [(0, BT.jsx)("div", {
          className: "SectionTitle",
          children: ST("classic:defaultGamemode")
        }), (0, BT.jsx)("div", {
          className: "SectionBody",
          children: kT.z.map((TT => iT || (0, kT.t)(TT) ? (0, BT.jsx)("button", {
            type: "button",
            className: zT()("WorldGamemode", {
              Selected: oT === TT
            }),
            disabled: FT,
            onClick: () => {
              IT(TT)
            },
            style: {
              "--background-image": `url(${WT.x[TT]})`
            },
            children: WT.t[TT]
          }, TT) : null))
        })]
      })
    }

    function ST(TT) {
      let {
        mapTypes: oT,
        value: IT,
        onChange: iT,
        showAll: FT,
        disabled: ST = !1,
        children: DT
      } = TT;
      const {
        t: LT
      } = (0, XT.t)();
      return (0, BT.jsxs)("div", {
        className: zT()("BloxdForm MapTypeForm", {
          BasicOptions: !FT
        }),
        children: [(0, BT.jsx)("div", {
          className: "SectionTitle",
          children: LT("customLobby:mapType")
        }), (0, BT.jsx)("div", {
          className: "SectionBody",
          children: oT.map((TT => FT || (0, kT.v)(TT) ? (0, BT.jsx)("button", {
            type: "button",
            className: zT()("MapType", {
              Selected: IT === TT
            }),
            disabled: ST,
            onClick: () => {
              iT(TT)
            },
            style: {
              "--background-image": `url(${WT.p[TT]})`
            },
            children: WT.l[TT]
          }, TT) : null))
        }), DT]
      })
    }
  },
  35362: () => {}
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);