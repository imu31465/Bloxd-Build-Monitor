export const id = 240;
export const ids = [240];
export const modules = {
  37138: (ee, ie, He) => {
    He.d(ie, {
      c: () => oe,
      f: () => ke
    });
    var ye = He(59),
      be = He(1340),
      Me = He(1127),
      Ke = He(1320),
      Ue = He(3865),
      Fe = He(5407),
      Je = He(1228);

    function oe(ee) {
      let {
        loading: ie,
        schematics: He,
        onSchematicPicked: ye,
        selectedSchematicIdList: be = [],
        disableAutoExport: Fe
      } = ee;
      const {
        t: oe
      } = (0, Me.v)();
      return (0, Je.jsxs)("div", {
        className: "SchematicList",
        children: [ie && (0, Je.jsx)(Ke.b, {}), !ie && 0 === He.length && (0, Je.jsx)("div", {
          className: "NoSchematicsText",
          children: oe("worldBuilder:noSavedSchematic")
        }), !ie && He.map((ee => (0, Je.jsx)(Ue.c, {
          source: {
            type: "schematic",
            schematic: ee
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            ye(ee)
          },
          isSelected: be.includes(ee.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: ee.isAutoExported && Fe,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, ee.schematicId)))]
      })
    }

    function Re(ee) {
      let {
        ownedSchematics: ie,
        currentWorldSchematicId: He,
        onClose: be
      } = ee;
      const {
        t: Ke
      } = (0, Me.v)(), [Ue, Re] = (0, ye.useState)(null);
      return (0, Je.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === Ue && (0, Je.jsxs)(Je.Fragment, {
          children: [(0, Je.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: Ke("worldBuilder:schematicList")
          }), (0, Je.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: Ke("worldBuilder:clickSchematicForOptions")
          }), (0, Je.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, Je.jsx)(oe, {
              loading: !1,
              schematics: ie,
              onSchematicPicked: ee => {
                Re(ee)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== Ue && (0, Je.jsx)(Fe.i, {
          schematic: Ue,
          inSourceWorld: Ue.schematicId === He,
          onSchematicUpdate: ee => {
            Re(ee)
          },
          onClose: () => {
            Re(null), be()
          }
        })]
      })
    }

    function ke(ee) {
      let {
        ownedSchematics: ie,
        currentWorldSchematicId: He,
        onClose: ye
      } = ee;
      be.NotificationProvider.showCustomPopup({
        body: ee => (0, Je.jsx)(Re, {
          ownedSchematics: ie,
          currentWorldSchematicId: He,
          onClose: ee
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: ye,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  44929: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      runClientGameMessage: () => De
    });
    var ye = He(4128),
      be = He(4142),
      Me = He(1305),
      Ke = He(37138),
      Ue = He(5454),
      Fe = He(1053),
      Je = He.n(Fe),
      oe = He(59),
      Re = He(1340),
      ke = He(1438),
      qe = He(347),
      fe = He(1127),
      Te = He(1323),
      pe = He(1228);

    function Xe(ee) {
      let {
        onFilePicked: ie
      } = ee;
      const {
        t: He
      } = (0, fe.v)(), [ye, be] = (0, oe.useState)(null), {
        getRootProps: Me,
        getInputProps: Ke,
        isDragActive: Fe
      } = (0, Ue.d)({
        onDrop: ee => {
          ee.length > 0 && be(ee[0])
        },
        useFsAccessApi: !1
      }), Re = ye && ye.size > 1024 * qe.hd;
      return (0, pe.jsxs)("div", {
        className: "SchematicUploadContainer",
        children: [(0, pe.jsxs)("div", {
          ...Me({
            className: Je()("SchematicUpload", {
              ActiveDrag: Fe
            })
          }),
          children: [(0, pe.jsx)("input", {
            ...Ke({
              accept: ".bloxdschem"
            })
          }), !Fe && ye ? (0, pe.jsxs)(pe.Fragment, {
            children: [(0, pe.jsx)("div", {
              className: Je()("SchematicUploadIcon", "Active", {
                TooBig: Re
              }),
              children: (0, pe.jsx)(Te.e, {
                name: "file-lines"
              })
            }), (0, pe.jsx)("div", {
              className: "SchematicUploadInstructions Active",
              children: ye.name
            })]
          }) : (0, pe.jsxs)(pe.Fragment, {
            children: [(0, pe.jsx)("div", {
              className: "SchematicUploadIcon",
              children: (0, pe.jsx)(Te.e, {
                name: "up-from-bracket"
              })
            }), (0, pe.jsx)("div", {
              className: "SchematicUploadInstructions",
              children: He("worldBuilder:dragAFileHere")
            })]
          })]
        }), (0, pe.jsx)(ke.m, {
          disabled: Re || !ye,
          className: "SchematicUploadButton",
          onClick: () => {
            !Re && ye && ie(ye)
          },
          children: Re ? He("worldBuilder:fileTooBig", {
            maxSizeKb: qe.hd
          }) : He("worldBuilder:upload")
        })]
      })
    }

    function ze(ee) {
      let {
        ownedSchematics: ie,
        onClose: He,
        onChosenPreset: ye,
        onChosenFile: be
      } = ee;
      const {
        t: Me
      } = (0, fe.v)();
      return (0, pe.jsxs)(pe.Fragment, {
        children: [(0, pe.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: Me("worldBuilder:loadSchematic")
        }), (0, pe.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: Me("worldBuilder:chooseOneOfYourSchematics")
        }), (0, pe.jsx)("div", {
          className: "SchematicPopupSchematicListContainer",
          children: (0, pe.jsx)(Ke.c, {
            schematics: ie,
            onSchematicPicked: ee => {
              ye(ee.schematicId), He()
            },
            loading: !1,
            disableAutoExport: !0
          })
        }), (0, pe.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: Me("worldBuilder:uploadNewSchematic")
        }), (0, pe.jsx)(Xe, {
          onFilePicked: async ee => {
            try {
              await be(ee)
            } catch (ie) {
              console.warn("Schematic upload failed", ie)
            } finally {
              He()
            }
          }
        })]
      })
    }
    var Be = He(5407),
      Ee = He(1674),
      ge = He(4729),
      Oe = He(1169);

    function de(ee) {
      var ie;
      let {
        ownedSchematics: He,
        onClose: ye,
        onChosenEdit: be,
        onChosenNew: Me,
        onChosenDownload: Ue
      } = ee;
      const {
        t: Fe
      } = (0, fe.v)(), [Je, Re] = (0, oe.useState)("choose"), [qe, Te] = (0, oe.useState)(null), [Xe, ze] = (0, oe.useState)(null);
      return (0, pe.jsxs)(pe.Fragment, {
        children: [(0, pe.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: Fe("worldBuilder:saveSchematic")
        }), "choose" === Je && (0, pe.jsxs)(pe.Fragment, {
          children: [(0, pe.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: Fe("worldBuilder:overwriteOneOfYourSchematics")
          }), (0, pe.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, pe.jsx)(Ke.c, {
              schematics: He,
              onSchematicPicked: ee => {
                Te(ee.schematicId), ze("existing"), Re("save")
              },
              loading: !1,
              disableAutoExport: !1
            })
          }), (0, pe.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: Fe("general:otherOptions")
          }), (0, pe.jsxs)("div", {
            className: "OtherOptions",
            children: [(0, pe.jsx)(ke.m, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                ze("new"), Re("save")
              },
              children: Fe("worldBuilder:saveAsNewSchematic")
            }), (0, pe.jsx)(ke.c, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                ze("file"), Re("save")
              },
              children: Fe("worldBuilder:downloadSchematic")
            })]
          })]
        }), "choose" !== Je && (0, pe.jsx)(We, {
          type: Xe,
          ownedSchematics: He,
          onSubmit: (ee, ie, He) => {
            "file" === Xe ? Ue(ie, ee) : "new" === Xe ? Me(ie, He, ee) : be(qe, ie, He, ee), ye()
          },
          onBack: () => {
            Re("choose")
          },
          prepopName: "existing" === Xe ? null === (ie = He.find((ee => ee.schematicId === qe))) || void 0 === ie ? void 0 : ie.name : null
        })]
      })
    }

    function We(ee) {
      let {
        type: ie,
        prepopName: He,
        ownedSchematics: ye,
        onSubmit: be,
        onBack: Me
      } = ee;
      const {
        t: Ke
      } = (0, fe.v)(), [Ue, Fe] = (0, oe.useState)(""), [Re, qe] = (0, oe.useState)(""), [Te, Xe] = (0, oe.useState)(null), [ze, Be] = (0, oe.useState)(!0), de = ee => {
        var be;
        ee = null !== (be = ee) && void 0 !== be ? be : Ue;
        const Me = (0, Oe.Cb)(ee, "new" === ie || "existing" === ie && ee !== He);
        return Me ? (Xe(Ke(Me.translationKey, Me.params)), !1) : "new" === ie && ye.find((ie => ie.name === ee)) ? (Xe(Ke("worldBuilder:schematicAlreadyExists")), !1) : (Xe(null), !0)
      };
      return (0, pe.jsxs)("div", {
        className: "SaveSchematicWindow",
        children: [(0, pe.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: Ke("general:name")
        }), (0, pe.jsx)(Ee.d, {
          className: Je()("SaveSchematicName", {
            Error: Te
          }),
          forcedText: He,
          onValueChange: ee => {
            Fe(ee), de(ee)
          },
          placeholderText: Ke("worldBuilder:schematicNamePlaceholder"),
          maxLength: Oe.qb
        }), (0, pe.jsx)("h2", {
          className: Je()("SaveSchematicError", {
            Hidden: !Te
          }),
          children: Te
        }), (0, pe.jsx)("h2", {
          className: Je()("SchematicPopupSubtitle", {
            Hidden: "file" === ie
          }),
          children: Ke("general:description")
        }), (0, pe.jsx)(Ee.d, {
          className: Je()("SaveSchematicDescription", {
            Hidden: "file" === ie
          }),
          onValueChange: qe,
          placeholderText: Ke("worldBuilder:schematicDescriptionPlaceholder"),
          maxLength: Oe.pb,
          useTextarea: !0
        }), (0, pe.jsxs)("div", {
          className: Je()("SaveSchematicCheckboxContainer", {
            WarningBorder: "existing" === ie
          }),
          children: [(0, pe.jsx)(ge.d, {
            checked: ze,
            onChange: ee => {
              Be(ee.target.checked)
            },
            disabled: !1,
            className: "SaveSchematicCheckbox"
          }), (0, pe.jsx)("h1", {
            className: "SchematicPopupSubtitle",
            children: Ke("existing" === ie ? "worldBuilder:overwriteLobbyCode" : "worldBuilder:includeLobbyCode")
          })]
        }), "existing" === ie && (0, pe.jsx)("div", {
          className: "SaveSchematicLobbyCodeWarning",
          children: Ke("worldBuilder:lobbyCodeWarning")
        }), (0, pe.jsxs)("div", {
          className: "SaveSchematicButtons",
          children: [(0, pe.jsx)(ke.m, {
            className: "SaveSchematicButton",
            onClick: () => {
              de() && be(ze, Ue, Re)
            },
            children: Ke("file" === ie ? "general:download" : "general:save")
          }), (0, pe.jsx)(ke.G, {
            className: "SaveSchematicButton",
            onClick: Me,
            children: Ke("general:cancel")
          })]
        })]
      })
    }
    var te = He(1141),
      Ze = He(1768),
      we = He(1083);

    function De(ee, ie) {
      if ("devDownloadJson" !== ee) ! function(ee, ie) {
        const He = te.clientSideServerUrls.getHttpUrlFromWebSocketUrl((0, Me.e)().websocketUrl);
        let Ue = !1;
        const Fe = async (ee, ie) => {
          if (Ue) return;
          Ue = !0;
          const {
            gameNameWithVariation: ye,
            lobbyName: Ke
          } = (0, Me.e)(), Fe = {
            gameNameWithVariation: ye,
            lobbyName: Ke
          };
          return await (0, we.postJsonWithMetricsCookiesAndJsonResponse)(`${He}/schematic/${ee}`, be.J[ee].toBuffer({
            ...Fe,
            ...ie
          }), {
            retries: 1
          })
        };
        if ("Plugin|WorldBuilder|SaveSchematic" === ee) ! function(ee) {
          let {
            ownedSchematics: ie,
            onChosenDownload: He,
            onChosenEdit: ye,
            onChosenNew: be,
            onClose: Me
          } = ee;
          Re.NotificationProvider.showCustomPopup({
            body: ee => (0, pe.jsx)(de, {
              ownedSchematics: ie,
              onChosenDownload: He,
              onChosenEdit: ye,
              onChosenNew: be,
              onClose: ee
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: Me,
            unlockPointerKey: "schematicSaverPopup"
          })
        }({
          ownedSchematics: ie,
          onChosenDownload: (ee, ie) => {
            Fe("download-schematic", {
              name: ee,
              includeLobbyCode: ie
            }).then((ie => {
              let {
                buffer: {
                  data: He
                }
              } = ie;
              const be = ye.bR.from(He);
              (0, Ze.downloadBlob)(new Blob([be], {
                type: "application/octet-stream"
              }), `${ee}.bloxdschem`)
            }))
          },
          onClose: () => {
            Fe("cancel", {})
          },
          onChosenEdit: (ee, ie, He, ye) => {
            Fe("save-to-profile", {
              schematicId: ee,
              name: ie,
              description: He,
              includeLobbyCode: ye
            })
          },
          onChosenNew: (ee, ie, He) => {
            Fe("save-to-profile", {
              schematicId: null,
              name: ee,
              description: ie,
              includeLobbyCode: He
            })
          }
        });
        else if ("Plugin|WorldBuilder|LoadSchematic" === ee) ! function(ee) {
          let {
            ownedSchematics: ie,
            onChosenFile: He,
            onChosenPreset: ye,
            onClose: be
          } = ee;
          Re.NotificationProvider.showCustomPopup({
            body: ee => (0, pe.jsx)(ze, {
              ownedSchematics: ie,
              onChosenFile: He,
              onChosenPreset: ye,
              onClose: ee
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: be,
            unlockPointerKey: "schematicLoaderPopup"
          })
        }({
          ownedSchematics: ie,
          onChosenFile: async ee => {
            const ie = ye.bR.from(await ee.arrayBuffer()),
              {
                gameNameWithVariation: Ke,
                lobbyName: Ue
              } = (0, Me.e)();
            await (0, we.postBinaryWithMetricsCookiesAndCustomResponse)(`${He}/schematic/upload-schematic`, be.J["upload-schematic"].toBuffer({
              gameNameWithVariation: Ke,
              lobbyName: Ue,
              schematic: ie
            }), {
              retries: 1
            }, we.HttpPayloadType.json)
          },
          onChosenPreset: ee => {
            Fe("load-from-profile", {
              schematicId: ee
            })
          },
          onClose: () => {
            Fe("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ListSchematics" === ee)(0, Ke.f)({
          ownedSchematics: Array.isArray(ie) ? ie : ie.schematics,
          currentWorldSchematicId: Array.isArray(ie) ? null : ie.currentWorldSchematicId,
          onClose: () => {
            Fe("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ExportWorld" === ee) {
          var Je;
          const ee = null !== (Je = ie.schematic) && void 0 !== Je ? Je : ie;
          (0, Be.j)({
            schematic: ee,
            inSourceWorld: ee.schematicId === ie.currentWorldSchematicId,
            onClose: () => {
              Fe("cancel", {})
            }
          })
        } else console.error(`Unknown plugin message type ${ee}`)
      }(ee, ie);
      else {
        const ee = JSON.stringify(ie.data, null, 2);
        (0, Ze.downloadBlob)(new Blob([ee], {
          type: "application/json"
        }), ie.filename)
      }
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);