export const id = 210;
export const ids = [210];
export const modules = {
  36076: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => sk,
      g: () => Jk
    });
    var Rk = Bk(61),
      tk = Bk(1300),
      ak = Bk(1149),
      Xk = Bk(1288),
      bk = Bk(3284),
      wk = Bk(4635),
      dk = Bk(1069);

    function sk(kk) {
      let {
        loading: Fk,
        schematics: Bk,
        onSchematicPicked: Rk,
        selectedSchematicIdList: tk = [],
        disableAutoExport: wk
      } = kk;
      const {
        t: sk
      } = (0, ak.x)();
      return (0, dk.jsxs)("div", {
        className: "SchematicList",
        children: [Fk && (0, dk.jsx)(Xk.b, {}), !Fk && 0 === Bk.length && (0, dk.jsx)("div", {
          className: "NoSchematicsText",
          children: sk("worldBuilder:noSavedSchematic")
        }), !Fk && Bk.map((kk => (0, dk.jsx)(bk.g, {
          source: {
            type: "schematic",
            schematic: kk
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            Rk(kk)
          },
          isSelected: tk.includes(kk.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: kk.isAutoExported && wk,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, kk.schematicId)))]
      })
    }

    function Vk(kk) {
      let {
        ownedSchematics: Fk,
        currentWorldSchematicId: Bk,
        onClose: tk
      } = kk;
      const {
        t: Xk
      } = (0, ak.x)(), [bk, Vk] = (0, Rk.useState)(null);
      return (0, dk.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === bk && (0, dk.jsxs)(dk.Fragment, {
          children: [(0, dk.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: Xk("worldBuilder:schematicList")
          }), (0, dk.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: Xk("worldBuilder:clickSchematicForOptions")
          }), (0, dk.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, dk.jsx)(sk, {
              loading: !1,
              schematics: Fk,
              onSchematicPicked: kk => {
                Vk(kk)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== bk && (0, dk.jsx)(wk.h, {
          schematic: bk,
          inSourceWorld: bk.schematicId === Bk,
          onSchematicUpdate: kk => {
            Vk(kk)
          },
          onClose: () => {
            Vk(null), tk()
          }
        })]
      })
    }

    function Jk(kk) {
      let {
        ownedSchematics: Fk,
        currentWorldSchematicId: Bk,
        onClose: Rk
      } = kk;
      tk.NotificationProvider.showCustomPopup({
        body: kk => (0, dk.jsx)(Vk, {
          ownedSchematics: Fk,
          currentWorldSchematicId: Bk,
          onClose: kk
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: Rk,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  41158: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      runClientGameMessage: () => uk
    });
    var Rk = Bk(3528),
      tk = Bk(3546),
      ak = Bk(1267),
      Xk = Bk(36076),
      bk = Bk(4664),
      wk = Bk(1020),
      dk = Bk.n(wk),
      sk = Bk(61),
      Vk = Bk(1300),
      Jk = Bk(1389),
      Ak = Bk(291),
      ek = Bk(1149),
      yk = Bk(1028),
      fk = Bk(1069);

    function mk(kk) {
      let {
        onFilePicked: Fk
      } = kk;
      const {
        t: Bk
      } = (0, ek.x)(), [Rk, tk] = (0, sk.useState)(null), {
        getRootProps: ak,
        getInputProps: Xk,
        isDragActive: wk
      } = (0, bk.d)({
        onDrop: kk => {
          kk.length > 0 && tk(kk[0])
        },
        useFsAccessApi: !1
      }), Vk = Rk && Rk.size > 1024 * Ak.gd;
      return (0, fk.jsxs)("div", {
        className: "SchematicUploadContainer",
        children: [(0, fk.jsxs)("div", {
          ...ak({
            className: dk()("SchematicUpload", {
              ActiveDrag: wk
            })
          }),
          children: [(0, fk.jsx)("input", {
            ...Xk({
              accept: ".bloxdschem"
            })
          }), !wk && Rk ? (0, fk.jsxs)(fk.Fragment, {
            children: [(0, fk.jsx)("div", {
              className: dk()("SchematicUploadIcon", "Active", {
                TooBig: Vk
              }),
              children: (0, fk.jsx)(yk.d, {
                name: "file-lines"
              })
            }), (0, fk.jsx)("div", {
              className: "SchematicUploadInstructions Active",
              children: Rk.name
            })]
          }) : (0, fk.jsxs)(fk.Fragment, {
            children: [(0, fk.jsx)("div", {
              className: "SchematicUploadIcon",
              children: (0, fk.jsx)(yk.d, {
                name: "up-from-bracket"
              })
            }), (0, fk.jsx)("div", {
              className: "SchematicUploadInstructions",
              children: Bk("worldBuilder:dragAFileHere")
            })]
          })]
        }), (0, fk.jsx)(Jk.o, {
          disabled: Vk || !Rk,
          className: "SchematicUploadButton",
          onClick: () => {
            !Vk && Rk && Fk(Rk)
          },
          children: Vk ? Bk("worldBuilder:fileTooBig", {
            maxSizeKb: Ak.gd
          }) : Bk("worldBuilder:upload")
        })]
      })
    }

    function Wk(kk) {
      let {
        ownedSchematics: Fk,
        onClose: Bk,
        onChosenPreset: Rk,
        onChosenFile: tk
      } = kk;
      const {
        t: ak
      } = (0, ek.x)();
      return (0, fk.jsxs)(fk.Fragment, {
        children: [(0, fk.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: ak("worldBuilder:loadSchematic")
        }), (0, fk.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: ak("worldBuilder:chooseOneOfYourSchematics")
        }), (0, fk.jsx)("div", {
          className: "SchematicPopupSchematicListContainer",
          children: (0, fk.jsx)(Xk.c, {
            schematics: Fk,
            onSchematicPicked: kk => {
              Rk(kk.schematicId), Bk()
            },
            loading: !1,
            disableAutoExport: !0
          })
        }), (0, fk.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: ak("worldBuilder:uploadNewSchematic")
        }), (0, fk.jsx)(mk, {
          onFilePicked: async kk => {
            try {
              await tk(kk)
            } catch (Fk) {
              console.warn("Schematic upload failed", Fk)
            } finally {
              Bk()
            }
          }
        })]
      })
    }
    var vk = Bk(4635),
      ik = Bk(1620),
      Yk = Bk(4121),
      Lk = Bk(1173);

    function Ok(kk) {
      var Fk;
      let {
        ownedSchematics: Bk,
        onClose: Rk,
        onChosenEdit: tk,
        onChosenNew: ak,
        onChosenDownload: bk
      } = kk;
      const {
        t: wk
      } = (0, ek.x)(), [dk, Vk] = (0, sk.useState)("choose"), [Ak, yk] = (0, sk.useState)(null), [mk, Wk] = (0, sk.useState)(null);
      return (0, fk.jsxs)(fk.Fragment, {
        children: [(0, fk.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: wk("worldBuilder:saveSchematic")
        }), "choose" === dk && (0, fk.jsxs)(fk.Fragment, {
          children: [(0, fk.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: wk("worldBuilder:overwriteOneOfYourSchematics")
          }), (0, fk.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, fk.jsx)(Xk.c, {
              schematics: Bk,
              onSchematicPicked: kk => {
                yk(kk.schematicId), Wk("existing"), Vk("save")
              },
              loading: !1,
              disableAutoExport: !1
            })
          }), (0, fk.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: wk("general:otherOptions")
          }), (0, fk.jsxs)("div", {
            className: "OtherOptions",
            children: [(0, fk.jsx)(Jk.o, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                Wk("new"), Vk("save")
              },
              children: wk("worldBuilder:saveAsNewSchematic")
            }), (0, fk.jsx)(Jk.g, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                Wk("file"), Vk("save")
              },
              children: wk("worldBuilder:downloadSchematic")
            })]
          })]
        }), "choose" !== dk && (0, fk.jsx)(Ek, {
          type: mk,
          ownedSchematics: Bk,
          onSubmit: (kk, Fk, Bk) => {
            "file" === mk ? bk(Fk, kk) : "new" === mk ? ak(Fk, Bk, kk) : tk(Ak, Fk, Bk, kk), Rk()
          },
          onBack: () => {
            Vk("choose")
          },
          prepopName: "existing" === mk ? null === (Fk = Bk.find((kk => kk.schematicId === Ak))) || void 0 === Fk ? void 0 : Fk.name : null
        })]
      })
    }

    function Ek(kk) {
      let {
        type: Fk,
        prepopName: Bk,
        ownedSchematics: Rk,
        onSubmit: tk,
        onBack: ak
      } = kk;
      const {
        t: Xk
      } = (0, ek.x)(), [bk, wk] = (0, sk.useState)(""), [Vk, Ak] = (0, sk.useState)(""), [yk, mk] = (0, sk.useState)(null), [Wk, vk] = (0, sk.useState)(!0), Ok = kk => {
        var Bk;
        kk = null !== (Bk = kk) && void 0 !== Bk ? Bk : bk;
        const tk = "new" === Fk ? (0, Lk.z)(kk) : null,
          ak = [...(0, Lk.Db)(kk), ...tk ? [tk] : []];
        return ak.length > 0 ? (mk(ak.join(", ")), !1) : "new" === Fk && Rk.find((Fk => Fk.name === kk)) ? (mk(Xk("worldBuilder:schematicAlreadyExists")), !1) : (mk(null), !0)
      };
      return (0, fk.jsxs)("div", {
        className: "SaveSchematicWindow",
        children: [(0, fk.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: Xk("general:name")
        }), (0, fk.jsx)(ik.e, {
          className: dk()("SaveSchematicName", {
            Error: yk
          }),
          forcedText: Bk,
          onValueChange: kk => {
            wk(kk), Ok(kk)
          },
          placeholderText: Xk("worldBuilder:schematicNamePlaceholder"),
          maxLength: Lk.rb
        }), (0, fk.jsx)("h2", {
          className: dk()("SaveSchematicError", {
            Hidden: !yk
          }),
          children: yk
        }), (0, fk.jsx)("h2", {
          className: dk()("SchematicPopupSubtitle", {
            Hidden: "file" === Fk
          }),
          children: Xk("general:description")
        }), (0, fk.jsx)(ik.e, {
          className: dk()("SaveSchematicDescription", {
            Hidden: "file" === Fk
          }),
          onValueChange: Ak,
          placeholderText: Xk("worldBuilder:schematicDescriptionPlaceholder"),
          maxLength: Lk.nb,
          useTextarea: !0
        }), (0, fk.jsxs)("div", {
          className: dk()("SaveSchematicCheckboxContainer", {
            WarningBorder: "existing" === Fk
          }),
          children: [(0, fk.jsx)(Yk.c, {
            checked: Wk,
            onChange: kk => {
              vk(kk.target.checked)
            },
            disabled: !1,
            className: "SaveSchematicCheckbox"
          }), (0, fk.jsx)("h1", {
            className: "SchematicPopupSubtitle",
            children: Xk("existing" === Fk ? "worldBuilder:overwriteLobbyCode" : "worldBuilder:includeLobbyCode")
          })]
        }), "existing" === Fk && (0, fk.jsx)("div", {
          className: "SaveSchematicLobbyCodeWarning",
          children: Xk("worldBuilder:lobbyCodeWarning")
        }), (0, fk.jsxs)("div", {
          className: "SaveSchematicButtons",
          children: [(0, fk.jsx)(Jk.o, {
            className: "SaveSchematicButton",
            onClick: () => {
              Ok() && tk(Wk, bk, Vk)
            },
            children: Xk("file" === Fk ? "general:download" : "general:save")
          }), (0, fk.jsx)(Jk.J, {
            className: "SaveSchematicButton",
            onClick: ak,
            children: Xk("general:cancel")
          })]
        })]
      })
    }
    var Sk = Bk(1154),
      Nk = Bk(1650),
      Hk = Bk(1101);

    function uk(kk, Fk) {
      if ("devDownloadJson" !== kk) ! function(kk, Fk) {
        const Bk = Sk.clientSideServerUrls.getHttpUrlFromWebSocketUrl((0, ak.e)().websocketUrl);
        let bk = !1;
        const wk = async (kk, Fk) => {
          if (bk) return;
          bk = !0;
          const {
            gameNameWithVariation: Rk,
            lobbyName: Xk
          } = (0, ak.e)(), wk = {
            gameNameWithVariation: Rk,
            lobbyName: Xk
          };
          return await (0, Hk.postJsonWithMetricsCookiesAndJsonResponse)(`${Bk}/schematic/${kk}`, tk.H[kk].toBuffer({
            ...wk,
            ...Fk
          }), {
            retries: 1
          })
        };
        if ("Plugin|WorldBuilder|SaveSchematic" === kk) ! function(kk) {
          let {
            ownedSchematics: Fk,
            onChosenDownload: Bk,
            onChosenEdit: Rk,
            onChosenNew: tk,
            onClose: ak
          } = kk;
          Vk.NotificationProvider.showCustomPopup({
            body: kk => (0, fk.jsx)(Ok, {
              ownedSchematics: Fk,
              onChosenDownload: Bk,
              onChosenEdit: Rk,
              onChosenNew: tk,
              onClose: kk
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: ak,
            unlockPointerKey: "schematicSaverPopup"
          })
        }({
          ownedSchematics: Fk,
          onChosenDownload: (kk, Fk) => {
            wk("download-schematic", {
              name: kk,
              includeLobbyCode: Fk
            }).then((Fk => {
              let {
                buffer: {
                  data: Bk
                }
              } = Fk;
              const tk = Rk.Ge.from(Bk);
              (0, Nk.downloadBlob)(new Blob([tk], {
                type: "application/octet-stream"
              }), `${kk}.bloxdschem`)
            }))
          },
          onClose: () => {
            wk("cancel", {})
          },
          onChosenEdit: (kk, Fk, Bk, Rk) => {
            wk("save-to-profile", {
              schematicId: kk,
              name: Fk,
              description: Bk,
              includeLobbyCode: Rk
            })
          },
          onChosenNew: (kk, Fk, Bk) => {
            wk("save-to-profile", {
              schematicId: null,
              name: kk,
              description: Fk,
              includeLobbyCode: Bk
            })
          }
        });
        else if ("Plugin|WorldBuilder|LoadSchematic" === kk) ! function(kk) {
          let {
            ownedSchematics: Fk,
            onChosenFile: Bk,
            onChosenPreset: Rk,
            onClose: tk
          } = kk;
          Vk.NotificationProvider.showCustomPopup({
            body: kk => (0, fk.jsx)(Wk, {
              ownedSchematics: Fk,
              onChosenFile: Bk,
              onChosenPreset: Rk,
              onClose: kk
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: tk,
            unlockPointerKey: "schematicLoaderPopup"
          })
        }({
          ownedSchematics: Fk,
          onChosenFile: async kk => {
            const Fk = Rk.Ge.from(await kk.arrayBuffer()),
              {
                gameNameWithVariation: Xk,
                lobbyName: bk
              } = (0, ak.e)();
            await (0, Hk.postBinaryWithMetricsCookiesAndCustomResponse)(`${Bk}/schematic/upload-schematic`, tk.H["upload-schematic"].toBuffer({
              gameNameWithVariation: Xk,
              lobbyName: bk,
              schematic: Fk
            }), {
              retries: 1
            }, Hk.HttpPayloadType.json)
          },
          onChosenPreset: kk => {
            wk("load-from-profile", {
              schematicId: kk
            })
          },
          onClose: () => {
            wk("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ListSchematics" === kk)(0, Xk.g)({
          ownedSchematics: Array.isArray(Fk) ? Fk : Fk.schematics,
          currentWorldSchematicId: Array.isArray(Fk) ? null : Fk.currentWorldSchematicId,
          onClose: () => {
            wk("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ExportWorld" === kk) {
          var dk;
          const kk = null !== (dk = Fk.schematic) && void 0 !== dk ? dk : Fk;
          (0, vk.i)({
            schematic: kk,
            inSourceWorld: kk.schematicId === Fk.currentWorldSchematicId,
            onClose: () => {
              wk("cancel", {})
            }
          })
        } else console.error(`Unknown plugin message type ${kk}`)
      }(kk, Fk);
      else {
        const kk = JSON.stringify(Fk.data, null, 2);
        (0, Nk.downloadBlob)(new Blob([kk], {
          type: "application/json"
        }), Fk.filename)
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);