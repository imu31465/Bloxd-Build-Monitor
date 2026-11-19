export const id = 205;
export const ids = [205];
export const modules = {
  35364: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => ST,
      d: () => LT
    });
    var iT = IT(46),
      zT = IT(1325),
      kT = IT(1171),
      WT = IT(1310),
      XT = IT(3041),
      BT = IT(4410),
      FT = IT(1083);

    function ST(TT) {
      let {
        loading: oT,
        schematics: IT,
        onSchematicPicked: iT,
        selectedSchematicIdList: zT = [],
        disableAutoExport: BT
      } = TT;
      const {
        t: ST
      } = (0, kT.t)();
      return (0, FT.jsxs)("div", {
        className: "SchematicList",
        children: [oT && (0, FT.jsx)(WT.d, {}), !oT && 0 === IT.length && (0, FT.jsx)("div", {
          className: "NoSchematicsText",
          children: ST("worldBuilder:noSavedSchematic")
        }), !oT && IT.map((TT => (0, FT.jsx)(XT.g, {
          source: {
            type: "schematic",
            schematic: TT
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            iT(TT)
          },
          isSelected: zT.includes(TT.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: TT.isAutoExported && BT,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, TT.schematicId)))]
      })
    }

    function DT(TT) {
      let {
        ownedSchematics: oT,
        currentWorldSchematicId: IT,
        onClose: zT
      } = TT;
      const {
        t: WT
      } = (0, kT.t)(), [XT, DT] = (0, iT.useState)(null);
      return (0, FT.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === XT && (0, FT.jsxs)(FT.Fragment, {
          children: [(0, FT.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: WT("worldBuilder:schematicList")
          }), (0, FT.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: WT("worldBuilder:clickSchematicForOptions")
          }), (0, FT.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, FT.jsx)(ST, {
              loading: !1,
              schematics: oT,
              onSchematicPicked: TT => {
                DT(TT)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== XT && (0, FT.jsx)(BT.f, {
          schematic: XT,
          inSourceWorld: XT.schematicId === IT,
          onSchematicUpdate: TT => {
            DT(TT)
          },
          onClose: () => {
            DT(null), zT()
          }
        })]
      })
    }

    function LT(TT) {
      let {
        ownedSchematics: oT,
        currentWorldSchematicId: IT,
        onClose: iT
      } = TT;
      zT.NotificationProvider.showCustomPopup({
        body: TT => (0, FT.jsx)(DT, {
          ownedSchematics: oT,
          currentWorldSchematicId: IT,
          onClose: TT
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: iT,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  40571: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      runClientGameMessage: () => fT
    });
    var iT = IT(3316),
      zT = IT(3330),
      kT = IT(1293),
      WT = IT(35364),
      XT = IT(4439),
      BT = IT(1042),
      FT = IT.n(BT),
      ST = IT(46),
      DT = IT(1325),
      LT = IT(1408),
      xT = IT(314),
      cT = IT(1171),
      KT = IT(1055),
      MT = IT(1083);

    function rT(TT) {
      let {
        onFilePicked: oT
      } = TT;
      const {
        t: IT
      } = (0, cT.t)(), [iT, zT] = (0, ST.useState)(null), {
        getRootProps: kT,
        getInputProps: WT,
        isDragActive: BT
      } = (0, XT.e)({
        onDrop: TT => {
          TT.length > 0 && zT(TT[0])
        },
        useFsAccessApi: !1
      }), DT = iT && iT.size > 1024 * xT.Qc;
      return (0, MT.jsxs)("div", {
        className: "SchematicUploadContainer",
        children: [(0, MT.jsxs)("div", {
          ...kT({
            className: FT()("SchematicUpload", {
              ActiveDrag: BT
            })
          }),
          children: [(0, MT.jsx)("input", {
            ...WT({
              accept: ".bloxdschem"
            })
          }), !BT && iT ? (0, MT.jsxs)(MT.Fragment, {
            children: [(0, MT.jsx)("div", {
              className: FT()("SchematicUploadIcon", "Active", {
                TooBig: DT
              }),
              children: (0, MT.jsx)(KT.e, {
                name: "file-lines"
              })
            }), (0, MT.jsx)("div", {
              className: "SchematicUploadInstructions Active",
              children: iT.name
            })]
          }) : (0, MT.jsxs)(MT.Fragment, {
            children: [(0, MT.jsx)("div", {
              className: "SchematicUploadIcon",
              children: (0, MT.jsx)(KT.e, {
                name: "up-from-bracket"
              })
            }), (0, MT.jsx)("div", {
              className: "SchematicUploadInstructions",
              children: IT("worldBuilder:dragAFileHere")
            })]
          })]
        }), (0, MT.jsx)(LT.m, {
          disabled: DT || !iT,
          className: "SchematicUploadButton",
          onClick: () => {
            !DT && iT && oT(iT)
          },
          children: DT ? IT("worldBuilder:fileTooBig", {
            maxSizeKb: xT.Qc
          }) : IT("worldBuilder:upload")
        })]
      })
    }

    function AT(TT) {
      let {
        ownedSchematics: oT,
        onClose: IT,
        onChosenPreset: iT,
        onChosenFile: zT
      } = TT;
      const {
        t: kT
      } = (0, cT.t)();
      return (0, MT.jsxs)(MT.Fragment, {
        children: [(0, MT.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: kT("worldBuilder:loadSchematic")
        }), (0, MT.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: kT("worldBuilder:chooseOneOfYourSchematics")
        }), (0, MT.jsx)("div", {
          className: "SchematicPopupSchematicListContainer",
          children: (0, MT.jsx)(WT.c, {
            schematics: oT,
            onSchematicPicked: TT => {
              iT(TT.schematicId), IT()
            },
            loading: !1,
            disableAutoExport: !0
          })
        }), (0, MT.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: kT("worldBuilder:uploadNewSchematic")
        }), (0, MT.jsx)(rT, {
          onFilePicked: async TT => {
            try {
              await zT(TT)
            } catch (oT) {
              console.warn("Schematic upload failed", oT)
            } finally {
              IT()
            }
          }
        })]
      })
    }
    var gT = IT(4410),
      hT = IT(1624),
      wT = IT(3899),
      mT = IT(1193);

    function eT(TT) {
      var oT;
      let {
        ownedSchematics: IT,
        onClose: iT,
        onChosenEdit: zT,
        onChosenNew: kT,
        onChosenDownload: XT
      } = TT;
      const {
        t: BT
      } = (0, cT.t)(), [FT, DT] = (0, ST.useState)("choose"), [xT, KT] = (0, ST.useState)(null), [rT, AT] = (0, ST.useState)(null);
      return (0, MT.jsxs)(MT.Fragment, {
        children: [(0, MT.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: BT("worldBuilder:saveSchematic")
        }), "choose" === FT && (0, MT.jsxs)(MT.Fragment, {
          children: [(0, MT.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: BT("worldBuilder:overwriteOneOfYourSchematics")
          }), (0, MT.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, MT.jsx)(WT.c, {
              schematics: IT,
              onSchematicPicked: TT => {
                KT(TT.schematicId), AT("existing"), DT("save")
              },
              loading: !1,
              disableAutoExport: !1
            })
          }), (0, MT.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: BT("general:otherOptions")
          }), (0, MT.jsxs)("div", {
            className: "OtherOptions",
            children: [(0, MT.jsx)(LT.m, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                AT("new"), DT("save")
              },
              children: BT("worldBuilder:saveAsNewSchematic")
            }), (0, MT.jsx)(LT.e, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                AT("file"), DT("save")
              },
              children: BT("worldBuilder:downloadSchematic")
            })]
          })]
        }), "choose" !== FT && (0, MT.jsx)(RT, {
          type: rT,
          ownedSchematics: IT,
          onSubmit: (TT, oT, IT) => {
            "file" === rT ? XT(oT, TT) : "new" === rT ? kT(oT, IT, TT) : zT(xT, oT, IT, TT), iT()
          },
          onBack: () => {
            DT("choose")
          },
          prepopName: "existing" === rT ? null === (oT = IT.find((TT => TT.schematicId === xT))) || void 0 === oT ? void 0 : oT.name : null
        })]
      })
    }

    function RT(TT) {
      let {
        type: oT,
        prepopName: IT,
        ownedSchematics: iT,
        onSubmit: zT,
        onBack: kT
      } = TT;
      const {
        t: WT
      } = (0, cT.t)(), [XT, BT] = (0, ST.useState)(""), [DT, xT] = (0, ST.useState)(""), [KT, rT] = (0, ST.useState)(null), [AT, gT] = (0, ST.useState)(!0), eT = TT => {
        var IT;
        TT = null !== (IT = TT) && void 0 !== IT ? IT : XT;
        const zT = "new" === oT ? (0, mT.z)(TT) : null,
          kT = [...(0, mT.Mb)(TT), ...zT ? [zT] : []];
        return kT.length > 0 ? (rT(kT.join(", ")), !1) : "new" === oT && iT.find((oT => oT.name === TT)) ? (rT(WT("worldBuilder:schematicAlreadyExists")), !1) : (rT(null), !0)
      };
      return (0, MT.jsxs)("div", {
        className: "SaveSchematicWindow",
        children: [(0, MT.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: WT("general:name")
        }), (0, MT.jsx)(hT.e, {
          className: FT()("SaveSchematicName", {
            Error: KT
          }),
          forcedText: IT,
          onValueChange: TT => {
            BT(TT), eT(TT)
          },
          placeholderText: WT("worldBuilder:schematicNamePlaceholder"),
          maxLength: mT.zb
        }), (0, MT.jsx)("h2", {
          className: FT()("SaveSchematicError", {
            Hidden: !KT
          }),
          children: KT
        }), (0, MT.jsx)("h2", {
          className: FT()("SchematicPopupSubtitle", {
            Hidden: "file" === oT
          }),
          children: WT("general:description")
        }), (0, MT.jsx)(hT.e, {
          className: FT()("SaveSchematicDescription", {
            Hidden: "file" === oT
          }),
          onValueChange: xT,
          placeholderText: WT("worldBuilder:schematicDescriptionPlaceholder"),
          maxLength: mT.vb,
          useTextarea: !0
        }), (0, MT.jsxs)("div", {
          className: FT()("SaveSchematicCheckboxContainer", {
            WarningBorder: "existing" === oT
          }),
          children: [(0, MT.jsx)(wT.d, {
            checked: AT,
            onChange: TT => {
              gT(TT.target.checked)
            },
            disabled: !1,
            className: "SaveSchematicCheckbox"
          }), (0, MT.jsx)("h1", {
            className: "SchematicPopupSubtitle",
            children: WT("existing" === oT ? "worldBuilder:overwriteLobbyCode" : "worldBuilder:includeLobbyCode")
          })]
        }), "existing" === oT && (0, MT.jsx)("div", {
          className: "SaveSchematicLobbyCodeWarning",
          children: WT("worldBuilder:lobbyCodeWarning")
        }), (0, MT.jsxs)("div", {
          className: "SaveSchematicButtons",
          children: [(0, MT.jsx)(LT.m, {
            className: "SaveSchematicButton",
            onClick: () => {
              eT() && zT(AT, XT, DT)
            },
            children: WT("file" === oT ? "general:download" : "general:save")
          }), (0, MT.jsx)(LT.C, {
            className: "SaveSchematicButton",
            onClick: kT,
            children: WT("general:cancel")
          })]
        })]
      })
    }
    var uT = IT(1183),
      vT = IT(1665),
      ET = IT(1117);

    function fT(TT, oT) {
      if ("devDownloadJson" !== TT) ! function(TT, oT) {
        const IT = uT.clientSideServerUrls.getHttpUrlFromWebSocketUrl((0, kT.e)().websocketUrl);
        let XT = !1;
        const BT = async (TT, oT) => {
          if (XT) return;
          XT = !0;
          const {
            gameNameWithVariation: iT,
            lobbyName: WT
          } = (0, kT.e)(), BT = {
            gameNameWithVariation: iT,
            lobbyName: WT
          };
          return await (0, ET.postJsonWithMetricsCookiesAndJsonResponse)(`${IT}/schematic/${TT}`, zT.A[TT].toBuffer({
            ...BT,
            ...oT
          }), {
            retries: 1
          })
        };
        if ("Plugin|WorldBuilder|SaveSchematic" === TT) ! function(TT) {
          let {
            ownedSchematics: oT,
            onChosenDownload: IT,
            onChosenEdit: iT,
            onChosenNew: zT,
            onClose: kT
          } = TT;
          DT.NotificationProvider.showCustomPopup({
            body: TT => (0, MT.jsx)(eT, {
              ownedSchematics: oT,
              onChosenDownload: IT,
              onChosenEdit: iT,
              onChosenNew: zT,
              onClose: TT
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: kT,
            unlockPointerKey: "schematicSaverPopup"
          })
        }({
          ownedSchematics: oT,
          onChosenDownload: (TT, oT) => {
            BT("download-schematic", {
              name: TT,
              includeLobbyCode: oT
            }).then((oT => {
              let {
                buffer: {
                  data: IT
                }
              } = oT;
              const zT = iT.vc.from(IT);
              (0, vT.downloadBlob)(new Blob([zT], {
                type: "application/octet-stream"
              }), `${TT}.bloxdschem`)
            }))
          },
          onClose: () => {
            BT("cancel", {})
          },
          onChosenEdit: (TT, oT, IT, iT) => {
            BT("save-to-profile", {
              schematicId: TT,
              name: oT,
              description: IT,
              includeLobbyCode: iT
            })
          },
          onChosenNew: (TT, oT, IT) => {
            BT("save-to-profile", {
              schematicId: null,
              name: TT,
              description: oT,
              includeLobbyCode: IT
            })
          }
        });
        else if ("Plugin|WorldBuilder|LoadSchematic" === TT) ! function(TT) {
          let {
            ownedSchematics: oT,
            onChosenFile: IT,
            onChosenPreset: iT,
            onClose: zT
          } = TT;
          DT.NotificationProvider.showCustomPopup({
            body: TT => (0, MT.jsx)(AT, {
              ownedSchematics: oT,
              onChosenFile: IT,
              onChosenPreset: iT,
              onClose: TT
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: zT,
            unlockPointerKey: "schematicLoaderPopup"
          })
        }({
          ownedSchematics: oT,
          onChosenFile: async TT => {
            const oT = iT.vc.from(await TT.arrayBuffer()),
              {
                gameNameWithVariation: WT,
                lobbyName: XT
              } = (0, kT.e)();
            await (0, ET.postBinaryWithMetricsCookiesAndCustomResponse)(`${IT}/schematic/upload-schematic`, zT.A["upload-schematic"].toBuffer({
              gameNameWithVariation: WT,
              lobbyName: XT,
              schematic: oT
            }), {
              retries: 1
            }, ET.HttpPayloadType.json)
          },
          onChosenPreset: TT => {
            BT("load-from-profile", {
              schematicId: TT
            })
          },
          onClose: () => {
            BT("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ListSchematics" === TT)(0, WT.d)({
          ownedSchematics: Array.isArray(oT) ? oT : oT.schematics,
          currentWorldSchematicId: Array.isArray(oT) ? null : oT.currentWorldSchematicId,
          onClose: () => {
            BT("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ExportWorld" === TT) {
          var FT;
          const TT = null !== (FT = oT.schematic) && void 0 !== FT ? FT : oT;
          (0, gT.g)({
            schematic: TT,
            inSourceWorld: TT.schematicId === oT.currentWorldSchematicId,
            onClose: () => {
              BT("cancel", {})
            }
          })
        } else console.error(`Unknown plugin message type ${TT}`)
      }(TT, oT);
      else {
        const TT = JSON.stringify(oT.data, null, 2);
        (0, vT.downloadBlob)(new Blob([TT], {
          type: "application/json"
        }), oT.filename)
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);