export const id = 211;
export const ids = [211];
export const modules = {
  36522: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Kd,
      e: () => ld
    });
    var pd = kd(56),
      Nd = kd(1371),
      Wd = kd(1211),
      Pd = kd(1359),
      Zd = kd(3332),
      gd = kd(4813),
      Cd = kd(1103);

    function Kd(dd) {
      let {
        loading: Jd,
        schematics: kd,
        onSchematicPicked: pd,
        selectedSchematicIdList: Nd = [],
        disableAutoExport: gd
      } = dd;
      const {
        t: Kd
      } = (0, Wd.B)();
      return (0, Cd.jsxs)("div", {
        className: "SchematicList",
        children: [Jd && (0, Cd.jsx)(Pd.b, {}), !Jd && 0 === kd.length && (0, Cd.jsx)("div", {
          className: "NoSchematicsText",
          children: Kd("worldBuilder:noSavedSchematic")
        }), !Jd && kd.map((dd => (0, Cd.jsx)(Zd.h, {
          source: {
            type: "schematic",
            schematic: dd
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            pd(dd)
          },
          isSelected: Nd.includes(dd.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: dd.isAutoExported && gd,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, dd.schematicId)))]
      })
    }

    function od(dd) {
      let {
        ownedSchematics: Jd,
        currentWorldSchematicId: kd,
        onClose: Nd
      } = dd;
      const {
        t: Pd
      } = (0, Wd.B)(), [Zd, od] = (0, pd.useState)(null);
      return (0, Cd.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === Zd && (0, Cd.jsxs)(Cd.Fragment, {
          children: [(0, Cd.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: Pd("worldBuilder:schematicList")
          }), (0, Cd.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: Pd("worldBuilder:clickSchematicForOptions")
          }), (0, Cd.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, Cd.jsx)(Kd, {
              loading: !1,
              schematics: Jd,
              onSchematicPicked: dd => {
                od(dd)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== Zd && (0, Cd.jsx)(gd.g, {
          schematic: Zd,
          inSourceWorld: Zd.schematicId === kd,
          onSchematicUpdate: dd => {
            od(dd)
          },
          onClose: () => {
            od(null), Nd()
          }
        })]
      })
    }

    function ld(dd) {
      let {
        ownedSchematics: Jd,
        currentWorldSchematicId: kd,
        onClose: pd
      } = dd;
      Nd.NotificationProvider.showCustomPopup({
        body: dd => (0, Cd.jsx)(od, {
          ownedSchematics: Jd,
          currentWorldSchematicId: kd,
          onClose: dd
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: pd,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  41700: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      runClientGameMessage: () => Yd
    });
    var pd = kd(3615),
      Nd = kd(3624),
      Wd = kd(1348),
      Pd = kd(36522),
      Zd = kd(4841),
      gd = kd(1044),
      Cd = kd.n(gd),
      Kd = kd(56),
      od = kd(1371),
      ld = kd(1461),
      Qd = kd(313),
      Ld = kd(1211),
      Od = kd(1059),
      ed = kd(1103);

    function Rd(dd) {
      let {
        onFilePicked: Jd
      } = dd;
      const {
        t: kd
      } = (0, Ld.B)(), [pd, Nd] = (0, Kd.useState)(null), {
        getRootProps: Wd,
        getInputProps: Pd,
        isDragActive: gd
      } = (0, Zd.c)({
        onDrop: dd => {
          dd.length > 0 && Nd(dd[0])
        },
        useFsAccessApi: !1
      }), od = pd && pd.size > 1024 * Qd.hd;
      return (0, ed.jsxs)("div", {
        className: "SchematicUploadContainer",
        children: [(0, ed.jsxs)("div", {
          ...Wd({
            className: Cd()("SchematicUpload", {
              ActiveDrag: gd
            })
          }),
          children: [(0, ed.jsx)("input", {
            ...Pd({
              accept: ".bloxdschem"
            })
          }), !gd && pd ? (0, ed.jsxs)(ed.Fragment, {
            children: [(0, ed.jsx)("div", {
              className: Cd()("SchematicUploadIcon", "Active", {
                TooBig: od
              }),
              children: (0, ed.jsx)(Od.e, {
                name: "file-lines"
              })
            }), (0, ed.jsx)("div", {
              className: "SchematicUploadInstructions Active",
              children: pd.name
            })]
          }) : (0, ed.jsxs)(ed.Fragment, {
            children: [(0, ed.jsx)("div", {
              className: "SchematicUploadIcon",
              children: (0, ed.jsx)(Od.e, {
                name: "up-from-bracket"
              })
            }), (0, ed.jsx)("div", {
              className: "SchematicUploadInstructions",
              children: kd("worldBuilder:dragAFileHere")
            })]
          })]
        }), (0, ed.jsx)(ld.j, {
          disabled: od || !pd,
          className: "SchematicUploadButton",
          onClick: () => {
            !od && pd && Jd(pd)
          },
          children: od ? kd("worldBuilder:fileTooBig", {
            maxSizeKb: Qd.hd
          }) : kd("worldBuilder:upload")
        })]
      })
    }

    function Id(dd) {
      let {
        ownedSchematics: Jd,
        onClose: kd,
        onChosenPreset: pd,
        onChosenFile: Nd
      } = dd;
      const {
        t: Wd
      } = (0, Ld.B)();
      return (0, ed.jsxs)(ed.Fragment, {
        children: [(0, ed.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: Wd("worldBuilder:loadSchematic")
        }), (0, ed.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: Wd("worldBuilder:chooseOneOfYourSchematics")
        }), (0, ed.jsx)("div", {
          className: "SchematicPopupSchematicListContainer",
          children: (0, ed.jsx)(Pd.c, {
            schematics: Jd,
            onSchematicPicked: dd => {
              pd(dd.schematicId), kd()
            },
            loading: !1,
            disableAutoExport: !0
          })
        }), (0, ed.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: Wd("worldBuilder:uploadNewSchematic")
        }), (0, ed.jsx)(Rd, {
          onFilePicked: async dd => {
            try {
              await Nd(dd)
            } catch (Jd) {
              console.warn("Schematic upload failed", Jd)
            } finally {
              kd()
            }
          }
        })]
      })
    }
    var Gd = kd(4813),
      vd = kd(1714),
      xd = kd(4203),
      qd = kd(1245);

    function Bd(dd) {
      var Jd;
      let {
        ownedSchematics: kd,
        onClose: pd,
        onChosenEdit: Nd,
        onChosenNew: Wd,
        onChosenDownload: Zd
      } = dd;
      const {
        t: gd
      } = (0, Ld.B)(), [Cd, od] = (0, Kd.useState)("choose"), [Qd, Od] = (0, Kd.useState)(null), [Rd, Id] = (0, Kd.useState)(null);
      return (0, ed.jsxs)(ed.Fragment, {
        children: [(0, ed.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: gd("worldBuilder:saveSchematic")
        }), "choose" === Cd && (0, ed.jsxs)(ed.Fragment, {
          children: [(0, ed.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: gd("worldBuilder:overwriteOneOfYourSchematics")
          }), (0, ed.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, ed.jsx)(Pd.c, {
              schematics: kd,
              onSchematicPicked: dd => {
                Od(dd.schematicId), Id("existing"), od("save")
              },
              loading: !1,
              disableAutoExport: !1
            })
          }), (0, ed.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: gd("general:otherOptions")
          }), (0, ed.jsxs)("div", {
            className: "OtherOptions",
            children: [(0, ed.jsx)(ld.j, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                Id("new"), od("save")
              },
              children: gd("worldBuilder:saveAsNewSchematic")
            }), (0, ed.jsx)(ld.d, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                Id("file"), od("save")
              },
              children: gd("worldBuilder:downloadSchematic")
            })]
          })]
        }), "choose" !== Cd && (0, ed.jsx)(sd, {
          type: Rd,
          ownedSchematics: kd,
          onSubmit: (dd, Jd, kd) => {
            "file" === Rd ? Zd(Jd, dd) : "new" === Rd ? Wd(Jd, kd, dd) : Nd(Qd, Jd, kd, dd), pd()
          },
          onBack: () => {
            od("choose")
          },
          prepopName: "existing" === Rd ? null === (Jd = kd.find((dd => dd.schematicId === Qd))) || void 0 === Jd ? void 0 : Jd.name : null
        })]
      })
    }

    function sd(dd) {
      let {
        type: Jd,
        prepopName: kd,
        ownedSchematics: pd,
        onSubmit: Nd,
        onBack: Wd
      } = dd;
      const {
        t: Pd
      } = (0, Ld.B)(), [Zd, gd] = (0, Kd.useState)(""), [od, Qd] = (0, Kd.useState)(""), [Od, Rd] = (0, Kd.useState)(null), [Id, Gd] = (0, Kd.useState)(!0), Bd = dd => {
        var kd;
        dd = null !== (kd = dd) && void 0 !== kd ? kd : Zd;
        const Nd = "new" === Jd ? (0, qd.A)(dd) : null,
          Wd = [...(0, qd.yb)(dd), ...Nd ? [Nd] : []];
        return Wd.length > 0 ? (Rd(Wd.join(", ")), !1) : "new" === Jd && pd.find((Jd => Jd.name === dd)) ? (Rd(Pd("worldBuilder:schematicAlreadyExists")), !1) : (Rd(null), !0)
      };
      return (0, ed.jsxs)("div", {
        className: "SaveSchematicWindow",
        children: [(0, ed.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: Pd("general:name")
        }), (0, ed.jsx)(vd.e, {
          className: Cd()("SaveSchematicName", {
            Error: Od
          }),
          forcedText: kd,
          onValueChange: dd => {
            gd(dd), Bd(dd)
          },
          placeholderText: Pd("worldBuilder:schematicNamePlaceholder"),
          maxLength: qd.pb
        }), (0, ed.jsx)("h2", {
          className: Cd()("SaveSchematicError", {
            Hidden: !Od
          }),
          children: Od
        }), (0, ed.jsx)("h2", {
          className: Cd()("SchematicPopupSubtitle", {
            Hidden: "file" === Jd
          }),
          children: Pd("general:description")
        }), (0, ed.jsx)(vd.e, {
          className: Cd()("SaveSchematicDescription", {
            Hidden: "file" === Jd
          }),
          onValueChange: Qd,
          placeholderText: Pd("worldBuilder:schematicDescriptionPlaceholder"),
          maxLength: qd.mb,
          useTextarea: !0
        }), (0, ed.jsxs)("div", {
          className: Cd()("SaveSchematicCheckboxContainer", {
            WarningBorder: "existing" === Jd
          }),
          children: [(0, ed.jsx)(xd.e, {
            checked: Id,
            onChange: dd => {
              Gd(dd.target.checked)
            },
            disabled: !1,
            className: "SaveSchematicCheckbox"
          }), (0, ed.jsx)("h1", {
            className: "SchematicPopupSubtitle",
            children: Pd("existing" === Jd ? "worldBuilder:overwriteLobbyCode" : "worldBuilder:includeLobbyCode")
          })]
        }), "existing" === Jd && (0, ed.jsx)("div", {
          className: "SaveSchematicLobbyCodeWarning",
          children: Pd("worldBuilder:lobbyCodeWarning")
        }), (0, ed.jsxs)("div", {
          className: "SaveSchematicButtons",
          children: [(0, ed.jsx)(ld.j, {
            className: "SaveSchematicButton",
            onClick: () => {
              Bd() && Nd(Id, Zd, od)
            },
            children: Pd("file" === Jd ? "general:download" : "general:save")
          }), (0, ed.jsx)(ld.B, {
            className: "SaveSchematicButton",
            onClick: Wd,
            children: Pd("general:cancel")
          })]
        })]
      })
    }
    var ad = kd(1220),
      Md = kd(1753),
      Fd = kd(1147);

    function Yd(dd, Jd) {
      if ("devDownloadJson" !== dd) ! function(dd, Jd) {
        const kd = ad.clientSideServerUrls.getHttpUrlFromWebSocketUrl((0, Wd.d)().websocketUrl);
        let Zd = !1;
        const gd = async (dd, Jd) => {
          if (Zd) return;
          Zd = !0;
          const {
            gameNameWithVariation: pd,
            lobbyName: Pd
          } = (0, Wd.d)(), gd = {
            gameNameWithVariation: pd,
            lobbyName: Pd
          };
          return await (0, Fd.postJsonWithMetricsCookiesAndJsonResponse)(`${kd}/schematic/${dd}`, Nd.y[dd].toBuffer({
            ...gd,
            ...Jd
          }), {
            retries: 1
          })
        };
        if ("Plugin|WorldBuilder|SaveSchematic" === dd) ! function(dd) {
          let {
            ownedSchematics: Jd,
            onChosenDownload: kd,
            onChosenEdit: pd,
            onChosenNew: Nd,
            onClose: Wd
          } = dd;
          od.NotificationProvider.showCustomPopup({
            body: dd => (0, ed.jsx)(Bd, {
              ownedSchematics: Jd,
              onChosenDownload: kd,
              onChosenEdit: pd,
              onChosenNew: Nd,
              onClose: dd
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: Wd,
            unlockPointerKey: "schematicSaverPopup"
          })
        }({
          ownedSchematics: Jd,
          onChosenDownload: (dd, Jd) => {
            gd("download-schematic", {
              name: dd,
              includeLobbyCode: Jd
            }).then((Jd => {
              let {
                buffer: {
                  data: kd
                }
              } = Jd;
              const Nd = pd.kL.from(kd);
              (0, Md.downloadBlob)(new Blob([Nd], {
                type: "application/octet-stream"
              }), `${dd}.bloxdschem`)
            }))
          },
          onClose: () => {
            gd("cancel", {})
          },
          onChosenEdit: (dd, Jd, kd, pd) => {
            gd("save-to-profile", {
              schematicId: dd,
              name: Jd,
              description: kd,
              includeLobbyCode: pd
            })
          },
          onChosenNew: (dd, Jd, kd) => {
            gd("save-to-profile", {
              schematicId: null,
              name: dd,
              description: Jd,
              includeLobbyCode: kd
            })
          }
        });
        else if ("Plugin|WorldBuilder|LoadSchematic" === dd) ! function(dd) {
          let {
            ownedSchematics: Jd,
            onChosenFile: kd,
            onChosenPreset: pd,
            onClose: Nd
          } = dd;
          od.NotificationProvider.showCustomPopup({
            body: dd => (0, ed.jsx)(Id, {
              ownedSchematics: Jd,
              onChosenFile: kd,
              onChosenPreset: pd,
              onClose: dd
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: Nd,
            unlockPointerKey: "schematicLoaderPopup"
          })
        }({
          ownedSchematics: Jd,
          onChosenFile: async dd => {
            const Jd = pd.kL.from(await dd.arrayBuffer()),
              {
                gameNameWithVariation: Pd,
                lobbyName: Zd
              } = (0, Wd.d)();
            await (0, Fd.postBinaryWithMetricsCookiesAndCustomResponse)(`${kd}/schematic/upload-schematic`, Nd.y["upload-schematic"].toBuffer({
              gameNameWithVariation: Pd,
              lobbyName: Zd,
              schematic: Jd
            }), {
              retries: 1
            }, Fd.HttpPayloadType.json)
          },
          onChosenPreset: dd => {
            gd("load-from-profile", {
              schematicId: dd
            })
          },
          onClose: () => {
            gd("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ListSchematics" === dd)(0, Pd.e)({
          ownedSchematics: Array.isArray(Jd) ? Jd : Jd.schematics,
          currentWorldSchematicId: Array.isArray(Jd) ? null : Jd.currentWorldSchematicId,
          onClose: () => {
            gd("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ExportWorld" === dd) {
          var Cd;
          const dd = null !== (Cd = Jd.schematic) && void 0 !== Cd ? Cd : Jd;
          (0, Gd.i)({
            schematic: dd,
            inSourceWorld: dd.schematicId === Jd.currentWorldSchematicId,
            onClose: () => {
              gd("cancel", {})
            }
          })
        } else console.error(`Unknown plugin message type ${dd}`)
      }(dd, Jd);
      else {
        const dd = JSON.stringify(Jd.data, null, 2);
        (0, Md.downloadBlob)(new Blob([dd], {
          type: "application/json"
        }), Jd.filename)
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);