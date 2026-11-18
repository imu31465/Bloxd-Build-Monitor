export const id = 194;
export const ids = [194];
export const modules = {
  35175: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => By,
      d: () => ey
    });
    var Uy = Wy(55),
      hy = Wy(1207),
      fy = Wy(1042),
      Zy = Wy(1194),
      cb = Wy(2781),
      Py = Wy(4139),
      oy = Wy(952);

    function By(yb) {
      let {
        loading: bb,
        schematics: Wy,
        onSchematicPicked: Uy,
        selectedSchematicIdList: hy = [],
        disableAutoExport: Py
      } = yb;
      const {
        t: By
      } = (0, fy.D)();
      return (0, oy.jsxs)("div", {
        className: "SchematicList",
        children: [bb && (0, oy.jsx)(Zy.e, {}), !bb && 0 === Wy.length && (0, oy.jsx)("div", {
          className: "NoSchematicsText",
          children: By("worldBuilder:noSavedSchematic")
        }), !bb && Wy.map((yb => (0, oy.jsx)(cb.f, {
          source: {
            type: "schematic",
            schematic: yb
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            Uy(yb)
          },
          isSelected: hy.includes(yb.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: yb.isAutoExported && Py,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, yb.schematicId)))]
      })
    }

    function Ky(yb) {
      let {
        ownedSchematics: bb,
        currentWorldSchematicId: Wy,
        onClose: hy
      } = yb;
      const {
        t: Zy
      } = (0, fy.D)(), [cb, Ky] = (0, Uy.useState)(null);
      return (0, oy.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === cb && (0, oy.jsxs)(oy.Fragment, {
          children: [(0, oy.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: Zy("worldBuilder:schematicList")
          }), (0, oy.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: Zy("worldBuilder:clickSchematicForOptions")
          }), (0, oy.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, oy.jsx)(By, {
              loading: !1,
              schematics: bb,
              onSchematicPicked: yb => {
                Ky(yb)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== cb && (0, oy.jsx)(Py.h, {
          schematic: cb,
          inSourceWorld: cb.schematicId === Wy,
          onSchematicUpdate: yb => {
            Ky(yb)
          },
          onClose: () => {
            Ky(null), hy()
          }
        })]
      })
    }

    function ey(yb) {
      let {
        ownedSchematics: bb,
        currentWorldSchematicId: Wy,
        onClose: Uy
      } = yb;
      hy.NotificationProvider.showCustomPopup({
        body: yb => (0, oy.jsx)(Ky, {
          ownedSchematics: bb,
          currentWorldSchematicId: Wy,
          onClose: yb
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: Uy,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  40216: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      runClientGameMessage: () => ib
    });
    var Uy = Wy(3036),
      hy = Wy(3050),
      fy = Wy(1177),
      Zy = Wy(35175),
      cb = Wy(4168),
      Py = Wy(898),
      oy = Wy.n(Py),
      By = Wy(55),
      Ky = Wy(1207),
      ey = Wy(1273),
      qb = Wy(258),
      sy = Wy(1042),
      Sy = Wy(910),
      Ey = Wy(952);

    function ly(yb) {
      let {
        onFilePicked: bb
      } = yb;
      const {
        t: Wy
      } = (0, sy.D)(), [Uy, hy] = (0, By.useState)(null), {
        getRootProps: fy,
        getInputProps: Zy,
        isDragActive: Py
      } = (0, cb.e)({
        onDrop: yb => {
          yb.length > 0 && hy(yb[0])
        },
        useFsAccessApi: !1
      }), Ky = Uy && Uy.size > 1024 * qb.Sc;
      return (0, Ey.jsxs)("div", {
        className: "SchematicUploadContainer",
        children: [(0, Ey.jsxs)("div", {
          ...fy({
            className: oy()("SchematicUpload", {
              ActiveDrag: Py
            })
          }),
          children: [(0, Ey.jsx)("input", {
            ...Zy({
              accept: ".bloxdschem"
            })
          }), !Py && Uy ? (0, Ey.jsxs)(Ey.Fragment, {
            children: [(0, Ey.jsx)("div", {
              className: oy()("SchematicUploadIcon", "Active", {
                TooBig: Ky
              }),
              children: (0, Ey.jsx)(Sy.e, {
                name: "file-lines"
              })
            }), (0, Ey.jsx)("div", {
              className: "SchematicUploadInstructions Active",
              children: Uy.name
            })]
          }) : (0, Ey.jsxs)(Ey.Fragment, {
            children: [(0, Ey.jsx)("div", {
              className: "SchematicUploadIcon",
              children: (0, Ey.jsx)(Sy.e, {
                name: "up-from-bracket"
              })
            }), (0, Ey.jsx)("div", {
              className: "SchematicUploadInstructions",
              children: Wy("worldBuilder:dragAFileHere")
            })]
          })]
        }), (0, Ey.jsx)(ey.i, {
          disabled: Ky || !Uy,
          className: "SchematicUploadButton",
          onClick: () => {
            !Ky && Uy && bb(Uy)
          },
          children: Ky ? Wy("worldBuilder:fileTooBig", {
            maxSizeKb: qb.Sc
          }) : Wy("worldBuilder:upload")
        })]
      })
    }

    function mb(yb) {
      let {
        ownedSchematics: bb,
        onClose: Wy,
        onChosenPreset: Uy,
        onChosenFile: hy
      } = yb;
      const {
        t: fy
      } = (0, sy.D)();
      return (0, Ey.jsxs)(Ey.Fragment, {
        children: [(0, Ey.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: fy("worldBuilder:loadSchematic")
        }), (0, Ey.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: fy("worldBuilder:chooseOneOfYourSchematics")
        }), (0, Ey.jsx)("div", {
          className: "SchematicPopupSchematicListContainer",
          children: (0, Ey.jsx)(Zy.b, {
            schematics: bb,
            onSchematicPicked: yb => {
              Uy(yb.schematicId), Wy()
            },
            loading: !1,
            disableAutoExport: !0
          })
        }), (0, Ey.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: fy("worldBuilder:uploadNewSchematic")
        }), (0, Ey.jsx)(ly, {
          onFilePicked: async yb => {
            try {
              await hy(yb)
            } catch (bb) {
              console.warn("Schematic upload failed", bb)
            } finally {
              Wy()
            }
          }
        })]
      })
    }
    var Cy = Wy(4139),
      Ty = Wy(1486),
      Vy = Wy(3630),
      Jy = Wy(1080);

    function gb(yb) {
      var bb;
      let {
        ownedSchematics: Wy,
        onClose: Uy,
        onChosenEdit: hy,
        onChosenNew: fy,
        onChosenDownload: cb
      } = yb;
      const {
        t: Py
      } = (0, sy.D)(), [oy, Ky] = (0, By.useState)("choose"), [qb, Sy] = (0, By.useState)(null), [ly, mb] = (0, By.useState)(null);
      return (0, Ey.jsxs)(Ey.Fragment, {
        children: [(0, Ey.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: Py("worldBuilder:saveSchematic")
        }), "choose" === oy && (0, Ey.jsxs)(Ey.Fragment, {
          children: [(0, Ey.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: Py("worldBuilder:overwriteOneOfYourSchematics")
          }), (0, Ey.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, Ey.jsx)(Zy.b, {
              schematics: Wy,
              onSchematicPicked: yb => {
                Sy(yb.schematicId), mb("existing"), Ky("save")
              },
              loading: !1,
              disableAutoExport: !1
            })
          }), (0, Ey.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: Py("general:otherOptions")
          }), (0, Ey.jsxs)("div", {
            className: "OtherOptions",
            children: [(0, Ey.jsx)(ey.i, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                mb("new"), Ky("save")
              },
              children: Py("worldBuilder:saveAsNewSchematic")
            }), (0, Ey.jsx)(ey.f, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                mb("file"), Ky("save")
              },
              children: Py("worldBuilder:downloadSchematic")
            })]
          })]
        }), "choose" !== oy && (0, Ey.jsx)(Gy, {
          type: ly,
          ownedSchematics: Wy,
          onSubmit: (yb, bb, Wy) => {
            "file" === ly ? cb(bb, yb) : "new" === ly ? fy(bb, Wy, yb) : hy(qb, bb, Wy, yb), Uy()
          },
          onBack: () => {
            Ky("choose")
          },
          prepopName: "existing" === ly ? null === (bb = Wy.find((yb => yb.schematicId === qb))) || void 0 === bb ? void 0 : bb.name : null
        })]
      })
    }

    function Gy(yb) {
      let {
        type: bb,
        prepopName: Wy,
        ownedSchematics: Uy,
        onSubmit: hy,
        onBack: fy
      } = yb;
      const {
        t: Zy
      } = (0, sy.D)(), [cb, Py] = (0, By.useState)(""), [Ky, qb] = (0, By.useState)(""), [Sy, ly] = (0, By.useState)(null), [mb, Cy] = (0, By.useState)(!0), gb = yb => {
        var Wy;
        yb = null !== (Wy = yb) && void 0 !== Wy ? Wy : cb;
        const hy = "new" === bb ? (0, Jy.y)(yb) : null,
          fy = [...(0, Jy.zb)(yb), ...hy ? [hy] : []];
        return fy.length > 0 ? (ly(fy.join(", ")), !1) : "new" === bb && Uy.find((bb => bb.name === yb)) ? (ly(Zy("worldBuilder:schematicAlreadyExists")), !1) : (ly(null), !0)
      };
      return (0, Ey.jsxs)("div", {
        className: "SaveSchematicWindow",
        children: [(0, Ey.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: Zy("general:name")
        }), (0, Ey.jsx)(Ty.c, {
          className: oy()("SaveSchematicName", {
            Error: Sy
          }),
          forcedText: Wy,
          onValueChange: yb => {
            Py(yb), gb(yb)
          },
          placeholderText: Zy("worldBuilder:schematicNamePlaceholder"),
          maxLength: Jy.pb
        }), (0, Ey.jsx)("h2", {
          className: oy()("SaveSchematicError", {
            Hidden: !Sy
          }),
          children: Sy
        }), (0, Ey.jsx)("h2", {
          className: oy()("SchematicPopupSubtitle", {
            Hidden: "file" === bb
          }),
          children: Zy("general:description")
        }), (0, Ey.jsx)(Ty.c, {
          className: oy()("SaveSchematicDescription", {
            Hidden: "file" === bb
          }),
          onValueChange: qb,
          placeholderText: Zy("worldBuilder:schematicDescriptionPlaceholder"),
          maxLength: Jy.ob,
          useTextarea: !0
        }), (0, Ey.jsxs)("div", {
          className: oy()("SaveSchematicCheckboxContainer", {
            WarningBorder: "existing" === bb
          }),
          children: [(0, Ey.jsx)(Vy.c, {
            checked: mb,
            onChange: yb => {
              Cy(yb.target.checked)
            },
            disabled: !1,
            className: "SaveSchematicCheckbox"
          }), (0, Ey.jsx)("h1", {
            className: "SchematicPopupSubtitle",
            children: Zy("existing" === bb ? "worldBuilder:overwriteLobbyCode" : "worldBuilder:includeLobbyCode")
          })]
        }), "existing" === bb && (0, Ey.jsx)("div", {
          className: "SaveSchematicLobbyCodeWarning",
          children: Zy("worldBuilder:lobbyCodeWarning")
        }), (0, Ey.jsxs)("div", {
          className: "SaveSchematicButtons",
          children: [(0, Ey.jsx)(ey.i, {
            className: "SaveSchematicButton",
            onClick: () => {
              gb() && hy(mb, cb, Ky)
            },
            children: Zy("file" === bb ? "general:download" : "general:save")
          }), (0, Ey.jsx)(ey.C, {
            className: "SaveSchematicButton",
            onClick: fy,
            children: Zy("general:cancel")
          })]
        })]
      })
    }
    var Oy = Wy(1052),
      Ry = Wy(1496),
      vb = Wy(987);

    function ib(yb, bb) {
      if ("devDownloadJson" !== yb) ! function(yb, bb) {
        const Wy = Oy.clientSideServerUrls.getHttpUrlFromWebSocketUrl((0, fy.e)().websocketUrl);
        let cb = !1;
        const Py = async (yb, bb) => {
          if (cb) return;
          cb = !0;
          const {
            gameNameWithVariation: Uy,
            lobbyName: Zy
          } = (0, fy.e)(), Py = {
            gameNameWithVariation: Uy,
            lobbyName: Zy
          };
          return await (0, vb.postJsonWithMetricsCookiesAndJsonResponse)(`${Wy}/schematic/${yb}`, hy.w[yb].toBuffer({
            ...Py,
            ...bb
          }), {
            retries: 1
          })
        };
        if ("Plugin|WorldBuilder|SaveSchematic" === yb) ! function(yb) {
          let {
            ownedSchematics: bb,
            onChosenDownload: Wy,
            onChosenEdit: Uy,
            onChosenNew: hy,
            onClose: fy
          } = yb;
          Ky.NotificationProvider.showCustomPopup({
            body: yb => (0, Ey.jsx)(gb, {
              ownedSchematics: bb,
              onChosenDownload: Wy,
              onChosenEdit: Uy,
              onChosenNew: hy,
              onClose: yb
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: fy,
            unlockPointerKey: "schematicSaverPopup"
          })
        }({
          ownedSchematics: bb,
          onChosenDownload: (yb, bb) => {
            Py("download-schematic", {
              name: yb,
              includeLobbyCode: bb
            }).then((bb => {
              let {
                buffer: {
                  data: Wy
                }
              } = bb;
              const hy = Uy.uU.from(Wy);
              (0, Ry.downloadBlob)(new Blob([hy], {
                type: "application/octet-stream"
              }), `${yb}.bloxdschem`)
            }))
          },
          onClose: () => {
            Py("cancel", {})
          },
          onChosenEdit: (yb, bb, Wy, Uy) => {
            Py("save-to-profile", {
              schematicId: yb,
              name: bb,
              description: Wy,
              includeLobbyCode: Uy
            })
          },
          onChosenNew: (yb, bb, Wy) => {
            Py("save-to-profile", {
              schematicId: null,
              name: yb,
              description: bb,
              includeLobbyCode: Wy
            })
          }
        });
        else if ("Plugin|WorldBuilder|LoadSchematic" === yb) ! function(yb) {
          let {
            ownedSchematics: bb,
            onChosenFile: Wy,
            onChosenPreset: Uy,
            onClose: hy
          } = yb;
          Ky.NotificationProvider.showCustomPopup({
            body: yb => (0, Ey.jsx)(mb, {
              ownedSchematics: bb,
              onChosenFile: Wy,
              onChosenPreset: Uy,
              onClose: yb
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: hy,
            unlockPointerKey: "schematicLoaderPopup"
          })
        }({
          ownedSchematics: bb,
          onChosenFile: async yb => {
            const bb = Uy.uU.from(await yb.arrayBuffer()),
              {
                gameNameWithVariation: Zy,
                lobbyName: cb
              } = (0, fy.e)();
            await (0, vb.postBinaryWithMetricsCookiesAndCustomResponse)(`${Wy}/schematic/upload-schematic`, hy.w["upload-schematic"].toBuffer({
              gameNameWithVariation: Zy,
              lobbyName: cb,
              schematic: bb
            }), {
              retries: 1
            }, vb.HttpPayloadType.json)
          },
          onChosenPreset: yb => {
            Py("load-from-profile", {
              schematicId: yb
            })
          },
          onClose: () => {
            Py("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ListSchematics" === yb)(0, Zy.d)({
          ownedSchematics: Array.isArray(bb) ? bb : bb.schematics,
          currentWorldSchematicId: Array.isArray(bb) ? null : bb.currentWorldSchematicId,
          onClose: () => {
            Py("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ExportWorld" === yb) {
          var oy;
          const yb = null !== (oy = bb.schematic) && void 0 !== oy ? oy : bb;
          (0, Cy.k)({
            schematic: yb,
            inSourceWorld: yb.schematicId === bb.currentWorldSchematicId,
            onClose: () => {
              Py("cancel", {})
            }
          })
        } else console.error(`Unknown plugin message type ${yb}`)
      }(yb, bb);
      else {
        const yb = JSON.stringify(bb.data, null, 2);
        (0, Ry.downloadBlob)(new Blob([yb], {
          type: "application/json"
        }), bb.filename)
      }
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);