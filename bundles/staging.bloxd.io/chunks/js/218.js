export const id = 218;
export const ids = [218];
export const modules = {
  36549: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Dp,
      g: () => Pp
    });
    var Op = cp(62),
      op = cp(1372),
      Ip = cp(1201),
      Sp = cp(1361),
      xp = cp(3581),
      Lp = cp(5048),
      Yp = cp(1112);

    function Dp(pp) {
      let {
        loading: ip,
        schematics: cp,
        onSchematicPicked: Op,
        selectedSchematicIdList: op = [],
        disableAutoExport: Lp
      } = pp;
      const {
        t: Dp
      } = (0, Ip.H)();
      return (0, Yp.jsxs)("div", {
        className: "SchematicList",
        children: [ip && (0, Yp.jsx)(Sp.c, {}), !ip && 0 === cp.length && (0, Yp.jsx)("div", {
          className: "NoSchematicsText",
          children: Dp("worldBuilder:noSavedSchematic")
        }), !ip && cp.map((pp => (0, Yp.jsx)(xp.g, {
          source: {
            type: "schematic",
            schematic: pp
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            Op(pp)
          },
          isSelected: op.includes(pp.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: pp.isAutoExported && Lp,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, pp.schematicId)))]
      })
    }

    function Ap(pp) {
      let {
        ownedSchematics: ip,
        currentWorldSchematicId: cp,
        onClose: op
      } = pp;
      const {
        t: Sp
      } = (0, Ip.H)(), [xp, Ap] = (0, Op.useState)(null);
      return (0, Yp.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === xp && (0, Yp.jsxs)(Yp.Fragment, {
          children: [(0, Yp.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: Sp("worldBuilder:schematicList")
          }), (0, Yp.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: Sp("worldBuilder:clickSchematicForOptions")
          }), (0, Yp.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, Yp.jsx)(Dp, {
              loading: !1,
              schematics: ip,
              onSchematicPicked: pp => {
                Ap(pp)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== xp && (0, Yp.jsx)(Lp.j, {
          schematic: xp,
          inSourceWorld: xp.schematicId === cp,
          onSchematicUpdate: pp => {
            Ap(pp)
          },
          onClose: () => {
            Ap(null), op()
          }
        })]
      })
    }

    function Pp(pp) {
      let {
        ownedSchematics: ip,
        currentWorldSchematicId: cp,
        onClose: Op
      } = pp;
      op.NotificationProvider.showCustomPopup({
        body: pp => (0, Yp.jsx)(Ap, {
          ownedSchematics: ip,
          currentWorldSchematicId: cp,
          onClose: pp
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: Op,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  41985: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      runClientGameMessage: () => Cp
    });
    var Op = cp(3824),
      op = cp(3837),
      Ip = cp(1349),
      Sp = cp(36549),
      xp = cp(5076),
      Lp = cp(1049),
      Yp = cp.n(Lp),
      Dp = cp(62),
      Ap = cp(1372),
      Pp = cp(1480),
      Wp = cp(337),
      yp = cp(1201),
      Up = cp(1060),
      wp = cp(1112);

    function vp(pp) {
      let {
        onFilePicked: ip
      } = pp;
      const {
        t: cp
      } = (0, yp.H)(), [Op, op] = (0, Dp.useState)(null), {
        getRootProps: Ip,
        getInputProps: Sp,
        isDragActive: Lp
      } = (0, xp.c)({
        onDrop: pp => {
          pp.length > 0 && op(pp[0])
        },
        useFsAccessApi: !1
      }), Ap = Op && Op.size > 1024 * Wp.Tc;
      return (0, wp.jsxs)("div", {
        className: "SchematicUploadContainer",
        children: [(0, wp.jsxs)("div", {
          ...Ip({
            className: Yp()("SchematicUpload", {
              ActiveDrag: Lp
            })
          }),
          children: [(0, wp.jsx)("input", {
            ...Sp({
              accept: ".bloxdschem"
            })
          }), !Lp && Op ? (0, wp.jsxs)(wp.Fragment, {
            children: [(0, wp.jsx)("div", {
              className: Yp()("SchematicUploadIcon", "Active", {
                TooBig: Ap
              }),
              children: (0, wp.jsx)(Up.d, {
                name: "file-lines"
              })
            }), (0, wp.jsx)("div", {
              className: "SchematicUploadInstructions Active",
              children: Op.name
            })]
          }) : (0, wp.jsxs)(wp.Fragment, {
            children: [(0, wp.jsx)("div", {
              className: "SchematicUploadIcon",
              children: (0, wp.jsx)(Up.d, {
                name: "up-from-bracket"
              })
            }), (0, wp.jsx)("div", {
              className: "SchematicUploadInstructions",
              children: cp("worldBuilder:dragAFileHere")
            })]
          })]
        }), (0, wp.jsx)(Pp.o, {
          disabled: Ap || !Op,
          className: "SchematicUploadButton",
          onClick: () => {
            !Ap && Op && ip(Op)
          },
          children: Ap ? cp("worldBuilder:fileTooBig", {
            maxSizeKb: Wp.Tc
          }) : cp("worldBuilder:upload")
        })]
      })
    }

    function tp(pp) {
      let {
        ownedSchematics: ip,
        onClose: cp,
        onChosenPreset: Op,
        onChosenFile: op
      } = pp;
      const {
        t: Ip
      } = (0, yp.H)();
      return (0, wp.jsxs)(wp.Fragment, {
        children: [(0, wp.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: Ip("worldBuilder:loadSchematic")
        }), (0, wp.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: Ip("worldBuilder:chooseOneOfYourSchematics")
        }), (0, wp.jsx)("div", {
          className: "SchematicPopupSchematicListContainer",
          children: (0, wp.jsx)(Sp.c, {
            schematics: ip,
            onSchematicPicked: pp => {
              Op(pp.schematicId), cp()
            },
            loading: !1,
            disableAutoExport: !0
          })
        }), (0, wp.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: Ip("worldBuilder:uploadNewSchematic")
        }), (0, wp.jsx)(vp, {
          onFilePicked: async pp => {
            try {
              await op(pp)
            } catch (ip) {
              console.warn("Schematic upload failed", ip)
            } finally {
              cp()
            }
          }
        })]
      })
    }
    var Hp = cp(5048),
      dp = cp(1692),
      ep = cp(4462),
      jp = cp(1234);

    function kp(pp) {
      var ip;
      let {
        ownedSchematics: cp,
        onClose: Op,
        onChosenEdit: op,
        onChosenNew: Ip,
        onChosenDownload: xp
      } = pp;
      const {
        t: Lp
      } = (0, yp.H)(), [Yp, Ap] = (0, Dp.useState)("choose"), [Wp, Up] = (0, Dp.useState)(null), [vp, tp] = (0, Dp.useState)(null);
      return (0, wp.jsxs)(wp.Fragment, {
        children: [(0, wp.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: Lp("worldBuilder:saveSchematic")
        }), "choose" === Yp && (0, wp.jsxs)(wp.Fragment, {
          children: [(0, wp.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: Lp("worldBuilder:overwriteOneOfYourSchematics")
          }), (0, wp.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, wp.jsx)(Sp.c, {
              schematics: cp,
              onSchematicPicked: pp => {
                Up(pp.schematicId), tp("existing"), Ap("save")
              },
              loading: !1,
              disableAutoExport: !1
            })
          }), (0, wp.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: Lp("general:otherOptions")
          }), (0, wp.jsxs)("div", {
            className: "OtherOptions",
            children: [(0, wp.jsx)(Pp.o, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                tp("new"), Ap("save")
              },
              children: Lp("worldBuilder:saveAsNewSchematic")
            }), (0, wp.jsx)(Pp.f, {
              className: "ChooseUploadSchematicButton",
              onClick: () => {
                tp("file"), Ap("save")
              },
              children: Lp("worldBuilder:downloadSchematic")
            })]
          })]
        }), "choose" !== Yp && (0, wp.jsx)(mp, {
          type: vp,
          ownedSchematics: cp,
          onSubmit: (pp, ip, cp) => {
            "file" === vp ? xp(ip, pp) : "new" === vp ? Ip(ip, cp, pp) : op(Wp, ip, cp, pp), Op()
          },
          onBack: () => {
            Ap("choose")
          },
          prepopName: "existing" === vp ? null === (ip = cp.find((pp => pp.schematicId === Wp))) || void 0 === ip ? void 0 : ip.name : null
        })]
      })
    }

    function mp(pp) {
      let {
        type: ip,
        prepopName: cp,
        ownedSchematics: Op,
        onSubmit: op,
        onBack: Ip
      } = pp;
      const {
        t: Sp
      } = (0, yp.H)(), [xp, Lp] = (0, Dp.useState)(""), [Ap, Wp] = (0, Dp.useState)(""), [Up, vp] = (0, Dp.useState)(null), [tp, Hp] = (0, Dp.useState)(!0), kp = pp => {
        var cp;
        pp = null !== (cp = pp) && void 0 !== cp ? cp : xp;
        const op = "new" === ip ? (0, jp.A)(pp) : null,
          Ip = [...(0, jp.xb)(pp), ...op ? [op] : []];
        return Ip.length > 0 ? (vp(Ip.join(", ")), !1) : "new" === ip && Op.find((ip => ip.name === pp)) ? (vp(Sp("worldBuilder:schematicAlreadyExists")), !1) : (vp(null), !0)
      };
      return (0, wp.jsxs)("div", {
        className: "SaveSchematicWindow",
        children: [(0, wp.jsx)("h2", {
          className: "SchematicPopupSubtitle",
          children: Sp("general:name")
        }), (0, wp.jsx)(dp.c, {
          className: Yp()("SaveSchematicName", {
            Error: Up
          }),
          forcedText: cp,
          onValueChange: pp => {
            Lp(pp), kp(pp)
          },
          placeholderText: Sp("worldBuilder:schematicNamePlaceholder"),
          maxLength: jp.qb
        }), (0, wp.jsx)("h2", {
          className: Yp()("SaveSchematicError", {
            Hidden: !Up
          }),
          children: Up
        }), (0, wp.jsx)("h2", {
          className: Yp()("SchematicPopupSubtitle", {
            Hidden: "file" === ip
          }),
          children: Sp("general:description")
        }), (0, wp.jsx)(dp.c, {
          className: Yp()("SaveSchematicDescription", {
            Hidden: "file" === ip
          }),
          onValueChange: Wp,
          placeholderText: Sp("worldBuilder:schematicDescriptionPlaceholder"),
          maxLength: jp.ob,
          useTextarea: !0
        }), (0, wp.jsxs)("div", {
          className: Yp()("SaveSchematicCheckboxContainer", {
            WarningBorder: "existing" === ip
          }),
          children: [(0, wp.jsx)(ep.b, {
            checked: tp,
            onChange: pp => {
              Hp(pp.target.checked)
            },
            disabled: !1,
            className: "SaveSchematicCheckbox"
          }), (0, wp.jsx)("h1", {
            className: "SchematicPopupSubtitle",
            children: Sp("existing" === ip ? "worldBuilder:overwriteLobbyCode" : "worldBuilder:includeLobbyCode")
          })]
        }), "existing" === ip && (0, wp.jsx)("div", {
          className: "SaveSchematicLobbyCodeWarning",
          children: Sp("worldBuilder:lobbyCodeWarning")
        }), (0, wp.jsxs)("div", {
          className: "SaveSchematicButtons",
          children: [(0, wp.jsx)(Pp.o, {
            className: "SaveSchematicButton",
            onClick: () => {
              kp() && op(tp, xp, Ap)
            },
            children: Sp("file" === ip ? "general:download" : "general:save")
          }), (0, wp.jsx)(Pp.K, {
            className: "SaveSchematicButton",
            onClick: Ip,
            children: Sp("general:cancel")
          })]
        })]
      })
    }
    var Rp = cp(1211),
      qp = cp(1765),
      Mp = cp(1149);

    function Cp(pp, ip) {
      if ("devDownloadJson" !== pp) ! function(pp, ip) {
        const cp = Rp.clientSideServerUrls.getHttpUrlFromWebSocketUrl((0, Ip.d)().websocketUrl);
        let xp = !1;
        const Lp = async (pp, ip) => {
          if (xp) return;
          xp = !0;
          const {
            gameNameWithVariation: Op,
            lobbyName: Sp
          } = (0, Ip.d)(), Lp = {
            gameNameWithVariation: Op,
            lobbyName: Sp
          };
          return await (0, Mp.postJsonWithMetricsCookiesAndJsonResponse)(`${cp}/schematic/${pp}`, op.y[pp].toBuffer({
            ...Lp,
            ...ip
          }), {
            retries: 1
          })
        };
        if ("Plugin|WorldBuilder|SaveSchematic" === pp) ! function(pp) {
          let {
            ownedSchematics: ip,
            onChosenDownload: cp,
            onChosenEdit: Op,
            onChosenNew: op,
            onClose: Ip
          } = pp;
          Ap.NotificationProvider.showCustomPopup({
            body: pp => (0, wp.jsx)(kp, {
              ownedSchematics: ip,
              onChosenDownload: cp,
              onChosenEdit: Op,
              onChosenNew: op,
              onClose: pp
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: Ip,
            unlockPointerKey: "schematicSaverPopup"
          })
        }({
          ownedSchematics: ip,
          onChosenDownload: (pp, ip) => {
            Lp("download-schematic", {
              name: pp,
              includeLobbyCode: ip
            }).then((ip => {
              let {
                buffer: {
                  data: cp
                }
              } = ip;
              const op = Op.my.from(cp);
              (0, qp.downloadBlob)(new Blob([op], {
                type: "application/octet-stream"
              }), `${pp}.bloxdschem`)
            }))
          },
          onClose: () => {
            Lp("cancel", {})
          },
          onChosenEdit: (pp, ip, cp, Op) => {
            Lp("save-to-profile", {
              schematicId: pp,
              name: ip,
              description: cp,
              includeLobbyCode: Op
            })
          },
          onChosenNew: (pp, ip, cp) => {
            Lp("save-to-profile", {
              schematicId: null,
              name: pp,
              description: ip,
              includeLobbyCode: cp
            })
          }
        });
        else if ("Plugin|WorldBuilder|LoadSchematic" === pp) ! function(pp) {
          let {
            ownedSchematics: ip,
            onChosenFile: cp,
            onChosenPreset: Op,
            onClose: op
          } = pp;
          Ap.NotificationProvider.showCustomPopup({
            body: pp => (0, wp.jsx)(tp, {
              ownedSchematics: ip,
              onChosenFile: cp,
              onChosenPreset: Op,
              onClose: pp
            }),
            middleScreenPopupClassName: "SchematicPopup",
            onClose: op,
            unlockPointerKey: "schematicLoaderPopup"
          })
        }({
          ownedSchematics: ip,
          onChosenFile: async pp => {
            const ip = Op.my.from(await pp.arrayBuffer()),
              {
                gameNameWithVariation: Sp,
                lobbyName: xp
              } = (0, Ip.d)();
            await (0, Mp.postBinaryWithMetricsCookiesAndCustomResponse)(`${cp}/schematic/upload-schematic`, op.y["upload-schematic"].toBuffer({
              gameNameWithVariation: Sp,
              lobbyName: xp,
              schematic: ip
            }), {
              retries: 1
            }, Mp.HttpPayloadType.json)
          },
          onChosenPreset: pp => {
            Lp("load-from-profile", {
              schematicId: pp
            })
          },
          onClose: () => {
            Lp("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ListSchematics" === pp)(0, Sp.g)({
          ownedSchematics: Array.isArray(ip) ? ip : ip.schematics,
          currentWorldSchematicId: Array.isArray(ip) ? null : ip.currentWorldSchematicId,
          onClose: () => {
            Lp("cancel", {})
          }
        });
        else if ("Plugin|WorldBuilder|ExportWorld" === pp) {
          var Yp;
          const pp = null !== (Yp = ip.schematic) && void 0 !== Yp ? Yp : ip;
          (0, Hp.k)({
            schematic: pp,
            inSourceWorld: pp.schematicId === ip.currentWorldSchematicId,
            onClose: () => {
              Lp("cancel", {})
            }
          })
        } else console.error(`Unknown plugin message type ${pp}`)
      }(pp, ip);
      else {
        const pp = JSON.stringify(ip.data, null, 2);
        (0, qp.downloadBlob)(new Blob([pp], {
          type: "application/json"
        }), ip.filename)
      }
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);