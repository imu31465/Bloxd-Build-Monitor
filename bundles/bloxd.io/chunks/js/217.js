export const id = 217;
export const ids = [217];
export const modules = {
  36730: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      CreateCustomLobby: () => ku
    });
    ju(36737);
    var su = ju(4809),
      Uu = ju(58),
      Zu = ju(1723),
      Xu = ju(1105),
      lu = ju.n(Xu),
      qu = ju(3309),
      fu = ju(1183),
      Cu = ju(1255),
      bu = ju(4769),
      cu = ju(1506),
      Nu = ju(36740),
      Ou = ju(1244),
      Yu = ju(1376),
      hu = ju(1570),
      Du = ju(22),
      gu = ju(1510),
      Mu = ju(649),
      eu = ju(5102),
      Gu = ju(822),
      pu = ju(1298),
      wu = ju(1278),
      Ju = ju(5110),
      du = ju(1116),
      au = ju(36748),
      Pu = ju(36751),
      ou = ju(1154);

    function ku(uu) {
      var Eu, ju, Xu, ku;
      let {
        gameNameWithVariation: mu,
        close: vu,
        initialDefaultGamemode: Ku
      } = uu;
      const {
        t: Vu
      } = (0, Ou.A)(), ru = (0, hu.useNavigatePreserveSearch)(), [Qu, iu] = (0, Uu.useState)("Enter"), [Wu, Su] = (0, Uu.useState)(""), Iu = Uu.useRef(null), Fu = null === (Eu = Gu.c[mu]) || void 0 === Eu ? void 0 : Eu.showWorldsInsteadOfCustomLobbies, Bu = Fu ? 1 : null === (ju = Gu.c[mu]) || void 0 === ju ? void 0 : ju.customLobbyCustomSchematicLimit, [Lu, tu] = (0, Uu.useState)(!Fu);
      Ku || (Ku = "classic_creative" === mu || "classic_creativeFlat" === mu ? "creative" : "classic" === mu ? "peaceful" : "survival");
      const xu = {
        baseOptions: {
          gameNameWithVariation: Fu ? "classic" : mu,
          name: "",
          visibility: "unlisted"
        },
        listedOptions: {
          description: "",
          color: "",
          emojis: ""
        },
        mapOptions: {
          mapType: "classic_creativeFlat" === mu ? "flat" : "default",
          schematicIdList: []
        },
        worldOptions: null
      };
      Fu && (xu.worldOptions = {
        defaultGamemode: Ku,
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
      const [Tu, Hu] = (0, Uu.useState)(xu), [Au, nu] = (0, Uu.useState)(null);

      function yu(uu, Eu) {
        Hu({
          ...Tu,
          baseOptions: {
            ...Tu.baseOptions,
            [uu]: Eu
          }
        })
      }

      function zu(uu, Eu) {
        Hu({
          ...Tu,
          listedOptions: {
            ...Tu.listedOptions,
            [uu]: Eu
          }
        })
      }

      function Ru(uu, Eu) {
        Hu({
          ...Tu,
          worldOptions: {
            ...Tu.worldOptions,
            [uu]: Eu
          }
        })
      }

      function uE(uu) {
        Hu({
          ...Tu,
          mapOptions: {
            ...Tu.mapOptions,
            ...uu
          }
        })
      }(0, Uu.useEffect)((() => {
        bu.d.getNewStarterName().then((uu => {
          Hu((Eu => "" !== Eu.baseOptions.name ? Eu : {
            ...Eu,
            baseOptions: {
              ...Eu.baseOptions,
              name: uu
            }
          }))
        })).catch((uu => {
          console.error("Error getting new starter name:", uu)
        }))
      }), []), (0, Uu.useEffect)((() => {
        "customSchematic" === Tu.mapOptions.mapType && null === Au && (0, fu.postJsonWithMetricsCookiesAndJsonResponse)(`${Cu.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
          retries: 0,
          minTimeout: 3e3
        }).then((uu => {
          nu(uu)
        }))
      }), [Tu.mapOptions.mapType, Au]);
      const EE = {
          tpRequests: {
            isEnabled: () => !Tu.worldOptions.disableTpRequests,
            Wk: uu => {
              Ru("disableTpRequests", !uu)
            }
          },
          spawnProtection: {
            isEnabled: () => Tu.worldOptions.spawnProtection,
            Wk: uu => {
              Ru("spawnProtection", uu)
            }
          },
          spawnReset: {
            isEnabled: () => Tu.worldOptions.enableSpawnReset,
            Wk: uu => {
              Ru("enableSpawnReset", uu)
            }
          },
          smpMarketplace: {
            isEnabled: () => Tu.worldOptions.enableSmpMarketplace,
            Wk: uu => {
              Ru("enableSmpMarketplace", uu)
            }
          },
          survivalGuns: {
            isEnabled: () => Tu.worldOptions.enableSurvivalGuns,
            Wk: uu => {
              Ru("enableSurvivalGuns", uu)
            }
          },
          fallDamage: {
            isEnabled: () => !Tu.worldOptions.disableFallDamage,
            Wk: uu => {
              Ru("disableFallDamage", !uu)
            }
          },
          dayNight: {
            isEnabled: () => Tu.worldOptions.enableDayNight,
            Wk: uu => {
              Ru("enableDayNight", uu)
            }
          }
        },
        jE = "Enter" !== Qu,
        sE = (0, ou.jsx)(eu.e, {
          className: "NameInput",
          label: "general:name",
          disabled: "Enter" !== Qu,
          children: (0, ou.jsx)(Zu.d, {
            domRef: Iu,
            onValueChange: (uu, Eu) => {
              const ju = (0, wu.tb)(uu);
              yu("name", ju), Iu.current.value = ju
            },
            maxLength: wu.P,
            defaultValue: Tu.baseOptions.name
          })
        });
      return (0, ou.jsxs)("div", {
        className: lu()("CreateCustomLobby", {
          CreateCustomLobbySuccess: "Success" === Qu,
          AdvancedMode: Lu
        }),
        children: ["Success" === Qu && (0, ou.jsxs)("div", {
          className: "CreateCustomLobbySuccessOverlay",
          children: [(0, ou.jsxs)("div", {
            className: "CreateCustomLobbySuccessTitle FullyFancyText AnimFadeInScaleUp",
            children: [(0, ou.jsx)(du.e, {
              name: "check"
            }), (0, ou.jsx)(gu.c, {})]
          }), (0, ou.jsx)("div", {
            className: "CreateCustomLobbySuccessButtons AnimFadeInScaleUp",
            children: (0, ou.jsx)(cu.p, {
              padDefaultFocus: !0,
              onClick: () => {
                (0, Du.j)("worldCreation"), ru((0, Yu.c)(mu, Tu.baseOptions.name))
              },
              children: Vu("homePage:joinLobbyName", {
                lobbyName: Tu.baseOptions.name
              })
            })
          })]
        }), (0, ou.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, ou.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: Vu(Fu ? "homePage:createWorld" : "homePage:createCustomLobby")
          })
        }), (0, ou.jsx)(Pu.c, {
          locked: jE,
          children: (0, ou.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [!Lu && sE, Lu && (0, ou.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, ou.jsx)("div", {
                className: "SectionTitle",
                children: Vu("customLobby:generalOptions")
              }), (0, ou.jsxs)("div", {
                className: "SectionBody",
                children: [sE, (0, ou.jsx)(eu.e, {
                  label: "customLobby:visibility",
                  circleInfoText: Vu("customLobby:visibilityDescription"),
                  disabled: "Enter" !== Qu,
                  children: (0, ou.jsx)(qu.c, {
                    options: su.u.map((uu => ({
                      value: uu,
                      label: su.f[uu]
                    }))),
                    value: Tu.baseOptions.visibility,
                    onChange: uu => {
                      yu("visibility", uu.value)
                    }
                  })
                })]
              })]
            }), Fu && (0, ou.jsx)(au.d, {
              value: Tu.worldOptions.defaultGamemode,
              onChange: uu => {
                Ru("defaultGamemode", uu)
              },
              showAll: Lu,
              disabled: jE
            }), (Fu || !(0, Mu.H)(Bu) && Bu > 0) && (0, ou.jsx)(au.g, {
              mapTypes: Fu ? su.J : su.r,
              value: Tu.mapOptions.mapType,
              onChange: uu => {
                const Eu = {
                  mapType: uu
                };
                "customSchematic" !== uu && (Eu.schematicIdList = []), uE(Eu)
              },
              showAll: Lu,
              disabled: jE,
              children: "customSchematic" === Tu.mapOptions.mapType && (0, ou.jsxs)(ou.Fragment, {
                children: [(0, ou.jsxs)("div", {
                  className: "SchematicListTitle AnimFadeIn",
                  children: [Fu && Vu("customLobby:selectWorldSchematic"), !Fu && Vu("customLobby:selectCustomLobbySchematics", {
                    schematicLimit: Bu
                  })]
                }), (0, ou.jsx)("div", {
                  className: lu()("SchematicListContainer AnimFadeIn", {
                    SchematicListContainerDisabled: "Enter" !== Qu
                  }),
                  children: (0, ou.jsx)(Nu.c, {
                    loading: null === Au,
                    schematics: null !== Au && void 0 !== Au ? Au : [],
                    onSchematicPicked: function(uu) {
                      const Eu = Tu.mapOptions.schematicIdList;
                      if (Eu.includes(uu.schematicId)) uE({
                        schematicIdList: Eu.filter((Eu => Eu !== uu.schematicId))
                      });
                      else {
                        if (Bu && Tu.mapOptions.schematicIdList.length >= Bu) return;
                        uE({
                          schematicIdList: [...Tu.mapOptions.schematicIdList, uu.schematicId]
                        })
                      }
                    },
                    selectedSchematicIdList: Tu.mapOptions.schematicIdList,
                    disableAutoExport: !0
                  })
                })]
              })
            }), Lu && (0, ou.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, ou.jsx)("div", {
                className: "SectionTitle",
                children: Vu("customLobby:listedOptions")
              }), (0, ou.jsxs)("div", {
                className: "SectionBody",
                children: [(0, ou.jsx)(eu.e, {
                  label: "general:description",
                  className: "CustomLobbyDescription",
                  disabled: "Enter" !== Qu,
                  children: (0, ou.jsx)(Zu.d, {
                    onValueChange: (uu, Eu) => {
                      zu("description", uu)
                    },
                    maxLength: 100,
                    defaultValue: Tu.listedOptions.description
                  })
                }), (0, ou.jsx)(eu.e, {
                  label: "general:color",
                  circleInfoText: "customLobby:lobbyColorDescription",
                  disabled: "Enter" !== Qu,
                  children: (0, ou.jsx)("div", {
                    className: "OtherInput",
                    children: (0, ou.jsx)("input", {
                      type: "color",
                      value: Tu.listedOptions.color,
                      onChange: uu => {
                        zu("color", uu.target.value)
                      }
                    })
                  })
                }), (0, ou.jsx)(eu.e, {
                  label: "general:emojis",
                  circleInfoText: "customLobby:lobbyEmojisDescription",
                  disabled: "Enter" !== Qu,
                  children: (0, ou.jsx)(Zu.d, {
                    onValueChange: (uu, Eu) => {
                      zu("emojis", uu)
                    },
                    maxLength: 6,
                    defaultValue: Tu.listedOptions.emojis
                  })
                })]
              })]
            }), Lu && Fu && (0, ou.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, ou.jsx)("div", {
                className: "SectionTitle",
                children: Vu("customLobby:advancedOptions")
              }), (0, ou.jsxs)("div", {
                className: "SectionBody",
                children: [(0, ou.jsx)(eu.e, {
                  label: "classic:worldGenSeed",
                  disabled: "Enter" !== Qu,
                  children: (0, ou.jsx)(Zu.d, {
                    onValueChange: (uu, Eu) => {
                      Ru("worldGenSeed", uu)
                    },
                    maxLength: wu.P
                  })
                }), (0, ou.jsx)(eu.e, {
                  label: "classic:disableProtectors",
                  disabled: "Enter" !== Qu,
                  children: (0, ou.jsx)(eu.c, {
                    checked: Tu.worldOptions.disableProtectors,
                    setChecked: uu => {
                      Ru("disableProtectors", uu)
                    }
                  })
                }), (0, ou.jsx)(eu.e, {
                  label: "classic:disableTribeCreation",
                  disabled: "Enter" !== Qu,
                  children: (0, ou.jsx)(eu.c, {
                    checked: Tu.worldOptions.disableTribeCreation,
                    setChecked: uu => {
                      Ru("disableTribeCreation", uu)
                    }
                  })
                }), (0, ou.jsx)(eu.e, {
                  label: "classic:voidDeathHeight",
                  circleInfoText: "classic:voidDeathHeightDescription",
                  disabled: "Enter" !== Qu,
                  children: (0, ou.jsx)("input", {
                    type: "number",
                    max: pu.D,
                    value: null !== (Xu = Tu.worldOptions.voidDeathHeight) && void 0 !== Xu ? Xu : "",
                    onChange: uu => {
                      const Eu = parseInt(uu.target.value);
                      Ru("voidDeathHeight", isNaN(Eu) ? null : Eu)
                    }
                  })
                }), (0, ou.jsx)(eu.e, {
                  label: "classic:disableLobbySpawn",
                  disabled: "Enter" !== Qu,
                  children: (0, ou.jsx)(eu.c, {
                    checked: Tu.worldOptions.disableLobbySpawn,
                    setChecked: uu => {
                      Ru("disableLobbySpawn", uu)
                    }
                  })
                }), (0, ou.jsx)(eu.e, {
                  label: "classic:worldBorder",
                  circleInfoText: "classic:worldBorderDescription",
                  disabled: "Enter" !== Qu,
                  children: (0, ou.jsx)("input", {
                    type: "number",
                    min: pu.I,
                    max: pu.E,
                    value: null !== (ku = Tu.worldOptions.worldBorder) && void 0 !== ku ? ku : "",
                    onChange: uu => {
                      const Eu = parseInt(uu.target.value);
                      Ru("worldBorder", isNaN(Eu) ? null : Eu)
                    }
                  })
                }), (0, ou.jsx)(eu.e, {
                  label: "classic:disableMobs",
                  disabled: "Enter" !== Qu,
                  children: (0, ou.jsx)(eu.c, {
                    checked: Tu.worldOptions.disableMobs,
                    setChecked: uu => {
                      Ru("disableMobs", uu)
                    }
                  })
                })]
              })]
            }), Fu && (0, ou.jsx)(Ju.d, {
              callbacks: EE,
              disabled: "Enter" !== Qu,
              advancedMode: Lu
            })]
          })
        }), (0, ou.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, ou.jsx)(cu.p, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: "Enter" !== Qu,
            onClick: () => {
              !async function() {
                if ("Enter" === Qu) {
                  iu("Loading"), Su("");
                  try {
                    await bu.d.createCustomLobby(Tu), iu("Success")
                  } catch (uu) {
                    Su(uu.message), console.error(uu.message), iu("Enter")
                  }
                }
              }()
            },
            children: Vu("general:create")
          }), Fu && (0, ou.jsx)("div", {
            className: "CreateCustomLobbyAdvancedToggle",
            "data-pad-ignore": jE || void 0,
            children: (0, ou.jsx)(eu.e, {
              label: "customLobby:showAdvancedOptions",
              disabled: jE,
              onLabelClick: () => {
                tu(!Lu)
              },
              children: (0, ou.jsx)(eu.c, {
                checked: Lu,
                setChecked: tu
              })
            })
          }), Wu && (0, ou.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: Wu
          })]
        })]
      })
    }
  },
  36751: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => qu
    });
    var su = ju(1105),
      Uu = ju.n(su),
      Zu = ju(58),
      Xu = ju(4756),
      lu = ju(1154);

    function qu(uu) {
      let {
        locked: Eu,
        children: ju
      } = uu;
      const su = (0, Zu.useRef)(null),
        qu = (0, Xu.b)(su, "y");
      return (0, lu.jsx)("div", {
        ref: su,
        className: Uu()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: qu.before,
          CreateCustomLobbyBodyMoreBelow: qu.after
        }),
        "data-pad-ignore": Eu || void 0,
        children: ju
      })
    }
  },
  36740: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Cu,
      e: () => cu
    });
    var su = ju(58),
      Uu = ju(1405),
      Zu = ju(1244),
      Xu = ju(1393),
      lu = ju(3667),
      qu = ju(5099),
      fu = ju(1154);

    function Cu(uu) {
      let {
        loading: Eu,
        schematics: ju,
        onSchematicPicked: su,
        selectedSchematicIdList: Uu = [],
        disableAutoExport: qu
      } = uu;
      const {
        t: Cu
      } = (0, Zu.A)();
      return (0, fu.jsxs)("div", {
        className: "SchematicList",
        children: [Eu && (0, fu.jsx)(Xu.b, {}), !Eu && 0 === ju.length && (0, fu.jsx)("div", {
          className: "NoSchematicsText",
          children: Cu("worldBuilder:noSavedSchematic")
        }), !Eu && ju.map((uu => (0, fu.jsx)(lu.e, {
          source: {
            type: "schematic",
            schematic: uu
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            su(uu)
          },
          isSelected: Uu.includes(uu.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: uu.isAutoExported && qu,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, uu.schematicId)))]
      })
    }

    function bu(uu) {
      let {
        ownedSchematics: Eu,
        currentWorldSchematicId: ju,
        onClose: Uu
      } = uu;
      const {
        t: Xu
      } = (0, Zu.A)(), [lu, bu] = (0, su.useState)(null);
      return (0, fu.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === lu && (0, fu.jsxs)(fu.Fragment, {
          children: [(0, fu.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: Xu("worldBuilder:schematicList")
          }), (0, fu.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: Xu("worldBuilder:clickSchematicForOptions")
          }), (0, fu.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, fu.jsx)(Cu, {
              loading: !1,
              schematics: Eu,
              onSchematicPicked: uu => {
                bu(uu)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== lu && (0, fu.jsx)(qu.h, {
          schematic: lu,
          inSourceWorld: lu.schematicId === ju,
          onSchematicUpdate: uu => {
            bu(uu)
          },
          onClose: () => {
            bu(null), Uu()
          }
        })]
      })
    }

    function cu(uu) {
      let {
        ownedSchematics: Eu,
        currentWorldSchematicId: ju,
        onClose: su
      } = uu;
      Uu.NotificationProvider.showCustomPopup({
        body: uu => (0, fu.jsx)(bu, {
          ownedSchematics: Eu,
          currentWorldSchematicId: ju,
          onClose: uu
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: su,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  36748: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => fu,
      g: () => Cu
    });
    ju(58);
    var su = ju(1105),
      Uu = ju.n(su),
      Zu = ju(4809),
      Xu = ju(337),
      lu = ju(1244),
      qu = ju(1154);

    function fu(uu) {
      let {
        value: Eu,
        onChange: ju,
        showAll: su,
        disabled: fu = !1
      } = uu;
      const {
        t: Cu
      } = (0, lu.A)();
      return (0, qu.jsxs)("div", {
        className: Uu()("BloxdForm GamemodeForm", {
          BasicOptions: !su
        }),
        children: [(0, qu.jsx)("div", {
          className: "SectionTitle",
          children: Cu("classic:defaultGamemode")
        }), (0, qu.jsx)("div", {
          className: "SectionBody",
          children: Zu.G.map((uu => su || (0, Zu.z)(uu) ? (0, qu.jsx)("button", {
            type: "button",
            className: Uu()("WorldGamemode", {
              Selected: Eu === uu
            }),
            disabled: fu,
            onClick: () => {
              ju(uu)
            },
            style: {
              "--background-image": `url(${Xu.v[uu]})`
            },
            children: Xu.r[uu]
          }, uu) : null))
        })]
      })
    }

    function Cu(uu) {
      let {
        mapTypes: Eu,
        value: ju,
        onChange: su,
        showAll: fu,
        disabled: Cu = !1,
        children: bu
      } = uu;
      const {
        t: cu
      } = (0, lu.A)();
      return (0, qu.jsxs)("div", {
        className: Uu()("BloxdForm MapTypeForm", {
          BasicOptions: !fu
        }),
        children: [(0, qu.jsx)("div", {
          className: "SectionTitle",
          children: cu("customLobby:mapType")
        }), (0, qu.jsx)("div", {
          className: "SectionBody",
          children: Eu.map((uu => fu || (0, Zu.D)(uu) ? (0, qu.jsx)("button", {
            type: "button",
            className: Uu()("MapType", {
              Selected: ju === uu
            }),
            disabled: Cu,
            onClick: () => {
              su(uu)
            },
            style: {
              "--background-image": `url(${Xu.k[uu]})`
            },
            children: Xu.j[uu]
          }, uu) : null))
        }), bu]
      })
    }
  },
  36737: () => {}
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);