export const id = 210;
export const ids = [210];
export const modules = {
  35840: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Oz,
      d: () => dz
    });
    var Ez = bz(56),
      nz = bz(1322),
      iz = bz(1181),
      lz = bz(1305),
      Mz = bz(3230),
      tz = bz(4690),
      Hz = bz(1089);

    function Oz(zz) {
      let {
        loading: uz,
        schematics: bz,
        onSchematicPicked: Ez,
        selectedSchematicIdList: nz = [],
        disableAutoExport: tz
      } = zz;
      const {
        t: Oz
      } = (0, iz.F)();
      return (0, Hz.jsxs)("div", {
        className: "SchematicList",
        children: [uz && (0, Hz.jsx)(lz.c, {}), !uz && 0 === bz.length && (0, Hz.jsx)("div", {
          className: "NoSchematicsText",
          children: Oz("worldBuilder:noSavedSchematic")
        }), !uz && bz.map((zz => (0, Hz.jsx)(Mz.i, {
          source: {
            type: "schematic",
            schematic: zz
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            Ez(zz)
          },
          isSelected: nz.includes(zz.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: zz.isAutoExported && tz,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, zz.schematicId)))]
      })
    }

    function pz(zz) {
      let {
        ownedSchematics: uz,
        currentWorldSchematicId: bz,
        onClose: nz
      } = zz;
      const {
        t: lz
      } = (0, iz.F)(), [Mz, pz] = (0, Ez.useState)(null);
      return (0, Hz.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === Mz && (0, Hz.jsxs)(Hz.Fragment, {
          children: [(0, Hz.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: lz("worldBuilder:schematicList")
          }), (0, Hz.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: lz("worldBuilder:clickSchematicForOptions")
          }), (0, Hz.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, Hz.jsx)(Oz, {
              loading: !1,
              schematics: uz,
              onSchematicPicked: zz => {
                pz(zz)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== Mz && (0, Hz.jsx)(tz.i, {
          schematic: Mz,
          inSourceWorld: Mz.schematicId === bz,
          onSchematicUpdate: zz => {
            pz(zz)
          },
          onClose: () => {
            pz(null), nz()
          }
        })]
      })
    }

    function dz(zz) {
      let {
        ownedSchematics: uz,
        currentWorldSchematicId: bz,
        onClose: Ez
      } = zz;
      nz.NotificationProvider.showCustomPopup({
        body: zz => (0, Hz.jsx)(pz, {
          ownedSchematics: uz,
          currentWorldSchematicId: bz,
          onClose: zz
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: Ez,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  40949: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      runClientGameMessage: () => Tz
    });
    var Ez = bz(3509),
      nz = bz(3521),
      iz = bz(1296),
      lz = bz(35840),
      Mz = bz(4706),
      tz = bz(1038),
      Hz = bz.n(tz),
      Oz = bz(56),
      pz = bz(1322),
      dz = bz(1419),
      Fz = bz(328),
      Zz = bz(1181),
      Rz = bz(1047),
      Kz = bz(1089);

    function wz(zz) {
      let {
        onFilePicked: uz
      } = zz;
      const {
        t: bz
      } = (0, Zz.F)(), [Ez, nz] = (0, Oz.useState)(null), {
        getRootProps: iz,
        getInputProps: lz,
        isDragActive: tz
      } = (0, Mz.b)({
        onDrop: zz => {
          zz.length > 0 && nz(zz[0])
        },
        useFsAccessApi: !1
      }), pz = Ez && Ez.size > 1024 * Fz.id;
      return (0, Kz.jsxs)("div", {
        className: "SchematicUploadContainer",
        children: [(0, Kz.jsxs)("div", {
          ...iz({
            className: Hz()("SchematicUpload", {
              ActiveDrag: tz
            })
          }),
          children: [(0, Kz.jsx)("input", {
            ...lz({
              accept: ".bloxdschem"
            })
          }), !tz && Ez ? (0, Kz.jsxs)(Kz.Fragment, {
            children: [(0, Kz.jsx)("div", {
              className: Hz()("SchematicUploadIcon", "Active", {
                TooBig: pz
              }),
              children: (0, Kz.jsx)(Rz.c, {
                name: "file-lines"
              })
            }), (0, Kz.jsx)("div", {
              className: "SchematicUploadInstructions Active",
              children: Ez.name
            })]
          }) : (0, Kz.jsxs)(Kz.Fragment, {
            children: [(0, Kz.jsx)("div", {
              className: "SchematicUploadIcon",
              children: (0, Kz.jsx)(Rz.c, {
                name: "up-from-bracket"
              })
            }), (0, Kz.jsx)("div", {
              className: "SchematicUploadInstructions",
              children: bz("worldBuilder:dragAFileHere")
            })]
          })]
        }), (0, Kz.jsx)(dz.q, {
          disabled: pz || !Ez,
          className: "SchematicUploadButton",
          onClick: () => {
            !pz && Ez && uz(Ez)
          },
          children: pz ? bz("worldBuilder:fileTooBig", {
            maxSizeKb: Fz.id
          }) : bz("worldBuilder:upload")
        })]
      })
    }

    function Xz(zz) {
      let {
        ownedSchematics: uz,
        onClose: bz,
        onChosenPreset: Ez,
        onChosenFile: nz
      } = zz;
      const {
        t: iz
      } = (0, Zz.F)();
      return (0, Kz.jsxs)(Kz.Fragment, {
        children: [(0, Kz.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: iz("worldBuilder:loadSchematic")
        }), (0, Kz.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: iz("worldBuilder:chooseOneOfYourSchematics")
        }), (0, Kz.jsx)("div", {
          className: "SchematicPopupSchematicListContainer",
          children: (0, Kz.jsx)(lz.b, {
            schematics: uz,
            onSchematicPicked: zz => {
              Ez(zz.schematicId), bz()
            },
            loading: !1,
            disableAutoExport: !0
          })
        }), (0, Kz.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: iz("worldBuilder:uploadNewSchematic")
        }), (0, Kz.jsx)(wz, {
          onFilePicked: async zz => {
            try {
              await nz(zz)
            } catch (uz) {
              console.warn("Schematic upload failed", uz)
            } finally {
              bz()
            }
          }
        })]
      })
    }
    var fz = bz(4690),
      sz = bz(1628),
      rz = bz(4144),
      oz = bz(1212);

    function Nz(zz) {
      var uz;
      let {
        ownedSchematics: bz,
        onClose: Ez,
        onChosenEdit: nz,
        onChosenNew: iz,
        onChosenDownload: Mz
      } = zz;
      const {
        t: tz
      } = (0, Zz.F)(), [Hz, pz] = (0, Oz.useState)("choose"), [Fz, Rz] = (0, Oz.useState)(null), [wz, Xz] = (0, Oz.useState)(null);
      return (0, Kz.jsxs)(Kz.Fragment, {
        children: [(0, Kz.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: tz("worldBuilder:saveSchematic")
        }), "choose" === Hz && (0, Kz.jsxs)(Kz.Fragment, {
          children: [(0, Kz.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: tz("worldBuilder:overwriteOneOfYourSchematics")
          }), (0, Kz.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, Kz.jsx)(lz.b, {
              schematics: bz,
              onSchematicPicked: zz => {
                Rz(zz.schematicId), Xz("existing"), pz("save")
              },
              loading: !1,
              disableAutoExport: !1
            })
          }), (0, Kz.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: tz("general:otherOptions")
          }), (0, Kz.jsxs)("div", {
            className: "OtherOptions",
            children: [(0, Kz.jsx)(dz.q, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                Xz("new"), pz("save")
              },
              children: tz("worldBuilder:saveAsNewSchematic")
            }), (0, Kz.jsx)(dz.f, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                Xz("file"), pz("save")
              },
              children: tz("worldBuilder:downloadSchematic")
            })]
          })]
        }), "choose" !== Hz && (0, Kz.jsx)(vz, {
          type: wz,
          ownedSchematics: bz,
          onSubmit: (zz, uz, bz) => {
            "file" === wz ? Mz(uz, zz) : "new" === wz ? iz(uz, bz, zz) : nz(Fz, uz, bz, zz), Ez()
          },
          onBack: () => {
            pz("choose")
          },
          prepopName: "existing" === wz ? null === (uz = bz.find((zz => zz.schematicId === Fz))) || void 0 === uz ? void 0 : uz.name : null
        })]
      })
    }

    function vz(zz) {
      let {
        type: uz,
        prepopName: bz,
        ownedSchematics: Ez,
        onSubmit: nz,
        onBack: iz
      } = zz;
      const {
        t: lz
      } = (0, Zz.F)(), [Mz, tz] = (0, Oz.useState)(""), [pz, Fz] = (0, Oz.useState)(""), [Rz, wz] = (0, Oz.useState)(null), [Xz, fz] = (0, Oz.useState)(!0), Nz = zz => {
        var bz;
        zz = null !== (bz = zz) && void 0 !== bz ? bz : Mz;
        const nz = "new" === uz ? (0, oz.A)(zz) : null,
          iz = [...(0, oz.Db)(zz), ...nz ? [nz] : []];
        return iz.length > 0 ? (wz(iz.join(", ")), !1) : "new" === uz && Ez.find((uz => uz.name === zz)) ? (wz(lz("worldBuilder:schematicAlreadyExists")), !1) : (wz(null), !0)
      };
      return (0, Kz.jsxs)("div", {
        className: "SaveSchematicWindow",
        children: [(0, Kz.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: lz("general:name")
        }), (0, Kz.jsx)(sz.d, {
          className: Hz()("SaveSchematicName", {
            Error: Rz
          }),
          forcedText: bz,
          onValueChange: zz => {
            tz(zz), Nz(zz)
          },
          placeholderText: lz("worldBuilder:schematicNamePlaceholder"),
          maxLength: oz.xb
        }), (0, Kz.jsx)("h2", {
          className: Hz()("SaveSchematicError", {
            Hidden: !Rz
          }),
          children: Rz
        }), (0, Kz.jsx)("h2", {
          className: Hz()("SchematicPopupSubtitle", {
            Hidden: "file" === uz
          }),
          children: lz("general:description")
        }), (0, Kz.jsx)(sz.d, {
          className: Hz()("SaveSchematicDescription", {
            Hidden: "file" === uz
          }),
          onValueChange: Fz,
          placeholderText: lz("worldBuilder:schematicDescriptionPlaceholder"),
          maxLength: oz.ub,
          useTextarea: !0
        }), (0, Kz.jsxs)("div", {
          className: Hz()("SaveSchematicCheckboxContainer", {
            WarningBorder: "existing" === uz
          }),
          children: [(0, Kz.jsx)(rz.b, {
            checked: Xz,
            onChange: zz => {
              fz(zz.target.checked)
            },
            disabled: !1,
            className: "SaveSchematicCheckbox"
          }), (0, Kz.jsx)("h1", {
            className: "SchematicPopupSubtitle",
            children: lz("existing" === uz ? "worldBuilder:overwriteLobbyCode" : "worldBuilder:includeLobbyCode")
          })]
        }), "existing" === uz && (0, Kz.jsx)("div", {
          className: "SaveSchematicLobbyCodeWarning",
          children: lz("worldBuilder:lobbyCodeWarning")
        }), (0, Kz.jsxs)("div", {
          className: "SaveSchematicButtons",
          children: [(0, Kz.jsx)(dz.q, {
            className: "SaveSchematicButton",
            onClick: () => {
              Nz() && nz(Xz, Mz, pz)
            },
            children: lz("file" === uz ? "general:download" : "general:save")
          }), (0, Kz.jsx)(dz.K, {
            className: "SaveSchematicButton",
            onClick: iz,
            children: lz("general:cancel")
          })]
        })]
      })
    }
    var xz = bz(1195),
      Jz = bz(1673),
      Az = bz(1118);

    function Tz(zz, uz) {
      if ("devDownloadJson" !== zz) ! function(zz, uz) {
        const bz = xz.clientSideServerUrls.getHttpUrlFromWebSocketUrl((0, iz.b)().websocketUrl);
        let Mz = !1;
        const tz = async (zz, uz) => {
          if (Mz) return;
          Mz = !0;
          const {
            gameNameWithVariation: Ez,
            lobbyName: lz
          } = (0, iz.b)(), tz = {
            gameNameWithVariation: Ez,
            lobbyName: lz
          };
          return await (0, Az.postJsonWithMetricsCookiesAndJsonResponse)(`${bz}/schematic/${zz}`, nz.z[zz].toBuffer({
            ...tz,
            ...uz
          }), {
            retries: 1
          })
        };
        if ("Plugin|WorldBuilder|SaveSchematic" === zz) ! function(zz) {
          let {
            ownedSchematics: uz,
            onChosenDownload: bz,
            onChosenEdit: Ez,
            onChosenNew: nz,
            onClose: iz
          } = zz;
          pz.NotificationProvider.showCustomPopup({
            body: zz => (0, Kz.jsx)(Nz, {
              ownedSchematics: uz,
              onChosenDownload: bz,
              onChosenEdit: Ez,
              onChosenNew: nz,
              onClose: zz
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: iz,
            unlockPointerKey: "schematicSaverPopup"
          })
        }({
          ownedSchematics: uz,
          onChosenDownload: (zz, uz) => {
            tz("download-schematic", {
              name: zz,
              includeLobbyCode: uz
            }).then((uz => {
              let {
                buffer: {
                  data: bz
                }
              } = uz;
              const nz = Ez.gZ.from(bz);
              (0, Jz.downloadBlob)(new Blob([nz], {
                type: "application/octet-stream"
              }), `${zz}.bloxdschem`)
            }))
          },
          onClose: () => {
            tz("cancel", {})
          },
          onChosenEdit: (zz, uz, bz, Ez) => {
            tz("save-to-profile", {
              schematicId: zz,
              name: uz,
              description: bz,
              includeLobbyCode: Ez
            })
          },
          onChosenNew: (zz, uz, bz) => {
            tz("save-to-profile", {
              schematicId: null,
              name: zz,
              description: uz,
              includeLobbyCode: bz
            })
          }
        });
        else if ("Plugin|WorldBuilder|LoadSchematic" === zz) ! function(zz) {
          let {
            ownedSchematics: uz,
            onChosenFile: bz,
            onChosenPreset: Ez,
            onClose: nz
          } = zz;
          pz.NotificationProvider.showCustomPopup({
            body: zz => (0, Kz.jsx)(Xz, {
              ownedSchematics: uz,
              onChosenFile: bz,
              onChosenPreset: Ez,
              onClose: zz
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: nz,
            unlockPointerKey: "schematicLoaderPopup"
          })
        }({
          ownedSchematics: uz,
          onChosenFile: async zz => {
            const uz = Ez.gZ.from(await zz.arrayBuffer()),
              {
                gameNameWithVariation: lz,
                lobbyName: Mz
              } = (0, iz.b)();
            await (0, Az.postBinaryWithMetricsCookiesAndCustomResponse)(`${bz}/schematic/upload-schematic`, nz.z["upload-schematic"].toBuffer({
              gameNameWithVariation: lz,
              lobbyName: Mz,
              schematic: uz
            }), {
              retries: 1
            }, Az.HttpPayloadType.json)
          },
          onChosenPreset: zz => {
            tz("load-from-profile", {
              schematicId: zz
            })
          },
          onClose: () => {
            tz("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ListSchematics" === zz)(0, lz.d)({
          ownedSchematics: Array.isArray(uz) ? uz : uz.schematics,
          currentWorldSchematicId: Array.isArray(uz) ? null : uz.currentWorldSchematicId,
          onClose: () => {
            tz("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ExportWorld" === zz) {
          var Hz;
          const zz = null !== (Hz = uz.schematic) && void 0 !== Hz ? Hz : uz;
          (0, fz.k)({
            schematic: zz,
            inSourceWorld: zz.schematicId === uz.currentWorldSchematicId,
            onClose: () => {
              tz("cancel", {})
            }
          })
        } else console.error(`Unknown plugin message type ${zz}`)
      }(zz, uz);
      else {
        const zz = JSON.stringify(uz.data, null, 2);
        (0, Jz.downloadBlob)(new Blob([zz], {
          type: "application/json"
        }), uz.filename)
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);