export const id = 125;
export const ids = [125];
export const modules = {
  37770: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      CreateCustomLobby: () => Xr
    });
    Qr(37774);
    var Zr = Qr(5384),
      Wr = Qr(72),
      ar = Qr(1804),
      jr = Qr(1155),
      Ir = Qr.n(jr),
      fr = Qr(4323),
      Er = Qr(1187),
      pr = Qr(1262),
      xr = Qr(5347),
      mr = Qr(1576),
      Nr = Qr(37780),
      Ur = Qr(1251),
      tr = Qr(1433),
      hr = Qr(1644),
      zr = Qr(26),
      Yr = Qr(1578),
      nr = Qr(688),
      er = Qr(5751),
      Kr = Qr(868),
      yr = Qr(1287),
      Br = Qr(1279),
      Tr = Qr(5762),
      vr = Qr(1448),
      Or = Qr(37789),
      Lr = Qr(37792),
      lr = Qr(1338);

    function Xr(rr) {
      var Sr, Qr, jr, Xr;
      let {
        gameNameWithVariation: Pr,
        close: Hr,
        initialDefaultGamemode: qr
      } = rr;
      const {
        t: Rr
      } = (0, Ur.E)(), gr = (0, hr.useNavigatePreserveSearch)(), [Cr, Mr] = (0, Wr.useState)("Enter"), [Gr, kr] = (0, Wr.useState)(""), Ar = Wr.useRef(null), Vr = null === (Sr = Kr.c[Pr]) || void 0 === Sr ? void 0 : Sr.showWorldsInsteadOfCustomLobbies, ir = Vr ? 1 : null === (Qr = Kr.c[Pr]) || void 0 === Qr ? void 0 : Qr.customLobbyCustomSchematicLimit, [wr, cr] = (0, Wr.useState)(!Vr);
      qr || (qr = "classic_creative" === Pr || "classic_creativeFlat" === Pr ? "creative" : "classic" === Pr ? "peaceful" : "survival");
      const Fr = {
        baseOptions: {
          gameNameWithVariation: Vr ? "classic" : Pr,
          name: "",
          visibility: "unlisted"
        },
        listedOptions: {
          description: "",
          color: "",
          emojis: ""
        },
        mapOptions: {
          mapType: "classic_creativeFlat" === Pr ? "flat" : "default",
          schematicIdList: []
        },
        worldOptions: null
      };
      Vr && (Fr.worldOptions = {
        defaultGamemode: qr,
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
      const [or, br] = (0, Wr.useState)(Fr), [Jr, Dr] = (0, Wr.useState)(null);

      function dr(rr, Sr) {
        br({
          ...or,
          baseOptions: {
            ...or.baseOptions,
            [rr]: Sr
          }
        })
      }

      function sr(rr, Sr) {
        br({
          ...or,
          listedOptions: {
            ...or.listedOptions,
            [rr]: Sr
          }
        })
      }

      function ur(rr, Sr) {
        br({
          ...or,
          worldOptions: {
            ...or.worldOptions,
            [rr]: Sr
          }
        })
      }

      function rS(rr) {
        br({
          ...or,
          mapOptions: {
            ...or.mapOptions,
            ...rr
          }
        })
      }(0, Wr.useEffect)((() => {
        xr.c.getNewStarterName().then((rr => {
          br((Sr => "" !== Sr.baseOptions.name ? Sr : {
            ...Sr,
            baseOptions: {
              ...Sr.baseOptions,
              name: rr
            }
          }))
        })).catch((rr => {
          console.error("Error getting new starter name:", rr)
        }))
      }), []), (0, Wr.useEffect)((() => {
        "customSchematic" === or.mapOptions.mapType && null === Jr && (0, Er.postJsonWithMetricsCookiesAndJsonResponse)(`${pr.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
          retries: 0,
          minTimeout: 3e3
        }).then((rr => {
          Dr(rr)
        }))
      }), [or.mapOptions.mapType, Jr]);
      const SS = {
          tpRequests: {
            isEnabled: () => !or.worldOptions.disableTpRequests,
            VK: rr => {
              ur("disableTpRequests", !rr)
            }
          },
          spawnProtection: {
            isEnabled: () => or.worldOptions.spawnProtection,
            VK: rr => {
              ur("spawnProtection", rr)
            }
          },
          spawnReset: {
            isEnabled: () => or.worldOptions.enableSpawnReset,
            VK: rr => {
              ur("enableSpawnReset", rr)
            }
          },
          smpMarketplace: {
            isEnabled: () => or.worldOptions.enableSmpMarketplace,
            VK: rr => {
              ur("enableSmpMarketplace", rr)
            }
          },
          survivalGuns: {
            isEnabled: () => or.worldOptions.enableSurvivalGuns,
            VK: rr => {
              ur("enableSurvivalGuns", rr)
            }
          },
          fallDamage: {
            isEnabled: () => !or.worldOptions.disableFallDamage,
            VK: rr => {
              ur("disableFallDamage", !rr)
            }
          },
          dayNight: {
            isEnabled: () => or.worldOptions.enableDayNight,
            VK: rr => {
              ur("enableDayNight", rr)
            }
          }
        },
        QS = "Enter" !== Cr,
        ZS = (0, lr.jsx)(er.i, {
          className: "NameInput",
          label: "general:name",
          disabled: "Enter" !== Cr,
          children: (0, lr.jsx)(ar.b, {
            domRef: Ar,
            onValueChange: (rr, Sr) => {
              const Qr = (0, Br.ub)(rr);
              dr("name", Qr), Ar.current.value = Qr
            },
            maxLength: Br.O,
            defaultValue: or.baseOptions.name
          })
        });
      return (0, lr.jsxs)("div", {
        className: Ir()("CreateCustomLobby", {
          CreateCustomLobbySuccess: "Success" === Cr,
          AdvancedMode: wr
        }),
        children: ["Success" === Cr && (0, lr.jsxs)("div", {
          className: "CreateCustomLobbySuccessOverlay",
          children: [(0, lr.jsxs)("div", {
            className: "CreateCustomLobbySuccessTitle FullyFancyText AnimFadeInScaleUp",
            children: [(0, lr.jsx)(vr.c, {
              name: "check"
            }), (0, lr.jsx)(Yr.e, {})]
          }), (0, lr.jsx)("div", {
            className: "CreateCustomLobbySuccessButtons AnimFadeInScaleUp",
            children: (0, lr.jsx)(mr.p, {
              padDefaultFocus: !0,
              onClick: () => {
                (0, zr.m)("worldCreation"), gr((0, tr.c)(Pr, or.baseOptions.name))
              },
              children: Rr("homePage:joinLobbyName", {
                lobbyName: or.baseOptions.name
              })
            })
          })]
        }), (0, lr.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, lr.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: Rr(Vr ? "homePage:createWorld" : "homePage:createCustomLobby")
          })
        }), (0, lr.jsx)(Lr.c, {
          locked: QS,
          children: (0, lr.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [!wr && ZS, wr && (0, lr.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, lr.jsx)("div", {
                className: "SectionTitle",
                children: Rr("customLobby:generalOptions")
              }), (0, lr.jsxs)("div", {
                className: "SectionBody",
                children: [ZS, (0, lr.jsx)(er.i, {
                  label: "customLobby:visibility",
                  circleInfoText: Rr("customLobby:visibilityDescription"),
                  disabled: "Enter" !== Cr,
                  children: (0, lr.jsx)(fr.c, {
                    options: Zr.q.map((rr => ({
                      value: rr,
                      label: Zr.c[rr]
                    }))),
                    value: or.baseOptions.visibility,
                    onChange: rr => {
                      dr("visibility", rr.value)
                    }
                  })
                })]
              })]
            }), Vr && (0, lr.jsx)(Or.b, {
              value: or.worldOptions.defaultGamemode,
              onChange: rr => {
                ur("defaultGamemode", rr)
              },
              showAll: wr,
              disabled: QS
            }), (Vr || !(0, nr.L)(ir) && ir > 0) && (0, lr.jsx)(Or.f, {
              mapTypes: Vr ? Zr.E : Zr.n,
              value: or.mapOptions.mapType,
              onChange: rr => {
                const Sr = {
                  mapType: rr
                };
                "customSchematic" !== rr && (Sr.schematicIdList = []), rS(Sr)
              },
              showAll: wr,
              disabled: QS,
              children: "customSchematic" === or.mapOptions.mapType && (0, lr.jsxs)(lr.Fragment, {
                children: [(0, lr.jsxs)("div", {
                  className: "SchematicListTitle AnimFadeIn",
                  children: [Vr && Rr("customLobby:selectWorldSchematic"), !Vr && Rr("customLobby:selectCustomLobbySchematics", {
                    schematicLimit: ir
                  })]
                }), (0, lr.jsx)("div", {
                  className: Ir()("SchematicListContainer AnimFadeIn", {
                    SchematicListContainerDisabled: "Enter" !== Cr
                  }),
                  children: (0, lr.jsx)(Nr.e, {
                    loading: null === Jr,
                    schematics: null !== Jr && void 0 !== Jr ? Jr : [],
                    onSchematicPicked: function(rr) {
                      const Sr = or.mapOptions.schematicIdList;
                      if (Sr.includes(rr.schematicId)) rS({
                        schematicIdList: Sr.filter((Sr => Sr !== rr.schematicId))
                      });
                      else {
                        if (ir && or.mapOptions.schematicIdList.length >= ir) return;
                        rS({
                          schematicIdList: [...or.mapOptions.schematicIdList, rr.schematicId]
                        })
                      }
                    },
                    selectedSchematicIdList: or.mapOptions.schematicIdList,
                    disableAutoExport: !0
                  })
                })]
              })
            }), wr && (0, lr.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, lr.jsx)("div", {
                className: "SectionTitle",
                children: Rr("customLobby:listedOptions")
              }), (0, lr.jsxs)("div", {
                className: "SectionBody",
                children: [(0, lr.jsx)(er.i, {
                  label: "general:description",
                  className: "CustomLobbyDescription",
                  disabled: "Enter" !== Cr,
                  children: (0, lr.jsx)(ar.b, {
                    onValueChange: (rr, Sr) => {
                      sr("description", rr)
                    },
                    maxLength: 100,
                    defaultValue: or.listedOptions.description
                  })
                }), (0, lr.jsx)(er.i, {
                  label: "general:color",
                  circleInfoText: "customLobby:lobbyColorDescription",
                  disabled: "Enter" !== Cr,
                  children: (0, lr.jsx)("div", {
                    className: "OtherInput",
                    children: (0, lr.jsx)("input", {
                      type: "color",
                      value: or.listedOptions.color,
                      onChange: rr => {
                        sr("color", rr.target.value)
                      }
                    })
                  })
                }), (0, lr.jsx)(er.i, {
                  label: "general:emojis",
                  circleInfoText: "customLobby:lobbyEmojisDescription",
                  disabled: "Enter" !== Cr,
                  children: (0, lr.jsx)(ar.b, {
                    onValueChange: (rr, Sr) => {
                      sr("emojis", rr)
                    },
                    maxLength: 6,
                    defaultValue: or.listedOptions.emojis
                  })
                })]
              })]
            }), wr && Vr && (0, lr.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, lr.jsx)("div", {
                className: "SectionTitle",
                children: Rr("customLobby:advancedOptions")
              }), (0, lr.jsxs)("div", {
                className: "SectionBody",
                children: [(0, lr.jsx)(er.i, {
                  label: "classic:worldGenSeed",
                  disabled: "Enter" !== Cr,
                  children: (0, lr.jsx)(ar.b, {
                    onValueChange: (rr, Sr) => {
                      ur("worldGenSeed", rr)
                    },
                    maxLength: Br.O
                  })
                }), (0, lr.jsx)(er.i, {
                  label: "classic:disableProtectors",
                  disabled: "Enter" !== Cr,
                  children: (0, lr.jsx)(er.e, {
                    checked: or.worldOptions.disableProtectors,
                    setChecked: rr => {
                      ur("disableProtectors", rr)
                    }
                  })
                }), (0, lr.jsx)(er.i, {
                  label: "classic:disableTribeCreation",
                  disabled: "Enter" !== Cr,
                  children: (0, lr.jsx)(er.e, {
                    checked: or.worldOptions.disableTribeCreation,
                    setChecked: rr => {
                      ur("disableTribeCreation", rr)
                    }
                  })
                }), (0, lr.jsx)(er.i, {
                  label: "classic:voidDeathHeight",
                  circleInfoText: "classic:voidDeathHeightDescription",
                  disabled: "Enter" !== Cr,
                  children: (0, lr.jsx)("input", {
                    type: "number",
                    max: yr.K,
                    value: null !== (jr = or.worldOptions.voidDeathHeight) && void 0 !== jr ? jr : "",
                    onChange: rr => {
                      const Sr = parseInt(rr.target.value);
                      ur("voidDeathHeight", isNaN(Sr) ? null : Sr)
                    }
                  })
                }), (0, lr.jsx)(er.i, {
                  label: "classic:disableLobbySpawn",
                  disabled: "Enter" !== Cr,
                  children: (0, lr.jsx)(er.e, {
                    checked: or.worldOptions.disableLobbySpawn,
                    setChecked: rr => {
                      ur("disableLobbySpawn", rr)
                    }
                  })
                }), (0, lr.jsx)(er.i, {
                  label: "classic:worldBorder",
                  circleInfoText: "classic:worldBorderDescription",
                  disabled: "Enter" !== Cr,
                  children: (0, lr.jsx)("input", {
                    type: "number",
                    min: yr.V,
                    max: yr.O,
                    value: null !== (Xr = or.worldOptions.worldBorder) && void 0 !== Xr ? Xr : "",
                    onChange: rr => {
                      const Sr = parseInt(rr.target.value);
                      ur("worldBorder", isNaN(Sr) ? null : Sr)
                    }
                  })
                }), (0, lr.jsx)(er.i, {
                  label: "classic:disableMobs",
                  disabled: "Enter" !== Cr,
                  children: (0, lr.jsx)(er.e, {
                    checked: or.worldOptions.disableMobs,
                    setChecked: rr => {
                      ur("disableMobs", rr)
                    }
                  })
                })]
              })]
            }), Vr && (0, lr.jsx)(Tr.d, {
              callbacks: SS,
              disabled: "Enter" !== Cr,
              advancedMode: wr
            })]
          })
        }), (0, lr.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, lr.jsx)(mr.p, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: "Enter" !== Cr,
            onClick: () => {
              !async function() {
                if ("Enter" === Cr) {
                  Mr("Loading"), kr("");
                  try {
                    await xr.c.createCustomLobby(or), Mr("Success")
                  } catch (rr) {
                    kr(rr.message), console.error(rr.message), Mr("Enter")
                  }
                }
              }()
            },
            children: Rr("general:create")
          }), Vr && (0, lr.jsx)("div", {
            className: "CreateCustomLobbyAdvancedToggle",
            "data-pad-ignore": QS || void 0,
            children: (0, lr.jsx)(er.i, {
              label: "customLobby:showAdvancedOptions",
              disabled: QS,
              onLabelClick: () => {
                cr(!wr)
              },
              children: (0, lr.jsx)(er.e, {
                checked: wr,
                setChecked: cr
              })
            })
          }), Gr && (0, lr.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: Gr
          })]
        })]
      })
    }
  },
  37792: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => fr
    });
    var Zr = Qr(1155),
      Wr = Qr.n(Zr),
      ar = Qr(72),
      jr = Qr(5338),
      Ir = Qr(1338);

    function fr(rr) {
      let {
        locked: Sr,
        children: Qr
      } = rr;
      const Zr = (0, ar.useRef)(null),
        fr = (0, jr.b)(Zr, "y");
      return (0, Ir.jsx)("div", {
        ref: Zr,
        className: Wr()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: fr.before,
          CreateCustomLobbyBodyMoreBelow: fr.after
        }),
        "data-pad-ignore": Sr || void 0,
        children: Qr
      })
    }
  },
  37780: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => pr,
      i: () => mr
    });
    var Zr = Qr(72),
      Wr = Qr(1475),
      ar = Qr(1251),
      jr = Qr(1444),
      Ir = Qr(4743),
      fr = Qr(5745),
      Er = Qr(1338);

    function pr(rr) {
      let {
        loading: Sr,
        schematics: Qr,
        onSchematicPicked: Zr,
        selectedSchematicIdList: Wr = [],
        disableAutoExport: fr
      } = rr;
      const {
        t: pr
      } = (0, ar.E)();
      return (0, Er.jsxs)("div", {
        className: "SchematicList",
        children: [Sr && (0, Er.jsx)(jr.c, {}), !Sr && 0 === Qr.length && (0, Er.jsx)("div", {
          className: "NoSchematicsText",
          children: pr("worldBuilder:noSavedSchematic")
        }), !Sr && Qr.map((rr => (0, Er.jsx)(Ir.e, {
          source: {
            type: "schematic",
            schematic: rr
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            Zr(rr)
          },
          isSelected: Wr.includes(rr.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: rr.isAutoExported && fr,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, rr.schematicId)))]
      })
    }

    function xr(rr) {
      let {
        ownedSchematics: Sr,
        currentWorldSchematicId: Qr,
        onClose: Wr
      } = rr;
      const {
        t: jr
      } = (0, ar.E)(), [Ir, xr] = (0, Zr.useState)(null);
      return (0, Er.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === Ir && (0, Er.jsxs)(Er.Fragment, {
          children: [(0, Er.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: jr("worldBuilder:schematicList")
          }), (0, Er.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: jr("worldBuilder:clickSchematicForOptions")
          }), (0, Er.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, Er.jsx)(pr, {
              loading: !1,
              schematics: Sr,
              onSchematicPicked: rr => {
                xr(rr)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== Ir && (0, Er.jsx)(fr.f, {
          schematic: Ir,
          inSourceWorld: Ir.schematicId === Qr,
          onSchematicUpdate: rr => {
            xr(rr)
          },
          onClose: () => {
            xr(null), Wr()
          }
        })]
      })
    }

    function mr(rr) {
      let {
        ownedSchematics: Sr,
        currentWorldSchematicId: Qr,
        onClose: Zr
      } = rr;
      Wr.NotificationProvider.showCustomPopup({
        body: rr => (0, Er.jsx)(xr, {
          ownedSchematics: Sr,
          currentWorldSchematicId: Qr,
          onClose: rr
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: Zr,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  37789: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Er,
      f: () => pr
    });
    Qr(72);
    var Zr = Qr(1155),
      Wr = Qr.n(Zr),
      ar = Qr(5384),
      jr = Qr(360),
      Ir = Qr(1251),
      fr = Qr(1338);

    function Er(rr) {
      let {
        value: Sr,
        onChange: Qr,
        showAll: Zr,
        disabled: Er = !1
      } = rr;
      const {
        t: pr
      } = (0, Ir.E)();
      return (0, fr.jsxs)("div", {
        className: Wr()("BloxdForm GamemodeForm", {
          BasicOptions: !Zr
        }),
        children: [(0, fr.jsx)("div", {
          className: "SectionTitle",
          children: pr("classic:defaultGamemode")
        }), (0, fr.jsx)("div", {
          className: "SectionBody",
          children: ar.A.map((rr => Zr || (0, ar.s)(rr) ? (0, fr.jsx)("button", {
            type: "button",
            className: Wr()("WorldGamemode", {
              Selected: Sr === rr
            }),
            disabled: Er,
            onClick: () => {
              Qr(rr)
            },
            style: {
              "--background-image": `url(${jr.u[rr]})`
            },
            children: jr.t[rr]
          }, rr) : null))
        })]
      })
    }

    function pr(rr) {
      let {
        mapTypes: Sr,
        value: Qr,
        onChange: Zr,
        showAll: Er,
        disabled: pr = !1,
        children: xr
      } = rr;
      const {
        t: mr
      } = (0, Ir.E)();
      return (0, fr.jsxs)("div", {
        className: Wr()("BloxdForm MapTypeForm", {
          BasicOptions: !Er
        }),
        children: [(0, fr.jsx)("div", {
          className: "SectionTitle",
          children: mr("customLobby:mapType")
        }), (0, fr.jsx)("div", {
          className: "SectionBody",
          children: Sr.map((rr => Er || (0, ar.t)(rr) ? (0, fr.jsx)("button", {
            type: "button",
            className: Wr()("MapType", {
              Selected: Qr === rr
            }),
            disabled: pr,
            onClick: () => {
              Zr(rr)
            },
            style: {
              "--background-image": `url(${jr.n[rr]})`
            },
            children: jr.j[rr]
          }, rr) : null))
        }), xr]
      })
    }
  },
  5878: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Wr,
      h: () => ar
    });
    var Zr = Qr(5830);
    const Wr = "Air",
      ar = Object.freeze(new Zr.e(Wr, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  37774: () => {}
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);