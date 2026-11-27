export const id = 134;
export const ids = [134];
export const modules = {
  5910: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => AW,
      h: () => MW,
      k: () => bW,
      n: () => sW
    });
    var mW = OW(62),
      EW = OW(5919),
      NW = OW(5041),
      PW = OW(1434),
      LW = OW(4171),
      cW = OW(1089),
      wW = OW.n(cW),
      tW = OW(1422),
      ZW = OW(1856),
      xW = OW(5940),
      lW = OW(1283);

    function AW(WW) {
      let {
        label: iW,
        onClick: OW,
        checked: mW,
        circleInfoText: EW,
        className: LW,
        disabled: cW,
        note: tW
      } = WW;
      return (0, lW.jsxs)("div", {
        "aria-disabled": cW || void 0,
        "data-pad-focusable": !0,
        className: wW()("SettingBox CheckboxContainer", {
          [LW]: LW,
          SettingBoxDisabled: cW
        }),
        onClick: () => {
          cW || OW(!mW)
        },
        children: [(0, lW.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, lW.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, lW.jsx)(NW.e, {
              className: "SettingsCheckbox",
              checked: mW,
              disabled: cW,
              onChange: () => {}
            })
          }), (0, lW.jsxs)("div", {
            className: "CheckboxText",
            children: [iW, EW && (0, lW.jsx)("span", {
              onClick: WW => WW.stopPropagation(),
              children: (0, lW.jsx)(PW.d, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: EW
              })
            })]
          })]
        }), tW && (0, lW.jsx)("div", {
          className: "SettingNote",
          children: tW
        })]
      })
    }

    function bW(WW) {
      let {
        name: iW,
        onChange: OW,
        min: EW,
        max: NW,
        step: LW,
        initValue: cW,
        circleInfoText: tW,
        format: ZW,
        className: xW,
        padStep: AW,
        disabled: bW = !1,
        selectableMax: jW,
        cappedNote: UW,
        note: sW,
        onChangeComplete: MW
      } = WW;
      const [KW, SW] = (0, mW.useState)(cW), YW = (0, mW.useRef)(cW);
      (0, mW.useEffect)((() => {
        YW.current = cW, SW(cW)
      }), [cW]);
      const yW = void 0 !== jW && jW < NW,
        TW = yW ? {
          "--slider-selectable": (jW - EW) / (NW - EW)
        } : void 0,
        JW = yW && UW ? UW : sW;
      return (0, lW.jsxs)("div", {
        className: wW()("SettingBox SettingsSliderDiv", {
          [xW]: xW,
          SettingBoxDisabled: bW,
          SliderCapped: yW
        }),
        style: TW,
        children: [(0, lW.jsxs)("div", {
          className: "SliderText",
          children: [`${iW}: ${ZW?ZW(KW):KW}`, tW && (0, lW.jsx)(PW.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: tW
          })]
        }), (0, lW.jsx)("div", {
          className: "SliderDiv",
          children: (0, lW.jsx)(kW, {
            value: KW,
            min: EW,
            max: NW,
            step: LW,
            onChange: WW => {
              if (yW && WW >= jW && KW === jW) return;
              const iW = yW ? Math.min(WW, jW) : WW;
              YW.current = iW, SW(iW), OW(iW)
            },
            onChangeComplete: MW && (() => {
              MW(YW.current)
            }),
            format: ZW,
            padStep: AW,
            disabled: bW
          })
        }), JW && (0, lW.jsx)("div", {
          className: "SettingNote",
          children: JW
        })]
      })
    }
    const jW = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function UW(WW) {
      var iW;
      return (null !== (iW = String(WW).split(".")[1]) && void 0 !== iW ? iW : "").length
    }

    function kW(WW) {
      let {
        value: iW,
        min: OW,
        max: NW,
        step: PW,
        onChange: LW,
        orientation: cW,
        reverse: wW,
        setIsChanging: tW,
        tooltip: ZW,
        labels: AW,
        handleLabel: bW,
        format: kW,
        onChangeStart: sW,
        onChangeComplete: MW,
        padStep: KW,
        disabled: SW = !1
      } = WW;
      const YW = (0, mW.useRef)(null),
        yW = (0, mW.useRef)(null);
      (0, mW.useLayoutEffect)((() => {
        var WW, iW, OW;
        const mW = null !== (WW = null === (iW = YW.current) || void 0 === iW ? void 0 : iW.querySelector(".rangeslider")) && void 0 !== WW ? WW : null;
        null === mW || void 0 === mW || mW.setAttribute("data-pad-slider", ""), null === mW || void 0 === mW || mW.setAttribute("data-pad-focusable", ""), null === mW || void 0 === mW || null === (OW = mW.querySelector(".rangeslider__handle")) || void 0 === OW || OW.setAttribute("data-pad-slider-handle", ""), yW.current = mW
      }), []), (0, mW.useLayoutEffect)((() => {
        var WW, iW;
        SW ? null === (WW = yW.current) || void 0 === WW || WW.setAttribute("aria-disabled", "true") : null === (iW = yW.current) || void 0 === iW || iW.removeAttribute("aria-disabled")
      }), [SW]);
      const TW = Math.max(UW(PW), UW(OW)),
        JW = WW => {
          if (WW >= NW) return NW;
          if (WW <= OW) return OW;
          const iW = Number((Math.round((WW - OW) / PW) * PW + OW).toFixed(TW));
          return Math.min(NW, Math.max(OW, iW))
        },
        hW = (0, mW.useRef)(MW);
      hW.current = MW, (0, mW.useEffect)((() => {
        const WW = YW.current;
        if (!WW) return;
        const iW = WW => {
          var iW;
          jW.has(WW.key) && (null === (iW = hW.current) || void 0 === iW || iW.call(hW))
        };
        return WW.addEventListener("keyup", iW), () => {
          WW.removeEventListener("keyup", iW)
        }
      }), []);
      const HW = (0, mW.useRef)(!1);
      return (0, xW.d)(yW, {
        adjust: WW => {
          if (SW) return;
          const mW = null !== KW && void 0 !== KW ? KW : Math.max(PW, Math.round((NW - OW) / 20 / PW) * PW),
            EW = JW(iW + WW * mW * (wW ? -1 : 1));
          EW !== iW && (null === sW || void 0 === sW || sW(), LW(EW), null === MW || void 0 === MW || MW())
        },
        setFraction: WW => {
          if (SW) return;
          const mW = JW(OW + (wW ? 1 - WW : WW) * (NW - OW));
          mW !== iW && (HW.current || (HW.current = !0, null === sW || void 0 === sW || sW()), LW(mW))
        },
        endDrag: () => {
          HW.current && (HW.current = !1, null === MW || void 0 === MW || MW())
        }
      }), (0, lW.jsx)("div", {
        ref: YW,
        style: {
          display: "contents"
        },
        children: (0, lW.jsx)(EW.c, {
          value: iW,
          min: OW,
          max: NW,
          step: PW,
          onChange: WW => {
            LW(JW(WW))
          },
          orientation: cW,
          reverse: wW,
          tooltip: ZW,
          labels: AW,
          handleLabel: bW,
          format: kW,
          onChangeStart: () => {
            null === sW || void 0 === sW || sW(), null === tW || void 0 === tW || tW(!0)
          },
          onChangeComplete: () => {
            null === tW || void 0 === tW || tW(!1), null === MW || void 0 === MW || MW()
          }
        })
      })
    }
    async function sW() {
      const WW = tW.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await WW.getResult() && (0, ZW.reloadBloxd)()
    }

    function MW(WW) {
      let {
        label: iW,
        options: OW,
        value: mW,
        onChange: EW,
        circleInfoText: NW
      } = WW;
      return (0, lW.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, lW.jsxs)("div", {
          className: "SliderText",
          children: [iW, NW && (0, lW.jsx)(PW.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: NW
          })]
        }), (0, lW.jsx)(LW.c, {
          ariaLabel: iW,
          options: OW,
          value: mW,
          onChange: EW
        })]
      })
    }
  },
  7666: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      default: () => zW
    });
    var mW = OW(62),
      EW = OW(1616),
      NW = OW(7570),
      PW = OW(1217),
      LW = OW(344),
      cW = OW(1642),
      wW = OW(1383),
      tW = OW(1605),
      ZW = OW(1532),
      xW = OW(1434),
      lW = OW(1713),
      AW = OW(3610),
      bW = OW(3744),
      jW = OW(5261),
      UW = OW(1107),
      kW = OW(1584),
      sW = OW(100),
      MW = OW(1172);
    const KW = OW.p + "static/media/bloxdhubLogo.6a6c367af2ad6e6f1eb3.webp";
    var SW = OW(1089),
      YW = OW.n(SW),
      yW = OW(1391),
      TW = OW(1422),
      JW = OW(7567),
      hW = OW(1283);
    const HW = (0, mW.lazy)((() => Promise.all([OW.e(128), OW.e(91), OW.e(157), OW.e(156), OW.e(135), OW.e(715)]).then((() => OW(7600))).then((WW => ({
      default: WW.ShaderPackPublishForm
    })))));

    function nW(WW) {
      let {
        details: iW,
        owner: OW,
        onChanged: EW
      } = WW;
      const {
        t: PW
      } = (0, MW.B)(), LW = (0, tW.useNavigatePreserveSearch)(), {
        userContext: cW
      } = (0, UW.e)(), [xW, lW] = (0, mW.useState)(!1), [AW, bW] = (0, mW.useState)(null), [jW, sW] = (0, mW.useState)(!1), {
        packId: KW,
        name: SW,
        description: nW,
        live: uW
      } = iW;
      async function oW(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : EW;
        lW(!0), bW(null);
        try {
          await WW(), iW()
        } catch (OW) {
          console.error("Failed to change a shader pack", OW), bW((0, JW.y)(OW, PW, "shaderPackListing:ownerActionFailed"))
        } finally {
          lW(!1)
        }
      }
      const dW = (0, JW.q)(cW);
      return (0, hW.jsxs)("section", {
        className: "ShaderPackOwnerPanel",
        children: [(0, hW.jsx)("h2", {
          className: "ShaderPackSectionTitle",
          children: PW("general:manage")
        }), (0, JW._)(OW, !(null === uW || void 0 === uW || !uW.renderId), Date.now(), PW).map((WW => (0, hW.jsxs)("div", {
          className: YW()("ShaderPackOwnerNotice", {
            Warning: "warning" === WW.tone
          }),
          children: [(0, hW.jsx)(yW.c, {
            name: "warning" === WW.tone ? "triangle-exclamation" : "circle-info"
          }), (0, hW.jsxs)("div", {
            children: [WW.text, WW.detail && (0, hW.jsx)("pre", {
              className: "ShaderPackOwnerNoticeDetail",
              children: WW.detail
            })]
          })]
        }, WW.text))), iW.ban && (0, hW.jsxs)("div", {
          className: "ShaderPackOwnerNotice Warning",
          children: [(0, hW.jsx)(yW.c, {
            name: "ban"
          }), (0, hW.jsxs)("div", {
            children: ["Banned by ", iW.ban.byName, " on ", new Date(iW.ban.at).toLocaleString()]
          })]
        }), AW && (0, hW.jsx)("div", {
          className: "ShaderPackOwnerError",
          children: AW
        }), (0, hW.jsxs)("div", {
          className: "ShaderPackOwnerActions",
          children: [(0, hW.jsxs)(ZW.Z, {
            disabled: xW,
            onClick: () => {
              !async function() {
                const WW = await TW.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:renameTitle",
                  initialValue: SW,
                  maxLength: NW.x,
                  submitText: "general:save",
                  validate: WW => WW.trim().length < NW.B ? PW("shaderPackListing:nameTooShort", {
                    min: String(NW.B)
                  }) : null
                }).getResult();
                "notificationTornDown" !== WW && "submit" === (null === WW || void 0 === WW ? void 0 : WW.type) && WW.value.trim() !== SW && await oW((() => kW.e.updateShaderPack(cW, {
                  packId: KW,
                  name: WW.value.trim()
                })))
              }()
            },
            children: [(0, hW.jsx)(yW.c, {
              name: "pen"
            }), " ", PW("shaderPackListing:rename")]
          }), (0, hW.jsxs)(ZW.Z, {
            disabled: xW,
            onClick: () => {
              !async function() {
                const WW = await TW.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:editDescription",
                  initialValue: nW,
                  maxLength: NW.j,
                  multiline: !0,
                  allowEmptySubmit: !0,
                  submitText: "general:save"
                }).getResult();
                "notificationTornDown" !== WW && "submit" === (null === WW || void 0 === WW ? void 0 : WW.type) && WW.value.trim() !== nW && await oW((() => kW.e.updateShaderPack(cW, {
                  packId: KW,
                  description: WW.value.trim()
                })))
              }()
            },
            children: [(0, hW.jsx)(yW.c, {
              name: "file-lines"
            }), " ", PW("shaderPackListing:editDescription")]
          }), (0, hW.jsxs)(ZW.Z, {
            disabled: xW || OW.isBanned && !OW.listed,
            onClick: () => {
              oW((() => kW.e.updateShaderPack(cW, {
                packId: KW,
                listed: !OW.listed
              })))
            },
            children: [(0, hW.jsx)(yW.c, {
              name: OW.listed ? "eye-slash" : "eye"
            }), " ", PW(OW.listed ? "shaderPackListing:unlist" : "shaderPackListing:relist")]
          }), !OW.isBanned && (0, hW.jsxs)(ZW.f, {
            disabled: xW,
            onClick: () => {
              sW(!jW)
            },
            children: [(0, hW.jsx)(yW.c, {
              name: "upload"
            }), " ", PW("shaderPackListing:uploadVersion")]
          }), (0, hW.jsxs)(ZW.S, {
            disabled: xW || OW.isBanned,
            onClick: () => {
              !async function() {
                !0 === await TW.NotificationProvider.showPromptPopup({
                  title: "shaderPackListing:deleteTitle",
                  subtitle: "shaderPackListing:deleteSubtitle",
                  confirmText: "general:delete",
                  cancelText: "general:cancel",
                  destructive: !0
                }).getResult() && await oW((() => kW.e.deleteShaderPack(cW, KW)), (() => {
                  LW(`${JW.W}?section=mine`, {
                    replace: !0
                  })
                }))
              }()
            },
            children: [(0, hW.jsx)(yW.c, {
              name: "trash-can"
            }), " ", PW("general:delete")]
          }), dW && (0, hW.jsxs)(ZW.S, {
            disabled: xW,
            onClick: () => {
              oW((() => kW.e.setShaderPackBanned(cW, KW, !OW.isBanned)))
            },
            children: [(0, hW.jsx)(yW.c, {
              name: OW.isBanned ? "circle-check" : "ban"
            }), " ", OW.isBanned ? "Unban" : "Ban"]
          })]
        }), jW && (0, hW.jsx)(mW.Suspense, {
          fallback: (0, hW.jsx)(wW.d, {}),
          children: (0, hW.jsx)(HW, {
            existing: {
              packId: KW,
              name: SW,
              description: nW
            },
            onPublished: () => {
              sW(!1), EW()
            }
          })
        })]
      })
    }
    var uW = OW(80),
      oW = OW(2012),
      dW = OW(1269),
      eW = OW(5940),
      vW = OW(1185),
      gW = OW(7577),
      DW = OW(7574),
      VW = OW(7591);

    function pW(WW) {
      let {
        item: iW
      } = WW;
      const {
        t: OW
      } = (0, MW.B)(), [EW] = (0, gW.f)(), [PW, LW] = (0, mW.useState)(EW), [cW, wW] = (0, mW.useState)(!1), [tW, ZW] = (0, mW.useState)(!1), {
        s3Url: xW
      } = vW.clientSideServerUrls, {
        width: lW,
        height: AW
      } = NW.n.large, bW = (0, NW.q)(xW, iW, PW, "large"), {
        renderVersion: jW
      } = iW;
      return (0, hW.jsxs)("div", {
        className: "ShaderPackPreviews",
        children: [(0, hW.jsx)(VW.c, {
          selected: PW,
          onSelect: WW => {
            LW(WW), wW(!1)
          },
          imageUrl: WW => (0, NW.q)(xW, iW, WW, "thumb")
        }), (0, hW.jsxs)("div", {
          className: "ShaderPackPreviewStage",
          children: [!cW && (0, hW.jsxs)("button", {
            type: "button",
            className: "ShaderPackPreviewMain",
            title: null === jW ? void 0 : OW("shaderPackListing:fullSize"),
            disabled: null === jW,
            onClick: () => {
              ZW(!0)
            },
            children: [(0, hW.jsx)("img", {
              src: bW,
              width: lW,
              height: AW,
              alt: OW(JW.fb[PW]),
              draggable: !1
            }), (0, hW.jsx)(DW.c, {
              item: iW
            })]
          }), !cW && null !== jW && (0, hW.jsxs)(BW, {
            side: "Right",
            onClick: () => {
              wW(!0)
            },
            children: [(0, hW.jsx)(yW.c, {
              name: "arrows-left-right"
            }), " ", OW("shaderPackListing:compare")]
          }), cW && null !== jW && (0, hW.jsx)(XW, {
            item: iW,
            packUrl: bW,
            baselineUrl: (0, NW.i)(xW, jW, PW, "large")
          }), cW && (0, hW.jsx)(BW, {
            side: "Left",
            onClick: () => {
              wW(!1)
            },
            children: OW("shaderPackListing:withPack")
          }), cW && (0, hW.jsx)(BW, {
            side: "Right",
            onClick: () => {
              wW(!1)
            },
            children: OW("shaderPackListing:withoutPack")
          })]
        }), tW && (0, hW.jsx)(fW, {
          fullUrl: (0, NW.q)(xW, iW, PW, "full"),
          largeUrl: bW,
          alt: OW(JW.fb[PW]),
          onClose: () => {
            ZW(!1)
          }
        })]
      })
    }

    function fW(WW) {
      let {
        fullUrl: iW,
        largeUrl: OW,
        alt: EW,
        onClose: NW
      } = WW;
      const PW = (0, mW.useRef)(null);
      return (0, dW.r)("popup", PW, NW), (0, mW.useEffect)((() => {
        function WW(WW) {
          "Escape" === WW.key && (WW.stopPropagation(), NW())
        }
        return window.addEventListener("keydown", WW, !0), () => {
          window.removeEventListener("keydown", WW, !0)
        }
      }), [NW]), (0, uW.createPortal)((0, hW.jsxs)("div", {
        ref: PW,
        className: "ShaderPackFullSize",
        onClick: NW,
        children: [(0, hW.jsx)("img", {
          className: "ShaderPackFullSizeImage",
          src: iW,
          alt: EW,
          draggable: !1,
          style: {
            backgroundImage: `url(${OW})`
          }
        }), (0, hW.jsx)(ZW.l, {
          className: "ShaderPackFullSizeClose",
          onClick: NW
        })]
      }), document.body)
    }
    const CW = 5;

    function XW(WW) {
      let {
        item: iW,
        packUrl: OW,
        baselineUrl: EW
      } = WW;
      const {
        t: PW
      } = (0, MW.B)(), [LW, cW] = (0, mW.useState)(50), wW = (0, mW.useRef)(!1), tW = (0, mW.useRef)(null), {
        width: ZW,
        height: xW
      } = NW.n.large;

      function lW(WW) {
        cW((iW => (0, oW.f)(iW + WW, 0, 100)))
      }

      function AW(WW) {
        const iW = WW.currentTarget.getBoundingClientRect();
        cW((0, oW.f)((WW.clientX - iW.left) / iW.width * 100, 0, 100))
      }
      return (0, eW.d)(tW, {
        adjust: WW => {
          lW(WW * CW)
        },
        setFraction: WW => {
          cW(100 * WW)
        },
        endDrag: () => {}
      }), (0, hW.jsxs)("div", {
        ref: tW,
        className: "ShaderPackCompare",
        "data-pad-slider": "",
        "data-pad-focusable": "",
        role: "slider",
        tabIndex: 0,
        "aria-label": PW("shaderPackListing:compare"),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(LW),
        style: {
          "--split": `${LW}%`
        },
        onKeyDown: function(WW) {
          const iW = "ArrowLeft" === WW.key ? -CW : "ArrowRight" === WW.key ? CW : 0;
          0 !== iW && (WW.preventDefault(), lW(iW))
        },
        onPointerDown: WW => {
          wW.current = !0, WW.currentTarget.setPointerCapture(WW.pointerId), AW(WW)
        },
        onPointerMove: WW => {
          wW.current && AW(WW)
        },
        onPointerUp: () => {
          wW.current = !1
        },
        onPointerCancel: () => {
          wW.current = !1
        },
        children: [(0, hW.jsx)("img", {
          className: "ShaderPackCompareBaseline",
          src: EW,
          width: ZW,
          height: xW,
          alt: "",
          draggable: !1,
          style: {
            backgroundImage: `url(${OW})`
          }
        }), (0, hW.jsx)("div", {
          className: "ShaderPackCompareLine"
        }), (0, hW.jsx)("img", {
          className: "ShaderPackComparePack",
          src: OW,
          width: ZW,
          height: xW,
          alt: "",
          draggable: !1
        }), (0, hW.jsx)(DW.c, {
          item: iW,
          className: "ShaderPackCompareNotice"
        })]
      })
    }

    function BW(WW) {
      let {
        side: iW,
        onClick: OW,
        children: mW
      } = WW;
      return (0, hW.jsx)("button", {
        type: "button",
        className: `ShaderPackStageButton ${iW}`,
        onClick: OW,
        children: (0, hW.jsx)("span", {
          className: "ShaderPackStageButtonFace SmallTextBold",
          children: mW
        })
      })
    }
    var qW = OW(5910),
      RW = OW(315),
      GW = OW(7659);
    const IW = {
      compiler: "shaderPack:compilerUnavailable",
      download: "shaderPackListing:useDownloadFailed",
      apiVersion: "shaderPackListing:useOtherApiVersion",
      invalid: "shaderPackListing:useInvalid",
      errors: "shaderPackListing:useFailsHere",
      save: "shaderPack:saveFailed"
    };

    function aW(WW) {
      const {
        userContext: iW
      } = (0, UW.e)(), [EW, NW] = (0, mW.useState)(null), [PW, LW] = (0, mW.useState)(!1), [cW, wW] = (0, mW.useState)(!1), [tW, ZW] = (0, mW.useState)(null), xW = null === WW || void 0 === WW ? void 0 : WW.packId, lW = null === WW || void 0 === WW ? void 0 : WW.sourceHash;
      return (0, mW.useEffect)((() => {
        if (LW(!1), ZW(null), void 0 === xW) return;
        let WW = !1;
        return Promise.all([(0, sW.hasUsableWebGpuAdapter)(), (0, GW.g)()]).then((iW => {
          let [OW, mW] = iW;
          var EW;
          WW || (NW(OW), LW((null === mW || void 0 === mW || null === (EW = mW.listing) || void 0 === EW ? void 0 : EW.packId) === xW && mW.listing.sourceHash === lW))
        })).catch((iW => {
          console.error("Failed to check whether this shader pack can be used", iW), WW || NW(!1)
        })), () => {
          WW = !0
        }
      }), [xW, lW]), {
        webGpuUsable: EW,
        inUse: PW,
        busy: cW,
        errorKey: tW,
        use: () => {
          null !== WW && async function(WW) {
            wW(!0), ZW(null);
            try {
              const {
                installListedShaderPack: mW
              } = await Promise.all([OW.e(91), OW.e(157), OW.e(136)]).then((() => OW(42022))), EW = await mW({
                packId: WW.packId,
                sourceHash: WW.sourceHash,
                name: WW.name,
                ownerName: WW.ownerName,
                description: WW.description
              });
              if ("failed" === EW.kind) return void ZW(IW[EW.reason]);
              LW(!0), kW.e.recordShaderPackDownload(iW, WW.packId).catch((WW => {
                console.error("Failed to count a shader pack's download", WW)
              })), (0, qW.n)()
            } catch (mW) {
              console.error("Failed to use the shader pack", mW), ZW("shaderPack:unexpectedError")
            } finally {
              wW(!1)
            }
          }(WW)
        }
      }
    }

    function rW(WW) {
      let {
        packUse: iW
      } = WW;
      const {
        t: OW
      } = (0, MW.B)(), {
        webGpuUsable: mW,
        inUse: EW,
        busy: NW,
        errorKey: PW,
        use: LW
      } = iW;
      return (0, hW.jsxs)("div", {
        className: "ShaderPackUse",
        children: [(0, hW.jsxs)(ZW.n, {
          disabled: !0 !== mW || EW,
          loading: NW,
          onClick: LW,
          children: [(0, hW.jsx)(yW.c, {
            name: EW ? "check" : "download"
          }), " ", OW(EW ? "shaderPackListing:inUse" : "shaderPackListing:use")]
        }), !1 === mW && (0, hW.jsx)("div", {
          className: "ShaderPackUseNote",
          children: OW((0, RW.l)() ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), PW && (0, hW.jsx)("div", {
          className: "ShaderPackUseNote Error",
          children: OW(PW)
        })]
      })
    }

    function zW() {
      var WW;
      const {
        t: iW
      } = (0, MW.B)(), OW = (0, tW.useNavigatePreserveSearch)(), {
        packId: NW
      } = (0, EW.z)(), {
        userContext: PW,
        isUserContextUpdating: LW
      } = (0, UW.e)(), [xW, AW] = (0, mW.useState)(null), [bW, sW] = (0, mW.useState)(null), [KW, SW] = (0, mW.useState)(0), YW = (0, mW.useRef)(0);

      function yW() {
        var WW;
        null !== (WW = (0, tW.getPreviousLocation)()) && void 0 !== WW && WW.startsWith(JW.W) ? OW(-1) : OW(JW.W)
      }(0, jW.c)(yW), (0, gW.b)(), (0, mW.useEffect)((() => {
        if (LW || void 0 === NW) return;
        const WW = ++YW.current;
        sW(null), kW.e.getShaderPack(PW, NW).then((iW => {
          YW.current === WW && AW(iW)
        })).catch((iW => {
          YW.current === WW && (console.error("Failed to get the shader pack", iW), AW(null), sW({
            error: iW
          }))
        }))
      }), [NW, PW, LW, KW]);
      const TW = () => {
          SW((WW => WW + 1))
        },
        HW = (null === xW || void 0 === xW ? void 0 : xW.packId) === NW ? xW : null,
        uW = (0, gW.j)(),
        oW = aW(null !== (WW = null === HW || void 0 === HW ? void 0 : HW.live) && void 0 !== WW ? WW : null),
        dW = null !== HW && void 0 !== HW && HW.live ? (0, hW.jsx)(FW, {
          item: HW.live,
          favourites: uW,
          packUse: oW
        }) : null;
      return (0, hW.jsxs)("article", {
        className: "ShaderPackInformation AnimFadeIn",
        children: [null !== HW && (0, hW.jsx)(lW.c, {
          meta: (0, cW.ab)(HW.name)
        }), (0, hW.jsx)(ZW.b, {
          onClick: yW,
          children: iW("shaderPackListing:backToPacks")
        }), null === HW && null === bW && (0, hW.jsx)("div", {
          className: "ShaderPackInformationMessage",
          children: (0, hW.jsx)(wW.d, {})
        }), null !== bW && (0, hW.jsxs)("div", {
          className: "ShaderPackInformationMessage",
          children: [(0, JW.y)(bW.error, iW, "shaderPackListing:loadPackFailed"), (0, hW.jsx)(ZW.f, {
            onClick: TW,
            children: iW("general:tryAgain")
          })]
        }), null !== HW && null === bW && (0, hW.jsxs)("div", {
          className: "ShaderPackInformationBody",
          children: [(0, hW.jsxs)("header", {
            className: "ShaderPackInformationHeader",
            children: [(0, hW.jsx)("h1", {
              className: "FullyFancyText",
              children: HW.name
            }), dW]
          }), HW.live && (0, hW.jsx)(pW, {
            item: HW.live
          }), HW.live && (0, hW.jsx)(QW, {
            item: HW.live,
            ownerPreview: HW.ownerPreview,
            bloxdhubSlug: HW.bloxdhubSlug,
            actions: dW
          }), HW.owner && (0, hW.jsx)(nW, {
            details: HW,
            owner: HW.owner,
            onChanged: TW
          })]
        })]
      })
    }

    function FW(WW) {
      let {
        item: iW,
        favourites: OW,
        packUse: mW
      } = WW;
      const EW = OW.isFavourite(iW.packId);
      return (0, hW.jsxs)("div", {
        className: "ShaderPackInformationActions",
        children: [sW.featureFlags.settings.canUseShaderPacks && (0, hW.jsx)(rW, {
          packUse: mW
        }), (0, hW.jsx)(ZW.y, {
          className: "ShaderPackInformationLike",
          onClick: () => {
            OW.toggle(iW.packId)
          },
          isLiked: !0 === EW,
          isLoading: null === EW
        })]
      })
    }

    function QW(WW) {
      let {
        item: iW,
        ownerPreview: OW,
        bloxdhubSlug: mW,
        actions: EW
      } = WW;
      const {
        t: LW
      } = (0, MW.B)(), cW = (0, bW.p)(), wW = null === mW ? null : (0, NW.d)(mW);
      return (0, hW.jsxs)("div", {
        className: "ShaderPackFacts",
        children: [iW.description && (0, hW.jsx)("p", {
          className: "ShaderPackDescription",
          children: iW.description
        }), (0, hW.jsxs)("div", {
          className: "ShaderPackFeatureList",
          children: [(null !== OW || null !== wW) && (0, hW.jsx)("div", {
            className: "ShaderPackAuthor",
            children: null !== OW ? (0, hW.jsxs)(hW.Fragment, {
              children: [(0, hW.jsx)(AW.g, {
                playerSocialPreview: OW,
                showLocation: !1,
                linkToProfile: !0
              }), null !== wW && (0, hW.jsx)("a", {
                className: "ShaderPackBloxdhubLogo",
                href: wW,
                target: "_blank",
                rel: "noopener noreferrer",
                children: (0, hW.jsx)("img", {
                  src: KW,
                  alt: NW.c
                })
              })]
            }) : (0, hW.jsxs)("a", {
              className: "ShaderPackBloxdhubName",
              href: wW,
              target: "_blank",
              rel: "noopener noreferrer",
              children: [NW.c, (0, hW.jsx)("img", {
                src: KW,
                alt: ""
              })]
            })
          }), JW.B.filter((WW => iW.features.includes(WW))).map((WW => (0, hW.jsx)(tW.LinkPreserveSearch, {
            className: "ShaderPackFeature",
            to: (0, JW.M)(WW),
            children: LW(JW.N[WW])
          }, WW)))]
        }), EW, (0, hW.jsxs)("dl", {
          className: "ShaderPackFactList",
          children: [(0, hW.jsxs)("div", {
            children: [(0, hW.jsx)("dt", {
              children: LW("shaderPackListing:downloads")
            }), (0, hW.jsx)("dd", {
              children: (0, PW.V)(iW.downloads)
            })]
          }), (0, hW.jsx)(Wi, {
            label: LW("shaderPackListing:updated"),
            time: iW.listedUpdatedAt,
            now: cW
          }), (0, hW.jsx)(Wi, {
            label: LW("shaderPackListing:created"),
            time: iW.publishedAt,
            now: cW
          }), null !== iW.gpuCost && (0, hW.jsxs)("div", {
            children: [(0, hW.jsx)("dt", {
              children: LW("shaderPackListing:lag")
            }), (0, hW.jsx)("dd", {
              children: LW("shaderPackListing:lagPercent", {
                percent: String((0, JW.S)(iW.gpuCost))
              })
            })]
          }), (0, hW.jsxs)("div", {
            children: [(0, hW.jsx)("dt", {
              children: LW("shaderPackListing:size")
            }), (0, hW.jsx)("dd", {
              children: LW("shaderPackListing:sizeValue", {
                kilobytes: String((0, JW.Q)(iW.sourceBytes))
              })
            })]
          }), (0, hW.jsxs)("div", {
            children: [(0, hW.jsx)("dt", {
              children: LW("shaderPackListing:files")
            }), (0, hW.jsx)("dd", {
              children: iW.fileCount
            })]
          })]
        })]
      })
    }

    function Wi(WW) {
      let {
        label: iW,
        time: OW,
        now: mW
      } = WW;
      const {
        t: EW,
        selectedLanguage: NW
      } = (0, MW.B)(), PW = new Date(OW);
      let cW = PW.toLocaleDateString();
      if (mW - OW <= 30 * LW.k) {
        const WW = (0, MW.k)(NW.code, "shaderPackListing:timeAgo");
        cW = EW("shaderPackListing:timeAgo", {
          time: (0, LW.$)(WW, OW, mW)
        })
      }
      return (0, hW.jsx)(xW.f, {
        tooltipInner: PW.toLocaleString(),
        children: (0, hW.jsxs)("div", {
          children: [(0, hW.jsx)("dt", {
            children: iW
          }), (0, hW.jsx)("dd", {
            children: cW
          })]
        })
      })
    }
  },
  5940: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => NW,
      d: () => PW
    });
    var mW = OW(62);
    const EW = new WeakMap,
      NW = WW => {
        var iW;
        const OW = WW.closest("[data-pad-slider]");
        return OW && null !== (iW = EW.get(OW)) && void 0 !== iW ? iW : null
      },
      PW = (WW, iW) => {
        const OW = (0, mW.useRef)(iW);
        OW.current = iW, (0, mW.useEffect)((() => {
          if (WW.current) return ((WW, iW) => (EW.set(WW, iW), () => {
            EW.get(WW) === iW && EW.delete(WW)
          }))(WW.current, {
            adjust: WW => {
              OW.current.adjust(WW)
            },
            setFraction: WW => {
              OW.current.setFraction(WW)
            },
            endDrag: () => {
              OW.current.endDrag()
            }
          })
        }), [WW])
      }
  },
  7659: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => EW,
      g: () => NW
    });
    var mW = OW(39);
    const EW = "shaderPack";
    async function NW() {
      var WW;
      let iW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (WW = await mW.f.getItem(EW, iW)) && void 0 !== WW ? WW : null
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);