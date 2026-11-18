export const id = 193;
export const ids = [193];
export const modules = {
  35161: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      CreateCustomLobby: () => My
    });
    Wy(35167);
    var Uy = Wy(3838),
      hy = Wy(55),
      fy = Wy(1486),
      Zy = Wy(898),
      cb = Wy.n(Zy),
      Py = Wy(2459),
      oy = Wy(987),
      By = Wy(1052),
      Ky = Wy(3788),
      ey = Wy(1273),
      qb = Wy(35175),
      sy = Wy(1042),
      Sy = Wy(1185),
      Ey = Wy(1356),
      ly = Wy(19),
      mb = Wy(1278),
      Cy = Wy(547),
      Ty = Wy(4148),
      Vy = Wy(615),
      Jy = Wy(1102),
      gb = Wy(1080),
      Gy = Wy(4159),
      Oy = Wy(910),
      Ry = Wy(35181),
      vb = Wy(35187),
      ib = Wy(952);

    function My(yb) {
      var bb, Wy, Zy, My;
      let {
        gameNameWithVariation: Yy,
        close: Xy,
        initialDefaultGamemode: ny
      } = yb;
      const {
        t: uy
      } = (0, sy.D)(), rb = (0, Ey.useNavigatePreserveSearch)(), [Hy, ab] = (0, hy.useState)("Enter"), [Fy, py] = (0, hy.useState)(""), Ly = hy.useRef(null), Qy = null === (bb = Vy.b[Yy]) || void 0 === bb ? void 0 : bb.showWorldsInsteadOfCustomLobbies, jb = Qy ? 1 : null === (Wy = Vy.b[Yy]) || void 0 === Wy ? void 0 : Wy.customLobbyCustomSchematicLimit, [Dy, tb] = (0, hy.useState)(!Qy);
      ny || (ny = "classic_creative" === Yy || "classic_creativeFlat" === Yy ? "creative" : "classic" === Yy ? "peaceful" : "survival");
      const wy = {
        baseOptions: {
          gameNameWithVariation: Qy ? "classic" : Yy,
          name: "",
          visibility: "unlisted"
        },
        listedOptions: {
          description: "",
          color: "",
          emojis: ""
        },
        mapOptions: {
          mapType: "classic_creativeFlat" === Yy ? "flat" : "default",
          schematicIdList: []
        },
        worldOptions: null
      };
      Qy && (wy.worldOptions = {
        defaultGamemode: ny,
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
      const [kb, Ny] = (0, hy.useState)(wy), [zb, Iy] = (0, hy.useState)(null);

      function xb(yb, bb) {
        Ny({
          ...kb,
          baseOptions: {
            ...kb.baseOptions,
            [yb]: bb
          }
        })
      }

      function Ay(yb, bb) {
        Ny({
          ...kb,
          listedOptions: {
            ...kb.listedOptions,
            [yb]: bb
          }
        })
      }

      function dy(yb, bb) {
        Ny({
          ...kb,
          worldOptions: {
            ...kb.worldOptions,
            [yb]: bb
          }
        })
      }

      function yW(yb) {
        Ny({
          ...kb,
          mapOptions: {
            ...kb.mapOptions,
            ...yb
          }
        })
      }(0, hy.useEffect)((() => {
        Ky.c.getNewStarterName().then((yb => {
          Ny((bb => "" !== bb.baseOptions.name ? bb : {
            ...bb,
            baseOptions: {
              ...bb.baseOptions,
              name: yb
            }
          }))
        })).catch((yb => {
          console.error("Error getting new starter name:", yb)
        }))
      }), []), (0, hy.useEffect)((() => {
        "customSchematic" === kb.mapOptions.mapType && null === zb && (0, oy.postJsonWithMetricsCookiesAndJsonResponse)(`${By.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
          retries: 0,
          minTimeout: 3e3
        }).then((yb => {
          Iy(yb)
        }))
      }), [kb.mapOptions.mapType, zb]);
      const bW = {
          tpRequests: {
            isEnabled: () => !kb.worldOptions.disableTpRequests,
            dJ: yb => {
              dy("disableTpRequests", !yb)
            }
          },
          spawnProtection: {
            isEnabled: () => kb.worldOptions.spawnProtection,
            dJ: yb => {
              dy("spawnProtection", yb)
            }
          },
          spawnReset: {
            isEnabled: () => kb.worldOptions.enableSpawnReset,
            dJ: yb => {
              dy("enableSpawnReset", yb)
            }
          },
          smpMarketplace: {
            isEnabled: () => kb.worldOptions.enableSmpMarketplace,
            dJ: yb => {
              dy("enableSmpMarketplace", yb)
            }
          },
          survivalGuns: {
            isEnabled: () => kb.worldOptions.enableSurvivalGuns,
            dJ: yb => {
              dy("enableSurvivalGuns", yb)
            }
          },
          fallDamage: {
            isEnabled: () => !kb.worldOptions.disableFallDamage,
            dJ: yb => {
              dy("disableFallDamage", !yb)
            }
          },
          dayNight: {
            isEnabled: () => kb.worldOptions.enableDayNight,
            dJ: yb => {
              dy("enableDayNight", yb)
            }
          }
        },
        Wb = "Enter" !== Hy,
        Ub = (0, ib.jsx)(Ty.i, {
          className: "NameInput",
          label: "general:name",
          disabled: "Enter" !== Hy,
          children: (0, ib.jsx)(fy.c, {
            domRef: Ly,
            onValueChange: (yb, bb) => {
              const Wy = (0, gb.tb)(yb);
              xb("name", Wy), Ly.current.value = Wy
            },
            maxLength: gb.Q,
            defaultValue: kb.baseOptions.name
          })
        });
      return (0, ib.jsxs)("div", {
        className: cb()("CreateCustomLobby", {
          CreateCustomLobbySuccess: "Success" === Hy,
          AdvancedMode: Dy
        }),
        children: ["Success" === Hy && (0, ib.jsxs)("div", {
          className: "CreateCustomLobbySuccessOverlay",
          children: [(0, ib.jsxs)("div", {
            className: "CreateCustomLobbySuccessTitle FullyFancyText AnimFadeInScaleUp",
            children: [(0, ib.jsx)(Oy.e, {
              name: "check"
            }), (0, ib.jsx)(mb.d, {})]
          }), (0, ib.jsx)("div", {
            className: "CreateCustomLobbySuccessButtons AnimFadeInScaleUp",
            children: (0, ib.jsx)(ey.i, {
              padDefaultFocus: !0,
              onClick: () => {
                (0, ly.g)("worldCreation"), rb((0, Sy.b)(Yy, kb.baseOptions.name))
              },
              children: uy("homePage:joinLobbyName", {
                lobbyName: kb.baseOptions.name
              })
            })
          })]
        }), (0, ib.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, ib.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: uy(Qy ? "homePage:createWorld" : "homePage:createCustomLobby")
          })
        }), (0, ib.jsx)(vb.c, {
          locked: Wb,
          children: (0, ib.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [!Dy && Ub, Dy && (0, ib.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, ib.jsx)("div", {
                className: "SectionTitle",
                children: uy("customLobby:generalOptions")
              }), (0, ib.jsxs)("div", {
                className: "SectionBody",
                children: [Ub, (0, ib.jsx)(Ty.i, {
                  label: "customLobby:visibility",
                  circleInfoText: uy("customLobby:visibilityDescription"),
                  disabled: "Enter" !== Hy,
                  children: (0, ib.jsx)(Py.c, {
                    options: Uy.p.map((yb => ({
                      value: yb,
                      label: Uy.g[yb]
                    }))),
                    value: kb.baseOptions.visibility,
                    onChange: yb => {
                      xb("visibility", yb.value)
                    }
                  })
                })]
              })]
            }), Qy && (0, ib.jsx)(Ry.d, {
              value: kb.worldOptions.defaultGamemode,
              onChange: yb => {
                dy("defaultGamemode", yb)
              },
              showAll: Dy,
              disabled: Wb
            }), (Qy || !(0, Cy.D)(jb) && jb > 0) && (0, ib.jsx)(Ry.f, {
              mapTypes: Qy ? Uy.A : Uy.n,
              value: kb.mapOptions.mapType,
              onChange: yb => {
                const bb = {
                  mapType: yb
                };
                "customSchematic" !== yb && (bb.schematicIdList = []), yW(bb)
              },
              showAll: Dy,
              disabled: Wb,
              children: "customSchematic" === kb.mapOptions.mapType && (0, ib.jsxs)(ib.Fragment, {
                children: [(0, ib.jsxs)("div", {
                  className: "SchematicListTitle AnimFadeIn",
                  children: [Qy && uy("customLobby:selectWorldSchematic"), !Qy && uy("customLobby:selectCustomLobbySchematics", {
                    schematicLimit: jb
                  })]
                }), (0, ib.jsx)("div", {
                  className: cb()("SchematicListContainer AnimFadeIn", {
                    SchematicListContainerDisabled: "Enter" !== Hy
                  }),
                  children: (0, ib.jsx)(qb.b, {
                    loading: null === zb,
                    schematics: null !== zb && void 0 !== zb ? zb : [],
                    onSchematicPicked: function(yb) {
                      const bb = kb.mapOptions.schematicIdList;
                      if (bb.includes(yb.schematicId)) yW({
                        schematicIdList: bb.filter((bb => bb !== yb.schematicId))
                      });
                      else {
                        if (jb && kb.mapOptions.schematicIdList.length >= jb) return;
                        yW({
                          schematicIdList: [...kb.mapOptions.schematicIdList, yb.schematicId]
                        })
                      }
                    },
                    selectedSchematicIdList: kb.mapOptions.schematicIdList,
                    disableAutoExport: !0
                  })
                })]
              })
            }), Dy && (0, ib.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, ib.jsx)("div", {
                className: "SectionTitle",
                children: uy("customLobby:listedOptions")
              }), (0, ib.jsxs)("div", {
                className: "SectionBody",
                children: [(0, ib.jsx)(Ty.i, {
                  label: "general:description",
                  className: "CustomLobbyDescription",
                  disabled: "Enter" !== Hy,
                  children: (0, ib.jsx)(fy.c, {
                    onValueChange: (yb, bb) => {
                      Ay("description", yb)
                    },
                    maxLength: 100,
                    defaultValue: kb.listedOptions.description
                  })
                }), (0, ib.jsx)(Ty.i, {
                  label: "general:color",
                  circleInfoText: "customLobby:lobbyColorDescription",
                  disabled: "Enter" !== Hy,
                  children: (0, ib.jsx)("div", {
                    className: "OtherInput",
                    children: (0, ib.jsx)("input", {
                      type: "color",
                      value: kb.listedOptions.color,
                      onChange: yb => {
                        Ay("color", yb.target.value)
                      }
                    })
                  })
                }), (0, ib.jsx)(Ty.i, {
                  label: "general:emojis",
                  circleInfoText: "customLobby:lobbyEmojisDescription",
                  disabled: "Enter" !== Hy,
                  children: (0, ib.jsx)(fy.c, {
                    onValueChange: (yb, bb) => {
                      Ay("emojis", yb)
                    },
                    maxLength: 6,
                    defaultValue: kb.listedOptions.emojis
                  })
                })]
              })]
            }), Dy && Qy && (0, ib.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, ib.jsx)("div", {
                className: "SectionTitle",
                children: uy("customLobby:advancedOptions")
              }), (0, ib.jsxs)("div", {
                className: "SectionBody",
                children: [(0, ib.jsx)(Ty.i, {
                  label: "classic:worldGenSeed",
                  disabled: "Enter" !== Hy,
                  children: (0, ib.jsx)(fy.c, {
                    onValueChange: (yb, bb) => {
                      dy("worldGenSeed", yb)
                    },
                    maxLength: gb.Q
                  })
                }), (0, ib.jsx)(Ty.i, {
                  label: "classic:disableProtectors",
                  disabled: "Enter" !== Hy,
                  children: (0, ib.jsx)(Ty.e, {
                    checked: kb.worldOptions.disableProtectors,
                    setChecked: yb => {
                      dy("disableProtectors", yb)
                    }
                  })
                }), (0, ib.jsx)(Ty.i, {
                  label: "classic:disableTribeCreation",
                  disabled: "Enter" !== Hy,
                  children: (0, ib.jsx)(Ty.e, {
                    checked: kb.worldOptions.disableTribeCreation,
                    setChecked: yb => {
                      dy("disableTribeCreation", yb)
                    }
                  })
                }), (0, ib.jsx)(Ty.i, {
                  label: "classic:voidDeathHeight",
                  circleInfoText: "classic:voidDeathHeightDescription",
                  disabled: "Enter" !== Hy,
                  children: (0, ib.jsx)("input", {
                    type: "number",
                    max: Jy.K,
                    value: null !== (Zy = kb.worldOptions.voidDeathHeight) && void 0 !== Zy ? Zy : "",
                    onChange: yb => {
                      const bb = parseInt(yb.target.value);
                      dy("voidDeathHeight", isNaN(bb) ? null : bb)
                    }
                  })
                }), (0, ib.jsx)(Ty.i, {
                  label: "classic:disableLobbySpawn",
                  disabled: "Enter" !== Hy,
                  children: (0, ib.jsx)(Ty.e, {
                    checked: kb.worldOptions.disableLobbySpawn,
                    setChecked: yb => {
                      dy("disableLobbySpawn", yb)
                    }
                  })
                }), (0, ib.jsx)(Ty.i, {
                  label: "classic:worldBorder",
                  circleInfoText: "classic:worldBorderDescription",
                  disabled: "Enter" !== Hy,
                  children: (0, ib.jsx)("input", {
                    type: "number",
                    min: Jy.T,
                    max: Jy.O,
                    value: null !== (My = kb.worldOptions.worldBorder) && void 0 !== My ? My : "",
                    onChange: yb => {
                      const bb = parseInt(yb.target.value);
                      dy("worldBorder", isNaN(bb) ? null : bb)
                    }
                  })
                }), (0, ib.jsx)(Ty.i, {
                  label: "classic:disableMobs",
                  disabled: "Enter" !== Hy,
                  children: (0, ib.jsx)(Ty.e, {
                    checked: kb.worldOptions.disableMobs,
                    setChecked: yb => {
                      dy("disableMobs", yb)
                    }
                  })
                })]
              })]
            }), Qy && (0, ib.jsx)(Gy.e, {
              callbacks: bW,
              disabled: "Enter" !== Hy,
              advancedMode: Dy
            })]
          })
        }), (0, ib.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, ib.jsx)(ey.i, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: "Enter" !== Hy,
            onClick: () => {
              !async function() {
                if ("Enter" === Hy) {
                  ab("Loading"), py("");
                  try {
                    await Ky.c.createCustomLobby(kb), ab("Success")
                  } catch (yb) {
                    py(yb.message), console.error(yb.message), ab("Enter")
                  }
                }
              }()
            },
            children: uy("general:create")
          }), Qy && (0, ib.jsx)("div", {
            className: "CreateCustomLobbyAdvancedToggle",
            "data-pad-ignore": Wb || void 0,
            children: (0, ib.jsx)(Ty.i, {
              label: "customLobby:showAdvancedOptions",
              disabled: Wb,
              onLabelClick: () => {
                tb(!Dy)
              },
              children: (0, ib.jsx)(Ty.e, {
                checked: Dy,
                setChecked: tb
              })
            })
          }), Fy && (0, ib.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: Fy
          })]
        })]
      })
    }
  },
  35187: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Py
    });
    var Uy = Wy(898),
      hy = Wy.n(Uy),
      fy = Wy(55),
      Zy = Wy(3771),
      cb = Wy(952);

    function Py(yb) {
      let {
        locked: bb,
        children: Wy
      } = yb;
      const Uy = (0, fy.useRef)(null),
        Py = (0, Zy.b)(Uy, "y");
      return (0, cb.jsx)("div", {
        ref: Uy,
        className: hy()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: Py.before,
          CreateCustomLobbyBodyMoreBelow: Py.after
        }),
        "data-pad-ignore": bb || void 0,
        children: Wy
      })
    }
  },
  35175: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => By,
      d: () => ey
    });
    var Uy = Wy(55),
      hy = Wy(1207),
      fy = Wy(1042),
      Zy = Wy(1194),
      cb = Wy(2781),
      Py = Wy(4139),
      oy = Wy(952);

    function By(yb) {
      let {
        loading: bb,
        schematics: Wy,
        onSchematicPicked: Uy,
        selectedSchematicIdList: hy = [],
        disableAutoExport: Py
      } = yb;
      const {
        t: By
      } = (0, fy.D)();
      return (0, oy.jsxs)("div", {
        className: "SchematicList",
        children: [bb && (0, oy.jsx)(Zy.e, {}), !bb && 0 === Wy.length && (0, oy.jsx)("div", {
          className: "NoSchematicsText",
          children: By("worldBuilder:noSavedSchematic")
        }), !bb && Wy.map((yb => (0, oy.jsx)(cb.f, {
          source: {
            type: "schematic",
            schematic: yb
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            Uy(yb)
          },
          isSelected: hy.includes(yb.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: yb.isAutoExported && Py,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, yb.schematicId)))]
      })
    }

    function Ky(yb) {
      let {
        ownedSchematics: bb,
        currentWorldSchematicId: Wy,
        onClose: hy
      } = yb;
      const {
        t: Zy
      } = (0, fy.D)(), [cb, Ky] = (0, Uy.useState)(null);
      return (0, oy.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === cb && (0, oy.jsxs)(oy.Fragment, {
          children: [(0, oy.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: Zy("worldBuilder:schematicList")
          }), (0, oy.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: Zy("worldBuilder:clickSchematicForOptions")
          }), (0, oy.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, oy.jsx)(By, {
              loading: !1,
              schematics: bb,
              onSchematicPicked: yb => {
                Ky(yb)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== cb && (0, oy.jsx)(Py.h, {
          schematic: cb,
          inSourceWorld: cb.schematicId === Wy,
          onSchematicUpdate: yb => {
            Ky(yb)
          },
          onClose: () => {
            Ky(null), hy()
          }
        })]
      })
    }

    function ey(yb) {
      let {
        ownedSchematics: bb,
        currentWorldSchematicId: Wy,
        onClose: Uy
      } = yb;
      hy.NotificationProvider.showCustomPopup({
        body: yb => (0, oy.jsx)(Ky, {
          ownedSchematics: bb,
          currentWorldSchematicId: Wy,
          onClose: yb
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: Uy,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  35181: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => oy,
      f: () => By
    });
    Wy(55);
    var Uy = Wy(898),
      hy = Wy.n(Uy),
      fy = Wy(3838),
      Zy = Wy(248),
      cb = Wy(1042),
      Py = Wy(952);

    function oy(yb) {
      let {
        value: bb,
        onChange: Wy,
        showAll: Uy,
        disabled: oy = !1
      } = yb;
      const {
        t: By
      } = (0, cb.D)();
      return (0, Py.jsxs)("div", {
        className: hy()("BloxdForm GamemodeForm", {
          BasicOptions: !Uy
        }),
        children: [(0, Py.jsx)("div", {
          className: "SectionTitle",
          children: By("classic:defaultGamemode")
        }), (0, Py.jsx)("div", {
          className: "SectionBody",
          children: fy.y.map((yb => Uy || (0, fy.s)(yb) ? (0, Py.jsx)("button", {
            type: "button",
            className: hy()("WorldGamemode", {
              Selected: bb === yb
            }),
            disabled: oy,
            onClick: () => {
              Wy(yb)
            },
            style: {
              "--background-image": `url(${Zy.u[yb]})`
            },
            children: Zy.q[yb]
          }, yb) : null))
        })]
      })
    }

    function By(yb) {
      let {
        mapTypes: bb,
        value: Wy,
        onChange: Uy,
        showAll: oy,
        disabled: By = !1,
        children: Ky
      } = yb;
      const {
        t: ey
      } = (0, cb.D)();
      return (0, Py.jsxs)("div", {
        className: hy()("BloxdForm MapTypeForm", {
          BasicOptions: !oy
        }),
        children: [(0, Py.jsx)("div", {
          className: "SectionTitle",
          children: ey("customLobby:mapType")
        }), (0, Py.jsx)("div", {
          className: "SectionBody",
          children: bb.map((yb => oy || (0, fy.u)(yb) ? (0, Py.jsx)("button", {
            type: "button",
            className: hy()("MapType", {
              Selected: Wy === yb
            }),
            disabled: By,
            onClick: () => {
              Uy(yb)
            },
            style: {
              "--background-image": `url(${Zy.n[yb]})`
            },
            children: Zy.k[yb]
          }, yb) : null))
        }), Ky]
      })
    }
  },
  35167: () => {}
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);