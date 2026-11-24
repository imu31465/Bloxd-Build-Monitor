export const id = 214;
export const ids = [214];
export const modules = {
  36330: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => RD,
      g: () => UD
    });
    var pD = wD(58),
      sD = wD(1355),
      KD = wD(1200),
      rD = wD(1346),
      LD = wD(3473),
      cD = wD(4948),
      gD = wD(1096);

    function RD(DD) {
      let {
        loading: zD,
        schematics: wD,
        onSchematicPicked: pD,
        selectedSchematicIdList: sD = [],
        disableAutoExport: cD
      } = DD;
      const {
        t: RD
      } = (0, KD.E)();
      return (0, gD.jsxs)("div", {
        className: "SchematicList",
        children: [zD && (0, gD.jsx)(rD.e, {}), !zD && 0 === wD.length && (0, gD.jsx)("div", {
          className: "NoSchematicsText",
          children: RD("worldBuilder:noSavedSchematic")
        }), !zD && wD.map((DD => (0, gD.jsx)(LD.g, {
          source: {
            type: "schematic",
            schematic: DD
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            pD(DD)
          },
          isSelected: sD.includes(DD.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: DD.isAutoExported && cD,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, DD.schematicId)))]
      })
    }

    function AD(DD) {
      let {
        ownedSchematics: zD,
        currentWorldSchematicId: wD,
        onClose: sD
      } = DD;
      const {
        t: rD
      } = (0, KD.E)(), [LD, AD] = (0, pD.useState)(null);
      return (0, gD.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === LD && (0, gD.jsxs)(gD.Fragment, {
          children: [(0, gD.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: rD("worldBuilder:schematicList")
          }), (0, gD.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: rD("worldBuilder:clickSchematicForOptions")
          }), (0, gD.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, gD.jsx)(RD, {
              loading: !1,
              schematics: zD,
              onSchematicPicked: DD => {
                AD(DD)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== LD && (0, gD.jsx)(cD.j, {
          schematic: LD,
          inSourceWorld: LD.schematicId === wD,
          onSchematicUpdate: DD => {
            AD(DD)
          },
          onClose: () => {
            AD(null), sD()
          }
        })]
      })
    }

    function UD(DD) {
      let {
        ownedSchematics: zD,
        currentWorldSchematicId: wD,
        onClose: pD
      } = DD;
      sD.NotificationProvider.showCustomPopup({
        body: DD => (0, gD.jsx)(AD, {
          ownedSchematics: zD,
          currentWorldSchematicId: wD,
          onClose: DD
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: pD,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  41641: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      runClientGameMessage: () => xD
    });
    var pD = wD(3750),
      sD = wD(3757),
      KD = wD(1332),
      rD = wD(36330),
      LD = wD(4974),
      cD = wD(1044),
      gD = wD.n(cD),
      RD = wD(58),
      AD = wD(1355),
      UD = wD(1447),
      fD = wD(351),
      ID = wD(1200),
      BD = wD(1057),
      GD = wD(1096);

    function hD(DD) {
      let {
        onFilePicked: zD
      } = DD;
      const {
        t: wD
      } = (0, ID.E)(), [pD, sD] = (0, RD.useState)(null), {
        getRootProps: KD,
        getInputProps: rD,
        isDragActive: cD
      } = (0, LD.c)({
        onDrop: DD => {
          DD.length > 0 && sD(DD[0])
        },
        useFsAccessApi: !1
      }), AD = pD && pD.size > 1024 * fD.dd;
      return (0, GD.jsxs)("div", {
        className: "SchematicUploadContainer",
        children: [(0, GD.jsxs)("div", {
          ...KD({
            className: gD()("SchematicUpload", {
              ActiveDrag: cD
            })
          }),
          children: [(0, GD.jsx)("input", {
            ...rD({
              accept: ".bloxdschem"
            })
          }), !cD && pD ? (0, GD.jsxs)(GD.Fragment, {
            children: [(0, GD.jsx)("div", {
              className: gD()("SchematicUploadIcon", "Active", {
                TooBig: AD
              }),
              children: (0, GD.jsx)(BD.e, {
                name: "file-lines"
              })
            }), (0, GD.jsx)("div", {
              className: "SchematicUploadInstructions Active",
              children: pD.name
            })]
          }) : (0, GD.jsxs)(GD.Fragment, {
            children: [(0, GD.jsx)("div", {
              className: "SchematicUploadIcon",
              children: (0, GD.jsx)(BD.e, {
                name: "up-from-bracket"
              })
            }), (0, GD.jsx)("div", {
              className: "SchematicUploadInstructions",
              children: wD("worldBuilder:dragAFileHere")
            })]
          })]
        }), (0, GD.jsx)(UD.o, {
          disabled: AD || !pD,
          className: "SchematicUploadButton",
          onClick: () => {
            !AD && pD && zD(pD)
          },
          children: AD ? wD("worldBuilder:fileTooBig", {
            maxSizeKb: fD.dd
          }) : wD("worldBuilder:upload")
        })]
      })
    }

    function nD(DD) {
      let {
        ownedSchematics: zD,
        onClose: wD,
        onChosenPreset: pD,
        onChosenFile: sD
      } = DD;
      const {
        t: KD
      } = (0, ID.E)();
      return (0, GD.jsxs)(GD.Fragment, {
        children: [(0, GD.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: KD("worldBuilder:loadSchematic")
        }), (0, GD.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: KD("worldBuilder:chooseOneOfYourSchematics")
        }), (0, GD.jsx)("div", {
          className: "SchematicPopupSchematicListContainer",
          children: (0, GD.jsx)(rD.c, {
            schematics: zD,
            onSchematicPicked: DD => {
              pD(DD.schematicId), wD()
            },
            loading: !1,
            disableAutoExport: !0
          })
        }), (0, GD.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: KD("worldBuilder:uploadNewSchematic")
        }), (0, GD.jsx)(hD, {
          onFilePicked: async DD => {
            try {
              await sD(DD)
            } catch (zD) {
              console.warn("Schematic upload failed", zD)
            } finally {
              wD()
            }
          }
        })]
      })
    }
    var MD = wD(4948),
      OD = wD(1687),
      JD = wD(4395),
      ED = wD(1232);

    function QD(DD) {
      var zD;
      let {
        ownedSchematics: wD,
        onClose: pD,
        onChosenEdit: sD,
        onChosenNew: KD,
        onChosenDownload: LD
      } = DD;
      const {
        t: cD
      } = (0, ID.E)(), [gD, AD] = (0, RD.useState)("choose"), [fD, BD] = (0, RD.useState)(null), [hD, nD] = (0, RD.useState)(null);
      return (0, GD.jsxs)(GD.Fragment, {
        children: [(0, GD.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: cD("worldBuilder:saveSchematic")
        }), "choose" === gD && (0, GD.jsxs)(GD.Fragment, {
          children: [(0, GD.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: cD("worldBuilder:overwriteOneOfYourSchematics")
          }), (0, GD.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, GD.jsx)(rD.c, {
              schematics: wD,
              onSchematicPicked: DD => {
                BD(DD.schematicId), nD("existing"), AD("save")
              },
              loading: !1,
              disableAutoExport: !1
            })
          }), (0, GD.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: cD("general:otherOptions")
          }), (0, GD.jsxs)("div", {
            className: "OtherOptions",
            children: [(0, GD.jsx)(UD.o, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                nD("new"), AD("save")
              },
              children: cD("worldBuilder:saveAsNewSchematic")
            }), (0, GD.jsx)(UD.f, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                nD("file"), AD("save")
              },
              children: cD("worldBuilder:downloadSchematic")
            })]
          })]
        }), "choose" !== gD && (0, GD.jsx)(XD, {
          type: hD,
          ownedSchematics: wD,
          onSubmit: (DD, zD, wD) => {
            "file" === hD ? LD(zD, DD) : "new" === hD ? KD(zD, wD, DD) : sD(fD, zD, wD, DD), pD()
          },
          onBack: () => {
            AD("choose")
          },
          prepopName: "existing" === hD ? null === (zD = wD.find((DD => DD.schematicId === fD))) || void 0 === zD ? void 0 : zD.name : null
        })]
      })
    }

    function XD(DD) {
      let {
        type: zD,
        prepopName: wD,
        ownedSchematics: pD,
        onSubmit: sD,
        onBack: KD
      } = DD;
      const {
        t: rD
      } = (0, ID.E)(), [LD, cD] = (0, RD.useState)(""), [AD, fD] = (0, RD.useState)(""), [BD, hD] = (0, RD.useState)(null), [nD, MD] = (0, RD.useState)(!0), QD = DD => {
        var wD;
        DD = null !== (wD = DD) && void 0 !== wD ? wD : LD;
        const sD = "new" === zD ? (0, ED.x)(DD) : null,
          KD = [...(0, ED.sb)(DD), ...sD ? [sD] : []];
        return KD.length > 0 ? (hD(KD.join(", ")), !1) : "new" === zD && pD.find((zD => zD.name === DD)) ? (hD(rD("worldBuilder:schematicAlreadyExists")), !1) : (hD(null), !0)
      };
      return (0, GD.jsxs)("div", {
        className: "SaveSchematicWindow",
        children: [(0, GD.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: rD("general:name")
        }), (0, GD.jsx)(OD.e, {
          className: gD()("SaveSchematicName", {
            Error: BD
          }),
          forcedText: wD,
          onValueChange: DD => {
            cD(DD), QD(DD)
          },
          placeholderText: rD("worldBuilder:schematicNamePlaceholder"),
          maxLength: ED.jb
        }), (0, GD.jsx)("h2", {
          className: gD()("SaveSchematicError", {
            Hidden: !BD
          }),
          children: BD
        }), (0, GD.jsx)("h2", {
          className: gD()("SchematicPopupSubtitle", {
            Hidden: "file" === zD
          }),
          children: rD("general:description")
        }), (0, GD.jsx)(OD.e, {
          className: gD()("SaveSchematicDescription", {
            Hidden: "file" === zD
          }),
          onValueChange: fD,
          placeholderText: rD("worldBuilder:schematicDescriptionPlaceholder"),
          maxLength: ED.ib,
          useTextarea: !0
        }), (0, GD.jsxs)("div", {
          className: gD()("SaveSchematicCheckboxContainer", {
            WarningBorder: "existing" === zD
          }),
          children: [(0, GD.jsx)(JD.d, {
            checked: nD,
            onChange: DD => {
              MD(DD.target.checked)
            },
            disabled: !1,
            className: "SaveSchematicCheckbox"
          }), (0, GD.jsx)("h1", {
            className: "SchematicPopupSubtitle",
            children: rD("existing" === zD ? "worldBuilder:overwriteLobbyCode" : "worldBuilder:includeLobbyCode")
          })]
        }), "existing" === zD && (0, GD.jsx)("div", {
          className: "SaveSchematicLobbyCodeWarning",
          children: rD("worldBuilder:lobbyCodeWarning")
        }), (0, GD.jsxs)("div", {
          className: "SaveSchematicButtons",
          children: [(0, GD.jsx)(UD.o, {
            className: "SaveSchematicButton",
            onClick: () => {
              QD() && sD(nD, LD, AD)
            },
            children: rD("file" === zD ? "general:download" : "general:save")
          }), (0, GD.jsx)(UD.R, {
            className: "SaveSchematicButton",
            onClick: KD,
            children: rD("general:cancel")
          })]
        })]
      })
    }
    var VD = wD(1211),
      PD = wD(1737),
      CD = wD(1130);

    function xD(DD, zD) {
      if ("devDownloadJson" !== DD) ! function(DD, zD) {
        const wD = VD.clientSideServerUrls.getHttpUrlFromWebSocketUrl((0, KD.c)().websocketUrl);
        let LD = !1;
        const cD = async (DD, zD) => {
          if (LD) return;
          LD = !0;
          const {
            gameNameWithVariation: pD,
            lobbyName: rD
          } = (0, KD.c)(), cD = {
            gameNameWithVariation: pD,
            lobbyName: rD
          };
          return await (0, CD.postJsonWithMetricsCookiesAndJsonResponse)(`${wD}/schematic/${DD}`, sD.H[DD].toBuffer({
            ...cD,
            ...zD
          }), {
            retries: 1
          })
        };
        if ("Plugin|WorldBuilder|SaveSchematic" === DD) ! function(DD) {
          let {
            ownedSchematics: zD,
            onChosenDownload: wD,
            onChosenEdit: pD,
            onChosenNew: sD,
            onClose: KD
          } = DD;
          AD.NotificationProvider.showCustomPopup({
            body: DD => (0, GD.jsx)(QD, {
              ownedSchematics: zD,
              onChosenDownload: wD,
              onChosenEdit: pD,
              onChosenNew: sD,
              onClose: DD
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: KD,
            unlockPointerKey: "schematicSaverPopup"
          })
        }({
          ownedSchematics: zD,
          onChosenDownload: (DD, zD) => {
            cD("download-schematic", {
              name: DD,
              includeLobbyCode: zD
            }).then((zD => {
              let {
                buffer: {
                  data: wD
                }
              } = zD;
              const sD = pD.nI.from(wD);
              (0, PD.downloadBlob)(new Blob([sD], {
                type: "application/octet-stream"
              }), `${DD}.bloxdschem`)
            }))
          },
          onClose: () => {
            cD("cancel", {})
          },
          onChosenEdit: (DD, zD, wD, pD) => {
            cD("save-to-profile", {
              schematicId: DD,
              name: zD,
              description: wD,
              includeLobbyCode: pD
            })
          },
          onChosenNew: (DD, zD, wD) => {
            cD("save-to-profile", {
              schematicId: null,
              name: DD,
              description: zD,
              includeLobbyCode: wD
            })
          }
        });
        else if ("Plugin|WorldBuilder|LoadSchematic" === DD) ! function(DD) {
          let {
            ownedSchematics: zD,
            onChosenFile: wD,
            onChosenPreset: pD,
            onClose: sD
          } = DD;
          AD.NotificationProvider.showCustomPopup({
            body: DD => (0, GD.jsx)(nD, {
              ownedSchematics: zD,
              onChosenFile: wD,
              onChosenPreset: pD,
              onClose: DD
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: sD,
            unlockPointerKey: "schematicLoaderPopup"
          })
        }({
          ownedSchematics: zD,
          onChosenFile: async DD => {
            const zD = pD.nI.from(await DD.arrayBuffer()),
              {
                gameNameWithVariation: rD,
                lobbyName: LD
              } = (0, KD.c)();
            await (0, CD.postBinaryWithMetricsCookiesAndCustomResponse)(`${wD}/schematic/upload-schematic`, sD.H["upload-schematic"].toBuffer({
              gameNameWithVariation: rD,
              lobbyName: LD,
              schematic: zD
            }), {
              retries: 1
            }, CD.HttpPayloadType.json)
          },
          onChosenPreset: DD => {
            cD("load-from-profile", {
              schematicId: DD
            })
          },
          onClose: () => {
            cD("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ListSchematics" === DD)(0, rD.g)({
          ownedSchematics: Array.isArray(zD) ? zD : zD.schematics,
          currentWorldSchematicId: Array.isArray(zD) ? null : zD.currentWorldSchematicId,
          onClose: () => {
            cD("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ExportWorld" === DD) {
          var gD;
          const DD = null !== (gD = zD.schematic) && void 0 !== gD ? gD : zD;
          (0, MD.m)({
            schematic: DD,
            inSourceWorld: DD.schematicId === zD.currentWorldSchematicId,
            onClose: () => {
              cD("cancel", {})
            }
          })
        } else console.error(`Unknown plugin message type ${DD}`)
      }(DD, zD);
      else {
        const DD = JSON.stringify(zD.data, null, 2);
        (0, PD.downloadBlob)(new Blob([DD], {
          type: "application/json"
        }), zD.filename)
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);