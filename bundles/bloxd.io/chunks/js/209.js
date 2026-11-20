export const id = 209;
export const ids = [209];
export const modules = {
  35790: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      CreateCustomLobby: () => Ib
    });
    Ub(35798);
    var Ab = Ub(4317),
      Mb = Ub(52),
      Tb = Ub(1589),
      Eb = Ub(984),
      Yb = Ub.n(Eb),
      Bb = Ub(2851),
      eb = Ub(1065),
      vb = Ub(1142),
      Lb = Ub(4269),
      Pb = Ub(1352),
      Xb = Ub(35805),
      jb = Ub(1134),
      Rb = Ub(1249),
      kb = Ub(1433),
      yb = Ub(19),
      Zb = Ub(1358),
      Db = Ub(591),
      zb = Ub(4620),
      xb = Ub(714),
      ib = Ub(1189),
      fb = Ub(1162),
      mb = Ub(4631),
      pb = Ub(990),
      Nb = Ub(35812),
      Wb = Ub(35814),
      Hb = Ub(1023);

    function Ib(bb) {
      var ab, Ub, Eb, Ib;
      let {
        gameNameWithVariation: db,
        close: Fb,
        initialDefaultGamemode: hb
      } = bb;
      const {
        t: Gb
      } = (0, jb.A)(), Qb = (0, kb.useNavigatePreserveSearch)(), [qb, ub] = (0, Mb.useState)("Enter"), [rb, Kb] = (0, Mb.useState)(""), ob = Mb.useRef(null), lb = null === (ab = xb.d[db]) || void 0 === ab ? void 0 : ab.showWorldsInsteadOfCustomLobbies, tb = lb ? 1 : null === (Ub = xb.d[db]) || void 0 === Ub ? void 0 : Ub.customLobbyCustomSchematicLimit, [wb, sb] = (0, Mb.useState)(!lb);
      hb || (hb = "classic_creative" === db || "classic_creativeFlat" === db ? "creative" : "classic" === db ? "peaceful" : "survival");
      const gb = {
        baseOptions: {
          gameNameWithVariation: lb ? "classic" : db,
          name: "",
          visibility: "unlisted"
        },
        listedOptions: {
          description: "",
          color: "",
          emojis: ""
        },
        mapOptions: {
          mapType: "classic_creativeFlat" === db ? "flat" : "default",
          schematicIdList: []
        },
        worldOptions: null
      };
      lb && (gb.worldOptions = {
        defaultGamemode: hb,
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
      const [Cb, Vb] = (0, Mb.useState)(gb), [Ob, cb] = (0, Mb.useState)(null);

      function Jb(bb, ab) {
        Vb({
          ...Cb,
          baseOptions: {
            ...Cb.baseOptions,
            [bb]: ab
          }
        })
      }

      function nb(bb, ab) {
        Vb({
          ...Cb,
          listedOptions: {
            ...Cb.listedOptions,
            [bb]: ab
          }
        })
      }

      function Sb(bb, ab) {
        Vb({
          ...Cb,
          worldOptions: {
            ...Cb.worldOptions,
            [bb]: ab
          }
        })
      }

      function ba(bb) {
        Vb({
          ...Cb,
          mapOptions: {
            ...Cb.mapOptions,
            ...bb
          }
        })
      }(0, Mb.useEffect)((() => {
        Lb.c.getNewStarterName().then((bb => {
          Vb((ab => "" !== ab.baseOptions.name ? ab : {
            ...ab,
            baseOptions: {
              ...ab.baseOptions,
              name: bb
            }
          }))
        })).catch((bb => {
          console.error("Error getting new starter name:", bb)
        }))
      }), []), (0, Mb.useEffect)((() => {
        "customSchematic" === Cb.mapOptions.mapType && null === Ob && (0, eb.postJsonWithMetricsCookiesAndJsonResponse)(`${vb.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
          retries: 0,
          minTimeout: 3e3
        }).then((bb => {
          cb(bb)
        }))
      }), [Cb.mapOptions.mapType, Ob]);
      const aa = {
          tpRequests: {
            isEnabled: () => !Cb.worldOptions.disableTpRequests,
            Yz: bb => {
              Sb("disableTpRequests", !bb)
            }
          },
          spawnProtection: {
            isEnabled: () => Cb.worldOptions.spawnProtection,
            Yz: bb => {
              Sb("spawnProtection", bb)
            }
          },
          spawnReset: {
            isEnabled: () => Cb.worldOptions.enableSpawnReset,
            Yz: bb => {
              Sb("enableSpawnReset", bb)
            }
          },
          smpMarketplace: {
            isEnabled: () => Cb.worldOptions.enableSmpMarketplace,
            Yz: bb => {
              Sb("enableSmpMarketplace", bb)
            }
          },
          survivalGuns: {
            isEnabled: () => Cb.worldOptions.enableSurvivalGuns,
            Yz: bb => {
              Sb("enableSurvivalGuns", bb)
            }
          },
          fallDamage: {
            isEnabled: () => !Cb.worldOptions.disableFallDamage,
            Yz: bb => {
              Sb("disableFallDamage", !bb)
            }
          },
          dayNight: {
            isEnabled: () => Cb.worldOptions.enableDayNight,
            Yz: bb => {
              Sb("enableDayNight", bb)
            }
          }
        },
        Ua = "Enter" !== qb,
        Aa = (0, Hb.jsx)(zb.g, {
          className: "NameInput",
          label: "general:name",
          disabled: "Enter" !== qb,
          children: (0, Hb.jsx)(Tb.c, {
            domRef: ob,
            onValueChange: (bb, ab) => {
              const Ub = (0, fb.xb)(bb);
              Jb("name", Ub), ob.current.value = Ub
            },
            maxLength: fb.S,
            defaultValue: Cb.baseOptions.name
          })
        });
      return (0, Hb.jsxs)("div", {
        className: Yb()("CreateCustomLobby", {
          CreateCustomLobbySuccess: "Success" === qb,
          AdvancedMode: wb
        }),
        children: ["Success" === qb && (0, Hb.jsxs)("div", {
          className: "CreateCustomLobbySuccessOverlay",
          children: [(0, Hb.jsxs)("div", {
            className: "CreateCustomLobbySuccessTitle FullyFancyText AnimFadeInScaleUp",
            children: [(0, Hb.jsx)(pb.e, {
              name: "check"
            }), (0, Hb.jsx)(Zb.d, {})]
          }), (0, Hb.jsx)("div", {
            className: "CreateCustomLobbySuccessButtons AnimFadeInScaleUp",
            children: (0, Hb.jsx)(Pb.m, {
              padDefaultFocus: !0,
              onClick: () => {
                (0, yb.k)("worldCreation"), Qb((0, Rb.b)(db, Cb.baseOptions.name))
              },
              children: Gb("homePage:joinLobbyName", {
                lobbyName: Cb.baseOptions.name
              })
            })
          })]
        }), (0, Hb.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, Hb.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: Gb(lb ? "homePage:createWorld" : "homePage:createCustomLobby")
          })
        }), (0, Hb.jsx)(Wb.b, {
          locked: Ua,
          children: (0, Hb.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [!wb && Aa, wb && (0, Hb.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, Hb.jsx)("div", {
                className: "SectionTitle",
                children: Gb("customLobby:generalOptions")
              }), (0, Hb.jsxs)("div", {
                className: "SectionBody",
                children: [Aa, (0, Hb.jsx)(zb.g, {
                  label: "customLobby:visibility",
                  circleInfoText: Gb("customLobby:visibilityDescription"),
                  disabled: "Enter" !== qb,
                  children: (0, Hb.jsx)(Bb.c, {
                    options: Ab.s.map((bb => ({
                      value: bb,
                      label: Ab.h[bb]
                    }))),
                    value: Cb.baseOptions.visibility,
                    onChange: bb => {
                      Jb("visibility", bb.value)
                    }
                  })
                })]
              })]
            }), lb && (0, Hb.jsx)(Nb.e, {
              value: Cb.worldOptions.defaultGamemode,
              onChange: bb => {
                Sb("defaultGamemode", bb)
              },
              showAll: wb,
              disabled: Ua
            }), (lb || !(0, Db.I)(tb) && tb > 0) && (0, Hb.jsx)(Nb.g, {
              mapTypes: lb ? Ab.J : Ab.p,
              value: Cb.mapOptions.mapType,
              onChange: bb => {
                const ab = {
                  mapType: bb
                };
                "customSchematic" !== bb && (ab.schematicIdList = []), ba(ab)
              },
              showAll: wb,
              disabled: Ua,
              children: "customSchematic" === Cb.mapOptions.mapType && (0, Hb.jsxs)(Hb.Fragment, {
                children: [(0, Hb.jsxs)("div", {
                  className: "SchematicListTitle AnimFadeIn",
                  children: [lb && Gb("customLobby:selectWorldSchematic"), !lb && Gb("customLobby:selectCustomLobbySchematics", {
                    schematicLimit: tb
                  })]
                }), (0, Hb.jsx)("div", {
                  className: Yb()("SchematicListContainer AnimFadeIn", {
                    SchematicListContainerDisabled: "Enter" !== qb
                  }),
                  children: (0, Hb.jsx)(Xb.c, {
                    loading: null === Ob,
                    schematics: null !== Ob && void 0 !== Ob ? Ob : [],
                    onSchematicPicked: function(bb) {
                      const ab = Cb.mapOptions.schematicIdList;
                      if (ab.includes(bb.schematicId)) ba({
                        schematicIdList: ab.filter((ab => ab !== bb.schematicId))
                      });
                      else {
                        if (tb && Cb.mapOptions.schematicIdList.length >= tb) return;
                        ba({
                          schematicIdList: [...Cb.mapOptions.schematicIdList, bb.schematicId]
                        })
                      }
                    },
                    selectedSchematicIdList: Cb.mapOptions.schematicIdList,
                    disableAutoExport: !0
                  })
                })]
              })
            }), wb && (0, Hb.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, Hb.jsx)("div", {
                className: "SectionTitle",
                children: Gb("customLobby:listedOptions")
              }), (0, Hb.jsxs)("div", {
                className: "SectionBody",
                children: [(0, Hb.jsx)(zb.g, {
                  label: "general:description",
                  className: "CustomLobbyDescription",
                  disabled: "Enter" !== qb,
                  children: (0, Hb.jsx)(Tb.c, {
                    onValueChange: (bb, ab) => {
                      nb("description", bb)
                    },
                    maxLength: 100,
                    defaultValue: Cb.listedOptions.description
                  })
                }), (0, Hb.jsx)(zb.g, {
                  label: "general:color",
                  circleInfoText: "customLobby:lobbyColorDescription",
                  disabled: "Enter" !== qb,
                  children: (0, Hb.jsx)("div", {
                    className: "OtherInput",
                    children: (0, Hb.jsx)("input", {
                      type: "color",
                      value: Cb.listedOptions.color,
                      onChange: bb => {
                        nb("color", bb.target.value)
                      }
                    })
                  })
                }), (0, Hb.jsx)(zb.g, {
                  label: "general:emojis",
                  circleInfoText: "customLobby:lobbyEmojisDescription",
                  disabled: "Enter" !== qb,
                  children: (0, Hb.jsx)(Tb.c, {
                    onValueChange: (bb, ab) => {
                      nb("emojis", bb)
                    },
                    maxLength: 6,
                    defaultValue: Cb.listedOptions.emojis
                  })
                })]
              })]
            }), wb && lb && (0, Hb.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, Hb.jsx)("div", {
                className: "SectionTitle",
                children: Gb("customLobby:advancedOptions")
              }), (0, Hb.jsxs)("div", {
                className: "SectionBody",
                children: [(0, Hb.jsx)(zb.g, {
                  label: "classic:worldGenSeed",
                  disabled: "Enter" !== qb,
                  children: (0, Hb.jsx)(Tb.c, {
                    onValueChange: (bb, ab) => {
                      Sb("worldGenSeed", bb)
                    },
                    maxLength: fb.S
                  })
                }), (0, Hb.jsx)(zb.g, {
                  label: "classic:disableProtectors",
                  disabled: "Enter" !== qb,
                  children: (0, Hb.jsx)(zb.c, {
                    checked: Cb.worldOptions.disableProtectors,
                    setChecked: bb => {
                      Sb("disableProtectors", bb)
                    }
                  })
                }), (0, Hb.jsx)(zb.g, {
                  label: "classic:disableTribeCreation",
                  disabled: "Enter" !== qb,
                  children: (0, Hb.jsx)(zb.c, {
                    checked: Cb.worldOptions.disableTribeCreation,
                    setChecked: bb => {
                      Sb("disableTribeCreation", bb)
                    }
                  })
                }), (0, Hb.jsx)(zb.g, {
                  label: "classic:voidDeathHeight",
                  circleInfoText: "classic:voidDeathHeightDescription",
                  disabled: "Enter" !== qb,
                  children: (0, Hb.jsx)("input", {
                    type: "number",
                    max: ib.y,
                    value: null !== (Eb = Cb.worldOptions.voidDeathHeight) && void 0 !== Eb ? Eb : "",
                    onChange: bb => {
                      const ab = parseInt(bb.target.value);
                      Sb("voidDeathHeight", isNaN(ab) ? null : ab)
                    }
                  })
                }), (0, Hb.jsx)(zb.g, {
                  label: "classic:disableLobbySpawn",
                  disabled: "Enter" !== qb,
                  children: (0, Hb.jsx)(zb.c, {
                    checked: Cb.worldOptions.disableLobbySpawn,
                    setChecked: bb => {
                      Sb("disableLobbySpawn", bb)
                    }
                  })
                }), (0, Hb.jsx)(zb.g, {
                  label: "classic:worldBorder",
                  circleInfoText: "classic:worldBorderDescription",
                  disabled: "Enter" !== qb,
                  children: (0, Hb.jsx)("input", {
                    type: "number",
                    min: ib.D,
                    max: ib.A,
                    value: null !== (Ib = Cb.worldOptions.worldBorder) && void 0 !== Ib ? Ib : "",
                    onChange: bb => {
                      const ab = parseInt(bb.target.value);
                      Sb("worldBorder", isNaN(ab) ? null : ab)
                    }
                  })
                }), (0, Hb.jsx)(zb.g, {
                  label: "classic:disableMobs",
                  disabled: "Enter" !== qb,
                  children: (0, Hb.jsx)(zb.c, {
                    checked: Cb.worldOptions.disableMobs,
                    setChecked: bb => {
                      Sb("disableMobs", bb)
                    }
                  })
                })]
              })]
            }), lb && (0, Hb.jsx)(mb.d, {
              callbacks: aa,
              disabled: "Enter" !== qb,
              advancedMode: wb
            })]
          })
        }), (0, Hb.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, Hb.jsx)(Pb.m, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: "Enter" !== qb,
            onClick: () => {
              !async function() {
                if ("Enter" === qb) {
                  ub("Loading"), Kb("");
                  try {
                    await Lb.c.createCustomLobby(Cb), ub("Success")
                  } catch (bb) {
                    Kb(bb.message), console.error(bb.message), ub("Enter")
                  }
                }
              }()
            },
            children: Gb("general:create")
          }), lb && (0, Hb.jsx)("div", {
            className: "CreateCustomLobbyAdvancedToggle",
            "data-pad-ignore": Ua || void 0,
            children: (0, Hb.jsx)(zb.g, {
              label: "customLobby:showAdvancedOptions",
              disabled: Ua,
              onLabelClick: () => {
                sb(!wb)
              },
              children: (0, Hb.jsx)(zb.c, {
                checked: wb,
                setChecked: sb
              })
            })
          }), rb && (0, Hb.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: rb
          })]
        })]
      })
    }
  },
  35814: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Bb
    });
    var Ab = Ub(984),
      Mb = Ub.n(Ab),
      Tb = Ub(52),
      Eb = Ub(4260),
      Yb = Ub(1023);

    function Bb(bb) {
      let {
        locked: ab,
        children: Ub
      } = bb;
      const Ab = (0, Tb.useRef)(null),
        Bb = (0, Eb.d)(Ab, "y");
      return (0, Yb.jsx)("div", {
        ref: Ab,
        className: Mb()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: Bb.before,
          CreateCustomLobbyBodyMoreBelow: Bb.after
        }),
        "data-pad-ignore": ab || void 0,
        children: Ub
      })
    }
  },
  35805: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => vb,
      d: () => Pb
    });
    var Ab = Ub(52),
      Mb = Ub(1260),
      Tb = Ub(1134),
      Eb = Ub(1254),
      Yb = Ub(3161),
      Bb = Ub(4616),
      eb = Ub(1023);

    function vb(bb) {
      let {
        loading: ab,
        schematics: Ub,
        onSchematicPicked: Ab,
        selectedSchematicIdList: Mb = [],
        disableAutoExport: Bb
      } = bb;
      const {
        t: vb
      } = (0, Tb.A)();
      return (0, eb.jsxs)("div", {
        className: "SchematicList",
        children: [ab && (0, eb.jsx)(Eb.b, {}), !ab && 0 === Ub.length && (0, eb.jsx)("div", {
          className: "NoSchematicsText",
          children: vb("worldBuilder:noSavedSchematic")
        }), !ab && Ub.map((bb => (0, eb.jsx)(Yb.f, {
          source: {
            type: "schematic",
            schematic: bb
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            Ab(bb)
          },
          isSelected: Mb.includes(bb.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: bb.isAutoExported && Bb,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, bb.schematicId)))]
      })
    }

    function Lb(bb) {
      let {
        ownedSchematics: ab,
        currentWorldSchematicId: Ub,
        onClose: Mb
      } = bb;
      const {
        t: Eb
      } = (0, Tb.A)(), [Yb, Lb] = (0, Ab.useState)(null);
      return (0, eb.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === Yb && (0, eb.jsxs)(eb.Fragment, {
          children: [(0, eb.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: Eb("worldBuilder:schematicList")
          }), (0, eb.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: Eb("worldBuilder:clickSchematicForOptions")
          }), (0, eb.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, eb.jsx)(vb, {
              loading: !1,
              schematics: ab,
              onSchematicPicked: bb => {
                Lb(bb)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== Yb && (0, eb.jsx)(Bb.j, {
          schematic: Yb,
          inSourceWorld: Yb.schematicId === Ub,
          onSchematicUpdate: bb => {
            Lb(bb)
          },
          onClose: () => {
            Lb(null), Mb()
          }
        })]
      })
    }

    function Pb(bb) {
      let {
        ownedSchematics: ab,
        currentWorldSchematicId: Ub,
        onClose: Ab
      } = bb;
      Mb.NotificationProvider.showCustomPopup({
        body: bb => (0, eb.jsx)(Lb, {
          ownedSchematics: ab,
          currentWorldSchematicId: Ub,
          onClose: bb
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: Ab,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  35812: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => eb,
      g: () => vb
    });
    Ub(52);
    var Ab = Ub(984),
      Mb = Ub.n(Ab),
      Tb = Ub(4317),
      Eb = Ub(307),
      Yb = Ub(1134),
      Bb = Ub(1023);

    function eb(bb) {
      let {
        value: ab,
        onChange: Ub,
        showAll: Ab,
        disabled: eb = !1
      } = bb;
      const {
        t: vb
      } = (0, Yb.A)();
      return (0, Bb.jsxs)("div", {
        className: Mb()("BloxdForm GamemodeForm", {
          BasicOptions: !Ab
        }),
        children: [(0, Bb.jsx)("div", {
          className: "SectionTitle",
          children: vb("classic:defaultGamemode")
        }), (0, Bb.jsx)("div", {
          className: "SectionBody",
          children: Tb.F.map((bb => Ab || (0, Tb.y)(bb) ? (0, Bb.jsx)("button", {
            type: "button",
            className: Mb()("WorldGamemode", {
              Selected: ab === bb
            }),
            disabled: eb,
            onClick: () => {
              Ub(bb)
            },
            style: {
              "--background-image": `url(${Eb.o[bb]})`
            },
            children: Eb.n[bb]
          }, bb) : null))
        })]
      })
    }

    function vb(bb) {
      let {
        mapTypes: ab,
        value: Ub,
        onChange: Ab,
        showAll: eb,
        disabled: vb = !1,
        children: Lb
      } = bb;
      const {
        t: Pb
      } = (0, Yb.A)();
      return (0, Bb.jsxs)("div", {
        className: Mb()("BloxdForm MapTypeForm", {
          BasicOptions: !eb
        }),
        children: [(0, Bb.jsx)("div", {
          className: "SectionTitle",
          children: Pb("customLobby:mapType")
        }), (0, Bb.jsx)("div", {
          className: "SectionBody",
          children: ab.map((bb => eb || (0, Tb.B)(bb) ? (0, Bb.jsx)("button", {
            type: "button",
            className: Mb()("MapType", {
              Selected: Ub === bb
            }),
            disabled: vb,
            onClick: () => {
              Ab(bb)
            },
            style: {
              "--background-image": `url(${Eb.g[bb]})`
            },
            children: Eb.f[bb]
          }, bb) : null))
        }), Lb]
      })
    }
  },
  35798: () => {}
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);