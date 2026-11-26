export const id = 126;
export const ids = [126];
export const modules = {
  5478: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => uH,
      e: () => PH,
      f: () => QH,
      i: () => vH
    });
    var AH = LH(45),
      rH = LH(5485),
      SH = LH(4745),
      hH = LH(1365),
      tH = LH(5506),
      zH = LH(1038),
      CH = LH.n(zH),
      EH = LH(1352),
      XH = LH(1789),
      GH = LH(5513),
      YH = LH(1225);

    function uH(HH) {
      let {
        label: BH,
        onClick: LH,
        checked: AH,
        circleInfoText: rH,
        className: tH,
        disabled: zH,
        note: EH
      } = HH;
      return (0, YH.jsxs)("div", {
        "aria-disabled": zH || void 0,
        "data-pad-focusable": !0,
        className: CH()("SettingBox CheckboxContainer", {
          [tH]: tH,
          SettingBoxDisabled: zH
        }),
        onClick: () => {
          zH || LH(!AH)
        },
        children: [(0, YH.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, YH.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, YH.jsx)(SH.d, {
              className: "SettingsCheckbox",
              checked: AH,
              disabled: zH,
              onChange: () => {}
            })
          }), (0, YH.jsxs)("div", {
            className: "CheckboxText",
            children: [BH, rH && (0, YH.jsx)("span", {
              onClick: HH => HH.stopPropagation(),
              children: (0, YH.jsx)(hH.e, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: rH
              })
            })]
          })]
        }), EH && (0, YH.jsx)("div", {
          className: "SettingNote",
          children: EH
        })]
      })
    }

    function QH(HH) {
      let {
        name: BH,
        onChange: LH,
        min: rH,
        max: SH,
        step: tH,
        initValue: zH,
        circleInfoText: EH,
        format: XH,
        className: GH,
        padStep: uH,
        disabled: QH = !1,
        selectableMax: WH,
        cappedNote: MH,
        note: vH,
        onChangeComplete: PH
      } = HH;
      const [TH, UH] = (0, AH.useState)(zH), VH = (0, AH.useRef)(zH);
      (0, AH.useEffect)((() => {
        VH.current = zH, UH(zH)
      }), [zH]);
      const OH = void 0 !== WH && WH < SH,
        bH = OH ? {
          "--slider-selectable": (WH - rH) / (SH - rH)
        } : void 0,
        kH = OH && MH ? MH : vH;
      return (0, YH.jsxs)("div", {
        className: CH()("SettingBox SettingsSliderDiv", {
          [GH]: GH,
          SettingBoxDisabled: QH,
          SliderCapped: OH
        }),
        style: bH,
        children: [(0, YH.jsxs)("div", {
          className: "SliderText",
          children: [`${BH}: ${XH?XH(TH):TH}`, EH && (0, YH.jsx)(hH.e, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: EH
          })]
        }), (0, YH.jsx)("div", {
          className: "SliderDiv",
          children: (0, YH.jsx)(xH, {
            value: TH,
            min: rH,
            max: SH,
            step: tH,
            onChange: HH => {
              if (OH && HH >= WH && TH === WH) return;
              const BH = OH ? Math.min(HH, WH) : HH;
              VH.current = BH, UH(BH), LH(BH)
            },
            onChangeComplete: PH && (() => {
              PH(VH.current)
            }),
            format: XH,
            padStep: uH,
            disabled: QH
          })
        }), kH && (0, YH.jsx)("div", {
          className: "SettingNote",
          children: kH
        })]
      })
    }
    const WH = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function MH(HH) {
      var BH;
      return (null !== (BH = String(HH).split(".")[1]) && void 0 !== BH ? BH : "").length
    }

    function xH(HH) {
      let {
        value: BH,
        min: LH,
        max: SH,
        step: hH,
        onChange: tH,
        orientation: zH,
        reverse: CH,
        setIsChanging: EH,
        tooltip: XH,
        labels: uH,
        handleLabel: QH,
        format: xH,
        onChangeStart: vH,
        onChangeComplete: PH,
        padStep: TH,
        disabled: UH = !1
      } = HH;
      const VH = (0, AH.useRef)(null),
        OH = (0, AH.useRef)(null);
      (0, AH.useLayoutEffect)((() => {
        var HH, BH, LH;
        const AH = null !== (HH = null === (BH = VH.current) || void 0 === BH ? void 0 : BH.querySelector(".rangeslider")) && void 0 !== HH ? HH : null;
        null === AH || void 0 === AH || AH.setAttribute("data-pad-slider", ""), null === AH || void 0 === AH || AH.setAttribute("data-pad-focusable", ""), null === AH || void 0 === AH || null === (LH = AH.querySelector(".rangeslider__handle")) || void 0 === LH || LH.setAttribute("data-pad-slider-handle", ""), OH.current = AH
      }), []), (0, AH.useLayoutEffect)((() => {
        var HH, BH;
        UH ? null === (HH = OH.current) || void 0 === HH || HH.setAttribute("aria-disabled", "true") : null === (BH = OH.current) || void 0 === BH || BH.removeAttribute("aria-disabled")
      }), [UH]);
      const bH = Math.max(MH(hH), MH(LH)),
        kH = HH => {
          if (HH >= SH) return SH;
          if (HH <= LH) return LH;
          const BH = Number((Math.round((HH - LH) / hH) * hH + LH).toFixed(bH));
          return Math.min(SH, Math.max(LH, BH))
        },
        mH = (0, AH.useRef)(PH);
      mH.current = PH, (0, AH.useEffect)((() => {
        const HH = VH.current;
        if (!HH) return;
        const BH = HH => {
          var BH;
          WH.has(HH.key) && (null === (BH = mH.current) || void 0 === BH || BH.call(mH))
        };
        return HH.addEventListener("keyup", BH), () => {
          HH.removeEventListener("keyup", BH)
        }
      }), []);
      const oH = (0, AH.useRef)(!1);
      return (0, GH.h)(OH, {
        adjust: HH => {
          if (UH) return;
          const AH = null !== TH && void 0 !== TH ? TH : Math.max(hH, Math.round((SH - LH) / 20 / hH) * hH),
            rH = kH(BH + HH * AH * (CH ? -1 : 1));
          rH !== BH && (null === vH || void 0 === vH || vH(), tH(rH), null === PH || void 0 === PH || PH())
        },
        setFraction: HH => {
          if (UH) return;
          const AH = kH(LH + (CH ? 1 - HH : HH) * (SH - LH));
          AH !== BH && (oH.current || (oH.current = !0, null === vH || void 0 === vH || vH()), tH(AH))
        },
        endDrag: () => {
          oH.current && (oH.current = !1, null === PH || void 0 === PH || PH())
        }
      }), (0, YH.jsx)("div", {
        ref: VH,
        style: {
          display: "contents"
        },
        children: (0, YH.jsx)(rH.c, {
          value: BH,
          min: LH,
          max: SH,
          step: hH,
          onChange: HH => {
            tH(kH(HH))
          },
          orientation: zH,
          reverse: CH,
          tooltip: XH,
          labels: uH,
          handleLabel: QH,
          format: xH,
          onChangeStart: () => {
            null === vH || void 0 === vH || vH(), null === EH || void 0 === EH || EH(!0)
          },
          onChangeComplete: () => {
            null === EH || void 0 === EH || EH(!1), null === PH || void 0 === PH || PH()
          }
        })
      })
    }
    async function vH() {
      const HH = EH.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await HH.getResult() && (0, XH.reloadBloxd)()
    }

    function PH(HH) {
      let {
        label: BH,
        options: LH,
        value: AH,
        onChange: rH,
        circleInfoText: SH
      } = HH;
      return (0, YH.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, YH.jsxs)("div", {
          className: "SliderText",
          children: [BH, SH && (0, YH.jsx)(hH.e, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: SH
          })]
        }), (0, YH.jsx)(tH.b, {
          ariaLabel: BH,
          options: LH,
          value: AH,
          onChange: rH
        })]
      })
    }
  },
  7216: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      default: () => iH
    });
    var AH = LH(45),
      rH = LH(1520),
      SH = LH(7114),
      hH = LH(1168),
      tH = LH(317),
      zH = LH(1543),
      CH = LH(1313),
      EH = LH(1509),
      XH = LH(1455),
      GH = LH(1365),
      YH = LH(1631),
      uH = LH(2833),
      QH = LH(2968),
      WH = LH(4961),
      MH = LH(1061),
      xH = LH(1502),
      vH = LH(81),
      PH = LH(1123);
    const TH = LH.p + "static/media/bloxdhubLogo.6a6c367af2ad6e6f1eb3.webp";
    var UH = LH(1038),
      VH = LH.n(UH),
      OH = LH(1315),
      bH = LH(1352),
      kH = LH(7111),
      mH = LH(1225);
    const oH = (0, AH.lazy)((() => Promise.all([LH.e(120), LH.e(89), LH.e(149), LH.e(148), LH.e(127), LH.e(706)]).then((() => LH(7149))).then((HH => ({
      default: HH.ShaderPackPublishForm
    })))));

    function IH(HH) {
      let {
        details: BH,
        owner: LH,
        onChanged: rH
      } = HH;
      const {
        t: hH
      } = (0, PH.B)(), tH = (0, EH.useNavigatePreserveSearch)(), {
        userContext: zH
      } = (0, MH.e)(), [GH, YH] = (0, AH.useState)(!1), [uH, QH] = (0, AH.useState)(null), [WH, vH] = (0, AH.useState)(!1), {
        packId: TH,
        name: UH,
        description: IH,
        live: fH
      } = BH;
      async function lH(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rH;
        YH(!0), QH(null);
        try {
          await HH(), BH()
        } catch (LH) {
          console.error("Failed to change a shader pack", LH), QH((0, kH.s)(LH, hH, "shaderPackListing:ownerActionFailed"))
        } finally {
          YH(!1)
        }
      }
      const KH = (0, kH.p)(zH);
      return (0, mH.jsxs)("section", {
        className: "ShaderPackOwnerPanel",
        children: [(0, mH.jsx)("h2", {
          className: "ShaderPackSectionTitle",
          children: hH("general:manage")
        }), (0, kH.R)(LH, !(null === fH || void 0 === fH || !fH.renderId), Date.now(), hH).map((HH => (0, mH.jsxs)("div", {
          className: VH()("ShaderPackOwnerNotice", {
            Warning: "warning" === HH.tone
          }),
          children: [(0, mH.jsx)(OH.c, {
            name: "warning" === HH.tone ? "triangle-exclamation" : "circle-info"
          }), (0, mH.jsxs)("div", {
            children: [HH.text, HH.detail && (0, mH.jsx)("pre", {
              className: "ShaderPackOwnerNoticeDetail",
              children: HH.detail
            })]
          })]
        }, HH.text))), BH.ban && (0, mH.jsxs)("div", {
          className: "ShaderPackOwnerNotice Warning",
          children: [(0, mH.jsx)(OH.c, {
            name: "ban"
          }), (0, mH.jsxs)("div", {
            children: ["Banned by ", BH.ban.byName, " on ", new Date(BH.ban.at).toLocaleString()]
          })]
        }), uH && (0, mH.jsx)("div", {
          className: "ShaderPackOwnerError",
          children: uH
        }), (0, mH.jsxs)("div", {
          className: "ShaderPackOwnerActions",
          children: [(0, mH.jsxs)(XH.W, {
            disabled: GH,
            onClick: () => {
              !async function() {
                const HH = await bH.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:renameTitle",
                  initialValue: UH,
                  maxLength: SH.F,
                  submitText: "general:save",
                  validate: HH => HH.trim().length < SH.H ? hH("shaderPackListing:nameTooShort", {
                    min: String(SH.H)
                  }) : null
                }).getResult();
                "notificationTornDown" !== HH && "submit" === (null === HH || void 0 === HH ? void 0 : HH.type) && HH.value.trim() !== UH && await lH((() => xH.d.updateShaderPack(zH, {
                  packId: TH,
                  name: HH.value.trim()
                })))
              }()
            },
            children: [(0, mH.jsx)(OH.c, {
              name: "pen"
            }), " ", hH("shaderPackListing:rename")]
          }), (0, mH.jsxs)(XH.W, {
            disabled: GH,
            onClick: () => {
              !async function() {
                const HH = await bH.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:editDescription",
                  initialValue: IH,
                  maxLength: SH.v,
                  multiline: !0,
                  allowEmptySubmit: !0,
                  submitText: "general:save"
                }).getResult();
                "notificationTornDown" !== HH && "submit" === (null === HH || void 0 === HH ? void 0 : HH.type) && HH.value.trim() !== IH && await lH((() => xH.d.updateShaderPack(zH, {
                  packId: TH,
                  description: HH.value.trim()
                })))
              }()
            },
            children: [(0, mH.jsx)(OH.c, {
              name: "file-lines"
            }), " ", hH("shaderPackListing:editDescription")]
          }), (0, mH.jsxs)(XH.W, {
            disabled: GH || LH.isBanned && !LH.listed,
            onClick: () => {
              lH((() => xH.d.updateShaderPack(zH, {
                packId: TH,
                listed: !LH.listed
              })))
            },
            children: [(0, mH.jsx)(OH.c, {
              name: LH.listed ? "eye-slash" : "eye"
            }), " ", hH(LH.listed ? "shaderPackListing:unlist" : "shaderPackListing:relist")]
          }), !LH.isBanned && (0, mH.jsxs)(XH.i, {
            disabled: GH,
            onClick: () => {
              vH(!WH)
            },
            children: [(0, mH.jsx)(OH.c, {
              name: "upload"
            }), " ", hH("shaderPackListing:uploadVersion")]
          }), (0, mH.jsxs)(XH.S, {
            disabled: GH || LH.isBanned,
            onClick: () => {
              !async function() {
                !0 === await bH.NotificationProvider.showPromptPopup({
                  title: "shaderPackListing:deleteTitle",
                  subtitle: "shaderPackListing:deleteSubtitle",
                  confirmText: "general:delete",
                  cancelText: "general:cancel",
                  destructive: !0
                }).getResult() && await lH((() => xH.d.deleteShaderPack(zH, TH)), (() => {
                  tH(`${kH.P}?section=mine`, {
                    replace: !0
                  })
                }))
              }()
            },
            children: [(0, mH.jsx)(OH.c, {
              name: "trash-can"
            }), " ", hH("general:delete")]
          }), KH && (0, mH.jsxs)(XH.S, {
            disabled: GH,
            onClick: () => {
              lH((() => xH.d.setShaderPackBanned(zH, TH, !LH.isBanned)))
            },
            children: [(0, mH.jsx)(OH.c, {
              name: LH.isBanned ? "circle-check" : "ban"
            }), " ", LH.isBanned ? "Unban" : "Ban"]
          })]
        }), WH && (0, mH.jsx)(AH.Suspense, {
          fallback: (0, mH.jsx)(CH.d, {}),
          children: (0, mH.jsx)(oH, {
            existing: {
              packId: TH,
              name: UH,
              description: IH
            },
            onPublished: () => {
              vH(!1), rH()
            }
          })
        })]
      })
    }
    var fH = LH(69),
      lH = LH(1962),
      KH = LH(1214),
      cH = LH(5513),
      eH = LH(1131),
      qH = LH(7129),
      gH = LH(7121),
      NH = LH(7141);

    function RH(HH) {
      let {
        item: BH
      } = HH;
      const {
        t: LH
      } = (0, PH.B)(), [rH] = (0, qH.i)(), [hH, tH] = (0, AH.useState)(rH), [zH, CH] = (0, AH.useState)(!1), [EH, XH] = (0, AH.useState)(!1), {
        s3Url: GH
      } = eH.clientSideServerUrls, {
        width: YH,
        height: uH
      } = SH.w.large, QH = (0, SH.x)(GH, BH, hH, "large"), {
        renderVersion: WH
      } = BH;
      return (0, mH.jsxs)("div", {
        className: "ShaderPackPreviews",
        children: [(0, mH.jsx)(NH.d, {
          selected: hH,
          onSelect: HH => {
            tH(HH), CH(!1)
          },
          imageUrl: HH => (0, SH.x)(GH, BH, HH, "thumb")
        }), (0, mH.jsxs)("div", {
          className: "ShaderPackPreviewStage",
          children: [!zH && (0, mH.jsxs)("button", {
            type: "button",
            className: "ShaderPackPreviewMain",
            title: null === WH ? void 0 : LH("shaderPackListing:fullSize"),
            disabled: null === WH,
            onClick: () => {
              XH(!0)
            },
            children: [(0, mH.jsx)("img", {
              src: QH,
              width: YH,
              height: uH,
              alt: LH(kH._[hH]),
              draggable: !1
            }), (0, mH.jsx)(gH.d, {
              item: BH
            })]
          }), !zH && null !== WH && (0, mH.jsxs)(DH, {
            side: "Right",
            onClick: () => {
              CH(!0)
            },
            children: [(0, mH.jsx)(OH.c, {
              name: "arrows-left-right"
            }), " ", LH("shaderPackListing:compare")]
          }), zH && null !== WH && (0, mH.jsx)(FH, {
            item: BH,
            packUrl: QH,
            baselineUrl: (0, SH.s)(GH, WH, hH, "large")
          }), zH && (0, mH.jsx)(DH, {
            side: "Left",
            onClick: () => {
              CH(!1)
            },
            children: LH("shaderPackListing:withPack")
          }), zH && (0, mH.jsx)(DH, {
            side: "Right",
            onClick: () => {
              CH(!1)
            },
            children: LH("shaderPackListing:withoutPack")
          })]
        }), EH && (0, mH.jsx)(jH, {
          fullUrl: (0, SH.x)(GH, BH, hH, "full"),
          largeUrl: QH,
          alt: LH(kH._[hH]),
          onClose: () => {
            XH(!1)
          }
        })]
      })
    }

    function jH(HH) {
      let {
        fullUrl: BH,
        largeUrl: LH,
        alt: rH,
        onClose: SH
      } = HH;
      const hH = (0, AH.useRef)(null);
      return (0, KH.r)("popup", hH, SH), (0, AH.useEffect)((() => {
        function HH(HH) {
          "Escape" === HH.key && (HH.stopPropagation(), SH())
        }
        return window.addEventListener("keydown", HH, !0), () => {
          window.removeEventListener("keydown", HH, !0)
        }
      }), [SH]), (0, fH.createPortal)((0, mH.jsxs)("div", {
        ref: hH,
        className: "ShaderPackFullSize",
        onClick: SH,
        children: [(0, mH.jsx)("img", {
          className: "ShaderPackFullSizeImage",
          src: BH,
          alt: rH,
          draggable: !1,
          style: {
            backgroundImage: `url(${LH})`
          }
        }), (0, mH.jsx)(XH.q, {
          className: "ShaderPackFullSizeClose",
          onClick: SH
        })]
      }), document.body)
    }
    const nH = 5;

    function FH(HH) {
      let {
        item: BH,
        packUrl: LH,
        baselineUrl: rH
      } = HH;
      const {
        t: hH
      } = (0, PH.B)(), [tH, zH] = (0, AH.useState)(50), CH = (0, AH.useRef)(!1), EH = (0, AH.useRef)(null), {
        width: XH,
        height: GH
      } = SH.w.large;

      function YH(HH) {
        zH((BH => (0, lH.f)(BH + HH, 0, 100)))
      }

      function uH(HH) {
        const BH = HH.currentTarget.getBoundingClientRect();
        zH((0, lH.f)((HH.clientX - BH.left) / BH.width * 100, 0, 100))
      }
      return (0, cH.h)(EH, {
        adjust: HH => {
          YH(HH * nH)
        },
        setFraction: HH => {
          zH(100 * HH)
        },
        endDrag: () => {}
      }), (0, mH.jsxs)("div", {
        ref: EH,
        className: "ShaderPackCompare",
        "data-pad-slider": "",
        "data-pad-focusable": "",
        role: "slider",
        tabIndex: 0,
        "aria-label": hH("shaderPackListing:compare"),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(tH),
        style: {
          "--split": `${tH}%`
        },
        onKeyDown: function(HH) {
          const BH = "ArrowLeft" === HH.key ? -nH : "ArrowRight" === HH.key ? nH : 0;
          0 !== BH && (HH.preventDefault(), YH(BH))
        },
        onPointerDown: HH => {
          CH.current = !0, HH.currentTarget.setPointerCapture(HH.pointerId), uH(HH)
        },
        onPointerMove: HH => {
          CH.current && uH(HH)
        },
        onPointerUp: () => {
          CH.current = !1
        },
        onPointerCancel: () => {
          CH.current = !1
        },
        children: [(0, mH.jsx)("img", {
          className: "ShaderPackCompareBaseline",
          src: rH,
          width: XH,
          height: GH,
          alt: "",
          draggable: !1,
          style: {
            backgroundImage: `url(${LH})`
          }
        }), (0, mH.jsx)("div", {
          className: "ShaderPackCompareLine"
        }), (0, mH.jsx)("img", {
          className: "ShaderPackComparePack",
          src: LH,
          width: XH,
          height: GH,
          alt: "",
          draggable: !1
        }), (0, mH.jsx)(gH.d, {
          item: BH,
          className: "ShaderPackCompareNotice"
        })]
      })
    }

    function DH(HH) {
      let {
        side: BH,
        onClick: LH,
        children: AH
      } = HH;
      return (0, mH.jsx)("button", {
        type: "button",
        className: `ShaderPackStageButton ${BH}`,
        onClick: LH,
        children: (0, mH.jsx)("span", {
          className: "ShaderPackStageButtonFace SmallTextBold",
          children: AH
        })
      })
    }
    var wH = LH(5478),
      ZH = LH(293),
      dH = LH(7209);
    const aH = {
      compiler: "shaderPack:compilerUnavailable",
      download: "shaderPackListing:useDownloadFailed",
      apiVersion: "shaderPackListing:useOtherApiVersion",
      invalid: "shaderPackListing:useInvalid",
      errors: "shaderPackListing:useFailsHere",
      save: "shaderPack:saveFailed"
    };

    function sH(HH) {
      const {
        userContext: BH
      } = (0, MH.e)(), [rH, SH] = (0, AH.useState)(null), [hH, tH] = (0, AH.useState)(!1), [zH, CH] = (0, AH.useState)(!1), [EH, XH] = (0, AH.useState)(null), GH = null === HH || void 0 === HH ? void 0 : HH.packId, YH = null === HH || void 0 === HH ? void 0 : HH.sourceHash;
      return (0, AH.useEffect)((() => {
        if (tH(!1), XH(null), void 0 === GH) return;
        let HH = !1;
        return Promise.all([(0, vH.hasUsableWebGpuAdapter)(), (0, dH.e)()]).then((BH => {
          let [LH, AH] = BH;
          var rH;
          HH || (SH(LH), tH((null === AH || void 0 === AH || null === (rH = AH.listing) || void 0 === rH ? void 0 : rH.packId) === GH && AH.listing.sourceHash === YH))
        })).catch((BH => {
          console.error("Failed to check whether this shader pack can be used", BH), HH || SH(!1)
        })), () => {
          HH = !0
        }
      }), [GH, YH]), {
        webGpuUsable: rH,
        inUse: hH,
        busy: zH,
        errorKey: EH,
        use: () => {
          null !== HH && async function(HH) {
            CH(!0), XH(null);
            try {
              const {
                installListedShaderPack: AH
              } = await Promise.all([LH.e(89), LH.e(149), LH.e(128)]).then((() => LH(41811))), rH = await AH({
                packId: HH.packId,
                sourceHash: HH.sourceHash,
                name: HH.name,
                ownerName: HH.ownerName,
                description: HH.description
              });
              if ("failed" === rH.kind) return void XH(aH[rH.reason]);
              tH(!0), xH.d.recordShaderPackDownload(BH, HH.packId).catch((HH => {
                console.error("Failed to count a shader pack's download", HH)
              })), (0, wH.i)()
            } catch (AH) {
              console.error("Failed to use the shader pack", AH), XH("shaderPack:unexpectedError")
            } finally {
              CH(!1)
            }
          }(HH)
        }
      }
    }

    function JH(HH) {
      let {
        packUse: BH
      } = HH;
      const {
        t: LH
      } = (0, PH.B)(), {
        webGpuUsable: AH,
        inUse: rH,
        busy: SH,
        errorKey: hH,
        use: tH
      } = BH;
      return (0, mH.jsxs)("div", {
        className: "ShaderPackUse",
        children: [(0, mH.jsxs)(XH.u, {
          disabled: !0 !== AH || rH,
          loading: SH,
          onClick: tH,
          children: [(0, mH.jsx)(OH.c, {
            name: rH ? "check" : "download"
          }), " ", LH(rH ? "shaderPackListing:inUse" : "shaderPackListing:use")]
        }), !1 === AH && (0, mH.jsx)("div", {
          className: "ShaderPackUseNote",
          children: LH((0, ZH.l)() ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), hH && (0, mH.jsx)("div", {
          className: "ShaderPackUseNote Error",
          children: LH(hH)
        })]
      })
    }

    function iH() {
      var HH;
      const {
        t: BH
      } = (0, PH.B)(), LH = (0, EH.useNavigatePreserveSearch)(), {
        packId: SH
      } = (0, rH.A)(), {
        userContext: hH,
        isUserContextUpdating: tH
      } = (0, MH.e)(), [GH, uH] = (0, AH.useState)(null), [QH, vH] = (0, AH.useState)(null), [TH, UH] = (0, AH.useState)(0), VH = (0, AH.useRef)(0);

      function OH() {
        var HH;
        null !== (HH = (0, EH.getPreviousLocation)()) && void 0 !== HH && HH.startsWith(kH.P) ? LH(-1) : LH(kH.P)
      }(0, WH.c)(OH), (0, qH.d)(), (0, AH.useEffect)((() => {
        if (tH || void 0 === SH) return;
        const HH = ++VH.current;
        vH(null), xH.d.getShaderPack(hH, SH).then((BH => {
          VH.current === HH && uH(BH)
        })).catch((BH => {
          VH.current === HH && (console.error("Failed to get the shader pack", BH), uH(null), vH({
            error: BH
          }))
        }))
      }), [SH, hH, tH, TH]);
      const bH = () => {
          UH((HH => HH + 1))
        },
        oH = (null === GH || void 0 === GH ? void 0 : GH.packId) === SH ? GH : null,
        fH = (0, qH.k)(),
        lH = sH(null !== (HH = null === oH || void 0 === oH ? void 0 : oH.live) && void 0 !== HH ? HH : null),
        KH = null !== oH && void 0 !== oH && oH.live ? (0, mH.jsx)(pH, {
          item: oH.live,
          favourites: fH,
          packUse: lH
        }) : null;
      return (0, mH.jsxs)("article", {
        className: "ShaderPackInformation AnimFadeIn",
        children: [null !== oH && (0, mH.jsx)(YH.c, {
          meta: (0, zH.Y)(oH.name)
        }), (0, mH.jsx)(XH.e, {
          onClick: OH,
          children: BH("shaderPackListing:backToPacks")
        }), null === oH && null === QH && (0, mH.jsx)("div", {
          className: "ShaderPackInformationMessage",
          children: (0, mH.jsx)(CH.d, {})
        }), null !== QH && (0, mH.jsxs)("div", {
          className: "ShaderPackInformationMessage",
          children: [(0, kH.s)(QH.error, BH, "shaderPackListing:loadPackFailed"), (0, mH.jsx)(XH.i, {
            onClick: bH,
            children: BH("general:tryAgain")
          })]
        }), null !== oH && null === QH && (0, mH.jsxs)("div", {
          className: "ShaderPackInformationBody",
          children: [(0, mH.jsxs)("header", {
            className: "ShaderPackInformationHeader",
            children: [(0, mH.jsx)("h1", {
              className: "FullyFancyText",
              children: oH.name
            }), KH]
          }), oH.live && (0, mH.jsx)(RH, {
            item: oH.live
          }), oH.live && (0, mH.jsx)(yH, {
            item: oH.live,
            ownerPreview: oH.ownerPreview,
            bloxdhubSlug: oH.bloxdhubSlug,
            actions: KH
          }), oH.owner && (0, mH.jsx)(IH, {
            details: oH,
            owner: oH.owner,
            onChanged: bH
          })]
        })]
      })
    }

    function pH(HH) {
      let {
        item: BH,
        favourites: LH,
        packUse: AH
      } = HH;
      const rH = LH.isFavourite(BH.packId);
      return (0, mH.jsxs)("div", {
        className: "ShaderPackInformationActions",
        children: [vH.featureFlags.settings.canUseShaderPacks && (0, mH.jsx)(JH, {
          packUse: AH
        }), (0, mH.jsx)(XH.C, {
          className: "ShaderPackInformationLike",
          onClick: () => {
            LH.toggle(BH.packId)
          },
          isLiked: !0 === rH,
          isLoading: null === rH
        })]
      })
    }

    function yH(HH) {
      let {
        item: BH,
        ownerPreview: LH,
        bloxdhubSlug: AH,
        actions: rH
      } = HH;
      const {
        t: tH
      } = (0, PH.B)(), zH = (0, QH.s)(), CH = null === AH ? null : (0, SH.g)(AH);
      return (0, mH.jsxs)("div", {
        className: "ShaderPackFacts",
        children: [BH.description && (0, mH.jsx)("p", {
          className: "ShaderPackDescription",
          children: BH.description
        }), (0, mH.jsxs)("div", {
          className: "ShaderPackFeatureList",
          children: [(null !== LH || null !== CH) && (0, mH.jsx)("div", {
            className: "ShaderPackAuthor",
            children: null !== LH ? (0, mH.jsxs)(mH.Fragment, {
              children: [(0, mH.jsx)(uH.g, {
                playerSocialPreview: LH,
                showLocation: !1,
                linkToProfile: !0
              }), null !== CH && (0, mH.jsx)("a", {
                className: "ShaderPackBloxdhubLogo",
                href: CH,
                target: "_blank",
                rel: "noopener noreferrer",
                children: (0, mH.jsx)("img", {
                  src: TH,
                  alt: SH.d
                })
              })]
            }) : (0, mH.jsxs)("a", {
              className: "ShaderPackBloxdhubName",
              href: CH,
              target: "_blank",
              rel: "noopener noreferrer",
              children: [SH.d, (0, mH.jsx)("img", {
                src: TH,
                alt: ""
              })]
            })
          }), kH.w.filter((HH => BH.features.includes(HH))).map((HH => (0, mH.jsx)(EH.LinkPreserveSearch, {
            className: "ShaderPackFeature",
            to: (0, kH.I)(HH),
            children: tH(kH.L[HH])
          }, HH)))]
        }), rH, (0, mH.jsxs)("dl", {
          className: "ShaderPackFactList",
          children: [(0, mH.jsxs)("div", {
            children: [(0, mH.jsx)("dt", {
              children: tH("shaderPackListing:downloads")
            }), (0, mH.jsx)("dd", {
              children: (0, hH.T)(BH.downloads)
            })]
          }), (0, mH.jsx)(HB, {
            label: tH("shaderPackListing:updated"),
            time: BH.listedUpdatedAt,
            now: zH
          }), (0, mH.jsx)(HB, {
            label: tH("shaderPackListing:created"),
            time: BH.publishedAt,
            now: zH
          }), null !== BH.gpuCost && (0, mH.jsxs)("div", {
            children: [(0, mH.jsx)("dt", {
              children: tH("shaderPackListing:lag")
            }), (0, mH.jsx)("dd", {
              children: tH("shaderPackListing:lagPercent", {
                percent: String((0, kH.N)(BH.gpuCost))
              })
            })]
          }), (0, mH.jsxs)("div", {
            children: [(0, mH.jsx)("dt", {
              children: tH("shaderPackListing:size")
            }), (0, mH.jsx)("dd", {
              children: tH("shaderPackListing:sizeValue", {
                kilobytes: String((0, kH.M)(BH.sourceBytes))
              })
            })]
          }), (0, mH.jsxs)("div", {
            children: [(0, mH.jsx)("dt", {
              children: tH("shaderPackListing:files")
            }), (0, mH.jsx)("dd", {
              children: BH.fileCount
            })]
          })]
        })]
      })
    }

    function HB(HH) {
      let {
        label: BH,
        time: LH,
        now: AH
      } = HH;
      const {
        t: rH,
        selectedLanguage: SH
      } = (0, PH.B)(), hH = new Date(LH);
      let zH = hH.toLocaleDateString();
      if (AH - LH <= 30 * tH.j) {
        const HH = (0, PH.n)(SH.code, "shaderPackListing:timeAgo");
        zH = rH("shaderPackListing:timeAgo", {
          time: (0, tH._)(HH, LH, AH)
        })
      }
      return (0, mH.jsx)(GH.g, {
        tooltipInner: hH.toLocaleString(),
        children: (0, mH.jsxs)("div", {
          children: [(0, mH.jsx)("dt", {
            children: BH
          }), (0, mH.jsx)("dd", {
            children: zH
          })]
        })
      })
    }
  },
  5506: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => hH
    });
    var AH = LH(1038),
      rH = LH.n(AH),
      SH = LH(1225);

    function hH(HH) {
      let {
        options: BH,
        value: LH,
        onChange: AH,
        ariaLabel: hH,
        className: tH,
        reselectable: zH = !1,
        keepsFocus: CH = !1,
        padTabs: EH
      } = HH;
      const XH = void 0 !== EH;
      return (0, SH.jsx)("div", {
        className: rH()("SegmentedToggle", tH),
        role: "group",
        "aria-label": hH,
        "data-pad-tabs": EH,
        children: BH.map((HH => {
          const BH = HH.value === LH;
          return (0, SH.jsx)("button", {
            type: "button",
            "aria-pressed": BH,
            "data-pad-tab": XH || void 0,
            "data-pad-selected": XH && BH ? "true" : void 0,
            "data-pad-default-focus": XH && BH || void 0,
            "aria-label": HH.ariaLabel,
            title: HH.ariaLabel,
            className: rH()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: BH
            }),
            onMouseDown: CH ? HH => {
              HH.preventDefault()
            } : void 0,
            onClick: () => {
              BH && !zH || AH(HH.value)
            },
            children: HH.label
          }, HH.value)
        }))
      })
    }
  },
  5513: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => SH,
      h: () => hH
    });
    var AH = LH(45);
    const rH = new WeakMap,
      SH = HH => {
        var BH;
        const LH = HH.closest("[data-pad-slider]");
        return LH && null !== (BH = rH.get(LH)) && void 0 !== BH ? BH : null
      },
      hH = (HH, BH) => {
        const LH = (0, AH.useRef)(BH);
        LH.current = BH, (0, AH.useEffect)((() => {
          if (HH.current) return ((HH, BH) => (rH.set(HH, BH), () => {
            rH.get(HH) === BH && rH.delete(HH)
          }))(HH.current, {
            adjust: HH => {
              LH.current.adjust(HH)
            },
            setFraction: HH => {
              LH.current.setFraction(HH)
            },
            endDrag: () => {
              LH.current.endDrag()
            }
          })
        }), [HH])
      }
  },
  7209: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => rH,
      e: () => SH
    });
    var AH = LH(30);
    const rH = "shaderPack";
    async function SH() {
      var HH;
      let BH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (HH = await AH.c.getItem(rH, BH)) && void 0 !== HH ? HH : null
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);