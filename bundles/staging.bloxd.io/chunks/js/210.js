export const id = 210;
export const ids = [210];
export const modules = {
  36507: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      CreateCustomLobby: () => md
    });
    kd(36513);
    var pd = kd(4482),
      Nd = kd(56),
      Wd = kd(1714),
      Pd = kd(1044),
      Zd = kd.n(Pd),
      gd = kd(2999),
      Cd = kd(1147),
      Kd = kd(1220),
      od = kd(4434),
      ld = kd(1461),
      Qd = kd(36522),
      Ld = kd(1211),
      Od = kd(1352),
      ed = kd(1543),
      Rd = kd(22),
      Id = kd(1469),
      Gd = kd(610),
      vd = kd(4821),
      xd = kd(756),
      qd = kd(1260),
      Bd = kd(1245),
      sd = kd(4829),
      ad = kd(1059),
      Md = kd(36524),
      Fd = kd(36527),
      Yd = kd(1103);

    function md(dd) {
      var Jd, kd, Pd, md;
      let {
        gameNameWithVariation: bd,
        close: Sd,
        initialDefaultGamemode: jd
      } = dd;
      const {
        t: Xd
      } = (0, Ld.B)(), fd = (0, ed.useNavigatePreserveSearch)(), [nd, Ud] = (0, Nd.useState)("Enter"), [yd, Dd] = (0, Nd.useState)(""), Td = Nd.useRef(null), Ed = null === (Jd = xd.d[bd]) || void 0 === Jd ? void 0 : Jd.showWorldsInsteadOfCustomLobbies, cd = Ed ? 1 : null === (kd = xd.d[bd]) || void 0 === kd ? void 0 : kd.customLobbyCustomSchematicLimit, [hd, rd] = (0, Nd.useState)(!Ed);
      jd || (jd = "classic_creative" === bd || "classic_creativeFlat" === bd ? "creative" : "classic" === bd ? "peaceful" : "survival");
      const ud = {
        baseOptions: {
          gameNameWithVariation: Ed ? "classic" : bd,
          name: "",
          visibility: "unlisted"
        },
        listedOptions: {
          description: "",
          color: "",
          emojis: ""
        },
        mapOptions: {
          mapType: "classic_creativeFlat" === bd ? "flat" : "default",
          schematicIdList: []
        },
        worldOptions: null
      };
      Ed && (ud.worldOptions = {
        defaultGamemode: jd,
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
      const [td, Vd] = (0, Nd.useState)(ud), [zd, Hd] = (0, Nd.useState)(null);

      function wd(dd, Jd) {
        Vd({
          ...td,
          baseOptions: {
            ...td.baseOptions,
            [dd]: Jd
          }
        })
      }

      function Ad(dd, Jd) {
        Vd({
          ...td,
          listedOptions: {
            ...td.listedOptions,
            [dd]: Jd
          }
        })
      }

      function dJ(dd, Jd) {
        Vd({
          ...td,
          worldOptions: {
            ...td.worldOptions,
            [dd]: Jd
          }
        })
      }

      function JJ(dd) {
        Vd({
          ...td,
          mapOptions: {
            ...td.mapOptions,
            ...dd
          }
        })
      }(0, Nd.useEffect)((() => {
        od.e.getNewStarterName().then((dd => {
          Vd((Jd => "" !== Jd.baseOptions.name ? Jd : {
            ...Jd,
            baseOptions: {
              ...Jd.baseOptions,
              name: dd
            }
          }))
        })).catch((dd => {
          console.error("Error getting new starter name:", dd)
        }))
      }), []), (0, Nd.useEffect)((() => {
        "customSchematic" === td.mapOptions.mapType && null === zd && (0, Cd.postJsonWithMetricsCookiesAndJsonResponse)(`${Kd.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
          retries: 0,
          minTimeout: 3e3
        }).then((dd => {
          Hd(dd)
        }))
      }), [td.mapOptions.mapType, zd]);
      const kJ = {
          tpRequests: {
            isEnabled: () => !td.worldOptions.disableTpRequests,
            XM: dd => {
              dJ("disableTpRequests", !dd)
            }
          },
          spawnProtection: {
            isEnabled: () => td.worldOptions.spawnProtection,
            XM: dd => {
              dJ("spawnProtection", dd)
            }
          },
          spawnReset: {
            isEnabled: () => td.worldOptions.enableSpawnReset,
            XM: dd => {
              dJ("enableSpawnReset", dd)
            }
          },
          smpMarketplace: {
            isEnabled: () => td.worldOptions.enableSmpMarketplace,
            XM: dd => {
              dJ("enableSmpMarketplace", dd)
            }
          },
          survivalGuns: {
            isEnabled: () => td.worldOptions.enableSurvivalGuns,
            XM: dd => {
              dJ("enableSurvivalGuns", dd)
            }
          },
          fallDamage: {
            isEnabled: () => !td.worldOptions.disableFallDamage,
            XM: dd => {
              dJ("disableFallDamage", !dd)
            }
          },
          dayNight: {
            isEnabled: () => td.worldOptions.enableDayNight,
            XM: dd => {
              dJ("enableDayNight", dd)
            }
          }
        },
        pJ = "Enter" !== nd,
        NJ = (0, Yd.jsx)(vd.c, {
          className: "NameInput",
          label: "general:name",
          disabled: "Enter" !== nd,
          children: (0, Yd.jsx)(Wd.e, {
            domRef: Td,
            onValueChange: (dd, Jd) => {
              const kd = (0, Bd.tb)(dd);
              wd("name", kd), Td.current.value = kd
            },
            maxLength: Bd.O,
            defaultValue: td.baseOptions.name
          })
        });
      return (0, Yd.jsxs)("div", {
        className: Zd()("CreateCustomLobby", {
          CreateCustomLobbySuccess: "Success" === nd,
          AdvancedMode: hd
        }),
        children: ["Success" === nd && (0, Yd.jsxs)("div", {
          className: "CreateCustomLobbySuccessOverlay",
          children: [(0, Yd.jsxs)("div", {
            className: "CreateCustomLobbySuccessTitle FullyFancyText AnimFadeInScaleUp",
            children: [(0, Yd.jsx)(ad.e, {
              name: "check"
            }), (0, Yd.jsx)(Id.e, {})]
          }), (0, Yd.jsx)("div", {
            className: "CreateCustomLobbySuccessButtons AnimFadeInScaleUp",
            children: (0, Yd.jsx)(ld.j, {
              padDefaultFocus: !0,
              onClick: () => {
                (0, Rd.f)("worldCreation"), fd((0, Od.c)(bd, td.baseOptions.name))
              },
              children: Xd("homePage:joinLobbyName", {
                lobbyName: td.baseOptions.name
              })
            })
          })]
        }), (0, Yd.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, Yd.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: Xd(Ed ? "homePage:createWorld" : "homePage:createCustomLobby")
          })
        }), (0, Yd.jsx)(Fd.c, {
          locked: pJ,
          children: (0, Yd.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [!hd && NJ, hd && (0, Yd.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, Yd.jsx)("div", {
                className: "SectionTitle",
                children: Xd("customLobby:generalOptions")
              }), (0, Yd.jsxs)("div", {
                className: "SectionBody",
                children: [NJ, (0, Yd.jsx)(vd.c, {
                  label: "customLobby:visibility",
                  circleInfoText: Xd("customLobby:visibilityDescription"),
                  disabled: "Enter" !== nd,
                  children: (0, Yd.jsx)(gd.c, {
                    options: pd.p.map((dd => ({
                      value: dd,
                      label: pd.g[dd]
                    }))),
                    value: td.baseOptions.visibility,
                    onChange: dd => {
                      wd("visibility", dd.value)
                    }
                  })
                })]
              })]
            }), Ed && (0, Yd.jsx)(Md.e, {
              value: td.worldOptions.defaultGamemode,
              onChange: dd => {
                dJ("defaultGamemode", dd)
              },
              showAll: hd,
              disabled: pJ
            }), (Ed || !(0, Gd.I)(cd) && cd > 0) && (0, Yd.jsx)(Md.h, {
              mapTypes: Ed ? pd.F : pd.o,
              value: td.mapOptions.mapType,
              onChange: dd => {
                const Jd = {
                  mapType: dd
                };
                "customSchematic" !== dd && (Jd.schematicIdList = []), JJ(Jd)
              },
              showAll: hd,
              disabled: pJ,
              children: "customSchematic" === td.mapOptions.mapType && (0, Yd.jsxs)(Yd.Fragment, {
                children: [(0, Yd.jsxs)("div", {
                  className: "SchematicListTitle AnimFadeIn",
                  children: [Ed && Xd("customLobby:selectWorldSchematic"), !Ed && Xd("customLobby:selectCustomLobbySchematics", {
                    schematicLimit: cd
                  })]
                }), (0, Yd.jsx)("div", {
                  className: Zd()("SchematicListContainer AnimFadeIn", {
                    SchematicListContainerDisabled: "Enter" !== nd
                  }),
                  children: (0, Yd.jsx)(Qd.c, {
                    loading: null === zd,
                    schematics: null !== zd && void 0 !== zd ? zd : [],
                    onSchematicPicked: function(dd) {
                      const Jd = td.mapOptions.schematicIdList;
                      if (Jd.includes(dd.schematicId)) JJ({
                        schematicIdList: Jd.filter((Jd => Jd !== dd.schematicId))
                      });
                      else {
                        if (cd && td.mapOptions.schematicIdList.length >= cd) return;
                        JJ({
                          schematicIdList: [...td.mapOptions.schematicIdList, dd.schematicId]
                        })
                      }
                    },
                    selectedSchematicIdList: td.mapOptions.schematicIdList,
                    disableAutoExport: !0
                  })
                })]
              })
            }), hd && (0, Yd.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, Yd.jsx)("div", {
                className: "SectionTitle",
                children: Xd("customLobby:listedOptions")
              }), (0, Yd.jsxs)("div", {
                className: "SectionBody",
                children: [(0, Yd.jsx)(vd.c, {
                  label: "general:description",
                  className: "CustomLobbyDescription",
                  disabled: "Enter" !== nd,
                  children: (0, Yd.jsx)(Wd.e, {
                    onValueChange: (dd, Jd) => {
                      Ad("description", dd)
                    },
                    maxLength: 100,
                    defaultValue: td.listedOptions.description
                  })
                }), (0, Yd.jsx)(vd.c, {
                  label: "general:color",
                  circleInfoText: "customLobby:lobbyColorDescription",
                  disabled: "Enter" !== nd,
                  children: (0, Yd.jsx)("div", {
                    className: "OtherInput",
                    children: (0, Yd.jsx)("input", {
                      type: "color",
                      value: td.listedOptions.color,
                      onChange: dd => {
                        Ad("color", dd.target.value)
                      }
                    })
                  })
                }), (0, Yd.jsx)(vd.c, {
                  label: "general:emojis",
                  circleInfoText: "customLobby:lobbyEmojisDescription",
                  disabled: "Enter" !== nd,
                  children: (0, Yd.jsx)(Wd.e, {
                    onValueChange: (dd, Jd) => {
                      Ad("emojis", dd)
                    },
                    maxLength: 6,
                    defaultValue: td.listedOptions.emojis
                  })
                })]
              })]
            }), hd && Ed && (0, Yd.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, Yd.jsx)("div", {
                className: "SectionTitle",
                children: Xd("customLobby:advancedOptions")
              }), (0, Yd.jsxs)("div", {
                className: "SectionBody",
                children: [(0, Yd.jsx)(vd.c, {
                  label: "classic:worldGenSeed",
                  disabled: "Enter" !== nd,
                  children: (0, Yd.jsx)(Wd.e, {
                    onValueChange: (dd, Jd) => {
                      dJ("worldGenSeed", dd)
                    },
                    maxLength: Bd.O
                  })
                }), (0, Yd.jsx)(vd.c, {
                  label: "classic:disableProtectors",
                  disabled: "Enter" !== nd,
                  children: (0, Yd.jsx)(vd.b, {
                    checked: td.worldOptions.disableProtectors,
                    setChecked: dd => {
                      dJ("disableProtectors", dd)
                    }
                  })
                }), (0, Yd.jsx)(vd.c, {
                  label: "classic:disableTribeCreation",
                  disabled: "Enter" !== nd,
                  children: (0, Yd.jsx)(vd.b, {
                    checked: td.worldOptions.disableTribeCreation,
                    setChecked: dd => {
                      dJ("disableTribeCreation", dd)
                    }
                  })
                }), (0, Yd.jsx)(vd.c, {
                  label: "classic:voidDeathHeight",
                  circleInfoText: "classic:voidDeathHeightDescription",
                  disabled: "Enter" !== nd,
                  children: (0, Yd.jsx)("input", {
                    type: "number",
                    max: qd.F,
                    value: null !== (Pd = td.worldOptions.voidDeathHeight) && void 0 !== Pd ? Pd : "",
                    onChange: dd => {
                      const Jd = parseInt(dd.target.value);
                      dJ("voidDeathHeight", isNaN(Jd) ? null : Jd)
                    }
                  })
                }), (0, Yd.jsx)(vd.c, {
                  label: "classic:disableLobbySpawn",
                  disabled: "Enter" !== nd,
                  children: (0, Yd.jsx)(vd.b, {
                    checked: td.worldOptions.disableLobbySpawn,
                    setChecked: dd => {
                      dJ("disableLobbySpawn", dd)
                    }
                  })
                }), (0, Yd.jsx)(vd.c, {
                  label: "classic:worldBorder",
                  circleInfoText: "classic:worldBorderDescription",
                  disabled: "Enter" !== nd,
                  children: (0, Yd.jsx)("input", {
                    type: "number",
                    min: qd.L,
                    max: qd.H,
                    value: null !== (md = td.worldOptions.worldBorder) && void 0 !== md ? md : "",
                    onChange: dd => {
                      const Jd = parseInt(dd.target.value);
                      dJ("worldBorder", isNaN(Jd) ? null : Jd)
                    }
                  })
                }), (0, Yd.jsx)(vd.c, {
                  label: "classic:disableMobs",
                  disabled: "Enter" !== nd,
                  children: (0, Yd.jsx)(vd.b, {
                    checked: td.worldOptions.disableMobs,
                    setChecked: dd => {
                      dJ("disableMobs", dd)
                    }
                  })
                })]
              })]
            }), Ed && (0, Yd.jsx)(sd.d, {
              callbacks: kJ,
              disabled: "Enter" !== nd,
              advancedMode: hd
            })]
          })
        }), (0, Yd.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, Yd.jsx)(ld.j, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: "Enter" !== nd,
            onClick: () => {
              !async function() {
                if ("Enter" === nd) {
                  Ud("Loading"), Dd("");
                  try {
                    await od.e.createCustomLobby(td), Ud("Success")
                  } catch (dd) {
                    Dd(dd.message), console.error(dd.message), Ud("Enter")
                  }
                }
              }()
            },
            children: Xd("general:create")
          }), Ed && (0, Yd.jsx)("div", {
            className: "CreateCustomLobbyAdvancedToggle",
            "data-pad-ignore": pJ || void 0,
            children: (0, Yd.jsx)(vd.c, {
              label: "customLobby:showAdvancedOptions",
              disabled: pJ,
              onLabelClick: () => {
                rd(!hd)
              },
              children: (0, Yd.jsx)(vd.b, {
                checked: hd,
                setChecked: rd
              })
            })
          }), yd && (0, Yd.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: yd
          })]
        })]
      })
    }
  },
  36527: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => gd
    });
    var pd = kd(1044),
      Nd = kd.n(pd),
      Wd = kd(56),
      Pd = kd(4429),
      Zd = kd(1103);

    function gd(dd) {
      let {
        locked: Jd,
        children: kd
      } = dd;
      const pd = (0, Wd.useRef)(null),
        gd = (0, Pd.b)(pd, "y");
      return (0, Zd.jsx)("div", {
        ref: pd,
        className: Nd()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: gd.before,
          CreateCustomLobbyBodyMoreBelow: gd.after
        }),
        "data-pad-ignore": Jd || void 0,
        children: kd
      })
    }
  },
  36522: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Kd,
      e: () => ld
    });
    var pd = kd(56),
      Nd = kd(1371),
      Wd = kd(1211),
      Pd = kd(1359),
      Zd = kd(3332),
      gd = kd(4813),
      Cd = kd(1103);

    function Kd(dd) {
      let {
        loading: Jd,
        schematics: kd,
        onSchematicPicked: pd,
        selectedSchematicIdList: Nd = [],
        disableAutoExport: gd
      } = dd;
      const {
        t: Kd
      } = (0, Wd.B)();
      return (0, Cd.jsxs)("div", {
        className: "SchematicList",
        children: [Jd && (0, Cd.jsx)(Pd.b, {}), !Jd && 0 === kd.length && (0, Cd.jsx)("div", {
          className: "NoSchematicsText",
          children: Kd("worldBuilder:noSavedSchematic")
        }), !Jd && kd.map((dd => (0, Cd.jsx)(Zd.h, {
          source: {
            type: "schematic",
            schematic: dd
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            pd(dd)
          },
          isSelected: Nd.includes(dd.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: dd.isAutoExported && gd,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, dd.schematicId)))]
      })
    }

    function od(dd) {
      let {
        ownedSchematics: Jd,
        currentWorldSchematicId: kd,
        onClose: Nd
      } = dd;
      const {
        t: Pd
      } = (0, Wd.B)(), [Zd, od] = (0, pd.useState)(null);
      return (0, Cd.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === Zd && (0, Cd.jsxs)(Cd.Fragment, {
          children: [(0, Cd.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: Pd("worldBuilder:schematicList")
          }), (0, Cd.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: Pd("worldBuilder:clickSchematicForOptions")
          }), (0, Cd.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, Cd.jsx)(Kd, {
              loading: !1,
              schematics: Jd,
              onSchematicPicked: dd => {
                od(dd)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== Zd && (0, Cd.jsx)(gd.g, {
          schematic: Zd,
          inSourceWorld: Zd.schematicId === kd,
          onSchematicUpdate: dd => {
            od(dd)
          },
          onClose: () => {
            od(null), Nd()
          }
        })]
      })
    }

    function ld(dd) {
      let {
        ownedSchematics: Jd,
        currentWorldSchematicId: kd,
        onClose: pd
      } = dd;
      Nd.NotificationProvider.showCustomPopup({
        body: dd => (0, Cd.jsx)(od, {
          ownedSchematics: Jd,
          currentWorldSchematicId: kd,
          onClose: dd
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: pd,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  36524: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Cd,
      h: () => Kd
    });
    kd(56);
    var pd = kd(1044),
      Nd = kd.n(pd),
      Wd = kd(4482),
      Pd = kd(300),
      Zd = kd(1211),
      gd = kd(1103);

    function Cd(dd) {
      let {
        value: Jd,
        onChange: kd,
        showAll: pd,
        disabled: Cd = !1
      } = dd;
      const {
        t: Kd
      } = (0, Zd.B)();
      return (0, gd.jsxs)("div", {
        className: Nd()("BloxdForm GamemodeForm", {
          BasicOptions: !pd
        }),
        children: [(0, gd.jsx)("div", {
          className: "SectionTitle",
          children: Kd("classic:defaultGamemode")
        }), (0, gd.jsx)("div", {
          className: "SectionBody",
          children: Wd.B.map((dd => pd || (0, Wd.t)(dd) ? (0, gd.jsx)("button", {
            type: "button",
            className: Nd()("WorldGamemode", {
              Selected: Jd === dd
            }),
            disabled: Cd,
            onClick: () => {
              kd(dd)
            },
            style: {
              "--background-image": `url(${Pd.x[dd]})`
            },
            children: Pd.w[dd]
          }, dd) : null))
        })]
      })
    }

    function Kd(dd) {
      let {
        mapTypes: Jd,
        value: kd,
        onChange: pd,
        showAll: Cd,
        disabled: Kd = !1,
        children: od
      } = dd;
      const {
        t: ld
      } = (0, Zd.B)();
      return (0, gd.jsxs)("div", {
        className: Nd()("BloxdForm MapTypeForm", {
          BasicOptions: !Cd
        }),
        children: [(0, gd.jsx)("div", {
          className: "SectionTitle",
          children: ld("customLobby:mapType")
        }), (0, gd.jsx)("div", {
          className: "SectionBody",
          children: Jd.map((dd => Cd || (0, Wd.v)(dd) ? (0, gd.jsx)("button", {
            type: "button",
            className: Nd()("MapType", {
              Selected: kd === dd
            }),
            disabled: Kd,
            onClick: () => {
              pd(dd)
            },
            style: {
              "--background-image": `url(${Pd.o[dd]})`
            },
            children: Pd.k[dd]
          }, dd) : null))
        }), od]
      })
    }
  },
  36513: () => {}
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);