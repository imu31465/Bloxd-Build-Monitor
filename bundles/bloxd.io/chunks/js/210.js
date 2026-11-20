export const id = 210;
export const ids = [210];
export const modules = {
  35873: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Kz,
      e: () => Nz
    });
    var Fz = sz(65),
      Wz = sz(1319),
      Xz = sz(1173),
      Oz = sz(1306),
      oz = sz(3158),
      vz = sz(4559),
      Uz = sz(1087);

    function Kz(zz) {
      let {
        loading: tz,
        schematics: sz,
        onSchematicPicked: Fz,
        selectedSchematicIdList: Wz = [],
        disableAutoExport: vz
      } = zz;
      const {
        t: Kz
      } = (0, Xz.B)();
      return (0, Uz.jsxs)("div", {
        className: "SchematicList",
        children: [tz && (0, Uz.jsx)(Oz.d, {}), !tz && 0 === sz.length && (0, Uz.jsx)("div", {
          className: "NoSchematicsText",
          children: Kz("worldBuilder:noSavedSchematic")
        }), !tz && sz.map((zz => (0, Uz.jsx)(oz.g, {
          source: {
            type: "schematic",
            schematic: zz
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            Fz(zz)
          },
          isSelected: Wz.includes(zz.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: zz.isAutoExported && vz,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, zz.schematicId)))]
      })
    }

    function uz(zz) {
      let {
        ownedSchematics: tz,
        currentWorldSchematicId: sz,
        onClose: Wz
      } = zz;
      const {
        t: Oz
      } = (0, Xz.B)(), [oz, uz] = (0, Fz.useState)(null);
      return (0, Uz.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === oz && (0, Uz.jsxs)(Uz.Fragment, {
          children: [(0, Uz.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: Oz("worldBuilder:schematicList")
          }), (0, Uz.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: Oz("worldBuilder:clickSchematicForOptions")
          }), (0, Uz.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, Uz.jsx)(Kz, {
              loading: !1,
              schematics: tz,
              onSchematicPicked: zz => {
                uz(zz)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== oz && (0, Uz.jsx)(vz.g, {
          schematic: oz,
          inSourceWorld: oz.schematicId === sz,
          onSchematicUpdate: zz => {
            uz(zz)
          },
          onClose: () => {
            uz(null), Wz()
          }
        })]
      })
    }

    function Nz(zz) {
      let {
        ownedSchematics: tz,
        currentWorldSchematicId: sz,
        onClose: Fz
      } = zz;
      Wz.NotificationProvider.showCustomPopup({
        body: zz => (0, Uz.jsx)(uz, {
          ownedSchematics: tz,
          currentWorldSchematicId: sz,
          onClose: zz
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: Fz,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  40856: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      runClientGameMessage: () => Zz
    });
    var Fz = sz(3417),
      Wz = sz(3433),
      Xz = sz(1293),
      Oz = sz(35873),
      oz = sz(4580),
      vz = sz(1020),
      Uz = sz.n(vz),
      Kz = sz(65),
      uz = sz(1319),
      Nz = sz(1419),
      bz = sz(321),
      wz = sz(1173),
      Dz = sz(1036),
      gz = sz(1087);

    function Hz(zz) {
      let {
        onFilePicked: tz
      } = zz;
      const {
        t: sz
      } = (0, wz.B)(), [Fz, Wz] = (0, Kz.useState)(null), {
        getRootProps: Xz,
        getInputProps: Oz,
        isDragActive: vz
      } = (0, oz.e)({
        onDrop: zz => {
          zz.length > 0 && Wz(zz[0])
        },
        useFsAccessApi: !1
      }), uz = Fz && Fz.size > 1024 * bz.Xc;
      return (0, gz.jsxs)("div", {
        className: "SchematicUploadContainer",
        children: [(0, gz.jsxs)("div", {
          ...Xz({
            className: Uz()("SchematicUpload", {
              ActiveDrag: vz
            })
          }),
          children: [(0, gz.jsx)("input", {
            ...Oz({
              accept: ".bloxdschem"
            })
          }), !vz && Fz ? (0, gz.jsxs)(gz.Fragment, {
            children: [(0, gz.jsx)("div", {
              className: Uz()("SchematicUploadIcon", "Active", {
                TooBig: uz
              }),
              children: (0, gz.jsx)(Dz.c, {
                name: "file-lines"
              })
            }), (0, gz.jsx)("div", {
              className: "SchematicUploadInstructions Active",
              children: Fz.name
            })]
          }) : (0, gz.jsxs)(gz.Fragment, {
            children: [(0, gz.jsx)("div", {
              className: "SchematicUploadIcon",
              children: (0, gz.jsx)(Dz.c, {
                name: "up-from-bracket"
              })
            }), (0, gz.jsx)("div", {
              className: "SchematicUploadInstructions",
              children: sz("worldBuilder:dragAFileHere")
            })]
          })]
        }), (0, gz.jsx)(Nz.p, {
          disabled: uz || !Fz,
          className: "SchematicUploadButton",
          onClick: () => {
            !uz && Fz && tz(Fz)
          },
          children: uz ? sz("worldBuilder:fileTooBig", {
            maxSizeKb: bz.Xc
          }) : sz("worldBuilder:upload")
        })]
      })
    }

    function Bz(zz) {
      let {
        ownedSchematics: tz,
        onClose: sz,
        onChosenPreset: Fz,
        onChosenFile: Wz
      } = zz;
      const {
        t: Xz
      } = (0, wz.B)();
      return (0, gz.jsxs)(gz.Fragment, {
        children: [(0, gz.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: Xz("worldBuilder:loadSchematic")
        }), (0, gz.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: Xz("worldBuilder:chooseOneOfYourSchematics")
        }), (0, gz.jsx)("div", {
          className: "SchematicPopupSchematicListContainer",
          children: (0, gz.jsx)(Oz.c, {
            schematics: tz,
            onSchematicPicked: zz => {
              Fz(zz.schematicId), sz()
            },
            loading: !1,
            disableAutoExport: !0
          })
        }), (0, gz.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: Xz("worldBuilder:uploadNewSchematic")
        }), (0, gz.jsx)(Hz, {
          onFilePicked: async zz => {
            try {
              await Wz(zz)
            } catch (tz) {
              console.warn("Schematic upload failed", tz)
            } finally {
              sz()
            }
          }
        })]
      })
    }
    var Pz = sz(4559),
      rz = sz(1622),
      Yz = sz(4022),
      xz = sz(1213);

    function mz(zz) {
      var tz;
      let {
        ownedSchematics: sz,
        onClose: Fz,
        onChosenEdit: Wz,
        onChosenNew: Xz,
        onChosenDownload: oz
      } = zz;
      const {
        t: vz
      } = (0, wz.B)(), [Uz, uz] = (0, Kz.useState)("choose"), [bz, Dz] = (0, Kz.useState)(null), [Hz, Bz] = (0, Kz.useState)(null);
      return (0, gz.jsxs)(gz.Fragment, {
        children: [(0, gz.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: vz("worldBuilder:saveSchematic")
        }), "choose" === Uz && (0, gz.jsxs)(gz.Fragment, {
          children: [(0, gz.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: vz("worldBuilder:overwriteOneOfYourSchematics")
          }), (0, gz.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, gz.jsx)(Oz.c, {
              schematics: sz,
              onSchematicPicked: zz => {
                Dz(zz.schematicId), Bz("existing"), uz("save")
              },
              loading: !1,
              disableAutoExport: !1
            })
          }), (0, gz.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: vz("general:otherOptions")
          }), (0, gz.jsxs)("div", {
            className: "OtherOptions",
            children: [(0, gz.jsx)(Nz.p, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                Bz("new"), uz("save")
              },
              children: vz("worldBuilder:saveAsNewSchematic")
            }), (0, gz.jsx)(Nz.h, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                Bz("file"), uz("save")
              },
              children: vz("worldBuilder:downloadSchematic")
            })]
          })]
        }), "choose" !== Uz && (0, gz.jsx)(Jz, {
          type: Hz,
          ownedSchematics: sz,
          onSubmit: (zz, tz, sz) => {
            "file" === Hz ? oz(tz, zz) : "new" === Hz ? Xz(tz, sz, zz) : Wz(bz, tz, sz, zz), Fz()
          },
          onBack: () => {
            uz("choose")
          },
          prepopName: "existing" === Hz ? null === (tz = sz.find((zz => zz.schematicId === bz))) || void 0 === tz ? void 0 : tz.name : null
        })]
      })
    }

    function Jz(zz) {
      let {
        type: tz,
        prepopName: sz,
        ownedSchematics: Fz,
        onSubmit: Wz,
        onBack: Xz
      } = zz;
      const {
        t: Oz
      } = (0, wz.B)(), [oz, vz] = (0, Kz.useState)(""), [uz, bz] = (0, Kz.useState)(""), [Dz, Hz] = (0, Kz.useState)(null), [Bz, Pz] = (0, Kz.useState)(!0), mz = zz => {
        var sz;
        zz = null !== (sz = zz) && void 0 !== sz ? sz : oz;
        const Wz = "new" === tz ? (0, xz.z)(zz) : null,
          Xz = [...(0, xz.Ab)(zz), ...Wz ? [Wz] : []];
        return Xz.length > 0 ? (Hz(Xz.join(", ")), !1) : "new" === tz && Fz.find((tz => tz.name === zz)) ? (Hz(Oz("worldBuilder:schematicAlreadyExists")), !1) : (Hz(null), !0)
      };
      return (0, gz.jsxs)("div", {
        className: "SaveSchematicWindow",
        children: [(0, gz.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: Oz("general:name")
        }), (0, gz.jsx)(rz.d, {
          className: Uz()("SaveSchematicName", {
            Error: Dz
          }),
          forcedText: sz,
          onValueChange: zz => {
            vz(zz), mz(zz)
          },
          placeholderText: Oz("worldBuilder:schematicNamePlaceholder"),
          maxLength: xz.tb
        }), (0, gz.jsx)("h2", {
          className: Uz()("SaveSchematicError", {
            Hidden: !Dz
          }),
          children: Dz
        }), (0, gz.jsx)("h2", {
          className: Uz()("SchematicPopupSubtitle", {
            Hidden: "file" === tz
          }),
          children: Oz("general:description")
        }), (0, gz.jsx)(rz.d, {
          className: Uz()("SaveSchematicDescription", {
            Hidden: "file" === tz
          }),
          onValueChange: bz,
          placeholderText: Oz("worldBuilder:schematicDescriptionPlaceholder"),
          maxLength: xz.pb,
          useTextarea: !0
        }), (0, gz.jsxs)("div", {
          className: Uz()("SaveSchematicCheckboxContainer", {
            WarningBorder: "existing" === tz
          }),
          children: [(0, gz.jsx)(Yz.e, {
            checked: Bz,
            onChange: zz => {
              Pz(zz.target.checked)
            },
            disabled: !1,
            className: "SaveSchematicCheckbox"
          }), (0, gz.jsx)("h1", {
            className: "SchematicPopupSubtitle",
            children: Oz("existing" === tz ? "worldBuilder:overwriteLobbyCode" : "worldBuilder:includeLobbyCode")
          })]
        }), "existing" === tz && (0, gz.jsx)("div", {
          className: "SaveSchematicLobbyCodeWarning",
          children: Oz("worldBuilder:lobbyCodeWarning")
        }), (0, gz.jsxs)("div", {
          className: "SaveSchematicButtons",
          children: [(0, gz.jsx)(Nz.p, {
            className: "SaveSchematicButton",
            onClick: () => {
              mz() && Wz(Bz, oz, uz)
            },
            children: Oz("file" === tz ? "general:download" : "general:save")
          }), (0, gz.jsx)(Nz.H, {
            className: "SaveSchematicButton",
            onClick: Xz,
            children: Oz("general:cancel")
          })]
        })]
      })
    }
    var Iz = sz(1191),
      Cz = sz(1664),
      ez = sz(1120);

    function Zz(zz, tz) {
      if ("devDownloadJson" !== zz) ! function(zz, tz) {
        const sz = Iz.clientSideServerUrls.getHttpUrlFromWebSocketUrl((0, Xz.d)().websocketUrl);
        let oz = !1;
        const vz = async (zz, tz) => {
          if (oz) return;
          oz = !0;
          const {
            gameNameWithVariation: Fz,
            lobbyName: Oz
          } = (0, Xz.d)(), vz = {
            gameNameWithVariation: Fz,
            lobbyName: Oz
          };
          return await (0, ez.postJsonWithMetricsCookiesAndJsonResponse)(`${sz}/schematic/${zz}`, Wz.z[zz].toBuffer({
            ...vz,
            ...tz
          }), {
            retries: 1
          })
        };
        if ("Plugin|WorldBuilder|SaveSchematic" === zz) ! function(zz) {
          let {
            ownedSchematics: tz,
            onChosenDownload: sz,
            onChosenEdit: Fz,
            onChosenNew: Wz,
            onClose: Xz
          } = zz;
          uz.NotificationProvider.showCustomPopup({
            body: zz => (0, gz.jsx)(mz, {
              ownedSchematics: tz,
              onChosenDownload: sz,
              onChosenEdit: Fz,
              onChosenNew: Wz,
              onClose: zz
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: Xz,
            unlockPointerKey: "schematicSaverPopup"
          })
        }({
          ownedSchematics: tz,
          onChosenDownload: (zz, tz) => {
            vz("download-schematic", {
              name: zz,
              includeLobbyCode: tz
            }).then((tz => {
              let {
                buffer: {
                  data: sz
                }
              } = tz;
              const Wz = Fz.Lw.from(sz);
              (0, Cz.downloadBlob)(new Blob([Wz], {
                type: "application/octet-stream"
              }), `${zz}.bloxdschem`)
            }))
          },
          onClose: () => {
            vz("cancel", {})
          },
          onChosenEdit: (zz, tz, sz, Fz) => {
            vz("save-to-profile", {
              schematicId: zz,
              name: tz,
              description: sz,
              includeLobbyCode: Fz
            })
          },
          onChosenNew: (zz, tz, sz) => {
            vz("save-to-profile", {
              schematicId: null,
              name: zz,
              description: tz,
              includeLobbyCode: sz
            })
          }
        });
        else if ("Plugin|WorldBuilder|LoadSchematic" === zz) ! function(zz) {
          let {
            ownedSchematics: tz,
            onChosenFile: sz,
            onChosenPreset: Fz,
            onClose: Wz
          } = zz;
          uz.NotificationProvider.showCustomPopup({
            body: zz => (0, gz.jsx)(Bz, {
              ownedSchematics: tz,
              onChosenFile: sz,
              onChosenPreset: Fz,
              onClose: zz
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: Wz,
            unlockPointerKey: "schematicLoaderPopup"
          })
        }({
          ownedSchematics: tz,
          onChosenFile: async zz => {
            const tz = Fz.Lw.from(await zz.arrayBuffer()),
              {
                gameNameWithVariation: Oz,
                lobbyName: oz
              } = (0, Xz.d)();
            await (0, ez.postBinaryWithMetricsCookiesAndCustomResponse)(`${sz}/schematic/upload-schematic`, Wz.z["upload-schematic"].toBuffer({
              gameNameWithVariation: Oz,
              lobbyName: oz,
              schematic: tz
            }), {
              retries: 1
            }, ez.HttpPayloadType.json)
          },
          onChosenPreset: zz => {
            vz("load-from-profile", {
              schematicId: zz
            })
          },
          onClose: () => {
            vz("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ListSchematics" === zz)(0, Oz.e)({
          ownedSchematics: Array.isArray(tz) ? tz : tz.schematics,
          currentWorldSchematicId: Array.isArray(tz) ? null : tz.currentWorldSchematicId,
          onClose: () => {
            vz("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ExportWorld" === zz) {
          var Uz;
          const zz = null !== (Uz = tz.schematic) && void 0 !== Uz ? Uz : tz;
          (0, Pz.i)({
            schematic: zz,
            inSourceWorld: zz.schematicId === tz.currentWorldSchematicId,
            onClose: () => {
              vz("cancel", {})
            }
          })
        } else console.error(`Unknown plugin message type ${zz}`)
      }(zz, tz);
      else {
        const zz = JSON.stringify(tz.data, null, 2);
        (0, Cz.downloadBlob)(new Blob([zz], {
          type: "application/json"
        }), tz.filename)
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);