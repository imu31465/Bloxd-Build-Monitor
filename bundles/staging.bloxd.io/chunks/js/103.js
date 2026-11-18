export const id = 103;
export const ids = [103];
export const modules = {
  4411: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => DB,
      g: () => vB,
      k: () => uB,
      n: () => EB
    });
    var VB = dB(62),
      yB = dB(4415),
      pB = dB(3821),
      lB = dB(1249),
      JB = dB(4438),
      YB = dB(933),
      gB = dB.n(YB),
      oB = dB(1235),
      kB = dB(1596),
      LB = dB(4447),
      OB = dB(980);

    function DB(BB) {
      let {
        label: TB,
        onClick: dB,
        checked: VB,
        circleInfoText: yB,
        className: JB,
        disabled: YB
      } = BB;
      return (0, OB.jsx)("div", {
        "aria-disabled": YB || void 0,
        "data-pad-focusable": !0,
        className: gB()("SettingBox CheckboxContainer", {
          [JB]: JB,
          SettingBoxDisabled: YB
        }),
        onClick: () => {
          YB || dB(!VB)
        },
        children: (0, OB.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, OB.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, OB.jsx)(pB.b, {
              className: "SettingsCheckbox",
              checked: VB,
              disabled: YB,
              onChange: () => {}
            })
          }), (0, OB.jsxs)("div", {
            className: "CheckboxText",
            children: [TB, yB && (0, OB.jsx)("span", {
              onClick: BB => BB.stopPropagation(),
              children: (0, OB.jsx)(lB.e, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: yB
              })
            })]
          })]
        })
      })
    }

    function uB(BB) {
      let {
        name: TB,
        onChange: dB,
        min: yB,
        max: pB,
        step: JB,
        initValue: YB,
        circleInfoText: oB,
        format: kB,
        className: LB,
        padStep: DB,
        disabled: uB = !1,
        selectableMax: EB,
        cappedNote: vB
      } = BB;
      const [mB, iB] = (0, VB.useState)(YB);
      (0, VB.useEffect)((() => {
        iB(YB)
      }), [YB]);
      const NB = void 0 !== EB && EB < pB,
        tB = NB ? {
          "--slider-selectable": (EB - yB) / (pB - yB)
        } : void 0;
      return (0, OB.jsxs)("div", {
        className: gB()("SettingBox SettingsSliderDiv", {
          [LB]: LB,
          SettingBoxDisabled: uB,
          SliderCapped: NB
        }),
        style: tB,
        children: [(0, OB.jsxs)("div", {
          className: "SliderText",
          children: [`${TB}: ${kB?kB(mB):mB}`, oB && (0, OB.jsx)(lB.e, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: oB
          })]
        }), (0, OB.jsx)("div", {
          className: "SliderDiv",
          children: (0, OB.jsx)(HB, {
            value: mB,
            min: yB,
            max: pB,
            step: JB,
            onChange: BB => {
              if (NB && BB >= EB && mB === EB) return;
              const TB = NB ? Math.min(BB, EB) : BB;
              iB(TB), dB(TB)
            },
            format: kB,
            padStep: DB,
            disabled: uB
          })
        }), NB && vB && (0, OB.jsx)("div", {
          className: "SliderNote",
          children: vB
        })]
      })
    }

    function HB(BB) {
      var TB;
      let {
        value: dB,
        min: pB,
        max: lB,
        step: JB,
        onChange: YB,
        orientation: gB,
        reverse: oB,
        setIsChanging: kB,
        tooltip: DB,
        labels: uB,
        handleLabel: HB,
        format: EB,
        onChangeStart: vB,
        onChangeComplete: mB,
        padStep: iB,
        disabled: NB = !1
      } = BB;
      const tB = (0, VB.useRef)(null),
        fB = (0, VB.useRef)(null);
      (0, VB.useLayoutEffect)((() => {
        var BB, TB, dB;
        const VB = null !== (BB = null === (TB = tB.current) || void 0 === TB ? void 0 : TB.querySelector(".rangeslider")) && void 0 !== BB ? BB : null;
        null === VB || void 0 === VB || VB.setAttribute("data-pad-slider", ""), null === VB || void 0 === VB || VB.setAttribute("data-pad-focusable", ""), null === VB || void 0 === VB || null === (dB = VB.querySelector(".rangeslider__handle")) || void 0 === dB || dB.setAttribute("data-pad-slider-handle", ""), fB.current = VB
      }), []), (0, VB.useLayoutEffect)((() => {
        var BB, TB;
        NB ? null === (BB = fB.current) || void 0 === BB || BB.setAttribute("aria-disabled", "true") : null === (TB = fB.current) || void 0 === TB || TB.removeAttribute("aria-disabled")
      }), [NB]);
      const sB = (null !== (TB = String(JB).split(".")[1]) && void 0 !== TB ? TB : "").length,
        MB = BB => {
          const TB = Number((Math.round((BB - pB) / JB) * JB + pB).toFixed(sB));
          return Math.min(lB, Math.max(pB, TB))
        },
        zB = (0, VB.useRef)(!1);
      return (0, LB.c)(fB, {
        adjust: BB => {
          if (NB) return;
          const TB = null !== iB && void 0 !== iB ? iB : Math.max(JB, Math.round((lB - pB) / 20 / JB) * JB),
            VB = MB(dB + BB * TB * (oB ? -1 : 1));
          VB !== dB && (null === vB || void 0 === vB || vB(), YB(VB), null === mB || void 0 === mB || mB())
        },
        setFraction: BB => {
          if (NB) return;
          const TB = MB(pB + (oB ? 1 - BB : BB) * (lB - pB));
          TB !== dB && (zB.current || (zB.current = !0, null === vB || void 0 === vB || vB()), YB(TB))
        },
        endDrag: () => {
          zB.current && (zB.current = !1, null === mB || void 0 === mB || mB())
        }
      }), (0, OB.jsx)("div", {
        ref: tB,
        style: {
          display: "contents"
        },
        children: (0, OB.jsx)(yB.b, {
          value: dB,
          min: pB,
          max: lB,
          step: JB,
          onChange: YB,
          orientation: gB,
          reverse: oB,
          tooltip: DB,
          labels: uB,
          handleLabel: HB,
          format: EB,
          onChangeStart: () => {
            null === vB || void 0 === vB || vB(), null === kB || void 0 === kB || kB(!0)
          },
          onChangeComplete: () => {
            null === kB || void 0 === kB || kB(!1), null === mB || void 0 === mB || mB()
          }
        })
      })
    }
    async function EB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      const TB = oB.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: "",
        unlockPointerKey: BB
      });
      !0 === await TB.getResult() && (0, kB.reloadBloxd)()
    }

    function vB(BB) {
      let {
        label: TB,
        options: dB,
        value: VB,
        onChange: yB,
        circleInfoText: pB
      } = BB;
      return (0, OB.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, OB.jsxs)("div", {
          className: "SliderText",
          children: [TB, pB && (0, OB.jsx)(lB.e, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: pB
          })]
        }), (0, OB.jsx)(JB.d, {
          ariaLabel: TB,
          options: dB,
          value: VB,
          onChange: yB
        })]
      })
    }
  },
  5996: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      default: () => jB
    });
    var VB = dB(62),
      yB = dB(1422),
      pB = dB(5898),
      lB = dB(1105),
      JB = dB(279),
      YB = dB(1225),
      gB = dB(1407),
      oB = dB(1324),
      kB = dB(1249),
      LB = dB(2208),
      OB = dB(2355),
      DB = dB(3962),
      uB = dB(1011),
      HB = dB(1393),
      EB = dB(95),
      vB = dB(1078);
    const mB = dB.p + "static/media/bloxdhubLogo.6a6c367af2ad6e6f1eb3.webp";
    var iB = dB(933),
      NB = dB.n(iB),
      tB = dB(946),
      fB = dB(1235),
      sB = dB(5891),
      MB = dB(980);
    const zB = (0, VB.lazy)((() => Promise.all([dB.e(99), dB.e(126), dB.e(124), dB.e(118), dB.e(117)]).then((() => dB(5921))).then((BB => ({
      default: BB.ShaderPackPublishForm
    })))));

    function wB(BB) {
      let {
        details: TB,
        owner: dB,
        onChanged: yB
      } = BB;
      const {
        t: lB
      } = (0, vB.z)(), JB = (0, gB.useNavigatePreserveSearch)(), {
        userContext: kB
      } = (0, uB.b)(), [LB, OB] = (0, VB.useState)(!1), [DB, EB] = (0, VB.useState)(null), [mB, iB] = (0, VB.useState)(!1), {
        packId: wB,
        name: UB,
        description: FB,
        live: KB
      } = TB;
      async function rB(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yB;
        OB(!0), EB(null);
        try {
          await BB(), TB()
        } catch (dB) {
          console.error("Failed to change a shader pack", dB), EB((0, sB.D)(dB, lB, "shaderPackListing:ownerActionFailed"))
        } finally {
          OB(!1)
        }
      }
      const IB = (0, sB.w)(kB);
      return (0, MB.jsxs)("section", {
        className: "ShaderPackOwnerPanel",
        children: [(0, MB.jsx)("h2", {
          className: "ShaderPackSectionTitle",
          children: lB("general:manage")
        }), (0, sB.V)(dB, !(null === KB || void 0 === KB || !KB.renderId), Date.now(), lB).map((BB => (0, MB.jsxs)("div", {
          className: NB()("ShaderPackOwnerNotice", {
            Warning: "warning" === BB.tone
          }),
          children: [(0, MB.jsx)(tB.e, {
            name: "warning" === BB.tone ? "triangle-exclamation" : "circle-info"
          }), (0, MB.jsxs)("div", {
            children: [BB.text, BB.detail && (0, MB.jsx)("pre", {
              className: "ShaderPackOwnerNoticeDetail",
              children: BB.detail
            })]
          })]
        }, BB.text))), TB.ban && (0, MB.jsxs)("div", {
          className: "ShaderPackOwnerNotice Warning",
          children: [(0, MB.jsx)(tB.e, {
            name: "ban"
          }), (0, MB.jsxs)("div", {
            children: ["Banned by ", TB.ban.byName, " on ", new Date(TB.ban.at).toLocaleString()]
          })]
        }), DB && (0, MB.jsx)("div", {
          className: "ShaderPackOwnerError",
          children: DB
        }), (0, MB.jsxs)("div", {
          className: "ShaderPackOwnerActions",
          children: [(0, MB.jsxs)(oB.T, {
            disabled: LB,
            onClick: () => {
              !async function() {
                const BB = await fB.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:renameTitle",
                  initialValue: UB,
                  maxLength: pB.w,
                  submitText: "general:save",
                  validate: BB => BB.trim().length < pB.A ? lB("shaderPackListing:nameTooShort", {
                    min: String(pB.A)
                  }) : null
                }).getResult();
                "notificationTornDown" !== BB && "submit" === (null === BB || void 0 === BB ? void 0 : BB.type) && BB.value.trim() !== UB && await rB((() => HB.c.updateShaderPack(kB, {
                  packId: wB,
                  name: BB.value.trim()
                })))
              }()
            },
            children: [(0, MB.jsx)(tB.e, {
              name: "pen"
            }), " ", lB("shaderPackListing:rename")]
          }), (0, MB.jsxs)(oB.T, {
            disabled: LB,
            onClick: () => {
              !async function() {
                const BB = await fB.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:editDescription",
                  initialValue: FB,
                  maxLength: pB.n,
                  multiline: !0,
                  allowEmptySubmit: !0,
                  submitText: "general:save"
                }).getResult();
                "notificationTornDown" !== BB && "submit" === (null === BB || void 0 === BB ? void 0 : BB.type) && BB.value.trim() !== FB && await rB((() => HB.c.updateShaderPack(kB, {
                  packId: wB,
                  description: BB.value.trim()
                })))
              }()
            },
            children: [(0, MB.jsx)(tB.e, {
              name: "file-lines"
            }), " ", lB("shaderPackListing:editDescription")]
          }), (0, MB.jsxs)(oB.T, {
            disabled: LB || dB.isBanned && !dB.listed,
            onClick: () => {
              rB((() => HB.c.updateShaderPack(kB, {
                packId: wB,
                listed: !dB.listed
              })))
            },
            children: [(0, MB.jsx)(tB.e, {
              name: dB.listed ? "eye-slash" : "eye"
            }), " ", lB(dB.listed ? "shaderPackListing:unlist" : "shaderPackListing:relist")]
          }), !dB.isBanned && (0, MB.jsxs)(oB.d, {
            disabled: LB,
            onClick: () => {
              iB(!mB)
            },
            children: [(0, MB.jsx)(tB.e, {
              name: "upload"
            }), " ", lB("shaderPackListing:uploadVersion")]
          }), (0, MB.jsxs)(oB.N, {
            disabled: LB || dB.isBanned,
            onClick: () => {
              !async function() {
                !0 === await fB.NotificationProvider.showPromptPopup({
                  title: "shaderPackListing:deleteTitle",
                  subtitle: "shaderPackListing:deleteSubtitle",
                  confirmText: "general:delete",
                  cancelText: "general:cancel",
                  destructive: !0
                }).getResult() && await rB((() => HB.c.deleteShaderPack(kB, wB)), (() => {
                  JB(`${sB.T}?section=mine`, {
                    replace: !0
                  })
                }))
              }()
            },
            children: [(0, MB.jsx)(tB.e, {
              name: "trash-can"
            }), " ", lB("general:delete")]
          }), IB && (0, MB.jsxs)(oB.N, {
            disabled: LB,
            onClick: () => {
              rB((() => HB.c.setShaderPackBanned(kB, wB, !dB.isBanned)))
            },
            children: [(0, MB.jsx)(tB.e, {
              name: dB.isBanned ? "circle-check" : "ban"
            }), " ", dB.isBanned ? "Unban" : "Ban"]
          })]
        }), mB && (0, MB.jsx)(VB.Suspense, {
          fallback: (0, MB.jsx)(YB.b, {}),
          children: (0, MB.jsx)(zB, {
            existing: {
              packId: wB,
              name: UB,
              description: FB
            },
            onPublished: () => {
              iB(!1), yB()
            }
          })
        })]
      })
    }
    var UB = dB(72),
      FB = dB(1652),
      KB = dB(1165),
      rB = dB(4447),
      IB = dB(1089),
      cB = dB(5906),
      SB = dB(5902),
      PB = dB(5915);

    function QB(BB) {
      let {
        item: TB
      } = BB;
      const {
        t: dB
      } = (0, vB.z)(), [yB] = (0, cB.i)(), [lB, JB] = (0, VB.useState)(yB), [YB, gB] = (0, VB.useState)(!1), [oB, kB] = (0, VB.useState)(!1), {
        s3Url: LB
      } = IB.clientSideServerUrls, {
        width: OB,
        height: DB
      } = pB.q.large, uB = (0, pB.r)(LB, TB, lB, "large"), {
        renderVersion: HB
      } = TB;
      return (0, MB.jsxs)("div", {
        className: "ShaderPackPreviews",
        children: [(0, MB.jsx)(PB.e, {
          selected: lB,
          onSelect: BB => {
            JB(BB), gB(!1)
          },
          imageUrl: BB => (0, pB.r)(LB, TB, BB, "thumb")
        }), (0, MB.jsxs)("div", {
          className: "ShaderPackPreviewStage",
          children: [!YB && (0, MB.jsxs)("button", {
            type: "button",
            className: "ShaderPackPreviewMain",
            title: null === HB ? void 0 : dB("shaderPackListing:fullSize"),
            disabled: null === HB,
            onClick: () => {
              kB(!0)
            },
            children: [(0, MB.jsx)("img", {
              src: uB,
              width: OB,
              height: DB,
              alt: dB(sB.cb[lB]),
              draggable: !1
            }), (0, MB.jsx)(SB.b, {
              item: TB
            })]
          }), !YB && null !== HB && (0, MB.jsxs)(XB, {
            side: "Right",
            onClick: () => {
              gB(!0)
            },
            children: [(0, MB.jsx)(tB.e, {
              name: "arrows-left-right"
            }), " ", dB("shaderPackListing:compare")]
          }), YB && null !== HB && (0, MB.jsx)(ZB, {
            item: TB,
            packUrl: uB,
            baselineUrl: (0, pB.k)(LB, HB, lB, "large")
          }), YB && (0, MB.jsx)(XB, {
            side: "Left",
            onClick: () => {
              gB(!1)
            },
            children: dB("shaderPackListing:withPack")
          }), YB && (0, MB.jsx)(XB, {
            side: "Right",
            onClick: () => {
              gB(!1)
            },
            children: dB("shaderPackListing:withoutPack")
          })]
        }), oB && (0, MB.jsx)(RB, {
          fullUrl: (0, pB.r)(LB, TB, lB, "full"),
          largeUrl: uB,
          alt: dB(sB.cb[lB]),
          onClose: () => {
            kB(!1)
          }
        })]
      })
    }

    function RB(BB) {
      let {
        fullUrl: TB,
        largeUrl: dB,
        alt: yB,
        onClose: pB
      } = BB;
      const lB = (0, VB.useRef)(null);
      return (0, KB.y)("popup", lB, pB), (0, VB.useEffect)((() => {
        function BB(BB) {
          "Escape" === BB.key && (BB.stopPropagation(), pB())
        }
        return window.addEventListener("keydown", BB, !0), () => {
          window.removeEventListener("keydown", BB, !0)
        }
      }), [pB]), (0, UB.createPortal)((0, MB.jsxs)("div", {
        ref: lB,
        className: "ShaderPackFullSize",
        onClick: pB,
        children: [(0, MB.jsx)("img", {
          className: "ShaderPackFullSizeImage",
          src: TB,
          alt: yB,
          draggable: !1,
          style: {
            backgroundImage: `url(${dB})`
          }
        }), (0, MB.jsx)(oB.i, {
          className: "ShaderPackFullSizeClose",
          onClick: pB
        })]
      }), document.body)
    }
    const aB = 5;

    function ZB(BB) {
      let {
        item: TB,
        packUrl: dB,
        baselineUrl: yB
      } = BB;
      const {
        t: lB
      } = (0, vB.z)(), [JB, YB] = (0, VB.useState)(50), gB = (0, VB.useRef)(!1), oB = (0, VB.useRef)(null), {
        width: kB,
        height: LB
      } = pB.q.large;

      function OB(BB) {
        YB((TB => (0, FB.d)(TB + BB, 0, 100)))
      }

      function DB(BB) {
        const TB = BB.currentTarget.getBoundingClientRect();
        YB((0, FB.d)((BB.clientX - TB.left) / TB.width * 100, 0, 100))
      }
      return (0, rB.c)(oB, {
        adjust: BB => {
          OB(BB * aB)
        },
        setFraction: BB => {
          YB(100 * BB)
        },
        endDrag: () => {}
      }), (0, MB.jsxs)("div", {
        ref: oB,
        className: "ShaderPackCompare",
        "data-pad-slider": "",
        "data-pad-focusable": "",
        role: "slider",
        tabIndex: 0,
        "aria-label": lB("shaderPackListing:compare"),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(JB),
        style: {
          "--split": `${JB}%`
        },
        onKeyDown: function(BB) {
          const TB = "ArrowLeft" === BB.key ? -aB : "ArrowRight" === BB.key ? aB : 0;
          0 !== TB && (BB.preventDefault(), OB(TB))
        },
        onPointerDown: BB => {
          gB.current = !0, BB.currentTarget.setPointerCapture(BB.pointerId), DB(BB)
        },
        onPointerMove: BB => {
          gB.current && DB(BB)
        },
        onPointerUp: () => {
          gB.current = !1
        },
        onPointerCancel: () => {
          gB.current = !1
        },
        children: [(0, MB.jsx)("img", {
          className: "ShaderPackCompareBaseline",
          src: yB,
          width: kB,
          height: LB,
          alt: "",
          draggable: !1,
          style: {
            backgroundImage: `url(${dB})`
          }
        }), (0, MB.jsx)("div", {
          className: "ShaderPackCompareLine"
        }), (0, MB.jsx)("img", {
          className: "ShaderPackComparePack",
          src: dB,
          width: kB,
          height: LB,
          alt: "",
          draggable: !1
        }), (0, MB.jsx)(SB.b, {
          item: TB,
          className: "ShaderPackCompareNotice"
        })]
      })
    }

    function XB(BB) {
      let {
        side: TB,
        onClick: dB,
        children: VB
      } = BB;
      return (0, MB.jsx)("button", {
        type: "button",
        className: `ShaderPackStageButton ${TB}`,
        onClick: dB,
        children: (0, MB.jsx)("span", {
          className: "ShaderPackStageButtonFace SmallTextBold",
          children: VB
        })
      })
    }
    var WB = dB(4411),
      hB = dB(256),
      CB = dB(5994);
    const GB = {
      compiler: "shaderPack:compilerUnavailable",
      download: "shaderPackListing:useDownloadFailed",
      apiVersion: "shaderPackListing:useOtherApiVersion",
      invalid: "shaderPackListing:useInvalid",
      errors: "shaderPackListing:useFailsHere",
      save: "shaderPack:saveFailed"
    };

    function qB(BB) {
      const {
        userContext: TB
      } = (0, uB.b)(), [yB, pB] = (0, VB.useState)(null), [lB, JB] = (0, VB.useState)(!1), [YB, gB] = (0, VB.useState)(!1), [oB, kB] = (0, VB.useState)(null), LB = null === BB || void 0 === BB ? void 0 : BB.packId, OB = null === BB || void 0 === BB ? void 0 : BB.sourceHash;
      return (0, VB.useEffect)((() => {
        if (JB(!1), kB(null), void 0 === LB) return;
        let BB = !1;
        return Promise.all([(0, EB.hasUsableWebGpuAdapter)(), (0, CB.d)()]).then((TB => {
          let [dB, VB] = TB;
          var yB;
          BB || (pB(dB), JB((null === VB || void 0 === VB || null === (yB = VB.listing) || void 0 === yB ? void 0 : yB.packId) === LB && VB.listing.sourceHash === OB))
        })).catch((TB => {
          console.error("Failed to check whether this shader pack can be used", TB), BB || pB(!1)
        })), () => {
          BB = !0
        }
      }), [LB, OB]), {
        webGpuUsable: yB,
        inUse: lB,
        busy: YB,
        errorKey: oB,
        use: () => {
          null !== BB && async function(BB) {
            gB(!0), kB(null);
            try {
              const {
                installListedShaderPack: VB
              } = await Promise.all([dB.e(126), dB.e(124), dB.e(119)]).then((() => dB(39236))), yB = await VB({
                packId: BB.packId,
                sourceHash: BB.sourceHash,
                name: BB.name,
                ownerName: BB.ownerName,
                description: BB.description
              });
              if ("failed" === yB.kind) return void kB(GB[yB.reason]);
              JB(!0), HB.c.recordShaderPackDownload(TB, BB.packId).catch((BB => {
                console.error("Failed to count a shader pack's download", BB)
              })), (0, WB.n)()
            } catch (VB) {
              console.error("Failed to use the shader pack", VB), kB("shaderPack:unexpectedError")
            } finally {
              gB(!1)
            }
          }(BB)
        }
      }
    }

    function xB(BB) {
      let {
        packUse: TB
      } = BB;
      const {
        t: dB
      } = (0, vB.z)(), {
        webGpuUsable: VB,
        inUse: yB,
        busy: pB,
        errorKey: lB,
        use: JB
      } = TB;
      return (0, MB.jsxs)("div", {
        className: "ShaderPackUse",
        children: [(0, MB.jsxs)(oB.k, {
          disabled: !0 !== VB || yB,
          loading: pB,
          onClick: JB,
          children: [(0, MB.jsx)(tB.e, {
            name: yB ? "check" : "download"
          }), " ", dB(yB ? "shaderPackListing:inUse" : "shaderPackListing:use")]
        }), !1 === VB && (0, MB.jsx)("div", {
          className: "ShaderPackUseNote",
          children: dB((0, hB.g)() ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), lB && (0, MB.jsx)("div", {
          className: "ShaderPackUseNote Error",
          children: dB(lB)
        })]
      })
    }

    function jB() {
      var BB;
      const {
        t: TB
      } = (0, vB.z)(), dB = (0, gB.useNavigatePreserveSearch)(), {
        packId: pB
      } = (0, yB.u)(), {
        userContext: lB,
        isUserContextUpdating: JB
      } = (0, uB.b)(), [kB, LB] = (0, VB.useState)(null), [OB, EB] = (0, VB.useState)(null), [mB, iB] = (0, VB.useState)(0), NB = (0, VB.useRef)(0);

      function tB() {
        var BB;
        null !== (BB = (0, gB.getPreviousLocation)()) && void 0 !== BB && BB.startsWith(sB.T) ? dB(-1) : dB(sB.T)
      }(0, DB.d)(tB), (0, cB.d)(), (0, VB.useEffect)((() => {
        if (JB || void 0 === pB) return;
        const BB = ++NB.current;
        EB(null), HB.c.getShaderPack(lB, pB).then((TB => {
          NB.current === BB && LB(TB)
        })).catch((TB => {
          NB.current === BB && (console.error("Failed to get the shader pack", TB), LB(null), EB({
            error: TB
          }))
        }))
      }), [pB, lB, JB, mB]);
      const fB = () => {
          iB((BB => BB + 1))
        },
        zB = (null === kB || void 0 === kB ? void 0 : kB.packId) === pB ? kB : null,
        UB = (0, cB.k)(),
        FB = qB(null !== (BB = null === zB || void 0 === zB ? void 0 : zB.live) && void 0 !== BB ? BB : null),
        KB = null !== zB && void 0 !== zB && zB.live ? (0, MB.jsx)(AB, {
          item: zB.live,
          favourites: UB,
          packUse: FB
        }) : null;
      return (0, MB.jsxs)("article", {
        className: "ShaderPackInformation AnimFadeIn",
        children: [(0, MB.jsx)(oB.b, {
          onClick: tB,
          children: TB("shaderPackListing:backToPacks")
        }), null === zB && null === OB && (0, MB.jsx)("div", {
          className: "ShaderPackInformationMessage",
          children: (0, MB.jsx)(YB.b, {})
        }), null !== OB && (0, MB.jsxs)("div", {
          className: "ShaderPackInformationMessage",
          children: [(0, sB.D)(OB.error, TB, "shaderPackListing:loadPackFailed"), (0, MB.jsx)(oB.d, {
            onClick: fB,
            children: TB("general:tryAgain")
          })]
        }), null !== zB && null === OB && (0, MB.jsxs)("div", {
          className: "ShaderPackInformationBody",
          children: [(0, MB.jsxs)("header", {
            className: "ShaderPackInformationHeader",
            children: [(0, MB.jsx)("h1", {
              className: "FullyFancyText",
              children: zB.name
            }), KB]
          }), zB.live && (0, MB.jsx)(QB, {
            item: zB.live
          }), zB.live && (0, MB.jsx)(bB, {
            item: zB.live,
            ownerPreview: zB.ownerPreview,
            bloxdhubSlug: zB.bloxdhubSlug,
            actions: KB
          }), zB.owner && (0, MB.jsx)(wB, {
            details: zB,
            owner: zB.owner,
            onChanged: fB
          })]
        })]
      })
    }

    function AB(BB) {
      let {
        item: TB,
        favourites: dB,
        packUse: VB
      } = BB;
      const yB = dB.isFavourite(TB.packId);
      return (0, MB.jsxs)("div", {
        className: "ShaderPackInformationActions",
        children: [EB.featureFlags.settings.canUseShaderPacks && (0, MB.jsx)(xB, {
          packUse: VB
        }), (0, MB.jsx)(oB.t, {
          className: "ShaderPackInformationLike",
          onClick: () => {
            dB.toggle(TB.packId)
          },
          isLiked: !0 === yB,
          isLoading: null === yB
        })]
      })
    }

    function bB(BB) {
      let {
        item: TB,
        ownerPreview: dB,
        bloxdhubSlug: VB,
        actions: yB
      } = BB;
      const {
        t: JB
      } = (0, vB.z)(), YB = (0, OB.p)(), oB = null === VB ? null : (0, pB.c)(VB);
      return (0, MB.jsxs)("div", {
        className: "ShaderPackFacts",
        children: [TB.description && (0, MB.jsx)("p", {
          className: "ShaderPackDescription",
          children: TB.description
        }), (0, MB.jsxs)("div", {
          className: "ShaderPackFeatureList",
          children: [(null !== dB || null !== oB) && (0, MB.jsx)("div", {
            className: "ShaderPackAuthor",
            children: null !== dB ? (0, MB.jsxs)(MB.Fragment, {
              children: [(0, MB.jsx)(LB.i, {
                playerSocialPreview: dB,
                showLocation: !1,
                linkToProfile: !0
              }), null !== oB && (0, MB.jsx)("a", {
                className: "ShaderPackBloxdhubLogo",
                href: oB,
                target: "_blank",
                rel: "noopener noreferrer",
                children: (0, MB.jsx)("img", {
                  src: mB,
                  alt: pB.b
                })
              })]
            }) : (0, MB.jsxs)("a", {
              className: "ShaderPackBloxdhubName",
              href: oB,
              target: "_blank",
              rel: "noopener noreferrer",
              children: [pB.b, (0, MB.jsx)("img", {
                src: mB,
                alt: ""
              })]
            })
          }), sB.E.filter((BB => TB.features.includes(BB))).map((BB => (0, MB.jsx)(gB.LinkPreserveSearch, {
            className: "ShaderPackFeature",
            to: (0, sB.L)(BB),
            children: JB(sB.M[BB])
          }, BB)))]
        }), yB, (0, MB.jsxs)("dl", {
          className: "ShaderPackFactList",
          children: [(0, MB.jsxs)("div", {
            children: [(0, MB.jsx)("dt", {
              children: JB("shaderPackListing:downloads")
            }), (0, MB.jsx)("dd", {
              children: (0, lB.S)(TB.downloads)
            })]
          }), (0, MB.jsx)(nB, {
            label: JB("shaderPackListing:updated"),
            time: TB.listedUpdatedAt,
            now: YB
          }), (0, MB.jsx)(nB, {
            label: JB("shaderPackListing:created"),
            time: TB.publishedAt,
            now: YB
          }), null !== TB.gpuCost && (0, MB.jsxs)("div", {
            children: [(0, MB.jsx)("dt", {
              children: JB("shaderPackListing:lag")
            }), (0, MB.jsx)("dd", {
              children: JB("shaderPackListing:lagPercent", {
                percent: String((0, sB.Q)(TB.gpuCost))
              })
            })]
          }), (0, MB.jsxs)("div", {
            children: [(0, MB.jsx)("dt", {
              children: JB("shaderPackListing:size")
            }), (0, MB.jsx)("dd", {
              children: JB("shaderPackListing:sizeValue", {
                kilobytes: String((0, sB.O)(TB.sourceBytes))
              })
            })]
          }), (0, MB.jsxs)("div", {
            children: [(0, MB.jsx)("dt", {
              children: JB("shaderPackListing:files")
            }), (0, MB.jsx)("dd", {
              children: TB.fileCount
            })]
          })]
        })]
      })
    }

    function nB(BB) {
      let {
        label: TB,
        time: dB,
        now: VB
      } = BB;
      const {
        t: yB,
        selectedLanguage: pB
      } = (0, vB.z)(), lB = new Date(dB);
      let YB = lB.toLocaleDateString();
      if (VB - dB <= 30 * JB.k) {
        const BB = (0, vB.m)(pB.code, "shaderPackListing:timeAgo");
        YB = yB("shaderPackListing:timeAgo", {
          time: (0, JB.cb)(BB, dB, VB)
        })
      }
      return (0, MB.jsx)(kB.h, {
        tooltipInner: lB.toLocaleString(),
        children: (0, MB.jsxs)("div", {
          children: [(0, MB.jsx)("dt", {
            children: TB
          }), (0, MB.jsx)("dd", {
            children: YB
          })]
        })
      })
    }
  },
  4438: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => lB
    });
    var VB = dB(933),
      yB = dB.n(VB),
      pB = dB(980);

    function lB(BB) {
      let {
        options: TB,
        value: dB,
        onChange: VB,
        ariaLabel: lB
      } = BB;
      return (0, pB.jsx)("div", {
        className: "SegmentedToggle",
        role: "group",
        "aria-label": lB,
        children: TB.map((BB => {
          const TB = BB.value === dB;
          return (0, pB.jsx)("button", {
            type: "button",
            "aria-pressed": TB,
            className: yB()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: TB
            }),
            onClick: () => {
              TB || VB(BB.value)
            },
            children: BB.label
          }, BB.value)
        }))
      })
    }
  },
  4447: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => pB,
      c: () => lB
    });
    var VB = dB(62);
    const yB = new WeakMap,
      pB = BB => {
        var TB;
        const dB = BB.closest("[data-pad-slider]");
        return dB && null !== (TB = yB.get(dB)) && void 0 !== TB ? TB : null
      },
      lB = (BB, TB) => {
        const dB = (0, VB.useRef)(TB);
        dB.current = TB, (0, VB.useEffect)((() => {
          if (BB.current) return ((BB, TB) => (yB.set(BB, TB), () => {
            yB.get(BB) === TB && yB.delete(BB)
          }))(BB.current, {
            adjust: BB => {
              dB.current.adjust(BB)
            },
            setFraction: BB => {
              dB.current.setFraction(BB)
            },
            endDrag: () => {
              dB.current.endDrag()
            }
          })
        }), [BB])
      }
  },
  5994: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => yB,
      d: () => pB
    });
    var VB = dB(33);
    const yB = "shaderPack";
    async function pB() {
      var BB;
      let TB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (BB = await VB.f.getItem(yB, TB)) && void 0 !== BB ? BB : null
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);