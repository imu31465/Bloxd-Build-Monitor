export const id = 118;
export const ids = [118];
export const modules = {
  5668: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => xW
    });
    var mW = OW(1089),
      EW = OW.n(mW),
      NW = OW(1391),
      PW = OW(1383),
      LW = OW(4746),
      cW = OW(136),
      wW = OW(4787),
      tW = OW(4776),
      ZW = OW(1283);

    function xW(WW) {
      let {
        game: iW
      } = WW;
      const OW = (0, cW.is99NightsCrazyGamesBundle)() ? "large" : "small",
        mW = (0, wW.f)(iW, OW),
        xW = (0, LW.f)(mW),
        lW = void 0 !== xW.blurhash;
      return (0, ZW.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [xW.isLoading && !lW && (0, ZW.jsx)(PW.d, {
          loaderType: "Secondary"
        }), !xW.failed && (null !== xW.src || lW) && (0, ZW.jsx)("div", {
          className: EW()("SchematicImage", tW.j, {
            SchematicImageFadeIn: xW.fadeIn && !lW
          }),
          style: (0, tW.f)(xW),
          children: (0, ZW.jsx)(tW.b, {
            image: xW
          })
        }), xW.failed && (0, ZW.jsx)("div", {
          className: "SchematicImageError",
          children: (0, ZW.jsx)(NW.c, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  5947: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => jW
    });
    var mW = OW(62),
      EW = OW(1089),
      NW = OW.n(EW),
      PW = OW(5864),
      LW = OW(1383),
      cW = OW(1172),
      wW = OW(4344),
      tW = OW(4464),
      ZW = OW(1391),
      xW = OW(4349),
      lW = OW(5952),
      AW = OW(5978),
      bW = OW(1283);

    function jW(WW) {
      let {
        folderName: iW,
        onTexturePackUpdated: EW,
        disabled: jW = !1,
        maxFileSizeMb: UW,
        packOwner: kW
      } = WW;
      const {
        t: sW
      } = (0, cW.B)(), [MW, KW] = (0, mW.useState)(!1), [SW, YW] = (0, mW.useState)(null), [yW, TW] = (0, mW.useState)(null), JW = (0, mW.useRef)(null);
      async function hW(WW) {
        KW(!0);
        try {
          const iW = await (0, wW.m)(WW);
          if ("customGame" === kW && (0, tW.q)(iW)) return void YW(sW(tW.e));
          if (void 0 !== UW) {
            const WW = JSON.stringify(iW).length / 1048576;
            if (WW > UW) return void YW(sW("customTexturePack:packTooBig", {
              size: WW.toFixed(1),
              max: UW
            }))
          }
          YW(null), TW(null), EW(iW), JW.current = iW,
            function(WW, iW) {
              const mW = WW.modelOverrides;
              mW && Promise.all([OW.e(233), OW.e(232)]).then((() => OW(35316))).then((OW => {
                let {
                  packDisplayName: EW,
                  refusedPackModels: NW,
                  packModelSummary: PW
                } = OW;
                const LW = EW(WW.metaData);
                iW(PW(LW, NW(LW, mW, !1)))
              })).catch((WW => {
                console.error("Checking the texture pack's models failed:", WW)
              }))
            }(iW, (WW => {
              JW.current === iW && TW(WW)
            }))
        } catch (iW) {
          if (iW instanceof xW.e) {
            const WW = "customTexturePack:invalidPack" !== iW.translationKey || (0, AW.e)() ? iW.translationKey : "customTexturePack:invalidPackZip";
            YW((0, lW.h)(sW, WW, iW.params))
          } else console.error("Couldn't read the texture pack", iW), YW(sW("customTexturePack:errorTitle"))
        } finally {
          KW(!1)
        }
      }
      const {
        getRootProps: HW,
        getInputProps: nW,
        isDragActive: uW,
        open: oW
      } = (0, PW.e)({
        onDrop: hW,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: jW
      });
      return (0, bW.jsxs)("div", {
        className: "CustomTexturePackContainer",
        children: [(0, bW.jsxs)("div", {
          className: "CustomTextureWarning",
          children: [sW("settingsMenu:customTextureWarning"), ".", (0, bW.jsx)("br", {}), sW("settingsMenu:viewDocumentation"), ":", " ", (0, bW.jsx)("a", {
            href: "https://github.com/Bloxdy/texturePacks",
            target: "_blank",
            rel: "noreferrer",
            children: "github.com/Bloxdy/texturePacks"
          })]
        }), SW && (0, bW.jsxs)("div", {
          className: "CustomTextureError",
          children: [sW("general:error"), ": ", SW]
        }), yW && (0, bW.jsx)("div", {
          className: "CustomTextureError",
          children: yW
        }), (0, bW.jsxs)("div", {
          ...HW({
            className: NW()("CustomTextureFolderUpload", {
              ActiveDrag: uW,
              Disabled: jW
            })
          }),
          children: [(0, bW.jsx)("input", {
            ...nW({
              webkitdirectory: "true"
            })
          }), MW && (0, bW.jsx)("div", {
            className: "CustomTextureFolderUploadLoading",
            children: (0, bW.jsx)(LW.d, {})
          }), !MW && !uW && iW && (0, bW.jsxs)(bW.Fragment, {
            children: [(0, bW.jsx)("div", {
              className: "CustomTextureFolderUploadIcon Active",
              children: (0, bW.jsx)(ZW.c, {
                name: "folder-image"
              })
            }), (0, bW.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions Active",
              children: iW
            })]
          }), !MW && (uW || !iW) && (0, bW.jsxs)(bW.Fragment, {
            children: [(0, bW.jsx)("div", {
              className: "CustomTextureFolderUploadIcon",
              children: (0, bW.jsx)(ZW.c, {
                name: "up-from-bracket"
              })
            }), (0, bW.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions",
              children: sW((0, AW.e)() ? "customTexturePack:dropHere" : "customTexturePack:chooseZipInstructions")
            })]
          }), !MW && (0, bW.jsx)(AW.b, {
            disabled: jW,
            openFolderPicker: oW,
            onFiles: WW => {
              hW(WW)
            }
          })]
        })]
      })
    }
  },
  5978: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => tW,
      e: () => wW
    });
    var mW = OW(62),
      EW = OW(1532),
      NW = OW(1172),
      PW = OW(100),
      LW = OW(4304),
      cW = OW(1283);

    function wW() {
      return !(0, PW.isMobile)()
    }

    function tW(WW) {
      let {
        disabled: iW,
        openFolderPicker: OW,
        onFiles: PW
      } = WW;
      const {
        t: tW
      } = (0, NW.B)(), ZW = (0, mW.useRef)(null);
      return (0, cW.jsxs)("div", {
        className: "PackPickButtons",
        "data-pad-mouse-only": !0,
        children: [(0, cW.jsx)("input", {
          ref: ZW,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(WW) {
            const iW = Array.from(WW.target.files);
            WW.target.value = "", PW(iW)
          }
        }), wW() && (0, cW.jsx)(EW.f, {
          disabled: iW,
          onClick: OW,
          children: tW("general:chooseFolder")
        }), (0, cW.jsx)(EW.f, {
          disabled: iW,
          onClick: () => {
            (0, LW.f)(ZW.current)
          },
          children: tW("general:chooseZip")
        })]
      })
    }
  },
  5910: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => AW,
      h: () => MW,
      k: () => bW,
      n: () => sW
    });
    var mW = OW(62),
      EW = OW(5919),
      NW = OW(5041),
      PW = OW(1434),
      LW = OW(4171),
      cW = OW(1089),
      wW = OW.n(cW),
      tW = OW(1422),
      ZW = OW(1856),
      xW = OW(5940),
      lW = OW(1283);

    function AW(WW) {
      let {
        label: iW,
        onClick: OW,
        checked: mW,
        circleInfoText: EW,
        className: LW,
        disabled: cW,
        note: tW
      } = WW;
      return (0, lW.jsxs)("div", {
        "aria-disabled": cW || void 0,
        "data-pad-focusable": !0,
        className: wW()("SettingBox CheckboxContainer", {
          [LW]: LW,
          SettingBoxDisabled: cW
        }),
        onClick: () => {
          cW || OW(!mW)
        },
        children: [(0, lW.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, lW.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, lW.jsx)(NW.e, {
              className: "SettingsCheckbox",
              checked: mW,
              disabled: cW,
              onChange: () => {}
            })
          }), (0, lW.jsxs)("div", {
            className: "CheckboxText",
            children: [iW, EW && (0, lW.jsx)("span", {
              onClick: WW => WW.stopPropagation(),
              children: (0, lW.jsx)(PW.d, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: EW
              })
            })]
          })]
        }), tW && (0, lW.jsx)("div", {
          className: "SettingNote",
          children: tW
        })]
      })
    }

    function bW(WW) {
      let {
        name: iW,
        onChange: OW,
        min: EW,
        max: NW,
        step: LW,
        initValue: cW,
        circleInfoText: tW,
        format: ZW,
        className: xW,
        padStep: AW,
        disabled: bW = !1,
        selectableMax: jW,
        cappedNote: UW,
        note: sW,
        onChangeComplete: MW
      } = WW;
      const [KW, SW] = (0, mW.useState)(cW), YW = (0, mW.useRef)(cW);
      (0, mW.useEffect)((() => {
        YW.current = cW, SW(cW)
      }), [cW]);
      const yW = void 0 !== jW && jW < NW,
        TW = yW ? {
          "--slider-selectable": (jW - EW) / (NW - EW)
        } : void 0,
        JW = yW && UW ? UW : sW;
      return (0, lW.jsxs)("div", {
        className: wW()("SettingBox SettingsSliderDiv", {
          [xW]: xW,
          SettingBoxDisabled: bW,
          SliderCapped: yW
        }),
        style: TW,
        children: [(0, lW.jsxs)("div", {
          className: "SliderText",
          children: [`${iW}: ${ZW?ZW(KW):KW}`, tW && (0, lW.jsx)(PW.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: tW
          })]
        }), (0, lW.jsx)("div", {
          className: "SliderDiv",
          children: (0, lW.jsx)(kW, {
            value: KW,
            min: EW,
            max: NW,
            step: LW,
            onChange: WW => {
              if (yW && WW >= jW && KW === jW) return;
              const iW = yW ? Math.min(WW, jW) : WW;
              YW.current = iW, SW(iW), OW(iW)
            },
            onChangeComplete: MW && (() => {
              MW(YW.current)
            }),
            format: ZW,
            padStep: AW,
            disabled: bW
          })
        }), JW && (0, lW.jsx)("div", {
          className: "SettingNote",
          children: JW
        })]
      })
    }
    const jW = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function UW(WW) {
      var iW;
      return (null !== (iW = String(WW).split(".")[1]) && void 0 !== iW ? iW : "").length
    }

    function kW(WW) {
      let {
        value: iW,
        min: OW,
        max: NW,
        step: PW,
        onChange: LW,
        orientation: cW,
        reverse: wW,
        setIsChanging: tW,
        tooltip: ZW,
        labels: AW,
        handleLabel: bW,
        format: kW,
        onChangeStart: sW,
        onChangeComplete: MW,
        padStep: KW,
        disabled: SW = !1
      } = WW;
      const YW = (0, mW.useRef)(null),
        yW = (0, mW.useRef)(null);
      (0, mW.useLayoutEffect)((() => {
        var WW, iW, OW;
        const mW = null !== (WW = null === (iW = YW.current) || void 0 === iW ? void 0 : iW.querySelector(".rangeslider")) && void 0 !== WW ? WW : null;
        null === mW || void 0 === mW || mW.setAttribute("data-pad-slider", ""), null === mW || void 0 === mW || mW.setAttribute("data-pad-focusable", ""), null === mW || void 0 === mW || null === (OW = mW.querySelector(".rangeslider__handle")) || void 0 === OW || OW.setAttribute("data-pad-slider-handle", ""), yW.current = mW
      }), []), (0, mW.useLayoutEffect)((() => {
        var WW, iW;
        SW ? null === (WW = yW.current) || void 0 === WW || WW.setAttribute("aria-disabled", "true") : null === (iW = yW.current) || void 0 === iW || iW.removeAttribute("aria-disabled")
      }), [SW]);
      const TW = Math.max(UW(PW), UW(OW)),
        JW = WW => {
          if (WW >= NW) return NW;
          if (WW <= OW) return OW;
          const iW = Number((Math.round((WW - OW) / PW) * PW + OW).toFixed(TW));
          return Math.min(NW, Math.max(OW, iW))
        },
        hW = (0, mW.useRef)(MW);
      hW.current = MW, (0, mW.useEffect)((() => {
        const WW = YW.current;
        if (!WW) return;
        const iW = WW => {
          var iW;
          jW.has(WW.key) && (null === (iW = hW.current) || void 0 === iW || iW.call(hW))
        };
        return WW.addEventListener("keyup", iW), () => {
          WW.removeEventListener("keyup", iW)
        }
      }), []);
      const HW = (0, mW.useRef)(!1);
      return (0, xW.d)(yW, {
        adjust: WW => {
          if (SW) return;
          const mW = null !== KW && void 0 !== KW ? KW : Math.max(PW, Math.round((NW - OW) / 20 / PW) * PW),
            EW = JW(iW + WW * mW * (wW ? -1 : 1));
          EW !== iW && (null === sW || void 0 === sW || sW(), LW(EW), null === MW || void 0 === MW || MW())
        },
        setFraction: WW => {
          if (SW) return;
          const mW = JW(OW + (wW ? 1 - WW : WW) * (NW - OW));
          mW !== iW && (HW.current || (HW.current = !0, null === sW || void 0 === sW || sW()), LW(mW))
        },
        endDrag: () => {
          HW.current && (HW.current = !1, null === MW || void 0 === MW || MW())
        }
      }), (0, lW.jsx)("div", {
        ref: YW,
        style: {
          display: "contents"
        },
        children: (0, lW.jsx)(EW.c, {
          value: iW,
          min: OW,
          max: NW,
          step: PW,
          onChange: WW => {
            LW(JW(WW))
          },
          orientation: cW,
          reverse: wW,
          tooltip: ZW,
          labels: AW,
          handleLabel: bW,
          format: kW,
          onChangeStart: () => {
            null === sW || void 0 === sW || sW(), null === tW || void 0 === tW || tW(!0)
          },
          onChangeComplete: () => {
            null === tW || void 0 === tW || tW(!1), null === MW || void 0 === MW || MW()
          }
        })
      })
    }
    async function sW() {
      const WW = tW.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await WW.getResult() && (0, ZW.reloadBloxd)()
    }

    function MW(WW) {
      let {
        label: iW,
        options: OW,
        value: mW,
        onChange: EW,
        circleInfoText: NW
      } = WW;
      return (0, lW.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, lW.jsxs)("div", {
          className: "SliderText",
          children: [iW, NW && (0, lW.jsx)(PW.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: NW
          })]
        }), (0, lW.jsx)(LW.c, {
          ariaLabel: iW,
          options: OW,
          value: mW,
          onChange: EW
        })]
      })
    }
  },
  5903: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => jW,
      d: () => UW
    });
    var mW = OW(4344),
      EW = OW(2300),
      NW = OW(62),
      PW = OW(1089),
      LW = OW.n(PW),
      cW = OW(1383),
      wW = OW(4337),
      tW = OW(1422),
      ZW = OW(5910),
      xW = OW(5947),
      lW = OW(671),
      AW = OW(5981),
      bW = OW(1283);

    function jW(WW) {
      var iW;
      let {
        setApplySettingsCallback: OW
      } = WW;
      const [, PW] = (0, NW.useReducer)((WW => WW + 1), 0), LW = (0, NW.useRef)(!1), cW = (0, NW.useRef)(null);

      function jW(WW, iW) {
        wW.d.setFromJson(WW, "player");
        const mW = wW.d.saveTexturePack();
        if (lW.K) {
          const WW = wW.d.toJson();
          mW.then((iW => {
            iW && (0, AW.c)(WW)
          }))
        } else LW.current ||= iW, cW.current !== wW.d.getId() || wW.d.getId() === EW.n.CUSTOM && LW.current ? OW((() => ZW.n)) : OW(null);
        PW()
      }
      async function kW(WW) {
        if (wW.d.getId() !== WW.metaData.id) {
          if (wW.d.getId() === EW.n.CUSTOM && wW.d.getFromFolderName()) {
            const WW = tW.NotificationProvider.showPromptPopup({
              title: "settingsMenu:loseChangesTitle",
              subtitle: "settingsMenu:loseChangesSubtitle",
              confirmText: "general:continue",
              destructive: !0,
              confirmTooltip: "",
              cancelText: "general:cancel",
              cancelTooltip: ""
            });
            if (!0 !== await WW.getResult()) return
          }
          jW(WW, !1)
        }
      }(0, NW.useEffect)((() => {
        cW.current = wW.d.getId()
      }), []);
      const sW = mW.d,
        MW = [sW, ...Object.values(EW.n).filter((WW => WW !== sW))];
      return (0, bW.jsx)(bW.Fragment, {
        children: (0, bW.jsxs)("div", {
          className: "TexturePackCategory SettingsMenuRightInner",
          children: [(0, bW.jsx)("div", {
            className: "TexturePackList",
            children: MW.map((WW => (0, bW.jsx)(UW, {
              id: WW,
              isSelected: WW === wW.d.getId(),
              setSelected: kW
            }, WW)))
          }), wW.d.getId() === EW.n.CUSTOM && (0, bW.jsx)(xW.c, {
            folderName: null !== (iW = wW.d.getFromFolderName()) && void 0 !== iW ? iW : null,
            onTexturePackUpdated: function(WW) {
              jW(WW, !0)
            },
            packOwner: "player"
          })]
        })
      })
    }

    function UW(WW) {
      let {
        id: iW,
        isSelected: OW,
        setSelected: PW,
        disabled: wW = !1
      } = WW;
      const [tW, ZW] = (0, NW.useState)(!0), [xW, lW] = (0, NW.useState)(""), [AW, jW] = (0, NW.useState)(""), [UW, kW] = (0, NW.useState)(""), sW = (0, NW.useRef)({});
      return (0, NW.useEffect)((() => {
        (0, mW.j)(iW).then((WW => {
          var iW;
          WW && (sW.current = WW, ZW(!1), lW(sW.current.metaData.name), jW(sW.current.metaData.author), kW(null !== (iW = sW.current.metaData.previewImage) && void 0 !== iW ? iW : ""))
        })).catch((WW => {
          console.warn(`Failed to fetch texture pack ${iW}`, WW)
        }))
      }), [iW]), (0, bW.jsxs)("div", {
        "data-pad-focusable": !0,
        "aria-disabled": wW || void 0,
        className: LW()("TexturePack", {
          Selected: OW,
          Custom: iW === EW.n.CUSTOM,
          Disabled: wW
        }),
        onClick: () => {
          tW || wW || PW(sW.current)
        },
        children: [(0, bW.jsx)("div", {
          className: "TexturePackBg",
          style: {
            backgroundImage: UW ? `url(${UW})` : void 0
          }
        }), tW && (0, bW.jsx)("div", {
          className: "TexturePackName",
          children: (0, bW.jsx)(cW.d, {})
        }), !tW && xW && (0, bW.jsx)("div", {
          className: "TexturePackName",
          children: xW
        }), !tW && AW && (0, bW.jsx)("div", {
          className: "TexturePackAuthor",
          children: AW
        })]
      })
    }
  },
  5952: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => LW,
      e: () => PW,
      h: () => NW
    });
    var mW = OW(5961);
    const EW = [WW => WW.strict ? "strict" : "nonStrict", WW => WW.program];

    function NW(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const mW = {};
      for (const EW in OW) mW[EW] = `\0${EW}\0`;
      return WW(iW, mW).replace(/\0(\w+)\0/g, ((WW, iW) => OW[iW]))
    }

    function PW(WW) {
      return null === WW.file ? null : WW.line > 0 ? `${WW.file}:${WW.line}` : WW.file
    }

    function LW(WW) {
      const iW = new Map(WW.map((WW => [cW(WW).join("."), WW])));
      if (0 === iW.size) return [];
      const OW = tW([...iW.values()]);
      return 0 === OW[0].length ? [] : OW
    }

    function cW(WW) {
      return EW.map((iW => iW(WW)))
    }
    const wW = EW.map((WW => new Set(mW.c.map(WW)).size));

    function tW(WW) {
      const iW = EW.map((iW => new Set(WW.map(iW)))),
        OW = iW.reduce(((WW, iW) => WW * iW.size), 1),
        mW = iW.every(((WW, iW) => 1 === WW.size || WW.size === wW[iW]));
      if (OW === WW.length && mW) return [EW.filter(((WW, OW) => 1 === iW[OW].size)).map((iW => iW(WW[0])))];
      let NW = null;
      for (let PW = 0; PW < EW.length; PW++) {
        if (1 === iW[PW].size) continue;
        const OW = ZW(WW, EW[PW]).flatMap(tW);
        (null === NW || OW.length < NW.length) && (NW = OW)
      }
      return NW
    }

    function ZW(WW, iW) {
      const OW = new Map;
      for (const EW of WW) {
        var mW;
        const WW = iW(EW);
        OW.set(WW, [...null !== (mW = OW.get(WW)) && void 0 !== mW ? mW : [], EW])
      }
      return [...OW.values()]
    }
  },
  5940: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => NW,
      d: () => PW
    });
    var mW = OW(62);
    const EW = new WeakMap,
      NW = WW => {
        var iW;
        const OW = WW.closest("[data-pad-slider]");
        return OW && null !== (iW = EW.get(OW)) && void 0 !== iW ? iW : null
      },
      PW = (WW, iW) => {
        const OW = (0, mW.useRef)(iW);
        OW.current = iW, (0, mW.useEffect)((() => {
          if (WW.current) return ((WW, iW) => (EW.set(WW, iW), () => {
            EW.get(WW) === iW && EW.delete(WW)
          }))(WW.current, {
            adjust: WW => {
              OW.current.adjust(WW)
            },
            setFraction: WW => {
              OW.current.setFraction(WW)
            },
            endDrag: () => {
              OW.current.endDrag()
            }
          })
        }), [WW])
      }
  },
  5961: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => mW.l,
      c: () => EW,
      g: () => mW.r
    });
    var mW = OW(5970);
    const EW = [!1, !0].flatMap((WW => ["terrain", "liquid", "model"].map((iW => ({
      strict: WW,
      program: iW
    })))))
  },
  5984: (WW, iW, OW) => {
    function mW(WW, iW) {
      return EW(WW, iW)
    }

    function EW(WW, iW) {
      if (WW === iW) return !0;
      if ("object" !== typeof WW || "object" !== typeof iW || null === WW || null === iW || Array.isArray(WW) !== Array.isArray(iW)) return !1;
      const OW = WW,
        mW = iW,
        NW = Object.keys(OW);
      return NW.length === Object.keys(mW).length && NW.every((WW => Object.prototype.hasOwnProperty.call(mW, WW) && EW(OW[WW], mW[WW])))
    }
    OW.d(iW, {
      c: () => mW
    })
  },
  5981: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => PW,
      e: () => LW
    });
    var mW = OW(2300),
      EW = OW(5984);
    let NW = null;

    function PW(WW) {
      NW = {
        pack: WW.metaData.id === mW.d ? null : WW
      }
    }

    function LW(WW) {
      return !(null === NW || !(0, EW.c)(NW.pack, WW)) && (NW = null, !0)
    }
  },
  5970: (WW, iW, OW) => {
    OW.d(iW, {
      A: () => tW,
      D: () => xW,
      e: () => LW,
      i: () => PW,
      l: () => mW,
      o: () => bW,
      p: () => ZW,
      r: () => EW,
      v: () => NW,
      x: () => wW
    });
    const mW = 5;

    function EW(WW) {
      return WW === mW
    }

    function NW(WW) {
      return [...WW.features]
    }
    const PW = 262144,
      LW = 256,
      cW = 256;

    function wW(WW) {
      if ("object" !== typeof WW || null === WW || Array.isArray(WW)) return "The pack has no files.";
      const iW = [];
      for (const [OW, mW] of Object.entries(WW)) {
        if ("string" !== typeof mW) return `${OW} isn't text.`;
        iW.push({
          path: OW,
          source: mW
        })
      }
      return iW.sort(((WW, iW) => ZW(WW.path, iW.path))),
        function(WW) {
          if (0 === WW.length) return "The pack has no .wgsl files.";
          if (WW.length > LW) return `The pack has more than ${LW} .wgsl files.`;
          const iW = new Set;
          for (const {
              path: OW
            }
            of WW) {
            const WW = lW(OW);
            if (null !== WW) return WW;
            if (iW.has(OW)) return `The pack has two files at ${OW}.`;
            iW.add(OW)
          }
          return xW(WW) > PW ? `The pack's .wgsl files are over ${PW/1024} KB in total.` : null
        }(iW) ?? iW
    }

    function tW(WW) {
      const iW = {};
      for (const OW of WW) iW[OW.path] = OW.source;
      return iW
    }

    function ZW(WW, iW) {
      return WW < iW ? -1 : WW > iW ? 1 : 0
    }

    function xW(WW) {
      const iW = new TextEncoder;
      let OW = 0;
      for (const {
          source: mW
        }
        of WW) OW += iW.encode(mW).byteLength;
      return OW
    }

    function lW(WW) {
      if (!WW.toLowerCase().endsWith(".wgsl")) return `${WW} isn't a .wgsl file.`;
      if (WW.length > cW) return `A file path is over ${cW} characters.`;
      if (WW.includes("\\") || /[\u0000-\u001f]/.test(WW)) return `${WW} isn't a valid file path.`;
      return WW.split("/").some((WW => "" === WW || "." === WW || ".." === WW)) ? `${WW} isn't a valid file path.` : null
    }
    const AW = /^(.*)\[rot\[([1-4])$/;

    function bW(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const mW = new Map;
      iW.forEach(((WW, iW) => {
        let {
          numAnimStates: OW,
          animStartIdx: EW
        } = WW;
        for (let NW = 1; NW < OW; NW++) mW.set(EW + NW - 1, iW)
      }));
      const EW = Object.entries(WW),
        NW = new Map;
      for (const [bW, jW] of EW) {
        const WW = AW.exec(bW);
        "1" === WW?.[2] && NW.set(WW[1], jW + 1)
      }
      const PW = WW => {
          const iW = AW.exec(WW);
          return iW && NW.has(iW[1]) ? {
            root: iW[1],
            rotation: Number(iW[2]) - 1
          } : null
        },
        LW = new Set(EW.map((WW => {
          let [iW] = WW;
          return PW(iW)?.root ?? iW
        }))),
        cW = (WW, OW) => {
          const mW = WW.replace(/_?0$/, "");
          return (iW[OW]?.numAnimStates ?? 0) > 1 && !LW.has(mW) ? mW : WW
        },
        wW = new Map;
      for (const [AW, bW] of EW) wW.set(bW, cW(PW(AW)?.root ?? AW, bW));
      const tW = EW.reduce(((WW, iW) => {
          let [, OW] = iW;
          return Math.max(WW, OW + 1)
        }), 0),
        ZW = Array.from({
          length: tW
        }, ((WW, iW) => ({
          id: iW + 1,
          rotation: 0
        }))),
        xW = new Map,
        lW = new Map;
      for (const [AW, bW] of EW) {
        const WW = PW(AW),
          iW = mW.get(bW);
        if (void 0 !== iW) {
          const OW = wW.get(iW);
          lW.set(AW, {
            name: AW,
            texture: OW,
            kind: "frame"
          }), WW && !lW.has(WW.root) && lW.set(WW.root, {
            name: WW.root,
            texture: OW,
            kind: "frame"
          });
          continue
        }
        const OW = wW.get(bW),
          EW = WW?.root ?? AW;
        if (OW !== EW && lW.set(EW, {
            name: EW,
            texture: OW,
            kind: "frame"
          }), WW) {
          const iW = NW.get(WW.root);
          ZW[bW] = {
            id: iW,
            rotation: WW.rotation
          }, xW.set(OW, iW), lW.set(AW, {
            name: AW,
            texture: OW,
            kind: "rotation"
          })
        } else xW.set(OW, bW + 1)
      }
      for (const AW of xW.keys()) lW.delete(AW);
      for (const [AW, bW] of OW) {
        const WW = xW.get(bW);
        void 0 === WW || xW.has(AW) || (xW.set(AW, WW), lW.delete(AW))
      }
      return {
        named: [...xW].sort(((WW, iW) => {
          let [OW] = WW, [mW] = iW;
          return OW < mW ? -1 : OW > mW ? 1 : 0
        })).map((WW => {
          let [iW, OW] = WW;
          return {
            name: iW,
            id: OW
          }
        })),
        aliases: [...lW.values()],
        layers: ZW
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);