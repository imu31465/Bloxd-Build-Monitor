export const id = 126;
export const ids = [126];
export const modules = {
  5480: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => pB,
      d: () => AB,
      f: () => qB,
      g: () => WB
    });
    var YB = GB(56),
      DB = GB(5486),
      QB = GB(4777),
      oB = GB(1405),
      jB = GB(5512),
      yB = GB(1090),
      JB = GB.n(yB),
      MB = GB(1400),
      PB = GB(1822),
      zB = GB(5515),
      lB = GB(1282);

    function pB(BB) {
      let {
        label: OB,
        onClick: GB,
        checked: YB,
        circleInfoText: DB,
        className: jB,
        disabled: yB,
        note: MB
      } = BB;
      return (0, lB.jsxs)("div", {
        "aria-disabled": yB || void 0,
        "data-pad-focusable": !0,
        className: JB()("SettingBox CheckboxContainer", {
          [jB]: jB,
          SettingBoxDisabled: yB
        }),
        onClick: () => {
          yB || GB(!YB)
        },
        children: [(0, lB.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, lB.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, lB.jsx)(QB.e, {
              className: "SettingsCheckbox",
              checked: YB,
              disabled: yB,
              onChange: () => {}
            })
          }), (0, lB.jsxs)("div", {
            className: "CheckboxText",
            children: [OB, DB && (0, lB.jsx)("span", {
              onClick: BB => BB.stopPropagation(),
              children: (0, lB.jsx)(oB.c, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: DB
              })
            })]
          })]
        }), MB && (0, lB.jsx)("div", {
          className: "SettingNote",
          children: MB
        })]
      })
    }

    function qB(BB) {
      let {
        name: OB,
        onChange: GB,
        min: DB,
        max: QB,
        step: jB,
        initValue: yB,
        circleInfoText: MB,
        format: PB,
        className: zB,
        padStep: pB,
        disabled: qB = !1,
        selectableMax: ZB,
        cappedNote: NB,
        note: WB,
        onChangeComplete: AB
      } = BB;
      const [VB, SB] = (0, YB.useState)(yB), nB = (0, YB.useRef)(yB);
      (0, YB.useEffect)((() => {
        nB.current = yB, SB(yB)
      }), [yB]);
      const UB = void 0 !== ZB && ZB < QB,
        fB = UB ? {
          "--slider-selectable": (ZB - DB) / (QB - DB)
        } : void 0,
        kB = UB && NB ? NB : WB;
      return (0, lB.jsxs)("div", {
        className: JB()("SettingBox SettingsSliderDiv", {
          [zB]: zB,
          SettingBoxDisabled: qB,
          SliderCapped: UB
        }),
        style: fB,
        children: [(0, lB.jsxs)("div", {
          className: "SliderText",
          children: [`${OB}: ${PB?PB(VB):VB}`, MB && (0, lB.jsx)(oB.c, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: MB
          })]
        }), (0, lB.jsx)("div", {
          className: "SliderDiv",
          children: (0, lB.jsx)(RB, {
            value: VB,
            min: DB,
            max: QB,
            step: jB,
            onChange: BB => {
              if (UB && BB >= ZB && VB === ZB) return;
              const OB = UB ? Math.min(BB, ZB) : BB;
              nB.current = OB, SB(OB), GB(OB)
            },
            onChangeComplete: AB && (() => {
              AB(nB.current)
            }),
            format: PB,
            padStep: pB,
            disabled: qB
          })
        }), kB && (0, lB.jsx)("div", {
          className: "SettingNote",
          children: kB
        })]
      })
    }
    const ZB = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function NB(BB) {
      var OB;
      return (null !== (OB = String(BB).split(".")[1]) && void 0 !== OB ? OB : "").length
    }

    function RB(BB) {
      let {
        value: OB,
        min: GB,
        max: QB,
        step: oB,
        onChange: jB,
        orientation: yB,
        reverse: JB,
        setIsChanging: MB,
        tooltip: PB,
        labels: pB,
        handleLabel: qB,
        format: RB,
        onChangeStart: WB,
        onChangeComplete: AB,
        padStep: VB,
        disabled: SB = !1
      } = BB;
      const nB = (0, YB.useRef)(null),
        UB = (0, YB.useRef)(null);
      (0, YB.useLayoutEffect)((() => {
        var BB, OB, GB;
        const YB = null !== (BB = null === (OB = nB.current) || void 0 === OB ? void 0 : OB.querySelector(".rangeslider")) && void 0 !== BB ? BB : null;
        null === YB || void 0 === YB || YB.setAttribute("data-pad-slider", ""), null === YB || void 0 === YB || YB.setAttribute("data-pad-focusable", ""), null === YB || void 0 === YB || null === (GB = YB.querySelector(".rangeslider__handle")) || void 0 === GB || GB.setAttribute("data-pad-slider-handle", ""), UB.current = YB
      }), []), (0, YB.useLayoutEffect)((() => {
        var BB, OB;
        SB ? null === (BB = UB.current) || void 0 === BB || BB.setAttribute("aria-disabled", "true") : null === (OB = UB.current) || void 0 === OB || OB.removeAttribute("aria-disabled")
      }), [SB]);
      const fB = Math.max(NB(oB), NB(GB)),
        kB = BB => {
          if (BB >= QB) return QB;
          if (BB <= GB) return GB;
          const OB = Number((Math.round((BB - GB) / oB) * oB + GB).toFixed(fB));
          return Math.min(QB, Math.max(GB, OB))
        },
        dB = (0, YB.useRef)(AB);
      dB.current = AB, (0, YB.useEffect)((() => {
        const BB = nB.current;
        if (!BB) return;
        const OB = BB => {
          var OB;
          ZB.has(BB.key) && (null === (OB = dB.current) || void 0 === OB || OB.call(dB))
        };
        return BB.addEventListener("keyup", OB), () => {
          BB.removeEventListener("keyup", OB)
        }
      }), []);
      const KB = (0, YB.useRef)(!1);
      return (0, zB.e)(UB, {
        adjust: BB => {
          if (SB) return;
          const YB = null !== VB && void 0 !== VB ? VB : Math.max(oB, Math.round((QB - GB) / 20 / oB) * oB),
            DB = kB(OB + BB * YB * (JB ? -1 : 1));
          DB !== OB && (null === WB || void 0 === WB || WB(), jB(DB), null === AB || void 0 === AB || AB())
        },
        setFraction: BB => {
          if (SB) return;
          const YB = kB(GB + (JB ? 1 - BB : BB) * (QB - GB));
          YB !== OB && (KB.current || (KB.current = !0, null === WB || void 0 === WB || WB()), jB(YB))
        },
        endDrag: () => {
          KB.current && (KB.current = !1, null === AB || void 0 === AB || AB())
        }
      }), (0, lB.jsx)("div", {
        ref: nB,
        style: {
          display: "contents"
        },
        children: (0, lB.jsx)(DB.b, {
          value: OB,
          min: GB,
          max: QB,
          step: oB,
          onChange: BB => {
            jB(kB(BB))
          },
          orientation: yB,
          reverse: JB,
          tooltip: PB,
          labels: pB,
          handleLabel: qB,
          format: RB,
          onChangeStart: () => {
            null === WB || void 0 === WB || WB(), null === MB || void 0 === MB || MB(!0)
          },
          onChangeComplete: () => {
            null === MB || void 0 === MB || MB(!1), null === AB || void 0 === AB || AB()
          }
        })
      })
    }
    async function WB() {
      const BB = MB.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await BB.getResult() && (0, PB.reloadBloxd)()
    }

    function AB(BB) {
      let {
        label: OB,
        options: GB,
        value: YB,
        onChange: DB,
        circleInfoText: QB
      } = BB;
      return (0, lB.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, lB.jsxs)("div", {
          className: "SliderText",
          children: [OB, QB && (0, lB.jsx)(oB.c, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: QB
          })]
        }), (0, lB.jsx)(jB.c, {
          ariaLabel: OB,
          options: GB,
          value: YB,
          onChange: DB
        })]
      })
    }
  },
  7204: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      default: () => sB
    });
    var YB = GB(56),
      DB = GB(1571),
      QB = GB(7107),
      oB = GB(1217),
      jB = GB(353),
      yB = GB(1591),
      JB = GB(1375),
      MB = GB(1560),
      PB = GB(1485),
      zB = GB(1405),
      lB = GB(1675),
      pB = GB(2874),
      qB = GB(3004),
      ZB = GB(4967),
      NB = GB(1112),
      RB = GB(1540),
      WB = GB(92),
      AB = GB(1175);
    const VB = GB.p + "static/media/bloxdhubLogo.6a6c367af2ad6e6f1eb3.webp";
    var SB = GB(1090),
      nB = GB.n(SB),
      UB = GB(1383),
      fB = GB(1400),
      kB = GB(7099),
      dB = GB(1282);
    const KB = (0, YB.lazy)((() => Promise.all([GB.e(120), GB.e(89), GB.e(149), GB.e(148), GB.e(127), GB.e(706)]).then((() => GB(7139))).then((BB => ({
      default: BB.ShaderPackPublishForm
    })))));

    function uB(BB) {
      let {
        details: OB,
        owner: GB,
        onChanged: DB
      } = BB;
      const {
        t: oB
      } = (0, AB.H)(), jB = (0, MB.useNavigatePreserveSearch)(), {
        userContext: yB
      } = (0, NB.d)(), [zB, lB] = (0, YB.useState)(!1), [pB, qB] = (0, YB.useState)(null), [ZB, WB] = (0, YB.useState)(!1), {
        packId: VB,
        name: SB,
        description: uB,
        live: mB
      } = OB;
      async function IB(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DB;
        lB(!0), qB(null);
        try {
          await BB(), OB()
        } catch (GB) {
          console.error("Failed to change a shader pack", GB), qB((0, kB.u)(GB, oB, "shaderPackListing:ownerActionFailed"))
        } finally {
          lB(!1)
        }
      }
      const FB = (0, kB.p)(yB);
      return (0, dB.jsxs)("section", {
        className: "ShaderPackOwnerPanel",
        children: [(0, dB.jsx)("h2", {
          className: "ShaderPackSectionTitle",
          children: oB("general:manage")
        }), (0, kB.X)(GB, !(null === mB || void 0 === mB || !mB.renderId), Date.now(), oB).map((BB => (0, dB.jsxs)("div", {
          className: nB()("ShaderPackOwnerNotice", {
            Warning: "warning" === BB.tone
          }),
          children: [(0, dB.jsx)(UB.b, {
            name: "warning" === BB.tone ? "triangle-exclamation" : "circle-info"
          }), (0, dB.jsxs)("div", {
            children: [BB.text, BB.detail && (0, dB.jsx)("pre", {
              className: "ShaderPackOwnerNoticeDetail",
              children: BB.detail
            })]
          })]
        }, BB.text))), OB.ban && (0, dB.jsxs)("div", {
          className: "ShaderPackOwnerNotice Warning",
          children: [(0, dB.jsx)(UB.b, {
            name: "ban"
          }), (0, dB.jsxs)("div", {
            children: ["Banned by ", OB.ban.byName, " on ", new Date(OB.ban.at).toLocaleString()]
          })]
        }), pB && (0, dB.jsx)("div", {
          className: "ShaderPackOwnerError",
          children: pB
        }), (0, dB.jsxs)("div", {
          className: "ShaderPackOwnerActions",
          children: [(0, dB.jsxs)(PB.Z, {
            disabled: zB,
            onClick: () => {
              !async function() {
                const BB = await fB.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:renameTitle",
                  initialValue: SB,
                  maxLength: QB.B,
                  submitText: "general:save",
                  validate: BB => BB.trim().length < QB.E ? oB("shaderPackListing:nameTooShort", {
                    min: String(QB.E)
                  }) : null
                }).getResult();
                "notificationTornDown" !== BB && "submit" === (null === BB || void 0 === BB ? void 0 : BB.type) && BB.value.trim() !== SB && await IB((() => RB.b.updateShaderPack(yB, {
                  packId: VB,
                  name: BB.value.trim()
                })))
              }()
            },
            children: [(0, dB.jsx)(UB.b, {
              name: "pen"
            }), " ", oB("shaderPackListing:rename")]
          }), (0, dB.jsxs)(PB.Z, {
            disabled: zB,
            onClick: () => {
              !async function() {
                const BB = await fB.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:editDescription",
                  initialValue: uB,
                  maxLength: QB.r,
                  multiline: !0,
                  allowEmptySubmit: !0,
                  submitText: "general:save"
                }).getResult();
                "notificationTornDown" !== BB && "submit" === (null === BB || void 0 === BB ? void 0 : BB.type) && BB.value.trim() !== uB && await IB((() => RB.b.updateShaderPack(yB, {
                  packId: VB,
                  description: BB.value.trim()
                })))
              }()
            },
            children: [(0, dB.jsx)(UB.b, {
              name: "file-lines"
            }), " ", oB("shaderPackListing:editDescription")]
          }), (0, dB.jsxs)(PB.Z, {
            disabled: zB || GB.isBanned && !GB.listed,
            onClick: () => {
              IB((() => RB.b.updateShaderPack(yB, {
                packId: VB,
                listed: !GB.listed
              })))
            },
            children: [(0, dB.jsx)(UB.b, {
              name: GB.listed ? "eye-slash" : "eye"
            }), " ", oB(GB.listed ? "shaderPackListing:unlist" : "shaderPackListing:relist")]
          }), !GB.isBanned && (0, dB.jsxs)(PB.f, {
            disabled: zB,
            onClick: () => {
              WB(!ZB)
            },
            children: [(0, dB.jsx)(UB.b, {
              name: "upload"
            }), " ", oB("shaderPackListing:uploadVersion")]
          }), (0, dB.jsxs)(PB.R, {
            disabled: zB || GB.isBanned,
            onClick: () => {
              !async function() {
                !0 === await fB.NotificationProvider.showPromptPopup({
                  title: "shaderPackListing:deleteTitle",
                  subtitle: "shaderPackListing:deleteSubtitle",
                  confirmText: "general:delete",
                  cancelText: "general:cancel",
                  destructive: !0
                }).getResult() && await IB((() => RB.b.deleteShaderPack(yB, VB)), (() => {
                  jB(`${kB.V}?section=mine`, {
                    replace: !0
                  })
                }))
              }()
            },
            children: [(0, dB.jsx)(UB.b, {
              name: "trash-can"
            }), " ", oB("general:delete")]
          }), FB && (0, dB.jsxs)(PB.R, {
            disabled: zB,
            onClick: () => {
              IB((() => RB.b.setShaderPackBanned(yB, VB, !GB.isBanned)))
            },
            children: [(0, dB.jsx)(UB.b, {
              name: GB.isBanned ? "circle-check" : "ban"
            }), " ", GB.isBanned ? "Unban" : "Ban"]
          })]
        }), ZB && (0, dB.jsx)(YB.Suspense, {
          fallback: (0, dB.jsx)(JB.b, {}),
          children: (0, dB.jsx)(KB, {
            existing: {
              packId: VB,
              name: SB,
              description: uB
            },
            onPublished: () => {
              WB(!1), DB()
            }
          })
        })]
      })
    }
    var mB = GB(70),
      IB = GB(1998),
      FB = GB(1268),
      iB = GB(5515),
      LB = GB(1186),
      gB = GB(7116),
      rB = GB(7113),
      XB = GB(7125);

    function wB(BB) {
      let {
        item: OB
      } = BB;
      const {
        t: GB
      } = (0, AB.H)(), [DB] = (0, gB.i)(), [oB, jB] = (0, YB.useState)(DB), [yB, JB] = (0, YB.useState)(!1), [MB, PB] = (0, YB.useState)(!1), {
        s3Url: zB
      } = LB.clientSideServerUrls, {
        width: lB,
        height: pB
      } = QB.t.large, qB = (0, QB.x)(zB, OB, oB, "large"), {
        renderVersion: ZB
      } = OB;
      return (0, dB.jsxs)("div", {
        className: "ShaderPackPreviews",
        children: [(0, dB.jsx)(XB.b, {
          selected: oB,
          onSelect: BB => {
            jB(BB), JB(!1)
          },
          imageUrl: BB => (0, QB.x)(zB, OB, BB, "thumb")
        }), (0, dB.jsxs)("div", {
          className: "ShaderPackPreviewStage",
          children: [!yB && (0, dB.jsxs)("button", {
            type: "button",
            className: "ShaderPackPreviewMain",
            title: null === ZB ? void 0 : GB("shaderPackListing:fullSize"),
            disabled: null === ZB,
            onClick: () => {
              PB(!0)
            },
            children: [(0, dB.jsx)("img", {
              src: qB,
              width: lB,
              height: pB,
              alt: GB(kB.hb[oB]),
              draggable: !1
            }), (0, dB.jsx)(rB.b, {
              item: OB
            })]
          }), !yB && null !== ZB && (0, dB.jsxs)(aB, {
            side: "Right",
            onClick: () => {
              JB(!0)
            },
            children: [(0, dB.jsx)(UB.b, {
              name: "arrows-left-right"
            }), " ", GB("shaderPackListing:compare")]
          }), yB && null !== ZB && (0, dB.jsx)(hB, {
            item: OB,
            packUrl: qB,
            baselineUrl: (0, QB.q)(zB, ZB, oB, "large")
          }), yB && (0, dB.jsx)(aB, {
            side: "Left",
            onClick: () => {
              JB(!1)
            },
            children: GB("shaderPackListing:withPack")
          }), yB && (0, dB.jsx)(aB, {
            side: "Right",
            onClick: () => {
              JB(!1)
            },
            children: GB("shaderPackListing:withoutPack")
          })]
        }), MB && (0, dB.jsx)(EB, {
          fullUrl: (0, QB.x)(zB, OB, oB, "full"),
          largeUrl: qB,
          alt: GB(kB.hb[oB]),
          onClose: () => {
            PB(!1)
          }
        })]
      })
    }

    function EB(BB) {
      let {
        fullUrl: OB,
        largeUrl: GB,
        alt: DB,
        onClose: QB
      } = BB;
      const oB = (0, YB.useRef)(null);
      return (0, FB.v)("popup", oB, QB), (0, YB.useEffect)((() => {
        function BB(BB) {
          "Escape" === BB.key && (BB.stopPropagation(), QB())
        }
        return window.addEventListener("keydown", BB, !0), () => {
          window.removeEventListener("keydown", BB, !0)
        }
      }), [QB]), (0, mB.createPortal)((0, dB.jsxs)("div", {
        ref: oB,
        className: "ShaderPackFullSize",
        onClick: QB,
        children: [(0, dB.jsx)("img", {
          className: "ShaderPackFullSizeImage",
          src: OB,
          alt: DB,
          draggable: !1,
          style: {
            backgroundImage: `url(${GB})`
          }
        }), (0, dB.jsx)(PB.m, {
          className: "ShaderPackFullSizeClose",
          onClick: QB
        })]
      }), document.body)
    }
    const cB = 5;

    function hB(BB) {
      let {
        item: OB,
        packUrl: GB,
        baselineUrl: DB
      } = BB;
      const {
        t: oB
      } = (0, AB.H)(), [jB, yB] = (0, YB.useState)(50), JB = (0, YB.useRef)(!1), MB = (0, YB.useRef)(null), {
        width: PB,
        height: zB
      } = QB.t.large;

      function lB(BB) {
        yB((OB => (0, IB.f)(OB + BB, 0, 100)))
      }

      function pB(BB) {
        const OB = BB.currentTarget.getBoundingClientRect();
        yB((0, IB.f)((BB.clientX - OB.left) / OB.width * 100, 0, 100))
      }
      return (0, iB.e)(MB, {
        adjust: BB => {
          lB(BB * cB)
        },
        setFraction: BB => {
          yB(100 * BB)
        },
        endDrag: () => {}
      }), (0, dB.jsxs)("div", {
        ref: MB,
        className: "ShaderPackCompare",
        "data-pad-slider": "",
        "data-pad-focusable": "",
        role: "slider",
        tabIndex: 0,
        "aria-label": oB("shaderPackListing:compare"),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(jB),
        style: {
          "--split": `${jB}%`
        },
        onKeyDown: function(BB) {
          const OB = "ArrowLeft" === BB.key ? -cB : "ArrowRight" === BB.key ? cB : 0;
          0 !== OB && (BB.preventDefault(), lB(OB))
        },
        onPointerDown: BB => {
          JB.current = !0, BB.currentTarget.setPointerCapture(BB.pointerId), pB(BB)
        },
        onPointerMove: BB => {
          JB.current && pB(BB)
        },
        onPointerUp: () => {
          JB.current = !1
        },
        onPointerCancel: () => {
          JB.current = !1
        },
        children: [(0, dB.jsx)("img", {
          className: "ShaderPackCompareBaseline",
          src: DB,
          width: PB,
          height: zB,
          alt: "",
          draggable: !1,
          style: {
            backgroundImage: `url(${GB})`
          }
        }), (0, dB.jsx)("div", {
          className: "ShaderPackCompareLine"
        }), (0, dB.jsx)("img", {
          className: "ShaderPackComparePack",
          src: GB,
          width: PB,
          height: zB,
          alt: "",
          draggable: !1
        }), (0, dB.jsx)(rB.b, {
          item: OB,
          className: "ShaderPackCompareNotice"
        })]
      })
    }

    function aB(BB) {
      let {
        side: OB,
        onClick: GB,
        children: YB
      } = BB;
      return (0, dB.jsx)("button", {
        type: "button",
        className: `ShaderPackStageButton ${OB}`,
        onClick: GB,
        children: (0, dB.jsx)("span", {
          className: "ShaderPackStageButtonFace SmallTextBold",
          children: YB
        })
      })
    }
    var eB = GB(5480),
      TB = GB(320),
      bB = GB(7198);
    const CB = {
      compiler: "shaderPack:compilerUnavailable",
      download: "shaderPackListing:useDownloadFailed",
      apiVersion: "shaderPackListing:useOtherApiVersion",
      invalid: "shaderPackListing:useInvalid",
      errors: "shaderPackListing:useFailsHere",
      save: "shaderPack:saveFailed"
    };

    function HB(BB) {
      const {
        userContext: OB
      } = (0, NB.d)(), [DB, QB] = (0, YB.useState)(null), [oB, jB] = (0, YB.useState)(!1), [yB, JB] = (0, YB.useState)(!1), [MB, PB] = (0, YB.useState)(null), zB = null === BB || void 0 === BB ? void 0 : BB.packId, lB = null === BB || void 0 === BB ? void 0 : BB.sourceHash;
      return (0, YB.useEffect)((() => {
        if (jB(!1), PB(null), void 0 === zB) return;
        let BB = !1;
        return Promise.all([(0, WB.hasUsableWebGpuAdapter)(), (0, bB.e)()]).then((OB => {
          let [GB, YB] = OB;
          var DB;
          BB || (QB(GB), jB((null === YB || void 0 === YB || null === (DB = YB.listing) || void 0 === DB ? void 0 : DB.packId) === zB && YB.listing.sourceHash === lB))
        })).catch((OB => {
          console.error("Failed to check whether this shader pack can be used", OB), BB || QB(!1)
        })), () => {
          BB = !0
        }
      }), [zB, lB]), {
        webGpuUsable: DB,
        inUse: oB,
        busy: yB,
        errorKey: MB,
        use: () => {
          null !== BB && async function(BB) {
            JB(!0), PB(null);
            try {
              const {
                installListedShaderPack: YB
              } = await Promise.all([GB.e(89), GB.e(149), GB.e(128)]).then((() => GB(41498))), DB = await YB({
                packId: BB.packId,
                sourceHash: BB.sourceHash,
                name: BB.name,
                ownerName: BB.ownerName,
                description: BB.description
              });
              if ("failed" === DB.kind) return void PB(CB[DB.reason]);
              jB(!0), RB.b.recordShaderPackDownload(OB, BB.packId).catch((BB => {
                console.error("Failed to count a shader pack's download", BB)
              })), (0, eB.g)()
            } catch (YB) {
              console.error("Failed to use the shader pack", YB), PB("shaderPack:unexpectedError")
            } finally {
              JB(!1)
            }
          }(BB)
        }
      }
    }

    function vB(BB) {
      let {
        packUse: OB
      } = BB;
      const {
        t: GB
      } = (0, AB.H)(), {
        webGpuUsable: YB,
        inUse: DB,
        busy: QB,
        errorKey: oB,
        use: jB
      } = OB;
      return (0, dB.jsxs)("div", {
        className: "ShaderPackUse",
        children: [(0, dB.jsxs)(PB.q, {
          disabled: !0 !== YB || DB,
          loading: QB,
          onClick: jB,
          children: [(0, dB.jsx)(UB.b, {
            name: DB ? "check" : "download"
          }), " ", GB(DB ? "shaderPackListing:inUse" : "shaderPackListing:use")]
        }), !1 === YB && (0, dB.jsx)("div", {
          className: "ShaderPackUseNote",
          children: GB((0, TB.l)() ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), oB && (0, dB.jsx)("div", {
          className: "ShaderPackUseNote Error",
          children: GB(oB)
        })]
      })
    }

    function sB() {
      var BB;
      const {
        t: OB
      } = (0, AB.H)(), GB = (0, MB.useNavigatePreserveSearch)(), {
        packId: QB
      } = (0, DB.A)(), {
        userContext: oB,
        isUserContextUpdating: jB
      } = (0, NB.d)(), [zB, pB] = (0, YB.useState)(null), [qB, WB] = (0, YB.useState)(null), [VB, SB] = (0, YB.useState)(0), nB = (0, YB.useRef)(0);

      function UB() {
        var BB;
        null !== (BB = (0, MB.getPreviousLocation)()) && void 0 !== BB && BB.startsWith(kB.V) ? GB(-1) : GB(kB.V)
      }(0, ZB.e)(UB), (0, gB.c)(), (0, YB.useEffect)((() => {
        if (jB || void 0 === QB) return;
        const BB = ++nB.current;
        WB(null), RB.b.getShaderPack(oB, QB).then((OB => {
          nB.current === BB && pB(OB)
        })).catch((OB => {
          nB.current === BB && (console.error("Failed to get the shader pack", OB), pB(null), WB({
            error: OB
          }))
        }))
      }), [QB, oB, jB, VB]);
      const fB = () => {
          SB((BB => BB + 1))
        },
        KB = (null === zB || void 0 === zB ? void 0 : zB.packId) === QB ? zB : null,
        mB = (0, gB.k)(),
        IB = HB(null !== (BB = null === KB || void 0 === KB ? void 0 : KB.live) && void 0 !== BB ? BB : null),
        FB = null !== KB && void 0 !== KB && KB.live ? (0, dB.jsx)(xB, {
          item: KB.live,
          favourites: mB,
          packUse: IB
        }) : null;
      return (0, dB.jsxs)("article", {
        className: "ShaderPackInformation AnimFadeIn",
        children: [null !== KB && (0, dB.jsx)(lB.d, {
          meta: (0, yB.K)(KB.name)
        }), (0, dB.jsx)(PB.c, {
          onClick: UB,
          children: OB("shaderPackListing:backToPacks")
        }), null === KB && null === qB && (0, dB.jsx)("div", {
          className: "ShaderPackInformationMessage",
          children: (0, dB.jsx)(JB.b, {})
        }), null !== qB && (0, dB.jsxs)("div", {
          className: "ShaderPackInformationMessage",
          children: [(0, kB.u)(qB.error, OB, "shaderPackListing:loadPackFailed"), (0, dB.jsx)(PB.f, {
            onClick: fB,
            children: OB("general:tryAgain")
          })]
        }), null !== KB && null === qB && (0, dB.jsxs)("div", {
          className: "ShaderPackInformationBody",
          children: [(0, dB.jsxs)("header", {
            className: "ShaderPackInformationHeader",
            children: [(0, dB.jsx)("h1", {
              className: "FullyFancyText",
              children: KB.name
            }), FB]
          }), KB.live && (0, dB.jsx)(wB, {
            item: KB.live
          }), KB.live && (0, dB.jsx)(tB, {
            item: KB.live,
            ownerPreview: KB.ownerPreview,
            bloxdhubSlug: KB.bloxdhubSlug,
            actions: FB
          }), KB.owner && (0, dB.jsx)(uB, {
            details: KB,
            owner: KB.owner,
            onChanged: fB
          })]
        })]
      })
    }

    function xB(BB) {
      let {
        item: OB,
        favourites: GB,
        packUse: YB
      } = BB;
      const DB = GB.isFavourite(OB.packId);
      return (0, dB.jsxs)("div", {
        className: "ShaderPackInformationActions",
        children: [WB.featureFlags.settings.canUseShaderPacks && (0, dB.jsx)(vB, {
          packUse: YB
        }), (0, dB.jsx)(PB.z, {
          className: "ShaderPackInformationLike",
          onClick: () => {
            GB.toggle(OB.packId)
          },
          isLiked: !0 === DB,
          isLoading: null === DB
        })]
      })
    }

    function tB(BB) {
      let {
        item: OB,
        ownerPreview: GB,
        bloxdhubSlug: YB,
        actions: DB
      } = BB;
      const {
        t: jB
      } = (0, AB.H)(), yB = (0, qB.s)(), JB = null === YB ? null : (0, QB.h)(YB);
      return (0, dB.jsxs)("div", {
        className: "ShaderPackFacts",
        children: [OB.description && (0, dB.jsx)("p", {
          className: "ShaderPackDescription",
          children: OB.description
        }), (0, dB.jsxs)("div", {
          className: "ShaderPackFeatureList",
          children: [(null !== GB || null !== JB) && (0, dB.jsx)("div", {
            className: "ShaderPackAuthor",
            children: null !== GB ? (0, dB.jsxs)(dB.Fragment, {
              children: [(0, dB.jsx)(pB.g, {
                playerSocialPreview: GB,
                showLocation: !1,
                linkToProfile: !0
              }), null !== JB && (0, dB.jsx)("a", {
                className: "ShaderPackBloxdhubLogo",
                href: JB,
                target: "_blank",
                rel: "noopener noreferrer",
                children: (0, dB.jsx)("img", {
                  src: VB,
                  alt: QB.e
                })
              })]
            }) : (0, dB.jsxs)("a", {
              className: "ShaderPackBloxdhubName",
              href: JB,
              target: "_blank",
              rel: "noopener noreferrer",
              children: [QB.e, (0, dB.jsx)("img", {
                src: VB,
                alt: ""
              })]
            })
          }), kB.x.filter((BB => OB.features.includes(BB))).map((BB => (0, dB.jsx)(MB.LinkPreserveSearch, {
            className: "ShaderPackFeature",
            to: (0, kB.H)(BB),
            children: jB(kB.L[BB])
          }, BB)))]
        }), DB, (0, dB.jsxs)("dl", {
          className: "ShaderPackFactList",
          children: [(0, dB.jsxs)("div", {
            children: [(0, dB.jsx)("dt", {
              children: jB("shaderPackListing:downloads")
            }), (0, dB.jsx)("dd", {
              children: (0, oB.U)(OB.downloads)
            })]
          }), (0, dB.jsx)(BO, {
            label: jB("shaderPackListing:updated"),
            time: OB.listedUpdatedAt,
            now: yB
          }), (0, dB.jsx)(BO, {
            label: jB("shaderPackListing:created"),
            time: OB.publishedAt,
            now: yB
          }), null !== OB.gpuCost && (0, dB.jsxs)("div", {
            children: [(0, dB.jsx)("dt", {
              children: jB("shaderPackListing:lag")
            }), (0, dB.jsx)("dd", {
              children: jB("shaderPackListing:lagPercent", {
                percent: String((0, kB.R)(OB.gpuCost))
              })
            })]
          }), (0, dB.jsxs)("div", {
            children: [(0, dB.jsx)("dt", {
              children: jB("shaderPackListing:size")
            }), (0, dB.jsx)("dd", {
              children: jB("shaderPackListing:sizeValue", {
                kilobytes: String((0, kB.P)(OB.sourceBytes))
              })
            })]
          }), (0, dB.jsxs)("div", {
            children: [(0, dB.jsx)("dt", {
              children: jB("shaderPackListing:files")
            }), (0, dB.jsx)("dd", {
              children: OB.fileCount
            })]
          })]
        })]
      })
    }

    function BO(BB) {
      let {
        label: OB,
        time: GB,
        now: YB
      } = BB;
      const {
        t: DB,
        selectedLanguage: QB
      } = (0, AB.H)(), oB = new Date(GB);
      let yB = oB.toLocaleDateString();
      if (YB - GB <= 30 * jB.g) {
        const BB = (0, AB.s)(QB.code, "shaderPackListing:timeAgo");
        yB = DB("shaderPackListing:timeAgo", {
          time: (0, jB.eb)(BB, GB, YB)
        })
      }
      return (0, dB.jsx)(zB.g, {
        tooltipInner: oB.toLocaleString(),
        children: (0, dB.jsxs)("div", {
          children: [(0, dB.jsx)("dt", {
            children: OB
          }), (0, dB.jsx)("dd", {
            children: yB
          })]
        })
      })
    }
  },
  5512: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => oB
    });
    var YB = GB(1090),
      DB = GB.n(YB),
      QB = GB(1282);

    function oB(BB) {
      let {
        options: OB,
        value: GB,
        onChange: YB,
        ariaLabel: oB,
        className: jB,
        reselectable: yB = !1,
        keepsFocus: JB = !1,
        padTabs: MB
      } = BB;
      const PB = void 0 !== MB;
      return (0, QB.jsx)("div", {
        className: DB()("SegmentedToggle", jB),
        role: "group",
        "aria-label": oB,
        "data-pad-tabs": MB,
        children: OB.map((BB => {
          const OB = BB.value === GB;
          return (0, QB.jsx)("button", {
            type: "button",
            "aria-pressed": OB,
            "data-pad-tab": PB || void 0,
            "data-pad-selected": PB && OB ? "true" : void 0,
            "data-pad-default-focus": PB && OB || void 0,
            "aria-label": BB.ariaLabel,
            title: BB.ariaLabel,
            className: DB()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: OB
            }),
            onMouseDown: JB ? BB => {
              BB.preventDefault()
            } : void 0,
            onClick: () => {
              OB && !yB || YB(BB.value)
            },
            children: BB.label
          }, BB.value)
        }))
      })
    }
  },
  5515: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => QB,
      e: () => oB
    });
    var YB = GB(56);
    const DB = new WeakMap,
      QB = BB => {
        var OB;
        const GB = BB.closest("[data-pad-slider]");
        return GB && null !== (OB = DB.get(GB)) && void 0 !== OB ? OB : null
      },
      oB = (BB, OB) => {
        const GB = (0, YB.useRef)(OB);
        GB.current = OB, (0, YB.useEffect)((() => {
          if (BB.current) return ((BB, OB) => (DB.set(BB, OB), () => {
            DB.get(BB) === OB && DB.delete(BB)
          }))(BB.current, {
            adjust: BB => {
              GB.current.adjust(BB)
            },
            setFraction: BB => {
              GB.current.setFraction(BB)
            },
            endDrag: () => {
              GB.current.endDrag()
            }
          })
        }), [BB])
      }
  },
  7198: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => DB,
      e: () => QB
    });
    var YB = GB(31);
    const DB = "shaderPack";
    async function QB() {
      var BB;
      let OB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (BB = await YB.d.getItem(DB, OB)) && void 0 !== BB ? BB : null
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);