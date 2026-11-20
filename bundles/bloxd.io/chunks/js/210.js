export const id = 210;
export const ids = [210];
export const modules = {
  35906: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => lv,
      e: () => Wv
    });
    var hv = Pv(52),
      Sv = Pv(1336),
      ev = Pv(1175),
      gv = Pv(1327),
      pv = Pv(3236),
      dv = Pv(4679),
      Nv = Pv(1082);

    function lv(vv) {
      let {
        loading: zv,
        schematics: Pv,
        onSchematicPicked: hv,
        selectedSchematicIdList: Sv = [],
        disableAutoExport: dv
      } = vv;
      const {
        t: lv
      } = (0, ev.x)();
      return (0, Nv.jsxs)("div", {
        className: "SchematicList",
        children: [zv && (0, Nv.jsx)(gv.c, {}), !zv && 0 === Pv.length && (0, Nv.jsx)("div", {
          className: "NoSchematicsText",
          children: lv("worldBuilder:noSavedSchematic")
        }), !zv && Pv.map((vv => (0, Nv.jsx)(pv.i, {
          source: {
            type: "schematic",
            schematic: vv
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            hv(vv)
          },
          isSelected: Sv.includes(vv.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: vv.isAutoExported && dv,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, vv.schematicId)))]
      })
    }

    function Tv(vv) {
      let {
        ownedSchematics: zv,
        currentWorldSchematicId: Pv,
        onClose: Sv
      } = vv;
      const {
        t: gv
      } = (0, ev.x)(), [pv, Tv] = (0, hv.useState)(null);
      return (0, Nv.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === pv && (0, Nv.jsxs)(Nv.Fragment, {
          children: [(0, Nv.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: gv("worldBuilder:schematicList")
          }), (0, Nv.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: gv("worldBuilder:clickSchematicForOptions")
          }), (0, Nv.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, Nv.jsx)(lv, {
              loading: !1,
              schematics: zv,
              onSchematicPicked: vv => {
                Tv(vv)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== pv && (0, Nv.jsx)(dv.h, {
          schematic: pv,
          inSourceWorld: pv.schematicId === Pv,
          onSchematicUpdate: vv => {
            Tv(vv)
          },
          onClose: () => {
            Tv(null), Sv()
          }
        })]
      })
    }

    function Wv(vv) {
      let {
        ownedSchematics: zv,
        currentWorldSchematicId: Pv,
        onClose: hv
      } = vv;
      Sv.NotificationProvider.showCustomPopup({
        body: vv => (0, Nv.jsx)(Tv, {
          ownedSchematics: zv,
          currentWorldSchematicId: Pv,
          onClose: vv
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: hv,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  41044: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      runClientGameMessage: () => Kv
    });
    var hv = Pv(3521),
      Sv = Pv(3539),
      ev = Pv(1306),
      gv = Pv(35906),
      pv = Pv(4698),
      dv = Pv(1035),
      Nv = Pv.n(dv),
      lv = Pv(52),
      Tv = Pv(1336),
      Wv = Pv(1442),
      wv = Pv(312),
      av = Pv(1175),
      sv = Pv(1042),
      Cv = Pv(1082);

    function iv(vv) {
      let {
        onFilePicked: zv
      } = vv;
      const {
        t: Pv
      } = (0, av.x)(), [hv, Sv] = (0, lv.useState)(null), {
        getRootProps: ev,
        getInputProps: gv,
        isDragActive: dv
      } = (0, pv.d)({
        onDrop: vv => {
          vv.length > 0 && Sv(vv[0])
        },
        useFsAccessApi: !1
      }), Tv = hv && hv.size > 1024 * wv.Oc;
      return (0, Cv.jsxs)("div", {
        className: "SchematicUploadContainer",
        children: [(0, Cv.jsxs)("div", {
          ...ev({
            className: Nv()("SchematicUpload", {
              ActiveDrag: dv
            })
          }),
          children: [(0, Cv.jsx)("input", {
            ...gv({
              accept: ".bloxdschem"
            })
          }), !dv && hv ? (0, Cv.jsxs)(Cv.Fragment, {
            children: [(0, Cv.jsx)("div", {
              className: Nv()("SchematicUploadIcon", "Active", {
                TooBig: Tv
              }),
              children: (0, Cv.jsx)(sv.b, {
                name: "file-lines"
              })
            }), (0, Cv.jsx)("div", {
              className: "SchematicUploadInstructions Active",
              children: hv.name
            })]
          }) : (0, Cv.jsxs)(Cv.Fragment, {
            children: [(0, Cv.jsx)("div", {
              className: "SchematicUploadIcon",
              children: (0, Cv.jsx)(sv.b, {
                name: "up-from-bracket"
              })
            }), (0, Cv.jsx)("div", {
              className: "SchematicUploadInstructions",
              children: Pv("worldBuilder:dragAFileHere")
            })]
          })]
        }), (0, Cv.jsx)(Wv.j, {
          disabled: Tv || !hv,
          className: "SchematicUploadButton",
          onClick: () => {
            !Tv && hv && zv(hv)
          },
          children: Tv ? Pv("worldBuilder:fileTooBig", {
            maxSizeKb: wv.Oc
          }) : Pv("worldBuilder:upload")
        })]
      })
    }

    function cv(vv) {
      let {
        ownedSchematics: zv,
        onClose: Pv,
        onChosenPreset: hv,
        onChosenFile: Sv
      } = vv;
      const {
        t: ev
      } = (0, av.x)();
      return (0, Cv.jsxs)(Cv.Fragment, {
        children: [(0, Cv.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: ev("worldBuilder:loadSchematic")
        }), (0, Cv.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: ev("worldBuilder:chooseOneOfYourSchematics")
        }), (0, Cv.jsx)("div", {
          className: "SchematicPopupSchematicListContainer",
          children: (0, Cv.jsx)(gv.c, {
            schematics: zv,
            onSchematicPicked: vv => {
              hv(vv.schematicId), Pv()
            },
            loading: !1,
            disableAutoExport: !0
          })
        }), (0, Cv.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: ev("worldBuilder:uploadNewSchematic")
        }), (0, Cv.jsx)(iv, {
          onFilePicked: async vv => {
            try {
              await Sv(vv)
            } catch (zv) {
              console.warn("Schematic upload failed", zv)
            } finally {
              Pv()
            }
          }
        })]
      })
    }
    var Gv = Pv(4679),
      mv = Pv(1647),
      jv = Pv(4129),
      fv = Pv(1209);

    function Fv(vv) {
      var zv;
      let {
        ownedSchematics: Pv,
        onClose: hv,
        onChosenEdit: Sv,
        onChosenNew: ev,
        onChosenDownload: pv
      } = vv;
      const {
        t: dv
      } = (0, av.x)(), [Nv, Tv] = (0, lv.useState)("choose"), [wv, sv] = (0, lv.useState)(null), [iv, cv] = (0, lv.useState)(null);
      return (0, Cv.jsxs)(Cv.Fragment, {
        children: [(0, Cv.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: dv("worldBuilder:saveSchematic")
        }), "choose" === Nv && (0, Cv.jsxs)(Cv.Fragment, {
          children: [(0, Cv.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: dv("worldBuilder:overwriteOneOfYourSchematics")
          }), (0, Cv.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, Cv.jsx)(gv.c, {
              schematics: Pv,
              onSchematicPicked: vv => {
                sv(vv.schematicId), cv("existing"), Tv("save")
              },
              loading: !1,
              disableAutoExport: !1
            })
          }), (0, Cv.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: dv("general:otherOptions")
          }), (0, Cv.jsxs)("div", {
            className: "OtherOptions",
            children: [(0, Cv.jsx)(Wv.j, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                cv("new"), Tv("save")
              },
              children: dv("worldBuilder:saveAsNewSchematic")
            }), (0, Cv.jsx)(Wv.d, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                cv("file"), Tv("save")
              },
              children: dv("worldBuilder:downloadSchematic")
            })]
          })]
        }), "choose" !== Nv && (0, Cv.jsx)(Yv, {
          type: iv,
          ownedSchematics: Pv,
          onSubmit: (vv, zv, Pv) => {
            "file" === iv ? pv(zv, vv) : "new" === iv ? ev(zv, Pv, vv) : Sv(wv, zv, Pv, vv), hv()
          },
          onBack: () => {
            Tv("choose")
          },
          prepopName: "existing" === iv ? null === (zv = Pv.find((vv => vv.schematicId === wv))) || void 0 === zv ? void 0 : zv.name : null
        })]
      })
    }

    function Yv(vv) {
      let {
        type: zv,
        prepopName: Pv,
        ownedSchematics: hv,
        onSubmit: Sv,
        onBack: ev
      } = vv;
      const {
        t: gv
      } = (0, av.x)(), [pv, dv] = (0, lv.useState)(""), [Tv, wv] = (0, lv.useState)(""), [sv, iv] = (0, lv.useState)(null), [cv, Gv] = (0, lv.useState)(!0), Fv = vv => {
        var Pv;
        vv = null !== (Pv = vv) && void 0 !== Pv ? Pv : pv;
        const Sv = "new" === zv ? (0, fv.F)(vv) : null,
          ev = [...(0, fv.Db)(vv), ...Sv ? [Sv] : []];
        return ev.length > 0 ? (iv(ev.join(", ")), !1) : "new" === zv && hv.find((zv => zv.name === vv)) ? (iv(gv("worldBuilder:schematicAlreadyExists")), !1) : (iv(null), !0)
      };
      return (0, Cv.jsxs)("div", {
        className: "SaveSchematicWindow",
        children: [(0, Cv.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: gv("general:name")
        }), (0, Cv.jsx)(mv.c, {
          className: Nv()("SaveSchematicName", {
            Error: sv
          }),
          forcedText: Pv,
          onValueChange: vv => {
            dv(vv), Fv(vv)
          },
          placeholderText: gv("worldBuilder:schematicNamePlaceholder"),
          maxLength: fv.sb
        }), (0, Cv.jsx)("h2", {
          className: Nv()("SaveSchematicError", {
            Hidden: !sv
          }),
          children: sv
        }), (0, Cv.jsx)("h2", {
          className: Nv()("SchematicPopupSubtitle", {
            Hidden: "file" === zv
          }),
          children: gv("general:description")
        }), (0, Cv.jsx)(mv.c, {
          className: Nv()("SaveSchematicDescription", {
            Hidden: "file" === zv
          }),
          onValueChange: wv,
          placeholderText: gv("worldBuilder:schematicDescriptionPlaceholder"),
          maxLength: fv.ob,
          useTextarea: !0
        }), (0, Cv.jsxs)("div", {
          className: Nv()("SaveSchematicCheckboxContainer", {
            WarningBorder: "existing" === zv
          }),
          children: [(0, Cv.jsx)(jv.e, {
            checked: cv,
            onChange: vv => {
              Gv(vv.target.checked)
            },
            disabled: !1,
            className: "SaveSchematicCheckbox"
          }), (0, Cv.jsx)("h1", {
            className: "SchematicPopupSubtitle",
            children: gv("existing" === zv ? "worldBuilder:overwriteLobbyCode" : "worldBuilder:includeLobbyCode")
          })]
        }), "existing" === zv && (0, Cv.jsx)("div", {
          className: "SaveSchematicLobbyCodeWarning",
          children: gv("worldBuilder:lobbyCodeWarning")
        }), (0, Cv.jsxs)("div", {
          className: "SaveSchematicButtons",
          children: [(0, Cv.jsx)(Wv.j, {
            className: "SaveSchematicButton",
            onClick: () => {
              Fv() && Sv(cv, pv, Tv)
            },
            children: gv("file" === zv ? "general:download" : "general:save")
          }), (0, Cv.jsx)(Wv.A, {
            className: "SaveSchematicButton",
            onClick: ev,
            children: gv("general:cancel")
          })]
        })]
      })
    }
    var nv = Pv(1184),
      Ov = Pv(1692),
      Dv = Pv(1114);

    function Kv(vv, zv) {
      if ("devDownloadJson" !== vv) ! function(vv, zv) {
        const Pv = nv.clientSideServerUrls.getHttpUrlFromWebSocketUrl((0, ev.c)().websocketUrl);
        let pv = !1;
        const dv = async (vv, zv) => {
          if (pv) return;
          pv = !0;
          const {
            gameNameWithVariation: hv,
            lobbyName: gv
          } = (0, ev.c)(), dv = {
            gameNameWithVariation: hv,
            lobbyName: gv
          };
          return await (0, Dv.postJsonWithMetricsCookiesAndJsonResponse)(`${Pv}/schematic/${vv}`, Sv.w[vv].toBuffer({
            ...dv,
            ...zv
          }), {
            retries: 1
          })
        };
        if ("Plugin|WorldBuilder|SaveSchematic" === vv) ! function(vv) {
          let {
            ownedSchematics: zv,
            onChosenDownload: Pv,
            onChosenEdit: hv,
            onChosenNew: Sv,
            onClose: ev
          } = vv;
          Tv.NotificationProvider.showCustomPopup({
            body: vv => (0, Cv.jsx)(Fv, {
              ownedSchematics: zv,
              onChosenDownload: Pv,
              onChosenEdit: hv,
              onChosenNew: Sv,
              onClose: vv
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: ev,
            unlockPointerKey: "schematicSaverPopup"
          })
        }({
          ownedSchematics: zv,
          onChosenDownload: (vv, zv) => {
            dv("download-schematic", {
              name: vv,
              includeLobbyCode: zv
            }).then((zv => {
              let {
                buffer: {
                  data: Pv
                }
              } = zv;
              const Sv = hv.Sa.from(Pv);
              (0, Ov.downloadBlob)(new Blob([Sv], {
                type: "application/octet-stream"
              }), `${vv}.bloxdschem`)
            }))
          },
          onClose: () => {
            dv("cancel", {})
          },
          onChosenEdit: (vv, zv, Pv, hv) => {
            dv("save-to-profile", {
              schematicId: vv,
              name: zv,
              description: Pv,
              includeLobbyCode: hv
            })
          },
          onChosenNew: (vv, zv, Pv) => {
            dv("save-to-profile", {
              schematicId: null,
              name: vv,
              description: zv,
              includeLobbyCode: Pv
            })
          }
        });
        else if ("Plugin|WorldBuilder|LoadSchematic" === vv) ! function(vv) {
          let {
            ownedSchematics: zv,
            onChosenFile: Pv,
            onChosenPreset: hv,
            onClose: Sv
          } = vv;
          Tv.NotificationProvider.showCustomPopup({
            body: vv => (0, Cv.jsx)(cv, {
              ownedSchematics: zv,
              onChosenFile: Pv,
              onChosenPreset: hv,
              onClose: vv
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: Sv,
            unlockPointerKey: "schematicLoaderPopup"
          })
        }({
          ownedSchematics: zv,
          onChosenFile: async vv => {
            const zv = hv.Sa.from(await vv.arrayBuffer()),
              {
                gameNameWithVariation: gv,
                lobbyName: pv
              } = (0, ev.c)();
            await (0, Dv.postBinaryWithMetricsCookiesAndCustomResponse)(`${Pv}/schematic/upload-schematic`, Sv.w["upload-schematic"].toBuffer({
              gameNameWithVariation: gv,
              lobbyName: pv,
              schematic: zv
            }), {
              retries: 1
            }, Dv.HttpPayloadType.json)
          },
          onChosenPreset: vv => {
            dv("load-from-profile", {
              schematicId: vv
            })
          },
          onClose: () => {
            dv("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ListSchematics" === vv)(0, gv.e)({
          ownedSchematics: Array.isArray(zv) ? zv : zv.schematics,
          currentWorldSchematicId: Array.isArray(zv) ? null : zv.currentWorldSchematicId,
          onClose: () => {
            dv("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ExportWorld" === vv) {
          var Nv;
          const vv = null !== (Nv = zv.schematic) && void 0 !== Nv ? Nv : zv;
          (0, Gv.j)({
            schematic: vv,
            inSourceWorld: vv.schematicId === zv.currentWorldSchematicId,
            onClose: () => {
              dv("cancel", {})
            }
          })
        } else console.error(`Unknown plugin message type ${vv}`)
      }(vv, zv);
      else {
        const vv = JSON.stringify(zv.data, null, 2);
        (0, Ov.downloadBlob)(new Blob([vv], {
          type: "application/json"
        }), zv.filename)
      }
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);