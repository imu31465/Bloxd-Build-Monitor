export const id = 218;
export const ids = [218];
export const modules = {
  36372: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => nB,
      d: () => zB
    });
    var TB = ZB(63),
      JB = ZB(1403),
      oB = ZB(1248),
      GB = ZB(1397),
      vB = ZB(3663),
      kB = ZB(5084),
      cB = ZB(1153);

    function nB(BB) {
      let {
        loading: IB,
        schematics: ZB,
        onSchematicPicked: TB,
        selectedSchematicIdList: JB = [],
        disableAutoExport: kB
      } = BB;
      const {
        t: nB
      } = (0, oB.G)();
      return (0, cB.jsxs)("div", {
        className: "SchematicList",
        children: [IB && (0, cB.jsx)(GB.d, {}), !IB && 0 === ZB.length && (0, cB.jsx)("div", {
          className: "NoSchematicsText",
          children: nB("worldBuilder:noSavedSchematic")
        }), !IB && ZB.map((BB => (0, cB.jsx)(vB.f, {
          source: {
            type: "schematic",
            schematic: BB
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            TB(BB)
          },
          isSelected: JB.includes(BB.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: BB.isAutoExported && kB,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, BB.schematicId)))]
      })
    }

    function hB(BB) {
      let {
        ownedSchematics: IB,
        currentWorldSchematicId: ZB,
        onClose: JB
      } = BB;
      const {
        t: GB
      } = (0, oB.G)(), [vB, hB] = (0, TB.useState)(null);
      return (0, cB.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === vB && (0, cB.jsxs)(cB.Fragment, {
          children: [(0, cB.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: GB("worldBuilder:schematicList")
          }), (0, cB.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: GB("worldBuilder:clickSchematicForOptions")
          }), (0, cB.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, cB.jsx)(nB, {
              loading: !1,
              schematics: IB,
              onSchematicPicked: BB => {
                hB(BB)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== vB && (0, cB.jsx)(kB.i, {
          schematic: vB,
          inSourceWorld: vB.schematicId === ZB,
          onSchematicUpdate: BB => {
            hB(BB)
          },
          onClose: () => {
            hB(null), JB()
          }
        })]
      })
    }

    function zB(BB) {
      let {
        ownedSchematics: IB,
        currentWorldSchematicId: ZB,
        onClose: TB
      } = BB;
      JB.NotificationProvider.showCustomPopup({
        body: BB => (0, cB.jsx)(hB, {
          ownedSchematics: IB,
          currentWorldSchematicId: ZB,
          onClose: BB
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: TB,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  41761: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      runClientGameMessage: () => pB
    });
    var TB = ZB(3896),
      JB = ZB(3911),
      oB = ZB(1382),
      GB = ZB(36372),
      vB = ZB(5112),
      kB = ZB(1091),
      cB = ZB.n(kB),
      nB = ZB(63),
      hB = ZB(1403),
      zB = ZB(1516),
      FB = ZB(360),
      NB = ZB(1248),
      gB = ZB(1102),
      qB = ZB(1153);

    function yB(BB) {
      let {
        onFilePicked: IB
      } = BB;
      const {
        t: ZB
      } = (0, NB.G)(), [TB, JB] = (0, nB.useState)(null), {
        getRootProps: oB,
        getInputProps: GB,
        isDragActive: kB
      } = (0, vB.d)({
        onDrop: BB => {
          BB.length > 0 && JB(BB[0])
        },
        useFsAccessApi: !1
      }), hB = TB && TB.size > 1024 * FB.fd;
      return (0, qB.jsxs)("div", {
        className: "SchematicUploadContainer",
        children: [(0, qB.jsxs)("div", {
          ...oB({
            className: cB()("SchematicUpload", {
              ActiveDrag: kB
            })
          }),
          children: [(0, qB.jsx)("input", {
            ...GB({
              accept: ".bloxdschem"
            })
          }), !kB && TB ? (0, qB.jsxs)(qB.Fragment, {
            children: [(0, qB.jsx)("div", {
              className: cB()("SchematicUploadIcon", "Active", {
                TooBig: hB
              }),
              children: (0, qB.jsx)(gB.d, {
                name: "file-lines"
              })
            }), (0, qB.jsx)("div", {
              className: "SchematicUploadInstructions Active",
              children: TB.name
            })]
          }) : (0, qB.jsxs)(qB.Fragment, {
            children: [(0, qB.jsx)("div", {
              className: "SchematicUploadIcon",
              children: (0, qB.jsx)(gB.d, {
                name: "up-from-bracket"
              })
            }), (0, qB.jsx)("div", {
              className: "SchematicUploadInstructions",
              children: ZB("worldBuilder:dragAFileHere")
            })]
          })]
        }), (0, qB.jsx)(zB.p, {
          disabled: hB || !TB,
          className: "SchematicUploadButton",
          onClick: () => {
            !hB && TB && IB(TB)
          },
          children: hB ? ZB("worldBuilder:fileTooBig", {
            maxSizeKb: FB.fd
          }) : ZB("worldBuilder:upload")
        })]
      })
    }

    function UB(BB) {
      let {
        ownedSchematics: IB,
        onClose: ZB,
        onChosenPreset: TB,
        onChosenFile: JB
      } = BB;
      const {
        t: oB
      } = (0, NB.G)();
      return (0, qB.jsxs)(qB.Fragment, {
        children: [(0, qB.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: oB("worldBuilder:loadSchematic")
        }), (0, qB.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: oB("worldBuilder:chooseOneOfYourSchematics")
        }), (0, qB.jsx)("div", {
          className: "SchematicPopupSchematicListContainer",
          children: (0, qB.jsx)(GB.c, {
            schematics: IB,
            onSchematicPicked: BB => {
              TB(BB.schematicId), ZB()
            },
            loading: !1,
            disableAutoExport: !0
          })
        }), (0, qB.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: oB("worldBuilder:uploadNewSchematic")
        }), (0, qB.jsx)(yB, {
          onFilePicked: async BB => {
            try {
              await JB(BB)
            } catch (IB) {
              console.warn("Schematic upload failed", IB)
            } finally {
              ZB()
            }
          }
        })]
      })
    }
    var WB = ZB(5084),
      dB = ZB(1746),
      CB = ZB(4545),
      QB = ZB(1281);

    function sB(BB) {
      var IB;
      let {
        ownedSchematics: ZB,
        onClose: TB,
        onChosenEdit: JB,
        onChosenNew: oB,
        onChosenDownload: vB
      } = BB;
      const {
        t: kB
      } = (0, NB.G)(), [cB, hB] = (0, nB.useState)("choose"), [FB, gB] = (0, nB.useState)(null), [yB, UB] = (0, nB.useState)(null);
      return (0, qB.jsxs)(qB.Fragment, {
        children: [(0, qB.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: kB("worldBuilder:saveSchematic")
        }), "choose" === cB && (0, qB.jsxs)(qB.Fragment, {
          children: [(0, qB.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: kB("worldBuilder:overwriteOneOfYourSchematics")
          }), (0, qB.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, qB.jsx)(GB.c, {
              schematics: ZB,
              onSchematicPicked: BB => {
                gB(BB.schematicId), UB("existing"), hB("save")
              },
              loading: !1,
              disableAutoExport: !1
            })
          }), (0, qB.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: kB("general:otherOptions")
          }), (0, qB.jsxs)("div", {
            className: "OtherOptions",
            children: [(0, qB.jsx)(zB.p, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                UB("new"), hB("save")
              },
              children: kB("worldBuilder:saveAsNewSchematic")
            }), (0, qB.jsx)(zB.g, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                UB("file"), hB("save")
              },
              children: kB("worldBuilder:downloadSchematic")
            })]
          })]
        }), "choose" !== cB && (0, qB.jsx)(wB, {
          type: yB,
          ownedSchematics: ZB,
          onSubmit: (BB, IB, ZB) => {
            "file" === yB ? vB(IB, BB) : "new" === yB ? oB(IB, ZB, BB) : JB(FB, IB, ZB, BB), TB()
          },
          onBack: () => {
            hB("choose")
          },
          prepopName: "existing" === yB ? null === (IB = ZB.find((BB => BB.schematicId === FB))) || void 0 === IB ? void 0 : IB.name : null
        })]
      })
    }

    function wB(BB) {
      let {
        type: IB,
        prepopName: ZB,
        ownedSchematics: TB,
        onSubmit: JB,
        onBack: oB
      } = BB;
      const {
        t: GB
      } = (0, NB.G)(), [vB, kB] = (0, nB.useState)(""), [hB, FB] = (0, nB.useState)(""), [gB, yB] = (0, nB.useState)(null), [UB, WB] = (0, nB.useState)(!0), sB = BB => {
        var ZB;
        BB = null !== (ZB = BB) && void 0 !== ZB ? ZB : vB;
        const JB = "new" === IB ? (0, QB.s)(BB) : null,
          oB = [...(0, QB.rb)(BB), ...JB ? [JB] : []];
        return oB.length > 0 ? (yB(oB.join(", ")), !1) : "new" === IB && TB.find((IB => IB.name === BB)) ? (yB(GB("worldBuilder:schematicAlreadyExists")), !1) : (yB(null), !0)
      };
      return (0, qB.jsxs)("div", {
        className: "SaveSchematicWindow",
        children: [(0, qB.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: GB("general:name")
        }), (0, qB.jsx)(dB.c, {
          className: cB()("SaveSchematicName", {
            Error: gB
          }),
          forcedText: ZB,
          onValueChange: BB => {
            kB(BB), sB(BB)
          },
          placeholderText: GB("worldBuilder:schematicNamePlaceholder"),
          maxLength: QB.fb
        }), (0, qB.jsx)("h2", {
          className: cB()("SaveSchematicError", {
            Hidden: !gB
          }),
          children: gB
        }), (0, qB.jsx)("h2", {
          className: cB()("SchematicPopupSubtitle", {
            Hidden: "file" === IB
          }),
          children: GB("general:description")
        }), (0, qB.jsx)(dB.c, {
          className: cB()("SaveSchematicDescription", {
            Hidden: "file" === IB
          }),
          onValueChange: FB,
          placeholderText: GB("worldBuilder:schematicDescriptionPlaceholder"),
          maxLength: QB.eb,
          useTextarea: !0
        }), (0, qB.jsxs)("div", {
          className: cB()("SaveSchematicCheckboxContainer", {
            WarningBorder: "existing" === IB
          }),
          children: [(0, qB.jsx)(CB.d, {
            checked: UB,
            onChange: BB => {
              WB(BB.target.checked)
            },
            disabled: !1,
            className: "SaveSchematicCheckbox"
          }), (0, qB.jsx)("h1", {
            className: "SchematicPopupSubtitle",
            children: GB("existing" === IB ? "worldBuilder:overwriteLobbyCode" : "worldBuilder:includeLobbyCode")
          })]
        }), "existing" === IB && (0, qB.jsx)("div", {
          className: "SaveSchematicLobbyCodeWarning",
          children: GB("worldBuilder:lobbyCodeWarning")
        }), (0, qB.jsxs)("div", {
          className: "SaveSchematicButtons",
          children: [(0, qB.jsx)(zB.p, {
            className: "SaveSchematicButton",
            onClick: () => {
              sB() && JB(UB, vB, hB)
            },
            children: GB("file" === IB ? "general:download" : "general:save")
          }), (0, qB.jsx)(zB.M, {
            className: "SaveSchematicButton",
            onClick: oB,
            children: GB("general:cancel")
          })]
        })]
      })
    }
    var OB = ZB(1258),
      YB = ZB(1805),
      iB = ZB(1186);

    function pB(BB, IB) {
      if ("devDownloadJson" !== BB) ! function(BB, IB) {
        const ZB = OB.clientSideServerUrls.getHttpUrlFromWebSocketUrl((0, oB.c)().websocketUrl);
        let vB = !1;
        const kB = async (BB, IB) => {
          if (vB) return;
          vB = !0;
          const {
            gameNameWithVariation: TB,
            lobbyName: GB
          } = (0, oB.c)(), kB = {
            gameNameWithVariation: TB,
            lobbyName: GB
          };
          return await (0, iB.postJsonWithMetricsCookiesAndJsonResponse)(`${ZB}/schematic/${BB}`, JB.H[BB].toBuffer({
            ...kB,
            ...IB
          }), {
            retries: 1
          })
        };
        if ("Plugin|WorldBuilder|SaveSchematic" === BB) ! function(BB) {
          let {
            ownedSchematics: IB,
            onChosenDownload: ZB,
            onChosenEdit: TB,
            onChosenNew: JB,
            onClose: oB
          } = BB;
          hB.NotificationProvider.showCustomPopup({
            body: BB => (0, qB.jsx)(sB, {
              ownedSchematics: IB,
              onChosenDownload: ZB,
              onChosenEdit: TB,
              onChosenNew: JB,
              onClose: BB
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: oB,
            unlockPointerKey: "schematicSaverPopup"
          })
        }({
          ownedSchematics: IB,
          onChosenDownload: (BB, IB) => {
            kB("download-schematic", {
              name: BB,
              includeLobbyCode: IB
            }).then((IB => {
              let {
                buffer: {
                  data: ZB
                }
              } = IB;
              const JB = TB.UN.from(ZB);
              (0, YB.downloadBlob)(new Blob([JB], {
                type: "application/octet-stream"
              }), `${BB}.bloxdschem`)
            }))
          },
          onClose: () => {
            kB("cancel", {})
          },
          onChosenEdit: (BB, IB, ZB, TB) => {
            kB("save-to-profile", {
              schematicId: BB,
              name: IB,
              description: ZB,
              includeLobbyCode: TB
            })
          },
          onChosenNew: (BB, IB, ZB) => {
            kB("save-to-profile", {
              schematicId: null,
              name: BB,
              description: IB,
              includeLobbyCode: ZB
            })
          }
        });
        else if ("Plugin|WorldBuilder|LoadSchematic" === BB) ! function(BB) {
          let {
            ownedSchematics: IB,
            onChosenFile: ZB,
            onChosenPreset: TB,
            onClose: JB
          } = BB;
          hB.NotificationProvider.showCustomPopup({
            body: BB => (0, qB.jsx)(UB, {
              ownedSchematics: IB,
              onChosenFile: ZB,
              onChosenPreset: TB,
              onClose: BB
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: JB,
            unlockPointerKey: "schematicLoaderPopup"
          })
        }({
          ownedSchematics: IB,
          onChosenFile: async BB => {
            const IB = TB.UN.from(await BB.arrayBuffer()),
              {
                gameNameWithVariation: GB,
                lobbyName: vB
              } = (0, oB.c)();
            await (0, iB.postBinaryWithMetricsCookiesAndCustomResponse)(`${ZB}/schematic/upload-schematic`, JB.H["upload-schematic"].toBuffer({
              gameNameWithVariation: GB,
              lobbyName: vB,
              schematic: IB
            }), {
              retries: 1
            }, iB.HttpPayloadType.json)
          },
          onChosenPreset: BB => {
            kB("load-from-profile", {
              schematicId: BB
            })
          },
          onClose: () => {
            kB("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ListSchematics" === BB)(0, GB.d)({
          ownedSchematics: Array.isArray(IB) ? IB : IB.schematics,
          currentWorldSchematicId: Array.isArray(IB) ? null : IB.currentWorldSchematicId,
          onClose: () => {
            kB("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ExportWorld" === BB) {
          var cB;
          const BB = null !== (cB = IB.schematic) && void 0 !== cB ? cB : IB;
          (0, WB.m)({
            schematic: BB,
            inSourceWorld: BB.schematicId === IB.currentWorldSchematicId,
            onClose: () => {
              kB("cancel", {})
            }
          })
        } else console.error(`Unknown plugin message type ${BB}`)
      }(BB, IB);
      else {
        const BB = JSON.stringify(IB.data, null, 2);
        (0, YB.downloadBlob)(new Blob([BB], {
          type: "application/json"
        }), IB.filename)
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);