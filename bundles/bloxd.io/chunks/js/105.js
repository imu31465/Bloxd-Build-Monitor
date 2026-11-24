export const id = 105;
export const ids = [105];
export const modules = {
  5002: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => rB
    });
    var QB = zB(1091),
      nB = zB.n(QB),
      dB = zB(1108),
      IB = zB(1369),
      NB = zB(3606),
      uB = zB(145),
      UB = zB(3645),
      aB = zB(3634),
      pB = zB(1148);

    function rB(BB) {
      let {
        game: jB
      } = BB;
      const zB = (0, uB.is99NightsCrazyGamesBundle)() ? "large" : "small",
        QB = (0, UB.e)(jB, zB),
        rB = (0, NB.f)(QB),
        sB = void 0 !== rB.blurhash;
      return (0, pB.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [rB.isLoading && !sB && (0, pB.jsx)(IB.e, {
          loaderType: "Secondary"
        }), !rB.failed && (null !== rB.src || sB) && (0, pB.jsx)("div", {
          className: nB()("SchematicImage", aB.h, {
            SchematicImageFadeIn: rB.fadeIn && !sB
          }),
          style: (0, aB.g)(rB),
          children: (0, pB.jsx)(aB.c, {
            image: rB
          })
        }), rB.failed && (0, pB.jsx)("div", {
          className: "SchematicImageError",
          children: (0, pB.jsx)(dB.c, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  5104: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => yB
    });
    var QB = zB(62),
      nB = zB(1091),
      dB = zB.n(nB),
      IB = zB(5041),
      NB = zB(1369),
      uB = zB(1240),
      UB = zB(3274),
      aB = zB(3411),
      pB = zB(1108),
      rB = zB(3278),
      sB = zB(5110),
      JB = zB(5125),
      mB = zB(1148);

    function yB(BB) {
      let {
        folderName: jB,
        onTexturePackUpdated: nB,
        disabled: yB = !1,
        maxFileSizeMb: kB,
        packOwner: GB
      } = BB;
      const {
        t: LB
      } = (0, uB.D)(), [gB, tB] = (0, QB.useState)(!1), [SB, MB] = (0, QB.useState)(null), [EB, iB] = (0, QB.useState)(null), qB = (0, QB.useRef)(null);
      async function fB(BB) {
        tB(!0);
        try {
          const jB = await (0, UB.u)(BB);
          if ("customGame" === GB && (0, aB.o)(jB)) return void MB(LB(aB.d));
          if (void 0 !== kB) {
            const BB = JSON.stringify(jB).length / 1048576;
            if (BB > kB) return void MB(LB("customTexturePack:packTooBig", {
              size: BB.toFixed(1),
              max: kB
            }))
          }
          MB(null), iB(null), nB(jB), qB.current = jB,
            function(BB, jB) {
              const QB = BB.modelOverrides;
              QB && Promise.all([zB.e(206), zB.e(205)]).then((() => zB(34310))).then((zB => {
                let {
                  packDisplayName: nB,
                  refusedPackModels: dB,
                  packModelSummary: IB
                } = zB;
                const NB = nB(BB.metaData);
                jB(IB(NB, dB(NB, QB, !1)))
              })).catch((BB => {
                console.error("Checking the texture pack's models failed:", BB)
              }))
            }(jB, (BB => {
              qB.current === jB && iB(BB)
            }))
        } catch (jB) {
          if (jB instanceof rB.b) {
            const BB = "customTexturePack:invalidPack" !== jB.translationKey || (0, JB.f)() ? jB.translationKey : "customTexturePack:invalidPackZip";
            MB((0, sB.h)(LB, BB, jB.params))
          } else console.error("Couldn't read the texture pack", jB), MB(LB("customTexturePack:errorTitle"))
        } finally {
          tB(!1)
        }
      }
      const {
        getRootProps: oB,
        getInputProps: HB,
        isDragActive: DB,
        open: FB
      } = (0, IB.d)({
        onDrop: fB,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: yB
      });
      return (0, mB.jsxs)("div", {
        className: "CustomTexturePackContainer",
        children: [(0, mB.jsxs)("div", {
          className: "CustomTextureWarning",
          children: [LB("settingsMenu:customTextureWarning"), ".", (0, mB.jsx)("br", {}), LB("settingsMenu:viewDocumentation"), ":", " ", (0, mB.jsx)("a", {
            href: "https://github.com/Bloxdy/texturePacks",
            target: "_blank",
            rel: "noreferrer",
            children: "github.com/Bloxdy/texturePacks"
          })]
        }), SB && (0, mB.jsxs)("div", {
          className: "CustomTextureError",
          children: [LB("general:error"), ": ", SB]
        }), EB && (0, mB.jsx)("div", {
          className: "CustomTextureError",
          children: EB
        }), (0, mB.jsxs)("div", {
          ...oB({
            className: dB()("CustomTextureFolderUpload", {
              ActiveDrag: DB,
              Disabled: yB
            })
          }),
          children: [(0, mB.jsx)("input", {
            ...HB({
              webkitdirectory: "true"
            })
          }), gB && (0, mB.jsx)("div", {
            className: "CustomTextureFolderUploadLoading",
            children: (0, mB.jsx)(NB.e, {})
          }), !gB && !DB && jB && (0, mB.jsxs)(mB.Fragment, {
            children: [(0, mB.jsx)("div", {
              className: "CustomTextureFolderUploadIcon Active",
              children: (0, mB.jsx)(pB.c, {
                name: "folder-image"
              })
            }), (0, mB.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions Active",
              children: jB
            })]
          }), !gB && (DB || !jB) && (0, mB.jsxs)(mB.Fragment, {
            children: [(0, mB.jsx)("div", {
              className: "CustomTextureFolderUploadIcon",
              children: (0, mB.jsx)(pB.c, {
                name: "up-from-bracket"
              })
            }), (0, mB.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions",
              children: LB((0, JB.f)() ? "customTexturePack:dropHere" : "customTexturePack:chooseZipInstructions")
            })]
          }), !gB && (0, mB.jsx)(JB.b, {
            disabled: yB,
            openFolderPicker: FB,
            onFiles: BB => {
              fB(BB)
            }
          })]
        })]
      })
    }
  },
  5125: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => aB,
      f: () => UB
    });
    var QB = zB(62),
      nB = zB(1478),
      dB = zB(1240),
      IB = zB(106),
      NB = zB(3258),
      uB = zB(1148);

    function UB() {
      return !(0, IB.isMobile)()
    }

    function aB(BB) {
      let {
        disabled: jB,
        openFolderPicker: zB,
        onFiles: IB
      } = BB;
      const {
        t: aB
      } = (0, dB.D)(), pB = (0, QB.useRef)(null);
      return (0, uB.jsxs)("div", {
        className: "PackPickButtons",
        "data-pad-mouse-only": !0,
        children: [(0, uB.jsx)("input", {
          ref: pB,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(BB) {
            const jB = Array.from(BB.target.files);
            BB.target.value = "", IB(jB)
          }
        }), UB() && (0, uB.jsx)(nB.f, {
          disabled: jB,
          onClick: zB,
          children: aB("general:chooseFolder")
        }), (0, uB.jsx)(nB.f, {
          disabled: jB,
          onClick: () => {
            (0, NB.f)(pB.current)
          },
          children: aB("general:chooseZip")
        })]
      })
    }
  },
  5078: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => JB,
      c: () => LB,
      f: () => mB,
      i: () => GB
    });
    var QB = zB(62),
      nB = zB(5081),
      dB = zB(4478),
      IB = zB(1388),
      NB = zB(5097),
      uB = zB(1091),
      UB = zB.n(uB),
      aB = zB(1381),
      pB = zB(1778),
      rB = zB(5101),
      sB = zB(1148);

    function JB(BB) {
      let {
        label: jB,
        onClick: zB,
        checked: QB,
        circleInfoText: nB,
        className: NB,
        disabled: uB,
        note: aB
      } = BB;
      return (0, sB.jsxs)("div", {
        "aria-disabled": uB || void 0,
        "data-pad-focusable": !0,
        className: UB()("SettingBox CheckboxContainer", {
          [NB]: NB,
          SettingBoxDisabled: uB
        }),
        onClick: () => {
          uB || zB(!QB)
        },
        children: [(0, sB.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, sB.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, sB.jsx)(dB.e, {
              className: "SettingsCheckbox",
              checked: QB,
              disabled: uB,
              onChange: () => {}
            })
          }), (0, sB.jsxs)("div", {
            className: "CheckboxText",
            children: [jB, nB && (0, sB.jsx)("span", {
              onClick: BB => BB.stopPropagation(),
              children: (0, sB.jsx)(IB.e, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: nB
              })
            })]
          })]
        }), aB && (0, sB.jsx)("div", {
          className: "SettingNote",
          children: aB
        })]
      })
    }

    function mB(BB) {
      let {
        name: jB,
        onChange: zB,
        min: nB,
        max: dB,
        step: NB,
        initValue: uB,
        circleInfoText: aB,
        format: pB,
        className: rB,
        padStep: JB,
        disabled: mB = !1,
        selectableMax: yB,
        cappedNote: GB,
        onChangeComplete: LB
      } = BB;
      const [gB, tB] = (0, QB.useState)(uB), SB = (0, QB.useRef)(uB);
      (0, QB.useEffect)((() => {
        SB.current = uB, tB(uB)
      }), [uB]);
      const MB = void 0 !== yB && yB < dB,
        EB = MB ? {
          "--slider-selectable": (yB - nB) / (dB - nB)
        } : void 0;
      return (0, sB.jsxs)("div", {
        className: UB()("SettingBox SettingsSliderDiv", {
          [rB]: rB,
          SettingBoxDisabled: mB,
          SliderCapped: MB
        }),
        style: EB,
        children: [(0, sB.jsxs)("div", {
          className: "SliderText",
          children: [`${jB}: ${pB?pB(gB):gB}`, aB && (0, sB.jsx)(IB.e, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: aB
          })]
        }), (0, sB.jsx)("div", {
          className: "SliderDiv",
          children: (0, sB.jsx)(kB, {
            value: gB,
            min: nB,
            max: dB,
            step: NB,
            onChange: BB => {
              if (MB && BB >= yB && gB === yB) return;
              const jB = MB ? Math.min(BB, yB) : BB;
              SB.current = jB, tB(jB), zB(jB)
            },
            onChangeComplete: LB && (() => {
              LB(SB.current)
            }),
            format: pB,
            padStep: JB,
            disabled: mB
          })
        }), MB && GB && (0, sB.jsx)("div", {
          className: "SettingNote",
          children: GB
        })]
      })
    }
    const yB = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function kB(BB) {
      var jB;
      let {
        value: zB,
        min: dB,
        max: IB,
        step: NB,
        onChange: uB,
        orientation: UB,
        reverse: aB,
        setIsChanging: pB,
        tooltip: JB,
        labels: mB,
        handleLabel: kB,
        format: GB,
        onChangeStart: LB,
        onChangeComplete: gB,
        padStep: tB,
        disabled: SB = !1
      } = BB;
      const MB = (0, QB.useRef)(null),
        EB = (0, QB.useRef)(null);
      (0, QB.useLayoutEffect)((() => {
        var BB, jB, zB;
        const QB = null !== (BB = null === (jB = MB.current) || void 0 === jB ? void 0 : jB.querySelector(".rangeslider")) && void 0 !== BB ? BB : null;
        null === QB || void 0 === QB || QB.setAttribute("data-pad-slider", ""), null === QB || void 0 === QB || QB.setAttribute("data-pad-focusable", ""), null === QB || void 0 === QB || null === (zB = QB.querySelector(".rangeslider__handle")) || void 0 === zB || zB.setAttribute("data-pad-slider-handle", ""), EB.current = QB
      }), []), (0, QB.useLayoutEffect)((() => {
        var BB, jB;
        SB ? null === (BB = EB.current) || void 0 === BB || BB.setAttribute("aria-disabled", "true") : null === (jB = EB.current) || void 0 === jB || jB.removeAttribute("aria-disabled")
      }), [SB]);
      const iB = (null !== (jB = String(NB).split(".")[1]) && void 0 !== jB ? jB : "").length,
        qB = BB => {
          const jB = Number((Math.round((BB - dB) / NB) * NB + dB).toFixed(iB));
          return Math.min(IB, Math.max(dB, jB))
        },
        fB = (0, QB.useRef)(gB);
      fB.current = gB, (0, QB.useEffect)((() => {
        const BB = MB.current;
        if (!BB) return;
        const jB = BB => {
          var jB;
          yB.has(BB.key) && (null === (jB = fB.current) || void 0 === jB || jB.call(fB))
        };
        return BB.addEventListener("keyup", jB), () => {
          BB.removeEventListener("keyup", jB)
        }
      }), []);
      const oB = (0, QB.useRef)(!1);
      return (0, rB.e)(EB, {
        adjust: BB => {
          if (SB) return;
          const jB = null !== tB && void 0 !== tB ? tB : Math.max(NB, Math.round((IB - dB) / 20 / NB) * NB),
            QB = qB(zB + BB * jB * (aB ? -1 : 1));
          QB !== zB && (null === LB || void 0 === LB || LB(), uB(QB), null === gB || void 0 === gB || gB())
        },
        setFraction: BB => {
          if (SB) return;
          const jB = qB(dB + (aB ? 1 - BB : BB) * (IB - dB));
          jB !== zB && (oB.current || (oB.current = !0, null === LB || void 0 === LB || LB()), uB(jB))
        },
        endDrag: () => {
          oB.current && (oB.current = !1, null === gB || void 0 === gB || gB())
        }
      }), (0, sB.jsx)("div", {
        ref: MB,
        style: {
          display: "contents"
        },
        children: (0, sB.jsx)(nB.c, {
          value: zB,
          min: dB,
          max: IB,
          step: NB,
          onChange: uB,
          orientation: UB,
          reverse: aB,
          tooltip: JB,
          labels: mB,
          handleLabel: kB,
          format: GB,
          onChangeStart: () => {
            null === LB || void 0 === LB || LB(), null === pB || void 0 === pB || pB(!0)
          },
          onChangeComplete: () => {
            null === pB || void 0 === pB || pB(!1), null === gB || void 0 === gB || gB()
          }
        })
      })
    }
    async function GB() {
      const BB = aB.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await BB.getResult() && (0, pB.reloadBloxd)()
    }

    function LB(BB) {
      let {
        label: jB,
        options: zB,
        value: QB,
        onChange: nB,
        circleInfoText: dB
      } = BB;
      return (0, sB.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, sB.jsxs)("div", {
          className: "SliderText",
          children: [jB, dB && (0, sB.jsx)(IB.e, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: dB
          })]
        }), (0, sB.jsx)(NB.e, {
          ariaLabel: jB,
          options: zB,
          value: QB,
          onChange: nB
        })]
      })
    }
  },
  5075: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => yB,
      d: () => kB
    });
    var QB = zB(3274),
      nB = zB(2206),
      dB = zB(62),
      IB = zB(1091),
      NB = zB.n(IB),
      uB = zB(1369),
      UB = zB(3270),
      aB = zB(1381),
      pB = zB(5078),
      rB = zB(5104),
      sB = zB(690),
      JB = zB(5132),
      mB = zB(1148);

    function yB(BB) {
      var jB;
      let {
        setApplySettingsCallback: zB
      } = BB;
      const [, IB] = (0, dB.useReducer)((BB => BB + 1), 0), NB = (0, dB.useRef)(!1), uB = (0, dB.useRef)(null);

      function yB(BB, jB) {
        UB.e.setFromJson(BB, "player");
        const QB = UB.e.saveTexturePack();
        if (sB.E) {
          const BB = UB.e.toJson();
          QB.then((jB => {
            jB && (0, JB.b)(BB)
          }))
        } else NB.current ||= jB, uB.current !== UB.e.getId() || UB.e.getId() === nB.o.CUSTOM && NB.current ? zB((() => pB.i)) : zB(null);
        IB()
      }
      async function GB(BB) {
        if (UB.e.getId() !== BB.metaData.id) {
          if (UB.e.getId() === nB.o.CUSTOM && UB.e.getFromFolderName()) {
            const BB = aB.NotificationProvider.showPromptPopup({
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
          yB(BB, !1)
        }
      }(0, dB.useEffect)((() => {
        uB.current = UB.e.getId()
      }), []);
      const LB = QB.e,
        gB = [LB, ...Object.values(nB.o).filter((BB => BB !== LB))];
      return (0, mB.jsx)(mB.Fragment, {
        children: (0, mB.jsxs)("div", {
          className: "TexturePackCategory SettingsMenuRightInner",
          children: [(0, mB.jsx)("div", {
            className: "TexturePackList",
            children: gB.map((BB => (0, mB.jsx)(kB, {
              id: BB,
              isSelected: BB === UB.e.getId(),
              setSelected: GB
            }, BB)))
          }), UB.e.getId() === nB.o.CUSTOM && (0, mB.jsx)(rB.d, {
            folderName: null !== (jB = UB.e.getFromFolderName()) && void 0 !== jB ? jB : null,
            onTexturePackUpdated: function(BB) {
              yB(BB, !0)
            },
            packOwner: "player"
          })]
        })
      })
    }

    function kB(BB) {
      let {
        id: jB,
        isSelected: zB,
        setSelected: IB,
        disabled: UB = !1
      } = BB;
      const [aB, pB] = (0, dB.useState)(!0), [rB, sB] = (0, dB.useState)(""), [JB, yB] = (0, dB.useState)(""), [kB, GB] = (0, dB.useState)(""), LB = (0, dB.useRef)({});
      return (0, dB.useEffect)((() => {
        (0, QB.r)(jB).then((BB => {
          var jB;
          BB && (LB.current = BB, pB(!1), sB(LB.current.metaData.name), yB(LB.current.metaData.author), GB(null !== (jB = LB.current.metaData.previewImage) && void 0 !== jB ? jB : ""))
        })).catch((BB => {
          console.warn(`Failed to fetch texture pack ${jB}`, BB)
        }))
      }), [jB]), (0, mB.jsxs)("div", {
        "data-pad-focusable": !0,
        "aria-disabled": UB || void 0,
        className: NB()("TexturePack", {
          Selected: zB,
          Custom: jB === nB.o.CUSTOM,
          Disabled: UB
        }),
        onClick: () => {
          aB || UB || IB(LB.current)
        },
        children: [(0, mB.jsx)("div", {
          className: "TexturePackBg",
          style: {
            backgroundImage: kB ? `url(${kB})` : void 0
          }
        }), aB && (0, mB.jsx)("div", {
          className: "TexturePackName",
          children: (0, mB.jsx)(uB.e, {})
        }), !aB && rB && (0, mB.jsx)("div", {
          className: "TexturePackName",
          children: rB
        }), !aB && JB && (0, mB.jsx)("div", {
          className: "TexturePackAuthor",
          children: JB
        })]
      })
    }
  },
  5110: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => NB,
      g: () => IB,
      h: () => dB
    });
    var QB = zB(5115);
    const nB = [BB => BB.strict ? "strict" : "nonStrict", BB => BB.program];

    function dB(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const QB = {};
      for (const nB in zB) QB[nB] = `\0${nB}\0`;
      return BB(jB, QB).replace(/\0(\w+)\0/g, ((BB, jB) => zB[jB]))
    }

    function IB(BB) {
      return null === BB.file ? null : BB.line > 0 ? `${BB.file}:${BB.line}` : BB.file
    }

    function NB(BB) {
      const jB = new Map(BB.map((BB => [uB(BB).join("."), BB])));
      if (0 === jB.size) return [];
      const zB = aB([...jB.values()]);
      return 0 === zB[0].length ? [] : zB
    }

    function uB(BB) {
      return nB.map((jB => jB(BB)))
    }
    const UB = nB.map((BB => new Set(QB.g.map(BB)).size));

    function aB(BB) {
      const jB = nB.map((jB => new Set(BB.map(jB)))),
        zB = jB.reduce(((BB, jB) => BB * jB.size), 1),
        QB = jB.every(((BB, jB) => 1 === BB.size || BB.size === UB[jB]));
      if (zB === BB.length && QB) return [nB.filter(((BB, zB) => 1 === jB[zB].size)).map((jB => jB(BB[0])))];
      let dB = null;
      for (let IB = 0; IB < nB.length; IB++) {
        if (1 === jB[IB].size) continue;
        const zB = pB(BB, nB[IB]).flatMap(aB);
        (null === dB || zB.length < dB.length) && (dB = zB)
      }
      return dB
    }

    function pB(BB, jB) {
      const zB = new Map;
      for (const nB of BB) {
        var QB;
        const BB = jB(nB);
        zB.set(BB, [...null !== (QB = zB.get(BB)) && void 0 !== QB ? QB : [], nB])
      }
      return [...zB.values()]
    }
  },
  5097: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => IB
    });
    var QB = zB(1091),
      nB = zB.n(QB),
      dB = zB(1148);

    function IB(BB) {
      let {
        options: jB,
        value: zB,
        onChange: QB,
        ariaLabel: IB,
        className: NB,
        reselectable: uB = !1,
        keepsFocus: UB = !1,
        padTabs: aB
      } = BB;
      const pB = void 0 !== aB;
      return (0, dB.jsx)("div", {
        className: nB()("SegmentedToggle", NB),
        role: "group",
        "aria-label": IB,
        "data-pad-tabs": aB,
        children: jB.map((BB => {
          const jB = BB.value === zB;
          return (0, dB.jsx)("button", {
            type: "button",
            "aria-pressed": jB,
            "data-pad-tab": pB || void 0,
            "data-pad-selected": pB && jB ? "true" : void 0,
            "data-pad-default-focus": pB && jB || void 0,
            "aria-label": BB.ariaLabel,
            title: BB.ariaLabel,
            className: nB()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: jB
            }),
            onMouseDown: UB ? BB => {
              BB.preventDefault()
            } : void 0,
            onClick: () => {
              jB && !uB || QB(BB.value)
            },
            children: BB.label
          }, BB.value)
        }))
      })
    }
  },
  5101: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => dB,
      e: () => IB
    });
    var QB = zB(62);
    const nB = new WeakMap,
      dB = BB => {
        var jB;
        const zB = BB.closest("[data-pad-slider]");
        return zB && null !== (jB = nB.get(zB)) && void 0 !== jB ? jB : null
      },
      IB = (BB, jB) => {
        const zB = (0, QB.useRef)(jB);
        zB.current = jB, (0, QB.useEffect)((() => {
          if (BB.current) return ((BB, jB) => (nB.set(BB, jB), () => {
            nB.get(BB) === jB && nB.delete(BB)
          }))(BB.current, {
            adjust: BB => {
              zB.current.adjust(BB)
            },
            setFraction: BB => {
              zB.current.setFraction(BB)
            },
            endDrag: () => {
              zB.current.endDrag()
            }
          })
        }), [BB])
      }
  },
  5115: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => QB.f,
      g: () => nB,
      k: () => QB.n
    });
    var QB = zB(5120);
    const nB = [!1, !0].flatMap((BB => ["terrain", "liquid", "model"].map((jB => ({
      strict: BB,
      program: jB
    })))))
  },
  5134: (BB, jB, zB) => {
    function QB(BB, jB) {
      return nB(BB, jB)
    }

    function nB(BB, jB) {
      if (BB === jB) return !0;
      if ("object" !== typeof BB || "object" !== typeof jB || null === BB || null === jB || Array.isArray(BB) !== Array.isArray(jB)) return !1;
      const zB = BB,
        QB = jB,
        dB = Object.keys(zB);
      return dB.length === Object.keys(QB).length && dB.every((BB => Object.prototype.hasOwnProperty.call(QB, BB) && nB(zB[BB], QB[BB])))
    }
    zB.d(jB, {
      d: () => QB
    })
  },
  5132: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => IB,
      d: () => NB
    });
    var QB = zB(2206),
      nB = zB(5134);
    let dB = null;

    function IB(BB) {
      dB = {
        pack: BB.metaData.id === QB.d ? null : BB
      }
    }

    function NB(BB) {
      return !(null === dB || !(0, nB.d)(dB.pack, BB)) && (dB = null, !0)
    }
  },
  5120: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => NB,
      e: () => IB,
      f: () => QB,
      j: () => mB,
      m: () => pB,
      n: () => nB,
      o: () => dB,
      s: () => UB,
      w: () => aB,
      z: () => rB
    });
    const QB = 5;

    function nB(BB) {
      return BB === QB
    }

    function dB(BB) {
      return [...BB.features]
    }
    const IB = 262144,
      NB = 256,
      uB = 256;

    function UB(BB) {
      if ("object" !== typeof BB || null === BB || Array.isArray(BB)) return "The pack has no files.";
      const jB = [];
      for (const [zB, QB] of Object.entries(BB)) {
        if ("string" !== typeof QB) return `${zB} isn't text.`;
        jB.push({
          path: zB,
          source: QB
        })
      }
      return jB.sort(((BB, jB) => pB(BB.path, jB.path))),
        function(BB) {
          if (0 === BB.length) return "The pack has no .wgsl files.";
          if (BB.length > NB) return `The pack has more than ${NB} .wgsl files.`;
          const jB = new Set;
          for (const {
              path: zB
            }
            of BB) {
            const BB = sB(zB);
            if (null !== BB) return BB;
            if (jB.has(zB)) return `The pack has two files at ${zB}.`;
            jB.add(zB)
          }
          return rB(BB) > IB ? `The pack's .wgsl files are over ${IB/1024} KB in total.` : null
        }(jB) ?? jB
    }

    function aB(BB) {
      const jB = {};
      for (const zB of BB) jB[zB.path] = zB.source;
      return jB
    }

    function pB(BB, jB) {
      return BB < jB ? -1 : BB > jB ? 1 : 0
    }

    function rB(BB) {
      const jB = new TextEncoder;
      let zB = 0;
      for (const {
          source: QB
        }
        of BB) zB += jB.encode(QB).byteLength;
      return zB
    }

    function sB(BB) {
      if (!BB.toLowerCase().endsWith(".wgsl")) return `${BB} isn't a .wgsl file.`;
      if (BB.length > uB) return `A file path is over ${uB} characters.`;
      if (BB.includes("\\") || /[\u0000-\u001f]/.test(BB)) return `${BB} isn't a valid file path.`;
      return BB.split("/").some((BB => "" === BB || "." === BB || ".." === BB)) ? `${BB} isn't a valid file path.` : null
    }
    const JB = /^(.*)\[rot\[([1-4])$/;

    function mB(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const QB = new Map;
      jB.forEach(((BB, jB) => {
        let {
          numAnimStates: zB,
          animStartIdx: nB
        } = BB;
        for (let dB = 1; dB < zB; dB++) QB.set(nB + dB - 1, jB)
      }));
      const nB = Object.entries(BB),
        dB = new Map;
      for (const [mB, yB] of nB) {
        const BB = JB.exec(mB);
        "1" === BB?.[2] && dB.set(BB[1], yB + 1)
      }
      const IB = BB => {
          const jB = JB.exec(BB);
          return jB && dB.has(jB[1]) ? {
            root: jB[1],
            rotation: Number(jB[2]) - 1
          } : null
        },
        NB = new Set(nB.map((BB => {
          let [jB] = BB;
          return IB(jB)?.root ?? jB
        }))),
        uB = (BB, zB) => {
          const QB = BB.replace(/_?0$/, "");
          return (jB[zB]?.numAnimStates ?? 0) > 1 && !NB.has(QB) ? QB : BB
        },
        UB = new Map;
      for (const [JB, mB] of nB) UB.set(mB, uB(IB(JB)?.root ?? JB, mB));
      const aB = nB.reduce(((BB, jB) => {
          let [, zB] = jB;
          return Math.max(BB, zB + 1)
        }), 0),
        pB = Array.from({
          length: aB
        }, ((BB, jB) => ({
          id: jB + 1,
          rotation: 0
        }))),
        rB = new Map,
        sB = new Map;
      for (const [JB, mB] of nB) {
        const BB = IB(JB),
          jB = QB.get(mB);
        if (void 0 !== jB) {
          const zB = UB.get(jB);
          sB.set(JB, {
            name: JB,
            texture: zB,
            kind: "frame"
          }), BB && !sB.has(BB.root) && sB.set(BB.root, {
            name: BB.root,
            texture: zB,
            kind: "frame"
          });
          continue
        }
        const zB = UB.get(mB),
          nB = BB?.root ?? JB;
        if (zB !== nB && sB.set(nB, {
            name: nB,
            texture: zB,
            kind: "frame"
          }), BB) {
          const jB = dB.get(BB.root);
          pB[mB] = {
            id: jB,
            rotation: BB.rotation
          }, rB.set(zB, jB), sB.set(JB, {
            name: JB,
            texture: zB,
            kind: "rotation"
          })
        } else rB.set(zB, mB + 1)
      }
      for (const JB of rB.keys()) sB.delete(JB);
      for (const [JB, mB] of zB) {
        const BB = rB.get(mB);
        void 0 === BB || rB.has(JB) || (rB.set(JB, BB), sB.delete(JB))
      }
      return {
        named: [...rB].sort(((BB, jB) => {
          let [zB] = BB, [QB] = jB;
          return zB < QB ? -1 : zB > QB ? 1 : 0
        })).map((BB => {
          let [jB, zB] = BB;
          return {
            name: jB,
            id: zB
          }
        })),
        aliases: [...sB.values()],
        layers: pB
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);