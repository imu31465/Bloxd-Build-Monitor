export const id = 231;
export const ids = [231];
export const modules = {
  37046: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => EU,
      f: () => NU
    });
    var cU = zU(61),
      yU = zU(1410),
      QU = zU(1193),
      AU = zU(1384),
      FU = zU(3869),
      oU = zU(5454),
      DU = zU(1305);

    function EU(UU) {
      let {
        loading: XU,
        schematics: zU,
        onSchematicPicked: cU,
        selectedSchematicIdList: yU = [],
        disableAutoExport: oU
      } = UU;
      const {
        t: EU
      } = (0, QU.I)();
      return (0, DU.jsxs)("div", {
        className: "SchematicList",
        children: [XU && (0, DU.jsx)(AU.b, {}), !XU && 0 === zU.length && (0, DU.jsx)("div", {
          className: "NoSchematicsText",
          children: EU("worldBuilder:noSavedSchematic")
        }), !XU && zU.map((UU => (0, DU.jsx)(FU.g, {
          source: {
            type: "schematic",
            schematic: UU
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            cU(UU)
          },
          isSelected: yU.includes(UU.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: UU.isAutoExported && oU,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, UU.schematicId)))]
      })
    }

    function YU(UU) {
      let {
        ownedSchematics: XU,
        currentWorldSchematicId: zU,
        onClose: yU
      } = UU;
      const {
        t: AU
      } = (0, QU.I)(), [FU, YU] = (0, cU.useState)(null);
      return (0, DU.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === FU && (0, DU.jsxs)(DU.Fragment, {
          children: [(0, DU.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: AU("worldBuilder:schematicList")
          }), (0, DU.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: AU("worldBuilder:clickSchematicForOptions")
          }), (0, DU.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, DU.jsx)(EU, {
              loading: !1,
              schematics: XU,
              onSchematicPicked: UU => {
                YU(UU)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== FU && (0, DU.jsx)(oU.e, {
          schematic: FU,
          inSourceWorld: FU.schematicId === zU,
          onSchematicUpdate: UU => {
            YU(UU)
          },
          onClose: () => {
            YU(null), yU()
          }
        })]
      })
    }

    function NU(UU) {
      let {
        ownedSchematics: XU,
        currentWorldSchematicId: zU,
        onClose: cU
      } = UU;
      yU.NotificationProvider.showCustomPopup({
        body: UU => (0, DU.jsx)(YU, {
          ownedSchematics: XU,
          currentWorldSchematicId: zU,
          onClose: UU
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: cU,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  44426: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      runClientGameMessage: () => CU
    });
    var cU = zU(4122),
      yU = zU(4139),
      QU = zU(1360),
      AU = zU(37046),
      FU = zU(5490),
      oU = zU(1106),
      DU = zU.n(oU),
      EU = zU(61),
      YU = zU(1410),
      NU = zU(1494),
      IU = zU(344),
      pU = zU(1193),
      aU = zU(1390),
      tU = zU(1305);

    function gU(UU) {
      let {
        onFilePicked: XU
      } = UU;
      const {
        t: zU
      } = (0, pU.I)(), [cU, yU] = (0, EU.useState)(null), {
        getRootProps: QU,
        getInputProps: AU,
        isDragActive: oU
      } = (0, FU.b)({
        onDrop: UU => {
          UU.length > 0 && yU(UU[0])
        },
        useFsAccessApi: !1
      }), YU = cU && cU.size > 1024 * IU.nd;
      return (0, tU.jsxs)("div", {
        className: "SchematicUploadContainer",
        children: [(0, tU.jsxs)("div", {
          ...QU({
            className: DU()("SchematicUpload", {
              ActiveDrag: oU
            })
          }),
          children: [(0, tU.jsx)("input", {
            ...AU({
              accept: ".bloxdschem"
            })
          }), !oU && cU ? (0, tU.jsxs)(tU.Fragment, {
            children: [(0, tU.jsx)("div", {
              className: DU()("SchematicUploadIcon", "Active", {
                TooBig: YU
              }),
              children: (0, tU.jsx)(aU.d, {
                name: "file-lines"
              })
            }), (0, tU.jsx)("div", {
              className: "SchematicUploadInstructions Active",
              children: cU.name
            })]
          }) : (0, tU.jsxs)(tU.Fragment, {
            children: [(0, tU.jsx)("div", {
              className: "SchematicUploadIcon",
              children: (0, tU.jsx)(aU.d, {
                name: "up-from-bracket"
              })
            }), (0, tU.jsx)("div", {
              className: "SchematicUploadInstructions",
              children: zU("worldBuilder:dragAFileHere")
            })]
          })]
        }), (0, tU.jsx)(NU.l, {
          disabled: YU || !cU,
          className: "SchematicUploadButton",
          onClick: () => {
            !YU && cU && XU(cU)
          },
          children: YU ? zU("worldBuilder:fileTooBig", {
            maxSizeKb: IU.nd
          }) : zU("worldBuilder:upload")
        })]
      })
    }

    function kU(UU) {
      let {
        ownedSchematics: XU,
        onClose: zU,
        onChosenPreset: cU,
        onChosenFile: yU
      } = UU;
      const {
        t: QU
      } = (0, pU.I)();
      return (0, tU.jsxs)(tU.Fragment, {
        children: [(0, tU.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: QU("worldBuilder:loadSchematic")
        }), (0, tU.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: QU("worldBuilder:chooseOneOfYourSchematics")
        }), (0, tU.jsx)("div", {
          className: "SchematicPopupSchematicListContainer",
          children: (0, tU.jsx)(AU.d, {
            schematics: XU,
            onSchematicPicked: UU => {
              cU(UU.schematicId), zU()
            },
            loading: !1,
            disableAutoExport: !0
          })
        }), (0, tU.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: QU("worldBuilder:uploadNewSchematic")
        }), (0, tU.jsx)(gU, {
          onFilePicked: async UU => {
            try {
              await yU(UU)
            } catch (XU) {
              console.warn("Schematic upload failed", XU)
            } finally {
              zU()
            }
          }
        })]
      })
    }
    var GU = zU(5454),
      BU = zU(1726),
      ZU = zU(4775),
      RU = zU(1236);

    function PU(UU) {
      var XU;
      let {
        ownedSchematics: zU,
        onClose: cU,
        onChosenEdit: yU,
        onChosenNew: QU,
        onChosenDownload: FU
      } = UU;
      const {
        t: oU
      } = (0, pU.I)(), [DU, YU] = (0, EU.useState)("choose"), [IU, aU] = (0, EU.useState)(null), [gU, kU] = (0, EU.useState)(null);
      return (0, tU.jsxs)(tU.Fragment, {
        children: [(0, tU.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: oU("worldBuilder:saveSchematic")
        }), "choose" === DU && (0, tU.jsxs)(tU.Fragment, {
          children: [(0, tU.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: oU("worldBuilder:overwriteOneOfYourSchematics")
          }), (0, tU.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, tU.jsx)(AU.d, {
              schematics: zU,
              onSchematicPicked: UU => {
                aU(UU.schematicId), kU("existing"), YU("save")
              },
              loading: !1,
              disableAutoExport: !1
            })
          }), (0, tU.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: oU("general:otherOptions")
          }), (0, tU.jsxs)("div", {
            className: "OtherOptions",
            children: [(0, tU.jsx)(NU.l, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                kU("new"), YU("save")
              },
              children: oU("worldBuilder:saveAsNewSchematic")
            }), (0, tU.jsx)(NU.f, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                kU("file"), YU("save")
              },
              children: oU("worldBuilder:downloadSchematic")
            })]
          })]
        }), "choose" !== DU && (0, tU.jsx)(WU, {
          type: gU,
          ownedSchematics: zU,
          onSubmit: (UU, XU, zU) => {
            "file" === gU ? FU(XU, UU) : "new" === gU ? QU(XU, zU, UU) : yU(IU, XU, zU, UU), cU()
          },
          onBack: () => {
            YU("choose")
          },
          prepopName: "existing" === gU ? null === (XU = zU.find((UU => UU.schematicId === IU))) || void 0 === XU ? void 0 : XU.name : null
        })]
      })
    }

    function WU(UU) {
      let {
        type: XU,
        prepopName: zU,
        ownedSchematics: cU,
        onSubmit: yU,
        onBack: QU
      } = UU;
      const {
        t: AU
      } = (0, pU.I)(), [FU, oU] = (0, EU.useState)(""), [YU, IU] = (0, EU.useState)(""), [aU, gU] = (0, EU.useState)(null), [kU, GU] = (0, EU.useState)(!0), PU = UU => {
        var yU;
        UU = null !== (yU = UU) && void 0 !== yU ? yU : FU;
        const QU = (0, RU.rb)(UU, "new" === XU || "existing" === XU && UU !== zU);
        return QU ? (gU(AU(QU.translationKey, QU.params)), !1) : "new" === XU && cU.find((XU => XU.name === UU)) ? (gU(AU("worldBuilder:schematicAlreadyExists")), !1) : (gU(null), !0)
      };
      return (0, tU.jsxs)("div", {
        className: "SaveSchematicWindow",
        children: [(0, tU.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: AU("general:name")
        }), (0, tU.jsx)(BU.e, {
          className: DU()("SaveSchematicName", {
            Error: aU
          }),
          forcedText: zU,
          onValueChange: UU => {
            oU(UU), PU(UU)
          },
          placeholderText: AU("worldBuilder:schematicNamePlaceholder"),
          maxLength: RU.eb
        }), (0, tU.jsx)("h2", {
          className: DU()("SaveSchematicError", {
            Hidden: !aU
          }),
          children: aU
        }), (0, tU.jsx)("h2", {
          className: DU()("SchematicPopupSubtitle", {
            Hidden: "file" === XU
          }),
          children: AU("general:description")
        }), (0, tU.jsx)(BU.e, {
          className: DU()("SaveSchematicDescription", {
            Hidden: "file" === XU
          }),
          onValueChange: IU,
          placeholderText: AU("worldBuilder:schematicDescriptionPlaceholder"),
          maxLength: RU.cb,
          useTextarea: !0
        }), (0, tU.jsxs)("div", {
          className: DU()("SaveSchematicCheckboxContainer", {
            WarningBorder: "existing" === XU
          }),
          children: [(0, tU.jsx)(ZU.d, {
            checked: kU,
            onChange: UU => {
              GU(UU.target.checked)
            },
            disabled: !1,
            className: "SaveSchematicCheckbox"
          }), (0, tU.jsx)("h1", {
            className: "SchematicPopupSubtitle",
            children: AU("existing" === XU ? "worldBuilder:overwriteLobbyCode" : "worldBuilder:includeLobbyCode")
          })]
        }), "existing" === XU && (0, tU.jsx)("div", {
          className: "SaveSchematicLobbyCodeWarning",
          children: AU("worldBuilder:lobbyCodeWarning")
        }), (0, tU.jsxs)("div", {
          className: "SaveSchematicButtons",
          children: [(0, tU.jsx)(NU.l, {
            className: "SaveSchematicButton",
            onClick: () => {
              PU() && yU(kU, FU, YU)
            },
            children: AU("file" === XU ? "general:download" : "general:save")
          }), (0, tU.jsx)(NU.G, {
            className: "SaveSchematicButton",
            onClick: QU,
            children: AU("general:cancel")
          })]
        })]
      })
    }
    var dU = zU(1203),
      LU = zU(1800),
      eU = zU(1131);

    function CU(UU, XU) {
      if ("devDownloadJson" !== UU) ! function(UU, XU) {
        const zU = dU.clientSideServerUrls.getHttpUrlFromWebSocketUrl((0, QU.b)().websocketUrl);
        let FU = !1;
        const oU = async (UU, XU) => {
          if (FU) return;
          FU = !0;
          const {
            gameNameWithVariation: cU,
            lobbyName: AU
          } = (0, QU.b)(), oU = {
            gameNameWithVariation: cU,
            lobbyName: AU
          };
          return await (0, eU.postJsonWithMetricsCookiesAndJsonResponse)(`${zU}/schematic/${UU}`, yU.x[UU].toBuffer({
            ...oU,
            ...XU
          }), {
            retries: 1
          })
        };
        if ("Plugin|WorldBuilder|SaveSchematic" === UU) ! function(UU) {
          let {
            ownedSchematics: XU,
            onChosenDownload: zU,
            onChosenEdit: cU,
            onChosenNew: yU,
            onClose: QU
          } = UU;
          YU.NotificationProvider.showCustomPopup({
            body: UU => (0, tU.jsx)(PU, {
              ownedSchematics: XU,
              onChosenDownload: zU,
              onChosenEdit: cU,
              onChosenNew: yU,
              onClose: UU
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: QU,
            unlockPointerKey: "schematicSaverPopup"
          })
        }({
          ownedSchematics: XU,
          onChosenDownload: (UU, XU) => {
            oU("download-schematic", {
              name: UU,
              includeLobbyCode: XU
            }).then((XU => {
              let {
                buffer: {
                  data: zU
                }
              } = XU;
              const yU = cU.XY.from(zU);
              (0, LU.downloadBlob)(new Blob([yU], {
                type: "application/octet-stream"
              }), `${UU}.bloxdschem`)
            }))
          },
          onClose: () => {
            oU("cancel", {})
          },
          onChosenEdit: (UU, XU, zU, cU) => {
            oU("save-to-profile", {
              schematicId: UU,
              name: XU,
              description: zU,
              includeLobbyCode: cU
            })
          },
          onChosenNew: (UU, XU, zU) => {
            oU("save-to-profile", {
              schematicId: null,
              name: UU,
              description: XU,
              includeLobbyCode: zU
            })
          }
        });
        else if ("Plugin|WorldBuilder|LoadSchematic" === UU) ! function(UU) {
          let {
            ownedSchematics: XU,
            onChosenFile: zU,
            onChosenPreset: cU,
            onClose: yU
          } = UU;
          YU.NotificationProvider.showCustomPopup({
            body: UU => (0, tU.jsx)(kU, {
              ownedSchematics: XU,
              onChosenFile: zU,
              onChosenPreset: cU,
              onClose: UU
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: yU,
            unlockPointerKey: "schematicLoaderPopup"
          })
        }({
          ownedSchematics: XU,
          onChosenFile: async UU => {
            const XU = cU.XY.from(await UU.arrayBuffer()),
              {
                gameNameWithVariation: AU,
                lobbyName: FU
              } = (0, QU.b)();
            await (0, eU.postBinaryWithMetricsCookiesAndCustomResponse)(`${zU}/schematic/upload-schematic`, yU.x["upload-schematic"].toBuffer({
              gameNameWithVariation: AU,
              lobbyName: FU,
              schematic: XU
            }), {
              retries: 1
            }, eU.HttpPayloadType.json)
          },
          onChosenPreset: UU => {
            oU("load-from-profile", {
              schematicId: UU
            })
          },
          onClose: () => {
            oU("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ListSchematics" === UU)(0, AU.f)({
          ownedSchematics: Array.isArray(XU) ? XU : XU.schematics,
          currentWorldSchematicId: Array.isArray(XU) ? null : XU.currentWorldSchematicId,
          onClose: () => {
            oU("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ExportWorld" === UU) {
          var DU;
          const UU = null !== (DU = XU.schematic) && void 0 !== DU ? DU : XU;
          (0, GU.f)({
            schematic: UU,
            inSourceWorld: UU.schematicId === XU.currentWorldSchematicId,
            onClose: () => {
              oU("cancel", {})
            }
          })
        } else console.error(`Unknown plugin message type ${UU}`)
      }(UU, XU);
      else {
        const UU = JSON.stringify(XU.data, null, 2);
        (0, LU.downloadBlob)(new Blob([UU], {
          type: "application/json"
        }), XU.filename)
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);