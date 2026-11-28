export const id = 248;
export const ids = [248];
export const modules = {
  37887: (dd, Od, md) => {
    md.d(Od, {
      c: () => Qd,
      d: () => od
    });
    var Wd = md(66),
      Fd = md(1462),
      Rd = md(1238),
      Xd = md(1436),
      Kd = md(4711),
      hd = md(5706),
      vd = md(1341);

    function Qd(dd) {
      let {
        loading: Od,
        schematics: md,
        onSchematicPicked: Wd,
        selectedSchematicIdList: Fd = [],
        disableAutoExport: hd
      } = dd;
      const {
        t: Qd
      } = (0, Rd.G)();
      return (0, vd.jsxs)("div", {
        className: "SchematicList",
        children: [Od && (0, vd.jsx)(Xd.c, {}), !Od && 0 === md.length && (0, vd.jsx)("div", {
          className: "NoSchematicsText",
          children: Qd("worldBuilder:noSavedSchematic")
        }), !Od && md.map((dd => (0, vd.jsx)(Kd.f, {
          source: {
            type: "schematic",
            schematic: dd
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            Wd(dd)
          },
          isSelected: Fd.includes(dd.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: dd.isAutoExported && hd,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, dd.schematicId)))]
      })
    }

    function td(dd) {
      let {
        ownedSchematics: Od,
        currentWorldSchematicId: md,
        onClose: Fd
      } = dd;
      const {
        t: Xd
      } = (0, Rd.G)(), [Kd, td] = (0, Wd.useState)(null);
      return (0, vd.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === Kd && (0, vd.jsxs)(vd.Fragment, {
          children: [(0, vd.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: Xd("worldBuilder:schematicList")
          }), (0, vd.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: Xd("worldBuilder:clickSchematicForOptions")
          }), (0, vd.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, vd.jsx)(Qd, {
              loading: !1,
              schematics: Od,
              onSchematicPicked: dd => {
                td(dd)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== Kd && (0, vd.jsx)(hd.h, {
          schematic: Kd,
          inSourceWorld: Kd.schematicId === md,
          onSchematicUpdate: dd => {
            td(dd)
          },
          onClose: () => {
            td(null), Fd()
          }
        })]
      })
    }

    function od(dd) {
      let {
        ownedSchematics: Od,
        currentWorldSchematicId: md,
        onClose: Wd
      } = dd;
      Fd.NotificationProvider.showCustomPopup({
        body: dd => (0, vd.jsx)(td, {
          ownedSchematics: Od,
          currentWorldSchematicId: md,
          onClose: dd
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: Wd,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  54153: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      runClientGameMessage: () => Sd
    });
    var Wd = md(2471),
      Fd = md(2497),
      Rd = md(1415),
      Xd = md(37887),
      Kd = md(5861),
      hd = md(1155),
      vd = md.n(hd),
      Qd = md(66),
      td = md(1462),
      od = md(1572),
      Nd = md(405),
      qd = md(1238),
      Hd = md(1443),
      yd = md(1341);

    function bd(dd) {
      let {
        onFilePicked: Od
      } = dd;
      const {
        t: md
      } = (0, qd.G)(), [Wd, Fd] = (0, Qd.useState)(null), {
        getRootProps: Rd,
        getInputProps: Xd,
        isDragActive: hd
      } = (0, Kd.b)({
        onDrop: dd => {
          dd.length > 0 && Fd(dd[0])
        },
        useFsAccessApi: !1
      }), td = Wd && Wd.size > 1024 * Nd.Zc;
      return (0, yd.jsxs)("div", {
        className: "SchematicUploadContainer",
        children: [(0, yd.jsxs)("div", {
          ...Rd({
            className: vd()("SchematicUpload", {
              ActiveDrag: hd
            })
          }),
          children: [(0, yd.jsx)("input", {
            ...Xd({
              accept: ".bloxdschem"
            })
          }), !hd && Wd ? (0, yd.jsxs)(yd.Fragment, {
            children: [(0, yd.jsx)("div", {
              className: vd()("SchematicUploadIcon", "Active", {
                TooBig: td
              }),
              children: (0, yd.jsx)(Hd.c, {
                name: "file-lines"
              })
            }), (0, yd.jsx)("div", {
              className: "SchematicUploadInstructions Active",
              children: Wd.name
            })]
          }) : (0, yd.jsxs)(yd.Fragment, {
            children: [(0, yd.jsx)("div", {
              className: "SchematicUploadIcon",
              children: (0, yd.jsx)(Hd.c, {
                name: "up-from-bracket"
              })
            }), (0, yd.jsx)("div", {
              className: "SchematicUploadInstructions",
              children: md("worldBuilder:dragAFileHere")
            })]
          })]
        }), (0, yd.jsx)(od.m, {
          disabled: td || !Wd,
          className: "SchematicUploadButton",
          onClick: () => {
            !td && Wd && Od(Wd)
          },
          children: td ? md("worldBuilder:fileTooBig", {
            maxSizeKb: Nd.Zc
          }) : md("worldBuilder:upload")
        })]
      })
    }

    function Td(dd) {
      let {
        ownedSchematics: Od,
        onClose: md,
        onChosenPreset: Wd,
        onChosenFile: Fd
      } = dd;
      const {
        t: Rd
      } = (0, qd.G)();
      return (0, yd.jsxs)(yd.Fragment, {
        children: [(0, yd.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: Rd("worldBuilder:loadSchematic")
        }), (0, yd.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: Rd("worldBuilder:chooseOneOfYourSchematics")
        }), (0, yd.jsx)("div", {
          className: "SchematicPopupSchematicListContainer",
          children: (0, yd.jsx)(Xd.c, {
            schematics: Od,
            onSchematicPicked: dd => {
              Wd(dd.schematicId), md()
            },
            loading: !1,
            disableAutoExport: !0
          })
        }), (0, yd.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: Rd("worldBuilder:uploadNewSchematic")
        }), (0, yd.jsx)(bd, {
          onFilePicked: async dd => {
            try {
              await Fd(dd)
            } catch (Od) {
              console.warn("Schematic upload failed", Od)
            } finally {
              md()
            }
          }
        })]
      })
    }
    var pd = md(5706),
      Yd = md(1808),
      gd = md(5003),
      wd = md(1286);

    function Ed(dd) {
      var Od;
      let {
        ownedSchematics: md,
        onClose: Wd,
        onChosenEdit: Fd,
        onChosenNew: Rd,
        onChosenDownload: Kd
      } = dd;
      const {
        t: hd
      } = (0, qd.G)(), [vd, td] = (0, Qd.useState)("choose"), [Nd, Hd] = (0, Qd.useState)(null), [bd, Td] = (0, Qd.useState)(null);
      return (0, yd.jsxs)(yd.Fragment, {
        children: [(0, yd.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: hd("worldBuilder:saveSchematic")
        }), "choose" === vd && (0, yd.jsxs)(yd.Fragment, {
          children: [(0, yd.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: hd("worldBuilder:overwriteOneOfYourSchematics")
          }), (0, yd.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, yd.jsx)(Xd.c, {
              schematics: md,
              onSchematicPicked: dd => {
                Hd(dd.schematicId), Td("existing"), td("save")
              },
              loading: !1,
              disableAutoExport: !1
            })
          }), (0, yd.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: hd("general:otherOptions")
          }), (0, yd.jsxs)("div", {
            className: "OtherOptions",
            children: [(0, yd.jsx)(od.m, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                Td("new"), td("save")
              },
              children: hd("worldBuilder:saveAsNewSchematic")
            }), (0, yd.jsx)(od.g, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                Td("file"), td("save")
              },
              children: hd("worldBuilder:downloadSchematic")
            })]
          })]
        }), "choose" !== vd && (0, yd.jsx)(Jd, {
          type: bd,
          ownedSchematics: md,
          onSubmit: (dd, Od, md) => {
            "file" === bd ? Kd(Od, dd) : "new" === bd ? Rd(Od, md, dd) : Fd(Nd, Od, md, dd), Wd()
          },
          onBack: () => {
            td("choose")
          },
          prepopName: "existing" === bd ? null === (Od = md.find((dd => dd.schematicId === Nd))) || void 0 === Od ? void 0 : Od.name : null
        })]
      })
    }

    function Jd(dd) {
      let {
        type: Od,
        prepopName: md,
        ownedSchematics: Wd,
        onSubmit: Fd,
        onBack: Rd
      } = dd;
      const {
        t: Xd
      } = (0, qd.G)(), [Kd, hd] = (0, Qd.useState)(""), [td, Nd] = (0, Qd.useState)(""), [Hd, bd] = (0, Qd.useState)(null), [Td, pd] = (0, Qd.useState)(!0), Ed = dd => {
        var Fd;
        dd = null !== (Fd = dd) && void 0 !== Fd ? Fd : Kd;
        const Rd = (0, wd.zb)(dd, "new" === Od || "existing" === Od && dd !== md);
        return Rd ? (bd(Xd(Rd.translationKey, Rd.params)), !1) : "new" === Od && Wd.find((Od => Od.name === dd)) ? (bd(Xd("worldBuilder:schematicAlreadyExists")), !1) : (bd(null), !0)
      };
      return (0, yd.jsxs)("div", {
        className: "SaveSchematicWindow",
        children: [(0, yd.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: Xd("general:name")
        }), (0, yd.jsx)(Yd.c, {
          className: vd()("SaveSchematicName", {
            Error: Hd
          }),
          forcedText: md,
          onValueChange: dd => {
            hd(dd), Ed(dd)
          },
          placeholderText: Xd("worldBuilder:schematicNamePlaceholder"),
          maxLength: wd.ob
        }), (0, yd.jsx)("h2", {
          className: vd()("SaveSchematicError", {
            Hidden: !Hd
          }),
          children: Hd
        }), (0, yd.jsx)("h2", {
          className: vd()("SchematicPopupSubtitle", {
            Hidden: "file" === Od
          }),
          children: Xd("general:description")
        }), (0, yd.jsx)(Yd.c, {
          className: vd()("SaveSchematicDescription", {
            Hidden: "file" === Od
          }),
          onValueChange: Nd,
          placeholderText: Xd("worldBuilder:schematicDescriptionPlaceholder"),
          maxLength: wd.kb,
          useTextarea: !0
        }), (0, yd.jsxs)("div", {
          className: vd()("SaveSchematicCheckboxContainer", {
            WarningBorder: "existing" === Od
          }),
          children: [(0, yd.jsx)(gd.d, {
            checked: Td,
            onChange: dd => {
              pd(dd.target.checked)
            },
            disabled: !1,
            className: "SaveSchematicCheckbox"
          }), (0, yd.jsx)("h1", {
            className: "SchematicPopupSubtitle",
            children: Xd("existing" === Od ? "worldBuilder:overwriteLobbyCode" : "worldBuilder:includeLobbyCode")
          })]
        }), "existing" === Od && (0, yd.jsx)("div", {
          className: "SaveSchematicLobbyCodeWarning",
          children: Xd("worldBuilder:lobbyCodeWarning")
        }), (0, yd.jsxs)("div", {
          className: "SaveSchematicButtons",
          children: [(0, yd.jsx)(od.m, {
            className: "SaveSchematicButton",
            onClick: () => {
              Ed() && Fd(Td, Kd, td)
            },
            children: Xd("file" === Od ? "general:download" : "general:save")
          }), (0, yd.jsx)(od.G, {
            className: "SaveSchematicButton",
            onClick: Rd,
            children: Xd("general:cancel")
          })]
        })]
      })
    }
    var Ud = md(1253),
      xd = md(1890),
      Bd = md(1189);

    function Sd(dd, Od) {
      if ("devDownloadJson" !== dd) ! function(dd, Od) {
        const md = Ud.clientSideServerUrls.getHttpUrlFromWebSocketUrl((0, Rd.b)().websocketUrl);
        let Kd = !1;
        const hd = async (dd, Od) => {
          if (Kd) return;
          Kd = !0;
          const {
            gameNameWithVariation: Wd,
            lobbyName: Xd
          } = (0, Rd.b)(), hd = {
            gameNameWithVariation: Wd,
            lobbyName: Xd
          };
          return await (0, Bd.postJsonWithMetricsCookiesAndJsonResponse)(`${md}/schematic/${dd}`, Fd.B[dd].toBuffer({
            ...hd,
            ...Od
          }), {
            retries: 1
          })
        };
        if ("Plugin|WorldBuilder|SaveSchematic" === dd) ! function(dd) {
          let {
            ownedSchematics: Od,
            onChosenDownload: md,
            onChosenEdit: Wd,
            onChosenNew: Fd,
            onClose: Rd
          } = dd;
          td.NotificationProvider.showCustomPopup({
            body: dd => (0, yd.jsx)(Ed, {
              ownedSchematics: Od,
              onChosenDownload: md,
              onChosenEdit: Wd,
              onChosenNew: Fd,
              onClose: dd
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: Rd,
            unlockPointerKey: "schematicSaverPopup"
          })
        }({
          ownedSchematics: Od,
          onChosenDownload: (dd, Od) => {
            hd("download-schematic", {
              name: dd,
              includeLobbyCode: Od
            }).then((Od => {
              let {
                buffer: {
                  data: md
                }
              } = Od;
              const Fd = Wd.CQ.from(md);
              (0, xd.downloadBlob)(new Blob([Fd], {
                type: "application/octet-stream"
              }), `${dd}.bloxdschem`)
            }))
          },
          onClose: () => {
            hd("cancel", {})
          },
          onChosenEdit: (dd, Od, md, Wd) => {
            hd("save-to-profile", {
              schematicId: dd,
              name: Od,
              description: md,
              includeLobbyCode: Wd
            })
          },
          onChosenNew: (dd, Od, md) => {
            hd("save-to-profile", {
              schematicId: null,
              name: dd,
              description: Od,
              includeLobbyCode: md
            })
          }
        });
        else if ("Plugin|WorldBuilder|LoadSchematic" === dd) ! function(dd) {
          let {
            ownedSchematics: Od,
            onChosenFile: md,
            onChosenPreset: Wd,
            onClose: Fd
          } = dd;
          td.NotificationProvider.showCustomPopup({
            body: dd => (0, yd.jsx)(Td, {
              ownedSchematics: Od,
              onChosenFile: md,
              onChosenPreset: Wd,
              onClose: dd
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: Fd,
            unlockPointerKey: "schematicLoaderPopup"
          })
        }({
          ownedSchematics: Od,
          onChosenFile: async dd => {
            const Od = Wd.CQ.from(await dd.arrayBuffer()),
              {
                gameNameWithVariation: Xd,
                lobbyName: Kd
              } = (0, Rd.b)();
            await (0, Bd.postBinaryWithMetricsCookiesAndCustomResponse)(`${md}/schematic/upload-schematic`, Fd.B["upload-schematic"].toBuffer({
              gameNameWithVariation: Xd,
              lobbyName: Kd,
              schematic: Od
            }), {
              retries: 1
            }, Bd.HttpPayloadType.json)
          },
          onChosenPreset: dd => {
            hd("load-from-profile", {
              schematicId: dd
            })
          },
          onClose: () => {
            hd("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ListSchematics" === dd)(0, Xd.d)({
          ownedSchematics: Array.isArray(Od) ? Od : Od.schematics,
          currentWorldSchematicId: Array.isArray(Od) ? null : Od.currentWorldSchematicId,
          onClose: () => {
            hd("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ExportWorld" === dd) {
          var vd;
          const dd = null !== (vd = Od.schematic) && void 0 !== vd ? vd : Od;
          (0, pd.l)({
            schematic: dd,
            inSourceWorld: dd.schematicId === Od.currentWorldSchematicId,
            onClose: () => {
              hd("cancel", {})
            }
          })
        } else console.error(`Unknown plugin message type ${dd}`)
      }(dd, Od);
      else {
        const dd = JSON.stringify(Od.data, null, 2);
        (0, xd.downloadBlob)(new Blob([dd], {
          type: "application/json"
        }), Od.filename)
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);