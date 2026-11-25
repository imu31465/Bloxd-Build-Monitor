export const id = 222;
export const ids = [222];
export const modules = {
  36644: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => gQ,
      f: () => rQ
    });
    var wQ = XQ(61),
      qQ = XQ(1404),
      TQ = XQ(1226),
      zQ = XQ(1391),
      sQ = XQ(3732),
      FQ = XQ(5283),
      PQ = XQ(1145);

    function gQ(QQ) {
      let {
        loading: WQ,
        schematics: XQ,
        onSchematicPicked: wQ,
        selectedSchematicIdList: qQ = [],
        disableAutoExport: FQ
      } = QQ;
      const {
        t: gQ
      } = (0, TQ.C)();
      return (0, PQ.jsxs)("div", {
        className: "SchematicList",
        children: [WQ && (0, PQ.jsx)(zQ.e, {}), !WQ && 0 === XQ.length && (0, PQ.jsx)("div", {
          className: "NoSchematicsText",
          children: gQ("worldBuilder:noSavedSchematic")
        }), !WQ && XQ.map((QQ => (0, PQ.jsx)(sQ.d, {
          source: {
            type: "schematic",
            schematic: QQ
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            wQ(QQ)
          },
          isSelected: qQ.includes(QQ.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: QQ.isAutoExported && FQ,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, QQ.schematicId)))]
      })
    }

    function JQ(QQ) {
      let {
        ownedSchematics: WQ,
        currentWorldSchematicId: XQ,
        onClose: qQ
      } = QQ;
      const {
        t: zQ
      } = (0, TQ.C)(), [sQ, JQ] = (0, wQ.useState)(null);
      return (0, PQ.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === sQ && (0, PQ.jsxs)(PQ.Fragment, {
          children: [(0, PQ.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: zQ("worldBuilder:schematicList")
          }), (0, PQ.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: zQ("worldBuilder:clickSchematicForOptions")
          }), (0, PQ.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, PQ.jsx)(gQ, {
              loading: !1,
              schematics: WQ,
              onSchematicPicked: QQ => {
                JQ(QQ)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== sQ && (0, PQ.jsx)(FQ.h, {
          schematic: sQ,
          inSourceWorld: sQ.schematicId === XQ,
          onSchematicUpdate: QQ => {
            JQ(QQ)
          },
          onClose: () => {
            JQ(null), qQ()
          }
        })]
      })
    }

    function rQ(QQ) {
      let {
        ownedSchematics: WQ,
        currentWorldSchematicId: XQ,
        onClose: wQ
      } = QQ;
      qQ.NotificationProvider.showCustomPopup({
        body: QQ => (0, PQ.jsx)(JQ, {
          ownedSchematics: WQ,
          currentWorldSchematicId: XQ,
          onClose: QQ
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: wQ,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  41986: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      runClientGameMessage: () => hQ
    });
    var wQ = XQ(3963),
      qQ = XQ(3984),
      TQ = XQ(1376),
      zQ = XQ(36644),
      sQ = XQ(5310),
      FQ = XQ(1081),
      PQ = XQ.n(FQ),
      gQ = XQ(61),
      JQ = XQ(1404),
      rQ = XQ(1507),
      IQ = XQ(402),
      jQ = XQ(1226),
      BQ = XQ(1094),
      yQ = XQ(1145);

    function VQ(QQ) {
      let {
        onFilePicked: WQ
      } = QQ;
      const {
        t: XQ
      } = (0, jQ.C)(), [wQ, qQ] = (0, gQ.useState)(null), {
        getRootProps: TQ,
        getInputProps: zQ,
        isDragActive: FQ
      } = (0, sQ.c)({
        onDrop: QQ => {
          QQ.length > 0 && qQ(QQ[0])
        },
        useFsAccessApi: !1
      }), JQ = wQ && wQ.size > 1024 * IQ.ad;
      return (0, yQ.jsxs)("div", {
        className: "SchematicUploadContainer",
        children: [(0, yQ.jsxs)("div", {
          ...TQ({
            className: PQ()("SchematicUpload", {
              ActiveDrag: FQ
            })
          }),
          children: [(0, yQ.jsx)("input", {
            ...zQ({
              accept: ".bloxdschem"
            })
          }), !FQ && wQ ? (0, yQ.jsxs)(yQ.Fragment, {
            children: [(0, yQ.jsx)("div", {
              className: PQ()("SchematicUploadIcon", "Active", {
                TooBig: JQ
              }),
              children: (0, yQ.jsx)(BQ.d, {
                name: "file-lines"
              })
            }), (0, yQ.jsx)("div", {
              className: "SchematicUploadInstructions Active",
              children: wQ.name
            })]
          }) : (0, yQ.jsxs)(yQ.Fragment, {
            children: [(0, yQ.jsx)("div", {
              className: "SchematicUploadIcon",
              children: (0, yQ.jsx)(BQ.d, {
                name: "up-from-bracket"
              })
            }), (0, yQ.jsx)("div", {
              className: "SchematicUploadInstructions",
              children: XQ("worldBuilder:dragAFileHere")
            })]
          })]
        }), (0, yQ.jsx)(rQ.s, {
          disabled: JQ || !wQ,
          className: "SchematicUploadButton",
          onClick: () => {
            !JQ && wQ && WQ(wQ)
          },
          children: JQ ? XQ("worldBuilder:fileTooBig", {
            maxSizeKb: IQ.ad
          }) : XQ("worldBuilder:upload")
        })]
      })
    }

    function DQ(QQ) {
      let {
        ownedSchematics: WQ,
        onClose: XQ,
        onChosenPreset: wQ,
        onChosenFile: qQ
      } = QQ;
      const {
        t: TQ
      } = (0, jQ.C)();
      return (0, yQ.jsxs)(yQ.Fragment, {
        children: [(0, yQ.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: TQ("worldBuilder:loadSchematic")
        }), (0, yQ.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: TQ("worldBuilder:chooseOneOfYourSchematics")
        }), (0, yQ.jsx)("div", {
          className: "SchematicPopupSchematicListContainer",
          children: (0, yQ.jsx)(zQ.e, {
            schematics: WQ,
            onSchematicPicked: QQ => {
              wQ(QQ.schematicId), XQ()
            },
            loading: !1,
            disableAutoExport: !0
          })
        }), (0, yQ.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: TQ("worldBuilder:uploadNewSchematic")
        }), (0, yQ.jsx)(VQ, {
          onFilePicked: async QQ => {
            try {
              await qQ(QQ)
            } catch (WQ) {
              console.warn("Schematic upload failed", WQ)
            } finally {
              XQ()
            }
          }
        })]
      })
    }
    var pQ = XQ(5283),
      GQ = XQ(1739),
      UQ = XQ(4677),
      bQ = XQ(1257);

    function vQ(QQ) {
      var WQ;
      let {
        ownedSchematics: XQ,
        onClose: wQ,
        onChosenEdit: qQ,
        onChosenNew: TQ,
        onChosenDownload: sQ
      } = QQ;
      const {
        t: FQ
      } = (0, jQ.C)(), [PQ, JQ] = (0, gQ.useState)("choose"), [IQ, BQ] = (0, gQ.useState)(null), [VQ, DQ] = (0, gQ.useState)(null);
      return (0, yQ.jsxs)(yQ.Fragment, {
        children: [(0, yQ.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: FQ("worldBuilder:saveSchematic")
        }), "choose" === PQ && (0, yQ.jsxs)(yQ.Fragment, {
          children: [(0, yQ.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: FQ("worldBuilder:overwriteOneOfYourSchematics")
          }), (0, yQ.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, yQ.jsx)(zQ.e, {
              schematics: XQ,
              onSchematicPicked: QQ => {
                BQ(QQ.schematicId), DQ("existing"), JQ("save")
              },
              loading: !1,
              disableAutoExport: !1
            })
          }), (0, yQ.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: FQ("general:otherOptions")
          }), (0, yQ.jsxs)("div", {
            className: "OtherOptions",
            children: [(0, yQ.jsx)(rQ.s, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                DQ("new"), JQ("save")
              },
              children: FQ("worldBuilder:saveAsNewSchematic")
            }), (0, yQ.jsx)(rQ.h, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                DQ("file"), JQ("save")
              },
              children: FQ("worldBuilder:downloadSchematic")
            })]
          })]
        }), "choose" !== PQ && (0, yQ.jsx)(dQ, {
          type: VQ,
          ownedSchematics: XQ,
          onSubmit: (QQ, WQ, XQ) => {
            "file" === VQ ? sQ(WQ, QQ) : "new" === VQ ? TQ(WQ, XQ, QQ) : qQ(IQ, WQ, XQ, QQ), wQ()
          },
          onBack: () => {
            JQ("choose")
          },
          prepopName: "existing" === VQ ? null === (WQ = XQ.find((QQ => QQ.schematicId === IQ))) || void 0 === WQ ? void 0 : WQ.name : null
        })]
      })
    }

    function dQ(QQ) {
      let {
        type: WQ,
        prepopName: XQ,
        ownedSchematics: wQ,
        onSubmit: qQ,
        onBack: TQ
      } = QQ;
      const {
        t: zQ
      } = (0, jQ.C)(), [sQ, FQ] = (0, gQ.useState)(""), [JQ, IQ] = (0, gQ.useState)(""), [BQ, VQ] = (0, gQ.useState)(null), [DQ, pQ] = (0, gQ.useState)(!0), vQ = QQ => {
        var XQ;
        QQ = null !== (XQ = QQ) && void 0 !== XQ ? XQ : sQ;
        const qQ = "new" === WQ ? (0, bQ.v)(QQ) : null,
          TQ = [...(0, bQ.Bb)(QQ), ...qQ ? [qQ] : []];
        return TQ.length > 0 ? (VQ(TQ.join(", ")), !1) : "new" === WQ && wQ.find((WQ => WQ.name === QQ)) ? (VQ(zQ("worldBuilder:schematicAlreadyExists")), !1) : (VQ(null), !0)
      };
      return (0, yQ.jsxs)("div", {
        className: "SaveSchematicWindow",
        children: [(0, yQ.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: zQ("general:name")
        }), (0, yQ.jsx)(GQ.e, {
          className: PQ()("SaveSchematicName", {
            Error: BQ
          }),
          forcedText: XQ,
          onValueChange: QQ => {
            FQ(QQ), vQ(QQ)
          },
          placeholderText: zQ("worldBuilder:schematicNamePlaceholder"),
          maxLength: bQ.mb
        }), (0, yQ.jsx)("h2", {
          className: PQ()("SaveSchematicError", {
            Hidden: !BQ
          }),
          children: BQ
        }), (0, yQ.jsx)("h2", {
          className: PQ()("SchematicPopupSubtitle", {
            Hidden: "file" === WQ
          }),
          children: zQ("general:description")
        }), (0, yQ.jsx)(GQ.e, {
          className: PQ()("SaveSchematicDescription", {
            Hidden: "file" === WQ
          }),
          onValueChange: IQ,
          placeholderText: zQ("worldBuilder:schematicDescriptionPlaceholder"),
          maxLength: bQ.jb,
          useTextarea: !0
        }), (0, yQ.jsxs)("div", {
          className: PQ()("SaveSchematicCheckboxContainer", {
            WarningBorder: "existing" === WQ
          }),
          children: [(0, yQ.jsx)(UQ.b, {
            checked: DQ,
            onChange: QQ => {
              pQ(QQ.target.checked)
            },
            disabled: !1,
            className: "SaveSchematicCheckbox"
          }), (0, yQ.jsx)("h1", {
            className: "SchematicPopupSubtitle",
            children: zQ("existing" === WQ ? "worldBuilder:overwriteLobbyCode" : "worldBuilder:includeLobbyCode")
          })]
        }), "existing" === WQ && (0, yQ.jsx)("div", {
          className: "SaveSchematicLobbyCodeWarning",
          children: zQ("worldBuilder:lobbyCodeWarning")
        }), (0, yQ.jsxs)("div", {
          className: "SaveSchematicButtons",
          children: [(0, yQ.jsx)(rQ.s, {
            className: "SaveSchematicButton",
            onClick: () => {
              vQ() && qQ(DQ, sQ, JQ)
            },
            children: zQ("file" === WQ ? "general:download" : "general:save")
          }), (0, yQ.jsx)(rQ.P, {
            className: "SaveSchematicButton",
            onClick: TQ,
            children: zQ("general:cancel")
          })]
        })]
      })
    }
    var HQ = XQ(1238),
      aQ = XQ(1802),
      lQ = XQ(1165);

    function hQ(QQ, WQ) {
      if ("devDownloadJson" !== QQ) ! function(QQ, WQ) {
        const XQ = HQ.clientSideServerUrls.getHttpUrlFromWebSocketUrl((0, TQ.e)().websocketUrl);
        let sQ = !1;
        const FQ = async (QQ, WQ) => {
          if (sQ) return;
          sQ = !0;
          const {
            gameNameWithVariation: wQ,
            lobbyName: zQ
          } = (0, TQ.e)(), FQ = {
            gameNameWithVariation: wQ,
            lobbyName: zQ
          };
          return await (0, lQ.postJsonWithMetricsCookiesAndJsonResponse)(`${XQ}/schematic/${QQ}`, qQ.I[QQ].toBuffer({
            ...FQ,
            ...WQ
          }), {
            retries: 1
          })
        };
        if ("Plugin|WorldBuilder|SaveSchematic" === QQ) ! function(QQ) {
          let {
            ownedSchematics: WQ,
            onChosenDownload: XQ,
            onChosenEdit: wQ,
            onChosenNew: qQ,
            onClose: TQ
          } = QQ;
          JQ.NotificationProvider.showCustomPopup({
            body: QQ => (0, yQ.jsx)(vQ, {
              ownedSchematics: WQ,
              onChosenDownload: XQ,
              onChosenEdit: wQ,
              onChosenNew: qQ,
              onClose: QQ
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: TQ,
            unlockPointerKey: "schematicSaverPopup"
          })
        }({
          ownedSchematics: WQ,
          onChosenDownload: (QQ, WQ) => {
            FQ("download-schematic", {
              name: QQ,
              includeLobbyCode: WQ
            }).then((WQ => {
              let {
                buffer: {
                  data: XQ
                }
              } = WQ;
              const qQ = wQ.Tj.from(XQ);
              (0, aQ.downloadBlob)(new Blob([qQ], {
                type: "application/octet-stream"
              }), `${QQ}.bloxdschem`)
            }))
          },
          onClose: () => {
            FQ("cancel", {})
          },
          onChosenEdit: (QQ, WQ, XQ, wQ) => {
            FQ("save-to-profile", {
              schematicId: QQ,
              name: WQ,
              description: XQ,
              includeLobbyCode: wQ
            })
          },
          onChosenNew: (QQ, WQ, XQ) => {
            FQ("save-to-profile", {
              schematicId: null,
              name: QQ,
              description: WQ,
              includeLobbyCode: XQ
            })
          }
        });
        else if ("Plugin|WorldBuilder|LoadSchematic" === QQ) ! function(QQ) {
          let {
            ownedSchematics: WQ,
            onChosenFile: XQ,
            onChosenPreset: wQ,
            onClose: qQ
          } = QQ;
          JQ.NotificationProvider.showCustomPopup({
            body: QQ => (0, yQ.jsx)(DQ, {
              ownedSchematics: WQ,
              onChosenFile: XQ,
              onChosenPreset: wQ,
              onClose: QQ
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: qQ,
            unlockPointerKey: "schematicLoaderPopup"
          })
        }({
          ownedSchematics: WQ,
          onChosenFile: async QQ => {
            const WQ = wQ.Tj.from(await QQ.arrayBuffer()),
              {
                gameNameWithVariation: zQ,
                lobbyName: sQ
              } = (0, TQ.e)();
            await (0, lQ.postBinaryWithMetricsCookiesAndCustomResponse)(`${XQ}/schematic/upload-schematic`, qQ.I["upload-schematic"].toBuffer({
              gameNameWithVariation: zQ,
              lobbyName: sQ,
              schematic: WQ
            }), {
              retries: 1
            }, lQ.HttpPayloadType.json)
          },
          onChosenPreset: QQ => {
            FQ("load-from-profile", {
              schematicId: QQ
            })
          },
          onClose: () => {
            FQ("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ListSchematics" === QQ)(0, zQ.f)({
          ownedSchematics: Array.isArray(WQ) ? WQ : WQ.schematics,
          currentWorldSchematicId: Array.isArray(WQ) ? null : WQ.currentWorldSchematicId,
          onClose: () => {
            FQ("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ExportWorld" === QQ) {
          var PQ;
          const QQ = null !== (PQ = WQ.schematic) && void 0 !== PQ ? PQ : WQ;
          (0, pQ.j)({
            schematic: QQ,
            inSourceWorld: QQ.schematicId === WQ.currentWorldSchematicId,
            onClose: () => {
              FQ("cancel", {})
            }
          })
        } else console.error(`Unknown plugin message type ${QQ}`)
      }(QQ, WQ);
      else {
        const QQ = JSON.stringify(WQ.data, null, 2);
        (0, aQ.downloadBlob)(new Blob([QQ], {
          type: "application/json"
        }), WQ.filename)
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);