export const id = 195;
export const ids = [195];
export const modules = {
  35381: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => oB,
      e: () => LB
    });
    var VB = dB(62),
      yB = dB(1235),
      pB = dB(1078),
      lB = dB(1225),
      JB = dB(2971),
      YB = dB(4334),
      gB = dB(980);

    function oB(BB) {
      let {
        loading: TB,
        schematics: dB,
        onSchematicPicked: VB,
        selectedSchematicIdList: yB = [],
        disableAutoExport: YB
      } = BB;
      const {
        t: oB
      } = (0, pB.z)();
      return (0, gB.jsxs)("div", {
        className: "SchematicList",
        children: [TB && (0, gB.jsx)(lB.b, {}), !TB && 0 === dB.length && (0, gB.jsx)("div", {
          className: "NoSchematicsText",
          children: oB("worldBuilder:noSavedSchematic")
        }), !TB && dB.map((BB => (0, gB.jsx)(JB.f, {
          source: {
            type: "schematic",
            schematic: BB
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            VB(BB)
          },
          isSelected: yB.includes(BB.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: BB.isAutoExported && YB,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, BB.schematicId)))]
      })
    }

    function kB(BB) {
      let {
        ownedSchematics: TB,
        currentWorldSchematicId: dB,
        onClose: yB
      } = BB;
      const {
        t: lB
      } = (0, pB.z)(), [JB, kB] = (0, VB.useState)(null);
      return (0, gB.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === JB && (0, gB.jsxs)(gB.Fragment, {
          children: [(0, gB.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: lB("worldBuilder:schematicList")
          }), (0, gB.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: lB("worldBuilder:clickSchematicForOptions")
          }), (0, gB.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, gB.jsx)(oB, {
              loading: !1,
              schematics: TB,
              onSchematicPicked: BB => {
                kB(BB)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== JB && (0, gB.jsx)(YB.h, {
          schematic: JB,
          inSourceWorld: JB.schematicId === dB,
          onSchematicUpdate: BB => {
            kB(BB)
          },
          onClose: () => {
            kB(null), yB()
          }
        })]
      })
    }

    function LB(BB) {
      let {
        ownedSchematics: TB,
        currentWorldSchematicId: dB,
        onClose: VB
      } = BB;
      yB.NotificationProvider.showCustomPopup({
        body: BB => (0, gB.jsx)(kB, {
          ownedSchematics: TB,
          currentWorldSchematicId: dB,
          onClose: BB
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: VB,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  40448: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      runClientGameMessage: () => UB
    });
    var VB = dB(3239),
      yB = dB(3249),
      pB = dB(1209),
      lB = dB(35381),
      JB = dB(4367),
      YB = dB(933),
      gB = dB.n(YB),
      oB = dB(62),
      kB = dB(1235),
      LB = dB(1324),
      OB = dB(279),
      DB = dB(1078),
      uB = dB(946),
      HB = dB(980);

    function EB(BB) {
      let {
        onFilePicked: TB
      } = BB;
      const {
        t: dB
      } = (0, DB.z)(), [VB, yB] = (0, oB.useState)(null), {
        getRootProps: pB,
        getInputProps: lB,
        isDragActive: YB
      } = (0, JB.c)({
        onDrop: BB => {
          BB.length > 0 && yB(BB[0])
        },
        useFsAccessApi: !1
      }), kB = VB && VB.size > 1024 * OB.cd;
      return (0, HB.jsxs)("div", {
        className: "SchematicUploadContainer",
        children: [(0, HB.jsxs)("div", {
          ...pB({
            className: gB()("SchematicUpload", {
              ActiveDrag: YB
            })
          }),
          children: [(0, HB.jsx)("input", {
            ...lB({
              accept: ".bloxdschem"
            })
          }), !YB && VB ? (0, HB.jsxs)(HB.Fragment, {
            children: [(0, HB.jsx)("div", {
              className: gB()("SchematicUploadIcon", "Active", {
                TooBig: kB
              }),
              children: (0, HB.jsx)(uB.e, {
                name: "file-lines"
              })
            }), (0, HB.jsx)("div", {
              className: "SchematicUploadInstructions Active",
              children: VB.name
            })]
          }) : (0, HB.jsxs)(HB.Fragment, {
            children: [(0, HB.jsx)("div", {
              className: "SchematicUploadIcon",
              children: (0, HB.jsx)(uB.e, {
                name: "up-from-bracket"
              })
            }), (0, HB.jsx)("div", {
              className: "SchematicUploadInstructions",
              children: dB("worldBuilder:dragAFileHere")
            })]
          })]
        }), (0, HB.jsx)(LB.k, {
          disabled: kB || !VB,
          className: "SchematicUploadButton",
          onClick: () => {
            !kB && VB && TB(VB)
          },
          children: kB ? dB("worldBuilder:fileTooBig", {
            maxSizeKb: OB.cd
          }) : dB("worldBuilder:upload")
        })]
      })
    }

    function vB(BB) {
      let {
        ownedSchematics: TB,
        onClose: dB,
        onChosenPreset: VB,
        onChosenFile: yB
      } = BB;
      const {
        t: pB
      } = (0, DB.z)();
      return (0, HB.jsxs)(HB.Fragment, {
        children: [(0, HB.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: pB("worldBuilder:loadSchematic")
        }), (0, HB.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: pB("worldBuilder:chooseOneOfYourSchematics")
        }), (0, HB.jsx)("div", {
          className: "SchematicPopupSchematicListContainer",
          children: (0, HB.jsx)(lB.b, {
            schematics: TB,
            onSchematicPicked: BB => {
              VB(BB.schematicId), dB()
            },
            loading: !1,
            disableAutoExport: !0
          })
        }), (0, HB.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: pB("worldBuilder:uploadNewSchematic")
        }), (0, HB.jsx)(EB, {
          onFilePicked: async BB => {
            try {
              await yB(BB)
            } catch (TB) {
              console.warn("Schematic upload failed", TB)
            } finally {
              dB()
            }
          }
        })]
      })
    }
    var mB = dB(4334),
      iB = dB(1555),
      NB = dB(3821),
      tB = dB(1105);

    function fB(BB) {
      var TB;
      let {
        ownedSchematics: dB,
        onClose: VB,
        onChosenEdit: yB,
        onChosenNew: pB,
        onChosenDownload: JB
      } = BB;
      const {
        t: YB
      } = (0, DB.z)(), [gB, kB] = (0, oB.useState)("choose"), [OB, uB] = (0, oB.useState)(null), [EB, vB] = (0, oB.useState)(null);
      return (0, HB.jsxs)(HB.Fragment, {
        children: [(0, HB.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: YB("worldBuilder:saveSchematic")
        }), "choose" === gB && (0, HB.jsxs)(HB.Fragment, {
          children: [(0, HB.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: YB("worldBuilder:overwriteOneOfYourSchematics")
          }), (0, HB.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, HB.jsx)(lB.b, {
              schematics: dB,
              onSchematicPicked: BB => {
                uB(BB.schematicId), vB("existing"), kB("save")
              },
              loading: !1,
              disableAutoExport: !1
            })
          }), (0, HB.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: YB("general:otherOptions")
          }), (0, HB.jsxs)("div", {
            className: "OtherOptions",
            children: [(0, HB.jsx)(LB.k, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                vB("new"), kB("save")
              },
              children: YB("worldBuilder:saveAsNewSchematic")
            }), (0, HB.jsx)(LB.d, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                vB("file"), kB("save")
              },
              children: YB("worldBuilder:downloadSchematic")
            })]
          })]
        }), "choose" !== gB && (0, HB.jsx)(sB, {
          type: EB,
          ownedSchematics: dB,
          onSubmit: (BB, TB, dB) => {
            "file" === EB ? JB(TB, BB) : "new" === EB ? pB(TB, dB, BB) : yB(OB, TB, dB, BB), VB()
          },
          onBack: () => {
            kB("choose")
          },
          prepopName: "existing" === EB ? null === (TB = dB.find((BB => BB.schematicId === OB))) || void 0 === TB ? void 0 : TB.name : null
        })]
      })
    }

    function sB(BB) {
      let {
        type: TB,
        prepopName: dB,
        ownedSchematics: VB,
        onSubmit: yB,
        onBack: pB
      } = BB;
      const {
        t: lB
      } = (0, DB.z)(), [JB, YB] = (0, oB.useState)(""), [kB, OB] = (0, oB.useState)(""), [uB, EB] = (0, oB.useState)(null), [vB, mB] = (0, oB.useState)(!0), fB = BB => {
        var dB;
        BB = null !== (dB = BB) && void 0 !== dB ? dB : JB;
        const yB = "new" === TB ? (0, tB.F)(BB) : null,
          pB = [...(0, tB.Fb)(BB), ...yB ? [yB] : []];
        return pB.length > 0 ? (EB(pB.join(", ")), !1) : "new" === TB && VB.find((TB => TB.name === BB)) ? (EB(lB("worldBuilder:schematicAlreadyExists")), !1) : (EB(null), !0)
      };
      return (0, HB.jsxs)("div", {
        className: "SaveSchematicWindow",
        children: [(0, HB.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: lB("general:name")
        }), (0, HB.jsx)(iB.e, {
          className: gB()("SaveSchematicName", {
            Error: uB
          }),
          forcedText: dB,
          onValueChange: BB => {
            YB(BB), fB(BB)
          },
          placeholderText: lB("worldBuilder:schematicNamePlaceholder"),
          maxLength: tB.wb
        }), (0, HB.jsx)("h2", {
          className: gB()("SaveSchematicError", {
            Hidden: !uB
          }),
          children: uB
        }), (0, HB.jsx)("h2", {
          className: gB()("SchematicPopupSubtitle", {
            Hidden: "file" === TB
          }),
          children: lB("general:description")
        }), (0, HB.jsx)(iB.e, {
          className: gB()("SaveSchematicDescription", {
            Hidden: "file" === TB
          }),
          onValueChange: OB,
          placeholderText: lB("worldBuilder:schematicDescriptionPlaceholder"),
          maxLength: tB.vb,
          useTextarea: !0
        }), (0, HB.jsxs)("div", {
          className: gB()("SaveSchematicCheckboxContainer", {
            WarningBorder: "existing" === TB
          }),
          children: [(0, HB.jsx)(NB.b, {
            checked: vB,
            onChange: BB => {
              mB(BB.target.checked)
            },
            disabled: !1,
            className: "SaveSchematicCheckbox"
          }), (0, HB.jsx)("h1", {
            className: "SchematicPopupSubtitle",
            children: lB("existing" === TB ? "worldBuilder:overwriteLobbyCode" : "worldBuilder:includeLobbyCode")
          })]
        }), "existing" === TB && (0, HB.jsx)("div", {
          className: "SaveSchematicLobbyCodeWarning",
          children: lB("worldBuilder:lobbyCodeWarning")
        }), (0, HB.jsxs)("div", {
          className: "SaveSchematicButtons",
          children: [(0, HB.jsx)(LB.k, {
            className: "SaveSchematicButton",
            onClick: () => {
              fB() && yB(vB, JB, kB)
            },
            children: lB("file" === TB ? "general:download" : "general:save")
          }), (0, HB.jsx)(LB.K, {
            className: "SaveSchematicButton",
            onClick: pB,
            children: lB("general:cancel")
          })]
        })]
      })
    }
    var MB = dB(1089),
      zB = dB(1596),
      wB = dB(1020);

    function UB(BB, TB) {
      if ("devDownloadJson" !== BB) ! function(BB, TB) {
        const dB = MB.clientSideServerUrls.getHttpUrlFromWebSocketUrl((0, pB.e)().websocketUrl);
        let JB = !1;
        const YB = async (BB, TB) => {
          if (JB) return;
          JB = !0;
          const {
            gameNameWithVariation: VB,
            lobbyName: lB
          } = (0, pB.e)(), YB = {
            gameNameWithVariation: VB,
            lobbyName: lB
          };
          return await (0, wB.postJsonWithMetricsCookiesAndJsonResponse)(`${dB}/schematic/${BB}`, yB.y[BB].toBuffer({
            ...YB,
            ...TB
          }), {
            retries: 1
          })
        };
        if ("Plugin|WorldBuilder|SaveSchematic" === BB) ! function(BB) {
          let {
            ownedSchematics: TB,
            onChosenDownload: dB,
            onChosenEdit: VB,
            onChosenNew: yB,
            onClose: pB
          } = BB;
          kB.NotificationProvider.showCustomPopup({
            body: BB => (0, HB.jsx)(fB, {
              ownedSchematics: TB,
              onChosenDownload: dB,
              onChosenEdit: VB,
              onChosenNew: yB,
              onClose: BB
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: pB,
            unlockPointerKey: "schematicSaverPopup"
          })
        }({
          ownedSchematics: TB,
          onChosenDownload: (BB, TB) => {
            YB("download-schematic", {
              name: BB,
              includeLobbyCode: TB
            }).then((TB => {
              let {
                buffer: {
                  data: dB
                }
              } = TB;
              const yB = VB.iD.from(dB);
              (0, zB.downloadBlob)(new Blob([yB], {
                type: "application/octet-stream"
              }), `${BB}.bloxdschem`)
            }))
          },
          onClose: () => {
            YB("cancel", {})
          },
          onChosenEdit: (BB, TB, dB, VB) => {
            YB("save-to-profile", {
              schematicId: BB,
              name: TB,
              description: dB,
              includeLobbyCode: VB
            })
          },
          onChosenNew: (BB, TB, dB) => {
            YB("save-to-profile", {
              schematicId: null,
              name: BB,
              description: TB,
              includeLobbyCode: dB
            })
          }
        });
        else if ("Plugin|WorldBuilder|LoadSchematic" === BB) ! function(BB) {
          let {
            ownedSchematics: TB,
            onChosenFile: dB,
            onChosenPreset: VB,
            onClose: yB
          } = BB;
          kB.NotificationProvider.showCustomPopup({
            body: BB => (0, HB.jsx)(vB, {
              ownedSchematics: TB,
              onChosenFile: dB,
              onChosenPreset: VB,
              onClose: BB
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: yB,
            unlockPointerKey: "schematicLoaderPopup"
          })
        }({
          ownedSchematics: TB,
          onChosenFile: async BB => {
            const TB = VB.iD.from(await BB.arrayBuffer()),
              {
                gameNameWithVariation: lB,
                lobbyName: JB
              } = (0, pB.e)();
            await (0, wB.postBinaryWithMetricsCookiesAndCustomResponse)(`${dB}/schematic/upload-schematic`, yB.y["upload-schematic"].toBuffer({
              gameNameWithVariation: lB,
              lobbyName: JB,
              schematic: TB
            }), {
              retries: 1
            }, wB.HttpPayloadType.json)
          },
          onChosenPreset: BB => {
            YB("load-from-profile", {
              schematicId: BB
            })
          },
          onClose: () => {
            YB("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ListSchematics" === BB)(0, lB.e)({
          ownedSchematics: Array.isArray(TB) ? TB : TB.schematics,
          currentWorldSchematicId: Array.isArray(TB) ? null : TB.currentWorldSchematicId,
          onClose: () => {
            YB("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ExportWorld" === BB) {
          var gB;
          const BB = null !== (gB = TB.schematic) && void 0 !== gB ? gB : TB;
          (0, mB.i)({
            schematic: BB,
            inSourceWorld: BB.schematicId === TB.currentWorldSchematicId,
            onClose: () => {
              YB("cancel", {})
            }
          })
        } else console.error(`Unknown plugin message type ${BB}`)
      }(BB, TB);
      else {
        const BB = JSON.stringify(TB.data, null, 2);
        (0, zB.downloadBlob)(new Blob([BB], {
          type: "application/json"
        }), TB.filename)
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);