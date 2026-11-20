export const id = 209;
export const ids = [209];
export const modules = {
  36219: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      CreateCustomLobby: () => Gu
    });
    yu(36225);
    var Eu = yu(4409),
      Ku = yu(64),
      Qu = yu(1617),
      mu = yu(1035),
      Ju = yu.n(mu),
      Nu = yu(2916),
      Xu = yu(1110),
      Vu = yu(1176),
      ru = yu(4362),
      Bu = yu(1408),
      xu = yu(36229),
      Su = yu(1170),
      pu = yu(1289),
      Tu = yu(1467),
      Wu = yu(27),
      ju = yu(1410),
      Hu = yu(610),
      du = yu(4718),
      bu = yu(753),
      Cu = yu(1215),
      ku = yu(1199),
      eu = yu(4728),
      Au = yu(1043),
      Du = yu(36233),
      Mu = yu(36235),
      Iu = yu(1079);

    function Gu(uu) {
      var Ru, yu, mu, Gu;
      let {
        gameNameWithVariation: Uu,
        close: nu,
        initialDefaultGamemode: su
      } = uu;
      const {
        t: tu
      } = (0, Su.E)(), lu = (0, Tu.useNavigatePreserveSearch)(), [gu, cu] = (0, Ku.useState)("Enter"), [Lu, zu] = (0, Ku.useState)(""), Fu = Ku.useRef(null), wu = null === (Ru = bu.b[Uu]) || void 0 === Ru ? void 0 : Ru.showWorldsInsteadOfCustomLobbies, Zu = wu ? 1 : null === (yu = bu.b[Uu]) || void 0 === yu ? void 0 : yu.customLobbyCustomSchematicLimit, [hu, Pu] = (0, Ku.useState)(!wu);
      su || (su = "classic_creative" === Uu || "classic_creativeFlat" === Uu ? "creative" : "classic" === Uu ? "peaceful" : "survival");
      const iu = {
        baseOptions: {
          gameNameWithVariation: wu ? "classic" : Uu,
          name: "",
          visibility: "unlisted"
        },
        listedOptions: {
          description: "",
          color: "",
          emojis: ""
        },
        mapOptions: {
          mapType: "classic_creativeFlat" === Uu ? "flat" : "default",
          schematicIdList: []
        },
        worldOptions: null
      };
      wu && (iu.worldOptions = {
        defaultGamemode: su,
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
      const [Yu, ou] = (0, Ku.useState)(iu), [qu, Ou] = (0, Ku.useState)(null);

      function vu(uu, Ru) {
        ou({
          ...Yu,
          baseOptions: {
            ...Yu.baseOptions,
            [uu]: Ru
          }
        })
      }

      function au(uu, Ru) {
        ou({
          ...Yu,
          listedOptions: {
            ...Yu.listedOptions,
            [uu]: Ru
          }
        })
      }

      function fu(uu, Ru) {
        ou({
          ...Yu,
          worldOptions: {
            ...Yu.worldOptions,
            [uu]: Ru
          }
        })
      }

      function uR(uu) {
        ou({
          ...Yu,
          mapOptions: {
            ...Yu.mapOptions,
            ...uu
          }
        })
      }(0, Ku.useEffect)((() => {
        ru.e.getNewStarterName().then((uu => {
          ou((Ru => "" !== Ru.baseOptions.name ? Ru : {
            ...Ru,
            baseOptions: {
              ...Ru.baseOptions,
              name: uu
            }
          }))
        })).catch((uu => {
          console.error("Error getting new starter name:", uu)
        }))
      }), []), (0, Ku.useEffect)((() => {
        "customSchematic" === Yu.mapOptions.mapType && null === qu && (0, Xu.postJsonWithMetricsCookiesAndJsonResponse)(`${Vu.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
          retries: 0,
          minTimeout: 3e3
        }).then((uu => {
          Ou(uu)
        }))
      }), [Yu.mapOptions.mapType, qu]);
      const RR = {
          tpRequests: {
            isEnabled: () => !Yu.worldOptions.disableTpRequests,
            tC: uu => {
              fu("disableTpRequests", !uu)
            }
          },
          spawnProtection: {
            isEnabled: () => Yu.worldOptions.spawnProtection,
            tC: uu => {
              fu("spawnProtection", uu)
            }
          },
          spawnReset: {
            isEnabled: () => Yu.worldOptions.enableSpawnReset,
            tC: uu => {
              fu("enableSpawnReset", uu)
            }
          },
          smpMarketplace: {
            isEnabled: () => Yu.worldOptions.enableSmpMarketplace,
            tC: uu => {
              fu("enableSmpMarketplace", uu)
            }
          },
          survivalGuns: {
            isEnabled: () => Yu.worldOptions.enableSurvivalGuns,
            tC: uu => {
              fu("enableSurvivalGuns", uu)
            }
          },
          fallDamage: {
            isEnabled: () => !Yu.worldOptions.disableFallDamage,
            tC: uu => {
              fu("disableFallDamage", !uu)
            }
          },
          dayNight: {
            isEnabled: () => Yu.worldOptions.enableDayNight,
            tC: uu => {
              fu("enableDayNight", uu)
            }
          }
        },
        yR = "Enter" !== gu,
        ER = (0, Iu.jsx)(du.c, {
          className: "NameInput",
          label: "general:name",
          disabled: "Enter" !== gu,
          children: (0, Iu.jsx)(Qu.b, {
            domRef: Fu,
            onValueChange: (uu, Ru) => {
              const yu = (0, ku.rb)(uu);
              vu("name", yu), Fu.current.value = yu
            },
            maxLength: ku.O,
            defaultValue: Yu.baseOptions.name
          })
        });
      return (0, Iu.jsxs)("div", {
        className: Ju()("CreateCustomLobby", {
          CreateCustomLobbySuccess: "Success" === gu,
          AdvancedMode: hu
        }),
        children: ["Success" === gu && (0, Iu.jsxs)("div", {
          className: "CreateCustomLobbySuccessOverlay",
          children: [(0, Iu.jsxs)("div", {
            className: "CreateCustomLobbySuccessTitle FullyFancyText AnimFadeInScaleUp",
            children: [(0, Iu.jsx)(Au.c, {
              name: "check"
            }), (0, Iu.jsx)(ju.e, {})]
          }), (0, Iu.jsx)("div", {
            className: "CreateCustomLobbySuccessButtons AnimFadeInScaleUp",
            children: (0, Iu.jsx)(Bu.l, {
              padDefaultFocus: !0,
              onClick: () => {
                (0, Wu.i)("worldCreation"), lu((0, pu.b)(Uu, Yu.baseOptions.name))
              },
              children: tu("homePage:joinLobbyName", {
                lobbyName: Yu.baseOptions.name
              })
            })
          })]
        }), (0, Iu.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, Iu.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: tu(wu ? "homePage:createWorld" : "homePage:createCustomLobby")
          })
        }), (0, Iu.jsx)(Mu.e, {
          locked: yR,
          children: (0, Iu.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [!hu && ER, hu && (0, Iu.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, Iu.jsx)("div", {
                className: "SectionTitle",
                children: tu("customLobby:generalOptions")
              }), (0, Iu.jsxs)("div", {
                className: "SectionBody",
                children: [ER, (0, Iu.jsx)(du.c, {
                  label: "customLobby:visibility",
                  circleInfoText: tu("customLobby:visibilityDescription"),
                  disabled: "Enter" !== gu,
                  children: (0, Iu.jsx)(Nu.d, {
                    options: Eu.u.map((uu => ({
                      value: uu,
                      label: Eu.g[uu]
                    }))),
                    value: Yu.baseOptions.visibility,
                    onChange: uu => {
                      vu("visibility", uu.value)
                    }
                  })
                })]
              })]
            }), wu && (0, Iu.jsx)(Du.d, {
              value: Yu.worldOptions.defaultGamemode,
              onChange: uu => {
                fu("defaultGamemode", uu)
              },
              showAll: hu,
              disabled: yR
            }), (wu || !(0, Hu.E)(Zu) && Zu > 0) && (0, Iu.jsx)(Du.g, {
              mapTypes: wu ? Eu.I : Eu.s,
              value: Yu.mapOptions.mapType,
              onChange: uu => {
                const Ru = {
                  mapType: uu
                };
                "customSchematic" !== uu && (Ru.schematicIdList = []), uR(Ru)
              },
              showAll: hu,
              disabled: yR,
              children: "customSchematic" === Yu.mapOptions.mapType && (0, Iu.jsxs)(Iu.Fragment, {
                children: [(0, Iu.jsxs)("div", {
                  className: "SchematicListTitle AnimFadeIn",
                  children: [wu && tu("customLobby:selectWorldSchematic"), !wu && tu("customLobby:selectCustomLobbySchematics", {
                    schematicLimit: Zu
                  })]
                }), (0, Iu.jsx)("div", {
                  className: Ju()("SchematicListContainer AnimFadeIn", {
                    SchematicListContainerDisabled: "Enter" !== gu
                  }),
                  children: (0, Iu.jsx)(xu.d, {
                    loading: null === qu,
                    schematics: null !== qu && void 0 !== qu ? qu : [],
                    onSchematicPicked: function(uu) {
                      const Ru = Yu.mapOptions.schematicIdList;
                      if (Ru.includes(uu.schematicId)) uR({
                        schematicIdList: Ru.filter((Ru => Ru !== uu.schematicId))
                      });
                      else {
                        if (Zu && Yu.mapOptions.schematicIdList.length >= Zu) return;
                        uR({
                          schematicIdList: [...Yu.mapOptions.schematicIdList, uu.schematicId]
                        })
                      }
                    },
                    selectedSchematicIdList: Yu.mapOptions.schematicIdList,
                    disableAutoExport: !0
                  })
                })]
              })
            }), hu && (0, Iu.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, Iu.jsx)("div", {
                className: "SectionTitle",
                children: tu("customLobby:listedOptions")
              }), (0, Iu.jsxs)("div", {
                className: "SectionBody",
                children: [(0, Iu.jsx)(du.c, {
                  label: "general:description",
                  className: "CustomLobbyDescription",
                  disabled: "Enter" !== gu,
                  children: (0, Iu.jsx)(Qu.b, {
                    onValueChange: (uu, Ru) => {
                      au("description", uu)
                    },
                    maxLength: 100,
                    defaultValue: Yu.listedOptions.description
                  })
                }), (0, Iu.jsx)(du.c, {
                  label: "general:color",
                  circleInfoText: "customLobby:lobbyColorDescription",
                  disabled: "Enter" !== gu,
                  children: (0, Iu.jsx)("div", {
                    className: "OtherInput",
                    children: (0, Iu.jsx)("input", {
                      type: "color",
                      value: Yu.listedOptions.color,
                      onChange: uu => {
                        au("color", uu.target.value)
                      }
                    })
                  })
                }), (0, Iu.jsx)(du.c, {
                  label: "general:emojis",
                  circleInfoText: "customLobby:lobbyEmojisDescription",
                  disabled: "Enter" !== gu,
                  children: (0, Iu.jsx)(Qu.b, {
                    onValueChange: (uu, Ru) => {
                      au("emojis", uu)
                    },
                    maxLength: 6,
                    defaultValue: Yu.listedOptions.emojis
                  })
                })]
              })]
            }), hu && wu && (0, Iu.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, Iu.jsx)("div", {
                className: "SectionTitle",
                children: tu("customLobby:advancedOptions")
              }), (0, Iu.jsxs)("div", {
                className: "SectionBody",
                children: [(0, Iu.jsx)(du.c, {
                  label: "classic:worldGenSeed",
                  disabled: "Enter" !== gu,
                  children: (0, Iu.jsx)(Qu.b, {
                    onValueChange: (uu, Ru) => {
                      fu("worldGenSeed", uu)
                    },
                    maxLength: ku.O
                  })
                }), (0, Iu.jsx)(du.c, {
                  label: "classic:disableProtectors",
                  disabled: "Enter" !== gu,
                  children: (0, Iu.jsx)(du.b, {
                    checked: Yu.worldOptions.disableProtectors,
                    setChecked: uu => {
                      fu("disableProtectors", uu)
                    }
                  })
                }), (0, Iu.jsx)(du.c, {
                  label: "classic:disableTribeCreation",
                  disabled: "Enter" !== gu,
                  children: (0, Iu.jsx)(du.b, {
                    checked: Yu.worldOptions.disableTribeCreation,
                    setChecked: uu => {
                      fu("disableTribeCreation", uu)
                    }
                  })
                }), (0, Iu.jsx)(du.c, {
                  label: "classic:voidDeathHeight",
                  circleInfoText: "classic:voidDeathHeightDescription",
                  disabled: "Enter" !== gu,
                  children: (0, Iu.jsx)("input", {
                    type: "number",
                    max: Cu.G,
                    value: null !== (mu = Yu.worldOptions.voidDeathHeight) && void 0 !== mu ? mu : "",
                    onChange: uu => {
                      const Ru = parseInt(uu.target.value);
                      fu("voidDeathHeight", isNaN(Ru) ? null : Ru)
                    }
                  })
                }), (0, Iu.jsx)(du.c, {
                  label: "classic:disableLobbySpawn",
                  disabled: "Enter" !== gu,
                  children: (0, Iu.jsx)(du.b, {
                    checked: Yu.worldOptions.disableLobbySpawn,
                    setChecked: uu => {
                      fu("disableLobbySpawn", uu)
                    }
                  })
                }), (0, Iu.jsx)(du.c, {
                  label: "classic:worldBorder",
                  circleInfoText: "classic:worldBorderDescription",
                  disabled: "Enter" !== gu,
                  children: (0, Iu.jsx)("input", {
                    type: "number",
                    min: Cu.L,
                    max: Cu.H,
                    value: null !== (Gu = Yu.worldOptions.worldBorder) && void 0 !== Gu ? Gu : "",
                    onChange: uu => {
                      const Ru = parseInt(uu.target.value);
                      fu("worldBorder", isNaN(Ru) ? null : Ru)
                    }
                  })
                }), (0, Iu.jsx)(du.c, {
                  label: "classic:disableMobs",
                  disabled: "Enter" !== gu,
                  children: (0, Iu.jsx)(du.b, {
                    checked: Yu.worldOptions.disableMobs,
                    setChecked: uu => {
                      fu("disableMobs", uu)
                    }
                  })
                })]
              })]
            }), wu && (0, Iu.jsx)(eu.e, {
              callbacks: RR,
              disabled: "Enter" !== gu,
              advancedMode: hu
            })]
          })
        }), (0, Iu.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, Iu.jsx)(Bu.l, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: "Enter" !== gu,
            onClick: () => {
              !async function() {
                if ("Enter" === gu) {
                  cu("Loading"), zu("");
                  try {
                    await ru.e.createCustomLobby(Yu), cu("Success")
                  } catch (uu) {
                    zu(uu.message), console.error(uu.message), cu("Enter")
                  }
                }
              }()
            },
            children: tu("general:create")
          }), wu && (0, Iu.jsx)("div", {
            className: "CreateCustomLobbyAdvancedToggle",
            "data-pad-ignore": yR || void 0,
            children: (0, Iu.jsx)(du.c, {
              label: "customLobby:showAdvancedOptions",
              disabled: yR,
              onLabelClick: () => {
                Pu(!hu)
              },
              children: (0, Iu.jsx)(du.b, {
                checked: hu,
                setChecked: Pu
              })
            })
          }), Lu && (0, Iu.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: Lu
          })]
        })]
      })
    }
  },
  36235: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Nu
    });
    var Eu = yu(1035),
      Ku = yu.n(Eu),
      Qu = yu(64),
      mu = yu(4347),
      Ju = yu(1079);

    function Nu(uu) {
      let {
        locked: Ru,
        children: yu
      } = uu;
      const Eu = (0, Qu.useRef)(null),
        Nu = (0, mu.d)(Eu, "y");
      return (0, Ju.jsx)("div", {
        ref: Eu,
        className: Ku()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: Nu.before,
          CreateCustomLobbyBodyMoreBelow: Nu.after
        }),
        "data-pad-ignore": Ru || void 0,
        children: yu
      })
    }
  },
  36229: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Vu,
      f: () => Bu
    });
    var Eu = yu(64),
      Ku = yu(1311),
      Qu = yu(1170),
      mu = yu(1300),
      Ju = yu(3296),
      Nu = yu(4709),
      Xu = yu(1079);

    function Vu(uu) {
      let {
        loading: Ru,
        schematics: yu,
        onSchematicPicked: Eu,
        selectedSchematicIdList: Ku = [],
        disableAutoExport: Nu
      } = uu;
      const {
        t: Vu
      } = (0, Qu.E)();
      return (0, Xu.jsxs)("div", {
        className: "SchematicList",
        children: [Ru && (0, Xu.jsx)(mu.b, {}), !Ru && 0 === yu.length && (0, Xu.jsx)("div", {
          className: "NoSchematicsText",
          children: Vu("worldBuilder:noSavedSchematic")
        }), !Ru && yu.map((uu => (0, Xu.jsx)(Ju.e, {
          source: {
            type: "schematic",
            schematic: uu
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            Eu(uu)
          },
          isSelected: Ku.includes(uu.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: uu.isAutoExported && Nu,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, uu.schematicId)))]
      })
    }

    function ru(uu) {
      let {
        ownedSchematics: Ru,
        currentWorldSchematicId: yu,
        onClose: Ku
      } = uu;
      const {
        t: mu
      } = (0, Qu.E)(), [Ju, ru] = (0, Eu.useState)(null);
      return (0, Xu.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === Ju && (0, Xu.jsxs)(Xu.Fragment, {
          children: [(0, Xu.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: mu("worldBuilder:schematicList")
          }), (0, Xu.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: mu("worldBuilder:clickSchematicForOptions")
          }), (0, Xu.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, Xu.jsx)(Vu, {
              loading: !1,
              schematics: Ru,
              onSchematicPicked: uu => {
                ru(uu)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== Ju && (0, Xu.jsx)(Nu.g, {
          schematic: Ju,
          inSourceWorld: Ju.schematicId === yu,
          onSchematicUpdate: uu => {
            ru(uu)
          },
          onClose: () => {
            ru(null), Ku()
          }
        })]
      })
    }

    function Bu(uu) {
      let {
        ownedSchematics: Ru,
        currentWorldSchematicId: yu,
        onClose: Eu
      } = uu;
      Ku.NotificationProvider.showCustomPopup({
        body: uu => (0, Xu.jsx)(ru, {
          ownedSchematics: Ru,
          currentWorldSchematicId: yu,
          onClose: uu
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: Eu,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  36233: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Xu,
      g: () => Vu
    });
    yu(64);
    var Eu = yu(1035),
      Ku = yu.n(Eu),
      Qu = yu(4409),
      mu = yu(330),
      Ju = yu(1170),
      Nu = yu(1079);

    function Xu(uu) {
      let {
        value: Ru,
        onChange: yu,
        showAll: Eu,
        disabled: Xu = !1
      } = uu;
      const {
        t: Vu
      } = (0, Ju.E)();
      return (0, Nu.jsxs)("div", {
        className: Ku()("BloxdForm GamemodeForm", {
          BasicOptions: !Eu
        }),
        children: [(0, Nu.jsx)("div", {
          className: "SectionTitle",
          children: Vu("classic:defaultGamemode")
        }), (0, Nu.jsx)("div", {
          className: "SectionBody",
          children: Qu.E.map((uu => Eu || (0, Qu.y)(uu) ? (0, Nu.jsx)("button", {
            type: "button",
            className: Ku()("WorldGamemode", {
              Selected: Ru === uu
            }),
            disabled: Xu,
            onClick: () => {
              yu(uu)
            },
            style: {
              "--background-image": `url(${mu.w[uu]})`
            },
            children: mu.v[uu]
          }, uu) : null))
        })]
      })
    }

    function Vu(uu) {
      let {
        mapTypes: Ru,
        value: yu,
        onChange: Eu,
        showAll: Xu,
        disabled: Vu = !1,
        children: ru
      } = uu;
      const {
        t: Bu
      } = (0, Ju.E)();
      return (0, Nu.jsxs)("div", {
        className: Ku()("BloxdForm MapTypeForm", {
          BasicOptions: !Xu
        }),
        children: [(0, Nu.jsx)("div", {
          className: "SectionTitle",
          children: Bu("customLobby:mapType")
        }), (0, Nu.jsx)("div", {
          className: "SectionBody",
          children: Ru.map((uu => Xu || (0, Qu.B)(uu) ? (0, Nu.jsx)("button", {
            type: "button",
            className: Ku()("MapType", {
              Selected: yu === uu
            }),
            disabled: Vu,
            onClick: () => {
              Eu(uu)
            },
            style: {
              "--background-image": `url(${mu.r[uu]})`
            },
            children: mu.o[uu]
          }, uu) : null))
        }), ru]
      })
    }
  },
  36225: () => {}
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);