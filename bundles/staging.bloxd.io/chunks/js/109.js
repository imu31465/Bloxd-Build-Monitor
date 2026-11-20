export const id = 109;
export const ids = [109];
export const modules = {
  4703: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => mb,
      g: () => Nb,
      i: () => lb,
      m: () => Cb
    });
    var kb = sb(64),
      Wb = sb(4709),
      ab = sb(4129),
      Tb = sb(1341),
      Ub = sb(4728),
      Ib = sb(1033),
      Hb = sb.n(Ib),
      fb = sb(1332),
      Mb = sb(1704),
      Xb = sb(4730),
      nb = sb(1087);

    function mb(bb) {
      let {
        label: cb,
        onClick: sb,
        checked: kb,
        circleInfoText: Wb,
        className: Ub,
        disabled: Ib,
        note: fb
      } = bb;
      return (0, nb.jsxs)("div", {
        "aria-disabled": Ib || void 0,
        "data-pad-focusable": !0,
        className: Hb()("SettingBox CheckboxContainer", {
          [Ub]: Ub,
          SettingBoxDisabled: Ib
        }),
        onClick: () => {
          Ib || sb(!kb)
        },
        children: [(0, nb.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, nb.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, nb.jsx)(ab.e, {
              className: "SettingsCheckbox",
              checked: kb,
              disabled: Ib,
              onChange: () => {}
            })
          }), (0, nb.jsxs)("div", {
            className: "CheckboxText",
            children: [cb, Wb && (0, nb.jsx)("span", {
              onClick: bb => bb.stopPropagation(),
              children: (0, nb.jsx)(Tb.c, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: Wb
              })
            })]
          })]
        }), fb && (0, nb.jsx)("div", {
          className: "SettingNote",
          children: fb
        })]
      })
    }

    function lb(bb) {
      let {
        name: cb,
        onChange: sb,
        min: Wb,
        max: ab,
        step: Ub,
        initValue: Ib,
        circleInfoText: fb,
        format: Mb,
        className: Xb,
        padStep: mb,
        disabled: lb = !1,
        selectableMax: Qb,
        cappedNote: Cb,
        onChangeComplete: Nb
      } = bb;
      const [Vb, Lb] = (0, kb.useState)(Ib), ub = (0, kb.useRef)(Ib);
      (0, kb.useEffect)((() => {
        ub.current = Ib, Lb(Ib)
      }), [Ib]);
      const Yb = void 0 !== Qb && Qb < ab,
        hb = Yb ? {
          "--slider-selectable": (Qb - Wb) / (ab - Wb)
        } : void 0;
      return (0, nb.jsxs)("div", {
        className: Hb()("SettingBox SettingsSliderDiv", {
          [Xb]: Xb,
          SettingBoxDisabled: lb,
          SliderCapped: Yb
        }),
        style: hb,
        children: [(0, nb.jsxs)("div", {
          className: "SliderText",
          children: [`${cb}: ${Mb?Mb(Vb):Vb}`, fb && (0, nb.jsx)(Tb.c, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: fb
          })]
        }), (0, nb.jsx)("div", {
          className: "SliderDiv",
          children: (0, nb.jsx)(eb, {
            value: Vb,
            min: Wb,
            max: ab,
            step: Ub,
            onChange: bb => {
              if (Yb && bb >= Qb && Vb === Qb) return;
              const cb = Yb ? Math.min(bb, Qb) : bb;
              ub.current = cb, Lb(cb), sb(cb)
            },
            onChangeComplete: Nb && (() => {
              Nb(ub.current)
            }),
            format: Mb,
            padStep: mb,
            disabled: lb
          })
        }), Yb && Cb && (0, nb.jsx)("div", {
          className: "SettingNote",
          children: Cb
        })]
      })
    }
    const Qb = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function eb(bb) {
      var cb;
      let {
        value: sb,
        min: ab,
        max: Tb,
        step: Ub,
        onChange: Ib,
        orientation: Hb,
        reverse: fb,
        setIsChanging: Mb,
        tooltip: mb,
        labels: lb,
        handleLabel: eb,
        format: Cb,
        onChangeStart: Nb,
        onChangeComplete: Vb,
        padStep: Lb,
        disabled: ub = !1
      } = bb;
      const Yb = (0, kb.useRef)(null),
        hb = (0, kb.useRef)(null);
      (0, kb.useLayoutEffect)((() => {
        var bb, cb, sb;
        const kb = null !== (bb = null === (cb = Yb.current) || void 0 === cb ? void 0 : cb.querySelector(".rangeslider")) && void 0 !== bb ? bb : null;
        null === kb || void 0 === kb || kb.setAttribute("data-pad-slider", ""), null === kb || void 0 === kb || kb.setAttribute("data-pad-focusable", ""), null === kb || void 0 === kb || null === (sb = kb.querySelector(".rangeslider__handle")) || void 0 === sb || sb.setAttribute("data-pad-slider-handle", ""), hb.current = kb
      }), []), (0, kb.useLayoutEffect)((() => {
        var bb, cb;
        ub ? null === (bb = hb.current) || void 0 === bb || bb.setAttribute("aria-disabled", "true") : null === (cb = hb.current) || void 0 === cb || cb.removeAttribute("aria-disabled")
      }), [ub]);
      const Jb = (null !== (cb = String(Ub).split(".")[1]) && void 0 !== cb ? cb : "").length,
        gb = bb => {
          const cb = Number((Math.round((bb - ab) / Ub) * Ub + ab).toFixed(Jb));
          return Math.min(Tb, Math.max(ab, cb))
        },
        Bb = (0, kb.useRef)(Vb);
      Bb.current = Vb, (0, kb.useEffect)((() => {
        const bb = Yb.current;
        if (!bb) return;
        const cb = bb => {
          var cb;
          Qb.has(bb.key) && (null === (cb = Bb.current) || void 0 === cb || cb.call(Bb))
        };
        return bb.addEventListener("keyup", cb), () => {
          bb.removeEventListener("keyup", cb)
        }
      }), []);
      const tb = (0, kb.useRef)(!1);
      return (0, Xb.d)(hb, {
        adjust: bb => {
          if (ub) return;
          const cb = null !== Lb && void 0 !== Lb ? Lb : Math.max(Ub, Math.round((Tb - ab) / 20 / Ub) * Ub),
            kb = gb(sb + bb * cb * (fb ? -1 : 1));
          kb !== sb && (null === Nb || void 0 === Nb || Nb(), Ib(kb), null === Vb || void 0 === Vb || Vb())
        },
        setFraction: bb => {
          if (ub) return;
          const cb = gb(ab + (fb ? 1 - bb : bb) * (Tb - ab));
          cb !== sb && (tb.current || (tb.current = !0, null === Nb || void 0 === Nb || Nb()), Ib(cb))
        },
        endDrag: () => {
          tb.current && (tb.current = !1, null === Vb || void 0 === Vb || Vb())
        }
      }), (0, nb.jsx)("div", {
        ref: Yb,
        style: {
          display: "contents"
        },
        children: (0, nb.jsx)(Wb.e, {
          value: sb,
          min: ab,
          max: Tb,
          step: Ub,
          onChange: Ib,
          orientation: Hb,
          reverse: fb,
          tooltip: mb,
          labels: lb,
          handleLabel: eb,
          format: Cb,
          onChangeStart: () => {
            null === Nb || void 0 === Nb || Nb(), null === Mb || void 0 === Mb || Mb(!0)
          },
          onChangeComplete: () => {
            null === Mb || void 0 === Mb || Mb(!1), null === Vb || void 0 === Vb || Vb()
          }
        })
      })
    }
    async function Cb() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      const cb = fb.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: "",
        unlockPointerKey: bb
      });
      !0 === await cb.getResult() && (0, Mb.reloadBloxd)()
    }

    function Nb(bb) {
      let {
        label: cb,
        options: sb,
        value: kb,
        onChange: Wb,
        circleInfoText: ab
      } = bb;
      return (0, nb.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, nb.jsxs)("div", {
          className: "SliderText",
          children: [cb, ab && (0, nb.jsx)(Tb.c, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: ab
          })]
        }), (0, nb.jsx)(Ub.e, {
          ariaLabel: cb,
          options: sb,
          value: kb,
          onChange: Wb
        })]
      })
    }
  },
  6330: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      default: () => vb
    });
    var kb = sb(64),
      Wb = sb(1511),
      ab = sb(6209),
      Tb = sb(1235),
      Ub = sb(344),
      Ib = sb(1327),
      Hb = sb(1495),
      fb = sb(1431),
      Mb = sb(1341),
      Xb = sb(2441),
      nb = sb(2578),
      mb = sb(4293),
      lb = sb(1117),
      Qb = sb(1474),
      eb = sb(117),
      Cb = sb(1197);
    const Nb = sb.p + "static/media/bloxdhubLogo.6a6c367af2ad6e6f1eb3.webp";
    var Vb = sb(1033),
      Lb = sb.n(Vb),
      ub = sb(1039),
      Yb = sb(1332),
      hb = sb(6204),
      Jb = sb(1087);
    const gb = (0, kb.lazy)((() => Promise.all([sb.e(105), sb.e(74), sb.e(131), sb.e(125), sb.e(124)]).then((() => sb(6244))).then((bb => ({
      default: bb.ShaderPackPublishForm
    })))));

    function Bb(bb) {
      let {
        details: cb,
        owner: sb,
        onChanged: Wb
      } = bb;
      const {
        t: Tb
      } = (0, Cb.E)(), Ub = (0, Hb.useNavigatePreserveSearch)(), {
        userContext: Mb
      } = (0, lb.c)(), [Xb, nb] = (0, kb.useState)(!1), [mb, eb] = (0, kb.useState)(null), [Nb, Vb] = (0, kb.useState)(!1), {
        packId: Bb,
        name: tb,
        description: yb,
        live: Pb
      } = cb;
      async function Db(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Wb;
        nb(!0), eb(null);
        try {
          await bb(), cb()
        } catch (sb) {
          console.error("Failed to change a shader pack", sb), eb((0, hb.y)(sb, Tb, "shaderPackListing:ownerActionFailed"))
        } finally {
          nb(!1)
        }
      }
      const Eb = (0, hb.t)(Mb);
      return (0, Jb.jsxs)("section", {
        className: "ShaderPackOwnerPanel",
        children: [(0, Jb.jsx)("h2", {
          className: "ShaderPackSectionTitle",
          children: Tb("general:manage")
        }), (0, hb.X)(sb, !(null === Pb || void 0 === Pb || !Pb.renderId), Date.now(), Tb).map((bb => (0, Jb.jsxs)("div", {
          className: Lb()("ShaderPackOwnerNotice", {
            Warning: "warning" === bb.tone
          }),
          children: [(0, Jb.jsx)(ub.b, {
            name: "warning" === bb.tone ? "triangle-exclamation" : "circle-info"
          }), (0, Jb.jsxs)("div", {
            children: [bb.text, bb.detail && (0, Jb.jsx)("pre", {
              className: "ShaderPackOwnerNoticeDetail",
              children: bb.detail
            })]
          })]
        }, bb.text))), cb.ban && (0, Jb.jsxs)("div", {
          className: "ShaderPackOwnerNotice Warning",
          children: [(0, Jb.jsx)(ub.b, {
            name: "ban"
          }), (0, Jb.jsxs)("div", {
            children: ["Banned by ", cb.ban.byName, " on ", new Date(cb.ban.at).toLocaleString()]
          })]
        }), mb && (0, Jb.jsx)("div", {
          className: "ShaderPackOwnerError",
          children: mb
        }), (0, Jb.jsxs)("div", {
          className: "ShaderPackOwnerActions",
          children: [(0, Jb.jsxs)(fb.M, {
            disabled: Xb,
            onClick: () => {
              !async function() {
                const bb = await Yb.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:renameTitle",
                  initialValue: tb,
                  maxLength: ab.D,
                  submitText: "general:save",
                  validate: bb => bb.trim().length < ab.H ? Tb("shaderPackListing:nameTooShort", {
                    min: String(ab.H)
                  }) : null
                }).getResult();
                "notificationTornDown" !== bb && "submit" === (null === bb || void 0 === bb ? void 0 : bb.type) && bb.value.trim() !== tb && await Db((() => Qb.b.updateShaderPack(Mb, {
                  packId: Bb,
                  name: bb.value.trim()
                })))
              }()
            },
            children: [(0, Jb.jsx)(ub.b, {
              name: "pen"
            }), " ", Tb("shaderPackListing:rename")]
          }), (0, Jb.jsxs)(fb.M, {
            disabled: Xb,
            onClick: () => {
              !async function() {
                const bb = await Yb.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:editDescription",
                  initialValue: yb,
                  maxLength: ab.t,
                  multiline: !0,
                  allowEmptySubmit: !0,
                  submitText: "general:save"
                }).getResult();
                "notificationTornDown" !== bb && "submit" === (null === bb || void 0 === bb ? void 0 : bb.type) && bb.value.trim() !== yb && await Db((() => Qb.b.updateShaderPack(Mb, {
                  packId: Bb,
                  description: bb.value.trim()
                })))
              }()
            },
            children: [(0, Jb.jsx)(ub.b, {
              name: "file-lines"
            }), " ", Tb("shaderPackListing:editDescription")]
          }), (0, Jb.jsxs)(fb.M, {
            disabled: Xb || sb.isBanned && !sb.listed,
            onClick: () => {
              Db((() => Qb.b.updateShaderPack(Mb, {
                packId: Bb,
                listed: !sb.listed
              })))
            },
            children: [(0, Jb.jsx)(ub.b, {
              name: sb.listed ? "eye-slash" : "eye"
            }), " ", Tb(sb.listed ? "shaderPackListing:unlist" : "shaderPackListing:relist")]
          }), !sb.isBanned && (0, Jb.jsxs)(fb.d, {
            disabled: Xb,
            onClick: () => {
              Vb(!Nb)
            },
            children: [(0, Jb.jsx)(ub.b, {
              name: "upload"
            }), " ", Tb("shaderPackListing:uploadVersion")]
          }), (0, Jb.jsxs)(fb.J, {
            disabled: Xb || sb.isBanned,
            onClick: () => {
              !async function() {
                !0 === await Yb.NotificationProvider.showPromptPopup({
                  title: "shaderPackListing:deleteTitle",
                  subtitle: "shaderPackListing:deleteSubtitle",
                  confirmText: "general:delete",
                  cancelText: "general:cancel",
                  destructive: !0
                }).getResult() && await Db((() => Qb.b.deleteShaderPack(Mb, Bb)), (() => {
                  Ub(`${hb.T}?section=mine`, {
                    replace: !0
                  })
                }))
              }()
            },
            children: [(0, Jb.jsx)(ub.b, {
              name: "trash-can"
            }), " ", Tb("general:delete")]
          }), Eb && (0, Jb.jsxs)(fb.J, {
            disabled: Xb,
            onClick: () => {
              Db((() => Qb.b.setShaderPackBanned(Mb, Bb, !sb.isBanned)))
            },
            children: [(0, Jb.jsx)(ub.b, {
              name: sb.isBanned ? "circle-check" : "ban"
            }), " ", sb.isBanned ? "Unban" : "Ban"]
          })]
        }), Nb && (0, Jb.jsx)(kb.Suspense, {
          fallback: (0, Jb.jsx)(Ib.d, {}),
          children: (0, Jb.jsx)(gb, {
            existing: {
              packId: Bb,
              name: tb,
              description: yb
            },
            onPublished: () => {
              Vb(!1), Wb()
            }
          })
        })]
      })
    }
    var tb = sb(89),
      yb = sb(1832),
      Pb = sb(1278),
      Db = sb(4730),
      Eb = sb(1208),
      ib = sb(6219),
      Ob = sb(6214),
      Gb = sb(6232);

    function Kb(bb) {
      let {
        item: cb
      } = bb;
      const {
        t: sb
      } = (0, Cb.E)(), [Wb] = (0, ib.h)(), [Tb, Ub] = (0, kb.useState)(Wb), [Ib, Hb] = (0, kb.useState)(!1), [fb, Mb] = (0, kb.useState)(!1), {
        s3Url: Xb
      } = Eb.clientSideServerUrls, {
        width: nb,
        height: mb
      } = ab.w.large, lb = (0, ab.y)(Xb, cb, Tb, "large"), {
        renderVersion: Qb
      } = cb;
      return (0, Jb.jsxs)("div", {
        className: "ShaderPackPreviews",
        children: [(0, Jb.jsx)(Gb.d, {
          selected: Tb,
          onSelect: bb => {
            Ub(bb), Hb(!1)
          },
          imageUrl: bb => (0, ab.y)(Xb, cb, bb, "thumb")
        }), (0, Jb.jsxs)("div", {
          className: "ShaderPackPreviewStage",
          children: [!Ib && (0, Jb.jsxs)("button", {
            type: "button",
            className: "ShaderPackPreviewMain",
            title: null === Qb ? void 0 : sb("shaderPackListing:fullSize"),
            disabled: null === Qb,
            onClick: () => {
              Mb(!0)
            },
            children: [(0, Jb.jsx)("img", {
              src: lb,
              width: nb,
              height: mb,
              alt: sb(hb.cb[Tb]),
              draggable: !1
            }), (0, Jb.jsx)(Ob.c, {
              item: cb
            })]
          }), !Ib && null !== Qb && (0, Jb.jsxs)(db, {
            side: "Right",
            onClick: () => {
              Hb(!0)
            },
            children: [(0, Jb.jsx)(ub.b, {
              name: "arrows-left-right"
            }), " ", sb("shaderPackListing:compare")]
          }), Ib && null !== Qb && (0, Jb.jsx)(qb, {
            item: cb,
            packUrl: lb,
            baselineUrl: (0, ab.p)(Xb, Qb, Tb, "large")
          }), Ib && (0, Jb.jsx)(db, {
            side: "Left",
            onClick: () => {
              Hb(!1)
            },
            children: sb("shaderPackListing:withPack")
          }), Ib && (0, Jb.jsx)(db, {
            side: "Right",
            onClick: () => {
              Hb(!1)
            },
            children: sb("shaderPackListing:withoutPack")
          })]
        }), fb && (0, Jb.jsx)(Zb, {
          fullUrl: (0, ab.y)(Xb, cb, Tb, "full"),
          largeUrl: lb,
          alt: sb(hb.cb[Tb]),
          onClose: () => {
            Mb(!1)
          }
        })]
      })
    }

    function Zb(bb) {
      let {
        fullUrl: cb,
        largeUrl: sb,
        alt: Wb,
        onClose: ab
      } = bb;
      const Tb = (0, kb.useRef)(null);
      return (0, Pb.o)("popup", Tb, ab), (0, kb.useEffect)((() => {
        function bb(bb) {
          "Escape" === bb.key && (bb.stopPropagation(), ab())
        }
        return window.addEventListener("keydown", bb, !0), () => {
          window.removeEventListener("keydown", bb, !0)
        }
      }), [ab]), (0, tb.createPortal)((0, Jb.jsxs)("div", {
        ref: Tb,
        className: "ShaderPackFullSize",
        onClick: ab,
        children: [(0, Jb.jsx)("img", {
          className: "ShaderPackFullSizeImage",
          src: cb,
          alt: Wb,
          draggable: !1,
          style: {
            backgroundImage: `url(${sb})`
          }
        }), (0, Jb.jsx)(fb.j, {
          className: "ShaderPackFullSizeClose",
          onClick: ab
        })]
      }), document.body)
    }
    const zb = 5;

    function qb(bb) {
      let {
        item: cb,
        packUrl: sb,
        baselineUrl: Wb
      } = bb;
      const {
        t: Tb
      } = (0, Cb.E)(), [Ub, Ib] = (0, kb.useState)(50), Hb = (0, kb.useRef)(!1), fb = (0, kb.useRef)(null), {
        width: Mb,
        height: Xb
      } = ab.w.large;

      function nb(bb) {
        Ib((cb => (0, yb.d)(cb + bb, 0, 100)))
      }

      function mb(bb) {
        const cb = bb.currentTarget.getBoundingClientRect();
        Ib((0, yb.d)((bb.clientX - cb.left) / cb.width * 100, 0, 100))
      }
      return (0, Db.d)(fb, {
        adjust: bb => {
          nb(bb * zb)
        },
        setFraction: bb => {
          Ib(100 * bb)
        },
        endDrag: () => {}
      }), (0, Jb.jsxs)("div", {
        ref: fb,
        className: "ShaderPackCompare",
        "data-pad-slider": "",
        "data-pad-focusable": "",
        role: "slider",
        tabIndex: 0,
        "aria-label": Tb("shaderPackListing:compare"),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(Ub),
        style: {
          "--split": `${Ub}%`
        },
        onKeyDown: function(bb) {
          const cb = "ArrowLeft" === bb.key ? -zb : "ArrowRight" === bb.key ? zb : 0;
          0 !== cb && (bb.preventDefault(), nb(cb))
        },
        onPointerDown: bb => {
          Hb.current = !0, bb.currentTarget.setPointerCapture(bb.pointerId), mb(bb)
        },
        onPointerMove: bb => {
          Hb.current && mb(bb)
        },
        onPointerUp: () => {
          Hb.current = !1
        },
        onPointerCancel: () => {
          Hb.current = !1
        },
        children: [(0, Jb.jsx)("img", {
          className: "ShaderPackCompareBaseline",
          src: Wb,
          width: Mb,
          height: Xb,
          alt: "",
          draggable: !1,
          style: {
            backgroundImage: `url(${sb})`
          }
        }), (0, Jb.jsx)("div", {
          className: "ShaderPackCompareLine"
        }), (0, Jb.jsx)("img", {
          className: "ShaderPackComparePack",
          src: sb,
          width: Mb,
          height: Xb,
          alt: "",
          draggable: !1
        }), (0, Jb.jsx)(Ob.c, {
          item: cb,
          className: "ShaderPackCompareNotice"
        })]
      })
    }

    function db(bb) {
      let {
        side: cb,
        onClick: sb,
        children: kb
      } = bb;
      return (0, Jb.jsx)("button", {
        type: "button",
        className: `ShaderPackStageButton ${cb}`,
        onClick: sb,
        children: (0, Jb.jsx)("span", {
          className: "ShaderPackStageButtonFace SmallTextBold",
          children: kb
        })
      })
    }
    var Ab = sb(4703),
      wb = sb(312),
      rb = sb(6328);
    const ob = {
      compiler: "shaderPack:compilerUnavailable",
      download: "shaderPackListing:useDownloadFailed",
      apiVersion: "shaderPackListing:useOtherApiVersion",
      invalid: "shaderPackListing:useInvalid",
      errors: "shaderPackListing:useFailsHere",
      save: "shaderPack:saveFailed"
    };

    function Sb(bb) {
      const {
        userContext: cb
      } = (0, lb.c)(), [Wb, ab] = (0, kb.useState)(null), [Tb, Ub] = (0, kb.useState)(!1), [Ib, Hb] = (0, kb.useState)(!1), [fb, Mb] = (0, kb.useState)(null), Xb = null === bb || void 0 === bb ? void 0 : bb.packId, nb = null === bb || void 0 === bb ? void 0 : bb.sourceHash;
      return (0, kb.useEffect)((() => {
        if (Ub(!1), Mb(null), void 0 === Xb) return;
        let bb = !1;
        return Promise.all([(0, eb.hasUsableWebGpuAdapter)(), (0, rb.d)()]).then((cb => {
          let [sb, kb] = cb;
          var Wb;
          bb || (ab(sb), Ub((null === kb || void 0 === kb || null === (Wb = kb.listing) || void 0 === Wb ? void 0 : Wb.packId) === Xb && kb.listing.sourceHash === nb))
        })).catch((cb => {
          console.error("Failed to check whether this shader pack can be used", cb), bb || ab(!1)
        })), () => {
          bb = !0
        }
      }), [Xb, nb]), {
        webGpuUsable: Wb,
        inUse: Tb,
        busy: Ib,
        errorKey: fb,
        use: () => {
          null !== bb && async function(bb) {
            Hb(!0), Mb(null);
            try {
              const {
                installListedShaderPack: kb
              } = await Promise.all([sb.e(74), sb.e(131), sb.e(126)]).then((() => sb(39914))), Wb = await kb({
                packId: bb.packId,
                sourceHash: bb.sourceHash,
                name: bb.name,
                ownerName: bb.ownerName,
                description: bb.description
              });
              if ("failed" === Wb.kind) return void Mb(ob[Wb.reason]);
              Ub(!0), Qb.b.recordShaderPackDownload(cb, bb.packId).catch((bb => {
                console.error("Failed to count a shader pack's download", bb)
              })), (0, Ab.m)()
            } catch (kb) {
              console.error("Failed to use the shader pack", kb), Mb("shaderPack:unexpectedError")
            } finally {
              Hb(!1)
            }
          }(bb)
        }
      }
    }

    function Rb(bb) {
      let {
        packUse: cb
      } = bb;
      const {
        t: sb
      } = (0, Cb.E)(), {
        webGpuUsable: kb,
        inUse: Wb,
        busy: ab,
        errorKey: Tb,
        use: Ub
      } = cb;
      return (0, Jb.jsxs)("div", {
        className: "ShaderPackUse",
        children: [(0, Jb.jsxs)(fb.n, {
          disabled: !0 !== kb || Wb,
          loading: ab,
          onClick: Ub,
          children: [(0, Jb.jsx)(ub.b, {
            name: Wb ? "check" : "download"
          }), " ", sb(Wb ? "shaderPackListing:inUse" : "shaderPackListing:use")]
        }), !1 === kb && (0, Jb.jsx)("div", {
          className: "ShaderPackUseNote",
          children: sb((0, wb.g)() ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), Tb && (0, Jb.jsx)("div", {
          className: "ShaderPackUseNote Error",
          children: sb(Tb)
        })]
      })
    }

    function vb() {
      var bb;
      const {
        t: cb
      } = (0, Cb.E)(), sb = (0, Hb.useNavigatePreserveSearch)(), {
        packId: ab
      } = (0, Wb.D)(), {
        userContext: Tb,
        isUserContextUpdating: Ub
      } = (0, lb.c)(), [Mb, Xb] = (0, kb.useState)(null), [nb, eb] = (0, kb.useState)(null), [Nb, Vb] = (0, kb.useState)(0), Lb = (0, kb.useRef)(0);

      function ub() {
        var bb;
        null !== (bb = (0, Hb.getPreviousLocation)()) && void 0 !== bb && bb.startsWith(hb.T) ? sb(-1) : sb(hb.T)
      }(0, mb.d)(ub), (0, ib.c)(), (0, kb.useEffect)((() => {
        if (Ub || void 0 === ab) return;
        const bb = ++Lb.current;
        eb(null), Qb.b.getShaderPack(Tb, ab).then((cb => {
          Lb.current === bb && Xb(cb)
        })).catch((cb => {
          Lb.current === bb && (console.error("Failed to get the shader pack", cb), Xb(null), eb({
            error: cb
          }))
        }))
      }), [ab, Tb, Ub, Nb]);
      const Yb = () => {
          Vb((bb => bb + 1))
        },
        gb = (null === Mb || void 0 === Mb ? void 0 : Mb.packId) === ab ? Mb : null,
        tb = (0, ib.l)(),
        yb = Sb(null !== (bb = null === gb || void 0 === gb ? void 0 : gb.live) && void 0 !== bb ? bb : null),
        Pb = null !== gb && void 0 !== gb && gb.live ? (0, Jb.jsx)(Fb, {
          item: gb.live,
          favourites: tb,
          packUse: yb
        }) : null;
      return (0, Jb.jsxs)("article", {
        className: "ShaderPackInformation AnimFadeIn",
        children: [(0, Jb.jsx)(fb.b, {
          onClick: ub,
          children: cb("shaderPackListing:backToPacks")
        }), null === gb && null === nb && (0, Jb.jsx)("div", {
          className: "ShaderPackInformationMessage",
          children: (0, Jb.jsx)(Ib.d, {})
        }), null !== nb && (0, Jb.jsxs)("div", {
          className: "ShaderPackInformationMessage",
          children: [(0, hb.y)(nb.error, cb, "shaderPackListing:loadPackFailed"), (0, Jb.jsx)(fb.d, {
            onClick: Yb,
            children: cb("general:tryAgain")
          })]
        }), null !== gb && null === nb && (0, Jb.jsxs)("div", {
          className: "ShaderPackInformationBody",
          children: [(0, Jb.jsxs)("header", {
            className: "ShaderPackInformationHeader",
            children: [(0, Jb.jsx)("h1", {
              className: "FullyFancyText",
              children: gb.name
            }), Pb]
          }), gb.live && (0, Jb.jsx)(Kb, {
            item: gb.live
          }), gb.live && (0, Jb.jsx)(xb, {
            item: gb.live,
            ownerPreview: gb.ownerPreview,
            bloxdhubSlug: gb.bloxdhubSlug,
            actions: Pb
          }), gb.owner && (0, Jb.jsx)(Bb, {
            details: gb,
            owner: gb.owner,
            onChanged: Yb
          })]
        })]
      })
    }

    function Fb(bb) {
      let {
        item: cb,
        favourites: sb,
        packUse: kb
      } = bb;
      const Wb = sb.isFavourite(cb.packId);
      return (0, Jb.jsxs)("div", {
        className: "ShaderPackInformationActions",
        children: [eb.featureFlags.settings.canUseShaderPacks && (0, Jb.jsx)(Rb, {
          packUse: kb
        }), (0, Jb.jsx)(fb.r, {
          className: "ShaderPackInformationLike",
          onClick: () => {
            sb.toggle(cb.packId)
          },
          isLiked: !0 === Wb,
          isLoading: null === Wb
        })]
      })
    }

    function xb(bb) {
      let {
        item: cb,
        ownerPreview: sb,
        bloxdhubSlug: kb,
        actions: Wb
      } = bb;
      const {
        t: Ub
      } = (0, Cb.E)(), Ib = (0, nb.n)(), fb = null === kb ? null : (0, ab.f)(kb);
      return (0, Jb.jsxs)("div", {
        className: "ShaderPackFacts",
        children: [cb.description && (0, Jb.jsx)("p", {
          className: "ShaderPackDescription",
          children: cb.description
        }), (0, Jb.jsxs)("div", {
          className: "ShaderPackFeatureList",
          children: [(null !== sb || null !== fb) && (0, Jb.jsx)("div", {
            className: "ShaderPackAuthor",
            children: null !== sb ? (0, Jb.jsxs)(Jb.Fragment, {
              children: [(0, Jb.jsx)(Xb.h, {
                playerSocialPreview: sb,
                showLocation: !1,
                linkToProfile: !0
              }), null !== fb && (0, Jb.jsx)("a", {
                className: "ShaderPackBloxdhubLogo",
                href: fb,
                target: "_blank",
                rel: "noopener noreferrer",
                children: (0, Jb.jsx)("img", {
                  src: Nb,
                  alt: ab.b
                })
              })]
            }) : (0, Jb.jsxs)("a", {
              className: "ShaderPackBloxdhubName",
              href: fb,
              target: "_blank",
              rel: "noopener noreferrer",
              children: [ab.b, (0, Jb.jsx)("img", {
                src: Nb,
                alt: ""
              })]
            })
          }), hb.A.filter((bb => cb.features.includes(bb))).map((bb => (0, Jb.jsx)(Hb.LinkPreserveSearch, {
            className: "ShaderPackFeature",
            to: (0, hb.I)(bb),
            children: Ub(hb.K[bb])
          }, bb)))]
        }), Wb, (0, Jb.jsxs)("dl", {
          className: "ShaderPackFactList",
          children: [(0, Jb.jsxs)("div", {
            children: [(0, Jb.jsx)("dt", {
              children: Ub("shaderPackListing:downloads")
            }), (0, Jb.jsx)("dd", {
              children: (0, Tb.K)(cb.downloads)
            })]
          }), (0, Jb.jsx)(jb, {
            label: Ub("shaderPackListing:updated"),
            time: cb.listedUpdatedAt,
            now: Ib
          }), (0, Jb.jsx)(jb, {
            label: Ub("shaderPackListing:created"),
            time: cb.publishedAt,
            now: Ib
          }), null !== cb.gpuCost && (0, Jb.jsxs)("div", {
            children: [(0, Jb.jsx)("dt", {
              children: Ub("shaderPackListing:lag")
            }), (0, Jb.jsx)("dd", {
              children: Ub("shaderPackListing:lagPercent", {
                percent: String((0, hb.Q)(cb.gpuCost))
              })
            })]
          }), (0, Jb.jsxs)("div", {
            children: [(0, Jb.jsx)("dt", {
              children: Ub("shaderPackListing:size")
            }), (0, Jb.jsx)("dd", {
              children: Ub("shaderPackListing:sizeValue", {
                kilobytes: String((0, hb.O)(cb.sourceBytes))
              })
            })]
          }), (0, Jb.jsxs)("div", {
            children: [(0, Jb.jsx)("dt", {
              children: Ub("shaderPackListing:files")
            }), (0, Jb.jsx)("dd", {
              children: cb.fileCount
            })]
          })]
        })]
      })
    }

    function jb(bb) {
      let {
        label: cb,
        time: sb,
        now: kb
      } = bb;
      const {
        t: Wb,
        selectedLanguage: ab
      } = (0, Cb.E)(), Tb = new Date(sb);
      let Ib = Tb.toLocaleDateString();
      if (kb - sb <= 30 * Ub.j) {
        const bb = (0, Cb.m)(ab.code, "shaderPackListing:timeAgo");
        Ib = Wb("shaderPackListing:timeAgo", {
          time: (0, Ub.db)(bb, sb, kb)
        })
      }
      return (0, Jb.jsx)(Mb.f, {
        tooltipInner: Tb.toLocaleString(),
        children: (0, Jb.jsxs)("div", {
          children: [(0, Jb.jsx)("dt", {
            children: cb
          }), (0, Jb.jsx)("dd", {
            children: Ib
          })]
        })
      })
    }
  },
  4728: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Tb
    });
    var kb = sb(1033),
      Wb = sb.n(kb),
      ab = sb(1087);

    function Tb(bb) {
      let {
        options: cb,
        value: sb,
        onChange: kb,
        ariaLabel: Tb,
        className: Ub,
        reselectable: Ib = !1,
        keepsFocus: Hb = !1
      } = bb;
      return (0, ab.jsx)("div", {
        className: Wb()("SegmentedToggle", Ub),
        role: "group",
        "aria-label": Tb,
        children: cb.map((bb => {
          const cb = bb.value === sb;
          return (0, ab.jsx)("button", {
            type: "button",
            "aria-pressed": cb,
            "aria-label": bb.ariaLabel,
            title: bb.ariaLabel,
            className: Wb()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: cb
            }),
            onMouseDown: Hb ? bb => {
              bb.preventDefault()
            } : void 0,
            onClick: () => {
              cb && !Ib || kb(bb.value)
            },
            children: bb.label
          }, bb.value)
        }))
      })
    }
  },
  4730: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => ab,
      d: () => Tb
    });
    var kb = sb(64);
    const Wb = new WeakMap,
      ab = bb => {
        var cb;
        const sb = bb.closest("[data-pad-slider]");
        return sb && null !== (cb = Wb.get(sb)) && void 0 !== cb ? cb : null
      },
      Tb = (bb, cb) => {
        const sb = (0, kb.useRef)(cb);
        sb.current = cb, (0, kb.useEffect)((() => {
          if (bb.current) return ((bb, cb) => (Wb.set(bb, cb), () => {
            Wb.get(bb) === cb && Wb.delete(bb)
          }))(bb.current, {
            adjust: bb => {
              sb.current.adjust(bb)
            },
            setFraction: bb => {
              sb.current.setFraction(bb)
            },
            endDrag: () => {
              sb.current.endDrag()
            }
          })
        }), [bb])
      }
  },
  6328: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Wb,
      d: () => ab
    });
    var kb = sb(37);
    const Wb = "shaderPack";
    async function ab() {
      var bb;
      let cb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (bb = await kb.d.getItem(Wb, cb)) && void 0 !== bb ? bb : null
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);