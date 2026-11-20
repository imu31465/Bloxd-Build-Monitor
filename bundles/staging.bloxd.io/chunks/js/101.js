export const id = 101;
export const ids = [101];
export const modules = {
  4615: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Xb
    });
    var kb = sb(1033),
      Wb = sb.n(kb),
      ab = sb(1039),
      Tb = sb(1327),
      Ub = sb(3294),
      Ib = sb(167),
      Hb = sb(3335),
      fb = sb(3329),
      Mb = sb(1087);

    function Xb(bb) {
      let {
        game: cb
      } = bb;
      const sb = (0, Ib.k)() ? "large" : "small",
        kb = (0, Hb.f)(cb, sb),
        Xb = (0, Ub.f)(kb),
        nb = void 0 !== Xb.blurhash;
      return (0, Mb.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [Xb.isLoading && !nb && (0, Mb.jsx)(Tb.d, {
          loaderType: "Secondary"
        }), !Xb.failed && (null !== Xb.src || nb) && (0, Mb.jsx)("div", {
          className: Wb()("SchematicImage", fb.h, {
            SchematicImageFadeIn: Xb.fadeIn && !nb
          }),
          style: (0, fb.e)(Xb),
          children: (0, Mb.jsx)(fb.c, {
            image: Xb
          })
        }), Xb.failed && (0, Mb.jsx)("div", {
          className: "SchematicImageError",
          children: (0, Mb.jsx)(ab.b, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  4736: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => nb
    });
    var kb = sb(64),
      Wb = sb(1033),
      ab = sb.n(Wb),
      Tb = sb(4665),
      Ub = sb(1327),
      Ib = sb(1197),
      Hb = sb(2913),
      fb = sb(3063),
      Mb = sb(1039),
      Xb = sb(1087);

    function nb(bb) {
      let {
        folderName: cb,
        onTexturePackUpdated: Wb,
        disabled: nb = !1,
        maxFileSizeMb: mb,
        packOwner: lb
      } = bb;
      const {
        t: Qb
      } = (0, Ib.E)(), [eb, Cb] = (0, kb.useState)(!1), [Nb, Vb] = (0, kb.useState)(null), [Lb, ub] = (0, kb.useState)(null), Yb = (0, kb.useRef)(null);
      const {
        getRootProps: hb,
        getInputProps: Jb,
        isDragActive: gb
      } = (0, Tb.c)({
        onDrop: async function(bb) {
          Cb(!0);
          try {
            const cb = await (0, Hb.o)(bb);
            if ("customGame" === lb && (0, fb.n)(cb)) return void Vb(Qb(fb.d));
            if (void 0 !== mb) {
              const bb = JSON.stringify(cb).length / 1048576;
              if (bb > mb) return void Vb(`File size is too large. Max size is ${mb}MB. Current size is ${bb}MB.`)
            }
            Vb(null), ub(null), Wb(cb), Yb.current = cb,
              function(bb, cb) {
                const kb = bb.modelOverrides;
                kb && Promise.all([sb.e(195), sb.e(194)]).then((() => sb(8993))).then((sb => {
                  let {
                    packDisplayName: Wb,
                    refusedPackModels: ab,
                    packModelSummary: Tb
                  } = sb;
                  const Ub = Wb(bb.metaData);
                  cb(Tb(Ub, ab(Ub, kb, !1)))
                })).catch((bb => {
                  console.error("Checking the texture pack's models failed:", bb)
                }))
              }(cb, (bb => {
                Yb.current === cb && ub(bb)
              }))
          } catch {
            Vb("Invalid Texture Pack Folder")
          } finally {
            Cb(!1)
          }
        },
        useFsAccessApi: !1,
        disabled: nb
      });
      return (0, Xb.jsxs)("div", {
        className: "CustomTexturePackContainer",
        children: [(0, Xb.jsxs)("div", {
          className: "CustomTextureWarning",
          children: [Qb("settingsMenu:customTextureWarning"), ".", (0, Xb.jsx)("br", {}), Qb("settingsMenu:viewDocumentation"), ":", " ", (0, Xb.jsx)("a", {
            href: "https://github.com/Bloxdy/texturePacks",
            target: "_blank",
            rel: "noreferrer",
            children: "github.com/Bloxdy/texturePacks"
          })]
        }), Nb && (0, Xb.jsxs)("div", {
          className: "CustomTextureError",
          children: [Qb("general:error"), ": ", Nb]
        }), Lb && (0, Xb.jsx)("div", {
          className: "CustomTextureError",
          children: Lb
        }), (0, Xb.jsxs)("div", {
          ...hb({
            className: ab()("CustomTextureFolderUpload", {
              ActiveDrag: gb,
              Disabled: nb
            })
          }),
          children: [(0, Xb.jsx)("input", {
            ...Jb({
              webkitdirectory: "true"
            })
          }), eb && (0, Xb.jsx)("div", {
            className: "CustomTextureFolderUploadLoading",
            children: (0, Xb.jsx)(Ub.d, {})
          }), !eb && !gb && cb && (0, Xb.jsxs)(Xb.Fragment, {
            children: [(0, Xb.jsx)("div", {
              className: "CustomTextureFolderUploadIcon Active",
              children: (0, Xb.jsx)(Mb.b, {
                name: "folder-image"
              })
            }), (0, Xb.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions Active",
              children: cb
            })]
          }), !eb && (gb || !cb) && (0, Xb.jsxs)(Xb.Fragment, {
            children: [(0, Xb.jsx)("div", {
              className: "CustomTextureFolderUploadIcon",
              children: (0, Xb.jsx)(Mb.b, {
                name: "up-from-bracket"
              })
            }), (0, Xb.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions",
              children: "Drag and drop a Texture Pack folder here"
            })]
          })]
        })]
      })
    }
  },
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
  4694: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => eb,
      h: () => Cb
    });
    var kb = sb(2913),
      Wb = sb(2916),
      ab = sb(64),
      Tb = sb(1033),
      Ub = sb.n(Tb),
      Ib = sb(1327),
      Hb = sb(2904),
      fb = sb(1332),
      Mb = sb(4703),
      Xb = sb(4736),
      nb = sb(649),
      mb = sb(4739),
      lb = sb(1087);

    function Qb() {
      (0, Mb.m)("texturePackPickReload")
    }

    function eb(bb) {
      var cb;
      let {
        setApplySettingsCallback: sb
      } = bb;
      const [, Tb] = (0, ab.useReducer)((bb => bb + 1), 0), Ub = (0, ab.useRef)(!1), Ib = (0, ab.useRef)(null);

      function eb(bb, cb) {
        Hb.e.setFromJson(bb, "player");
        const kb = Hb.e.saveTexturePack();
        if (nb.s) {
          const bb = Hb.e.toJson();
          kb.then((cb => {
            cb && (0, mb.c)(bb, Qb)
          }))
        } else Ub.current ||= cb, Ib.current !== Hb.e.getId() || Hb.e.getId() === Wb.o.CUSTOM && Ub.current ? sb((() => Mb.m)) : sb(null);
        Tb()
      }
      async function Nb(bb) {
        if (Hb.e.getId() !== bb.metaData.id) {
          if (Hb.e.getId() === Wb.o.CUSTOM && Hb.e.getFromFolderName()) {
            const bb = fb.NotificationProvider.showPromptPopup({
              title: "settingsMenu:loseChangesTitle",
              subtitle: "settingsMenu:loseChangesSubtitle",
              confirmText: "general:continue",
              destructive: !0,
              confirmTooltip: "",
              cancelText: "general:cancel",
              cancelTooltip: ""
            });
            if (!0 !== await bb.getResult()) return
          }
          eb(bb, !1)
        }
      }(0, ab.useEffect)((() => {
        Ib.current = Hb.e.getId()
      }), []);
      const Vb = kb.e,
        Lb = [Vb, ...Object.values(Wb.o).filter((bb => bb !== Vb))];
      return (0, lb.jsx)(lb.Fragment, {
        children: (0, lb.jsxs)("div", {
          className: "TexturePackCategory SettingsMenuRightInner",
          children: [(0, lb.jsx)("div", {
            className: "TexturePackList",
            children: Lb.map((bb => (0, lb.jsx)(Cb, {
              id: bb,
              isSelected: bb === Hb.e.getId(),
              setSelected: Nb
            }, bb)))
          }), Hb.e.getId() === Wb.o.CUSTOM && (0, lb.jsx)(Xb.b, {
            folderName: null !== (cb = Hb.e.getFromFolderName()) && void 0 !== cb ? cb : null,
            onTexturePackUpdated: function(bb) {
              eb(bb, !0)
            },
            packOwner: "player"
          })]
        })
      })
    }

    function Cb(bb) {
      let {
        id: cb,
        isSelected: sb,
        setSelected: Tb,
        disabled: Hb = !1
      } = bb;
      const [fb, Mb] = (0, ab.useState)(!0), [Xb, nb] = (0, ab.useState)(""), [mb, Qb] = (0, ab.useState)(""), [eb, Cb] = (0, ab.useState)(""), Nb = (0, ab.useRef)({});
      return (0, ab.useEffect)((() => {
        (0, kb.n)(cb).then((bb => {
          var cb;
          bb && (Nb.current = bb, Mb(!1), nb(Nb.current.metaData.name), Qb(Nb.current.metaData.author), Cb(null !== (cb = Nb.current.metaData.previewImage) && void 0 !== cb ? cb : ""))
        })).catch((bb => {
          console.warn(`Failed to fetch texture pack ${cb}`, bb)
        }))
      }), [cb]), (0, lb.jsxs)("div", {
        "data-pad-focusable": !0,
        "aria-disabled": Hb || void 0,
        className: Ub()("TexturePack", {
          Selected: sb,
          Custom: cb === Wb.o.CUSTOM,
          Disabled: Hb
        }),
        onClick: () => {
          fb || Hb || Tb(Nb.current)
        },
        children: [(0, lb.jsx)("div", {
          className: "TexturePackBg",
          style: {
            backgroundImage: eb ? `url(${eb})` : void 0
          }
        }), fb && (0, lb.jsx)("div", {
          className: "TexturePackName",
          children: (0, lb.jsx)(Ib.d, {})
        }), !fb && Xb && (0, lb.jsx)("div", {
          className: "TexturePackName",
          children: Xb
        }), !fb && mb && (0, lb.jsx)("div", {
          className: "TexturePackAuthor",
          children: mb
        })]
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
  4739: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Ub,
      c: () => Tb
    });
    var kb = sb(2916),
      Wb = sb(4747);
    let ab = null;

    function Tb(bb, cb) {
      ab = {
        pack: bb.metaData.id === kb.c ? null : bb,
        prompt: cb
      }
    }

    function Ub(bb, cb) {
      const sb = ab;
      null !== sb && (0, Wb.b)(sb.pack, bb) && (ab = null, cb && sb.prompt())
    }
  },
  4747: (bb, cb, sb) => {
    function kb(bb, cb) {
      return Wb(bb, cb)
    }

    function Wb(bb, cb) {
      if (bb === cb) return !0;
      if ("object" !== typeof bb || "object" !== typeof cb || null === bb || null === cb || Array.isArray(bb) !== Array.isArray(cb)) return !1;
      const sb = bb,
        kb = cb,
        ab = Object.keys(sb);
      return ab.length === Object.keys(kb).length && ab.every((bb => Object.prototype.hasOwnProperty.call(kb, bb) && Wb(sb[bb], kb[bb])))
    }
    sb.d(cb, {
      b: () => kb
    })
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);