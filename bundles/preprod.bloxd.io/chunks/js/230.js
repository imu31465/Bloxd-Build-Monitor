export const id = 230;
export const ids = [230];
export const modules = {
  37036: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      CreateCustomLobby: () => wU
    });
    zU(37039);
    var cU = zU(5057),
      yU = zU(61),
      QU = zU(1726),
      AU = zU(1106),
      FU = zU.n(AU),
      oU = zU(3490),
      DU = zU(1131),
      EU = zU(1203),
      YU = zU(5026),
      NU = zU(1494),
      IU = zU(37046),
      pU = zU(1193),
      aU = zU(1376),
      tU = zU(1568),
      gU = zU(27),
      kU = zU(1498),
      GU = zU(646),
      BU = zU(5458),
      ZU = zU(825),
      RU = zU(1258),
      PU = zU(1236),
      WU = zU(5471),
      dU = zU(1390),
      LU = zU(37055),
      eU = zU(37060),
      CU = zU(1305);

    function wU(UU) {
      var XU, zU, AU, wU;
      let {
        gameNameWithVariation: qU,
        close: OU,
        initialDefaultGamemode: SU
      } = UU;
      const {
        t: rU
      } = (0, pU.I)(), uU = (0, tU.useNavigatePreserveSearch)(), [fU, iU] = (0, yU.useState)("Enter"), [HU, MU] = (0, yU.useState)(""), vU = yU.useRef(null), VU = null === (XU = ZU.d[qU]) || void 0 === XU ? void 0 : XU.showWorldsInsteadOfCustomLobbies, sU = VU ? 1 : null === (zU = ZU.d[qU]) || void 0 === zU ? void 0 : zU.customLobbyCustomSchematicLimit, [nU, mU] = (0, yU.useState)(!VU);
      SU || (SU = "classic_creative" === qU || "classic_creativeFlat" === qU ? "creative" : "classic" === qU ? "peaceful" : "survival");
      const lU = {
        baseOptions: {
          gameNameWithVariation: VU ? "classic" : qU,
          name: "",
          visibility: "unlisted"
        },
        listedOptions: {
          description: "",
          color: "",
          emojis: ""
        },
        mapOptions: {
          mapType: "classic_creativeFlat" === qU ? "flat" : "default",
          schematicIdList: []
        },
        worldOptions: null
      };
      VU && (lU.worldOptions = {
        defaultGamemode: SU,
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
      const [xU, JU] = (0, yU.useState)(lU), [jU, KU] = (0, yU.useState)(null);

      function bU(UU, XU) {
        JU({
          ...xU,
          baseOptions: {
            ...xU.baseOptions,
            [UU]: XU
          }
        })
      }

      function TU(UU, XU) {
        JU({
          ...xU,
          listedOptions: {
            ...xU.listedOptions,
            [UU]: XU
          }
        })
      }

      function hU(UU, XU) {
        JU({
          ...xU,
          worldOptions: {
            ...xU.worldOptions,
            [UU]: XU
          }
        })
      }

      function UX(UU) {
        JU({
          ...xU,
          mapOptions: {
            ...xU.mapOptions,
            ...UU
          }
        })
      }(0, yU.useEffect)((() => {
        YU.d.getNewStarterName().then((UU => {
          JU((XU => "" !== XU.baseOptions.name ? XU : {
            ...XU,
            baseOptions: {
              ...XU.baseOptions,
              name: UU
            }
          }))
        })).catch((UU => {
          console.error("Error getting new starter name:", UU)
        }))
      }), []), (0, yU.useEffect)((() => {
        "customSchematic" === xU.mapOptions.mapType && null === jU && (0, DU.postJsonWithMetricsCookiesAndJsonResponse)(`${EU.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
          retries: 0,
          minTimeout: 3e3
        }).then((UU => {
          KU(UU)
        }))
      }), [xU.mapOptions.mapType, jU]);
      const XX = {
          tpRequests: {
            isEnabled: () => !xU.worldOptions.disableTpRequests,
            YC: UU => {
              hU("disableTpRequests", !UU)
            }
          },
          spawnProtection: {
            isEnabled: () => xU.worldOptions.spawnProtection,
            YC: UU => {
              hU("spawnProtection", UU)
            }
          },
          spawnReset: {
            isEnabled: () => xU.worldOptions.enableSpawnReset,
            YC: UU => {
              hU("enableSpawnReset", UU)
            }
          },
          smpMarketplace: {
            isEnabled: () => xU.worldOptions.enableSmpMarketplace,
            YC: UU => {
              hU("enableSmpMarketplace", UU)
            }
          },
          survivalGuns: {
            isEnabled: () => xU.worldOptions.enableSurvivalGuns,
            YC: UU => {
              hU("enableSurvivalGuns", UU)
            }
          },
          fallDamage: {
            isEnabled: () => !xU.worldOptions.disableFallDamage,
            YC: UU => {
              hU("disableFallDamage", !UU)
            }
          },
          dayNight: {
            isEnabled: () => xU.worldOptions.enableDayNight,
            YC: UU => {
              hU("enableDayNight", UU)
            }
          }
        },
        zX = "Enter" !== fU,
        cX = (0, CU.jsx)(BU.g, {
          className: "NameInput",
          label: "general:name",
          disabled: "Enter" !== fU,
          children: (0, CU.jsx)(QU.e, {
            domRef: vU,
            onValueChange: (UU, XU) => {
              const zU = (0, PU.ib)(UU);
              bU("name", zU), vU.current.value = zU
            },
            maxLength: PU.H,
            defaultValue: xU.baseOptions.name
          })
        });
      return (0, CU.jsxs)("div", {
        className: FU()("CreateCustomLobby", {
          CreateCustomLobbySuccess: "Success" === fU,
          AdvancedMode: nU
        }),
        children: ["Success" === fU && (0, CU.jsxs)("div", {
          className: "CreateCustomLobbySuccessOverlay",
          children: [(0, CU.jsxs)("div", {
            className: "CreateCustomLobbySuccessTitle FullyFancyText AnimFadeInScaleUp",
            children: [(0, CU.jsx)(dU.d, {
              name: "check"
            }), (0, CU.jsx)(kU.e, {})]
          }), (0, CU.jsx)("div", {
            className: "CreateCustomLobbySuccessButtons AnimFadeInScaleUp",
            children: (0, CU.jsx)(NU.l, {
              padDefaultFocus: !0,
              onClick: () => {
                (0, gU.n)("worldCreation"), uU((0, aU.b)(qU, xU.baseOptions.name))
              },
              children: rU("homePage:joinLobbyName", {
                lobbyName: xU.baseOptions.name
              })
            })
          })]
        }), (0, CU.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, CU.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: rU(VU ? "homePage:createWorld" : "homePage:createCustomLobby")
          })
        }), (0, CU.jsx)(eU.e, {
          locked: zX,
          children: (0, CU.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [!nU && cX, nU && (0, CU.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, CU.jsx)("div", {
                className: "SectionTitle",
                children: rU("customLobby:generalOptions")
              }), (0, CU.jsxs)("div", {
                className: "SectionBody",
                children: [cX, (0, CU.jsx)(BU.g, {
                  label: "customLobby:visibility",
                  circleInfoText: rU("customLobby:visibilityDescription"),
                  disabled: "Enter" !== fU,
                  children: (0, CU.jsx)(oU.d, {
                    options: cU.q.map((UU => ({
                      value: UU,
                      label: cU.e[UU]
                    }))),
                    value: xU.baseOptions.visibility,
                    onChange: UU => {
                      bU("visibility", UU.value)
                    }
                  })
                })]
              })]
            }), VU && (0, CU.jsx)(LU.c, {
              value: xU.worldOptions.defaultGamemode,
              onChange: UU => {
                hU("defaultGamemode", UU)
              },
              showAll: nU,
              disabled: zX
            }), (VU || !(0, GU.P)(sU) && sU > 0) && (0, CU.jsx)(LU.g, {
              mapTypes: VU ? cU.F : cU.o,
              value: xU.mapOptions.mapType,
              onChange: UU => {
                const XU = {
                  mapType: UU
                };
                "customSchematic" !== UU && (XU.schematicIdList = []), UX(XU)
              },
              showAll: nU,
              disabled: zX,
              children: "customSchematic" === xU.mapOptions.mapType && (0, CU.jsxs)(CU.Fragment, {
                children: [(0, CU.jsxs)("div", {
                  className: "SchematicListTitle AnimFadeIn",
                  children: [VU && rU("customLobby:selectWorldSchematic"), !VU && rU("customLobby:selectCustomLobbySchematics", {
                    schematicLimit: sU
                  })]
                }), (0, CU.jsx)("div", {
                  className: FU()("SchematicListContainer AnimFadeIn", {
                    SchematicListContainerDisabled: "Enter" !== fU
                  }),
                  children: (0, CU.jsx)(IU.d, {
                    loading: null === jU,
                    schematics: null !== jU && void 0 !== jU ? jU : [],
                    onSchematicPicked: function(UU) {
                      const XU = xU.mapOptions.schematicIdList;
                      if (XU.includes(UU.schematicId)) UX({
                        schematicIdList: XU.filter((XU => XU !== UU.schematicId))
                      });
                      else {
                        if (sU && xU.mapOptions.schematicIdList.length >= sU) return;
                        UX({
                          schematicIdList: [...xU.mapOptions.schematicIdList, UU.schematicId]
                        })
                      }
                    },
                    selectedSchematicIdList: xU.mapOptions.schematicIdList,
                    disableAutoExport: !0
                  })
                })]
              })
            }), nU && (0, CU.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, CU.jsx)("div", {
                className: "SectionTitle",
                children: rU("customLobby:listedOptions")
              }), (0, CU.jsxs)("div", {
                className: "SectionBody",
                children: [(0, CU.jsx)(BU.g, {
                  label: "general:description",
                  className: "CustomLobbyDescription",
                  disabled: "Enter" !== fU,
                  children: (0, CU.jsx)(QU.e, {
                    onValueChange: (UU, XU) => {
                      TU("description", UU)
                    },
                    maxLength: 100,
                    defaultValue: xU.listedOptions.description
                  })
                }), (0, CU.jsx)(BU.g, {
                  label: "general:color",
                  circleInfoText: "customLobby:lobbyColorDescription",
                  disabled: "Enter" !== fU,
                  children: (0, CU.jsx)("div", {
                    className: "OtherInput",
                    children: (0, CU.jsx)("input", {
                      type: "color",
                      value: xU.listedOptions.color,
                      onChange: UU => {
                        TU("color", UU.target.value)
                      }
                    })
                  })
                }), (0, CU.jsx)(BU.g, {
                  label: "general:emojis",
                  circleInfoText: "customLobby:lobbyEmojisDescription",
                  disabled: "Enter" !== fU,
                  children: (0, CU.jsx)(QU.e, {
                    onValueChange: (UU, XU) => {
                      TU("emojis", UU)
                    },
                    maxLength: 6,
                    defaultValue: xU.listedOptions.emojis
                  })
                })]
              })]
            }), nU && VU && (0, CU.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, CU.jsx)("div", {
                className: "SectionTitle",
                children: rU("customLobby:advancedOptions")
              }), (0, CU.jsxs)("div", {
                className: "SectionBody",
                children: [(0, CU.jsx)(BU.g, {
                  label: "classic:worldGenSeed",
                  disabled: "Enter" !== fU,
                  children: (0, CU.jsx)(QU.e, {
                    onValueChange: (UU, XU) => {
                      hU("worldGenSeed", UU)
                    },
                    maxLength: PU.H
                  })
                }), (0, CU.jsx)(BU.g, {
                  label: "classic:disableProtectors",
                  disabled: "Enter" !== fU,
                  children: (0, CU.jsx)(BU.e, {
                    checked: xU.worldOptions.disableProtectors,
                    setChecked: UU => {
                      hU("disableProtectors", UU)
                    }
                  })
                }), (0, CU.jsx)(BU.g, {
                  label: "classic:disableTribeCreation",
                  disabled: "Enter" !== fU,
                  children: (0, CU.jsx)(BU.e, {
                    checked: xU.worldOptions.disableTribeCreation,
                    setChecked: UU => {
                      hU("disableTribeCreation", UU)
                    }
                  })
                }), (0, CU.jsx)(BU.g, {
                  label: "classic:voidDeathHeight",
                  circleInfoText: "classic:voidDeathHeightDescription",
                  disabled: "Enter" !== fU,
                  children: (0, CU.jsx)("input", {
                    type: "number",
                    max: RU.D,
                    value: null !== (AU = xU.worldOptions.voidDeathHeight) && void 0 !== AU ? AU : "",
                    onChange: UU => {
                      const XU = parseInt(UU.target.value);
                      hU("voidDeathHeight", isNaN(XU) ? null : XU)
                    }
                  })
                }), (0, CU.jsx)(BU.g, {
                  label: "classic:disableLobbySpawn",
                  disabled: "Enter" !== fU,
                  children: (0, CU.jsx)(BU.e, {
                    checked: xU.worldOptions.disableLobbySpawn,
                    setChecked: UU => {
                      hU("disableLobbySpawn", UU)
                    }
                  })
                }), (0, CU.jsx)(BU.g, {
                  label: "classic:worldBorder",
                  circleInfoText: "classic:worldBorderDescription",
                  disabled: "Enter" !== fU,
                  children: (0, CU.jsx)("input", {
                    type: "number",
                    min: RU.J,
                    max: RU.F,
                    value: null !== (wU = xU.worldOptions.worldBorder) && void 0 !== wU ? wU : "",
                    onChange: UU => {
                      const XU = parseInt(UU.target.value);
                      hU("worldBorder", isNaN(XU) ? null : XU)
                    }
                  })
                }), (0, CU.jsx)(BU.g, {
                  label: "classic:disableMobs",
                  disabled: "Enter" !== fU,
                  children: (0, CU.jsx)(BU.e, {
                    checked: xU.worldOptions.disableMobs,
                    setChecked: UU => {
                      hU("disableMobs", UU)
                    }
                  })
                })]
              })]
            }), VU && (0, CU.jsx)(WU.b, {
              callbacks: XX,
              disabled: "Enter" !== fU,
              advancedMode: nU
            })]
          })
        }), (0, CU.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, CU.jsx)(NU.l, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: "Enter" !== fU,
            onClick: () => {
              !async function() {
                if ("Enter" === fU) {
                  iU("Loading"), MU("");
                  try {
                    await YU.d.createCustomLobby(xU), iU("Success")
                  } catch (UU) {
                    MU(UU.message), console.error(UU.message), iU("Enter")
                  }
                }
              }()
            },
            children: rU("general:create")
          }), VU && (0, CU.jsx)("div", {
            className: "CreateCustomLobbyAdvancedToggle",
            "data-pad-ignore": zX || void 0,
            children: (0, CU.jsx)(BU.g, {
              label: "customLobby:showAdvancedOptions",
              disabled: zX,
              onLabelClick: () => {
                mU(!nU)
              },
              children: (0, CU.jsx)(BU.e, {
                checked: nU,
                setChecked: mU
              })
            })
          }), HU && (0, CU.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: HU
          })]
        })]
      })
    }
  },
  37060: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => oU
    });
    var cU = zU(1106),
      yU = zU.n(cU),
      QU = zU(61),
      AU = zU(5014),
      FU = zU(1305);

    function oU(UU) {
      let {
        locked: XU,
        children: zU
      } = UU;
      const cU = (0, QU.useRef)(null),
        oU = (0, AU.b)(cU, "y");
      return (0, FU.jsx)("div", {
        ref: cU,
        className: yU()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: oU.before,
          CreateCustomLobbyBodyMoreBelow: oU.after
        }),
        "data-pad-ignore": XU || void 0,
        children: zU
      })
    }
  },
  37046: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => EU,
      f: () => NU
    });
    var cU = zU(61),
      yU = zU(1410),
      QU = zU(1193),
      AU = zU(1384),
      FU = zU(3869),
      oU = zU(5454),
      DU = zU(1305);

    function EU(UU) {
      let {
        loading: XU,
        schematics: zU,
        onSchematicPicked: cU,
        selectedSchematicIdList: yU = [],
        disableAutoExport: oU
      } = UU;
      const {
        t: EU
      } = (0, QU.I)();
      return (0, DU.jsxs)("div", {
        className: "SchematicList",
        children: [XU && (0, DU.jsx)(AU.b, {}), !XU && 0 === zU.length && (0, DU.jsx)("div", {
          className: "NoSchematicsText",
          children: EU("worldBuilder:noSavedSchematic")
        }), !XU && zU.map((UU => (0, DU.jsx)(FU.g, {
          source: {
            type: "schematic",
            schematic: UU
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            cU(UU)
          },
          isSelected: yU.includes(UU.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: UU.isAutoExported && oU,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, UU.schematicId)))]
      })
    }

    function YU(UU) {
      let {
        ownedSchematics: XU,
        currentWorldSchematicId: zU,
        onClose: yU
      } = UU;
      const {
        t: AU
      } = (0, QU.I)(), [FU, YU] = (0, cU.useState)(null);
      return (0, DU.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === FU && (0, DU.jsxs)(DU.Fragment, {
          children: [(0, DU.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: AU("worldBuilder:schematicList")
          }), (0, DU.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: AU("worldBuilder:clickSchematicForOptions")
          }), (0, DU.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, DU.jsx)(EU, {
              loading: !1,
              schematics: XU,
              onSchematicPicked: UU => {
                YU(UU)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== FU && (0, DU.jsx)(oU.e, {
          schematic: FU,
          inSourceWorld: FU.schematicId === zU,
          onSchematicUpdate: UU => {
            YU(UU)
          },
          onClose: () => {
            YU(null), yU()
          }
        })]
      })
    }

    function NU(UU) {
      let {
        ownedSchematics: XU,
        currentWorldSchematicId: zU,
        onClose: cU
      } = UU;
      yU.NotificationProvider.showCustomPopup({
        body: UU => (0, DU.jsx)(YU, {
          ownedSchematics: XU,
          currentWorldSchematicId: zU,
          onClose: UU
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: cU,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  37055: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => DU,
      g: () => EU
    });
    zU(61);
    var cU = zU(1106),
      yU = zU.n(cU),
      QU = zU(5057),
      AU = zU(320),
      FU = zU(1193),
      oU = zU(1305);

    function DU(UU) {
      let {
        value: XU,
        onChange: zU,
        showAll: cU,
        disabled: DU = !1
      } = UU;
      const {
        t: EU
      } = (0, FU.I)();
      return (0, oU.jsxs)("div", {
        className: yU()("BloxdForm GamemodeForm", {
          BasicOptions: !cU
        }),
        children: [(0, oU.jsx)("div", {
          className: "SectionTitle",
          children: EU("classic:defaultGamemode")
        }), (0, oU.jsx)("div", {
          className: "SectionBody",
          children: QU.E.map((UU => cU || (0, QU.t)(UU) ? (0, oU.jsx)("button", {
            type: "button",
            className: yU()("WorldGamemode", {
              Selected: XU === UU
            }),
            disabled: DU,
            onClick: () => {
              zU(UU)
            },
            style: {
              "--background-image": `url(${AU.w[UU]})`
            },
            children: AU.u[UU]
          }, UU) : null))
        })]
      })
    }

    function EU(UU) {
      let {
        mapTypes: XU,
        value: zU,
        onChange: cU,
        showAll: DU,
        disabled: EU = !1,
        children: YU
      } = UU;
      const {
        t: NU
      } = (0, FU.I)();
      return (0, oU.jsxs)("div", {
        className: yU()("BloxdForm MapTypeForm", {
          BasicOptions: !DU
        }),
        children: [(0, oU.jsx)("div", {
          className: "SectionTitle",
          children: NU("customLobby:mapType")
        }), (0, oU.jsx)("div", {
          className: "SectionBody",
          children: XU.map((UU => DU || (0, QU.x)(UU) ? (0, oU.jsx)("button", {
            type: "button",
            className: yU()("MapType", {
              Selected: zU === UU
            }),
            disabled: EU,
            onClick: () => {
              cU(UU)
            },
            style: {
              "--background-image": `url(${AU.q[UU]})`
            },
            children: AU.m[UU]
          }, UU) : null))
        }), YU]
      })
    }
  },
  37039: () => {}
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);