export const id = 248;
export const ids = [248];
export const modules = {
  37780: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => pr,
      i: () => mr
    });
    var Zr = Qr(72),
      Wr = Qr(1475),
      ar = Qr(1251),
      jr = Qr(1444),
      Ir = Qr(4743),
      fr = Qr(5745),
      Er = Qr(1338);

    function pr(rr) {
      let {
        loading: Sr,
        schematics: Qr,
        onSchematicPicked: Zr,
        selectedSchematicIdList: Wr = [],
        disableAutoExport: fr
      } = rr;
      const {
        t: pr
      } = (0, ar.E)();
      return (0, Er.jsxs)("div", {
        className: "SchematicList",
        children: [Sr && (0, Er.jsx)(jr.c, {}), !Sr && 0 === Qr.length && (0, Er.jsx)("div", {
          className: "NoSchematicsText",
          children: pr("worldBuilder:noSavedSchematic")
        }), !Sr && Qr.map((rr => (0, Er.jsx)(Ir.e, {
          source: {
            type: "schematic",
            schematic: rr
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            Zr(rr)
          },
          isSelected: Wr.includes(rr.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: rr.isAutoExported && fr,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, rr.schematicId)))]
      })
    }

    function xr(rr) {
      let {
        ownedSchematics: Sr,
        currentWorldSchematicId: Qr,
        onClose: Wr
      } = rr;
      const {
        t: jr
      } = (0, ar.E)(), [Ir, xr] = (0, Zr.useState)(null);
      return (0, Er.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === Ir && (0, Er.jsxs)(Er.Fragment, {
          children: [(0, Er.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: jr("worldBuilder:schematicList")
          }), (0, Er.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: jr("worldBuilder:clickSchematicForOptions")
          }), (0, Er.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, Er.jsx)(pr, {
              loading: !1,
              schematics: Sr,
              onSchematicPicked: rr => {
                xr(rr)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== Ir && (0, Er.jsx)(fr.f, {
          schematic: Ir,
          inSourceWorld: Ir.schematicId === Qr,
          onSchematicUpdate: rr => {
            xr(rr)
          },
          onClose: () => {
            xr(null), Wr()
          }
        })]
      })
    }

    function mr(rr) {
      let {
        ownedSchematics: Sr,
        currentWorldSchematicId: Qr,
        onClose: Zr
      } = rr;
      Wr.NotificationProvider.showCustomPopup({
        body: rr => (0, Er.jsx)(xr, {
          ownedSchematics: Sr,
          currentWorldSchematicId: Qr,
          onClose: rr
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: Zr,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  54268: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      runClientGameMessage: () => lr
    });
    var Zr = Qr(2448),
      Wr = Qr(2484),
      ar = Qr(1422),
      jr = Qr(37780),
      Ir = Qr(5919),
      fr = Qr(1155),
      Er = Qr.n(fr),
      pr = Qr(72),
      xr = Qr(1475),
      mr = Qr(1576),
      Nr = Qr(379),
      Ur = Qr(1251),
      tr = Qr(1448),
      hr = Qr(1338);

    function zr(rr) {
      let {
        onFilePicked: Sr
      } = rr;
      const {
        t: Qr
      } = (0, Ur.E)(), [Zr, Wr] = (0, pr.useState)(null), {
        getRootProps: ar,
        getInputProps: jr,
        isDragActive: fr
      } = (0, Ir.b)({
        onDrop: rr => {
          rr.length > 0 && Wr(rr[0])
        },
        useFsAccessApi: !1
      }), xr = Zr && Zr.size > 1024 * Nr.Zc;
      return (0, hr.jsxs)("div", {
        className: "SchematicUploadContainer",
        children: [(0, hr.jsxs)("div", {
          ...ar({
            className: Er()("SchematicUpload", {
              ActiveDrag: fr
            })
          }),
          children: [(0, hr.jsx)("input", {
            ...jr({
              accept: ".bloxdschem"
            })
          }), !fr && Zr ? (0, hr.jsxs)(hr.Fragment, {
            children: [(0, hr.jsx)("div", {
              className: Er()("SchematicUploadIcon", "Active", {
                TooBig: xr
              }),
              children: (0, hr.jsx)(tr.c, {
                name: "file-lines"
              })
            }), (0, hr.jsx)("div", {
              className: "SchematicUploadInstructions Active",
              children: Zr.name
            })]
          }) : (0, hr.jsxs)(hr.Fragment, {
            children: [(0, hr.jsx)("div", {
              className: "SchematicUploadIcon",
              children: (0, hr.jsx)(tr.c, {
                name: "up-from-bracket"
              })
            }), (0, hr.jsx)("div", {
              className: "SchematicUploadInstructions",
              children: Qr("worldBuilder:dragAFileHere")
            })]
          })]
        }), (0, hr.jsx)(mr.p, {
          disabled: xr || !Zr,
          className: "SchematicUploadButton",
          onClick: () => {
            !xr && Zr && Sr(Zr)
          },
          children: xr ? Qr("worldBuilder:fileTooBig", {
            maxSizeKb: Nr.Zc
          }) : Qr("worldBuilder:upload")
        })]
      })
    }

    function Yr(rr) {
      let {
        ownedSchematics: Sr,
        onClose: Qr,
        onChosenPreset: Zr,
        onChosenFile: Wr
      } = rr;
      const {
        t: ar
      } = (0, Ur.E)();
      return (0, hr.jsxs)(hr.Fragment, {
        children: [(0, hr.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: ar("worldBuilder:loadSchematic")
        }), (0, hr.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: ar("worldBuilder:chooseOneOfYourSchematics")
        }), (0, hr.jsx)("div", {
          className: "SchematicPopupSchematicListContainer",
          children: (0, hr.jsx)(jr.e, {
            schematics: Sr,
            onSchematicPicked: rr => {
              Zr(rr.schematicId), Qr()
            },
            loading: !1,
            disableAutoExport: !0
          })
        }), (0, hr.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: ar("worldBuilder:uploadNewSchematic")
        }), (0, hr.jsx)(zr, {
          onFilePicked: async rr => {
            try {
              await Wr(rr)
            } catch (Sr) {
              console.warn("Schematic upload failed", Sr)
            } finally {
              Qr()
            }
          }
        })]
      })
    }
    var nr = Qr(5745),
      er = Qr(1804),
      Kr = Qr(5065),
      yr = Qr(1279);

    function Br(rr) {
      var Sr;
      let {
        ownedSchematics: Qr,
        onClose: Zr,
        onChosenEdit: Wr,
        onChosenNew: ar,
        onChosenDownload: Ir
      } = rr;
      const {
        t: fr
      } = (0, Ur.E)(), [Er, xr] = (0, pr.useState)("choose"), [Nr, tr] = (0, pr.useState)(null), [zr, Yr] = (0, pr.useState)(null);
      return (0, hr.jsxs)(hr.Fragment, {
        children: [(0, hr.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: fr("worldBuilder:saveSchematic")
        }), "choose" === Er && (0, hr.jsxs)(hr.Fragment, {
          children: [(0, hr.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: fr("worldBuilder:overwriteOneOfYourSchematics")
          }), (0, hr.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, hr.jsx)(jr.e, {
              schematics: Qr,
              onSchematicPicked: rr => {
                tr(rr.schematicId), Yr("existing"), xr("save")
              },
              loading: !1,
              disableAutoExport: !1
            })
          }), (0, hr.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: fr("general:otherOptions")
          }), (0, hr.jsxs)("div", {
            className: "OtherOptions",
            children: [(0, hr.jsx)(mr.p, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                Yr("new"), xr("save")
              },
              children: fr("worldBuilder:saveAsNewSchematic")
            }), (0, hr.jsx)(mr.h, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                Yr("file"), xr("save")
              },
              children: fr("worldBuilder:downloadSchematic")
            })]
          })]
        }), "choose" !== Er && (0, hr.jsx)(Tr, {
          type: zr,
          ownedSchematics: Qr,
          onSubmit: (rr, Sr, Qr) => {
            "file" === zr ? Ir(Sr, rr) : "new" === zr ? ar(Sr, Qr, rr) : Wr(Nr, Sr, Qr, rr), Zr()
          },
          onBack: () => {
            xr("choose")
          },
          prepopName: "existing" === zr ? null === (Sr = Qr.find((rr => rr.schematicId === Nr))) || void 0 === Sr ? void 0 : Sr.name : null
        })]
      })
    }

    function Tr(rr) {
      let {
        type: Sr,
        prepopName: Qr,
        ownedSchematics: Zr,
        onSubmit: Wr,
        onBack: ar
      } = rr;
      const {
        t: jr
      } = (0, Ur.E)(), [Ir, fr] = (0, pr.useState)(""), [xr, Nr] = (0, pr.useState)(""), [tr, zr] = (0, pr.useState)(null), [Yr, nr] = (0, pr.useState)(!0), Br = rr => {
        var Wr;
        rr = null !== (Wr = rr) && void 0 !== Wr ? Wr : Ir;
        const ar = (0, yr.Eb)(rr, "new" === Sr || "existing" === Sr && rr !== Qr);
        return ar ? (zr(jr(ar.translationKey, ar.params)), !1) : "new" === Sr && Zr.find((Sr => Sr.name === rr)) ? (zr(jr("worldBuilder:schematicAlreadyExists")), !1) : (zr(null), !0)
      };
      return (0, hr.jsxs)("div", {
        className: "SaveSchematicWindow",
        children: [(0, hr.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: jr("general:name")
        }), (0, hr.jsx)(er.b, {
          className: Er()("SaveSchematicName", {
            Error: tr
          }),
          forcedText: Qr,
          onValueChange: rr => {
            fr(rr), Br(rr)
          },
          placeholderText: jr("worldBuilder:schematicNamePlaceholder"),
          maxLength: yr.sb
        }), (0, hr.jsx)("h2", {
          className: Er()("SaveSchematicError", {
            Hidden: !tr
          }),
          children: tr
        }), (0, hr.jsx)("h2", {
          className: Er()("SchematicPopupSubtitle", {
            Hidden: "file" === Sr
          }),
          children: jr("general:description")
        }), (0, hr.jsx)(er.b, {
          className: Er()("SaveSchematicDescription", {
            Hidden: "file" === Sr
          }),
          onValueChange: Nr,
          placeholderText: jr("worldBuilder:schematicDescriptionPlaceholder"),
          maxLength: yr.qb,
          useTextarea: !0
        }), (0, hr.jsxs)("div", {
          className: Er()("SaveSchematicCheckboxContainer", {
            WarningBorder: "existing" === Sr
          }),
          children: [(0, hr.jsx)(Kr.e, {
            checked: Yr,
            onChange: rr => {
              nr(rr.target.checked)
            },
            disabled: !1,
            className: "SaveSchematicCheckbox"
          }), (0, hr.jsx)("h1", {
            className: "SchematicPopupSubtitle",
            children: jr("existing" === Sr ? "worldBuilder:overwriteLobbyCode" : "worldBuilder:includeLobbyCode")
          })]
        }), "existing" === Sr && (0, hr.jsx)("div", {
          className: "SaveSchematicLobbyCodeWarning",
          children: jr("worldBuilder:lobbyCodeWarning")
        }), (0, hr.jsxs)("div", {
          className: "SaveSchematicButtons",
          children: [(0, hr.jsx)(mr.p, {
            className: "SaveSchematicButton",
            onClick: () => {
              Br() && Wr(Yr, Ir, xr)
            },
            children: jr("file" === Sr ? "general:download" : "general:save")
          }), (0, hr.jsx)(mr.L, {
            className: "SaveSchematicButton",
            onClick: ar,
            children: jr("general:cancel")
          })]
        })]
      })
    }
    var vr = Qr(1262),
      Or = Qr(1885),
      Lr = Qr(1187);

    function lr(rr, Sr) {
      if ("devDownloadJson" !== rr) ! function(rr, Sr) {
        const Qr = vr.clientSideServerUrls.getHttpUrlFromWebSocketUrl((0, ar.b)().websocketUrl);
        let Ir = !1;
        const fr = async (rr, Sr) => {
          if (Ir) return;
          Ir = !0;
          const {
            gameNameWithVariation: Zr,
            lobbyName: jr
          } = (0, ar.b)(), fr = {
            gameNameWithVariation: Zr,
            lobbyName: jr
          };
          return await (0, Lr.postJsonWithMetricsCookiesAndJsonResponse)(`${Qr}/schematic/${rr}`, Wr.E[rr].toBuffer({
            ...fr,
            ...Sr
          }), {
            retries: 1
          })
        };
        if ("Plugin|WorldBuilder|SaveSchematic" === rr) ! function(rr) {
          let {
            ownedSchematics: Sr,
            onChosenDownload: Qr,
            onChosenEdit: Zr,
            onChosenNew: Wr,
            onClose: ar
          } = rr;
          xr.NotificationProvider.showCustomPopup({
            body: rr => (0, hr.jsx)(Br, {
              ownedSchematics: Sr,
              onChosenDownload: Qr,
              onChosenEdit: Zr,
              onChosenNew: Wr,
              onClose: rr
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: ar,
            unlockPointerKey: "schematicSaverPopup"
          })
        }({
          ownedSchematics: Sr,
          onChosenDownload: (rr, Sr) => {
            fr("download-schematic", {
              name: rr,
              includeLobbyCode: Sr
            }).then((Sr => {
              let {
                buffer: {
                  data: Qr
                }
              } = Sr;
              const Wr = Zr.Dp.from(Qr);
              (0, Or.downloadBlob)(new Blob([Wr], {
                type: "application/octet-stream"
              }), `${rr}.bloxdschem`)
            }))
          },
          onClose: () => {
            fr("cancel", {})
          },
          onChosenEdit: (rr, Sr, Qr, Zr) => {
            fr("save-to-profile", {
              schematicId: rr,
              name: Sr,
              description: Qr,
              includeLobbyCode: Zr
            })
          },
          onChosenNew: (rr, Sr, Qr) => {
            fr("save-to-profile", {
              schematicId: null,
              name: rr,
              description: Sr,
              includeLobbyCode: Qr
            })
          }
        });
        else if ("Plugin|WorldBuilder|LoadSchematic" === rr) ! function(rr) {
          let {
            ownedSchematics: Sr,
            onChosenFile: Qr,
            onChosenPreset: Zr,
            onClose: Wr
          } = rr;
          xr.NotificationProvider.showCustomPopup({
            body: rr => (0, hr.jsx)(Yr, {
              ownedSchematics: Sr,
              onChosenFile: Qr,
              onChosenPreset: Zr,
              onClose: rr
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: Wr,
            unlockPointerKey: "schematicLoaderPopup"
          })
        }({
          ownedSchematics: Sr,
          onChosenFile: async rr => {
            const Sr = Zr.Dp.from(await rr.arrayBuffer()),
              {
                gameNameWithVariation: jr,
                lobbyName: Ir
              } = (0, ar.b)();
            await (0, Lr.postBinaryWithMetricsCookiesAndCustomResponse)(`${Qr}/schematic/upload-schematic`, Wr.E["upload-schematic"].toBuffer({
              gameNameWithVariation: jr,
              lobbyName: Ir,
              schematic: Sr
            }), {
              retries: 1
            }, Lr.HttpPayloadType.json)
          },
          onChosenPreset: rr => {
            fr("load-from-profile", {
              schematicId: rr
            })
          },
          onClose: () => {
            fr("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ListSchematics" === rr)(0, jr.i)({
          ownedSchematics: Array.isArray(Sr) ? Sr : Sr.schematics,
          currentWorldSchematicId: Array.isArray(Sr) ? null : Sr.currentWorldSchematicId,
          onClose: () => {
            fr("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ExportWorld" === rr) {
          var Er;
          const rr = null !== (Er = Sr.schematic) && void 0 !== Er ? Er : Sr;
          (0, nr.h)({
            schematic: rr,
            inSourceWorld: rr.schematicId === Sr.currentWorldSchematicId,
            onClose: () => {
              fr("cancel", {})
            }
          })
        } else console.error(`Unknown plugin message type ${rr}`)
      }(rr, Sr);
      else {
        const rr = JSON.stringify(Sr.data, null, 2);
        (0, Or.downloadBlob)(new Blob([rr], {
          type: "application/json"
        }), Sr.filename)
      }
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);