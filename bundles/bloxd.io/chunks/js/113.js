export const id = 113;
export const ids = [113];
export const modules = {
  5113: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => yp,
      f: () => Hp,
      i: () => Up,
      l: () => tp
    });
    var Op = cp(62),
      op = cp(5122),
      Ip = cp(4462),
      Sp = cp(1387),
      xp = cp(5146),
      Lp = cp(1049),
      Yp = cp.n(Lp),
      Dp = cp(1372),
      Ap = cp(1765),
      Pp = cp(5149),
      Wp = cp(1112);

    function yp(pp) {
      let {
        label: ip,
        onClick: cp,
        checked: Op,
        circleInfoText: op,
        className: xp,
        disabled: Lp,
        note: Dp
      } = pp;
      return (0, Wp.jsxs)("div", {
        "aria-disabled": Lp || void 0,
        "data-pad-focusable": !0,
        className: Yp()("SettingBox CheckboxContainer", {
          [xp]: xp,
          SettingBoxDisabled: Lp
        }),
        onClick: () => {
          Lp || cp(!Op)
        },
        children: [(0, Wp.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, Wp.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, Wp.jsx)(Ip.b, {
              className: "SettingsCheckbox",
              checked: Op,
              disabled: Lp,
              onChange: () => {}
            })
          }), (0, Wp.jsxs)("div", {
            className: "CheckboxText",
            children: [ip, op && (0, Wp.jsx)("span", {
              onClick: pp => pp.stopPropagation(),
              children: (0, Wp.jsx)(Sp.d, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: op
              })
            })]
          })]
        }), Dp && (0, Wp.jsx)("div", {
          className: "SettingNote",
          children: Dp
        })]
      })
    }

    function Up(pp) {
      let {
        name: ip,
        onChange: cp,
        min: op,
        max: Ip,
        step: xp,
        initValue: Lp,
        circleInfoText: Dp,
        format: Ap,
        className: Pp,
        padStep: yp,
        disabled: Up = !1,
        selectableMax: wp,
        cappedNote: tp,
        onChangeComplete: Hp
      } = pp;
      const [dp, ep] = (0, Op.useState)(Lp), jp = (0, Op.useRef)(Lp);
      (0, Op.useEffect)((() => {
        jp.current = Lp, ep(Lp)
      }), [Lp]);
      const kp = void 0 !== wp && wp < Ip,
        mp = kp ? {
          "--slider-selectable": (wp - op) / (Ip - op)
        } : void 0;
      return (0, Wp.jsxs)("div", {
        className: Yp()("SettingBox SettingsSliderDiv", {
          [Pp]: Pp,
          SettingBoxDisabled: Up,
          SliderCapped: kp
        }),
        style: mp,
        children: [(0, Wp.jsxs)("div", {
          className: "SliderText",
          children: [`${ip}: ${Ap?Ap(dp):dp}`, Dp && (0, Wp.jsx)(Sp.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: Dp
          })]
        }), (0, Wp.jsx)("div", {
          className: "SliderDiv",
          children: (0, Wp.jsx)(vp, {
            value: dp,
            min: op,
            max: Ip,
            step: xp,
            onChange: pp => {
              if (kp && pp >= wp && dp === wp) return;
              const ip = kp ? Math.min(pp, wp) : pp;
              jp.current = ip, ep(ip), cp(ip)
            },
            onChangeComplete: Hp && (() => {
              Hp(jp.current)
            }),
            format: Ap,
            padStep: yp,
            disabled: Up
          })
        }), kp && tp && (0, Wp.jsx)("div", {
          className: "SettingNote",
          children: tp
        })]
      })
    }
    const wp = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function vp(pp) {
      var ip;
      let {
        value: cp,
        min: Ip,
        max: Sp,
        step: xp,
        onChange: Lp,
        orientation: Yp,
        reverse: Dp,
        setIsChanging: Ap,
        tooltip: yp,
        labels: Up,
        handleLabel: vp,
        format: tp,
        onChangeStart: Hp,
        onChangeComplete: dp,
        padStep: ep,
        disabled: jp = !1
      } = pp;
      const kp = (0, Op.useRef)(null),
        mp = (0, Op.useRef)(null);
      (0, Op.useLayoutEffect)((() => {
        var pp, ip, cp;
        const Op = null !== (pp = null === (ip = kp.current) || void 0 === ip ? void 0 : ip.querySelector(".rangeslider")) && void 0 !== pp ? pp : null;
        null === Op || void 0 === Op || Op.setAttribute("data-pad-slider", ""), null === Op || void 0 === Op || Op.setAttribute("data-pad-focusable", ""), null === Op || void 0 === Op || null === (cp = Op.querySelector(".rangeslider__handle")) || void 0 === cp || cp.setAttribute("data-pad-slider-handle", ""), mp.current = Op
      }), []), (0, Op.useLayoutEffect)((() => {
        var pp, ip;
        jp ? null === (pp = mp.current) || void 0 === pp || pp.setAttribute("aria-disabled", "true") : null === (ip = mp.current) || void 0 === ip || ip.removeAttribute("aria-disabled")
      }), [jp]);
      const Rp = (null !== (ip = String(xp).split(".")[1]) && void 0 !== ip ? ip : "").length,
        qp = pp => {
          const ip = Number((Math.round((pp - Ip) / xp) * xp + Ip).toFixed(Rp));
          return Math.min(Sp, Math.max(Ip, ip))
        },
        Mp = (0, Op.useRef)(dp);
      Mp.current = dp, (0, Op.useEffect)((() => {
        const pp = kp.current;
        if (!pp) return;
        const ip = pp => {
          var ip;
          wp.has(pp.key) && (null === (ip = Mp.current) || void 0 === ip || ip.call(Mp))
        };
        return pp.addEventListener("keyup", ip), () => {
          pp.removeEventListener("keyup", ip)
        }
      }), []);
      const Cp = (0, Op.useRef)(!1);
      return (0, Pp.h)(mp, {
        adjust: pp => {
          if (jp) return;
          const ip = null !== ep && void 0 !== ep ? ep : Math.max(xp, Math.round((Sp - Ip) / 20 / xp) * xp),
            Op = qp(cp + pp * ip * (Dp ? -1 : 1));
          Op !== cp && (null === Hp || void 0 === Hp || Hp(), Lp(Op), null === dp || void 0 === dp || dp())
        },
        setFraction: pp => {
          if (jp) return;
          const ip = qp(Ip + (Dp ? 1 - pp : pp) * (Sp - Ip));
          ip !== cp && (Cp.current || (Cp.current = !0, null === Hp || void 0 === Hp || Hp()), Lp(ip))
        },
        endDrag: () => {
          Cp.current && (Cp.current = !1, null === dp || void 0 === dp || dp())
        }
      }), (0, Wp.jsx)("div", {
        ref: kp,
        style: {
          display: "contents"
        },
        children: (0, Wp.jsx)(op.b, {
          value: cp,
          min: Ip,
          max: Sp,
          step: xp,
          onChange: Lp,
          orientation: Yp,
          reverse: Dp,
          tooltip: yp,
          labels: Up,
          handleLabel: vp,
          format: tp,
          onChangeStart: () => {
            null === Hp || void 0 === Hp || Hp(), null === Ap || void 0 === Ap || Ap(!0)
          },
          onChangeComplete: () => {
            null === Ap || void 0 === Ap || Ap(!1), null === dp || void 0 === dp || dp()
          }
        })
      })
    }
    async function tp() {
      const pp = Dp.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await pp.getResult() && (0, Ap.reloadBloxd)()
    }

    function Hp(pp) {
      let {
        label: ip,
        options: cp,
        value: Op,
        onChange: op,
        circleInfoText: Ip
      } = pp;
      return (0, Wp.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, Wp.jsxs)("div", {
          className: "SliderText",
          children: [ip, Ip && (0, Wp.jsx)(Sp.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: Ip
          })]
        }), (0, Wp.jsx)(xp.b, {
          ariaLabel: ip,
          options: cp,
          value: Op,
          onChange: op
        })]
      })
    }
  },
  6806: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      default: () => Kp
    });
    var Op = cp(62),
      op = cp(1543),
      Ip = cp(6704),
      Sp = cp(1234),
      xp = cp(337),
      Lp = cp(1569),
      Yp = cp(1361),
      Dp = cp(1538),
      Ap = cp(1480),
      Pp = cp(1387),
      Wp = cp(1626),
      yp = cp(2671),
      Up = cp(2814),
      wp = cp(4648),
      vp = cp(1141),
      tp = cp(1520),
      Hp = cp(104),
      dp = cp(1201);
    const ep = cp.p + "static/media/bloxdhubLogo.6a6c367af2ad6e6f1eb3.webp";
    var jp = cp(1049),
      kp = cp.n(jp),
      mp = cp(1060),
      Rp = cp(1372),
      qp = cp(6698),
      Mp = cp(1112);
    const Cp = (0, Op.lazy)((() => Promise.all([cp.e(109), cp.e(78), cp.e(136), cp.e(135), cp.e(114), cp.e(402)]).then((() => cp(6743))).then((pp => ({
      default: pp.ShaderPackPublishForm
    })))));

    function Ep(pp) {
      let {
        details: ip,
        owner: cp,
        onChanged: op
      } = pp;
      const {
        t: Sp
      } = (0, dp.H)(), xp = (0, Dp.useNavigatePreserveSearch)(), {
        userContext: Lp
      } = (0, vp.b)(), [Pp, Wp] = (0, Op.useState)(!1), [yp, Up] = (0, Op.useState)(null), [wp, Hp] = (0, Op.useState)(!1), {
        packId: ep,
        name: jp,
        description: Ep,
        live: Xp
      } = ip;
      async function lp(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : op;
        Wp(!0), Up(null);
        try {
          await pp(), ip()
        } catch (cp) {
          console.error("Failed to change a shader pack", cp), Up((0, qp.s)(cp, Sp, "shaderPackListing:ownerActionFailed"))
        } finally {
          Wp(!1)
        }
      }
      const Qp = (0, qp.n)(Lp);
      return (0, Mp.jsxs)("section", {
        className: "ShaderPackOwnerPanel",
        children: [(0, Mp.jsx)("h2", {
          className: "ShaderPackSectionTitle",
          children: Sp("general:manage")
        }), (0, qp.S)(cp, !(null === Xp || void 0 === Xp || !Xp.renderId), Date.now(), Sp).map((pp => (0, Mp.jsxs)("div", {
          className: kp()("ShaderPackOwnerNotice", {
            Warning: "warning" === pp.tone
          }),
          children: [(0, Mp.jsx)(mp.d, {
            name: "warning" === pp.tone ? "triangle-exclamation" : "circle-info"
          }), (0, Mp.jsxs)("div", {
            children: [pp.text, pp.detail && (0, Mp.jsx)("pre", {
              className: "ShaderPackOwnerNoticeDetail",
              children: pp.detail
            })]
          })]
        }, pp.text))), ip.ban && (0, Mp.jsxs)("div", {
          className: "ShaderPackOwnerNotice Warning",
          children: [(0, Mp.jsx)(mp.d, {
            name: "ban"
          }), (0, Mp.jsxs)("div", {
            children: ["Banned by ", ip.ban.byName, " on ", new Date(ip.ban.at).toLocaleString()]
          })]
        }), yp && (0, Mp.jsx)("div", {
          className: "ShaderPackOwnerError",
          children: yp
        }), (0, Mp.jsxs)("div", {
          className: "ShaderPackOwnerActions",
          children: [(0, Mp.jsxs)(Ap.S, {
            disabled: Pp,
            onClick: () => {
              !async function() {
                const pp = await Rp.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:renameTitle",
                  initialValue: jp,
                  maxLength: Ip.D,
                  submitText: "general:save",
                  validate: pp => pp.trim().length < Ip.G ? Sp("shaderPackListing:nameTooShort", {
                    min: String(Ip.G)
                  }) : null
                }).getResult();
                "notificationTornDown" !== pp && "submit" === (null === pp || void 0 === pp ? void 0 : pp.type) && pp.value.trim() !== jp && await lp((() => tp.b.updateShaderPack(Lp, {
                  packId: ep,
                  name: pp.value.trim()
                })))
              }()
            },
            children: [(0, Mp.jsx)(mp.d, {
              name: "pen"
            }), " ", Sp("shaderPackListing:rename")]
          }), (0, Mp.jsxs)(Ap.S, {
            disabled: Pp,
            onClick: () => {
              !async function() {
                const pp = await Rp.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:editDescription",
                  initialValue: Ep,
                  maxLength: Ip.t,
                  multiline: !0,
                  allowEmptySubmit: !0,
                  submitText: "general:save"
                }).getResult();
                "notificationTornDown" !== pp && "submit" === (null === pp || void 0 === pp ? void 0 : pp.type) && pp.value.trim() !== Ep && await lp((() => tp.b.updateShaderPack(Lp, {
                  packId: ep,
                  description: pp.value.trim()
                })))
              }()
            },
            children: [(0, Mp.jsx)(mp.d, {
              name: "file-lines"
            }), " ", Sp("shaderPackListing:editDescription")]
          }), (0, Mp.jsxs)(Ap.S, {
            disabled: Pp || cp.isBanned && !cp.listed,
            onClick: () => {
              lp((() => tp.b.updateShaderPack(Lp, {
                packId: ep,
                listed: !cp.listed
              })))
            },
            children: [(0, Mp.jsx)(mp.d, {
              name: cp.listed ? "eye-slash" : "eye"
            }), " ", Sp(cp.listed ? "shaderPackListing:unlist" : "shaderPackListing:relist")]
          }), !cp.isBanned && (0, Mp.jsxs)(Ap.f, {
            disabled: Pp,
            onClick: () => {
              Hp(!wp)
            },
            children: [(0, Mp.jsx)(mp.d, {
              name: "upload"
            }), " ", Sp("shaderPackListing:uploadVersion")]
          }), (0, Mp.jsxs)(Ap.N, {
            disabled: Pp || cp.isBanned,
            onClick: () => {
              !async function() {
                !0 === await Rp.NotificationProvider.showPromptPopup({
                  title: "shaderPackListing:deleteTitle",
                  subtitle: "shaderPackListing:deleteSubtitle",
                  confirmText: "general:delete",
                  cancelText: "general:cancel",
                  destructive: !0
                }).getResult() && await lp((() => tp.b.deleteShaderPack(Lp, ep)), (() => {
                  xp(`${qp.R}?section=mine`, {
                    replace: !0
                  })
                }))
              }()
            },
            children: [(0, Mp.jsx)(mp.d, {
              name: "trash-can"
            }), " ", Sp("general:delete")]
          }), Qp && (0, Mp.jsxs)(Ap.N, {
            disabled: Pp,
            onClick: () => {
              lp((() => tp.b.setShaderPackBanned(Lp, ep, !cp.isBanned)))
            },
            children: [(0, Mp.jsx)(mp.d, {
              name: cp.isBanned ? "circle-check" : "ban"
            }), " ", cp.isBanned ? "Unban" : "Ban"]
          })]
        }), wp && (0, Mp.jsx)(Op.Suspense, {
          fallback: (0, Mp.jsx)(Yp.c, {}),
          children: (0, Mp.jsx)(Cp, {
            existing: {
              packId: ep,
              name: jp,
              description: Ep
            },
            onPublished: () => {
              Hp(!1), op()
            }
          })
        })]
      })
    }
    var Xp = cp(82),
      lp = cp(1927),
      Qp = cp(1295),
      Jp = cp(5149),
      Bp = cp(1211),
      Np = cp(6716),
      Tp = cp(6712),
      fp = cp(6733);

    function bp(pp) {
      let {
        item: ip
      } = pp;
      const {
        t: cp
      } = (0, dp.H)(), [op] = (0, Np.h)(), [Sp, xp] = (0, Op.useState)(op), [Lp, Yp] = (0, Op.useState)(!1), [Dp, Ap] = (0, Op.useState)(!1), {
        s3Url: Pp
      } = Bp.clientSideServerUrls, {
        width: Wp,
        height: yp
      } = Ip.u.large, Up = (0, Ip.x)(Pp, ip, Sp, "large"), {
        renderVersion: wp
      } = ip;
      return (0, Mp.jsxs)("div", {
        className: "ShaderPackPreviews",
        children: [(0, Mp.jsx)(fp.e, {
          selected: Sp,
          onSelect: pp => {
            xp(pp), Yp(!1)
          },
          imageUrl: pp => (0, Ip.x)(Pp, ip, pp, "thumb")
        }), (0, Mp.jsxs)("div", {
          className: "ShaderPackPreviewStage",
          children: [!Lp && (0, Mp.jsxs)("button", {
            type: "button",
            className: "ShaderPackPreviewMain",
            title: null === wp ? void 0 : cp("shaderPackListing:fullSize"),
            disabled: null === wp,
            onClick: () => {
              Ap(!0)
            },
            children: [(0, Mp.jsx)("img", {
              src: Up,
              width: Wp,
              height: yp,
              alt: cp(qp.ab[Sp]),
              draggable: !1
            }), (0, Mp.jsx)(Tp.d, {
              item: ip
            })]
          }), !Lp && null !== wp && (0, Mp.jsxs)(Fp, {
            side: "Right",
            onClick: () => {
              Yp(!0)
            },
            children: [(0, Mp.jsx)(mp.d, {
              name: "arrows-left-right"
            }), " ", cp("shaderPackListing:compare")]
          }), Lp && null !== wp && (0, Mp.jsx)(np, {
            item: ip,
            packUrl: Up,
            baselineUrl: (0, Ip.r)(Pp, wp, Sp, "large")
          }), Lp && (0, Mp.jsx)(Fp, {
            side: "Left",
            onClick: () => {
              Yp(!1)
            },
            children: cp("shaderPackListing:withPack")
          }), Lp && (0, Mp.jsx)(Fp, {
            side: "Right",
            onClick: () => {
              Yp(!1)
            },
            children: cp("shaderPackListing:withoutPack")
          })]
        }), Dp && (0, Mp.jsx)(hp, {
          fullUrl: (0, Ip.x)(Pp, ip, Sp, "full"),
          largeUrl: Up,
          alt: cp(qp.ab[Sp]),
          onClose: () => {
            Ap(!1)
          }
        })]
      })
    }

    function hp(pp) {
      let {
        fullUrl: ip,
        largeUrl: cp,
        alt: op,
        onClose: Ip
      } = pp;
      const Sp = (0, Op.useRef)(null);
      return (0, Qp.x)("popup", Sp, Ip), (0, Op.useEffect)((() => {
        function pp(pp) {
          "Escape" === pp.key && (pp.stopPropagation(), Ip())
        }
        return window.addEventListener("keydown", pp, !0), () => {
          window.removeEventListener("keydown", pp, !0)
        }
      }), [Ip]), (0, Xp.createPortal)((0, Mp.jsxs)("div", {
        ref: Sp,
        className: "ShaderPackFullSize",
        onClick: Ip,
        children: [(0, Mp.jsx)("img", {
          className: "ShaderPackFullSizeImage",
          src: ip,
          alt: op,
          draggable: !1,
          style: {
            backgroundImage: `url(${cp})`
          }
        }), (0, Mp.jsx)(Ap.l, {
          className: "ShaderPackFullSizeClose",
          onClick: Ip
        })]
      }), document.body)
    }
    const ap = 5;

    function np(pp) {
      let {
        item: ip,
        packUrl: cp,
        baselineUrl: op
      } = pp;
      const {
        t: Sp
      } = (0, dp.H)(), [xp, Lp] = (0, Op.useState)(50), Yp = (0, Op.useRef)(!1), Dp = (0, Op.useRef)(null), {
        width: Ap,
        height: Pp
      } = Ip.u.large;

      function Wp(pp) {
        Lp((ip => (0, lp.h)(ip + pp, 0, 100)))
      }

      function yp(pp) {
        const ip = pp.currentTarget.getBoundingClientRect();
        Lp((0, lp.h)((pp.clientX - ip.left) / ip.width * 100, 0, 100))
      }
      return (0, Jp.h)(Dp, {
        adjust: pp => {
          Wp(pp * ap)
        },
        setFraction: pp => {
          Lp(100 * pp)
        },
        endDrag: () => {}
      }), (0, Mp.jsxs)("div", {
        ref: Dp,
        className: "ShaderPackCompare",
        "data-pad-slider": "",
        "data-pad-focusable": "",
        role: "slider",
        tabIndex: 0,
        "aria-label": Sp("shaderPackListing:compare"),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(xp),
        style: {
          "--split": `${xp}%`
        },
        onKeyDown: function(pp) {
          const ip = "ArrowLeft" === pp.key ? -ap : "ArrowRight" === pp.key ? ap : 0;
          0 !== ip && (pp.preventDefault(), Wp(ip))
        },
        onPointerDown: pp => {
          Yp.current = !0, pp.currentTarget.setPointerCapture(pp.pointerId), yp(pp)
        },
        onPointerMove: pp => {
          Yp.current && yp(pp)
        },
        onPointerUp: () => {
          Yp.current = !1
        },
        onPointerCancel: () => {
          Yp.current = !1
        },
        children: [(0, Mp.jsx)("img", {
          className: "ShaderPackCompareBaseline",
          src: op,
          width: Ap,
          height: Pp,
          alt: "",
          draggable: !1,
          style: {
            backgroundImage: `url(${cp})`
          }
        }), (0, Mp.jsx)("div", {
          className: "ShaderPackCompareLine"
        }), (0, Mp.jsx)("img", {
          className: "ShaderPackComparePack",
          src: cp,
          width: Ap,
          height: Pp,
          alt: "",
          draggable: !1
        }), (0, Mp.jsx)(Tp.d, {
          item: ip,
          className: "ShaderPackCompareNotice"
        })]
      })
    }

    function Fp(pp) {
      let {
        side: ip,
        onClick: cp,
        children: Op
      } = pp;
      return (0, Mp.jsx)("button", {
        type: "button",
        className: `ShaderPackStageButton ${ip}`,
        onClick: cp,
        children: (0, Mp.jsx)("span", {
          className: "ShaderPackStageButtonFace SmallTextBold",
          children: Op
        })
      })
    }
    var gp = cp(5113),
      Gp = cp(314),
      rp = cp(6804);
    const Zp = {
      compiler: "shaderPack:compilerUnavailable",
      download: "shaderPackListing:useDownloadFailed",
      apiVersion: "shaderPackListing:useOtherApiVersion",
      invalid: "shaderPackListing:useInvalid",
      errors: "shaderPackListing:useFailsHere",
      save: "shaderPack:saveFailed"
    };

    function zp(pp) {
      const {
        userContext: ip
      } = (0, vp.b)(), [op, Ip] = (0, Op.useState)(null), [Sp, xp] = (0, Op.useState)(!1), [Lp, Yp] = (0, Op.useState)(!1), [Dp, Ap] = (0, Op.useState)(null), Pp = null === pp || void 0 === pp ? void 0 : pp.packId, Wp = null === pp || void 0 === pp ? void 0 : pp.sourceHash;
      return (0, Op.useEffect)((() => {
        if (xp(!1), Ap(null), void 0 === Pp) return;
        let pp = !1;
        return Promise.all([(0, Hp.hasUsableWebGpuAdapter)(), (0, rp.f)()]).then((ip => {
          let [cp, Op] = ip;
          var op;
          pp || (Ip(cp), xp((null === Op || void 0 === Op || null === (op = Op.listing) || void 0 === op ? void 0 : op.packId) === Pp && Op.listing.sourceHash === Wp))
        })).catch((ip => {
          console.error("Failed to check whether this shader pack can be used", ip), pp || Ip(!1)
        })), () => {
          pp = !0
        }
      }), [Pp, Wp]), {
        webGpuUsable: op,
        inUse: Sp,
        busy: Lp,
        errorKey: Dp,
        use: () => {
          null !== pp && async function(pp) {
            Yp(!0), Ap(null);
            try {
              const {
                installListedShaderPack: Op
              } = await Promise.all([cp.e(78), cp.e(136), cp.e(115)]).then((() => cp(40674))), op = await Op({
                packId: pp.packId,
                sourceHash: pp.sourceHash,
                name: pp.name,
                ownerName: pp.ownerName,
                description: pp.description
              });
              if ("failed" === op.kind) return void Ap(Zp[op.reason]);
              xp(!0), tp.b.recordShaderPackDownload(ip, pp.packId).catch((pp => {
                console.error("Failed to count a shader pack's download", pp)
              })), (0, gp.l)()
            } catch (Op) {
              console.error("Failed to use the shader pack", Op), Ap("shaderPack:unexpectedError")
            } finally {
              Yp(!1)
            }
          }(pp)
        }
      }
    }

    function sp(pp) {
      let {
        packUse: ip
      } = pp;
      const {
        t: cp
      } = (0, dp.H)(), {
        webGpuUsable: Op,
        inUse: op,
        busy: Ip,
        errorKey: Sp,
        use: xp
      } = ip;
      return (0, Mp.jsxs)("div", {
        className: "ShaderPackUse",
        children: [(0, Mp.jsxs)(Ap.o, {
          disabled: !0 !== Op || op,
          loading: Ip,
          onClick: xp,
          children: [(0, Mp.jsx)(mp.d, {
            name: op ? "check" : "download"
          }), " ", cp(op ? "shaderPackListing:inUse" : "shaderPackListing:use")]
        }), !1 === Op && (0, Mp.jsx)("div", {
          className: "ShaderPackUseNote",
          children: cp((0, Gp.f)() ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), Sp && (0, Mp.jsx)("div", {
          className: "ShaderPackUseNote Error",
          children: cp(Sp)
        })]
      })
    }

    function Kp() {
      var pp;
      const {
        t: ip
      } = (0, dp.H)(), cp = (0, Dp.useNavigatePreserveSearch)(), {
        packId: Ip
      } = (0, op.A)(), {
        userContext: Sp,
        isUserContextUpdating: xp
      } = (0, vp.b)(), [Pp, yp] = (0, Op.useState)(null), [Up, Hp] = (0, Op.useState)(null), [ep, jp] = (0, Op.useState)(0), kp = (0, Op.useRef)(0);

      function mp() {
        var pp;
        null !== (pp = (0, Dp.getPreviousLocation)()) && void 0 !== pp && pp.startsWith(qp.R) ? cp(-1) : cp(qp.R)
      }(0, wp.e)(mp), (0, Np.b)(), (0, Op.useEffect)((() => {
        if (xp || void 0 === Ip) return;
        const pp = ++kp.current;
        Hp(null), tp.b.getShaderPack(Sp, Ip).then((ip => {
          kp.current === pp && yp(ip)
        })).catch((ip => {
          kp.current === pp && (console.error("Failed to get the shader pack", ip), yp(null), Hp({
            error: ip
          }))
        }))
      }), [Ip, Sp, xp, ep]);
      const Rp = () => {
          jp((pp => pp + 1))
        },
        Cp = (null === Pp || void 0 === Pp ? void 0 : Pp.packId) === Ip ? Pp : null,
        Xp = (0, Np.i)(),
        lp = zp(null !== (pp = null === Cp || void 0 === Cp ? void 0 : Cp.live) && void 0 !== pp ? pp : null),
        Qp = null !== Cp && void 0 !== Cp && Cp.live ? (0, Mp.jsx)(Vp, {
          item: Cp.live,
          favourites: Xp,
          packUse: lp
        }) : null;
      return (0, Mp.jsxs)("article", {
        className: "ShaderPackInformation AnimFadeIn",
        children: [null !== Cp && (0, Mp.jsx)(Wp.c, {
          meta: (0, Lp.W)(Cp.name)
        }), (0, Mp.jsx)(Ap.d, {
          onClick: mp,
          children: ip("shaderPackListing:backToPacks")
        }), null === Cp && null === Up && (0, Mp.jsx)("div", {
          className: "ShaderPackInformationMessage",
          children: (0, Mp.jsx)(Yp.c, {})
        }), null !== Up && (0, Mp.jsxs)("div", {
          className: "ShaderPackInformationMessage",
          children: [(0, qp.s)(Up.error, ip, "shaderPackListing:loadPackFailed"), (0, Mp.jsx)(Ap.f, {
            onClick: Rp,
            children: ip("general:tryAgain")
          })]
        }), null !== Cp && null === Up && (0, Mp.jsxs)("div", {
          className: "ShaderPackInformationBody",
          children: [(0, Mp.jsxs)("header", {
            className: "ShaderPackInformationHeader",
            children: [(0, Mp.jsx)("h1", {
              className: "FullyFancyText",
              children: Cp.name
            }), Qp]
          }), Cp.live && (0, Mp.jsx)(bp, {
            item: Cp.live
          }), Cp.live && (0, Mp.jsx)(ii, {
            item: Cp.live,
            ownerPreview: Cp.ownerPreview,
            bloxdhubSlug: Cp.bloxdhubSlug,
            actions: Qp
          }), Cp.owner && (0, Mp.jsx)(Ep, {
            details: Cp,
            owner: Cp.owner,
            onChanged: Rp
          })]
        })]
      })
    }

    function Vp(pp) {
      let {
        item: ip,
        favourites: cp,
        packUse: Op
      } = pp;
      const op = cp.isFavourite(ip.packId);
      return (0, Mp.jsxs)("div", {
        className: "ShaderPackInformationActions",
        children: [Hp.featureFlags.settings.canUseShaderPacks && (0, Mp.jsx)(sp, {
          packUse: Op
        }), (0, Mp.jsx)(Ap.x, {
          className: "ShaderPackInformationLike",
          onClick: () => {
            cp.toggle(ip.packId)
          },
          isLiked: !0 === op,
          isLoading: null === op
        })]
      })
    }

    function ii(pp) {
      let {
        item: ip,
        ownerPreview: cp,
        bloxdhubSlug: Op,
        actions: op
      } = pp;
      const {
        t: xp
      } = (0, dp.H)(), Lp = (0, Up.o)(), Yp = null === Op ? null : (0, Ip.g)(Op);
      return (0, Mp.jsxs)("div", {
        className: "ShaderPackFacts",
        children: [ip.description && (0, Mp.jsx)("p", {
          className: "ShaderPackDescription",
          children: ip.description
        }), (0, Mp.jsxs)("div", {
          className: "ShaderPackFeatureList",
          children: [(null !== cp || null !== Yp) && (0, Mp.jsx)("div", {
            className: "ShaderPackAuthor",
            children: null !== cp ? (0, Mp.jsxs)(Mp.Fragment, {
              children: [(0, Mp.jsx)(yp.d, {
                playerSocialPreview: cp,
                showLocation: !1,
                linkToProfile: !0
              }), null !== Yp && (0, Mp.jsx)("a", {
                className: "ShaderPackBloxdhubLogo",
                href: Yp,
                target: "_blank",
                rel: "noopener noreferrer",
                children: (0, Mp.jsx)("img", {
                  src: ep,
                  alt: Ip.d
                })
              })]
            }) : (0, Mp.jsxs)("a", {
              className: "ShaderPackBloxdhubName",
              href: Yp,
              target: "_blank",
              rel: "noopener noreferrer",
              children: [Ip.d, (0, Mp.jsx)("img", {
                src: ep,
                alt: ""
              })]
            })
          }), qp.w.filter((pp => ip.features.includes(pp))).map((pp => (0, Mp.jsx)(Dp.LinkPreserveSearch, {
            className: "ShaderPackFeature",
            to: (0, qp.H)(pp),
            children: xp(qp.L[pp])
          }, pp)))]
        }), op, (0, Mp.jsxs)("dl", {
          className: "ShaderPackFactList",
          children: [(0, Mp.jsxs)("div", {
            children: [(0, Mp.jsx)("dt", {
              children: xp("shaderPackListing:downloads")
            }), (0, Mp.jsx)("dd", {
              children: (0, Sp.O)(ip.downloads)
            })]
          }), (0, Mp.jsx)(ci, {
            label: xp("shaderPackListing:updated"),
            time: ip.listedUpdatedAt,
            now: Lp
          }), (0, Mp.jsx)(ci, {
            label: xp("shaderPackListing:created"),
            time: ip.publishedAt,
            now: Lp
          }), null !== ip.gpuCost && (0, Mp.jsxs)("div", {
            children: [(0, Mp.jsx)("dt", {
              children: xp("shaderPackListing:lag")
            }), (0, Mp.jsx)("dd", {
              children: xp("shaderPackListing:lagPercent", {
                percent: String((0, qp.P)(ip.gpuCost))
              })
            })]
          }), (0, Mp.jsxs)("div", {
            children: [(0, Mp.jsx)("dt", {
              children: xp("shaderPackListing:size")
            }), (0, Mp.jsx)("dd", {
              children: xp("shaderPackListing:sizeValue", {
                kilobytes: String((0, qp.O)(ip.sourceBytes))
              })
            })]
          }), (0, Mp.jsxs)("div", {
            children: [(0, Mp.jsx)("dt", {
              children: xp("shaderPackListing:files")
            }), (0, Mp.jsx)("dd", {
              children: ip.fileCount
            })]
          })]
        })]
      })
    }

    function ci(pp) {
      let {
        label: ip,
        time: cp,
        now: Op
      } = pp;
      const {
        t: op,
        selectedLanguage: Ip
      } = (0, dp.H)(), Sp = new Date(cp);
      let Lp = Sp.toLocaleDateString();
      if (Op - cp <= 30 * xp.i) {
        const pp = (0, dp.p)(Ip.code, "shaderPackListing:timeAgo");
        Lp = op("shaderPackListing:timeAgo", {
          time: (0, xp.cb)(pp, cp, Op)
        })
      }
      return (0, Mp.jsx)(Pp.f, {
        tooltipInner: Sp.toLocaleString(),
        children: (0, Mp.jsxs)("div", {
          children: [(0, Mp.jsx)("dt", {
            children: ip
          }), (0, Mp.jsx)("dd", {
            children: Lp
          })]
        })
      })
    }
  },
  5146: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Sp
    });
    var Op = cp(1049),
      op = cp.n(Op),
      Ip = cp(1112);

    function Sp(pp) {
      let {
        options: ip,
        value: cp,
        onChange: Op,
        ariaLabel: Sp,
        className: xp,
        reselectable: Lp = !1,
        keepsFocus: Yp = !1,
        padTabs: Dp
      } = pp;
      const Ap = void 0 !== Dp;
      return (0, Ip.jsx)("div", {
        className: op()("SegmentedToggle", xp),
        role: "group",
        "aria-label": Sp,
        "data-pad-tabs": Dp,
        children: ip.map((pp => {
          const ip = pp.value === cp;
          return (0, Ip.jsx)("button", {
            type: "button",
            "aria-pressed": ip,
            "data-pad-tab": Ap || void 0,
            "data-pad-selected": Ap && ip ? "true" : void 0,
            "data-pad-default-focus": Ap && ip || void 0,
            "aria-label": pp.ariaLabel,
            title: pp.ariaLabel,
            className: op()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: ip
            }),
            onMouseDown: Yp ? pp => {
              pp.preventDefault()
            } : void 0,
            onClick: () => {
              ip && !Lp || Op(pp.value)
            },
            children: pp.label
          }, pp.value)
        }))
      })
    }
  },
  5149: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Ip,
      h: () => Sp
    });
    var Op = cp(62);
    const op = new WeakMap,
      Ip = pp => {
        var ip;
        const cp = pp.closest("[data-pad-slider]");
        return cp && null !== (ip = op.get(cp)) && void 0 !== ip ? ip : null
      },
      Sp = (pp, ip) => {
        const cp = (0, Op.useRef)(ip);
        cp.current = ip, (0, Op.useEffect)((() => {
          if (pp.current) return ((pp, ip) => (op.set(pp, ip), () => {
            op.get(pp) === ip && op.delete(pp)
          }))(pp.current, {
            adjust: pp => {
              cp.current.adjust(pp)
            },
            setFraction: pp => {
              cp.current.setFraction(pp)
            },
            endDrag: () => {
              cp.current.endDrag()
            }
          })
        }), [pp])
      }
  },
  6804: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => op,
      f: () => Ip
    });
    var Op = cp(44);
    const op = "shaderPack";
    async function Ip() {
      var pp;
      let ip = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (pp = await Op.g.getItem(op, ip)) && void 0 !== pp ? pp : null
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);