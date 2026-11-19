export const id = 110;
export const ids = [110];
export const modules = {
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
  6160: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      default: () => yT
    });
    var iT = IT(46),
      zT = IT(1484),
      kT = IT(6045),
      WT = IT(1193),
      XT = IT(314),
      BT = IT(1310),
      FT = IT(1468),
      ST = IT(1408),
      DT = IT(1337),
      LT = IT(2303),
      xT = IT(2429),
      cT = IT(4068),
      KT = IT(1110),
      MT = IT(1451),
      rT = IT(90),
      AT = IT(1171);
    const gT = IT.p + "static/media/bloxdhubLogo.6a6c367af2ad6e6f1eb3.webp";
    var hT = IT(1042),
      wT = IT.n(hT),
      mT = IT(1055),
      eT = IT(1325),
      RT = IT(6042),
      uT = IT(1083);
    const vT = (0, iT.lazy)((() => Promise.all([IT.e(106), IT.e(74), IT.e(132), IT.e(126), IT.e(125)]).then((() => IT(6085))).then((TT => ({
      default: TT.ShaderPackPublishForm
    })))));

    function ET(TT) {
      let {
        details: oT,
        owner: IT,
        onChanged: zT
      } = TT;
      const {
        t: WT
      } = (0, AT.t)(), XT = (0, FT.useNavigatePreserveSearch)(), {
        userContext: DT
      } = (0, KT.b)(), [LT, xT] = (0, iT.useState)(!1), [cT, rT] = (0, iT.useState)(null), [gT, hT] = (0, iT.useState)(!1), {
        packId: ET,
        name: fT,
        description: CT,
        live: jT
      } = oT;
      async function JT(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zT;
        xT(!0), rT(null);
        try {
          await TT(), oT()
        } catch (IT) {
          console.error("Failed to change a shader pack", IT), rT((0, RT.A)(IT, WT, "shaderPackListing:ownerActionFailed"))
        } finally {
          xT(!1)
        }
      }
      const UT = (0, RT.u)(DT);
      return (0, uT.jsxs)("section", {
        className: "ShaderPackOwnerPanel",
        children: [(0, uT.jsx)("h2", {
          className: "ShaderPackSectionTitle",
          children: WT("general:manage")
        }), (0, RT.Y)(IT, !(null === jT || void 0 === jT || !jT.renderId), Date.now(), WT).map((TT => (0, uT.jsxs)("div", {
          className: wT()("ShaderPackOwnerNotice", {
            Warning: "warning" === TT.tone
          }),
          children: [(0, uT.jsx)(mT.e, {
            name: "warning" === TT.tone ? "triangle-exclamation" : "circle-info"
          }), (0, uT.jsxs)("div", {
            children: [TT.text, TT.detail && (0, uT.jsx)("pre", {
              className: "ShaderPackOwnerNoticeDetail",
              children: TT.detail
            })]
          })]
        }, TT.text))), oT.ban && (0, uT.jsxs)("div", {
          className: "ShaderPackOwnerNotice Warning",
          children: [(0, uT.jsx)(mT.e, {
            name: "ban"
          }), (0, uT.jsxs)("div", {
            children: ["Banned by ", oT.ban.byName, " on ", new Date(oT.ban.at).toLocaleString()]
          })]
        }), cT && (0, uT.jsx)("div", {
          className: "ShaderPackOwnerError",
          children: cT
        }), (0, uT.jsxs)("div", {
          className: "ShaderPackOwnerActions",
          children: [(0, uT.jsxs)(ST.J, {
            disabled: LT,
            onClick: () => {
              !async function() {
                const TT = await eT.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:renameTitle",
                  initialValue: fT,
                  maxLength: kT.E,
                  submitText: "general:save",
                  validate: TT => TT.trim().length < kT.I ? WT("shaderPackListing:nameTooShort", {
                    min: String(kT.I)
                  }) : null
                }).getResult();
                "notificationTornDown" !== TT && "submit" === (null === TT || void 0 === TT ? void 0 : TT.type) && TT.value.trim() !== fT && await JT((() => MT.e.updateShaderPack(DT, {
                  packId: ET,
                  name: TT.value.trim()
                })))
              }()
            },
            children: [(0, uT.jsx)(mT.e, {
              name: "pen"
            }), " ", WT("shaderPackListing:rename")]
          }), (0, uT.jsxs)(ST.J, {
            disabled: LT,
            onClick: () => {
              !async function() {
                const TT = await eT.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:editDescription",
                  initialValue: CT,
                  maxLength: kT.s,
                  multiline: !0,
                  allowEmptySubmit: !0,
                  submitText: "general:save"
                }).getResult();
                "notificationTornDown" !== TT && "submit" === (null === TT || void 0 === TT ? void 0 : TT.type) && TT.value.trim() !== CT && await JT((() => MT.e.updateShaderPack(DT, {
                  packId: ET,
                  description: TT.value.trim()
                })))
              }()
            },
            children: [(0, uT.jsx)(mT.e, {
              name: "file-lines"
            }), " ", WT("shaderPackListing:editDescription")]
          }), (0, uT.jsxs)(ST.J, {
            disabled: LT || IT.isBanned && !IT.listed,
            onClick: () => {
              JT((() => MT.e.updateShaderPack(DT, {
                packId: ET,
                listed: !IT.listed
              })))
            },
            children: [(0, uT.jsx)(mT.e, {
              name: IT.listed ? "eye-slash" : "eye"
            }), " ", WT(IT.listed ? "shaderPackListing:unlist" : "shaderPackListing:relist")]
          }), !IT.isBanned && (0, uT.jsxs)(ST.e, {
            disabled: LT,
            onClick: () => {
              hT(!gT)
            },
            children: [(0, uT.jsx)(mT.e, {
              name: "upload"
            }), " ", WT("shaderPackListing:uploadVersion")]
          }), (0, uT.jsxs)(ST.F, {
            disabled: LT || IT.isBanned,
            onClick: () => {
              !async function() {
                !0 === await eT.NotificationProvider.showPromptPopup({
                  title: "shaderPackListing:deleteTitle",
                  subtitle: "shaderPackListing:deleteSubtitle",
                  confirmText: "general:delete",
                  cancelText: "general:cancel",
                  destructive: !0
                }).getResult() && await JT((() => MT.e.deleteShaderPack(DT, ET)), (() => {
                  XT(`${RT.V}?section=mine`, {
                    replace: !0
                  })
                }))
              }()
            },
            children: [(0, uT.jsx)(mT.e, {
              name: "trash-can"
            }), " ", WT("general:delete")]
          }), UT && (0, uT.jsxs)(ST.F, {
            disabled: LT,
            onClick: () => {
              JT((() => MT.e.setShaderPackBanned(DT, ET, !IT.isBanned)))
            },
            children: [(0, uT.jsx)(mT.e, {
              name: IT.isBanned ? "circle-check" : "ban"
            }), " ", IT.isBanned ? "Unban" : "Ban"]
          })]
        }), gT && (0, uT.jsx)(iT.Suspense, {
          fallback: (0, uT.jsx)(BT.d, {}),
          children: (0, uT.jsx)(vT, {
            existing: {
              packId: ET,
              name: fT,
              description: CT
            },
            onPublished: () => {
              hT(!1), zT()
            }
          })
        })]
      })
    }
    var fT = IT(68),
      CT = IT(1724),
      jT = IT(1249),
      JT = IT(4514),
      UT = IT(1183),
      aT = IT(6059),
      YT = IT(6052),
      QT = IT(6069);

    function OT(TT) {
      let {
        item: oT
      } = TT;
      const {
        t: IT
      } = (0, AT.t)(), [zT] = (0, aT.g)(), [WT, XT] = (0, iT.useState)(zT), [BT, FT] = (0, iT.useState)(!1), [ST, DT] = (0, iT.useState)(!1), {
        s3Url: LT
      } = UT.clientSideServerUrls, {
        width: xT,
        height: cT
      } = kT.v.large, KT = (0, kT.y)(LT, oT, WT, "large"), {
        renderVersion: MT
      } = oT;
      return (0, uT.jsxs)("div", {
        className: "ShaderPackPreviews",
        children: [(0, uT.jsx)(QT.d, {
          selected: WT,
          onSelect: TT => {
            XT(TT), FT(!1)
          },
          imageUrl: TT => (0, kT.y)(LT, oT, TT, "thumb")
        }), (0, uT.jsxs)("div", {
          className: "ShaderPackPreviewStage",
          children: [!BT && (0, uT.jsxs)("button", {
            type: "button",
            className: "ShaderPackPreviewMain",
            title: null === MT ? void 0 : IT("shaderPackListing:fullSize"),
            disabled: null === MT,
            onClick: () => {
              DT(!0)
            },
            children: [(0, uT.jsx)("img", {
              src: KT,
              width: xT,
              height: cT,
              alt: IT(RT.jb[WT]),
              draggable: !1
            }), (0, uT.jsx)(YT.c, {
              item: oT
            })]
          }), !BT && null !== MT && (0, uT.jsxs)(ZT, {
            side: "Right",
            onClick: () => {
              FT(!0)
            },
            children: [(0, uT.jsx)(mT.e, {
              name: "arrows-left-right"
            }), " ", IT("shaderPackListing:compare")]
          }), BT && null !== MT && (0, uT.jsx)(qT, {
            item: oT,
            packUrl: KT,
            baselineUrl: (0, kT.o)(LT, MT, WT, "large")
          }), BT && (0, uT.jsx)(ZT, {
            side: "Left",
            onClick: () => {
              FT(!1)
            },
            children: IT("shaderPackListing:withPack")
          }), BT && (0, uT.jsx)(ZT, {
            side: "Right",
            onClick: () => {
              FT(!1)
            },
            children: IT("shaderPackListing:withoutPack")
          })]
        }), ST && (0, uT.jsx)(HT, {
          fullUrl: (0, kT.y)(LT, oT, WT, "full"),
          largeUrl: KT,
          alt: IT(RT.jb[WT]),
          onClose: () => {
            DT(!1)
          }
        })]
      })
    }

    function HT(TT) {
      let {
        fullUrl: oT,
        largeUrl: IT,
        alt: zT,
        onClose: kT
      } = TT;
      const WT = (0, iT.useRef)(null);
      return (0, jT.s)("popup", WT, kT), (0, iT.useEffect)((() => {
        function TT(TT) {
          "Escape" === TT.key && (TT.stopPropagation(), kT())
        }
        return window.addEventListener("keydown", TT, !0), () => {
          window.removeEventListener("keydown", TT, !0)
        }
      }), [kT]), (0, fT.createPortal)((0, uT.jsxs)("div", {
        ref: WT,
        className: "ShaderPackFullSize",
        onClick: kT,
        children: [(0, uT.jsx)("img", {
          className: "ShaderPackFullSizeImage",
          src: oT,
          alt: zT,
          draggable: !1,
          style: {
            backgroundImage: `url(${IT})`
          }
        }), (0, uT.jsx)(ST.j, {
          className: "ShaderPackFullSizeClose",
          onClick: kT
        })]
      }), document.body)
    }
    const nT = 5;

    function qT(TT) {
      let {
        item: oT,
        packUrl: IT,
        baselineUrl: zT
      } = TT;
      const {
        t: WT
      } = (0, AT.t)(), [XT, BT] = (0, iT.useState)(50), FT = (0, iT.useRef)(!1), ST = (0, iT.useRef)(null), {
        width: DT,
        height: LT
      } = kT.v.large;

      function xT(TT) {
        BT((oT => (0, CT.g)(oT + TT, 0, 100)))
      }

      function cT(TT) {
        const oT = TT.currentTarget.getBoundingClientRect();
        BT((0, CT.g)((TT.clientX - oT.left) / oT.width * 100, 0, 100))
      }
      return (0, JT.d)(ST, {
        adjust: TT => {
          xT(TT * nT)
        },
        setFraction: TT => {
          BT(100 * TT)
        },
        endDrag: () => {}
      }), (0, uT.jsxs)("div", {
        ref: ST,
        className: "ShaderPackCompare",
        "data-pad-slider": "",
        "data-pad-focusable": "",
        role: "slider",
        tabIndex: 0,
        "aria-label": WT("shaderPackListing:compare"),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(XT),
        style: {
          "--split": `${XT}%`
        },
        onKeyDown: function(TT) {
          const oT = "ArrowLeft" === TT.key ? -nT : "ArrowRight" === TT.key ? nT : 0;
          0 !== oT && (TT.preventDefault(), xT(oT))
        },
        onPointerDown: TT => {
          FT.current = !0, TT.currentTarget.setPointerCapture(TT.pointerId), cT(TT)
        },
        onPointerMove: TT => {
          FT.current && cT(TT)
        },
        onPointerUp: () => {
          FT.current = !1
        },
        onPointerCancel: () => {
          FT.current = !1
        },
        children: [(0, uT.jsx)("img", {
          className: "ShaderPackCompareBaseline",
          src: zT,
          width: DT,
          height: LT,
          alt: "",
          draggable: !1,
          style: {
            backgroundImage: `url(${IT})`
          }
        }), (0, uT.jsx)("div", {
          className: "ShaderPackCompareLine"
        }), (0, uT.jsx)("img", {
          className: "ShaderPackComparePack",
          src: IT,
          width: DT,
          height: LT,
          alt: "",
          draggable: !1
        }), (0, uT.jsx)(YT.c, {
          item: oT,
          className: "ShaderPackCompareNotice"
        })]
      })
    }

    function ZT(TT) {
      let {
        side: oT,
        onClick: IT,
        children: iT
      } = TT;
      return (0, uT.jsx)("button", {
        type: "button",
        className: `ShaderPackStageButton ${oT}`,
        onClick: IT,
        children: (0, uT.jsx)("span", {
          className: "ShaderPackStageButtonFace SmallTextBold",
          children: iT
        })
      })
    }
    var lT = IT(4481),
      sT = IT(282),
      tT = IT(6158);
    const GT = {
      compiler: "shaderPack:compilerUnavailable",
      download: "shaderPackListing:useDownloadFailed",
      apiVersion: "shaderPackListing:useOtherApiVersion",
      invalid: "shaderPackListing:useInvalid",
      errors: "shaderPackListing:useFailsHere",
      save: "shaderPack:saveFailed"
    };

    function pT(TT) {
      const {
        userContext: oT
      } = (0, KT.b)(), [zT, kT] = (0, iT.useState)(null), [WT, XT] = (0, iT.useState)(!1), [BT, FT] = (0, iT.useState)(!1), [ST, DT] = (0, iT.useState)(null), LT = null === TT || void 0 === TT ? void 0 : TT.packId, xT = null === TT || void 0 === TT ? void 0 : TT.sourceHash;
      return (0, iT.useEffect)((() => {
        if (XT(!1), DT(null), void 0 === LT) return;
        let TT = !1;
        return Promise.all([(0, rT.hasUsableWebGpuAdapter)(), (0, tT.e)()]).then((oT => {
          let [IT, iT] = oT;
          var zT;
          TT || (kT(IT), XT((null === iT || void 0 === iT || null === (zT = iT.listing) || void 0 === zT ? void 0 : zT.packId) === LT && iT.listing.sourceHash === xT))
        })).catch((oT => {
          console.error("Failed to check whether this shader pack can be used", oT), TT || kT(!1)
        })), () => {
          TT = !0
        }
      }), [LT, xT]), {
        webGpuUsable: zT,
        inUse: WT,
        busy: BT,
        errorKey: ST,
        use: () => {
          null !== TT && async function(TT) {
            FT(!0), DT(null);
            try {
              const {
                installListedShaderPack: iT
              } = await Promise.all([IT.e(74), IT.e(132), IT.e(127)]).then((() => IT(39280))), zT = await iT({
                packId: TT.packId,
                sourceHash: TT.sourceHash,
                name: TT.name,
                ownerName: TT.ownerName,
                description: TT.description
              });
              if ("failed" === zT.kind) return void DT(GT[zT.reason]);
              XT(!0), MT.e.recordShaderPackDownload(oT, TT.packId).catch((TT => {
                console.error("Failed to count a shader pack's download", TT)
              })), (0, lT.n)()
            } catch (iT) {
              console.error("Failed to use the shader pack", iT), DT("shaderPack:unexpectedError")
            } finally {
              FT(!1)
            }
          }(TT)
        }
      }
    }

    function bT(TT) {
      let {
        packUse: oT
      } = TT;
      const {
        t: IT
      } = (0, AT.t)(), {
        webGpuUsable: iT,
        inUse: zT,
        busy: kT,
        errorKey: WT,
        use: XT
      } = oT;
      return (0, uT.jsxs)("div", {
        className: "ShaderPackUse",
        children: [(0, uT.jsxs)(ST.m, {
          disabled: !0 !== iT || zT,
          loading: kT,
          onClick: XT,
          children: [(0, uT.jsx)(mT.e, {
            name: zT ? "check" : "download"
          }), " ", IT(zT ? "shaderPackListing:inUse" : "shaderPackListing:use")]
        }), !1 === iT && (0, uT.jsx)("div", {
          className: "ShaderPackUseNote",
          children: IT((0, sT.h)() ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), WT && (0, uT.jsx)("div", {
          className: "ShaderPackUseNote Error",
          children: IT(WT)
        })]
      })
    }

    function yT() {
      var TT;
      const {
        t: oT
      } = (0, AT.t)(), IT = (0, FT.useNavigatePreserveSearch)(), {
        packId: kT
      } = (0, zT.C)(), {
        userContext: WT,
        isUserContextUpdating: XT
      } = (0, KT.b)(), [DT, LT] = (0, iT.useState)(null), [xT, rT] = (0, iT.useState)(null), [gT, hT] = (0, iT.useState)(0), wT = (0, iT.useRef)(0);

      function mT() {
        var TT;
        null !== (TT = (0, FT.getPreviousLocation)()) && void 0 !== TT && TT.startsWith(RT.V) ? IT(-1) : IT(RT.V)
      }(0, cT.e)(mT), (0, aT.b)(), (0, iT.useEffect)((() => {
        if (XT || void 0 === kT) return;
        const TT = ++wT.current;
        rT(null), MT.e.getShaderPack(WT, kT).then((oT => {
          wT.current === TT && LT(oT)
        })).catch((oT => {
          wT.current === TT && (console.error("Failed to get the shader pack", oT), LT(null), rT({
            error: oT
          }))
        }))
      }), [kT, WT, XT, gT]);
      const eT = () => {
          hT((TT => TT + 1))
        },
        vT = (null === DT || void 0 === DT ? void 0 : DT.packId) === kT ? DT : null,
        fT = (0, aT.i)(),
        CT = pT(null !== (TT = null === vT || void 0 === vT ? void 0 : vT.live) && void 0 !== TT ? TT : null),
        jT = null !== vT && void 0 !== vT && vT.live ? (0, uT.jsx)(NT, {
          item: vT.live,
          favourites: fT,
          packUse: CT
        }) : null;
      return (0, uT.jsxs)("article", {
        className: "ShaderPackInformation AnimFadeIn",
        children: [(0, uT.jsx)(ST.c, {
          onClick: mT,
          children: oT("shaderPackListing:backToPacks")
        }), null === vT && null === xT && (0, uT.jsx)("div", {
          className: "ShaderPackInformationMessage",
          children: (0, uT.jsx)(BT.d, {})
        }), null !== xT && (0, uT.jsxs)("div", {
          className: "ShaderPackInformationMessage",
          children: [(0, RT.A)(xT.error, oT, "shaderPackListing:loadPackFailed"), (0, uT.jsx)(ST.e, {
            onClick: eT,
            children: oT("general:tryAgain")
          })]
        }), null !== vT && null === xT && (0, uT.jsxs)("div", {
          className: "ShaderPackInformationBody",
          children: [(0, uT.jsxs)("header", {
            className: "ShaderPackInformationHeader",
            children: [(0, uT.jsx)("h1", {
              className: "FullyFancyText",
              children: vT.name
            }), jT]
          }), vT.live && (0, uT.jsx)(OT, {
            item: vT.live
          }), vT.live && (0, uT.jsx)(PT, {
            item: vT.live,
            ownerPreview: vT.ownerPreview,
            bloxdhubSlug: vT.bloxdhubSlug,
            actions: jT
          }), vT.owner && (0, uT.jsx)(ET, {
            details: vT,
            owner: vT.owner,
            onChanged: eT
          })]
        })]
      })
    }

    function NT(TT) {
      let {
        item: oT,
        favourites: IT,
        packUse: iT
      } = TT;
      const zT = IT.isFavourite(oT.packId);
      return (0, uT.jsxs)("div", {
        className: "ShaderPackInformationActions",
        children: [rT.featureFlags.settings.canUseShaderPacks && (0, uT.jsx)(bT, {
          packUse: iT
        }), (0, uT.jsx)(ST.t, {
          className: "ShaderPackInformationLike",
          onClick: () => {
            IT.toggle(oT.packId)
          },
          isLiked: !0 === zT,
          isLoading: null === zT
        })]
      })
    }

    function PT(TT) {
      let {
        item: oT,
        ownerPreview: IT,
        bloxdhubSlug: iT,
        actions: zT
      } = TT;
      const {
        t: XT
      } = (0, AT.t)(), BT = (0, xT.h)(), ST = null === iT ? null : (0, kT.g)(iT);
      return (0, uT.jsxs)("div", {
        className: "ShaderPackFacts",
        children: [oT.description && (0, uT.jsx)("p", {
          className: "ShaderPackDescription",
          children: oT.description
        }), (0, uT.jsxs)("div", {
          className: "ShaderPackFeatureList",
          children: [(null !== IT || null !== ST) && (0, uT.jsx)("div", {
            className: "ShaderPackAuthor",
            children: null !== IT ? (0, uT.jsxs)(uT.Fragment, {
              children: [(0, uT.jsx)(LT.g, {
                playerSocialPreview: IT,
                showLocation: !1,
                linkToProfile: !0
              }), null !== ST && (0, uT.jsx)("a", {
                className: "ShaderPackBloxdhubLogo",
                href: ST,
                target: "_blank",
                rel: "noopener noreferrer",
                children: (0, uT.jsx)("img", {
                  src: gT,
                  alt: kT.c
                })
              })]
            }) : (0, uT.jsxs)("a", {
              className: "ShaderPackBloxdhubName",
              href: ST,
              target: "_blank",
              rel: "noopener noreferrer",
              children: [kT.c, (0, uT.jsx)("img", {
                src: gT,
                alt: ""
              })]
            })
          }), RT.D.filter((TT => oT.features.includes(TT))).map((TT => (0, uT.jsx)(FT.LinkPreserveSearch, {
            className: "ShaderPackFeature",
            to: (0, RT.L)(TT),
            children: XT(RT.N[TT])
          }, TT)))]
        }), zT, (0, uT.jsxs)("dl", {
          className: "ShaderPackFactList",
          children: [(0, uT.jsxs)("div", {
            children: [(0, uT.jsx)("dt", {
              children: XT("shaderPackListing:downloads")
            }), (0, uT.jsx)("dd", {
              children: (0, WT.S)(oT.downloads)
            })]
          }), (0, uT.jsx)(dT, {
            label: XT("shaderPackListing:updated"),
            time: oT.listedUpdatedAt,
            now: BT
          }), (0, uT.jsx)(dT, {
            label: XT("shaderPackListing:created"),
            time: oT.publishedAt,
            now: BT
          }), null !== oT.gpuCost && (0, uT.jsxs)("div", {
            children: [(0, uT.jsx)("dt", {
              children: XT("shaderPackListing:lag")
            }), (0, uT.jsx)("dd", {
              children: XT("shaderPackListing:lagPercent", {
                percent: String((0, RT.S)(oT.gpuCost))
              })
            })]
          }), (0, uT.jsxs)("div", {
            children: [(0, uT.jsx)("dt", {
              children: XT("shaderPackListing:size")
            }), (0, uT.jsx)("dd", {
              children: XT("shaderPackListing:sizeValue", {
                kilobytes: String((0, RT.P)(oT.sourceBytes))
              })
            })]
          }), (0, uT.jsxs)("div", {
            children: [(0, uT.jsx)("dt", {
              children: XT("shaderPackListing:files")
            }), (0, uT.jsx)("dd", {
              children: oT.fileCount
            })]
          })]
        })]
      })
    }

    function dT(TT) {
      let {
        label: oT,
        time: IT,
        now: iT
      } = TT;
      const {
        t: zT,
        selectedLanguage: kT
      } = (0, AT.t)(), WT = new Date(IT);
      let BT = WT.toLocaleDateString();
      if (iT - IT <= 30 * XT.j) {
        const TT = (0, AT.l)(kT.code, "shaderPackListing:timeAgo");
        BT = zT("shaderPackListing:timeAgo", {
          time: (0, XT.cb)(TT, IT, iT)
        })
      }
      return (0, uT.jsx)(DT.e, {
        tooltipInner: WT.toLocaleString(),
        children: (0, uT.jsxs)("div", {
          children: [(0, uT.jsx)("dt", {
            children: oT
          }), (0, uT.jsx)("dd", {
            children: BT
          })]
        })
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
  6158: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => zT,
      e: () => kT
    });
    var iT = IT(26);
    const zT = "shaderPack";
    async function kT() {
      var TT;
      let oT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (TT = await iT.c.getItem(zT, oT)) && void 0 !== TT ? TT : null
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);