export const id = 102;
export const ids = [102];
export const modules = {
  4672: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => wb
    });
    var Bb = hb(958),
      Ob = hb.n(Bb),
      Gb = hb(966),
      Ub = hb(1242),
      Lb = hb(3291),
      Yb = hb(115),
      Sb = hb(3330),
      ab = hb(3323),
      Hb = hb(1007);

    function wb(bb) {
      let {
        game: ub
      } = bb;
      const hb = (0, Yb.j)() ? "large" : "small",
        Bb = (0, Sb.i)(ub, hb),
        wb = (0, Lb.h)(Bb),
        Zb = void 0 !== wb.blurhash;
      return (0, Hb.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [wb.isLoading && !Zb && (0, Hb.jsx)(Ub.c, {
          loaderType: "Secondary"
        }), !wb.failed && (null !== wb.src || Zb) && (0, Hb.jsx)("div", {
          className: Ob()("SchematicImage", ab.g, {
            SchematicImageFadeIn: wb.fadeIn && !Zb
          }),
          style: (0, ab.f)(wb),
          children: (0, Hb.jsx)(ab.d, {
            image: wb
          })
        }), wb.failed && (0, Hb.jsx)("div", {
          className: "SchematicImageError",
          children: (0, Hb.jsx)(Gb.e, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  4807: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Zb
    });
    var Bb = hb(49),
      Ob = hb(958),
      Gb = hb.n(Ob),
      Ub = hb(4723),
      Lb = hb(1242),
      Yb = hb(1095),
      Sb = hb(2944),
      ab = hb(3076),
      Hb = hb(966),
      wb = hb(1007);

    function Zb(bb) {
      let {
        folderName: ub,
        onTexturePackUpdated: Ob,
        disabled: Zb = !1,
        maxFileSizeMb: Xb,
        packOwner: pb
      } = bb;
      const {
        t: ob
      } = (0, Yb.K)(), [Ab, lb] = (0, Bb.useState)(!1), [Kb, Wb] = (0, Bb.useState)(null), [Cb, db] = (0, Bb.useState)(null), rb = (0, Bb.useRef)(null);
      const {
        getRootProps: jb,
        getInputProps: nb,
        isDragActive: Db
      } = (0, Ub.e)({
        onDrop: async function(bb) {
          lb(!0);
          try {
            const ub = await (0, Sb.p)(bb);
            if ("customGame" === pb && (0, ab.f)(ub)) return void Wb(ob(ab.b));
            if (void 0 !== Xb) {
              const bb = JSON.stringify(ub).length / 1048576;
              if (bb > Xb) return void Wb(`File size is too large. Max size is ${Xb}MB. Current size is ${bb}MB.`)
            }
            Wb(null), db(null), Ob(ub), rb.current = ub,
              function(bb, ub) {
                const Bb = bb.modelOverrides;
                Bb && Promise.all([hb.e(196), hb.e(195)]).then((() => hb(9156))).then((hb => {
                  let {
                    packDisplayName: Ob,
                    refusedPackModels: Gb,
                    packModelSummary: Ub
                  } = hb;
                  const Lb = Ob(bb.metaData);
                  ub(Ub(Lb, Gb(Lb, Bb, !1)))
                })).catch((bb => {
                  console.error("Checking the texture pack's models failed:", bb)
                }))
              }(ub, (bb => {
                rb.current === ub && db(bb)
              }))
          } catch {
            Wb("Invalid Texture Pack Folder")
          } finally {
            lb(!1)
          }
        },
        useFsAccessApi: !1,
        disabled: Zb
      });
      return (0, wb.jsxs)("div", {
        className: "CustomTexturePackContainer",
        children: [(0, wb.jsxs)("div", {
          className: "CustomTextureWarning",
          children: [ob("settingsMenu:customTextureWarning"), ".", (0, wb.jsx)("br", {}), ob("settingsMenu:viewDocumentation"), ":", " ", (0, wb.jsx)("a", {
            href: "https://github.com/Bloxdy/texturePacks",
            target: "_blank",
            rel: "noreferrer",
            children: "github.com/Bloxdy/texturePacks"
          })]
        }), Kb && (0, wb.jsxs)("div", {
          className: "CustomTextureError",
          children: [ob("general:error"), ": ", Kb]
        }), Cb && (0, wb.jsx)("div", {
          className: "CustomTextureError",
          children: Cb
        }), (0, wb.jsxs)("div", {
          ...jb({
            className: Gb()("CustomTextureFolderUpload", {
              ActiveDrag: Db,
              Disabled: Zb
            })
          }),
          children: [(0, wb.jsx)("input", {
            ...nb({
              webkitdirectory: "true"
            })
          }), Ab && (0, wb.jsx)("div", {
            className: "CustomTextureFolderUploadLoading",
            children: (0, wb.jsx)(Lb.c, {})
          }), !Ab && !Db && ub && (0, wb.jsxs)(wb.Fragment, {
            children: [(0, wb.jsx)("div", {
              className: "CustomTextureFolderUploadIcon Active",
              children: (0, wb.jsx)(Hb.e, {
                name: "folder-image"
              })
            }), (0, wb.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions Active",
              children: ub
            })]
          }), !Ab && (Db || !ub) && (0, wb.jsxs)(wb.Fragment, {
            children: [(0, wb.jsx)("div", {
              className: "CustomTextureFolderUploadIcon",
              children: (0, wb.jsx)(Hb.e, {
                name: "up-from-bracket"
              })
            }), (0, wb.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions",
              children: "Drag and drop a Texture Pack folder here"
            })]
          })]
        })]
      })
    }
  },
  4765: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Xb,
      g: () => Kb,
      h: () => pb,
      k: () => lb
    });
    var Bb = hb(49),
      Ob = hb(4770),
      Gb = hb(4123),
      Ub = hb(1260),
      Lb = hb(4791),
      Yb = hb(958),
      Sb = hb.n(Yb),
      ab = hb(1249),
      Hb = hb(1622),
      wb = hb(4800),
      Zb = hb(1007);

    function Xb(bb) {
      let {
        label: ub,
        onClick: hb,
        checked: Bb,
        circleInfoText: Ob,
        className: Lb,
        disabled: Yb,
        note: ab
      } = bb;
      return (0, Zb.jsxs)("div", {
        "aria-disabled": Yb || void 0,
        "data-pad-focusable": !0,
        className: Sb()("SettingBox CheckboxContainer", {
          [Lb]: Lb,
          SettingBoxDisabled: Yb
        }),
        onClick: () => {
          Yb || hb(!Bb)
        },
        children: [(0, Zb.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, Zb.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, Zb.jsx)(Gb.d, {
              className: "SettingsCheckbox",
              checked: Bb,
              disabled: Yb,
              onChange: () => {}
            })
          }), (0, Zb.jsxs)("div", {
            className: "CheckboxText",
            children: [ub, Ob && (0, Zb.jsx)("span", {
              onClick: bb => bb.stopPropagation(),
              children: (0, Zb.jsx)(Ub.b, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: Ob
              })
            })]
          })]
        }), ab && (0, Zb.jsx)("div", {
          className: "SettingNote",
          children: ab
        })]
      })
    }

    function pb(bb) {
      let {
        name: ub,
        onChange: hb,
        min: Ob,
        max: Gb,
        step: Lb,
        initValue: Yb,
        circleInfoText: ab,
        format: Hb,
        className: wb,
        padStep: Xb,
        disabled: pb = !1,
        selectableMax: ob,
        cappedNote: lb,
        onChangeComplete: Kb
      } = bb;
      const [Wb, Cb] = (0, Bb.useState)(Yb), db = (0, Bb.useRef)(Yb);
      (0, Bb.useEffect)((() => {
        db.current = Yb, Cb(Yb)
      }), [Yb]);
      const rb = void 0 !== ob && ob < Gb,
        jb = rb ? {
          "--slider-selectable": (ob - Ob) / (Gb - Ob)
        } : void 0;
      return (0, Zb.jsxs)("div", {
        className: Sb()("SettingBox SettingsSliderDiv", {
          [wb]: wb,
          SettingBoxDisabled: pb,
          SliderCapped: rb
        }),
        style: jb,
        children: [(0, Zb.jsxs)("div", {
          className: "SliderText",
          children: [`${ub}: ${Hb?Hb(Wb):Wb}`, ab && (0, Zb.jsx)(Ub.b, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: ab
          })]
        }), (0, Zb.jsx)("div", {
          className: "SliderDiv",
          children: (0, Zb.jsx)(Ab, {
            value: Wb,
            min: Ob,
            max: Gb,
            step: Lb,
            onChange: bb => {
              if (rb && bb >= ob && Wb === ob) return;
              const ub = rb ? Math.min(bb, ob) : bb;
              db.current = ub, Cb(ub), hb(ub)
            },
            onChangeComplete: Kb && (() => {
              Kb(db.current)
            }),
            format: Hb,
            padStep: Xb,
            disabled: pb
          })
        }), rb && lb && (0, Zb.jsx)("div", {
          className: "SettingNote",
          children: lb
        })]
      })
    }
    const ob = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function Ab(bb) {
      var ub;
      let {
        value: hb,
        min: Gb,
        max: Ub,
        step: Lb,
        onChange: Yb,
        orientation: Sb,
        reverse: ab,
        setIsChanging: Hb,
        tooltip: Xb,
        labels: pb,
        handleLabel: Ab,
        format: lb,
        onChangeStart: Kb,
        onChangeComplete: Wb,
        padStep: Cb,
        disabled: db = !1
      } = bb;
      const rb = (0, Bb.useRef)(null),
        jb = (0, Bb.useRef)(null);
      (0, Bb.useLayoutEffect)((() => {
        var bb, ub, hb;
        const Bb = null !== (bb = null === (ub = rb.current) || void 0 === ub ? void 0 : ub.querySelector(".rangeslider")) && void 0 !== bb ? bb : null;
        null === Bb || void 0 === Bb || Bb.setAttribute("data-pad-slider", ""), null === Bb || void 0 === Bb || Bb.setAttribute("data-pad-focusable", ""), null === Bb || void 0 === Bb || null === (hb = Bb.querySelector(".rangeslider__handle")) || void 0 === hb || hb.setAttribute("data-pad-slider-handle", ""), jb.current = Bb
      }), []), (0, Bb.useLayoutEffect)((() => {
        var bb, ub;
        db ? null === (bb = jb.current) || void 0 === bb || bb.setAttribute("aria-disabled", "true") : null === (ub = jb.current) || void 0 === ub || ub.removeAttribute("aria-disabled")
      }), [db]);
      const nb = (null !== (ub = String(Lb).split(".")[1]) && void 0 !== ub ? ub : "").length,
        Db = bb => {
          const ub = Number((Math.round((bb - Gb) / Lb) * Lb + Gb).toFixed(nb));
          return Math.min(Ub, Math.max(Gb, ub))
        },
        xb = (0, Bb.useRef)(Wb);
      xb.current = Wb, (0, Bb.useEffect)((() => {
        const bb = rb.current;
        if (!bb) return;
        const ub = bb => {
          var ub;
          ob.has(bb.key) && (null === (ub = xb.current) || void 0 === ub || ub.call(xb))
        };
        return bb.addEventListener("keyup", ub), () => {
          bb.removeEventListener("keyup", ub)
        }
      }), []);
      const zb = (0, Bb.useRef)(!1);
      return (0, wb.h)(jb, {
        adjust: bb => {
          if (db) return;
          const ub = null !== Cb && void 0 !== Cb ? Cb : Math.max(Lb, Math.round((Ub - Gb) / 20 / Lb) * Lb),
            Bb = Db(hb + bb * ub * (ab ? -1 : 1));
          Bb !== hb && (null === Kb || void 0 === Kb || Kb(), Yb(Bb), null === Wb || void 0 === Wb || Wb())
        },
        setFraction: bb => {
          if (db) return;
          const ub = Db(Gb + (ab ? 1 - bb : bb) * (Ub - Gb));
          ub !== hb && (zb.current || (zb.current = !0, null === Kb || void 0 === Kb || Kb()), Yb(ub))
        },
        endDrag: () => {
          zb.current && (zb.current = !1, null === Wb || void 0 === Wb || Wb())
        }
      }), (0, Zb.jsx)("div", {
        ref: rb,
        style: {
          display: "contents"
        },
        children: (0, Zb.jsx)(Ob.b, {
          value: hb,
          min: Gb,
          max: Ub,
          step: Lb,
          onChange: Yb,
          orientation: Sb,
          reverse: ab,
          tooltip: Xb,
          labels: pb,
          handleLabel: Ab,
          format: lb,
          onChangeStart: () => {
            null === Kb || void 0 === Kb || Kb(), null === Hb || void 0 === Hb || Hb(!0)
          },
          onChangeComplete: () => {
            null === Hb || void 0 === Hb || Hb(!1), null === Wb || void 0 === Wb || Wb()
          }
        })
      })
    }
    async function lb() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      const ub = ab.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: "",
        unlockPointerKey: bb
      });
      !0 === await ub.getResult() && (0, Hb.reloadBloxd)()
    }

    function Kb(bb) {
      let {
        label: ub,
        options: hb,
        value: Bb,
        onChange: Ob,
        circleInfoText: Gb
      } = bb;
      return (0, Zb.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, Zb.jsxs)("div", {
          className: "SliderText",
          children: [ub, Gb && (0, Zb.jsx)(Ub.b, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: Gb
          })]
        }), (0, Zb.jsx)(Lb.c, {
          ariaLabel: ub,
          options: hb,
          value: Bb,
          onChange: Ob
        })]
      })
    }
  },
  4760: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Ab,
      d: () => lb
    });
    var Bb = hb(2944),
      Ob = hb(2951),
      Gb = hb(49),
      Ub = hb(958),
      Lb = hb.n(Ub),
      Yb = hb(1242),
      Sb = hb(2941),
      ab = hb(1249),
      Hb = hb(4765),
      wb = hb(4807),
      Zb = hb(599),
      Xb = hb(4815),
      pb = hb(1007);

    function ob() {
      (0, Hb.k)("texturePackPickReload")
    }

    function Ab(bb) {
      var ub;
      let {
        setApplySettingsCallback: hb
      } = bb;
      const [, Ub] = (0, Gb.useReducer)((bb => bb + 1), 0), Lb = (0, Gb.useRef)(!1), Yb = (0, Gb.useRef)(null);

      function Ab(bb, ub) {
        Sb.b.setFromJson(bb, "player");
        const Bb = Sb.b.saveTexturePack();
        if (Zb.o) {
          const bb = Sb.b.toJson();
          Bb.then((ub => {
            ub && (0, Xb.g)(bb, ob)
          }))
        } else Lb.current ||= ub, Yb.current !== Sb.b.getId() || Sb.b.getId() === Ob.m.CUSTOM && Lb.current ? hb((() => Hb.k)) : hb(null);
        Ub()
      }
      async function Kb(bb) {
        if (Sb.b.getId() !== bb.metaData.id) {
          if (Sb.b.getId() === Ob.m.CUSTOM && Sb.b.getFromFolderName()) {
            const bb = ab.NotificationProvider.showPromptPopup({
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
          Ab(bb, !1)
        }
      }(0, Gb.useEffect)((() => {
        Yb.current = Sb.b.getId()
      }), []);
      const Wb = Bb.c,
        Cb = [Wb, ...Object.values(Ob.m).filter((bb => bb !== Wb))];
      return (0, pb.jsx)(pb.Fragment, {
        children: (0, pb.jsxs)("div", {
          className: "TexturePackCategory SettingsMenuRightInner",
          children: [(0, pb.jsx)("div", {
            className: "TexturePackList",
            children: Cb.map((bb => (0, pb.jsx)(lb, {
              id: bb,
              isSelected: bb === Sb.b.getId(),
              setSelected: Kb
            }, bb)))
          }), Sb.b.getId() === Ob.m.CUSTOM && (0, pb.jsx)(wb.b, {
            folderName: null !== (ub = Sb.b.getFromFolderName()) && void 0 !== ub ? ub : null,
            onTexturePackUpdated: function(bb) {
              Ab(bb, !0)
            },
            packOwner: "player"
          })]
        })
      })
    }

    function lb(bb) {
      let {
        id: ub,
        isSelected: hb,
        setSelected: Ub,
        disabled: Sb = !1
      } = bb;
      const [ab, Hb] = (0, Gb.useState)(!0), [wb, Zb] = (0, Gb.useState)(""), [Xb, ob] = (0, Gb.useState)(""), [Ab, lb] = (0, Gb.useState)(""), Kb = (0, Gb.useRef)({});
      return (0, Gb.useEffect)((() => {
        (0, Bb.l)(ub).then((bb => {
          var ub;
          bb && (Kb.current = bb, Hb(!1), Zb(Kb.current.metaData.name), ob(Kb.current.metaData.author), lb(null !== (ub = Kb.current.metaData.previewImage) && void 0 !== ub ? ub : ""))
        })).catch((bb => {
          console.warn(`Failed to fetch texture pack ${ub}`, bb)
        }))
      }), [ub]), (0, pb.jsxs)("div", {
        "data-pad-focusable": !0,
        "aria-disabled": Sb || void 0,
        className: Lb()("TexturePack", {
          Selected: hb,
          Custom: ub === Ob.m.CUSTOM,
          Disabled: Sb
        }),
        onClick: () => {
          ab || Sb || Ub(Kb.current)
        },
        children: [(0, pb.jsx)("div", {
          className: "TexturePackBg",
          style: {
            backgroundImage: Ab ? `url(${Ab})` : void 0
          }
        }), ab && (0, pb.jsx)("div", {
          className: "TexturePackName",
          children: (0, pb.jsx)(Yb.c, {})
        }), !ab && wb && (0, pb.jsx)("div", {
          className: "TexturePackName",
          children: wb
        }), !ab && Xb && (0, pb.jsx)("div", {
          className: "TexturePackAuthor",
          children: Xb
        })]
      })
    }
  },
  4791: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Ub
    });
    var Bb = hb(958),
      Ob = hb.n(Bb),
      Gb = hb(1007);

    function Ub(bb) {
      let {
        options: ub,
        value: hb,
        onChange: Bb,
        ariaLabel: Ub,
        className: Lb,
        reselectable: Yb = !1,
        keepsFocus: Sb = !1,
        padTabs: ab
      } = bb;
      const Hb = void 0 !== ab;
      return (0, Gb.jsx)("div", {
        className: Ob()("SegmentedToggle", Lb),
        role: "group",
        "aria-label": Ub,
        "data-pad-tabs": ab,
        children: ub.map((bb => {
          const ub = bb.value === hb;
          return (0, Gb.jsx)("button", {
            type: "button",
            "aria-pressed": ub,
            "data-pad-tab": Hb || void 0,
            "data-pad-selected": Hb && ub ? "true" : void 0,
            "data-pad-default-focus": Hb && ub || void 0,
            "aria-label": bb.ariaLabel,
            title: bb.ariaLabel,
            className: Ob()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: ub
            }),
            onMouseDown: Sb ? bb => {
              bb.preventDefault()
            } : void 0,
            onClick: () => {
              ub && !Yb || Bb(bb.value)
            },
            children: bb.label
          }, bb.value)
        }))
      })
    }
  },
  4800: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Gb,
      h: () => Ub
    });
    var Bb = hb(49);
    const Ob = new WeakMap,
      Gb = bb => {
        var ub;
        const hb = bb.closest("[data-pad-slider]");
        return hb && null !== (ub = Ob.get(hb)) && void 0 !== ub ? ub : null
      },
      Ub = (bb, ub) => {
        const hb = (0, Bb.useRef)(ub);
        hb.current = ub, (0, Bb.useEffect)((() => {
          if (bb.current) return ((bb, ub) => (Ob.set(bb, ub), () => {
            Ob.get(bb) === ub && Ob.delete(bb)
          }))(bb.current, {
            adjust: bb => {
              hb.current.adjust(bb)
            },
            setFraction: bb => {
              hb.current.setFraction(bb)
            },
            endDrag: () => {
              hb.current.endDrag()
            }
          })
        }), [bb])
      }
  },
  4815: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Lb,
      g: () => Ub
    });
    var Bb = hb(2951),
      Ob = hb(4819);
    let Gb = null;

    function Ub(bb, ub) {
      Gb = {
        pack: bb.metaData.id === Bb.c ? null : bb,
        prompt: ub
      }
    }

    function Lb(bb, ub) {
      const hb = Gb;
      null !== hb && (0, Ob.c)(hb.pack, bb) && (Gb = null, ub && hb.prompt())
    }
  },
  4819: (bb, ub, hb) => {
    function Bb(bb, ub) {
      return Ob(bb, ub)
    }

    function Ob(bb, ub) {
      if (bb === ub) return !0;
      if ("object" !== typeof bb || "object" !== typeof ub || null === bb || null === ub || Array.isArray(bb) !== Array.isArray(ub)) return !1;
      const hb = bb,
        Bb = ub,
        Gb = Object.keys(hb);
      return Gb.length === Object.keys(Bb).length && Gb.every((bb => Object.prototype.hasOwnProperty.call(Bb, bb) && Ob(hb[bb], Bb[bb])))
    }
    hb.d(ub, {
      c: () => Bb
    })
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);