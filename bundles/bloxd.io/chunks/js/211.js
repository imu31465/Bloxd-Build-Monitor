export const id = 211;
export const ids = [211];
export const modules = {
  36002: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => uQ,
      g: () => bQ
    });
    var LQ = wQ(53),
      qQ = wQ(1362),
      oQ = wQ(1207),
      DQ = wQ(1348),
      kQ = wQ(3356),
      vQ = wQ(4772),
      mQ = wQ(1107);

    function uQ(QQ) {
      let {
        loading: FQ,
        schematics: wQ,
        onSchematicPicked: LQ,
        selectedSchematicIdList: qQ = [],
        disableAutoExport: vQ
      } = QQ;
      const {
        t: uQ
      } = (0, oQ.y)();
      return (0, mQ.jsxs)("div", {
        className: "SchematicList",
        children: [FQ && (0, mQ.jsx)(DQ.c, {}), !FQ && 0 === wQ.length && (0, mQ.jsx)("div", {
          className: "NoSchematicsText",
          children: uQ("worldBuilder:noSavedSchematic")
        }), !FQ && wQ.map((QQ => (0, mQ.jsx)(kQ.f, {
          source: {
            type: "schematic",
            schematic: QQ
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            LQ(QQ)
          },
          isSelected: qQ.includes(QQ.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: QQ.isAutoExported && vQ,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, QQ.schematicId)))]
      })
    }

    function HQ(QQ) {
      let {
        ownedSchematics: FQ,
        currentWorldSchematicId: wQ,
        onClose: qQ
      } = QQ;
      const {
        t: DQ
      } = (0, oQ.y)(), [kQ, HQ] = (0, LQ.useState)(null);
      return (0, mQ.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === kQ && (0, mQ.jsxs)(mQ.Fragment, {
          children: [(0, mQ.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: DQ("worldBuilder:schematicList")
          }), (0, mQ.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: DQ("worldBuilder:clickSchematicForOptions")
          }), (0, mQ.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, mQ.jsx)(uQ, {
              loading: !1,
              schematics: FQ,
              onSchematicPicked: QQ => {
                HQ(QQ)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== kQ && (0, mQ.jsx)(vQ.j, {
          schematic: kQ,
          inSourceWorld: kQ.schematicId === wQ,
          onSchematicUpdate: QQ => {
            HQ(QQ)
          },
          onClose: () => {
            HQ(null), qQ()
          }
        })]
      })
    }

    function bQ(QQ) {
      let {
        ownedSchematics: FQ,
        currentWorldSchematicId: wQ,
        onClose: LQ
      } = QQ;
      qQ.NotificationProvider.showCustomPopup({
        body: QQ => (0, mQ.jsx)(HQ, {
          ownedSchematics: FQ,
          currentWorldSchematicId: wQ,
          onClose: QQ
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: LQ,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  41143: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      runClientGameMessage: () => sQ
    });
    var LQ = wQ(3605),
      qQ = wQ(3621),
      oQ = wQ(1339),
      DQ = wQ(36002),
      kQ = wQ(4794),
      vQ = wQ(1070),
      mQ = wQ.n(vQ),
      uQ = wQ(53),
      HQ = wQ(1362),
      bQ = wQ(1451),
      YQ = wQ(317),
      xQ = wQ(1207),
      AQ = wQ(1079),
      tQ = wQ(1107);

    function eQ(QQ) {
      let {
        onFilePicked: FQ
      } = QQ;
      const {
        t: wQ
      } = (0, xQ.y)(), [LQ, qQ] = (0, uQ.useState)(null), {
        getRootProps: oQ,
        getInputProps: DQ,
        isDragActive: vQ
      } = (0, kQ.b)({
        onDrop: QQ => {
          QQ.length > 0 && qQ(QQ[0])
        },
        useFsAccessApi: !1
      }), HQ = LQ && LQ.size > 1024 * YQ.ld;
      return (0, tQ.jsxs)("div", {
        className: "SchematicUploadContainer",
        children: [(0, tQ.jsxs)("div", {
          ...oQ({
            className: mQ()("SchematicUpload", {
              ActiveDrag: vQ
            })
          }),
          children: [(0, tQ.jsx)("input", {
            ...DQ({
              accept: ".bloxdschem"
            })
          }), !vQ && LQ ? (0, tQ.jsxs)(tQ.Fragment, {
            children: [(0, tQ.jsx)("div", {
              className: mQ()("SchematicUploadIcon", "Active", {
                TooBig: HQ
              }),
              children: (0, tQ.jsx)(AQ.c, {
                name: "file-lines"
              })
            }), (0, tQ.jsx)("div", {
              className: "SchematicUploadInstructions Active",
              children: LQ.name
            })]
          }) : (0, tQ.jsxs)(tQ.Fragment, {
            children: [(0, tQ.jsx)("div", {
              className: "SchematicUploadIcon",
              children: (0, tQ.jsx)(AQ.c, {
                name: "up-from-bracket"
              })
            }), (0, tQ.jsx)("div", {
              className: "SchematicUploadInstructions",
              children: wQ("worldBuilder:dragAFileHere")
            })]
          })]
        }), (0, tQ.jsx)(bQ.m, {
          disabled: HQ || !LQ,
          className: "SchematicUploadButton",
          onClick: () => {
            !HQ && LQ && FQ(LQ)
          },
          children: HQ ? wQ("worldBuilder:fileTooBig", {
            maxSizeKb: YQ.ld
          }) : wQ("worldBuilder:upload")
        })]
      })
    }

    function MQ(QQ) {
      let {
        ownedSchematics: FQ,
        onClose: wQ,
        onChosenPreset: LQ,
        onChosenFile: qQ
      } = QQ;
      const {
        t: oQ
      } = (0, xQ.y)();
      return (0, tQ.jsxs)(tQ.Fragment, {
        children: [(0, tQ.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: oQ("worldBuilder:loadSchematic")
        }), (0, tQ.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: oQ("worldBuilder:chooseOneOfYourSchematics")
        }), (0, tQ.jsx)("div", {
          className: "SchematicPopupSchematicListContainer",
          children: (0, tQ.jsx)(DQ.e, {
            schematics: FQ,
            onSchematicPicked: QQ => {
              LQ(QQ.schematicId), wQ()
            },
            loading: !1,
            disableAutoExport: !0
          })
        }), (0, tQ.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: oQ("worldBuilder:uploadNewSchematic")
        }), (0, tQ.jsx)(eQ, {
          onFilePicked: async QQ => {
            try {
              await qQ(QQ)
            } catch (FQ) {
              console.warn("Schematic upload failed", FQ)
            } finally {
              wQ()
            }
          }
        })]
      })
    }
    var GQ = wQ(4772),
      pQ = wQ(1682),
      cQ = wQ(4233),
      CQ = wQ(1237);

    function SQ(QQ) {
      var FQ;
      let {
        ownedSchematics: wQ,
        onClose: LQ,
        onChosenEdit: qQ,
        onChosenNew: oQ,
        onChosenDownload: kQ
      } = QQ;
      const {
        t: vQ
      } = (0, xQ.y)(), [mQ, HQ] = (0, uQ.useState)("choose"), [YQ, AQ] = (0, uQ.useState)(null), [eQ, MQ] = (0, uQ.useState)(null);
      return (0, tQ.jsxs)(tQ.Fragment, {
        children: [(0, tQ.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: vQ("worldBuilder:saveSchematic")
        }), "choose" === mQ && (0, tQ.jsxs)(tQ.Fragment, {
          children: [(0, tQ.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: vQ("worldBuilder:overwriteOneOfYourSchematics")
          }), (0, tQ.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, tQ.jsx)(DQ.e, {
              schematics: wQ,
              onSchematicPicked: QQ => {
                AQ(QQ.schematicId), MQ("existing"), HQ("save")
              },
              loading: !1,
              disableAutoExport: !1
            })
          }), (0, tQ.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: vQ("general:otherOptions")
          }), (0, tQ.jsxs)("div", {
            className: "OtherOptions",
            children: [(0, tQ.jsx)(bQ.m, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                MQ("new"), HQ("save")
              },
              children: vQ("worldBuilder:saveAsNewSchematic")
            }), (0, tQ.jsx)(bQ.f, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                MQ("file"), HQ("save")
              },
              children: vQ("worldBuilder:downloadSchematic")
            })]
          })]
        }), "choose" !== mQ && (0, tQ.jsx)(iQ, {
          type: eQ,
          ownedSchematics: wQ,
          onSubmit: (QQ, FQ, wQ) => {
            "file" === eQ ? kQ(FQ, QQ) : "new" === eQ ? oQ(FQ, wQ, QQ) : qQ(YQ, FQ, wQ, QQ), LQ()
          },
          onBack: () => {
            HQ("choose")
          },
          prepopName: "existing" === eQ ? null === (FQ = wQ.find((QQ => QQ.schematicId === YQ))) || void 0 === FQ ? void 0 : FQ.name : null
        })]
      })
    }

    function iQ(QQ) {
      let {
        type: FQ,
        prepopName: wQ,
        ownedSchematics: LQ,
        onSubmit: qQ,
        onBack: oQ
      } = QQ;
      const {
        t: DQ
      } = (0, xQ.y)(), [kQ, vQ] = (0, uQ.useState)(""), [HQ, YQ] = (0, uQ.useState)(""), [AQ, eQ] = (0, uQ.useState)(null), [MQ, GQ] = (0, uQ.useState)(!0), SQ = QQ => {
        var wQ;
        QQ = null !== (wQ = QQ) && void 0 !== wQ ? wQ : kQ;
        const qQ = "new" === FQ ? (0, CQ.E)(QQ) : null,
          oQ = [...(0, CQ.Nb)(QQ), ...qQ ? [qQ] : []];
        return oQ.length > 0 ? (eQ(oQ.join(", ")), !1) : "new" === FQ && LQ.find((FQ => FQ.name === QQ)) ? (eQ(DQ("worldBuilder:schematicAlreadyExists")), !1) : (eQ(null), !0)
      };
      return (0, tQ.jsxs)("div", {
        className: "SaveSchematicWindow",
        children: [(0, tQ.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: DQ("general:name")
        }), (0, tQ.jsx)(pQ.b, {
          className: mQ()("SaveSchematicName", {
            Error: AQ
          }),
          forcedText: wQ,
          onValueChange: QQ => {
            vQ(QQ), SQ(QQ)
          },
          placeholderText: DQ("worldBuilder:schematicNamePlaceholder"),
          maxLength: CQ.yb
        }), (0, tQ.jsx)("h2", {
          className: mQ()("SaveSchematicError", {
            Hidden: !AQ
          }),
          children: AQ
        }), (0, tQ.jsx)("h2", {
          className: mQ()("SchematicPopupSubtitle", {
            Hidden: "file" === FQ
          }),
          children: DQ("general:description")
        }), (0, tQ.jsx)(pQ.b, {
          className: mQ()("SaveSchematicDescription", {
            Hidden: "file" === FQ
          }),
          onValueChange: YQ,
          placeholderText: DQ("worldBuilder:schematicDescriptionPlaceholder"),
          maxLength: CQ.wb,
          useTextarea: !0
        }), (0, tQ.jsxs)("div", {
          className: mQ()("SaveSchematicCheckboxContainer", {
            WarningBorder: "existing" === FQ
          }),
          children: [(0, tQ.jsx)(cQ.d, {
            checked: MQ,
            onChange: QQ => {
              GQ(QQ.target.checked)
            },
            disabled: !1,
            className: "SaveSchematicCheckbox"
          }), (0, tQ.jsx)("h1", {
            className: "SchematicPopupSubtitle",
            children: DQ("existing" === FQ ? "worldBuilder:overwriteLobbyCode" : "worldBuilder:includeLobbyCode")
          })]
        }), "existing" === FQ && (0, tQ.jsx)("div", {
          className: "SaveSchematicLobbyCodeWarning",
          children: DQ("worldBuilder:lobbyCodeWarning")
        }), (0, tQ.jsxs)("div", {
          className: "SaveSchematicButtons",
          children: [(0, tQ.jsx)(bQ.m, {
            className: "SaveSchematicButton",
            onClick: () => {
              SQ() && qQ(MQ, kQ, HQ)
            },
            children: DQ("file" === FQ ? "general:download" : "general:save")
          }), (0, tQ.jsx)(bQ.F, {
            className: "SaveSchematicButton",
            onClick: oQ,
            children: DQ("general:cancel")
          })]
        })]
      })
    }
    var WQ = wQ(1213),
      RQ = wQ(1725),
      OQ = wQ(1147);

    function sQ(QQ, FQ) {
      if ("devDownloadJson" !== QQ) ! function(QQ, FQ) {
        const wQ = WQ.clientSideServerUrls.getHttpUrlFromWebSocketUrl((0, oQ.c)().websocketUrl);
        let kQ = !1;
        const vQ = async (QQ, FQ) => {
          if (kQ) return;
          kQ = !0;
          const {
            gameNameWithVariation: LQ,
            lobbyName: DQ
          } = (0, oQ.c)(), vQ = {
            gameNameWithVariation: LQ,
            lobbyName: DQ
          };
          return await (0, OQ.postJsonWithMetricsCookiesAndJsonResponse)(`${wQ}/schematic/${QQ}`, qQ.w[QQ].toBuffer({
            ...vQ,
            ...FQ
          }), {
            retries: 1
          })
        };
        if ("Plugin|WorldBuilder|SaveSchematic" === QQ) ! function(QQ) {
          let {
            ownedSchematics: FQ,
            onChosenDownload: wQ,
            onChosenEdit: LQ,
            onChosenNew: qQ,
            onClose: oQ
          } = QQ;
          HQ.NotificationProvider.showCustomPopup({
            body: QQ => (0, tQ.jsx)(SQ, {
              ownedSchematics: FQ,
              onChosenDownload: wQ,
              onChosenEdit: LQ,
              onChosenNew: qQ,
              onClose: QQ
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: oQ,
            unlockPointerKey: "schematicSaverPopup"
          })
        }({
          ownedSchematics: FQ,
          onChosenDownload: (QQ, FQ) => {
            vQ("download-schematic", {
              name: QQ,
              includeLobbyCode: FQ
            }).then((FQ => {
              let {
                buffer: {
                  data: wQ
                }
              } = FQ;
              const qQ = LQ.Dx.from(wQ);
              (0, RQ.downloadBlob)(new Blob([qQ], {
                type: "application/octet-stream"
              }), `${QQ}.bloxdschem`)
            }))
          },
          onClose: () => {
            vQ("cancel", {})
          },
          onChosenEdit: (QQ, FQ, wQ, LQ) => {
            vQ("save-to-profile", {
              schematicId: QQ,
              name: FQ,
              description: wQ,
              includeLobbyCode: LQ
            })
          },
          onChosenNew: (QQ, FQ, wQ) => {
            vQ("save-to-profile", {
              schematicId: null,
              name: QQ,
              description: FQ,
              includeLobbyCode: wQ
            })
          }
        });
        else if ("Plugin|WorldBuilder|LoadSchematic" === QQ) ! function(QQ) {
          let {
            ownedSchematics: FQ,
            onChosenFile: wQ,
            onChosenPreset: LQ,
            onClose: qQ
          } = QQ;
          HQ.NotificationProvider.showCustomPopup({
            body: QQ => (0, tQ.jsx)(MQ, {
              ownedSchematics: FQ,
              onChosenFile: wQ,
              onChosenPreset: LQ,
              onClose: QQ
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: qQ,
            unlockPointerKey: "schematicLoaderPopup"
          })
        }({
          ownedSchematics: FQ,
          onChosenFile: async QQ => {
            const FQ = LQ.Dx.from(await QQ.arrayBuffer()),
              {
                gameNameWithVariation: DQ,
                lobbyName: kQ
              } = (0, oQ.c)();
            await (0, OQ.postBinaryWithMetricsCookiesAndCustomResponse)(`${wQ}/schematic/upload-schematic`, qQ.w["upload-schematic"].toBuffer({
              gameNameWithVariation: DQ,
              lobbyName: kQ,
              schematic: FQ
            }), {
              retries: 1
            }, OQ.HttpPayloadType.json)
          },
          onChosenPreset: QQ => {
            vQ("load-from-profile", {
              schematicId: QQ
            })
          },
          onClose: () => {
            vQ("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ListSchematics" === QQ)(0, DQ.g)({
          ownedSchematics: Array.isArray(FQ) ? FQ : FQ.schematics,
          currentWorldSchematicId: Array.isArray(FQ) ? null : FQ.currentWorldSchematicId,
          onClose: () => {
            vQ("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ExportWorld" === QQ) {
          var mQ;
          const QQ = null !== (mQ = FQ.schematic) && void 0 !== mQ ? mQ : FQ;
          (0, GQ.m)({
            schematic: QQ,
            inSourceWorld: QQ.schematicId === FQ.currentWorldSchematicId,
            onClose: () => {
              vQ("cancel", {})
            }
          })
        } else console.error(`Unknown plugin message type ${QQ}`)
      }(QQ, FQ);
      else {
        const QQ = JSON.stringify(FQ.data, null, 2);
        (0, RQ.downloadBlob)(new Blob([QQ], {
          type: "application/json"
        }), FQ.filename)
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);