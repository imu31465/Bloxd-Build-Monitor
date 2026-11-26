export const id = 240;
export const ids = [240];
export const modules = {
  37041: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => MB,
      f: () => zB
    });
    var YB = GB(56),
      DB = GB(1400),
      QB = GB(1175),
      oB = GB(1375),
      jB = GB(3926),
      yB = GB(5414),
      JB = GB(1282);

    function MB(BB) {
      let {
        loading: OB,
        schematics: GB,
        onSchematicPicked: YB,
        selectedSchematicIdList: DB = [],
        disableAutoExport: yB
      } = BB;
      const {
        t: MB
      } = (0, QB.H)();
      return (0, JB.jsxs)("div", {
        className: "SchematicList",
        children: [OB && (0, JB.jsx)(oB.b, {}), !OB && 0 === GB.length && (0, JB.jsx)("div", {
          className: "NoSchematicsText",
          children: MB("worldBuilder:noSavedSchematic")
        }), !OB && GB.map((BB => (0, JB.jsx)(jB.h, {
          source: {
            type: "schematic",
            schematic: BB
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            YB(BB)
          },
          isSelected: DB.includes(BB.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: BB.isAutoExported && yB,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, BB.schematicId)))]
      })
    }

    function PB(BB) {
      let {
        ownedSchematics: OB,
        currentWorldSchematicId: GB,
        onClose: DB
      } = BB;
      const {
        t: oB
      } = (0, QB.H)(), [jB, PB] = (0, YB.useState)(null);
      return (0, JB.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === jB && (0, JB.jsxs)(JB.Fragment, {
          children: [(0, JB.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: oB("worldBuilder:schematicList")
          }), (0, JB.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: oB("worldBuilder:clickSchematicForOptions")
          }), (0, JB.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, JB.jsx)(MB, {
              loading: !1,
              schematics: OB,
              onSchematicPicked: BB => {
                PB(BB)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== jB && (0, JB.jsx)(yB.k, {
          schematic: jB,
          inSourceWorld: jB.schematicId === GB,
          onSchematicUpdate: BB => {
            PB(BB)
          },
          onClose: () => {
            PB(null), DB()
          }
        })]
      })
    }

    function zB(BB) {
      let {
        ownedSchematics: OB,
        currentWorldSchematicId: GB,
        onClose: YB
      } = BB;
      DB.NotificationProvider.showCustomPopup({
        body: BB => (0, JB.jsx)(PB, {
          ownedSchematics: OB,
          currentWorldSchematicId: GB,
          onClose: BB
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: YB,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  44867: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      runClientGameMessage: () => KB
    });
    var YB = GB(4150),
      DB = GB(4166),
      QB = GB(1350),
      oB = GB(37041),
      jB = GB(5452),
      yB = GB(1090),
      JB = GB.n(yB),
      MB = GB(56),
      PB = GB(1400),
      zB = GB(1485),
      lB = GB(353),
      pB = GB(1175),
      qB = GB(1383),
      ZB = GB(1282);

    function NB(BB) {
      let {
        onFilePicked: OB
      } = BB;
      const {
        t: GB
      } = (0, pB.H)(), [YB, DB] = (0, MB.useState)(null), {
        getRootProps: QB,
        getInputProps: oB,
        isDragActive: yB
      } = (0, jB.e)({
        onDrop: BB => {
          BB.length > 0 && DB(BB[0])
        },
        useFsAccessApi: !1
      }), PB = YB && YB.size > 1024 * lB.vd;
      return (0, ZB.jsxs)("div", {
        className: "SchematicUploadContainer",
        children: [(0, ZB.jsxs)("div", {
          ...QB({
            className: JB()("SchematicUpload", {
              ActiveDrag: yB
            })
          }),
          children: [(0, ZB.jsx)("input", {
            ...oB({
              accept: ".bloxdschem"
            })
          }), !yB && YB ? (0, ZB.jsxs)(ZB.Fragment, {
            children: [(0, ZB.jsx)("div", {
              className: JB()("SchematicUploadIcon", "Active", {
                TooBig: PB
              }),
              children: (0, ZB.jsx)(qB.b, {
                name: "file-lines"
              })
            }), (0, ZB.jsx)("div", {
              className: "SchematicUploadInstructions Active",
              children: YB.name
            })]
          }) : (0, ZB.jsxs)(ZB.Fragment, {
            children: [(0, ZB.jsx)("div", {
              className: "SchematicUploadIcon",
              children: (0, ZB.jsx)(qB.b, {
                name: "up-from-bracket"
              })
            }), (0, ZB.jsx)("div", {
              className: "SchematicUploadInstructions",
              children: GB("worldBuilder:dragAFileHere")
            })]
          })]
        }), (0, ZB.jsx)(zB.q, {
          disabled: PB || !YB,
          className: "SchematicUploadButton",
          onClick: () => {
            !PB && YB && OB(YB)
          },
          children: PB ? GB("worldBuilder:fileTooBig", {
            maxSizeKb: lB.vd
          }) : GB("worldBuilder:upload")
        })]
      })
    }

    function RB(BB) {
      let {
        ownedSchematics: OB,
        onClose: GB,
        onChosenPreset: YB,
        onChosenFile: DB
      } = BB;
      const {
        t: QB
      } = (0, pB.H)();
      return (0, ZB.jsxs)(ZB.Fragment, {
        children: [(0, ZB.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: QB("worldBuilder:loadSchematic")
        }), (0, ZB.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: QB("worldBuilder:chooseOneOfYourSchematics")
        }), (0, ZB.jsx)("div", {
          className: "SchematicPopupSchematicListContainer",
          children: (0, ZB.jsx)(oB.d, {
            schematics: OB,
            onSchematicPicked: BB => {
              YB(BB.schematicId), GB()
            },
            loading: !1,
            disableAutoExport: !0
          })
        }), (0, ZB.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: QB("worldBuilder:uploadNewSchematic")
        }), (0, ZB.jsx)(NB, {
          onFilePicked: async BB => {
            try {
              await DB(BB)
            } catch (OB) {
              console.warn("Schematic upload failed", OB)
            } finally {
              GB()
            }
          }
        })]
      })
    }
    var WB = GB(5414),
      AB = GB(1735),
      VB = GB(4777),
      SB = GB(1217);

    function nB(BB) {
      var OB;
      let {
        ownedSchematics: GB,
        onClose: YB,
        onChosenEdit: DB,
        onChosenNew: QB,
        onChosenDownload: jB
      } = BB;
      const {
        t: yB
      } = (0, pB.H)(), [JB, PB] = (0, MB.useState)("choose"), [lB, qB] = (0, MB.useState)(null), [NB, RB] = (0, MB.useState)(null);
      return (0, ZB.jsxs)(ZB.Fragment, {
        children: [(0, ZB.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: yB("worldBuilder:saveSchematic")
        }), "choose" === JB && (0, ZB.jsxs)(ZB.Fragment, {
          children: [(0, ZB.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: yB("worldBuilder:overwriteOneOfYourSchematics")
          }), (0, ZB.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, ZB.jsx)(oB.d, {
              schematics: GB,
              onSchematicPicked: BB => {
                qB(BB.schematicId), RB("existing"), PB("save")
              },
              loading: !1,
              disableAutoExport: !1
            })
          }), (0, ZB.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: yB("general:otherOptions")
          }), (0, ZB.jsxs)("div", {
            className: "OtherOptions",
            children: [(0, ZB.jsx)(zB.q, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                RB("new"), PB("save")
              },
              children: yB("worldBuilder:saveAsNewSchematic")
            }), (0, ZB.jsx)(zB.f, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                RB("file"), PB("save")
              },
              children: yB("worldBuilder:downloadSchematic")
            })]
          })]
        }), "choose" !== JB && (0, ZB.jsx)(UB, {
          type: NB,
          ownedSchematics: GB,
          onSubmit: (BB, OB, GB) => {
            "file" === NB ? jB(OB, BB) : "new" === NB ? QB(OB, GB, BB) : DB(lB, OB, GB, BB), YB()
          },
          onBack: () => {
            PB("choose")
          },
          prepopName: "existing" === NB ? null === (OB = GB.find((BB => BB.schematicId === lB))) || void 0 === OB ? void 0 : OB.name : null
        })]
      })
    }

    function UB(BB) {
      let {
        type: OB,
        prepopName: GB,
        ownedSchematics: YB,
        onSubmit: DB,
        onBack: QB
      } = BB;
      const {
        t: oB
      } = (0, pB.H)(), [jB, yB] = (0, MB.useState)(""), [PB, lB] = (0, MB.useState)(""), [qB, NB] = (0, MB.useState)(null), [RB, WB] = (0, MB.useState)(!0), nB = BB => {
        var DB;
        BB = null !== (DB = BB) && void 0 !== DB ? DB : jB;
        const QB = (0, SB.Cb)(BB, "new" === OB || "existing" === OB && BB !== GB);
        return QB ? (NB(oB(QB.translationKey, QB.params)), !1) : "new" === OB && YB.find((OB => OB.name === BB)) ? (NB(oB("worldBuilder:schematicAlreadyExists")), !1) : (NB(null), !0)
      };
      return (0, ZB.jsxs)("div", {
        className: "SaveSchematicWindow",
        children: [(0, ZB.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: oB("general:name")
        }), (0, ZB.jsx)(AB.b, {
          className: JB()("SaveSchematicName", {
            Error: qB
          }),
          forcedText: GB,
          onValueChange: BB => {
            yB(BB), nB(BB)
          },
          placeholderText: oB("worldBuilder:schematicNamePlaceholder"),
          maxLength: SB.rb
        }), (0, ZB.jsx)("h2", {
          className: JB()("SaveSchematicError", {
            Hidden: !qB
          }),
          children: qB
        }), (0, ZB.jsx)("h2", {
          className: JB()("SchematicPopupSubtitle", {
            Hidden: "file" === OB
          }),
          children: oB("general:description")
        }), (0, ZB.jsx)(AB.b, {
          className: JB()("SaveSchematicDescription", {
            Hidden: "file" === OB
          }),
          onValueChange: lB,
          placeholderText: oB("worldBuilder:schematicDescriptionPlaceholder"),
          maxLength: SB.qb,
          useTextarea: !0
        }), (0, ZB.jsxs)("div", {
          className: JB()("SaveSchematicCheckboxContainer", {
            WarningBorder: "existing" === OB
          }),
          children: [(0, ZB.jsx)(VB.e, {
            checked: RB,
            onChange: BB => {
              WB(BB.target.checked)
            },
            disabled: !1,
            className: "SaveSchematicCheckbox"
          }), (0, ZB.jsx)("h1", {
            className: "SchematicPopupSubtitle",
            children: oB("existing" === OB ? "worldBuilder:overwriteLobbyCode" : "worldBuilder:includeLobbyCode")
          })]
        }), "existing" === OB && (0, ZB.jsx)("div", {
          className: "SaveSchematicLobbyCodeWarning",
          children: oB("worldBuilder:lobbyCodeWarning")
        }), (0, ZB.jsxs)("div", {
          className: "SaveSchematicButtons",
          children: [(0, ZB.jsx)(zB.q, {
            className: "SaveSchematicButton",
            onClick: () => {
              nB() && DB(RB, jB, PB)
            },
            children: oB("file" === OB ? "general:download" : "general:save")
          }), (0, ZB.jsx)(zB.Q, {
            className: "SaveSchematicButton",
            onClick: QB,
            children: oB("general:cancel")
          })]
        })]
      })
    }
    var fB = GB(1186),
      kB = GB(1822),
      dB = GB(1121);

    function KB(BB, OB) {
      if ("devDownloadJson" !== BB) ! function(BB, OB) {
        const GB = fB.clientSideServerUrls.getHttpUrlFromWebSocketUrl((0, QB.c)().websocketUrl);
        let jB = !1;
        const yB = async (BB, OB) => {
          if (jB) return;
          jB = !0;
          const {
            gameNameWithVariation: YB,
            lobbyName: oB
          } = (0, QB.c)(), yB = {
            gameNameWithVariation: YB,
            lobbyName: oB
          };
          return await (0, dB.postJsonWithMetricsCookiesAndJsonResponse)(`${GB}/schematic/${BB}`, DB.F[BB].toBuffer({
            ...yB,
            ...OB
          }), {
            retries: 1
          })
        };
        if ("Plugin|WorldBuilder|SaveSchematic" === BB) ! function(BB) {
          let {
            ownedSchematics: OB,
            onChosenDownload: GB,
            onChosenEdit: YB,
            onChosenNew: DB,
            onClose: QB
          } = BB;
          PB.NotificationProvider.showCustomPopup({
            body: BB => (0, ZB.jsx)(nB, {
              ownedSchematics: OB,
              onChosenDownload: GB,
              onChosenEdit: YB,
              onChosenNew: DB,
              onClose: BB
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: QB,
            unlockPointerKey: "schematicSaverPopup"
          })
        }({
          ownedSchematics: OB,
          onChosenDownload: (BB, OB) => {
            yB("download-schematic", {
              name: BB,
              includeLobbyCode: OB
            }).then((OB => {
              let {
                buffer: {
                  data: GB
                }
              } = OB;
              const DB = YB.BP.from(GB);
              (0, kB.downloadBlob)(new Blob([DB], {
                type: "application/octet-stream"
              }), `${BB}.bloxdschem`)
            }))
          },
          onClose: () => {
            yB("cancel", {})
          },
          onChosenEdit: (BB, OB, GB, YB) => {
            yB("save-to-profile", {
              schematicId: BB,
              name: OB,
              description: GB,
              includeLobbyCode: YB
            })
          },
          onChosenNew: (BB, OB, GB) => {
            yB("save-to-profile", {
              schematicId: null,
              name: BB,
              description: OB,
              includeLobbyCode: GB
            })
          }
        });
        else if ("Plugin|WorldBuilder|LoadSchematic" === BB) ! function(BB) {
          let {
            ownedSchematics: OB,
            onChosenFile: GB,
            onChosenPreset: YB,
            onClose: DB
          } = BB;
          PB.NotificationProvider.showCustomPopup({
            body: BB => (0, ZB.jsx)(RB, {
              ownedSchematics: OB,
              onChosenFile: GB,
              onChosenPreset: YB,
              onClose: BB
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: DB,
            unlockPointerKey: "schematicLoaderPopup"
          })
        }({
          ownedSchematics: OB,
          onChosenFile: async BB => {
            const OB = YB.BP.from(await BB.arrayBuffer()),
              {
                gameNameWithVariation: oB,
                lobbyName: jB
              } = (0, QB.c)();
            await (0, dB.postBinaryWithMetricsCookiesAndCustomResponse)(`${GB}/schematic/upload-schematic`, DB.F["upload-schematic"].toBuffer({
              gameNameWithVariation: oB,
              lobbyName: jB,
              schematic: OB
            }), {
              retries: 1
            }, dB.HttpPayloadType.json)
          },
          onChosenPreset: BB => {
            yB("load-from-profile", {
              schematicId: BB
            })
          },
          onClose: () => {
            yB("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ListSchematics" === BB)(0, oB.f)({
          ownedSchematics: Array.isArray(OB) ? OB : OB.schematics,
          currentWorldSchematicId: Array.isArray(OB) ? null : OB.currentWorldSchematicId,
          onClose: () => {
            yB("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ExportWorld" === BB) {
          var JB;
          const BB = null !== (JB = OB.schematic) && void 0 !== JB ? JB : OB;
          (0, WB.m)({
            schematic: BB,
            inSourceWorld: BB.schematicId === OB.currentWorldSchematicId,
            onClose: () => {
              yB("cancel", {})
            }
          })
        } else console.error(`Unknown plugin message type ${BB}`)
      }(BB, OB);
      else {
        const BB = JSON.stringify(OB.data, null, 2);
        (0, kB.downloadBlob)(new Blob([BB], {
          type: "application/json"
        }), OB.filename)
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);