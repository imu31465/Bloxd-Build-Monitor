export const id = 214;
export const ids = [214];
export const modules = {
  36234: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => FC,
      e: () => NC
    });
    var QC = ZC(48),
      wC = ZC(1307),
      bC = ZC(1143),
      nC = ZC(1295),
      fC = ZC(3448),
      oC = ZC(4873),
      qC = ZC(1056);

    function FC(CC) {
      let {
        loading: zC,
        schematics: ZC,
        onSchematicPicked: QC,
        selectedSchematicIdList: wC = [],
        disableAutoExport: oC
      } = CC;
      const {
        t: FC
      } = (0, bC.y)();
      return (0, qC.jsxs)("div", {
        className: "SchematicList",
        children: [zC && (0, qC.jsx)(nC.d, {}), !zC && 0 === ZC.length && (0, qC.jsx)("div", {
          className: "NoSchematicsText",
          children: FC("worldBuilder:noSavedSchematic")
        }), !zC && ZC.map((CC => (0, qC.jsx)(fC.d, {
          source: {
            type: "schematic",
            schematic: CC
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            QC(CC)
          },
          isSelected: wC.includes(CC.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: CC.isAutoExported && oC,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, CC.schematicId)))]
      })
    }

    function WC(CC) {
      let {
        ownedSchematics: zC,
        currentWorldSchematicId: ZC,
        onClose: wC
      } = CC;
      const {
        t: nC
      } = (0, bC.y)(), [fC, WC] = (0, QC.useState)(null);
      return (0, qC.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === fC && (0, qC.jsxs)(qC.Fragment, {
          children: [(0, qC.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: nC("worldBuilder:schematicList")
          }), (0, qC.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: nC("worldBuilder:clickSchematicForOptions")
          }), (0, qC.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, qC.jsx)(FC, {
              loading: !1,
              schematics: zC,
              onSchematicPicked: CC => {
                WC(CC)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== fC && (0, qC.jsx)(oC.k, {
          schematic: fC,
          inSourceWorld: fC.schematicId === ZC,
          onSchematicUpdate: CC => {
            WC(CC)
          },
          onClose: () => {
            WC(null), wC()
          }
        })]
      })
    }

    function NC(CC) {
      let {
        ownedSchematics: zC,
        currentWorldSchematicId: ZC,
        onClose: QC
      } = CC;
      wC.NotificationProvider.showCustomPopup({
        body: CC => (0, qC.jsx)(WC, {
          ownedSchematics: zC,
          currentWorldSchematicId: ZC,
          onClose: CC
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: QC,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  41552: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      runClientGameMessage: () => KC
    });
    var QC = ZC(3661),
      wC = ZC(3677),
      bC = ZC(1275),
      nC = ZC(36234),
      fC = ZC(4895),
      oC = ZC(1002),
      qC = ZC.n(oC),
      FC = ZC(48),
      WC = ZC(1307),
      NC = ZC(1388),
      MC = ZC(326),
      gC = ZC(1143),
      SC = ZC(1013),
      pC = ZC(1056);

    function PC(CC) {
      let {
        onFilePicked: zC
      } = CC;
      const {
        t: ZC
      } = (0, gC.y)(), [QC, wC] = (0, FC.useState)(null), {
        getRootProps: bC,
        getInputProps: nC,
        isDragActive: oC
      } = (0, fC.d)({
        onDrop: CC => {
          CC.length > 0 && wC(CC[0])
        },
        useFsAccessApi: !1
      }), WC = QC && QC.size > 1024 * MC.Mc;
      return (0, pC.jsxs)("div", {
        className: "SchematicUploadContainer",
        children: [(0, pC.jsxs)("div", {
          ...bC({
            className: qC()("SchematicUpload", {
              ActiveDrag: oC
            })
          }),
          children: [(0, pC.jsx)("input", {
            ...nC({
              accept: ".bloxdschem"
            })
          }), !oC && QC ? (0, pC.jsxs)(pC.Fragment, {
            children: [(0, pC.jsx)("div", {
              className: qC()("SchematicUploadIcon", "Active", {
                TooBig: WC
              }),
              children: (0, pC.jsx)(SC.c, {
                name: "file-lines"
              })
            }), (0, pC.jsx)("div", {
              className: "SchematicUploadInstructions Active",
              children: QC.name
            })]
          }) : (0, pC.jsxs)(pC.Fragment, {
            children: [(0, pC.jsx)("div", {
              className: "SchematicUploadIcon",
              children: (0, pC.jsx)(SC.c, {
                name: "up-from-bracket"
              })
            }), (0, pC.jsx)("div", {
              className: "SchematicUploadInstructions",
              children: ZC("worldBuilder:dragAFileHere")
            })]
          })]
        }), (0, pC.jsx)(NC.o, {
          disabled: WC || !QC,
          className: "SchematicUploadButton",
          onClick: () => {
            !WC && QC && zC(QC)
          },
          children: WC ? ZC("worldBuilder:fileTooBig", {
            maxSizeKb: MC.Mc
          }) : ZC("worldBuilder:upload")
        })]
      })
    }

    function GC(CC) {
      let {
        ownedSchematics: zC,
        onClose: ZC,
        onChosenPreset: QC,
        onChosenFile: wC
      } = CC;
      const {
        t: bC
      } = (0, gC.y)();
      return (0, pC.jsxs)(pC.Fragment, {
        children: [(0, pC.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: bC("worldBuilder:loadSchematic")
        }), (0, pC.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: bC("worldBuilder:chooseOneOfYourSchematics")
        }), (0, pC.jsx)("div", {
          className: "SchematicPopupSchematicListContainer",
          children: (0, pC.jsx)(nC.d, {
            schematics: zC,
            onSchematicPicked: CC => {
              QC(CC.schematicId), ZC()
            },
            loading: !1,
            disableAutoExport: !0
          })
        }), (0, pC.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: bC("worldBuilder:uploadNewSchematic")
        }), (0, pC.jsx)(PC, {
          onFilePicked: async CC => {
            try {
              await wC(CC)
            } catch (zC) {
              console.warn("Schematic upload failed", zC)
            } finally {
              ZC()
            }
          }
        })]
      })
    }
    var RC = ZC(4873),
      AC = ZC(1593),
      xC = ZC(4300),
      JC = ZC(1169);

    function IC(CC) {
      var zC;
      let {
        ownedSchematics: ZC,
        onClose: QC,
        onChosenEdit: wC,
        onChosenNew: bC,
        onChosenDownload: fC
      } = CC;
      const {
        t: oC
      } = (0, gC.y)(), [qC, WC] = (0, FC.useState)("choose"), [MC, SC] = (0, FC.useState)(null), [PC, GC] = (0, FC.useState)(null);
      return (0, pC.jsxs)(pC.Fragment, {
        children: [(0, pC.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: oC("worldBuilder:saveSchematic")
        }), "choose" === qC && (0, pC.jsxs)(pC.Fragment, {
          children: [(0, pC.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: oC("worldBuilder:overwriteOneOfYourSchematics")
          }), (0, pC.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, pC.jsx)(nC.d, {
              schematics: ZC,
              onSchematicPicked: CC => {
                SC(CC.schematicId), GC("existing"), WC("save")
              },
              loading: !1,
              disableAutoExport: !1
            })
          }), (0, pC.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: oC("general:otherOptions")
          }), (0, pC.jsxs)("div", {
            className: "OtherOptions",
            children: [(0, pC.jsx)(NC.o, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                GC("new"), WC("save")
              },
              children: oC("worldBuilder:saveAsNewSchematic")
            }), (0, pC.jsx)(NC.g, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                GC("file"), WC("save")
              },
              children: oC("worldBuilder:downloadSchematic")
            })]
          })]
        }), "choose" !== qC && (0, pC.jsx)(iC, {
          type: PC,
          ownedSchematics: ZC,
          onSubmit: (CC, zC, ZC) => {
            "file" === PC ? fC(zC, CC) : "new" === PC ? bC(zC, ZC, CC) : wC(MC, zC, ZC, CC), QC()
          },
          onBack: () => {
            WC("choose")
          },
          prepopName: "existing" === PC ? null === (zC = ZC.find((CC => CC.schematicId === MC))) || void 0 === zC ? void 0 : zC.name : null
        })]
      })
    }

    function iC(CC) {
      let {
        type: zC,
        prepopName: ZC,
        ownedSchematics: QC,
        onSubmit: wC,
        onBack: bC
      } = CC;
      const {
        t: nC
      } = (0, gC.y)(), [fC, oC] = (0, FC.useState)(""), [WC, MC] = (0, FC.useState)(""), [SC, PC] = (0, FC.useState)(null), [GC, RC] = (0, FC.useState)(!0), IC = CC => {
        var ZC;
        CC = null !== (ZC = CC) && void 0 !== ZC ? ZC : fC;
        const wC = "new" === zC ? (0, JC.G)(CC) : null,
          bC = [...(0, JC.Hb)(CC), ...wC ? [wC] : []];
        return bC.length > 0 ? (PC(bC.join(", ")), !1) : "new" === zC && QC.find((zC => zC.name === CC)) ? (PC(nC("worldBuilder:schematicAlreadyExists")), !1) : (PC(null), !0)
      };
      return (0, pC.jsxs)("div", {
        className: "SaveSchematicWindow",
        children: [(0, pC.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: nC("general:name")
        }), (0, pC.jsx)(AC.c, {
          className: qC()("SaveSchematicName", {
            Error: SC
          }),
          forcedText: ZC,
          onValueChange: CC => {
            oC(CC), IC(CC)
          },
          placeholderText: nC("worldBuilder:schematicNamePlaceholder"),
          maxLength: JC.xb
        }), (0, pC.jsx)("h2", {
          className: qC()("SaveSchematicError", {
            Hidden: !SC
          }),
          children: SC
        }), (0, pC.jsx)("h2", {
          className: qC()("SchematicPopupSubtitle", {
            Hidden: "file" === zC
          }),
          children: nC("general:description")
        }), (0, pC.jsx)(AC.c, {
          className: qC()("SaveSchematicDescription", {
            Hidden: "file" === zC
          }),
          onValueChange: MC,
          placeholderText: nC("worldBuilder:schematicDescriptionPlaceholder"),
          maxLength: JC.tb,
          useTextarea: !0
        }), (0, pC.jsxs)("div", {
          className: qC()("SaveSchematicCheckboxContainer", {
            WarningBorder: "existing" === zC
          }),
          children: [(0, pC.jsx)(xC.e, {
            checked: GC,
            onChange: CC => {
              RC(CC.target.checked)
            },
            disabled: !1,
            className: "SaveSchematicCheckbox"
          }), (0, pC.jsx)("h1", {
            className: "SchematicPopupSubtitle",
            children: nC("existing" === zC ? "worldBuilder:overwriteLobbyCode" : "worldBuilder:includeLobbyCode")
          })]
        }), "existing" === zC && (0, pC.jsx)("div", {
          className: "SaveSchematicLobbyCodeWarning",
          children: nC("worldBuilder:lobbyCodeWarning")
        }), (0, pC.jsxs)("div", {
          className: "SaveSchematicButtons",
          children: [(0, pC.jsx)(NC.o, {
            className: "SaveSchematicButton",
            onClick: () => {
              IC() && wC(GC, fC, WC)
            },
            children: nC("file" === zC ? "general:download" : "general:save")
          }), (0, pC.jsx)(NC.I, {
            className: "SaveSchematicButton",
            onClick: bC,
            children: nC("general:cancel")
          })]
        })]
      })
    }
    var vC = ZC(1149),
      eC = ZC(1645),
      hC = ZC(1078);

    function KC(CC, zC) {
      if ("devDownloadJson" !== CC) ! function(CC, zC) {
        const ZC = vC.clientSideServerUrls.getHttpUrlFromWebSocketUrl((0, bC.d)().websocketUrl);
        let fC = !1;
        const oC = async (CC, zC) => {
          if (fC) return;
          fC = !0;
          const {
            gameNameWithVariation: QC,
            lobbyName: nC
          } = (0, bC.d)(), oC = {
            gameNameWithVariation: QC,
            lobbyName: nC
          };
          return await (0, hC.postJsonWithMetricsCookiesAndJsonResponse)(`${ZC}/schematic/${CC}`, wC.A[CC].toBuffer({
            ...oC,
            ...zC
          }), {
            retries: 1
          })
        };
        if ("Plugin|WorldBuilder|SaveSchematic" === CC) ! function(CC) {
          let {
            ownedSchematics: zC,
            onChosenDownload: ZC,
            onChosenEdit: QC,
            onChosenNew: wC,
            onClose: bC
          } = CC;
          WC.NotificationProvider.showCustomPopup({
            body: CC => (0, pC.jsx)(IC, {
              ownedSchematics: zC,
              onChosenDownload: ZC,
              onChosenEdit: QC,
              onChosenNew: wC,
              onClose: CC
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: bC,
            unlockPointerKey: "schematicSaverPopup"
          })
        }({
          ownedSchematics: zC,
          onChosenDownload: (CC, zC) => {
            oC("download-schematic", {
              name: CC,
              includeLobbyCode: zC
            }).then((zC => {
              let {
                buffer: {
                  data: ZC
                }
              } = zC;
              const wC = QC.gg.from(ZC);
              (0, eC.downloadBlob)(new Blob([wC], {
                type: "application/octet-stream"
              }), `${CC}.bloxdschem`)
            }))
          },
          onClose: () => {
            oC("cancel", {})
          },
          onChosenEdit: (CC, zC, ZC, QC) => {
            oC("save-to-profile", {
              schematicId: CC,
              name: zC,
              description: ZC,
              includeLobbyCode: QC
            })
          },
          onChosenNew: (CC, zC, ZC) => {
            oC("save-to-profile", {
              schematicId: null,
              name: CC,
              description: zC,
              includeLobbyCode: ZC
            })
          }
        });
        else if ("Plugin|WorldBuilder|LoadSchematic" === CC) ! function(CC) {
          let {
            ownedSchematics: zC,
            onChosenFile: ZC,
            onChosenPreset: QC,
            onClose: wC
          } = CC;
          WC.NotificationProvider.showCustomPopup({
            body: CC => (0, pC.jsx)(GC, {
              ownedSchematics: zC,
              onChosenFile: ZC,
              onChosenPreset: QC,
              onClose: CC
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: wC,
            unlockPointerKey: "schematicLoaderPopup"
          })
        }({
          ownedSchematics: zC,
          onChosenFile: async CC => {
            const zC = QC.gg.from(await CC.arrayBuffer()),
              {
                gameNameWithVariation: nC,
                lobbyName: fC
              } = (0, bC.d)();
            await (0, hC.postBinaryWithMetricsCookiesAndCustomResponse)(`${ZC}/schematic/upload-schematic`, wC.A["upload-schematic"].toBuffer({
              gameNameWithVariation: nC,
              lobbyName: fC,
              schematic: zC
            }), {
              retries: 1
            }, hC.HttpPayloadType.json)
          },
          onChosenPreset: CC => {
            oC("load-from-profile", {
              schematicId: CC
            })
          },
          onClose: () => {
            oC("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ListSchematics" === CC)(0, nC.e)({
          ownedSchematics: Array.isArray(zC) ? zC : zC.schematics,
          currentWorldSchematicId: Array.isArray(zC) ? null : zC.currentWorldSchematicId,
          onClose: () => {
            oC("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ExportWorld" === CC) {
          var qC;
          const CC = null !== (qC = zC.schematic) && void 0 !== qC ? qC : zC;
          (0, RC.l)({
            schematic: CC,
            inSourceWorld: CC.schematicId === zC.currentWorldSchematicId,
            onClose: () => {
              oC("cancel", {})
            }
          })
        } else console.error(`Unknown plugin message type ${CC}`)
      }(CC, zC);
      else {
        const CC = JSON.stringify(zC.data, null, 2);
        (0, eC.downloadBlob)(new Blob([CC], {
          type: "application/json"
        }), zC.filename)
      }
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);