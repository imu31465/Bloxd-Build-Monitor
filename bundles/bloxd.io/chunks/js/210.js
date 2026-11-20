export const id = 210;
export const ids = [210];
export const modules = {
  35805: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => vb,
      d: () => Pb
    });
    var Ab = Ub(52),
      Mb = Ub(1260),
      Tb = Ub(1134),
      Eb = Ub(1254),
      Yb = Ub(3161),
      Bb = Ub(4616),
      eb = Ub(1023);

    function vb(bb) {
      let {
        loading: ab,
        schematics: Ub,
        onSchematicPicked: Ab,
        selectedSchematicIdList: Mb = [],
        disableAutoExport: Bb
      } = bb;
      const {
        t: vb
      } = (0, Tb.A)();
      return (0, eb.jsxs)("div", {
        className: "SchematicList",
        children: [ab && (0, eb.jsx)(Eb.b, {}), !ab && 0 === Ub.length && (0, eb.jsx)("div", {
          className: "NoSchematicsText",
          children: vb("worldBuilder:noSavedSchematic")
        }), !ab && Ub.map((bb => (0, eb.jsx)(Yb.f, {
          source: {
            type: "schematic",
            schematic: bb
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            Ab(bb)
          },
          isSelected: Mb.includes(bb.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: bb.isAutoExported && Bb,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, bb.schematicId)))]
      })
    }

    function Lb(bb) {
      let {
        ownedSchematics: ab,
        currentWorldSchematicId: Ub,
        onClose: Mb
      } = bb;
      const {
        t: Eb
      } = (0, Tb.A)(), [Yb, Lb] = (0, Ab.useState)(null);
      return (0, eb.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === Yb && (0, eb.jsxs)(eb.Fragment, {
          children: [(0, eb.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: Eb("worldBuilder:schematicList")
          }), (0, eb.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: Eb("worldBuilder:clickSchematicForOptions")
          }), (0, eb.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, eb.jsx)(vb, {
              loading: !1,
              schematics: ab,
              onSchematicPicked: bb => {
                Lb(bb)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== Yb && (0, eb.jsx)(Bb.j, {
          schematic: Yb,
          inSourceWorld: Yb.schematicId === Ub,
          onSchematicUpdate: bb => {
            Lb(bb)
          },
          onClose: () => {
            Lb(null), Mb()
          }
        })]
      })
    }

    function Pb(bb) {
      let {
        ownedSchematics: ab,
        currentWorldSchematicId: Ub,
        onClose: Ab
      } = bb;
      Mb.NotificationProvider.showCustomPopup({
        body: bb => (0, eb.jsx)(Lb, {
          ownedSchematics: ab,
          currentWorldSchematicId: Ub,
          onClose: bb
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: Ab,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  40856: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      runClientGameMessage: () => Hb
    });
    var Ab = Ub(3415),
      Mb = Ub(3433),
      Tb = Ub(1242),
      Eb = Ub(35805),
      Yb = Ub(4638),
      Bb = Ub(984),
      eb = Ub.n(Bb),
      vb = Ub(52),
      Lb = Ub(1260),
      Pb = Ub(1352),
      Xb = Ub(325),
      jb = Ub(1134),
      Rb = Ub(990),
      kb = Ub(1023);

    function yb(bb) {
      let {
        onFilePicked: ab
      } = bb;
      const {
        t: Ub
      } = (0, jb.A)(), [Ab, Mb] = (0, vb.useState)(null), {
        getRootProps: Tb,
        getInputProps: Eb,
        isDragActive: Bb
      } = (0, Yb.b)({
        onDrop: bb => {
          bb.length > 0 && Mb(bb[0])
        },
        useFsAccessApi: !1
      }), Lb = Ab && Ab.size > 1024 * Xb.Sc;
      return (0, kb.jsxs)("div", {
        className: "SchematicUploadContainer",
        children: [(0, kb.jsxs)("div", {
          ...Tb({
            className: eb()("SchematicUpload", {
              ActiveDrag: Bb
            })
          }),
          children: [(0, kb.jsx)("input", {
            ...Eb({
              accept: ".bloxdschem"
            })
          }), !Bb && Ab ? (0, kb.jsxs)(kb.Fragment, {
            children: [(0, kb.jsx)("div", {
              className: eb()("SchematicUploadIcon", "Active", {
                TooBig: Lb
              }),
              children: (0, kb.jsx)(Rb.e, {
                name: "file-lines"
              })
            }), (0, kb.jsx)("div", {
              className: "SchematicUploadInstructions Active",
              children: Ab.name
            })]
          }) : (0, kb.jsxs)(kb.Fragment, {
            children: [(0, kb.jsx)("div", {
              className: "SchematicUploadIcon",
              children: (0, kb.jsx)(Rb.e, {
                name: "up-from-bracket"
              })
            }), (0, kb.jsx)("div", {
              className: "SchematicUploadInstructions",
              children: Ub("worldBuilder:dragAFileHere")
            })]
          })]
        }), (0, kb.jsx)(Pb.m, {
          disabled: Lb || !Ab,
          className: "SchematicUploadButton",
          onClick: () => {
            !Lb && Ab && ab(Ab)
          },
          children: Lb ? Ub("worldBuilder:fileTooBig", {
            maxSizeKb: Xb.Sc
          }) : Ub("worldBuilder:upload")
        })]
      })
    }

    function Zb(bb) {
      let {
        ownedSchematics: ab,
        onClose: Ub,
        onChosenPreset: Ab,
        onChosenFile: Mb
      } = bb;
      const {
        t: Tb
      } = (0, jb.A)();
      return (0, kb.jsxs)(kb.Fragment, {
        children: [(0, kb.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: Tb("worldBuilder:loadSchematic")
        }), (0, kb.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: Tb("worldBuilder:chooseOneOfYourSchematics")
        }), (0, kb.jsx)("div", {
          className: "SchematicPopupSchematicListContainer",
          children: (0, kb.jsx)(Eb.c, {
            schematics: ab,
            onSchematicPicked: bb => {
              Ab(bb.schematicId), Ub()
            },
            loading: !1,
            disableAutoExport: !0
          })
        }), (0, kb.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: Tb("worldBuilder:uploadNewSchematic")
        }), (0, kb.jsx)(yb, {
          onFilePicked: async bb => {
            try {
              await Mb(bb)
            } catch (ab) {
              console.warn("Schematic upload failed", ab)
            } finally {
              Ub()
            }
          }
        })]
      })
    }
    var Db = Ub(4616),
      zb = Ub(1589),
      xb = Ub(4054),
      ib = Ub(1162);

    function fb(bb) {
      var ab;
      let {
        ownedSchematics: Ub,
        onClose: Ab,
        onChosenEdit: Mb,
        onChosenNew: Tb,
        onChosenDownload: Yb
      } = bb;
      const {
        t: Bb
      } = (0, jb.A)(), [eb, Lb] = (0, vb.useState)("choose"), [Xb, Rb] = (0, vb.useState)(null), [yb, Zb] = (0, vb.useState)(null);
      return (0, kb.jsxs)(kb.Fragment, {
        children: [(0, kb.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: Bb("worldBuilder:saveSchematic")
        }), "choose" === eb && (0, kb.jsxs)(kb.Fragment, {
          children: [(0, kb.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: Bb("worldBuilder:overwriteOneOfYourSchematics")
          }), (0, kb.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, kb.jsx)(Eb.c, {
              schematics: Ub,
              onSchematicPicked: bb => {
                Rb(bb.schematicId), Zb("existing"), Lb("save")
              },
              loading: !1,
              disableAutoExport: !1
            })
          }), (0, kb.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: Bb("general:otherOptions")
          }), (0, kb.jsxs)("div", {
            className: "OtherOptions",
            children: [(0, kb.jsx)(Pb.m, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                Zb("new"), Lb("save")
              },
              children: Bb("worldBuilder:saveAsNewSchematic")
            }), (0, kb.jsx)(Pb.g, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                Zb("file"), Lb("save")
              },
              children: Bb("worldBuilder:downloadSchematic")
            })]
          })]
        }), "choose" !== eb && (0, kb.jsx)(mb, {
          type: yb,
          ownedSchematics: Ub,
          onSubmit: (bb, ab, Ub) => {
            "file" === yb ? Yb(ab, bb) : "new" === yb ? Tb(ab, Ub, bb) : Mb(Xb, ab, Ub, bb), Ab()
          },
          onBack: () => {
            Lb("choose")
          },
          prepopName: "existing" === yb ? null === (ab = Ub.find((bb => bb.schematicId === Xb))) || void 0 === ab ? void 0 : ab.name : null
        })]
      })
    }

    function mb(bb) {
      let {
        type: ab,
        prepopName: Ub,
        ownedSchematics: Ab,
        onSubmit: Mb,
        onBack: Tb
      } = bb;
      const {
        t: Eb
      } = (0, jb.A)(), [Yb, Bb] = (0, vb.useState)(""), [Lb, Xb] = (0, vb.useState)(""), [Rb, yb] = (0, vb.useState)(null), [Zb, Db] = (0, vb.useState)(!0), fb = bb => {
        var Ub;
        bb = null !== (Ub = bb) && void 0 !== Ub ? Ub : Yb;
        const Mb = "new" === ab ? (0, ib.D)(bb) : null,
          Tb = [...(0, ib.Ab)(bb), ...Mb ? [Mb] : []];
        return Tb.length > 0 ? (yb(Tb.join(", ")), !1) : "new" === ab && Ab.find((ab => ab.name === bb)) ? (yb(Eb("worldBuilder:schematicAlreadyExists")), !1) : (yb(null), !0)
      };
      return (0, kb.jsxs)("div", {
        className: "SaveSchematicWindow",
        children: [(0, kb.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: Eb("general:name")
        }), (0, kb.jsx)(zb.c, {
          className: eb()("SaveSchematicName", {
            Error: Rb
          }),
          forcedText: Ub,
          onValueChange: bb => {
            Bb(bb), fb(bb)
          },
          placeholderText: Eb("worldBuilder:schematicNamePlaceholder"),
          maxLength: ib.wb
        }), (0, kb.jsx)("h2", {
          className: eb()("SaveSchematicError", {
            Hidden: !Rb
          }),
          children: Rb
        }), (0, kb.jsx)("h2", {
          className: eb()("SchematicPopupSubtitle", {
            Hidden: "file" === ab
          }),
          children: Eb("general:description")
        }), (0, kb.jsx)(zb.c, {
          className: eb()("SaveSchematicDescription", {
            Hidden: "file" === ab
          }),
          onValueChange: Xb,
          placeholderText: Eb("worldBuilder:schematicDescriptionPlaceholder"),
          maxLength: ib.ub,
          useTextarea: !0
        }), (0, kb.jsxs)("div", {
          className: eb()("SaveSchematicCheckboxContainer", {
            WarningBorder: "existing" === ab
          }),
          children: [(0, kb.jsx)(xb.d, {
            checked: Zb,
            onChange: bb => {
              Db(bb.target.checked)
            },
            disabled: !1,
            className: "SaveSchematicCheckbox"
          }), (0, kb.jsx)("h1", {
            className: "SchematicPopupSubtitle",
            children: Eb("existing" === ab ? "worldBuilder:overwriteLobbyCode" : "worldBuilder:includeLobbyCode")
          })]
        }), "existing" === ab && (0, kb.jsx)("div", {
          className: "SaveSchematicLobbyCodeWarning",
          children: Eb("worldBuilder:lobbyCodeWarning")
        }), (0, kb.jsxs)("div", {
          className: "SaveSchematicButtons",
          children: [(0, kb.jsx)(Pb.m, {
            className: "SaveSchematicButton",
            onClick: () => {
              fb() && Mb(Zb, Yb, Lb)
            },
            children: Eb("file" === ab ? "general:download" : "general:save")
          }), (0, kb.jsx)(Pb.D, {
            className: "SaveSchematicButton",
            onClick: Tb,
            children: Eb("general:cancel")
          })]
        })]
      })
    }
    var pb = Ub(1142),
      Nb = Ub(1639),
      Wb = Ub(1065);

    function Hb(bb, ab) {
      if ("devDownloadJson" !== bb) ! function(bb, ab) {
        const Ub = pb.clientSideServerUrls.getHttpUrlFromWebSocketUrl((0, Tb.e)().websocketUrl);
        let Yb = !1;
        const Bb = async (bb, ab) => {
          if (Yb) return;
          Yb = !0;
          const {
            gameNameWithVariation: Ab,
            lobbyName: Eb
          } = (0, Tb.e)(), Bb = {
            gameNameWithVariation: Ab,
            lobbyName: Eb
          };
          return await (0, Wb.postJsonWithMetricsCookiesAndJsonResponse)(`${Ub}/schematic/${bb}`, Mb.A[bb].toBuffer({
            ...Bb,
            ...ab
          }), {
            retries: 1
          })
        };
        if ("Plugin|WorldBuilder|SaveSchematic" === bb) ! function(bb) {
          let {
            ownedSchematics: ab,
            onChosenDownload: Ub,
            onChosenEdit: Ab,
            onChosenNew: Mb,
            onClose: Tb
          } = bb;
          Lb.NotificationProvider.showCustomPopup({
            body: bb => (0, kb.jsx)(fb, {
              ownedSchematics: ab,
              onChosenDownload: Ub,
              onChosenEdit: Ab,
              onChosenNew: Mb,
              onClose: bb
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: Tb,
            unlockPointerKey: "schematicSaverPopup"
          })
        }({
          ownedSchematics: ab,
          onChosenDownload: (bb, ab) => {
            Bb("download-schematic", {
              name: bb,
              includeLobbyCode: ab
            }).then((ab => {
              let {
                buffer: {
                  data: Ub
                }
              } = ab;
              const Mb = Ab.OX.from(Ub);
              (0, Nb.downloadBlob)(new Blob([Mb], {
                type: "application/octet-stream"
              }), `${bb}.bloxdschem`)
            }))
          },
          onClose: () => {
            Bb("cancel", {})
          },
          onChosenEdit: (bb, ab, Ub, Ab) => {
            Bb("save-to-profile", {
              schematicId: bb,
              name: ab,
              description: Ub,
              includeLobbyCode: Ab
            })
          },
          onChosenNew: (bb, ab, Ub) => {
            Bb("save-to-profile", {
              schematicId: null,
              name: bb,
              description: ab,
              includeLobbyCode: Ub
            })
          }
        });
        else if ("Plugin|WorldBuilder|LoadSchematic" === bb) ! function(bb) {
          let {
            ownedSchematics: ab,
            onChosenFile: Ub,
            onChosenPreset: Ab,
            onClose: Mb
          } = bb;
          Lb.NotificationProvider.showCustomPopup({
            body: bb => (0, kb.jsx)(Zb, {
              ownedSchematics: ab,
              onChosenFile: Ub,
              onChosenPreset: Ab,
              onClose: bb
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: Mb,
            unlockPointerKey: "schematicLoaderPopup"
          })
        }({
          ownedSchematics: ab,
          onChosenFile: async bb => {
            const ab = Ab.OX.from(await bb.arrayBuffer()),
              {
                gameNameWithVariation: Eb,
                lobbyName: Yb
              } = (0, Tb.e)();
            await (0, Wb.postBinaryWithMetricsCookiesAndCustomResponse)(`${Ub}/schematic/upload-schematic`, Mb.A["upload-schematic"].toBuffer({
              gameNameWithVariation: Eb,
              lobbyName: Yb,
              schematic: ab
            }), {
              retries: 1
            }, Wb.HttpPayloadType.json)
          },
          onChosenPreset: bb => {
            Bb("load-from-profile", {
              schematicId: bb
            })
          },
          onClose: () => {
            Bb("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ListSchematics" === bb)(0, Eb.d)({
          ownedSchematics: Array.isArray(ab) ? ab : ab.schematics,
          currentWorldSchematicId: Array.isArray(ab) ? null : ab.currentWorldSchematicId,
          onClose: () => {
            Bb("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ExportWorld" === bb) {
          var eb;
          const bb = null !== (eb = ab.schematic) && void 0 !== eb ? eb : ab;
          (0, Db.l)({
            schematic: bb,
            inSourceWorld: bb.schematicId === ab.currentWorldSchematicId,
            onClose: () => {
              Bb("cancel", {})
            }
          })
        } else console.error(`Unknown plugin message type ${bb}`)
      }(bb, ab);
      else {
        const bb = JSON.stringify(ab.data, null, 2);
        (0, Nb.downloadBlob)(new Blob([bb], {
          type: "application/json"
        }), ab.filename)
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);