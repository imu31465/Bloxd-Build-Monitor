export const id = 239;
export const ids = [239];
export const modules = {
  37126: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      CreateCustomLobby: () => Pe
    });
    He(37132);
    var ye = He(5018),
      be = He(59),
      Me = He(1674),
      Ke = He(1053),
      Ue = He.n(Ke),
      Fe = He(3442),
      Je = He(1083),
      oe = He(1141),
      Re = He(4974),
      ke = He(1438),
      qe = He(37138),
      fe = He(1127),
      Te = He(1315),
      pe = He(1502),
      Xe = He(18),
      ze = He(1441),
      Be = He(610),
      Ee = He(5415),
      ge = He(780),
      Oe = He(1189),
      de = He(1169),
      We = He(5424),
      te = He(1323),
      Ze = He(37144),
      we = He(37147),
      De = He(1228);

    function Pe(ee) {
      var ie, He, Ke, Pe;
      let {
        gameNameWithVariation: Ae,
        close: Ye,
        initialDefaultGamemode: Ve
      } = ee;
      const {
        t: ae
      } = (0, fe.v)(), ce = (0, pe.useNavigatePreserveSearch)(), [xe, Le] = (0, be.useState)("Enter"), [Ce, ve] = (0, be.useState)(""), ue = be.useRef(null), me = null === (ie = ge.e[Ae]) || void 0 === ie ? void 0 : ie.showWorldsInsteadOfCustomLobbies, le = me ? 1 : null === (He = ge.e[Ae]) || void 0 === He ? void 0 : He.customLobbyCustomSchematicLimit, [Se, ne] = (0, be.useState)(!me);
      Ve || (Ve = "classic_creative" === Ae || "classic_creativeFlat" === Ae ? "creative" : "classic" === Ae ? "peaceful" : "survival");
      const je = {
        baseOptions: {
          gameNameWithVariation: me ? "classic" : Ae,
          name: "",
          visibility: "unlisted"
        },
        listedOptions: {
          description: "",
          color: "",
          emojis: ""
        },
        mapOptions: {
          mapType: "classic_creativeFlat" === Ae ? "flat" : "default",
          schematicIdList: []
        },
        worldOptions: null
      };
      me && (je.worldOptions = {
        defaultGamemode: Ve,
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
      const [se, Ie] = (0, be.useState)(je), [he, Ne] = (0, be.useState)(null);

      function Ge(ee, ie) {
        Ie({
          ...se,
          baseOptions: {
            ...se.baseOptions,
            [ee]: ie
          }
        })
      }

      function re(ee, ie) {
        Ie({
          ...se,
          listedOptions: {
            ...se.listedOptions,
            [ee]: ie
          }
        })
      }

      function Qe(ee, ie) {
        Ie({
          ...se,
          worldOptions: {
            ...se.worldOptions,
            [ee]: ie
          }
        })
      }

      function ei(ee) {
        Ie({
          ...se,
          mapOptions: {
            ...se.mapOptions,
            ...ee
          }
        })
      }(0, be.useEffect)((() => {
        Re.c.getNewStarterName().then((ee => {
          Ie((ie => "" !== ie.baseOptions.name ? ie : {
            ...ie,
            baseOptions: {
              ...ie.baseOptions,
              name: ee
            }
          }))
        })).catch((ee => {
          console.error("Error getting new starter name:", ee)
        }))
      }), []), (0, be.useEffect)((() => {
        "customSchematic" === se.mapOptions.mapType && null === he && (0, Je.postJsonWithMetricsCookiesAndJsonResponse)(`${oe.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
          retries: 0,
          minTimeout: 3e3
        }).then((ee => {
          Ne(ee)
        }))
      }), [se.mapOptions.mapType, he]);
      const ii = {
          tpRequests: {
            isEnabled: () => !se.worldOptions.disableTpRequests,
            JY: ee => {
              Qe("disableTpRequests", !ee)
            }
          },
          spawnProtection: {
            isEnabled: () => se.worldOptions.spawnProtection,
            JY: ee => {
              Qe("spawnProtection", ee)
            }
          },
          spawnReset: {
            isEnabled: () => se.worldOptions.enableSpawnReset,
            JY: ee => {
              Qe("enableSpawnReset", ee)
            }
          },
          smpMarketplace: {
            isEnabled: () => se.worldOptions.enableSmpMarketplace,
            JY: ee => {
              Qe("enableSmpMarketplace", ee)
            }
          },
          survivalGuns: {
            isEnabled: () => se.worldOptions.enableSurvivalGuns,
            JY: ee => {
              Qe("enableSurvivalGuns", ee)
            }
          },
          fallDamage: {
            isEnabled: () => !se.worldOptions.disableFallDamage,
            JY: ee => {
              Qe("disableFallDamage", !ee)
            }
          },
          dayNight: {
            isEnabled: () => se.worldOptions.enableDayNight,
            JY: ee => {
              Qe("enableDayNight", ee)
            }
          }
        },
        Hi = "Enter" !== xe,
        yi = (0, De.jsx)(Ee.d, {
          className: "NameInput",
          label: "general:name",
          disabled: "Enter" !== xe,
          children: (0, De.jsx)(Me.d, {
            domRef: ue,
            onValueChange: (ee, ie) => {
              const He = (0, de.ub)(ee);
              Ge("name", He), ue.current.value = He
            },
            maxLength: de.O,
            defaultValue: se.baseOptions.name
          })
        });
      return (0, De.jsxs)("div", {
        className: Ue()("CreateCustomLobby", {
          CreateCustomLobbySuccess: "Success" === xe,
          AdvancedMode: Se
        }),
        children: ["Success" === xe && (0, De.jsxs)("div", {
          className: "CreateCustomLobbySuccessOverlay",
          children: [(0, De.jsxs)("div", {
            className: "CreateCustomLobbySuccessTitle FullyFancyText AnimFadeInScaleUp",
            children: [(0, De.jsx)(te.e, {
              name: "check"
            }), (0, De.jsx)(ze.b, {})]
          }), (0, De.jsx)("div", {
            className: "CreateCustomLobbySuccessButtons AnimFadeInScaleUp",
            children: (0, De.jsx)(ke.m, {
              padDefaultFocus: !0,
              onClick: () => {
                (0, Xe.l)("worldCreation"), ce((0, Te.b)(Ae, se.baseOptions.name))
              },
              children: ae("homePage:joinLobbyName", {
                lobbyName: se.baseOptions.name
              })
            })
          })]
        }), (0, De.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, De.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: ae(me ? "homePage:createWorld" : "homePage:createCustomLobby")
          })
        }), (0, De.jsx)(we.c, {
          locked: Hi,
          children: (0, De.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [!Se && yi, Se && (0, De.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, De.jsx)("div", {
                className: "SectionTitle",
                children: ae("customLobby:generalOptions")
              }), (0, De.jsxs)("div", {
                className: "SectionBody",
                children: [yi, (0, De.jsx)(Ee.d, {
                  label: "customLobby:visibility",
                  circleInfoText: ae("customLobby:visibilityDescription"),
                  disabled: "Enter" !== xe,
                  children: (0, De.jsx)(Fe.e, {
                    options: ye.s.map((ee => ({
                      value: ee,
                      label: ye.h[ee]
                    }))),
                    value: se.baseOptions.visibility,
                    onChange: ee => {
                      Ge("visibility", ee.value)
                    }
                  })
                })]
              })]
            }), me && (0, De.jsx)(Ze.c, {
              value: se.worldOptions.defaultGamemode,
              onChange: ee => {
                Qe("defaultGamemode", ee)
              },
              showAll: Se,
              disabled: Hi
            }), (me || !(0, Be.P)(le) && le > 0) && (0, De.jsx)(Ze.g, {
              mapTypes: me ? ye.E : ye.q,
              value: se.mapOptions.mapType,
              onChange: ee => {
                const ie = {
                  mapType: ee
                };
                "customSchematic" !== ee && (ie.schematicIdList = []), ei(ie)
              },
              showAll: Se,
              disabled: Hi,
              children: "customSchematic" === se.mapOptions.mapType && (0, De.jsxs)(De.Fragment, {
                children: [(0, De.jsxs)("div", {
                  className: "SchematicListTitle AnimFadeIn",
                  children: [me && ae("customLobby:selectWorldSchematic"), !me && ae("customLobby:selectCustomLobbySchematics", {
                    schematicLimit: le
                  })]
                }), (0, De.jsx)("div", {
                  className: Ue()("SchematicListContainer AnimFadeIn", {
                    SchematicListContainerDisabled: "Enter" !== xe
                  }),
                  children: (0, De.jsx)(qe.c, {
                    loading: null === he,
                    schematics: null !== he && void 0 !== he ? he : [],
                    onSchematicPicked: function(ee) {
                      const ie = se.mapOptions.schematicIdList;
                      if (ie.includes(ee.schematicId)) ei({
                        schematicIdList: ie.filter((ie => ie !== ee.schematicId))
                      });
                      else {
                        if (le && se.mapOptions.schematicIdList.length >= le) return;
                        ei({
                          schematicIdList: [...se.mapOptions.schematicIdList, ee.schematicId]
                        })
                      }
                    },
                    selectedSchematicIdList: se.mapOptions.schematicIdList,
                    disableAutoExport: !0
                  })
                })]
              })
            }), Se && (0, De.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, De.jsx)("div", {
                className: "SectionTitle",
                children: ae("customLobby:listedOptions")
              }), (0, De.jsxs)("div", {
                className: "SectionBody",
                children: [(0, De.jsx)(Ee.d, {
                  label: "general:description",
                  className: "CustomLobbyDescription",
                  disabled: "Enter" !== xe,
                  children: (0, De.jsx)(Me.d, {
                    onValueChange: (ee, ie) => {
                      re("description", ee)
                    },
                    maxLength: 100,
                    defaultValue: se.listedOptions.description
                  })
                }), (0, De.jsx)(Ee.d, {
                  label: "general:color",
                  circleInfoText: "customLobby:lobbyColorDescription",
                  disabled: "Enter" !== xe,
                  children: (0, De.jsx)("div", {
                    className: "OtherInput",
                    children: (0, De.jsx)("input", {
                      type: "color",
                      value: se.listedOptions.color,
                      onChange: ee => {
                        re("color", ee.target.value)
                      }
                    })
                  })
                }), (0, De.jsx)(Ee.d, {
                  label: "general:emojis",
                  circleInfoText: "customLobby:lobbyEmojisDescription",
                  disabled: "Enter" !== xe,
                  children: (0, De.jsx)(Me.d, {
                    onValueChange: (ee, ie) => {
                      re("emojis", ee)
                    },
                    maxLength: 6,
                    defaultValue: se.listedOptions.emojis
                  })
                })]
              })]
            }), Se && me && (0, De.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, De.jsx)("div", {
                className: "SectionTitle",
                children: ae("customLobby:advancedOptions")
              }), (0, De.jsxs)("div", {
                className: "SectionBody",
                children: [(0, De.jsx)(Ee.d, {
                  label: "classic:worldGenSeed",
                  disabled: "Enter" !== xe,
                  children: (0, De.jsx)(Me.d, {
                    onValueChange: (ee, ie) => {
                      Qe("worldGenSeed", ee)
                    },
                    maxLength: de.O
                  })
                }), (0, De.jsx)(Ee.d, {
                  label: "classic:disableProtectors",
                  disabled: "Enter" !== xe,
                  children: (0, De.jsx)(Ee.c, {
                    checked: se.worldOptions.disableProtectors,
                    setChecked: ee => {
                      Qe("disableProtectors", ee)
                    }
                  })
                }), (0, De.jsx)(Ee.d, {
                  label: "classic:disableTribeCreation",
                  disabled: "Enter" !== xe,
                  children: (0, De.jsx)(Ee.c, {
                    checked: se.worldOptions.disableTribeCreation,
                    setChecked: ee => {
                      Qe("disableTribeCreation", ee)
                    }
                  })
                }), (0, De.jsx)(Ee.d, {
                  label: "classic:voidDeathHeight",
                  circleInfoText: "classic:voidDeathHeightDescription",
                  disabled: "Enter" !== xe,
                  children: (0, De.jsx)("input", {
                    type: "number",
                    max: Oe.I,
                    value: null !== (Ke = se.worldOptions.voidDeathHeight) && void 0 !== Ke ? Ke : "",
                    onChange: ee => {
                      const ie = parseInt(ee.target.value);
                      Qe("voidDeathHeight", isNaN(ie) ? null : ie)
                    }
                  })
                }), (0, De.jsx)(Ee.d, {
                  label: "classic:disableLobbySpawn",
                  disabled: "Enter" !== xe,
                  children: (0, De.jsx)(Ee.c, {
                    checked: se.worldOptions.disableLobbySpawn,
                    setChecked: ee => {
                      Qe("disableLobbySpawn", ee)
                    }
                  })
                }), (0, De.jsx)(Ee.d, {
                  label: "classic:worldBorder",
                  circleInfoText: "classic:worldBorderDescription",
                  disabled: "Enter" !== xe,
                  children: (0, De.jsx)("input", {
                    type: "number",
                    min: Oe.P,
                    max: Oe.J,
                    value: null !== (Pe = se.worldOptions.worldBorder) && void 0 !== Pe ? Pe : "",
                    onChange: ee => {
                      const ie = parseInt(ee.target.value);
                      Qe("worldBorder", isNaN(ie) ? null : ie)
                    }
                  })
                }), (0, De.jsx)(Ee.d, {
                  label: "classic:disableMobs",
                  disabled: "Enter" !== xe,
                  children: (0, De.jsx)(Ee.c, {
                    checked: se.worldOptions.disableMobs,
                    setChecked: ee => {
                      Qe("disableMobs", ee)
                    }
                  })
                })]
              })]
            }), me && (0, De.jsx)(We.c, {
              callbacks: ii,
              disabled: "Enter" !== xe,
              advancedMode: Se
            })]
          })
        }), (0, De.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, De.jsx)(ke.m, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: "Enter" !== xe,
            onClick: () => {
              !async function() {
                if ("Enter" === xe) {
                  Le("Loading"), ve("");
                  try {
                    await Re.c.createCustomLobby(se), Le("Success")
                  } catch (ee) {
                    ve(ee.message), console.error(ee.message), Le("Enter")
                  }
                }
              }()
            },
            children: ae("general:create")
          }), me && (0, De.jsx)("div", {
            className: "CreateCustomLobbyAdvancedToggle",
            "data-pad-ignore": Hi || void 0,
            children: (0, De.jsx)(Ee.d, {
              label: "customLobby:showAdvancedOptions",
              disabled: Hi,
              onLabelClick: () => {
                ne(!Se)
              },
              children: (0, De.jsx)(Ee.c, {
                checked: Se,
                setChecked: ne
              })
            })
          }), Ce && (0, De.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: Ce
          })]
        })]
      })
    }
  },
  37147: (ee, ie, He) => {
    He.d(ie, {
      c: () => Fe
    });
    var ye = He(1053),
      be = He.n(ye),
      Me = He(59),
      Ke = He(4968),
      Ue = He(1228);

    function Fe(ee) {
      let {
        locked: ie,
        children: He
      } = ee;
      const ye = (0, Me.useRef)(null),
        Fe = (0, Ke.c)(ye, "y");
      return (0, Ue.jsx)("div", {
        ref: ye,
        className: be()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: Fe.before,
          CreateCustomLobbyBodyMoreBelow: Fe.after
        }),
        "data-pad-ignore": ie || void 0,
        children: He
      })
    }
  },
  37138: (ee, ie, He) => {
    He.d(ie, {
      c: () => oe,
      f: () => ke
    });
    var ye = He(59),
      be = He(1340),
      Me = He(1127),
      Ke = He(1320),
      Ue = He(3865),
      Fe = He(5407),
      Je = He(1228);

    function oe(ee) {
      let {
        loading: ie,
        schematics: He,
        onSchematicPicked: ye,
        selectedSchematicIdList: be = [],
        disableAutoExport: Fe
      } = ee;
      const {
        t: oe
      } = (0, Me.v)();
      return (0, Je.jsxs)("div", {
        className: "SchematicList",
        children: [ie && (0, Je.jsx)(Ke.b, {}), !ie && 0 === He.length && (0, Je.jsx)("div", {
          className: "NoSchematicsText",
          children: oe("worldBuilder:noSavedSchematic")
        }), !ie && He.map((ee => (0, Je.jsx)(Ue.c, {
          source: {
            type: "schematic",
            schematic: ee
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            ye(ee)
          },
          isSelected: be.includes(ee.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: ee.isAutoExported && Fe,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, ee.schematicId)))]
      })
    }

    function Re(ee) {
      let {
        ownedSchematics: ie,
        currentWorldSchematicId: He,
        onClose: be
      } = ee;
      const {
        t: Ke
      } = (0, Me.v)(), [Ue, Re] = (0, ye.useState)(null);
      return (0, Je.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === Ue && (0, Je.jsxs)(Je.Fragment, {
          children: [(0, Je.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: Ke("worldBuilder:schematicList")
          }), (0, Je.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: Ke("worldBuilder:clickSchematicForOptions")
          }), (0, Je.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, Je.jsx)(oe, {
              loading: !1,
              schematics: ie,
              onSchematicPicked: ee => {
                Re(ee)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== Ue && (0, Je.jsx)(Fe.i, {
          schematic: Ue,
          inSourceWorld: Ue.schematicId === He,
          onSchematicUpdate: ee => {
            Re(ee)
          },
          onClose: () => {
            Re(null), be()
          }
        })]
      })
    }

    function ke(ee) {
      let {
        ownedSchematics: ie,
        currentWorldSchematicId: He,
        onClose: ye
      } = ee;
      be.NotificationProvider.showCustomPopup({
        body: ee => (0, Je.jsx)(Re, {
          ownedSchematics: ie,
          currentWorldSchematicId: He,
          onClose: ee
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: ye,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  37144: (ee, ie, He) => {
    He.d(ie, {
      c: () => Je,
      g: () => oe
    });
    He(59);
    var ye = He(1053),
      be = He.n(ye),
      Me = He(5018),
      Ke = He(335),
      Ue = He(1127),
      Fe = He(1228);

    function Je(ee) {
      let {
        value: ie,
        onChange: He,
        showAll: ye,
        disabled: Je = !1
      } = ee;
      const {
        t: oe
      } = (0, Ue.v)();
      return (0, Fe.jsxs)("div", {
        className: be()("BloxdForm GamemodeForm", {
          BasicOptions: !ye
        }),
        children: [(0, Fe.jsx)("div", {
          className: "SectionTitle",
          children: oe("classic:defaultGamemode")
        }), (0, Fe.jsx)("div", {
          className: "SectionBody",
          children: Me.B.map((ee => ye || (0, Me.w)(ee) ? (0, Fe.jsx)("button", {
            type: "button",
            className: be()("WorldGamemode", {
              Selected: ie === ee
            }),
            disabled: Je,
            onClick: () => {
              He(ee)
            },
            style: {
              "--background-image": `url(${Ke.x[ee]})`
            },
            children: Ke.v[ee]
          }, ee) : null))
        })]
      })
    }

    function oe(ee) {
      let {
        mapTypes: ie,
        value: He,
        onChange: ye,
        showAll: Je,
        disabled: oe = !1,
        children: Re
      } = ee;
      const {
        t: ke
      } = (0, Ue.v)();
      return (0, Fe.jsxs)("div", {
        className: be()("BloxdForm MapTypeForm", {
          BasicOptions: !Je
        }),
        children: [(0, Fe.jsx)("div", {
          className: "SectionTitle",
          children: ke("customLobby:mapType")
        }), (0, Fe.jsx)("div", {
          className: "SectionBody",
          children: ie.map((ee => Je || (0, Me.y)(ee) ? (0, Fe.jsx)("button", {
            type: "button",
            className: be()("MapType", {
              Selected: He === ee
            }),
            disabled: oe,
            onClick: () => {
              ye(ee)
            },
            style: {
              "--background-image": `url(${Ke.o[ee]})`
            },
            children: Ke.l[ee]
          }, ee) : null))
        }), Re]
      })
    }
  },
  37132: () => {}
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);