export const id = 103;
export const ids = [103];
export const modules = {
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
  6011: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      default: () => aJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(1421),
      eJ = ZJ(5889),
      XJ = ZJ(1122),
      AJ = ZJ(235),
      qJ = ZJ(1232),
      jJ = ZJ(1406),
      YJ = ZJ(1329),
      hJ = ZJ(1259),
      DJ = ZJ(2246),
      sJ = ZJ(2372),
      nJ = ZJ(3977),
      GJ = ZJ(1022),
      fJ = ZJ(1389),
      xJ = ZJ(80),
      rJ = ZJ(1086);
    const vJ = ZJ.p + "static/media/bloxdhubLogo.6a6c367af2ad6e6f1eb3.webp";
    var mJ = ZJ(926),
      QJ = ZJ.n(mJ),
      EJ = ZJ(942),
      VJ = ZJ(1247),
      KJ = ZJ(5886),
      yJ = ZJ(990);
    const SJ = (0, FJ.lazy)((() => Promise.all([ZJ.e(99), ZJ.e(126), ZJ.e(124), ZJ.e(118), ZJ.e(117)]).then((() => ZJ(5926))).then((JJ => ({
      default: JJ.ShaderPackPublishForm
    })))));

    function IJ(JJ) {
      let {
        details: cJ,
        owner: ZJ,
        onChanged: UJ
      } = JJ;
      const {
        t: XJ
      } = (0, rJ.F)(), AJ = (0, jJ.useNavigatePreserveSearch)(), {
        userContext: hJ
      } = (0, GJ.d)(), [DJ, sJ] = (0, FJ.useState)(!1), [nJ, xJ] = (0, FJ.useState)(null), [vJ, mJ] = (0, FJ.useState)(!1), {
        packId: IJ,
        name: MJ,
        description: bJ,
        live: wJ
      } = cJ;
      async function WJ(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UJ;
        sJ(!0), xJ(null);
        try {
          await JJ(), cJ()
        } catch (ZJ) {
          console.error("Failed to change a shader pack", ZJ), xJ((0, KJ.C)(ZJ, XJ, "shaderPackListing:ownerActionFailed"))
        } finally {
          sJ(!1)
        }
      }
      const gJ = (0, KJ.w)(hJ);
      return (0, yJ.jsxs)("section", {
        className: "ShaderPackOwnerPanel",
        children: [(0, yJ.jsx)("h2", {
          className: "ShaderPackSectionTitle",
          children: XJ("general:manage")
        }), (0, KJ.U)(ZJ, !(null === wJ || void 0 === wJ || !wJ.renderId), Date.now(), XJ).map((JJ => (0, yJ.jsxs)("div", {
          className: QJ()("ShaderPackOwnerNotice", {
            Warning: "warning" === JJ.tone
          }),
          children: [(0, yJ.jsx)(EJ.c, {
            name: "warning" === JJ.tone ? "triangle-exclamation" : "circle-info"
          }), (0, yJ.jsxs)("div", {
            children: [JJ.text, JJ.detail && (0, yJ.jsx)("pre", {
              className: "ShaderPackOwnerNoticeDetail",
              children: JJ.detail
            })]
          })]
        }, JJ.text))), cJ.ban && (0, yJ.jsxs)("div", {
          className: "ShaderPackOwnerNotice Warning",
          children: [(0, yJ.jsx)(EJ.c, {
            name: "ban"
          }), (0, yJ.jsxs)("div", {
            children: ["Banned by ", cJ.ban.byName, " on ", new Date(cJ.ban.at).toLocaleString()]
          })]
        }), nJ && (0, yJ.jsx)("div", {
          className: "ShaderPackOwnerError",
          children: nJ
        }), (0, yJ.jsxs)("div", {
          className: "ShaderPackOwnerActions",
          children: [(0, yJ.jsxs)(YJ.O, {
            disabled: DJ,
            onClick: () => {
              !async function() {
                const JJ = await VJ.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:renameTitle",
                  initialValue: MJ,
                  maxLength: eJ.u,
                  submitText: "general:save",
                  validate: JJ => JJ.trim().length < eJ.x ? XJ("shaderPackListing:nameTooShort", {
                    min: String(eJ.x)
                  }) : null
                }).getResult();
                "notificationTornDown" !== JJ && "submit" === (null === JJ || void 0 === JJ ? void 0 : JJ.type) && JJ.value.trim() !== MJ && await WJ((() => fJ.c.updateShaderPack(hJ, {
                  packId: IJ,
                  name: JJ.value.trim()
                })))
              }()
            },
            children: [(0, yJ.jsx)(EJ.c, {
              name: "pen"
            }), " ", XJ("shaderPackListing:rename")]
          }), (0, yJ.jsxs)(YJ.O, {
            disabled: DJ,
            onClick: () => {
              !async function() {
                const JJ = await VJ.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:editDescription",
                  initialValue: bJ,
                  maxLength: eJ.n,
                  multiline: !0,
                  allowEmptySubmit: !0,
                  submitText: "general:save"
                }).getResult();
                "notificationTornDown" !== JJ && "submit" === (null === JJ || void 0 === JJ ? void 0 : JJ.type) && JJ.value.trim() !== bJ && await WJ((() => fJ.c.updateShaderPack(hJ, {
                  packId: IJ,
                  description: JJ.value.trim()
                })))
              }()
            },
            children: [(0, yJ.jsx)(EJ.c, {
              name: "file-lines"
            }), " ", XJ("shaderPackListing:editDescription")]
          }), (0, yJ.jsxs)(YJ.O, {
            disabled: DJ || ZJ.isBanned && !ZJ.listed,
            onClick: () => {
              WJ((() => fJ.c.updateShaderPack(hJ, {
                packId: IJ,
                listed: !ZJ.listed
              })))
            },
            children: [(0, yJ.jsx)(EJ.c, {
              name: ZJ.listed ? "eye-slash" : "eye"
            }), " ", XJ(ZJ.listed ? "shaderPackListing:unlist" : "shaderPackListing:relist")]
          }), !ZJ.isBanned && (0, yJ.jsxs)(YJ.d, {
            disabled: DJ,
            onClick: () => {
              mJ(!vJ)
            },
            children: [(0, yJ.jsx)(EJ.c, {
              name: "upload"
            }), " ", XJ("shaderPackListing:uploadVersion")]
          }), (0, yJ.jsxs)(YJ.J, {
            disabled: DJ || ZJ.isBanned,
            onClick: () => {
              !async function() {
                !0 === await VJ.NotificationProvider.showPromptPopup({
                  title: "shaderPackListing:deleteTitle",
                  subtitle: "shaderPackListing:deleteSubtitle",
                  confirmText: "general:delete",
                  cancelText: "general:cancel",
                  destructive: !0
                }).getResult() && await WJ((() => fJ.c.deleteShaderPack(hJ, IJ)), (() => {
                  AJ(`${KJ.S}?section=mine`, {
                    replace: !0
                  })
                }))
              }()
            },
            children: [(0, yJ.jsx)(EJ.c, {
              name: "trash-can"
            }), " ", XJ("general:delete")]
          }), gJ && (0, yJ.jsxs)(YJ.J, {
            disabled: DJ,
            onClick: () => {
              WJ((() => fJ.c.setShaderPackBanned(hJ, IJ, !ZJ.isBanned)))
            },
            children: [(0, yJ.jsx)(EJ.c, {
              name: ZJ.isBanned ? "circle-check" : "ban"
            }), " ", ZJ.isBanned ? "Unban" : "Ban"]
          })]
        }), vJ && (0, yJ.jsx)(FJ.Suspense, {
          fallback: (0, yJ.jsx)(qJ.c, {}),
          children: (0, yJ.jsx)(SJ, {
            existing: {
              packId: IJ,
              name: MJ,
              description: bJ
            },
            onPublished: () => {
              mJ(!1), UJ()
            }
          })
        })]
      })
    }
    var MJ = ZJ(60),
      bJ = ZJ(1671),
      wJ = ZJ(1181),
      WJ = ZJ(4433),
      gJ = ZJ(1098),
      HJ = ZJ(5903),
      PJ = ZJ(5896),
      kJ = ZJ(5913);

    function pJ(JJ) {
      let {
        item: cJ
      } = JJ;
      const {
        t: ZJ
      } = (0, rJ.F)(), [UJ] = (0, HJ.g)(), [XJ, AJ] = (0, FJ.useState)(UJ), [qJ, jJ] = (0, FJ.useState)(!1), [YJ, hJ] = (0, FJ.useState)(!1), {
        s3Url: DJ
      } = gJ.clientSideServerUrls, {
        width: sJ,
        height: nJ
      } = eJ.o.large, GJ = (0, eJ.q)(DJ, cJ, XJ, "large"), {
        renderVersion: fJ
      } = cJ;
      return (0, yJ.jsxs)("div", {
        className: "ShaderPackPreviews",
        children: [(0, yJ.jsx)(kJ.e, {
          selected: XJ,
          onSelect: JJ => {
            AJ(JJ), jJ(!1)
          },
          imageUrl: JJ => (0, eJ.q)(DJ, cJ, JJ, "thumb")
        }), (0, yJ.jsxs)("div", {
          className: "ShaderPackPreviewStage",
          children: [!qJ && (0, yJ.jsxs)("button", {
            type: "button",
            className: "ShaderPackPreviewMain",
            title: null === fJ ? void 0 : ZJ("shaderPackListing:fullSize"),
            disabled: null === fJ,
            onClick: () => {
              hJ(!0)
            },
            children: [(0, yJ.jsx)("img", {
              src: GJ,
              width: sJ,
              height: nJ,
              alt: ZJ(KJ.eb[XJ]),
              draggable: !1
            }), (0, yJ.jsx)(PJ.b, {
              item: cJ
            })]
          }), !qJ && null !== fJ && (0, yJ.jsxs)(OJ, {
            side: "Right",
            onClick: () => {
              jJ(!0)
            },
            children: [(0, yJ.jsx)(EJ.c, {
              name: "arrows-left-right"
            }), " ", ZJ("shaderPackListing:compare")]
          }), qJ && null !== fJ && (0, yJ.jsx)(NJ, {
            item: cJ,
            packUrl: GJ,
            baselineUrl: (0, eJ.l)(DJ, fJ, XJ, "large")
          }), qJ && (0, yJ.jsx)(OJ, {
            side: "Left",
            onClick: () => {
              jJ(!1)
            },
            children: ZJ("shaderPackListing:withPack")
          }), qJ && (0, yJ.jsx)(OJ, {
            side: "Right",
            onClick: () => {
              jJ(!1)
            },
            children: ZJ("shaderPackListing:withoutPack")
          })]
        }), YJ && (0, yJ.jsx)(dJ, {
          fullUrl: (0, eJ.q)(DJ, cJ, XJ, "full"),
          largeUrl: GJ,
          alt: ZJ(KJ.eb[XJ]),
          onClose: () => {
            hJ(!1)
          }
        })]
      })
    }

    function dJ(JJ) {
      let {
        fullUrl: cJ,
        largeUrl: ZJ,
        alt: UJ,
        onClose: eJ
      } = JJ;
      const XJ = (0, FJ.useRef)(null);
      return (0, wJ.p)("popup", XJ, eJ), (0, FJ.useEffect)((() => {
        function JJ(JJ) {
          "Escape" === JJ.key && (JJ.stopPropagation(), eJ())
        }
        return window.addEventListener("keydown", JJ, !0), () => {
          window.removeEventListener("keydown", JJ, !0)
        }
      }), [eJ]), (0, MJ.createPortal)((0, yJ.jsxs)("div", {
        ref: XJ,
        className: "ShaderPackFullSize",
        onClick: eJ,
        children: [(0, yJ.jsx)("img", {
          className: "ShaderPackFullSizeImage",
          src: cJ,
          alt: UJ,
          draggable: !1,
          style: {
            backgroundImage: `url(${ZJ})`
          }
        }), (0, yJ.jsx)(YJ.j, {
          className: "ShaderPackFullSizeClose",
          onClick: eJ
        })]
      }), document.body)
    }
    const zJ = 5;

    function NJ(JJ) {
      let {
        item: cJ,
        packUrl: ZJ,
        baselineUrl: UJ
      } = JJ;
      const {
        t: XJ
      } = (0, rJ.F)(), [AJ, qJ] = (0, FJ.useState)(50), jJ = (0, FJ.useRef)(!1), YJ = (0, FJ.useRef)(null), {
        width: hJ,
        height: DJ
      } = eJ.o.large;

      function sJ(JJ) {
        qJ((cJ => (0, bJ.f)(cJ + JJ, 0, 100)))
      }

      function nJ(JJ) {
        const cJ = JJ.currentTarget.getBoundingClientRect();
        qJ((0, bJ.f)((JJ.clientX - cJ.left) / cJ.width * 100, 0, 100))
      }
      return (0, WJ.i)(YJ, {
        adjust: JJ => {
          sJ(JJ * zJ)
        },
        setFraction: JJ => {
          qJ(100 * JJ)
        },
        endDrag: () => {}
      }), (0, yJ.jsxs)("div", {
        ref: YJ,
        className: "ShaderPackCompare",
        "data-pad-slider": "",
        "data-pad-focusable": "",
        role: "slider",
        tabIndex: 0,
        "aria-label": XJ("shaderPackListing:compare"),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(AJ),
        style: {
          "--split": `${AJ}%`
        },
        onKeyDown: function(JJ) {
          const cJ = "ArrowLeft" === JJ.key ? -zJ : "ArrowRight" === JJ.key ? zJ : 0;
          0 !== cJ && (JJ.preventDefault(), sJ(cJ))
        },
        onPointerDown: JJ => {
          jJ.current = !0, JJ.currentTarget.setPointerCapture(JJ.pointerId), nJ(JJ)
        },
        onPointerMove: JJ => {
          jJ.current && nJ(JJ)
        },
        onPointerUp: () => {
          jJ.current = !1
        },
        onPointerCancel: () => {
          jJ.current = !1
        },
        children: [(0, yJ.jsx)("img", {
          className: "ShaderPackCompareBaseline",
          src: UJ,
          width: hJ,
          height: DJ,
          alt: "",
          draggable: !1,
          style: {
            backgroundImage: `url(${ZJ})`
          }
        }), (0, yJ.jsx)("div", {
          className: "ShaderPackCompareLine"
        }), (0, yJ.jsx)("img", {
          className: "ShaderPackComparePack",
          src: ZJ,
          width: hJ,
          height: DJ,
          alt: "",
          draggable: !1
        }), (0, yJ.jsx)(PJ.b, {
          item: cJ,
          className: "ShaderPackCompareNotice"
        })]
      })
    }

    function OJ(JJ) {
      let {
        side: cJ,
        onClick: ZJ,
        children: FJ
      } = JJ;
      return (0, yJ.jsx)("button", {
        type: "button",
        className: `ShaderPackStageButton ${cJ}`,
        onClick: ZJ,
        children: (0, yJ.jsx)("span", {
          className: "ShaderPackStageButtonFace SmallTextBold",
          children: FJ
        })
      })
    }
    var TJ = ZJ(4401),
      CJ = ZJ(223),
      uJ = ZJ(6004);
    const iJ = {
      compiler: "shaderPack:compilerUnavailable",
      download: "shaderPackListing:useDownloadFailed",
      apiVersion: "shaderPackListing:useOtherApiVersion",
      invalid: "shaderPackListing:useInvalid",
      errors: "shaderPackListing:useFailsHere",
      save: "shaderPack:saveFailed"
    };

    function RJ(JJ) {
      const {
        userContext: cJ
      } = (0, GJ.d)(), [UJ, eJ] = (0, FJ.useState)(null), [XJ, AJ] = (0, FJ.useState)(!1), [qJ, jJ] = (0, FJ.useState)(!1), [YJ, hJ] = (0, FJ.useState)(null), DJ = null === JJ || void 0 === JJ ? void 0 : JJ.packId, sJ = null === JJ || void 0 === JJ ? void 0 : JJ.sourceHash;
      return (0, FJ.useEffect)((() => {
        if (AJ(!1), hJ(null), void 0 === DJ) return;
        let JJ = !1;
        return Promise.all([(0, xJ.hasUsableWebGpuAdapter)(), (0, uJ.f)()]).then((cJ => {
          let [ZJ, FJ] = cJ;
          var UJ;
          JJ || (eJ(ZJ), AJ((null === FJ || void 0 === FJ || null === (UJ = FJ.listing) || void 0 === UJ ? void 0 : UJ.packId) === DJ && FJ.listing.sourceHash === sJ))
        })).catch((cJ => {
          console.error("Failed to check whether this shader pack can be used", cJ), JJ || eJ(!1)
        })), () => {
          JJ = !0
        }
      }), [DJ, sJ]), {
        webGpuUsable: UJ,
        inUse: XJ,
        busy: qJ,
        errorKey: YJ,
        use: () => {
          null !== JJ && async function(JJ) {
            jJ(!0), hJ(null);
            try {
              const {
                installListedShaderPack: FJ
              } = await Promise.all([ZJ.e(126), ZJ.e(124), ZJ.e(119)]).then((() => ZJ(39262))), UJ = await FJ({
                packId: JJ.packId,
                sourceHash: JJ.sourceHash,
                name: JJ.name,
                ownerName: JJ.ownerName,
                description: JJ.description
              });
              if ("failed" === UJ.kind) return void hJ(iJ[UJ.reason]);
              AJ(!0), fJ.c.recordShaderPackDownload(cJ, JJ.packId).catch((JJ => {
                console.error("Failed to count a shader pack's download", JJ)
              })), (0, TJ.l)()
            } catch (FJ) {
              console.error("Failed to use the shader pack", FJ), hJ("shaderPack:unexpectedError")
            } finally {
              jJ(!1)
            }
          }(JJ)
        }
      }
    }

    function LJ(JJ) {
      let {
        packUse: cJ
      } = JJ;
      const {
        t: ZJ
      } = (0, rJ.F)(), {
        webGpuUsable: FJ,
        inUse: UJ,
        busy: eJ,
        errorKey: XJ,
        use: AJ
      } = cJ;
      return (0, yJ.jsxs)("div", {
        className: "ShaderPackUse",
        children: [(0, yJ.jsxs)(YJ.m, {
          disabled: !0 !== FJ || UJ,
          loading: eJ,
          onClick: AJ,
          children: [(0, yJ.jsx)(EJ.c, {
            name: UJ ? "check" : "download"
          }), " ", ZJ(UJ ? "shaderPackListing:inUse" : "shaderPackListing:use")]
        }), !1 === FJ && (0, yJ.jsx)("div", {
          className: "ShaderPackUseNote",
          children: ZJ((0, CJ.e)() ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), XJ && (0, yJ.jsx)("div", {
          className: "ShaderPackUseNote Error",
          children: ZJ(XJ)
        })]
      })
    }

    function aJ() {
      var JJ;
      const {
        t: cJ
      } = (0, rJ.F)(), ZJ = (0, jJ.useNavigatePreserveSearch)(), {
        packId: eJ
      } = (0, UJ.x)(), {
        userContext: XJ,
        isUserContextUpdating: AJ
      } = (0, GJ.d)(), [hJ, DJ] = (0, FJ.useState)(null), [sJ, xJ] = (0, FJ.useState)(null), [vJ, mJ] = (0, FJ.useState)(0), QJ = (0, FJ.useRef)(0);

      function EJ() {
        var JJ;
        null !== (JJ = (0, jJ.getPreviousLocation)()) && void 0 !== JJ && JJ.startsWith(KJ.S) ? ZJ(-1) : ZJ(KJ.S)
      }(0, nJ.d)(EJ), (0, HJ.b)(), (0, FJ.useEffect)((() => {
        if (AJ || void 0 === eJ) return;
        const JJ = ++QJ.current;
        xJ(null), fJ.c.getShaderPack(XJ, eJ).then((cJ => {
          QJ.current === JJ && DJ(cJ)
        })).catch((cJ => {
          QJ.current === JJ && (console.error("Failed to get the shader pack", cJ), DJ(null), xJ({
            error: cJ
          }))
        }))
      }), [eJ, XJ, AJ, vJ]);
      const VJ = () => {
          mJ((JJ => JJ + 1))
        },
        SJ = (null === hJ || void 0 === hJ ? void 0 : hJ.packId) === eJ ? hJ : null,
        MJ = (0, HJ.h)(),
        bJ = RJ(null !== (JJ = null === SJ || void 0 === SJ ? void 0 : SJ.live) && void 0 !== JJ ? JJ : null),
        wJ = null !== SJ && void 0 !== SJ && SJ.live ? (0, yJ.jsx)(BJ, {
          item: SJ.live,
          favourites: MJ,
          packUse: bJ
        }) : null;
      return (0, yJ.jsxs)("article", {
        className: "ShaderPackInformation AnimFadeIn",
        children: [(0, yJ.jsx)(YJ.b, {
          onClick: EJ,
          children: cJ("shaderPackListing:backToPacks")
        }), null === SJ && null === sJ && (0, yJ.jsx)("div", {
          className: "ShaderPackInformationMessage",
          children: (0, yJ.jsx)(qJ.c, {})
        }), null !== sJ && (0, yJ.jsxs)("div", {
          className: "ShaderPackInformationMessage",
          children: [(0, KJ.C)(sJ.error, cJ, "shaderPackListing:loadPackFailed"), (0, yJ.jsx)(YJ.d, {
            onClick: VJ,
            children: cJ("general:tryAgain")
          })]
        }), null !== SJ && null === sJ && (0, yJ.jsxs)("div", {
          className: "ShaderPackInformationBody",
          children: [(0, yJ.jsxs)("header", {
            className: "ShaderPackInformationHeader",
            children: [(0, yJ.jsx)("h1", {
              className: "FullyFancyText",
              children: SJ.name
            }), wJ]
          }), SJ.live && (0, yJ.jsx)(pJ, {
            item: SJ.live
          }), SJ.live && (0, yJ.jsx)(tJ, {
            item: SJ.live,
            ownerPreview: SJ.ownerPreview,
            bloxdhubSlug: SJ.bloxdhubSlug,
            actions: wJ
          }), SJ.owner && (0, yJ.jsx)(IJ, {
            details: SJ,
            owner: SJ.owner,
            onChanged: VJ
          })]
        })]
      })
    }

    function BJ(JJ) {
      let {
        item: cJ,
        favourites: ZJ,
        packUse: FJ
      } = JJ;
      const UJ = ZJ.isFavourite(cJ.packId);
      return (0, yJ.jsxs)("div", {
        className: "ShaderPackInformationActions",
        children: [xJ.featureFlags.settings.canUseShaderPacks && (0, yJ.jsx)(LJ, {
          packUse: FJ
        }), (0, yJ.jsx)(YJ.u, {
          className: "ShaderPackInformationLike",
          onClick: () => {
            ZJ.toggle(cJ.packId)
          },
          isLiked: !0 === UJ,
          isLoading: null === UJ
        })]
      })
    }

    function tJ(JJ) {
      let {
        item: cJ,
        ownerPreview: ZJ,
        bloxdhubSlug: FJ,
        actions: UJ
      } = JJ;
      const {
        t: AJ
      } = (0, rJ.F)(), qJ = (0, sJ.r)(), YJ = null === FJ ? null : (0, eJ.f)(FJ);
      return (0, yJ.jsxs)("div", {
        className: "ShaderPackFacts",
        children: [cJ.description && (0, yJ.jsx)("p", {
          className: "ShaderPackDescription",
          children: cJ.description
        }), (0, yJ.jsxs)("div", {
          className: "ShaderPackFeatureList",
          children: [(null !== ZJ || null !== YJ) && (0, yJ.jsx)("div", {
            className: "ShaderPackAuthor",
            children: null !== ZJ ? (0, yJ.jsxs)(yJ.Fragment, {
              children: [(0, yJ.jsx)(DJ.g, {
                playerSocialPreview: ZJ,
                showLocation: !1,
                linkToProfile: !0
              }), null !== YJ && (0, yJ.jsx)("a", {
                className: "ShaderPackBloxdhubLogo",
                href: YJ,
                target: "_blank",
                rel: "noopener noreferrer",
                children: (0, yJ.jsx)("img", {
                  src: vJ,
                  alt: eJ.b
                })
              })]
            }) : (0, yJ.jsxs)("a", {
              className: "ShaderPackBloxdhubName",
              href: YJ,
              target: "_blank",
              rel: "noopener noreferrer",
              children: [eJ.b, (0, yJ.jsx)("img", {
                src: vJ,
                alt: ""
              })]
            })
          }), KJ.G.filter((JJ => cJ.features.includes(JJ))).map((JJ => (0, yJ.jsx)(jJ.LinkPreserveSearch, {
            className: "ShaderPackFeature",
            to: (0, KJ.M)(JJ),
            children: AJ(KJ.N[JJ])
          }, JJ)))]
        }), UJ, (0, yJ.jsxs)("dl", {
          className: "ShaderPackFactList",
          children: [(0, yJ.jsxs)("div", {
            children: [(0, yJ.jsx)("dt", {
              children: AJ("shaderPackListing:downloads")
            }), (0, yJ.jsx)("dd", {
              children: (0, XJ.S)(cJ.downloads)
            })]
          }), (0, yJ.jsx)(oJ, {
            label: AJ("shaderPackListing:updated"),
            time: cJ.listedUpdatedAt,
            now: qJ
          }), (0, yJ.jsx)(oJ, {
            label: AJ("shaderPackListing:created"),
            time: cJ.publishedAt,
            now: qJ
          }), null !== cJ.gpuCost && (0, yJ.jsxs)("div", {
            children: [(0, yJ.jsx)("dt", {
              children: AJ("shaderPackListing:lag")
            }), (0, yJ.jsx)("dd", {
              children: AJ("shaderPackListing:lagPercent", {
                percent: String((0, KJ.R)(cJ.gpuCost))
              })
            })]
          }), (0, yJ.jsxs)("div", {
            children: [(0, yJ.jsx)("dt", {
              children: AJ("shaderPackListing:size")
            }), (0, yJ.jsx)("dd", {
              children: AJ("shaderPackListing:sizeValue", {
                kilobytes: String((0, KJ.Q)(cJ.sourceBytes))
              })
            })]
          }), (0, yJ.jsxs)("div", {
            children: [(0, yJ.jsx)("dt", {
              children: AJ("shaderPackListing:files")
            }), (0, yJ.jsx)("dd", {
              children: cJ.fileCount
            })]
          })]
        })]
      })
    }

    function oJ(JJ) {
      let {
        label: cJ,
        time: ZJ,
        now: FJ
      } = JJ;
      const {
        t: UJ,
        selectedLanguage: eJ
      } = (0, rJ.F)(), XJ = new Date(ZJ);
      let qJ = XJ.toLocaleDateString();
      if (FJ - ZJ <= 30 * AJ.h) {
        const JJ = (0, rJ.q)(eJ.code, "shaderPackListing:timeAgo");
        qJ = UJ("shaderPackListing:timeAgo", {
          time: (0, AJ._)(JJ, ZJ, FJ)
        })
      }
      return (0, yJ.jsx)(hJ.g, {
        tooltipInner: XJ.toLocaleString(),
        children: (0, yJ.jsxs)("div", {
          children: [(0, yJ.jsx)("dt", {
            children: cJ
          }), (0, yJ.jsx)("dd", {
            children: qJ
          })]
        })
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
  6004: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => UJ,
      f: () => eJ
    });
    var FJ = ZJ(29);
    const UJ = "shaderPack";
    async function eJ() {
      var JJ;
      let cJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (JJ = await FJ.g.getItem(UJ, cJ)) && void 0 !== JJ ? JJ : null
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);