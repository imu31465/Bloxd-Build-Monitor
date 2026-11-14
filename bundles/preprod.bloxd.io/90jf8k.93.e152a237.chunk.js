export const id = 93;
export const ids = [93, 122];
export const modules = {
  3997: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => QF,
      f: () => TF,
      j: () => rW,
      k: () => tW
    });
    var CF = SF(46),
      AF = SF(4003),
      uF = SF(3517),
      hF = SF(1198),
      bW = SF(4027),
      dF = SF(918),
      PF = SF.n(dF),
      RF = SF(1189),
      iW = SF(1510),
      eF = SF(4034),
      EF = SF(971);

    function QF(FF) {
      let {
        label: WF,
        onClick: SF,
        checked: CF,
        circleInfoText: AF,
        className: bW,
        disabled: dF
      } = FF;
      return (0, EF.jsx)("div", {
        "aria-disabled": dF || void 0,
        "data-pad-focusable": !0,
        className: PF()("SettingBox CheckboxContainer", {
          [bW]: bW,
          SettingBoxDisabled: dF
        }),
        onClick: () => {
          dF || SF(!CF)
        },
        children: (0, EF.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, EF.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, EF.jsx)(uF.b, {
              className: "SettingsCheckbox",
              checked: CF,
              disabled: dF,
              onChange: () => {}
            })
          }), (0, EF.jsxs)("div", {
            className: "CheckboxText",
            children: [WF, AF && (0, EF.jsx)("span", {
              onClick: FF => FF.stopPropagation(),
              children: (0, EF.jsx)(hF.e, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: AF
              })
            })]
          })]
        })
      })
    }

    function rW(FF) {
      let {
        name: WF,
        onChange: SF,
        min: AF,
        max: uF,
        step: bW,
        initValue: dF,
        circleInfoText: RF,
        format: iW,
        className: eF,
        padStep: QF,
        disabled: rW = !1,
        selectableMax: tW,
        cappedNote: TF
      } = FF;
      const [aW, kW] = (0, CF.useState)(dF);
      (0, CF.useEffect)((() => {
        kW(dF)
      }), [dF]);
      const qW = void 0 !== tW && tW < uF,
        VF = qW ? {
          "--slider-selectable": (tW - AF) / (uF - AF)
        } : void 0;
      return (0, EF.jsxs)("div", {
        className: PF()("SettingBox SettingsSliderDiv", {
          [eF]: eF,
          SettingBoxDisabled: rW,
          SliderCapped: qW
        }),
        style: VF,
        children: [(0, EF.jsxs)("div", {
          className: "SliderText",
          children: [`${WF}: ${iW?iW(aW):aW}`, RF && (0, EF.jsx)(hF.e, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: RF
          })]
        }), (0, EF.jsx)("div", {
          className: "SliderDiv",
          children: (0, EF.jsx)(gW, {
            value: aW,
            min: AF,
            max: uF,
            step: bW,
            onChange: FF => {
              if (qW && FF >= tW && aW === tW) return;
              const WF = qW ? Math.min(FF, tW) : FF;
              kW(WF), SF(WF)
            },
            format: iW,
            padStep: QF,
            disabled: rW
          })
        }), qW && TF && (0, EF.jsx)("div", {
          className: "SliderNote",
          children: TF
        })]
      })
    }

    function gW(FF) {
      var WF;
      let {
        value: SF,
        min: uF,
        max: hF,
        step: bW,
        onChange: dF,
        orientation: PF,
        reverse: RF,
        setIsChanging: iW,
        tooltip: QF,
        labels: rW,
        handleLabel: gW,
        format: tW,
        onChangeStart: TF,
        onChangeComplete: aW,
        padStep: kW,
        disabled: qW = !1
      } = FF;
      const VF = (0, CF.useRef)(null),
        NF = (0, CF.useRef)(null);
      (0, CF.useLayoutEffect)((() => {
        var FF, WF, SF;
        const CF = null !== (FF = null === (WF = VF.current) || void 0 === WF ? void 0 : WF.querySelector(".rangeslider")) && void 0 !== FF ? FF : null;
        null === CF || void 0 === CF || CF.setAttribute("data-pad-slider", ""), null === CF || void 0 === CF || CF.setAttribute("data-pad-focusable", ""), null === CF || void 0 === CF || null === (SF = CF.querySelector(".rangeslider__handle")) || void 0 === SF || SF.setAttribute("data-pad-slider-handle", ""), NF.current = CF
      }), []), (0, CF.useLayoutEffect)((() => {
        var FF, WF;
        qW ? null === (FF = NF.current) || void 0 === FF || FF.setAttribute("aria-disabled", "true") : null === (WF = NF.current) || void 0 === WF || WF.removeAttribute("aria-disabled")
      }), [qW]);
      const DF = (null !== (WF = String(bW).split(".")[1]) && void 0 !== WF ? WF : "").length,
        LF = FF => {
          const WF = Number((Math.round((FF - uF) / bW) * bW + uF).toFixed(DF));
          return Math.min(hF, Math.max(uF, WF))
        },
        mW = (0, CF.useRef)(!1);
      return (0, eF.c)(NF, {
        adjust: FF => {
          if (qW) return;
          const WF = null !== kW && void 0 !== kW ? kW : Math.max(bW, Math.round((hF - uF) / 20 / bW) * bW),
            CF = LF(SF + FF * WF * (RF ? -1 : 1));
          CF !== SF && (null === TF || void 0 === TF || TF(), dF(CF), null === aW || void 0 === aW || aW())
        },
        setFraction: FF => {
          if (qW) return;
          const WF = LF(uF + (RF ? 1 - FF : FF) * (hF - uF));
          WF !== SF && (mW.current || (mW.current = !0, null === TF || void 0 === TF || TF()), dF(WF))
        },
        endDrag: () => {
          mW.current && (mW.current = !1, null === aW || void 0 === aW || aW())
        }
      }), (0, EF.jsx)("div", {
        ref: VF,
        style: {
          display: "contents"
        },
        children: (0, EF.jsx)(AF.c, {
          value: SF,
          min: uF,
          max: hF,
          step: bW,
          onChange: dF,
          orientation: PF,
          reverse: RF,
          tooltip: QF,
          labels: rW,
          handleLabel: gW,
          format: tW,
          onChangeStart: () => {
            null === TF || void 0 === TF || TF(), null === iW || void 0 === iW || iW(!0)
          },
          onChangeComplete: () => {
            null === iW || void 0 === iW || iW(!1), null === aW || void 0 === aW || aW()
          }
        })
      })
    }
    async function tW() {
      const FF = RF.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await FF.getResult() && (0, iW.reloadBloxd)()
    }

    function TF(FF) {
      let {
        label: WF,
        options: SF,
        value: CF,
        onChange: AF,
        circleInfoText: uF
      } = FF;
      return (0, EF.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, EF.jsxs)("div", {
          className: "SliderText",
          children: [WF, uF && (0, EF.jsx)(hF.e, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: uF
          })]
        }), (0, EF.jsx)(bW.b, {
          ariaLabel: WF,
          options: SF,
          value: CF,
          onChange: AF
        })]
      })
    }
  },
  5638: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      default: () => jW
    });
    var CF = SF(46),
      AF = SF(1360),
      uF = SF(5520),
      hF = SF(1085),
      bW = SF(271),
      dF = SF(1186),
      PF = SF(1352),
      RF = SF(1266),
      iW = SF(1198),
      eF = SF(2012),
      EF = SF(2147),
      QF = SF(3626),
      rW = SF(996),
      gW = SF(1336),
      tW = SF(89),
      TF = SF(1046);
    const aW = SF.p + "static/media/bloxdhubLogo.6a6c367af2ad6e6f1eb3.webp";
    var kW = SF(918),
      qW = SF.n(kW),
      VF = SF(929),
      NF = SF(1189),
      DF = SF(5512),
      LF = SF(971);
    const mW = (0, CF.lazy)((() => Promise.all([SF.e(89), SF.e(120), SF.e(117), SF.e(111), SF.e(110)]).then((() => SF(5557))).then((FF => ({
      default: FF.ShaderPackPublishForm
    })))));

    function OF(FF) {
      let {
        details: WF,
        owner: SF,
        onChanged: AF
      } = FF;
      const {
        t: hF
      } = (0, TF.B)(), bW = (0, PF.useNavigatePreserveSearch)(), {
        userContext: iW
      } = (0, rW.b)(), [eF, EF] = (0, CF.useState)(!1), [QF, tW] = (0, CF.useState)(null), [aW, kW] = (0, CF.useState)(!1), {
        packId: OF,
        name: xW,
        description: ZF,
        live: oF
      } = WF;
      async function YF(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : AF;
        EF(!0), tW(null);
        try {
          await FF(), WF()
        } catch (SF) {
          console.error("Failed to change a shader pack", SF), tW((0, DF.u)(SF, hF, "shaderPackListing:ownerActionFailed"))
        } finally {
          EF(!1)
        }
      }
      const MF = (0, DF.o)(iW);
      return (0, LF.jsxs)("section", {
        className: "ShaderPackOwnerPanel",
        children: [(0, LF.jsx)("h2", {
          className: "ShaderPackSectionTitle",
          children: hF("general:manage")
        }), (0, DF.U)(SF, !(null === oF || void 0 === oF || !oF.renderId), Date.now(), hF).map((FF => (0, LF.jsxs)("div", {
          className: qW()("ShaderPackOwnerNotice", {
            Warning: "warning" === FF.tone
          }),
          children: [(0, LF.jsx)(VF.e, {
            name: "warning" === FF.tone ? "triangle-exclamation" : "circle-info"
          }), (0, LF.jsxs)("div", {
            children: [FF.text, FF.detail && (0, LF.jsx)("pre", {
              className: "ShaderPackOwnerNoticeDetail",
              children: FF.detail
            })]
          })]
        }, FF.text))), WF.ban && (0, LF.jsxs)("div", {
          className: "ShaderPackOwnerNotice Warning",
          children: [(0, LF.jsx)(VF.e, {
            name: "ban"
          }), (0, LF.jsxs)("div", {
            children: ["Banned by ", WF.ban.byName, " on ", new Date(WF.ban.at).toLocaleString()]
          })]
        }), QF && (0, LF.jsx)("div", {
          className: "ShaderPackOwnerError",
          children: QF
        }), (0, LF.jsxs)("div", {
          className: "ShaderPackOwnerActions",
          children: [(0, LF.jsxs)(RF.N, {
            disabled: eF,
            onClick: () => {
              !async function() {
                const FF = await NF.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:renameTitle",
                  initialValue: xW,
                  maxLength: uF.E,
                  submitText: "general:save",
                  validate: FF => FF.trim().length < uF.F ? hF("shaderPackListing:nameTooShort", {
                    min: String(uF.F)
                  }) : null
                }).getResult();
                "notificationTornDown" !== FF && "submit" === (null === FF || void 0 === FF ? void 0 : FF.type) && FF.value.trim() !== xW && await YF((() => gW.b.updateShaderPack(iW, {
                  packId: OF,
                  name: FF.value.trim()
                })))
              }()
            },
            children: [(0, LF.jsx)(VF.e, {
              name: "pen"
            }), " ", hF("shaderPackListing:rename")]
          }), (0, LF.jsxs)(RF.N, {
            disabled: eF,
            onClick: () => {
              !async function() {
                const FF = await NF.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:editDescription",
                  initialValue: ZF,
                  maxLength: uF.q,
                  multiline: !0,
                  allowEmptySubmit: !0,
                  submitText: "general:save"
                }).getResult();
                "notificationTornDown" !== FF && "submit" === (null === FF || void 0 === FF ? void 0 : FF.type) && FF.value.trim() !== ZF && await YF((() => gW.b.updateShaderPack(iW, {
                  packId: OF,
                  description: FF.value.trim()
                })))
              }()
            },
            children: [(0, LF.jsx)(VF.e, {
              name: "file-lines"
            }), " ", hF("shaderPackListing:editDescription")]
          }), (0, LF.jsxs)(RF.N, {
            disabled: eF || SF.isBanned && !SF.listed,
            onClick: () => {
              YF((() => gW.b.updateShaderPack(iW, {
                packId: OF,
                listed: !SF.listed
              })))
            },
            children: [(0, LF.jsx)(VF.e, {
              name: SF.listed ? "eye-slash" : "eye"
            }), " ", hF(SF.listed ? "shaderPackListing:unlist" : "shaderPackListing:relist")]
          }), !SF.isBanned && (0, LF.jsxs)(RF.e, {
            disabled: eF,
            onClick: () => {
              kW(!aW)
            },
            children: [(0, LF.jsx)(VF.e, {
              name: "upload"
            }), " ", hF("shaderPackListing:uploadVersion")]
          }), (0, LF.jsxs)(RF.I, {
            disabled: eF || SF.isBanned,
            onClick: () => {
              !async function() {
                !0 === await NF.NotificationProvider.showPromptPopup({
                  title: "shaderPackListing:deleteTitle",
                  subtitle: "shaderPackListing:deleteSubtitle",
                  confirmText: "general:delete",
                  cancelText: "general:cancel",
                  destructive: !0
                }).getResult() && await YF((() => gW.b.deleteShaderPack(iW, OF)), (() => {
                  bW(`${DF.Q}?section=mine`, {
                    replace: !0
                  })
                }))
              }()
            },
            children: [(0, LF.jsx)(VF.e, {
              name: "trash-can"
            }), " ", hF("general:delete")]
          }), MF && (0, LF.jsxs)(RF.I, {
            disabled: eF,
            onClick: () => {
              YF((() => gW.b.setShaderPackBanned(iW, OF, !SF.isBanned)))
            },
            children: [(0, LF.jsx)(VF.e, {
              name: SF.isBanned ? "circle-check" : "ban"
            }), " ", SF.isBanned ? "Unban" : "Ban"]
          })]
        }), aW && (0, LF.jsx)(CF.Suspense, {
          fallback: (0, LF.jsx)(dF.c, {}),
          children: (0, LF.jsx)(mW, {
            existing: {
              packId: OF,
              name: xW,
              description: ZF
            },
            onPublished: () => {
              kW(!1), AF()
            }
          })
        })]
      })
    }
    var xW = SF(61),
      ZF = SF(1079),
      oF = SF(1141),
      YF = SF(4034),
      MF = SF(1056),
      cW = SF(5533),
      GF = SF(5529),
      zW = SF(5543);

    function IF(FF) {
      let {
        item: WF
      } = FF;
      const {
        t: SF
      } = (0, TF.B)(), [AF] = (0, cW.e)(), [hF, bW] = (0, CF.useState)(AF), [dF, PF] = (0, CF.useState)(!1), [RF, iW] = (0, CF.useState)(!1), {
        s3Url: eF
      } = MF.clientSideServerUrls, {
        width: EF,
        height: QF
      } = uF.t.large, rW = (0, uF.w)(eF, WF, hF, "large"), {
        renderVersion: gW
      } = WF;
      return (0, LF.jsxs)("div", {
        className: "ShaderPackPreviews",
        children: [(0, LF.jsx)(zW.e, {
          selected: hF,
          onSelect: FF => {
            bW(FF), PF(!1)
          },
          imageUrl: FF => (0, uF.w)(eF, WF, FF, "thumb")
        }), (0, LF.jsxs)("div", {
          className: "ShaderPackPreviewStage",
          children: [!dF && (0, LF.jsxs)("button", {
            type: "button",
            className: "ShaderPackPreviewMain",
            title: null === gW ? void 0 : SF("shaderPackListing:fullSize"),
            disabled: null === gW,
            onClick: () => {
              iW(!0)
            },
            children: [(0, LF.jsx)("img", {
              src: rW,
              width: EF,
              height: QF,
              alt: SF(DF.ab[hF]),
              draggable: !1
            }), (0, LF.jsx)(GF.c, {
              item: WF
            })]
          }), !dF && null !== gW && (0, LF.jsxs)(nF, {
            side: "Right",
            onClick: () => {
              PF(!0)
            },
            children: [(0, LF.jsx)(VF.e, {
              name: "arrows-left-right"
            }), " ", SF("shaderPackListing:compare")]
          }), dF && null !== gW && (0, LF.jsx)(sF, {
            item: WF,
            packUrl: rW,
            baselineUrl: (0, uF.o)(eF, gW, hF, "large")
          }), dF && (0, LF.jsx)(nF, {
            side: "Left",
            onClick: () => {
              PF(!1)
            },
            children: SF("shaderPackListing:withPack")
          }), dF && (0, LF.jsx)(nF, {
            side: "Right",
            onClick: () => {
              PF(!1)
            },
            children: SF("shaderPackListing:withoutPack")
          })]
        }), RF && (0, LF.jsx)(fF, {
          fullUrl: (0, uF.w)(eF, WF, hF, "full"),
          largeUrl: rW,
          alt: SF(DF.ab[hF]),
          onClose: () => {
            iW(!1)
          }
        })]
      })
    }

    function fF(FF) {
      let {
        fullUrl: WF,
        largeUrl: SF,
        alt: AF,
        onClose: uF
      } = FF;
      const hF = (0, CF.useRef)(null);
      return (0, oF.w)("popup", hF, uF), (0, CF.useEffect)((() => {
        function FF(FF) {
          "Escape" === FF.key && (FF.stopPropagation(), uF())
        }
        return window.addEventListener("keydown", FF, !0), () => {
          window.removeEventListener("keydown", FF, !0)
        }
      }), [uF]), (0, xW.createPortal)((0, LF.jsxs)("div", {
        ref: hF,
        className: "ShaderPackFullSize",
        onClick: uF,
        children: [(0, LF.jsx)("img", {
          className: "ShaderPackFullSizeImage",
          src: WF,
          alt: AF,
          draggable: !1,
          style: {
            backgroundImage: `url(${SF})`
          }
        }), (0, LF.jsx)(RF.h, {
          className: "ShaderPackFullSizeClose",
          onClick: uF
        })]
      }), document.body)
    }
    const yW = 5;

    function sF(FF) {
      let {
        item: WF,
        packUrl: SF,
        baselineUrl: AF
      } = FF;
      const {
        t: hF
      } = (0, TF.B)(), [bW, dF] = (0, CF.useState)(50), PF = (0, CF.useRef)(!1), RF = (0, CF.useRef)(null), {
        width: iW,
        height: eF
      } = uF.t.large;

      function EF(FF) {
        dF((WF => (0, ZF.g)(WF + FF, 0, 100)))
      }

      function QF(FF) {
        const WF = FF.currentTarget.getBoundingClientRect();
        dF((0, ZF.g)((FF.clientX - WF.left) / WF.width * 100, 0, 100))
      }
      return (0, YF.c)(RF, {
        adjust: FF => {
          EF(FF * yW)
        },
        setFraction: FF => {
          dF(100 * FF)
        },
        endDrag: () => {}
      }), (0, LF.jsxs)("div", {
        ref: RF,
        className: "ShaderPackCompare",
        "data-pad-slider": "",
        "data-pad-focusable": "",
        role: "slider",
        tabIndex: 0,
        "aria-label": hF("shaderPackListing:compare"),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(bW),
        style: {
          "--split": `${bW}%`
        },
        onKeyDown: function(FF) {
          const WF = "ArrowLeft" === FF.key ? -yW : "ArrowRight" === FF.key ? yW : 0;
          0 !== WF && (FF.preventDefault(), EF(WF))
        },
        onPointerDown: FF => {
          PF.current = !0, FF.currentTarget.setPointerCapture(FF.pointerId), QF(FF)
        },
        onPointerMove: FF => {
          PF.current && QF(FF)
        },
        onPointerUp: () => {
          PF.current = !1
        },
        onPointerCancel: () => {
          PF.current = !1
        },
        children: [(0, LF.jsx)("img", {
          className: "ShaderPackCompareBaseline",
          src: AF,
          width: iW,
          height: eF,
          alt: "",
          draggable: !1,
          style: {
            backgroundImage: `url(${SF})`
          }
        }), (0, LF.jsx)("div", {
          className: "ShaderPackCompareLine"
        }), (0, LF.jsx)("img", {
          className: "ShaderPackComparePack",
          src: SF,
          width: iW,
          height: eF,
          alt: "",
          draggable: !1
        }), (0, LF.jsx)(GF.c, {
          item: WF,
          className: "ShaderPackCompareNotice"
        })]
      })
    }

    function nF(FF) {
      let {
        side: WF,
        onClick: SF,
        children: CF
      } = FF;
      return (0, LF.jsx)("button", {
        type: "button",
        className: `ShaderPackStageButton ${WF}`,
        onClick: SF,
        children: (0, LF.jsx)("span", {
          className: "ShaderPackStageButtonFace SmallTextBold",
          children: CF
        })
      })
    }
    var HF = SF(3997),
      KF = SF(211),
      wF = SF(5630);
    const XF = {
      compiler: "shaderPack:compilerUnavailable",
      download: "shaderPackListing:useDownloadFailed",
      apiVersion: "shaderPackListing:useOtherApiVersion",
      invalid: "shaderPackListing:useInvalid",
      errors: "shaderPackListing:useFailsHere",
      save: "shaderPack:saveFailed"
    };

    function UF(FF) {
      const {
        userContext: WF
      } = (0, rW.b)(), [AF, uF] = (0, CF.useState)(null), [hF, bW] = (0, CF.useState)(!1), [dF, PF] = (0, CF.useState)(!1), [RF, iW] = (0, CF.useState)(null), eF = null === FF || void 0 === FF ? void 0 : FF.packId, EF = null === FF || void 0 === FF ? void 0 : FF.sourceHash;
      return (0, CF.useEffect)((() => {
        if (bW(!1), iW(null), void 0 === eF) return;
        let FF = !1;
        return Promise.all([(0, tW.hasUsableWebGpuAdapter)(), (0, wF.f)()]).then((WF => {
          let [SF, CF] = WF;
          var AF;
          FF || (uF(SF), bW((null === CF || void 0 === CF || null === (AF = CF.listing) || void 0 === AF ? void 0 : AF.packId) === eF && CF.listing.sourceHash === EF))
        })).catch((WF => {
          console.error("Failed to check whether this shader pack can be used", WF), FF || uF(!1)
        })), () => {
          FF = !0
        }
      }), [eF, EF]), {
        webGpuUsable: AF,
        inUse: hF,
        busy: dF,
        errorKey: RF,
        use: () => {
          null !== FF && async function(FF) {
            PF(!0), iW(null);
            try {
              const {
                installListedShaderPack: CF
              } = await Promise.all([SF.e(120), SF.e(117), SF.e(112)]).then((() => SF(38464))), AF = await CF({
                packId: FF.packId,
                sourceHash: FF.sourceHash,
                name: FF.name,
                ownerName: FF.ownerName,
                description: FF.description
              });
              if ("failed" === AF.kind) return void iW(XF[AF.reason]);
              bW(!0), gW.b.recordShaderPackDownload(WF, FF.packId).catch((FF => {
                console.error("Failed to count a shader pack's download", FF)
              })), (0, HF.k)()
            } catch (CF) {
              console.error("Failed to use the shader pack", CF), iW("shaderPack:unexpectedError")
            } finally {
              PF(!1)
            }
          }(FF)
        }
      }
    }

    function BF(FF) {
      let {
        packUse: WF
      } = FF;
      const {
        t: SF
      } = (0, TF.B)(), {
        webGpuUsable: CF,
        inUse: AF,
        busy: uF,
        errorKey: hF,
        use: bW
      } = WF;
      return (0, LF.jsxs)("div", {
        className: "ShaderPackUse",
        children: [(0, LF.jsxs)(RF.k, {
          disabled: !0 !== CF || AF,
          loading: uF,
          onClick: bW,
          children: [(0, LF.jsx)(VF.e, {
            name: AF ? "check" : "download"
          }), " ", SF(AF ? "shaderPackListing:inUse" : "shaderPackListing:use")]
        }), !1 === CF && (0, LF.jsx)("div", {
          className: "ShaderPackUseNote",
          children: SF((0, KF.i)() ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), hF && (0, LF.jsx)("div", {
          className: "ShaderPackUseNote Error",
          children: SF(hF)
        })]
      })
    }

    function jW() {
      var FF;
      const {
        t: WF
      } = (0, TF.B)(), SF = (0, PF.useNavigatePreserveSearch)(), {
        packId: uF
      } = (0, AF.v)(), {
        userContext: hF,
        isUserContextUpdating: bW
      } = (0, rW.b)(), [iW, eF] = (0, CF.useState)(null), [EF, tW] = (0, CF.useState)(null), [aW, kW] = (0, CF.useState)(0), qW = (0, CF.useRef)(0);

      function VF() {
        var FF;
        null !== (FF = (0, PF.getPreviousLocation)()) && void 0 !== FF && FF.startsWith(DF.Q) ? SF(-1) : SF(DF.Q)
      }(0, QF.b)(VF), (0, cW.b)(), (0, CF.useEffect)((() => {
        if (bW || void 0 === uF) return;
        const FF = ++qW.current;
        tW(null), gW.b.getShaderPack(hF, uF).then((WF => {
          qW.current === FF && eF(WF)
        })).catch((WF => {
          qW.current === FF && (console.error("Failed to get the shader pack", WF), eF(null), tW({
            error: WF
          }))
        }))
      }), [uF, hF, bW, aW]);
      const NF = () => {
          kW((FF => FF + 1))
        },
        mW = (null === iW || void 0 === iW ? void 0 : iW.packId) === uF ? iW : null,
        xW = (0, cW.h)(),
        ZF = UF(null !== (FF = null === mW || void 0 === mW ? void 0 : mW.live) && void 0 !== FF ? FF : null),
        oF = null !== mW && void 0 !== mW && mW.live ? (0, LF.jsx)(vW, {
          item: mW.live,
          favourites: xW,
          packUse: ZF
        }) : null;
      return (0, LF.jsxs)("article", {
        className: "ShaderPackInformation AnimFadeIn",
        children: [(0, LF.jsx)(RF.c, {
          onClick: VF,
          children: WF("shaderPackListing:backToPacks")
        }), null === mW && null === EF && (0, LF.jsx)("div", {
          className: "ShaderPackInformationMessage",
          children: (0, LF.jsx)(dF.c, {})
        }), null !== EF && (0, LF.jsxs)("div", {
          className: "ShaderPackInformationMessage",
          children: [(0, DF.u)(EF.error, WF, "shaderPackListing:loadPackFailed"), (0, LF.jsx)(RF.e, {
            onClick: NF,
            children: WF("general:tryAgain")
          })]
        }), null !== mW && null === EF && (0, LF.jsxs)("div", {
          className: "ShaderPackInformationBody",
          children: [(0, LF.jsxs)("header", {
            className: "ShaderPackInformationHeader",
            children: [(0, LF.jsx)("h1", {
              className: "FullyFancyText",
              children: mW.name
            }), oF]
          }), mW.live && (0, LF.jsx)(IF, {
            item: mW.live
          }), mW.live && (0, LF.jsx)(JF, {
            item: mW.live,
            ownerPreview: mW.ownerPreview,
            bloxdhubSlug: mW.bloxdhubSlug,
            actions: oF
          }), mW.owner && (0, LF.jsx)(OF, {
            details: mW,
            owner: mW.owner,
            onChanged: NF
          })]
        })]
      })
    }

    function vW(FF) {
      let {
        item: WF,
        favourites: SF,
        packUse: CF
      } = FF;
      const AF = SF.isFavourite(WF.packId);
      return (0, LF.jsxs)("div", {
        className: "ShaderPackInformationActions",
        children: [tW.featureFlags.settings.canUseShaderPacks && (0, LF.jsx)(BF, {
          packUse: CF
        }), (0, LF.jsx)(RF.s, {
          className: "ShaderPackInformationLike",
          onClick: () => {
            SF.toggle(WF.packId)
          },
          isLiked: !0 === AF,
          isLoading: null === AF
        })]
      })
    }

    function JF(FF) {
      let {
        item: WF,
        ownerPreview: SF,
        bloxdhubSlug: CF,
        actions: AF
      } = FF;
      const {
        t: bW
      } = (0, TF.B)(), dF = (0, EF.q)(), RF = null === CF ? null : (0, uF.g)(CF);
      return (0, LF.jsxs)("div", {
        className: "ShaderPackFacts",
        children: [WF.description && (0, LF.jsx)("p", {
          className: "ShaderPackDescription",
          children: WF.description
        }), (0, LF.jsxs)("div", {
          className: "ShaderPackFeatureList",
          children: [(null !== SF || null !== RF) && (0, LF.jsx)("div", {
            className: "ShaderPackAuthor",
            children: null !== SF ? (0, LF.jsxs)(LF.Fragment, {
              children: [(0, LF.jsx)(eF.d, {
                playerSocialPreview: SF,
                showLocation: !1,
                linkToProfile: !0
              }), null !== RF && (0, LF.jsx)("a", {
                className: "ShaderPackBloxdhubLogo",
                href: RF,
                target: "_blank",
                rel: "noopener noreferrer",
                children: (0, LF.jsx)("img", {
                  src: aW,
                  alt: uF.d
                })
              })]
            }) : (0, LF.jsxs)("a", {
              className: "ShaderPackBloxdhubName",
              href: RF,
              target: "_blank",
              rel: "noopener noreferrer",
              children: [uF.d, (0, LF.jsx)("img", {
                src: aW,
                alt: ""
              })]
            })
          }), DF.y.filter((FF => WF.features.includes(FF))).map((FF => (0, LF.jsx)(PF.LinkPreserveSearch, {
            className: "ShaderPackFeature",
            to: (0, DF.I)(FF),
            children: bW(DF.J[FF])
          }, FF)))]
        }), AF, (0, LF.jsxs)("dl", {
          className: "ShaderPackFactList",
          children: [(0, LF.jsxs)("div", {
            children: [(0, LF.jsx)("dt", {
              children: bW("shaderPackListing:downloads")
            }), (0, LF.jsx)("dd", {
              children: (0, hF.R)(WF.downloads)
            })]
          }), (0, LF.jsx)(pF, {
            label: bW("shaderPackListing:updated"),
            time: WF.listedUpdatedAt,
            now: dF
          }), (0, LF.jsx)(pF, {
            label: bW("shaderPackListing:created"),
            time: WF.publishedAt,
            now: dF
          }), null !== WF.gpuCost && (0, LF.jsxs)("div", {
            children: [(0, LF.jsx)("dt", {
              children: bW("shaderPackListing:lag")
            }), (0, LF.jsx)("dd", {
              children: bW("shaderPackListing:lagPercent", {
                percent: String((0, DF.O)(WF.gpuCost))
              })
            })]
          }), (0, LF.jsxs)("div", {
            children: [(0, LF.jsx)("dt", {
              children: bW("shaderPackListing:size")
            }), (0, LF.jsx)("dd", {
              children: bW("shaderPackListing:sizeValue", {
                kilobytes: String((0, DF.K)(WF.sourceBytes))
              })
            })]
          }), (0, LF.jsxs)("div", {
            children: [(0, LF.jsx)("dt", {
              children: bW("shaderPackListing:files")
            }), (0, LF.jsx)("dd", {
              children: WF.fileCount
            })]
          })]
        })]
      })
    }

    function pF(FF) {
      let {
        label: WF,
        time: SF,
        now: CF
      } = FF;
      const {
        t: AF
      } = (0, TF.B)(), uF = new Date(SF);
      let hF = uF.toLocaleDateString();
      if (CF - SF <= 30 * bW.i) {
        const {
          amt: FF,
          unit: WF
        } = (0, bW.eb)(SF, CF);
        hF = AF("shaderPackListing:timeAgo", {
          time: `${FF} ${WF}`
        })
      }
      return (0, LF.jsx)(iW.g, {
        tooltipInner: uF.toLocaleString(),
        children: (0, LF.jsxs)("div", {
          children: [(0, LF.jsx)("dt", {
            children: WF
          }), (0, LF.jsx)("dd", {
            children: hF
          })]
        })
      })
    }
  },
  4027: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => hF
    });
    var CF = SF(918),
      AF = SF.n(CF),
      uF = SF(971);

    function hF(FF) {
      let {
        options: WF,
        value: SF,
        onChange: CF,
        ariaLabel: hF
      } = FF;
      return (0, uF.jsx)("div", {
        className: "SegmentedToggle",
        role: "group",
        "aria-label": hF,
        children: WF.map((FF => {
          const WF = FF.value === SF;
          return (0, uF.jsx)("button", {
            type: "button",
            "aria-pressed": WF,
            className: AF()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: WF
            }),
            onClick: () => {
              WF || CF(FF.value)
            },
            children: FF.label
          }, FF.value)
        }))
      })
    }
  },
  4034: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => uF,
      c: () => hF
    });
    var CF = SF(46);
    const AF = new WeakMap,
      uF = FF => {
        var WF;
        const SF = FF.closest("[data-pad-slider]");
        return SF && null !== (WF = AF.get(SF)) && void 0 !== WF ? WF : null
      },
      hF = (FF, WF) => {
        const SF = (0, CF.useRef)(WF);
        SF.current = WF, (0, CF.useEffect)((() => {
          if (FF.current) return ((FF, WF) => (AF.set(FF, WF), () => {
            AF.get(FF) === WF && AF.delete(FF)
          }))(FF.current, {
            adjust: FF => {
              SF.current.adjust(FF)
            },
            setFraction: FF => {
              SF.current.setFraction(FF)
            },
            endDrag: () => {
              SF.current.endDrag()
            }
          })
        }), [FF])
      }
  },
  5630: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => AF,
      f: () => uF
    });
    var CF = SF(33);
    const AF = "shaderPack";
    async function uF() {
      var FF;
      let WF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (FF = await CF.f.getItem(AF, WF)) && void 0 !== FF ? FF : null
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);