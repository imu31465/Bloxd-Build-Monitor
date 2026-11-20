export const id = 209;
export const ids = [209];
export const modules = {
  35998: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      CreateCustomLobby: () => yb
    });
    sb(36007);
    var kb = sb(4371),
      Wb = sb(64),
      ab = sb(1664),
      Tb = sb(1033),
      Ub = sb.n(Tb),
      Ib = sb(2889),
      Hb = sb(1126),
      fb = sb(1208),
      Mb = sb(4330),
      Xb = sb(1431),
      nb = sb(36016),
      mb = sb(1197),
      lb = sb(1316),
      Qb = sb(1495),
      eb = sb(19),
      Cb = sb(1436),
      Nb = sb(628),
      Vb = sb(4641),
      Lb = sb(760),
      ub = sb(1253),
      Yb = sb(1235),
      hb = sb(4648),
      Jb = sb(1039),
      gb = sb(36025),
      Bb = sb(36030),
      tb = sb(1087);

    function yb(bb) {
      var cb, sb, Tb, yb;
      let {
        gameNameWithVariation: Pb,
        close: Db,
        initialDefaultGamemode: Eb
      } = bb;
      const {
        t: ib
      } = (0, mb.E)(), Ob = (0, Qb.useNavigatePreserveSearch)(), [Gb, Kb] = (0, Wb.useState)("Enter"), [Zb, zb] = (0, Wb.useState)(""), qb = Wb.useRef(null), db = null === (cb = Lb.b[Pb]) || void 0 === cb ? void 0 : cb.showWorldsInsteadOfCustomLobbies, Ab = db ? 1 : null === (sb = Lb.b[Pb]) || void 0 === sb ? void 0 : sb.customLobbyCustomSchematicLimit, [wb, rb] = (0, Wb.useState)(!db);
      Eb || (Eb = "classic_creative" === Pb || "classic_creativeFlat" === Pb ? "creative" : "classic" === Pb ? "peaceful" : "survival");
      const ob = {
        baseOptions: {
          gameNameWithVariation: db ? "classic" : Pb,
          name: "",
          visibility: "unlisted"
        },
        listedOptions: {
          description: "",
          color: "",
          emojis: ""
        },
        mapOptions: {
          mapType: "classic_creativeFlat" === Pb ? "flat" : "default",
          schematicIdList: []
        },
        worldOptions: null
      };
      db && (ob.worldOptions = {
        defaultGamemode: Eb,
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
      const [Sb, Rb] = (0, Wb.useState)(ob), [vb, Fb] = (0, Wb.useState)(null);

      function xb(bb, cb) {
        Rb({
          ...Sb,
          baseOptions: {
            ...Sb.baseOptions,
            [bb]: cb
          }
        })
      }

      function jb(bb, cb) {
        Rb({
          ...Sb,
          listedOptions: {
            ...Sb.listedOptions,
            [bb]: cb
          }
        })
      }

      function pb(bb, cb) {
        Rb({
          ...Sb,
          worldOptions: {
            ...Sb.worldOptions,
            [bb]: cb
          }
        })
      }

      function bc(bb) {
        Rb({
          ...Sb,
          mapOptions: {
            ...Sb.mapOptions,
            ...bb
          }
        })
      }(0, Wb.useEffect)((() => {
        Mb.d.getNewStarterName().then((bb => {
          Rb((cb => "" !== cb.baseOptions.name ? cb : {
            ...cb,
            baseOptions: {
              ...cb.baseOptions,
              name: bb
            }
          }))
        })).catch((bb => {
          console.error("Error getting new starter name:", bb)
        }))
      }), []), (0, Wb.useEffect)((() => {
        "customSchematic" === Sb.mapOptions.mapType && null === vb && (0, Hb.postJsonWithMetricsCookiesAndJsonResponse)(`${fb.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
          retries: 0,
          minTimeout: 3e3
        }).then((bb => {
          Fb(bb)
        }))
      }), [Sb.mapOptions.mapType, vb]);
      const cc = {
          tpRequests: {
            isEnabled: () => !Sb.worldOptions.disableTpRequests,
            GV: bb => {
              pb("disableTpRequests", !bb)
            }
          },
          spawnProtection: {
            isEnabled: () => Sb.worldOptions.spawnProtection,
            GV: bb => {
              pb("spawnProtection", bb)
            }
          },
          spawnReset: {
            isEnabled: () => Sb.worldOptions.enableSpawnReset,
            GV: bb => {
              pb("enableSpawnReset", bb)
            }
          },
          smpMarketplace: {
            isEnabled: () => Sb.worldOptions.enableSmpMarketplace,
            GV: bb => {
              pb("enableSmpMarketplace", bb)
            }
          },
          survivalGuns: {
            isEnabled: () => Sb.worldOptions.enableSurvivalGuns,
            GV: bb => {
              pb("enableSurvivalGuns", bb)
            }
          },
          fallDamage: {
            isEnabled: () => !Sb.worldOptions.disableFallDamage,
            GV: bb => {
              pb("disableFallDamage", !bb)
            }
          },
          dayNight: {
            isEnabled: () => Sb.worldOptions.enableDayNight,
            GV: bb => {
              pb("enableDayNight", bb)
            }
          }
        },
        sc = "Enter" !== Gb,
        kc = (0, tb.jsx)(Vb.f, {
          className: "NameInput",
          label: "general:name",
          disabled: "Enter" !== Gb,
          children: (0, tb.jsx)(ab.c, {
            domRef: qb,
            onValueChange: (bb, cb) => {
              const sb = (0, Yb.mb)(bb);
              xb("name", sb), qb.current.value = sb
            },
            maxLength: Yb.I,
            defaultValue: Sb.baseOptions.name
          })
        });
      return (0, tb.jsxs)("div", {
        className: Ub()("CreateCustomLobby", {
          CreateCustomLobbySuccess: "Success" === Gb,
          AdvancedMode: wb
        }),
        children: ["Success" === Gb && (0, tb.jsxs)("div", {
          className: "CreateCustomLobbySuccessOverlay",
          children: [(0, tb.jsxs)("div", {
            className: "CreateCustomLobbySuccessTitle FullyFancyText AnimFadeInScaleUp",
            children: [(0, tb.jsx)(Jb.b, {
              name: "check"
            }), (0, tb.jsx)(Cb.e, {})]
          }), (0, tb.jsx)("div", {
            className: "CreateCustomLobbySuccessButtons AnimFadeInScaleUp",
            children: (0, tb.jsx)(Xb.n, {
              padDefaultFocus: !0,
              onClick: () => {
                (0, eb.l)("worldCreation"), Ob((0, lb.b)(Pb, Sb.baseOptions.name))
              },
              children: ib("homePage:joinLobbyName", {
                lobbyName: Sb.baseOptions.name
              })
            })
          })]
        }), (0, tb.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, tb.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: ib(db ? "homePage:createWorld" : "homePage:createCustomLobby")
          })
        }), (0, tb.jsx)(Bb.b, {
          locked: sc,
          children: (0, tb.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [!wb && kc, wb && (0, tb.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, tb.jsx)("div", {
                className: "SectionTitle",
                children: ib("customLobby:generalOptions")
              }), (0, tb.jsxs)("div", {
                className: "SectionBody",
                children: [kc, (0, tb.jsx)(Vb.f, {
                  label: "customLobby:visibility",
                  circleInfoText: ib("customLobby:visibilityDescription"),
                  disabled: "Enter" !== Gb,
                  children: (0, tb.jsx)(Ib.e, {
                    options: kb.t.map((bb => ({
                      value: bb,
                      label: kb.f[bb]
                    }))),
                    value: Sb.baseOptions.visibility,
                    onChange: bb => {
                      xb("visibility", bb.value)
                    }
                  })
                })]
              })]
            }), db && (0, tb.jsx)(gb.b, {
              value: Sb.worldOptions.defaultGamemode,
              onChange: bb => {
                pb("defaultGamemode", bb)
              },
              showAll: wb,
              disabled: sc
            }), (db || !(0, Nb.L)(Ab) && Ab > 0) && (0, tb.jsx)(gb.c, {
              mapTypes: db ? kb.E : kb.s,
              value: Sb.mapOptions.mapType,
              onChange: bb => {
                const cb = {
                  mapType: bb
                };
                "customSchematic" !== bb && (cb.schematicIdList = []), bc(cb)
              },
              showAll: wb,
              disabled: sc,
              children: "customSchematic" === Sb.mapOptions.mapType && (0, tb.jsxs)(tb.Fragment, {
                children: [(0, tb.jsxs)("div", {
                  className: "SchematicListTitle AnimFadeIn",
                  children: [db && ib("customLobby:selectWorldSchematic"), !db && ib("customLobby:selectCustomLobbySchematics", {
                    schematicLimit: Ab
                  })]
                }), (0, tb.jsx)("div", {
                  className: Ub()("SchematicListContainer AnimFadeIn", {
                    SchematicListContainerDisabled: "Enter" !== Gb
                  }),
                  children: (0, tb.jsx)(nb.e, {
                    loading: null === vb,
                    schematics: null !== vb && void 0 !== vb ? vb : [],
                    onSchematicPicked: function(bb) {
                      const cb = Sb.mapOptions.schematicIdList;
                      if (cb.includes(bb.schematicId)) bc({
                        schematicIdList: cb.filter((cb => cb !== bb.schematicId))
                      });
                      else {
                        if (Ab && Sb.mapOptions.schematicIdList.length >= Ab) return;
                        bc({
                          schematicIdList: [...Sb.mapOptions.schematicIdList, bb.schematicId]
                        })
                      }
                    },
                    selectedSchematicIdList: Sb.mapOptions.schematicIdList,
                    disableAutoExport: !0
                  })
                })]
              })
            }), wb && (0, tb.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, tb.jsx)("div", {
                className: "SectionTitle",
                children: ib("customLobby:listedOptions")
              }), (0, tb.jsxs)("div", {
                className: "SectionBody",
                children: [(0, tb.jsx)(Vb.f, {
                  label: "general:description",
                  className: "CustomLobbyDescription",
                  disabled: "Enter" !== Gb,
                  children: (0, tb.jsx)(ab.c, {
                    onValueChange: (bb, cb) => {
                      jb("description", bb)
                    },
                    maxLength: 100,
                    defaultValue: Sb.listedOptions.description
                  })
                }), (0, tb.jsx)(Vb.f, {
                  label: "general:color",
                  circleInfoText: "customLobby:lobbyColorDescription",
                  disabled: "Enter" !== Gb,
                  children: (0, tb.jsx)("div", {
                    className: "OtherInput",
                    children: (0, tb.jsx)("input", {
                      type: "color",
                      value: Sb.listedOptions.color,
                      onChange: bb => {
                        jb("color", bb.target.value)
                      }
                    })
                  })
                }), (0, tb.jsx)(Vb.f, {
                  label: "general:emojis",
                  circleInfoText: "customLobby:lobbyEmojisDescription",
                  disabled: "Enter" !== Gb,
                  children: (0, tb.jsx)(ab.c, {
                    onValueChange: (bb, cb) => {
                      jb("emojis", bb)
                    },
                    maxLength: 6,
                    defaultValue: Sb.listedOptions.emojis
                  })
                })]
              })]
            }), wb && db && (0, tb.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, tb.jsx)("div", {
                className: "SectionTitle",
                children: ib("customLobby:advancedOptions")
              }), (0, tb.jsxs)("div", {
                className: "SectionBody",
                children: [(0, tb.jsx)(Vb.f, {
                  label: "classic:worldGenSeed",
                  disabled: "Enter" !== Gb,
                  children: (0, tb.jsx)(ab.c, {
                    onValueChange: (bb, cb) => {
                      pb("worldGenSeed", bb)
                    },
                    maxLength: Yb.I
                  })
                }), (0, tb.jsx)(Vb.f, {
                  label: "classic:disableProtectors",
                  disabled: "Enter" !== Gb,
                  children: (0, tb.jsx)(Vb.b, {
                    checked: Sb.worldOptions.disableProtectors,
                    setChecked: bb => {
                      pb("disableProtectors", bb)
                    }
                  })
                }), (0, tb.jsx)(Vb.f, {
                  label: "classic:disableTribeCreation",
                  disabled: "Enter" !== Gb,
                  children: (0, tb.jsx)(Vb.b, {
                    checked: Sb.worldOptions.disableTribeCreation,
                    setChecked: bb => {
                      pb("disableTribeCreation", bb)
                    }
                  })
                }), (0, tb.jsx)(Vb.f, {
                  label: "classic:voidDeathHeight",
                  circleInfoText: "classic:voidDeathHeightDescription",
                  disabled: "Enter" !== Gb,
                  children: (0, tb.jsx)("input", {
                    type: "number",
                    max: ub.z,
                    value: null !== (Tb = Sb.worldOptions.voidDeathHeight) && void 0 !== Tb ? Tb : "",
                    onChange: bb => {
                      const cb = parseInt(bb.target.value);
                      pb("voidDeathHeight", isNaN(cb) ? null : cb)
                    }
                  })
                }), (0, tb.jsx)(Vb.f, {
                  label: "classic:disableLobbySpawn",
                  disabled: "Enter" !== Gb,
                  children: (0, tb.jsx)(Vb.b, {
                    checked: Sb.worldOptions.disableLobbySpawn,
                    setChecked: bb => {
                      pb("disableLobbySpawn", bb)
                    }
                  })
                }), (0, tb.jsx)(Vb.f, {
                  label: "classic:worldBorder",
                  circleInfoText: "classic:worldBorderDescription",
                  disabled: "Enter" !== Gb,
                  children: (0, tb.jsx)("input", {
                    type: "number",
                    min: ub.G,
                    max: ub.D,
                    value: null !== (yb = Sb.worldOptions.worldBorder) && void 0 !== yb ? yb : "",
                    onChange: bb => {
                      const cb = parseInt(bb.target.value);
                      pb("worldBorder", isNaN(cb) ? null : cb)
                    }
                  })
                }), (0, tb.jsx)(Vb.f, {
                  label: "classic:disableMobs",
                  disabled: "Enter" !== Gb,
                  children: (0, tb.jsx)(Vb.b, {
                    checked: Sb.worldOptions.disableMobs,
                    setChecked: bb => {
                      pb("disableMobs", bb)
                    }
                  })
                })]
              })]
            }), db && (0, tb.jsx)(hb.b, {
              callbacks: cc,
              disabled: "Enter" !== Gb,
              advancedMode: wb
            })]
          })
        }), (0, tb.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, tb.jsx)(Xb.n, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: "Enter" !== Gb,
            onClick: () => {
              !async function() {
                if ("Enter" === Gb) {
                  Kb("Loading"), zb("");
                  try {
                    await Mb.d.createCustomLobby(Sb), Kb("Success")
                  } catch (bb) {
                    zb(bb.message), console.error(bb.message), Kb("Enter")
                  }
                }
              }()
            },
            children: ib("general:create")
          }), db && (0, tb.jsx)("div", {
            className: "CreateCustomLobbyAdvancedToggle",
            "data-pad-ignore": sc || void 0,
            children: (0, tb.jsx)(Vb.f, {
              label: "customLobby:showAdvancedOptions",
              disabled: sc,
              onLabelClick: () => {
                rb(!wb)
              },
              children: (0, tb.jsx)(Vb.b, {
                checked: wb,
                setChecked: rb
              })
            })
          }), Zb && (0, tb.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: Zb
          })]
        })]
      })
    }
  },
  36030: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Ib
    });
    var kb = sb(1033),
      Wb = sb.n(kb),
      ab = sb(64),
      Tb = sb(4319),
      Ub = sb(1087);

    function Ib(bb) {
      let {
        locked: cb,
        children: sb
      } = bb;
      const kb = (0, ab.useRef)(null),
        Ib = (0, Tb.d)(kb, "y");
      return (0, Ub.jsx)("div", {
        ref: kb,
        className: Wb()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: Ib.before,
          CreateCustomLobbyBodyMoreBelow: Ib.after
        }),
        "data-pad-ignore": cb || void 0,
        children: sb
      })
    }
  },
  36016: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => fb,
      g: () => Xb
    });
    var kb = sb(64),
      Wb = sb(1332),
      ab = sb(1197),
      Tb = sb(1327),
      Ub = sb(3263),
      Ib = sb(4638),
      Hb = sb(1087);

    function fb(bb) {
      let {
        loading: cb,
        schematics: sb,
        onSchematicPicked: kb,
        selectedSchematicIdList: Wb = [],
        disableAutoExport: Ib
      } = bb;
      const {
        t: fb
      } = (0, ab.E)();
      return (0, Hb.jsxs)("div", {
        className: "SchematicList",
        children: [cb && (0, Hb.jsx)(Tb.d, {}), !cb && 0 === sb.length && (0, Hb.jsx)("div", {
          className: "NoSchematicsText",
          children: fb("worldBuilder:noSavedSchematic")
        }), !cb && sb.map((bb => (0, Hb.jsx)(Ub.h, {
          source: {
            type: "schematic",
            schematic: bb
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            kb(bb)
          },
          isSelected: Wb.includes(bb.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: bb.isAutoExported && Ib,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, bb.schematicId)))]
      })
    }

    function Mb(bb) {
      let {
        ownedSchematics: cb,
        currentWorldSchematicId: sb,
        onClose: Wb
      } = bb;
      const {
        t: Tb
      } = (0, ab.E)(), [Ub, Mb] = (0, kb.useState)(null);
      return (0, Hb.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === Ub && (0, Hb.jsxs)(Hb.Fragment, {
          children: [(0, Hb.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: Tb("worldBuilder:schematicList")
          }), (0, Hb.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: Tb("worldBuilder:clickSchematicForOptions")
          }), (0, Hb.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, Hb.jsx)(fb, {
              loading: !1,
              schematics: cb,
              onSchematicPicked: bb => {
                Mb(bb)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== Ub && (0, Hb.jsx)(Ib.g, {
          schematic: Ub,
          inSourceWorld: Ub.schematicId === sb,
          onSchematicUpdate: bb => {
            Mb(bb)
          },
          onClose: () => {
            Mb(null), Wb()
          }
        })]
      })
    }

    function Xb(bb) {
      let {
        ownedSchematics: cb,
        currentWorldSchematicId: sb,
        onClose: kb
      } = bb;
      Wb.NotificationProvider.showCustomPopup({
        body: bb => (0, Hb.jsx)(Mb, {
          ownedSchematics: cb,
          currentWorldSchematicId: sb,
          onClose: bb
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: kb,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  36025: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Hb,
      c: () => fb
    });
    sb(64);
    var kb = sb(1033),
      Wb = sb.n(kb),
      ab = sb(4371),
      Tb = sb(334),
      Ub = sb(1197),
      Ib = sb(1087);

    function Hb(bb) {
      let {
        value: cb,
        onChange: sb,
        showAll: kb,
        disabled: Hb = !1
      } = bb;
      const {
        t: fb
      } = (0, Ub.E)();
      return (0, Ib.jsxs)("div", {
        className: Wb()("BloxdForm GamemodeForm", {
          BasicOptions: !kb
        }),
        children: [(0, Ib.jsx)("div", {
          className: "SectionTitle",
          children: fb("classic:defaultGamemode")
        }), (0, Ib.jsx)("div", {
          className: "SectionBody",
          children: ab.D.map((bb => kb || (0, ab.y)(bb) ? (0, Ib.jsx)("button", {
            type: "button",
            className: Wb()("WorldGamemode", {
              Selected: cb === bb
            }),
            disabled: Hb,
            onClick: () => {
              sb(bb)
            },
            style: {
              "--background-image": `url(${Tb.w[bb]})`
            },
            children: Tb.s[bb]
          }, bb) : null))
        })]
      })
    }

    function fb(bb) {
      let {
        mapTypes: cb,
        value: sb,
        onChange: kb,
        showAll: Hb,
        disabled: fb = !1,
        children: Mb
      } = bb;
      const {
        t: Xb
      } = (0, Ub.E)();
      return (0, Ib.jsxs)("div", {
        className: Wb()("BloxdForm MapTypeForm", {
          BasicOptions: !Hb
        }),
        children: [(0, Ib.jsx)("div", {
          className: "SectionTitle",
          children: Xb("customLobby:mapType")
        }), (0, Ib.jsx)("div", {
          className: "SectionBody",
          children: cb.map((bb => Hb || (0, ab.A)(bb) ? (0, Ib.jsx)("button", {
            type: "button",
            className: Wb()("MapType", {
              Selected: sb === bb
            }),
            disabled: fb,
            onClick: () => {
              kb(bb)
            },
            style: {
              "--background-image": `url(${Tb.o[bb]})`
            },
            children: Tb.l[bb]
          }, bb) : null))
        }), Mb]
      })
    }
  },
  36007: () => {}
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);