export const id = 210;
export const ids = [210];
export const modules = {
  35944: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => cU,
      e: () => jU
    });
    var tU = gU(56),
      pU = gU(1333),
      EU = gU(1181),
      PU = gU(1326),
      TU = gU(3176),
      qU = gU(4593),
      KU = gU(1090);

    function cU(UU) {
      let {
        loading: RU,
        schematics: gU,
        onSchematicPicked: tU,
        selectedSchematicIdList: pU = [],
        disableAutoExport: qU
      } = UU;
      const {
        t: cU
      } = (0, EU.B)();
      return (0, KU.jsxs)("div", {
        className: "SchematicList",
        children: [RU && (0, KU.jsx)(PU.d, {}), !RU && 0 === gU.length && (0, KU.jsx)("div", {
          className: "NoSchematicsText",
          children: cU("worldBuilder:noSavedSchematic")
        }), !RU && gU.map((UU => (0, KU.jsx)(TU.f, {
          source: {
            type: "schematic",
            schematic: UU
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            tU(UU)
          },
          isSelected: pU.includes(UU.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: UU.isAutoExported && qU,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, UU.schematicId)))]
      })
    }

    function GU(UU) {
      let {
        ownedSchematics: RU,
        currentWorldSchematicId: gU,
        onClose: pU
      } = UU;
      const {
        t: PU
      } = (0, EU.B)(), [TU, GU] = (0, tU.useState)(null);
      return (0, KU.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === TU && (0, KU.jsxs)(KU.Fragment, {
          children: [(0, KU.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: PU("worldBuilder:schematicList")
          }), (0, KU.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: PU("worldBuilder:clickSchematicForOptions")
          }), (0, KU.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, KU.jsx)(cU, {
              loading: !1,
              schematics: RU,
              onSchematicPicked: UU => {
                GU(UU)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== TU && (0, KU.jsx)(qU.f, {
          schematic: TU,
          inSourceWorld: TU.schematicId === gU,
          onSchematicUpdate: UU => {
            GU(UU)
          },
          onClose: () => {
            GU(null), pU()
          }
        })]
      })
    }

    function jU(UU) {
      let {
        ownedSchematics: RU,
        currentWorldSchematicId: gU,
        onClose: tU
      } = UU;
      pU.NotificationProvider.showCustomPopup({
        body: UU => (0, KU.jsx)(GU, {
          ownedSchematics: RU,
          currentWorldSchematicId: gU,
          onClose: UU
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: tU,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  41095: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      runClientGameMessage: () => ZU
    });
    var tU = gU(3398),
      pU = gU(3420),
      EU = gU(1316),
      PU = gU(35944),
      TU = gU(4623),
      qU = gU(1037),
      KU = gU.n(qU),
      cU = gU(56),
      GU = gU(1333),
      jU = gU(1412),
      uU = gU(311),
      CU = gU(1181),
      hU = gU(1049),
      QU = gU(1090);

    function eU(UU) {
      let {
        onFilePicked: RU
      } = UU;
      const {
        t: gU
      } = (0, CU.B)(), [tU, pU] = (0, cU.useState)(null), {
        getRootProps: EU,
        getInputProps: PU,
        isDragActive: qU
      } = (0, TU.e)({
        onDrop: UU => {
          UU.length > 0 && pU(UU[0])
        },
        useFsAccessApi: !1
      }), GU = tU && tU.size > 1024 * uU.dd;
      return (0, QU.jsxs)("div", {
        className: "SchematicUploadContainer",
        children: [(0, QU.jsxs)("div", {
          ...EU({
            className: KU()("SchematicUpload", {
              ActiveDrag: qU
            })
          }),
          children: [(0, QU.jsx)("input", {
            ...PU({
              accept: ".bloxdschem"
            })
          }), !qU && tU ? (0, QU.jsxs)(QU.Fragment, {
            children: [(0, QU.jsx)("div", {
              className: KU()("SchematicUploadIcon", "Active", {
                TooBig: GU
              }),
              children: (0, QU.jsx)(hU.c, {
                name: "file-lines"
              })
            }), (0, QU.jsx)("div", {
              className: "SchematicUploadInstructions Active",
              children: tU.name
            })]
          }) : (0, QU.jsxs)(QU.Fragment, {
            children: [(0, QU.jsx)("div", {
              className: "SchematicUploadIcon",
              children: (0, QU.jsx)(hU.c, {
                name: "up-from-bracket"
              })
            }), (0, QU.jsx)("div", {
              className: "SchematicUploadInstructions",
              children: gU("worldBuilder:dragAFileHere")
            })]
          })]
        }), (0, QU.jsx)(jU.j, {
          disabled: GU || !tU,
          className: "SchematicUploadButton",
          onClick: () => {
            !GU && tU && RU(tU)
          },
          children: GU ? gU("worldBuilder:fileTooBig", {
            maxSizeKb: uU.dd
          }) : gU("worldBuilder:upload")
        })]
      })
    }

    function WU(UU) {
      let {
        ownedSchematics: RU,
        onClose: gU,
        onChosenPreset: tU,
        onChosenFile: pU
      } = UU;
      const {
        t: EU
      } = (0, CU.B)();
      return (0, QU.jsxs)(QU.Fragment, {
        children: [(0, QU.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: EU("worldBuilder:loadSchematic")
        }), (0, QU.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: EU("worldBuilder:chooseOneOfYourSchematics")
        }), (0, QU.jsx)("div", {
          className: "SchematicPopupSchematicListContainer",
          children: (0, QU.jsx)(PU.c, {
            schematics: RU,
            onSchematicPicked: UU => {
              tU(UU.schematicId), gU()
            },
            loading: !1,
            disableAutoExport: !0
          })
        }), (0, QU.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: EU("worldBuilder:uploadNewSchematic")
        }), (0, QU.jsx)(eU, {
          onFilePicked: async UU => {
            try {
              await pU(UU)
            } catch (RU) {
              console.warn("Schematic upload failed", RU)
            } finally {
              gU()
            }
          }
        })]
      })
    }
    var fU = gU(4593),
      xU = gU(1602),
      mU = gU(4040),
      IU = gU(1217);

    function JU(UU) {
      var RU;
      let {
        ownedSchematics: gU,
        onClose: tU,
        onChosenEdit: pU,
        onChosenNew: EU,
        onChosenDownload: TU
      } = UU;
      const {
        t: qU
      } = (0, CU.B)(), [KU, GU] = (0, cU.useState)("choose"), [uU, hU] = (0, cU.useState)(null), [eU, WU] = (0, cU.useState)(null);
      return (0, QU.jsxs)(QU.Fragment, {
        children: [(0, QU.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: qU("worldBuilder:saveSchematic")
        }), "choose" === KU && (0, QU.jsxs)(QU.Fragment, {
          children: [(0, QU.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: qU("worldBuilder:overwriteOneOfYourSchematics")
          }), (0, QU.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, QU.jsx)(PU.c, {
              schematics: gU,
              onSchematicPicked: UU => {
                hU(UU.schematicId), WU("existing"), GU("save")
              },
              loading: !1,
              disableAutoExport: !1
            })
          }), (0, QU.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: qU("general:otherOptions")
          }), (0, QU.jsxs)("div", {
            className: "OtherOptions",
            children: [(0, QU.jsx)(jU.j, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                WU("new"), GU("save")
              },
              children: qU("worldBuilder:saveAsNewSchematic")
            }), (0, QU.jsx)(jU.e, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                WU("file"), GU("save")
              },
              children: qU("worldBuilder:downloadSchematic")
            })]
          })]
        }), "choose" !== KU && (0, QU.jsx)(wU, {
          type: eU,
          ownedSchematics: gU,
          onSubmit: (UU, RU, gU) => {
            "file" === eU ? TU(RU, UU) : "new" === eU ? EU(RU, gU, UU) : pU(uU, RU, gU, UU), tU()
          },
          onBack: () => {
            GU("choose")
          },
          prepopName: "existing" === eU ? null === (RU = gU.find((UU => UU.schematicId === uU))) || void 0 === RU ? void 0 : RU.name : null
        })]
      })
    }

    function wU(UU) {
      let {
        type: RU,
        prepopName: gU,
        ownedSchematics: tU,
        onSubmit: pU,
        onBack: EU
      } = UU;
      const {
        t: PU
      } = (0, CU.B)(), [TU, qU] = (0, cU.useState)(""), [GU, uU] = (0, cU.useState)(""), [hU, eU] = (0, cU.useState)(null), [WU, fU] = (0, cU.useState)(!0), JU = UU => {
        var gU;
        UU = null !== (gU = UU) && void 0 !== gU ? gU : TU;
        const pU = "new" === RU ? (0, IU.y)(UU) : null,
          EU = [...(0, IU.Cb)(UU), ...pU ? [pU] : []];
        return EU.length > 0 ? (eU(EU.join(", ")), !1) : "new" === RU && tU.find((RU => RU.name === UU)) ? (eU(PU("worldBuilder:schematicAlreadyExists")), !1) : (eU(null), !0)
      };
      return (0, QU.jsxs)("div", {
        className: "SaveSchematicWindow",
        children: [(0, QU.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: PU("general:name")
        }), (0, QU.jsx)(xU.d, {
          className: KU()("SaveSchematicName", {
            Error: hU
          }),
          forcedText: gU,
          onValueChange: UU => {
            qU(UU), JU(UU)
          },
          placeholderText: PU("worldBuilder:schematicNamePlaceholder"),
          maxLength: IU.qb
        }), (0, QU.jsx)("h2", {
          className: KU()("SaveSchematicError", {
            Hidden: !hU
          }),
          children: hU
        }), (0, QU.jsx)("h2", {
          className: KU()("SchematicPopupSubtitle", {
            Hidden: "file" === RU
          }),
          children: PU("general:description")
        }), (0, QU.jsx)(xU.d, {
          className: KU()("SaveSchematicDescription", {
            Hidden: "file" === RU
          }),
          onValueChange: uU,
          placeholderText: PU("worldBuilder:schematicDescriptionPlaceholder"),
          maxLength: IU.mb,
          useTextarea: !0
        }), (0, QU.jsxs)("div", {
          className: KU()("SaveSchematicCheckboxContainer", {
            WarningBorder: "existing" === RU
          }),
          children: [(0, QU.jsx)(mU.d, {
            checked: WU,
            onChange: UU => {
              fU(UU.target.checked)
            },
            disabled: !1,
            className: "SaveSchematicCheckbox"
          }), (0, QU.jsx)("h1", {
            className: "SchematicPopupSubtitle",
            children: PU("existing" === RU ? "worldBuilder:overwriteLobbyCode" : "worldBuilder:includeLobbyCode")
          })]
        }), "existing" === RU && (0, QU.jsx)("div", {
          className: "SaveSchematicLobbyCodeWarning",
          children: PU("worldBuilder:lobbyCodeWarning")
        }), (0, QU.jsxs)("div", {
          className: "SaveSchematicButtons",
          children: [(0, QU.jsx)(jU.j, {
            className: "SaveSchematicButton",
            onClick: () => {
              JU() && pU(WU, TU, GU)
            },
            children: PU("file" === RU ? "general:download" : "general:save")
          }), (0, QU.jsx)(jU.E, {
            className: "SaveSchematicButton",
            onClick: EU,
            children: PU("general:cancel")
          })]
        })]
      })
    }
    var nU = gU(1196),
      bU = gU(1637),
      oU = gU(1120);

    function ZU(UU, RU) {
      if ("devDownloadJson" !== UU) ! function(UU, RU) {
        const gU = nU.clientSideServerUrls.getHttpUrlFromWebSocketUrl((0, EU.d)().websocketUrl);
        let TU = !1;
        const qU = async (UU, RU) => {
          if (TU) return;
          TU = !0;
          const {
            gameNameWithVariation: tU,
            lobbyName: PU
          } = (0, EU.d)(), qU = {
            gameNameWithVariation: tU,
            lobbyName: PU
          };
          return await (0, oU.postJsonWithMetricsCookiesAndJsonResponse)(`${gU}/schematic/${UU}`, pU.F[UU].toBuffer({
            ...qU,
            ...RU
          }), {
            retries: 1
          })
        };
        if ("Plugin|WorldBuilder|SaveSchematic" === UU) ! function(UU) {
          let {
            ownedSchematics: RU,
            onChosenDownload: gU,
            onChosenEdit: tU,
            onChosenNew: pU,
            onClose: EU
          } = UU;
          GU.NotificationProvider.showCustomPopup({
            body: UU => (0, QU.jsx)(JU, {
              ownedSchematics: RU,
              onChosenDownload: gU,
              onChosenEdit: tU,
              onChosenNew: pU,
              onClose: UU
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: EU,
            unlockPointerKey: "schematicSaverPopup"
          })
        }({
          ownedSchematics: RU,
          onChosenDownload: (UU, RU) => {
            qU("download-schematic", {
              name: UU,
              includeLobbyCode: RU
            }).then((RU => {
              let {
                buffer: {
                  data: gU
                }
              } = RU;
              const pU = tU.tC.from(gU);
              (0, bU.downloadBlob)(new Blob([pU], {
                type: "application/octet-stream"
              }), `${UU}.bloxdschem`)
            }))
          },
          onClose: () => {
            qU("cancel", {})
          },
          onChosenEdit: (UU, RU, gU, tU) => {
            qU("save-to-profile", {
              schematicId: UU,
              name: RU,
              description: gU,
              includeLobbyCode: tU
            })
          },
          onChosenNew: (UU, RU, gU) => {
            qU("save-to-profile", {
              schematicId: null,
              name: UU,
              description: RU,
              includeLobbyCode: gU
            })
          }
        });
        else if ("Plugin|WorldBuilder|LoadSchematic" === UU) ! function(UU) {
          let {
            ownedSchematics: RU,
            onChosenFile: gU,
            onChosenPreset: tU,
            onClose: pU
          } = UU;
          GU.NotificationProvider.showCustomPopup({
            body: UU => (0, QU.jsx)(WU, {
              ownedSchematics: RU,
              onChosenFile: gU,
              onChosenPreset: tU,
              onClose: UU
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: pU,
            unlockPointerKey: "schematicLoaderPopup"
          })
        }({
          ownedSchematics: RU,
          onChosenFile: async UU => {
            const RU = tU.tC.from(await UU.arrayBuffer()),
              {
                gameNameWithVariation: PU,
                lobbyName: TU
              } = (0, EU.d)();
            await (0, oU.postBinaryWithMetricsCookiesAndCustomResponse)(`${gU}/schematic/upload-schematic`, pU.F["upload-schematic"].toBuffer({
              gameNameWithVariation: PU,
              lobbyName: TU,
              schematic: RU
            }), {
              retries: 1
            }, oU.HttpPayloadType.json)
          },
          onChosenPreset: UU => {
            qU("load-from-profile", {
              schematicId: UU
            })
          },
          onClose: () => {
            qU("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ListSchematics" === UU)(0, PU.e)({
          ownedSchematics: Array.isArray(RU) ? RU : RU.schematics,
          currentWorldSchematicId: Array.isArray(RU) ? null : RU.currentWorldSchematicId,
          onClose: () => {
            qU("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ExportWorld" === UU) {
          var KU;
          const UU = null !== (KU = RU.schematic) && void 0 !== KU ? KU : RU;
          (0, fU.h)({
            schematic: UU,
            inSourceWorld: UU.schematicId === RU.currentWorldSchematicId,
            onClose: () => {
              qU("cancel", {})
            }
          })
        } else console.error(`Unknown plugin message type ${UU}`)
      }(UU, RU);
      else {
        const UU = JSON.stringify(RU.data, null, 2);
        (0, bU.downloadBlob)(new Blob([UU], {
          type: "application/json"
        }), RU.filename)
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);