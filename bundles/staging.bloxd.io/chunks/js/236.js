export const id = 236;
export const ids = [236];
export const modules = {
  37291: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => zM,
      g: () => mM
    });
    var OM = iM(44),
      SM = iM(1429),
      jM = iM(1188),
      aM = iM(1396),
      PM = iM(3875),
      nM = iM(5335),
      QM = iM(1303);

    function zM(MM) {
      let {
        loading: rM,
        schematics: iM,
        onSchematicPicked: OM,
        selectedSchematicIdList: SM = [],
        disableAutoExport: nM
      } = MM;
      const {
        t: zM
      } = (0, jM.A)();
      return (0, QM.jsxs)("div", {
        className: "SchematicList",
        children: [rM && (0, QM.jsx)(aM.d, {}), !rM && 0 === iM.length && (0, QM.jsx)("div", {
          className: "NoSchematicsText",
          children: zM("worldBuilder:noSavedSchematic")
        }), !rM && iM.map((MM => (0, QM.jsx)(PM.h, {
          source: {
            type: "schematic",
            schematic: MM
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            OM(MM)
          },
          isSelected: SM.includes(MM.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: MM.isAutoExported && nM,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, MM.schematicId)))]
      })
    }

    function LM(MM) {
      let {
        ownedSchematics: rM,
        currentWorldSchematicId: iM,
        onClose: SM
      } = MM;
      const {
        t: aM
      } = (0, jM.A)(), [PM, LM] = (0, OM.useState)(null);
      return (0, QM.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === PM && (0, QM.jsxs)(QM.Fragment, {
          children: [(0, QM.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: aM("worldBuilder:schematicList")
          }), (0, QM.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: aM("worldBuilder:clickSchematicForOptions")
          }), (0, QM.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, QM.jsx)(zM, {
              loading: !1,
              schematics: rM,
              onSchematicPicked: MM => {
                LM(MM)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== PM && (0, QM.jsx)(nM.g, {
          schematic: PM,
          inSourceWorld: PM.schematicId === iM,
          onSchematicUpdate: MM => {
            LM(MM)
          },
          onClose: () => {
            LM(null), SM()
          }
        })]
      })
    }

    function mM(MM) {
      let {
        ownedSchematics: rM,
        currentWorldSchematicId: iM,
        onClose: OM
      } = MM;
      SM.NotificationProvider.showCustomPopup({
        body: MM => (0, QM.jsx)(LM, {
          ownedSchematics: rM,
          currentWorldSchematicId: iM,
          onClose: MM
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: OM,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  44386: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      runClientGameMessage: () => uM
    });
    var OM = iM(4118),
      SM = iM(4129),
      jM = iM(1373),
      aM = iM(37291),
      PM = iM(5364),
      nM = iM(1116),
      QM = iM.n(nM),
      zM = iM(44),
      LM = iM(1429),
      mM = iM(1520),
      HM = iM(332),
      hM = iM(1188),
      JM = iM(1398),
      dM = iM(1303);

    function yM(MM) {
      let {
        onFilePicked: rM
      } = MM;
      const {
        t: iM
      } = (0, hM.A)(), [OM, SM] = (0, zM.useState)(null), {
        getRootProps: jM,
        getInputProps: aM,
        isDragActive: nM
      } = (0, PM.e)({
        onDrop: MM => {
          MM.length > 0 && SM(MM[0])
        },
        useFsAccessApi: !1
      }), LM = OM && OM.size > 1024 * HM.bd;
      return (0, dM.jsxs)("div", {
        className: "SchematicUploadContainer",
        children: [(0, dM.jsxs)("div", {
          ...jM({
            className: QM()("SchematicUpload", {
              ActiveDrag: nM
            })
          }),
          children: [(0, dM.jsx)("input", {
            ...aM({
              accept: ".bloxdschem"
            })
          }), !nM && OM ? (0, dM.jsxs)(dM.Fragment, {
            children: [(0, dM.jsx)("div", {
              className: QM()("SchematicUploadIcon", "Active", {
                TooBig: LM
              }),
              children: (0, dM.jsx)(JM.b, {
                name: "file-lines"
              })
            }), (0, dM.jsx)("div", {
              className: "SchematicUploadInstructions Active",
              children: OM.name
            })]
          }) : (0, dM.jsxs)(dM.Fragment, {
            children: [(0, dM.jsx)("div", {
              className: "SchematicUploadIcon",
              children: (0, dM.jsx)(JM.b, {
                name: "up-from-bracket"
              })
            }), (0, dM.jsx)("div", {
              className: "SchematicUploadInstructions",
              children: iM("worldBuilder:dragAFileHere")
            })]
          })]
        }), (0, dM.jsx)(mM.p, {
          disabled: LM || !OM,
          className: "SchematicUploadButton",
          onClick: () => {
            !LM && OM && rM(OM)
          },
          children: LM ? iM("worldBuilder:fileTooBig", {
            maxSizeKb: HM.bd
          }) : iM("worldBuilder:upload")
        })]
      })
    }

    function lM(MM) {
      let {
        ownedSchematics: rM,
        onClose: iM,
        onChosenPreset: OM,
        onChosenFile: SM
      } = MM;
      const {
        t: jM
      } = (0, hM.A)();
      return (0, dM.jsxs)(dM.Fragment, {
        children: [(0, dM.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: jM("worldBuilder:loadSchematic")
        }), (0, dM.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: jM("worldBuilder:chooseOneOfYourSchematics")
        }), (0, dM.jsx)("div", {
          className: "SchematicPopupSchematicListContainer",
          children: (0, dM.jsx)(aM.d, {
            schematics: rM,
            onSchematicPicked: MM => {
              OM(MM.schematicId), iM()
            },
            loading: !1,
            disableAutoExport: !0
          })
        }), (0, dM.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: jM("worldBuilder:uploadNewSchematic")
        }), (0, dM.jsx)(yM, {
          onFilePicked: async MM => {
            try {
              await SM(MM)
            } catch (rM) {
              console.warn("Schematic upload failed", rM)
            } finally {
              iM()
            }
          }
        })]
      })
    }
    var EM = iM(5335),
      UM = iM(1763),
      GM = iM(4720),
      CM = iM(1229);

    function eM(MM) {
      var rM;
      let {
        ownedSchematics: iM,
        onClose: OM,
        onChosenEdit: SM,
        onChosenNew: jM,
        onChosenDownload: PM
      } = MM;
      const {
        t: nM
      } = (0, hM.A)(), [QM, LM] = (0, zM.useState)("choose"), [HM, JM] = (0, zM.useState)(null), [yM, lM] = (0, zM.useState)(null);
      return (0, dM.jsxs)(dM.Fragment, {
        children: [(0, dM.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: nM("worldBuilder:saveSchematic")
        }), "choose" === QM && (0, dM.jsxs)(dM.Fragment, {
          children: [(0, dM.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: nM("worldBuilder:overwriteOneOfYourSchematics")
          }), (0, dM.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, dM.jsx)(aM.d, {
              schematics: iM,
              onSchematicPicked: MM => {
                JM(MM.schematicId), lM("existing"), LM("save")
              },
              loading: !1,
              disableAutoExport: !1
            })
          }), (0, dM.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: nM("general:otherOptions")
          }), (0, dM.jsxs)("div", {
            className: "OtherOptions",
            children: [(0, dM.jsx)(mM.p, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                lM("new"), LM("save")
              },
              children: nM("worldBuilder:saveAsNewSchematic")
            }), (0, dM.jsx)(mM.e, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                lM("file"), LM("save")
              },
              children: nM("worldBuilder:downloadSchematic")
            })]
          })]
        }), "choose" !== QM && (0, dM.jsx)(bM, {
          type: yM,
          ownedSchematics: iM,
          onSubmit: (MM, rM, iM) => {
            "file" === yM ? PM(rM, MM) : "new" === yM ? jM(rM, iM, MM) : SM(HM, rM, iM, MM), OM()
          },
          onBack: () => {
            LM("choose")
          },
          prepopName: "existing" === yM ? null === (rM = iM.find((MM => MM.schematicId === HM))) || void 0 === rM ? void 0 : rM.name : null
        })]
      })
    }

    function bM(MM) {
      let {
        type: rM,
        prepopName: iM,
        ownedSchematics: OM,
        onSubmit: SM,
        onBack: jM
      } = MM;
      const {
        t: aM
      } = (0, hM.A)(), [PM, nM] = (0, zM.useState)(""), [LM, HM] = (0, zM.useState)(""), [JM, yM] = (0, zM.useState)(null), [lM, EM] = (0, zM.useState)(!0), eM = MM => {
        var iM;
        MM = null !== (iM = MM) && void 0 !== iM ? iM : PM;
        const SM = "new" === rM ? (0, CM.A)(MM) : null,
          jM = [...(0, CM.Bb)(MM), ...SM ? [SM] : []];
        return jM.length > 0 ? (yM(jM.join(", ")), !1) : "new" === rM && OM.find((rM => rM.name === MM)) ? (yM(aM("worldBuilder:schematicAlreadyExists")), !1) : (yM(null), !0)
      };
      return (0, dM.jsxs)("div", {
        className: "SaveSchematicWindow",
        children: [(0, dM.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: aM("general:name")
        }), (0, dM.jsx)(UM.b, {
          className: QM()("SaveSchematicName", {
            Error: JM
          }),
          forcedText: iM,
          onValueChange: MM => {
            nM(MM), eM(MM)
          },
          placeholderText: aM("worldBuilder:schematicNamePlaceholder"),
          maxLength: CM.sb
        }), (0, dM.jsx)("h2", {
          className: QM()("SaveSchematicError", {
            Hidden: !JM
          }),
          children: JM
        }), (0, dM.jsx)("h2", {
          className: QM()("SchematicPopupSubtitle", {
            Hidden: "file" === rM
          }),
          children: aM("general:description")
        }), (0, dM.jsx)(UM.b, {
          className: QM()("SaveSchematicDescription", {
            Hidden: "file" === rM
          }),
          onValueChange: HM,
          placeholderText: aM("worldBuilder:schematicDescriptionPlaceholder"),
          maxLength: CM.pb,
          useTextarea: !0
        }), (0, dM.jsxs)("div", {
          className: QM()("SaveSchematicCheckboxContainer", {
            WarningBorder: "existing" === rM
          }),
          children: [(0, dM.jsx)(GM.c, {
            checked: lM,
            onChange: MM => {
              EM(MM.target.checked)
            },
            disabled: !1,
            className: "SaveSchematicCheckbox"
          }), (0, dM.jsx)("h1", {
            className: "SchematicPopupSubtitle",
            children: aM("existing" === rM ? "worldBuilder:overwriteLobbyCode" : "worldBuilder:includeLobbyCode")
          })]
        }), "existing" === rM && (0, dM.jsx)("div", {
          className: "SaveSchematicLobbyCodeWarning",
          children: aM("worldBuilder:lobbyCodeWarning")
        }), (0, dM.jsxs)("div", {
          className: "SaveSchematicButtons",
          children: [(0, dM.jsx)(mM.p, {
            className: "SaveSchematicButton",
            onClick: () => {
              eM() && SM(lM, PM, LM)
            },
            children: aM("file" === rM ? "general:download" : "general:save")
          }), (0, dM.jsx)(mM.J, {
            className: "SaveSchematicButton",
            onClick: jM,
            children: aM("general:cancel")
          })]
        })]
      })
    }
    var wM = iM(1202),
      tM = iM(1830),
      gM = iM(1144);

    function uM(MM, rM) {
      if ("devDownloadJson" !== MM) ! function(MM, rM) {
        const iM = wM.clientSideServerUrls.getHttpUrlFromWebSocketUrl((0, jM.e)().websocketUrl);
        let PM = !1;
        const nM = async (MM, rM) => {
          if (PM) return;
          PM = !0;
          const {
            gameNameWithVariation: OM,
            lobbyName: aM
          } = (0, jM.e)(), nM = {
            gameNameWithVariation: OM,
            lobbyName: aM
          };
          return await (0, gM.postJsonWithMetricsCookiesAndJsonResponse)(`${iM}/schematic/${MM}`, SM.z[MM].toBuffer({
            ...nM,
            ...rM
          }), {
            retries: 1
          })
        };
        if ("Plugin|WorldBuilder|SaveSchematic" === MM) ! function(MM) {
          let {
            ownedSchematics: rM,
            onChosenDownload: iM,
            onChosenEdit: OM,
            onChosenNew: SM,
            onClose: jM
          } = MM;
          LM.NotificationProvider.showCustomPopup({
            body: MM => (0, dM.jsx)(eM, {
              ownedSchematics: rM,
              onChosenDownload: iM,
              onChosenEdit: OM,
              onChosenNew: SM,
              onClose: MM
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: jM,
            unlockPointerKey: "schematicSaverPopup"
          })
        }({
          ownedSchematics: rM,
          onChosenDownload: (MM, rM) => {
            nM("download-schematic", {
              name: MM,
              includeLobbyCode: rM
            }).then((rM => {
              let {
                buffer: {
                  data: iM
                }
              } = rM;
              const SM = OM.Vz.from(iM);
              (0, tM.downloadBlob)(new Blob([SM], {
                type: "application/octet-stream"
              }), `${MM}.bloxdschem`)
            }))
          },
          onClose: () => {
            nM("cancel", {})
          },
          onChosenEdit: (MM, rM, iM, OM) => {
            nM("save-to-profile", {
              schematicId: MM,
              name: rM,
              description: iM,
              includeLobbyCode: OM
            })
          },
          onChosenNew: (MM, rM, iM) => {
            nM("save-to-profile", {
              schematicId: null,
              name: MM,
              description: rM,
              includeLobbyCode: iM
            })
          }
        });
        else if ("Plugin|WorldBuilder|LoadSchematic" === MM) ! function(MM) {
          let {
            ownedSchematics: rM,
            onChosenFile: iM,
            onChosenPreset: OM,
            onClose: SM
          } = MM;
          LM.NotificationProvider.showCustomPopup({
            body: MM => (0, dM.jsx)(lM, {
              ownedSchematics: rM,
              onChosenFile: iM,
              onChosenPreset: OM,
              onClose: MM
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: SM,
            unlockPointerKey: "schematicLoaderPopup"
          })
        }({
          ownedSchematics: rM,
          onChosenFile: async MM => {
            const rM = OM.Vz.from(await MM.arrayBuffer()),
              {
                gameNameWithVariation: aM,
                lobbyName: PM
              } = (0, jM.e)();
            await (0, gM.postBinaryWithMetricsCookiesAndCustomResponse)(`${iM}/schematic/upload-schematic`, SM.z["upload-schematic"].toBuffer({
              gameNameWithVariation: aM,
              lobbyName: PM,
              schematic: rM
            }), {
              retries: 1
            }, gM.HttpPayloadType.json)
          },
          onChosenPreset: MM => {
            nM("load-from-profile", {
              schematicId: MM
            })
          },
          onClose: () => {
            nM("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ListSchematics" === MM)(0, aM.g)({
          ownedSchematics: Array.isArray(rM) ? rM : rM.schematics,
          currentWorldSchematicId: Array.isArray(rM) ? null : rM.currentWorldSchematicId,
          onClose: () => {
            nM("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ExportWorld" === MM) {
          var QM;
          const MM = null !== (QM = rM.schematic) && void 0 !== QM ? QM : rM;
          (0, EM.j)({
            schematic: MM,
            inSourceWorld: MM.schematicId === rM.currentWorldSchematicId,
            onClose: () => {
              nM("cancel", {})
            }
          })
        } else console.error(`Unknown plugin message type ${MM}`)
      }(MM, rM);
      else {
        const MM = JSON.stringify(rM.data, null, 2);
        (0, tM.downloadBlob)(new Blob([MM], {
          type: "application/json"
        }), rM.filename)
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);