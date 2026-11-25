export const id = 107;
export const ids = [107];
export const modules = {
  5256: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => rQ
    });
    var wQ = XQ(1081),
      qQ = XQ.n(wQ),
      TQ = XQ(1094),
      zQ = XQ(1391),
      sQ = XQ(3751),
      FQ = XQ(158),
      PQ = XQ(3793),
      gQ = XQ(3776),
      JQ = XQ(1145);

    function rQ(QQ) {
      let {
        game: WQ
      } = QQ;
      const XQ = (0, FQ.is99NightsCrazyGamesBundle)() ? "large" : "small",
        wQ = (0, PQ.g)(WQ, XQ),
        rQ = (0, sQ.g)(wQ),
        IQ = void 0 !== rQ.blurhash;
      return (0, JQ.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [rQ.isLoading && !IQ && (0, JQ.jsx)(zQ.e, {
          loaderType: "Secondary"
        }), !rQ.failed && (null !== rQ.src || IQ) && (0, JQ.jsx)("div", {
          className: qQ()("SchematicImage", gQ.i, {
            SchematicImageFadeIn: rQ.fadeIn && !IQ
          }),
          style: (0, gQ.h)(rQ),
          children: (0, JQ.jsx)(gQ.e, {
            image: rQ
          })
        }), rQ.failed && (0, JQ.jsx)("div", {
          className: "SchematicImageError",
          children: (0, JQ.jsx)(TQ.d, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  5384: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => yQ
    });
    var wQ = XQ(61),
      qQ = XQ(1081),
      TQ = XQ.n(qQ),
      zQ = XQ(5310),
      sQ = XQ(1391),
      FQ = XQ(1226),
      PQ = XQ(3433),
      gQ = XQ(3566),
      JQ = XQ(1094),
      rQ = XQ(3435),
      IQ = XQ(5386),
      jQ = XQ(5398),
      BQ = XQ(1145);

    function yQ(QQ) {
      let {
        folderName: WQ,
        onTexturePackUpdated: qQ,
        disabled: yQ = !1,
        maxFileSizeMb: VQ,
        packOwner: DQ
      } = QQ;
      const {
        t: pQ
      } = (0, FQ.C)(), [GQ, UQ] = (0, wQ.useState)(!1), [bQ, vQ] = (0, wQ.useState)(null), [dQ, HQ] = (0, wQ.useState)(null), aQ = (0, wQ.useRef)(null);
      async function lQ(QQ) {
        UQ(!0);
        try {
          const WQ = await (0, PQ.o)(QQ);
          if ("customGame" === DQ && (0, gQ.l)(WQ)) return void vQ(pQ(gQ.c));
          if (void 0 !== VQ) {
            const QQ = JSON.stringify(WQ).length / 1048576;
            if (QQ > VQ) return void vQ(pQ("customTexturePack:packTooBig", {
              size: QQ.toFixed(1),
              max: VQ
            }))
          }
          vQ(null), HQ(null), qQ(WQ), aQ.current = WQ,
            function(QQ, WQ) {
              const wQ = QQ.modelOverrides;
              wQ && Promise.all([XQ.e(212), XQ.e(211)]).then((() => XQ(34589))).then((XQ => {
                let {
                  packDisplayName: qQ,
                  refusedPackModels: TQ,
                  packModelSummary: zQ
                } = XQ;
                const sQ = qQ(QQ.metaData);
                WQ(zQ(sQ, TQ(sQ, wQ, !1)))
              })).catch((QQ => {
                console.error("Checking the texture pack's models failed:", QQ)
              }))
            }(WQ, (QQ => {
              aQ.current === WQ && HQ(QQ)
            }))
        } catch (WQ) {
          if (WQ instanceof rQ.c) {
            const QQ = "customTexturePack:invalidPack" !== WQ.translationKey || (0, jQ.e)() ? WQ.translationKey : "customTexturePack:invalidPackZip";
            vQ((0, IQ.l)(pQ, QQ, WQ.params))
          } else console.error("Couldn't read the texture pack", WQ), vQ(pQ("customTexturePack:errorTitle"))
        } finally {
          UQ(!1)
        }
      }
      const {
        getRootProps: hQ,
        getInputProps: iQ,
        isDragActive: cQ,
        open: AQ
      } = (0, zQ.c)({
        onDrop: lQ,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: yQ
      });
      return (0, BQ.jsxs)("div", {
        className: "CustomTexturePackContainer",
        children: [(0, BQ.jsxs)("div", {
          className: "CustomTextureWarning",
          children: [pQ("settingsMenu:customTextureWarning"), ".", (0, BQ.jsx)("br", {}), pQ("settingsMenu:viewDocumentation"), ":", " ", (0, BQ.jsx)("a", {
            href: "https://github.com/Bloxdy/texturePacks",
            target: "_blank",
            rel: "noreferrer",
            children: "github.com/Bloxdy/texturePacks"
          })]
        }), bQ && (0, BQ.jsxs)("div", {
          className: "CustomTextureError",
          children: [pQ("general:error"), ": ", bQ]
        }), dQ && (0, BQ.jsx)("div", {
          className: "CustomTextureError",
          children: dQ
        }), (0, BQ.jsxs)("div", {
          ...hQ({
            className: TQ()("CustomTextureFolderUpload", {
              ActiveDrag: cQ,
              Disabled: yQ
            })
          }),
          children: [(0, BQ.jsx)("input", {
            ...iQ({
              webkitdirectory: "true"
            })
          }), GQ && (0, BQ.jsx)("div", {
            className: "CustomTextureFolderUploadLoading",
            children: (0, BQ.jsx)(sQ.e, {})
          }), !GQ && !cQ && WQ && (0, BQ.jsxs)(BQ.Fragment, {
            children: [(0, BQ.jsx)("div", {
              className: "CustomTextureFolderUploadIcon Active",
              children: (0, BQ.jsx)(JQ.d, {
                name: "folder-image"
              })
            }), (0, BQ.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions Active",
              children: WQ
            })]
          }), !GQ && (cQ || !WQ) && (0, BQ.jsxs)(BQ.Fragment, {
            children: [(0, BQ.jsx)("div", {
              className: "CustomTextureFolderUploadIcon",
              children: (0, BQ.jsx)(JQ.d, {
                name: "up-from-bracket"
              })
            }), (0, BQ.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions",
              children: pQ((0, jQ.e)() ? "customTexturePack:dropHere" : "customTexturePack:chooseZipInstructions")
            })]
          }), !GQ && (0, BQ.jsx)(jQ.d, {
            disabled: yQ,
            openFolderPicker: AQ,
            onFiles: QQ => {
              lQ(QQ)
            }
          })]
        })]
      })
    }
  },
  5398: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => gQ,
      e: () => PQ
    });
    var wQ = XQ(61),
      qQ = XQ(1507),
      TQ = XQ(1226),
      zQ = XQ(105),
      sQ = XQ(3408),
      FQ = XQ(1145);

    function PQ() {
      return !(0, zQ.isMobile)()
    }

    function gQ(QQ) {
      let {
        disabled: WQ,
        openFolderPicker: XQ,
        onFiles: zQ
      } = QQ;
      const {
        t: gQ
      } = (0, TQ.C)(), JQ = (0, wQ.useRef)(null);
      return (0, FQ.jsxs)("div", {
        className: "PackPickButtons",
        "data-pad-mouse-only": !0,
        children: [(0, FQ.jsx)("input", {
          ref: JQ,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(QQ) {
            const WQ = Array.from(QQ.target.files);
            QQ.target.value = "", zQ(WQ)
          }
        }), PQ() && (0, FQ.jsx)(qQ.h, {
          disabled: WQ,
          onClick: XQ,
          children: gQ("general:chooseFolder")
        }), (0, FQ.jsx)(qQ.h, {
          disabled: WQ,
          onClick: () => {
            (0, sQ.d)(JQ.current)
          },
          children: gQ("general:chooseZip")
        })]
      })
    }
  },
  5349: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => jQ,
      g: () => pQ,
      h: () => BQ,
      i: () => DQ
    });
    var wQ = XQ(61),
      qQ = XQ(5351),
      TQ = XQ(4677),
      zQ = XQ(1416),
      sQ = XQ(5376),
      FQ = XQ(1081),
      PQ = XQ.n(FQ),
      gQ = XQ(1404),
      JQ = XQ(1802),
      rQ = XQ(5378),
      IQ = XQ(1145);

    function jQ(QQ) {
      let {
        label: WQ,
        onClick: XQ,
        checked: wQ,
        circleInfoText: qQ,
        className: sQ,
        disabled: FQ,
        note: gQ
      } = QQ;
      return (0, IQ.jsxs)("div", {
        "aria-disabled": FQ || void 0,
        "data-pad-focusable": !0,
        className: PQ()("SettingBox CheckboxContainer", {
          [sQ]: sQ,
          SettingBoxDisabled: FQ
        }),
        onClick: () => {
          FQ || XQ(!wQ)
        },
        children: [(0, IQ.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, IQ.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, IQ.jsx)(TQ.b, {
              className: "SettingsCheckbox",
              checked: wQ,
              disabled: FQ,
              onChange: () => {}
            })
          }), (0, IQ.jsxs)("div", {
            className: "CheckboxText",
            children: [WQ, qQ && (0, IQ.jsx)("span", {
              onClick: QQ => QQ.stopPropagation(),
              children: (0, IQ.jsx)(zQ.b, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: qQ
              })
            })]
          })]
        }), gQ && (0, IQ.jsx)("div", {
          className: "SettingNote",
          children: gQ
        })]
      })
    }

    function BQ(QQ) {
      let {
        name: WQ,
        onChange: XQ,
        min: qQ,
        max: TQ,
        step: sQ,
        initValue: FQ,
        circleInfoText: gQ,
        format: JQ,
        className: rQ,
        padStep: jQ,
        disabled: BQ = !1,
        selectableMax: yQ,
        cappedNote: DQ,
        onChangeComplete: pQ
      } = QQ;
      const [GQ, UQ] = (0, wQ.useState)(FQ), bQ = (0, wQ.useRef)(FQ);
      (0, wQ.useEffect)((() => {
        bQ.current = FQ, UQ(FQ)
      }), [FQ]);
      const vQ = void 0 !== yQ && yQ < TQ,
        dQ = vQ ? {
          "--slider-selectable": (yQ - qQ) / (TQ - qQ)
        } : void 0;
      return (0, IQ.jsxs)("div", {
        className: PQ()("SettingBox SettingsSliderDiv", {
          [rQ]: rQ,
          SettingBoxDisabled: BQ,
          SliderCapped: vQ
        }),
        style: dQ,
        children: [(0, IQ.jsxs)("div", {
          className: "SliderText",
          children: [`${WQ}: ${JQ?JQ(GQ):GQ}`, gQ && (0, IQ.jsx)(zQ.b, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: gQ
          })]
        }), (0, IQ.jsx)("div", {
          className: "SliderDiv",
          children: (0, IQ.jsx)(VQ, {
            value: GQ,
            min: qQ,
            max: TQ,
            step: sQ,
            onChange: QQ => {
              if (vQ && QQ >= yQ && GQ === yQ) return;
              const WQ = vQ ? Math.min(QQ, yQ) : QQ;
              bQ.current = WQ, UQ(WQ), XQ(WQ)
            },
            onChangeComplete: pQ && (() => {
              pQ(bQ.current)
            }),
            format: JQ,
            padStep: jQ,
            disabled: BQ
          })
        }), vQ && DQ && (0, IQ.jsx)("div", {
          className: "SettingNote",
          children: DQ
        })]
      })
    }
    const yQ = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function VQ(QQ) {
      var WQ;
      let {
        value: XQ,
        min: TQ,
        max: zQ,
        step: sQ,
        onChange: FQ,
        orientation: PQ,
        reverse: gQ,
        setIsChanging: JQ,
        tooltip: jQ,
        labels: BQ,
        handleLabel: VQ,
        format: DQ,
        onChangeStart: pQ,
        onChangeComplete: GQ,
        padStep: UQ,
        disabled: bQ = !1
      } = QQ;
      const vQ = (0, wQ.useRef)(null),
        dQ = (0, wQ.useRef)(null);
      (0, wQ.useLayoutEffect)((() => {
        var QQ, WQ, XQ;
        const wQ = null !== (QQ = null === (WQ = vQ.current) || void 0 === WQ ? void 0 : WQ.querySelector(".rangeslider")) && void 0 !== QQ ? QQ : null;
        null === wQ || void 0 === wQ || wQ.setAttribute("data-pad-slider", ""), null === wQ || void 0 === wQ || wQ.setAttribute("data-pad-focusable", ""), null === wQ || void 0 === wQ || null === (XQ = wQ.querySelector(".rangeslider__handle")) || void 0 === XQ || XQ.setAttribute("data-pad-slider-handle", ""), dQ.current = wQ
      }), []), (0, wQ.useLayoutEffect)((() => {
        var QQ, WQ;
        bQ ? null === (QQ = dQ.current) || void 0 === QQ || QQ.setAttribute("aria-disabled", "true") : null === (WQ = dQ.current) || void 0 === WQ || WQ.removeAttribute("aria-disabled")
      }), [bQ]);
      const HQ = (null !== (WQ = String(sQ).split(".")[1]) && void 0 !== WQ ? WQ : "").length,
        aQ = QQ => {
          const WQ = Number((Math.round((QQ - TQ) / sQ) * sQ + TQ).toFixed(HQ));
          return Math.min(zQ, Math.max(TQ, WQ))
        },
        lQ = (0, wQ.useRef)(GQ);
      lQ.current = GQ, (0, wQ.useEffect)((() => {
        const QQ = vQ.current;
        if (!QQ) return;
        const WQ = QQ => {
          var WQ;
          yQ.has(QQ.key) && (null === (WQ = lQ.current) || void 0 === WQ || WQ.call(lQ))
        };
        return QQ.addEventListener("keyup", WQ), () => {
          QQ.removeEventListener("keyup", WQ)
        }
      }), []);
      const hQ = (0, wQ.useRef)(!1);
      return (0, rQ.i)(dQ, {
        adjust: QQ => {
          if (bQ) return;
          const WQ = null !== UQ && void 0 !== UQ ? UQ : Math.max(sQ, Math.round((zQ - TQ) / 20 / sQ) * sQ),
            wQ = aQ(XQ + QQ * WQ * (gQ ? -1 : 1));
          wQ !== XQ && (null === pQ || void 0 === pQ || pQ(), FQ(wQ), null === GQ || void 0 === GQ || GQ())
        },
        setFraction: QQ => {
          if (bQ) return;
          const WQ = aQ(TQ + (gQ ? 1 - QQ : QQ) * (zQ - TQ));
          WQ !== XQ && (hQ.current || (hQ.current = !0, null === pQ || void 0 === pQ || pQ()), FQ(WQ))
        },
        endDrag: () => {
          hQ.current && (hQ.current = !1, null === GQ || void 0 === GQ || GQ())
        }
      }), (0, IQ.jsx)("div", {
        ref: vQ,
        style: {
          display: "contents"
        },
        children: (0, IQ.jsx)(qQ.c, {
          value: XQ,
          min: TQ,
          max: zQ,
          step: sQ,
          onChange: FQ,
          orientation: PQ,
          reverse: gQ,
          tooltip: jQ,
          labels: BQ,
          handleLabel: VQ,
          format: DQ,
          onChangeStart: () => {
            null === pQ || void 0 === pQ || pQ(), null === JQ || void 0 === JQ || JQ(!0)
          },
          onChangeComplete: () => {
            null === JQ || void 0 === JQ || JQ(!1), null === GQ || void 0 === GQ || GQ()
          }
        })
      })
    }
    async function DQ() {
      const QQ = gQ.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await QQ.getResult() && (0, JQ.reloadBloxd)()
    }

    function pQ(QQ) {
      let {
        label: WQ,
        options: XQ,
        value: wQ,
        onChange: qQ,
        circleInfoText: TQ
      } = QQ;
      return (0, IQ.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, IQ.jsxs)("div", {
          className: "SliderText",
          children: [WQ, TQ && (0, IQ.jsx)(zQ.b, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: TQ
          })]
        }), (0, IQ.jsx)(sQ.d, {
          ariaLabel: WQ,
          options: XQ,
          value: wQ,
          onChange: qQ
        })]
      })
    }
  },
  5346: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => yQ,
      e: () => VQ
    });
    var wQ = XQ(3433),
      qQ = XQ(2226),
      TQ = XQ(61),
      zQ = XQ(1081),
      sQ = XQ.n(zQ),
      FQ = XQ(1391),
      PQ = XQ(3424),
      gQ = XQ(1404),
      JQ = XQ(5349),
      rQ = XQ(5384),
      IQ = XQ(691),
      jQ = XQ(5401),
      BQ = XQ(1145);

    function yQ(QQ) {
      var WQ;
      let {
        setApplySettingsCallback: XQ
      } = QQ;
      const [, zQ] = (0, TQ.useReducer)((QQ => QQ + 1), 0), sQ = (0, TQ.useRef)(!1), FQ = (0, TQ.useRef)(null);

      function yQ(QQ, WQ) {
        PQ.d.setFromJson(QQ, "player");
        const wQ = PQ.d.saveTexturePack();
        if (IQ.x) {
          const QQ = PQ.d.toJson();
          wQ.then((WQ => {
            WQ && (0, jQ.c)(QQ)
          }))
        } else sQ.current ||= WQ, FQ.current !== PQ.d.getId() || PQ.d.getId() === qQ.i.CUSTOM && sQ.current ? XQ((() => JQ.i)) : XQ(null);
        zQ()
      }
      async function DQ(QQ) {
        if (PQ.d.getId() !== QQ.metaData.id) {
          if (PQ.d.getId() === qQ.i.CUSTOM && PQ.d.getFromFolderName()) {
            const QQ = gQ.NotificationProvider.showPromptPopup({
              title: "settingsMenu:loseChangesTitle",
              subtitle: "settingsMenu:loseChangesSubtitle",
              confirmText: "general:continue",
              destructive: !0,
              confirmTooltip: "",
              cancelText: "general:cancel",
              cancelTooltip: ""
            });
            if (!0 !== await QQ.getResult()) return
          }
          yQ(QQ, !1)
        }
      }(0, TQ.useEffect)((() => {
        FQ.current = PQ.d.getId()
      }), []);
      const pQ = wQ.c,
        GQ = [pQ, ...Object.values(qQ.i).filter((QQ => QQ !== pQ))];
      return (0, BQ.jsx)(BQ.Fragment, {
        children: (0, BQ.jsxs)("div", {
          className: "TexturePackCategory SettingsMenuRightInner",
          children: [(0, BQ.jsx)("div", {
            className: "TexturePackList",
            children: GQ.map((QQ => (0, BQ.jsx)(VQ, {
              id: QQ,
              isSelected: QQ === PQ.d.getId(),
              setSelected: DQ
            }, QQ)))
          }), PQ.d.getId() === qQ.i.CUSTOM && (0, BQ.jsx)(rQ.d, {
            folderName: null !== (WQ = PQ.d.getFromFolderName()) && void 0 !== WQ ? WQ : null,
            onTexturePackUpdated: function(QQ) {
              yQ(QQ, !0)
            },
            packOwner: "player"
          })]
        })
      })
    }

    function VQ(QQ) {
      let {
        id: WQ,
        isSelected: XQ,
        setSelected: zQ,
        disabled: PQ = !1
      } = QQ;
      const [gQ, JQ] = (0, TQ.useState)(!0), [rQ, IQ] = (0, TQ.useState)(""), [jQ, yQ] = (0, TQ.useState)(""), [VQ, DQ] = (0, TQ.useState)(""), pQ = (0, TQ.useRef)({});
      return (0, TQ.useEffect)((() => {
        (0, wQ.n)(WQ).then((QQ => {
          var WQ;
          QQ && (pQ.current = QQ, JQ(!1), IQ(pQ.current.metaData.name), yQ(pQ.current.metaData.author), DQ(null !== (WQ = pQ.current.metaData.previewImage) && void 0 !== WQ ? WQ : ""))
        })).catch((QQ => {
          console.warn(`Failed to fetch texture pack ${WQ}`, QQ)
        }))
      }), [WQ]), (0, BQ.jsxs)("div", {
        "data-pad-focusable": !0,
        "aria-disabled": PQ || void 0,
        className: sQ()("TexturePack", {
          Selected: XQ,
          Custom: WQ === qQ.i.CUSTOM,
          Disabled: PQ
        }),
        onClick: () => {
          gQ || PQ || zQ(pQ.current)
        },
        children: [(0, BQ.jsx)("div", {
          className: "TexturePackBg",
          style: {
            backgroundImage: VQ ? `url(${VQ})` : void 0
          }
        }), gQ && (0, BQ.jsx)("div", {
          className: "TexturePackName",
          children: (0, BQ.jsx)(FQ.e, {})
        }), !gQ && rQ && (0, BQ.jsx)("div", {
          className: "TexturePackName",
          children: rQ
        }), !gQ && jQ && (0, BQ.jsx)("div", {
          className: "TexturePackAuthor",
          children: jQ
        })]
      })
    }
  },
  5386: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => sQ,
      i: () => zQ,
      l: () => TQ
    });
    var wQ = XQ(5394);
    const qQ = [QQ => QQ.strict ? "strict" : "nonStrict", QQ => QQ.program];

    function TQ(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const wQ = {};
      for (const qQ in XQ) wQ[qQ] = `\0${qQ}\0`;
      return QQ(WQ, wQ).replace(/\0(\w+)\0/g, ((QQ, WQ) => XQ[WQ]))
    }

    function zQ(QQ) {
      return null === QQ.file ? null : QQ.line > 0 ? `${QQ.file}:${QQ.line}` : QQ.file
    }

    function sQ(QQ) {
      const WQ = new Map(QQ.map((QQ => [FQ(QQ).join("."), QQ])));
      if (0 === WQ.size) return [];
      const XQ = gQ([...WQ.values()]);
      return 0 === XQ[0].length ? [] : XQ
    }

    function FQ(QQ) {
      return qQ.map((WQ => WQ(QQ)))
    }
    const PQ = qQ.map((QQ => new Set(wQ.c.map(QQ)).size));

    function gQ(QQ) {
      const WQ = qQ.map((WQ => new Set(QQ.map(WQ)))),
        XQ = WQ.reduce(((QQ, WQ) => QQ * WQ.size), 1),
        wQ = WQ.every(((QQ, WQ) => 1 === QQ.size || QQ.size === PQ[WQ]));
      if (XQ === QQ.length && wQ) return [qQ.filter(((QQ, XQ) => 1 === WQ[XQ].size)).map((WQ => WQ(QQ[0])))];
      let TQ = null;
      for (let zQ = 0; zQ < qQ.length; zQ++) {
        if (1 === WQ[zQ].size) continue;
        const XQ = JQ(QQ, qQ[zQ]).flatMap(gQ);
        (null === TQ || XQ.length < TQ.length) && (TQ = XQ)
      }
      return TQ
    }

    function JQ(QQ, WQ) {
      const XQ = new Map;
      for (const qQ of QQ) {
        var wQ;
        const QQ = WQ(qQ);
        XQ.set(QQ, [...null !== (wQ = XQ.get(QQ)) && void 0 !== wQ ? wQ : [], qQ])
      }
      return [...XQ.values()]
    }
  },
  5376: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => zQ
    });
    var wQ = XQ(1081),
      qQ = XQ.n(wQ),
      TQ = XQ(1145);

    function zQ(QQ) {
      let {
        options: WQ,
        value: XQ,
        onChange: wQ,
        ariaLabel: zQ,
        className: sQ,
        reselectable: FQ = !1,
        keepsFocus: PQ = !1,
        padTabs: gQ
      } = QQ;
      const JQ = void 0 !== gQ;
      return (0, TQ.jsx)("div", {
        className: qQ()("SegmentedToggle", sQ),
        role: "group",
        "aria-label": zQ,
        "data-pad-tabs": gQ,
        children: WQ.map((QQ => {
          const WQ = QQ.value === XQ;
          return (0, TQ.jsx)("button", {
            type: "button",
            "aria-pressed": WQ,
            "data-pad-tab": JQ || void 0,
            "data-pad-selected": JQ && WQ ? "true" : void 0,
            "data-pad-default-focus": JQ && WQ || void 0,
            "aria-label": QQ.ariaLabel,
            title: QQ.ariaLabel,
            className: qQ()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: WQ
            }),
            onMouseDown: PQ ? QQ => {
              QQ.preventDefault()
            } : void 0,
            onClick: () => {
              WQ && !FQ || wQ(QQ.value)
            },
            children: QQ.label
          }, QQ.value)
        }))
      })
    }
  },
  5378: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => TQ,
      i: () => zQ
    });
    var wQ = XQ(61);
    const qQ = new WeakMap,
      TQ = QQ => {
        var WQ;
        const XQ = QQ.closest("[data-pad-slider]");
        return XQ && null !== (WQ = qQ.get(XQ)) && void 0 !== WQ ? WQ : null
      },
      zQ = (QQ, WQ) => {
        const XQ = (0, wQ.useRef)(WQ);
        XQ.current = WQ, (0, wQ.useEffect)((() => {
          if (QQ.current) return ((QQ, WQ) => (qQ.set(QQ, WQ), () => {
            qQ.get(QQ) === WQ && qQ.delete(QQ)
          }))(QQ.current, {
            adjust: QQ => {
              XQ.current.adjust(QQ)
            },
            setFraction: QQ => {
              XQ.current.setFraction(QQ)
            },
            endDrag: () => {
              XQ.current.endDrag()
            }
          })
        }), [QQ])
      }
  },
  5394: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => wQ.i,
      c: () => qQ,
      g: () => wQ.n
    });
    var wQ = XQ(5396);
    const qQ = [!1, !0].flatMap((QQ => ["terrain", "liquid", "model"].map((WQ => ({
      strict: QQ,
      program: WQ
    })))))
  },
  5404: (QQ, WQ, XQ) => {
    function wQ(QQ, WQ) {
      return qQ(QQ, WQ)
    }

    function qQ(QQ, WQ) {
      if (QQ === WQ) return !0;
      if ("object" !== typeof QQ || "object" !== typeof WQ || null === QQ || null === WQ || Array.isArray(QQ) !== Array.isArray(WQ)) return !1;
      const XQ = QQ,
        wQ = WQ,
        TQ = Object.keys(XQ);
      return TQ.length === Object.keys(wQ).length && TQ.every((QQ => Object.prototype.hasOwnProperty.call(wQ, QQ) && qQ(XQ[QQ], wQ[QQ])))
    }
    XQ.d(WQ, {
      b: () => wQ
    })
  },
  5401: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => zQ,
      g: () => sQ
    });
    var wQ = XQ(2226),
      qQ = XQ(5404);
    let TQ = null;

    function zQ(QQ) {
      TQ = {
        pack: QQ.metaData.id === wQ.c ? null : QQ
      }
    }

    function sQ(QQ) {
      return !(null === TQ || !(0, qQ.b)(TQ.pack, QQ)) && (TQ = null, !0)
    }
  },
  5396: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => sQ,
      f: () => zQ,
      i: () => wQ,
      l: () => BQ,
      m: () => JQ,
      n: () => qQ,
      r: () => TQ,
      t: () => PQ,
      w: () => gQ,
      z: () => rQ
    });
    const wQ = 5;

    function qQ(QQ) {
      return QQ === wQ
    }

    function TQ(QQ) {
      return [...QQ.features]
    }
    const zQ = 262144,
      sQ = 256,
      FQ = 256;

    function PQ(QQ) {
      if ("object" !== typeof QQ || null === QQ || Array.isArray(QQ)) return "The pack has no files.";
      const WQ = [];
      for (const [XQ, wQ] of Object.entries(QQ)) {
        if ("string" !== typeof wQ) return `${XQ} isn't text.`;
        WQ.push({
          path: XQ,
          source: wQ
        })
      }
      return WQ.sort(((QQ, WQ) => JQ(QQ.path, WQ.path))),
        function(QQ) {
          if (0 === QQ.length) return "The pack has no .wgsl files.";
          if (QQ.length > sQ) return `The pack has more than ${sQ} .wgsl files.`;
          const WQ = new Set;
          for (const {
              path: XQ
            }
            of QQ) {
            const QQ = IQ(XQ);
            if (null !== QQ) return QQ;
            if (WQ.has(XQ)) return `The pack has two files at ${XQ}.`;
            WQ.add(XQ)
          }
          return rQ(QQ) > zQ ? `The pack's .wgsl files are over ${zQ/1024} KB in total.` : null
        }(WQ) ?? WQ
    }

    function gQ(QQ) {
      const WQ = {};
      for (const XQ of QQ) WQ[XQ.path] = XQ.source;
      return WQ
    }

    function JQ(QQ, WQ) {
      return QQ < WQ ? -1 : QQ > WQ ? 1 : 0
    }

    function rQ(QQ) {
      const WQ = new TextEncoder;
      let XQ = 0;
      for (const {
          source: wQ
        }
        of QQ) XQ += WQ.encode(wQ).byteLength;
      return XQ
    }

    function IQ(QQ) {
      if (!QQ.toLowerCase().endsWith(".wgsl")) return `${QQ} isn't a .wgsl file.`;
      if (QQ.length > FQ) return `A file path is over ${FQ} characters.`;
      if (QQ.includes("\\") || /[\u0000-\u001f]/.test(QQ)) return `${QQ} isn't a valid file path.`;
      return QQ.split("/").some((QQ => "" === QQ || "." === QQ || ".." === QQ)) ? `${QQ} isn't a valid file path.` : null
    }
    const jQ = /^(.*)\[rot\[([1-4])$/;

    function BQ(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const wQ = new Map;
      WQ.forEach(((QQ, WQ) => {
        let {
          numAnimStates: XQ,
          animStartIdx: qQ
        } = QQ;
        for (let TQ = 1; TQ < XQ; TQ++) wQ.set(qQ + TQ - 1, WQ)
      }));
      const qQ = Object.entries(QQ),
        TQ = new Map;
      for (const [BQ, yQ] of qQ) {
        const QQ = jQ.exec(BQ);
        "1" === QQ?.[2] && TQ.set(QQ[1], yQ + 1)
      }
      const zQ = QQ => {
          const WQ = jQ.exec(QQ);
          return WQ && TQ.has(WQ[1]) ? {
            root: WQ[1],
            rotation: Number(WQ[2]) - 1
          } : null
        },
        sQ = new Set(qQ.map((QQ => {
          let [WQ] = QQ;
          return zQ(WQ)?.root ?? WQ
        }))),
        FQ = (QQ, XQ) => {
          const wQ = QQ.replace(/_?0$/, "");
          return (WQ[XQ]?.numAnimStates ?? 0) > 1 && !sQ.has(wQ) ? wQ : QQ
        },
        PQ = new Map;
      for (const [jQ, BQ] of qQ) PQ.set(BQ, FQ(zQ(jQ)?.root ?? jQ, BQ));
      const gQ = qQ.reduce(((QQ, WQ) => {
          let [, XQ] = WQ;
          return Math.max(QQ, XQ + 1)
        }), 0),
        JQ = Array.from({
          length: gQ
        }, ((QQ, WQ) => ({
          id: WQ + 1,
          rotation: 0
        }))),
        rQ = new Map,
        IQ = new Map;
      for (const [jQ, BQ] of qQ) {
        const QQ = zQ(jQ),
          WQ = wQ.get(BQ);
        if (void 0 !== WQ) {
          const XQ = PQ.get(WQ);
          IQ.set(jQ, {
            name: jQ,
            texture: XQ,
            kind: "frame"
          }), QQ && !IQ.has(QQ.root) && IQ.set(QQ.root, {
            name: QQ.root,
            texture: XQ,
            kind: "frame"
          });
          continue
        }
        const XQ = PQ.get(BQ),
          qQ = QQ?.root ?? jQ;
        if (XQ !== qQ && IQ.set(qQ, {
            name: qQ,
            texture: XQ,
            kind: "frame"
          }), QQ) {
          const WQ = TQ.get(QQ.root);
          JQ[BQ] = {
            id: WQ,
            rotation: QQ.rotation
          }, rQ.set(XQ, WQ), IQ.set(jQ, {
            name: jQ,
            texture: XQ,
            kind: "rotation"
          })
        } else rQ.set(XQ, BQ + 1)
      }
      for (const jQ of rQ.keys()) IQ.delete(jQ);
      for (const [jQ, BQ] of XQ) {
        const QQ = rQ.get(BQ);
        void 0 === QQ || rQ.has(jQ) || (rQ.set(jQ, QQ), IQ.delete(jQ))
      }
      return {
        named: [...rQ].sort(((QQ, WQ) => {
          let [XQ] = QQ, [wQ] = WQ;
          return XQ < wQ ? -1 : XQ > wQ ? 1 : 0
        })).map((QQ => {
          let [WQ, XQ] = QQ;
          return {
            name: WQ,
            id: XQ
          }
        })),
        aliases: [...IQ.values()],
        layers: JQ
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);