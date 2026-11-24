export const id = 217;
export const ids = [217];
export const modules = {
  36415: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      CreateCustomLobby: () => tT
    });
    mT(36419);
    var WT = mT(4719),
      zT = mT(63),
      MT = mT(1792),
      gT = mT(1126),
      nT = mT.n(gT),
      HT = mT(3267),
      kT = mT(1231),
      jT = mT(1302),
      lT = mT(4686),
      LT = mT(1569),
      pT = mT(36424),
      BT = mT(1288),
      ZT = mT(1437),
      cT = mT(1633),
      vT = mT(25),
      fT = mT(1576),
      qT = mT(653),
      iT = mT(5041),
      bT = mT(825),
      OT = mT(1336),
      eT = mT(1321),
      YT = mT(5048),
      JT = mT(1135),
      xT = mT(36432),
      dT = mT(36435),
      wT = mT(1188);

    function tT(TT) {
      var UT, mT, gT, tT;
      let {
        gameNameWithVariation: aT,
        close: yT,
        initialDefaultGamemode: XT
      } = TT;
      const {
        t: IT
      } = (0, BT.z)(), QT = (0, cT.useNavigatePreserveSearch)(), [sT, FT] = (0, zT.useState)("Enter"), [PT, VT] = (0, zT.useState)(""), uT = zT.useRef(null), CT = null === (UT = bT.d[aT]) || void 0 === UT ? void 0 : UT.showWorldsInsteadOfCustomLobbies, rT = CT ? 1 : null === (mT = bT.d[aT]) || void 0 === mT ? void 0 : mT.customLobbyCustomSchematicLimit, [KT, ST] = (0, zT.useState)(!CT);
      XT || (XT = "classic_creative" === aT || "classic_creativeFlat" === aT ? "creative" : "classic" === aT ? "peaceful" : "survival");
      const GT = {
        baseOptions: {
          gameNameWithVariation: CT ? "classic" : aT,
          name: "",
          visibility: "unlisted"
        },
        listedOptions: {
          description: "",
          color: "",
          emojis: ""
        },
        mapOptions: {
          mapType: "classic_creativeFlat" === aT ? "flat" : "default",
          schematicIdList: []
        },
        worldOptions: null
      };
      CT && (GT.worldOptions = {
        defaultGamemode: XT,
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
      const [NT, ET] = (0, zT.useState)(GT), [hT, DT] = (0, zT.useState)(null);

      function oT(TT, UT) {
        ET({
          ...NT,
          baseOptions: {
            ...NT.baseOptions,
            [TT]: UT
          }
        })
      }

      function AT(TT, UT) {
        ET({
          ...NT,
          listedOptions: {
            ...NT.listedOptions,
            [TT]: UT
          }
        })
      }

      function RT(TT, UT) {
        ET({
          ...NT,
          worldOptions: {
            ...NT.worldOptions,
            [TT]: UT
          }
        })
      }

      function TU(TT) {
        ET({
          ...NT,
          mapOptions: {
            ...NT.mapOptions,
            ...TT
          }
        })
      }(0, zT.useEffect)((() => {
        lT.d.getNewStarterName().then((TT => {
          ET((UT => "" !== UT.baseOptions.name ? UT : {
            ...UT,
            baseOptions: {
              ...UT.baseOptions,
              name: TT
            }
          }))
        })).catch((TT => {
          console.error("Error getting new starter name:", TT)
        }))
      }), []), (0, zT.useEffect)((() => {
        "customSchematic" === NT.mapOptions.mapType && null === hT && (0, kT.postJsonWithMetricsCookiesAndJsonResponse)(`${jT.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
          retries: 0,
          minTimeout: 3e3
        }).then((TT => {
          DT(TT)
        }))
      }), [NT.mapOptions.mapType, hT]);
      const UU = {
          tpRequests: {
            isEnabled: () => !NT.worldOptions.disableTpRequests,
            Qy: TT => {
              RT("disableTpRequests", !TT)
            }
          },
          spawnProtection: {
            isEnabled: () => NT.worldOptions.spawnProtection,
            Qy: TT => {
              RT("spawnProtection", TT)
            }
          },
          spawnReset: {
            isEnabled: () => NT.worldOptions.enableSpawnReset,
            Qy: TT => {
              RT("enableSpawnReset", TT)
            }
          },
          smpMarketplace: {
            isEnabled: () => NT.worldOptions.enableSmpMarketplace,
            Qy: TT => {
              RT("enableSmpMarketplace", TT)
            }
          },
          survivalGuns: {
            isEnabled: () => NT.worldOptions.enableSurvivalGuns,
            Qy: TT => {
              RT("enableSurvivalGuns", TT)
            }
          },
          fallDamage: {
            isEnabled: () => !NT.worldOptions.disableFallDamage,
            Qy: TT => {
              RT("disableFallDamage", !TT)
            }
          },
          dayNight: {
            isEnabled: () => NT.worldOptions.enableDayNight,
            Qy: TT => {
              RT("enableDayNight", TT)
            }
          }
        },
        mU = "Enter" !== sT,
        WU = (0, wT.jsx)(iT.f, {
          className: "NameInput",
          label: "general:name",
          disabled: "Enter" !== sT,
          children: (0, wT.jsx)(MT.e, {
            domRef: uT,
            onValueChange: (TT, UT) => {
              const mT = (0, eT.Ab)(TT);
              oT("name", mT), uT.current.value = mT
            },
            maxLength: eT.U,
            defaultValue: NT.baseOptions.name
          })
        });
      return (0, wT.jsxs)("div", {
        className: nT()("CreateCustomLobby", {
          CreateCustomLobbySuccess: "Success" === sT,
          AdvancedMode: KT
        }),
        children: ["Success" === sT && (0, wT.jsxs)("div", {
          className: "CreateCustomLobbySuccessOverlay",
          children: [(0, wT.jsxs)("div", {
            className: "CreateCustomLobbySuccessTitle FullyFancyText AnimFadeInScaleUp",
            children: [(0, wT.jsx)(JT.c, {
              name: "check"
            }), (0, wT.jsx)(fT.b, {})]
          }), (0, wT.jsx)("div", {
            className: "CreateCustomLobbySuccessButtons AnimFadeInScaleUp",
            children: (0, wT.jsx)(LT.l, {
              padDefaultFocus: !0,
              onClick: () => {
                (0, vT.e)("worldCreation"), QT((0, ZT.d)(aT, NT.baseOptions.name))
              },
              children: IT("homePage:joinLobbyName", {
                lobbyName: NT.baseOptions.name
              })
            })
          })]
        }), (0, wT.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, wT.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: IT(CT ? "homePage:createWorld" : "homePage:createCustomLobby")
          })
        }), (0, wT.jsx)(dT.b, {
          locked: mU,
          children: (0, wT.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [!KT && WU, KT && (0, wT.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, wT.jsx)("div", {
                className: "SectionTitle",
                children: IT("customLobby:generalOptions")
              }), (0, wT.jsxs)("div", {
                className: "SectionBody",
                children: [WU, (0, wT.jsx)(iT.f, {
                  label: "customLobby:visibility",
                  circleInfoText: IT("customLobby:visibilityDescription"),
                  disabled: "Enter" !== sT,
                  children: (0, wT.jsx)(HT.d, {
                    options: WT.r.map((TT => ({
                      value: TT,
                      label: WT.e[TT]
                    }))),
                    value: NT.baseOptions.visibility,
                    onChange: TT => {
                      oT("visibility", TT.value)
                    }
                  })
                })]
              })]
            }), CT && (0, wT.jsx)(xT.c, {
              value: NT.worldOptions.defaultGamemode,
              onChange: TT => {
                RT("defaultGamemode", TT)
              },
              showAll: KT,
              disabled: mU
            }), (CT || !(0, qT.E)(rT) && rT > 0) && (0, wT.jsx)(xT.d, {
              mapTypes: CT ? WT.G : WT.p,
              value: NT.mapOptions.mapType,
              onChange: TT => {
                const UT = {
                  mapType: TT
                };
                "customSchematic" !== TT && (UT.schematicIdList = []), TU(UT)
              },
              showAll: KT,
              disabled: mU,
              children: "customSchematic" === NT.mapOptions.mapType && (0, wT.jsxs)(wT.Fragment, {
                children: [(0, wT.jsxs)("div", {
                  className: "SchematicListTitle AnimFadeIn",
                  children: [CT && IT("customLobby:selectWorldSchematic"), !CT && IT("customLobby:selectCustomLobbySchematics", {
                    schematicLimit: rT
                  })]
                }), (0, wT.jsx)("div", {
                  className: nT()("SchematicListContainer AnimFadeIn", {
                    SchematicListContainerDisabled: "Enter" !== sT
                  }),
                  children: (0, wT.jsx)(pT.b, {
                    loading: null === hT,
                    schematics: null !== hT && void 0 !== hT ? hT : [],
                    onSchematicPicked: function(TT) {
                      const UT = NT.mapOptions.schematicIdList;
                      if (UT.includes(TT.schematicId)) TU({
                        schematicIdList: UT.filter((UT => UT !== TT.schematicId))
                      });
                      else {
                        if (rT && NT.mapOptions.schematicIdList.length >= rT) return;
                        TU({
                          schematicIdList: [...NT.mapOptions.schematicIdList, TT.schematicId]
                        })
                      }
                    },
                    selectedSchematicIdList: NT.mapOptions.schematicIdList,
                    disableAutoExport: !0
                  })
                })]
              })
            }), KT && (0, wT.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, wT.jsx)("div", {
                className: "SectionTitle",
                children: IT("customLobby:listedOptions")
              }), (0, wT.jsxs)("div", {
                className: "SectionBody",
                children: [(0, wT.jsx)(iT.f, {
                  label: "general:description",
                  className: "CustomLobbyDescription",
                  disabled: "Enter" !== sT,
                  children: (0, wT.jsx)(MT.e, {
                    onValueChange: (TT, UT) => {
                      AT("description", TT)
                    },
                    maxLength: 100,
                    defaultValue: NT.listedOptions.description
                  })
                }), (0, wT.jsx)(iT.f, {
                  label: "general:color",
                  circleInfoText: "customLobby:lobbyColorDescription",
                  disabled: "Enter" !== sT,
                  children: (0, wT.jsx)("div", {
                    className: "OtherInput",
                    children: (0, wT.jsx)("input", {
                      type: "color",
                      value: NT.listedOptions.color,
                      onChange: TT => {
                        AT("color", TT.target.value)
                      }
                    })
                  })
                }), (0, wT.jsx)(iT.f, {
                  label: "general:emojis",
                  circleInfoText: "customLobby:lobbyEmojisDescription",
                  disabled: "Enter" !== sT,
                  children: (0, wT.jsx)(MT.e, {
                    onValueChange: (TT, UT) => {
                      AT("emojis", TT)
                    },
                    maxLength: 6,
                    defaultValue: NT.listedOptions.emojis
                  })
                })]
              })]
            }), KT && CT && (0, wT.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, wT.jsx)("div", {
                className: "SectionTitle",
                children: IT("customLobby:advancedOptions")
              }), (0, wT.jsxs)("div", {
                className: "SectionBody",
                children: [(0, wT.jsx)(iT.f, {
                  label: "classic:worldGenSeed",
                  disabled: "Enter" !== sT,
                  children: (0, wT.jsx)(MT.e, {
                    onValueChange: (TT, UT) => {
                      RT("worldGenSeed", TT)
                    },
                    maxLength: eT.U
                  })
                }), (0, wT.jsx)(iT.f, {
                  label: "classic:disableProtectors",
                  disabled: "Enter" !== sT,
                  children: (0, wT.jsx)(iT.c, {
                    checked: NT.worldOptions.disableProtectors,
                    setChecked: TT => {
                      RT("disableProtectors", TT)
                    }
                  })
                }), (0, wT.jsx)(iT.f, {
                  label: "classic:disableTribeCreation",
                  disabled: "Enter" !== sT,
                  children: (0, wT.jsx)(iT.c, {
                    checked: NT.worldOptions.disableTribeCreation,
                    setChecked: TT => {
                      RT("disableTribeCreation", TT)
                    }
                  })
                }), (0, wT.jsx)(iT.f, {
                  label: "classic:voidDeathHeight",
                  circleInfoText: "classic:voidDeathHeightDescription",
                  disabled: "Enter" !== sT,
                  children: (0, wT.jsx)("input", {
                    type: "number",
                    max: OT.E,
                    value: null !== (gT = NT.worldOptions.voidDeathHeight) && void 0 !== gT ? gT : "",
                    onChange: TT => {
                      const UT = parseInt(TT.target.value);
                      RT("voidDeathHeight", isNaN(UT) ? null : UT)
                    }
                  })
                }), (0, wT.jsx)(iT.f, {
                  label: "classic:disableLobbySpawn",
                  disabled: "Enter" !== sT,
                  children: (0, wT.jsx)(iT.c, {
                    checked: NT.worldOptions.disableLobbySpawn,
                    setChecked: TT => {
                      RT("disableLobbySpawn", TT)
                    }
                  })
                }), (0, wT.jsx)(iT.f, {
                  label: "classic:worldBorder",
                  circleInfoText: "classic:worldBorderDescription",
                  disabled: "Enter" !== sT,
                  children: (0, wT.jsx)("input", {
                    type: "number",
                    min: OT.K,
                    max: OT.F,
                    value: null !== (tT = NT.worldOptions.worldBorder) && void 0 !== tT ? tT : "",
                    onChange: TT => {
                      const UT = parseInt(TT.target.value);
                      RT("worldBorder", isNaN(UT) ? null : UT)
                    }
                  })
                }), (0, wT.jsx)(iT.f, {
                  label: "classic:disableMobs",
                  disabled: "Enter" !== sT,
                  children: (0, wT.jsx)(iT.c, {
                    checked: NT.worldOptions.disableMobs,
                    setChecked: TT => {
                      RT("disableMobs", TT)
                    }
                  })
                })]
              })]
            }), CT && (0, wT.jsx)(YT.c, {
              callbacks: UU,
              disabled: "Enter" !== sT,
              advancedMode: KT
            })]
          })
        }), (0, wT.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, wT.jsx)(LT.l, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: "Enter" !== sT,
            onClick: () => {
              !async function() {
                if ("Enter" === sT) {
                  FT("Loading"), VT("");
                  try {
                    await lT.d.createCustomLobby(NT), FT("Success")
                  } catch (TT) {
                    VT(TT.message), console.error(TT.message), FT("Enter")
                  }
                }
              }()
            },
            children: IT("general:create")
          }), CT && (0, wT.jsx)("div", {
            className: "CreateCustomLobbyAdvancedToggle",
            "data-pad-ignore": mU || void 0,
            children: (0, wT.jsx)(iT.f, {
              label: "customLobby:showAdvancedOptions",
              disabled: mU,
              onLabelClick: () => {
                ST(!KT)
              },
              children: (0, wT.jsx)(iT.c, {
                checked: KT,
                setChecked: ST
              })
            })
          }), PT && (0, wT.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: PT
          })]
        })]
      })
    }
  },
  36435: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => HT
    });
    var WT = mT(1126),
      zT = mT.n(WT),
      MT = mT(63),
      gT = mT(4677),
      nT = mT(1188);

    function HT(TT) {
      let {
        locked: UT,
        children: mT
      } = TT;
      const WT = (0, MT.useRef)(null),
        HT = (0, gT.e)(WT, "y");
      return (0, nT.jsx)("div", {
        ref: WT,
        className: zT()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: HT.before,
          CreateCustomLobbyBodyMoreBelow: HT.after
        }),
        "data-pad-ignore": UT || void 0,
        children: mT
      })
    }
  },
  36424: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => jT,
      e: () => LT
    });
    var WT = mT(63),
      zT = mT(1457),
      MT = mT(1288),
      gT = mT(1446),
      nT = mT(3568),
      HT = mT(5038),
      kT = mT(1188);

    function jT(TT) {
      let {
        loading: UT,
        schematics: mT,
        onSchematicPicked: WT,
        selectedSchematicIdList: zT = [],
        disableAutoExport: HT
      } = TT;
      const {
        t: jT
      } = (0, MT.z)();
      return (0, kT.jsxs)("div", {
        className: "SchematicList",
        children: [UT && (0, kT.jsx)(gT.c, {}), !UT && 0 === mT.length && (0, kT.jsx)("div", {
          className: "NoSchematicsText",
          children: jT("worldBuilder:noSavedSchematic")
        }), !UT && mT.map((TT => (0, kT.jsx)(nT.f, {
          source: {
            type: "schematic",
            schematic: TT
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            WT(TT)
          },
          isSelected: zT.includes(TT.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: TT.isAutoExported && HT,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, TT.schematicId)))]
      })
    }

    function lT(TT) {
      let {
        ownedSchematics: UT,
        currentWorldSchematicId: mT,
        onClose: zT
      } = TT;
      const {
        t: gT
      } = (0, MT.z)(), [nT, lT] = (0, WT.useState)(null);
      return (0, kT.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === nT && (0, kT.jsxs)(kT.Fragment, {
          children: [(0, kT.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: gT("worldBuilder:schematicList")
          }), (0, kT.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: gT("worldBuilder:clickSchematicForOptions")
          }), (0, kT.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, kT.jsx)(jT, {
              loading: !1,
              schematics: UT,
              onSchematicPicked: TT => {
                lT(TT)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== nT && (0, kT.jsx)(HT.f, {
          schematic: nT,
          inSourceWorld: nT.schematicId === mT,
          onSchematicUpdate: TT => {
            lT(TT)
          },
          onClose: () => {
            lT(null), zT()
          }
        })]
      })
    }

    function LT(TT) {
      let {
        ownedSchematics: UT,
        currentWorldSchematicId: mT,
        onClose: WT
      } = TT;
      zT.NotificationProvider.showCustomPopup({
        body: TT => (0, kT.jsx)(lT, {
          ownedSchematics: UT,
          currentWorldSchematicId: mT,
          onClose: TT
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: WT,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  36432: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => kT,
      d: () => jT
    });
    mT(63);
    var WT = mT(1126),
      zT = mT.n(WT),
      MT = mT(4719),
      gT = mT(351),
      nT = mT(1288),
      HT = mT(1188);

    function kT(TT) {
      let {
        value: UT,
        onChange: mT,
        showAll: WT,
        disabled: kT = !1
      } = TT;
      const {
        t: jT
      } = (0, nT.z)();
      return (0, HT.jsxs)("div", {
        className: zT()("BloxdForm GamemodeForm", {
          BasicOptions: !WT
        }),
        children: [(0, HT.jsx)("div", {
          className: "SectionTitle",
          children: jT("classic:defaultGamemode")
        }), (0, HT.jsx)("div", {
          className: "SectionBody",
          children: MT.C.map((TT => WT || (0, MT.v)(TT) ? (0, HT.jsx)("button", {
            type: "button",
            className: zT()("WorldGamemode", {
              Selected: UT === TT
            }),
            disabled: kT,
            onClick: () => {
              mT(TT)
            },
            style: {
              "--background-image": `url(${gT.p[TT]})`
            },
            children: gT.m[TT]
          }, TT) : null))
        })]
      })
    }

    function jT(TT) {
      let {
        mapTypes: UT,
        value: mT,
        onChange: WT,
        showAll: kT,
        disabled: jT = !1,
        children: lT
      } = TT;
      const {
        t: LT
      } = (0, nT.z)();
      return (0, HT.jsxs)("div", {
        className: zT()("BloxdForm MapTypeForm", {
          BasicOptions: !kT
        }),
        children: [(0, HT.jsx)("div", {
          className: "SectionTitle",
          children: LT("customLobby:mapType")
        }), (0, HT.jsx)("div", {
          className: "SectionBody",
          children: UT.map((TT => kT || (0, MT.w)(TT) ? (0, HT.jsx)("button", {
            type: "button",
            className: zT()("MapType", {
              Selected: mT === TT
            }),
            disabled: jT,
            onClick: () => {
              WT(TT)
            },
            style: {
              "--background-image": `url(${gT.h[TT]})`
            },
            children: gT.g[TT]
          }, TT) : null))
        }), lT]
      })
    }
  },
  36419: () => {}
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);