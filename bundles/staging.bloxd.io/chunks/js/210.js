export const id = 210;
export const ids = [210];
export const modules = {
  35769: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => SD,
      g: () => yD
    });
    var ID = cD(53),
      pD = cD(1340),
      iD = cD(1192),
      fD = cD(1328),
      bD = cD(3295),
      QD = cD(4704),
      wD = cD(1093);

    function SD(DD) {
      let {
        loading: CD,
        schematics: cD,
        onSchematicPicked: ID,
        selectedSchematicIdList: pD = [],
        disableAutoExport: QD
      } = DD;
      const {
        t: SD
      } = (0, iD.F)();
      return (0, wD.jsxs)("div", {
        className: "SchematicList",
        children: [CD && (0, wD.jsx)(fD.e, {}), !CD && 0 === cD.length && (0, wD.jsx)("div", {
          className: "NoSchematicsText",
          children: SD("worldBuilder:noSavedSchematic")
        }), !CD && cD.map((DD => (0, wD.jsx)(bD.f, {
          source: {
            type: "schematic",
            schematic: DD
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            ID(DD)
          },
          isSelected: pD.includes(DD.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: DD.isAutoExported && QD,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, DD.schematicId)))]
      })
    }

    function BD(DD) {
      let {
        ownedSchematics: CD,
        currentWorldSchematicId: cD,
        onClose: pD
      } = DD;
      const {
        t: fD
      } = (0, iD.F)(), [bD, BD] = (0, ID.useState)(null);
      return (0, wD.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === bD && (0, wD.jsxs)(wD.Fragment, {
          children: [(0, wD.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: fD("worldBuilder:schematicList")
          }), (0, wD.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: fD("worldBuilder:clickSchematicForOptions")
          }), (0, wD.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, wD.jsx)(SD, {
              loading: !1,
              schematics: CD,
              onSchematicPicked: DD => {
                BD(DD)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== bD && (0, wD.jsx)(QD.i, {
          schematic: bD,
          inSourceWorld: bD.schematicId === cD,
          onSchematicUpdate: DD => {
            BD(DD)
          },
          onClose: () => {
            BD(null), pD()
          }
        })]
      })
    }

    function yD(DD) {
      let {
        ownedSchematics: CD,
        currentWorldSchematicId: cD,
        onClose: ID
      } = DD;
      pD.NotificationProvider.showCustomPopup({
        body: DD => (0, wD.jsx)(BD, {
          ownedSchematics: CD,
          currentWorldSchematicId: cD,
          onClose: DD
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: ID,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  40838: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      runClientGameMessage: () => qD
    });
    var ID = cD(3563),
      pD = cD(3583),
      iD = cD(1317),
      fD = cD(35769),
      bD = cD(4734),
      QD = cD(1049),
      wD = cD.n(QD),
      SD = cD(53),
      BD = cD(1340),
      yD = cD(1442),
      MD = cD(326),
      tD = cD(1192),
      ZD = cD(1064),
      oD = cD(1093);

    function vD(DD) {
      let {
        onFilePicked: CD
      } = DD;
      const {
        t: cD
      } = (0, tD.F)(), [ID, pD] = (0, SD.useState)(null), {
        getRootProps: iD,
        getInputProps: fD,
        isDragActive: QD
      } = (0, bD.b)({
        onDrop: DD => {
          DD.length > 0 && pD(DD[0])
        },
        useFsAccessApi: !1
      }), BD = ID && ID.size > 1024 * MD.Yc;
      return (0, oD.jsxs)("div", {
        className: "SchematicUploadContainer",
        children: [(0, oD.jsxs)("div", {
          ...iD({
            className: wD()("SchematicUpload", {
              ActiveDrag: QD
            })
          }),
          children: [(0, oD.jsx)("input", {
            ...fD({
              accept: ".bloxdschem"
            })
          }), !QD && ID ? (0, oD.jsxs)(oD.Fragment, {
            children: [(0, oD.jsx)("div", {
              className: wD()("SchematicUploadIcon", "Active", {
                TooBig: BD
              }),
              children: (0, oD.jsx)(ZD.c, {
                name: "file-lines"
              })
            }), (0, oD.jsx)("div", {
              className: "SchematicUploadInstructions Active",
              children: ID.name
            })]
          }) : (0, oD.jsxs)(oD.Fragment, {
            children: [(0, oD.jsx)("div", {
              className: "SchematicUploadIcon",
              children: (0, oD.jsx)(ZD.c, {
                name: "up-from-bracket"
              })
            }), (0, oD.jsx)("div", {
              className: "SchematicUploadInstructions",
              children: cD("worldBuilder:dragAFileHere")
            })]
          })]
        }), (0, oD.jsx)(yD.o, {
          disabled: BD || !ID,
          className: "SchematicUploadButton",
          onClick: () => {
            !BD && ID && CD(ID)
          },
          children: BD ? cD("worldBuilder:fileTooBig", {
            maxSizeKb: MD.Yc
          }) : cD("worldBuilder:upload")
        })]
      })
    }

    function ND(DD) {
      let {
        ownedSchematics: CD,
        onClose: cD,
        onChosenPreset: ID,
        onChosenFile: pD
      } = DD;
      const {
        t: iD
      } = (0, tD.F)();
      return (0, oD.jsxs)(oD.Fragment, {
        children: [(0, oD.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: iD("worldBuilder:loadSchematic")
        }), (0, oD.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: iD("worldBuilder:chooseOneOfYourSchematics")
        }), (0, oD.jsx)("div", {
          className: "SchematicPopupSchematicListContainer",
          children: (0, oD.jsx)(fD.e, {
            schematics: CD,
            onSchematicPicked: DD => {
              ID(DD.schematicId), cD()
            },
            loading: !1,
            disableAutoExport: !0
          })
        }), (0, oD.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: iD("worldBuilder:uploadNewSchematic")
        }), (0, oD.jsx)(vD, {
          onFilePicked: async DD => {
            try {
              await pD(DD)
            } catch (CD) {
              console.warn("Schematic upload failed", CD)
            } finally {
              cD()
            }
          }
        })]
      })
    }
    var gD = cD(4704),
      XD = cD(1655),
      mD = cD(4182),
      nD = cD(1221);

    function OD(DD) {
      var CD;
      let {
        ownedSchematics: cD,
        onClose: ID,
        onChosenEdit: pD,
        onChosenNew: iD,
        onChosenDownload: bD
      } = DD;
      const {
        t: QD
      } = (0, tD.F)(), [wD, BD] = (0, SD.useState)("choose"), [MD, ZD] = (0, SD.useState)(null), [vD, ND] = (0, SD.useState)(null);
      return (0, oD.jsxs)(oD.Fragment, {
        children: [(0, oD.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: QD("worldBuilder:saveSchematic")
        }), "choose" === wD && (0, oD.jsxs)(oD.Fragment, {
          children: [(0, oD.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: QD("worldBuilder:overwriteOneOfYourSchematics")
          }), (0, oD.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, oD.jsx)(fD.e, {
              schematics: cD,
              onSchematicPicked: DD => {
                ZD(DD.schematicId), ND("existing"), BD("save")
              },
              loading: !1,
              disableAutoExport: !1
            })
          }), (0, oD.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: QD("general:otherOptions")
          }), (0, oD.jsxs)("div", {
            className: "OtherOptions",
            children: [(0, oD.jsx)(yD.o, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                ND("new"), BD("save")
              },
              children: QD("worldBuilder:saveAsNewSchematic")
            }), (0, oD.jsx)(yD.i, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                ND("file"), BD("save")
              },
              children: QD("worldBuilder:downloadSchematic")
            })]
          })]
        }), "choose" !== wD && (0, oD.jsx)(PD, {
          type: vD,
          ownedSchematics: cD,
          onSubmit: (DD, CD, cD) => {
            "file" === vD ? bD(CD, DD) : "new" === vD ? iD(CD, cD, DD) : pD(MD, CD, cD, DD), ID()
          },
          onBack: () => {
            BD("choose")
          },
          prepopName: "existing" === vD ? null === (CD = cD.find((DD => DD.schematicId === MD))) || void 0 === CD ? void 0 : CD.name : null
        })]
      })
    }

    function PD(DD) {
      let {
        type: CD,
        prepopName: cD,
        ownedSchematics: ID,
        onSubmit: pD,
        onBack: iD
      } = DD;
      const {
        t: fD
      } = (0, tD.F)(), [bD, QD] = (0, SD.useState)(""), [BD, MD] = (0, SD.useState)(""), [ZD, vD] = (0, SD.useState)(null), [ND, gD] = (0, SD.useState)(!0), OD = DD => {
        var cD;
        DD = null !== (cD = DD) && void 0 !== cD ? cD : bD;
        const pD = "new" === CD ? (0, nD.v)(DD) : null,
          iD = [...(0, nD.Ab)(DD), ...pD ? [pD] : []];
        return iD.length > 0 ? (vD(iD.join(", ")), !1) : "new" === CD && ID.find((CD => CD.name === DD)) ? (vD(fD("worldBuilder:schematicAlreadyExists")), !1) : (vD(null), !0)
      };
      return (0, oD.jsxs)("div", {
        className: "SaveSchematicWindow",
        children: [(0, oD.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: fD("general:name")
        }), (0, oD.jsx)(XD.b, {
          className: wD()("SaveSchematicName", {
            Error: ZD
          }),
          forcedText: cD,
          onValueChange: DD => {
            QD(DD), OD(DD)
          },
          placeholderText: fD("worldBuilder:schematicNamePlaceholder"),
          maxLength: nD.qb
        }), (0, oD.jsx)("h2", {
          className: wD()("SaveSchematicError", {
            Hidden: !ZD
          }),
          children: ZD
        }), (0, oD.jsx)("h2", {
          className: wD()("SchematicPopupSubtitle", {
            Hidden: "file" === CD
          }),
          children: fD("general:description")
        }), (0, oD.jsx)(XD.b, {
          className: wD()("SaveSchematicDescription", {
            Hidden: "file" === CD
          }),
          onValueChange: MD,
          placeholderText: fD("worldBuilder:schematicDescriptionPlaceholder"),
          maxLength: nD.nb,
          useTextarea: !0
        }), (0, oD.jsxs)("div", {
          className: wD()("SaveSchematicCheckboxContainer", {
            WarningBorder: "existing" === CD
          }),
          children: [(0, oD.jsx)(mD.e, {
            checked: ND,
            onChange: DD => {
              gD(DD.target.checked)
            },
            disabled: !1,
            className: "SaveSchematicCheckbox"
          }), (0, oD.jsx)("h1", {
            className: "SchematicPopupSubtitle",
            children: fD("existing" === CD ? "worldBuilder:overwriteLobbyCode" : "worldBuilder:includeLobbyCode")
          })]
        }), "existing" === CD && (0, oD.jsx)("div", {
          className: "SaveSchematicLobbyCodeWarning",
          children: fD("worldBuilder:lobbyCodeWarning")
        }), (0, oD.jsxs)("div", {
          className: "SaveSchematicButtons",
          children: [(0, oD.jsx)(yD.o, {
            className: "SaveSchematicButton",
            onClick: () => {
              OD() && pD(ND, bD, BD)
            },
            children: fD("file" === CD ? "general:download" : "general:save")
          }), (0, oD.jsx)(yD.J, {
            className: "SaveSchematicButton",
            onClick: iD,
            children: fD("general:cancel")
          })]
        })]
      })
    }
    var HD = cD(1199),
      UD = cD(1701),
      xD = cD(1127);

    function qD(DD, CD) {
      if ("devDownloadJson" !== DD) ! function(DD, CD) {
        const cD = HD.clientSideServerUrls.getHttpUrlFromWebSocketUrl((0, iD.b)().websocketUrl);
        let bD = !1;
        const QD = async (DD, CD) => {
          if (bD) return;
          bD = !0;
          const {
            gameNameWithVariation: ID,
            lobbyName: fD
          } = (0, iD.b)(), QD = {
            gameNameWithVariation: ID,
            lobbyName: fD
          };
          return await (0, xD.postJsonWithMetricsCookiesAndJsonResponse)(`${cD}/schematic/${DD}`, pD.G[DD].toBuffer({
            ...QD,
            ...CD
          }), {
            retries: 1
          })
        };
        if ("Plugin|WorldBuilder|SaveSchematic" === DD) ! function(DD) {
          let {
            ownedSchematics: CD,
            onChosenDownload: cD,
            onChosenEdit: ID,
            onChosenNew: pD,
            onClose: iD
          } = DD;
          BD.NotificationProvider.showCustomPopup({
            body: DD => (0, oD.jsx)(OD, {
              ownedSchematics: CD,
              onChosenDownload: cD,
              onChosenEdit: ID,
              onChosenNew: pD,
              onClose: DD
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: iD,
            unlockPointerKey: "schematicSaverPopup"
          })
        }({
          ownedSchematics: CD,
          onChosenDownload: (DD, CD) => {
            QD("download-schematic", {
              name: DD,
              includeLobbyCode: CD
            }).then((CD => {
              let {
                buffer: {
                  data: cD
                }
              } = CD;
              const pD = ID.lt.from(cD);
              (0, UD.downloadBlob)(new Blob([pD], {
                type: "application/octet-stream"
              }), `${DD}.bloxdschem`)
            }))
          },
          onClose: () => {
            QD("cancel", {})
          },
          onChosenEdit: (DD, CD, cD, ID) => {
            QD("save-to-profile", {
              schematicId: DD,
              name: CD,
              description: cD,
              includeLobbyCode: ID
            })
          },
          onChosenNew: (DD, CD, cD) => {
            QD("save-to-profile", {
              schematicId: null,
              name: DD,
              description: CD,
              includeLobbyCode: cD
            })
          }
        });
        else if ("Plugin|WorldBuilder|LoadSchematic" === DD) ! function(DD) {
          let {
            ownedSchematics: CD,
            onChosenFile: cD,
            onChosenPreset: ID,
            onClose: pD
          } = DD;
          BD.NotificationProvider.showCustomPopup({
            body: DD => (0, oD.jsx)(ND, {
              ownedSchematics: CD,
              onChosenFile: cD,
              onChosenPreset: ID,
              onClose: DD
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: pD,
            unlockPointerKey: "schematicLoaderPopup"
          })
        }({
          ownedSchematics: CD,
          onChosenFile: async DD => {
            const CD = ID.lt.from(await DD.arrayBuffer()),
              {
                gameNameWithVariation: fD,
                lobbyName: bD
              } = (0, iD.b)();
            await (0, xD.postBinaryWithMetricsCookiesAndCustomResponse)(`${cD}/schematic/upload-schematic`, pD.G["upload-schematic"].toBuffer({
              gameNameWithVariation: fD,
              lobbyName: bD,
              schematic: CD
            }), {
              retries: 1
            }, xD.HttpPayloadType.json)
          },
          onChosenPreset: DD => {
            QD("load-from-profile", {
              schematicId: DD
            })
          },
          onClose: () => {
            QD("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ListSchematics" === DD)(0, fD.g)({
          ownedSchematics: Array.isArray(CD) ? CD : CD.schematics,
          currentWorldSchematicId: Array.isArray(CD) ? null : CD.currentWorldSchematicId,
          onClose: () => {
            QD("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ExportWorld" === DD) {
          var wD;
          const DD = null !== (wD = CD.schematic) && void 0 !== wD ? wD : CD;
          (0, gD.l)({
            schematic: DD,
            inSourceWorld: DD.schematicId === CD.currentWorldSchematicId,
            onClose: () => {
              QD("cancel", {})
            }
          })
        } else console.error(`Unknown plugin message type ${DD}`)
      }(DD, CD);
      else {
        const DD = JSON.stringify(CD.data, null, 2);
        (0, UD.downloadBlob)(new Blob([DD], {
          type: "application/json"
        }), CD.filename)
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);