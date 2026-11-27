export const id = 134;
export const ids = [134];
export const modules = {
  5951: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Ur,
      e: () => er,
      f: () => tr,
      i: () => nr
    });
    var Zr = Qr(72),
      Wr = Qr(5960),
      ar = Qr(5065),
      jr = Qr(1489),
      Ir = Qr(4205),
      fr = Qr(1155),
      Er = Qr.n(fr),
      pr = Qr(1475),
      xr = Qr(1885),
      mr = Qr(5986),
      Nr = Qr(1338);

    function Ur(rr) {
      let {
        label: Sr,
        onClick: Qr,
        checked: Zr,
        circleInfoText: Wr,
        className: Ir,
        disabled: fr,
        note: pr
      } = rr;
      return (0, Nr.jsxs)("div", {
        "aria-disabled": fr || void 0,
        "data-pad-focusable": !0,
        className: Er()("SettingBox CheckboxContainer", {
          [Ir]: Ir,
          SettingBoxDisabled: fr
        }),
        onClick: () => {
          fr || Qr(!Zr)
        },
        children: [(0, Nr.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, Nr.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, Nr.jsx)(ar.e, {
              className: "SettingsCheckbox",
              checked: Zr,
              disabled: fr,
              onChange: () => {}
            })
          }), (0, Nr.jsxs)("div", {
            className: "CheckboxText",
            children: [Sr, Wr && (0, Nr.jsx)("span", {
              onClick: rr => rr.stopPropagation(),
              children: (0, Nr.jsx)(jr.d, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: Wr
              })
            })]
          })]
        }), pr && (0, Nr.jsx)("div", {
          className: "SettingNote",
          children: pr
        })]
      })
    }

    function tr(rr) {
      let {
        name: Sr,
        onChange: Qr,
        min: Wr,
        max: ar,
        step: Ir,
        initValue: fr,
        circleInfoText: pr,
        format: xr,
        className: mr,
        padStep: Ur,
        disabled: tr = !1,
        selectableMax: hr,
        cappedNote: zr,
        note: nr,
        onChangeComplete: er
      } = rr;
      const [Kr, yr] = (0, Zr.useState)(fr), Br = (0, Zr.useRef)(fr);
      (0, Zr.useEffect)((() => {
        Br.current = fr, yr(fr)
      }), [fr]);
      const Tr = void 0 !== hr && hr < ar,
        vr = Tr ? {
          "--slider-selectable": (hr - Wr) / (ar - Wr)
        } : void 0,
        Or = Tr && zr ? zr : nr;
      return (0, Nr.jsxs)("div", {
        className: Er()("SettingBox SettingsSliderDiv", {
          [mr]: mr,
          SettingBoxDisabled: tr,
          SliderCapped: Tr
        }),
        style: vr,
        children: [(0, Nr.jsxs)("div", {
          className: "SliderText",
          children: [`${Sr}: ${xr?xr(Kr):Kr}`, pr && (0, Nr.jsx)(jr.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: pr
          })]
        }), (0, Nr.jsx)("div", {
          className: "SliderDiv",
          children: (0, Nr.jsx)(Yr, {
            value: Kr,
            min: Wr,
            max: ar,
            step: Ir,
            onChange: rr => {
              if (Tr && rr >= hr && Kr === hr) return;
              const Sr = Tr ? Math.min(rr, hr) : rr;
              Br.current = Sr, yr(Sr), Qr(Sr)
            },
            onChangeComplete: er && (() => {
              er(Br.current)
            }),
            format: xr,
            padStep: Ur,
            disabled: tr
          })
        }), Or && (0, Nr.jsx)("div", {
          className: "SettingNote",
          children: Or
        })]
      })
    }
    const hr = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function zr(rr) {
      var Sr;
      return (null !== (Sr = String(rr).split(".")[1]) && void 0 !== Sr ? Sr : "").length
    }

    function Yr(rr) {
      let {
        value: Sr,
        min: Qr,
        max: ar,
        step: jr,
        onChange: Ir,
        orientation: fr,
        reverse: Er,
        setIsChanging: pr,
        tooltip: xr,
        labels: Ur,
        handleLabel: tr,
        format: Yr,
        onChangeStart: nr,
        onChangeComplete: er,
        padStep: Kr,
        disabled: yr = !1
      } = rr;
      const Br = (0, Zr.useRef)(null),
        Tr = (0, Zr.useRef)(null);
      (0, Zr.useLayoutEffect)((() => {
        var rr, Sr, Qr;
        const Zr = null !== (rr = null === (Sr = Br.current) || void 0 === Sr ? void 0 : Sr.querySelector(".rangeslider")) && void 0 !== rr ? rr : null;
        null === Zr || void 0 === Zr || Zr.setAttribute("data-pad-slider", ""), null === Zr || void 0 === Zr || Zr.setAttribute("data-pad-focusable", ""), null === Zr || void 0 === Zr || null === (Qr = Zr.querySelector(".rangeslider__handle")) || void 0 === Qr || Qr.setAttribute("data-pad-slider-handle", ""), Tr.current = Zr
      }), []), (0, Zr.useLayoutEffect)((() => {
        var rr, Sr;
        yr ? null === (rr = Tr.current) || void 0 === rr || rr.setAttribute("aria-disabled", "true") : null === (Sr = Tr.current) || void 0 === Sr || Sr.removeAttribute("aria-disabled")
      }), [yr]);
      const vr = Math.max(zr(jr), zr(Qr)),
        Or = rr => {
          if (rr >= ar) return ar;
          if (rr <= Qr) return Qr;
          const Sr = Number((Math.round((rr - Qr) / jr) * jr + Qr).toFixed(vr));
          return Math.min(ar, Math.max(Qr, Sr))
        },
        Lr = (0, Zr.useRef)(er);
      Lr.current = er, (0, Zr.useEffect)((() => {
        const rr = Br.current;
        if (!rr) return;
        const Sr = rr => {
          var Sr;
          hr.has(rr.key) && (null === (Sr = Lr.current) || void 0 === Sr || Sr.call(Lr))
        };
        return rr.addEventListener("keyup", Sr), () => {
          rr.removeEventListener("keyup", Sr)
        }
      }), []);
      const lr = (0, Zr.useRef)(!1);
      return (0, mr.c)(Tr, {
        adjust: rr => {
          if (yr) return;
          const Zr = null !== Kr && void 0 !== Kr ? Kr : Math.max(jr, Math.round((ar - Qr) / 20 / jr) * jr),
            Wr = Or(Sr + rr * Zr * (Er ? -1 : 1));
          Wr !== Sr && (null === nr || void 0 === nr || nr(), Ir(Wr), null === er || void 0 === er || er())
        },
        setFraction: rr => {
          if (yr) return;
          const Zr = Or(Qr + (Er ? 1 - rr : rr) * (ar - Qr));
          Zr !== Sr && (lr.current || (lr.current = !0, null === nr || void 0 === nr || nr()), Ir(Zr))
        },
        endDrag: () => {
          lr.current && (lr.current = !1, null === er || void 0 === er || er())
        }
      }), (0, Nr.jsx)("div", {
        ref: Br,
        style: {
          display: "contents"
        },
        children: (0, Nr.jsx)(Wr.c, {
          value: Sr,
          min: Qr,
          max: ar,
          step: jr,
          onChange: rr => {
            Ir(Or(rr))
          },
          orientation: fr,
          reverse: Er,
          tooltip: xr,
          labels: Ur,
          handleLabel: tr,
          format: Yr,
          onChangeStart: () => {
            null === nr || void 0 === nr || nr(), null === pr || void 0 === pr || pr(!0)
          },
          onChangeComplete: () => {
            null === pr || void 0 === pr || pr(!1), null === er || void 0 === er || er()
          }
        })
      })
    }
    async function nr() {
      const rr = pr.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await rr.getResult() && (0, xr.reloadBloxd)()
    }

    function er(rr) {
      let {
        label: Sr,
        options: Qr,
        value: Zr,
        onChange: Wr,
        circleInfoText: ar
      } = rr;
      return (0, Nr.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, Nr.jsxs)("div", {
          className: "SliderText",
          children: [Sr, ar && (0, Nr.jsx)(jr.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: ar
          })]
        }), (0, Nr.jsx)(Ir.d, {
          ariaLabel: Sr,
          options: Qr,
          value: Zr,
          onChange: Wr
        })]
      })
    }
  },
  7619: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      default: () => dr
    });
    var Zr = Qr(72),
      Wr = Qr(1653),
      ar = Qr(7533),
      jr = Qr(1279),
      Ir = Qr(379),
      fr = Qr(1675),
      Er = Qr(1444),
      pr = Qr(1644),
      xr = Qr(1576),
      mr = Qr(1489),
      Nr = Qr(1743),
      Ur = Qr(3657),
      tr = Qr(3801),
      hr = Qr(5320),
      zr = Qr(1181),
      Yr = Qr(1629),
      nr = Qr(109),
      er = Qr(1251);
    const Kr = Qr.p + "static/media/bloxdhubLogo.6a6c367af2ad6e6f1eb3.webp";
    var yr = Qr(1155),
      Br = Qr.n(yr),
      Tr = Qr(1448),
      vr = Qr(1475),
      Or = Qr(7526),
      Lr = Qr(1338);
    const lr = (0, Zr.lazy)((() => Promise.all([Qr.e(128), Qr.e(91), Qr.e(157), Qr.e(156), Qr.e(135), Qr.e(716)]).then((() => Qr(7561))).then((rr => ({
      default: rr.ShaderPackPublishForm
    })))));

    function Xr(rr) {
      let {
        details: Sr,
        owner: Qr,
        onChanged: Wr
      } = rr;
      const {
        t: jr
      } = (0, er.E)(), Ir = (0, pr.useNavigatePreserveSearch)(), {
        userContext: fr
      } = (0, zr.c)(), [mr, Nr] = (0, Zr.useState)(!1), [Ur, tr] = (0, Zr.useState)(null), [hr, nr] = (0, Zr.useState)(!1), {
        packId: Kr,
        name: yr,
        description: Xr,
        live: Pr
      } = Sr;
      async function Hr(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Wr;
        Nr(!0), tr(null);
        try {
          await rr(), Sr()
        } catch (Qr) {
          console.error("Failed to change a shader pack", Qr), tr((0, Or.z)(Qr, jr, "shaderPackListing:ownerActionFailed"))
        } finally {
          Nr(!1)
        }
      }
      const qr = (0, Or.t)(fr);
      return (0, Lr.jsxs)("section", {
        className: "ShaderPackOwnerPanel",
        children: [(0, Lr.jsx)("h2", {
          className: "ShaderPackSectionTitle",
          children: jr("general:manage")
        }), (0, Or.Z)(Qr, !(null === Pr || void 0 === Pr || !Pr.renderId), Date.now(), jr).map((rr => (0, Lr.jsxs)("div", {
          className: Br()("ShaderPackOwnerNotice", {
            Warning: "warning" === rr.tone
          }),
          children: [(0, Lr.jsx)(Tr.c, {
            name: "warning" === rr.tone ? "triangle-exclamation" : "circle-info"
          }), (0, Lr.jsxs)("div", {
            children: [rr.text, rr.detail && (0, Lr.jsx)("pre", {
              className: "ShaderPackOwnerNoticeDetail",
              children: rr.detail
            })]
          })]
        }, rr.text))), Sr.ban && (0, Lr.jsxs)("div", {
          className: "ShaderPackOwnerNotice Warning",
          children: [(0, Lr.jsx)(Tr.c, {
            name: "ban"
          }), (0, Lr.jsxs)("div", {
            children: ["Banned by ", Sr.ban.byName, " on ", new Date(Sr.ban.at).toLocaleString()]
          })]
        }), Ur && (0, Lr.jsx)("div", {
          className: "ShaderPackOwnerError",
          children: Ur
        }), (0, Lr.jsxs)("div", {
          className: "ShaderPackOwnerActions",
          children: [(0, Lr.jsxs)(xr.U, {
            disabled: mr,
            onClick: () => {
              !async function() {
                const rr = await vr.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:renameTitle",
                  initialValue: yr,
                  maxLength: ar.z,
                  submitText: "general:save",
                  validate: rr => rr.trim().length < ar.C ? jr("shaderPackListing:nameTooShort", {
                    min: String(ar.C)
                  }) : null
                }).getResult();
                "notificationTornDown" !== rr && "submit" === (null === rr || void 0 === rr ? void 0 : rr.type) && rr.value.trim() !== yr && await Hr((() => Yr.c.updateShaderPack(fr, {
                  packId: Kr,
                  name: rr.value.trim()
                })))
              }()
            },
            children: [(0, Lr.jsx)(Tr.c, {
              name: "pen"
            }), " ", jr("shaderPackListing:rename")]
          }), (0, Lr.jsxs)(xr.U, {
            disabled: mr,
            onClick: () => {
              !async function() {
                const rr = await vr.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:editDescription",
                  initialValue: Xr,
                  maxLength: ar.q,
                  multiline: !0,
                  allowEmptySubmit: !0,
                  submitText: "general:save"
                }).getResult();
                "notificationTornDown" !== rr && "submit" === (null === rr || void 0 === rr ? void 0 : rr.type) && rr.value.trim() !== Xr && await Hr((() => Yr.c.updateShaderPack(fr, {
                  packId: Kr,
                  description: rr.value.trim()
                })))
              }()
            },
            children: [(0, Lr.jsx)(Tr.c, {
              name: "file-lines"
            }), " ", jr("shaderPackListing:editDescription")]
          }), (0, Lr.jsxs)(xr.U, {
            disabled: mr || Qr.isBanned && !Qr.listed,
            onClick: () => {
              Hr((() => Yr.c.updateShaderPack(fr, {
                packId: Kr,
                listed: !Qr.listed
              })))
            },
            children: [(0, Lr.jsx)(Tr.c, {
              name: Qr.listed ? "eye-slash" : "eye"
            }), " ", jr(Qr.listed ? "shaderPackListing:unlist" : "shaderPackListing:relist")]
          }), !Qr.isBanned && (0, Lr.jsxs)(xr.h, {
            disabled: mr,
            onClick: () => {
              nr(!hr)
            },
            children: [(0, Lr.jsx)(Tr.c, {
              name: "upload"
            }), " ", jr("shaderPackListing:uploadVersion")]
          }), (0, Lr.jsxs)(xr.O, {
            disabled: mr || Qr.isBanned,
            onClick: () => {
              !async function() {
                !0 === await vr.NotificationProvider.showPromptPopup({
                  title: "shaderPackListing:deleteTitle",
                  subtitle: "shaderPackListing:deleteSubtitle",
                  confirmText: "general:delete",
                  cancelText: "general:cancel",
                  destructive: !0
                }).getResult() && await Hr((() => Yr.c.deleteShaderPack(fr, Kr)), (() => {
                  Ir(`${Or.X}?section=mine`, {
                    replace: !0
                  })
                }))
              }()
            },
            children: [(0, Lr.jsx)(Tr.c, {
              name: "trash-can"
            }), " ", jr("general:delete")]
          }), qr && (0, Lr.jsxs)(xr.O, {
            disabled: mr,
            onClick: () => {
              Hr((() => Yr.c.setShaderPackBanned(fr, Kr, !Qr.isBanned)))
            },
            children: [(0, Lr.jsx)(Tr.c, {
              name: Qr.isBanned ? "circle-check" : "ban"
            }), " ", Qr.isBanned ? "Unban" : "Ban"]
          })]
        }), hr && (0, Lr.jsx)(Zr.Suspense, {
          fallback: (0, Lr.jsx)(Er.c, {}),
          children: (0, Lr.jsx)(lr, {
            existing: {
              packId: Kr,
              name: yr,
              description: Xr
            },
            onPublished: () => {
              nr(!1), Wr()
            }
          })
        })]
      })
    }
    var Pr = Qr(92),
      Hr = Qr(2049),
      qr = Qr(1330),
      Rr = Qr(5986),
      gr = Qr(1262),
      Cr = Qr(7541),
      Mr = Qr(7539),
      Gr = Qr(7554);

    function kr(rr) {
      let {
        item: Sr
      } = rr;
      const {
        t: Qr
      } = (0, er.E)(), [Wr] = (0, Cr.i)(), [jr, Ir] = (0, Zr.useState)(Wr), [fr, Er] = (0, Zr.useState)(!1), [pr, xr] = (0, Zr.useState)(!1), {
        s3Url: mr
      } = gr.clientSideServerUrls, {
        width: Nr,
        height: Ur
      } = ar.r.large, tr = (0, ar.u)(mr, Sr, jr, "large"), {
        renderVersion: hr
      } = Sr;
      return (0, Lr.jsxs)("div", {
        className: "ShaderPackPreviews",
        children: [(0, Lr.jsx)(Gr.b, {
          selected: jr,
          onSelect: rr => {
            Ir(rr), Er(!1)
          },
          imageUrl: rr => (0, ar.u)(mr, Sr, rr, "thumb")
        }), (0, Lr.jsxs)("div", {
          className: "ShaderPackPreviewStage",
          children: [!fr && (0, Lr.jsxs)("button", {
            type: "button",
            className: "ShaderPackPreviewMain",
            title: null === hr ? void 0 : Qr("shaderPackListing:fullSize"),
            disabled: null === hr,
            onClick: () => {
              xr(!0)
            },
            children: [(0, Lr.jsx)("img", {
              src: tr,
              width: Nr,
              height: Ur,
              alt: Qr(Or.eb[jr]),
              draggable: !1
            }), (0, Lr.jsx)(Mr.d, {
              item: Sr
            })]
          }), !fr && null !== hr && (0, Lr.jsxs)(wr, {
            side: "Right",
            onClick: () => {
              Er(!0)
            },
            children: [(0, Lr.jsx)(Tr.c, {
              name: "arrows-left-right"
            }), " ", Qr("shaderPackListing:compare")]
          }), fr && null !== hr && (0, Lr.jsx)(ir, {
            item: Sr,
            packUrl: tr,
            baselineUrl: (0, ar.o)(mr, hr, jr, "large")
          }), fr && (0, Lr.jsx)(wr, {
            side: "Left",
            onClick: () => {
              Er(!1)
            },
            children: Qr("shaderPackListing:withPack")
          }), fr && (0, Lr.jsx)(wr, {
            side: "Right",
            onClick: () => {
              Er(!1)
            },
            children: Qr("shaderPackListing:withoutPack")
          })]
        }), pr && (0, Lr.jsx)(Ar, {
          fullUrl: (0, ar.u)(mr, Sr, jr, "full"),
          largeUrl: tr,
          alt: Qr(Or.eb[jr]),
          onClose: () => {
            xr(!1)
          }
        })]
      })
    }

    function Ar(rr) {
      let {
        fullUrl: Sr,
        largeUrl: Qr,
        alt: Wr,
        onClose: ar
      } = rr;
      const jr = (0, Zr.useRef)(null);
      return (0, qr.u)("popup", jr, ar), (0, Zr.useEffect)((() => {
        function rr(rr) {
          "Escape" === rr.key && (rr.stopPropagation(), ar())
        }
        return window.addEventListener("keydown", rr, !0), () => {
          window.removeEventListener("keydown", rr, !0)
        }
      }), [ar]), (0, Pr.createPortal)((0, Lr.jsxs)("div", {
        ref: jr,
        className: "ShaderPackFullSize",
        onClick: ar,
        children: [(0, Lr.jsx)("img", {
          className: "ShaderPackFullSizeImage",
          src: Sr,
          alt: Wr,
          draggable: !1,
          style: {
            backgroundImage: `url(${Qr})`
          }
        }), (0, Lr.jsx)(xr.l, {
          className: "ShaderPackFullSizeClose",
          onClick: ar
        })]
      }), document.body)
    }
    const Vr = 5;

    function ir(rr) {
      let {
        item: Sr,
        packUrl: Qr,
        baselineUrl: Wr
      } = rr;
      const {
        t: jr
      } = (0, er.E)(), [Ir, fr] = (0, Zr.useState)(50), Er = (0, Zr.useRef)(!1), pr = (0, Zr.useRef)(null), {
        width: xr,
        height: mr
      } = ar.r.large;

      function Nr(rr) {
        fr((Sr => (0, Hr.h)(Sr + rr, 0, 100)))
      }

      function Ur(rr) {
        const Sr = rr.currentTarget.getBoundingClientRect();
        fr((0, Hr.h)((rr.clientX - Sr.left) / Sr.width * 100, 0, 100))
      }
      return (0, Rr.c)(pr, {
        adjust: rr => {
          Nr(rr * Vr)
        },
        setFraction: rr => {
          fr(100 * rr)
        },
        endDrag: () => {}
      }), (0, Lr.jsxs)("div", {
        ref: pr,
        className: "ShaderPackCompare",
        "data-pad-slider": "",
        "data-pad-focusable": "",
        role: "slider",
        tabIndex: 0,
        "aria-label": jr("shaderPackListing:compare"),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(Ir),
        style: {
          "--split": `${Ir}%`
        },
        onKeyDown: function(rr) {
          const Sr = "ArrowLeft" === rr.key ? -Vr : "ArrowRight" === rr.key ? Vr : 0;
          0 !== Sr && (rr.preventDefault(), Nr(Sr))
        },
        onPointerDown: rr => {
          Er.current = !0, rr.currentTarget.setPointerCapture(rr.pointerId), Ur(rr)
        },
        onPointerMove: rr => {
          Er.current && Ur(rr)
        },
        onPointerUp: () => {
          Er.current = !1
        },
        onPointerCancel: () => {
          Er.current = !1
        },
        children: [(0, Lr.jsx)("img", {
          className: "ShaderPackCompareBaseline",
          src: Wr,
          width: xr,
          height: mr,
          alt: "",
          draggable: !1,
          style: {
            backgroundImage: `url(${Qr})`
          }
        }), (0, Lr.jsx)("div", {
          className: "ShaderPackCompareLine"
        }), (0, Lr.jsx)("img", {
          className: "ShaderPackComparePack",
          src: Qr,
          width: xr,
          height: mr,
          alt: "",
          draggable: !1
        }), (0, Lr.jsx)(Mr.d, {
          item: Sr,
          className: "ShaderPackCompareNotice"
        })]
      })
    }

    function wr(rr) {
      let {
        side: Sr,
        onClick: Qr,
        children: Zr
      } = rr;
      return (0, Lr.jsx)("button", {
        type: "button",
        className: `ShaderPackStageButton ${Sr}`,
        onClick: Qr,
        children: (0, Lr.jsx)("span", {
          className: "ShaderPackStageButtonFace SmallTextBold",
          children: Zr
        })
      })
    }
    var cr = Qr(5951),
      Fr = Qr(345),
      or = Qr(7617);
    const br = {
      compiler: "shaderPack:compilerUnavailable",
      download: "shaderPackListing:useDownloadFailed",
      apiVersion: "shaderPackListing:useOtherApiVersion",
      invalid: "shaderPackListing:useInvalid",
      errors: "shaderPackListing:useFailsHere",
      save: "shaderPack:saveFailed"
    };

    function Jr(rr) {
      const {
        userContext: Sr
      } = (0, zr.c)(), [Wr, ar] = (0, Zr.useState)(null), [jr, Ir] = (0, Zr.useState)(!1), [fr, Er] = (0, Zr.useState)(!1), [pr, xr] = (0, Zr.useState)(null), mr = null === rr || void 0 === rr ? void 0 : rr.packId, Nr = null === rr || void 0 === rr ? void 0 : rr.sourceHash;
      return (0, Zr.useEffect)((() => {
        if (Ir(!1), xr(null), void 0 === mr) return;
        let rr = !1;
        return Promise.all([(0, nr.hasUsableWebGpuAdapter)(), (0, or.e)()]).then((Sr => {
          let [Qr, Zr] = Sr;
          var Wr;
          rr || (ar(Qr), Ir((null === Zr || void 0 === Zr || null === (Wr = Zr.listing) || void 0 === Wr ? void 0 : Wr.packId) === mr && Zr.listing.sourceHash === Nr))
        })).catch((Sr => {
          console.error("Failed to check whether this shader pack can be used", Sr), rr || ar(!1)
        })), () => {
          rr = !0
        }
      }), [mr, Nr]), {
        webGpuUsable: Wr,
        inUse: jr,
        busy: fr,
        errorKey: pr,
        use: () => {
          null !== rr && async function(rr) {
            Er(!0), xr(null);
            try {
              const {
                installListedShaderPack: Zr
              } = await Promise.all([Qr.e(91), Qr.e(157), Qr.e(136)]).then((() => Qr(42339))), Wr = await Zr({
                packId: rr.packId,
                sourceHash: rr.sourceHash,
                name: rr.name,
                ownerName: rr.ownerName,
                description: rr.description
              });
              if ("failed" === Wr.kind) return void xr(br[Wr.reason]);
              Ir(!0), Yr.c.recordShaderPackDownload(Sr, rr.packId).catch((rr => {
                console.error("Failed to count a shader pack's download", rr)
              })), (0, cr.i)()
            } catch (Zr) {
              console.error("Failed to use the shader pack", Zr), xr("shaderPack:unexpectedError")
            } finally {
              Er(!1)
            }
          }(rr)
        }
      }
    }

    function Dr(rr) {
      let {
        packUse: Sr
      } = rr;
      const {
        t: Qr
      } = (0, er.E)(), {
        webGpuUsable: Zr,
        inUse: Wr,
        busy: ar,
        errorKey: jr,
        use: Ir
      } = Sr;
      return (0, Lr.jsxs)("div", {
        className: "ShaderPackUse",
        children: [(0, Lr.jsxs)(xr.p, {
          disabled: !0 !== Zr || Wr,
          loading: ar,
          onClick: Ir,
          children: [(0, Lr.jsx)(Tr.c, {
            name: Wr ? "check" : "download"
          }), " ", Qr(Wr ? "shaderPackListing:inUse" : "shaderPackListing:use")]
        }), !1 === Zr && (0, Lr.jsx)("div", {
          className: "ShaderPackUseNote",
          children: Qr((0, Fr.l)() ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), jr && (0, Lr.jsx)("div", {
          className: "ShaderPackUseNote Error",
          children: Qr(jr)
        })]
      })
    }

    function dr() {
      var rr;
      const {
        t: Sr
      } = (0, er.E)(), Qr = (0, pr.useNavigatePreserveSearch)(), {
        packId: ar
      } = (0, Wr.w)(), {
        userContext: jr,
        isUserContextUpdating: Ir
      } = (0, zr.c)(), [mr, Ur] = (0, Zr.useState)(null), [tr, nr] = (0, Zr.useState)(null), [Kr, yr] = (0, Zr.useState)(0), Br = (0, Zr.useRef)(0);

      function Tr() {
        var rr;
        null !== (rr = (0, pr.getPreviousLocation)()) && void 0 !== rr && rr.startsWith(Or.X) ? Qr(-1) : Qr(Or.X)
      }(0, hr.e)(Tr), (0, Cr.b)(), (0, Zr.useEffect)((() => {
        if (Ir || void 0 === ar) return;
        const rr = ++Br.current;
        nr(null), Yr.c.getShaderPack(jr, ar).then((Sr => {
          Br.current === rr && Ur(Sr)
        })).catch((Sr => {
          Br.current === rr && (console.error("Failed to get the shader pack", Sr), Ur(null), nr({
            error: Sr
          }))
        }))
      }), [ar, jr, Ir, Kr]);
      const vr = () => {
          yr((rr => rr + 1))
        },
        lr = (null === mr || void 0 === mr ? void 0 : mr.packId) === ar ? mr : null,
        Pr = (0, Cr.l)(),
        Hr = Jr(null !== (rr = null === lr || void 0 === lr ? void 0 : lr.live) && void 0 !== rr ? rr : null),
        qr = null !== lr && void 0 !== lr && lr.live ? (0, Lr.jsx)(sr, {
          item: lr.live,
          favourites: Pr,
          packUse: Hr
        }) : null;
      return (0, Lr.jsxs)("article", {
        className: "ShaderPackInformation AnimFadeIn",
        children: [null !== lr && (0, Lr.jsx)(Nr.b, {
          meta: (0, fr._)(lr.name)
        }), (0, Lr.jsx)(xr.d, {
          onClick: Tr,
          children: Sr("shaderPackListing:backToPacks")
        }), null === lr && null === tr && (0, Lr.jsx)("div", {
          className: "ShaderPackInformationMessage",
          children: (0, Lr.jsx)(Er.c, {})
        }), null !== tr && (0, Lr.jsxs)("div", {
          className: "ShaderPackInformationMessage",
          children: [(0, Or.z)(tr.error, Sr, "shaderPackListing:loadPackFailed"), (0, Lr.jsx)(xr.h, {
            onClick: vr,
            children: Sr("general:tryAgain")
          })]
        }), null !== lr && null === tr && (0, Lr.jsxs)("div", {
          className: "ShaderPackInformationBody",
          children: [(0, Lr.jsxs)("header", {
            className: "ShaderPackInformationHeader",
            children: [(0, Lr.jsx)("h1", {
              className: "FullyFancyText",
              children: lr.name
            }), qr]
          }), lr.live && (0, Lr.jsx)(kr, {
            item: lr.live
          }), lr.live && (0, Lr.jsx)(ur, {
            item: lr.live,
            ownerPreview: lr.ownerPreview,
            bloxdhubSlug: lr.bloxdhubSlug,
            actions: qr
          }), lr.owner && (0, Lr.jsx)(Xr, {
            details: lr,
            owner: lr.owner,
            onChanged: vr
          })]
        })]
      })
    }

    function sr(rr) {
      let {
        item: Sr,
        favourites: Qr,
        packUse: Zr
      } = rr;
      const Wr = Qr.isFavourite(Sr.packId);
      return (0, Lr.jsxs)("div", {
        className: "ShaderPackInformationActions",
        children: [nr.featureFlags.settings.canUseShaderPacks && (0, Lr.jsx)(Dr, {
          packUse: Zr
        }), (0, Lr.jsx)(xr.w, {
          className: "ShaderPackInformationLike",
          onClick: () => {
            Qr.toggle(Sr.packId)
          },
          isLiked: !0 === Wr,
          isLoading: null === Wr
        })]
      })
    }

    function ur(rr) {
      let {
        item: Sr,
        ownerPreview: Qr,
        bloxdhubSlug: Zr,
        actions: Wr
      } = rr;
      const {
        t: Ir
      } = (0, er.E)(), fr = (0, tr.o)(), Er = null === Zr ? null : (0, ar.g)(Zr);
      return (0, Lr.jsxs)("div", {
        className: "ShaderPackFacts",
        children: [Sr.description && (0, Lr.jsx)("p", {
          className: "ShaderPackDescription",
          children: Sr.description
        }), (0, Lr.jsxs)("div", {
          className: "ShaderPackFeatureList",
          children: [(null !== Qr || null !== Er) && (0, Lr.jsx)("div", {
            className: "ShaderPackAuthor",
            children: null !== Qr ? (0, Lr.jsxs)(Lr.Fragment, {
              children: [(0, Lr.jsx)(Ur.i, {
                playerSocialPreview: Qr,
                showLocation: !1,
                linkToProfile: !0
              }), null !== Er && (0, Lr.jsx)("a", {
                className: "ShaderPackBloxdhubLogo",
                href: Er,
                target: "_blank",
                rel: "noopener noreferrer",
                children: (0, Lr.jsx)("img", {
                  src: Kr,
                  alt: ar.c
                })
              })]
            }) : (0, Lr.jsxs)("a", {
              className: "ShaderPackBloxdhubName",
              href: Er,
              target: "_blank",
              rel: "noopener noreferrer",
              children: [ar.c, (0, Lr.jsx)("img", {
                src: Kr,
                alt: ""
              })]
            })
          }), Or.A.filter((rr => Sr.features.includes(rr))).map((rr => (0, Lr.jsx)(pr.LinkPreserveSearch, {
            className: "ShaderPackFeature",
            to: (0, Or.M)(rr),
            children: Ir(Or.Q[rr])
          }, rr)))]
        }), Wr, (0, Lr.jsxs)("dl", {
          className: "ShaderPackFactList",
          children: [(0, Lr.jsxs)("div", {
            children: [(0, Lr.jsx)("dt", {
              children: Ir("shaderPackListing:downloads")
            }), (0, Lr.jsx)("dd", {
              children: (0, jr.S)(Sr.downloads)
            })]
          }), (0, Lr.jsx)(rS, {
            label: Ir("shaderPackListing:updated"),
            time: Sr.listedUpdatedAt,
            now: fr
          }), (0, Lr.jsx)(rS, {
            label: Ir("shaderPackListing:created"),
            time: Sr.publishedAt,
            now: fr
          }), null !== Sr.gpuCost && (0, Lr.jsxs)("div", {
            children: [(0, Lr.jsx)("dt", {
              children: Ir("shaderPackListing:lag")
            }), (0, Lr.jsx)("dd", {
              children: Ir("shaderPackListing:lagPercent", {
                percent: String((0, Or.V)(Sr.gpuCost))
              })
            })]
          }), (0, Lr.jsxs)("div", {
            children: [(0, Lr.jsx)("dt", {
              children: Ir("shaderPackListing:size")
            }), (0, Lr.jsx)("dd", {
              children: Ir("shaderPackListing:sizeValue", {
                kilobytes: String((0, Or.R)(Sr.sourceBytes))
              })
            })]
          }), (0, Lr.jsxs)("div", {
            children: [(0, Lr.jsx)("dt", {
              children: Ir("shaderPackListing:files")
            }), (0, Lr.jsx)("dd", {
              children: Sr.fileCount
            })]
          })]
        })]
      })
    }

    function rS(rr) {
      let {
        label: Sr,
        time: Qr,
        now: Zr
      } = rr;
      const {
        t: Wr,
        selectedLanguage: ar
      } = (0, er.E)(), jr = new Date(Qr);
      let fr = jr.toLocaleDateString();
      if (Zr - Qr <= 30 * Ir.d) {
        const rr = (0, er.m)(ar.code, "shaderPackListing:timeAgo");
        fr = Wr("shaderPackListing:timeAgo", {
          time: (0, Ir.W)(rr, Qr, Zr)
        })
      }
      return (0, Lr.jsx)(mr.f, {
        tooltipInner: jr.toLocaleString(),
        children: (0, Lr.jsxs)("div", {
          children: [(0, Lr.jsx)("dt", {
            children: Sr
          }), (0, Lr.jsx)("dd", {
            children: fr
          })]
        })
      })
    }
  },
  5986: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => ar,
      c: () => jr
    });
    var Zr = Qr(72);
    const Wr = new WeakMap,
      ar = rr => {
        var Sr;
        const Qr = rr.closest("[data-pad-slider]");
        return Qr && null !== (Sr = Wr.get(Qr)) && void 0 !== Sr ? Sr : null
      },
      jr = (rr, Sr) => {
        const Qr = (0, Zr.useRef)(Sr);
        Qr.current = Sr, (0, Zr.useEffect)((() => {
          if (rr.current) return ((rr, Sr) => (Wr.set(rr, Sr), () => {
            Wr.get(rr) === Sr && Wr.delete(rr)
          }))(rr.current, {
            adjust: rr => {
              Qr.current.adjust(rr)
            },
            setFraction: rr => {
              Qr.current.setFraction(rr)
            },
            endDrag: () => {
              Qr.current.endDrag()
            }
          })
        }), [rr])
      }
  },
  7617: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Wr,
      e: () => ar
    });
    var Zr = Qr(43);
    const Wr = "shaderPack";
    async function ar() {
      var rr;
      let Sr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (rr = await Zr.h.getItem(Wr, Sr)) && void 0 !== rr ? rr : null
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);