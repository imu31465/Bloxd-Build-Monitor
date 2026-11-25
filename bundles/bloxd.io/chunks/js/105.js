export const id = 105;
export const ids = [105];
export const modules = {
  4933: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => fG
    });
    var wG = ZG(1006),
      SG = ZG.n(wG),
      LG = ZG(1016),
      yG = ZG(1302),
      kG = ZG(3481),
      UG = ZG(116),
      YG = ZG(3513),
      VG = ZG(3505),
      pG = ZG(1067);

    function fG(GG) {
      let {
        game: bG
      } = GG;
      const ZG = (0, UG.is99NightsCrazyGamesBundle)() ? "large" : "small",
        wG = (0, YG.c)(bG, ZG),
        fG = (0, kG.f)(wG),
        QG = void 0 !== fG.blurhash;
      return (0, pG.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [fG.isLoading && !QG && (0, pG.jsx)(yG.b, {
          loaderType: "Secondary"
        }), !fG.failed && (null !== fG.src || QG) && (0, pG.jsx)("div", {
          className: SG()("SchematicImage", VG.h, {
            SchematicImageFadeIn: fG.fadeIn && !QG
          }),
          style: (0, VG.e)(fG),
          children: (0, pG.jsx)(VG.c, {
            image: fG
          })
        }), fG.failed && (0, pG.jsx)("div", {
          className: "SchematicImageError",
          children: (0, pG.jsx)(LG.c, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  5044: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => dG
    });
    var wG = ZG(51),
      SG = ZG(1006),
      LG = ZG.n(SG),
      yG = ZG(4977),
      kG = ZG(1302),
      UG = ZG(1151),
      YG = ZG(3137),
      VG = ZG(3278),
      pG = ZG(1016),
      fG = ZG(3141),
      QG = ZG(5046),
      KG = ZG(5064),
      hG = ZG(1067);

    function dG(GG) {
      let {
        folderName: bG,
        onTexturePackUpdated: SG,
        disabled: dG = !1,
        maxFileSizeMb: JG,
        packOwner: rG
      } = GG;
      const {
        t: zG
      } = (0, UG.w)(), [EG, oG] = (0, wG.useState)(!1), [XG, uG] = (0, wG.useState)(null), [iG, CG] = (0, wG.useState)(null), WG = (0, wG.useRef)(null);
      async function mG(GG) {
        oG(!0);
        try {
          const bG = await (0, YG.o)(GG);
          if ("customGame" === rG && (0, VG.i)(bG)) return void uG(zG(VG.d));
          if (void 0 !== JG) {
            const GG = JSON.stringify(bG).length / 1048576;
            if (GG > JG) return void uG(zG("customTexturePack:packTooBig", {
              size: GG.toFixed(1),
              max: JG
            }))
          }
          uG(null), CG(null), SG(bG), WG.current = bG,
            function(GG, bG) {
              const wG = GG.modelOverrides;
              wG && Promise.all([ZG.e(206), ZG.e(205)]).then((() => ZG(34549))).then((ZG => {
                let {
                  packDisplayName: SG,
                  refusedPackModels: LG,
                  packModelSummary: yG
                } = ZG;
                const kG = SG(GG.metaData);
                bG(yG(kG, LG(kG, wG, !1)))
              })).catch((GG => {
                console.error("Checking the texture pack's models failed:", GG)
              }))
            }(bG, (GG => {
              WG.current === bG && CG(GG)
            }))
        } catch (bG) {
          if (bG instanceof fG.e) {
            const GG = "customTexturePack:invalidPack" !== bG.translationKey || (0, KG.e)() ? bG.translationKey : "customTexturePack:invalidPackZip";
            uG((0, QG.h)(zG, GG, bG.params))
          } else console.error("Couldn't read the texture pack", bG), uG(zG("customTexturePack:errorTitle"))
        } finally {
          oG(!1)
        }
      }
      const {
        getRootProps: IG,
        getInputProps: FG,
        isDragActive: vG,
        open: aG
      } = (0, yG.c)({
        onDrop: mG,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: dG
      });
      return (0, hG.jsxs)("div", {
        className: "CustomTexturePackContainer",
        children: [(0, hG.jsxs)("div", {
          className: "CustomTextureWarning",
          children: [zG("settingsMenu:customTextureWarning"), ".", (0, hG.jsx)("br", {}), zG("settingsMenu:viewDocumentation"), ":", " ", (0, hG.jsx)("a", {
            href: "https://github.com/Bloxdy/texturePacks",
            target: "_blank",
            rel: "noreferrer",
            children: "github.com/Bloxdy/texturePacks"
          })]
        }), XG && (0, hG.jsxs)("div", {
          className: "CustomTextureError",
          children: [zG("general:error"), ": ", XG]
        }), iG && (0, hG.jsx)("div", {
          className: "CustomTextureError",
          children: iG
        }), (0, hG.jsxs)("div", {
          ...IG({
            className: LG()("CustomTextureFolderUpload", {
              ActiveDrag: vG,
              Disabled: dG
            })
          }),
          children: [(0, hG.jsx)("input", {
            ...FG({
              webkitdirectory: "true"
            })
          }), EG && (0, hG.jsx)("div", {
            className: "CustomTextureFolderUploadLoading",
            children: (0, hG.jsx)(kG.b, {})
          }), !EG && !vG && bG && (0, hG.jsxs)(hG.Fragment, {
            children: [(0, hG.jsx)("div", {
              className: "CustomTextureFolderUploadIcon Active",
              children: (0, hG.jsx)(pG.c, {
                name: "folder-image"
              })
            }), (0, hG.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions Active",
              children: bG
            })]
          }), !EG && (vG || !bG) && (0, hG.jsxs)(hG.Fragment, {
            children: [(0, hG.jsx)("div", {
              className: "CustomTextureFolderUploadIcon",
              children: (0, hG.jsx)(pG.c, {
                name: "up-from-bracket"
              })
            }), (0, hG.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions",
              children: zG((0, KG.e)() ? "customTexturePack:dropHere" : "customTexturePack:chooseZipInstructions")
            })]
          }), !EG && (0, hG.jsx)(KG.d, {
            disabled: dG,
            openFolderPicker: aG,
            onFiles: GG => {
              mG(GG)
            }
          })]
        })]
      })
    }
  },
  5064: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => VG,
      e: () => YG
    });
    var wG = ZG(51),
      SG = ZG(1393),
      LG = ZG(1151),
      yG = ZG(80),
      kG = ZG(3122),
      UG = ZG(1067);

    function YG() {
      return !(0, yG.isMobile)()
    }

    function VG(GG) {
      let {
        disabled: bG,
        openFolderPicker: ZG,
        onFiles: yG
      } = GG;
      const {
        t: VG
      } = (0, LG.w)(), pG = (0, wG.useRef)(null);
      return (0, UG.jsxs)("div", {
        className: "PackPickButtons",
        "data-pad-mouse-only": !0,
        children: [(0, UG.jsx)("input", {
          ref: pG,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(GG) {
            const bG = Array.from(GG.target.files);
            GG.target.value = "", yG(bG)
          }
        }), YG() && (0, UG.jsx)(SG.d, {
          disabled: bG,
          onClick: ZG,
          children: VG("general:chooseFolder")
        }), (0, UG.jsx)(SG.d, {
          disabled: bG,
          onClick: () => {
            (0, kG.f)(pG.current)
          },
          children: VG("general:chooseZip")
        })]
      })
    }
  },
  5019: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => KG,
      e: () => zG,
      f: () => hG,
      g: () => rG
    });
    var wG = ZG(51),
      SG = ZG(5021),
      LG = ZG(4396),
      yG = ZG(1320),
      kG = ZG(5039),
      UG = ZG(1006),
      YG = ZG.n(UG),
      VG = ZG(1311),
      pG = ZG(1702),
      fG = ZG(5042),
      QG = ZG(1067);

    function KG(GG) {
      let {
        label: bG,
        onClick: ZG,
        checked: wG,
        circleInfoText: SG,
        className: kG,
        disabled: UG,
        note: VG
      } = GG;
      return (0, QG.jsxs)("div", {
        "aria-disabled": UG || void 0,
        "data-pad-focusable": !0,
        className: YG()("SettingBox CheckboxContainer", {
          [kG]: kG,
          SettingBoxDisabled: UG
        }),
        onClick: () => {
          UG || ZG(!wG)
        },
        children: [(0, QG.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, QG.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, QG.jsx)(LG.e, {
              className: "SettingsCheckbox",
              checked: wG,
              disabled: UG,
              onChange: () => {}
            })
          }), (0, QG.jsxs)("div", {
            className: "CheckboxText",
            children: [bG, SG && (0, QG.jsx)("span", {
              onClick: GG => GG.stopPropagation(),
              children: (0, QG.jsx)(yG.d, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: SG
              })
            })]
          })]
        }), VG && (0, QG.jsx)("div", {
          className: "SettingNote",
          children: VG
        })]
      })
    }

    function hG(GG) {
      let {
        name: bG,
        onChange: ZG,
        min: SG,
        max: LG,
        step: kG,
        initValue: UG,
        circleInfoText: VG,
        format: pG,
        className: fG,
        padStep: KG,
        disabled: hG = !1,
        selectableMax: dG,
        cappedNote: rG,
        onChangeComplete: zG
      } = GG;
      const [EG, oG] = (0, wG.useState)(UG), XG = (0, wG.useRef)(UG);
      (0, wG.useEffect)((() => {
        XG.current = UG, oG(UG)
      }), [UG]);
      const uG = void 0 !== dG && dG < LG,
        iG = uG ? {
          "--slider-selectable": (dG - SG) / (LG - SG)
        } : void 0;
      return (0, QG.jsxs)("div", {
        className: YG()("SettingBox SettingsSliderDiv", {
          [fG]: fG,
          SettingBoxDisabled: hG,
          SliderCapped: uG
        }),
        style: iG,
        children: [(0, QG.jsxs)("div", {
          className: "SliderText",
          children: [`${bG}: ${pG?pG(EG):EG}`, VG && (0, QG.jsx)(yG.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: VG
          })]
        }), (0, QG.jsx)("div", {
          className: "SliderDiv",
          children: (0, QG.jsx)(JG, {
            value: EG,
            min: SG,
            max: LG,
            step: kG,
            onChange: GG => {
              if (uG && GG >= dG && EG === dG) return;
              const bG = uG ? Math.min(GG, dG) : GG;
              XG.current = bG, oG(bG), ZG(bG)
            },
            onChangeComplete: zG && (() => {
              zG(XG.current)
            }),
            format: pG,
            padStep: KG,
            disabled: hG
          })
        }), uG && rG && (0, QG.jsx)("div", {
          className: "SettingNote",
          children: rG
        })]
      })
    }
    const dG = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function JG(GG) {
      var bG;
      let {
        value: ZG,
        min: LG,
        max: yG,
        step: kG,
        onChange: UG,
        orientation: YG,
        reverse: VG,
        setIsChanging: pG,
        tooltip: KG,
        labels: hG,
        handleLabel: JG,
        format: rG,
        onChangeStart: zG,
        onChangeComplete: EG,
        padStep: oG,
        disabled: XG = !1
      } = GG;
      const uG = (0, wG.useRef)(null),
        iG = (0, wG.useRef)(null);
      (0, wG.useLayoutEffect)((() => {
        var GG, bG, ZG;
        const wG = null !== (GG = null === (bG = uG.current) || void 0 === bG ? void 0 : bG.querySelector(".rangeslider")) && void 0 !== GG ? GG : null;
        null === wG || void 0 === wG || wG.setAttribute("data-pad-slider", ""), null === wG || void 0 === wG || wG.setAttribute("data-pad-focusable", ""), null === wG || void 0 === wG || null === (ZG = wG.querySelector(".rangeslider__handle")) || void 0 === ZG || ZG.setAttribute("data-pad-slider-handle", ""), iG.current = wG
      }), []), (0, wG.useLayoutEffect)((() => {
        var GG, bG;
        XG ? null === (GG = iG.current) || void 0 === GG || GG.setAttribute("aria-disabled", "true") : null === (bG = iG.current) || void 0 === bG || bG.removeAttribute("aria-disabled")
      }), [XG]);
      const CG = (null !== (bG = String(kG).split(".")[1]) && void 0 !== bG ? bG : "").length,
        WG = GG => {
          const bG = Number((Math.round((GG - LG) / kG) * kG + LG).toFixed(CG));
          return Math.min(yG, Math.max(LG, bG))
        },
        mG = (0, wG.useRef)(EG);
      mG.current = EG, (0, wG.useEffect)((() => {
        const GG = uG.current;
        if (!GG) return;
        const bG = GG => {
          var bG;
          dG.has(GG.key) && (null === (bG = mG.current) || void 0 === bG || bG.call(mG))
        };
        return GG.addEventListener("keyup", bG), () => {
          GG.removeEventListener("keyup", bG)
        }
      }), []);
      const IG = (0, wG.useRef)(!1);
      return (0, fG.f)(iG, {
        adjust: GG => {
          if (XG) return;
          const bG = null !== oG && void 0 !== oG ? oG : Math.max(kG, Math.round((yG - LG) / 20 / kG) * kG),
            wG = WG(ZG + GG * bG * (VG ? -1 : 1));
          wG !== ZG && (null === zG || void 0 === zG || zG(), UG(wG), null === EG || void 0 === EG || EG())
        },
        setFraction: GG => {
          if (XG) return;
          const bG = WG(LG + (VG ? 1 - GG : GG) * (yG - LG));
          bG !== ZG && (IG.current || (IG.current = !0, null === zG || void 0 === zG || zG()), UG(bG))
        },
        endDrag: () => {
          IG.current && (IG.current = !1, null === EG || void 0 === EG || EG())
        }
      }), (0, QG.jsx)("div", {
        ref: uG,
        style: {
          display: "contents"
        },
        children: (0, QG.jsx)(SG.e, {
          value: ZG,
          min: LG,
          max: yG,
          step: kG,
          onChange: UG,
          orientation: YG,
          reverse: VG,
          tooltip: KG,
          labels: hG,
          handleLabel: JG,
          format: rG,
          onChangeStart: () => {
            null === zG || void 0 === zG || zG(), null === pG || void 0 === pG || pG(!0)
          },
          onChangeComplete: () => {
            null === pG || void 0 === pG || pG(!1), null === EG || void 0 === EG || EG()
          }
        })
      })
    }
    async function rG() {
      const GG = VG.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await GG.getResult() && (0, pG.reloadBloxd)()
    }

    function zG(GG) {
      let {
        label: bG,
        options: ZG,
        value: wG,
        onChange: SG,
        circleInfoText: LG
      } = GG;
      return (0, QG.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, QG.jsxs)("div", {
          className: "SliderText",
          children: [bG, LG && (0, QG.jsx)(yG.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: LG
          })]
        }), (0, QG.jsx)(kG.c, {
          ariaLabel: bG,
          options: ZG,
          value: wG,
          onChange: SG
        })]
      })
    }
  },
  5012: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => dG,
      f: () => JG
    });
    var wG = ZG(3137),
      SG = ZG(2138),
      LG = ZG(51),
      yG = ZG(1006),
      kG = ZG.n(yG),
      UG = ZG(1302),
      YG = ZG(3135),
      VG = ZG(1311),
      pG = ZG(5019),
      fG = ZG(5044),
      QG = ZG(631),
      KG = ZG(5071),
      hG = ZG(1067);

    function dG(GG) {
      var bG;
      let {
        setApplySettingsCallback: ZG
      } = GG;
      const [, yG] = (0, LG.useReducer)((GG => GG + 1), 0), kG = (0, LG.useRef)(!1), UG = (0, LG.useRef)(null);

      function dG(GG, bG) {
        YG.e.setFromJson(GG, "player");
        const wG = YG.e.saveTexturePack();
        if (QG.B) {
          const GG = YG.e.toJson();
          wG.then((bG => {
            bG && (0, KG.c)(GG)
          }))
        } else kG.current ||= bG, UG.current !== YG.e.getId() || YG.e.getId() === SG.q.CUSTOM && kG.current ? ZG((() => pG.g)) : ZG(null);
        yG()
      }
      async function rG(GG) {
        if (YG.e.getId() !== GG.metaData.id) {
          if (YG.e.getId() === SG.q.CUSTOM && YG.e.getFromFolderName()) {
            const GG = VG.NotificationProvider.showPromptPopup({
              title: "settingsMenu:loseChangesTitle",
              subtitle: "settingsMenu:loseChangesSubtitle",
              confirmText: "general:continue",
              destructive: !0,
              confirmTooltip: "",
              cancelText: "general:cancel",
              cancelTooltip: ""
            });
            if (!0 !== await GG.getResult()) return
          }
          dG(GG, !1)
        }
      }(0, LG.useEffect)((() => {
        UG.current = YG.e.getId()
      }), []);
      const zG = wG.d,
        EG = [zG, ...Object.values(SG.q).filter((GG => GG !== zG))];
      return (0, hG.jsx)(hG.Fragment, {
        children: (0, hG.jsxs)("div", {
          className: "TexturePackCategory SettingsMenuRightInner",
          children: [(0, hG.jsx)("div", {
            className: "TexturePackList",
            children: EG.map((GG => (0, hG.jsx)(JG, {
              id: GG,
              isSelected: GG === YG.e.getId(),
              setSelected: rG
            }, GG)))
          }), YG.e.getId() === SG.q.CUSTOM && (0, hG.jsx)(fG.e, {
            folderName: null !== (bG = YG.e.getFromFolderName()) && void 0 !== bG ? bG : null,
            onTexturePackUpdated: function(GG) {
              dG(GG, !0)
            },
            packOwner: "player"
          })]
        })
      })
    }

    function JG(GG) {
      let {
        id: bG,
        isSelected: ZG,
        setSelected: yG,
        disabled: YG = !1
      } = GG;
      const [VG, pG] = (0, LG.useState)(!0), [fG, QG] = (0, LG.useState)(""), [KG, dG] = (0, LG.useState)(""), [JG, rG] = (0, LG.useState)(""), zG = (0, LG.useRef)({});
      return (0, LG.useEffect)((() => {
        (0, wG.n)(bG).then((GG => {
          var bG;
          GG && (zG.current = GG, pG(!1), QG(zG.current.metaData.name), dG(zG.current.metaData.author), rG(null !== (bG = zG.current.metaData.previewImage) && void 0 !== bG ? bG : ""))
        })).catch((GG => {
          console.warn(`Failed to fetch texture pack ${bG}`, GG)
        }))
      }), [bG]), (0, hG.jsxs)("div", {
        "data-pad-focusable": !0,
        "aria-disabled": YG || void 0,
        className: kG()("TexturePack", {
          Selected: ZG,
          Custom: bG === SG.q.CUSTOM,
          Disabled: YG
        }),
        onClick: () => {
          VG || YG || yG(zG.current)
        },
        children: [(0, hG.jsx)("div", {
          className: "TexturePackBg",
          style: {
            backgroundImage: JG ? `url(${JG})` : void 0
          }
        }), VG && (0, hG.jsx)("div", {
          className: "TexturePackName",
          children: (0, hG.jsx)(UG.b, {})
        }), !VG && fG && (0, hG.jsx)("div", {
          className: "TexturePackName",
          children: fG
        }), !VG && KG && (0, hG.jsx)("div", {
          className: "TexturePackAuthor",
          children: KG
        })]
      })
    }
  },
  5046: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => kG,
      d: () => yG,
      h: () => LG
    });
    var wG = ZG(5055);
    const SG = [GG => GG.strict ? "strict" : "nonStrict", GG => GG.program];

    function LG(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const wG = {};
      for (const SG in ZG) wG[SG] = `\0${SG}\0`;
      return GG(bG, wG).replace(/\0(\w+)\0/g, ((GG, bG) => ZG[bG]))
    }

    function yG(GG) {
      return null === GG.file ? null : GG.line > 0 ? `${GG.file}:${GG.line}` : GG.file
    }

    function kG(GG) {
      const bG = new Map(GG.map((GG => [UG(GG).join("."), GG])));
      if (0 === bG.size) return [];
      const ZG = VG([...bG.values()]);
      return 0 === ZG[0].length ? [] : ZG
    }

    function UG(GG) {
      return SG.map((bG => bG(GG)))
    }
    const YG = SG.map((GG => new Set(wG.f.map(GG)).size));

    function VG(GG) {
      const bG = SG.map((bG => new Set(GG.map(bG)))),
        ZG = bG.reduce(((GG, bG) => GG * bG.size), 1),
        wG = bG.every(((GG, bG) => 1 === GG.size || GG.size === YG[bG]));
      if (ZG === GG.length && wG) return [SG.filter(((GG, ZG) => 1 === bG[ZG].size)).map((bG => bG(GG[0])))];
      let LG = null;
      for (let yG = 0; yG < SG.length; yG++) {
        if (1 === bG[yG].size) continue;
        const ZG = pG(GG, SG[yG]).flatMap(VG);
        (null === LG || ZG.length < LG.length) && (LG = ZG)
      }
      return LG
    }

    function pG(GG, bG) {
      const ZG = new Map;
      for (const SG of GG) {
        var wG;
        const GG = bG(SG);
        ZG.set(GG, [...null !== (wG = ZG.get(GG)) && void 0 !== wG ? wG : [], SG])
      }
      return [...ZG.values()]
    }
  },
  5039: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => yG
    });
    var wG = ZG(1006),
      SG = ZG.n(wG),
      LG = ZG(1067);

    function yG(GG) {
      let {
        options: bG,
        value: ZG,
        onChange: wG,
        ariaLabel: yG,
        className: kG,
        reselectable: UG = !1,
        keepsFocus: YG = !1,
        padTabs: VG
      } = GG;
      const pG = void 0 !== VG;
      return (0, LG.jsx)("div", {
        className: SG()("SegmentedToggle", kG),
        role: "group",
        "aria-label": yG,
        "data-pad-tabs": VG,
        children: bG.map((GG => {
          const bG = GG.value === ZG;
          return (0, LG.jsx)("button", {
            type: "button",
            "aria-pressed": bG,
            "data-pad-tab": pG || void 0,
            "data-pad-selected": pG && bG ? "true" : void 0,
            "data-pad-default-focus": pG && bG || void 0,
            "aria-label": GG.ariaLabel,
            title: GG.ariaLabel,
            className: SG()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: bG
            }),
            onMouseDown: YG ? GG => {
              GG.preventDefault()
            } : void 0,
            onClick: () => {
              bG && !UG || wG(GG.value)
            },
            children: GG.label
          }, GG.value)
        }))
      })
    }
  },
  5042: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => LG,
      f: () => yG
    });
    var wG = ZG(51);
    const SG = new WeakMap,
      LG = GG => {
        var bG;
        const ZG = GG.closest("[data-pad-slider]");
        return ZG && null !== (bG = SG.get(ZG)) && void 0 !== bG ? bG : null
      },
      yG = (GG, bG) => {
        const ZG = (0, wG.useRef)(bG);
        ZG.current = bG, (0, wG.useEffect)((() => {
          if (GG.current) return ((GG, bG) => (SG.set(GG, bG), () => {
            SG.get(GG) === bG && SG.delete(GG)
          }))(GG.current, {
            adjust: GG => {
              ZG.current.adjust(GG)
            },
            setFraction: GG => {
              ZG.current.setFraction(GG)
            },
            endDrag: () => {
              ZG.current.endDrag()
            }
          })
        }), [GG])
      }
  },
  5055: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => wG.i,
      f: () => SG,
      g: () => wG.o
    });
    var wG = ZG(5062);
    const SG = [!1, !0].flatMap((GG => ["terrain", "liquid", "model"].map((bG => ({
      strict: GG,
      program: bG
    })))))
  },
  5074: (GG, bG, ZG) => {
    function wG(GG, bG) {
      return SG(GG, bG)
    }

    function SG(GG, bG) {
      if (GG === bG) return !0;
      if ("object" !== typeof GG || "object" !== typeof bG || null === GG || null === bG || Array.isArray(GG) !== Array.isArray(bG)) return !1;
      const ZG = GG,
        wG = bG,
        LG = Object.keys(ZG);
      return LG.length === Object.keys(wG).length && LG.every((GG => Object.prototype.hasOwnProperty.call(wG, GG) && SG(ZG[GG], wG[GG])))
    }
    ZG.d(bG, {
      c: () => wG
    })
  },
  5071: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => yG,
      d: () => kG
    });
    var wG = ZG(2138),
      SG = ZG(5074);
    let LG = null;

    function yG(GG) {
      LG = {
        pack: GG.metaData.id === wG.e ? null : GG
      }
    }

    function kG(GG) {
      return !(null === LG || !(0, SG.c)(LG.pack, GG)) && (LG = null, !0)
    }
  },
  5062: (GG, bG, ZG) => {
    ZG.d(bG, {
      A: () => fG,
      d: () => kG,
      h: () => yG,
      i: () => wG,
      j: () => hG,
      k: () => pG,
      o: () => SG,
      s: () => LG,
      u: () => YG,
      y: () => VG
    });
    const wG = 5;

    function SG(GG) {
      return GG === wG
    }

    function LG(GG) {
      return [...GG.features]
    }
    const yG = 262144,
      kG = 256,
      UG = 256;

    function YG(GG) {
      if ("object" !== typeof GG || null === GG || Array.isArray(GG)) return "The pack has no files.";
      const bG = [];
      for (const [ZG, wG] of Object.entries(GG)) {
        if ("string" !== typeof wG) return `${ZG} isn't text.`;
        bG.push({
          path: ZG,
          source: wG
        })
      }
      return bG.sort(((GG, bG) => pG(GG.path, bG.path))),
        function(GG) {
          if (0 === GG.length) return "The pack has no .wgsl files.";
          if (GG.length > kG) return `The pack has more than ${kG} .wgsl files.`;
          const bG = new Set;
          for (const {
              path: ZG
            }
            of GG) {
            const GG = QG(ZG);
            if (null !== GG) return GG;
            if (bG.has(ZG)) return `The pack has two files at ${ZG}.`;
            bG.add(ZG)
          }
          return fG(GG) > yG ? `The pack's .wgsl files are over ${yG/1024} KB in total.` : null
        }(bG) ?? bG
    }

    function VG(GG) {
      const bG = {};
      for (const ZG of GG) bG[ZG.path] = ZG.source;
      return bG
    }

    function pG(GG, bG) {
      return GG < bG ? -1 : GG > bG ? 1 : 0
    }

    function fG(GG) {
      const bG = new TextEncoder;
      let ZG = 0;
      for (const {
          source: wG
        }
        of GG) ZG += bG.encode(wG).byteLength;
      return ZG
    }

    function QG(GG) {
      if (!GG.toLowerCase().endsWith(".wgsl")) return `${GG} isn't a .wgsl file.`;
      if (GG.length > UG) return `A file path is over ${UG} characters.`;
      if (GG.includes("\\") || /[\u0000-\u001f]/.test(GG)) return `${GG} isn't a valid file path.`;
      return GG.split("/").some((GG => "" === GG || "." === GG || ".." === GG)) ? `${GG} isn't a valid file path.` : null
    }
    const KG = /^(.*)\[rot\[([1-4])$/;

    function hG(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const wG = new Map;
      bG.forEach(((GG, bG) => {
        let {
          numAnimStates: ZG,
          animStartIdx: SG
        } = GG;
        for (let LG = 1; LG < ZG; LG++) wG.set(SG + LG - 1, bG)
      }));
      const SG = Object.entries(GG),
        LG = new Map;
      for (const [hG, dG] of SG) {
        const GG = KG.exec(hG);
        "1" === GG?.[2] && LG.set(GG[1], dG + 1)
      }
      const yG = GG => {
          const bG = KG.exec(GG);
          return bG && LG.has(bG[1]) ? {
            root: bG[1],
            rotation: Number(bG[2]) - 1
          } : null
        },
        kG = new Set(SG.map((GG => {
          let [bG] = GG;
          return yG(bG)?.root ?? bG
        }))),
        UG = (GG, ZG) => {
          const wG = GG.replace(/_?0$/, "");
          return (bG[ZG]?.numAnimStates ?? 0) > 1 && !kG.has(wG) ? wG : GG
        },
        YG = new Map;
      for (const [KG, hG] of SG) YG.set(hG, UG(yG(KG)?.root ?? KG, hG));
      const VG = SG.reduce(((GG, bG) => {
          let [, ZG] = bG;
          return Math.max(GG, ZG + 1)
        }), 0),
        pG = Array.from({
          length: VG
        }, ((GG, bG) => ({
          id: bG + 1,
          rotation: 0
        }))),
        fG = new Map,
        QG = new Map;
      for (const [KG, hG] of SG) {
        const GG = yG(KG),
          bG = wG.get(hG);
        if (void 0 !== bG) {
          const ZG = YG.get(bG);
          QG.set(KG, {
            name: KG,
            texture: ZG,
            kind: "frame"
          }), GG && !QG.has(GG.root) && QG.set(GG.root, {
            name: GG.root,
            texture: ZG,
            kind: "frame"
          });
          continue
        }
        const ZG = YG.get(hG),
          SG = GG?.root ?? KG;
        if (ZG !== SG && QG.set(SG, {
            name: SG,
            texture: ZG,
            kind: "frame"
          }), GG) {
          const bG = LG.get(GG.root);
          pG[hG] = {
            id: bG,
            rotation: GG.rotation
          }, fG.set(ZG, bG), QG.set(KG, {
            name: KG,
            texture: ZG,
            kind: "rotation"
          })
        } else fG.set(ZG, hG + 1)
      }
      for (const KG of fG.keys()) QG.delete(KG);
      for (const [KG, hG] of ZG) {
        const GG = fG.get(hG);
        void 0 === GG || fG.has(KG) || (fG.set(KG, GG), QG.delete(KG))
      }
      return {
        named: [...fG].sort(((GG, bG) => {
          let [ZG] = GG, [wG] = bG;
          return ZG < wG ? -1 : ZG > wG ? 1 : 0
        })).map((GG => {
          let [bG, ZG] = GG;
          return {
            name: bG,
            id: ZG
          }
        })),
        aliases: [...QG.values()],
        layers: pG
      }
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);