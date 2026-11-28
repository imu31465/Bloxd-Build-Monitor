export const id = 248;
export const ids = [248];
export const modules = {
  37576: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Ib,
      e: () => Ub
    });
    var eb = Mb(64),
      Hb = Mb(1504),
      pb = Mb(1259),
      Vb = Mb(1468),
      gb = Mb(4881),
      lb = Mb(5836),
      Lb = Mb(1364);

    function Ib(bb) {
      let {
        loading: wb,
        schematics: Mb,
        onSchematicPicked: eb,
        selectedSchematicIdList: Hb = [],
        disableAutoExport: lb
      } = bb;
      const {
        t: Ib
      } = (0, pb.C)();
      return (0, Lb.jsxs)("div", {
        className: "SchematicList",
        children: [wb && (0, Lb.jsx)(Vb.c, {}), !wb && 0 === Mb.length && (0, Lb.jsx)("div", {
          className: "NoSchematicsText",
          children: Ib("worldBuilder:noSavedSchematic")
        }), !wb && Mb.map((bb => (0, Lb.jsx)(gb.f, {
          source: {
            type: "schematic",
            schematic: bb
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            eb(bb)
          },
          isSelected: Hb.includes(bb.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: bb.isAutoExported && lb,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, bb.schematicId)))]
      })
    }

    function Ob(bb) {
      let {
        ownedSchematics: wb,
        currentWorldSchematicId: Mb,
        onClose: Hb
      } = bb;
      const {
        t: Vb
      } = (0, pb.C)(), [gb, Ob] = (0, eb.useState)(null);
      return (0, Lb.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === gb && (0, Lb.jsxs)(Lb.Fragment, {
          children: [(0, Lb.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: Vb("worldBuilder:schematicList")
          }), (0, Lb.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: Vb("worldBuilder:clickSchematicForOptions")
          }), (0, Lb.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, Lb.jsx)(Ib, {
              loading: !1,
              schematics: wb,
              onSchematicPicked: bb => {
                Ob(bb)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== gb && (0, Lb.jsx)(lb.g, {
          schematic: gb,
          inSourceWorld: gb.schematicId === Mb,
          onSchematicUpdate: bb => {
            Ob(bb)
          },
          onClose: () => {
            Ob(null), Hb()
          }
        })]
      })
    }

    function Ub(bb) {
      let {
        ownedSchematics: wb,
        currentWorldSchematicId: Mb,
        onClose: eb
      } = bb;
      Hb.NotificationProvider.showCustomPopup({
        body: bb => (0, Lb.jsx)(Ob, {
          ownedSchematics: wb,
          currentWorldSchematicId: Mb,
          onClose: bb
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: eb,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  53958: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      runClientGameMessage: () => Db
    });
    var eb = Mb(2521),
      Hb = Mb(2550),
      pb = Mb(1447),
      Vb = Mb(37576),
      gb = Mb(6014),
      lb = Mb(1159),
      Lb = Mb.n(lb),
      Ib = Mb(64),
      Ob = Mb(1504),
      Ub = Mb(1616),
      tb = Mb(382),
      Cb = Mb(1259),
      Eb = Mb(1475),
      Fb = Mb(1364);

    function Bb(bb) {
      let {
        onFilePicked: wb
      } = bb;
      const {
        t: Mb
      } = (0, Cb.C)(), [eb, Hb] = (0, Ib.useState)(null), {
        getRootProps: pb,
        getInputProps: Vb,
        isDragActive: lb
      } = (0, gb.c)({
        onDrop: bb => {
          bb.length > 0 && Hb(bb[0])
        },
        useFsAccessApi: !1
      }), Ob = eb && eb.size > 1024 * tb.td;
      return (0, Fb.jsxs)("div", {
        className: "SchematicUploadContainer",
        children: [(0, Fb.jsxs)("div", {
          ...pb({
            className: Lb()("SchematicUpload", {
              ActiveDrag: lb
            })
          }),
          children: [(0, Fb.jsx)("input", {
            ...Vb({
              accept: ".bloxdschem"
            })
          }), !lb && eb ? (0, Fb.jsxs)(Fb.Fragment, {
            children: [(0, Fb.jsx)("div", {
              className: Lb()("SchematicUploadIcon", "Active", {
                TooBig: Ob
              }),
              children: (0, Fb.jsx)(Eb.b, {
                name: "file-lines"
              })
            }), (0, Fb.jsx)("div", {
              className: "SchematicUploadInstructions Active",
              children: eb.name
            })]
          }) : (0, Fb.jsxs)(Fb.Fragment, {
            children: [(0, Fb.jsx)("div", {
              className: "SchematicUploadIcon",
              children: (0, Fb.jsx)(Eb.b, {
                name: "up-from-bracket"
              })
            }), (0, Fb.jsx)("div", {
              className: "SchematicUploadInstructions",
              children: Mb("worldBuilder:dragAFileHere")
            })]
          })]
        }), (0, Fb.jsx)(Ub.p, {
          disabled: Ob || !eb,
          className: "SchematicUploadButton",
          onClick: () => {
            !Ob && eb && wb(eb)
          },
          children: Ob ? Mb("worldBuilder:fileTooBig", {
            maxSizeKb: tb.td
          }) : Mb("worldBuilder:upload")
        })]
      })
    }

    function sb(bb) {
      let {
        ownedSchematics: wb,
        onClose: Mb,
        onChosenPreset: eb,
        onChosenFile: Hb
      } = bb;
      const {
        t: pb
      } = (0, Cb.C)();
      return (0, Fb.jsxs)(Fb.Fragment, {
        children: [(0, Fb.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: pb("worldBuilder:loadSchematic")
        }), (0, Fb.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: pb("worldBuilder:chooseOneOfYourSchematics")
        }), (0, Fb.jsx)("div", {
          className: "SchematicPopupSchematicListContainer",
          children: (0, Fb.jsx)(Vb.d, {
            schematics: wb,
            onSchematicPicked: bb => {
              eb(bb.schematicId), Mb()
            },
            loading: !1,
            disableAutoExport: !0
          })
        }), (0, Fb.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: pb("worldBuilder:uploadNewSchematic")
        }), (0, Fb.jsx)(Bb, {
          onFilePicked: async bb => {
            try {
              await Hb(bb)
            } catch (wb) {
              console.warn("Schematic upload failed", wb)
            } finally {
              Mb()
            }
          }
        })]
      })
    }
    var mb = Mb(5836),
      hb = Mb(1876),
      zb = Mb(5193),
      Xb = Mb(1301);

    function xb(bb) {
      var wb;
      let {
        ownedSchematics: Mb,
        onClose: eb,
        onChosenEdit: Hb,
        onChosenNew: pb,
        onChosenDownload: gb
      } = bb;
      const {
        t: lb
      } = (0, Cb.C)(), [Lb, Ob] = (0, Ib.useState)("choose"), [tb, Eb] = (0, Ib.useState)(null), [Bb, sb] = (0, Ib.useState)(null);
      return (0, Fb.jsxs)(Fb.Fragment, {
        children: [(0, Fb.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: lb("worldBuilder:saveSchematic")
        }), "choose" === Lb && (0, Fb.jsxs)(Fb.Fragment, {
          children: [(0, Fb.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: lb("worldBuilder:overwriteOneOfYourSchematics")
          }), (0, Fb.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, Fb.jsx)(Vb.d, {
              schematics: Mb,
              onSchematicPicked: bb => {
                Eb(bb.schematicId), sb("existing"), Ob("save")
              },
              loading: !1,
              disableAutoExport: !1
            })
          }), (0, Fb.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: lb("general:otherOptions")
          }), (0, Fb.jsxs)("div", {
            className: "OtherOptions",
            children: [(0, Fb.jsx)(Ub.p, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                sb("new"), Ob("save")
              },
              children: lb("worldBuilder:saveAsNewSchematic")
            }), (0, Fb.jsx)(Ub.f, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                sb("file"), Ob("save")
              },
              children: lb("worldBuilder:downloadSchematic")
            })]
          })]
        }), "choose" !== Lb && (0, Fb.jsx)(jb, {
          type: Bb,
          ownedSchematics: Mb,
          onSubmit: (bb, wb, Mb) => {
            "file" === Bb ? gb(wb, bb) : "new" === Bb ? pb(wb, Mb, bb) : Hb(tb, wb, Mb, bb), eb()
          },
          onBack: () => {
            Ob("choose")
          },
          prepopName: "existing" === Bb ? null === (wb = Mb.find((bb => bb.schematicId === tb))) || void 0 === wb ? void 0 : wb.name : null
        })]
      })
    }

    function jb(bb) {
      let {
        type: wb,
        prepopName: Mb,
        ownedSchematics: eb,
        onSubmit: Hb,
        onBack: pb
      } = bb;
      const {
        t: Vb
      } = (0, Cb.C)(), [gb, lb] = (0, Ib.useState)(""), [Ob, tb] = (0, Ib.useState)(""), [Eb, Bb] = (0, Ib.useState)(null), [sb, mb] = (0, Ib.useState)(!0), xb = bb => {
        var Hb;
        bb = null !== (Hb = bb) && void 0 !== Hb ? Hb : gb;
        const pb = (0, Xb.vb)(bb, "new" === wb || "existing" === wb && bb !== Mb);
        return pb ? (Bb(Vb(pb.translationKey, pb.params)), !1) : "new" === wb && eb.find((wb => wb.name === bb)) ? (Bb(Vb("worldBuilder:schematicAlreadyExists")), !1) : (Bb(null), !0)
      };
      return (0, Fb.jsxs)("div", {
        className: "SaveSchematicWindow",
        children: [(0, Fb.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: Vb("general:name")
        }), (0, Fb.jsx)(hb.d, {
          className: Lb()("SaveSchematicName", {
            Error: Eb
          }),
          forcedText: Mb,
          onValueChange: bb => {
            lb(bb), xb(bb)
          },
          placeholderText: Vb("worldBuilder:schematicNamePlaceholder"),
          maxLength: Xb.ib
        }), (0, Fb.jsx)("h2", {
          className: Lb()("SaveSchematicError", {
            Hidden: !Eb
          }),
          children: Eb
        }), (0, Fb.jsx)("h2", {
          className: Lb()("SchematicPopupSubtitle", {
            Hidden: "file" === wb
          }),
          children: Vb("general:description")
        }), (0, Fb.jsx)(hb.d, {
          className: Lb()("SaveSchematicDescription", {
            Hidden: "file" === wb
          }),
          onValueChange: tb,
          placeholderText: Vb("worldBuilder:schematicDescriptionPlaceholder"),
          maxLength: Xb.hb,
          useTextarea: !0
        }), (0, Fb.jsxs)("div", {
          className: Lb()("SaveSchematicCheckboxContainer", {
            WarningBorder: "existing" === wb
          }),
          children: [(0, Fb.jsx)(zb.c, {
            checked: sb,
            onChange: bb => {
              mb(bb.target.checked)
            },
            disabled: !1,
            className: "SaveSchematicCheckbox"
          }), (0, Fb.jsx)("h1", {
            className: "SchematicPopupSubtitle",
            children: Vb("existing" === wb ? "worldBuilder:overwriteLobbyCode" : "worldBuilder:includeLobbyCode")
          })]
        }), "existing" === wb && (0, Fb.jsx)("div", {
          className: "SaveSchematicLobbyCodeWarning",
          children: Vb("worldBuilder:lobbyCodeWarning")
        }), (0, Fb.jsxs)("div", {
          className: "SaveSchematicButtons",
          children: [(0, Fb.jsx)(Ub.p, {
            className: "SaveSchematicButton",
            onClick: () => {
              xb() && Hb(sb, gb, Ob)
            },
            children: Vb("file" === wb ? "general:download" : "general:save")
          }), (0, Fb.jsx)(Ub.Q, {
            className: "SaveSchematicButton",
            onClick: pb,
            children: Vb("general:cancel")
          })]
        })]
      })
    }
    var Kb = Mb(1271),
      rb = Mb(1965),
      Rb = Mb(1186);

    function Db(bb, wb) {
      if ("devDownloadJson" !== bb) ! function(bb, wb) {
        const Mb = Kb.clientSideServerUrls.getHttpUrlFromWebSocketUrl((0, pb.e)().websocketUrl);
        let gb = !1;
        const lb = async (bb, wb) => {
          if (gb) return;
          gb = !0;
          const {
            gameNameWithVariation: eb,
            lobbyName: Vb
          } = (0, pb.e)(), lb = {
            gameNameWithVariation: eb,
            lobbyName: Vb
          };
          return await (0, Rb.postJsonWithMetricsCookiesAndJsonResponse)(`${Mb}/schematic/${bb}`, Hb.w[bb].toBuffer({
            ...lb,
            ...wb
          }), {
            retries: 1
          })
        };
        if ("Plugin|WorldBuilder|SaveSchematic" === bb) ! function(bb) {
          let {
            ownedSchematics: wb,
            onChosenDownload: Mb,
            onChosenEdit: eb,
            onChosenNew: Hb,
            onClose: pb
          } = bb;
          Ob.NotificationProvider.showCustomPopup({
            body: bb => (0, Fb.jsx)(xb, {
              ownedSchematics: wb,
              onChosenDownload: Mb,
              onChosenEdit: eb,
              onChosenNew: Hb,
              onClose: bb
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: pb,
            unlockPointerKey: "schematicSaverPopup"
          })
        }({
          ownedSchematics: wb,
          onChosenDownload: (bb, wb) => {
            lb("download-schematic", {
              name: bb,
              includeLobbyCode: wb
            }).then((wb => {
              let {
                buffer: {
                  data: Mb
                }
              } = wb;
              const Hb = eb.uI.from(Mb);
              (0, rb.downloadBlob)(new Blob([Hb], {
                type: "application/octet-stream"
              }), `${bb}.bloxdschem`)
            }))
          },
          onClose: () => {
            lb("cancel", {})
          },
          onChosenEdit: (bb, wb, Mb, eb) => {
            lb("save-to-profile", {
              schematicId: bb,
              name: wb,
              description: Mb,
              includeLobbyCode: eb
            })
          },
          onChosenNew: (bb, wb, Mb) => {
            lb("save-to-profile", {
              schematicId: null,
              name: bb,
              description: wb,
              includeLobbyCode: Mb
            })
          }
        });
        else if ("Plugin|WorldBuilder|LoadSchematic" === bb) ! function(bb) {
          let {
            ownedSchematics: wb,
            onChosenFile: Mb,
            onChosenPreset: eb,
            onClose: Hb
          } = bb;
          Ob.NotificationProvider.showCustomPopup({
            body: bb => (0, Fb.jsx)(sb, {
              ownedSchematics: wb,
              onChosenFile: Mb,
              onChosenPreset: eb,
              onClose: bb
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: Hb,
            unlockPointerKey: "schematicLoaderPopup"
          })
        }({
          ownedSchematics: wb,
          onChosenFile: async bb => {
            const wb = eb.uI.from(await bb.arrayBuffer()),
              {
                gameNameWithVariation: Vb,
                lobbyName: gb
              } = (0, pb.e)();
            await (0, Rb.postBinaryWithMetricsCookiesAndCustomResponse)(`${Mb}/schematic/upload-schematic`, Hb.w["upload-schematic"].toBuffer({
              gameNameWithVariation: Vb,
              lobbyName: gb,
              schematic: wb
            }), {
              retries: 1
            }, Rb.HttpPayloadType.json)
          },
          onChosenPreset: bb => {
            lb("load-from-profile", {
              schematicId: bb
            })
          },
          onClose: () => {
            lb("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ListSchematics" === bb)(0, Vb.e)({
          ownedSchematics: Array.isArray(wb) ? wb : wb.schematics,
          currentWorldSchematicId: Array.isArray(wb) ? null : wb.currentWorldSchematicId,
          onClose: () => {
            lb("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ExportWorld" === bb) {
          var Lb;
          const bb = null !== (Lb = wb.schematic) && void 0 !== Lb ? Lb : wb;
          (0, mb.h)({
            schematic: bb,
            inSourceWorld: bb.schematicId === wb.currentWorldSchematicId,
            onClose: () => {
              lb("cancel", {})
            }
          })
        } else console.error(`Unknown plugin message type ${bb}`)
      }(bb, wb);
      else {
        const bb = JSON.stringify(wb.data, null, 2);
        (0, rb.downloadBlob)(new Blob([bb], {
          type: "application/json"
        }), wb.filename)
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);