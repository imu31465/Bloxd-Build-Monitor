export const id = 95;
export const ids = [95, 125];
export const modules = {
  4035: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => mB,
      f: () => yB,
      g: () => ec,
      i: () => Sc
    });
    var Vc = nc(73),
      Ic = nc(4041),
      rB = nc(3551),
      uc = nc(1205),
      sc = nc(4066),
      Mc = nc(912),
      Pc = nc.n(Mc),
      qB = nc(1194),
      Oc = nc(1495),
      Tc = nc(4073),
      fc = nc(957);

    function mB(cB) {
      let {
        label: Bc,
        onClick: nc,
        checked: Vc,
        circleInfoText: Ic,
        className: sc,
        disabled: Mc
      } = cB;
      return (0, fc.jsx)("div", {
        "aria-disabled": Mc || void 0,
        "data-pad-focusable": !0,
        className: Pc()("SettingBox CheckboxContainer", {
          [sc]: sc,
          SettingBoxDisabled: Mc
        }),
        onClick: () => {
          Mc || nc(!Vc)
        },
        children: (0, fc.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, fc.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, fc.jsx)(rB.c, {
              className: "SettingsCheckbox",
              checked: Vc,
              disabled: Mc,
              onChange: () => {}
            })
          }), (0, fc.jsxs)("div", {
            className: "CheckboxText",
            children: [Bc, Ic && (0, fc.jsx)("span", {
              onClick: cB => cB.stopPropagation(),
              children: (0, fc.jsx)(uc.c, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: Ic
              })
            })]
          })]
        })
      })
    }

    function ec(cB) {
      let {
        name: Bc,
        onChange: nc,
        min: Ic,
        max: rB,
        step: sc,
        initValue: Mc,
        circleInfoText: qB,
        format: Oc,
        className: Tc,
        padStep: mB,
        disabled: ec = !1,
        selectableMax: Sc,
        cappedNote: yB
      } = cB;
      const [zB, pc] = (0, Vc.useState)(Mc);
      (0, Vc.useEffect)((() => {
        pc(Mc)
      }), [Mc]);
      const hc = void 0 !== Sc && Sc < rB,
        aB = hc ? {
          "--slider-selectable": (Sc - Ic) / (rB - Ic)
        } : void 0;
      return (0, fc.jsxs)("div", {
        className: Pc()("SettingBox SettingsSliderDiv", {
          [Tc]: Tc,
          SettingBoxDisabled: ec,
          SliderCapped: hc
        }),
        style: aB,
        children: [(0, fc.jsxs)("div", {
          className: "SliderText",
          children: [`${Bc}: ${Oc?Oc(zB):zB}`, qB && (0, fc.jsx)(uc.c, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: qB
          })]
        }), (0, fc.jsx)("div", {
          className: "SliderDiv",
          children: (0, fc.jsx)(tB, {
            value: zB,
            min: Ic,
            max: rB,
            step: sc,
            onChange: cB => {
              if (hc && cB >= Sc && zB === Sc) return;
              const Bc = hc ? Math.min(cB, Sc) : cB;
              pc(Bc), nc(Bc)
            },
            format: Oc,
            padStep: mB,
            disabled: ec
          })
        }), hc && yB && (0, fc.jsx)("div", {
          className: "SliderNote",
          children: yB
        })]
      })
    }

    function tB(cB) {
      var Bc;
      let {
        value: nc,
        min: rB,
        max: uc,
        step: sc,
        onChange: Mc,
        orientation: Pc,
        reverse: qB,
        setIsChanging: Oc,
        tooltip: mB,
        labels: ec,
        handleLabel: tB,
        format: Sc,
        onChangeStart: yB,
        onChangeComplete: zB,
        padStep: pc,
        disabled: hc = !1
      } = cB;
      const aB = (0, Vc.useRef)(null),
        lc = (0, Vc.useRef)(null);
      (0, Vc.useLayoutEffect)((() => {
        var cB, Bc, nc;
        const Vc = null !== (cB = null === (Bc = aB.current) || void 0 === Bc ? void 0 : Bc.querySelector(".rangeslider")) && void 0 !== cB ? cB : null;
        null === Vc || void 0 === Vc || Vc.setAttribute("data-pad-slider", ""), null === Vc || void 0 === Vc || Vc.setAttribute("data-pad-focusable", ""), null === Vc || void 0 === Vc || null === (nc = Vc.querySelector(".rangeslider__handle")) || void 0 === nc || nc.setAttribute("data-pad-slider-handle", ""), lc.current = Vc
      }), []), (0, Vc.useLayoutEffect)((() => {
        var cB, Bc;
        hc ? null === (cB = lc.current) || void 0 === cB || cB.setAttribute("aria-disabled", "true") : null === (Bc = lc.current) || void 0 === Bc || Bc.removeAttribute("aria-disabled")
      }), [hc]);
      const Yc = (null !== (Bc = String(sc).split(".")[1]) && void 0 !== Bc ? Bc : "").length,
        Lc = cB => {
          const Bc = Number((Math.round((cB - rB) / sc) * sc + rB).toFixed(Yc));
          return Math.min(uc, Math.max(rB, Bc))
        },
        gB = (0, Vc.useRef)(!1);
      return (0, Tc.g)(lc, {
        adjust: cB => {
          if (hc) return;
          const Bc = null !== pc && void 0 !== pc ? pc : Math.max(sc, Math.round((uc - rB) / 20 / sc) * sc),
            Vc = Lc(nc + cB * Bc * (qB ? -1 : 1));
          Vc !== nc && (null === yB || void 0 === yB || yB(), Mc(Vc), null === zB || void 0 === zB || zB())
        },
        setFraction: cB => {
          if (hc) return;
          const Bc = Lc(rB + (qB ? 1 - cB : cB) * (uc - rB));
          Bc !== nc && (gB.current || (gB.current = !0, null === yB || void 0 === yB || yB()), Mc(Bc))
        },
        endDrag: () => {
          gB.current && (gB.current = !1, null === zB || void 0 === zB || zB())
        }
      }), (0, fc.jsx)("div", {
        ref: aB,
        style: {
          display: "contents"
        },
        children: (0, fc.jsx)(Ic.e, {
          value: nc,
          min: rB,
          max: uc,
          step: sc,
          onChange: Mc,
          orientation: Pc,
          reverse: qB,
          tooltip: mB,
          labels: ec,
          handleLabel: tB,
          format: Sc,
          onChangeStart: () => {
            null === yB || void 0 === yB || yB(), null === Oc || void 0 === Oc || Oc(!0)
          },
          onChangeComplete: () => {
            null === Oc || void 0 === Oc || Oc(!1), null === zB || void 0 === zB || zB()
          }
        })
      })
    }
    async function Sc() {
      const cB = qB.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await cB.getResult() && (0, Oc.reloadBloxd)()
    }

    function yB(cB) {
      let {
        label: Bc,
        options: nc,
        value: Vc,
        onChange: Ic,
        circleInfoText: rB
      } = cB;
      return (0, fc.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, fc.jsxs)("div", {
          className: "SliderText",
          children: [Bc, rB && (0, fc.jsx)(uc.c, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: rB
          })]
        }), (0, fc.jsx)(sc.e, {
          ariaLabel: Bc,
          options: nc,
          value: Vc,
          onChange: Ic
        })]
      })
    }
  },
  5635: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      default: () => Kc
    });
    var Vc = nc(73),
      Ic = nc(1344),
      rB = nc(5523),
      uc = nc(1090),
      sc = nc(302),
      Mc = nc(1188),
      Pc = nc(1330),
      qB = nc(1255),
      Oc = nc(1205),
      Tc = nc(2020),
      fc = nc(2154),
      mB = nc(3659),
      ec = nc(985),
      tB = nc(1314),
      Sc = nc(107),
      yB = nc(1051);
    const zB = nc.p + "static/media/bloxdhubLogo.6a6c367af2ad6e6f1eb3.webp";
    var pc = nc(912),
      hc = nc.n(pc),
      aB = nc(926),
      lc = nc(1194),
      Yc = nc(5516),
      Lc = nc(957);
    const gB = (0, Vc.lazy)((() => Promise.all([nc.e(92), nc.e(123), nc.e(120), nc.e(114), nc.e(113)]).then((() => nc(5558))).then((cB => ({
      default: cB.ShaderPackPublishForm
    })))));

    function Uc(cB) {
      let {
        details: Bc,
        owner: nc,
        onChanged: Ic
      } = cB;
      const {
        t: uc
      } = (0, yB.x)(), sc = (0, Pc.useNavigatePreserveSearch)(), {
        userContext: Oc
      } = (0, ec.c)(), [Tc, fc] = (0, Vc.useState)(!1), [mB, Sc] = (0, Vc.useState)(null), [zB, pc] = (0, Vc.useState)(!1), {
        packId: Uc,
        name: bB,
        description: Zc,
        live: Qc
      } = Bc;
      async function Cc(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ic;
        fc(!0), Sc(null);
        try {
          await cB(), Bc()
        } catch (nc) {
          console.error("Failed to change a shader pack", nc), Sc((0, Yc.z)(nc, uc, "shaderPackListing:ownerActionFailed"))
        } finally {
          fc(!1)
        }
      }
      const vB = (0, Yc.t)(Oc);
      return (0, Lc.jsxs)("section", {
        className: "ShaderPackOwnerPanel",
        children: [(0, Lc.jsx)("h2", {
          className: "ShaderPackSectionTitle",
          children: uc("general:manage")
        }), (0, Yc.$)(nc, !(null === Qc || void 0 === Qc || !Qc.renderId), Date.now(), uc).map((cB => (0, Lc.jsxs)("div", {
          className: hc()("ShaderPackOwnerNotice", {
            Warning: "warning" === cB.tone
          }),
          children: [(0, Lc.jsx)(aB.e, {
            name: "warning" === cB.tone ? "triangle-exclamation" : "circle-info"
          }), (0, Lc.jsxs)("div", {
            children: [cB.text, cB.detail && (0, Lc.jsx)("pre", {
              className: "ShaderPackOwnerNoticeDetail",
              children: cB.detail
            })]
          })]
        }, cB.text))), Bc.ban && (0, Lc.jsxs)("div", {
          className: "ShaderPackOwnerNotice Warning",
          children: [(0, Lc.jsx)(aB.e, {
            name: "ban"
          }), (0, Lc.jsxs)("div", {
            children: ["Banned by ", Bc.ban.byName, " on ", new Date(Bc.ban.at).toLocaleString()]
          })]
        }), mB && (0, Lc.jsx)("div", {
          className: "ShaderPackOwnerError",
          children: mB
        }), (0, Lc.jsxs)("div", {
          className: "ShaderPackOwnerActions",
          children: [(0, Lc.jsxs)(qB.Q, {
            disabled: Tc,
            onClick: () => {
              !async function() {
                const cB = await lc.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:renameTitle",
                  initialValue: bB,
                  maxLength: rB.z,
                  submitText: "general:save",
                  validate: cB => cB.trim().length < rB.C ? uc("shaderPackListing:nameTooShort", {
                    min: String(rB.C)
                  }) : null
                }).getResult();
                "notificationTornDown" !== cB && "submit" === (null === cB || void 0 === cB ? void 0 : cB.type) && cB.value.trim() !== bB && await Cc((() => tB.e.updateShaderPack(Oc, {
                  packId: Uc,
                  name: cB.value.trim()
                })))
              }()
            },
            children: [(0, Lc.jsx)(aB.e, {
              name: "pen"
            }), " ", uc("shaderPackListing:rename")]
          }), (0, Lc.jsxs)(qB.Q, {
            disabled: Tc,
            onClick: () => {
              !async function() {
                const cB = await lc.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:editDescription",
                  initialValue: Zc,
                  maxLength: rB.p,
                  multiline: !0,
                  allowEmptySubmit: !0,
                  submitText: "general:save"
                }).getResult();
                "notificationTornDown" !== cB && "submit" === (null === cB || void 0 === cB ? void 0 : cB.type) && cB.value.trim() !== Zc && await Cc((() => tB.e.updateShaderPack(Oc, {
                  packId: Uc,
                  description: cB.value.trim()
                })))
              }()
            },
            children: [(0, Lc.jsx)(aB.e, {
              name: "file-lines"
            }), " ", uc("shaderPackListing:editDescription")]
          }), (0, Lc.jsxs)(qB.Q, {
            disabled: Tc || nc.isBanned && !nc.listed,
            onClick: () => {
              Cc((() => tB.e.updateShaderPack(Oc, {
                packId: Uc,
                listed: !nc.listed
              })))
            },
            children: [(0, Lc.jsx)(aB.e, {
              name: nc.listed ? "eye-slash" : "eye"
            }), " ", uc(nc.listed ? "shaderPackListing:unlist" : "shaderPackListing:relist")]
          }), !nc.isBanned && (0, Lc.jsxs)(qB.d, {
            disabled: Tc,
            onClick: () => {
              pc(!zB)
            },
            children: [(0, Lc.jsx)(aB.e, {
              name: "upload"
            }), " ", uc("shaderPackListing:uploadVersion")]
          }), (0, Lc.jsxs)(qB.N, {
            disabled: Tc || nc.isBanned,
            onClick: () => {
              !async function() {
                !0 === await lc.NotificationProvider.showPromptPopup({
                  title: "shaderPackListing:deleteTitle",
                  subtitle: "shaderPackListing:deleteSubtitle",
                  confirmText: "general:delete",
                  cancelText: "general:cancel",
                  destructive: !0
                }).getResult() && await Cc((() => tB.e.deleteShaderPack(Oc, Uc)), (() => {
                  sc(`${Yc.Z}?section=mine`, {
                    replace: !0
                  })
                }))
              }()
            },
            children: [(0, Lc.jsx)(aB.e, {
              name: "trash-can"
            }), " ", uc("general:delete")]
          }), vB && (0, Lc.jsxs)(qB.N, {
            disabled: Tc,
            onClick: () => {
              Cc((() => tB.e.setShaderPackBanned(Oc, Uc, !nc.isBanned)))
            },
            children: [(0, Lc.jsx)(aB.e, {
              name: nc.isBanned ? "circle-check" : "ban"
            }), " ", nc.isBanned ? "Unban" : "Ban"]
          })]
        }), zB && (0, Lc.jsx)(Vc.Suspense, {
          fallback: (0, Lc.jsx)(Mc.e, {}),
          children: (0, Lc.jsx)(gB, {
            existing: {
              packId: Uc,
              name: bB,
              description: Zc
            },
            onPublished: () => {
              pc(!1), Ic()
            }
          })
        })]
      })
    }
    var bB = nc(83),
      Zc = nc(1534),
      Qc = nc(1134),
      Cc = nc(4073),
      vB = nc(1062),
      Dc = nc(5533),
      Nc = nc(5526),
      Ec = nc(5546);

    function oc(cB) {
      let {
        item: Bc
      } = cB;
      const {
        t: nc
      } = (0, yB.x)(), [Ic] = (0, Dc.k)(), [uc, sc] = (0, Vc.useState)(Ic), [Mc, Pc] = (0, Vc.useState)(!1), [qB, Oc] = (0, Vc.useState)(!1), {
        s3Url: Tc
      } = vB.clientSideServerUrls, {
        width: fc,
        height: mB
      } = rB.q.large, ec = (0, rB.t)(Tc, Bc, uc, "large"), {
        renderVersion: tB
      } = Bc;
      return (0, Lc.jsxs)("div", {
        className: "ShaderPackPreviews",
        children: [(0, Lc.jsx)(Ec.b, {
          selected: uc,
          onSelect: cB => {
            sc(cB), Pc(!1)
          },
          imageUrl: cB => (0, rB.t)(Tc, Bc, cB, "thumb")
        }), (0, Lc.jsxs)("div", {
          className: "ShaderPackPreviewStage",
          children: [!Mc && (0, Lc.jsxs)("button", {
            type: "button",
            className: "ShaderPackPreviewMain",
            title: null === tB ? void 0 : nc("shaderPackListing:fullSize"),
            disabled: null === tB,
            onClick: () => {
              Oc(!0)
            },
            children: [(0, Lc.jsx)("img", {
              src: ec,
              width: fc,
              height: mB,
              alt: nc(Yc.jb[uc]),
              draggable: !1
            }), (0, Lc.jsx)(Nc.d, {
              item: Bc
            })]
          }), !Mc && null !== tB && (0, Lc.jsxs)(Xc, {
            side: "Right",
            onClick: () => {
              Pc(!0)
            },
            children: [(0, Lc.jsx)(aB.e, {
              name: "arrows-left-right"
            }), " ", nc("shaderPackListing:compare")]
          }), Mc && null !== tB && (0, Lc.jsx)(kB, {
            item: Bc,
            packUrl: ec,
            baselineUrl: (0, rB.l)(Tc, tB, uc, "large")
          }), Mc && (0, Lc.jsx)(Xc, {
            side: "Left",
            onClick: () => {
              Pc(!1)
            },
            children: nc("shaderPackListing:withPack")
          }), Mc && (0, Lc.jsx)(Xc, {
            side: "Right",
            onClick: () => {
              Pc(!1)
            },
            children: nc("shaderPackListing:withoutPack")
          })]
        }), qB && (0, Lc.jsx)(Wc, {
          fullUrl: (0, rB.t)(Tc, Bc, uc, "full"),
          largeUrl: ec,
          alt: nc(Yc.jb[uc]),
          onClose: () => {
            Oc(!1)
          }
        })]
      })
    }

    function Wc(cB) {
      let {
        fullUrl: Bc,
        largeUrl: nc,
        alt: Ic,
        onClose: rB
      } = cB;
      const uc = (0, Vc.useRef)(null);
      return (0, Qc.v)("popup", uc, rB), (0, Vc.useEffect)((() => {
        function cB(cB) {
          "Escape" === cB.key && (cB.stopPropagation(), rB())
        }
        return window.addEventListener("keydown", cB, !0), () => {
          window.removeEventListener("keydown", cB, !0)
        }
      }), [rB]), (0, bB.createPortal)((0, Lc.jsxs)("div", {
        ref: uc,
        className: "ShaderPackFullSize",
        onClick: rB,
        children: [(0, Lc.jsx)("img", {
          className: "ShaderPackFullSizeImage",
          src: Bc,
          alt: Ic,
          draggable: !1,
          style: {
            backgroundImage: `url(${nc})`
          }
        }), (0, Lc.jsx)(qB.k, {
          className: "ShaderPackFullSizeClose",
          onClick: rB
        })]
      }), document.body)
    }
    const wc = 5;

    function kB(cB) {
      let {
        item: Bc,
        packUrl: nc,
        baselineUrl: Ic
      } = cB;
      const {
        t: uc
      } = (0, yB.x)(), [sc, Mc] = (0, Vc.useState)(50), Pc = (0, Vc.useRef)(!1), qB = (0, Vc.useRef)(null), {
        width: Oc,
        height: Tc
      } = rB.q.large;

      function fc(cB) {
        Mc((Bc => (0, Zc.h)(Bc + cB, 0, 100)))
      }

      function mB(cB) {
        const Bc = cB.currentTarget.getBoundingClientRect();
        Mc((0, Zc.h)((cB.clientX - Bc.left) / Bc.width * 100, 0, 100))
      }
      return (0, Cc.g)(qB, {
        adjust: cB => {
          fc(cB * wc)
        },
        setFraction: cB => {
          Mc(100 * cB)
        },
        endDrag: () => {}
      }), (0, Lc.jsxs)("div", {
        ref: qB,
        className: "ShaderPackCompare",
        "data-pad-slider": "",
        "data-pad-focusable": "",
        role: "slider",
        tabIndex: 0,
        "aria-label": uc("shaderPackListing:compare"),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(sc),
        style: {
          "--split": `${sc}%`
        },
        onKeyDown: function(cB) {
          const Bc = "ArrowLeft" === cB.key ? -wc : "ArrowRight" === cB.key ? wc : 0;
          0 !== Bc && (cB.preventDefault(), fc(Bc))
        },
        onPointerDown: cB => {
          Pc.current = !0, cB.currentTarget.setPointerCapture(cB.pointerId), mB(cB)
        },
        onPointerMove: cB => {
          Pc.current && mB(cB)
        },
        onPointerUp: () => {
          Pc.current = !1
        },
        onPointerCancel: () => {
          Pc.current = !1
        },
        children: [(0, Lc.jsx)("img", {
          className: "ShaderPackCompareBaseline",
          src: Ic,
          width: Oc,
          height: Tc,
          alt: "",
          draggable: !1,
          style: {
            backgroundImage: `url(${nc})`
          }
        }), (0, Lc.jsx)("div", {
          className: "ShaderPackCompareLine"
        }), (0, Lc.jsx)("img", {
          className: "ShaderPackComparePack",
          src: nc,
          width: Oc,
          height: Tc,
          alt: "",
          draggable: !1
        }), (0, Lc.jsx)(Nc.d, {
          item: Bc,
          className: "ShaderPackCompareNotice"
        })]
      })
    }

    function Xc(cB) {
      let {
        side: Bc,
        onClick: nc,
        children: Vc
      } = cB;
      return (0, Lc.jsx)("button", {
        type: "button",
        className: `ShaderPackStageButton ${Bc}`,
        onClick: nc,
        children: (0, Lc.jsx)("span", {
          className: "ShaderPackStageButtonFace SmallTextBold",
          children: Vc
        })
      })
    }
    var Hc = nc(4035),
      Fc = nc(235),
      Jc = nc(5626);
    const jB = {
      compiler: "shaderPack:compilerUnavailable",
      download: "shaderPackListing:useDownloadFailed",
      apiVersion: "shaderPackListing:useOtherApiVersion",
      invalid: "shaderPackListing:useInvalid",
      errors: "shaderPackListing:useFailsHere",
      save: "shaderPack:saveFailed"
    };

    function Rc(cB) {
      const {
        userContext: Bc
      } = (0, ec.c)(), [Ic, rB] = (0, Vc.useState)(null), [uc, sc] = (0, Vc.useState)(!1), [Mc, Pc] = (0, Vc.useState)(!1), [qB, Oc] = (0, Vc.useState)(null), Tc = null === cB || void 0 === cB ? void 0 : cB.packId, fc = null === cB || void 0 === cB ? void 0 : cB.sourceHash;
      return (0, Vc.useEffect)((() => {
        if (sc(!1), Oc(null), void 0 === Tc) return;
        let cB = !1;
        return Promise.all([(0, Sc.hasUsableWebGpuAdapter)(), (0, Jc.e)()]).then((Bc => {
          let [nc, Vc] = Bc;
          var Ic;
          cB || (rB(nc), sc((null === Vc || void 0 === Vc || null === (Ic = Vc.listing) || void 0 === Ic ? void 0 : Ic.packId) === Tc && Vc.listing.sourceHash === fc))
        })).catch((Bc => {
          console.error("Failed to check whether this shader pack can be used", Bc), cB || rB(!1)
        })), () => {
          cB = !0
        }
      }), [Tc, fc]), {
        webGpuUsable: Ic,
        inUse: uc,
        busy: Mc,
        errorKey: qB,
        use: () => {
          null !== cB && async function(cB) {
            Pc(!0), Oc(null);
            try {
              const {
                installListedShaderPack: Vc
              } = await Promise.all([nc.e(123), nc.e(120), nc.e(115)]).then((() => nc(38502))), Ic = await Vc({
                packId: cB.packId,
                sourceHash: cB.sourceHash,
                name: cB.name,
                ownerName: cB.ownerName,
                description: cB.description
              });
              if ("failed" === Ic.kind) return void Oc(jB[Ic.reason]);
              sc(!0), tB.e.recordShaderPackDownload(Bc, cB.packId).catch((cB => {
                console.error("Failed to count a shader pack's download", cB)
              })), (0, Hc.i)()
            } catch (Vc) {
              console.error("Failed to use the shader pack", Vc), Oc("shaderPack:unexpectedError")
            } finally {
              Pc(!1)
            }
          }(cB)
        }
      }
    }

    function iB(cB) {
      let {
        packUse: Bc
      } = cB;
      const {
        t: nc
      } = (0, yB.x)(), {
        webGpuUsable: Vc,
        inUse: Ic,
        busy: rB,
        errorKey: uc,
        use: sc
      } = Bc;
      return (0, Lc.jsxs)("div", {
        className: "ShaderPackUse",
        children: [(0, Lc.jsxs)(qB.n, {
          disabled: !0 !== Vc || Ic,
          loading: rB,
          onClick: sc,
          children: [(0, Lc.jsx)(aB.e, {
            name: Ic ? "check" : "download"
          }), " ", nc(Ic ? "shaderPackListing:inUse" : "shaderPackListing:use")]
        }), !1 === Vc && (0, Lc.jsx)("div", {
          className: "ShaderPackUseNote",
          children: nc((0, Fc.h)() ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), uc && (0, Lc.jsx)("div", {
          className: "ShaderPackUseNote Error",
          children: nc(uc)
        })]
      })
    }

    function Kc() {
      var cB;
      const {
        t: Bc
      } = (0, yB.x)(), nc = (0, Pc.useNavigatePreserveSearch)(), {
        packId: rB
      } = (0, Ic.z)(), {
        userContext: uc,
        isUserContextUpdating: sc
      } = (0, ec.c)(), [Oc, Tc] = (0, Vc.useState)(null), [fc, Sc] = (0, Vc.useState)(null), [zB, pc] = (0, Vc.useState)(0), hc = (0, Vc.useRef)(0);

      function aB() {
        var cB;
        null !== (cB = (0, Pc.getPreviousLocation)()) && void 0 !== cB && cB.startsWith(Yc.Z) ? nc(-1) : nc(Yc.Z)
      }(0, mB.e)(aB), (0, Dc.d)(), (0, Vc.useEffect)((() => {
        if (sc || void 0 === rB) return;
        const cB = ++hc.current;
        Sc(null), tB.e.getShaderPack(uc, rB).then((Bc => {
          hc.current === cB && Tc(Bc)
        })).catch((Bc => {
          hc.current === cB && (console.error("Failed to get the shader pack", Bc), Tc(null), Sc({
            error: Bc
          }))
        }))
      }), [rB, uc, sc, zB]);
      const lc = () => {
          pc((cB => cB + 1))
        },
        gB = (null === Oc || void 0 === Oc ? void 0 : Oc.packId) === rB ? Oc : null,
        bB = (0, Dc.n)(),
        Zc = Rc(null !== (cB = null === gB || void 0 === gB ? void 0 : gB.live) && void 0 !== cB ? cB : null),
        Qc = null !== gB && void 0 !== gB && gB.live ? (0, Lc.jsx)(xB, {
          item: gB.live,
          favourites: bB,
          packUse: Zc
        }) : null;
      return (0, Lc.jsxs)("article", {
        className: "ShaderPackInformation AnimFadeIn",
        children: [(0, Lc.jsx)(qB.c, {
          onClick: aB,
          children: Bc("shaderPackListing:backToPacks")
        }), null === gB && null === fc && (0, Lc.jsx)("div", {
          className: "ShaderPackInformationMessage",
          children: (0, Lc.jsx)(Mc.e, {})
        }), null !== fc && (0, Lc.jsxs)("div", {
          className: "ShaderPackInformationMessage",
          children: [(0, Yc.z)(fc.error, Bc, "shaderPackListing:loadPackFailed"), (0, Lc.jsx)(qB.d, {
            onClick: lc,
            children: Bc("general:tryAgain")
          })]
        }), null !== gB && null === fc && (0, Lc.jsxs)("div", {
          className: "ShaderPackInformationBody",
          children: [(0, Lc.jsxs)("header", {
            className: "ShaderPackInformationHeader",
            children: [(0, Lc.jsx)("h1", {
              className: "FullyFancyText",
              children: gB.name
            }), Qc]
          }), gB.live && (0, Lc.jsx)(oc, {
            item: gB.live
          }), gB.live && (0, Lc.jsx)(dc, {
            item: gB.live,
            ownerPreview: gB.ownerPreview,
            bloxdhubSlug: gB.bloxdhubSlug,
            actions: Qc
          }), gB.owner && (0, Lc.jsx)(Uc, {
            details: gB,
            owner: gB.owner,
            onChanged: lc
          })]
        })]
      })
    }

    function xB(cB) {
      let {
        item: Bc,
        favourites: nc,
        packUse: Vc
      } = cB;
      const Ic = nc.isFavourite(Bc.packId);
      return (0, Lc.jsxs)("div", {
        className: "ShaderPackInformationActions",
        children: [Sc.featureFlags.settings.canUseShaderPacks && (0, Lc.jsx)(iB, {
          packUse: Vc
        }), (0, Lc.jsx)(qB.w, {
          className: "ShaderPackInformationLike",
          onClick: () => {
            nc.toggle(Bc.packId)
          },
          isLiked: !0 === Ic,
          isLoading: null === Ic
        })]
      })
    }

    function dc(cB) {
      let {
        item: Bc,
        ownerPreview: nc,
        bloxdhubSlug: Vc,
        actions: Ic
      } = cB;
      const {
        t: sc
      } = (0, yB.x)(), Mc = (0, fc.q)(), qB = null === Vc ? null : (0, rB.d)(Vc);
      return (0, Lc.jsxs)("div", {
        className: "ShaderPackFacts",
        children: [Bc.description && (0, Lc.jsx)("p", {
          className: "ShaderPackDescription",
          children: Bc.description
        }), (0, Lc.jsxs)("div", {
          className: "ShaderPackFeatureList",
          children: [(null !== nc || null !== qB) && (0, Lc.jsx)("div", {
            className: "ShaderPackAuthor",
            children: null !== nc ? (0, Lc.jsxs)(Lc.Fragment, {
              children: [(0, Lc.jsx)(Tc.h, {
                playerSocialPreview: nc,
                showLocation: !1,
                linkToProfile: !0
              }), null !== qB && (0, Lc.jsx)("a", {
                className: "ShaderPackBloxdhubLogo",
                href: qB,
                target: "_blank",
                rel: "noopener noreferrer",
                children: (0, Lc.jsx)("img", {
                  src: zB,
                  alt: rB.c
                })
              })]
            }) : (0, Lc.jsxs)("a", {
              className: "ShaderPackBloxdhubName",
              href: qB,
              target: "_blank",
              rel: "noopener noreferrer",
              children: [rB.c, (0, Lc.jsx)("img", {
                src: zB,
                alt: ""
              })]
            })
          }), Yc.D.filter((cB => Bc.features.includes(cB))).map((cB => (0, Lc.jsx)(Pc.LinkPreserveSearch, {
            className: "ShaderPackFeature",
            to: (0, Yc.N)(cB),
            children: sc(Yc.O[cB])
          }, cB)))]
        }), Ic, (0, Lc.jsxs)("dl", {
          className: "ShaderPackFactList",
          children: [(0, Lc.jsxs)("div", {
            children: [(0, Lc.jsx)("dt", {
              children: sc("shaderPackListing:downloads")
            }), (0, Lc.jsx)("dd", {
              children: (0, uc.M)(Bc.downloads)
            })]
          }), (0, Lc.jsx)(Ac, {
            label: sc("shaderPackListing:updated"),
            time: Bc.listedUpdatedAt,
            now: Mc
          }), (0, Lc.jsx)(Ac, {
            label: sc("shaderPackListing:created"),
            time: Bc.publishedAt,
            now: Mc
          }), null !== Bc.gpuCost && (0, Lc.jsxs)("div", {
            children: [(0, Lc.jsx)("dt", {
              children: sc("shaderPackListing:lag")
            }), (0, Lc.jsx)("dd", {
              children: sc("shaderPackListing:lagPercent", {
                percent: String((0, Yc.V)(Bc.gpuCost))
              })
            })]
          }), (0, Lc.jsxs)("div", {
            children: [(0, Lc.jsx)("dt", {
              children: sc("shaderPackListing:size")
            }), (0, Lc.jsx)("dd", {
              children: sc("shaderPackListing:sizeValue", {
                kilobytes: String((0, Yc.R)(Bc.sourceBytes))
              })
            })]
          }), (0, Lc.jsxs)("div", {
            children: [(0, Lc.jsx)("dt", {
              children: sc("shaderPackListing:files")
            }), (0, Lc.jsx)("dd", {
              children: Bc.fileCount
            })]
          })]
        })]
      })
    }

    function Ac(cB) {
      let {
        label: Bc,
        time: nc,
        now: Vc
      } = cB;
      const {
        t: Ic,
        selectedLanguage: rB
      } = (0, yB.x)(), uc = new Date(nc);
      let Mc = uc.toLocaleDateString();
      if (Vc - nc <= 30 * sc.e) {
        const cB = (0, yB.h)(rB.code, "shaderPackListing:timeAgo");
        Mc = Ic("shaderPackListing:timeAgo", {
          time: (0, sc.X)(cB, nc, Vc)
        })
      }
      return (0, Lc.jsx)(Oc.d, {
        tooltipInner: uc.toLocaleString(),
        children: (0, Lc.jsxs)("div", {
          children: [(0, Lc.jsx)("dt", {
            children: Bc
          }), (0, Lc.jsx)("dd", {
            children: Mc
          })]
        })
      })
    }
  },
  4066: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => uc
    });
    var Vc = nc(912),
      Ic = nc.n(Vc),
      rB = nc(957);

    function uc(cB) {
      let {
        options: Bc,
        value: nc,
        onChange: Vc,
        ariaLabel: uc
      } = cB;
      return (0, rB.jsx)("div", {
        className: "SegmentedToggle",
        role: "group",
        "aria-label": uc,
        children: Bc.map((cB => {
          const Bc = cB.value === nc;
          return (0, rB.jsx)("button", {
            type: "button",
            "aria-pressed": Bc,
            className: Ic()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: Bc
            }),
            onClick: () => {
              Bc || Vc(cB.value)
            },
            children: cB.label
          }, cB.value)
        }))
      })
    }
  },
  4073: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => rB,
      g: () => uc
    });
    var Vc = nc(73);
    const Ic = new WeakMap,
      rB = cB => {
        var Bc;
        const nc = cB.closest("[data-pad-slider]");
        return nc && null !== (Bc = Ic.get(nc)) && void 0 !== Bc ? Bc : null
      },
      uc = (cB, Bc) => {
        const nc = (0, Vc.useRef)(Bc);
        nc.current = Bc, (0, Vc.useEffect)((() => {
          if (cB.current) return ((cB, Bc) => (Ic.set(cB, Bc), () => {
            Ic.get(cB) === Bc && Ic.delete(cB)
          }))(cB.current, {
            adjust: cB => {
              nc.current.adjust(cB)
            },
            setFraction: cB => {
              nc.current.setFraction(cB)
            },
            endDrag: () => {
              nc.current.endDrag()
            }
          })
        }), [cB])
      }
  },
  5626: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Ic,
      e: () => rB
    });
    var Vc = nc(51);
    const Ic = "shaderPack";
    async function rB() {
      var cB;
      let Bc = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (cB = await Vc.d.getItem(Ic, Bc)) && void 0 !== cB ? cB : null
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);