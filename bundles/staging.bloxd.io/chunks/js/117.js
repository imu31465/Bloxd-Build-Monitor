export const id = 117;
export const ids = [117];
export const modules = {
  5404: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => vV
    });
    var JV = xV(1146),
      YV = xV.n(JV),
      UV = xV(1414),
      yV = xV(1408),
      pV = xV(3942),
      QV = xV(138),
      nV = xV(3974),
      wV = xV(3967),
      ZV = xV(1321);

    function vV(VV) {
      let {
        game: eV
      } = VV;
      const xV = (0, QV.is99NightsCrazyGamesBundle)() ? "large" : "small",
        JV = (0, nV.g)(eV, xV),
        vV = (0, pV.d)(JV),
        rV = void 0 !== vV.blurhash;
      return (0, ZV.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [vV.isLoading && !rV && (0, ZV.jsx)(yV.d, {
          loaderType: "Secondary"
        }), !vV.failed && (null !== vV.src || rV) && (0, ZV.jsx)("div", {
          className: YV()("SchematicImage", wV.i, {
            SchematicImageFadeIn: vV.fadeIn && !rV
          }),
          style: (0, wV.h)(vV),
          children: (0, ZV.jsx)(wV.e, {
            image: vV
          })
        }), vV.failed && (0, ZV.jsx)("div", {
          className: "SchematicImageError",
          children: (0, ZV.jsx)(UV.b, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  5542: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => EV
    });
    var JV = xV(62),
      YV = xV(1146),
      UV = xV.n(YV),
      yV = xV(5448),
      pV = xV(1408),
      QV = xV(1220),
      nV = xV(3586),
      wV = xV(3724),
      ZV = xV(1414),
      vV = xV(3588),
      rV = xV(5548),
      kV = xV(5564),
      bV = xV(1321);

    function EV(VV) {
      let {
        folderName: eV,
        onTexturePackUpdated: YV,
        disabled: EV = !1,
        maxFileSizeMb: BV,
        packOwner: jV
      } = VV;
      const {
        t: qV
      } = (0, QV.A)(), [tV, FV] = (0, JV.useState)(!1), [TV, PV] = (0, JV.useState)(null), [AV, NV] = (0, JV.useState)(null), XV = (0, JV.useRef)(null);
      async function MV(VV) {
        FV(!0);
        try {
          const eV = await (0, nV.p)(VV);
          if ("customGame" === jV && (0, wV.i)(eV)) return void PV(qV(wV.c));
          if (void 0 !== BV) {
            const VV = JSON.stringify(eV).length / 1048576;
            if (VV > BV) return void PV(qV("customTexturePack:packTooBig", {
              size: VV.toFixed(1),
              max: BV
            }))
          }
          PV(null), NV(null), YV(eV), XV.current = eV,
            function(VV, eV) {
              const JV = VV.modelOverrides;
              JV && Promise.all([xV.e(230), xV.e(229)]).then((() => xV(35402))).then((xV => {
                let {
                  packDisplayName: YV,
                  refusedPackModels: UV,
                  packModelSummary: yV
                } = xV;
                const pV = YV(VV.metaData);
                eV(yV(pV, UV(pV, JV, !1)))
              })).catch((VV => {
                console.error("Checking the texture pack's models failed:", VV)
              }))
            }(eV, (VV => {
              XV.current === eV && NV(VV)
            }))
        } catch (eV) {
          if (eV instanceof vV.d) {
            const VV = "customTexturePack:invalidPack" !== eV.translationKey || (0, kV.g)() ? eV.translationKey : "customTexturePack:invalidPackZip";
            PV((0, rV.h)(qV, VV, eV.params))
          } else console.error("Couldn't read the texture pack", eV), PV(qV("customTexturePack:errorTitle"))
        } finally {
          FV(!1)
        }
      }
      const {
        getRootProps: zV,
        getInputProps: GV,
        isDragActive: WV,
        open: RV
      } = (0, yV.e)({
        onDrop: MV,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: EV
      });
      return (0, bV.jsxs)("div", {
        className: "CustomTexturePackContainer",
        children: [(0, bV.jsxs)("div", {
          className: "CustomTextureWarning",
          children: [qV("settingsMenu:customTextureWarning"), ".", (0, bV.jsx)("br", {}), qV("settingsMenu:viewDocumentation"), ":", " ", (0, bV.jsx)("a", {
            href: "https://github.com/Bloxdy/texturePacks",
            target: "_blank",
            rel: "noreferrer",
            children: "github.com/Bloxdy/texturePacks"
          })]
        }), TV && (0, bV.jsxs)("div", {
          className: "CustomTextureError",
          children: [qV("general:error"), ": ", TV]
        }), AV && (0, bV.jsx)("div", {
          className: "CustomTextureError",
          children: AV
        }), (0, bV.jsxs)("div", {
          ...zV({
            className: UV()("CustomTextureFolderUpload", {
              ActiveDrag: WV,
              Disabled: EV
            })
          }),
          children: [(0, bV.jsx)("input", {
            ...GV({
              webkitdirectory: "true"
            })
          }), tV && (0, bV.jsx)("div", {
            className: "CustomTextureFolderUploadLoading",
            children: (0, bV.jsx)(pV.d, {})
          }), !tV && !WV && eV && (0, bV.jsxs)(bV.Fragment, {
            children: [(0, bV.jsx)("div", {
              className: "CustomTextureFolderUploadIcon Active",
              children: (0, bV.jsx)(ZV.b, {
                name: "folder-image"
              })
            }), (0, bV.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions Active",
              children: eV
            })]
          }), !tV && (WV || !eV) && (0, bV.jsxs)(bV.Fragment, {
            children: [(0, bV.jsx)("div", {
              className: "CustomTextureFolderUploadIcon",
              children: (0, bV.jsx)(ZV.b, {
                name: "up-from-bracket"
              })
            }), (0, bV.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions",
              children: qV((0, kV.g)() ? "customTexturePack:dropHere" : "customTexturePack:chooseZipInstructions")
            })]
          }), !tV && (0, bV.jsx)(kV.e, {
            disabled: EV,
            openFolderPicker: RV,
            onFiles: VV => {
              MV(VV)
            }
          })]
        })]
      })
    }
  },
  5564: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => wV,
      g: () => nV
    });
    var JV = xV(62),
      YV = xV(1551),
      UV = xV(1220),
      yV = xV(99),
      pV = xV(3561),
      QV = xV(1321);

    function nV() {
      return !(0, yV.isMobile)()
    }

    function wV(VV) {
      let {
        disabled: eV,
        openFolderPicker: xV,
        onFiles: yV
      } = VV;
      const {
        t: wV
      } = (0, UV.A)(), ZV = (0, JV.useRef)(null);
      return (0, QV.jsxs)("div", {
        className: "PackPickButtons",
        "data-pad-mouse-only": !0,
        children: [(0, QV.jsx)("input", {
          ref: ZV,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(VV) {
            const eV = Array.from(VV.target.files);
            VV.target.value = "", yV(eV)
          }
        }), nV() && (0, QV.jsx)(YV.f, {
          disabled: eV,
          onClick: xV,
          children: wV("general:chooseFolder")
        }), (0, QV.jsx)(YV.f, {
          disabled: eV,
          onClick: () => {
            (0, pV.g)(ZV.current)
          },
          children: wV("general:chooseZip")
        })]
      })
    }
  },
  5500: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => kV,
      i: () => tV,
      m: () => bV,
      q: () => qV
    });
    var JV = xV(62),
      YV = xV(5508),
      UV = xV(4795),
      yV = xV(1446),
      pV = xV(5529),
      QV = xV(1146),
      nV = xV.n(QV),
      wV = xV(1439),
      ZV = xV(1838),
      vV = xV(5536),
      rV = xV(1321);

    function kV(VV) {
      let {
        label: eV,
        onClick: xV,
        checked: JV,
        circleInfoText: YV,
        className: pV,
        disabled: QV,
        note: wV
      } = VV;
      return (0, rV.jsxs)("div", {
        "aria-disabled": QV || void 0,
        "data-pad-focusable": !0,
        className: nV()("SettingBox CheckboxContainer", {
          [pV]: pV,
          SettingBoxDisabled: QV
        }),
        onClick: () => {
          QV || xV(!JV)
        },
        children: [(0, rV.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, rV.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, rV.jsx)(UV.b, {
              className: "SettingsCheckbox",
              checked: JV,
              disabled: QV,
              onChange: () => {}
            })
          }), (0, rV.jsxs)("div", {
            className: "CheckboxText",
            children: [eV, YV && (0, rV.jsx)("span", {
              onClick: VV => VV.stopPropagation(),
              children: (0, rV.jsx)(yV.c, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: YV
              })
            })]
          })]
        }), wV && (0, rV.jsx)("div", {
          className: "SettingNote",
          children: wV
        })]
      })
    }

    function bV(VV) {
      let {
        name: eV,
        onChange: xV,
        min: YV,
        max: UV,
        step: pV,
        initValue: QV,
        circleInfoText: wV,
        format: ZV,
        className: vV,
        padStep: kV,
        disabled: bV = !1,
        selectableMax: EV,
        cappedNote: BV,
        onChangeComplete: qV
      } = VV;
      const [tV, FV] = (0, JV.useState)(QV), TV = (0, JV.useRef)(QV);
      (0, JV.useEffect)((() => {
        TV.current = QV, FV(QV)
      }), [QV]);
      const PV = void 0 !== EV && EV < UV,
        AV = PV ? {
          "--slider-selectable": (EV - YV) / (UV - YV)
        } : void 0;
      return (0, rV.jsxs)("div", {
        className: nV()("SettingBox SettingsSliderDiv", {
          [vV]: vV,
          SettingBoxDisabled: bV,
          SliderCapped: PV
        }),
        style: AV,
        children: [(0, rV.jsxs)("div", {
          className: "SliderText",
          children: [`${eV}: ${ZV?ZV(tV):tV}`, wV && (0, rV.jsx)(yV.c, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: wV
          })]
        }), (0, rV.jsx)("div", {
          className: "SliderDiv",
          children: (0, rV.jsx)(jV, {
            value: tV,
            min: YV,
            max: UV,
            step: pV,
            onChange: VV => {
              if (PV && VV >= EV && tV === EV) return;
              const eV = PV ? Math.min(VV, EV) : VV;
              TV.current = eV, FV(eV), xV(eV)
            },
            onChangeComplete: qV && (() => {
              qV(TV.current)
            }),
            format: ZV,
            padStep: kV,
            disabled: bV
          })
        }), PV && BV && (0, rV.jsx)("div", {
          className: "SettingNote",
          children: BV
        })]
      })
    }
    const EV = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function BV(VV) {
      var eV;
      return (null !== (eV = String(VV).split(".")[1]) && void 0 !== eV ? eV : "").length
    }

    function jV(VV) {
      let {
        value: eV,
        min: xV,
        max: UV,
        step: yV,
        onChange: pV,
        orientation: QV,
        reverse: nV,
        setIsChanging: wV,
        tooltip: ZV,
        labels: kV,
        handleLabel: bV,
        format: jV,
        onChangeStart: qV,
        onChangeComplete: tV,
        padStep: FV,
        disabled: TV = !1
      } = VV;
      const PV = (0, JV.useRef)(null),
        AV = (0, JV.useRef)(null);
      (0, JV.useLayoutEffect)((() => {
        var VV, eV, xV;
        const JV = null !== (VV = null === (eV = PV.current) || void 0 === eV ? void 0 : eV.querySelector(".rangeslider")) && void 0 !== VV ? VV : null;
        null === JV || void 0 === JV || JV.setAttribute("data-pad-slider", ""), null === JV || void 0 === JV || JV.setAttribute("data-pad-focusable", ""), null === JV || void 0 === JV || null === (xV = JV.querySelector(".rangeslider__handle")) || void 0 === xV || xV.setAttribute("data-pad-slider-handle", ""), AV.current = JV
      }), []), (0, JV.useLayoutEffect)((() => {
        var VV, eV;
        TV ? null === (VV = AV.current) || void 0 === VV || VV.setAttribute("aria-disabled", "true") : null === (eV = AV.current) || void 0 === eV || eV.removeAttribute("aria-disabled")
      }), [TV]);
      const NV = Math.max(BV(yV), BV(xV)),
        XV = VV => {
          if (VV >= UV) return UV;
          if (VV <= xV) return xV;
          const eV = Number((Math.round((VV - xV) / yV) * yV + xV).toFixed(NV));
          return Math.min(UV, Math.max(xV, eV))
        },
        MV = (0, JV.useRef)(tV);
      MV.current = tV, (0, JV.useEffect)((() => {
        const VV = PV.current;
        if (!VV) return;
        const eV = VV => {
          var eV;
          EV.has(VV.key) && (null === (eV = MV.current) || void 0 === eV || eV.call(MV))
        };
        return VV.addEventListener("keyup", eV), () => {
          VV.removeEventListener("keyup", eV)
        }
      }), []);
      const zV = (0, JV.useRef)(!1);
      return (0, vV.h)(AV, {
        adjust: VV => {
          if (TV) return;
          const JV = null !== FV && void 0 !== FV ? FV : Math.max(yV, Math.round((UV - xV) / 20 / yV) * yV),
            YV = XV(eV + VV * JV * (nV ? -1 : 1));
          YV !== eV && (null === qV || void 0 === qV || qV(), pV(YV), null === tV || void 0 === tV || tV())
        },
        setFraction: VV => {
          if (TV) return;
          const JV = XV(xV + (nV ? 1 - VV : VV) * (UV - xV));
          JV !== eV && (zV.current || (zV.current = !0, null === qV || void 0 === qV || qV()), pV(JV))
        },
        endDrag: () => {
          zV.current && (zV.current = !1, null === tV || void 0 === tV || tV())
        }
      }), (0, rV.jsx)("div", {
        ref: PV,
        style: {
          display: "contents"
        },
        children: (0, rV.jsx)(YV.e, {
          value: eV,
          min: xV,
          max: UV,
          step: yV,
          onChange: VV => {
            pV(XV(VV))
          },
          orientation: QV,
          reverse: nV,
          tooltip: ZV,
          labels: kV,
          handleLabel: bV,
          format: jV,
          onChangeStart: () => {
            null === qV || void 0 === qV || qV(), null === wV || void 0 === wV || wV(!0)
          },
          onChangeComplete: () => {
            null === wV || void 0 === wV || wV(!1), null === tV || void 0 === tV || tV()
          }
        })
      })
    }
    async function qV() {
      const VV = wV.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await VV.getResult() && (0, ZV.reloadBloxd)()
    }

    function tV(VV) {
      let {
        label: eV,
        options: xV,
        value: JV,
        onChange: YV,
        circleInfoText: UV
      } = VV;
      return (0, rV.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, rV.jsxs)("div", {
          className: "SliderText",
          children: [eV, UV && (0, rV.jsx)(yV.c, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: UV
          })]
        }), (0, rV.jsx)(pV.b, {
          ariaLabel: eV,
          options: xV,
          value: JV,
          onChange: YV
        })]
      })
    }
  },
  5494: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => EV,
      h: () => BV
    });
    var JV = xV(3586),
      YV = xV(2277),
      UV = xV(62),
      yV = xV(1146),
      pV = xV.n(yV),
      QV = xV(1408),
      nV = xV(3584),
      wV = xV(1439),
      ZV = xV(5500),
      vV = xV(5542),
      rV = xV(686),
      kV = xV(5569),
      bV = xV(1321);

    function EV(VV) {
      var eV;
      let {
        setApplySettingsCallback: xV
      } = VV;
      const [, yV] = (0, UV.useReducer)((VV => VV + 1), 0), pV = (0, UV.useRef)(!1), QV = (0, UV.useRef)(null);

      function EV(VV, eV) {
        nV.b.setFromJson(VV, "player");
        const JV = nV.b.saveTexturePack();
        if (rV.I) {
          const VV = nV.b.toJson();
          JV.then((eV => {
            eV && (0, kV.e)(VV)
          }))
        } else pV.current ||= eV, QV.current !== nV.b.getId() || nV.b.getId() === YV.r.CUSTOM && pV.current ? xV((() => ZV.q)) : xV(null);
        yV()
      }
      async function jV(VV) {
        if (nV.b.getId() !== VV.metaData.id) {
          if (nV.b.getId() === YV.r.CUSTOM && nV.b.getFromFolderName()) {
            const VV = wV.NotificationProvider.showPromptPopup({
              title: "settingsMenu:loseChangesTitle",
              subtitle: "settingsMenu:loseChangesSubtitle",
              confirmText: "general:continue",
              destructive: !0,
              confirmTooltip: "",
              cancelText: "general:cancel",
              cancelTooltip: ""
            });
            if (!0 !== await VV.getResult()) return
          }
          EV(VV, !1)
        }
      }(0, UV.useEffect)((() => {
        QV.current = nV.b.getId()
      }), []);
      const qV = JV.c,
        tV = [qV, ...Object.values(YV.r).filter((VV => VV !== qV))];
      return (0, bV.jsx)(bV.Fragment, {
        children: (0, bV.jsxs)("div", {
          className: "TexturePackCategory SettingsMenuRightInner",
          children: [(0, bV.jsx)("div", {
            className: "TexturePackList",
            children: tV.map((VV => (0, bV.jsx)(BV, {
              id: VV,
              isSelected: VV === nV.b.getId(),
              setSelected: jV
            }, VV)))
          }), nV.b.getId() === YV.r.CUSTOM && (0, bV.jsx)(vV.c, {
            folderName: null !== (eV = nV.b.getFromFolderName()) && void 0 !== eV ? eV : null,
            onTexturePackUpdated: function(VV) {
              EV(VV, !0)
            },
            packOwner: "player"
          })]
        })
      })
    }

    function BV(VV) {
      let {
        id: eV,
        isSelected: xV,
        setSelected: yV,
        disabled: nV = !1
      } = VV;
      const [wV, ZV] = (0, UV.useState)(!0), [vV, rV] = (0, UV.useState)(""), [kV, EV] = (0, UV.useState)(""), [BV, jV] = (0, UV.useState)(""), qV = (0, UV.useRef)({});
      return (0, UV.useEffect)((() => {
        (0, JV.l)(eV).then((VV => {
          var eV;
          VV && (qV.current = VV, ZV(!1), rV(qV.current.metaData.name), EV(qV.current.metaData.author), jV(null !== (eV = qV.current.metaData.previewImage) && void 0 !== eV ? eV : ""))
        })).catch((VV => {
          console.warn(`Failed to fetch texture pack ${eV}`, VV)
        }))
      }), [eV]), (0, bV.jsxs)("div", {
        "data-pad-focusable": !0,
        "aria-disabled": nV || void 0,
        className: pV()("TexturePack", {
          Selected: xV,
          Custom: eV === YV.r.CUSTOM,
          Disabled: nV
        }),
        onClick: () => {
          wV || nV || yV(qV.current)
        },
        children: [(0, bV.jsx)("div", {
          className: "TexturePackBg",
          style: {
            backgroundImage: BV ? `url(${BV})` : void 0
          }
        }), wV && (0, bV.jsx)("div", {
          className: "TexturePackName",
          children: (0, bV.jsx)(QV.d, {})
        }), !wV && vV && (0, bV.jsx)("div", {
          className: "TexturePackName",
          children: vV
        }), !wV && kV && (0, bV.jsx)("div", {
          className: "TexturePackAuthor",
          children: kV
        })]
      })
    }
  },
  5548: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => pV,
      f: () => yV,
      h: () => UV
    });
    var JV = xV(5556);
    const YV = [VV => VV.strict ? "strict" : "nonStrict", VV => VV.program];

    function UV(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const JV = {};
      for (const YV in xV) JV[YV] = `\0${YV}\0`;
      return VV(eV, JV).replace(/\0(\w+)\0/g, ((VV, eV) => xV[eV]))
    }

    function yV(VV) {
      return null === VV.file ? null : VV.line > 0 ? `${VV.file}:${VV.line}` : VV.file
    }

    function pV(VV) {
      const eV = new Map(VV.map((VV => [QV(VV).join("."), VV])));
      if (0 === eV.size) return [];
      const xV = wV([...eV.values()]);
      return 0 === xV[0].length ? [] : xV
    }

    function QV(VV) {
      return YV.map((eV => eV(VV)))
    }
    const nV = YV.map((VV => new Set(JV.g.map(VV)).size));

    function wV(VV) {
      const eV = YV.map((eV => new Set(VV.map(eV)))),
        xV = eV.reduce(((VV, eV) => VV * eV.size), 1),
        JV = eV.every(((VV, eV) => 1 === VV.size || VV.size === nV[eV]));
      if (xV === VV.length && JV) return [YV.filter(((VV, xV) => 1 === eV[xV].size)).map((eV => eV(VV[0])))];
      let UV = null;
      for (let yV = 0; yV < YV.length; yV++) {
        if (1 === eV[yV].size) continue;
        const xV = ZV(VV, YV[yV]).flatMap(wV);
        (null === UV || xV.length < UV.length) && (UV = xV)
      }
      return UV
    }

    function ZV(VV, eV) {
      const xV = new Map;
      for (const YV of VV) {
        var JV;
        const VV = eV(YV);
        xV.set(VV, [...null !== (JV = xV.get(VV)) && void 0 !== JV ? JV : [], YV])
      }
      return [...xV.values()]
    }
  },
  5529: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => yV
    });
    var JV = xV(1146),
      YV = xV.n(JV),
      UV = xV(1321);

    function yV(VV) {
      let {
        options: eV,
        value: xV,
        onChange: JV,
        ariaLabel: yV,
        className: pV,
        reselectable: QV = !1,
        keepsFocus: nV = !1,
        padTabs: wV
      } = VV;
      const ZV = void 0 !== wV;
      return (0, UV.jsx)("div", {
        className: YV()("SegmentedToggle", pV),
        role: "group",
        "aria-label": yV,
        "data-pad-tabs": wV,
        children: eV.map((VV => {
          const eV = VV.value === xV;
          return (0, UV.jsx)("button", {
            type: "button",
            "aria-pressed": eV,
            "data-pad-tab": ZV || void 0,
            "data-pad-selected": ZV && eV ? "true" : void 0,
            "data-pad-default-focus": ZV && eV || void 0,
            "aria-label": VV.ariaLabel,
            title: VV.ariaLabel,
            className: YV()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: eV
            }),
            onMouseDown: nV ? VV => {
              VV.preventDefault()
            } : void 0,
            onClick: () => {
              eV && !QV || JV(VV.value)
            },
            children: VV.label
          }, VV.value)
        }))
      })
    }
  },
  5536: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => UV,
      h: () => yV
    });
    var JV = xV(62);
    const YV = new WeakMap,
      UV = VV => {
        var eV;
        const xV = VV.closest("[data-pad-slider]");
        return xV && null !== (eV = YV.get(xV)) && void 0 !== eV ? eV : null
      },
      yV = (VV, eV) => {
        const xV = (0, JV.useRef)(eV);
        xV.current = eV, (0, JV.useEffect)((() => {
          if (VV.current) return ((VV, eV) => (YV.set(VV, eV), () => {
            YV.get(VV) === eV && YV.delete(VV)
          }))(VV.current, {
            adjust: VV => {
              xV.current.adjust(VV)
            },
            setFraction: VV => {
              xV.current.setFraction(VV)
            },
            endDrag: () => {
              xV.current.endDrag()
            }
          })
        }), [VV])
      }
  },
  5556: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => JV.f,
      g: () => YV,
      j: () => JV.o
    });
    var JV = xV(5561);
    const YV = [!1, !0].flatMap((VV => ["terrain", "liquid", "model"].map((eV => ({
      strict: VV,
      program: eV
    })))))
  },
  5576: (VV, eV, xV) => {
    function JV(VV, eV) {
      return YV(VV, eV)
    }

    function YV(VV, eV) {
      if (VV === eV) return !0;
      if ("object" !== typeof VV || "object" !== typeof eV || null === VV || null === eV || Array.isArray(VV) !== Array.isArray(eV)) return !1;
      const xV = VV,
        JV = eV,
        UV = Object.keys(xV);
      return UV.length === Object.keys(JV).length && UV.every((VV => Object.prototype.hasOwnProperty.call(JV, VV) && YV(xV[VV], JV[VV])))
    }
    xV.d(eV, {
      d: () => JV
    })
  },
  5569: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => yV,
      h: () => pV
    });
    var JV = xV(2277),
      YV = xV(5576);
    let UV = null;

    function yV(VV) {
      UV = {
        pack: VV.metaData.id === JV.e ? null : VV
      }
    }

    function pV(VV) {
      return !(null === UV || !(0, YV.d)(UV.pack, VV)) && (UV = null, !0)
    }
  },
  5561: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => pV,
      d: () => yV,
      f: () => JV,
      j: () => bV,
      n: () => ZV,
      o: () => YV,
      p: () => UV,
      s: () => nV,
      t: () => wV,
      x: () => vV
    });
    const JV = 5;

    function YV(VV) {
      return VV === JV
    }

    function UV(VV) {
      return [...VV.features]
    }
    const yV = 262144,
      pV = 256,
      QV = 256;

    function nV(VV) {
      if ("object" !== typeof VV || null === VV || Array.isArray(VV)) return "The pack has no files.";
      const eV = [];
      for (const [xV, JV] of Object.entries(VV)) {
        if ("string" !== typeof JV) return `${xV} isn't text.`;
        eV.push({
          path: xV,
          source: JV
        })
      }
      return eV.sort(((VV, eV) => ZV(VV.path, eV.path))),
        function(VV) {
          if (0 === VV.length) return "The pack has no .wgsl files.";
          if (VV.length > pV) return `The pack has more than ${pV} .wgsl files.`;
          const eV = new Set;
          for (const {
              path: xV
            }
            of VV) {
            const VV = rV(xV);
            if (null !== VV) return VV;
            if (eV.has(xV)) return `The pack has two files at ${xV}.`;
            eV.add(xV)
          }
          return vV(VV) > yV ? `The pack's .wgsl files are over ${yV/1024} KB in total.` : null
        }(eV) ?? eV
    }

    function wV(VV) {
      const eV = {};
      for (const xV of VV) eV[xV.path] = xV.source;
      return eV
    }

    function ZV(VV, eV) {
      return VV < eV ? -1 : VV > eV ? 1 : 0
    }

    function vV(VV) {
      const eV = new TextEncoder;
      let xV = 0;
      for (const {
          source: JV
        }
        of VV) xV += eV.encode(JV).byteLength;
      return xV
    }

    function rV(VV) {
      if (!VV.toLowerCase().endsWith(".wgsl")) return `${VV} isn't a .wgsl file.`;
      if (VV.length > QV) return `A file path is over ${QV} characters.`;
      if (VV.includes("\\") || /[\u0000-\u001f]/.test(VV)) return `${VV} isn't a valid file path.`;
      return VV.split("/").some((VV => "" === VV || "." === VV || ".." === VV)) ? `${VV} isn't a valid file path.` : null
    }
    const kV = /^(.*)\[rot\[([1-4])$/;

    function bV(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const JV = new Map;
      eV.forEach(((VV, eV) => {
        let {
          numAnimStates: xV,
          animStartIdx: YV
        } = VV;
        for (let UV = 1; UV < xV; UV++) JV.set(YV + UV - 1, eV)
      }));
      const YV = Object.entries(VV),
        UV = new Map;
      for (const [bV, EV] of YV) {
        const VV = kV.exec(bV);
        "1" === VV?.[2] && UV.set(VV[1], EV + 1)
      }
      const yV = VV => {
          const eV = kV.exec(VV);
          return eV && UV.has(eV[1]) ? {
            root: eV[1],
            rotation: Number(eV[2]) - 1
          } : null
        },
        pV = new Set(YV.map((VV => {
          let [eV] = VV;
          return yV(eV)?.root ?? eV
        }))),
        QV = (VV, xV) => {
          const JV = VV.replace(/_?0$/, "");
          return (eV[xV]?.numAnimStates ?? 0) > 1 && !pV.has(JV) ? JV : VV
        },
        nV = new Map;
      for (const [kV, bV] of YV) nV.set(bV, QV(yV(kV)?.root ?? kV, bV));
      const wV = YV.reduce(((VV, eV) => {
          let [, xV] = eV;
          return Math.max(VV, xV + 1)
        }), 0),
        ZV = Array.from({
          length: wV
        }, ((VV, eV) => ({
          id: eV + 1,
          rotation: 0
        }))),
        vV = new Map,
        rV = new Map;
      for (const [kV, bV] of YV) {
        const VV = yV(kV),
          eV = JV.get(bV);
        if (void 0 !== eV) {
          const xV = nV.get(eV);
          rV.set(kV, {
            name: kV,
            texture: xV,
            kind: "frame"
          }), VV && !rV.has(VV.root) && rV.set(VV.root, {
            name: VV.root,
            texture: xV,
            kind: "frame"
          });
          continue
        }
        const xV = nV.get(bV),
          YV = VV?.root ?? kV;
        if (xV !== YV && rV.set(YV, {
            name: YV,
            texture: xV,
            kind: "frame"
          }), VV) {
          const eV = UV.get(VV.root);
          ZV[bV] = {
            id: eV,
            rotation: VV.rotation
          }, vV.set(xV, eV), rV.set(kV, {
            name: kV,
            texture: xV,
            kind: "rotation"
          })
        } else vV.set(xV, bV + 1)
      }
      for (const kV of vV.keys()) rV.delete(kV);
      for (const [kV, bV] of xV) {
        const VV = vV.get(bV);
        void 0 === VV || vV.has(kV) || (vV.set(kV, VV), rV.delete(kV))
      }
      return {
        named: [...vV].sort(((VV, eV) => {
          let [xV] = VV, [JV] = eV;
          return xV < JV ? -1 : xV > JV ? 1 : 0
        })).map((VV => {
          let [eV, xV] = VV;
          return {
            name: eV,
            id: xV
          }
        })),
        aliases: [...rV.values()],
        layers: ZV
      }
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);