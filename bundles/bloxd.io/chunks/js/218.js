export const id = 218;
export const ids = [218];
export const modules = {
  36424: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => jT,
      e: () => LT
    });
    var WT = mT(63),
      zT = mT(1457),
      MT = mT(1288),
      gT = mT(1446),
      nT = mT(3568),
      HT = mT(5038),
      kT = mT(1188);

    function jT(TT) {
      let {
        loading: UT,
        schematics: mT,
        onSchematicPicked: WT,
        selectedSchematicIdList: zT = [],
        disableAutoExport: HT
      } = TT;
      const {
        t: jT
      } = (0, MT.z)();
      return (0, kT.jsxs)("div", {
        className: "SchematicList",
        children: [UT && (0, kT.jsx)(gT.c, {}), !UT && 0 === mT.length && (0, kT.jsx)("div", {
          className: "NoSchematicsText",
          children: jT("worldBuilder:noSavedSchematic")
        }), !UT && mT.map((TT => (0, kT.jsx)(nT.f, {
          source: {
            type: "schematic",
            schematic: TT
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            WT(TT)
          },
          isSelected: zT.includes(TT.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: TT.isAutoExported && HT,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, TT.schematicId)))]
      })
    }

    function lT(TT) {
      let {
        ownedSchematics: UT,
        currentWorldSchematicId: mT,
        onClose: zT
      } = TT;
      const {
        t: gT
      } = (0, MT.z)(), [nT, lT] = (0, WT.useState)(null);
      return (0, kT.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === nT && (0, kT.jsxs)(kT.Fragment, {
          children: [(0, kT.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: gT("worldBuilder:schematicList")
          }), (0, kT.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: gT("worldBuilder:clickSchematicForOptions")
          }), (0, kT.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, kT.jsx)(jT, {
              loading: !1,
              schematics: UT,
              onSchematicPicked: TT => {
                lT(TT)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== nT && (0, kT.jsx)(HT.f, {
          schematic: nT,
          inSourceWorld: nT.schematicId === mT,
          onSchematicUpdate: TT => {
            lT(TT)
          },
          onClose: () => {
            lT(null), zT()
          }
        })]
      })
    }

    function LT(TT) {
      let {
        ownedSchematics: UT,
        currentWorldSchematicId: mT,
        onClose: WT
      } = TT;
      zT.NotificationProvider.showCustomPopup({
        body: TT => (0, kT.jsx)(lT, {
          ownedSchematics: UT,
          currentWorldSchematicId: mT,
          onClose: TT
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: WT,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  41871: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      runClientGameMessage: () => wT
    });
    var WT = mT(3823),
      zT = mT(3841),
      MT = mT(1429),
      gT = mT(36424),
      nT = mT(5057),
      HT = mT(1126),
      kT = mT.n(HT),
      jT = mT(63),
      lT = mT(1457),
      LT = mT(1569),
      pT = mT(366),
      BT = mT(1288),
      ZT = mT(1135),
      cT = mT(1188);

    function vT(TT) {
      let {
        onFilePicked: UT
      } = TT;
      const {
        t: mT
      } = (0, BT.z)(), [WT, zT] = (0, jT.useState)(null), {
        getRootProps: MT,
        getInputProps: gT,
        isDragActive: HT
      } = (0, nT.b)({
        onDrop: TT => {
          TT.length > 0 && zT(TT[0])
        },
        useFsAccessApi: !1
      }), lT = WT && WT.size > 1024 * pT.vd;
      return (0, cT.jsxs)("div", {
        className: "SchematicUploadContainer",
        children: [(0, cT.jsxs)("div", {
          ...MT({
            className: kT()("SchematicUpload", {
              ActiveDrag: HT
            })
          }),
          children: [(0, cT.jsx)("input", {
            ...gT({
              accept: ".bloxdschem"
            })
          }), !HT && WT ? (0, cT.jsxs)(cT.Fragment, {
            children: [(0, cT.jsx)("div", {
              className: kT()("SchematicUploadIcon", "Active", {
                TooBig: lT
              }),
              children: (0, cT.jsx)(ZT.c, {
                name: "file-lines"
              })
            }), (0, cT.jsx)("div", {
              className: "SchematicUploadInstructions Active",
              children: WT.name
            })]
          }) : (0, cT.jsxs)(cT.Fragment, {
            children: [(0, cT.jsx)("div", {
              className: "SchematicUploadIcon",
              children: (0, cT.jsx)(ZT.c, {
                name: "up-from-bracket"
              })
            }), (0, cT.jsx)("div", {
              className: "SchematicUploadInstructions",
              children: mT("worldBuilder:dragAFileHere")
            })]
          })]
        }), (0, cT.jsx)(LT.l, {
          disabled: lT || !WT,
          className: "SchematicUploadButton",
          onClick: () => {
            !lT && WT && UT(WT)
          },
          children: lT ? mT("worldBuilder:fileTooBig", {
            maxSizeKb: pT.vd
          }) : mT("worldBuilder:upload")
        })]
      })
    }

    function fT(TT) {
      let {
        ownedSchematics: UT,
        onClose: mT,
        onChosenPreset: WT,
        onChosenFile: zT
      } = TT;
      const {
        t: MT
      } = (0, BT.z)();
      return (0, cT.jsxs)(cT.Fragment, {
        children: [(0, cT.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: MT("worldBuilder:loadSchematic")
        }), (0, cT.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: MT("worldBuilder:chooseOneOfYourSchematics")
        }), (0, cT.jsx)("div", {
          className: "SchematicPopupSchematicListContainer",
          children: (0, cT.jsx)(gT.b, {
            schematics: UT,
            onSchematicPicked: TT => {
              WT(TT.schematicId), mT()
            },
            loading: !1,
            disableAutoExport: !0
          })
        }), (0, cT.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: MT("worldBuilder:uploadNewSchematic")
        }), (0, cT.jsx)(vT, {
          onFilePicked: async TT => {
            try {
              await zT(TT)
            } catch (UT) {
              console.warn("Schematic upload failed", UT)
            } finally {
              mT()
            }
          }
        })]
      })
    }
    var qT = mT(5038),
      iT = mT(1792),
      bT = mT(4468),
      OT = mT(1321);

    function eT(TT) {
      var UT;
      let {
        ownedSchematics: mT,
        onClose: WT,
        onChosenEdit: zT,
        onChosenNew: MT,
        onChosenDownload: nT
      } = TT;
      const {
        t: HT
      } = (0, BT.z)(), [kT, lT] = (0, jT.useState)("choose"), [pT, ZT] = (0, jT.useState)(null), [vT, fT] = (0, jT.useState)(null);
      return (0, cT.jsxs)(cT.Fragment, {
        children: [(0, cT.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: HT("worldBuilder:saveSchematic")
        }), "choose" === kT && (0, cT.jsxs)(cT.Fragment, {
          children: [(0, cT.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: HT("worldBuilder:overwriteOneOfYourSchematics")
          }), (0, cT.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, cT.jsx)(gT.b, {
              schematics: mT,
              onSchematicPicked: TT => {
                ZT(TT.schematicId), fT("existing"), lT("save")
              },
              loading: !1,
              disableAutoExport: !1
            })
          }), (0, cT.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: HT("general:otherOptions")
          }), (0, cT.jsxs)("div", {
            className: "OtherOptions",
            children: [(0, cT.jsx)(LT.l, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                fT("new"), lT("save")
              },
              children: HT("worldBuilder:saveAsNewSchematic")
            }), (0, cT.jsx)(LT.e, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                fT("file"), lT("save")
              },
              children: HT("worldBuilder:downloadSchematic")
            })]
          })]
        }), "choose" !== kT && (0, cT.jsx)(YT, {
          type: vT,
          ownedSchematics: mT,
          onSubmit: (TT, UT, mT) => {
            "file" === vT ? nT(UT, TT) : "new" === vT ? MT(UT, mT, TT) : zT(pT, UT, mT, TT), WT()
          },
          onBack: () => {
            lT("choose")
          },
          prepopName: "existing" === vT ? null === (UT = mT.find((TT => TT.schematicId === pT))) || void 0 === UT ? void 0 : UT.name : null
        })]
      })
    }

    function YT(TT) {
      let {
        type: UT,
        prepopName: mT,
        ownedSchematics: WT,
        onSubmit: zT,
        onBack: MT
      } = TT;
      const {
        t: gT
      } = (0, BT.z)(), [nT, HT] = (0, jT.useState)(""), [lT, pT] = (0, jT.useState)(""), [ZT, vT] = (0, jT.useState)(null), [fT, qT] = (0, jT.useState)(!0), eT = TT => {
        var mT;
        TT = null !== (mT = TT) && void 0 !== mT ? mT : nT;
        const zT = "new" === UT ? (0, OT.C)(TT) : null,
          MT = [...(0, OT.Ib)(TT), ...zT ? [zT] : []];
        return MT.length > 0 ? (vT(MT.join(", ")), !1) : "new" === UT && WT.find((UT => UT.name === TT)) ? (vT(gT("worldBuilder:schematicAlreadyExists")), !1) : (vT(null), !0)
      };
      return (0, cT.jsxs)("div", {
        className: "SaveSchematicWindow",
        children: [(0, cT.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: gT("general:name")
        }), (0, cT.jsx)(iT.e, {
          className: kT()("SaveSchematicName", {
            Error: ZT
          }),
          forcedText: mT,
          onValueChange: TT => {
            HT(TT), eT(TT)
          },
          placeholderText: gT("worldBuilder:schematicNamePlaceholder"),
          maxLength: OT.zb
        }), (0, cT.jsx)("h2", {
          className: kT()("SaveSchematicError", {
            Hidden: !ZT
          }),
          children: ZT
        }), (0, cT.jsx)("h2", {
          className: kT()("SchematicPopupSubtitle", {
            Hidden: "file" === UT
          }),
          children: gT("general:description")
        }), (0, cT.jsx)(iT.e, {
          className: kT()("SaveSchematicDescription", {
            Hidden: "file" === UT
          }),
          onValueChange: pT,
          placeholderText: gT("worldBuilder:schematicDescriptionPlaceholder"),
          maxLength: OT.xb,
          useTextarea: !0
        }), (0, cT.jsxs)("div", {
          className: kT()("SaveSchematicCheckboxContainer", {
            WarningBorder: "existing" === UT
          }),
          children: [(0, cT.jsx)(bT.d, {
            checked: fT,
            onChange: TT => {
              qT(TT.target.checked)
            },
            disabled: !1,
            className: "SaveSchematicCheckbox"
          }), (0, cT.jsx)("h1", {
            className: "SchematicPopupSubtitle",
            children: gT("existing" === UT ? "worldBuilder:overwriteLobbyCode" : "worldBuilder:includeLobbyCode")
          })]
        }), "existing" === UT && (0, cT.jsx)("div", {
          className: "SaveSchematicLobbyCodeWarning",
          children: gT("worldBuilder:lobbyCodeWarning")
        }), (0, cT.jsxs)("div", {
          className: "SaveSchematicButtons",
          children: [(0, cT.jsx)(LT.l, {
            className: "SaveSchematicButton",
            onClick: () => {
              eT() && zT(fT, nT, lT)
            },
            children: gT("file" === UT ? "general:download" : "general:save")
          }), (0, cT.jsx)(LT.I, {
            className: "SaveSchematicButton",
            onClick: MT,
            children: gT("general:cancel")
          })]
        })]
      })
    }
    var JT = mT(1302),
      xT = mT(1863),
      dT = mT(1231);

    function wT(TT, UT) {
      if ("devDownloadJson" !== TT) ! function(TT, UT) {
        const mT = JT.clientSideServerUrls.getHttpUrlFromWebSocketUrl((0, MT.c)().websocketUrl);
        let nT = !1;
        const HT = async (TT, UT) => {
          if (nT) return;
          nT = !0;
          const {
            gameNameWithVariation: WT,
            lobbyName: gT
          } = (0, MT.c)(), HT = {
            gameNameWithVariation: WT,
            lobbyName: gT
          };
          return await (0, dT.postJsonWithMetricsCookiesAndJsonResponse)(`${mT}/schematic/${TT}`, zT.G[TT].toBuffer({
            ...HT,
            ...UT
          }), {
            retries: 1
          })
        };
        if ("Plugin|WorldBuilder|SaveSchematic" === TT) ! function(TT) {
          let {
            ownedSchematics: UT,
            onChosenDownload: mT,
            onChosenEdit: WT,
            onChosenNew: zT,
            onClose: MT
          } = TT;
          lT.NotificationProvider.showCustomPopup({
            body: TT => (0, cT.jsx)(eT, {
              ownedSchematics: UT,
              onChosenDownload: mT,
              onChosenEdit: WT,
              onChosenNew: zT,
              onClose: TT
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: MT,
            unlockPointerKey: "schematicSaverPopup"
          })
        }({
          ownedSchematics: UT,
          onChosenDownload: (TT, UT) => {
            HT("download-schematic", {
              name: TT,
              includeLobbyCode: UT
            }).then((UT => {
              let {
                buffer: {
                  data: mT
                }
              } = UT;
              const zT = WT.HB.from(mT);
              (0, xT.downloadBlob)(new Blob([zT], {
                type: "application/octet-stream"
              }), `${TT}.bloxdschem`)
            }))
          },
          onClose: () => {
            HT("cancel", {})
          },
          onChosenEdit: (TT, UT, mT, WT) => {
            HT("save-to-profile", {
              schematicId: TT,
              name: UT,
              description: mT,
              includeLobbyCode: WT
            })
          },
          onChosenNew: (TT, UT, mT) => {
            HT("save-to-profile", {
              schematicId: null,
              name: TT,
              description: UT,
              includeLobbyCode: mT
            })
          }
        });
        else if ("Plugin|WorldBuilder|LoadSchematic" === TT) ! function(TT) {
          let {
            ownedSchematics: UT,
            onChosenFile: mT,
            onChosenPreset: WT,
            onClose: zT
          } = TT;
          lT.NotificationProvider.showCustomPopup({
            body: TT => (0, cT.jsx)(fT, {
              ownedSchematics: UT,
              onChosenFile: mT,
              onChosenPreset: WT,
              onClose: TT
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: zT,
            unlockPointerKey: "schematicLoaderPopup"
          })
        }({
          ownedSchematics: UT,
          onChosenFile: async TT => {
            const UT = WT.HB.from(await TT.arrayBuffer()),
              {
                gameNameWithVariation: gT,
                lobbyName: nT
              } = (0, MT.c)();
            await (0, dT.postBinaryWithMetricsCookiesAndCustomResponse)(`${mT}/schematic/upload-schematic`, zT.G["upload-schematic"].toBuffer({
              gameNameWithVariation: gT,
              lobbyName: nT,
              schematic: UT
            }), {
              retries: 1
            }, dT.HttpPayloadType.json)
          },
          onChosenPreset: TT => {
            HT("load-from-profile", {
              schematicId: TT
            })
          },
          onClose: () => {
            HT("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ListSchematics" === TT)(0, gT.e)({
          ownedSchematics: Array.isArray(UT) ? UT : UT.schematics,
          currentWorldSchematicId: Array.isArray(UT) ? null : UT.currentWorldSchematicId,
          onClose: () => {
            HT("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ExportWorld" === TT) {
          var kT;
          const TT = null !== (kT = UT.schematic) && void 0 !== kT ? kT : UT;
          (0, qT.i)({
            schematic: TT,
            inSourceWorld: TT.schematicId === UT.currentWorldSchematicId,
            onClose: () => {
              HT("cancel", {})
            }
          })
        } else console.error(`Unknown plugin message type ${TT}`)
      }(TT, UT);
      else {
        const TT = JSON.stringify(UT.data, null, 2);
        (0, xT.downloadBlob)(new Blob([TT], {
          type: "application/json"
        }), UT.filename)
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);