export const id = 210;
export const ids = [210];
export const modules = {
  36151: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => IT,
      f: () => CT
    });
    var lT = cT(71),
      MT = cT(1363),
      KT = cT(1195),
      OT = cT(1348),
      yT = cT(3419),
      fT = cT(4880),
      xT = cT(1099);

    function IT(TT) {
      let {
        loading: kT,
        schematics: cT,
        onSchematicPicked: lT,
        selectedSchematicIdList: MT = [],
        disableAutoExport: fT
      } = TT;
      const {
        t: IT
      } = (0, KT.B)();
      return (0, xT.jsxs)("div", {
        className: "SchematicList",
        children: [kT && (0, xT.jsx)(OT.d, {}), !kT && 0 === cT.length && (0, xT.jsx)("div", {
          className: "NoSchematicsText",
          children: IT("worldBuilder:noSavedSchematic")
        }), !kT && cT.map((TT => (0, xT.jsx)(yT.d, {
          source: {
            type: "schematic",
            schematic: TT
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            lT(TT)
          },
          isSelected: MT.includes(TT.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: TT.isAutoExported && fT,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, TT.schematicId)))]
      })
    }

    function AT(TT) {
      let {
        ownedSchematics: kT,
        currentWorldSchematicId: cT,
        onClose: MT
      } = TT;
      const {
        t: OT
      } = (0, KT.B)(), [yT, AT] = (0, lT.useState)(null);
      return (0, xT.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === yT && (0, xT.jsxs)(xT.Fragment, {
          children: [(0, xT.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: OT("worldBuilder:schematicList")
          }), (0, xT.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: OT("worldBuilder:clickSchematicForOptions")
          }), (0, xT.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, xT.jsx)(IT, {
              loading: !1,
              schematics: kT,
              onSchematicPicked: TT => {
                AT(TT)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== yT && (0, xT.jsx)(fT.g, {
          schematic: yT,
          inSourceWorld: yT.schematicId === cT,
          onSchematicUpdate: TT => {
            AT(TT)
          },
          onClose: () => {
            AT(null), MT()
          }
        })]
      })
    }

    function CT(TT) {
      let {
        ownedSchematics: kT,
        currentWorldSchematicId: cT,
        onClose: lT
      } = TT;
      MT.NotificationProvider.showCustomPopup({
        body: TT => (0, xT.jsx)(AT, {
          ownedSchematics: kT,
          currentWorldSchematicId: cT,
          onClose: TT
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: lT,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  41307: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      runClientGameMessage: () => zT
    });
    var lT = cT(3719),
      MT = cT(3732),
      KT = cT(1327),
      OT = cT(36151),
      yT = cT(4909),
      fT = cT(1046),
      xT = cT.n(fT),
      IT = cT(71),
      AT = cT(1363),
      CT = cT(1470),
      jT = cT(339),
      vT = cT(1195),
      tT = cT(1061),
      hT = cT(1099);

    function NT(TT) {
      let {
        onFilePicked: kT
      } = TT;
      const {
        t: cT
      } = (0, vT.B)(), [lT, MT] = (0, IT.useState)(null), {
        getRootProps: KT,
        getInputProps: OT,
        isDragActive: fT
      } = (0, yT.c)({
        onDrop: TT => {
          TT.length > 0 && MT(TT[0])
        },
        useFsAccessApi: !1
      }), AT = lT && lT.size > 1024 * jT.gd;
      return (0, hT.jsxs)("div", {
        className: "SchematicUploadContainer",
        children: [(0, hT.jsxs)("div", {
          ...KT({
            className: xT()("SchematicUpload", {
              ActiveDrag: fT
            })
          }),
          children: [(0, hT.jsx)("input", {
            ...OT({
              accept: ".bloxdschem"
            })
          }), !fT && lT ? (0, hT.jsxs)(hT.Fragment, {
            children: [(0, hT.jsx)("div", {
              className: xT()("SchematicUploadIcon", "Active", {
                TooBig: AT
              }),
              children: (0, hT.jsx)(tT.e, {
                name: "file-lines"
              })
            }), (0, hT.jsx)("div", {
              className: "SchematicUploadInstructions Active",
              children: lT.name
            })]
          }) : (0, hT.jsxs)(hT.Fragment, {
            children: [(0, hT.jsx)("div", {
              className: "SchematicUploadIcon",
              children: (0, hT.jsx)(tT.e, {
                name: "up-from-bracket"
              })
            }), (0, hT.jsx)("div", {
              className: "SchematicUploadInstructions",
              children: cT("worldBuilder:dragAFileHere")
            })]
          })]
        }), (0, hT.jsx)(CT.m, {
          disabled: AT || !lT,
          className: "SchematicUploadButton",
          onClick: () => {
            !AT && lT && kT(lT)
          },
          children: AT ? cT("worldBuilder:fileTooBig", {
            maxSizeKb: jT.gd
          }) : cT("worldBuilder:upload")
        })]
      })
    }

    function QT(TT) {
      let {
        ownedSchematics: kT,
        onClose: cT,
        onChosenPreset: lT,
        onChosenFile: MT
      } = TT;
      const {
        t: KT
      } = (0, vT.B)();
      return (0, hT.jsxs)(hT.Fragment, {
        children: [(0, hT.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: KT("worldBuilder:loadSchematic")
        }), (0, hT.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: KT("worldBuilder:chooseOneOfYourSchematics")
        }), (0, hT.jsx)("div", {
          className: "SchematicPopupSchematicListContainer",
          children: (0, hT.jsx)(OT.e, {
            schematics: kT,
            onSchematicPicked: TT => {
              lT(TT.schematicId), cT()
            },
            loading: !1,
            disableAutoExport: !0
          })
        }), (0, hT.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: KT("worldBuilder:uploadNewSchematic")
        }), (0, hT.jsx)(NT, {
          onFilePicked: async TT => {
            try {
              await MT(TT)
            } catch (kT) {
              console.warn("Schematic upload failed", kT)
            } finally {
              cT()
            }
          }
        })]
      })
    }
    var ST = cT(4880),
      DT = cT(1692),
      aT = cT(4355),
      FT = cT(1226);

    function rT(TT) {
      var kT;
      let {
        ownedSchematics: cT,
        onClose: lT,
        onChosenEdit: MT,
        onChosenNew: KT,
        onChosenDownload: yT
      } = TT;
      const {
        t: fT
      } = (0, vT.B)(), [xT, AT] = (0, IT.useState)("choose"), [jT, tT] = (0, IT.useState)(null), [NT, QT] = (0, IT.useState)(null);
      return (0, hT.jsxs)(hT.Fragment, {
        children: [(0, hT.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: fT("worldBuilder:saveSchematic")
        }), "choose" === xT && (0, hT.jsxs)(hT.Fragment, {
          children: [(0, hT.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: fT("worldBuilder:overwriteOneOfYourSchematics")
          }), (0, hT.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, hT.jsx)(OT.e, {
              schematics: cT,
              onSchematicPicked: TT => {
                tT(TT.schematicId), QT("existing"), AT("save")
              },
              loading: !1,
              disableAutoExport: !1
            })
          }), (0, hT.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: fT("general:otherOptions")
          }), (0, hT.jsxs)("div", {
            className: "OtherOptions",
            children: [(0, hT.jsx)(CT.m, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                QT("new"), AT("save")
              },
              children: fT("worldBuilder:saveAsNewSchematic")
            }), (0, hT.jsx)(CT.e, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                QT("file"), AT("save")
              },
              children: fT("worldBuilder:downloadSchematic")
            })]
          })]
        }), "choose" !== xT && (0, hT.jsx)(PT, {
          type: NT,
          ownedSchematics: cT,
          onSubmit: (TT, kT, cT) => {
            "file" === NT ? yT(kT, TT) : "new" === NT ? KT(kT, cT, TT) : MT(jT, kT, cT, TT), lT()
          },
          onBack: () => {
            AT("choose")
          },
          prepopName: "existing" === NT ? null === (kT = cT.find((TT => TT.schematicId === jT))) || void 0 === kT ? void 0 : kT.name : null
        })]
      })
    }

    function PT(TT) {
      let {
        type: kT,
        prepopName: cT,
        ownedSchematics: lT,
        onSubmit: MT,
        onBack: KT
      } = TT;
      const {
        t: OT
      } = (0, vT.B)(), [yT, fT] = (0, IT.useState)(""), [AT, jT] = (0, IT.useState)(""), [tT, NT] = (0, IT.useState)(null), [QT, ST] = (0, IT.useState)(!0), rT = TT => {
        var cT;
        TT = null !== (cT = TT) && void 0 !== cT ? cT : yT;
        const MT = "new" === kT ? (0, FT.z)(TT) : null,
          KT = [...(0, FT.Jb)(TT), ...MT ? [MT] : []];
        return KT.length > 0 ? (NT(KT.join(", ")), !1) : "new" === kT && lT.find((kT => kT.name === TT)) ? (NT(OT("worldBuilder:schematicAlreadyExists")), !1) : (NT(null), !0)
      };
      return (0, hT.jsxs)("div", {
        className: "SaveSchematicWindow",
        children: [(0, hT.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: OT("general:name")
        }), (0, hT.jsx)(DT.b, {
          className: xT()("SaveSchematicName", {
            Error: tT
          }),
          forcedText: cT,
          onValueChange: TT => {
            fT(TT), rT(TT)
          },
          placeholderText: OT("worldBuilder:schematicNamePlaceholder"),
          maxLength: FT.zb
        }), (0, hT.jsx)("h2", {
          className: xT()("SaveSchematicError", {
            Hidden: !tT
          }),
          children: tT
        }), (0, hT.jsx)("h2", {
          className: xT()("SchematicPopupSubtitle", {
            Hidden: "file" === kT
          }),
          children: OT("general:description")
        }), (0, hT.jsx)(DT.b, {
          className: xT()("SaveSchematicDescription", {
            Hidden: "file" === kT
          }),
          onValueChange: jT,
          placeholderText: OT("worldBuilder:schematicDescriptionPlaceholder"),
          maxLength: FT.vb,
          useTextarea: !0
        }), (0, hT.jsxs)("div", {
          className: xT()("SaveSchematicCheckboxContainer", {
            WarningBorder: "existing" === kT
          }),
          children: [(0, hT.jsx)(aT.d, {
            checked: QT,
            onChange: TT => {
              ST(TT.target.checked)
            },
            disabled: !1,
            className: "SaveSchematicCheckbox"
          }), (0, hT.jsx)("h1", {
            className: "SchematicPopupSubtitle",
            children: OT("existing" === kT ? "worldBuilder:overwriteLobbyCode" : "worldBuilder:includeLobbyCode")
          })]
        }), "existing" === kT && (0, hT.jsx)("div", {
          className: "SaveSchematicLobbyCodeWarning",
          children: OT("worldBuilder:lobbyCodeWarning")
        }), (0, hT.jsxs)("div", {
          className: "SaveSchematicButtons",
          children: [(0, hT.jsx)(CT.m, {
            className: "SaveSchematicButton",
            onClick: () => {
              rT() && MT(QT, yT, AT)
            },
            children: OT("file" === kT ? "general:download" : "general:save")
          }), (0, hT.jsx)(CT.I, {
            className: "SaveSchematicButton",
            onClick: KT,
            children: OT("general:cancel")
          })]
        })]
      })
    }
    var wT = cT(1202),
      mT = cT(1741),
      bT = cT(1136);

    function zT(TT, kT) {
      if ("devDownloadJson" !== TT) ! function(TT, kT) {
        const cT = wT.clientSideServerUrls.getHttpUrlFromWebSocketUrl((0, KT.b)().websocketUrl);
        let yT = !1;
        const fT = async (TT, kT) => {
          if (yT) return;
          yT = !0;
          const {
            gameNameWithVariation: lT,
            lobbyName: OT
          } = (0, KT.b)(), fT = {
            gameNameWithVariation: lT,
            lobbyName: OT
          };
          return await (0, bT.postJsonWithMetricsCookiesAndJsonResponse)(`${cT}/schematic/${TT}`, MT.E[TT].toBuffer({
            ...fT,
            ...kT
          }), {
            retries: 1
          })
        };
        if ("Plugin|WorldBuilder|SaveSchematic" === TT) ! function(TT) {
          let {
            ownedSchematics: kT,
            onChosenDownload: cT,
            onChosenEdit: lT,
            onChosenNew: MT,
            onClose: KT
          } = TT;
          AT.NotificationProvider.showCustomPopup({
            body: TT => (0, hT.jsx)(rT, {
              ownedSchematics: kT,
              onChosenDownload: cT,
              onChosenEdit: lT,
              onChosenNew: MT,
              onClose: TT
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: KT,
            unlockPointerKey: "schematicSaverPopup"
          })
        }({
          ownedSchematics: kT,
          onChosenDownload: (TT, kT) => {
            fT("download-schematic", {
              name: TT,
              includeLobbyCode: kT
            }).then((kT => {
              let {
                buffer: {
                  data: cT
                }
              } = kT;
              const MT = lT.Ov.from(cT);
              (0, mT.downloadBlob)(new Blob([MT], {
                type: "application/octet-stream"
              }), `${TT}.bloxdschem`)
            }))
          },
          onClose: () => {
            fT("cancel", {})
          },
          onChosenEdit: (TT, kT, cT, lT) => {
            fT("save-to-profile", {
              schematicId: TT,
              name: kT,
              description: cT,
              includeLobbyCode: lT
            })
          },
          onChosenNew: (TT, kT, cT) => {
            fT("save-to-profile", {
              schematicId: null,
              name: TT,
              description: kT,
              includeLobbyCode: cT
            })
          }
        });
        else if ("Plugin|WorldBuilder|LoadSchematic" === TT) ! function(TT) {
          let {
            ownedSchematics: kT,
            onChosenFile: cT,
            onChosenPreset: lT,
            onClose: MT
          } = TT;
          AT.NotificationProvider.showCustomPopup({
            body: TT => (0, hT.jsx)(QT, {
              ownedSchematics: kT,
              onChosenFile: cT,
              onChosenPreset: lT,
              onClose: TT
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: MT,
            unlockPointerKey: "schematicLoaderPopup"
          })
        }({
          ownedSchematics: kT,
          onChosenFile: async TT => {
            const kT = lT.Ov.from(await TT.arrayBuffer()),
              {
                gameNameWithVariation: OT,
                lobbyName: yT
              } = (0, KT.b)();
            await (0, bT.postBinaryWithMetricsCookiesAndCustomResponse)(`${cT}/schematic/upload-schematic`, MT.E["upload-schematic"].toBuffer({
              gameNameWithVariation: OT,
              lobbyName: yT,
              schematic: kT
            }), {
              retries: 1
            }, bT.HttpPayloadType.json)
          },
          onChosenPreset: TT => {
            fT("load-from-profile", {
              schematicId: TT
            })
          },
          onClose: () => {
            fT("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ListSchematics" === TT)(0, OT.f)({
          ownedSchematics: Array.isArray(kT) ? kT : kT.schematics,
          currentWorldSchematicId: Array.isArray(kT) ? null : kT.currentWorldSchematicId,
          onClose: () => {
            fT("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ExportWorld" === TT) {
          var xT;
          const TT = null !== (xT = kT.schematic) && void 0 !== xT ? xT : kT;
          (0, ST.h)({
            schematic: TT,
            inSourceWorld: TT.schematicId === kT.currentWorldSchematicId,
            onClose: () => {
              fT("cancel", {})
            }
          })
        } else console.error(`Unknown plugin message type ${TT}`)
      }(TT, kT);
      else {
        const TT = JSON.stringify(kT.data, null, 2);
        (0, mT.downloadBlob)(new Blob([TT], {
          type: "application/json"
        }), kT.filename)
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);