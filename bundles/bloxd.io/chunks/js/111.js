export const id = 111;
export const ids = [111];
export const modules = {
  4926: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Uk,
      i: () => yk,
      m: () => Hk,
      q: () => pk
    });
    var Dk = ik(60),
      fk = ik(4935),
      Sk = ik(4319),
      bk = ik(1345),
      rk = ik(4946),
      Pk = ik(1021),
      mk = ik.n(Pk),
      Mk = ik(1333),
      Kk = ik(1688),
      xk = ik(4951),
      nk = ik(1066);

    function Uk(kk) {
      let {
        label: ek,
        onClick: ik,
        checked: Dk,
        circleInfoText: fk,
        className: rk,
        disabled: Pk,
        note: Mk
      } = kk;
      return (0, nk.jsxs)("div", {
        "aria-disabled": Pk || void 0,
        "data-pad-focusable": !0,
        className: mk()("SettingBox CheckboxContainer", {
          [rk]: rk,
          SettingBoxDisabled: Pk
        }),
        onClick: () => {
          Pk || ik(!Dk)
        },
        children: [(0, nk.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, nk.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, nk.jsx)(Sk.d, {
              className: "SettingsCheckbox",
              checked: Dk,
              disabled: Pk,
              onChange: () => {}
            })
          }), (0, nk.jsxs)("div", {
            className: "CheckboxText",
            children: [ek, fk && (0, nk.jsx)("span", {
              onClick: kk => kk.stopPropagation(),
              children: (0, nk.jsx)(bk.e, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: fk
              })
            })]
          })]
        }), Mk && (0, nk.jsx)("div", {
          className: "SettingNote",
          children: Mk
        })]
      })
    }

    function Hk(kk) {
      let {
        name: ek,
        onChange: ik,
        min: fk,
        max: Sk,
        step: rk,
        initValue: Pk,
        circleInfoText: Mk,
        format: Kk,
        className: xk,
        padStep: Uk,
        disabled: Hk = !1,
        selectableMax: wk,
        cappedNote: pk,
        onChangeComplete: yk
      } = kk;
      const [Yk, Lk] = (0, Dk.useState)(Pk), Ck = (0, Dk.useRef)(Pk);
      (0, Dk.useEffect)((() => {
        Ck.current = Pk, Lk(Pk)
      }), [Pk]);
      const Ak = void 0 !== wk && wk < Sk,
        jk = Ak ? {
          "--slider-selectable": (wk - fk) / (Sk - fk)
        } : void 0;
      return (0, nk.jsxs)("div", {
        className: mk()("SettingBox SettingsSliderDiv", {
          [xk]: xk,
          SettingBoxDisabled: Hk,
          SliderCapped: Ak
        }),
        style: jk,
        children: [(0, nk.jsxs)("div", {
          className: "SliderText",
          children: [`${ek}: ${Kk?Kk(Yk):Yk}`, Mk && (0, nk.jsx)(bk.e, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: Mk
          })]
        }), (0, nk.jsx)("div", {
          className: "SliderDiv",
          children: (0, nk.jsx)(lk, {
            value: Yk,
            min: fk,
            max: Sk,
            step: rk,
            onChange: kk => {
              if (Ak && kk >= wk && Yk === wk) return;
              const ek = Ak ? Math.min(kk, wk) : kk;
              Ck.current = ek, Lk(ek), ik(ek)
            },
            onChangeComplete: yk && (() => {
              yk(Ck.current)
            }),
            format: Kk,
            padStep: Uk,
            disabled: Hk
          })
        }), Ak && pk && (0, nk.jsx)("div", {
          className: "SettingNote",
          children: pk
        })]
      })
    }
    const wk = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function lk(kk) {
      var ek;
      let {
        value: ik,
        min: Sk,
        max: bk,
        step: rk,
        onChange: Pk,
        orientation: mk,
        reverse: Mk,
        setIsChanging: Kk,
        tooltip: Uk,
        labels: Hk,
        handleLabel: lk,
        format: pk,
        onChangeStart: yk,
        onChangeComplete: Yk,
        padStep: Lk,
        disabled: Ck = !1
      } = kk;
      const Ak = (0, Dk.useRef)(null),
        jk = (0, Dk.useRef)(null);
      (0, Dk.useLayoutEffect)((() => {
        var kk, ek, ik;
        const Dk = null !== (kk = null === (ek = Ak.current) || void 0 === ek ? void 0 : ek.querySelector(".rangeslider")) && void 0 !== kk ? kk : null;
        null === Dk || void 0 === Dk || Dk.setAttribute("data-pad-slider", ""), null === Dk || void 0 === Dk || Dk.setAttribute("data-pad-focusable", ""), null === Dk || void 0 === Dk || null === (ik = Dk.querySelector(".rangeslider__handle")) || void 0 === ik || ik.setAttribute("data-pad-slider-handle", ""), jk.current = Dk
      }), []), (0, Dk.useLayoutEffect)((() => {
        var kk, ek;
        Ck ? null === (kk = jk.current) || void 0 === kk || kk.setAttribute("aria-disabled", "true") : null === (ek = jk.current) || void 0 === ek || ek.removeAttribute("aria-disabled")
      }), [Ck]);
      const sk = (null !== (ek = String(rk).split(".")[1]) && void 0 !== ek ? ek : "").length,
        dk = kk => {
          const ek = Number((Math.round((kk - Sk) / rk) * rk + Sk).toFixed(sk));
          return Math.min(bk, Math.max(Sk, ek))
        },
        Vk = (0, Dk.useRef)(Yk);
      Vk.current = Yk, (0, Dk.useEffect)((() => {
        const kk = Ak.current;
        if (!kk) return;
        const ek = kk => {
          var ek;
          wk.has(kk.key) && (null === (ek = Vk.current) || void 0 === ek || ek.call(Vk))
        };
        return kk.addEventListener("keyup", ek), () => {
          kk.removeEventListener("keyup", ek)
        }
      }), []);
      const Fk = (0, Dk.useRef)(!1);
      return (0, xk.f)(jk, {
        adjust: kk => {
          if (Ck) return;
          const ek = null !== Lk && void 0 !== Lk ? Lk : Math.max(rk, Math.round((bk - Sk) / 20 / rk) * rk),
            Dk = dk(ik + kk * ek * (Mk ? -1 : 1));
          Dk !== ik && (null === yk || void 0 === yk || yk(), Pk(Dk), null === Yk || void 0 === Yk || Yk())
        },
        setFraction: kk => {
          if (Ck) return;
          const ek = dk(Sk + (Mk ? 1 - kk : kk) * (bk - Sk));
          ek !== ik && (Fk.current || (Fk.current = !0, null === yk || void 0 === yk || yk()), Pk(ek))
        },
        endDrag: () => {
          Fk.current && (Fk.current = !1, null === Yk || void 0 === Yk || Yk())
        }
      }), (0, nk.jsx)("div", {
        ref: Ak,
        style: {
          display: "contents"
        },
        children: (0, nk.jsx)(fk.e, {
          value: ik,
          min: Sk,
          max: bk,
          step: rk,
          onChange: Pk,
          orientation: mk,
          reverse: Mk,
          tooltip: Uk,
          labels: Hk,
          handleLabel: lk,
          format: pk,
          onChangeStart: () => {
            null === yk || void 0 === yk || yk(), null === Kk || void 0 === Kk || Kk(!0)
          },
          onChangeComplete: () => {
            null === Kk || void 0 === Kk || Kk(!1), null === Yk || void 0 === Yk || Yk()
          }
        })
      })
    }
    async function pk() {
      const kk = Mk.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await kk.getResult() && (0, Kk.reloadBloxd)()
    }

    function yk(kk) {
      let {
        label: ek,
        options: ik,
        value: Dk,
        onChange: fk,
        circleInfoText: Sk
      } = kk;
      return (0, nk.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, nk.jsxs)("div", {
          className: "SliderText",
          children: [ek, Sk && (0, nk.jsx)(bk.e, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: Sk
          })]
        }), (0, nk.jsx)(rk.b, {
          ariaLabel: ek,
          options: ik,
          value: Dk,
          onChange: fk
        })]
      })
    }
  },
  6513: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      default: () => Gk
    });
    var Dk = ik(60),
      fk = ik(1496),
      Sk = ik(6396),
      bk = ik(1207),
      rk = ik(314),
      Pk = ik(1327),
      mk = ik(1479),
      Mk = ik(1410),
      Kk = ik(1345),
      xk = ik(2540),
      nk = ik(2671),
      Uk = ik(4496),
      Hk = ik(1095),
      wk = ik(1459),
      lk = ik(99),
      pk = ik(1172);
    const yk = ik.p + "static/media/bloxdhubLogo.6a6c367af2ad6e6f1eb3.webp";
    var Yk = ik(1021),
      Lk = ik.n(Yk),
      Ck = ik(1033),
      Ak = ik(1333),
      jk = ik(6393),
      sk = ik(1066);
    const dk = (0, Dk.lazy)((() => Promise.all([ik.e(107), ik.e(77), ik.e(133), ik.e(132), ik.e(112), ik.e(397)]).then((() => ik(6432))).then((kk => ({
      default: kk.ShaderPackPublishForm
    })))));

    function Vk(kk) {
      let {
        details: ek,
        owner: ik,
        onChanged: fk
      } = kk;
      const {
        t: bk
      } = (0, pk.D)(), rk = (0, mk.useNavigatePreserveSearch)(), {
        userContext: Kk
      } = (0, Hk.d)(), [xk, nk] = (0, Dk.useState)(!1), [Uk, lk] = (0, Dk.useState)(null), [yk, Yk] = (0, Dk.useState)(!1), {
        packId: Vk,
        name: Fk,
        description: uk,
        live: qk
      } = ek;
      async function Ik(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : fk;
        nk(!0), lk(null);
        try {
          await kk(), ek()
        } catch (ik) {
          console.error("Failed to change a shader pack", ik), lk((0, jk.D)(ik, bk, "shaderPackListing:ownerActionFailed"))
        } finally {
          nk(!1)
        }
      }
      const zk = (0, jk.x)(Kk);
      return (0, sk.jsxs)("section", {
        className: "ShaderPackOwnerPanel",
        children: [(0, sk.jsx)("h2", {
          className: "ShaderPackSectionTitle",
          children: bk("general:manage")
        }), (0, jk.V)(ik, !(null === qk || void 0 === qk || !qk.renderId), Date.now(), bk).map((kk => (0, sk.jsxs)("div", {
          className: Lk()("ShaderPackOwnerNotice", {
            Warning: "warning" === kk.tone
          }),
          children: [(0, sk.jsx)(Ck.d, {
            name: "warning" === kk.tone ? "triangle-exclamation" : "circle-info"
          }), (0, sk.jsxs)("div", {
            children: [kk.text, kk.detail && (0, sk.jsx)("pre", {
              className: "ShaderPackOwnerNoticeDetail",
              children: kk.detail
            })]
          })]
        }, kk.text))), ek.ban && (0, sk.jsxs)("div", {
          className: "ShaderPackOwnerNotice Warning",
          children: [(0, sk.jsx)(Ck.d, {
            name: "ban"
          }), (0, sk.jsxs)("div", {
            children: ["Banned by ", ek.ban.byName, " on ", new Date(ek.ban.at).toLocaleString()]
          })]
        }), Uk && (0, sk.jsx)("div", {
          className: "ShaderPackOwnerError",
          children: Uk
        }), (0, sk.jsxs)("div", {
          className: "ShaderPackOwnerActions",
          children: [(0, sk.jsxs)(Mk.X, {
            disabled: xk,
            onClick: () => {
              !async function() {
                const kk = await Ak.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:renameTitle",
                  initialValue: Fk,
                  maxLength: Sk.F,
                  submitText: "general:save",
                  validate: kk => kk.trim().length < Sk.G ? bk("shaderPackListing:nameTooShort", {
                    min: String(Sk.G)
                  }) : null
                }).getResult();
                "notificationTornDown" !== kk && "submit" === (null === kk || void 0 === kk ? void 0 : kk.type) && kk.value.trim() !== Fk && await Ik((() => wk.b.updateShaderPack(Kk, {
                  packId: Vk,
                  name: kk.value.trim()
                })))
              }()
            },
            children: [(0, sk.jsx)(Ck.d, {
              name: "pen"
            }), " ", bk("shaderPackListing:rename")]
          }), (0, sk.jsxs)(Mk.X, {
            disabled: xk,
            onClick: () => {
              !async function() {
                const kk = await Ak.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:editDescription",
                  initialValue: uk,
                  maxLength: Sk.v,
                  multiline: !0,
                  allowEmptySubmit: !0,
                  submitText: "general:save"
                }).getResult();
                "notificationTornDown" !== kk && "submit" === (null === kk || void 0 === kk ? void 0 : kk.type) && kk.value.trim() !== uk && await Ik((() => wk.b.updateShaderPack(Kk, {
                  packId: Vk,
                  description: kk.value.trim()
                })))
              }()
            },
            children: [(0, sk.jsx)(Ck.d, {
              name: "file-lines"
            }), " ", bk("shaderPackListing:editDescription")]
          }), (0, sk.jsxs)(Mk.X, {
            disabled: xk || ik.isBanned && !ik.listed,
            onClick: () => {
              Ik((() => wk.b.updateShaderPack(Kk, {
                packId: Vk,
                listed: !ik.listed
              })))
            },
            children: [(0, sk.jsx)(Ck.d, {
              name: ik.listed ? "eye-slash" : "eye"
            }), " ", bk(ik.listed ? "shaderPackListing:unlist" : "shaderPackListing:relist")]
          }), !ik.isBanned && (0, sk.jsxs)(Mk.f, {
            disabled: xk,
            onClick: () => {
              Yk(!yk)
            },
            children: [(0, sk.jsx)(Ck.d, {
              name: "upload"
            }), " ", bk("shaderPackListing:uploadVersion")]
          }), (0, sk.jsxs)(Mk.U, {
            disabled: xk || ik.isBanned,
            onClick: () => {
              !async function() {
                !0 === await Ak.NotificationProvider.showPromptPopup({
                  title: "shaderPackListing:deleteTitle",
                  subtitle: "shaderPackListing:deleteSubtitle",
                  confirmText: "general:delete",
                  cancelText: "general:cancel",
                  destructive: !0
                }).getResult() && await Ik((() => wk.b.deleteShaderPack(Kk, Vk)), (() => {
                  rk(`${jk.S}?section=mine`, {
                    replace: !0
                  })
                }))
              }()
            },
            children: [(0, sk.jsx)(Ck.d, {
              name: "trash-can"
            }), " ", bk("general:delete")]
          }), zk && (0, sk.jsxs)(Mk.U, {
            disabled: xk,
            onClick: () => {
              Ik((() => wk.b.setShaderPackBanned(Kk, Vk, !ik.isBanned)))
            },
            children: [(0, sk.jsx)(Ck.d, {
              name: ik.isBanned ? "circle-check" : "ban"
            }), " ", ik.isBanned ? "Unban" : "Ban"]
          })]
        }), yk && (0, sk.jsx)(Dk.Suspense, {
          fallback: (0, sk.jsx)(Pk.d, {}),
          children: (0, sk.jsx)(dk, {
            existing: {
              packId: Vk,
              name: Fk,
              description: uk
            },
            onPublished: () => {
              Yk(!1), fk()
            }
          })
        })]
      })
    }
    var Fk = ik(75),
      uk = ik(1850),
      qk = ik(1261),
      Ik = ik(4951),
      zk = ik(1177),
      Qk = ik(6406),
      vk = ik(6400),
      Ek = ik(6421);

    function hk(kk) {
      let {
        item: ek
      } = kk;
      const {
        t: ik
      } = (0, pk.D)(), [fk] = (0, Qk.h)(), [bk, rk] = (0, Dk.useState)(fk), [Pk, mk] = (0, Dk.useState)(!1), [Mk, Kk] = (0, Dk.useState)(!1), {
        s3Url: xk
      } = zk.clientSideServerUrls, {
        width: nk,
        height: Uk
      } = Sk.x.large, Hk = (0, Sk.y)(xk, ek, bk, "large"), {
        renderVersion: wk
      } = ek;
      return (0, sk.jsxs)("div", {
        className: "ShaderPackPreviews",
        children: [(0, sk.jsx)(Ek.c, {
          selected: bk,
          onSelect: kk => {
            rk(kk), mk(!1)
          },
          imageUrl: kk => (0, Sk.y)(xk, ek, kk, "thumb")
        }), (0, sk.jsxs)("div", {
          className: "ShaderPackPreviewStage",
          children: [!Pk && (0, sk.jsxs)("button", {
            type: "button",
            className: "ShaderPackPreviewMain",
            title: null === wk ? void 0 : ik("shaderPackListing:fullSize"),
            disabled: null === wk,
            onClick: () => {
              Kk(!0)
            },
            children: [(0, sk.jsx)("img", {
              src: Hk,
              width: nk,
              height: Uk,
              alt: ik(jk.ib[bk]),
              draggable: !1
            }), (0, sk.jsx)(vk.e, {
              item: ek
            })]
          }), !Pk && null !== wk && (0, sk.jsxs)(Xk, {
            side: "Right",
            onClick: () => {
              mk(!0)
            },
            children: [(0, sk.jsx)(Ck.d, {
              name: "arrows-left-right"
            }), " ", ik("shaderPackListing:compare")]
          }), Pk && null !== wk && (0, sk.jsx)(tk, {
            item: ek,
            packUrl: Hk,
            baselineUrl: (0, Sk.t)(xk, wk, bk, "large")
          }), Pk && (0, sk.jsx)(Xk, {
            side: "Left",
            onClick: () => {
              mk(!1)
            },
            children: ik("shaderPackListing:withPack")
          }), Pk && (0, sk.jsx)(Xk, {
            side: "Right",
            onClick: () => {
              mk(!1)
            },
            children: ik("shaderPackListing:withoutPack")
          })]
        }), Mk && (0, sk.jsx)(ak, {
          fullUrl: (0, Sk.y)(xk, ek, bk, "full"),
          largeUrl: Hk,
          alt: ik(jk.ib[bk]),
          onClose: () => {
            Kk(!1)
          }
        })]
      })
    }

    function ak(kk) {
      let {
        fullUrl: ek,
        largeUrl: ik,
        alt: fk,
        onClose: Sk
      } = kk;
      const bk = (0, Dk.useRef)(null);
      return (0, qk.u)("popup", bk, Sk), (0, Dk.useEffect)((() => {
        function kk(kk) {
          "Escape" === kk.key && (kk.stopPropagation(), Sk())
        }
        return window.addEventListener("keydown", kk, !0), () => {
          window.removeEventListener("keydown", kk, !0)
        }
      }), [Sk]), (0, Fk.createPortal)((0, sk.jsxs)("div", {
        ref: bk,
        className: "ShaderPackFullSize",
        onClick: Sk,
        children: [(0, sk.jsx)("img", {
          className: "ShaderPackFullSizeImage",
          src: ek,
          alt: fk,
          draggable: !1,
          style: {
            backgroundImage: `url(${ik})`
          }
        }), (0, sk.jsx)(Mk.n, {
          className: "ShaderPackFullSizeClose",
          onClick: Sk
        })]
      }), document.body)
    }
    const Wk = 5;

    function tk(kk) {
      let {
        item: ek,
        packUrl: ik,
        baselineUrl: fk
      } = kk;
      const {
        t: bk
      } = (0, pk.D)(), [rk, Pk] = (0, Dk.useState)(50), mk = (0, Dk.useRef)(!1), Mk = (0, Dk.useRef)(null), {
        width: Kk,
        height: xk
      } = Sk.x.large;

      function nk(kk) {
        Pk((ek => (0, uk.d)(ek + kk, 0, 100)))
      }

      function Uk(kk) {
        const ek = kk.currentTarget.getBoundingClientRect();
        Pk((0, uk.d)((kk.clientX - ek.left) / ek.width * 100, 0, 100))
      }
      return (0, Ik.f)(Mk, {
        adjust: kk => {
          nk(kk * Wk)
        },
        setFraction: kk => {
          Pk(100 * kk)
        },
        endDrag: () => {}
      }), (0, sk.jsxs)("div", {
        ref: Mk,
        className: "ShaderPackCompare",
        "data-pad-slider": "",
        "data-pad-focusable": "",
        role: "slider",
        tabIndex: 0,
        "aria-label": bk("shaderPackListing:compare"),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(rk),
        style: {
          "--split": `${rk}%`
        },
        onKeyDown: function(kk) {
          const ek = "ArrowLeft" === kk.key ? -Wk : "ArrowRight" === kk.key ? Wk : 0;
          0 !== ek && (kk.preventDefault(), nk(ek))
        },
        onPointerDown: kk => {
          mk.current = !0, kk.currentTarget.setPointerCapture(kk.pointerId), Uk(kk)
        },
        onPointerMove: kk => {
          mk.current && Uk(kk)
        },
        onPointerUp: () => {
          mk.current = !1
        },
        onPointerCancel: () => {
          mk.current = !1
        },
        children: [(0, sk.jsx)("img", {
          className: "ShaderPackCompareBaseline",
          src: fk,
          width: Kk,
          height: xk,
          alt: "",
          draggable: !1,
          style: {
            backgroundImage: `url(${ik})`
          }
        }), (0, sk.jsx)("div", {
          className: "ShaderPackCompareLine"
        }), (0, sk.jsx)("img", {
          className: "ShaderPackComparePack",
          src: ik,
          width: Kk,
          height: xk,
          alt: "",
          draggable: !1
        }), (0, sk.jsx)(vk.e, {
          item: ek,
          className: "ShaderPackCompareNotice"
        })]
      })
    }

    function Xk(kk) {
      let {
        side: ek,
        onClick: ik,
        children: Dk
      } = kk;
      return (0, sk.jsx)("button", {
        type: "button",
        className: `ShaderPackStageButton ${ek}`,
        onClick: ik,
        children: (0, sk.jsx)("span", {
          className: "ShaderPackStageButtonFace SmallTextBold",
          children: Dk
        })
      })
    }
    var Bk = ik(4926),
      ck = ik(280),
      Tk = ik(6505);
    const Zk = {
      compiler: "shaderPack:compilerUnavailable",
      download: "shaderPackListing:useDownloadFailed",
      apiVersion: "shaderPackListing:useOtherApiVersion",
      invalid: "shaderPackListing:useInvalid",
      errors: "shaderPackListing:useFailsHere",
      save: "shaderPack:saveFailed"
    };

    function Ok(kk) {
      const {
        userContext: ek
      } = (0, Hk.d)(), [fk, Sk] = (0, Dk.useState)(null), [bk, rk] = (0, Dk.useState)(!1), [Pk, mk] = (0, Dk.useState)(!1), [Mk, Kk] = (0, Dk.useState)(null), xk = null === kk || void 0 === kk ? void 0 : kk.packId, nk = null === kk || void 0 === kk ? void 0 : kk.sourceHash;
      return (0, Dk.useEffect)((() => {
        if (rk(!1), Kk(null), void 0 === xk) return;
        let kk = !1;
        return Promise.all([(0, lk.hasUsableWebGpuAdapter)(), (0, Tk.f)()]).then((ek => {
          let [ik, Dk] = ek;
          var fk;
          kk || (Sk(ik), rk((null === Dk || void 0 === Dk || null === (fk = Dk.listing) || void 0 === fk ? void 0 : fk.packId) === xk && Dk.listing.sourceHash === nk))
        })).catch((ek => {
          console.error("Failed to check whether this shader pack can be used", ek), kk || Sk(!1)
        })), () => {
          kk = !0
        }
      }), [xk, nk]), {
        webGpuUsable: fk,
        inUse: bk,
        busy: Pk,
        errorKey: Mk,
        use: () => {
          null !== kk && async function(kk) {
            mk(!0), Kk(null);
            try {
              const {
                installListedShaderPack: Dk
              } = await Promise.all([ik.e(77), ik.e(133), ik.e(113)]).then((() => ik(40066))), fk = await Dk({
                packId: kk.packId,
                sourceHash: kk.sourceHash,
                name: kk.name,
                ownerName: kk.ownerName,
                description: kk.description
              });
              if ("failed" === fk.kind) return void Kk(Zk[fk.reason]);
              rk(!0), wk.b.recordShaderPackDownload(ek, kk.packId).catch((kk => {
                console.error("Failed to count a shader pack's download", kk)
              })), (0, Bk.q)()
            } catch (Dk) {
              console.error("Failed to use the shader pack", Dk), Kk("shaderPack:unexpectedError")
            } finally {
              mk(!1)
            }
          }(kk)
        }
      }
    }

    function gk(kk) {
      let {
        packUse: ek
      } = kk;
      const {
        t: ik
      } = (0, pk.D)(), {
        webGpuUsable: Dk,
        inUse: fk,
        busy: Sk,
        errorKey: bk,
        use: rk
      } = ek;
      return (0, sk.jsxs)("div", {
        className: "ShaderPackUse",
        children: [(0, sk.jsxs)(Mk.r, {
          disabled: !0 !== Dk || fk,
          loading: Sk,
          onClick: rk,
          children: [(0, sk.jsx)(Ck.d, {
            name: fk ? "check" : "download"
          }), " ", ik(fk ? "shaderPackListing:inUse" : "shaderPackListing:use")]
        }), !1 === Dk && (0, sk.jsx)("div", {
          className: "ShaderPackUseNote",
          children: ik((0, ck.i)() ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), bk && (0, sk.jsx)("div", {
          className: "ShaderPackUseNote Error",
          children: ik(bk)
        })]
      })
    }

    function Gk() {
      var kk;
      const {
        t: ek
      } = (0, pk.D)(), ik = (0, mk.useNavigatePreserveSearch)(), {
        packId: Sk
      } = (0, fk.y)(), {
        userContext: bk,
        isUserContextUpdating: rk
      } = (0, Hk.d)(), [Kk, xk] = (0, Dk.useState)(null), [nk, lk] = (0, Dk.useState)(null), [yk, Yk] = (0, Dk.useState)(0), Lk = (0, Dk.useRef)(0);

      function Ck() {
        var kk;
        null !== (kk = (0, mk.getPreviousLocation)()) && void 0 !== kk && kk.startsWith(jk.S) ? ik(-1) : ik(jk.S)
      }(0, Uk.b)(Ck), (0, Qk.d)(), (0, Dk.useEffect)((() => {
        if (rk || void 0 === Sk) return;
        const kk = ++Lk.current;
        lk(null), wk.b.getShaderPack(bk, Sk).then((ek => {
          Lk.current === kk && xk(ek)
        })).catch((ek => {
          Lk.current === kk && (console.error("Failed to get the shader pack", ek), xk(null), lk({
            error: ek
          }))
        }))
      }), [Sk, bk, rk, yk]);
      const Ak = () => {
          Yk((kk => kk + 1))
        },
        dk = (null === Kk || void 0 === Kk ? void 0 : Kk.packId) === Sk ? Kk : null,
        Fk = (0, Qk.i)(),
        uk = Ok(null !== (kk = null === dk || void 0 === dk ? void 0 : dk.live) && void 0 !== kk ? kk : null),
        qk = null !== dk && void 0 !== dk && dk.live ? (0, sk.jsx)(Nk, {
          item: dk.live,
          favourites: Fk,
          packUse: uk
        }) : null;
      return (0, sk.jsxs)("article", {
        className: "ShaderPackInformation AnimFadeIn",
        children: [(0, sk.jsx)(Mk.e, {
          onClick: Ck,
          children: ek("shaderPackListing:backToPacks")
        }), null === dk && null === nk && (0, sk.jsx)("div", {
          className: "ShaderPackInformationMessage",
          children: (0, sk.jsx)(Pk.d, {})
        }), null !== nk && (0, sk.jsxs)("div", {
          className: "ShaderPackInformationMessage",
          children: [(0, jk.D)(nk.error, ek, "shaderPackListing:loadPackFailed"), (0, sk.jsx)(Mk.f, {
            onClick: Ak,
            children: ek("general:tryAgain")
          })]
        }), null !== dk && null === nk && (0, sk.jsxs)("div", {
          className: "ShaderPackInformationBody",
          children: [(0, sk.jsxs)("header", {
            className: "ShaderPackInformationHeader",
            children: [(0, sk.jsx)("h1", {
              className: "FullyFancyText",
              children: dk.name
            }), qk]
          }), dk.live && (0, sk.jsx)(hk, {
            item: dk.live
          }), dk.live && (0, sk.jsx)(Rk, {
            item: dk.live,
            ownerPreview: dk.ownerPreview,
            bloxdhubSlug: dk.bloxdhubSlug,
            actions: qk
          }), dk.owner && (0, sk.jsx)(Vk, {
            details: dk,
            owner: dk.owner,
            onChanged: Ak
          })]
        })]
      })
    }

    function Nk(kk) {
      let {
        item: ek,
        favourites: ik,
        packUse: Dk
      } = kk;
      const fk = ik.isFavourite(ek.packId);
      return (0, sk.jsxs)("div", {
        className: "ShaderPackInformationActions",
        children: [lk.featureFlags.settings.canUseShaderPacks && (0, sk.jsx)(gk, {
          packUse: Dk
        }), (0, sk.jsx)(Mk.x, {
          className: "ShaderPackInformationLike",
          onClick: () => {
            ik.toggle(ek.packId)
          },
          isLiked: !0 === fk,
          isLoading: null === fk
        })]
      })
    }

    function Rk(kk) {
      let {
        item: ek,
        ownerPreview: ik,
        bloxdhubSlug: Dk,
        actions: fk
      } = kk;
      const {
        t: rk
      } = (0, pk.D)(), Pk = (0, nk.n)(), Mk = null === Dk ? null : (0, Sk.h)(Dk);
      return (0, sk.jsxs)("div", {
        className: "ShaderPackFacts",
        children: [ek.description && (0, sk.jsx)("p", {
          className: "ShaderPackDescription",
          children: ek.description
        }), (0, sk.jsxs)("div", {
          className: "ShaderPackFeatureList",
          children: [(null !== ik || null !== Mk) && (0, sk.jsx)("div", {
            className: "ShaderPackAuthor",
            children: null !== ik ? (0, sk.jsxs)(sk.Fragment, {
              children: [(0, sk.jsx)(xk.d, {
                playerSocialPreview: ik,
                showLocation: !1,
                linkToProfile: !0
              }), null !== Mk && (0, sk.jsx)("a", {
                className: "ShaderPackBloxdhubLogo",
                href: Mk,
                target: "_blank",
                rel: "noopener noreferrer",
                children: (0, sk.jsx)("img", {
                  src: yk,
                  alt: Sk.e
                })
              })]
            }) : (0, sk.jsxs)("a", {
              className: "ShaderPackBloxdhubName",
              href: Mk,
              target: "_blank",
              rel: "noopener noreferrer",
              children: [Sk.e, (0, sk.jsx)("img", {
                src: yk,
                alt: ""
              })]
            })
          }), jk.E.filter((kk => ek.features.includes(kk))).map((kk => (0, sk.jsx)(mk.LinkPreserveSearch, {
            className: "ShaderPackFeature",
            to: (0, jk.M)(kk),
            children: rk(jk.N[kk])
          }, kk)))]
        }), fk, (0, sk.jsxs)("dl", {
          className: "ShaderPackFactList",
          children: [(0, sk.jsxs)("div", {
            children: [(0, sk.jsx)("dt", {
              children: rk("shaderPackListing:downloads")
            }), (0, sk.jsx)("dd", {
              children: (0, bk.Q)(ek.downloads)
            })]
          }), (0, sk.jsx)(Jk, {
            label: rk("shaderPackListing:updated"),
            time: ek.listedUpdatedAt,
            now: Pk
          }), (0, sk.jsx)(Jk, {
            label: rk("shaderPackListing:created"),
            time: ek.publishedAt,
            now: Pk
          }), null !== ek.gpuCost && (0, sk.jsxs)("div", {
            children: [(0, sk.jsx)("dt", {
              children: rk("shaderPackListing:lag")
            }), (0, sk.jsx)("dd", {
              children: rk("shaderPackListing:lagPercent", {
                percent: String((0, jk.P)(ek.gpuCost))
              })
            })]
          }), (0, sk.jsxs)("div", {
            children: [(0, sk.jsx)("dt", {
              children: rk("shaderPackListing:size")
            }), (0, sk.jsx)("dd", {
              children: rk("shaderPackListing:sizeValue", {
                kilobytes: String((0, jk.O)(ek.sourceBytes))
              })
            })]
          }), (0, sk.jsxs)("div", {
            children: [(0, sk.jsx)("dt", {
              children: rk("shaderPackListing:files")
            }), (0, sk.jsx)("dd", {
              children: ek.fileCount
            })]
          })]
        })]
      })
    }

    function Jk(kk) {
      let {
        label: ek,
        time: ik,
        now: Dk
      } = kk;
      const {
        t: fk,
        selectedLanguage: Sk
      } = (0, pk.D)(), bk = new Date(ik);
      let Pk = bk.toLocaleDateString();
      if (Dk - ik <= 30 * rk.g) {
        const kk = (0, pk.n)(Sk.code, "shaderPackListing:timeAgo");
        Pk = fk("shaderPackListing:timeAgo", {
          time: (0, rk.T)(kk, ik, Dk)
        })
      }
      return (0, sk.jsx)(Kk.i, {
        tooltipInner: bk.toLocaleString(),
        children: (0, sk.jsxs)("div", {
          children: [(0, sk.jsx)("dt", {
            children: ek
          }), (0, sk.jsx)("dd", {
            children: Pk
          })]
        })
      })
    }
  },
  4946: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => bk
    });
    var Dk = ik(1021),
      fk = ik.n(Dk),
      Sk = ik(1066);

    function bk(kk) {
      let {
        options: ek,
        value: ik,
        onChange: Dk,
        ariaLabel: bk,
        className: rk,
        reselectable: Pk = !1,
        keepsFocus: mk = !1,
        padTabs: Mk
      } = kk;
      const Kk = void 0 !== Mk;
      return (0, Sk.jsx)("div", {
        className: fk()("SegmentedToggle", rk),
        role: "group",
        "aria-label": bk,
        "data-pad-tabs": Mk,
        children: ek.map((kk => {
          const ek = kk.value === ik;
          return (0, Sk.jsx)("button", {
            type: "button",
            "aria-pressed": ek,
            "data-pad-tab": Kk || void 0,
            "data-pad-selected": Kk && ek ? "true" : void 0,
            "data-pad-default-focus": Kk && ek || void 0,
            "aria-label": kk.ariaLabel,
            title: kk.ariaLabel,
            className: fk()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: ek
            }),
            onMouseDown: mk ? kk => {
              kk.preventDefault()
            } : void 0,
            onClick: () => {
              ek && !Pk || Dk(kk.value)
            },
            children: kk.label
          }, kk.value)
        }))
      })
    }
  },
  4951: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Sk,
      f: () => bk
    });
    var Dk = ik(60);
    const fk = new WeakMap,
      Sk = kk => {
        var ek;
        const ik = kk.closest("[data-pad-slider]");
        return ik && null !== (ek = fk.get(ik)) && void 0 !== ek ? ek : null
      },
      bk = (kk, ek) => {
        const ik = (0, Dk.useRef)(ek);
        ik.current = ek, (0, Dk.useEffect)((() => {
          if (kk.current) return ((kk, ek) => (fk.set(kk, ek), () => {
            fk.get(kk) === ek && fk.delete(kk)
          }))(kk.current, {
            adjust: kk => {
              ik.current.adjust(kk)
            },
            setFraction: kk => {
              ik.current.setFraction(kk)
            },
            endDrag: () => {
              ik.current.endDrag()
            }
          })
        }), [kk])
      }
  },
  6505: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => fk,
      f: () => Sk
    });
    var Dk = ik(38);
    const fk = "shaderPack";
    async function Sk() {
      var kk;
      let ek = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (kk = await Dk.e.getItem(fk, ek)) && void 0 !== kk ? kk : null
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);