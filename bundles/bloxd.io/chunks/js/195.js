export const id = 195;
export const ids = [195];
export const modules = {
  35474: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => YJ,
      g: () => DJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(1247),
      eJ = ZJ(1086),
      XJ = ZJ(1232),
      AJ = ZJ(2969),
      qJ = ZJ(4340),
      jJ = ZJ(990);

    function YJ(JJ) {
      let {
        loading: cJ,
        schematics: ZJ,
        onSchematicPicked: FJ,
        selectedSchematicIdList: UJ = [],
        disableAutoExport: qJ
      } = JJ;
      const {
        t: YJ
      } = (0, eJ.F)();
      return (0, jJ.jsxs)("div", {
        className: "SchematicList",
        children: [cJ && (0, jJ.jsx)(XJ.c, {}), !cJ && 0 === ZJ.length && (0, jJ.jsx)("div", {
          className: "NoSchematicsText",
          children: YJ("worldBuilder:noSavedSchematic")
        }), !cJ && ZJ.map((JJ => (0, jJ.jsx)(AJ.f, {
          source: {
            type: "schematic",
            schematic: JJ
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            FJ(JJ)
          },
          isSelected: UJ.includes(JJ.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: JJ.isAutoExported && qJ,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, JJ.schematicId)))]
      })
    }

    function hJ(JJ) {
      let {
        ownedSchematics: cJ,
        currentWorldSchematicId: ZJ,
        onClose: UJ
      } = JJ;
      const {
        t: XJ
      } = (0, eJ.F)(), [AJ, hJ] = (0, FJ.useState)(null);
      return (0, jJ.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === AJ && (0, jJ.jsxs)(jJ.Fragment, {
          children: [(0, jJ.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: XJ("worldBuilder:schematicList")
          }), (0, jJ.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: XJ("worldBuilder:clickSchematicForOptions")
          }), (0, jJ.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, jJ.jsx)(YJ, {
              loading: !1,
              schematics: cJ,
              onSchematicPicked: JJ => {
                hJ(JJ)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== AJ && (0, jJ.jsx)(qJ.h, {
          schematic: AJ,
          inSourceWorld: AJ.schematicId === ZJ,
          onSchematicUpdate: JJ => {
            hJ(JJ)
          },
          onClose: () => {
            hJ(null), UJ()
          }
        })]
      })
    }

    function DJ(JJ) {
      let {
        ownedSchematics: cJ,
        currentWorldSchematicId: ZJ,
        onClose: FJ
      } = JJ;
      UJ.NotificationProvider.showCustomPopup({
        body: JJ => (0, jJ.jsx)(hJ, {
          ownedSchematics: cJ,
          currentWorldSchematicId: ZJ,
          onClose: JJ
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: FJ,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  40455: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      runClientGameMessage: () => MJ
    });
    var FJ = ZJ(3226),
      UJ = ZJ(3242),
      eJ = ZJ(1213),
      XJ = ZJ(35474),
      AJ = ZJ(4365),
      qJ = ZJ(926),
      jJ = ZJ.n(qJ),
      YJ = ZJ(47),
      hJ = ZJ(1247),
      DJ = ZJ(1329),
      sJ = ZJ(235),
      nJ = ZJ(1086),
      GJ = ZJ(942),
      fJ = ZJ(990);

    function xJ(JJ) {
      let {
        onFilePicked: cJ
      } = JJ;
      const {
        t: ZJ
      } = (0, nJ.F)(), [FJ, UJ] = (0, YJ.useState)(null), {
        getRootProps: eJ,
        getInputProps: XJ,
        isDragActive: qJ
      } = (0, AJ.c)({
        onDrop: JJ => {
          JJ.length > 0 && UJ(JJ[0])
        },
        useFsAccessApi: !1
      }), hJ = FJ && FJ.size > 1024 * sJ.Qc;
      return (0, fJ.jsxs)("div", {
        className: "SchematicUploadContainer",
        children: [(0, fJ.jsxs)("div", {
          ...eJ({
            className: jJ()("SchematicUpload", {
              ActiveDrag: qJ
            })
          }),
          children: [(0, fJ.jsx)("input", {
            ...XJ({
              accept: ".bloxdschem"
            })
          }), !qJ && FJ ? (0, fJ.jsxs)(fJ.Fragment, {
            children: [(0, fJ.jsx)("div", {
              className: jJ()("SchematicUploadIcon", "Active", {
                TooBig: hJ
              }),
              children: (0, fJ.jsx)(GJ.c, {
                name: "file-lines"
              })
            }), (0, fJ.jsx)("div", {
              className: "SchematicUploadInstructions Active",
              children: FJ.name
            })]
          }) : (0, fJ.jsxs)(fJ.Fragment, {
            children: [(0, fJ.jsx)("div", {
              className: "SchematicUploadIcon",
              children: (0, fJ.jsx)(GJ.c, {
                name: "up-from-bracket"
              })
            }), (0, fJ.jsx)("div", {
              className: "SchematicUploadInstructions",
              children: ZJ("worldBuilder:dragAFileHere")
            })]
          })]
        }), (0, fJ.jsx)(DJ.m, {
          disabled: hJ || !FJ,
          className: "SchematicUploadButton",
          onClick: () => {
            !hJ && FJ && cJ(FJ)
          },
          children: hJ ? ZJ("worldBuilder:fileTooBig", {
            maxSizeKb: sJ.Qc
          }) : ZJ("worldBuilder:upload")
        })]
      })
    }

    function rJ(JJ) {
      let {
        ownedSchematics: cJ,
        onClose: ZJ,
        onChosenPreset: FJ,
        onChosenFile: UJ
      } = JJ;
      const {
        t: eJ
      } = (0, nJ.F)();
      return (0, fJ.jsxs)(fJ.Fragment, {
        children: [(0, fJ.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: eJ("worldBuilder:loadSchematic")
        }), (0, fJ.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: eJ("worldBuilder:chooseOneOfYourSchematics")
        }), (0, fJ.jsx)("div", {
          className: "SchematicPopupSchematicListContainer",
          children: (0, fJ.jsx)(XJ.e, {
            schematics: cJ,
            onSchematicPicked: JJ => {
              FJ(JJ.schematicId), ZJ()
            },
            loading: !1,
            disableAutoExport: !0
          })
        }), (0, fJ.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: eJ("worldBuilder:uploadNewSchematic")
        }), (0, fJ.jsx)(xJ, {
          onFilePicked: async JJ => {
            try {
              await UJ(JJ)
            } catch (cJ) {
              console.warn("Schematic upload failed", cJ)
            } finally {
              ZJ()
            }
          }
        })]
      })
    }
    var vJ = ZJ(4340),
      mJ = ZJ(1566),
      QJ = ZJ(3826),
      EJ = ZJ(1122);

    function VJ(JJ) {
      var cJ;
      let {
        ownedSchematics: ZJ,
        onClose: FJ,
        onChosenEdit: UJ,
        onChosenNew: eJ,
        onChosenDownload: AJ
      } = JJ;
      const {
        t: qJ
      } = (0, nJ.F)(), [jJ, hJ] = (0, YJ.useState)("choose"), [sJ, GJ] = (0, YJ.useState)(null), [xJ, rJ] = (0, YJ.useState)(null);
      return (0, fJ.jsxs)(fJ.Fragment, {
        children: [(0, fJ.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: qJ("worldBuilder:saveSchematic")
        }), "choose" === jJ && (0, fJ.jsxs)(fJ.Fragment, {
          children: [(0, fJ.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: qJ("worldBuilder:overwriteOneOfYourSchematics")
          }), (0, fJ.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, fJ.jsx)(XJ.e, {
              schematics: ZJ,
              onSchematicPicked: JJ => {
                GJ(JJ.schematicId), rJ("existing"), hJ("save")
              },
              loading: !1,
              disableAutoExport: !1
            })
          }), (0, fJ.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: qJ("general:otherOptions")
          }), (0, fJ.jsxs)("div", {
            className: "OtherOptions",
            children: [(0, fJ.jsx)(DJ.m, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                rJ("new"), hJ("save")
              },
              children: qJ("worldBuilder:saveAsNewSchematic")
            }), (0, fJ.jsx)(DJ.d, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                rJ("file"), hJ("save")
              },
              children: qJ("worldBuilder:downloadSchematic")
            })]
          })]
        }), "choose" !== jJ && (0, fJ.jsx)(KJ, {
          type: xJ,
          ownedSchematics: ZJ,
          onSubmit: (JJ, cJ, ZJ) => {
            "file" === xJ ? AJ(cJ, JJ) : "new" === xJ ? eJ(cJ, ZJ, JJ) : UJ(sJ, cJ, ZJ, JJ), FJ()
          },
          onBack: () => {
            hJ("choose")
          },
          prepopName: "existing" === xJ ? null === (cJ = ZJ.find((JJ => JJ.schematicId === sJ))) || void 0 === cJ ? void 0 : cJ.name : null
        })]
      })
    }

    function KJ(JJ) {
      let {
        type: cJ,
        prepopName: ZJ,
        ownedSchematics: FJ,
        onSubmit: UJ,
        onBack: eJ
      } = JJ;
      const {
        t: XJ
      } = (0, nJ.F)(), [AJ, qJ] = (0, YJ.useState)(""), [hJ, sJ] = (0, YJ.useState)(""), [GJ, xJ] = (0, YJ.useState)(null), [rJ, vJ] = (0, YJ.useState)(!0), VJ = JJ => {
        var ZJ;
        JJ = null !== (ZJ = JJ) && void 0 !== ZJ ? ZJ : AJ;
        const UJ = "new" === cJ ? (0, EJ.z)(JJ) : null,
          eJ = [...(0, EJ.Bb)(JJ), ...UJ ? [UJ] : []];
        return eJ.length > 0 ? (xJ(eJ.join(", ")), !1) : "new" === cJ && FJ.find((cJ => cJ.name === JJ)) ? (xJ(XJ("worldBuilder:schematicAlreadyExists")), !1) : (xJ(null), !0)
      };
      return (0, fJ.jsxs)("div", {
        className: "SaveSchematicWindow",
        children: [(0, fJ.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: XJ("general:name")
        }), (0, fJ.jsx)(mJ.e, {
          className: jJ()("SaveSchematicName", {
            Error: GJ
          }),
          forcedText: ZJ,
          onValueChange: JJ => {
            qJ(JJ), VJ(JJ)
          },
          placeholderText: XJ("worldBuilder:schematicNamePlaceholder"),
          maxLength: EJ.qb
        }), (0, fJ.jsx)("h2", {
          className: jJ()("SaveSchematicError", {
            Hidden: !GJ
          }),
          children: GJ
        }), (0, fJ.jsx)("h2", {
          className: jJ()("SchematicPopupSubtitle", {
            Hidden: "file" === cJ
          }),
          children: XJ("general:description")
        }), (0, fJ.jsx)(mJ.e, {
          className: jJ()("SaveSchematicDescription", {
            Hidden: "file" === cJ
          }),
          onValueChange: sJ,
          placeholderText: XJ("worldBuilder:schematicDescriptionPlaceholder"),
          maxLength: EJ.nb,
          useTextarea: !0
        }), (0, fJ.jsxs)("div", {
          className: jJ()("SaveSchematicCheckboxContainer", {
            WarningBorder: "existing" === cJ
          }),
          children: [(0, fJ.jsx)(QJ.e, {
            checked: rJ,
            onChange: JJ => {
              vJ(JJ.target.checked)
            },
            disabled: !1,
            className: "SaveSchematicCheckbox"
          }), (0, fJ.jsx)("h1", {
            className: "SchematicPopupSubtitle",
            children: XJ("existing" === cJ ? "worldBuilder:overwriteLobbyCode" : "worldBuilder:includeLobbyCode")
          })]
        }), "existing" === cJ && (0, fJ.jsx)("div", {
          className: "SaveSchematicLobbyCodeWarning",
          children: XJ("worldBuilder:lobbyCodeWarning")
        }), (0, fJ.jsxs)("div", {
          className: "SaveSchematicButtons",
          children: [(0, fJ.jsx)(DJ.m, {
            className: "SaveSchematicButton",
            onClick: () => {
              VJ() && UJ(rJ, AJ, hJ)
            },
            children: XJ("file" === cJ ? "general:download" : "general:save")
          }), (0, fJ.jsx)(DJ.I, {
            className: "SaveSchematicButton",
            onClick: eJ,
            children: XJ("general:cancel")
          })]
        })]
      })
    }
    var yJ = ZJ(1098),
      SJ = ZJ(1599),
      IJ = ZJ(1028);

    function MJ(JJ, cJ) {
      if ("devDownloadJson" !== JJ) ! function(JJ, cJ) {
        const ZJ = yJ.clientSideServerUrls.getHttpUrlFromWebSocketUrl((0, eJ.e)().websocketUrl);
        let AJ = !1;
        const qJ = async (JJ, cJ) => {
          if (AJ) return;
          AJ = !0;
          const {
            gameNameWithVariation: FJ,
            lobbyName: XJ
          } = (0, eJ.e)(), qJ = {
            gameNameWithVariation: FJ,
            lobbyName: XJ
          };
          return await (0, IJ.postJsonWithMetricsCookiesAndJsonResponse)(`${ZJ}/schematic/${JJ}`, UJ.A[JJ].toBuffer({
            ...qJ,
            ...cJ
          }), {
            retries: 1
          })
        };
        if ("Plugin|WorldBuilder|SaveSchematic" === JJ) ! function(JJ) {
          let {
            ownedSchematics: cJ,
            onChosenDownload: ZJ,
            onChosenEdit: FJ,
            onChosenNew: UJ,
            onClose: eJ
          } = JJ;
          hJ.NotificationProvider.showCustomPopup({
            body: JJ => (0, fJ.jsx)(VJ, {
              ownedSchematics: cJ,
              onChosenDownload: ZJ,
              onChosenEdit: FJ,
              onChosenNew: UJ,
              onClose: JJ
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: eJ,
            unlockPointerKey: "schematicSaverPopup"
          })
        }({
          ownedSchematics: cJ,
          onChosenDownload: (JJ, cJ) => {
            qJ("download-schematic", {
              name: JJ,
              includeLobbyCode: cJ
            }).then((cJ => {
              let {
                buffer: {
                  data: ZJ
                }
              } = cJ;
              const UJ = FJ.fn.from(ZJ);
              (0, SJ.downloadBlob)(new Blob([UJ], {
                type: "application/octet-stream"
              }), `${JJ}.bloxdschem`)
            }))
          },
          onClose: () => {
            qJ("cancel", {})
          },
          onChosenEdit: (JJ, cJ, ZJ, FJ) => {
            qJ("save-to-profile", {
              schematicId: JJ,
              name: cJ,
              description: ZJ,
              includeLobbyCode: FJ
            })
          },
          onChosenNew: (JJ, cJ, ZJ) => {
            qJ("save-to-profile", {
              schematicId: null,
              name: JJ,
              description: cJ,
              includeLobbyCode: ZJ
            })
          }
        });
        else if ("Plugin|WorldBuilder|LoadSchematic" === JJ) ! function(JJ) {
          let {
            ownedSchematics: cJ,
            onChosenFile: ZJ,
            onChosenPreset: FJ,
            onClose: UJ
          } = JJ;
          hJ.NotificationProvider.showCustomPopup({
            body: JJ => (0, fJ.jsx)(rJ, {
              ownedSchematics: cJ,
              onChosenFile: ZJ,
              onChosenPreset: FJ,
              onClose: JJ
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: UJ,
            unlockPointerKey: "schematicLoaderPopup"
          })
        }({
          ownedSchematics: cJ,
          onChosenFile: async JJ => {
            const cJ = FJ.fn.from(await JJ.arrayBuffer()),
              {
                gameNameWithVariation: XJ,
                lobbyName: AJ
              } = (0, eJ.e)();
            await (0, IJ.postBinaryWithMetricsCookiesAndCustomResponse)(`${ZJ}/schematic/upload-schematic`, UJ.A["upload-schematic"].toBuffer({
              gameNameWithVariation: XJ,
              lobbyName: AJ,
              schematic: cJ
            }), {
              retries: 1
            }, IJ.HttpPayloadType.json)
          },
          onChosenPreset: JJ => {
            qJ("load-from-profile", {
              schematicId: JJ
            })
          },
          onClose: () => {
            qJ("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ListSchematics" === JJ)(0, XJ.g)({
          ownedSchematics: Array.isArray(cJ) ? cJ : cJ.schematics,
          currentWorldSchematicId: Array.isArray(cJ) ? null : cJ.currentWorldSchematicId,
          onClose: () => {
            qJ("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ExportWorld" === JJ) {
          var jJ;
          const JJ = null !== (jJ = cJ.schematic) && void 0 !== jJ ? jJ : cJ;
          (0, vJ.j)({
            schematic: JJ,
            inSourceWorld: JJ.schematicId === cJ.currentWorldSchematicId,
            onClose: () => {
              qJ("cancel", {})
            }
          })
        } else console.error(`Unknown plugin message type ${JJ}`)
      }(JJ, cJ);
      else {
        const JJ = JSON.stringify(cJ.data, null, 2);
        (0, SJ.downloadBlob)(new Blob([JJ], {
          type: "application/json"
        }), cJ.filename)
      }
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);