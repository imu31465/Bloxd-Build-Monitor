export const id = 124;
export const ids = [124];
export const modules = {
  5540: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => pU,
      i: () => BU,
      j: () => aU,
      k: () => GU
    });
    var cU = zU(61),
      yU = zU(5548),
      QU = zU(4775),
      AU = zU(1420),
      FU = zU(5581),
      oU = zU(1106),
      DU = zU.n(oU),
      EU = zU(1410),
      YU = zU(1800),
      NU = zU(5588),
      IU = zU(1305);

    function pU(UU) {
      let {
        label: XU,
        onClick: zU,
        checked: cU,
        circleInfoText: yU,
        className: FU,
        disabled: oU,
        note: EU
      } = UU;
      return (0, IU.jsxs)("div", {
        "aria-disabled": oU || void 0,
        "data-pad-focusable": !0,
        className: DU()("SettingBox CheckboxContainer", {
          [FU]: FU,
          SettingBoxDisabled: oU
        }),
        onClick: () => {
          oU || zU(!cU)
        },
        children: [(0, IU.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, IU.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, IU.jsx)(QU.d, {
              className: "SettingsCheckbox",
              checked: cU,
              disabled: oU,
              onChange: () => {}
            })
          }), (0, IU.jsxs)("div", {
            className: "CheckboxText",
            children: [XU, yU && (0, IU.jsx)("span", {
              onClick: UU => UU.stopPropagation(),
              children: (0, IU.jsx)(AU.c, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: yU
              })
            })]
          })]
        }), EU && (0, IU.jsx)("div", {
          className: "SettingNote",
          children: EU
        })]
      })
    }

    function aU(UU) {
      let {
        name: XU,
        onChange: zU,
        min: yU,
        max: QU,
        step: FU,
        initValue: oU,
        circleInfoText: EU,
        format: YU,
        className: NU,
        padStep: pU,
        disabled: aU = !1,
        selectableMax: tU,
        cappedNote: gU,
        note: GU,
        onChangeComplete: BU
      } = UU;
      const [ZU, RU] = (0, cU.useState)(oU), PU = (0, cU.useRef)(oU);
      (0, cU.useEffect)((() => {
        PU.current = oU, RU(oU)
      }), [oU]);
      const WU = void 0 !== tU && tU < QU,
        dU = WU ? {
          "--slider-selectable": (tU - yU) / (QU - yU)
        } : void 0,
        LU = WU && gU ? gU : GU;
      return (0, IU.jsxs)("div", {
        className: DU()("SettingBox SettingsSliderDiv", {
          [NU]: NU,
          SettingBoxDisabled: aU,
          SliderCapped: WU
        }),
        style: dU,
        children: [(0, IU.jsxs)("div", {
          className: "SliderText",
          children: [`${XU}: ${YU?YU(ZU):ZU}`, EU && (0, IU.jsx)(AU.c, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: EU
          })]
        }), (0, IU.jsx)("div", {
          className: "SliderDiv",
          children: (0, IU.jsx)(kU, {
            value: ZU,
            min: yU,
            max: QU,
            step: FU,
            onChange: UU => {
              if (WU && UU >= tU && ZU === tU) return;
              const XU = WU ? Math.min(UU, tU) : UU;
              PU.current = XU, RU(XU), zU(XU)
            },
            onChangeComplete: BU && (() => {
              BU(PU.current)
            }),
            format: YU,
            padStep: pU,
            disabled: aU
          })
        }), LU && (0, IU.jsx)("div", {
          className: "SettingNote",
          children: LU
        })]
      })
    }
    const tU = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function gU(UU) {
      var XU;
      return (null !== (XU = String(UU).split(".")[1]) && void 0 !== XU ? XU : "").length
    }

    function kU(UU) {
      let {
        value: XU,
        min: zU,
        max: QU,
        step: AU,
        onChange: FU,
        orientation: oU,
        reverse: DU,
        setIsChanging: EU,
        tooltip: YU,
        labels: pU,
        handleLabel: aU,
        format: kU,
        onChangeStart: GU,
        onChangeComplete: BU,
        padStep: ZU,
        disabled: RU = !1
      } = UU;
      const PU = (0, cU.useRef)(null),
        WU = (0, cU.useRef)(null);
      (0, cU.useLayoutEffect)((() => {
        var UU, XU, zU;
        const cU = null !== (UU = null === (XU = PU.current) || void 0 === XU ? void 0 : XU.querySelector(".rangeslider")) && void 0 !== UU ? UU : null;
        null === cU || void 0 === cU || cU.setAttribute("data-pad-slider", ""), null === cU || void 0 === cU || cU.setAttribute("data-pad-focusable", ""), null === cU || void 0 === cU || null === (zU = cU.querySelector(".rangeslider__handle")) || void 0 === zU || zU.setAttribute("data-pad-slider-handle", ""), WU.current = cU
      }), []), (0, cU.useLayoutEffect)((() => {
        var UU, XU;
        RU ? null === (UU = WU.current) || void 0 === UU || UU.setAttribute("aria-disabled", "true") : null === (XU = WU.current) || void 0 === XU || XU.removeAttribute("aria-disabled")
      }), [RU]);
      const dU = Math.max(gU(AU), gU(zU)),
        LU = UU => {
          if (UU >= QU) return QU;
          if (UU <= zU) return zU;
          const XU = Number((Math.round((UU - zU) / AU) * AU + zU).toFixed(dU));
          return Math.min(QU, Math.max(zU, XU))
        },
        eU = (0, cU.useRef)(BU);
      eU.current = BU, (0, cU.useEffect)((() => {
        const UU = PU.current;
        if (!UU) return;
        const XU = UU => {
          var XU;
          tU.has(UU.key) && (null === (XU = eU.current) || void 0 === XU || XU.call(eU))
        };
        return UU.addEventListener("keyup", XU), () => {
          UU.removeEventListener("keyup", XU)
        }
      }), []);
      const CU = (0, cU.useRef)(!1);
      return (0, NU.h)(WU, {
        adjust: UU => {
          if (RU) return;
          const cU = null !== ZU && void 0 !== ZU ? ZU : Math.max(AU, Math.round((QU - zU) / 20 / AU) * AU),
            yU = LU(XU + UU * cU * (DU ? -1 : 1));
          yU !== XU && (null === GU || void 0 === GU || GU(), FU(yU), null === BU || void 0 === BU || BU())
        },
        setFraction: UU => {
          if (RU) return;
          const cU = LU(zU + (DU ? 1 - UU : UU) * (QU - zU));
          cU !== XU && (CU.current || (CU.current = !0, null === GU || void 0 === GU || GU()), FU(cU))
        },
        endDrag: () => {
          CU.current && (CU.current = !1, null === BU || void 0 === BU || BU())
        }
      }), (0, IU.jsx)("div", {
        ref: PU,
        style: {
          display: "contents"
        },
        children: (0, IU.jsx)(yU.c, {
          value: XU,
          min: zU,
          max: QU,
          step: AU,
          onChange: UU => {
            FU(LU(UU))
          },
          orientation: oU,
          reverse: DU,
          tooltip: YU,
          labels: pU,
          handleLabel: aU,
          format: kU,
          onChangeStart: () => {
            null === GU || void 0 === GU || GU(), null === EU || void 0 === EU || EU(!0)
          },
          onChangeComplete: () => {
            null === EU || void 0 === EU || EU(!1), null === BU || void 0 === BU || BU()
          }
        })
      })
    }
    async function GU() {
      const UU = EU.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await UU.getResult() && (0, YU.reloadBloxd)()
    }

    function BU(UU) {
      let {
        label: XU,
        options: zU,
        value: cU,
        onChange: yU,
        circleInfoText: QU
      } = UU;
      return (0, IU.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, IU.jsxs)("div", {
          className: "SliderText",
          children: [XU, QU && (0, IU.jsx)(AU.c, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: QU
          })]
        }), (0, IU.jsx)(FU.d, {
          ariaLabel: XU,
          options: zU,
          value: cU,
          onChange: yU
        })]
      })
    }
  },
  7259: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      default: () => bU
    });
    var cU = zU(61),
      yU = zU(1577),
      QU = zU(7158),
      AU = zU(1236),
      FU = zU(344),
      oU = zU(1596),
      DU = zU(1384),
      EU = zU(1568),
      YU = zU(1494),
      NU = zU(1420),
      IU = zU(1660),
      pU = zU(2841),
      aU = zU(2963),
      tU = zU(4991),
      gU = zU(1129),
      kU = zU(1545),
      GU = zU(97),
      BU = zU(1193);
    const ZU = zU.p + "static/media/bloxdhubLogo.6a6c367af2ad6e6f1eb3.webp";
    var RU = zU(1106),
      PU = zU.n(RU),
      WU = zU(1390),
      dU = zU(1410),
      LU = zU(7150),
      eU = zU(1305);
    const CU = (0, cU.lazy)((() => Promise.all([zU.e(120), zU.e(89), zU.e(147), zU.e(146), zU.e(125), zU.e(703)]).then((() => zU(7196))).then((UU => ({
      default: UU.ShaderPackPublishForm
    })))));

    function wU(UU) {
      let {
        details: XU,
        owner: zU,
        onChanged: yU
      } = UU;
      const {
        t: AU
      } = (0, BU.I)(), FU = (0, EU.useNavigatePreserveSearch)(), {
        userContext: oU
      } = (0, gU.d)(), [NU, IU] = (0, cU.useState)(!1), [pU, aU] = (0, cU.useState)(null), [tU, GU] = (0, cU.useState)(!1), {
        packId: ZU,
        name: RU,
        description: wU,
        live: qU
      } = XU;
      async function OU(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yU;
        IU(!0), aU(null);
        try {
          await UU(), XU()
        } catch (zU) {
          console.error("Failed to change a shader pack", zU), aU((0, LU.w)(zU, AU, "shaderPackListing:ownerActionFailed"))
        } finally {
          IU(!1)
        }
      }
      const SU = (0, LU.p)(oU);
      return (0, eU.jsxs)("section", {
        className: "ShaderPackOwnerPanel",
        children: [(0, eU.jsx)("h2", {
          className: "ShaderPackSectionTitle",
          children: AU("general:manage")
        }), (0, LU.V)(zU, !(null === qU || void 0 === qU || !qU.renderId), Date.now(), AU).map((UU => (0, eU.jsxs)("div", {
          className: PU()("ShaderPackOwnerNotice", {
            Warning: "warning" === UU.tone
          }),
          children: [(0, eU.jsx)(WU.d, {
            name: "warning" === UU.tone ? "triangle-exclamation" : "circle-info"
          }), (0, eU.jsxs)("div", {
            children: [UU.text, UU.detail && (0, eU.jsx)("pre", {
              className: "ShaderPackOwnerNoticeDetail",
              children: UU.detail
            })]
          })]
        }, UU.text))), XU.ban && (0, eU.jsxs)("div", {
          className: "ShaderPackOwnerNotice Warning",
          children: [(0, eU.jsx)(WU.d, {
            name: "ban"
          }), (0, eU.jsxs)("div", {
            children: ["Banned by ", XU.ban.byName, " on ", new Date(XU.ban.at).toLocaleString()]
          })]
        }), pU && (0, eU.jsx)("div", {
          className: "ShaderPackOwnerError",
          children: pU
        }), (0, eU.jsxs)("div", {
          className: "ShaderPackOwnerActions",
          children: [(0, eU.jsxs)(YU.O, {
            disabled: NU,
            onClick: () => {
              !async function() {
                const UU = await dU.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:renameTitle",
                  initialValue: RU,
                  maxLength: QU.B,
                  submitText: "general:save",
                  validate: UU => UU.trim().length < QU.C ? AU("shaderPackListing:nameTooShort", {
                    min: String(QU.C)
                  }) : null
                }).getResult();
                "notificationTornDown" !== UU && "submit" === (null === UU || void 0 === UU ? void 0 : UU.type) && UU.value.trim() !== RU && await OU((() => kU.c.updateShaderPack(oU, {
                  packId: ZU,
                  name: UU.value.trim()
                })))
              }()
            },
            children: [(0, eU.jsx)(WU.d, {
              name: "pen"
            }), " ", AU("shaderPackListing:rename")]
          }), (0, eU.jsxs)(YU.O, {
            disabled: NU,
            onClick: () => {
              !async function() {
                const UU = await dU.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:editDescription",
                  initialValue: wU,
                  maxLength: QU.r,
                  multiline: !0,
                  allowEmptySubmit: !0,
                  submitText: "general:save"
                }).getResult();
                "notificationTornDown" !== UU && "submit" === (null === UU || void 0 === UU ? void 0 : UU.type) && UU.value.trim() !== wU && await OU((() => kU.c.updateShaderPack(oU, {
                  packId: ZU,
                  description: UU.value.trim()
                })))
              }()
            },
            children: [(0, eU.jsx)(WU.d, {
              name: "file-lines"
            }), " ", AU("shaderPackListing:editDescription")]
          }), (0, eU.jsxs)(YU.O, {
            disabled: NU || zU.isBanned && !zU.listed,
            onClick: () => {
              OU((() => kU.c.updateShaderPack(oU, {
                packId: ZU,
                listed: !zU.listed
              })))
            },
            children: [(0, eU.jsx)(WU.d, {
              name: zU.listed ? "eye-slash" : "eye"
            }), " ", AU(zU.listed ? "shaderPackListing:unlist" : "shaderPackListing:relist")]
          }), !zU.isBanned && (0, eU.jsxs)(YU.f, {
            disabled: NU,
            onClick: () => {
              GU(!tU)
            },
            children: [(0, eU.jsx)(WU.d, {
              name: "upload"
            }), " ", AU("shaderPackListing:uploadVersion")]
          }), (0, eU.jsxs)(YU.K, {
            disabled: NU || zU.isBanned,
            onClick: () => {
              !async function() {
                !0 === await dU.NotificationProvider.showPromptPopup({
                  title: "shaderPackListing:deleteTitle",
                  subtitle: "shaderPackListing:deleteSubtitle",
                  confirmText: "general:delete",
                  cancelText: "general:cancel",
                  destructive: !0
                }).getResult() && await OU((() => kU.c.deleteShaderPack(oU, ZU)), (() => {
                  FU(`${LU.T}?section=mine`, {
                    replace: !0
                  })
                }))
              }()
            },
            children: [(0, eU.jsx)(WU.d, {
              name: "trash-can"
            }), " ", AU("general:delete")]
          }), SU && (0, eU.jsxs)(YU.K, {
            disabled: NU,
            onClick: () => {
              OU((() => kU.c.setShaderPackBanned(oU, ZU, !zU.isBanned)))
            },
            children: [(0, eU.jsx)(WU.d, {
              name: zU.isBanned ? "circle-check" : "ban"
            }), " ", zU.isBanned ? "Unban" : "Ban"]
          })]
        }), tU && (0, eU.jsx)(cU.Suspense, {
          fallback: (0, eU.jsx)(DU.b, {}),
          children: (0, eU.jsx)(CU, {
            existing: {
              packId: ZU,
              name: RU,
              description: wU
            },
            onPublished: () => {
              GU(!1), yU()
            }
          })
        })]
      })
    }
    var qU = zU(73),
      OU = zU(1974),
      SU = zU(1294),
      rU = zU(5588),
      uU = zU(1203),
      fU = zU(7172),
      iU = zU(7167),
      HU = zU(7181);

    function MU(UU) {
      let {
        item: XU
      } = UU;
      const {
        t: zU
      } = (0, BU.I)(), [yU] = (0, fU.g)(), [AU, FU] = (0, cU.useState)(yU), [oU, DU] = (0, cU.useState)(!1), [EU, YU] = (0, cU.useState)(!1), {
        s3Url: NU
      } = uU.clientSideServerUrls, {
        width: IU,
        height: pU
      } = QU.s.large, aU = (0, QU.v)(NU, XU, AU, "large"), {
        renderVersion: tU
      } = XU;
      return (0, eU.jsxs)("div", {
        className: "ShaderPackPreviews",
        children: [(0, eU.jsx)(HU.b, {
          selected: AU,
          onSelect: UU => {
            FU(UU), DU(!1)
          },
          imageUrl: UU => (0, QU.v)(NU, XU, UU, "thumb")
        }), (0, eU.jsxs)("div", {
          className: "ShaderPackPreviewStage",
          children: [!oU && (0, eU.jsxs)("button", {
            type: "button",
            className: "ShaderPackPreviewMain",
            title: null === tU ? void 0 : zU("shaderPackListing:fullSize"),
            disabled: null === tU,
            onClick: () => {
              YU(!0)
            },
            children: [(0, eU.jsx)("img", {
              src: aU,
              width: IU,
              height: pU,
              alt: zU(LU.db[AU]),
              draggable: !1
            }), (0, eU.jsx)(iU.d, {
              item: XU
            })]
          }), !oU && null !== tU && (0, eU.jsxs)(nU, {
            side: "Right",
            onClick: () => {
              DU(!0)
            },
            children: [(0, eU.jsx)(WU.d, {
              name: "arrows-left-right"
            }), " ", zU("shaderPackListing:compare")]
          }), oU && null !== tU && (0, eU.jsx)(sU, {
            item: XU,
            packUrl: aU,
            baselineUrl: (0, QU.o)(NU, tU, AU, "large")
          }), oU && (0, eU.jsx)(nU, {
            side: "Left",
            onClick: () => {
              DU(!1)
            },
            children: zU("shaderPackListing:withPack")
          }), oU && (0, eU.jsx)(nU, {
            side: "Right",
            onClick: () => {
              DU(!1)
            },
            children: zU("shaderPackListing:withoutPack")
          })]
        }), EU && (0, eU.jsx)(vU, {
          fullUrl: (0, QU.v)(NU, XU, AU, "full"),
          largeUrl: aU,
          alt: zU(LU.db[AU]),
          onClose: () => {
            YU(!1)
          }
        })]
      })
    }

    function vU(UU) {
      let {
        fullUrl: XU,
        largeUrl: zU,
        alt: yU,
        onClose: QU
      } = UU;
      const AU = (0, cU.useRef)(null);
      return (0, SU.t)("popup", AU, QU), (0, cU.useEffect)((() => {
        function UU(UU) {
          "Escape" === UU.key && (UU.stopPropagation(), QU())
        }
        return window.addEventListener("keydown", UU, !0), () => {
          window.removeEventListener("keydown", UU, !0)
        }
      }), [QU]), (0, qU.createPortal)((0, eU.jsxs)("div", {
        ref: AU,
        className: "ShaderPackFullSize",
        onClick: QU,
        children: [(0, eU.jsx)("img", {
          className: "ShaderPackFullSizeImage",
          src: XU,
          alt: yU,
          draggable: !1,
          style: {
            backgroundImage: `url(${zU})`
          }
        }), (0, eU.jsx)(YU.k, {
          className: "ShaderPackFullSizeClose",
          onClick: QU
        })]
      }), document.body)
    }
    const VU = 5;

    function sU(UU) {
      let {
        item: XU,
        packUrl: zU,
        baselineUrl: yU
      } = UU;
      const {
        t: AU
      } = (0, BU.I)(), [FU, oU] = (0, cU.useState)(50), DU = (0, cU.useRef)(!1), EU = (0, cU.useRef)(null), {
        width: YU,
        height: NU
      } = QU.s.large;

      function IU(UU) {
        oU((XU => (0, OU.f)(XU + UU, 0, 100)))
      }

      function pU(UU) {
        const XU = UU.currentTarget.getBoundingClientRect();
        oU((0, OU.f)((UU.clientX - XU.left) / XU.width * 100, 0, 100))
      }
      return (0, rU.h)(EU, {
        adjust: UU => {
          IU(UU * VU)
        },
        setFraction: UU => {
          oU(100 * UU)
        },
        endDrag: () => {}
      }), (0, eU.jsxs)("div", {
        ref: EU,
        className: "ShaderPackCompare",
        "data-pad-slider": "",
        "data-pad-focusable": "",
        role: "slider",
        tabIndex: 0,
        "aria-label": AU("shaderPackListing:compare"),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(FU),
        style: {
          "--split": `${FU}%`
        },
        onKeyDown: function(UU) {
          const XU = "ArrowLeft" === UU.key ? -VU : "ArrowRight" === UU.key ? VU : 0;
          0 !== XU && (UU.preventDefault(), IU(XU))
        },
        onPointerDown: UU => {
          DU.current = !0, UU.currentTarget.setPointerCapture(UU.pointerId), pU(UU)
        },
        onPointerMove: UU => {
          DU.current && pU(UU)
        },
        onPointerUp: () => {
          DU.current = !1
        },
        onPointerCancel: () => {
          DU.current = !1
        },
        children: [(0, eU.jsx)("img", {
          className: "ShaderPackCompareBaseline",
          src: yU,
          width: YU,
          height: NU,
          alt: "",
          draggable: !1,
          style: {
            backgroundImage: `url(${zU})`
          }
        }), (0, eU.jsx)("div", {
          className: "ShaderPackCompareLine"
        }), (0, eU.jsx)("img", {
          className: "ShaderPackComparePack",
          src: zU,
          width: YU,
          height: NU,
          alt: "",
          draggable: !1
        }), (0, eU.jsx)(iU.d, {
          item: XU,
          className: "ShaderPackCompareNotice"
        })]
      })
    }

    function nU(UU) {
      let {
        side: XU,
        onClick: zU,
        children: cU
      } = UU;
      return (0, eU.jsx)("button", {
        type: "button",
        className: `ShaderPackStageButton ${XU}`,
        onClick: zU,
        children: (0, eU.jsx)("span", {
          className: "ShaderPackStageButtonFace SmallTextBold",
          children: cU
        })
      })
    }
    var mU = zU(5540),
      lU = zU(316),
      xU = zU(7253);
    const JU = {
      compiler: "shaderPack:compilerUnavailable",
      download: "shaderPackListing:useDownloadFailed",
      apiVersion: "shaderPackListing:useOtherApiVersion",
      invalid: "shaderPackListing:useInvalid",
      errors: "shaderPackListing:useFailsHere",
      save: "shaderPack:saveFailed"
    };

    function jU(UU) {
      const {
        userContext: XU
      } = (0, gU.d)(), [yU, QU] = (0, cU.useState)(null), [AU, FU] = (0, cU.useState)(!1), [oU, DU] = (0, cU.useState)(!1), [EU, YU] = (0, cU.useState)(null), NU = null === UU || void 0 === UU ? void 0 : UU.packId, IU = null === UU || void 0 === UU ? void 0 : UU.sourceHash;
      return (0, cU.useEffect)((() => {
        if (FU(!1), YU(null), void 0 === NU) return;
        let UU = !1;
        return Promise.all([(0, GU.hasUsableWebGpuAdapter)(), (0, xU.f)()]).then((XU => {
          let [zU, cU] = XU;
          var yU;
          UU || (QU(zU), FU((null === cU || void 0 === cU || null === (yU = cU.listing) || void 0 === yU ? void 0 : yU.packId) === NU && cU.listing.sourceHash === IU))
        })).catch((XU => {
          console.error("Failed to check whether this shader pack can be used", XU), UU || QU(!1)
        })), () => {
          UU = !0
        }
      }), [NU, IU]), {
        webGpuUsable: yU,
        inUse: AU,
        busy: oU,
        errorKey: EU,
        use: () => {
          null !== UU && async function(UU) {
            DU(!0), YU(null);
            try {
              const {
                installListedShaderPack: cU
              } = await Promise.all([zU.e(89), zU.e(147), zU.e(126)]).then((() => zU(41575))), yU = await cU({
                packId: UU.packId,
                sourceHash: UU.sourceHash,
                name: UU.name,
                ownerName: UU.ownerName,
                description: UU.description
              });
              if ("failed" === yU.kind) return void YU(JU[yU.reason]);
              FU(!0), kU.c.recordShaderPackDownload(XU, UU.packId).catch((UU => {
                console.error("Failed to count a shader pack's download", UU)
              })), (0, mU.k)()
            } catch (cU) {
              console.error("Failed to use the shader pack", cU), YU("shaderPack:unexpectedError")
            } finally {
              DU(!1)
            }
          }(UU)
        }
      }
    }

    function KU(UU) {
      let {
        packUse: XU
      } = UU;
      const {
        t: zU
      } = (0, BU.I)(), {
        webGpuUsable: cU,
        inUse: yU,
        busy: QU,
        errorKey: AU,
        use: FU
      } = XU;
      return (0, eU.jsxs)("div", {
        className: "ShaderPackUse",
        children: [(0, eU.jsxs)(YU.l, {
          disabled: !0 !== cU || yU,
          loading: QU,
          onClick: FU,
          children: [(0, eU.jsx)(WU.d, {
            name: yU ? "check" : "download"
          }), " ", zU(yU ? "shaderPackListing:inUse" : "shaderPackListing:use")]
        }), !1 === cU && (0, eU.jsx)("div", {
          className: "ShaderPackUseNote",
          children: zU((0, lU.l)() ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), AU && (0, eU.jsx)("div", {
          className: "ShaderPackUseNote Error",
          children: zU(AU)
        })]
      })
    }

    function bU() {
      var UU;
      const {
        t: XU
      } = (0, BU.I)(), zU = (0, EU.useNavigatePreserveSearch)(), {
        packId: QU
      } = (0, yU.C)(), {
        userContext: AU,
        isUserContextUpdating: FU
      } = (0, gU.d)(), [NU, pU] = (0, cU.useState)(null), [aU, GU] = (0, cU.useState)(null), [ZU, RU] = (0, cU.useState)(0), PU = (0, cU.useRef)(0);

      function WU() {
        var UU;
        null !== (UU = (0, EU.getPreviousLocation)()) && void 0 !== UU && UU.startsWith(LU.T) ? zU(-1) : zU(LU.T)
      }(0, tU.e)(WU), (0, fU.d)(), (0, cU.useEffect)((() => {
        if (FU || void 0 === QU) return;
        const UU = ++PU.current;
        GU(null), kU.c.getShaderPack(AU, QU).then((XU => {
          PU.current === UU && pU(XU)
        })).catch((XU => {
          PU.current === UU && (console.error("Failed to get the shader pack", XU), pU(null), GU({
            error: XU
          }))
        }))
      }), [QU, AU, FU, ZU]);
      const dU = () => {
          RU((UU => UU + 1))
        },
        CU = (null === NU || void 0 === NU ? void 0 : NU.packId) === QU ? NU : null,
        qU = (0, fU.h)(),
        OU = jU(null !== (UU = null === CU || void 0 === CU ? void 0 : CU.live) && void 0 !== UU ? UU : null),
        SU = null !== CU && void 0 !== CU && CU.live ? (0, eU.jsx)(TU, {
          item: CU.live,
          favourites: qU,
          packUse: OU
        }) : null;
      return (0, eU.jsxs)("article", {
        className: "ShaderPackInformation AnimFadeIn",
        children: [null !== CU && (0, eU.jsx)(IU.d, {
          meta: (0, oU.$)(CU.name)
        }), (0, eU.jsx)(YU.e, {
          onClick: WU,
          children: XU("shaderPackListing:backToPacks")
        }), null === CU && null === aU && (0, eU.jsx)("div", {
          className: "ShaderPackInformationMessage",
          children: (0, eU.jsx)(DU.b, {})
        }), null !== aU && (0, eU.jsxs)("div", {
          className: "ShaderPackInformationMessage",
          children: [(0, LU.w)(aU.error, XU, "shaderPackListing:loadPackFailed"), (0, eU.jsx)(YU.f, {
            onClick: dU,
            children: XU("general:tryAgain")
          })]
        }), null !== CU && null === aU && (0, eU.jsxs)("div", {
          className: "ShaderPackInformationBody",
          children: [(0, eU.jsxs)("header", {
            className: "ShaderPackInformationHeader",
            children: [(0, eU.jsx)("h1", {
              className: "FullyFancyText",
              children: CU.name
            }), SU]
          }), CU.live && (0, eU.jsx)(MU, {
            item: CU.live
          }), CU.live && (0, eU.jsx)(hU, {
            item: CU.live,
            ownerPreview: CU.ownerPreview,
            bloxdhubSlug: CU.bloxdhubSlug,
            actions: SU
          }), CU.owner && (0, eU.jsx)(wU, {
            details: CU,
            owner: CU.owner,
            onChanged: dU
          })]
        })]
      })
    }

    function TU(UU) {
      let {
        item: XU,
        favourites: zU,
        packUse: cU
      } = UU;
      const yU = zU.isFavourite(XU.packId);
      return (0, eU.jsxs)("div", {
        className: "ShaderPackInformationActions",
        children: [GU.featureFlags.settings.canUseShaderPacks && (0, eU.jsx)(KU, {
          packUse: cU
        }), (0, eU.jsx)(YU.q, {
          className: "ShaderPackInformationLike",
          onClick: () => {
            zU.toggle(XU.packId)
          },
          isLiked: !0 === yU,
          isLoading: null === yU
        })]
      })
    }

    function hU(UU) {
      let {
        item: XU,
        ownerPreview: zU,
        bloxdhubSlug: cU,
        actions: yU
      } = UU;
      const {
        t: FU
      } = (0, BU.I)(), oU = (0, aU.q)(), DU = null === cU ? null : (0, QU.f)(cU);
      return (0, eU.jsxs)("div", {
        className: "ShaderPackFacts",
        children: [XU.description && (0, eU.jsx)("p", {
          className: "ShaderPackDescription",
          children: XU.description
        }), (0, eU.jsxs)("div", {
          className: "ShaderPackFeatureList",
          children: [(null !== zU || null !== DU) && (0, eU.jsx)("div", {
            className: "ShaderPackAuthor",
            children: null !== zU ? (0, eU.jsxs)(eU.Fragment, {
              children: [(0, eU.jsx)(pU.f, {
                playerSocialPreview: zU,
                showLocation: !1,
                linkToProfile: !0
              }), null !== DU && (0, eU.jsx)("a", {
                className: "ShaderPackBloxdhubLogo",
                href: DU,
                target: "_blank",
                rel: "noopener noreferrer",
                children: (0, eU.jsx)("img", {
                  src: ZU,
                  alt: QU.c
                })
              })]
            }) : (0, eU.jsxs)("a", {
              className: "ShaderPackBloxdhubName",
              href: DU,
              target: "_blank",
              rel: "noopener noreferrer",
              children: [QU.c, (0, eU.jsx)("img", {
                src: ZU,
                alt: ""
              })]
            })
          }), LU.z.filter((UU => XU.features.includes(UU))).map((UU => (0, eU.jsx)(EU.LinkPreserveSearch, {
            className: "ShaderPackFeature",
            to: (0, LU.K)(UU),
            children: FU(LU.N[UU])
          }, UU)))]
        }), yU, (0, eU.jsxs)("dl", {
          className: "ShaderPackFactList",
          children: [(0, eU.jsxs)("div", {
            children: [(0, eU.jsx)("dt", {
              children: FU("shaderPackListing:downloads")
            }), (0, eU.jsx)("dd", {
              children: (0, AU.I)(XU.downloads)
            })]
          }), (0, eU.jsx)(UX, {
            label: FU("shaderPackListing:updated"),
            time: XU.listedUpdatedAt,
            now: oU
          }), (0, eU.jsx)(UX, {
            label: FU("shaderPackListing:created"),
            time: XU.publishedAt,
            now: oU
          }), null !== XU.gpuCost && (0, eU.jsxs)("div", {
            children: [(0, eU.jsx)("dt", {
              children: FU("shaderPackListing:lag")
            }), (0, eU.jsx)("dd", {
              children: FU("shaderPackListing:lagPercent", {
                percent: String((0, LU.S)(XU.gpuCost))
              })
            })]
          }), (0, eU.jsxs)("div", {
            children: [(0, eU.jsx)("dt", {
              children: FU("shaderPackListing:size")
            }), (0, eU.jsx)("dd", {
              children: FU("shaderPackListing:sizeValue", {
                kilobytes: String((0, LU.Q)(XU.sourceBytes))
              })
            })]
          }), (0, eU.jsxs)("div", {
            children: [(0, eU.jsx)("dt", {
              children: FU("shaderPackListing:files")
            }), (0, eU.jsx)("dd", {
              children: XU.fileCount
            })]
          })]
        })]
      })
    }

    function UX(UU) {
      let {
        label: XU,
        time: zU,
        now: cU
      } = UU;
      const {
        t: yU,
        selectedLanguage: QU
      } = (0, BU.I)(), AU = new Date(zU);
      let oU = AU.toLocaleDateString();
      if (cU - zU <= 30 * FU.h) {
        const UU = (0, BU.l)(QU.code, "shaderPackListing:timeAgo");
        oU = yU("shaderPackListing:timeAgo", {
          time: (0, FU.eb)(UU, zU, cU)
        })
      }
      return (0, eU.jsx)(NU.d, {
        tooltipInner: AU.toLocaleString(),
        children: (0, eU.jsxs)("div", {
          children: [(0, eU.jsx)("dt", {
            children: XU
          }), (0, eU.jsx)("dd", {
            children: oU
          })]
        })
      })
    }
  },
  5581: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => AU
    });
    var cU = zU(1106),
      yU = zU.n(cU),
      QU = zU(1305);

    function AU(UU) {
      let {
        options: XU,
        value: zU,
        onChange: cU,
        ariaLabel: AU,
        className: FU,
        reselectable: oU = !1,
        keepsFocus: DU = !1,
        padTabs: EU
      } = UU;
      const YU = void 0 !== EU;
      return (0, QU.jsx)("div", {
        className: yU()("SegmentedToggle", FU),
        role: "group",
        "aria-label": AU,
        "data-pad-tabs": EU,
        children: XU.map((UU => {
          const XU = UU.value === zU;
          return (0, QU.jsx)("button", {
            type: "button",
            "aria-pressed": XU,
            "data-pad-tab": YU || void 0,
            "data-pad-selected": YU && XU ? "true" : void 0,
            "data-pad-default-focus": YU && XU || void 0,
            "aria-label": UU.ariaLabel,
            title: UU.ariaLabel,
            className: yU()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: XU
            }),
            onMouseDown: DU ? UU => {
              UU.preventDefault()
            } : void 0,
            onClick: () => {
              XU && !oU || cU(UU.value)
            },
            children: UU.label
          }, UU.value)
        }))
      })
    }
  },
  5588: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => QU,
      h: () => AU
    });
    var cU = zU(61);
    const yU = new WeakMap,
      QU = UU => {
        var XU;
        const zU = UU.closest("[data-pad-slider]");
        return zU && null !== (XU = yU.get(zU)) && void 0 !== XU ? XU : null
      },
      AU = (UU, XU) => {
        const zU = (0, cU.useRef)(XU);
        zU.current = XU, (0, cU.useEffect)((() => {
          if (UU.current) return ((UU, XU) => (yU.set(UU, XU), () => {
            yU.get(UU) === XU && yU.delete(UU)
          }))(UU.current, {
            adjust: UU => {
              zU.current.adjust(UU)
            },
            setFraction: UU => {
              zU.current.setFraction(UU)
            },
            endDrag: () => {
              zU.current.endDrag()
            }
          })
        }), [UU])
      }
  },
  7253: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => yU,
      f: () => QU
    });
    var cU = zU(42);
    const yU = "shaderPack";
    async function QU() {
      var UU;
      let XU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (UU = await cU.g.getItem(yU, XU)) && void 0 !== UU ? UU : null
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);