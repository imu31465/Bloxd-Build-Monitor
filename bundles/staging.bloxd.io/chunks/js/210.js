export const id = 210;
export const ids = [210];
export const modules = {
  36229: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Vu,
      f: () => Bu
    });
    var Eu = yu(64),
      Ku = yu(1311),
      Qu = yu(1170),
      mu = yu(1300),
      Ju = yu(3296),
      Nu = yu(4709),
      Xu = yu(1079);

    function Vu(uu) {
      let {
        loading: Ru,
        schematics: yu,
        onSchematicPicked: Eu,
        selectedSchematicIdList: Ku = [],
        disableAutoExport: Nu
      } = uu;
      const {
        t: Vu
      } = (0, Qu.E)();
      return (0, Xu.jsxs)("div", {
        className: "SchematicList",
        children: [Ru && (0, Xu.jsx)(mu.b, {}), !Ru && 0 === yu.length && (0, Xu.jsx)("div", {
          className: "NoSchematicsText",
          children: Vu("worldBuilder:noSavedSchematic")
        }), !Ru && yu.map((uu => (0, Xu.jsx)(Ju.e, {
          source: {
            type: "schematic",
            schematic: uu
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            Eu(uu)
          },
          isSelected: Ku.includes(uu.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: uu.isAutoExported && Nu,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, uu.schematicId)))]
      })
    }

    function ru(uu) {
      let {
        ownedSchematics: Ru,
        currentWorldSchematicId: yu,
        onClose: Ku
      } = uu;
      const {
        t: mu
      } = (0, Qu.E)(), [Ju, ru] = (0, Eu.useState)(null);
      return (0, Xu.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === Ju && (0, Xu.jsxs)(Xu.Fragment, {
          children: [(0, Xu.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: mu("worldBuilder:schematicList")
          }), (0, Xu.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: mu("worldBuilder:clickSchematicForOptions")
          }), (0, Xu.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, Xu.jsx)(Vu, {
              loading: !1,
              schematics: Ru,
              onSchematicPicked: uu => {
                ru(uu)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== Ju && (0, Xu.jsx)(Nu.g, {
          schematic: Ju,
          inSourceWorld: Ju.schematicId === yu,
          onSchematicUpdate: uu => {
            ru(uu)
          },
          onClose: () => {
            ru(null), Ku()
          }
        })]
      })
    }

    function Bu(uu) {
      let {
        ownedSchematics: Ru,
        currentWorldSchematicId: yu,
        onClose: Eu
      } = uu;
      Ku.NotificationProvider.showCustomPopup({
        body: uu => (0, Xu.jsx)(ru, {
          ownedSchematics: Ru,
          currentWorldSchematicId: yu,
          onClose: uu
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: Eu,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  41326: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      runClientGameMessage: () => Iu
    });
    var Eu = yu(3548),
      Ku = yu(3574),
      Qu = yu(1280),
      mu = yu(36229),
      Ju = yu(4740),
      Nu = yu(1035),
      Xu = yu.n(Nu),
      Vu = yu(64),
      ru = yu(1311),
      Bu = yu(1408),
      xu = yu(343),
      Su = yu(1170),
      pu = yu(1043),
      Tu = yu(1079);

    function Wu(uu) {
      let {
        onFilePicked: Ru
      } = uu;
      const {
        t: yu
      } = (0, Su.E)(), [Eu, Ku] = (0, Vu.useState)(null), {
        getRootProps: Qu,
        getInputProps: mu,
        isDragActive: Nu
      } = (0, Ju.d)({
        onDrop: uu => {
          uu.length > 0 && Ku(uu[0])
        },
        useFsAccessApi: !1
      }), ru = Eu && Eu.size > 1024 * xu.md;
      return (0, Tu.jsxs)("div", {
        className: "SchematicUploadContainer",
        children: [(0, Tu.jsxs)("div", {
          ...Qu({
            className: Xu()("SchematicUpload", {
              ActiveDrag: Nu
            })
          }),
          children: [(0, Tu.jsx)("input", {
            ...mu({
              accept: ".bloxdschem"
            })
          }), !Nu && Eu ? (0, Tu.jsxs)(Tu.Fragment, {
            children: [(0, Tu.jsx)("div", {
              className: Xu()("SchematicUploadIcon", "Active", {
                TooBig: ru
              }),
              children: (0, Tu.jsx)(pu.c, {
                name: "file-lines"
              })
            }), (0, Tu.jsx)("div", {
              className: "SchematicUploadInstructions Active",
              children: Eu.name
            })]
          }) : (0, Tu.jsxs)(Tu.Fragment, {
            children: [(0, Tu.jsx)("div", {
              className: "SchematicUploadIcon",
              children: (0, Tu.jsx)(pu.c, {
                name: "up-from-bracket"
              })
            }), (0, Tu.jsx)("div", {
              className: "SchematicUploadInstructions",
              children: yu("worldBuilder:dragAFileHere")
            })]
          })]
        }), (0, Tu.jsx)(Bu.l, {
          disabled: ru || !Eu,
          className: "SchematicUploadButton",
          onClick: () => {
            !ru && Eu && Ru(Eu)
          },
          children: ru ? yu("worldBuilder:fileTooBig", {
            maxSizeKb: xu.md
          }) : yu("worldBuilder:upload")
        })]
      })
    }

    function ju(uu) {
      let {
        ownedSchematics: Ru,
        onClose: yu,
        onChosenPreset: Eu,
        onChosenFile: Ku
      } = uu;
      const {
        t: Qu
      } = (0, Su.E)();
      return (0, Tu.jsxs)(Tu.Fragment, {
        children: [(0, Tu.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: Qu("worldBuilder:loadSchematic")
        }), (0, Tu.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: Qu("worldBuilder:chooseOneOfYourSchematics")
        }), (0, Tu.jsx)("div", {
          className: "SchematicPopupSchematicListContainer",
          children: (0, Tu.jsx)(mu.d, {
            schematics: Ru,
            onSchematicPicked: uu => {
              Eu(uu.schematicId), yu()
            },
            loading: !1,
            disableAutoExport: !0
          })
        }), (0, Tu.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: Qu("worldBuilder:uploadNewSchematic")
        }), (0, Tu.jsx)(Wu, {
          onFilePicked: async uu => {
            try {
              await Ku(uu)
            } catch (Ru) {
              console.warn("Schematic upload failed", Ru)
            } finally {
              yu()
            }
          }
        })]
      })
    }
    var Hu = yu(4709),
      du = yu(1617),
      bu = yu(4139),
      Cu = yu(1199);

    function ku(uu) {
      var Ru;
      let {
        ownedSchematics: yu,
        onClose: Eu,
        onChosenEdit: Ku,
        onChosenNew: Qu,
        onChosenDownload: Ju
      } = uu;
      const {
        t: Nu
      } = (0, Su.E)(), [Xu, ru] = (0, Vu.useState)("choose"), [xu, pu] = (0, Vu.useState)(null), [Wu, ju] = (0, Vu.useState)(null);
      return (0, Tu.jsxs)(Tu.Fragment, {
        children: [(0, Tu.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: Nu("worldBuilder:saveSchematic")
        }), "choose" === Xu && (0, Tu.jsxs)(Tu.Fragment, {
          children: [(0, Tu.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: Nu("worldBuilder:overwriteOneOfYourSchematics")
          }), (0, Tu.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, Tu.jsx)(mu.d, {
              schematics: yu,
              onSchematicPicked: uu => {
                pu(uu.schematicId), ju("existing"), ru("save")
              },
              loading: !1,
              disableAutoExport: !1
            })
          }), (0, Tu.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: Nu("general:otherOptions")
          }), (0, Tu.jsxs)("div", {
            className: "OtherOptions",
            children: [(0, Tu.jsx)(Bu.l, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                ju("new"), ru("save")
              },
              children: Nu("worldBuilder:saveAsNewSchematic")
            }), (0, Tu.jsx)(Bu.e, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                ju("file"), ru("save")
              },
              children: Nu("worldBuilder:downloadSchematic")
            })]
          })]
        }), "choose" !== Xu && (0, Tu.jsx)(eu, {
          type: Wu,
          ownedSchematics: yu,
          onSubmit: (uu, Ru, yu) => {
            "file" === Wu ? Ju(Ru, uu) : "new" === Wu ? Qu(Ru, yu, uu) : Ku(xu, Ru, yu, uu), Eu()
          },
          onBack: () => {
            ru("choose")
          },
          prepopName: "existing" === Wu ? null === (Ru = yu.find((uu => uu.schematicId === xu))) || void 0 === Ru ? void 0 : Ru.name : null
        })]
      })
    }

    function eu(uu) {
      let {
        type: Ru,
        prepopName: yu,
        ownedSchematics: Eu,
        onSubmit: Ku,
        onBack: Qu
      } = uu;
      const {
        t: mu
      } = (0, Su.E)(), [Ju, Nu] = (0, Vu.useState)(""), [ru, xu] = (0, Vu.useState)(""), [pu, Wu] = (0, Vu.useState)(null), [ju, Hu] = (0, Vu.useState)(!0), ku = uu => {
        var yu;
        uu = null !== (yu = uu) && void 0 !== yu ? yu : Ju;
        const Ku = "new" === Ru ? (0, Cu.z)(uu) : null,
          Qu = [...(0, Cu.zb)(uu), ...Ku ? [Ku] : []];
        return Qu.length > 0 ? (Wu(Qu.join(", ")), !1) : "new" === Ru && Eu.find((Ru => Ru.name === uu)) ? (Wu(mu("worldBuilder:schematicAlreadyExists")), !1) : (Wu(null), !0)
      };
      return (0, Tu.jsxs)("div", {
        className: "SaveSchematicWindow",
        children: [(0, Tu.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: mu("general:name")
        }), (0, Tu.jsx)(du.b, {
          className: Xu()("SaveSchematicName", {
            Error: pu
          }),
          forcedText: yu,
          onValueChange: uu => {
            Nu(uu), ku(uu)
          },
          placeholderText: mu("worldBuilder:schematicNamePlaceholder"),
          maxLength: Cu.pb
        }), (0, Tu.jsx)("h2", {
          className: Xu()("SaveSchematicError", {
            Hidden: !pu
          }),
          children: pu
        }), (0, Tu.jsx)("h2", {
          className: Xu()("SchematicPopupSubtitle", {
            Hidden: "file" === Ru
          }),
          children: mu("general:description")
        }), (0, Tu.jsx)(du.b, {
          className: Xu()("SaveSchematicDescription", {
            Hidden: "file" === Ru
          }),
          onValueChange: xu,
          placeholderText: mu("worldBuilder:schematicDescriptionPlaceholder"),
          maxLength: Cu.nb,
          useTextarea: !0
        }), (0, Tu.jsxs)("div", {
          className: Xu()("SaveSchematicCheckboxContainer", {
            WarningBorder: "existing" === Ru
          }),
          children: [(0, Tu.jsx)(bu.b, {
            checked: ju,
            onChange: uu => {
              Hu(uu.target.checked)
            },
            disabled: !1,
            className: "SaveSchematicCheckbox"
          }), (0, Tu.jsx)("h1", {
            className: "SchematicPopupSubtitle",
            children: mu("existing" === Ru ? "worldBuilder:overwriteLobbyCode" : "worldBuilder:includeLobbyCode")
          })]
        }), "existing" === Ru && (0, Tu.jsx)("div", {
          className: "SaveSchematicLobbyCodeWarning",
          children: mu("worldBuilder:lobbyCodeWarning")
        }), (0, Tu.jsxs)("div", {
          className: "SaveSchematicButtons",
          children: [(0, Tu.jsx)(Bu.l, {
            className: "SaveSchematicButton",
            onClick: () => {
              ku() && Ku(ju, Ju, ru)
            },
            children: mu("file" === Ru ? "general:download" : "general:save")
          }), (0, Tu.jsx)(Bu.F, {
            className: "SaveSchematicButton",
            onClick: Qu,
            children: mu("general:cancel")
          })]
        })]
      })
    }
    var Au = yu(1176),
      Du = yu(1661),
      Mu = yu(1110);

    function Iu(uu, Ru) {
      if ("devDownloadJson" !== uu) ! function(uu, Ru) {
        const yu = Au.clientSideServerUrls.getHttpUrlFromWebSocketUrl((0, Qu.c)().websocketUrl);
        let Ju = !1;
        const Nu = async (uu, Ru) => {
          if (Ju) return;
          Ju = !0;
          const {
            gameNameWithVariation: Eu,
            lobbyName: mu
          } = (0, Qu.c)(), Nu = {
            gameNameWithVariation: Eu,
            lobbyName: mu
          };
          return await (0, Mu.postJsonWithMetricsCookiesAndJsonResponse)(`${yu}/schematic/${uu}`, Ku.A[uu].toBuffer({
            ...Nu,
            ...Ru
          }), {
            retries: 1
          })
        };
        if ("Plugin|WorldBuilder|SaveSchematic" === uu) ! function(uu) {
          let {
            ownedSchematics: Ru,
            onChosenDownload: yu,
            onChosenEdit: Eu,
            onChosenNew: Ku,
            onClose: Qu
          } = uu;
          ru.NotificationProvider.showCustomPopup({
            body: uu => (0, Tu.jsx)(ku, {
              ownedSchematics: Ru,
              onChosenDownload: yu,
              onChosenEdit: Eu,
              onChosenNew: Ku,
              onClose: uu
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: Qu,
            unlockPointerKey: "schematicSaverPopup"
          })
        }({
          ownedSchematics: Ru,
          onChosenDownload: (uu, Ru) => {
            Nu("download-schematic", {
              name: uu,
              includeLobbyCode: Ru
            }).then((Ru => {
              let {
                buffer: {
                  data: yu
                }
              } = Ru;
              const Ku = Eu.XS.from(yu);
              (0, Du.downloadBlob)(new Blob([Ku], {
                type: "application/octet-stream"
              }), `${uu}.bloxdschem`)
            }))
          },
          onClose: () => {
            Nu("cancel", {})
          },
          onChosenEdit: (uu, Ru, yu, Eu) => {
            Nu("save-to-profile", {
              schematicId: uu,
              name: Ru,
              description: yu,
              includeLobbyCode: Eu
            })
          },
          onChosenNew: (uu, Ru, yu) => {
            Nu("save-to-profile", {
              schematicId: null,
              name: uu,
              description: Ru,
              includeLobbyCode: yu
            })
          }
        });
        else if ("Plugin|WorldBuilder|LoadSchematic" === uu) ! function(uu) {
          let {
            ownedSchematics: Ru,
            onChosenFile: yu,
            onChosenPreset: Eu,
            onClose: Ku
          } = uu;
          ru.NotificationProvider.showCustomPopup({
            body: uu => (0, Tu.jsx)(ju, {
              ownedSchematics: Ru,
              onChosenFile: yu,
              onChosenPreset: Eu,
              onClose: uu
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: Ku,
            unlockPointerKey: "schematicLoaderPopup"
          })
        }({
          ownedSchematics: Ru,
          onChosenFile: async uu => {
            const Ru = Eu.XS.from(await uu.arrayBuffer()),
              {
                gameNameWithVariation: mu,
                lobbyName: Ju
              } = (0, Qu.c)();
            await (0, Mu.postBinaryWithMetricsCookiesAndCustomResponse)(`${yu}/schematic/upload-schematic`, Ku.A["upload-schematic"].toBuffer({
              gameNameWithVariation: mu,
              lobbyName: Ju,
              schematic: Ru
            }), {
              retries: 1
            }, Mu.HttpPayloadType.json)
          },
          onChosenPreset: uu => {
            Nu("load-from-profile", {
              schematicId: uu
            })
          },
          onClose: () => {
            Nu("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ListSchematics" === uu)(0, mu.f)({
          ownedSchematics: Array.isArray(Ru) ? Ru : Ru.schematics,
          currentWorldSchematicId: Array.isArray(Ru) ? null : Ru.currentWorldSchematicId,
          onClose: () => {
            Nu("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ExportWorld" === uu) {
          var Xu;
          const uu = null !== (Xu = Ru.schematic) && void 0 !== Xu ? Xu : Ru;
          (0, Hu.h)({
            schematic: uu,
            inSourceWorld: uu.schematicId === Ru.currentWorldSchematicId,
            onClose: () => {
              Nu("cancel", {})
            }
          })
        } else console.error(`Unknown plugin message type ${uu}`)
      }(uu, Ru);
      else {
        const uu = JSON.stringify(Ru.data, null, 2);
        (0, Du.downloadBlob)(new Blob([uu], {
          type: "application/json"
        }), Ru.filename)
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);