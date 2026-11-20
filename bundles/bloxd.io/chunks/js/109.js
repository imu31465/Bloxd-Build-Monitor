export const id = 109;
export const ids = [109];
export const modules = {
  4688: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => ek,
      i: () => vk,
      l: () => yk,
      m: () => Wk
    });
    var Rk = Bk(61),
      tk = Bk(4696),
      ak = Bk(4121),
      Xk = Bk(1312),
      bk = Bk(4712),
      wk = Bk(1020),
      dk = Bk.n(wk),
      sk = Bk(1300),
      Vk = Bk(1650),
      Jk = Bk(4717),
      Ak = Bk(1069);

    function ek(kk) {
      let {
        label: Fk,
        onClick: Bk,
        checked: Rk,
        circleInfoText: tk,
        className: bk,
        disabled: wk,
        note: sk
      } = kk;
      return (0, Ak.jsxs)("div", {
        "aria-disabled": wk || void 0,
        "data-pad-focusable": !0,
        className: dk()("SettingBox CheckboxContainer", {
          [bk]: bk,
          SettingBoxDisabled: wk
        }),
        onClick: () => {
          wk || Bk(!Rk)
        },
        children: [(0, Ak.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, Ak.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, Ak.jsx)(ak.c, {
              className: "SettingsCheckbox",
              checked: Rk,
              disabled: wk,
              onChange: () => {}
            })
          }), (0, Ak.jsxs)("div", {
            className: "CheckboxText",
            children: [Fk, tk && (0, Ak.jsx)("span", {
              onClick: kk => kk.stopPropagation(),
              children: (0, Ak.jsx)(Xk.b, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: tk
              })
            })]
          })]
        }), sk && (0, Ak.jsx)("div", {
          className: "SettingNote",
          children: sk
        })]
      })
    }

    function yk(kk) {
      let {
        name: Fk,
        onChange: Bk,
        min: tk,
        max: ak,
        step: bk,
        initValue: wk,
        circleInfoText: sk,
        format: Vk,
        className: Jk,
        padStep: ek,
        disabled: yk = !1,
        selectableMax: fk,
        cappedNote: Wk,
        onChangeComplete: vk
      } = kk;
      const [ik, Yk] = (0, Rk.useState)(wk), Lk = (0, Rk.useRef)(wk);
      (0, Rk.useEffect)((() => {
        Lk.current = wk, Yk(wk)
      }), [wk]);
      const Ok = void 0 !== fk && fk < ak,
        Ek = Ok ? {
          "--slider-selectable": (fk - tk) / (ak - tk)
        } : void 0;
      return (0, Ak.jsxs)("div", {
        className: dk()("SettingBox SettingsSliderDiv", {
          [Jk]: Jk,
          SettingBoxDisabled: yk,
          SliderCapped: Ok
        }),
        style: Ek,
        children: [(0, Ak.jsxs)("div", {
          className: "SliderText",
          children: [`${Fk}: ${Vk?Vk(ik):ik}`, sk && (0, Ak.jsx)(Xk.b, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: sk
          })]
        }), (0, Ak.jsx)("div", {
          className: "SliderDiv",
          children: (0, Ak.jsx)(mk, {
            value: ik,
            min: tk,
            max: ak,
            step: bk,
            onChange: kk => {
              if (Ok && kk >= fk && ik === fk) return;
              const Fk = Ok ? Math.min(kk, fk) : kk;
              Lk.current = Fk, Yk(Fk), Bk(Fk)
            },
            onChangeComplete: vk && (() => {
              vk(Lk.current)
            }),
            format: Vk,
            padStep: ek,
            disabled: yk
          })
        }), Ok && Wk && (0, Ak.jsx)("div", {
          className: "SettingNote",
          children: Wk
        })]
      })
    }
    const fk = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function mk(kk) {
      var Fk;
      let {
        value: Bk,
        min: ak,
        max: Xk,
        step: bk,
        onChange: wk,
        orientation: dk,
        reverse: sk,
        setIsChanging: Vk,
        tooltip: ek,
        labels: yk,
        handleLabel: mk,
        format: Wk,
        onChangeStart: vk,
        onChangeComplete: ik,
        padStep: Yk,
        disabled: Lk = !1
      } = kk;
      const Ok = (0, Rk.useRef)(null),
        Ek = (0, Rk.useRef)(null);
      (0, Rk.useLayoutEffect)((() => {
        var kk, Fk, Bk;
        const Rk = null !== (kk = null === (Fk = Ok.current) || void 0 === Fk ? void 0 : Fk.querySelector(".rangeslider")) && void 0 !== kk ? kk : null;
        null === Rk || void 0 === Rk || Rk.setAttribute("data-pad-slider", ""), null === Rk || void 0 === Rk || Rk.setAttribute("data-pad-focusable", ""), null === Rk || void 0 === Rk || null === (Bk = Rk.querySelector(".rangeslider__handle")) || void 0 === Bk || Bk.setAttribute("data-pad-slider-handle", ""), Ek.current = Rk
      }), []), (0, Rk.useLayoutEffect)((() => {
        var kk, Fk;
        Lk ? null === (kk = Ek.current) || void 0 === kk || kk.setAttribute("aria-disabled", "true") : null === (Fk = Ek.current) || void 0 === Fk || Fk.removeAttribute("aria-disabled")
      }), [Lk]);
      const Sk = (null !== (Fk = String(bk).split(".")[1]) && void 0 !== Fk ? Fk : "").length,
        Nk = kk => {
          const Fk = Number((Math.round((kk - ak) / bk) * bk + ak).toFixed(Sk));
          return Math.min(Xk, Math.max(ak, Fk))
        },
        Hk = (0, Rk.useRef)(ik);
      Hk.current = ik, (0, Rk.useEffect)((() => {
        const kk = Ok.current;
        if (!kk) return;
        const Fk = kk => {
          var Fk;
          fk.has(kk.key) && (null === (Fk = Hk.current) || void 0 === Fk || Fk.call(Hk))
        };
        return kk.addEventListener("keyup", Fk), () => {
          kk.removeEventListener("keyup", Fk)
        }
      }), []);
      const uk = (0, Rk.useRef)(!1);
      return (0, Jk.i)(Ek, {
        adjust: kk => {
          if (Lk) return;
          const Fk = null !== Yk && void 0 !== Yk ? Yk : Math.max(bk, Math.round((Xk - ak) / 20 / bk) * bk),
            Rk = Nk(Bk + kk * Fk * (sk ? -1 : 1));
          Rk !== Bk && (null === vk || void 0 === vk || vk(), wk(Rk), null === ik || void 0 === ik || ik())
        },
        setFraction: kk => {
          if (Lk) return;
          const Fk = Nk(ak + (sk ? 1 - kk : kk) * (Xk - ak));
          Fk !== Bk && (uk.current || (uk.current = !0, null === vk || void 0 === vk || vk()), wk(Fk))
        },
        endDrag: () => {
          uk.current && (uk.current = !1, null === ik || void 0 === ik || ik())
        }
      }), (0, Ak.jsx)("div", {
        ref: Ok,
        style: {
          display: "contents"
        },
        children: (0, Ak.jsx)(tk.d, {
          value: Bk,
          min: ak,
          max: Xk,
          step: bk,
          onChange: wk,
          orientation: dk,
          reverse: sk,
          tooltip: ek,
          labels: yk,
          handleLabel: mk,
          format: Wk,
          onChangeStart: () => {
            null === vk || void 0 === vk || vk(), null === Vk || void 0 === Vk || Vk(!0)
          },
          onChangeComplete: () => {
            null === Vk || void 0 === Vk || Vk(!1), null === ik || void 0 === ik || ik()
          }
        })
      })
    }
    async function Wk() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      const Fk = sk.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: "",
        unlockPointerKey: kk
      });
      !0 === await Fk.getResult() && (0, Vk.reloadBloxd)()
    }

    function vk(kk) {
      let {
        label: Fk,
        options: Bk,
        value: Rk,
        onChange: tk,
        circleInfoText: ak
      } = kk;
      return (0, Ak.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, Ak.jsxs)("div", {
          className: "SliderText",
          children: [Fk, ak && (0, Ak.jsx)(Xk.b, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: ak
          })]
        }), (0, Ak.jsx)(bk.b, {
          ariaLabel: Fk,
          options: Bk,
          value: Rk,
          onChange: tk
        })]
      })
    }
  },
  6370: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      default: () => lk
    });
    var Rk = Bk(61),
      tk = Bk(1473),
      ak = Bk(6253),
      Xk = Bk(1173),
      bk = Bk(291),
      wk = Bk(1288),
      dk = Bk(1459),
      sk = Bk(1389),
      Vk = Bk(1312),
      Jk = Bk(2436),
      Ak = Bk(2597),
      ek = Bk(4291),
      yk = Bk(1096),
      fk = Bk(1441),
      mk = Bk(98),
      Wk = Bk(1149);
    const vk = Bk.p + "static/media/bloxdhubLogo.6a6c367af2ad6e6f1eb3.webp";
    var ik = Bk(1020),
      Yk = Bk.n(ik),
      Lk = Bk(1028),
      Ok = Bk(1300),
      Ek = Bk(6245),
      Sk = Bk(1069);
    const Nk = (0, Rk.lazy)((() => Promise.all([Bk.e(105), Bk.e(74), Bk.e(131), Bk.e(125), Bk.e(124)]).then((() => Bk(6286))).then((kk => ({
      default: kk.ShaderPackPublishForm
    })))));

    function Hk(kk) {
      let {
        details: Fk,
        owner: Bk,
        onChanged: tk
      } = kk;
      const {
        t: Xk
      } = (0, Wk.x)(), bk = (0, dk.useNavigatePreserveSearch)(), {
        userContext: Vk
      } = (0, yk.e)(), [Jk, Ak] = (0, Rk.useState)(!1), [ek, mk] = (0, Rk.useState)(null), [vk, ik] = (0, Rk.useState)(!1), {
        packId: Hk,
        name: uk,
        description: Mk,
        live: gk
      } = Fk;
      async function Uk(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tk;
        Ak(!0), mk(null);
        try {
          await kk(), Fk()
        } catch (Bk) {
          console.error("Failed to change a shader pack", Bk), mk((0, Ek.v)(Bk, Xk, "shaderPackListing:ownerActionFailed"))
        } finally {
          Ak(!1)
        }
      }
      const ck = (0, Ek.q)(Vk);
      return (0, Sk.jsxs)("section", {
        className: "ShaderPackOwnerPanel",
        children: [(0, Sk.jsx)("h2", {
          className: "ShaderPackSectionTitle",
          children: Xk("general:manage")
        }), (0, Ek.U)(Bk, !(null === gk || void 0 === gk || !gk.renderId), Date.now(), Xk).map((kk => (0, Sk.jsxs)("div", {
          className: Yk()("ShaderPackOwnerNotice", {
            Warning: "warning" === kk.tone
          }),
          children: [(0, Sk.jsx)(Lk.d, {
            name: "warning" === kk.tone ? "triangle-exclamation" : "circle-info"
          }), (0, Sk.jsxs)("div", {
            children: [kk.text, kk.detail && (0, Sk.jsx)("pre", {
              className: "ShaderPackOwnerNoticeDetail",
              children: kk.detail
            })]
          })]
        }, kk.text))), Fk.ban && (0, Sk.jsxs)("div", {
          className: "ShaderPackOwnerNotice Warning",
          children: [(0, Sk.jsx)(Lk.d, {
            name: "ban"
          }), (0, Sk.jsxs)("div", {
            children: ["Banned by ", Fk.ban.byName, " on ", new Date(Fk.ban.at).toLocaleString()]
          })]
        }), ek && (0, Sk.jsx)("div", {
          className: "ShaderPackOwnerError",
          children: ek
        }), (0, Sk.jsxs)("div", {
          className: "ShaderPackOwnerActions",
          children: [(0, Sk.jsxs)(sk.O, {
            disabled: Jk,
            onClick: () => {
              !async function() {
                const kk = await Ok.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:renameTitle",
                  initialValue: uk,
                  maxLength: ak.D,
                  submitText: "general:save",
                  validate: kk => kk.trim().length < ak.G ? Xk("shaderPackListing:nameTooShort", {
                    min: String(ak.G)
                  }) : null
                }).getResult();
                "notificationTornDown" !== kk && "submit" === (null === kk || void 0 === kk ? void 0 : kk.type) && kk.value.trim() !== uk && await Uk((() => fk.b.updateShaderPack(Vk, {
                  packId: Hk,
                  name: kk.value.trim()
                })))
              }()
            },
            children: [(0, Sk.jsx)(Lk.d, {
              name: "pen"
            }), " ", Xk("shaderPackListing:rename")]
          }), (0, Sk.jsxs)(sk.O, {
            disabled: Jk,
            onClick: () => {
              !async function() {
                const kk = await Ok.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:editDescription",
                  initialValue: Mk,
                  maxLength: ak.p,
                  multiline: !0,
                  allowEmptySubmit: !0,
                  submitText: "general:save"
                }).getResult();
                "notificationTornDown" !== kk && "submit" === (null === kk || void 0 === kk ? void 0 : kk.type) && kk.value.trim() !== Mk && await Uk((() => fk.b.updateShaderPack(Vk, {
                  packId: Hk,
                  description: kk.value.trim()
                })))
              }()
            },
            children: [(0, Sk.jsx)(Lk.d, {
              name: "file-lines"
            }), " ", Xk("shaderPackListing:editDescription")]
          }), (0, Sk.jsxs)(sk.O, {
            disabled: Jk || Bk.isBanned && !Bk.listed,
            onClick: () => {
              Uk((() => fk.b.updateShaderPack(Vk, {
                packId: Hk,
                listed: !Bk.listed
              })))
            },
            children: [(0, Sk.jsx)(Lk.d, {
              name: Bk.listed ? "eye-slash" : "eye"
            }), " ", Xk(Bk.listed ? "shaderPackListing:unlist" : "shaderPackListing:relist")]
          }), !Bk.isBanned && (0, Sk.jsxs)(sk.g, {
            disabled: Jk,
            onClick: () => {
              ik(!vk)
            },
            children: [(0, Sk.jsx)(Lk.d, {
              name: "upload"
            }), " ", Xk("shaderPackListing:uploadVersion")]
          }), (0, Sk.jsxs)(sk.K, {
            disabled: Jk || Bk.isBanned,
            onClick: () => {
              !async function() {
                !0 === await Ok.NotificationProvider.showPromptPopup({
                  title: "shaderPackListing:deleteTitle",
                  subtitle: "shaderPackListing:deleteSubtitle",
                  confirmText: "general:delete",
                  cancelText: "general:cancel",
                  destructive: !0
                }).getResult() && await Uk((() => fk.b.deleteShaderPack(Vk, Hk)), (() => {
                  bk(`${Ek.S}?section=mine`, {
                    replace: !0
                  })
                }))
              }()
            },
            children: [(0, Sk.jsx)(Lk.d, {
              name: "trash-can"
            }), " ", Xk("general:delete")]
          }), ck && (0, Sk.jsxs)(sk.K, {
            disabled: Jk,
            onClick: () => {
              Uk((() => fk.b.setShaderPackBanned(Vk, Hk, !Bk.isBanned)))
            },
            children: [(0, Sk.jsx)(Lk.d, {
              name: Bk.isBanned ? "circle-check" : "ban"
            }), " ", Bk.isBanned ? "Unban" : "Ban"]
          })]
        }), vk && (0, Sk.jsx)(Rk.Suspense, {
          fallback: (0, Sk.jsx)(wk.b, {}),
          children: (0, Sk.jsx)(Nk, {
            existing: {
              packId: Hk,
              name: uk,
              description: Mk
            },
            onPublished: () => {
              ik(!1), tk()
            }
          })
        })]
      })
    }
    var uk = Bk(67),
      Mk = Bk(1808),
      gk = Bk(1230),
      Uk = Bk(4717),
      ck = Bk(1154),
      Gk = Bk(6264),
      Tk = Bk(6260),
      rk = Bk(6273);

    function Dk(kk) {
      let {
        item: Fk
      } = kk;
      const {
        t: Bk
      } = (0, Wk.x)(), [tk] = (0, Gk.g)(), [Xk, bk] = (0, Rk.useState)(tk), [wk, dk] = (0, Rk.useState)(!1), [sk, Vk] = (0, Rk.useState)(!1), {
        s3Url: Jk
      } = ck.clientSideServerUrls, {
        width: Ak,
        height: ek
      } = ak.t.large, yk = (0, ak.x)(Jk, Fk, Xk, "large"), {
        renderVersion: fk
      } = Fk;
      return (0, Sk.jsxs)("div", {
        className: "ShaderPackPreviews",
        children: [(0, Sk.jsx)(rk.d, {
          selected: Xk,
          onSelect: kk => {
            bk(kk), dk(!1)
          },
          imageUrl: kk => (0, ak.x)(Jk, Fk, kk, "thumb")
        }), (0, Sk.jsxs)("div", {
          className: "ShaderPackPreviewStage",
          children: [!wk && (0, Sk.jsxs)("button", {
            type: "button",
            className: "ShaderPackPreviewMain",
            title: null === fk ? void 0 : Bk("shaderPackListing:fullSize"),
            disabled: null === fk,
            onClick: () => {
              Vk(!0)
            },
            children: [(0, Sk.jsx)("img", {
              src: yk,
              width: Ak,
              height: ek,
              alt: Bk(Ek.ab[Xk]),
              draggable: !1
            }), (0, Sk.jsx)(Tk.b, {
              item: Fk
            })]
          }), !wk && null !== fk && (0, Sk.jsxs)(qk, {
            side: "Right",
            onClick: () => {
              dk(!0)
            },
            children: [(0, Sk.jsx)(Lk.d, {
              name: "arrows-left-right"
            }), " ", Bk("shaderPackListing:compare")]
          }), wk && null !== fk && (0, Sk.jsx)(hk, {
            item: Fk,
            packUrl: yk,
            baselineUrl: (0, ak.n)(Jk, fk, Xk, "large")
          }), wk && (0, Sk.jsx)(qk, {
            side: "Left",
            onClick: () => {
              dk(!1)
            },
            children: Bk("shaderPackListing:withPack")
          }), wk && (0, Sk.jsx)(qk, {
            side: "Right",
            onClick: () => {
              dk(!1)
            },
            children: Bk("shaderPackListing:withoutPack")
          })]
        }), sk && (0, Sk.jsx)(zk, {
          fullUrl: (0, ak.x)(Jk, Fk, Xk, "full"),
          largeUrl: yk,
          alt: Bk(Ek.ab[Xk]),
          onClose: () => {
            Vk(!1)
          }
        })]
      })
    }

    function zk(kk) {
      let {
        fullUrl: Fk,
        largeUrl: Bk,
        alt: tk,
        onClose: ak
      } = kk;
      const Xk = (0, Rk.useRef)(null);
      return (0, gk.s)("popup", Xk, ak), (0, Rk.useEffect)((() => {
        function kk(kk) {
          "Escape" === kk.key && (kk.stopPropagation(), ak())
        }
        return window.addEventListener("keydown", kk, !0), () => {
          window.removeEventListener("keydown", kk, !0)
        }
      }), [ak]), (0, uk.createPortal)((0, Sk.jsxs)("div", {
        ref: Xk,
        className: "ShaderPackFullSize",
        onClick: ak,
        children: [(0, Sk.jsx)("img", {
          className: "ShaderPackFullSizeImage",
          src: Fk,
          alt: tk,
          draggable: !1,
          style: {
            backgroundImage: `url(${Bk})`
          }
        }), (0, Sk.jsx)(sk.k, {
          className: "ShaderPackFullSizeClose",
          onClick: ak
        })]
      }), document.body)
    }
    const Pk = 5;

    function hk(kk) {
      let {
        item: Fk,
        packUrl: Bk,
        baselineUrl: tk
      } = kk;
      const {
        t: Xk
      } = (0, Wk.x)(), [bk, wk] = (0, Rk.useState)(50), dk = (0, Rk.useRef)(!1), sk = (0, Rk.useRef)(null), {
        width: Vk,
        height: Jk
      } = ak.t.large;

      function Ak(kk) {
        wk((Fk => (0, Mk.e)(Fk + kk, 0, 100)))
      }

      function ek(kk) {
        const Fk = kk.currentTarget.getBoundingClientRect();
        wk((0, Mk.e)((kk.clientX - Fk.left) / Fk.width * 100, 0, 100))
      }
      return (0, Uk.i)(sk, {
        adjust: kk => {
          Ak(kk * Pk)
        },
        setFraction: kk => {
          wk(100 * kk)
        },
        endDrag: () => {}
      }), (0, Sk.jsxs)("div", {
        ref: sk,
        className: "ShaderPackCompare",
        "data-pad-slider": "",
        "data-pad-focusable": "",
        role: "slider",
        tabIndex: 0,
        "aria-label": Xk("shaderPackListing:compare"),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(bk),
        style: {
          "--split": `${bk}%`
        },
        onKeyDown: function(kk) {
          const Fk = "ArrowLeft" === kk.key ? -Pk : "ArrowRight" === kk.key ? Pk : 0;
          0 !== Fk && (kk.preventDefault(), Ak(Fk))
        },
        onPointerDown: kk => {
          dk.current = !0, kk.currentTarget.setPointerCapture(kk.pointerId), ek(kk)
        },
        onPointerMove: kk => {
          dk.current && ek(kk)
        },
        onPointerUp: () => {
          dk.current = !1
        },
        onPointerCancel: () => {
          dk.current = !1
        },
        children: [(0, Sk.jsx)("img", {
          className: "ShaderPackCompareBaseline",
          src: tk,
          width: Vk,
          height: Jk,
          alt: "",
          draggable: !1,
          style: {
            backgroundImage: `url(${Bk})`
          }
        }), (0, Sk.jsx)("div", {
          className: "ShaderPackCompareLine"
        }), (0, Sk.jsx)("img", {
          className: "ShaderPackComparePack",
          src: Bk,
          width: Vk,
          height: Jk,
          alt: "",
          draggable: !1
        }), (0, Sk.jsx)(Tk.b, {
          item: Fk,
          className: "ShaderPackCompareNotice"
        })]
      })
    }

    function qk(kk) {
      let {
        side: Fk,
        onClick: Bk,
        children: Rk
      } = kk;
      return (0, Sk.jsx)("button", {
        type: "button",
        className: `ShaderPackStageButton ${Fk}`,
        onClick: Bk,
        children: (0, Sk.jsx)("span", {
          className: "ShaderPackStageButtonFace SmallTextBold",
          children: Rk
        })
      })
    }
    var Ck = Bk(4688),
      Zk = Bk(267),
      pk = Bk(6361);
    const Kk = {
      compiler: "shaderPack:compilerUnavailable",
      download: "shaderPackListing:useDownloadFailed",
      apiVersion: "shaderPackListing:useOtherApiVersion",
      invalid: "shaderPackListing:useInvalid",
      errors: "shaderPackListing:useFailsHere",
      save: "shaderPack:saveFailed"
    };

    function xk(kk) {
      const {
        userContext: Fk
      } = (0, yk.e)(), [tk, ak] = (0, Rk.useState)(null), [Xk, bk] = (0, Rk.useState)(!1), [wk, dk] = (0, Rk.useState)(!1), [sk, Vk] = (0, Rk.useState)(null), Jk = null === kk || void 0 === kk ? void 0 : kk.packId, Ak = null === kk || void 0 === kk ? void 0 : kk.sourceHash;
      return (0, Rk.useEffect)((() => {
        if (bk(!1), Vk(null), void 0 === Jk) return;
        let kk = !1;
        return Promise.all([(0, mk.hasUsableWebGpuAdapter)(), (0, pk.e)()]).then((Fk => {
          let [Bk, Rk] = Fk;
          var tk;
          kk || (ak(Bk), bk((null === Rk || void 0 === Rk || null === (tk = Rk.listing) || void 0 === tk ? void 0 : tk.packId) === Jk && Rk.listing.sourceHash === Ak))
        })).catch((Fk => {
          console.error("Failed to check whether this shader pack can be used", Fk), kk || ak(!1)
        })), () => {
          kk = !0
        }
      }), [Jk, Ak]), {
        webGpuUsable: tk,
        inUse: Xk,
        busy: wk,
        errorKey: sk,
        use: () => {
          null !== kk && async function(kk) {
            dk(!0), Vk(null);
            try {
              const {
                installListedShaderPack: Rk
              } = await Promise.all([Bk.e(74), Bk.e(131), Bk.e(126)]).then((() => Bk(39910))), tk = await Rk({
                packId: kk.packId,
                sourceHash: kk.sourceHash,
                name: kk.name,
                ownerName: kk.ownerName,
                description: kk.description
              });
              if ("failed" === tk.kind) return void Vk(Kk[tk.reason]);
              bk(!0), fk.b.recordShaderPackDownload(Fk, kk.packId).catch((kk => {
                console.error("Failed to count a shader pack's download", kk)
              })), (0, Ck.m)()
            } catch (Rk) {
              console.error("Failed to use the shader pack", Rk), Vk("shaderPack:unexpectedError")
            } finally {
              dk(!1)
            }
          }(kk)
        }
      }
    }

    function jk(kk) {
      let {
        packUse: Fk
      } = kk;
      const {
        t: Bk
      } = (0, Wk.x)(), {
        webGpuUsable: Rk,
        inUse: tk,
        busy: ak,
        errorKey: Xk,
        use: bk
      } = Fk;
      return (0, Sk.jsxs)("div", {
        className: "ShaderPackUse",
        children: [(0, Sk.jsxs)(sk.o, {
          disabled: !0 !== Rk || tk,
          loading: ak,
          onClick: bk,
          children: [(0, Sk.jsx)(Lk.d, {
            name: tk ? "check" : "download"
          }), " ", Bk(tk ? "shaderPackListing:inUse" : "shaderPackListing:use")]
        }), !1 === Rk && (0, Sk.jsx)("div", {
          className: "ShaderPackUseNote",
          children: Bk((0, Zk.c)() ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), Xk && (0, Sk.jsx)("div", {
          className: "ShaderPackUseNote Error",
          children: Bk(Xk)
        })]
      })
    }

    function lk() {
      var kk;
      const {
        t: Fk
      } = (0, Wk.x)(), Bk = (0, dk.useNavigatePreserveSearch)(), {
        packId: ak
      } = (0, tk.x)(), {
        userContext: Xk,
        isUserContextUpdating: bk
      } = (0, yk.e)(), [Vk, Jk] = (0, Rk.useState)(null), [Ak, mk] = (0, Rk.useState)(null), [vk, ik] = (0, Rk.useState)(0), Yk = (0, Rk.useRef)(0);

      function Lk() {
        var kk;
        null !== (kk = (0, dk.getPreviousLocation)()) && void 0 !== kk && kk.startsWith(Ek.S) ? Bk(-1) : Bk(Ek.S)
      }(0, ek.d)(Lk), (0, Gk.d)(), (0, Rk.useEffect)((() => {
        if (bk || void 0 === ak) return;
        const kk = ++Yk.current;
        mk(null), fk.b.getShaderPack(Xk, ak).then((Fk => {
          Yk.current === kk && Jk(Fk)
        })).catch((Fk => {
          Yk.current === kk && (console.error("Failed to get the shader pack", Fk), Jk(null), mk({
            error: Fk
          }))
        }))
      }), [ak, Xk, bk, vk]);
      const Ok = () => {
          ik((kk => kk + 1))
        },
        Nk = (null === Vk || void 0 === Vk ? void 0 : Vk.packId) === ak ? Vk : null,
        uk = (0, Gk.h)(),
        Mk = xk(null !== (kk = null === Nk || void 0 === Nk ? void 0 : Nk.live) && void 0 !== kk ? kk : null),
        gk = null !== Nk && void 0 !== Nk && Nk.live ? (0, Sk.jsx)(nk, {
          item: Nk.live,
          favourites: uk,
          packUse: Mk
        }) : null;
      return (0, Sk.jsxs)("article", {
        className: "ShaderPackInformation AnimFadeIn",
        children: [(0, Sk.jsx)(sk.c, {
          onClick: Lk,
          children: Fk("shaderPackListing:backToPacks")
        }), null === Nk && null === Ak && (0, Sk.jsx)("div", {
          className: "ShaderPackInformationMessage",
          children: (0, Sk.jsx)(wk.b, {})
        }), null !== Ak && (0, Sk.jsxs)("div", {
          className: "ShaderPackInformationMessage",
          children: [(0, Ek.v)(Ak.error, Fk, "shaderPackListing:loadPackFailed"), (0, Sk.jsx)(sk.g, {
            onClick: Ok,
            children: Fk("general:tryAgain")
          })]
        }), null !== Nk && null === Ak && (0, Sk.jsxs)("div", {
          className: "ShaderPackInformationBody",
          children: [(0, Sk.jsxs)("header", {
            className: "ShaderPackInformationHeader",
            children: [(0, Sk.jsx)("h1", {
              className: "FullyFancyText",
              children: Nk.name
            }), gk]
          }), Nk.live && (0, Sk.jsx)(Dk, {
            item: Nk.live
          }), Nk.live && (0, Sk.jsx)(Ik, {
            item: Nk.live,
            ownerPreview: Nk.ownerPreview,
            bloxdhubSlug: Nk.bloxdhubSlug,
            actions: gk
          }), Nk.owner && (0, Sk.jsx)(Hk, {
            details: Nk,
            owner: Nk.owner,
            onChanged: Ok
          })]
        })]
      })
    }

    function nk(kk) {
      let {
        item: Fk,
        favourites: Bk,
        packUse: Rk
      } = kk;
      const tk = Bk.isFavourite(Fk.packId);
      return (0, Sk.jsxs)("div", {
        className: "ShaderPackInformationActions",
        children: [mk.featureFlags.settings.canUseShaderPacks && (0, Sk.jsx)(jk, {
          packUse: Rk
        }), (0, Sk.jsx)(sk.y, {
          className: "ShaderPackInformationLike",
          onClick: () => {
            Bk.toggle(Fk.packId)
          },
          isLiked: !0 === tk,
          isLoading: null === tk
        })]
      })
    }

    function Ik(kk) {
      let {
        item: Fk,
        ownerPreview: Bk,
        bloxdhubSlug: Rk,
        actions: tk
      } = kk;
      const {
        t: bk
      } = (0, Wk.x)(), wk = (0, Ak.o)(), sk = null === Rk ? null : (0, ak.h)(Rk);
      return (0, Sk.jsxs)("div", {
        className: "ShaderPackFacts",
        children: [Fk.description && (0, Sk.jsx)("p", {
          className: "ShaderPackDescription",
          children: Fk.description
        }), (0, Sk.jsxs)("div", {
          className: "ShaderPackFeatureList",
          children: [(null !== Bk || null !== sk) && (0, Sk.jsx)("div", {
            className: "ShaderPackAuthor",
            children: null !== Bk ? (0, Sk.jsxs)(Sk.Fragment, {
              children: [(0, Sk.jsx)(Jk.d, {
                playerSocialPreview: Bk,
                showLocation: !1,
                linkToProfile: !0
              }), null !== sk && (0, Sk.jsx)("a", {
                className: "ShaderPackBloxdhubLogo",
                href: sk,
                target: "_blank",
                rel: "noopener noreferrer",
                children: (0, Sk.jsx)("img", {
                  src: vk,
                  alt: ak.e
                })
              })]
            }) : (0, Sk.jsxs)("a", {
              className: "ShaderPackBloxdhubName",
              href: sk,
              target: "_blank",
              rel: "noopener noreferrer",
              children: [ak.e, (0, Sk.jsx)("img", {
                src: vk,
                alt: ""
              })]
            })
          }), Ek.z.filter((kk => Fk.features.includes(kk))).map((kk => (0, Sk.jsx)(dk.LinkPreserveSearch, {
            className: "ShaderPackFeature",
            to: (0, Ek.K)(kk),
            children: bk(Ek.L[kk])
          }, kk)))]
        }), tk, (0, Sk.jsxs)("dl", {
          className: "ShaderPackFactList",
          children: [(0, Sk.jsxs)("div", {
            children: [(0, Sk.jsx)("dt", {
              children: bk("shaderPackListing:downloads")
            }), (0, Sk.jsx)("dd", {
              children: (0, Xk.R)(Fk.downloads)
            })]
          }), (0, Sk.jsx)(Qk, {
            label: bk("shaderPackListing:updated"),
            time: Fk.listedUpdatedAt,
            now: wk
          }), (0, Sk.jsx)(Qk, {
            label: bk("shaderPackListing:created"),
            time: Fk.publishedAt,
            now: wk
          }), null !== Fk.gpuCost && (0, Sk.jsxs)("div", {
            children: [(0, Sk.jsx)("dt", {
              children: bk("shaderPackListing:lag")
            }), (0, Sk.jsx)("dd", {
              children: bk("shaderPackListing:lagPercent", {
                percent: String((0, Ek.O)(Fk.gpuCost))
              })
            })]
          }), (0, Sk.jsxs)("div", {
            children: [(0, Sk.jsx)("dt", {
              children: bk("shaderPackListing:size")
            }), (0, Sk.jsx)("dd", {
              children: bk("shaderPackListing:sizeValue", {
                kilobytes: String((0, Ek.M)(Fk.sourceBytes))
              })
            })]
          }), (0, Sk.jsxs)("div", {
            children: [(0, Sk.jsx)("dt", {
              children: bk("shaderPackListing:files")
            }), (0, Sk.jsx)("dd", {
              children: Fk.fileCount
            })]
          })]
        })]
      })
    }

    function Qk(kk) {
      let {
        label: Fk,
        time: Bk,
        now: Rk
      } = kk;
      const {
        t: tk,
        selectedLanguage: ak
      } = (0, Wk.x)(), Xk = new Date(Bk);
      let wk = Xk.toLocaleDateString();
      if (Rk - Bk <= 30 * bk.f) {
        const kk = (0, Wk.j)(ak.code, "shaderPackListing:timeAgo");
        wk = tk("shaderPackListing:timeAgo", {
          time: (0, bk.gb)(kk, Bk, Rk)
        })
      }
      return (0, Sk.jsx)(Vk.d, {
        tooltipInner: Xk.toLocaleString(),
        children: (0, Sk.jsxs)("div", {
          children: [(0, Sk.jsx)("dt", {
            children: Fk
          }), (0, Sk.jsx)("dd", {
            children: wk
          })]
        })
      })
    }
  },
  4712: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Xk
    });
    var Rk = Bk(1020),
      tk = Bk.n(Rk),
      ak = Bk(1069);

    function Xk(kk) {
      let {
        options: Fk,
        value: Bk,
        onChange: Rk,
        ariaLabel: Xk,
        className: bk,
        reselectable: wk = !1,
        keepsFocus: dk = !1
      } = kk;
      return (0, ak.jsx)("div", {
        className: tk()("SegmentedToggle", bk),
        role: "group",
        "aria-label": Xk,
        children: Fk.map((kk => {
          const Fk = kk.value === Bk;
          return (0, ak.jsx)("button", {
            type: "button",
            "aria-pressed": Fk,
            "aria-label": kk.ariaLabel,
            title: kk.ariaLabel,
            className: tk()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: Fk
            }),
            onMouseDown: dk ? kk => {
              kk.preventDefault()
            } : void 0,
            onClick: () => {
              Fk && !wk || Rk(kk.value)
            },
            children: kk.label
          }, kk.value)
        }))
      })
    }
  },
  4717: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => ak,
      i: () => Xk
    });
    var Rk = Bk(61);
    const tk = new WeakMap,
      ak = kk => {
        var Fk;
        const Bk = kk.closest("[data-pad-slider]");
        return Bk && null !== (Fk = tk.get(Bk)) && void 0 !== Fk ? Fk : null
      },
      Xk = (kk, Fk) => {
        const Bk = (0, Rk.useRef)(Fk);
        Bk.current = Fk, (0, Rk.useEffect)((() => {
          if (kk.current) return ((kk, Fk) => (tk.set(kk, Fk), () => {
            tk.get(kk) === Fk && tk.delete(kk)
          }))(kk.current, {
            adjust: kk => {
              Bk.current.adjust(kk)
            },
            setFraction: kk => {
              Bk.current.setFraction(kk)
            },
            endDrag: () => {
              Bk.current.endDrag()
            }
          })
        }), [kk])
      }
  },
  6361: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => tk,
      e: () => ak
    });
    var Rk = Bk(42);
    const tk = "shaderPack";
    async function ak() {
      var kk;
      let Fk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (kk = await Rk.f.getItem(tk, Fk)) && void 0 !== kk ? kk : null
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);