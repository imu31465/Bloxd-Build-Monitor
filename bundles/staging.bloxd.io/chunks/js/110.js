export const id = 110;
export const ids = [110];
export const modules = {
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
  6649: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      default: () => nT
    });
    var lT = cT(71),
      MT = cT(1535),
      KT = cT(6550),
      OT = cT(1226),
      yT = cT(339),
      fT = cT(1348),
      xT = cT(1530),
      IT = cT(1470),
      AT = cT(1379),
      CT = cT(2600),
      jT = cT(2744),
      vT = cT(4537),
      tT = cT(1130),
      hT = cT(1518),
      NT = cT(118),
      QT = cT(1195);
    const ST = cT.p + "static/media/bloxdhubLogo.6a6c367af2ad6e6f1eb3.webp";
    var DT = cT(1046),
      aT = cT.n(DT),
      FT = cT(1061),
      rT = cT(1363),
      PT = cT(6547),
      wT = cT(1099);
    const mT = (0, lT.lazy)((() => Promise.all([cT.e(106), cT.e(75), cT.e(131), cT.e(125), cT.e(124)]).then((() => cT(6578))).then((TT => ({
      default: TT.ShaderPackPublishForm
    })))));

    function bT(TT) {
      let {
        details: kT,
        owner: cT,
        onChanged: MT
      } = TT;
      const {
        t: OT
      } = (0, QT.B)(), yT = (0, xT.useNavigatePreserveSearch)(), {
        userContext: AT
      } = (0, tT.b)(), [CT, jT] = (0, lT.useState)(!1), [vT, NT] = (0, lT.useState)(null), [ST, DT] = (0, lT.useState)(!1), {
        packId: bT,
        name: zT,
        description: JT,
        live: oT
      } = kT;
      async function HT(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : MT;
        jT(!0), NT(null);
        try {
          await TT(), kT()
        } catch (cT) {
          console.error("Failed to change a shader pack", cT), NT((0, PT.v)(cT, OT, "shaderPackListing:ownerActionFailed"))
        } finally {
          jT(!1)
        }
      }
      const eT = (0, PT.r)(AT);
      return (0, wT.jsxs)("section", {
        className: "ShaderPackOwnerPanel",
        children: [(0, wT.jsx)("h2", {
          className: "ShaderPackSectionTitle",
          children: OT("general:manage")
        }), (0, PT.R)(cT, !(null === oT || void 0 === oT || !oT.renderId), Date.now(), OT).map((TT => (0, wT.jsxs)("div", {
          className: aT()("ShaderPackOwnerNotice", {
            Warning: "warning" === TT.tone
          }),
          children: [(0, wT.jsx)(FT.e, {
            name: "warning" === TT.tone ? "triangle-exclamation" : "circle-info"
          }), (0, wT.jsxs)("div", {
            children: [TT.text, TT.detail && (0, wT.jsx)("pre", {
              className: "ShaderPackOwnerNoticeDetail",
              children: TT.detail
            })]
          })]
        }, TT.text))), kT.ban && (0, wT.jsxs)("div", {
          className: "ShaderPackOwnerNotice Warning",
          children: [(0, wT.jsx)(FT.e, {
            name: "ban"
          }), (0, wT.jsxs)("div", {
            children: ["Banned by ", kT.ban.byName, " on ", new Date(kT.ban.at).toLocaleString()]
          })]
        }), vT && (0, wT.jsx)("div", {
          className: "ShaderPackOwnerError",
          children: vT
        }), (0, wT.jsxs)("div", {
          className: "ShaderPackOwnerActions",
          children: [(0, wT.jsxs)(IT.P, {
            disabled: CT,
            onClick: () => {
              !async function() {
                const TT = await rT.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:renameTitle",
                  initialValue: zT,
                  maxLength: KT.v,
                  submitText: "general:save",
                  validate: TT => TT.trim().length < KT.w ? OT("shaderPackListing:nameTooShort", {
                    min: String(KT.w)
                  }) : null
                }).getResult();
                "notificationTornDown" !== TT && "submit" === (null === TT || void 0 === TT ? void 0 : TT.type) && TT.value.trim() !== zT && await HT((() => hT.d.updateShaderPack(AT, {
                  packId: bT,
                  name: TT.value.trim()
                })))
              }()
            },
            children: [(0, wT.jsx)(FT.e, {
              name: "pen"
            }), " ", OT("shaderPackListing:rename")]
          }), (0, wT.jsxs)(IT.P, {
            disabled: CT,
            onClick: () => {
              !async function() {
                const TT = await rT.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:editDescription",
                  initialValue: JT,
                  maxLength: KT.m,
                  multiline: !0,
                  allowEmptySubmit: !0,
                  submitText: "general:save"
                }).getResult();
                "notificationTornDown" !== TT && "submit" === (null === TT || void 0 === TT ? void 0 : TT.type) && TT.value.trim() !== JT && await HT((() => hT.d.updateShaderPack(AT, {
                  packId: bT,
                  description: TT.value.trim()
                })))
              }()
            },
            children: [(0, wT.jsx)(FT.e, {
              name: "file-lines"
            }), " ", OT("shaderPackListing:editDescription")]
          }), (0, wT.jsxs)(IT.P, {
            disabled: CT || cT.isBanned && !cT.listed,
            onClick: () => {
              HT((() => hT.d.updateShaderPack(AT, {
                packId: bT,
                listed: !cT.listed
              })))
            },
            children: [(0, wT.jsx)(FT.e, {
              name: cT.listed ? "eye-slash" : "eye"
            }), " ", OT(cT.listed ? "shaderPackListing:unlist" : "shaderPackListing:relist")]
          }), !cT.isBanned && (0, wT.jsxs)(IT.e, {
            disabled: CT,
            onClick: () => {
              DT(!ST)
            },
            children: [(0, wT.jsx)(FT.e, {
              name: "upload"
            }), " ", OT("shaderPackListing:uploadVersion")]
          }), (0, wT.jsxs)(IT.L, {
            disabled: CT || cT.isBanned,
            onClick: () => {
              !async function() {
                !0 === await rT.NotificationProvider.showPromptPopup({
                  title: "shaderPackListing:deleteTitle",
                  subtitle: "shaderPackListing:deleteSubtitle",
                  confirmText: "general:delete",
                  cancelText: "general:cancel",
                  destructive: !0
                }).getResult() && await HT((() => hT.d.deleteShaderPack(AT, bT)), (() => {
                  yT(`${PT.Q}?section=mine`, {
                    replace: !0
                  })
                }))
              }()
            },
            children: [(0, wT.jsx)(FT.e, {
              name: "trash-can"
            }), " ", OT("general:delete")]
          }), eT && (0, wT.jsxs)(IT.L, {
            disabled: CT,
            onClick: () => {
              HT((() => hT.d.setShaderPackBanned(AT, bT, !cT.isBanned)))
            },
            children: [(0, wT.jsx)(FT.e, {
              name: cT.isBanned ? "circle-check" : "ban"
            }), " ", cT.isBanned ? "Unban" : "Ban"]
          })]
        }), ST && (0, wT.jsx)(lT.Suspense, {
          fallback: (0, wT.jsx)(fT.d, {}),
          children: (0, wT.jsx)(mT, {
            existing: {
              packId: bT,
              name: zT,
              description: JT
            },
            onPublished: () => {
              DT(!1), MT()
            }
          })
        })]
      })
    }
    var zT = cT(94),
      JT = cT(1915),
      oT = cT(1289),
      HT = cT(4975),
      eT = cT(1202),
      GT = cT(6557),
      VT = cT(6555),
      ET = cT(6567);

    function ZT(TT) {
      let {
        item: kT
      } = TT;
      const {
        t: cT
      } = (0, QT.B)(), [MT] = (0, GT.g)(), [OT, yT] = (0, lT.useState)(MT), [fT, xT] = (0, lT.useState)(!1), [IT, AT] = (0, lT.useState)(!1), {
        s3Url: CT
      } = eT.clientSideServerUrls, {
        width: jT,
        height: vT
      } = KT.o.large, tT = (0, KT.q)(CT, kT, OT, "large"), {
        renderVersion: hT
      } = kT;
      return (0, wT.jsxs)("div", {
        className: "ShaderPackPreviews",
        children: [(0, wT.jsx)(ET.e, {
          selected: OT,
          onSelect: TT => {
            yT(TT), xT(!1)
          },
          imageUrl: TT => (0, KT.q)(CT, kT, TT, "thumb")
        }), (0, wT.jsxs)("div", {
          className: "ShaderPackPreviewStage",
          children: [!fT && (0, wT.jsxs)("button", {
            type: "button",
            className: "ShaderPackPreviewMain",
            title: null === hT ? void 0 : cT("shaderPackListing:fullSize"),
            disabled: null === hT,
            onClick: () => {
              AT(!0)
            },
            children: [(0, wT.jsx)("img", {
              src: tT,
              width: jT,
              height: vT,
              alt: cT(PT.db[OT]),
              draggable: !1
            }), (0, wT.jsx)(VT.d, {
              item: kT
            })]
          }), !fT && null !== hT && (0, wT.jsxs)(LT, {
            side: "Right",
            onClick: () => {
              xT(!0)
            },
            children: [(0, wT.jsx)(FT.e, {
              name: "arrows-left-right"
            }), " ", cT("shaderPackListing:compare")]
          }), fT && null !== hT && (0, wT.jsx)(dT, {
            item: kT,
            packUrl: tT,
            baselineUrl: (0, KT.i)(CT, hT, OT, "large")
          }), fT && (0, wT.jsx)(LT, {
            side: "Left",
            onClick: () => {
              xT(!1)
            },
            children: cT("shaderPackListing:withPack")
          }), fT && (0, wT.jsx)(LT, {
            side: "Right",
            onClick: () => {
              xT(!1)
            },
            children: cT("shaderPackListing:withoutPack")
          })]
        }), IT && (0, wT.jsx)(uT, {
          fullUrl: (0, KT.q)(CT, kT, OT, "full"),
          largeUrl: tT,
          alt: cT(PT.db[OT]),
          onClose: () => {
            AT(!1)
          }
        })]
      })
    }

    function uT(TT) {
      let {
        fullUrl: kT,
        largeUrl: cT,
        alt: MT,
        onClose: KT
      } = TT;
      const OT = (0, lT.useRef)(null);
      return (0, oT.q)("popup", OT, KT), (0, lT.useEffect)((() => {
        function TT(TT) {
          "Escape" === TT.key && (TT.stopPropagation(), KT())
        }
        return window.addEventListener("keydown", TT, !0), () => {
          window.removeEventListener("keydown", TT, !0)
        }
      }), [KT]), (0, zT.createPortal)((0, wT.jsxs)("div", {
        ref: OT,
        className: "ShaderPackFullSize",
        onClick: KT,
        children: [(0, wT.jsx)("img", {
          className: "ShaderPackFullSizeImage",
          src: kT,
          alt: MT,
          draggable: !1,
          style: {
            backgroundImage: `url(${cT})`
          }
        }), (0, wT.jsx)(IT.l, {
          className: "ShaderPackFullSizeClose",
          onClick: KT
        })]
      }), document.body)
    }
    const XT = 5;

    function dT(TT) {
      let {
        item: kT,
        packUrl: cT,
        baselineUrl: MT
      } = TT;
      const {
        t: OT
      } = (0, QT.B)(), [yT, fT] = (0, lT.useState)(50), xT = (0, lT.useRef)(!1), IT = (0, lT.useRef)(null), {
        width: AT,
        height: CT
      } = KT.o.large;

      function jT(TT) {
        fT((kT => (0, JT.d)(kT + TT, 0, 100)))
      }

      function vT(TT) {
        const kT = TT.currentTarget.getBoundingClientRect();
        fT((0, JT.d)((TT.clientX - kT.left) / kT.width * 100, 0, 100))
      }
      return (0, HT.d)(IT, {
        adjust: TT => {
          jT(TT * XT)
        },
        setFraction: TT => {
          fT(100 * TT)
        },
        endDrag: () => {}
      }), (0, wT.jsxs)("div", {
        ref: IT,
        className: "ShaderPackCompare",
        "data-pad-slider": "",
        "data-pad-focusable": "",
        role: "slider",
        tabIndex: 0,
        "aria-label": OT("shaderPackListing:compare"),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(yT),
        style: {
          "--split": `${yT}%`
        },
        onKeyDown: function(TT) {
          const kT = "ArrowLeft" === TT.key ? -XT : "ArrowRight" === TT.key ? XT : 0;
          0 !== kT && (TT.preventDefault(), jT(kT))
        },
        onPointerDown: TT => {
          xT.current = !0, TT.currentTarget.setPointerCapture(TT.pointerId), vT(TT)
        },
        onPointerMove: TT => {
          xT.current && vT(TT)
        },
        onPointerUp: () => {
          xT.current = !1
        },
        onPointerCancel: () => {
          xT.current = !1
        },
        children: [(0, wT.jsx)("img", {
          className: "ShaderPackCompareBaseline",
          src: MT,
          width: AT,
          height: CT,
          alt: "",
          draggable: !1,
          style: {
            backgroundImage: `url(${cT})`
          }
        }), (0, wT.jsx)("div", {
          className: "ShaderPackCompareLine"
        }), (0, wT.jsx)("img", {
          className: "ShaderPackComparePack",
          src: cT,
          width: AT,
          height: CT,
          alt: "",
          draggable: !1
        }), (0, wT.jsx)(VT.d, {
          item: kT,
          className: "ShaderPackCompareNotice"
        })]
      })
    }

    function LT(TT) {
      let {
        side: kT,
        onClick: cT,
        children: lT
      } = TT;
      return (0, wT.jsx)("button", {
        type: "button",
        className: `ShaderPackStageButton ${kT}`,
        onClick: cT,
        children: (0, wT.jsx)("span", {
          className: "ShaderPackStageButtonFace SmallTextBold",
          children: lT
        })
      })
    }
    var RT = cT(4945),
      gT = cT(307),
      UT = cT(6647);
    const YT = {
      compiler: "shaderPack:compilerUnavailable",
      download: "shaderPackListing:useDownloadFailed",
      apiVersion: "shaderPackListing:useOtherApiVersion",
      invalid: "shaderPackListing:useInvalid",
      errors: "shaderPackListing:useFailsHere",
      save: "shaderPack:saveFailed"
    };

    function BT(TT) {
      const {
        userContext: kT
      } = (0, tT.b)(), [MT, KT] = (0, lT.useState)(null), [OT, yT] = (0, lT.useState)(!1), [fT, xT] = (0, lT.useState)(!1), [IT, AT] = (0, lT.useState)(null), CT = null === TT || void 0 === TT ? void 0 : TT.packId, jT = null === TT || void 0 === TT ? void 0 : TT.sourceHash;
      return (0, lT.useEffect)((() => {
        if (yT(!1), AT(null), void 0 === CT) return;
        let TT = !1;
        return Promise.all([(0, NT.hasUsableWebGpuAdapter)(), (0, UT.e)()]).then((kT => {
          let [cT, lT] = kT;
          var MT;
          TT || (KT(cT), yT((null === lT || void 0 === lT || null === (MT = lT.listing) || void 0 === MT ? void 0 : MT.packId) === CT && lT.listing.sourceHash === jT))
        })).catch((kT => {
          console.error("Failed to check whether this shader pack can be used", kT), TT || KT(!1)
        })), () => {
          TT = !0
        }
      }), [CT, jT]), {
        webGpuUsable: MT,
        inUse: OT,
        busy: fT,
        errorKey: IT,
        use: () => {
          null !== TT && async function(TT) {
            xT(!0), AT(null);
            try {
              const {
                installListedShaderPack: lT
              } = await Promise.all([cT.e(75), cT.e(131), cT.e(126)]).then((() => cT(40126))), MT = await lT({
                packId: TT.packId,
                sourceHash: TT.sourceHash,
                name: TT.name,
                ownerName: TT.ownerName,
                description: TT.description
              });
              if ("failed" === MT.kind) return void AT(YT[MT.reason]);
              yT(!0), hT.d.recordShaderPackDownload(kT, TT.packId).catch((TT => {
                console.error("Failed to count a shader pack's download", TT)
              })), (0, RT.m)()
            } catch (lT) {
              console.error("Failed to use the shader pack", lT), AT("shaderPack:unexpectedError")
            } finally {
              xT(!1)
            }
          }(TT)
        }
      }
    }

    function WT(TT) {
      let {
        packUse: kT
      } = TT;
      const {
        t: cT
      } = (0, QT.B)(), {
        webGpuUsable: lT,
        inUse: MT,
        busy: KT,
        errorKey: OT,
        use: yT
      } = kT;
      return (0, wT.jsxs)("div", {
        className: "ShaderPackUse",
        children: [(0, wT.jsxs)(IT.m, {
          disabled: !0 !== lT || MT,
          loading: KT,
          onClick: yT,
          children: [(0, wT.jsx)(FT.e, {
            name: MT ? "check" : "download"
          }), " ", cT(MT ? "shaderPackListing:inUse" : "shaderPackListing:use")]
        }), !1 === lT && (0, wT.jsx)("div", {
          className: "ShaderPackUseNote",
          children: cT((0, gT.g)() ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), OT && (0, wT.jsx)("div", {
          className: "ShaderPackUseNote Error",
          children: cT(OT)
        })]
      })
    }

    function nT() {
      var TT;
      const {
        t: kT
      } = (0, QT.B)(), cT = (0, xT.useNavigatePreserveSearch)(), {
        packId: KT
      } = (0, MT.v)(), {
        userContext: OT,
        isUserContextUpdating: yT
      } = (0, tT.b)(), [AT, CT] = (0, lT.useState)(null), [jT, NT] = (0, lT.useState)(null), [ST, DT] = (0, lT.useState)(0), aT = (0, lT.useRef)(0);

      function FT() {
        var TT;
        null !== (TT = (0, xT.getPreviousLocation)()) && void 0 !== TT && TT.startsWith(PT.Q) ? cT(-1) : cT(PT.Q)
      }(0, vT.e)(FT), (0, GT.d)(), (0, lT.useEffect)((() => {
        if (yT || void 0 === KT) return;
        const TT = ++aT.current;
        NT(null), hT.d.getShaderPack(OT, KT).then((kT => {
          aT.current === TT && CT(kT)
        })).catch((kT => {
          aT.current === TT && (console.error("Failed to get the shader pack", kT), CT(null), NT({
            error: kT
          }))
        }))
      }), [KT, OT, yT, ST]);
      const rT = () => {
          DT((TT => TT + 1))
        },
        mT = (null === AT || void 0 === AT ? void 0 : AT.packId) === KT ? AT : null,
        zT = (0, GT.j)(),
        JT = BT(null !== (TT = null === mT || void 0 === mT ? void 0 : mT.live) && void 0 !== TT ? TT : null),
        oT = null !== mT && void 0 !== mT && mT.live ? (0, wT.jsx)(pT, {
          item: mT.live,
          favourites: zT,
          packUse: JT
        }) : null;
      return (0, wT.jsxs)("article", {
        className: "ShaderPackInformation AnimFadeIn",
        children: [(0, wT.jsx)(IT.b, {
          onClick: FT,
          children: kT("shaderPackListing:backToPacks")
        }), null === mT && null === jT && (0, wT.jsx)("div", {
          className: "ShaderPackInformationMessage",
          children: (0, wT.jsx)(fT.d, {})
        }), null !== jT && (0, wT.jsxs)("div", {
          className: "ShaderPackInformationMessage",
          children: [(0, PT.v)(jT.error, kT, "shaderPackListing:loadPackFailed"), (0, wT.jsx)(IT.e, {
            onClick: rT,
            children: kT("general:tryAgain")
          })]
        }), null !== mT && null === jT && (0, wT.jsxs)("div", {
          className: "ShaderPackInformationBody",
          children: [(0, wT.jsxs)("header", {
            className: "ShaderPackInformationHeader",
            children: [(0, wT.jsx)("h1", {
              className: "FullyFancyText",
              children: mT.name
            }), oT]
          }), mT.live && (0, wT.jsx)(ZT, {
            item: mT.live
          }), mT.live && (0, wT.jsx)(iT, {
            item: mT.live,
            ownerPreview: mT.ownerPreview,
            bloxdhubSlug: mT.bloxdhubSlug,
            actions: oT
          }), mT.owner && (0, wT.jsx)(bT, {
            details: mT,
            owner: mT.owner,
            onChanged: rT
          })]
        })]
      })
    }

    function pT(TT) {
      let {
        item: kT,
        favourites: cT,
        packUse: lT
      } = TT;
      const MT = cT.isFavourite(kT.packId);
      return (0, wT.jsxs)("div", {
        className: "ShaderPackInformationActions",
        children: [NT.featureFlags.settings.canUseShaderPacks && (0, wT.jsx)(WT, {
          packUse: lT
        }), (0, wT.jsx)(IT.s, {
          className: "ShaderPackInformationLike",
          onClick: () => {
            cT.toggle(kT.packId)
          },
          isLiked: !0 === MT,
          isLoading: null === MT
        })]
      })
    }

    function iT(TT) {
      let {
        item: kT,
        ownerPreview: cT,
        bloxdhubSlug: lT,
        actions: MT
      } = TT;
      const {
        t: yT
      } = (0, QT.B)(), fT = (0, jT.r)(), IT = null === lT ? null : (0, KT.c)(lT);
      return (0, wT.jsxs)("div", {
        className: "ShaderPackFacts",
        children: [kT.description && (0, wT.jsx)("p", {
          className: "ShaderPackDescription",
          children: kT.description
        }), (0, wT.jsxs)("div", {
          className: "ShaderPackFeatureList",
          children: [(null !== cT || null !== IT) && (0, wT.jsx)("div", {
            className: "ShaderPackAuthor",
            children: null !== cT ? (0, wT.jsxs)(wT.Fragment, {
              children: [(0, wT.jsx)(CT.h, {
                playerSocialPreview: cT,
                showLocation: !1,
                linkToProfile: !0
              }), null !== IT && (0, wT.jsx)("a", {
                className: "ShaderPackBloxdhubLogo",
                href: IT,
                target: "_blank",
                rel: "noopener noreferrer",
                children: (0, wT.jsx)("img", {
                  src: ST,
                  alt: KT.b
                })
              })]
            }) : (0, wT.jsxs)("a", {
              className: "ShaderPackBloxdhubName",
              href: IT,
              target: "_blank",
              rel: "noopener noreferrer",
              children: [KT.b, (0, wT.jsx)("img", {
                src: ST,
                alt: ""
              })]
            })
          }), PT.w.filter((TT => kT.features.includes(TT))).map((TT => (0, wT.jsx)(xT.LinkPreserveSearch, {
            className: "ShaderPackFeature",
            to: (0, PT.D)(TT),
            children: yT(PT.G[TT])
          }, TT)))]
        }), MT, (0, wT.jsxs)("dl", {
          className: "ShaderPackFactList",
          children: [(0, wT.jsxs)("div", {
            children: [(0, wT.jsx)("dt", {
              children: yT("shaderPackListing:downloads")
            }), (0, wT.jsx)("dd", {
              children: (0, OT.P)(kT.downloads)
            })]
          }), (0, wT.jsx)(qT, {
            label: yT("shaderPackListing:updated"),
            time: kT.listedUpdatedAt,
            now: fT
          }), (0, wT.jsx)(qT, {
            label: yT("shaderPackListing:created"),
            time: kT.publishedAt,
            now: fT
          }), null !== kT.gpuCost && (0, wT.jsxs)("div", {
            children: [(0, wT.jsx)("dt", {
              children: yT("shaderPackListing:lag")
            }), (0, wT.jsx)("dd", {
              children: yT("shaderPackListing:lagPercent", {
                percent: String((0, PT.O)(kT.gpuCost))
              })
            })]
          }), (0, wT.jsxs)("div", {
            children: [(0, wT.jsx)("dt", {
              children: yT("shaderPackListing:size")
            }), (0, wT.jsx)("dd", {
              children: yT("shaderPackListing:sizeValue", {
                kilobytes: String((0, PT.K)(kT.sourceBytes))
              })
            })]
          }), (0, wT.jsxs)("div", {
            children: [(0, wT.jsx)("dt", {
              children: yT("shaderPackListing:files")
            }), (0, wT.jsx)("dd", {
              children: kT.fileCount
            })]
          })]
        })]
      })
    }

    function qT(TT) {
      let {
        label: kT,
        time: cT,
        now: lT
      } = TT;
      const {
        t: MT,
        selectedLanguage: KT
      } = (0, QT.B)(), OT = new Date(cT);
      let fT = OT.toLocaleDateString();
      if (lT - cT <= 30 * yT.i) {
        const TT = (0, QT.k)(KT.code, "shaderPackListing:timeAgo");
        fT = MT("shaderPackListing:timeAgo", {
          time: (0, yT._)(TT, cT, lT)
        })
      }
      return (0, wT.jsx)(AT.c, {
        tooltipInner: OT.toLocaleString(),
        children: (0, wT.jsxs)("div", {
          children: [(0, wT.jsx)("dt", {
            children: kT
          }), (0, wT.jsx)("dd", {
            children: fT
          })]
        })
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
  6647: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => MT,
      e: () => KT
    });
    var lT = cT(47);
    const MT = "shaderPack";
    async function KT() {
      var TT;
      let kT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (TT = await lT.d.getItem(MT, kT)) && void 0 !== TT ? TT : null
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);