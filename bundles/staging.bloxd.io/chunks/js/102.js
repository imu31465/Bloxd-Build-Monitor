export const id = 102;
export const ids = [102];
export const modules = {
  4398: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => LT
    });
    var iT = IT(1042),
      zT = IT.n(iT),
      kT = IT(1055),
      WT = IT(1310),
      XT = IT(3061),
      BT = IT(139),
      FT = IT(3105),
      ST = IT(3091),
      DT = IT(1083);

    function LT(TT) {
      let {
        game: oT
      } = TT;
      const IT = (0, BT.j)() ? "large" : "small",
        iT = (0, FT.g)(oT, IT),
        LT = (0, XT.g)(iT),
        xT = void 0 !== LT.blurhash;
      return (0, DT.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [LT.isLoading && !xT && (0, DT.jsx)(WT.d, {
          loaderType: "Secondary"
        }), !LT.failed && (null !== LT.src || xT) && (0, DT.jsx)("div", {
          className: zT()("SchematicImage", ST.g, {
            SchematicImageFadeIn: LT.fadeIn && !xT
          }),
          style: (0, ST.e)(LT),
          children: (0, DT.jsx)(ST.d, {
            image: LT
          })
        }), LT.failed && (0, DT.jsx)("div", {
          className: "SchematicImageError",
          children: (0, DT.jsx)(kT.e, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  4517: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => xT
    });
    var iT = IT(46),
      zT = IT(1042),
      kT = IT.n(zT),
      WT = IT(4439),
      XT = IT(1310),
      BT = IT(1171),
      FT = IT(2713),
      ST = IT(2851),
      DT = IT(1055),
      LT = IT(1083);

    function xT(TT) {
      let {
        folderName: oT,
        onTexturePackUpdated: zT,
        disabled: xT = !1,
        maxFileSizeMb: cT,
        packOwner: KT
      } = TT;
      const {
        t: MT
      } = (0, BT.t)(), [rT, AT] = (0, iT.useState)(!1), [gT, hT] = (0, iT.useState)(null), [wT, mT] = (0, iT.useState)(null), eT = (0, iT.useRef)(null);
      const {
        getRootProps: RT,
        getInputProps: uT,
        isDragActive: vT
      } = (0, WT.e)({
        onDrop: async function(TT) {
          AT(!0);
          try {
            const oT = await (0, FT.r)(TT);
            if ("customGame" === KT && (0, ST.h)(oT)) return void hT(MT(ST.b));
            if (void 0 !== cT) {
              const TT = JSON.stringify(oT).length / 1048576;
              if (TT > cT) return void hT(`File size is too large. Max size is ${cT}MB. Current size is ${TT}MB.`)
            }
            hT(null), mT(null), zT(oT), eT.current = oT,
              function(TT, oT) {
                const iT = TT.modelOverrides;
                iT && Promise.all([IT.e(190), IT.e(189)]).then((() => IT(8799))).then((IT => {
                  let {
                    packDisplayName: zT,
                    refusedPackModels: kT,
                    packModelSummary: WT
                  } = IT;
                  const XT = zT(TT.metaData);
                  oT(WT(XT, kT(XT, iT, !1)))
                })).catch((TT => {
                  console.error("Checking the texture pack's models failed:", TT)
                }))
              }(oT, (TT => {
                eT.current === oT && mT(TT)
              }))
          } catch {
            hT("Invalid Texture Pack Folder")
          } finally {
            AT(!1)
          }
        },
        useFsAccessApi: !1,
        disabled: xT
      });
      return (0, LT.jsxs)("div", {
        className: "CustomTexturePackContainer",
        children: [(0, LT.jsxs)("div", {
          className: "CustomTextureWarning",
          children: [MT("settingsMenu:customTextureWarning"), ".", (0, LT.jsx)("br", {}), MT("settingsMenu:viewDocumentation"), ":", " ", (0, LT.jsx)("a", {
            href: "https://github.com/Bloxdy/texturePacks",
            target: "_blank",
            rel: "noreferrer",
            children: "github.com/Bloxdy/texturePacks"
          })]
        }), gT && (0, LT.jsxs)("div", {
          className: "CustomTextureError",
          children: [MT("general:error"), ": ", gT]
        }), wT && (0, LT.jsx)("div", {
          className: "CustomTextureError",
          children: wT
        }), (0, LT.jsxs)("div", {
          ...RT({
            className: kT()("CustomTextureFolderUpload", {
              ActiveDrag: vT,
              Disabled: xT
            })
          }),
          children: [(0, LT.jsx)("input", {
            ...uT({
              webkitdirectory: "true"
            })
          }), rT && (0, LT.jsx)("div", {
            className: "CustomTextureFolderUploadLoading",
            children: (0, LT.jsx)(XT.d, {})
          }), !rT && !vT && oT && (0, LT.jsxs)(LT.Fragment, {
            children: [(0, LT.jsx)("div", {
              className: "CustomTextureFolderUploadIcon Active",
              children: (0, LT.jsx)(DT.e, {
                name: "folder-image"
              })
            }), (0, LT.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions Active",
              children: oT
            })]
          }), !rT && (vT || !oT) && (0, LT.jsxs)(LT.Fragment, {
            children: [(0, LT.jsx)("div", {
              className: "CustomTextureFolderUploadIcon",
              children: (0, LT.jsx)(DT.e, {
                name: "up-from-bracket"
              })
            }), (0, LT.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions",
              children: "Drag and drop a Texture Pack folder here"
            })]
          })]
        })]
      })
    }
  },
  4481: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => cT,
      h: () => gT,
      k: () => KT,
      n: () => AT
    });
    var iT = IT(46),
      zT = IT(4483),
      kT = IT(3899),
      WT = IT(1337),
      XT = IT(4509),
      BT = IT(1042),
      FT = IT.n(BT),
      ST = IT(1325),
      DT = IT(1665),
      LT = IT(4514),
      xT = IT(1083);

    function cT(TT) {
      let {
        label: oT,
        onClick: IT,
        checked: iT,
        circleInfoText: zT,
        className: XT,
        disabled: BT,
        note: ST
      } = TT;
      return (0, xT.jsxs)("div", {
        "aria-disabled": BT || void 0,
        "data-pad-focusable": !0,
        className: FT()("SettingBox CheckboxContainer", {
          [XT]: XT,
          SettingBoxDisabled: BT
        }),
        onClick: () => {
          BT || IT(!iT)
        },
        children: [(0, xT.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, xT.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, xT.jsx)(kT.d, {
              className: "SettingsCheckbox",
              checked: iT,
              disabled: BT,
              onChange: () => {}
            })
          }), (0, xT.jsxs)("div", {
            className: "CheckboxText",
            children: [oT, zT && (0, xT.jsx)("span", {
              onClick: TT => TT.stopPropagation(),
              children: (0, xT.jsx)(WT.d, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: zT
              })
            })]
          })]
        }), ST && (0, xT.jsx)("div", {
          className: "SettingNote",
          children: ST
        })]
      })
    }

    function KT(TT) {
      let {
        name: oT,
        onChange: IT,
        min: zT,
        max: kT,
        step: XT,
        initValue: BT,
        circleInfoText: ST,
        format: DT,
        className: LT,
        padStep: cT,
        disabled: KT = !1,
        selectableMax: MT,
        cappedNote: AT,
        onChangeComplete: gT
      } = TT;
      const [hT, wT] = (0, iT.useState)(BT), mT = (0, iT.useRef)(BT);
      (0, iT.useEffect)((() => {
        mT.current = BT, wT(BT)
      }), [BT]);
      const eT = void 0 !== MT && MT < kT,
        RT = eT ? {
          "--slider-selectable": (MT - zT) / (kT - zT)
        } : void 0;
      return (0, xT.jsxs)("div", {
        className: FT()("SettingBox SettingsSliderDiv", {
          [LT]: LT,
          SettingBoxDisabled: KT,
          SliderCapped: eT
        }),
        style: RT,
        children: [(0, xT.jsxs)("div", {
          className: "SliderText",
          children: [`${oT}: ${DT?DT(hT):hT}`, ST && (0, xT.jsx)(WT.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: ST
          })]
        }), (0, xT.jsx)("div", {
          className: "SliderDiv",
          children: (0, xT.jsx)(rT, {
            value: hT,
            min: zT,
            max: kT,
            step: XT,
            onChange: TT => {
              if (eT && TT >= MT && hT === MT) return;
              const oT = eT ? Math.min(TT, MT) : TT;
              mT.current = oT, wT(oT), IT(oT)
            },
            onChangeComplete: gT && (() => {
              gT(mT.current)
            }),
            format: DT,
            padStep: cT,
            disabled: KT
          })
        }), eT && AT && (0, xT.jsx)("div", {
          className: "SettingNote",
          children: AT
        })]
      })
    }
    const MT = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function rT(TT) {
      var oT;
      let {
        value: IT,
        min: kT,
        max: WT,
        step: XT,
        onChange: BT,
        orientation: FT,
        reverse: ST,
        setIsChanging: DT,
        tooltip: cT,
        labels: KT,
        handleLabel: rT,
        format: AT,
        onChangeStart: gT,
        onChangeComplete: hT,
        padStep: wT,
        disabled: mT = !1
      } = TT;
      const eT = (0, iT.useRef)(null),
        RT = (0, iT.useRef)(null);
      (0, iT.useLayoutEffect)((() => {
        var TT, oT, IT;
        const iT = null !== (TT = null === (oT = eT.current) || void 0 === oT ? void 0 : oT.querySelector(".rangeslider")) && void 0 !== TT ? TT : null;
        null === iT || void 0 === iT || iT.setAttribute("data-pad-slider", ""), null === iT || void 0 === iT || iT.setAttribute("data-pad-focusable", ""), null === iT || void 0 === iT || null === (IT = iT.querySelector(".rangeslider__handle")) || void 0 === IT || IT.setAttribute("data-pad-slider-handle", ""), RT.current = iT
      }), []), (0, iT.useLayoutEffect)((() => {
        var TT, oT;
        mT ? null === (TT = RT.current) || void 0 === TT || TT.setAttribute("aria-disabled", "true") : null === (oT = RT.current) || void 0 === oT || oT.removeAttribute("aria-disabled")
      }), [mT]);
      const uT = (null !== (oT = String(XT).split(".")[1]) && void 0 !== oT ? oT : "").length,
        vT = TT => {
          const oT = Number((Math.round((TT - kT) / XT) * XT + kT).toFixed(uT));
          return Math.min(WT, Math.max(kT, oT))
        },
        ET = (0, iT.useRef)(hT);
      ET.current = hT, (0, iT.useEffect)((() => {
        const TT = eT.current;
        if (!TT) return;
        const oT = TT => {
          var oT;
          MT.has(TT.key) && (null === (oT = ET.current) || void 0 === oT || oT.call(ET))
        };
        return TT.addEventListener("keyup", oT), () => {
          TT.removeEventListener("keyup", oT)
        }
      }), []);
      const fT = (0, iT.useRef)(!1);
      return (0, LT.d)(RT, {
        adjust: TT => {
          if (mT) return;
          const oT = null !== wT && void 0 !== wT ? wT : Math.max(XT, Math.round((WT - kT) / 20 / XT) * XT),
            iT = vT(IT + TT * oT * (ST ? -1 : 1));
          iT !== IT && (null === gT || void 0 === gT || gT(), BT(iT), null === hT || void 0 === hT || hT())
        },
        setFraction: TT => {
          if (mT) return;
          const oT = vT(kT + (ST ? 1 - TT : TT) * (WT - kT));
          oT !== IT && (fT.current || (fT.current = !0, null === gT || void 0 === gT || gT()), BT(oT))
        },
        endDrag: () => {
          fT.current && (fT.current = !1, null === hT || void 0 === hT || hT())
        }
      }), (0, xT.jsx)("div", {
        ref: eT,
        style: {
          display: "contents"
        },
        children: (0, xT.jsx)(zT.d, {
          value: IT,
          min: kT,
          max: WT,
          step: XT,
          onChange: BT,
          orientation: FT,
          reverse: ST,
          tooltip: cT,
          labels: KT,
          handleLabel: rT,
          format: AT,
          onChangeStart: () => {
            null === gT || void 0 === gT || gT(), null === DT || void 0 === DT || DT(!0)
          },
          onChangeComplete: () => {
            null === DT || void 0 === DT || DT(!1), null === hT || void 0 === hT || hT()
          }
        })
      })
    }
    async function AT() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      const oT = ST.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: "",
        unlockPointerKey: TT
      });
      !0 === await oT.getResult() && (0, DT.reloadBloxd)()
    }

    function gT(TT) {
      let {
        label: oT,
        options: IT,
        value: iT,
        onChange: zT,
        circleInfoText: kT
      } = TT;
      return (0, xT.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, xT.jsxs)("div", {
          className: "SliderText",
          children: [oT, kT && (0, xT.jsx)(WT.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: kT
          })]
        }), (0, xT.jsx)(XT.e, {
          ariaLabel: oT,
          options: IT,
          value: iT,
          onChange: zT
        })]
      })
    }
  },
  4473: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => rT,
      f: () => AT
    });
    var iT = IT(2713),
      zT = IT(2715),
      kT = IT(46),
      WT = IT(1042),
      XT = IT.n(WT),
      BT = IT(1310),
      FT = IT(2710),
      ST = IT(1325),
      DT = IT(4481),
      LT = IT(4517),
      xT = IT(637),
      cT = IT(4521),
      KT = IT(1083);

    function MT() {
      (0, DT.n)("texturePackPickReload")
    }

    function rT(TT) {
      var oT;
      let {
        setApplySettingsCallback: IT
      } = TT;
      const [, WT] = (0, kT.useReducer)((TT => TT + 1), 0), XT = (0, kT.useRef)(!1), BT = (0, kT.useRef)(null);

      function rT(TT, oT) {
        FT.e.setFromJson(TT, "player");
        const iT = FT.e.saveTexturePack();
        if (xT.u) {
          const TT = FT.e.toJson();
          iT.then((oT => {
            oT && (0, cT.i)(TT, MT)
          }))
        } else XT.current ||= oT, BT.current !== FT.e.getId() || FT.e.getId() === zT.n.CUSTOM && XT.current ? IT((() => DT.n)) : IT(null);
        WT()
      }
      async function gT(TT) {
        if (FT.e.getId() !== TT.metaData.id) {
          if (FT.e.getId() === zT.n.CUSTOM && FT.e.getFromFolderName()) {
            const TT = ST.NotificationProvider.showPromptPopup({
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
          rT(TT, !1)
        }
      }(0, kT.useEffect)((() => {
        BT.current = FT.e.getId()
      }), []);
      const hT = iT.c,
        wT = [hT, ...Object.values(zT.n).filter((TT => TT !== hT))];
      return (0, KT.jsx)(KT.Fragment, {
        children: (0, KT.jsxs)("div", {
          className: "TexturePackCategory SettingsMenuRightInner",
          children: [(0, KT.jsx)("div", {
            className: "TexturePackList",
            children: wT.map((TT => (0, KT.jsx)(AT, {
              id: TT,
              isSelected: TT === FT.e.getId(),
              setSelected: gT
            }, TT)))
          }), FT.e.getId() === zT.n.CUSTOM && (0, KT.jsx)(LT.e, {
            folderName: null !== (oT = FT.e.getFromFolderName()) && void 0 !== oT ? oT : null,
            onTexturePackUpdated: function(TT) {
              rT(TT, !0)
            },
            packOwner: "player"
          })]
        })
      })
    }

    function AT(TT) {
      let {
        id: oT,
        isSelected: IT,
        setSelected: WT,
        disabled: FT = !1
      } = TT;
      const [ST, DT] = (0, kT.useState)(!0), [LT, xT] = (0, kT.useState)(""), [cT, MT] = (0, kT.useState)(""), [rT, AT] = (0, kT.useState)(""), gT = (0, kT.useRef)({});
      return (0, kT.useEffect)((() => {
        (0, iT.o)(oT).then((TT => {
          var oT;
          TT && (gT.current = TT, DT(!1), xT(gT.current.metaData.name), MT(gT.current.metaData.author), AT(null !== (oT = gT.current.metaData.previewImage) && void 0 !== oT ? oT : ""))
        })).catch((TT => {
          console.warn(`Failed to fetch texture pack ${oT}`, TT)
        }))
      }), [oT]), (0, KT.jsxs)("div", {
        "data-pad-focusable": !0,
        "aria-disabled": FT || void 0,
        className: XT()("TexturePack", {
          Selected: IT,
          Custom: oT === zT.n.CUSTOM,
          Disabled: FT
        }),
        onClick: () => {
          ST || FT || WT(gT.current)
        },
        children: [(0, KT.jsx)("div", {
          className: "TexturePackBg",
          style: {
            backgroundImage: rT ? `url(${rT})` : void 0
          }
        }), ST && (0, KT.jsx)("div", {
          className: "TexturePackName",
          children: (0, KT.jsx)(BT.d, {})
        }), !ST && LT && (0, KT.jsx)("div", {
          className: "TexturePackName",
          children: LT
        }), !ST && cT && (0, KT.jsx)("div", {
          className: "TexturePackAuthor",
          children: cT
        })]
      })
    }
  },
  4509: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => WT
    });
    var iT = IT(1042),
      zT = IT.n(iT),
      kT = IT(1083);

    function WT(TT) {
      let {
        options: oT,
        value: IT,
        onChange: iT,
        ariaLabel: WT,
        className: XT,
        reselectable: BT = !1,
        keepsFocus: FT = !1
      } = TT;
      return (0, kT.jsx)("div", {
        className: zT()("SegmentedToggle", XT),
        role: "group",
        "aria-label": WT,
        children: oT.map((TT => {
          const oT = TT.value === IT;
          return (0, kT.jsx)("button", {
            type: "button",
            "aria-pressed": oT,
            "aria-label": TT.ariaLabel,
            title: TT.ariaLabel,
            className: zT()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: oT
            }),
            onMouseDown: FT ? TT => {
              TT.preventDefault()
            } : void 0,
            onClick: () => {
              oT && !BT || iT(TT.value)
            },
            children: TT.label
          }, TT.value)
        }))
      })
    }
  },
  4514: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => kT,
      d: () => WT
    });
    var iT = IT(46);
    const zT = new WeakMap,
      kT = TT => {
        var oT;
        const IT = TT.closest("[data-pad-slider]");
        return IT && null !== (oT = zT.get(IT)) && void 0 !== oT ? oT : null
      },
      WT = (TT, oT) => {
        const IT = (0, iT.useRef)(oT);
        IT.current = oT, (0, iT.useEffect)((() => {
          if (TT.current) return ((TT, oT) => (zT.set(TT, oT), () => {
            zT.get(TT) === oT && zT.delete(TT)
          }))(TT.current, {
            adjust: TT => {
              IT.current.adjust(TT)
            },
            setFraction: TT => {
              IT.current.setFraction(TT)
            },
            endDrag: () => {
              IT.current.endDrag()
            }
          })
        }), [TT])
      }
  },
  4521: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => XT,
      i: () => WT
    });
    var iT = IT(2715),
      zT = IT(4523);
    let kT = null;

    function WT(TT, oT) {
      kT = {
        pack: TT.metaData.id === iT.d ? null : TT,
        prompt: oT
      }
    }

    function XT(TT, oT) {
      const IT = kT;
      null !== IT && (0, zT.c)(IT.pack, TT) && (kT = null, oT && IT.prompt())
    }
  },
  4523: (TT, oT, IT) => {
    function iT(TT, oT) {
      return zT(TT, oT)
    }

    function zT(TT, oT) {
      if (TT === oT) return !0;
      if ("object" !== typeof TT || "object" !== typeof oT || null === TT || null === oT || Array.isArray(TT) !== Array.isArray(oT)) return !1;
      const IT = TT,
        iT = oT,
        kT = Object.keys(IT);
      return kT.length === Object.keys(iT).length && kT.every((TT => Object.prototype.hasOwnProperty.call(iT, TT) && zT(IT[TT], iT[TT])))
    }
    IT.d(oT, {
      c: () => iT
    })
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);