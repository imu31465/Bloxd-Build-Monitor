export const id = 95;
export const ids = [95];
export const modules = {
  4323: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => DJ
    });
    var FJ = ZJ(926),
      UJ = ZJ.n(FJ),
      eJ = ZJ(942),
      XJ = ZJ(1232),
      AJ = ZJ(2988),
      qJ = ZJ(112),
      jJ = ZJ(3026),
      YJ = ZJ(3017),
      hJ = ZJ(990);

    function DJ(JJ) {
      let {
        game: cJ
      } = JJ;
      const ZJ = (0, qJ.f)() ? "large" : "small",
        FJ = (0, jJ.f)(cJ, ZJ),
        DJ = (0, AJ.f)(FJ),
        sJ = void 0 !== DJ.blurhash;
      return (0, hJ.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [DJ.isLoading && !sJ && (0, hJ.jsx)(XJ.c, {
          loaderType: "Secondary"
        }), !DJ.failed && (null !== DJ.src || sJ) && (0, hJ.jsx)("div", {
          className: UJ()("SchematicImage", YJ.j, {
            SchematicImageFadeIn: DJ.fadeIn && !sJ
          }),
          style: (0, YJ.g)(DJ),
          children: (0, hJ.jsx)(YJ.e, {
            image: DJ
          })
        }), DJ.failed && (0, hJ.jsx)("div", {
          className: "SchematicImageError",
          children: (0, hJ.jsx)(eJ.c, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  4439: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => sJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(926),
      eJ = ZJ.n(UJ),
      XJ = ZJ(4365),
      AJ = ZJ(1232),
      qJ = ZJ(1086),
      jJ = ZJ(2649),
      YJ = ZJ(2787),
      hJ = ZJ(942),
      DJ = ZJ(990);

    function sJ(JJ) {
      let {
        folderName: cJ,
        onTexturePackUpdated: UJ,
        disabled: sJ = !1,
        maxFileSizeMb: nJ,
        packOwner: GJ
      } = JJ;
      const {
        t: fJ
      } = (0, qJ.F)(), [xJ, rJ] = (0, FJ.useState)(!1), [vJ, mJ] = (0, FJ.useState)(null), [QJ, EJ] = (0, FJ.useState)(null), VJ = (0, FJ.useRef)(null);
      const {
        getRootProps: KJ,
        getInputProps: yJ,
        isDragActive: SJ
      } = (0, XJ.c)({
        onDrop: async function(JJ) {
          rJ(!0);
          try {
            const cJ = await (0, jJ.l)(JJ);
            if ("customGame" === GJ && (0, YJ.g)(cJ)) return void mJ(fJ(YJ.c));
            if (void 0 !== nJ) {
              const JJ = JSON.stringify(cJ).length / 1048576;
              if (JJ > nJ) return void mJ(`File size is too large. Max size is ${nJ}MB. Current size is ${JJ}MB.`)
            }
            mJ(null), EJ(null), UJ(cJ), VJ.current = cJ,
              function(JJ, cJ) {
                const FJ = JJ.modelOverrides;
                FJ && Promise.all([ZJ.e(181), ZJ.e(180)]).then((() => ZJ(8610))).then((ZJ => {
                  let {
                    packDisplayName: UJ,
                    refusedPackModels: eJ,
                    packModelSummary: XJ
                  } = ZJ;
                  const AJ = UJ(JJ.metaData);
                  cJ(XJ(AJ, eJ(AJ, FJ, !1)))
                })).catch((JJ => {
                  console.error("Checking the texture pack's models failed:", JJ)
                }))
              }(cJ, (JJ => {
                VJ.current === cJ && EJ(JJ)
              }))
          } catch {
            mJ("Invalid Texture Pack Folder")
          } finally {
            rJ(!1)
          }
        },
        useFsAccessApi: !1,
        disabled: sJ
      });
      return (0, DJ.jsxs)("div", {
        className: "CustomTexturePackContainer",
        children: [(0, DJ.jsxs)("div", {
          className: "CustomTextureWarning",
          children: [fJ("settingsMenu:customTextureWarning"), ".", (0, DJ.jsx)("br", {}), fJ("settingsMenu:viewDocumentation"), ":", " ", (0, DJ.jsx)("a", {
            href: "https://github.com/Bloxdy/texturePacks",
            target: "_blank",
            rel: "noreferrer",
            children: "github.com/Bloxdy/texturePacks"
          })]
        }), vJ && (0, DJ.jsxs)("div", {
          className: "CustomTextureError",
          children: [fJ("general:error"), ": ", vJ]
        }), QJ && (0, DJ.jsx)("div", {
          className: "CustomTextureError",
          children: QJ
        }), (0, DJ.jsxs)("div", {
          ...KJ({
            className: eJ()("CustomTextureFolderUpload", {
              ActiveDrag: SJ,
              Disabled: sJ
            })
          }),
          children: [(0, DJ.jsx)("input", {
            ...yJ({
              webkitdirectory: "true"
            })
          }), xJ && (0, DJ.jsx)("div", {
            className: "CustomTextureFolderUploadLoading",
            children: (0, DJ.jsx)(AJ.c, {})
          }), !xJ && !SJ && cJ && (0, DJ.jsxs)(DJ.Fragment, {
            children: [(0, DJ.jsx)("div", {
              className: "CustomTextureFolderUploadIcon Active",
              children: (0, DJ.jsx)(hJ.c, {
                name: "folder-image"
              })
            }), (0, DJ.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions Active",
              children: cJ
            })]
          }), !xJ && (SJ || !cJ) && (0, DJ.jsxs)(DJ.Fragment, {
            children: [(0, DJ.jsx)("div", {
              className: "CustomTextureFolderUploadIcon",
              children: (0, DJ.jsx)(hJ.c, {
                name: "up-from-bracket"
              })
            }), (0, DJ.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions",
              children: "Drag and drop a Texture Pack folder here"
            })]
          })]
        })]
      })
    }
  },
  4401: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => nJ,
      f: () => rJ,
      h: () => GJ,
      l: () => xJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(4407),
      eJ = ZJ(3826),
      XJ = ZJ(1259),
      AJ = ZJ(4426),
      qJ = ZJ(926),
      jJ = ZJ.n(qJ),
      YJ = ZJ(1247),
      hJ = ZJ(1599),
      DJ = ZJ(4433),
      sJ = ZJ(990);

    function nJ(JJ) {
      let {
        label: cJ,
        onClick: ZJ,
        checked: FJ,
        circleInfoText: UJ,
        className: AJ,
        disabled: qJ
      } = JJ;
      return (0, sJ.jsx)("div", {
        "aria-disabled": qJ || void 0,
        "data-pad-focusable": !0,
        className: jJ()("SettingBox CheckboxContainer", {
          [AJ]: AJ,
          SettingBoxDisabled: qJ
        }),
        onClick: () => {
          qJ || ZJ(!FJ)
        },
        children: (0, sJ.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, sJ.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, sJ.jsx)(eJ.e, {
              className: "SettingsCheckbox",
              checked: FJ,
              disabled: qJ,
              onChange: () => {}
            })
          }), (0, sJ.jsxs)("div", {
            className: "CheckboxText",
            children: [cJ, UJ && (0, sJ.jsx)("span", {
              onClick: JJ => JJ.stopPropagation(),
              children: (0, sJ.jsx)(XJ.e, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: UJ
              })
            })]
          })]
        })
      })
    }

    function GJ(JJ) {
      let {
        name: cJ,
        onChange: ZJ,
        min: UJ,
        max: eJ,
        step: AJ,
        initValue: qJ,
        circleInfoText: YJ,
        format: hJ,
        className: DJ,
        padStep: nJ,
        disabled: GJ = !1,
        selectableMax: xJ,
        cappedNote: rJ
      } = JJ;
      const [vJ, mJ] = (0, FJ.useState)(qJ);
      (0, FJ.useEffect)((() => {
        mJ(qJ)
      }), [qJ]);
      const QJ = void 0 !== xJ && xJ < eJ,
        EJ = QJ ? {
          "--slider-selectable": (xJ - UJ) / (eJ - UJ)
        } : void 0;
      return (0, sJ.jsxs)("div", {
        className: jJ()("SettingBox SettingsSliderDiv", {
          [DJ]: DJ,
          SettingBoxDisabled: GJ,
          SliderCapped: QJ
        }),
        style: EJ,
        children: [(0, sJ.jsxs)("div", {
          className: "SliderText",
          children: [`${cJ}: ${hJ?hJ(vJ):vJ}`, YJ && (0, sJ.jsx)(XJ.e, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: YJ
          })]
        }), (0, sJ.jsx)("div", {
          className: "SliderDiv",
          children: (0, sJ.jsx)(fJ, {
            value: vJ,
            min: UJ,
            max: eJ,
            step: AJ,
            onChange: JJ => {
              if (QJ && JJ >= xJ && vJ === xJ) return;
              const cJ = QJ ? Math.min(JJ, xJ) : JJ;
              mJ(cJ), ZJ(cJ)
            },
            format: hJ,
            padStep: nJ,
            disabled: GJ
          })
        }), QJ && rJ && (0, sJ.jsx)("div", {
          className: "SliderNote",
          children: rJ
        })]
      })
    }

    function fJ(JJ) {
      var cJ;
      let {
        value: ZJ,
        min: eJ,
        max: XJ,
        step: AJ,
        onChange: qJ,
        orientation: jJ,
        reverse: YJ,
        setIsChanging: hJ,
        tooltip: nJ,
        labels: GJ,
        handleLabel: fJ,
        format: xJ,
        onChangeStart: rJ,
        onChangeComplete: vJ,
        padStep: mJ,
        disabled: QJ = !1
      } = JJ;
      const EJ = (0, FJ.useRef)(null),
        VJ = (0, FJ.useRef)(null);
      (0, FJ.useLayoutEffect)((() => {
        var JJ, cJ, ZJ;
        const FJ = null !== (JJ = null === (cJ = EJ.current) || void 0 === cJ ? void 0 : cJ.querySelector(".rangeslider")) && void 0 !== JJ ? JJ : null;
        null === FJ || void 0 === FJ || FJ.setAttribute("data-pad-slider", ""), null === FJ || void 0 === FJ || FJ.setAttribute("data-pad-focusable", ""), null === FJ || void 0 === FJ || null === (ZJ = FJ.querySelector(".rangeslider__handle")) || void 0 === ZJ || ZJ.setAttribute("data-pad-slider-handle", ""), VJ.current = FJ
      }), []), (0, FJ.useLayoutEffect)((() => {
        var JJ, cJ;
        QJ ? null === (JJ = VJ.current) || void 0 === JJ || JJ.setAttribute("aria-disabled", "true") : null === (cJ = VJ.current) || void 0 === cJ || cJ.removeAttribute("aria-disabled")
      }), [QJ]);
      const KJ = (null !== (cJ = String(AJ).split(".")[1]) && void 0 !== cJ ? cJ : "").length,
        yJ = JJ => {
          const cJ = Number((Math.round((JJ - eJ) / AJ) * AJ + eJ).toFixed(KJ));
          return Math.min(XJ, Math.max(eJ, cJ))
        },
        SJ = (0, FJ.useRef)(!1);
      return (0, DJ.i)(VJ, {
        adjust: JJ => {
          if (QJ) return;
          const cJ = null !== mJ && void 0 !== mJ ? mJ : Math.max(AJ, Math.round((XJ - eJ) / 20 / AJ) * AJ),
            FJ = yJ(ZJ + JJ * cJ * (YJ ? -1 : 1));
          FJ !== ZJ && (null === rJ || void 0 === rJ || rJ(), qJ(FJ), null === vJ || void 0 === vJ || vJ())
        },
        setFraction: JJ => {
          if (QJ) return;
          const cJ = yJ(eJ + (YJ ? 1 - JJ : JJ) * (XJ - eJ));
          cJ !== ZJ && (SJ.current || (SJ.current = !0, null === rJ || void 0 === rJ || rJ()), qJ(cJ))
        },
        endDrag: () => {
          SJ.current && (SJ.current = !1, null === vJ || void 0 === vJ || vJ())
        }
      }), (0, sJ.jsx)("div", {
        ref: EJ,
        style: {
          display: "contents"
        },
        children: (0, sJ.jsx)(UJ.c, {
          value: ZJ,
          min: eJ,
          max: XJ,
          step: AJ,
          onChange: qJ,
          orientation: jJ,
          reverse: YJ,
          tooltip: nJ,
          labels: GJ,
          handleLabel: fJ,
          format: xJ,
          onChangeStart: () => {
            null === rJ || void 0 === rJ || rJ(), null === hJ || void 0 === hJ || hJ(!0)
          },
          onChangeComplete: () => {
            null === hJ || void 0 === hJ || hJ(!1), null === vJ || void 0 === vJ || vJ()
          }
        })
      })
    }
    async function xJ() {
      let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      const cJ = YJ.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: "",
        unlockPointerKey: JJ
      });
      !0 === await cJ.getResult() && (0, hJ.reloadBloxd)()
    }

    function rJ(JJ) {
      let {
        label: cJ,
        options: ZJ,
        value: FJ,
        onChange: UJ,
        circleInfoText: eJ
      } = JJ;
      return (0, sJ.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, sJ.jsxs)("div", {
          className: "SliderText",
          children: [cJ, eJ && (0, sJ.jsx)(XJ.e, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: eJ
          })]
        }), (0, sJ.jsx)(AJ.b, {
          ariaLabel: cJ,
          options: ZJ,
          value: FJ,
          onChange: UJ
        })]
      })
    }
  },
  4397: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => xJ,
      f: () => rJ
    });
    var FJ = ZJ(2649),
      UJ = ZJ(2651),
      eJ = ZJ(47),
      XJ = ZJ(926),
      AJ = ZJ.n(XJ),
      qJ = ZJ(1232),
      jJ = ZJ(2642),
      YJ = ZJ(1247),
      hJ = ZJ(4401),
      DJ = ZJ(4439),
      sJ = ZJ(547),
      nJ = ZJ(4441),
      GJ = ZJ(990);

    function fJ() {
      (0, hJ.l)("texturePackPickReload")
    }

    function xJ(JJ) {
      var cJ;
      let {
        setApplySettingsCallback: ZJ
      } = JJ;
      const [, XJ] = (0, eJ.useReducer)((JJ => JJ + 1), 0), AJ = (0, eJ.useRef)(!1), qJ = (0, eJ.useRef)(null);

      function xJ(JJ, cJ) {
        jJ.b.setFromJson(JJ, "player");
        const FJ = jJ.b.saveTexturePack();
        if (sJ.r) {
          const JJ = jJ.b.toJson();
          FJ.then((cJ => {
            cJ && (0, nJ.f)(JJ, fJ)
          }))
        } else AJ.current ||= cJ, qJ.current !== jJ.b.getId() || jJ.b.getId() === UJ.r.CUSTOM && AJ.current ? ZJ((() => hJ.l)) : ZJ(null);
        XJ()
      }
      async function vJ(JJ) {
        if (jJ.b.getId() !== JJ.metaData.id) {
          if (jJ.b.getId() === UJ.r.CUSTOM && jJ.b.getFromFolderName()) {
            const JJ = YJ.NotificationProvider.showPromptPopup({
              title: "settingsMenu:loseChangesTitle",
              subtitle: "settingsMenu:loseChangesSubtitle",
              confirmText: "general:continue",
              destructive: !0,
              confirmTooltip: "",
              cancelText: "general:cancel",
              cancelTooltip: ""
            });
            if (!0 !== await JJ.getResult()) return
          }
          xJ(JJ, !1)
        }
      }(0, eJ.useEffect)((() => {
        qJ.current = jJ.b.getId()
      }), []);
      const mJ = FJ.b,
        QJ = [mJ, ...Object.values(UJ.r).filter((JJ => JJ !== mJ))];
      return (0, GJ.jsx)(GJ.Fragment, {
        children: (0, GJ.jsxs)("div", {
          className: "TexturePackCategory SettingsMenuRightInner",
          children: [(0, GJ.jsx)("div", {
            className: "TexturePackList",
            children: QJ.map((JJ => (0, GJ.jsx)(rJ, {
              id: JJ,
              isSelected: JJ === jJ.b.getId(),
              setSelected: vJ
            }, JJ)))
          }), jJ.b.getId() === UJ.r.CUSTOM && (0, GJ.jsx)(DJ.e, {
            folderName: null !== (cJ = jJ.b.getFromFolderName()) && void 0 !== cJ ? cJ : null,
            onTexturePackUpdated: function(JJ) {
              xJ(JJ, !0)
            },
            packOwner: "player"
          })]
        })
      })
    }

    function rJ(JJ) {
      let {
        id: cJ,
        isSelected: ZJ,
        setSelected: XJ,
        disabled: jJ = !1
      } = JJ;
      const [YJ, hJ] = (0, eJ.useState)(!0), [DJ, sJ] = (0, eJ.useState)(""), [nJ, fJ] = (0, eJ.useState)(""), [xJ, rJ] = (0, eJ.useState)(""), vJ = (0, eJ.useRef)({});
      return (0, eJ.useEffect)((() => {
        (0, FJ.k)(cJ).then((JJ => {
          var cJ;
          JJ && (vJ.current = JJ, hJ(!1), sJ(vJ.current.metaData.name), fJ(vJ.current.metaData.author), rJ(null !== (cJ = vJ.current.metaData.previewImage) && void 0 !== cJ ? cJ : ""))
        })).catch((JJ => {
          console.warn(`Failed to fetch texture pack ${cJ}`, JJ)
        }))
      }), [cJ]), (0, GJ.jsxs)("div", {
        "data-pad-focusable": !0,
        "aria-disabled": jJ || void 0,
        className: AJ()("TexturePack", {
          Selected: ZJ,
          Custom: cJ === UJ.r.CUSTOM,
          Disabled: jJ
        }),
        onClick: () => {
          YJ || jJ || XJ(vJ.current)
        },
        children: [(0, GJ.jsx)("div", {
          className: "TexturePackBg",
          style: {
            backgroundImage: xJ ? `url(${xJ})` : void 0
          }
        }), YJ && (0, GJ.jsx)("div", {
          className: "TexturePackName",
          children: (0, GJ.jsx)(qJ.c, {})
        }), !YJ && DJ && (0, GJ.jsx)("div", {
          className: "TexturePackName",
          children: DJ
        }), !YJ && nJ && (0, GJ.jsx)("div", {
          className: "TexturePackAuthor",
          children: nJ
        })]
      })
    }
  },
  4426: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => XJ
    });
    var FJ = ZJ(926),
      UJ = ZJ.n(FJ),
      eJ = ZJ(990);

    function XJ(JJ) {
      let {
        options: cJ,
        value: ZJ,
        onChange: FJ,
        ariaLabel: XJ
      } = JJ;
      return (0, eJ.jsx)("div", {
        className: "SegmentedToggle",
        role: "group",
        "aria-label": XJ,
        children: cJ.map((JJ => {
          const cJ = JJ.value === ZJ;
          return (0, eJ.jsx)("button", {
            type: "button",
            "aria-pressed": cJ,
            className: UJ()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: cJ
            }),
            onClick: () => {
              cJ || FJ(JJ.value)
            },
            children: JJ.label
          }, JJ.value)
        }))
      })
    }
  },
  4433: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => eJ,
      i: () => XJ
    });
    var FJ = ZJ(47);
    const UJ = new WeakMap,
      eJ = JJ => {
        var cJ;
        const ZJ = JJ.closest("[data-pad-slider]");
        return ZJ && null !== (cJ = UJ.get(ZJ)) && void 0 !== cJ ? cJ : null
      },
      XJ = (JJ, cJ) => {
        const ZJ = (0, FJ.useRef)(cJ);
        ZJ.current = cJ, (0, FJ.useEffect)((() => {
          if (JJ.current) return ((JJ, cJ) => (UJ.set(JJ, cJ), () => {
            UJ.get(JJ) === cJ && UJ.delete(JJ)
          }))(JJ.current, {
            adjust: JJ => {
              ZJ.current.adjust(JJ)
            },
            setFraction: JJ => {
              ZJ.current.setFraction(JJ)
            },
            endDrag: () => {
              ZJ.current.endDrag()
            }
          })
        }), [JJ])
      }
  },
  4441: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => AJ,
      f: () => XJ
    });
    var FJ = ZJ(2651),
      UJ = ZJ(4448);
    let eJ = null;

    function XJ(JJ, cJ) {
      eJ = {
        pack: JJ.metaData.id === FJ.d ? null : JJ,
        prompt: cJ
      }
    }

    function AJ(JJ, cJ) {
      const ZJ = eJ;
      null !== ZJ && (0, UJ.b)(ZJ.pack, JJ) && (eJ = null, cJ && ZJ.prompt())
    }
  },
  4448: (JJ, cJ, ZJ) => {
    function FJ(JJ, cJ) {
      return UJ(JJ, cJ)
    }

    function UJ(JJ, cJ) {
      if (JJ === cJ) return !0;
      if ("object" !== typeof JJ || "object" !== typeof cJ || null === JJ || null === cJ || Array.isArray(JJ) !== Array.isArray(cJ)) return !1;
      const ZJ = JJ,
        FJ = cJ,
        eJ = Object.keys(ZJ);
      return eJ.length === Object.keys(FJ).length && eJ.every((JJ => Object.prototype.hasOwnProperty.call(FJ, JJ) && UJ(ZJ[JJ], FJ[JJ])))
    }
    ZJ.d(cJ, {
      b: () => FJ
    })
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);