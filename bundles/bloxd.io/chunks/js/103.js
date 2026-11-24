export const id = 103;
export const ids = [103];
export const modules = {
  4920: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => UD
    });
    var pD = wD(1044),
      sD = wD.n(pD),
      KD = wD(1057),
      rD = wD(1346),
      LD = wD(3494),
      cD = wD(128),
      gD = wD(3535),
      RD = wD(3521),
      AD = wD(1096);

    function UD(DD) {
      let {
        game: zD
      } = DD;
      const wD = (0, cD.m)() ? "large" : "small",
        pD = (0, gD.f)(zD, wD),
        UD = (0, LD.c)(pD),
        fD = void 0 !== UD.blurhash;
      return (0, AD.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [UD.isLoading && !fD && (0, AD.jsx)(rD.e, {
          loaderType: "Secondary"
        }), !UD.failed && (null !== UD.src || fD) && (0, AD.jsx)("div", {
          className: sD()("SchematicImage", RD.g, {
            SchematicImageFadeIn: UD.fadeIn && !fD
          }),
          style: (0, RD.e)(UD),
          children: (0, AD.jsx)(RD.b, {
            image: UD
          })
        }), UD.failed && (0, AD.jsx)("div", {
          className: "SchematicImageError",
          children: (0, AD.jsx)(KD.e, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  5063: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => GD
    });
    var pD = wD(58),
      sD = wD(1044),
      KD = wD.n(sD),
      rD = wD(4974),
      LD = wD(1346),
      cD = wD(1200),
      gD = wD(3141),
      RD = wD(3294),
      AD = wD(1057),
      UD = wD(3150),
      fD = wD(5070),
      ID = wD(5091),
      BD = wD(1096);

    function GD(DD) {
      let {
        folderName: zD,
        onTexturePackUpdated: sD,
        disabled: GD = !1,
        maxFileSizeMb: hD,
        packOwner: nD
      } = DD;
      const {
        t: MD
      } = (0, cD.E)(), [OD, JD] = (0, pD.useState)(!1), [ED, QD] = (0, pD.useState)(null), [XD, VD] = (0, pD.useState)(null), PD = (0, pD.useRef)(null);
      async function CD(DD) {
        JD(!0);
        try {
          const zD = await (0, gD.o)(DD);
          if ("customGame" === nD && (0, RD.i)(zD)) return void QD(MD(RD.c));
          if (void 0 !== hD) {
            const DD = JSON.stringify(zD).length / 1048576;
            if (DD > hD) return void QD(MD("customTexturePack:packTooBig", {
              size: DD.toFixed(1),
              max: hD
            }))
          }
          QD(null), VD(null), sD(zD), PD.current = zD,
            function(DD, zD) {
              const pD = DD.modelOverrides;
              pD && Promise.all([wD.e(203), wD.e(202)]).then((() => wD(34269))).then((wD => {
                let {
                  packDisplayName: sD,
                  refusedPackModels: KD,
                  packModelSummary: rD
                } = wD;
                const LD = sD(DD.metaData);
                zD(rD(LD, KD(LD, pD, !1)))
              })).catch((DD => {
                console.error("Checking the texture pack's models failed:", DD)
              }))
            }(zD, (DD => {
              PD.current === zD && VD(DD)
            }))
        } catch (zD) {
          if (zD instanceof UD.c) {
            const DD = "customTexturePack:invalidPack" !== zD.translationKey || (0, ID.h)() ? zD.translationKey : "customTexturePack:invalidPackZip";
            QD((0, fD.i)(MD, DD, zD.params))
          } else console.error("Couldn't read the texture pack", zD), QD(MD("customTexturePack:errorTitle"))
        } finally {
          JD(!1)
        }
      }
      const {
        getRootProps: xD,
        getInputProps: TD,
        isDragActive: bD,
        open: jD
      } = (0, rD.c)({
        onDrop: CD,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: GD
      });
      return (0, BD.jsxs)("div", {
        className: "CustomTexturePackContainer",
        children: [(0, BD.jsxs)("div", {
          className: "CustomTextureWarning",
          children: [MD("settingsMenu:customTextureWarning"), ".", (0, BD.jsx)("br", {}), MD("settingsMenu:viewDocumentation"), ":", " ", (0, BD.jsx)("a", {
            href: "https://github.com/Bloxdy/texturePacks",
            target: "_blank",
            rel: "noreferrer",
            children: "github.com/Bloxdy/texturePacks"
          })]
        }), ED && (0, BD.jsxs)("div", {
          className: "CustomTextureError",
          children: [MD("general:error"), ": ", ED]
        }), XD && (0, BD.jsx)("div", {
          className: "CustomTextureError",
          children: XD
        }), (0, BD.jsxs)("div", {
          ...xD({
            className: KD()("CustomTextureFolderUpload", {
              ActiveDrag: bD,
              Disabled: GD
            })
          }),
          children: [(0, BD.jsx)("input", {
            ...TD({
              webkitdirectory: "true"
            })
          }), OD && (0, BD.jsx)("div", {
            className: "CustomTextureFolderUploadLoading",
            children: (0, BD.jsx)(LD.e, {})
          }), !OD && !bD && zD && (0, BD.jsxs)(BD.Fragment, {
            children: [(0, BD.jsx)("div", {
              className: "CustomTextureFolderUploadIcon Active",
              children: (0, BD.jsx)(AD.e, {
                name: "folder-image"
              })
            }), (0, BD.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions Active",
              children: zD
            })]
          }), !OD && (bD || !zD) && (0, BD.jsxs)(BD.Fragment, {
            children: [(0, BD.jsx)("div", {
              className: "CustomTextureFolderUploadIcon",
              children: (0, BD.jsx)(AD.e, {
                name: "up-from-bracket"
              })
            }), (0, BD.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions",
              children: MD((0, ID.h)() ? "customTexturePack:dropHere" : "customTexturePack:chooseZipInstructions")
            })]
          }), !OD && (0, BD.jsx)(ID.d, {
            disabled: GD,
            openFolderPicker: jD,
            onFiles: DD => {
              CD(DD)
            }
          })]
        })]
      })
    }
  },
  5091: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => RD,
      h: () => gD
    });
    var pD = wD(58),
      sD = wD(1447),
      KD = wD(1200),
      rD = wD(103),
      LD = wD(3128),
      cD = wD(1096);

    function gD() {
      return !(0, rD.isMobile)()
    }

    function RD(DD) {
      let {
        disabled: zD,
        openFolderPicker: wD,
        onFiles: rD
      } = DD;
      const {
        t: RD
      } = (0, KD.E)(), AD = (0, pD.useRef)(null);
      return (0, cD.jsxs)("div", {
        className: "PackPickButtons",
        "data-pad-mouse-only": !0,
        children: [(0, cD.jsx)("input", {
          ref: AD,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(DD) {
            const zD = Array.from(DD.target.files);
            DD.target.value = "", rD(zD)
          }
        }), gD() && (0, cD.jsx)(sD.f, {
          disabled: zD,
          onClick: wD,
          children: RD("general:chooseFolder")
        }), (0, cD.jsx)(sD.f, {
          disabled: zD,
          onClick: () => {
            (0, LD.e)(AD.current)
          },
          children: RD("general:chooseZip")
        })]
      })
    }
  },
  5021: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => ID,
      c: () => MD,
      e: () => BD,
      g: () => nD
    });
    var pD = wD(58),
      sD = wD(5026),
      KD = wD(4395),
      rD = wD(1366),
      LD = wD(5049),
      cD = wD(1044),
      gD = wD.n(cD),
      RD = wD(1355),
      AD = wD(1737),
      UD = wD(5057),
      fD = wD(1096);

    function ID(DD) {
      let {
        label: zD,
        onClick: wD,
        checked: pD,
        circleInfoText: sD,
        className: LD,
        disabled: cD,
        note: RD
      } = DD;
      return (0, fD.jsxs)("div", {
        "aria-disabled": cD || void 0,
        "data-pad-focusable": !0,
        className: gD()("SettingBox CheckboxContainer", {
          [LD]: LD,
          SettingBoxDisabled: cD
        }),
        onClick: () => {
          cD || wD(!pD)
        },
        children: [(0, fD.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, fD.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, fD.jsx)(KD.d, {
              className: "SettingsCheckbox",
              checked: pD,
              disabled: cD,
              onChange: () => {}
            })
          }), (0, fD.jsxs)("div", {
            className: "CheckboxText",
            children: [zD, sD && (0, fD.jsx)("span", {
              onClick: DD => DD.stopPropagation(),
              children: (0, fD.jsx)(rD.b, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: sD
              })
            })]
          })]
        }), RD && (0, fD.jsx)("div", {
          className: "SettingNote",
          children: RD
        })]
      })
    }

    function BD(DD) {
      let {
        name: zD,
        onChange: wD,
        min: sD,
        max: KD,
        step: LD,
        initValue: cD,
        circleInfoText: RD,
        format: AD,
        className: UD,
        padStep: ID,
        disabled: BD = !1,
        selectableMax: GD,
        cappedNote: nD,
        onChangeComplete: MD
      } = DD;
      const [OD, JD] = (0, pD.useState)(cD), ED = (0, pD.useRef)(cD);
      (0, pD.useEffect)((() => {
        ED.current = cD, JD(cD)
      }), [cD]);
      const QD = void 0 !== GD && GD < KD,
        XD = QD ? {
          "--slider-selectable": (GD - sD) / (KD - sD)
        } : void 0;
      return (0, fD.jsxs)("div", {
        className: gD()("SettingBox SettingsSliderDiv", {
          [UD]: UD,
          SettingBoxDisabled: BD,
          SliderCapped: QD
        }),
        style: XD,
        children: [(0, fD.jsxs)("div", {
          className: "SliderText",
          children: [`${zD}: ${AD?AD(OD):OD}`, RD && (0, fD.jsx)(rD.b, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: RD
          })]
        }), (0, fD.jsx)("div", {
          className: "SliderDiv",
          children: (0, fD.jsx)(hD, {
            value: OD,
            min: sD,
            max: KD,
            step: LD,
            onChange: DD => {
              if (QD && DD >= GD && OD === GD) return;
              const zD = QD ? Math.min(DD, GD) : DD;
              ED.current = zD, JD(zD), wD(zD)
            },
            onChangeComplete: MD && (() => {
              MD(ED.current)
            }),
            format: AD,
            padStep: ID,
            disabled: BD
          })
        }), QD && nD && (0, fD.jsx)("div", {
          className: "SettingNote",
          children: nD
        })]
      })
    }
    const GD = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function hD(DD) {
      var zD;
      let {
        value: wD,
        min: KD,
        max: rD,
        step: LD,
        onChange: cD,
        orientation: gD,
        reverse: RD,
        setIsChanging: AD,
        tooltip: ID,
        labels: BD,
        handleLabel: hD,
        format: nD,
        onChangeStart: MD,
        onChangeComplete: OD,
        padStep: JD,
        disabled: ED = !1
      } = DD;
      const QD = (0, pD.useRef)(null),
        XD = (0, pD.useRef)(null);
      (0, pD.useLayoutEffect)((() => {
        var DD, zD, wD;
        const pD = null !== (DD = null === (zD = QD.current) || void 0 === zD ? void 0 : zD.querySelector(".rangeslider")) && void 0 !== DD ? DD : null;
        null === pD || void 0 === pD || pD.setAttribute("data-pad-slider", ""), null === pD || void 0 === pD || pD.setAttribute("data-pad-focusable", ""), null === pD || void 0 === pD || null === (wD = pD.querySelector(".rangeslider__handle")) || void 0 === wD || wD.setAttribute("data-pad-slider-handle", ""), XD.current = pD
      }), []), (0, pD.useLayoutEffect)((() => {
        var DD, zD;
        ED ? null === (DD = XD.current) || void 0 === DD || DD.setAttribute("aria-disabled", "true") : null === (zD = XD.current) || void 0 === zD || zD.removeAttribute("aria-disabled")
      }), [ED]);
      const VD = (null !== (zD = String(LD).split(".")[1]) && void 0 !== zD ? zD : "").length,
        PD = DD => {
          const zD = Number((Math.round((DD - KD) / LD) * LD + KD).toFixed(VD));
          return Math.min(rD, Math.max(KD, zD))
        },
        CD = (0, pD.useRef)(OD);
      CD.current = OD, (0, pD.useEffect)((() => {
        const DD = QD.current;
        if (!DD) return;
        const zD = DD => {
          var zD;
          GD.has(DD.key) && (null === (zD = CD.current) || void 0 === zD || zD.call(CD))
        };
        return DD.addEventListener("keyup", zD), () => {
          DD.removeEventListener("keyup", zD)
        }
      }), []);
      const xD = (0, pD.useRef)(!1);
      return (0, UD.c)(XD, {
        adjust: DD => {
          if (ED) return;
          const zD = null !== JD && void 0 !== JD ? JD : Math.max(LD, Math.round((rD - KD) / 20 / LD) * LD),
            pD = PD(wD + DD * zD * (RD ? -1 : 1));
          pD !== wD && (null === MD || void 0 === MD || MD(), cD(pD), null === OD || void 0 === OD || OD())
        },
        setFraction: DD => {
          if (ED) return;
          const zD = PD(KD + (RD ? 1 - DD : DD) * (rD - KD));
          zD !== wD && (xD.current || (xD.current = !0, null === MD || void 0 === MD || MD()), cD(zD))
        },
        endDrag: () => {
          xD.current && (xD.current = !1, null === OD || void 0 === OD || OD())
        }
      }), (0, fD.jsx)("div", {
        ref: QD,
        style: {
          display: "contents"
        },
        children: (0, fD.jsx)(sD.c, {
          value: wD,
          min: KD,
          max: rD,
          step: LD,
          onChange: cD,
          orientation: gD,
          reverse: RD,
          tooltip: ID,
          labels: BD,
          handleLabel: hD,
          format: nD,
          onChangeStart: () => {
            null === MD || void 0 === MD || MD(), null === AD || void 0 === AD || AD(!0)
          },
          onChangeComplete: () => {
            null === AD || void 0 === AD || AD(!1), null === OD || void 0 === OD || OD()
          }
        })
      })
    }
    async function nD() {
      const DD = RD.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await DD.getResult() && (0, AD.reloadBloxd)()
    }

    function MD(DD) {
      let {
        label: zD,
        options: wD,
        value: pD,
        onChange: sD,
        circleInfoText: KD
      } = DD;
      return (0, fD.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, fD.jsxs)("div", {
          className: "SliderText",
          children: [zD, KD && (0, fD.jsx)(rD.b, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: KD
          })]
        }), (0, fD.jsx)(LD.e, {
          ariaLabel: zD,
          options: wD,
          value: pD,
          onChange: sD
        })]
      })
    }
  },
  5014: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => GD,
      i: () => hD
    });
    var pD = wD(3141),
      sD = wD(2130),
      KD = wD(58),
      rD = wD(1044),
      LD = wD.n(rD),
      cD = wD(1346),
      gD = wD(3139),
      RD = wD(1355),
      AD = wD(5021),
      UD = wD(5063),
      fD = wD(638),
      ID = wD(5097),
      BD = wD(1096);

    function GD(DD) {
      var zD;
      let {
        setApplySettingsCallback: wD
      } = DD;
      const [, rD] = (0, KD.useReducer)((DD => DD + 1), 0), LD = (0, KD.useRef)(!1), cD = (0, KD.useRef)(null);

      function GD(DD, zD) {
        gD.b.setFromJson(DD, "player");
        const pD = gD.b.saveTexturePack();
        if (fD.v) {
          const DD = gD.b.toJson();
          pD.then((zD => {
            zD && (0, ID.e)(DD)
          }))
        } else LD.current ||= zD, cD.current !== gD.b.getId() || gD.b.getId() === sD.m.CUSTOM && LD.current ? wD((() => AD.g)) : wD(null);
        rD()
      }
      async function nD(DD) {
        if (gD.b.getId() !== DD.metaData.id) {
          if (gD.b.getId() === sD.m.CUSTOM && gD.b.getFromFolderName()) {
            const DD = RD.NotificationProvider.showPromptPopup({
              title: "settingsMenu:loseChangesTitle",
              subtitle: "settingsMenu:loseChangesSubtitle",
              confirmText: "general:continue",
              destructive: !0,
              confirmTooltip: "",
              cancelText: "general:cancel",
              cancelTooltip: ""
            });
            if (!0 !== await DD.getResult()) return
          }
          GD(DD, !1)
        }
      }(0, KD.useEffect)((() => {
        cD.current = gD.b.getId()
      }), []);
      const MD = pD.b,
        OD = [MD, ...Object.values(sD.m).filter((DD => DD !== MD))];
      return (0, BD.jsx)(BD.Fragment, {
        children: (0, BD.jsxs)("div", {
          className: "TexturePackCategory SettingsMenuRightInner",
          children: [(0, BD.jsx)("div", {
            className: "TexturePackList",
            children: OD.map((DD => (0, BD.jsx)(hD, {
              id: DD,
              isSelected: DD === gD.b.getId(),
              setSelected: nD
            }, DD)))
          }), gD.b.getId() === sD.m.CUSTOM && (0, BD.jsx)(UD.b, {
            folderName: null !== (zD = gD.b.getFromFolderName()) && void 0 !== zD ? zD : null,
            onTexturePackUpdated: function(DD) {
              GD(DD, !0)
            },
            packOwner: "player"
          })]
        })
      })
    }

    function hD(DD) {
      let {
        id: zD,
        isSelected: wD,
        setSelected: rD,
        disabled: gD = !1
      } = DD;
      const [RD, AD] = (0, KD.useState)(!0), [UD, fD] = (0, KD.useState)(""), [ID, GD] = (0, KD.useState)(""), [hD, nD] = (0, KD.useState)(""), MD = (0, KD.useRef)({});
      return (0, KD.useEffect)((() => {
        (0, pD.n)(zD).then((DD => {
          var zD;
          DD && (MD.current = DD, AD(!1), fD(MD.current.metaData.name), GD(MD.current.metaData.author), nD(null !== (zD = MD.current.metaData.previewImage) && void 0 !== zD ? zD : ""))
        })).catch((DD => {
          console.warn(`Failed to fetch texture pack ${zD}`, DD)
        }))
      }), [zD]), (0, BD.jsxs)("div", {
        "data-pad-focusable": !0,
        "aria-disabled": gD || void 0,
        className: LD()("TexturePack", {
          Selected: wD,
          Custom: zD === sD.m.CUSTOM,
          Disabled: gD
        }),
        onClick: () => {
          RD || gD || rD(MD.current)
        },
        children: [(0, BD.jsx)("div", {
          className: "TexturePackBg",
          style: {
            backgroundImage: hD ? `url(${hD})` : void 0
          }
        }), RD && (0, BD.jsx)("div", {
          className: "TexturePackName",
          children: (0, BD.jsx)(cD.e, {})
        }), !RD && UD && (0, BD.jsx)("div", {
          className: "TexturePackName",
          children: UD
        }), !RD && ID && (0, BD.jsx)("div", {
          className: "TexturePackAuthor",
          children: ID
        })]
      })
    }
  },
  5070: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => LD,
      g: () => rD,
      i: () => KD
    });
    var pD = wD(5076);
    const sD = [DD => DD.strict ? "strict" : "nonStrict", DD => DD.program];

    function KD(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const pD = {};
      for (const sD in wD) pD[sD] = `\0${sD}\0`;
      return DD(zD, pD).replace(/\0(\w+)\0/g, ((DD, zD) => wD[zD]))
    }

    function rD(DD) {
      return null === DD.file ? null : DD.line > 0 ? `${DD.file}:${DD.line}` : DD.file
    }

    function LD(DD) {
      const zD = new Map(DD.map((DD => [cD(DD).join("."), DD])));
      if (0 === zD.size) return [];
      const wD = RD([...zD.values()]);
      return 0 === wD[0].length ? [] : wD
    }

    function cD(DD) {
      return sD.map((zD => zD(DD)))
    }
    const gD = sD.map((DD => new Set(pD.d.map(DD)).size));

    function RD(DD) {
      const zD = sD.map((zD => new Set(DD.map(zD)))),
        wD = zD.reduce(((DD, zD) => DD * zD.size), 1),
        pD = zD.every(((DD, zD) => 1 === DD.size || DD.size === gD[zD]));
      if (wD === DD.length && pD) return [sD.filter(((DD, wD) => 1 === zD[wD].size)).map((zD => zD(DD[0])))];
      let KD = null;
      for (let rD = 0; rD < sD.length; rD++) {
        if (1 === zD[rD].size) continue;
        const wD = AD(DD, sD[rD]).flatMap(RD);
        (null === KD || wD.length < KD.length) && (KD = wD)
      }
      return KD
    }

    function AD(DD, zD) {
      const wD = new Map;
      for (const sD of DD) {
        var pD;
        const DD = zD(sD);
        wD.set(DD, [...null !== (pD = wD.get(DD)) && void 0 !== pD ? pD : [], sD])
      }
      return [...wD.values()]
    }
  },
  5049: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => rD
    });
    var pD = wD(1044),
      sD = wD.n(pD),
      KD = wD(1096);

    function rD(DD) {
      let {
        options: zD,
        value: wD,
        onChange: pD,
        ariaLabel: rD,
        className: LD,
        reselectable: cD = !1,
        keepsFocus: gD = !1,
        padTabs: RD
      } = DD;
      const AD = void 0 !== RD;
      return (0, KD.jsx)("div", {
        className: sD()("SegmentedToggle", LD),
        role: "group",
        "aria-label": rD,
        "data-pad-tabs": RD,
        children: zD.map((DD => {
          const zD = DD.value === wD;
          return (0, KD.jsx)("button", {
            type: "button",
            "aria-pressed": zD,
            "data-pad-tab": AD || void 0,
            "data-pad-selected": AD && zD ? "true" : void 0,
            "data-pad-default-focus": AD && zD || void 0,
            "aria-label": DD.ariaLabel,
            title: DD.ariaLabel,
            className: sD()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: zD
            }),
            onMouseDown: gD ? DD => {
              DD.preventDefault()
            } : void 0,
            onClick: () => {
              zD && !cD || pD(DD.value)
            },
            children: DD.label
          }, DD.value)
        }))
      })
    }
  },
  5057: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => KD,
      c: () => rD
    });
    var pD = wD(58);
    const sD = new WeakMap,
      KD = DD => {
        var zD;
        const wD = DD.closest("[data-pad-slider]");
        return wD && null !== (zD = sD.get(wD)) && void 0 !== zD ? zD : null
      },
      rD = (DD, zD) => {
        const wD = (0, pD.useRef)(zD);
        wD.current = zD, (0, pD.useEffect)((() => {
          if (DD.current) return ((DD, zD) => (sD.set(DD, zD), () => {
            sD.get(DD) === zD && sD.delete(DD)
          }))(DD.current, {
            adjust: DD => {
              wD.current.adjust(DD)
            },
            setFraction: DD => {
              wD.current.setFraction(DD)
            },
            endDrag: () => {
              wD.current.endDrag()
            }
          })
        }), [DD])
      }
  },
  5076: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => pD.i,
      d: () => sD,
      h: () => pD.q
    });
    var pD = wD(5084);
    const sD = [!1, !0].flatMap((DD => ["terrain", "liquid", "model"].map((zD => ({
      strict: DD,
      program: zD
    })))))
  },
  5099: (DD, zD, wD) => {
    function pD(DD, zD) {
      return sD(DD, zD)
    }

    function sD(DD, zD) {
      if (DD === zD) return !0;
      if ("object" !== typeof DD || "object" !== typeof zD || null === DD || null === zD || Array.isArray(DD) !== Array.isArray(zD)) return !1;
      const wD = DD,
        pD = zD,
        KD = Object.keys(wD);
      return KD.length === Object.keys(pD).length && KD.every((DD => Object.prototype.hasOwnProperty.call(pD, DD) && sD(wD[DD], pD[DD])))
    }
    wD.d(zD, {
      c: () => pD
    })
  },
  5097: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => rD,
      g: () => LD
    });
    var pD = wD(2130),
      sD = wD(5099);
    let KD = null;

    function rD(DD) {
      KD = {
        pack: DD.metaData.id === pD.c ? null : DD
      }
    }

    function LD(DD) {
      return !(null === KD || !(0, sD.c)(KD.pack, DD)) && (KD = null, !0)
    }
  },
  5084: (DD, zD, wD) => {
    wD.d(zD, {
      A: () => UD,
      d: () => LD,
      e: () => rD,
      i: () => pD,
      m: () => BD,
      n: () => AD,
      q: () => sD,
      r: () => KD,
      v: () => gD,
      z: () => RD
    });
    const pD = 5;

    function sD(DD) {
      return DD === pD
    }

    function KD(DD) {
      return [...DD.features]
    }
    const rD = 262144,
      LD = 256,
      cD = 256;

    function gD(DD) {
      if ("object" !== typeof DD || null === DD || Array.isArray(DD)) return "The pack has no files.";
      const zD = [];
      for (const [wD, pD] of Object.entries(DD)) {
        if ("string" !== typeof pD) return `${wD} isn't text.`;
        zD.push({
          path: wD,
          source: pD
        })
      }
      return zD.sort(((DD, zD) => AD(DD.path, zD.path))),
        function(DD) {
          if (0 === DD.length) return "The pack has no .wgsl files.";
          if (DD.length > LD) return `The pack has more than ${LD} .wgsl files.`;
          const zD = new Set;
          for (const {
              path: wD
            }
            of DD) {
            const DD = fD(wD);
            if (null !== DD) return DD;
            if (zD.has(wD)) return `The pack has two files at ${wD}.`;
            zD.add(wD)
          }
          return UD(DD) > rD ? `The pack's .wgsl files are over ${rD/1024} KB in total.` : null
        }(zD) ?? zD
    }

    function RD(DD) {
      const zD = {};
      for (const wD of DD) zD[wD.path] = wD.source;
      return zD
    }

    function AD(DD, zD) {
      return DD < zD ? -1 : DD > zD ? 1 : 0
    }

    function UD(DD) {
      const zD = new TextEncoder;
      let wD = 0;
      for (const {
          source: pD
        }
        of DD) wD += zD.encode(pD).byteLength;
      return wD
    }

    function fD(DD) {
      if (!DD.toLowerCase().endsWith(".wgsl")) return `${DD} isn't a .wgsl file.`;
      if (DD.length > cD) return `A file path is over ${cD} characters.`;
      if (DD.includes("\\") || /[\u0000-\u001f]/.test(DD)) return `${DD} isn't a valid file path.`;
      return DD.split("/").some((DD => "" === DD || "." === DD || ".." === DD)) ? `${DD} isn't a valid file path.` : null
    }
    const ID = /^(.*)\[rot\[([1-4])$/;

    function BD(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const pD = new Map;
      zD.forEach(((DD, zD) => {
        let {
          numAnimStates: wD,
          animStartIdx: sD
        } = DD;
        for (let KD = 1; KD < wD; KD++) pD.set(sD + KD - 1, zD)
      }));
      const sD = Object.entries(DD),
        KD = new Map;
      for (const [BD, GD] of sD) {
        const DD = ID.exec(BD);
        "1" === DD?.[2] && KD.set(DD[1], GD + 1)
      }
      const rD = DD => {
          const zD = ID.exec(DD);
          return zD && KD.has(zD[1]) ? {
            root: zD[1],
            rotation: Number(zD[2]) - 1
          } : null
        },
        LD = new Set(sD.map((DD => {
          let [zD] = DD;
          return rD(zD)?.root ?? zD
        }))),
        cD = (DD, wD) => {
          const pD = DD.replace(/_?0$/, "");
          return (zD[wD]?.numAnimStates ?? 0) > 1 && !LD.has(pD) ? pD : DD
        },
        gD = new Map;
      for (const [ID, BD] of sD) gD.set(BD, cD(rD(ID)?.root ?? ID, BD));
      const RD = sD.reduce(((DD, zD) => {
          let [, wD] = zD;
          return Math.max(DD, wD + 1)
        }), 0),
        AD = Array.from({
          length: RD
        }, ((DD, zD) => ({
          id: zD + 1,
          rotation: 0
        }))),
        UD = new Map,
        fD = new Map;
      for (const [ID, BD] of sD) {
        const DD = rD(ID),
          zD = pD.get(BD);
        if (void 0 !== zD) {
          const wD = gD.get(zD);
          fD.set(ID, {
            name: ID,
            texture: wD,
            kind: "frame"
          }), DD && !fD.has(DD.root) && fD.set(DD.root, {
            name: DD.root,
            texture: wD,
            kind: "frame"
          });
          continue
        }
        const wD = gD.get(BD),
          sD = DD?.root ?? ID;
        if (wD !== sD && fD.set(sD, {
            name: sD,
            texture: wD,
            kind: "frame"
          }), DD) {
          const zD = KD.get(DD.root);
          AD[BD] = {
            id: zD,
            rotation: DD.rotation
          }, UD.set(wD, zD), fD.set(ID, {
            name: ID,
            texture: wD,
            kind: "rotation"
          })
        } else UD.set(wD, BD + 1)
      }
      for (const ID of UD.keys()) fD.delete(ID);
      for (const [ID, BD] of wD) {
        const DD = UD.get(BD);
        void 0 === DD || UD.has(ID) || (UD.set(ID, DD), fD.delete(ID))
      }
      return {
        named: [...UD].sort(((DD, zD) => {
          let [wD] = DD, [pD] = zD;
          return wD < pD ? -1 : wD > pD ? 1 : 0
        })).map((DD => {
          let [zD, wD] = DD;
          return {
            name: zD,
            id: wD
          }
        })),
        aliases: [...fD.values()],
        layers: AD
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);