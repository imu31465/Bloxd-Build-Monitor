export const id = 113;
export const ids = [113];
export const modules = {
  5078: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => JB,
      c: () => LB,
      f: () => mB,
      i: () => GB
    });
    var QB = zB(62),
      nB = zB(5081),
      dB = zB(4478),
      IB = zB(1388),
      NB = zB(5097),
      uB = zB(1091),
      UB = zB.n(uB),
      aB = zB(1381),
      pB = zB(1778),
      rB = zB(5101),
      sB = zB(1148);

    function JB(BB) {
      let {
        label: jB,
        onClick: zB,
        checked: QB,
        circleInfoText: nB,
        className: NB,
        disabled: uB,
        note: aB
      } = BB;
      return (0, sB.jsxs)("div", {
        "aria-disabled": uB || void 0,
        "data-pad-focusable": !0,
        className: UB()("SettingBox CheckboxContainer", {
          [NB]: NB,
          SettingBoxDisabled: uB
        }),
        onClick: () => {
          uB || zB(!QB)
        },
        children: [(0, sB.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, sB.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, sB.jsx)(dB.e, {
              className: "SettingsCheckbox",
              checked: QB,
              disabled: uB,
              onChange: () => {}
            })
          }), (0, sB.jsxs)("div", {
            className: "CheckboxText",
            children: [jB, nB && (0, sB.jsx)("span", {
              onClick: BB => BB.stopPropagation(),
              children: (0, sB.jsx)(IB.e, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: nB
              })
            })]
          })]
        }), aB && (0, sB.jsx)("div", {
          className: "SettingNote",
          children: aB
        })]
      })
    }

    function mB(BB) {
      let {
        name: jB,
        onChange: zB,
        min: nB,
        max: dB,
        step: NB,
        initValue: uB,
        circleInfoText: aB,
        format: pB,
        className: rB,
        padStep: JB,
        disabled: mB = !1,
        selectableMax: yB,
        cappedNote: GB,
        onChangeComplete: LB
      } = BB;
      const [gB, tB] = (0, QB.useState)(uB), SB = (0, QB.useRef)(uB);
      (0, QB.useEffect)((() => {
        SB.current = uB, tB(uB)
      }), [uB]);
      const MB = void 0 !== yB && yB < dB,
        EB = MB ? {
          "--slider-selectable": (yB - nB) / (dB - nB)
        } : void 0;
      return (0, sB.jsxs)("div", {
        className: UB()("SettingBox SettingsSliderDiv", {
          [rB]: rB,
          SettingBoxDisabled: mB,
          SliderCapped: MB
        }),
        style: EB,
        children: [(0, sB.jsxs)("div", {
          className: "SliderText",
          children: [`${jB}: ${pB?pB(gB):gB}`, aB && (0, sB.jsx)(IB.e, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: aB
          })]
        }), (0, sB.jsx)("div", {
          className: "SliderDiv",
          children: (0, sB.jsx)(kB, {
            value: gB,
            min: nB,
            max: dB,
            step: NB,
            onChange: BB => {
              if (MB && BB >= yB && gB === yB) return;
              const jB = MB ? Math.min(BB, yB) : BB;
              SB.current = jB, tB(jB), zB(jB)
            },
            onChangeComplete: LB && (() => {
              LB(SB.current)
            }),
            format: pB,
            padStep: JB,
            disabled: mB
          })
        }), MB && GB && (0, sB.jsx)("div", {
          className: "SettingNote",
          children: GB
        })]
      })
    }
    const yB = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function kB(BB) {
      var jB;
      let {
        value: zB,
        min: dB,
        max: IB,
        step: NB,
        onChange: uB,
        orientation: UB,
        reverse: aB,
        setIsChanging: pB,
        tooltip: JB,
        labels: mB,
        handleLabel: kB,
        format: GB,
        onChangeStart: LB,
        onChangeComplete: gB,
        padStep: tB,
        disabled: SB = !1
      } = BB;
      const MB = (0, QB.useRef)(null),
        EB = (0, QB.useRef)(null);
      (0, QB.useLayoutEffect)((() => {
        var BB, jB, zB;
        const QB = null !== (BB = null === (jB = MB.current) || void 0 === jB ? void 0 : jB.querySelector(".rangeslider")) && void 0 !== BB ? BB : null;
        null === QB || void 0 === QB || QB.setAttribute("data-pad-slider", ""), null === QB || void 0 === QB || QB.setAttribute("data-pad-focusable", ""), null === QB || void 0 === QB || null === (zB = QB.querySelector(".rangeslider__handle")) || void 0 === zB || zB.setAttribute("data-pad-slider-handle", ""), EB.current = QB
      }), []), (0, QB.useLayoutEffect)((() => {
        var BB, jB;
        SB ? null === (BB = EB.current) || void 0 === BB || BB.setAttribute("aria-disabled", "true") : null === (jB = EB.current) || void 0 === jB || jB.removeAttribute("aria-disabled")
      }), [SB]);
      const iB = (null !== (jB = String(NB).split(".")[1]) && void 0 !== jB ? jB : "").length,
        qB = BB => {
          const jB = Number((Math.round((BB - dB) / NB) * NB + dB).toFixed(iB));
          return Math.min(IB, Math.max(dB, jB))
        },
        fB = (0, QB.useRef)(gB);
      fB.current = gB, (0, QB.useEffect)((() => {
        const BB = MB.current;
        if (!BB) return;
        const jB = BB => {
          var jB;
          yB.has(BB.key) && (null === (jB = fB.current) || void 0 === jB || jB.call(fB))
        };
        return BB.addEventListener("keyup", jB), () => {
          BB.removeEventListener("keyup", jB)
        }
      }), []);
      const oB = (0, QB.useRef)(!1);
      return (0, rB.e)(EB, {
        adjust: BB => {
          if (SB) return;
          const jB = null !== tB && void 0 !== tB ? tB : Math.max(NB, Math.round((IB - dB) / 20 / NB) * NB),
            QB = qB(zB + BB * jB * (aB ? -1 : 1));
          QB !== zB && (null === LB || void 0 === LB || LB(), uB(QB), null === gB || void 0 === gB || gB())
        },
        setFraction: BB => {
          if (SB) return;
          const jB = qB(dB + (aB ? 1 - BB : BB) * (IB - dB));
          jB !== zB && (oB.current || (oB.current = !0, null === LB || void 0 === LB || LB()), uB(jB))
        },
        endDrag: () => {
          oB.current && (oB.current = !1, null === gB || void 0 === gB || gB())
        }
      }), (0, sB.jsx)("div", {
        ref: MB,
        style: {
          display: "contents"
        },
        children: (0, sB.jsx)(nB.c, {
          value: zB,
          min: dB,
          max: IB,
          step: NB,
          onChange: uB,
          orientation: UB,
          reverse: aB,
          tooltip: JB,
          labels: mB,
          handleLabel: kB,
          format: GB,
          onChangeStart: () => {
            null === LB || void 0 === LB || LB(), null === pB || void 0 === pB || pB(!0)
          },
          onChangeComplete: () => {
            null === pB || void 0 === pB || pB(!1), null === gB || void 0 === gB || gB()
          }
        })
      })
    }
    async function GB() {
      const BB = aB.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await BB.getResult() && (0, pB.reloadBloxd)()
    }

    function LB(BB) {
      let {
        label: jB,
        options: zB,
        value: QB,
        onChange: nB,
        circleInfoText: dB
      } = BB;
      return (0, sB.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, sB.jsxs)("div", {
          className: "SliderText",
          children: [jB, dB && (0, sB.jsx)(IB.e, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: dB
          })]
        }), (0, sB.jsx)(NB.e, {
          ariaLabel: jB,
          options: zB,
          value: QB,
          onChange: nB
        })]
      })
    }
  },
  6615: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      default: () => vB
    });
    var QB = zB(62),
      nB = zB(1547),
      dB = zB(6523),
      IB = zB(1263),
      NB = zB(376),
      uB = zB(1570),
      UB = zB(1369),
      aB = zB(1543),
      pB = zB(1478),
      rB = zB(1388),
      sB = zB(1637),
      JB = zB(2711),
      mB = zB(2842),
      yB = zB(4668),
      kB = zB(1169),
      GB = zB(1532),
      LB = zB(106),
      gB = zB(1240);
    const tB = zB.p + "static/media/bloxdhubLogo.6a6c367af2ad6e6f1eb3.webp";
    var SB = zB(1091),
      MB = zB.n(SB),
      EB = zB(1108),
      iB = zB(1381),
      qB = zB(6515),
      fB = zB(1148);
    const oB = (0, QB.lazy)((() => Promise.all([zB.e(109), zB.e(78), zB.e(136), zB.e(135), zB.e(114), zB.e(402)]).then((() => zB(6562))).then((BB => ({
      default: BB.ShaderPackPublishForm
    })))));

    function HB(BB) {
      let {
        details: jB,
        owner: zB,
        onChanged: nB
      } = BB;
      const {
        t: IB
      } = (0, gB.D)(), NB = (0, aB.useNavigatePreserveSearch)(), {
        userContext: uB
      } = (0, kB.d)(), [rB, sB] = (0, QB.useState)(!1), [JB, mB] = (0, QB.useState)(null), [yB, LB] = (0, QB.useState)(!1), {
        packId: tB,
        name: SB,
        description: HB,
        live: DB
      } = jB;
      async function FB(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : nB;
        sB(!0), mB(null);
        try {
          await BB(), jB()
        } catch (zB) {
          console.error("Failed to change a shader pack", zB), mB((0, qB.z)(zB, IB, "shaderPackListing:ownerActionFailed"))
        } finally {
          sB(!1)
        }
      }
      const YB = (0, qB.u)(uB);
      return (0, fB.jsxs)("section", {
        className: "ShaderPackOwnerPanel",
        children: [(0, fB.jsx)("h2", {
          className: "ShaderPackSectionTitle",
          children: IB("general:manage")
        }), (0, qB.S)(zB, !(null === DB || void 0 === DB || !DB.renderId), Date.now(), IB).map((BB => (0, fB.jsxs)("div", {
          className: MB()("ShaderPackOwnerNotice", {
            Warning: "warning" === BB.tone
          }),
          children: [(0, fB.jsx)(EB.c, {
            name: "warning" === BB.tone ? "triangle-exclamation" : "circle-info"
          }), (0, fB.jsxs)("div", {
            children: [BB.text, BB.detail && (0, fB.jsx)("pre", {
              className: "ShaderPackOwnerNoticeDetail",
              children: BB.detail
            })]
          })]
        }, BB.text))), jB.ban && (0, fB.jsxs)("div", {
          className: "ShaderPackOwnerNotice Warning",
          children: [(0, fB.jsx)(EB.c, {
            name: "ban"
          }), (0, fB.jsxs)("div", {
            children: ["Banned by ", jB.ban.byName, " on ", new Date(jB.ban.at).toLocaleString()]
          })]
        }), JB && (0, fB.jsx)("div", {
          className: "ShaderPackOwnerError",
          children: JB
        }), (0, fB.jsxs)("div", {
          className: "ShaderPackOwnerActions",
          children: [(0, fB.jsxs)(pB.M, {
            disabled: rB,
            onClick: () => {
              !async function() {
                const BB = await iB.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:renameTitle",
                  initialValue: SB,
                  maxLength: dB.B,
                  submitText: "general:save",
                  validate: BB => BB.trim().length < dB.D ? IB("shaderPackListing:nameTooShort", {
                    min: String(dB.D)
                  }) : null
                }).getResult();
                "notificationTornDown" !== BB && "submit" === (null === BB || void 0 === BB ? void 0 : BB.type) && BB.value.trim() !== SB && await FB((() => GB.b.updateShaderPack(uB, {
                  packId: tB,
                  name: BB.value.trim()
                })))
              }()
            },
            children: [(0, fB.jsx)(EB.c, {
              name: "pen"
            }), " ", IB("shaderPackListing:rename")]
          }), (0, fB.jsxs)(pB.M, {
            disabled: rB,
            onClick: () => {
              !async function() {
                const BB = await iB.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:editDescription",
                  initialValue: HB,
                  maxLength: dB.o,
                  multiline: !0,
                  allowEmptySubmit: !0,
                  submitText: "general:save"
                }).getResult();
                "notificationTornDown" !== BB && "submit" === (null === BB || void 0 === BB ? void 0 : BB.type) && BB.value.trim() !== HB && await FB((() => GB.b.updateShaderPack(uB, {
                  packId: tB,
                  description: BB.value.trim()
                })))
              }()
            },
            children: [(0, fB.jsx)(EB.c, {
              name: "file-lines"
            }), " ", IB("shaderPackListing:editDescription")]
          }), (0, fB.jsxs)(pB.M, {
            disabled: rB || zB.isBanned && !zB.listed,
            onClick: () => {
              FB((() => GB.b.updateShaderPack(uB, {
                packId: tB,
                listed: !zB.listed
              })))
            },
            children: [(0, fB.jsx)(EB.c, {
              name: zB.listed ? "eye-slash" : "eye"
            }), " ", IB(zB.listed ? "shaderPackListing:unlist" : "shaderPackListing:relist")]
          }), !zB.isBanned && (0, fB.jsxs)(pB.f, {
            disabled: rB,
            onClick: () => {
              LB(!yB)
            },
            children: [(0, fB.jsx)(EB.c, {
              name: "upload"
            }), " ", IB("shaderPackListing:uploadVersion")]
          }), (0, fB.jsxs)(pB.J, {
            disabled: rB || zB.isBanned,
            onClick: () => {
              !async function() {
                !0 === await iB.NotificationProvider.showPromptPopup({
                  title: "shaderPackListing:deleteTitle",
                  subtitle: "shaderPackListing:deleteSubtitle",
                  confirmText: "general:delete",
                  cancelText: "general:cancel",
                  destructive: !0
                }).getResult() && await FB((() => GB.b.deleteShaderPack(uB, tB)), (() => {
                  NB(`${qB.R}?section=mine`, {
                    replace: !0
                  })
                }))
              }()
            },
            children: [(0, fB.jsx)(EB.c, {
              name: "trash-can"
            }), " ", IB("general:delete")]
          }), YB && (0, fB.jsxs)(pB.J, {
            disabled: rB,
            onClick: () => {
              FB((() => GB.b.setShaderPackBanned(uB, tB, !zB.isBanned)))
            },
            children: [(0, fB.jsx)(EB.c, {
              name: zB.isBanned ? "circle-check" : "ban"
            }), " ", zB.isBanned ? "Unban" : "Ban"]
          })]
        }), yB && (0, fB.jsx)(QB.Suspense, {
          fallback: (0, fB.jsx)(UB.e, {}),
          children: (0, fB.jsx)(oB, {
            existing: {
              packId: tB,
              name: SB,
              description: HB
            },
            onPublished: () => {
              LB(!1), nB()
            }
          })
        })]
      })
    }
    var DB = zB(83),
      FB = zB(1948),
      YB = zB(1306),
      VB = zB(5101),
      hB = zB(1244),
      XB = zB(6537),
      ZB = zB(6532),
      AB = zB(6547);

    function TB(BB) {
      let {
        item: jB
      } = BB;
      const {
        t: zB
      } = (0, gB.D)(), [nB] = (0, XB.k)(), [IB, NB] = (0, QB.useState)(nB), [uB, UB] = (0, QB.useState)(!1), [aB, pB] = (0, QB.useState)(!1), {
        s3Url: rB
      } = hB.clientSideServerUrls, {
        width: sB,
        height: JB
      } = dB.s.large, mB = (0, dB.u)(rB, jB, IB, "large"), {
        renderVersion: yB
      } = jB;
      return (0, fB.jsxs)("div", {
        className: "ShaderPackPreviews",
        children: [(0, fB.jsx)(AB.e, {
          selected: IB,
          onSelect: BB => {
            NB(BB), UB(!1)
          },
          imageUrl: BB => (0, dB.u)(rB, jB, BB, "thumb")
        }), (0, fB.jsxs)("div", {
          className: "ShaderPackPreviewStage",
          children: [!uB && (0, fB.jsxs)("button", {
            type: "button",
            className: "ShaderPackPreviewMain",
            title: null === yB ? void 0 : zB("shaderPackListing:fullSize"),
            disabled: null === yB,
            onClick: () => {
              pB(!0)
            },
            children: [(0, fB.jsx)("img", {
              src: mB,
              width: sB,
              height: JB,
              alt: zB(qB.ab[IB]),
              draggable: !1
            }), (0, fB.jsx)(ZB.d, {
              item: jB
            })]
          }), !uB && null !== yB && (0, fB.jsxs)(lB, {
            side: "Right",
            onClick: () => {
              UB(!0)
            },
            children: [(0, fB.jsx)(EB.c, {
              name: "arrows-left-right"
            }), " ", zB("shaderPackListing:compare")]
          }), uB && null !== yB && (0, fB.jsx)(eB, {
            item: jB,
            packUrl: mB,
            baselineUrl: (0, dB.n)(rB, yB, IB, "large")
          }), uB && (0, fB.jsx)(lB, {
            side: "Left",
            onClick: () => {
              UB(!1)
            },
            children: zB("shaderPackListing:withPack")
          }), uB && (0, fB.jsx)(lB, {
            side: "Right",
            onClick: () => {
              UB(!1)
            },
            children: zB("shaderPackListing:withoutPack")
          })]
        }), aB && (0, fB.jsx)(PB, {
          fullUrl: (0, dB.u)(rB, jB, IB, "full"),
          largeUrl: mB,
          alt: zB(qB.ab[IB]),
          onClose: () => {
            pB(!1)
          }
        })]
      })
    }

    function PB(BB) {
      let {
        fullUrl: jB,
        largeUrl: zB,
        alt: nB,
        onClose: dB
      } = BB;
      const IB = (0, QB.useRef)(null);
      return (0, YB.v)("popup", IB, dB), (0, QB.useEffect)((() => {
        function BB(BB) {
          "Escape" === BB.key && (BB.stopPropagation(), dB())
        }
        return window.addEventListener("keydown", BB, !0), () => {
          window.removeEventListener("keydown", BB, !0)
        }
      }), [dB]), (0, DB.createPortal)((0, fB.jsxs)("div", {
        ref: IB,
        className: "ShaderPackFullSize",
        onClick: dB,
        children: [(0, fB.jsx)("img", {
          className: "ShaderPackFullSizeImage",
          src: jB,
          alt: nB,
          draggable: !1,
          style: {
            backgroundImage: `url(${zB})`
          }
        }), (0, fB.jsx)(pB.j, {
          className: "ShaderPackFullSizeClose",
          onClick: dB
        })]
      }), document.body)
    }
    const WB = 5;

    function eB(BB) {
      let {
        item: jB,
        packUrl: zB,
        baselineUrl: nB
      } = BB;
      const {
        t: IB
      } = (0, gB.D)(), [NB, uB] = (0, QB.useState)(50), UB = (0, QB.useRef)(!1), aB = (0, QB.useRef)(null), {
        width: pB,
        height: rB
      } = dB.s.large;

      function sB(BB) {
        uB((jB => (0, FB.h)(jB + BB, 0, 100)))
      }

      function JB(BB) {
        const jB = BB.currentTarget.getBoundingClientRect();
        uB((0, FB.h)((BB.clientX - jB.left) / jB.width * 100, 0, 100))
      }
      return (0, VB.e)(aB, {
        adjust: BB => {
          sB(BB * WB)
        },
        setFraction: BB => {
          uB(100 * BB)
        },
        endDrag: () => {}
      }), (0, fB.jsxs)("div", {
        ref: aB,
        className: "ShaderPackCompare",
        "data-pad-slider": "",
        "data-pad-focusable": "",
        role: "slider",
        tabIndex: 0,
        "aria-label": IB("shaderPackListing:compare"),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(NB),
        style: {
          "--split": `${NB}%`
        },
        onKeyDown: function(BB) {
          const jB = "ArrowLeft" === BB.key ? -WB : "ArrowRight" === BB.key ? WB : 0;
          0 !== jB && (BB.preventDefault(), sB(jB))
        },
        onPointerDown: BB => {
          UB.current = !0, BB.currentTarget.setPointerCapture(BB.pointerId), JB(BB)
        },
        onPointerMove: BB => {
          UB.current && JB(BB)
        },
        onPointerUp: () => {
          UB.current = !1
        },
        onPointerCancel: () => {
          UB.current = !1
        },
        children: [(0, fB.jsx)("img", {
          className: "ShaderPackCompareBaseline",
          src: nB,
          width: pB,
          height: rB,
          alt: "",
          draggable: !1,
          style: {
            backgroundImage: `url(${zB})`
          }
        }), (0, fB.jsx)("div", {
          className: "ShaderPackCompareLine"
        }), (0, fB.jsx)("img", {
          className: "ShaderPackComparePack",
          src: zB,
          width: pB,
          height: rB,
          alt: "",
          draggable: !1
        }), (0, fB.jsx)(ZB.d, {
          item: jB,
          className: "ShaderPackCompareNotice"
        })]
      })
    }

    function lB(BB) {
      let {
        side: jB,
        onClick: zB,
        children: QB
      } = BB;
      return (0, fB.jsx)("button", {
        type: "button",
        className: `ShaderPackStageButton ${jB}`,
        onClick: zB,
        children: (0, fB.jsx)("span", {
          className: "ShaderPackStageButtonFace SmallTextBold",
          children: QB
        })
      })
    }
    var wB = zB(5078),
      xB = zB(348),
      KB = zB(6606);
    const CB = {
      compiler: "shaderPack:compilerUnavailable",
      download: "shaderPackListing:useDownloadFailed",
      apiVersion: "shaderPackListing:useOtherApiVersion",
      invalid: "shaderPackListing:useInvalid",
      errors: "shaderPackListing:useFailsHere",
      save: "shaderPack:saveFailed"
    };

    function cB(BB) {
      const {
        userContext: jB
      } = (0, kB.d)(), [nB, dB] = (0, QB.useState)(null), [IB, NB] = (0, QB.useState)(!1), [uB, UB] = (0, QB.useState)(!1), [aB, pB] = (0, QB.useState)(null), rB = null === BB || void 0 === BB ? void 0 : BB.packId, sB = null === BB || void 0 === BB ? void 0 : BB.sourceHash;
      return (0, QB.useEffect)((() => {
        if (NB(!1), pB(null), void 0 === rB) return;
        let BB = !1;
        return Promise.all([(0, LB.hasUsableWebGpuAdapter)(), (0, KB.h)()]).then((jB => {
          let [zB, QB] = jB;
          var nB;
          BB || (dB(zB), NB((null === QB || void 0 === QB || null === (nB = QB.listing) || void 0 === nB ? void 0 : nB.packId) === rB && QB.listing.sourceHash === sB))
        })).catch((jB => {
          console.error("Failed to check whether this shader pack can be used", jB), BB || dB(!1)
        })), () => {
          BB = !0
        }
      }), [rB, sB]), {
        webGpuUsable: nB,
        inUse: IB,
        busy: uB,
        errorKey: aB,
        use: () => {
          null !== BB && async function(BB) {
            UB(!0), pB(null);
            try {
              const {
                installListedShaderPack: QB
              } = await Promise.all([zB.e(78), zB.e(136), zB.e(115)]).then((() => zB(40590))), nB = await QB({
                packId: BB.packId,
                sourceHash: BB.sourceHash,
                name: BB.name,
                ownerName: BB.ownerName,
                description: BB.description
              });
              if ("failed" === nB.kind) return void pB(CB[nB.reason]);
              NB(!0), GB.b.recordShaderPackDownload(jB, BB.packId).catch((BB => {
                console.error("Failed to count a shader pack's download", BB)
              })), (0, wB.i)()
            } catch (QB) {
              console.error("Failed to use the shader pack", QB), pB("shaderPack:unexpectedError")
            } finally {
              UB(!1)
            }
          }(BB)
        }
      }
    }

    function bB(BB) {
      let {
        packUse: jB
      } = BB;
      const {
        t: zB
      } = (0, gB.D)(), {
        webGpuUsable: QB,
        inUse: nB,
        busy: dB,
        errorKey: IB,
        use: NB
      } = jB;
      return (0, fB.jsxs)("div", {
        className: "ShaderPackUse",
        children: [(0, fB.jsxs)(pB.m, {
          disabled: !0 !== QB || nB,
          loading: dB,
          onClick: NB,
          children: [(0, fB.jsx)(EB.c, {
            name: nB ? "check" : "download"
          }), " ", zB(nB ? "shaderPackListing:inUse" : "shaderPackListing:use")]
        }), !1 === QB && (0, fB.jsx)("div", {
          className: "ShaderPackUseNote",
          children: zB((0, xB.l)() ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), IB && (0, fB.jsx)("div", {
          className: "ShaderPackUseNote Error",
          children: zB(IB)
        })]
      })
    }

    function vB() {
      var BB;
      const {
        t: jB
      } = (0, gB.D)(), zB = (0, aB.useNavigatePreserveSearch)(), {
        packId: dB
      } = (0, nB.w)(), {
        userContext: IB,
        isUserContextUpdating: NB
      } = (0, kB.d)(), [rB, JB] = (0, QB.useState)(null), [mB, LB] = (0, QB.useState)(null), [tB, SB] = (0, QB.useState)(0), MB = (0, QB.useRef)(0);

      function EB() {
        var BB;
        null !== (BB = (0, aB.getPreviousLocation)()) && void 0 !== BB && BB.startsWith(qB.R) ? zB(-1) : zB(qB.R)
      }(0, yB.b)(EB), (0, XB.d)(), (0, QB.useEffect)((() => {
        if (NB || void 0 === dB) return;
        const BB = ++MB.current;
        LB(null), GB.b.getShaderPack(IB, dB).then((jB => {
          MB.current === BB && JB(jB)
        })).catch((jB => {
          MB.current === BB && (console.error("Failed to get the shader pack", jB), JB(null), LB({
            error: jB
          }))
        }))
      }), [dB, IB, NB, tB]);
      const iB = () => {
          SB((BB => BB + 1))
        },
        oB = (null === rB || void 0 === rB ? void 0 : rB.packId) === dB ? rB : null,
        DB = (0, XB.m)(),
        FB = cB(null !== (BB = null === oB || void 0 === oB ? void 0 : oB.live) && void 0 !== BB ? BB : null),
        YB = null !== oB && void 0 !== oB && oB.live ? (0, fB.jsx)(RB, {
          item: oB.live,
          favourites: DB,
          packUse: FB
        }) : null;
      return (0, fB.jsxs)("article", {
        className: "ShaderPackInformation AnimFadeIn",
        children: [null !== oB && (0, fB.jsx)(sB.b, {
          meta: (0, uB.N)(oB.name)
        }), (0, fB.jsx)(pB.c, {
          onClick: EB,
          children: jB("shaderPackListing:backToPacks")
        }), null === oB && null === mB && (0, fB.jsx)("div", {
          className: "ShaderPackInformationMessage",
          children: (0, fB.jsx)(UB.e, {})
        }), null !== mB && (0, fB.jsxs)("div", {
          className: "ShaderPackInformationMessage",
          children: [(0, qB.z)(mB.error, jB, "shaderPackListing:loadPackFailed"), (0, fB.jsx)(pB.f, {
            onClick: iB,
            children: jB("general:tryAgain")
          })]
        }), null !== oB && null === mB && (0, fB.jsxs)("div", {
          className: "ShaderPackInformationBody",
          children: [(0, fB.jsxs)("header", {
            className: "ShaderPackInformationHeader",
            children: [(0, fB.jsx)("h1", {
              className: "FullyFancyText",
              children: oB.name
            }), YB]
          }), oB.live && (0, fB.jsx)(TB, {
            item: oB.live
          }), oB.live && (0, fB.jsx)(OB, {
            item: oB.live,
            ownerPreview: oB.ownerPreview,
            bloxdhubSlug: oB.bloxdhubSlug,
            actions: YB
          }), oB.owner && (0, fB.jsx)(HB, {
            details: oB,
            owner: oB.owner,
            onChanged: iB
          })]
        })]
      })
    }

    function RB(BB) {
      let {
        item: jB,
        favourites: zB,
        packUse: QB
      } = BB;
      const nB = zB.isFavourite(jB.packId);
      return (0, fB.jsxs)("div", {
        className: "ShaderPackInformationActions",
        children: [LB.featureFlags.settings.canUseShaderPacks && (0, fB.jsx)(bB, {
          packUse: QB
        }), (0, fB.jsx)(pB.t, {
          className: "ShaderPackInformationLike",
          onClick: () => {
            zB.toggle(jB.packId)
          },
          isLiked: !0 === nB,
          isLoading: null === nB
        })]
      })
    }

    function OB(BB) {
      let {
        item: jB,
        ownerPreview: zB,
        bloxdhubSlug: QB,
        actions: nB
      } = BB;
      const {
        t: NB
      } = (0, gB.D)(), uB = (0, mB.l)(), UB = null === QB ? null : (0, dB.f)(QB);
      return (0, fB.jsxs)("div", {
        className: "ShaderPackFacts",
        children: [jB.description && (0, fB.jsx)("p", {
          className: "ShaderPackDescription",
          children: jB.description
        }), (0, fB.jsxs)("div", {
          className: "ShaderPackFeatureList",
          children: [(null !== zB || null !== UB) && (0, fB.jsx)("div", {
            className: "ShaderPackAuthor",
            children: null !== zB ? (0, fB.jsxs)(fB.Fragment, {
              children: [(0, fB.jsx)(JB.g, {
                playerSocialPreview: zB,
                showLocation: !1,
                linkToProfile: !0
              }), null !== UB && (0, fB.jsx)("a", {
                className: "ShaderPackBloxdhubLogo",
                href: UB,
                target: "_blank",
                rel: "noopener noreferrer",
                children: (0, fB.jsx)("img", {
                  src: tB,
                  alt: dB.d
                })
              })]
            }) : (0, fB.jsxs)("a", {
              className: "ShaderPackBloxdhubName",
              href: UB,
              target: "_blank",
              rel: "noopener noreferrer",
              children: [dB.d, (0, fB.jsx)("img", {
                src: tB,
                alt: ""
              })]
            })
          }), qB.A.filter((BB => jB.features.includes(BB))).map((BB => (0, fB.jsx)(aB.LinkPreserveSearch, {
            className: "ShaderPackFeature",
            to: (0, qB.J)(BB),
            children: NB(qB.L[BB])
          }, BB)))]
        }), nB, (0, fB.jsxs)("dl", {
          className: "ShaderPackFactList",
          children: [(0, fB.jsxs)("div", {
            children: [(0, fB.jsx)("dt", {
              children: NB("shaderPackListing:downloads")
            }), (0, fB.jsx)("dd", {
              children: (0, IB.J)(jB.downloads)
            })]
          }), (0, fB.jsx)(Bj, {
            label: NB("shaderPackListing:updated"),
            time: jB.listedUpdatedAt,
            now: uB
          }), (0, fB.jsx)(Bj, {
            label: NB("shaderPackListing:created"),
            time: jB.publishedAt,
            now: uB
          }), null !== jB.gpuCost && (0, fB.jsxs)("div", {
            children: [(0, fB.jsx)("dt", {
              children: NB("shaderPackListing:lag")
            }), (0, fB.jsx)("dd", {
              children: NB("shaderPackListing:lagPercent", {
                percent: String((0, qB.Q)(jB.gpuCost))
              })
            })]
          }), (0, fB.jsxs)("div", {
            children: [(0, fB.jsx)("dt", {
              children: NB("shaderPackListing:size")
            }), (0, fB.jsx)("dd", {
              children: NB("shaderPackListing:sizeValue", {
                kilobytes: String((0, qB.N)(jB.sourceBytes))
              })
            })]
          }), (0, fB.jsxs)("div", {
            children: [(0, fB.jsx)("dt", {
              children: NB("shaderPackListing:files")
            }), (0, fB.jsx)("dd", {
              children: jB.fileCount
            })]
          })]
        })]
      })
    }

    function Bj(BB) {
      let {
        label: jB,
        time: zB,
        now: QB
      } = BB;
      const {
        t: nB,
        selectedLanguage: dB
      } = (0, gB.D)(), IB = new Date(zB);
      let uB = IB.toLocaleDateString();
      if (QB - zB <= 30 * NB.d) {
        const BB = (0, gB.n)(dB.code, "shaderPackListing:timeAgo");
        uB = nB("shaderPackListing:timeAgo", {
          time: (0, NB.$)(BB, zB, QB)
        })
      }
      return (0, fB.jsx)(rB.g, {
        tooltipInner: IB.toLocaleString(),
        children: (0, fB.jsxs)("div", {
          children: [(0, fB.jsx)("dt", {
            children: jB
          }), (0, fB.jsx)("dd", {
            children: uB
          })]
        })
      })
    }
  },
  5097: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => IB
    });
    var QB = zB(1091),
      nB = zB.n(QB),
      dB = zB(1148);

    function IB(BB) {
      let {
        options: jB,
        value: zB,
        onChange: QB,
        ariaLabel: IB,
        className: NB,
        reselectable: uB = !1,
        keepsFocus: UB = !1,
        padTabs: aB
      } = BB;
      const pB = void 0 !== aB;
      return (0, dB.jsx)("div", {
        className: nB()("SegmentedToggle", NB),
        role: "group",
        "aria-label": IB,
        "data-pad-tabs": aB,
        children: jB.map((BB => {
          const jB = BB.value === zB;
          return (0, dB.jsx)("button", {
            type: "button",
            "aria-pressed": jB,
            "data-pad-tab": pB || void 0,
            "data-pad-selected": pB && jB ? "true" : void 0,
            "data-pad-default-focus": pB && jB || void 0,
            "aria-label": BB.ariaLabel,
            title: BB.ariaLabel,
            className: nB()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: jB
            }),
            onMouseDown: UB ? BB => {
              BB.preventDefault()
            } : void 0,
            onClick: () => {
              jB && !uB || QB(BB.value)
            },
            children: BB.label
          }, BB.value)
        }))
      })
    }
  },
  5101: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => dB,
      e: () => IB
    });
    var QB = zB(62);
    const nB = new WeakMap,
      dB = BB => {
        var jB;
        const zB = BB.closest("[data-pad-slider]");
        return zB && null !== (jB = nB.get(zB)) && void 0 !== jB ? jB : null
      },
      IB = (BB, jB) => {
        const zB = (0, QB.useRef)(jB);
        zB.current = jB, (0, QB.useEffect)((() => {
          if (BB.current) return ((BB, jB) => (nB.set(BB, jB), () => {
            nB.get(BB) === jB && nB.delete(BB)
          }))(BB.current, {
            adjust: BB => {
              zB.current.adjust(BB)
            },
            setFraction: BB => {
              zB.current.setFraction(BB)
            },
            endDrag: () => {
              zB.current.endDrag()
            }
          })
        }), [BB])
      }
  },
  6606: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => nB,
      h: () => dB
    });
    var QB = zB(41);
    const nB = "shaderPack";
    async function dB() {
      var BB;
      let jB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (BB = await QB.g.getItem(nB, jB)) && void 0 !== BB ? BB : null
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);