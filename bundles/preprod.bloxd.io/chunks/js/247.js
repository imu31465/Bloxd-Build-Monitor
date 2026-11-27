export const id = 247;
export const ids = [247];
export const modules = {
  37486: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => tW,
      g: () => xW
    });
    var mW = OW(62),
      EW = OW(1422),
      NW = OW(1172),
      PW = OW(1383),
      LW = OW(4718),
      cW = OW(5686),
      wW = OW(1283);

    function tW(WW) {
      let {
        loading: iW,
        schematics: OW,
        onSchematicPicked: mW,
        selectedSchematicIdList: EW = [],
        disableAutoExport: cW
      } = WW;
      const {
        t: tW
      } = (0, NW.B)();
      return (0, wW.jsxs)("div", {
        className: "SchematicList",
        children: [iW && (0, wW.jsx)(PW.d, {}), !iW && 0 === OW.length && (0, wW.jsx)("div", {
          className: "NoSchematicsText",
          children: tW("worldBuilder:noSavedSchematic")
        }), !iW && OW.map((WW => (0, wW.jsx)(LW.d, {
          source: {
            type: "schematic",
            schematic: WW
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            mW(WW)
          },
          isSelected: EW.includes(WW.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: WW.isAutoExported && cW,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, WW.schematicId)))]
      })
    }

    function ZW(WW) {
      let {
        ownedSchematics: iW,
        currentWorldSchematicId: OW,
        onClose: EW
      } = WW;
      const {
        t: PW
      } = (0, NW.B)(), [LW, ZW] = (0, mW.useState)(null);
      return (0, wW.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === LW && (0, wW.jsxs)(wW.Fragment, {
          children: [(0, wW.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: PW("worldBuilder:schematicList")
          }), (0, wW.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: PW("worldBuilder:clickSchematicForOptions")
          }), (0, wW.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, wW.jsx)(tW, {
              loading: !1,
              schematics: iW,
              onSchematicPicked: WW => {
                ZW(WW)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== LW && (0, wW.jsx)(cW.h, {
          schematic: LW,
          inSourceWorld: LW.schematicId === OW,
          onSchematicUpdate: WW => {
            ZW(WW)
          },
          onClose: () => {
            ZW(null), EW()
          }
        })]
      })
    }

    function xW(WW) {
      let {
        ownedSchematics: iW,
        currentWorldSchematicId: OW,
        onClose: mW
      } = WW;
      EW.NotificationProvider.showCustomPopup({
        body: WW => (0, wW.jsx)(ZW, {
          ownedSchematics: iW,
          currentWorldSchematicId: OW,
          onClose: WW
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: mW,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  53909: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      runClientGameMessage: () => HW
    });
    var mW = OW(2437),
      EW = OW(2478),
      NW = OW(1351),
      PW = OW(37486),
      LW = OW(5864),
      cW = OW(1089),
      wW = OW.n(cW),
      tW = OW(62),
      ZW = OW(1422),
      xW = OW(1532),
      lW = OW(344),
      AW = OW(1172),
      bW = OW(1391),
      jW = OW(1283);

    function UW(WW) {
      let {
        onFilePicked: iW
      } = WW;
      const {
        t: OW
      } = (0, AW.B)(), [mW, EW] = (0, tW.useState)(null), {
        getRootProps: NW,
        getInputProps: PW,
        isDragActive: cW
      } = (0, LW.e)({
        onDrop: WW => {
          WW.length > 0 && EW(WW[0])
        },
        useFsAccessApi: !1
      }), ZW = mW && mW.size > 1024 * lW.Vc;
      return (0, jW.jsxs)("div", {
        className: "SchematicUploadContainer",
        children: [(0, jW.jsxs)("div", {
          ...NW({
            className: wW()("SchematicUpload", {
              ActiveDrag: cW
            })
          }),
          children: [(0, jW.jsx)("input", {
            ...PW({
              accept: ".bloxdschem"
            })
          }), !cW && mW ? (0, jW.jsxs)(jW.Fragment, {
            children: [(0, jW.jsx)("div", {
              className: wW()("SchematicUploadIcon", "Active", {
                TooBig: ZW
              }),
              children: (0, jW.jsx)(bW.c, {
                name: "file-lines"
              })
            }), (0, jW.jsx)("div", {
              className: "SchematicUploadInstructions Active",
              children: mW.name
            })]
          }) : (0, jW.jsxs)(jW.Fragment, {
            children: [(0, jW.jsx)("div", {
              className: "SchematicUploadIcon",
              children: (0, jW.jsx)(bW.c, {
                name: "up-from-bracket"
              })
            }), (0, jW.jsx)("div", {
              className: "SchematicUploadInstructions",
              children: OW("worldBuilder:dragAFileHere")
            })]
          })]
        }), (0, jW.jsx)(xW.n, {
          disabled: ZW || !mW,
          className: "SchematicUploadButton",
          onClick: () => {
            !ZW && mW && iW(mW)
          },
          children: ZW ? OW("worldBuilder:fileTooBig", {
            maxSizeKb: lW.Vc
          }) : OW("worldBuilder:upload")
        })]
      })
    }

    function kW(WW) {
      let {
        ownedSchematics: iW,
        onClose: OW,
        onChosenPreset: mW,
        onChosenFile: EW
      } = WW;
      const {
        t: NW
      } = (0, AW.B)();
      return (0, jW.jsxs)(jW.Fragment, {
        children: [(0, jW.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: NW("worldBuilder:loadSchematic")
        }), (0, jW.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: NW("worldBuilder:chooseOneOfYourSchematics")
        }), (0, jW.jsx)("div", {
          className: "SchematicPopupSchematicListContainer",
          children: (0, jW.jsx)(PW.d, {
            schematics: iW,
            onSchematicPicked: WW => {
              mW(WW.schematicId), OW()
            },
            loading: !1,
            disableAutoExport: !0
          })
        }), (0, jW.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: NW("worldBuilder:uploadNewSchematic")
        }), (0, jW.jsx)(UW, {
          onFilePicked: async WW => {
            try {
              await EW(WW)
            } catch (iW) {
              console.warn("Schematic upload failed", iW)
            } finally {
              OW()
            }
          }
        })]
      })
    }
    var sW = OW(5686),
      MW = OW(1782),
      KW = OW(5041),
      SW = OW(1217);

    function YW(WW) {
      var iW;
      let {
        ownedSchematics: OW,
        onClose: mW,
        onChosenEdit: EW,
        onChosenNew: NW,
        onChosenDownload: LW
      } = WW;
      const {
        t: cW
      } = (0, AW.B)(), [wW, ZW] = (0, tW.useState)("choose"), [lW, bW] = (0, tW.useState)(null), [UW, kW] = (0, tW.useState)(null);
      return (0, jW.jsxs)(jW.Fragment, {
        children: [(0, jW.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: cW("worldBuilder:saveSchematic")
        }), "choose" === wW && (0, jW.jsxs)(jW.Fragment, {
          children: [(0, jW.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: cW("worldBuilder:overwriteOneOfYourSchematics")
          }), (0, jW.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, jW.jsx)(PW.d, {
              schematics: OW,
              onSchematicPicked: WW => {
                bW(WW.schematicId), kW("existing"), ZW("save")
              },
              loading: !1,
              disableAutoExport: !1
            })
          }), (0, jW.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: cW("general:otherOptions")
          }), (0, jW.jsxs)("div", {
            className: "OtherOptions",
            children: [(0, jW.jsx)(xW.n, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                kW("new"), ZW("save")
              },
              children: cW("worldBuilder:saveAsNewSchematic")
            }), (0, jW.jsx)(xW.f, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                kW("file"), ZW("save")
              },
              children: cW("worldBuilder:downloadSchematic")
            })]
          })]
        }), "choose" !== wW && (0, jW.jsx)(yW, {
          type: UW,
          ownedSchematics: OW,
          onSubmit: (WW, iW, OW) => {
            "file" === UW ? LW(iW, WW) : "new" === UW ? NW(iW, OW, WW) : EW(lW, iW, OW, WW), mW()
          },
          onBack: () => {
            ZW("choose")
          },
          prepopName: "existing" === UW ? null === (iW = OW.find((WW => WW.schematicId === lW))) || void 0 === iW ? void 0 : iW.name : null
        })]
      })
    }

    function yW(WW) {
      let {
        type: iW,
        prepopName: OW,
        ownedSchematics: mW,
        onSubmit: EW,
        onBack: NW
      } = WW;
      const {
        t: PW
      } = (0, AW.B)(), [LW, cW] = (0, tW.useState)(""), [ZW, lW] = (0, tW.useState)(""), [bW, UW] = (0, tW.useState)(null), [kW, sW] = (0, tW.useState)(!0), YW = WW => {
        var EW;
        WW = null !== (EW = WW) && void 0 !== EW ? EW : LW;
        const NW = (0, SW.Hb)(WW, "new" === iW || "existing" === iW && WW !== OW);
        return NW ? (UW(PW(NW.translationKey, NW.params)), !1) : "new" === iW && mW.find((iW => iW.name === WW)) ? (UW(PW("worldBuilder:schematicAlreadyExists")), !1) : (UW(null), !0)
      };
      return (0, jW.jsxs)("div", {
        className: "SaveSchematicWindow",
        children: [(0, jW.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: PW("general:name")
        }), (0, jW.jsx)(MW.b, {
          className: wW()("SaveSchematicName", {
            Error: bW
          }),
          forcedText: OW,
          onValueChange: WW => {
            cW(WW), YW(WW)
          },
          placeholderText: PW("worldBuilder:schematicNamePlaceholder"),
          maxLength: SW.zb
        }), (0, jW.jsx)("h2", {
          className: wW()("SaveSchematicError", {
            Hidden: !bW
          }),
          children: bW
        }), (0, jW.jsx)("h2", {
          className: wW()("SchematicPopupSubtitle", {
            Hidden: "file" === iW
          }),
          children: PW("general:description")
        }), (0, jW.jsx)(MW.b, {
          className: wW()("SaveSchematicDescription", {
            Hidden: "file" === iW
          }),
          onValueChange: lW,
          placeholderText: PW("worldBuilder:schematicDescriptionPlaceholder"),
          maxLength: SW.xb,
          useTextarea: !0
        }), (0, jW.jsxs)("div", {
          className: wW()("SaveSchematicCheckboxContainer", {
            WarningBorder: "existing" === iW
          }),
          children: [(0, jW.jsx)(KW.e, {
            checked: kW,
            onChange: WW => {
              sW(WW.target.checked)
            },
            disabled: !1,
            className: "SaveSchematicCheckbox"
          }), (0, jW.jsx)("h1", {
            className: "SchematicPopupSubtitle",
            children: PW("existing" === iW ? "worldBuilder:overwriteLobbyCode" : "worldBuilder:includeLobbyCode")
          })]
        }), "existing" === iW && (0, jW.jsx)("div", {
          className: "SaveSchematicLobbyCodeWarning",
          children: PW("worldBuilder:lobbyCodeWarning")
        }), (0, jW.jsxs)("div", {
          className: "SaveSchematicButtons",
          children: [(0, jW.jsx)(xW.n, {
            className: "SaveSchematicButton",
            onClick: () => {
              YW() && EW(kW, LW, ZW)
            },
            children: PW("file" === iW ? "general:download" : "general:save")
          }), (0, jW.jsx)(xW.O, {
            className: "SaveSchematicButton",
            onClick: NW,
            children: PW("general:cancel")
          })]
        })]
      })
    }
    var TW = OW(1185),
      JW = OW(1856),
      hW = OW(1111);

    function HW(WW, iW) {
      if ("devDownloadJson" !== WW) ! function(WW, iW) {
        const OW = TW.clientSideServerUrls.getHttpUrlFromWebSocketUrl((0, NW.d)().websocketUrl);
        let LW = !1;
        const cW = async (WW, iW) => {
          if (LW) return;
          LW = !0;
          const {
            gameNameWithVariation: mW,
            lobbyName: PW
          } = (0, NW.d)(), cW = {
            gameNameWithVariation: mW,
            lobbyName: PW
          };
          return await (0, hW.postJsonWithMetricsCookiesAndJsonResponse)(`${OW}/schematic/${WW}`, EW.G[WW].toBuffer({
            ...cW,
            ...iW
          }), {
            retries: 1
          })
        };
        if ("Plugin|WorldBuilder|SaveSchematic" === WW) ! function(WW) {
          let {
            ownedSchematics: iW,
            onChosenDownload: OW,
            onChosenEdit: mW,
            onChosenNew: EW,
            onClose: NW
          } = WW;
          ZW.NotificationProvider.showCustomPopup({
            body: WW => (0, jW.jsx)(YW, {
              ownedSchematics: iW,
              onChosenDownload: OW,
              onChosenEdit: mW,
              onChosenNew: EW,
              onClose: WW
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: NW,
            unlockPointerKey: "schematicSaverPopup"
          })
        }({
          ownedSchematics: iW,
          onChosenDownload: (WW, iW) => {
            cW("download-schematic", {
              name: WW,
              includeLobbyCode: iW
            }).then((iW => {
              let {
                buffer: {
                  data: OW
                }
              } = iW;
              const EW = mW.OZ.from(OW);
              (0, JW.downloadBlob)(new Blob([EW], {
                type: "application/octet-stream"
              }), `${WW}.bloxdschem`)
            }))
          },
          onClose: () => {
            cW("cancel", {})
          },
          onChosenEdit: (WW, iW, OW, mW) => {
            cW("save-to-profile", {
              schematicId: WW,
              name: iW,
              description: OW,
              includeLobbyCode: mW
            })
          },
          onChosenNew: (WW, iW, OW) => {
            cW("save-to-profile", {
              schematicId: null,
              name: WW,
              description: iW,
              includeLobbyCode: OW
            })
          }
        });
        else if ("Plugin|WorldBuilder|LoadSchematic" === WW) ! function(WW) {
          let {
            ownedSchematics: iW,
            onChosenFile: OW,
            onChosenPreset: mW,
            onClose: EW
          } = WW;
          ZW.NotificationProvider.showCustomPopup({
            body: WW => (0, jW.jsx)(kW, {
              ownedSchematics: iW,
              onChosenFile: OW,
              onChosenPreset: mW,
              onClose: WW
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: EW,
            unlockPointerKey: "schematicLoaderPopup"
          })
        }({
          ownedSchematics: iW,
          onChosenFile: async WW => {
            const iW = mW.OZ.from(await WW.arrayBuffer()),
              {
                gameNameWithVariation: PW,
                lobbyName: LW
              } = (0, NW.d)();
            await (0, hW.postBinaryWithMetricsCookiesAndCustomResponse)(`${OW}/schematic/upload-schematic`, EW.G["upload-schematic"].toBuffer({
              gameNameWithVariation: PW,
              lobbyName: LW,
              schematic: iW
            }), {
              retries: 1
            }, hW.HttpPayloadType.json)
          },
          onChosenPreset: WW => {
            cW("load-from-profile", {
              schematicId: WW
            })
          },
          onClose: () => {
            cW("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ListSchematics" === WW)(0, PW.g)({
          ownedSchematics: Array.isArray(iW) ? iW : iW.schematics,
          currentWorldSchematicId: Array.isArray(iW) ? null : iW.currentWorldSchematicId,
          onClose: () => {
            cW("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ExportWorld" === WW) {
          var wW;
          const WW = null !== (wW = iW.schematic) && void 0 !== wW ? wW : iW;
          (0, sW.j)({
            schematic: WW,
            inSourceWorld: WW.schematicId === iW.currentWorldSchematicId,
            onClose: () => {
              cW("cancel", {})
            }
          })
        } else console.error(`Unknown plugin message type ${WW}`)
      }(WW, iW);
      else {
        const WW = JSON.stringify(iW.data, null, 2);
        (0, JW.downloadBlob)(new Blob([WW], {
          type: "application/json"
        }), iW.filename)
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);