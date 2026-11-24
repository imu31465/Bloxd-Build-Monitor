export const id = 213;
export const ids = [213];
export const modules = {
  36327: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      CreateCustomLobby: () => nk
    });
    Ik(36335);
    var Xk = Ik(4612),
      Tk = Ik(58),
      ik = Ik(1617),
      yk = Ik(1055),
      lk = Ik.n(yk),
      ak = Ik(3065),
      qk = Ik(1120),
      Lk = Ik(1194),
      tk = Ik(4584),
      Zk = Ik(1406),
      jk = Ik(36340),
      ek = Ik(1179),
      wk = Ik(1308),
      Hk = Ik(1475),
      Jk = Ik(25),
      xk = Ik(1415),
      Pk = Ik(628),
      Kk = Ik(4931),
      Qk = Ik(768),
      sk = Ik(1231),
      Vk = Ik(1217),
      zk = Ik(4938),
      Sk = Ik(1066),
      vk = Ik(36347),
      Ek = Ik(36355),
      Ok = Ik(1096);

    function nk(kk) {
      var Fk, Ik, yk, nk;
      let {
        gameNameWithVariation: Gk,
        close: pk,
        initialDefaultGamemode: uk
      } = kk;
      const {
        t: bk
      } = (0, ek.y)(), Rk = (0, Hk.useNavigatePreserveSearch)(), [Uk, Ck] = (0, Tk.useState)("Enter"), [Nk, ck] = (0, Tk.useState)(""), Wk = Tk.useRef(null), fk = null === (Fk = Qk.e[Gk]) || void 0 === Fk ? void 0 : Fk.showWorldsInsteadOfCustomLobbies, Bk = fk ? 1 : null === (Ik = Qk.e[Gk]) || void 0 === Ik ? void 0 : Ik.customLobbyCustomSchematicLimit, [dk, Yk] = (0, Tk.useState)(!fk);
      uk || (uk = "classic_creative" === Gk || "classic_creativeFlat" === Gk ? "creative" : "classic" === Gk ? "peaceful" : "survival");
      const Ak = {
        baseOptions: {
          gameNameWithVariation: fk ? "classic" : Gk,
          name: "",
          visibility: "unlisted"
        },
        listedOptions: {
          description: "",
          color: "",
          emojis: ""
        },
        mapOptions: {
          mapType: "classic_creativeFlat" === Gk ? "flat" : "default",
          schematicIdList: []
        },
        worldOptions: null
      };
      fk && (Ak.worldOptions = {
        defaultGamemode: uk,
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
      const [gk, mk] = (0, Tk.useState)(Ak), [hk, rk] = (0, Tk.useState)(null);

      function Dk(kk, Fk) {
        mk({
          ...gk,
          baseOptions: {
            ...gk.baseOptions,
            [kk]: Fk
          }
        })
      }

      function Mk(kk, Fk) {
        mk({
          ...gk,
          listedOptions: {
            ...gk.listedOptions,
            [kk]: Fk
          }
        })
      }

      function kF(kk, Fk) {
        mk({
          ...gk,
          worldOptions: {
            ...gk.worldOptions,
            [kk]: Fk
          }
        })
      }

      function FF(kk) {
        mk({
          ...gk,
          mapOptions: {
            ...gk.mapOptions,
            ...kk
          }
        })
      }(0, Tk.useEffect)((() => {
        tk.c.getNewStarterName().then((kk => {
          mk((Fk => "" !== Fk.baseOptions.name ? Fk : {
            ...Fk,
            baseOptions: {
              ...Fk.baseOptions,
              name: kk
            }
          }))
        })).catch((kk => {
          console.error("Error getting new starter name:", kk)
        }))
      }), []), (0, Tk.useEffect)((() => {
        "customSchematic" === gk.mapOptions.mapType && null === hk && (0, qk.postJsonWithMetricsCookiesAndJsonResponse)(`${Lk.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
          retries: 0,
          minTimeout: 3e3
        }).then((kk => {
          rk(kk)
        }))
      }), [gk.mapOptions.mapType, hk]);
      const IF = {
          tpRequests: {
            isEnabled: () => !gk.worldOptions.disableTpRequests,
            Av: kk => {
              kF("disableTpRequests", !kk)
            }
          },
          spawnProtection: {
            isEnabled: () => gk.worldOptions.spawnProtection,
            Av: kk => {
              kF("spawnProtection", kk)
            }
          },
          spawnReset: {
            isEnabled: () => gk.worldOptions.enableSpawnReset,
            Av: kk => {
              kF("enableSpawnReset", kk)
            }
          },
          smpMarketplace: {
            isEnabled: () => gk.worldOptions.enableSmpMarketplace,
            Av: kk => {
              kF("enableSmpMarketplace", kk)
            }
          },
          survivalGuns: {
            isEnabled: () => gk.worldOptions.enableSurvivalGuns,
            Av: kk => {
              kF("enableSurvivalGuns", kk)
            }
          },
          fallDamage: {
            isEnabled: () => !gk.worldOptions.disableFallDamage,
            Av: kk => {
              kF("disableFallDamage", !kk)
            }
          },
          dayNight: {
            isEnabled: () => gk.worldOptions.enableDayNight,
            Av: kk => {
              kF("enableDayNight", kk)
            }
          }
        },
        XF = "Enter" !== Uk,
        TF = (0, Ok.jsx)(Kk.i, {
          className: "NameInput",
          label: "general:name",
          disabled: "Enter" !== Uk,
          children: (0, Ok.jsx)(ik.c, {
            domRef: Wk,
            onValueChange: (kk, Fk) => {
              const Ik = (0, Vk.qb)(kk);
              Dk("name", Ik), Wk.current.value = Ik
            },
            maxLength: Vk.M,
            defaultValue: gk.baseOptions.name
          })
        });
      return (0, Ok.jsxs)("div", {
        className: lk()("CreateCustomLobby", {
          CreateCustomLobbySuccess: "Success" === Uk,
          AdvancedMode: dk
        }),
        children: ["Success" === Uk && (0, Ok.jsxs)("div", {
          className: "CreateCustomLobbySuccessOverlay",
          children: [(0, Ok.jsxs)("div", {
            className: "CreateCustomLobbySuccessTitle FullyFancyText AnimFadeInScaleUp",
            children: [(0, Ok.jsx)(Sk.e, {
              name: "check"
            }), (0, Ok.jsx)(xk.d, {})]
          }), (0, Ok.jsx)("div", {
            className: "CreateCustomLobbySuccessButtons AnimFadeInScaleUp",
            children: (0, Ok.jsx)(Zk.m, {
              padDefaultFocus: !0,
              onClick: () => {
                (0, Jk.h)("worldCreation"), Rk((0, wk.e)(Gk, gk.baseOptions.name))
              },
              children: bk("homePage:joinLobbyName", {
                lobbyName: gk.baseOptions.name
              })
            })
          })]
        }), (0, Ok.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, Ok.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: bk(fk ? "homePage:createWorld" : "homePage:createCustomLobby")
          })
        }), (0, Ok.jsx)(Ek.d, {
          locked: XF,
          children: (0, Ok.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [!dk && TF, dk && (0, Ok.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, Ok.jsx)("div", {
                className: "SectionTitle",
                children: bk("customLobby:generalOptions")
              }), (0, Ok.jsxs)("div", {
                className: "SectionBody",
                children: [TF, (0, Ok.jsx)(Kk.i, {
                  label: "customLobby:visibility",
                  circleInfoText: bk("customLobby:visibilityDescription"),
                  disabled: "Enter" !== Uk,
                  children: (0, Ok.jsx)(ak.e, {
                    options: Xk.p.map((kk => ({
                      value: kk,
                      label: Xk.e[kk]
                    }))),
                    value: gk.baseOptions.visibility,
                    onChange: kk => {
                      Dk("visibility", kk.value)
                    }
                  })
                })]
              })]
            }), fk && (0, Ok.jsx)(vk.e, {
              value: gk.worldOptions.defaultGamemode,
              onChange: kk => {
                kF("defaultGamemode", kk)
              },
              showAll: dk,
              disabled: XF
            }), (fk || !(0, Pk.Q)(Bk) && Bk > 0) && (0, Ok.jsx)(vk.g, {
              mapTypes: fk ? Xk.A : Xk.m,
              value: gk.mapOptions.mapType,
              onChange: kk => {
                const Fk = {
                  mapType: kk
                };
                "customSchematic" !== kk && (Fk.schematicIdList = []), FF(Fk)
              },
              showAll: dk,
              disabled: XF,
              children: "customSchematic" === gk.mapOptions.mapType && (0, Ok.jsxs)(Ok.Fragment, {
                children: [(0, Ok.jsxs)("div", {
                  className: "SchematicListTitle AnimFadeIn",
                  children: [fk && bk("customLobby:selectWorldSchematic"), !fk && bk("customLobby:selectCustomLobbySchematics", {
                    schematicLimit: Bk
                  })]
                }), (0, Ok.jsx)("div", {
                  className: lk()("SchematicListContainer AnimFadeIn", {
                    SchematicListContainerDisabled: "Enter" !== Uk
                  }),
                  children: (0, Ok.jsx)(jk.e, {
                    loading: null === hk,
                    schematics: null !== hk && void 0 !== hk ? hk : [],
                    onSchematicPicked: function(kk) {
                      const Fk = gk.mapOptions.schematicIdList;
                      if (Fk.includes(kk.schematicId)) FF({
                        schematicIdList: Fk.filter((Fk => Fk !== kk.schematicId))
                      });
                      else {
                        if (Bk && gk.mapOptions.schematicIdList.length >= Bk) return;
                        FF({
                          schematicIdList: [...gk.mapOptions.schematicIdList, kk.schematicId]
                        })
                      }
                    },
                    selectedSchematicIdList: gk.mapOptions.schematicIdList,
                    disableAutoExport: !0
                  })
                })]
              })
            }), dk && (0, Ok.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, Ok.jsx)("div", {
                className: "SectionTitle",
                children: bk("customLobby:listedOptions")
              }), (0, Ok.jsxs)("div", {
                className: "SectionBody",
                children: [(0, Ok.jsx)(Kk.i, {
                  label: "general:description",
                  className: "CustomLobbyDescription",
                  disabled: "Enter" !== Uk,
                  children: (0, Ok.jsx)(ik.c, {
                    onValueChange: (kk, Fk) => {
                      Mk("description", kk)
                    },
                    maxLength: 100,
                    defaultValue: gk.listedOptions.description
                  })
                }), (0, Ok.jsx)(Kk.i, {
                  label: "general:color",
                  circleInfoText: "customLobby:lobbyColorDescription",
                  disabled: "Enter" !== Uk,
                  children: (0, Ok.jsx)("div", {
                    className: "OtherInput",
                    children: (0, Ok.jsx)("input", {
                      type: "color",
                      value: gk.listedOptions.color,
                      onChange: kk => {
                        Mk("color", kk.target.value)
                      }
                    })
                  })
                }), (0, Ok.jsx)(Kk.i, {
                  label: "general:emojis",
                  circleInfoText: "customLobby:lobbyEmojisDescription",
                  disabled: "Enter" !== Uk,
                  children: (0, Ok.jsx)(ik.c, {
                    onValueChange: (kk, Fk) => {
                      Mk("emojis", kk)
                    },
                    maxLength: 6,
                    defaultValue: gk.listedOptions.emojis
                  })
                })]
              })]
            }), dk && fk && (0, Ok.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, Ok.jsx)("div", {
                className: "SectionTitle",
                children: bk("customLobby:advancedOptions")
              }), (0, Ok.jsxs)("div", {
                className: "SectionBody",
                children: [(0, Ok.jsx)(Kk.i, {
                  label: "classic:worldGenSeed",
                  disabled: "Enter" !== Uk,
                  children: (0, Ok.jsx)(ik.c, {
                    onValueChange: (kk, Fk) => {
                      kF("worldGenSeed", kk)
                    },
                    maxLength: Vk.M
                  })
                }), (0, Ok.jsx)(Kk.i, {
                  label: "classic:disableProtectors",
                  disabled: "Enter" !== Uk,
                  children: (0, Ok.jsx)(Kk.e, {
                    checked: gk.worldOptions.disableProtectors,
                    setChecked: kk => {
                      kF("disableProtectors", kk)
                    }
                  })
                }), (0, Ok.jsx)(Kk.i, {
                  label: "classic:disableTribeCreation",
                  disabled: "Enter" !== Uk,
                  children: (0, Ok.jsx)(Kk.e, {
                    checked: gk.worldOptions.disableTribeCreation,
                    setChecked: kk => {
                      kF("disableTribeCreation", kk)
                    }
                  })
                }), (0, Ok.jsx)(Kk.i, {
                  label: "classic:voidDeathHeight",
                  circleInfoText: "classic:voidDeathHeightDescription",
                  disabled: "Enter" !== Uk,
                  children: (0, Ok.jsx)("input", {
                    type: "number",
                    max: sk.K,
                    value: null !== (yk = gk.worldOptions.voidDeathHeight) && void 0 !== yk ? yk : "",
                    onChange: kk => {
                      const Fk = parseInt(kk.target.value);
                      kF("voidDeathHeight", isNaN(Fk) ? null : Fk)
                    }
                  })
                }), (0, Ok.jsx)(Kk.i, {
                  label: "classic:disableLobbySpawn",
                  disabled: "Enter" !== Uk,
                  children: (0, Ok.jsx)(Kk.e, {
                    checked: gk.worldOptions.disableLobbySpawn,
                    setChecked: kk => {
                      kF("disableLobbySpawn", kk)
                    }
                  })
                }), (0, Ok.jsx)(Kk.i, {
                  label: "classic:worldBorder",
                  circleInfoText: "classic:worldBorderDescription",
                  disabled: "Enter" !== Uk,
                  children: (0, Ok.jsx)("input", {
                    type: "number",
                    min: sk.Q,
                    max: sk.L,
                    value: null !== (nk = gk.worldOptions.worldBorder) && void 0 !== nk ? nk : "",
                    onChange: kk => {
                      const Fk = parseInt(kk.target.value);
                      kF("worldBorder", isNaN(Fk) ? null : Fk)
                    }
                  })
                }), (0, Ok.jsx)(Kk.i, {
                  label: "classic:disableMobs",
                  disabled: "Enter" !== Uk,
                  children: (0, Ok.jsx)(Kk.e, {
                    checked: gk.worldOptions.disableMobs,
                    setChecked: kk => {
                      kF("disableMobs", kk)
                    }
                  })
                })]
              })]
            }), fk && (0, Ok.jsx)(zk.e, {
              callbacks: IF,
              disabled: "Enter" !== Uk,
              advancedMode: dk
            })]
          })
        }), (0, Ok.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, Ok.jsx)(Zk.m, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: "Enter" !== Uk,
            onClick: () => {
              !async function() {
                if ("Enter" === Uk) {
                  Ck("Loading"), ck("");
                  try {
                    await tk.c.createCustomLobby(gk), Ck("Success")
                  } catch (kk) {
                    ck(kk.message), console.error(kk.message), Ck("Enter")
                  }
                }
              }()
            },
            children: bk("general:create")
          }), fk && (0, Ok.jsx)("div", {
            className: "CreateCustomLobbyAdvancedToggle",
            "data-pad-ignore": XF || void 0,
            children: (0, Ok.jsx)(Kk.i, {
              label: "customLobby:showAdvancedOptions",
              disabled: XF,
              onLabelClick: () => {
                Yk(!dk)
              },
              children: (0, Ok.jsx)(Kk.e, {
                checked: dk,
                setChecked: Yk
              })
            })
          }), Nk && (0, Ok.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: Nk
          })]
        })]
      })
    }
  },
  36355: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => ak
    });
    var Xk = Ik(1055),
      Tk = Ik.n(Xk),
      ik = Ik(58),
      yk = Ik(4570),
      lk = Ik(1096);

    function ak(kk) {
      let {
        locked: Fk,
        children: Ik
      } = kk;
      const Xk = (0, ik.useRef)(null),
        ak = (0, yk.e)(Xk, "y");
      return (0, lk.jsx)("div", {
        ref: Xk,
        className: Tk()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: ak.before,
          CreateCustomLobbyBodyMoreBelow: ak.after
        }),
        "data-pad-ignore": Fk || void 0,
        children: Ik
      })
    }
  },
  36340: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Lk,
      i: () => Zk
    });
    var Xk = Ik(58),
      Tk = Ik(1324),
      ik = Ik(1179),
      yk = Ik(1318),
      lk = Ik(3414),
      ak = Ik(4929),
      qk = Ik(1096);

    function Lk(kk) {
      let {
        loading: Fk,
        schematics: Ik,
        onSchematicPicked: Xk,
        selectedSchematicIdList: Tk = [],
        disableAutoExport: ak
      } = kk;
      const {
        t: Lk
      } = (0, ik.y)();
      return (0, qk.jsxs)("div", {
        className: "SchematicList",
        children: [Fk && (0, qk.jsx)(yk.c, {}), !Fk && 0 === Ik.length && (0, qk.jsx)("div", {
          className: "NoSchematicsText",
          children: Lk("worldBuilder:noSavedSchematic")
        }), !Fk && Ik.map((kk => (0, qk.jsx)(lk.c, {
          source: {
            type: "schematic",
            schematic: kk
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            Xk(kk)
          },
          isSelected: Tk.includes(kk.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: kk.isAutoExported && ak,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, kk.schematicId)))]
      })
    }

    function tk(kk) {
      let {
        ownedSchematics: Fk,
        currentWorldSchematicId: Ik,
        onClose: Tk
      } = kk;
      const {
        t: yk
      } = (0, ik.y)(), [lk, tk] = (0, Xk.useState)(null);
      return (0, qk.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === lk && (0, qk.jsxs)(qk.Fragment, {
          children: [(0, qk.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: yk("worldBuilder:schematicList")
          }), (0, qk.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: yk("worldBuilder:clickSchematicForOptions")
          }), (0, qk.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, qk.jsx)(Lk, {
              loading: !1,
              schematics: Fk,
              onSchematicPicked: kk => {
                tk(kk)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== lk && (0, qk.jsx)(ak.f, {
          schematic: lk,
          inSourceWorld: lk.schematicId === Ik,
          onSchematicUpdate: kk => {
            tk(kk)
          },
          onClose: () => {
            tk(null), Tk()
          }
        })]
      })
    }

    function Zk(kk) {
      let {
        ownedSchematics: Fk,
        currentWorldSchematicId: Ik,
        onClose: Xk
      } = kk;
      Tk.NotificationProvider.showCustomPopup({
        body: kk => (0, qk.jsx)(tk, {
          ownedSchematics: Fk,
          currentWorldSchematicId: Ik,
          onClose: kk
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: Xk,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  36347: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => qk,
      g: () => Lk
    });
    Ik(58);
    var Xk = Ik(1055),
      Tk = Ik.n(Xk),
      ik = Ik(4612),
      yk = Ik(318),
      lk = Ik(1179),
      ak = Ik(1096);

    function qk(kk) {
      let {
        value: Fk,
        onChange: Ik,
        showAll: Xk,
        disabled: qk = !1
      } = kk;
      const {
        t: Lk
      } = (0, lk.y)();
      return (0, ak.jsxs)("div", {
        className: Tk()("BloxdForm GamemodeForm", {
          BasicOptions: !Xk
        }),
        children: [(0, ak.jsx)("div", {
          className: "SectionTitle",
          children: Lk("classic:defaultGamemode")
        }), (0, ak.jsx)("div", {
          className: "SectionBody",
          children: ik.x.map((kk => Xk || (0, ik.r)(kk) ? (0, ak.jsx)("button", {
            type: "button",
            className: Tk()("WorldGamemode", {
              Selected: Fk === kk
            }),
            disabled: qk,
            onClick: () => {
              Ik(kk)
            },
            style: {
              "--background-image": `url(${yk.x[kk]})`
            },
            children: yk.t[kk]
          }, kk) : null))
        })]
      })
    }

    function Lk(kk) {
      let {
        mapTypes: Fk,
        value: Ik,
        onChange: Xk,
        showAll: qk,
        disabled: Lk = !1,
        children: tk
      } = kk;
      const {
        t: Zk
      } = (0, lk.y)();
      return (0, ak.jsxs)("div", {
        className: Tk()("BloxdForm MapTypeForm", {
          BasicOptions: !qk
        }),
        children: [(0, ak.jsx)("div", {
          className: "SectionTitle",
          children: Zk("customLobby:mapType")
        }), (0, ak.jsx)("div", {
          className: "SectionBody",
          children: Fk.map((kk => qk || (0, ik.u)(kk) ? (0, ak.jsx)("button", {
            type: "button",
            className: Tk()("MapType", {
              Selected: Ik === kk
            }),
            disabled: Lk,
            onClick: () => {
              Xk(kk)
            },
            style: {
              "--background-image": `url(${yk.p[kk]})`
            },
            children: yk.n[kk]
          }, kk) : null))
        }), tk]
      })
    }
  },
  36335: () => {}
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);