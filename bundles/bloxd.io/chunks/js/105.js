export const id = 105;
export const ids = [105];
export const modules = {
  5013: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => LT
    });
    var WT = mT(1126),
      zT = mT.n(WT),
      MT = mT(1135),
      gT = mT(1446),
      nT = mT(3599),
      HT = mT(133),
      kT = mT(3644),
      jT = mT(3627),
      lT = mT(1188);

    function LT(TT) {
      let {
        game: UT
      } = TT;
      const mT = (0, HT.is99NightsCrazyGamesBundle)() ? "large" : "small",
        WT = (0, kT.e)(UT, mT),
        LT = (0, nT.e)(WT),
        pT = void 0 !== LT.blurhash;
      return (0, lT.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [LT.isLoading && !pT && (0, lT.jsx)(gT.c, {
          loaderType: "Secondary"
        }), !LT.failed && (null !== LT.src || pT) && (0, lT.jsx)("div", {
          className: zT()("SchematicImage", jT.h, {
            SchematicImageFadeIn: LT.fadeIn && !pT
          }),
          style: (0, jT.e)(LT),
          children: (0, lT.jsx)(jT.c, {
            image: LT
          })
        }), LT.failed && (0, lT.jsx)("div", {
          className: "SchematicImageError",
          children: (0, lT.jsx)(MT.c, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  5130: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => cT
    });
    var WT = mT(63),
      zT = mT(1126),
      MT = mT.n(zT),
      gT = mT(5057),
      nT = mT(1446),
      HT = mT(1288),
      kT = mT(3292),
      jT = mT(3419),
      lT = mT(1135),
      LT = mT(3295),
      pT = mT(5136),
      BT = mT(5151),
      ZT = mT(1188);

    function cT(TT) {
      let {
        folderName: UT,
        onTexturePackUpdated: zT,
        disabled: cT = !1,
        maxFileSizeMb: vT,
        packOwner: fT
      } = TT;
      const {
        t: qT
      } = (0, HT.z)(), [iT, bT] = (0, WT.useState)(!1), [OT, eT] = (0, WT.useState)(null), [YT, JT] = (0, WT.useState)(null), xT = (0, WT.useRef)(null);
      async function dT(TT) {
        bT(!0);
        try {
          const UT = await (0, kT.p)(TT);
          if ("customGame" === fT && (0, jT.h)(UT)) return void eT(qT(jT.d));
          if (void 0 !== vT) {
            const TT = JSON.stringify(UT).length / 1048576;
            if (TT > vT) return void eT(qT("customTexturePack:packTooBig", {
              size: TT.toFixed(1),
              max: vT
            }))
          }
          eT(null), JT(null), zT(UT), xT.current = UT,
            function(TT, UT) {
              const WT = TT.modelOverrides;
              WT && Promise.all([mT.e(206), mT.e(205)]).then((() => mT(34345))).then((mT => {
                let {
                  packDisplayName: zT,
                  refusedPackModels: MT,
                  packModelSummary: gT
                } = mT;
                const nT = zT(TT.metaData);
                UT(gT(nT, MT(nT, WT, !1)))
              })).catch((TT => {
                console.error("Checking the texture pack's models failed:", TT)
              }))
            }(UT, (TT => {
              xT.current === UT && JT(TT)
            }))
        } catch (UT) {
          if (UT instanceof LT.e) {
            const TT = "customTexturePack:invalidPack" !== UT.translationKey || (0, BT.i)() ? UT.translationKey : "customTexturePack:invalidPackZip";
            eT((0, pT.f)(qT, TT, UT.params))
          } else console.error("Couldn't read the texture pack", UT), eT(qT("customTexturePack:errorTitle"))
        } finally {
          bT(!1)
        }
      }
      const {
        getRootProps: wT,
        getInputProps: tT,
        isDragActive: aT,
        open: yT
      } = (0, gT.b)({
        onDrop: dT,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: cT
      });
      return (0, ZT.jsxs)("div", {
        className: "CustomTexturePackContainer",
        children: [(0, ZT.jsxs)("div", {
          className: "CustomTextureWarning",
          children: [qT("settingsMenu:customTextureWarning"), ".", (0, ZT.jsx)("br", {}), qT("settingsMenu:viewDocumentation"), ":", " ", (0, ZT.jsx)("a", {
            href: "https://github.com/Bloxdy/texturePacks",
            target: "_blank",
            rel: "noreferrer",
            children: "github.com/Bloxdy/texturePacks"
          })]
        }), OT && (0, ZT.jsxs)("div", {
          className: "CustomTextureError",
          children: [qT("general:error"), ": ", OT]
        }), YT && (0, ZT.jsx)("div", {
          className: "CustomTextureError",
          children: YT
        }), (0, ZT.jsxs)("div", {
          ...wT({
            className: MT()("CustomTextureFolderUpload", {
              ActiveDrag: aT,
              Disabled: cT
            })
          }),
          children: [(0, ZT.jsx)("input", {
            ...tT({
              webkitdirectory: "true"
            })
          }), iT && (0, ZT.jsx)("div", {
            className: "CustomTextureFolderUploadLoading",
            children: (0, ZT.jsx)(nT.c, {})
          }), !iT && !aT && UT && (0, ZT.jsxs)(ZT.Fragment, {
            children: [(0, ZT.jsx)("div", {
              className: "CustomTextureFolderUploadIcon Active",
              children: (0, ZT.jsx)(lT.c, {
                name: "folder-image"
              })
            }), (0, ZT.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions Active",
              children: UT
            })]
          }), !iT && (aT || !UT) && (0, ZT.jsxs)(ZT.Fragment, {
            children: [(0, ZT.jsx)("div", {
              className: "CustomTextureFolderUploadIcon",
              children: (0, ZT.jsx)(lT.c, {
                name: "up-from-bracket"
              })
            }), (0, ZT.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions",
              children: qT((0, BT.i)() ? "customTexturePack:dropHere" : "customTexturePack:chooseZipInstructions")
            })]
          }), !iT && (0, ZT.jsx)(BT.e, {
            disabled: cT,
            openFolderPicker: yT,
            onFiles: TT => {
              dT(TT)
            }
          })]
        })]
      })
    }
  },
  5151: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => jT,
      i: () => kT
    });
    var WT = mT(63),
      zT = mT(1569),
      MT = mT(1288),
      gT = mT(102),
      nT = mT(3278),
      HT = mT(1188);

    function kT() {
      return !(0, gT.isMobile)()
    }

    function jT(TT) {
      let {
        disabled: UT,
        openFolderPicker: mT,
        onFiles: gT
      } = TT;
      const {
        t: jT
      } = (0, MT.z)(), lT = (0, WT.useRef)(null);
      return (0, HT.jsxs)("div", {
        className: "PackPickButtons",
        "data-pad-mouse-only": !0,
        children: [(0, HT.jsx)("input", {
          ref: lT,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(TT) {
            const UT = Array.from(TT.target.files);
            TT.target.value = "", gT(UT)
          }
        }), kT() && (0, HT.jsx)(zT.e, {
          disabled: UT,
          onClick: mT,
          children: jT("general:chooseFolder")
        }), (0, HT.jsx)(zT.e, {
          disabled: UT,
          onClick: () => {
            (0, nT.f)(lT.current)
          },
          children: jT("general:chooseZip")
        })]
      })
    }
  },
  5090: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => BT,
      f: () => qT,
      j: () => ZT,
      l: () => fT
    });
    var WT = mT(63),
      zT = mT(5095),
      MT = mT(4468),
      gT = mT(1475),
      nT = mT(5116),
      HT = mT(1126),
      kT = mT.n(HT),
      jT = mT(1457),
      lT = mT(1863),
      LT = mT(5123),
      pT = mT(1188);

    function BT(TT) {
      let {
        label: UT,
        onClick: mT,
        checked: WT,
        circleInfoText: zT,
        className: nT,
        disabled: HT,
        note: jT
      } = TT;
      return (0, pT.jsxs)("div", {
        "aria-disabled": HT || void 0,
        "data-pad-focusable": !0,
        className: kT()("SettingBox CheckboxContainer", {
          [nT]: nT,
          SettingBoxDisabled: HT
        }),
        onClick: () => {
          HT || mT(!WT)
        },
        children: [(0, pT.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, pT.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, pT.jsx)(MT.d, {
              className: "SettingsCheckbox",
              checked: WT,
              disabled: HT,
              onChange: () => {}
            })
          }), (0, pT.jsxs)("div", {
            className: "CheckboxText",
            children: [UT, zT && (0, pT.jsx)("span", {
              onClick: TT => TT.stopPropagation(),
              children: (0, pT.jsx)(gT.c, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: zT
              })
            })]
          })]
        }), jT && (0, pT.jsx)("div", {
          className: "SettingNote",
          children: jT
        })]
      })
    }

    function ZT(TT) {
      let {
        name: UT,
        onChange: mT,
        min: zT,
        max: MT,
        step: nT,
        initValue: HT,
        circleInfoText: jT,
        format: lT,
        className: LT,
        padStep: BT,
        disabled: ZT = !1,
        selectableMax: cT,
        cappedNote: fT,
        onChangeComplete: qT
      } = TT;
      const [iT, bT] = (0, WT.useState)(HT), OT = (0, WT.useRef)(HT);
      (0, WT.useEffect)((() => {
        OT.current = HT, bT(HT)
      }), [HT]);
      const eT = void 0 !== cT && cT < MT,
        YT = eT ? {
          "--slider-selectable": (cT - zT) / (MT - zT)
        } : void 0;
      return (0, pT.jsxs)("div", {
        className: kT()("SettingBox SettingsSliderDiv", {
          [LT]: LT,
          SettingBoxDisabled: ZT,
          SliderCapped: eT
        }),
        style: YT,
        children: [(0, pT.jsxs)("div", {
          className: "SliderText",
          children: [`${UT}: ${lT?lT(iT):iT}`, jT && (0, pT.jsx)(gT.c, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: jT
          })]
        }), (0, pT.jsx)("div", {
          className: "SliderDiv",
          children: (0, pT.jsx)(vT, {
            value: iT,
            min: zT,
            max: MT,
            step: nT,
            onChange: TT => {
              if (eT && TT >= cT && iT === cT) return;
              const UT = eT ? Math.min(TT, cT) : TT;
              OT.current = UT, bT(UT), mT(UT)
            },
            onChangeComplete: qT && (() => {
              qT(OT.current)
            }),
            format: lT,
            padStep: BT,
            disabled: ZT
          })
        }), eT && fT && (0, pT.jsx)("div", {
          className: "SettingNote",
          children: fT
        })]
      })
    }
    const cT = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function vT(TT) {
      var UT;
      let {
        value: mT,
        min: MT,
        max: gT,
        step: nT,
        onChange: HT,
        orientation: kT,
        reverse: jT,
        setIsChanging: lT,
        tooltip: BT,
        labels: ZT,
        handleLabel: vT,
        format: fT,
        onChangeStart: qT,
        onChangeComplete: iT,
        padStep: bT,
        disabled: OT = !1
      } = TT;
      const eT = (0, WT.useRef)(null),
        YT = (0, WT.useRef)(null);
      (0, WT.useLayoutEffect)((() => {
        var TT, UT, mT;
        const WT = null !== (TT = null === (UT = eT.current) || void 0 === UT ? void 0 : UT.querySelector(".rangeslider")) && void 0 !== TT ? TT : null;
        null === WT || void 0 === WT || WT.setAttribute("data-pad-slider", ""), null === WT || void 0 === WT || WT.setAttribute("data-pad-focusable", ""), null === WT || void 0 === WT || null === (mT = WT.querySelector(".rangeslider__handle")) || void 0 === mT || mT.setAttribute("data-pad-slider-handle", ""), YT.current = WT
      }), []), (0, WT.useLayoutEffect)((() => {
        var TT, UT;
        OT ? null === (TT = YT.current) || void 0 === TT || TT.setAttribute("aria-disabled", "true") : null === (UT = YT.current) || void 0 === UT || UT.removeAttribute("aria-disabled")
      }), [OT]);
      const JT = (null !== (UT = String(nT).split(".")[1]) && void 0 !== UT ? UT : "").length,
        xT = TT => {
          const UT = Number((Math.round((TT - MT) / nT) * nT + MT).toFixed(JT));
          return Math.min(gT, Math.max(MT, UT))
        },
        dT = (0, WT.useRef)(iT);
      dT.current = iT, (0, WT.useEffect)((() => {
        const TT = eT.current;
        if (!TT) return;
        const UT = TT => {
          var UT;
          cT.has(TT.key) && (null === (UT = dT.current) || void 0 === UT || UT.call(dT))
        };
        return TT.addEventListener("keyup", UT), () => {
          TT.removeEventListener("keyup", UT)
        }
      }), []);
      const wT = (0, WT.useRef)(!1);
      return (0, LT.g)(YT, {
        adjust: TT => {
          if (OT) return;
          const UT = null !== bT && void 0 !== bT ? bT : Math.max(nT, Math.round((gT - MT) / 20 / nT) * nT),
            WT = xT(mT + TT * UT * (jT ? -1 : 1));
          WT !== mT && (null === qT || void 0 === qT || qT(), HT(WT), null === iT || void 0 === iT || iT())
        },
        setFraction: TT => {
          if (OT) return;
          const UT = xT(MT + (jT ? 1 - TT : TT) * (gT - MT));
          UT !== mT && (wT.current || (wT.current = !0, null === qT || void 0 === qT || qT()), HT(UT))
        },
        endDrag: () => {
          wT.current && (wT.current = !1, null === iT || void 0 === iT || iT())
        }
      }), (0, pT.jsx)("div", {
        ref: eT,
        style: {
          display: "contents"
        },
        children: (0, pT.jsx)(zT.d, {
          value: mT,
          min: MT,
          max: gT,
          step: nT,
          onChange: HT,
          orientation: kT,
          reverse: jT,
          tooltip: BT,
          labels: ZT,
          handleLabel: vT,
          format: fT,
          onChangeStart: () => {
            null === qT || void 0 === qT || qT(), null === lT || void 0 === lT || lT(!0)
          },
          onChangeComplete: () => {
            null === lT || void 0 === lT || lT(!1), null === iT || void 0 === iT || iT()
          }
        })
      })
    }
    async function fT() {
      const TT = jT.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await TT.getResult() && (0, lT.reloadBloxd)()
    }

    function qT(TT) {
      let {
        label: UT,
        options: mT,
        value: WT,
        onChange: zT,
        circleInfoText: MT
      } = TT;
      return (0, pT.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, pT.jsxs)("div", {
          className: "SliderText",
          children: [UT, MT && (0, pT.jsx)(gT.c, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: MT
          })]
        }), (0, pT.jsx)(nT.c, {
          ariaLabel: UT,
          options: mT,
          value: WT,
          onChange: zT
        })]
      })
    }
  },
  5083: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => cT,
      i: () => vT
    });
    var WT = mT(3292),
      zT = mT(2273),
      MT = mT(63),
      gT = mT(1126),
      nT = mT.n(gT),
      HT = mT(1446),
      kT = mT(3289),
      jT = mT(1457),
      lT = mT(5090),
      LT = mT(5130),
      pT = mT(681),
      BT = mT(5154),
      ZT = mT(1188);

    function cT(TT) {
      var UT;
      let {
        setApplySettingsCallback: mT
      } = TT;
      const [, gT] = (0, MT.useReducer)((TT => TT + 1), 0), nT = (0, MT.useRef)(!1), HT = (0, MT.useRef)(null);

      function cT(TT, UT) {
        kT.e.setFromJson(TT, "player");
        const WT = kT.e.saveTexturePack();
        if (pT.B) {
          const TT = kT.e.toJson();
          WT.then((UT => {
            UT && (0, BT.e)(TT)
          }))
        } else nT.current ||= UT, HT.current !== kT.e.getId() || kT.e.getId() === zT.n.CUSTOM && nT.current ? mT((() => lT.l)) : mT(null);
        gT()
      }
      async function fT(TT) {
        if (kT.e.getId() !== TT.metaData.id) {
          if (kT.e.getId() === zT.n.CUSTOM && kT.e.getFromFolderName()) {
            const TT = jT.NotificationProvider.showPromptPopup({
              title: "settingsMenu:loseChangesTitle",
              subtitle: "settingsMenu:loseChangesSubtitle",
              confirmText: "general:continue",
              destructive: !0,
              confirmTooltip: "",
              cancelText: "general:cancel",
              cancelTooltip: ""
            });
            if (!0 !== await TT.getResult()) return
          }
          cT(TT, !1)
        }
      }(0, MT.useEffect)((() => {
        HT.current = kT.e.getId()
      }), []);
      const qT = WT.c,
        iT = [qT, ...Object.values(zT.n).filter((TT => TT !== qT))];
      return (0, ZT.jsx)(ZT.Fragment, {
        children: (0, ZT.jsxs)("div", {
          className: "TexturePackCategory SettingsMenuRightInner",
          children: [(0, ZT.jsx)("div", {
            className: "TexturePackList",
            children: iT.map((TT => (0, ZT.jsx)(vT, {
              id: TT,
              isSelected: TT === kT.e.getId(),
              setSelected: fT
            }, TT)))
          }), kT.e.getId() === zT.n.CUSTOM && (0, ZT.jsx)(LT.e, {
            folderName: null !== (UT = kT.e.getFromFolderName()) && void 0 !== UT ? UT : null,
            onTexturePackUpdated: function(TT) {
              cT(TT, !0)
            },
            packOwner: "player"
          })]
        })
      })
    }

    function vT(TT) {
      let {
        id: UT,
        isSelected: mT,
        setSelected: gT,
        disabled: kT = !1
      } = TT;
      const [jT, lT] = (0, MT.useState)(!0), [LT, pT] = (0, MT.useState)(""), [BT, cT] = (0, MT.useState)(""), [vT, fT] = (0, MT.useState)(""), qT = (0, MT.useRef)({});
      return (0, MT.useEffect)((() => {
        (0, WT.n)(UT).then((TT => {
          var UT;
          TT && (qT.current = TT, lT(!1), pT(qT.current.metaData.name), cT(qT.current.metaData.author), fT(null !== (UT = qT.current.metaData.previewImage) && void 0 !== UT ? UT : ""))
        })).catch((TT => {
          console.warn(`Failed to fetch texture pack ${UT}`, TT)
        }))
      }), [UT]), (0, ZT.jsxs)("div", {
        "data-pad-focusable": !0,
        "aria-disabled": kT || void 0,
        className: nT()("TexturePack", {
          Selected: mT,
          Custom: UT === zT.n.CUSTOM,
          Disabled: kT
        }),
        onClick: () => {
          jT || kT || gT(qT.current)
        },
        children: [(0, ZT.jsx)("div", {
          className: "TexturePackBg",
          style: {
            backgroundImage: vT ? `url(${vT})` : void 0
          }
        }), jT && (0, ZT.jsx)("div", {
          className: "TexturePackName",
          children: (0, ZT.jsx)(HT.c, {})
        }), !jT && LT && (0, ZT.jsx)("div", {
          className: "TexturePackName",
          children: LT
        }), !jT && BT && (0, ZT.jsx)("div", {
          className: "TexturePackAuthor",
          children: BT
        })]
      })
    }
  },
  5136: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => nT,
      c: () => gT,
      f: () => MT
    });
    var WT = mT(5139);
    const zT = [TT => TT.strict ? "strict" : "nonStrict", TT => TT.program];

    function MT(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const WT = {};
      for (const zT in mT) WT[zT] = `\0${zT}\0`;
      return TT(UT, WT).replace(/\0(\w+)\0/g, ((TT, UT) => mT[UT]))
    }

    function gT(TT) {
      return null === TT.file ? null : TT.line > 0 ? `${TT.file}:${TT.line}` : TT.file
    }

    function nT(TT) {
      const UT = new Map(TT.map((TT => [HT(TT).join("."), TT])));
      if (0 === UT.size) return [];
      const mT = jT([...UT.values()]);
      return 0 === mT[0].length ? [] : mT
    }

    function HT(TT) {
      return zT.map((UT => UT(TT)))
    }
    const kT = zT.map((TT => new Set(WT.e.map(TT)).size));

    function jT(TT) {
      const UT = zT.map((UT => new Set(TT.map(UT)))),
        mT = UT.reduce(((TT, UT) => TT * UT.size), 1),
        WT = UT.every(((TT, UT) => 1 === TT.size || TT.size === kT[UT]));
      if (mT === TT.length && WT) return [zT.filter(((TT, mT) => 1 === UT[mT].size)).map((UT => UT(TT[0])))];
      let MT = null;
      for (let gT = 0; gT < zT.length; gT++) {
        if (1 === UT[gT].size) continue;
        const mT = lT(TT, zT[gT]).flatMap(jT);
        (null === MT || mT.length < MT.length) && (MT = mT)
      }
      return MT
    }

    function lT(TT, UT) {
      const mT = new Map;
      for (const zT of TT) {
        var WT;
        const TT = UT(zT);
        mT.set(TT, [...null !== (WT = mT.get(TT)) && void 0 !== WT ? WT : [], zT])
      }
      return [...mT.values()]
    }
  },
  5116: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => gT
    });
    var WT = mT(1126),
      zT = mT.n(WT),
      MT = mT(1188);

    function gT(TT) {
      let {
        options: UT,
        value: mT,
        onChange: WT,
        ariaLabel: gT,
        className: nT,
        reselectable: HT = !1,
        keepsFocus: kT = !1,
        padTabs: jT
      } = TT;
      const lT = void 0 !== jT;
      return (0, MT.jsx)("div", {
        className: zT()("SegmentedToggle", nT),
        role: "group",
        "aria-label": gT,
        "data-pad-tabs": jT,
        children: UT.map((TT => {
          const UT = TT.value === mT;
          return (0, MT.jsx)("button", {
            type: "button",
            "aria-pressed": UT,
            "data-pad-tab": lT || void 0,
            "data-pad-selected": lT && UT ? "true" : void 0,
            "data-pad-default-focus": lT && UT || void 0,
            "aria-label": TT.ariaLabel,
            title: TT.ariaLabel,
            className: zT()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: UT
            }),
            onMouseDown: kT ? TT => {
              TT.preventDefault()
            } : void 0,
            onClick: () => {
              UT && !HT || WT(TT.value)
            },
            children: TT.label
          }, TT.value)
        }))
      })
    }
  },
  5123: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => MT,
      g: () => gT
    });
    var WT = mT(63);
    const zT = new WeakMap,
      MT = TT => {
        var UT;
        const mT = TT.closest("[data-pad-slider]");
        return mT && null !== (UT = zT.get(mT)) && void 0 !== UT ? UT : null
      },
      gT = (TT, UT) => {
        const mT = (0, WT.useRef)(UT);
        mT.current = UT, (0, WT.useEffect)((() => {
          if (TT.current) return ((TT, UT) => (zT.set(TT, UT), () => {
            zT.get(TT) === UT && zT.delete(TT)
          }))(TT.current, {
            adjust: TT => {
              mT.current.adjust(TT)
            },
            setFraction: TT => {
              mT.current.setFraction(TT)
            },
            endDrag: () => {
              mT.current.endDrag()
            }
          })
        }), [TT])
      }
  },
  5139: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => WT.j,
      e: () => zT,
      f: () => WT.q
    });
    var WT = mT(5142);
    const zT = [!1, !0].flatMap((TT => ["terrain", "liquid", "model"].map((UT => ({
      strict: TT,
      program: UT
    })))))
  },
  5158: (TT, UT, mT) => {
    function WT(TT, UT) {
      return zT(TT, UT)
    }

    function zT(TT, UT) {
      if (TT === UT) return !0;
      if ("object" !== typeof TT || "object" !== typeof UT || null === TT || null === UT || Array.isArray(TT) !== Array.isArray(UT)) return !1;
      const mT = TT,
        WT = UT,
        MT = Object.keys(mT);
      return MT.length === Object.keys(WT).length && MT.every((TT => Object.prototype.hasOwnProperty.call(WT, TT) && zT(mT[TT], WT[TT])))
    }
    mT.d(UT, {
      c: () => WT
    })
  },
  5154: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => gT,
      h: () => nT
    });
    var WT = mT(2273),
      zT = mT(5158);
    let MT = null;

    function gT(TT) {
      MT = {
        pack: TT.metaData.id === WT.e ? null : TT
      }
    }

    function nT(TT) {
      return !(null === MT || !(0, zT.c)(MT.pack, TT)) && (MT = null, !0)
    }
  },
  5142: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => nT,
      f: () => gT,
      j: () => WT,
      l: () => ZT,
      o: () => lT,
      q: () => zT,
      s: () => MT,
      v: () => kT,
      w: () => jT,
      x: () => LT
    });
    const WT = 5;

    function zT(TT) {
      return TT === WT
    }

    function MT(TT) {
      return [...TT.features]
    }
    const gT = 262144,
      nT = 256,
      HT = 256;

    function kT(TT) {
      if ("object" !== typeof TT || null === TT || Array.isArray(TT)) return "The pack has no files.";
      const UT = [];
      for (const [mT, WT] of Object.entries(TT)) {
        if ("string" !== typeof WT) return `${mT} isn't text.`;
        UT.push({
          path: mT,
          source: WT
        })
      }
      return UT.sort(((TT, UT) => lT(TT.path, UT.path))),
        function(TT) {
          if (0 === TT.length) return "The pack has no .wgsl files.";
          if (TT.length > nT) return `The pack has more than ${nT} .wgsl files.`;
          const UT = new Set;
          for (const {
              path: mT
            }
            of TT) {
            const TT = pT(mT);
            if (null !== TT) return TT;
            if (UT.has(mT)) return `The pack has two files at ${mT}.`;
            UT.add(mT)
          }
          return LT(TT) > gT ? `The pack's .wgsl files are over ${gT/1024} KB in total.` : null
        }(UT) ?? UT
    }

    function jT(TT) {
      const UT = {};
      for (const mT of TT) UT[mT.path] = mT.source;
      return UT
    }

    function lT(TT, UT) {
      return TT < UT ? -1 : TT > UT ? 1 : 0
    }

    function LT(TT) {
      const UT = new TextEncoder;
      let mT = 0;
      for (const {
          source: WT
        }
        of TT) mT += UT.encode(WT).byteLength;
      return mT
    }

    function pT(TT) {
      if (!TT.toLowerCase().endsWith(".wgsl")) return `${TT} isn't a .wgsl file.`;
      if (TT.length > HT) return `A file path is over ${HT} characters.`;
      if (TT.includes("\\") || /[\u0000-\u001f]/.test(TT)) return `${TT} isn't a valid file path.`;
      return TT.split("/").some((TT => "" === TT || "." === TT || ".." === TT)) ? `${TT} isn't a valid file path.` : null
    }
    const BT = /^(.*)\[rot\[([1-4])$/;

    function ZT(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const WT = new Map;
      UT.forEach(((TT, UT) => {
        let {
          numAnimStates: mT,
          animStartIdx: zT
        } = TT;
        for (let MT = 1; MT < mT; MT++) WT.set(zT + MT - 1, UT)
      }));
      const zT = Object.entries(TT),
        MT = new Map;
      for (const [ZT, cT] of zT) {
        const TT = BT.exec(ZT);
        "1" === TT?.[2] && MT.set(TT[1], cT + 1)
      }
      const gT = TT => {
          const UT = BT.exec(TT);
          return UT && MT.has(UT[1]) ? {
            root: UT[1],
            rotation: Number(UT[2]) - 1
          } : null
        },
        nT = new Set(zT.map((TT => {
          let [UT] = TT;
          return gT(UT)?.root ?? UT
        }))),
        HT = (TT, mT) => {
          const WT = TT.replace(/_?0$/, "");
          return (UT[mT]?.numAnimStates ?? 0) > 1 && !nT.has(WT) ? WT : TT
        },
        kT = new Map;
      for (const [BT, ZT] of zT) kT.set(ZT, HT(gT(BT)?.root ?? BT, ZT));
      const jT = zT.reduce(((TT, UT) => {
          let [, mT] = UT;
          return Math.max(TT, mT + 1)
        }), 0),
        lT = Array.from({
          length: jT
        }, ((TT, UT) => ({
          id: UT + 1,
          rotation: 0
        }))),
        LT = new Map,
        pT = new Map;
      for (const [BT, ZT] of zT) {
        const TT = gT(BT),
          UT = WT.get(ZT);
        if (void 0 !== UT) {
          const mT = kT.get(UT);
          pT.set(BT, {
            name: BT,
            texture: mT,
            kind: "frame"
          }), TT && !pT.has(TT.root) && pT.set(TT.root, {
            name: TT.root,
            texture: mT,
            kind: "frame"
          });
          continue
        }
        const mT = kT.get(ZT),
          zT = TT?.root ?? BT;
        if (mT !== zT && pT.set(zT, {
            name: zT,
            texture: mT,
            kind: "frame"
          }), TT) {
          const UT = MT.get(TT.root);
          lT[ZT] = {
            id: UT,
            rotation: TT.rotation
          }, LT.set(mT, UT), pT.set(BT, {
            name: BT,
            texture: mT,
            kind: "rotation"
          })
        } else LT.set(mT, ZT + 1)
      }
      for (const BT of LT.keys()) pT.delete(BT);
      for (const [BT, ZT] of mT) {
        const TT = LT.get(ZT);
        void 0 === TT || LT.has(BT) || (LT.set(BT, TT), pT.delete(BT))
      }
      return {
        named: [...LT].sort(((TT, UT) => {
          let [mT] = TT, [WT] = UT;
          return mT < WT ? -1 : mT > WT ? 1 : 0
        })).map((TT => {
          let [UT, mT] = TT;
          return {
            name: UT,
            id: mT
          }
        })),
        aliases: [...pT.values()],
        layers: lT
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);