export const id = 209;
export const ids = [209];
export const modules = {
  35899: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      CreateCustomLobby: () => Vv
    });
    Pv(35902);
    var hv = Pv(4386),
      Sv = Pv(52),
      ev = Pv(1647),
      gv = Pv(1035),
      pv = Pv.n(gv),
      dv = Pv(2917),
      Nv = Pv(1114),
      lv = Pv(1184),
      Tv = Pv(4342),
      Wv = Pv(1442),
      wv = Pv(35906),
      av = Pv(1175),
      sv = Pv(1311),
      Cv = Pv(1492),
      iv = Pv(22),
      cv = Pv(1445),
      Gv = Pv(626),
      mv = Pv(4681),
      jv = Pv(763),
      fv = Pv(1226),
      Fv = Pv(1209),
      Yv = Pv(4694),
      nv = Pv(1042),
      Ov = Pv(35908),
      Dv = Pv(35913),
      Kv = Pv(1082);

    function Vv(vv) {
      var zv, Pv, gv, Vv;
      let {
        gameNameWithVariation: Uv,
        close: Rv,
        initialDefaultGamemode: xv
      } = vv;
      const {
        t: tv
      } = (0, av.x)(), qv = (0, Cv.useNavigatePreserveSearch)(), [Iv, Qv] = (0, Sv.useState)("Enter"), [Zv, Av] = (0, Sv.useState)(""), Lv = Sv.useRef(null), Hv = null === (zv = jv.e[Uv]) || void 0 === zv ? void 0 : zv.showWorldsInsteadOfCustomLobbies, Mv = Hv ? 1 : null === (Pv = jv.e[Uv]) || void 0 === Pv ? void 0 : Pv.customLobbyCustomSchematicLimit, [yv, Bv] = (0, Sv.useState)(!Hv);
      xv || (xv = "classic_creative" === Uv || "classic_creativeFlat" === Uv ? "creative" : "classic" === Uv ? "peaceful" : "survival");
      const Jv = {
        baseOptions: {
          gameNameWithVariation: Hv ? "classic" : Uv,
          name: "",
          visibility: "unlisted"
        },
        listedOptions: {
          description: "",
          color: "",
          emojis: ""
        },
        mapOptions: {
          mapType: "classic_creativeFlat" === Uv ? "flat" : "default",
          schematicIdList: []
        },
        worldOptions: null
      };
      Hv && (Jv.worldOptions = {
        defaultGamemode: xv,
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
      const [Ev, ov] = (0, Sv.useState)(Jv), [bv, rv] = (0, Sv.useState)(null);

      function kv(vv, zv) {
        ov({
          ...Ev,
          baseOptions: {
            ...Ev.baseOptions,
            [vv]: zv
          }
        })
      }

      function Xv(vv, zv) {
        ov({
          ...Ev,
          listedOptions: {
            ...Ev.listedOptions,
            [vv]: zv
          }
        })
      }

      function uv(vv, zv) {
        ov({
          ...Ev,
          worldOptions: {
            ...Ev.worldOptions,
            [vv]: zv
          }
        })
      }

      function vz(vv) {
        ov({
          ...Ev,
          mapOptions: {
            ...Ev.mapOptions,
            ...vv
          }
        })
      }(0, Sv.useEffect)((() => {
        Tv.e.getNewStarterName().then((vv => {
          ov((zv => "" !== zv.baseOptions.name ? zv : {
            ...zv,
            baseOptions: {
              ...zv.baseOptions,
              name: vv
            }
          }))
        })).catch((vv => {
          console.error("Error getting new starter name:", vv)
        }))
      }), []), (0, Sv.useEffect)((() => {
        "customSchematic" === Ev.mapOptions.mapType && null === bv && (0, Nv.postJsonWithMetricsCookiesAndJsonResponse)(`${lv.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
          retries: 0,
          minTimeout: 3e3
        }).then((vv => {
          rv(vv)
        }))
      }), [Ev.mapOptions.mapType, bv]);
      const zz = {
          tpRequests: {
            isEnabled: () => !Ev.worldOptions.disableTpRequests,
            uF: vv => {
              uv("disableTpRequests", !vv)
            }
          },
          spawnProtection: {
            isEnabled: () => Ev.worldOptions.spawnProtection,
            uF: vv => {
              uv("spawnProtection", vv)
            }
          },
          spawnReset: {
            isEnabled: () => Ev.worldOptions.enableSpawnReset,
            uF: vv => {
              uv("enableSpawnReset", vv)
            }
          },
          smpMarketplace: {
            isEnabled: () => Ev.worldOptions.enableSmpMarketplace,
            uF: vv => {
              uv("enableSmpMarketplace", vv)
            }
          },
          survivalGuns: {
            isEnabled: () => Ev.worldOptions.enableSurvivalGuns,
            uF: vv => {
              uv("enableSurvivalGuns", vv)
            }
          },
          fallDamage: {
            isEnabled: () => !Ev.worldOptions.disableFallDamage,
            uF: vv => {
              uv("disableFallDamage", !vv)
            }
          },
          dayNight: {
            isEnabled: () => Ev.worldOptions.enableDayNight,
            uF: vv => {
              uv("enableDayNight", vv)
            }
          }
        },
        Pz = "Enter" !== Iv,
        hz = (0, Kv.jsx)(mv.f, {
          className: "NameInput",
          label: "general:name",
          disabled: "Enter" !== Iv,
          children: (0, Kv.jsx)(ev.c, {
            domRef: Lv,
            onValueChange: (vv, zv) => {
              const Pv = (0, Fv.ub)(vv);
              kv("name", Pv), Lv.current.value = Pv
            },
            maxLength: Fv.U,
            defaultValue: Ev.baseOptions.name
          })
        });
      return (0, Kv.jsxs)("div", {
        className: pv()("CreateCustomLobby", {
          CreateCustomLobbySuccess: "Success" === Iv,
          AdvancedMode: yv
        }),
        children: ["Success" === Iv && (0, Kv.jsxs)("div", {
          className: "CreateCustomLobbySuccessOverlay",
          children: [(0, Kv.jsxs)("div", {
            className: "CreateCustomLobbySuccessTitle FullyFancyText AnimFadeInScaleUp",
            children: [(0, Kv.jsx)(nv.b, {
              name: "check"
            }), (0, Kv.jsx)(cv.d, {})]
          }), (0, Kv.jsx)("div", {
            className: "CreateCustomLobbySuccessButtons AnimFadeInScaleUp",
            children: (0, Kv.jsx)(Wv.j, {
              padDefaultFocus: !0,
              onClick: () => {
                (0, iv.g)("worldCreation"), qv((0, sv.e)(Uv, Ev.baseOptions.name))
              },
              children: tv("homePage:joinLobbyName", {
                lobbyName: Ev.baseOptions.name
              })
            })
          })]
        }), (0, Kv.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, Kv.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: tv(Hv ? "homePage:createWorld" : "homePage:createCustomLobby")
          })
        }), (0, Kv.jsx)(Dv.c, {
          locked: Pz,
          children: (0, Kv.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [!yv && hz, yv && (0, Kv.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, Kv.jsx)("div", {
                className: "SectionTitle",
                children: tv("customLobby:generalOptions")
              }), (0, Kv.jsxs)("div", {
                className: "SectionBody",
                children: [hz, (0, Kv.jsx)(mv.f, {
                  label: "customLobby:visibility",
                  circleInfoText: tv("customLobby:visibilityDescription"),
                  disabled: "Enter" !== Iv,
                  children: (0, Kv.jsx)(dv.e, {
                    options: hv.p.map((vv => ({
                      value: vv,
                      label: hv.f[vv]
                    }))),
                    value: Ev.baseOptions.visibility,
                    onChange: vv => {
                      kv("visibility", vv.value)
                    }
                  })
                })]
              })]
            }), Hv && (0, Kv.jsx)(Ov.e, {
              value: Ev.worldOptions.defaultGamemode,
              onChange: vv => {
                uv("defaultGamemode", vv)
              },
              showAll: yv,
              disabled: Pz
            }), (Hv || !(0, Gv.N)(Mv) && Mv > 0) && (0, Kv.jsx)(Ov.i, {
              mapTypes: Hv ? hv.C : hv.l,
              value: Ev.mapOptions.mapType,
              onChange: vv => {
                const zv = {
                  mapType: vv
                };
                "customSchematic" !== vv && (zv.schematicIdList = []), vz(zv)
              },
              showAll: yv,
              disabled: Pz,
              children: "customSchematic" === Ev.mapOptions.mapType && (0, Kv.jsxs)(Kv.Fragment, {
                children: [(0, Kv.jsxs)("div", {
                  className: "SchematicListTitle AnimFadeIn",
                  children: [Hv && tv("customLobby:selectWorldSchematic"), !Hv && tv("customLobby:selectCustomLobbySchematics", {
                    schematicLimit: Mv
                  })]
                }), (0, Kv.jsx)("div", {
                  className: pv()("SchematicListContainer AnimFadeIn", {
                    SchematicListContainerDisabled: "Enter" !== Iv
                  }),
                  children: (0, Kv.jsx)(wv.c, {
                    loading: null === bv,
                    schematics: null !== bv && void 0 !== bv ? bv : [],
                    onSchematicPicked: function(vv) {
                      const zv = Ev.mapOptions.schematicIdList;
                      if (zv.includes(vv.schematicId)) vz({
                        schematicIdList: zv.filter((zv => zv !== vv.schematicId))
                      });
                      else {
                        if (Mv && Ev.mapOptions.schematicIdList.length >= Mv) return;
                        vz({
                          schematicIdList: [...Ev.mapOptions.schematicIdList, vv.schematicId]
                        })
                      }
                    },
                    selectedSchematicIdList: Ev.mapOptions.schematicIdList,
                    disableAutoExport: !0
                  })
                })]
              })
            }), yv && (0, Kv.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, Kv.jsx)("div", {
                className: "SectionTitle",
                children: tv("customLobby:listedOptions")
              }), (0, Kv.jsxs)("div", {
                className: "SectionBody",
                children: [(0, Kv.jsx)(mv.f, {
                  label: "general:description",
                  className: "CustomLobbyDescription",
                  disabled: "Enter" !== Iv,
                  children: (0, Kv.jsx)(ev.c, {
                    onValueChange: (vv, zv) => {
                      Xv("description", vv)
                    },
                    maxLength: 100,
                    defaultValue: Ev.listedOptions.description
                  })
                }), (0, Kv.jsx)(mv.f, {
                  label: "general:color",
                  circleInfoText: "customLobby:lobbyColorDescription",
                  disabled: "Enter" !== Iv,
                  children: (0, Kv.jsx)("div", {
                    className: "OtherInput",
                    children: (0, Kv.jsx)("input", {
                      type: "color",
                      value: Ev.listedOptions.color,
                      onChange: vv => {
                        Xv("color", vv.target.value)
                      }
                    })
                  })
                }), (0, Kv.jsx)(mv.f, {
                  label: "general:emojis",
                  circleInfoText: "customLobby:lobbyEmojisDescription",
                  disabled: "Enter" !== Iv,
                  children: (0, Kv.jsx)(ev.c, {
                    onValueChange: (vv, zv) => {
                      Xv("emojis", vv)
                    },
                    maxLength: 6,
                    defaultValue: Ev.listedOptions.emojis
                  })
                })]
              })]
            }), yv && Hv && (0, Kv.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, Kv.jsx)("div", {
                className: "SectionTitle",
                children: tv("customLobby:advancedOptions")
              }), (0, Kv.jsxs)("div", {
                className: "SectionBody",
                children: [(0, Kv.jsx)(mv.f, {
                  label: "classic:worldGenSeed",
                  disabled: "Enter" !== Iv,
                  children: (0, Kv.jsx)(ev.c, {
                    onValueChange: (vv, zv) => {
                      uv("worldGenSeed", vv)
                    },
                    maxLength: Fv.U
                  })
                }), (0, Kv.jsx)(mv.f, {
                  label: "classic:disableProtectors",
                  disabled: "Enter" !== Iv,
                  children: (0, Kv.jsx)(mv.d, {
                    checked: Ev.worldOptions.disableProtectors,
                    setChecked: vv => {
                      uv("disableProtectors", vv)
                    }
                  })
                }), (0, Kv.jsx)(mv.f, {
                  label: "classic:disableTribeCreation",
                  disabled: "Enter" !== Iv,
                  children: (0, Kv.jsx)(mv.d, {
                    checked: Ev.worldOptions.disableTribeCreation,
                    setChecked: vv => {
                      uv("disableTribeCreation", vv)
                    }
                  })
                }), (0, Kv.jsx)(mv.f, {
                  label: "classic:voidDeathHeight",
                  circleInfoText: "classic:voidDeathHeightDescription",
                  disabled: "Enter" !== Iv,
                  children: (0, Kv.jsx)("input", {
                    type: "number",
                    max: fv.D,
                    value: null !== (gv = Ev.worldOptions.voidDeathHeight) && void 0 !== gv ? gv : "",
                    onChange: vv => {
                      const zv = parseInt(vv.target.value);
                      uv("voidDeathHeight", isNaN(zv) ? null : zv)
                    }
                  })
                }), (0, Kv.jsx)(mv.f, {
                  label: "classic:disableLobbySpawn",
                  disabled: "Enter" !== Iv,
                  children: (0, Kv.jsx)(mv.d, {
                    checked: Ev.worldOptions.disableLobbySpawn,
                    setChecked: vv => {
                      uv("disableLobbySpawn", vv)
                    }
                  })
                }), (0, Kv.jsx)(mv.f, {
                  label: "classic:worldBorder",
                  circleInfoText: "classic:worldBorderDescription",
                  disabled: "Enter" !== Iv,
                  children: (0, Kv.jsx)("input", {
                    type: "number",
                    min: fv.I,
                    max: fv.F,
                    value: null !== (Vv = Ev.worldOptions.worldBorder) && void 0 !== Vv ? Vv : "",
                    onChange: vv => {
                      const zv = parseInt(vv.target.value);
                      uv("worldBorder", isNaN(zv) ? null : zv)
                    }
                  })
                }), (0, Kv.jsx)(mv.f, {
                  label: "classic:disableMobs",
                  disabled: "Enter" !== Iv,
                  children: (0, Kv.jsx)(mv.d, {
                    checked: Ev.worldOptions.disableMobs,
                    setChecked: vv => {
                      uv("disableMobs", vv)
                    }
                  })
                })]
              })]
            }), Hv && (0, Kv.jsx)(Yv.d, {
              callbacks: zz,
              disabled: "Enter" !== Iv,
              advancedMode: yv
            })]
          })
        }), (0, Kv.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, Kv.jsx)(Wv.j, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: "Enter" !== Iv,
            onClick: () => {
              !async function() {
                if ("Enter" === Iv) {
                  Qv("Loading"), Av("");
                  try {
                    await Tv.e.createCustomLobby(Ev), Qv("Success")
                  } catch (vv) {
                    Av(vv.message), console.error(vv.message), Qv("Enter")
                  }
                }
              }()
            },
            children: tv("general:create")
          }), Hv && (0, Kv.jsx)("div", {
            className: "CreateCustomLobbyAdvancedToggle",
            "data-pad-ignore": Pz || void 0,
            children: (0, Kv.jsx)(mv.f, {
              label: "customLobby:showAdvancedOptions",
              disabled: Pz,
              onLabelClick: () => {
                Bv(!yv)
              },
              children: (0, Kv.jsx)(mv.d, {
                checked: yv,
                setChecked: Bv
              })
            })
          }), Zv && (0, Kv.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: Zv
          })]
        })]
      })
    }
  },
  35913: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => dv
    });
    var hv = Pv(1035),
      Sv = Pv.n(hv),
      ev = Pv(52),
      gv = Pv(4337),
      pv = Pv(1082);

    function dv(vv) {
      let {
        locked: zv,
        children: Pv
      } = vv;
      const hv = (0, ev.useRef)(null),
        dv = (0, gv.e)(hv, "y");
      return (0, pv.jsx)("div", {
        ref: hv,
        className: Sv()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: dv.before,
          CreateCustomLobbyBodyMoreBelow: dv.after
        }),
        "data-pad-ignore": zv || void 0,
        children: Pv
      })
    }
  },
  35906: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => lv,
      e: () => Wv
    });
    var hv = Pv(52),
      Sv = Pv(1336),
      ev = Pv(1175),
      gv = Pv(1327),
      pv = Pv(3236),
      dv = Pv(4679),
      Nv = Pv(1082);

    function lv(vv) {
      let {
        loading: zv,
        schematics: Pv,
        onSchematicPicked: hv,
        selectedSchematicIdList: Sv = [],
        disableAutoExport: dv
      } = vv;
      const {
        t: lv
      } = (0, ev.x)();
      return (0, Nv.jsxs)("div", {
        className: "SchematicList",
        children: [zv && (0, Nv.jsx)(gv.c, {}), !zv && 0 === Pv.length && (0, Nv.jsx)("div", {
          className: "NoSchematicsText",
          children: lv("worldBuilder:noSavedSchematic")
        }), !zv && Pv.map((vv => (0, Nv.jsx)(pv.i, {
          source: {
            type: "schematic",
            schematic: vv
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            hv(vv)
          },
          isSelected: Sv.includes(vv.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: vv.isAutoExported && dv,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, vv.schematicId)))]
      })
    }

    function Tv(vv) {
      let {
        ownedSchematics: zv,
        currentWorldSchematicId: Pv,
        onClose: Sv
      } = vv;
      const {
        t: gv
      } = (0, ev.x)(), [pv, Tv] = (0, hv.useState)(null);
      return (0, Nv.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === pv && (0, Nv.jsxs)(Nv.Fragment, {
          children: [(0, Nv.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: gv("worldBuilder:schematicList")
          }), (0, Nv.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: gv("worldBuilder:clickSchematicForOptions")
          }), (0, Nv.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, Nv.jsx)(lv, {
              loading: !1,
              schematics: zv,
              onSchematicPicked: vv => {
                Tv(vv)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== pv && (0, Nv.jsx)(dv.h, {
          schematic: pv,
          inSourceWorld: pv.schematicId === Pv,
          onSchematicUpdate: vv => {
            Tv(vv)
          },
          onClose: () => {
            Tv(null), Sv()
          }
        })]
      })
    }

    function Wv(vv) {
      let {
        ownedSchematics: zv,
        currentWorldSchematicId: Pv,
        onClose: hv
      } = vv;
      Sv.NotificationProvider.showCustomPopup({
        body: vv => (0, Nv.jsx)(Tv, {
          ownedSchematics: zv,
          currentWorldSchematicId: Pv,
          onClose: vv
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: hv,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  35908: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Nv,
      i: () => lv
    });
    Pv(52);
    var hv = Pv(1035),
      Sv = Pv.n(hv),
      ev = Pv(4386),
      gv = Pv(302),
      pv = Pv(1175),
      dv = Pv(1082);

    function Nv(vv) {
      let {
        value: zv,
        onChange: Pv,
        showAll: hv,
        disabled: Nv = !1
      } = vv;
      const {
        t: lv
      } = (0, pv.x)();
      return (0, dv.jsxs)("div", {
        className: Sv()("BloxdForm GamemodeForm", {
          BasicOptions: !hv
        }),
        children: [(0, dv.jsx)("div", {
          className: "SectionTitle",
          children: lv("classic:defaultGamemode")
        }), (0, dv.jsx)("div", {
          className: "SectionBody",
          children: ev.B.map((vv => hv || (0, ev.u)(vv) ? (0, dv.jsx)("button", {
            type: "button",
            className: Sv()("WorldGamemode", {
              Selected: zv === vv
            }),
            disabled: Nv,
            onClick: () => {
              Pv(vv)
            },
            style: {
              "--background-image": `url(${gv.s[vv]})`
            },
            children: gv.p[vv]
          }, vv) : null))
        })]
      })
    }

    function lv(vv) {
      let {
        mapTypes: zv,
        value: Pv,
        onChange: hv,
        showAll: Nv,
        disabled: lv = !1,
        children: Tv
      } = vv;
      const {
        t: Wv
      } = (0, pv.x)();
      return (0, dv.jsxs)("div", {
        className: Sv()("BloxdForm MapTypeForm", {
          BasicOptions: !Nv
        }),
        children: [(0, dv.jsx)("div", {
          className: "SectionTitle",
          children: Wv("customLobby:mapType")
        }), (0, dv.jsx)("div", {
          className: "SectionBody",
          children: zv.map((vv => Nv || (0, ev.x)(vv) ? (0, dv.jsx)("button", {
            type: "button",
            className: Sv()("MapType", {
              Selected: Pv === vv
            }),
            disabled: lv,
            onClick: () => {
              hv(vv)
            },
            style: {
              "--background-image": `url(${gv.l[vv]})`
            },
            children: gv.k[vv]
          }, vv) : null))
        }), Tv]
      })
    }
  },
  35902: () => {}
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);