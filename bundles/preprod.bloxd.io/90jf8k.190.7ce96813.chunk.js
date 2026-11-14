export const id = 190;
export const ids = [190];
export const modules = {
  34940: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => RF,
      f: () => eF
    });
    var CF = SF(46),
      AF = SF(1189),
      uF = SF(1046),
      hF = SF(1186),
      bW = SF(2649),
      dF = SF(3924),
      PF = SF(971);

    function RF(FF) {
      let {
        loading: WF,
        schematics: SF,
        onSchematicPicked: CF,
        selectedSchematicIdList: AF = [],
        disableAutoExport: dF
      } = FF;
      const {
        t: RF
      } = (0, uF.B)();
      return (0, PF.jsxs)("div", {
        className: "SchematicList",
        children: [WF && (0, PF.jsx)(hF.c, {}), !WF && 0 === SF.length && (0, PF.jsx)("div", {
          className: "NoSchematicsText",
          children: RF("worldBuilder:noSavedSchematic")
        }), !WF && SF.map((FF => (0, PF.jsx)(bW.f, {
          source: {
            type: "schematic",
            schematic: FF
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            CF(FF)
          },
          isSelected: AF.includes(FF.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: FF.isAutoExported && dF,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, FF.schematicId)))]
      })
    }

    function iW(FF) {
      let {
        ownedSchematics: WF,
        currentWorldSchematicId: SF,
        onClose: AF
      } = FF;
      const {
        t: hF
      } = (0, uF.B)(), [bW, iW] = (0, CF.useState)(null);
      return (0, PF.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === bW && (0, PF.jsxs)(PF.Fragment, {
          children: [(0, PF.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: hF("worldBuilder:schematicList")
          }), (0, PF.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: hF("worldBuilder:clickSchematicForOptions")
          }), (0, PF.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, PF.jsx)(RF, {
              loading: !1,
              schematics: WF,
              onSchematicPicked: FF => {
                iW(FF)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== bW && (0, PF.jsx)(dF.g, {
          schematic: bW,
          inSourceWorld: bW.schematicId === SF,
          onSchematicUpdate: FF => {
            iW(FF)
          },
          onClose: () => {
            iW(null), AF()
          }
        })]
      })
    }

    function eF(FF) {
      let {
        ownedSchematics: WF,
        currentWorldSchematicId: SF,
        onClose: CF
      } = FF;
      AF.NotificationProvider.showCustomPopup({
        body: FF => (0, PF.jsx)(iW, {
          ownedSchematics: WF,
          currentWorldSchematicId: SF,
          onClose: FF
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: CF,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  39602: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      runClientGameMessage: () => xW
    });
    var CF = SF(2978),
      AF = SF(2940),
      uF = SF(1175),
      hF = SF(34940),
      bW = SF(3957),
      dF = SF(918),
      PF = SF.n(dF),
      RF = SF(46),
      iW = SF(1189),
      eF = SF(1266),
      EF = SF(271),
      QF = SF(1046),
      rW = SF(929),
      gW = SF(971);

    function tW(FF) {
      let {
        onFilePicked: WF
      } = FF;
      const {
        t: SF
      } = (0, QF.B)(), [CF, AF] = (0, RF.useState)(null), {
        getRootProps: uF,
        getInputProps: hF,
        isDragActive: dF
      } = (0, bW.c)({
        onDrop: FF => {
          FF.length > 0 && AF(FF[0])
        },
        useFsAccessApi: !1
      }), iW = CF && CF.size > 1024 * EF.ad;
      return (0, gW.jsxs)("div", {
        className: "SchematicUploadContainer",
        children: [(0, gW.jsxs)("div", {
          ...uF({
            className: PF()("SchematicUpload", {
              ActiveDrag: dF
            })
          }),
          children: [(0, gW.jsx)("input", {
            ...hF({
              accept: ".bloxdschem"
            })
          }), !dF && CF ? (0, gW.jsxs)(gW.Fragment, {
            children: [(0, gW.jsx)("div", {
              className: PF()("SchematicUploadIcon", "Active", {
                TooBig: iW
              }),
              children: (0, gW.jsx)(rW.e, {
                name: "file-lines"
              })
            }), (0, gW.jsx)("div", {
              className: "SchematicUploadInstructions Active",
              children: CF.name
            })]
          }) : (0, gW.jsxs)(gW.Fragment, {
            children: [(0, gW.jsx)("div", {
              className: "SchematicUploadIcon",
              children: (0, gW.jsx)(rW.e, {
                name: "up-from-bracket"
              })
            }), (0, gW.jsx)("div", {
              className: "SchematicUploadInstructions",
              children: SF("worldBuilder:dragAFileHere")
            })]
          })]
        }), (0, gW.jsx)(eF.k, {
          disabled: iW || !CF,
          className: "SchematicUploadButton",
          onClick: () => {
            !iW && CF && WF(CF)
          },
          children: iW ? SF("worldBuilder:fileTooBig", {
            maxSizeKb: EF.ad
          }) : SF("worldBuilder:upload")
        })]
      })
    }

    function TF(FF) {
      let {
        ownedSchematics: WF,
        onClose: SF,
        onChosenPreset: CF,
        onChosenFile: AF
      } = FF;
      const {
        t: uF
      } = (0, QF.B)();
      return (0, gW.jsxs)(gW.Fragment, {
        children: [(0, gW.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: uF("worldBuilder:loadSchematic")
        }), (0, gW.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: uF("worldBuilder:chooseOneOfYourSchematics")
        }), (0, gW.jsx)("div", {
          className: "SchematicPopupSchematicListContainer",
          children: (0, gW.jsx)(hF.b, {
            schematics: WF,
            onSchematicPicked: FF => {
              CF(FF.schematicId), SF()
            },
            loading: !1,
            disableAutoExport: !0
          })
        }), (0, gW.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: uF("worldBuilder:uploadNewSchematic")
        }), (0, gW.jsx)(tW, {
          onFilePicked: async FF => {
            try {
              await AF(FF)
            } catch (WF) {
              console.warn("Schematic upload failed", WF)
            } finally {
              SF()
            }
          }
        })]
      })
    }
    var aW = SF(3924),
      kW = SF(1504),
      qW = SF(3517),
      VF = SF(1085);

    function NF(FF) {
      var WF;
      let {
        ownedSchematics: SF,
        onClose: CF,
        onChosenEdit: AF,
        onChosenNew: uF,
        onChosenDownload: bW
      } = FF;
      const {
        t: dF
      } = (0, QF.B)(), [PF, iW] = (0, RF.useState)("choose"), [EF, rW] = (0, RF.useState)(null), [tW, TF] = (0, RF.useState)(null);
      return (0, gW.jsxs)(gW.Fragment, {
        children: [(0, gW.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: dF("worldBuilder:saveSchematic")
        }), "choose" === PF && (0, gW.jsxs)(gW.Fragment, {
          children: [(0, gW.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: dF("worldBuilder:overwriteOneOfYourSchematics")
          }), (0, gW.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, gW.jsx)(hF.b, {
              schematics: SF,
              onSchematicPicked: FF => {
                rW(FF.schematicId), TF("existing"), iW("save")
              },
              loading: !1,
              disableAutoExport: !1
            })
          }), (0, gW.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: dF("general:otherOptions")
          }), (0, gW.jsxs)("div", {
            className: "OtherOptions",
            children: [(0, gW.jsx)(eF.k, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                TF("new"), iW("save")
              },
              children: dF("worldBuilder:saveAsNewSchematic")
            }), (0, gW.jsx)(eF.e, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                TF("file"), iW("save")
              },
              children: dF("worldBuilder:downloadSchematic")
            })]
          })]
        }), "choose" !== PF && (0, gW.jsx)(DF, {
          type: tW,
          ownedSchematics: SF,
          onSubmit: (FF, WF, SF) => {
            "file" === tW ? bW(WF, FF) : "new" === tW ? uF(WF, SF, FF) : AF(EF, WF, SF, FF), CF()
          },
          onBack: () => {
            iW("choose")
          },
          prepopName: "existing" === tW ? null === (WF = SF.find((FF => FF.schematicId === EF))) || void 0 === WF ? void 0 : WF.name : null
        })]
      })
    }

    function DF(FF) {
      let {
        type: WF,
        prepopName: SF,
        ownedSchematics: CF,
        onSubmit: AF,
        onBack: uF
      } = FF;
      const {
        t: hF
      } = (0, QF.B)(), [bW, dF] = (0, RF.useState)(""), [iW, EF] = (0, RF.useState)(""), [rW, tW] = (0, RF.useState)(null), [TF, aW] = (0, RF.useState)(!0), NF = FF => {
        var SF;
        FF = null !== (SF = FF) && void 0 !== SF ? SF : bW;
        const AF = "new" === WF ? (0, VF.v)(FF) : null,
          uF = [...(0, VF.Cb)(FF), ...AF ? [AF] : []];
        return uF.length > 0 ? (tW(uF.join(", ")), !1) : "new" === WF && CF.find((WF => WF.name === FF)) ? (tW(hF("worldBuilder:schematicAlreadyExists")), !1) : (tW(null), !0)
      };
      return (0, gW.jsxs)("div", {
        className: "SaveSchematicWindow",
        children: [(0, gW.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: hF("general:name")
        }), (0, gW.jsx)(kW.d, {
          className: PF()("SaveSchematicName", {
            Error: rW
          }),
          forcedText: SF,
          onValueChange: FF => {
            dF(FF), NF(FF)
          },
          placeholderText: hF("worldBuilder:schematicNamePlaceholder"),
          maxLength: VF.vb
        }), (0, gW.jsx)("h2", {
          className: PF()("SaveSchematicError", {
            Hidden: !rW
          }),
          children: rW
        }), (0, gW.jsx)("h2", {
          className: PF()("SchematicPopupSubtitle", {
            Hidden: "file" === WF
          }),
          children: hF("general:description")
        }), (0, gW.jsx)(kW.d, {
          className: PF()("SaveSchematicDescription", {
            Hidden: "file" === WF
          }),
          onValueChange: EF,
          placeholderText: hF("worldBuilder:schematicDescriptionPlaceholder"),
          maxLength: VF.sb,
          useTextarea: !0
        }), (0, gW.jsxs)("div", {
          className: PF()("SaveSchematicCheckboxContainer", {
            WarningBorder: "existing" === WF
          }),
          children: [(0, gW.jsx)(qW.b, {
            checked: TF,
            onChange: FF => {
              aW(FF.target.checked)
            },
            disabled: !1,
            className: "SaveSchematicCheckbox"
          }), (0, gW.jsx)("h1", {
            className: "SchematicPopupSubtitle",
            children: hF("existing" === WF ? "worldBuilder:overwriteLobbyCode" : "worldBuilder:includeLobbyCode")
          })]
        }), "existing" === WF && (0, gW.jsx)("div", {
          className: "SaveSchematicLobbyCodeWarning",
          children: hF("worldBuilder:lobbyCodeWarning")
        }), (0, gW.jsxs)("div", {
          className: "SaveSchematicButtons",
          children: [(0, gW.jsx)(eF.k, {
            className: "SaveSchematicButton",
            onClick: () => {
              NF() && AF(TF, bW, iW)
            },
            children: hF("file" === WF ? "general:download" : "general:save")
          }), (0, gW.jsx)(eF.E, {
            className: "SaveSchematicButton",
            onClick: uF,
            children: hF("general:cancel")
          })]
        })]
      })
    }
    var LF = SF(1056),
      mW = SF(1510),
      OF = SF(1001);

    function xW(FF, WF) {
      if ("devDownloadJson" !== FF) ! function(FF, WF) {
        const SF = LF.clientSideServerUrls.getHttpUrlFromWebSocketUrl((0, uF.e)().websocketUrl);
        let bW = !1;
        const dF = async (FF, WF) => {
          if (bW) return;
          bW = !0;
          const {
            gameNameWithVariation: CF,
            lobbyName: hF
          } = (0, uF.e)(), dF = {
            gameNameWithVariation: CF,
            lobbyName: hF
          };
          return await (0, OF.postJsonWithMetricsCookiesAndJsonResponse)(`${SF}/schematic/${FF}`, AF.p[FF].toBuffer({
            ...dF,
            ...WF
          }), {
            retries: 1
          })
        };
        if ("Plugin|WorldBuilder|SaveSchematic" === FF) ! function(FF) {
          let {
            ownedSchematics: WF,
            onChosenDownload: SF,
            onChosenEdit: CF,
            onChosenNew: AF,
            onClose: uF
          } = FF;
          iW.NotificationProvider.showCustomPopup({
            body: FF => (0, gW.jsx)(NF, {
              ownedSchematics: WF,
              onChosenDownload: SF,
              onChosenEdit: CF,
              onChosenNew: AF,
              onClose: FF
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: uF,
            unlockPointerKey: "schematicSaverPopup"
          })
        }({
          ownedSchematics: WF,
          onChosenDownload: (FF, WF) => {
            dF("download-schematic", {
              name: FF,
              includeLobbyCode: WF
            }).then((WF => {
              let {
                buffer: {
                  data: SF
                }
              } = WF;
              const AF = CF.NC.from(SF);
              (0, mW.downloadBlob)(new Blob([AF], {
                type: "application/octet-stream"
              }), `${FF}.bloxdschem`)
            }))
          },
          onClose: () => {
            dF("cancel", {})
          },
          onChosenEdit: (FF, WF, SF, CF) => {
            dF("save-to-profile", {
              schematicId: FF,
              name: WF,
              description: SF,
              includeLobbyCode: CF
            })
          },
          onChosenNew: (FF, WF, SF) => {
            dF("save-to-profile", {
              schematicId: null,
              name: FF,
              description: WF,
              includeLobbyCode: SF
            })
          }
        });
        else if ("Plugin|WorldBuilder|LoadSchematic" === FF) ! function(FF) {
          let {
            ownedSchematics: WF,
            onChosenFile: SF,
            onChosenPreset: CF,
            onClose: AF
          } = FF;
          iW.NotificationProvider.showCustomPopup({
            body: FF => (0, gW.jsx)(TF, {
              ownedSchematics: WF,
              onChosenFile: SF,
              onChosenPreset: CF,
              onClose: FF
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: AF,
            unlockPointerKey: "schematicLoaderPopup"
          })
        }({
          ownedSchematics: WF,
          onChosenFile: async FF => {
            const WF = CF.NC.from(await FF.arrayBuffer()),
              {
                gameNameWithVariation: hF,
                lobbyName: bW
              } = (0, uF.e)();
            await (0, OF.postBinaryWithMetricsCookiesAndCustomResponse)(`${SF}/schematic/upload-schematic`, AF.p["upload-schematic"].toBuffer({
              gameNameWithVariation: hF,
              lobbyName: bW,
              schematic: WF
            }), {
              retries: 1
            }, OF.HttpPayloadType.json)
          },
          onChosenPreset: FF => {
            dF("load-from-profile", {
              schematicId: FF
            })
          },
          onClose: () => {
            dF("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ListSchematics" === FF)(0, hF.f)({
          ownedSchematics: Array.isArray(WF) ? WF : WF.schematics,
          currentWorldSchematicId: Array.isArray(WF) ? null : WF.currentWorldSchematicId,
          onClose: () => {
            dF("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ExportWorld" === FF) {
          var PF;
          const FF = null !== (PF = WF.schematic) && void 0 !== PF ? PF : WF;
          (0, aW.h)({
            schematic: FF,
            inSourceWorld: FF.schematicId === WF.currentWorldSchematicId,
            onClose: () => {
              dF("cancel", {})
            }
          })
        } else console.error(`Unknown plugin message type ${FF}`)
      }(FF, WF);
      else {
        const FF = JSON.stringify(WF.data, null, 2);
        (0, mW.downloadBlob)(new Blob([FF], {
          type: "application/json"
        }), WF.filename)
      }
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);