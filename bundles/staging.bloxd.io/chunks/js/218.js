export const id = 218;
export const ids = [218];
export const modules = {
  36740: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Cu,
      e: () => cu
    });
    var su = ju(58),
      Uu = ju(1405),
      Zu = ju(1244),
      Xu = ju(1393),
      lu = ju(3667),
      qu = ju(5099),
      fu = ju(1154);

    function Cu(uu) {
      let {
        loading: Eu,
        schematics: ju,
        onSchematicPicked: su,
        selectedSchematicIdList: Uu = [],
        disableAutoExport: qu
      } = uu;
      const {
        t: Cu
      } = (0, Zu.A)();
      return (0, fu.jsxs)("div", {
        className: "SchematicList",
        children: [Eu && (0, fu.jsx)(Xu.b, {}), !Eu && 0 === ju.length && (0, fu.jsx)("div", {
          className: "NoSchematicsText",
          children: Cu("worldBuilder:noSavedSchematic")
        }), !Eu && ju.map((uu => (0, fu.jsx)(lu.e, {
          source: {
            type: "schematic",
            schematic: uu
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            su(uu)
          },
          isSelected: Uu.includes(uu.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: uu.isAutoExported && qu,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, uu.schematicId)))]
      })
    }

    function bu(uu) {
      let {
        ownedSchematics: Eu,
        currentWorldSchematicId: ju,
        onClose: Uu
      } = uu;
      const {
        t: Xu
      } = (0, Zu.A)(), [lu, bu] = (0, su.useState)(null);
      return (0, fu.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === lu && (0, fu.jsxs)(fu.Fragment, {
          children: [(0, fu.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: Xu("worldBuilder:schematicList")
          }), (0, fu.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: Xu("worldBuilder:clickSchematicForOptions")
          }), (0, fu.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, fu.jsx)(Cu, {
              loading: !1,
              schematics: Eu,
              onSchematicPicked: uu => {
                bu(uu)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== lu && (0, fu.jsx)(qu.h, {
          schematic: lu,
          inSourceWorld: lu.schematicId === ju,
          onSchematicUpdate: uu => {
            bu(uu)
          },
          onClose: () => {
            bu(null), Uu()
          }
        })]
      })
    }

    function cu(uu) {
      let {
        ownedSchematics: Eu,
        currentWorldSchematicId: ju,
        onClose: su
      } = uu;
      Uu.NotificationProvider.showCustomPopup({
        body: uu => (0, fu.jsx)(bu, {
          ownedSchematics: Eu,
          currentWorldSchematicId: ju,
          onClose: uu
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: su,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  42001: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      runClientGameMessage: () => ou
    });
    var su = ju(3932),
      Uu = ju(3946),
      Zu = ju(1369),
      Xu = ju(36740),
      lu = ju(5120),
      qu = ju(1105),
      fu = ju.n(qu),
      Cu = ju(58),
      bu = ju(1405),
      cu = ju(1506),
      Nu = ju(349),
      Ou = ju(1244),
      Yu = ju(1116),
      hu = ju(1154);

    function Du(uu) {
      let {
        onFilePicked: Eu
      } = uu;
      const {
        t: ju
      } = (0, Ou.A)(), [su, Uu] = (0, Cu.useState)(null), {
        getRootProps: Zu,
        getInputProps: Xu,
        isDragActive: qu
      } = (0, lu.c)({
        onDrop: uu => {
          uu.length > 0 && Uu(uu[0])
        },
        useFsAccessApi: !1
      }), bu = su && su.size > 1024 * Nu.id;
      return (0, hu.jsxs)("div", {
        className: "SchematicUploadContainer",
        children: [(0, hu.jsxs)("div", {
          ...Zu({
            className: fu()("SchematicUpload", {
              ActiveDrag: qu
            })
          }),
          children: [(0, hu.jsx)("input", {
            ...Xu({
              accept: ".bloxdschem"
            })
          }), !qu && su ? (0, hu.jsxs)(hu.Fragment, {
            children: [(0, hu.jsx)("div", {
              className: fu()("SchematicUploadIcon", "Active", {
                TooBig: bu
              }),
              children: (0, hu.jsx)(Yu.e, {
                name: "file-lines"
              })
            }), (0, hu.jsx)("div", {
              className: "SchematicUploadInstructions Active",
              children: su.name
            })]
          }) : (0, hu.jsxs)(hu.Fragment, {
            children: [(0, hu.jsx)("div", {
              className: "SchematicUploadIcon",
              children: (0, hu.jsx)(Yu.e, {
                name: "up-from-bracket"
              })
            }), (0, hu.jsx)("div", {
              className: "SchematicUploadInstructions",
              children: ju("worldBuilder:dragAFileHere")
            })]
          })]
        }), (0, hu.jsx)(cu.p, {
          disabled: bu || !su,
          className: "SchematicUploadButton",
          onClick: () => {
            !bu && su && Eu(su)
          },
          children: bu ? ju("worldBuilder:fileTooBig", {
            maxSizeKb: Nu.id
          }) : ju("worldBuilder:upload")
        })]
      })
    }

    function gu(uu) {
      let {
        ownedSchematics: Eu,
        onClose: ju,
        onChosenPreset: su,
        onChosenFile: Uu
      } = uu;
      const {
        t: Zu
      } = (0, Ou.A)();
      return (0, hu.jsxs)(hu.Fragment, {
        children: [(0, hu.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: Zu("worldBuilder:loadSchematic")
        }), (0, hu.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: Zu("worldBuilder:chooseOneOfYourSchematics")
        }), (0, hu.jsx)("div", {
          className: "SchematicPopupSchematicListContainer",
          children: (0, hu.jsx)(Xu.c, {
            schematics: Eu,
            onSchematicPicked: uu => {
              su(uu.schematicId), ju()
            },
            loading: !1,
            disableAutoExport: !0
          })
        }), (0, hu.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: Zu("worldBuilder:uploadNewSchematic")
        }), (0, hu.jsx)(Du, {
          onFilePicked: async uu => {
            try {
              await Uu(uu)
            } catch (Eu) {
              console.warn("Schematic upload failed", Eu)
            } finally {
              ju()
            }
          }
        })]
      })
    }
    var Mu = ju(5099),
      eu = ju(1723),
      Gu = ju(4528),
      pu = ju(1278);

    function wu(uu) {
      var Eu;
      let {
        ownedSchematics: ju,
        onClose: su,
        onChosenEdit: Uu,
        onChosenNew: Zu,
        onChosenDownload: lu
      } = uu;
      const {
        t: qu
      } = (0, Ou.A)(), [fu, bu] = (0, Cu.useState)("choose"), [Nu, Yu] = (0, Cu.useState)(null), [Du, gu] = (0, Cu.useState)(null);
      return (0, hu.jsxs)(hu.Fragment, {
        children: [(0, hu.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: qu("worldBuilder:saveSchematic")
        }), "choose" === fu && (0, hu.jsxs)(hu.Fragment, {
          children: [(0, hu.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: qu("worldBuilder:overwriteOneOfYourSchematics")
          }), (0, hu.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, hu.jsx)(Xu.c, {
              schematics: ju,
              onSchematicPicked: uu => {
                Yu(uu.schematicId), gu("existing"), bu("save")
              },
              loading: !1,
              disableAutoExport: !1
            })
          }), (0, hu.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: qu("general:otherOptions")
          }), (0, hu.jsxs)("div", {
            className: "OtherOptions",
            children: [(0, hu.jsx)(cu.p, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                gu("new"), bu("save")
              },
              children: qu("worldBuilder:saveAsNewSchematic")
            }), (0, hu.jsx)(cu.f, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                gu("file"), bu("save")
              },
              children: qu("worldBuilder:downloadSchematic")
            })]
          })]
        }), "choose" !== fu && (0, hu.jsx)(Ju, {
          type: Du,
          ownedSchematics: ju,
          onSubmit: (uu, Eu, ju) => {
            "file" === Du ? lu(Eu, uu) : "new" === Du ? Zu(Eu, ju, uu) : Uu(Nu, Eu, ju, uu), su()
          },
          onBack: () => {
            bu("choose")
          },
          prepopName: "existing" === Du ? null === (Eu = ju.find((uu => uu.schematicId === Nu))) || void 0 === Eu ? void 0 : Eu.name : null
        })]
      })
    }

    function Ju(uu) {
      let {
        type: Eu,
        prepopName: ju,
        ownedSchematics: su,
        onSubmit: Uu,
        onBack: Zu
      } = uu;
      const {
        t: Xu
      } = (0, Ou.A)(), [lu, qu] = (0, Cu.useState)(""), [bu, Nu] = (0, Cu.useState)(""), [Yu, Du] = (0, Cu.useState)(null), [gu, Mu] = (0, Cu.useState)(!0), wu = uu => {
        var ju;
        uu = null !== (ju = uu) && void 0 !== ju ? ju : lu;
        const Uu = "new" === Eu ? (0, pu.y)(uu) : null,
          Zu = [...(0, pu.Cb)(uu), ...Uu ? [Uu] : []];
        return Zu.length > 0 ? (Du(Zu.join(", ")), !1) : "new" === Eu && su.find((Eu => Eu.name === uu)) ? (Du(Xu("worldBuilder:schematicAlreadyExists")), !1) : (Du(null), !0)
      };
      return (0, hu.jsxs)("div", {
        className: "SaveSchematicWindow",
        children: [(0, hu.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: Xu("general:name")
        }), (0, hu.jsx)(eu.d, {
          className: fu()("SaveSchematicName", {
            Error: Yu
          }),
          forcedText: ju,
          onValueChange: uu => {
            qu(uu), wu(uu)
          },
          placeholderText: Xu("worldBuilder:schematicNamePlaceholder"),
          maxLength: pu.sb
        }), (0, hu.jsx)("h2", {
          className: fu()("SaveSchematicError", {
            Hidden: !Yu
          }),
          children: Yu
        }), (0, hu.jsx)("h2", {
          className: fu()("SchematicPopupSubtitle", {
            Hidden: "file" === Eu
          }),
          children: Xu("general:description")
        }), (0, hu.jsx)(eu.d, {
          className: fu()("SaveSchematicDescription", {
            Hidden: "file" === Eu
          }),
          onValueChange: Nu,
          placeholderText: Xu("worldBuilder:schematicDescriptionPlaceholder"),
          maxLength: pu.pb,
          useTextarea: !0
        }), (0, hu.jsxs)("div", {
          className: fu()("SaveSchematicCheckboxContainer", {
            WarningBorder: "existing" === Eu
          }),
          children: [(0, hu.jsx)(Gu.d, {
            checked: gu,
            onChange: uu => {
              Mu(uu.target.checked)
            },
            disabled: !1,
            className: "SaveSchematicCheckbox"
          }), (0, hu.jsx)("h1", {
            className: "SchematicPopupSubtitle",
            children: Xu("existing" === Eu ? "worldBuilder:overwriteLobbyCode" : "worldBuilder:includeLobbyCode")
          })]
        }), "existing" === Eu && (0, hu.jsx)("div", {
          className: "SaveSchematicLobbyCodeWarning",
          children: Xu("worldBuilder:lobbyCodeWarning")
        }), (0, hu.jsxs)("div", {
          className: "SaveSchematicButtons",
          children: [(0, hu.jsx)(cu.p, {
            className: "SaveSchematicButton",
            onClick: () => {
              wu() && Uu(gu, lu, bu)
            },
            children: Xu("file" === Eu ? "general:download" : "general:save")
          }), (0, hu.jsx)(cu.R, {
            className: "SaveSchematicButton",
            onClick: Zu,
            children: Xu("general:cancel")
          })]
        })]
      })
    }
    var du = ju(1255),
      au = ju(1779),
      Pu = ju(1183);

    function ou(uu, Eu) {
      if ("devDownloadJson" !== uu) ! function(uu, Eu) {
        const ju = du.clientSideServerUrls.getHttpUrlFromWebSocketUrl((0, Zu.b)().websocketUrl);
        let lu = !1;
        const qu = async (uu, Eu) => {
          if (lu) return;
          lu = !0;
          const {
            gameNameWithVariation: su,
            lobbyName: Xu
          } = (0, Zu.b)(), qu = {
            gameNameWithVariation: su,
            lobbyName: Xu
          };
          return await (0, Pu.postJsonWithMetricsCookiesAndJsonResponse)(`${ju}/schematic/${uu}`, Uu.C[uu].toBuffer({
            ...qu,
            ...Eu
          }), {
            retries: 1
          })
        };
        if ("Plugin|WorldBuilder|SaveSchematic" === uu) ! function(uu) {
          let {
            ownedSchematics: Eu,
            onChosenDownload: ju,
            onChosenEdit: su,
            onChosenNew: Uu,
            onClose: Zu
          } = uu;
          bu.NotificationProvider.showCustomPopup({
            body: uu => (0, hu.jsx)(wu, {
              ownedSchematics: Eu,
              onChosenDownload: ju,
              onChosenEdit: su,
              onChosenNew: Uu,
              onClose: uu
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: Zu,
            unlockPointerKey: "schematicSaverPopup"
          })
        }({
          ownedSchematics: Eu,
          onChosenDownload: (uu, Eu) => {
            qu("download-schematic", {
              name: uu,
              includeLobbyCode: Eu
            }).then((Eu => {
              let {
                buffer: {
                  data: ju
                }
              } = Eu;
              const Uu = su.qO.from(ju);
              (0, au.downloadBlob)(new Blob([Uu], {
                type: "application/octet-stream"
              }), `${uu}.bloxdschem`)
            }))
          },
          onClose: () => {
            qu("cancel", {})
          },
          onChosenEdit: (uu, Eu, ju, su) => {
            qu("save-to-profile", {
              schematicId: uu,
              name: Eu,
              description: ju,
              includeLobbyCode: su
            })
          },
          onChosenNew: (uu, Eu, ju) => {
            qu("save-to-profile", {
              schematicId: null,
              name: uu,
              description: Eu,
              includeLobbyCode: ju
            })
          }
        });
        else if ("Plugin|WorldBuilder|LoadSchematic" === uu) ! function(uu) {
          let {
            ownedSchematics: Eu,
            onChosenFile: ju,
            onChosenPreset: su,
            onClose: Uu
          } = uu;
          bu.NotificationProvider.showCustomPopup({
            body: uu => (0, hu.jsx)(gu, {
              ownedSchematics: Eu,
              onChosenFile: ju,
              onChosenPreset: su,
              onClose: uu
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: Uu,
            unlockPointerKey: "schematicLoaderPopup"
          })
        }({
          ownedSchematics: Eu,
          onChosenFile: async uu => {
            const Eu = su.qO.from(await uu.arrayBuffer()),
              {
                gameNameWithVariation: Xu,
                lobbyName: lu
              } = (0, Zu.b)();
            await (0, Pu.postBinaryWithMetricsCookiesAndCustomResponse)(`${ju}/schematic/upload-schematic`, Uu.C["upload-schematic"].toBuffer({
              gameNameWithVariation: Xu,
              lobbyName: lu,
              schematic: Eu
            }), {
              retries: 1
            }, Pu.HttpPayloadType.json)
          },
          onChosenPreset: uu => {
            qu("load-from-profile", {
              schematicId: uu
            })
          },
          onClose: () => {
            qu("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ListSchematics" === uu)(0, Xu.e)({
          ownedSchematics: Array.isArray(Eu) ? Eu : Eu.schematics,
          currentWorldSchematicId: Array.isArray(Eu) ? null : Eu.currentWorldSchematicId,
          onClose: () => {
            qu("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ExportWorld" === uu) {
          var fu;
          const uu = null !== (fu = Eu.schematic) && void 0 !== fu ? fu : Eu;
          (0, Mu.i)({
            schematic: uu,
            inSourceWorld: uu.schematicId === Eu.currentWorldSchematicId,
            onClose: () => {
              qu("cancel", {})
            }
          })
        } else console.error(`Unknown plugin message type ${uu}`)
      }(uu, Eu);
      else {
        const uu = JSON.stringify(Eu.data, null, 2);
        (0, au.downloadBlob)(new Blob([uu], {
          type: "application/json"
        }), Eu.filename)
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);