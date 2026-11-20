export const id = 209;
export const ids = [209];
export const modules = {
  36064: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      CreateCustomLobby: () => Mk
    });
    Bk(36068);
    var Rk = Bk(4366),
      tk = Bk(61),
      ak = Bk(1620),
      Xk = Bk(1020),
      bk = Bk.n(Xk),
      wk = Bk(2926),
      dk = Bk(1101),
      sk = Bk(1154),
      Vk = Bk(4324),
      Jk = Bk(1389),
      Ak = Bk(36076),
      ek = Bk(1149),
      yk = Bk(1273),
      fk = Bk(1459),
      mk = Bk(22),
      Wk = Bk(1396),
      vk = Bk(606),
      ik = Bk(4643),
      Yk = Bk(729),
      Lk = Bk(1192),
      Ok = Bk(1173),
      Ek = Bk(4650),
      Sk = Bk(1028),
      Nk = Bk(36083),
      Hk = Bk(36091),
      uk = Bk(1069);

    function Mk(kk) {
      var Fk, Bk, Xk, Mk;
      let {
        gameNameWithVariation: gk,
        close: Uk,
        initialDefaultGamemode: ck
      } = kk;
      const {
        t: Gk
      } = (0, ek.x)(), Tk = (0, fk.useNavigatePreserveSearch)(), [rk, Dk] = (0, tk.useState)("Enter"), [zk, Pk] = (0, tk.useState)(""), hk = tk.useRef(null), qk = null === (Fk = Yk.e[gk]) || void 0 === Fk ? void 0 : Fk.showWorldsInsteadOfCustomLobbies, Ck = qk ? 1 : null === (Bk = Yk.e[gk]) || void 0 === Bk ? void 0 : Bk.customLobbyCustomSchematicLimit, [Zk, pk] = (0, tk.useState)(!qk);
      ck || (ck = "classic_creative" === gk || "classic_creativeFlat" === gk ? "creative" : "classic" === gk ? "peaceful" : "survival");
      const Kk = {
        baseOptions: {
          gameNameWithVariation: qk ? "classic" : gk,
          name: "",
          visibility: "unlisted"
        },
        listedOptions: {
          description: "",
          color: "",
          emojis: ""
        },
        mapOptions: {
          mapType: "classic_creativeFlat" === gk ? "flat" : "default",
          schematicIdList: []
        },
        worldOptions: null
      };
      qk && (Kk.worldOptions = {
        defaultGamemode: ck,
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
      const [xk, jk] = (0, tk.useState)(Kk), [lk, nk] = (0, tk.useState)(null);

      function Ik(kk, Fk) {
        jk({
          ...xk,
          baseOptions: {
            ...xk.baseOptions,
            [kk]: Fk
          }
        })
      }

      function Qk(kk, Fk) {
        jk({
          ...xk,
          listedOptions: {
            ...xk.listedOptions,
            [kk]: Fk
          }
        })
      }

      function kF(kk, Fk) {
        jk({
          ...xk,
          worldOptions: {
            ...xk.worldOptions,
            [kk]: Fk
          }
        })
      }

      function FF(kk) {
        jk({
          ...xk,
          mapOptions: {
            ...xk.mapOptions,
            ...kk
          }
        })
      }(0, tk.useEffect)((() => {
        Vk.c.getNewStarterName().then((kk => {
          jk((Fk => "" !== Fk.baseOptions.name ? Fk : {
            ...Fk,
            baseOptions: {
              ...Fk.baseOptions,
              name: kk
            }
          }))
        })).catch((kk => {
          console.error("Error getting new starter name:", kk)
        }))
      }), []), (0, tk.useEffect)((() => {
        "customSchematic" === xk.mapOptions.mapType && null === lk && (0, dk.postJsonWithMetricsCookiesAndJsonResponse)(`${sk.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
          retries: 0,
          minTimeout: 3e3
        }).then((kk => {
          nk(kk)
        }))
      }), [xk.mapOptions.mapType, lk]);
      const BF = {
          tpRequests: {
            isEnabled: () => !xk.worldOptions.disableTpRequests,
            lY: kk => {
              kF("disableTpRequests", !kk)
            }
          },
          spawnProtection: {
            isEnabled: () => xk.worldOptions.spawnProtection,
            lY: kk => {
              kF("spawnProtection", kk)
            }
          },
          spawnReset: {
            isEnabled: () => xk.worldOptions.enableSpawnReset,
            lY: kk => {
              kF("enableSpawnReset", kk)
            }
          },
          smpMarketplace: {
            isEnabled: () => xk.worldOptions.enableSmpMarketplace,
            lY: kk => {
              kF("enableSmpMarketplace", kk)
            }
          },
          survivalGuns: {
            isEnabled: () => xk.worldOptions.enableSurvivalGuns,
            lY: kk => {
              kF("enableSurvivalGuns", kk)
            }
          },
          fallDamage: {
            isEnabled: () => !xk.worldOptions.disableFallDamage,
            lY: kk => {
              kF("disableFallDamage", !kk)
            }
          },
          dayNight: {
            isEnabled: () => xk.worldOptions.enableDayNight,
            lY: kk => {
              kF("enableDayNight", kk)
            }
          }
        },
        RF = "Enter" !== rk,
        tF = (0, uk.jsx)(ik.f, {
          className: "NameInput",
          label: "general:name",
          disabled: "Enter" !== rk,
          children: (0, uk.jsx)(ak.e, {
            domRef: hk,
            onValueChange: (kk, Fk) => {
              const Bk = (0, Ok.ub)(kk);
              Ik("name", Bk), hk.current.value = Bk
            },
            maxLength: Ok.Q,
            defaultValue: xk.baseOptions.name
          })
        });
      return (0, uk.jsxs)("div", {
        className: bk()("CreateCustomLobby", {
          CreateCustomLobbySuccess: "Success" === rk,
          AdvancedMode: Zk
        }),
        children: ["Success" === rk && (0, uk.jsxs)("div", {
          className: "CreateCustomLobbySuccessOverlay",
          children: [(0, uk.jsxs)("div", {
            className: "CreateCustomLobbySuccessTitle FullyFancyText AnimFadeInScaleUp",
            children: [(0, uk.jsx)(Sk.d, {
              name: "check"
            }), (0, uk.jsx)(Wk.d, {})]
          }), (0, uk.jsx)("div", {
            className: "CreateCustomLobbySuccessButtons AnimFadeInScaleUp",
            children: (0, uk.jsx)(Jk.o, {
              padDefaultFocus: !0,
              onClick: () => {
                (0, mk.f)("worldCreation"), Tk((0, yk.b)(gk, xk.baseOptions.name))
              },
              children: Gk("homePage:joinLobbyName", {
                lobbyName: xk.baseOptions.name
              })
            })
          })]
        }), (0, uk.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, uk.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: Gk(qk ? "homePage:createWorld" : "homePage:createCustomLobby")
          })
        }), (0, uk.jsx)(Hk.c, {
          locked: RF,
          children: (0, uk.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [!Zk && tF, Zk && (0, uk.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, uk.jsx)("div", {
                className: "SectionTitle",
                children: Gk("customLobby:generalOptions")
              }), (0, uk.jsxs)("div", {
                className: "SectionBody",
                children: [tF, (0, uk.jsx)(ik.f, {
                  label: "customLobby:visibility",
                  circleInfoText: Gk("customLobby:visibilityDescription"),
                  disabled: "Enter" !== rk,
                  children: (0, uk.jsx)(wk.c, {
                    options: Rk.r.map((kk => ({
                      value: kk,
                      label: Rk.g[kk]
                    }))),
                    value: xk.baseOptions.visibility,
                    onChange: kk => {
                      Ik("visibility", kk.value)
                    }
                  })
                })]
              })]
            }), qk && (0, uk.jsx)(Nk.c, {
              value: xk.worldOptions.defaultGamemode,
              onChange: kk => {
                kF("defaultGamemode", kk)
              },
              showAll: Zk,
              disabled: RF
            }), (qk || !(0, vk.F)(Ck) && Ck > 0) && (0, uk.jsx)(Nk.d, {
              mapTypes: qk ? Rk.D : Rk.q,
              value: xk.mapOptions.mapType,
              onChange: kk => {
                const Fk = {
                  mapType: kk
                };
                "customSchematic" !== kk && (Fk.schematicIdList = []), FF(Fk)
              },
              showAll: Zk,
              disabled: RF,
              children: "customSchematic" === xk.mapOptions.mapType && (0, uk.jsxs)(uk.Fragment, {
                children: [(0, uk.jsxs)("div", {
                  className: "SchematicListTitle AnimFadeIn",
                  children: [qk && Gk("customLobby:selectWorldSchematic"), !qk && Gk("customLobby:selectCustomLobbySchematics", {
                    schematicLimit: Ck
                  })]
                }), (0, uk.jsx)("div", {
                  className: bk()("SchematicListContainer AnimFadeIn", {
                    SchematicListContainerDisabled: "Enter" !== rk
                  }),
                  children: (0, uk.jsx)(Ak.c, {
                    loading: null === lk,
                    schematics: null !== lk && void 0 !== lk ? lk : [],
                    onSchematicPicked: function(kk) {
                      const Fk = xk.mapOptions.schematicIdList;
                      if (Fk.includes(kk.schematicId)) FF({
                        schematicIdList: Fk.filter((Fk => Fk !== kk.schematicId))
                      });
                      else {
                        if (Ck && xk.mapOptions.schematicIdList.length >= Ck) return;
                        FF({
                          schematicIdList: [...xk.mapOptions.schematicIdList, kk.schematicId]
                        })
                      }
                    },
                    selectedSchematicIdList: xk.mapOptions.schematicIdList,
                    disableAutoExport: !0
                  })
                })]
              })
            }), Zk && (0, uk.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, uk.jsx)("div", {
                className: "SectionTitle",
                children: Gk("customLobby:listedOptions")
              }), (0, uk.jsxs)("div", {
                className: "SectionBody",
                children: [(0, uk.jsx)(ik.f, {
                  label: "general:description",
                  className: "CustomLobbyDescription",
                  disabled: "Enter" !== rk,
                  children: (0, uk.jsx)(ak.e, {
                    onValueChange: (kk, Fk) => {
                      Qk("description", kk)
                    },
                    maxLength: 100,
                    defaultValue: xk.listedOptions.description
                  })
                }), (0, uk.jsx)(ik.f, {
                  label: "general:color",
                  circleInfoText: "customLobby:lobbyColorDescription",
                  disabled: "Enter" !== rk,
                  children: (0, uk.jsx)("div", {
                    className: "OtherInput",
                    children: (0, uk.jsx)("input", {
                      type: "color",
                      value: xk.listedOptions.color,
                      onChange: kk => {
                        Qk("color", kk.target.value)
                      }
                    })
                  })
                }), (0, uk.jsx)(ik.f, {
                  label: "general:emojis",
                  circleInfoText: "customLobby:lobbyEmojisDescription",
                  disabled: "Enter" !== rk,
                  children: (0, uk.jsx)(ak.e, {
                    onValueChange: (kk, Fk) => {
                      Qk("emojis", kk)
                    },
                    maxLength: 6,
                    defaultValue: xk.listedOptions.emojis
                  })
                })]
              })]
            }), Zk && qk && (0, uk.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, uk.jsx)("div", {
                className: "SectionTitle",
                children: Gk("customLobby:advancedOptions")
              }), (0, uk.jsxs)("div", {
                className: "SectionBody",
                children: [(0, uk.jsx)(ik.f, {
                  label: "classic:worldGenSeed",
                  disabled: "Enter" !== rk,
                  children: (0, uk.jsx)(ak.e, {
                    onValueChange: (kk, Fk) => {
                      kF("worldGenSeed", kk)
                    },
                    maxLength: Ok.Q
                  })
                }), (0, uk.jsx)(ik.f, {
                  label: "classic:disableProtectors",
                  disabled: "Enter" !== rk,
                  children: (0, uk.jsx)(ik.d, {
                    checked: xk.worldOptions.disableProtectors,
                    setChecked: kk => {
                      kF("disableProtectors", kk)
                    }
                  })
                }), (0, uk.jsx)(ik.f, {
                  label: "classic:disableTribeCreation",
                  disabled: "Enter" !== rk,
                  children: (0, uk.jsx)(ik.d, {
                    checked: xk.worldOptions.disableTribeCreation,
                    setChecked: kk => {
                      kF("disableTribeCreation", kk)
                    }
                  })
                }), (0, uk.jsx)(ik.f, {
                  label: "classic:voidDeathHeight",
                  circleInfoText: "classic:voidDeathHeightDescription",
                  disabled: "Enter" !== rk,
                  children: (0, uk.jsx)("input", {
                    type: "number",
                    max: Lk.z,
                    value: null !== (Xk = xk.worldOptions.voidDeathHeight) && void 0 !== Xk ? Xk : "",
                    onChange: kk => {
                      const Fk = parseInt(kk.target.value);
                      kF("voidDeathHeight", isNaN(Fk) ? null : Fk)
                    }
                  })
                }), (0, uk.jsx)(ik.f, {
                  label: "classic:disableLobbySpawn",
                  disabled: "Enter" !== rk,
                  children: (0, uk.jsx)(ik.d, {
                    checked: xk.worldOptions.disableLobbySpawn,
                    setChecked: kk => {
                      kF("disableLobbySpawn", kk)
                    }
                  })
                }), (0, uk.jsx)(ik.f, {
                  label: "classic:worldBorder",
                  circleInfoText: "classic:worldBorderDescription",
                  disabled: "Enter" !== rk,
                  children: (0, uk.jsx)("input", {
                    type: "number",
                    min: Lk.J,
                    max: Lk.C,
                    value: null !== (Mk = xk.worldOptions.worldBorder) && void 0 !== Mk ? Mk : "",
                    onChange: kk => {
                      const Fk = parseInt(kk.target.value);
                      kF("worldBorder", isNaN(Fk) ? null : Fk)
                    }
                  })
                }), (0, uk.jsx)(ik.f, {
                  label: "classic:disableMobs",
                  disabled: "Enter" !== rk,
                  children: (0, uk.jsx)(ik.d, {
                    checked: xk.worldOptions.disableMobs,
                    setChecked: kk => {
                      kF("disableMobs", kk)
                    }
                  })
                })]
              })]
            }), qk && (0, uk.jsx)(Ek.b, {
              callbacks: BF,
              disabled: "Enter" !== rk,
              advancedMode: Zk
            })]
          })
        }), (0, uk.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, uk.jsx)(Jk.o, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: "Enter" !== rk,
            onClick: () => {
              !async function() {
                if ("Enter" === rk) {
                  Dk("Loading"), Pk("");
                  try {
                    await Vk.c.createCustomLobby(xk), Dk("Success")
                  } catch (kk) {
                    Pk(kk.message), console.error(kk.message), Dk("Enter")
                  }
                }
              }()
            },
            children: Gk("general:create")
          }), qk && (0, uk.jsx)("div", {
            className: "CreateCustomLobbyAdvancedToggle",
            "data-pad-ignore": RF || void 0,
            children: (0, uk.jsx)(ik.f, {
              label: "customLobby:showAdvancedOptions",
              disabled: RF,
              onLabelClick: () => {
                pk(!Zk)
              },
              children: (0, uk.jsx)(ik.d, {
                checked: Zk,
                setChecked: pk
              })
            })
          }), zk && (0, uk.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: zk
          })]
        })]
      })
    }
  },
  36091: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => wk
    });
    var Rk = Bk(1020),
      tk = Bk.n(Rk),
      ak = Bk(61),
      Xk = Bk(4309),
      bk = Bk(1069);

    function wk(kk) {
      let {
        locked: Fk,
        children: Bk
      } = kk;
      const Rk = (0, ak.useRef)(null),
        wk = (0, Xk.b)(Rk, "y");
      return (0, bk.jsx)("div", {
        ref: Rk,
        className: tk()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: wk.before,
          CreateCustomLobbyBodyMoreBelow: wk.after
        }),
        "data-pad-ignore": Fk || void 0,
        children: Bk
      })
    }
  },
  36076: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => sk,
      g: () => Jk
    });
    var Rk = Bk(61),
      tk = Bk(1300),
      ak = Bk(1149),
      Xk = Bk(1288),
      bk = Bk(3284),
      wk = Bk(4635),
      dk = Bk(1069);

    function sk(kk) {
      let {
        loading: Fk,
        schematics: Bk,
        onSchematicPicked: Rk,
        selectedSchematicIdList: tk = [],
        disableAutoExport: wk
      } = kk;
      const {
        t: sk
      } = (0, ak.x)();
      return (0, dk.jsxs)("div", {
        className: "SchematicList",
        children: [Fk && (0, dk.jsx)(Xk.b, {}), !Fk && 0 === Bk.length && (0, dk.jsx)("div", {
          className: "NoSchematicsText",
          children: sk("worldBuilder:noSavedSchematic")
        }), !Fk && Bk.map((kk => (0, dk.jsx)(bk.g, {
          source: {
            type: "schematic",
            schematic: kk
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            Rk(kk)
          },
          isSelected: tk.includes(kk.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: kk.isAutoExported && wk,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, kk.schematicId)))]
      })
    }

    function Vk(kk) {
      let {
        ownedSchematics: Fk,
        currentWorldSchematicId: Bk,
        onClose: tk
      } = kk;
      const {
        t: Xk
      } = (0, ak.x)(), [bk, Vk] = (0, Rk.useState)(null);
      return (0, dk.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === bk && (0, dk.jsxs)(dk.Fragment, {
          children: [(0, dk.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: Xk("worldBuilder:schematicList")
          }), (0, dk.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: Xk("worldBuilder:clickSchematicForOptions")
          }), (0, dk.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, dk.jsx)(sk, {
              loading: !1,
              schematics: Fk,
              onSchematicPicked: kk => {
                Vk(kk)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== bk && (0, dk.jsx)(wk.h, {
          schematic: bk,
          inSourceWorld: bk.schematicId === Bk,
          onSchematicUpdate: kk => {
            Vk(kk)
          },
          onClose: () => {
            Vk(null), tk()
          }
        })]
      })
    }

    function Jk(kk) {
      let {
        ownedSchematics: Fk,
        currentWorldSchematicId: Bk,
        onClose: Rk
      } = kk;
      tk.NotificationProvider.showCustomPopup({
        body: kk => (0, dk.jsx)(Vk, {
          ownedSchematics: Fk,
          currentWorldSchematicId: Bk,
          onClose: kk
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: Rk,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  36083: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => dk,
      d: () => sk
    });
    Bk(61);
    var Rk = Bk(1020),
      tk = Bk.n(Rk),
      ak = Bk(4366),
      Xk = Bk(279),
      bk = Bk(1149),
      wk = Bk(1069);

    function dk(kk) {
      let {
        value: Fk,
        onChange: Bk,
        showAll: Rk,
        disabled: dk = !1
      } = kk;
      const {
        t: sk
      } = (0, bk.x)();
      return (0, wk.jsxs)("div", {
        className: tk()("BloxdForm GamemodeForm", {
          BasicOptions: !Rk
        }),
        children: [(0, wk.jsx)("div", {
          className: "SectionTitle",
          children: sk("classic:defaultGamemode")
        }), (0, wk.jsx)("div", {
          className: "SectionBody",
          children: ak.C.map((kk => Rk || (0, ak.w)(kk) ? (0, wk.jsx)("button", {
            type: "button",
            className: tk()("WorldGamemode", {
              Selected: Fk === kk
            }),
            disabled: dk,
            onClick: () => {
              Bk(kk)
            },
            style: {
              "--background-image": `url(${Xk.t[kk]})`
            },
            children: Xk.r[kk]
          }, kk) : null))
        })]
      })
    }

    function sk(kk) {
      let {
        mapTypes: Fk,
        value: Bk,
        onChange: Rk,
        showAll: dk,
        disabled: sk = !1,
        children: Vk
      } = kk;
      const {
        t: Jk
      } = (0, bk.x)();
      return (0, wk.jsxs)("div", {
        className: tk()("BloxdForm MapTypeForm", {
          BasicOptions: !dk
        }),
        children: [(0, wk.jsx)("div", {
          className: "SectionTitle",
          children: Jk("customLobby:mapType")
        }), (0, wk.jsx)("div", {
          className: "SectionBody",
          children: Fk.map((kk => dk || (0, ak.x)(kk) ? (0, wk.jsx)("button", {
            type: "button",
            className: tk()("MapType", {
              Selected: Bk === kk
            }),
            disabled: sk,
            onClick: () => {
              Rk(kk)
            },
            style: {
              "--background-image": `url(${Xk.o[kk]})`
            },
            children: Xk.k[kk]
          }, kk) : null))
        }), Vk]
      })
    }
  },
  36068: () => {}
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);