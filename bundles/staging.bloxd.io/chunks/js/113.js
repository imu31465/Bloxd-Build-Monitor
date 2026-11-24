export const id = 113;
export const ids = [113];
export const modules = {
  5090: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => BT,
      f: () => qT,
      j: () => ZT,
      l: () => fT
    });
    var WT = mT(63),
      zT = mT(5095),
      MT = mT(4468),
      gT = mT(1475),
      nT = mT(5116),
      HT = mT(1126),
      kT = mT.n(HT),
      jT = mT(1457),
      lT = mT(1863),
      LT = mT(5123),
      pT = mT(1188);

    function BT(TT) {
      let {
        label: UT,
        onClick: mT,
        checked: WT,
        circleInfoText: zT,
        className: nT,
        disabled: HT,
        note: jT
      } = TT;
      return (0, pT.jsxs)("div", {
        "aria-disabled": HT || void 0,
        "data-pad-focusable": !0,
        className: kT()("SettingBox CheckboxContainer", {
          [nT]: nT,
          SettingBoxDisabled: HT
        }),
        onClick: () => {
          HT || mT(!WT)
        },
        children: [(0, pT.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, pT.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, pT.jsx)(MT.d, {
              className: "SettingsCheckbox",
              checked: WT,
              disabled: HT,
              onChange: () => {}
            })
          }), (0, pT.jsxs)("div", {
            className: "CheckboxText",
            children: [UT, zT && (0, pT.jsx)("span", {
              onClick: TT => TT.stopPropagation(),
              children: (0, pT.jsx)(gT.c, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: zT
              })
            })]
          })]
        }), jT && (0, pT.jsx)("div", {
          className: "SettingNote",
          children: jT
        })]
      })
    }

    function ZT(TT) {
      let {
        name: UT,
        onChange: mT,
        min: zT,
        max: MT,
        step: nT,
        initValue: HT,
        circleInfoText: jT,
        format: lT,
        className: LT,
        padStep: BT,
        disabled: ZT = !1,
        selectableMax: cT,
        cappedNote: fT,
        onChangeComplete: qT
      } = TT;
      const [iT, bT] = (0, WT.useState)(HT), OT = (0, WT.useRef)(HT);
      (0, WT.useEffect)((() => {
        OT.current = HT, bT(HT)
      }), [HT]);
      const eT = void 0 !== cT && cT < MT,
        YT = eT ? {
          "--slider-selectable": (cT - zT) / (MT - zT)
        } : void 0;
      return (0, pT.jsxs)("div", {
        className: kT()("SettingBox SettingsSliderDiv", {
          [LT]: LT,
          SettingBoxDisabled: ZT,
          SliderCapped: eT
        }),
        style: YT,
        children: [(0, pT.jsxs)("div", {
          className: "SliderText",
          children: [`${UT}: ${lT?lT(iT):iT}`, jT && (0, pT.jsx)(gT.c, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: jT
          })]
        }), (0, pT.jsx)("div", {
          className: "SliderDiv",
          children: (0, pT.jsx)(vT, {
            value: iT,
            min: zT,
            max: MT,
            step: nT,
            onChange: TT => {
              if (eT && TT >= cT && iT === cT) return;
              const UT = eT ? Math.min(TT, cT) : TT;
              OT.current = UT, bT(UT), mT(UT)
            },
            onChangeComplete: qT && (() => {
              qT(OT.current)
            }),
            format: lT,
            padStep: BT,
            disabled: ZT
          })
        }), eT && fT && (0, pT.jsx)("div", {
          className: "SettingNote",
          children: fT
        })]
      })
    }
    const cT = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function vT(TT) {
      var UT;
      let {
        value: mT,
        min: MT,
        max: gT,
        step: nT,
        onChange: HT,
        orientation: kT,
        reverse: jT,
        setIsChanging: lT,
        tooltip: BT,
        labels: ZT,
        handleLabel: vT,
        format: fT,
        onChangeStart: qT,
        onChangeComplete: iT,
        padStep: bT,
        disabled: OT = !1
      } = TT;
      const eT = (0, WT.useRef)(null),
        YT = (0, WT.useRef)(null);
      (0, WT.useLayoutEffect)((() => {
        var TT, UT, mT;
        const WT = null !== (TT = null === (UT = eT.current) || void 0 === UT ? void 0 : UT.querySelector(".rangeslider")) && void 0 !== TT ? TT : null;
        null === WT || void 0 === WT || WT.setAttribute("data-pad-slider", ""), null === WT || void 0 === WT || WT.setAttribute("data-pad-focusable", ""), null === WT || void 0 === WT || null === (mT = WT.querySelector(".rangeslider__handle")) || void 0 === mT || mT.setAttribute("data-pad-slider-handle", ""), YT.current = WT
      }), []), (0, WT.useLayoutEffect)((() => {
        var TT, UT;
        OT ? null === (TT = YT.current) || void 0 === TT || TT.setAttribute("aria-disabled", "true") : null === (UT = YT.current) || void 0 === UT || UT.removeAttribute("aria-disabled")
      }), [OT]);
      const JT = (null !== (UT = String(nT).split(".")[1]) && void 0 !== UT ? UT : "").length,
        xT = TT => {
          const UT = Number((Math.round((TT - MT) / nT) * nT + MT).toFixed(JT));
          return Math.min(gT, Math.max(MT, UT))
        },
        dT = (0, WT.useRef)(iT);
      dT.current = iT, (0, WT.useEffect)((() => {
        const TT = eT.current;
        if (!TT) return;
        const UT = TT => {
          var UT;
          cT.has(TT.key) && (null === (UT = dT.current) || void 0 === UT || UT.call(dT))
        };
        return TT.addEventListener("keyup", UT), () => {
          TT.removeEventListener("keyup", UT)
        }
      }), []);
      const wT = (0, WT.useRef)(!1);
      return (0, LT.g)(YT, {
        adjust: TT => {
          if (OT) return;
          const UT = null !== bT && void 0 !== bT ? bT : Math.max(nT, Math.round((gT - MT) / 20 / nT) * nT),
            WT = xT(mT + TT * UT * (jT ? -1 : 1));
          WT !== mT && (null === qT || void 0 === qT || qT(), HT(WT), null === iT || void 0 === iT || iT())
        },
        setFraction: TT => {
          if (OT) return;
          const UT = xT(MT + (jT ? 1 - TT : TT) * (gT - MT));
          UT !== mT && (wT.current || (wT.current = !0, null === qT || void 0 === qT || qT()), HT(UT))
        },
        endDrag: () => {
          wT.current && (wT.current = !1, null === iT || void 0 === iT || iT())
        }
      }), (0, pT.jsx)("div", {
        ref: eT,
        style: {
          display: "contents"
        },
        children: (0, pT.jsx)(zT.d, {
          value: mT,
          min: MT,
          max: gT,
          step: nT,
          onChange: HT,
          orientation: kT,
          reverse: jT,
          tooltip: BT,
          labels: ZT,
          handleLabel: vT,
          format: fT,
          onChangeStart: () => {
            null === qT || void 0 === qT || qT(), null === lT || void 0 === lT || lT(!0)
          },
          onChangeComplete: () => {
            null === lT || void 0 === lT || lT(!1), null === iT || void 0 === iT || iT()
          }
        })
      })
    }
    async function fT() {
      const TT = jT.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await TT.getResult() && (0, lT.reloadBloxd)()
    }

    function qT(TT) {
      let {
        label: UT,
        options: mT,
        value: WT,
        onChange: zT,
        circleInfoText: MT
      } = TT;
      return (0, pT.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, pT.jsxs)("div", {
          className: "SliderText",
          children: [UT, MT && (0, pT.jsx)(gT.c, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: MT
          })]
        }), (0, pT.jsx)(nT.c, {
          ariaLabel: UT,
          options: mT,
          value: WT,
          onChange: zT
        })]
      })
    }
  },
  6727: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      default: () => oT
    });
    var WT = mT(63),
      zT = mT(1641),
      MT = mT(6630),
      gT = mT(1321),
      nT = mT(366),
      HT = mT(1667),
      kT = mT(1446),
      jT = mT(1633),
      lT = mT(1569),
      LT = mT(1475),
      pT = mT(1731),
      BT = mT(2713),
      ZT = mT(2836),
      cT = mT(4655),
      vT = mT(1225),
      fT = mT(1613),
      qT = mT(102),
      iT = mT(1288);
    const bT = mT.p + "static/media/bloxdhubLogo.6a6c367af2ad6e6f1eb3.webp";
    var OT = mT(1126),
      eT = mT.n(OT),
      YT = mT(1135),
      JT = mT(1457),
      xT = mT(6623),
      dT = mT(1188);
    const wT = (0, WT.lazy)((() => Promise.all([mT.e(109), mT.e(78), mT.e(136), mT.e(135), mT.e(114), mT.e(402)]).then((() => mT(6668))).then((TT => ({
      default: TT.ShaderPackPublishForm
    })))));

    function tT(TT) {
      let {
        details: UT,
        owner: mT,
        onChanged: zT
      } = TT;
      const {
        t: gT
      } = (0, iT.z)(), nT = (0, jT.useNavigatePreserveSearch)(), {
        userContext: HT
      } = (0, vT.d)(), [LT, pT] = (0, WT.useState)(!1), [BT, ZT] = (0, WT.useState)(null), [cT, qT] = (0, WT.useState)(!1), {
        packId: bT,
        name: OT,
        description: tT,
        live: aT
      } = UT;
      async function yT(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zT;
        pT(!0), ZT(null);
        try {
          await TT(), UT()
        } catch (mT) {
          console.error("Failed to change a shader pack", mT), ZT((0, xT.s)(mT, gT, "shaderPackListing:ownerActionFailed"))
        } finally {
          pT(!1)
        }
      }
      const XT = (0, xT.o)(HT);
      return (0, dT.jsxs)("section", {
        className: "ShaderPackOwnerPanel",
        children: [(0, dT.jsx)("h2", {
          className: "ShaderPackSectionTitle",
          children: gT("general:manage")
        }), (0, xT.M)(mT, !(null === aT || void 0 === aT || !aT.renderId), Date.now(), gT).map((TT => (0, dT.jsxs)("div", {
          className: eT()("ShaderPackOwnerNotice", {
            Warning: "warning" === TT.tone
          }),
          children: [(0, dT.jsx)(YT.c, {
            name: "warning" === TT.tone ? "triangle-exclamation" : "circle-info"
          }), (0, dT.jsxs)("div", {
            children: [TT.text, TT.detail && (0, dT.jsx)("pre", {
              className: "ShaderPackOwnerNoticeDetail",
              children: TT.detail
            })]
          })]
        }, TT.text))), UT.ban && (0, dT.jsxs)("div", {
          className: "ShaderPackOwnerNotice Warning",
          children: [(0, dT.jsx)(YT.c, {
            name: "ban"
          }), (0, dT.jsxs)("div", {
            children: ["Banned by ", UT.ban.byName, " on ", new Date(UT.ban.at).toLocaleString()]
          })]
        }), BT && (0, dT.jsx)("div", {
          className: "ShaderPackOwnerError",
          children: BT
        }), (0, dT.jsxs)("div", {
          className: "ShaderPackOwnerActions",
          children: [(0, dT.jsxs)(lT.L, {
            disabled: LT,
            onClick: () => {
              !async function() {
                const TT = await JT.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:renameTitle",
                  initialValue: OT,
                  maxLength: MT.C,
                  submitText: "general:save",
                  validate: TT => TT.trim().length < MT.F ? gT("shaderPackListing:nameTooShort", {
                    min: String(MT.F)
                  }) : null
                }).getResult();
                "notificationTornDown" !== TT && "submit" === (null === TT || void 0 === TT ? void 0 : TT.type) && TT.value.trim() !== OT && await yT((() => fT.b.updateShaderPack(HT, {
                  packId: bT,
                  name: TT.value.trim()
                })))
              }()
            },
            children: [(0, dT.jsx)(YT.c, {
              name: "pen"
            }), " ", gT("shaderPackListing:rename")]
          }), (0, dT.jsxs)(lT.L, {
            disabled: LT,
            onClick: () => {
              !async function() {
                const TT = await JT.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:editDescription",
                  initialValue: tT,
                  maxLength: MT.s,
                  multiline: !0,
                  allowEmptySubmit: !0,
                  submitText: "general:save"
                }).getResult();
                "notificationTornDown" !== TT && "submit" === (null === TT || void 0 === TT ? void 0 : TT.type) && TT.value.trim() !== tT && await yT((() => fT.b.updateShaderPack(HT, {
                  packId: bT,
                  description: TT.value.trim()
                })))
              }()
            },
            children: [(0, dT.jsx)(YT.c, {
              name: "file-lines"
            }), " ", gT("shaderPackListing:editDescription")]
          }), (0, dT.jsxs)(lT.L, {
            disabled: LT || mT.isBanned && !mT.listed,
            onClick: () => {
              yT((() => fT.b.updateShaderPack(HT, {
                packId: bT,
                listed: !mT.listed
              })))
            },
            children: [(0, dT.jsx)(YT.c, {
              name: mT.listed ? "eye-slash" : "eye"
            }), " ", gT(mT.listed ? "shaderPackListing:unlist" : "shaderPackListing:relist")]
          }), !mT.isBanned && (0, dT.jsxs)(lT.e, {
            disabled: LT,
            onClick: () => {
              qT(!cT)
            },
            children: [(0, dT.jsx)(YT.c, {
              name: "upload"
            }), " ", gT("shaderPackListing:uploadVersion")]
          }), (0, dT.jsxs)(lT.J, {
            disabled: LT || mT.isBanned,
            onClick: () => {
              !async function() {
                !0 === await JT.NotificationProvider.showPromptPopup({
                  title: "shaderPackListing:deleteTitle",
                  subtitle: "shaderPackListing:deleteSubtitle",
                  confirmText: "general:delete",
                  cancelText: "general:cancel",
                  destructive: !0
                }).getResult() && await yT((() => fT.b.deleteShaderPack(HT, bT)), (() => {
                  nT(`${xT.K}?section=mine`, {
                    replace: !0
                  })
                }))
              }()
            },
            children: [(0, dT.jsx)(YT.c, {
              name: "trash-can"
            }), " ", gT("general:delete")]
          }), XT && (0, dT.jsxs)(lT.J, {
            disabled: LT,
            onClick: () => {
              yT((() => fT.b.setShaderPackBanned(HT, bT, !mT.isBanned)))
            },
            children: [(0, dT.jsx)(YT.c, {
              name: mT.isBanned ? "circle-check" : "ban"
            }), " ", mT.isBanned ? "Unban" : "Ban"]
          })]
        }), cT && (0, dT.jsx)(WT.Suspense, {
          fallback: (0, dT.jsx)(kT.c, {}),
          children: (0, dT.jsx)(wT, {
            existing: {
              packId: bT,
              name: OT,
              description: tT
            },
            onPublished: () => {
              qT(!1), zT()
            }
          })
        })]
      })
    }
    var aT = mT(85),
      yT = mT(2014),
      XT = mT(1376),
      IT = mT(5123),
      QT = mT(1302),
      sT = mT(6641),
      FT = mT(6633),
      PT = mT(6654);

    function VT(TT) {
      let {
        item: UT
      } = TT;
      const {
        t: mT
      } = (0, iT.z)(), [zT] = (0, sT.j)(), [gT, nT] = (0, WT.useState)(zT), [HT, kT] = (0, WT.useState)(!1), [jT, lT] = (0, WT.useState)(!1), {
        s3Url: LT
      } = QT.clientSideServerUrls, {
        width: pT,
        height: BT
      } = MT.t.large, ZT = (0, MT.x)(LT, UT, gT, "large"), {
        renderVersion: cT
      } = UT;
      return (0, dT.jsxs)("div", {
        className: "ShaderPackPreviews",
        children: [(0, dT.jsx)(PT.d, {
          selected: gT,
          onSelect: TT => {
            nT(TT), kT(!1)
          },
          imageUrl: TT => (0, MT.x)(LT, UT, TT, "thumb")
        }), (0, dT.jsxs)("div", {
          className: "ShaderPackPreviewStage",
          children: [!HT && (0, dT.jsxs)("button", {
            type: "button",
            className: "ShaderPackPreviewMain",
            title: null === cT ? void 0 : mT("shaderPackListing:fullSize"),
            disabled: null === cT,
            onClick: () => {
              lT(!0)
            },
            children: [(0, dT.jsx)("img", {
              src: ZT,
              width: pT,
              height: BT,
              alt: mT(xT.U[gT]),
              draggable: !1
            }), (0, dT.jsx)(FT.e, {
              item: UT
            })]
          }), !HT && null !== cT && (0, dT.jsxs)(KT, {
            side: "Right",
            onClick: () => {
              kT(!0)
            },
            children: [(0, dT.jsx)(YT.c, {
              name: "arrows-left-right"
            }), " ", mT("shaderPackListing:compare")]
          }), HT && null !== cT && (0, dT.jsx)(rT, {
            item: UT,
            packUrl: ZT,
            baselineUrl: (0, MT.q)(LT, cT, gT, "large")
          }), HT && (0, dT.jsx)(KT, {
            side: "Left",
            onClick: () => {
              kT(!1)
            },
            children: mT("shaderPackListing:withPack")
          }), HT && (0, dT.jsx)(KT, {
            side: "Right",
            onClick: () => {
              kT(!1)
            },
            children: mT("shaderPackListing:withoutPack")
          })]
        }), jT && (0, dT.jsx)(uT, {
          fullUrl: (0, MT.x)(LT, UT, gT, "full"),
          largeUrl: ZT,
          alt: mT(xT.U[gT]),
          onClose: () => {
            lT(!1)
          }
        })]
      })
    }

    function uT(TT) {
      let {
        fullUrl: UT,
        largeUrl: mT,
        alt: zT,
        onClose: MT
      } = TT;
      const gT = (0, WT.useRef)(null);
      return (0, XT.p)("popup", gT, MT), (0, WT.useEffect)((() => {
        function TT(TT) {
          "Escape" === TT.key && (TT.stopPropagation(), MT())
        }
        return window.addEventListener("keydown", TT, !0), () => {
          window.removeEventListener("keydown", TT, !0)
        }
      }), [MT]), (0, aT.createPortal)((0, dT.jsxs)("div", {
        ref: gT,
        className: "ShaderPackFullSize",
        onClick: MT,
        children: [(0, dT.jsx)("img", {
          className: "ShaderPackFullSizeImage",
          src: UT,
          alt: zT,
          draggable: !1,
          style: {
            backgroundImage: `url(${mT})`
          }
        }), (0, dT.jsx)(lT.k, {
          className: "ShaderPackFullSizeClose",
          onClick: MT
        })]
      }), document.body)
    }
    const CT = 5;

    function rT(TT) {
      let {
        item: UT,
        packUrl: mT,
        baselineUrl: zT
      } = TT;
      const {
        t: gT
      } = (0, iT.z)(), [nT, HT] = (0, WT.useState)(50), kT = (0, WT.useRef)(!1), jT = (0, WT.useRef)(null), {
        width: lT,
        height: LT
      } = MT.t.large;

      function pT(TT) {
        HT((UT => (0, yT.e)(UT + TT, 0, 100)))
      }

      function BT(TT) {
        const UT = TT.currentTarget.getBoundingClientRect();
        HT((0, yT.e)((TT.clientX - UT.left) / UT.width * 100, 0, 100))
      }
      return (0, IT.g)(jT, {
        adjust: TT => {
          pT(TT * CT)
        },
        setFraction: TT => {
          HT(100 * TT)
        },
        endDrag: () => {}
      }), (0, dT.jsxs)("div", {
        ref: jT,
        className: "ShaderPackCompare",
        "data-pad-slider": "",
        "data-pad-focusable": "",
        role: "slider",
        tabIndex: 0,
        "aria-label": gT("shaderPackListing:compare"),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(nT),
        style: {
          "--split": `${nT}%`
        },
        onKeyDown: function(TT) {
          const UT = "ArrowLeft" === TT.key ? -CT : "ArrowRight" === TT.key ? CT : 0;
          0 !== UT && (TT.preventDefault(), pT(UT))
        },
        onPointerDown: TT => {
          kT.current = !0, TT.currentTarget.setPointerCapture(TT.pointerId), BT(TT)
        },
        onPointerMove: TT => {
          kT.current && BT(TT)
        },
        onPointerUp: () => {
          kT.current = !1
        },
        onPointerCancel: () => {
          kT.current = !1
        },
        children: [(0, dT.jsx)("img", {
          className: "ShaderPackCompareBaseline",
          src: zT,
          width: lT,
          height: LT,
          alt: "",
          draggable: !1,
          style: {
            backgroundImage: `url(${mT})`
          }
        }), (0, dT.jsx)("div", {
          className: "ShaderPackCompareLine"
        }), (0, dT.jsx)("img", {
          className: "ShaderPackComparePack",
          src: mT,
          width: lT,
          height: LT,
          alt: "",
          draggable: !1
        }), (0, dT.jsx)(FT.e, {
          item: UT,
          className: "ShaderPackCompareNotice"
        })]
      })
    }

    function KT(TT) {
      let {
        side: UT,
        onClick: mT,
        children: WT
      } = TT;
      return (0, dT.jsx)("button", {
        type: "button",
        className: `ShaderPackStageButton ${UT}`,
        onClick: mT,
        children: (0, dT.jsx)("span", {
          className: "ShaderPackStageButtonFace SmallTextBold",
          children: WT
        })
      })
    }
    var ST = mT(5090),
      GT = mT(340),
      NT = mT(6723);
    const ET = {
      compiler: "shaderPack:compilerUnavailable",
      download: "shaderPackListing:useDownloadFailed",
      apiVersion: "shaderPackListing:useOtherApiVersion",
      invalid: "shaderPackListing:useInvalid",
      errors: "shaderPackListing:useFailsHere",
      save: "shaderPack:saveFailed"
    };

    function hT(TT) {
      const {
        userContext: UT
      } = (0, vT.d)(), [zT, MT] = (0, WT.useState)(null), [gT, nT] = (0, WT.useState)(!1), [HT, kT] = (0, WT.useState)(!1), [jT, lT] = (0, WT.useState)(null), LT = null === TT || void 0 === TT ? void 0 : TT.packId, pT = null === TT || void 0 === TT ? void 0 : TT.sourceHash;
      return (0, WT.useEffect)((() => {
        if (nT(!1), lT(null), void 0 === LT) return;
        let TT = !1;
        return Promise.all([(0, qT.hasUsableWebGpuAdapter)(), (0, NT.h)()]).then((UT => {
          let [mT, WT] = UT;
          var zT;
          TT || (MT(mT), nT((null === WT || void 0 === WT || null === (zT = WT.listing) || void 0 === zT ? void 0 : zT.packId) === LT && WT.listing.sourceHash === pT))
        })).catch((UT => {
          console.error("Failed to check whether this shader pack can be used", UT), TT || MT(!1)
        })), () => {
          TT = !0
        }
      }), [LT, pT]), {
        webGpuUsable: zT,
        inUse: gT,
        busy: HT,
        errorKey: jT,
        use: () => {
          null !== TT && async function(TT) {
            kT(!0), lT(null);
            try {
              const {
                installListedShaderPack: WT
              } = await Promise.all([mT.e(78), mT.e(136), mT.e(115)]).then((() => mT(40618))), zT = await WT({
                packId: TT.packId,
                sourceHash: TT.sourceHash,
                name: TT.name,
                ownerName: TT.ownerName,
                description: TT.description
              });
              if ("failed" === zT.kind) return void lT(ET[zT.reason]);
              nT(!0), fT.b.recordShaderPackDownload(UT, TT.packId).catch((TT => {
                console.error("Failed to count a shader pack's download", TT)
              })), (0, ST.l)()
            } catch (WT) {
              console.error("Failed to use the shader pack", WT), lT("shaderPack:unexpectedError")
            } finally {
              kT(!1)
            }
          }(TT)
        }
      }
    }

    function DT(TT) {
      let {
        packUse: UT
      } = TT;
      const {
        t: mT
      } = (0, iT.z)(), {
        webGpuUsable: WT,
        inUse: zT,
        busy: MT,
        errorKey: gT,
        use: nT
      } = UT;
      return (0, dT.jsxs)("div", {
        className: "ShaderPackUse",
        children: [(0, dT.jsxs)(lT.l, {
          disabled: !0 !== WT || zT,
          loading: MT,
          onClick: nT,
          children: [(0, dT.jsx)(YT.c, {
            name: zT ? "check" : "download"
          }), " ", mT(zT ? "shaderPackListing:inUse" : "shaderPackListing:use")]
        }), !1 === WT && (0, dT.jsx)("div", {
          className: "ShaderPackUseNote",
          children: mT((0, GT.h)() ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), gT && (0, dT.jsx)("div", {
          className: "ShaderPackUseNote Error",
          children: mT(gT)
        })]
      })
    }

    function oT() {
      var TT;
      const {
        t: UT
      } = (0, iT.z)(), mT = (0, jT.useNavigatePreserveSearch)(), {
        packId: MT
      } = (0, zT.y)(), {
        userContext: gT,
        isUserContextUpdating: nT
      } = (0, vT.d)(), [LT, BT] = (0, WT.useState)(null), [ZT, qT] = (0, WT.useState)(null), [bT, OT] = (0, WT.useState)(0), eT = (0, WT.useRef)(0);

      function YT() {
        var TT;
        null !== (TT = (0, jT.getPreviousLocation)()) && void 0 !== TT && TT.startsWith(xT.K) ? mT(-1) : mT(xT.K)
      }(0, cT.d)(YT), (0, sT.d)(), (0, WT.useEffect)((() => {
        if (nT || void 0 === MT) return;
        const TT = ++eT.current;
        qT(null), fT.b.getShaderPack(gT, MT).then((UT => {
          eT.current === TT && BT(UT)
        })).catch((UT => {
          eT.current === TT && (console.error("Failed to get the shader pack", UT), BT(null), qT({
            error: UT
          }))
        }))
      }), [MT, gT, nT, bT]);
      const JT = () => {
          OT((TT => TT + 1))
        },
        wT = (null === LT || void 0 === LT ? void 0 : LT.packId) === MT ? LT : null,
        aT = (0, sT.m)(),
        yT = hT(null !== (TT = null === wT || void 0 === wT ? void 0 : wT.live) && void 0 !== TT ? TT : null),
        XT = null !== wT && void 0 !== wT && wT.live ? (0, dT.jsx)(AT, {
          item: wT.live,
          favourites: aT,
          packUse: yT
        }) : null;
      return (0, dT.jsxs)("article", {
        className: "ShaderPackInformation AnimFadeIn",
        children: [null !== wT && (0, dT.jsx)(pT.e, {
          meta: (0, HT.O)(wT.name)
        }), (0, dT.jsx)(lT.d, {
          onClick: YT,
          children: UT("shaderPackListing:backToPacks")
        }), null === wT && null === ZT && (0, dT.jsx)("div", {
          className: "ShaderPackInformationMessage",
          children: (0, dT.jsx)(kT.c, {})
        }), null !== ZT && (0, dT.jsxs)("div", {
          className: "ShaderPackInformationMessage",
          children: [(0, xT.s)(ZT.error, UT, "shaderPackListing:loadPackFailed"), (0, dT.jsx)(lT.e, {
            onClick: JT,
            children: UT("general:tryAgain")
          })]
        }), null !== wT && null === ZT && (0, dT.jsxs)("div", {
          className: "ShaderPackInformationBody",
          children: [(0, dT.jsxs)("header", {
            className: "ShaderPackInformationHeader",
            children: [(0, dT.jsx)("h1", {
              className: "FullyFancyText",
              children: wT.name
            }), XT]
          }), wT.live && (0, dT.jsx)(VT, {
            item: wT.live
          }), wT.live && (0, dT.jsx)(RT, {
            item: wT.live,
            ownerPreview: wT.ownerPreview,
            bloxdhubSlug: wT.bloxdhubSlug,
            actions: XT
          }), wT.owner && (0, dT.jsx)(tT, {
            details: wT,
            owner: wT.owner,
            onChanged: JT
          })]
        })]
      })
    }

    function AT(TT) {
      let {
        item: UT,
        favourites: mT,
        packUse: WT
      } = TT;
      const zT = mT.isFavourite(UT.packId);
      return (0, dT.jsxs)("div", {
        className: "ShaderPackInformationActions",
        children: [qT.featureFlags.settings.canUseShaderPacks && (0, dT.jsx)(DT, {
          packUse: WT
        }), (0, dT.jsx)(lT.t, {
          className: "ShaderPackInformationLike",
          onClick: () => {
            mT.toggle(UT.packId)
          },
          isLiked: !0 === zT,
          isLoading: null === zT
        })]
      })
    }

    function RT(TT) {
      let {
        item: UT,
        ownerPreview: mT,
        bloxdhubSlug: WT,
        actions: zT
      } = TT;
      const {
        t: nT
      } = (0, iT.z)(), HT = (0, ZT.p)(), kT = null === WT ? null : (0, MT.h)(WT);
      return (0, dT.jsxs)("div", {
        className: "ShaderPackFacts",
        children: [UT.description && (0, dT.jsx)("p", {
          className: "ShaderPackDescription",
          children: UT.description
        }), (0, dT.jsxs)("div", {
          className: "ShaderPackFeatureList",
          children: [(null !== mT || null !== kT) && (0, dT.jsx)("div", {
            className: "ShaderPackAuthor",
            children: null !== mT ? (0, dT.jsxs)(dT.Fragment, {
              children: [(0, dT.jsx)(BT.i, {
                playerSocialPreview: mT,
                showLocation: !1,
                linkToProfile: !0
              }), null !== kT && (0, dT.jsx)("a", {
                className: "ShaderPackBloxdhubLogo",
                href: kT,
                target: "_blank",
                rel: "noopener noreferrer",
                children: (0, dT.jsx)("img", {
                  src: bT,
                  alt: MT.e
                })
              })]
            }) : (0, dT.jsxs)("a", {
              className: "ShaderPackBloxdhubName",
              href: kT,
              target: "_blank",
              rel: "noopener noreferrer",
              children: [MT.e, (0, dT.jsx)("img", {
                src: bT,
                alt: ""
              })]
            })
          }), xT.t.filter((TT => UT.features.includes(TT))).map((TT => (0, dT.jsx)(jT.LinkPreserveSearch, {
            className: "ShaderPackFeature",
            to: (0, xT.A)(TT),
            children: nT(xT.C[TT])
          }, TT)))]
        }), zT, (0, dT.jsxs)("dl", {
          className: "ShaderPackFactList",
          children: [(0, dT.jsxs)("div", {
            children: [(0, dT.jsx)("dt", {
              children: nT("shaderPackListing:downloads")
            }), (0, dT.jsx)("dd", {
              children: (0, gT.V)(UT.downloads)
            })]
          }), (0, dT.jsx)(TU, {
            label: nT("shaderPackListing:updated"),
            time: UT.listedUpdatedAt,
            now: HT
          }), (0, dT.jsx)(TU, {
            label: nT("shaderPackListing:created"),
            time: UT.publishedAt,
            now: HT
          }), null !== UT.gpuCost && (0, dT.jsxs)("div", {
            children: [(0, dT.jsx)("dt", {
              children: nT("shaderPackListing:lag")
            }), (0, dT.jsx)("dd", {
              children: nT("shaderPackListing:lagPercent", {
                percent: String((0, xT.J)(UT.gpuCost))
              })
            })]
          }), (0, dT.jsxs)("div", {
            children: [(0, dT.jsx)("dt", {
              children: nT("shaderPackListing:size")
            }), (0, dT.jsx)("dd", {
              children: nT("shaderPackListing:sizeValue", {
                kilobytes: String((0, xT.G)(UT.sourceBytes))
              })
            })]
          }), (0, dT.jsxs)("div", {
            children: [(0, dT.jsx)("dt", {
              children: nT("shaderPackListing:files")
            }), (0, dT.jsx)("dd", {
              children: UT.fileCount
            })]
          })]
        })]
      })
    }

    function TU(TT) {
      let {
        label: UT,
        time: mT,
        now: WT
      } = TT;
      const {
        t: zT,
        selectedLanguage: MT
      } = (0, iT.z)(), gT = new Date(mT);
      let HT = gT.toLocaleDateString();
      if (WT - mT <= 30 * nT.k) {
        const TT = (0, iT.m)(MT.code, "shaderPackListing:timeAgo");
        HT = zT("shaderPackListing:timeAgo", {
          time: (0, nT.nb)(TT, mT, WT)
        })
      }
      return (0, dT.jsx)(LT.e, {
        tooltipInner: gT.toLocaleString(),
        children: (0, dT.jsxs)("div", {
          children: [(0, dT.jsx)("dt", {
            children: UT
          }), (0, dT.jsx)("dd", {
            children: HT
          })]
        })
      })
    }
  },
  5116: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => gT
    });
    var WT = mT(1126),
      zT = mT.n(WT),
      MT = mT(1188);

    function gT(TT) {
      let {
        options: UT,
        value: mT,
        onChange: WT,
        ariaLabel: gT,
        className: nT,
        reselectable: HT = !1,
        keepsFocus: kT = !1,
        padTabs: jT
      } = TT;
      const lT = void 0 !== jT;
      return (0, MT.jsx)("div", {
        className: zT()("SegmentedToggle", nT),
        role: "group",
        "aria-label": gT,
        "data-pad-tabs": jT,
        children: UT.map((TT => {
          const UT = TT.value === mT;
          return (0, MT.jsx)("button", {
            type: "button",
            "aria-pressed": UT,
            "data-pad-tab": lT || void 0,
            "data-pad-selected": lT && UT ? "true" : void 0,
            "data-pad-default-focus": lT && UT || void 0,
            "aria-label": TT.ariaLabel,
            title: TT.ariaLabel,
            className: zT()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: UT
            }),
            onMouseDown: kT ? TT => {
              TT.preventDefault()
            } : void 0,
            onClick: () => {
              UT && !HT || WT(TT.value)
            },
            children: TT.label
          }, TT.value)
        }))
      })
    }
  },
  5123: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => MT,
      g: () => gT
    });
    var WT = mT(63);
    const zT = new WeakMap,
      MT = TT => {
        var UT;
        const mT = TT.closest("[data-pad-slider]");
        return mT && null !== (UT = zT.get(mT)) && void 0 !== UT ? UT : null
      },
      gT = (TT, UT) => {
        const mT = (0, WT.useRef)(UT);
        mT.current = UT, (0, WT.useEffect)((() => {
          if (TT.current) return ((TT, UT) => (zT.set(TT, UT), () => {
            zT.get(TT) === UT && zT.delete(TT)
          }))(TT.current, {
            adjust: TT => {
              mT.current.adjust(TT)
            },
            setFraction: TT => {
              mT.current.setFraction(TT)
            },
            endDrag: () => {
              mT.current.endDrag()
            }
          })
        }), [TT])
      }
  },
  6723: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => zT,
      h: () => MT
    });
    var WT = mT(44);
    const zT = "shaderPack";
    async function MT() {
      var TT;
      let UT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (TT = await WT.h.getItem(zT, UT)) && void 0 !== TT ? TT : null
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);