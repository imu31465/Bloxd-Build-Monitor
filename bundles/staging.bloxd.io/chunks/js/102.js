export const id = 102;
export const ids = [102];
export const modules = {
  4861: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => CT
    });
    var lT = cT(1046),
      MT = cT.n(lT),
      KT = cT(1061),
      OT = cT(1348),
      yT = cT(3449),
      fT = cT(159),
      xT = cT(3491),
      IT = cT(3482),
      AT = cT(1099);

    function CT(TT) {
      let {
        game: kT
      } = TT;
      const cT = (0, fT.m)() ? "large" : "small",
        lT = (0, xT.i)(kT, cT),
        CT = (0, yT.f)(lT),
        jT = void 0 !== CT.blurhash;
      return (0, AT.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [CT.isLoading && !jT && (0, AT.jsx)(OT.d, {
          loaderType: "Secondary"
        }), !CT.failed && (null !== CT.src || jT) && (0, AT.jsx)("div", {
          className: MT()("SchematicImage", IT.g, {
            SchematicImageFadeIn: CT.fadeIn && !jT
          }),
          style: (0, IT.f)(CT),
          children: (0, AT.jsx)(IT.d, {
            image: CT
          })
        }), CT.failed && (0, AT.jsx)("div", {
          className: "SchematicImageError",
          children: (0, AT.jsx)(KT.e, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  4979: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => jT
    });
    var lT = cT(71),
      MT = cT(1046),
      KT = cT.n(MT),
      OT = cT(4909),
      yT = cT(1348),
      fT = cT(1195),
      xT = cT(3089),
      IT = cT(3226),
      AT = cT(1061),
      CT = cT(1099);

    function jT(TT) {
      let {
        folderName: kT,
        onTexturePackUpdated: MT,
        disabled: jT = !1,
        maxFileSizeMb: vT,
        packOwner: tT
      } = TT;
      const {
        t: hT
      } = (0, fT.B)(), [NT, QT] = (0, lT.useState)(!1), [ST, DT] = (0, lT.useState)(null), [aT, FT] = (0, lT.useState)(null), rT = (0, lT.useRef)(null);
      const {
        getRootProps: PT,
        getInputProps: wT,
        isDragActive: mT
      } = (0, OT.c)({
        onDrop: async function(TT) {
          QT(!0);
          try {
            const kT = await (0, xT.q)(TT);
            if ("customGame" === tT && (0, IT.i)(kT)) return void DT(hT(IT.b));
            if (void 0 !== vT) {
              const TT = JSON.stringify(kT).length / 1048576;
              if (TT > vT) return void DT(`File size is too large. Max size is ${vT}MB. Current size is ${TT}MB.`)
            }
            DT(null), FT(null), MT(kT), rT.current = kT,
              function(TT, kT) {
                const lT = TT.modelOverrides;
                lT && Promise.all([cT.e(195), cT.e(194)]).then((() => cT(9423))).then((cT => {
                  let {
                    packDisplayName: MT,
                    refusedPackModels: KT,
                    packModelSummary: OT
                  } = cT;
                  const yT = MT(TT.metaData);
                  kT(OT(yT, KT(yT, lT, !1)))
                })).catch((TT => {
                  console.error("Checking the texture pack's models failed:", TT)
                }))
              }(kT, (TT => {
                rT.current === kT && FT(TT)
              }))
          } catch {
            DT("Invalid Texture Pack Folder")
          } finally {
            QT(!1)
          }
        },
        useFsAccessApi: !1,
        disabled: jT
      });
      return (0, CT.jsxs)("div", {
        className: "CustomTexturePackContainer",
        children: [(0, CT.jsxs)("div", {
          className: "CustomTextureWarning",
          children: [hT("settingsMenu:customTextureWarning"), ".", (0, CT.jsx)("br", {}), hT("settingsMenu:viewDocumentation"), ":", " ", (0, CT.jsx)("a", {
            href: "https://github.com/Bloxdy/texturePacks",
            target: "_blank",
            rel: "noreferrer",
            children: "github.com/Bloxdy/texturePacks"
          })]
        }), ST && (0, CT.jsxs)("div", {
          className: "CustomTextureError",
          children: [hT("general:error"), ": ", ST]
        }), aT && (0, CT.jsx)("div", {
          className: "CustomTextureError",
          children: aT
        }), (0, CT.jsxs)("div", {
          ...PT({
            className: KT()("CustomTextureFolderUpload", {
              ActiveDrag: mT,
              Disabled: jT
            })
          }),
          children: [(0, CT.jsx)("input", {
            ...wT({
              webkitdirectory: "true"
            })
          }), NT && (0, CT.jsx)("div", {
            className: "CustomTextureFolderUploadLoading",
            children: (0, CT.jsx)(yT.d, {})
          }), !NT && !mT && kT && (0, CT.jsxs)(CT.Fragment, {
            children: [(0, CT.jsx)("div", {
              className: "CustomTextureFolderUploadIcon Active",
              children: (0, CT.jsx)(AT.e, {
                name: "folder-image"
              })
            }), (0, CT.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions Active",
              children: kT
            })]
          }), !NT && (mT || !kT) && (0, CT.jsxs)(CT.Fragment, {
            children: [(0, CT.jsx)("div", {
              className: "CustomTextureFolderUploadIcon",
              children: (0, CT.jsx)(AT.e, {
                name: "up-from-bracket"
              })
            }), (0, CT.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions",
              children: "Drag and drop a Texture Pack folder here"
            })]
          })]
        })]
      })
    }
  },
  4945: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => vT,
      h: () => ST,
      l: () => tT,
      m: () => QT
    });
    var lT = cT(71),
      MT = cT(4948),
      KT = cT(4355),
      OT = cT(1379),
      yT = cT(4968),
      fT = cT(1046),
      xT = cT.n(fT),
      IT = cT(1363),
      AT = cT(1741),
      CT = cT(4975),
      jT = cT(1099);

    function vT(TT) {
      let {
        label: kT,
        onClick: cT,
        checked: lT,
        circleInfoText: MT,
        className: yT,
        disabled: fT,
        note: IT
      } = TT;
      return (0, jT.jsxs)("div", {
        "aria-disabled": fT || void 0,
        "data-pad-focusable": !0,
        className: xT()("SettingBox CheckboxContainer", {
          [yT]: yT,
          SettingBoxDisabled: fT
        }),
        onClick: () => {
          fT || cT(!lT)
        },
        children: [(0, jT.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, jT.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, jT.jsx)(KT.d, {
              className: "SettingsCheckbox",
              checked: lT,
              disabled: fT,
              onChange: () => {}
            })
          }), (0, jT.jsxs)("div", {
            className: "CheckboxText",
            children: [kT, MT && (0, jT.jsx)("span", {
              onClick: TT => TT.stopPropagation(),
              children: (0, jT.jsx)(OT.b, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: MT
              })
            })]
          })]
        }), IT && (0, jT.jsx)("div", {
          className: "SettingNote",
          children: IT
        })]
      })
    }

    function tT(TT) {
      let {
        name: kT,
        onChange: cT,
        min: MT,
        max: KT,
        step: yT,
        initValue: fT,
        circleInfoText: IT,
        format: AT,
        className: CT,
        padStep: vT,
        disabled: tT = !1,
        selectableMax: hT,
        cappedNote: QT,
        onChangeComplete: ST
      } = TT;
      const [DT, aT] = (0, lT.useState)(fT), FT = (0, lT.useRef)(fT);
      (0, lT.useEffect)((() => {
        FT.current = fT, aT(fT)
      }), [fT]);
      const rT = void 0 !== hT && hT < KT,
        PT = rT ? {
          "--slider-selectable": (hT - MT) / (KT - MT)
        } : void 0;
      return (0, jT.jsxs)("div", {
        className: xT()("SettingBox SettingsSliderDiv", {
          [CT]: CT,
          SettingBoxDisabled: tT,
          SliderCapped: rT
        }),
        style: PT,
        children: [(0, jT.jsxs)("div", {
          className: "SliderText",
          children: [`${kT}: ${AT?AT(DT):DT}`, IT && (0, jT.jsx)(OT.b, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: IT
          })]
        }), (0, jT.jsx)("div", {
          className: "SliderDiv",
          children: (0, jT.jsx)(NT, {
            value: DT,
            min: MT,
            max: KT,
            step: yT,
            onChange: TT => {
              if (rT && TT >= hT && DT === hT) return;
              const kT = rT ? Math.min(TT, hT) : TT;
              FT.current = kT, aT(kT), cT(kT)
            },
            onChangeComplete: ST && (() => {
              ST(FT.current)
            }),
            format: AT,
            padStep: vT,
            disabled: tT
          })
        }), rT && QT && (0, jT.jsx)("div", {
          className: "SettingNote",
          children: QT
        })]
      })
    }
    const hT = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function NT(TT) {
      var kT;
      let {
        value: cT,
        min: KT,
        max: OT,
        step: yT,
        onChange: fT,
        orientation: xT,
        reverse: IT,
        setIsChanging: AT,
        tooltip: vT,
        labels: tT,
        handleLabel: NT,
        format: QT,
        onChangeStart: ST,
        onChangeComplete: DT,
        padStep: aT,
        disabled: FT = !1
      } = TT;
      const rT = (0, lT.useRef)(null),
        PT = (0, lT.useRef)(null);
      (0, lT.useLayoutEffect)((() => {
        var TT, kT, cT;
        const lT = null !== (TT = null === (kT = rT.current) || void 0 === kT ? void 0 : kT.querySelector(".rangeslider")) && void 0 !== TT ? TT : null;
        null === lT || void 0 === lT || lT.setAttribute("data-pad-slider", ""), null === lT || void 0 === lT || lT.setAttribute("data-pad-focusable", ""), null === lT || void 0 === lT || null === (cT = lT.querySelector(".rangeslider__handle")) || void 0 === cT || cT.setAttribute("data-pad-slider-handle", ""), PT.current = lT
      }), []), (0, lT.useLayoutEffect)((() => {
        var TT, kT;
        FT ? null === (TT = PT.current) || void 0 === TT || TT.setAttribute("aria-disabled", "true") : null === (kT = PT.current) || void 0 === kT || kT.removeAttribute("aria-disabled")
      }), [FT]);
      const wT = (null !== (kT = String(yT).split(".")[1]) && void 0 !== kT ? kT : "").length,
        mT = TT => {
          const kT = Number((Math.round((TT - KT) / yT) * yT + KT).toFixed(wT));
          return Math.min(OT, Math.max(KT, kT))
        },
        bT = (0, lT.useRef)(DT);
      bT.current = DT, (0, lT.useEffect)((() => {
        const TT = rT.current;
        if (!TT) return;
        const kT = TT => {
          var kT;
          hT.has(TT.key) && (null === (kT = bT.current) || void 0 === kT || kT.call(bT))
        };
        return TT.addEventListener("keyup", kT), () => {
          TT.removeEventListener("keyup", kT)
        }
      }), []);
      const zT = (0, lT.useRef)(!1);
      return (0, CT.d)(PT, {
        adjust: TT => {
          if (FT) return;
          const kT = null !== aT && void 0 !== aT ? aT : Math.max(yT, Math.round((OT - KT) / 20 / yT) * yT),
            lT = mT(cT + TT * kT * (IT ? -1 : 1));
          lT !== cT && (null === ST || void 0 === ST || ST(), fT(lT), null === DT || void 0 === DT || DT())
        },
        setFraction: TT => {
          if (FT) return;
          const kT = mT(KT + (IT ? 1 - TT : TT) * (OT - KT));
          kT !== cT && (zT.current || (zT.current = !0, null === ST || void 0 === ST || ST()), fT(kT))
        },
        endDrag: () => {
          zT.current && (zT.current = !1, null === DT || void 0 === DT || DT())
        }
      }), (0, jT.jsx)("div", {
        ref: rT,
        style: {
          display: "contents"
        },
        children: (0, jT.jsx)(MT.b, {
          value: cT,
          min: KT,
          max: OT,
          step: yT,
          onChange: fT,
          orientation: xT,
          reverse: IT,
          tooltip: vT,
          labels: tT,
          handleLabel: NT,
          format: QT,
          onChangeStart: () => {
            null === ST || void 0 === ST || ST(), null === AT || void 0 === AT || AT(!0)
          },
          onChangeComplete: () => {
            null === AT || void 0 === AT || AT(!1), null === DT || void 0 === DT || DT()
          }
        })
      })
    }
    async function QT() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      const kT = IT.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: "",
        unlockPointerKey: TT
      });
      !0 === await kT.getResult() && (0, AT.reloadBloxd)()
    }

    function ST(TT) {
      let {
        label: kT,
        options: cT,
        value: lT,
        onChange: MT,
        circleInfoText: KT
      } = TT;
      return (0, jT.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, jT.jsxs)("div", {
          className: "SliderText",
          children: [kT, KT && (0, jT.jsx)(OT.b, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: KT
          })]
        }), (0, jT.jsx)(yT.d, {
          ariaLabel: kT,
          options: cT,
          value: lT,
          onChange: MT
        })]
      })
    }
  },
  4943: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => NT,
      f: () => QT
    });
    var lT = cT(3089),
      MT = cT(3092),
      KT = cT(71),
      OT = cT(1046),
      yT = cT.n(OT),
      fT = cT(1348),
      xT = cT(3081),
      IT = cT(1363),
      AT = cT(4945),
      CT = cT(4979),
      jT = cT(636),
      vT = cT(4988),
      tT = cT(1099);

    function hT() {
      (0, AT.m)("texturePackPickReload")
    }

    function NT(TT) {
      var kT;
      let {
        setApplySettingsCallback: cT
      } = TT;
      const [, OT] = (0, KT.useReducer)((TT => TT + 1), 0), yT = (0, KT.useRef)(!1), fT = (0, KT.useRef)(null);

      function NT(TT, kT) {
        xT.e.setFromJson(TT, "player");
        const lT = xT.e.saveTexturePack();
        if (jT.x) {
          const TT = xT.e.toJson();
          lT.then((kT => {
            kT && (0, vT.f)(TT, hT)
          }))
        } else yT.current ||= kT, fT.current !== xT.e.getId() || xT.e.getId() === MT.r.CUSTOM && yT.current ? cT((() => AT.m)) : cT(null);
        OT()
      }
      async function ST(TT) {
        if (xT.e.getId() !== TT.metaData.id) {
          if (xT.e.getId() === MT.r.CUSTOM && xT.e.getFromFolderName()) {
            const TT = IT.NotificationProvider.showPromptPopup({
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
          NT(TT, !1)
        }
      }(0, KT.useEffect)((() => {
        fT.current = xT.e.getId()
      }), []);
      const DT = lT.c,
        aT = [DT, ...Object.values(MT.r).filter((TT => TT !== DT))];
      return (0, tT.jsx)(tT.Fragment, {
        children: (0, tT.jsxs)("div", {
          className: "TexturePackCategory SettingsMenuRightInner",
          children: [(0, tT.jsx)("div", {
            className: "TexturePackList",
            children: aT.map((TT => (0, tT.jsx)(QT, {
              id: TT,
              isSelected: TT === xT.e.getId(),
              setSelected: ST
            }, TT)))
          }), xT.e.getId() === MT.r.CUSTOM && (0, tT.jsx)(CT.e, {
            folderName: null !== (kT = xT.e.getFromFolderName()) && void 0 !== kT ? kT : null,
            onTexturePackUpdated: function(TT) {
              NT(TT, !0)
            },
            packOwner: "player"
          })]
        })
      })
    }

    function QT(TT) {
      let {
        id: kT,
        isSelected: cT,
        setSelected: OT,
        disabled: xT = !1
      } = TT;
      const [IT, AT] = (0, KT.useState)(!0), [CT, jT] = (0, KT.useState)(""), [vT, hT] = (0, KT.useState)(""), [NT, QT] = (0, KT.useState)(""), ST = (0, KT.useRef)({});
      return (0, KT.useEffect)((() => {
        (0, lT.m)(kT).then((TT => {
          var kT;
          TT && (ST.current = TT, AT(!1), jT(ST.current.metaData.name), hT(ST.current.metaData.author), QT(null !== (kT = ST.current.metaData.previewImage) && void 0 !== kT ? kT : ""))
        })).catch((TT => {
          console.warn(`Failed to fetch texture pack ${kT}`, TT)
        }))
      }), [kT]), (0, tT.jsxs)("div", {
        "data-pad-focusable": !0,
        "aria-disabled": xT || void 0,
        className: yT()("TexturePack", {
          Selected: cT,
          Custom: kT === MT.r.CUSTOM,
          Disabled: xT
        }),
        onClick: () => {
          IT || xT || OT(ST.current)
        },
        children: [(0, tT.jsx)("div", {
          className: "TexturePackBg",
          style: {
            backgroundImage: NT ? `url(${NT})` : void 0
          }
        }), IT && (0, tT.jsx)("div", {
          className: "TexturePackName",
          children: (0, tT.jsx)(fT.d, {})
        }), !IT && CT && (0, tT.jsx)("div", {
          className: "TexturePackName",
          children: CT
        }), !IT && vT && (0, tT.jsx)("div", {
          className: "TexturePackAuthor",
          children: vT
        })]
      })
    }
  },
  4968: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => OT
    });
    var lT = cT(1046),
      MT = cT.n(lT),
      KT = cT(1099);

    function OT(TT) {
      let {
        options: kT,
        value: cT,
        onChange: lT,
        ariaLabel: OT,
        className: yT,
        reselectable: fT = !1,
        keepsFocus: xT = !1,
        padTabs: IT
      } = TT;
      const AT = void 0 !== IT;
      return (0, KT.jsx)("div", {
        className: MT()("SegmentedToggle", yT),
        role: "group",
        "aria-label": OT,
        "data-pad-tabs": IT,
        children: kT.map((TT => {
          const kT = TT.value === cT;
          return (0, KT.jsx)("button", {
            type: "button",
            "aria-pressed": kT,
            "data-pad-tab": AT || void 0,
            "data-pad-selected": AT && kT ? "true" : void 0,
            "data-pad-default-focus": AT && kT || void 0,
            "aria-label": TT.ariaLabel,
            title: TT.ariaLabel,
            className: MT()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: kT
            }),
            onMouseDown: xT ? TT => {
              TT.preventDefault()
            } : void 0,
            onClick: () => {
              kT && !fT || lT(TT.value)
            },
            children: TT.label
          }, TT.value)
        }))
      })
    }
  },
  4975: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => KT,
      d: () => OT
    });
    var lT = cT(71);
    const MT = new WeakMap,
      KT = TT => {
        var kT;
        const cT = TT.closest("[data-pad-slider]");
        return cT && null !== (kT = MT.get(cT)) && void 0 !== kT ? kT : null
      },
      OT = (TT, kT) => {
        const cT = (0, lT.useRef)(kT);
        cT.current = kT, (0, lT.useEffect)((() => {
          if (TT.current) return ((TT, kT) => (MT.set(TT, kT), () => {
            MT.get(TT) === kT && MT.delete(TT)
          }))(TT.current, {
            adjust: TT => {
              cT.current.adjust(TT)
            },
            setFraction: TT => {
              cT.current.setFraction(TT)
            },
            endDrag: () => {
              cT.current.endDrag()
            }
          })
        }), [TT])
      }
  },
  4988: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => yT,
      f: () => OT
    });
    var lT = cT(3092),
      MT = cT(4991);
    let KT = null;

    function OT(TT, kT) {
      KT = {
        pack: TT.metaData.id === lT.d ? null : TT,
        prompt: kT
      }
    }

    function yT(TT, kT) {
      const cT = KT;
      null !== cT && (0, MT.d)(cT.pack, TT) && (KT = null, kT && cT.prompt())
    }
  },
  4991: (TT, kT, cT) => {
    function lT(TT, kT) {
      return MT(TT, kT)
    }

    function MT(TT, kT) {
      if (TT === kT) return !0;
      if ("object" !== typeof TT || "object" !== typeof kT || null === TT || null === kT || Array.isArray(TT) !== Array.isArray(kT)) return !1;
      const cT = TT,
        lT = kT,
        KT = Object.keys(cT);
      return KT.length === Object.keys(lT).length && KT.every((TT => Object.prototype.hasOwnProperty.call(lT, TT) && MT(cT[TT], lT[TT])))
    }
    cT.d(kT, {
      d: () => lT
    })
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);