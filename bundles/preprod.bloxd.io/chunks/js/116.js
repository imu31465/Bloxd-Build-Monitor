export const id = 116;
export const ids = [116];
export const modules = {
  5424: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => NU
    });
    var cU = zU(1106),
      yU = zU.n(cU),
      QU = zU(1390),
      AU = zU(1384),
      FU = zU(3887),
      oU = zU(142),
      DU = zU(3929),
      EU = zU(3914),
      YU = zU(1305);

    function NU(UU) {
      let {
        game: XU
      } = UU;
      const zU = (0, oU.is99NightsCrazyGamesBundle)() ? "large" : "small",
        cU = (0, DU.c)(XU, zU),
        NU = (0, FU.f)(cU),
        IU = void 0 !== NU.blurhash;
      return (0, YU.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [NU.isLoading && !IU && (0, YU.jsx)(AU.b, {
          loaderType: "Secondary"
        }), !NU.failed && (null !== NU.src || IU) && (0, YU.jsx)("div", {
          className: yU()("SchematicImage", EU.i, {
            SchematicImageFadeIn: NU.fadeIn && !IU
          }),
          style: (0, EU.h)(NU),
          children: (0, YU.jsx)(EU.d, {
            image: NU
          })
        }), NU.failed && (0, YU.jsx)("div", {
          className: "SchematicImageError",
          children: (0, YU.jsx)(QU.d, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  5593: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => tU
    });
    var cU = zU(61),
      yU = zU(1106),
      QU = zU.n(yU),
      AU = zU(5490),
      FU = zU(1384),
      oU = zU(1193),
      DU = zU(3526),
      EU = zU(3673),
      YU = zU(1390),
      NU = zU(3528),
      IU = zU(5597),
      pU = zU(5617),
      aU = zU(1305);

    function tU(UU) {
      let {
        folderName: XU,
        onTexturePackUpdated: yU,
        disabled: tU = !1,
        maxFileSizeMb: gU,
        packOwner: kU
      } = UU;
      const {
        t: GU
      } = (0, oU.I)(), [BU, ZU] = (0, cU.useState)(!1), [RU, PU] = (0, cU.useState)(null), [WU, dU] = (0, cU.useState)(null), LU = (0, cU.useRef)(null);
      async function eU(UU) {
        ZU(!0);
        try {
          const XU = await (0, DU.n)(UU);
          if ("customGame" === kU && (0, EU.n)(XU)) return void PU(GU(EU.d));
          if (void 0 !== gU) {
            const UU = JSON.stringify(XU).length / 1048576;
            if (UU > gU) return void PU(GU("customTexturePack:packTooBig", {
              size: UU.toFixed(1),
              max: gU
            }))
          }
          PU(null), dU(null), yU(XU), LU.current = XU,
            function(UU, XU) {
              const cU = UU.modelOverrides;
              cU && Promise.all([zU.e(221), zU.e(220)]).then((() => zU(34956))).then((zU => {
                let {
                  packDisplayName: yU,
                  refusedPackModels: QU,
                  packModelSummary: AU
                } = zU;
                const FU = yU(UU.metaData);
                XU(AU(FU, QU(FU, cU, !1)))
              })).catch((UU => {
                console.error("Checking the texture pack's models failed:", UU)
              }))
            }(XU, (UU => {
              LU.current === XU && dU(UU)
            }))
        } catch (XU) {
          if (XU instanceof NU.e) {
            const UU = "customTexturePack:invalidPack" !== XU.translationKey || (0, pU.h)() ? XU.translationKey : "customTexturePack:invalidPackZip";
            PU((0, IU.i)(GU, UU, XU.params))
          } else console.error("Couldn't read the texture pack", XU), PU(GU("customTexturePack:errorTitle"))
        } finally {
          ZU(!1)
        }
      }
      const {
        getRootProps: CU,
        getInputProps: wU,
        isDragActive: qU,
        open: OU
      } = (0, AU.b)({
        onDrop: eU,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: tU
      });
      return (0, aU.jsxs)("div", {
        className: "CustomTexturePackContainer",
        children: [(0, aU.jsxs)("div", {
          className: "CustomTextureWarning",
          children: [GU("settingsMenu:customTextureWarning"), ".", (0, aU.jsx)("br", {}), GU("settingsMenu:viewDocumentation"), ":", " ", (0, aU.jsx)("a", {
            href: "https://github.com/Bloxdy/texturePacks",
            target: "_blank",
            rel: "noreferrer",
            children: "github.com/Bloxdy/texturePacks"
          })]
        }), RU && (0, aU.jsxs)("div", {
          className: "CustomTextureError",
          children: [GU("general:error"), ": ", RU]
        }), WU && (0, aU.jsx)("div", {
          className: "CustomTextureError",
          children: WU
        }), (0, aU.jsxs)("div", {
          ...CU({
            className: QU()("CustomTextureFolderUpload", {
              ActiveDrag: qU,
              Disabled: tU
            })
          }),
          children: [(0, aU.jsx)("input", {
            ...wU({
              webkitdirectory: "true"
            })
          }), BU && (0, aU.jsx)("div", {
            className: "CustomTextureFolderUploadLoading",
            children: (0, aU.jsx)(FU.b, {})
          }), !BU && !qU && XU && (0, aU.jsxs)(aU.Fragment, {
            children: [(0, aU.jsx)("div", {
              className: "CustomTextureFolderUploadIcon Active",
              children: (0, aU.jsx)(YU.d, {
                name: "folder-image"
              })
            }), (0, aU.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions Active",
              children: XU
            })]
          }), !BU && (qU || !XU) && (0, aU.jsxs)(aU.Fragment, {
            children: [(0, aU.jsx)("div", {
              className: "CustomTextureFolderUploadIcon",
              children: (0, aU.jsx)(YU.d, {
                name: "up-from-bracket"
              })
            }), (0, aU.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions",
              children: GU((0, pU.h)() ? "customTexturePack:dropHere" : "customTexturePack:chooseZipInstructions")
            })]
          }), !BU && (0, aU.jsx)(pU.e, {
            disabled: tU,
            openFolderPicker: OU,
            onFiles: UU => {
              eU(UU)
            }
          })]
        })]
      })
    }
  },
  5617: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => EU,
      h: () => DU
    });
    var cU = zU(61),
      yU = zU(1494),
      QU = zU(1193),
      AU = zU(97),
      FU = zU(3498),
      oU = zU(1305);

    function DU() {
      return !(0, AU.isMobile)()
    }

    function EU(UU) {
      let {
        disabled: XU,
        openFolderPicker: zU,
        onFiles: AU
      } = UU;
      const {
        t: EU
      } = (0, QU.I)(), YU = (0, cU.useRef)(null);
      return (0, oU.jsxs)("div", {
        className: "PackPickButtons",
        "data-pad-mouse-only": !0,
        children: [(0, oU.jsx)("input", {
          ref: YU,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(UU) {
            const XU = Array.from(UU.target.files);
            UU.target.value = "", AU(XU)
          }
        }), DU() && (0, oU.jsx)(yU.f, {
          disabled: XU,
          onClick: zU,
          children: EU("general:chooseFolder")
        }), (0, oU.jsx)(yU.f, {
          disabled: XU,
          onClick: () => {
            (0, FU.g)(YU.current)
          },
          children: EU("general:chooseZip")
        })]
      })
    }
  },
  5540: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => pU,
      i: () => BU,
      j: () => aU,
      k: () => GU
    });
    var cU = zU(61),
      yU = zU(5548),
      QU = zU(4775),
      AU = zU(1420),
      FU = zU(5581),
      oU = zU(1106),
      DU = zU.n(oU),
      EU = zU(1410),
      YU = zU(1800),
      NU = zU(5588),
      IU = zU(1305);

    function pU(UU) {
      let {
        label: XU,
        onClick: zU,
        checked: cU,
        circleInfoText: yU,
        className: FU,
        disabled: oU,
        note: EU
      } = UU;
      return (0, IU.jsxs)("div", {
        "aria-disabled": oU || void 0,
        "data-pad-focusable": !0,
        className: DU()("SettingBox CheckboxContainer", {
          [FU]: FU,
          SettingBoxDisabled: oU
        }),
        onClick: () => {
          oU || zU(!cU)
        },
        children: [(0, IU.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, IU.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, IU.jsx)(QU.d, {
              className: "SettingsCheckbox",
              checked: cU,
              disabled: oU,
              onChange: () => {}
            })
          }), (0, IU.jsxs)("div", {
            className: "CheckboxText",
            children: [XU, yU && (0, IU.jsx)("span", {
              onClick: UU => UU.stopPropagation(),
              children: (0, IU.jsx)(AU.c, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: yU
              })
            })]
          })]
        }), EU && (0, IU.jsx)("div", {
          className: "SettingNote",
          children: EU
        })]
      })
    }

    function aU(UU) {
      let {
        name: XU,
        onChange: zU,
        min: yU,
        max: QU,
        step: FU,
        initValue: oU,
        circleInfoText: EU,
        format: YU,
        className: NU,
        padStep: pU,
        disabled: aU = !1,
        selectableMax: tU,
        cappedNote: gU,
        note: GU,
        onChangeComplete: BU
      } = UU;
      const [ZU, RU] = (0, cU.useState)(oU), PU = (0, cU.useRef)(oU);
      (0, cU.useEffect)((() => {
        PU.current = oU, RU(oU)
      }), [oU]);
      const WU = void 0 !== tU && tU < QU,
        dU = WU ? {
          "--slider-selectable": (tU - yU) / (QU - yU)
        } : void 0,
        LU = WU && gU ? gU : GU;
      return (0, IU.jsxs)("div", {
        className: DU()("SettingBox SettingsSliderDiv", {
          [NU]: NU,
          SettingBoxDisabled: aU,
          SliderCapped: WU
        }),
        style: dU,
        children: [(0, IU.jsxs)("div", {
          className: "SliderText",
          children: [`${XU}: ${YU?YU(ZU):ZU}`, EU && (0, IU.jsx)(AU.c, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: EU
          })]
        }), (0, IU.jsx)("div", {
          className: "SliderDiv",
          children: (0, IU.jsx)(kU, {
            value: ZU,
            min: yU,
            max: QU,
            step: FU,
            onChange: UU => {
              if (WU && UU >= tU && ZU === tU) return;
              const XU = WU ? Math.min(UU, tU) : UU;
              PU.current = XU, RU(XU), zU(XU)
            },
            onChangeComplete: BU && (() => {
              BU(PU.current)
            }),
            format: YU,
            padStep: pU,
            disabled: aU
          })
        }), LU && (0, IU.jsx)("div", {
          className: "SettingNote",
          children: LU
        })]
      })
    }
    const tU = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function gU(UU) {
      var XU;
      return (null !== (XU = String(UU).split(".")[1]) && void 0 !== XU ? XU : "").length
    }

    function kU(UU) {
      let {
        value: XU,
        min: zU,
        max: QU,
        step: AU,
        onChange: FU,
        orientation: oU,
        reverse: DU,
        setIsChanging: EU,
        tooltip: YU,
        labels: pU,
        handleLabel: aU,
        format: kU,
        onChangeStart: GU,
        onChangeComplete: BU,
        padStep: ZU,
        disabled: RU = !1
      } = UU;
      const PU = (0, cU.useRef)(null),
        WU = (0, cU.useRef)(null);
      (0, cU.useLayoutEffect)((() => {
        var UU, XU, zU;
        const cU = null !== (UU = null === (XU = PU.current) || void 0 === XU ? void 0 : XU.querySelector(".rangeslider")) && void 0 !== UU ? UU : null;
        null === cU || void 0 === cU || cU.setAttribute("data-pad-slider", ""), null === cU || void 0 === cU || cU.setAttribute("data-pad-focusable", ""), null === cU || void 0 === cU || null === (zU = cU.querySelector(".rangeslider__handle")) || void 0 === zU || zU.setAttribute("data-pad-slider-handle", ""), WU.current = cU
      }), []), (0, cU.useLayoutEffect)((() => {
        var UU, XU;
        RU ? null === (UU = WU.current) || void 0 === UU || UU.setAttribute("aria-disabled", "true") : null === (XU = WU.current) || void 0 === XU || XU.removeAttribute("aria-disabled")
      }), [RU]);
      const dU = Math.max(gU(AU), gU(zU)),
        LU = UU => {
          if (UU >= QU) return QU;
          if (UU <= zU) return zU;
          const XU = Number((Math.round((UU - zU) / AU) * AU + zU).toFixed(dU));
          return Math.min(QU, Math.max(zU, XU))
        },
        eU = (0, cU.useRef)(BU);
      eU.current = BU, (0, cU.useEffect)((() => {
        const UU = PU.current;
        if (!UU) return;
        const XU = UU => {
          var XU;
          tU.has(UU.key) && (null === (XU = eU.current) || void 0 === XU || XU.call(eU))
        };
        return UU.addEventListener("keyup", XU), () => {
          UU.removeEventListener("keyup", XU)
        }
      }), []);
      const CU = (0, cU.useRef)(!1);
      return (0, NU.h)(WU, {
        adjust: UU => {
          if (RU) return;
          const cU = null !== ZU && void 0 !== ZU ? ZU : Math.max(AU, Math.round((QU - zU) / 20 / AU) * AU),
            yU = LU(XU + UU * cU * (DU ? -1 : 1));
          yU !== XU && (null === GU || void 0 === GU || GU(), FU(yU), null === BU || void 0 === BU || BU())
        },
        setFraction: UU => {
          if (RU) return;
          const cU = LU(zU + (DU ? 1 - UU : UU) * (QU - zU));
          cU !== XU && (CU.current || (CU.current = !0, null === GU || void 0 === GU || GU()), FU(cU))
        },
        endDrag: () => {
          CU.current && (CU.current = !1, null === BU || void 0 === BU || BU())
        }
      }), (0, IU.jsx)("div", {
        ref: PU,
        style: {
          display: "contents"
        },
        children: (0, IU.jsx)(yU.c, {
          value: XU,
          min: zU,
          max: QU,
          step: AU,
          onChange: UU => {
            FU(LU(UU))
          },
          orientation: oU,
          reverse: DU,
          tooltip: YU,
          labels: pU,
          handleLabel: aU,
          format: kU,
          onChangeStart: () => {
            null === GU || void 0 === GU || GU(), null === EU || void 0 === EU || EU(!0)
          },
          onChangeComplete: () => {
            null === EU || void 0 === EU || EU(!1), null === BU || void 0 === BU || BU()
          }
        })
      })
    }
    async function GU() {
      const UU = EU.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await UU.getResult() && (0, YU.reloadBloxd)()
    }

    function BU(UU) {
      let {
        label: XU,
        options: zU,
        value: cU,
        onChange: yU,
        circleInfoText: QU
      } = UU;
      return (0, IU.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, IU.jsxs)("div", {
          className: "SliderText",
          children: [XU, QU && (0, IU.jsx)(AU.c, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: QU
          })]
        }), (0, IU.jsx)(FU.d, {
          ariaLabel: XU,
          options: zU,
          value: cU,
          onChange: yU
        })]
      })
    }
  },
  5536: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => tU,
      h: () => gU
    });
    var cU = zU(3526),
      yU = zU(2219),
      QU = zU(61),
      AU = zU(1106),
      FU = zU.n(AU),
      oU = zU(1384),
      DU = zU(3519),
      EU = zU(1410),
      YU = zU(5540),
      NU = zU(5593),
      IU = zU(687),
      pU = zU(5621),
      aU = zU(1305);

    function tU(UU) {
      var XU;
      let {
        setApplySettingsCallback: zU
      } = UU;
      const [, AU] = (0, QU.useReducer)((UU => UU + 1), 0), FU = (0, QU.useRef)(!1), oU = (0, QU.useRef)(null);

      function tU(UU, XU) {
        DU.c.setFromJson(UU, "player");
        const cU = DU.c.saveTexturePack();
        if (IU.H) {
          const UU = DU.c.toJson();
          cU.then((XU => {
            XU && (0, pU.d)(UU)
          }))
        } else FU.current ||= XU, oU.current !== DU.c.getId() || DU.c.getId() === yU.p.CUSTOM && FU.current ? zU((() => YU.k)) : zU(null);
        AU()
      }
      async function kU(UU) {
        if (DU.c.getId() !== UU.metaData.id) {
          if (DU.c.getId() === yU.p.CUSTOM && DU.c.getFromFolderName()) {
            const UU = EU.NotificationProvider.showPromptPopup({
              title: "settingsMenu:loseChangesTitle",
              subtitle: "settingsMenu:loseChangesSubtitle",
              confirmText: "general:continue",
              destructive: !0,
              confirmTooltip: "",
              cancelText: "general:cancel",
              cancelTooltip: ""
            });
            if (!0 !== await UU.getResult()) return
          }
          tU(UU, !1)
        }
      }(0, QU.useEffect)((() => {
        oU.current = DU.c.getId()
      }), []);
      const GU = cU.d,
        BU = [GU, ...Object.values(yU.p).filter((UU => UU !== GU))];
      return (0, aU.jsx)(aU.Fragment, {
        children: (0, aU.jsxs)("div", {
          className: "TexturePackCategory SettingsMenuRightInner",
          children: [(0, aU.jsx)("div", {
            className: "TexturePackList",
            children: BU.map((UU => (0, aU.jsx)(gU, {
              id: UU,
              isSelected: UU === DU.c.getId(),
              setSelected: kU
            }, UU)))
          }), DU.c.getId() === yU.p.CUSTOM && (0, aU.jsx)(NU.b, {
            folderName: null !== (XU = DU.c.getFromFolderName()) && void 0 !== XU ? XU : null,
            onTexturePackUpdated: function(UU) {
              tU(UU, !0)
            },
            packOwner: "player"
          })]
        })
      })
    }

    function gU(UU) {
      let {
        id: XU,
        isSelected: zU,
        setSelected: AU,
        disabled: DU = !1
      } = UU;
      const [EU, YU] = (0, QU.useState)(!0), [NU, IU] = (0, QU.useState)(""), [pU, tU] = (0, QU.useState)(""), [gU, kU] = (0, QU.useState)(""), GU = (0, QU.useRef)({});
      return (0, QU.useEffect)((() => {
        (0, cU.m)(XU).then((UU => {
          var XU;
          UU && (GU.current = UU, YU(!1), IU(GU.current.metaData.name), tU(GU.current.metaData.author), kU(null !== (XU = GU.current.metaData.previewImage) && void 0 !== XU ? XU : ""))
        })).catch((UU => {
          console.warn(`Failed to fetch texture pack ${XU}`, UU)
        }))
      }), [XU]), (0, aU.jsxs)("div", {
        "data-pad-focusable": !0,
        "aria-disabled": DU || void 0,
        className: FU()("TexturePack", {
          Selected: zU,
          Custom: XU === yU.p.CUSTOM,
          Disabled: DU
        }),
        onClick: () => {
          EU || DU || AU(GU.current)
        },
        children: [(0, aU.jsx)("div", {
          className: "TexturePackBg",
          style: {
            backgroundImage: gU ? `url(${gU})` : void 0
          }
        }), EU && (0, aU.jsx)("div", {
          className: "TexturePackName",
          children: (0, aU.jsx)(oU.b, {})
        }), !EU && NU && (0, aU.jsx)("div", {
          className: "TexturePackName",
          children: NU
        }), !EU && pU && (0, aU.jsx)("div", {
          className: "TexturePackAuthor",
          children: pU
        })]
      })
    }
  },
  5597: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => FU,
      e: () => AU,
      i: () => QU
    });
    var cU = zU(5603);
    const yU = [UU => UU.strict ? "strict" : "nonStrict", UU => UU.program];

    function QU(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const cU = {};
      for (const yU in zU) cU[yU] = `\0${yU}\0`;
      return UU(XU, cU).replace(/\0(\w+)\0/g, ((UU, XU) => zU[XU]))
    }

    function AU(UU) {
      return null === UU.file ? null : UU.line > 0 ? `${UU.file}:${UU.line}` : UU.file
    }

    function FU(UU) {
      const XU = new Map(UU.map((UU => [oU(UU).join("."), UU])));
      if (0 === XU.size) return [];
      const zU = EU([...XU.values()]);
      return 0 === zU[0].length ? [] : zU
    }

    function oU(UU) {
      return yU.map((XU => XU(UU)))
    }
    const DU = yU.map((UU => new Set(cU.e.map(UU)).size));

    function EU(UU) {
      const XU = yU.map((XU => new Set(UU.map(XU)))),
        zU = XU.reduce(((UU, XU) => UU * XU.size), 1),
        cU = XU.every(((UU, XU) => 1 === UU.size || UU.size === DU[XU]));
      if (zU === UU.length && cU) return [yU.filter(((UU, zU) => 1 === XU[zU].size)).map((XU => XU(UU[0])))];
      let QU = null;
      for (let AU = 0; AU < yU.length; AU++) {
        if (1 === XU[AU].size) continue;
        const zU = YU(UU, yU[AU]).flatMap(EU);
        (null === QU || zU.length < QU.length) && (QU = zU)
      }
      return QU
    }

    function YU(UU, XU) {
      const zU = new Map;
      for (const yU of UU) {
        var cU;
        const UU = XU(yU);
        zU.set(UU, [...null !== (cU = zU.get(UU)) && void 0 !== cU ? cU : [], yU])
      }
      return [...zU.values()]
    }
  },
  5581: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => AU
    });
    var cU = zU(1106),
      yU = zU.n(cU),
      QU = zU(1305);

    function AU(UU) {
      let {
        options: XU,
        value: zU,
        onChange: cU,
        ariaLabel: AU,
        className: FU,
        reselectable: oU = !1,
        keepsFocus: DU = !1,
        padTabs: EU
      } = UU;
      const YU = void 0 !== EU;
      return (0, QU.jsx)("div", {
        className: yU()("SegmentedToggle", FU),
        role: "group",
        "aria-label": AU,
        "data-pad-tabs": EU,
        children: XU.map((UU => {
          const XU = UU.value === zU;
          return (0, QU.jsx)("button", {
            type: "button",
            "aria-pressed": XU,
            "data-pad-tab": YU || void 0,
            "data-pad-selected": YU && XU ? "true" : void 0,
            "data-pad-default-focus": YU && XU || void 0,
            "aria-label": UU.ariaLabel,
            title: UU.ariaLabel,
            className: yU()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: XU
            }),
            onMouseDown: DU ? UU => {
              UU.preventDefault()
            } : void 0,
            onClick: () => {
              XU && !oU || cU(UU.value)
            },
            children: UU.label
          }, UU.value)
        }))
      })
    }
  },
  5588: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => QU,
      h: () => AU
    });
    var cU = zU(61);
    const yU = new WeakMap,
      QU = UU => {
        var XU;
        const zU = UU.closest("[data-pad-slider]");
        return zU && null !== (XU = yU.get(zU)) && void 0 !== XU ? XU : null
      },
      AU = (UU, XU) => {
        const zU = (0, cU.useRef)(XU);
        zU.current = XU, (0, cU.useEffect)((() => {
          if (UU.current) return ((UU, XU) => (yU.set(UU, XU), () => {
            yU.get(UU) === XU && yU.delete(UU)
          }))(UU.current, {
            adjust: UU => {
              zU.current.adjust(UU)
            },
            setFraction: UU => {
              zU.current.setFraction(UU)
            },
            endDrag: () => {
              zU.current.endDrag()
            }
          })
        }), [UU])
      }
  },
  5603: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => cU.j,
      e: () => yU,
      i: () => cU.o
    });
    var cU = zU(5608);
    const yU = [!1, !0].flatMap((UU => ["terrain", "liquid", "model"].map((XU => ({
      strict: UU,
      program: XU
    })))))
  },
  5629: (UU, XU, zU) => {
    function cU(UU, XU) {
      return yU(UU, XU)
    }

    function yU(UU, XU) {
      if (UU === XU) return !0;
      if ("object" !== typeof UU || "object" !== typeof XU || null === UU || null === XU || Array.isArray(UU) !== Array.isArray(XU)) return !1;
      const zU = UU,
        cU = XU,
        QU = Object.keys(zU);
      return QU.length === Object.keys(cU).length && QU.every((UU => Object.prototype.hasOwnProperty.call(cU, UU) && yU(zU[UU], cU[UU])))
    }
    zU.d(XU, {
      d: () => cU
    })
  },
  5621: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => AU,
      g: () => FU
    });
    var cU = zU(2219),
      yU = zU(5629);
    let QU = null;

    function AU(UU) {
      QU = {
        pack: UU.metaData.id === cU.b ? null : UU
      }
    }

    function FU(UU) {
      return !(null === QU || !(0, yU.d)(QU.pack, UU)) && (QU = null, !0)
    }
  },
  5608: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => FU,
      h: () => AU,
      j: () => cU,
      k: () => aU,
      m: () => YU,
      o: () => yU,
      q: () => QU,
      r: () => DU,
      u: () => EU,
      y: () => NU
    });
    const cU = 5;

    function yU(UU) {
      return UU === cU
    }

    function QU(UU) {
      return [...UU.features]
    }
    const AU = 262144,
      FU = 256,
      oU = 256;

    function DU(UU) {
      if ("object" !== typeof UU || null === UU || Array.isArray(UU)) return "The pack has no files.";
      const XU = [];
      for (const [zU, cU] of Object.entries(UU)) {
        if ("string" !== typeof cU) return `${zU} isn't text.`;
        XU.push({
          path: zU,
          source: cU
        })
      }
      return XU.sort(((UU, XU) => YU(UU.path, XU.path))),
        function(UU) {
          if (0 === UU.length) return "The pack has no .wgsl files.";
          if (UU.length > FU) return `The pack has more than ${FU} .wgsl files.`;
          const XU = new Set;
          for (const {
              path: zU
            }
            of UU) {
            const UU = IU(zU);
            if (null !== UU) return UU;
            if (XU.has(zU)) return `The pack has two files at ${zU}.`;
            XU.add(zU)
          }
          return NU(UU) > AU ? `The pack's .wgsl files are over ${AU/1024} KB in total.` : null
        }(XU) ?? XU
    }

    function EU(UU) {
      const XU = {};
      for (const zU of UU) XU[zU.path] = zU.source;
      return XU
    }

    function YU(UU, XU) {
      return UU < XU ? -1 : UU > XU ? 1 : 0
    }

    function NU(UU) {
      const XU = new TextEncoder;
      let zU = 0;
      for (const {
          source: cU
        }
        of UU) zU += XU.encode(cU).byteLength;
      return zU
    }

    function IU(UU) {
      if (!UU.toLowerCase().endsWith(".wgsl")) return `${UU} isn't a .wgsl file.`;
      if (UU.length > oU) return `A file path is over ${oU} characters.`;
      if (UU.includes("\\") || /[\u0000-\u001f]/.test(UU)) return `${UU} isn't a valid file path.`;
      return UU.split("/").some((UU => "" === UU || "." === UU || ".." === UU)) ? `${UU} isn't a valid file path.` : null
    }
    const pU = /^(.*)\[rot\[([1-4])$/;

    function aU(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const cU = new Map;
      XU.forEach(((UU, XU) => {
        let {
          numAnimStates: zU,
          animStartIdx: yU
        } = UU;
        for (let QU = 1; QU < zU; QU++) cU.set(yU + QU - 1, XU)
      }));
      const yU = Object.entries(UU),
        QU = new Map;
      for (const [aU, tU] of yU) {
        const UU = pU.exec(aU);
        "1" === UU?.[2] && QU.set(UU[1], tU + 1)
      }
      const AU = UU => {
          const XU = pU.exec(UU);
          return XU && QU.has(XU[1]) ? {
            root: XU[1],
            rotation: Number(XU[2]) - 1
          } : null
        },
        FU = new Set(yU.map((UU => {
          let [XU] = UU;
          return AU(XU)?.root ?? XU
        }))),
        oU = (UU, zU) => {
          const cU = UU.replace(/_?0$/, "");
          return (XU[zU]?.numAnimStates ?? 0) > 1 && !FU.has(cU) ? cU : UU
        },
        DU = new Map;
      for (const [pU, aU] of yU) DU.set(aU, oU(AU(pU)?.root ?? pU, aU));
      const EU = yU.reduce(((UU, XU) => {
          let [, zU] = XU;
          return Math.max(UU, zU + 1)
        }), 0),
        YU = Array.from({
          length: EU
        }, ((UU, XU) => ({
          id: XU + 1,
          rotation: 0
        }))),
        NU = new Map,
        IU = new Map;
      for (const [pU, aU] of yU) {
        const UU = AU(pU),
          XU = cU.get(aU);
        if (void 0 !== XU) {
          const zU = DU.get(XU);
          IU.set(pU, {
            name: pU,
            texture: zU,
            kind: "frame"
          }), UU && !IU.has(UU.root) && IU.set(UU.root, {
            name: UU.root,
            texture: zU,
            kind: "frame"
          });
          continue
        }
        const zU = DU.get(aU),
          yU = UU?.root ?? pU;
        if (zU !== yU && IU.set(yU, {
            name: yU,
            texture: zU,
            kind: "frame"
          }), UU) {
          const XU = QU.get(UU.root);
          YU[aU] = {
            id: XU,
            rotation: UU.rotation
          }, NU.set(zU, XU), IU.set(pU, {
            name: pU,
            texture: zU,
            kind: "rotation"
          })
        } else NU.set(zU, aU + 1)
      }
      for (const pU of NU.keys()) IU.delete(pU);
      for (const [pU, aU] of zU) {
        const UU = NU.get(aU);
        void 0 === UU || NU.has(pU) || (NU.set(pU, UU), IU.delete(pU))
      }
      return {
        named: [...NU].sort(((UU, XU) => {
          let [zU] = UU, [cU] = XU;
          return zU < cU ? -1 : zU > cU ? 1 : 0
        })).map((UU => {
          let [XU, zU] = UU;
          return {
            name: XU,
            id: zU
          }
        })),
        aliases: [...IU.values()],
        layers: YU
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);