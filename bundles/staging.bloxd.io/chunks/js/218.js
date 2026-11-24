export const id = 218;
export const ids = [218];
export const modules = {
  36569: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Xt,
      g: () => lt
    });
    var Ot = Vt(63),
      qt = Vt(1450),
      Dt = Vt(1286),
      mt = Vt(1436),
      dt = Vt(3544),
      jt = Vt(5101),
      Ht = Vt(1188);

    function Xt(tt) {
      let {
        loading: et,
        schematics: Vt,
        onSchematicPicked: Ot,
        selectedSchematicIdList: qt = [],
        disableAutoExport: jt
      } = tt;
      const {
        t: Xt
      } = (0, Dt.H)();
      return (0, Ht.jsxs)("div", {
        className: "SchematicList",
        children: [et && (0, Ht.jsx)(mt.b, {}), !et && 0 === Vt.length && (0, Ht.jsx)("div", {
          className: "NoSchematicsText",
          children: Xt("worldBuilder:noSavedSchematic")
        }), !et && Vt.map((tt => (0, Ht.jsx)(dt.h, {
          source: {
            type: "schematic",
            schematic: tt
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            Ot(tt)
          },
          isSelected: qt.includes(tt.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: tt.isAutoExported && jt,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, tt.schematicId)))]
      })
    }

    function Qt(tt) {
      let {
        ownedSchematics: et,
        currentWorldSchematicId: Vt,
        onClose: qt
      } = tt;
      const {
        t: mt
      } = (0, Dt.H)(), [dt, Qt] = (0, Ot.useState)(null);
      return (0, Ht.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === dt && (0, Ht.jsxs)(Ht.Fragment, {
          children: [(0, Ht.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: mt("worldBuilder:schematicList")
          }), (0, Ht.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: mt("worldBuilder:clickSchematicForOptions")
          }), (0, Ht.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, Ht.jsx)(Xt, {
              loading: !1,
              schematics: et,
              onSchematicPicked: tt => {
                Qt(tt)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== dt && (0, Ht.jsx)(jt.k, {
          schematic: dt,
          inSourceWorld: dt.schematicId === Vt,
          onSchematicUpdate: tt => {
            Qt(tt)
          },
          onClose: () => {
            Qt(null), qt()
          }
        })]
      })
    }

    function lt(tt) {
      let {
        ownedSchematics: et,
        currentWorldSchematicId: Vt,
        onClose: Ot
      } = tt;
      qt.NotificationProvider.showCustomPopup({
        body: tt => (0, Ht.jsx)(Qt, {
          ownedSchematics: et,
          currentWorldSchematicId: Vt,
          onClose: tt
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: Ot,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  41997: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      runClientGameMessage: () => ct
    });
    var Ot = Vt(3800),
      qt = Vt(3820),
      Dt = Vt(1423),
      mt = Vt(36569),
      dt = Vt(5124),
      jt = Vt(1140),
      Ht = Vt.n(jt),
      Xt = Vt(63),
      Qt = Vt(1450),
      lt = Vt(1556),
      Et = Vt(391),
      ft = Vt(1286),
      wt = Vt(1152),
      yt = Vt(1188);

    function Nt(tt) {
      let {
        onFilePicked: et
      } = tt;
      const {
        t: Vt
      } = (0, ft.H)(), [Ot, qt] = (0, Xt.useState)(null), {
        getRootProps: Dt,
        getInputProps: mt,
        isDragActive: jt
      } = (0, dt.e)({
        onDrop: tt => {
          tt.length > 0 && qt(tt[0])
        },
        useFsAccessApi: !1
      }), Qt = Ot && Ot.size > 1024 * Et.jd;
      return (0, yt.jsxs)("div", {
        className: "SchematicUploadContainer",
        children: [(0, yt.jsxs)("div", {
          ...Dt({
            className: Ht()("SchematicUpload", {
              ActiveDrag: jt
            })
          }),
          children: [(0, yt.jsx)("input", {
            ...mt({
              accept: ".bloxdschem"
            })
          }), !jt && Ot ? (0, yt.jsxs)(yt.Fragment, {
            children: [(0, yt.jsx)("div", {
              className: Ht()("SchematicUploadIcon", "Active", {
                TooBig: Qt
              }),
              children: (0, yt.jsx)(wt.b, {
                name: "file-lines"
              })
            }), (0, yt.jsx)("div", {
              className: "SchematicUploadInstructions Active",
              children: Ot.name
            })]
          }) : (0, yt.jsxs)(yt.Fragment, {
            children: [(0, yt.jsx)("div", {
              className: "SchematicUploadIcon",
              children: (0, yt.jsx)(wt.b, {
                name: "up-from-bracket"
              })
            }), (0, yt.jsx)("div", {
              className: "SchematicUploadInstructions",
              children: Vt("worldBuilder:dragAFileHere")
            })]
          })]
        }), (0, yt.jsx)(lt.m, {
          disabled: Qt || !Ot,
          className: "SchematicUploadButton",
          onClick: () => {
            !Qt && Ot && et(Ot)
          },
          children: Qt ? Vt("worldBuilder:fileTooBig", {
            maxSizeKb: Et.jd
          }) : Vt("worldBuilder:upload")
        })]
      })
    }

    function Mt(tt) {
      let {
        ownedSchematics: et,
        onClose: Vt,
        onChosenPreset: Ot,
        onChosenFile: qt
      } = tt;
      const {
        t: Dt
      } = (0, ft.H)();
      return (0, yt.jsxs)(yt.Fragment, {
        children: [(0, yt.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: Dt("worldBuilder:loadSchematic")
        }), (0, yt.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: Dt("worldBuilder:chooseOneOfYourSchematics")
        }), (0, yt.jsx)("div", {
          className: "SchematicPopupSchematicListContainer",
          children: (0, yt.jsx)(mt.e, {
            schematics: et,
            onSchematicPicked: tt => {
              Ot(tt.schematicId), Vt()
            },
            loading: !1,
            disableAutoExport: !0
          })
        }), (0, yt.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: Dt("worldBuilder:uploadNewSchematic")
        }), (0, yt.jsx)(Nt, {
          onFilePicked: async tt => {
            try {
              await qt(tt)
            } catch (et) {
              console.warn("Schematic upload failed", et)
            } finally {
              Vt()
            }
          }
        })]
      })
    }
    var bt = Vt(5101),
      Jt = Vt(1770),
      Ct = Vt(4475),
      ut = Vt(1308);

    function Kt(tt) {
      var et;
      let {
        ownedSchematics: Vt,
        onClose: Ot,
        onChosenEdit: qt,
        onChosenNew: Dt,
        onChosenDownload: dt
      } = tt;
      const {
        t: jt
      } = (0, ft.H)(), [Ht, Qt] = (0, Xt.useState)("choose"), [Et, wt] = (0, Xt.useState)(null), [Nt, Mt] = (0, Xt.useState)(null);
      return (0, yt.jsxs)(yt.Fragment, {
        children: [(0, yt.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: jt("worldBuilder:saveSchematic")
        }), "choose" === Ht && (0, yt.jsxs)(yt.Fragment, {
          children: [(0, yt.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: jt("worldBuilder:overwriteOneOfYourSchematics")
          }), (0, yt.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, yt.jsx)(mt.e, {
              schematics: Vt,
              onSchematicPicked: tt => {
                wt(tt.schematicId), Mt("existing"), Qt("save")
              },
              loading: !1,
              disableAutoExport: !1
            })
          }), (0, yt.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: jt("general:otherOptions")
          }), (0, yt.jsxs)("div", {
            className: "OtherOptions",
            children: [(0, yt.jsx)(lt.m, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                Mt("new"), Qt("save")
              },
              children: jt("worldBuilder:saveAsNewSchematic")
            }), (0, yt.jsx)(lt.f, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                Mt("file"), Qt("save")
              },
              children: jt("worldBuilder:downloadSchematic")
            })]
          })]
        }), "choose" !== Ht && (0, yt.jsx)(ht, {
          type: Nt,
          ownedSchematics: Vt,
          onSubmit: (tt, et, Vt) => {
            "file" === Nt ? dt(et, tt) : "new" === Nt ? Dt(et, Vt, tt) : qt(Et, et, Vt, tt), Ot()
          },
          onBack: () => {
            Qt("choose")
          },
          prepopName: "existing" === Nt ? null === (et = Vt.find((tt => tt.schematicId === Et))) || void 0 === et ? void 0 : et.name : null
        })]
      })
    }

    function ht(tt) {
      let {
        type: et,
        prepopName: Vt,
        ownedSchematics: Ot,
        onSubmit: qt,
        onBack: Dt
      } = tt;
      const {
        t: mt
      } = (0, ft.H)(), [dt, jt] = (0, Xt.useState)(""), [Qt, Et] = (0, Xt.useState)(""), [wt, Nt] = (0, Xt.useState)(null), [Mt, bt] = (0, Xt.useState)(!0), Kt = tt => {
        var Vt;
        tt = null !== (Vt = tt) && void 0 !== Vt ? Vt : dt;
        const qt = "new" === et ? (0, ut.B)(tt) : null,
          Dt = [...(0, ut.Eb)(tt), ...qt ? [qt] : []];
        return Dt.length > 0 ? (Nt(Dt.join(", ")), !1) : "new" === et && Ot.find((et => et.name === tt)) ? (Nt(mt("worldBuilder:schematicAlreadyExists")), !1) : (Nt(null), !0)
      };
      return (0, yt.jsxs)("div", {
        className: "SaveSchematicWindow",
        children: [(0, yt.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: mt("general:name")
        }), (0, yt.jsx)(Jt.d, {
          className: Ht()("SaveSchematicName", {
            Error: wt
          }),
          forcedText: Vt,
          onValueChange: tt => {
            jt(tt), Kt(tt)
          },
          placeholderText: mt("worldBuilder:schematicNamePlaceholder"),
          maxLength: ut.ub
        }), (0, yt.jsx)("h2", {
          className: Ht()("SaveSchematicError", {
            Hidden: !wt
          }),
          children: wt
        }), (0, yt.jsx)("h2", {
          className: Ht()("SchematicPopupSubtitle", {
            Hidden: "file" === et
          }),
          children: mt("general:description")
        }), (0, yt.jsx)(Jt.d, {
          className: Ht()("SaveSchematicDescription", {
            Hidden: "file" === et
          }),
          onValueChange: Et,
          placeholderText: mt("worldBuilder:schematicDescriptionPlaceholder"),
          maxLength: ut.qb,
          useTextarea: !0
        }), (0, yt.jsxs)("div", {
          className: Ht()("SaveSchematicCheckboxContainer", {
            WarningBorder: "existing" === et
          }),
          children: [(0, yt.jsx)(Ct.b, {
            checked: Mt,
            onChange: tt => {
              bt(tt.target.checked)
            },
            disabled: !1,
            className: "SaveSchematicCheckbox"
          }), (0, yt.jsx)("h1", {
            className: "SchematicPopupSubtitle",
            children: mt("existing" === et ? "worldBuilder:overwriteLobbyCode" : "worldBuilder:includeLobbyCode")
          })]
        }), "existing" === et && (0, yt.jsx)("div", {
          className: "SaveSchematicLobbyCodeWarning",
          children: mt("worldBuilder:lobbyCodeWarning")
        }), (0, yt.jsxs)("div", {
          className: "SaveSchematicButtons",
          children: [(0, yt.jsx)(lt.m, {
            className: "SaveSchematicButton",
            onClick: () => {
              Kt() && qt(Mt, dt, Qt)
            },
            children: mt("file" === et ? "general:download" : "general:save")
          }), (0, yt.jsx)(lt.G, {
            className: "SaveSchematicButton",
            onClick: Dt,
            children: mt("general:cancel")
          })]
        })]
      })
    }
    var vt = Vt(1293),
      Wt = Vt(1826),
      St = Vt(1223);

    function ct(tt, et) {
      if ("devDownloadJson" !== tt) ! function(tt, et) {
        const Vt = vt.clientSideServerUrls.getHttpUrlFromWebSocketUrl((0, Dt.c)().websocketUrl);
        let dt = !1;
        const jt = async (tt, et) => {
          if (dt) return;
          dt = !0;
          const {
            gameNameWithVariation: Ot,
            lobbyName: mt
          } = (0, Dt.c)(), jt = {
            gameNameWithVariation: Ot,
            lobbyName: mt
          };
          return await (0, St.postJsonWithMetricsCookiesAndJsonResponse)(`${Vt}/schematic/${tt}`, qt.G[tt].toBuffer({
            ...jt,
            ...et
          }), {
            retries: 1
          })
        };
        if ("Plugin|WorldBuilder|SaveSchematic" === tt) ! function(tt) {
          let {
            ownedSchematics: et,
            onChosenDownload: Vt,
            onChosenEdit: Ot,
            onChosenNew: qt,
            onClose: Dt
          } = tt;
          Qt.NotificationProvider.showCustomPopup({
            body: tt => (0, yt.jsx)(Kt, {
              ownedSchematics: et,
              onChosenDownload: Vt,
              onChosenEdit: Ot,
              onChosenNew: qt,
              onClose: tt
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: Dt,
            unlockPointerKey: "schematicSaverPopup"
          })
        }({
          ownedSchematics: et,
          onChosenDownload: (tt, et) => {
            jt("download-schematic", {
              name: tt,
              includeLobbyCode: et
            }).then((et => {
              let {
                buffer: {
                  data: Vt
                }
              } = et;
              const qt = Ot.mf.from(Vt);
              (0, Wt.downloadBlob)(new Blob([qt], {
                type: "application/octet-stream"
              }), `${tt}.bloxdschem`)
            }))
          },
          onClose: () => {
            jt("cancel", {})
          },
          onChosenEdit: (tt, et, Vt, Ot) => {
            jt("save-to-profile", {
              schematicId: tt,
              name: et,
              description: Vt,
              includeLobbyCode: Ot
            })
          },
          onChosenNew: (tt, et, Vt) => {
            jt("save-to-profile", {
              schematicId: null,
              name: tt,
              description: et,
              includeLobbyCode: Vt
            })
          }
        });
        else if ("Plugin|WorldBuilder|LoadSchematic" === tt) ! function(tt) {
          let {
            ownedSchematics: et,
            onChosenFile: Vt,
            onChosenPreset: Ot,
            onClose: qt
          } = tt;
          Qt.NotificationProvider.showCustomPopup({
            body: tt => (0, yt.jsx)(Mt, {
              ownedSchematics: et,
              onChosenFile: Vt,
              onChosenPreset: Ot,
              onClose: tt
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: qt,
            unlockPointerKey: "schematicLoaderPopup"
          })
        }({
          ownedSchematics: et,
          onChosenFile: async tt => {
            const et = Ot.mf.from(await tt.arrayBuffer()),
              {
                gameNameWithVariation: mt,
                lobbyName: dt
              } = (0, Dt.c)();
            await (0, St.postBinaryWithMetricsCookiesAndCustomResponse)(`${Vt}/schematic/upload-schematic`, qt.G["upload-schematic"].toBuffer({
              gameNameWithVariation: mt,
              lobbyName: dt,
              schematic: et
            }), {
              retries: 1
            }, St.HttpPayloadType.json)
          },
          onChosenPreset: tt => {
            jt("load-from-profile", {
              schematicId: tt
            })
          },
          onClose: () => {
            jt("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ListSchematics" === tt)(0, mt.g)({
          ownedSchematics: Array.isArray(et) ? et : et.schematics,
          currentWorldSchematicId: Array.isArray(et) ? null : et.currentWorldSchematicId,
          onClose: () => {
            jt("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ExportWorld" === tt) {
          var Ht;
          const tt = null !== (Ht = et.schematic) && void 0 !== Ht ? Ht : et;
          (0, bt.o)({
            schematic: tt,
            inSourceWorld: tt.schematicId === et.currentWorldSchematicId,
            onClose: () => {
              jt("cancel", {})
            }
          })
        } else console.error(`Unknown plugin message type ${tt}`)
      }(tt, et);
      else {
        const tt = JSON.stringify(et.data, null, 2);
        (0, Wt.downloadBlob)(new Blob([tt], {
          type: "application/json"
        }), et.filename)
      }
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);