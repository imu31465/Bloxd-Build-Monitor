export const id = 101;
export const ids = [101];
export const modules = {
  4569: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => jU
    });
    var tU = gU(1037),
      pU = gU.n(tU),
      EU = gU(1049),
      PU = gU(1326),
      TU = gU(3194),
      qU = gU(135),
      KU = gU(3232),
      cU = gU(3223),
      GU = gU(1090);

    function jU(UU) {
      let {
        game: RU
      } = UU;
      const gU = (0, qU.l)() ? "large" : "small",
        tU = (0, KU.f)(RU, gU),
        jU = (0, TU.h)(tU),
        uU = void 0 !== jU.blurhash;
      return (0, GU.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [jU.isLoading && !uU && (0, GU.jsx)(PU.d, {
          loaderType: "Secondary"
        }), !jU.failed && (null !== jU.src || uU) && (0, GU.jsx)("div", {
          className: pU()("SchematicImage", cU.h, {
            SchematicImageFadeIn: jU.fadeIn && !uU
          }),
          style: (0, cU.e)(jU),
          children: (0, GU.jsx)(cU.c, {
            image: jU
          })
        }), jU.failed && (0, GU.jsx)("div", {
          className: "SchematicImageError",
          children: (0, GU.jsx)(EU.c, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  4706: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => uU
    });
    var tU = gU(56),
      pU = gU(1037),
      EU = gU.n(pU),
      PU = gU(4623),
      TU = gU(1326),
      qU = gU(1181),
      KU = gU(2842),
      cU = gU(2977),
      GU = gU(1049),
      jU = gU(1090);

    function uU(UU) {
      let {
        folderName: RU,
        onTexturePackUpdated: pU,
        disabled: uU = !1,
        maxFileSizeMb: CU,
        packOwner: hU
      } = UU;
      const {
        t: QU
      } = (0, qU.B)(), [eU, WU] = (0, tU.useState)(!1), [fU, xU] = (0, tU.useState)(null), [mU, IU] = (0, tU.useState)(null), JU = (0, tU.useRef)(null);
      const {
        getRootProps: wU,
        getInputProps: nU,
        isDragActive: bU
      } = (0, PU.e)({
        onDrop: async function(UU) {
          WU(!0);
          try {
            const RU = await (0, KU.p)(UU);
            if ("customGame" === hU && (0, cU.j)(RU)) return void xU(QU(cU.d));
            if (void 0 !== CU) {
              const UU = JSON.stringify(RU).length / 1048576;
              if (UU > CU) return void xU(`File size is too large. Max size is ${CU}MB. Current size is ${UU}MB.`)
            }
            xU(null), IU(null), pU(RU), JU.current = RU,
              function(UU, RU) {
                const tU = UU.modelOverrides;
                tU && Promise.all([gU.e(195), gU.e(194)]).then((() => gU(9057))).then((gU => {
                  let {
                    packDisplayName: pU,
                    refusedPackModels: EU,
                    packModelSummary: PU
                  } = gU;
                  const TU = pU(UU.metaData);
                  RU(PU(TU, EU(TU, tU, !1)))
                })).catch((UU => {
                  console.error("Checking the texture pack's models failed:", UU)
                }))
              }(RU, (UU => {
                JU.current === RU && IU(UU)
              }))
          } catch {
            xU("Invalid Texture Pack Folder")
          } finally {
            WU(!1)
          }
        },
        useFsAccessApi: !1,
        disabled: uU
      });
      return (0, jU.jsxs)("div", {
        className: "CustomTexturePackContainer",
        children: [(0, jU.jsxs)("div", {
          className: "CustomTextureWarning",
          children: [QU("settingsMenu:customTextureWarning"), ".", (0, jU.jsx)("br", {}), QU("settingsMenu:viewDocumentation"), ":", " ", (0, jU.jsx)("a", {
            href: "https://github.com/Bloxdy/texturePacks",
            target: "_blank",
            rel: "noreferrer",
            children: "github.com/Bloxdy/texturePacks"
          })]
        }), fU && (0, jU.jsxs)("div", {
          className: "CustomTextureError",
          children: [QU("general:error"), ": ", fU]
        }), mU && (0, jU.jsx)("div", {
          className: "CustomTextureError",
          children: mU
        }), (0, jU.jsxs)("div", {
          ...wU({
            className: EU()("CustomTextureFolderUpload", {
              ActiveDrag: bU,
              Disabled: uU
            })
          }),
          children: [(0, jU.jsx)("input", {
            ...nU({
              webkitdirectory: "true"
            })
          }), eU && (0, jU.jsx)("div", {
            className: "CustomTextureFolderUploadLoading",
            children: (0, jU.jsx)(TU.d, {})
          }), !eU && !bU && RU && (0, jU.jsxs)(jU.Fragment, {
            children: [(0, jU.jsx)("div", {
              className: "CustomTextureFolderUploadIcon Active",
              children: (0, jU.jsx)(GU.c, {
                name: "folder-image"
              })
            }), (0, jU.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions Active",
              children: RU
            })]
          }), !eU && (bU || !RU) && (0, jU.jsxs)(jU.Fragment, {
            children: [(0, jU.jsx)("div", {
              className: "CustomTextureFolderUploadIcon",
              children: (0, jU.jsx)(GU.c, {
                name: "up-from-bracket"
              })
            }), (0, jU.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions",
              children: "Drag and drop a Texture Pack folder here"
            })]
          })]
        })]
      })
    }
  },
  4670: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => CU,
      d: () => fU,
      h: () => hU,
      l: () => WU
    });
    var tU = gU(56),
      pU = gU(4679),
      EU = gU(4040),
      PU = gU(1344),
      TU = gU(4693),
      qU = gU(1037),
      KU = gU.n(qU),
      cU = gU(1333),
      GU = gU(1637),
      jU = gU(4701),
      uU = gU(1090);

    function CU(UU) {
      let {
        label: RU,
        onClick: gU,
        checked: tU,
        circleInfoText: pU,
        className: TU,
        disabled: qU,
        note: cU
      } = UU;
      return (0, uU.jsxs)("div", {
        "aria-disabled": qU || void 0,
        "data-pad-focusable": !0,
        className: KU()("SettingBox CheckboxContainer", {
          [TU]: TU,
          SettingBoxDisabled: qU
        }),
        onClick: () => {
          qU || gU(!tU)
        },
        children: [(0, uU.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, uU.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, uU.jsx)(EU.d, {
              className: "SettingsCheckbox",
              checked: tU,
              disabled: qU,
              onChange: () => {}
            })
          }), (0, uU.jsxs)("div", {
            className: "CheckboxText",
            children: [RU, pU && (0, uU.jsx)("span", {
              onClick: UU => UU.stopPropagation(),
              children: (0, uU.jsx)(PU.d, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: pU
              })
            })]
          })]
        }), cU && (0, uU.jsx)("div", {
          className: "SettingNote",
          children: cU
        })]
      })
    }

    function hU(UU) {
      let {
        name: RU,
        onChange: gU,
        min: pU,
        max: EU,
        step: TU,
        initValue: qU,
        circleInfoText: cU,
        format: GU,
        className: jU,
        padStep: CU,
        disabled: hU = !1,
        selectableMax: QU,
        cappedNote: WU,
        onChangeComplete: fU
      } = UU;
      const [xU, mU] = (0, tU.useState)(qU), IU = (0, tU.useRef)(qU);
      (0, tU.useEffect)((() => {
        IU.current = qU, mU(qU)
      }), [qU]);
      const JU = void 0 !== QU && QU < EU,
        wU = JU ? {
          "--slider-selectable": (QU - pU) / (EU - pU)
        } : void 0;
      return (0, uU.jsxs)("div", {
        className: KU()("SettingBox SettingsSliderDiv", {
          [jU]: jU,
          SettingBoxDisabled: hU,
          SliderCapped: JU
        }),
        style: wU,
        children: [(0, uU.jsxs)("div", {
          className: "SliderText",
          children: [`${RU}: ${GU?GU(xU):xU}`, cU && (0, uU.jsx)(PU.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: cU
          })]
        }), (0, uU.jsx)("div", {
          className: "SliderDiv",
          children: (0, uU.jsx)(eU, {
            value: xU,
            min: pU,
            max: EU,
            step: TU,
            onChange: UU => {
              if (JU && UU >= QU && xU === QU) return;
              const RU = JU ? Math.min(UU, QU) : UU;
              IU.current = RU, mU(RU), gU(RU)
            },
            onChangeComplete: fU && (() => {
              fU(IU.current)
            }),
            format: GU,
            padStep: CU,
            disabled: hU
          })
        }), JU && WU && (0, uU.jsx)("div", {
          className: "SettingNote",
          children: WU
        })]
      })
    }
    const QU = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function eU(UU) {
      var RU;
      let {
        value: gU,
        min: EU,
        max: PU,
        step: TU,
        onChange: qU,
        orientation: KU,
        reverse: cU,
        setIsChanging: GU,
        tooltip: CU,
        labels: hU,
        handleLabel: eU,
        format: WU,
        onChangeStart: fU,
        onChangeComplete: xU,
        padStep: mU,
        disabled: IU = !1
      } = UU;
      const JU = (0, tU.useRef)(null),
        wU = (0, tU.useRef)(null);
      (0, tU.useLayoutEffect)((() => {
        var UU, RU, gU;
        const tU = null !== (UU = null === (RU = JU.current) || void 0 === RU ? void 0 : RU.querySelector(".rangeslider")) && void 0 !== UU ? UU : null;
        null === tU || void 0 === tU || tU.setAttribute("data-pad-slider", ""), null === tU || void 0 === tU || tU.setAttribute("data-pad-focusable", ""), null === tU || void 0 === tU || null === (gU = tU.querySelector(".rangeslider__handle")) || void 0 === gU || gU.setAttribute("data-pad-slider-handle", ""), wU.current = tU
      }), []), (0, tU.useLayoutEffect)((() => {
        var UU, RU;
        IU ? null === (UU = wU.current) || void 0 === UU || UU.setAttribute("aria-disabled", "true") : null === (RU = wU.current) || void 0 === RU || RU.removeAttribute("aria-disabled")
      }), [IU]);
      const nU = (null !== (RU = String(TU).split(".")[1]) && void 0 !== RU ? RU : "").length,
        bU = UU => {
          const RU = Number((Math.round((UU - EU) / TU) * TU + EU).toFixed(nU));
          return Math.min(PU, Math.max(EU, RU))
        },
        oU = (0, tU.useRef)(xU);
      oU.current = xU, (0, tU.useEffect)((() => {
        const UU = JU.current;
        if (!UU) return;
        const RU = UU => {
          var RU;
          QU.has(UU.key) && (null === (RU = oU.current) || void 0 === RU || RU.call(oU))
        };
        return UU.addEventListener("keyup", RU), () => {
          UU.removeEventListener("keyup", RU)
        }
      }), []);
      const ZU = (0, tU.useRef)(!1);
      return (0, jU.e)(wU, {
        adjust: UU => {
          if (IU) return;
          const RU = null !== mU && void 0 !== mU ? mU : Math.max(TU, Math.round((PU - EU) / 20 / TU) * TU),
            tU = bU(gU + UU * RU * (cU ? -1 : 1));
          tU !== gU && (null === fU || void 0 === fU || fU(), qU(tU), null === xU || void 0 === xU || xU())
        },
        setFraction: UU => {
          if (IU) return;
          const RU = bU(EU + (cU ? 1 - UU : UU) * (PU - EU));
          RU !== gU && (ZU.current || (ZU.current = !0, null === fU || void 0 === fU || fU()), qU(RU))
        },
        endDrag: () => {
          ZU.current && (ZU.current = !1, null === xU || void 0 === xU || xU())
        }
      }), (0, uU.jsx)("div", {
        ref: JU,
        style: {
          display: "contents"
        },
        children: (0, uU.jsx)(pU.d, {
          value: gU,
          min: EU,
          max: PU,
          step: TU,
          onChange: qU,
          orientation: KU,
          reverse: cU,
          tooltip: CU,
          labels: hU,
          handleLabel: eU,
          format: WU,
          onChangeStart: () => {
            null === fU || void 0 === fU || fU(), null === GU || void 0 === GU || GU(!0)
          },
          onChangeComplete: () => {
            null === GU || void 0 === GU || GU(!1), null === xU || void 0 === xU || xU()
          }
        })
      })
    }
    async function WU() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      const RU = cU.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: "",
        unlockPointerKey: UU
      });
      !0 === await RU.getResult() && (0, GU.reloadBloxd)()
    }

    function fU(UU) {
      let {
        label: RU,
        options: gU,
        value: tU,
        onChange: pU,
        circleInfoText: EU
      } = UU;
      return (0, uU.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, uU.jsxs)("div", {
          className: "SliderText",
          children: [RU, EU && (0, uU.jsx)(PU.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: EU
          })]
        }), (0, uU.jsx)(TU.d, {
          ariaLabel: RU,
          options: gU,
          value: tU,
          onChange: pU
        })]
      })
    }
  },
  4663: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => eU,
      h: () => WU
    });
    var tU = gU(2842),
      pU = gU(2850),
      EU = gU(56),
      PU = gU(1037),
      TU = gU.n(PU),
      qU = gU(1326),
      KU = gU(2840),
      cU = gU(1333),
      GU = gU(4670),
      jU = gU(4706),
      uU = gU(603),
      CU = gU(4711),
      hU = gU(1090);

    function QU() {
      (0, GU.l)("texturePackPickReload")
    }

    function eU(UU) {
      var RU;
      let {
        setApplySettingsCallback: gU
      } = UU;
      const [, PU] = (0, EU.useReducer)((UU => UU + 1), 0), TU = (0, EU.useRef)(!1), qU = (0, EU.useRef)(null);

      function eU(UU, RU) {
        KU.e.setFromJson(UU, "player");
        const tU = KU.e.saveTexturePack();
        if (uU.u) {
          const UU = KU.e.toJson();
          tU.then((RU => {
            RU && (0, CU.h)(UU, QU)
          }))
        } else TU.current ||= RU, qU.current !== KU.e.getId() || KU.e.getId() === pU.s.CUSTOM && TU.current ? gU((() => GU.l)) : gU(null);
        PU()
      }
      async function fU(UU) {
        if (KU.e.getId() !== UU.metaData.id) {
          if (KU.e.getId() === pU.s.CUSTOM && KU.e.getFromFolderName()) {
            const UU = cU.NotificationProvider.showPromptPopup({
              title: "settingsMenu:loseChangesTitle",
              subtitle: "settingsMenu:loseChangesSubtitle",
              confirmText: "general:continue",
              destructive: !0,
              confirmTooltip: "",
              cancelText: "general:cancel",
              cancelTooltip: ""
            });
            if (!0 !== await UU.getResult()) return
          }
          eU(UU, !1)
        }
      }(0, EU.useEffect)((() => {
        qU.current = KU.e.getId()
      }), []);
      const xU = tU.d,
        mU = [xU, ...Object.values(pU.s).filter((UU => UU !== xU))];
      return (0, hU.jsx)(hU.Fragment, {
        children: (0, hU.jsxs)("div", {
          className: "TexturePackCategory SettingsMenuRightInner",
          children: [(0, hU.jsx)("div", {
            className: "TexturePackList",
            children: mU.map((UU => (0, hU.jsx)(WU, {
              id: UU,
              isSelected: UU === KU.e.getId(),
              setSelected: fU
            }, UU)))
          }), KU.e.getId() === pU.s.CUSTOM && (0, hU.jsx)(jU.d, {
            folderName: null !== (RU = KU.e.getFromFolderName()) && void 0 !== RU ? RU : null,
            onTexturePackUpdated: function(UU) {
              eU(UU, !0)
            },
            packOwner: "player"
          })]
        })
      })
    }

    function WU(UU) {
      let {
        id: RU,
        isSelected: gU,
        setSelected: PU,
        disabled: KU = !1
      } = UU;
      const [cU, GU] = (0, EU.useState)(!0), [jU, uU] = (0, EU.useState)(""), [CU, QU] = (0, EU.useState)(""), [eU, WU] = (0, EU.useState)(""), fU = (0, EU.useRef)({});
      return (0, EU.useEffect)((() => {
        (0, tU.n)(RU).then((UU => {
          var RU;
          UU && (fU.current = UU, GU(!1), uU(fU.current.metaData.name), QU(fU.current.metaData.author), WU(null !== (RU = fU.current.metaData.previewImage) && void 0 !== RU ? RU : ""))
        })).catch((UU => {
          console.warn(`Failed to fetch texture pack ${RU}`, UU)
        }))
      }), [RU]), (0, hU.jsxs)("div", {
        "data-pad-focusable": !0,
        "aria-disabled": KU || void 0,
        className: TU()("TexturePack", {
          Selected: gU,
          Custom: RU === pU.s.CUSTOM,
          Disabled: KU
        }),
        onClick: () => {
          cU || KU || PU(fU.current)
        },
        children: [(0, hU.jsx)("div", {
          className: "TexturePackBg",
          style: {
            backgroundImage: eU ? `url(${eU})` : void 0
          }
        }), cU && (0, hU.jsx)("div", {
          className: "TexturePackName",
          children: (0, hU.jsx)(qU.d, {})
        }), !cU && jU && (0, hU.jsx)("div", {
          className: "TexturePackName",
          children: jU
        }), !cU && CU && (0, hU.jsx)("div", {
          className: "TexturePackAuthor",
          children: CU
        })]
      })
    }
  },
  4693: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => PU
    });
    var tU = gU(1037),
      pU = gU.n(tU),
      EU = gU(1090);

    function PU(UU) {
      let {
        options: RU,
        value: gU,
        onChange: tU,
        ariaLabel: PU,
        className: TU,
        reselectable: qU = !1,
        keepsFocus: KU = !1
      } = UU;
      return (0, EU.jsx)("div", {
        className: pU()("SegmentedToggle", TU),
        role: "group",
        "aria-label": PU,
        children: RU.map((UU => {
          const RU = UU.value === gU;
          return (0, EU.jsx)("button", {
            type: "button",
            "aria-pressed": RU,
            "aria-label": UU.ariaLabel,
            title: UU.ariaLabel,
            className: pU()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: RU
            }),
            onMouseDown: KU ? UU => {
              UU.preventDefault()
            } : void 0,
            onClick: () => {
              RU && !qU || tU(UU.value)
            },
            children: UU.label
          }, UU.value)
        }))
      })
    }
  },
  4701: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => EU,
      e: () => PU
    });
    var tU = gU(56);
    const pU = new WeakMap,
      EU = UU => {
        var RU;
        const gU = UU.closest("[data-pad-slider]");
        return gU && null !== (RU = pU.get(gU)) && void 0 !== RU ? RU : null
      },
      PU = (UU, RU) => {
        const gU = (0, tU.useRef)(RU);
        gU.current = RU, (0, tU.useEffect)((() => {
          if (UU.current) return ((UU, RU) => (pU.set(UU, RU), () => {
            pU.get(UU) === RU && pU.delete(UU)
          }))(UU.current, {
            adjust: UU => {
              gU.current.adjust(UU)
            },
            setFraction: UU => {
              gU.current.setFraction(UU)
            },
            endDrag: () => {
              gU.current.endDrag()
            }
          })
        }), [UU])
      }
  },
  4711: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => TU,
      h: () => PU
    });
    var tU = gU(2850),
      pU = gU(4717);
    let EU = null;

    function PU(UU, RU) {
      EU = {
        pack: UU.metaData.id === tU.d ? null : UU,
        prompt: RU
      }
    }

    function TU(UU, RU) {
      const gU = EU;
      null !== gU && (0, pU.b)(gU.pack, UU) && (EU = null, RU && gU.prompt())
    }
  },
  4717: (UU, RU, gU) => {
    function tU(UU, RU) {
      return pU(UU, RU)
    }

    function pU(UU, RU) {
      if (UU === RU) return !0;
      if ("object" !== typeof UU || "object" !== typeof RU || null === UU || null === RU || Array.isArray(UU) !== Array.isArray(RU)) return !1;
      const gU = UU,
        tU = RU,
        EU = Object.keys(gU);
      return EU.length === Object.keys(tU).length && EU.every((UU => Object.prototype.hasOwnProperty.call(tU, UU) && pU(gU[UU], tU[UU])))
    }
    gU.d(RU, {
      b: () => tU
    })
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);