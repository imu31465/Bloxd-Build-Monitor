export const id = 109;
export const ids = [109];
export const modules = {
  4673: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => jb,
      e: () => Db,
      g: () => Rb,
      h: () => Zb
    });
    var Ab = Ub(52),
      Mb = Ub(4675),
      Tb = Ub(4054),
      Eb = Ub(1268),
      Yb = Ub(4690),
      Bb = Ub(984),
      eb = Ub.n(Bb),
      vb = Ub(1260),
      Lb = Ub(1639),
      Pb = Ub(4697),
      Xb = Ub(1023);

    function jb(bb) {
      let {
        label: ab,
        onClick: Ub,
        checked: Ab,
        circleInfoText: Mb,
        className: Yb,
        disabled: Bb,
        note: vb
      } = bb;
      return (0, Xb.jsxs)("div", {
        "aria-disabled": Bb || void 0,
        "data-pad-focusable": !0,
        className: eb()("SettingBox CheckboxContainer", {
          [Yb]: Yb,
          SettingBoxDisabled: Bb
        }),
        onClick: () => {
          Bb || Ub(!Ab)
        },
        children: [(0, Xb.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, Xb.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, Xb.jsx)(Tb.d, {
              className: "SettingsCheckbox",
              checked: Ab,
              disabled: Bb,
              onChange: () => {}
            })
          }), (0, Xb.jsxs)("div", {
            className: "CheckboxText",
            children: [ab, Mb && (0, Xb.jsx)("span", {
              onClick: bb => bb.stopPropagation(),
              children: (0, Xb.jsx)(Eb.d, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: Mb
              })
            })]
          })]
        }), vb && (0, Xb.jsx)("div", {
          className: "SettingNote",
          children: vb
        })]
      })
    }

    function Rb(bb) {
      let {
        name: ab,
        onChange: Ub,
        min: Mb,
        max: Tb,
        step: Yb,
        initValue: Bb,
        circleInfoText: vb,
        format: Lb,
        className: Pb,
        padStep: jb,
        disabled: Rb = !1,
        selectableMax: kb,
        cappedNote: Zb,
        onChangeComplete: Db
      } = bb;
      const [zb, xb] = (0, Ab.useState)(Bb), ib = (0, Ab.useRef)(Bb);
      (0, Ab.useEffect)((() => {
        ib.current = Bb, xb(Bb)
      }), [Bb]);
      const fb = void 0 !== kb && kb < Tb,
        mb = fb ? {
          "--slider-selectable": (kb - Mb) / (Tb - Mb)
        } : void 0;
      return (0, Xb.jsxs)("div", {
        className: eb()("SettingBox SettingsSliderDiv", {
          [Pb]: Pb,
          SettingBoxDisabled: Rb,
          SliderCapped: fb
        }),
        style: mb,
        children: [(0, Xb.jsxs)("div", {
          className: "SliderText",
          children: [`${ab}: ${Lb?Lb(zb):zb}`, vb && (0, Xb.jsx)(Eb.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: vb
          })]
        }), (0, Xb.jsx)("div", {
          className: "SliderDiv",
          children: (0, Xb.jsx)(yb, {
            value: zb,
            min: Mb,
            max: Tb,
            step: Yb,
            onChange: bb => {
              if (fb && bb >= kb && zb === kb) return;
              const ab = fb ? Math.min(bb, kb) : bb;
              ib.current = ab, xb(ab), Ub(ab)
            },
            onChangeComplete: Db && (() => {
              Db(ib.current)
            }),
            format: Lb,
            padStep: jb,
            disabled: Rb
          })
        }), fb && Zb && (0, Xb.jsx)("div", {
          className: "SettingNote",
          children: Zb
        })]
      })
    }
    const kb = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function yb(bb) {
      var ab;
      let {
        value: Ub,
        min: Tb,
        max: Eb,
        step: Yb,
        onChange: Bb,
        orientation: eb,
        reverse: vb,
        setIsChanging: Lb,
        tooltip: jb,
        labels: Rb,
        handleLabel: yb,
        format: Zb,
        onChangeStart: Db,
        onChangeComplete: zb,
        padStep: xb,
        disabled: ib = !1
      } = bb;
      const fb = (0, Ab.useRef)(null),
        mb = (0, Ab.useRef)(null);
      (0, Ab.useLayoutEffect)((() => {
        var bb, ab, Ub;
        const Ab = null !== (bb = null === (ab = fb.current) || void 0 === ab ? void 0 : ab.querySelector(".rangeslider")) && void 0 !== bb ? bb : null;
        null === Ab || void 0 === Ab || Ab.setAttribute("data-pad-slider", ""), null === Ab || void 0 === Ab || Ab.setAttribute("data-pad-focusable", ""), null === Ab || void 0 === Ab || null === (Ub = Ab.querySelector(".rangeslider__handle")) || void 0 === Ub || Ub.setAttribute("data-pad-slider-handle", ""), mb.current = Ab
      }), []), (0, Ab.useLayoutEffect)((() => {
        var bb, ab;
        ib ? null === (bb = mb.current) || void 0 === bb || bb.setAttribute("aria-disabled", "true") : null === (ab = mb.current) || void 0 === ab || ab.removeAttribute("aria-disabled")
      }), [ib]);
      const pb = (null !== (ab = String(Yb).split(".")[1]) && void 0 !== ab ? ab : "").length,
        Nb = bb => {
          const ab = Number((Math.round((bb - Tb) / Yb) * Yb + Tb).toFixed(pb));
          return Math.min(Eb, Math.max(Tb, ab))
        },
        Wb = (0, Ab.useRef)(zb);
      Wb.current = zb, (0, Ab.useEffect)((() => {
        const bb = fb.current;
        if (!bb) return;
        const ab = bb => {
          var ab;
          kb.has(bb.key) && (null === (ab = Wb.current) || void 0 === ab || ab.call(Wb))
        };
        return bb.addEventListener("keyup", ab), () => {
          bb.removeEventListener("keyup", ab)
        }
      }), []);
      const Hb = (0, Ab.useRef)(!1);
      return (0, Pb.e)(mb, {
        adjust: bb => {
          if (ib) return;
          const ab = null !== xb && void 0 !== xb ? xb : Math.max(Yb, Math.round((Eb - Tb) / 20 / Yb) * Yb),
            Ab = Nb(Ub + bb * ab * (vb ? -1 : 1));
          Ab !== Ub && (null === Db || void 0 === Db || Db(), Bb(Ab), null === zb || void 0 === zb || zb())
        },
        setFraction: bb => {
          if (ib) return;
          const ab = Nb(Tb + (vb ? 1 - bb : bb) * (Eb - Tb));
          ab !== Ub && (Hb.current || (Hb.current = !0, null === Db || void 0 === Db || Db()), Bb(ab))
        },
        endDrag: () => {
          Hb.current && (Hb.current = !1, null === zb || void 0 === zb || zb())
        }
      }), (0, Xb.jsx)("div", {
        ref: fb,
        style: {
          display: "contents"
        },
        children: (0, Xb.jsx)(Mb.d, {
          value: Ub,
          min: Tb,
          max: Eb,
          step: Yb,
          onChange: Bb,
          orientation: eb,
          reverse: vb,
          tooltip: jb,
          labels: Rb,
          handleLabel: yb,
          format: Zb,
          onChangeStart: () => {
            null === Db || void 0 === Db || Db(), null === Lb || void 0 === Lb || Lb(!0)
          },
          onChangeComplete: () => {
            null === Lb || void 0 === Lb || Lb(!1), null === zb || void 0 === zb || zb()
          }
        })
      })
    }
    async function Zb() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      const ab = vb.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: "",
        unlockPointerKey: bb
      });
      !0 === await ab.getResult() && (0, Lb.reloadBloxd)()
    }

    function Db(bb) {
      let {
        label: ab,
        options: Ub,
        value: Ab,
        onChange: Mb,
        circleInfoText: Tb
      } = bb;
      return (0, Xb.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, Xb.jsxs)("div", {
          className: "SliderText",
          children: [ab, Tb && (0, Xb.jsx)(Eb.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: Tb
          })]
        }), (0, Xb.jsx)(Yb.e, {
          ariaLabel: ab,
          options: Ub,
          value: Ab,
          onChange: Mb
        })]
      })
    }
  },
  6300: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      default: () => Ob
    });
    var Ab = Ub(52),
      Mb = Ub(1446),
      Tb = Ub(6167),
      Eb = Ub(1162),
      Yb = Ub(325),
      Bb = Ub(1254),
      eb = Ub(1433),
      vb = Ub(1352),
      Lb = Ub(1268),
      Pb = Ub(2397),
      Xb = Ub(2522),
      jb = Ub(4234),
      Rb = Ub(1060),
      kb = Ub(1413),
      yb = Ub(101),
      Zb = Ub(1134);
    const Db = Ub.p + "static/media/bloxdhubLogo.6a6c367af2ad6e6f1eb3.webp";
    var zb = Ub(984),
      xb = Ub.n(zb),
      ib = Ub(990),
      fb = Ub(1260),
      mb = Ub(6161),
      pb = Ub(1023);
    const Nb = (0, Ab.lazy)((() => Promise.all([Ub.e(105), Ub.e(74), Ub.e(131), Ub.e(125), Ub.e(124)]).then((() => Ub(6203))).then((bb => ({
      default: bb.ShaderPackPublishForm
    })))));

    function Wb(bb) {
      let {
        details: ab,
        owner: Ub,
        onChanged: Mb
      } = bb;
      const {
        t: Eb
      } = (0, Zb.A)(), Yb = (0, eb.useNavigatePreserveSearch)(), {
        userContext: Lb
      } = (0, Rb.c)(), [Pb, Xb] = (0, Ab.useState)(!1), [jb, yb] = (0, Ab.useState)(null), [Db, zb] = (0, Ab.useState)(!1), {
        packId: Wb,
        name: Hb,
        description: Ib,
        live: db
      } = ab;
      async function Fb(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Mb;
        Xb(!0), yb(null);
        try {
          await bb(), ab()
        } catch (Ub) {
          console.error("Failed to change a shader pack", Ub), yb((0, mb.z)(Ub, Eb, "shaderPackListing:ownerActionFailed"))
        } finally {
          Xb(!1)
        }
      }
      const hb = (0, mb.t)(Lb);
      return (0, pb.jsxs)("section", {
        className: "ShaderPackOwnerPanel",
        children: [(0, pb.jsx)("h2", {
          className: "ShaderPackSectionTitle",
          children: Eb("general:manage")
        }), (0, mb.V)(Ub, !(null === db || void 0 === db || !db.renderId), Date.now(), Eb).map((bb => (0, pb.jsxs)("div", {
          className: xb()("ShaderPackOwnerNotice", {
            Warning: "warning" === bb.tone
          }),
          children: [(0, pb.jsx)(ib.e, {
            name: "warning" === bb.tone ? "triangle-exclamation" : "circle-info"
          }), (0, pb.jsxs)("div", {
            children: [bb.text, bb.detail && (0, pb.jsx)("pre", {
              className: "ShaderPackOwnerNoticeDetail",
              children: bb.detail
            })]
          })]
        }, bb.text))), ab.ban && (0, pb.jsxs)("div", {
          className: "ShaderPackOwnerNotice Warning",
          children: [(0, pb.jsx)(ib.e, {
            name: "ban"
          }), (0, pb.jsxs)("div", {
            children: ["Banned by ", ab.ban.byName, " on ", new Date(ab.ban.at).toLocaleString()]
          })]
        }), jb && (0, pb.jsx)("div", {
          className: "ShaderPackOwnerError",
          children: jb
        }), (0, pb.jsxs)("div", {
          className: "ShaderPackOwnerActions",
          children: [(0, pb.jsxs)(vb.M, {
            disabled: Pb,
            onClick: () => {
              !async function() {
                const bb = await fb.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:renameTitle",
                  initialValue: Hb,
                  maxLength: Tb.C,
                  submitText: "general:save",
                  validate: bb => bb.trim().length < Tb.E ? Eb("shaderPackListing:nameTooShort", {
                    min: String(Tb.E)
                  }) : null
                }).getResult();
                "notificationTornDown" !== bb && "submit" === (null === bb || void 0 === bb ? void 0 : bb.type) && bb.value.trim() !== Hb && await Fb((() => kb.b.updateShaderPack(Lb, {
                  packId: Wb,
                  name: bb.value.trim()
                })))
              }()
            },
            children: [(0, pb.jsx)(ib.e, {
              name: "pen"
            }), " ", Eb("shaderPackListing:rename")]
          }), (0, pb.jsxs)(vb.M, {
            disabled: Pb,
            onClick: () => {
              !async function() {
                const bb = await fb.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:editDescription",
                  initialValue: Ib,
                  maxLength: Tb.o,
                  multiline: !0,
                  allowEmptySubmit: !0,
                  submitText: "general:save"
                }).getResult();
                "notificationTornDown" !== bb && "submit" === (null === bb || void 0 === bb ? void 0 : bb.type) && bb.value.trim() !== Ib && await Fb((() => kb.b.updateShaderPack(Lb, {
                  packId: Wb,
                  description: bb.value.trim()
                })))
              }()
            },
            children: [(0, pb.jsx)(ib.e, {
              name: "file-lines"
            }), " ", Eb("shaderPackListing:editDescription")]
          }), (0, pb.jsxs)(vb.M, {
            disabled: Pb || Ub.isBanned && !Ub.listed,
            onClick: () => {
              Fb((() => kb.b.updateShaderPack(Lb, {
                packId: Wb,
                listed: !Ub.listed
              })))
            },
            children: [(0, pb.jsx)(ib.e, {
              name: Ub.listed ? "eye-slash" : "eye"
            }), " ", Eb(Ub.listed ? "shaderPackListing:unlist" : "shaderPackListing:relist")]
          }), !Ub.isBanned && (0, pb.jsxs)(vb.g, {
            disabled: Pb,
            onClick: () => {
              zb(!Db)
            },
            children: [(0, pb.jsx)(ib.e, {
              name: "upload"
            }), " ", Eb("shaderPackListing:uploadVersion")]
          }), (0, pb.jsxs)(vb.F, {
            disabled: Pb || Ub.isBanned,
            onClick: () => {
              !async function() {
                !0 === await fb.NotificationProvider.showPromptPopup({
                  title: "shaderPackListing:deleteTitle",
                  subtitle: "shaderPackListing:deleteSubtitle",
                  confirmText: "general:delete",
                  cancelText: "general:cancel",
                  destructive: !0
                }).getResult() && await Fb((() => kb.b.deleteShaderPack(Lb, Wb)), (() => {
                  Yb(`${mb.U}?section=mine`, {
                    replace: !0
                  })
                }))
              }()
            },
            children: [(0, pb.jsx)(ib.e, {
              name: "trash-can"
            }), " ", Eb("general:delete")]
          }), hb && (0, pb.jsxs)(vb.F, {
            disabled: Pb,
            onClick: () => {
              Fb((() => kb.b.setShaderPackBanned(Lb, Wb, !Ub.isBanned)))
            },
            children: [(0, pb.jsx)(ib.e, {
              name: Ub.isBanned ? "circle-check" : "ban"
            }), " ", Ub.isBanned ? "Unban" : "Ban"]
          })]
        }), Db && (0, pb.jsx)(Ab.Suspense, {
          fallback: (0, pb.jsx)(Bb.b, {}),
          children: (0, pb.jsx)(Nb, {
            existing: {
              packId: Wb,
              name: Hb,
              description: Ib
            },
            onPublished: () => {
              zb(!1), Mb()
            }
          })
        })]
      })
    }
    var Hb = Ub(75),
      Ib = Ub(1786),
      db = Ub(1213),
      Fb = Ub(4697),
      hb = Ub(1142),
      Gb = Ub(6179),
      Qb = Ub(6176),
      qb = Ub(6194);

    function ub(bb) {
      let {
        item: ab
      } = bb;
      const {
        t: Ub
      } = (0, Zb.A)(), [Mb] = (0, Gb.k)(), [Eb, Yb] = (0, Ab.useState)(Mb), [Bb, eb] = (0, Ab.useState)(!1), [vb, Lb] = (0, Ab.useState)(!1), {
        s3Url: Pb
      } = hb.clientSideServerUrls, {
        width: Xb,
        height: jb
      } = Tb.s.large, Rb = (0, Tb.w)(Pb, ab, Eb, "large"), {
        renderVersion: kb
      } = ab;
      return (0, pb.jsxs)("div", {
        className: "ShaderPackPreviews",
        children: [(0, pb.jsx)(qb.c, {
          selected: Eb,
          onSelect: bb => {
            Yb(bb), eb(!1)
          },
          imageUrl: bb => (0, Tb.w)(Pb, ab, bb, "thumb")
        }), (0, pb.jsxs)("div", {
          className: "ShaderPackPreviewStage",
          children: [!Bb && (0, pb.jsxs)("button", {
            type: "button",
            className: "ShaderPackPreviewMain",
            title: null === kb ? void 0 : Ub("shaderPackListing:fullSize"),
            disabled: null === kb,
            onClick: () => {
              Lb(!0)
            },
            children: [(0, pb.jsx)("img", {
              src: Rb,
              width: Xb,
              height: jb,
              alt: Ub(mb.eb[Eb]),
              draggable: !1
            }), (0, pb.jsx)(Qb.b, {
              item: ab
            })]
          }), !Bb && null !== kb && (0, pb.jsxs)(lb, {
            side: "Right",
            onClick: () => {
              eb(!0)
            },
            children: [(0, pb.jsx)(ib.e, {
              name: "arrows-left-right"
            }), " ", Ub("shaderPackListing:compare")]
          }), Bb && null !== kb && (0, pb.jsx)(ob, {
            item: ab,
            packUrl: Rb,
            baselineUrl: (0, Tb.m)(Pb, kb, Eb, "large")
          }), Bb && (0, pb.jsx)(lb, {
            side: "Left",
            onClick: () => {
              eb(!1)
            },
            children: Ub("shaderPackListing:withPack")
          }), Bb && (0, pb.jsx)(lb, {
            side: "Right",
            onClick: () => {
              eb(!1)
            },
            children: Ub("shaderPackListing:withoutPack")
          })]
        }), vb && (0, pb.jsx)(rb, {
          fullUrl: (0, Tb.w)(Pb, ab, Eb, "full"),
          largeUrl: Rb,
          alt: Ub(mb.eb[Eb]),
          onClose: () => {
            Lb(!1)
          }
        })]
      })
    }

    function rb(bb) {
      let {
        fullUrl: ab,
        largeUrl: Ub,
        alt: Mb,
        onClose: Tb
      } = bb;
      const Eb = (0, Ab.useRef)(null);
      return (0, db.r)("popup", Eb, Tb), (0, Ab.useEffect)((() => {
        function bb(bb) {
          "Escape" === bb.key && (bb.stopPropagation(), Tb())
        }
        return window.addEventListener("keydown", bb, !0), () => {
          window.removeEventListener("keydown", bb, !0)
        }
      }), [Tb]), (0, Hb.createPortal)((0, pb.jsxs)("div", {
        ref: Eb,
        className: "ShaderPackFullSize",
        onClick: Tb,
        children: [(0, pb.jsx)("img", {
          className: "ShaderPackFullSizeImage",
          src: ab,
          alt: Mb,
          draggable: !1,
          style: {
            backgroundImage: `url(${Ub})`
          }
        }), (0, pb.jsx)(vb.k, {
          className: "ShaderPackFullSizeClose",
          onClick: Tb
        })]
      }), document.body)
    }
    const Kb = 5;

    function ob(bb) {
      let {
        item: ab,
        packUrl: Ub,
        baselineUrl: Mb
      } = bb;
      const {
        t: Eb
      } = (0, Zb.A)(), [Yb, Bb] = (0, Ab.useState)(50), eb = (0, Ab.useRef)(!1), vb = (0, Ab.useRef)(null), {
        width: Lb,
        height: Pb
      } = Tb.s.large;

      function Xb(bb) {
        Bb((ab => (0, Ib.c)(ab + bb, 0, 100)))
      }

      function jb(bb) {
        const ab = bb.currentTarget.getBoundingClientRect();
        Bb((0, Ib.c)((bb.clientX - ab.left) / ab.width * 100, 0, 100))
      }
      return (0, Fb.e)(vb, {
        adjust: bb => {
          Xb(bb * Kb)
        },
        setFraction: bb => {
          Bb(100 * bb)
        },
        endDrag: () => {}
      }), (0, pb.jsxs)("div", {
        ref: vb,
        className: "ShaderPackCompare",
        "data-pad-slider": "",
        "data-pad-focusable": "",
        role: "slider",
        tabIndex: 0,
        "aria-label": Eb("shaderPackListing:compare"),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(Yb),
        style: {
          "--split": `${Yb}%`
        },
        onKeyDown: function(bb) {
          const ab = "ArrowLeft" === bb.key ? -Kb : "ArrowRight" === bb.key ? Kb : 0;
          0 !== ab && (bb.preventDefault(), Xb(ab))
        },
        onPointerDown: bb => {
          eb.current = !0, bb.currentTarget.setPointerCapture(bb.pointerId), jb(bb)
        },
        onPointerMove: bb => {
          eb.current && jb(bb)
        },
        onPointerUp: () => {
          eb.current = !1
        },
        onPointerCancel: () => {
          eb.current = !1
        },
        children: [(0, pb.jsx)("img", {
          className: "ShaderPackCompareBaseline",
          src: Mb,
          width: Lb,
          height: Pb,
          alt: "",
          draggable: !1,
          style: {
            backgroundImage: `url(${Ub})`
          }
        }), (0, pb.jsx)("div", {
          className: "ShaderPackCompareLine"
        }), (0, pb.jsx)("img", {
          className: "ShaderPackComparePack",
          src: Ub,
          width: Lb,
          height: Pb,
          alt: "",
          draggable: !1
        }), (0, pb.jsx)(Qb.b, {
          item: ab,
          className: "ShaderPackCompareNotice"
        })]
      })
    }

    function lb(bb) {
      let {
        side: ab,
        onClick: Ub,
        children: Ab
      } = bb;
      return (0, pb.jsx)("button", {
        type: "button",
        className: `ShaderPackStageButton ${ab}`,
        onClick: Ub,
        children: (0, pb.jsx)("span", {
          className: "ShaderPackStageButtonFace SmallTextBold",
          children: Ab
        })
      })
    }
    var tb = Ub(4673),
      wb = Ub(292),
      sb = Ub(6294);
    const gb = {
      compiler: "shaderPack:compilerUnavailable",
      download: "shaderPackListing:useDownloadFailed",
      apiVersion: "shaderPackListing:useOtherApiVersion",
      invalid: "shaderPackListing:useInvalid",
      errors: "shaderPackListing:useFailsHere",
      save: "shaderPack:saveFailed"
    };

    function Cb(bb) {
      const {
        userContext: ab
      } = (0, Rb.c)(), [Mb, Tb] = (0, Ab.useState)(null), [Eb, Yb] = (0, Ab.useState)(!1), [Bb, eb] = (0, Ab.useState)(!1), [vb, Lb] = (0, Ab.useState)(null), Pb = null === bb || void 0 === bb ? void 0 : bb.packId, Xb = null === bb || void 0 === bb ? void 0 : bb.sourceHash;
      return (0, Ab.useEffect)((() => {
        if (Yb(!1), Lb(null), void 0 === Pb) return;
        let bb = !1;
        return Promise.all([(0, yb.hasUsableWebGpuAdapter)(), (0, sb.f)()]).then((ab => {
          let [Ub, Ab] = ab;
          var Mb;
          bb || (Tb(Ub), Yb((null === Ab || void 0 === Ab || null === (Mb = Ab.listing) || void 0 === Mb ? void 0 : Mb.packId) === Pb && Ab.listing.sourceHash === Xb))
        })).catch((ab => {
          console.error("Failed to check whether this shader pack can be used", ab), bb || Tb(!1)
        })), () => {
          bb = !0
        }
      }), [Pb, Xb]), {
        webGpuUsable: Mb,
        inUse: Eb,
        busy: Bb,
        errorKey: vb,
        use: () => {
          null !== bb && async function(bb) {
            eb(!0), Lb(null);
            try {
              const {
                installListedShaderPack: Ab
              } = await Promise.all([Ub.e(74), Ub.e(131), Ub.e(126)]).then((() => Ub(39622))), Mb = await Ab({
                packId: bb.packId,
                sourceHash: bb.sourceHash,
                name: bb.name,
                ownerName: bb.ownerName,
                description: bb.description
              });
              if ("failed" === Mb.kind) return void Lb(gb[Mb.reason]);
              Yb(!0), kb.b.recordShaderPackDownload(ab, bb.packId).catch((bb => {
                console.error("Failed to count a shader pack's download", bb)
              })), (0, tb.h)()
            } catch (Ab) {
              console.error("Failed to use the shader pack", Ab), Lb("shaderPack:unexpectedError")
            } finally {
              eb(!1)
            }
          }(bb)
        }
      }
    }

    function Vb(bb) {
      let {
        packUse: ab
      } = bb;
      const {
        t: Ub
      } = (0, Zb.A)(), {
        webGpuUsable: Ab,
        inUse: Mb,
        busy: Tb,
        errorKey: Eb,
        use: Yb
      } = ab;
      return (0, pb.jsxs)("div", {
        className: "ShaderPackUse",
        children: [(0, pb.jsxs)(vb.m, {
          disabled: !0 !== Ab || Mb,
          loading: Tb,
          onClick: Yb,
          children: [(0, pb.jsx)(ib.e, {
            name: Mb ? "check" : "download"
          }), " ", Ub(Mb ? "shaderPackListing:inUse" : "shaderPackListing:use")]
        }), !1 === Ab && (0, pb.jsx)("div", {
          className: "ShaderPackUseNote",
          children: Ub((0, wb.f)() ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), Eb && (0, pb.jsx)("div", {
          className: "ShaderPackUseNote Error",
          children: Ub(Eb)
        })]
      })
    }

    function Ob() {
      var bb;
      const {
        t: ab
      } = (0, Zb.A)(), Ub = (0, eb.useNavigatePreserveSearch)(), {
        packId: Tb
      } = (0, Mb.F)(), {
        userContext: Eb,
        isUserContextUpdating: Yb
      } = (0, Rb.c)(), [Lb, Pb] = (0, Ab.useState)(null), [Xb, yb] = (0, Ab.useState)(null), [Db, zb] = (0, Ab.useState)(0), xb = (0, Ab.useRef)(0);

      function ib() {
        var bb;
        null !== (bb = (0, eb.getPreviousLocation)()) && void 0 !== bb && bb.startsWith(mb.U) ? Ub(-1) : Ub(mb.U)
      }(0, jb.c)(ib), (0, Gb.e)(), (0, Ab.useEffect)((() => {
        if (Yb || void 0 === Tb) return;
        const bb = ++xb.current;
        yb(null), kb.b.getShaderPack(Eb, Tb).then((ab => {
          xb.current === bb && Pb(ab)
        })).catch((ab => {
          xb.current === bb && (console.error("Failed to get the shader pack", ab), Pb(null), yb({
            error: ab
          }))
        }))
      }), [Tb, Eb, Yb, Db]);
      const fb = () => {
          zb((bb => bb + 1))
        },
        Nb = (null === Lb || void 0 === Lb ? void 0 : Lb.packId) === Tb ? Lb : null,
        Hb = (0, Gb.n)(),
        Ib = Cb(null !== (bb = null === Nb || void 0 === Nb ? void 0 : Nb.live) && void 0 !== bb ? bb : null),
        db = null !== Nb && void 0 !== Nb && Nb.live ? (0, pb.jsx)(cb, {
          item: Nb.live,
          favourites: Hb,
          packUse: Ib
        }) : null;
      return (0, pb.jsxs)("article", {
        className: "ShaderPackInformation AnimFadeIn",
        children: [(0, pb.jsx)(vb.e, {
          onClick: ib,
          children: ab("shaderPackListing:backToPacks")
        }), null === Nb && null === Xb && (0, pb.jsx)("div", {
          className: "ShaderPackInformationMessage",
          children: (0, pb.jsx)(Bb.b, {})
        }), null !== Xb && (0, pb.jsxs)("div", {
          className: "ShaderPackInformationMessage",
          children: [(0, mb.z)(Xb.error, ab, "shaderPackListing:loadPackFailed"), (0, pb.jsx)(vb.g, {
            onClick: fb,
            children: ab("general:tryAgain")
          })]
        }), null !== Nb && null === Xb && (0, pb.jsxs)("div", {
          className: "ShaderPackInformationBody",
          children: [(0, pb.jsxs)("header", {
            className: "ShaderPackInformationHeader",
            children: [(0, pb.jsx)("h1", {
              className: "FullyFancyText",
              children: Nb.name
            }), db]
          }), Nb.live && (0, pb.jsx)(ub, {
            item: Nb.live
          }), Nb.live && (0, pb.jsx)(Jb, {
            item: Nb.live,
            ownerPreview: Nb.ownerPreview,
            bloxdhubSlug: Nb.bloxdhubSlug,
            actions: db
          }), Nb.owner && (0, pb.jsx)(Wb, {
            details: Nb,
            owner: Nb.owner,
            onChanged: fb
          })]
        })]
      })
    }

    function cb(bb) {
      let {
        item: ab,
        favourites: Ub,
        packUse: Ab
      } = bb;
      const Mb = Ub.isFavourite(ab.packId);
      return (0, pb.jsxs)("div", {
        className: "ShaderPackInformationActions",
        children: [yb.featureFlags.settings.canUseShaderPacks && (0, pb.jsx)(Vb, {
          packUse: Ab
        }), (0, pb.jsx)(vb.w, {
          className: "ShaderPackInformationLike",
          onClick: () => {
            Ub.toggle(ab.packId)
          },
          isLiked: !0 === Mb,
          isLoading: null === Mb
        })]
      })
    }

    function Jb(bb) {
      let {
        item: ab,
        ownerPreview: Ub,
        bloxdhubSlug: Ab,
        actions: Mb
      } = bb;
      const {
        t: Yb
      } = (0, Zb.A)(), Bb = (0, Xb.q)(), vb = null === Ab ? null : (0, Tb.f)(Ab);
      return (0, pb.jsxs)("div", {
        className: "ShaderPackFacts",
        children: [ab.description && (0, pb.jsx)("p", {
          className: "ShaderPackDescription",
          children: ab.description
        }), (0, pb.jsxs)("div", {
          className: "ShaderPackFeatureList",
          children: [(null !== Ub || null !== vb) && (0, pb.jsx)("div", {
            className: "ShaderPackAuthor",
            children: null !== Ub ? (0, pb.jsxs)(pb.Fragment, {
              children: [(0, pb.jsx)(Pb.h, {
                playerSocialPreview: Ub,
                showLocation: !1,
                linkToProfile: !0
              }), null !== vb && (0, pb.jsx)("a", {
                className: "ShaderPackBloxdhubLogo",
                href: vb,
                target: "_blank",
                rel: "noopener noreferrer",
                children: (0, pb.jsx)("img", {
                  src: Db,
                  alt: Tb.e
                })
              })]
            }) : (0, pb.jsxs)("a", {
              className: "ShaderPackBloxdhubName",
              href: vb,
              target: "_blank",
              rel: "noopener noreferrer",
              children: [Tb.e, (0, pb.jsx)("img", {
                src: Db,
                alt: ""
              })]
            })
          }), mb.D.filter((bb => ab.features.includes(bb))).map((bb => (0, pb.jsx)(eb.LinkPreserveSearch, {
            className: "ShaderPackFeature",
            to: (0, mb.J)(bb),
            children: Yb(mb.K[bb])
          }, bb)))]
        }), Mb, (0, pb.jsxs)("dl", {
          className: "ShaderPackFactList",
          children: [(0, pb.jsxs)("div", {
            children: [(0, pb.jsx)("dt", {
              children: Yb("shaderPackListing:downloads")
            }), (0, pb.jsx)("dd", {
              children: (0, Eb.T)(ab.downloads)
            })]
          }), (0, pb.jsx)(nb, {
            label: Yb("shaderPackListing:updated"),
            time: ab.listedUpdatedAt,
            now: Bb
          }), (0, pb.jsx)(nb, {
            label: Yb("shaderPackListing:created"),
            time: ab.publishedAt,
            now: Bb
          }), null !== ab.gpuCost && (0, pb.jsxs)("div", {
            children: [(0, pb.jsx)("dt", {
              children: Yb("shaderPackListing:lag")
            }), (0, pb.jsx)("dd", {
              children: Yb("shaderPackListing:lagPercent", {
                percent: String((0, mb.R)(ab.gpuCost))
              })
            })]
          }), (0, pb.jsxs)("div", {
            children: [(0, pb.jsx)("dt", {
              children: Yb("shaderPackListing:size")
            }), (0, pb.jsx)("dd", {
              children: Yb("shaderPackListing:sizeValue", {
                kilobytes: String((0, mb.O)(ab.sourceBytes))
              })
            })]
          }), (0, pb.jsxs)("div", {
            children: [(0, pb.jsx)("dt", {
              children: Yb("shaderPackListing:files")
            }), (0, pb.jsx)("dd", {
              children: ab.fileCount
            })]
          })]
        })]
      })
    }

    function nb(bb) {
      let {
        label: ab,
        time: Ub,
        now: Ab
      } = bb;
      const {
        t: Mb,
        selectedLanguage: Tb
      } = (0, Zb.A)(), Eb = new Date(Ub);
      let Bb = Eb.toLocaleDateString();
      if (Ab - Ub <= 30 * Yb.g) {
        const bb = (0, Zb.l)(Tb.code, "shaderPackListing:timeAgo");
        Bb = Mb("shaderPackListing:timeAgo", {
          time: (0, Yb.$)(bb, Ub, Ab)
        })
      }
      return (0, pb.jsx)(Lb.g, {
        tooltipInner: Eb.toLocaleString(),
        children: (0, pb.jsxs)("div", {
          children: [(0, pb.jsx)("dt", {
            children: ab
          }), (0, pb.jsx)("dd", {
            children: Bb
          })]
        })
      })
    }
  },
  4690: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Eb
    });
    var Ab = Ub(984),
      Mb = Ub.n(Ab),
      Tb = Ub(1023);

    function Eb(bb) {
      let {
        options: ab,
        value: Ub,
        onChange: Ab,
        ariaLabel: Eb,
        className: Yb,
        reselectable: Bb = !1,
        keepsFocus: eb = !1
      } = bb;
      return (0, Tb.jsx)("div", {
        className: Mb()("SegmentedToggle", Yb),
        role: "group",
        "aria-label": Eb,
        children: ab.map((bb => {
          const ab = bb.value === Ub;
          return (0, Tb.jsx)("button", {
            type: "button",
            "aria-pressed": ab,
            "aria-label": bb.ariaLabel,
            title: bb.ariaLabel,
            className: Mb()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: ab
            }),
            onMouseDown: eb ? bb => {
              bb.preventDefault()
            } : void 0,
            onClick: () => {
              ab && !Bb || Ab(bb.value)
            },
            children: bb.label
          }, bb.value)
        }))
      })
    }
  },
  4697: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Tb,
      e: () => Eb
    });
    var Ab = Ub(52);
    const Mb = new WeakMap,
      Tb = bb => {
        var ab;
        const Ub = bb.closest("[data-pad-slider]");
        return Ub && null !== (ab = Mb.get(Ub)) && void 0 !== ab ? ab : null
      },
      Eb = (bb, ab) => {
        const Ub = (0, Ab.useRef)(ab);
        Ub.current = ab, (0, Ab.useEffect)((() => {
          if (bb.current) return ((bb, ab) => (Mb.set(bb, ab), () => {
            Mb.get(bb) === ab && Mb.delete(bb)
          }))(bb.current, {
            adjust: bb => {
              Ub.current.adjust(bb)
            },
            setFraction: bb => {
              Ub.current.setFraction(bb)
            },
            endDrag: () => {
              Ub.current.endDrag()
            }
          })
        }), [bb])
      }
  },
  6294: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Mb,
      f: () => Tb
    });
    var Ab = Ub(31);
    const Mb = "shaderPack";
    async function Tb() {
      var bb;
      let ab = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (bb = await Ab.c.getItem(Mb, ab)) && void 0 !== bb ? bb : null
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);