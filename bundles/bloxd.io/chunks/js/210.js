export const id = 210;
export const ids = [210];
export const modules = {
  36016: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => fb,
      g: () => Xb
    });
    var kb = sb(64),
      Wb = sb(1332),
      ab = sb(1197),
      Tb = sb(1327),
      Ub = sb(3263),
      Ib = sb(4638),
      Hb = sb(1087);

    function fb(bb) {
      let {
        loading: cb,
        schematics: sb,
        onSchematicPicked: kb,
        selectedSchematicIdList: Wb = [],
        disableAutoExport: Ib
      } = bb;
      const {
        t: fb
      } = (0, ab.E)();
      return (0, Hb.jsxs)("div", {
        className: "SchematicList",
        children: [cb && (0, Hb.jsx)(Tb.d, {}), !cb && 0 === sb.length && (0, Hb.jsx)("div", {
          className: "NoSchematicsText",
          children: fb("worldBuilder:noSavedSchematic")
        }), !cb && sb.map((bb => (0, Hb.jsx)(Ub.h, {
          source: {
            type: "schematic",
            schematic: bb
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            kb(bb)
          },
          isSelected: Wb.includes(bb.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: bb.isAutoExported && Ib,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, bb.schematicId)))]
      })
    }

    function Mb(bb) {
      let {
        ownedSchematics: cb,
        currentWorldSchematicId: sb,
        onClose: Wb
      } = bb;
      const {
        t: Tb
      } = (0, ab.E)(), [Ub, Mb] = (0, kb.useState)(null);
      return (0, Hb.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === Ub && (0, Hb.jsxs)(Hb.Fragment, {
          children: [(0, Hb.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: Tb("worldBuilder:schematicList")
          }), (0, Hb.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: Tb("worldBuilder:clickSchematicForOptions")
          }), (0, Hb.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, Hb.jsx)(fb, {
              loading: !1,
              schematics: cb,
              onSchematicPicked: bb => {
                Mb(bb)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== Ub && (0, Hb.jsx)(Ib.g, {
          schematic: Ub,
          inSourceWorld: Ub.schematicId === sb,
          onSchematicUpdate: bb => {
            Mb(bb)
          },
          onClose: () => {
            Mb(null), Wb()
          }
        })]
      })
    }

    function Xb(bb) {
      let {
        ownedSchematics: cb,
        currentWorldSchematicId: sb,
        onClose: kb
      } = bb;
      Wb.NotificationProvider.showCustomPopup({
        body: bb => (0, Hb.jsx)(Mb, {
          ownedSchematics: cb,
          currentWorldSchematicId: sb,
          onClose: bb
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: kb,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  41138: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      runClientGameMessage: () => tb
    });
    var kb = sb(3543),
      Wb = sb(3565),
      ab = sb(1312),
      Tb = sb(36016),
      Ub = sb(4665),
      Ib = sb(1033),
      Hb = sb.n(Ib),
      fb = sb(64),
      Mb = sb(1332),
      Xb = sb(1431),
      nb = sb(344),
      mb = sb(1197),
      lb = sb(1039),
      Qb = sb(1087);

    function eb(bb) {
      let {
        onFilePicked: cb
      } = bb;
      const {
        t: sb
      } = (0, mb.E)(), [kb, Wb] = (0, fb.useState)(null), {
        getRootProps: ab,
        getInputProps: Tb,
        isDragActive: Ib
      } = (0, Ub.c)({
        onDrop: bb => {
          bb.length > 0 && Wb(bb[0])
        },
        useFsAccessApi: !1
      }), Mb = kb && kb.size > 1024 * nb.hd;
      return (0, Qb.jsxs)("div", {
        className: "SchematicUploadContainer",
        children: [(0, Qb.jsxs)("div", {
          ...ab({
            className: Hb()("SchematicUpload", {
              ActiveDrag: Ib
            })
          }),
          children: [(0, Qb.jsx)("input", {
            ...Tb({
              accept: ".bloxdschem"
            })
          }), !Ib && kb ? (0, Qb.jsxs)(Qb.Fragment, {
            children: [(0, Qb.jsx)("div", {
              className: Hb()("SchematicUploadIcon", "Active", {
                TooBig: Mb
              }),
              children: (0, Qb.jsx)(lb.b, {
                name: "file-lines"
              })
            }), (0, Qb.jsx)("div", {
              className: "SchematicUploadInstructions Active",
              children: kb.name
            })]
          }) : (0, Qb.jsxs)(Qb.Fragment, {
            children: [(0, Qb.jsx)("div", {
              className: "SchematicUploadIcon",
              children: (0, Qb.jsx)(lb.b, {
                name: "up-from-bracket"
              })
            }), (0, Qb.jsx)("div", {
              className: "SchematicUploadInstructions",
              children: sb("worldBuilder:dragAFileHere")
            })]
          })]
        }), (0, Qb.jsx)(Xb.n, {
          disabled: Mb || !kb,
          className: "SchematicUploadButton",
          onClick: () => {
            !Mb && kb && cb(kb)
          },
          children: Mb ? sb("worldBuilder:fileTooBig", {
            maxSizeKb: nb.hd
          }) : sb("worldBuilder:upload")
        })]
      })
    }

    function Cb(bb) {
      let {
        ownedSchematics: cb,
        onClose: sb,
        onChosenPreset: kb,
        onChosenFile: Wb
      } = bb;
      const {
        t: ab
      } = (0, mb.E)();
      return (0, Qb.jsxs)(Qb.Fragment, {
        children: [(0, Qb.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: ab("worldBuilder:loadSchematic")
        }), (0, Qb.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: ab("worldBuilder:chooseOneOfYourSchematics")
        }), (0, Qb.jsx)("div", {
          className: "SchematicPopupSchematicListContainer",
          children: (0, Qb.jsx)(Tb.e, {
            schematics: cb,
            onSchematicPicked: bb => {
              kb(bb.schematicId), sb()
            },
            loading: !1,
            disableAutoExport: !0
          })
        }), (0, Qb.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: ab("worldBuilder:uploadNewSchematic")
        }), (0, Qb.jsx)(eb, {
          onFilePicked: async bb => {
            try {
              await Wb(bb)
            } catch (cb) {
              console.warn("Schematic upload failed", cb)
            } finally {
              sb()
            }
          }
        })]
      })
    }
    var Nb = sb(4638),
      Vb = sb(1664),
      Lb = sb(4129),
      ub = sb(1235);

    function Yb(bb) {
      var cb;
      let {
        ownedSchematics: sb,
        onClose: kb,
        onChosenEdit: Wb,
        onChosenNew: ab,
        onChosenDownload: Ub
      } = bb;
      const {
        t: Ib
      } = (0, mb.E)(), [Hb, Mb] = (0, fb.useState)("choose"), [nb, lb] = (0, fb.useState)(null), [eb, Cb] = (0, fb.useState)(null);
      return (0, Qb.jsxs)(Qb.Fragment, {
        children: [(0, Qb.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: Ib("worldBuilder:saveSchematic")
        }), "choose" === Hb && (0, Qb.jsxs)(Qb.Fragment, {
          children: [(0, Qb.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: Ib("worldBuilder:overwriteOneOfYourSchematics")
          }), (0, Qb.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, Qb.jsx)(Tb.e, {
              schematics: sb,
              onSchematicPicked: bb => {
                lb(bb.schematicId), Cb("existing"), Mb("save")
              },
              loading: !1,
              disableAutoExport: !1
            })
          }), (0, Qb.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: Ib("general:otherOptions")
          }), (0, Qb.jsxs)("div", {
            className: "OtherOptions",
            children: [(0, Qb.jsx)(Xb.n, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                Cb("new"), Mb("save")
              },
              children: Ib("worldBuilder:saveAsNewSchematic")
            }), (0, Qb.jsx)(Xb.d, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                Cb("file"), Mb("save")
              },
              children: Ib("worldBuilder:downloadSchematic")
            })]
          })]
        }), "choose" !== Hb && (0, Qb.jsx)(hb, {
          type: eb,
          ownedSchematics: sb,
          onSubmit: (bb, cb, sb) => {
            "file" === eb ? Ub(cb, bb) : "new" === eb ? ab(cb, sb, bb) : Wb(nb, cb, sb, bb), kb()
          },
          onBack: () => {
            Mb("choose")
          },
          prepopName: "existing" === eb ? null === (cb = sb.find((bb => bb.schematicId === nb))) || void 0 === cb ? void 0 : cb.name : null
        })]
      })
    }

    function hb(bb) {
      let {
        type: cb,
        prepopName: sb,
        ownedSchematics: kb,
        onSubmit: Wb,
        onBack: ab
      } = bb;
      const {
        t: Tb
      } = (0, mb.E)(), [Ub, Ib] = (0, fb.useState)(""), [Mb, nb] = (0, fb.useState)(""), [lb, eb] = (0, fb.useState)(null), [Cb, Nb] = (0, fb.useState)(!0), Yb = bb => {
        var sb;
        bb = null !== (sb = bb) && void 0 !== sb ? sb : Ub;
        const Wb = "new" === cb ? (0, ub.u)(bb) : null,
          ab = [...(0, ub.sb)(bb), ...Wb ? [Wb] : []];
        return ab.length > 0 ? (eb(ab.join(", ")), !1) : "new" === cb && kb.find((cb => cb.name === bb)) ? (eb(Tb("worldBuilder:schematicAlreadyExists")), !1) : (eb(null), !0)
      };
      return (0, Qb.jsxs)("div", {
        className: "SaveSchematicWindow",
        children: [(0, Qb.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: Tb("general:name")
        }), (0, Qb.jsx)(Vb.c, {
          className: Hb()("SaveSchematicName", {
            Error: lb
          }),
          forcedText: sb,
          onValueChange: bb => {
            Ib(bb), Yb(bb)
          },
          placeholderText: Tb("worldBuilder:schematicNamePlaceholder"),
          maxLength: ub.ib
        }), (0, Qb.jsx)("h2", {
          className: Hb()("SaveSchematicError", {
            Hidden: !lb
          }),
          children: lb
        }), (0, Qb.jsx)("h2", {
          className: Hb()("SchematicPopupSubtitle", {
            Hidden: "file" === cb
          }),
          children: Tb("general:description")
        }), (0, Qb.jsx)(Vb.c, {
          className: Hb()("SaveSchematicDescription", {
            Hidden: "file" === cb
          }),
          onValueChange: nb,
          placeholderText: Tb("worldBuilder:schematicDescriptionPlaceholder"),
          maxLength: ub.fb,
          useTextarea: !0
        }), (0, Qb.jsxs)("div", {
          className: Hb()("SaveSchematicCheckboxContainer", {
            WarningBorder: "existing" === cb
          }),
          children: [(0, Qb.jsx)(Lb.e, {
            checked: Cb,
            onChange: bb => {
              Nb(bb.target.checked)
            },
            disabled: !1,
            className: "SaveSchematicCheckbox"
          }), (0, Qb.jsx)("h1", {
            className: "SchematicPopupSubtitle",
            children: Tb("existing" === cb ? "worldBuilder:overwriteLobbyCode" : "worldBuilder:includeLobbyCode")
          })]
        }), "existing" === cb && (0, Qb.jsx)("div", {
          className: "SaveSchematicLobbyCodeWarning",
          children: Tb("worldBuilder:lobbyCodeWarning")
        }), (0, Qb.jsxs)("div", {
          className: "SaveSchematicButtons",
          children: [(0, Qb.jsx)(Xb.n, {
            className: "SaveSchematicButton",
            onClick: () => {
              Yb() && Wb(Cb, Ub, Mb)
            },
            children: Tb("file" === cb ? "general:download" : "general:save")
          }), (0, Qb.jsx)(Xb.G, {
            className: "SaveSchematicButton",
            onClick: ab,
            children: Tb("general:cancel")
          })]
        })]
      })
    }
    var Jb = sb(1208),
      gb = sb(1704),
      Bb = sb(1126);

    function tb(bb, cb) {
      if ("devDownloadJson" !== bb) ! function(bb, cb) {
        const sb = Jb.clientSideServerUrls.getHttpUrlFromWebSocketUrl((0, ab.d)().websocketUrl);
        let Ub = !1;
        const Ib = async (bb, cb) => {
          if (Ub) return;
          Ub = !0;
          const {
            gameNameWithVariation: kb,
            lobbyName: Tb
          } = (0, ab.d)(), Ib = {
            gameNameWithVariation: kb,
            lobbyName: Tb
          };
          return await (0, Bb.postJsonWithMetricsCookiesAndJsonResponse)(`${sb}/schematic/${bb}`, Wb.z[bb].toBuffer({
            ...Ib,
            ...cb
          }), {
            retries: 1
          })
        };
        if ("Plugin|WorldBuilder|SaveSchematic" === bb) ! function(bb) {
          let {
            ownedSchematics: cb,
            onChosenDownload: sb,
            onChosenEdit: kb,
            onChosenNew: Wb,
            onClose: ab
          } = bb;
          Mb.NotificationProvider.showCustomPopup({
            body: bb => (0, Qb.jsx)(Yb, {
              ownedSchematics: cb,
              onChosenDownload: sb,
              onChosenEdit: kb,
              onChosenNew: Wb,
              onClose: bb
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: ab,
            unlockPointerKey: "schematicSaverPopup"
          })
        }({
          ownedSchematics: cb,
          onChosenDownload: (bb, cb) => {
            Ib("download-schematic", {
              name: bb,
              includeLobbyCode: cb
            }).then((cb => {
              let {
                buffer: {
                  data: sb
                }
              } = cb;
              const Wb = kb.Dm.from(sb);
              (0, gb.downloadBlob)(new Blob([Wb], {
                type: "application/octet-stream"
              }), `${bb}.bloxdschem`)
            }))
          },
          onClose: () => {
            Ib("cancel", {})
          },
          onChosenEdit: (bb, cb, sb, kb) => {
            Ib("save-to-profile", {
              schematicId: bb,
              name: cb,
              description: sb,
              includeLobbyCode: kb
            })
          },
          onChosenNew: (bb, cb, sb) => {
            Ib("save-to-profile", {
              schematicId: null,
              name: bb,
              description: cb,
              includeLobbyCode: sb
            })
          }
        });
        else if ("Plugin|WorldBuilder|LoadSchematic" === bb) ! function(bb) {
          let {
            ownedSchematics: cb,
            onChosenFile: sb,
            onChosenPreset: kb,
            onClose: Wb
          } = bb;
          Mb.NotificationProvider.showCustomPopup({
            body: bb => (0, Qb.jsx)(Cb, {
              ownedSchematics: cb,
              onChosenFile: sb,
              onChosenPreset: kb,
              onClose: bb
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: Wb,
            unlockPointerKey: "schematicLoaderPopup"
          })
        }({
          ownedSchematics: cb,
          onChosenFile: async bb => {
            const cb = kb.Dm.from(await bb.arrayBuffer()),
              {
                gameNameWithVariation: Tb,
                lobbyName: Ub
              } = (0, ab.d)();
            await (0, Bb.postBinaryWithMetricsCookiesAndCustomResponse)(`${sb}/schematic/upload-schematic`, Wb.z["upload-schematic"].toBuffer({
              gameNameWithVariation: Tb,
              lobbyName: Ub,
              schematic: cb
            }), {
              retries: 1
            }, Bb.HttpPayloadType.json)
          },
          onChosenPreset: bb => {
            Ib("load-from-profile", {
              schematicId: bb
            })
          },
          onClose: () => {
            Ib("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ListSchematics" === bb)(0, Tb.g)({
          ownedSchematics: Array.isArray(cb) ? cb : cb.schematics,
          currentWorldSchematicId: Array.isArray(cb) ? null : cb.currentWorldSchematicId,
          onClose: () => {
            Ib("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ExportWorld" === bb) {
          var Hb;
          const bb = null !== (Hb = cb.schematic) && void 0 !== Hb ? Hb : cb;
          (0, Nb.i)({
            schematic: bb,
            inSourceWorld: bb.schematicId === cb.currentWorldSchematicId,
            onClose: () => {
              Ib("cancel", {})
            }
          })
        } else console.error(`Unknown plugin message type ${bb}`)
      }(bb, cb);
      else {
        const bb = JSON.stringify(cb.data, null, 2);
        (0, gb.downloadBlob)(new Blob([bb], {
          type: "application/json"
        }), cb.filename)
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);