export const id = 221;
export const ids = [221];
export const modules = {
  36634: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      CreateCustomLobby: () => iQ
    });
    XQ(36641);
    var wQ = XQ(4948),
      qQ = XQ(61),
      TQ = XQ(1739),
      zQ = XQ(1081),
      sQ = XQ.n(zQ),
      FQ = XQ(3398),
      PQ = XQ(1165),
      gQ = XQ(1238),
      JQ = XQ(4912),
      rQ = XQ(1507),
      IQ = XQ(36644),
      jQ = XQ(1226),
      BQ = XQ(1384),
      yQ = XQ(1567),
      VQ = XQ(26),
      DQ = XQ(1514),
      pQ = XQ(663),
      GQ = XQ(5290),
      UQ = XQ(814),
      bQ = XQ(1273),
      vQ = XQ(1257),
      dQ = XQ(5304),
      HQ = XQ(1094),
      aQ = XQ(36653),
      lQ = XQ(36658),
      hQ = XQ(1145);

    function iQ(QQ) {
      var WQ, XQ, zQ, iQ;
      let {
        gameNameWithVariation: cQ,
        close: AQ,
        initialDefaultGamemode: RQ
      } = QQ;
      const {
        t: EQ
      } = (0, jQ.C)(), CQ = (0, yQ.useNavigatePreserveSearch)(), [uQ, LQ] = (0, qQ.useState)("Enter"), [kQ, fQ] = (0, qQ.useState)(""), SQ = qQ.useRef(null), tQ = null === (WQ = UQ.e[cQ]) || void 0 === WQ ? void 0 : WQ.showWorldsInsteadOfCustomLobbies, oQ = tQ ? 1 : null === (XQ = UQ.e[cQ]) || void 0 === XQ ? void 0 : XQ.customLobbyCustomSchematicLimit, [eQ, nQ] = (0, qQ.useState)(!tQ);
      RQ || (RQ = "classic_creative" === cQ || "classic_creativeFlat" === cQ ? "creative" : "classic" === cQ ? "peaceful" : "survival");
      const xQ = {
        baseOptions: {
          gameNameWithVariation: tQ ? "classic" : cQ,
          name: "",
          visibility: "unlisted"
        },
        listedOptions: {
          description: "",
          color: "",
          emojis: ""
        },
        mapOptions: {
          mapType: "classic_creativeFlat" === cQ ? "flat" : "default",
          schematicIdList: []
        },
        worldOptions: null
      };
      tQ && (xQ.worldOptions = {
        defaultGamemode: RQ,
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
      const [YQ, NQ] = (0, qQ.useState)(xQ), [ZQ, OQ] = (0, qQ.useState)(null);

      function KQ(QQ, WQ) {
        NQ({
          ...YQ,
          baseOptions: {
            ...YQ.baseOptions,
            [QQ]: WQ
          }
        })
      }

      function mQ(QQ, WQ) {
        NQ({
          ...YQ,
          listedOptions: {
            ...YQ.listedOptions,
            [QQ]: WQ
          }
        })
      }

      function MQ(QQ, WQ) {
        NQ({
          ...YQ,
          worldOptions: {
            ...YQ.worldOptions,
            [QQ]: WQ
          }
        })
      }

      function QW(QQ) {
        NQ({
          ...YQ,
          mapOptions: {
            ...YQ.mapOptions,
            ...QQ
          }
        })
      }(0, qQ.useEffect)((() => {
        JQ.b.getNewStarterName().then((QQ => {
          NQ((WQ => "" !== WQ.baseOptions.name ? WQ : {
            ...WQ,
            baseOptions: {
              ...WQ.baseOptions,
              name: QQ
            }
          }))
        })).catch((QQ => {
          console.error("Error getting new starter name:", QQ)
        }))
      }), []), (0, qQ.useEffect)((() => {
        "customSchematic" === YQ.mapOptions.mapType && null === ZQ && (0, PQ.postJsonWithMetricsCookiesAndJsonResponse)(`${gQ.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
          retries: 0,
          minTimeout: 3e3
        }).then((QQ => {
          OQ(QQ)
        }))
      }), [YQ.mapOptions.mapType, ZQ]);
      const WW = {
          tpRequests: {
            isEnabled: () => !YQ.worldOptions.disableTpRequests,
            UH: QQ => {
              MQ("disableTpRequests", !QQ)
            }
          },
          spawnProtection: {
            isEnabled: () => YQ.worldOptions.spawnProtection,
            UH: QQ => {
              MQ("spawnProtection", QQ)
            }
          },
          spawnReset: {
            isEnabled: () => YQ.worldOptions.enableSpawnReset,
            UH: QQ => {
              MQ("enableSpawnReset", QQ)
            }
          },
          smpMarketplace: {
            isEnabled: () => YQ.worldOptions.enableSmpMarketplace,
            UH: QQ => {
              MQ("enableSmpMarketplace", QQ)
            }
          },
          survivalGuns: {
            isEnabled: () => YQ.worldOptions.enableSurvivalGuns,
            UH: QQ => {
              MQ("enableSurvivalGuns", QQ)
            }
          },
          fallDamage: {
            isEnabled: () => !YQ.worldOptions.disableFallDamage,
            UH: QQ => {
              MQ("disableFallDamage", !QQ)
            }
          },
          dayNight: {
            isEnabled: () => YQ.worldOptions.enableDayNight,
            UH: QQ => {
              MQ("enableDayNight", QQ)
            }
          }
        },
        XW = "Enter" !== uQ,
        wW = (0, hQ.jsx)(GQ.h, {
          className: "NameInput",
          label: "general:name",
          disabled: "Enter" !== uQ,
          children: (0, hQ.jsx)(TQ.e, {
            domRef: SQ,
            onValueChange: (QQ, WQ) => {
              const XQ = (0, vQ.qb)(QQ);
              KQ("name", XQ), SQ.current.value = XQ
            },
            maxLength: vQ.K,
            defaultValue: YQ.baseOptions.name
          })
        });
      return (0, hQ.jsxs)("div", {
        className: sQ()("CreateCustomLobby", {
          CreateCustomLobbySuccess: "Success" === uQ,
          AdvancedMode: eQ
        }),
        children: ["Success" === uQ && (0, hQ.jsxs)("div", {
          className: "CreateCustomLobbySuccessOverlay",
          children: [(0, hQ.jsxs)("div", {
            className: "CreateCustomLobbySuccessTitle FullyFancyText AnimFadeInScaleUp",
            children: [(0, hQ.jsx)(HQ.d, {
              name: "check"
            }), (0, hQ.jsx)(DQ.d, {})]
          }), (0, hQ.jsx)("div", {
            className: "CreateCustomLobbySuccessButtons AnimFadeInScaleUp",
            children: (0, hQ.jsx)(rQ.s, {
              padDefaultFocus: !0,
              onClick: () => {
                (0, VQ.m)("worldCreation"), CQ((0, BQ.c)(cQ, YQ.baseOptions.name))
              },
              children: EQ("homePage:joinLobbyName", {
                lobbyName: YQ.baseOptions.name
              })
            })
          })]
        }), (0, hQ.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, hQ.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: EQ(tQ ? "homePage:createWorld" : "homePage:createCustomLobby")
          })
        }), (0, hQ.jsx)(lQ.c, {
          locked: XW,
          children: (0, hQ.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [!eQ && wW, eQ && (0, hQ.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, hQ.jsx)("div", {
                className: "SectionTitle",
                children: EQ("customLobby:generalOptions")
              }), (0, hQ.jsxs)("div", {
                className: "SectionBody",
                children: [wW, (0, hQ.jsx)(GQ.h, {
                  label: "customLobby:visibility",
                  circleInfoText: EQ("customLobby:visibilityDescription"),
                  disabled: "Enter" !== uQ,
                  children: (0, hQ.jsx)(FQ.c, {
                    options: wQ.t.map((QQ => ({
                      value: QQ,
                      label: wQ.f[QQ]
                    }))),
                    value: YQ.baseOptions.visibility,
                    onChange: QQ => {
                      KQ("visibility", QQ.value)
                    }
                  })
                })]
              })]
            }), tQ && (0, hQ.jsx)(aQ.e, {
              value: YQ.worldOptions.defaultGamemode,
              onChange: QQ => {
                MQ("defaultGamemode", QQ)
              },
              showAll: eQ,
              disabled: XW
            }), (tQ || !(0, pQ.G)(oQ) && oQ > 0) && (0, hQ.jsx)(aQ.f, {
              mapTypes: tQ ? wQ.I : wQ.p,
              value: YQ.mapOptions.mapType,
              onChange: QQ => {
                const WQ = {
                  mapType: QQ
                };
                "customSchematic" !== QQ && (WQ.schematicIdList = []), QW(WQ)
              },
              showAll: eQ,
              disabled: XW,
              children: "customSchematic" === YQ.mapOptions.mapType && (0, hQ.jsxs)(hQ.Fragment, {
                children: [(0, hQ.jsxs)("div", {
                  className: "SchematicListTitle AnimFadeIn",
                  children: [tQ && EQ("customLobby:selectWorldSchematic"), !tQ && EQ("customLobby:selectCustomLobbySchematics", {
                    schematicLimit: oQ
                  })]
                }), (0, hQ.jsx)("div", {
                  className: sQ()("SchematicListContainer AnimFadeIn", {
                    SchematicListContainerDisabled: "Enter" !== uQ
                  }),
                  children: (0, hQ.jsx)(IQ.e, {
                    loading: null === ZQ,
                    schematics: null !== ZQ && void 0 !== ZQ ? ZQ : [],
                    onSchematicPicked: function(QQ) {
                      const WQ = YQ.mapOptions.schematicIdList;
                      if (WQ.includes(QQ.schematicId)) QW({
                        schematicIdList: WQ.filter((WQ => WQ !== QQ.schematicId))
                      });
                      else {
                        if (oQ && YQ.mapOptions.schematicIdList.length >= oQ) return;
                        QW({
                          schematicIdList: [...YQ.mapOptions.schematicIdList, QQ.schematicId]
                        })
                      }
                    },
                    selectedSchematicIdList: YQ.mapOptions.schematicIdList,
                    disableAutoExport: !0
                  })
                })]
              })
            }), eQ && (0, hQ.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, hQ.jsx)("div", {
                className: "SectionTitle",
                children: EQ("customLobby:listedOptions")
              }), (0, hQ.jsxs)("div", {
                className: "SectionBody",
                children: [(0, hQ.jsx)(GQ.h, {
                  label: "general:description",
                  className: "CustomLobbyDescription",
                  disabled: "Enter" !== uQ,
                  children: (0, hQ.jsx)(TQ.e, {
                    onValueChange: (QQ, WQ) => {
                      mQ("description", QQ)
                    },
                    maxLength: 100,
                    defaultValue: YQ.listedOptions.description
                  })
                }), (0, hQ.jsx)(GQ.h, {
                  label: "general:color",
                  circleInfoText: "customLobby:lobbyColorDescription",
                  disabled: "Enter" !== uQ,
                  children: (0, hQ.jsx)("div", {
                    className: "OtherInput",
                    children: (0, hQ.jsx)("input", {
                      type: "color",
                      value: YQ.listedOptions.color,
                      onChange: QQ => {
                        mQ("color", QQ.target.value)
                      }
                    })
                  })
                }), (0, hQ.jsx)(GQ.h, {
                  label: "general:emojis",
                  circleInfoText: "customLobby:lobbyEmojisDescription",
                  disabled: "Enter" !== uQ,
                  children: (0, hQ.jsx)(TQ.e, {
                    onValueChange: (QQ, WQ) => {
                      mQ("emojis", QQ)
                    },
                    maxLength: 6,
                    defaultValue: YQ.listedOptions.emojis
                  })
                })]
              })]
            }), eQ && tQ && (0, hQ.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, hQ.jsx)("div", {
                className: "SectionTitle",
                children: EQ("customLobby:advancedOptions")
              }), (0, hQ.jsxs)("div", {
                className: "SectionBody",
                children: [(0, hQ.jsx)(GQ.h, {
                  label: "classic:worldGenSeed",
                  disabled: "Enter" !== uQ,
                  children: (0, hQ.jsx)(TQ.e, {
                    onValueChange: (QQ, WQ) => {
                      MQ("worldGenSeed", QQ)
                    },
                    maxLength: vQ.K
                  })
                }), (0, hQ.jsx)(GQ.h, {
                  label: "classic:disableProtectors",
                  disabled: "Enter" !== uQ,
                  children: (0, hQ.jsx)(GQ.d, {
                    checked: YQ.worldOptions.disableProtectors,
                    setChecked: QQ => {
                      MQ("disableProtectors", QQ)
                    }
                  })
                }), (0, hQ.jsx)(GQ.h, {
                  label: "classic:disableTribeCreation",
                  disabled: "Enter" !== uQ,
                  children: (0, hQ.jsx)(GQ.d, {
                    checked: YQ.worldOptions.disableTribeCreation,
                    setChecked: QQ => {
                      MQ("disableTribeCreation", QQ)
                    }
                  })
                }), (0, hQ.jsx)(GQ.h, {
                  label: "classic:voidDeathHeight",
                  circleInfoText: "classic:voidDeathHeightDescription",
                  disabled: "Enter" !== uQ,
                  children: (0, hQ.jsx)("input", {
                    type: "number",
                    max: bQ.I,
                    value: null !== (zQ = YQ.worldOptions.voidDeathHeight) && void 0 !== zQ ? zQ : "",
                    onChange: QQ => {
                      const WQ = parseInt(QQ.target.value);
                      MQ("voidDeathHeight", isNaN(WQ) ? null : WQ)
                    }
                  })
                }), (0, hQ.jsx)(GQ.h, {
                  label: "classic:disableLobbySpawn",
                  disabled: "Enter" !== uQ,
                  children: (0, hQ.jsx)(GQ.d, {
                    checked: YQ.worldOptions.disableLobbySpawn,
                    setChecked: QQ => {
                      MQ("disableLobbySpawn", QQ)
                    }
                  })
                }), (0, hQ.jsx)(GQ.h, {
                  label: "classic:worldBorder",
                  circleInfoText: "classic:worldBorderDescription",
                  disabled: "Enter" !== uQ,
                  children: (0, hQ.jsx)("input", {
                    type: "number",
                    min: bQ.Q,
                    max: bQ.K,
                    value: null !== (iQ = YQ.worldOptions.worldBorder) && void 0 !== iQ ? iQ : "",
                    onChange: QQ => {
                      const WQ = parseInt(QQ.target.value);
                      MQ("worldBorder", isNaN(WQ) ? null : WQ)
                    }
                  })
                }), (0, hQ.jsx)(GQ.h, {
                  label: "classic:disableMobs",
                  disabled: "Enter" !== uQ,
                  children: (0, hQ.jsx)(GQ.d, {
                    checked: YQ.worldOptions.disableMobs,
                    setChecked: QQ => {
                      MQ("disableMobs", QQ)
                    }
                  })
                })]
              })]
            }), tQ && (0, hQ.jsx)(dQ.c, {
              callbacks: WW,
              disabled: "Enter" !== uQ,
              advancedMode: eQ
            })]
          })
        }), (0, hQ.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, hQ.jsx)(rQ.s, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: "Enter" !== uQ,
            onClick: () => {
              !async function() {
                if ("Enter" === uQ) {
                  LQ("Loading"), fQ("");
                  try {
                    await JQ.b.createCustomLobby(YQ), LQ("Success")
                  } catch (QQ) {
                    fQ(QQ.message), console.error(QQ.message), LQ("Enter")
                  }
                }
              }()
            },
            children: EQ("general:create")
          }), tQ && (0, hQ.jsx)("div", {
            className: "CreateCustomLobbyAdvancedToggle",
            "data-pad-ignore": XW || void 0,
            children: (0, hQ.jsx)(GQ.h, {
              label: "customLobby:showAdvancedOptions",
              disabled: XW,
              onLabelClick: () => {
                nQ(!eQ)
              },
              children: (0, hQ.jsx)(GQ.d, {
                checked: eQ,
                setChecked: nQ
              })
            })
          }), kQ && (0, hQ.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: kQ
          })]
        })]
      })
    }
  },
  36658: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => FQ
    });
    var wQ = XQ(1081),
      qQ = XQ.n(wQ),
      TQ = XQ(61),
      zQ = XQ(4894),
      sQ = XQ(1145);

    function FQ(QQ) {
      let {
        locked: WQ,
        children: XQ
      } = QQ;
      const wQ = (0, TQ.useRef)(null),
        FQ = (0, zQ.b)(wQ, "y");
      return (0, sQ.jsx)("div", {
        ref: wQ,
        className: qQ()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: FQ.before,
          CreateCustomLobbyBodyMoreBelow: FQ.after
        }),
        "data-pad-ignore": WQ || void 0,
        children: XQ
      })
    }
  },
  36644: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => gQ,
      f: () => rQ
    });
    var wQ = XQ(61),
      qQ = XQ(1404),
      TQ = XQ(1226),
      zQ = XQ(1391),
      sQ = XQ(3732),
      FQ = XQ(5283),
      PQ = XQ(1145);

    function gQ(QQ) {
      let {
        loading: WQ,
        schematics: XQ,
        onSchematicPicked: wQ,
        selectedSchematicIdList: qQ = [],
        disableAutoExport: FQ
      } = QQ;
      const {
        t: gQ
      } = (0, TQ.C)();
      return (0, PQ.jsxs)("div", {
        className: "SchematicList",
        children: [WQ && (0, PQ.jsx)(zQ.e, {}), !WQ && 0 === XQ.length && (0, PQ.jsx)("div", {
          className: "NoSchematicsText",
          children: gQ("worldBuilder:noSavedSchematic")
        }), !WQ && XQ.map((QQ => (0, PQ.jsx)(sQ.d, {
          source: {
            type: "schematic",
            schematic: QQ
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            wQ(QQ)
          },
          isSelected: qQ.includes(QQ.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: QQ.isAutoExported && FQ,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, QQ.schematicId)))]
      })
    }

    function JQ(QQ) {
      let {
        ownedSchematics: WQ,
        currentWorldSchematicId: XQ,
        onClose: qQ
      } = QQ;
      const {
        t: zQ
      } = (0, TQ.C)(), [sQ, JQ] = (0, wQ.useState)(null);
      return (0, PQ.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === sQ && (0, PQ.jsxs)(PQ.Fragment, {
          children: [(0, PQ.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: zQ("worldBuilder:schematicList")
          }), (0, PQ.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: zQ("worldBuilder:clickSchematicForOptions")
          }), (0, PQ.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, PQ.jsx)(gQ, {
              loading: !1,
              schematics: WQ,
              onSchematicPicked: QQ => {
                JQ(QQ)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== sQ && (0, PQ.jsx)(FQ.h, {
          schematic: sQ,
          inSourceWorld: sQ.schematicId === XQ,
          onSchematicUpdate: QQ => {
            JQ(QQ)
          },
          onClose: () => {
            JQ(null), qQ()
          }
        })]
      })
    }

    function rQ(QQ) {
      let {
        ownedSchematics: WQ,
        currentWorldSchematicId: XQ,
        onClose: wQ
      } = QQ;
      qQ.NotificationProvider.showCustomPopup({
        body: QQ => (0, PQ.jsx)(JQ, {
          ownedSchematics: WQ,
          currentWorldSchematicId: XQ,
          onClose: QQ
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: wQ,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  36653: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => PQ,
      f: () => gQ
    });
    XQ(61);
    var wQ = XQ(1081),
      qQ = XQ.n(wQ),
      TQ = XQ(4948),
      zQ = XQ(382),
      sQ = XQ(1226),
      FQ = XQ(1145);

    function PQ(QQ) {
      let {
        value: WQ,
        onChange: XQ,
        showAll: wQ,
        disabled: PQ = !1
      } = QQ;
      const {
        t: gQ
      } = (0, sQ.C)();
      return (0, FQ.jsxs)("div", {
        className: qQ()("BloxdForm GamemodeForm", {
          BasicOptions: !wQ
        }),
        children: [(0, FQ.jsx)("div", {
          className: "SectionTitle",
          children: gQ("classic:defaultGamemode")
        }), (0, FQ.jsx)("div", {
          className: "SectionBody",
          children: TQ.E.map((QQ => wQ || (0, TQ.y)(QQ) ? (0, FQ.jsx)("button", {
            type: "button",
            className: qQ()("WorldGamemode", {
              Selected: WQ === QQ
            }),
            disabled: PQ,
            onClick: () => {
              XQ(QQ)
            },
            style: {
              "--background-image": `url(${zQ.y[QQ]})`
            },
            children: zQ.u[QQ]
          }, QQ) : null))
        })]
      })
    }

    function gQ(QQ) {
      let {
        mapTypes: WQ,
        value: XQ,
        onChange: wQ,
        showAll: PQ,
        disabled: gQ = !1,
        children: JQ
      } = QQ;
      const {
        t: rQ
      } = (0, sQ.C)();
      return (0, FQ.jsxs)("div", {
        className: qQ()("BloxdForm MapTypeForm", {
          BasicOptions: !PQ
        }),
        children: [(0, FQ.jsx)("div", {
          className: "SectionTitle",
          children: rQ("customLobby:mapType")
        }), (0, FQ.jsx)("div", {
          className: "SectionBody",
          children: WQ.map((QQ => PQ || (0, TQ.z)(QQ) ? (0, FQ.jsx)("button", {
            type: "button",
            className: qQ()("MapType", {
              Selected: XQ === QQ
            }),
            disabled: gQ,
            onClick: () => {
              wQ(QQ)
            },
            style: {
              "--background-image": `url(${zQ.n[QQ]})`
            },
            children: zQ.k[QQ]
          }, QQ) : null))
        }), JQ]
      })
    }
  },
  36641: () => {}
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);