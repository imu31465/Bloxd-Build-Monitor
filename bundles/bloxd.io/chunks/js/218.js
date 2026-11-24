export const id = 218;
export const ids = [218];
export const modules = {
  36418: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => aB,
      e: () => rB
    });
    var QB = zB(62),
      nB = zB(1381),
      dB = zB(1240),
      IB = zB(1369),
      NB = zB(3587),
      uB = zB(5026),
      UB = zB(1148);

    function aB(BB) {
      let {
        loading: jB,
        schematics: zB,
        onSchematicPicked: QB,
        selectedSchematicIdList: nB = [],
        disableAutoExport: uB
      } = BB;
      const {
        t: aB
      } = (0, dB.D)();
      return (0, UB.jsxs)("div", {
        className: "SchematicList",
        children: [jB && (0, UB.jsx)(IB.e, {}), !jB && 0 === zB.length && (0, UB.jsx)("div", {
          className: "NoSchematicsText",
          children: aB("worldBuilder:noSavedSchematic")
        }), !jB && zB.map((BB => (0, UB.jsx)(NB.f, {
          source: {
            type: "schematic",
            schematic: BB
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            QB(BB)
          },
          isSelected: nB.includes(BB.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: BB.isAutoExported && uB,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, BB.schematicId)))]
      })
    }

    function pB(BB) {
      let {
        ownedSchematics: jB,
        currentWorldSchematicId: zB,
        onClose: nB
      } = BB;
      const {
        t: IB
      } = (0, dB.D)(), [NB, pB] = (0, QB.useState)(null);
      return (0, UB.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === NB && (0, UB.jsxs)(UB.Fragment, {
          children: [(0, UB.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: IB("worldBuilder:schematicList")
          }), (0, UB.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: IB("worldBuilder:clickSchematicForOptions")
          }), (0, UB.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, UB.jsx)(aB, {
              loading: !1,
              schematics: jB,
              onSchematicPicked: BB => {
                pB(BB)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== NB && (0, UB.jsx)(uB.h, {
          schematic: NB,
          inSourceWorld: NB.schematicId === zB,
          onSchematicUpdate: BB => {
            pB(BB)
          },
          onClose: () => {
            pB(null), nB()
          }
        })]
      })
    }

    function rB(BB) {
      let {
        ownedSchematics: jB,
        currentWorldSchematicId: zB,
        onClose: QB
      } = BB;
      nB.NotificationProvider.showCustomPopup({
        body: BB => (0, UB.jsx)(pB, {
          ownedSchematics: jB,
          currentWorldSchematicId: zB,
          onClose: BB
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: QB,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  41825: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      runClientGameMessage: () => oB
    });
    var QB = zB(3836),
      nB = zB(3849),
      dB = zB(1357),
      IB = zB(36418),
      NB = zB(5041),
      uB = zB(1091),
      UB = zB.n(uB),
      aB = zB(62),
      pB = zB(1381),
      rB = zB(1478),
      sB = zB(376),
      JB = zB(1240),
      mB = zB(1108),
      yB = zB(1148);

    function kB(BB) {
      let {
        onFilePicked: jB
      } = BB;
      const {
        t: zB
      } = (0, JB.D)(), [QB, nB] = (0, aB.useState)(null), {
        getRootProps: dB,
        getInputProps: IB,
        isDragActive: uB
      } = (0, NB.d)({
        onDrop: BB => {
          BB.length > 0 && nB(BB[0])
        },
        useFsAccessApi: !1
      }), pB = QB && QB.size > 1024 * sB.id;
      return (0, yB.jsxs)("div", {
        className: "SchematicUploadContainer",
        children: [(0, yB.jsxs)("div", {
          ...dB({
            className: UB()("SchematicUpload", {
              ActiveDrag: uB
            })
          }),
          children: [(0, yB.jsx)("input", {
            ...IB({
              accept: ".bloxdschem"
            })
          }), !uB && QB ? (0, yB.jsxs)(yB.Fragment, {
            children: [(0, yB.jsx)("div", {
              className: UB()("SchematicUploadIcon", "Active", {
                TooBig: pB
              }),
              children: (0, yB.jsx)(mB.c, {
                name: "file-lines"
              })
            }), (0, yB.jsx)("div", {
              className: "SchematicUploadInstructions Active",
              children: QB.name
            })]
          }) : (0, yB.jsxs)(yB.Fragment, {
            children: [(0, yB.jsx)("div", {
              className: "SchematicUploadIcon",
              children: (0, yB.jsx)(mB.c, {
                name: "up-from-bracket"
              })
            }), (0, yB.jsx)("div", {
              className: "SchematicUploadInstructions",
              children: zB("worldBuilder:dragAFileHere")
            })]
          })]
        }), (0, yB.jsx)(rB.m, {
          disabled: pB || !QB,
          className: "SchematicUploadButton",
          onClick: () => {
            !pB && QB && jB(QB)
          },
          children: pB ? zB("worldBuilder:fileTooBig", {
            maxSizeKb: sB.id
          }) : zB("worldBuilder:upload")
        })]
      })
    }

    function GB(BB) {
      let {
        ownedSchematics: jB,
        onClose: zB,
        onChosenPreset: QB,
        onChosenFile: nB
      } = BB;
      const {
        t: dB
      } = (0, JB.D)();
      return (0, yB.jsxs)(yB.Fragment, {
        children: [(0, yB.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: dB("worldBuilder:loadSchematic")
        }), (0, yB.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: dB("worldBuilder:chooseOneOfYourSchematics")
        }), (0, yB.jsx)("div", {
          className: "SchematicPopupSchematicListContainer",
          children: (0, yB.jsx)(IB.c, {
            schematics: jB,
            onSchematicPicked: BB => {
              QB(BB.schematicId), zB()
            },
            loading: !1,
            disableAutoExport: !0
          })
        }), (0, yB.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: dB("worldBuilder:uploadNewSchematic")
        }), (0, yB.jsx)(kB, {
          onFilePicked: async BB => {
            try {
              await nB(BB)
            } catch (jB) {
              console.warn("Schematic upload failed", jB)
            } finally {
              zB()
            }
          }
        })]
      })
    }
    var LB = zB(5026),
      gB = zB(1710),
      tB = zB(4478),
      SB = zB(1263);

    function MB(BB) {
      var jB;
      let {
        ownedSchematics: zB,
        onClose: QB,
        onChosenEdit: nB,
        onChosenNew: dB,
        onChosenDownload: NB
      } = BB;
      const {
        t: uB
      } = (0, JB.D)(), [UB, pB] = (0, aB.useState)("choose"), [sB, mB] = (0, aB.useState)(null), [kB, GB] = (0, aB.useState)(null);
      return (0, yB.jsxs)(yB.Fragment, {
        children: [(0, yB.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: uB("worldBuilder:saveSchematic")
        }), "choose" === UB && (0, yB.jsxs)(yB.Fragment, {
          children: [(0, yB.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: uB("worldBuilder:overwriteOneOfYourSchematics")
          }), (0, yB.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, yB.jsx)(IB.c, {
              schematics: zB,
              onSchematicPicked: BB => {
                mB(BB.schematicId), GB("existing"), pB("save")
              },
              loading: !1,
              disableAutoExport: !1
            })
          }), (0, yB.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: uB("general:otherOptions")
          }), (0, yB.jsxs)("div", {
            className: "OtherOptions",
            children: [(0, yB.jsx)(rB.m, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                GB("new"), pB("save")
              },
              children: uB("worldBuilder:saveAsNewSchematic")
            }), (0, yB.jsx)(rB.f, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                GB("file"), pB("save")
              },
              children: uB("worldBuilder:downloadSchematic")
            })]
          })]
        }), "choose" !== UB && (0, yB.jsx)(EB, {
          type: kB,
          ownedSchematics: zB,
          onSubmit: (BB, jB, zB) => {
            "file" === kB ? NB(jB, BB) : "new" === kB ? dB(jB, zB, BB) : nB(sB, jB, zB, BB), QB()
          },
          onBack: () => {
            pB("choose")
          },
          prepopName: "existing" === kB ? null === (jB = zB.find((BB => BB.schematicId === sB))) || void 0 === jB ? void 0 : jB.name : null
        })]
      })
    }

    function EB(BB) {
      let {
        type: jB,
        prepopName: zB,
        ownedSchematics: QB,
        onSubmit: nB,
        onBack: dB
      } = BB;
      const {
        t: IB
      } = (0, JB.D)(), [NB, uB] = (0, aB.useState)(""), [pB, sB] = (0, aB.useState)(""), [mB, kB] = (0, aB.useState)(null), [GB, LB] = (0, aB.useState)(!0), MB = BB => {
        var zB;
        BB = null !== (zB = BB) && void 0 !== zB ? zB : NB;
        const nB = "new" === jB ? (0, SB.v)(BB) : null,
          dB = [...(0, SB.jb)(BB), ...nB ? [nB] : []];
        return dB.length > 0 ? (kB(dB.join(", ")), !1) : "new" === jB && QB.find((jB => jB.name === BB)) ? (kB(IB("worldBuilder:schematicAlreadyExists")), !1) : (kB(null), !0)
      };
      return (0, yB.jsxs)("div", {
        className: "SaveSchematicWindow",
        children: [(0, yB.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: IB("general:name")
        }), (0, yB.jsx)(gB.d, {
          className: UB()("SaveSchematicName", {
            Error: mB
          }),
          forcedText: zB,
          onValueChange: BB => {
            uB(BB), MB(BB)
          },
          placeholderText: IB("worldBuilder:schematicNamePlaceholder"),
          maxLength: SB.bb
        }), (0, yB.jsx)("h2", {
          className: UB()("SaveSchematicError", {
            Hidden: !mB
          }),
          children: mB
        }), (0, yB.jsx)("h2", {
          className: UB()("SchematicPopupSubtitle", {
            Hidden: "file" === jB
          }),
          children: IB("general:description")
        }), (0, yB.jsx)(gB.d, {
          className: UB()("SaveSchematicDescription", {
            Hidden: "file" === jB
          }),
          onValueChange: sB,
          placeholderText: IB("worldBuilder:schematicDescriptionPlaceholder"),
          maxLength: SB.ab,
          useTextarea: !0
        }), (0, yB.jsxs)("div", {
          className: UB()("SaveSchematicCheckboxContainer", {
            WarningBorder: "existing" === jB
          }),
          children: [(0, yB.jsx)(tB.e, {
            checked: GB,
            onChange: BB => {
              LB(BB.target.checked)
            },
            disabled: !1,
            className: "SaveSchematicCheckbox"
          }), (0, yB.jsx)("h1", {
            className: "SchematicPopupSubtitle",
            children: IB("existing" === jB ? "worldBuilder:overwriteLobbyCode" : "worldBuilder:includeLobbyCode")
          })]
        }), "existing" === jB && (0, yB.jsx)("div", {
          className: "SaveSchematicLobbyCodeWarning",
          children: IB("worldBuilder:lobbyCodeWarning")
        }), (0, yB.jsxs)("div", {
          className: "SaveSchematicButtons",
          children: [(0, yB.jsx)(rB.m, {
            className: "SaveSchematicButton",
            onClick: () => {
              MB() && nB(GB, NB, pB)
            },
            children: IB("file" === jB ? "general:download" : "general:save")
          }), (0, yB.jsx)(rB.G, {
            className: "SaveSchematicButton",
            onClick: dB,
            children: IB("general:cancel")
          })]
        })]
      })
    }
    var iB = zB(1244),
      qB = zB(1778),
      fB = zB(1173);

    function oB(BB, jB) {
      if ("devDownloadJson" !== BB) ! function(BB, jB) {
        const zB = iB.clientSideServerUrls.getHttpUrlFromWebSocketUrl((0, dB.d)().websocketUrl);
        let NB = !1;
        const uB = async (BB, jB) => {
          if (NB) return;
          NB = !0;
          const {
            gameNameWithVariation: QB,
            lobbyName: IB
          } = (0, dB.d)(), uB = {
            gameNameWithVariation: QB,
            lobbyName: IB
          };
          return await (0, fB.postJsonWithMetricsCookiesAndJsonResponse)(`${zB}/schematic/${BB}`, nB.z[BB].toBuffer({
            ...uB,
            ...jB
          }), {
            retries: 1
          })
        };
        if ("Plugin|WorldBuilder|SaveSchematic" === BB) ! function(BB) {
          let {
            ownedSchematics: jB,
            onChosenDownload: zB,
            onChosenEdit: QB,
            onChosenNew: nB,
            onClose: dB
          } = BB;
          pB.NotificationProvider.showCustomPopup({
            body: BB => (0, yB.jsx)(MB, {
              ownedSchematics: jB,
              onChosenDownload: zB,
              onChosenEdit: QB,
              onChosenNew: nB,
              onClose: BB
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: dB,
            unlockPointerKey: "schematicSaverPopup"
          })
        }({
          ownedSchematics: jB,
          onChosenDownload: (BB, jB) => {
            uB("download-schematic", {
              name: BB,
              includeLobbyCode: jB
            }).then((jB => {
              let {
                buffer: {
                  data: zB
                }
              } = jB;
              const nB = QB.oJ.from(zB);
              (0, qB.downloadBlob)(new Blob([nB], {
                type: "application/octet-stream"
              }), `${BB}.bloxdschem`)
            }))
          },
          onClose: () => {
            uB("cancel", {})
          },
          onChosenEdit: (BB, jB, zB, QB) => {
            uB("save-to-profile", {
              schematicId: BB,
              name: jB,
              description: zB,
              includeLobbyCode: QB
            })
          },
          onChosenNew: (BB, jB, zB) => {
            uB("save-to-profile", {
              schematicId: null,
              name: BB,
              description: jB,
              includeLobbyCode: zB
            })
          }
        });
        else if ("Plugin|WorldBuilder|LoadSchematic" === BB) ! function(BB) {
          let {
            ownedSchematics: jB,
            onChosenFile: zB,
            onChosenPreset: QB,
            onClose: nB
          } = BB;
          pB.NotificationProvider.showCustomPopup({
            body: BB => (0, yB.jsx)(GB, {
              ownedSchematics: jB,
              onChosenFile: zB,
              onChosenPreset: QB,
              onClose: BB
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: nB,
            unlockPointerKey: "schematicLoaderPopup"
          })
        }({
          ownedSchematics: jB,
          onChosenFile: async BB => {
            const jB = QB.oJ.from(await BB.arrayBuffer()),
              {
                gameNameWithVariation: IB,
                lobbyName: NB
              } = (0, dB.d)();
            await (0, fB.postBinaryWithMetricsCookiesAndCustomResponse)(`${zB}/schematic/upload-schematic`, nB.z["upload-schematic"].toBuffer({
              gameNameWithVariation: IB,
              lobbyName: NB,
              schematic: jB
            }), {
              retries: 1
            }, fB.HttpPayloadType.json)
          },
          onChosenPreset: BB => {
            uB("load-from-profile", {
              schematicId: BB
            })
          },
          onClose: () => {
            uB("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ListSchematics" === BB)(0, IB.e)({
          ownedSchematics: Array.isArray(jB) ? jB : jB.schematics,
          currentWorldSchematicId: Array.isArray(jB) ? null : jB.currentWorldSchematicId,
          onClose: () => {
            uB("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ExportWorld" === BB) {
          var UB;
          const BB = null !== (UB = jB.schematic) && void 0 !== UB ? UB : jB;
          (0, LB.k)({
            schematic: BB,
            inSourceWorld: BB.schematicId === jB.currentWorldSchematicId,
            onClose: () => {
              uB("cancel", {})
            }
          })
        } else console.error(`Unknown plugin message type ${BB}`)
      }(BB, jB);
      else {
        const BB = JSON.stringify(jB.data, null, 2);
        (0, qB.downloadBlob)(new Blob([BB], {
          type: "application/json"
        }), jB.filename)
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);