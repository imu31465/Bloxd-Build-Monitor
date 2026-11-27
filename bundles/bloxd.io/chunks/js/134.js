export const id = 134;
export const ids = [134];
export const modules = {
  6037: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => eR,
      g: () => AR,
      i: () => aR,
      m: () => WR
    });
    var yR = GR(66),
      tR = GR(6041),
      uR = GR(5141),
      ZR = GR(1501),
      qR = GR(4250),
      iR = GR(1163),
      fR = GR.n(iR),
      VR = GR(1493),
      KR = GR(1943),
      wR = GR(6063),
      rR = GR(1378);

    function eR(RR) {
      let {
        label: JR,
        onClick: GR,
        checked: yR,
        circleInfoText: tR,
        className: qR,
        disabled: iR,
        note: VR
      } = RR;
      return (0, rR.jsxs)("div", {
        "aria-disabled": iR || void 0,
        "data-pad-focusable": !0,
        className: fR()("SettingBox CheckboxContainer", {
          [qR]: qR,
          SettingBoxDisabled: iR
        }),
        onClick: () => {
          iR || GR(!yR)
        },
        children: [(0, rR.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, rR.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, rR.jsx)(uR.d, {
              className: "SettingsCheckbox",
              checked: yR,
              disabled: iR,
              onChange: () => {}
            })
          }), (0, rR.jsxs)("div", {
            className: "CheckboxText",
            children: [JR, tR && (0, rR.jsx)("span", {
              onClick: RR => RR.stopPropagation(),
              children: (0, rR.jsx)(ZR.e, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: tR
              })
            })]
          })]
        }), VR && (0, rR.jsx)("div", {
          className: "SettingNote",
          children: VR
        })]
      })
    }

    function aR(RR) {
      let {
        name: JR,
        onChange: GR,
        min: tR,
        max: uR,
        step: qR,
        initValue: iR,
        circleInfoText: VR,
        format: KR,
        className: wR,
        padStep: eR,
        disabled: aR = !1,
        selectableMax: LR,
        cappedNote: nR,
        note: WR,
        onChangeComplete: AR
      } = RR;
      const [CR, XR] = (0, yR.useState)(iR), MR = (0, yR.useRef)(iR);
      (0, yR.useEffect)((() => {
        MR.current = iR, XR(iR)
      }), [iR]);
      const BR = void 0 !== LR && LR < uR,
        lR = BR ? {
          "--slider-selectable": (LR - tR) / (uR - tR)
        } : void 0,
        pR = BR && nR ? nR : WR;
      return (0, rR.jsxs)("div", {
        className: fR()("SettingBox SettingsSliderDiv", {
          [wR]: wR,
          SettingBoxDisabled: aR,
          SliderCapped: BR
        }),
        style: lR,
        children: [(0, rR.jsxs)("div", {
          className: "SliderText",
          children: [`${JR}: ${KR?KR(CR):CR}`, VR && (0, rR.jsx)(ZR.e, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: VR
          })]
        }), (0, rR.jsx)("div", {
          className: "SliderDiv",
          children: (0, rR.jsx)(UR, {
            value: CR,
            min: tR,
            max: uR,
            step: qR,
            onChange: RR => {
              if (BR && RR >= LR && CR === LR) return;
              const JR = BR ? Math.min(RR, LR) : RR;
              MR.current = JR, XR(JR), GR(JR)
            },
            onChangeComplete: AR && (() => {
              AR(MR.current)
            }),
            format: KR,
            padStep: eR,
            disabled: aR
          })
        }), pR && (0, rR.jsx)("div", {
          className: "SettingNote",
          children: pR
        })]
      })
    }
    const LR = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function nR(RR) {
      var JR;
      return (null !== (JR = String(RR).split(".")[1]) && void 0 !== JR ? JR : "").length
    }

    function UR(RR) {
      let {
        value: JR,
        min: GR,
        max: uR,
        step: ZR,
        onChange: qR,
        orientation: iR,
        reverse: fR,
        setIsChanging: VR,
        tooltip: KR,
        labels: eR,
        handleLabel: aR,
        format: UR,
        onChangeStart: WR,
        onChangeComplete: AR,
        padStep: CR,
        disabled: XR = !1
      } = RR;
      const MR = (0, yR.useRef)(null),
        BR = (0, yR.useRef)(null);
      (0, yR.useLayoutEffect)((() => {
        var RR, JR, GR;
        const yR = null !== (RR = null === (JR = MR.current) || void 0 === JR ? void 0 : JR.querySelector(".rangeslider")) && void 0 !== RR ? RR : null;
        null === yR || void 0 === yR || yR.setAttribute("data-pad-slider", ""), null === yR || void 0 === yR || yR.setAttribute("data-pad-focusable", ""), null === yR || void 0 === yR || null === (GR = yR.querySelector(".rangeslider__handle")) || void 0 === GR || GR.setAttribute("data-pad-slider-handle", ""), BR.current = yR
      }), []), (0, yR.useLayoutEffect)((() => {
        var RR, JR;
        XR ? null === (RR = BR.current) || void 0 === RR || RR.setAttribute("aria-disabled", "true") : null === (JR = BR.current) || void 0 === JR || JR.removeAttribute("aria-disabled")
      }), [XR]);
      const lR = Math.max(nR(ZR), nR(GR)),
        pR = RR => {
          if (RR >= uR) return uR;
          if (RR <= GR) return GR;
          const JR = Number((Math.round((RR - GR) / ZR) * ZR + GR).toFixed(lR));
          return Math.min(uR, Math.max(GR, JR))
        },
        gR = (0, yR.useRef)(AR);
      gR.current = AR, (0, yR.useEffect)((() => {
        const RR = MR.current;
        if (!RR) return;
        const JR = RR => {
          var JR;
          LR.has(RR.key) && (null === (JR = gR.current) || void 0 === JR || JR.call(gR))
        };
        return RR.addEventListener("keyup", JR), () => {
          RR.removeEventListener("keyup", JR)
        }
      }), []);
      const bR = (0, yR.useRef)(!1);
      return (0, wR.i)(BR, {
        adjust: RR => {
          if (XR) return;
          const yR = null !== CR && void 0 !== CR ? CR : Math.max(ZR, Math.round((uR - GR) / 20 / ZR) * ZR),
            tR = pR(JR + RR * yR * (fR ? -1 : 1));
          tR !== JR && (null === WR || void 0 === WR || WR(), qR(tR), null === AR || void 0 === AR || AR())
        },
        setFraction: RR => {
          if (XR) return;
          const yR = pR(GR + (fR ? 1 - RR : RR) * (uR - GR));
          yR !== JR && (bR.current || (bR.current = !0, null === WR || void 0 === WR || WR()), qR(yR))
        },
        endDrag: () => {
          bR.current && (bR.current = !1, null === AR || void 0 === AR || AR())
        }
      }), (0, rR.jsx)("div", {
        ref: MR,
        style: {
          display: "contents"
        },
        children: (0, rR.jsx)(tR.b, {
          value: JR,
          min: GR,
          max: uR,
          step: ZR,
          onChange: RR => {
            qR(pR(RR))
          },
          orientation: iR,
          reverse: fR,
          tooltip: KR,
          labels: eR,
          handleLabel: aR,
          format: UR,
          onChangeStart: () => {
            null === WR || void 0 === WR || WR(), null === VR || void 0 === VR || VR(!0)
          },
          onChangeComplete: () => {
            null === VR || void 0 === VR || VR(!1), null === AR || void 0 === AR || AR()
          }
        })
      })
    }
    async function WR() {
      const RR = VR.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await RR.getResult() && (0, KR.reloadBloxd)()
    }

    function AR(RR) {
      let {
        label: JR,
        options: GR,
        value: yR,
        onChange: tR,
        circleInfoText: uR
      } = RR;
      return (0, rR.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, rR.jsxs)("div", {
          className: "SliderText",
          children: [JR, uR && (0, rR.jsx)(ZR.e, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: uR
          })]
        }), (0, rR.jsx)(qR.c, {
          ariaLabel: JR,
          options: GR,
          value: yR,
          onChange: tR
        })]
      })
    }
  },
  7808: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      default: () => TR
    });
    var yR = GR(66),
      tR = GR(1677),
      uR = GR(7702),
      ZR = GR(1317),
      qR = GR(377),
      iR = GR(1701),
      fR = GR(1465),
      VR = GR(1663),
      KR = GR(1590),
      wR = GR(1501),
      rR = GR(1778),
      eR = GR(3713),
      aR = GR(3848),
      LR = GR(5361),
      nR = GR(1196),
      UR = GR(1647),
      WR = GR(103),
      AR = GR(1270);
    const CR = GR.p + "static/media/bloxdhubLogo.6a6c367af2ad6e6f1eb3.webp";
    var XR = GR(1163),
      MR = GR.n(XR),
      BR = GR(1468),
      lR = GR(1493),
      pR = GR(7697),
      gR = GR(1378);
    const bR = (0, yR.lazy)((() => Promise.all([GR.e(128), GR.e(91), GR.e(157), GR.e(156), GR.e(135), GR.e(715)]).then((() => GR(7736))).then((RR => ({
      default: RR.ShaderPackPublishForm
    })))));

    function vR(RR) {
      let {
        details: JR,
        owner: GR,
        onChanged: tR
      } = RR;
      const {
        t: ZR
      } = (0, AR.A)(), qR = (0, VR.useNavigatePreserveSearch)(), {
        userContext: iR
      } = (0, nR.d)(), [wR, rR] = (0, yR.useState)(!1), [eR, aR] = (0, yR.useState)(null), [LR, WR] = (0, yR.useState)(!1), {
        packId: CR,
        name: XR,
        description: vR,
        live: OR
      } = JR;
      async function xR(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tR;
        rR(!0), aR(null);
        try {
          await RR(), JR()
        } catch (GR) {
          console.error("Failed to change a shader pack", GR), aR((0, pR.F)(GR, ZR, "shaderPackListing:ownerActionFailed"))
        } finally {
          rR(!1)
        }
      }
      const NR = (0, pR.x)(iR);
      return (0, gR.jsxs)("section", {
        className: "ShaderPackOwnerPanel",
        children: [(0, gR.jsx)("h2", {
          className: "ShaderPackSectionTitle",
          children: ZR("general:manage")
        }), (0, pR._)(GR, !(null === OR || void 0 === OR || !OR.renderId), Date.now(), ZR).map((RR => (0, gR.jsxs)("div", {
          className: MR()("ShaderPackOwnerNotice", {
            Warning: "warning" === RR.tone
          }),
          children: [(0, gR.jsx)(BR.d, {
            name: "warning" === RR.tone ? "triangle-exclamation" : "circle-info"
          }), (0, gR.jsxs)("div", {
            children: [RR.text, RR.detail && (0, gR.jsx)("pre", {
              className: "ShaderPackOwnerNoticeDetail",
              children: RR.detail
            })]
          })]
        }, RR.text))), JR.ban && (0, gR.jsxs)("div", {
          className: "ShaderPackOwnerNotice Warning",
          children: [(0, gR.jsx)(BR.d, {
            name: "ban"
          }), (0, gR.jsxs)("div", {
            children: ["Banned by ", JR.ban.byName, " on ", new Date(JR.ban.at).toLocaleString()]
          })]
        }), eR && (0, gR.jsx)("div", {
          className: "ShaderPackOwnerError",
          children: eR
        }), (0, gR.jsxs)("div", {
          className: "ShaderPackOwnerActions",
          children: [(0, gR.jsxs)(KR.U, {
            disabled: wR,
            onClick: () => {
              !async function() {
                const RR = await lR.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:renameTitle",
                  initialValue: XR,
                  maxLength: uR.w,
                  submitText: "general:save",
                  validate: RR => RR.trim().length < uR.z ? ZR("shaderPackListing:nameTooShort", {
                    min: String(uR.z)
                  }) : null
                }).getResult();
                "notificationTornDown" !== RR && "submit" === (null === RR || void 0 === RR ? void 0 : RR.type) && RR.value.trim() !== XR && await xR((() => UR.c.updateShaderPack(iR, {
                  packId: CR,
                  name: RR.value.trim()
                })))
              }()
            },
            children: [(0, gR.jsx)(BR.d, {
              name: "pen"
            }), " ", ZR("shaderPackListing:rename")]
          }), (0, gR.jsxs)(KR.U, {
            disabled: wR,
            onClick: () => {
              !async function() {
                const RR = await lR.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:editDescription",
                  initialValue: vR,
                  maxLength: uR.q,
                  multiline: !0,
                  allowEmptySubmit: !0,
                  submitText: "general:save"
                }).getResult();
                "notificationTornDown" !== RR && "submit" === (null === RR || void 0 === RR ? void 0 : RR.type) && RR.value.trim() !== vR && await xR((() => UR.c.updateShaderPack(iR, {
                  packId: CR,
                  description: RR.value.trim()
                })))
              }()
            },
            children: [(0, gR.jsx)(BR.d, {
              name: "file-lines"
            }), " ", ZR("shaderPackListing:editDescription")]
          }), (0, gR.jsxs)(KR.U, {
            disabled: wR || GR.isBanned && !GR.listed,
            onClick: () => {
              xR((() => UR.c.updateShaderPack(iR, {
                packId: CR,
                listed: !GR.listed
              })))
            },
            children: [(0, gR.jsx)(BR.d, {
              name: GR.listed ? "eye-slash" : "eye"
            }), " ", ZR(GR.listed ? "shaderPackListing:unlist" : "shaderPackListing:relist")]
          }), !GR.isBanned && (0, gR.jsxs)(KR.g, {
            disabled: wR,
            onClick: () => {
              WR(!LR)
            },
            children: [(0, gR.jsx)(BR.d, {
              name: "upload"
            }), " ", ZR("shaderPackListing:uploadVersion")]
          }), (0, gR.jsxs)(KR.O, {
            disabled: wR || GR.isBanned,
            onClick: () => {
              !async function() {
                !0 === await lR.NotificationProvider.showPromptPopup({
                  title: "shaderPackListing:deleteTitle",
                  subtitle: "shaderPackListing:deleteSubtitle",
                  confirmText: "general:delete",
                  cancelText: "general:cancel",
                  destructive: !0
                }).getResult() && await xR((() => UR.c.deleteShaderPack(iR, CR)), (() => {
                  qR(`${pR.Z}?section=mine`, {
                    replace: !0
                  })
                }))
              }()
            },
            children: [(0, gR.jsx)(BR.d, {
              name: "trash-can"
            }), " ", ZR("general:delete")]
          }), NR && (0, gR.jsxs)(KR.O, {
            disabled: wR,
            onClick: () => {
              xR((() => UR.c.setShaderPackBanned(iR, CR, !GR.isBanned)))
            },
            children: [(0, gR.jsx)(BR.d, {
              name: GR.isBanned ? "circle-check" : "ban"
            }), " ", GR.isBanned ? "Unban" : "Ban"]
          })]
        }), LR && (0, gR.jsx)(yR.Suspense, {
          fallback: (0, gR.jsx)(fR.d, {}),
          children: (0, gR.jsx)(bR, {
            existing: {
              packId: CR,
              name: XR,
              description: vR
            },
            onPublished: () => {
              WR(!1), tR()
            }
          })
        })]
      })
    }
    var OR = GR(83),
      xR = GR(2102),
      NR = GR(1366),
      DR = GR(6063),
      HR = GR(1282),
      oR = GR(7714),
      cR = GR(7709),
      PR = GR(7725);

    function IR(RR) {
      let {
        item: JR
      } = RR;
      const {
        t: GR
      } = (0, AR.A)(), [tR] = (0, oR.h)(), [ZR, qR] = (0, yR.useState)(tR), [iR, fR] = (0, yR.useState)(!1), [VR, KR] = (0, yR.useState)(!1), {
        s3Url: wR
      } = HR.clientSideServerUrls, {
        width: rR,
        height: eR
      } = uR.s.large, aR = (0, uR.u)(wR, JR, ZR, "large"), {
        renderVersion: LR
      } = JR;
      return (0, gR.jsxs)("div", {
        className: "ShaderPackPreviews",
        children: [(0, gR.jsx)(PR.e, {
          selected: ZR,
          onSelect: RR => {
            qR(RR), fR(!1)
          },
          imageUrl: RR => (0, uR.u)(wR, JR, RR, "thumb")
        }), (0, gR.jsxs)("div", {
          className: "ShaderPackPreviewStage",
          children: [!iR && (0, gR.jsxs)("button", {
            type: "button",
            className: "ShaderPackPreviewMain",
            title: null === LR ? void 0 : GR("shaderPackListing:fullSize"),
            disabled: null === LR,
            onClick: () => {
              KR(!0)
            },
            children: [(0, gR.jsx)("img", {
              src: aR,
              width: rR,
              height: eR,
              alt: GR(pR.hb[ZR]),
              draggable: !1
            }), (0, gR.jsx)(cR.d, {
              item: JR
            })]
          }), !iR && null !== LR && (0, gR.jsxs)(jR, {
            side: "Right",
            onClick: () => {
              fR(!0)
            },
            children: [(0, gR.jsx)(BR.d, {
              name: "arrows-left-right"
            }), " ", GR("shaderPackListing:compare")]
          }), iR && null !== LR && (0, gR.jsx)(SR, {
            item: JR,
            packUrl: aR,
            baselineUrl: (0, uR.p)(wR, LR, ZR, "large")
          }), iR && (0, gR.jsx)(jR, {
            side: "Left",
            onClick: () => {
              fR(!1)
            },
            children: GR("shaderPackListing:withPack")
          }), iR && (0, gR.jsx)(jR, {
            side: "Right",
            onClick: () => {
              fR(!1)
            },
            children: GR("shaderPackListing:withoutPack")
          })]
        }), VR && (0, gR.jsx)(mR, {
          fullUrl: (0, uR.u)(wR, JR, ZR, "full"),
          largeUrl: aR,
          alt: GR(pR.hb[ZR]),
          onClose: () => {
            KR(!1)
          }
        })]
      })
    }

    function mR(RR) {
      let {
        fullUrl: JR,
        largeUrl: GR,
        alt: tR,
        onClose: uR
      } = RR;
      const ZR = (0, yR.useRef)(null);
      return (0, NR.u)("popup", ZR, uR), (0, yR.useEffect)((() => {
        function RR(RR) {
          "Escape" === RR.key && (RR.stopPropagation(), uR())
        }
        return window.addEventListener("keydown", RR, !0), () => {
          window.removeEventListener("keydown", RR, !0)
        }
      }), [uR]), (0, OR.createPortal)((0, gR.jsxs)("div", {
        ref: ZR,
        className: "ShaderPackFullSize",
        onClick: uR,
        children: [(0, gR.jsx)("img", {
          className: "ShaderPackFullSizeImage",
          src: JR,
          alt: tR,
          draggable: !1,
          style: {
            backgroundImage: `url(${GR})`
          }
        }), (0, gR.jsx)(KR.l, {
          className: "ShaderPackFullSizeClose",
          onClick: uR
        })]
      }), document.body)
    }
    const zR = 5;

    function SR(RR) {
      let {
        item: JR,
        packUrl: GR,
        baselineUrl: tR
      } = RR;
      const {
        t: ZR
      } = (0, AR.A)(), [qR, iR] = (0, yR.useState)(50), fR = (0, yR.useRef)(!1), VR = (0, yR.useRef)(null), {
        width: KR,
        height: wR
      } = uR.s.large;

      function rR(RR) {
        iR((JR => (0, xR.e)(JR + RR, 0, 100)))
      }

      function eR(RR) {
        const JR = RR.currentTarget.getBoundingClientRect();
        iR((0, xR.e)((RR.clientX - JR.left) / JR.width * 100, 0, 100))
      }
      return (0, DR.i)(VR, {
        adjust: RR => {
          rR(RR * zR)
        },
        setFraction: RR => {
          iR(100 * RR)
        },
        endDrag: () => {}
      }), (0, gR.jsxs)("div", {
        ref: VR,
        className: "ShaderPackCompare",
        "data-pad-slider": "",
        "data-pad-focusable": "",
        role: "slider",
        tabIndex: 0,
        "aria-label": ZR("shaderPackListing:compare"),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(qR),
        style: {
          "--split": `${qR}%`
        },
        onKeyDown: function(RR) {
          const JR = "ArrowLeft" === RR.key ? -zR : "ArrowRight" === RR.key ? zR : 0;
          0 !== JR && (RR.preventDefault(), rR(JR))
        },
        onPointerDown: RR => {
          fR.current = !0, RR.currentTarget.setPointerCapture(RR.pointerId), eR(RR)
        },
        onPointerMove: RR => {
          fR.current && eR(RR)
        },
        onPointerUp: () => {
          fR.current = !1
        },
        onPointerCancel: () => {
          fR.current = !1
        },
        children: [(0, gR.jsx)("img", {
          className: "ShaderPackCompareBaseline",
          src: tR,
          width: KR,
          height: wR,
          alt: "",
          draggable: !1,
          style: {
            backgroundImage: `url(${GR})`
          }
        }), (0, gR.jsx)("div", {
          className: "ShaderPackCompareLine"
        }), (0, gR.jsx)("img", {
          className: "ShaderPackComparePack",
          src: GR,
          width: KR,
          height: wR,
          alt: "",
          draggable: !1
        }), (0, gR.jsx)(cR.d, {
          item: JR,
          className: "ShaderPackCompareNotice"
        })]
      })
    }

    function jR(RR) {
      let {
        side: JR,
        onClick: GR,
        children: yR
      } = RR;
      return (0, gR.jsx)("button", {
        type: "button",
        className: `ShaderPackStageButton ${JR}`,
        onClick: GR,
        children: (0, gR.jsx)("span", {
          className: "ShaderPackStageButtonFace SmallTextBold",
          children: yR
        })
      })
    }
    var dR = GR(6037),
      ER = GR(342),
      YR = GR(7802);
    const kR = {
      compiler: "shaderPack:compilerUnavailable",
      download: "shaderPackListing:useDownloadFailed",
      apiVersion: "shaderPackListing:useOtherApiVersion",
      invalid: "shaderPackListing:useInvalid",
      errors: "shaderPackListing:useFailsHere",
      save: "shaderPack:saveFailed"
    };

    function QR(RR) {
      const {
        userContext: JR
      } = (0, nR.d)(), [tR, uR] = (0, yR.useState)(null), [ZR, qR] = (0, yR.useState)(!1), [iR, fR] = (0, yR.useState)(!1), [VR, KR] = (0, yR.useState)(null), wR = null === RR || void 0 === RR ? void 0 : RR.packId, rR = null === RR || void 0 === RR ? void 0 : RR.sourceHash;
      return (0, yR.useEffect)((() => {
        if (qR(!1), KR(null), void 0 === wR) return;
        let RR = !1;
        return Promise.all([(0, WR.hasUsableWebGpuAdapter)(), (0, YR.d)()]).then((JR => {
          let [GR, yR] = JR;
          var tR;
          RR || (uR(GR), qR((null === yR || void 0 === yR || null === (tR = yR.listing) || void 0 === tR ? void 0 : tR.packId) === wR && yR.listing.sourceHash === rR))
        })).catch((JR => {
          console.error("Failed to check whether this shader pack can be used", JR), RR || uR(!1)
        })), () => {
          RR = !0
        }
      }), [wR, rR]), {
        webGpuUsable: tR,
        inUse: ZR,
        busy: iR,
        errorKey: VR,
        use: () => {
          null !== RR && async function(RR) {
            fR(!0), KR(null);
            try {
              const {
                installListedShaderPack: yR
              } = await Promise.all([GR.e(91), GR.e(157), GR.e(136)]).then((() => GR(42033))), tR = await yR({
                packId: RR.packId,
                sourceHash: RR.sourceHash,
                name: RR.name,
                ownerName: RR.ownerName,
                description: RR.description
              });
              if ("failed" === tR.kind) return void KR(kR[tR.reason]);
              qR(!0), UR.c.recordShaderPackDownload(JR, RR.packId).catch((RR => {
                console.error("Failed to count a shader pack's download", RR)
              })), (0, dR.m)()
            } catch (yR) {
              console.error("Failed to use the shader pack", yR), KR("shaderPack:unexpectedError")
            } finally {
              fR(!1)
            }
          }(RR)
        }
      }
    }

    function FR(RR) {
      let {
        packUse: JR
      } = RR;
      const {
        t: GR
      } = (0, AR.A)(), {
        webGpuUsable: yR,
        inUse: tR,
        busy: uR,
        errorKey: ZR,
        use: qR
      } = JR;
      return (0, gR.jsxs)("div", {
        className: "ShaderPackUse",
        children: [(0, gR.jsxs)(KR.n, {
          disabled: !0 !== yR || tR,
          loading: uR,
          onClick: qR,
          children: [(0, gR.jsx)(BR.d, {
            name: tR ? "check" : "download"
          }), " ", GR(tR ? "shaderPackListing:inUse" : "shaderPackListing:use")]
        }), !1 === yR && (0, gR.jsx)("div", {
          className: "ShaderPackUseNote",
          children: GR((0, ER.j)() ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), ZR && (0, gR.jsx)("div", {
          className: "ShaderPackUseNote Error",
          children: GR(ZR)
        })]
      })
    }

    function TR() {
      var RR;
      const {
        t: JR
      } = (0, AR.A)(), GR = (0, VR.useNavigatePreserveSearch)(), {
        packId: uR
      } = (0, tR.x)(), {
        userContext: ZR,
        isUserContextUpdating: qR
      } = (0, nR.d)(), [wR, eR] = (0, yR.useState)(null), [aR, WR] = (0, yR.useState)(null), [CR, XR] = (0, yR.useState)(0), MR = (0, yR.useRef)(0);

      function BR() {
        var RR;
        null !== (RR = (0, VR.getPreviousLocation)()) && void 0 !== RR && RR.startsWith(pR.Z) ? GR(-1) : GR(pR.Z)
      }(0, LR.c)(BR), (0, oR.d)(), (0, yR.useEffect)((() => {
        if (qR || void 0 === uR) return;
        const RR = ++MR.current;
        WR(null), UR.c.getShaderPack(ZR, uR).then((JR => {
          MR.current === RR && eR(JR)
        })).catch((JR => {
          MR.current === RR && (console.error("Failed to get the shader pack", JR), eR(null), WR({
            error: JR
          }))
        }))
      }), [uR, ZR, qR, CR]);
      const lR = () => {
          XR((RR => RR + 1))
        },
        bR = (null === wR || void 0 === wR ? void 0 : wR.packId) === uR ? wR : null,
        OR = (0, oR.k)(),
        xR = QR(null !== (RR = null === bR || void 0 === bR ? void 0 : bR.live) && void 0 !== RR ? RR : null),
        NR = null !== bR && void 0 !== bR && bR.live ? (0, gR.jsx)(sR, {
          item: bR.live,
          favourites: OR,
          packUse: xR
        }) : null;
      return (0, gR.jsxs)("article", {
        className: "ShaderPackInformation AnimFadeIn",
        children: [null !== bR && (0, gR.jsx)(rR.b, {
          meta: (0, iR.bb)(bR.name)
        }), (0, gR.jsx)(KR.d, {
          onClick: BR,
          children: JR("shaderPackListing:backToPacks")
        }), null === bR && null === aR && (0, gR.jsx)("div", {
          className: "ShaderPackInformationMessage",
          children: (0, gR.jsx)(fR.d, {})
        }), null !== aR && (0, gR.jsxs)("div", {
          className: "ShaderPackInformationMessage",
          children: [(0, pR.F)(aR.error, JR, "shaderPackListing:loadPackFailed"), (0, gR.jsx)(KR.g, {
            onClick: lR,
            children: JR("general:tryAgain")
          })]
        }), null !== bR && null === aR && (0, gR.jsxs)("div", {
          className: "ShaderPackInformationBody",
          children: [(0, gR.jsxs)("header", {
            className: "ShaderPackInformationHeader",
            children: [(0, gR.jsx)("h1", {
              className: "FullyFancyText",
              children: bR.name
            }), NR]
          }), bR.live && (0, gR.jsx)(IR, {
            item: bR.live
          }), bR.live && (0, gR.jsx)(hR, {
            item: bR.live,
            ownerPreview: bR.ownerPreview,
            bloxdhubSlug: bR.bloxdhubSlug,
            actions: NR
          }), bR.owner && (0, gR.jsx)(vR, {
            details: bR,
            owner: bR.owner,
            onChanged: lR
          })]
        })]
      })
    }

    function sR(RR) {
      let {
        item: JR,
        favourites: GR,
        packUse: yR
      } = RR;
      const tR = GR.isFavourite(JR.packId);
      return (0, gR.jsxs)("div", {
        className: "ShaderPackInformationActions",
        children: [WR.featureFlags.settings.canUseShaderPacks && (0, gR.jsx)(FR, {
          packUse: yR
        }), (0, gR.jsx)(KR.y, {
          className: "ShaderPackInformationLike",
          onClick: () => {
            GR.toggle(JR.packId)
          },
          isLiked: !0 === tR,
          isLoading: null === tR
        })]
      })
    }

    function hR(RR) {
      let {
        item: JR,
        ownerPreview: GR,
        bloxdhubSlug: yR,
        actions: tR
      } = RR;
      const {
        t: qR
      } = (0, AR.A)(), iR = (0, aR.q)(), fR = null === yR ? null : (0, uR.e)(yR);
      return (0, gR.jsxs)("div", {
        className: "ShaderPackFacts",
        children: [JR.description && (0, gR.jsx)("p", {
          className: "ShaderPackDescription",
          children: JR.description
        }), (0, gR.jsxs)("div", {
          className: "ShaderPackFeatureList",
          children: [(null !== GR || null !== fR) && (0, gR.jsx)("div", {
            className: "ShaderPackAuthor",
            children: null !== GR ? (0, gR.jsxs)(gR.Fragment, {
              children: [(0, gR.jsx)(eR.h, {
                playerSocialPreview: GR,
                showLocation: !1,
                linkToProfile: !0
              }), null !== fR && (0, gR.jsx)("a", {
                className: "ShaderPackBloxdhubLogo",
                href: fR,
                target: "_blank",
                rel: "noopener noreferrer",
                children: (0, gR.jsx)("img", {
                  src: CR,
                  alt: uR.d
                })
              })]
            }) : (0, gR.jsxs)("a", {
              className: "ShaderPackBloxdhubName",
              href: fR,
              target: "_blank",
              rel: "noopener noreferrer",
              children: [uR.d, (0, gR.jsx)("img", {
                src: CR,
                alt: ""
              })]
            })
          }), pR.I.filter((RR => JR.features.includes(RR))).map((RR => (0, gR.jsx)(VR.LinkPreserveSearch, {
            className: "ShaderPackFeature",
            to: (0, pR.R)(RR),
            children: qR(pR.T[RR])
          }, RR)))]
        }), tR, (0, gR.jsxs)("dl", {
          className: "ShaderPackFactList",
          children: [(0, gR.jsxs)("div", {
            children: [(0, gR.jsx)("dt", {
              children: qR("shaderPackListing:downloads")
            }), (0, gR.jsx)("dd", {
              children: (0, ZR.J)(JR.downloads)
            })]
          }), (0, gR.jsx)(RJ, {
            label: qR("shaderPackListing:updated"),
            time: JR.listedUpdatedAt,
            now: iR
          }), (0, gR.jsx)(RJ, {
            label: qR("shaderPackListing:created"),
            time: JR.publishedAt,
            now: iR
          }), null !== JR.gpuCost && (0, gR.jsxs)("div", {
            children: [(0, gR.jsx)("dt", {
              children: qR("shaderPackListing:lag")
            }), (0, gR.jsx)("dd", {
              children: qR("shaderPackListing:lagPercent", {
                percent: String((0, pR.W)(JR.gpuCost))
              })
            })]
          }), (0, gR.jsxs)("div", {
            children: [(0, gR.jsx)("dt", {
              children: qR("shaderPackListing:size")
            }), (0, gR.jsx)("dd", {
              children: qR("shaderPackListing:sizeValue", {
                kilobytes: String((0, pR.V)(JR.sourceBytes))
              })
            })]
          }), (0, gR.jsxs)("div", {
            children: [(0, gR.jsx)("dt", {
              children: qR("shaderPackListing:files")
            }), (0, gR.jsx)("dd", {
              children: JR.fileCount
            })]
          })]
        })]
      })
    }

    function RJ(RR) {
      let {
        label: JR,
        time: GR,
        now: yR
      } = RR;
      const {
        t: tR,
        selectedLanguage: uR
      } = (0, AR.A)(), ZR = new Date(GR);
      let iR = ZR.toLocaleDateString();
      if (yR - GR <= 30 * qR.i) {
        const RR = (0, AR.n)(uR.code, "shaderPackListing:timeAgo");
        iR = tR("shaderPackListing:timeAgo", {
          time: (0, qR.Z)(RR, GR, yR)
        })
      }
      return (0, gR.jsx)(wR.h, {
        tooltipInner: ZR.toLocaleString(),
        children: (0, gR.jsxs)("div", {
          children: [(0, gR.jsx)("dt", {
            children: JR
          }), (0, gR.jsx)("dd", {
            children: iR
          })]
        })
      })
    }
  },
  6063: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => uR,
      i: () => ZR
    });
    var yR = GR(66);
    const tR = new WeakMap,
      uR = RR => {
        var JR;
        const GR = RR.closest("[data-pad-slider]");
        return GR && null !== (JR = tR.get(GR)) && void 0 !== JR ? JR : null
      },
      ZR = (RR, JR) => {
        const GR = (0, yR.useRef)(JR);
        GR.current = JR, (0, yR.useEffect)((() => {
          if (RR.current) return ((RR, JR) => (tR.set(RR, JR), () => {
            tR.get(RR) === JR && tR.delete(RR)
          }))(RR.current, {
            adjust: RR => {
              GR.current.adjust(RR)
            },
            setFraction: RR => {
              GR.current.setFraction(RR)
            },
            endDrag: () => {
              GR.current.endDrag()
            }
          })
        }), [RR])
      }
  },
  7802: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => tR,
      d: () => uR
    });
    var yR = GR(46);
    const tR = "shaderPack";
    async function uR() {
      var RR;
      let JR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (RR = await yR.g.getItem(tR, JR)) && void 0 !== RR ? RR : null
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);