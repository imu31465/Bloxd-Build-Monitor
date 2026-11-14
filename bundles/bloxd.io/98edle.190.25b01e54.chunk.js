export const id = 190;
export const ids = [190];
export const modules = {
  34656: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => eW,
      e: () => tR
    });
    var wW = MW(75),
      CW = MW(1166),
      zR = MW(1027),
      AW = MW(1157),
      bR = MW(2576),
      yR = MW(3911),
      NW = MW(940);

    function eW(WW) {
      let {
        loading: RW,
        schematics: MW,
        onSchematicPicked: wW,
        selectedSchematicIdList: CW = [],
        disableAutoExport: yR
      } = WW;
      const {
        t: eW
      } = (0, zR.C)();
      return (0, NW.jsxs)("div", {
        className: "SchematicList",
        children: [RW && (0, NW.jsx)(AW.d, {}), !RW && 0 === MW.length && (0, NW.jsx)("div", {
          className: "NoSchematicsText",
          children: eW("worldBuilder:noSavedSchematic")
        }), !RW && MW.map((WW => (0, NW.jsx)(bR.d, {
          source: {
            type: "schematic",
            schematic: WW
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            wW(WW)
          },
          isSelected: CW.includes(WW.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: WW.isAutoExported && yR,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, WW.schematicId)))]
      })
    }

    function BW(WW) {
      let {
        ownedSchematics: RW,
        currentWorldSchematicId: MW,
        onClose: CW
      } = WW;
      const {
        t: AW
      } = (0, zR.C)(), [bR, BW] = (0, wW.useState)(null);
      return (0, NW.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === bR && (0, NW.jsxs)(NW.Fragment, {
          children: [(0, NW.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: AW("worldBuilder:schematicList")
          }), (0, NW.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: AW("worldBuilder:clickSchematicForOptions")
          }), (0, NW.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, NW.jsx)(eW, {
              loading: !1,
              schematics: RW,
              onSchematicPicked: WW => {
                BW(WW)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== bR && (0, NW.jsx)(yR.h, {
          schematic: bR,
          inSourceWorld: bR.schematicId === MW,
          onSchematicUpdate: WW => {
            BW(WW)
          },
          onClose: () => {
            BW(null), CW()
          }
        })]
      })
    }

    function tR(WW) {
      let {
        ownedSchematics: RW,
        currentWorldSchematicId: MW,
        onClose: wW
      } = WW;
      CW.NotificationProvider.showCustomPopup({
        body: WW => (0, NW.jsx)(BW, {
          ownedSchematics: RW,
          currentWorldSchematicId: MW,
          onClose: WW
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: wW,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  39205: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      runClientGameMessage: () => jR
    });
    var wW = MW(2846),
      CW = MW(2826),
      zR = MW(1148),
      AW = MW(34656),
      bR = MW(3933),
      yR = MW(897),
      NW = MW.n(yR),
      eW = MW(75),
      BW = MW(1166),
      tR = MW(1255),
      TW = MW(284),
      gR = MW(1027),
      iR = MW(904),
      YW = MW(940);

    function JW(WW) {
      let {
        onFilePicked: RW
      } = WW;
      const {
        t: MW
      } = (0, gR.C)(), [wW, CW] = (0, eW.useState)(null), {
        getRootProps: zR,
        getInputProps: AW,
        isDragActive: yR
      } = (0, bR.d)({
        onDrop: WW => {
          WW.length > 0 && CW(WW[0])
        },
        useFsAccessApi: !1
      }), BW = wW && wW.size > 1024 * TW.dd;
      return (0, YW.jsxs)("div", {
        className: "SchematicUploadContainer",
        children: [(0, YW.jsxs)("div", {
          ...zR({
            className: NW()("SchematicUpload", {
              ActiveDrag: yR
            })
          }),
          children: [(0, YW.jsx)("input", {
            ...AW({
              accept: ".bloxdschem"
            })
          }), !yR && wW ? (0, YW.jsxs)(YW.Fragment, {
            children: [(0, YW.jsx)("div", {
              className: NW()("SchematicUploadIcon", "Active", {
                TooBig: BW
              }),
              children: (0, YW.jsx)(iR.e, {
                name: "file-lines"
              })
            }), (0, YW.jsx)("div", {
              className: "SchematicUploadInstructions Active",
              children: wW.name
            })]
          }) : (0, YW.jsxs)(YW.Fragment, {
            children: [(0, YW.jsx)("div", {
              className: "SchematicUploadIcon",
              children: (0, YW.jsx)(iR.e, {
                name: "up-from-bracket"
              })
            }), (0, YW.jsx)("div", {
              className: "SchematicUploadInstructions",
              children: MW("worldBuilder:dragAFileHere")
            })]
          })]
        }), (0, YW.jsx)(tR.m, {
          disabled: BW || !wW,
          className: "SchematicUploadButton",
          onClick: () => {
            !BW && wW && RW(wW)
          },
          children: BW ? MW("worldBuilder:fileTooBig", {
            maxSizeKb: TW.dd
          }) : MW("worldBuilder:upload")
        })]
      })
    }

    function PW(WW) {
      let {
        ownedSchematics: RW,
        onClose: MW,
        onChosenPreset: wW,
        onChosenFile: CW
      } = WW;
      const {
        t: zR
      } = (0, gR.C)();
      return (0, YW.jsxs)(YW.Fragment, {
        children: [(0, YW.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: zR("worldBuilder:loadSchematic")
        }), (0, YW.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: zR("worldBuilder:chooseOneOfYourSchematics")
        }), (0, YW.jsx)("div", {
          className: "SchematicPopupSchematicListContainer",
          children: (0, YW.jsx)(AW.d, {
            schematics: RW,
            onSchematicPicked: WW => {
              wW(WW.schematicId), MW()
            },
            loading: !1,
            disableAutoExport: !0
          })
        }), (0, YW.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: zR("worldBuilder:uploadNewSchematic")
        }), (0, YW.jsx)(JW, {
          onFilePicked: async WW => {
            try {
              await CW(WW)
            } catch (RW) {
              console.warn("Schematic upload failed", RW)
            } finally {
              MW()
            }
          }
        })]
      })
    }
    var IW = MW(3911),
      oW = MW(1489),
      lW = MW(3458),
      FW = MW(1053);

    function fW(WW) {
      var RW;
      let {
        ownedSchematics: MW,
        onClose: wW,
        onChosenEdit: CW,
        onChosenNew: zR,
        onChosenDownload: bR
      } = WW;
      const {
        t: yR
      } = (0, gR.C)(), [NW, BW] = (0, eW.useState)("choose"), [TW, iR] = (0, eW.useState)(null), [JW, PW] = (0, eW.useState)(null);
      return (0, YW.jsxs)(YW.Fragment, {
        children: [(0, YW.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: yR("worldBuilder:saveSchematic")
        }), "choose" === NW && (0, YW.jsxs)(YW.Fragment, {
          children: [(0, YW.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: yR("worldBuilder:overwriteOneOfYourSchematics")
          }), (0, YW.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, YW.jsx)(AW.d, {
              schematics: MW,
              onSchematicPicked: WW => {
                iR(WW.schematicId), PW("existing"), BW("save")
              },
              loading: !1,
              disableAutoExport: !1
            })
          }), (0, YW.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: yR("general:otherOptions")
          }), (0, YW.jsxs)("div", {
            className: "OtherOptions",
            children: [(0, YW.jsx)(tR.m, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                PW("new"), BW("save")
              },
              children: yR("worldBuilder:saveAsNewSchematic")
            }), (0, YW.jsx)(tR.h, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                PW("file"), BW("save")
              },
              children: yR("worldBuilder:downloadSchematic")
            })]
          })]
        }), "choose" !== NW && (0, YW.jsx)(QW, {
          type: JW,
          ownedSchematics: MW,
          onSubmit: (WW, RW, MW) => {
            "file" === JW ? bR(RW, WW) : "new" === JW ? zR(RW, MW, WW) : CW(TW, RW, MW, WW), wW()
          },
          onBack: () => {
            BW("choose")
          },
          prepopName: "existing" === JW ? null === (RW = MW.find((WW => WW.schematicId === TW))) || void 0 === RW ? void 0 : RW.name : null
        })]
      })
    }

    function QW(WW) {
      let {
        type: RW,
        prepopName: MW,
        ownedSchematics: wW,
        onSubmit: CW,
        onBack: zR
      } = WW;
      const {
        t: AW
      } = (0, gR.C)(), [bR, yR] = (0, eW.useState)(""), [BW, TW] = (0, eW.useState)(""), [iR, JW] = (0, eW.useState)(null), [PW, IW] = (0, eW.useState)(!0), fW = WW => {
        var MW;
        WW = null !== (MW = WW) && void 0 !== MW ? MW : bR;
        const CW = "new" === RW ? (0, FW.v)(WW) : null,
          zR = [...(0, FW.pb)(WW), ...CW ? [CW] : []];
        return zR.length > 0 ? (JW(zR.join(", ")), !1) : "new" === RW && wW.find((RW => RW.name === WW)) ? (JW(AW("worldBuilder:schematicAlreadyExists")), !1) : (JW(null), !0)
      };
      return (0, YW.jsxs)("div", {
        className: "SaveSchematicWindow",
        children: [(0, YW.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: AW("general:name")
        }), (0, YW.jsx)(oW.e, {
          className: NW()("SaveSchematicName", {
            Error: iR
          }),
          forcedText: MW,
          onValueChange: WW => {
            yR(WW), fW(WW)
          },
          placeholderText: AW("worldBuilder:schematicNamePlaceholder"),
          maxLength: FW.ib
        }), (0, YW.jsx)("h2", {
          className: NW()("SaveSchematicError", {
            Hidden: !iR
          }),
          children: iR
        }), (0, YW.jsx)("h2", {
          className: NW()("SchematicPopupSubtitle", {
            Hidden: "file" === RW
          }),
          children: AW("general:description")
        }), (0, YW.jsx)(oW.e, {
          className: NW()("SaveSchematicDescription", {
            Hidden: "file" === RW
          }),
          onValueChange: TW,
          placeholderText: AW("worldBuilder:schematicDescriptionPlaceholder"),
          maxLength: FW.gb,
          useTextarea: !0
        }), (0, YW.jsxs)("div", {
          className: NW()("SaveSchematicCheckboxContainer", {
            WarningBorder: "existing" === RW
          }),
          children: [(0, YW.jsx)(lW.e, {
            checked: PW,
            onChange: WW => {
              IW(WW.target.checked)
            },
            disabled: !1,
            className: "SaveSchematicCheckbox"
          }), (0, YW.jsx)("h1", {
            className: "SchematicPopupSubtitle",
            children: AW("existing" === RW ? "worldBuilder:overwriteLobbyCode" : "worldBuilder:includeLobbyCode")
          })]
        }), "existing" === RW && (0, YW.jsx)("div", {
          className: "SaveSchematicLobbyCodeWarning",
          children: AW("worldBuilder:lobbyCodeWarning")
        }), (0, YW.jsxs)("div", {
          className: "SaveSchematicButtons",
          children: [(0, YW.jsx)(tR.m, {
            className: "SaveSchematicButton",
            onClick: () => {
              fW() && CW(PW, bR, BW)
            },
            children: AW("file" === RW ? "general:download" : "general:save")
          }), (0, YW.jsx)(tR.E, {
            className: "SaveSchematicButton",
            onClick: zR,
            children: AW("general:cancel")
          })]
        })]
      })
    }
    var rR = MW(1033),
      cR = MW(1495),
      XW = MW(975);

    function jR(WW, RW) {
      if ("devDownloadJson" !== WW) ! function(WW, RW) {
        const MW = rR.clientSideServerUrls.getHttpUrlFromWebSocketUrl((0, zR.b)().websocketUrl);
        let bR = !1;
        const yR = async (WW, RW) => {
          if (bR) return;
          bR = !0;
          const {
            gameNameWithVariation: wW,
            lobbyName: AW
          } = (0, zR.b)(), yR = {
            gameNameWithVariation: wW,
            lobbyName: AW
          };
          return await (0, XW.postJsonWithMetricsCookiesAndJsonResponse)(`${MW}/schematic/${WW}`, CW.o[WW].toBuffer({
            ...yR,
            ...RW
          }), {
            retries: 1
          })
        };
        if ("Plugin|WorldBuilder|SaveSchematic" === WW) ! function(WW) {
          let {
            ownedSchematics: RW,
            onChosenDownload: MW,
            onChosenEdit: wW,
            onChosenNew: CW,
            onClose: zR
          } = WW;
          BW.NotificationProvider.showCustomPopup({
            body: WW => (0, YW.jsx)(fW, {
              ownedSchematics: RW,
              onChosenDownload: MW,
              onChosenEdit: wW,
              onChosenNew: CW,
              onClose: WW
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: zR,
            unlockPointerKey: "schematicSaverPopup"
          })
        }({
          ownedSchematics: RW,
          onChosenDownload: (WW, RW) => {
            yR("download-schematic", {
              name: WW,
              includeLobbyCode: RW
            }).then((RW => {
              let {
                buffer: {
                  data: MW
                }
              } = RW;
              const CW = wW.fw.from(MW);
              (0, cR.downloadBlob)(new Blob([CW], {
                type: "application/octet-stream"
              }), `${WW}.bloxdschem`)
            }))
          },
          onClose: () => {
            yR("cancel", {})
          },
          onChosenEdit: (WW, RW, MW, wW) => {
            yR("save-to-profile", {
              schematicId: WW,
              name: RW,
              description: MW,
              includeLobbyCode: wW
            })
          },
          onChosenNew: (WW, RW, MW) => {
            yR("save-to-profile", {
              schematicId: null,
              name: WW,
              description: RW,
              includeLobbyCode: MW
            })
          }
        });
        else if ("Plugin|WorldBuilder|LoadSchematic" === WW) ! function(WW) {
          let {
            ownedSchematics: RW,
            onChosenFile: MW,
            onChosenPreset: wW,
            onClose: CW
          } = WW;
          BW.NotificationProvider.showCustomPopup({
            body: WW => (0, YW.jsx)(PW, {
              ownedSchematics: RW,
              onChosenFile: MW,
              onChosenPreset: wW,
              onClose: WW
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: CW,
            unlockPointerKey: "schematicLoaderPopup"
          })
        }({
          ownedSchematics: RW,
          onChosenFile: async WW => {
            const RW = wW.fw.from(await WW.arrayBuffer()),
              {
                gameNameWithVariation: AW,
                lobbyName: bR
              } = (0, zR.b)();
            await (0, XW.postBinaryWithMetricsCookiesAndCustomResponse)(`${MW}/schematic/upload-schematic`, CW.o["upload-schematic"].toBuffer({
              gameNameWithVariation: AW,
              lobbyName: bR,
              schematic: RW
            }), {
              retries: 1
            }, XW.HttpPayloadType.json)
          },
          onChosenPreset: WW => {
            yR("load-from-profile", {
              schematicId: WW
            })
          },
          onClose: () => {
            yR("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ListSchematics" === WW)(0, AW.e)({
          ownedSchematics: Array.isArray(RW) ? RW : RW.schematics,
          currentWorldSchematicId: Array.isArray(RW) ? null : RW.currentWorldSchematicId,
          onClose: () => {
            yR("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ExportWorld" === WW) {
          var NW;
          const WW = null !== (NW = RW.schematic) && void 0 !== NW ? NW : RW;
          (0, IW.i)({
            schematic: WW,
            inSourceWorld: WW.schematicId === RW.currentWorldSchematicId,
            onClose: () => {
              yR("cancel", {})
            }
          })
        } else console.error(`Unknown plugin message type ${WW}`)
      }(WW, RW);
      else {
        const WW = JSON.stringify(RW.data, null, 2);
        (0, cR.downloadBlob)(new Blob([WW], {
          type: "application/json"
        }), RW.filename)
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);