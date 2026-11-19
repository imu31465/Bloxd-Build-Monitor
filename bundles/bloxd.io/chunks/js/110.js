export const id = 110;
export const ids = [110];
export const modules = {
  4580: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => yY,
      f: () => mY,
      j: () => QY,
      m: () => EY
    });
    var FY = DY(61),
      AY = DY(4589),
      IY = DY(3920),
      RY = DY(1354),
      OY = DY(4608),
      gY = DY(1092),
      aY = DY.n(gY),
      vY = DY(1346),
      uY = DY(1699),
      sY = DY(4613),
      iY = DY(1125);

    function yY(YY) {
      let {
        label: rY,
        onClick: DY,
        checked: FY,
        circleInfoText: AY,
        className: OY,
        disabled: gY,
        note: vY
      } = YY;
      return (0, iY.jsxs)("div", {
        "aria-disabled": gY || void 0,
        "data-pad-focusable": !0,
        className: aY()("SettingBox CheckboxContainer", {
          [OY]: OY,
          SettingBoxDisabled: gY
        }),
        onClick: () => {
          gY || DY(!FY)
        },
        children: [(0, iY.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, iY.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, iY.jsx)(IY.d, {
              className: "SettingsCheckbox",
              checked: FY,
              disabled: gY,
              onChange: () => {}
            })
          }), (0, iY.jsxs)("div", {
            className: "CheckboxText",
            children: [rY, AY && (0, iY.jsx)("span", {
              onClick: YY => YY.stopPropagation(),
              children: (0, iY.jsx)(RY.d, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: AY
              })
            })]
          })]
        }), vY && (0, iY.jsx)("div", {
          className: "SettingNote",
          children: vY
        })]
      })
    }

    function QY(YY) {
      let {
        name: rY,
        onChange: DY,
        min: AY,
        max: IY,
        step: OY,
        initValue: gY,
        circleInfoText: vY,
        format: uY,
        className: sY,
        padStep: yY,
        disabled: QY = !1,
        selectableMax: oY,
        cappedNote: EY,
        onChangeComplete: mY
      } = YY;
      const [VY, SY] = (0, FY.useState)(gY), lY = (0, FY.useRef)(gY);
      (0, FY.useEffect)((() => {
        lY.current = gY, SY(gY)
      }), [gY]);
      const TY = void 0 !== oY && oY < IY,
        eY = TY ? {
          "--slider-selectable": (oY - AY) / (IY - AY)
        } : void 0;
      return (0, iY.jsxs)("div", {
        className: aY()("SettingBox SettingsSliderDiv", {
          [sY]: sY,
          SettingBoxDisabled: QY,
          SliderCapped: TY
        }),
        style: eY,
        children: [(0, iY.jsxs)("div", {
          className: "SliderText",
          children: [`${rY}: ${uY?uY(VY):VY}`, vY && (0, iY.jsx)(RY.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: vY
          })]
        }), (0, iY.jsx)("div", {
          className: "SliderDiv",
          children: (0, iY.jsx)(WY, {
            value: VY,
            min: AY,
            max: IY,
            step: OY,
            onChange: YY => {
              if (TY && YY >= oY && VY === oY) return;
              const rY = TY ? Math.min(YY, oY) : YY;
              lY.current = rY, SY(rY), DY(rY)
            },
            onChangeComplete: mY && (() => {
              mY(lY.current)
            }),
            format: uY,
            padStep: yY,
            disabled: QY
          })
        }), TY && EY && (0, iY.jsx)("div", {
          className: "SettingNote",
          children: EY
        })]
      })
    }
    const oY = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function WY(YY) {
      var rY;
      let {
        value: DY,
        min: IY,
        max: RY,
        step: OY,
        onChange: gY,
        orientation: aY,
        reverse: vY,
        setIsChanging: uY,
        tooltip: yY,
        labels: QY,
        handleLabel: WY,
        format: EY,
        onChangeStart: mY,
        onChangeComplete: VY,
        padStep: SY,
        disabled: lY = !1
      } = YY;
      const TY = (0, FY.useRef)(null),
        eY = (0, FY.useRef)(null);
      (0, FY.useLayoutEffect)((() => {
        var YY, rY, DY;
        const FY = null !== (YY = null === (rY = TY.current) || void 0 === rY ? void 0 : rY.querySelector(".rangeslider")) && void 0 !== YY ? YY : null;
        null === FY || void 0 === FY || FY.setAttribute("data-pad-slider", ""), null === FY || void 0 === FY || FY.setAttribute("data-pad-focusable", ""), null === FY || void 0 === FY || null === (DY = FY.querySelector(".rangeslider__handle")) || void 0 === DY || DY.setAttribute("data-pad-slider-handle", ""), eY.current = FY
      }), []), (0, FY.useLayoutEffect)((() => {
        var YY, rY;
        lY ? null === (YY = eY.current) || void 0 === YY || YY.setAttribute("aria-disabled", "true") : null === (rY = eY.current) || void 0 === rY || rY.removeAttribute("aria-disabled")
      }), [lY]);
      const NY = (null !== (rY = String(OY).split(".")[1]) && void 0 !== rY ? rY : "").length,
        BY = YY => {
          const rY = Number((Math.round((YY - IY) / OY) * OY + IY).toFixed(NY));
          return Math.min(RY, Math.max(IY, rY))
        },
        cY = (0, FY.useRef)(VY);
      cY.current = VY, (0, FY.useEffect)((() => {
        const YY = TY.current;
        if (!YY) return;
        const rY = YY => {
          var rY;
          oY.has(YY.key) && (null === (rY = cY.current) || void 0 === rY || rY.call(cY))
        };
        return YY.addEventListener("keyup", rY), () => {
          YY.removeEventListener("keyup", rY)
        }
      }), []);
      const KY = (0, FY.useRef)(!1);
      return (0, sY.d)(eY, {
        adjust: YY => {
          if (lY) return;
          const rY = null !== SY && void 0 !== SY ? SY : Math.max(OY, Math.round((RY - IY) / 20 / OY) * OY),
            FY = BY(DY + YY * rY * (vY ? -1 : 1));
          FY !== DY && (null === mY || void 0 === mY || mY(), gY(FY), null === VY || void 0 === VY || VY())
        },
        setFraction: YY => {
          if (lY) return;
          const rY = BY(IY + (vY ? 1 - YY : YY) * (RY - IY));
          rY !== DY && (KY.current || (KY.current = !0, null === mY || void 0 === mY || mY()), gY(rY))
        },
        endDrag: () => {
          KY.current && (KY.current = !1, null === VY || void 0 === VY || VY())
        }
      }), (0, iY.jsx)("div", {
        ref: TY,
        style: {
          display: "contents"
        },
        children: (0, iY.jsx)(AY.b, {
          value: DY,
          min: IY,
          max: RY,
          step: OY,
          onChange: gY,
          orientation: aY,
          reverse: vY,
          tooltip: yY,
          labels: QY,
          handleLabel: WY,
          format: EY,
          onChangeStart: () => {
            null === mY || void 0 === mY || mY(), null === uY || void 0 === uY || uY(!0)
          },
          onChangeComplete: () => {
            null === uY || void 0 === uY || uY(!1), null === VY || void 0 === VY || VY()
          }
        })
      })
    }
    async function EY() {
      let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      const rY = vY.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: "",
        unlockPointerKey: YY
      });
      !0 === await rY.getResult() && (0, uY.reloadBloxd)()
    }

    function mY(YY) {
      let {
        label: rY,
        options: DY,
        value: FY,
        onChange: AY,
        circleInfoText: IY
      } = YY;
      return (0, iY.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, iY.jsxs)("div", {
          className: "SliderText",
          children: [rY, IY && (0, iY.jsx)(RY.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: IY
          })]
        }), (0, iY.jsx)(OY.d, {
          ariaLabel: rY,
          options: DY,
          value: FY,
          onChange: AY
        })]
      })
    }
  },
  6233: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      default: () => nY
    });
    var FY = DY(61),
      AY = DY(1501),
      IY = DY(6112),
      RY = DY(1231),
      OY = DY(341),
      gY = DY(1337),
      aY = DY(1488),
      vY = DY(1437),
      uY = DY(1354),
      sY = DY(2353),
      iY = DY(2466),
      yY = DY(4113),
      QY = DY(1152),
      oY = DY(1471),
      WY = DY(99),
      EY = DY(1211);
    const mY = DY.p + "static/media/bloxdhubLogo.6a6c367af2ad6e6f1eb3.webp";
    var VY = DY(1092),
      SY = DY.n(VY),
      lY = DY(1098),
      TY = DY(1346),
      eY = DY(6108),
      NY = DY(1125);
    const BY = (0, FY.lazy)((() => Promise.all([DY.e(106), DY.e(74), DY.e(132), DY.e(126), DY.e(125)]).then((() => DY(6144))).then((YY => ({
      default: YY.ShaderPackPublishForm
    })))));

    function cY(YY) {
      let {
        details: rY,
        owner: DY,
        onChanged: AY
      } = YY;
      const {
        t: RY
      } = (0, EY.C)(), OY = (0, aY.useNavigatePreserveSearch)(), {
        userContext: uY
      } = (0, QY.d)(), [sY, iY] = (0, FY.useState)(!1), [yY, WY] = (0, FY.useState)(null), [mY, VY] = (0, FY.useState)(!1), {
        packId: cY,
        name: KY,
        description: HY,
        live: zY
      } = rY;
      async function ZY(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : AY;
        iY(!0), WY(null);
        try {
          await YY(), rY()
        } catch (DY) {
          console.error("Failed to change a shader pack", DY), WY((0, eY.y)(DY, RY, "shaderPackListing:ownerActionFailed"))
        } finally {
          iY(!1)
        }
      }
      const CY = (0, eY.s)(uY);
      return (0, NY.jsxs)("section", {
        className: "ShaderPackOwnerPanel",
        children: [(0, NY.jsx)("h2", {
          className: "ShaderPackSectionTitle",
          children: RY("general:manage")
        }), (0, eY.V)(DY, !(null === zY || void 0 === zY || !zY.renderId), Date.now(), RY).map((YY => (0, NY.jsxs)("div", {
          className: SY()("ShaderPackOwnerNotice", {
            Warning: "warning" === YY.tone
          }),
          children: [(0, NY.jsx)(lY.e, {
            name: "warning" === YY.tone ? "triangle-exclamation" : "circle-info"
          }), (0, NY.jsxs)("div", {
            children: [YY.text, YY.detail && (0, NY.jsx)("pre", {
              className: "ShaderPackOwnerNoticeDetail",
              children: YY.detail
            })]
          })]
        }, YY.text))), rY.ban && (0, NY.jsxs)("div", {
          className: "ShaderPackOwnerNotice Warning",
          children: [(0, NY.jsx)(lY.e, {
            name: "ban"
          }), (0, NY.jsxs)("div", {
            children: ["Banned by ", rY.ban.byName, " on ", new Date(rY.ban.at).toLocaleString()]
          })]
        }), yY && (0, NY.jsx)("div", {
          className: "ShaderPackOwnerError",
          children: yY
        }), (0, NY.jsxs)("div", {
          className: "ShaderPackOwnerActions",
          children: [(0, NY.jsxs)(vY.J, {
            disabled: sY,
            onClick: () => {
              !async function() {
                const YY = await TY.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:renameTitle",
                  initialValue: KY,
                  maxLength: IY.D,
                  submitText: "general:save",
                  validate: YY => YY.trim().length < IY.G ? RY("shaderPackListing:nameTooShort", {
                    min: String(IY.G)
                  }) : null
                }).getResult();
                "notificationTornDown" !== YY && "submit" === (null === YY || void 0 === YY ? void 0 : YY.type) && YY.value.trim() !== KY && await ZY((() => oY.e.updateShaderPack(uY, {
                  packId: cY,
                  name: YY.value.trim()
                })))
              }()
            },
            children: [(0, NY.jsx)(lY.e, {
              name: "pen"
            }), " ", RY("shaderPackListing:rename")]
          }), (0, NY.jsxs)(vY.J, {
            disabled: sY,
            onClick: () => {
              !async function() {
                const YY = await TY.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:editDescription",
                  initialValue: HY,
                  maxLength: IY.t,
                  multiline: !0,
                  allowEmptySubmit: !0,
                  submitText: "general:save"
                }).getResult();
                "notificationTornDown" !== YY && "submit" === (null === YY || void 0 === YY ? void 0 : YY.type) && YY.value.trim() !== HY && await ZY((() => oY.e.updateShaderPack(uY, {
                  packId: cY,
                  description: YY.value.trim()
                })))
              }()
            },
            children: [(0, NY.jsx)(lY.e, {
              name: "file-lines"
            }), " ", RY("shaderPackListing:editDescription")]
          }), (0, NY.jsxs)(vY.J, {
            disabled: sY || DY.isBanned && !DY.listed,
            onClick: () => {
              ZY((() => oY.e.updateShaderPack(uY, {
                packId: cY,
                listed: !DY.listed
              })))
            },
            children: [(0, NY.jsx)(lY.e, {
              name: DY.listed ? "eye-slash" : "eye"
            }), " ", RY(DY.listed ? "shaderPackListing:unlist" : "shaderPackListing:relist")]
          }), !DY.isBanned && (0, NY.jsxs)(vY.f, {
            disabled: sY,
            onClick: () => {
              VY(!mY)
            },
            children: [(0, NY.jsx)(lY.e, {
              name: "upload"
            }), " ", RY("shaderPackListing:uploadVersion")]
          }), (0, NY.jsxs)(vY.E, {
            disabled: sY || DY.isBanned,
            onClick: () => {
              !async function() {
                !0 === await TY.NotificationProvider.showPromptPopup({
                  title: "shaderPackListing:deleteTitle",
                  subtitle: "shaderPackListing:deleteSubtitle",
                  confirmText: "general:delete",
                  cancelText: "general:cancel",
                  destructive: !0
                }).getResult() && await ZY((() => oY.e.deleteShaderPack(uY, cY)), (() => {
                  OY(`${eY.R}?section=mine`, {
                    replace: !0
                  })
                }))
              }()
            },
            children: [(0, NY.jsx)(lY.e, {
              name: "trash-can"
            }), " ", RY("general:delete")]
          }), CY && (0, NY.jsxs)(vY.E, {
            disabled: sY,
            onClick: () => {
              ZY((() => oY.e.setShaderPackBanned(uY, cY, !DY.isBanned)))
            },
            children: [(0, NY.jsx)(lY.e, {
              name: DY.isBanned ? "circle-check" : "ban"
            }), " ", DY.isBanned ? "Unban" : "Ban"]
          })]
        }), mY && (0, NY.jsx)(FY.Suspense, {
          fallback: (0, NY.jsx)(gY.c, {}),
          children: (0, NY.jsx)(BY, {
            existing: {
              packId: cY,
              name: KY,
              description: HY
            },
            onPublished: () => {
              VY(!1), AY()
            }
          })
        })]
      })
    }
    var KY = DY(76),
      HY = DY(1774),
      zY = DY(1284),
      ZY = DY(4613),
      CY = DY(1222),
      fY = DY(6123),
      jY = DY(6118),
      hY = DY(6136);

    function dY(YY) {
      let {
        item: rY
      } = YY;
      const {
        t: DY
      } = (0, EY.C)(), [AY] = (0, fY.f)(), [RY, OY] = (0, FY.useState)(AY), [gY, aY] = (0, FY.useState)(!1), [vY, uY] = (0, FY.useState)(!1), {
        s3Url: sY
      } = CY.clientSideServerUrls, {
        width: iY,
        height: yY
      } = IY.u.large, QY = (0, IY.x)(sY, rY, RY, "large"), {
        renderVersion: oY
      } = rY;
      return (0, NY.jsxs)("div", {
        className: "ShaderPackPreviews",
        children: [(0, NY.jsx)(hY.d, {
          selected: RY,
          onSelect: YY => {
            OY(YY), aY(!1)
          },
          imageUrl: YY => (0, IY.x)(sY, rY, YY, "thumb")
        }), (0, NY.jsxs)("div", {
          className: "ShaderPackPreviewStage",
          children: [!gY && (0, NY.jsxs)("button", {
            type: "button",
            className: "ShaderPackPreviewMain",
            title: null === oY ? void 0 : DY("shaderPackListing:fullSize"),
            disabled: null === oY,
            onClick: () => {
              uY(!0)
            },
            children: [(0, NY.jsx)("img", {
              src: QY,
              width: iY,
              height: yY,
              alt: DY(eY.eb[RY]),
              draggable: !1
            }), (0, NY.jsx)(jY.c, {
              item: rY
            })]
          }), !gY && null !== oY && (0, NY.jsxs)(bY, {
            side: "Right",
            onClick: () => {
              aY(!0)
            },
            children: [(0, NY.jsx)(lY.e, {
              name: "arrows-left-right"
            }), " ", DY("shaderPackListing:compare")]
          }), gY && null !== oY && (0, NY.jsx)(wY, {
            item: rY,
            packUrl: QY,
            baselineUrl: (0, IY.q)(sY, oY, RY, "large")
          }), gY && (0, NY.jsx)(bY, {
            side: "Left",
            onClick: () => {
              aY(!1)
            },
            children: DY("shaderPackListing:withPack")
          }), gY && (0, NY.jsx)(bY, {
            side: "Right",
            onClick: () => {
              aY(!1)
            },
            children: DY("shaderPackListing:withoutPack")
          })]
        }), vY && (0, NY.jsx)(JY, {
          fullUrl: (0, IY.x)(sY, rY, RY, "full"),
          largeUrl: QY,
          alt: DY(eY.eb[RY]),
          onClose: () => {
            uY(!1)
          }
        })]
      })
    }

    function JY(YY) {
      let {
        fullUrl: rY,
        largeUrl: DY,
        alt: AY,
        onClose: IY
      } = YY;
      const RY = (0, FY.useRef)(null);
      return (0, zY.t)("popup", RY, IY), (0, FY.useEffect)((() => {
        function YY(YY) {
          "Escape" === YY.key && (YY.stopPropagation(), IY())
        }
        return window.addEventListener("keydown", YY, !0), () => {
          window.removeEventListener("keydown", YY, !0)
        }
      }), [IY]), (0, KY.createPortal)((0, NY.jsxs)("div", {
        ref: RY,
        className: "ShaderPackFullSize",
        onClick: IY,
        children: [(0, NY.jsx)("img", {
          className: "ShaderPackFullSizeImage",
          src: rY,
          alt: AY,
          draggable: !1,
          style: {
            backgroundImage: `url(${DY})`
          }
        }), (0, NY.jsx)(vY.k, {
          className: "ShaderPackFullSizeClose",
          onClick: IY
        })]
      }), document.body)
    }
    const MY = 5;

    function wY(YY) {
      let {
        item: rY,
        packUrl: DY,
        baselineUrl: AY
      } = YY;
      const {
        t: RY
      } = (0, EY.C)(), [OY, gY] = (0, FY.useState)(50), aY = (0, FY.useRef)(!1), vY = (0, FY.useRef)(null), {
        width: uY,
        height: sY
      } = IY.u.large;

      function iY(YY) {
        gY((rY => (0, HY.i)(rY + YY, 0, 100)))
      }

      function yY(YY) {
        const rY = YY.currentTarget.getBoundingClientRect();
        gY((0, HY.i)((YY.clientX - rY.left) / rY.width * 100, 0, 100))
      }
      return (0, ZY.d)(vY, {
        adjust: YY => {
          iY(YY * MY)
        },
        setFraction: YY => {
          gY(100 * YY)
        },
        endDrag: () => {}
      }), (0, NY.jsxs)("div", {
        ref: vY,
        className: "ShaderPackCompare",
        "data-pad-slider": "",
        "data-pad-focusable": "",
        role: "slider",
        tabIndex: 0,
        "aria-label": RY("shaderPackListing:compare"),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(OY),
        style: {
          "--split": `${OY}%`
        },
        onKeyDown: function(YY) {
          const rY = "ArrowLeft" === YY.key ? -MY : "ArrowRight" === YY.key ? MY : 0;
          0 !== rY && (YY.preventDefault(), iY(rY))
        },
        onPointerDown: YY => {
          aY.current = !0, YY.currentTarget.setPointerCapture(YY.pointerId), yY(YY)
        },
        onPointerMove: YY => {
          aY.current && yY(YY)
        },
        onPointerUp: () => {
          aY.current = !1
        },
        onPointerCancel: () => {
          aY.current = !1
        },
        children: [(0, NY.jsx)("img", {
          className: "ShaderPackCompareBaseline",
          src: AY,
          width: uY,
          height: sY,
          alt: "",
          draggable: !1,
          style: {
            backgroundImage: `url(${DY})`
          }
        }), (0, NY.jsx)("div", {
          className: "ShaderPackCompareLine"
        }), (0, NY.jsx)("img", {
          className: "ShaderPackComparePack",
          src: DY,
          width: uY,
          height: sY,
          alt: "",
          draggable: !1
        }), (0, NY.jsx)(jY.c, {
          item: rY,
          className: "ShaderPackCompareNotice"
        })]
      })
    }

    function bY(YY) {
      let {
        side: rY,
        onClick: DY,
        children: FY
      } = YY;
      return (0, NY.jsx)("button", {
        type: "button",
        className: `ShaderPackStageButton ${rY}`,
        onClick: DY,
        children: (0, NY.jsx)("span", {
          className: "ShaderPackStageButtonFace SmallTextBold",
          children: FY
        })
      })
    }
    var XY = DY(4580),
      qY = DY(307),
      pY = DY(6230);
    const kY = {
      compiler: "shaderPack:compilerUnavailable",
      download: "shaderPackListing:useDownloadFailed",
      apiVersion: "shaderPackListing:useOtherApiVersion",
      invalid: "shaderPackListing:useInvalid",
      errors: "shaderPackListing:useFailsHere",
      save: "shaderPack:saveFailed"
    };

    function GY(YY) {
      const {
        userContext: rY
      } = (0, QY.d)(), [AY, IY] = (0, FY.useState)(null), [RY, OY] = (0, FY.useState)(!1), [gY, aY] = (0, FY.useState)(!1), [vY, uY] = (0, FY.useState)(null), sY = null === YY || void 0 === YY ? void 0 : YY.packId, iY = null === YY || void 0 === YY ? void 0 : YY.sourceHash;
      return (0, FY.useEffect)((() => {
        if (OY(!1), uY(null), void 0 === sY) return;
        let YY = !1;
        return Promise.all([(0, WY.hasUsableWebGpuAdapter)(), (0, pY.e)()]).then((rY => {
          let [DY, FY] = rY;
          var AY;
          YY || (IY(DY), OY((null === FY || void 0 === FY || null === (AY = FY.listing) || void 0 === AY ? void 0 : AY.packId) === sY && FY.listing.sourceHash === iY))
        })).catch((rY => {
          console.error("Failed to check whether this shader pack can be used", rY), YY || IY(!1)
        })), () => {
          YY = !0
        }
      }), [sY, iY]), {
        webGpuUsable: AY,
        inUse: RY,
        busy: gY,
        errorKey: vY,
        use: () => {
          null !== YY && async function(YY) {
            aY(!0), uY(null);
            try {
              const {
                installListedShaderPack: FY
              } = await Promise.all([DY.e(74), DY.e(132), DY.e(127)]).then((() => DY(39614))), AY = await FY({
                packId: YY.packId,
                sourceHash: YY.sourceHash,
                name: YY.name,
                ownerName: YY.ownerName,
                description: YY.description
              });
              if ("failed" === AY.kind) return void uY(kY[AY.reason]);
              OY(!0), oY.e.recordShaderPackDownload(rY, YY.packId).catch((YY => {
                console.error("Failed to count a shader pack's download", YY)
              })), (0, XY.m)()
            } catch (FY) {
              console.error("Failed to use the shader pack", FY), uY("shaderPack:unexpectedError")
            } finally {
              aY(!1)
            }
          }(YY)
        }
      }
    }

    function xY(YY) {
      let {
        packUse: rY
      } = YY;
      const {
        t: DY
      } = (0, EY.C)(), {
        webGpuUsable: FY,
        inUse: AY,
        busy: IY,
        errorKey: RY,
        use: OY
      } = rY;
      return (0, NY.jsxs)("div", {
        className: "ShaderPackUse",
        children: [(0, NY.jsxs)(vY.n, {
          disabled: !0 !== FY || AY,
          loading: IY,
          onClick: OY,
          children: [(0, NY.jsx)(lY.e, {
            name: AY ? "check" : "download"
          }), " ", DY(AY ? "shaderPackListing:inUse" : "shaderPackListing:use")]
        }), !1 === FY && (0, NY.jsx)("div", {
          className: "ShaderPackUseNote",
          children: DY((0, qY.i)() ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), RY && (0, NY.jsx)("div", {
          className: "ShaderPackUseNote Error",
          children: DY(RY)
        })]
      })
    }

    function nY() {
      var YY;
      const {
        t: rY
      } = (0, EY.C)(), DY = (0, aY.useNavigatePreserveSearch)(), {
        packId: IY
      } = (0, AY.D)(), {
        userContext: RY,
        isUserContextUpdating: OY
      } = (0, QY.d)(), [uY, sY] = (0, FY.useState)(null), [iY, WY] = (0, FY.useState)(null), [mY, VY] = (0, FY.useState)(0), SY = (0, FY.useRef)(0);

      function lY() {
        var YY;
        null !== (YY = (0, aY.getPreviousLocation)()) && void 0 !== YY && YY.startsWith(eY.R) ? DY(-1) : DY(eY.R)
      }(0, yY.d)(lY), (0, fY.d)(), (0, FY.useEffect)((() => {
        if (OY || void 0 === IY) return;
        const YY = ++SY.current;
        WY(null), oY.e.getShaderPack(RY, IY).then((rY => {
          SY.current === YY && sY(rY)
        })).catch((rY => {
          SY.current === YY && (console.error("Failed to get the shader pack", rY), sY(null), WY({
            error: rY
          }))
        }))
      }), [IY, RY, OY, mY]);
      const TY = () => {
          VY((YY => YY + 1))
        },
        BY = (null === uY || void 0 === uY ? void 0 : uY.packId) === IY ? uY : null,
        KY = (0, fY.h)(),
        HY = GY(null !== (YY = null === BY || void 0 === BY ? void 0 : BY.live) && void 0 !== YY ? YY : null),
        zY = null !== BY && void 0 !== BY && BY.live ? (0, NY.jsx)(PY, {
          item: BY.live,
          favourites: KY,
          packUse: HY
        }) : null;
      return (0, NY.jsxs)("article", {
        className: "ShaderPackInformation AnimFadeIn",
        children: [(0, NY.jsx)(vY.b, {
          onClick: lY,
          children: rY("shaderPackListing:backToPacks")
        }), null === BY && null === iY && (0, NY.jsx)("div", {
          className: "ShaderPackInformationMessage",
          children: (0, NY.jsx)(gY.c, {})
        }), null !== iY && (0, NY.jsxs)("div", {
          className: "ShaderPackInformationMessage",
          children: [(0, eY.y)(iY.error, rY, "shaderPackListing:loadPackFailed"), (0, NY.jsx)(vY.f, {
            onClick: TY,
            children: rY("general:tryAgain")
          })]
        }), null !== BY && null === iY && (0, NY.jsxs)("div", {
          className: "ShaderPackInformationBody",
          children: [(0, NY.jsxs)("header", {
            className: "ShaderPackInformationHeader",
            children: [(0, NY.jsx)("h1", {
              className: "FullyFancyText",
              children: BY.name
            }), zY]
          }), BY.live && (0, NY.jsx)(dY, {
            item: BY.live
          }), BY.live && (0, NY.jsx)(UY, {
            item: BY.live,
            ownerPreview: BY.ownerPreview,
            bloxdhubSlug: BY.bloxdhubSlug,
            actions: zY
          }), BY.owner && (0, NY.jsx)(cY, {
            details: BY,
            owner: BY.owner,
            onChanged: TY
          })]
        })]
      })
    }

    function PY(YY) {
      let {
        item: rY,
        favourites: DY,
        packUse: FY
      } = YY;
      const AY = DY.isFavourite(rY.packId);
      return (0, NY.jsxs)("div", {
        className: "ShaderPackInformationActions",
        children: [WY.featureFlags.settings.canUseShaderPacks && (0, NY.jsx)(xY, {
          packUse: FY
        }), (0, NY.jsx)(vY.q, {
          className: "ShaderPackInformationLike",
          onClick: () => {
            DY.toggle(rY.packId)
          },
          isLiked: !0 === AY,
          isLoading: null === AY
        })]
      })
    }

    function UY(YY) {
      let {
        item: rY,
        ownerPreview: DY,
        bloxdhubSlug: FY,
        actions: AY
      } = YY;
      const {
        t: OY
      } = (0, EY.C)(), gY = (0, iY.m)(), vY = null === FY ? null : (0, IY.e)(FY);
      return (0, NY.jsxs)("div", {
        className: "ShaderPackFacts",
        children: [rY.description && (0, NY.jsx)("p", {
          className: "ShaderPackDescription",
          children: rY.description
        }), (0, NY.jsxs)("div", {
          className: "ShaderPackFeatureList",
          children: [(null !== DY || null !== vY) && (0, NY.jsx)("div", {
            className: "ShaderPackAuthor",
            children: null !== DY ? (0, NY.jsxs)(NY.Fragment, {
              children: [(0, NY.jsx)(sY.g, {
                playerSocialPreview: DY,
                showLocation: !1,
                linkToProfile: !0
              }), null !== vY && (0, NY.jsx)("a", {
                className: "ShaderPackBloxdhubLogo",
                href: vY,
                target: "_blank",
                rel: "noopener noreferrer",
                children: (0, NY.jsx)("img", {
                  src: mY,
                  alt: IY.d
                })
              })]
            }) : (0, NY.jsxs)("a", {
              className: "ShaderPackBloxdhubName",
              href: vY,
              target: "_blank",
              rel: "noopener noreferrer",
              children: [IY.d, (0, NY.jsx)("img", {
                src: mY,
                alt: ""
              })]
            })
          }), eY.z.filter((YY => rY.features.includes(YY))).map((YY => (0, NY.jsx)(aY.LinkPreserveSearch, {
            className: "ShaderPackFeature",
            to: (0, eY.I)(YY),
            children: OY(eY.J[YY])
          }, YY)))]
        }), AY, (0, NY.jsxs)("dl", {
          className: "ShaderPackFactList",
          children: [(0, NY.jsxs)("div", {
            children: [(0, NY.jsx)("dt", {
              children: OY("shaderPackListing:downloads")
            }), (0, NY.jsx)("dd", {
              children: (0, RY.S)(rY.downloads)
            })]
          }), (0, NY.jsx)(LY, {
            label: OY("shaderPackListing:updated"),
            time: rY.listedUpdatedAt,
            now: gY
          }), (0, NY.jsx)(LY, {
            label: OY("shaderPackListing:created"),
            time: rY.publishedAt,
            now: gY
          }), null !== rY.gpuCost && (0, NY.jsxs)("div", {
            children: [(0, NY.jsx)("dt", {
              children: OY("shaderPackListing:lag")
            }), (0, NY.jsx)("dd", {
              children: OY("shaderPackListing:lagPercent", {
                percent: String((0, eY.Q)(rY.gpuCost))
              })
            })]
          }), (0, NY.jsxs)("div", {
            children: [(0, NY.jsx)("dt", {
              children: OY("shaderPackListing:size")
            }), (0, NY.jsx)("dd", {
              children: OY("shaderPackListing:sizeValue", {
                kilobytes: String((0, eY.N)(rY.sourceBytes))
              })
            })]
          }), (0, NY.jsxs)("div", {
            children: [(0, NY.jsx)("dt", {
              children: OY("shaderPackListing:files")
            }), (0, NY.jsx)("dd", {
              children: rY.fileCount
            })]
          })]
        })]
      })
    }

    function LY(YY) {
      let {
        label: rY,
        time: DY,
        now: FY
      } = YY;
      const {
        t: AY,
        selectedLanguage: IY
      } = (0, EY.C)(), RY = new Date(DY);
      let gY = RY.toLocaleDateString();
      if (FY - DY <= 30 * OY.f) {
        const YY = (0, EY.q)(IY.code, "shaderPackListing:timeAgo");
        gY = AY("shaderPackListing:timeAgo", {
          time: (0, OY.fb)(YY, DY, FY)
        })
      }
      return (0, NY.jsx)(uY.g, {
        tooltipInner: RY.toLocaleString(),
        children: (0, NY.jsxs)("div", {
          children: [(0, NY.jsx)("dt", {
            children: rY
          }), (0, NY.jsx)("dd", {
            children: gY
          })]
        })
      })
    }
  },
  4608: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => RY
    });
    var FY = DY(1092),
      AY = DY.n(FY),
      IY = DY(1125);

    function RY(YY) {
      let {
        options: rY,
        value: DY,
        onChange: FY,
        ariaLabel: RY,
        className: OY,
        reselectable: gY = !1,
        keepsFocus: aY = !1
      } = YY;
      return (0, IY.jsx)("div", {
        className: AY()("SegmentedToggle", OY),
        role: "group",
        "aria-label": RY,
        children: rY.map((YY => {
          const rY = YY.value === DY;
          return (0, IY.jsx)("button", {
            type: "button",
            "aria-pressed": rY,
            "aria-label": YY.ariaLabel,
            title: YY.ariaLabel,
            className: AY()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: rY
            }),
            onMouseDown: aY ? YY => {
              YY.preventDefault()
            } : void 0,
            onClick: () => {
              rY && !gY || FY(YY.value)
            },
            children: YY.label
          }, YY.value)
        }))
      })
    }
  },
  4613: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => IY,
      d: () => RY
    });
    var FY = DY(61);
    const AY = new WeakMap,
      IY = YY => {
        var rY;
        const DY = YY.closest("[data-pad-slider]");
        return DY && null !== (rY = AY.get(DY)) && void 0 !== rY ? rY : null
      },
      RY = (YY, rY) => {
        const DY = (0, FY.useRef)(rY);
        DY.current = rY, (0, FY.useEffect)((() => {
          if (YY.current) return ((YY, rY) => (AY.set(YY, rY), () => {
            AY.get(YY) === rY && AY.delete(YY)
          }))(YY.current, {
            adjust: YY => {
              DY.current.adjust(YY)
            },
            setFraction: YY => {
              DY.current.setFraction(YY)
            },
            endDrag: () => {
              DY.current.endDrag()
            }
          })
        }), [YY])
      }
  },
  6230: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => AY,
      e: () => IY
    });
    var FY = DY(40);
    const AY = "shaderPack";
    async function IY() {
      var YY;
      let rY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (YY = await FY.i.getItem(AY, rY)) && void 0 !== YY ? YY : null
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);