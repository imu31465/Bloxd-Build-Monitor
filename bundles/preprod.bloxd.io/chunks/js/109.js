export const id = 109;
export const ids = [109];
export const modules = {
  4746: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Zz,
      e: () => fz,
      f: () => Rz,
      j: () => Xz
    });
    var Ez = bz(56),
      nz = bz(4753),
      iz = bz(4144),
      lz = bz(1332),
      Mz = bz(4770),
      tz = bz(1038),
      Hz = bz.n(tz),
      Oz = bz(1322),
      pz = bz(1673),
      dz = bz(4776),
      Fz = bz(1089);

    function Zz(zz) {
      let {
        label: uz,
        onClick: bz,
        checked: Ez,
        circleInfoText: nz,
        className: Mz,
        disabled: tz,
        note: Oz
      } = zz;
      return (0, Fz.jsxs)("div", {
        "aria-disabled": tz || void 0,
        "data-pad-focusable": !0,
        className: Hz()("SettingBox CheckboxContainer", {
          [Mz]: Mz,
          SettingBoxDisabled: tz
        }),
        onClick: () => {
          tz || bz(!Ez)
        },
        children: [(0, Fz.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, Fz.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, Fz.jsx)(iz.b, {
              className: "SettingsCheckbox",
              checked: Ez,
              disabled: tz,
              onChange: () => {}
            })
          }), (0, Fz.jsxs)("div", {
            className: "CheckboxText",
            children: [uz, nz && (0, Fz.jsx)("span", {
              onClick: zz => zz.stopPropagation(),
              children: (0, Fz.jsx)(lz.b, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: nz
              })
            })]
          })]
        }), Oz && (0, Fz.jsx)("div", {
          className: "SettingNote",
          children: Oz
        })]
      })
    }

    function Rz(zz) {
      let {
        name: uz,
        onChange: bz,
        min: nz,
        max: iz,
        step: Mz,
        initValue: tz,
        circleInfoText: Oz,
        format: pz,
        className: dz,
        padStep: Zz,
        disabled: Rz = !1,
        selectableMax: Kz,
        cappedNote: Xz,
        onChangeComplete: fz
      } = zz;
      const [sz, rz] = (0, Ez.useState)(tz), oz = (0, Ez.useRef)(tz);
      (0, Ez.useEffect)((() => {
        oz.current = tz, rz(tz)
      }), [tz]);
      const Nz = void 0 !== Kz && Kz < iz,
        vz = Nz ? {
          "--slider-selectable": (Kz - nz) / (iz - nz)
        } : void 0;
      return (0, Fz.jsxs)("div", {
        className: Hz()("SettingBox SettingsSliderDiv", {
          [dz]: dz,
          SettingBoxDisabled: Rz,
          SliderCapped: Nz
        }),
        style: vz,
        children: [(0, Fz.jsxs)("div", {
          className: "SliderText",
          children: [`${uz}: ${pz?pz(sz):sz}`, Oz && (0, Fz.jsx)(lz.b, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: Oz
          })]
        }), (0, Fz.jsx)("div", {
          className: "SliderDiv",
          children: (0, Fz.jsx)(wz, {
            value: sz,
            min: nz,
            max: iz,
            step: Mz,
            onChange: zz => {
              if (Nz && zz >= Kz && sz === Kz) return;
              const uz = Nz ? Math.min(zz, Kz) : zz;
              oz.current = uz, rz(uz), bz(uz)
            },
            onChangeComplete: fz && (() => {
              fz(oz.current)
            }),
            format: pz,
            padStep: Zz,
            disabled: Rz
          })
        }), Nz && Xz && (0, Fz.jsx)("div", {
          className: "SettingNote",
          children: Xz
        })]
      })
    }
    const Kz = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function wz(zz) {
      var uz;
      let {
        value: bz,
        min: iz,
        max: lz,
        step: Mz,
        onChange: tz,
        orientation: Hz,
        reverse: Oz,
        setIsChanging: pz,
        tooltip: Zz,
        labels: Rz,
        handleLabel: wz,
        format: Xz,
        onChangeStart: fz,
        onChangeComplete: sz,
        padStep: rz,
        disabled: oz = !1
      } = zz;
      const Nz = (0, Ez.useRef)(null),
        vz = (0, Ez.useRef)(null);
      (0, Ez.useLayoutEffect)((() => {
        var zz, uz, bz;
        const Ez = null !== (zz = null === (uz = Nz.current) || void 0 === uz ? void 0 : uz.querySelector(".rangeslider")) && void 0 !== zz ? zz : null;
        null === Ez || void 0 === Ez || Ez.setAttribute("data-pad-slider", ""), null === Ez || void 0 === Ez || Ez.setAttribute("data-pad-focusable", ""), null === Ez || void 0 === Ez || null === (bz = Ez.querySelector(".rangeslider__handle")) || void 0 === bz || bz.setAttribute("data-pad-slider-handle", ""), vz.current = Ez
      }), []), (0, Ez.useLayoutEffect)((() => {
        var zz, uz;
        oz ? null === (zz = vz.current) || void 0 === zz || zz.setAttribute("aria-disabled", "true") : null === (uz = vz.current) || void 0 === uz || uz.removeAttribute("aria-disabled")
      }), [oz]);
      const xz = (null !== (uz = String(Mz).split(".")[1]) && void 0 !== uz ? uz : "").length,
        Jz = zz => {
          const uz = Number((Math.round((zz - iz) / Mz) * Mz + iz).toFixed(xz));
          return Math.min(lz, Math.max(iz, uz))
        },
        Az = (0, Ez.useRef)(sz);
      Az.current = sz, (0, Ez.useEffect)((() => {
        const zz = Nz.current;
        if (!zz) return;
        const uz = zz => {
          var uz;
          Kz.has(zz.key) && (null === (uz = Az.current) || void 0 === uz || uz.call(Az))
        };
        return zz.addEventListener("keyup", uz), () => {
          zz.removeEventListener("keyup", uz)
        }
      }), []);
      const Tz = (0, Ez.useRef)(!1);
      return (0, dz.f)(vz, {
        adjust: zz => {
          if (oz) return;
          const uz = null !== rz && void 0 !== rz ? rz : Math.max(Mz, Math.round((lz - iz) / 20 / Mz) * Mz),
            Ez = Jz(bz + zz * uz * (Oz ? -1 : 1));
          Ez !== bz && (null === fz || void 0 === fz || fz(), tz(Ez), null === sz || void 0 === sz || sz())
        },
        setFraction: zz => {
          if (oz) return;
          const uz = Jz(iz + (Oz ? 1 - zz : zz) * (lz - iz));
          uz !== bz && (Tz.current || (Tz.current = !0, null === fz || void 0 === fz || fz()), tz(uz))
        },
        endDrag: () => {
          Tz.current && (Tz.current = !1, null === sz || void 0 === sz || sz())
        }
      }), (0, Fz.jsx)("div", {
        ref: Nz,
        style: {
          display: "contents"
        },
        children: (0, Fz.jsx)(nz.c, {
          value: bz,
          min: iz,
          max: lz,
          step: Mz,
          onChange: tz,
          orientation: Hz,
          reverse: Oz,
          tooltip: Zz,
          labels: Rz,
          handleLabel: wz,
          format: Xz,
          onChangeStart: () => {
            null === fz || void 0 === fz || fz(), null === pz || void 0 === pz || pz(!0)
          },
          onChangeComplete: () => {
            null === pz || void 0 === pz || pz(!1), null === sz || void 0 === sz || sz()
          }
        })
      })
    }
    async function Xz() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      const uz = Oz.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: "",
        unlockPointerKey: zz
      });
      !0 === await uz.getResult() && (0, pz.reloadBloxd)()
    }

    function fz(zz) {
      let {
        label: uz,
        options: bz,
        value: Ez,
        onChange: nz,
        circleInfoText: iz
      } = zz;
      return (0, Fz.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, Fz.jsxs)("div", {
          className: "SliderText",
          children: [uz, iz && (0, Fz.jsx)(lz.b, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: iz
          })]
        }), (0, Fz.jsx)(Mz.d, {
          ariaLabel: uz,
          options: bz,
          value: Ez,
          onChange: nz
        })]
      })
    }
  },
  6389: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      default: () => Iz
    });
    var Ez = bz(56),
      nz = bz(1490),
      iz = bz(6283),
      lz = bz(1212),
      Mz = bz(328),
      tz = bz(1305),
      Hz = bz(1482),
      Oz = bz(1419),
      pz = bz(1332),
      dz = bz(2455),
      Fz = bz(2584),
      Zz = bz(4305),
      Rz = bz(1114),
      Kz = bz(1473),
      wz = bz(96),
      Xz = bz(1181);
    const fz = bz.p + "static/media/bloxdhubLogo.6a6c367af2ad6e6f1eb3.webp";
    var sz = bz(1038),
      rz = bz.n(sz),
      oz = bz(1047),
      Nz = bz(1322),
      vz = bz(6274),
      xz = bz(1089);
    const Jz = (0, Ez.lazy)((() => Promise.all([bz.e(105), bz.e(74), bz.e(131), bz.e(125), bz.e(124)]).then((() => bz(6301))).then((zz => ({
      default: zz.ShaderPackPublishForm
    })))));

    function Az(zz) {
      let {
        details: uz,
        owner: bz,
        onChanged: nz
      } = zz;
      const {
        t: lz
      } = (0, Xz.F)(), Mz = (0, Hz.useNavigatePreserveSearch)(), {
        userContext: pz
      } = (0, Rz.c)(), [dz, Fz] = (0, Ez.useState)(!1), [Zz, wz] = (0, Ez.useState)(null), [fz, sz] = (0, Ez.useState)(!1), {
        packId: Az,
        name: Tz,
        description: Lz,
        live: Pz
      } = uz;
      async function Gz(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : nz;
        Fz(!0), wz(null);
        try {
          await zz(), uz()
        } catch (bz) {
          console.error("Failed to change a shader pack", bz), wz((0, vz.v)(bz, lz, "shaderPackListing:ownerActionFailed"))
        } finally {
          Fz(!1)
        }
      }
      const az = (0, vz.q)(pz);
      return (0, xz.jsxs)("section", {
        className: "ShaderPackOwnerPanel",
        children: [(0, xz.jsx)("h2", {
          className: "ShaderPackSectionTitle",
          children: lz("general:manage")
        }), (0, vz.T)(bz, !(null === Pz || void 0 === Pz || !Pz.renderId), Date.now(), lz).map((zz => (0, xz.jsxs)("div", {
          className: rz()("ShaderPackOwnerNotice", {
            Warning: "warning" === zz.tone
          }),
          children: [(0, xz.jsx)(oz.c, {
            name: "warning" === zz.tone ? "triangle-exclamation" : "circle-info"
          }), (0, xz.jsxs)("div", {
            children: [zz.text, zz.detail && (0, xz.jsx)("pre", {
              className: "ShaderPackOwnerNoticeDetail",
              children: zz.detail
            })]
          })]
        }, zz.text))), uz.ban && (0, xz.jsxs)("div", {
          className: "ShaderPackOwnerNotice Warning",
          children: [(0, xz.jsx)(oz.c, {
            name: "ban"
          }), (0, xz.jsxs)("div", {
            children: ["Banned by ", uz.ban.byName, " on ", new Date(uz.ban.at).toLocaleString()]
          })]
        }), Zz && (0, xz.jsx)("div", {
          className: "ShaderPackOwnerError",
          children: Zz
        }), (0, xz.jsxs)("div", {
          className: "ShaderPackOwnerActions",
          children: [(0, xz.jsxs)(Oz.V, {
            disabled: dz,
            onClick: () => {
              !async function() {
                const zz = await Nz.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:renameTitle",
                  initialValue: Tz,
                  maxLength: iz.y,
                  submitText: "general:save",
                  validate: zz => zz.trim().length < iz.z ? lz("shaderPackListing:nameTooShort", {
                    min: String(iz.z)
                  }) : null
                }).getResult();
                "notificationTornDown" !== zz && "submit" === (null === zz || void 0 === zz ? void 0 : zz.type) && zz.value.trim() !== Tz && await Gz((() => Kz.c.updateShaderPack(pz, {
                  packId: Az,
                  name: zz.value.trim()
                })))
              }()
            },
            children: [(0, xz.jsx)(oz.c, {
              name: "pen"
            }), " ", lz("shaderPackListing:rename")]
          }), (0, xz.jsxs)(Oz.V, {
            disabled: dz,
            onClick: () => {
              !async function() {
                const zz = await Nz.NotificationProvider.showInputPopup({
                  title: "shaderPackListing:editDescription",
                  initialValue: Lz,
                  maxLength: iz.l,
                  multiline: !0,
                  allowEmptySubmit: !0,
                  submitText: "general:save"
                }).getResult();
                "notificationTornDown" !== zz && "submit" === (null === zz || void 0 === zz ? void 0 : zz.type) && zz.value.trim() !== Lz && await Gz((() => Kz.c.updateShaderPack(pz, {
                  packId: Az,
                  description: zz.value.trim()
                })))
              }()
            },
            children: [(0, xz.jsx)(oz.c, {
              name: "file-lines"
            }), " ", lz("shaderPackListing:editDescription")]
          }), (0, xz.jsxs)(Oz.V, {
            disabled: dz || bz.isBanned && !bz.listed,
            onClick: () => {
              Gz((() => Kz.c.updateShaderPack(pz, {
                packId: Az,
                listed: !bz.listed
              })))
            },
            children: [(0, xz.jsx)(oz.c, {
              name: bz.listed ? "eye-slash" : "eye"
            }), " ", lz(bz.listed ? "shaderPackListing:unlist" : "shaderPackListing:relist")]
          }), !bz.isBanned && (0, xz.jsxs)(Oz.f, {
            disabled: dz,
            onClick: () => {
              sz(!fz)
            },
            children: [(0, xz.jsx)(oz.c, {
              name: "upload"
            }), " ", lz("shaderPackListing:uploadVersion")]
          }), (0, xz.jsxs)(Oz.O, {
            disabled: dz || bz.isBanned,
            onClick: () => {
              !async function() {
                !0 === await Nz.NotificationProvider.showPromptPopup({
                  title: "shaderPackListing:deleteTitle",
                  subtitle: "shaderPackListing:deleteSubtitle",
                  confirmText: "general:delete",
                  cancelText: "general:cancel",
                  destructive: !0
                }).getResult() && await Gz((() => Kz.c.deleteShaderPack(pz, Az)), (() => {
                  Mz(`${vz.P}?section=mine`, {
                    replace: !0
                  })
                }))
              }()
            },
            children: [(0, xz.jsx)(oz.c, {
              name: "trash-can"
            }), " ", lz("general:delete")]
          }), az && (0, xz.jsxs)(Oz.O, {
            disabled: dz,
            onClick: () => {
              Gz((() => Kz.c.setShaderPackBanned(pz, Az, !bz.isBanned)))
            },
            children: [(0, xz.jsx)(oz.c, {
              name: bz.isBanned ? "circle-check" : "ban"
            }), " ", bz.isBanned ? "Unban" : "Ban"]
          })]
        }), fz && (0, xz.jsx)(Ez.Suspense, {
          fallback: (0, xz.jsx)(tz.c, {}),
          children: (0, xz.jsx)(Jz, {
            existing: {
              packId: Az,
              name: Tz,
              description: Lz
            },
            onPublished: () => {
              sz(!1), nz()
            }
          })
        })]
      })
    }
    var Tz = bz(79),
      Lz = bz(1840),
      Pz = bz(1266),
      Gz = bz(4776),
      az = bz(1195),
      Vz = bz(6289),
      mz = bz(6286),
      qz = bz(6296);

    function hz(zz) {
      let {
        item: uz
      } = zz;
      const {
        t: bz
      } = (0, Xz.F)(), [nz] = (0, Vz.k)(), [lz, Mz] = (0, Ez.useState)(nz), [tz, Hz] = (0, Ez.useState)(!1), [Oz, pz] = (0, Ez.useState)(!1), {
        s3Url: dz
      } = az.clientSideServerUrls, {
        width: Fz,
        height: Zz
      } = iz.m.large, Rz = (0, iz.q)(dz, uz, lz, "large"), {
        renderVersion: Kz
      } = uz;
      return (0, xz.jsxs)("div", {
        className: "ShaderPackPreviews",
        children: [(0, xz.jsx)(qz.d, {
          selected: lz,
          onSelect: zz => {
            Mz(zz), Hz(!1)
          },
          imageUrl: zz => (0, iz.q)(dz, uz, zz, "thumb")
        }), (0, xz.jsxs)("div", {
          className: "ShaderPackPreviewStage",
          children: [!tz && (0, xz.jsxs)("button", {
            type: "button",
            className: "ShaderPackPreviewMain",
            title: null === Kz ? void 0 : bz("shaderPackListing:fullSize"),
            disabled: null === Kz,
            onClick: () => {
              pz(!0)
            },
            children: [(0, xz.jsx)("img", {
              src: Rz,
              width: Fz,
              height: Zz,
              alt: bz(vz.db[lz]),
              draggable: !1
            }), (0, xz.jsx)(mz.c, {
              item: uz
            })]
          }), !tz && null !== Kz && (0, xz.jsxs)(Sz, {
            side: "Right",
            onClick: () => {
              Hz(!0)
            },
            children: [(0, xz.jsx)(oz.c, {
              name: "arrows-left-right"
            }), " ", bz("shaderPackListing:compare")]
          }), tz && null !== Kz && (0, xz.jsx)(gz, {
            item: uz,
            packUrl: Rz,
            baselineUrl: (0, iz.i)(dz, Kz, lz, "large")
          }), tz && (0, xz.jsx)(Sz, {
            side: "Left",
            onClick: () => {
              Hz(!1)
            },
            children: bz("shaderPackListing:withPack")
          }), tz && (0, xz.jsx)(Sz, {
            side: "Right",
            onClick: () => {
              Hz(!1)
            },
            children: bz("shaderPackListing:withoutPack")
          })]
        }), Oz && (0, xz.jsx)(Uz, {
          fullUrl: (0, iz.q)(dz, uz, lz, "full"),
          largeUrl: Rz,
          alt: bz(vz.db[lz]),
          onClose: () => {
            pz(!1)
          }
        })]
      })
    }

    function Uz(zz) {
      let {
        fullUrl: uz,
        largeUrl: bz,
        alt: nz,
        onClose: iz
      } = zz;
      const lz = (0, Ez.useRef)(null);
      return (0, Pz.u)("popup", lz, iz), (0, Ez.useEffect)((() => {
        function zz(zz) {
          "Escape" === zz.key && (zz.stopPropagation(), iz())
        }
        return window.addEventListener("keydown", zz, !0), () => {
          window.removeEventListener("keydown", zz, !0)
        }
      }), [iz]), (0, Tz.createPortal)((0, xz.jsxs)("div", {
        ref: lz,
        className: "ShaderPackFullSize",
        onClick: iz,
        children: [(0, xz.jsx)("img", {
          className: "ShaderPackFullSizeImage",
          src: uz,
          alt: nz,
          draggable: !1,
          style: {
            backgroundImage: `url(${bz})`
          }
        }), (0, xz.jsx)(Oz.m, {
          className: "ShaderPackFullSizeClose",
          onClick: iz
        })]
      }), document.body)
    }
    const cz = 5;

    function gz(zz) {
      let {
        item: uz,
        packUrl: bz,
        baselineUrl: nz
      } = zz;
      const {
        t: lz
      } = (0, Xz.F)(), [Mz, tz] = (0, Ez.useState)(50), Hz = (0, Ez.useRef)(!1), Oz = (0, Ez.useRef)(null), {
        width: pz,
        height: dz
      } = iz.m.large;

      function Fz(zz) {
        tz((uz => (0, Lz.f)(uz + zz, 0, 100)))
      }

      function Zz(zz) {
        const uz = zz.currentTarget.getBoundingClientRect();
        tz((0, Lz.f)((zz.clientX - uz.left) / uz.width * 100, 0, 100))
      }
      return (0, Gz.f)(Oz, {
        adjust: zz => {
          Fz(zz * cz)
        },
        setFraction: zz => {
          tz(100 * zz)
        },
        endDrag: () => {}
      }), (0, xz.jsxs)("div", {
        ref: Oz,
        className: "ShaderPackCompare",
        "data-pad-slider": "",
        "data-pad-focusable": "",
        role: "slider",
        tabIndex: 0,
        "aria-label": lz("shaderPackListing:compare"),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(Mz),
        style: {
          "--split": `${Mz}%`
        },
        onKeyDown: function(zz) {
          const uz = "ArrowLeft" === zz.key ? -cz : "ArrowRight" === zz.key ? cz : 0;
          0 !== uz && (zz.preventDefault(), Fz(uz))
        },
        onPointerDown: zz => {
          Hz.current = !0, zz.currentTarget.setPointerCapture(zz.pointerId), Zz(zz)
        },
        onPointerMove: zz => {
          Hz.current && Zz(zz)
        },
        onPointerUp: () => {
          Hz.current = !1
        },
        onPointerCancel: () => {
          Hz.current = !1
        },
        children: [(0, xz.jsx)("img", {
          className: "ShaderPackCompareBaseline",
          src: nz,
          width: pz,
          height: dz,
          alt: "",
          draggable: !1,
          style: {
            backgroundImage: `url(${bz})`
          }
        }), (0, xz.jsx)("div", {
          className: "ShaderPackCompareLine"
        }), (0, xz.jsx)("img", {
          className: "ShaderPackComparePack",
          src: bz,
          width: pz,
          height: dz,
          alt: "",
          draggable: !1
        }), (0, xz.jsx)(mz.c, {
          item: uz,
          className: "ShaderPackCompareNotice"
        })]
      })
    }

    function Sz(zz) {
      let {
        side: uz,
        onClick: bz,
        children: Ez
      } = zz;
      return (0, xz.jsx)("button", {
        type: "button",
        className: `ShaderPackStageButton ${uz}`,
        onClick: bz,
        children: (0, xz.jsx)("span", {
          className: "ShaderPackStageButtonFace SmallTextBold",
          children: Ez
        })
      })
    }
    var yz = bz(4746),
      Dz = bz(298),
      Qz = bz(6382);
    const Wz = {
      compiler: "shaderPack:compilerUnavailable",
      download: "shaderPackListing:useDownloadFailed",
      apiVersion: "shaderPackListing:useOtherApiVersion",
      invalid: "shaderPackListing:useInvalid",
      errors: "shaderPackListing:useFailsHere",
      save: "shaderPack:saveFailed"
    };

    function ez(zz) {
      const {
        userContext: uz
      } = (0, Rz.c)(), [nz, iz] = (0, Ez.useState)(null), [lz, Mz] = (0, Ez.useState)(!1), [tz, Hz] = (0, Ez.useState)(!1), [Oz, pz] = (0, Ez.useState)(null), dz = null === zz || void 0 === zz ? void 0 : zz.packId, Fz = null === zz || void 0 === zz ? void 0 : zz.sourceHash;
      return (0, Ez.useEffect)((() => {
        if (Mz(!1), pz(null), void 0 === dz) return;
        let zz = !1;
        return Promise.all([(0, wz.hasUsableWebGpuAdapter)(), (0, Qz.e)()]).then((uz => {
          let [bz, Ez] = uz;
          var nz;
          zz || (iz(bz), Mz((null === Ez || void 0 === Ez || null === (nz = Ez.listing) || void 0 === nz ? void 0 : nz.packId) === dz && Ez.listing.sourceHash === Fz))
        })).catch((uz => {
          console.error("Failed to check whether this shader pack can be used", uz), zz || iz(!1)
        })), () => {
          zz = !0
        }
      }), [dz, Fz]), {
        webGpuUsable: nz,
        inUse: lz,
        busy: tz,
        errorKey: Oz,
        use: () => {
          null !== zz && async function(zz) {
            Hz(!0), pz(null);
            try {
              const {
                installListedShaderPack: Ez
              } = await Promise.all([bz.e(74), bz.e(131), bz.e(126)]).then((() => bz(39648))), nz = await Ez({
                packId: zz.packId,
                sourceHash: zz.sourceHash,
                name: zz.name,
                ownerName: zz.ownerName,
                description: zz.description
              });
              if ("failed" === nz.kind) return void pz(Wz[nz.reason]);
              Mz(!0), Kz.c.recordShaderPackDownload(uz, zz.packId).catch((zz => {
                console.error("Failed to count a shader pack's download", zz)
              })), (0, yz.j)()
            } catch (Ez) {
              console.error("Failed to use the shader pack", Ez), pz("shaderPack:unexpectedError")
            } finally {
              Hz(!1)
            }
          }(zz)
        }
      }
    }

    function jz(zz) {
      let {
        packUse: uz
      } = zz;
      const {
        t: bz
      } = (0, Xz.F)(), {
        webGpuUsable: Ez,
        inUse: nz,
        busy: iz,
        errorKey: lz,
        use: Mz
      } = uz;
      return (0, xz.jsxs)("div", {
        className: "ShaderPackUse",
        children: [(0, xz.jsxs)(Oz.q, {
          disabled: !0 !== Ez || nz,
          loading: iz,
          onClick: Mz,
          children: [(0, xz.jsx)(oz.c, {
            name: nz ? "check" : "download"
          }), " ", bz(nz ? "shaderPackListing:inUse" : "shaderPackListing:use")]
        }), !1 === Ez && (0, xz.jsx)("div", {
          className: "ShaderPackUseNote",
          children: bz((0, Dz.g)() ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), lz && (0, xz.jsx)("div", {
          className: "ShaderPackUseNote Error",
          children: bz(lz)
        })]
      })
    }

    function Iz() {
      var zz;
      const {
        t: uz
      } = (0, Xz.F)(), bz = (0, Hz.useNavigatePreserveSearch)(), {
        packId: iz
      } = (0, nz.D)(), {
        userContext: lz,
        isUserContextUpdating: Mz
      } = (0, Rz.c)(), [pz, dz] = (0, Ez.useState)(null), [Fz, wz] = (0, Ez.useState)(null), [fz, sz] = (0, Ez.useState)(0), rz = (0, Ez.useRef)(0);

      function oz() {
        var zz;
        null !== (zz = (0, Hz.getPreviousLocation)()) && void 0 !== zz && zz.startsWith(vz.P) ? bz(-1) : bz(vz.P)
      }(0, Zz.e)(oz), (0, Vz.e)(), (0, Ez.useEffect)((() => {
        if (Mz || void 0 === iz) return;
        const zz = ++rz.current;
        wz(null), Kz.c.getShaderPack(lz, iz).then((uz => {
          rz.current === zz && dz(uz)
        })).catch((uz => {
          rz.current === zz && (console.error("Failed to get the shader pack", uz), dz(null), wz({
            error: uz
          }))
        }))
      }), [iz, lz, Mz, fz]);
      const Nz = () => {
          sz((zz => zz + 1))
        },
        Jz = (null === pz || void 0 === pz ? void 0 : pz.packId) === iz ? pz : null,
        Tz = (0, Vz.m)(),
        Lz = ez(null !== (zz = null === Jz || void 0 === Jz ? void 0 : Jz.live) && void 0 !== zz ? zz : null),
        Pz = null !== Jz && void 0 !== Jz && Jz.live ? (0, xz.jsx)(Bz, {
          item: Jz.live,
          favourites: Tz,
          packUse: Lz
        }) : null;
      return (0, xz.jsxs)("article", {
        className: "ShaderPackInformation AnimFadeIn",
        children: [(0, xz.jsx)(Oz.d, {
          onClick: oz,
          children: uz("shaderPackListing:backToPacks")
        }), null === Jz && null === Fz && (0, xz.jsx)("div", {
          className: "ShaderPackInformationMessage",
          children: (0, xz.jsx)(tz.c, {})
        }), null !== Fz && (0, xz.jsxs)("div", {
          className: "ShaderPackInformationMessage",
          children: [(0, vz.v)(Fz.error, uz, "shaderPackListing:loadPackFailed"), (0, xz.jsx)(Oz.f, {
            onClick: Nz,
            children: uz("general:tryAgain")
          })]
        }), null !== Jz && null === Fz && (0, xz.jsxs)("div", {
          className: "ShaderPackInformationBody",
          children: [(0, xz.jsxs)("header", {
            className: "ShaderPackInformationHeader",
            children: [(0, xz.jsx)("h1", {
              className: "FullyFancyText",
              children: Jz.name
            }), Pz]
          }), Jz.live && (0, xz.jsx)(hz, {
            item: Jz.live
          }), Jz.live && (0, xz.jsx)(Cz, {
            item: Jz.live,
            ownerPreview: Jz.ownerPreview,
            bloxdhubSlug: Jz.bloxdhubSlug,
            actions: Pz
          }), Jz.owner && (0, xz.jsx)(Az, {
            details: Jz,
            owner: Jz.owner,
            onChanged: Nz
          })]
        })]
      })
    }

    function Bz(zz) {
      let {
        item: uz,
        favourites: bz,
        packUse: Ez
      } = zz;
      const nz = bz.isFavourite(uz.packId);
      return (0, xz.jsxs)("div", {
        className: "ShaderPackInformationActions",
        children: [wz.featureFlags.settings.canUseShaderPacks && (0, xz.jsx)(jz, {
          packUse: Ez
        }), (0, xz.jsx)(Oz.z, {
          className: "ShaderPackInformationLike",
          onClick: () => {
            bz.toggle(uz.packId)
          },
          isLiked: !0 === nz,
          isLoading: null === nz
        })]
      })
    }

    function Cz(zz) {
      let {
        item: uz,
        ownerPreview: bz,
        bloxdhubSlug: Ez,
        actions: nz
      } = zz;
      const {
        t: Mz
      } = (0, Xz.F)(), tz = (0, Fz.k)(), Oz = null === Ez ? null : (0, iz.e)(Ez);
      return (0, xz.jsxs)("div", {
        className: "ShaderPackFacts",
        children: [uz.description && (0, xz.jsx)("p", {
          className: "ShaderPackDescription",
          children: uz.description
        }), (0, xz.jsxs)("div", {
          className: "ShaderPackFeatureList",
          children: [(null !== bz || null !== Oz) && (0, xz.jsx)("div", {
            className: "ShaderPackAuthor",
            children: null !== bz ? (0, xz.jsxs)(xz.Fragment, {
              children: [(0, xz.jsx)(dz.i, {
                playerSocialPreview: bz,
                showLocation: !1,
                linkToProfile: !0
              }), null !== Oz && (0, xz.jsx)("a", {
                className: "ShaderPackBloxdhubLogo",
                href: Oz,
                target: "_blank",
                rel: "noopener noreferrer",
                children: (0, xz.jsx)("img", {
                  src: fz,
                  alt: iz.b
                })
              })]
            }) : (0, xz.jsxs)("a", {
              className: "ShaderPackBloxdhubName",
              href: Oz,
              target: "_blank",
              rel: "noopener noreferrer",
              children: [iz.b, (0, xz.jsx)("img", {
                src: fz,
                alt: ""
              })]
            })
          }), vz.z.filter((zz => uz.features.includes(zz))).map((zz => (0, xz.jsx)(Hz.LinkPreserveSearch, {
            className: "ShaderPackFeature",
            to: (0, vz.J)(zz),
            children: Mz(vz.M[zz])
          }, zz)))]
        }), nz, (0, xz.jsxs)("dl", {
          className: "ShaderPackFactList",
          children: [(0, xz.jsxs)("div", {
            children: [(0, xz.jsx)("dt", {
              children: Mz("shaderPackListing:downloads")
            }), (0, xz.jsx)("dd", {
              children: (0, lz.T)(uz.downloads)
            })]
          }), (0, xz.jsx)(Yz, {
            label: Mz("shaderPackListing:updated"),
            time: uz.listedUpdatedAt,
            now: tz
          }), (0, xz.jsx)(Yz, {
            label: Mz("shaderPackListing:created"),
            time: uz.publishedAt,
            now: tz
          }), null !== uz.gpuCost && (0, xz.jsxs)("div", {
            children: [(0, xz.jsx)("dt", {
              children: Mz("shaderPackListing:lag")
            }), (0, xz.jsx)("dd", {
              children: Mz("shaderPackListing:lagPercent", {
                percent: String((0, vz.O)(uz.gpuCost))
              })
            })]
          }), (0, xz.jsxs)("div", {
            children: [(0, xz.jsx)("dt", {
              children: Mz("shaderPackListing:size")
            }), (0, xz.jsx)("dd", {
              children: Mz("shaderPackListing:sizeValue", {
                kilobytes: String((0, vz.N)(uz.sourceBytes))
              })
            })]
          }), (0, xz.jsxs)("div", {
            children: [(0, xz.jsx)("dt", {
              children: Mz("shaderPackListing:files")
            }), (0, xz.jsx)("dd", {
              children: uz.fileCount
            })]
          })]
        })]
      })
    }

    function Yz(zz) {
      let {
        label: uz,
        time: bz,
        now: Ez
      } = zz;
      const {
        t: nz,
        selectedLanguage: iz
      } = (0, Xz.F)(), lz = new Date(bz);
      let tz = lz.toLocaleDateString();
      if (Ez - bz <= 30 * Mz.j) {
        const zz = (0, Xz.p)(iz.code, "shaderPackListing:timeAgo");
        tz = nz("shaderPackListing:timeAgo", {
          time: (0, Mz.fb)(zz, bz, Ez)
        })
      }
      return (0, xz.jsx)(pz.f, {
        tooltipInner: lz.toLocaleString(),
        children: (0, xz.jsxs)("div", {
          children: [(0, xz.jsx)("dt", {
            children: uz
          }), (0, xz.jsx)("dd", {
            children: tz
          })]
        })
      })
    }
  },
  4770: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => lz
    });
    var Ez = bz(1038),
      nz = bz.n(Ez),
      iz = bz(1089);

    function lz(zz) {
      let {
        options: uz,
        value: bz,
        onChange: Ez,
        ariaLabel: lz,
        className: Mz,
        reselectable: tz = !1,
        keepsFocus: Hz = !1
      } = zz;
      return (0, iz.jsx)("div", {
        className: nz()("SegmentedToggle", Mz),
        role: "group",
        "aria-label": lz,
        children: uz.map((zz => {
          const uz = zz.value === bz;
          return (0, iz.jsx)("button", {
            type: "button",
            "aria-pressed": uz,
            "aria-label": zz.ariaLabel,
            title: zz.ariaLabel,
            className: nz()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: uz
            }),
            onMouseDown: Hz ? zz => {
              zz.preventDefault()
            } : void 0,
            onClick: () => {
              uz && !tz || Ez(zz.value)
            },
            children: zz.label
          }, zz.value)
        }))
      })
    }
  },
  4776: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => iz,
      f: () => lz
    });
    var Ez = bz(56);
    const nz = new WeakMap,
      iz = zz => {
        var uz;
        const bz = zz.closest("[data-pad-slider]");
        return bz && null !== (uz = nz.get(bz)) && void 0 !== uz ? uz : null
      },
      lz = (zz, uz) => {
        const bz = (0, Ez.useRef)(uz);
        bz.current = uz, (0, Ez.useEffect)((() => {
          if (zz.current) return ((zz, uz) => (nz.set(zz, uz), () => {
            nz.get(zz) === uz && nz.delete(zz)
          }))(zz.current, {
            adjust: zz => {
              bz.current.adjust(zz)
            },
            setFraction: zz => {
              bz.current.setFraction(zz)
            },
            endDrag: () => {
              bz.current.endDrag()
            }
          })
        }), [zz])
      }
  },
  6382: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => nz,
      e: () => iz
    });
    var Ez = bz(33);
    const nz = "shaderPack";
    async function iz() {
      var zz;
      let uz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (zz = await Ez.d.getItem(nz, uz)) && void 0 !== zz ? zz : null
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);