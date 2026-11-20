export const id = 109;
export const ids = [109];
export const modules = {
  4670: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => CU,
      d: () => fU,
      h: () => hU,
      l: () => WU
    });
    var tU = gU(56),
      pU = gU(4679),
      EU = gU(4040),
      PU = gU(1344),
      TU = gU(4693),
      qU = gU(1037),
      KU = gU.n(qU),
      cU = gU(1333),
      GU = gU(1637),
      jU = gU(4701),
      uU = gU(1090);

    function CU(UU) {
      let {
        label: RU,
        onClick: gU,
        checked: tU,
        circleInfoText: pU,
        className: TU,
        disabled: qU,
        note: cU
      } = UU;
      return (0, uU.jsxs)("div", {
        "aria-disabled": qU || void 0,
        "data-pad-focusable": !0,
        className: KU()("SettingBox CheckboxContainer", {
          [TU]: TU,
          SettingBoxDisabled: qU
        }),
        onClick: () => {
          qU || gU(!tU)
        },
        children: [(0, uU.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, uU.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, uU.jsx)(EU.d, {
              className: "SettingsCheckbox",
              checked: tU,
              disabled: qU,
              onChange: () => {}
            })
          }), (0, uU.jsxs)("div", {
            className: "CheckboxText",
            children: [RU, pU && (0, uU.jsx)("span", {
              onClick: UU => UU.stopPropagation(),
              children: (0, uU.jsx)(PU.d, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: pU
              })
            })]
          })]
        }), cU && (0, uU.jsx)("div", {
          className: "SettingNote",
          children: cU
        })]
      })
    }

    function hU(UU) {
      let {
        name: RU,
        onChange: gU,
        min: pU,
        max: EU,
        step: TU,
        initValue: qU,
        circleInfoText: cU,
        format: GU,
        className: jU,
        padStep: CU,
        disabled: hU = !1,
        selectableMax: QU,
        cappedNote: WU,
        onChangeComplete: fU
      } = UU;
      const [xU, mU] = (0, tU.useState)(qU), IU = (0, tU.useRef)(qU);
      (0, tU.useEffect)((() => {
        IU.current = qU, mU(qU)
      }), [qU]);
      const JU = void 0 !== QU && QU < EU,
        wU = JU ? {
          "--slider-selectable": (QU - pU) / (EU - pU)
        } : void 0;
      return (0, uU.jsxs)("div", {
        className: KU()("SettingBox SettingsSliderDiv", {
          [jU]: jU,
          SettingBoxDisabled: hU,
          SliderCapped: JU
        }),
        style: wU,
        children: [(0, uU.jsxs)("div", {
          className: "SliderText",
          children: [`${RU}: ${GU?GU(xU):xU}`, cU && (0, uU.jsx)(PU.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: cU
          })]
        }), (0, uU.jsx)("div", {
          className: "SliderDiv",
          children: (0, uU.jsx)(eU, {
            value: xU,
            min: pU,
            max: EU,
            step: TU,
            onChange: UU => {
              if (JU && UU >= QU && xU === QU) return;
              const RU = JU ? Math.min(UU, QU) : UU;
              IU.current = RU, mU(RU), gU(RU)
            },
            onChangeComplete: fU && (() => {
              fU(IU.current)
            }),
            format: GU,
            padStep: CU,
            disabled: hU
          })
        }), JU && WU && (0, uU.jsx)("div", {
          className: "SettingNote",
          children: WU
        })]
      })
    }
    const QU = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function eU(UU) {
      var RU;
      let {
        value: gU,
        min: EU,
        max: PU,
        step: TU,
        onChange: qU,
        orientation: KU,
        reverse: cU,
        setIsChanging: GU,
        tooltip: CU,
        labels: hU,
        handleLabel: eU,
        format: WU,
        onChangeStart: fU,
        onChangeComplete: xU,
        padStep: mU,
        disabled: IU = !1
      } = UU;
      const JU = (0, tU.useRef)(null),
        wU = (0, tU.useRef)(null);
      (0, tU.useLayoutEffect)((() => {
        var UU, RU, gU;
        const tU = null !== (UU = null === (RU = JU.current) || void 0 === RU ? void 0 : RU.querySelector(".rangeslider")) && void 0 !== UU ? UU : null;
        null === tU || void 0 === tU || tU.setAttribute("data-pad-slider", ""), null === tU || void 0 === tU || tU.setAttribute("data-pad-focusable", ""), null === tU || void 0 === tU || null === (gU = tU.querySelector(".rangeslider__handle")) || void 0 === gU || gU.setAttribute("data-pad-slider-handle", ""), wU.current = tU
      }), []), (0, tU.useLayoutEffect)((() => {
        var UU, RU;
        IU ? null === (UU = wU.current) || void 0 === UU || UU.setAttribute("aria-disabled", "true") : null === (RU = wU.current) || void 0 === RU || RU.removeAttribute("aria-disabled")
      }), [IU]);
      const nU = (null !== (RU = String(TU).split(".")[1]) && void 0 !== RU ? RU : "").length,
        bU = UU => {
          const RU = Number((Math.round((UU - EU) / TU) * TU + EU).toFixed(nU));
          return Math.min(PU, Math.max(EU, RU))
        },
        oU = (0, tU.useRef)(xU);
      oU.current = xU, (0, tU.useEffect)((() => {
        const UU = JU.current;
        if (!UU) return;
        const RU = UU => {
          var RU;
          QU.has(UU.key) && (null === (RU = oU.current) || void 0 === RU || RU.call(oU))
        };
        return UU.addEventListener("keyup", RU), () => {
          UU.removeEventListener("keyup", RU)
        }
      }), []);
      const ZU = (0, tU.useRef)(!1);
      return (0, jU.e)(wU, {
        adjust: UU => {
          if (IU) return;
          const RU = null !== mU && void 0 !== mU ? mU : Math.max(TU, Math.round((PU - EU) / 20 / TU) * TU),
            tU = bU(gU + UU * RU * (cU ? -1 : 1));
          tU !== gU && (null === fU || void 0 === fU || fU(), qU(tU), null === xU || void 0 === xU || xU())
        },
        setFraction: UU => {
          if (IU) return;
          const RU = bU(EU + (cU ? 1 - UU : UU) * (PU - EU));
          RU !== gU && (ZU.current || (ZU.current = !0, null === fU || void 0 === fU || fU()), qU(RU))
        },
        endDrag: () => {
          ZU.current && (ZU.current = !1, null === xU || void 0 === xU || xU())
        }
      }), (0, uU.jsx)("div", {
        ref: JU,
        style: {
          display: "contents"
        },
        children: (0, uU.jsx)(pU.d, {
          value: gU,
          min: EU,
          max: PU,
          step: TU,
          onChange: qU,
          orientation: KU,
          reverse: cU,
          tooltip: CU,
          labels: hU,
          handleLabel: eU,
          format: WU,
          onChangeStart: () => {
            null === fU || void 0 === fU || fU(), null === GU || void 0 === GU || GU(!0)
          },
          onChangeComplete: () => {
            null === GU || void 0 === GU || GU(!1), null === xU || void 0 === xU || xU()
          }
        })
      })
    }
    async function WU() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      const RU = cU.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: "",
        unlockPointerKey: UU
      });
      !0 === await RU.getResult() && (0, GU.reloadBloxd)()
    }

    function fU(UU) {
      let {
        label: RU,
        options: gU,
        value: tU,
        onChange: pU,
        circleInfoText: EU
      } = UU;
      return (0, uU.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, uU.jsxs)("div", {
          className: "SliderText",
          children: [RU, EU && (0, uU.jsx)(PU.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: EU
          })]
        }), (0, uU.jsx)(TU.d, {
          ariaLabel: RU,
          options: gU,
          value: tU,
          onChange: pU
        })]
      })
    }
  },
  6346: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      default: () => DU
    });
    var tU = gU(56),
      pU = gU(1481),
      EU = gU(6222),
      PU = gU(1217),
      TU = gU(311),
      qU = gU(1326),
      KU = gU(1475),
      cU = gU(1412),
      GU = gU(1344),
      jU = gU(2374),
      uU = gU(2514),
      CU = gU(4214),
      hU = gU(1112),
      QU = gU(1461),
      eU = gU(96),
      WU = gU(1181);
    const fU = gU.p + "static/media/bloxdhubLogo.6a6c367af2ad6e6f1eb3.webp";
    var xU = gU(1037),
      mU = gU.n(xU),
      IU = gU(1049),
      JU = gU(1333),
      wU = gU(6220),
      nU = gU(1090);
    const bU = (0, tU.lazy)((() => Promise.all([gU.e(105), gU.e(74), gU.e(131), gU.e(125), gU.e(124)]).then((() => gU(6263))).then((UU => ({
      default: UU.ShaderPackPublishForm
    })))));

    function oU(UU) {
      let {
        details: RU,
        owner: gU,
        onChanged: pU
      } = UU;
      const {
        t: PU
      } = (0, WU.B)(), TU = (0, KU.useNavigatePreserveSearch)(), {
        userContext: GU
      } = (0, hU.e)(), [jU, uU] = (0, tU.useState)(!1), [CU, eU] = (0, tU.useState)(null), [fU, xU] = (0, tU.useState)(!1), {
        packId: oU,
        name: ZU,
        description: aU,
        live: YU
      } = RU;
      async function BU(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pU;
        uU(!0), eU(null);
        try {
          await UU(), RU()
        } catch (gU) {
          console.error("Failed to change a shader pack", gU), eU((0, wU.q)(gU, PU, "shaderPackListing:ownerActionFailed"))
        } finally {
          uU(!1)
        }
      }
      const VU = (0, wU.o)(GU);
      return (0, nU.jsxs)("section", {
        className: "ShaderPackOwnerPanel",
        children: [(0, nU.jsx)("h2", {
          className: "ShaderPackSectionTitle",
          children: PU("general:manage")
        }), (0, wU.S)(gU, !(null === YU || void 0 === YU || !YU.renderId), Date.now(), PU).map((UU => (0, nU.jsxs)("div", {
          className: mU()("ShaderPackOwnerNotice", {
            Warning: "warning" === UU.tone
          }),
          children: [(0, nU.jsx)(IU.c, {
            name: "warning" === UU.tone ? "triangle-exclamation" : "circle-info"
          }), (0, nU.jsxs)("div", {
            children: [UU.text, UU.detail && (0, nU.jsx)("pre", {
              className: "ShaderPackOwnerNoticeDetail",
              children: UU.detail
            })]
          })]
        }, UU.text))), RU.ban && (0, nU.jsxs)("div", {
          className: "ShaderPackOwnerNotice Warning",
          children: [(0, nU.jsx)(IU.c, {
            name: "ban"
          }), (0, nU.jsxs)("div", {
            children: ["Banned by ", RU.ban.byName, " on ", new Date(RU.ban.at).toLocaleString()]
          })]
        }), CU && (0, nU.jsx)("div", {
          className: "ShaderPackOwnerError",
          children: CU
        }), (0, nU.jsxs)("div", {
          className: "ShaderPackOwnerActions",
          children: [(0, nU.jsxs)(cU.M, {
            disabled: jU,
            onClick: () => {
              !async function() {
                const UU = await JU.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:renameTitle",
                  initialValue: ZU,
                  maxLength: EU.z,
                  submitText: "general:save",
                  validate: UU => UU.trim().length < EU.A ? PU("shaderPackListing:nameTooShort", {
                    min: String(EU.A)
                  }) : null
                }).getResult();
                "notificationTornDown" !== UU && "submit" === (null === UU || void 0 === UU ? void 0 : UU.type) && UU.value.trim() !== ZU && await BU((() => QU.c.updateShaderPack(GU, {
                  packId: oU,
                  name: UU.value.trim()
                })))
              }()
            },
            children: [(0, nU.jsx)(IU.c, {
              name: "pen"
            }), " ", PU("shaderPackListing:rename")]
          }), (0, nU.jsxs)(cU.M, {
            disabled: jU,
            onClick: () => {
              !async function() {
                const UU = await JU.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:editDescription",
                  initialValue: aU,
                  maxLength: EU.r,
                  multiline: !0,
                  allowEmptySubmit: !0,
                  submitText: "general:save"
                }).getResult();
                "notificationTornDown" !== UU && "submit" === (null === UU || void 0 === UU ? void 0 : UU.type) && UU.value.trim() !== aU && await BU((() => QU.c.updateShaderPack(GU, {
                  packId: oU,
                  description: UU.value.trim()
                })))
              }()
            },
            children: [(0, nU.jsx)(IU.c, {
              name: "file-lines"
            }), " ", PU("shaderPackListing:editDescription")]
          }), (0, nU.jsxs)(cU.M, {
            disabled: jU || gU.isBanned && !gU.listed,
            onClick: () => {
              BU((() => QU.c.updateShaderPack(GU, {
                packId: oU,
                listed: !gU.listed
              })))
            },
            children: [(0, nU.jsx)(IU.c, {
              name: gU.listed ? "eye-slash" : "eye"
            }), " ", PU(gU.listed ? "shaderPackListing:unlist" : "shaderPackListing:relist")]
          }), !gU.isBanned && (0, nU.jsxs)(cU.e, {
            disabled: jU,
            onClick: () => {
              xU(!fU)
            },
            children: [(0, nU.jsx)(IU.c, {
              name: "upload"
            }), " ", PU("shaderPackListing:uploadVersion")]
          }), (0, nU.jsxs)(cU.F, {
            disabled: jU || gU.isBanned,
            onClick: () => {
              !async function() {
                !0 === await JU.NotificationProvider.showPromptPopup({
                  title: "shaderPackListing:deleteTitle",
                  subtitle: "shaderPackListing:deleteSubtitle",
                  confirmText: "general:delete",
                  cancelText: "general:cancel",
                  destructive: !0
                }).getResult() && await BU((() => QU.c.deleteShaderPack(GU, oU)), (() => {
                  TU(`${wU.Q}?section=mine`, {
                    replace: !0
                  })
                }))
              }()
            },
            children: [(0, nU.jsx)(IU.c, {
              name: "trash-can"
            }), " ", PU("general:delete")]
          }), VU && (0, nU.jsxs)(cU.F, {
            disabled: jU,
            onClick: () => {
              BU((() => QU.c.setShaderPackBanned(GU, oU, !gU.isBanned)))
            },
            children: [(0, nU.jsx)(IU.c, {
              name: gU.isBanned ? "circle-check" : "ban"
            }), " ", gU.isBanned ? "Unban" : "Ban"]
          })]
        }), fU && (0, nU.jsx)(tU.Suspense, {
          fallback: (0, nU.jsx)(qU.d, {}),
          children: (0, nU.jsx)(bU, {
            existing: {
              packId: oU,
              name: ZU,
              description: aU
            },
            onPublished: () => {
              xU(!1), pU()
            }
          })
        })]
      })
    }
    var ZU = gU(74),
      aU = gU(1771),
      YU = gU(1283),
      BU = gU(4701),
      VU = gU(1196),
      rU = gU(6235),
      XU = gU(6226),
      vU = gU(6247);

    function dU(UU) {
      let {
        item: RU
      } = UU;
      const {
        t: gU
      } = (0, WU.B)(), [pU] = (0, rU.i)(), [PU, TU] = (0, tU.useState)(pU), [qU, KU] = (0, tU.useState)(!1), [cU, GU] = (0, tU.useState)(!1), {
        s3Url: jU
      } = VU.clientSideServerUrls, {
        width: uU,
        height: CU
      } = EU.s.large, hU = (0, EU.v)(jU, RU, PU, "large"), {
        renderVersion: QU
      } = RU;
      return (0, nU.jsxs)("div", {
        className: "ShaderPackPreviews",
        children: [(0, nU.jsx)(vU.b, {
          selected: PU,
          onSelect: UU => {
            TU(UU), KU(!1)
          },
          imageUrl: UU => (0, EU.v)(jU, RU, UU, "thumb")
        }), (0, nU.jsxs)("div", {
          className: "ShaderPackPreviewStage",
          children: [!qU && (0, nU.jsxs)("button", {
            type: "button",
            className: "ShaderPackPreviewMain",
            title: null === QU ? void 0 : gU("shaderPackListing:fullSize"),
            disabled: null === QU,
            onClick: () => {
              GU(!0)
            },
            children: [(0, nU.jsx)("img", {
              src: hU,
              width: uU,
              height: CU,
              alt: gU(wU.Y[PU]),
              draggable: !1
            }), (0, nU.jsx)(XU.d, {
              item: RU
            })]
          }), !qU && null !== QU && (0, nU.jsxs)(yU, {
            side: "Right",
            onClick: () => {
              KU(!0)
            },
            children: [(0, nU.jsx)(IU.c, {
              name: "arrows-left-right"
            }), " ", gU("shaderPackListing:compare")]
          }), qU && null !== QU && (0, nU.jsx)(sU, {
            item: RU,
            packUrl: hU,
            baselineUrl: (0, EU.q)(jU, QU, PU, "large")
          }), qU && (0, nU.jsx)(yU, {
            side: "Left",
            onClick: () => {
              KU(!1)
            },
            children: gU("shaderPackListing:withPack")
          }), qU && (0, nU.jsx)(yU, {
            side: "Right",
            onClick: () => {
              KU(!1)
            },
            children: gU("shaderPackListing:withoutPack")
          })]
        }), cU && (0, nU.jsx)(HU, {
          fullUrl: (0, EU.v)(jU, RU, PU, "full"),
          largeUrl: hU,
          alt: gU(wU.Y[PU]),
          onClose: () => {
            GU(!1)
          }
        })]
      })
    }

    function HU(UU) {
      let {
        fullUrl: RU,
        largeUrl: gU,
        alt: pU,
        onClose: EU
      } = UU;
      const PU = (0, tU.useRef)(null);
      return (0, YU.q)("popup", PU, EU), (0, tU.useEffect)((() => {
        function UU(UU) {
          "Escape" === UU.key && (UU.stopPropagation(), EU())
        }
        return window.addEventListener("keydown", UU, !0), () => {
          window.removeEventListener("keydown", UU, !0)
        }
      }), [EU]), (0, ZU.createPortal)((0, nU.jsxs)("div", {
        ref: PU,
        className: "ShaderPackFullSize",
        onClick: EU,
        children: [(0, nU.jsx)("img", {
          className: "ShaderPackFullSizeImage",
          src: RU,
          alt: pU,
          draggable: !1,
          style: {
            backgroundImage: `url(${gU})`
          }
        }), (0, nU.jsx)(cU.h, {
          className: "ShaderPackFullSizeClose",
          onClick: EU
        })]
      }), document.body)
    }
    const SU = 5;

    function sU(UU) {
      let {
        item: RU,
        packUrl: gU,
        baselineUrl: pU
      } = UU;
      const {
        t: PU
      } = (0, WU.B)(), [TU, qU] = (0, tU.useState)(50), KU = (0, tU.useRef)(!1), cU = (0, tU.useRef)(null), {
        width: GU,
        height: jU
      } = EU.s.large;

      function uU(UU) {
        qU((RU => (0, aU.e)(RU + UU, 0, 100)))
      }

      function CU(UU) {
        const RU = UU.currentTarget.getBoundingClientRect();
        qU((0, aU.e)((UU.clientX - RU.left) / RU.width * 100, 0, 100))
      }
      return (0, BU.e)(cU, {
        adjust: UU => {
          uU(UU * SU)
        },
        setFraction: UU => {
          qU(100 * UU)
        },
        endDrag: () => {}
      }), (0, nU.jsxs)("div", {
        ref: cU,
        className: "ShaderPackCompare",
        "data-pad-slider": "",
        "data-pad-focusable": "",
        role: "slider",
        tabIndex: 0,
        "aria-label": PU("shaderPackListing:compare"),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(TU),
        style: {
          "--split": `${TU}%`
        },
        onKeyDown: function(UU) {
          const RU = "ArrowLeft" === UU.key ? -SU : "ArrowRight" === UU.key ? SU : 0;
          0 !== RU && (UU.preventDefault(), uU(RU))
        },
        onPointerDown: UU => {
          KU.current = !0, UU.currentTarget.setPointerCapture(UU.pointerId), CU(UU)
        },
        onPointerMove: UU => {
          KU.current && CU(UU)
        },
        onPointerUp: () => {
          KU.current = !1
        },
        onPointerCancel: () => {
          KU.current = !1
        },
        children: [(0, nU.jsx)("img", {
          className: "ShaderPackCompareBaseline",
          src: pU,
          width: GU,
          height: jU,
          alt: "",
          draggable: !1,
          style: {
            backgroundImage: `url(${gU})`
          }
        }), (0, nU.jsx)("div", {
          className: "ShaderPackCompareLine"
        }), (0, nU.jsx)("img", {
          className: "ShaderPackComparePack",
          src: gU,
          width: GU,
          height: jU,
          alt: "",
          draggable: !1
        }), (0, nU.jsx)(XU.d, {
          item: RU,
          className: "ShaderPackCompareNotice"
        })]
      })
    }

    function yU(UU) {
      let {
        side: RU,
        onClick: gU,
        children: tU
      } = UU;
      return (0, nU.jsx)("button", {
        type: "button",
        className: `ShaderPackStageButton ${RU}`,
        onClick: gU,
        children: (0, nU.jsx)("span", {
          className: "ShaderPackStageButtonFace SmallTextBold",
          children: tU
        })
      })
    }
    var kU = gU(4670),
      FU = gU(274),
      iU = gU(6339);
    const AU = {
      compiler: "shaderPack:compilerUnavailable",
      download: "shaderPackListing:useDownloadFailed",
      apiVersion: "shaderPackListing:useOtherApiVersion",
      invalid: "shaderPackListing:useInvalid",
      errors: "shaderPackListing:useFailsHere",
      save: "shaderPack:saveFailed"
    };

    function zU(UU) {
      const {
        userContext: RU
      } = (0, hU.e)(), [pU, EU] = (0, tU.useState)(null), [PU, TU] = (0, tU.useState)(!1), [qU, KU] = (0, tU.useState)(!1), [cU, GU] = (0, tU.useState)(null), jU = null === UU || void 0 === UU ? void 0 : UU.packId, uU = null === UU || void 0 === UU ? void 0 : UU.sourceHash;
      return (0, tU.useEffect)((() => {
        if (TU(!1), GU(null), void 0 === jU) return;
        let UU = !1;
        return Promise.all([(0, eU.hasUsableWebGpuAdapter)(), (0, iU.e)()]).then((RU => {
          let [gU, tU] = RU;
          var pU;
          UU || (EU(gU), TU((null === tU || void 0 === tU || null === (pU = tU.listing) || void 0 === pU ? void 0 : pU.packId) === jU && tU.listing.sourceHash === uU))
        })).catch((RU => {
          console.error("Failed to check whether this shader pack can be used", RU), UU || EU(!1)
        })), () => {
          UU = !0
        }
      }), [jU, uU]), {
        webGpuUsable: pU,
        inUse: PU,
        busy: qU,
        errorKey: cU,
        use: () => {
          null !== UU && async function(UU) {
            KU(!0), GU(null);
            try {
              const {
                installListedShaderPack: tU
              } = await Promise.all([gU.e(74), gU.e(131), gU.e(126)]).then((() => gU(39874))), pU = await tU({
                packId: UU.packId,
                sourceHash: UU.sourceHash,
                name: UU.name,
                ownerName: UU.ownerName,
                description: UU.description
              });
              if ("failed" === pU.kind) return void GU(AU[pU.reason]);
              TU(!0), QU.c.recordShaderPackDownload(RU, UU.packId).catch((UU => {
                console.error("Failed to count a shader pack's download", UU)
              })), (0, kU.l)()
            } catch (tU) {
              console.error("Failed to use the shader pack", tU), GU("shaderPack:unexpectedError")
            } finally {
              KU(!1)
            }
          }(UU)
        }
      }
    }

    function MU(UU) {
      let {
        packUse: RU
      } = UU;
      const {
        t: gU
      } = (0, WU.B)(), {
        webGpuUsable: tU,
        inUse: pU,
        busy: EU,
        errorKey: PU,
        use: TU
      } = RU;
      return (0, nU.jsxs)("div", {
        className: "ShaderPackUse",
        children: [(0, nU.jsxs)(cU.j, {
          disabled: !0 !== tU || pU,
          loading: EU,
          onClick: TU,
          children: [(0, nU.jsx)(IU.c, {
            name: pU ? "check" : "download"
          }), " ", gU(pU ? "shaderPackListing:inUse" : "shaderPackListing:use")]
        }), !1 === tU && (0, nU.jsx)("div", {
          className: "ShaderPackUseNote",
          children: gU((0, FU.c)() ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), PU && (0, nU.jsx)("div", {
          className: "ShaderPackUseNote Error",
          children: gU(PU)
        })]
      })
    }

    function DU() {
      var UU;
      const {
        t: RU
      } = (0, WU.B)(), gU = (0, KU.useNavigatePreserveSearch)(), {
        packId: EU
      } = (0, pU.y)(), {
        userContext: PU,
        isUserContextUpdating: TU
      } = (0, hU.e)(), [GU, jU] = (0, tU.useState)(null), [uU, eU] = (0, tU.useState)(null), [fU, xU] = (0, tU.useState)(0), mU = (0, tU.useRef)(0);

      function IU() {
        var UU;
        null !== (UU = (0, KU.getPreviousLocation)()) && void 0 !== UU && UU.startsWith(wU.Q) ? gU(-1) : gU(wU.Q)
      }(0, CU.c)(IU), (0, rU.d)(), (0, tU.useEffect)((() => {
        if (TU || void 0 === EU) return;
        const UU = ++mU.current;
        eU(null), QU.c.getShaderPack(PU, EU).then((RU => {
          mU.current === UU && jU(RU)
        })).catch((RU => {
          mU.current === UU && (console.error("Failed to get the shader pack", RU), jU(null), eU({
            error: RU
          }))
        }))
      }), [EU, PU, TU, fU]);
      const JU = () => {
          xU((UU => UU + 1))
        },
        bU = (null === GU || void 0 === GU ? void 0 : GU.packId) === EU ? GU : null,
        ZU = (0, rU.j)(),
        aU = zU(null !== (UU = null === bU || void 0 === bU ? void 0 : bU.live) && void 0 !== UU ? UU : null),
        YU = null !== bU && void 0 !== bU && bU.live ? (0, nU.jsx)(LU, {
          item: bU.live,
          favourites: ZU,
          packUse: aU
        }) : null;
      return (0, nU.jsxs)("article", {
        className: "ShaderPackInformation AnimFadeIn",
        children: [(0, nU.jsx)(cU.d, {
          onClick: IU,
          children: RU("shaderPackListing:backToPacks")
        }), null === bU && null === uU && (0, nU.jsx)("div", {
          className: "ShaderPackInformationMessage",
          children: (0, nU.jsx)(qU.d, {})
        }), null !== uU && (0, nU.jsxs)("div", {
          className: "ShaderPackInformationMessage",
          children: [(0, wU.q)(uU.error, RU, "shaderPackListing:loadPackFailed"), (0, nU.jsx)(cU.e, {
            onClick: JU,
            children: RU("general:tryAgain")
          })]
        }), null !== bU && null === uU && (0, nU.jsxs)("div", {
          className: "ShaderPackInformationBody",
          children: [(0, nU.jsxs)("header", {
            className: "ShaderPackInformationHeader",
            children: [(0, nU.jsx)("h1", {
              className: "FullyFancyText",
              children: bU.name
            }), YU]
          }), bU.live && (0, nU.jsx)(dU, {
            item: bU.live
          }), bU.live && (0, nU.jsx)(NU, {
            item: bU.live,
            ownerPreview: bU.ownerPreview,
            bloxdhubSlug: bU.bloxdhubSlug,
            actions: YU
          }), bU.owner && (0, nU.jsx)(oU, {
            details: bU,
            owner: bU.owner,
            onChanged: JU
          })]
        })]
      })
    }

    function LU(UU) {
      let {
        item: RU,
        favourites: gU,
        packUse: tU
      } = UU;
      const pU = gU.isFavourite(RU.packId);
      return (0, nU.jsxs)("div", {
        className: "ShaderPackInformationActions",
        children: [eU.featureFlags.settings.canUseShaderPacks && (0, nU.jsx)(MU, {
          packUse: tU
        }), (0, nU.jsx)(cU.s, {
          className: "ShaderPackInformationLike",
          onClick: () => {
            gU.toggle(RU.packId)
          },
          isLiked: !0 === pU,
          isLoading: null === pU
        })]
      })
    }

    function NU(UU) {
      let {
        item: RU,
        ownerPreview: gU,
        bloxdhubSlug: tU,
        actions: pU
      } = UU;
      const {
        t: TU
      } = (0, WU.B)(), qU = (0, uU.t)(), cU = null === tU ? null : (0, EU.h)(tU);
      return (0, nU.jsxs)("div", {
        className: "ShaderPackFacts",
        children: [RU.description && (0, nU.jsx)("p", {
          className: "ShaderPackDescription",
          children: RU.description
        }), (0, nU.jsxs)("div", {
          className: "ShaderPackFeatureList",
          children: [(null !== gU || null !== cU) && (0, nU.jsx)("div", {
            className: "ShaderPackAuthor",
            children: null !== gU ? (0, nU.jsxs)(nU.Fragment, {
              children: [(0, nU.jsx)(jU.d, {
                playerSocialPreview: gU,
                showLocation: !1,
                linkToProfile: !0
              }), null !== cU && (0, nU.jsx)("a", {
                className: "ShaderPackBloxdhubLogo",
                href: cU,
                target: "_blank",
                rel: "noopener noreferrer",
                children: (0, nU.jsx)("img", {
                  src: fU,
                  alt: EU.e
                })
              })]
            }) : (0, nU.jsxs)("a", {
              className: "ShaderPackBloxdhubName",
              href: cU,
              target: "_blank",
              rel: "noopener noreferrer",
              children: [EU.e, (0, nU.jsx)("img", {
                src: fU,
                alt: ""
              })]
            })
          }), wU.t.filter((UU => RU.features.includes(UU))).map((UU => (0, nU.jsx)(KU.LinkPreserveSearch, {
            className: "ShaderPackFeature",
            to: (0, wU.E)(UU),
            children: TU(wU.H[UU])
          }, UU)))]
        }), pU, (0, nU.jsxs)("dl", {
          className: "ShaderPackFactList",
          children: [(0, nU.jsxs)("div", {
            children: [(0, nU.jsx)("dt", {
              children: TU("shaderPackListing:downloads")
            }), (0, nU.jsx)("dd", {
              children: (0, PU.R)(RU.downloads)
            })]
          }), (0, nU.jsx)(lU, {
            label: TU("shaderPackListing:updated"),
            time: RU.listedUpdatedAt,
            now: qU
          }), (0, nU.jsx)(lU, {
            label: TU("shaderPackListing:created"),
            time: RU.publishedAt,
            now: qU
          }), null !== RU.gpuCost && (0, nU.jsxs)("div", {
            children: [(0, nU.jsx)("dt", {
              children: TU("shaderPackListing:lag")
            }), (0, nU.jsx)("dd", {
              children: TU("shaderPackListing:lagPercent", {
                percent: String((0, wU.O)(RU.gpuCost))
              })
            })]
          }), (0, nU.jsxs)("div", {
            children: [(0, nU.jsx)("dt", {
              children: TU("shaderPackListing:size")
            }), (0, nU.jsx)("dd", {
              children: TU("shaderPackListing:sizeValue", {
                kilobytes: String((0, wU.L)(RU.sourceBytes))
              })
            })]
          }), (0, nU.jsxs)("div", {
            children: [(0, nU.jsx)("dt", {
              children: TU("shaderPackListing:files")
            }), (0, nU.jsx)("dd", {
              children: RU.fileCount
            })]
          })]
        })]
      })
    }

    function lU(UU) {
      let {
        label: RU,
        time: gU,
        now: tU
      } = UU;
      const {
        t: pU,
        selectedLanguage: EU
      } = (0, WU.B)(), PU = new Date(gU);
      let qU = PU.toLocaleDateString();
      if (tU - gU <= 30 * TU.f) {
        const UU = (0, WU.n)(EU.code, "shaderPackListing:timeAgo");
        qU = pU("shaderPackListing:timeAgo", {
          time: (0, TU.kb)(UU, gU, tU)
        })
      }
      return (0, nU.jsx)(GU.g, {
        tooltipInner: PU.toLocaleString(),
        children: (0, nU.jsxs)("div", {
          children: [(0, nU.jsx)("dt", {
            children: RU
          }), (0, nU.jsx)("dd", {
            children: qU
          })]
        })
      })
    }
  },
  4693: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => PU
    });
    var tU = gU(1037),
      pU = gU.n(tU),
      EU = gU(1090);

    function PU(UU) {
      let {
        options: RU,
        value: gU,
        onChange: tU,
        ariaLabel: PU,
        className: TU,
        reselectable: qU = !1,
        keepsFocus: KU = !1
      } = UU;
      return (0, EU.jsx)("div", {
        className: pU()("SegmentedToggle", TU),
        role: "group",
        "aria-label": PU,
        children: RU.map((UU => {
          const RU = UU.value === gU;
          return (0, EU.jsx)("button", {
            type: "button",
            "aria-pressed": RU,
            "aria-label": UU.ariaLabel,
            title: UU.ariaLabel,
            className: pU()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: RU
            }),
            onMouseDown: KU ? UU => {
              UU.preventDefault()
            } : void 0,
            onClick: () => {
              RU && !qU || tU(UU.value)
            },
            children: UU.label
          }, UU.value)
        }))
      })
    }
  },
  4701: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => EU,
      e: () => PU
    });
    var tU = gU(56);
    const pU = new WeakMap,
      EU = UU => {
        var RU;
        const gU = UU.closest("[data-pad-slider]");
        return gU && null !== (RU = pU.get(gU)) && void 0 !== RU ? RU : null
      },
      PU = (UU, RU) => {
        const gU = (0, tU.useRef)(RU);
        gU.current = RU, (0, tU.useEffect)((() => {
          if (UU.current) return ((UU, RU) => (pU.set(UU, RU), () => {
            pU.get(UU) === RU && pU.delete(UU)
          }))(UU.current, {
            adjust: UU => {
              gU.current.adjust(UU)
            },
            setFraction: UU => {
              gU.current.setFraction(UU)
            },
            endDrag: () => {
              gU.current.endDrag()
            }
          })
        }), [UU])
      }
  },
  6339: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => pU,
      e: () => EU
    });
    var tU = gU(34);
    const pU = "shaderPack";
    async function EU() {
      var UU;
      let RU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (UU = await tU.g.getItem(pU, RU)) && void 0 !== UU ? UU : null
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);