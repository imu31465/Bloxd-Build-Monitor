export const id = 211;
export const ids = [211];
export const modules = {
  35975: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => ab,
      e: () => wb
    });
    var Bb = hb(49),
      Ob = hb(1249),
      Gb = hb(1095),
      Ub = hb(1242),
      Lb = hb(3268),
      Yb = hb(4694),
      Sb = hb(1007);

    function ab(bb) {
      let {
        loading: ub,
        schematics: hb,
        onSchematicPicked: Bb,
        selectedSchematicIdList: Ob = [],
        disableAutoExport: Yb
      } = bb;
      const {
        t: ab
      } = (0, Gb.K)();
      return (0, Sb.jsxs)("div", {
        className: "SchematicList",
        children: [ub && (0, Sb.jsx)(Ub.c, {}), !ub && 0 === hb.length && (0, Sb.jsx)("div", {
          className: "NoSchematicsText",
          children: ab("worldBuilder:noSavedSchematic")
        }), !ub && hb.map((bb => (0, Sb.jsx)(Lb.e, {
          source: {
            type: "schematic",
            schematic: bb
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            Bb(bb)
          },
          isSelected: Ob.includes(bb.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: bb.isAutoExported && Yb,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, bb.schematicId)))]
      })
    }

    function Hb(bb) {
      let {
        ownedSchematics: ub,
        currentWorldSchematicId: hb,
        onClose: Ob
      } = bb;
      const {
        t: Ub
      } = (0, Gb.K)(), [Lb, Hb] = (0, Bb.useState)(null);
      return (0, Sb.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === Lb && (0, Sb.jsxs)(Sb.Fragment, {
          children: [(0, Sb.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: Ub("worldBuilder:schematicList")
          }), (0, Sb.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: Ub("worldBuilder:clickSchematicForOptions")
          }), (0, Sb.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, Sb.jsx)(ab, {
              loading: !1,
              schematics: ub,
              onSchematicPicked: bb => {
                Hb(bb)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== Lb && (0, Sb.jsx)(Yb.i, {
          schematic: Lb,
          inSourceWorld: Lb.schematicId === hb,
          onSchematicUpdate: bb => {
            Hb(bb)
          },
          onClose: () => {
            Hb(null), Ob()
          }
        })]
      })
    }

    function wb(bb) {
      let {
        ownedSchematics: ub,
        currentWorldSchematicId: hb,
        onClose: Bb
      } = bb;
      Ob.NotificationProvider.showCustomPopup({
        body: bb => (0, Sb.jsx)(Hb, {
          ownedSchematics: ub,
          currentWorldSchematicId: hb,
          onClose: bb
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: Bb,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  41199: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      runClientGameMessage: () => zb
    });
    var Bb = hb(3507),
      Ob = hb(3516),
      Gb = hb(1218),
      Ub = hb(35975),
      Lb = hb(4723),
      Yb = hb(958),
      Sb = hb.n(Yb),
      ab = hb(49),
      Hb = hb(1249),
      wb = hb(1357),
      Zb = hb(314),
      Xb = hb(1095),
      pb = hb(966),
      ob = hb(1007);

    function Ab(bb) {
      let {
        onFilePicked: ub
      } = bb;
      const {
        t: hb
      } = (0, Xb.K)(), [Bb, Ob] = (0, ab.useState)(null), {
        getRootProps: Gb,
        getInputProps: Ub,
        isDragActive: Yb
      } = (0, Lb.e)({
        onDrop: bb => {
          bb.length > 0 && Ob(bb[0])
        },
        useFsAccessApi: !1
      }), Hb = Bb && Bb.size > 1024 * Zb.$c;
      return (0, ob.jsxs)("div", {
        className: "SchematicUploadContainer",
        children: [(0, ob.jsxs)("div", {
          ...Gb({
            className: Sb()("SchematicUpload", {
              ActiveDrag: Yb
            })
          }),
          children: [(0, ob.jsx)("input", {
            ...Ub({
              accept: ".bloxdschem"
            })
          }), !Yb && Bb ? (0, ob.jsxs)(ob.Fragment, {
            children: [(0, ob.jsx)("div", {
              className: Sb()("SchematicUploadIcon", "Active", {
                TooBig: Hb
              }),
              children: (0, ob.jsx)(pb.e, {
                name: "file-lines"
              })
            }), (0, ob.jsx)("div", {
              className: "SchematicUploadInstructions Active",
              children: Bb.name
            })]
          }) : (0, ob.jsxs)(ob.Fragment, {
            children: [(0, ob.jsx)("div", {
              className: "SchematicUploadIcon",
              children: (0, ob.jsx)(pb.e, {
                name: "up-from-bracket"
              })
            }), (0, ob.jsx)("div", {
              className: "SchematicUploadInstructions",
              children: hb("worldBuilder:dragAFileHere")
            })]
          })]
        }), (0, ob.jsx)(wb.m, {
          disabled: Hb || !Bb,
          className: "SchematicUploadButton",
          onClick: () => {
            !Hb && Bb && ub(Bb)
          },
          children: Hb ? hb("worldBuilder:fileTooBig", {
            maxSizeKb: Zb.$c
          }) : hb("worldBuilder:upload")
        })]
      })
    }

    function lb(bb) {
      let {
        ownedSchematics: ub,
        onClose: hb,
        onChosenPreset: Bb,
        onChosenFile: Ob
      } = bb;
      const {
        t: Gb
      } = (0, Xb.K)();
      return (0, ob.jsxs)(ob.Fragment, {
        children: [(0, ob.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: Gb("worldBuilder:loadSchematic")
        }), (0, ob.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: Gb("worldBuilder:chooseOneOfYourSchematics")
        }), (0, ob.jsx)("div", {
          className: "SchematicPopupSchematicListContainer",
          children: (0, ob.jsx)(Ub.c, {
            schematics: ub,
            onSchematicPicked: bb => {
              Bb(bb.schematicId), hb()
            },
            loading: !1,
            disableAutoExport: !0
          })
        }), (0, ob.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: Gb("worldBuilder:uploadNewSchematic")
        }), (0, ob.jsx)(Ab, {
          onFilePicked: async bb => {
            try {
              await Ob(bb)
            } catch (ub) {
              console.warn("Schematic upload failed", ub)
            } finally {
              hb()
            }
          }
        })]
      })
    }
    var Kb = hb(4694),
      Wb = hb(1585),
      Cb = hb(4123),
      db = hb(1124);

    function rb(bb) {
      var ub;
      let {
        ownedSchematics: hb,
        onClose: Bb,
        onChosenEdit: Ob,
        onChosenNew: Gb,
        onChosenDownload: Lb
      } = bb;
      const {
        t: Yb
      } = (0, Xb.K)(), [Sb, Hb] = (0, ab.useState)("choose"), [Zb, pb] = (0, ab.useState)(null), [Ab, lb] = (0, ab.useState)(null);
      return (0, ob.jsxs)(ob.Fragment, {
        children: [(0, ob.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: Yb("worldBuilder:saveSchematic")
        }), "choose" === Sb && (0, ob.jsxs)(ob.Fragment, {
          children: [(0, ob.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: Yb("worldBuilder:overwriteOneOfYourSchematics")
          }), (0, ob.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, ob.jsx)(Ub.c, {
              schematics: hb,
              onSchematicPicked: bb => {
                pb(bb.schematicId), lb("existing"), Hb("save")
              },
              loading: !1,
              disableAutoExport: !1
            })
          }), (0, ob.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: Yb("general:otherOptions")
          }), (0, ob.jsxs)("div", {
            className: "OtherOptions",
            children: [(0, ob.jsx)(wb.m, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                lb("new"), Hb("save")
              },
              children: Yb("worldBuilder:saveAsNewSchematic")
            }), (0, ob.jsx)(wb.e, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                lb("file"), Hb("save")
              },
              children: Yb("worldBuilder:downloadSchematic")
            })]
          })]
        }), "choose" !== Sb && (0, ob.jsx)(jb, {
          type: Ab,
          ownedSchematics: hb,
          onSubmit: (bb, ub, hb) => {
            "file" === Ab ? Lb(ub, bb) : "new" === Ab ? Gb(ub, hb, bb) : Ob(Zb, ub, hb, bb), Bb()
          },
          onBack: () => {
            Hb("choose")
          },
          prepopName: "existing" === Ab ? null === (ub = hb.find((bb => bb.schematicId === Zb))) || void 0 === ub ? void 0 : ub.name : null
        })]
      })
    }

    function jb(bb) {
      let {
        type: ub,
        prepopName: hb,
        ownedSchematics: Bb,
        onSubmit: Ob,
        onBack: Gb
      } = bb;
      const {
        t: Ub
      } = (0, Xb.K)(), [Lb, Yb] = (0, ab.useState)(""), [Hb, Zb] = (0, ab.useState)(""), [pb, Ab] = (0, ab.useState)(null), [lb, Kb] = (0, ab.useState)(!0), rb = bb => {
        var hb;
        bb = null !== (hb = bb) && void 0 !== hb ? hb : Lb;
        const Ob = "new" === ub ? (0, db.H)(bb) : null,
          Gb = [...(0, db.Nb)(bb), ...Ob ? [Ob] : []];
        return Gb.length > 0 ? (Ab(Gb.join(", ")), !1) : "new" === ub && Bb.find((ub => ub.name === bb)) ? (Ab(Ub("worldBuilder:schematicAlreadyExists")), !1) : (Ab(null), !0)
      };
      return (0, ob.jsxs)("div", {
        className: "SaveSchematicWindow",
        children: [(0, ob.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: Ub("general:name")
        }), (0, ob.jsx)(Wb.b, {
          className: Sb()("SaveSchematicName", {
            Error: pb
          }),
          forcedText: hb,
          onValueChange: bb => {
            Yb(bb), rb(bb)
          },
          placeholderText: Ub("worldBuilder:schematicNamePlaceholder"),
          maxLength: db.Fb
        }), (0, ob.jsx)("h2", {
          className: Sb()("SaveSchematicError", {
            Hidden: !pb
          }),
          children: pb
        }), (0, ob.jsx)("h2", {
          className: Sb()("SchematicPopupSubtitle", {
            Hidden: "file" === ub
          }),
          children: Ub("general:description")
        }), (0, ob.jsx)(Wb.b, {
          className: Sb()("SaveSchematicDescription", {
            Hidden: "file" === ub
          }),
          onValueChange: Zb,
          placeholderText: Ub("worldBuilder:schematicDescriptionPlaceholder"),
          maxLength: db.Bb,
          useTextarea: !0
        }), (0, ob.jsxs)("div", {
          className: Sb()("SaveSchematicCheckboxContainer", {
            WarningBorder: "existing" === ub
          }),
          children: [(0, ob.jsx)(Cb.d, {
            checked: lb,
            onChange: bb => {
              Kb(bb.target.checked)
            },
            disabled: !1,
            className: "SaveSchematicCheckbox"
          }), (0, ob.jsx)("h1", {
            className: "SchematicPopupSubtitle",
            children: Ub("existing" === ub ? "worldBuilder:overwriteLobbyCode" : "worldBuilder:includeLobbyCode")
          })]
        }), "existing" === ub && (0, ob.jsx)("div", {
          className: "SaveSchematicLobbyCodeWarning",
          children: Ub("worldBuilder:lobbyCodeWarning")
        }), (0, ob.jsxs)("div", {
          className: "SaveSchematicButtons",
          children: [(0, ob.jsx)(wb.m, {
            className: "SaveSchematicButton",
            onClick: () => {
              rb() && Ob(lb, Lb, Hb)
            },
            children: Ub("file" === ub ? "general:download" : "general:save")
          }), (0, ob.jsx)(wb.H, {
            className: "SaveSchematicButton",
            onClick: Gb,
            children: Ub("general:cancel")
          })]
        })]
      })
    }
    var nb = hb(1103),
      Db = hb(1622),
      xb = hb(1038);

    function zb(bb, ub) {
      if ("devDownloadJson" !== bb) ! function(bb, ub) {
        const hb = nb.clientSideServerUrls.getHttpUrlFromWebSocketUrl((0, Gb.b)().websocketUrl);
        let Lb = !1;
        const Yb = async (bb, ub) => {
          if (Lb) return;
          Lb = !0;
          const {
            gameNameWithVariation: Bb,
            lobbyName: Ub
          } = (0, Gb.b)(), Yb = {
            gameNameWithVariation: Bb,
            lobbyName: Ub
          };
          return await (0, xb.postJsonWithMetricsCookiesAndJsonResponse)(`${hb}/schematic/${bb}`, Ob.D[bb].toBuffer({
            ...Yb,
            ...ub
          }), {
            retries: 1
          })
        };
        if ("Plugin|WorldBuilder|SaveSchematic" === bb) ! function(bb) {
          let {
            ownedSchematics: ub,
            onChosenDownload: hb,
            onChosenEdit: Bb,
            onChosenNew: Ob,
            onClose: Gb
          } = bb;
          Hb.NotificationProvider.showCustomPopup({
            body: bb => (0, ob.jsx)(rb, {
              ownedSchematics: ub,
              onChosenDownload: hb,
              onChosenEdit: Bb,
              onChosenNew: Ob,
              onClose: bb
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: Gb,
            unlockPointerKey: "schematicSaverPopup"
          })
        }({
          ownedSchematics: ub,
          onChosenDownload: (bb, ub) => {
            Yb("download-schematic", {
              name: bb,
              includeLobbyCode: ub
            }).then((ub => {
              let {
                buffer: {
                  data: hb
                }
              } = ub;
              const Ob = Bb.VZ.from(hb);
              (0, Db.downloadBlob)(new Blob([Ob], {
                type: "application/octet-stream"
              }), `${bb}.bloxdschem`)
            }))
          },
          onClose: () => {
            Yb("cancel", {})
          },
          onChosenEdit: (bb, ub, hb, Bb) => {
            Yb("save-to-profile", {
              schematicId: bb,
              name: ub,
              description: hb,
              includeLobbyCode: Bb
            })
          },
          onChosenNew: (bb, ub, hb) => {
            Yb("save-to-profile", {
              schematicId: null,
              name: bb,
              description: ub,
              includeLobbyCode: hb
            })
          }
        });
        else if ("Plugin|WorldBuilder|LoadSchematic" === bb) ! function(bb) {
          let {
            ownedSchematics: ub,
            onChosenFile: hb,
            onChosenPreset: Bb,
            onClose: Ob
          } = bb;
          Hb.NotificationProvider.showCustomPopup({
            body: bb => (0, ob.jsx)(lb, {
              ownedSchematics: ub,
              onChosenFile: hb,
              onChosenPreset: Bb,
              onClose: bb
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: Ob,
            unlockPointerKey: "schematicLoaderPopup"
          })
        }({
          ownedSchematics: ub,
          onChosenFile: async bb => {
            const ub = Bb.VZ.from(await bb.arrayBuffer()),
              {
                gameNameWithVariation: Ub,
                lobbyName: Lb
              } = (0, Gb.b)();
            await (0, xb.postBinaryWithMetricsCookiesAndCustomResponse)(`${hb}/schematic/upload-schematic`, Ob.D["upload-schematic"].toBuffer({
              gameNameWithVariation: Ub,
              lobbyName: Lb,
              schematic: ub
            }), {
              retries: 1
            }, xb.HttpPayloadType.json)
          },
          onChosenPreset: bb => {
            Yb("load-from-profile", {
              schematicId: bb
            })
          },
          onClose: () => {
            Yb("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ListSchematics" === bb)(0, Ub.e)({
          ownedSchematics: Array.isArray(ub) ? ub : ub.schematics,
          currentWorldSchematicId: Array.isArray(ub) ? null : ub.currentWorldSchematicId,
          onClose: () => {
            Yb("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ExportWorld" === bb) {
          var Sb;
          const bb = null !== (Sb = ub.schematic) && void 0 !== Sb ? Sb : ub;
          (0, Kb.m)({
            schematic: bb,
            inSourceWorld: bb.schematicId === ub.currentWorldSchematicId,
            onClose: () => {
              Yb("cancel", {})
            }
          })
        } else console.error(`Unknown plugin message type ${bb}`)
      }(bb, ub);
      else {
        const bb = JSON.stringify(ub.data, null, 2);
        (0, Db.downloadBlob)(new Blob([bb], {
          type: "application/json"
        }), ub.filename)
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);