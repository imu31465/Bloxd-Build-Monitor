export const id = 240;
export const ids = [240];
export const modules = {
  37215: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => EH,
      d: () => GH
    });
    var AH = LH(45),
      rH = LH(1352),
      SH = LH(1123),
      hH = LH(1313),
      tH = LH(3872),
      zH = LH(5399),
      CH = LH(1225);

    function EH(HH) {
      let {
        loading: BH,
        schematics: LH,
        onSchematicPicked: AH,
        selectedSchematicIdList: rH = [],
        disableAutoExport: zH
      } = HH;
      const {
        t: EH
      } = (0, SH.B)();
      return (0, CH.jsxs)("div", {
        className: "SchematicList",
        children: [BH && (0, CH.jsx)(hH.d, {}), !BH && 0 === LH.length && (0, CH.jsx)("div", {
          className: "NoSchematicsText",
          children: EH("worldBuilder:noSavedSchematic")
        }), !BH && LH.map((HH => (0, CH.jsx)(tH.d, {
          source: {
            type: "schematic",
            schematic: HH
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            AH(HH)
          },
          isSelected: rH.includes(HH.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: HH.isAutoExported && zH,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, HH.schematicId)))]
      })
    }

    function XH(HH) {
      let {
        ownedSchematics: BH,
        currentWorldSchematicId: LH,
        onClose: rH
      } = HH;
      const {
        t: hH
      } = (0, SH.B)(), [tH, XH] = (0, AH.useState)(null);
      return (0, CH.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === tH && (0, CH.jsxs)(CH.Fragment, {
          children: [(0, CH.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: hH("worldBuilder:schematicList")
          }), (0, CH.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: hH("worldBuilder:clickSchematicForOptions")
          }), (0, CH.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, CH.jsx)(EH, {
              loading: !1,
              schematics: BH,
              onSchematicPicked: HH => {
                XH(HH)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== tH && (0, CH.jsx)(zH.h, {
          schematic: tH,
          inSourceWorld: tH.schematicId === LH,
          onSchematicUpdate: HH => {
            XH(HH)
          },
          onClose: () => {
            XH(null), rH()
          }
        })]
      })
    }

    function GH(HH) {
      let {
        ownedSchematics: BH,
        currentWorldSchematicId: LH,
        onClose: AH
      } = HH;
      rH.NotificationProvider.showCustomPopup({
        body: HH => (0, CH.jsx)(XH, {
          ownedSchematics: BH,
          currentWorldSchematicId: LH,
          onClose: HH
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: AH,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  45217: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      runClientGameMessage: () => oH
    });
    var AH = LH(4099),
      rH = LH(4113),
      SH = LH(1297),
      hH = LH(37215),
      tH = LH(5446),
      zH = LH(1038),
      CH = LH.n(zH),
      EH = LH(45),
      XH = LH(1352),
      GH = LH(1455),
      YH = LH(317),
      uH = LH(1123),
      QH = LH(1315),
      WH = LH(1225);

    function MH(HH) {
      let {
        onFilePicked: BH
      } = HH;
      const {
        t: LH
      } = (0, uH.B)(), [AH, rH] = (0, EH.useState)(null), {
        getRootProps: SH,
        getInputProps: hH,
        isDragActive: zH
      } = (0, tH.c)({
        onDrop: HH => {
          HH.length > 0 && rH(HH[0])
        },
        useFsAccessApi: !1
      }), XH = AH && AH.size > 1024 * YH.md;
      return (0, WH.jsxs)("div", {
        className: "SchematicUploadContainer",
        children: [(0, WH.jsxs)("div", {
          ...SH({
            className: CH()("SchematicUpload", {
              ActiveDrag: zH
            })
          }),
          children: [(0, WH.jsx)("input", {
            ...hH({
              accept: ".bloxdschem"
            })
          }), !zH && AH ? (0, WH.jsxs)(WH.Fragment, {
            children: [(0, WH.jsx)("div", {
              className: CH()("SchematicUploadIcon", "Active", {
                TooBig: XH
              }),
              children: (0, WH.jsx)(QH.c, {
                name: "file-lines"
              })
            }), (0, WH.jsx)("div", {
              className: "SchematicUploadInstructions Active",
              children: AH.name
            })]
          }) : (0, WH.jsxs)(WH.Fragment, {
            children: [(0, WH.jsx)("div", {
              className: "SchematicUploadIcon",
              children: (0, WH.jsx)(QH.c, {
                name: "up-from-bracket"
              })
            }), (0, WH.jsx)("div", {
              className: "SchematicUploadInstructions",
              children: LH("worldBuilder:dragAFileHere")
            })]
          })]
        }), (0, WH.jsx)(GH.u, {
          disabled: XH || !AH,
          className: "SchematicUploadButton",
          onClick: () => {
            !XH && AH && BH(AH)
          },
          children: XH ? LH("worldBuilder:fileTooBig", {
            maxSizeKb: YH.md
          }) : LH("worldBuilder:upload")
        })]
      })
    }

    function xH(HH) {
      let {
        ownedSchematics: BH,
        onClose: LH,
        onChosenPreset: AH,
        onChosenFile: rH
      } = HH;
      const {
        t: SH
      } = (0, uH.B)();
      return (0, WH.jsxs)(WH.Fragment, {
        children: [(0, WH.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: SH("worldBuilder:loadSchematic")
        }), (0, WH.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: SH("worldBuilder:chooseOneOfYourSchematics")
        }), (0, WH.jsx)("div", {
          className: "SchematicPopupSchematicListContainer",
          children: (0, WH.jsx)(hH.b, {
            schematics: BH,
            onSchematicPicked: HH => {
              AH(HH.schematicId), LH()
            },
            loading: !1,
            disableAutoExport: !0
          })
        }), (0, WH.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: SH("worldBuilder:uploadNewSchematic")
        }), (0, WH.jsx)(MH, {
          onFilePicked: async HH => {
            try {
              await rH(HH)
            } catch (BH) {
              console.warn("Schematic upload failed", BH)
            } finally {
              LH()
            }
          }
        })]
      })
    }
    var vH = LH(5399),
      PH = LH(1706),
      TH = LH(4745),
      UH = LH(1168);

    function VH(HH) {
      var BH;
      let {
        ownedSchematics: LH,
        onClose: AH,
        onChosenEdit: rH,
        onChosenNew: SH,
        onChosenDownload: tH
      } = HH;
      const {
        t: zH
      } = (0, uH.B)(), [CH, XH] = (0, EH.useState)("choose"), [YH, QH] = (0, EH.useState)(null), [MH, xH] = (0, EH.useState)(null);
      return (0, WH.jsxs)(WH.Fragment, {
        children: [(0, WH.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: zH("worldBuilder:saveSchematic")
        }), "choose" === CH && (0, WH.jsxs)(WH.Fragment, {
          children: [(0, WH.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: zH("worldBuilder:overwriteOneOfYourSchematics")
          }), (0, WH.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, WH.jsx)(hH.b, {
              schematics: LH,
              onSchematicPicked: HH => {
                QH(HH.schematicId), xH("existing"), XH("save")
              },
              loading: !1,
              disableAutoExport: !1
            })
          }), (0, WH.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: zH("general:otherOptions")
          }), (0, WH.jsxs)("div", {
            className: "OtherOptions",
            children: [(0, WH.jsx)(GH.u, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                xH("new"), XH("save")
              },
              children: zH("worldBuilder:saveAsNewSchematic")
            }), (0, WH.jsx)(GH.i, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                xH("file"), XH("save")
              },
              children: zH("worldBuilder:downloadSchematic")
            })]
          })]
        }), "choose" !== CH && (0, WH.jsx)(OH, {
          type: MH,
          ownedSchematics: LH,
          onSubmit: (HH, BH, LH) => {
            "file" === MH ? tH(BH, HH) : "new" === MH ? SH(BH, LH, HH) : rH(YH, BH, LH, HH), AH()
          },
          onBack: () => {
            XH("choose")
          },
          prepopName: "existing" === MH ? null === (BH = LH.find((HH => HH.schematicId === YH))) || void 0 === BH ? void 0 : BH.name : null
        })]
      })
    }

    function OH(HH) {
      let {
        type: BH,
        prepopName: LH,
        ownedSchematics: AH,
        onSubmit: rH,
        onBack: SH
      } = HH;
      const {
        t: hH
      } = (0, uH.B)(), [tH, zH] = (0, EH.useState)(""), [XH, YH] = (0, EH.useState)(""), [QH, MH] = (0, EH.useState)(null), [xH, vH] = (0, EH.useState)(!0), VH = HH => {
        var rH;
        HH = null !== (rH = HH) && void 0 !== rH ? rH : tH;
        const SH = (0, UH.Bb)(HH, "new" === BH || "existing" === BH && HH !== LH);
        return SH ? (MH(hH(SH.translationKey, SH.params)), !1) : "new" === BH && AH.find((BH => BH.name === HH)) ? (MH(hH("worldBuilder:schematicAlreadyExists")), !1) : (MH(null), !0)
      };
      return (0, WH.jsxs)("div", {
        className: "SaveSchematicWindow",
        children: [(0, WH.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: hH("general:name")
        }), (0, WH.jsx)(PH.e, {
          className: CH()("SaveSchematicName", {
            Error: QH
          }),
          forcedText: LH,
          onValueChange: HH => {
            zH(HH), VH(HH)
          },
          placeholderText: hH("worldBuilder:schematicNamePlaceholder"),
          maxLength: UH.qb
        }), (0, WH.jsx)("h2", {
          className: CH()("SaveSchematicError", {
            Hidden: !QH
          }),
          children: QH
        }), (0, WH.jsx)("h2", {
          className: CH()("SchematicPopupSubtitle", {
            Hidden: "file" === BH
          }),
          children: hH("general:description")
        }), (0, WH.jsx)(PH.e, {
          className: CH()("SaveSchematicDescription", {
            Hidden: "file" === BH
          }),
          onValueChange: YH,
          placeholderText: hH("worldBuilder:schematicDescriptionPlaceholder"),
          maxLength: UH.nb,
          useTextarea: !0
        }), (0, WH.jsxs)("div", {
          className: CH()("SaveSchematicCheckboxContainer", {
            WarningBorder: "existing" === BH
          }),
          children: [(0, WH.jsx)(TH.d, {
            checked: xH,
            onChange: HH => {
              vH(HH.target.checked)
            },
            disabled: !1,
            className: "SaveSchematicCheckbox"
          }), (0, WH.jsx)("h1", {
            className: "SchematicPopupSubtitle",
            children: hH("existing" === BH ? "worldBuilder:overwriteLobbyCode" : "worldBuilder:includeLobbyCode")
          })]
        }), "existing" === BH && (0, WH.jsx)("div", {
          className: "SaveSchematicLobbyCodeWarning",
          children: hH("worldBuilder:lobbyCodeWarning")
        }), (0, WH.jsxs)("div", {
          className: "SaveSchematicButtons",
          children: [(0, WH.jsx)(GH.u, {
            className: "SaveSchematicButton",
            onClick: () => {
              VH() && rH(xH, tH, XH)
            },
            children: hH("file" === BH ? "general:download" : "general:save")
          }), (0, WH.jsx)(GH.O, {
            className: "SaveSchematicButton",
            onClick: SH,
            children: hH("general:cancel")
          })]
        })]
      })
    }
    var bH = LH(1131),
      kH = LH(1789),
      mH = LH(1070);

    function oH(HH, BH) {
      if ("devDownloadJson" !== HH) ! function(HH, BH) {
        const LH = bH.clientSideServerUrls.getHttpUrlFromWebSocketUrl((0, SH.c)().websocketUrl);
        let tH = !1;
        const zH = async (HH, BH) => {
          if (tH) return;
          tH = !0;
          const {
            gameNameWithVariation: AH,
            lobbyName: hH
          } = (0, SH.c)(), zH = {
            gameNameWithVariation: AH,
            lobbyName: hH
          };
          return await (0, mH.postJsonWithMetricsCookiesAndJsonResponse)(`${LH}/schematic/${HH}`, rH.K[HH].toBuffer({
            ...zH,
            ...BH
          }), {
            retries: 1
          })
        };
        if ("Plugin|WorldBuilder|SaveSchematic" === HH) ! function(HH) {
          let {
            ownedSchematics: BH,
            onChosenDownload: LH,
            onChosenEdit: AH,
            onChosenNew: rH,
            onClose: SH
          } = HH;
          XH.NotificationProvider.showCustomPopup({
            body: HH => (0, WH.jsx)(VH, {
              ownedSchematics: BH,
              onChosenDownload: LH,
              onChosenEdit: AH,
              onChosenNew: rH,
              onClose: HH
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: SH,
            unlockPointerKey: "schematicSaverPopup"
          })
        }({
          ownedSchematics: BH,
          onChosenDownload: (HH, BH) => {
            zH("download-schematic", {
              name: HH,
              includeLobbyCode: BH
            }).then((BH => {
              let {
                buffer: {
                  data: LH
                }
              } = BH;
              const rH = AH.rX.from(LH);
              (0, kH.downloadBlob)(new Blob([rH], {
                type: "application/octet-stream"
              }), `${HH}.bloxdschem`)
            }))
          },
          onClose: () => {
            zH("cancel", {})
          },
          onChosenEdit: (HH, BH, LH, AH) => {
            zH("save-to-profile", {
              schematicId: HH,
              name: BH,
              description: LH,
              includeLobbyCode: AH
            })
          },
          onChosenNew: (HH, BH, LH) => {
            zH("save-to-profile", {
              schematicId: null,
              name: HH,
              description: BH,
              includeLobbyCode: LH
            })
          }
        });
        else if ("Plugin|WorldBuilder|LoadSchematic" === HH) ! function(HH) {
          let {
            ownedSchematics: BH,
            onChosenFile: LH,
            onChosenPreset: AH,
            onClose: rH
          } = HH;
          XH.NotificationProvider.showCustomPopup({
            body: HH => (0, WH.jsx)(xH, {
              ownedSchematics: BH,
              onChosenFile: LH,
              onChosenPreset: AH,
              onClose: HH
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: rH,
            unlockPointerKey: "schematicLoaderPopup"
          })
        }({
          ownedSchematics: BH,
          onChosenFile: async HH => {
            const BH = AH.rX.from(await HH.arrayBuffer()),
              {
                gameNameWithVariation: hH,
                lobbyName: tH
              } = (0, SH.c)();
            await (0, mH.postBinaryWithMetricsCookiesAndCustomResponse)(`${LH}/schematic/upload-schematic`, rH.K["upload-schematic"].toBuffer({
              gameNameWithVariation: hH,
              lobbyName: tH,
              schematic: BH
            }), {
              retries: 1
            }, mH.HttpPayloadType.json)
          },
          onChosenPreset: HH => {
            zH("load-from-profile", {
              schematicId: HH
            })
          },
          onClose: () => {
            zH("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ListSchematics" === HH)(0, hH.d)({
          ownedSchematics: Array.isArray(BH) ? BH : BH.schematics,
          currentWorldSchematicId: Array.isArray(BH) ? null : BH.currentWorldSchematicId,
          onClose: () => {
            zH("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ExportWorld" === HH) {
          var CH;
          const HH = null !== (CH = BH.schematic) && void 0 !== CH ? CH : BH;
          (0, vH.k)({
            schematic: HH,
            inSourceWorld: HH.schematicId === BH.currentWorldSchematicId,
            onClose: () => {
              zH("cancel", {})
            }
          })
        } else console.error(`Unknown plugin message type ${HH}`)
      }(HH, BH);
      else {
        const HH = JSON.stringify(BH.data, null, 2);
        (0, kH.downloadBlob)(new Blob([HH], {
          type: "application/json"
        }), BH.filename)
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);