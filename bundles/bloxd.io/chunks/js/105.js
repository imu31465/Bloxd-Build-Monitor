export const id = 105;
export const ids = [105];
export const modules = {
  5057: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => zB
    });
    var TB = ZB(1091),
      JB = ZB.n(TB),
      oB = ZB(1102),
      GB = ZB(1397),
      vB = ZB(3676),
      kB = ZB(140),
      cB = ZB(3706),
      nB = ZB(3698),
      hB = ZB(1153);

    function zB(BB) {
      let {
        game: IB
      } = BB;
      const ZB = (0, kB.is99NightsCrazyGamesBundle)() ? "large" : "small",
        TB = (0, cB.c)(IB, ZB),
        zB = (0, vB.c)(TB),
        FB = void 0 !== zB.blurhash;
      return (0, hB.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [zB.isLoading && !FB && (0, hB.jsx)(GB.d, {
          loaderType: "Secondary"
        }), !zB.failed && (null !== zB.src || FB) && (0, hB.jsx)("div", {
          className: JB()("SchematicImage", nB.h, {
            SchematicImageFadeIn: zB.fadeIn && !FB
          }),
          style: (0, nB.f)(zB),
          children: (0, hB.jsx)(nB.d, {
            image: zB
          })
        }), zB.failed && (0, hB.jsx)("div", {
          className: "SchematicImageError",
          children: (0, hB.jsx)(oB.d, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  5189: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => qB
    });
    var TB = ZB(63),
      JB = ZB(1091),
      oB = ZB.n(JB),
      GB = ZB(5112),
      vB = ZB(1397),
      kB = ZB(1248),
      cB = ZB(3324),
      nB = ZB(3478),
      hB = ZB(1102),
      zB = ZB(3332),
      FB = ZB(5198),
      NB = ZB(5214),
      gB = ZB(1153);

    function qB(BB) {
      let {
        folderName: IB,
        onTexturePackUpdated: JB,
        disabled: qB = !1,
        maxFileSizeMb: yB,
        packOwner: UB
      } = BB;
      const {
        t: WB
      } = (0, kB.G)(), [dB, CB] = (0, TB.useState)(!1), [QB, sB] = (0, TB.useState)(null), [wB, OB] = (0, TB.useState)(null), YB = (0, TB.useRef)(null);
      async function iB(BB) {
        CB(!0);
        try {
          const IB = await (0, cB.u)(BB);
          if ("customGame" === UB && (0, nB.k)(IB)) return void sB(WB(nB.c));
          if (void 0 !== yB) {
            const BB = JSON.stringify(IB).length / 1048576;
            if (BB > yB) return void sB(WB("customTexturePack:packTooBig", {
              size: BB.toFixed(1),
              max: yB
            }))
          }
          sB(null), OB(null), JB(IB), YB.current = IB,
            function(BB, IB) {
              const TB = BB.modelOverrides;
              TB && Promise.all([ZB.e(206), ZB.e(205)]).then((() => ZB(34256))).then((ZB => {
                let {
                  packDisplayName: JB,
                  refusedPackModels: oB,
                  packModelSummary: GB
                } = ZB;
                const vB = JB(BB.metaData);
                IB(GB(vB, oB(vB, TB, !1)))
              })).catch((BB => {
                console.error("Checking the texture pack's models failed:", BB)
              }))
            }(IB, (BB => {
              YB.current === IB && OB(BB)
            }))
        } catch (IB) {
          if (IB instanceof zB.d) {
            const BB = "customTexturePack:invalidPack" !== IB.translationKey || (0, NB.g)() ? IB.translationKey : "customTexturePack:invalidPackZip";
            sB((0, FB.h)(WB, BB, IB.params))
          } else console.error("Couldn't read the texture pack", IB), sB(WB("customTexturePack:errorTitle"))
        } finally {
          CB(!1)
        }
      }
      const {
        getRootProps: pB,
        getInputProps: aB,
        isDragActive: HB,
        open: MB
      } = (0, GB.d)({
        onDrop: iB,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: qB
      });
      return (0, gB.jsxs)("div", {
        className: "CustomTexturePackContainer",
        children: [(0, gB.jsxs)("div", {
          className: "CustomTextureWarning",
          children: [WB("settingsMenu:customTextureWarning"), ".", (0, gB.jsx)("br", {}), WB("settingsMenu:viewDocumentation"), ":", " ", (0, gB.jsx)("a", {
            href: "https://github.com/Bloxdy/texturePacks",
            target: "_blank",
            rel: "noreferrer",
            children: "github.com/Bloxdy/texturePacks"
          })]
        }), QB && (0, gB.jsxs)("div", {
          className: "CustomTextureError",
          children: [WB("general:error"), ": ", QB]
        }), wB && (0, gB.jsx)("div", {
          className: "CustomTextureError",
          children: wB
        }), (0, gB.jsxs)("div", {
          ...pB({
            className: oB()("CustomTextureFolderUpload", {
              ActiveDrag: HB,
              Disabled: qB
            })
          }),
          children: [(0, gB.jsx)("input", {
            ...aB({
              webkitdirectory: "true"
            })
          }), dB && (0, gB.jsx)("div", {
            className: "CustomTextureFolderUploadLoading",
            children: (0, gB.jsx)(vB.d, {})
          }), !dB && !HB && IB && (0, gB.jsxs)(gB.Fragment, {
            children: [(0, gB.jsx)("div", {
              className: "CustomTextureFolderUploadIcon Active",
              children: (0, gB.jsx)(hB.d, {
                name: "folder-image"
              })
            }), (0, gB.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions Active",
              children: IB
            })]
          }), !dB && (HB || !IB) && (0, gB.jsxs)(gB.Fragment, {
            children: [(0, gB.jsx)("div", {
              className: "CustomTextureFolderUploadIcon",
              children: (0, gB.jsx)(hB.d, {
                name: "up-from-bracket"
              })
            }), (0, gB.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions",
              children: WB((0, NB.g)() ? "customTexturePack:dropHere" : "customTexturePack:chooseZipInstructions")
            })]
          }), !dB && (0, gB.jsx)(NB.e, {
            disabled: qB,
            openFolderPicker: MB,
            onFiles: BB => {
              iB(BB)
            }
          })]
        })]
      })
    }
  },
  5214: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => nB,
      g: () => cB
    });
    var TB = ZB(63),
      JB = ZB(1516),
      oB = ZB(1248),
      GB = ZB(105),
      vB = ZB(3306),
      kB = ZB(1153);

    function cB() {
      return !(0, GB.isMobile)()
    }

    function nB(BB) {
      let {
        disabled: IB,
        openFolderPicker: ZB,
        onFiles: GB
      } = BB;
      const {
        t: nB
      } = (0, oB.G)(), hB = (0, TB.useRef)(null);
      return (0, kB.jsxs)("div", {
        className: "PackPickButtons",
        "data-pad-mouse-only": !0,
        children: [(0, kB.jsx)("input", {
          ref: hB,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(BB) {
            const IB = Array.from(BB.target.files);
            BB.target.value = "", GB(IB)
          }
        }), cB() && (0, kB.jsx)(JB.g, {
          disabled: IB,
          onClick: ZB,
          children: nB("general:chooseFolder")
        }), (0, kB.jsx)(JB.g, {
          disabled: IB,
          onClick: () => {
            (0, vB.i)(hB.current)
          },
          children: nB("general:chooseZip")
        })]
      })
    }
  },
  5143: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => NB,
      h: () => WB,
      j: () => gB,
      m: () => UB
    });
    var TB = ZB(63),
      JB = ZB(5150),
      oB = ZB(4545),
      GB = ZB(1421),
      vB = ZB(5177),
      kB = ZB(1091),
      cB = ZB.n(kB),
      nB = ZB(1403),
      hB = ZB(1805),
      zB = ZB(5186),
      FB = ZB(1153);

    function NB(BB) {
      let {
        label: IB,
        onClick: ZB,
        checked: TB,
        circleInfoText: JB,
        className: vB,
        disabled: kB,
        note: nB
      } = BB;
      return (0, FB.jsxs)("div", {
        "aria-disabled": kB || void 0,
        "data-pad-focusable": !0,
        className: cB()("SettingBox CheckboxContainer", {
          [vB]: vB,
          SettingBoxDisabled: kB
        }),
        onClick: () => {
          kB || ZB(!TB)
        },
        children: [(0, FB.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, FB.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, FB.jsx)(oB.d, {
              className: "SettingsCheckbox",
              checked: TB,
              disabled: kB,
              onChange: () => {}
            })
          }), (0, FB.jsxs)("div", {
            className: "CheckboxText",
            children: [IB, JB && (0, FB.jsx)("span", {
              onClick: BB => BB.stopPropagation(),
              children: (0, FB.jsx)(GB.d, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: JB
              })
            })]
          })]
        }), nB && (0, FB.jsx)("div", {
          className: "SettingNote",
          children: nB
        })]
      })
    }

    function gB(BB) {
      let {
        name: IB,
        onChange: ZB,
        min: JB,
        max: oB,
        step: vB,
        initValue: kB,
        circleInfoText: nB,
        format: hB,
        className: zB,
        padStep: NB,
        disabled: gB = !1,
        selectableMax: qB,
        cappedNote: UB,
        onChangeComplete: WB
      } = BB;
      const [dB, CB] = (0, TB.useState)(kB), QB = (0, TB.useRef)(kB);
      (0, TB.useEffect)((() => {
        QB.current = kB, CB(kB)
      }), [kB]);
      const sB = void 0 !== qB && qB < oB,
        wB = sB ? {
          "--slider-selectable": (qB - JB) / (oB - JB)
        } : void 0;
      return (0, FB.jsxs)("div", {
        className: cB()("SettingBox SettingsSliderDiv", {
          [zB]: zB,
          SettingBoxDisabled: gB,
          SliderCapped: sB
        }),
        style: wB,
        children: [(0, FB.jsxs)("div", {
          className: "SliderText",
          children: [`${IB}: ${hB?hB(dB):dB}`, nB && (0, FB.jsx)(GB.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: nB
          })]
        }), (0, FB.jsx)("div", {
          className: "SliderDiv",
          children: (0, FB.jsx)(yB, {
            value: dB,
            min: JB,
            max: oB,
            step: vB,
            onChange: BB => {
              if (sB && BB >= qB && dB === qB) return;
              const IB = sB ? Math.min(BB, qB) : BB;
              QB.current = IB, CB(IB), ZB(IB)
            },
            onChangeComplete: WB && (() => {
              WB(QB.current)
            }),
            format: hB,
            padStep: NB,
            disabled: gB
          })
        }), sB && UB && (0, FB.jsx)("div", {
          className: "SettingNote",
          children: UB
        })]
      })
    }
    const qB = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function yB(BB) {
      var IB;
      let {
        value: ZB,
        min: oB,
        max: GB,
        step: vB,
        onChange: kB,
        orientation: cB,
        reverse: nB,
        setIsChanging: hB,
        tooltip: NB,
        labels: gB,
        handleLabel: yB,
        format: UB,
        onChangeStart: WB,
        onChangeComplete: dB,
        padStep: CB,
        disabled: QB = !1
      } = BB;
      const sB = (0, TB.useRef)(null),
        wB = (0, TB.useRef)(null);
      (0, TB.useLayoutEffect)((() => {
        var BB, IB, ZB;
        const TB = null !== (BB = null === (IB = sB.current) || void 0 === IB ? void 0 : IB.querySelector(".rangeslider")) && void 0 !== BB ? BB : null;
        null === TB || void 0 === TB || TB.setAttribute("data-pad-slider", ""), null === TB || void 0 === TB || TB.setAttribute("data-pad-focusable", ""), null === TB || void 0 === TB || null === (ZB = TB.querySelector(".rangeslider__handle")) || void 0 === ZB || ZB.setAttribute("data-pad-slider-handle", ""), wB.current = TB
      }), []), (0, TB.useLayoutEffect)((() => {
        var BB, IB;
        QB ? null === (BB = wB.current) || void 0 === BB || BB.setAttribute("aria-disabled", "true") : null === (IB = wB.current) || void 0 === IB || IB.removeAttribute("aria-disabled")
      }), [QB]);
      const OB = (null !== (IB = String(vB).split(".")[1]) && void 0 !== IB ? IB : "").length,
        YB = BB => {
          const IB = Number((Math.round((BB - oB) / vB) * vB + oB).toFixed(OB));
          return Math.min(GB, Math.max(oB, IB))
        },
        iB = (0, TB.useRef)(dB);
      iB.current = dB, (0, TB.useEffect)((() => {
        const BB = sB.current;
        if (!BB) return;
        const IB = BB => {
          var IB;
          qB.has(BB.key) && (null === (IB = iB.current) || void 0 === IB || IB.call(iB))
        };
        return BB.addEventListener("keyup", IB), () => {
          BB.removeEventListener("keyup", IB)
        }
      }), []);
      const pB = (0, TB.useRef)(!1);
      return (0, zB.f)(wB, {
        adjust: BB => {
          if (QB) return;
          const IB = null !== CB && void 0 !== CB ? CB : Math.max(vB, Math.round((GB - oB) / 20 / vB) * vB),
            TB = YB(ZB + BB * IB * (nB ? -1 : 1));
          TB !== ZB && (null === WB || void 0 === WB || WB(), kB(TB), null === dB || void 0 === dB || dB())
        },
        setFraction: BB => {
          if (QB) return;
          const IB = YB(oB + (nB ? 1 - BB : BB) * (GB - oB));
          IB !== ZB && (pB.current || (pB.current = !0, null === WB || void 0 === WB || WB()), kB(IB))
        },
        endDrag: () => {
          pB.current && (pB.current = !1, null === dB || void 0 === dB || dB())
        }
      }), (0, FB.jsx)("div", {
        ref: sB,
        style: {
          display: "contents"
        },
        children: (0, FB.jsx)(JB.d, {
          value: ZB,
          min: oB,
          max: GB,
          step: vB,
          onChange: kB,
          orientation: cB,
          reverse: nB,
          tooltip: NB,
          labels: gB,
          handleLabel: yB,
          format: UB,
          onChangeStart: () => {
            null === WB || void 0 === WB || WB(), null === hB || void 0 === hB || hB(!0)
          },
          onChangeComplete: () => {
            null === hB || void 0 === hB || hB(!1), null === dB || void 0 === dB || dB()
          }
        })
      })
    }
    async function UB() {
      const BB = nB.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await BB.getResult() && (0, hB.reloadBloxd)()
    }

    function WB(BB) {
      let {
        label: IB,
        options: ZB,
        value: TB,
        onChange: JB,
        circleInfoText: oB
      } = BB;
      return (0, FB.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, FB.jsxs)("div", {
          className: "SliderText",
          children: [IB, oB && (0, FB.jsx)(GB.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: oB
          })]
        }), (0, FB.jsx)(vB.d, {
          ariaLabel: IB,
          options: ZB,
          value: TB,
          onChange: JB
        })]
      })
    }
  },
  5140: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => qB,
      f: () => yB
    });
    var TB = ZB(3324),
      JB = ZB(2236),
      oB = ZB(63),
      GB = ZB(1091),
      vB = ZB.n(GB),
      kB = ZB(1397),
      cB = ZB(3316),
      nB = ZB(1403),
      hB = ZB(5143),
      zB = ZB(5189),
      FB = ZB(684),
      NB = ZB(5223),
      gB = ZB(1153);

    function qB(BB) {
      var IB;
      let {
        setApplySettingsCallback: ZB
      } = BB;
      const [, GB] = (0, oB.useReducer)((BB => BB + 1), 0), vB = (0, oB.useRef)(!1), kB = (0, oB.useRef)(null);

      function qB(BB, IB) {
        cB.e.setFromJson(BB, "player");
        const TB = cB.e.saveTexturePack();
        if (FB.B) {
          const BB = cB.e.toJson();
          TB.then((IB => {
            IB && (0, NB.c)(BB)
          }))
        } else vB.current ||= IB, kB.current !== cB.e.getId() || cB.e.getId() === JB.q.CUSTOM && vB.current ? ZB((() => hB.m)) : ZB(null);
        GB()
      }
      async function UB(BB) {
        if (cB.e.getId() !== BB.metaData.id) {
          if (cB.e.getId() === JB.q.CUSTOM && cB.e.getFromFolderName()) {
            const BB = nB.NotificationProvider.showPromptPopup({
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
          qB(BB, !1)
        }
      }(0, oB.useEffect)((() => {
        kB.current = cB.e.getId()
      }), []);
      const WB = TB.e,
        dB = [WB, ...Object.values(JB.q).filter((BB => BB !== WB))];
      return (0, gB.jsx)(gB.Fragment, {
        children: (0, gB.jsxs)("div", {
          className: "TexturePackCategory SettingsMenuRightInner",
          children: [(0, gB.jsx)("div", {
            className: "TexturePackList",
            children: dB.map((BB => (0, gB.jsx)(yB, {
              id: BB,
              isSelected: BB === cB.e.getId(),
              setSelected: UB
            }, BB)))
          }), cB.e.getId() === JB.q.CUSTOM && (0, gB.jsx)(zB.b, {
            folderName: null !== (IB = cB.e.getFromFolderName()) && void 0 !== IB ? IB : null,
            onTexturePackUpdated: function(BB) {
              qB(BB, !0)
            },
            packOwner: "player"
          })]
        })
      })
    }

    function yB(BB) {
      let {
        id: IB,
        isSelected: ZB,
        setSelected: GB,
        disabled: cB = !1
      } = BB;
      const [nB, hB] = (0, oB.useState)(!0), [zB, FB] = (0, oB.useState)(""), [NB, qB] = (0, oB.useState)(""), [yB, UB] = (0, oB.useState)(""), WB = (0, oB.useRef)({});
      return (0, oB.useEffect)((() => {
        (0, TB.r)(IB).then((BB => {
          var IB;
          BB && (WB.current = BB, hB(!1), FB(WB.current.metaData.name), qB(WB.current.metaData.author), UB(null !== (IB = WB.current.metaData.previewImage) && void 0 !== IB ? IB : ""))
        })).catch((BB => {
          console.warn(`Failed to fetch texture pack ${IB}`, BB)
        }))
      }), [IB]), (0, gB.jsxs)("div", {
        "data-pad-focusable": !0,
        "aria-disabled": cB || void 0,
        className: vB()("TexturePack", {
          Selected: ZB,
          Custom: IB === JB.q.CUSTOM,
          Disabled: cB
        }),
        onClick: () => {
          nB || cB || GB(WB.current)
        },
        children: [(0, gB.jsx)("div", {
          className: "TexturePackBg",
          style: {
            backgroundImage: yB ? `url(${yB})` : void 0
          }
        }), nB && (0, gB.jsx)("div", {
          className: "TexturePackName",
          children: (0, gB.jsx)(kB.d, {})
        }), !nB && zB && (0, gB.jsx)("div", {
          className: "TexturePackName",
          children: zB
        }), !nB && NB && (0, gB.jsx)("div", {
          className: "TexturePackAuthor",
          children: NB
        })]
      })
    }
  },
  5198: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => vB,
      g: () => GB,
      h: () => oB
    });
    var TB = ZB(5204);
    const JB = [BB => BB.strict ? "strict" : "nonStrict", BB => BB.program];

    function oB(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const TB = {};
      for (const JB in ZB) TB[JB] = `\0${JB}\0`;
      return BB(IB, TB).replace(/\0(\w+)\0/g, ((BB, IB) => ZB[IB]))
    }

    function GB(BB) {
      return null === BB.file ? null : BB.line > 0 ? `${BB.file}:${BB.line}` : BB.file
    }

    function vB(BB) {
      const IB = new Map(BB.map((BB => [kB(BB).join("."), BB])));
      if (0 === IB.size) return [];
      const ZB = nB([...IB.values()]);
      return 0 === ZB[0].length ? [] : ZB
    }

    function kB(BB) {
      return JB.map((IB => IB(BB)))
    }
    const cB = JB.map((BB => new Set(TB.d.map(BB)).size));

    function nB(BB) {
      const IB = JB.map((IB => new Set(BB.map(IB)))),
        ZB = IB.reduce(((BB, IB) => BB * IB.size), 1),
        TB = IB.every(((BB, IB) => 1 === BB.size || BB.size === cB[IB]));
      if (ZB === BB.length && TB) return [JB.filter(((BB, ZB) => 1 === IB[ZB].size)).map((IB => IB(BB[0])))];
      let oB = null;
      for (let GB = 0; GB < JB.length; GB++) {
        if (1 === IB[GB].size) continue;
        const ZB = hB(BB, JB[GB]).flatMap(nB);
        (null === oB || ZB.length < oB.length) && (oB = ZB)
      }
      return oB
    }

    function hB(BB, IB) {
      const ZB = new Map;
      for (const JB of BB) {
        var TB;
        const BB = IB(JB);
        ZB.set(BB, [...null !== (TB = ZB.get(BB)) && void 0 !== TB ? TB : [], JB])
      }
      return [...ZB.values()]
    }
  },
  5177: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => GB
    });
    var TB = ZB(1091),
      JB = ZB.n(TB),
      oB = ZB(1153);

    function GB(BB) {
      let {
        options: IB,
        value: ZB,
        onChange: TB,
        ariaLabel: GB,
        className: vB,
        reselectable: kB = !1,
        keepsFocus: cB = !1,
        padTabs: nB
      } = BB;
      const hB = void 0 !== nB;
      return (0, oB.jsx)("div", {
        className: JB()("SegmentedToggle", vB),
        role: "group",
        "aria-label": GB,
        "data-pad-tabs": nB,
        children: IB.map((BB => {
          const IB = BB.value === ZB;
          return (0, oB.jsx)("button", {
            type: "button",
            "aria-pressed": IB,
            "data-pad-tab": hB || void 0,
            "data-pad-selected": hB && IB ? "true" : void 0,
            "data-pad-default-focus": hB && IB || void 0,
            "aria-label": BB.ariaLabel,
            title: BB.ariaLabel,
            className: JB()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: IB
            }),
            onMouseDown: cB ? BB => {
              BB.preventDefault()
            } : void 0,
            onClick: () => {
              IB && !kB || TB(BB.value)
            },
            children: BB.label
          }, BB.value)
        }))
      })
    }
  },
  5186: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => oB,
      f: () => GB
    });
    var TB = ZB(63);
    const JB = new WeakMap,
      oB = BB => {
        var IB;
        const ZB = BB.closest("[data-pad-slider]");
        return ZB && null !== (IB = JB.get(ZB)) && void 0 !== IB ? IB : null
      },
      GB = (BB, IB) => {
        const ZB = (0, TB.useRef)(IB);
        ZB.current = IB, (0, TB.useEffect)((() => {
          if (BB.current) return ((BB, IB) => (JB.set(BB, IB), () => {
            JB.get(BB) === IB && JB.delete(BB)
          }))(BB.current, {
            adjust: BB => {
              ZB.current.adjust(BB)
            },
            setFraction: BB => {
              ZB.current.setFraction(BB)
            },
            endDrag: () => {
              ZB.current.endDrag()
            }
          })
        }), [BB])
      }
  },
  5204: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => TB.j,
      d: () => JB,
      g: () => TB.o
    });
    var TB = ZB(5210);
    const JB = [!1, !0].flatMap((BB => ["terrain", "liquid", "model"].map((IB => ({
      strict: BB,
      program: IB
    })))))
  },
  5226: (BB, IB, ZB) => {
    function TB(BB, IB) {
      return JB(BB, IB)
    }

    function JB(BB, IB) {
      if (BB === IB) return !0;
      if ("object" !== typeof BB || "object" !== typeof IB || null === BB || null === IB || Array.isArray(BB) !== Array.isArray(IB)) return !1;
      const ZB = BB,
        TB = IB,
        oB = Object.keys(ZB);
      return oB.length === Object.keys(TB).length && oB.every((BB => Object.prototype.hasOwnProperty.call(TB, BB) && JB(ZB[BB], TB[BB])))
    }
    ZB.d(IB, {
      d: () => TB
    })
  },
  5223: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => GB,
      d: () => vB
    });
    var TB = ZB(2236),
      JB = ZB(5226);
    let oB = null;

    function GB(BB) {
      oB = {
        pack: BB.metaData.id === TB.e ? null : BB
      }
    }

    function vB(BB) {
      return !(null === oB || !(0, JB.d)(oB.pack, BB)) && (oB = null, !0)
    }
  },
  5210: (BB, IB, ZB) => {
    ZB.d(IB, {
      B: () => zB,
      d: () => vB,
      g: () => GB,
      j: () => TB,
      l: () => gB,
      m: () => hB,
      o: () => JB,
      q: () => oB,
      u: () => cB,
      y: () => nB
    });
    const TB = 5;

    function JB(BB) {
      return BB === TB
    }

    function oB(BB) {
      return [...BB.features]
    }
    const GB = 262144,
      vB = 256,
      kB = 256;

    function cB(BB) {
      if ("object" !== typeof BB || null === BB || Array.isArray(BB)) return "The pack has no files.";
      const IB = [];
      for (const [ZB, TB] of Object.entries(BB)) {
        if ("string" !== typeof TB) return `${ZB} isn't text.`;
        IB.push({
          path: ZB,
          source: TB
        })
      }
      return IB.sort(((BB, IB) => hB(BB.path, IB.path))),
        function(BB) {
          if (0 === BB.length) return "The pack has no .wgsl files.";
          if (BB.length > vB) return `The pack has more than ${vB} .wgsl files.`;
          const IB = new Set;
          for (const {
              path: ZB
            }
            of BB) {
            const BB = FB(ZB);
            if (null !== BB) return BB;
            if (IB.has(ZB)) return `The pack has two files at ${ZB}.`;
            IB.add(ZB)
          }
          return zB(BB) > GB ? `The pack's .wgsl files are over ${GB/1024} KB in total.` : null
        }(IB) ?? IB
    }

    function nB(BB) {
      const IB = {};
      for (const ZB of BB) IB[ZB.path] = ZB.source;
      return IB
    }

    function hB(BB, IB) {
      return BB < IB ? -1 : BB > IB ? 1 : 0
    }

    function zB(BB) {
      const IB = new TextEncoder;
      let ZB = 0;
      for (const {
          source: TB
        }
        of BB) ZB += IB.encode(TB).byteLength;
      return ZB
    }

    function FB(BB) {
      if (!BB.toLowerCase().endsWith(".wgsl")) return `${BB} isn't a .wgsl file.`;
      if (BB.length > kB) return `A file path is over ${kB} characters.`;
      if (BB.includes("\\") || /[\u0000-\u001f]/.test(BB)) return `${BB} isn't a valid file path.`;
      return BB.split("/").some((BB => "" === BB || "." === BB || ".." === BB)) ? `${BB} isn't a valid file path.` : null
    }
    const NB = /^(.*)\[rot\[([1-4])$/;

    function gB(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const TB = new Map;
      IB.forEach(((BB, IB) => {
        let {
          numAnimStates: ZB,
          animStartIdx: JB
        } = BB;
        for (let oB = 1; oB < ZB; oB++) TB.set(JB + oB - 1, IB)
      }));
      const JB = Object.entries(BB),
        oB = new Map;
      for (const [gB, qB] of JB) {
        const BB = NB.exec(gB);
        "1" === BB?.[2] && oB.set(BB[1], qB + 1)
      }
      const GB = BB => {
          const IB = NB.exec(BB);
          return IB && oB.has(IB[1]) ? {
            root: IB[1],
            rotation: Number(IB[2]) - 1
          } : null
        },
        vB = new Set(JB.map((BB => {
          let [IB] = BB;
          return GB(IB)?.root ?? IB
        }))),
        kB = (BB, ZB) => {
          const TB = BB.replace(/_?0$/, "");
          return (IB[ZB]?.numAnimStates ?? 0) > 1 && !vB.has(TB) ? TB : BB
        },
        cB = new Map;
      for (const [NB, gB] of JB) cB.set(gB, kB(GB(NB)?.root ?? NB, gB));
      const nB = JB.reduce(((BB, IB) => {
          let [, ZB] = IB;
          return Math.max(BB, ZB + 1)
        }), 0),
        hB = Array.from({
          length: nB
        }, ((BB, IB) => ({
          id: IB + 1,
          rotation: 0
        }))),
        zB = new Map,
        FB = new Map;
      for (const [NB, gB] of JB) {
        const BB = GB(NB),
          IB = TB.get(gB);
        if (void 0 !== IB) {
          const ZB = cB.get(IB);
          FB.set(NB, {
            name: NB,
            texture: ZB,
            kind: "frame"
          }), BB && !FB.has(BB.root) && FB.set(BB.root, {
            name: BB.root,
            texture: ZB,
            kind: "frame"
          });
          continue
        }
        const ZB = cB.get(gB),
          JB = BB?.root ?? NB;
        if (ZB !== JB && FB.set(JB, {
            name: JB,
            texture: ZB,
            kind: "frame"
          }), BB) {
          const IB = oB.get(BB.root);
          hB[gB] = {
            id: IB,
            rotation: BB.rotation
          }, zB.set(ZB, IB), FB.set(NB, {
            name: NB,
            texture: ZB,
            kind: "rotation"
          })
        } else zB.set(ZB, gB + 1)
      }
      for (const NB of zB.keys()) FB.delete(NB);
      for (const [NB, gB] of ZB) {
        const BB = zB.get(gB);
        void 0 === BB || zB.has(NB) || (zB.set(NB, BB), FB.delete(NB))
      }
      return {
        named: [...zB].sort(((BB, IB) => {
          let [ZB] = BB, [TB] = IB;
          return ZB < TB ? -1 : ZB > TB ? 1 : 0
        })).map((BB => {
          let [IB, ZB] = BB;
          return {
            name: IB,
            id: ZB
          }
        })),
        aliases: [...FB.values()],
        layers: hB
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);