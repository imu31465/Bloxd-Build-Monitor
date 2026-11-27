export const id = 247;
export const ids = [247];
export const modules = {
  37394: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => VR,
      f: () => wR
    });
    var yR = GR(66),
      tR = GR(1493),
      uR = GR(1270),
      ZR = GR(1465),
      qR = GR(4824),
      iR = GR(5814),
      fR = GR(1378);

    function VR(RR) {
      let {
        loading: JR,
        schematics: GR,
        onSchematicPicked: yR,
        selectedSchematicIdList: tR = [],
        disableAutoExport: iR
      } = RR;
      const {
        t: VR
      } = (0, uR.A)();
      return (0, fR.jsxs)("div", {
        className: "SchematicList",
        children: [JR && (0, fR.jsx)(ZR.d, {}), !JR && 0 === GR.length && (0, fR.jsx)("div", {
          className: "NoSchematicsText",
          children: VR("worldBuilder:noSavedSchematic")
        }), !JR && GR.map((RR => (0, fR.jsx)(qR.i, {
          source: {
            type: "schematic",
            schematic: RR
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            yR(RR)
          },
          isSelected: tR.includes(RR.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: RR.isAutoExported && iR,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, RR.schematicId)))]
      })
    }

    function KR(RR) {
      let {
        ownedSchematics: JR,
        currentWorldSchematicId: GR,
        onClose: tR
      } = RR;
      const {
        t: ZR
      } = (0, uR.A)(), [qR, KR] = (0, yR.useState)(null);
      return (0, fR.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === qR && (0, fR.jsxs)(fR.Fragment, {
          children: [(0, fR.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: ZR("worldBuilder:schematicList")
          }), (0, fR.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: ZR("worldBuilder:clickSchematicForOptions")
          }), (0, fR.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, fR.jsx)(VR, {
              loading: !1,
              schematics: JR,
              onSchematicPicked: RR => {
                KR(RR)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== qR && (0, fR.jsx)(iR.g, {
          schematic: qR,
          inSourceWorld: qR.schematicId === GR,
          onSchematicUpdate: RR => {
            KR(RR)
          },
          onClose: () => {
            KR(null), tR()
          }
        })]
      })
    }

    function wR(RR) {
      let {
        ownedSchematics: JR,
        currentWorldSchematicId: GR,
        onClose: yR
      } = RR;
      tR.NotificationProvider.showCustomPopup({
        body: RR => (0, fR.jsx)(KR, {
          ownedSchematics: JR,
          currentWorldSchematicId: GR,
          onClose: RR
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: yR,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  53753: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      runClientGameMessage: () => bR
    });
    var yR = GR(2502),
      tR = GR(2532),
      uR = GR(1449),
      ZR = GR(37394),
      qR = GR(6003),
      iR = GR(1163),
      fR = GR.n(iR),
      VR = GR(66),
      KR = GR(1493),
      wR = GR(1590),
      rR = GR(377),
      eR = GR(1270),
      aR = GR(1468),
      LR = GR(1378);

    function nR(RR) {
      let {
        onFilePicked: JR
      } = RR;
      const {
        t: GR
      } = (0, eR.A)(), [yR, tR] = (0, VR.useState)(null), {
        getRootProps: uR,
        getInputProps: ZR,
        isDragActive: iR
      } = (0, qR.e)({
        onDrop: RR => {
          RR.length > 0 && tR(RR[0])
        },
        useFsAccessApi: !1
      }), KR = yR && yR.size > 1024 * rR._c;
      return (0, LR.jsxs)("div", {
        className: "SchematicUploadContainer",
        children: [(0, LR.jsxs)("div", {
          ...uR({
            className: fR()("SchematicUpload", {
              ActiveDrag: iR
            })
          }),
          children: [(0, LR.jsx)("input", {
            ...ZR({
              accept: ".bloxdschem"
            })
          }), !iR && yR ? (0, LR.jsxs)(LR.Fragment, {
            children: [(0, LR.jsx)("div", {
              className: fR()("SchematicUploadIcon", "Active", {
                TooBig: KR
              }),
              children: (0, LR.jsx)(aR.d, {
                name: "file-lines"
              })
            }), (0, LR.jsx)("div", {
              className: "SchematicUploadInstructions Active",
              children: yR.name
            })]
          }) : (0, LR.jsxs)(LR.Fragment, {
            children: [(0, LR.jsx)("div", {
              className: "SchematicUploadIcon",
              children: (0, LR.jsx)(aR.d, {
                name: "up-from-bracket"
              })
            }), (0, LR.jsx)("div", {
              className: "SchematicUploadInstructions",
              children: GR("worldBuilder:dragAFileHere")
            })]
          })]
        }), (0, LR.jsx)(wR.n, {
          disabled: KR || !yR,
          className: "SchematicUploadButton",
          onClick: () => {
            !KR && yR && JR(yR)
          },
          children: KR ? GR("worldBuilder:fileTooBig", {
            maxSizeKb: rR._c
          }) : GR("worldBuilder:upload")
        })]
      })
    }

    function UR(RR) {
      let {
        ownedSchematics: JR,
        onClose: GR,
        onChosenPreset: yR,
        onChosenFile: tR
      } = RR;
      const {
        t: uR
      } = (0, eR.A)();
      return (0, LR.jsxs)(LR.Fragment, {
        children: [(0, LR.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: uR("worldBuilder:loadSchematic")
        }), (0, LR.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: uR("worldBuilder:chooseOneOfYourSchematics")
        }), (0, LR.jsx)("div", {
          className: "SchematicPopupSchematicListContainer",
          children: (0, LR.jsx)(ZR.d, {
            schematics: JR,
            onSchematicPicked: RR => {
              yR(RR.schematicId), GR()
            },
            loading: !1,
            disableAutoExport: !0
          })
        }), (0, LR.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: uR("worldBuilder:uploadNewSchematic")
        }), (0, LR.jsx)(nR, {
          onFilePicked: async RR => {
            try {
              await tR(RR)
            } catch (JR) {
              console.warn("Schematic upload failed", JR)
            } finally {
              GR()
            }
          }
        })]
      })
    }
    var WR = GR(5814),
      AR = GR(1867),
      CR = GR(5141),
      XR = GR(1317);

    function MR(RR) {
      var JR;
      let {
        ownedSchematics: GR,
        onClose: yR,
        onChosenEdit: tR,
        onChosenNew: uR,
        onChosenDownload: qR
      } = RR;
      const {
        t: iR
      } = (0, eR.A)(), [fR, KR] = (0, VR.useState)("choose"), [rR, aR] = (0, VR.useState)(null), [nR, UR] = (0, VR.useState)(null);
      return (0, LR.jsxs)(LR.Fragment, {
        children: [(0, LR.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: iR("worldBuilder:saveSchematic")
        }), "choose" === fR && (0, LR.jsxs)(LR.Fragment, {
          children: [(0, LR.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: iR("worldBuilder:overwriteOneOfYourSchematics")
          }), (0, LR.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, LR.jsx)(ZR.d, {
              schematics: GR,
              onSchematicPicked: RR => {
                aR(RR.schematicId), UR("existing"), KR("save")
              },
              loading: !1,
              disableAutoExport: !1
            })
          }), (0, LR.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: iR("general:otherOptions")
          }), (0, LR.jsxs)("div", {
            className: "OtherOptions",
            children: [(0, LR.jsx)(wR.n, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                UR("new"), KR("save")
              },
              children: iR("worldBuilder:saveAsNewSchematic")
            }), (0, LR.jsx)(wR.g, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                UR("file"), KR("save")
              },
              children: iR("worldBuilder:downloadSchematic")
            })]
          })]
        }), "choose" !== fR && (0, LR.jsx)(BR, {
          type: nR,
          ownedSchematics: GR,
          onSubmit: (RR, JR, GR) => {
            "file" === nR ? qR(JR, RR) : "new" === nR ? uR(JR, GR, RR) : tR(rR, JR, GR, RR), yR()
          },
          onBack: () => {
            KR("choose")
          },
          prepopName: "existing" === nR ? null === (JR = GR.find((RR => RR.schematicId === rR))) || void 0 === JR ? void 0 : JR.name : null
        })]
      })
    }

    function BR(RR) {
      let {
        type: JR,
        prepopName: GR,
        ownedSchematics: yR,
        onSubmit: tR,
        onBack: uR
      } = RR;
      const {
        t: ZR
      } = (0, eR.A)(), [qR, iR] = (0, VR.useState)(""), [KR, rR] = (0, VR.useState)(""), [aR, nR] = (0, VR.useState)(null), [UR, WR] = (0, VR.useState)(!0), MR = RR => {
        var tR;
        RR = null !== (tR = RR) && void 0 !== tR ? tR : qR;
        const uR = (0, XR.tb)(RR, "new" === JR || "existing" === JR && RR !== GR);
        return uR ? (nR(ZR(uR.translationKey, uR.params)), !1) : "new" === JR && yR.find((JR => JR.name === RR)) ? (nR(ZR("worldBuilder:schematicAlreadyExists")), !1) : (nR(null), !0)
      };
      return (0, LR.jsxs)("div", {
        className: "SaveSchematicWindow",
        children: [(0, LR.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: ZR("general:name")
        }), (0, LR.jsx)(AR.b, {
          className: fR()("SaveSchematicName", {
            Error: aR
          }),
          forcedText: GR,
          onValueChange: RR => {
            iR(RR), MR(RR)
          },
          placeholderText: ZR("worldBuilder:schematicNamePlaceholder"),
          maxLength: XR.fb
        }), (0, LR.jsx)("h2", {
          className: fR()("SaveSchematicError", {
            Hidden: !aR
          }),
          children: aR
        }), (0, LR.jsx)("h2", {
          className: fR()("SchematicPopupSubtitle", {
            Hidden: "file" === JR
          }),
          children: ZR("general:description")
        }), (0, LR.jsx)(AR.b, {
          className: fR()("SaveSchematicDescription", {
            Hidden: "file" === JR
          }),
          onValueChange: rR,
          placeholderText: ZR("worldBuilder:schematicDescriptionPlaceholder"),
          maxLength: XR.eb,
          useTextarea: !0
        }), (0, LR.jsxs)("div", {
          className: fR()("SaveSchematicCheckboxContainer", {
            WarningBorder: "existing" === JR
          }),
          children: [(0, LR.jsx)(CR.d, {
            checked: UR,
            onChange: RR => {
              WR(RR.target.checked)
            },
            disabled: !1,
            className: "SaveSchematicCheckbox"
          }), (0, LR.jsx)("h1", {
            className: "SchematicPopupSubtitle",
            children: ZR("existing" === JR ? "worldBuilder:overwriteLobbyCode" : "worldBuilder:includeLobbyCode")
          })]
        }), "existing" === JR && (0, LR.jsx)("div", {
          className: "SaveSchematicLobbyCodeWarning",
          children: ZR("worldBuilder:lobbyCodeWarning")
        }), (0, LR.jsxs)("div", {
          className: "SaveSchematicButtons",
          children: [(0, LR.jsx)(wR.n, {
            className: "SaveSchematicButton",
            onClick: () => {
              MR() && tR(UR, qR, KR)
            },
            children: ZR("file" === JR ? "general:download" : "general:save")
          }), (0, LR.jsx)(wR.M, {
            className: "SaveSchematicButton",
            onClick: uR,
            children: ZR("general:cancel")
          })]
        })]
      })
    }
    var lR = GR(1282),
      pR = GR(1943),
      gR = GR(1201);

    function bR(RR, JR) {
      if ("devDownloadJson" !== RR) ! function(RR, JR) {
        const GR = lR.clientSideServerUrls.getHttpUrlFromWebSocketUrl((0, uR.d)().websocketUrl);
        let qR = !1;
        const iR = async (RR, JR) => {
          if (qR) return;
          qR = !0;
          const {
            gameNameWithVariation: yR,
            lobbyName: ZR
          } = (0, uR.d)(), iR = {
            gameNameWithVariation: yR,
            lobbyName: ZR
          };
          return await (0, gR.postJsonWithMetricsCookiesAndJsonResponse)(`${GR}/schematic/${RR}`, tR.w[RR].toBuffer({
            ...iR,
            ...JR
          }), {
            retries: 1
          })
        };
        if ("Plugin|WorldBuilder|SaveSchematic" === RR) ! function(RR) {
          let {
            ownedSchematics: JR,
            onChosenDownload: GR,
            onChosenEdit: yR,
            onChosenNew: tR,
            onClose: uR
          } = RR;
          KR.NotificationProvider.showCustomPopup({
            body: RR => (0, LR.jsx)(MR, {
              ownedSchematics: JR,
              onChosenDownload: GR,
              onChosenEdit: yR,
              onChosenNew: tR,
              onClose: RR
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: uR,
            unlockPointerKey: "schematicSaverPopup"
          })
        }({
          ownedSchematics: JR,
          onChosenDownload: (RR, JR) => {
            iR("download-schematic", {
              name: RR,
              includeLobbyCode: JR
            }).then((JR => {
              let {
                buffer: {
                  data: GR
                }
              } = JR;
              const tR = yR.GK.from(GR);
              (0, pR.downloadBlob)(new Blob([tR], {
                type: "application/octet-stream"
              }), `${RR}.bloxdschem`)
            }))
          },
          onClose: () => {
            iR("cancel", {})
          },
          onChosenEdit: (RR, JR, GR, yR) => {
            iR("save-to-profile", {
              schematicId: RR,
              name: JR,
              description: GR,
              includeLobbyCode: yR
            })
          },
          onChosenNew: (RR, JR, GR) => {
            iR("save-to-profile", {
              schematicId: null,
              name: RR,
              description: JR,
              includeLobbyCode: GR
            })
          }
        });
        else if ("Plugin|WorldBuilder|LoadSchematic" === RR) ! function(RR) {
          let {
            ownedSchematics: JR,
            onChosenFile: GR,
            onChosenPreset: yR,
            onClose: tR
          } = RR;
          KR.NotificationProvider.showCustomPopup({
            body: RR => (0, LR.jsx)(UR, {
              ownedSchematics: JR,
              onChosenFile: GR,
              onChosenPreset: yR,
              onClose: RR
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: tR,
            unlockPointerKey: "schematicLoaderPopup"
          })
        }({
          ownedSchematics: JR,
          onChosenFile: async RR => {
            const JR = yR.GK.from(await RR.arrayBuffer()),
              {
                gameNameWithVariation: ZR,
                lobbyName: qR
              } = (0, uR.d)();
            await (0, gR.postBinaryWithMetricsCookiesAndCustomResponse)(`${GR}/schematic/upload-schematic`, tR.w["upload-schematic"].toBuffer({
              gameNameWithVariation: ZR,
              lobbyName: qR,
              schematic: JR
            }), {
              retries: 1
            }, gR.HttpPayloadType.json)
          },
          onChosenPreset: RR => {
            iR("load-from-profile", {
              schematicId: RR
            })
          },
          onClose: () => {
            iR("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ListSchematics" === RR)(0, ZR.f)({
          ownedSchematics: Array.isArray(JR) ? JR : JR.schematics,
          currentWorldSchematicId: Array.isArray(JR) ? null : JR.currentWorldSchematicId,
          onClose: () => {
            iR("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ExportWorld" === RR) {
          var fR;
          const RR = null !== (fR = JR.schematic) && void 0 !== fR ? fR : JR;
          (0, WR.h)({
            schematic: RR,
            inSourceWorld: RR.schematicId === JR.currentWorldSchematicId,
            onClose: () => {
              iR("cancel", {})
            }
          })
        } else console.error(`Unknown plugin message type ${RR}`)
      }(RR, JR);
      else {
        const RR = JSON.stringify(JR.data, null, 2);
        (0, pR.downloadBlob)(new Blob([RR], {
          type: "application/json"
        }), JR.filename)
      }
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);