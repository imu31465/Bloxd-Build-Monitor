export const id = 217;
export const ids = [217];
export const modules = {
  36558: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      CreateCustomLobby: () => Rt
    });
    Vt(36562);
    var Ot = Vt(4771),
      qt = Vt(63),
      Dt = Vt(1770),
      mt = Vt(1140),
      dt = Vt.n(mt),
      jt = Vt(3192),
      Ht = Vt(1223),
      Xt = Vt(1293),
      Qt = Vt(4725),
      lt = Vt(1556),
      Et = Vt(36569),
      ft = Vt(1286),
      wt = Vt(1429),
      yt = Vt(1613),
      Nt = Vt(26),
      Mt = Vt(1564),
      bt = Vt(710),
      Jt = Vt(5104),
      Ct = Vt(839),
      ut = Vt(1325),
      Kt = Vt(1308),
      ht = Vt(5116),
      vt = Vt(1152),
      Wt = Vt(36578),
      St = Vt(36585),
      ct = Vt(1188);

    function Rt(tt) {
      var et, Vt, mt, Rt;
      let {
        gameNameWithVariation: It,
        close: Pt,
        initialDefaultGamemode: Zt
      } = tt;
      const {
        t: Lt
      } = (0, ft.H)(), Ft = (0, yt.useNavigatePreserveSearch)(), [kt, Gt] = (0, qt.useState)("Enter"), [zt, ot] = (0, qt.useState)(""), rt = qt.useRef(null), Ut = null === (et = Ct.c[It]) || void 0 === et ? void 0 : et.showWorldsInsteadOfCustomLobbies, At = Ut ? 1 : null === (Vt = Ct.c[It]) || void 0 === Vt ? void 0 : Vt.customLobbyCustomSchematicLimit, [it, Yt] = (0, qt.useState)(!Ut);
      Zt || (Zt = "classic_creative" === It || "classic_creativeFlat" === It ? "creative" : "classic" === It ? "peaceful" : "survival");
      const Bt = {
        baseOptions: {
          gameNameWithVariation: Ut ? "classic" : It,
          name: "",
          visibility: "unlisted"
        },
        listedOptions: {
          description: "",
          color: "",
          emojis: ""
        },
        mapOptions: {
          mapType: "classic_creativeFlat" === It ? "flat" : "default",
          schematicIdList: []
        },
        worldOptions: null
      };
      Ut && (Bt.worldOptions = {
        defaultGamemode: Zt,
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
      const [pt, xt] = (0, qt.useState)(Bt), [Tt, gt] = (0, qt.useState)(null);

      function st(tt, et) {
        xt({
          ...pt,
          baseOptions: {
            ...pt.baseOptions,
            [tt]: et
          }
        })
      }

      function nt(tt, et) {
        xt({
          ...pt,
          listedOptions: {
            ...pt.listedOptions,
            [tt]: et
          }
        })
      }

      function te(tt, et) {
        xt({
          ...pt,
          worldOptions: {
            ...pt.worldOptions,
            [tt]: et
          }
        })
      }

      function ee(tt) {
        xt({
          ...pt,
          mapOptions: {
            ...pt.mapOptions,
            ...tt
          }
        })
      }(0, qt.useEffect)((() => {
        Qt.e.getNewStarterName().then((tt => {
          xt((et => "" !== et.baseOptions.name ? et : {
            ...et,
            baseOptions: {
              ...et.baseOptions,
              name: tt
            }
          }))
        })).catch((tt => {
          console.error("Error getting new starter name:", tt)
        }))
      }), []), (0, qt.useEffect)((() => {
        "customSchematic" === pt.mapOptions.mapType && null === Tt && (0, Ht.postJsonWithMetricsCookiesAndJsonResponse)(`${Xt.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
          retries: 0,
          minTimeout: 3e3
        }).then((tt => {
          gt(tt)
        }))
      }), [pt.mapOptions.mapType, Tt]);
      const Ve = {
          tpRequests: {
            isEnabled: () => !pt.worldOptions.disableTpRequests,
            Av: tt => {
              te("disableTpRequests", !tt)
            }
          },
          spawnProtection: {
            isEnabled: () => pt.worldOptions.spawnProtection,
            Av: tt => {
              te("spawnProtection", tt)
            }
          },
          spawnReset: {
            isEnabled: () => pt.worldOptions.enableSpawnReset,
            Av: tt => {
              te("enableSpawnReset", tt)
            }
          },
          smpMarketplace: {
            isEnabled: () => pt.worldOptions.enableSmpMarketplace,
            Av: tt => {
              te("enableSmpMarketplace", tt)
            }
          },
          survivalGuns: {
            isEnabled: () => pt.worldOptions.enableSurvivalGuns,
            Av: tt => {
              te("enableSurvivalGuns", tt)
            }
          },
          fallDamage: {
            isEnabled: () => !pt.worldOptions.disableFallDamage,
            Av: tt => {
              te("disableFallDamage", !tt)
            }
          },
          dayNight: {
            isEnabled: () => pt.worldOptions.enableDayNight,
            Av: tt => {
              te("enableDayNight", tt)
            }
          }
        },
        Oe = "Enter" !== kt,
        qe = (0, ct.jsx)(Jt.i, {
          className: "NameInput",
          label: "general:name",
          disabled: "Enter" !== kt,
          children: (0, ct.jsx)(Dt.d, {
            domRef: rt,
            onValueChange: (tt, et) => {
              const Vt = (0, Kt.vb)(tt);
              st("name", Vt), rt.current.value = Vt
            },
            maxLength: Kt.R,
            defaultValue: pt.baseOptions.name
          })
        });
      return (0, ct.jsxs)("div", {
        className: dt()("CreateCustomLobby", {
          CreateCustomLobbySuccess: "Success" === kt,
          AdvancedMode: it
        }),
        children: ["Success" === kt && (0, ct.jsxs)("div", {
          className: "CreateCustomLobbySuccessOverlay",
          children: [(0, ct.jsxs)("div", {
            className: "CreateCustomLobbySuccessTitle FullyFancyText AnimFadeInScaleUp",
            children: [(0, ct.jsx)(vt.b, {
              name: "check"
            }), (0, ct.jsx)(Mt.e, {})]
          }), (0, ct.jsx)("div", {
            className: "CreateCustomLobbySuccessButtons AnimFadeInScaleUp",
            children: (0, ct.jsx)(lt.m, {
              padDefaultFocus: !0,
              onClick: () => {
                (0, Nt.i)("worldCreation"), Ft((0, wt.c)(It, pt.baseOptions.name))
              },
              children: Lt("homePage:joinLobbyName", {
                lobbyName: pt.baseOptions.name
              })
            })
          })]
        }), (0, ct.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, ct.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: Lt(Ut ? "homePage:createWorld" : "homePage:createCustomLobby")
          })
        }), (0, ct.jsx)(St.e, {
          locked: Oe,
          children: (0, ct.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [!it && qe, it && (0, ct.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, ct.jsx)("div", {
                className: "SectionTitle",
                children: Lt("customLobby:generalOptions")
              }), (0, ct.jsxs)("div", {
                className: "SectionBody",
                children: [qe, (0, ct.jsx)(Jt.i, {
                  label: "customLobby:visibility",
                  circleInfoText: Lt("customLobby:visibilityDescription"),
                  disabled: "Enter" !== kt,
                  children: (0, ct.jsx)(jt.e, {
                    options: Ot.s.map((tt => ({
                      value: tt,
                      label: Ot.g[tt]
                    }))),
                    value: pt.baseOptions.visibility,
                    onChange: tt => {
                      st("visibility", tt.value)
                    }
                  })
                })]
              })]
            }), Ut && (0, ct.jsx)(Wt.e, {
              value: pt.worldOptions.defaultGamemode,
              onChange: tt => {
                te("defaultGamemode", tt)
              },
              showAll: it,
              disabled: Oe
            }), (Ut || !(0, bt.B)(At) && At > 0) && (0, ct.jsx)(Wt.h, {
              mapTypes: Ut ? Ot.J : Ot.p,
              value: pt.mapOptions.mapType,
              onChange: tt => {
                const et = {
                  mapType: tt
                };
                "customSchematic" !== tt && (et.schematicIdList = []), ee(et)
              },
              showAll: it,
              disabled: Oe,
              children: "customSchematic" === pt.mapOptions.mapType && (0, ct.jsxs)(ct.Fragment, {
                children: [(0, ct.jsxs)("div", {
                  className: "SchematicListTitle AnimFadeIn",
                  children: [Ut && Lt("customLobby:selectWorldSchematic"), !Ut && Lt("customLobby:selectCustomLobbySchematics", {
                    schematicLimit: At
                  })]
                }), (0, ct.jsx)("div", {
                  className: dt()("SchematicListContainer AnimFadeIn", {
                    SchematicListContainerDisabled: "Enter" !== kt
                  }),
                  children: (0, ct.jsx)(Et.e, {
                    loading: null === Tt,
                    schematics: null !== Tt && void 0 !== Tt ? Tt : [],
                    onSchematicPicked: function(tt) {
                      const et = pt.mapOptions.schematicIdList;
                      if (et.includes(tt.schematicId)) ee({
                        schematicIdList: et.filter((et => et !== tt.schematicId))
                      });
                      else {
                        if (At && pt.mapOptions.schematicIdList.length >= At) return;
                        ee({
                          schematicIdList: [...pt.mapOptions.schematicIdList, tt.schematicId]
                        })
                      }
                    },
                    selectedSchematicIdList: pt.mapOptions.schematicIdList,
                    disableAutoExport: !0
                  })
                })]
              })
            }), it && (0, ct.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, ct.jsx)("div", {
                className: "SectionTitle",
                children: Lt("customLobby:listedOptions")
              }), (0, ct.jsxs)("div", {
                className: "SectionBody",
                children: [(0, ct.jsx)(Jt.i, {
                  label: "general:description",
                  className: "CustomLobbyDescription",
                  disabled: "Enter" !== kt,
                  children: (0, ct.jsx)(Dt.d, {
                    onValueChange: (tt, et) => {
                      nt("description", tt)
                    },
                    maxLength: 100,
                    defaultValue: pt.listedOptions.description
                  })
                }), (0, ct.jsx)(Jt.i, {
                  label: "general:color",
                  circleInfoText: "customLobby:lobbyColorDescription",
                  disabled: "Enter" !== kt,
                  children: (0, ct.jsx)("div", {
                    className: "OtherInput",
                    children: (0, ct.jsx)("input", {
                      type: "color",
                      value: pt.listedOptions.color,
                      onChange: tt => {
                        nt("color", tt.target.value)
                      }
                    })
                  })
                }), (0, ct.jsx)(Jt.i, {
                  label: "general:emojis",
                  circleInfoText: "customLobby:lobbyEmojisDescription",
                  disabled: "Enter" !== kt,
                  children: (0, ct.jsx)(Dt.d, {
                    onValueChange: (tt, et) => {
                      nt("emojis", tt)
                    },
                    maxLength: 6,
                    defaultValue: pt.listedOptions.emojis
                  })
                })]
              })]
            }), it && Ut && (0, ct.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, ct.jsx)("div", {
                className: "SectionTitle",
                children: Lt("customLobby:advancedOptions")
              }), (0, ct.jsxs)("div", {
                className: "SectionBody",
                children: [(0, ct.jsx)(Jt.i, {
                  label: "classic:worldGenSeed",
                  disabled: "Enter" !== kt,
                  children: (0, ct.jsx)(Dt.d, {
                    onValueChange: (tt, et) => {
                      te("worldGenSeed", tt)
                    },
                    maxLength: Kt.R
                  })
                }), (0, ct.jsx)(Jt.i, {
                  label: "classic:disableProtectors",
                  disabled: "Enter" !== kt,
                  children: (0, ct.jsx)(Jt.e, {
                    checked: pt.worldOptions.disableProtectors,
                    setChecked: tt => {
                      te("disableProtectors", tt)
                    }
                  })
                }), (0, ct.jsx)(Jt.i, {
                  label: "classic:disableTribeCreation",
                  disabled: "Enter" !== kt,
                  children: (0, ct.jsx)(Jt.e, {
                    checked: pt.worldOptions.disableTribeCreation,
                    setChecked: tt => {
                      te("disableTribeCreation", tt)
                    }
                  })
                }), (0, ct.jsx)(Jt.i, {
                  label: "classic:voidDeathHeight",
                  circleInfoText: "classic:voidDeathHeightDescription",
                  disabled: "Enter" !== kt,
                  children: (0, ct.jsx)("input", {
                    type: "number",
                    max: ut.H,
                    value: null !== (mt = pt.worldOptions.voidDeathHeight) && void 0 !== mt ? mt : "",
                    onChange: tt => {
                      const et = parseInt(tt.target.value);
                      te("voidDeathHeight", isNaN(et) ? null : et)
                    }
                  })
                }), (0, ct.jsx)(Jt.i, {
                  label: "classic:disableLobbySpawn",
                  disabled: "Enter" !== kt,
                  children: (0, ct.jsx)(Jt.e, {
                    checked: pt.worldOptions.disableLobbySpawn,
                    setChecked: tt => {
                      te("disableLobbySpawn", tt)
                    }
                  })
                }), (0, ct.jsx)(Jt.i, {
                  label: "classic:worldBorder",
                  circleInfoText: "classic:worldBorderDescription",
                  disabled: "Enter" !== kt,
                  children: (0, ct.jsx)("input", {
                    type: "number",
                    min: ut.M,
                    max: ut.J,
                    value: null !== (Rt = pt.worldOptions.worldBorder) && void 0 !== Rt ? Rt : "",
                    onChange: tt => {
                      const et = parseInt(tt.target.value);
                      te("worldBorder", isNaN(et) ? null : et)
                    }
                  })
                }), (0, ct.jsx)(Jt.i, {
                  label: "classic:disableMobs",
                  disabled: "Enter" !== kt,
                  children: (0, ct.jsx)(Jt.e, {
                    checked: pt.worldOptions.disableMobs,
                    setChecked: tt => {
                      te("disableMobs", tt)
                    }
                  })
                })]
              })]
            }), Ut && (0, ct.jsx)(ht.c, {
              callbacks: Ve,
              disabled: "Enter" !== kt,
              advancedMode: it
            })]
          })
        }), (0, ct.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, ct.jsx)(lt.m, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: "Enter" !== kt,
            onClick: () => {
              !async function() {
                if ("Enter" === kt) {
                  Gt("Loading"), ot("");
                  try {
                    await Qt.e.createCustomLobby(pt), Gt("Success")
                  } catch (tt) {
                    ot(tt.message), console.error(tt.message), Gt("Enter")
                  }
                }
              }()
            },
            children: Lt("general:create")
          }), Ut && (0, ct.jsx)("div", {
            className: "CreateCustomLobbyAdvancedToggle",
            "data-pad-ignore": Oe || void 0,
            children: (0, ct.jsx)(Jt.i, {
              label: "customLobby:showAdvancedOptions",
              disabled: Oe,
              onLabelClick: () => {
                Yt(!it)
              },
              children: (0, ct.jsx)(Jt.e, {
                checked: it,
                setChecked: Yt
              })
            })
          }), zt && (0, ct.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: zt
          })]
        })]
      })
    }
  },
  36585: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => jt
    });
    var Ot = Vt(1140),
      qt = Vt.n(Ot),
      Dt = Vt(63),
      mt = Vt(4715),
      dt = Vt(1188);

    function jt(tt) {
      let {
        locked: et,
        children: Vt
      } = tt;
      const Ot = (0, Dt.useRef)(null),
        jt = (0, mt.e)(Ot, "y");
      return (0, dt.jsx)("div", {
        ref: Ot,
        className: qt()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: jt.before,
          CreateCustomLobbyBodyMoreBelow: jt.after
        }),
        "data-pad-ignore": et || void 0,
        children: Vt
      })
    }
  },
  36569: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Xt,
      g: () => lt
    });
    var Ot = Vt(63),
      qt = Vt(1450),
      Dt = Vt(1286),
      mt = Vt(1436),
      dt = Vt(3544),
      jt = Vt(5101),
      Ht = Vt(1188);

    function Xt(tt) {
      let {
        loading: et,
        schematics: Vt,
        onSchematicPicked: Ot,
        selectedSchematicIdList: qt = [],
        disableAutoExport: jt
      } = tt;
      const {
        t: Xt
      } = (0, Dt.H)();
      return (0, Ht.jsxs)("div", {
        className: "SchematicList",
        children: [et && (0, Ht.jsx)(mt.b, {}), !et && 0 === Vt.length && (0, Ht.jsx)("div", {
          className: "NoSchematicsText",
          children: Xt("worldBuilder:noSavedSchematic")
        }), !et && Vt.map((tt => (0, Ht.jsx)(dt.h, {
          source: {
            type: "schematic",
            schematic: tt
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            Ot(tt)
          },
          isSelected: qt.includes(tt.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: tt.isAutoExported && jt,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, tt.schematicId)))]
      })
    }

    function Qt(tt) {
      let {
        ownedSchematics: et,
        currentWorldSchematicId: Vt,
        onClose: qt
      } = tt;
      const {
        t: mt
      } = (0, Dt.H)(), [dt, Qt] = (0, Ot.useState)(null);
      return (0, Ht.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === dt && (0, Ht.jsxs)(Ht.Fragment, {
          children: [(0, Ht.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: mt("worldBuilder:schematicList")
          }), (0, Ht.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: mt("worldBuilder:clickSchematicForOptions")
          }), (0, Ht.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, Ht.jsx)(Xt, {
              loading: !1,
              schematics: et,
              onSchematicPicked: tt => {
                Qt(tt)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== dt && (0, Ht.jsx)(jt.k, {
          schematic: dt,
          inSourceWorld: dt.schematicId === Vt,
          onSchematicUpdate: tt => {
            Qt(tt)
          },
          onClose: () => {
            Qt(null), qt()
          }
        })]
      })
    }

    function lt(tt) {
      let {
        ownedSchematics: et,
        currentWorldSchematicId: Vt,
        onClose: Ot
      } = tt;
      qt.NotificationProvider.showCustomPopup({
        body: tt => (0, Ht.jsx)(Qt, {
          ownedSchematics: et,
          currentWorldSchematicId: Vt,
          onClose: tt
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: Ot,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  36578: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Ht,
      h: () => Xt
    });
    Vt(63);
    var Ot = Vt(1140),
      qt = Vt.n(Ot),
      Dt = Vt(4771),
      mt = Vt(377),
      dt = Vt(1286),
      jt = Vt(1188);

    function Ht(tt) {
      let {
        value: et,
        onChange: Vt,
        showAll: Ot,
        disabled: Ht = !1
      } = tt;
      const {
        t: Xt
      } = (0, dt.H)();
      return (0, jt.jsxs)("div", {
        className: qt()("BloxdForm GamemodeForm", {
          BasicOptions: !Ot
        }),
        children: [(0, jt.jsx)("div", {
          className: "SectionTitle",
          children: Xt("classic:defaultGamemode")
        }), (0, jt.jsx)("div", {
          className: "SectionBody",
          children: Dt.I.map((tt => Ot || (0, Dt.z)(tt) ? (0, jt.jsx)("button", {
            type: "button",
            className: qt()("WorldGamemode", {
              Selected: et === tt
            }),
            disabled: Ht,
            onClick: () => {
              Vt(tt)
            },
            style: {
              "--background-image": `url(${mt.s[tt]})`
            },
            children: mt.p[tt]
          }, tt) : null))
        })]
      })
    }

    function Xt(tt) {
      let {
        mapTypes: et,
        value: Vt,
        onChange: Ot,
        showAll: Ht,
        disabled: Xt = !1,
        children: Qt
      } = tt;
      const {
        t: lt
      } = (0, dt.H)();
      return (0, jt.jsxs)("div", {
        className: qt()("BloxdForm MapTypeForm", {
          BasicOptions: !Ht
        }),
        children: [(0, jt.jsx)("div", {
          className: "SectionTitle",
          children: lt("customLobby:mapType")
        }), (0, jt.jsx)("div", {
          className: "SectionBody",
          children: et.map((tt => Ht || (0, Dt.D)(tt) ? (0, jt.jsx)("button", {
            type: "button",
            className: qt()("MapType", {
              Selected: Vt === tt
            }),
            disabled: Xt,
            onClick: () => {
              Ot(tt)
            },
            style: {
              "--background-image": `url(${mt.l[tt]})`
            },
            children: mt.h[tt]
          }, tt) : null))
        }), Qt]
      })
    }
  },
  36562: () => {}
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);