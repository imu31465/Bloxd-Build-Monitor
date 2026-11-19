export const id = 205;
export const ids = [205];
export const modules = {
  35782: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => vY,
      d: () => sY
    });
    var FY = DY(61),
      AY = DY(1346),
      IY = DY(1211),
      RY = DY(1337),
      OY = DY(3061),
      gY = DY(4507),
      aY = DY(1125);

    function vY(YY) {
      let {
        loading: rY,
        schematics: DY,
        onSchematicPicked: FY,
        selectedSchematicIdList: AY = [],
        disableAutoExport: gY
      } = YY;
      const {
        t: vY
      } = (0, IY.C)();
      return (0, aY.jsxs)("div", {
        className: "SchematicList",
        children: [rY && (0, aY.jsx)(RY.c, {}), !rY && 0 === DY.length && (0, aY.jsx)("div", {
          className: "NoSchematicsText",
          children: vY("worldBuilder:noSavedSchematic")
        }), !rY && DY.map((YY => (0, aY.jsx)(OY.g, {
          source: {
            type: "schematic",
            schematic: YY
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            FY(YY)
          },
          isSelected: AY.includes(YY.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: YY.isAutoExported && gY,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, YY.schematicId)))]
      })
    }

    function uY(YY) {
      let {
        ownedSchematics: rY,
        currentWorldSchematicId: DY,
        onClose: AY
      } = YY;
      const {
        t: RY
      } = (0, IY.C)(), [OY, uY] = (0, FY.useState)(null);
      return (0, aY.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === OY && (0, aY.jsxs)(aY.Fragment, {
          children: [(0, aY.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: RY("worldBuilder:schematicList")
          }), (0, aY.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: RY("worldBuilder:clickSchematicForOptions")
          }), (0, aY.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, aY.jsx)(vY, {
              loading: !1,
              schematics: rY,
              onSchematicPicked: YY => {
                uY(YY)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== OY && (0, aY.jsx)(gY.g, {
          schematic: OY,
          inSourceWorld: OY.schematicId === DY,
          onSchematicUpdate: YY => {
            uY(YY)
          },
          onClose: () => {
            uY(null), AY()
          }
        })]
      })
    }

    function sY(YY) {
      let {
        ownedSchematics: rY,
        currentWorldSchematicId: DY,
        onClose: FY
      } = YY;
      AY.NotificationProvider.showCustomPopup({
        body: YY => (0, aY.jsx)(uY, {
          ownedSchematics: rY,
          currentWorldSchematicId: DY,
          onClose: YY
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: FY,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  40802: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      runClientGameMessage: () => KY
    });
    var FY = DY(3353),
      AY = DY(3366),
      IY = DY(1322),
      RY = DY(35782),
      OY = DY(4536),
      gY = DY(1092),
      aY = DY.n(gY),
      vY = DY(61),
      uY = DY(1346),
      sY = DY(1437),
      iY = DY(341),
      yY = DY(1211),
      QY = DY(1098),
      oY = DY(1125);

    function WY(YY) {
      let {
        onFilePicked: rY
      } = YY;
      const {
        t: DY
      } = (0, yY.C)(), [FY, AY] = (0, vY.useState)(null), {
        getRootProps: IY,
        getInputProps: RY,
        isDragActive: gY
      } = (0, OY.d)({
        onDrop: YY => {
          YY.length > 0 && AY(YY[0])
        },
        useFsAccessApi: !1
      }), uY = FY && FY.size > 1024 * iY.Wc;
      return (0, oY.jsxs)("div", {
        className: "SchematicUploadContainer",
        children: [(0, oY.jsxs)("div", {
          ...IY({
            className: aY()("SchematicUpload", {
              ActiveDrag: gY
            })
          }),
          children: [(0, oY.jsx)("input", {
            ...RY({
              accept: ".bloxdschem"
            })
          }), !gY && FY ? (0, oY.jsxs)(oY.Fragment, {
            children: [(0, oY.jsx)("div", {
              className: aY()("SchematicUploadIcon", "Active", {
                TooBig: uY
              }),
              children: (0, oY.jsx)(QY.e, {
                name: "file-lines"
              })
            }), (0, oY.jsx)("div", {
              className: "SchematicUploadInstructions Active",
              children: FY.name
            })]
          }) : (0, oY.jsxs)(oY.Fragment, {
            children: [(0, oY.jsx)("div", {
              className: "SchematicUploadIcon",
              children: (0, oY.jsx)(QY.e, {
                name: "up-from-bracket"
              })
            }), (0, oY.jsx)("div", {
              className: "SchematicUploadInstructions",
              children: DY("worldBuilder:dragAFileHere")
            })]
          })]
        }), (0, oY.jsx)(sY.n, {
          disabled: uY || !FY,
          className: "SchematicUploadButton",
          onClick: () => {
            !uY && FY && rY(FY)
          },
          children: uY ? DY("worldBuilder:fileTooBig", {
            maxSizeKb: iY.Wc
          }) : DY("worldBuilder:upload")
        })]
      })
    }

    function EY(YY) {
      let {
        ownedSchematics: rY,
        onClose: DY,
        onChosenPreset: FY,
        onChosenFile: AY
      } = YY;
      const {
        t: IY
      } = (0, yY.C)();
      return (0, oY.jsxs)(oY.Fragment, {
        children: [(0, oY.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: IY("worldBuilder:loadSchematic")
        }), (0, oY.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: IY("worldBuilder:chooseOneOfYourSchematics")
        }), (0, oY.jsx)("div", {
          className: "SchematicPopupSchematicListContainer",
          children: (0, oY.jsx)(RY.b, {
            schematics: rY,
            onSchematicPicked: YY => {
              FY(YY.schematicId), DY()
            },
            loading: !1,
            disableAutoExport: !0
          })
        }), (0, oY.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: IY("worldBuilder:uploadNewSchematic")
        }), (0, oY.jsx)(WY, {
          onFilePicked: async YY => {
            try {
              await AY(YY)
            } catch (rY) {
              console.warn("Schematic upload failed", rY)
            } finally {
              DY()
            }
          }
        })]
      })
    }
    var mY = DY(4507),
      VY = DY(1654),
      SY = DY(3920),
      lY = DY(1231);

    function TY(YY) {
      var rY;
      let {
        ownedSchematics: DY,
        onClose: FY,
        onChosenEdit: AY,
        onChosenNew: IY,
        onChosenDownload: OY
      } = YY;
      const {
        t: gY
      } = (0, yY.C)(), [aY, uY] = (0, vY.useState)("choose"), [iY, QY] = (0, vY.useState)(null), [WY, EY] = (0, vY.useState)(null);
      return (0, oY.jsxs)(oY.Fragment, {
        children: [(0, oY.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: gY("worldBuilder:saveSchematic")
        }), "choose" === aY && (0, oY.jsxs)(oY.Fragment, {
          children: [(0, oY.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: gY("worldBuilder:overwriteOneOfYourSchematics")
          }), (0, oY.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, oY.jsx)(RY.b, {
              schematics: DY,
              onSchematicPicked: YY => {
                QY(YY.schematicId), EY("existing"), uY("save")
              },
              loading: !1,
              disableAutoExport: !1
            })
          }), (0, oY.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: gY("general:otherOptions")
          }), (0, oY.jsxs)("div", {
            className: "OtherOptions",
            children: [(0, oY.jsx)(sY.n, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                EY("new"), uY("save")
              },
              children: gY("worldBuilder:saveAsNewSchematic")
            }), (0, oY.jsx)(sY.f, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                EY("file"), uY("save")
              },
              children: gY("worldBuilder:downloadSchematic")
            })]
          })]
        }), "choose" !== aY && (0, oY.jsx)(eY, {
          type: WY,
          ownedSchematics: DY,
          onSubmit: (YY, rY, DY) => {
            "file" === WY ? OY(rY, YY) : "new" === WY ? IY(rY, DY, YY) : AY(iY, rY, DY, YY), FY()
          },
          onBack: () => {
            uY("choose")
          },
          prepopName: "existing" === WY ? null === (rY = DY.find((YY => YY.schematicId === iY))) || void 0 === rY ? void 0 : rY.name : null
        })]
      })
    }

    function eY(YY) {
      let {
        type: rY,
        prepopName: DY,
        ownedSchematics: FY,
        onSubmit: AY,
        onBack: IY
      } = YY;
      const {
        t: RY
      } = (0, yY.C)(), [OY, gY] = (0, vY.useState)(""), [uY, iY] = (0, vY.useState)(""), [QY, WY] = (0, vY.useState)(null), [EY, mY] = (0, vY.useState)(!0), TY = YY => {
        var DY;
        YY = null !== (DY = YY) && void 0 !== DY ? DY : OY;
        const AY = "new" === rY ? (0, lY.D)(YY) : null,
          IY = [...(0, lY.Ab)(YY), ...AY ? [AY] : []];
        return IY.length > 0 ? (WY(IY.join(", ")), !1) : "new" === rY && FY.find((rY => rY.name === YY)) ? (WY(RY("worldBuilder:schematicAlreadyExists")), !1) : (WY(null), !0)
      };
      return (0, oY.jsxs)("div", {
        className: "SaveSchematicWindow",
        children: [(0, oY.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: RY("general:name")
        }), (0, oY.jsx)(VY.d, {
          className: aY()("SaveSchematicName", {
            Error: QY
          }),
          forcedText: DY,
          onValueChange: YY => {
            gY(YY), TY(YY)
          },
          placeholderText: RY("worldBuilder:schematicNamePlaceholder"),
          maxLength: lY.sb
        }), (0, oY.jsx)("h2", {
          className: aY()("SaveSchematicError", {
            Hidden: !QY
          }),
          children: QY
        }), (0, oY.jsx)("h2", {
          className: aY()("SchematicPopupSubtitle", {
            Hidden: "file" === rY
          }),
          children: RY("general:description")
        }), (0, oY.jsx)(VY.d, {
          className: aY()("SaveSchematicDescription", {
            Hidden: "file" === rY
          }),
          onValueChange: iY,
          placeholderText: RY("worldBuilder:schematicDescriptionPlaceholder"),
          maxLength: lY.qb,
          useTextarea: !0
        }), (0, oY.jsxs)("div", {
          className: aY()("SaveSchematicCheckboxContainer", {
            WarningBorder: "existing" === rY
          }),
          children: [(0, oY.jsx)(SY.d, {
            checked: EY,
            onChange: YY => {
              mY(YY.target.checked)
            },
            disabled: !1,
            className: "SaveSchematicCheckbox"
          }), (0, oY.jsx)("h1", {
            className: "SchematicPopupSubtitle",
            children: RY("existing" === rY ? "worldBuilder:overwriteLobbyCode" : "worldBuilder:includeLobbyCode")
          })]
        }), "existing" === rY && (0, oY.jsx)("div", {
          className: "SaveSchematicLobbyCodeWarning",
          children: RY("worldBuilder:lobbyCodeWarning")
        }), (0, oY.jsxs)("div", {
          className: "SaveSchematicButtons",
          children: [(0, oY.jsx)(sY.n, {
            className: "SaveSchematicButton",
            onClick: () => {
              TY() && AY(EY, OY, uY)
            },
            children: RY("file" === rY ? "general:download" : "general:save")
          }), (0, oY.jsx)(sY.D, {
            className: "SaveSchematicButton",
            onClick: IY,
            children: RY("general:cancel")
          })]
        })]
      })
    }
    var NY = DY(1222),
      BY = DY(1699),
      cY = DY(1159);

    function KY(YY, rY) {
      if ("devDownloadJson" !== YY) ! function(YY, rY) {
        const DY = NY.clientSideServerUrls.getHttpUrlFromWebSocketUrl((0, IY.b)().websocketUrl);
        let OY = !1;
        const gY = async (YY, rY) => {
          if (OY) return;
          OY = !0;
          const {
            gameNameWithVariation: FY,
            lobbyName: RY
          } = (0, IY.b)(), gY = {
            gameNameWithVariation: FY,
            lobbyName: RY
          };
          return await (0, cY.postJsonWithMetricsCookiesAndJsonResponse)(`${DY}/schematic/${YY}`, AY.A[YY].toBuffer({
            ...gY,
            ...rY
          }), {
            retries: 1
          })
        };
        if ("Plugin|WorldBuilder|SaveSchematic" === YY) ! function(YY) {
          let {
            ownedSchematics: rY,
            onChosenDownload: DY,
            onChosenEdit: FY,
            onChosenNew: AY,
            onClose: IY
          } = YY;
          uY.NotificationProvider.showCustomPopup({
            body: YY => (0, oY.jsx)(TY, {
              ownedSchematics: rY,
              onChosenDownload: DY,
              onChosenEdit: FY,
              onChosenNew: AY,
              onClose: YY
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: IY,
            unlockPointerKey: "schematicSaverPopup"
          })
        }({
          ownedSchematics: rY,
          onChosenDownload: (YY, rY) => {
            gY("download-schematic", {
              name: YY,
              includeLobbyCode: rY
            }).then((rY => {
              let {
                buffer: {
                  data: DY
                }
              } = rY;
              const AY = FY.Ny.from(DY);
              (0, BY.downloadBlob)(new Blob([AY], {
                type: "application/octet-stream"
              }), `${YY}.bloxdschem`)
            }))
          },
          onClose: () => {
            gY("cancel", {})
          },
          onChosenEdit: (YY, rY, DY, FY) => {
            gY("save-to-profile", {
              schematicId: YY,
              name: rY,
              description: DY,
              includeLobbyCode: FY
            })
          },
          onChosenNew: (YY, rY, DY) => {
            gY("save-to-profile", {
              schematicId: null,
              name: YY,
              description: rY,
              includeLobbyCode: DY
            })
          }
        });
        else if ("Plugin|WorldBuilder|LoadSchematic" === YY) ! function(YY) {
          let {
            ownedSchematics: rY,
            onChosenFile: DY,
            onChosenPreset: FY,
            onClose: AY
          } = YY;
          uY.NotificationProvider.showCustomPopup({
            body: YY => (0, oY.jsx)(EY, {
              ownedSchematics: rY,
              onChosenFile: DY,
              onChosenPreset: FY,
              onClose: YY
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: AY,
            unlockPointerKey: "schematicLoaderPopup"
          })
        }({
          ownedSchematics: rY,
          onChosenFile: async YY => {
            const rY = FY.Ny.from(await YY.arrayBuffer()),
              {
                gameNameWithVariation: RY,
                lobbyName: OY
              } = (0, IY.b)();
            await (0, cY.postBinaryWithMetricsCookiesAndCustomResponse)(`${DY}/schematic/upload-schematic`, AY.A["upload-schematic"].toBuffer({
              gameNameWithVariation: RY,
              lobbyName: OY,
              schematic: rY
            }), {
              retries: 1
            }, cY.HttpPayloadType.json)
          },
          onChosenPreset: YY => {
            gY("load-from-profile", {
              schematicId: YY
            })
          },
          onClose: () => {
            gY("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ListSchematics" === YY)(0, RY.d)({
          ownedSchematics: Array.isArray(rY) ? rY : rY.schematics,
          currentWorldSchematicId: Array.isArray(rY) ? null : rY.currentWorldSchematicId,
          onClose: () => {
            gY("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ExportWorld" === YY) {
          var aY;
          const YY = null !== (aY = rY.schematic) && void 0 !== aY ? aY : rY;
          (0, mY.k)({
            schematic: YY,
            inSourceWorld: YY.schematicId === rY.currentWorldSchematicId,
            onClose: () => {
              gY("cancel", {})
            }
          })
        } else console.error(`Unknown plugin message type ${YY}`)
      }(YY, rY);
      else {
        const YY = JSON.stringify(rY.data, null, 2);
        (0, BY.downloadBlob)(new Blob([YY], {
          type: "application/json"
        }), rY.filename)
      }
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);