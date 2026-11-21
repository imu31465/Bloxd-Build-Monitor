export const id = 210;
export const ids = [210];
export const modules = {
  35988: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      CreateCustomLobby: () => rQ
    });
    wQ(35995);
    var LQ = wQ(4475),
      qQ = wQ(53),
      oQ = wQ(1682),
      DQ = wQ(1070),
      kQ = wQ.n(DQ),
      vQ = wQ(3029),
      mQ = wQ(1147),
      uQ = wQ(1213),
      HQ = wQ(4435),
      bQ = wQ(1451),
      YQ = wQ(36002),
      xQ = wQ(1207),
      AQ = wQ(1342),
      tQ = wQ(1503),
      eQ = wQ(17),
      MQ = wQ(1458),
      GQ = wQ(619),
      pQ = wQ(4777),
      cQ = wQ(745),
      CQ = wQ(1254),
      SQ = wQ(1237),
      iQ = wQ(4787),
      WQ = wQ(1079),
      RQ = wQ(36007),
      OQ = wQ(36013),
      sQ = wQ(1107);

    function rQ(QQ) {
      var FQ, wQ, DQ, rQ;
      let {
        gameNameWithVariation: IQ,
        close: UQ,
        initialDefaultGamemode: NQ
      } = QQ;
      const {
        t: TQ
      } = (0, xQ.y)(), KQ = (0, tQ.useNavigatePreserveSearch)(), [zQ, lQ] = (0, qQ.useState)("Enter"), [jQ, aQ] = (0, qQ.useState)(""), XQ = qQ.useRef(null), fQ = null === (FQ = cQ.e[IQ]) || void 0 === FQ ? void 0 : FQ.showWorldsInsteadOfCustomLobbies, VQ = fQ ? 1 : null === (wQ = cQ.e[IQ]) || void 0 === wQ ? void 0 : wQ.customLobbyCustomSchematicLimit, [hQ, JQ] = (0, qQ.useState)(!fQ);
      NQ || (NQ = "classic_creative" === IQ || "classic_creativeFlat" === IQ ? "creative" : "classic" === IQ ? "peaceful" : "survival");
      const EQ = {
        baseOptions: {
          gameNameWithVariation: fQ ? "classic" : IQ,
          name: "",
          visibility: "unlisted"
        },
        listedOptions: {
          description: "",
          color: "",
          emojis: ""
        },
        mapOptions: {
          mapType: "classic_creativeFlat" === IQ ? "flat" : "default",
          schematicIdList: []
        },
        worldOptions: null
      };
      fQ && (EQ.worldOptions = {
        defaultGamemode: NQ,
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
      const [nQ, gQ] = (0, qQ.useState)(EQ), [PQ, ZQ] = (0, qQ.useState)(null);

      function yQ(QQ, FQ) {
        gQ({
          ...nQ,
          baseOptions: {
            ...nQ.baseOptions,
            [QQ]: FQ
          }
        })
      }

      function BQ(QQ, FQ) {
        gQ({
          ...nQ,
          listedOptions: {
            ...nQ.listedOptions,
            [QQ]: FQ
          }
        })
      }

      function dQ(QQ, FQ) {
        gQ({
          ...nQ,
          worldOptions: {
            ...nQ.worldOptions,
            [QQ]: FQ
          }
        })
      }

      function QF(QQ) {
        gQ({
          ...nQ,
          mapOptions: {
            ...nQ.mapOptions,
            ...QQ
          }
        })
      }(0, qQ.useEffect)((() => {
        HQ.d.getNewStarterName().then((QQ => {
          gQ((FQ => "" !== FQ.baseOptions.name ? FQ : {
            ...FQ,
            baseOptions: {
              ...FQ.baseOptions,
              name: QQ
            }
          }))
        })).catch((QQ => {
          console.error("Error getting new starter name:", QQ)
        }))
      }), []), (0, qQ.useEffect)((() => {
        "customSchematic" === nQ.mapOptions.mapType && null === PQ && (0, mQ.postJsonWithMetricsCookiesAndJsonResponse)(`${uQ.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
          retries: 0,
          minTimeout: 3e3
        }).then((QQ => {
          ZQ(QQ)
        }))
      }), [nQ.mapOptions.mapType, PQ]);
      const FF = {
          tpRequests: {
            isEnabled: () => !nQ.worldOptions.disableTpRequests,
            Qr: QQ => {
              dQ("disableTpRequests", !QQ)
            }
          },
          spawnProtection: {
            isEnabled: () => nQ.worldOptions.spawnProtection,
            Qr: QQ => {
              dQ("spawnProtection", QQ)
            }
          },
          spawnReset: {
            isEnabled: () => nQ.worldOptions.enableSpawnReset,
            Qr: QQ => {
              dQ("enableSpawnReset", QQ)
            }
          },
          smpMarketplace: {
            isEnabled: () => nQ.worldOptions.enableSmpMarketplace,
            Qr: QQ => {
              dQ("enableSmpMarketplace", QQ)
            }
          },
          survivalGuns: {
            isEnabled: () => nQ.worldOptions.enableSurvivalGuns,
            Qr: QQ => {
              dQ("enableSurvivalGuns", QQ)
            }
          },
          fallDamage: {
            isEnabled: () => !nQ.worldOptions.disableFallDamage,
            Qr: QQ => {
              dQ("disableFallDamage", !QQ)
            }
          },
          dayNight: {
            isEnabled: () => nQ.worldOptions.enableDayNight,
            Qr: QQ => {
              dQ("enableDayNight", QQ)
            }
          }
        },
        wF = "Enter" !== zQ,
        LF = (0, sQ.jsx)(pQ.c, {
          className: "NameInput",
          label: "general:name",
          disabled: "Enter" !== zQ,
          children: (0, sQ.jsx)(oQ.b, {
            domRef: XQ,
            onValueChange: (QQ, FQ) => {
              const wQ = (0, SQ.Cb)(QQ);
              yQ("name", wQ), XQ.current.value = wQ
            },
            maxLength: SQ.T,
            defaultValue: nQ.baseOptions.name
          })
        });
      return (0, sQ.jsxs)("div", {
        className: kQ()("CreateCustomLobby", {
          CreateCustomLobbySuccess: "Success" === zQ,
          AdvancedMode: hQ
        }),
        children: ["Success" === zQ && (0, sQ.jsxs)("div", {
          className: "CreateCustomLobbySuccessOverlay",
          children: [(0, sQ.jsxs)("div", {
            className: "CreateCustomLobbySuccessTitle FullyFancyText AnimFadeInScaleUp",
            children: [(0, sQ.jsx)(WQ.c, {
              name: "check"
            }), (0, sQ.jsx)(MQ.d, {})]
          }), (0, sQ.jsx)("div", {
            className: "CreateCustomLobbySuccessButtons AnimFadeInScaleUp",
            children: (0, sQ.jsx)(bQ.m, {
              padDefaultFocus: !0,
              onClick: () => {
                (0, eQ.k)("worldCreation"), KQ((0, AQ.e)(IQ, nQ.baseOptions.name))
              },
              children: TQ("homePage:joinLobbyName", {
                lobbyName: nQ.baseOptions.name
              })
            })
          })]
        }), (0, sQ.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, sQ.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: TQ(fQ ? "homePage:createWorld" : "homePage:createCustomLobby")
          })
        }), (0, sQ.jsx)(OQ.c, {
          locked: wF,
          children: (0, sQ.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [!hQ && LF, hQ && (0, sQ.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, sQ.jsx)("div", {
                className: "SectionTitle",
                children: TQ("customLobby:generalOptions")
              }), (0, sQ.jsxs)("div", {
                className: "SectionBody",
                children: [LF, (0, sQ.jsx)(pQ.c, {
                  label: "customLobby:visibility",
                  circleInfoText: TQ("customLobby:visibilityDescription"),
                  disabled: "Enter" !== zQ,
                  children: (0, sQ.jsx)(vQ.d, {
                    options: LQ.r.map((QQ => ({
                      value: QQ,
                      label: LQ.d[QQ]
                    }))),
                    value: nQ.baseOptions.visibility,
                    onChange: QQ => {
                      yQ("visibility", QQ.value)
                    }
                  })
                })]
              })]
            }), fQ && (0, sQ.jsx)(RQ.c, {
              value: nQ.worldOptions.defaultGamemode,
              onChange: QQ => {
                dQ("defaultGamemode", QQ)
              },
              showAll: hQ,
              disabled: wF
            }), (fQ || !(0, GQ.F)(VQ) && VQ > 0) && (0, sQ.jsx)(RQ.d, {
              mapTypes: fQ ? LQ.G : LQ.q,
              value: nQ.mapOptions.mapType,
              onChange: QQ => {
                const FQ = {
                  mapType: QQ
                };
                "customSchematic" !== QQ && (FQ.schematicIdList = []), QF(FQ)
              },
              showAll: hQ,
              disabled: wF,
              children: "customSchematic" === nQ.mapOptions.mapType && (0, sQ.jsxs)(sQ.Fragment, {
                children: [(0, sQ.jsxs)("div", {
                  className: "SchematicListTitle AnimFadeIn",
                  children: [fQ && TQ("customLobby:selectWorldSchematic"), !fQ && TQ("customLobby:selectCustomLobbySchematics", {
                    schematicLimit: VQ
                  })]
                }), (0, sQ.jsx)("div", {
                  className: kQ()("SchematicListContainer AnimFadeIn", {
                    SchematicListContainerDisabled: "Enter" !== zQ
                  }),
                  children: (0, sQ.jsx)(YQ.e, {
                    loading: null === PQ,
                    schematics: null !== PQ && void 0 !== PQ ? PQ : [],
                    onSchematicPicked: function(QQ) {
                      const FQ = nQ.mapOptions.schematicIdList;
                      if (FQ.includes(QQ.schematicId)) QF({
                        schematicIdList: FQ.filter((FQ => FQ !== QQ.schematicId))
                      });
                      else {
                        if (VQ && nQ.mapOptions.schematicIdList.length >= VQ) return;
                        QF({
                          schematicIdList: [...nQ.mapOptions.schematicIdList, QQ.schematicId]
                        })
                      }
                    },
                    selectedSchematicIdList: nQ.mapOptions.schematicIdList,
                    disableAutoExport: !0
                  })
                })]
              })
            }), hQ && (0, sQ.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, sQ.jsx)("div", {
                className: "SectionTitle",
                children: TQ("customLobby:listedOptions")
              }), (0, sQ.jsxs)("div", {
                className: "SectionBody",
                children: [(0, sQ.jsx)(pQ.c, {
                  label: "general:description",
                  className: "CustomLobbyDescription",
                  disabled: "Enter" !== zQ,
                  children: (0, sQ.jsx)(oQ.b, {
                    onValueChange: (QQ, FQ) => {
                      BQ("description", QQ)
                    },
                    maxLength: 100,
                    defaultValue: nQ.listedOptions.description
                  })
                }), (0, sQ.jsx)(pQ.c, {
                  label: "general:color",
                  circleInfoText: "customLobby:lobbyColorDescription",
                  disabled: "Enter" !== zQ,
                  children: (0, sQ.jsx)("div", {
                    className: "OtherInput",
                    children: (0, sQ.jsx)("input", {
                      type: "color",
                      value: nQ.listedOptions.color,
                      onChange: QQ => {
                        BQ("color", QQ.target.value)
                      }
                    })
                  })
                }), (0, sQ.jsx)(pQ.c, {
                  label: "general:emojis",
                  circleInfoText: "customLobby:lobbyEmojisDescription",
                  disabled: "Enter" !== zQ,
                  children: (0, sQ.jsx)(oQ.b, {
                    onValueChange: (QQ, FQ) => {
                      BQ("emojis", QQ)
                    },
                    maxLength: 6,
                    defaultValue: nQ.listedOptions.emojis
                  })
                })]
              })]
            }), hQ && fQ && (0, sQ.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, sQ.jsx)("div", {
                className: "SectionTitle",
                children: TQ("customLobby:advancedOptions")
              }), (0, sQ.jsxs)("div", {
                className: "SectionBody",
                children: [(0, sQ.jsx)(pQ.c, {
                  label: "classic:worldGenSeed",
                  disabled: "Enter" !== zQ,
                  children: (0, sQ.jsx)(oQ.b, {
                    onValueChange: (QQ, FQ) => {
                      dQ("worldGenSeed", QQ)
                    },
                    maxLength: SQ.T
                  })
                }), (0, sQ.jsx)(pQ.c, {
                  label: "classic:disableProtectors",
                  disabled: "Enter" !== zQ,
                  children: (0, sQ.jsx)(pQ.b, {
                    checked: nQ.worldOptions.disableProtectors,
                    setChecked: QQ => {
                      dQ("disableProtectors", QQ)
                    }
                  })
                }), (0, sQ.jsx)(pQ.c, {
                  label: "classic:disableTribeCreation",
                  disabled: "Enter" !== zQ,
                  children: (0, sQ.jsx)(pQ.b, {
                    checked: nQ.worldOptions.disableTribeCreation,
                    setChecked: QQ => {
                      dQ("disableTribeCreation", QQ)
                    }
                  })
                }), (0, sQ.jsx)(pQ.c, {
                  label: "classic:voidDeathHeight",
                  circleInfoText: "classic:voidDeathHeightDescription",
                  disabled: "Enter" !== zQ,
                  children: (0, sQ.jsx)("input", {
                    type: "number",
                    max: CQ.J,
                    value: null !== (DQ = nQ.worldOptions.voidDeathHeight) && void 0 !== DQ ? DQ : "",
                    onChange: QQ => {
                      const FQ = parseInt(QQ.target.value);
                      dQ("voidDeathHeight", isNaN(FQ) ? null : FQ)
                    }
                  })
                }), (0, sQ.jsx)(pQ.c, {
                  label: "classic:disableLobbySpawn",
                  disabled: "Enter" !== zQ,
                  children: (0, sQ.jsx)(pQ.b, {
                    checked: nQ.worldOptions.disableLobbySpawn,
                    setChecked: QQ => {
                      dQ("disableLobbySpawn", QQ)
                    }
                  })
                }), (0, sQ.jsx)(pQ.c, {
                  label: "classic:worldBorder",
                  circleInfoText: "classic:worldBorderDescription",
                  disabled: "Enter" !== zQ,
                  children: (0, sQ.jsx)("input", {
                    type: "number",
                    min: CQ.S,
                    max: CQ.K,
                    value: null !== (rQ = nQ.worldOptions.worldBorder) && void 0 !== rQ ? rQ : "",
                    onChange: QQ => {
                      const FQ = parseInt(QQ.target.value);
                      dQ("worldBorder", isNaN(FQ) ? null : FQ)
                    }
                  })
                }), (0, sQ.jsx)(pQ.c, {
                  label: "classic:disableMobs",
                  disabled: "Enter" !== zQ,
                  children: (0, sQ.jsx)(pQ.b, {
                    checked: nQ.worldOptions.disableMobs,
                    setChecked: QQ => {
                      dQ("disableMobs", QQ)
                    }
                  })
                })]
              })]
            }), fQ && (0, sQ.jsx)(iQ.c, {
              callbacks: FF,
              disabled: "Enter" !== zQ,
              advancedMode: hQ
            })]
          })
        }), (0, sQ.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, sQ.jsx)(bQ.m, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: "Enter" !== zQ,
            onClick: () => {
              !async function() {
                if ("Enter" === zQ) {
                  lQ("Loading"), aQ("");
                  try {
                    await HQ.d.createCustomLobby(nQ), lQ("Success")
                  } catch (QQ) {
                    aQ(QQ.message), console.error(QQ.message), lQ("Enter")
                  }
                }
              }()
            },
            children: TQ("general:create")
          }), fQ && (0, sQ.jsx)("div", {
            className: "CreateCustomLobbyAdvancedToggle",
            "data-pad-ignore": wF || void 0,
            children: (0, sQ.jsx)(pQ.c, {
              label: "customLobby:showAdvancedOptions",
              disabled: wF,
              onLabelClick: () => {
                JQ(!hQ)
              },
              children: (0, sQ.jsx)(pQ.b, {
                checked: hQ,
                setChecked: JQ
              })
            })
          }), jQ && (0, sQ.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: jQ
          })]
        })]
      })
    }
  },
  36013: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => vQ
    });
    var LQ = wQ(1070),
      qQ = wQ.n(LQ),
      oQ = wQ(53),
      DQ = wQ(4426),
      kQ = wQ(1107);

    function vQ(QQ) {
      let {
        locked: FQ,
        children: wQ
      } = QQ;
      const LQ = (0, oQ.useRef)(null),
        vQ = (0, DQ.b)(LQ, "y");
      return (0, kQ.jsx)("div", {
        ref: LQ,
        className: qQ()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: vQ.before,
          CreateCustomLobbyBodyMoreBelow: vQ.after
        }),
        "data-pad-ignore": FQ || void 0,
        children: wQ
      })
    }
  },
  36002: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => uQ,
      g: () => bQ
    });
    var LQ = wQ(53),
      qQ = wQ(1362),
      oQ = wQ(1207),
      DQ = wQ(1348),
      kQ = wQ(3356),
      vQ = wQ(4772),
      mQ = wQ(1107);

    function uQ(QQ) {
      let {
        loading: FQ,
        schematics: wQ,
        onSchematicPicked: LQ,
        selectedSchematicIdList: qQ = [],
        disableAutoExport: vQ
      } = QQ;
      const {
        t: uQ
      } = (0, oQ.y)();
      return (0, mQ.jsxs)("div", {
        className: "SchematicList",
        children: [FQ && (0, mQ.jsx)(DQ.c, {}), !FQ && 0 === wQ.length && (0, mQ.jsx)("div", {
          className: "NoSchematicsText",
          children: uQ("worldBuilder:noSavedSchematic")
        }), !FQ && wQ.map((QQ => (0, mQ.jsx)(kQ.f, {
          source: {
            type: "schematic",
            schematic: QQ
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            LQ(QQ)
          },
          isSelected: qQ.includes(QQ.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: QQ.isAutoExported && vQ,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, QQ.schematicId)))]
      })
    }

    function HQ(QQ) {
      let {
        ownedSchematics: FQ,
        currentWorldSchematicId: wQ,
        onClose: qQ
      } = QQ;
      const {
        t: DQ
      } = (0, oQ.y)(), [kQ, HQ] = (0, LQ.useState)(null);
      return (0, mQ.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === kQ && (0, mQ.jsxs)(mQ.Fragment, {
          children: [(0, mQ.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: DQ("worldBuilder:schematicList")
          }), (0, mQ.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: DQ("worldBuilder:clickSchematicForOptions")
          }), (0, mQ.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, mQ.jsx)(uQ, {
              loading: !1,
              schematics: FQ,
              onSchematicPicked: QQ => {
                HQ(QQ)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== kQ && (0, mQ.jsx)(vQ.j, {
          schematic: kQ,
          inSourceWorld: kQ.schematicId === wQ,
          onSchematicUpdate: QQ => {
            HQ(QQ)
          },
          onClose: () => {
            HQ(null), qQ()
          }
        })]
      })
    }

    function bQ(QQ) {
      let {
        ownedSchematics: FQ,
        currentWorldSchematicId: wQ,
        onClose: LQ
      } = QQ;
      qQ.NotificationProvider.showCustomPopup({
        body: QQ => (0, mQ.jsx)(HQ, {
          ownedSchematics: FQ,
          currentWorldSchematicId: wQ,
          onClose: QQ
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: LQ,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  36007: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => mQ,
      d: () => uQ
    });
    wQ(53);
    var LQ = wQ(1070),
      qQ = wQ.n(LQ),
      oQ = wQ(4475),
      DQ = wQ(307),
      kQ = wQ(1207),
      vQ = wQ(1107);

    function mQ(QQ) {
      let {
        value: FQ,
        onChange: wQ,
        showAll: LQ,
        disabled: mQ = !1
      } = QQ;
      const {
        t: uQ
      } = (0, kQ.y)();
      return (0, vQ.jsxs)("div", {
        className: qQ()("BloxdForm GamemodeForm", {
          BasicOptions: !LQ
        }),
        children: [(0, vQ.jsx)("div", {
          className: "SectionTitle",
          children: uQ("classic:defaultGamemode")
        }), (0, vQ.jsx)("div", {
          className: "SectionBody",
          children: oQ.C.map((QQ => LQ || (0, oQ.u)(QQ) ? (0, vQ.jsx)("button", {
            type: "button",
            className: qQ()("WorldGamemode", {
              Selected: FQ === QQ
            }),
            disabled: mQ,
            onClick: () => {
              wQ(QQ)
            },
            style: {
              "--background-image": `url(${DQ.s[QQ]})`
            },
            children: DQ.q[QQ]
          }, QQ) : null))
        })]
      })
    }

    function uQ(QQ) {
      let {
        mapTypes: FQ,
        value: wQ,
        onChange: LQ,
        showAll: mQ,
        disabled: uQ = !1,
        children: HQ
      } = QQ;
      const {
        t: bQ
      } = (0, kQ.y)();
      return (0, vQ.jsxs)("div", {
        className: qQ()("BloxdForm MapTypeForm", {
          BasicOptions: !mQ
        }),
        children: [(0, vQ.jsx)("div", {
          className: "SectionTitle",
          children: bQ("customLobby:mapType")
        }), (0, vQ.jsx)("div", {
          className: "SectionBody",
          children: FQ.map((QQ => mQ || (0, oQ.w)(QQ) ? (0, vQ.jsx)("button", {
            type: "button",
            className: qQ()("MapType", {
              Selected: wQ === QQ
            }),
            disabled: uQ,
            onClick: () => {
              LQ(QQ)
            },
            style: {
              "--background-image": `url(${DQ.k[QQ]})`
            },
            children: DQ.i[QQ]
          }, QQ) : null))
        }), HQ]
      })
    }
  },
  35995: () => {}
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);