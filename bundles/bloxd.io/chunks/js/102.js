export const id = 102;
export const ids = [102];
export const modules = {
  4739: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Wq
    });
    var Yq = gq(1018),
      lq = gq.n(Yq),
      Oq = gq(1025),
      mq = gq(1326),
      xq = gq(3383),
      Aq = gq(136),
      cq = gq(3428),
      uq = gq(3416),
      Bq = gq(1070);

    function Wq(qq) {
      let {
        game: Eq
      } = qq;
      const gq = (0, Aq.i)() ? "large" : "small",
        Yq = (0, cq.e)(Eq, gq),
        Wq = (0, xq.e)(Yq),
        Nq = void 0 !== Wq.blurhash;
      return (0, Bq.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [Wq.isLoading && !Nq && (0, Bq.jsx)(mq.e, {
          loaderType: "Secondary"
        }), !Wq.failed && (null !== Wq.src || Nq) && (0, Bq.jsx)("div", {
          className: lq()("SchematicImage", uq.i, {
            SchematicImageFadeIn: Wq.fadeIn && !Nq
          }),
          style: (0, uq.e)(Wq),
          children: (0, Bq.jsx)(uq.d, {
            image: Wq
          })
        }), Wq.failed && (0, Bq.jsx)("div", {
          className: "SchematicImageError",
          children: (0, Bq.jsx)(Oq.d, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  4875: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Nq
    });
    var Yq = gq(57),
      lq = gq(1018),
      Oq = gq.n(lq),
      mq = gq(4792),
      xq = gq(1326),
      Aq = gq(1183),
      cq = gq(3059),
      uq = gq(3174),
      Bq = gq(1025),
      Wq = gq(1070);

    function Nq(qq) {
      let {
        folderName: Eq,
        onTexturePackUpdated: lq,
        disabled: Nq = !1,
        maxFileSizeMb: aq,
        packOwner: Vq
      } = qq;
      const {
        t: dq
      } = (0, Aq.v)(), [jq, Hq] = (0, Yq.useState)(!1), [oq, Pq] = (0, Yq.useState)(null), [Qq, yq] = (0, Yq.useState)(null), tq = (0, Yq.useRef)(null);
      const {
        getRootProps: rq,
        getInputProps: vq,
        isDragActive: hq
      } = (0, mq.e)({
        onDrop: async function(qq) {
          Hq(!0);
          try {
            const Eq = await (0, cq.o)(qq);
            if ("customGame" === Vq && (0, uq.k)(Eq)) return void Pq(dq(uq.b));
            if (void 0 !== aq) {
              const qq = JSON.stringify(Eq).length / 1048576;
              if (qq > aq) return void Pq(`File size is too large. Max size is ${aq}MB. Current size is ${qq}MB.`)
            }
            Pq(null), yq(null), lq(Eq), tq.current = Eq,
              function(qq, Eq) {
                const Yq = qq.modelOverrides;
                Yq && Promise.all([gq.e(196), gq.e(195)]).then((() => gq(9348))).then((gq => {
                  let {
                    packDisplayName: lq,
                    refusedPackModels: Oq,
                    packModelSummary: mq
                  } = gq;
                  const xq = lq(qq.metaData);
                  Eq(mq(xq, Oq(xq, Yq, !1)))
                })).catch((qq => {
                  console.error("Checking the texture pack's models failed:", qq)
                }))
              }(Eq, (qq => {
                tq.current === Eq && yq(qq)
              }))
          } catch {
            Pq("Invalid Texture Pack Folder")
          } finally {
            Hq(!1)
          }
        },
        useFsAccessApi: !1,
        disabled: Nq
      });
      return (0, Wq.jsxs)("div", {
        className: "CustomTexturePackContainer",
        children: [(0, Wq.jsxs)("div", {
          className: "CustomTextureWarning",
          children: [dq("settingsMenu:customTextureWarning"), ".", (0, Wq.jsx)("br", {}), dq("settingsMenu:viewDocumentation"), ":", " ", (0, Wq.jsx)("a", {
            href: "https://github.com/Bloxdy/texturePacks",
            target: "_blank",
            rel: "noreferrer",
            children: "github.com/Bloxdy/texturePacks"
          })]
        }), oq && (0, Wq.jsxs)("div", {
          className: "CustomTextureError",
          children: [dq("general:error"), ": ", oq]
        }), Qq && (0, Wq.jsx)("div", {
          className: "CustomTextureError",
          children: Qq
        }), (0, Wq.jsxs)("div", {
          ...rq({
            className: Oq()("CustomTextureFolderUpload", {
              ActiveDrag: hq,
              Disabled: Nq
            })
          }),
          children: [(0, Wq.jsx)("input", {
            ...vq({
              webkitdirectory: "true"
            })
          }), jq && (0, Wq.jsx)("div", {
            className: "CustomTextureFolderUploadLoading",
            children: (0, Wq.jsx)(xq.e, {})
          }), !jq && !hq && Eq && (0, Wq.jsxs)(Wq.Fragment, {
            children: [(0, Wq.jsx)("div", {
              className: "CustomTextureFolderUploadIcon Active",
              children: (0, Wq.jsx)(Bq.d, {
                name: "folder-image"
              })
            }), (0, Wq.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions Active",
              children: Eq
            })]
          }), !jq && (hq || !Eq) && (0, Wq.jsxs)(Wq.Fragment, {
            children: [(0, Wq.jsx)("div", {
              className: "CustomTextureFolderUploadIcon",
              children: (0, Wq.jsx)(Bq.d, {
                name: "up-from-bracket"
              })
            }), (0, Wq.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions",
              children: "Drag and drop a Texture Pack folder here"
            })]
          })]
        })]
      })
    }
  },
  4828: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => aq,
      f: () => oq,
      h: () => Vq,
      l: () => Hq
    });
    var Yq = gq(57),
      lq = gq(4837),
      Oq = gq(4195),
      mq = gq(1341),
      xq = gq(4858),
      Aq = gq(1018),
      cq = gq.n(Aq),
      uq = gq(1336),
      Bq = gq(1710),
      Wq = gq(4866),
      Nq = gq(1070);

    function aq(qq) {
      let {
        label: Eq,
        onClick: gq,
        checked: Yq,
        circleInfoText: lq,
        className: xq,
        disabled: Aq,
        note: uq
      } = qq;
      return (0, Nq.jsxs)("div", {
        "aria-disabled": Aq || void 0,
        "data-pad-focusable": !0,
        className: cq()("SettingBox CheckboxContainer", {
          [xq]: xq,
          SettingBoxDisabled: Aq
        }),
        onClick: () => {
          Aq || gq(!Yq)
        },
        children: [(0, Nq.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, Nq.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, Nq.jsx)(Oq.b, {
              className: "SettingsCheckbox",
              checked: Yq,
              disabled: Aq,
              onChange: () => {}
            })
          }), (0, Nq.jsxs)("div", {
            className: "CheckboxText",
            children: [Eq, lq && (0, Nq.jsx)("span", {
              onClick: qq => qq.stopPropagation(),
              children: (0, Nq.jsx)(mq.c, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: lq
              })
            })]
          })]
        }), uq && (0, Nq.jsx)("div", {
          className: "SettingNote",
          children: uq
        })]
      })
    }

    function Vq(qq) {
      let {
        name: Eq,
        onChange: gq,
        min: lq,
        max: Oq,
        step: xq,
        initValue: Aq,
        circleInfoText: uq,
        format: Bq,
        className: Wq,
        padStep: aq,
        disabled: Vq = !1,
        selectableMax: dq,
        cappedNote: Hq,
        onChangeComplete: oq
      } = qq;
      const [Pq, Qq] = (0, Yq.useState)(Aq), yq = (0, Yq.useRef)(Aq);
      (0, Yq.useEffect)((() => {
        yq.current = Aq, Qq(Aq)
      }), [Aq]);
      const tq = void 0 !== dq && dq < Oq,
        rq = tq ? {
          "--slider-selectable": (dq - lq) / (Oq - lq)
        } : void 0;
      return (0, Nq.jsxs)("div", {
        className: cq()("SettingBox SettingsSliderDiv", {
          [Wq]: Wq,
          SettingBoxDisabled: Vq,
          SliderCapped: tq
        }),
        style: rq,
        children: [(0, Nq.jsxs)("div", {
          className: "SliderText",
          children: [`${Eq}: ${Bq?Bq(Pq):Pq}`, uq && (0, Nq.jsx)(mq.c, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: uq
          })]
        }), (0, Nq.jsx)("div", {
          className: "SliderDiv",
          children: (0, Nq.jsx)(jq, {
            value: Pq,
            min: lq,
            max: Oq,
            step: xq,
            onChange: qq => {
              if (tq && qq >= dq && Pq === dq) return;
              const Eq = tq ? Math.min(qq, dq) : qq;
              yq.current = Eq, Qq(Eq), gq(Eq)
            },
            onChangeComplete: oq && (() => {
              oq(yq.current)
            }),
            format: Bq,
            padStep: aq,
            disabled: Vq
          })
        }), tq && Hq && (0, Nq.jsx)("div", {
          className: "SettingNote",
          children: Hq
        })]
      })
    }
    const dq = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function jq(qq) {
      var Eq;
      let {
        value: gq,
        min: Oq,
        max: mq,
        step: xq,
        onChange: Aq,
        orientation: cq,
        reverse: uq,
        setIsChanging: Bq,
        tooltip: aq,
        labels: Vq,
        handleLabel: jq,
        format: Hq,
        onChangeStart: oq,
        onChangeComplete: Pq,
        padStep: Qq,
        disabled: yq = !1
      } = qq;
      const tq = (0, Yq.useRef)(null),
        rq = (0, Yq.useRef)(null);
      (0, Yq.useLayoutEffect)((() => {
        var qq, Eq, gq;
        const Yq = null !== (qq = null === (Eq = tq.current) || void 0 === Eq ? void 0 : Eq.querySelector(".rangeslider")) && void 0 !== qq ? qq : null;
        null === Yq || void 0 === Yq || Yq.setAttribute("data-pad-slider", ""), null === Yq || void 0 === Yq || Yq.setAttribute("data-pad-focusable", ""), null === Yq || void 0 === Yq || null === (gq = Yq.querySelector(".rangeslider__handle")) || void 0 === gq || gq.setAttribute("data-pad-slider-handle", ""), rq.current = Yq
      }), []), (0, Yq.useLayoutEffect)((() => {
        var qq, Eq;
        yq ? null === (qq = rq.current) || void 0 === qq || qq.setAttribute("aria-disabled", "true") : null === (Eq = rq.current) || void 0 === Eq || Eq.removeAttribute("aria-disabled")
      }), [yq]);
      const vq = (null !== (Eq = String(xq).split(".")[1]) && void 0 !== Eq ? Eq : "").length,
        hq = qq => {
          const Eq = Number((Math.round((qq - Oq) / xq) * xq + Oq).toFixed(vq));
          return Math.min(mq, Math.max(Oq, Eq))
        },
        nq = (0, Yq.useRef)(Pq);
      nq.current = Pq, (0, Yq.useEffect)((() => {
        const qq = tq.current;
        if (!qq) return;
        const Eq = qq => {
          var Eq;
          dq.has(qq.key) && (null === (Eq = nq.current) || void 0 === Eq || Eq.call(nq))
        };
        return qq.addEventListener("keyup", Eq), () => {
          qq.removeEventListener("keyup", Eq)
        }
      }), []);
      const bq = (0, Yq.useRef)(!1);
      return (0, Wq.i)(rq, {
        adjust: qq => {
          if (yq) return;
          const Eq = null !== Qq && void 0 !== Qq ? Qq : Math.max(xq, Math.round((mq - Oq) / 20 / xq) * xq),
            Yq = hq(gq + qq * Eq * (uq ? -1 : 1));
          Yq !== gq && (null === oq || void 0 === oq || oq(), Aq(Yq), null === Pq || void 0 === Pq || Pq())
        },
        setFraction: qq => {
          if (yq) return;
          const Eq = hq(Oq + (uq ? 1 - qq : qq) * (mq - Oq));
          Eq !== gq && (bq.current || (bq.current = !0, null === oq || void 0 === oq || oq()), Aq(Eq))
        },
        endDrag: () => {
          bq.current && (bq.current = !1, null === Pq || void 0 === Pq || Pq())
        }
      }), (0, Nq.jsx)("div", {
        ref: tq,
        style: {
          display: "contents"
        },
        children: (0, Nq.jsx)(lq.d, {
          value: gq,
          min: Oq,
          max: mq,
          step: xq,
          onChange: Aq,
          orientation: cq,
          reverse: uq,
          tooltip: aq,
          labels: Vq,
          handleLabel: jq,
          format: Hq,
          onChangeStart: () => {
            null === oq || void 0 === oq || oq(), null === Bq || void 0 === Bq || Bq(!0)
          },
          onChangeComplete: () => {
            null === Bq || void 0 === Bq || Bq(!1), null === Pq || void 0 === Pq || Pq()
          }
        })
      })
    }
    async function Hq() {
      let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      const Eq = uq.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: "",
        unlockPointerKey: qq
      });
      !0 === await Eq.getResult() && (0, Bq.reloadBloxd)()
    }

    function oq(qq) {
      let {
        label: Eq,
        options: gq,
        value: Yq,
        onChange: lq,
        circleInfoText: Oq
      } = qq;
      return (0, Nq.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, Nq.jsxs)("div", {
          className: "SliderText",
          children: [Eq, Oq && (0, Nq.jsx)(mq.c, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: Oq
          })]
        }), (0, Nq.jsx)(xq.c, {
          ariaLabel: Eq,
          options: gq,
          value: Yq,
          onChange: lq
        })]
      })
    }
  },
  4826: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => jq,
      d: () => Hq
    });
    var Yq = gq(3059),
      lq = gq(3067),
      Oq = gq(57),
      mq = gq(1018),
      xq = gq.n(mq),
      Aq = gq(1326),
      cq = gq(3056),
      uq = gq(1336),
      Bq = gq(4828),
      Wq = gq(4875),
      Nq = gq(611),
      aq = gq(4883),
      Vq = gq(1070);

    function dq() {
      (0, Bq.l)("texturePackPickReload")
    }

    function jq(qq) {
      var Eq;
      let {
        setApplySettingsCallback: gq
      } = qq;
      const [, mq] = (0, Oq.useReducer)((qq => qq + 1), 0), xq = (0, Oq.useRef)(!1), Aq = (0, Oq.useRef)(null);

      function jq(qq, Eq) {
        cq.c.setFromJson(qq, "player");
        const Yq = cq.c.saveTexturePack();
        if (Nq.v) {
          const qq = cq.c.toJson();
          Yq.then((Eq => {
            Eq && (0, aq.f)(qq, dq)
          }))
        } else xq.current ||= Eq, Aq.current !== cq.c.getId() || cq.c.getId() === lq.n.CUSTOM && xq.current ? gq((() => Bq.l)) : gq(null);
        mq()
      }
      async function oq(qq) {
        if (cq.c.getId() !== qq.metaData.id) {
          if (cq.c.getId() === lq.n.CUSTOM && cq.c.getFromFolderName()) {
            const qq = uq.NotificationProvider.showPromptPopup({
              title: "settingsMenu:loseChangesTitle",
              subtitle: "settingsMenu:loseChangesSubtitle",
              confirmText: "general:continue",
              destructive: !0,
              confirmTooltip: "",
              cancelText: "general:cancel",
              cancelTooltip: ""
            });
            if (!0 !== await qq.getResult()) return
          }
          jq(qq, !1)
        }
      }(0, Oq.useEffect)((() => {
        Aq.current = cq.c.getId()
      }), []);
      const Pq = Yq.c,
        Qq = [Pq, ...Object.values(lq.n).filter((qq => qq !== Pq))];
      return (0, Vq.jsx)(Vq.Fragment, {
        children: (0, Vq.jsxs)("div", {
          className: "TexturePackCategory SettingsMenuRightInner",
          children: [(0, Vq.jsx)("div", {
            className: "TexturePackList",
            children: Qq.map((qq => (0, Vq.jsx)(Hq, {
              id: qq,
              isSelected: qq === cq.c.getId(),
              setSelected: oq
            }, qq)))
          }), cq.c.getId() === lq.n.CUSTOM && (0, Vq.jsx)(Wq.e, {
            folderName: null !== (Eq = cq.c.getFromFolderName()) && void 0 !== Eq ? Eq : null,
            onTexturePackUpdated: function(qq) {
              jq(qq, !0)
            },
            packOwner: "player"
          })]
        })
      })
    }

    function Hq(qq) {
      let {
        id: Eq,
        isSelected: gq,
        setSelected: mq,
        disabled: cq = !1
      } = qq;
      const [uq, Bq] = (0, Oq.useState)(!0), [Wq, Nq] = (0, Oq.useState)(""), [aq, dq] = (0, Oq.useState)(""), [jq, Hq] = (0, Oq.useState)(""), oq = (0, Oq.useRef)({});
      return (0, Oq.useEffect)((() => {
        (0, Yq.m)(Eq).then((qq => {
          var Eq;
          qq && (oq.current = qq, Bq(!1), Nq(oq.current.metaData.name), dq(oq.current.metaData.author), Hq(null !== (Eq = oq.current.metaData.previewImage) && void 0 !== Eq ? Eq : ""))
        })).catch((qq => {
          console.warn(`Failed to fetch texture pack ${Eq}`, qq)
        }))
      }), [Eq]), (0, Vq.jsxs)("div", {
        "data-pad-focusable": !0,
        "aria-disabled": cq || void 0,
        className: xq()("TexturePack", {
          Selected: gq,
          Custom: Eq === lq.n.CUSTOM,
          Disabled: cq
        }),
        onClick: () => {
          uq || cq || mq(oq.current)
        },
        children: [(0, Vq.jsx)("div", {
          className: "TexturePackBg",
          style: {
            backgroundImage: jq ? `url(${jq})` : void 0
          }
        }), uq && (0, Vq.jsx)("div", {
          className: "TexturePackName",
          children: (0, Vq.jsx)(Aq.e, {})
        }), !uq && Wq && (0, Vq.jsx)("div", {
          className: "TexturePackName",
          children: Wq
        }), !uq && aq && (0, Vq.jsx)("div", {
          className: "TexturePackAuthor",
          children: aq
        })]
      })
    }
  },
  4858: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => mq
    });
    var Yq = gq(1018),
      lq = gq.n(Yq),
      Oq = gq(1070);

    function mq(qq) {
      let {
        options: Eq,
        value: gq,
        onChange: Yq,
        ariaLabel: mq,
        className: xq,
        reselectable: Aq = !1,
        keepsFocus: cq = !1,
        padTabs: uq
      } = qq;
      const Bq = void 0 !== uq;
      return (0, Oq.jsx)("div", {
        className: lq()("SegmentedToggle", xq),
        role: "group",
        "aria-label": mq,
        "data-pad-tabs": uq,
        children: Eq.map((qq => {
          const Eq = qq.value === gq;
          return (0, Oq.jsx)("button", {
            type: "button",
            "aria-pressed": Eq,
            "data-pad-tab": Bq || void 0,
            "data-pad-selected": Bq && Eq ? "true" : void 0,
            "data-pad-default-focus": Bq && Eq || void 0,
            "aria-label": qq.ariaLabel,
            title: qq.ariaLabel,
            className: lq()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: Eq
            }),
            onMouseDown: cq ? qq => {
              qq.preventDefault()
            } : void 0,
            onClick: () => {
              Eq && !Aq || Yq(qq.value)
            },
            children: qq.label
          }, qq.value)
        }))
      })
    }
  },
  4866: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Oq,
      i: () => mq
    });
    var Yq = gq(57);
    const lq = new WeakMap,
      Oq = qq => {
        var Eq;
        const gq = qq.closest("[data-pad-slider]");
        return gq && null !== (Eq = lq.get(gq)) && void 0 !== Eq ? Eq : null
      },
      mq = (qq, Eq) => {
        const gq = (0, Yq.useRef)(Eq);
        gq.current = Eq, (0, Yq.useEffect)((() => {
          if (qq.current) return ((qq, Eq) => (lq.set(qq, Eq), () => {
            lq.get(qq) === Eq && lq.delete(qq)
          }))(qq.current, {
            adjust: qq => {
              gq.current.adjust(qq)
            },
            setFraction: qq => {
              gq.current.setFraction(qq)
            },
            endDrag: () => {
              gq.current.endDrag()
            }
          })
        }), [qq])
      }
  },
  4883: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => xq,
      f: () => mq
    });
    var Yq = gq(3067),
      lq = gq(4890);
    let Oq = null;

    function mq(qq, Eq) {
      Oq = {
        pack: qq.metaData.id === Yq.c ? null : qq,
        prompt: Eq
      }
    }

    function xq(qq, Eq) {
      const gq = Oq;
      null !== gq && (0, lq.c)(gq.pack, qq) && (Oq = null, Eq && gq.prompt())
    }
  },
  4890: (qq, Eq, gq) => {
    function Yq(qq, Eq) {
      return lq(qq, Eq)
    }

    function lq(qq, Eq) {
      if (qq === Eq) return !0;
      if ("object" !== typeof qq || "object" !== typeof Eq || null === qq || null === Eq || Array.isArray(qq) !== Array.isArray(Eq)) return !1;
      const gq = qq,
        Yq = Eq,
        Oq = Object.keys(gq);
      return Oq.length === Object.keys(Yq).length && Oq.every((qq => Object.prototype.hasOwnProperty.call(Yq, qq) && lq(gq[qq], Yq[qq])))
    }
    gq.d(Eq, {
      c: () => Yq
    })
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);