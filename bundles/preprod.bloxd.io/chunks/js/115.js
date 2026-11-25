export const id = 115;
export const ids = [115];
export const modules = {
  5349: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => jQ,
      g: () => pQ,
      h: () => BQ,
      i: () => DQ
    });
    var wQ = XQ(61),
      qQ = XQ(5351),
      TQ = XQ(4677),
      zQ = XQ(1416),
      sQ = XQ(5376),
      FQ = XQ(1081),
      PQ = XQ.n(FQ),
      gQ = XQ(1404),
      JQ = XQ(1802),
      rQ = XQ(5378),
      IQ = XQ(1145);

    function jQ(QQ) {
      let {
        label: WQ,
        onClick: XQ,
        checked: wQ,
        circleInfoText: qQ,
        className: sQ,
        disabled: FQ,
        note: gQ
      } = QQ;
      return (0, IQ.jsxs)("div", {
        "aria-disabled": FQ || void 0,
        "data-pad-focusable": !0,
        className: PQ()("SettingBox CheckboxContainer", {
          [sQ]: sQ,
          SettingBoxDisabled: FQ
        }),
        onClick: () => {
          FQ || XQ(!wQ)
        },
        children: [(0, IQ.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, IQ.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, IQ.jsx)(TQ.b, {
              className: "SettingsCheckbox",
              checked: wQ,
              disabled: FQ,
              onChange: () => {}
            })
          }), (0, IQ.jsxs)("div", {
            className: "CheckboxText",
            children: [WQ, qQ && (0, IQ.jsx)("span", {
              onClick: QQ => QQ.stopPropagation(),
              children: (0, IQ.jsx)(zQ.b, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: qQ
              })
            })]
          })]
        }), gQ && (0, IQ.jsx)("div", {
          className: "SettingNote",
          children: gQ
        })]
      })
    }

    function BQ(QQ) {
      let {
        name: WQ,
        onChange: XQ,
        min: qQ,
        max: TQ,
        step: sQ,
        initValue: FQ,
        circleInfoText: gQ,
        format: JQ,
        className: rQ,
        padStep: jQ,
        disabled: BQ = !1,
        selectableMax: yQ,
        cappedNote: DQ,
        onChangeComplete: pQ
      } = QQ;
      const [GQ, UQ] = (0, wQ.useState)(FQ), bQ = (0, wQ.useRef)(FQ);
      (0, wQ.useEffect)((() => {
        bQ.current = FQ, UQ(FQ)
      }), [FQ]);
      const vQ = void 0 !== yQ && yQ < TQ,
        dQ = vQ ? {
          "--slider-selectable": (yQ - qQ) / (TQ - qQ)
        } : void 0;
      return (0, IQ.jsxs)("div", {
        className: PQ()("SettingBox SettingsSliderDiv", {
          [rQ]: rQ,
          SettingBoxDisabled: BQ,
          SliderCapped: vQ
        }),
        style: dQ,
        children: [(0, IQ.jsxs)("div", {
          className: "SliderText",
          children: [`${WQ}: ${JQ?JQ(GQ):GQ}`, gQ && (0, IQ.jsx)(zQ.b, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: gQ
          })]
        }), (0, IQ.jsx)("div", {
          className: "SliderDiv",
          children: (0, IQ.jsx)(VQ, {
            value: GQ,
            min: qQ,
            max: TQ,
            step: sQ,
            onChange: QQ => {
              if (vQ && QQ >= yQ && GQ === yQ) return;
              const WQ = vQ ? Math.min(QQ, yQ) : QQ;
              bQ.current = WQ, UQ(WQ), XQ(WQ)
            },
            onChangeComplete: pQ && (() => {
              pQ(bQ.current)
            }),
            format: JQ,
            padStep: jQ,
            disabled: BQ
          })
        }), vQ && DQ && (0, IQ.jsx)("div", {
          className: "SettingNote",
          children: DQ
        })]
      })
    }
    const yQ = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function VQ(QQ) {
      var WQ;
      let {
        value: XQ,
        min: TQ,
        max: zQ,
        step: sQ,
        onChange: FQ,
        orientation: PQ,
        reverse: gQ,
        setIsChanging: JQ,
        tooltip: jQ,
        labels: BQ,
        handleLabel: VQ,
        format: DQ,
        onChangeStart: pQ,
        onChangeComplete: GQ,
        padStep: UQ,
        disabled: bQ = !1
      } = QQ;
      const vQ = (0, wQ.useRef)(null),
        dQ = (0, wQ.useRef)(null);
      (0, wQ.useLayoutEffect)((() => {
        var QQ, WQ, XQ;
        const wQ = null !== (QQ = null === (WQ = vQ.current) || void 0 === WQ ? void 0 : WQ.querySelector(".rangeslider")) && void 0 !== QQ ? QQ : null;
        null === wQ || void 0 === wQ || wQ.setAttribute("data-pad-slider", ""), null === wQ || void 0 === wQ || wQ.setAttribute("data-pad-focusable", ""), null === wQ || void 0 === wQ || null === (XQ = wQ.querySelector(".rangeslider__handle")) || void 0 === XQ || XQ.setAttribute("data-pad-slider-handle", ""), dQ.current = wQ
      }), []), (0, wQ.useLayoutEffect)((() => {
        var QQ, WQ;
        bQ ? null === (QQ = dQ.current) || void 0 === QQ || QQ.setAttribute("aria-disabled", "true") : null === (WQ = dQ.current) || void 0 === WQ || WQ.removeAttribute("aria-disabled")
      }), [bQ]);
      const HQ = (null !== (WQ = String(sQ).split(".")[1]) && void 0 !== WQ ? WQ : "").length,
        aQ = QQ => {
          const WQ = Number((Math.round((QQ - TQ) / sQ) * sQ + TQ).toFixed(HQ));
          return Math.min(zQ, Math.max(TQ, WQ))
        },
        lQ = (0, wQ.useRef)(GQ);
      lQ.current = GQ, (0, wQ.useEffect)((() => {
        const QQ = vQ.current;
        if (!QQ) return;
        const WQ = QQ => {
          var WQ;
          yQ.has(QQ.key) && (null === (WQ = lQ.current) || void 0 === WQ || WQ.call(lQ))
        };
        return QQ.addEventListener("keyup", WQ), () => {
          QQ.removeEventListener("keyup", WQ)
        }
      }), []);
      const hQ = (0, wQ.useRef)(!1);
      return (0, rQ.i)(dQ, {
        adjust: QQ => {
          if (bQ) return;
          const WQ = null !== UQ && void 0 !== UQ ? UQ : Math.max(sQ, Math.round((zQ - TQ) / 20 / sQ) * sQ),
            wQ = aQ(XQ + QQ * WQ * (gQ ? -1 : 1));
          wQ !== XQ && (null === pQ || void 0 === pQ || pQ(), FQ(wQ), null === GQ || void 0 === GQ || GQ())
        },
        setFraction: QQ => {
          if (bQ) return;
          const WQ = aQ(TQ + (gQ ? 1 - QQ : QQ) * (zQ - TQ));
          WQ !== XQ && (hQ.current || (hQ.current = !0, null === pQ || void 0 === pQ || pQ()), FQ(WQ))
        },
        endDrag: () => {
          hQ.current && (hQ.current = !1, null === GQ || void 0 === GQ || GQ())
        }
      }), (0, IQ.jsx)("div", {
        ref: vQ,
        style: {
          display: "contents"
        },
        children: (0, IQ.jsx)(qQ.c, {
          value: XQ,
          min: TQ,
          max: zQ,
          step: sQ,
          onChange: FQ,
          orientation: PQ,
          reverse: gQ,
          tooltip: jQ,
          labels: BQ,
          handleLabel: VQ,
          format: DQ,
          onChangeStart: () => {
            null === pQ || void 0 === pQ || pQ(), null === JQ || void 0 === JQ || JQ(!0)
          },
          onChangeComplete: () => {
            null === JQ || void 0 === JQ || JQ(!1), null === GQ || void 0 === GQ || GQ()
          }
        })
      })
    }
    async function DQ() {
      const QQ = gQ.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await QQ.getResult() && (0, JQ.reloadBloxd)()
    }

    function pQ(QQ) {
      let {
        label: WQ,
        options: XQ,
        value: wQ,
        onChange: qQ,
        circleInfoText: TQ
      } = QQ;
      return (0, IQ.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, IQ.jsxs)("div", {
          className: "SliderText",
          children: [WQ, TQ && (0, IQ.jsx)(zQ.b, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: TQ
          })]
        }), (0, IQ.jsx)(sQ.d, {
          ariaLabel: WQ,
          options: XQ,
          value: wQ,
          onChange: qQ
        })]
      })
    }
  },
  7028: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      default: () => KQ
    });
    var wQ = XQ(61),
      qQ = XQ(1581),
      TQ = XQ(6952),
      zQ = XQ(1257),
      sQ = XQ(402),
      FQ = XQ(1607),
      PQ = XQ(1391),
      gQ = XQ(1567),
      JQ = XQ(1507),
      rQ = XQ(1416),
      IQ = XQ(1676),
      jQ = XQ(2756),
      BQ = XQ(2898),
      yQ = XQ(4875),
      VQ = XQ(1162),
      DQ = XQ(1548),
      pQ = XQ(105),
      GQ = XQ(1226);
    const UQ = XQ.p + "static/media/bloxdhubLogo.6a6c367af2ad6e6f1eb3.webp";
    var bQ = XQ(1081),
      vQ = XQ.n(bQ),
      dQ = XQ(1094),
      HQ = XQ(1404),
      aQ = XQ(6946),
      lQ = XQ(1145);
    const hQ = (0, wQ.lazy)((() => Promise.all([XQ.e(111), XQ.e(80), XQ.e(138), XQ.e(137), XQ.e(116), XQ.e(406)]).then((() => XQ(6970))).then((QQ => ({
      default: QQ.ShaderPackPublishForm
    })))));

    function iQ(QQ) {
      let {
        details: WQ,
        owner: XQ,
        onChanged: qQ
      } = QQ;
      const {
        t: zQ
      } = (0, GQ.C)(), sQ = (0, gQ.useNavigatePreserveSearch)(), {
        userContext: FQ
      } = (0, VQ.c)(), [rQ, IQ] = (0, wQ.useState)(!1), [jQ, BQ] = (0, wQ.useState)(null), [yQ, pQ] = (0, wQ.useState)(!1), {
        packId: UQ,
        name: bQ,
        description: iQ,
        live: cQ
      } = WQ;
      async function AQ(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qQ;
        IQ(!0), BQ(null);
        try {
          await QQ(), WQ()
        } catch (XQ) {
          console.error("Failed to change a shader pack", XQ), BQ((0, aQ.y)(XQ, zQ, "shaderPackListing:ownerActionFailed"))
        } finally {
          IQ(!1)
        }
      }
      const RQ = (0, aQ.s)(FQ);
      return (0, lQ.jsxs)("section", {
        className: "ShaderPackOwnerPanel",
        children: [(0, lQ.jsx)("h2", {
          className: "ShaderPackSectionTitle",
          children: zQ("general:manage")
        }), (0, aQ.S)(XQ, !(null === cQ || void 0 === cQ || !cQ.renderId), Date.now(), zQ).map((QQ => (0, lQ.jsxs)("div", {
          className: vQ()("ShaderPackOwnerNotice", {
            Warning: "warning" === QQ.tone
          }),
          children: [(0, lQ.jsx)(dQ.d, {
            name: "warning" === QQ.tone ? "triangle-exclamation" : "circle-info"
          }), (0, lQ.jsxs)("div", {
            children: [QQ.text, QQ.detail && (0, lQ.jsx)("pre", {
              className: "ShaderPackOwnerNoticeDetail",
              children: QQ.detail
            })]
          })]
        }, QQ.text))), WQ.ban && (0, lQ.jsxs)("div", {
          className: "ShaderPackOwnerNotice Warning",
          children: [(0, lQ.jsx)(dQ.d, {
            name: "ban"
          }), (0, lQ.jsxs)("div", {
            children: ["Banned by ", WQ.ban.byName, " on ", new Date(WQ.ban.at).toLocaleString()]
          })]
        }), jQ && (0, lQ.jsx)("div", {
          className: "ShaderPackOwnerError",
          children: jQ
        }), (0, lQ.jsxs)("div", {
          className: "ShaderPackOwnerActions",
          children: [(0, lQ.jsxs)(JQ.T, {
            disabled: rQ,
            onClick: () => {
              !async function() {
                const QQ = await HQ.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:renameTitle",
                  initialValue: bQ,
                  maxLength: TQ.w,
                  submitText: "general:save",
                  validate: QQ => QQ.trim().length < TQ.z ? zQ("shaderPackListing:nameTooShort", {
                    min: String(TQ.z)
                  }) : null
                }).getResult();
                "notificationTornDown" !== QQ && "submit" === (null === QQ || void 0 === QQ ? void 0 : QQ.type) && QQ.value.trim() !== bQ && await AQ((() => DQ.e.updateShaderPack(FQ, {
                  packId: UQ,
                  name: QQ.value.trim()
                })))
              }()
            },
            children: [(0, lQ.jsx)(dQ.d, {
              name: "pen"
            }), " ", zQ("shaderPackListing:rename")]
          }), (0, lQ.jsxs)(JQ.T, {
            disabled: rQ,
            onClick: () => {
              !async function() {
                const QQ = await HQ.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:editDescription",
                  initialValue: iQ,
                  maxLength: TQ.o,
                  multiline: !0,
                  allowEmptySubmit: !0,
                  submitText: "general:save"
                }).getResult();
                "notificationTornDown" !== QQ && "submit" === (null === QQ || void 0 === QQ ? void 0 : QQ.type) && QQ.value.trim() !== iQ && await AQ((() => DQ.e.updateShaderPack(FQ, {
                  packId: UQ,
                  description: QQ.value.trim()
                })))
              }()
            },
            children: [(0, lQ.jsx)(dQ.d, {
              name: "file-lines"
            }), " ", zQ("shaderPackListing:editDescription")]
          }), (0, lQ.jsxs)(JQ.T, {
            disabled: rQ || XQ.isBanned && !XQ.listed,
            onClick: () => {
              AQ((() => DQ.e.updateShaderPack(FQ, {
                packId: UQ,
                listed: !XQ.listed
              })))
            },
            children: [(0, lQ.jsx)(dQ.d, {
              name: XQ.listed ? "eye-slash" : "eye"
            }), " ", zQ(XQ.listed ? "shaderPackListing:unlist" : "shaderPackListing:relist")]
          }), !XQ.isBanned && (0, lQ.jsxs)(JQ.h, {
            disabled: rQ,
            onClick: () => {
              pQ(!yQ)
            },
            children: [(0, lQ.jsx)(dQ.d, {
              name: "upload"
            }), " ", zQ("shaderPackListing:uploadVersion")]
          }), (0, lQ.jsxs)(JQ.Q, {
            disabled: rQ || XQ.isBanned,
            onClick: () => {
              !async function() {
                !0 === await HQ.NotificationProvider.showPromptPopup({
                  title: "shaderPackListing:deleteTitle",
                  subtitle: "shaderPackListing:deleteSubtitle",
                  confirmText: "general:delete",
                  cancelText: "general:cancel",
                  destructive: !0
                }).getResult() && await AQ((() => DQ.e.deleteShaderPack(FQ, UQ)), (() => {
                  sQ(`${aQ.R}?section=mine`, {
                    replace: !0
                  })
                }))
              }()
            },
            children: [(0, lQ.jsx)(dQ.d, {
              name: "trash-can"
            }), " ", zQ("general:delete")]
          }), RQ && (0, lQ.jsxs)(JQ.Q, {
            disabled: rQ,
            onClick: () => {
              AQ((() => DQ.e.setShaderPackBanned(FQ, UQ, !XQ.isBanned)))
            },
            children: [(0, lQ.jsx)(dQ.d, {
              name: XQ.isBanned ? "circle-check" : "ban"
            }), " ", XQ.isBanned ? "Unban" : "Ban"]
          })]
        }), yQ && (0, lQ.jsx)(wQ.Suspense, {
          fallback: (0, lQ.jsx)(PQ.e, {}),
          children: (0, lQ.jsx)(hQ, {
            existing: {
              packId: UQ,
              name: bQ,
              description: iQ
            },
            onPublished: () => {
              pQ(!1), qQ()
            }
          })
        })]
      })
    }
    var cQ = XQ(78),
      AQ = XQ(1972),
      RQ = XQ(1318),
      EQ = XQ(5378),
      CQ = XQ(1238),
      uQ = XQ(6957),
      LQ = XQ(6954),
      kQ = XQ(6964);

    function fQ(QQ) {
      let {
        item: WQ
      } = QQ;
      const {
        t: XQ
      } = (0, GQ.C)(), [qQ] = (0, uQ.j)(), [zQ, sQ] = (0, wQ.useState)(qQ), [FQ, PQ] = (0, wQ.useState)(!1), [gQ, JQ] = (0, wQ.useState)(!1), {
        s3Url: rQ
      } = CQ.clientSideServerUrls, {
        width: IQ,
        height: jQ
      } = TQ.p.large, BQ = (0, TQ.r)(rQ, WQ, zQ, "large"), {
        renderVersion: yQ
      } = WQ;
      return (0, lQ.jsxs)("div", {
        className: "ShaderPackPreviews",
        children: [(0, lQ.jsx)(kQ.e, {
          selected: zQ,
          onSelect: QQ => {
            sQ(QQ), PQ(!1)
          },
          imageUrl: QQ => (0, TQ.r)(rQ, WQ, QQ, "thumb")
        }), (0, lQ.jsxs)("div", {
          className: "ShaderPackPreviewStage",
          children: [!FQ && (0, lQ.jsxs)("button", {
            type: "button",
            className: "ShaderPackPreviewMain",
            title: null === yQ ? void 0 : XQ("shaderPackListing:fullSize"),
            disabled: null === yQ,
            onClick: () => {
              JQ(!0)
            },
            children: [(0, lQ.jsx)("img", {
              src: BQ,
              width: IQ,
              height: jQ,
              alt: XQ(aQ.cb[zQ]),
              draggable: !1
            }), (0, lQ.jsx)(LQ.d, {
              item: WQ
            })]
          }), !FQ && null !== yQ && (0, lQ.jsxs)(eQ, {
            side: "Right",
            onClick: () => {
              PQ(!0)
            },
            children: [(0, lQ.jsx)(dQ.d, {
              name: "arrows-left-right"
            }), " ", XQ("shaderPackListing:compare")]
          }), FQ && null !== yQ && (0, lQ.jsx)(oQ, {
            item: WQ,
            packUrl: BQ,
            baselineUrl: (0, TQ.m)(rQ, yQ, zQ, "large")
          }), FQ && (0, lQ.jsx)(eQ, {
            side: "Left",
            onClick: () => {
              PQ(!1)
            },
            children: XQ("shaderPackListing:withPack")
          }), FQ && (0, lQ.jsx)(eQ, {
            side: "Right",
            onClick: () => {
              PQ(!1)
            },
            children: XQ("shaderPackListing:withoutPack")
          })]
        }), gQ && (0, lQ.jsx)(SQ, {
          fullUrl: (0, TQ.r)(rQ, WQ, zQ, "full"),
          largeUrl: BQ,
          alt: XQ(aQ.cb[zQ]),
          onClose: () => {
            JQ(!1)
          }
        })]
      })
    }

    function SQ(QQ) {
      let {
        fullUrl: WQ,
        largeUrl: XQ,
        alt: qQ,
        onClose: TQ
      } = QQ;
      const zQ = (0, wQ.useRef)(null);
      return (0, RQ.k)("popup", zQ, TQ), (0, wQ.useEffect)((() => {
        function QQ(QQ) {
          "Escape" === QQ.key && (QQ.stopPropagation(), TQ())
        }
        return window.addEventListener("keydown", QQ, !0), () => {
          window.removeEventListener("keydown", QQ, !0)
        }
      }), [TQ]), (0, cQ.createPortal)((0, lQ.jsxs)("div", {
        ref: zQ,
        className: "ShaderPackFullSize",
        onClick: TQ,
        children: [(0, lQ.jsx)("img", {
          className: "ShaderPackFullSizeImage",
          src: WQ,
          alt: qQ,
          draggable: !1,
          style: {
            backgroundImage: `url(${XQ})`
          }
        }), (0, lQ.jsx)(JQ.o, {
          className: "ShaderPackFullSizeClose",
          onClick: TQ
        })]
      }), document.body)
    }
    const tQ = 5;

    function oQ(QQ) {
      let {
        item: WQ,
        packUrl: XQ,
        baselineUrl: qQ
      } = QQ;
      const {
        t: zQ
      } = (0, GQ.C)(), [sQ, FQ] = (0, wQ.useState)(50), PQ = (0, wQ.useRef)(!1), gQ = (0, wQ.useRef)(null), {
        width: JQ,
        height: rQ
      } = TQ.p.large;

      function IQ(QQ) {
        FQ((WQ => (0, AQ.e)(WQ + QQ, 0, 100)))
      }

      function jQ(QQ) {
        const WQ = QQ.currentTarget.getBoundingClientRect();
        FQ((0, AQ.e)((QQ.clientX - WQ.left) / WQ.width * 100, 0, 100))
      }
      return (0, EQ.i)(gQ, {
        adjust: QQ => {
          IQ(QQ * tQ)
        },
        setFraction: QQ => {
          FQ(100 * QQ)
        },
        endDrag: () => {}
      }), (0, lQ.jsxs)("div", {
        ref: gQ,
        className: "ShaderPackCompare",
        "data-pad-slider": "",
        "data-pad-focusable": "",
        role: "slider",
        tabIndex: 0,
        "aria-label": zQ("shaderPackListing:compare"),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(sQ),
        style: {
          "--split": `${sQ}%`
        },
        onKeyDown: function(QQ) {
          const WQ = "ArrowLeft" === QQ.key ? -tQ : "ArrowRight" === QQ.key ? tQ : 0;
          0 !== WQ && (QQ.preventDefault(), IQ(WQ))
        },
        onPointerDown: QQ => {
          PQ.current = !0, QQ.currentTarget.setPointerCapture(QQ.pointerId), jQ(QQ)
        },
        onPointerMove: QQ => {
          PQ.current && jQ(QQ)
        },
        onPointerUp: () => {
          PQ.current = !1
        },
        onPointerCancel: () => {
          PQ.current = !1
        },
        children: [(0, lQ.jsx)("img", {
          className: "ShaderPackCompareBaseline",
          src: qQ,
          width: JQ,
          height: rQ,
          alt: "",
          draggable: !1,
          style: {
            backgroundImage: `url(${XQ})`
          }
        }), (0, lQ.jsx)("div", {
          className: "ShaderPackCompareLine"
        }), (0, lQ.jsx)("img", {
          className: "ShaderPackComparePack",
          src: XQ,
          width: JQ,
          height: rQ,
          alt: "",
          draggable: !1
        }), (0, lQ.jsx)(LQ.d, {
          item: WQ,
          className: "ShaderPackCompareNotice"
        })]
      })
    }

    function eQ(QQ) {
      let {
        side: WQ,
        onClick: XQ,
        children: wQ
      } = QQ;
      return (0, lQ.jsx)("button", {
        type: "button",
        className: `ShaderPackStageButton ${WQ}`,
        onClick: XQ,
        children: (0, lQ.jsx)("span", {
          className: "ShaderPackStageButtonFace SmallTextBold",
          children: wQ
        })
      })
    }
    var nQ = XQ(5349),
      xQ = XQ(367),
      YQ = XQ(7026);
    const NQ = {
      compiler: "shaderPack:compilerUnavailable",
      download: "shaderPackListing:useDownloadFailed",
      apiVersion: "shaderPackListing:useOtherApiVersion",
      invalid: "shaderPackListing:useInvalid",
      errors: "shaderPackListing:useFailsHere",
      save: "shaderPack:saveFailed"
    };

    function ZQ(QQ) {
      const {
        userContext: WQ
      } = (0, VQ.c)(), [qQ, TQ] = (0, wQ.useState)(null), [zQ, sQ] = (0, wQ.useState)(!1), [FQ, PQ] = (0, wQ.useState)(!1), [gQ, JQ] = (0, wQ.useState)(null), rQ = null === QQ || void 0 === QQ ? void 0 : QQ.packId, IQ = null === QQ || void 0 === QQ ? void 0 : QQ.sourceHash;
      return (0, wQ.useEffect)((() => {
        if (sQ(!1), JQ(null), void 0 === rQ) return;
        let QQ = !1;
        return Promise.all([(0, pQ.hasUsableWebGpuAdapter)(), (0, YQ.f)()]).then((WQ => {
          let [XQ, wQ] = WQ;
          var qQ;
          QQ || (TQ(XQ), sQ((null === wQ || void 0 === wQ || null === (qQ = wQ.listing) || void 0 === qQ ? void 0 : qQ.packId) === rQ && wQ.listing.sourceHash === IQ))
        })).catch((WQ => {
          console.error("Failed to check whether this shader pack can be used", WQ), QQ || TQ(!1)
        })), () => {
          QQ = !0
        }
      }), [rQ, IQ]), {
        webGpuUsable: qQ,
        inUse: zQ,
        busy: FQ,
        errorKey: gQ,
        use: () => {
          null !== QQ && async function(QQ) {
            PQ(!0), JQ(null);
            try {
              const {
                installListedShaderPack: wQ
              } = await Promise.all([XQ.e(80), XQ.e(138), XQ.e(117)]).then((() => XQ(40743))), qQ = await wQ({
                packId: QQ.packId,
                sourceHash: QQ.sourceHash,
                name: QQ.name,
                ownerName: QQ.ownerName,
                description: QQ.description
              });
              if ("failed" === qQ.kind) return void JQ(NQ[qQ.reason]);
              sQ(!0), DQ.e.recordShaderPackDownload(WQ, QQ.packId).catch((QQ => {
                console.error("Failed to count a shader pack's download", QQ)
              })), (0, nQ.i)()
            } catch (wQ) {
              console.error("Failed to use the shader pack", wQ), JQ("shaderPack:unexpectedError")
            } finally {
              PQ(!1)
            }
          }(QQ)
        }
      }
    }

    function OQ(QQ) {
      let {
        packUse: WQ
      } = QQ;
      const {
        t: XQ
      } = (0, GQ.C)(), {
        webGpuUsable: wQ,
        inUse: qQ,
        busy: TQ,
        errorKey: zQ,
        use: sQ
      } = WQ;
      return (0, lQ.jsxs)("div", {
        className: "ShaderPackUse",
        children: [(0, lQ.jsxs)(JQ.s, {
          disabled: !0 !== wQ || qQ,
          loading: TQ,
          onClick: sQ,
          children: [(0, lQ.jsx)(dQ.d, {
            name: qQ ? "check" : "download"
          }), " ", XQ(qQ ? "shaderPackListing:inUse" : "shaderPackListing:use")]
        }), !1 === wQ && (0, lQ.jsx)("div", {
          className: "ShaderPackUseNote",
          children: XQ((0, xQ.j)() ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), zQ && (0, lQ.jsx)("div", {
          className: "ShaderPackUseNote Error",
          children: XQ(zQ)
        })]
      })
    }

    function KQ() {
      var QQ;
      const {
        t: WQ
      } = (0, GQ.C)(), XQ = (0, gQ.useNavigatePreserveSearch)(), {
        packId: TQ
      } = (0, qQ.E)(), {
        userContext: zQ,
        isUserContextUpdating: sQ
      } = (0, VQ.c)(), [rQ, jQ] = (0, wQ.useState)(null), [BQ, pQ] = (0, wQ.useState)(null), [UQ, bQ] = (0, wQ.useState)(0), vQ = (0, wQ.useRef)(0);

      function dQ() {
        var QQ;
        null !== (QQ = (0, gQ.getPreviousLocation)()) && void 0 !== QQ && QQ.startsWith(aQ.R) ? XQ(-1) : XQ(aQ.R)
      }(0, yQ.b)(dQ), (0, uQ.c)(), (0, wQ.useEffect)((() => {
        if (sQ || void 0 === TQ) return;
        const QQ = ++vQ.current;
        pQ(null), DQ.e.getShaderPack(zQ, TQ).then((WQ => {
          vQ.current === QQ && jQ(WQ)
        })).catch((WQ => {
          vQ.current === QQ && (console.error("Failed to get the shader pack", WQ), jQ(null), pQ({
            error: WQ
          }))
        }))
      }), [TQ, zQ, sQ, UQ]);
      const HQ = () => {
          bQ((QQ => QQ + 1))
        },
        hQ = (null === rQ || void 0 === rQ ? void 0 : rQ.packId) === TQ ? rQ : null,
        cQ = (0, uQ.m)(),
        AQ = ZQ(null !== (QQ = null === hQ || void 0 === hQ ? void 0 : hQ.live) && void 0 !== QQ ? QQ : null),
        RQ = null !== hQ && void 0 !== hQ && hQ.live ? (0, lQ.jsx)(mQ, {
          item: hQ.live,
          favourites: cQ,
          packUse: AQ
        }) : null;
      return (0, lQ.jsxs)("article", {
        className: "ShaderPackInformation AnimFadeIn",
        children: [null !== hQ && (0, lQ.jsx)(IQ.d, {
          meta: (0, FQ.T)(hQ.name)
        }), (0, lQ.jsx)(JQ.e, {
          onClick: dQ,
          children: WQ("shaderPackListing:backToPacks")
        }), null === hQ && null === BQ && (0, lQ.jsx)("div", {
          className: "ShaderPackInformationMessage",
          children: (0, lQ.jsx)(PQ.e, {})
        }), null !== BQ && (0, lQ.jsxs)("div", {
          className: "ShaderPackInformationMessage",
          children: [(0, aQ.y)(BQ.error, WQ, "shaderPackListing:loadPackFailed"), (0, lQ.jsx)(JQ.h, {
            onClick: HQ,
            children: WQ("general:tryAgain")
          })]
        }), null !== hQ && null === BQ && (0, lQ.jsxs)("div", {
          className: "ShaderPackInformationBody",
          children: [(0, lQ.jsxs)("header", {
            className: "ShaderPackInformationHeader",
            children: [(0, lQ.jsx)("h1", {
              className: "FullyFancyText",
              children: hQ.name
            }), RQ]
          }), hQ.live && (0, lQ.jsx)(fQ, {
            item: hQ.live
          }), hQ.live && (0, lQ.jsx)(MQ, {
            item: hQ.live,
            ownerPreview: hQ.ownerPreview,
            bloxdhubSlug: hQ.bloxdhubSlug,
            actions: RQ
          }), hQ.owner && (0, lQ.jsx)(iQ, {
            details: hQ,
            owner: hQ.owner,
            onChanged: HQ
          })]
        })]
      })
    }

    function mQ(QQ) {
      let {
        item: WQ,
        favourites: XQ,
        packUse: wQ
      } = QQ;
      const qQ = XQ.isFavourite(WQ.packId);
      return (0, lQ.jsxs)("div", {
        className: "ShaderPackInformationActions",
        children: [pQ.featureFlags.settings.canUseShaderPacks && (0, lQ.jsx)(OQ, {
          packUse: wQ
        }), (0, lQ.jsx)(JQ.C, {
          className: "ShaderPackInformationLike",
          onClick: () => {
            XQ.toggle(WQ.packId)
          },
          isLiked: !0 === qQ,
          isLoading: null === qQ
        })]
      })
    }

    function MQ(QQ) {
      let {
        item: WQ,
        ownerPreview: XQ,
        bloxdhubSlug: wQ,
        actions: qQ
      } = QQ;
      const {
        t: sQ
      } = (0, GQ.C)(), FQ = (0, BQ.q)(), PQ = null === wQ ? null : (0, TQ.f)(wQ);
      return (0, lQ.jsxs)("div", {
        className: "ShaderPackFacts",
        children: [WQ.description && (0, lQ.jsx)("p", {
          className: "ShaderPackDescription",
          children: WQ.description
        }), (0, lQ.jsxs)("div", {
          className: "ShaderPackFeatureList",
          children: [(null !== XQ || null !== PQ) && (0, lQ.jsx)("div", {
            className: "ShaderPackAuthor",
            children: null !== XQ ? (0, lQ.jsxs)(lQ.Fragment, {
              children: [(0, lQ.jsx)(jQ.c, {
                playerSocialPreview: XQ,
                showLocation: !1,
                linkToProfile: !0
              }), null !== PQ && (0, lQ.jsx)("a", {
                className: "ShaderPackBloxdhubLogo",
                href: PQ,
                target: "_blank",
                rel: "noopener noreferrer",
                children: (0, lQ.jsx)("img", {
                  src: UQ,
                  alt: TQ.c
                })
              })]
            }) : (0, lQ.jsxs)("a", {
              className: "ShaderPackBloxdhubName",
              href: PQ,
              target: "_blank",
              rel: "noopener noreferrer",
              children: [TQ.c, (0, lQ.jsx)("img", {
                src: UQ,
                alt: ""
              })]
            })
          }), aQ.A.filter((QQ => WQ.features.includes(QQ))).map((QQ => (0, lQ.jsx)(gQ.LinkPreserveSearch, {
            className: "ShaderPackFeature",
            to: (0, aQ.H)(QQ),
            children: sQ(aQ.I[QQ])
          }, QQ)))]
        }), qQ, (0, lQ.jsxs)("dl", {
          className: "ShaderPackFactList",
          children: [(0, lQ.jsxs)("div", {
            children: [(0, lQ.jsx)("dt", {
              children: sQ("shaderPackListing:downloads")
            }), (0, lQ.jsx)("dd", {
              children: (0, zQ.O)(WQ.downloads)
            })]
          }), (0, lQ.jsx)(QW, {
            label: sQ("shaderPackListing:updated"),
            time: WQ.listedUpdatedAt,
            now: FQ
          }), (0, lQ.jsx)(QW, {
            label: sQ("shaderPackListing:created"),
            time: WQ.publishedAt,
            now: FQ
          }), null !== WQ.gpuCost && (0, lQ.jsxs)("div", {
            children: [(0, lQ.jsx)("dt", {
              children: sQ("shaderPackListing:lag")
            }), (0, lQ.jsx)("dd", {
              children: sQ("shaderPackListing:lagPercent", {
                percent: String((0, aQ.O)(WQ.gpuCost))
              })
            })]
          }), (0, lQ.jsxs)("div", {
            children: [(0, lQ.jsx)("dt", {
              children: sQ("shaderPackListing:size")
            }), (0, lQ.jsx)("dd", {
              children: sQ("shaderPackListing:sizeValue", {
                kilobytes: String((0, aQ.L)(WQ.sourceBytes))
              })
            })]
          }), (0, lQ.jsxs)("div", {
            children: [(0, lQ.jsx)("dt", {
              children: sQ("shaderPackListing:files")
            }), (0, lQ.jsx)("dd", {
              children: WQ.fileCount
            })]
          })]
        })]
      })
    }

    function QW(QQ) {
      let {
        label: WQ,
        time: XQ,
        now: wQ
      } = QQ;
      const {
        t: qQ,
        selectedLanguage: TQ
      } = (0, GQ.C)(), zQ = new Date(XQ);
      let FQ = zQ.toLocaleDateString();
      if (wQ - XQ <= 30 * sQ.i) {
        const QQ = (0, GQ.n)(TQ.code, "shaderPackListing:timeAgo");
        FQ = qQ("shaderPackListing:timeAgo", {
          time: (0, sQ.bb)(QQ, XQ, wQ)
        })
      }
      return (0, lQ.jsx)(rQ.e, {
        tooltipInner: zQ.toLocaleString(),
        children: (0, lQ.jsxs)("div", {
          children: [(0, lQ.jsx)("dt", {
            children: WQ
          }), (0, lQ.jsx)("dd", {
            children: FQ
          })]
        })
      })
    }
  },
  5376: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => zQ
    });
    var wQ = XQ(1081),
      qQ = XQ.n(wQ),
      TQ = XQ(1145);

    function zQ(QQ) {
      let {
        options: WQ,
        value: XQ,
        onChange: wQ,
        ariaLabel: zQ,
        className: sQ,
        reselectable: FQ = !1,
        keepsFocus: PQ = !1,
        padTabs: gQ
      } = QQ;
      const JQ = void 0 !== gQ;
      return (0, TQ.jsx)("div", {
        className: qQ()("SegmentedToggle", sQ),
        role: "group",
        "aria-label": zQ,
        "data-pad-tabs": gQ,
        children: WQ.map((QQ => {
          const WQ = QQ.value === XQ;
          return (0, TQ.jsx)("button", {
            type: "button",
            "aria-pressed": WQ,
            "data-pad-tab": JQ || void 0,
            "data-pad-selected": JQ && WQ ? "true" : void 0,
            "data-pad-default-focus": JQ && WQ || void 0,
            "aria-label": QQ.ariaLabel,
            title: QQ.ariaLabel,
            className: qQ()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: WQ
            }),
            onMouseDown: PQ ? QQ => {
              QQ.preventDefault()
            } : void 0,
            onClick: () => {
              WQ && !FQ || wQ(QQ.value)
            },
            children: QQ.label
          }, QQ.value)
        }))
      })
    }
  },
  5378: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => TQ,
      i: () => zQ
    });
    var wQ = XQ(61);
    const qQ = new WeakMap,
      TQ = QQ => {
        var WQ;
        const XQ = QQ.closest("[data-pad-slider]");
        return XQ && null !== (WQ = qQ.get(XQ)) && void 0 !== WQ ? WQ : null
      },
      zQ = (QQ, WQ) => {
        const XQ = (0, wQ.useRef)(WQ);
        XQ.current = WQ, (0, wQ.useEffect)((() => {
          if (QQ.current) return ((QQ, WQ) => (qQ.set(QQ, WQ), () => {
            qQ.get(QQ) === WQ && qQ.delete(QQ)
          }))(QQ.current, {
            adjust: QQ => {
              XQ.current.adjust(QQ)
            },
            setFraction: QQ => {
              XQ.current.setFraction(QQ)
            },
            endDrag: () => {
              XQ.current.endDrag()
            }
          })
        }), [QQ])
      }
  },
  7026: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => qQ,
      f: () => TQ
    });
    var wQ = XQ(43);
    const qQ = "shaderPack";
    async function TQ() {
      var QQ;
      let WQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (QQ = await wQ.f.getItem(qQ, WQ)) && void 0 !== QQ ? QQ : null
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);