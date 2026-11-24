export const id = 214;
export const ids = [214];
export const modules = {
  36340: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Lk,
      i: () => Zk
    });
    var Xk = Ik(58),
      Tk = Ik(1324),
      ik = Ik(1179),
      yk = Ik(1318),
      lk = Ik(3414),
      ak = Ik(4929),
      qk = Ik(1096);

    function Lk(kk) {
      let {
        loading: Fk,
        schematics: Ik,
        onSchematicPicked: Xk,
        selectedSchematicIdList: Tk = [],
        disableAutoExport: ak
      } = kk;
      const {
        t: Lk
      } = (0, ik.y)();
      return (0, qk.jsxs)("div", {
        className: "SchematicList",
        children: [Fk && (0, qk.jsx)(yk.c, {}), !Fk && 0 === Ik.length && (0, qk.jsx)("div", {
          className: "NoSchematicsText",
          children: Lk("worldBuilder:noSavedSchematic")
        }), !Fk && Ik.map((kk => (0, qk.jsx)(lk.c, {
          source: {
            type: "schematic",
            schematic: kk
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            Xk(kk)
          },
          isSelected: Tk.includes(kk.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: kk.isAutoExported && ak,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, kk.schematicId)))]
      })
    }

    function tk(kk) {
      let {
        ownedSchematics: Fk,
        currentWorldSchematicId: Ik,
        onClose: Tk
      } = kk;
      const {
        t: yk
      } = (0, ik.y)(), [lk, tk] = (0, Xk.useState)(null);
      return (0, qk.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === lk && (0, qk.jsxs)(qk.Fragment, {
          children: [(0, qk.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: yk("worldBuilder:schematicList")
          }), (0, qk.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: yk("worldBuilder:clickSchematicForOptions")
          }), (0, qk.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, qk.jsx)(Lk, {
              loading: !1,
              schematics: Fk,
              onSchematicPicked: kk => {
                tk(kk)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== lk && (0, qk.jsx)(ak.f, {
          schematic: lk,
          inSourceWorld: lk.schematicId === Ik,
          onSchematicUpdate: kk => {
            tk(kk)
          },
          onClose: () => {
            tk(null), Tk()
          }
        })]
      })
    }

    function Zk(kk) {
      let {
        ownedSchematics: Fk,
        currentWorldSchematicId: Ik,
        onClose: Xk
      } = kk;
      Tk.NotificationProvider.showCustomPopup({
        body: kk => (0, qk.jsx)(tk, {
          ownedSchematics: Fk,
          currentWorldSchematicId: Ik,
          onClose: kk
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: Xk,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  41734: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      runClientGameMessage: () => Ok
    });
    var Xk = Ik(3682),
      Tk = Ik(3702),
      ik = Ik(1301),
      yk = Ik(36340),
      lk = Ik(4944),
      ak = Ik(1055),
      qk = Ik.n(ak),
      Lk = Ik(58),
      tk = Ik(1324),
      Zk = Ik(1406),
      jk = Ik(337),
      ek = Ik(1179),
      wk = Ik(1066),
      Hk = Ik(1096);

    function Jk(kk) {
      let {
        onFilePicked: Fk
      } = kk;
      const {
        t: Ik
      } = (0, ek.y)(), [Xk, Tk] = (0, Lk.useState)(null), {
        getRootProps: ik,
        getInputProps: yk,
        isDragActive: ak
      } = (0, lk.c)({
        onDrop: kk => {
          kk.length > 0 && Tk(kk[0])
        },
        useFsAccessApi: !1
      }), tk = Xk && Xk.size > 1024 * jk.kd;
      return (0, Hk.jsxs)("div", {
        className: "SchematicUploadContainer",
        children: [(0, Hk.jsxs)("div", {
          ...ik({
            className: qk()("SchematicUpload", {
              ActiveDrag: ak
            })
          }),
          children: [(0, Hk.jsx)("input", {
            ...yk({
              accept: ".bloxdschem"
            })
          }), !ak && Xk ? (0, Hk.jsxs)(Hk.Fragment, {
            children: [(0, Hk.jsx)("div", {
              className: qk()("SchematicUploadIcon", "Active", {
                TooBig: tk
              }),
              children: (0, Hk.jsx)(wk.e, {
                name: "file-lines"
              })
            }), (0, Hk.jsx)("div", {
              className: "SchematicUploadInstructions Active",
              children: Xk.name
            })]
          }) : (0, Hk.jsxs)(Hk.Fragment, {
            children: [(0, Hk.jsx)("div", {
              className: "SchematicUploadIcon",
              children: (0, Hk.jsx)(wk.e, {
                name: "up-from-bracket"
              })
            }), (0, Hk.jsx)("div", {
              className: "SchematicUploadInstructions",
              children: Ik("worldBuilder:dragAFileHere")
            })]
          })]
        }), (0, Hk.jsx)(Zk.m, {
          disabled: tk || !Xk,
          className: "SchematicUploadButton",
          onClick: () => {
            !tk && Xk && Fk(Xk)
          },
          children: tk ? Ik("worldBuilder:fileTooBig", {
            maxSizeKb: jk.kd
          }) : Ik("worldBuilder:upload")
        })]
      })
    }

    function xk(kk) {
      let {
        ownedSchematics: Fk,
        onClose: Ik,
        onChosenPreset: Xk,
        onChosenFile: Tk
      } = kk;
      const {
        t: ik
      } = (0, ek.y)();
      return (0, Hk.jsxs)(Hk.Fragment, {
        children: [(0, Hk.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: ik("worldBuilder:loadSchematic")
        }), (0, Hk.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: ik("worldBuilder:chooseOneOfYourSchematics")
        }), (0, Hk.jsx)("div", {
          className: "SchematicPopupSchematicListContainer",
          children: (0, Hk.jsx)(yk.e, {
            schematics: Fk,
            onSchematicPicked: kk => {
              Xk(kk.schematicId), Ik()
            },
            loading: !1,
            disableAutoExport: !0
          })
        }), (0, Hk.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: ik("worldBuilder:uploadNewSchematic")
        }), (0, Hk.jsx)(Jk, {
          onFilePicked: async kk => {
            try {
              await Tk(kk)
            } catch (Fk) {
              console.warn("Schematic upload failed", Fk)
            } finally {
              Ik()
            }
          }
        })]
      })
    }
    var Pk = Ik(4929),
      Kk = Ik(1617),
      Qk = Ik(4338),
      sk = Ik(1217);

    function Vk(kk) {
      var Fk;
      let {
        ownedSchematics: Ik,
        onClose: Xk,
        onChosenEdit: Tk,
        onChosenNew: ik,
        onChosenDownload: lk
      } = kk;
      const {
        t: ak
      } = (0, ek.y)(), [qk, tk] = (0, Lk.useState)("choose"), [jk, wk] = (0, Lk.useState)(null), [Jk, xk] = (0, Lk.useState)(null);
      return (0, Hk.jsxs)(Hk.Fragment, {
        children: [(0, Hk.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: ak("worldBuilder:saveSchematic")
        }), "choose" === qk && (0, Hk.jsxs)(Hk.Fragment, {
          children: [(0, Hk.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: ak("worldBuilder:overwriteOneOfYourSchematics")
          }), (0, Hk.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, Hk.jsx)(yk.e, {
              schematics: Ik,
              onSchematicPicked: kk => {
                wk(kk.schematicId), xk("existing"), tk("save")
              },
              loading: !1,
              disableAutoExport: !1
            })
          }), (0, Hk.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: ak("general:otherOptions")
          }), (0, Hk.jsxs)("div", {
            className: "OtherOptions",
            children: [(0, Hk.jsx)(Zk.m, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                xk("new"), tk("save")
              },
              children: ak("worldBuilder:saveAsNewSchematic")
            }), (0, Hk.jsx)(Zk.d, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                xk("file"), tk("save")
              },
              children: ak("worldBuilder:downloadSchematic")
            })]
          })]
        }), "choose" !== qk && (0, Hk.jsx)(zk, {
          type: Jk,
          ownedSchematics: Ik,
          onSubmit: (kk, Fk, Ik) => {
            "file" === Jk ? lk(Fk, kk) : "new" === Jk ? ik(Fk, Ik, kk) : Tk(jk, Fk, Ik, kk), Xk()
          },
          onBack: () => {
            tk("choose")
          },
          prepopName: "existing" === Jk ? null === (Fk = Ik.find((kk => kk.schematicId === jk))) || void 0 === Fk ? void 0 : Fk.name : null
        })]
      })
    }

    function zk(kk) {
      let {
        type: Fk,
        prepopName: Ik,
        ownedSchematics: Xk,
        onSubmit: Tk,
        onBack: ik
      } = kk;
      const {
        t: yk
      } = (0, ek.y)(), [lk, ak] = (0, Lk.useState)(""), [tk, jk] = (0, Lk.useState)(""), [wk, Jk] = (0, Lk.useState)(null), [xk, Pk] = (0, Lk.useState)(!0), Vk = kk => {
        var Ik;
        kk = null !== (Ik = kk) && void 0 !== Ik ? Ik : lk;
        const Tk = "new" === Fk ? (0, sk.A)(kk) : null,
          ik = [...(0, sk.wb)(kk), ...Tk ? [Tk] : []];
        return ik.length > 0 ? (Jk(ik.join(", ")), !1) : "new" === Fk && Xk.find((Fk => Fk.name === kk)) ? (Jk(yk("worldBuilder:schematicAlreadyExists")), !1) : (Jk(null), !0)
      };
      return (0, Hk.jsxs)("div", {
        className: "SaveSchematicWindow",
        children: [(0, Hk.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: yk("general:name")
        }), (0, Hk.jsx)(Kk.c, {
          className: qk()("SaveSchematicName", {
            Error: wk
          }),
          forcedText: Ik,
          onValueChange: kk => {
            ak(kk), Vk(kk)
          },
          placeholderText: yk("worldBuilder:schematicNamePlaceholder"),
          maxLength: sk.pb
        }), (0, Hk.jsx)("h2", {
          className: qk()("SaveSchematicError", {
            Hidden: !wk
          }),
          children: wk
        }), (0, Hk.jsx)("h2", {
          className: qk()("SchematicPopupSubtitle", {
            Hidden: "file" === Fk
          }),
          children: yk("general:description")
        }), (0, Hk.jsx)(Kk.c, {
          className: qk()("SaveSchematicDescription", {
            Hidden: "file" === Fk
          }),
          onValueChange: jk,
          placeholderText: yk("worldBuilder:schematicDescriptionPlaceholder"),
          maxLength: sk.ob,
          useTextarea: !0
        }), (0, Hk.jsxs)("div", {
          className: qk()("SaveSchematicCheckboxContainer", {
            WarningBorder: "existing" === Fk
          }),
          children: [(0, Hk.jsx)(Qk.d, {
            checked: xk,
            onChange: kk => {
              Pk(kk.target.checked)
            },
            disabled: !1,
            className: "SaveSchematicCheckbox"
          }), (0, Hk.jsx)("h1", {
            className: "SchematicPopupSubtitle",
            children: yk("existing" === Fk ? "worldBuilder:overwriteLobbyCode" : "worldBuilder:includeLobbyCode")
          })]
        }), "existing" === Fk && (0, Hk.jsx)("div", {
          className: "SaveSchematicLobbyCodeWarning",
          children: yk("worldBuilder:lobbyCodeWarning")
        }), (0, Hk.jsxs)("div", {
          className: "SaveSchematicButtons",
          children: [(0, Hk.jsx)(Zk.m, {
            className: "SaveSchematicButton",
            onClick: () => {
              Vk() && Tk(xk, lk, tk)
            },
            children: yk("file" === Fk ? "general:download" : "general:save")
          }), (0, Hk.jsx)(Zk.G, {
            className: "SaveSchematicButton",
            onClick: ik,
            children: yk("general:cancel")
          })]
        })]
      })
    }
    var Sk = Ik(1194),
      vk = Ik(1665),
      Ek = Ik(1120);

    function Ok(kk, Fk) {
      if ("devDownloadJson" !== kk) ! function(kk, Fk) {
        const Ik = Sk.clientSideServerUrls.getHttpUrlFromWebSocketUrl((0, ik.d)().websocketUrl);
        let lk = !1;
        const ak = async (kk, Fk) => {
          if (lk) return;
          lk = !0;
          const {
            gameNameWithVariation: Xk,
            lobbyName: yk
          } = (0, ik.d)(), ak = {
            gameNameWithVariation: Xk,
            lobbyName: yk
          };
          return await (0, Ek.postJsonWithMetricsCookiesAndJsonResponse)(`${Ik}/schematic/${kk}`, Tk.x[kk].toBuffer({
            ...ak,
            ...Fk
          }), {
            retries: 1
          })
        };
        if ("Plugin|WorldBuilder|SaveSchematic" === kk) ! function(kk) {
          let {
            ownedSchematics: Fk,
            onChosenDownload: Ik,
            onChosenEdit: Xk,
            onChosenNew: Tk,
            onClose: ik
          } = kk;
          tk.NotificationProvider.showCustomPopup({
            body: kk => (0, Hk.jsx)(Vk, {
              ownedSchematics: Fk,
              onChosenDownload: Ik,
              onChosenEdit: Xk,
              onChosenNew: Tk,
              onClose: kk
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: ik,
            unlockPointerKey: "schematicSaverPopup"
          })
        }({
          ownedSchematics: Fk,
          onChosenDownload: (kk, Fk) => {
            ak("download-schematic", {
              name: kk,
              includeLobbyCode: Fk
            }).then((Fk => {
              let {
                buffer: {
                  data: Ik
                }
              } = Fk;
              const Tk = Xk.je.from(Ik);
              (0, vk.downloadBlob)(new Blob([Tk], {
                type: "application/octet-stream"
              }), `${kk}.bloxdschem`)
            }))
          },
          onClose: () => {
            ak("cancel", {})
          },
          onChosenEdit: (kk, Fk, Ik, Xk) => {
            ak("save-to-profile", {
              schematicId: kk,
              name: Fk,
              description: Ik,
              includeLobbyCode: Xk
            })
          },
          onChosenNew: (kk, Fk, Ik) => {
            ak("save-to-profile", {
              schematicId: null,
              name: kk,
              description: Fk,
              includeLobbyCode: Ik
            })
          }
        });
        else if ("Plugin|WorldBuilder|LoadSchematic" === kk) ! function(kk) {
          let {
            ownedSchematics: Fk,
            onChosenFile: Ik,
            onChosenPreset: Xk,
            onClose: Tk
          } = kk;
          tk.NotificationProvider.showCustomPopup({
            body: kk => (0, Hk.jsx)(xk, {
              ownedSchematics: Fk,
              onChosenFile: Ik,
              onChosenPreset: Xk,
              onClose: kk
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: Tk,
            unlockPointerKey: "schematicLoaderPopup"
          })
        }({
          ownedSchematics: Fk,
          onChosenFile: async kk => {
            const Fk = Xk.je.from(await kk.arrayBuffer()),
              {
                gameNameWithVariation: yk,
                lobbyName: lk
              } = (0, ik.d)();
            await (0, Ek.postBinaryWithMetricsCookiesAndCustomResponse)(`${Ik}/schematic/upload-schematic`, Tk.x["upload-schematic"].toBuffer({
              gameNameWithVariation: yk,
              lobbyName: lk,
              schematic: Fk
            }), {
              retries: 1
            }, Ek.HttpPayloadType.json)
          },
          onChosenPreset: kk => {
            ak("load-from-profile", {
              schematicId: kk
            })
          },
          onClose: () => {
            ak("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ListSchematics" === kk)(0, yk.i)({
          ownedSchematics: Array.isArray(Fk) ? Fk : Fk.schematics,
          currentWorldSchematicId: Array.isArray(Fk) ? null : Fk.currentWorldSchematicId,
          onClose: () => {
            ak("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ExportWorld" === kk) {
          var qk;
          const kk = null !== (qk = Fk.schematic) && void 0 !== qk ? qk : Fk;
          (0, Pk.i)({
            schematic: kk,
            inSourceWorld: kk.schematicId === Fk.currentWorldSchematicId,
            onClose: () => {
              ak("cancel", {})
            }
          })
        } else console.error(`Unknown plugin message type ${kk}`)
      }(kk, Fk);
      else {
        const kk = JSON.stringify(Fk.data, null, 2);
        (0, vk.downloadBlob)(new Blob([kk], {
          type: "application/json"
        }), Fk.filename)
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);