export const id = 193;
export const ids = [193];
export const modules = {
  35074: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => qB,
      c: () => Tc
    });
    var Vc = nc(73),
      Ic = nc(1194),
      rB = nc(1051),
      uc = nc(1188),
      sc = nc(2648),
      Mc = nc(3977),
      Pc = nc(957);

    function qB(cB) {
      let {
        loading: Bc,
        schematics: nc,
        onSchematicPicked: Vc,
        selectedSchematicIdList: Ic = [],
        disableAutoExport: Mc
      } = cB;
      const {
        t: qB
      } = (0, rB.x)();
      return (0, Pc.jsxs)("div", {
        className: "SchematicList",
        children: [Bc && (0, Pc.jsx)(uc.e, {}), !Bc && 0 === nc.length && (0, Pc.jsx)("div", {
          className: "NoSchematicsText",
          children: qB("worldBuilder:noSavedSchematic")
        }), !Bc && nc.map((cB => (0, Pc.jsx)(sc.g, {
          source: {
            type: "schematic",
            schematic: cB
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            Vc(cB)
          },
          isSelected: Ic.includes(cB.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: cB.isAutoExported && Mc,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, cB.schematicId)))]
      })
    }

    function Oc(cB) {
      let {
        ownedSchematics: Bc,
        currentWorldSchematicId: nc,
        onClose: Ic
      } = cB;
      const {
        t: uc
      } = (0, rB.x)(), [sc, Oc] = (0, Vc.useState)(null);
      return (0, Pc.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === sc && (0, Pc.jsxs)(Pc.Fragment, {
          children: [(0, Pc.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: uc("worldBuilder:schematicList")
          }), (0, Pc.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: uc("worldBuilder:clickSchematicForOptions")
          }), (0, Pc.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, Pc.jsx)(qB, {
              loading: !1,
              schematics: Bc,
              onSchematicPicked: cB => {
                Oc(cB)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== sc && (0, Pc.jsx)(Mc.h, {
          schematic: sc,
          inSourceWorld: sc.schematicId === nc,
          onSchematicUpdate: cB => {
            Oc(cB)
          },
          onClose: () => {
            Oc(null), Ic()
          }
        })]
      })
    }

    function Tc(cB) {
      let {
        ownedSchematics: Bc,
        currentWorldSchematicId: nc,
        onClose: Vc
      } = cB;
      Ic.NotificationProvider.showCustomPopup({
        body: cB => (0, Pc.jsx)(Oc, {
          ownedSchematics: Bc,
          currentWorldSchematicId: nc,
          onClose: cB
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: Vc,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  39693: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      runClientGameMessage: () => bB
    });
    var Vc = nc(2945),
      Ic = nc(2903),
      rB = nc(1177),
      uc = nc(35074),
      sc = nc(4006),
      Mc = nc(912),
      Pc = nc.n(Mc),
      qB = nc(73),
      Oc = nc(1194),
      Tc = nc(1255),
      fc = nc(302),
      mB = nc(1051),
      ec = nc(926),
      tB = nc(957);

    function Sc(cB) {
      let {
        onFilePicked: Bc
      } = cB;
      const {
        t: nc
      } = (0, mB.x)(), [Vc, Ic] = (0, qB.useState)(null), {
        getRootProps: rB,
        getInputProps: uc,
        isDragActive: Mc
      } = (0, sc.b)({
        onDrop: cB => {
          cB.length > 0 && Ic(cB[0])
        },
        useFsAccessApi: !1
      }), Oc = Vc && Vc.size > 1024 * fc.zc;
      return (0, tB.jsxs)("div", {
        className: "SchematicUploadContainer",
        children: [(0, tB.jsxs)("div", {
          ...rB({
            className: Pc()("SchematicUpload", {
              ActiveDrag: Mc
            })
          }),
          children: [(0, tB.jsx)("input", {
            ...uc({
              accept: ".bloxdschem"
            })
          }), !Mc && Vc ? (0, tB.jsxs)(tB.Fragment, {
            children: [(0, tB.jsx)("div", {
              className: Pc()("SchematicUploadIcon", "Active", {
                TooBig: Oc
              }),
              children: (0, tB.jsx)(ec.e, {
                name: "file-lines"
              })
            }), (0, tB.jsx)("div", {
              className: "SchematicUploadInstructions Active",
              children: Vc.name
            })]
          }) : (0, tB.jsxs)(tB.Fragment, {
            children: [(0, tB.jsx)("div", {
              className: "SchematicUploadIcon",
              children: (0, tB.jsx)(ec.e, {
                name: "up-from-bracket"
              })
            }), (0, tB.jsx)("div", {
              className: "SchematicUploadInstructions",
              children: nc("worldBuilder:dragAFileHere")
            })]
          })]
        }), (0, tB.jsx)(Tc.n, {
          disabled: Oc || !Vc,
          className: "SchematicUploadButton",
          onClick: () => {
            !Oc && Vc && Bc(Vc)
          },
          children: Oc ? nc("worldBuilder:fileTooBig", {
            maxSizeKb: fc.zc
          }) : nc("worldBuilder:upload")
        })]
      })
    }

    function yB(cB) {
      let {
        ownedSchematics: Bc,
        onClose: nc,
        onChosenPreset: Vc,
        onChosenFile: Ic
      } = cB;
      const {
        t: rB
      } = (0, mB.x)();
      return (0, tB.jsxs)(tB.Fragment, {
        children: [(0, tB.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: rB("worldBuilder:loadSchematic")
        }), (0, tB.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: rB("worldBuilder:chooseOneOfYourSchematics")
        }), (0, tB.jsx)("div", {
          className: "SchematicPopupSchematicListContainer",
          children: (0, tB.jsx)(uc.b, {
            schematics: Bc,
            onSchematicPicked: cB => {
              Vc(cB.schematicId), nc()
            },
            loading: !1,
            disableAutoExport: !0
          })
        }), (0, tB.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: rB("worldBuilder:uploadNewSchematic")
        }), (0, tB.jsx)(Sc, {
          onFilePicked: async cB => {
            try {
              await Ic(cB)
            } catch (Bc) {
              console.warn("Schematic upload failed", Bc)
            } finally {
              nc()
            }
          }
        })]
      })
    }
    var zB = nc(3977),
      pc = nc(1485),
      hc = nc(3551),
      aB = nc(1090);

    function lc(cB) {
      var Bc;
      let {
        ownedSchematics: nc,
        onClose: Vc,
        onChosenEdit: Ic,
        onChosenNew: rB,
        onChosenDownload: sc
      } = cB;
      const {
        t: Mc
      } = (0, mB.x)(), [Pc, Oc] = (0, qB.useState)("choose"), [fc, ec] = (0, qB.useState)(null), [Sc, yB] = (0, qB.useState)(null);
      return (0, tB.jsxs)(tB.Fragment, {
        children: [(0, tB.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: Mc("worldBuilder:saveSchematic")
        }), "choose" === Pc && (0, tB.jsxs)(tB.Fragment, {
          children: [(0, tB.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: Mc("worldBuilder:overwriteOneOfYourSchematics")
          }), (0, tB.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, tB.jsx)(uc.b, {
              schematics: nc,
              onSchematicPicked: cB => {
                ec(cB.schematicId), yB("existing"), Oc("save")
              },
              loading: !1,
              disableAutoExport: !1
            })
          }), (0, tB.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: Mc("general:otherOptions")
          }), (0, tB.jsxs)("div", {
            className: "OtherOptions",
            children: [(0, tB.jsx)(Tc.n, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                yB("new"), Oc("save")
              },
              children: Mc("worldBuilder:saveAsNewSchematic")
            }), (0, tB.jsx)(Tc.d, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                yB("file"), Oc("save")
              },
              children: Mc("worldBuilder:downloadSchematic")
            })]
          })]
        }), "choose" !== Pc && (0, tB.jsx)(Yc, {
          type: Sc,
          ownedSchematics: nc,
          onSubmit: (cB, Bc, nc) => {
            "file" === Sc ? sc(Bc, cB) : "new" === Sc ? rB(Bc, nc, cB) : Ic(fc, Bc, nc, cB), Vc()
          },
          onBack: () => {
            Oc("choose")
          },
          prepopName: "existing" === Sc ? null === (Bc = nc.find((cB => cB.schematicId === fc))) || void 0 === Bc ? void 0 : Bc.name : null
        })]
      })
    }

    function Yc(cB) {
      let {
        type: Bc,
        prepopName: nc,
        ownedSchematics: Vc,
        onSubmit: Ic,
        onBack: rB
      } = cB;
      const {
        t: uc
      } = (0, mB.x)(), [sc, Mc] = (0, qB.useState)(""), [Oc, fc] = (0, qB.useState)(""), [ec, Sc] = (0, qB.useState)(null), [yB, zB] = (0, qB.useState)(!0), lc = cB => {
        var nc;
        cB = null !== (nc = cB) && void 0 !== nc ? nc : sc;
        const Ic = "new" === Bc ? (0, aB.v)(cB) : null,
          rB = [...(0, aB.tb)(cB), ...Ic ? [Ic] : []];
        return rB.length > 0 ? (Sc(rB.join(", ")), !1) : "new" === Bc && Vc.find((Bc => Bc.name === cB)) ? (Sc(uc("worldBuilder:schematicAlreadyExists")), !1) : (Sc(null), !0)
      };
      return (0, tB.jsxs)("div", {
        className: "SaveSchematicWindow",
        children: [(0, tB.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: uc("general:name")
        }), (0, tB.jsx)(pc.e, {
          className: Pc()("SaveSchematicName", {
            Error: ec
          }),
          forcedText: nc,
          onValueChange: cB => {
            Mc(cB), lc(cB)
          },
          placeholderText: uc("worldBuilder:schematicNamePlaceholder"),
          maxLength: aB.lb
        }), (0, tB.jsx)("h2", {
          className: Pc()("SaveSchematicError", {
            Hidden: !ec
          }),
          children: ec
        }), (0, tB.jsx)("h2", {
          className: Pc()("SchematicPopupSubtitle", {
            Hidden: "file" === Bc
          }),
          children: uc("general:description")
        }), (0, tB.jsx)(pc.e, {
          className: Pc()("SaveSchematicDescription", {
            Hidden: "file" === Bc
          }),
          onValueChange: fc,
          placeholderText: uc("worldBuilder:schematicDescriptionPlaceholder"),
          maxLength: aB.hb,
          useTextarea: !0
        }), (0, tB.jsxs)("div", {
          className: Pc()("SaveSchematicCheckboxContainer", {
            WarningBorder: "existing" === Bc
          }),
          children: [(0, tB.jsx)(hc.c, {
            checked: yB,
            onChange: cB => {
              zB(cB.target.checked)
            },
            disabled: !1,
            className: "SaveSchematicCheckbox"
          }), (0, tB.jsx)("h1", {
            className: "SchematicPopupSubtitle",
            children: uc("existing" === Bc ? "worldBuilder:overwriteLobbyCode" : "worldBuilder:includeLobbyCode")
          })]
        }), "existing" === Bc && (0, tB.jsx)("div", {
          className: "SaveSchematicLobbyCodeWarning",
          children: uc("worldBuilder:lobbyCodeWarning")
        }), (0, tB.jsxs)("div", {
          className: "SaveSchematicButtons",
          children: [(0, tB.jsx)(Tc.n, {
            className: "SaveSchematicButton",
            onClick: () => {
              lc() && Ic(yB, sc, Oc)
            },
            children: uc("file" === Bc ? "general:download" : "general:save")
          }), (0, tB.jsx)(Tc.L, {
            className: "SaveSchematicButton",
            onClick: rB,
            children: uc("general:cancel")
          })]
        })]
      })
    }
    var Lc = nc(1062),
      gB = nc(1495),
      Uc = nc(988);

    function bB(cB, Bc) {
      if ("devDownloadJson" !== cB) ! function(cB, Bc) {
        const nc = Lc.clientSideServerUrls.getHttpUrlFromWebSocketUrl((0, rB.d)().websocketUrl);
        let sc = !1;
        const Mc = async (cB, Bc) => {
          if (sc) return;
          sc = !0;
          const {
            gameNameWithVariation: Vc,
            lobbyName: uc
          } = (0, rB.d)(), Mc = {
            gameNameWithVariation: Vc,
            lobbyName: uc
          };
          return await (0, Uc.postJsonWithMetricsCookiesAndJsonResponse)(`${nc}/schematic/${cB}`, Ic.s[cB].toBuffer({
            ...Mc,
            ...Bc
          }), {
            retries: 1
          })
        };
        if ("Plugin|WorldBuilder|SaveSchematic" === cB) ! function(cB) {
          let {
            ownedSchematics: Bc,
            onChosenDownload: nc,
            onChosenEdit: Vc,
            onChosenNew: Ic,
            onClose: rB
          } = cB;
          Oc.NotificationProvider.showCustomPopup({
            body: cB => (0, tB.jsx)(lc, {
              ownedSchematics: Bc,
              onChosenDownload: nc,
              onChosenEdit: Vc,
              onChosenNew: Ic,
              onClose: cB
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: rB,
            unlockPointerKey: "schematicSaverPopup"
          })
        }({
          ownedSchematics: Bc,
          onChosenDownload: (cB, Bc) => {
            Mc("download-schematic", {
              name: cB,
              includeLobbyCode: Bc
            }).then((Bc => {
              let {
                buffer: {
                  data: nc
                }
              } = Bc;
              const Ic = Vc.QV.from(nc);
              (0, gB.downloadBlob)(new Blob([Ic], {
                type: "application/octet-stream"
              }), `${cB}.bloxdschem`)
            }))
          },
          onClose: () => {
            Mc("cancel", {})
          },
          onChosenEdit: (cB, Bc, nc, Vc) => {
            Mc("save-to-profile", {
              schematicId: cB,
              name: Bc,
              description: nc,
              includeLobbyCode: Vc
            })
          },
          onChosenNew: (cB, Bc, nc) => {
            Mc("save-to-profile", {
              schematicId: null,
              name: cB,
              description: Bc,
              includeLobbyCode: nc
            })
          }
        });
        else if ("Plugin|WorldBuilder|LoadSchematic" === cB) ! function(cB) {
          let {
            ownedSchematics: Bc,
            onChosenFile: nc,
            onChosenPreset: Vc,
            onClose: Ic
          } = cB;
          Oc.NotificationProvider.showCustomPopup({
            body: cB => (0, tB.jsx)(yB, {
              ownedSchematics: Bc,
              onChosenFile: nc,
              onChosenPreset: Vc,
              onClose: cB
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: Ic,
            unlockPointerKey: "schematicLoaderPopup"
          })
        }({
          ownedSchematics: Bc,
          onChosenFile: async cB => {
            const Bc = Vc.QV.from(await cB.arrayBuffer()),
              {
                gameNameWithVariation: uc,
                lobbyName: sc
              } = (0, rB.d)();
            await (0, Uc.postBinaryWithMetricsCookiesAndCustomResponse)(`${nc}/schematic/upload-schematic`, Ic.s["upload-schematic"].toBuffer({
              gameNameWithVariation: uc,
              lobbyName: sc,
              schematic: Bc
            }), {
              retries: 1
            }, Uc.HttpPayloadType.json)
          },
          onChosenPreset: cB => {
            Mc("load-from-profile", {
              schematicId: cB
            })
          },
          onClose: () => {
            Mc("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ListSchematics" === cB)(0, uc.c)({
          ownedSchematics: Array.isArray(Bc) ? Bc : Bc.schematics,
          currentWorldSchematicId: Array.isArray(Bc) ? null : Bc.currentWorldSchematicId,
          onClose: () => {
            Mc("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ExportWorld" === cB) {
          var Pc;
          const cB = null !== (Pc = Bc.schematic) && void 0 !== Pc ? Pc : Bc;
          (0, zB.j)({
            schematic: cB,
            inSourceWorld: cB.schematicId === Bc.currentWorldSchematicId,
            onClose: () => {
              Mc("cancel", {})
            }
          })
        } else console.error(`Unknown plugin message type ${cB}`)
      }(cB, Bc);
      else {
        const cB = JSON.stringify(Bc.data, null, 2);
        (0, gB.downloadBlob)(new Blob([cB], {
          type: "application/json"
        }), Bc.filename)
      }
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);