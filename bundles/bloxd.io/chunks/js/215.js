export const id = 215;
export const ids = [215];
export const modules = {
  35908: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Mk,
      f: () => xk
    });
    var Dk = ik(60),
      fk = ik(1333),
      Sk = ik(1172),
      bk = ik(1327),
      rk = ik(3433),
      Pk = ik(4860),
      mk = ik(1066);

    function Mk(kk) {
      let {
        loading: ek,
        schematics: ik,
        onSchematicPicked: Dk,
        selectedSchematicIdList: fk = [],
        disableAutoExport: Pk
      } = kk;
      const {
        t: Mk
      } = (0, Sk.D)();
      return (0, mk.jsxs)("div", {
        className: "SchematicList",
        children: [ek && (0, mk.jsx)(bk.d, {}), !ek && 0 === ik.length && (0, mk.jsx)("div", {
          className: "NoSchematicsText",
          children: Mk("worldBuilder:noSavedSchematic")
        }), !ek && ik.map((kk => (0, mk.jsx)(rk.g, {
          source: {
            type: "schematic",
            schematic: kk
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            Dk(kk)
          },
          isSelected: fk.includes(kk.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: kk.isAutoExported && Pk,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, kk.schematicId)))]
      })
    }

    function Kk(kk) {
      let {
        ownedSchematics: ek,
        currentWorldSchematicId: ik,
        onClose: fk
      } = kk;
      const {
        t: bk
      } = (0, Sk.D)(), [rk, Kk] = (0, Dk.useState)(null);
      return (0, mk.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === rk && (0, mk.jsxs)(mk.Fragment, {
          children: [(0, mk.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: bk("worldBuilder:schematicList")
          }), (0, mk.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: bk("worldBuilder:clickSchematicForOptions")
          }), (0, mk.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, mk.jsx)(Mk, {
              loading: !1,
              schematics: ek,
              onSchematicPicked: kk => {
                Kk(kk)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== rk && (0, mk.jsx)(Pk.h, {
          schematic: rk,
          inSourceWorld: rk.schematicId === ik,
          onSchematicUpdate: kk => {
            Kk(kk)
          },
          onClose: () => {
            Kk(null), fk()
          }
        })]
      })
    }

    function xk(kk) {
      let {
        ownedSchematics: ek,
        currentWorldSchematicId: ik,
        onClose: Dk
      } = kk;
      fk.NotificationProvider.showCustomPopup({
        body: kk => (0, mk.jsx)(Kk, {
          ownedSchematics: ek,
          currentWorldSchematicId: ik,
          onClose: kk
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: Dk,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  41313: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      runClientGameMessage: () => Fk
    });
    var Dk = ik(3684),
      fk = ik(3693),
      Sk = ik(1302),
      bk = ik(35908),
      rk = ik(4888),
      Pk = ik(1021),
      mk = ik.n(Pk),
      Mk = ik(60),
      Kk = ik(1333),
      xk = ik(1410),
      nk = ik(314),
      Uk = ik(1172),
      Hk = ik(1033),
      wk = ik(1066);

    function lk(kk) {
      let {
        onFilePicked: ek
      } = kk;
      const {
        t: ik
      } = (0, Uk.D)(), [Dk, fk] = (0, Mk.useState)(null), {
        getRootProps: Sk,
        getInputProps: bk,
        isDragActive: Pk
      } = (0, rk.e)({
        onDrop: kk => {
          kk.length > 0 && fk(kk[0])
        },
        useFsAccessApi: !1
      }), Kk = Dk && Dk.size > 1024 * nk.Wc;
      return (0, wk.jsxs)("div", {
        className: "SchematicUploadContainer",
        children: [(0, wk.jsxs)("div", {
          ...Sk({
            className: mk()("SchematicUpload", {
              ActiveDrag: Pk
            })
          }),
          children: [(0, wk.jsx)("input", {
            ...bk({
              accept: ".bloxdschem"
            })
          }), !Pk && Dk ? (0, wk.jsxs)(wk.Fragment, {
            children: [(0, wk.jsx)("div", {
              className: mk()("SchematicUploadIcon", "Active", {
                TooBig: Kk
              }),
              children: (0, wk.jsx)(Hk.d, {
                name: "file-lines"
              })
            }), (0, wk.jsx)("div", {
              className: "SchematicUploadInstructions Active",
              children: Dk.name
            })]
          }) : (0, wk.jsxs)(wk.Fragment, {
            children: [(0, wk.jsx)("div", {
              className: "SchematicUploadIcon",
              children: (0, wk.jsx)(Hk.d, {
                name: "up-from-bracket"
              })
            }), (0, wk.jsx)("div", {
              className: "SchematicUploadInstructions",
              children: ik("worldBuilder:dragAFileHere")
            })]
          })]
        }), (0, wk.jsx)(xk.r, {
          disabled: Kk || !Dk,
          className: "SchematicUploadButton",
          onClick: () => {
            !Kk && Dk && ek(Dk)
          },
          children: Kk ? ik("worldBuilder:fileTooBig", {
            maxSizeKb: nk.Wc
          }) : ik("worldBuilder:upload")
        })]
      })
    }

    function pk(kk) {
      let {
        ownedSchematics: ek,
        onClose: ik,
        onChosenPreset: Dk,
        onChosenFile: fk
      } = kk;
      const {
        t: Sk
      } = (0, Uk.D)();
      return (0, wk.jsxs)(wk.Fragment, {
        children: [(0, wk.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: Sk("worldBuilder:loadSchematic")
        }), (0, wk.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: Sk("worldBuilder:chooseOneOfYourSchematics")
        }), (0, wk.jsx)("div", {
          className: "SchematicPopupSchematicListContainer",
          children: (0, wk.jsx)(bk.b, {
            schematics: ek,
            onSchematicPicked: kk => {
              Dk(kk.schematicId), ik()
            },
            loading: !1,
            disableAutoExport: !0
          })
        }), (0, wk.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: Sk("worldBuilder:uploadNewSchematic")
        }), (0, wk.jsx)(lk, {
          onFilePicked: async kk => {
            try {
              await fk(kk)
            } catch (ek) {
              console.warn("Schematic upload failed", ek)
            } finally {
              ik()
            }
          }
        })]
      })
    }
    var yk = ik(4860),
      Yk = ik(1648),
      Lk = ik(4319),
      Ck = ik(1207);

    function Ak(kk) {
      var ek;
      let {
        ownedSchematics: ik,
        onClose: Dk,
        onChosenEdit: fk,
        onChosenNew: Sk,
        onChosenDownload: rk
      } = kk;
      const {
        t: Pk
      } = (0, Uk.D)(), [mk, Kk] = (0, Mk.useState)("choose"), [nk, Hk] = (0, Mk.useState)(null), [lk, pk] = (0, Mk.useState)(null);
      return (0, wk.jsxs)(wk.Fragment, {
        children: [(0, wk.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: Pk("worldBuilder:saveSchematic")
        }), "choose" === mk && (0, wk.jsxs)(wk.Fragment, {
          children: [(0, wk.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: Pk("worldBuilder:overwriteOneOfYourSchematics")
          }), (0, wk.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, wk.jsx)(bk.b, {
              schematics: ik,
              onSchematicPicked: kk => {
                Hk(kk.schematicId), pk("existing"), Kk("save")
              },
              loading: !1,
              disableAutoExport: !1
            })
          }), (0, wk.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: Pk("general:otherOptions")
          }), (0, wk.jsxs)("div", {
            className: "OtherOptions",
            children: [(0, wk.jsx)(xk.r, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                pk("new"), Kk("save")
              },
              children: Pk("worldBuilder:saveAsNewSchematic")
            }), (0, wk.jsx)(xk.f, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                pk("file"), Kk("save")
              },
              children: Pk("worldBuilder:downloadSchematic")
            })]
          })]
        }), "choose" !== mk && (0, wk.jsx)(jk, {
          type: lk,
          ownedSchematics: ik,
          onSubmit: (kk, ek, ik) => {
            "file" === lk ? rk(ek, kk) : "new" === lk ? Sk(ek, ik, kk) : fk(nk, ek, ik, kk), Dk()
          },
          onBack: () => {
            Kk("choose")
          },
          prepopName: "existing" === lk ? null === (ek = ik.find((kk => kk.schematicId === nk))) || void 0 === ek ? void 0 : ek.name : null
        })]
      })
    }

    function jk(kk) {
      let {
        type: ek,
        prepopName: ik,
        ownedSchematics: Dk,
        onSubmit: fk,
        onBack: Sk
      } = kk;
      const {
        t: bk
      } = (0, Uk.D)(), [rk, Pk] = (0, Mk.useState)(""), [Kk, nk] = (0, Mk.useState)(""), [Hk, lk] = (0, Mk.useState)(null), [pk, yk] = (0, Mk.useState)(!0), Ak = kk => {
        var ik;
        kk = null !== (ik = kk) && void 0 !== ik ? ik : rk;
        const fk = "new" === ek ? (0, Ck.w)(kk) : null,
          Sk = [...(0, Ck.Bb)(kk), ...fk ? [fk] : []];
        return Sk.length > 0 ? (lk(Sk.join(", ")), !1) : "new" === ek && Dk.find((ek => ek.name === kk)) ? (lk(bk("worldBuilder:schematicAlreadyExists")), !1) : (lk(null), !0)
      };
      return (0, wk.jsxs)("div", {
        className: "SaveSchematicWindow",
        children: [(0, wk.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: bk("general:name")
        }), (0, wk.jsx)(Yk.b, {
          className: mk()("SaveSchematicName", {
            Error: Hk
          }),
          forcedText: ik,
          onValueChange: kk => {
            Pk(kk), Ak(kk)
          },
          placeholderText: bk("worldBuilder:schematicNamePlaceholder"),
          maxLength: Ck.qb
        }), (0, wk.jsx)("h2", {
          className: mk()("SaveSchematicError", {
            Hidden: !Hk
          }),
          children: Hk
        }), (0, wk.jsx)("h2", {
          className: mk()("SchematicPopupSubtitle", {
            Hidden: "file" === ek
          }),
          children: bk("general:description")
        }), (0, wk.jsx)(Yk.b, {
          className: mk()("SaveSchematicDescription", {
            Hidden: "file" === ek
          }),
          onValueChange: nk,
          placeholderText: bk("worldBuilder:schematicDescriptionPlaceholder"),
          maxLength: Ck.nb,
          useTextarea: !0
        }), (0, wk.jsxs)("div", {
          className: mk()("SaveSchematicCheckboxContainer", {
            WarningBorder: "existing" === ek
          }),
          children: [(0, wk.jsx)(Lk.d, {
            checked: pk,
            onChange: kk => {
              yk(kk.target.checked)
            },
            disabled: !1,
            className: "SaveSchematicCheckbox"
          }), (0, wk.jsx)("h1", {
            className: "SchematicPopupSubtitle",
            children: bk("existing" === ek ? "worldBuilder:overwriteLobbyCode" : "worldBuilder:includeLobbyCode")
          })]
        }), "existing" === ek && (0, wk.jsx)("div", {
          className: "SaveSchematicLobbyCodeWarning",
          children: bk("worldBuilder:lobbyCodeWarning")
        }), (0, wk.jsxs)("div", {
          className: "SaveSchematicButtons",
          children: [(0, wk.jsx)(xk.r, {
            className: "SaveSchematicButton",
            onClick: () => {
              Ak() && fk(pk, rk, Kk)
            },
            children: bk("file" === ek ? "general:download" : "general:save")
          }), (0, wk.jsx)(xk.R, {
            className: "SaveSchematicButton",
            onClick: Sk,
            children: bk("general:cancel")
          })]
        })]
      })
    }
    var sk = ik(1177),
      dk = ik(1688),
      Vk = ik(1104);

    function Fk(kk, ek) {
      if ("devDownloadJson" !== kk) ! function(kk, ek) {
        const ik = sk.clientSideServerUrls.getHttpUrlFromWebSocketUrl((0, Sk.c)().websocketUrl);
        let rk = !1;
        const Pk = async (kk, ek) => {
          if (rk) return;
          rk = !0;
          const {
            gameNameWithVariation: Dk,
            lobbyName: bk
          } = (0, Sk.c)(), Pk = {
            gameNameWithVariation: Dk,
            lobbyName: bk
          };
          return await (0, Vk.postJsonWithMetricsCookiesAndJsonResponse)(`${ik}/schematic/${kk}`, fk.C[kk].toBuffer({
            ...Pk,
            ...ek
          }), {
            retries: 1
          })
        };
        if ("Plugin|WorldBuilder|SaveSchematic" === kk) ! function(kk) {
          let {
            ownedSchematics: ek,
            onChosenDownload: ik,
            onChosenEdit: Dk,
            onChosenNew: fk,
            onClose: Sk
          } = kk;
          Kk.NotificationProvider.showCustomPopup({
            body: kk => (0, wk.jsx)(Ak, {
              ownedSchematics: ek,
              onChosenDownload: ik,
              onChosenEdit: Dk,
              onChosenNew: fk,
              onClose: kk
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: Sk,
            unlockPointerKey: "schematicSaverPopup"
          })
        }({
          ownedSchematics: ek,
          onChosenDownload: (kk, ek) => {
            Pk("download-schematic", {
              name: kk,
              includeLobbyCode: ek
            }).then((ek => {
              let {
                buffer: {
                  data: ik
                }
              } = ek;
              const fk = Dk.hU.from(ik);
              (0, dk.downloadBlob)(new Blob([fk], {
                type: "application/octet-stream"
              }), `${kk}.bloxdschem`)
            }))
          },
          onClose: () => {
            Pk("cancel", {})
          },
          onChosenEdit: (kk, ek, ik, Dk) => {
            Pk("save-to-profile", {
              schematicId: kk,
              name: ek,
              description: ik,
              includeLobbyCode: Dk
            })
          },
          onChosenNew: (kk, ek, ik) => {
            Pk("save-to-profile", {
              schematicId: null,
              name: kk,
              description: ek,
              includeLobbyCode: ik
            })
          }
        });
        else if ("Plugin|WorldBuilder|LoadSchematic" === kk) ! function(kk) {
          let {
            ownedSchematics: ek,
            onChosenFile: ik,
            onChosenPreset: Dk,
            onClose: fk
          } = kk;
          Kk.NotificationProvider.showCustomPopup({
            body: kk => (0, wk.jsx)(pk, {
              ownedSchematics: ek,
              onChosenFile: ik,
              onChosenPreset: Dk,
              onClose: kk
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: fk,
            unlockPointerKey: "schematicLoaderPopup"
          })
        }({
          ownedSchematics: ek,
          onChosenFile: async kk => {
            const ek = Dk.hU.from(await kk.arrayBuffer()),
              {
                gameNameWithVariation: bk,
                lobbyName: rk
              } = (0, Sk.c)();
            await (0, Vk.postBinaryWithMetricsCookiesAndCustomResponse)(`${ik}/schematic/upload-schematic`, fk.C["upload-schematic"].toBuffer({
              gameNameWithVariation: bk,
              lobbyName: rk,
              schematic: ek
            }), {
              retries: 1
            }, Vk.HttpPayloadType.json)
          },
          onChosenPreset: kk => {
            Pk("load-from-profile", {
              schematicId: kk
            })
          },
          onClose: () => {
            Pk("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ListSchematics" === kk)(0, bk.f)({
          ownedSchematics: Array.isArray(ek) ? ek : ek.schematics,
          currentWorldSchematicId: Array.isArray(ek) ? null : ek.currentWorldSchematicId,
          onClose: () => {
            Pk("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ExportWorld" === kk) {
          var mk;
          const kk = null !== (mk = ek.schematic) && void 0 !== mk ? mk : ek;
          (0, yk.l)({
            schematic: kk,
            inSourceWorld: kk.schematicId === ek.currentWorldSchematicId,
            onClose: () => {
              Pk("cancel", {})
            }
          })
        } else console.error(`Unknown plugin message type ${kk}`)
      }(kk, ek);
      else {
        const kk = JSON.stringify(ek.data, null, 2);
        (0, dk.downloadBlob)(new Blob([kk], {
          type: "application/json"
        }), ek.filename)
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);