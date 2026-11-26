export const id = 116;
export const ids = [116];
export const modules = {
  5383: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => GH
    });
    var AH = LH(1038),
      rH = LH.n(AH),
      SH = LH(1315),
      hH = LH(1313),
      tH = LH(3892),
      zH = LH(120),
      CH = LH(3924),
      EH = LH(3917),
      XH = LH(1225);

    function GH(HH) {
      let {
        game: BH
      } = HH;
      const LH = (0, zH.is99NightsCrazyGamesBundle)() ? "large" : "small",
        AH = (0, CH.h)(BH, LH),
        GH = (0, tH.g)(AH),
        YH = void 0 !== GH.blurhash;
      return (0, XH.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [GH.isLoading && !YH && (0, XH.jsx)(hH.d, {
          loaderType: "Secondary"
        }), !GH.failed && (null !== GH.src || YH) && (0, XH.jsx)("div", {
          className: rH()("SchematicImage", EH.i, {
            SchematicImageFadeIn: GH.fadeIn && !YH
          }),
          style: (0, EH.f)(GH),
          children: (0, XH.jsx)(EH.e, {
            image: GH
          })
        }), GH.failed && (0, XH.jsx)("div", {
          className: "SchematicImageError",
          children: (0, XH.jsx)(SH.c, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  5517: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => WH
    });
    var AH = LH(45),
      rH = LH(1038),
      SH = LH.n(rH),
      hH = LH(5446),
      tH = LH(1313),
      zH = LH(1123),
      CH = LH(3508),
      EH = LH(3651),
      XH = LH(1315),
      GH = LH(3514),
      YH = LH(5520),
      uH = LH(5539),
      QH = LH(1225);

    function WH(HH) {
      let {
        folderName: BH,
        onTexturePackUpdated: rH,
        disabled: WH = !1,
        maxFileSizeMb: MH,
        packOwner: xH
      } = HH;
      const {
        t: vH
      } = (0, zH.B)(), [PH, TH] = (0, AH.useState)(!1), [UH, VH] = (0, AH.useState)(null), [OH, bH] = (0, AH.useState)(null), kH = (0, AH.useRef)(null);
      async function mH(HH) {
        TH(!0);
        try {
          const BH = await (0, CH.q)(HH);
          if ("customGame" === xH && (0, EH.j)(BH)) return void VH(vH(EH.d));
          if (void 0 !== MH) {
            const HH = JSON.stringify(BH).length / 1048576;
            if (HH > MH) return void VH(vH("customTexturePack:packTooBig", {
              size: HH.toFixed(1),
              max: MH
            }))
          }
          VH(null), bH(null), rH(BH), kH.current = BH,
            function(HH, BH) {
              const AH = HH.modelOverrides;
              AH && Promise.all([LH.e(227), LH.e(226)]).then((() => LH(35061))).then((LH => {
                let {
                  packDisplayName: rH,
                  refusedPackModels: SH,
                  packModelSummary: hH
                } = LH;
                const tH = rH(HH.metaData);
                BH(hH(tH, SH(tH, AH, !1)))
              })).catch((HH => {
                console.error("Checking the texture pack's models failed:", HH)
              }))
            }(BH, (HH => {
              kH.current === BH && bH(HH)
            }))
        } catch (BH) {
          if (BH instanceof GH.d) {
            const HH = "customTexturePack:invalidPack" !== BH.translationKey || (0, uH.d)() ? BH.translationKey : "customTexturePack:invalidPackZip";
            VH((0, YH.i)(vH, HH, BH.params))
          } else console.error("Couldn't read the texture pack", BH), VH(vH("customTexturePack:errorTitle"))
        } finally {
          TH(!1)
        }
      }
      const {
        getRootProps: oH,
        getInputProps: IH,
        isDragActive: fH,
        open: lH
      } = (0, hH.c)({
        onDrop: mH,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: WH
      });
      return (0, QH.jsxs)("div", {
        className: "CustomTexturePackContainer",
        children: [(0, QH.jsxs)("div", {
          className: "CustomTextureWarning",
          children: [vH("settingsMenu:customTextureWarning"), ".", (0, QH.jsx)("br", {}), vH("settingsMenu:viewDocumentation"), ":", " ", (0, QH.jsx)("a", {
            href: "https://github.com/Bloxdy/texturePacks",
            target: "_blank",
            rel: "noreferrer",
            children: "github.com/Bloxdy/texturePacks"
          })]
        }), UH && (0, QH.jsxs)("div", {
          className: "CustomTextureError",
          children: [vH("general:error"), ": ", UH]
        }), OH && (0, QH.jsx)("div", {
          className: "CustomTextureError",
          children: OH
        }), (0, QH.jsxs)("div", {
          ...oH({
            className: SH()("CustomTextureFolderUpload", {
              ActiveDrag: fH,
              Disabled: WH
            })
          }),
          children: [(0, QH.jsx)("input", {
            ...IH({
              webkitdirectory: "true"
            })
          }), PH && (0, QH.jsx)("div", {
            className: "CustomTextureFolderUploadLoading",
            children: (0, QH.jsx)(tH.d, {})
          }), !PH && !fH && BH && (0, QH.jsxs)(QH.Fragment, {
            children: [(0, QH.jsx)("div", {
              className: "CustomTextureFolderUploadIcon Active",
              children: (0, QH.jsx)(XH.c, {
                name: "folder-image"
              })
            }), (0, QH.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions Active",
              children: BH
            })]
          }), !PH && (fH || !BH) && (0, QH.jsxs)(QH.Fragment, {
            children: [(0, QH.jsx)("div", {
              className: "CustomTextureFolderUploadIcon",
              children: (0, QH.jsx)(XH.c, {
                name: "up-from-bracket"
              })
            }), (0, QH.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions",
              children: vH((0, uH.d)() ? "customTexturePack:dropHere" : "customTexturePack:chooseZipInstructions")
            })]
          }), !PH && (0, QH.jsx)(uH.c, {
            disabled: WH,
            openFolderPicker: lH,
            onFiles: HH => {
              mH(HH)
            }
          })]
        })]
      })
    }
  },
  5539: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => EH,
      d: () => CH
    });
    var AH = LH(45),
      rH = LH(1455),
      SH = LH(1123),
      hH = LH(81),
      tH = LH(3484),
      zH = LH(1225);

    function CH() {
      return !(0, hH.isMobile)()
    }

    function EH(HH) {
      let {
        disabled: BH,
        openFolderPicker: LH,
        onFiles: hH
      } = HH;
      const {
        t: EH
      } = (0, SH.B)(), XH = (0, AH.useRef)(null);
      return (0, zH.jsxs)("div", {
        className: "PackPickButtons",
        "data-pad-mouse-only": !0,
        children: [(0, zH.jsx)("input", {
          ref: XH,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(HH) {
            const BH = Array.from(HH.target.files);
            HH.target.value = "", hH(BH)
          }
        }), CH() && (0, zH.jsx)(rH.i, {
          disabled: BH,
          onClick: LH,
          children: EH("general:chooseFolder")
        }), (0, zH.jsx)(rH.i, {
          disabled: BH,
          onClick: () => {
            (0, tH.g)(XH.current)
          },
          children: EH("general:chooseZip")
        })]
      })
    }
  },
  5478: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => uH,
      e: () => PH,
      f: () => QH,
      i: () => vH
    });
    var AH = LH(45),
      rH = LH(5485),
      SH = LH(4745),
      hH = LH(1365),
      tH = LH(5506),
      zH = LH(1038),
      CH = LH.n(zH),
      EH = LH(1352),
      XH = LH(1789),
      GH = LH(5513),
      YH = LH(1225);

    function uH(HH) {
      let {
        label: BH,
        onClick: LH,
        checked: AH,
        circleInfoText: rH,
        className: tH,
        disabled: zH,
        note: EH
      } = HH;
      return (0, YH.jsxs)("div", {
        "aria-disabled": zH || void 0,
        "data-pad-focusable": !0,
        className: CH()("SettingBox CheckboxContainer", {
          [tH]: tH,
          SettingBoxDisabled: zH
        }),
        onClick: () => {
          zH || LH(!AH)
        },
        children: [(0, YH.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, YH.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, YH.jsx)(SH.d, {
              className: "SettingsCheckbox",
              checked: AH,
              disabled: zH,
              onChange: () => {}
            })
          }), (0, YH.jsxs)("div", {
            className: "CheckboxText",
            children: [BH, rH && (0, YH.jsx)("span", {
              onClick: HH => HH.stopPropagation(),
              children: (0, YH.jsx)(hH.e, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: rH
              })
            })]
          })]
        }), EH && (0, YH.jsx)("div", {
          className: "SettingNote",
          children: EH
        })]
      })
    }

    function QH(HH) {
      let {
        name: BH,
        onChange: LH,
        min: rH,
        max: SH,
        step: tH,
        initValue: zH,
        circleInfoText: EH,
        format: XH,
        className: GH,
        padStep: uH,
        disabled: QH = !1,
        selectableMax: WH,
        cappedNote: MH,
        note: vH,
        onChangeComplete: PH
      } = HH;
      const [TH, UH] = (0, AH.useState)(zH), VH = (0, AH.useRef)(zH);
      (0, AH.useEffect)((() => {
        VH.current = zH, UH(zH)
      }), [zH]);
      const OH = void 0 !== WH && WH < SH,
        bH = OH ? {
          "--slider-selectable": (WH - rH) / (SH - rH)
        } : void 0,
        kH = OH && MH ? MH : vH;
      return (0, YH.jsxs)("div", {
        className: CH()("SettingBox SettingsSliderDiv", {
          [GH]: GH,
          SettingBoxDisabled: QH,
          SliderCapped: OH
        }),
        style: bH,
        children: [(0, YH.jsxs)("div", {
          className: "SliderText",
          children: [`${BH}: ${XH?XH(TH):TH}`, EH && (0, YH.jsx)(hH.e, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: EH
          })]
        }), (0, YH.jsx)("div", {
          className: "SliderDiv",
          children: (0, YH.jsx)(xH, {
            value: TH,
            min: rH,
            max: SH,
            step: tH,
            onChange: HH => {
              if (OH && HH >= WH && TH === WH) return;
              const BH = OH ? Math.min(HH, WH) : HH;
              VH.current = BH, UH(BH), LH(BH)
            },
            onChangeComplete: PH && (() => {
              PH(VH.current)
            }),
            format: XH,
            padStep: uH,
            disabled: QH
          })
        }), kH && (0, YH.jsx)("div", {
          className: "SettingNote",
          children: kH
        })]
      })
    }
    const WH = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function MH(HH) {
      var BH;
      return (null !== (BH = String(HH).split(".")[1]) && void 0 !== BH ? BH : "").length
    }

    function xH(HH) {
      let {
        value: BH,
        min: LH,
        max: SH,
        step: hH,
        onChange: tH,
        orientation: zH,
        reverse: CH,
        setIsChanging: EH,
        tooltip: XH,
        labels: uH,
        handleLabel: QH,
        format: xH,
        onChangeStart: vH,
        onChangeComplete: PH,
        padStep: TH,
        disabled: UH = !1
      } = HH;
      const VH = (0, AH.useRef)(null),
        OH = (0, AH.useRef)(null);
      (0, AH.useLayoutEffect)((() => {
        var HH, BH, LH;
        const AH = null !== (HH = null === (BH = VH.current) || void 0 === BH ? void 0 : BH.querySelector(".rangeslider")) && void 0 !== HH ? HH : null;
        null === AH || void 0 === AH || AH.setAttribute("data-pad-slider", ""), null === AH || void 0 === AH || AH.setAttribute("data-pad-focusable", ""), null === AH || void 0 === AH || null === (LH = AH.querySelector(".rangeslider__handle")) || void 0 === LH || LH.setAttribute("data-pad-slider-handle", ""), OH.current = AH
      }), []), (0, AH.useLayoutEffect)((() => {
        var HH, BH;
        UH ? null === (HH = OH.current) || void 0 === HH || HH.setAttribute("aria-disabled", "true") : null === (BH = OH.current) || void 0 === BH || BH.removeAttribute("aria-disabled")
      }), [UH]);
      const bH = Math.max(MH(hH), MH(LH)),
        kH = HH => {
          if (HH >= SH) return SH;
          if (HH <= LH) return LH;
          const BH = Number((Math.round((HH - LH) / hH) * hH + LH).toFixed(bH));
          return Math.min(SH, Math.max(LH, BH))
        },
        mH = (0, AH.useRef)(PH);
      mH.current = PH, (0, AH.useEffect)((() => {
        const HH = VH.current;
        if (!HH) return;
        const BH = HH => {
          var BH;
          WH.has(HH.key) && (null === (BH = mH.current) || void 0 === BH || BH.call(mH))
        };
        return HH.addEventListener("keyup", BH), () => {
          HH.removeEventListener("keyup", BH)
        }
      }), []);
      const oH = (0, AH.useRef)(!1);
      return (0, GH.h)(OH, {
        adjust: HH => {
          if (UH) return;
          const AH = null !== TH && void 0 !== TH ? TH : Math.max(hH, Math.round((SH - LH) / 20 / hH) * hH),
            rH = kH(BH + HH * AH * (CH ? -1 : 1));
          rH !== BH && (null === vH || void 0 === vH || vH(), tH(rH), null === PH || void 0 === PH || PH())
        },
        setFraction: HH => {
          if (UH) return;
          const AH = kH(LH + (CH ? 1 - HH : HH) * (SH - LH));
          AH !== BH && (oH.current || (oH.current = !0, null === vH || void 0 === vH || vH()), tH(AH))
        },
        endDrag: () => {
          oH.current && (oH.current = !1, null === PH || void 0 === PH || PH())
        }
      }), (0, YH.jsx)("div", {
        ref: VH,
        style: {
          display: "contents"
        },
        children: (0, YH.jsx)(rH.c, {
          value: BH,
          min: LH,
          max: SH,
          step: hH,
          onChange: HH => {
            tH(kH(HH))
          },
          orientation: zH,
          reverse: CH,
          tooltip: XH,
          labels: uH,
          handleLabel: QH,
          format: xH,
          onChangeStart: () => {
            null === vH || void 0 === vH || vH(), null === EH || void 0 === EH || EH(!0)
          },
          onChangeComplete: () => {
            null === EH || void 0 === EH || EH(!1), null === PH || void 0 === PH || PH()
          }
        })
      })
    }
    async function vH() {
      const HH = EH.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await HH.getResult() && (0, XH.reloadBloxd)()
    }

    function PH(HH) {
      let {
        label: BH,
        options: LH,
        value: AH,
        onChange: rH,
        circleInfoText: SH
      } = HH;
      return (0, YH.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, YH.jsxs)("div", {
          className: "SliderText",
          children: [BH, SH && (0, YH.jsx)(hH.e, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: SH
          })]
        }), (0, YH.jsx)(tH.b, {
          ariaLabel: BH,
          options: LH,
          value: AH,
          onChange: rH
        })]
      })
    }
  },
  5476: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => WH,
      g: () => MH
    });
    var AH = LH(3508),
      rH = LH(2227),
      SH = LH(45),
      hH = LH(1038),
      tH = LH.n(hH),
      zH = LH(1313),
      CH = LH(3503),
      EH = LH(1352),
      XH = LH(5478),
      GH = LH(5517),
      YH = LH(642),
      uH = LH(5547),
      QH = LH(1225);

    function WH(HH) {
      var BH;
      let {
        setApplySettingsCallback: LH
      } = HH;
      const [, hH] = (0, SH.useReducer)((HH => HH + 1), 0), tH = (0, SH.useRef)(!1), zH = (0, SH.useRef)(null);

      function WH(HH, BH) {
        CH.b.setFromJson(HH, "player");
        const AH = CH.b.saveTexturePack();
        if (YH.K) {
          const HH = CH.b.toJson();
          AH.then((BH => {
            BH && (0, uH.b)(HH)
          }))
        } else tH.current ||= BH, zH.current !== CH.b.getId() || CH.b.getId() === rH.l.CUSTOM && tH.current ? LH((() => XH.i)) : LH(null);
        hH()
      }
      async function xH(HH) {
        if (CH.b.getId() !== HH.metaData.id) {
          if (CH.b.getId() === rH.l.CUSTOM && CH.b.getFromFolderName()) {
            const HH = EH.NotificationProvider.showPromptPopup({
              title: "settingsMenu:loseChangesTitle",
              subtitle: "settingsMenu:loseChangesSubtitle",
              confirmText: "general:continue",
              destructive: !0,
              confirmTooltip: "",
              cancelText: "general:cancel",
              cancelTooltip: ""
            });
            if (!0 !== await HH.getResult()) return
          }
          WH(HH, !1)
        }
      }(0, SH.useEffect)((() => {
        zH.current = CH.b.getId()
      }), []);
      const vH = AH.c,
        PH = [vH, ...Object.values(rH.l).filter((HH => HH !== vH))];
      return (0, QH.jsx)(QH.Fragment, {
        children: (0, QH.jsxs)("div", {
          className: "TexturePackCategory SettingsMenuRightInner",
          children: [(0, QH.jsx)("div", {
            className: "TexturePackList",
            children: PH.map((HH => (0, QH.jsx)(MH, {
              id: HH,
              isSelected: HH === CH.b.getId(),
              setSelected: xH
            }, HH)))
          }), CH.b.getId() === rH.l.CUSTOM && (0, QH.jsx)(GH.b, {
            folderName: null !== (BH = CH.b.getFromFolderName()) && void 0 !== BH ? BH : null,
            onTexturePackUpdated: function(HH) {
              WH(HH, !0)
            },
            packOwner: "player"
          })]
        })
      })
    }

    function MH(HH) {
      let {
        id: BH,
        isSelected: LH,
        setSelected: hH,
        disabled: CH = !1
      } = HH;
      const [EH, XH] = (0, SH.useState)(!0), [GH, YH] = (0, SH.useState)(""), [uH, WH] = (0, SH.useState)(""), [MH, xH] = (0, SH.useState)(""), vH = (0, SH.useRef)({});
      return (0, SH.useEffect)((() => {
        (0, AH.o)(BH).then((HH => {
          var BH;
          HH && (vH.current = HH, XH(!1), YH(vH.current.metaData.name), WH(vH.current.metaData.author), xH(null !== (BH = vH.current.metaData.previewImage) && void 0 !== BH ? BH : ""))
        })).catch((HH => {
          console.warn(`Failed to fetch texture pack ${BH}`, HH)
        }))
      }), [BH]), (0, QH.jsxs)("div", {
        "data-pad-focusable": !0,
        "aria-disabled": CH || void 0,
        className: tH()("TexturePack", {
          Selected: LH,
          Custom: BH === rH.l.CUSTOM,
          Disabled: CH
        }),
        onClick: () => {
          EH || CH || hH(vH.current)
        },
        children: [(0, QH.jsx)("div", {
          className: "TexturePackBg",
          style: {
            backgroundImage: MH ? `url(${MH})` : void 0
          }
        }), EH && (0, QH.jsx)("div", {
          className: "TexturePackName",
          children: (0, QH.jsx)(zH.d, {})
        }), !EH && GH && (0, QH.jsx)("div", {
          className: "TexturePackName",
          children: GH
        }), !EH && uH && (0, QH.jsx)("div", {
          className: "TexturePackAuthor",
          children: uH
        })]
      })
    }
  },
  5520: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => tH,
      f: () => hH,
      i: () => SH
    });
    var AH = LH(5523);
    const rH = [HH => HH.strict ? "strict" : "nonStrict", HH => HH.program];

    function SH(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const AH = {};
      for (const rH in LH) AH[rH] = `\0${rH}\0`;
      return HH(BH, AH).replace(/\0(\w+)\0/g, ((HH, BH) => LH[BH]))
    }

    function hH(HH) {
      return null === HH.file ? null : HH.line > 0 ? `${HH.file}:${HH.line}` : HH.file
    }

    function tH(HH) {
      const BH = new Map(HH.map((HH => [zH(HH).join("."), HH])));
      if (0 === BH.size) return [];
      const LH = EH([...BH.values()]);
      return 0 === LH[0].length ? [] : LH
    }

    function zH(HH) {
      return rH.map((BH => BH(HH)))
    }
    const CH = rH.map((HH => new Set(AH.e.map(HH)).size));

    function EH(HH) {
      const BH = rH.map((BH => new Set(HH.map(BH)))),
        LH = BH.reduce(((HH, BH) => HH * BH.size), 1),
        AH = BH.every(((HH, BH) => 1 === HH.size || HH.size === CH[BH]));
      if (LH === HH.length && AH) return [rH.filter(((HH, LH) => 1 === BH[LH].size)).map((BH => BH(HH[0])))];
      let SH = null;
      for (let hH = 0; hH < rH.length; hH++) {
        if (1 === BH[hH].size) continue;
        const LH = XH(HH, rH[hH]).flatMap(EH);
        (null === SH || LH.length < SH.length) && (SH = LH)
      }
      return SH
    }

    function XH(HH, BH) {
      const LH = new Map;
      for (const rH of HH) {
        var AH;
        const HH = BH(rH);
        LH.set(HH, [...null !== (AH = LH.get(HH)) && void 0 !== AH ? AH : [], rH])
      }
      return [...LH.values()]
    }
  },
  5506: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => hH
    });
    var AH = LH(1038),
      rH = LH.n(AH),
      SH = LH(1225);

    function hH(HH) {
      let {
        options: BH,
        value: LH,
        onChange: AH,
        ariaLabel: hH,
        className: tH,
        reselectable: zH = !1,
        keepsFocus: CH = !1,
        padTabs: EH
      } = HH;
      const XH = void 0 !== EH;
      return (0, SH.jsx)("div", {
        className: rH()("SegmentedToggle", tH),
        role: "group",
        "aria-label": hH,
        "data-pad-tabs": EH,
        children: BH.map((HH => {
          const BH = HH.value === LH;
          return (0, SH.jsx)("button", {
            type: "button",
            "aria-pressed": BH,
            "data-pad-tab": XH || void 0,
            "data-pad-selected": XH && BH ? "true" : void 0,
            "data-pad-default-focus": XH && BH || void 0,
            "aria-label": HH.ariaLabel,
            title: HH.ariaLabel,
            className: rH()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: BH
            }),
            onMouseDown: CH ? HH => {
              HH.preventDefault()
            } : void 0,
            onClick: () => {
              BH && !zH || AH(HH.value)
            },
            children: HH.label
          }, HH.value)
        }))
      })
    }
  },
  5513: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => SH,
      h: () => hH
    });
    var AH = LH(45);
    const rH = new WeakMap,
      SH = HH => {
        var BH;
        const LH = HH.closest("[data-pad-slider]");
        return LH && null !== (BH = rH.get(LH)) && void 0 !== BH ? BH : null
      },
      hH = (HH, BH) => {
        const LH = (0, AH.useRef)(BH);
        LH.current = BH, (0, AH.useEffect)((() => {
          if (HH.current) return ((HH, BH) => (rH.set(HH, BH), () => {
            rH.get(HH) === BH && rH.delete(HH)
          }))(HH.current, {
            adjust: HH => {
              LH.current.adjust(HH)
            },
            setFraction: HH => {
              LH.current.setFraction(HH)
            },
            endDrag: () => {
              LH.current.endDrag()
            }
          })
        }), [HH])
      }
  },
  5523: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => AH.e,
      e: () => rH,
      g: () => AH.l
    });
    var AH = LH(5531);
    const rH = [!1, !0].flatMap((HH => ["terrain", "liquid", "model"].map((BH => ({
      strict: HH,
      program: BH
    })))))
  },
  5554: (HH, BH, LH) => {
    function AH(HH, BH) {
      return rH(HH, BH)
    }

    function rH(HH, BH) {
      if (HH === BH) return !0;
      if ("object" !== typeof HH || "object" !== typeof BH || null === HH || null === BH || Array.isArray(HH) !== Array.isArray(BH)) return !1;
      const LH = HH,
        AH = BH,
        SH = Object.keys(LH);
      return SH.length === Object.keys(AH).length && SH.every((HH => Object.prototype.hasOwnProperty.call(AH, HH) && rH(LH[HH], AH[HH])))
    }
    LH.d(BH, {
      c: () => AH
    })
  },
  5547: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => hH,
      c: () => tH
    });
    var AH = LH(2227),
      rH = LH(5554);
    let SH = null;

    function hH(HH) {
      SH = {
        pack: HH.metaData.id === AH.e ? null : HH
      }
    }

    function tH(HH) {
      return !(null === SH || !(0, rH.c)(SH.pack, HH)) && (SH = null, !0)
    }
  },
  5531: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => tH,
      d: () => hH,
      e: () => AH,
      f: () => QH,
      j: () => XH,
      l: () => rH,
      n: () => SH,
      q: () => CH,
      t: () => EH,
      u: () => GH
    });
    const AH = 5;

    function rH(HH) {
      return HH === AH
    }

    function SH(HH) {
      return [...HH.features]
    }
    const hH = 262144,
      tH = 256,
      zH = 256;

    function CH(HH) {
      if ("object" !== typeof HH || null === HH || Array.isArray(HH)) return "The pack has no files.";
      const BH = [];
      for (const [LH, AH] of Object.entries(HH)) {
        if ("string" !== typeof AH) return `${LH} isn't text.`;
        BH.push({
          path: LH,
          source: AH
        })
      }
      return BH.sort(((HH, BH) => XH(HH.path, BH.path))),
        function(HH) {
          if (0 === HH.length) return "The pack has no .wgsl files.";
          if (HH.length > tH) return `The pack has more than ${tH} .wgsl files.`;
          const BH = new Set;
          for (const {
              path: LH
            }
            of HH) {
            const HH = YH(LH);
            if (null !== HH) return HH;
            if (BH.has(LH)) return `The pack has two files at ${LH}.`;
            BH.add(LH)
          }
          return GH(HH) > hH ? `The pack's .wgsl files are over ${hH/1024} KB in total.` : null
        }(BH) ?? BH
    }

    function EH(HH) {
      const BH = {};
      for (const LH of HH) BH[LH.path] = LH.source;
      return BH
    }

    function XH(HH, BH) {
      return HH < BH ? -1 : HH > BH ? 1 : 0
    }

    function GH(HH) {
      const BH = new TextEncoder;
      let LH = 0;
      for (const {
          source: AH
        }
        of HH) LH += BH.encode(AH).byteLength;
      return LH
    }

    function YH(HH) {
      if (!HH.toLowerCase().endsWith(".wgsl")) return `${HH} isn't a .wgsl file.`;
      if (HH.length > zH) return `A file path is over ${zH} characters.`;
      if (HH.includes("\\") || /[\u0000-\u001f]/.test(HH)) return `${HH} isn't a valid file path.`;
      return HH.split("/").some((HH => "" === HH || "." === HH || ".." === HH)) ? `${HH} isn't a valid file path.` : null
    }
    const uH = /^(.*)\[rot\[([1-4])$/;

    function QH(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const AH = new Map;
      BH.forEach(((HH, BH) => {
        let {
          numAnimStates: LH,
          animStartIdx: rH
        } = HH;
        for (let SH = 1; SH < LH; SH++) AH.set(rH + SH - 1, BH)
      }));
      const rH = Object.entries(HH),
        SH = new Map;
      for (const [QH, WH] of rH) {
        const HH = uH.exec(QH);
        "1" === HH?.[2] && SH.set(HH[1], WH + 1)
      }
      const hH = HH => {
          const BH = uH.exec(HH);
          return BH && SH.has(BH[1]) ? {
            root: BH[1],
            rotation: Number(BH[2]) - 1
          } : null
        },
        tH = new Set(rH.map((HH => {
          let [BH] = HH;
          return hH(BH)?.root ?? BH
        }))),
        zH = (HH, LH) => {
          const AH = HH.replace(/_?0$/, "");
          return (BH[LH]?.numAnimStates ?? 0) > 1 && !tH.has(AH) ? AH : HH
        },
        CH = new Map;
      for (const [uH, QH] of rH) CH.set(QH, zH(hH(uH)?.root ?? uH, QH));
      const EH = rH.reduce(((HH, BH) => {
          let [, LH] = BH;
          return Math.max(HH, LH + 1)
        }), 0),
        XH = Array.from({
          length: EH
        }, ((HH, BH) => ({
          id: BH + 1,
          rotation: 0
        }))),
        GH = new Map,
        YH = new Map;
      for (const [uH, QH] of rH) {
        const HH = hH(uH),
          BH = AH.get(QH);
        if (void 0 !== BH) {
          const LH = CH.get(BH);
          YH.set(uH, {
            name: uH,
            texture: LH,
            kind: "frame"
          }), HH && !YH.has(HH.root) && YH.set(HH.root, {
            name: HH.root,
            texture: LH,
            kind: "frame"
          });
          continue
        }
        const LH = CH.get(QH),
          rH = HH?.root ?? uH;
        if (LH !== rH && YH.set(rH, {
            name: rH,
            texture: LH,
            kind: "frame"
          }), HH) {
          const BH = SH.get(HH.root);
          XH[QH] = {
            id: BH,
            rotation: HH.rotation
          }, GH.set(LH, BH), YH.set(uH, {
            name: uH,
            texture: LH,
            kind: "rotation"
          })
        } else GH.set(LH, QH + 1)
      }
      for (const uH of GH.keys()) YH.delete(uH);
      for (const [uH, QH] of LH) {
        const HH = GH.get(QH);
        void 0 === HH || GH.has(uH) || (GH.set(uH, HH), YH.delete(uH))
      }
      return {
        named: [...GH].sort(((HH, BH) => {
          let [LH] = HH, [AH] = BH;
          return LH < AH ? -1 : LH > AH ? 1 : 0
        })).map((HH => {
          let [BH, LH] = HH;
          return {
            name: BH,
            id: LH
          }
        })),
        aliases: [...YH.values()],
        layers: XH
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);