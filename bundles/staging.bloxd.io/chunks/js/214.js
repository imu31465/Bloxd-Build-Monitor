export const id = 214;
export const ids = [214];
export const modules = {
  36364: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => IS,
      f: () => kS
    });
    var tS = gS(64),
      bS = gS(1435),
      XS = gS(1281),
      xS = gS(1419),
      NS = gS(3608),
      qS = gS(5089),
      uS = gS(1181);

    function IS(SS) {
      let {
        loading: HS,
        schematics: gS,
        onSchematicPicked: tS,
        selectedSchematicIdList: bS = [],
        disableAutoExport: qS
      } = SS;
      const {
        t: IS
      } = (0, XS.F)();
      return (0, uS.jsxs)("div", {
        className: "SchematicList",
        children: [HS && (0, uS.jsx)(xS.c, {}), !HS && 0 === gS.length && (0, uS.jsx)("div", {
          className: "NoSchematicsText",
          children: IS("worldBuilder:noSavedSchematic")
        }), !HS && gS.map((SS => (0, uS.jsx)(NS.g, {
          source: {
            type: "schematic",
            schematic: SS
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            tS(SS)
          },
          isSelected: bS.includes(SS.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: SS.isAutoExported && qS,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, SS.schematicId)))]
      })
    }

    function fS(SS) {
      let {
        ownedSchematics: HS,
        currentWorldSchematicId: gS,
        onClose: bS
      } = SS;
      const {
        t: xS
      } = (0, XS.F)(), [NS, fS] = (0, tS.useState)(null);
      return (0, uS.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === NS && (0, uS.jsxs)(uS.Fragment, {
          children: [(0, uS.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: xS("worldBuilder:schematicList")
          }), (0, uS.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: xS("worldBuilder:clickSchematicForOptions")
          }), (0, uS.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, uS.jsx)(IS, {
              loading: !1,
              schematics: HS,
              onSchematicPicked: SS => {
                fS(SS)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== NS && (0, uS.jsx)(qS.j, {
          schematic: NS,
          inSourceWorld: NS.schematicId === gS,
          onSchematicUpdate: SS => {
            fS(SS)
          },
          onClose: () => {
            fS(null), bS()
          }
        })]
      })
    }

    function kS(SS) {
      let {
        ownedSchematics: HS,
        currentWorldSchematicId: gS,
        onClose: tS
      } = SS;
      bS.NotificationProvider.showCustomPopup({
        body: SS => (0, uS.jsx)(fS, {
          ownedSchematics: HS,
          currentWorldSchematicId: gS,
          onClose: SS
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: tS,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  41754: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      runClientGameMessage: () => cS
    });
    var tS = gS(3858),
      bS = gS(3870),
      XS = gS(1400),
      xS = gS(36364),
      NS = gS(5114),
      qS = gS(1121),
      uS = gS.n(qS),
      IS = gS(64),
      fS = gS(1435),
      kS = gS(1528),
      aS = gS(387),
      KS = gS(1281),
      jS = gS(1127),
      GS = gS(1181);

    function CS(SS) {
      let {
        onFilePicked: HS
      } = SS;
      const {
        t: gS
      } = (0, KS.F)(), [tS, bS] = (0, IS.useState)(null), {
        getRootProps: XS,
        getInputProps: xS,
        isDragActive: qS
      } = (0, NS.b)({
        onDrop: SS => {
          SS.length > 0 && bS(SS[0])
        },
        useFsAccessApi: !1
      }), fS = tS && tS.size > 1024 * aS.Zc;
      return (0, GS.jsxs)("div", {
        className: "SchematicUploadContainer",
        children: [(0, GS.jsxs)("div", {
          ...XS({
            className: uS()("SchematicUpload", {
              ActiveDrag: qS
            })
          }),
          children: [(0, GS.jsx)("input", {
            ...xS({
              accept: ".bloxdschem"
            })
          }), !qS && tS ? (0, GS.jsxs)(GS.Fragment, {
            children: [(0, GS.jsx)("div", {
              className: uS()("SchematicUploadIcon", "Active", {
                TooBig: fS
              }),
              children: (0, GS.jsx)(jS.d, {
                name: "file-lines"
              })
            }), (0, GS.jsx)("div", {
              className: "SchematicUploadInstructions Active",
              children: tS.name
            })]
          }) : (0, GS.jsxs)(GS.Fragment, {
            children: [(0, GS.jsx)("div", {
              className: "SchematicUploadIcon",
              children: (0, GS.jsx)(jS.d, {
                name: "up-from-bracket"
              })
            }), (0, GS.jsx)("div", {
              className: "SchematicUploadInstructions",
              children: gS("worldBuilder:dragAFileHere")
            })]
          })]
        }), (0, GS.jsx)(kS.p, {
          disabled: fS || !tS,
          className: "SchematicUploadButton",
          onClick: () => {
            !fS && tS && HS(tS)
          },
          children: fS ? gS("worldBuilder:fileTooBig", {
            maxSizeKb: aS.Zc
          }) : gS("worldBuilder:upload")
        })]
      })
    }

    function nS(SS) {
      let {
        ownedSchematics: HS,
        onClose: gS,
        onChosenPreset: tS,
        onChosenFile: bS
      } = SS;
      const {
        t: XS
      } = (0, KS.F)();
      return (0, GS.jsxs)(GS.Fragment, {
        children: [(0, GS.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: XS("worldBuilder:loadSchematic")
        }), (0, GS.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: XS("worldBuilder:chooseOneOfYourSchematics")
        }), (0, GS.jsx)("div", {
          className: "SchematicPopupSchematicListContainer",
          children: (0, GS.jsx)(xS.e, {
            schematics: HS,
            onSchematicPicked: SS => {
              tS(SS.schematicId), gS()
            },
            loading: !1,
            disableAutoExport: !0
          })
        }), (0, GS.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: XS("worldBuilder:uploadNewSchematic")
        }), (0, GS.jsx)(CS, {
          onFilePicked: async SS => {
            try {
              await bS(SS)
            } catch (HS) {
              console.warn("Schematic upload failed", HS)
            } finally {
              gS()
            }
          }
        })]
      })
    }
    var PS = gS(5089),
      QS = gS(1774),
      DS = gS(4489),
      wS = gS(1309);

    function hS(SS) {
      var HS;
      let {
        ownedSchematics: gS,
        onClose: tS,
        onChosenEdit: bS,
        onChosenNew: XS,
        onChosenDownload: NS
      } = SS;
      const {
        t: qS
      } = (0, KS.F)(), [uS, fS] = (0, IS.useState)("choose"), [aS, jS] = (0, IS.useState)(null), [CS, nS] = (0, IS.useState)(null);
      return (0, GS.jsxs)(GS.Fragment, {
        children: [(0, GS.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: qS("worldBuilder:saveSchematic")
        }), "choose" === uS && (0, GS.jsxs)(GS.Fragment, {
          children: [(0, GS.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: qS("worldBuilder:overwriteOneOfYourSchematics")
          }), (0, GS.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, GS.jsx)(xS.e, {
              schematics: gS,
              onSchematicPicked: SS => {
                jS(SS.schematicId), nS("existing"), fS("save")
              },
              loading: !1,
              disableAutoExport: !1
            })
          }), (0, GS.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: qS("general:otherOptions")
          }), (0, GS.jsxs)("div", {
            className: "OtherOptions",
            children: [(0, GS.jsx)(kS.p, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                nS("new"), fS("save")
              },
              children: qS("worldBuilder:saveAsNewSchematic")
            }), (0, GS.jsx)(kS.g, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                nS("file"), fS("save")
              },
              children: qS("worldBuilder:downloadSchematic")
            })]
          })]
        }), "choose" !== uS && (0, GS.jsx)(ZS, {
          type: CS,
          ownedSchematics: gS,
          onSubmit: (SS, HS, gS) => {
            "file" === CS ? NS(HS, SS) : "new" === CS ? XS(HS, gS, SS) : bS(aS, HS, gS, SS), tS()
          },
          onBack: () => {
            fS("choose")
          },
          prepopName: "existing" === CS ? null === (HS = gS.find((SS => SS.schematicId === aS))) || void 0 === HS ? void 0 : HS.name : null
        })]
      })
    }

    function ZS(SS) {
      let {
        type: HS,
        prepopName: gS,
        ownedSchematics: tS,
        onSubmit: bS,
        onBack: XS
      } = SS;
      const {
        t: xS
      } = (0, KS.F)(), [NS, qS] = (0, IS.useState)(""), [fS, aS] = (0, IS.useState)(""), [jS, CS] = (0, IS.useState)(null), [nS, PS] = (0, IS.useState)(!0), hS = SS => {
        var gS;
        SS = null !== (gS = SS) && void 0 !== gS ? gS : NS;
        const bS = "new" === HS ? (0, wS.B)(SS) : null,
          XS = [...(0, wS.xb)(SS), ...bS ? [bS] : []];
        return XS.length > 0 ? (CS(XS.join(", ")), !1) : "new" === HS && tS.find((HS => HS.name === SS)) ? (CS(xS("worldBuilder:schematicAlreadyExists")), !1) : (CS(null), !0)
      };
      return (0, GS.jsxs)("div", {
        className: "SaveSchematicWindow",
        children: [(0, GS.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: xS("general:name")
        }), (0, GS.jsx)(QS.e, {
          className: uS()("SaveSchematicName", {
            Error: jS
          }),
          forcedText: gS,
          onValueChange: SS => {
            qS(SS), hS(SS)
          },
          placeholderText: xS("worldBuilder:schematicNamePlaceholder"),
          maxLength: wS.mb
        }), (0, GS.jsx)("h2", {
          className: uS()("SaveSchematicError", {
            Hidden: !jS
          }),
          children: jS
        }), (0, GS.jsx)("h2", {
          className: uS()("SchematicPopupSubtitle", {
            Hidden: "file" === HS
          }),
          children: xS("general:description")
        }), (0, GS.jsx)(QS.e, {
          className: uS()("SaveSchematicDescription", {
            Hidden: "file" === HS
          }),
          onValueChange: aS,
          placeholderText: xS("worldBuilder:schematicDescriptionPlaceholder"),
          maxLength: wS.kb,
          useTextarea: !0
        }), (0, GS.jsxs)("div", {
          className: uS()("SaveSchematicCheckboxContainer", {
            WarningBorder: "existing" === HS
          }),
          children: [(0, GS.jsx)(DS.c, {
            checked: nS,
            onChange: SS => {
              PS(SS.target.checked)
            },
            disabled: !1,
            className: "SaveSchematicCheckbox"
          }), (0, GS.jsx)("h1", {
            className: "SchematicPopupSubtitle",
            children: xS("existing" === HS ? "worldBuilder:overwriteLobbyCode" : "worldBuilder:includeLobbyCode")
          })]
        }), "existing" === HS && (0, GS.jsx)("div", {
          className: "SaveSchematicLobbyCodeWarning",
          children: xS("worldBuilder:lobbyCodeWarning")
        }), (0, GS.jsxs)("div", {
          className: "SaveSchematicButtons",
          children: [(0, GS.jsx)(kS.p, {
            className: "SaveSchematicButton",
            onClick: () => {
              hS() && bS(nS, NS, fS)
            },
            children: xS("file" === HS ? "general:download" : "general:save")
          }), (0, GS.jsx)(kS.L, {
            className: "SaveSchematicButton",
            onClick: XS,
            children: xS("general:cancel")
          })]
        })]
      })
    }
    var JS = gS(1286),
      OS = gS(1844),
      dS = gS(1216);

    function cS(SS, HS) {
      if ("devDownloadJson" !== SS) ! function(SS, HS) {
        const gS = JS.clientSideServerUrls.getHttpUrlFromWebSocketUrl((0, XS.e)().websocketUrl);
        let NS = !1;
        const qS = async (SS, HS) => {
          if (NS) return;
          NS = !0;
          const {
            gameNameWithVariation: tS,
            lobbyName: xS
          } = (0, XS.e)(), qS = {
            gameNameWithVariation: tS,
            lobbyName: xS
          };
          return await (0, dS.postJsonWithMetricsCookiesAndJsonResponse)(`${gS}/schematic/${SS}`, bS.G[SS].toBuffer({
            ...qS,
            ...HS
          }), {
            retries: 1
          })
        };
        if ("Plugin|WorldBuilder|SaveSchematic" === SS) ! function(SS) {
          let {
            ownedSchematics: HS,
            onChosenDownload: gS,
            onChosenEdit: tS,
            onChosenNew: bS,
            onClose: XS
          } = SS;
          fS.NotificationProvider.showCustomPopup({
            body: SS => (0, GS.jsx)(hS, {
              ownedSchematics: HS,
              onChosenDownload: gS,
              onChosenEdit: tS,
              onChosenNew: bS,
              onClose: SS
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: XS,
            unlockPointerKey: "schematicSaverPopup"
          })
        }({
          ownedSchematics: HS,
          onChosenDownload: (SS, HS) => {
            qS("download-schematic", {
              name: SS,
              includeLobbyCode: HS
            }).then((HS => {
              let {
                buffer: {
                  data: gS
                }
              } = HS;
              const bS = tS.CK.from(gS);
              (0, OS.downloadBlob)(new Blob([bS], {
                type: "application/octet-stream"
              }), `${SS}.bloxdschem`)
            }))
          },
          onClose: () => {
            qS("cancel", {})
          },
          onChosenEdit: (SS, HS, gS, tS) => {
            qS("save-to-profile", {
              schematicId: SS,
              name: HS,
              description: gS,
              includeLobbyCode: tS
            })
          },
          onChosenNew: (SS, HS, gS) => {
            qS("save-to-profile", {
              schematicId: null,
              name: SS,
              description: HS,
              includeLobbyCode: gS
            })
          }
        });
        else if ("Plugin|WorldBuilder|LoadSchematic" === SS) ! function(SS) {
          let {
            ownedSchematics: HS,
            onChosenFile: gS,
            onChosenPreset: tS,
            onClose: bS
          } = SS;
          fS.NotificationProvider.showCustomPopup({
            body: SS => (0, GS.jsx)(nS, {
              ownedSchematics: HS,
              onChosenFile: gS,
              onChosenPreset: tS,
              onClose: SS
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: bS,
            unlockPointerKey: "schematicLoaderPopup"
          })
        }({
          ownedSchematics: HS,
          onChosenFile: async SS => {
            const HS = tS.CK.from(await SS.arrayBuffer()),
              {
                gameNameWithVariation: xS,
                lobbyName: NS
              } = (0, XS.e)();
            await (0, dS.postBinaryWithMetricsCookiesAndCustomResponse)(`${gS}/schematic/upload-schematic`, bS.G["upload-schematic"].toBuffer({
              gameNameWithVariation: xS,
              lobbyName: NS,
              schematic: HS
            }), {
              retries: 1
            }, dS.HttpPayloadType.json)
          },
          onChosenPreset: SS => {
            qS("load-from-profile", {
              schematicId: SS
            })
          },
          onClose: () => {
            qS("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ListSchematics" === SS)(0, xS.f)({
          ownedSchematics: Array.isArray(HS) ? HS : HS.schematics,
          currentWorldSchematicId: Array.isArray(HS) ? null : HS.currentWorldSchematicId,
          onClose: () => {
            qS("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ExportWorld" === SS) {
          var uS;
          const SS = null !== (uS = HS.schematic) && void 0 !== uS ? uS : HS;
          (0, PS.k)({
            schematic: SS,
            inSourceWorld: SS.schematicId === HS.currentWorldSchematicId,
            onClose: () => {
              qS("cancel", {})
            }
          })
        } else console.error(`Unknown plugin message type ${SS}`)
      }(SS, HS);
      else {
        const SS = JSON.stringify(HS.data, null, 2);
        (0, OS.downloadBlob)(new Blob([SS], {
          type: "application/json"
        }), HS.filename)
      }
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);