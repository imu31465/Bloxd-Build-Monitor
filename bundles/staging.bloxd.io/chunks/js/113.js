export const id = 113;
export const ids = [113];
export const modules = {
  5143: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => NB,
      h: () => WB,
      j: () => gB,
      m: () => UB
    });
    var TB = ZB(63),
      JB = ZB(5150),
      oB = ZB(4545),
      GB = ZB(1421),
      vB = ZB(5177),
      kB = ZB(1091),
      cB = ZB.n(kB),
      nB = ZB(1403),
      hB = ZB(1805),
      zB = ZB(5186),
      FB = ZB(1153);

    function NB(BB) {
      let {
        label: IB,
        onClick: ZB,
        checked: TB,
        circleInfoText: JB,
        className: vB,
        disabled: kB,
        note: nB
      } = BB;
      return (0, FB.jsxs)("div", {
        "aria-disabled": kB || void 0,
        "data-pad-focusable": !0,
        className: cB()("SettingBox CheckboxContainer", {
          [vB]: vB,
          SettingBoxDisabled: kB
        }),
        onClick: () => {
          kB || ZB(!TB)
        },
        children: [(0, FB.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, FB.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, FB.jsx)(oB.d, {
              className: "SettingsCheckbox",
              checked: TB,
              disabled: kB,
              onChange: () => {}
            })
          }), (0, FB.jsxs)("div", {
            className: "CheckboxText",
            children: [IB, JB && (0, FB.jsx)("span", {
              onClick: BB => BB.stopPropagation(),
              children: (0, FB.jsx)(GB.d, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: JB
              })
            })]
          })]
        }), nB && (0, FB.jsx)("div", {
          className: "SettingNote",
          children: nB
        })]
      })
    }

    function gB(BB) {
      let {
        name: IB,
        onChange: ZB,
        min: JB,
        max: oB,
        step: vB,
        initValue: kB,
        circleInfoText: nB,
        format: hB,
        className: zB,
        padStep: NB,
        disabled: gB = !1,
        selectableMax: qB,
        cappedNote: UB,
        onChangeComplete: WB
      } = BB;
      const [dB, CB] = (0, TB.useState)(kB), QB = (0, TB.useRef)(kB);
      (0, TB.useEffect)((() => {
        QB.current = kB, CB(kB)
      }), [kB]);
      const sB = void 0 !== qB && qB < oB,
        wB = sB ? {
          "--slider-selectable": (qB - JB) / (oB - JB)
        } : void 0;
      return (0, FB.jsxs)("div", {
        className: cB()("SettingBox SettingsSliderDiv", {
          [zB]: zB,
          SettingBoxDisabled: gB,
          SliderCapped: sB
        }),
        style: wB,
        children: [(0, FB.jsxs)("div", {
          className: "SliderText",
          children: [`${IB}: ${hB?hB(dB):dB}`, nB && (0, FB.jsx)(GB.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: nB
          })]
        }), (0, FB.jsx)("div", {
          className: "SliderDiv",
          children: (0, FB.jsx)(yB, {
            value: dB,
            min: JB,
            max: oB,
            step: vB,
            onChange: BB => {
              if (sB && BB >= qB && dB === qB) return;
              const IB = sB ? Math.min(BB, qB) : BB;
              QB.current = IB, CB(IB), ZB(IB)
            },
            onChangeComplete: WB && (() => {
              WB(QB.current)
            }),
            format: hB,
            padStep: NB,
            disabled: gB
          })
        }), sB && UB && (0, FB.jsx)("div", {
          className: "SettingNote",
          children: UB
        })]
      })
    }
    const qB = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function yB(BB) {
      var IB;
      let {
        value: ZB,
        min: oB,
        max: GB,
        step: vB,
        onChange: kB,
        orientation: cB,
        reverse: nB,
        setIsChanging: hB,
        tooltip: NB,
        labels: gB,
        handleLabel: yB,
        format: UB,
        onChangeStart: WB,
        onChangeComplete: dB,
        padStep: CB,
        disabled: QB = !1
      } = BB;
      const sB = (0, TB.useRef)(null),
        wB = (0, TB.useRef)(null);
      (0, TB.useLayoutEffect)((() => {
        var BB, IB, ZB;
        const TB = null !== (BB = null === (IB = sB.current) || void 0 === IB ? void 0 : IB.querySelector(".rangeslider")) && void 0 !== BB ? BB : null;
        null === TB || void 0 === TB || TB.setAttribute("data-pad-slider", ""), null === TB || void 0 === TB || TB.setAttribute("data-pad-focusable", ""), null === TB || void 0 === TB || null === (ZB = TB.querySelector(".rangeslider__handle")) || void 0 === ZB || ZB.setAttribute("data-pad-slider-handle", ""), wB.current = TB
      }), []), (0, TB.useLayoutEffect)((() => {
        var BB, IB;
        QB ? null === (BB = wB.current) || void 0 === BB || BB.setAttribute("aria-disabled", "true") : null === (IB = wB.current) || void 0 === IB || IB.removeAttribute("aria-disabled")
      }), [QB]);
      const OB = (null !== (IB = String(vB).split(".")[1]) && void 0 !== IB ? IB : "").length,
        YB = BB => {
          const IB = Number((Math.round((BB - oB) / vB) * vB + oB).toFixed(OB));
          return Math.min(GB, Math.max(oB, IB))
        },
        iB = (0, TB.useRef)(dB);
      iB.current = dB, (0, TB.useEffect)((() => {
        const BB = sB.current;
        if (!BB) return;
        const IB = BB => {
          var IB;
          qB.has(BB.key) && (null === (IB = iB.current) || void 0 === IB || IB.call(iB))
        };
        return BB.addEventListener("keyup", IB), () => {
          BB.removeEventListener("keyup", IB)
        }
      }), []);
      const pB = (0, TB.useRef)(!1);
      return (0, zB.f)(wB, {
        adjust: BB => {
          if (QB) return;
          const IB = null !== CB && void 0 !== CB ? CB : Math.max(vB, Math.round((GB - oB) / 20 / vB) * vB),
            TB = YB(ZB + BB * IB * (nB ? -1 : 1));
          TB !== ZB && (null === WB || void 0 === WB || WB(), kB(TB), null === dB || void 0 === dB || dB())
        },
        setFraction: BB => {
          if (QB) return;
          const IB = YB(oB + (nB ? 1 - BB : BB) * (GB - oB));
          IB !== ZB && (pB.current || (pB.current = !0, null === WB || void 0 === WB || WB()), kB(IB))
        },
        endDrag: () => {
          pB.current && (pB.current = !1, null === dB || void 0 === dB || dB())
        }
      }), (0, FB.jsx)("div", {
        ref: sB,
        style: {
          display: "contents"
        },
        children: (0, FB.jsx)(JB.d, {
          value: ZB,
          min: oB,
          max: GB,
          step: vB,
          onChange: kB,
          orientation: cB,
          reverse: nB,
          tooltip: NB,
          labels: gB,
          handleLabel: yB,
          format: UB,
          onChangeStart: () => {
            null === WB || void 0 === WB || WB(), null === hB || void 0 === hB || hB(!0)
          },
          onChangeComplete: () => {
            null === hB || void 0 === hB || hB(!1), null === dB || void 0 === dB || dB()
          }
        })
      })
    }
    async function UB() {
      const BB = nB.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await BB.getResult() && (0, hB.reloadBloxd)()
    }

    function WB(BB) {
      let {
        label: IB,
        options: ZB,
        value: TB,
        onChange: JB,
        circleInfoText: oB
      } = BB;
      return (0, FB.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, FB.jsxs)("div", {
          className: "SliderText",
          children: [IB, oB && (0, FB.jsx)(GB.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: oB
          })]
        }), (0, FB.jsx)(vB.d, {
          ariaLabel: IB,
          options: ZB,
          value: TB,
          onChange: JB
        })]
      })
    }
  },
  6817: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      default: () => KB
    });
    var TB = ZB(63),
      JB = ZB(1591),
      oB = ZB(6731),
      GB = ZB(1281),
      vB = ZB(360),
      kB = ZB(1614),
      cB = ZB(1397),
      nB = ZB(1579),
      hB = ZB(1516),
      zB = ZB(1421),
      FB = ZB(1687),
      NB = ZB(2739),
      gB = ZB(2874),
      qB = ZB(4741),
      yB = ZB(1179),
      UB = ZB(1561),
      WB = ZB(105),
      dB = ZB(1248);
    const CB = ZB.p + "static/media/bloxdhubLogo.6a6c367af2ad6e6f1eb3.webp";
    var QB = ZB(1091),
      sB = ZB.n(QB),
      wB = ZB(1102),
      OB = ZB(1403),
      YB = ZB(6726),
      iB = ZB(1153);
    const pB = (0, TB.lazy)((() => Promise.all([ZB.e(109), ZB.e(78), ZB.e(136), ZB.e(135), ZB.e(114), ZB.e(402)]).then((() => ZB(6753))).then((BB => ({
      default: BB.ShaderPackPublishForm
    })))));

    function aB(BB) {
      let {
        details: IB,
        owner: ZB,
        onChanged: JB
      } = BB;
      const {
        t: GB
      } = (0, dB.G)(), vB = (0, nB.useNavigatePreserveSearch)(), {
        userContext: kB
      } = (0, yB.d)(), [zB, FB] = (0, TB.useState)(!1), [NB, gB] = (0, TB.useState)(null), [qB, WB] = (0, TB.useState)(!1), {
        packId: CB,
        name: QB,
        description: aB,
        live: HB
      } = IB;
      async function MB(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : JB;
        FB(!0), gB(null);
        try {
          await BB(), IB()
        } catch (ZB) {
          console.error("Failed to change a shader pack", ZB), gB((0, YB.x)(ZB, GB, "shaderPackListing:ownerActionFailed"))
        } finally {
          FB(!1)
        }
      }
      const jB = (0, YB.r)(kB);
      return (0, iB.jsxs)("section", {
        className: "ShaderPackOwnerPanel",
        children: [(0, iB.jsx)("h2", {
          className: "ShaderPackSectionTitle",
          children: GB("general:manage")
        }), (0, YB.T)(ZB, !(null === HB || void 0 === HB || !HB.renderId), Date.now(), GB).map((BB => (0, iB.jsxs)("div", {
          className: sB()("ShaderPackOwnerNotice", {
            Warning: "warning" === BB.tone
          }),
          children: [(0, iB.jsx)(wB.d, {
            name: "warning" === BB.tone ? "triangle-exclamation" : "circle-info"
          }), (0, iB.jsxs)("div", {
            children: [BB.text, BB.detail && (0, iB.jsx)("pre", {
              className: "ShaderPackOwnerNoticeDetail",
              children: BB.detail
            })]
          })]
        }, BB.text))), IB.ban && (0, iB.jsxs)("div", {
          className: "ShaderPackOwnerNotice Warning",
          children: [(0, iB.jsx)(wB.d, {
            name: "ban"
          }), (0, iB.jsxs)("div", {
            children: ["Banned by ", IB.ban.byName, " on ", new Date(IB.ban.at).toLocaleString()]
          })]
        }), NB && (0, iB.jsx)("div", {
          className: "ShaderPackOwnerError",
          children: NB
        }), (0, iB.jsxs)("div", {
          className: "ShaderPackOwnerActions",
          children: [(0, iB.jsxs)(hB.V, {
            disabled: zB,
            onClick: () => {
              !async function() {
                const BB = await OB.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:renameTitle",
                  initialValue: QB,
                  maxLength: oB.A,
                  submitText: "general:save",
                  validate: BB => BB.trim().length < oB.B ? GB("shaderPackListing:nameTooShort", {
                    min: String(oB.B)
                  }) : null
                }).getResult();
                "notificationTornDown" !== BB && "submit" === (null === BB || void 0 === BB ? void 0 : BB.type) && BB.value.trim() !== QB && await MB((() => UB.c.updateShaderPack(kB, {
                  packId: CB,
                  name: BB.value.trim()
                })))
              }()
            },
            children: [(0, iB.jsx)(wB.d, {
              name: "pen"
            }), " ", GB("shaderPackListing:rename")]
          }), (0, iB.jsxs)(hB.V, {
            disabled: zB,
            onClick: () => {
              !async function() {
                const BB = await OB.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:editDescription",
                  initialValue: aB,
                  maxLength: oB.o,
                  multiline: !0,
                  allowEmptySubmit: !0,
                  submitText: "general:save"
                }).getResult();
                "notificationTornDown" !== BB && "submit" === (null === BB || void 0 === BB ? void 0 : BB.type) && BB.value.trim() !== aB && await MB((() => UB.c.updateShaderPack(kB, {
                  packId: CB,
                  description: BB.value.trim()
                })))
              }()
            },
            children: [(0, iB.jsx)(wB.d, {
              name: "file-lines"
            }), " ", GB("shaderPackListing:editDescription")]
          }), (0, iB.jsxs)(hB.V, {
            disabled: zB || ZB.isBanned && !ZB.listed,
            onClick: () => {
              MB((() => UB.c.updateShaderPack(kB, {
                packId: CB,
                listed: !ZB.listed
              })))
            },
            children: [(0, iB.jsx)(wB.d, {
              name: ZB.listed ? "eye-slash" : "eye"
            }), " ", GB(ZB.listed ? "shaderPackListing:unlist" : "shaderPackListing:relist")]
          }), !ZB.isBanned && (0, iB.jsxs)(hB.g, {
            disabled: zB,
            onClick: () => {
              WB(!qB)
            },
            children: [(0, iB.jsx)(wB.d, {
              name: "upload"
            }), " ", GB("shaderPackListing:uploadVersion")]
          }), (0, iB.jsxs)(hB.N, {
            disabled: zB || ZB.isBanned,
            onClick: () => {
              !async function() {
                !0 === await OB.NotificationProvider.showPromptPopup({
                  title: "shaderPackListing:deleteTitle",
                  subtitle: "shaderPackListing:deleteSubtitle",
                  confirmText: "general:delete",
                  cancelText: "general:cancel",
                  destructive: !0
                }).getResult() && await MB((() => UB.c.deleteShaderPack(kB, CB)), (() => {
                  vB(`${YB.S}?section=mine`, {
                    replace: !0
                  })
                }))
              }()
            },
            children: [(0, iB.jsx)(wB.d, {
              name: "trash-can"
            }), " ", GB("general:delete")]
          }), jB && (0, iB.jsxs)(hB.N, {
            disabled: zB,
            onClick: () => {
              MB((() => UB.c.setShaderPackBanned(kB, CB, !ZB.isBanned)))
            },
            children: [(0, iB.jsx)(wB.d, {
              name: ZB.isBanned ? "circle-check" : "ban"
            }), " ", ZB.isBanned ? "Unban" : "Ban"]
          })]
        }), qB && (0, iB.jsx)(TB.Suspense, {
          fallback: (0, iB.jsx)(cB.d, {}),
          children: (0, iB.jsx)(pB, {
            existing: {
              packId: CB,
              name: QB,
              description: aB
            },
            onPublished: () => {
              WB(!1), JB()
            }
          })
        })]
      })
    }
    var HB = ZB(82),
      MB = ZB(1956),
      jB = ZB(1343),
      PB = ZB(5186),
      RB = ZB(1258),
      rB = ZB(6737),
      mB = ZB(6735),
      XB = ZB(6745);

    function LB(BB) {
      let {
        item: IB
      } = BB;
      const {
        t: ZB
      } = (0, dB.G)(), [JB] = (0, rB.k)(), [GB, vB] = (0, TB.useState)(JB), [kB, cB] = (0, TB.useState)(!1), [nB, hB] = (0, TB.useState)(!1), {
        s3Url: zB
      } = RB.clientSideServerUrls, {
        width: FB,
        height: NB
      } = oB.r.large, gB = (0, oB.u)(zB, IB, GB, "large"), {
        renderVersion: qB
      } = IB;
      return (0, iB.jsxs)("div", {
        className: "ShaderPackPreviews",
        children: [(0, iB.jsx)(XB.b, {
          selected: GB,
          onSelect: BB => {
            vB(BB), cB(!1)
          },
          imageUrl: BB => (0, oB.u)(zB, IB, BB, "thumb")
        }), (0, iB.jsxs)("div", {
          className: "ShaderPackPreviewStage",
          children: [!kB && (0, iB.jsxs)("button", {
            type: "button",
            className: "ShaderPackPreviewMain",
            title: null === qB ? void 0 : ZB("shaderPackListing:fullSize"),
            disabled: null === qB,
            onClick: () => {
              hB(!0)
            },
            children: [(0, iB.jsx)("img", {
              src: gB,
              width: FB,
              height: NB,
              alt: ZB(YB.eb[GB]),
              draggable: !1
            }), (0, iB.jsx)(mB.b, {
              item: IB
            })]
          }), !kB && null !== qB && (0, iB.jsxs)(lB, {
            side: "Right",
            onClick: () => {
              cB(!0)
            },
            children: [(0, iB.jsx)(wB.d, {
              name: "arrows-left-right"
            }), " ", ZB("shaderPackListing:compare")]
          }), kB && null !== qB && (0, iB.jsx)(fB, {
            item: IB,
            packUrl: gB,
            baselineUrl: (0, oB.n)(zB, qB, GB, "large")
          }), kB && (0, iB.jsx)(lB, {
            side: "Left",
            onClick: () => {
              cB(!1)
            },
            children: ZB("shaderPackListing:withPack")
          }), kB && (0, iB.jsx)(lB, {
            side: "Right",
            onClick: () => {
              cB(!1)
            },
            children: ZB("shaderPackListing:withoutPack")
          })]
        }), nB && (0, iB.jsx)(eB, {
          fullUrl: (0, oB.u)(zB, IB, GB, "full"),
          largeUrl: gB,
          alt: ZB(YB.eb[GB]),
          onClose: () => {
            hB(!1)
          }
        })]
      })
    }

    function eB(BB) {
      let {
        fullUrl: IB,
        largeUrl: ZB,
        alt: JB,
        onClose: oB
      } = BB;
      const GB = (0, TB.useRef)(null);
      return (0, jB.t)("popup", GB, oB), (0, TB.useEffect)((() => {
        function BB(BB) {
          "Escape" === BB.key && (BB.stopPropagation(), oB())
        }
        return window.addEventListener("keydown", BB, !0), () => {
          window.removeEventListener("keydown", BB, !0)
        }
      }), [oB]), (0, HB.createPortal)((0, iB.jsxs)("div", {
        ref: GB,
        className: "ShaderPackFullSize",
        onClick: oB,
        children: [(0, iB.jsx)("img", {
          className: "ShaderPackFullSizeImage",
          src: IB,
          alt: JB,
          draggable: !1,
          style: {
            backgroundImage: `url(${ZB})`
          }
        }), (0, iB.jsx)(hB.l, {
          className: "ShaderPackFullSizeClose",
          onClick: oB
        })]
      }), document.body)
    }
    const uB = 5;

    function fB(BB) {
      let {
        item: IB,
        packUrl: ZB,
        baselineUrl: JB
      } = BB;
      const {
        t: GB
      } = (0, dB.G)(), [vB, kB] = (0, TB.useState)(50), cB = (0, TB.useRef)(!1), nB = (0, TB.useRef)(null), {
        width: hB,
        height: zB
      } = oB.r.large;

      function FB(BB) {
        kB((IB => (0, MB.f)(IB + BB, 0, 100)))
      }

      function NB(BB) {
        const IB = BB.currentTarget.getBoundingClientRect();
        kB((0, MB.f)((BB.clientX - IB.left) / IB.width * 100, 0, 100))
      }
      return (0, PB.f)(nB, {
        adjust: BB => {
          FB(BB * uB)
        },
        setFraction: BB => {
          kB(100 * BB)
        },
        endDrag: () => {}
      }), (0, iB.jsxs)("div", {
        ref: nB,
        className: "ShaderPackCompare",
        "data-pad-slider": "",
        "data-pad-focusable": "",
        role: "slider",
        tabIndex: 0,
        "aria-label": GB("shaderPackListing:compare"),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(vB),
        style: {
          "--split": `${vB}%`
        },
        onKeyDown: function(BB) {
          const IB = "ArrowLeft" === BB.key ? -uB : "ArrowRight" === BB.key ? uB : 0;
          0 !== IB && (BB.preventDefault(), FB(IB))
        },
        onPointerDown: BB => {
          cB.current = !0, BB.currentTarget.setPointerCapture(BB.pointerId), NB(BB)
        },
        onPointerMove: BB => {
          cB.current && NB(BB)
        },
        onPointerUp: () => {
          cB.current = !1
        },
        onPointerCancel: () => {
          cB.current = !1
        },
        children: [(0, iB.jsx)("img", {
          className: "ShaderPackCompareBaseline",
          src: JB,
          width: hB,
          height: zB,
          alt: "",
          draggable: !1,
          style: {
            backgroundImage: `url(${ZB})`
          }
        }), (0, iB.jsx)("div", {
          className: "ShaderPackCompareLine"
        }), (0, iB.jsx)("img", {
          className: "ShaderPackComparePack",
          src: ZB,
          width: hB,
          height: zB,
          alt: "",
          draggable: !1
        }), (0, iB.jsx)(mB.b, {
          item: IB,
          className: "ShaderPackCompareNotice"
        })]
      })
    }

    function lB(BB) {
      let {
        side: IB,
        onClick: ZB,
        children: TB
      } = BB;
      return (0, iB.jsx)("button", {
        type: "button",
        className: `ShaderPackStageButton ${IB}`,
        onClick: ZB,
        children: (0, iB.jsx)("span", {
          className: "ShaderPackStageButtonFace SmallTextBold",
          children: TB
        })
      })
    }
    var AB = ZB(5143),
      tB = ZB(331),
      bB = ZB(6808);
    const xB = {
      compiler: "shaderPack:compilerUnavailable",
      download: "shaderPackListing:useDownloadFailed",
      apiVersion: "shaderPackListing:useOtherApiVersion",
      invalid: "shaderPackListing:useInvalid",
      errors: "shaderPackListing:useFailsHere",
      save: "shaderPack:saveFailed"
    };

    function EB(BB) {
      const {
        userContext: IB
      } = (0, yB.d)(), [JB, oB] = (0, TB.useState)(null), [GB, vB] = (0, TB.useState)(!1), [kB, cB] = (0, TB.useState)(!1), [nB, hB] = (0, TB.useState)(null), zB = null === BB || void 0 === BB ? void 0 : BB.packId, FB = null === BB || void 0 === BB ? void 0 : BB.sourceHash;
      return (0, TB.useEffect)((() => {
        if (vB(!1), hB(null), void 0 === zB) return;
        let BB = !1;
        return Promise.all([(0, WB.hasUsableWebGpuAdapter)(), (0, bB.i)()]).then((IB => {
          let [ZB, TB] = IB;
          var JB;
          BB || (oB(ZB), vB((null === TB || void 0 === TB || null === (JB = TB.listing) || void 0 === JB ? void 0 : JB.packId) === zB && TB.listing.sourceHash === FB))
        })).catch((IB => {
          console.error("Failed to check whether this shader pack can be used", IB), BB || oB(!1)
        })), () => {
          BB = !0
        }
      }), [zB, FB]), {
        webGpuUsable: JB,
        inUse: GB,
        busy: kB,
        errorKey: nB,
        use: () => {
          null !== BB && async function(BB) {
            cB(!0), hB(null);
            try {
              const {
                installListedShaderPack: TB
              } = await Promise.all([ZB.e(78), ZB.e(136), ZB.e(115)]).then((() => ZB(40541))), JB = await TB({
                packId: BB.packId,
                sourceHash: BB.sourceHash,
                name: BB.name,
                ownerName: BB.ownerName,
                description: BB.description
              });
              if ("failed" === JB.kind) return void hB(xB[JB.reason]);
              vB(!0), UB.c.recordShaderPackDownload(IB, BB.packId).catch((BB => {
                console.error("Failed to count a shader pack's download", BB)
              })), (0, AB.m)()
            } catch (TB) {
              console.error("Failed to use the shader pack", TB), hB("shaderPack:unexpectedError")
            } finally {
              cB(!1)
            }
          }(BB)
        }
      }
    }

    function DB(BB) {
      let {
        packUse: IB
      } = BB;
      const {
        t: ZB
      } = (0, dB.G)(), {
        webGpuUsable: TB,
        inUse: JB,
        busy: oB,
        errorKey: GB,
        use: vB
      } = IB;
      return (0, iB.jsxs)("div", {
        className: "ShaderPackUse",
        children: [(0, iB.jsxs)(hB.p, {
          disabled: !0 !== TB || JB,
          loading: oB,
          onClick: vB,
          children: [(0, iB.jsx)(wB.d, {
            name: JB ? "check" : "download"
          }), " ", ZB(JB ? "shaderPackListing:inUse" : "shaderPackListing:use")]
        }), !1 === TB && (0, iB.jsx)("div", {
          className: "ShaderPackUseNote",
          children: ZB((0, tB.l)() ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), GB && (0, iB.jsx)("div", {
          className: "ShaderPackUseNote Error",
          children: ZB(GB)
        })]
      })
    }

    function KB() {
      var BB;
      const {
        t: IB
      } = (0, dB.G)(), ZB = (0, nB.useNavigatePreserveSearch)(), {
        packId: oB
      } = (0, JB.B)(), {
        userContext: GB,
        isUserContextUpdating: vB
      } = (0, yB.d)(), [zB, NB] = (0, TB.useState)(null), [gB, WB] = (0, TB.useState)(null), [CB, QB] = (0, TB.useState)(0), sB = (0, TB.useRef)(0);

      function wB() {
        var BB;
        null !== (BB = (0, nB.getPreviousLocation)()) && void 0 !== BB && BB.startsWith(YB.S) ? ZB(-1) : ZB(YB.S)
      }(0, qB.e)(wB), (0, rB.d)(), (0, TB.useEffect)((() => {
        if (vB || void 0 === oB) return;
        const BB = ++sB.current;
        WB(null), UB.c.getShaderPack(GB, oB).then((IB => {
          sB.current === BB && NB(IB)
        })).catch((IB => {
          sB.current === BB && (console.error("Failed to get the shader pack", IB), NB(null), WB({
            error: IB
          }))
        }))
      }), [oB, GB, vB, CB]);
      const OB = () => {
          QB((BB => BB + 1))
        },
        pB = (null === zB || void 0 === zB ? void 0 : zB.packId) === oB ? zB : null,
        HB = (0, rB.l)(),
        MB = EB(null !== (BB = null === pB || void 0 === pB ? void 0 : pB.live) && void 0 !== BB ? BB : null),
        jB = null !== pB && void 0 !== pB && pB.live ? (0, iB.jsx)(VB, {
          item: pB.live,
          favourites: HB,
          packUse: MB
        }) : null;
      return (0, iB.jsxs)("article", {
        className: "ShaderPackInformation AnimFadeIn",
        children: [null !== pB && (0, iB.jsx)(FB.c, {
          meta: (0, kB.ab)(pB.name)
        }), (0, iB.jsx)(hB.c, {
          onClick: wB,
          children: IB("shaderPackListing:backToPacks")
        }), null === pB && null === gB && (0, iB.jsx)("div", {
          className: "ShaderPackInformationMessage",
          children: (0, iB.jsx)(cB.d, {})
        }), null !== gB && (0, iB.jsxs)("div", {
          className: "ShaderPackInformationMessage",
          children: [(0, YB.x)(gB.error, IB, "shaderPackListing:loadPackFailed"), (0, iB.jsx)(hB.g, {
            onClick: OB,
            children: IB("general:tryAgain")
          })]
        }), null !== pB && null === gB && (0, iB.jsxs)("div", {
          className: "ShaderPackInformationBody",
          children: [(0, iB.jsxs)("header", {
            className: "ShaderPackInformationHeader",
            children: [(0, iB.jsx)("h1", {
              className: "FullyFancyText",
              children: pB.name
            }), jB]
          }), pB.live && (0, iB.jsx)(LB, {
            item: pB.live
          }), pB.live && (0, iB.jsx)(SB, {
            item: pB.live,
            ownerPreview: pB.ownerPreview,
            bloxdhubSlug: pB.bloxdhubSlug,
            actions: jB
          }), pB.owner && (0, iB.jsx)(aB, {
            details: pB,
            owner: pB.owner,
            onChanged: OB
          })]
        })]
      })
    }

    function VB(BB) {
      let {
        item: IB,
        favourites: ZB,
        packUse: TB
      } = BB;
      const JB = ZB.isFavourite(IB.packId);
      return (0, iB.jsxs)("div", {
        className: "ShaderPackInformationActions",
        children: [WB.featureFlags.settings.canUseShaderPacks && (0, iB.jsx)(DB, {
          packUse: TB
        }), (0, iB.jsx)(hB.w, {
          className: "ShaderPackInformationLike",
          onClick: () => {
            ZB.toggle(IB.packId)
          },
          isLiked: !0 === JB,
          isLoading: null === JB
        })]
      })
    }

    function SB(BB) {
      let {
        item: IB,
        ownerPreview: ZB,
        bloxdhubSlug: TB,
        actions: JB
      } = BB;
      const {
        t: vB
      } = (0, dB.G)(), kB = (0, gB.r)(), cB = null === TB ? null : (0, oB.f)(TB);
      return (0, iB.jsxs)("div", {
        className: "ShaderPackFacts",
        children: [IB.description && (0, iB.jsx)("p", {
          className: "ShaderPackDescription",
          children: IB.description
        }), (0, iB.jsxs)("div", {
          className: "ShaderPackFeatureList",
          children: [(null !== ZB || null !== cB) && (0, iB.jsx)("div", {
            className: "ShaderPackAuthor",
            children: null !== ZB ? (0, iB.jsxs)(iB.Fragment, {
              children: [(0, iB.jsx)(NB.f, {
                playerSocialPreview: ZB,
                showLocation: !1,
                linkToProfile: !0
              }), null !== cB && (0, iB.jsx)("a", {
                className: "ShaderPackBloxdhubLogo",
                href: cB,
                target: "_blank",
                rel: "noopener noreferrer",
                children: (0, iB.jsx)("img", {
                  src: CB,
                  alt: oB.d
                })
              })]
            }) : (0, iB.jsxs)("a", {
              className: "ShaderPackBloxdhubName",
              href: cB,
              target: "_blank",
              rel: "noopener noreferrer",
              children: [oB.d, (0, iB.jsx)("img", {
                src: CB,
                alt: ""
              })]
            })
          }), YB.y.filter((BB => IB.features.includes(BB))).map((BB => (0, iB.jsx)(nB.LinkPreserveSearch, {
            className: "ShaderPackFeature",
            to: (0, YB.J)(BB),
            children: vB(YB.K[BB])
          }, BB)))]
        }), JB, (0, iB.jsxs)("dl", {
          className: "ShaderPackFactList",
          children: [(0, iB.jsxs)("div", {
            children: [(0, iB.jsx)("dt", {
              children: vB("shaderPackListing:downloads")
            }), (0, iB.jsx)("dd", {
              children: (0, GB.J)(IB.downloads)
            })]
          }), (0, iB.jsx)(BI, {
            label: vB("shaderPackListing:updated"),
            time: IB.listedUpdatedAt,
            now: kB
          }), (0, iB.jsx)(BI, {
            label: vB("shaderPackListing:created"),
            time: IB.publishedAt,
            now: kB
          }), null !== IB.gpuCost && (0, iB.jsxs)("div", {
            children: [(0, iB.jsx)("dt", {
              children: vB("shaderPackListing:lag")
            }), (0, iB.jsx)("dd", {
              children: vB("shaderPackListing:lagPercent", {
                percent: String((0, YB.R)(IB.gpuCost))
              })
            })]
          }), (0, iB.jsxs)("div", {
            children: [(0, iB.jsx)("dt", {
              children: vB("shaderPackListing:size")
            }), (0, iB.jsx)("dd", {
              children: vB("shaderPackListing:sizeValue", {
                kilobytes: String((0, YB.O)(IB.sourceBytes))
              })
            })]
          }), (0, iB.jsxs)("div", {
            children: [(0, iB.jsx)("dt", {
              children: vB("shaderPackListing:files")
            }), (0, iB.jsx)("dd", {
              children: IB.fileCount
            })]
          })]
        })]
      })
    }

    function BI(BB) {
      let {
        label: IB,
        time: ZB,
        now: TB
      } = BB;
      const {
        t: JB,
        selectedLanguage: oB
      } = (0, dB.G)(), GB = new Date(ZB);
      let kB = GB.toLocaleDateString();
      if (TB - ZB <= 30 * vB.l) {
        const BB = (0, dB.o)(oB.code, "shaderPackListing:timeAgo");
        kB = JB("shaderPackListing:timeAgo", {
          time: (0, vB.hb)(BB, ZB, TB)
        })
      }
      return (0, iB.jsx)(zB.e, {
        tooltipInner: GB.toLocaleString(),
        children: (0, iB.jsxs)("div", {
          children: [(0, iB.jsx)("dt", {
            children: IB
          }), (0, iB.jsx)("dd", {
            children: kB
          })]
        })
      })
    }
  },
  5177: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => GB
    });
    var TB = ZB(1091),
      JB = ZB.n(TB),
      oB = ZB(1153);

    function GB(BB) {
      let {
        options: IB,
        value: ZB,
        onChange: TB,
        ariaLabel: GB,
        className: vB,
        reselectable: kB = !1,
        keepsFocus: cB = !1,
        padTabs: nB
      } = BB;
      const hB = void 0 !== nB;
      return (0, oB.jsx)("div", {
        className: JB()("SegmentedToggle", vB),
        role: "group",
        "aria-label": GB,
        "data-pad-tabs": nB,
        children: IB.map((BB => {
          const IB = BB.value === ZB;
          return (0, oB.jsx)("button", {
            type: "button",
            "aria-pressed": IB,
            "data-pad-tab": hB || void 0,
            "data-pad-selected": hB && IB ? "true" : void 0,
            "data-pad-default-focus": hB && IB || void 0,
            "aria-label": BB.ariaLabel,
            title: BB.ariaLabel,
            className: JB()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: IB
            }),
            onMouseDown: cB ? BB => {
              BB.preventDefault()
            } : void 0,
            onClick: () => {
              IB && !kB || TB(BB.value)
            },
            children: BB.label
          }, BB.value)
        }))
      })
    }
  },
  5186: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => oB,
      f: () => GB
    });
    var TB = ZB(63);
    const JB = new WeakMap,
      oB = BB => {
        var IB;
        const ZB = BB.closest("[data-pad-slider]");
        return ZB && null !== (IB = JB.get(ZB)) && void 0 !== IB ? IB : null
      },
      GB = (BB, IB) => {
        const ZB = (0, TB.useRef)(IB);
        ZB.current = IB, (0, TB.useEffect)((() => {
          if (BB.current) return ((BB, IB) => (JB.set(BB, IB), () => {
            JB.get(BB) === IB && JB.delete(BB)
          }))(BB.current, {
            adjust: BB => {
              ZB.current.adjust(BB)
            },
            setFraction: BB => {
              ZB.current.setFraction(BB)
            },
            endDrag: () => {
              ZB.current.endDrag()
            }
          })
        }), [BB])
      }
  },
  6808: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => JB,
      i: () => oB
    });
    var TB = ZB(36);
    const JB = "shaderPack";
    async function oB() {
      var BB;
      let IB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (BB = await TB.i.getItem(JB, IB)) && void 0 !== BB ? BB : null
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);