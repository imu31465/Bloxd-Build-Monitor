export const id = 211;
export const ids = [211];
export const modules = {
  36415: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => uq,
      g: () => Wq
    });
    var Yq = gq(57),
      lq = gq(1336),
      Oq = gq(1183),
      mq = gq(1326),
      xq = gq(3358),
      Aq = gq(4764),
      cq = gq(1070);

    function uq(qq) {
      let {
        loading: Eq,
        schematics: gq,
        onSchematicPicked: Yq,
        selectedSchematicIdList: lq = [],
        disableAutoExport: Aq
      } = qq;
      const {
        t: uq
      } = (0, Oq.v)();
      return (0, cq.jsxs)("div", {
        className: "SchematicList",
        children: [Eq && (0, cq.jsx)(mq.e, {}), !Eq && 0 === gq.length && (0, cq.jsx)("div", {
          className: "NoSchematicsText",
          children: uq("worldBuilder:noSavedSchematic")
        }), !Eq && gq.map((qq => (0, cq.jsx)(xq.e, {
          source: {
            type: "schematic",
            schematic: qq
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            Yq(qq)
          },
          isSelected: lq.includes(qq.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: qq.isAutoExported && Aq,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, qq.schematicId)))]
      })
    }

    function Bq(qq) {
      let {
        ownedSchematics: Eq,
        currentWorldSchematicId: gq,
        onClose: lq
      } = qq;
      const {
        t: mq
      } = (0, Oq.v)(), [xq, Bq] = (0, Yq.useState)(null);
      return (0, cq.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === xq && (0, cq.jsxs)(cq.Fragment, {
          children: [(0, cq.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: mq("worldBuilder:schematicList")
          }), (0, cq.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: mq("worldBuilder:clickSchematicForOptions")
          }), (0, cq.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, cq.jsx)(uq, {
              loading: !1,
              schematics: Eq,
              onSchematicPicked: qq => {
                Bq(qq)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== xq && (0, cq.jsx)(Aq.i, {
          schematic: xq,
          inSourceWorld: xq.schematicId === gq,
          onSchematicUpdate: qq => {
            Bq(qq)
          },
          onClose: () => {
            Bq(null), lq()
          }
        })]
      })
    }

    function Wq(qq) {
      let {
        ownedSchematics: Eq,
        currentWorldSchematicId: gq,
        onClose: Yq
      } = qq;
      lq.NotificationProvider.showCustomPopup({
        body: qq => (0, cq.jsx)(Bq, {
          ownedSchematics: Eq,
          currentWorldSchematicId: gq,
          onClose: qq
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: Yq,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  41495: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      runClientGameMessage: () => bq
    });
    var Yq = gq(3584),
      lq = gq(3595),
      Oq = gq(1308),
      mq = gq(36415),
      xq = gq(4792),
      Aq = gq(1018),
      cq = gq.n(Aq),
      uq = gq(57),
      Bq = gq(1336),
      Wq = gq(1422),
      Nq = gq(307),
      aq = gq(1183),
      Vq = gq(1025),
      dq = gq(1070);

    function jq(qq) {
      let {
        onFilePicked: Eq
      } = qq;
      const {
        t: gq
      } = (0, aq.v)(), [Yq, lq] = (0, uq.useState)(null), {
        getRootProps: Oq,
        getInputProps: mq,
        isDragActive: Aq
      } = (0, xq.e)({
        onDrop: qq => {
          qq.length > 0 && lq(qq[0])
        },
        useFsAccessApi: !1
      }), Bq = Yq && Yq.size > 1024 * Nq.id;
      return (0, dq.jsxs)("div", {
        className: "SchematicUploadContainer",
        children: [(0, dq.jsxs)("div", {
          ...Oq({
            className: cq()("SchematicUpload", {
              ActiveDrag: Aq
            })
          }),
          children: [(0, dq.jsx)("input", {
            ...mq({
              accept: ".bloxdschem"
            })
          }), !Aq && Yq ? (0, dq.jsxs)(dq.Fragment, {
            children: [(0, dq.jsx)("div", {
              className: cq()("SchematicUploadIcon", "Active", {
                TooBig: Bq
              }),
              children: (0, dq.jsx)(Vq.d, {
                name: "file-lines"
              })
            }), (0, dq.jsx)("div", {
              className: "SchematicUploadInstructions Active",
              children: Yq.name
            })]
          }) : (0, dq.jsxs)(dq.Fragment, {
            children: [(0, dq.jsx)("div", {
              className: "SchematicUploadIcon",
              children: (0, dq.jsx)(Vq.d, {
                name: "up-from-bracket"
              })
            }), (0, dq.jsx)("div", {
              className: "SchematicUploadInstructions",
              children: gq("worldBuilder:dragAFileHere")
            })]
          })]
        }), (0, dq.jsx)(Wq.p, {
          disabled: Bq || !Yq,
          className: "SchematicUploadButton",
          onClick: () => {
            !Bq && Yq && Eq(Yq)
          },
          children: Bq ? gq("worldBuilder:fileTooBig", {
            maxSizeKb: Nq.id
          }) : gq("worldBuilder:upload")
        })]
      })
    }

    function Hq(qq) {
      let {
        ownedSchematics: Eq,
        onClose: gq,
        onChosenPreset: Yq,
        onChosenFile: lq
      } = qq;
      const {
        t: Oq
      } = (0, aq.v)();
      return (0, dq.jsxs)(dq.Fragment, {
        children: [(0, dq.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: Oq("worldBuilder:loadSchematic")
        }), (0, dq.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: Oq("worldBuilder:chooseOneOfYourSchematics")
        }), (0, dq.jsx)("div", {
          className: "SchematicPopupSchematicListContainer",
          children: (0, dq.jsx)(mq.d, {
            schematics: Eq,
            onSchematicPicked: qq => {
              Yq(qq.schematicId), gq()
            },
            loading: !1,
            disableAutoExport: !0
          })
        }), (0, dq.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: Oq("worldBuilder:uploadNewSchematic")
        }), (0, dq.jsx)(jq, {
          onFilePicked: async qq => {
            try {
              await lq(qq)
            } catch (Eq) {
              console.warn("Schematic upload failed", Eq)
            } finally {
              gq()
            }
          }
        })]
      })
    }
    var oq = gq(4764),
      Pq = gq(1659),
      Qq = gq(4195),
      yq = gq(1214);

    function tq(qq) {
      var Eq;
      let {
        ownedSchematics: gq,
        onClose: Yq,
        onChosenEdit: lq,
        onChosenNew: Oq,
        onChosenDownload: xq
      } = qq;
      const {
        t: Aq
      } = (0, aq.v)(), [cq, Bq] = (0, uq.useState)("choose"), [Nq, Vq] = (0, uq.useState)(null), [jq, Hq] = (0, uq.useState)(null);
      return (0, dq.jsxs)(dq.Fragment, {
        children: [(0, dq.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: Aq("worldBuilder:saveSchematic")
        }), "choose" === cq && (0, dq.jsxs)(dq.Fragment, {
          children: [(0, dq.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: Aq("worldBuilder:overwriteOneOfYourSchematics")
          }), (0, dq.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, dq.jsx)(mq.d, {
              schematics: gq,
              onSchematicPicked: qq => {
                Vq(qq.schematicId), Hq("existing"), Bq("save")
              },
              loading: !1,
              disableAutoExport: !1
            })
          }), (0, dq.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: Aq("general:otherOptions")
          }), (0, dq.jsxs)("div", {
            className: "OtherOptions",
            children: [(0, dq.jsx)(Wq.p, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                Hq("new"), Bq("save")
              },
              children: Aq("worldBuilder:saveAsNewSchematic")
            }), (0, dq.jsx)(Wq.g, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                Hq("file"), Bq("save")
              },
              children: Aq("worldBuilder:downloadSchematic")
            })]
          })]
        }), "choose" !== cq && (0, dq.jsx)(rq, {
          type: jq,
          ownedSchematics: gq,
          onSubmit: (qq, Eq, gq) => {
            "file" === jq ? xq(Eq, qq) : "new" === jq ? Oq(Eq, gq, qq) : lq(Nq, Eq, gq, qq), Yq()
          },
          onBack: () => {
            Bq("choose")
          },
          prepopName: "existing" === jq ? null === (Eq = gq.find((qq => qq.schematicId === Nq))) || void 0 === Eq ? void 0 : Eq.name : null
        })]
      })
    }

    function rq(qq) {
      let {
        type: Eq,
        prepopName: gq,
        ownedSchematics: Yq,
        onSubmit: lq,
        onBack: Oq
      } = qq;
      const {
        t: mq
      } = (0, aq.v)(), [xq, Aq] = (0, uq.useState)(""), [Bq, Nq] = (0, uq.useState)(""), [Vq, jq] = (0, uq.useState)(null), [Hq, oq] = (0, uq.useState)(!0), tq = qq => {
        var gq;
        qq = null !== (gq = qq) && void 0 !== gq ? gq : xq;
        const lq = "new" === Eq ? (0, yq.x)(qq) : null,
          Oq = [...(0, yq.Kb)(qq), ...lq ? [lq] : []];
        return Oq.length > 0 ? (jq(Oq.join(", ")), !1) : "new" === Eq && Yq.find((Eq => Eq.name === qq)) ? (jq(mq("worldBuilder:schematicAlreadyExists")), !1) : (jq(null), !0)
      };
      return (0, dq.jsxs)("div", {
        className: "SaveSchematicWindow",
        children: [(0, dq.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: mq("general:name")
        }), (0, dq.jsx)(Pq.b, {
          className: cq()("SaveSchematicName", {
            Error: Vq
          }),
          forcedText: gq,
          onValueChange: qq => {
            Aq(qq), tq(qq)
          },
          placeholderText: mq("worldBuilder:schematicNamePlaceholder"),
          maxLength: yq.zb
        }), (0, dq.jsx)("h2", {
          className: cq()("SaveSchematicError", {
            Hidden: !Vq
          }),
          children: Vq
        }), (0, dq.jsx)("h2", {
          className: cq()("SchematicPopupSubtitle", {
            Hidden: "file" === Eq
          }),
          children: mq("general:description")
        }), (0, dq.jsx)(Pq.b, {
          className: cq()("SaveSchematicDescription", {
            Hidden: "file" === Eq
          }),
          onValueChange: Nq,
          placeholderText: mq("worldBuilder:schematicDescriptionPlaceholder"),
          maxLength: yq.yb,
          useTextarea: !0
        }), (0, dq.jsxs)("div", {
          className: cq()("SaveSchematicCheckboxContainer", {
            WarningBorder: "existing" === Eq
          }),
          children: [(0, dq.jsx)(Qq.b, {
            checked: Hq,
            onChange: qq => {
              oq(qq.target.checked)
            },
            disabled: !1,
            className: "SaveSchematicCheckbox"
          }), (0, dq.jsx)("h1", {
            className: "SchematicPopupSubtitle",
            children: mq("existing" === Eq ? "worldBuilder:overwriteLobbyCode" : "worldBuilder:includeLobbyCode")
          })]
        }), "existing" === Eq && (0, dq.jsx)("div", {
          className: "SaveSchematicLobbyCodeWarning",
          children: mq("worldBuilder:lobbyCodeWarning")
        }), (0, dq.jsxs)("div", {
          className: "SaveSchematicButtons",
          children: [(0, dq.jsx)(Wq.p, {
            className: "SaveSchematicButton",
            onClick: () => {
              tq() && lq(Hq, xq, Bq)
            },
            children: mq("file" === Eq ? "general:download" : "general:save")
          }), (0, dq.jsx)(Wq.K, {
            className: "SaveSchematicButton",
            onClick: Oq,
            children: mq("general:cancel")
          })]
        })]
      })
    }
    var vq = gq(1195),
      hq = gq(1710),
      nq = gq(1109);

    function bq(qq, Eq) {
      if ("devDownloadJson" !== qq) ! function(qq, Eq) {
        const gq = vq.clientSideServerUrls.getHttpUrlFromWebSocketUrl((0, Oq.e)().websocketUrl);
        let xq = !1;
        const Aq = async (qq, Eq) => {
          if (xq) return;
          xq = !0;
          const {
            gameNameWithVariation: Yq,
            lobbyName: mq
          } = (0, Oq.e)(), Aq = {
            gameNameWithVariation: Yq,
            lobbyName: mq
          };
          return await (0, nq.postJsonWithMetricsCookiesAndJsonResponse)(`${gq}/schematic/${qq}`, lq.G[qq].toBuffer({
            ...Aq,
            ...Eq
          }), {
            retries: 1
          })
        };
        if ("Plugin|WorldBuilder|SaveSchematic" === qq) ! function(qq) {
          let {
            ownedSchematics: Eq,
            onChosenDownload: gq,
            onChosenEdit: Yq,
            onChosenNew: lq,
            onClose: Oq
          } = qq;
          Bq.NotificationProvider.showCustomPopup({
            body: qq => (0, dq.jsx)(tq, {
              ownedSchematics: Eq,
              onChosenDownload: gq,
              onChosenEdit: Yq,
              onChosenNew: lq,
              onClose: qq
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: Oq,
            unlockPointerKey: "schematicSaverPopup"
          })
        }({
          ownedSchematics: Eq,
          onChosenDownload: (qq, Eq) => {
            Aq("download-schematic", {
              name: qq,
              includeLobbyCode: Eq
            }).then((Eq => {
              let {
                buffer: {
                  data: gq
                }
              } = Eq;
              const lq = Yq.IN.from(gq);
              (0, hq.downloadBlob)(new Blob([lq], {
                type: "application/octet-stream"
              }), `${qq}.bloxdschem`)
            }))
          },
          onClose: () => {
            Aq("cancel", {})
          },
          onChosenEdit: (qq, Eq, gq, Yq) => {
            Aq("save-to-profile", {
              schematicId: qq,
              name: Eq,
              description: gq,
              includeLobbyCode: Yq
            })
          },
          onChosenNew: (qq, Eq, gq) => {
            Aq("save-to-profile", {
              schematicId: null,
              name: qq,
              description: Eq,
              includeLobbyCode: gq
            })
          }
        });
        else if ("Plugin|WorldBuilder|LoadSchematic" === qq) ! function(qq) {
          let {
            ownedSchematics: Eq,
            onChosenFile: gq,
            onChosenPreset: Yq,
            onClose: lq
          } = qq;
          Bq.NotificationProvider.showCustomPopup({
            body: qq => (0, dq.jsx)(Hq, {
              ownedSchematics: Eq,
              onChosenFile: gq,
              onChosenPreset: Yq,
              onClose: qq
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: lq,
            unlockPointerKey: "schematicLoaderPopup"
          })
        }({
          ownedSchematics: Eq,
          onChosenFile: async qq => {
            const Eq = Yq.IN.from(await qq.arrayBuffer()),
              {
                gameNameWithVariation: mq,
                lobbyName: xq
              } = (0, Oq.e)();
            await (0, nq.postBinaryWithMetricsCookiesAndCustomResponse)(`${gq}/schematic/upload-schematic`, lq.G["upload-schematic"].toBuffer({
              gameNameWithVariation: mq,
              lobbyName: xq,
              schematic: Eq
            }), {
              retries: 1
            }, nq.HttpPayloadType.json)
          },
          onChosenPreset: qq => {
            Aq("load-from-profile", {
              schematicId: qq
            })
          },
          onClose: () => {
            Aq("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ListSchematics" === qq)(0, mq.g)({
          ownedSchematics: Array.isArray(Eq) ? Eq : Eq.schematics,
          currentWorldSchematicId: Array.isArray(Eq) ? null : Eq.currentWorldSchematicId,
          onClose: () => {
            Aq("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ExportWorld" === qq) {
          var cq;
          const qq = null !== (cq = Eq.schematic) && void 0 !== cq ? cq : Eq;
          (0, oq.m)({
            schematic: qq,
            inSourceWorld: qq.schematicId === Eq.currentWorldSchematicId,
            onClose: () => {
              Aq("cancel", {})
            }
          })
        } else console.error(`Unknown plugin message type ${qq}`)
      }(qq, Eq);
      else {
        const qq = JSON.stringify(Eq.data, null, 2);
        (0, hq.downloadBlob)(new Blob([qq], {
          type: "application/json"
        }), Eq.filename)
      }
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);