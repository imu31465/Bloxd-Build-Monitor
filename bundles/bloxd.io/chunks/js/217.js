export const id = 217;
export const ids = [217];
export const modules = {
  36539: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      CreateCustomLobby: () => Ep
    });
    cp(36543);
    var Op = cp(4719),
      op = cp(62),
      Ip = cp(1692),
      Sp = cp(1049),
      xp = cp.n(Sp),
      Lp = cp(3224),
      Yp = cp(1149),
      Dp = cp(1211),
      Ap = cp(4677),
      Pp = cp(1480),
      Wp = cp(36549),
      yp = cp(1201),
      Up = cp(1356),
      wp = cp(1538),
      vp = cp(25),
      tp = cp(1482),
      Hp = cp(640),
      dp = cp(5052),
      ep = cp(768),
      jp = cp(1251),
      kp = cp(1234),
      mp = cp(5061),
      Rp = cp(1060),
      qp = cp(36557),
      Mp = cp(36565),
      Cp = cp(1112);

    function Ep(pp) {
      var ip, cp, Sp, Ep;
      let {
        gameNameWithVariation: Xp,
        close: lp,
        initialDefaultGamemode: Qp
      } = pp;
      const {
        t: Jp
      } = (0, yp.H)(), Bp = (0, wp.useNavigatePreserveSearch)(), [Np, Tp] = (0, op.useState)("Enter"), [fp, bp] = (0, op.useState)(""), hp = op.useRef(null), ap = null === (ip = ep.c[Xp]) || void 0 === ip ? void 0 : ip.showWorldsInsteadOfCustomLobbies, np = ap ? 1 : null === (cp = ep.c[Xp]) || void 0 === cp ? void 0 : cp.customLobbyCustomSchematicLimit, [Fp, gp] = (0, op.useState)(!ap);
      Qp || (Qp = "classic_creative" === Xp || "classic_creativeFlat" === Xp ? "creative" : "classic" === Xp ? "peaceful" : "survival");
      const Gp = {
        baseOptions: {
          gameNameWithVariation: ap ? "classic" : Xp,
          name: "",
          visibility: "unlisted"
        },
        listedOptions: {
          description: "",
          color: "",
          emojis: ""
        },
        mapOptions: {
          mapType: "classic_creativeFlat" === Xp ? "flat" : "default",
          schematicIdList: []
        },
        worldOptions: null
      };
      ap && (Gp.worldOptions = {
        defaultGamemode: Qp,
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
      const [rp, Zp] = (0, op.useState)(Gp), [zp, sp] = (0, op.useState)(null);

      function Kp(pp, ip) {
        Zp({
          ...rp,
          baseOptions: {
            ...rp.baseOptions,
            [pp]: ip
          }
        })
      }

      function Vp(pp, ip) {
        Zp({
          ...rp,
          listedOptions: {
            ...rp.listedOptions,
            [pp]: ip
          }
        })
      }

      function ii(pp, ip) {
        Zp({
          ...rp,
          worldOptions: {
            ...rp.worldOptions,
            [pp]: ip
          }
        })
      }

      function ci(pp) {
        Zp({
          ...rp,
          mapOptions: {
            ...rp.mapOptions,
            ...pp
          }
        })
      }(0, op.useEffect)((() => {
        Ap.b.getNewStarterName().then((pp => {
          Zp((ip => "" !== ip.baseOptions.name ? ip : {
            ...ip,
            baseOptions: {
              ...ip.baseOptions,
              name: pp
            }
          }))
        })).catch((pp => {
          console.error("Error getting new starter name:", pp)
        }))
      }), []), (0, op.useEffect)((() => {
        "customSchematic" === rp.mapOptions.mapType && null === zp && (0, Yp.postJsonWithMetricsCookiesAndJsonResponse)(`${Dp.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
          retries: 0,
          minTimeout: 3e3
        }).then((pp => {
          sp(pp)
        }))
      }), [rp.mapOptions.mapType, zp]);
      const Oi = {
          tpRequests: {
            isEnabled: () => !rp.worldOptions.disableTpRequests,
            eC: pp => {
              ii("disableTpRequests", !pp)
            }
          },
          spawnProtection: {
            isEnabled: () => rp.worldOptions.spawnProtection,
            eC: pp => {
              ii("spawnProtection", pp)
            }
          },
          spawnReset: {
            isEnabled: () => rp.worldOptions.enableSpawnReset,
            eC: pp => {
              ii("enableSpawnReset", pp)
            }
          },
          smpMarketplace: {
            isEnabled: () => rp.worldOptions.enableSmpMarketplace,
            eC: pp => {
              ii("enableSmpMarketplace", pp)
            }
          },
          survivalGuns: {
            isEnabled: () => rp.worldOptions.enableSurvivalGuns,
            eC: pp => {
              ii("enableSurvivalGuns", pp)
            }
          },
          fallDamage: {
            isEnabled: () => !rp.worldOptions.disableFallDamage,
            eC: pp => {
              ii("disableFallDamage", !pp)
            }
          },
          dayNight: {
            isEnabled: () => rp.worldOptions.enableDayNight,
            eC: pp => {
              ii("enableDayNight", pp)
            }
          }
        },
        oi = "Enter" !== Np,
        Ii = (0, Cp.jsx)(dp.i, {
          className: "NameInput",
          label: "general:name",
          disabled: "Enter" !== Np,
          children: (0, Cp.jsx)(Ip.c, {
            domRef: hp,
            onValueChange: (pp, ip) => {
              const cp = (0, kp.rb)(pp);
              Kp("name", cp), hp.current.value = cp
            },
            maxLength: kp.M,
            defaultValue: rp.baseOptions.name
          })
        });
      return (0, Cp.jsxs)("div", {
        className: xp()("CreateCustomLobby", {
          CreateCustomLobbySuccess: "Success" === Np,
          AdvancedMode: Fp
        }),
        children: ["Success" === Np && (0, Cp.jsxs)("div", {
          className: "CreateCustomLobbySuccessOverlay",
          children: [(0, Cp.jsxs)("div", {
            className: "CreateCustomLobbySuccessTitle FullyFancyText AnimFadeInScaleUp",
            children: [(0, Cp.jsx)(Rp.d, {
              name: "check"
            }), (0, Cp.jsx)(tp.b, {})]
          }), (0, Cp.jsx)("div", {
            className: "CreateCustomLobbySuccessButtons AnimFadeInScaleUp",
            children: (0, Cp.jsx)(Pp.o, {
              padDefaultFocus: !0,
              onClick: () => {
                (0, vp.k)("worldCreation"), Bp((0, Up.c)(Xp, rp.baseOptions.name))
              },
              children: Jp("homePage:joinLobbyName", {
                lobbyName: rp.baseOptions.name
              })
            })
          })]
        }), (0, Cp.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, Cp.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: Jp(ap ? "homePage:createWorld" : "homePage:createCustomLobby")
          })
        }), (0, Cp.jsx)(Mp.b, {
          locked: oi,
          children: (0, Cp.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [!Fp && Ii, Fp && (0, Cp.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, Cp.jsx)("div", {
                className: "SectionTitle",
                children: Jp("customLobby:generalOptions")
              }), (0, Cp.jsxs)("div", {
                className: "SectionBody",
                children: [Ii, (0, Cp.jsx)(dp.i, {
                  label: "customLobby:visibility",
                  circleInfoText: Jp("customLobby:visibilityDescription"),
                  disabled: "Enter" !== Np,
                  children: (0, Cp.jsx)(Lp.d, {
                    options: Op.o.map((pp => ({
                      value: pp,
                      label: Op.d[pp]
                    }))),
                    value: rp.baseOptions.visibility,
                    onChange: pp => {
                      Kp("visibility", pp.value)
                    }
                  })
                })]
              })]
            }), ap && (0, Cp.jsx)(qp.e, {
              value: rp.worldOptions.defaultGamemode,
              onChange: pp => {
                ii("defaultGamemode", pp)
              },
              showAll: Fp,
              disabled: oi
            }), (ap || !(0, Hp.G)(np) && np > 0) && (0, Cp.jsx)(qp.i, {
              mapTypes: ap ? Op.G : Op.m,
              value: rp.mapOptions.mapType,
              onChange: pp => {
                const ip = {
                  mapType: pp
                };
                "customSchematic" !== pp && (ip.schematicIdList = []), ci(ip)
              },
              showAll: Fp,
              disabled: oi,
              children: "customSchematic" === rp.mapOptions.mapType && (0, Cp.jsxs)(Cp.Fragment, {
                children: [(0, Cp.jsxs)("div", {
                  className: "SchematicListTitle AnimFadeIn",
                  children: [ap && Jp("customLobby:selectWorldSchematic"), !ap && Jp("customLobby:selectCustomLobbySchematics", {
                    schematicLimit: np
                  })]
                }), (0, Cp.jsx)("div", {
                  className: xp()("SchematicListContainer AnimFadeIn", {
                    SchematicListContainerDisabled: "Enter" !== Np
                  }),
                  children: (0, Cp.jsx)(Wp.c, {
                    loading: null === zp,
                    schematics: null !== zp && void 0 !== zp ? zp : [],
                    onSchematicPicked: function(pp) {
                      const ip = rp.mapOptions.schematicIdList;
                      if (ip.includes(pp.schematicId)) ci({
                        schematicIdList: ip.filter((ip => ip !== pp.schematicId))
                      });
                      else {
                        if (np && rp.mapOptions.schematicIdList.length >= np) return;
                        ci({
                          schematicIdList: [...rp.mapOptions.schematicIdList, pp.schematicId]
                        })
                      }
                    },
                    selectedSchematicIdList: rp.mapOptions.schematicIdList,
                    disableAutoExport: !0
                  })
                })]
              })
            }), Fp && (0, Cp.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, Cp.jsx)("div", {
                className: "SectionTitle",
                children: Jp("customLobby:listedOptions")
              }), (0, Cp.jsxs)("div", {
                className: "SectionBody",
                children: [(0, Cp.jsx)(dp.i, {
                  label: "general:description",
                  className: "CustomLobbyDescription",
                  disabled: "Enter" !== Np,
                  children: (0, Cp.jsx)(Ip.c, {
                    onValueChange: (pp, ip) => {
                      Vp("description", pp)
                    },
                    maxLength: 100,
                    defaultValue: rp.listedOptions.description
                  })
                }), (0, Cp.jsx)(dp.i, {
                  label: "general:color",
                  circleInfoText: "customLobby:lobbyColorDescription",
                  disabled: "Enter" !== Np,
                  children: (0, Cp.jsx)("div", {
                    className: "OtherInput",
                    children: (0, Cp.jsx)("input", {
                      type: "color",
                      value: rp.listedOptions.color,
                      onChange: pp => {
                        Vp("color", pp.target.value)
                      }
                    })
                  })
                }), (0, Cp.jsx)(dp.i, {
                  label: "general:emojis",
                  circleInfoText: "customLobby:lobbyEmojisDescription",
                  disabled: "Enter" !== Np,
                  children: (0, Cp.jsx)(Ip.c, {
                    onValueChange: (pp, ip) => {
                      Vp("emojis", pp)
                    },
                    maxLength: 6,
                    defaultValue: rp.listedOptions.emojis
                  })
                })]
              })]
            }), Fp && ap && (0, Cp.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, Cp.jsx)("div", {
                className: "SectionTitle",
                children: Jp("customLobby:advancedOptions")
              }), (0, Cp.jsxs)("div", {
                className: "SectionBody",
                children: [(0, Cp.jsx)(dp.i, {
                  label: "classic:worldGenSeed",
                  disabled: "Enter" !== Np,
                  children: (0, Cp.jsx)(Ip.c, {
                    onValueChange: (pp, ip) => {
                      ii("worldGenSeed", pp)
                    },
                    maxLength: kp.M
                  })
                }), (0, Cp.jsx)(dp.i, {
                  label: "classic:disableProtectors",
                  disabled: "Enter" !== Np,
                  children: (0, Cp.jsx)(dp.e, {
                    checked: rp.worldOptions.disableProtectors,
                    setChecked: pp => {
                      ii("disableProtectors", pp)
                    }
                  })
                }), (0, Cp.jsx)(dp.i, {
                  label: "classic:disableTribeCreation",
                  disabled: "Enter" !== Np,
                  children: (0, Cp.jsx)(dp.e, {
                    checked: rp.worldOptions.disableTribeCreation,
                    setChecked: pp => {
                      ii("disableTribeCreation", pp)
                    }
                  })
                }), (0, Cp.jsx)(dp.i, {
                  label: "classic:voidDeathHeight",
                  circleInfoText: "classic:voidDeathHeightDescription",
                  disabled: "Enter" !== Np,
                  children: (0, Cp.jsx)("input", {
                    type: "number",
                    max: jp.F,
                    value: null !== (Sp = rp.worldOptions.voidDeathHeight) && void 0 !== Sp ? Sp : "",
                    onChange: pp => {
                      const ip = parseInt(pp.target.value);
                      ii("voidDeathHeight", isNaN(ip) ? null : ip)
                    }
                  })
                }), (0, Cp.jsx)(dp.i, {
                  label: "classic:disableLobbySpawn",
                  disabled: "Enter" !== Np,
                  children: (0, Cp.jsx)(dp.e, {
                    checked: rp.worldOptions.disableLobbySpawn,
                    setChecked: pp => {
                      ii("disableLobbySpawn", pp)
                    }
                  })
                }), (0, Cp.jsx)(dp.i, {
                  label: "classic:worldBorder",
                  circleInfoText: "classic:worldBorderDescription",
                  disabled: "Enter" !== Np,
                  children: (0, Cp.jsx)("input", {
                    type: "number",
                    min: jp.L,
                    max: jp.G,
                    value: null !== (Ep = rp.worldOptions.worldBorder) && void 0 !== Ep ? Ep : "",
                    onChange: pp => {
                      const ip = parseInt(pp.target.value);
                      ii("worldBorder", isNaN(ip) ? null : ip)
                    }
                  })
                }), (0, Cp.jsx)(dp.i, {
                  label: "classic:disableMobs",
                  disabled: "Enter" !== Np,
                  children: (0, Cp.jsx)(dp.e, {
                    checked: rp.worldOptions.disableMobs,
                    setChecked: pp => {
                      ii("disableMobs", pp)
                    }
                  })
                })]
              })]
            }), ap && (0, Cp.jsx)(mp.e, {
              callbacks: Oi,
              disabled: "Enter" !== Np,
              advancedMode: Fp
            })]
          })
        }), (0, Cp.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, Cp.jsx)(Pp.o, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: "Enter" !== Np,
            onClick: () => {
              !async function() {
                if ("Enter" === Np) {
                  Tp("Loading"), bp("");
                  try {
                    await Ap.b.createCustomLobby(rp), Tp("Success")
                  } catch (pp) {
                    bp(pp.message), console.error(pp.message), Tp("Enter")
                  }
                }
              }()
            },
            children: Jp("general:create")
          }), ap && (0, Cp.jsx)("div", {
            className: "CreateCustomLobbyAdvancedToggle",
            "data-pad-ignore": oi || void 0,
            children: (0, Cp.jsx)(dp.i, {
              label: "customLobby:showAdvancedOptions",
              disabled: oi,
              onLabelClick: () => {
                gp(!Fp)
              },
              children: (0, Cp.jsx)(dp.e, {
                checked: Fp,
                setChecked: gp
              })
            })
          }), fp && (0, Cp.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: fp
          })]
        })]
      })
    }
  },
  36565: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Lp
    });
    var Op = cp(1049),
      op = cp.n(Op),
      Ip = cp(62),
      Sp = cp(4664),
      xp = cp(1112);

    function Lp(pp) {
      let {
        locked: ip,
        children: cp
      } = pp;
      const Op = (0, Ip.useRef)(null),
        Lp = (0, Sp.c)(Op, "y");
      return (0, xp.jsx)("div", {
        ref: Op,
        className: op()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: Lp.before,
          CreateCustomLobbyBodyMoreBelow: Lp.after
        }),
        "data-pad-ignore": ip || void 0,
        children: cp
      })
    }
  },
  36549: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Dp,
      g: () => Pp
    });
    var Op = cp(62),
      op = cp(1372),
      Ip = cp(1201),
      Sp = cp(1361),
      xp = cp(3581),
      Lp = cp(5048),
      Yp = cp(1112);

    function Dp(pp) {
      let {
        loading: ip,
        schematics: cp,
        onSchematicPicked: Op,
        selectedSchematicIdList: op = [],
        disableAutoExport: Lp
      } = pp;
      const {
        t: Dp
      } = (0, Ip.H)();
      return (0, Yp.jsxs)("div", {
        className: "SchematicList",
        children: [ip && (0, Yp.jsx)(Sp.c, {}), !ip && 0 === cp.length && (0, Yp.jsx)("div", {
          className: "NoSchematicsText",
          children: Dp("worldBuilder:noSavedSchematic")
        }), !ip && cp.map((pp => (0, Yp.jsx)(xp.g, {
          source: {
            type: "schematic",
            schematic: pp
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            Op(pp)
          },
          isSelected: op.includes(pp.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: pp.isAutoExported && Lp,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, pp.schematicId)))]
      })
    }

    function Ap(pp) {
      let {
        ownedSchematics: ip,
        currentWorldSchematicId: cp,
        onClose: op
      } = pp;
      const {
        t: Sp
      } = (0, Ip.H)(), [xp, Ap] = (0, Op.useState)(null);
      return (0, Yp.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === xp && (0, Yp.jsxs)(Yp.Fragment, {
          children: [(0, Yp.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: Sp("worldBuilder:schematicList")
          }), (0, Yp.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: Sp("worldBuilder:clickSchematicForOptions")
          }), (0, Yp.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, Yp.jsx)(Dp, {
              loading: !1,
              schematics: ip,
              onSchematicPicked: pp => {
                Ap(pp)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== xp && (0, Yp.jsx)(Lp.j, {
          schematic: xp,
          inSourceWorld: xp.schematicId === cp,
          onSchematicUpdate: pp => {
            Ap(pp)
          },
          onClose: () => {
            Ap(null), op()
          }
        })]
      })
    }

    function Pp(pp) {
      let {
        ownedSchematics: ip,
        currentWorldSchematicId: cp,
        onClose: Op
      } = pp;
      op.NotificationProvider.showCustomPopup({
        body: pp => (0, Yp.jsx)(Ap, {
          ownedSchematics: ip,
          currentWorldSchematicId: cp,
          onClose: pp
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: Op,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  36557: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Yp,
      i: () => Dp
    });
    cp(62);
    var Op = cp(1049),
      op = cp.n(Op),
      Ip = cp(4719),
      Sp = cp(322),
      xp = cp(1201),
      Lp = cp(1112);

    function Yp(pp) {
      let {
        value: ip,
        onChange: cp,
        showAll: Op,
        disabled: Yp = !1
      } = pp;
      const {
        t: Dp
      } = (0, xp.H)();
      return (0, Lp.jsxs)("div", {
        className: op()("BloxdForm GamemodeForm", {
          BasicOptions: !Op
        }),
        children: [(0, Lp.jsx)("div", {
          className: "SectionTitle",
          children: Dp("classic:defaultGamemode")
        }), (0, Lp.jsx)("div", {
          className: "SectionBody",
          children: Ip.E.map((pp => Op || (0, Ip.u)(pp) ? (0, Lp.jsx)("button", {
            type: "button",
            className: op()("WorldGamemode", {
              Selected: ip === pp
            }),
            disabled: Yp,
            onClick: () => {
              cp(pp)
            },
            style: {
              "--background-image": `url(${Sp.p[pp]})`
            },
            children: Sp.o[pp]
          }, pp) : null))
        })]
      })
    }

    function Dp(pp) {
      let {
        mapTypes: ip,
        value: cp,
        onChange: Op,
        showAll: Yp,
        disabled: Dp = !1,
        children: Ap
      } = pp;
      const {
        t: Pp
      } = (0, xp.H)();
      return (0, Lp.jsxs)("div", {
        className: op()("BloxdForm MapTypeForm", {
          BasicOptions: !Yp
        }),
        children: [(0, Lp.jsx)("div", {
          className: "SectionTitle",
          children: Pp("customLobby:mapType")
        }), (0, Lp.jsx)("div", {
          className: "SectionBody",
          children: ip.map((pp => Yp || (0, Ip.y)(pp) ? (0, Lp.jsx)("button", {
            type: "button",
            className: op()("MapType", {
              Selected: cp === pp
            }),
            disabled: Dp,
            onClick: () => {
              Op(pp)
            },
            style: {
              "--background-image": `url(${Sp.k[pp]})`
            },
            children: Sp.h[pp]
          }, pp) : null))
        }), Ap]
      })
    }
  },
  36543: () => {}
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);