export const id = 125;
export const ids = [125];
export const modules = {
  37877: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      CreateCustomLobby: () => sd
    });
    md(37882);
    var Wd = md(5294),
      Fd = md(66),
      Rd = md(1808),
      Xd = md(1155),
      Kd = md.n(Xd),
      hd = md(4327),
      vd = md(1189),
      Qd = md(1253),
      td = md(5255),
      od = md(1572),
      Nd = md(37887),
      qd = md(1238),
      Hd = md(1424),
      yd = md(1641),
      bd = md(29),
      Td = md(1580),
      pd = md(701),
      Yd = md(5714),
      gd = md(870),
      wd = md(1300),
      Ed = md(1286),
      Jd = md(5719),
      Ud = md(1443),
      xd = md(37892),
      Bd = md(37899),
      Sd = md(1341);

    function sd(dd) {
      var Od, md, Xd, sd;
      let {
        gameNameWithVariation: ud,
        close: Vd,
        initialDefaultGamemode: Ad
      } = dd;
      const {
        t: rd
      } = (0, qd.G)(), Gd = (0, yd.useNavigatePreserveSearch)(), [nd, Ld] = (0, Fd.useState)("Enter"), [Pd, zd] = (0, Fd.useState)(""), cd = Fd.useRef(null), jd = null === (Od = gd.c[ud]) || void 0 === Od ? void 0 : Od.showWorldsInsteadOfCustomLobbies, Dd = jd ? 1 : null === (md = gd.c[ud]) || void 0 === md ? void 0 : md.customLobbyCustomSchematicLimit, [ed, Id] = (0, Fd.useState)(!jd);
      Ad || (Ad = "classic_creative" === ud || "classic_creativeFlat" === ud ? "creative" : "classic" === ud ? "peaceful" : "survival");
      const ld = {
        baseOptions: {
          gameNameWithVariation: jd ? "classic" : ud,
          name: "",
          visibility: "unlisted"
        },
        listedOptions: {
          description: "",
          color: "",
          emojis: ""
        },
        mapOptions: {
          mapType: "classic_creativeFlat" === ud ? "flat" : "default",
          schematicIdList: []
        },
        worldOptions: null
      };
      jd && (ld.worldOptions = {
        defaultGamemode: Ad,
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
      const [Cd, Zd] = (0, Fd.useState)(ld), [kd, fd] = (0, Fd.useState)(null);

      function Md(dd, Od) {
        Zd({
          ...Cd,
          baseOptions: {
            ...Cd.baseOptions,
            [dd]: Od
          }
        })
      }

      function dO(dd, Od) {
        Zd({
          ...Cd,
          listedOptions: {
            ...Cd.listedOptions,
            [dd]: Od
          }
        })
      }

      function OO(dd, Od) {
        Zd({
          ...Cd,
          worldOptions: {
            ...Cd.worldOptions,
            [dd]: Od
          }
        })
      }

      function mO(dd) {
        Zd({
          ...Cd,
          mapOptions: {
            ...Cd.mapOptions,
            ...dd
          }
        })
      }(0, Fd.useEffect)((() => {
        td.e.getNewStarterName().then((dd => {
          Zd((Od => "" !== Od.baseOptions.name ? Od : {
            ...Od,
            baseOptions: {
              ...Od.baseOptions,
              name: dd
            }
          }))
        })).catch((dd => {
          console.error("Error getting new starter name:", dd)
        }))
      }), []), (0, Fd.useEffect)((() => {
        "customSchematic" === Cd.mapOptions.mapType && null === kd && (0, vd.postJsonWithMetricsCookiesAndJsonResponse)(`${Qd.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
          retries: 0,
          minTimeout: 3e3
        }).then((dd => {
          fd(dd)
        }))
      }), [Cd.mapOptions.mapType, kd]);
      const WO = {
          tpRequests: {
            isEnabled: () => !Cd.worldOptions.disableTpRequests,
            rY: dd => {
              OO("disableTpRequests", !dd)
            }
          },
          spawnProtection: {
            isEnabled: () => Cd.worldOptions.spawnProtection,
            rY: dd => {
              OO("spawnProtection", dd)
            }
          },
          spawnReset: {
            isEnabled: () => Cd.worldOptions.enableSpawnReset,
            rY: dd => {
              OO("enableSpawnReset", dd)
            }
          },
          smpMarketplace: {
            isEnabled: () => Cd.worldOptions.enableSmpMarketplace,
            rY: dd => {
              OO("enableSmpMarketplace", dd)
            }
          },
          survivalGuns: {
            isEnabled: () => Cd.worldOptions.enableSurvivalGuns,
            rY: dd => {
              OO("enableSurvivalGuns", dd)
            }
          },
          fallDamage: {
            isEnabled: () => !Cd.worldOptions.disableFallDamage,
            rY: dd => {
              OO("disableFallDamage", !dd)
            }
          },
          dayNight: {
            isEnabled: () => Cd.worldOptions.enableDayNight,
            rY: dd => {
              OO("enableDayNight", dd)
            }
          }
        },
        FO = "Enter" !== nd,
        RO = (0, Sd.jsx)(Yd.g, {
          className: "NameInput",
          label: "general:name",
          disabled: "Enter" !== nd,
          children: (0, Sd.jsx)(Rd.c, {
            domRef: cd,
            onValueChange: (dd, Od) => {
              const md = (0, Ed.rb)(dd);
              Md("name", md), cd.current.value = md
            },
            maxLength: Ed.L,
            defaultValue: Cd.baseOptions.name
          })
        });
      return (0, Sd.jsxs)("div", {
        className: Kd()("CreateCustomLobby", {
          CreateCustomLobbySuccess: "Success" === nd,
          AdvancedMode: ed
        }),
        children: ["Success" === nd && (0, Sd.jsxs)("div", {
          className: "CreateCustomLobbySuccessOverlay",
          children: [(0, Sd.jsxs)("div", {
            className: "CreateCustomLobbySuccessTitle FullyFancyText AnimFadeInScaleUp",
            children: [(0, Sd.jsx)(Ud.c, {
              name: "check"
            }), (0, Sd.jsx)(Td.e, {})]
          }), (0, Sd.jsx)("div", {
            className: "CreateCustomLobbySuccessButtons AnimFadeInScaleUp",
            children: (0, Sd.jsx)(od.m, {
              padDefaultFocus: !0,
              onClick: () => {
                (0, bd.l)("worldCreation"), Gd((0, Hd.c)(ud, Cd.baseOptions.name))
              },
              children: rd("homePage:joinLobbyName", {
                lobbyName: Cd.baseOptions.name
              })
            })
          })]
        }), (0, Sd.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, Sd.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: rd(jd ? "homePage:createWorld" : "homePage:createCustomLobby")
          })
        }), (0, Sd.jsx)(Bd.b, {
          locked: FO,
          children: (0, Sd.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [!ed && RO, ed && (0, Sd.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, Sd.jsx)("div", {
                className: "SectionTitle",
                children: rd("customLobby:generalOptions")
              }), (0, Sd.jsxs)("div", {
                className: "SectionBody",
                children: [RO, (0, Sd.jsx)(Yd.g, {
                  label: "customLobby:visibility",
                  circleInfoText: rd("customLobby:visibilityDescription"),
                  disabled: "Enter" !== nd,
                  children: (0, Sd.jsx)(hd.e, {
                    options: Wd.u.map((dd => ({
                      value: dd,
                      label: Wd.h[dd]
                    }))),
                    value: Cd.baseOptions.visibility,
                    onChange: dd => {
                      Md("visibility", dd.value)
                    }
                  })
                })]
              })]
            }), jd && (0, Sd.jsx)(xd.d, {
              value: Cd.worldOptions.defaultGamemode,
              onChange: dd => {
                OO("defaultGamemode", dd)
              },
              showAll: ed,
              disabled: FO
            }), (jd || !(0, pd.O)(Dd) && Dd > 0) && (0, Sd.jsx)(xd.f, {
              mapTypes: jd ? Wd.J : Wd.s,
              value: Cd.mapOptions.mapType,
              onChange: dd => {
                const Od = {
                  mapType: dd
                };
                "customSchematic" !== dd && (Od.schematicIdList = []), mO(Od)
              },
              showAll: ed,
              disabled: FO,
              children: "customSchematic" === Cd.mapOptions.mapType && (0, Sd.jsxs)(Sd.Fragment, {
                children: [(0, Sd.jsxs)("div", {
                  className: "SchematicListTitle AnimFadeIn",
                  children: [jd && rd("customLobby:selectWorldSchematic"), !jd && rd("customLobby:selectCustomLobbySchematics", {
                    schematicLimit: Dd
                  })]
                }), (0, Sd.jsx)("div", {
                  className: Kd()("SchematicListContainer AnimFadeIn", {
                    SchematicListContainerDisabled: "Enter" !== nd
                  }),
                  children: (0, Sd.jsx)(Nd.c, {
                    loading: null === kd,
                    schematics: null !== kd && void 0 !== kd ? kd : [],
                    onSchematicPicked: function(dd) {
                      const Od = Cd.mapOptions.schematicIdList;
                      if (Od.includes(dd.schematicId)) mO({
                        schematicIdList: Od.filter((Od => Od !== dd.schematicId))
                      });
                      else {
                        if (Dd && Cd.mapOptions.schematicIdList.length >= Dd) return;
                        mO({
                          schematicIdList: [...Cd.mapOptions.schematicIdList, dd.schematicId]
                        })
                      }
                    },
                    selectedSchematicIdList: Cd.mapOptions.schematicIdList,
                    disableAutoExport: !0
                  })
                })]
              })
            }), ed && (0, Sd.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, Sd.jsx)("div", {
                className: "SectionTitle",
                children: rd("customLobby:listedOptions")
              }), (0, Sd.jsxs)("div", {
                className: "SectionBody",
                children: [(0, Sd.jsx)(Yd.g, {
                  label: "general:description",
                  className: "CustomLobbyDescription",
                  disabled: "Enter" !== nd,
                  children: (0, Sd.jsx)(Rd.c, {
                    onValueChange: (dd, Od) => {
                      dO("description", dd)
                    },
                    maxLength: 100,
                    defaultValue: Cd.listedOptions.description
                  })
                }), (0, Sd.jsx)(Yd.g, {
                  label: "general:color",
                  circleInfoText: "customLobby:lobbyColorDescription",
                  disabled: "Enter" !== nd,
                  children: (0, Sd.jsx)("div", {
                    className: "OtherInput",
                    children: (0, Sd.jsx)("input", {
                      type: "color",
                      value: Cd.listedOptions.color,
                      onChange: dd => {
                        dO("color", dd.target.value)
                      }
                    })
                  })
                }), (0, Sd.jsx)(Yd.g, {
                  label: "general:emojis",
                  circleInfoText: "customLobby:lobbyEmojisDescription",
                  disabled: "Enter" !== nd,
                  children: (0, Sd.jsx)(Rd.c, {
                    onValueChange: (dd, Od) => {
                      dO("emojis", dd)
                    },
                    maxLength: 6,
                    defaultValue: Cd.listedOptions.emojis
                  })
                })]
              })]
            }), ed && jd && (0, Sd.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, Sd.jsx)("div", {
                className: "SectionTitle",
                children: rd("customLobby:advancedOptions")
              }), (0, Sd.jsxs)("div", {
                className: "SectionBody",
                children: [(0, Sd.jsx)(Yd.g, {
                  label: "classic:worldGenSeed",
                  disabled: "Enter" !== nd,
                  children: (0, Sd.jsx)(Rd.c, {
                    onValueChange: (dd, Od) => {
                      OO("worldGenSeed", dd)
                    },
                    maxLength: Ed.L
                  })
                }), (0, Sd.jsx)(Yd.g, {
                  label: "classic:disableProtectors",
                  disabled: "Enter" !== nd,
                  children: (0, Sd.jsx)(Yd.d, {
                    checked: Cd.worldOptions.disableProtectors,
                    setChecked: dd => {
                      OO("disableProtectors", dd)
                    }
                  })
                }), (0, Sd.jsx)(Yd.g, {
                  label: "classic:disableTribeCreation",
                  disabled: "Enter" !== nd,
                  children: (0, Sd.jsx)(Yd.d, {
                    checked: Cd.worldOptions.disableTribeCreation,
                    setChecked: dd => {
                      OO("disableTribeCreation", dd)
                    }
                  })
                }), (0, Sd.jsx)(Yd.g, {
                  label: "classic:voidDeathHeight",
                  circleInfoText: "classic:voidDeathHeightDescription",
                  disabled: "Enter" !== nd,
                  children: (0, Sd.jsx)("input", {
                    type: "number",
                    max: wd.D,
                    value: null !== (Xd = Cd.worldOptions.voidDeathHeight) && void 0 !== Xd ? Xd : "",
                    onChange: dd => {
                      const Od = parseInt(dd.target.value);
                      OO("voidDeathHeight", isNaN(Od) ? null : Od)
                    }
                  })
                }), (0, Sd.jsx)(Yd.g, {
                  label: "classic:disableLobbySpawn",
                  disabled: "Enter" !== nd,
                  children: (0, Sd.jsx)(Yd.d, {
                    checked: Cd.worldOptions.disableLobbySpawn,
                    setChecked: dd => {
                      OO("disableLobbySpawn", dd)
                    }
                  })
                }), (0, Sd.jsx)(Yd.g, {
                  label: "classic:worldBorder",
                  circleInfoText: "classic:worldBorderDescription",
                  disabled: "Enter" !== nd,
                  children: (0, Sd.jsx)("input", {
                    type: "number",
                    min: wd.J,
                    max: wd.E,
                    value: null !== (sd = Cd.worldOptions.worldBorder) && void 0 !== sd ? sd : "",
                    onChange: dd => {
                      const Od = parseInt(dd.target.value);
                      OO("worldBorder", isNaN(Od) ? null : Od)
                    }
                  })
                }), (0, Sd.jsx)(Yd.g, {
                  label: "classic:disableMobs",
                  disabled: "Enter" !== nd,
                  children: (0, Sd.jsx)(Yd.d, {
                    checked: Cd.worldOptions.disableMobs,
                    setChecked: dd => {
                      OO("disableMobs", dd)
                    }
                  })
                })]
              })]
            }), jd && (0, Sd.jsx)(Jd.b, {
              callbacks: WO,
              disabled: "Enter" !== nd,
              advancedMode: ed
            })]
          })
        }), (0, Sd.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, Sd.jsx)(od.m, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: "Enter" !== nd,
            onClick: () => {
              !async function() {
                if ("Enter" === nd) {
                  Ld("Loading"), zd("");
                  try {
                    await td.e.createCustomLobby(Cd), Ld("Success")
                  } catch (dd) {
                    zd(dd.message), console.error(dd.message), Ld("Enter")
                  }
                }
              }()
            },
            children: rd("general:create")
          }), jd && (0, Sd.jsx)("div", {
            className: "CreateCustomLobbyAdvancedToggle",
            "data-pad-ignore": FO || void 0,
            children: (0, Sd.jsx)(Yd.g, {
              label: "customLobby:showAdvancedOptions",
              disabled: FO,
              onLabelClick: () => {
                Id(!ed)
              },
              children: (0, Sd.jsx)(Yd.d, {
                checked: ed,
                setChecked: Id
              })
            })
          }), Pd && (0, Sd.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: Pd
          })]
        })]
      })
    }
  },
  37899: (dd, Od, md) => {
    md.d(Od, {
      b: () => hd
    });
    var Wd = md(1155),
      Fd = md.n(Wd),
      Rd = md(66),
      Xd = md(5241),
      Kd = md(1341);

    function hd(dd) {
      let {
        locked: Od,
        children: md
      } = dd;
      const Wd = (0, Rd.useRef)(null),
        hd = (0, Xd.b)(Wd, "y");
      return (0, Kd.jsx)("div", {
        ref: Wd,
        className: Fd()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: hd.before,
          CreateCustomLobbyBodyMoreBelow: hd.after
        }),
        "data-pad-ignore": Od || void 0,
        children: md
      })
    }
  },
  37887: (dd, Od, md) => {
    md.d(Od, {
      c: () => Qd,
      d: () => od
    });
    var Wd = md(66),
      Fd = md(1462),
      Rd = md(1238),
      Xd = md(1436),
      Kd = md(4711),
      hd = md(5706),
      vd = md(1341);

    function Qd(dd) {
      let {
        loading: Od,
        schematics: md,
        onSchematicPicked: Wd,
        selectedSchematicIdList: Fd = [],
        disableAutoExport: hd
      } = dd;
      const {
        t: Qd
      } = (0, Rd.G)();
      return (0, vd.jsxs)("div", {
        className: "SchematicList",
        children: [Od && (0, vd.jsx)(Xd.c, {}), !Od && 0 === md.length && (0, vd.jsx)("div", {
          className: "NoSchematicsText",
          children: Qd("worldBuilder:noSavedSchematic")
        }), !Od && md.map((dd => (0, vd.jsx)(Kd.f, {
          source: {
            type: "schematic",
            schematic: dd
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            Wd(dd)
          },
          isSelected: Fd.includes(dd.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: dd.isAutoExported && hd,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, dd.schematicId)))]
      })
    }

    function td(dd) {
      let {
        ownedSchematics: Od,
        currentWorldSchematicId: md,
        onClose: Fd
      } = dd;
      const {
        t: Xd
      } = (0, Rd.G)(), [Kd, td] = (0, Wd.useState)(null);
      return (0, vd.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === Kd && (0, vd.jsxs)(vd.Fragment, {
          children: [(0, vd.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: Xd("worldBuilder:schematicList")
          }), (0, vd.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: Xd("worldBuilder:clickSchematicForOptions")
          }), (0, vd.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, vd.jsx)(Qd, {
              loading: !1,
              schematics: Od,
              onSchematicPicked: dd => {
                td(dd)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== Kd && (0, vd.jsx)(hd.h, {
          schematic: Kd,
          inSourceWorld: Kd.schematicId === md,
          onSchematicUpdate: dd => {
            td(dd)
          },
          onClose: () => {
            td(null), Fd()
          }
        })]
      })
    }

    function od(dd) {
      let {
        ownedSchematics: Od,
        currentWorldSchematicId: md,
        onClose: Wd
      } = dd;
      Fd.NotificationProvider.showCustomPopup({
        body: dd => (0, vd.jsx)(td, {
          ownedSchematics: Od,
          currentWorldSchematicId: md,
          onClose: dd
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: Wd,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  37892: (dd, Od, md) => {
    md.d(Od, {
      d: () => vd,
      f: () => Qd
    });
    md(66);
    var Wd = md(1155),
      Fd = md.n(Wd),
      Rd = md(5294),
      Xd = md(387),
      Kd = md(1238),
      hd = md(1341);

    function vd(dd) {
      let {
        value: Od,
        onChange: md,
        showAll: Wd,
        disabled: vd = !1
      } = dd;
      const {
        t: Qd
      } = (0, Kd.G)();
      return (0, hd.jsxs)("div", {
        className: Fd()("BloxdForm GamemodeForm", {
          BasicOptions: !Wd
        }),
        children: [(0, hd.jsx)("div", {
          className: "SectionTitle",
          children: Qd("classic:defaultGamemode")
        }), (0, hd.jsx)("div", {
          className: "SectionBody",
          children: Rd.F.map((dd => Wd || (0, Rd.x)(dd) ? (0, hd.jsx)("button", {
            type: "button",
            className: Fd()("WorldGamemode", {
              Selected: Od === dd
            }),
            disabled: vd,
            onClick: () => {
              md(dd)
            },
            style: {
              "--background-image": `url(${Xd.s[dd]})`
            },
            children: Xd.p[dd]
          }, dd) : null))
        })]
      })
    }

    function Qd(dd) {
      let {
        mapTypes: Od,
        value: md,
        onChange: Wd,
        showAll: vd,
        disabled: Qd = !1,
        children: td
      } = dd;
      const {
        t: od
      } = (0, Kd.G)();
      return (0, hd.jsxs)("div", {
        className: Fd()("BloxdForm MapTypeForm", {
          BasicOptions: !vd
        }),
        children: [(0, hd.jsx)("div", {
          className: "SectionTitle",
          children: od("customLobby:mapType")
        }), (0, hd.jsx)("div", {
          className: "SectionBody",
          children: Od.map((dd => vd || (0, Rd.y)(dd) ? (0, hd.jsx)("button", {
            type: "button",
            className: Fd()("MapType", {
              Selected: md === dd
            }),
            disabled: Qd,
            onClick: () => {
              Wd(dd)
            },
            style: {
              "--background-image": `url(${Xd.l[dd]})`
            },
            children: Xd.j[dd]
          }, dd) : null))
        }), td]
      })
    }
  },
  5819: (dd, Od, md) => {
    md.d(Od, {
      e: () => Fd,
      f: () => Rd
    });
    var Wd = md(5769);
    const Fd = "Air",
      Rd = Object.freeze(new Wd.f(Fd, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  37882: () => {}
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);