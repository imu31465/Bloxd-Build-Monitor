export const id = 103;
export const ids = [103];
export const modules = {
  4847: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => NC
    });
    var QC = ZC(1002),
      wC = ZC.n(QC),
      bC = ZC(1013),
      nC = ZC(1295),
      fC = ZC(3464),
      oC = ZC(113),
      qC = ZC(3498),
      FC = ZC(3487),
      WC = ZC(1056);

    function NC(CC) {
      let {
        game: zC
      } = CC;
      const ZC = (0, oC.o)() ? "large" : "small",
        QC = (0, qC.g)(zC, ZC),
        NC = (0, fC.e)(QC),
        MC = void 0 !== NC.blurhash;
      return (0, WC.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [NC.isLoading && !MC && (0, WC.jsx)(nC.d, {
          loaderType: "Secondary"
        }), !NC.failed && (null !== NC.src || MC) && (0, WC.jsx)("div", {
          className: wC()("SchematicImage", FC.k, {
            SchematicImageFadeIn: NC.fadeIn && !MC
          }),
          style: (0, FC.g)(NC),
          children: (0, WC.jsx)(FC.d, {
            image: NC
          })
        }), NC.failed && (0, WC.jsx)("div", {
          className: "SchematicImageError",
          children: (0, WC.jsx)(bC.c, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  4985: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => pC
    });
    var QC = ZC(48),
      wC = ZC(1002),
      bC = ZC.n(wC),
      nC = ZC(4895),
      fC = ZC(1295),
      oC = ZC(1143),
      qC = ZC(3140),
      FC = ZC(3288),
      WC = ZC(1013),
      NC = ZC(3142),
      MC = ZC(4992),
      gC = ZC(5008),
      SC = ZC(1056);

    function pC(CC) {
      let {
        folderName: zC,
        onTexturePackUpdated: wC,
        disabled: pC = !1,
        maxFileSizeMb: PC,
        packOwner: GC
      } = CC;
      const {
        t: RC
      } = (0, oC.y)(), [AC, xC] = (0, QC.useState)(!1), [JC, IC] = (0, QC.useState)(null), [iC, vC] = (0, QC.useState)(null), eC = (0, QC.useRef)(null);
      async function hC(CC) {
        xC(!0);
        try {
          const zC = await (0, qC.q)(CC);
          if ("customGame" === GC && (0, FC.h)(zC)) return void IC(RC(FC.d));
          if (void 0 !== PC) {
            const CC = JSON.stringify(zC).length / 1048576;
            if (CC > PC) return void IC(RC("customTexturePack:packTooBig", {
              size: CC.toFixed(1),
              max: PC
            }))
          }
          IC(null), vC(null), wC(zC), eC.current = zC,
            function(CC, zC) {
              const QC = CC.modelOverrides;
              QC && Promise.all([ZC.e(203), ZC.e(202)]).then((() => ZC(34221))).then((ZC => {
                let {
                  packDisplayName: wC,
                  refusedPackModels: bC,
                  packModelSummary: nC
                } = ZC;
                const fC = wC(CC.metaData);
                zC(nC(fC, bC(fC, QC, !1)))
              })).catch((CC => {
                console.error("Checking the texture pack's models failed:", CC)
              }))
            }(zC, (CC => {
              eC.current === zC && vC(CC)
            }))
        } catch (zC) {
          if (zC instanceof NC.d) {
            const CC = "customTexturePack:invalidPack" !== zC.translationKey || (0, gC.f)() ? zC.translationKey : "customTexturePack:invalidPackZip";
            IC((0, MC.h)(RC, CC, zC.params))
          } else console.error("Couldn't read the texture pack", zC), IC(RC("customTexturePack:errorTitle"))
        } finally {
          xC(!1)
        }
      }
      const {
        getRootProps: KC,
        getInputProps: YC,
        isDragActive: dC,
        open: mC
      } = (0, nC.d)({
        onDrop: hC,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: pC
      });
      return (0, SC.jsxs)("div", {
        className: "CustomTexturePackContainer",
        children: [(0, SC.jsxs)("div", {
          className: "CustomTextureWarning",
          children: [RC("settingsMenu:customTextureWarning"), ".", (0, SC.jsx)("br", {}), RC("settingsMenu:viewDocumentation"), ":", " ", (0, SC.jsx)("a", {
            href: "https://github.com/Bloxdy/texturePacks",
            target: "_blank",
            rel: "noreferrer",
            children: "github.com/Bloxdy/texturePacks"
          })]
        }), JC && (0, SC.jsxs)("div", {
          className: "CustomTextureError",
          children: [RC("general:error"), ": ", JC]
        }), iC && (0, SC.jsx)("div", {
          className: "CustomTextureError",
          children: iC
        }), (0, SC.jsxs)("div", {
          ...KC({
            className: bC()("CustomTextureFolderUpload", {
              ActiveDrag: dC,
              Disabled: pC
            })
          }),
          children: [(0, SC.jsx)("input", {
            ...YC({
              webkitdirectory: "true"
            })
          }), AC && (0, SC.jsx)("div", {
            className: "CustomTextureFolderUploadLoading",
            children: (0, SC.jsx)(fC.d, {})
          }), !AC && !dC && zC && (0, SC.jsxs)(SC.Fragment, {
            children: [(0, SC.jsx)("div", {
              className: "CustomTextureFolderUploadIcon Active",
              children: (0, SC.jsx)(WC.c, {
                name: "folder-image"
              })
            }), (0, SC.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions Active",
              children: zC
            })]
          }), !AC && (dC || !zC) && (0, SC.jsxs)(SC.Fragment, {
            children: [(0, SC.jsx)("div", {
              className: "CustomTextureFolderUploadIcon",
              children: (0, SC.jsx)(WC.c, {
                name: "up-from-bracket"
              })
            }), (0, SC.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions",
              children: RC((0, gC.f)() ? "customTexturePack:dropHere" : "customTexturePack:chooseZipInstructions")
            })]
          }), !AC && (0, SC.jsx)(gC.b, {
            disabled: pC,
            openFolderPicker: mC,
            onFiles: CC => {
              hC(CC)
            }
          })]
        })]
      })
    }
  },
  5008: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => FC,
      f: () => qC
    });
    var QC = ZC(48),
      wC = ZC(1388),
      bC = ZC(1143),
      nC = ZC(77),
      fC = ZC(3123),
      oC = ZC(1056);

    function qC() {
      return !(0, nC.isMobile)()
    }

    function FC(CC) {
      let {
        disabled: zC,
        openFolderPicker: ZC,
        onFiles: nC
      } = CC;
      const {
        t: FC
      } = (0, bC.y)(), WC = (0, QC.useRef)(null);
      return (0, oC.jsxs)("div", {
        className: "PackPickButtons",
        "data-pad-mouse-only": !0,
        children: [(0, oC.jsx)("input", {
          ref: WC,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(CC) {
            const zC = Array.from(CC.target.files);
            CC.target.value = "", nC(zC)
          }
        }), qC() && (0, oC.jsx)(wC.g, {
          disabled: zC,
          onClick: ZC,
          children: FC("general:chooseFolder")
        }), (0, oC.jsx)(wC.g, {
          disabled: zC,
          onClick: () => {
            (0, fC.c)(WC.current)
          },
          children: FC("general:chooseZip")
        })]
      })
    }
  },
  4942: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => gC,
      e: () => RC,
      f: () => SC,
      h: () => GC
    });
    var QC = ZC(48),
      wC = ZC(4947),
      bC = ZC(4300),
      nC = ZC(1321),
      fC = ZC(4971),
      oC = ZC(1002),
      qC = ZC.n(oC),
      FC = ZC(1307),
      WC = ZC(1645),
      NC = ZC(4979),
      MC = ZC(1056);

    function gC(CC) {
      let {
        label: zC,
        onClick: ZC,
        checked: QC,
        circleInfoText: wC,
        className: fC,
        disabled: oC,
        note: FC
      } = CC;
      return (0, MC.jsxs)("div", {
        "aria-disabled": oC || void 0,
        "data-pad-focusable": !0,
        className: qC()("SettingBox CheckboxContainer", {
          [fC]: fC,
          SettingBoxDisabled: oC
        }),
        onClick: () => {
          oC || ZC(!QC)
        },
        children: [(0, MC.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, MC.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, MC.jsx)(bC.e, {
              className: "SettingsCheckbox",
              checked: QC,
              disabled: oC,
              onChange: () => {}
            })
          }), (0, MC.jsxs)("div", {
            className: "CheckboxText",
            children: [zC, wC && (0, MC.jsx)("span", {
              onClick: CC => CC.stopPropagation(),
              children: (0, MC.jsx)(nC.b, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: wC
              })
            })]
          })]
        }), FC && (0, MC.jsx)("div", {
          className: "SettingNote",
          children: FC
        })]
      })
    }

    function SC(CC) {
      let {
        name: zC,
        onChange: ZC,
        min: wC,
        max: bC,
        step: fC,
        initValue: oC,
        circleInfoText: FC,
        format: WC,
        className: NC,
        padStep: gC,
        disabled: SC = !1,
        selectableMax: pC,
        cappedNote: GC,
        onChangeComplete: RC
      } = CC;
      const [AC, xC] = (0, QC.useState)(oC), JC = (0, QC.useRef)(oC);
      (0, QC.useEffect)((() => {
        JC.current = oC, xC(oC)
      }), [oC]);
      const IC = void 0 !== pC && pC < bC,
        iC = IC ? {
          "--slider-selectable": (pC - wC) / (bC - wC)
        } : void 0;
      return (0, MC.jsxs)("div", {
        className: qC()("SettingBox SettingsSliderDiv", {
          [NC]: NC,
          SettingBoxDisabled: SC,
          SliderCapped: IC
        }),
        style: iC,
        children: [(0, MC.jsxs)("div", {
          className: "SliderText",
          children: [`${zC}: ${WC?WC(AC):AC}`, FC && (0, MC.jsx)(nC.b, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: FC
          })]
        }), (0, MC.jsx)("div", {
          className: "SliderDiv",
          children: (0, MC.jsx)(PC, {
            value: AC,
            min: wC,
            max: bC,
            step: fC,
            onChange: CC => {
              if (IC && CC >= pC && AC === pC) return;
              const zC = IC ? Math.min(CC, pC) : CC;
              JC.current = zC, xC(zC), ZC(zC)
            },
            onChangeComplete: RC && (() => {
              RC(JC.current)
            }),
            format: WC,
            padStep: gC,
            disabled: SC
          })
        }), IC && GC && (0, MC.jsx)("div", {
          className: "SettingNote",
          children: GC
        })]
      })
    }
    const pC = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function PC(CC) {
      var zC;
      let {
        value: ZC,
        min: bC,
        max: nC,
        step: fC,
        onChange: oC,
        orientation: qC,
        reverse: FC,
        setIsChanging: WC,
        tooltip: gC,
        labels: SC,
        handleLabel: PC,
        format: GC,
        onChangeStart: RC,
        onChangeComplete: AC,
        padStep: xC,
        disabled: JC = !1
      } = CC;
      const IC = (0, QC.useRef)(null),
        iC = (0, QC.useRef)(null);
      (0, QC.useLayoutEffect)((() => {
        var CC, zC, ZC;
        const QC = null !== (CC = null === (zC = IC.current) || void 0 === zC ? void 0 : zC.querySelector(".rangeslider")) && void 0 !== CC ? CC : null;
        null === QC || void 0 === QC || QC.setAttribute("data-pad-slider", ""), null === QC || void 0 === QC || QC.setAttribute("data-pad-focusable", ""), null === QC || void 0 === QC || null === (ZC = QC.querySelector(".rangeslider__handle")) || void 0 === ZC || ZC.setAttribute("data-pad-slider-handle", ""), iC.current = QC
      }), []), (0, QC.useLayoutEffect)((() => {
        var CC, zC;
        JC ? null === (CC = iC.current) || void 0 === CC || CC.setAttribute("aria-disabled", "true") : null === (zC = iC.current) || void 0 === zC || zC.removeAttribute("aria-disabled")
      }), [JC]);
      const vC = (null !== (zC = String(fC).split(".")[1]) && void 0 !== zC ? zC : "").length,
        eC = CC => {
          const zC = Number((Math.round((CC - bC) / fC) * fC + bC).toFixed(vC));
          return Math.min(nC, Math.max(bC, zC))
        },
        hC = (0, QC.useRef)(AC);
      hC.current = AC, (0, QC.useEffect)((() => {
        const CC = IC.current;
        if (!CC) return;
        const zC = CC => {
          var zC;
          pC.has(CC.key) && (null === (zC = hC.current) || void 0 === zC || zC.call(hC))
        };
        return CC.addEventListener("keyup", zC), () => {
          CC.removeEventListener("keyup", zC)
        }
      }), []);
      const KC = (0, QC.useRef)(!1);
      return (0, NC.g)(iC, {
        adjust: CC => {
          if (JC) return;
          const zC = null !== xC && void 0 !== xC ? xC : Math.max(fC, Math.round((nC - bC) / 20 / fC) * fC),
            QC = eC(ZC + CC * zC * (FC ? -1 : 1));
          QC !== ZC && (null === RC || void 0 === RC || RC(), oC(QC), null === AC || void 0 === AC || AC())
        },
        setFraction: CC => {
          if (JC) return;
          const zC = eC(bC + (FC ? 1 - CC : CC) * (nC - bC));
          zC !== ZC && (KC.current || (KC.current = !0, null === RC || void 0 === RC || RC()), oC(zC))
        },
        endDrag: () => {
          KC.current && (KC.current = !1, null === AC || void 0 === AC || AC())
        }
      }), (0, MC.jsx)("div", {
        ref: IC,
        style: {
          display: "contents"
        },
        children: (0, MC.jsx)(wC.b, {
          value: ZC,
          min: bC,
          max: nC,
          step: fC,
          onChange: oC,
          orientation: qC,
          reverse: FC,
          tooltip: gC,
          labels: SC,
          handleLabel: PC,
          format: GC,
          onChangeStart: () => {
            null === RC || void 0 === RC || RC(), null === WC || void 0 === WC || WC(!0)
          },
          onChangeComplete: () => {
            null === WC || void 0 === WC || WC(!1), null === AC || void 0 === AC || AC()
          }
        })
      })
    }
    async function GC() {
      const CC = FC.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await CC.getResult() && (0, WC.reloadBloxd)()
    }

    function RC(CC) {
      let {
        label: zC,
        options: ZC,
        value: QC,
        onChange: wC,
        circleInfoText: bC
      } = CC;
      return (0, MC.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, MC.jsxs)("div", {
          className: "SliderText",
          children: [zC, bC && (0, MC.jsx)(nC.b, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: bC
          })]
        }), (0, MC.jsx)(fC.b, {
          ariaLabel: zC,
          options: ZC,
          value: QC,
          onChange: wC
        })]
      })
    }
  },
  4933: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => pC,
      f: () => PC
    });
    var QC = ZC(3140),
      wC = ZC(2063),
      bC = ZC(48),
      nC = ZC(1002),
      fC = ZC.n(nC),
      oC = ZC(1295),
      qC = ZC(3137),
      FC = ZC(1307),
      WC = ZC(4942),
      NC = ZC(4985),
      MC = ZC(615),
      gC = ZC(5013),
      SC = ZC(1056);

    function pC(CC) {
      var zC;
      let {
        setApplySettingsCallback: ZC
      } = CC;
      const [, nC] = (0, bC.useReducer)((CC => CC + 1), 0), fC = (0, bC.useRef)(!1), oC = (0, bC.useRef)(null);

      function pC(CC, zC) {
        qC.c.setFromJson(CC, "player");
        const QC = qC.c.saveTexturePack();
        if (MC.z) {
          const CC = qC.c.toJson();
          QC.then((zC => {
            zC && (0, gC.c)(CC)
          }))
        } else fC.current ||= zC, oC.current !== qC.c.getId() || qC.c.getId() === wC.q.CUSTOM && fC.current ? ZC((() => WC.h)) : ZC(null);
        nC()
      }
      async function GC(CC) {
        if (qC.c.getId() !== CC.metaData.id) {
          if (qC.c.getId() === wC.q.CUSTOM && qC.c.getFromFolderName()) {
            const CC = FC.NotificationProvider.showPromptPopup({
              title: "settingsMenu:loseChangesTitle",
              subtitle: "settingsMenu:loseChangesSubtitle",
              confirmText: "general:continue",
              destructive: !0,
              confirmTooltip: "",
              cancelText: "general:cancel",
              cancelTooltip: ""
            });
            if (!0 !== await CC.getResult()) return
          }
          pC(CC, !1)
        }
      }(0, bC.useEffect)((() => {
        oC.current = qC.c.getId()
      }), []);
      const RC = QC.d,
        AC = [RC, ...Object.values(wC.q).filter((CC => CC !== RC))];
      return (0, SC.jsx)(SC.Fragment, {
        children: (0, SC.jsxs)("div", {
          className: "TexturePackCategory SettingsMenuRightInner",
          children: [(0, SC.jsx)("div", {
            className: "TexturePackList",
            children: AC.map((CC => (0, SC.jsx)(PC, {
              id: CC,
              isSelected: CC === qC.c.getId(),
              setSelected: GC
            }, CC)))
          }), qC.c.getId() === wC.q.CUSTOM && (0, SC.jsx)(NC.c, {
            folderName: null !== (zC = qC.c.getFromFolderName()) && void 0 !== zC ? zC : null,
            onTexturePackUpdated: function(CC) {
              pC(CC, !0)
            },
            packOwner: "player"
          })]
        })
      })
    }

    function PC(CC) {
      let {
        id: zC,
        isSelected: ZC,
        setSelected: nC,
        disabled: qC = !1
      } = CC;
      const [FC, WC] = (0, bC.useState)(!0), [NC, MC] = (0, bC.useState)(""), [gC, pC] = (0, bC.useState)(""), [PC, GC] = (0, bC.useState)(""), RC = (0, bC.useRef)({});
      return (0, bC.useEffect)((() => {
        (0, QC.n)(zC).then((CC => {
          var zC;
          CC && (RC.current = CC, WC(!1), MC(RC.current.metaData.name), pC(RC.current.metaData.author), GC(null !== (zC = RC.current.metaData.previewImage) && void 0 !== zC ? zC : ""))
        })).catch((CC => {
          console.warn(`Failed to fetch texture pack ${zC}`, CC)
        }))
      }), [zC]), (0, SC.jsxs)("div", {
        "data-pad-focusable": !0,
        "aria-disabled": qC || void 0,
        className: fC()("TexturePack", {
          Selected: ZC,
          Custom: zC === wC.q.CUSTOM,
          Disabled: qC
        }),
        onClick: () => {
          FC || qC || nC(RC.current)
        },
        children: [(0, SC.jsx)("div", {
          className: "TexturePackBg",
          style: {
            backgroundImage: PC ? `url(${PC})` : void 0
          }
        }), FC && (0, SC.jsx)("div", {
          className: "TexturePackName",
          children: (0, SC.jsx)(oC.d, {})
        }), !FC && NC && (0, SC.jsx)("div", {
          className: "TexturePackName",
          children: NC
        }), !FC && gC && (0, SC.jsx)("div", {
          className: "TexturePackAuthor",
          children: gC
        })]
      })
    }
  },
  4992: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => fC,
      g: () => nC,
      h: () => bC
    });
    var QC = ZC(4998);
    const wC = [CC => CC.strict ? "strict" : "nonStrict", CC => CC.program];

    function bC(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const QC = {};
      for (const wC in ZC) QC[wC] = `\0${wC}\0`;
      return CC(zC, QC).replace(/\0(\w+)\0/g, ((CC, zC) => ZC[zC]))
    }

    function nC(CC) {
      return null === CC.file ? null : CC.line > 0 ? `${CC.file}:${CC.line}` : CC.file
    }

    function fC(CC) {
      const zC = new Map(CC.map((CC => [oC(CC).join("."), CC])));
      if (0 === zC.size) return [];
      const ZC = FC([...zC.values()]);
      return 0 === ZC[0].length ? [] : ZC
    }

    function oC(CC) {
      return wC.map((zC => zC(CC)))
    }
    const qC = wC.map((CC => new Set(QC.f.map(CC)).size));

    function FC(CC) {
      const zC = wC.map((zC => new Set(CC.map(zC)))),
        ZC = zC.reduce(((CC, zC) => CC * zC.size), 1),
        QC = zC.every(((CC, zC) => 1 === CC.size || CC.size === qC[zC]));
      if (ZC === CC.length && QC) return [wC.filter(((CC, ZC) => 1 === zC[ZC].size)).map((zC => zC(CC[0])))];
      let bC = null;
      for (let nC = 0; nC < wC.length; nC++) {
        if (1 === zC[nC].size) continue;
        const ZC = WC(CC, wC[nC]).flatMap(FC);
        (null === bC || ZC.length < bC.length) && (bC = ZC)
      }
      return bC
    }

    function WC(CC, zC) {
      const ZC = new Map;
      for (const wC of CC) {
        var QC;
        const CC = zC(wC);
        ZC.set(CC, [...null !== (QC = ZC.get(CC)) && void 0 !== QC ? QC : [], wC])
      }
      return [...ZC.values()]
    }
  },
  4971: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => nC
    });
    var QC = ZC(1002),
      wC = ZC.n(QC),
      bC = ZC(1056);

    function nC(CC) {
      let {
        options: zC,
        value: ZC,
        onChange: QC,
        ariaLabel: nC,
        className: fC,
        reselectable: oC = !1,
        keepsFocus: qC = !1,
        padTabs: FC
      } = CC;
      const WC = void 0 !== FC;
      return (0, bC.jsx)("div", {
        className: wC()("SegmentedToggle", fC),
        role: "group",
        "aria-label": nC,
        "data-pad-tabs": FC,
        children: zC.map((CC => {
          const zC = CC.value === ZC;
          return (0, bC.jsx)("button", {
            type: "button",
            "aria-pressed": zC,
            "data-pad-tab": WC || void 0,
            "data-pad-selected": WC && zC ? "true" : void 0,
            "data-pad-default-focus": WC && zC || void 0,
            "aria-label": CC.ariaLabel,
            title: CC.ariaLabel,
            className: wC()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: zC
            }),
            onMouseDown: qC ? CC => {
              CC.preventDefault()
            } : void 0,
            onClick: () => {
              zC && !oC || QC(CC.value)
            },
            children: CC.label
          }, CC.value)
        }))
      })
    }
  },
  4979: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => bC,
      g: () => nC
    });
    var QC = ZC(48);
    const wC = new WeakMap,
      bC = CC => {
        var zC;
        const ZC = CC.closest("[data-pad-slider]");
        return ZC && null !== (zC = wC.get(ZC)) && void 0 !== zC ? zC : null
      },
      nC = (CC, zC) => {
        const ZC = (0, QC.useRef)(zC);
        ZC.current = zC, (0, QC.useEffect)((() => {
          if (CC.current) return ((CC, zC) => (wC.set(CC, zC), () => {
            wC.get(CC) === zC && wC.delete(CC)
          }))(CC.current, {
            adjust: CC => {
              ZC.current.adjust(CC)
            },
            setFraction: CC => {
              ZC.current.setFraction(CC)
            },
            endDrag: () => {
              ZC.current.endDrag()
            }
          })
        }), [CC])
      }
  },
  4998: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => QC.j,
      f: () => wC,
      i: () => QC.q
    });
    var QC = ZC(5002);
    const wC = [!1, !0].flatMap((CC => ["terrain", "liquid", "model"].map((zC => ({
      strict: CC,
      program: zC
    })))))
  },
  5021: (CC, zC, ZC) => {
    function QC(CC, zC) {
      return wC(CC, zC)
    }

    function wC(CC, zC) {
      if (CC === zC) return !0;
      if ("object" !== typeof CC || "object" !== typeof zC || null === CC || null === zC || Array.isArray(CC) !== Array.isArray(zC)) return !1;
      const ZC = CC,
        QC = zC,
        bC = Object.keys(ZC);
      return bC.length === Object.keys(QC).length && bC.every((CC => Object.prototype.hasOwnProperty.call(QC, CC) && wC(ZC[CC], QC[CC])))
    }
    ZC.d(zC, {
      b: () => QC
    })
  },
  5013: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => nC,
      d: () => fC
    });
    var QC = ZC(2063),
      wC = ZC(5021);
    let bC = null;

    function nC(CC) {
      bC = {
        pack: CC.metaData.id === QC.c ? null : CC
      }
    }

    function fC(CC) {
      return !(null === bC || !(0, wC.b)(bC.pack, CC)) && (bC = null, !0)
    }
  },
  5002: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => fC,
      g: () => nC,
      j: () => QC,
      k: () => SC,
      m: () => WC,
      q: () => wC,
      r: () => bC,
      s: () => qC,
      w: () => FC,
      y: () => NC
    });
    const QC = 5;

    function wC(CC) {
      return CC === QC
    }

    function bC(CC) {
      return [...CC.features]
    }
    const nC = 262144,
      fC = 256,
      oC = 256;

    function qC(CC) {
      if ("object" !== typeof CC || null === CC || Array.isArray(CC)) return "The pack has no files.";
      const zC = [];
      for (const [ZC, QC] of Object.entries(CC)) {
        if ("string" !== typeof QC) return `${ZC} isn't text.`;
        zC.push({
          path: ZC,
          source: QC
        })
      }
      return zC.sort(((CC, zC) => WC(CC.path, zC.path))),
        function(CC) {
          if (0 === CC.length) return "The pack has no .wgsl files.";
          if (CC.length > fC) return `The pack has more than ${fC} .wgsl files.`;
          const zC = new Set;
          for (const {
              path: ZC
            }
            of CC) {
            const CC = MC(ZC);
            if (null !== CC) return CC;
            if (zC.has(ZC)) return `The pack has two files at ${ZC}.`;
            zC.add(ZC)
          }
          return NC(CC) > nC ? `The pack's .wgsl files are over ${nC/1024} KB in total.` : null
        }(zC) ?? zC
    }

    function FC(CC) {
      const zC = {};
      for (const ZC of CC) zC[ZC.path] = ZC.source;
      return zC
    }

    function WC(CC, zC) {
      return CC < zC ? -1 : CC > zC ? 1 : 0
    }

    function NC(CC) {
      const zC = new TextEncoder;
      let ZC = 0;
      for (const {
          source: QC
        }
        of CC) ZC += zC.encode(QC).byteLength;
      return ZC
    }

    function MC(CC) {
      if (!CC.toLowerCase().endsWith(".wgsl")) return `${CC} isn't a .wgsl file.`;
      if (CC.length > oC) return `A file path is over ${oC} characters.`;
      if (CC.includes("\\") || /[\u0000-\u001f]/.test(CC)) return `${CC} isn't a valid file path.`;
      return CC.split("/").some((CC => "" === CC || "." === CC || ".." === CC)) ? `${CC} isn't a valid file path.` : null
    }
    const gC = /^(.*)\[rot\[([1-4])$/;

    function SC(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const QC = new Map;
      zC.forEach(((CC, zC) => {
        let {
          numAnimStates: ZC,
          animStartIdx: wC
        } = CC;
        for (let bC = 1; bC < ZC; bC++) QC.set(wC + bC - 1, zC)
      }));
      const wC = Object.entries(CC),
        bC = new Map;
      for (const [SC, pC] of wC) {
        const CC = gC.exec(SC);
        "1" === CC?.[2] && bC.set(CC[1], pC + 1)
      }
      const nC = CC => {
          const zC = gC.exec(CC);
          return zC && bC.has(zC[1]) ? {
            root: zC[1],
            rotation: Number(zC[2]) - 1
          } : null
        },
        fC = new Set(wC.map((CC => {
          let [zC] = CC;
          return nC(zC)?.root ?? zC
        }))),
        oC = (CC, ZC) => {
          const QC = CC.replace(/_?0$/, "");
          return (zC[ZC]?.numAnimStates ?? 0) > 1 && !fC.has(QC) ? QC : CC
        },
        qC = new Map;
      for (const [gC, SC] of wC) qC.set(SC, oC(nC(gC)?.root ?? gC, SC));
      const FC = wC.reduce(((CC, zC) => {
          let [, ZC] = zC;
          return Math.max(CC, ZC + 1)
        }), 0),
        WC = Array.from({
          length: FC
        }, ((CC, zC) => ({
          id: zC + 1,
          rotation: 0
        }))),
        NC = new Map,
        MC = new Map;
      for (const [gC, SC] of wC) {
        const CC = nC(gC),
          zC = QC.get(SC);
        if (void 0 !== zC) {
          const ZC = qC.get(zC);
          MC.set(gC, {
            name: gC,
            texture: ZC,
            kind: "frame"
          }), CC && !MC.has(CC.root) && MC.set(CC.root, {
            name: CC.root,
            texture: ZC,
            kind: "frame"
          });
          continue
        }
        const ZC = qC.get(SC),
          wC = CC?.root ?? gC;
        if (ZC !== wC && MC.set(wC, {
            name: wC,
            texture: ZC,
            kind: "frame"
          }), CC) {
          const zC = bC.get(CC.root);
          WC[SC] = {
            id: zC,
            rotation: CC.rotation
          }, NC.set(ZC, zC), MC.set(gC, {
            name: gC,
            texture: ZC,
            kind: "rotation"
          })
        } else NC.set(ZC, SC + 1)
      }
      for (const gC of NC.keys()) MC.delete(gC);
      for (const [gC, SC] of ZC) {
        const CC = NC.get(SC);
        void 0 === CC || NC.has(gC) || (NC.set(gC, CC), MC.delete(gC))
      }
      return {
        named: [...NC].sort(((CC, zC) => {
          let [ZC] = CC, [QC] = zC;
          return ZC < QC ? -1 : ZC > QC ? 1 : 0
        })).map((CC => {
          let [zC, ZC] = CC;
          return {
            name: zC,
            id: ZC
          }
        })),
        aliases: [...MC.values()],
        layers: WC
      }
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);