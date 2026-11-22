export const id = 214;
export const ids = [214];
export const modules = {
  35902: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      CreateCustomLobby: () => uk
    });
    ik(35905);
    var Dk = ik(4563),
      fk = ik(60),
      Sk = ik(1648),
      bk = ik(1021),
      rk = ik.n(bk),
      Pk = ik(3098),
      mk = ik(1104),
      Mk = ik(1177),
      Kk = ik(4528),
      xk = ik(1410),
      nk = ik(35908),
      Uk = ik(1172),
      Hk = ik(1311),
      wk = ik(1479),
      lk = ik(22),
      pk = ik(1415),
      yk = ik(594),
      Yk = ik(4869),
      Lk = ik(741),
      Ck = ik(1218),
      Ak = ik(1207),
      jk = ik(4874),
      sk = ik(1033),
      dk = ik(35913),
      Vk = ik(35917),
      Fk = ik(1066);

    function uk(kk) {
      var ek, ik, bk, uk;
      let {
        gameNameWithVariation: qk,
        close: Ik,
        initialDefaultGamemode: zk
      } = kk;
      const {
        t: Qk
      } = (0, Uk.D)(), vk = (0, wk.useNavigatePreserveSearch)(), [Ek, hk] = (0, fk.useState)("Enter"), [ak, Wk] = (0, fk.useState)(""), tk = fk.useRef(null), Xk = null === (ek = Lk.d[qk]) || void 0 === ek ? void 0 : ek.showWorldsInsteadOfCustomLobbies, Bk = Xk ? 1 : null === (ik = Lk.d[qk]) || void 0 === ik ? void 0 : ik.customLobbyCustomSchematicLimit, [ck, Tk] = (0, fk.useState)(!Xk);
      zk || (zk = "classic_creative" === qk || "classic_creativeFlat" === qk ? "creative" : "classic" === qk ? "peaceful" : "survival");
      const Zk = {
        baseOptions: {
          gameNameWithVariation: Xk ? "classic" : qk,
          name: "",
          visibility: "unlisted"
        },
        listedOptions: {
          description: "",
          color: "",
          emojis: ""
        },
        mapOptions: {
          mapType: "classic_creativeFlat" === qk ? "flat" : "default",
          schematicIdList: []
        },
        worldOptions: null
      };
      Xk && (Zk.worldOptions = {
        defaultGamemode: zk,
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
      const [Ok, gk] = (0, fk.useState)(Zk), [Gk, Nk] = (0, fk.useState)(null);

      function Rk(kk, ek) {
        gk({
          ...Ok,
          baseOptions: {
            ...Ok.baseOptions,
            [kk]: ek
          }
        })
      }

      function Jk(kk, ek) {
        gk({
          ...Ok,
          listedOptions: {
            ...Ok.listedOptions,
            [kk]: ek
          }
        })
      }

      function ke(kk, ek) {
        gk({
          ...Ok,
          worldOptions: {
            ...Ok.worldOptions,
            [kk]: ek
          }
        })
      }

      function ee(kk) {
        gk({
          ...Ok,
          mapOptions: {
            ...Ok.mapOptions,
            ...kk
          }
        })
      }(0, fk.useEffect)((() => {
        Kk.d.getNewStarterName().then((kk => {
          gk((ek => "" !== ek.baseOptions.name ? ek : {
            ...ek,
            baseOptions: {
              ...ek.baseOptions,
              name: kk
            }
          }))
        })).catch((kk => {
          console.error("Error getting new starter name:", kk)
        }))
      }), []), (0, fk.useEffect)((() => {
        "customSchematic" === Ok.mapOptions.mapType && null === Gk && (0, mk.postJsonWithMetricsCookiesAndJsonResponse)(`${Mk.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
          retries: 0,
          minTimeout: 3e3
        }).then((kk => {
          Nk(kk)
        }))
      }), [Ok.mapOptions.mapType, Gk]);
      const ie = {
          tpRequests: {
            isEnabled: () => !Ok.worldOptions.disableTpRequests,
            bV: kk => {
              ke("disableTpRequests", !kk)
            }
          },
          spawnProtection: {
            isEnabled: () => Ok.worldOptions.spawnProtection,
            bV: kk => {
              ke("spawnProtection", kk)
            }
          },
          spawnReset: {
            isEnabled: () => Ok.worldOptions.enableSpawnReset,
            bV: kk => {
              ke("enableSpawnReset", kk)
            }
          },
          smpMarketplace: {
            isEnabled: () => Ok.worldOptions.enableSmpMarketplace,
            bV: kk => {
              ke("enableSmpMarketplace", kk)
            }
          },
          survivalGuns: {
            isEnabled: () => Ok.worldOptions.enableSurvivalGuns,
            bV: kk => {
              ke("enableSurvivalGuns", kk)
            }
          },
          fallDamage: {
            isEnabled: () => !Ok.worldOptions.disableFallDamage,
            bV: kk => {
              ke("disableFallDamage", !kk)
            }
          },
          dayNight: {
            isEnabled: () => Ok.worldOptions.enableDayNight,
            bV: kk => {
              ke("enableDayNight", kk)
            }
          }
        },
        De = "Enter" !== Ek,
        fe = (0, Fk.jsx)(Yk.f, {
          className: "NameInput",
          label: "general:name",
          disabled: "Enter" !== Ek,
          children: (0, Fk.jsx)(Sk.b, {
            domRef: tk,
            onValueChange: (kk, ek) => {
              const ik = (0, Ak.sb)(kk);
              Rk("name", ik), tk.current.value = ik
            },
            maxLength: Ak.M,
            defaultValue: Ok.baseOptions.name
          })
        });
      return (0, Fk.jsxs)("div", {
        className: rk()("CreateCustomLobby", {
          CreateCustomLobbySuccess: "Success" === Ek,
          AdvancedMode: ck
        }),
        children: ["Success" === Ek && (0, Fk.jsxs)("div", {
          className: "CreateCustomLobbySuccessOverlay",
          children: [(0, Fk.jsxs)("div", {
            className: "CreateCustomLobbySuccessTitle FullyFancyText AnimFadeInScaleUp",
            children: [(0, Fk.jsx)(sk.d, {
              name: "check"
            }), (0, Fk.jsx)(pk.b, {})]
          }), (0, Fk.jsx)("div", {
            className: "CreateCustomLobbySuccessButtons AnimFadeInScaleUp",
            children: (0, Fk.jsx)(xk.r, {
              padDefaultFocus: !0,
              onClick: () => {
                (0, lk.j)("worldCreation"), vk((0, Hk.d)(qk, Ok.baseOptions.name))
              },
              children: Qk("homePage:joinLobbyName", {
                lobbyName: Ok.baseOptions.name
              })
            })
          })]
        }), (0, Fk.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, Fk.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: Qk(Xk ? "homePage:createWorld" : "homePage:createCustomLobby")
          })
        }), (0, Fk.jsx)(Vk.b, {
          locked: De,
          children: (0, Fk.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [!ck && fe, ck && (0, Fk.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, Fk.jsx)("div", {
                className: "SectionTitle",
                children: Qk("customLobby:generalOptions")
              }), (0, Fk.jsxs)("div", {
                className: "SectionBody",
                children: [fe, (0, Fk.jsx)(Yk.f, {
                  label: "customLobby:visibility",
                  circleInfoText: Qk("customLobby:visibilityDescription"),
                  disabled: "Enter" !== Ek,
                  children: (0, Fk.jsx)(Pk.e, {
                    options: Dk.t.map((kk => ({
                      value: kk,
                      label: Dk.f[kk]
                    }))),
                    value: Ok.baseOptions.visibility,
                    onChange: kk => {
                      Rk("visibility", kk.value)
                    }
                  })
                })]
              })]
            }), Xk && (0, Fk.jsx)(dk.b, {
              value: Ok.worldOptions.defaultGamemode,
              onChange: kk => {
                ke("defaultGamemode", kk)
              },
              showAll: ck,
              disabled: De
            }), (Xk || !(0, yk.F)(Bk) && Bk > 0) && (0, Fk.jsx)(dk.d, {
              mapTypes: Xk ? Dk.K : Dk.p,
              value: Ok.mapOptions.mapType,
              onChange: kk => {
                const ek = {
                  mapType: kk
                };
                "customSchematic" !== kk && (ek.schematicIdList = []), ee(ek)
              },
              showAll: ck,
              disabled: De,
              children: "customSchematic" === Ok.mapOptions.mapType && (0, Fk.jsxs)(Fk.Fragment, {
                children: [(0, Fk.jsxs)("div", {
                  className: "SchematicListTitle AnimFadeIn",
                  children: [Xk && Qk("customLobby:selectWorldSchematic"), !Xk && Qk("customLobby:selectCustomLobbySchematics", {
                    schematicLimit: Bk
                  })]
                }), (0, Fk.jsx)("div", {
                  className: rk()("SchematicListContainer AnimFadeIn", {
                    SchematicListContainerDisabled: "Enter" !== Ek
                  }),
                  children: (0, Fk.jsx)(nk.b, {
                    loading: null === Gk,
                    schematics: null !== Gk && void 0 !== Gk ? Gk : [],
                    onSchematicPicked: function(kk) {
                      const ek = Ok.mapOptions.schematicIdList;
                      if (ek.includes(kk.schematicId)) ee({
                        schematicIdList: ek.filter((ek => ek !== kk.schematicId))
                      });
                      else {
                        if (Bk && Ok.mapOptions.schematicIdList.length >= Bk) return;
                        ee({
                          schematicIdList: [...Ok.mapOptions.schematicIdList, kk.schematicId]
                        })
                      }
                    },
                    selectedSchematicIdList: Ok.mapOptions.schematicIdList,
                    disableAutoExport: !0
                  })
                })]
              })
            }), ck && (0, Fk.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, Fk.jsx)("div", {
                className: "SectionTitle",
                children: Qk("customLobby:listedOptions")
              }), (0, Fk.jsxs)("div", {
                className: "SectionBody",
                children: [(0, Fk.jsx)(Yk.f, {
                  label: "general:description",
                  className: "CustomLobbyDescription",
                  disabled: "Enter" !== Ek,
                  children: (0, Fk.jsx)(Sk.b, {
                    onValueChange: (kk, ek) => {
                      Jk("description", kk)
                    },
                    maxLength: 100,
                    defaultValue: Ok.listedOptions.description
                  })
                }), (0, Fk.jsx)(Yk.f, {
                  label: "general:color",
                  circleInfoText: "customLobby:lobbyColorDescription",
                  disabled: "Enter" !== Ek,
                  children: (0, Fk.jsx)("div", {
                    className: "OtherInput",
                    children: (0, Fk.jsx)("input", {
                      type: "color",
                      value: Ok.listedOptions.color,
                      onChange: kk => {
                        Jk("color", kk.target.value)
                      }
                    })
                  })
                }), (0, Fk.jsx)(Yk.f, {
                  label: "general:emojis",
                  circleInfoText: "customLobby:lobbyEmojisDescription",
                  disabled: "Enter" !== Ek,
                  children: (0, Fk.jsx)(Sk.b, {
                    onValueChange: (kk, ek) => {
                      Jk("emojis", kk)
                    },
                    maxLength: 6,
                    defaultValue: Ok.listedOptions.emojis
                  })
                })]
              })]
            }), ck && Xk && (0, Fk.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, Fk.jsx)("div", {
                className: "SectionTitle",
                children: Qk("customLobby:advancedOptions")
              }), (0, Fk.jsxs)("div", {
                className: "SectionBody",
                children: [(0, Fk.jsx)(Yk.f, {
                  label: "classic:worldGenSeed",
                  disabled: "Enter" !== Ek,
                  children: (0, Fk.jsx)(Sk.b, {
                    onValueChange: (kk, ek) => {
                      ke("worldGenSeed", kk)
                    },
                    maxLength: Ak.M
                  })
                }), (0, Fk.jsx)(Yk.f, {
                  label: "classic:disableProtectors",
                  disabled: "Enter" !== Ek,
                  children: (0, Fk.jsx)(Yk.d, {
                    checked: Ok.worldOptions.disableProtectors,
                    setChecked: kk => {
                      ke("disableProtectors", kk)
                    }
                  })
                }), (0, Fk.jsx)(Yk.f, {
                  label: "classic:disableTribeCreation",
                  disabled: "Enter" !== Ek,
                  children: (0, Fk.jsx)(Yk.d, {
                    checked: Ok.worldOptions.disableTribeCreation,
                    setChecked: kk => {
                      ke("disableTribeCreation", kk)
                    }
                  })
                }), (0, Fk.jsx)(Yk.f, {
                  label: "classic:voidDeathHeight",
                  circleInfoText: "classic:voidDeathHeightDescription",
                  disabled: "Enter" !== Ek,
                  children: (0, Fk.jsx)("input", {
                    type: "number",
                    max: Ck.F,
                    value: null !== (bk = Ok.worldOptions.voidDeathHeight) && void 0 !== bk ? bk : "",
                    onChange: kk => {
                      const ek = parseInt(kk.target.value);
                      ke("voidDeathHeight", isNaN(ek) ? null : ek)
                    }
                  })
                }), (0, Fk.jsx)(Yk.f, {
                  label: "classic:disableLobbySpawn",
                  disabled: "Enter" !== Ek,
                  children: (0, Fk.jsx)(Yk.d, {
                    checked: Ok.worldOptions.disableLobbySpawn,
                    setChecked: kk => {
                      ke("disableLobbySpawn", kk)
                    }
                  })
                }), (0, Fk.jsx)(Yk.f, {
                  label: "classic:worldBorder",
                  circleInfoText: "classic:worldBorderDescription",
                  disabled: "Enter" !== Ek,
                  children: (0, Fk.jsx)("input", {
                    type: "number",
                    min: Ck.M,
                    max: Ck.G,
                    value: null !== (uk = Ok.worldOptions.worldBorder) && void 0 !== uk ? uk : "",
                    onChange: kk => {
                      const ek = parseInt(kk.target.value);
                      ke("worldBorder", isNaN(ek) ? null : ek)
                    }
                  })
                }), (0, Fk.jsx)(Yk.f, {
                  label: "classic:disableMobs",
                  disabled: "Enter" !== Ek,
                  children: (0, Fk.jsx)(Yk.d, {
                    checked: Ok.worldOptions.disableMobs,
                    setChecked: kk => {
                      ke("disableMobs", kk)
                    }
                  })
                })]
              })]
            }), Xk && (0, Fk.jsx)(jk.e, {
              callbacks: ie,
              disabled: "Enter" !== Ek,
              advancedMode: ck
            })]
          })
        }), (0, Fk.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, Fk.jsx)(xk.r, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: "Enter" !== Ek,
            onClick: () => {
              !async function() {
                if ("Enter" === Ek) {
                  hk("Loading"), Wk("");
                  try {
                    await Kk.d.createCustomLobby(Ok), hk("Success")
                  } catch (kk) {
                    Wk(kk.message), console.error(kk.message), hk("Enter")
                  }
                }
              }()
            },
            children: Qk("general:create")
          }), Xk && (0, Fk.jsx)("div", {
            className: "CreateCustomLobbyAdvancedToggle",
            "data-pad-ignore": De || void 0,
            children: (0, Fk.jsx)(Yk.f, {
              label: "customLobby:showAdvancedOptions",
              disabled: De,
              onLabelClick: () => {
                Tk(!ck)
              },
              children: (0, Fk.jsx)(Yk.d, {
                checked: ck,
                setChecked: Tk
              })
            })
          }), ak && (0, Fk.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: ak
          })]
        })]
      })
    }
  },
  35917: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Pk
    });
    var Dk = ik(1021),
      fk = ik.n(Dk),
      Sk = ik(60),
      bk = ik(4519),
      rk = ik(1066);

    function Pk(kk) {
      let {
        locked: ek,
        children: ik
      } = kk;
      const Dk = (0, Sk.useRef)(null),
        Pk = (0, bk.e)(Dk, "y");
      return (0, rk.jsx)("div", {
        ref: Dk,
        className: fk()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: Pk.before,
          CreateCustomLobbyBodyMoreBelow: Pk.after
        }),
        "data-pad-ignore": ek || void 0,
        children: ik
      })
    }
  },
  35908: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Mk,
      f: () => xk
    });
    var Dk = ik(60),
      fk = ik(1333),
      Sk = ik(1172),
      bk = ik(1327),
      rk = ik(3433),
      Pk = ik(4860),
      mk = ik(1066);

    function Mk(kk) {
      let {
        loading: ek,
        schematics: ik,
        onSchematicPicked: Dk,
        selectedSchematicIdList: fk = [],
        disableAutoExport: Pk
      } = kk;
      const {
        t: Mk
      } = (0, Sk.D)();
      return (0, mk.jsxs)("div", {
        className: "SchematicList",
        children: [ek && (0, mk.jsx)(bk.d, {}), !ek && 0 === ik.length && (0, mk.jsx)("div", {
          className: "NoSchematicsText",
          children: Mk("worldBuilder:noSavedSchematic")
        }), !ek && ik.map((kk => (0, mk.jsx)(rk.g, {
          source: {
            type: "schematic",
            schematic: kk
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            Dk(kk)
          },
          isSelected: fk.includes(kk.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: kk.isAutoExported && Pk,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, kk.schematicId)))]
      })
    }

    function Kk(kk) {
      let {
        ownedSchematics: ek,
        currentWorldSchematicId: ik,
        onClose: fk
      } = kk;
      const {
        t: bk
      } = (0, Sk.D)(), [rk, Kk] = (0, Dk.useState)(null);
      return (0, mk.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === rk && (0, mk.jsxs)(mk.Fragment, {
          children: [(0, mk.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: bk("worldBuilder:schematicList")
          }), (0, mk.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: bk("worldBuilder:clickSchematicForOptions")
          }), (0, mk.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, mk.jsx)(Mk, {
              loading: !1,
              schematics: ek,
              onSchematicPicked: kk => {
                Kk(kk)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== rk && (0, mk.jsx)(Pk.h, {
          schematic: rk,
          inSourceWorld: rk.schematicId === ik,
          onSchematicUpdate: kk => {
            Kk(kk)
          },
          onClose: () => {
            Kk(null), fk()
          }
        })]
      })
    }

    function xk(kk) {
      let {
        ownedSchematics: ek,
        currentWorldSchematicId: ik,
        onClose: Dk
      } = kk;
      fk.NotificationProvider.showCustomPopup({
        body: kk => (0, mk.jsx)(Kk, {
          ownedSchematics: ek,
          currentWorldSchematicId: ik,
          onClose: kk
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: Dk,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  35913: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => mk,
      d: () => Mk
    });
    ik(60);
    var Dk = ik(1021),
      fk = ik.n(Dk),
      Sk = ik(4563),
      bk = ik(302),
      rk = ik(1172),
      Pk = ik(1066);

    function mk(kk) {
      let {
        value: ek,
        onChange: ik,
        showAll: Dk,
        disabled: mk = !1
      } = kk;
      const {
        t: Mk
      } = (0, rk.D)();
      return (0, Pk.jsxs)("div", {
        className: fk()("BloxdForm GamemodeForm", {
          BasicOptions: !Dk
        }),
        children: [(0, Pk.jsx)("div", {
          className: "SectionTitle",
          children: Mk("classic:defaultGamemode")
        }), (0, Pk.jsx)("div", {
          className: "SectionBody",
          children: Sk.G.map((kk => Dk || (0, Sk.z)(kk) ? (0, Pk.jsx)("button", {
            type: "button",
            className: fk()("WorldGamemode", {
              Selected: ek === kk
            }),
            disabled: mk,
            onClick: () => {
              ik(kk)
            },
            style: {
              "--background-image": `url(${bk.w[kk]})`
            },
            children: bk.t[kk]
          }, kk) : null))
        })]
      })
    }

    function Mk(kk) {
      let {
        mapTypes: ek,
        value: ik,
        onChange: Dk,
        showAll: mk,
        disabled: Mk = !1,
        children: Kk
      } = kk;
      const {
        t: xk
      } = (0, rk.D)();
      return (0, Pk.jsxs)("div", {
        className: fk()("BloxdForm MapTypeForm", {
          BasicOptions: !mk
        }),
        children: [(0, Pk.jsx)("div", {
          className: "SectionTitle",
          children: xk("customLobby:mapType")
        }), (0, Pk.jsx)("div", {
          className: "SectionBody",
          children: ek.map((kk => mk || (0, Sk.A)(kk) ? (0, Pk.jsx)("button", {
            type: "button",
            className: fk()("MapType", {
              Selected: ik === kk
            }),
            disabled: Mk,
            onClick: () => {
              Dk(kk)
            },
            style: {
              "--background-image": `url(${bk.n[kk]})`
            },
            children: bk.l[kk]
          }, kk) : null))
        }), Kk]
      })
    }
  },
  35905: () => {}
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);