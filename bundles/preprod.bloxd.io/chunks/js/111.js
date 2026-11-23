export const id = 111;
export const ids = [111];
export const modules = {
  4942: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => gC,
      e: () => RC,
      f: () => SC,
      h: () => GC
    });
    var QC = ZC(48),
      wC = ZC(4947),
      bC = ZC(4300),
      nC = ZC(1321),
      fC = ZC(4971),
      oC = ZC(1002),
      qC = ZC.n(oC),
      FC = ZC(1307),
      WC = ZC(1645),
      NC = ZC(4979),
      MC = ZC(1056);

    function gC(CC) {
      let {
        label: zC,
        onClick: ZC,
        checked: QC,
        circleInfoText: wC,
        className: fC,
        disabled: oC,
        note: FC
      } = CC;
      return (0, MC.jsxs)("div", {
        "aria-disabled": oC || void 0,
        "data-pad-focusable": !0,
        className: qC()("SettingBox CheckboxContainer", {
          [fC]: fC,
          SettingBoxDisabled: oC
        }),
        onClick: () => {
          oC || ZC(!QC)
        },
        children: [(0, MC.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, MC.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, MC.jsx)(bC.e, {
              className: "SettingsCheckbox",
              checked: QC,
              disabled: oC,
              onChange: () => {}
            })
          }), (0, MC.jsxs)("div", {
            className: "CheckboxText",
            children: [zC, wC && (0, MC.jsx)("span", {
              onClick: CC => CC.stopPropagation(),
              children: (0, MC.jsx)(nC.b, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: wC
              })
            })]
          })]
        }), FC && (0, MC.jsx)("div", {
          className: "SettingNote",
          children: FC
        })]
      })
    }

    function SC(CC) {
      let {
        name: zC,
        onChange: ZC,
        min: wC,
        max: bC,
        step: fC,
        initValue: oC,
        circleInfoText: FC,
        format: WC,
        className: NC,
        padStep: gC,
        disabled: SC = !1,
        selectableMax: pC,
        cappedNote: GC,
        onChangeComplete: RC
      } = CC;
      const [AC, xC] = (0, QC.useState)(oC), JC = (0, QC.useRef)(oC);
      (0, QC.useEffect)((() => {
        JC.current = oC, xC(oC)
      }), [oC]);
      const IC = void 0 !== pC && pC < bC,
        iC = IC ? {
          "--slider-selectable": (pC - wC) / (bC - wC)
        } : void 0;
      return (0, MC.jsxs)("div", {
        className: qC()("SettingBox SettingsSliderDiv", {
          [NC]: NC,
          SettingBoxDisabled: SC,
          SliderCapped: IC
        }),
        style: iC,
        children: [(0, MC.jsxs)("div", {
          className: "SliderText",
          children: [`${zC}: ${WC?WC(AC):AC}`, FC && (0, MC.jsx)(nC.b, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: FC
          })]
        }), (0, MC.jsx)("div", {
          className: "SliderDiv",
          children: (0, MC.jsx)(PC, {
            value: AC,
            min: wC,
            max: bC,
            step: fC,
            onChange: CC => {
              if (IC && CC >= pC && AC === pC) return;
              const zC = IC ? Math.min(CC, pC) : CC;
              JC.current = zC, xC(zC), ZC(zC)
            },
            onChangeComplete: RC && (() => {
              RC(JC.current)
            }),
            format: WC,
            padStep: gC,
            disabled: SC
          })
        }), IC && GC && (0, MC.jsx)("div", {
          className: "SettingNote",
          children: GC
        })]
      })
    }
    const pC = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function PC(CC) {
      var zC;
      let {
        value: ZC,
        min: bC,
        max: nC,
        step: fC,
        onChange: oC,
        orientation: qC,
        reverse: FC,
        setIsChanging: WC,
        tooltip: gC,
        labels: SC,
        handleLabel: PC,
        format: GC,
        onChangeStart: RC,
        onChangeComplete: AC,
        padStep: xC,
        disabled: JC = !1
      } = CC;
      const IC = (0, QC.useRef)(null),
        iC = (0, QC.useRef)(null);
      (0, QC.useLayoutEffect)((() => {
        var CC, zC, ZC;
        const QC = null !== (CC = null === (zC = IC.current) || void 0 === zC ? void 0 : zC.querySelector(".rangeslider")) && void 0 !== CC ? CC : null;
        null === QC || void 0 === QC || QC.setAttribute("data-pad-slider", ""), null === QC || void 0 === QC || QC.setAttribute("data-pad-focusable", ""), null === QC || void 0 === QC || null === (ZC = QC.querySelector(".rangeslider__handle")) || void 0 === ZC || ZC.setAttribute("data-pad-slider-handle", ""), iC.current = QC
      }), []), (0, QC.useLayoutEffect)((() => {
        var CC, zC;
        JC ? null === (CC = iC.current) || void 0 === CC || CC.setAttribute("aria-disabled", "true") : null === (zC = iC.current) || void 0 === zC || zC.removeAttribute("aria-disabled")
      }), [JC]);
      const vC = (null !== (zC = String(fC).split(".")[1]) && void 0 !== zC ? zC : "").length,
        eC = CC => {
          const zC = Number((Math.round((CC - bC) / fC) * fC + bC).toFixed(vC));
          return Math.min(nC, Math.max(bC, zC))
        },
        hC = (0, QC.useRef)(AC);
      hC.current = AC, (0, QC.useEffect)((() => {
        const CC = IC.current;
        if (!CC) return;
        const zC = CC => {
          var zC;
          pC.has(CC.key) && (null === (zC = hC.current) || void 0 === zC || zC.call(hC))
        };
        return CC.addEventListener("keyup", zC), () => {
          CC.removeEventListener("keyup", zC)
        }
      }), []);
      const KC = (0, QC.useRef)(!1);
      return (0, NC.g)(iC, {
        adjust: CC => {
          if (JC) return;
          const zC = null !== xC && void 0 !== xC ? xC : Math.max(fC, Math.round((nC - bC) / 20 / fC) * fC),
            QC = eC(ZC + CC * zC * (FC ? -1 : 1));
          QC !== ZC && (null === RC || void 0 === RC || RC(), oC(QC), null === AC || void 0 === AC || AC())
        },
        setFraction: CC => {
          if (JC) return;
          const zC = eC(bC + (FC ? 1 - CC : CC) * (nC - bC));
          zC !== ZC && (KC.current || (KC.current = !0, null === RC || void 0 === RC || RC()), oC(zC))
        },
        endDrag: () => {
          KC.current && (KC.current = !1, null === AC || void 0 === AC || AC())
        }
      }), (0, MC.jsx)("div", {
        ref: IC,
        style: {
          display: "contents"
        },
        children: (0, MC.jsx)(wC.b, {
          value: ZC,
          min: bC,
          max: nC,
          step: fC,
          onChange: oC,
          orientation: qC,
          reverse: FC,
          tooltip: gC,
          labels: SC,
          handleLabel: PC,
          format: GC,
          onChangeStart: () => {
            null === RC || void 0 === RC || RC(), null === WC || void 0 === WC || WC(!0)
          },
          onChangeComplete: () => {
            null === WC || void 0 === WC || WC(!1), null === AC || void 0 === AC || AC()
          }
        })
      })
    }
    async function GC() {
      const CC = FC.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await CC.getResult() && (0, WC.reloadBloxd)()
    }

    function RC(CC) {
      let {
        label: zC,
        options: ZC,
        value: QC,
        onChange: wC,
        circleInfoText: bC
      } = CC;
      return (0, MC.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, MC.jsxs)("div", {
          className: "SliderText",
          children: [zC, bC && (0, MC.jsx)(nC.b, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: bC
          })]
        }), (0, MC.jsx)(fC.b, {
          ariaLabel: zC,
          options: ZC,
          value: QC,
          onChange: wC
        })]
      })
    }
  },
  6663: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      default: () => UC
    });
    var QC = ZC(48),
      wC = ZC(1463),
      bC = ZC(6560),
      nC = ZC(1169),
      fC = ZC(326),
      oC = ZC(1295),
      qC = ZC(1453),
      FC = ZC(1388),
      WC = ZC(1321),
      NC = ZC(2575),
      MC = ZC(2718),
      gC = ZC(4491),
      SC = ZC(1076),
      pC = ZC(1439),
      PC = ZC(77),
      GC = ZC(1143);
    const RC = ZC.p + "static/media/bloxdhubLogo.6a6c367af2ad6e6f1eb3.webp";
    var AC = ZC(1002),
      xC = ZC.n(AC),
      JC = ZC(1013),
      IC = ZC(1307),
      iC = ZC(6556),
      vC = ZC(1056);
    const eC = (0, QC.lazy)((() => Promise.all([ZC.e(107), ZC.e(77), ZC.e(133), ZC.e(132), ZC.e(112), ZC.e(397)]).then((() => ZC(6594))).then((CC => ({
      default: CC.ShaderPackPublishForm
    })))));

    function hC(CC) {
      let {
        details: zC,
        owner: ZC,
        onChanged: wC
      } = CC;
      const {
        t: nC
      } = (0, GC.y)(), fC = (0, qC.useNavigatePreserveSearch)(), {
        userContext: WC
      } = (0, SC.e)(), [NC, MC] = (0, QC.useState)(!1), [gC, PC] = (0, QC.useState)(null), [RC, AC] = (0, QC.useState)(!1), {
        packId: hC,
        name: KC,
        description: YC,
        live: dC
      } = zC;
      async function mC(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wC;
        MC(!0), PC(null);
        try {
          await CC(), zC()
        } catch (ZC) {
          console.error("Failed to change a shader pack", ZC), PC((0, iC.z)(ZC, nC, "shaderPackListing:ownerActionFailed"))
        } finally {
          MC(!1)
        }
      }
      const HC = (0, iC.u)(WC);
      return (0, vC.jsxs)("section", {
        className: "ShaderPackOwnerPanel",
        children: [(0, vC.jsx)("h2", {
          className: "ShaderPackSectionTitle",
          children: nC("general:manage")
        }), (0, iC.X)(ZC, !(null === dC || void 0 === dC || !dC.renderId), Date.now(), nC).map((CC => (0, vC.jsxs)("div", {
          className: xC()("ShaderPackOwnerNotice", {
            Warning: "warning" === CC.tone
          }),
          children: [(0, vC.jsx)(JC.c, {
            name: "warning" === CC.tone ? "triangle-exclamation" : "circle-info"
          }), (0, vC.jsxs)("div", {
            children: [CC.text, CC.detail && (0, vC.jsx)("pre", {
              className: "ShaderPackOwnerNoticeDetail",
              children: CC.detail
            })]
          })]
        }, CC.text))), zC.ban && (0, vC.jsxs)("div", {
          className: "ShaderPackOwnerNotice Warning",
          children: [(0, vC.jsx)(JC.c, {
            name: "ban"
          }), (0, vC.jsxs)("div", {
            children: ["Banned by ", zC.ban.byName, " on ", new Date(zC.ban.at).toLocaleString()]
          })]
        }), gC && (0, vC.jsx)("div", {
          className: "ShaderPackOwnerError",
          children: gC
        }), (0, vC.jsxs)("div", {
          className: "ShaderPackOwnerActions",
          children: [(0, vC.jsxs)(FC.O, {
            disabled: NC,
            onClick: () => {
              !async function() {
                const CC = await IC.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:renameTitle",
                  initialValue: KC,
                  maxLength: bC.y,
                  submitText: "general:save",
                  validate: CC => CC.trim().length < bC.A ? nC("shaderPackListing:nameTooShort", {
                    min: String(bC.A)
                  }) : null
                }).getResult();
                "notificationTornDown" !== CC && "submit" === (null === CC || void 0 === CC ? void 0 : CC.type) && CC.value.trim() !== KC && await mC((() => pC.d.updateShaderPack(WC, {
                  packId: hC,
                  name: CC.value.trim()
                })))
              }()
            },
            children: [(0, vC.jsx)(JC.c, {
              name: "pen"
            }), " ", nC("shaderPackListing:rename")]
          }), (0, vC.jsxs)(FC.O, {
            disabled: NC,
            onClick: () => {
              !async function() {
                const CC = await IC.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:editDescription",
                  initialValue: YC,
                  maxLength: bC.o,
                  multiline: !0,
                  allowEmptySubmit: !0,
                  submitText: "general:save"
                }).getResult();
                "notificationTornDown" !== CC && "submit" === (null === CC || void 0 === CC ? void 0 : CC.type) && CC.value.trim() !== YC && await mC((() => pC.d.updateShaderPack(WC, {
                  packId: hC,
                  description: CC.value.trim()
                })))
              }()
            },
            children: [(0, vC.jsx)(JC.c, {
              name: "file-lines"
            }), " ", nC("shaderPackListing:editDescription")]
          }), (0, vC.jsxs)(FC.O, {
            disabled: NC || ZC.isBanned && !ZC.listed,
            onClick: () => {
              mC((() => pC.d.updateShaderPack(WC, {
                packId: hC,
                listed: !ZC.listed
              })))
            },
            children: [(0, vC.jsx)(JC.c, {
              name: ZC.listed ? "eye-slash" : "eye"
            }), " ", nC(ZC.listed ? "shaderPackListing:unlist" : "shaderPackListing:relist")]
          }), !ZC.isBanned && (0, vC.jsxs)(FC.g, {
            disabled: NC,
            onClick: () => {
              AC(!RC)
            },
            children: [(0, vC.jsx)(JC.c, {
              name: "upload"
            }), " ", nC("shaderPackListing:uploadVersion")]
          }), (0, vC.jsxs)(FC.K, {
            disabled: NC || ZC.isBanned,
            onClick: () => {
              !async function() {
                !0 === await IC.NotificationProvider.showPromptPopup({
                  title: "shaderPackListing:deleteTitle",
                  subtitle: "shaderPackListing:deleteSubtitle",
                  confirmText: "general:delete",
                  cancelText: "general:cancel",
                  destructive: !0
                }).getResult() && await mC((() => pC.d.deleteShaderPack(WC, hC)), (() => {
                  fC(`${iC.W}?section=mine`, {
                    replace: !0
                  })
                }))
              }()
            },
            children: [(0, vC.jsx)(JC.c, {
              name: "trash-can"
            }), " ", nC("general:delete")]
          }), HC && (0, vC.jsxs)(FC.K, {
            disabled: NC,
            onClick: () => {
              mC((() => pC.d.setShaderPackBanned(WC, hC, !ZC.isBanned)))
            },
            children: [(0, vC.jsx)(JC.c, {
              name: ZC.isBanned ? "circle-check" : "ban"
            }), " ", ZC.isBanned ? "Unban" : "Ban"]
          })]
        }), RC && (0, vC.jsx)(QC.Suspense, {
          fallback: (0, vC.jsx)(oC.d, {}),
          children: (0, vC.jsx)(eC, {
            existing: {
              packId: hC,
              name: KC,
              description: YC
            },
            onPublished: () => {
              AC(!1), wC()
            }
          })
        })]
      })
    }
    var KC = ZC(60),
      YC = ZC(1806),
      dC = ZC(1228),
      mC = ZC(4979),
      HC = ZC(1149),
      EC = ZC(6570),
      lC = ZC(6562),
      XC = ZC(6580);

    function cC(CC) {
      let {
        item: zC
      } = CC;
      const {
        t: ZC
      } = (0, GC.y)(), [wC] = (0, EC.f)(), [nC, fC] = (0, QC.useState)(wC), [oC, qC] = (0, QC.useState)(!1), [FC, WC] = (0, QC.useState)(!1), {
        s3Url: NC
      } = HC.clientSideServerUrls, {
        width: MC,
        height: gC
      } = bC.s.large, SC = (0, bC.w)(NC, zC, nC, "large"), {
        renderVersion: pC
      } = zC;
      return (0, vC.jsxs)("div", {
        className: "ShaderPackPreviews",
        children: [(0, vC.jsx)(XC.c, {
          selected: nC,
          onSelect: CC => {
            fC(CC), qC(!1)
          },
          imageUrl: CC => (0, bC.w)(NC, zC, CC, "thumb")
        }), (0, vC.jsxs)("div", {
          className: "ShaderPackPreviewStage",
          children: [!oC && (0, vC.jsxs)("button", {
            type: "button",
            className: "ShaderPackPreviewMain",
            title: null === pC ? void 0 : ZC("shaderPackListing:fullSize"),
            disabled: null === pC,
            onClick: () => {
              WC(!0)
            },
            children: [(0, vC.jsx)("img", {
              src: SC,
              width: MC,
              height: gC,
              alt: ZC(iC.gb[nC]),
              draggable: !1
            }), (0, vC.jsx)(lC.c, {
              item: zC
            })]
          }), !oC && null !== pC && (0, vC.jsxs)(TC, {
            side: "Right",
            onClick: () => {
              qC(!0)
            },
            children: [(0, vC.jsx)(JC.c, {
              name: "arrows-left-right"
            }), " ", ZC("shaderPackListing:compare")]
          }), oC && null !== pC && (0, vC.jsx)(sC, {
            item: zC,
            packUrl: SC,
            baselineUrl: (0, bC.m)(NC, pC, nC, "large")
          }), oC && (0, vC.jsx)(TC, {
            side: "Left",
            onClick: () => {
              qC(!1)
            },
            children: ZC("shaderPackListing:withPack")
          }), oC && (0, vC.jsx)(TC, {
            side: "Right",
            onClick: () => {
              qC(!1)
            },
            children: ZC("shaderPackListing:withoutPack")
          })]
        }), FC && (0, vC.jsx)(uC, {
          fullUrl: (0, bC.w)(NC, zC, nC, "full"),
          largeUrl: SC,
          alt: ZC(iC.gb[nC]),
          onClose: () => {
            WC(!1)
          }
        })]
      })
    }

    function uC(CC) {
      let {
        fullUrl: zC,
        largeUrl: ZC,
        alt: wC,
        onClose: bC
      } = CC;
      const nC = (0, QC.useRef)(null);
      return (0, dC.u)("popup", nC, bC), (0, QC.useEffect)((() => {
        function CC(CC) {
          "Escape" === CC.key && (CC.stopPropagation(), bC())
        }
        return window.addEventListener("keydown", CC, !0), () => {
          window.removeEventListener("keydown", CC, !0)
        }
      }), [bC]), (0, KC.createPortal)((0, vC.jsxs)("div", {
        ref: nC,
        className: "ShaderPackFullSize",
        onClick: bC,
        children: [(0, vC.jsx)("img", {
          className: "ShaderPackFullSizeImage",
          src: zC,
          alt: wC,
          draggable: !1,
          style: {
            backgroundImage: `url(${ZC})`
          }
        }), (0, vC.jsx)(FC.k, {
          className: "ShaderPackFullSizeClose",
          onClick: bC
        })]
      }), document.body)
    }
    const rC = 5;

    function sC(CC) {
      let {
        item: zC,
        packUrl: ZC,
        baselineUrl: wC
      } = CC;
      const {
        t: nC
      } = (0, GC.y)(), [fC, oC] = (0, QC.useState)(50), qC = (0, QC.useRef)(!1), FC = (0, QC.useRef)(null), {
        width: WC,
        height: NC
      } = bC.s.large;

      function MC(CC) {
        oC((zC => (0, YC.c)(zC + CC, 0, 100)))
      }

      function gC(CC) {
        const zC = CC.currentTarget.getBoundingClientRect();
        oC((0, YC.c)((CC.clientX - zC.left) / zC.width * 100, 0, 100))
      }
      return (0, mC.g)(FC, {
        adjust: CC => {
          MC(CC * rC)
        },
        setFraction: CC => {
          oC(100 * CC)
        },
        endDrag: () => {}
      }), (0, vC.jsxs)("div", {
        ref: FC,
        className: "ShaderPackCompare",
        "data-pad-slider": "",
        "data-pad-focusable": "",
        role: "slider",
        tabIndex: 0,
        "aria-label": nC("shaderPackListing:compare"),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(fC),
        style: {
          "--split": `${fC}%`
        },
        onKeyDown: function(CC) {
          const zC = "ArrowLeft" === CC.key ? -rC : "ArrowRight" === CC.key ? rC : 0;
          0 !== zC && (CC.preventDefault(), MC(zC))
        },
        onPointerDown: CC => {
          qC.current = !0, CC.currentTarget.setPointerCapture(CC.pointerId), gC(CC)
        },
        onPointerMove: CC => {
          qC.current && gC(CC)
        },
        onPointerUp: () => {
          qC.current = !1
        },
        onPointerCancel: () => {
          qC.current = !1
        },
        children: [(0, vC.jsx)("img", {
          className: "ShaderPackCompareBaseline",
          src: wC,
          width: WC,
          height: NC,
          alt: "",
          draggable: !1,
          style: {
            backgroundImage: `url(${ZC})`
          }
        }), (0, vC.jsx)("div", {
          className: "ShaderPackCompareLine"
        }), (0, vC.jsx)("img", {
          className: "ShaderPackComparePack",
          src: ZC,
          width: WC,
          height: NC,
          alt: "",
          draggable: !1
        }), (0, vC.jsx)(lC.c, {
          item: zC,
          className: "ShaderPackCompareNotice"
        })]
      })
    }

    function TC(CC) {
      let {
        side: zC,
        onClick: ZC,
        children: QC
      } = CC;
      return (0, vC.jsx)("button", {
        type: "button",
        className: `ShaderPackStageButton ${zC}`,
        onClick: ZC,
        children: (0, vC.jsx)("span", {
          className: "ShaderPackStageButtonFace SmallTextBold",
          children: QC
        })
      })
    }
    var aC = ZC(4942),
      tC = ZC(296),
      DC = ZC(6660);
    const jC = {
      compiler: "shaderPack:compilerUnavailable",
      download: "shaderPackListing:useDownloadFailed",
      apiVersion: "shaderPackListing:useOtherApiVersion",
      invalid: "shaderPackListing:useInvalid",
      errors: "shaderPackListing:useFailsHere",
      save: "shaderPack:saveFailed"
    };

    function yC(CC) {
      const {
        userContext: zC
      } = (0, SC.e)(), [wC, bC] = (0, QC.useState)(null), [nC, fC] = (0, QC.useState)(!1), [oC, qC] = (0, QC.useState)(!1), [FC, WC] = (0, QC.useState)(null), NC = null === CC || void 0 === CC ? void 0 : CC.packId, MC = null === CC || void 0 === CC ? void 0 : CC.sourceHash;
      return (0, QC.useEffect)((() => {
        if (fC(!1), WC(null), void 0 === NC) return;
        let CC = !1;
        return Promise.all([(0, PC.hasUsableWebGpuAdapter)(), (0, DC.e)()]).then((zC => {
          let [ZC, QC] = zC;
          var wC;
          CC || (bC(ZC), fC((null === QC || void 0 === QC || null === (wC = QC.listing) || void 0 === wC ? void 0 : wC.packId) === NC && QC.listing.sourceHash === MC))
        })).catch((zC => {
          console.error("Failed to check whether this shader pack can be used", zC), CC || bC(!1)
        })), () => {
          CC = !0
        }
      }), [NC, MC]), {
        webGpuUsable: wC,
        inUse: nC,
        busy: oC,
        errorKey: FC,
        use: () => {
          null !== CC && async function(CC) {
            qC(!0), WC(null);
            try {
              const {
                installListedShaderPack: QC
              } = await Promise.all([ZC.e(77), ZC.e(133), ZC.e(113)]).then((() => ZC(40318))), wC = await QC({
                packId: CC.packId,
                sourceHash: CC.sourceHash,
                name: CC.name,
                ownerName: CC.ownerName,
                description: CC.description
              });
              if ("failed" === wC.kind) return void WC(jC[wC.reason]);
              fC(!0), pC.d.recordShaderPackDownload(zC, CC.packId).catch((CC => {
                console.error("Failed to count a shader pack's download", CC)
              })), (0, aC.h)()
            } catch (QC) {
              console.error("Failed to use the shader pack", QC), WC("shaderPack:unexpectedError")
            } finally {
              qC(!1)
            }
          }(CC)
        }
      }
    }

    function LC(CC) {
      let {
        packUse: zC
      } = CC;
      const {
        t: ZC
      } = (0, GC.y)(), {
        webGpuUsable: QC,
        inUse: wC,
        busy: bC,
        errorKey: nC,
        use: fC
      } = zC;
      return (0, vC.jsxs)("div", {
        className: "ShaderPackUse",
        children: [(0, vC.jsxs)(FC.o, {
          disabled: !0 !== QC || wC,
          loading: bC,
          onClick: fC,
          children: [(0, vC.jsx)(JC.c, {
            name: wC ? "check" : "download"
          }), " ", ZC(wC ? "shaderPackListing:inUse" : "shaderPackListing:use")]
        }), !1 === QC && (0, vC.jsx)("div", {
          className: "ShaderPackUseNote",
          children: ZC((0, tC.k)() ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), nC && (0, vC.jsx)("div", {
          className: "ShaderPackUseNote Error",
          children: ZC(nC)
        })]
      })
    }

    function UC() {
      var CC;
      const {
        t: zC
      } = (0, GC.y)(), ZC = (0, qC.useNavigatePreserveSearch)(), {
        packId: bC
      } = (0, wC.C)(), {
        userContext: nC,
        isUserContextUpdating: fC
      } = (0, SC.e)(), [WC, NC] = (0, QC.useState)(null), [MC, PC] = (0, QC.useState)(null), [RC, AC] = (0, QC.useState)(0), xC = (0, QC.useRef)(0);

      function JC() {
        var CC;
        null !== (CC = (0, qC.getPreviousLocation)()) && void 0 !== CC && CC.startsWith(iC.W) ? ZC(-1) : ZC(iC.W)
      }(0, gC.e)(JC), (0, EC.b)(), (0, QC.useEffect)((() => {
        if (fC || void 0 === bC) return;
        const CC = ++xC.current;
        PC(null), pC.d.getShaderPack(nC, bC).then((zC => {
          xC.current === CC && NC(zC)
        })).catch((zC => {
          xC.current === CC && (console.error("Failed to get the shader pack", zC), NC(null), PC({
            error: zC
          }))
        }))
      }), [bC, nC, fC, RC]);
      const IC = () => {
          AC((CC => CC + 1))
        },
        eC = (null === WC || void 0 === WC ? void 0 : WC.packId) === bC ? WC : null,
        KC = (0, EC.j)(),
        YC = yC(null !== (CC = null === eC || void 0 === eC ? void 0 : eC.live) && void 0 !== CC ? CC : null),
        dC = null !== eC && void 0 !== eC && eC.live ? (0, vC.jsx)(BC, {
          item: eC.live,
          favourites: KC,
          packUse: YC
        }) : null;
      return (0, vC.jsxs)("article", {
        className: "ShaderPackInformation AnimFadeIn",
        children: [(0, vC.jsx)(FC.c, {
          onClick: JC,
          children: zC("shaderPackListing:backToPacks")
        }), null === eC && null === MC && (0, vC.jsx)("div", {
          className: "ShaderPackInformationMessage",
          children: (0, vC.jsx)(oC.d, {})
        }), null !== MC && (0, vC.jsxs)("div", {
          className: "ShaderPackInformationMessage",
          children: [(0, iC.z)(MC.error, zC, "shaderPackListing:loadPackFailed"), (0, vC.jsx)(FC.g, {
            onClick: IC,
            children: zC("general:tryAgain")
          })]
        }), null !== eC && null === MC && (0, vC.jsxs)("div", {
          className: "ShaderPackInformationBody",
          children: [(0, vC.jsxs)("header", {
            className: "ShaderPackInformationHeader",
            children: [(0, vC.jsx)("h1", {
              className: "FullyFancyText",
              children: eC.name
            }), dC]
          }), eC.live && (0, vC.jsx)(cC, {
            item: eC.live
          }), eC.live && (0, vC.jsx)(OC, {
            item: eC.live,
            ownerPreview: eC.ownerPreview,
            bloxdhubSlug: eC.bloxdhubSlug,
            actions: dC
          }), eC.owner && (0, vC.jsx)(hC, {
            details: eC,
            owner: eC.owner,
            onChanged: IC
          })]
        })]
      })
    }

    function BC(CC) {
      let {
        item: zC,
        favourites: ZC,
        packUse: QC
      } = CC;
      const wC = ZC.isFavourite(zC.packId);
      return (0, vC.jsxs)("div", {
        className: "ShaderPackInformationActions",
        children: [PC.featureFlags.settings.canUseShaderPacks && (0, vC.jsx)(LC, {
          packUse: QC
        }), (0, vC.jsx)(FC.x, {
          className: "ShaderPackInformationLike",
          onClick: () => {
            ZC.toggle(zC.packId)
          },
          isLiked: !0 === wC,
          isLoading: null === wC
        })]
      })
    }

    function OC(CC) {
      let {
        item: zC,
        ownerPreview: ZC,
        bloxdhubSlug: QC,
        actions: wC
      } = CC;
      const {
        t: fC
      } = (0, GC.y)(), oC = (0, MC.q)(), FC = null === QC ? null : (0, bC.e)(QC);
      return (0, vC.jsxs)("div", {
        className: "ShaderPackFacts",
        children: [zC.description && (0, vC.jsx)("p", {
          className: "ShaderPackDescription",
          children: zC.description
        }), (0, vC.jsxs)("div", {
          className: "ShaderPackFeatureList",
          children: [(null !== ZC || null !== FC) && (0, vC.jsx)("div", {
            className: "ShaderPackAuthor",
            children: null !== ZC ? (0, vC.jsxs)(vC.Fragment, {
              children: [(0, vC.jsx)(NC.f, {
                playerSocialPreview: ZC,
                showLocation: !1,
                linkToProfile: !0
              }), null !== FC && (0, vC.jsx)("a", {
                className: "ShaderPackBloxdhubLogo",
                href: FC,
                target: "_blank",
                rel: "noopener noreferrer",
                children: (0, vC.jsx)("img", {
                  src: RC,
                  alt: bC.b
                })
              })]
            }) : (0, vC.jsxs)("a", {
              className: "ShaderPackBloxdhubName",
              href: FC,
              target: "_blank",
              rel: "noopener noreferrer",
              children: [bC.b, (0, vC.jsx)("img", {
                src: RC,
                alt: ""
              })]
            })
          }), iC.B.filter((CC => zC.features.includes(CC))).map((CC => (0, vC.jsx)(qC.LinkPreserveSearch, {
            className: "ShaderPackFeature",
            to: (0, iC.M)(CC),
            children: fC(iC.Q[CC])
          }, CC)))]
        }), wC, (0, vC.jsxs)("dl", {
          className: "ShaderPackFactList",
          children: [(0, vC.jsxs)("div", {
            children: [(0, vC.jsx)("dt", {
              children: fC("shaderPackListing:downloads")
            }), (0, vC.jsx)("dd", {
              children: (0, nC.Z)(zC.downloads)
            })]
          }), (0, vC.jsx)(kC, {
            label: fC("shaderPackListing:updated"),
            time: zC.listedUpdatedAt,
            now: oC
          }), (0, vC.jsx)(kC, {
            label: fC("shaderPackListing:created"),
            time: zC.publishedAt,
            now: oC
          }), null !== zC.gpuCost && (0, vC.jsxs)("div", {
            children: [(0, vC.jsx)("dt", {
              children: fC("shaderPackListing:lag")
            }), (0, vC.jsx)("dd", {
              children: fC("shaderPackListing:lagPercent", {
                percent: String((0, iC.V)(zC.gpuCost))
              })
            })]
          }), (0, vC.jsxs)("div", {
            children: [(0, vC.jsx)("dt", {
              children: fC("shaderPackListing:size")
            }), (0, vC.jsx)("dd", {
              children: fC("shaderPackListing:sizeValue", {
                kilobytes: String((0, iC.S)(zC.sourceBytes))
              })
            })]
          }), (0, vC.jsxs)("div", {
            children: [(0, vC.jsx)("dt", {
              children: fC("shaderPackListing:files")
            }), (0, vC.jsx)("dd", {
              children: zC.fileCount
            })]
          })]
        })]
      })
    }

    function kC(CC) {
      let {
        label: zC,
        time: ZC,
        now: QC
      } = CC;
      const {
        t: wC,
        selectedLanguage: bC
      } = (0, GC.y)(), nC = new Date(ZC);
      let oC = nC.toLocaleDateString();
      if (QC - ZC <= 30 * fC.e) {
        const CC = (0, GC.m)(bC.code, "shaderPackListing:timeAgo");
        oC = wC("shaderPackListing:timeAgo", {
          time: (0, fC.U)(CC, ZC, QC)
        })
      }
      return (0, vC.jsx)(WC.d, {
        tooltipInner: nC.toLocaleString(),
        children: (0, vC.jsxs)("div", {
          children: [(0, vC.jsx)("dt", {
            children: zC
          }), (0, vC.jsx)("dd", {
            children: oC
          })]
        })
      })
    }
  },
  4971: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => nC
    });
    var QC = ZC(1002),
      wC = ZC.n(QC),
      bC = ZC(1056);

    function nC(CC) {
      let {
        options: zC,
        value: ZC,
        onChange: QC,
        ariaLabel: nC,
        className: fC,
        reselectable: oC = !1,
        keepsFocus: qC = !1,
        padTabs: FC
      } = CC;
      const WC = void 0 !== FC;
      return (0, bC.jsx)("div", {
        className: wC()("SegmentedToggle", fC),
        role: "group",
        "aria-label": nC,
        "data-pad-tabs": FC,
        children: zC.map((CC => {
          const zC = CC.value === ZC;
          return (0, bC.jsx)("button", {
            type: "button",
            "aria-pressed": zC,
            "data-pad-tab": WC || void 0,
            "data-pad-selected": WC && zC ? "true" : void 0,
            "data-pad-default-focus": WC && zC || void 0,
            "aria-label": CC.ariaLabel,
            title: CC.ariaLabel,
            className: wC()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: zC
            }),
            onMouseDown: qC ? CC => {
              CC.preventDefault()
            } : void 0,
            onClick: () => {
              zC && !oC || QC(CC.value)
            },
            children: CC.label
          }, CC.value)
        }))
      })
    }
  },
  4979: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => bC,
      g: () => nC
    });
    var QC = ZC(48);
    const wC = new WeakMap,
      bC = CC => {
        var zC;
        const ZC = CC.closest("[data-pad-slider]");
        return ZC && null !== (zC = wC.get(ZC)) && void 0 !== zC ? zC : null
      },
      nC = (CC, zC) => {
        const ZC = (0, QC.useRef)(zC);
        ZC.current = zC, (0, QC.useEffect)((() => {
          if (CC.current) return ((CC, zC) => (wC.set(CC, zC), () => {
            wC.get(CC) === zC && wC.delete(CC)
          }))(CC.current, {
            adjust: CC => {
              ZC.current.adjust(CC)
            },
            setFraction: CC => {
              ZC.current.setFraction(CC)
            },
            endDrag: () => {
              ZC.current.endDrag()
            }
          })
        }), [CC])
      }
  },
  6660: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => wC,
      e: () => bC
    });
    var QC = ZC(38);
    const wC = "shaderPack";
    async function bC() {
      var CC;
      let zC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (CC = await QC.g.getItem(wC, zC)) && void 0 !== CC ? CC : null
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);