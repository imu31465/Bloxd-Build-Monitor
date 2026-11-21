export const id = 102;
export const ids = [102];
export const modules = {
  4737: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => bQ
    });
    var LQ = wQ(1070),
      qQ = wQ.n(LQ),
      oQ = wQ(1079),
      DQ = wQ(1348),
      kQ = wQ(3380),
      vQ = wQ(134),
      mQ = wQ(3415),
      uQ = wQ(3399),
      HQ = wQ(1107);

    function bQ(QQ) {
      let {
        game: FQ
      } = QQ;
      const wQ = (0, vQ.l)() ? "large" : "small",
        LQ = (0, mQ.e)(FQ, wQ),
        bQ = (0, kQ.f)(LQ),
        YQ = void 0 !== bQ.blurhash;
      return (0, HQ.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [bQ.isLoading && !YQ && (0, HQ.jsx)(DQ.c, {
          loaderType: "Secondary"
        }), !bQ.failed && (null !== bQ.src || YQ) && (0, HQ.jsx)("div", {
          className: qQ()("SchematicImage", uQ.j, {
            SchematicImageFadeIn: bQ.fadeIn && !YQ
          }),
          style: (0, uQ.f)(bQ),
          children: (0, HQ.jsx)(uQ.b, {
            image: bQ
          })
        }), bQ.failed && (0, HQ.jsx)("div", {
          className: "SchematicImageError",
          children: (0, HQ.jsx)(oQ.c, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  4879: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => YQ
    });
    var LQ = wQ(53),
      qQ = wQ(1070),
      oQ = wQ.n(qQ),
      DQ = wQ(4794),
      kQ = wQ(1348),
      vQ = wQ(1207),
      mQ = wQ(3045),
      uQ = wQ(3162),
      HQ = wQ(1079),
      bQ = wQ(1107);

    function YQ(QQ) {
      let {
        folderName: FQ,
        onTexturePackUpdated: qQ,
        disabled: YQ = !1,
        maxFileSizeMb: xQ,
        packOwner: AQ
      } = QQ;
      const {
        t: tQ
      } = (0, vQ.y)(), [eQ, MQ] = (0, LQ.useState)(!1), [GQ, pQ] = (0, LQ.useState)(null), [cQ, CQ] = (0, LQ.useState)(null), SQ = (0, LQ.useRef)(null);
      const {
        getRootProps: iQ,
        getInputProps: WQ,
        isDragActive: RQ
      } = (0, DQ.b)({
        onDrop: async function(QQ) {
          MQ(!0);
          try {
            const FQ = await (0, mQ.o)(QQ);
            if ("customGame" === AQ && (0, uQ.n)(FQ)) return void pQ(tQ(uQ.e));
            if (void 0 !== xQ) {
              const QQ = JSON.stringify(FQ).length / 1048576;
              if (QQ > xQ) return void pQ(`File size is too large. Max size is ${xQ}MB. Current size is ${QQ}MB.`)
            }
            pQ(null), CQ(null), qQ(FQ), SQ.current = FQ,
              function(QQ, FQ) {
                const LQ = QQ.modelOverrides;
                LQ && Promise.all([wQ.e(196), wQ.e(195)]).then((() => wQ(9173))).then((wQ => {
                  let {
                    packDisplayName: qQ,
                    refusedPackModels: oQ,
                    packModelSummary: DQ
                  } = wQ;
                  const kQ = qQ(QQ.metaData);
                  FQ(DQ(kQ, oQ(kQ, LQ, !1)))
                })).catch((QQ => {
                  console.error("Checking the texture pack's models failed:", QQ)
                }))
              }(FQ, (QQ => {
                SQ.current === FQ && CQ(QQ)
              }))
          } catch {
            pQ("Invalid Texture Pack Folder")
          } finally {
            MQ(!1)
          }
        },
        useFsAccessApi: !1,
        disabled: YQ
      });
      return (0, bQ.jsxs)("div", {
        className: "CustomTexturePackContainer",
        children: [(0, bQ.jsxs)("div", {
          className: "CustomTextureWarning",
          children: [tQ("settingsMenu:customTextureWarning"), ".", (0, bQ.jsx)("br", {}), tQ("settingsMenu:viewDocumentation"), ":", " ", (0, bQ.jsx)("a", {
            href: "https://github.com/Bloxdy/texturePacks",
            target: "_blank",
            rel: "noreferrer",
            children: "github.com/Bloxdy/texturePacks"
          })]
        }), GQ && (0, bQ.jsxs)("div", {
          className: "CustomTextureError",
          children: [tQ("general:error"), ": ", GQ]
        }), cQ && (0, bQ.jsx)("div", {
          className: "CustomTextureError",
          children: cQ
        }), (0, bQ.jsxs)("div", {
          ...iQ({
            className: oQ()("CustomTextureFolderUpload", {
              ActiveDrag: RQ,
              Disabled: YQ
            })
          }),
          children: [(0, bQ.jsx)("input", {
            ...WQ({
              webkitdirectory: "true"
            })
          }), eQ && (0, bQ.jsx)("div", {
            className: "CustomTextureFolderUploadLoading",
            children: (0, bQ.jsx)(kQ.c, {})
          }), !eQ && !RQ && FQ && (0, bQ.jsxs)(bQ.Fragment, {
            children: [(0, bQ.jsx)("div", {
              className: "CustomTextureFolderUploadIcon Active",
              children: (0, bQ.jsx)(HQ.c, {
                name: "folder-image"
              })
            }), (0, bQ.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions Active",
              children: FQ
            })]
          }), !eQ && (RQ || !FQ) && (0, bQ.jsxs)(bQ.Fragment, {
            children: [(0, bQ.jsx)("div", {
              className: "CustomTextureFolderUploadIcon",
              children: (0, bQ.jsx)(HQ.c, {
                name: "up-from-bracket"
              })
            }), (0, bQ.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions",
              children: "Drag and drop a Texture Pack folder here"
            })]
          })]
        })]
      })
    }
  },
  4837: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => xQ,
      f: () => GQ,
      g: () => AQ,
      h: () => MQ
    });
    var LQ = wQ(53),
      qQ = wQ(4844),
      oQ = wQ(4233),
      DQ = wQ(1367),
      kQ = wQ(4867),
      vQ = wQ(1070),
      mQ = wQ.n(vQ),
      uQ = wQ(1362),
      HQ = wQ(1725),
      bQ = wQ(4875),
      YQ = wQ(1107);

    function xQ(QQ) {
      let {
        label: FQ,
        onClick: wQ,
        checked: LQ,
        circleInfoText: qQ,
        className: kQ,
        disabled: vQ,
        note: uQ
      } = QQ;
      return (0, YQ.jsxs)("div", {
        "aria-disabled": vQ || void 0,
        "data-pad-focusable": !0,
        className: mQ()("SettingBox CheckboxContainer", {
          [kQ]: kQ,
          SettingBoxDisabled: vQ
        }),
        onClick: () => {
          vQ || wQ(!LQ)
        },
        children: [(0, YQ.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, YQ.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, YQ.jsx)(oQ.d, {
              className: "SettingsCheckbox",
              checked: LQ,
              disabled: vQ,
              onChange: () => {}
            })
          }), (0, YQ.jsxs)("div", {
            className: "CheckboxText",
            children: [FQ, qQ && (0, YQ.jsx)("span", {
              onClick: QQ => QQ.stopPropagation(),
              children: (0, YQ.jsx)(DQ.b, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: qQ
              })
            })]
          })]
        }), uQ && (0, YQ.jsx)("div", {
          className: "SettingNote",
          children: uQ
        })]
      })
    }

    function AQ(QQ) {
      let {
        name: FQ,
        onChange: wQ,
        min: qQ,
        max: oQ,
        step: kQ,
        initValue: vQ,
        circleInfoText: uQ,
        format: HQ,
        className: bQ,
        padStep: xQ,
        disabled: AQ = !1,
        selectableMax: tQ,
        cappedNote: MQ,
        onChangeComplete: GQ
      } = QQ;
      const [pQ, cQ] = (0, LQ.useState)(vQ), CQ = (0, LQ.useRef)(vQ);
      (0, LQ.useEffect)((() => {
        CQ.current = vQ, cQ(vQ)
      }), [vQ]);
      const SQ = void 0 !== tQ && tQ < oQ,
        iQ = SQ ? {
          "--slider-selectable": (tQ - qQ) / (oQ - qQ)
        } : void 0;
      return (0, YQ.jsxs)("div", {
        className: mQ()("SettingBox SettingsSliderDiv", {
          [bQ]: bQ,
          SettingBoxDisabled: AQ,
          SliderCapped: SQ
        }),
        style: iQ,
        children: [(0, YQ.jsxs)("div", {
          className: "SliderText",
          children: [`${FQ}: ${HQ?HQ(pQ):pQ}`, uQ && (0, YQ.jsx)(DQ.b, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: uQ
          })]
        }), (0, YQ.jsx)("div", {
          className: "SliderDiv",
          children: (0, YQ.jsx)(eQ, {
            value: pQ,
            min: qQ,
            max: oQ,
            step: kQ,
            onChange: QQ => {
              if (SQ && QQ >= tQ && pQ === tQ) return;
              const FQ = SQ ? Math.min(QQ, tQ) : QQ;
              CQ.current = FQ, cQ(FQ), wQ(FQ)
            },
            onChangeComplete: GQ && (() => {
              GQ(CQ.current)
            }),
            format: HQ,
            padStep: xQ,
            disabled: AQ
          })
        }), SQ && MQ && (0, YQ.jsx)("div", {
          className: "SettingNote",
          children: MQ
        })]
      })
    }
    const tQ = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function eQ(QQ) {
      var FQ;
      let {
        value: wQ,
        min: oQ,
        max: DQ,
        step: kQ,
        onChange: vQ,
        orientation: mQ,
        reverse: uQ,
        setIsChanging: HQ,
        tooltip: xQ,
        labels: AQ,
        handleLabel: eQ,
        format: MQ,
        onChangeStart: GQ,
        onChangeComplete: pQ,
        padStep: cQ,
        disabled: CQ = !1
      } = QQ;
      const SQ = (0, LQ.useRef)(null),
        iQ = (0, LQ.useRef)(null);
      (0, LQ.useLayoutEffect)((() => {
        var QQ, FQ, wQ;
        const LQ = null !== (QQ = null === (FQ = SQ.current) || void 0 === FQ ? void 0 : FQ.querySelector(".rangeslider")) && void 0 !== QQ ? QQ : null;
        null === LQ || void 0 === LQ || LQ.setAttribute("data-pad-slider", ""), null === LQ || void 0 === LQ || LQ.setAttribute("data-pad-focusable", ""), null === LQ || void 0 === LQ || null === (wQ = LQ.querySelector(".rangeslider__handle")) || void 0 === wQ || wQ.setAttribute("data-pad-slider-handle", ""), iQ.current = LQ
      }), []), (0, LQ.useLayoutEffect)((() => {
        var QQ, FQ;
        CQ ? null === (QQ = iQ.current) || void 0 === QQ || QQ.setAttribute("aria-disabled", "true") : null === (FQ = iQ.current) || void 0 === FQ || FQ.removeAttribute("aria-disabled")
      }), [CQ]);
      const WQ = (null !== (FQ = String(kQ).split(".")[1]) && void 0 !== FQ ? FQ : "").length,
        RQ = QQ => {
          const FQ = Number((Math.round((QQ - oQ) / kQ) * kQ + oQ).toFixed(WQ));
          return Math.min(DQ, Math.max(oQ, FQ))
        },
        OQ = (0, LQ.useRef)(pQ);
      OQ.current = pQ, (0, LQ.useEffect)((() => {
        const QQ = SQ.current;
        if (!QQ) return;
        const FQ = QQ => {
          var FQ;
          tQ.has(QQ.key) && (null === (FQ = OQ.current) || void 0 === FQ || FQ.call(OQ))
        };
        return QQ.addEventListener("keyup", FQ), () => {
          QQ.removeEventListener("keyup", FQ)
        }
      }), []);
      const sQ = (0, LQ.useRef)(!1);
      return (0, bQ.c)(iQ, {
        adjust: QQ => {
          if (CQ) return;
          const FQ = null !== cQ && void 0 !== cQ ? cQ : Math.max(kQ, Math.round((DQ - oQ) / 20 / kQ) * kQ),
            LQ = RQ(wQ + QQ * FQ * (uQ ? -1 : 1));
          LQ !== wQ && (null === GQ || void 0 === GQ || GQ(), vQ(LQ), null === pQ || void 0 === pQ || pQ())
        },
        setFraction: QQ => {
          if (CQ) return;
          const FQ = RQ(oQ + (uQ ? 1 - QQ : QQ) * (DQ - oQ));
          FQ !== wQ && (sQ.current || (sQ.current = !0, null === GQ || void 0 === GQ || GQ()), vQ(FQ))
        },
        endDrag: () => {
          sQ.current && (sQ.current = !1, null === pQ || void 0 === pQ || pQ())
        }
      }), (0, YQ.jsx)("div", {
        ref: SQ,
        style: {
          display: "contents"
        },
        children: (0, YQ.jsx)(qQ.b, {
          value: wQ,
          min: oQ,
          max: DQ,
          step: kQ,
          onChange: vQ,
          orientation: mQ,
          reverse: uQ,
          tooltip: xQ,
          labels: AQ,
          handleLabel: eQ,
          format: MQ,
          onChangeStart: () => {
            null === GQ || void 0 === GQ || GQ(), null === HQ || void 0 === HQ || HQ(!0)
          },
          onChangeComplete: () => {
            null === HQ || void 0 === HQ || HQ(!1), null === pQ || void 0 === pQ || pQ()
          }
        })
      })
    }
    async function MQ() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      const FQ = uQ.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: "",
        unlockPointerKey: QQ
      });
      !0 === await FQ.getResult() && (0, HQ.reloadBloxd)()
    }

    function GQ(QQ) {
      let {
        label: FQ,
        options: wQ,
        value: LQ,
        onChange: qQ,
        circleInfoText: oQ
      } = QQ;
      return (0, YQ.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, YQ.jsxs)("div", {
          className: "SliderText",
          children: [FQ, oQ && (0, YQ.jsx)(DQ.b, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: oQ
          })]
        }), (0, YQ.jsx)(kQ.c, {
          ariaLabel: FQ,
          options: wQ,
          value: LQ,
          onChange: qQ
        })]
      })
    }
  },
  4834: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => eQ,
      f: () => MQ
    });
    var LQ = wQ(3045),
      qQ = wQ(3047),
      oQ = wQ(53),
      DQ = wQ(1070),
      kQ = wQ.n(DQ),
      vQ = wQ(1348),
      mQ = wQ(3037),
      uQ = wQ(1362),
      HQ = wQ(4837),
      bQ = wQ(4879),
      YQ = wQ(634),
      xQ = wQ(4884),
      AQ = wQ(1107);

    function tQ() {
      (0, HQ.h)("texturePackPickReload")
    }

    function eQ(QQ) {
      var FQ;
      let {
        setApplySettingsCallback: wQ
      } = QQ;
      const [, DQ] = (0, oQ.useReducer)((QQ => QQ + 1), 0), kQ = (0, oQ.useRef)(!1), vQ = (0, oQ.useRef)(null);

      function eQ(QQ, FQ) {
        mQ.b.setFromJson(QQ, "player");
        const LQ = mQ.b.saveTexturePack();
        if (YQ.s) {
          const QQ = mQ.b.toJson();
          LQ.then((FQ => {
            FQ && (0, xQ.i)(QQ, tQ)
          }))
        } else kQ.current ||= FQ, vQ.current !== mQ.b.getId() || mQ.b.getId() === qQ.s.CUSTOM && kQ.current ? wQ((() => HQ.h)) : wQ(null);
        DQ()
      }
      async function GQ(QQ) {
        if (mQ.b.getId() !== QQ.metaData.id) {
          if (mQ.b.getId() === qQ.s.CUSTOM && mQ.b.getFromFolderName()) {
            const QQ = uQ.NotificationProvider.showPromptPopup({
              title: "settingsMenu:loseChangesTitle",
              subtitle: "settingsMenu:loseChangesSubtitle",
              confirmText: "general:continue",
              destructive: !0,
              confirmTooltip: "",
              cancelText: "general:cancel",
              cancelTooltip: ""
            });
            if (!0 !== await QQ.getResult()) return
          }
          eQ(QQ, !1)
        }
      }(0, oQ.useEffect)((() => {
        vQ.current = mQ.b.getId()
      }), []);
      const pQ = LQ.c,
        cQ = [pQ, ...Object.values(qQ.s).filter((QQ => QQ !== pQ))];
      return (0, AQ.jsx)(AQ.Fragment, {
        children: (0, AQ.jsxs)("div", {
          className: "TexturePackCategory SettingsMenuRightInner",
          children: [(0, AQ.jsx)("div", {
            className: "TexturePackList",
            children: cQ.map((QQ => (0, AQ.jsx)(MQ, {
              id: QQ,
              isSelected: QQ === mQ.b.getId(),
              setSelected: GQ
            }, QQ)))
          }), mQ.b.getId() === qQ.s.CUSTOM && (0, AQ.jsx)(bQ.d, {
            folderName: null !== (FQ = mQ.b.getFromFolderName()) && void 0 !== FQ ? FQ : null,
            onTexturePackUpdated: function(QQ) {
              eQ(QQ, !0)
            },
            packOwner: "player"
          })]
        })
      })
    }

    function MQ(QQ) {
      let {
        id: FQ,
        isSelected: wQ,
        setSelected: DQ,
        disabled: mQ = !1
      } = QQ;
      const [uQ, HQ] = (0, oQ.useState)(!0), [bQ, YQ] = (0, oQ.useState)(""), [xQ, tQ] = (0, oQ.useState)(""), [eQ, MQ] = (0, oQ.useState)(""), GQ = (0, oQ.useRef)({});
      return (0, oQ.useEffect)((() => {
        (0, LQ.n)(FQ).then((QQ => {
          var FQ;
          QQ && (GQ.current = QQ, HQ(!1), YQ(GQ.current.metaData.name), tQ(GQ.current.metaData.author), MQ(null !== (FQ = GQ.current.metaData.previewImage) && void 0 !== FQ ? FQ : ""))
        })).catch((QQ => {
          console.warn(`Failed to fetch texture pack ${FQ}`, QQ)
        }))
      }), [FQ]), (0, AQ.jsxs)("div", {
        "data-pad-focusable": !0,
        "aria-disabled": mQ || void 0,
        className: kQ()("TexturePack", {
          Selected: wQ,
          Custom: FQ === qQ.s.CUSTOM,
          Disabled: mQ
        }),
        onClick: () => {
          uQ || mQ || DQ(GQ.current)
        },
        children: [(0, AQ.jsx)("div", {
          className: "TexturePackBg",
          style: {
            backgroundImage: eQ ? `url(${eQ})` : void 0
          }
        }), uQ && (0, AQ.jsx)("div", {
          className: "TexturePackName",
          children: (0, AQ.jsx)(vQ.c, {})
        }), !uQ && bQ && (0, AQ.jsx)("div", {
          className: "TexturePackName",
          children: bQ
        }), !uQ && xQ && (0, AQ.jsx)("div", {
          className: "TexturePackAuthor",
          children: xQ
        })]
      })
    }
  },
  4867: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => DQ
    });
    var LQ = wQ(1070),
      qQ = wQ.n(LQ),
      oQ = wQ(1107);

    function DQ(QQ) {
      let {
        options: FQ,
        value: wQ,
        onChange: LQ,
        ariaLabel: DQ,
        className: kQ,
        reselectable: vQ = !1,
        keepsFocus: mQ = !1,
        padTabs: uQ
      } = QQ;
      const HQ = void 0 !== uQ;
      return (0, oQ.jsx)("div", {
        className: qQ()("SegmentedToggle", kQ),
        role: "group",
        "aria-label": DQ,
        "data-pad-tabs": uQ,
        children: FQ.map((QQ => {
          const FQ = QQ.value === wQ;
          return (0, oQ.jsx)("button", {
            type: "button",
            "aria-pressed": FQ,
            "data-pad-tab": HQ || void 0,
            "data-pad-selected": HQ && FQ ? "true" : void 0,
            "data-pad-default-focus": HQ && FQ || void 0,
            "aria-label": QQ.ariaLabel,
            title: QQ.ariaLabel,
            className: qQ()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: FQ
            }),
            onMouseDown: mQ ? QQ => {
              QQ.preventDefault()
            } : void 0,
            onClick: () => {
              FQ && !vQ || LQ(QQ.value)
            },
            children: QQ.label
          }, QQ.value)
        }))
      })
    }
  },
  4875: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => oQ,
      c: () => DQ
    });
    var LQ = wQ(53);
    const qQ = new WeakMap,
      oQ = QQ => {
        var FQ;
        const wQ = QQ.closest("[data-pad-slider]");
        return wQ && null !== (FQ = qQ.get(wQ)) && void 0 !== FQ ? FQ : null
      },
      DQ = (QQ, FQ) => {
        const wQ = (0, LQ.useRef)(FQ);
        wQ.current = FQ, (0, LQ.useEffect)((() => {
          if (QQ.current) return ((QQ, FQ) => (qQ.set(QQ, FQ), () => {
            qQ.get(QQ) === FQ && qQ.delete(QQ)
          }))(QQ.current, {
            adjust: QQ => {
              wQ.current.adjust(QQ)
            },
            setFraction: QQ => {
              wQ.current.setFraction(QQ)
            },
            endDrag: () => {
              wQ.current.endDrag()
            }
          })
        }), [QQ])
      }
  },
  4884: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => kQ,
      i: () => DQ
    });
    var LQ = wQ(3047),
      qQ = wQ(4892);
    let oQ = null;

    function DQ(QQ, FQ) {
      oQ = {
        pack: QQ.metaData.id === LQ.d ? null : QQ,
        prompt: FQ
      }
    }

    function kQ(QQ, FQ) {
      const wQ = oQ;
      null !== wQ && (0, qQ.d)(wQ.pack, QQ) && (oQ = null, FQ && wQ.prompt())
    }
  },
  4892: (QQ, FQ, wQ) => {
    function LQ(QQ, FQ) {
      return qQ(QQ, FQ)
    }

    function qQ(QQ, FQ) {
      if (QQ === FQ) return !0;
      if ("object" !== typeof QQ || "object" !== typeof FQ || null === QQ || null === FQ || Array.isArray(QQ) !== Array.isArray(FQ)) return !1;
      const wQ = QQ,
        LQ = FQ,
        oQ = Object.keys(wQ);
      return oQ.length === Object.keys(LQ).length && oQ.every((QQ => Object.prototype.hasOwnProperty.call(LQ, QQ) && qQ(wQ[QQ], LQ[QQ])))
    }
    wQ.d(FQ, {
      d: () => LQ
    })
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);