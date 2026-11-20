export const id = 210;
export const ids = [210];
export const modules = {
  35968: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      CreateCustomLobby: () => gb
    });
    hb(35972);
    var Bb = hb(4393),
      Ob = hb(49),
      Gb = hb(1585),
      Ub = hb(958),
      Lb = hb.n(Ub),
      Yb = hb(2925),
      Sb = hb(1038),
      ab = hb(1103),
      Hb = hb(4353),
      wb = hb(1357),
      Zb = hb(35975),
      Xb = hb(1095),
      pb = hb(1227),
      ob = hb(1415),
      Ab = hb(13),
      lb = hb(1359),
      Kb = hb(588),
      Wb = hb(4700),
      Cb = hb(701),
      db = hb(1133),
      rb = hb(1124),
      jb = hb(4710),
      nb = hb(966),
      Db = hb(35977),
      xb = hb(35979),
      zb = hb(1007);

    function gb(bb) {
      var ub, hb, Ub, gb;
      let {
        gameNameWithVariation: ib,
        close: vb,
        initialDefaultGamemode: tb
      } = bb;
      const {
        t: Jb
      } = (0, Xb.K)(), eb = (0, ob.useNavigatePreserveSearch)(), [Nb, sb] = (0, Ob.useState)("Enter"), [Mb, mb] = (0, Ob.useState)(""), Ib = Ob.useRef(null), Pb = null === (ub = Cb.e[ib]) || void 0 === ub ? void 0 : ub.showWorldsInsteadOfCustomLobbies, qb = Pb ? 1 : null === (hb = Cb.e[ib]) || void 0 === hb ? void 0 : hb.customLobbyCustomSchematicLimit, [Eb, yb] = (0, Ob.useState)(!Pb);
      tb || (tb = "classic_creative" === ib || "classic_creativeFlat" === ib ? "creative" : "classic" === ib ? "peaceful" : "survival");
      const Vb = {
        baseOptions: {
          gameNameWithVariation: Pb ? "classic" : ib,
          name: "",
          visibility: "unlisted"
        },
        listedOptions: {
          description: "",
          color: "",
          emojis: ""
        },
        mapOptions: {
          mapType: "classic_creativeFlat" === ib ? "flat" : "default",
          schematicIdList: []
        },
        worldOptions: null
      };
      Pb && (Vb.worldOptions = {
        defaultGamemode: tb,
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
      const [Fb, fb] = (0, Ob.useState)(Vb), [kb, Tb] = (0, Ob.useState)(null);

      function cb(bb, ub) {
        fb({
          ...Fb,
          baseOptions: {
            ...Fb.baseOptions,
            [bb]: ub
          }
        })
      }

      function Qb(bb, ub) {
        fb({
          ...Fb,
          listedOptions: {
            ...Fb.listedOptions,
            [bb]: ub
          }
        })
      }

      function Rb(bb, ub) {
        fb({
          ...Fb,
          worldOptions: {
            ...Fb.worldOptions,
            [bb]: ub
          }
        })
      }

      function bu(bb) {
        fb({
          ...Fb,
          mapOptions: {
            ...Fb.mapOptions,
            ...bb
          }
        })
      }(0, Ob.useEffect)((() => {
        Hb.d.getNewStarterName().then((bb => {
          fb((ub => "" !== ub.baseOptions.name ? ub : {
            ...ub,
            baseOptions: {
              ...ub.baseOptions,
              name: bb
            }
          }))
        })).catch((bb => {
          console.error("Error getting new starter name:", bb)
        }))
      }), []), (0, Ob.useEffect)((() => {
        "customSchematic" === Fb.mapOptions.mapType && null === kb && (0, Sb.postJsonWithMetricsCookiesAndJsonResponse)(`${ab.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
          retries: 0,
          minTimeout: 3e3
        }).then((bb => {
          Tb(bb)
        }))
      }), [Fb.mapOptions.mapType, kb]);
      const uu = {
          tpRequests: {
            isEnabled: () => !Fb.worldOptions.disableTpRequests,
            Zx: bb => {
              Rb("disableTpRequests", !bb)
            }
          },
          spawnProtection: {
            isEnabled: () => Fb.worldOptions.spawnProtection,
            Zx: bb => {
              Rb("spawnProtection", bb)
            }
          },
          spawnReset: {
            isEnabled: () => Fb.worldOptions.enableSpawnReset,
            Zx: bb => {
              Rb("enableSpawnReset", bb)
            }
          },
          smpMarketplace: {
            isEnabled: () => Fb.worldOptions.enableSmpMarketplace,
            Zx: bb => {
              Rb("enableSmpMarketplace", bb)
            }
          },
          survivalGuns: {
            isEnabled: () => Fb.worldOptions.enableSurvivalGuns,
            Zx: bb => {
              Rb("enableSurvivalGuns", bb)
            }
          },
          fallDamage: {
            isEnabled: () => !Fb.worldOptions.disableFallDamage,
            Zx: bb => {
              Rb("disableFallDamage", !bb)
            }
          },
          dayNight: {
            isEnabled: () => Fb.worldOptions.enableDayNight,
            Zx: bb => {
              Rb("enableDayNight", bb)
            }
          }
        },
        hu = "Enter" !== Nb,
        Bu = (0, zb.jsx)(Wb.g, {
          className: "NameInput",
          label: "general:name",
          disabled: "Enter" !== Nb,
          children: (0, zb.jsx)(Gb.b, {
            domRef: Ib,
            onValueChange: (bb, ub) => {
              const hb = (0, rb.Jb)(bb);
              cb("name", hb), Ib.current.value = hb
            },
            maxLength: rb.Z,
            defaultValue: Fb.baseOptions.name
          })
        });
      return (0, zb.jsxs)("div", {
        className: Lb()("CreateCustomLobby", {
          CreateCustomLobbySuccess: "Success" === Nb,
          AdvancedMode: Eb
        }),
        children: ["Success" === Nb && (0, zb.jsxs)("div", {
          className: "CreateCustomLobbySuccessOverlay",
          children: [(0, zb.jsxs)("div", {
            className: "CreateCustomLobbySuccessTitle FullyFancyText AnimFadeInScaleUp",
            children: [(0, zb.jsx)(nb.e, {
              name: "check"
            }), (0, zb.jsx)(lb.b, {})]
          }), (0, zb.jsx)("div", {
            className: "CreateCustomLobbySuccessButtons AnimFadeInScaleUp",
            children: (0, zb.jsx)(wb.m, {
              padDefaultFocus: !0,
              onClick: () => {
                (0, Ab.h)("worldCreation"), eb((0, pb.e)(ib, Fb.baseOptions.name))
              },
              children: Jb("homePage:joinLobbyName", {
                lobbyName: Fb.baseOptions.name
              })
            })
          })]
        }), (0, zb.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, zb.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: Jb(Pb ? "homePage:createWorld" : "homePage:createCustomLobby")
          })
        }), (0, zb.jsx)(xb.c, {
          locked: hu,
          children: (0, zb.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [!Eb && Bu, Eb && (0, zb.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, zb.jsx)("div", {
                className: "SectionTitle",
                children: Jb("customLobby:generalOptions")
              }), (0, zb.jsxs)("div", {
                className: "SectionBody",
                children: [Bu, (0, zb.jsx)(Wb.g, {
                  label: "customLobby:visibility",
                  circleInfoText: Jb("customLobby:visibilityDescription"),
                  disabled: "Enter" !== Nb,
                  children: (0, zb.jsx)(Yb.b, {
                    options: Bb.r.map((bb => ({
                      value: bb,
                      label: Bb.e[bb]
                    }))),
                    value: Fb.baseOptions.visibility,
                    onChange: bb => {
                      cb("visibility", bb.value)
                    }
                  })
                })]
              })]
            }), Pb && (0, zb.jsx)(Db.b, {
              value: Fb.worldOptions.defaultGamemode,
              onChange: bb => {
                Rb("defaultGamemode", bb)
              },
              showAll: Eb,
              disabled: hu
            }), (Pb || !(0, Kb.J)(qb) && qb > 0) && (0, zb.jsx)(Db.f, {
              mapTypes: Pb ? Bb.J : Bb.o,
              value: Fb.mapOptions.mapType,
              onChange: bb => {
                const ub = {
                  mapType: bb
                };
                "customSchematic" !== bb && (ub.schematicIdList = []), bu(ub)
              },
              showAll: Eb,
              disabled: hu,
              children: "customSchematic" === Fb.mapOptions.mapType && (0, zb.jsxs)(zb.Fragment, {
                children: [(0, zb.jsxs)("div", {
                  className: "SchematicListTitle AnimFadeIn",
                  children: [Pb && Jb("customLobby:selectWorldSchematic"), !Pb && Jb("customLobby:selectCustomLobbySchematics", {
                    schematicLimit: qb
                  })]
                }), (0, zb.jsx)("div", {
                  className: Lb()("SchematicListContainer AnimFadeIn", {
                    SchematicListContainerDisabled: "Enter" !== Nb
                  }),
                  children: (0, zb.jsx)(Zb.c, {
                    loading: null === kb,
                    schematics: null !== kb && void 0 !== kb ? kb : [],
                    onSchematicPicked: function(bb) {
                      const ub = Fb.mapOptions.schematicIdList;
                      if (ub.includes(bb.schematicId)) bu({
                        schematicIdList: ub.filter((ub => ub !== bb.schematicId))
                      });
                      else {
                        if (qb && Fb.mapOptions.schematicIdList.length >= qb) return;
                        bu({
                          schematicIdList: [...Fb.mapOptions.schematicIdList, bb.schematicId]
                        })
                      }
                    },
                    selectedSchematicIdList: Fb.mapOptions.schematicIdList,
                    disableAutoExport: !0
                  })
                })]
              })
            }), Eb && (0, zb.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, zb.jsx)("div", {
                className: "SectionTitle",
                children: Jb("customLobby:listedOptions")
              }), (0, zb.jsxs)("div", {
                className: "SectionBody",
                children: [(0, zb.jsx)(Wb.g, {
                  label: "general:description",
                  className: "CustomLobbyDescription",
                  disabled: "Enter" !== Nb,
                  children: (0, zb.jsx)(Gb.b, {
                    onValueChange: (bb, ub) => {
                      Qb("description", bb)
                    },
                    maxLength: 100,
                    defaultValue: Fb.listedOptions.description
                  })
                }), (0, zb.jsx)(Wb.g, {
                  label: "general:color",
                  circleInfoText: "customLobby:lobbyColorDescription",
                  disabled: "Enter" !== Nb,
                  children: (0, zb.jsx)("div", {
                    className: "OtherInput",
                    children: (0, zb.jsx)("input", {
                      type: "color",
                      value: Fb.listedOptions.color,
                      onChange: bb => {
                        Qb("color", bb.target.value)
                      }
                    })
                  })
                }), (0, zb.jsx)(Wb.g, {
                  label: "general:emojis",
                  circleInfoText: "customLobby:lobbyEmojisDescription",
                  disabled: "Enter" !== Nb,
                  children: (0, zb.jsx)(Gb.b, {
                    onValueChange: (bb, ub) => {
                      Qb("emojis", bb)
                    },
                    maxLength: 6,
                    defaultValue: Fb.listedOptions.emojis
                  })
                })]
              })]
            }), Eb && Pb && (0, zb.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, zb.jsx)("div", {
                className: "SectionTitle",
                children: Jb("customLobby:advancedOptions")
              }), (0, zb.jsxs)("div", {
                className: "SectionBody",
                children: [(0, zb.jsx)(Wb.g, {
                  label: "classic:worldGenSeed",
                  disabled: "Enter" !== Nb,
                  children: (0, zb.jsx)(Gb.b, {
                    onValueChange: (bb, ub) => {
                      Rb("worldGenSeed", bb)
                    },
                    maxLength: rb.Z
                  })
                }), (0, zb.jsx)(Wb.g, {
                  label: "classic:disableProtectors",
                  disabled: "Enter" !== Nb,
                  children: (0, zb.jsx)(Wb.d, {
                    checked: Fb.worldOptions.disableProtectors,
                    setChecked: bb => {
                      Rb("disableProtectors", bb)
                    }
                  })
                }), (0, zb.jsx)(Wb.g, {
                  label: "classic:disableTribeCreation",
                  disabled: "Enter" !== Nb,
                  children: (0, zb.jsx)(Wb.d, {
                    checked: Fb.worldOptions.disableTribeCreation,
                    setChecked: bb => {
                      Rb("disableTribeCreation", bb)
                    }
                  })
                }), (0, zb.jsx)(Wb.g, {
                  label: "classic:voidDeathHeight",
                  circleInfoText: "classic:voidDeathHeightDescription",
                  disabled: "Enter" !== Nb,
                  children: (0, zb.jsx)("input", {
                    type: "number",
                    max: db.J,
                    value: null !== (Ub = Fb.worldOptions.voidDeathHeight) && void 0 !== Ub ? Ub : "",
                    onChange: bb => {
                      const ub = parseInt(bb.target.value);
                      Rb("voidDeathHeight", isNaN(ub) ? null : ub)
                    }
                  })
                }), (0, zb.jsx)(Wb.g, {
                  label: "classic:disableLobbySpawn",
                  disabled: "Enter" !== Nb,
                  children: (0, zb.jsx)(Wb.d, {
                    checked: Fb.worldOptions.disableLobbySpawn,
                    setChecked: bb => {
                      Rb("disableLobbySpawn", bb)
                    }
                  })
                }), (0, zb.jsx)(Wb.g, {
                  label: "classic:worldBorder",
                  circleInfoText: "classic:worldBorderDescription",
                  disabled: "Enter" !== Nb,
                  children: (0, zb.jsx)("input", {
                    type: "number",
                    min: db.R,
                    max: db.N,
                    value: null !== (gb = Fb.worldOptions.worldBorder) && void 0 !== gb ? gb : "",
                    onChange: bb => {
                      const ub = parseInt(bb.target.value);
                      Rb("worldBorder", isNaN(ub) ? null : ub)
                    }
                  })
                }), (0, zb.jsx)(Wb.g, {
                  label: "classic:disableMobs",
                  disabled: "Enter" !== Nb,
                  children: (0, zb.jsx)(Wb.d, {
                    checked: Fb.worldOptions.disableMobs,
                    setChecked: bb => {
                      Rb("disableMobs", bb)
                    }
                  })
                })]
              })]
            }), Pb && (0, zb.jsx)(jb.d, {
              callbacks: uu,
              disabled: "Enter" !== Nb,
              advancedMode: Eb
            })]
          })
        }), (0, zb.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, zb.jsx)(wb.m, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: "Enter" !== Nb,
            onClick: () => {
              !async function() {
                if ("Enter" === Nb) {
                  sb("Loading"), mb("");
                  try {
                    await Hb.d.createCustomLobby(Fb), sb("Success")
                  } catch (bb) {
                    mb(bb.message), console.error(bb.message), sb("Enter")
                  }
                }
              }()
            },
            children: Jb("general:create")
          }), Pb && (0, zb.jsx)("div", {
            className: "CreateCustomLobbyAdvancedToggle",
            "data-pad-ignore": hu || void 0,
            children: (0, zb.jsx)(Wb.g, {
              label: "customLobby:showAdvancedOptions",
              disabled: hu,
              onLabelClick: () => {
                yb(!Eb)
              },
              children: (0, zb.jsx)(Wb.d, {
                checked: Eb,
                setChecked: yb
              })
            })
          }), Mb && (0, zb.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: Mb
          })]
        })]
      })
    }
  },
  35979: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Yb
    });
    var Bb = hb(958),
      Ob = hb.n(Bb),
      Gb = hb(49),
      Ub = hb(4344),
      Lb = hb(1007);

    function Yb(bb) {
      let {
        locked: ub,
        children: hb
      } = bb;
      const Bb = (0, Gb.useRef)(null),
        Yb = (0, Ub.c)(Bb, "y");
      return (0, Lb.jsx)("div", {
        ref: Bb,
        className: Ob()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: Yb.before,
          CreateCustomLobbyBodyMoreBelow: Yb.after
        }),
        "data-pad-ignore": ub || void 0,
        children: hb
      })
    }
  },
  35975: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => ab,
      e: () => wb
    });
    var Bb = hb(49),
      Ob = hb(1249),
      Gb = hb(1095),
      Ub = hb(1242),
      Lb = hb(3268),
      Yb = hb(4694),
      Sb = hb(1007);

    function ab(bb) {
      let {
        loading: ub,
        schematics: hb,
        onSchematicPicked: Bb,
        selectedSchematicIdList: Ob = [],
        disableAutoExport: Yb
      } = bb;
      const {
        t: ab
      } = (0, Gb.K)();
      return (0, Sb.jsxs)("div", {
        className: "SchematicList",
        children: [ub && (0, Sb.jsx)(Ub.c, {}), !ub && 0 === hb.length && (0, Sb.jsx)("div", {
          className: "NoSchematicsText",
          children: ab("worldBuilder:noSavedSchematic")
        }), !ub && hb.map((bb => (0, Sb.jsx)(Lb.e, {
          source: {
            type: "schematic",
            schematic: bb
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            Bb(bb)
          },
          isSelected: Ob.includes(bb.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: bb.isAutoExported && Yb,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, bb.schematicId)))]
      })
    }

    function Hb(bb) {
      let {
        ownedSchematics: ub,
        currentWorldSchematicId: hb,
        onClose: Ob
      } = bb;
      const {
        t: Ub
      } = (0, Gb.K)(), [Lb, Hb] = (0, Bb.useState)(null);
      return (0, Sb.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === Lb && (0, Sb.jsxs)(Sb.Fragment, {
          children: [(0, Sb.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: Ub("worldBuilder:schematicList")
          }), (0, Sb.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: Ub("worldBuilder:clickSchematicForOptions")
          }), (0, Sb.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, Sb.jsx)(ab, {
              loading: !1,
              schematics: ub,
              onSchematicPicked: bb => {
                Hb(bb)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== Lb && (0, Sb.jsx)(Yb.i, {
          schematic: Lb,
          inSourceWorld: Lb.schematicId === hb,
          onSchematicUpdate: bb => {
            Hb(bb)
          },
          onClose: () => {
            Hb(null), Ob()
          }
        })]
      })
    }

    function wb(bb) {
      let {
        ownedSchematics: ub,
        currentWorldSchematicId: hb,
        onClose: Bb
      } = bb;
      Ob.NotificationProvider.showCustomPopup({
        body: bb => (0, Sb.jsx)(Hb, {
          ownedSchematics: ub,
          currentWorldSchematicId: hb,
          onClose: bb
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: Bb,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  35977: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Sb,
      f: () => ab
    });
    hb(49);
    var Bb = hb(958),
      Ob = hb.n(Bb),
      Gb = hb(4393),
      Ub = hb(298),
      Lb = hb(1095),
      Yb = hb(1007);

    function Sb(bb) {
      let {
        value: ub,
        onChange: hb,
        showAll: Bb,
        disabled: Sb = !1
      } = bb;
      const {
        t: ab
      } = (0, Lb.K)();
      return (0, Yb.jsxs)("div", {
        className: Ob()("BloxdForm GamemodeForm", {
          BasicOptions: !Bb
        }),
        children: [(0, Yb.jsx)("div", {
          className: "SectionTitle",
          children: ab("classic:defaultGamemode")
        }), (0, Yb.jsx)("div", {
          className: "SectionBody",
          children: Gb.I.map((bb => Bb || (0, Gb.y)(bb) ? (0, Yb.jsx)("button", {
            type: "button",
            className: Ob()("WorldGamemode", {
              Selected: ub === bb
            }),
            disabled: Sb,
            onClick: () => {
              hb(bb)
            },
            style: {
              "--background-image": `url(${Ub.y[bb]})`
            },
            children: Ub.x[bb]
          }, bb) : null))
        })]
      })
    }

    function ab(bb) {
      let {
        mapTypes: ub,
        value: hb,
        onChange: Bb,
        showAll: Sb,
        disabled: ab = !1,
        children: Hb
      } = bb;
      const {
        t: wb
      } = (0, Lb.K)();
      return (0, Yb.jsxs)("div", {
        className: Ob()("BloxdForm MapTypeForm", {
          BasicOptions: !Sb
        }),
        children: [(0, Yb.jsx)("div", {
          className: "SectionTitle",
          children: wb("customLobby:mapType")
        }), (0, Yb.jsx)("div", {
          className: "SectionBody",
          children: ub.map((bb => Sb || (0, Gb.C)(bb) ? (0, Yb.jsx)("button", {
            type: "button",
            className: Ob()("MapType", {
              Selected: hb === bb
            }),
            disabled: ab,
            onClick: () => {
              Bb(bb)
            },
            style: {
              "--background-image": `url(${Ub.q[bb]})`
            },
            children: Ub.n[bb]
          }, bb) : null))
        }), Hb]
      })
    }
  },
  35972: () => {}
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);