export const id = 125;
export const ids = [125];
export const modules = {
  37389: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      CreateCustomLobby: () => vR
    });
    GR(37391);
    var yR = GR(5425),
      tR = GR(66),
      uR = GR(1867),
      ZR = GR(1163),
      qR = GR.n(ZR),
      iR = GR(4375),
      fR = GR(1201),
      VR = GR(1282),
      KR = GR(5392),
      wR = GR(1590),
      rR = GR(37394),
      eR = GR(1270),
      aR = GR(1459),
      LR = GR(1663),
      nR = GR(25),
      UR = GR(1594),
      WR = GR(679),
      AR = GR(5817),
      CR = GR(858),
      XR = GR(1336),
      MR = GR(1317),
      BR = GR(5828),
      lR = GR(1468),
      pR = GR(37397),
      gR = GR(37406),
      bR = GR(1378);

    function vR(RR) {
      var JR, GR, ZR, vR;
      let {
        gameNameWithVariation: OR,
        close: xR,
        initialDefaultGamemode: NR
      } = RR;
      const {
        t: DR
      } = (0, eR.A)(), HR = (0, LR.useNavigatePreserveSearch)(), [oR, cR] = (0, tR.useState)("Enter"), [PR, IR] = (0, tR.useState)(""), mR = tR.useRef(null), zR = null === (JR = CR.b[OR]) || void 0 === JR ? void 0 : JR.showWorldsInsteadOfCustomLobbies, SR = zR ? 1 : null === (GR = CR.b[OR]) || void 0 === GR ? void 0 : GR.customLobbyCustomSchematicLimit, [jR, dR] = (0, tR.useState)(!zR);
      NR || (NR = "classic_creative" === OR || "classic_creativeFlat" === OR ? "creative" : "classic" === OR ? "peaceful" : "survival");
      const ER = {
        baseOptions: {
          gameNameWithVariation: zR ? "classic" : OR,
          name: "",
          visibility: "unlisted"
        },
        listedOptions: {
          description: "",
          color: "",
          emojis: ""
        },
        mapOptions: {
          mapType: "classic_creativeFlat" === OR ? "flat" : "default",
          schematicIdList: []
        },
        worldOptions: null
      };
      zR && (ER.worldOptions = {
        defaultGamemode: NR,
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
      const [YR, kR] = (0, tR.useState)(ER), [QR, FR] = (0, tR.useState)(null);

      function TR(RR, JR) {
        kR({
          ...YR,
          baseOptions: {
            ...YR.baseOptions,
            [RR]: JR
          }
        })
      }

      function sR(RR, JR) {
        kR({
          ...YR,
          listedOptions: {
            ...YR.listedOptions,
            [RR]: JR
          }
        })
      }

      function hR(RR, JR) {
        kR({
          ...YR,
          worldOptions: {
            ...YR.worldOptions,
            [RR]: JR
          }
        })
      }

      function RJ(RR) {
        kR({
          ...YR,
          mapOptions: {
            ...YR.mapOptions,
            ...RR
          }
        })
      }(0, tR.useEffect)((() => {
        KR.c.getNewStarterName().then((RR => {
          kR((JR => "" !== JR.baseOptions.name ? JR : {
            ...JR,
            baseOptions: {
              ...JR.baseOptions,
              name: RR
            }
          }))
        })).catch((RR => {
          console.error("Error getting new starter name:", RR)
        }))
      }), []), (0, tR.useEffect)((() => {
        "customSchematic" === YR.mapOptions.mapType && null === QR && (0, fR.postJsonWithMetricsCookiesAndJsonResponse)(`${VR.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
          retries: 0,
          minTimeout: 3e3
        }).then((RR => {
          FR(RR)
        }))
      }), [YR.mapOptions.mapType, QR]);
      const JJ = {
          tpRequests: {
            isEnabled: () => !YR.worldOptions.disableTpRequests,
            JA: RR => {
              hR("disableTpRequests", !RR)
            }
          },
          spawnProtection: {
            isEnabled: () => YR.worldOptions.spawnProtection,
            JA: RR => {
              hR("spawnProtection", RR)
            }
          },
          spawnReset: {
            isEnabled: () => YR.worldOptions.enableSpawnReset,
            JA: RR => {
              hR("enableSpawnReset", RR)
            }
          },
          smpMarketplace: {
            isEnabled: () => YR.worldOptions.enableSmpMarketplace,
            JA: RR => {
              hR("enableSmpMarketplace", RR)
            }
          },
          survivalGuns: {
            isEnabled: () => YR.worldOptions.enableSurvivalGuns,
            JA: RR => {
              hR("enableSurvivalGuns", RR)
            }
          },
          fallDamage: {
            isEnabled: () => !YR.worldOptions.disableFallDamage,
            JA: RR => {
              hR("disableFallDamage", !RR)
            }
          },
          dayNight: {
            isEnabled: () => YR.worldOptions.enableDayNight,
            JA: RR => {
              hR("enableDayNight", RR)
            }
          }
        },
        GJ = "Enter" !== oR,
        yJ = (0, bR.jsx)(AR.g, {
          className: "NameInput",
          label: "general:name",
          disabled: "Enter" !== oR,
          children: (0, bR.jsx)(uR.b, {
            domRef: mR,
            onValueChange: (RR, JR) => {
              const GR = (0, MR.hb)(RR);
              TR("name", GR), mR.current.value = GR
            },
            maxLength: MR.I,
            defaultValue: YR.baseOptions.name
          })
        });
      return (0, bR.jsxs)("div", {
        className: qR()("CreateCustomLobby", {
          CreateCustomLobbySuccess: "Success" === oR,
          AdvancedMode: jR
        }),
        children: ["Success" === oR && (0, bR.jsxs)("div", {
          className: "CreateCustomLobbySuccessOverlay",
          children: [(0, bR.jsxs)("div", {
            className: "CreateCustomLobbySuccessTitle FullyFancyText AnimFadeInScaleUp",
            children: [(0, bR.jsx)(lR.d, {
              name: "check"
            }), (0, bR.jsx)(UR.b, {})]
          }), (0, bR.jsx)("div", {
            className: "CreateCustomLobbySuccessButtons AnimFadeInScaleUp",
            children: (0, bR.jsx)(wR.n, {
              padDefaultFocus: !0,
              onClick: () => {
                (0, nR.k)("worldCreation"), HR((0, aR.e)(OR, YR.baseOptions.name))
              },
              children: DR("homePage:joinLobbyName", {
                lobbyName: YR.baseOptions.name
              })
            })
          })]
        }), (0, bR.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, bR.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: DR(zR ? "homePage:createWorld" : "homePage:createCustomLobby")
          })
        }), (0, bR.jsx)(gR.e, {
          locked: GJ,
          children: (0, bR.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [!jR && yJ, jR && (0, bR.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, bR.jsx)("div", {
                className: "SectionTitle",
                children: DR("customLobby:generalOptions")
              }), (0, bR.jsxs)("div", {
                className: "SectionBody",
                children: [yJ, (0, bR.jsx)(AR.g, {
                  label: "customLobby:visibility",
                  circleInfoText: DR("customLobby:visibilityDescription"),
                  disabled: "Enter" !== oR,
                  children: (0, bR.jsx)(iR.e, {
                    options: yR.q.map((RR => ({
                      value: RR,
                      label: yR.h[RR]
                    }))),
                    value: YR.baseOptions.visibility,
                    onChange: RR => {
                      TR("visibility", RR.value)
                    }
                  })
                })]
              })]
            }), zR && (0, bR.jsx)(pR.d, {
              value: YR.worldOptions.defaultGamemode,
              onChange: RR => {
                hR("defaultGamemode", RR)
              },
              showAll: jR,
              disabled: GJ
            }), (zR || !(0, WR.I)(SR) && SR > 0) && (0, bR.jsx)(pR.g, {
              mapTypes: zR ? yR.D : yR.n,
              value: YR.mapOptions.mapType,
              onChange: RR => {
                const JR = {
                  mapType: RR
                };
                "customSchematic" !== RR && (JR.schematicIdList = []), RJ(JR)
              },
              showAll: jR,
              disabled: GJ,
              children: "customSchematic" === YR.mapOptions.mapType && (0, bR.jsxs)(bR.Fragment, {
                children: [(0, bR.jsxs)("div", {
                  className: "SchematicListTitle AnimFadeIn",
                  children: [zR && DR("customLobby:selectWorldSchematic"), !zR && DR("customLobby:selectCustomLobbySchematics", {
                    schematicLimit: SR
                  })]
                }), (0, bR.jsx)("div", {
                  className: qR()("SchematicListContainer AnimFadeIn", {
                    SchematicListContainerDisabled: "Enter" !== oR
                  }),
                  children: (0, bR.jsx)(rR.d, {
                    loading: null === QR,
                    schematics: null !== QR && void 0 !== QR ? QR : [],
                    onSchematicPicked: function(RR) {
                      const JR = YR.mapOptions.schematicIdList;
                      if (JR.includes(RR.schematicId)) RJ({
                        schematicIdList: JR.filter((JR => JR !== RR.schematicId))
                      });
                      else {
                        if (SR && YR.mapOptions.schematicIdList.length >= SR) return;
                        RJ({
                          schematicIdList: [...YR.mapOptions.schematicIdList, RR.schematicId]
                        })
                      }
                    },
                    selectedSchematicIdList: YR.mapOptions.schematicIdList,
                    disableAutoExport: !0
                  })
                })]
              })
            }), jR && (0, bR.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, bR.jsx)("div", {
                className: "SectionTitle",
                children: DR("customLobby:listedOptions")
              }), (0, bR.jsxs)("div", {
                className: "SectionBody",
                children: [(0, bR.jsx)(AR.g, {
                  label: "general:description",
                  className: "CustomLobbyDescription",
                  disabled: "Enter" !== oR,
                  children: (0, bR.jsx)(uR.b, {
                    onValueChange: (RR, JR) => {
                      sR("description", RR)
                    },
                    maxLength: 100,
                    defaultValue: YR.listedOptions.description
                  })
                }), (0, bR.jsx)(AR.g, {
                  label: "general:color",
                  circleInfoText: "customLobby:lobbyColorDescription",
                  disabled: "Enter" !== oR,
                  children: (0, bR.jsx)("div", {
                    className: "OtherInput",
                    children: (0, bR.jsx)("input", {
                      type: "color",
                      value: YR.listedOptions.color,
                      onChange: RR => {
                        sR("color", RR.target.value)
                      }
                    })
                  })
                }), (0, bR.jsx)(AR.g, {
                  label: "general:emojis",
                  circleInfoText: "customLobby:lobbyEmojisDescription",
                  disabled: "Enter" !== oR,
                  children: (0, bR.jsx)(uR.b, {
                    onValueChange: (RR, JR) => {
                      sR("emojis", RR)
                    },
                    maxLength: 6,
                    defaultValue: YR.listedOptions.emojis
                  })
                })]
              })]
            }), jR && zR && (0, bR.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, bR.jsx)("div", {
                className: "SectionTitle",
                children: DR("customLobby:advancedOptions")
              }), (0, bR.jsxs)("div", {
                className: "SectionBody",
                children: [(0, bR.jsx)(AR.g, {
                  label: "classic:worldGenSeed",
                  disabled: "Enter" !== oR,
                  children: (0, bR.jsx)(uR.b, {
                    onValueChange: (RR, JR) => {
                      hR("worldGenSeed", RR)
                    },
                    maxLength: MR.I
                  })
                }), (0, bR.jsx)(AR.g, {
                  label: "classic:disableProtectors",
                  disabled: "Enter" !== oR,
                  children: (0, bR.jsx)(AR.c, {
                    checked: YR.worldOptions.disableProtectors,
                    setChecked: RR => {
                      hR("disableProtectors", RR)
                    }
                  })
                }), (0, bR.jsx)(AR.g, {
                  label: "classic:disableTribeCreation",
                  disabled: "Enter" !== oR,
                  children: (0, bR.jsx)(AR.c, {
                    checked: YR.worldOptions.disableTribeCreation,
                    setChecked: RR => {
                      hR("disableTribeCreation", RR)
                    }
                  })
                }), (0, bR.jsx)(AR.g, {
                  label: "classic:voidDeathHeight",
                  circleInfoText: "classic:voidDeathHeightDescription",
                  disabled: "Enter" !== oR,
                  children: (0, bR.jsx)("input", {
                    type: "number",
                    max: XR.I,
                    value: null !== (ZR = YR.worldOptions.voidDeathHeight) && void 0 !== ZR ? ZR : "",
                    onChange: RR => {
                      const JR = parseInt(RR.target.value);
                      hR("voidDeathHeight", isNaN(JR) ? null : JR)
                    }
                  })
                }), (0, bR.jsx)(AR.g, {
                  label: "classic:disableLobbySpawn",
                  disabled: "Enter" !== oR,
                  children: (0, bR.jsx)(AR.c, {
                    checked: YR.worldOptions.disableLobbySpawn,
                    setChecked: RR => {
                      hR("disableLobbySpawn", RR)
                    }
                  })
                }), (0, bR.jsx)(AR.g, {
                  label: "classic:worldBorder",
                  circleInfoText: "classic:worldBorderDescription",
                  disabled: "Enter" !== oR,
                  children: (0, bR.jsx)("input", {
                    type: "number",
                    min: XR.N,
                    max: XR.J,
                    value: null !== (vR = YR.worldOptions.worldBorder) && void 0 !== vR ? vR : "",
                    onChange: RR => {
                      const JR = parseInt(RR.target.value);
                      hR("worldBorder", isNaN(JR) ? null : JR)
                    }
                  })
                }), (0, bR.jsx)(AR.g, {
                  label: "classic:disableMobs",
                  disabled: "Enter" !== oR,
                  children: (0, bR.jsx)(AR.c, {
                    checked: YR.worldOptions.disableMobs,
                    setChecked: RR => {
                      hR("disableMobs", RR)
                    }
                  })
                })]
              })]
            }), zR && (0, bR.jsx)(BR.b, {
              callbacks: JJ,
              disabled: "Enter" !== oR,
              advancedMode: jR
            })]
          })
        }), (0, bR.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, bR.jsx)(wR.n, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: "Enter" !== oR,
            onClick: () => {
              !async function() {
                if ("Enter" === oR) {
                  cR("Loading"), IR("");
                  try {
                    await KR.c.createCustomLobby(YR), cR("Success")
                  } catch (RR) {
                    IR(RR.message), console.error(RR.message), cR("Enter")
                  }
                }
              }()
            },
            children: DR("general:create")
          }), zR && (0, bR.jsx)("div", {
            className: "CreateCustomLobbyAdvancedToggle",
            "data-pad-ignore": GJ || void 0,
            children: (0, bR.jsx)(AR.g, {
              label: "customLobby:showAdvancedOptions",
              disabled: GJ,
              onLabelClick: () => {
                dR(!jR)
              },
              children: (0, bR.jsx)(AR.c, {
                checked: jR,
                setChecked: dR
              })
            })
          }), PR && (0, bR.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: PR
          })]
        })]
      })
    }
  },
  37406: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => iR
    });
    var yR = GR(1163),
      tR = GR.n(yR),
      uR = GR(66),
      ZR = GR(5383),
      qR = GR(1378);

    function iR(RR) {
      let {
        locked: JR,
        children: GR
      } = RR;
      const yR = (0, uR.useRef)(null),
        iR = (0, ZR.b)(yR, "y");
      return (0, qR.jsx)("div", {
        ref: yR,
        className: tR()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: iR.before,
          CreateCustomLobbyBodyMoreBelow: iR.after
        }),
        "data-pad-ignore": JR || void 0,
        children: GR
      })
    }
  },
  37394: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => VR,
      f: () => wR
    });
    var yR = GR(66),
      tR = GR(1493),
      uR = GR(1270),
      ZR = GR(1465),
      qR = GR(4824),
      iR = GR(5814),
      fR = GR(1378);

    function VR(RR) {
      let {
        loading: JR,
        schematics: GR,
        onSchematicPicked: yR,
        selectedSchematicIdList: tR = [],
        disableAutoExport: iR
      } = RR;
      const {
        t: VR
      } = (0, uR.A)();
      return (0, fR.jsxs)("div", {
        className: "SchematicList",
        children: [JR && (0, fR.jsx)(ZR.d, {}), !JR && 0 === GR.length && (0, fR.jsx)("div", {
          className: "NoSchematicsText",
          children: VR("worldBuilder:noSavedSchematic")
        }), !JR && GR.map((RR => (0, fR.jsx)(qR.i, {
          source: {
            type: "schematic",
            schematic: RR
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            yR(RR)
          },
          isSelected: tR.includes(RR.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: RR.isAutoExported && iR,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, RR.schematicId)))]
      })
    }

    function KR(RR) {
      let {
        ownedSchematics: JR,
        currentWorldSchematicId: GR,
        onClose: tR
      } = RR;
      const {
        t: ZR
      } = (0, uR.A)(), [qR, KR] = (0, yR.useState)(null);
      return (0, fR.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === qR && (0, fR.jsxs)(fR.Fragment, {
          children: [(0, fR.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: ZR("worldBuilder:schematicList")
          }), (0, fR.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: ZR("worldBuilder:clickSchematicForOptions")
          }), (0, fR.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, fR.jsx)(VR, {
              loading: !1,
              schematics: JR,
              onSchematicPicked: RR => {
                KR(RR)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== qR && (0, fR.jsx)(iR.g, {
          schematic: qR,
          inSourceWorld: qR.schematicId === GR,
          onSchematicUpdate: RR => {
            KR(RR)
          },
          onClose: () => {
            KR(null), tR()
          }
        })]
      })
    }

    function wR(RR) {
      let {
        ownedSchematics: JR,
        currentWorldSchematicId: GR,
        onClose: yR
      } = RR;
      tR.NotificationProvider.showCustomPopup({
        body: RR => (0, fR.jsx)(KR, {
          ownedSchematics: JR,
          currentWorldSchematicId: GR,
          onClose: RR
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: yR,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  37397: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => fR,
      g: () => VR
    });
    GR(66);
    var yR = GR(1163),
      tR = GR.n(yR),
      uR = GR(5425),
      ZR = GR(359),
      qR = GR(1270),
      iR = GR(1378);

    function fR(RR) {
      let {
        value: JR,
        onChange: GR,
        showAll: yR,
        disabled: fR = !1
      } = RR;
      const {
        t: VR
      } = (0, qR.A)();
      return (0, iR.jsxs)("div", {
        className: tR()("BloxdForm GamemodeForm", {
          BasicOptions: !yR
        }),
        children: [(0, iR.jsx)("div", {
          className: "SectionTitle",
          children: VR("classic:defaultGamemode")
        }), (0, iR.jsx)("div", {
          className: "SectionBody",
          children: uR.B.map((RR => yR || (0, uR.v)(RR) ? (0, iR.jsx)("button", {
            type: "button",
            className: tR()("WorldGamemode", {
              Selected: JR === RR
            }),
            disabled: fR,
            onClick: () => {
              GR(RR)
            },
            style: {
              "--background-image": `url(${ZR.u[RR]})`
            },
            children: ZR.s[RR]
          }, RR) : null))
        })]
      })
    }

    function VR(RR) {
      let {
        mapTypes: JR,
        value: GR,
        onChange: yR,
        showAll: fR,
        disabled: VR = !1,
        children: KR
      } = RR;
      const {
        t: wR
      } = (0, qR.A)();
      return (0, iR.jsxs)("div", {
        className: tR()("BloxdForm MapTypeForm", {
          BasicOptions: !fR
        }),
        children: [(0, iR.jsx)("div", {
          className: "SectionTitle",
          children: wR("customLobby:mapType")
        }), (0, iR.jsx)("div", {
          className: "SectionBody",
          children: JR.map((RR => fR || (0, uR.w)(RR) ? (0, iR.jsx)("button", {
            type: "button",
            className: tR()("MapType", {
              Selected: GR === RR
            }),
            disabled: VR,
            onClick: () => {
              yR(RR)
            },
            style: {
              "--background-image": `url(${ZR.n[RR]})`
            },
            children: ZR.j[RR]
          }, RR) : null))
        }), KR]
      })
    }
  },
  5953: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => tR,
      d: () => uR
    });
    var yR = GR(5898);
    const tR = "Air",
      uR = Object.freeze(new yR.h(tR, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  37391: () => {}
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);