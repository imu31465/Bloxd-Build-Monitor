export const id = 110;
export const ids = [110];
export const modules = {
  4837: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => xQ,
      f: () => GQ,
      g: () => AQ,
      h: () => MQ
    });
    var LQ = wQ(53),
      qQ = wQ(4844),
      oQ = wQ(4233),
      DQ = wQ(1367),
      kQ = wQ(4867),
      vQ = wQ(1070),
      mQ = wQ.n(vQ),
      uQ = wQ(1362),
      HQ = wQ(1725),
      bQ = wQ(4875),
      YQ = wQ(1107);

    function xQ(QQ) {
      let {
        label: FQ,
        onClick: wQ,
        checked: LQ,
        circleInfoText: qQ,
        className: kQ,
        disabled: vQ,
        note: uQ
      } = QQ;
      return (0, YQ.jsxs)("div", {
        "aria-disabled": vQ || void 0,
        "data-pad-focusable": !0,
        className: mQ()("SettingBox CheckboxContainer", {
          [kQ]: kQ,
          SettingBoxDisabled: vQ
        }),
        onClick: () => {
          vQ || wQ(!LQ)
        },
        children: [(0, YQ.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, YQ.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, YQ.jsx)(oQ.d, {
              className: "SettingsCheckbox",
              checked: LQ,
              disabled: vQ,
              onChange: () => {}
            })
          }), (0, YQ.jsxs)("div", {
            className: "CheckboxText",
            children: [FQ, qQ && (0, YQ.jsx)("span", {
              onClick: QQ => QQ.stopPropagation(),
              children: (0, YQ.jsx)(DQ.b, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: qQ
              })
            })]
          })]
        }), uQ && (0, YQ.jsx)("div", {
          className: "SettingNote",
          children: uQ
        })]
      })
    }

    function AQ(QQ) {
      let {
        name: FQ,
        onChange: wQ,
        min: qQ,
        max: oQ,
        step: kQ,
        initValue: vQ,
        circleInfoText: uQ,
        format: HQ,
        className: bQ,
        padStep: xQ,
        disabled: AQ = !1,
        selectableMax: tQ,
        cappedNote: MQ,
        onChangeComplete: GQ
      } = QQ;
      const [pQ, cQ] = (0, LQ.useState)(vQ), CQ = (0, LQ.useRef)(vQ);
      (0, LQ.useEffect)((() => {
        CQ.current = vQ, cQ(vQ)
      }), [vQ]);
      const SQ = void 0 !== tQ && tQ < oQ,
        iQ = SQ ? {
          "--slider-selectable": (tQ - qQ) / (oQ - qQ)
        } : void 0;
      return (0, YQ.jsxs)("div", {
        className: mQ()("SettingBox SettingsSliderDiv", {
          [bQ]: bQ,
          SettingBoxDisabled: AQ,
          SliderCapped: SQ
        }),
        style: iQ,
        children: [(0, YQ.jsxs)("div", {
          className: "SliderText",
          children: [`${FQ}: ${HQ?HQ(pQ):pQ}`, uQ && (0, YQ.jsx)(DQ.b, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: uQ
          })]
        }), (0, YQ.jsx)("div", {
          className: "SliderDiv",
          children: (0, YQ.jsx)(eQ, {
            value: pQ,
            min: qQ,
            max: oQ,
            step: kQ,
            onChange: QQ => {
              if (SQ && QQ >= tQ && pQ === tQ) return;
              const FQ = SQ ? Math.min(QQ, tQ) : QQ;
              CQ.current = FQ, cQ(FQ), wQ(FQ)
            },
            onChangeComplete: GQ && (() => {
              GQ(CQ.current)
            }),
            format: HQ,
            padStep: xQ,
            disabled: AQ
          })
        }), SQ && MQ && (0, YQ.jsx)("div", {
          className: "SettingNote",
          children: MQ
        })]
      })
    }
    const tQ = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function eQ(QQ) {
      var FQ;
      let {
        value: wQ,
        min: oQ,
        max: DQ,
        step: kQ,
        onChange: vQ,
        orientation: mQ,
        reverse: uQ,
        setIsChanging: HQ,
        tooltip: xQ,
        labels: AQ,
        handleLabel: eQ,
        format: MQ,
        onChangeStart: GQ,
        onChangeComplete: pQ,
        padStep: cQ,
        disabled: CQ = !1
      } = QQ;
      const SQ = (0, LQ.useRef)(null),
        iQ = (0, LQ.useRef)(null);
      (0, LQ.useLayoutEffect)((() => {
        var QQ, FQ, wQ;
        const LQ = null !== (QQ = null === (FQ = SQ.current) || void 0 === FQ ? void 0 : FQ.querySelector(".rangeslider")) && void 0 !== QQ ? QQ : null;
        null === LQ || void 0 === LQ || LQ.setAttribute("data-pad-slider", ""), null === LQ || void 0 === LQ || LQ.setAttribute("data-pad-focusable", ""), null === LQ || void 0 === LQ || null === (wQ = LQ.querySelector(".rangeslider__handle")) || void 0 === wQ || wQ.setAttribute("data-pad-slider-handle", ""), iQ.current = LQ
      }), []), (0, LQ.useLayoutEffect)((() => {
        var QQ, FQ;
        CQ ? null === (QQ = iQ.current) || void 0 === QQ || QQ.setAttribute("aria-disabled", "true") : null === (FQ = iQ.current) || void 0 === FQ || FQ.removeAttribute("aria-disabled")
      }), [CQ]);
      const WQ = (null !== (FQ = String(kQ).split(".")[1]) && void 0 !== FQ ? FQ : "").length,
        RQ = QQ => {
          const FQ = Number((Math.round((QQ - oQ) / kQ) * kQ + oQ).toFixed(WQ));
          return Math.min(DQ, Math.max(oQ, FQ))
        },
        OQ = (0, LQ.useRef)(pQ);
      OQ.current = pQ, (0, LQ.useEffect)((() => {
        const QQ = SQ.current;
        if (!QQ) return;
        const FQ = QQ => {
          var FQ;
          tQ.has(QQ.key) && (null === (FQ = OQ.current) || void 0 === FQ || FQ.call(OQ))
        };
        return QQ.addEventListener("keyup", FQ), () => {
          QQ.removeEventListener("keyup", FQ)
        }
      }), []);
      const sQ = (0, LQ.useRef)(!1);
      return (0, bQ.c)(iQ, {
        adjust: QQ => {
          if (CQ) return;
          const FQ = null !== cQ && void 0 !== cQ ? cQ : Math.max(kQ, Math.round((DQ - oQ) / 20 / kQ) * kQ),
            LQ = RQ(wQ + QQ * FQ * (uQ ? -1 : 1));
          LQ !== wQ && (null === GQ || void 0 === GQ || GQ(), vQ(LQ), null === pQ || void 0 === pQ || pQ())
        },
        setFraction: QQ => {
          if (CQ) return;
          const FQ = RQ(oQ + (uQ ? 1 - QQ : QQ) * (DQ - oQ));
          FQ !== wQ && (sQ.current || (sQ.current = !0, null === GQ || void 0 === GQ || GQ()), vQ(FQ))
        },
        endDrag: () => {
          sQ.current && (sQ.current = !1, null === pQ || void 0 === pQ || pQ())
        }
      }), (0, YQ.jsx)("div", {
        ref: SQ,
        style: {
          display: "contents"
        },
        children: (0, YQ.jsx)(qQ.b, {
          value: wQ,
          min: oQ,
          max: DQ,
          step: kQ,
          onChange: vQ,
          orientation: mQ,
          reverse: uQ,
          tooltip: xQ,
          labels: AQ,
          handleLabel: eQ,
          format: MQ,
          onChangeStart: () => {
            null === GQ || void 0 === GQ || GQ(), null === HQ || void 0 === HQ || HQ(!0)
          },
          onChangeComplete: () => {
            null === HQ || void 0 === HQ || HQ(!1), null === pQ || void 0 === pQ || pQ()
          }
        })
      })
    }
    async function MQ() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      const FQ = uQ.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: "",
        unlockPointerKey: QQ
      });
      !0 === await FQ.getResult() && (0, HQ.reloadBloxd)()
    }

    function GQ(QQ) {
      let {
        label: FQ,
        options: wQ,
        value: LQ,
        onChange: qQ,
        circleInfoText: oQ
      } = QQ;
      return (0, YQ.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, YQ.jsxs)("div", {
          className: "SliderText",
          children: [FQ, oQ && (0, YQ.jsx)(DQ.b, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: oQ
          })]
        }), (0, YQ.jsx)(kQ.c, {
          ariaLabel: FQ,
          options: wQ,
          value: LQ,
          onChange: qQ
        })]
      })
    }
  },
  6490: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      default: () => PQ
    });
    var LQ = wQ(53),
      qQ = wQ(1515),
      oQ = wQ(6374),
      DQ = wQ(1237),
      kQ = wQ(317),
      vQ = wQ(1348),
      mQ = wQ(1503),
      uQ = wQ(1451),
      HQ = wQ(1367),
      bQ = wQ(2489),
      YQ = wQ(2633),
      xQ = wQ(4400),
      AQ = wQ(1140),
      tQ = wQ(1489),
      eQ = wQ(96),
      MQ = wQ(1207);
    const GQ = wQ.p + "static/media/bloxdhubLogo.6a6c367af2ad6e6f1eb3.webp";
    var pQ = wQ(1070),
      cQ = wQ.n(pQ),
      CQ = wQ(1079),
      SQ = wQ(1362),
      iQ = wQ(6371),
      WQ = wQ(1107);
    const RQ = (0, LQ.lazy)((() => Promise.all([wQ.e(106), wQ.e(75), wQ.e(132), wQ.e(126), wQ.e(125)]).then((() => wQ(6406))).then((QQ => ({
      default: QQ.ShaderPackPublishForm
    })))));

    function OQ(QQ) {
      let {
        details: FQ,
        owner: wQ,
        onChanged: qQ
      } = QQ;
      const {
        t: DQ
      } = (0, MQ.y)(), kQ = (0, mQ.useNavigatePreserveSearch)(), {
        userContext: HQ
      } = (0, AQ.e)(), [bQ, YQ] = (0, LQ.useState)(!1), [xQ, eQ] = (0, LQ.useState)(null), [GQ, pQ] = (0, LQ.useState)(!1), {
        packId: OQ,
        name: sQ,
        description: rQ,
        live: IQ
      } = FQ;
      async function UQ(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qQ;
        YQ(!0), eQ(null);
        try {
          await QQ(), FQ()
        } catch (wQ) {
          console.error("Failed to change a shader pack", wQ), eQ((0, iQ.z)(wQ, DQ, "shaderPackListing:ownerActionFailed"))
        } finally {
          YQ(!1)
        }
      }
      const NQ = (0, iQ.u)(HQ);
      return (0, WQ.jsxs)("section", {
        className: "ShaderPackOwnerPanel",
        children: [(0, WQ.jsx)("h2", {
          className: "ShaderPackSectionTitle",
          children: DQ("general:manage")
        }), (0, iQ.Y)(wQ, !(null === IQ || void 0 === IQ || !IQ.renderId), Date.now(), DQ).map((QQ => (0, WQ.jsxs)("div", {
          className: cQ()("ShaderPackOwnerNotice", {
            Warning: "warning" === QQ.tone
          }),
          children: [(0, WQ.jsx)(CQ.c, {
            name: "warning" === QQ.tone ? "triangle-exclamation" : "circle-info"
          }), (0, WQ.jsxs)("div", {
            children: [QQ.text, QQ.detail && (0, WQ.jsx)("pre", {
              className: "ShaderPackOwnerNoticeDetail",
              children: QQ.detail
            })]
          })]
        }, QQ.text))), FQ.ban && (0, WQ.jsxs)("div", {
          className: "ShaderPackOwnerNotice Warning",
          children: [(0, WQ.jsx)(CQ.c, {
            name: "ban"
          }), (0, WQ.jsxs)("div", {
            children: ["Banned by ", FQ.ban.byName, " on ", new Date(FQ.ban.at).toLocaleString()]
          })]
        }), xQ && (0, WQ.jsx)("div", {
          className: "ShaderPackOwnerError",
          children: xQ
        }), (0, WQ.jsxs)("div", {
          className: "ShaderPackOwnerActions",
          children: [(0, WQ.jsxs)(uQ.L, {
            disabled: bQ,
            onClick: () => {
              !async function() {
                const QQ = await SQ.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:renameTitle",
                  initialValue: sQ,
                  maxLength: oQ.z,
                  submitText: "general:save",
                  validate: QQ => QQ.trim().length < oQ.B ? DQ("shaderPackListing:nameTooShort", {
                    min: String(oQ.B)
                  }) : null
                }).getResult();
                "notificationTornDown" !== QQ && "submit" === (null === QQ || void 0 === QQ ? void 0 : QQ.type) && QQ.value.trim() !== sQ && await UQ((() => tQ.b.updateShaderPack(HQ, {
                  packId: OQ,
                  name: QQ.value.trim()
                })))
              }()
            },
            children: [(0, WQ.jsx)(CQ.c, {
              name: "pen"
            }), " ", DQ("shaderPackListing:rename")]
          }), (0, WQ.jsxs)(uQ.L, {
            disabled: bQ,
            onClick: () => {
              !async function() {
                const QQ = await SQ.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:editDescription",
                  initialValue: rQ,
                  maxLength: oQ.p,
                  multiline: !0,
                  allowEmptySubmit: !0,
                  submitText: "general:save"
                }).getResult();
                "notificationTornDown" !== QQ && "submit" === (null === QQ || void 0 === QQ ? void 0 : QQ.type) && QQ.value.trim() !== rQ && await UQ((() => tQ.b.updateShaderPack(HQ, {
                  packId: OQ,
                  description: QQ.value.trim()
                })))
              }()
            },
            children: [(0, WQ.jsx)(CQ.c, {
              name: "file-lines"
            }), " ", DQ("shaderPackListing:editDescription")]
          }), (0, WQ.jsxs)(uQ.L, {
            disabled: bQ || wQ.isBanned && !wQ.listed,
            onClick: () => {
              UQ((() => tQ.b.updateShaderPack(HQ, {
                packId: OQ,
                listed: !wQ.listed
              })))
            },
            children: [(0, WQ.jsx)(CQ.c, {
              name: wQ.listed ? "eye-slash" : "eye"
            }), " ", DQ(wQ.listed ? "shaderPackListing:unlist" : "shaderPackListing:relist")]
          }), !wQ.isBanned && (0, WQ.jsxs)(uQ.f, {
            disabled: bQ,
            onClick: () => {
              pQ(!GQ)
            },
            children: [(0, WQ.jsx)(CQ.c, {
              name: "upload"
            }), " ", DQ("shaderPackListing:uploadVersion")]
          }), (0, WQ.jsxs)(uQ.G, {
            disabled: bQ || wQ.isBanned,
            onClick: () => {
              !async function() {
                !0 === await SQ.NotificationProvider.showPromptPopup({
                  title: "shaderPackListing:deleteTitle",
                  subtitle: "shaderPackListing:deleteSubtitle",
                  confirmText: "general:delete",
                  cancelText: "general:cancel",
                  destructive: !0
                }).getResult() && await UQ((() => tQ.b.deleteShaderPack(HQ, OQ)), (() => {
                  kQ(`${iQ.W}?section=mine`, {
                    replace: !0
                  })
                }))
              }()
            },
            children: [(0, WQ.jsx)(CQ.c, {
              name: "trash-can"
            }), " ", DQ("general:delete")]
          }), NQ && (0, WQ.jsxs)(uQ.G, {
            disabled: bQ,
            onClick: () => {
              UQ((() => tQ.b.setShaderPackBanned(HQ, OQ, !wQ.isBanned)))
            },
            children: [(0, WQ.jsx)(CQ.c, {
              name: wQ.isBanned ? "circle-check" : "ban"
            }), " ", wQ.isBanned ? "Unban" : "Ban"]
          })]
        }), GQ && (0, WQ.jsx)(LQ.Suspense, {
          fallback: (0, WQ.jsx)(vQ.c, {}),
          children: (0, WQ.jsx)(RQ, {
            existing: {
              packId: OQ,
              name: sQ,
              description: rQ
            },
            onPublished: () => {
              pQ(!1), qQ()
            }
          })
        })]
      })
    }
    var sQ = wQ(71),
      rQ = wQ(1870),
      IQ = wQ(1295),
      UQ = wQ(4875),
      NQ = wQ(1213),
      TQ = wQ(6382),
      KQ = wQ(6377),
      zQ = wQ(6388);

    function lQ(QQ) {
      let {
        item: FQ
      } = QQ;
      const {
        t: wQ
      } = (0, MQ.y)(), [qQ] = (0, TQ.g)(), [DQ, kQ] = (0, LQ.useState)(qQ), [vQ, mQ] = (0, LQ.useState)(!1), [uQ, HQ] = (0, LQ.useState)(!1), {
        s3Url: bQ
      } = NQ.clientSideServerUrls, {
        width: YQ,
        height: xQ
      } = oQ.t.large, AQ = (0, oQ.u)(bQ, FQ, DQ, "large"), {
        renderVersion: tQ
      } = FQ;
      return (0, WQ.jsxs)("div", {
        className: "ShaderPackPreviews",
        children: [(0, WQ.jsx)(zQ.b, {
          selected: DQ,
          onSelect: QQ => {
            kQ(QQ), mQ(!1)
          },
          imageUrl: QQ => (0, oQ.u)(bQ, FQ, QQ, "thumb")
        }), (0, WQ.jsxs)("div", {
          className: "ShaderPackPreviewStage",
          children: [!vQ && (0, WQ.jsxs)("button", {
            type: "button",
            className: "ShaderPackPreviewMain",
            title: null === tQ ? void 0 : wQ("shaderPackListing:fullSize"),
            disabled: null === tQ,
            onClick: () => {
              HQ(!0)
            },
            children: [(0, WQ.jsx)("img", {
              src: AQ,
              width: YQ,
              height: xQ,
              alt: wQ(iQ.gb[DQ]),
              draggable: !1
            }), (0, WQ.jsx)(KQ.c, {
              item: FQ
            })]
          }), !vQ && null !== tQ && (0, WQ.jsxs)(fQ, {
            side: "Right",
            onClick: () => {
              mQ(!0)
            },
            children: [(0, WQ.jsx)(CQ.c, {
              name: "arrows-left-right"
            }), " ", wQ("shaderPackListing:compare")]
          }), vQ && null !== tQ && (0, WQ.jsx)(XQ, {
            item: FQ,
            packUrl: AQ,
            baselineUrl: (0, oQ.n)(bQ, tQ, DQ, "large")
          }), vQ && (0, WQ.jsx)(fQ, {
            side: "Left",
            onClick: () => {
              mQ(!1)
            },
            children: wQ("shaderPackListing:withPack")
          }), vQ && (0, WQ.jsx)(fQ, {
            side: "Right",
            onClick: () => {
              mQ(!1)
            },
            children: wQ("shaderPackListing:withoutPack")
          })]
        }), uQ && (0, WQ.jsx)(jQ, {
          fullUrl: (0, oQ.u)(bQ, FQ, DQ, "full"),
          largeUrl: AQ,
          alt: wQ(iQ.gb[DQ]),
          onClose: () => {
            HQ(!1)
          }
        })]
      })
    }

    function jQ(QQ) {
      let {
        fullUrl: FQ,
        largeUrl: wQ,
        alt: qQ,
        onClose: oQ
      } = QQ;
      const DQ = (0, LQ.useRef)(null);
      return (0, IQ.m)("popup", DQ, oQ), (0, LQ.useEffect)((() => {
        function QQ(QQ) {
          "Escape" === QQ.key && (QQ.stopPropagation(), oQ())
        }
        return window.addEventListener("keydown", QQ, !0), () => {
          window.removeEventListener("keydown", QQ, !0)
        }
      }), [oQ]), (0, sQ.createPortal)((0, WQ.jsxs)("div", {
        ref: DQ,
        className: "ShaderPackFullSize",
        onClick: oQ,
        children: [(0, WQ.jsx)("img", {
          className: "ShaderPackFullSizeImage",
          src: FQ,
          alt: qQ,
          draggable: !1,
          style: {
            backgroundImage: `url(${wQ})`
          }
        }), (0, WQ.jsx)(uQ.j, {
          className: "ShaderPackFullSizeClose",
          onClick: oQ
        })]
      }), document.body)
    }
    const aQ = 5;

    function XQ(QQ) {
      let {
        item: FQ,
        packUrl: wQ,
        baselineUrl: qQ
      } = QQ;
      const {
        t: DQ
      } = (0, MQ.y)(), [kQ, vQ] = (0, LQ.useState)(50), mQ = (0, LQ.useRef)(!1), uQ = (0, LQ.useRef)(null), {
        width: HQ,
        height: bQ
      } = oQ.t.large;

      function YQ(QQ) {
        vQ((FQ => (0, rQ.h)(FQ + QQ, 0, 100)))
      }

      function xQ(QQ) {
        const FQ = QQ.currentTarget.getBoundingClientRect();
        vQ((0, rQ.h)((QQ.clientX - FQ.left) / FQ.width * 100, 0, 100))
      }
      return (0, UQ.c)(uQ, {
        adjust: QQ => {
          YQ(QQ * aQ)
        },
        setFraction: QQ => {
          vQ(100 * QQ)
        },
        endDrag: () => {}
      }), (0, WQ.jsxs)("div", {
        ref: uQ,
        className: "ShaderPackCompare",
        "data-pad-slider": "",
        "data-pad-focusable": "",
        role: "slider",
        tabIndex: 0,
        "aria-label": DQ("shaderPackListing:compare"),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(kQ),
        style: {
          "--split": `${kQ}%`
        },
        onKeyDown: function(QQ) {
          const FQ = "ArrowLeft" === QQ.key ? -aQ : "ArrowRight" === QQ.key ? aQ : 0;
          0 !== FQ && (QQ.preventDefault(), YQ(FQ))
        },
        onPointerDown: QQ => {
          mQ.current = !0, QQ.currentTarget.setPointerCapture(QQ.pointerId), xQ(QQ)
        },
        onPointerMove: QQ => {
          mQ.current && xQ(QQ)
        },
        onPointerUp: () => {
          mQ.current = !1
        },
        onPointerCancel: () => {
          mQ.current = !1
        },
        children: [(0, WQ.jsx)("img", {
          className: "ShaderPackCompareBaseline",
          src: qQ,
          width: HQ,
          height: bQ,
          alt: "",
          draggable: !1,
          style: {
            backgroundImage: `url(${wQ})`
          }
        }), (0, WQ.jsx)("div", {
          className: "ShaderPackCompareLine"
        }), (0, WQ.jsx)("img", {
          className: "ShaderPackComparePack",
          src: wQ,
          width: HQ,
          height: bQ,
          alt: "",
          draggable: !1
        }), (0, WQ.jsx)(KQ.c, {
          item: FQ,
          className: "ShaderPackCompareNotice"
        })]
      })
    }

    function fQ(QQ) {
      let {
        side: FQ,
        onClick: wQ,
        children: LQ
      } = QQ;
      return (0, WQ.jsx)("button", {
        type: "button",
        className: `ShaderPackStageButton ${FQ}`,
        onClick: wQ,
        children: (0, WQ.jsx)("span", {
          className: "ShaderPackStageButtonFace SmallTextBold",
          children: LQ
        })
      })
    }
    var VQ = wQ(4837),
      hQ = wQ(282),
      JQ = wQ(6485);
    const EQ = {
      compiler: "shaderPack:compilerUnavailable",
      download: "shaderPackListing:useDownloadFailed",
      apiVersion: "shaderPackListing:useOtherApiVersion",
      invalid: "shaderPackListing:useInvalid",
      errors: "shaderPackListing:useFailsHere",
      save: "shaderPack:saveFailed"
    };

    function nQ(QQ) {
      const {
        userContext: FQ
      } = (0, AQ.e)(), [qQ, oQ] = (0, LQ.useState)(null), [DQ, kQ] = (0, LQ.useState)(!1), [vQ, mQ] = (0, LQ.useState)(!1), [uQ, HQ] = (0, LQ.useState)(null), bQ = null === QQ || void 0 === QQ ? void 0 : QQ.packId, YQ = null === QQ || void 0 === QQ ? void 0 : QQ.sourceHash;
      return (0, LQ.useEffect)((() => {
        if (kQ(!1), HQ(null), void 0 === bQ) return;
        let QQ = !1;
        return Promise.all([(0, eQ.hasUsableWebGpuAdapter)(), (0, JQ.f)()]).then((FQ => {
          let [wQ, LQ] = FQ;
          var qQ;
          QQ || (oQ(wQ), kQ((null === LQ || void 0 === LQ || null === (qQ = LQ.listing) || void 0 === qQ ? void 0 : qQ.packId) === bQ && LQ.listing.sourceHash === YQ))
        })).catch((FQ => {
          console.error("Failed to check whether this shader pack can be used", FQ), QQ || oQ(!1)
        })), () => {
          QQ = !0
        }
      }), [bQ, YQ]), {
        webGpuUsable: qQ,
        inUse: DQ,
        busy: vQ,
        errorKey: uQ,
        use: () => {
          null !== QQ && async function(QQ) {
            mQ(!0), HQ(null);
            try {
              const {
                installListedShaderPack: LQ
              } = await Promise.all([wQ.e(75), wQ.e(132), wQ.e(127)]).then((() => wQ(39921))), qQ = await LQ({
                packId: QQ.packId,
                sourceHash: QQ.sourceHash,
                name: QQ.name,
                ownerName: QQ.ownerName,
                description: QQ.description
              });
              if ("failed" === qQ.kind) return void HQ(EQ[qQ.reason]);
              kQ(!0), tQ.b.recordShaderPackDownload(FQ, QQ.packId).catch((QQ => {
                console.error("Failed to count a shader pack's download", QQ)
              })), (0, VQ.h)()
            } catch (LQ) {
              console.error("Failed to use the shader pack", LQ), HQ("shaderPack:unexpectedError")
            } finally {
              mQ(!1)
            }
          }(QQ)
        }
      }
    }

    function gQ(QQ) {
      let {
        packUse: FQ
      } = QQ;
      const {
        t: wQ
      } = (0, MQ.y)(), {
        webGpuUsable: LQ,
        inUse: qQ,
        busy: oQ,
        errorKey: DQ,
        use: kQ
      } = FQ;
      return (0, WQ.jsxs)("div", {
        className: "ShaderPackUse",
        children: [(0, WQ.jsxs)(uQ.m, {
          disabled: !0 !== LQ || qQ,
          loading: oQ,
          onClick: kQ,
          children: [(0, WQ.jsx)(CQ.c, {
            name: qQ ? "check" : "download"
          }), " ", wQ(qQ ? "shaderPackListing:inUse" : "shaderPackListing:use")]
        }), !1 === LQ && (0, WQ.jsx)("div", {
          className: "ShaderPackUseNote",
          children: wQ((0, hQ.g)() ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), DQ && (0, WQ.jsx)("div", {
          className: "ShaderPackUseNote Error",
          children: wQ(DQ)
        })]
      })
    }

    function PQ() {
      var QQ;
      const {
        t: FQ
      } = (0, MQ.y)(), wQ = (0, mQ.useNavigatePreserveSearch)(), {
        packId: oQ
      } = (0, qQ.y)(), {
        userContext: DQ,
        isUserContextUpdating: kQ
      } = (0, AQ.e)(), [HQ, bQ] = (0, LQ.useState)(null), [YQ, eQ] = (0, LQ.useState)(null), [GQ, pQ] = (0, LQ.useState)(0), cQ = (0, LQ.useRef)(0);

      function CQ() {
        var QQ;
        null !== (QQ = (0, mQ.getPreviousLocation)()) && void 0 !== QQ && QQ.startsWith(iQ.W) ? wQ(-1) : wQ(iQ.W)
      }(0, xQ.c)(CQ), (0, TQ.d)(), (0, LQ.useEffect)((() => {
        if (kQ || void 0 === oQ) return;
        const QQ = ++cQ.current;
        eQ(null), tQ.b.getShaderPack(DQ, oQ).then((FQ => {
          cQ.current === QQ && bQ(FQ)
        })).catch((FQ => {
          cQ.current === QQ && (console.error("Failed to get the shader pack", FQ), bQ(null), eQ({
            error: FQ
          }))
        }))
      }), [oQ, DQ, kQ, GQ]);
      const SQ = () => {
          pQ((QQ => QQ + 1))
        },
        RQ = (null === HQ || void 0 === HQ ? void 0 : HQ.packId) === oQ ? HQ : null,
        sQ = (0, TQ.j)(),
        rQ = nQ(null !== (QQ = null === RQ || void 0 === RQ ? void 0 : RQ.live) && void 0 !== QQ ? QQ : null),
        IQ = null !== RQ && void 0 !== RQ && RQ.live ? (0, WQ.jsx)(ZQ, {
          item: RQ.live,
          favourites: sQ,
          packUse: rQ
        }) : null;
      return (0, WQ.jsxs)("article", {
        className: "ShaderPackInformation AnimFadeIn",
        children: [(0, WQ.jsx)(uQ.b, {
          onClick: CQ,
          children: FQ("shaderPackListing:backToPacks")
        }), null === RQ && null === YQ && (0, WQ.jsx)("div", {
          className: "ShaderPackInformationMessage",
          children: (0, WQ.jsx)(vQ.c, {})
        }), null !== YQ && (0, WQ.jsxs)("div", {
          className: "ShaderPackInformationMessage",
          children: [(0, iQ.z)(YQ.error, FQ, "shaderPackListing:loadPackFailed"), (0, WQ.jsx)(uQ.f, {
            onClick: SQ,
            children: FQ("general:tryAgain")
          })]
        }), null !== RQ && null === YQ && (0, WQ.jsxs)("div", {
          className: "ShaderPackInformationBody",
          children: [(0, WQ.jsxs)("header", {
            className: "ShaderPackInformationHeader",
            children: [(0, WQ.jsx)("h1", {
              className: "FullyFancyText",
              children: RQ.name
            }), IQ]
          }), RQ.live && (0, WQ.jsx)(lQ, {
            item: RQ.live
          }), RQ.live && (0, WQ.jsx)(yQ, {
            item: RQ.live,
            ownerPreview: RQ.ownerPreview,
            bloxdhubSlug: RQ.bloxdhubSlug,
            actions: IQ
          }), RQ.owner && (0, WQ.jsx)(OQ, {
            details: RQ,
            owner: RQ.owner,
            onChanged: SQ
          })]
        })]
      })
    }

    function ZQ(QQ) {
      let {
        item: FQ,
        favourites: wQ,
        packUse: LQ
      } = QQ;
      const qQ = wQ.isFavourite(FQ.packId);
      return (0, WQ.jsxs)("div", {
        className: "ShaderPackInformationActions",
        children: [eQ.featureFlags.settings.canUseShaderPacks && (0, WQ.jsx)(gQ, {
          packUse: LQ
        }), (0, WQ.jsx)(uQ.w, {
          className: "ShaderPackInformationLike",
          onClick: () => {
            wQ.toggle(FQ.packId)
          },
          isLiked: !0 === qQ,
          isLoading: null === qQ
        })]
      })
    }

    function yQ(QQ) {
      let {
        item: FQ,
        ownerPreview: wQ,
        bloxdhubSlug: LQ,
        actions: qQ
      } = QQ;
      const {
        t: kQ
      } = (0, MQ.y)(), vQ = (0, YQ.t)(), uQ = null === LQ ? null : (0, oQ.e)(LQ);
      return (0, WQ.jsxs)("div", {
        className: "ShaderPackFacts",
        children: [FQ.description && (0, WQ.jsx)("p", {
          className: "ShaderPackDescription",
          children: FQ.description
        }), (0, WQ.jsxs)("div", {
          className: "ShaderPackFeatureList",
          children: [(null !== wQ || null !== uQ) && (0, WQ.jsx)("div", {
            className: "ShaderPackAuthor",
            children: null !== wQ ? (0, WQ.jsxs)(WQ.Fragment, {
              children: [(0, WQ.jsx)(bQ.e, {
                playerSocialPreview: wQ,
                showLocation: !1,
                linkToProfile: !0
              }), null !== uQ && (0, WQ.jsx)("a", {
                className: "ShaderPackBloxdhubLogo",
                href: uQ,
                target: "_blank",
                rel: "noopener noreferrer",
                children: (0, WQ.jsx)("img", {
                  src: GQ,
                  alt: oQ.c
                })
              })]
            }) : (0, WQ.jsxs)("a", {
              className: "ShaderPackBloxdhubName",
              href: uQ,
              target: "_blank",
              rel: "noopener noreferrer",
              children: [oQ.c, (0, WQ.jsx)("img", {
                src: GQ,
                alt: ""
              })]
            })
          }), iQ.A.filter((QQ => FQ.features.includes(QQ))).map((QQ => (0, WQ.jsx)(mQ.LinkPreserveSearch, {
            className: "ShaderPackFeature",
            to: (0, iQ.K)(QQ),
            children: kQ(iQ.N[QQ])
          }, QQ)))]
        }), qQ, (0, WQ.jsxs)("dl", {
          className: "ShaderPackFactList",
          children: [(0, WQ.jsxs)("div", {
            children: [(0, WQ.jsx)("dt", {
              children: kQ("shaderPackListing:downloads")
            }), (0, WQ.jsx)("dd", {
              children: (0, DQ.W)(FQ.downloads)
            })]
          }), (0, WQ.jsx)(BQ, {
            label: kQ("shaderPackListing:updated"),
            time: FQ.listedUpdatedAt,
            now: vQ
          }), (0, WQ.jsx)(BQ, {
            label: kQ("shaderPackListing:created"),
            time: FQ.publishedAt,
            now: vQ
          }), null !== FQ.gpuCost && (0, WQ.jsxs)("div", {
            children: [(0, WQ.jsx)("dt", {
              children: kQ("shaderPackListing:lag")
            }), (0, WQ.jsx)("dd", {
              children: kQ("shaderPackListing:lagPercent", {
                percent: String((0, iQ.U)(FQ.gpuCost))
              })
            })]
          }), (0, WQ.jsxs)("div", {
            children: [(0, WQ.jsx)("dt", {
              children: kQ("shaderPackListing:size")
            }), (0, WQ.jsx)("dd", {
              children: kQ("shaderPackListing:sizeValue", {
                kilobytes: String((0, iQ.R)(FQ.sourceBytes))
              })
            })]
          }), (0, WQ.jsxs)("div", {
            children: [(0, WQ.jsx)("dt", {
              children: kQ("shaderPackListing:files")
            }), (0, WQ.jsx)("dd", {
              children: FQ.fileCount
            })]
          })]
        })]
      })
    }

    function BQ(QQ) {
      let {
        label: FQ,
        time: wQ,
        now: LQ
      } = QQ;
      const {
        t: qQ,
        selectedLanguage: oQ
      } = (0, MQ.y)(), DQ = new Date(wQ);
      let vQ = DQ.toLocaleDateString();
      if (LQ - wQ <= 30 * kQ.j) {
        const QQ = (0, MQ.k)(oQ.code, "shaderPackListing:timeAgo");
        vQ = qQ("shaderPackListing:timeAgo", {
          time: (0, kQ.db)(QQ, wQ, LQ)
        })
      }
      return (0, WQ.jsx)(HQ.f, {
        tooltipInner: DQ.toLocaleString(),
        children: (0, WQ.jsxs)("div", {
          children: [(0, WQ.jsx)("dt", {
            children: FQ
          }), (0, WQ.jsx)("dd", {
            children: vQ
          })]
        })
      })
    }
  },
  4867: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => DQ
    });
    var LQ = wQ(1070),
      qQ = wQ.n(LQ),
      oQ = wQ(1107);

    function DQ(QQ) {
      let {
        options: FQ,
        value: wQ,
        onChange: LQ,
        ariaLabel: DQ,
        className: kQ,
        reselectable: vQ = !1,
        keepsFocus: mQ = !1,
        padTabs: uQ
      } = QQ;
      const HQ = void 0 !== uQ;
      return (0, oQ.jsx)("div", {
        className: qQ()("SegmentedToggle", kQ),
        role: "group",
        "aria-label": DQ,
        "data-pad-tabs": uQ,
        children: FQ.map((QQ => {
          const FQ = QQ.value === wQ;
          return (0, oQ.jsx)("button", {
            type: "button",
            "aria-pressed": FQ,
            "data-pad-tab": HQ || void 0,
            "data-pad-selected": HQ && FQ ? "true" : void 0,
            "data-pad-default-focus": HQ && FQ || void 0,
            "aria-label": QQ.ariaLabel,
            title: QQ.ariaLabel,
            className: qQ()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: FQ
            }),
            onMouseDown: mQ ? QQ => {
              QQ.preventDefault()
            } : void 0,
            onClick: () => {
              FQ && !vQ || LQ(QQ.value)
            },
            children: QQ.label
          }, QQ.value)
        }))
      })
    }
  },
  4875: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => oQ,
      c: () => DQ
    });
    var LQ = wQ(53);
    const qQ = new WeakMap,
      oQ = QQ => {
        var FQ;
        const wQ = QQ.closest("[data-pad-slider]");
        return wQ && null !== (FQ = qQ.get(wQ)) && void 0 !== FQ ? FQ : null
      },
      DQ = (QQ, FQ) => {
        const wQ = (0, LQ.useRef)(FQ);
        wQ.current = FQ, (0, LQ.useEffect)((() => {
          if (QQ.current) return ((QQ, FQ) => (qQ.set(QQ, FQ), () => {
            qQ.get(QQ) === FQ && qQ.delete(QQ)
          }))(QQ.current, {
            adjust: QQ => {
              wQ.current.adjust(QQ)
            },
            setFraction: QQ => {
              wQ.current.setFraction(QQ)
            },
            endDrag: () => {
              wQ.current.endDrag()
            }
          })
        }), [QQ])
      }
  },
  6485: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => qQ,
      f: () => oQ
    });
    var LQ = wQ(27);
    const qQ = "shaderPack";
    async function oQ() {
      var QQ;
      let FQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (QQ = await LQ.h.getItem(qQ, FQ)) && void 0 !== QQ ? QQ : null
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);