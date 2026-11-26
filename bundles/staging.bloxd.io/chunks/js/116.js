export const id = 116;
export const ids = [116];
export const modules = {
  5392: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => zB
    });
    var YB = GB(1090),
      DB = GB.n(YB),
      QB = GB(1383),
      oB = GB(1375),
      jB = GB(3944),
      yB = GB(120),
      JB = GB(3982),
      MB = GB(3968),
      PB = GB(1282);

    function zB(BB) {
      let {
        game: OB
      } = BB;
      const GB = (0, yB.is99NightsCrazyGamesBundle)() ? "large" : "small",
        YB = (0, JB.f)(OB, GB),
        zB = (0, jB.e)(YB),
        lB = void 0 !== zB.blurhash;
      return (0, PB.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [zB.isLoading && !lB && (0, PB.jsx)(oB.b, {
          loaderType: "Secondary"
        }), !zB.failed && (null !== zB.src || lB) && (0, PB.jsx)("div", {
          className: DB()("SchematicImage", MB.h, {
            SchematicImageFadeIn: zB.fadeIn && !lB
          }),
          style: (0, MB.e)(zB),
          children: (0, PB.jsx)(MB.d, {
            image: zB
          })
        }), zB.failed && (0, PB.jsx)("div", {
          className: "SchematicImageError",
          children: (0, PB.jsx)(QB.b, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  5524: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => ZB
    });
    var YB = GB(56),
      DB = GB(1090),
      QB = GB.n(DB),
      oB = GB(5452),
      jB = GB(1375),
      yB = GB(1175),
      JB = GB(3580),
      MB = GB(3716),
      PB = GB(1383),
      zB = GB(3588),
      lB = GB(5531),
      pB = GB(5549),
      qB = GB(1282);

    function ZB(BB) {
      let {
        folderName: OB,
        onTexturePackUpdated: DB,
        disabled: ZB = !1,
        maxFileSizeMb: NB,
        packOwner: RB
      } = BB;
      const {
        t: WB
      } = (0, yB.H)(), [AB, VB] = (0, YB.useState)(!1), [SB, nB] = (0, YB.useState)(null), [UB, fB] = (0, YB.useState)(null), kB = (0, YB.useRef)(null);
      async function dB(BB) {
        VB(!0);
        try {
          const OB = await (0, JB.n)(BB);
          if ("customGame" === RB && (0, MB.m)(OB)) return void nB(WB(MB.c));
          if (void 0 !== NB) {
            const BB = JSON.stringify(OB).length / 1048576;
            if (BB > NB) return void nB(WB("customTexturePack:packTooBig", {
              size: BB.toFixed(1),
              max: NB
            }))
          }
          nB(null), fB(null), DB(OB), kB.current = OB,
            function(BB, OB) {
              const YB = BB.modelOverrides;
              YB && Promise.all([GB.e(227), GB.e(226)]).then((() => GB(34861))).then((GB => {
                let {
                  packDisplayName: DB,
                  refusedPackModels: QB,
                  packModelSummary: oB
                } = GB;
                const jB = DB(BB.metaData);
                OB(oB(jB, QB(jB, YB, !1)))
              })).catch((BB => {
                console.error("Checking the texture pack's models failed:", BB)
              }))
            }(OB, (BB => {
              kB.current === OB && fB(BB)
            }))
        } catch (OB) {
          if (OB instanceof zB.b) {
            const BB = "customTexturePack:invalidPack" !== OB.translationKey || (0, pB.d)() ? OB.translationKey : "customTexturePack:invalidPackZip";
            nB((0, lB.j)(WB, BB, OB.params))
          } else console.error("Couldn't read the texture pack", OB), nB(WB("customTexturePack:errorTitle"))
        } finally {
          VB(!1)
        }
      }
      const {
        getRootProps: KB,
        getInputProps: uB,
        isDragActive: mB,
        open: IB
      } = (0, oB.e)({
        onDrop: dB,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: ZB
      });
      return (0, qB.jsxs)("div", {
        className: "CustomTexturePackContainer",
        children: [(0, qB.jsxs)("div", {
          className: "CustomTextureWarning",
          children: [WB("settingsMenu:customTextureWarning"), ".", (0, qB.jsx)("br", {}), WB("settingsMenu:viewDocumentation"), ":", " ", (0, qB.jsx)("a", {
            href: "https://github.com/Bloxdy/texturePacks",
            target: "_blank",
            rel: "noreferrer",
            children: "github.com/Bloxdy/texturePacks"
          })]
        }), SB && (0, qB.jsxs)("div", {
          className: "CustomTextureError",
          children: [WB("general:error"), ": ", SB]
        }), UB && (0, qB.jsx)("div", {
          className: "CustomTextureError",
          children: UB
        }), (0, qB.jsxs)("div", {
          ...KB({
            className: QB()("CustomTextureFolderUpload", {
              ActiveDrag: mB,
              Disabled: ZB
            })
          }),
          children: [(0, qB.jsx)("input", {
            ...uB({
              webkitdirectory: "true"
            })
          }), AB && (0, qB.jsx)("div", {
            className: "CustomTextureFolderUploadLoading",
            children: (0, qB.jsx)(jB.b, {})
          }), !AB && !mB && OB && (0, qB.jsxs)(qB.Fragment, {
            children: [(0, qB.jsx)("div", {
              className: "CustomTextureFolderUploadIcon Active",
              children: (0, qB.jsx)(PB.b, {
                name: "folder-image"
              })
            }), (0, qB.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions Active",
              children: OB
            })]
          }), !AB && (mB || !OB) && (0, qB.jsxs)(qB.Fragment, {
            children: [(0, qB.jsx)("div", {
              className: "CustomTextureFolderUploadIcon",
              children: (0, qB.jsx)(PB.b, {
                name: "up-from-bracket"
              })
            }), (0, qB.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions",
              children: WB((0, pB.d)() ? "customTexturePack:dropHere" : "customTexturePack:chooseZipInstructions")
            })]
          }), !AB && (0, qB.jsx)(pB.b, {
            disabled: ZB,
            openFolderPicker: IB,
            onFiles: BB => {
              dB(BB)
            }
          })]
        })]
      })
    }
  },
  5549: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => MB,
      d: () => JB
    });
    var YB = GB(56),
      DB = GB(1485),
      QB = GB(1175),
      oB = GB(92),
      jB = GB(3558),
      yB = GB(1282);

    function JB() {
      return !(0, oB.isMobile)()
    }

    function MB(BB) {
      let {
        disabled: OB,
        openFolderPicker: GB,
        onFiles: oB
      } = BB;
      const {
        t: MB
      } = (0, QB.H)(), PB = (0, YB.useRef)(null);
      return (0, yB.jsxs)("div", {
        className: "PackPickButtons",
        "data-pad-mouse-only": !0,
        children: [(0, yB.jsx)("input", {
          ref: PB,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(BB) {
            const OB = Array.from(BB.target.files);
            BB.target.value = "", oB(OB)
          }
        }), JB() && (0, yB.jsx)(DB.f, {
          disabled: OB,
          onClick: GB,
          children: MB("general:chooseFolder")
        }), (0, yB.jsx)(DB.f, {
          disabled: OB,
          onClick: () => {
            (0, jB.e)(PB.current)
          },
          children: MB("general:chooseZip")
        })]
      })
    }
  },
  5480: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => pB,
      d: () => AB,
      f: () => qB,
      g: () => WB
    });
    var YB = GB(56),
      DB = GB(5486),
      QB = GB(4777),
      oB = GB(1405),
      jB = GB(5512),
      yB = GB(1090),
      JB = GB.n(yB),
      MB = GB(1400),
      PB = GB(1822),
      zB = GB(5515),
      lB = GB(1282);

    function pB(BB) {
      let {
        label: OB,
        onClick: GB,
        checked: YB,
        circleInfoText: DB,
        className: jB,
        disabled: yB,
        note: MB
      } = BB;
      return (0, lB.jsxs)("div", {
        "aria-disabled": yB || void 0,
        "data-pad-focusable": !0,
        className: JB()("SettingBox CheckboxContainer", {
          [jB]: jB,
          SettingBoxDisabled: yB
        }),
        onClick: () => {
          yB || GB(!YB)
        },
        children: [(0, lB.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, lB.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, lB.jsx)(QB.e, {
              className: "SettingsCheckbox",
              checked: YB,
              disabled: yB,
              onChange: () => {}
            })
          }), (0, lB.jsxs)("div", {
            className: "CheckboxText",
            children: [OB, DB && (0, lB.jsx)("span", {
              onClick: BB => BB.stopPropagation(),
              children: (0, lB.jsx)(oB.c, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: DB
              })
            })]
          })]
        }), MB && (0, lB.jsx)("div", {
          className: "SettingNote",
          children: MB
        })]
      })
    }

    function qB(BB) {
      let {
        name: OB,
        onChange: GB,
        min: DB,
        max: QB,
        step: jB,
        initValue: yB,
        circleInfoText: MB,
        format: PB,
        className: zB,
        padStep: pB,
        disabled: qB = !1,
        selectableMax: ZB,
        cappedNote: NB,
        note: WB,
        onChangeComplete: AB
      } = BB;
      const [VB, SB] = (0, YB.useState)(yB), nB = (0, YB.useRef)(yB);
      (0, YB.useEffect)((() => {
        nB.current = yB, SB(yB)
      }), [yB]);
      const UB = void 0 !== ZB && ZB < QB,
        fB = UB ? {
          "--slider-selectable": (ZB - DB) / (QB - DB)
        } : void 0,
        kB = UB && NB ? NB : WB;
      return (0, lB.jsxs)("div", {
        className: JB()("SettingBox SettingsSliderDiv", {
          [zB]: zB,
          SettingBoxDisabled: qB,
          SliderCapped: UB
        }),
        style: fB,
        children: [(0, lB.jsxs)("div", {
          className: "SliderText",
          children: [`${OB}: ${PB?PB(VB):VB}`, MB && (0, lB.jsx)(oB.c, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: MB
          })]
        }), (0, lB.jsx)("div", {
          className: "SliderDiv",
          children: (0, lB.jsx)(RB, {
            value: VB,
            min: DB,
            max: QB,
            step: jB,
            onChange: BB => {
              if (UB && BB >= ZB && VB === ZB) return;
              const OB = UB ? Math.min(BB, ZB) : BB;
              nB.current = OB, SB(OB), GB(OB)
            },
            onChangeComplete: AB && (() => {
              AB(nB.current)
            }),
            format: PB,
            padStep: pB,
            disabled: qB
          })
        }), kB && (0, lB.jsx)("div", {
          className: "SettingNote",
          children: kB
        })]
      })
    }
    const ZB = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function NB(BB) {
      var OB;
      return (null !== (OB = String(BB).split(".")[1]) && void 0 !== OB ? OB : "").length
    }

    function RB(BB) {
      let {
        value: OB,
        min: GB,
        max: QB,
        step: oB,
        onChange: jB,
        orientation: yB,
        reverse: JB,
        setIsChanging: MB,
        tooltip: PB,
        labels: pB,
        handleLabel: qB,
        format: RB,
        onChangeStart: WB,
        onChangeComplete: AB,
        padStep: VB,
        disabled: SB = !1
      } = BB;
      const nB = (0, YB.useRef)(null),
        UB = (0, YB.useRef)(null);
      (0, YB.useLayoutEffect)((() => {
        var BB, OB, GB;
        const YB = null !== (BB = null === (OB = nB.current) || void 0 === OB ? void 0 : OB.querySelector(".rangeslider")) && void 0 !== BB ? BB : null;
        null === YB || void 0 === YB || YB.setAttribute("data-pad-slider", ""), null === YB || void 0 === YB || YB.setAttribute("data-pad-focusable", ""), null === YB || void 0 === YB || null === (GB = YB.querySelector(".rangeslider__handle")) || void 0 === GB || GB.setAttribute("data-pad-slider-handle", ""), UB.current = YB
      }), []), (0, YB.useLayoutEffect)((() => {
        var BB, OB;
        SB ? null === (BB = UB.current) || void 0 === BB || BB.setAttribute("aria-disabled", "true") : null === (OB = UB.current) || void 0 === OB || OB.removeAttribute("aria-disabled")
      }), [SB]);
      const fB = Math.max(NB(oB), NB(GB)),
        kB = BB => {
          if (BB >= QB) return QB;
          if (BB <= GB) return GB;
          const OB = Number((Math.round((BB - GB) / oB) * oB + GB).toFixed(fB));
          return Math.min(QB, Math.max(GB, OB))
        },
        dB = (0, YB.useRef)(AB);
      dB.current = AB, (0, YB.useEffect)((() => {
        const BB = nB.current;
        if (!BB) return;
        const OB = BB => {
          var OB;
          ZB.has(BB.key) && (null === (OB = dB.current) || void 0 === OB || OB.call(dB))
        };
        return BB.addEventListener("keyup", OB), () => {
          BB.removeEventListener("keyup", OB)
        }
      }), []);
      const KB = (0, YB.useRef)(!1);
      return (0, zB.e)(UB, {
        adjust: BB => {
          if (SB) return;
          const YB = null !== VB && void 0 !== VB ? VB : Math.max(oB, Math.round((QB - GB) / 20 / oB) * oB),
            DB = kB(OB + BB * YB * (JB ? -1 : 1));
          DB !== OB && (null === WB || void 0 === WB || WB(), jB(DB), null === AB || void 0 === AB || AB())
        },
        setFraction: BB => {
          if (SB) return;
          const YB = kB(GB + (JB ? 1 - BB : BB) * (QB - GB));
          YB !== OB && (KB.current || (KB.current = !0, null === WB || void 0 === WB || WB()), jB(YB))
        },
        endDrag: () => {
          KB.current && (KB.current = !1, null === AB || void 0 === AB || AB())
        }
      }), (0, lB.jsx)("div", {
        ref: nB,
        style: {
          display: "contents"
        },
        children: (0, lB.jsx)(DB.b, {
          value: OB,
          min: GB,
          max: QB,
          step: oB,
          onChange: BB => {
            jB(kB(BB))
          },
          orientation: yB,
          reverse: JB,
          tooltip: PB,
          labels: pB,
          handleLabel: qB,
          format: RB,
          onChangeStart: () => {
            null === WB || void 0 === WB || WB(), null === MB || void 0 === MB || MB(!0)
          },
          onChangeComplete: () => {
            null === MB || void 0 === MB || MB(!1), null === AB || void 0 === AB || AB()
          }
        })
      })
    }
    async function WB() {
      const BB = MB.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await BB.getResult() && (0, PB.reloadBloxd)()
    }

    function AB(BB) {
      let {
        label: OB,
        options: GB,
        value: YB,
        onChange: DB,
        circleInfoText: QB
      } = BB;
      return (0, lB.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, lB.jsxs)("div", {
          className: "SliderText",
          children: [OB, QB && (0, lB.jsx)(oB.c, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: QB
          })]
        }), (0, lB.jsx)(jB.c, {
          ariaLabel: OB,
          options: GB,
          value: YB,
          onChange: DB
        })]
      })
    }
  },
  5478: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => ZB,
      g: () => NB
    });
    var YB = GB(3580),
      DB = GB(2272),
      QB = GB(56),
      oB = GB(1090),
      jB = GB.n(oB),
      yB = GB(1375),
      JB = GB(3573),
      MB = GB(1400),
      PB = GB(5480),
      zB = GB(5524),
      lB = GB(662),
      pB = GB(5552),
      qB = GB(1282);

    function ZB(BB) {
      var OB;
      let {
        setApplySettingsCallback: GB
      } = BB;
      const [, oB] = (0, QB.useReducer)((BB => BB + 1), 0), jB = (0, QB.useRef)(!1), yB = (0, QB.useRef)(null);

      function ZB(BB, OB) {
        JB.c.setFromJson(BB, "player");
        const YB = JB.c.saveTexturePack();
        if (lB.D) {
          const BB = JB.c.toJson();
          YB.then((OB => {
            OB && (0, pB.b)(BB)
          }))
        } else jB.current ||= OB, yB.current !== JB.c.getId() || JB.c.getId() === DB.t.CUSTOM && jB.current ? GB((() => PB.g)) : GB(null);
        oB()
      }
      async function RB(BB) {
        if (JB.c.getId() !== BB.metaData.id) {
          if (JB.c.getId() === DB.t.CUSTOM && JB.c.getFromFolderName()) {
            const BB = MB.NotificationProvider.showPromptPopup({
              title: "settingsMenu:loseChangesTitle",
              subtitle: "settingsMenu:loseChangesSubtitle",
              confirmText: "general:continue",
              destructive: !0,
              confirmTooltip: "",
              cancelText: "general:cancel",
              cancelTooltip: ""
            });
            if (!0 !== await BB.getResult()) return
          }
          ZB(BB, !1)
        }
      }(0, QB.useEffect)((() => {
        yB.current = JB.c.getId()
      }), []);
      const WB = YB.e,
        AB = [WB, ...Object.values(DB.t).filter((BB => BB !== WB))];
      return (0, qB.jsx)(qB.Fragment, {
        children: (0, qB.jsxs)("div", {
          className: "TexturePackCategory SettingsMenuRightInner",
          children: [(0, qB.jsx)("div", {
            className: "TexturePackList",
            children: AB.map((BB => (0, qB.jsx)(NB, {
              id: BB,
              isSelected: BB === JB.c.getId(),
              setSelected: RB
            }, BB)))
          }), JB.c.getId() === DB.t.CUSTOM && (0, qB.jsx)(zB.b, {
            folderName: null !== (OB = JB.c.getFromFolderName()) && void 0 !== OB ? OB : null,
            onTexturePackUpdated: function(BB) {
              ZB(BB, !0)
            },
            packOwner: "player"
          })]
        })
      })
    }

    function NB(BB) {
      let {
        id: OB,
        isSelected: GB,
        setSelected: oB,
        disabled: JB = !1
      } = BB;
      const [MB, PB] = (0, QB.useState)(!0), [zB, lB] = (0, QB.useState)(""), [pB, ZB] = (0, QB.useState)(""), [NB, RB] = (0, QB.useState)(""), WB = (0, QB.useRef)({});
      return (0, QB.useEffect)((() => {
        (0, YB.l)(OB).then((BB => {
          var OB;
          BB && (WB.current = BB, PB(!1), lB(WB.current.metaData.name), ZB(WB.current.metaData.author), RB(null !== (OB = WB.current.metaData.previewImage) && void 0 !== OB ? OB : ""))
        })).catch((BB => {
          console.warn(`Failed to fetch texture pack ${OB}`, BB)
        }))
      }), [OB]), (0, qB.jsxs)("div", {
        "data-pad-focusable": !0,
        "aria-disabled": JB || void 0,
        className: jB()("TexturePack", {
          Selected: GB,
          Custom: OB === DB.t.CUSTOM,
          Disabled: JB
        }),
        onClick: () => {
          MB || JB || oB(WB.current)
        },
        children: [(0, qB.jsx)("div", {
          className: "TexturePackBg",
          style: {
            backgroundImage: NB ? `url(${NB})` : void 0
          }
        }), MB && (0, qB.jsx)("div", {
          className: "TexturePackName",
          children: (0, qB.jsx)(yB.b, {})
        }), !MB && zB && (0, qB.jsx)("div", {
          className: "TexturePackName",
          children: zB
        }), !MB && pB && (0, qB.jsx)("div", {
          className: "TexturePackAuthor",
          children: pB
        })]
      })
    }
  },
  5531: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => jB,
      g: () => oB,
      j: () => QB
    });
    var YB = GB(5538);
    const DB = [BB => BB.strict ? "strict" : "nonStrict", BB => BB.program];

    function QB(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const YB = {};
      for (const DB in GB) YB[DB] = `\0${DB}\0`;
      return BB(OB, YB).replace(/\0(\w+)\0/g, ((BB, OB) => GB[OB]))
    }

    function oB(BB) {
      return null === BB.file ? null : BB.line > 0 ? `${BB.file}:${BB.line}` : BB.file
    }

    function jB(BB) {
      const OB = new Map(BB.map((BB => [yB(BB).join("."), BB])));
      if (0 === OB.size) return [];
      const GB = MB([...OB.values()]);
      return 0 === GB[0].length ? [] : GB
    }

    function yB(BB) {
      return DB.map((OB => OB(BB)))
    }
    const JB = DB.map((BB => new Set(YB.c.map(BB)).size));

    function MB(BB) {
      const OB = DB.map((OB => new Set(BB.map(OB)))),
        GB = OB.reduce(((BB, OB) => BB * OB.size), 1),
        YB = OB.every(((BB, OB) => 1 === BB.size || BB.size === JB[OB]));
      if (GB === BB.length && YB) return [DB.filter(((BB, GB) => 1 === OB[GB].size)).map((OB => OB(BB[0])))];
      let QB = null;
      for (let oB = 0; oB < DB.length; oB++) {
        if (1 === OB[oB].size) continue;
        const GB = PB(BB, DB[oB]).flatMap(MB);
        (null === QB || GB.length < QB.length) && (QB = GB)
      }
      return QB
    }

    function PB(BB, OB) {
      const GB = new Map;
      for (const DB of BB) {
        var YB;
        const BB = OB(DB);
        GB.set(BB, [...null !== (YB = GB.get(BB)) && void 0 !== YB ? YB : [], DB])
      }
      return [...GB.values()]
    }
  },
  5512: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => oB
    });
    var YB = GB(1090),
      DB = GB.n(YB),
      QB = GB(1282);

    function oB(BB) {
      let {
        options: OB,
        value: GB,
        onChange: YB,
        ariaLabel: oB,
        className: jB,
        reselectable: yB = !1,
        keepsFocus: JB = !1,
        padTabs: MB
      } = BB;
      const PB = void 0 !== MB;
      return (0, QB.jsx)("div", {
        className: DB()("SegmentedToggle", jB),
        role: "group",
        "aria-label": oB,
        "data-pad-tabs": MB,
        children: OB.map((BB => {
          const OB = BB.value === GB;
          return (0, QB.jsx)("button", {
            type: "button",
            "aria-pressed": OB,
            "data-pad-tab": PB || void 0,
            "data-pad-selected": PB && OB ? "true" : void 0,
            "data-pad-default-focus": PB && OB || void 0,
            "aria-label": BB.ariaLabel,
            title: BB.ariaLabel,
            className: DB()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: OB
            }),
            onMouseDown: JB ? BB => {
              BB.preventDefault()
            } : void 0,
            onClick: () => {
              OB && !yB || YB(BB.value)
            },
            children: BB.label
          }, BB.value)
        }))
      })
    }
  },
  5515: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => QB,
      e: () => oB
    });
    var YB = GB(56);
    const DB = new WeakMap,
      QB = BB => {
        var OB;
        const GB = BB.closest("[data-pad-slider]");
        return GB && null !== (OB = DB.get(GB)) && void 0 !== OB ? OB : null
      },
      oB = (BB, OB) => {
        const GB = (0, YB.useRef)(OB);
        GB.current = OB, (0, YB.useEffect)((() => {
          if (BB.current) return ((BB, OB) => (DB.set(BB, OB), () => {
            DB.get(BB) === OB && DB.delete(BB)
          }))(BB.current, {
            adjust: BB => {
              GB.current.adjust(BB)
            },
            setFraction: BB => {
              GB.current.setFraction(BB)
            },
            endDrag: () => {
              GB.current.endDrag()
            }
          })
        }), [BB])
      }
  },
  5538: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => YB.k,
      c: () => DB,
      g: () => YB.r
    });
    var YB = GB(5546);
    const DB = [!1, !0].flatMap((BB => ["terrain", "liquid", "model"].map((OB => ({
      strict: BB,
      program: OB
    })))))
  },
  5558: (BB, OB, GB) => {
    function YB(BB, OB) {
      return DB(BB, OB)
    }

    function DB(BB, OB) {
      if (BB === OB) return !0;
      if ("object" !== typeof BB || "object" !== typeof OB || null === BB || null === OB || Array.isArray(BB) !== Array.isArray(OB)) return !1;
      const GB = BB,
        YB = OB,
        QB = Object.keys(GB);
      return QB.length === Object.keys(YB).length && QB.every((BB => Object.prototype.hasOwnProperty.call(YB, BB) && DB(GB[BB], YB[BB])))
    }
    GB.d(OB, {
      b: () => YB
    })
  },
  5552: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => oB,
      f: () => jB
    });
    var YB = GB(2272),
      DB = GB(5558);
    let QB = null;

    function oB(BB) {
      QB = {
        pack: BB.metaData.id === YB.e ? null : BB
      }
    }

    function jB(BB) {
      return !(null === QB || !(0, DB.b)(QB.pack, BB)) && (QB = null, !0)
    }
  },
  5546: (BB, OB, GB) => {
    GB.d(OB, {
      B: () => zB,
      e: () => jB,
      h: () => oB,
      k: () => YB,
      o: () => qB,
      p: () => PB,
      r: () => DB,
      u: () => QB,
      v: () => JB,
      y: () => MB
    });
    const YB = 5;

    function DB(BB) {
      return BB === YB
    }

    function QB(BB) {
      return [...BB.features]
    }
    const oB = 262144,
      jB = 256,
      yB = 256;

    function JB(BB) {
      if ("object" !== typeof BB || null === BB || Array.isArray(BB)) return "The pack has no files.";
      const OB = [];
      for (const [GB, YB] of Object.entries(BB)) {
        if ("string" !== typeof YB) return `${GB} isn't text.`;
        OB.push({
          path: GB,
          source: YB
        })
      }
      return OB.sort(((BB, OB) => PB(BB.path, OB.path))),
        function(BB) {
          if (0 === BB.length) return "The pack has no .wgsl files.";
          if (BB.length > jB) return `The pack has more than ${jB} .wgsl files.`;
          const OB = new Set;
          for (const {
              path: GB
            }
            of BB) {
            const BB = lB(GB);
            if (null !== BB) return BB;
            if (OB.has(GB)) return `The pack has two files at ${GB}.`;
            OB.add(GB)
          }
          return zB(BB) > oB ? `The pack's .wgsl files are over ${oB/1024} KB in total.` : null
        }(OB) ?? OB
    }

    function MB(BB) {
      const OB = {};
      for (const GB of BB) OB[GB.path] = GB.source;
      return OB
    }

    function PB(BB, OB) {
      return BB < OB ? -1 : BB > OB ? 1 : 0
    }

    function zB(BB) {
      const OB = new TextEncoder;
      let GB = 0;
      for (const {
          source: YB
        }
        of BB) GB += OB.encode(YB).byteLength;
      return GB
    }

    function lB(BB) {
      if (!BB.toLowerCase().endsWith(".wgsl")) return `${BB} isn't a .wgsl file.`;
      if (BB.length > yB) return `A file path is over ${yB} characters.`;
      if (BB.includes("\\") || /[\u0000-\u001f]/.test(BB)) return `${BB} isn't a valid file path.`;
      return BB.split("/").some((BB => "" === BB || "." === BB || ".." === BB)) ? `${BB} isn't a valid file path.` : null
    }
    const pB = /^(.*)\[rot\[([1-4])$/;

    function qB(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const YB = new Map;
      OB.forEach(((BB, OB) => {
        let {
          numAnimStates: GB,
          animStartIdx: DB
        } = BB;
        for (let QB = 1; QB < GB; QB++) YB.set(DB + QB - 1, OB)
      }));
      const DB = Object.entries(BB),
        QB = new Map;
      for (const [qB, ZB] of DB) {
        const BB = pB.exec(qB);
        "1" === BB?.[2] && QB.set(BB[1], ZB + 1)
      }
      const oB = BB => {
          const OB = pB.exec(BB);
          return OB && QB.has(OB[1]) ? {
            root: OB[1],
            rotation: Number(OB[2]) - 1
          } : null
        },
        jB = new Set(DB.map((BB => {
          let [OB] = BB;
          return oB(OB)?.root ?? OB
        }))),
        yB = (BB, GB) => {
          const YB = BB.replace(/_?0$/, "");
          return (OB[GB]?.numAnimStates ?? 0) > 1 && !jB.has(YB) ? YB : BB
        },
        JB = new Map;
      for (const [pB, qB] of DB) JB.set(qB, yB(oB(pB)?.root ?? pB, qB));
      const MB = DB.reduce(((BB, OB) => {
          let [, GB] = OB;
          return Math.max(BB, GB + 1)
        }), 0),
        PB = Array.from({
          length: MB
        }, ((BB, OB) => ({
          id: OB + 1,
          rotation: 0
        }))),
        zB = new Map,
        lB = new Map;
      for (const [pB, qB] of DB) {
        const BB = oB(pB),
          OB = YB.get(qB);
        if (void 0 !== OB) {
          const GB = JB.get(OB);
          lB.set(pB, {
            name: pB,
            texture: GB,
            kind: "frame"
          }), BB && !lB.has(BB.root) && lB.set(BB.root, {
            name: BB.root,
            texture: GB,
            kind: "frame"
          });
          continue
        }
        const GB = JB.get(qB),
          DB = BB?.root ?? pB;
        if (GB !== DB && lB.set(DB, {
            name: DB,
            texture: GB,
            kind: "frame"
          }), BB) {
          const OB = QB.get(BB.root);
          PB[qB] = {
            id: OB,
            rotation: BB.rotation
          }, zB.set(GB, OB), lB.set(pB, {
            name: pB,
            texture: GB,
            kind: "rotation"
          })
        } else zB.set(GB, qB + 1)
      }
      for (const pB of zB.keys()) lB.delete(pB);
      for (const [pB, qB] of GB) {
        const BB = zB.get(qB);
        void 0 === BB || zB.has(pB) || (zB.set(pB, BB), lB.delete(pB))
      }
      return {
        named: [...zB].sort(((BB, OB) => {
          let [GB] = BB, [YB] = OB;
          return GB < YB ? -1 : GB > YB ? 1 : 0
        })).map((BB => {
          let [OB, GB] = BB;
          return {
            name: OB,
            id: GB
          }
        })),
        aliases: [...lB.values()],
        layers: PB
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);