export const id = 125;
export const ids = [125];
export const modules = {
  37568: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      CreateCustomLobby: () => cb
    });
    Mb(37570);
    var eb = Mb(5472),
      Hb = Mb(64),
      pb = Mb(1876),
      Vb = Mb(1159),
      gb = Mb.n(Vb),
      lb = Mb(4490),
      Lb = Mb(1186),
      Ib = Mb(1271),
      Ob = Mb(5436),
      Ub = Mb(1616),
      tb = Mb(37576),
      Cb = Mb(1259),
      Eb = Mb(1455),
      Fb = Mb(1686),
      Bb = Mb(26),
      sb = Mb(1624),
      mb = Mb(661),
      hb = Mb(5845),
      zb = Mb(867),
      Xb = Mb(1313),
      xb = Mb(1301),
      jb = Mb(5853),
      Kb = Mb(1475),
      rb = Mb(37578),
      Rb = Mb(37580),
      Db = Mb(1364);

    function cb(bb) {
      var wb, Mb, Vb, cb;
      let {
        gameNameWithVariation: Yb,
        close: Zb,
        initialDefaultGamemode: fb
      } = bb;
      const {
        t: Ab
      } = (0, Cb.C)(), Wb = (0, Fb.useNavigatePreserveSearch)(), [Jb, Sb] = (0, Hb.useState)("Enter"), [Nb, vb] = (0, Hb.useState)(""), Qb = Hb.useRef(null), Gb = null === (wb = zb.b[Yb]) || void 0 === wb ? void 0 : wb.showWorldsInsteadOfCustomLobbies, qb = Gb ? 1 : null === (Mb = zb.b[Yb]) || void 0 === Mb ? void 0 : Mb.customLobbyCustomSchematicLimit, [ab, ib] = (0, Hb.useState)(!Gb);
      fb || (fb = "classic_creative" === Yb || "classic_creativeFlat" === Yb ? "creative" : "classic" === Yb ? "peaceful" : "survival");
      const ub = {
        baseOptions: {
          gameNameWithVariation: Gb ? "classic" : Yb,
          name: "",
          visibility: "unlisted"
        },
        listedOptions: {
          description: "",
          color: "",
          emojis: ""
        },
        mapOptions: {
          mapType: "classic_creativeFlat" === Yb ? "flat" : "default",
          schematicIdList: []
        },
        worldOptions: null
      };
      Gb && (ub.worldOptions = {
        defaultGamemode: fb,
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
      const [db, Pb] = (0, Hb.useState)(ub), [nb, yb] = (0, Hb.useState)(null);

      function ob(bb, wb) {
        Pb({
          ...db,
          baseOptions: {
            ...db.baseOptions,
            [bb]: wb
          }
        })
      }

      function Tb(bb, wb) {
        Pb({
          ...db,
          listedOptions: {
            ...db.listedOptions,
            [bb]: wb
          }
        })
      }

      function kb(bb, wb) {
        Pb({
          ...db,
          worldOptions: {
            ...db.worldOptions,
            [bb]: wb
          }
        })
      }

      function bw(bb) {
        Pb({
          ...db,
          mapOptions: {
            ...db.mapOptions,
            ...bb
          }
        })
      }(0, Hb.useEffect)((() => {
        Ob.c.getNewStarterName().then((bb => {
          Pb((wb => "" !== wb.baseOptions.name ? wb : {
            ...wb,
            baseOptions: {
              ...wb.baseOptions,
              name: bb
            }
          }))
        })).catch((bb => {
          console.error("Error getting new starter name:", bb)
        }))
      }), []), (0, Hb.useEffect)((() => {
        "customSchematic" === db.mapOptions.mapType && null === nb && (0, Lb.postJsonWithMetricsCookiesAndJsonResponse)(`${Ib.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
          retries: 0,
          minTimeout: 3e3
        }).then((bb => {
          yb(bb)
        }))
      }), [db.mapOptions.mapType, nb]);
      const ww = {
          tpRequests: {
            isEnabled: () => !db.worldOptions.disableTpRequests,
            Bx: bb => {
              kb("disableTpRequests", !bb)
            }
          },
          spawnProtection: {
            isEnabled: () => db.worldOptions.spawnProtection,
            Bx: bb => {
              kb("spawnProtection", bb)
            }
          },
          spawnReset: {
            isEnabled: () => db.worldOptions.enableSpawnReset,
            Bx: bb => {
              kb("enableSpawnReset", bb)
            }
          },
          smpMarketplace: {
            isEnabled: () => db.worldOptions.enableSmpMarketplace,
            Bx: bb => {
              kb("enableSmpMarketplace", bb)
            }
          },
          survivalGuns: {
            isEnabled: () => db.worldOptions.enableSurvivalGuns,
            Bx: bb => {
              kb("enableSurvivalGuns", bb)
            }
          },
          fallDamage: {
            isEnabled: () => !db.worldOptions.disableFallDamage,
            Bx: bb => {
              kb("disableFallDamage", !bb)
            }
          },
          dayNight: {
            isEnabled: () => db.worldOptions.enableDayNight,
            Bx: bb => {
              kb("enableDayNight", bb)
            }
          }
        },
        Mw = "Enter" !== Jb,
        ew = (0, Db.jsx)(hb.e, {
          className: "NameInput",
          label: "general:name",
          disabled: "Enter" !== Jb,
          children: (0, Db.jsx)(pb.d, {
            domRef: Qb,
            onValueChange: (bb, wb) => {
              const Mb = (0, xb.mb)(bb);
              ob("name", Mb), Qb.current.value = Mb
            },
            maxLength: xb.I,
            defaultValue: db.baseOptions.name
          })
        });
      return (0, Db.jsxs)("div", {
        className: gb()("CreateCustomLobby", {
          CreateCustomLobbySuccess: "Success" === Jb,
          AdvancedMode: ab
        }),
        children: ["Success" === Jb && (0, Db.jsxs)("div", {
          className: "CreateCustomLobbySuccessOverlay",
          children: [(0, Db.jsxs)("div", {
            className: "CreateCustomLobbySuccessTitle FullyFancyText AnimFadeInScaleUp",
            children: [(0, Db.jsx)(Kb.b, {
              name: "check"
            }), (0, Db.jsx)(sb.e, {})]
          }), (0, Db.jsx)("div", {
            className: "CreateCustomLobbySuccessButtons AnimFadeInScaleUp",
            children: (0, Db.jsx)(Ub.p, {
              padDefaultFocus: !0,
              onClick: () => {
                (0, Bb.k)("worldCreation"), Wb((0, Eb.b)(Yb, db.baseOptions.name))
              },
              children: Ab("homePage:joinLobbyName", {
                lobbyName: db.baseOptions.name
              })
            })
          })]
        }), (0, Db.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, Db.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: Ab(Gb ? "homePage:createWorld" : "homePage:createCustomLobby")
          })
        }), (0, Db.jsx)(Rb.c, {
          locked: Mw,
          children: (0, Db.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [!ab && ew, ab && (0, Db.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, Db.jsx)("div", {
                className: "SectionTitle",
                children: Ab("customLobby:generalOptions")
              }), (0, Db.jsxs)("div", {
                className: "SectionBody",
                children: [ew, (0, Db.jsx)(hb.e, {
                  label: "customLobby:visibility",
                  circleInfoText: Ab("customLobby:visibilityDescription"),
                  disabled: "Enter" !== Jb,
                  children: (0, Db.jsx)(lb.c, {
                    options: eb.r.map((bb => ({
                      value: bb,
                      label: eb.d[bb]
                    }))),
                    value: db.baseOptions.visibility,
                    onChange: bb => {
                      ob("visibility", bb.value)
                    }
                  })
                })]
              })]
            }), Gb && (0, Db.jsx)(rb.b, {
              value: db.worldOptions.defaultGamemode,
              onChange: bb => {
                kb("defaultGamemode", bb)
              },
              showAll: ab,
              disabled: Mw
            }), (Gb || !(0, mb.K)(qb) && qb > 0) && (0, Db.jsx)(rb.c, {
              mapTypes: Gb ? eb.z : eb.p,
              value: db.mapOptions.mapType,
              onChange: bb => {
                const wb = {
                  mapType: bb
                };
                "customSchematic" !== bb && (wb.schematicIdList = []), bw(wb)
              },
              showAll: ab,
              disabled: Mw,
              children: "customSchematic" === db.mapOptions.mapType && (0, Db.jsxs)(Db.Fragment, {
                children: [(0, Db.jsxs)("div", {
                  className: "SchematicListTitle AnimFadeIn",
                  children: [Gb && Ab("customLobby:selectWorldSchematic"), !Gb && Ab("customLobby:selectCustomLobbySchematics", {
                    schematicLimit: qb
                  })]
                }), (0, Db.jsx)("div", {
                  className: gb()("SchematicListContainer AnimFadeIn", {
                    SchematicListContainerDisabled: "Enter" !== Jb
                  }),
                  children: (0, Db.jsx)(tb.d, {
                    loading: null === nb,
                    schematics: null !== nb && void 0 !== nb ? nb : [],
                    onSchematicPicked: function(bb) {
                      const wb = db.mapOptions.schematicIdList;
                      if (wb.includes(bb.schematicId)) bw({
                        schematicIdList: wb.filter((wb => wb !== bb.schematicId))
                      });
                      else {
                        if (qb && db.mapOptions.schematicIdList.length >= qb) return;
                        bw({
                          schematicIdList: [...db.mapOptions.schematicIdList, bb.schematicId]
                        })
                      }
                    },
                    selectedSchematicIdList: db.mapOptions.schematicIdList,
                    disableAutoExport: !0
                  })
                })]
              })
            }), ab && (0, Db.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, Db.jsx)("div", {
                className: "SectionTitle",
                children: Ab("customLobby:listedOptions")
              }), (0, Db.jsxs)("div", {
                className: "SectionBody",
                children: [(0, Db.jsx)(hb.e, {
                  label: "general:description",
                  className: "CustomLobbyDescription",
                  disabled: "Enter" !== Jb,
                  children: (0, Db.jsx)(pb.d, {
                    onValueChange: (bb, wb) => {
                      Tb("description", bb)
                    },
                    maxLength: 100,
                    defaultValue: db.listedOptions.description
                  })
                }), (0, Db.jsx)(hb.e, {
                  label: "general:color",
                  circleInfoText: "customLobby:lobbyColorDescription",
                  disabled: "Enter" !== Jb,
                  children: (0, Db.jsx)("div", {
                    className: "OtherInput",
                    children: (0, Db.jsx)("input", {
                      type: "color",
                      value: db.listedOptions.color,
                      onChange: bb => {
                        Tb("color", bb.target.value)
                      }
                    })
                  })
                }), (0, Db.jsx)(hb.e, {
                  label: "general:emojis",
                  circleInfoText: "customLobby:lobbyEmojisDescription",
                  disabled: "Enter" !== Jb,
                  children: (0, Db.jsx)(pb.d, {
                    onValueChange: (bb, wb) => {
                      Tb("emojis", bb)
                    },
                    maxLength: 6,
                    defaultValue: db.listedOptions.emojis
                  })
                })]
              })]
            }), ab && Gb && (0, Db.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, Db.jsx)("div", {
                className: "SectionTitle",
                children: Ab("customLobby:advancedOptions")
              }), (0, Db.jsxs)("div", {
                className: "SectionBody",
                children: [(0, Db.jsx)(hb.e, {
                  label: "classic:worldGenSeed",
                  disabled: "Enter" !== Jb,
                  children: (0, Db.jsx)(pb.d, {
                    onValueChange: (bb, wb) => {
                      kb("worldGenSeed", bb)
                    },
                    maxLength: xb.I
                  })
                }), (0, Db.jsx)(hb.e, {
                  label: "classic:disableProtectors",
                  disabled: "Enter" !== Jb,
                  children: (0, Db.jsx)(hb.d, {
                    checked: db.worldOptions.disableProtectors,
                    setChecked: bb => {
                      kb("disableProtectors", bb)
                    }
                  })
                }), (0, Db.jsx)(hb.e, {
                  label: "classic:disableTribeCreation",
                  disabled: "Enter" !== Jb,
                  children: (0, Db.jsx)(hb.d, {
                    checked: db.worldOptions.disableTribeCreation,
                    setChecked: bb => {
                      kb("disableTribeCreation", bb)
                    }
                  })
                }), (0, Db.jsx)(hb.e, {
                  label: "classic:voidDeathHeight",
                  circleInfoText: "classic:voidDeathHeightDescription",
                  disabled: "Enter" !== Jb,
                  children: (0, Db.jsx)("input", {
                    type: "number",
                    max: Xb.D,
                    value: null !== (Vb = db.worldOptions.voidDeathHeight) && void 0 !== Vb ? Vb : "",
                    onChange: bb => {
                      const wb = parseInt(bb.target.value);
                      kb("voidDeathHeight", isNaN(wb) ? null : wb)
                    }
                  })
                }), (0, Db.jsx)(hb.e, {
                  label: "classic:disableLobbySpawn",
                  disabled: "Enter" !== Jb,
                  children: (0, Db.jsx)(hb.d, {
                    checked: db.worldOptions.disableLobbySpawn,
                    setChecked: bb => {
                      kb("disableLobbySpawn", bb)
                    }
                  })
                }), (0, Db.jsx)(hb.e, {
                  label: "classic:worldBorder",
                  circleInfoText: "classic:worldBorderDescription",
                  disabled: "Enter" !== Jb,
                  children: (0, Db.jsx)("input", {
                    type: "number",
                    min: Xb.J,
                    max: Xb.E,
                    value: null !== (cb = db.worldOptions.worldBorder) && void 0 !== cb ? cb : "",
                    onChange: bb => {
                      const wb = parseInt(bb.target.value);
                      kb("worldBorder", isNaN(wb) ? null : wb)
                    }
                  })
                }), (0, Db.jsx)(hb.e, {
                  label: "classic:disableMobs",
                  disabled: "Enter" !== Jb,
                  children: (0, Db.jsx)(hb.d, {
                    checked: db.worldOptions.disableMobs,
                    setChecked: bb => {
                      kb("disableMobs", bb)
                    }
                  })
                })]
              })]
            }), Gb && (0, Db.jsx)(jb.d, {
              callbacks: ww,
              disabled: "Enter" !== Jb,
              advancedMode: ab
            })]
          })
        }), (0, Db.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, Db.jsx)(Ub.p, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: "Enter" !== Jb,
            onClick: () => {
              !async function() {
                if ("Enter" === Jb) {
                  Sb("Loading"), vb("");
                  try {
                    await Ob.c.createCustomLobby(db), Sb("Success")
                  } catch (bb) {
                    vb(bb.message), console.error(bb.message), Sb("Enter")
                  }
                }
              }()
            },
            children: Ab("general:create")
          }), Gb && (0, Db.jsx)("div", {
            className: "CreateCustomLobbyAdvancedToggle",
            "data-pad-ignore": Mw || void 0,
            children: (0, Db.jsx)(hb.e, {
              label: "customLobby:showAdvancedOptions",
              disabled: Mw,
              onLabelClick: () => {
                ib(!ab)
              },
              children: (0, Db.jsx)(hb.d, {
                checked: ab,
                setChecked: ib
              })
            })
          }), Nb && (0, Db.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: Nb
          })]
        })]
      })
    }
  },
  37580: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => lb
    });
    var eb = Mb(1159),
      Hb = Mb.n(eb),
      pb = Mb(64),
      Vb = Mb(5430),
      gb = Mb(1364);

    function lb(bb) {
      let {
        locked: wb,
        children: Mb
      } = bb;
      const eb = (0, pb.useRef)(null),
        lb = (0, Vb.e)(eb, "y");
      return (0, gb.jsx)("div", {
        ref: eb,
        className: Hb()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: lb.before,
          CreateCustomLobbyBodyMoreBelow: lb.after
        }),
        "data-pad-ignore": wb || void 0,
        children: Mb
      })
    }
  },
  37576: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Ib,
      e: () => Ub
    });
    var eb = Mb(64),
      Hb = Mb(1504),
      pb = Mb(1259),
      Vb = Mb(1468),
      gb = Mb(4881),
      lb = Mb(5836),
      Lb = Mb(1364);

    function Ib(bb) {
      let {
        loading: wb,
        schematics: Mb,
        onSchematicPicked: eb,
        selectedSchematicIdList: Hb = [],
        disableAutoExport: lb
      } = bb;
      const {
        t: Ib
      } = (0, pb.C)();
      return (0, Lb.jsxs)("div", {
        className: "SchematicList",
        children: [wb && (0, Lb.jsx)(Vb.c, {}), !wb && 0 === Mb.length && (0, Lb.jsx)("div", {
          className: "NoSchematicsText",
          children: Ib("worldBuilder:noSavedSchematic")
        }), !wb && Mb.map((bb => (0, Lb.jsx)(gb.f, {
          source: {
            type: "schematic",
            schematic: bb
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            eb(bb)
          },
          isSelected: Hb.includes(bb.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: bb.isAutoExported && lb,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, bb.schematicId)))]
      })
    }

    function Ob(bb) {
      let {
        ownedSchematics: wb,
        currentWorldSchematicId: Mb,
        onClose: Hb
      } = bb;
      const {
        t: Vb
      } = (0, pb.C)(), [gb, Ob] = (0, eb.useState)(null);
      return (0, Lb.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === gb && (0, Lb.jsxs)(Lb.Fragment, {
          children: [(0, Lb.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: Vb("worldBuilder:schematicList")
          }), (0, Lb.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: Vb("worldBuilder:clickSchematicForOptions")
          }), (0, Lb.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, Lb.jsx)(Ib, {
              loading: !1,
              schematics: wb,
              onSchematicPicked: bb => {
                Ob(bb)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== gb && (0, Lb.jsx)(lb.g, {
          schematic: gb,
          inSourceWorld: gb.schematicId === Mb,
          onSchematicUpdate: bb => {
            Ob(bb)
          },
          onClose: () => {
            Ob(null), Hb()
          }
        })]
      })
    }

    function Ub(bb) {
      let {
        ownedSchematics: wb,
        currentWorldSchematicId: Mb,
        onClose: eb
      } = bb;
      Hb.NotificationProvider.showCustomPopup({
        body: bb => (0, Lb.jsx)(Ob, {
          ownedSchematics: wb,
          currentWorldSchematicId: Mb,
          onClose: bb
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: eb,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  37578: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Lb,
      c: () => Ib
    });
    Mb(64);
    var eb = Mb(1159),
      Hb = Mb.n(eb),
      pb = Mb(5472),
      Vb = Mb(366),
      gb = Mb(1259),
      lb = Mb(1364);

    function Lb(bb) {
      let {
        value: wb,
        onChange: Mb,
        showAll: eb,
        disabled: Lb = !1
      } = bb;
      const {
        t: Ib
      } = (0, gb.C)();
      return (0, lb.jsxs)("div", {
        className: Hb()("BloxdForm GamemodeForm", {
          BasicOptions: !eb
        }),
        children: [(0, lb.jsx)("div", {
          className: "SectionTitle",
          children: Ib("classic:defaultGamemode")
        }), (0, lb.jsx)("div", {
          className: "SectionBody",
          children: pb.y.map((bb => eb || (0, pb.u)(bb) ? (0, lb.jsx)("button", {
            type: "button",
            className: Hb()("WorldGamemode", {
              Selected: wb === bb
            }),
            disabled: Lb,
            onClick: () => {
              Mb(bb)
            },
            style: {
              "--background-image": `url(${Vb.r[bb]})`
            },
            children: Vb.o[bb]
          }, bb) : null))
        })]
      })
    }

    function Ib(bb) {
      let {
        mapTypes: wb,
        value: Mb,
        onChange: eb,
        showAll: Lb,
        disabled: Ib = !1,
        children: Ob
      } = bb;
      const {
        t: Ub
      } = (0, gb.C)();
      return (0, lb.jsxs)("div", {
        className: Hb()("BloxdForm MapTypeForm", {
          BasicOptions: !Lb
        }),
        children: [(0, lb.jsx)("div", {
          className: "SectionTitle",
          children: Ub("customLobby:mapType")
        }), (0, lb.jsx)("div", {
          className: "SectionBody",
          children: wb.map((bb => Lb || (0, pb.v)(bb) ? (0, lb.jsx)("button", {
            type: "button",
            className: Hb()("MapType", {
              Selected: Mb === bb
            }),
            disabled: Ib,
            onClick: () => {
              eb(bb)
            },
            style: {
              "--background-image": `url(${Vb.k[bb]})`
            },
            children: Vb.j[bb]
          }, bb) : null))
        }), Ob]
      })
    }
  },
  5967: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Hb,
      g: () => pb
    });
    var eb = Mb(5914);
    const Hb = "Air",
      pb = Object.freeze(new eb.g(Hb, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  37570: () => {}
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);