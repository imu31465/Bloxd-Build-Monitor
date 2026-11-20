export const id = 101;
export const ids = [101];
export const modules = {
  4612: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => Jk
    });
    var Rk = Bk(1020),
      tk = Bk.n(Rk),
      ak = Bk(1028),
      Xk = Bk(1288),
      bk = Bk(3309),
      wk = Bk(132),
      dk = Bk(3348),
      sk = Bk(3336),
      Vk = Bk(1069);

    function Jk(kk) {
      let {
        game: Fk
      } = kk;
      const Bk = (0, wk.h)() ? "large" : "small",
        Rk = (0, dk.e)(Fk, Bk),
        Jk = (0, bk.i)(Rk),
        Ak = void 0 !== Jk.blurhash;
      return (0, Vk.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [Jk.isLoading && !Ak && (0, Vk.jsx)(Xk.b, {
          loaderType: "Secondary"
        }), !Jk.failed && (null !== Jk.src || Ak) && (0, Vk.jsx)("div", {
          className: tk()("SchematicImage", sk.g, {
            SchematicImageFadeIn: Jk.fadeIn && !Ak
          }),
          style: (0, sk.e)(Jk),
          children: (0, Vk.jsx)(sk.d, {
            image: Jk
          })
        }), Jk.failed && (0, Vk.jsx)("div", {
          className: "SchematicImageError",
          children: (0, Vk.jsx)(ak.d, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  4724: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Ak
    });
    var Rk = Bk(61),
      tk = Bk(1020),
      ak = Bk.n(tk),
      Xk = Bk(4664),
      bk = Bk(1288),
      wk = Bk(1149),
      dk = Bk(2951),
      sk = Bk(3101),
      Vk = Bk(1028),
      Jk = Bk(1069);

    function Ak(kk) {
      let {
        folderName: Fk,
        onTexturePackUpdated: tk,
        disabled: Ak = !1,
        maxFileSizeMb: ek,
        packOwner: yk
      } = kk;
      const {
        t: fk
      } = (0, wk.x)(), [mk, Wk] = (0, Rk.useState)(!1), [vk, ik] = (0, Rk.useState)(null), [Yk, Lk] = (0, Rk.useState)(null), Ok = (0, Rk.useRef)(null);
      const {
        getRootProps: Ek,
        getInputProps: Sk,
        isDragActive: Nk
      } = (0, Xk.d)({
        onDrop: async function(kk) {
          Wk(!0);
          try {
            const Fk = await (0, dk.p)(kk);
            if ("customGame" === yk && (0, sk.k)(Fk)) return void ik(fk(sk.b));
            if (void 0 !== ek) {
              const kk = JSON.stringify(Fk).length / 1048576;
              if (kk > ek) return void ik(`File size is too large. Max size is ${ek}MB. Current size is ${kk}MB.`)
            }
            ik(null), Lk(null), tk(Fk), Ok.current = Fk,
              function(kk, Fk) {
                const Rk = kk.modelOverrides;
                Rk && Promise.all([Bk.e(195), Bk.e(194)]).then((() => Bk(9072))).then((Bk => {
                  let {
                    packDisplayName: tk,
                    refusedPackModels: ak,
                    packModelSummary: Xk
                  } = Bk;
                  const bk = tk(kk.metaData);
                  Fk(Xk(bk, ak(bk, Rk, !1)))
                })).catch((kk => {
                  console.error("Checking the texture pack's models failed:", kk)
                }))
              }(Fk, (kk => {
                Ok.current === Fk && Lk(kk)
              }))
          } catch {
            ik("Invalid Texture Pack Folder")
          } finally {
            Wk(!1)
          }
        },
        useFsAccessApi: !1,
        disabled: Ak
      });
      return (0, Jk.jsxs)("div", {
        className: "CustomTexturePackContainer",
        children: [(0, Jk.jsxs)("div", {
          className: "CustomTextureWarning",
          children: [fk("settingsMenu:customTextureWarning"), ".", (0, Jk.jsx)("br", {}), fk("settingsMenu:viewDocumentation"), ":", " ", (0, Jk.jsx)("a", {
            href: "https://github.com/Bloxdy/texturePacks",
            target: "_blank",
            rel: "noreferrer",
            children: "github.com/Bloxdy/texturePacks"
          })]
        }), vk && (0, Jk.jsxs)("div", {
          className: "CustomTextureError",
          children: [fk("general:error"), ": ", vk]
        }), Yk && (0, Jk.jsx)("div", {
          className: "CustomTextureError",
          children: Yk
        }), (0, Jk.jsxs)("div", {
          ...Ek({
            className: ak()("CustomTextureFolderUpload", {
              ActiveDrag: Nk,
              Disabled: Ak
            })
          }),
          children: [(0, Jk.jsx)("input", {
            ...Sk({
              webkitdirectory: "true"
            })
          }), mk && (0, Jk.jsx)("div", {
            className: "CustomTextureFolderUploadLoading",
            children: (0, Jk.jsx)(bk.b, {})
          }), !mk && !Nk && Fk && (0, Jk.jsxs)(Jk.Fragment, {
            children: [(0, Jk.jsx)("div", {
              className: "CustomTextureFolderUploadIcon Active",
              children: (0, Jk.jsx)(Vk.d, {
                name: "folder-image"
              })
            }), (0, Jk.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions Active",
              children: Fk
            })]
          }), !mk && (Nk || !Fk) && (0, Jk.jsxs)(Jk.Fragment, {
            children: [(0, Jk.jsx)("div", {
              className: "CustomTextureFolderUploadIcon",
              children: (0, Jk.jsx)(Vk.d, {
                name: "up-from-bracket"
              })
            }), (0, Jk.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions",
              children: "Drag and drop a Texture Pack folder here"
            })]
          })]
        })]
      })
    }
  },
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
  4686: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => mk,
      f: () => Wk
    });
    var Rk = Bk(2951),
      tk = Bk(2954),
      ak = Bk(61),
      Xk = Bk(1020),
      bk = Bk.n(Xk),
      wk = Bk(1288),
      dk = Bk(2943),
      sk = Bk(1300),
      Vk = Bk(4688),
      Jk = Bk(4724),
      Ak = Bk(624),
      ek = Bk(4726),
      yk = Bk(1069);

    function fk() {
      (0, Vk.m)("texturePackPickReload")
    }

    function mk(kk) {
      var Fk;
      let {
        setApplySettingsCallback: Bk
      } = kk;
      const [, Xk] = (0, ak.useReducer)((kk => kk + 1), 0), bk = (0, ak.useRef)(!1), wk = (0, ak.useRef)(null);

      function mk(kk, Fk) {
        dk.e.setFromJson(kk, "player");
        const Rk = dk.e.saveTexturePack();
        if (Ak.p) {
          const kk = dk.e.toJson();
          Rk.then((Fk => {
            Fk && (0, ek.e)(kk, fk)
          }))
        } else bk.current ||= Fk, wk.current !== dk.e.getId() || dk.e.getId() === tk.p.CUSTOM && bk.current ? Bk((() => Vk.m)) : Bk(null);
        Xk()
      }
      async function vk(kk) {
        if (dk.e.getId() !== kk.metaData.id) {
          if (dk.e.getId() === tk.p.CUSTOM && dk.e.getFromFolderName()) {
            const kk = sk.NotificationProvider.showPromptPopup({
              title: "settingsMenu:loseChangesTitle",
              subtitle: "settingsMenu:loseChangesSubtitle",
              confirmText: "general:continue",
              destructive: !0,
              confirmTooltip: "",
              cancelText: "general:cancel",
              cancelTooltip: ""
            });
            if (!0 !== await kk.getResult()) return
          }
          mk(kk, !1)
        }
      }(0, ak.useEffect)((() => {
        wk.current = dk.e.getId()
      }), []);
      const ik = Rk.e,
        Yk = [ik, ...Object.values(tk.p).filter((kk => kk !== ik))];
      return (0, yk.jsx)(yk.Fragment, {
        children: (0, yk.jsxs)("div", {
          className: "TexturePackCategory SettingsMenuRightInner",
          children: [(0, yk.jsx)("div", {
            className: "TexturePackList",
            children: Yk.map((kk => (0, yk.jsx)(Wk, {
              id: kk,
              isSelected: kk === dk.e.getId(),
              setSelected: vk
            }, kk)))
          }), dk.e.getId() === tk.p.CUSTOM && (0, yk.jsx)(Jk.d, {
            folderName: null !== (Fk = dk.e.getFromFolderName()) && void 0 !== Fk ? Fk : null,
            onTexturePackUpdated: function(kk) {
              mk(kk, !0)
            },
            packOwner: "player"
          })]
        })
      })
    }

    function Wk(kk) {
      let {
        id: Fk,
        isSelected: Bk,
        setSelected: Xk,
        disabled: dk = !1
      } = kk;
      const [sk, Vk] = (0, ak.useState)(!0), [Jk, Ak] = (0, ak.useState)(""), [ek, fk] = (0, ak.useState)(""), [mk, Wk] = (0, ak.useState)(""), vk = (0, ak.useRef)({});
      return (0, ak.useEffect)((() => {
        (0, Rk.m)(Fk).then((kk => {
          var Fk;
          kk && (vk.current = kk, Vk(!1), Ak(vk.current.metaData.name), fk(vk.current.metaData.author), Wk(null !== (Fk = vk.current.metaData.previewImage) && void 0 !== Fk ? Fk : ""))
        })).catch((kk => {
          console.warn(`Failed to fetch texture pack ${Fk}`, kk)
        }))
      }), [Fk]), (0, yk.jsxs)("div", {
        "data-pad-focusable": !0,
        "aria-disabled": dk || void 0,
        className: bk()("TexturePack", {
          Selected: Bk,
          Custom: Fk === tk.p.CUSTOM,
          Disabled: dk
        }),
        onClick: () => {
          sk || dk || Xk(vk.current)
        },
        children: [(0, yk.jsx)("div", {
          className: "TexturePackBg",
          style: {
            backgroundImage: mk ? `url(${mk})` : void 0
          }
        }), sk && (0, yk.jsx)("div", {
          className: "TexturePackName",
          children: (0, yk.jsx)(wk.b, {})
        }), !sk && Jk && (0, yk.jsx)("div", {
          className: "TexturePackName",
          children: Jk
        }), !sk && ek && (0, yk.jsx)("div", {
          className: "TexturePackAuthor",
          children: ek
        })]
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
  4726: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => bk,
      e: () => Xk
    });
    var Rk = Bk(2954),
      tk = Bk(4732);
    let ak = null;

    function Xk(kk, Fk) {
      ak = {
        pack: kk.metaData.id === Rk.c ? null : kk,
        prompt: Fk
      }
    }

    function bk(kk, Fk) {
      const Bk = ak;
      null !== Bk && (0, tk.c)(Bk.pack, kk) && (ak = null, Fk && Bk.prompt())
    }
  },
  4732: (kk, Fk, Bk) => {
    function Rk(kk, Fk) {
      return tk(kk, Fk)
    }

    function tk(kk, Fk) {
      if (kk === Fk) return !0;
      if ("object" !== typeof kk || "object" !== typeof Fk || null === kk || null === Fk || Array.isArray(kk) !== Array.isArray(Fk)) return !1;
      const Bk = kk,
        Rk = Fk,
        ak = Object.keys(Bk);
      return ak.length === Object.keys(Rk).length && ak.every((kk => Object.prototype.hasOwnProperty.call(Rk, kk) && tk(Bk[kk], Rk[kk])))
    }
    Bk.d(Fk, {
      c: () => Rk
    })
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);