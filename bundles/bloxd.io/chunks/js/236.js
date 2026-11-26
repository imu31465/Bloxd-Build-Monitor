export const id = 236;
export const ids = [236];
export const modules = {
  37493: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => wV,
      d: () => vV
    });
    var JV = xV(62),
      YV = xV(1439),
      UV = xV(1220),
      yV = xV(1408),
      pV = xV(3922),
      QV = xV(5425),
      nV = xV(1321);

    function wV(VV) {
      let {
        loading: eV,
        schematics: xV,
        onSchematicPicked: JV,
        selectedSchematicIdList: YV = [],
        disableAutoExport: QV
      } = VV;
      const {
        t: wV
      } = (0, UV.A)();
      return (0, nV.jsxs)("div", {
        className: "SchematicList",
        children: [eV && (0, nV.jsx)(yV.d, {}), !eV && 0 === xV.length && (0, nV.jsx)("div", {
          className: "NoSchematicsText",
          children: wV("worldBuilder:noSavedSchematic")
        }), !eV && xV.map((VV => (0, nV.jsx)(pV.g, {
          source: {
            type: "schematic",
            schematic: VV
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            JV(VV)
          },
          isSelected: YV.includes(VV.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: VV.isAutoExported && QV,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, VV.schematicId)))]
      })
    }

    function ZV(VV) {
      let {
        ownedSchematics: eV,
        currentWorldSchematicId: xV,
        onClose: YV
      } = VV;
      const {
        t: yV
      } = (0, UV.A)(), [pV, ZV] = (0, JV.useState)(null);
      return (0, nV.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === pV && (0, nV.jsxs)(nV.Fragment, {
          children: [(0, nV.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: yV("worldBuilder:schematicList")
          }), (0, nV.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: yV("worldBuilder:clickSchematicForOptions")
          }), (0, nV.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, nV.jsx)(wV, {
              loading: !1,
              schematics: eV,
              onSchematicPicked: VV => {
                ZV(VV)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== pV && (0, nV.jsx)(QV.i, {
          schematic: pV,
          inSourceWorld: pV.schematicId === xV,
          onSchematicUpdate: VV => {
            ZV(VV)
          },
          onClose: () => {
            ZV(null), YV()
          }
        })]
      })
    }

    function vV(VV) {
      let {
        ownedSchematics: eV,
        currentWorldSchematicId: xV,
        onClose: JV
      } = VV;
      YV.NotificationProvider.showCustomPopup({
        body: VV => (0, nV.jsx)(ZV, {
          ownedSchematics: eV,
          currentWorldSchematicId: xV,
          onClose: VV
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: JV,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  44630: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      runClientGameMessage: () => zV
    });
    var JV = xV(4148),
      YV = xV(4163),
      UV = xV(1391),
      yV = xV(37493),
      pV = xV(5448),
      QV = xV(1146),
      nV = xV.n(QV),
      wV = xV(62),
      ZV = xV(1439),
      vV = xV(1551),
      rV = xV(375),
      kV = xV(1220),
      bV = xV(1414),
      EV = xV(1321);

    function BV(VV) {
      let {
        onFilePicked: eV
      } = VV;
      const {
        t: xV
      } = (0, kV.A)(), [JV, YV] = (0, wV.useState)(null), {
        getRootProps: UV,
        getInputProps: yV,
        isDragActive: QV
      } = (0, pV.e)({
        onDrop: VV => {
          VV.length > 0 && YV(VV[0])
        },
        useFsAccessApi: !1
      }), ZV = JV && JV.size > 1024 * rV.ad;
      return (0, EV.jsxs)("div", {
        className: "SchematicUploadContainer",
        children: [(0, EV.jsxs)("div", {
          ...UV({
            className: nV()("SchematicUpload", {
              ActiveDrag: QV
            })
          }),
          children: [(0, EV.jsx)("input", {
            ...yV({
              accept: ".bloxdschem"
            })
          }), !QV && JV ? (0, EV.jsxs)(EV.Fragment, {
            children: [(0, EV.jsx)("div", {
              className: nV()("SchematicUploadIcon", "Active", {
                TooBig: ZV
              }),
              children: (0, EV.jsx)(bV.b, {
                name: "file-lines"
              })
            }), (0, EV.jsx)("div", {
              className: "SchematicUploadInstructions Active",
              children: JV.name
            })]
          }) : (0, EV.jsxs)(EV.Fragment, {
            children: [(0, EV.jsx)("div", {
              className: "SchematicUploadIcon",
              children: (0, EV.jsx)(bV.b, {
                name: "up-from-bracket"
              })
            }), (0, EV.jsx)("div", {
              className: "SchematicUploadInstructions",
              children: xV("worldBuilder:dragAFileHere")
            })]
          })]
        }), (0, EV.jsx)(vV.m, {
          disabled: ZV || !JV,
          className: "SchematicUploadButton",
          onClick: () => {
            !ZV && JV && eV(JV)
          },
          children: ZV ? xV("worldBuilder:fileTooBig", {
            maxSizeKb: rV.ad
          }) : xV("worldBuilder:upload")
        })]
      })
    }

    function jV(VV) {
      let {
        ownedSchematics: eV,
        onClose: xV,
        onChosenPreset: JV,
        onChosenFile: YV
      } = VV;
      const {
        t: UV
      } = (0, kV.A)();
      return (0, EV.jsxs)(EV.Fragment, {
        children: [(0, EV.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: UV("worldBuilder:loadSchematic")
        }), (0, EV.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: UV("worldBuilder:chooseOneOfYourSchematics")
        }), (0, EV.jsx)("div", {
          className: "SchematicPopupSchematicListContainer",
          children: (0, EV.jsx)(yV.c, {
            schematics: eV,
            onSchematicPicked: VV => {
              JV(VV.schematicId), xV()
            },
            loading: !1,
            disableAutoExport: !0
          })
        }), (0, EV.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: UV("worldBuilder:uploadNewSchematic")
        }), (0, EV.jsx)(BV, {
          onFilePicked: async VV => {
            try {
              await YV(VV)
            } catch (eV) {
              console.warn("Schematic upload failed", eV)
            } finally {
              xV()
            }
          }
        })]
      })
    }
    var qV = xV(5425),
      tV = xV(1772),
      FV = xV(4795),
      TV = xV(1252);

    function PV(VV) {
      var eV;
      let {
        ownedSchematics: xV,
        onClose: JV,
        onChosenEdit: YV,
        onChosenNew: UV,
        onChosenDownload: pV
      } = VV;
      const {
        t: QV
      } = (0, kV.A)(), [nV, ZV] = (0, wV.useState)("choose"), [rV, bV] = (0, wV.useState)(null), [BV, jV] = (0, wV.useState)(null);
      return (0, EV.jsxs)(EV.Fragment, {
        children: [(0, EV.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: QV("worldBuilder:saveSchematic")
        }), "choose" === nV && (0, EV.jsxs)(EV.Fragment, {
          children: [(0, EV.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: QV("worldBuilder:overwriteOneOfYourSchematics")
          }), (0, EV.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, EV.jsx)(yV.c, {
              schematics: xV,
              onSchematicPicked: VV => {
                bV(VV.schematicId), jV("existing"), ZV("save")
              },
              loading: !1,
              disableAutoExport: !1
            })
          }), (0, EV.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: QV("general:otherOptions")
          }), (0, EV.jsxs)("div", {
            className: "OtherOptions",
            children: [(0, EV.jsx)(vV.m, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                jV("new"), ZV("save")
              },
              children: QV("worldBuilder:saveAsNewSchematic")
            }), (0, EV.jsx)(vV.f, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                jV("file"), ZV("save")
              },
              children: QV("worldBuilder:downloadSchematic")
            })]
          })]
        }), "choose" !== nV && (0, EV.jsx)(AV, {
          type: BV,
          ownedSchematics: xV,
          onSubmit: (VV, eV, xV) => {
            "file" === BV ? pV(eV, VV) : "new" === BV ? UV(eV, xV, VV) : YV(rV, eV, xV, VV), JV()
          },
          onBack: () => {
            ZV("choose")
          },
          prepopName: "existing" === BV ? null === (eV = xV.find((VV => VV.schematicId === rV))) || void 0 === eV ? void 0 : eV.name : null
        })]
      })
    }

    function AV(VV) {
      let {
        type: eV,
        prepopName: xV,
        ownedSchematics: JV,
        onSubmit: YV,
        onBack: UV
      } = VV;
      const {
        t: yV
      } = (0, kV.A)(), [pV, QV] = (0, wV.useState)(""), [ZV, rV] = (0, wV.useState)(""), [bV, BV] = (0, wV.useState)(null), [jV, qV] = (0, wV.useState)(!0), PV = VV => {
        var xV;
        VV = null !== (xV = VV) && void 0 !== xV ? xV : pV;
        const YV = "new" === eV ? (0, TV.x)(VV) : null,
          UV = [...(0, TV.vb)(VV), ...YV ? [YV] : []];
        return UV.length > 0 ? (BV(UV.join(", ")), !1) : "new" === eV && JV.find((eV => eV.name === VV)) ? (BV(yV("worldBuilder:schematicAlreadyExists")), !1) : (BV(null), !0)
      };
      return (0, EV.jsxs)("div", {
        className: "SaveSchematicWindow",
        children: [(0, EV.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: yV("general:name")
        }), (0, EV.jsx)(tV.d, {
          className: nV()("SaveSchematicName", {
            Error: bV
          }),
          forcedText: xV,
          onValueChange: VV => {
            QV(VV), PV(VV)
          },
          placeholderText: yV("worldBuilder:schematicNamePlaceholder"),
          maxLength: TV.mb
        }), (0, EV.jsx)("h2", {
          className: nV()("SaveSchematicError", {
            Hidden: !bV
          }),
          children: bV
        }), (0, EV.jsx)("h2", {
          className: nV()("SchematicPopupSubtitle", {
            Hidden: "file" === eV
          }),
          children: yV("general:description")
        }), (0, EV.jsx)(tV.d, {
          className: nV()("SaveSchematicDescription", {
            Hidden: "file" === eV
          }),
          onValueChange: rV,
          placeholderText: yV("worldBuilder:schematicDescriptionPlaceholder"),
          maxLength: TV.ib,
          useTextarea: !0
        }), (0, EV.jsxs)("div", {
          className: nV()("SaveSchematicCheckboxContainer", {
            WarningBorder: "existing" === eV
          }),
          children: [(0, EV.jsx)(FV.b, {
            checked: jV,
            onChange: VV => {
              qV(VV.target.checked)
            },
            disabled: !1,
            className: "SaveSchematicCheckbox"
          }), (0, EV.jsx)("h1", {
            className: "SchematicPopupSubtitle",
            children: yV("existing" === eV ? "worldBuilder:overwriteLobbyCode" : "worldBuilder:includeLobbyCode")
          })]
        }), "existing" === eV && (0, EV.jsx)("div", {
          className: "SaveSchematicLobbyCodeWarning",
          children: yV("worldBuilder:lobbyCodeWarning")
        }), (0, EV.jsxs)("div", {
          className: "SaveSchematicButtons",
          children: [(0, EV.jsx)(vV.m, {
            className: "SaveSchematicButton",
            onClick: () => {
              PV() && YV(jV, pV, ZV)
            },
            children: yV("file" === eV ? "general:download" : "general:save")
          }), (0, EV.jsx)(vV.E, {
            className: "SaveSchematicButton",
            onClick: UV,
            children: yV("general:cancel")
          })]
        })]
      })
    }
    var NV = xV(1230),
      XV = xV(1838),
      MV = xV(1173);

    function zV(VV, eV) {
      if ("devDownloadJson" !== VV) ! function(VV, eV) {
        const xV = NV.clientSideServerUrls.getHttpUrlFromWebSocketUrl((0, UV.e)().websocketUrl);
        let pV = !1;
        const QV = async (VV, eV) => {
          if (pV) return;
          pV = !0;
          const {
            gameNameWithVariation: JV,
            lobbyName: yV
          } = (0, UV.e)(), QV = {
            gameNameWithVariation: JV,
            lobbyName: yV
          };
          return await (0, MV.postJsonWithMetricsCookiesAndJsonResponse)(`${xV}/schematic/${VV}`, YV.A[VV].toBuffer({
            ...QV,
            ...eV
          }), {
            retries: 1
          })
        };
        if ("Plugin|WorldBuilder|SaveSchematic" === VV) ! function(VV) {
          let {
            ownedSchematics: eV,
            onChosenDownload: xV,
            onChosenEdit: JV,
            onChosenNew: YV,
            onClose: UV
          } = VV;
          ZV.NotificationProvider.showCustomPopup({
            body: VV => (0, EV.jsx)(PV, {
              ownedSchematics: eV,
              onChosenDownload: xV,
              onChosenEdit: JV,
              onChosenNew: YV,
              onClose: VV
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: UV,
            unlockPointerKey: "schematicSaverPopup"
          })
        }({
          ownedSchematics: eV,
          onChosenDownload: (VV, eV) => {
            QV("download-schematic", {
              name: VV,
              includeLobbyCode: eV
            }).then((eV => {
              let {
                buffer: {
                  data: xV
                }
              } = eV;
              const YV = JV.nZ.from(xV);
              (0, XV.downloadBlob)(new Blob([YV], {
                type: "application/octet-stream"
              }), `${VV}.bloxdschem`)
            }))
          },
          onClose: () => {
            QV("cancel", {})
          },
          onChosenEdit: (VV, eV, xV, JV) => {
            QV("save-to-profile", {
              schematicId: VV,
              name: eV,
              description: xV,
              includeLobbyCode: JV
            })
          },
          onChosenNew: (VV, eV, xV) => {
            QV("save-to-profile", {
              schematicId: null,
              name: VV,
              description: eV,
              includeLobbyCode: xV
            })
          }
        });
        else if ("Plugin|WorldBuilder|LoadSchematic" === VV) ! function(VV) {
          let {
            ownedSchematics: eV,
            onChosenFile: xV,
            onChosenPreset: JV,
            onClose: YV
          } = VV;
          ZV.NotificationProvider.showCustomPopup({
            body: VV => (0, EV.jsx)(jV, {
              ownedSchematics: eV,
              onChosenFile: xV,
              onChosenPreset: JV,
              onClose: VV
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: YV,
            unlockPointerKey: "schematicLoaderPopup"
          })
        }({
          ownedSchematics: eV,
          onChosenFile: async VV => {
            const eV = JV.nZ.from(await VV.arrayBuffer()),
              {
                gameNameWithVariation: yV,
                lobbyName: pV
              } = (0, UV.e)();
            await (0, MV.postBinaryWithMetricsCookiesAndCustomResponse)(`${xV}/schematic/upload-schematic`, YV.A["upload-schematic"].toBuffer({
              gameNameWithVariation: yV,
              lobbyName: pV,
              schematic: eV
            }), {
              retries: 1
            }, MV.HttpPayloadType.json)
          },
          onChosenPreset: VV => {
            QV("load-from-profile", {
              schematicId: VV
            })
          },
          onClose: () => {
            QV("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ListSchematics" === VV)(0, yV.d)({
          ownedSchematics: Array.isArray(eV) ? eV : eV.schematics,
          currentWorldSchematicId: Array.isArray(eV) ? null : eV.currentWorldSchematicId,
          onClose: () => {
            QV("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ExportWorld" === VV) {
          var nV;
          const VV = null !== (nV = eV.schematic) && void 0 !== nV ? nV : eV;
          (0, qV.k)({
            schematic: VV,
            inSourceWorld: VV.schematicId === eV.currentWorldSchematicId,
            onClose: () => {
              QV("cancel", {})
            }
          })
        } else console.error(`Unknown plugin message type ${VV}`)
      }(VV, eV);
      else {
        const VV = JSON.stringify(eV.data, null, 2);
        (0, XV.downloadBlob)(new Blob([VV], {
          type: "application/json"
        }), eV.filename)
      }
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);