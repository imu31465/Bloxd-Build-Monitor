export const id = 125;
export const ids = [125];
export const modules = {
  5500: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => kV,
      i: () => tV,
      m: () => bV,
      q: () => qV
    });
    var JV = xV(62),
      YV = xV(5508),
      UV = xV(4795),
      yV = xV(1446),
      pV = xV(5529),
      QV = xV(1146),
      nV = xV.n(QV),
      wV = xV(1439),
      ZV = xV(1838),
      vV = xV(5536),
      rV = xV(1321);

    function kV(VV) {
      let {
        label: eV,
        onClick: xV,
        checked: JV,
        circleInfoText: YV,
        className: pV,
        disabled: QV,
        note: wV
      } = VV;
      return (0, rV.jsxs)("div", {
        "aria-disabled": QV || void 0,
        "data-pad-focusable": !0,
        className: nV()("SettingBox CheckboxContainer", {
          [pV]: pV,
          SettingBoxDisabled: QV
        }),
        onClick: () => {
          QV || xV(!JV)
        },
        children: [(0, rV.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, rV.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, rV.jsx)(UV.b, {
              className: "SettingsCheckbox",
              checked: JV,
              disabled: QV,
              onChange: () => {}
            })
          }), (0, rV.jsxs)("div", {
            className: "CheckboxText",
            children: [eV, YV && (0, rV.jsx)("span", {
              onClick: VV => VV.stopPropagation(),
              children: (0, rV.jsx)(yV.c, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: YV
              })
            })]
          })]
        }), wV && (0, rV.jsx)("div", {
          className: "SettingNote",
          children: wV
        })]
      })
    }

    function bV(VV) {
      let {
        name: eV,
        onChange: xV,
        min: YV,
        max: UV,
        step: pV,
        initValue: QV,
        circleInfoText: wV,
        format: ZV,
        className: vV,
        padStep: kV,
        disabled: bV = !1,
        selectableMax: EV,
        cappedNote: BV,
        onChangeComplete: qV
      } = VV;
      const [tV, FV] = (0, JV.useState)(QV), TV = (0, JV.useRef)(QV);
      (0, JV.useEffect)((() => {
        TV.current = QV, FV(QV)
      }), [QV]);
      const PV = void 0 !== EV && EV < UV,
        AV = PV ? {
          "--slider-selectable": (EV - YV) / (UV - YV)
        } : void 0;
      return (0, rV.jsxs)("div", {
        className: nV()("SettingBox SettingsSliderDiv", {
          [vV]: vV,
          SettingBoxDisabled: bV,
          SliderCapped: PV
        }),
        style: AV,
        children: [(0, rV.jsxs)("div", {
          className: "SliderText",
          children: [`${eV}: ${ZV?ZV(tV):tV}`, wV && (0, rV.jsx)(yV.c, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: wV
          })]
        }), (0, rV.jsx)("div", {
          className: "SliderDiv",
          children: (0, rV.jsx)(jV, {
            value: tV,
            min: YV,
            max: UV,
            step: pV,
            onChange: VV => {
              if (PV && VV >= EV && tV === EV) return;
              const eV = PV ? Math.min(VV, EV) : VV;
              TV.current = eV, FV(eV), xV(eV)
            },
            onChangeComplete: qV && (() => {
              qV(TV.current)
            }),
            format: ZV,
            padStep: kV,
            disabled: bV
          })
        }), PV && BV && (0, rV.jsx)("div", {
          className: "SettingNote",
          children: BV
        })]
      })
    }
    const EV = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function BV(VV) {
      var eV;
      return (null !== (eV = String(VV).split(".")[1]) && void 0 !== eV ? eV : "").length
    }

    function jV(VV) {
      let {
        value: eV,
        min: xV,
        max: UV,
        step: yV,
        onChange: pV,
        orientation: QV,
        reverse: nV,
        setIsChanging: wV,
        tooltip: ZV,
        labels: kV,
        handleLabel: bV,
        format: jV,
        onChangeStart: qV,
        onChangeComplete: tV,
        padStep: FV,
        disabled: TV = !1
      } = VV;
      const PV = (0, JV.useRef)(null),
        AV = (0, JV.useRef)(null);
      (0, JV.useLayoutEffect)((() => {
        var VV, eV, xV;
        const JV = null !== (VV = null === (eV = PV.current) || void 0 === eV ? void 0 : eV.querySelector(".rangeslider")) && void 0 !== VV ? VV : null;
        null === JV || void 0 === JV || JV.setAttribute("data-pad-slider", ""), null === JV || void 0 === JV || JV.setAttribute("data-pad-focusable", ""), null === JV || void 0 === JV || null === (xV = JV.querySelector(".rangeslider__handle")) || void 0 === xV || xV.setAttribute("data-pad-slider-handle", ""), AV.current = JV
      }), []), (0, JV.useLayoutEffect)((() => {
        var VV, eV;
        TV ? null === (VV = AV.current) || void 0 === VV || VV.setAttribute("aria-disabled", "true") : null === (eV = AV.current) || void 0 === eV || eV.removeAttribute("aria-disabled")
      }), [TV]);
      const NV = Math.max(BV(yV), BV(xV)),
        XV = VV => {
          if (VV >= UV) return UV;
          if (VV <= xV) return xV;
          const eV = Number((Math.round((VV - xV) / yV) * yV + xV).toFixed(NV));
          return Math.min(UV, Math.max(xV, eV))
        },
        MV = (0, JV.useRef)(tV);
      MV.current = tV, (0, JV.useEffect)((() => {
        const VV = PV.current;
        if (!VV) return;
        const eV = VV => {
          var eV;
          EV.has(VV.key) && (null === (eV = MV.current) || void 0 === eV || eV.call(MV))
        };
        return VV.addEventListener("keyup", eV), () => {
          VV.removeEventListener("keyup", eV)
        }
      }), []);
      const zV = (0, JV.useRef)(!1);
      return (0, vV.h)(AV, {
        adjust: VV => {
          if (TV) return;
          const JV = null !== FV && void 0 !== FV ? FV : Math.max(yV, Math.round((UV - xV) / 20 / yV) * yV),
            YV = XV(eV + VV * JV * (nV ? -1 : 1));
          YV !== eV && (null === qV || void 0 === qV || qV(), pV(YV), null === tV || void 0 === tV || tV())
        },
        setFraction: VV => {
          if (TV) return;
          const JV = XV(xV + (nV ? 1 - VV : VV) * (UV - xV));
          JV !== eV && (zV.current || (zV.current = !0, null === qV || void 0 === qV || qV()), pV(JV))
        },
        endDrag: () => {
          zV.current && (zV.current = !1, null === tV || void 0 === tV || tV())
        }
      }), (0, rV.jsx)("div", {
        ref: PV,
        style: {
          display: "contents"
        },
        children: (0, rV.jsx)(YV.e, {
          value: eV,
          min: xV,
          max: UV,
          step: yV,
          onChange: VV => {
            pV(XV(VV))
          },
          orientation: QV,
          reverse: nV,
          tooltip: ZV,
          labels: kV,
          handleLabel: bV,
          format: jV,
          onChangeStart: () => {
            null === qV || void 0 === qV || qV(), null === wV || void 0 === wV || wV(!0)
          },
          onChangeComplete: () => {
            null === wV || void 0 === wV || wV(!1), null === tV || void 0 === tV || tV()
          }
        })
      })
    }
    async function qV() {
      const VV = wV.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await VV.getResult() && (0, ZV.reloadBloxd)()
    }

    function tV(VV) {
      let {
        label: eV,
        options: xV,
        value: JV,
        onChange: YV,
        circleInfoText: UV
      } = VV;
      return (0, rV.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, rV.jsxs)("div", {
          className: "SliderText",
          children: [eV, UV && (0, rV.jsx)(yV.c, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: UV
          })]
        }), (0, rV.jsx)(pV.b, {
          ariaLabel: eV,
          options: xV,
          value: JV,
          onChange: YV
        })]
      })
    }
  },
  7219: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      default: () => IV
    });
    var JV = xV(62),
      YV = xV(1625),
      UV = xV(7132),
      yV = xV(1252),
      pV = xV(375),
      QV = xV(1643),
      nV = xV(1408),
      wV = xV(1612),
      ZV = xV(1551),
      vV = xV(1446),
      rV = xV(1708),
      kV = xV(2903),
      bV = xV(3013),
      EV = xV(5031),
      BV = xV(1168),
      jV = xV(1603),
      qV = xV(99),
      tV = xV(1220);
    const FV = xV.p + "static/media/bloxdhubLogo.6a6c367af2ad6e6f1eb3.webp";
    var TV = xV(1146),
      PV = xV.n(TV),
      AV = xV(1414),
      NV = xV(1439),
      XV = xV(7130),
      MV = xV(1321);
    const zV = (0, JV.lazy)((() => Promise.all([xV.e(121), xV.e(89), xV.e(149), xV.e(148), xV.e(126), xV.e(706)]).then((() => xV(7164))).then((VV => ({
      default: VV.ShaderPackPublishForm
    })))));

    function GV(VV) {
      let {
        details: eV,
        owner: xV,
        onChanged: YV
      } = VV;
      const {
        t: yV
      } = (0, tV.A)(), pV = (0, wV.useNavigatePreserveSearch)(), {
        userContext: QV
      } = (0, BV.d)(), [vV, rV] = (0, JV.useState)(!1), [kV, bV] = (0, JV.useState)(null), [EV, qV] = (0, JV.useState)(!1), {
        packId: FV,
        name: TV,
        description: GV,
        live: WV
      } = eV;
      async function RV(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : YV;
        rV(!0), bV(null);
        try {
          await VV(), eV()
        } catch (xV) {
          console.error("Failed to change a shader pack", xV), bV((0, XV.x)(xV, yV, "shaderPackListing:ownerActionFailed"))
        } finally {
          rV(!1)
        }
      }
      const gV = (0, XV.r)(QV);
      return (0, MV.jsxs)("section", {
        className: "ShaderPackOwnerPanel",
        children: [(0, MV.jsx)("h2", {
          className: "ShaderPackSectionTitle",
          children: yV("general:manage")
        }), (0, XV.$)(xV, !(null === WV || void 0 === WV || !WV.renderId), Date.now(), yV).map((VV => (0, MV.jsxs)("div", {
          className: PV()("ShaderPackOwnerNotice", {
            Warning: "warning" === VV.tone
          }),
          children: [(0, MV.jsx)(AV.b, {
            name: "warning" === VV.tone ? "triangle-exclamation" : "circle-info"
          }), (0, MV.jsxs)("div", {
            children: [VV.text, VV.detail && (0, MV.jsx)("pre", {
              className: "ShaderPackOwnerNoticeDetail",
              children: VV.detail
            })]
          })]
        }, VV.text))), eV.ban && (0, MV.jsxs)("div", {
          className: "ShaderPackOwnerNotice Warning",
          children: [(0, MV.jsx)(AV.b, {
            name: "ban"
          }), (0, MV.jsxs)("div", {
            children: ["Banned by ", eV.ban.byName, " on ", new Date(eV.ban.at).toLocaleString()]
          })]
        }), kV && (0, MV.jsx)("div", {
          className: "ShaderPackOwnerError",
          children: kV
        }), (0, MV.jsxs)("div", {
          className: "ShaderPackOwnerActions",
          children: [(0, MV.jsxs)(ZV.M, {
            disabled: vV,
            onClick: () => {
              !async function() {
                const VV = await NV.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:renameTitle",
                  initialValue: TV,
                  maxLength: UV.D,
                  submitText: "general:save",
                  validate: VV => VV.trim().length < UV.H ? yV("shaderPackListing:nameTooShort", {
                    min: String(UV.H)
                  }) : null
                }).getResult();
                "notificationTornDown" !== VV && "submit" === (null === VV || void 0 === VV ? void 0 : VV.type) && VV.value.trim() !== TV && await RV((() => jV.b.updateShaderPack(QV, {
                  packId: FV,
                  name: VV.value.trim()
                })))
              }()
            },
            children: [(0, MV.jsx)(AV.b, {
              name: "pen"
            }), " ", yV("shaderPackListing:rename")]
          }), (0, MV.jsxs)(ZV.M, {
            disabled: vV,
            onClick: () => {
              !async function() {
                const VV = await NV.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:editDescription",
                  initialValue: GV,
                  maxLength: UV.s,
                  multiline: !0,
                  allowEmptySubmit: !0,
                  submitText: "general:save"
                }).getResult();
                "notificationTornDown" !== VV && "submit" === (null === VV || void 0 === VV ? void 0 : VV.type) && VV.value.trim() !== GV && await RV((() => jV.b.updateShaderPack(QV, {
                  packId: FV,
                  description: VV.value.trim()
                })))
              }()
            },
            children: [(0, MV.jsx)(AV.b, {
              name: "file-lines"
            }), " ", yV("shaderPackListing:editDescription")]
          }), (0, MV.jsxs)(ZV.M, {
            disabled: vV || xV.isBanned && !xV.listed,
            onClick: () => {
              RV((() => jV.b.updateShaderPack(QV, {
                packId: FV,
                listed: !xV.listed
              })))
            },
            children: [(0, MV.jsx)(AV.b, {
              name: xV.listed ? "eye-slash" : "eye"
            }), " ", yV(xV.listed ? "shaderPackListing:unlist" : "shaderPackListing:relist")]
          }), !xV.isBanned && (0, MV.jsxs)(ZV.f, {
            disabled: vV,
            onClick: () => {
              qV(!EV)
            },
            children: [(0, MV.jsx)(AV.b, {
              name: "upload"
            }), " ", yV("shaderPackListing:uploadVersion")]
          }), (0, MV.jsxs)(ZV.G, {
            disabled: vV || xV.isBanned,
            onClick: () => {
              !async function() {
                !0 === await NV.NotificationProvider.showPromptPopup({
                  title: "shaderPackListing:deleteTitle",
                  subtitle: "shaderPackListing:deleteSubtitle",
                  confirmText: "general:delete",
                  cancelText: "general:cancel",
                  destructive: !0
                }).getResult() && await RV((() => jV.b.deleteShaderPack(QV, FV)), (() => {
                  pV(`${XV.Y}?section=mine`, {
                    replace: !0
                  })
                }))
              }()
            },
            children: [(0, MV.jsx)(AV.b, {
              name: "trash-can"
            }), " ", yV("general:delete")]
          }), gV && (0, MV.jsxs)(ZV.G, {
            disabled: vV,
            onClick: () => {
              RV((() => jV.b.setShaderPackBanned(QV, FV, !xV.isBanned)))
            },
            children: [(0, MV.jsx)(AV.b, {
              name: xV.isBanned ? "circle-check" : "ban"
            }), " ", xV.isBanned ? "Unban" : "Ban"]
          })]
        }), EV && (0, MV.jsx)(JV.Suspense, {
          fallback: (0, MV.jsx)(nV.d, {}),
          children: (0, MV.jsx)(zV, {
            existing: {
              packId: FV,
              name: TV,
              description: GV
            },
            onPublished: () => {
              qV(!1), YV()
            }
          })
        })]
      })
    }
    var WV = xV(78),
      RV = xV(2014),
      gV = xV(1309),
      DV = xV(5536),
      iV = xV(1230),
      CV = xV(7141),
      aV = xV(7135),
      oV = xV(7154);

    function cV(VV) {
      let {
        item: eV
      } = VV;
      const {
        t: xV
      } = (0, tV.A)(), [YV] = (0, CV.j)(), [yV, pV] = (0, JV.useState)(YV), [QV, nV] = (0, JV.useState)(!1), [wV, ZV] = (0, JV.useState)(!1), {
        s3Url: vV
      } = iV.clientSideServerUrls, {
        width: rV,
        height: kV
      } = UV.w.large, bV = (0, UV.x)(vV, eV, yV, "large"), {
        renderVersion: EV
      } = eV;
      return (0, MV.jsxs)("div", {
        className: "ShaderPackPreviews",
        children: [(0, MV.jsx)(oV.d, {
          selected: yV,
          onSelect: VV => {
            pV(VV), nV(!1)
          },
          imageUrl: VV => (0, UV.x)(vV, eV, VV, "thumb")
        }), (0, MV.jsxs)("div", {
          className: "ShaderPackPreviewStage",
          children: [!QV && (0, MV.jsxs)("button", {
            type: "button",
            className: "ShaderPackPreviewMain",
            title: null === EV ? void 0 : xV("shaderPackListing:fullSize"),
            disabled: null === EV,
            onClick: () => {
              ZV(!0)
            },
            children: [(0, MV.jsx)("img", {
              src: bV,
              width: rV,
              height: kV,
              alt: xV(XV.mb[yV]),
              draggable: !1
            }), (0, MV.jsx)(aV.e, {
              item: eV
            })]
          }), !QV && null !== EV && (0, MV.jsxs)(fV, {
            side: "Right",
            onClick: () => {
              nV(!0)
            },
            children: [(0, MV.jsx)(AV.b, {
              name: "arrows-left-right"
            }), " ", xV("shaderPackListing:compare")]
          }), QV && null !== EV && (0, MV.jsx)(LV, {
            item: eV,
            packUrl: bV,
            baselineUrl: (0, UV.q)(vV, EV, yV, "large")
          }), QV && (0, MV.jsx)(fV, {
            side: "Left",
            onClick: () => {
              nV(!1)
            },
            children: xV("shaderPackListing:withPack")
          }), QV && (0, MV.jsx)(fV, {
            side: "Right",
            onClick: () => {
              nV(!1)
            },
            children: xV("shaderPackListing:withoutPack")
          })]
        }), wV && (0, MV.jsx)(hV, {
          fullUrl: (0, UV.x)(vV, eV, yV, "full"),
          largeUrl: bV,
          alt: xV(XV.mb[yV]),
          onClose: () => {
            ZV(!1)
          }
        })]
      })
    }

    function hV(VV) {
      let {
        fullUrl: eV,
        largeUrl: xV,
        alt: YV,
        onClose: UV
      } = VV;
      const yV = (0, JV.useRef)(null);
      return (0, gV.s)("popup", yV, UV), (0, JV.useEffect)((() => {
        function VV(VV) {
          "Escape" === VV.key && (VV.stopPropagation(), UV())
        }
        return window.addEventListener("keydown", VV, !0), () => {
          window.removeEventListener("keydown", VV, !0)
        }
      }), [UV]), (0, WV.createPortal)((0, MV.jsxs)("div", {
        ref: yV,
        className: "ShaderPackFullSize",
        onClick: UV,
        children: [(0, MV.jsx)("img", {
          className: "ShaderPackFullSizeImage",
          src: eV,
          alt: YV,
          draggable: !1,
          style: {
            backgroundImage: `url(${xV})`
          }
        }), (0, MV.jsx)(ZV.k, {
          className: "ShaderPackFullSizeClose",
          onClick: UV
        })]
      }), document.body)
    }
    const lV = 5;

    function LV(VV) {
      let {
        item: eV,
        packUrl: xV,
        baselineUrl: YV
      } = VV;
      const {
        t: yV
      } = (0, tV.A)(), [pV, QV] = (0, JV.useState)(50), nV = (0, JV.useRef)(!1), wV = (0, JV.useRef)(null), {
        width: ZV,
        height: vV
      } = UV.w.large;

      function rV(VV) {
        QV((eV => (0, RV.d)(eV + VV, 0, 100)))
      }

      function kV(VV) {
        const eV = VV.currentTarget.getBoundingClientRect();
        QV((0, RV.d)((VV.clientX - eV.left) / eV.width * 100, 0, 100))
      }
      return (0, DV.h)(wV, {
        adjust: VV => {
          rV(VV * lV)
        },
        setFraction: VV => {
          QV(100 * VV)
        },
        endDrag: () => {}
      }), (0, MV.jsxs)("div", {
        ref: wV,
        className: "ShaderPackCompare",
        "data-pad-slider": "",
        "data-pad-focusable": "",
        role: "slider",
        tabIndex: 0,
        "aria-label": yV("shaderPackListing:compare"),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(pV),
        style: {
          "--split": `${pV}%`
        },
        onKeyDown: function(VV) {
          const eV = "ArrowLeft" === VV.key ? -lV : "ArrowRight" === VV.key ? lV : 0;
          0 !== eV && (VV.preventDefault(), rV(eV))
        },
        onPointerDown: VV => {
          nV.current = !0, VV.currentTarget.setPointerCapture(VV.pointerId), kV(VV)
        },
        onPointerMove: VV => {
          nV.current && kV(VV)
        },
        onPointerUp: () => {
          nV.current = !1
        },
        onPointerCancel: () => {
          nV.current = !1
        },
        children: [(0, MV.jsx)("img", {
          className: "ShaderPackCompareBaseline",
          src: YV,
          width: ZV,
          height: vV,
          alt: "",
          draggable: !1,
          style: {
            backgroundImage: `url(${xV})`
          }
        }), (0, MV.jsx)("div", {
          className: "ShaderPackCompareLine"
        }), (0, MV.jsx)("img", {
          className: "ShaderPackComparePack",
          src: xV,
          width: ZV,
          height: vV,
          alt: "",
          draggable: !1
        }), (0, MV.jsx)(aV.e, {
          item: eV,
          className: "ShaderPackCompareNotice"
        })]
      })
    }

    function fV(VV) {
      let {
        side: eV,
        onClick: xV,
        children: JV
      } = VV;
      return (0, MV.jsx)("button", {
        type: "button",
        className: `ShaderPackStageButton ${eV}`,
        onClick: xV,
        children: (0, MV.jsx)("span", {
          className: "ShaderPackStageButtonFace SmallTextBold",
          children: JV
        })
      })
    }
    var mV = xV(5500),
      KV = xV(348),
      HV = xV(7216);
    const uV = {
      compiler: "shaderPack:compilerUnavailable",
      download: "shaderPackListing:useDownloadFailed",
      apiVersion: "shaderPackListing:useOtherApiVersion",
      invalid: "shaderPackListing:useInvalid",
      errors: "shaderPackListing:useFailsHere",
      save: "shaderPack:saveFailed"
    };

    function sV(VV) {
      const {
        userContext: eV
      } = (0, BV.d)(), [YV, UV] = (0, JV.useState)(null), [yV, pV] = (0, JV.useState)(!1), [QV, nV] = (0, JV.useState)(!1), [wV, ZV] = (0, JV.useState)(null), vV = null === VV || void 0 === VV ? void 0 : VV.packId, rV = null === VV || void 0 === VV ? void 0 : VV.sourceHash;
      return (0, JV.useEffect)((() => {
        if (pV(!1), ZV(null), void 0 === vV) return;
        let VV = !1;
        return Promise.all([(0, qV.hasUsableWebGpuAdapter)(), (0, HV.f)()]).then((eV => {
          let [xV, JV] = eV;
          var YV;
          VV || (UV(xV), pV((null === JV || void 0 === JV || null === (YV = JV.listing) || void 0 === YV ? void 0 : YV.packId) === vV && JV.listing.sourceHash === rV))
        })).catch((eV => {
          console.error("Failed to check whether this shader pack can be used", eV), VV || UV(!1)
        })), () => {
          VV = !0
        }
      }), [vV, rV]), {
        webGpuUsable: YV,
        inUse: yV,
        busy: QV,
        errorKey: wV,
        use: () => {
          null !== VV && async function(VV) {
            nV(!0), ZV(null);
            try {
              const {
                installListedShaderPack: JV
              } = await Promise.all([xV.e(89), xV.e(149), xV.e(127)]).then((() => xV(41773))), YV = await JV({
                packId: VV.packId,
                sourceHash: VV.sourceHash,
                name: VV.name,
                ownerName: VV.ownerName,
                description: VV.description
              });
              if ("failed" === YV.kind) return void ZV(uV[YV.reason]);
              pV(!0), jV.b.recordShaderPackDownload(eV, VV.packId).catch((VV => {
                console.error("Failed to count a shader pack's download", VV)
              })), (0, mV.q)()
            } catch (JV) {
              console.error("Failed to use the shader pack", JV), ZV("shaderPack:unexpectedError")
            } finally {
              nV(!1)
            }
          }(VV)
        }
      }
    }

    function SV(VV) {
      let {
        packUse: eV
      } = VV;
      const {
        t: xV
      } = (0, tV.A)(), {
        webGpuUsable: JV,
        inUse: YV,
        busy: UV,
        errorKey: yV,
        use: pV
      } = eV;
      return (0, MV.jsxs)("div", {
        className: "ShaderPackUse",
        children: [(0, MV.jsxs)(ZV.m, {
          disabled: !0 !== JV || YV,
          loading: UV,
          onClick: pV,
          children: [(0, MV.jsx)(AV.b, {
            name: YV ? "check" : "download"
          }), " ", xV(YV ? "shaderPackListing:inUse" : "shaderPackListing:use")]
        }), !1 === JV && (0, MV.jsx)("div", {
          className: "ShaderPackUseNote",
          children: xV((0, KV.l)() ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), yV && (0, MV.jsx)("div", {
          className: "ShaderPackUseNote Error",
          children: xV(yV)
        })]
      })
    }

    function IV() {
      var VV;
      const {
        t: eV
      } = (0, tV.A)(), xV = (0, wV.useNavigatePreserveSearch)(), {
        packId: UV
      } = (0, YV.A)(), {
        userContext: yV,
        isUserContextUpdating: pV
      } = (0, BV.d)(), [vV, kV] = (0, JV.useState)(null), [bV, qV] = (0, JV.useState)(null), [FV, TV] = (0, JV.useState)(0), PV = (0, JV.useRef)(0);

      function AV() {
        var VV;
        null !== (VV = (0, wV.getPreviousLocation)()) && void 0 !== VV && VV.startsWith(XV.Y) ? xV(-1) : xV(XV.Y)
      }(0, EV.d)(AV), (0, CV.e)(), (0, JV.useEffect)((() => {
        if (pV || void 0 === UV) return;
        const VV = ++PV.current;
        qV(null), jV.b.getShaderPack(yV, UV).then((eV => {
          PV.current === VV && kV(eV)
        })).catch((eV => {
          PV.current === VV && (console.error("Failed to get the shader pack", eV), kV(null), qV({
            error: eV
          }))
        }))
      }), [UV, yV, pV, FV]);
      const NV = () => {
          TV((VV => VV + 1))
        },
        zV = (null === vV || void 0 === vV ? void 0 : vV.packId) === UV ? vV : null,
        WV = (0, CV.n)(),
        RV = sV(null !== (VV = null === zV || void 0 === zV ? void 0 : zV.live) && void 0 !== VV ? VV : null),
        gV = null !== zV && void 0 !== zV && zV.live ? (0, MV.jsx)(dV, {
          item: zV.live,
          favourites: WV,
          packUse: RV
        }) : null;
      return (0, MV.jsxs)("article", {
        className: "ShaderPackInformation AnimFadeIn",
        children: [null !== zV && (0, MV.jsx)(rV.c, {
          meta: (0, QV.U)(zV.name)
        }), (0, MV.jsx)(ZV.b, {
          onClick: AV,
          children: eV("shaderPackListing:backToPacks")
        }), null === zV && null === bV && (0, MV.jsx)("div", {
          className: "ShaderPackInformationMessage",
          children: (0, MV.jsx)(nV.d, {})
        }), null !== bV && (0, MV.jsxs)("div", {
          className: "ShaderPackInformationMessage",
          children: [(0, XV.x)(bV.error, eV, "shaderPackListing:loadPackFailed"), (0, MV.jsx)(ZV.f, {
            onClick: NV,
            children: eV("general:tryAgain")
          })]
        }), null !== zV && null === bV && (0, MV.jsxs)("div", {
          className: "ShaderPackInformationBody",
          children: [(0, MV.jsxs)("header", {
            className: "ShaderPackInformationHeader",
            children: [(0, MV.jsx)("h1", {
              className: "FullyFancyText",
              children: zV.name
            }), gV]
          }), zV.live && (0, MV.jsx)(cV, {
            item: zV.live
          }), zV.live && (0, MV.jsx)(OV, {
            item: zV.live,
            ownerPreview: zV.ownerPreview,
            bloxdhubSlug: zV.bloxdhubSlug,
            actions: gV
          }), zV.owner && (0, MV.jsx)(GV, {
            details: zV,
            owner: zV.owner,
            onChanged: NV
          })]
        })]
      })
    }

    function dV(VV) {
      let {
        item: eV,
        favourites: xV,
        packUse: JV
      } = VV;
      const YV = xV.isFavourite(eV.packId);
      return (0, MV.jsxs)("div", {
        className: "ShaderPackInformationActions",
        children: [qV.featureFlags.settings.canUseShaderPacks && (0, MV.jsx)(SV, {
          packUse: JV
        }), (0, MV.jsx)(ZV.s, {
          className: "ShaderPackInformationLike",
          onClick: () => {
            xV.toggle(eV.packId)
          },
          isLiked: !0 === YV,
          isLoading: null === YV
        })]
      })
    }

    function OV(VV) {
      let {
        item: eV,
        ownerPreview: xV,
        bloxdhubSlug: JV,
        actions: YV
      } = VV;
      const {
        t: pV
      } = (0, tV.A)(), QV = (0, bV.s)(), nV = null === JV ? null : (0, UV.g)(JV);
      return (0, MV.jsxs)("div", {
        className: "ShaderPackFacts",
        children: [eV.description && (0, MV.jsx)("p", {
          className: "ShaderPackDescription",
          children: eV.description
        }), (0, MV.jsxs)("div", {
          className: "ShaderPackFeatureList",
          children: [(null !== xV || null !== nV) && (0, MV.jsx)("div", {
            className: "ShaderPackAuthor",
            children: null !== xV ? (0, MV.jsxs)(MV.Fragment, {
              children: [(0, MV.jsx)(kV.f, {
                playerSocialPreview: xV,
                showLocation: !1,
                linkToProfile: !0
              }), null !== nV && (0, MV.jsx)("a", {
                className: "ShaderPackBloxdhubLogo",
                href: nV,
                target: "_blank",
                rel: "noopener noreferrer",
                children: (0, MV.jsx)("img", {
                  src: FV,
                  alt: UV.d
                })
              })]
            }) : (0, MV.jsxs)("a", {
              className: "ShaderPackBloxdhubName",
              href: nV,
              target: "_blank",
              rel: "noopener noreferrer",
              children: [UV.d, (0, MV.jsx)("img", {
                src: FV,
                alt: ""
              })]
            })
          }), XV.A.filter((VV => eV.features.includes(VV))).map((VV => (0, MV.jsx)(wV.LinkPreserveSearch, {
            className: "ShaderPackFeature",
            to: (0, XV.O)(VV),
            children: pV(XV.Q[VV])
          }, VV)))]
        }), YV, (0, MV.jsxs)("dl", {
          className: "ShaderPackFactList",
          children: [(0, MV.jsxs)("div", {
            children: [(0, MV.jsx)("dt", {
              children: pV("shaderPackListing:downloads")
            }), (0, MV.jsx)("dd", {
              children: (0, yV.N)(eV.downloads)
            })]
          }), (0, MV.jsx)(Ve, {
            label: pV("shaderPackListing:updated"),
            time: eV.listedUpdatedAt,
            now: QV
          }), (0, MV.jsx)(Ve, {
            label: pV("shaderPackListing:created"),
            time: eV.publishedAt,
            now: QV
          }), null !== eV.gpuCost && (0, MV.jsxs)("div", {
            children: [(0, MV.jsx)("dt", {
              children: pV("shaderPackListing:lag")
            }), (0, MV.jsx)("dd", {
              children: pV("shaderPackListing:lagPercent", {
                percent: String((0, XV.V)(eV.gpuCost))
              })
            })]
          }), (0, MV.jsxs)("div", {
            children: [(0, MV.jsx)("dt", {
              children: pV("shaderPackListing:size")
            }), (0, MV.jsx)("dd", {
              children: pV("shaderPackListing:sizeValue", {
                kilobytes: String((0, XV.T)(eV.sourceBytes))
              })
            })]
          }), (0, MV.jsxs)("div", {
            children: [(0, MV.jsx)("dt", {
              children: pV("shaderPackListing:files")
            }), (0, MV.jsx)("dd", {
              children: eV.fileCount
            })]
          })]
        })]
      })
    }

    function Ve(VV) {
      let {
        label: eV,
        time: xV,
        now: JV
      } = VV;
      const {
        t: YV,
        selectedLanguage: UV
      } = (0, tV.A)(), yV = new Date(xV);
      let QV = yV.toLocaleDateString();
      if (JV - xV <= 30 * pV.e) {
        const VV = (0, tV.m)(UV.code, "shaderPackListing:timeAgo");
        QV = YV("shaderPackListing:timeAgo", {
          time: (0, pV.bb)(VV, xV, JV)
        })
      }
      return (0, MV.jsx)(vV.d, {
        tooltipInner: yV.toLocaleString(),
        children: (0, MV.jsxs)("div", {
          children: [(0, MV.jsx)("dt", {
            children: eV
          }), (0, MV.jsx)("dd", {
            children: QV
          })]
        })
      })
    }
  },
  5529: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => yV
    });
    var JV = xV(1146),
      YV = xV.n(JV),
      UV = xV(1321);

    function yV(VV) {
      let {
        options: eV,
        value: xV,
        onChange: JV,
        ariaLabel: yV,
        className: pV,
        reselectable: QV = !1,
        keepsFocus: nV = !1,
        padTabs: wV
      } = VV;
      const ZV = void 0 !== wV;
      return (0, UV.jsx)("div", {
        className: YV()("SegmentedToggle", pV),
        role: "group",
        "aria-label": yV,
        "data-pad-tabs": wV,
        children: eV.map((VV => {
          const eV = VV.value === xV;
          return (0, UV.jsx)("button", {
            type: "button",
            "aria-pressed": eV,
            "data-pad-tab": ZV || void 0,
            "data-pad-selected": ZV && eV ? "true" : void 0,
            "data-pad-default-focus": ZV && eV || void 0,
            "aria-label": VV.ariaLabel,
            title: VV.ariaLabel,
            className: YV()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: eV
            }),
            onMouseDown: nV ? VV => {
              VV.preventDefault()
            } : void 0,
            onClick: () => {
              eV && !QV || JV(VV.value)
            },
            children: VV.label
          }, VV.value)
        }))
      })
    }
  },
  5536: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => UV,
      h: () => yV
    });
    var JV = xV(62);
    const YV = new WeakMap,
      UV = VV => {
        var eV;
        const xV = VV.closest("[data-pad-slider]");
        return xV && null !== (eV = YV.get(xV)) && void 0 !== eV ? eV : null
      },
      yV = (VV, eV) => {
        const xV = (0, JV.useRef)(eV);
        xV.current = eV, (0, JV.useEffect)((() => {
          if (VV.current) return ((VV, eV) => (YV.set(VV, eV), () => {
            YV.get(VV) === eV && YV.delete(VV)
          }))(VV.current, {
            adjust: VV => {
              xV.current.adjust(VV)
            },
            setFraction: VV => {
              xV.current.setFraction(VV)
            },
            endDrag: () => {
              xV.current.endDrag()
            }
          })
        }), [VV])
      }
  },
  7216: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => YV,
      f: () => UV
    });
    var JV = xV(40);
    const YV = "shaderPack";
    async function UV() {
      var VV;
      let eV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (VV = await JV.i.getItem(YV, eV)) && void 0 !== VV ? VV : null
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);