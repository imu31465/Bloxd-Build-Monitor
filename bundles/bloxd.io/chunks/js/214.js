export const id = 214;
export const ids = [214];
export const modules = {
  36430: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Rm,
      g: () => Em
    });
    var hm = fm(59),
      Am = fm(1354),
      am = fm(1208),
      xm = fm(1345),
      wm = fm(3471),
      Dm = fm(4877),
      im = fm(1135);

    function Rm(mm) {
      let {
        loading: Tm,
        schematics: fm,
        onSchematicPicked: hm,
        selectedSchematicIdList: Am = [],
        disableAutoExport: Dm
      } = mm;
      const {
        t: Rm
      } = (0, am.A)();
      return (0, im.jsxs)("div", {
        className: "SchematicList",
        children: [Tm && (0, im.jsx)(xm.c, {}), !Tm && 0 === fm.length && (0, im.jsx)("div", {
          className: "NoSchematicsText",
          children: Rm("worldBuilder:noSavedSchematic")
        }), !Tm && fm.map((mm => (0, im.jsx)(wm.f, {
          source: {
            type: "schematic",
            schematic: mm
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            hm(mm)
          },
          isSelected: Am.includes(mm.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: mm.isAutoExported && Dm,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, mm.schematicId)))]
      })
    }

    function pm(mm) {
      let {
        ownedSchematics: Tm,
        currentWorldSchematicId: fm,
        onClose: Am
      } = mm;
      const {
        t: xm
      } = (0, am.A)(), [wm, pm] = (0, hm.useState)(null);
      return (0, im.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === wm && (0, im.jsxs)(im.Fragment, {
          children: [(0, im.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: xm("worldBuilder:schematicList")
          }), (0, im.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: xm("worldBuilder:clickSchematicForOptions")
          }), (0, im.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, im.jsx)(Rm, {
              loading: !1,
              schematics: Tm,
              onSchematicPicked: mm => {
                pm(mm)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== wm && (0, im.jsx)(Dm.h, {
          schematic: wm,
          inSourceWorld: wm.schematicId === fm,
          onSchematicUpdate: mm => {
            pm(mm)
          },
          onClose: () => {
            pm(null), Am()
          }
        })]
      })
    }

    function Em(mm) {
      let {
        ownedSchematics: Tm,
        currentWorldSchematicId: fm,
        onClose: hm
      } = mm;
      Am.NotificationProvider.showCustomPopup({
        body: mm => (0, im.jsx)(pm, {
          ownedSchematics: Tm,
          currentWorldSchematicId: fm,
          onClose: mm
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: hm,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  41751: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      runClientGameMessage: () => bm
    });
    var hm = fm(3716),
      Am = fm(3729),
      am = fm(1321),
      xm = fm(36430),
      wm = fm(4904),
      Dm = fm(1080),
      im = fm.n(Dm),
      Rm = fm(59),
      pm = fm(1354),
      Em = fm(1454),
      om = fm(354),
      Om = fm(1208),
      Ym = fm(1089),
      qm = fm(1135);

    function jm(mm) {
      let {
        onFilePicked: Tm
      } = mm;
      const {
        t: fm
      } = (0, Om.A)(), [hm, Am] = (0, Rm.useState)(null), {
        getRootProps: am,
        getInputProps: xm,
        isDragActive: Dm
      } = (0, wm.e)({
        onDrop: mm => {
          mm.length > 0 && Am(mm[0])
        },
        useFsAccessApi: !1
      }), pm = hm && hm.size > 1024 * om.Xc;
      return (0, qm.jsxs)("div", {
        className: "SchematicUploadContainer",
        children: [(0, qm.jsxs)("div", {
          ...am({
            className: im()("SchematicUpload", {
              ActiveDrag: Dm
            })
          }),
          children: [(0, qm.jsx)("input", {
            ...xm({
              accept: ".bloxdschem"
            })
          }), !Dm && hm ? (0, qm.jsxs)(qm.Fragment, {
            children: [(0, qm.jsx)("div", {
              className: im()("SchematicUploadIcon", "Active", {
                TooBig: pm
              }),
              children: (0, qm.jsx)(Ym.c, {
                name: "file-lines"
              })
            }), (0, qm.jsx)("div", {
              className: "SchematicUploadInstructions Active",
              children: hm.name
            })]
          }) : (0, qm.jsxs)(qm.Fragment, {
            children: [(0, qm.jsx)("div", {
              className: "SchematicUploadIcon",
              children: (0, qm.jsx)(Ym.c, {
                name: "up-from-bracket"
              })
            }), (0, qm.jsx)("div", {
              className: "SchematicUploadInstructions",
              children: fm("worldBuilder:dragAFileHere")
            })]
          })]
        }), (0, qm.jsx)(Em.m, {
          disabled: pm || !hm,
          className: "SchematicUploadButton",
          onClick: () => {
            !pm && hm && Tm(hm)
          },
          children: pm ? fm("worldBuilder:fileTooBig", {
            maxSizeKb: om.Xc
          }) : fm("worldBuilder:upload")
        })]
      })
    }

    function Vm(mm) {
      let {
        ownedSchematics: Tm,
        onClose: fm,
        onChosenPreset: hm,
        onChosenFile: Am
      } = mm;
      const {
        t: am
      } = (0, Om.A)();
      return (0, qm.jsxs)(qm.Fragment, {
        children: [(0, qm.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: am("worldBuilder:loadSchematic")
        }), (0, qm.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: am("worldBuilder:chooseOneOfYourSchematics")
        }), (0, qm.jsx)("div", {
          className: "SchematicPopupSchematicListContainer",
          children: (0, qm.jsx)(xm.c, {
            schematics: Tm,
            onSchematicPicked: mm => {
              hm(mm.schematicId), fm()
            },
            loading: !1,
            disableAutoExport: !0
          })
        }), (0, qm.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: am("worldBuilder:uploadNewSchematic")
        }), (0, qm.jsx)(jm, {
          onFilePicked: async mm => {
            try {
              await Am(mm)
            } catch (Tm) {
              console.warn("Schematic upload failed", Tm)
            } finally {
              fm()
            }
          }
        })]
      })
    }
    var Im = fm(4877),
      Km = fm(1676),
      Qm = fm(4304),
      nm = fm(1235);

    function Jm(mm) {
      var Tm;
      let {
        ownedSchematics: fm,
        onClose: hm,
        onChosenEdit: Am,
        onChosenNew: am,
        onChosenDownload: wm
      } = mm;
      const {
        t: Dm
      } = (0, Om.A)(), [im, pm] = (0, Rm.useState)("choose"), [om, Ym] = (0, Rm.useState)(null), [jm, Vm] = (0, Rm.useState)(null);
      return (0, qm.jsxs)(qm.Fragment, {
        children: [(0, qm.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: Dm("worldBuilder:saveSchematic")
        }), "choose" === im && (0, qm.jsxs)(qm.Fragment, {
          children: [(0, qm.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: Dm("worldBuilder:overwriteOneOfYourSchematics")
          }), (0, qm.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, qm.jsx)(xm.c, {
              schematics: fm,
              onSchematicPicked: mm => {
                Ym(mm.schematicId), Vm("existing"), pm("save")
              },
              loading: !1,
              disableAutoExport: !1
            })
          }), (0, qm.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: Dm("general:otherOptions")
          }), (0, qm.jsxs)("div", {
            className: "OtherOptions",
            children: [(0, qm.jsx)(Em.m, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                Vm("new"), pm("save")
              },
              children: Dm("worldBuilder:saveAsNewSchematic")
            }), (0, qm.jsx)(Em.e, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                Vm("file"), pm("save")
              },
              children: Dm("worldBuilder:downloadSchematic")
            })]
          })]
        }), "choose" !== im && (0, qm.jsx)(cm, {
          type: jm,
          ownedSchematics: fm,
          onSubmit: (mm, Tm, fm) => {
            "file" === jm ? wm(Tm, mm) : "new" === jm ? am(Tm, fm, mm) : Am(om, Tm, fm, mm), hm()
          },
          onBack: () => {
            pm("choose")
          },
          prepopName: "existing" === jm ? null === (Tm = fm.find((mm => mm.schematicId === om))) || void 0 === Tm ? void 0 : Tm.name : null
        })]
      })
    }

    function cm(mm) {
      let {
        type: Tm,
        prepopName: fm,
        ownedSchematics: hm,
        onSubmit: Am,
        onBack: am
      } = mm;
      const {
        t: xm
      } = (0, Om.A)(), [wm, Dm] = (0, Rm.useState)(""), [pm, om] = (0, Rm.useState)(""), [Ym, jm] = (0, Rm.useState)(null), [Vm, Im] = (0, Rm.useState)(!0), Jm = mm => {
        var fm;
        mm = null !== (fm = mm) && void 0 !== fm ? fm : wm;
        const Am = "new" === Tm ? (0, nm.v)(mm) : null,
          am = [...(0, nm.nb)(mm), ...Am ? [Am] : []];
        return am.length > 0 ? (jm(am.join(", ")), !1) : "new" === Tm && hm.find((Tm => Tm.name === mm)) ? (jm(xm("worldBuilder:schematicAlreadyExists")), !1) : (jm(null), !0)
      };
      return (0, qm.jsxs)("div", {
        className: "SaveSchematicWindow",
        children: [(0, qm.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: xm("general:name")
        }), (0, qm.jsx)(Km.e, {
          className: im()("SaveSchematicName", {
            Error: Ym
          }),
          forcedText: fm,
          onValueChange: mm => {
            Dm(mm), Jm(mm)
          },
          placeholderText: xm("worldBuilder:schematicNamePlaceholder"),
          maxLength: nm.gb
        }), (0, qm.jsx)("h2", {
          className: im()("SaveSchematicError", {
            Hidden: !Ym
          }),
          children: Ym
        }), (0, qm.jsx)("h2", {
          className: im()("SchematicPopupSubtitle", {
            Hidden: "file" === Tm
          }),
          children: xm("general:description")
        }), (0, qm.jsx)(Km.e, {
          className: im()("SaveSchematicDescription", {
            Hidden: "file" === Tm
          }),
          onValueChange: om,
          placeholderText: xm("worldBuilder:schematicDescriptionPlaceholder"),
          maxLength: nm.db,
          useTextarea: !0
        }), (0, qm.jsxs)("div", {
          className: im()("SaveSchematicCheckboxContainer", {
            WarningBorder: "existing" === Tm
          }),
          children: [(0, qm.jsx)(Qm.b, {
            checked: Vm,
            onChange: mm => {
              Im(mm.target.checked)
            },
            disabled: !1,
            className: "SaveSchematicCheckbox"
          }), (0, qm.jsx)("h1", {
            className: "SchematicPopupSubtitle",
            children: xm("existing" === Tm ? "worldBuilder:overwriteLobbyCode" : "worldBuilder:includeLobbyCode")
          })]
        }), "existing" === Tm && (0, qm.jsx)("div", {
          className: "SaveSchematicLobbyCodeWarning",
          children: xm("worldBuilder:lobbyCodeWarning")
        }), (0, qm.jsxs)("div", {
          className: "SaveSchematicButtons",
          children: [(0, qm.jsx)(Em.m, {
            className: "SaveSchematicButton",
            onClick: () => {
              Jm() && Am(Vm, wm, pm)
            },
            children: xm("file" === Tm ? "general:download" : "general:save")
          }), (0, qm.jsx)(Em.O, {
            className: "SaveSchematicButton",
            onClick: am,
            children: xm("general:cancel")
          })]
        })]
      })
    }
    var zm = fm(1214),
      Zm = fm(1713),
      km = fm(1162);

    function bm(mm, Tm) {
      if ("devDownloadJson" !== mm) ! function(mm, Tm) {
        const fm = zm.clientSideServerUrls.getHttpUrlFromWebSocketUrl((0, am.d)().websocketUrl);
        let wm = !1;
        const Dm = async (mm, Tm) => {
          if (wm) return;
          wm = !0;
          const {
            gameNameWithVariation: hm,
            lobbyName: xm
          } = (0, am.d)(), Dm = {
            gameNameWithVariation: hm,
            lobbyName: xm
          };
          return await (0, km.postJsonWithMetricsCookiesAndJsonResponse)(`${fm}/schematic/${mm}`, Am.G[mm].toBuffer({
            ...Dm,
            ...Tm
          }), {
            retries: 1
          })
        };
        if ("Plugin|WorldBuilder|SaveSchematic" === mm) ! function(mm) {
          let {
            ownedSchematics: Tm,
            onChosenDownload: fm,
            onChosenEdit: hm,
            onChosenNew: Am,
            onClose: am
          } = mm;
          pm.NotificationProvider.showCustomPopup({
            body: mm => (0, qm.jsx)(Jm, {
              ownedSchematics: Tm,
              onChosenDownload: fm,
              onChosenEdit: hm,
              onChosenNew: Am,
              onClose: mm
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: am,
            unlockPointerKey: "schematicSaverPopup"
          })
        }({
          ownedSchematics: Tm,
          onChosenDownload: (mm, Tm) => {
            Dm("download-schematic", {
              name: mm,
              includeLobbyCode: Tm
            }).then((Tm => {
              let {
                buffer: {
                  data: fm
                }
              } = Tm;
              const Am = hm.XO.from(fm);
              (0, Zm.downloadBlob)(new Blob([Am], {
                type: "application/octet-stream"
              }), `${mm}.bloxdschem`)
            }))
          },
          onClose: () => {
            Dm("cancel", {})
          },
          onChosenEdit: (mm, Tm, fm, hm) => {
            Dm("save-to-profile", {
              schematicId: mm,
              name: Tm,
              description: fm,
              includeLobbyCode: hm
            })
          },
          onChosenNew: (mm, Tm, fm) => {
            Dm("save-to-profile", {
              schematicId: null,
              name: mm,
              description: Tm,
              includeLobbyCode: fm
            })
          }
        });
        else if ("Plugin|WorldBuilder|LoadSchematic" === mm) ! function(mm) {
          let {
            ownedSchematics: Tm,
            onChosenFile: fm,
            onChosenPreset: hm,
            onClose: Am
          } = mm;
          pm.NotificationProvider.showCustomPopup({
            body: mm => (0, qm.jsx)(Vm, {
              ownedSchematics: Tm,
              onChosenFile: fm,
              onChosenPreset: hm,
              onClose: mm
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: Am,
            unlockPointerKey: "schematicLoaderPopup"
          })
        }({
          ownedSchematics: Tm,
          onChosenFile: async mm => {
            const Tm = hm.XO.from(await mm.arrayBuffer()),
              {
                gameNameWithVariation: xm,
                lobbyName: wm
              } = (0, am.d)();
            await (0, km.postBinaryWithMetricsCookiesAndCustomResponse)(`${fm}/schematic/upload-schematic`, Am.G["upload-schematic"].toBuffer({
              gameNameWithVariation: xm,
              lobbyName: wm,
              schematic: Tm
            }), {
              retries: 1
            }, km.HttpPayloadType.json)
          },
          onChosenPreset: mm => {
            Dm("load-from-profile", {
              schematicId: mm
            })
          },
          onClose: () => {
            Dm("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ListSchematics" === mm)(0, xm.g)({
          ownedSchematics: Array.isArray(Tm) ? Tm : Tm.schematics,
          currentWorldSchematicId: Array.isArray(Tm) ? null : Tm.currentWorldSchematicId,
          onClose: () => {
            Dm("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ExportWorld" === mm) {
          var im;
          const mm = null !== (im = Tm.schematic) && void 0 !== im ? im : Tm;
          (0, Im.j)({
            schematic: mm,
            inSourceWorld: mm.schematicId === Tm.currentWorldSchematicId,
            onClose: () => {
              Dm("cancel", {})
            }
          })
        } else console.error(`Unknown plugin message type ${mm}`)
      }(mm, Tm);
      else {
        const mm = JSON.stringify(Tm.data, null, 2);
        (0, Zm.downloadBlob)(new Blob([mm], {
          type: "application/json"
        }), Tm.filename)
      }
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);