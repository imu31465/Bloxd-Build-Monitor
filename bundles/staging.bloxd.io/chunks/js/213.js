export const id = 213;
export const ids = [213];
export const modules = {
  36415: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      CreateCustomLobby: () => Sm
    });
    fm(36423);
    var hm = fm(4564),
      Am = fm(59),
      am = fm(1676),
      xm = fm(1080),
      wm = fm.n(xm),
      Dm = fm(3127),
      im = fm(1162),
      Rm = fm(1214),
      pm = fm(4523),
      Em = fm(1454),
      om = fm(36430),
      Om = fm(1208),
      Ym = fm(1329),
      qm = fm(1519),
      jm = fm(23),
      Vm = fm(1456),
      Im = fm(653),
      Km = fm(4881),
      Qm = fm(800),
      nm = fm(1247),
      Jm = fm(1235),
      cm = fm(4889),
      zm = fm(1089),
      Zm = fm(36435),
      km = fm(36438),
      bm = fm(1135);

    function Sm(mm) {
      var Tm, fm, xm, Sm;
      let {
        gameNameWithVariation: em,
        close: Nm,
        initialDefaultGamemode: Gm
      } = mm;
      const {
        t: Xm
      } = (0, Om.A)(), Pm = (0, qm.useNavigatePreserveSearch)(), [Hm, ym] = (0, Am.useState)("Enter"), [Cm, rm] = (0, Am.useState)(""), sm = Am.useRef(null), lm = null === (Tm = Qm.e[em]) || void 0 === Tm ? void 0 : Tm.showWorldsInsteadOfCustomLobbies, Mm = lm ? 1 : null === (fm = Qm.e[em]) || void 0 === fm ? void 0 : fm.customLobbyCustomSchematicLimit, [um, Bm] = (0, Am.useState)(!lm);
      Gm || (Gm = "classic_creative" === em || "classic_creativeFlat" === em ? "creative" : "classic" === em ? "peaceful" : "survival");
      const Lm = {
        baseOptions: {
          gameNameWithVariation: lm ? "classic" : em,
          name: "",
          visibility: "unlisted"
        },
        listedOptions: {
          description: "",
          color: "",
          emojis: ""
        },
        mapOptions: {
          mapType: "classic_creativeFlat" === em ? "flat" : "default",
          schematicIdList: []
        },
        worldOptions: null
      };
      lm && (Lm.worldOptions = {
        defaultGamemode: Gm,
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
      const [tm, Um] = (0, Am.useState)(Lm), [dm, gm] = (0, Am.useState)(null);

      function Wm(mm, Tm) {
        Um({
          ...tm,
          baseOptions: {
            ...tm.baseOptions,
            [mm]: Tm
          }
        })
      }

      function Fm(mm, Tm) {
        Um({
          ...tm,
          listedOptions: {
            ...tm.listedOptions,
            [mm]: Tm
          }
        })
      }

      function mT(mm, Tm) {
        Um({
          ...tm,
          worldOptions: {
            ...tm.worldOptions,
            [mm]: Tm
          }
        })
      }

      function TT(mm) {
        Um({
          ...tm,
          mapOptions: {
            ...tm.mapOptions,
            ...mm
          }
        })
      }(0, Am.useEffect)((() => {
        pm.b.getNewStarterName().then((mm => {
          Um((Tm => "" !== Tm.baseOptions.name ? Tm : {
            ...Tm,
            baseOptions: {
              ...Tm.baseOptions,
              name: mm
            }
          }))
        })).catch((mm => {
          console.error("Error getting new starter name:", mm)
        }))
      }), []), (0, Am.useEffect)((() => {
        "customSchematic" === tm.mapOptions.mapType && null === dm && (0, im.postJsonWithMetricsCookiesAndJsonResponse)(`${Rm.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
          retries: 0,
          minTimeout: 3e3
        }).then((mm => {
          gm(mm)
        }))
      }), [tm.mapOptions.mapType, dm]);
      const fT = {
          tpRequests: {
            isEnabled: () => !tm.worldOptions.disableTpRequests,
            Dk: mm => {
              mT("disableTpRequests", !mm)
            }
          },
          spawnProtection: {
            isEnabled: () => tm.worldOptions.spawnProtection,
            Dk: mm => {
              mT("spawnProtection", mm)
            }
          },
          spawnReset: {
            isEnabled: () => tm.worldOptions.enableSpawnReset,
            Dk: mm => {
              mT("enableSpawnReset", mm)
            }
          },
          smpMarketplace: {
            isEnabled: () => tm.worldOptions.enableSmpMarketplace,
            Dk: mm => {
              mT("enableSmpMarketplace", mm)
            }
          },
          survivalGuns: {
            isEnabled: () => tm.worldOptions.enableSurvivalGuns,
            Dk: mm => {
              mT("enableSurvivalGuns", mm)
            }
          },
          fallDamage: {
            isEnabled: () => !tm.worldOptions.disableFallDamage,
            Dk: mm => {
              mT("disableFallDamage", !mm)
            }
          },
          dayNight: {
            isEnabled: () => tm.worldOptions.enableDayNight,
            Dk: mm => {
              mT("enableDayNight", mm)
            }
          }
        },
        hT = "Enter" !== Hm,
        AT = (0, bm.jsx)(Km.h, {
          className: "NameInput",
          label: "general:name",
          disabled: "Enter" !== Hm,
          children: (0, bm.jsx)(am.e, {
            domRef: sm,
            onValueChange: (mm, Tm) => {
              const fm = (0, Jm.ib)(mm);
              Wm("name", fm), sm.current.value = fm
            },
            maxLength: Jm.H,
            defaultValue: tm.baseOptions.name
          })
        });
      return (0, bm.jsxs)("div", {
        className: wm()("CreateCustomLobby", {
          CreateCustomLobbySuccess: "Success" === Hm,
          AdvancedMode: um
        }),
        children: ["Success" === Hm && (0, bm.jsxs)("div", {
          className: "CreateCustomLobbySuccessOverlay",
          children: [(0, bm.jsxs)("div", {
            className: "CreateCustomLobbySuccessTitle FullyFancyText AnimFadeInScaleUp",
            children: [(0, bm.jsx)(zm.c, {
              name: "check"
            }), (0, bm.jsx)(Vm.d, {})]
          }), (0, bm.jsx)("div", {
            className: "CreateCustomLobbySuccessButtons AnimFadeInScaleUp",
            children: (0, bm.jsx)(Em.m, {
              padDefaultFocus: !0,
              onClick: () => {
                (0, jm.l)("worldCreation"), Pm((0, Ym.e)(em, tm.baseOptions.name))
              },
              children: Xm("homePage:joinLobbyName", {
                lobbyName: tm.baseOptions.name
              })
            })
          })]
        }), (0, bm.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, bm.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: Xm(lm ? "homePage:createWorld" : "homePage:createCustomLobby")
          })
        }), (0, bm.jsx)(km.c, {
          locked: hT,
          children: (0, bm.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [!um && AT, um && (0, bm.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, bm.jsx)("div", {
                className: "SectionTitle",
                children: Xm("customLobby:generalOptions")
              }), (0, bm.jsxs)("div", {
                className: "SectionBody",
                children: [AT, (0, bm.jsx)(Km.h, {
                  label: "customLobby:visibility",
                  circleInfoText: Xm("customLobby:visibilityDescription"),
                  disabled: "Enter" !== Hm,
                  children: (0, bm.jsx)(Dm.d, {
                    options: hm.r.map((mm => ({
                      value: mm,
                      label: hm.f[mm]
                    }))),
                    value: tm.baseOptions.visibility,
                    onChange: mm => {
                      Wm("visibility", mm.value)
                    }
                  })
                })]
              })]
            }), lm && (0, bm.jsx)(Zm.d, {
              value: tm.worldOptions.defaultGamemode,
              onChange: mm => {
                mT("defaultGamemode", mm)
              },
              showAll: um,
              disabled: hT
            }), (lm || !(0, Im.H)(Mm) && Mm > 0) && (0, bm.jsx)(Zm.g, {
              mapTypes: lm ? hm.F : hm.p,
              value: tm.mapOptions.mapType,
              onChange: mm => {
                const Tm = {
                  mapType: mm
                };
                "customSchematic" !== mm && (Tm.schematicIdList = []), TT(Tm)
              },
              showAll: um,
              disabled: hT,
              children: "customSchematic" === tm.mapOptions.mapType && (0, bm.jsxs)(bm.Fragment, {
                children: [(0, bm.jsxs)("div", {
                  className: "SchematicListTitle AnimFadeIn",
                  children: [lm && Xm("customLobby:selectWorldSchematic"), !lm && Xm("customLobby:selectCustomLobbySchematics", {
                    schematicLimit: Mm
                  })]
                }), (0, bm.jsx)("div", {
                  className: wm()("SchematicListContainer AnimFadeIn", {
                    SchematicListContainerDisabled: "Enter" !== Hm
                  }),
                  children: (0, bm.jsx)(om.c, {
                    loading: null === dm,
                    schematics: null !== dm && void 0 !== dm ? dm : [],
                    onSchematicPicked: function(mm) {
                      const Tm = tm.mapOptions.schematicIdList;
                      if (Tm.includes(mm.schematicId)) TT({
                        schematicIdList: Tm.filter((Tm => Tm !== mm.schematicId))
                      });
                      else {
                        if (Mm && tm.mapOptions.schematicIdList.length >= Mm) return;
                        TT({
                          schematicIdList: [...tm.mapOptions.schematicIdList, mm.schematicId]
                        })
                      }
                    },
                    selectedSchematicIdList: tm.mapOptions.schematicIdList,
                    disableAutoExport: !0
                  })
                })]
              })
            }), um && (0, bm.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, bm.jsx)("div", {
                className: "SectionTitle",
                children: Xm("customLobby:listedOptions")
              }), (0, bm.jsxs)("div", {
                className: "SectionBody",
                children: [(0, bm.jsx)(Km.h, {
                  label: "general:description",
                  className: "CustomLobbyDescription",
                  disabled: "Enter" !== Hm,
                  children: (0, bm.jsx)(am.e, {
                    onValueChange: (mm, Tm) => {
                      Fm("description", mm)
                    },
                    maxLength: 100,
                    defaultValue: tm.listedOptions.description
                  })
                }), (0, bm.jsx)(Km.h, {
                  label: "general:color",
                  circleInfoText: "customLobby:lobbyColorDescription",
                  disabled: "Enter" !== Hm,
                  children: (0, bm.jsx)("div", {
                    className: "OtherInput",
                    children: (0, bm.jsx)("input", {
                      type: "color",
                      value: tm.listedOptions.color,
                      onChange: mm => {
                        Fm("color", mm.target.value)
                      }
                    })
                  })
                }), (0, bm.jsx)(Km.h, {
                  label: "general:emojis",
                  circleInfoText: "customLobby:lobbyEmojisDescription",
                  disabled: "Enter" !== Hm,
                  children: (0, bm.jsx)(am.e, {
                    onValueChange: (mm, Tm) => {
                      Fm("emojis", mm)
                    },
                    maxLength: 6,
                    defaultValue: tm.listedOptions.emojis
                  })
                })]
              })]
            }), um && lm && (0, bm.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, bm.jsx)("div", {
                className: "SectionTitle",
                children: Xm("customLobby:advancedOptions")
              }), (0, bm.jsxs)("div", {
                className: "SectionBody",
                children: [(0, bm.jsx)(Km.h, {
                  label: "classic:worldGenSeed",
                  disabled: "Enter" !== Hm,
                  children: (0, bm.jsx)(am.e, {
                    onValueChange: (mm, Tm) => {
                      mT("worldGenSeed", mm)
                    },
                    maxLength: Jm.H
                  })
                }), (0, bm.jsx)(Km.h, {
                  label: "classic:disableProtectors",
                  disabled: "Enter" !== Hm,
                  children: (0, bm.jsx)(Km.e, {
                    checked: tm.worldOptions.disableProtectors,
                    setChecked: mm => {
                      mT("disableProtectors", mm)
                    }
                  })
                }), (0, bm.jsx)(Km.h, {
                  label: "classic:disableTribeCreation",
                  disabled: "Enter" !== Hm,
                  children: (0, bm.jsx)(Km.e, {
                    checked: tm.worldOptions.disableTribeCreation,
                    setChecked: mm => {
                      mT("disableTribeCreation", mm)
                    }
                  })
                }), (0, bm.jsx)(Km.h, {
                  label: "classic:voidDeathHeight",
                  circleInfoText: "classic:voidDeathHeightDescription",
                  disabled: "Enter" !== Hm,
                  children: (0, bm.jsx)("input", {
                    type: "number",
                    max: nm.x,
                    value: null !== (xm = tm.worldOptions.voidDeathHeight) && void 0 !== xm ? xm : "",
                    onChange: mm => {
                      const Tm = parseInt(mm.target.value);
                      mT("voidDeathHeight", isNaN(Tm) ? null : Tm)
                    }
                  })
                }), (0, bm.jsx)(Km.h, {
                  label: "classic:disableLobbySpawn",
                  disabled: "Enter" !== Hm,
                  children: (0, bm.jsx)(Km.e, {
                    checked: tm.worldOptions.disableLobbySpawn,
                    setChecked: mm => {
                      mT("disableLobbySpawn", mm)
                    }
                  })
                }), (0, bm.jsx)(Km.h, {
                  label: "classic:worldBorder",
                  circleInfoText: "classic:worldBorderDescription",
                  disabled: "Enter" !== Hm,
                  children: (0, bm.jsx)("input", {
                    type: "number",
                    min: nm.C,
                    max: nm.z,
                    value: null !== (Sm = tm.worldOptions.worldBorder) && void 0 !== Sm ? Sm : "",
                    onChange: mm => {
                      const Tm = parseInt(mm.target.value);
                      mT("worldBorder", isNaN(Tm) ? null : Tm)
                    }
                  })
                }), (0, bm.jsx)(Km.h, {
                  label: "classic:disableMobs",
                  disabled: "Enter" !== Hm,
                  children: (0, bm.jsx)(Km.e, {
                    checked: tm.worldOptions.disableMobs,
                    setChecked: mm => {
                      mT("disableMobs", mm)
                    }
                  })
                })]
              })]
            }), lm && (0, bm.jsx)(cm.c, {
              callbacks: fT,
              disabled: "Enter" !== Hm,
              advancedMode: um
            })]
          })
        }), (0, bm.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, bm.jsx)(Em.m, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: "Enter" !== Hm,
            onClick: () => {
              !async function() {
                if ("Enter" === Hm) {
                  ym("Loading"), rm("");
                  try {
                    await pm.b.createCustomLobby(tm), ym("Success")
                  } catch (mm) {
                    rm(mm.message), console.error(mm.message), ym("Enter")
                  }
                }
              }()
            },
            children: Xm("general:create")
          }), lm && (0, bm.jsx)("div", {
            className: "CreateCustomLobbyAdvancedToggle",
            "data-pad-ignore": hT || void 0,
            children: (0, bm.jsx)(Km.h, {
              label: "customLobby:showAdvancedOptions",
              disabled: hT,
              onLabelClick: () => {
                Bm(!um)
              },
              children: (0, bm.jsx)(Km.e, {
                checked: um,
                setChecked: Bm
              })
            })
          }), Cm && (0, bm.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: Cm
          })]
        })]
      })
    }
  },
  36438: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Dm
    });
    var hm = fm(1080),
      Am = fm.n(hm),
      am = fm(59),
      xm = fm(4513),
      wm = fm(1135);

    function Dm(mm) {
      let {
        locked: Tm,
        children: fm
      } = mm;
      const hm = (0, am.useRef)(null),
        Dm = (0, xm.b)(hm, "y");
      return (0, wm.jsx)("div", {
        ref: hm,
        className: Am()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: Dm.before,
          CreateCustomLobbyBodyMoreBelow: Dm.after
        }),
        "data-pad-ignore": Tm || void 0,
        children: fm
      })
    }
  },
  36430: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Rm,
      g: () => Em
    });
    var hm = fm(59),
      Am = fm(1354),
      am = fm(1208),
      xm = fm(1345),
      wm = fm(3471),
      Dm = fm(4877),
      im = fm(1135);

    function Rm(mm) {
      let {
        loading: Tm,
        schematics: fm,
        onSchematicPicked: hm,
        selectedSchematicIdList: Am = [],
        disableAutoExport: Dm
      } = mm;
      const {
        t: Rm
      } = (0, am.A)();
      return (0, im.jsxs)("div", {
        className: "SchematicList",
        children: [Tm && (0, im.jsx)(xm.c, {}), !Tm && 0 === fm.length && (0, im.jsx)("div", {
          className: "NoSchematicsText",
          children: Rm("worldBuilder:noSavedSchematic")
        }), !Tm && fm.map((mm => (0, im.jsx)(wm.f, {
          source: {
            type: "schematic",
            schematic: mm
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            hm(mm)
          },
          isSelected: Am.includes(mm.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: mm.isAutoExported && Dm,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, mm.schematicId)))]
      })
    }

    function pm(mm) {
      let {
        ownedSchematics: Tm,
        currentWorldSchematicId: fm,
        onClose: Am
      } = mm;
      const {
        t: xm
      } = (0, am.A)(), [wm, pm] = (0, hm.useState)(null);
      return (0, im.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === wm && (0, im.jsxs)(im.Fragment, {
          children: [(0, im.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: xm("worldBuilder:schematicList")
          }), (0, im.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: xm("worldBuilder:clickSchematicForOptions")
          }), (0, im.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, im.jsx)(Rm, {
              loading: !1,
              schematics: Tm,
              onSchematicPicked: mm => {
                pm(mm)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== wm && (0, im.jsx)(Dm.h, {
          schematic: wm,
          inSourceWorld: wm.schematicId === fm,
          onSchematicUpdate: mm => {
            pm(mm)
          },
          onClose: () => {
            pm(null), Am()
          }
        })]
      })
    }

    function Em(mm) {
      let {
        ownedSchematics: Tm,
        currentWorldSchematicId: fm,
        onClose: hm
      } = mm;
      Am.NotificationProvider.showCustomPopup({
        body: mm => (0, im.jsx)(pm, {
          ownedSchematics: Tm,
          currentWorldSchematicId: fm,
          onClose: mm
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: hm,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  36435: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => im,
      g: () => Rm
    });
    fm(59);
    var hm = fm(1080),
      Am = fm.n(hm),
      am = fm(4564),
      xm = fm(339),
      wm = fm(1208),
      Dm = fm(1135);

    function im(mm) {
      let {
        value: Tm,
        onChange: fm,
        showAll: hm,
        disabled: im = !1
      } = mm;
      const {
        t: Rm
      } = (0, wm.A)();
      return (0, Dm.jsxs)("div", {
        className: Am()("BloxdForm GamemodeForm", {
          BasicOptions: !hm
        }),
        children: [(0, Dm.jsx)("div", {
          className: "SectionTitle",
          children: Rm("classic:defaultGamemode")
        }), (0, Dm.jsx)("div", {
          className: "SectionBody",
          children: am.B.map((mm => hm || (0, am.t)(mm) ? (0, Dm.jsx)("button", {
            type: "button",
            className: Am()("WorldGamemode", {
              Selected: Tm === mm
            }),
            disabled: im,
            onClick: () => {
              fm(mm)
            },
            style: {
              "--background-image": `url(${xm.r[mm]})`
            },
            children: xm.q[mm]
          }, mm) : null))
        })]
      })
    }

    function Rm(mm) {
      let {
        mapTypes: Tm,
        value: fm,
        onChange: hm,
        showAll: im,
        disabled: Rm = !1,
        children: pm
      } = mm;
      const {
        t: Em
      } = (0, wm.A)();
      return (0, Dm.jsxs)("div", {
        className: Am()("BloxdForm MapTypeForm", {
          BasicOptions: !im
        }),
        children: [(0, Dm.jsx)("div", {
          className: "SectionTitle",
          children: Em("customLobby:mapType")
        }), (0, Dm.jsx)("div", {
          className: "SectionBody",
          children: Tm.map((mm => im || (0, am.w)(mm) ? (0, Dm.jsx)("button", {
            type: "button",
            className: Am()("MapType", {
              Selected: fm === mm
            }),
            disabled: Rm,
            onClick: () => {
              hm(mm)
            },
            style: {
              "--background-image": `url(${xm.j[mm]})`
            },
            children: xm.h[mm]
          }, mm) : null))
        }), pm]
      })
    }
  },
  36423: () => {}
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);