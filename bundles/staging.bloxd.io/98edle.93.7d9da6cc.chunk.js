export const id = 93;
export const ids = [93, 122];
export const modules = {
  3965: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => gR,
      f: () => PW,
      g: () => iR,
      i: () => JW
    });
    var wW = MW(75),
      CW = MW(3974),
      zR = MW(3458),
      AW = MW(1180),
      bR = MW(3991),
      yR = MW(897),
      NW = MW.n(yR),
      eW = MW(1166),
      BW = MW(1495),
      tR = MW(3994),
      TW = MW(940);

    function gR(WW) {
      let {
        label: RW,
        onClick: MW,
        checked: wW,
        circleInfoText: CW,
        className: bR,
        disabled: yR
      } = WW;
      return (0, TW.jsx)("div", {
        "aria-disabled": yR || void 0,
        "data-pad-focusable": !0,
        className: NW()("SettingBox CheckboxContainer", {
          [bR]: bR,
          SettingBoxDisabled: yR
        }),
        onClick: () => {
          yR || MW(!wW)
        },
        children: (0, TW.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, TW.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, TW.jsx)(zR.e, {
              className: "SettingsCheckbox",
              checked: wW,
              disabled: yR,
              onChange: () => {}
            })
          }), (0, TW.jsxs)("div", {
            className: "CheckboxText",
            children: [RW, CW && (0, TW.jsx)("span", {
              onClick: WW => WW.stopPropagation(),
              children: (0, TW.jsx)(AW.b, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: CW
              })
            })]
          })]
        })
      })
    }

    function iR(WW) {
      let {
        name: RW,
        onChange: MW,
        min: CW,
        max: zR,
        step: bR,
        initValue: yR,
        circleInfoText: eW,
        format: BW,
        className: tR,
        padStep: gR,
        disabled: iR = !1,
        selectableMax: JW,
        cappedNote: PW
      } = WW;
      const [IW, oW] = (0, wW.useState)(yR);
      (0, wW.useEffect)((() => {
        oW(yR)
      }), [yR]);
      const lW = void 0 !== JW && JW < zR,
        FW = lW ? {
          "--slider-selectable": (JW - CW) / (zR - CW)
        } : void 0;
      return (0, TW.jsxs)("div", {
        className: NW()("SettingBox SettingsSliderDiv", {
          [tR]: tR,
          SettingBoxDisabled: iR,
          SliderCapped: lW
        }),
        style: FW,
        children: [(0, TW.jsxs)("div", {
          className: "SliderText",
          children: [`${RW}: ${BW?BW(IW):IW}`, eW && (0, TW.jsx)(AW.b, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: eW
          })]
        }), (0, TW.jsx)("div", {
          className: "SliderDiv",
          children: (0, TW.jsx)(YW, {
            value: IW,
            min: CW,
            max: zR,
            step: bR,
            onChange: WW => {
              if (lW && WW >= JW && IW === JW) return;
              const RW = lW ? Math.min(WW, JW) : WW;
              oW(RW), MW(RW)
            },
            format: BW,
            padStep: gR,
            disabled: iR
          })
        }), lW && PW && (0, TW.jsx)("div", {
          className: "SliderNote",
          children: PW
        })]
      })
    }

    function YW(WW) {
      var RW;
      let {
        value: MW,
        min: zR,
        max: AW,
        step: bR,
        onChange: yR,
        orientation: NW,
        reverse: eW,
        setIsChanging: BW,
        tooltip: gR,
        labels: iR,
        handleLabel: YW,
        format: JW,
        onChangeStart: PW,
        onChangeComplete: IW,
        padStep: oW,
        disabled: lW = !1
      } = WW;
      const FW = (0, wW.useRef)(null),
        fW = (0, wW.useRef)(null);
      (0, wW.useLayoutEffect)((() => {
        var WW, RW, MW;
        const wW = null !== (WW = null === (RW = FW.current) || void 0 === RW ? void 0 : RW.querySelector(".rangeslider")) && void 0 !== WW ? WW : null;
        null === wW || void 0 === wW || wW.setAttribute("data-pad-slider", ""), null === wW || void 0 === wW || wW.setAttribute("data-pad-focusable", ""), null === wW || void 0 === wW || null === (MW = wW.querySelector(".rangeslider__handle")) || void 0 === MW || MW.setAttribute("data-pad-slider-handle", ""), fW.current = wW
      }), []), (0, wW.useLayoutEffect)((() => {
        var WW, RW;
        lW ? null === (WW = fW.current) || void 0 === WW || WW.setAttribute("aria-disabled", "true") : null === (RW = fW.current) || void 0 === RW || RW.removeAttribute("aria-disabled")
      }), [lW]);
      const QW = (null !== (RW = String(bR).split(".")[1]) && void 0 !== RW ? RW : "").length,
        rR = WW => {
          const RW = Number((Math.round((WW - zR) / bR) * bR + zR).toFixed(QW));
          return Math.min(AW, Math.max(zR, RW))
        },
        cR = (0, wW.useRef)(!1);
      return (0, tR.i)(fW, {
        adjust: WW => {
          if (lW) return;
          const RW = null !== oW && void 0 !== oW ? oW : Math.max(bR, Math.round((AW - zR) / 20 / bR) * bR),
            wW = rR(MW + WW * RW * (eW ? -1 : 1));
          wW !== MW && (null === PW || void 0 === PW || PW(), yR(wW), null === IW || void 0 === IW || IW())
        },
        setFraction: WW => {
          if (lW) return;
          const RW = rR(zR + (eW ? 1 - WW : WW) * (AW - zR));
          RW !== MW && (cR.current || (cR.current = !0, null === PW || void 0 === PW || PW()), yR(RW))
        },
        endDrag: () => {
          cR.current && (cR.current = !1, null === IW || void 0 === IW || IW())
        }
      }), (0, TW.jsx)("div", {
        ref: FW,
        style: {
          display: "contents"
        },
        children: (0, TW.jsx)(CW.e, {
          value: MW,
          min: zR,
          max: AW,
          step: bR,
          onChange: yR,
          orientation: NW,
          reverse: eW,
          tooltip: gR,
          labels: iR,
          handleLabel: YW,
          format: JW,
          onChangeStart: () => {
            null === PW || void 0 === PW || PW(), null === BW || void 0 === BW || BW(!0)
          },
          onChangeComplete: () => {
            null === BW || void 0 === BW || BW(!1), null === IW || void 0 === IW || IW()
          }
        })
      })
    }
    async function JW() {
      const WW = eW.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await WW.getResult() && (0, BW.reloadBloxd)()
    }

    function PW(WW) {
      let {
        label: RW,
        options: MW,
        value: wW,
        onChange: CW,
        circleInfoText: zR
      } = WW;
      return (0, TW.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, TW.jsxs)("div", {
          className: "SliderText",
          children: [RW, zR && (0, TW.jsx)(AW.b, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: zR
          })]
        }), (0, TW.jsx)(bR.c, {
          ariaLabel: RW,
          options: MW,
          value: wW,
          onChange: CW
        })]
      })
    }
  },
  5666: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      default: () => HW
    });
    var wW = MW(75),
      CW = MW(1345),
      zR = MW(5557),
      AW = MW(1053),
      bR = MW(284),
      yR = MW(1157),
      NW = MW(1330),
      eW = MW(1255),
      BW = MW(1180),
      tR = MW(2011),
      TW = MW(2122),
      gR = MW(3591),
      iR = MW(969),
      YW = MW(1314),
      JW = MW(116),
      PW = MW(1027);
    const IW = MW.p + "static/media/bloxdhubLogo.6a6c367af2ad6e6f1eb3.webp";
    var oW = MW(897),
      lW = MW.n(oW),
      FW = MW(904),
      fW = MW(1166),
      QW = MW(5548),
      rR = MW(940);
    const cR = (0, wW.lazy)((() => Promise.all([MW.e(89), MW.e(120), MW.e(117), MW.e(111), MW.e(110)]).then((() => MW(5589))).then((WW => ({
      default: WW.ShaderPackPublishForm
    })))));

    function XW(WW) {
      let {
        details: RW,
        owner: MW,
        onChanged: CW
      } = WW;
      const {
        t: AW
      } = (0, PW.C)(), bR = (0, NW.useNavigatePreserveSearch)(), {
        userContext: BW
      } = (0, iR.c)(), [tR, TW] = (0, wW.useState)(!1), [gR, JW] = (0, wW.useState)(null), [IW, oW] = (0, wW.useState)(!1), {
        packId: XW,
        name: jR,
        description: kR,
        live: aR
      } = RW;
      async function sW(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : CW;
        TW(!0), JW(null);
        try {
          await WW(), RW()
        } catch (MW) {
          console.error("Failed to change a shader pack", MW), JW((0, QW.y)(MW, AW, "shaderPackListing:ownerActionFailed"))
        } finally {
          TW(!1)
        }
      }
      const dW = (0, QW.v)(BW);
      return (0, rR.jsxs)("section", {
        className: "ShaderPackOwnerPanel",
        children: [(0, rR.jsx)("h2", {
          className: "ShaderPackSectionTitle",
          children: AW("general:manage")
        }), (0, QW.bb)(MW, !(null === aR || void 0 === aR || !aR.renderId), Date.now(), AW).map((WW => (0, rR.jsxs)("div", {
          className: lW()("ShaderPackOwnerNotice", {
            Warning: "warning" === WW.tone
          }),
          children: [(0, rR.jsx)(FW.e, {
            name: "warning" === WW.tone ? "triangle-exclamation" : "circle-info"
          }), (0, rR.jsxs)("div", {
            children: [WW.text, WW.detail && (0, rR.jsx)("pre", {
              className: "ShaderPackOwnerNoticeDetail",
              children: WW.detail
            })]
          })]
        }, WW.text))), RW.ban && (0, rR.jsxs)("div", {
          className: "ShaderPackOwnerNotice Warning",
          children: [(0, rR.jsx)(FW.e, {
            name: "ban"
          }), (0, rR.jsxs)("div", {
            children: ["Banned by ", RW.ban.byName, " on ", new Date(RW.ban.at).toLocaleString()]
          })]
        }), gR && (0, rR.jsx)("div", {
          className: "ShaderPackOwnerError",
          children: gR
        }), (0, rR.jsxs)("div", {
          className: "ShaderPackOwnerActions",
          children: [(0, rR.jsxs)(eW.O, {
            disabled: tR,
            onClick: () => {
              !async function() {
                const WW = await fW.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:renameTitle",
                  initialValue: jR,
                  maxLength: zR.t,
                  submitText: "general:save",
                  validate: WW => WW.trim().length < zR.u ? AW("shaderPackListing:nameTooShort", {
                    min: String(zR.u)
                  }) : null
                }).getResult();
                "notificationTornDown" !== WW && "submit" === (null === WW || void 0 === WW ? void 0 : WW.type) && WW.value.trim() !== jR && await sW((() => YW.c.updateShaderPack(BW, {
                  packId: XW,
                  name: WW.value.trim()
                })))
              }()
            },
            children: [(0, rR.jsx)(FW.e, {
              name: "pen"
            }), " ", AW("shaderPackListing:rename")]
          }), (0, rR.jsxs)(eW.O, {
            disabled: tR,
            onClick: () => {
              !async function() {
                const WW = await fW.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:editDescription",
                  initialValue: kR,
                  maxLength: zR.k,
                  multiline: !0,
                  allowEmptySubmit: !0,
                  submitText: "general:save"
                }).getResult();
                "notificationTornDown" !== WW && "submit" === (null === WW || void 0 === WW ? void 0 : WW.type) && WW.value.trim() !== kR && await sW((() => YW.c.updateShaderPack(BW, {
                  packId: XW,
                  description: WW.value.trim()
                })))
              }()
            },
            children: [(0, rR.jsx)(FW.e, {
              name: "file-lines"
            }), " ", AW("shaderPackListing:editDescription")]
          }), (0, rR.jsxs)(eW.O, {
            disabled: tR || MW.isBanned && !MW.listed,
            onClick: () => {
              sW((() => YW.c.updateShaderPack(BW, {
                packId: XW,
                listed: !MW.listed
              })))
            },
            children: [(0, rR.jsx)(FW.e, {
              name: MW.listed ? "eye-slash" : "eye"
            }), " ", AW(MW.listed ? "shaderPackListing:unlist" : "shaderPackListing:relist")]
          }), !MW.isBanned && (0, rR.jsxs)(eW.h, {
            disabled: tR,
            onClick: () => {
              oW(!IW)
            },
            children: [(0, rR.jsx)(FW.e, {
              name: "upload"
            }), " ", AW("shaderPackListing:uploadVersion")]
          }), (0, rR.jsxs)(eW.I, {
            disabled: tR || MW.isBanned,
            onClick: () => {
              !async function() {
                !0 === await fW.NotificationProvider.showPromptPopup({
                  title: "shaderPackListing:deleteTitle",
                  subtitle: "shaderPackListing:deleteSubtitle",
                  confirmText: "general:delete",
                  cancelText: "general:cancel",
                  destructive: !0
                }).getResult() && await sW((() => YW.c.deleteShaderPack(BW, XW)), (() => {
                  bR(`${QW.$}?section=mine`, {
                    replace: !0
                  })
                }))
              }()
            },
            children: [(0, rR.jsx)(FW.e, {
              name: "trash-can"
            }), " ", AW("general:delete")]
          }), dW && (0, rR.jsxs)(eW.I, {
            disabled: tR,
            onClick: () => {
              sW((() => YW.c.setShaderPackBanned(BW, XW, !MW.isBanned)))
            },
            children: [(0, rR.jsx)(FW.e, {
              name: MW.isBanned ? "circle-check" : "ban"
            }), " ", MW.isBanned ? "Unban" : "Ban"]
          })]
        }), IW && (0, rR.jsx)(wW.Suspense, {
          fallback: (0, rR.jsx)(yR.d, {}),
          children: (0, rR.jsx)(cR, {
            existing: {
              packId: XW,
              name: jR,
              description: kR
            },
            onPublished: () => {
              oW(!1), CW()
            }
          })
        })]
      })
    }
    var jR = MW(93),
      kR = MW(1050),
      aR = MW(1111),
      sW = MW(3994),
      dW = MW(1033),
      pW = MW(5565),
      hW = MW(5560),
      UW = MW(5571);

    function EW(WW) {
      let {
        item: RW
      } = WW;
      const {
        t: MW
      } = (0, PW.C)(), [CW] = (0, pW.i)(), [AW, bR] = (0, wW.useState)(CW), [yR, NW] = (0, wW.useState)(!1), [eW, BW] = (0, wW.useState)(!1), {
        s3Url: tR
      } = dW.clientSideServerUrls, {
        width: TW,
        height: gR
      } = zR.m.large, iR = (0, zR.o)(tR, RW, AW, "large"), {
        renderVersion: YW
      } = RW;
      return (0, rR.jsxs)("div", {
        className: "ShaderPackPreviews",
        children: [(0, rR.jsx)(UW.b, {
          selected: AW,
          onSelect: WW => {
            bR(WW), NW(!1)
          },
          imageUrl: WW => (0, zR.o)(tR, RW, WW, "thumb")
        }), (0, rR.jsxs)("div", {
          className: "ShaderPackPreviewStage",
          children: [!yR && (0, rR.jsxs)("button", {
            type: "button",
            className: "ShaderPackPreviewMain",
            title: null === YW ? void 0 : MW("shaderPackListing:fullSize"),
            disabled: null === YW,
            onClick: () => {
              BW(!0)
            },
            children: [(0, rR.jsx)("img", {
              src: iR,
              width: TW,
              height: gR,
              alt: MW(QW.ib[AW]),
              draggable: !1
            }), (0, rR.jsx)(hW.e, {
              item: RW
            })]
          }), !yR && null !== YW && (0, rR.jsxs)(vR, {
            side: "Right",
            onClick: () => {
              NW(!0)
            },
            children: [(0, rR.jsx)(FW.e, {
              name: "arrows-left-right"
            }), " ", MW("shaderPackListing:compare")]
          }), yR && null !== YW && (0, rR.jsx)(xR, {
            item: RW,
            packUrl: iR,
            baselineUrl: (0, zR.j)(tR, YW, AW, "large")
          }), yR && (0, rR.jsx)(vR, {
            side: "Left",
            onClick: () => {
              NW(!1)
            },
            children: MW("shaderPackListing:withPack")
          }), yR && (0, rR.jsx)(vR, {
            side: "Right",
            onClick: () => {
              NW(!1)
            },
            children: MW("shaderPackListing:withoutPack")
          })]
        }), eW && (0, rR.jsx)(VW, {
          fullUrl: (0, zR.o)(tR, RW, AW, "full"),
          largeUrl: iR,
          alt: MW(QW.ib[AW]),
          onClose: () => {
            BW(!1)
          }
        })]
      })
    }

    function VW(WW) {
      let {
        fullUrl: RW,
        largeUrl: MW,
        alt: CW,
        onClose: zR
      } = WW;
      const AW = (0, wW.useRef)(null);
      return (0, aR.r)("popup", AW, zR), (0, wW.useEffect)((() => {
        function WW(WW) {
          "Escape" === WW.key && (WW.stopPropagation(), zR())
        }
        return window.addEventListener("keydown", WW, !0), () => {
          window.removeEventListener("keydown", WW, !0)
        }
      }), [zR]), (0, jR.createPortal)((0, rR.jsxs)("div", {
        ref: AW,
        className: "ShaderPackFullSize",
        onClick: zR,
        children: [(0, rR.jsx)("img", {
          className: "ShaderPackFullSizeImage",
          src: RW,
          alt: CW,
          draggable: !1,
          style: {
            backgroundImage: `url(${MW})`
          }
        }), (0, rR.jsx)(eW.l, {
          className: "ShaderPackFullSizeClose",
          onClick: zR
        })]
      }), document.body)
    }
    const mR = 5;

    function xR(WW) {
      let {
        item: RW,
        packUrl: MW,
        baselineUrl: CW
      } = WW;
      const {
        t: AW
      } = (0, PW.C)(), [bR, yR] = (0, wW.useState)(50), NW = (0, wW.useRef)(!1), eW = (0, wW.useRef)(null), {
        width: BW,
        height: tR
      } = zR.m.large;

      function TW(WW) {
        yR((RW => (0, kR.e)(RW + WW, 0, 100)))
      }

      function gR(WW) {
        const RW = WW.currentTarget.getBoundingClientRect();
        yR((0, kR.e)((WW.clientX - RW.left) / RW.width * 100, 0, 100))
      }
      return (0, sW.i)(eW, {
        adjust: WW => {
          TW(WW * mR)
        },
        setFraction: WW => {
          yR(100 * WW)
        },
        endDrag: () => {}
      }), (0, rR.jsxs)("div", {
        ref: eW,
        className: "ShaderPackCompare",
        "data-pad-slider": "",
        "data-pad-focusable": "",
        role: "slider",
        tabIndex: 0,
        "aria-label": AW("shaderPackListing:compare"),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(bR),
        style: {
          "--split": `${bR}%`
        },
        onKeyDown: function(WW) {
          const RW = "ArrowLeft" === WW.key ? -mR : "ArrowRight" === WW.key ? mR : 0;
          0 !== RW && (WW.preventDefault(), TW(RW))
        },
        onPointerDown: WW => {
          NW.current = !0, WW.currentTarget.setPointerCapture(WW.pointerId), gR(WW)
        },
        onPointerMove: WW => {
          NW.current && gR(WW)
        },
        onPointerUp: () => {
          NW.current = !1
        },
        onPointerCancel: () => {
          NW.current = !1
        },
        children: [(0, rR.jsx)("img", {
          className: "ShaderPackCompareBaseline",
          src: CW,
          width: BW,
          height: tR,
          alt: "",
          draggable: !1,
          style: {
            backgroundImage: `url(${MW})`
          }
        }), (0, rR.jsx)("div", {
          className: "ShaderPackCompareLine"
        }), (0, rR.jsx)("img", {
          className: "ShaderPackComparePack",
          src: MW,
          width: BW,
          height: tR,
          alt: "",
          draggable: !1
        }), (0, rR.jsx)(hW.e, {
          item: RW,
          className: "ShaderPackCompareNotice"
        })]
      })
    }

    function vR(WW) {
      let {
        side: RW,
        onClick: MW,
        children: wW
      } = WW;
      return (0, rR.jsx)("button", {
        type: "button",
        className: `ShaderPackStageButton ${RW}`,
        onClick: MW,
        children: (0, rR.jsx)("span", {
          className: "ShaderPackStageButtonFace SmallTextBold",
          children: wW
        })
      })
    }
    var KW = MW(3965),
      uW = MW(230),
      OW = MW(5661);
    const nW = {
      compiler: "shaderPack:compilerUnavailable",
      download: "shaderPackListing:useDownloadFailed",
      apiVersion: "shaderPackListing:useOtherApiVersion",
      invalid: "shaderPackListing:useInvalid",
      errors: "shaderPackListing:useFailsHere",
      save: "shaderPack:saveFailed"
    };

    function GW(WW) {
      const {
        userContext: RW
      } = (0, iR.c)(), [CW, zR] = (0, wW.useState)(null), [AW, bR] = (0, wW.useState)(!1), [yR, NW] = (0, wW.useState)(!1), [eW, BW] = (0, wW.useState)(null), tR = null === WW || void 0 === WW ? void 0 : WW.packId, TW = null === WW || void 0 === WW ? void 0 : WW.sourceHash;
      return (0, wW.useEffect)((() => {
        if (bR(!1), BW(null), void 0 === tR) return;
        let WW = !1;
        return Promise.all([(0, JW.hasUsableWebGpuAdapter)(), (0, OW.h)()]).then((RW => {
          let [MW, wW] = RW;
          var CW;
          WW || (zR(MW), bR((null === wW || void 0 === wW || null === (CW = wW.listing) || void 0 === CW ? void 0 : CW.packId) === tR && wW.listing.sourceHash === TW))
        })).catch((RW => {
          console.error("Failed to check whether this shader pack can be used", RW), WW || zR(!1)
        })), () => {
          WW = !0
        }
      }), [tR, TW]), {
        webGpuUsable: CW,
        inUse: AW,
        busy: yR,
        errorKey: eW,
        use: () => {
          null !== WW && async function(WW) {
            NW(!0), BW(null);
            try {
              const {
                installListedShaderPack: wW
              } = await Promise.all([MW.e(120), MW.e(117), MW.e(112)]).then((() => MW(38086))), CW = await wW({
                packId: WW.packId,
                sourceHash: WW.sourceHash,
                name: WW.name,
                ownerName: WW.ownerName,
                description: WW.description
              });
              if ("failed" === CW.kind) return void BW(nW[CW.reason]);
              bR(!0), YW.c.recordShaderPackDownload(RW, WW.packId).catch((WW => {
                console.error("Failed to count a shader pack's download", WW)
              })), (0, KW.i)()
            } catch (wW) {
              console.error("Failed to use the shader pack", wW), BW("shaderPack:unexpectedError")
            } finally {
              NW(!1)
            }
          }(WW)
        }
      }
    }

    function LW(WW) {
      let {
        packUse: RW
      } = WW;
      const {
        t: MW
      } = (0, PW.C)(), {
        webGpuUsable: wW,
        inUse: CW,
        busy: zR,
        errorKey: AW,
        use: bR
      } = RW;
      return (0, rR.jsxs)("div", {
        className: "ShaderPackUse",
        children: [(0, rR.jsxs)(eW.m, {
          disabled: !0 !== wW || CW,
          loading: zR,
          onClick: bR,
          children: [(0, rR.jsx)(FW.e, {
            name: CW ? "check" : "download"
          }), " ", MW(CW ? "shaderPackListing:inUse" : "shaderPackListing:use")]
        }), !1 === wW && (0, rR.jsx)("div", {
          className: "ShaderPackUseNote",
          children: MW((0, uW.f)() ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), AW && (0, rR.jsx)("div", {
          className: "ShaderPackUseNote Error",
          children: MW(AW)
        })]
      })
    }

    function HW() {
      var WW;
      const {
        t: RW
      } = (0, PW.C)(), MW = (0, NW.useNavigatePreserveSearch)(), {
        packId: zR
      } = (0, CW.A)(), {
        userContext: AW,
        isUserContextUpdating: bR
      } = (0, iR.c)(), [BW, tR] = (0, wW.useState)(null), [TW, JW] = (0, wW.useState)(null), [IW, oW] = (0, wW.useState)(0), lW = (0, wW.useRef)(0);

      function FW() {
        var WW;
        null !== (WW = (0, NW.getPreviousLocation)()) && void 0 !== WW && WW.startsWith(QW.$) ? MW(-1) : MW(QW.$)
      }(0, gR.c)(FW), (0, pW.d)(), (0, wW.useEffect)((() => {
        if (bR || void 0 === zR) return;
        const WW = ++lW.current;
        JW(null), YW.c.getShaderPack(AW, zR).then((RW => {
          lW.current === WW && tR(RW)
        })).catch((RW => {
          lW.current === WW && (console.error("Failed to get the shader pack", RW), tR(null), JW({
            error: RW
          }))
        }))
      }), [zR, AW, bR, IW]);
      const fW = () => {
          oW((WW => WW + 1))
        },
        cR = (null === BW || void 0 === BW ? void 0 : BW.packId) === zR ? BW : null,
        jR = (0, pW.k)(),
        kR = GW(null !== (WW = null === cR || void 0 === cR ? void 0 : cR.live) && void 0 !== WW ? WW : null),
        aR = null !== cR && void 0 !== cR && cR.live ? (0, rR.jsx)(DW, {
          item: cR.live,
          favourites: jR,
          packUse: kR
        }) : null;
      return (0, rR.jsxs)("article", {
        className: "ShaderPackInformation AnimFadeIn",
        children: [(0, rR.jsx)(eW.d, {
          onClick: FW,
          children: RW("shaderPackListing:backToPacks")
        }), null === cR && null === TW && (0, rR.jsx)("div", {
          className: "ShaderPackInformationMessage",
          children: (0, rR.jsx)(yR.d, {})
        }), null !== TW && (0, rR.jsxs)("div", {
          className: "ShaderPackInformationMessage",
          children: [(0, QW.y)(TW.error, RW, "shaderPackListing:loadPackFailed"), (0, rR.jsx)(eW.h, {
            onClick: fW,
            children: RW("general:tryAgain")
          })]
        }), null !== cR && null === TW && (0, rR.jsxs)("div", {
          className: "ShaderPackInformationBody",
          children: [(0, rR.jsxs)("header", {
            className: "ShaderPackInformationHeader",
            children: [(0, rR.jsx)("h1", {
              className: "FullyFancyText",
              children: cR.name
            }), aR]
          }), cR.live && (0, rR.jsx)(EW, {
            item: cR.live
          }), cR.live && (0, rR.jsx)(qR, {
            item: cR.live,
            ownerPreview: cR.ownerPreview,
            bloxdhubSlug: cR.bloxdhubSlug,
            actions: aR
          }), cR.owner && (0, rR.jsx)(XW, {
            details: cR,
            owner: cR.owner,
            onChanged: fW
          })]
        })]
      })
    }

    function DW(WW) {
      let {
        item: RW,
        favourites: MW,
        packUse: wW
      } = WW;
      const CW = MW.isFavourite(RW.packId);
      return (0, rR.jsxs)("div", {
        className: "ShaderPackInformationActions",
        children: [JW.featureFlags.settings.canUseShaderPacks && (0, rR.jsx)(LW, {
          packUse: wW
        }), (0, rR.jsx)(eW.s, {
          className: "ShaderPackInformationLike",
          onClick: () => {
            MW.toggle(RW.packId)
          },
          isLiked: !0 === CW,
          isLoading: null === CW
        })]
      })
    }

    function qR(WW) {
      let {
        item: RW,
        ownerPreview: MW,
        bloxdhubSlug: wW,
        actions: CW
      } = WW;
      const {
        t: bR
      } = (0, PW.C)(), yR = (0, TW.i)(), eW = null === wW ? null : (0, zR.e)(wW);
      return (0, rR.jsxs)("div", {
        className: "ShaderPackFacts",
        children: [RW.description && (0, rR.jsx)("p", {
          className: "ShaderPackDescription",
          children: RW.description
        }), (0, rR.jsxs)("div", {
          className: "ShaderPackFeatureList",
          children: [(null !== MW || null !== eW) && (0, rR.jsx)("div", {
            className: "ShaderPackAuthor",
            children: null !== MW ? (0, rR.jsxs)(rR.Fragment, {
              children: [(0, rR.jsx)(tR.e, {
                playerSocialPreview: MW,
                showLocation: !1,
                linkToProfile: !0
              }), null !== eW && (0, rR.jsx)("a", {
                className: "ShaderPackBloxdhubLogo",
                href: eW,
                target: "_blank",
                rel: "noopener noreferrer",
                children: (0, rR.jsx)("img", {
                  src: IW,
                  alt: zR.c
                })
              })]
            }) : (0, rR.jsxs)("a", {
              className: "ShaderPackBloxdhubName",
              href: eW,
              target: "_blank",
              rel: "noopener noreferrer",
              children: [zR.c, (0, rR.jsx)("img", {
                src: IW,
                alt: ""
              })]
            })
          }), QW.C.filter((WW => RW.features.includes(WW))).map((WW => (0, rR.jsx)(NW.LinkPreserveSearch, {
            className: "ShaderPackFeature",
            to: (0, QW.M)(WW),
            children: bR(QW.P[WW])
          }, WW)))]
        }), CW, (0, rR.jsxs)("dl", {
          className: "ShaderPackFactList",
          children: [(0, rR.jsxs)("div", {
            children: [(0, rR.jsx)("dt", {
              children: bR("shaderPackListing:downloads")
            }), (0, rR.jsx)("dd", {
              children: (0, AW.I)(RW.downloads)
            })]
          }), (0, rR.jsx)(ZW, {
            label: bR("shaderPackListing:updated"),
            time: RW.listedUpdatedAt,
            now: yR
          }), (0, rR.jsx)(ZW, {
            label: bR("shaderPackListing:created"),
            time: RW.publishedAt,
            now: yR
          }), null !== RW.gpuCost && (0, rR.jsxs)("div", {
            children: [(0, rR.jsx)("dt", {
              children: bR("shaderPackListing:lag")
            }), (0, rR.jsx)("dd", {
              children: bR("shaderPackListing:lagPercent", {
                percent: String((0, QW.X)(RW.gpuCost))
              })
            })]
          }), (0, rR.jsxs)("div", {
            children: [(0, rR.jsx)("dt", {
              children: bR("shaderPackListing:size")
            }), (0, rR.jsx)("dd", {
              children: bR("shaderPackListing:sizeValue", {
                kilobytes: String((0, QW.T)(RW.sourceBytes))
              })
            })]
          }), (0, rR.jsxs)("div", {
            children: [(0, rR.jsx)("dt", {
              children: bR("shaderPackListing:files")
            }), (0, rR.jsx)("dd", {
              children: RW.fileCount
            })]
          })]
        })]
      })
    }

    function ZW(WW) {
      let {
        label: RW,
        time: MW,
        now: wW
      } = WW;
      const {
        t: CW,
        selectedLanguage: zR
      } = (0, PW.C)(), AW = new Date(MW);
      let yR = AW.toLocaleDateString();
      if (wW - MW <= 30 * bR.f) {
        const WW = (0, PW.m)(zR.code, "shaderPackListing:timeAgo");
        yR = CW("shaderPackListing:timeAgo", {
          time: (0, bR.bb)(WW, MW, wW)
        })
      }
      return (0, rR.jsx)(BW.e, {
        tooltipInner: AW.toLocaleString(),
        children: (0, rR.jsxs)("div", {
          children: [(0, rR.jsx)("dt", {
            children: RW
          }), (0, rR.jsx)("dd", {
            children: yR
          })]
        })
      })
    }
  },
  3991: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => AW
    });
    var wW = MW(897),
      CW = MW.n(wW),
      zR = MW(940);

    function AW(WW) {
      let {
        options: RW,
        value: MW,
        onChange: wW,
        ariaLabel: AW
      } = WW;
      return (0, zR.jsx)("div", {
        className: "SegmentedToggle",
        role: "group",
        "aria-label": AW,
        children: RW.map((WW => {
          const RW = WW.value === MW;
          return (0, zR.jsx)("button", {
            type: "button",
            "aria-pressed": RW,
            className: CW()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: RW
            }),
            onClick: () => {
              RW || wW(WW.value)
            },
            children: WW.label
          }, WW.value)
        }))
      })
    }
  },
  3994: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => zR,
      i: () => AW
    });
    var wW = MW(75);
    const CW = new WeakMap,
      zR = WW => {
        var RW;
        const MW = WW.closest("[data-pad-slider]");
        return MW && null !== (RW = CW.get(MW)) && void 0 !== RW ? RW : null
      },
      AW = (WW, RW) => {
        const MW = (0, wW.useRef)(RW);
        MW.current = RW, (0, wW.useEffect)((() => {
          if (WW.current) return ((WW, RW) => (CW.set(WW, RW), () => {
            CW.get(WW) === RW && CW.delete(WW)
          }))(WW.current, {
            adjust: WW => {
              MW.current.adjust(WW)
            },
            setFraction: WW => {
              MW.current.setFraction(WW)
            },
            endDrag: () => {
              MW.current.endDrag()
            }
          })
        }), [WW])
      }
  },
  5661: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => CW,
      h: () => zR
    });
    var wW = MW(50);
    const CW = "shaderPack";
    async function zR() {
      var WW;
      let RW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (WW = await wW.e.getItem(CW, RW)) && void 0 !== WW ? WW : null
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);