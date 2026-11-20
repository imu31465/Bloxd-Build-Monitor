export const id = 109;
export const ids = [109];
export const modules = {
  4609: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => wz,
      d: () => Pz,
      g: () => Dz,
      h: () => Bz
    });
    var Fz = sz(65),
      Wz = sz(4616),
      Xz = sz(4022),
      Oz = sz(1333),
      oz = sz(4636),
      vz = sz(1020),
      Uz = sz.n(vz),
      Kz = sz(1319),
      uz = sz(1664),
      Nz = sz(4644),
      bz = sz(1087);

    function wz(zz) {
      let {
        label: tz,
        onClick: sz,
        checked: Fz,
        circleInfoText: Wz,
        className: oz,
        disabled: vz,
        note: Kz
      } = zz;
      return (0, bz.jsxs)("div", {
        "aria-disabled": vz || void 0,
        "data-pad-focusable": !0,
        className: Uz()("SettingBox CheckboxContainer", {
          [oz]: oz,
          SettingBoxDisabled: vz
        }),
        onClick: () => {
          vz || sz(!Fz)
        },
        children: [(0, bz.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, bz.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, bz.jsx)(Xz.e, {
              className: "SettingsCheckbox",
              checked: Fz,
              disabled: vz,
              onChange: () => {}
            })
          }), (0, bz.jsxs)("div", {
            className: "CheckboxText",
            children: [tz, Wz && (0, bz.jsx)("span", {
              onClick: zz => zz.stopPropagation(),
              children: (0, bz.jsx)(Oz.d, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: Wz
              })
            })]
          })]
        }), Kz && (0, bz.jsx)("div", {
          className: "SettingNote",
          children: Kz
        })]
      })
    }

    function Dz(zz) {
      let {
        name: tz,
        onChange: sz,
        min: Wz,
        max: Xz,
        step: oz,
        initValue: vz,
        circleInfoText: Kz,
        format: uz,
        className: Nz,
        padStep: wz,
        disabled: Dz = !1,
        selectableMax: gz,
        cappedNote: Bz,
        onChangeComplete: Pz
      } = zz;
      const [rz, Yz] = (0, Fz.useState)(vz), xz = (0, Fz.useRef)(vz);
      (0, Fz.useEffect)((() => {
        xz.current = vz, Yz(vz)
      }), [vz]);
      const mz = void 0 !== gz && gz < Xz,
        Jz = mz ? {
          "--slider-selectable": (gz - Wz) / (Xz - Wz)
        } : void 0;
      return (0, bz.jsxs)("div", {
        className: Uz()("SettingBox SettingsSliderDiv", {
          [Nz]: Nz,
          SettingBoxDisabled: Dz,
          SliderCapped: mz
        }),
        style: Jz,
        children: [(0, bz.jsxs)("div", {
          className: "SliderText",
          children: [`${tz}: ${uz?uz(rz):rz}`, Kz && (0, bz.jsx)(Oz.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: Kz
          })]
        }), (0, bz.jsx)("div", {
          className: "SliderDiv",
          children: (0, bz.jsx)(Hz, {
            value: rz,
            min: Wz,
            max: Xz,
            step: oz,
            onChange: zz => {
              if (mz && zz >= gz && rz === gz) return;
              const tz = mz ? Math.min(zz, gz) : zz;
              xz.current = tz, Yz(tz), sz(tz)
            },
            onChangeComplete: Pz && (() => {
              Pz(xz.current)
            }),
            format: uz,
            padStep: wz,
            disabled: Dz
          })
        }), mz && Bz && (0, bz.jsx)("div", {
          className: "SettingNote",
          children: Bz
        })]
      })
    }
    const gz = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function Hz(zz) {
      var tz;
      let {
        value: sz,
        min: Xz,
        max: Oz,
        step: oz,
        onChange: vz,
        orientation: Uz,
        reverse: Kz,
        setIsChanging: uz,
        tooltip: wz,
        labels: Dz,
        handleLabel: Hz,
        format: Bz,
        onChangeStart: Pz,
        onChangeComplete: rz,
        padStep: Yz,
        disabled: xz = !1
      } = zz;
      const mz = (0, Fz.useRef)(null),
        Jz = (0, Fz.useRef)(null);
      (0, Fz.useLayoutEffect)((() => {
        var zz, tz, sz;
        const Fz = null !== (zz = null === (tz = mz.current) || void 0 === tz ? void 0 : tz.querySelector(".rangeslider")) && void 0 !== zz ? zz : null;
        null === Fz || void 0 === Fz || Fz.setAttribute("data-pad-slider", ""), null === Fz || void 0 === Fz || Fz.setAttribute("data-pad-focusable", ""), null === Fz || void 0 === Fz || null === (sz = Fz.querySelector(".rangeslider__handle")) || void 0 === sz || sz.setAttribute("data-pad-slider-handle", ""), Jz.current = Fz
      }), []), (0, Fz.useLayoutEffect)((() => {
        var zz, tz;
        xz ? null === (zz = Jz.current) || void 0 === zz || zz.setAttribute("aria-disabled", "true") : null === (tz = Jz.current) || void 0 === tz || tz.removeAttribute("aria-disabled")
      }), [xz]);
      const Iz = (null !== (tz = String(oz).split(".")[1]) && void 0 !== tz ? tz : "").length,
        Cz = zz => {
          const tz = Number((Math.round((zz - Xz) / oz) * oz + Xz).toFixed(Iz));
          return Math.min(Oz, Math.max(Xz, tz))
        },
        ez = (0, Fz.useRef)(rz);
      ez.current = rz, (0, Fz.useEffect)((() => {
        const zz = mz.current;
        if (!zz) return;
        const tz = zz => {
          var tz;
          gz.has(zz.key) && (null === (tz = ez.current) || void 0 === tz || tz.call(ez))
        };
        return zz.addEventListener("keyup", tz), () => {
          zz.removeEventListener("keyup", tz)
        }
      }), []);
      const Zz = (0, Fz.useRef)(!1);
      return (0, Nz.g)(Jz, {
        adjust: zz => {
          if (xz) return;
          const tz = null !== Yz && void 0 !== Yz ? Yz : Math.max(oz, Math.round((Oz - Xz) / 20 / oz) * oz),
            Fz = Cz(sz + zz * tz * (Kz ? -1 : 1));
          Fz !== sz && (null === Pz || void 0 === Pz || Pz(), vz(Fz), null === rz || void 0 === rz || rz())
        },
        setFraction: zz => {
          if (xz) return;
          const tz = Cz(Xz + (Kz ? 1 - zz : zz) * (Oz - Xz));
          tz !== sz && (Zz.current || (Zz.current = !0, null === Pz || void 0 === Pz || Pz()), vz(tz))
        },
        endDrag: () => {
          Zz.current && (Zz.current = !1, null === rz || void 0 === rz || rz())
        }
      }), (0, bz.jsx)("div", {
        ref: mz,
        style: {
          display: "contents"
        },
        children: (0, bz.jsx)(Wz.c, {
          value: sz,
          min: Xz,
          max: Oz,
          step: oz,
          onChange: vz,
          orientation: Uz,
          reverse: Kz,
          tooltip: wz,
          labels: Dz,
          handleLabel: Hz,
          format: Bz,
          onChangeStart: () => {
            null === Pz || void 0 === Pz || Pz(), null === uz || void 0 === uz || uz(!0)
          },
          onChangeComplete: () => {
            null === uz || void 0 === uz || uz(!1), null === rz || void 0 === rz || rz()
          }
        })
      })
    }
    async function Bz() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      const tz = Kz.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: "",
        unlockPointerKey: zz
      });
      !0 === await tz.getResult() && (0, uz.reloadBloxd)()
    }

    function Pz(zz) {
      let {
        label: tz,
        options: sz,
        value: Fz,
        onChange: Wz,
        circleInfoText: Xz
      } = zz;
      return (0, bz.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, bz.jsxs)("div", {
          className: "SliderText",
          children: [tz, Xz && (0, bz.jsx)(Oz.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: Xz
          })]
        }), (0, bz.jsx)(oz.b, {
          ariaLabel: tz,
          options: sz,
          value: Fz,
          onChange: Wz
        })]
      })
    }
  },
  6245: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      default: () => Vz
    });
    var Fz = sz(65),
      Wz = sz(1493),
      Xz = sz(6129),
      Oz = sz(1213),
      oz = sz(321),
      vz = sz(1306),
      Uz = sz(1483),
      Kz = sz(1419),
      uz = sz(1333),
      Nz = sz(2391),
      bz = sz(2524),
      wz = sz(4191),
      Dz = sz(1116),
      gz = sz(1466),
      Hz = sz(106),
      Bz = sz(1173);
    const Pz = sz.p + "static/media/bloxdhubLogo.6a6c367af2ad6e6f1eb3.webp";
    var rz = sz(1020),
      Yz = sz.n(rz),
      xz = sz(1036),
      mz = sz(1319),
      Jz = sz(6122),
      Iz = sz(1087);
    const Cz = (0, Fz.lazy)((() => Promise.all([sz.e(105), sz.e(74), sz.e(131), sz.e(125), sz.e(124)]).then((() => sz(6158))).then((zz => ({
      default: zz.ShaderPackPublishForm
    })))));

    function ez(zz) {
      let {
        details: tz,
        owner: sz,
        onChanged: Wz
      } = zz;
      const {
        t: Oz
      } = (0, Bz.B)(), oz = (0, Uz.useNavigatePreserveSearch)(), {
        userContext: uz
      } = (0, Dz.b)(), [Nz, bz] = (0, Fz.useState)(!1), [wz, Hz] = (0, Fz.useState)(null), [Pz, rz] = (0, Fz.useState)(!1), {
        packId: ez,
        name: Zz,
        description: Gz,
        live: Tz
      } = tz;
      async function cz(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Wz;
        bz(!0), Hz(null);
        try {
          await zz(), tz()
        } catch (sz) {
          console.error("Failed to change a shader pack", sz), Hz((0, Jz.B)(sz, Oz, "shaderPackListing:ownerActionFailed"))
        } finally {
          bz(!1)
        }
      }
      const jz = (0, Jz.u)(uz);
      return (0, Iz.jsxs)("section", {
        className: "ShaderPackOwnerPanel",
        children: [(0, Iz.jsx)("h2", {
          className: "ShaderPackSectionTitle",
          children: Oz("general:manage")
        }), (0, Jz.hb)(sz, !(null === Tz || void 0 === Tz || !Tz.renderId), Date.now(), Oz).map((zz => (0, Iz.jsxs)("div", {
          className: Yz()("ShaderPackOwnerNotice", {
            Warning: "warning" === zz.tone
          }),
          children: [(0, Iz.jsx)(xz.c, {
            name: "warning" === zz.tone ? "triangle-exclamation" : "circle-info"
          }), (0, Iz.jsxs)("div", {
            children: [zz.text, zz.detail && (0, Iz.jsx)("pre", {
              className: "ShaderPackOwnerNoticeDetail",
              children: zz.detail
            })]
          })]
        }, zz.text))), tz.ban && (0, Iz.jsxs)("div", {
          className: "ShaderPackOwnerNotice Warning",
          children: [(0, Iz.jsx)(xz.c, {
            name: "ban"
          }), (0, Iz.jsxs)("div", {
            children: ["Banned by ", tz.ban.byName, " on ", new Date(tz.ban.at).toLocaleString()]
          })]
        }), wz && (0, Iz.jsx)("div", {
          className: "ShaderPackOwnerError",
          children: wz
        }), (0, Iz.jsxs)("div", {
          className: "ShaderPackOwnerActions",
          children: [(0, Iz.jsxs)(Kz.Q, {
            disabled: Nz,
            onClick: () => {
              !async function() {
                const zz = await mz.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:renameTitle",
                  initialValue: Zz,
                  maxLength: Xz.w,
                  submitText: "general:save",
                  validate: zz => zz.trim().length < Xz.A ? Oz("shaderPackListing:nameTooShort", {
                    min: String(Xz.A)
                  }) : null
                }).getResult();
                "notificationTornDown" !== zz && "submit" === (null === zz || void 0 === zz ? void 0 : zz.type) && zz.value.trim() !== Zz && await cz((() => gz.d.updateShaderPack(uz, {
                  packId: ez,
                  name: zz.value.trim()
                })))
              }()
            },
            children: [(0, Iz.jsx)(xz.c, {
              name: "pen"
            }), " ", Oz("shaderPackListing:rename")]
          }), (0, Iz.jsxs)(Kz.Q, {
            disabled: Nz,
            onClick: () => {
              !async function() {
                const zz = await mz.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:editDescription",
                  initialValue: Gz,
                  maxLength: Xz.p,
                  multiline: !0,
                  allowEmptySubmit: !0,
                  submitText: "general:save"
                }).getResult();
                "notificationTornDown" !== zz && "submit" === (null === zz || void 0 === zz ? void 0 : zz.type) && zz.value.trim() !== Gz && await cz((() => gz.d.updateShaderPack(uz, {
                  packId: ez,
                  description: zz.value.trim()
                })))
              }()
            },
            children: [(0, Iz.jsx)(xz.c, {
              name: "file-lines"
            }), " ", Oz("shaderPackListing:editDescription")]
          }), (0, Iz.jsxs)(Kz.Q, {
            disabled: Nz || sz.isBanned && !sz.listed,
            onClick: () => {
              cz((() => gz.d.updateShaderPack(uz, {
                packId: ez,
                listed: !sz.listed
              })))
            },
            children: [(0, Iz.jsx)(xz.c, {
              name: sz.listed ? "eye-slash" : "eye"
            }), " ", Oz(sz.listed ? "shaderPackListing:unlist" : "shaderPackListing:relist")]
          }), !sz.isBanned && (0, Iz.jsxs)(Kz.h, {
            disabled: Nz,
            onClick: () => {
              rz(!Pz)
            },
            children: [(0, Iz.jsx)(xz.c, {
              name: "upload"
            }), " ", Oz("shaderPackListing:uploadVersion")]
          }), (0, Iz.jsxs)(Kz.K, {
            disabled: Nz || sz.isBanned,
            onClick: () => {
              !async function() {
                !0 === await mz.NotificationProvider.showPromptPopup({
                  title: "shaderPackListing:deleteTitle",
                  subtitle: "shaderPackListing:deleteSubtitle",
                  confirmText: "general:delete",
                  cancelText: "general:cancel",
                  destructive: !0
                }).getResult() && await cz((() => gz.d.deleteShaderPack(uz, ez)), (() => {
                  oz(`${Jz.db}?section=mine`, {
                    replace: !0
                  })
                }))
              }()
            },
            children: [(0, Iz.jsx)(xz.c, {
              name: "trash-can"
            }), " ", Oz("general:delete")]
          }), jz && (0, Iz.jsxs)(Kz.K, {
            disabled: Nz,
            onClick: () => {
              cz((() => gz.d.setShaderPackBanned(uz, ez, !sz.isBanned)))
            },
            children: [(0, Iz.jsx)(xz.c, {
              name: sz.isBanned ? "circle-check" : "ban"
            }), " ", sz.isBanned ? "Unban" : "Ban"]
          })]
        }), Pz && (0, Iz.jsx)(Fz.Suspense, {
          fallback: (0, Iz.jsx)(vz.d, {}),
          children: (0, Iz.jsx)(Cz, {
            existing: {
              packId: ez,
              name: Zz,
              description: Gz
            },
            onPublished: () => {
              rz(!1), Wz()
            }
          })
        })]
      })
    }
    var Zz = sz(78),
      Gz = sz(1824),
      Tz = sz(1264),
      cz = sz(4644),
      jz = sz(1191),
      Az = sz(6143),
      yz = sz(6138),
      Mz = sz(6153);

    function dz(zz) {
      let {
        item: tz
      } = zz;
      const {
        t: sz
      } = (0, Bz.B)(), [Wz] = (0, Az.f)(), [Oz, oz] = (0, Fz.useState)(Wz), [vz, Uz] = (0, Fz.useState)(!1), [Kz, uz] = (0, Fz.useState)(!1), {
        s3Url: Nz
      } = jz.clientSideServerUrls, {
        width: bz,
        height: wz
      } = Xz.q.large, Dz = (0, Xz.r)(Nz, tz, Oz, "large"), {
        renderVersion: gz
      } = tz;
      return (0, Iz.jsxs)("div", {
        className: "ShaderPackPreviews",
        children: [(0, Iz.jsx)(Mz.d, {
          selected: Oz,
          onSelect: zz => {
            oz(zz), Uz(!1)
          },
          imageUrl: zz => (0, Xz.r)(Nz, tz, zz, "thumb")
        }), (0, Iz.jsxs)("div", {
          className: "ShaderPackPreviewStage",
          children: [!vz && (0, Iz.jsxs)("button", {
            type: "button",
            className: "ShaderPackPreviewMain",
            title: null === gz ? void 0 : sz("shaderPackListing:fullSize"),
            disabled: null === gz,
            onClick: () => {
              uz(!0)
            },
            children: [(0, Iz.jsx)("img", {
              src: Dz,
              width: bz,
              height: wz,
              alt: sz(Jz.qb[Oz]),
              draggable: !1
            }), (0, Iz.jsx)(yz.d, {
              item: tz
            })]
          }), !vz && null !== gz && (0, Iz.jsxs)(iz, {
            side: "Right",
            onClick: () => {
              Uz(!0)
            },
            children: [(0, Iz.jsx)(xz.c, {
              name: "arrows-left-right"
            }), " ", sz("shaderPackListing:compare")]
          }), vz && null !== gz && (0, Iz.jsx)(kz, {
            item: tz,
            packUrl: Dz,
            baselineUrl: (0, Xz.m)(Nz, gz, Oz, "large")
          }), vz && (0, Iz.jsx)(iz, {
            side: "Left",
            onClick: () => {
              Uz(!1)
            },
            children: sz("shaderPackListing:withPack")
          }), vz && (0, Iz.jsx)(iz, {
            side: "Right",
            onClick: () => {
              Uz(!1)
            },
            children: sz("shaderPackListing:withoutPack")
          })]
        }), Kz && (0, Iz.jsx)(hz, {
          fullUrl: (0, Xz.r)(Nz, tz, Oz, "full"),
          largeUrl: Dz,
          alt: sz(Jz.qb[Oz]),
          onClose: () => {
            uz(!1)
          }
        })]
      })
    }

    function hz(zz) {
      let {
        fullUrl: tz,
        largeUrl: sz,
        alt: Wz,
        onClose: Xz
      } = zz;
      const Oz = (0, Fz.useRef)(null);
      return (0, Tz.s)("popup", Oz, Xz), (0, Fz.useEffect)((() => {
        function zz(zz) {
          "Escape" === zz.key && (zz.stopPropagation(), Xz())
        }
        return window.addEventListener("keydown", zz, !0), () => {
          window.removeEventListener("keydown", zz, !0)
        }
      }), [Xz]), (0, Zz.createPortal)((0, Iz.jsxs)("div", {
        ref: Oz,
        className: "ShaderPackFullSize",
        onClick: Xz,
        children: [(0, Iz.jsx)("img", {
          className: "ShaderPackFullSizeImage",
          src: tz,
          alt: Wz,
          draggable: !1,
          style: {
            backgroundImage: `url(${sz})`
          }
        }), (0, Iz.jsx)(Kz.n, {
          className: "ShaderPackFullSizeClose",
          onClick: Xz
        })]
      }), document.body)
    }
    const Qz = 5;

    function kz(zz) {
      let {
        item: tz,
        packUrl: sz,
        baselineUrl: Wz
      } = zz;
      const {
        t: Oz
      } = (0, Bz.B)(), [oz, vz] = (0, Fz.useState)(50), Uz = (0, Fz.useRef)(!1), Kz = (0, Fz.useRef)(null), {
        width: uz,
        height: Nz
      } = Xz.q.large;

      function bz(zz) {
        vz((tz => (0, Gz.f)(tz + zz, 0, 100)))
      }

      function wz(zz) {
        const tz = zz.currentTarget.getBoundingClientRect();
        vz((0, Gz.f)((zz.clientX - tz.left) / tz.width * 100, 0, 100))
      }
      return (0, cz.g)(Kz, {
        adjust: zz => {
          bz(zz * Qz)
        },
        setFraction: zz => {
          vz(100 * zz)
        },
        endDrag: () => {}
      }), (0, Iz.jsxs)("div", {
        ref: Kz,
        className: "ShaderPackCompare",
        "data-pad-slider": "",
        "data-pad-focusable": "",
        role: "slider",
        tabIndex: 0,
        "aria-label": Oz("shaderPackListing:compare"),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(oz),
        style: {
          "--split": `${oz}%`
        },
        onKeyDown: function(zz) {
          const tz = "ArrowLeft" === zz.key ? -Qz : "ArrowRight" === zz.key ? Qz : 0;
          0 !== tz && (zz.preventDefault(), bz(tz))
        },
        onPointerDown: zz => {
          Uz.current = !0, zz.currentTarget.setPointerCapture(zz.pointerId), wz(zz)
        },
        onPointerMove: zz => {
          Uz.current && wz(zz)
        },
        onPointerUp: () => {
          Uz.current = !1
        },
        onPointerCancel: () => {
          Uz.current = !1
        },
        children: [(0, Iz.jsx)("img", {
          className: "ShaderPackCompareBaseline",
          src: Wz,
          width: uz,
          height: Nz,
          alt: "",
          draggable: !1,
          style: {
            backgroundImage: `url(${sz})`
          }
        }), (0, Iz.jsx)("div", {
          className: "ShaderPackCompareLine"
        }), (0, Iz.jsx)("img", {
          className: "ShaderPackComparePack",
          src: sz,
          width: uz,
          height: Nz,
          alt: "",
          draggable: !1
        }), (0, Iz.jsx)(yz.d, {
          item: tz,
          className: "ShaderPackCompareNotice"
        })]
      })
    }

    function iz(zz) {
      let {
        side: tz,
        onClick: sz,
        children: Fz
      } = zz;
      return (0, Iz.jsx)("button", {
        type: "button",
        className: `ShaderPackStageButton ${tz}`,
        onClick: sz,
        children: (0, Iz.jsx)("span", {
          className: "ShaderPackStageButtonFace SmallTextBold",
          children: Fz
        })
      })
    }
    var Lz = sz(4609),
      lz = sz(290),
      nz = sz(6237);
    const az = {
      compiler: "shaderPack:compilerUnavailable",
      download: "shaderPackListing:useDownloadFailed",
      apiVersion: "shaderPackListing:useOtherApiVersion",
      invalid: "shaderPackListing:useInvalid",
      errors: "shaderPackListing:useFailsHere",
      save: "shaderPack:saveFailed"
    };

    function qz(zz) {
      const {
        userContext: tz
      } = (0, Dz.b)(), [Wz, Xz] = (0, Fz.useState)(null), [Oz, oz] = (0, Fz.useState)(!1), [vz, Uz] = (0, Fz.useState)(!1), [Kz, uz] = (0, Fz.useState)(null), Nz = null === zz || void 0 === zz ? void 0 : zz.packId, bz = null === zz || void 0 === zz ? void 0 : zz.sourceHash;
      return (0, Fz.useEffect)((() => {
        if (oz(!1), uz(null), void 0 === Nz) return;
        let zz = !1;
        return Promise.all([(0, Hz.hasUsableWebGpuAdapter)(), (0, nz.g)()]).then((tz => {
          let [sz, Fz] = tz;
          var Wz;
          zz || (Xz(sz), oz((null === Fz || void 0 === Fz || null === (Wz = Fz.listing) || void 0 === Wz ? void 0 : Wz.packId) === Nz && Fz.listing.sourceHash === bz))
        })).catch((tz => {
          console.error("Failed to check whether this shader pack can be used", tz), zz || Xz(!1)
        })), () => {
          zz = !0
        }
      }), [Nz, bz]), {
        webGpuUsable: Wz,
        inUse: Oz,
        busy: vz,
        errorKey: Kz,
        use: () => {
          null !== zz && async function(zz) {
            Uz(!0), uz(null);
            try {
              const {
                installListedShaderPack: Fz
              } = await Promise.all([sz.e(74), sz.e(131), sz.e(126)]).then((() => sz(39632))), Wz = await Fz({
                packId: zz.packId,
                sourceHash: zz.sourceHash,
                name: zz.name,
                ownerName: zz.ownerName,
                description: zz.description
              });
              if ("failed" === Wz.kind) return void uz(az[Wz.reason]);
              oz(!0), gz.d.recordShaderPackDownload(tz, zz.packId).catch((zz => {
                console.error("Failed to count a shader pack's download", zz)
              })), (0, Lz.h)()
            } catch (Fz) {
              console.error("Failed to use the shader pack", Fz), uz("shaderPack:unexpectedError")
            } finally {
              Uz(!1)
            }
          }(zz)
        }
      }
    }

    function Sz(zz) {
      let {
        packUse: tz
      } = zz;
      const {
        t: sz
      } = (0, Bz.B)(), {
        webGpuUsable: Fz,
        inUse: Wz,
        busy: Xz,
        errorKey: Oz,
        use: oz
      } = tz;
      return (0, Iz.jsxs)("div", {
        className: "ShaderPackUse",
        children: [(0, Iz.jsxs)(Kz.p, {
          disabled: !0 !== Fz || Wz,
          loading: Xz,
          onClick: oz,
          children: [(0, Iz.jsx)(xz.c, {
            name: Wz ? "check" : "download"
          }), " ", sz(Wz ? "shaderPackListing:inUse" : "shaderPackListing:use")]
        }), !1 === Fz && (0, Iz.jsx)("div", {
          className: "ShaderPackUseNote",
          children: sz((0, lz.g)() ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), Oz && (0, Iz.jsx)("div", {
          className: "ShaderPackUseNote Error",
          children: sz(Oz)
        })]
      })
    }

    function Vz() {
      var zz;
      const {
        t: tz
      } = (0, Bz.B)(), sz = (0, Uz.useNavigatePreserveSearch)(), {
        packId: Xz
      } = (0, Wz.C)(), {
        userContext: Oz,
        isUserContextUpdating: oz
      } = (0, Dz.b)(), [uz, Nz] = (0, Fz.useState)(null), [bz, Hz] = (0, Fz.useState)(null), [Pz, rz] = (0, Fz.useState)(0), Yz = (0, Fz.useRef)(0);

      function xz() {
        var zz;
        null !== (zz = (0, Uz.getPreviousLocation)()) && void 0 !== zz && zz.startsWith(Jz.db) ? sz(-1) : sz(Jz.db)
      }(0, wz.b)(xz), (0, Az.c)(), (0, Fz.useEffect)((() => {
        if (oz || void 0 === Xz) return;
        const zz = ++Yz.current;
        Hz(null), gz.d.getShaderPack(Oz, Xz).then((tz => {
          Yz.current === zz && Nz(tz)
        })).catch((tz => {
          Yz.current === zz && (console.error("Failed to get the shader pack", tz), Nz(null), Hz({
            error: tz
          }))
        }))
      }), [Xz, Oz, oz, Pz]);
      const mz = () => {
          rz((zz => zz + 1))
        },
        Cz = (null === uz || void 0 === uz ? void 0 : uz.packId) === Xz ? uz : null,
        Zz = (0, Az.g)(),
        Gz = qz(null !== (zz = null === Cz || void 0 === Cz ? void 0 : Cz.live) && void 0 !== zz ? zz : null),
        Tz = null !== Cz && void 0 !== Cz && Cz.live ? (0, Iz.jsx)(Rz, {
          item: Cz.live,
          favourites: Zz,
          packUse: Gz
        }) : null;
      return (0, Iz.jsxs)("article", {
        className: "ShaderPackInformation AnimFadeIn",
        children: [(0, Iz.jsx)(Kz.e, {
          onClick: xz,
          children: tz("shaderPackListing:backToPacks")
        }), null === Cz && null === bz && (0, Iz.jsx)("div", {
          className: "ShaderPackInformationMessage",
          children: (0, Iz.jsx)(vz.d, {})
        }), null !== bz && (0, Iz.jsxs)("div", {
          className: "ShaderPackInformationMessage",
          children: [(0, Jz.B)(bz.error, tz, "shaderPackListing:loadPackFailed"), (0, Iz.jsx)(Kz.h, {
            onClick: mz,
            children: tz("general:tryAgain")
          })]
        }), null !== Cz && null === bz && (0, Iz.jsxs)("div", {
          className: "ShaderPackInformationBody",
          children: [(0, Iz.jsxs)("header", {
            className: "ShaderPackInformationHeader",
            children: [(0, Iz.jsx)("h1", {
              className: "FullyFancyText",
              children: Cz.name
            }), Tz]
          }), Cz.live && (0, Iz.jsx)(dz, {
            item: Cz.live
          }), Cz.live && (0, Iz.jsx)(pz, {
            item: Cz.live,
            ownerPreview: Cz.ownerPreview,
            bloxdhubSlug: Cz.bloxdhubSlug,
            actions: Tz
          }), Cz.owner && (0, Iz.jsx)(ez, {
            details: Cz,
            owner: Cz.owner,
            onChanged: mz
          })]
        })]
      })
    }

    function Rz(zz) {
      let {
        item: tz,
        favourites: sz,
        packUse: Fz
      } = zz;
      const Wz = sz.isFavourite(tz.packId);
      return (0, Iz.jsxs)("div", {
        className: "ShaderPackInformationActions",
        children: [Hz.featureFlags.settings.canUseShaderPacks && (0, Iz.jsx)(Sz, {
          packUse: Fz
        }), (0, Iz.jsx)(Kz.v, {
          className: "ShaderPackInformationLike",
          onClick: () => {
            sz.toggle(tz.packId)
          },
          isLiked: !0 === Wz,
          isLoading: null === Wz
        })]
      })
    }

    function pz(zz) {
      let {
        item: tz,
        ownerPreview: sz,
        bloxdhubSlug: Fz,
        actions: Wz
      } = zz;
      const {
        t: oz
      } = (0, Bz.B)(), vz = (0, bz.q)(), Kz = null === Fz ? null : (0, Xz.f)(Fz);
      return (0, Iz.jsxs)("div", {
        className: "ShaderPackFacts",
        children: [tz.description && (0, Iz.jsx)("p", {
          className: "ShaderPackDescription",
          children: tz.description
        }), (0, Iz.jsxs)("div", {
          className: "ShaderPackFeatureList",
          children: [(null !== sz || null !== Kz) && (0, Iz.jsx)("div", {
            className: "ShaderPackAuthor",
            children: null !== sz ? (0, Iz.jsxs)(Iz.Fragment, {
              children: [(0, Iz.jsx)(Nz.g, {
                playerSocialPreview: sz,
                showLocation: !1,
                linkToProfile: !0
              }), null !== Kz && (0, Iz.jsx)("a", {
                className: "ShaderPackBloxdhubLogo",
                href: Kz,
                target: "_blank",
                rel: "noopener noreferrer",
                children: (0, Iz.jsx)("img", {
                  src: Pz,
                  alt: Xz.b
                })
              })]
            }) : (0, Iz.jsxs)("a", {
              className: "ShaderPackBloxdhubName",
              href: Kz,
              target: "_blank",
              rel: "noopener noreferrer",
              children: [Xz.b, (0, Iz.jsx)("img", {
                src: Pz,
                alt: ""
              })]
            })
          }), Jz.E.filter((zz => tz.features.includes(zz))).map((zz => (0, Iz.jsx)(Uz.LinkPreserveSearch, {
            className: "ShaderPackFeature",
            to: (0, Jz.Q)(zz),
            children: oz(Jz.U[zz])
          }, zz)))]
        }), Wz, (0, Iz.jsxs)("dl", {
          className: "ShaderPackFactList",
          children: [(0, Iz.jsxs)("div", {
            children: [(0, Iz.jsx)("dt", {
              children: oz("shaderPackListing:downloads")
            }), (0, Iz.jsx)("dd", {
              children: (0, Oz.R)(tz.downloads)
            })]
          }), (0, Iz.jsx)(fz, {
            label: oz("shaderPackListing:updated"),
            time: tz.listedUpdatedAt,
            now: vz
          }), (0, Iz.jsx)(fz, {
            label: oz("shaderPackListing:created"),
            time: tz.publishedAt,
            now: vz
          }), null !== tz.gpuCost && (0, Iz.jsxs)("div", {
            children: [(0, Iz.jsx)("dt", {
              children: oz("shaderPackListing:lag")
            }), (0, Iz.jsx)("dd", {
              children: oz("shaderPackListing:lagPercent", {
                percent: String((0, Jz.ab)(tz.gpuCost))
              })
            })]
          }), (0, Iz.jsxs)("div", {
            children: [(0, Iz.jsx)("dt", {
              children: oz("shaderPackListing:size")
            }), (0, Iz.jsx)("dd", {
              children: oz("shaderPackListing:sizeValue", {
                kilobytes: String((0, Jz.Y)(tz.sourceBytes))
              })
            })]
          }), (0, Iz.jsxs)("div", {
            children: [(0, Iz.jsx)("dt", {
              children: oz("shaderPackListing:files")
            }), (0, Iz.jsx)("dd", {
              children: tz.fileCount
            })]
          })]
        })]
      })
    }

    function fz(zz) {
      let {
        label: tz,
        time: sz,
        now: Fz
      } = zz;
      const {
        t: Wz,
        selectedLanguage: Xz
      } = (0, Bz.B)(), Oz = new Date(sz);
      let vz = Oz.toLocaleDateString();
      if (Fz - sz <= 30 * oz.h) {
        const zz = (0, Bz.o)(Xz.code, "shaderPackListing:timeAgo");
        vz = Wz("shaderPackListing:timeAgo", {
          time: (0, oz.bb)(zz, sz, Fz)
        })
      }
      return (0, Iz.jsx)(uz.h, {
        tooltipInner: Oz.toLocaleString(),
        children: (0, Iz.jsxs)("div", {
          children: [(0, Iz.jsx)("dt", {
            children: tz
          }), (0, Iz.jsx)("dd", {
            children: vz
          })]
        })
      })
    }
  },
  4636: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Oz
    });
    var Fz = sz(1020),
      Wz = sz.n(Fz),
      Xz = sz(1087);

    function Oz(zz) {
      let {
        options: tz,
        value: sz,
        onChange: Fz,
        ariaLabel: Oz,
        className: oz,
        reselectable: vz = !1,
        keepsFocus: Uz = !1
      } = zz;
      return (0, Xz.jsx)("div", {
        className: Wz()("SegmentedToggle", oz),
        role: "group",
        "aria-label": Oz,
        children: tz.map((zz => {
          const tz = zz.value === sz;
          return (0, Xz.jsx)("button", {
            type: "button",
            "aria-pressed": tz,
            "aria-label": zz.ariaLabel,
            title: zz.ariaLabel,
            className: Wz()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: tz
            }),
            onMouseDown: Uz ? zz => {
              zz.preventDefault()
            } : void 0,
            onClick: () => {
              tz && !vz || Fz(zz.value)
            },
            children: zz.label
          }, zz.value)
        }))
      })
    }
  },
  4644: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Xz,
      g: () => Oz
    });
    var Fz = sz(65);
    const Wz = new WeakMap,
      Xz = zz => {
        var tz;
        const sz = zz.closest("[data-pad-slider]");
        return sz && null !== (tz = Wz.get(sz)) && void 0 !== tz ? tz : null
      },
      Oz = (zz, tz) => {
        const sz = (0, Fz.useRef)(tz);
        sz.current = tz, (0, Fz.useEffect)((() => {
          if (zz.current) return ((zz, tz) => (Wz.set(zz, tz), () => {
            Wz.get(zz) === tz && Wz.delete(zz)
          }))(zz.current, {
            adjust: zz => {
              sz.current.adjust(zz)
            },
            setFraction: zz => {
              sz.current.setFraction(zz)
            },
            endDrag: () => {
              sz.current.endDrag()
            }
          })
        }), [zz])
      }
  },
  6237: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Wz,
      g: () => Xz
    });
    var Fz = sz(44);
    const Wz = "shaderPack";
    async function Xz() {
      var zz;
      let tz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (zz = await Fz.e.getItem(Wz, tz)) && void 0 !== zz ? zz : null
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);