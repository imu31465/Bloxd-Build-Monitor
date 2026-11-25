export const id = 218;
export const ids = [218];
export const modules = {
  36672: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => VG,
      f: () => fG
    });
    var wG = ZG(51),
      SG = ZG(1311),
      LG = ZG(1151),
      yG = ZG(1302),
      kG = ZG(3458),
      UG = ZG(4955),
      YG = ZG(1067);

    function VG(GG) {
      let {
        loading: bG,
        schematics: ZG,
        onSchematicPicked: wG,
        selectedSchematicIdList: SG = [],
        disableAutoExport: UG
      } = GG;
      const {
        t: VG
      } = (0, LG.w)();
      return (0, YG.jsxs)("div", {
        className: "SchematicList",
        children: [bG && (0, YG.jsx)(yG.b, {}), !bG && 0 === ZG.length && (0, YG.jsx)("div", {
          className: "NoSchematicsText",
          children: VG("worldBuilder:noSavedSchematic")
        }), !bG && ZG.map((GG => (0, YG.jsx)(kG.g, {
          source: {
            type: "schematic",
            schematic: GG
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            wG(GG)
          },
          isSelected: SG.includes(GG.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: GG.isAutoExported && UG,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, GG.schematicId)))]
      })
    }

    function pG(GG) {
      let {
        ownedSchematics: bG,
        currentWorldSchematicId: ZG,
        onClose: SG
      } = GG;
      const {
        t: yG
      } = (0, LG.w)(), [kG, pG] = (0, wG.useState)(null);
      return (0, YG.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === kG && (0, YG.jsxs)(YG.Fragment, {
          children: [(0, YG.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: yG("worldBuilder:schematicList")
          }), (0, YG.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: yG("worldBuilder:clickSchematicForOptions")
          }), (0, YG.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, YG.jsx)(VG, {
              loading: !1,
              schematics: bG,
              onSchematicPicked: GG => {
                pG(GG)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== kG && (0, YG.jsx)(UG.i, {
          schematic: kG,
          inSourceWorld: kG.schematicId === ZG,
          onSchematicUpdate: GG => {
            pG(GG)
          },
          onClose: () => {
            pG(null), SG()
          }
        })]
      })
    }

    function fG(GG) {
      let {
        ownedSchematics: bG,
        currentWorldSchematicId: ZG,
        onClose: wG
      } = GG;
      SG.NotificationProvider.showCustomPopup({
        body: GG => (0, YG.jsx)(pG, {
          ownedSchematics: bG,
          currentWorldSchematicId: ZG,
          onClose: GG
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: wG,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  42179: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      runClientGameMessage: () => IG
    });
    var wG = ZG(3746),
      SG = ZG(3766),
      LG = ZG(1287),
      yG = ZG(36672),
      kG = ZG(4977),
      UG = ZG(1006),
      YG = ZG.n(UG),
      VG = ZG(51),
      pG = ZG(1311),
      fG = ZG(1393),
      QG = ZG(352),
      KG = ZG(1151),
      hG = ZG(1016),
      dG = ZG(1067);

    function JG(GG) {
      let {
        onFilePicked: bG
      } = GG;
      const {
        t: ZG
      } = (0, KG.w)(), [wG, SG] = (0, VG.useState)(null), {
        getRootProps: LG,
        getInputProps: yG,
        isDragActive: UG
      } = (0, kG.c)({
        onDrop: GG => {
          GG.length > 0 && SG(GG[0])
        },
        useFsAccessApi: !1
      }), pG = wG && wG.size > 1024 * QG.td;
      return (0, dG.jsxs)("div", {
        className: "SchematicUploadContainer",
        children: [(0, dG.jsxs)("div", {
          ...LG({
            className: YG()("SchematicUpload", {
              ActiveDrag: UG
            })
          }),
          children: [(0, dG.jsx)("input", {
            ...yG({
              accept: ".bloxdschem"
            })
          }), !UG && wG ? (0, dG.jsxs)(dG.Fragment, {
            children: [(0, dG.jsx)("div", {
              className: YG()("SchematicUploadIcon", "Active", {
                TooBig: pG
              }),
              children: (0, dG.jsx)(hG.c, {
                name: "file-lines"
              })
            }), (0, dG.jsx)("div", {
              className: "SchematicUploadInstructions Active",
              children: wG.name
            })]
          }) : (0, dG.jsxs)(dG.Fragment, {
            children: [(0, dG.jsx)("div", {
              className: "SchematicUploadIcon",
              children: (0, dG.jsx)(hG.c, {
                name: "up-from-bracket"
              })
            }), (0, dG.jsx)("div", {
              className: "SchematicUploadInstructions",
              children: ZG("worldBuilder:dragAFileHere")
            })]
          })]
        }), (0, dG.jsx)(fG.k, {
          disabled: pG || !wG,
          className: "SchematicUploadButton",
          onClick: () => {
            !pG && wG && bG(wG)
          },
          children: pG ? ZG("worldBuilder:fileTooBig", {
            maxSizeKb: QG.td
          }) : ZG("worldBuilder:upload")
        })]
      })
    }

    function rG(GG) {
      let {
        ownedSchematics: bG,
        onClose: ZG,
        onChosenPreset: wG,
        onChosenFile: SG
      } = GG;
      const {
        t: LG
      } = (0, KG.w)();
      return (0, dG.jsxs)(dG.Fragment, {
        children: [(0, dG.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: LG("worldBuilder:loadSchematic")
        }), (0, dG.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: LG("worldBuilder:chooseOneOfYourSchematics")
        }), (0, dG.jsx)("div", {
          className: "SchematicPopupSchematicListContainer",
          children: (0, dG.jsx)(yG.b, {
            schematics: bG,
            onSchematicPicked: GG => {
              wG(GG.schematicId), ZG()
            },
            loading: !1,
            disableAutoExport: !0
          })
        }), (0, dG.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: LG("worldBuilder:uploadNewSchematic")
        }), (0, dG.jsx)(JG, {
          onFilePicked: async GG => {
            try {
              await SG(GG)
            } catch (bG) {
              console.warn("Schematic upload failed", bG)
            } finally {
              ZG()
            }
          }
        })]
      })
    }
    var zG = ZG(4955),
      EG = ZG(1621),
      oG = ZG(4396),
      XG = ZG(1177);

    function uG(GG) {
      var bG;
      let {
        ownedSchematics: ZG,
        onClose: wG,
        onChosenEdit: SG,
        onChosenNew: LG,
        onChosenDownload: kG
      } = GG;
      const {
        t: UG
      } = (0, KG.w)(), [YG, pG] = (0, VG.useState)("choose"), [QG, hG] = (0, VG.useState)(null), [JG, rG] = (0, VG.useState)(null);
      return (0, dG.jsxs)(dG.Fragment, {
        children: [(0, dG.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: UG("worldBuilder:saveSchematic")
        }), "choose" === YG && (0, dG.jsxs)(dG.Fragment, {
          children: [(0, dG.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: UG("worldBuilder:overwriteOneOfYourSchematics")
          }), (0, dG.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, dG.jsx)(yG.b, {
              schematics: ZG,
              onSchematicPicked: GG => {
                hG(GG.schematicId), rG("existing"), pG("save")
              },
              loading: !1,
              disableAutoExport: !1
            })
          }), (0, dG.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: UG("general:otherOptions")
          }), (0, dG.jsxs)("div", {
            className: "OtherOptions",
            children: [(0, dG.jsx)(fG.k, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                rG("new"), pG("save")
              },
              children: UG("worldBuilder:saveAsNewSchematic")
            }), (0, dG.jsx)(fG.d, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                rG("file"), pG("save")
              },
              children: UG("worldBuilder:downloadSchematic")
            })]
          })]
        }), "choose" !== YG && (0, dG.jsx)(iG, {
          type: JG,
          ownedSchematics: ZG,
          onSubmit: (GG, bG, ZG) => {
            "file" === JG ? kG(bG, GG) : "new" === JG ? LG(bG, ZG, GG) : SG(QG, bG, ZG, GG), wG()
          },
          onBack: () => {
            pG("choose")
          },
          prepopName: "existing" === JG ? null === (bG = ZG.find((GG => GG.schematicId === QG))) || void 0 === bG ? void 0 : bG.name : null
        })]
      })
    }

    function iG(GG) {
      let {
        type: bG,
        prepopName: ZG,
        ownedSchematics: wG,
        onSubmit: SG,
        onBack: LG
      } = GG;
      const {
        t: yG
      } = (0, KG.w)(), [kG, UG] = (0, VG.useState)(""), [pG, QG] = (0, VG.useState)(""), [hG, JG] = (0, VG.useState)(null), [rG, zG] = (0, VG.useState)(!0), uG = GG => {
        var ZG;
        GG = null !== (ZG = GG) && void 0 !== ZG ? ZG : kG;
        const SG = "new" === bG ? (0, XG.A)(GG) : null,
          LG = [...(0, XG.Cb)(GG), ...SG ? [SG] : []];
        return LG.length > 0 ? (JG(LG.join(", ")), !1) : "new" === bG && wG.find((bG => bG.name === GG)) ? (JG(yG("worldBuilder:schematicAlreadyExists")), !1) : (JG(null), !0)
      };
      return (0, dG.jsxs)("div", {
        className: "SaveSchematicWindow",
        children: [(0, dG.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: yG("general:name")
        }), (0, dG.jsx)(EG.b, {
          className: YG()("SaveSchematicName", {
            Error: hG
          }),
          forcedText: ZG,
          onValueChange: GG => {
            UG(GG), uG(GG)
          },
          placeholderText: yG("worldBuilder:schematicNamePlaceholder"),
          maxLength: XG.tb
        }), (0, dG.jsx)("h2", {
          className: YG()("SaveSchematicError", {
            Hidden: !hG
          }),
          children: hG
        }), (0, dG.jsx)("h2", {
          className: YG()("SchematicPopupSubtitle", {
            Hidden: "file" === bG
          }),
          children: yG("general:description")
        }), (0, dG.jsx)(EG.b, {
          className: YG()("SaveSchematicDescription", {
            Hidden: "file" === bG
          }),
          onValueChange: QG,
          placeholderText: yG("worldBuilder:schematicDescriptionPlaceholder"),
          maxLength: XG.pb,
          useTextarea: !0
        }), (0, dG.jsxs)("div", {
          className: YG()("SaveSchematicCheckboxContainer", {
            WarningBorder: "existing" === bG
          }),
          children: [(0, dG.jsx)(oG.e, {
            checked: rG,
            onChange: GG => {
              zG(GG.target.checked)
            },
            disabled: !1,
            className: "SaveSchematicCheckbox"
          }), (0, dG.jsx)("h1", {
            className: "SchematicPopupSubtitle",
            children: yG("existing" === bG ? "worldBuilder:overwriteLobbyCode" : "worldBuilder:includeLobbyCode")
          })]
        }), "existing" === bG && (0, dG.jsx)("div", {
          className: "SaveSchematicLobbyCodeWarning",
          children: yG("worldBuilder:lobbyCodeWarning")
        }), (0, dG.jsxs)("div", {
          className: "SaveSchematicButtons",
          children: [(0, dG.jsx)(fG.k, {
            className: "SaveSchematicButton",
            onClick: () => {
              uG() && SG(rG, kG, pG)
            },
            children: yG("file" === bG ? "general:download" : "general:save")
          }), (0, dG.jsx)(fG.C, {
            className: "SaveSchematicButton",
            onClick: LG,
            children: yG("general:cancel")
          })]
        })]
      })
    }
    var CG = ZG(1163),
      WG = ZG(1702),
      mG = ZG(1096);

    function IG(GG, bG) {
      if ("devDownloadJson" !== GG) ! function(GG, bG) {
        const ZG = CG.clientSideServerUrls.getHttpUrlFromWebSocketUrl((0, LG.d)().websocketUrl);
        let kG = !1;
        const UG = async (GG, bG) => {
          if (kG) return;
          kG = !0;
          const {
            gameNameWithVariation: wG,
            lobbyName: yG
          } = (0, LG.d)(), UG = {
            gameNameWithVariation: wG,
            lobbyName: yG
          };
          return await (0, mG.postJsonWithMetricsCookiesAndJsonResponse)(`${ZG}/schematic/${GG}`, SG.y[GG].toBuffer({
            ...UG,
            ...bG
          }), {
            retries: 1
          })
        };
        if ("Plugin|WorldBuilder|SaveSchematic" === GG) ! function(GG) {
          let {
            ownedSchematics: bG,
            onChosenDownload: ZG,
            onChosenEdit: wG,
            onChosenNew: SG,
            onClose: LG
          } = GG;
          pG.NotificationProvider.showCustomPopup({
            body: GG => (0, dG.jsx)(uG, {
              ownedSchematics: bG,
              onChosenDownload: ZG,
              onChosenEdit: wG,
              onChosenNew: SG,
              onClose: GG
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: LG,
            unlockPointerKey: "schematicSaverPopup"
          })
        }({
          ownedSchematics: bG,
          onChosenDownload: (GG, bG) => {
            UG("download-schematic", {
              name: GG,
              includeLobbyCode: bG
            }).then((bG => {
              let {
                buffer: {
                  data: ZG
                }
              } = bG;
              const SG = wG.VK.from(ZG);
              (0, WG.downloadBlob)(new Blob([SG], {
                type: "application/octet-stream"
              }), `${GG}.bloxdschem`)
            }))
          },
          onClose: () => {
            UG("cancel", {})
          },
          onChosenEdit: (GG, bG, ZG, wG) => {
            UG("save-to-profile", {
              schematicId: GG,
              name: bG,
              description: ZG,
              includeLobbyCode: wG
            })
          },
          onChosenNew: (GG, bG, ZG) => {
            UG("save-to-profile", {
              schematicId: null,
              name: GG,
              description: bG,
              includeLobbyCode: ZG
            })
          }
        });
        else if ("Plugin|WorldBuilder|LoadSchematic" === GG) ! function(GG) {
          let {
            ownedSchematics: bG,
            onChosenFile: ZG,
            onChosenPreset: wG,
            onClose: SG
          } = GG;
          pG.NotificationProvider.showCustomPopup({
            body: GG => (0, dG.jsx)(rG, {
              ownedSchematics: bG,
              onChosenFile: ZG,
              onChosenPreset: wG,
              onClose: GG
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: SG,
            unlockPointerKey: "schematicLoaderPopup"
          })
        }({
          ownedSchematics: bG,
          onChosenFile: async GG => {
            const bG = wG.VK.from(await GG.arrayBuffer()),
              {
                gameNameWithVariation: yG,
                lobbyName: kG
              } = (0, LG.d)();
            await (0, mG.postBinaryWithMetricsCookiesAndCustomResponse)(`${ZG}/schematic/upload-schematic`, SG.y["upload-schematic"].toBuffer({
              gameNameWithVariation: yG,
              lobbyName: kG,
              schematic: bG
            }), {
              retries: 1
            }, mG.HttpPayloadType.json)
          },
          onChosenPreset: GG => {
            UG("load-from-profile", {
              schematicId: GG
            })
          },
          onClose: () => {
            UG("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ListSchematics" === GG)(0, yG.f)({
          ownedSchematics: Array.isArray(bG) ? bG : bG.schematics,
          currentWorldSchematicId: Array.isArray(bG) ? null : bG.currentWorldSchematicId,
          onClose: () => {
            UG("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ExportWorld" === GG) {
          var YG;
          const GG = null !== (YG = bG.schematic) && void 0 !== YG ? YG : bG;
          (0, zG.m)({
            schematic: GG,
            inSourceWorld: GG.schematicId === bG.currentWorldSchematicId,
            onClose: () => {
              UG("cancel", {})
            }
          })
        } else console.error(`Unknown plugin message type ${GG}`)
      }(GG, bG);
      else {
        const GG = JSON.stringify(bG.data, null, 2);
        (0, WG.downloadBlob)(new Blob([GG], {
          type: "application/json"
        }), bG.filename)
      }
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);