export const id = 102;
export const ids = [102];
export const modules = {
  4653: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Wv
    });
    var hv = Pv(1035),
      Sv = Pv.n(hv),
      ev = Pv(1042),
      gv = Pv(1327),
      pv = Pv(3258),
      dv = Pv(108),
      Nv = Pv(3301),
      lv = Pv(3289),
      Tv = Pv(1082);

    function Wv(vv) {
      let {
        game: zv
      } = vv;
      const Pv = (0, dv.i)() ? "large" : "small",
        hv = (0, Nv.g)(zv, Pv),
        Wv = (0, pv.f)(hv),
        wv = void 0 !== Wv.blurhash;
      return (0, Tv.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [Wv.isLoading && !wv && (0, Tv.jsx)(gv.c, {
          loaderType: "Secondary"
        }), !Wv.failed && (null !== Wv.src || wv) && (0, Tv.jsx)("div", {
          className: Sv()("SchematicImage", lv.g, {
            SchematicImageFadeIn: Wv.fadeIn && !wv
          }),
          style: (0, lv.e)(Wv),
          children: (0, Tv.jsx)(lv.b, {
            image: Wv
          })
        }), Wv.failed && (0, Tv.jsx)("div", {
          className: "SchematicImageError",
          children: (0, Tv.jsx)(ev.b, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  4782: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => wv
    });
    var hv = Pv(52),
      Sv = Pv(1035),
      ev = Pv.n(Sv),
      gv = Pv(4698),
      pv = Pv(1327),
      dv = Pv(1175),
      Nv = Pv(2940),
      lv = Pv(3043),
      Tv = Pv(1042),
      Wv = Pv(1082);

    function wv(vv) {
      let {
        folderName: zv,
        onTexturePackUpdated: Sv,
        disabled: wv = !1,
        maxFileSizeMb: av,
        packOwner: sv
      } = vv;
      const {
        t: Cv
      } = (0, dv.x)(), [iv, cv] = (0, hv.useState)(!1), [Gv, mv] = (0, hv.useState)(null), [jv, fv] = (0, hv.useState)(null), Fv = (0, hv.useRef)(null);
      const {
        getRootProps: Yv,
        getInputProps: nv,
        isDragActive: Ov
      } = (0, gv.d)({
        onDrop: async function(vv) {
          cv(!0);
          try {
            const zv = await (0, Nv.l)(vv);
            if ("customGame" === sv && (0, lv.m)(zv)) return void mv(Cv(lv.d));
            if (void 0 !== av) {
              const vv = JSON.stringify(zv).length / 1048576;
              if (vv > av) return void mv(`File size is too large. Max size is ${av}MB. Current size is ${vv}MB.`)
            }
            mv(null), fv(null), Sv(zv), Fv.current = zv,
              function(vv, zv) {
                const hv = vv.modelOverrides;
                hv && Promise.all([Pv.e(195), Pv.e(194)]).then((() => Pv(9074))).then((Pv => {
                  let {
                    packDisplayName: Sv,
                    refusedPackModels: ev,
                    packModelSummary: gv
                  } = Pv;
                  const pv = Sv(vv.metaData);
                  zv(gv(pv, ev(pv, hv, !1)))
                })).catch((vv => {
                  console.error("Checking the texture pack's models failed:", vv)
                }))
              }(zv, (vv => {
                Fv.current === zv && fv(vv)
              }))
          } catch {
            mv("Invalid Texture Pack Folder")
          } finally {
            cv(!1)
          }
        },
        useFsAccessApi: !1,
        disabled: wv
      });
      return (0, Wv.jsxs)("div", {
        className: "CustomTexturePackContainer",
        children: [(0, Wv.jsxs)("div", {
          className: "CustomTextureWarning",
          children: [Cv("settingsMenu:customTextureWarning"), ".", (0, Wv.jsx)("br", {}), Cv("settingsMenu:viewDocumentation"), ":", " ", (0, Wv.jsx)("a", {
            href: "https://github.com/Bloxdy/texturePacks",
            target: "_blank",
            rel: "noreferrer",
            children: "github.com/Bloxdy/texturePacks"
          })]
        }), Gv && (0, Wv.jsxs)("div", {
          className: "CustomTextureError",
          children: [Cv("general:error"), ": ", Gv]
        }), jv && (0, Wv.jsx)("div", {
          className: "CustomTextureError",
          children: jv
        }), (0, Wv.jsxs)("div", {
          ...Yv({
            className: ev()("CustomTextureFolderUpload", {
              ActiveDrag: Ov,
              Disabled: wv
            })
          }),
          children: [(0, Wv.jsx)("input", {
            ...nv({
              webkitdirectory: "true"
            })
          }), iv && (0, Wv.jsx)("div", {
            className: "CustomTextureFolderUploadLoading",
            children: (0, Wv.jsx)(pv.c, {})
          }), !iv && !Ov && zv && (0, Wv.jsxs)(Wv.Fragment, {
            children: [(0, Wv.jsx)("div", {
              className: "CustomTextureFolderUploadIcon Active",
              children: (0, Wv.jsx)(Tv.b, {
                name: "folder-image"
              })
            }), (0, Wv.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions Active",
              children: zv
            })]
          }), !iv && (Ov || !zv) && (0, Wv.jsxs)(Wv.Fragment, {
            children: [(0, Wv.jsx)("div", {
              className: "CustomTextureFolderUploadIcon",
              children: (0, Wv.jsx)(Tv.b, {
                name: "up-from-bracket"
              })
            }), (0, Wv.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions",
              children: "Drag and drop a Texture Pack folder here"
            })]
          })]
        })]
      })
    }
  },
  4732: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => av,
      f: () => Gv,
      i: () => sv,
      l: () => cv
    });
    var hv = Pv(52),
      Sv = Pv(4738),
      ev = Pv(4129),
      gv = Pv(1344),
      pv = Pv(4765),
      dv = Pv(1035),
      Nv = Pv.n(dv),
      lv = Pv(1336),
      Tv = Pv(1692),
      Wv = Pv(4773),
      wv = Pv(1082);

    function av(vv) {
      let {
        label: zv,
        onClick: Pv,
        checked: hv,
        circleInfoText: Sv,
        className: pv,
        disabled: dv,
        note: lv
      } = vv;
      return (0, wv.jsxs)("div", {
        "aria-disabled": dv || void 0,
        "data-pad-focusable": !0,
        className: Nv()("SettingBox CheckboxContainer", {
          [pv]: pv,
          SettingBoxDisabled: dv
        }),
        onClick: () => {
          dv || Pv(!hv)
        },
        children: [(0, wv.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, wv.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, wv.jsx)(ev.e, {
              className: "SettingsCheckbox",
              checked: hv,
              disabled: dv,
              onChange: () => {}
            })
          }), (0, wv.jsxs)("div", {
            className: "CheckboxText",
            children: [zv, Sv && (0, wv.jsx)("span", {
              onClick: vv => vv.stopPropagation(),
              children: (0, wv.jsx)(gv.d, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: Sv
              })
            })]
          })]
        }), lv && (0, wv.jsx)("div", {
          className: "SettingNote",
          children: lv
        })]
      })
    }

    function sv(vv) {
      let {
        name: zv,
        onChange: Pv,
        min: Sv,
        max: ev,
        step: pv,
        initValue: dv,
        circleInfoText: lv,
        format: Tv,
        className: Wv,
        padStep: av,
        disabled: sv = !1,
        selectableMax: Cv,
        cappedNote: cv,
        onChangeComplete: Gv
      } = vv;
      const [mv, jv] = (0, hv.useState)(dv), fv = (0, hv.useRef)(dv);
      (0, hv.useEffect)((() => {
        fv.current = dv, jv(dv)
      }), [dv]);
      const Fv = void 0 !== Cv && Cv < ev,
        Yv = Fv ? {
          "--slider-selectable": (Cv - Sv) / (ev - Sv)
        } : void 0;
      return (0, wv.jsxs)("div", {
        className: Nv()("SettingBox SettingsSliderDiv", {
          [Wv]: Wv,
          SettingBoxDisabled: sv,
          SliderCapped: Fv
        }),
        style: Yv,
        children: [(0, wv.jsxs)("div", {
          className: "SliderText",
          children: [`${zv}: ${Tv?Tv(mv):mv}`, lv && (0, wv.jsx)(gv.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: lv
          })]
        }), (0, wv.jsx)("div", {
          className: "SliderDiv",
          children: (0, wv.jsx)(iv, {
            value: mv,
            min: Sv,
            max: ev,
            step: pv,
            onChange: vv => {
              if (Fv && vv >= Cv && mv === Cv) return;
              const zv = Fv ? Math.min(vv, Cv) : vv;
              fv.current = zv, jv(zv), Pv(zv)
            },
            onChangeComplete: Gv && (() => {
              Gv(fv.current)
            }),
            format: Tv,
            padStep: av,
            disabled: sv
          })
        }), Fv && cv && (0, wv.jsx)("div", {
          className: "SettingNote",
          children: cv
        })]
      })
    }
    const Cv = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function iv(vv) {
      var zv;
      let {
        value: Pv,
        min: ev,
        max: gv,
        step: pv,
        onChange: dv,
        orientation: Nv,
        reverse: lv,
        setIsChanging: Tv,
        tooltip: av,
        labels: sv,
        handleLabel: iv,
        format: cv,
        onChangeStart: Gv,
        onChangeComplete: mv,
        padStep: jv,
        disabled: fv = !1
      } = vv;
      const Fv = (0, hv.useRef)(null),
        Yv = (0, hv.useRef)(null);
      (0, hv.useLayoutEffect)((() => {
        var vv, zv, Pv;
        const hv = null !== (vv = null === (zv = Fv.current) || void 0 === zv ? void 0 : zv.querySelector(".rangeslider")) && void 0 !== vv ? vv : null;
        null === hv || void 0 === hv || hv.setAttribute("data-pad-slider", ""), null === hv || void 0 === hv || hv.setAttribute("data-pad-focusable", ""), null === hv || void 0 === hv || null === (Pv = hv.querySelector(".rangeslider__handle")) || void 0 === Pv || Pv.setAttribute("data-pad-slider-handle", ""), Yv.current = hv
      }), []), (0, hv.useLayoutEffect)((() => {
        var vv, zv;
        fv ? null === (vv = Yv.current) || void 0 === vv || vv.setAttribute("aria-disabled", "true") : null === (zv = Yv.current) || void 0 === zv || zv.removeAttribute("aria-disabled")
      }), [fv]);
      const nv = (null !== (zv = String(pv).split(".")[1]) && void 0 !== zv ? zv : "").length,
        Ov = vv => {
          const zv = Number((Math.round((vv - ev) / pv) * pv + ev).toFixed(nv));
          return Math.min(gv, Math.max(ev, zv))
        },
        Dv = (0, hv.useRef)(mv);
      Dv.current = mv, (0, hv.useEffect)((() => {
        const vv = Fv.current;
        if (!vv) return;
        const zv = vv => {
          var zv;
          Cv.has(vv.key) && (null === (zv = Dv.current) || void 0 === zv || zv.call(Dv))
        };
        return vv.addEventListener("keyup", zv), () => {
          vv.removeEventListener("keyup", zv)
        }
      }), []);
      const Kv = (0, hv.useRef)(!1);
      return (0, Wv.e)(Yv, {
        adjust: vv => {
          if (fv) return;
          const zv = null !== jv && void 0 !== jv ? jv : Math.max(pv, Math.round((gv - ev) / 20 / pv) * pv),
            hv = Ov(Pv + vv * zv * (lv ? -1 : 1));
          hv !== Pv && (null === Gv || void 0 === Gv || Gv(), dv(hv), null === mv || void 0 === mv || mv())
        },
        setFraction: vv => {
          if (fv) return;
          const zv = Ov(ev + (lv ? 1 - vv : vv) * (gv - ev));
          zv !== Pv && (Kv.current || (Kv.current = !0, null === Gv || void 0 === Gv || Gv()), dv(zv))
        },
        endDrag: () => {
          Kv.current && (Kv.current = !1, null === mv || void 0 === mv || mv())
        }
      }), (0, wv.jsx)("div", {
        ref: Fv,
        style: {
          display: "contents"
        },
        children: (0, wv.jsx)(Sv.d, {
          value: Pv,
          min: ev,
          max: gv,
          step: pv,
          onChange: dv,
          orientation: Nv,
          reverse: lv,
          tooltip: av,
          labels: sv,
          handleLabel: iv,
          format: cv,
          onChangeStart: () => {
            null === Gv || void 0 === Gv || Gv(), null === Tv || void 0 === Tv || Tv(!0)
          },
          onChangeComplete: () => {
            null === Tv || void 0 === Tv || Tv(!1), null === mv || void 0 === mv || mv()
          }
        })
      })
    }
    async function cv() {
      let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      const zv = lv.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: "",
        unlockPointerKey: vv
      });
      !0 === await zv.getResult() && (0, Tv.reloadBloxd)()
    }

    function Gv(vv) {
      let {
        label: zv,
        options: Pv,
        value: hv,
        onChange: Sv,
        circleInfoText: ev
      } = vv;
      return (0, wv.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, wv.jsxs)("div", {
          className: "SliderText",
          children: [zv, ev && (0, wv.jsx)(gv.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: ev
          })]
        }), (0, wv.jsx)(pv.c, {
          ariaLabel: zv,
          options: Pv,
          value: hv,
          onChange: Sv
        })]
      })
    }
  },
  4727: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => iv,
      g: () => cv
    });
    var hv = Pv(2940),
      Sv = Pv(2944),
      ev = Pv(52),
      gv = Pv(1035),
      pv = Pv.n(gv),
      dv = Pv(1327),
      Nv = Pv(2934),
      lv = Pv(1336),
      Tv = Pv(4732),
      Wv = Pv(4782),
      wv = Pv(635),
      av = Pv(4786),
      sv = Pv(1082);

    function Cv() {
      (0, Tv.l)("texturePackPickReload")
    }

    function iv(vv) {
      var zv;
      let {
        setApplySettingsCallback: Pv
      } = vv;
      const [, gv] = (0, ev.useReducer)((vv => vv + 1), 0), pv = (0, ev.useRef)(!1), dv = (0, ev.useRef)(null);

      function iv(vv, zv) {
        Nv.b.setFromJson(vv, "player");
        const hv = Nv.b.saveTexturePack();
        if (wv.r) {
          const vv = Nv.b.toJson();
          hv.then((zv => {
            zv && (0, av.h)(vv, Cv)
          }))
        } else pv.current ||= zv, dv.current !== Nv.b.getId() || Nv.b.getId() === Sv.j.CUSTOM && pv.current ? Pv((() => Tv.l)) : Pv(null);
        gv()
      }
      async function Gv(vv) {
        if (Nv.b.getId() !== vv.metaData.id) {
          if (Nv.b.getId() === Sv.j.CUSTOM && Nv.b.getFromFolderName()) {
            const vv = lv.NotificationProvider.showPromptPopup({
              title: "settingsMenu:loseChangesTitle",
              subtitle: "settingsMenu:loseChangesSubtitle",
              confirmText: "general:continue",
              destructive: !0,
              confirmTooltip: "",
              cancelText: "general:cancel",
              cancelTooltip: ""
            });
            if (!0 !== await vv.getResult()) return
          }
          iv(vv, !1)
        }
      }(0, ev.useEffect)((() => {
        dv.current = Nv.b.getId()
      }), []);
      const mv = hv.d,
        jv = [mv, ...Object.values(Sv.j).filter((vv => vv !== mv))];
      return (0, sv.jsx)(sv.Fragment, {
        children: (0, sv.jsxs)("div", {
          className: "TexturePackCategory SettingsMenuRightInner",
          children: [(0, sv.jsx)("div", {
            className: "TexturePackList",
            children: jv.map((vv => (0, sv.jsx)(cv, {
              id: vv,
              isSelected: vv === Nv.b.getId(),
              setSelected: Gv
            }, vv)))
          }), Nv.b.getId() === Sv.j.CUSTOM && (0, sv.jsx)(Wv.e, {
            folderName: null !== (zv = Nv.b.getFromFolderName()) && void 0 !== zv ? zv : null,
            onTexturePackUpdated: function(vv) {
              iv(vv, !0)
            },
            packOwner: "player"
          })]
        })
      })
    }

    function cv(vv) {
      let {
        id: zv,
        isSelected: Pv,
        setSelected: gv,
        disabled: Nv = !1
      } = vv;
      const [lv, Tv] = (0, ev.useState)(!0), [Wv, wv] = (0, ev.useState)(""), [av, Cv] = (0, ev.useState)(""), [iv, cv] = (0, ev.useState)(""), Gv = (0, ev.useRef)({});
      return (0, ev.useEffect)((() => {
        (0, hv.i)(zv).then((vv => {
          var zv;
          vv && (Gv.current = vv, Tv(!1), wv(Gv.current.metaData.name), Cv(Gv.current.metaData.author), cv(null !== (zv = Gv.current.metaData.previewImage) && void 0 !== zv ? zv : ""))
        })).catch((vv => {
          console.warn(`Failed to fetch texture pack ${zv}`, vv)
        }))
      }), [zv]), (0, sv.jsxs)("div", {
        "data-pad-focusable": !0,
        "aria-disabled": Nv || void 0,
        className: pv()("TexturePack", {
          Selected: Pv,
          Custom: zv === Sv.j.CUSTOM,
          Disabled: Nv
        }),
        onClick: () => {
          lv || Nv || gv(Gv.current)
        },
        children: [(0, sv.jsx)("div", {
          className: "TexturePackBg",
          style: {
            backgroundImage: iv ? `url(${iv})` : void 0
          }
        }), lv && (0, sv.jsx)("div", {
          className: "TexturePackName",
          children: (0, sv.jsx)(dv.c, {})
        }), !lv && Wv && (0, sv.jsx)("div", {
          className: "TexturePackName",
          children: Wv
        }), !lv && av && (0, sv.jsx)("div", {
          className: "TexturePackAuthor",
          children: av
        })]
      })
    }
  },
  4765: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => gv
    });
    var hv = Pv(1035),
      Sv = Pv.n(hv),
      ev = Pv(1082);

    function gv(vv) {
      let {
        options: zv,
        value: Pv,
        onChange: hv,
        ariaLabel: gv,
        className: pv,
        reselectable: dv = !1,
        keepsFocus: Nv = !1,
        padTabs: lv
      } = vv;
      const Tv = void 0 !== lv;
      return (0, ev.jsx)("div", {
        className: Sv()("SegmentedToggle", pv),
        role: "group",
        "aria-label": gv,
        "data-pad-tabs": lv,
        children: zv.map((vv => {
          const zv = vv.value === Pv;
          return (0, ev.jsx)("button", {
            type: "button",
            "aria-pressed": zv,
            "data-pad-tab": Tv || void 0,
            "data-pad-selected": Tv && zv ? "true" : void 0,
            "data-pad-default-focus": Tv && zv || void 0,
            "aria-label": vv.ariaLabel,
            title: vv.ariaLabel,
            className: Sv()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: zv
            }),
            onMouseDown: Nv ? vv => {
              vv.preventDefault()
            } : void 0,
            onClick: () => {
              zv && !dv || hv(vv.value)
            },
            children: vv.label
          }, vv.value)
        }))
      })
    }
  },
  4773: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => ev,
      e: () => gv
    });
    var hv = Pv(52);
    const Sv = new WeakMap,
      ev = vv => {
        var zv;
        const Pv = vv.closest("[data-pad-slider]");
        return Pv && null !== (zv = Sv.get(Pv)) && void 0 !== zv ? zv : null
      },
      gv = (vv, zv) => {
        const Pv = (0, hv.useRef)(zv);
        Pv.current = zv, (0, hv.useEffect)((() => {
          if (vv.current) return ((vv, zv) => (Sv.set(vv, zv), () => {
            Sv.get(vv) === zv && Sv.delete(vv)
          }))(vv.current, {
            adjust: vv => {
              Pv.current.adjust(vv)
            },
            setFraction: vv => {
              Pv.current.setFraction(vv)
            },
            endDrag: () => {
              Pv.current.endDrag()
            }
          })
        }), [vv])
      }
  },
  4786: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => pv,
      h: () => gv
    });
    var hv = Pv(2944),
      Sv = Pv(4788);
    let ev = null;

    function gv(vv, zv) {
      ev = {
        pack: vv.metaData.id === hv.b ? null : vv,
        prompt: zv
      }
    }

    function pv(vv, zv) {
      const Pv = ev;
      null !== Pv && (0, Sv.e)(Pv.pack, vv) && (ev = null, zv && Pv.prompt())
    }
  },
  4788: (vv, zv, Pv) => {
    function hv(vv, zv) {
      return Sv(vv, zv)
    }

    function Sv(vv, zv) {
      if (vv === zv) return !0;
      if ("object" !== typeof vv || "object" !== typeof zv || null === vv || null === zv || Array.isArray(vv) !== Array.isArray(zv)) return !1;
      const Pv = vv,
        hv = zv,
        ev = Object.keys(Pv);
      return ev.length === Object.keys(hv).length && ev.every((vv => Object.prototype.hasOwnProperty.call(hv, vv) && Sv(Pv[vv], hv[vv])))
    }
    Pv.d(zv, {
      e: () => hv
    })
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);