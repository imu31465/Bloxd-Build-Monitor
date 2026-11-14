export const id = 192;
export const ids = [192];
export const modules = {
  35066: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      CreateCustomLobby: () => bB
    });
    var Vc = nc(3999),
      Ic = nc(244),
      rB = nc(73),
      uc = nc(1485),
      sc = nc(912),
      Mc = nc.n(sc),
      Pc = nc(2311),
      qB = nc(988),
      Oc = nc(1062),
      Tc = nc(3690),
      fc = nc(1255),
      mB = nc(35074),
      ec = nc(1051),
      tB = nc(1373),
      Sc = nc(1330),
      yB = nc(27),
      zB = nc(1259),
      pc = nc(569),
      hc = nc(3985),
      aB = nc(623),
      lc = nc(1108),
      Yc = nc(1090),
      Lc = nc(3993),
      gB = nc(926),
      Uc = nc(957);

    function bB(cB) {
      var Bc, nc, sc, bB;
      let {
        gameNameWithVariation: Zc,
        close: Qc,
        initialDefaultGamemode: Cc
      } = cB;
      const {
        t: vB
      } = (0, ec.x)(), Dc = (0, Sc.useNavigatePreserveSearch)(), [Nc, Ec] = (0, rB.useState)("Enter"), [oc, Wc] = (0, rB.useState)(""), wc = rB.useRef(null), kB = null === (Bc = aB.e[Zc]) || void 0 === Bc ? void 0 : Bc.showWorldsInsteadOfCustomLobbies, Xc = kB ? 1 : null === (nc = aB.e[Zc]) || void 0 === nc ? void 0 : nc.customLobbyCustomSchematicLimit, [Hc, Fc] = (0, rB.useState)(!kB);
      Cc || (Cc = "classic_creative" === Zc || "classic_creativeFlat" === Zc ? "creative" : "classic" === Zc ? "peaceful" : "survival");
      const Jc = {
        baseOptions: {
          gameNameWithVariation: kB ? "classic" : Zc,
          name: "",
          visibility: "unlisted"
        },
        listedOptions: {
          description: "",
          color: "",
          emojis: ""
        },
        mapOptions: {
          mapType: "classic_creativeFlat" === Zc ? "flat" : "default",
          schematicIdList: []
        },
        worldOptions: null
      };
      kB && (Jc.worldOptions = {
        defaultGamemode: Cc,
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
      const [jB, Rc] = (0, rB.useState)(Jc), [iB, Kc] = (0, rB.useState)(null);

      function xB(cB, Bc) {
        Rc({
          ...jB,
          baseOptions: {
            ...jB.baseOptions,
            [cB]: Bc
          }
        })
      }

      function dc(cB, Bc) {
        Rc({
          ...jB,
          listedOptions: {
            ...jB.listedOptions,
            [cB]: Bc
          }
        })
      }

      function Ac(cB, Bc) {
        Rc({
          ...jB,
          worldOptions: {
            ...jB.worldOptions,
            [cB]: Bc
          }
        })
      }

      function Gc(cB) {
        Rc({
          ...jB,
          mapOptions: {
            ...jB.mapOptions,
            ...cB
          }
        })
      }(0, rB.useEffect)((() => {
        Tc.c.getNewStarterName().then((cB => {
          Rc((Bc => "" !== Bc.baseOptions.name ? Bc : {
            ...Bc,
            baseOptions: {
              ...Bc.baseOptions,
              name: cB
            }
          }))
        })).catch((cB => {
          console.error("Error getting new starter name:", cB)
        }))
      }), []), (0, rB.useEffect)((() => {
        "customSchematic" === jB.mapOptions.mapType && null === iB && (0, qB.postJsonWithMetricsCookiesAndJsonResponse)(`${Oc.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
          retries: 0,
          minTimeout: 3e3
        }).then((cB => {
          Kc(cB)
        }))
      }), [jB.mapOptions.mapType, iB]);
      const cn = {
          tpRequests: {
            isEnabled: () => !jB.worldOptions.disableTpRequests,
            jnc: cB => {
              Ac("disableTpRequests", !cB)
            }
          },
          spawnProtection: {
            isEnabled: () => jB.worldOptions.spawnProtection,
            jnc: cB => {
              Ac("spawnProtection", cB)
            }
          },
          spawnReset: {
            isEnabled: () => jB.worldOptions.enableSpawnReset,
            jnc: cB => {
              Ac("enableSpawnReset", cB)
            }
          },
          smpMarketplace: {
            isEnabled: () => jB.worldOptions.enableSmpMarketplace,
            jnc: cB => {
              Ac("enableSmpMarketplace", cB)
            }
          },
          survivalGuns: {
            isEnabled: () => jB.worldOptions.enableSurvivalGuns,
            jnc: cB => {
              Ac("enableSurvivalGuns", cB)
            }
          },
          fallDamage: {
            isEnabled: () => !jB.worldOptions.disableFallDamage,
            jnc: cB => {
              Ac("disableFallDamage", !cB)
            }
          },
          dayNight: {
            isEnabled: () => jB.worldOptions.enableDayNight,
            jnc: cB => {
              Ac("enableDayNight", cB)
            }
          }
        },
        BB = "Enter" !== Nc,
        nB = (0, Uc.jsx)(hc.f, {
          className: "NameInput",
          label: "general:name",
          disabled: "Enter" !== Nc,
          children: (0, Uc.jsx)(uc.e, {
            domRef: wc,
            onValueChange: (cB, Bc) => {
              const nc = (0, Yc.nb)(cB);
              xB("name", nc), wc.current.value = nc
            },
            maxLength: Yc.J,
            defaultValue: jB.baseOptions.name
          })
        });
      return (0, Uc.jsxs)("div", {
        className: Mc()("CreateCustomLobby", {
          CreateCustomLobbySuccess: "Success" === Nc,
          AdvancedMode: Hc
        }),
        children: ["Success" === Nc && (0, Uc.jsxs)("div", {
          className: "CreateCustomLobbySuccessOverlay",
          children: [(0, Uc.jsxs)("div", {
            className: "CreateCustomLobbySuccessTitle FullyFancyText AnimFadeInScaleUp",
            children: [(0, Uc.jsx)(gB.e, {
              name: "check"
            }), (0, Uc.jsx)(zB.c, {})]
          }), (0, Uc.jsx)("div", {
            className: "CreateCustomLobbySuccessButtons AnimFadeInScaleUp",
            children: (0, Uc.jsx)(fc.n, {
              padDefaultFocus: !0,
              onClick: () => {
                (0, yB.h)("worldCreation"), Dc((0, tB.e)(Zc, jB.baseOptions.name))
              },
              children: vB("homePage:joinLobbyName", {
                lobbyName: jB.baseOptions.name
              })
            })
          })]
        }), (0, Uc.jsxs)("div", {
          className: "CreateCustomLobbyTitleContainer",
          "data-pad-ignore": BB || void 0,
          children: [(0, Uc.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: vB(kB ? "homePage:createWorld" : "homePage:createCustomLobby")
          }), kB && (0, Uc.jsx)(hc.f, {
            label: "customLobby:showAdvancedOptions",
            disabled: "Enter" !== Nc,
            children: (0, Uc.jsx)(hc.b, {
              checked: Hc,
              setChecked: cB => {
                Fc(cB)
              }
            })
          })]
        }), (0, Uc.jsxs)("div", {
          className: "CreateCustomLobbyBody",
          children: [(0, Uc.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            "data-pad-ignore": BB || void 0,
            children: [!Hc && nB, Hc && (0, Uc.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, Uc.jsx)("div", {
                className: "SectionTitle",
                children: vB("customLobby:generalOptions")
              }), (0, Uc.jsxs)("div", {
                className: "SectionBody",
                children: [nB, (0, Uc.jsx)(hc.f, {
                  label: "customLobby:visibility",
                  circleInfoText: vB("customLobby:visibilityDescription"),
                  disabled: "Enter" !== Nc,
                  children: (0, Uc.jsx)(Pc.c, {
                    options: Vc.o.map((cB => ({
                      value: cB,
                      label: Vc.f[cB]
                    }))),
                    value: jB.baseOptions.visibility,
                    onChange: cB => {
                      xB("visibility", cB.value)
                    }
                  })
                })]
              })]
            }), kB && (0, Uc.jsxs)("div", {
              className: "BloxdForm GamemodeForm",
              children: [(0, Uc.jsx)("div", {
                className: "SectionTitle",
                children: vB("classic:defaultGamemode")
              }), (0, Uc.jsx)("div", {
                className: "SectionBody",
                children: Vc.q.map((cB => Hc || "creative" === cB || "survival" === cB || "peaceful" === cB ? (0, Uc.jsx)("div", {
                  className: Mc()("WorldGamemode", {
                    Selected: jB.worldOptions.defaultGamemode === cB
                  }),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    BB || Ac("defaultGamemode", cB)
                  },
                  style: {
                    "--background-image": `url(${Ic.m[cB]})`
                  },
                  children: (0, Uc.jsx)("div", {
                    className: "WorldGamemodeName",
                    children: Ic.k[cB]
                  })
                }, cB) : null))
              })]
            }), (kB || !(0, pc.E)(Xc) && Xc > 0) && (0, Uc.jsxs)("div", {
              className: "BloxdForm MapTypeForm",
              children: [(0, Uc.jsx)("div", {
                className: "SectionTitle",
                children: vB("customLobby:mapType")
              }), (0, Uc.jsx)("div", {
                className: "SectionBody",
                children: (kB ? Vc.t : Vc.k).map((cB => Hc || "customSchematic" !== cB ? (0, Uc.jsx)("div", {
                  className: Mc()("MapType", {
                    Selected: jB.mapOptions.mapType === cB
                  }),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    if (BB) return;
                    const Bc = {
                      mapType: cB
                    };
                    "customSchematic" !== cB && (Bc.schematicIdList = []), Gc(Bc)
                  },
                  style: {
                    "--background-image": `url(${Ic.f[cB]})`
                  },
                  children: (0, Uc.jsx)("div", {
                    className: "MapTypeName",
                    children: Ic.e[cB]
                  })
                }, cB) : null))
              }), "customSchematic" === jB.mapOptions.mapType && (0, Uc.jsxs)(Uc.Fragment, {
                children: [(0, Uc.jsxs)("div", {
                  className: "SchematicListTitle AnimFadeIn",
                  children: [kB && vB("customLobby:selectWorldSchematic"), !kB && vB("customLobby:selectCustomLobbySchematics", {
                    schematicLimit: Xc
                  })]
                }), (0, Uc.jsx)("div", {
                  className: Mc()("SchematicListContainer AnimFadeIn", {
                    SchematicListContainerDisabled: "Enter" !== Nc
                  }),
                  children: (0, Uc.jsx)(mB.b, {
                    loading: null === iB,
                    schematics: null !== iB && void 0 !== iB ? iB : [],
                    onSchematicPicked: function(cB) {
                      const Bc = jB.mapOptions.schematicIdList;
                      if (Bc.includes(cB.schematicId)) Gc({
                        schematicIdList: Bc.filter((Bc => Bc !== cB.schematicId))
                      });
                      else {
                        if (Xc && jB.mapOptions.schematicIdList.length >= Xc) return;
                        Gc({
                          schematicIdList: [...jB.mapOptions.schematicIdList, cB.schematicId]
                        })
                      }
                    },
                    selectedSchematicIdList: jB.mapOptions.schematicIdList,
                    disableAutoExport: !0
                  })
                })]
              })]
            }), Hc && (0, Uc.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, Uc.jsx)("div", {
                className: "SectionTitle",
                children: vB("customLobby:listedOptions")
              }), (0, Uc.jsxs)("div", {
                className: "SectionBody",
                children: [(0, Uc.jsx)(hc.f, {
                  label: "general:description",
                  className: "CustomLobbyDescription",
                  disabled: "Enter" !== Nc,
                  children: (0, Uc.jsx)(uc.e, {
                    onValueChange: (cB, Bc) => {
                      dc("description", cB)
                    },
                    maxLength: 100,
                    defaultValue: jB.listedOptions.description
                  })
                }), (0, Uc.jsx)(hc.f, {
                  label: "general:color",
                  circleInfoText: "customLobby:lobbyColorDescription",
                  disabled: "Enter" !== Nc,
                  children: (0, Uc.jsx)("div", {
                    className: "OtherInput",
                    children: (0, Uc.jsx)("input", {
                      type: "color",
                      value: jB.listedOptions.color,
                      onChange: cB => {
                        dc("color", cB.target.value)
                      }
                    })
                  })
                }), (0, Uc.jsx)(hc.f, {
                  label: "general:emojis",
                  circleInfoText: "customLobby:lobbyEmojisDescription",
                  disabled: "Enter" !== Nc,
                  children: (0, Uc.jsx)(uc.e, {
                    onValueChange: (cB, Bc) => {
                      dc("emojis", cB)
                    },
                    maxLength: 6,
                    defaultValue: jB.listedOptions.emojis
                  })
                })]
              })]
            }), Hc && kB && (0, Uc.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, Uc.jsx)("div", {
                className: "SectionTitle",
                children: vB("customLobby:advancedOptions")
              }), (0, Uc.jsxs)("div", {
                className: "SectionBody",
                children: [(0, Uc.jsx)(hc.f, {
                  label: "classic:worldGenSeed",
                  disabled: "Enter" !== Nc,
                  children: (0, Uc.jsx)(uc.e, {
                    onValueChange: (cB, Bc) => {
                      Ac("worldGenSeed", cB)
                    },
                    maxLength: Yc.J
                  })
                }), (0, Uc.jsx)(hc.f, {
                  label: "classic:disableProtectors",
                  disabled: "Enter" !== Nc,
                  children: (0, Uc.jsx)(hc.b, {
                    checked: jB.worldOptions.disableProtectors,
                    setChecked: cB => {
                      Ac("disableProtectors", cB)
                    }
                  })
                }), (0, Uc.jsx)(hc.f, {
                  label: "classic:disableTribeCreation",
                  disabled: "Enter" !== Nc,
                  children: (0, Uc.jsx)(hc.b, {
                    checked: jB.worldOptions.disableTribeCreation,
                    setChecked: cB => {
                      Ac("disableTribeCreation", cB)
                    }
                  })
                }), (0, Uc.jsx)(hc.f, {
                  label: "classic:voidDeathHeight",
                  circleInfoText: "classic:voidDeathHeightDescription",
                  disabled: "Enter" !== Nc,
                  children: (0, Uc.jsx)("input", {
                    type: "number",
                    max: lc.H,
                    value: null !== (sc = jB.worldOptions.voidDeathHeight) && void 0 !== sc ? sc : "",
                    onChange: cB => {
                      const Bc = parseInt(cB.target.value);
                      Ac("voidDeathHeight", isNaN(Bc) ? null : Bc)
                    }
                  })
                }), (0, Uc.jsx)(hc.f, {
                  label: "classic:disableLobbySpawn",
                  disabled: "Enter" !== Nc,
                  children: (0, Uc.jsx)(hc.b, {
                    checked: jB.worldOptions.disableLobbySpawn,
                    setChecked: cB => {
                      Ac("disableLobbySpawn", cB)
                    }
                  })
                }), (0, Uc.jsx)(hc.f, {
                  label: "classic:worldBorder",
                  circleInfoText: "classic:worldBorderDescription",
                  disabled: "Enter" !== Nc,
                  children: (0, Uc.jsx)("input", {
                    type: "number",
                    min: lc.O,
                    max: lc.K,
                    value: null !== (bB = jB.worldOptions.worldBorder) && void 0 !== bB ? bB : "",
                    onChange: cB => {
                      const Bc = parseInt(cB.target.value);
                      Ac("worldBorder", isNaN(Bc) ? null : Bc)
                    }
                  })
                }), (0, Uc.jsx)(hc.f, {
                  label: "classic:disableMobs",
                  disabled: "Enter" !== Nc,
                  children: (0, Uc.jsx)(hc.b, {
                    checked: jB.worldOptions.disableMobs,
                    setChecked: cB => {
                      Ac("disableMobs", cB)
                    }
                  })
                })]
              })]
            }), kB && (0, Uc.jsx)(Lc.e, {
              callbacks: cn,
              disabled: "Enter" !== Nc,
              advancedMode: Hc
            })]
          }), (0, Uc.jsxs)("div", {
            className: "CreateCustomLobbyFooter",
            children: [(0, Uc.jsx)(fc.n, {
              className: "CreateCustomLobbyButton",
              padDefaultFocus: !0,
              loading: "Enter" !== Nc,
              onClick: () => {
                !async function() {
                  if ("Enter" === Nc) {
                    Ec("Loading"), Wc("");
                    try {
                      await Tc.c.createCustomLobby(jB), Ec("Success")
                    } catch (cB) {
                      Wc(cB.message), console.error(cB.message), Ec("Enter")
                    }
                  }
                }()
              },
              children: vB("general:create")
            }), oc && (0, Uc.jsx)("div", {
              className: "CreateCustomLobbyError AnimFadeInScaleUp",
              children: oc
            })]
          })]
        })]
      })
    }
  },
  35074: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => qB,
      c: () => Tc
    });
    var Vc = nc(73),
      Ic = nc(1194),
      rB = nc(1051),
      uc = nc(1188),
      sc = nc(2648),
      Mc = nc(3977),
      Pc = nc(957);

    function qB(cB) {
      let {
        loading: Bc,
        schematics: nc,
        onSchematicPicked: Vc,
        selectedSchematicIdList: Ic = [],
        disableAutoExport: Mc
      } = cB;
      const {
        t: qB
      } = (0, rB.x)();
      return (0, Pc.jsxs)("div", {
        className: "SchematicList",
        children: [Bc && (0, Pc.jsx)(uc.e, {}), !Bc && 0 === nc.length && (0, Pc.jsx)("div", {
          className: "NoSchematicsText",
          children: qB("worldBuilder:noSavedSchematic")
        }), !Bc && nc.map((cB => (0, Pc.jsx)(sc.g, {
          source: {
            type: "schematic",
            schematic: cB
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            Vc(cB)
          },
          isSelected: Ic.includes(cB.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: cB.isAutoExported && Mc,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, cB.schematicId)))]
      })
    }

    function Oc(cB) {
      let {
        ownedSchematics: Bc,
        currentWorldSchematicId: nc,
        onClose: Ic
      } = cB;
      const {
        t: uc
      } = (0, rB.x)(), [sc, Oc] = (0, Vc.useState)(null);
      return (0, Pc.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === sc && (0, Pc.jsxs)(Pc.Fragment, {
          children: [(0, Pc.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: uc("worldBuilder:schematicList")
          }), (0, Pc.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: uc("worldBuilder:clickSchematicForOptions")
          }), (0, Pc.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, Pc.jsx)(qB, {
              loading: !1,
              schematics: Bc,
              onSchematicPicked: cB => {
                Oc(cB)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== sc && (0, Pc.jsx)(Mc.h, {
          schematic: sc,
          inSourceWorld: sc.schematicId === nc,
          onSchematicUpdate: cB => {
            Oc(cB)
          },
          onClose: () => {
            Oc(null), Ic()
          }
        })]
      })
    }

    function Tc(cB) {
      let {
        ownedSchematics: Bc,
        currentWorldSchematicId: nc,
        onClose: Vc
      } = cB;
      Ic.NotificationProvider.showCustomPopup({
        body: cB => (0, Pc.jsx)(Oc, {
          ownedSchematics: Bc,
          currentWorldSchematicId: nc,
          onClose: cB
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: Vc,
        unlockPointerKey: "schematicListPopup"
      })
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);