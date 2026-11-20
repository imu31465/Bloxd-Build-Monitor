export const id = 210;
export const ids = [210];
export const modules = {
  36397: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      CreateCustomLobby: () => iq
    });
    gq(36406);
    var Yq = gq(4456),
      lq = gq(57),
      Oq = gq(1659),
      mq = gq(1018),
      xq = gq.n(mq),
      Aq = gq(3040),
      cq = gq(1109),
      uq = gq(1195),
      Bq = gq(4413),
      Wq = gq(1422),
      Nq = gq(36415),
      aq = gq(1183),
      Vq = gq(1313),
      dq = gq(1498),
      jq = gq(24),
      Hq = gq(1431),
      oq = gq(598),
      Pq = gq(4773),
      Qq = gq(729),
      yq = gq(1226),
      tq = gq(1214),
      rq = gq(4786),
      vq = gq(1025),
      hq = gq(36424),
      nq = gq(36428),
      bq = gq(1070);

    function iq(qq) {
      var Eq, gq, mq, iq;
      let {
        gameNameWithVariation: Zq,
        close: fq,
        initialDefaultGamemode: Mq
      } = qq;
      const {
        t: Tq
      } = (0, aq.v)(), zq = (0, dq.useNavigatePreserveSearch)(), [Sq, pq] = (0, lq.useState)("Enter"), [Gq, Lq] = (0, lq.useState)(""), Jq = lq.useRef(null), kq = null === (Eq = Qq.c[Zq]) || void 0 === Eq ? void 0 : Eq.showWorldsInsteadOfCustomLobbies, Rq = kq ? 1 : null === (gq = Qq.c[Zq]) || void 0 === gq ? void 0 : gq.customLobbyCustomSchematicLimit, [Uq, Fq] = (0, lq.useState)(!kq);
      Mq || (Mq = "classic_creative" === Zq || "classic_creativeFlat" === Zq ? "creative" : "classic" === Zq ? "peaceful" : "survival");
      const sq = {
        baseOptions: {
          gameNameWithVariation: kq ? "classic" : Zq,
          name: "",
          visibility: "unlisted"
        },
        listedOptions: {
          description: "",
          color: "",
          emojis: ""
        },
        mapOptions: {
          mapType: "classic_creativeFlat" === Zq ? "flat" : "default",
          schematicIdList: []
        },
        worldOptions: null
      };
      kq && (sq.worldOptions = {
        defaultGamemode: Mq,
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
      const [Xq, wq] = (0, lq.useState)(sq), [Kq, Cq] = (0, lq.useState)(null);

      function Iq(qq, Eq) {
        wq({
          ...Xq,
          baseOptions: {
            ...Xq.baseOptions,
            [qq]: Eq
          }
        })
      }

      function eq(qq, Eq) {
        wq({
          ...Xq,
          listedOptions: {
            ...Xq.listedOptions,
            [qq]: Eq
          }
        })
      }

      function Dq(qq, Eq) {
        wq({
          ...Xq,
          worldOptions: {
            ...Xq.worldOptions,
            [qq]: Eq
          }
        })
      }

      function qE(qq) {
        wq({
          ...Xq,
          mapOptions: {
            ...Xq.mapOptions,
            ...qq
          }
        })
      }(0, lq.useEffect)((() => {
        Bq.d.getNewStarterName().then((qq => {
          wq((Eq => "" !== Eq.baseOptions.name ? Eq : {
            ...Eq,
            baseOptions: {
              ...Eq.baseOptions,
              name: qq
            }
          }))
        })).catch((qq => {
          console.error("Error getting new starter name:", qq)
        }))
      }), []), (0, lq.useEffect)((() => {
        "customSchematic" === Xq.mapOptions.mapType && null === Kq && (0, cq.postJsonWithMetricsCookiesAndJsonResponse)(`${uq.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
          retries: 0,
          minTimeout: 3e3
        }).then((qq => {
          Cq(qq)
        }))
      }), [Xq.mapOptions.mapType, Kq]);
      const EE = {
          tpRequests: {
            isEnabled: () => !Xq.worldOptions.disableTpRequests,
            hG: qq => {
              Dq("disableTpRequests", !qq)
            }
          },
          spawnProtection: {
            isEnabled: () => Xq.worldOptions.spawnProtection,
            hG: qq => {
              Dq("spawnProtection", qq)
            }
          },
          spawnReset: {
            isEnabled: () => Xq.worldOptions.enableSpawnReset,
            hG: qq => {
              Dq("enableSpawnReset", qq)
            }
          },
          smpMarketplace: {
            isEnabled: () => Xq.worldOptions.enableSmpMarketplace,
            hG: qq => {
              Dq("enableSmpMarketplace", qq)
            }
          },
          survivalGuns: {
            isEnabled: () => Xq.worldOptions.enableSurvivalGuns,
            hG: qq => {
              Dq("enableSurvivalGuns", qq)
            }
          },
          fallDamage: {
            isEnabled: () => !Xq.worldOptions.disableFallDamage,
            hG: qq => {
              Dq("disableFallDamage", !qq)
            }
          },
          dayNight: {
            isEnabled: () => Xq.worldOptions.enableDayNight,
            hG: qq => {
              Dq("enableDayNight", qq)
            }
          }
        },
        gE = "Enter" !== Sq,
        YE = (0, bq.jsx)(Pq.c, {
          className: "NameInput",
          label: "general:name",
          disabled: "Enter" !== Sq,
          children: (0, bq.jsx)(Oq.b, {
            domRef: Jq,
            onValueChange: (qq, Eq) => {
              const gq = (0, tq.Bb)(qq);
              Iq("name", gq), Jq.current.value = gq
            },
            maxLength: tq.R,
            defaultValue: Xq.baseOptions.name
          })
        });
      return (0, bq.jsxs)("div", {
        className: xq()("CreateCustomLobby", {
          CreateCustomLobbySuccess: "Success" === Sq,
          AdvancedMode: Uq
        }),
        children: ["Success" === Sq && (0, bq.jsxs)("div", {
          className: "CreateCustomLobbySuccessOverlay",
          children: [(0, bq.jsxs)("div", {
            className: "CreateCustomLobbySuccessTitle FullyFancyText AnimFadeInScaleUp",
            children: [(0, bq.jsx)(vq.d, {
              name: "check"
            }), (0, bq.jsx)(Hq.b, {})]
          }), (0, bq.jsx)("div", {
            className: "CreateCustomLobbySuccessButtons AnimFadeInScaleUp",
            children: (0, bq.jsx)(Wq.p, {
              padDefaultFocus: !0,
              onClick: () => {
                (0, jq.f)("worldCreation"), zq((0, Vq.e)(Zq, Xq.baseOptions.name))
              },
              children: Tq("homePage:joinLobbyName", {
                lobbyName: Xq.baseOptions.name
              })
            })
          })]
        }), (0, bq.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, bq.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: Tq(kq ? "homePage:createWorld" : "homePage:createCustomLobby")
          })
        }), (0, bq.jsx)(nq.c, {
          locked: gE,
          children: (0, bq.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [!Uq && YE, Uq && (0, bq.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, bq.jsx)("div", {
                className: "SectionTitle",
                children: Tq("customLobby:generalOptions")
              }), (0, bq.jsxs)("div", {
                className: "SectionBody",
                children: [YE, (0, bq.jsx)(Pq.c, {
                  label: "customLobby:visibility",
                  circleInfoText: Tq("customLobby:visibilityDescription"),
                  disabled: "Enter" !== Sq,
                  children: (0, bq.jsx)(Aq.d, {
                    options: Yq.r.map((qq => ({
                      value: qq,
                      label: Yq.g[qq]
                    }))),
                    value: Xq.baseOptions.visibility,
                    onChange: qq => {
                      Iq("visibility", qq.value)
                    }
                  })
                })]
              })]
            }), kq && (0, bq.jsx)(hq.e, {
              value: Xq.worldOptions.defaultGamemode,
              onChange: qq => {
                Dq("defaultGamemode", qq)
              },
              showAll: Uq,
              disabled: gE
            }), (kq || !(0, oq.H)(Rq) && Rq > 0) && (0, bq.jsx)(hq.i, {
              mapTypes: kq ? Yq.C : Yq.n,
              value: Xq.mapOptions.mapType,
              onChange: qq => {
                const Eq = {
                  mapType: qq
                };
                "customSchematic" !== qq && (Eq.schematicIdList = []), qE(Eq)
              },
              showAll: Uq,
              disabled: gE,
              children: "customSchematic" === Xq.mapOptions.mapType && (0, bq.jsxs)(bq.Fragment, {
                children: [(0, bq.jsxs)("div", {
                  className: "SchematicListTitle AnimFadeIn",
                  children: [kq && Tq("customLobby:selectWorldSchematic"), !kq && Tq("customLobby:selectCustomLobbySchematics", {
                    schematicLimit: Rq
                  })]
                }), (0, bq.jsx)("div", {
                  className: xq()("SchematicListContainer AnimFadeIn", {
                    SchematicListContainerDisabled: "Enter" !== Sq
                  }),
                  children: (0, bq.jsx)(Nq.d, {
                    loading: null === Kq,
                    schematics: null !== Kq && void 0 !== Kq ? Kq : [],
                    onSchematicPicked: function(qq) {
                      const Eq = Xq.mapOptions.schematicIdList;
                      if (Eq.includes(qq.schematicId)) qE({
                        schematicIdList: Eq.filter((Eq => Eq !== qq.schematicId))
                      });
                      else {
                        if (Rq && Xq.mapOptions.schematicIdList.length >= Rq) return;
                        qE({
                          schematicIdList: [...Xq.mapOptions.schematicIdList, qq.schematicId]
                        })
                      }
                    },
                    selectedSchematicIdList: Xq.mapOptions.schematicIdList,
                    disableAutoExport: !0
                  })
                })]
              })
            }), Uq && (0, bq.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, bq.jsx)("div", {
                className: "SectionTitle",
                children: Tq("customLobby:listedOptions")
              }), (0, bq.jsxs)("div", {
                className: "SectionBody",
                children: [(0, bq.jsx)(Pq.c, {
                  label: "general:description",
                  className: "CustomLobbyDescription",
                  disabled: "Enter" !== Sq,
                  children: (0, bq.jsx)(Oq.b, {
                    onValueChange: (qq, Eq) => {
                      eq("description", qq)
                    },
                    maxLength: 100,
                    defaultValue: Xq.listedOptions.description
                  })
                }), (0, bq.jsx)(Pq.c, {
                  label: "general:color",
                  circleInfoText: "customLobby:lobbyColorDescription",
                  disabled: "Enter" !== Sq,
                  children: (0, bq.jsx)("div", {
                    className: "OtherInput",
                    children: (0, bq.jsx)("input", {
                      type: "color",
                      value: Xq.listedOptions.color,
                      onChange: qq => {
                        eq("color", qq.target.value)
                      }
                    })
                  })
                }), (0, bq.jsx)(Pq.c, {
                  label: "general:emojis",
                  circleInfoText: "customLobby:lobbyEmojisDescription",
                  disabled: "Enter" !== Sq,
                  children: (0, bq.jsx)(Oq.b, {
                    onValueChange: (qq, Eq) => {
                      eq("emojis", qq)
                    },
                    maxLength: 6,
                    defaultValue: Xq.listedOptions.emojis
                  })
                })]
              })]
            }), Uq && kq && (0, bq.jsxs)("div", {
              className: "BloxdForm",
              children: [(0, bq.jsx)("div", {
                className: "SectionTitle",
                children: Tq("customLobby:advancedOptions")
              }), (0, bq.jsxs)("div", {
                className: "SectionBody",
                children: [(0, bq.jsx)(Pq.c, {
                  label: "classic:worldGenSeed",
                  disabled: "Enter" !== Sq,
                  children: (0, bq.jsx)(Oq.b, {
                    onValueChange: (qq, Eq) => {
                      Dq("worldGenSeed", qq)
                    },
                    maxLength: tq.R
                  })
                }), (0, bq.jsx)(Pq.c, {
                  label: "classic:disableProtectors",
                  disabled: "Enter" !== Sq,
                  children: (0, bq.jsx)(Pq.b, {
                    checked: Xq.worldOptions.disableProtectors,
                    setChecked: qq => {
                      Dq("disableProtectors", qq)
                    }
                  })
                }), (0, bq.jsx)(Pq.c, {
                  label: "classic:disableTribeCreation",
                  disabled: "Enter" !== Sq,
                  children: (0, bq.jsx)(Pq.b, {
                    checked: Xq.worldOptions.disableTribeCreation,
                    setChecked: qq => {
                      Dq("disableTribeCreation", qq)
                    }
                  })
                }), (0, bq.jsx)(Pq.c, {
                  label: "classic:voidDeathHeight",
                  circleInfoText: "classic:voidDeathHeightDescription",
                  disabled: "Enter" !== Sq,
                  children: (0, bq.jsx)("input", {
                    type: "number",
                    max: yq.I,
                    value: null !== (mq = Xq.worldOptions.voidDeathHeight) && void 0 !== mq ? mq : "",
                    onChange: qq => {
                      const Eq = parseInt(qq.target.value);
                      Dq("voidDeathHeight", isNaN(Eq) ? null : Eq)
                    }
                  })
                }), (0, bq.jsx)(Pq.c, {
                  label: "classic:disableLobbySpawn",
                  disabled: "Enter" !== Sq,
                  children: (0, bq.jsx)(Pq.b, {
                    checked: Xq.worldOptions.disableLobbySpawn,
                    setChecked: qq => {
                      Dq("disableLobbySpawn", qq)
                    }
                  })
                }), (0, bq.jsx)(Pq.c, {
                  label: "classic:worldBorder",
                  circleInfoText: "classic:worldBorderDescription",
                  disabled: "Enter" !== Sq,
                  children: (0, bq.jsx)("input", {
                    type: "number",
                    min: yq.O,
                    max: yq.K,
                    value: null !== (iq = Xq.worldOptions.worldBorder) && void 0 !== iq ? iq : "",
                    onChange: qq => {
                      const Eq = parseInt(qq.target.value);
                      Dq("worldBorder", isNaN(Eq) ? null : Eq)
                    }
                  })
                }), (0, bq.jsx)(Pq.c, {
                  label: "classic:disableMobs",
                  disabled: "Enter" !== Sq,
                  children: (0, bq.jsx)(Pq.b, {
                    checked: Xq.worldOptions.disableMobs,
                    setChecked: qq => {
                      Dq("disableMobs", qq)
                    }
                  })
                })]
              })]
            }), kq && (0, bq.jsx)(rq.e, {
              callbacks: EE,
              disabled: "Enter" !== Sq,
              advancedMode: Uq
            })]
          })
        }), (0, bq.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, bq.jsx)(Wq.p, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: "Enter" !== Sq,
            onClick: () => {
              !async function() {
                if ("Enter" === Sq) {
                  pq("Loading"), Lq("");
                  try {
                    await Bq.d.createCustomLobby(Xq), pq("Success")
                  } catch (qq) {
                    Lq(qq.message), console.error(qq.message), pq("Enter")
                  }
                }
              }()
            },
            children: Tq("general:create")
          }), kq && (0, bq.jsx)("div", {
            className: "CreateCustomLobbyAdvancedToggle",
            "data-pad-ignore": gE || void 0,
            children: (0, bq.jsx)(Pq.c, {
              label: "customLobby:showAdvancedOptions",
              disabled: gE,
              onLabelClick: () => {
                Fq(!Uq)
              },
              children: (0, bq.jsx)(Pq.b, {
                checked: Uq,
                setChecked: Fq
              })
            })
          }), Gq && (0, bq.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: Gq
          })]
        })]
      })
    }
  },
  36428: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Aq
    });
    var Yq = gq(1018),
      lq = gq.n(Yq),
      Oq = gq(57),
      mq = gq(4405),
      xq = gq(1070);

    function Aq(qq) {
      let {
        locked: Eq,
        children: gq
      } = qq;
      const Yq = (0, Oq.useRef)(null),
        Aq = (0, mq.c)(Yq, "y");
      return (0, xq.jsx)("div", {
        ref: Yq,
        className: lq()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: Aq.before,
          CreateCustomLobbyBodyMoreBelow: Aq.after
        }),
        "data-pad-ignore": Eq || void 0,
        children: gq
      })
    }
  },
  36415: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => uq,
      g: () => Wq
    });
    var Yq = gq(57),
      lq = gq(1336),
      Oq = gq(1183),
      mq = gq(1326),
      xq = gq(3358),
      Aq = gq(4764),
      cq = gq(1070);

    function uq(qq) {
      let {
        loading: Eq,
        schematics: gq,
        onSchematicPicked: Yq,
        selectedSchematicIdList: lq = [],
        disableAutoExport: Aq
      } = qq;
      const {
        t: uq
      } = (0, Oq.v)();
      return (0, cq.jsxs)("div", {
        className: "SchematicList",
        children: [Eq && (0, cq.jsx)(mq.e, {}), !Eq && 0 === gq.length && (0, cq.jsx)("div", {
          className: "NoSchematicsText",
          children: uq("worldBuilder:noSavedSchematic")
        }), !Eq && gq.map((qq => (0, cq.jsx)(xq.e, {
          source: {
            type: "schematic",
            schematic: qq
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            Yq(qq)
          },
          isSelected: lq.includes(qq.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: qq.isAutoExported && Aq,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, qq.schematicId)))]
      })
    }

    function Bq(qq) {
      let {
        ownedSchematics: Eq,
        currentWorldSchematicId: gq,
        onClose: lq
      } = qq;
      const {
        t: mq
      } = (0, Oq.v)(), [xq, Bq] = (0, Yq.useState)(null);
      return (0, cq.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === xq && (0, cq.jsxs)(cq.Fragment, {
          children: [(0, cq.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: mq("worldBuilder:schematicList")
          }), (0, cq.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: mq("worldBuilder:clickSchematicForOptions")
          }), (0, cq.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, cq.jsx)(uq, {
              loading: !1,
              schematics: Eq,
              onSchematicPicked: qq => {
                Bq(qq)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== xq && (0, cq.jsx)(Aq.i, {
          schematic: xq,
          inSourceWorld: xq.schematicId === gq,
          onSchematicUpdate: qq => {
            Bq(qq)
          },
          onClose: () => {
            Bq(null), lq()
          }
        })]
      })
    }

    function Wq(qq) {
      let {
        ownedSchematics: Eq,
        currentWorldSchematicId: gq,
        onClose: Yq
      } = qq;
      lq.NotificationProvider.showCustomPopup({
        body: qq => (0, cq.jsx)(Bq, {
          ownedSchematics: Eq,
          currentWorldSchematicId: gq,
          onClose: qq
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: Yq,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  36424: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => cq,
      i: () => uq
    });
    gq(57);
    var Yq = gq(1018),
      lq = gq.n(Yq),
      Oq = gq(4456),
      mq = gq(296),
      xq = gq(1183),
      Aq = gq(1070);

    function cq(qq) {
      let {
        value: Eq,
        onChange: gq,
        showAll: Yq,
        disabled: cq = !1
      } = qq;
      const {
        t: uq
      } = (0, xq.v)();
      return (0, Aq.jsxs)("div", {
        className: lq()("BloxdForm GamemodeForm", {
          BasicOptions: !Yq
        }),
        children: [(0, Aq.jsx)("div", {
          className: "SectionTitle",
          children: uq("classic:defaultGamemode")
        }), (0, Aq.jsx)("div", {
          className: "SectionBody",
          children: Oq.A.map((qq => Yq || (0, Oq.w)(qq) ? (0, Aq.jsx)("button", {
            type: "button",
            className: lq()("WorldGamemode", {
              Selected: Eq === qq
            }),
            disabled: cq,
            onClick: () => {
              gq(qq)
            },
            style: {
              "--background-image": `url(${mq.v[qq]})`
            },
            children: mq.r[qq]
          }, qq) : null))
        })]
      })
    }

    function uq(qq) {
      let {
        mapTypes: Eq,
        value: gq,
        onChange: Yq,
        showAll: cq,
        disabled: uq = !1,
        children: Bq
      } = qq;
      const {
        t: Wq
      } = (0, xq.v)();
      return (0, Aq.jsxs)("div", {
        className: lq()("BloxdForm MapTypeForm", {
          BasicOptions: !cq
        }),
        children: [(0, Aq.jsx)("div", {
          className: "SectionTitle",
          children: Wq("customLobby:mapType")
        }), (0, Aq.jsx)("div", {
          className: "SectionBody",
          children: Eq.map((qq => cq || (0, Oq.x)(qq) ? (0, Aq.jsx)("button", {
            type: "button",
            className: lq()("MapType", {
              Selected: gq === qq
            }),
            disabled: uq,
            onClick: () => {
              Yq(qq)
            },
            style: {
              "--background-image": `url(${mq.o[qq]})`
            },
            children: mq.k[qq]
          }, qq) : null))
        }), Bq]
      })
    }
  },
  36406: () => {}
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);