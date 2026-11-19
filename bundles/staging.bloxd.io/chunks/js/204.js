export const id = 204;
export const ids = [204];
export const modules = {
  35773: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      CreateCustomLobby: () => HY
    });
    DY(35778);
    var FY = DY(4201),
      AY = DY(61),
      IY = DY(1654),
      RY = DY(1092),
      OY = DY.n(RY),
      gY = DY(2722),
      aY = DY(1159),
      vY = DY(1222),
      uY = DY(4147),
      sY = DY(1437),
      iY = DY(35782),
      yY = DY(1211),
      QY = DY(1330),
      oY = DY(1488),
      WY = DY(19),
      EY = DY(1441),
      mY = DY(625),
      VY = DY(4516),
      SY = DY(778),
      lY = DY(1244),
      TY = DY(1231),
      eY = DY(4529),
      NY = DY(1098),
      BY = DY(35790),
      cY = DY(35794),
      KY = DY(1125);

    function HY(YY) {
      var rY, DY, RY, HY;
      let {
        gameNameWithVariation: zY,
        close: ZY,
        initialDefaultGamemode: CY
      } = YY;
      const {
        t: fY
      } = (0, yY.C)(), jY = (0, oY.useNavigatePreserveSearch)(), [hY, dY] = (0, AY.useState)("Enter"), [JY, MY] = (0, AY.useState)(""), wY = AY.useRef(null), bY = null === (rY = SY.d[zY]) || void 0 === rY ? void 0 : rY.showWorldsInsteadOfCustomLobbies, XY = bY ? 1 : null === (DY = SY.d[zY]) || void 0 === DY ? void 0 : DY.customLobbyCustomSchematicLimit, [qY, pY] = (0, AY.useState)(!bY);
      CY || (CY = "classic_creative" === zY || "classic_creativeFlat" === zY ? "creative" : "classic" === zY ? "peaceful" : "survival");
      const kY = {
        baseOptions: {
          gameNameWithVariation: bY ? "classic" : zY,
          name: "",
          visibility: "unlisted"
        },
        listedOptions: {
          description: "",
          color: "",
          emojis: ""
        },
        mapOptions: {
          mapType: "classic_creativeFlat" === zY ? "flat" : "default",
          schematicIdList: []
        },
        worldOptions: null
      };
      bY && (kY.worldOptions = {
        defaultGamemode: CY,
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
      const [GY, xY] = (0, AY.useState)(kY), [nY, PY] = (0, AY.useState)(null);

      function UY(YY, rY) {
        xY({
          ...GY,
          baseOptions: {
            ...GY.baseOptions,
            [YY]: rY
          }
        })
      }

      function LY(YY, rY) {
        xY({
          ...GY,
          listedOptions: {
            ...GY.listedOptions,
            [YY]: rY
          }
        })
      }

      function tY(YY, rY) {
        xY({
          ...GY,
          worldOptions: {
            ...GY.worldOptions,
            [YY]: rY
          }
        })
      }

      function Yr(YY) {
        xY({
          ...GY,
          mapOptions: {
            ...GY.mapOptions,
            ...YY
          }
        })
      }(0, AY.useEffect)((() => {
        uY.e.getNewStarterName().then((YY => {
          xY((rY => "" !== rY.baseOptions.name ? rY : {
            ...rY,
            baseOptions: {
              ...rY.baseOptions,
              name: YY
            }
          }))
        })).catch((YY => {
          console.error("Error getting new starter name:", YY)
        }))
      }), []), (0, AY.useEffect)((() => {
        "customSchematic" === GY.mapOptions.mapType && null === nY && (0, aY.postJsonWithMetricsCookiesAndJsonResponse)(`${vY.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
          retries: 0,
          minTimeout: 3e3
        }).then((YY => {
          PY(YY)
        }))
      }), [GY.mapOptions.mapType, nY]);
      const rr = {
          tpRequests: {
            isEnabled: () => !GY.worldOptions.disableTpRequests,
            mV: YY => {
              tY("disableTpRequests", !YY)
            }
          },
          spawnProtection: {
            isEnabled: () => GY.worldOptions.spawnProtection,
            mV: YY => {
              tY("spawnProtection", YY)
            }
          },
          spawnReset: {
            isEnabled: () => GY.worldOptions.enableSpawnReset,
            mV: YY => {
              tY("enableSpawnReset", YY)
            }
          },
          smpMarketplace: {
            isEnabled: () => GY.worldOptions.enableSmpMarketplace,
            mV: YY => {
              tY("enableSmpMarketplace", YY)
            }
          },
          survivalGuns: {
            isEnabled: () => GY.worldOptions.enableSurvivalGuns,
            mV: YY => {
              tY("enableSurvivalGuns", YY)
            }
          },
          fallDamage: {
            isEnabled: () => !GY.worldOptions.disableFallDamage,
            mV: YY => {
              tY("disableFallDamage", !YY)
            }
          },
          dayNight: {
            isEnabled: () => GY.worldOptions.enableDayNight,
            mV: YY => {
              tY("enableDayNight", YY)
            }
          }
        },
        Dr = "Enter" !== hY,
        Fr = (0, KY.jsx)(VY.f, {
          className: "NameInput",
          label: "general:name",
          disabled: "Enter" !== hY,
          children: (0, KY.jsx)(IY.d, {
            domRef: wY,
            onValueChange: (YY, rY) => {
              const DY = (0, TY.ub)(YY);
              UY("name", DY), wY.current.value = DY
            },
            maxLength: TY.Q,
            defaultValue: GY.baseOptions.name
          })
        });
      return (0, KY.jsxs)("div", {
        className: OY()("CreateCustomLobby", {
          CreateCustomLobbySuccess: "Success" === hY,
          AdvancedMode: qY
        }),
        children: ["Success" === hY && (0, KY.jsxs)("div", {
          className: "CreateCustomLobbySuccessOverlay",
          children: [(0, KY.jsxs)("div", {
            className: "CreateCustomLobbySuccessTitle FullyFancyText AnimFadeInScaleUp",
            children: [(0, KY.jsx)(NY.e, {
              name: "check"
            }), (0, KY.jsx)(EY.b, {})]
          }), (0, KY.jsx)("div", {
            className: "CreateCustomLobbySuccessButtons AnimFadeInScaleUp",
            children: (0, KY.jsx)(sY.n, {
              padDefaultFocus: !0,
              onClick: () => {
                (0, WY.g)("worldCreation"), jY((0, QY.d)(zY, GY.baseOptions.name))
              },
              children: fY("homePage:joinLobbyName", {
                lobbyName: GY.baseOptions.name
              })
            })
          })]
        }), (0, KY.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, KY.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: fY(bY ? "homePage:createWorld" : "homePage:createCustomLobby")
          })
        }), (0, KY.jsx)(cY.e, {
          locked: Dr,
          children: (0, KY.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [!qY && Fr, qY && (0, KY.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, KY.jsx)("div", {
                className: "SectionTitle",
                children: fY("customLobby:generalOptions")
              }), (0, KY.jsxs)("div", {
                className: "SectionBody",
                children: [Fr, (0, KY.jsx)(VY.f, {
                  label: "customLobby:visibility",
                  circleInfoText: fY("customLobby:visibilityDescription"),
                  disabled: "Enter" !== hY,
                  children: (0, KY.jsx)(gY.b, {
                    options: FY.o.map((YY => ({
                      value: YY,
                      label: FY.g[YY]
                    }))),
                    value: GY.baseOptions.visibility,
                    onChange: YY => {
                      UY("visibility", YY.value)
                    }
                  })
                })]
              })]
            }), bY && (0, KY.jsx)(BY.d, {
              value: GY.worldOptions.defaultGamemode,
              onChange: YY => {
                tY("defaultGamemode", YY)
              },
              showAll: qY,
              disabled: Dr
            }), (bY || !(0, mY.H)(XY) && XY > 0) && (0, KY.jsx)(BY.e, {
              mapTypes: bY ? FY.H : FY.n,
              value: GY.mapOptions.mapType,
              onChange: YY => {
                const rY = {
                  mapType: YY
                };
                "customSchematic" !== YY && (rY.schematicIdList = []), Yr(rY)
              },
              showAll: qY,
              disabled: Dr,
              children: "customSchematic" === GY.mapOptions.mapType && (0, KY.jsxs)(KY.Fragment, {
                children: [(0, KY.jsxs)("div", {
                  className: "SchematicListTitle AnimFadeIn",
                  children: [bY && fY("customLobby:selectWorldSchematic"), !bY && fY("customLobby:selectCustomLobbySchematics", {
                    schematicLimit: XY
                  })]
                }), (0, KY.jsx)("div", {
                  className: OY()("SchematicListContainer AnimFadeIn", {
                    SchematicListContainerDisabled: "Enter" !== hY
                  }),
                  children: (0, KY.jsx)(iY.b, {
                    loading: null === nY,
                    schematics: null !== nY && void 0 !== nY ? nY : [],
                    onSchematicPicked: function(YY) {
                      const rY = GY.mapOptions.schematicIdList;
                      if (rY.includes(YY.schematicId)) Yr({
                        schematicIdList: rY.filter((rY => rY !== YY.schematicId))
                      });
                      else {
                        if (XY && GY.mapOptions.schematicIdList.length >= XY) return;
                        Yr({
                          schematicIdList: [...GY.mapOptions.schematicIdList, YY.schematicId]
                        })
                      }
                    },
                    selectedSchematicIdList: GY.mapOptions.schematicIdList,
                    disableAutoExport: !0
                  })
                })]
              })
            }), qY && (0, KY.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, KY.jsx)("div", {
                className: "SectionTitle",
                children: fY("customLobby:listedOptions")
              }), (0, KY.jsxs)("div", {
                className: "SectionBody",
                children: [(0, KY.jsx)(VY.f, {
                  label: "general:description",
                  className: "CustomLobbyDescription",
                  disabled: "Enter" !== hY,
                  children: (0, KY.jsx)(IY.d, {
                    onValueChange: (YY, rY) => {
                      LY("description", YY)
                    },
                    maxLength: 100,
                    defaultValue: GY.listedOptions.description
                  })
                }), (0, KY.jsx)(VY.f, {
                  label: "general:color",
                  circleInfoText: "customLobby:lobbyColorDescription",
                  disabled: "Enter" !== hY,
                  children: (0, KY.jsx)("div", {
                    className: "OtherInput",
                    children: (0, KY.jsx)("input", {
                      type: "color",
                      value: GY.listedOptions.color,
                      onChange: YY => {
                        LY("color", YY.target.value)
                      }
                    })
                  })
                }), (0, KY.jsx)(VY.f, {
                  label: "general:emojis",
                  circleInfoText: "customLobby:lobbyEmojisDescription",
                  disabled: "Enter" !== hY,
                  children: (0, KY.jsx)(IY.d, {
                    onValueChange: (YY, rY) => {
                      LY("emojis", YY)
                    },
                    maxLength: 6,
                    defaultValue: GY.listedOptions.emojis
                  })
                })]
              })]
            }), qY && bY && (0, KY.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, KY.jsx)("div", {
                className: "SectionTitle",
                children: fY("customLobby:advancedOptions")
              }), (0, KY.jsxs)("div", {
                className: "SectionBody",
                children: [(0, KY.jsx)(VY.f, {
                  label: "classic:worldGenSeed",
                  disabled: "Enter" !== hY,
                  children: (0, KY.jsx)(IY.d, {
                    onValueChange: (YY, rY) => {
                      tY("worldGenSeed", YY)
                    },
                    maxLength: TY.Q
                  })
                }), (0, KY.jsx)(VY.f, {
                  label: "classic:disableProtectors",
                  disabled: "Enter" !== hY,
                  children: (0, KY.jsx)(VY.d, {
                    checked: GY.worldOptions.disableProtectors,
                    setChecked: YY => {
                      tY("disableProtectors", YY)
                    }
                  })
                }), (0, KY.jsx)(VY.f, {
                  label: "classic:disableTribeCreation",
                  disabled: "Enter" !== hY,
                  children: (0, KY.jsx)(VY.d, {
                    checked: GY.worldOptions.disableTribeCreation,
                    setChecked: YY => {
                      tY("disableTribeCreation", YY)
                    }
                  })
                }), (0, KY.jsx)(VY.f, {
                  label: "classic:voidDeathHeight",
                  circleInfoText: "classic:voidDeathHeightDescription",
                  disabled: "Enter" !== hY,
                  children: (0, KY.jsx)("input", {
                    type: "number",
                    max: lY.E,
                    value: null !== (RY = GY.worldOptions.voidDeathHeight) && void 0 !== RY ? RY : "",
                    onChange: YY => {
                      const rY = parseInt(YY.target.value);
                      tY("voidDeathHeight", isNaN(rY) ? null : rY)
                    }
                  })
                }), (0, KY.jsx)(VY.f, {
                  label: "classic:disableLobbySpawn",
                  disabled: "Enter" !== hY,
                  children: (0, KY.jsx)(VY.d, {
                    checked: GY.worldOptions.disableLobbySpawn,
                    setChecked: YY => {
                      tY("disableLobbySpawn", YY)
                    }
                  })
                }), (0, KY.jsx)(VY.f, {
                  label: "classic:worldBorder",
                  circleInfoText: "classic:worldBorderDescription",
                  disabled: "Enter" !== hY,
                  children: (0, KY.jsx)("input", {
                    type: "number",
                    min: lY.K,
                    max: lY.G,
                    value: null !== (HY = GY.worldOptions.worldBorder) && void 0 !== HY ? HY : "",
                    onChange: YY => {
                      const rY = parseInt(YY.target.value);
                      tY("worldBorder", isNaN(rY) ? null : rY)
                    }
                  })
                }), (0, KY.jsx)(VY.f, {
                  label: "classic:disableMobs",
                  disabled: "Enter" !== hY,
                  children: (0, KY.jsx)(VY.d, {
                    checked: GY.worldOptions.disableMobs,
                    setChecked: YY => {
                      tY("disableMobs", YY)
                    }
                  })
                })]
              })]
            }), bY && (0, KY.jsx)(eY.c, {
              callbacks: rr,
              disabled: "Enter" !== hY,
              advancedMode: qY
            })]
          })
        }), (0, KY.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, KY.jsx)(sY.n, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: "Enter" !== hY,
            onClick: () => {
              !async function() {
                if ("Enter" === hY) {
                  dY("Loading"), MY("");
                  try {
                    await uY.e.createCustomLobby(GY), dY("Success")
                  } catch (YY) {
                    MY(YY.message), console.error(YY.message), dY("Enter")
                  }
                }
              }()
            },
            children: fY("general:create")
          }), bY && (0, KY.jsx)("div", {
            className: "CreateCustomLobbyAdvancedToggle",
            "data-pad-ignore": Dr || void 0,
            children: (0, KY.jsx)(VY.f, {
              label: "customLobby:showAdvancedOptions",
              disabled: Dr,
              onLabelClick: () => {
                pY(!qY)
              },
              children: (0, KY.jsx)(VY.d, {
                checked: qY,
                setChecked: pY
              })
            })
          }), JY && (0, KY.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: JY
          })]
        })]
      })
    }
  },
  35794: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => gY
    });
    var FY = DY(1092),
      AY = DY.n(FY),
      IY = DY(61),
      RY = DY(4140),
      OY = DY(1125);

    function gY(YY) {
      let {
        locked: rY,
        children: DY
      } = YY;
      const FY = (0, IY.useRef)(null),
        gY = (0, RY.c)(FY, "y");
      return (0, OY.jsx)("div", {
        ref: FY,
        className: AY()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: gY.before,
          CreateCustomLobbyBodyMoreBelow: gY.after
        }),
        "data-pad-ignore": rY || void 0,
        children: DY
      })
    }
  },
  35782: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => vY,
      d: () => sY
    });
    var FY = DY(61),
      AY = DY(1346),
      IY = DY(1211),
      RY = DY(1337),
      OY = DY(3061),
      gY = DY(4507),
      aY = DY(1125);

    function vY(YY) {
      let {
        loading: rY,
        schematics: DY,
        onSchematicPicked: FY,
        selectedSchematicIdList: AY = [],
        disableAutoExport: gY
      } = YY;
      const {
        t: vY
      } = (0, IY.C)();
      return (0, aY.jsxs)("div", {
        className: "SchematicList",
        children: [rY && (0, aY.jsx)(RY.c, {}), !rY && 0 === DY.length && (0, aY.jsx)("div", {
          className: "NoSchematicsText",
          children: vY("worldBuilder:noSavedSchematic")
        }), !rY && DY.map((YY => (0, aY.jsx)(OY.g, {
          source: {
            type: "schematic",
            schematic: YY
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            FY(YY)
          },
          isSelected: AY.includes(YY.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: YY.isAutoExported && gY,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, YY.schematicId)))]
      })
    }

    function uY(YY) {
      let {
        ownedSchematics: rY,
        currentWorldSchematicId: DY,
        onClose: AY
      } = YY;
      const {
        t: RY
      } = (0, IY.C)(), [OY, uY] = (0, FY.useState)(null);
      return (0, aY.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === OY && (0, aY.jsxs)(aY.Fragment, {
          children: [(0, aY.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: RY("worldBuilder:schematicList")
          }), (0, aY.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: RY("worldBuilder:clickSchematicForOptions")
          }), (0, aY.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, aY.jsx)(vY, {
              loading: !1,
              schematics: rY,
              onSchematicPicked: YY => {
                uY(YY)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== OY && (0, aY.jsx)(gY.g, {
          schematic: OY,
          inSourceWorld: OY.schematicId === DY,
          onSchematicUpdate: YY => {
            uY(YY)
          },
          onClose: () => {
            uY(null), AY()
          }
        })]
      })
    }

    function sY(YY) {
      let {
        ownedSchematics: rY,
        currentWorldSchematicId: DY,
        onClose: FY
      } = YY;
      AY.NotificationProvider.showCustomPopup({
        body: YY => (0, aY.jsx)(uY, {
          ownedSchematics: rY,
          currentWorldSchematicId: DY,
          onClose: YY
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: FY,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  35790: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => aY,
      e: () => vY
    });
    DY(61);
    var FY = DY(1092),
      AY = DY.n(FY),
      IY = DY(4201),
      RY = DY(332),
      OY = DY(1211),
      gY = DY(1125);

    function aY(YY) {
      let {
        value: rY,
        onChange: DY,
        showAll: FY,
        disabled: aY = !1
      } = YY;
      const {
        t: vY
      } = (0, OY.C)();
      return (0, gY.jsxs)("div", {
        className: AY()("BloxdForm GamemodeForm", {
          BasicOptions: !FY
        }),
        children: [(0, gY.jsx)("div", {
          className: "SectionTitle",
          children: vY("classic:defaultGamemode")
        }), (0, gY.jsx)("div", {
          className: "SectionBody",
          children: IY.D.map((YY => FY || (0, IY.v)(YY) ? (0, gY.jsx)("button", {
            type: "button",
            className: AY()("WorldGamemode", {
              Selected: rY === YY
            }),
            disabled: aY,
            onClick: () => {
              DY(YY)
            },
            style: {
              "--background-image": `url(${RY.v[YY]})`
            },
            children: RY.u[YY]
          }, YY) : null))
        })]
      })
    }

    function vY(YY) {
      let {
        mapTypes: rY,
        value: DY,
        onChange: FY,
        showAll: aY,
        disabled: vY = !1,
        children: uY
      } = YY;
      const {
        t: sY
      } = (0, OY.C)();
      return (0, gY.jsxs)("div", {
        className: AY()("BloxdForm MapTypeForm", {
          BasicOptions: !aY
        }),
        children: [(0, gY.jsx)("div", {
          className: "SectionTitle",
          children: sY("customLobby:mapType")
        }), (0, gY.jsx)("div", {
          className: "SectionBody",
          children: rY.map((YY => aY || (0, IY.z)(YY) ? (0, gY.jsx)("button", {
            type: "button",
            className: AY()("MapType", {
              Selected: DY === YY
            }),
            disabled: vY,
            onClick: () => {
              FY(YY)
            },
            style: {
              "--background-image": `url(${RY.q[YY]})`
            },
            children: RY.m[YY]
          }, YY) : null))
        }), uY]
      })
    }
  },
  35778: () => {}
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);