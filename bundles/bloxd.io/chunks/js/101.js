export const id = 101;
export const ids = [101];
export const modules = {
  4595: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Pb
    });
    var Ab = Ub(984),
      Mb = Ub.n(Ab),
      Tb = Ub(990),
      Eb = Ub(1254),
      Yb = Ub(3180),
      Bb = Ub(137),
      eb = Ub(3211),
      vb = Ub(3200),
      Lb = Ub(1023);

    function Pb(bb) {
      let {
        game: ab
      } = bb;
      const Ub = (0, Bb.j)() ? "large" : "small",
        Ab = (0, eb.c)(ab, Ub),
        Pb = (0, Yb.f)(Ab),
        Xb = void 0 !== Pb.blurhash;
      return (0, Lb.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [Pb.isLoading && !Xb && (0, Lb.jsx)(Eb.b, {
          loaderType: "Secondary"
        }), !Pb.failed && (null !== Pb.src || Xb) && (0, Lb.jsx)("div", {
          className: Mb()("SchematicImage", vb.f, {
            SchematicImageFadeIn: Pb.fadeIn && !Xb
          }),
          style: (0, vb.d)(Pb),
          children: (0, Lb.jsx)(vb.c, {
            image: Pb
          })
        }), Pb.failed && (0, Lb.jsx)("div", {
          className: "SchematicImageError",
          children: (0, Lb.jsx)(Tb.e, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  4701: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Xb
    });
    var Ab = Ub(52),
      Mb = Ub(984),
      Tb = Ub.n(Mb),
      Eb = Ub(4638),
      Yb = Ub(1254),
      Bb = Ub(1134),
      eb = Ub(2884),
      vb = Ub(2996),
      Lb = Ub(990),
      Pb = Ub(1023);

    function Xb(bb) {
      let {
        folderName: ab,
        onTexturePackUpdated: Mb,
        disabled: Xb = !1,
        maxFileSizeMb: jb,
        packOwner: Rb
      } = bb;
      const {
        t: kb
      } = (0, Bb.A)(), [yb, Zb] = (0, Ab.useState)(!1), [Db, zb] = (0, Ab.useState)(null), [xb, ib] = (0, Ab.useState)(null), fb = (0, Ab.useRef)(null);
      const {
        getRootProps: mb,
        getInputProps: pb,
        isDragActive: Nb
      } = (0, Eb.b)({
        onDrop: async function(bb) {
          Zb(!0);
          try {
            const ab = await (0, eb.n)(bb);
            if ("customGame" === Rb && (0, vb.i)(ab)) return void zb(kb(vb.b));
            if (void 0 !== jb) {
              const bb = JSON.stringify(ab).length / 1048576;
              if (bb > jb) return void zb(`File size is too large. Max size is ${jb}MB. Current size is ${bb}MB.`)
            }
            zb(null), ib(null), Mb(ab), fb.current = ab,
              function(bb, ab) {
                const Ab = bb.modelOverrides;
                Ab && Promise.all([Ub.e(195), Ub.e(194)]).then((() => Ub(8979))).then((Ub => {
                  let {
                    packDisplayName: Mb,
                    refusedPackModels: Tb,
                    packModelSummary: Eb
                  } = Ub;
                  const Yb = Mb(bb.metaData);
                  ab(Eb(Yb, Tb(Yb, Ab, !1)))
                })).catch((bb => {
                  console.error("Checking the texture pack's models failed:", bb)
                }))
              }(ab, (bb => {
                fb.current === ab && ib(bb)
              }))
          } catch {
            zb("Invalid Texture Pack Folder")
          } finally {
            Zb(!1)
          }
        },
        useFsAccessApi: !1,
        disabled: Xb
      });
      return (0, Pb.jsxs)("div", {
        className: "CustomTexturePackContainer",
        children: [(0, Pb.jsxs)("div", {
          className: "CustomTextureWarning",
          children: [kb("settingsMenu:customTextureWarning"), ".", (0, Pb.jsx)("br", {}), kb("settingsMenu:viewDocumentation"), ":", " ", (0, Pb.jsx)("a", {
            href: "https://github.com/Bloxdy/texturePacks",
            target: "_blank",
            rel: "noreferrer",
            children: "github.com/Bloxdy/texturePacks"
          })]
        }), Db && (0, Pb.jsxs)("div", {
          className: "CustomTextureError",
          children: [kb("general:error"), ": ", Db]
        }), xb && (0, Pb.jsx)("div", {
          className: "CustomTextureError",
          children: xb
        }), (0, Pb.jsxs)("div", {
          ...mb({
            className: Tb()("CustomTextureFolderUpload", {
              ActiveDrag: Nb,
              Disabled: Xb
            })
          }),
          children: [(0, Pb.jsx)("input", {
            ...pb({
              webkitdirectory: "true"
            })
          }), yb && (0, Pb.jsx)("div", {
            className: "CustomTextureFolderUploadLoading",
            children: (0, Pb.jsx)(Yb.b, {})
          }), !yb && !Nb && ab && (0, Pb.jsxs)(Pb.Fragment, {
            children: [(0, Pb.jsx)("div", {
              className: "CustomTextureFolderUploadIcon Active",
              children: (0, Pb.jsx)(Lb.e, {
                name: "folder-image"
              })
            }), (0, Pb.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions Active",
              children: ab
            })]
          }), !yb && (Nb || !ab) && (0, Pb.jsxs)(Pb.Fragment, {
            children: [(0, Pb.jsx)("div", {
              className: "CustomTextureFolderUploadIcon",
              children: (0, Pb.jsx)(Lb.e, {
                name: "up-from-bracket"
              })
            }), (0, Pb.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions",
              children: "Drag and drop a Texture Pack folder here"
            })]
          })]
        })]
      })
    }
  },
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
  4668: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => yb,
      e: () => Zb
    });
    var Ab = Ub(2884),
      Mb = Ub(2890),
      Tb = Ub(52),
      Eb = Ub(984),
      Yb = Ub.n(Eb),
      Bb = Ub(1254),
      eb = Ub(2875),
      vb = Ub(1260),
      Lb = Ub(4673),
      Pb = Ub(4701),
      Xb = Ub(603),
      jb = Ub(4709),
      Rb = Ub(1023);

    function kb() {
      (0, Lb.h)("texturePackPickReload")
    }

    function yb(bb) {
      var ab;
      let {
        setApplySettingsCallback: Ub
      } = bb;
      const [, Eb] = (0, Tb.useReducer)((bb => bb + 1), 0), Yb = (0, Tb.useRef)(!1), Bb = (0, Tb.useRef)(null);

      function yb(bb, ab) {
        eb.c.setFromJson(bb, "player");
        const Ab = eb.c.saveTexturePack();
        if (Xb.o) {
          const bb = eb.c.toJson();
          Ab.then((ab => {
            ab && (0, jb.e)(bb, kb)
          }))
        } else Yb.current ||= ab, Bb.current !== eb.c.getId() || eb.c.getId() === Mb.q.CUSTOM && Yb.current ? Ub((() => Lb.h)) : Ub(null);
        Eb()
      }
      async function Db(bb) {
        if (eb.c.getId() !== bb.metaData.id) {
          if (eb.c.getId() === Mb.q.CUSTOM && eb.c.getFromFolderName()) {
            const bb = vb.NotificationProvider.showPromptPopup({
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
          yb(bb, !1)
        }
      }(0, Tb.useEffect)((() => {
        Bb.current = eb.c.getId()
      }), []);
      const zb = Ab.d,
        xb = [zb, ...Object.values(Mb.q).filter((bb => bb !== zb))];
      return (0, Rb.jsx)(Rb.Fragment, {
        children: (0, Rb.jsxs)("div", {
          className: "TexturePackCategory SettingsMenuRightInner",
          children: [(0, Rb.jsx)("div", {
            className: "TexturePackList",
            children: xb.map((bb => (0, Rb.jsx)(Zb, {
              id: bb,
              isSelected: bb === eb.c.getId(),
              setSelected: Db
            }, bb)))
          }), eb.c.getId() === Mb.q.CUSTOM && (0, Rb.jsx)(Pb.b, {
            folderName: null !== (ab = eb.c.getFromFolderName()) && void 0 !== ab ? ab : null,
            onTexturePackUpdated: function(bb) {
              yb(bb, !0)
            },
            packOwner: "player"
          })]
        })
      })
    }

    function Zb(bb) {
      let {
        id: ab,
        isSelected: Ub,
        setSelected: Eb,
        disabled: eb = !1
      } = bb;
      const [vb, Lb] = (0, Tb.useState)(!0), [Pb, Xb] = (0, Tb.useState)(""), [jb, kb] = (0, Tb.useState)(""), [yb, Zb] = (0, Tb.useState)(""), Db = (0, Tb.useRef)({});
      return (0, Tb.useEffect)((() => {
        (0, Ab.j)(ab).then((bb => {
          var ab;
          bb && (Db.current = bb, Lb(!1), Xb(Db.current.metaData.name), kb(Db.current.metaData.author), Zb(null !== (ab = Db.current.metaData.previewImage) && void 0 !== ab ? ab : ""))
        })).catch((bb => {
          console.warn(`Failed to fetch texture pack ${ab}`, bb)
        }))
      }), [ab]), (0, Rb.jsxs)("div", {
        "data-pad-focusable": !0,
        "aria-disabled": eb || void 0,
        className: Yb()("TexturePack", {
          Selected: Ub,
          Custom: ab === Mb.q.CUSTOM,
          Disabled: eb
        }),
        onClick: () => {
          vb || eb || Eb(Db.current)
        },
        children: [(0, Rb.jsx)("div", {
          className: "TexturePackBg",
          style: {
            backgroundImage: yb ? `url(${yb})` : void 0
          }
        }), vb && (0, Rb.jsx)("div", {
          className: "TexturePackName",
          children: (0, Rb.jsx)(Bb.b, {})
        }), !vb && Pb && (0, Rb.jsx)("div", {
          className: "TexturePackName",
          children: Pb
        }), !vb && jb && (0, Rb.jsx)("div", {
          className: "TexturePackAuthor",
          children: jb
        })]
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
  4709: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Yb,
      e: () => Eb
    });
    var Ab = Ub(2890),
      Mb = Ub(4711);
    let Tb = null;

    function Eb(bb, ab) {
      Tb = {
        pack: bb.metaData.id === Ab.b ? null : bb,
        prompt: ab
      }
    }

    function Yb(bb, ab) {
      const Ub = Tb;
      null !== Ub && (0, Mb.c)(Ub.pack, bb) && (Tb = null, ab && Ub.prompt())
    }
  },
  4711: (bb, ab, Ub) => {
    function Ab(bb, ab) {
      return Mb(bb, ab)
    }

    function Mb(bb, ab) {
      if (bb === ab) return !0;
      if ("object" !== typeof bb || "object" !== typeof ab || null === bb || null === ab || Array.isArray(bb) !== Array.isArray(ab)) return !1;
      const Ub = bb,
        Ab = ab,
        Tb = Object.keys(Ub);
      return Tb.length === Object.keys(Ab).length && Tb.every((bb => Object.prototype.hasOwnProperty.call(Ab, bb) && Mb(Ub[bb], Ab[bb])))
    }
    Ub.d(ab, {
      c: () => Ab
    })
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);