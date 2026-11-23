export const id = 103;
export const ids = [103];
export const modules = {
  4911: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Zk
    });
    var Xk = Ik(1055),
      Tk = Ik.n(Xk),
      ik = Ik(1066),
      yk = Ik(1318),
      lk = Ik(3442),
      ak = Ik(129),
      qk = Ik(3488),
      Lk = Ik(3475),
      tk = Ik(1096);

    function Zk(kk) {
      let {
        game: Fk
      } = kk;
      const Ik = (0, ak.p)() ? "large" : "small",
        Xk = (0, qk.h)(Fk, Ik),
        Zk = (0, lk.e)(Xk),
        jk = void 0 !== Zk.blurhash;
      return (0, tk.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [Zk.isLoading && !jk && (0, tk.jsx)(yk.c, {
          loaderType: "Secondary"
        }), !Zk.failed && (null !== Zk.src || jk) && (0, tk.jsx)("div", {
          className: Tk()("SchematicImage", Lk.g, {
            SchematicImageFadeIn: Zk.fadeIn && !jk
          }),
          style: (0, Lk.f)(Zk),
          children: (0, tk.jsx)(Lk.d, {
            image: Zk
          })
        }), Zk.failed && (0, tk.jsx)("div", {
          className: "SchematicImageError",
          children: (0, tk.jsx)(ik.e, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  5030: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Hk
    });
    var Xk = Ik(58),
      Tk = Ik(1055),
      ik = Ik.n(Tk),
      yk = Ik(4944),
      lk = Ik(1318),
      ak = Ik(1179),
      qk = Ik(3096),
      Lk = Ik(3240),
      tk = Ik(1066),
      Zk = Ik(3103),
      jk = Ik(5038),
      ek = Ik(5060),
      wk = Ik(1096);

    function Hk(kk) {
      let {
        folderName: Fk,
        onTexturePackUpdated: Tk,
        disabled: Hk = !1,
        maxFileSizeMb: Jk,
        packOwner: xk
      } = kk;
      const {
        t: Pk
      } = (0, ak.y)(), [Kk, Qk] = (0, Xk.useState)(!1), [sk, Vk] = (0, Xk.useState)(null), [zk, Sk] = (0, Xk.useState)(null), vk = (0, Xk.useRef)(null);
      async function Ek(kk) {
        Qk(!0);
        try {
          const Fk = await (0, qk.s)(kk);
          if ("customGame" === xk && (0, Lk.k)(Fk)) return void Vk(Pk(Lk.b));
          if (void 0 !== Jk) {
            const kk = JSON.stringify(Fk).length / 1048576;
            if (kk > Jk) return void Vk(Pk("customTexturePack:packTooBig", {
              size: kk.toFixed(1),
              max: Jk
            }))
          }
          Vk(null), Sk(null), Tk(Fk), vk.current = Fk,
            function(kk, Fk) {
              const Xk = kk.modelOverrides;
              Xk && Promise.all([Ik.e(203), Ik.e(202)]).then((() => Ik(34255))).then((Ik => {
                let {
                  packDisplayName: Tk,
                  refusedPackModels: ik,
                  packModelSummary: yk
                } = Ik;
                const lk = Tk(kk.metaData);
                Fk(yk(lk, ik(lk, Xk, !1)))
              })).catch((kk => {
                console.error("Checking the texture pack's models failed:", kk)
              }))
            }(Fk, (kk => {
              vk.current === Fk && Sk(kk)
            }))
        } catch (Fk) {
          if (Fk instanceof Zk.e) {
            const kk = "customTexturePack:invalidPack" !== Fk.translationKey || (0, ek.d)() ? Fk.translationKey : "customTexturePack:invalidPackZip";
            Vk((0, jk.k)(Pk, kk, Fk.params))
          } else console.error("Couldn't read the texture pack", Fk), Vk(Pk("customTexturePack:errorTitle"))
        } finally {
          Qk(!1)
        }
      }
      const {
        getRootProps: Ok,
        getInputProps: nk,
        isDragActive: Gk,
        open: pk
      } = (0, yk.c)({
        onDrop: Ek,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: Hk
      });
      return (0, wk.jsxs)("div", {
        className: "CustomTexturePackContainer",
        children: [(0, wk.jsxs)("div", {
          className: "CustomTextureWarning",
          children: [Pk("settingsMenu:customTextureWarning"), ".", (0, wk.jsx)("br", {}), Pk("settingsMenu:viewDocumentation"), ":", " ", (0, wk.jsx)("a", {
            href: "https://github.com/Bloxdy/texturePacks",
            target: "_blank",
            rel: "noreferrer",
            children: "github.com/Bloxdy/texturePacks"
          })]
        }), sk && (0, wk.jsxs)("div", {
          className: "CustomTextureError",
          children: [Pk("general:error"), ": ", sk]
        }), zk && (0, wk.jsx)("div", {
          className: "CustomTextureError",
          children: zk
        }), (0, wk.jsxs)("div", {
          ...Ok({
            className: ik()("CustomTextureFolderUpload", {
              ActiveDrag: Gk,
              Disabled: Hk
            })
          }),
          children: [(0, wk.jsx)("input", {
            ...nk({
              webkitdirectory: "true"
            })
          }), Kk && (0, wk.jsx)("div", {
            className: "CustomTextureFolderUploadLoading",
            children: (0, wk.jsx)(lk.c, {})
          }), !Kk && !Gk && Fk && (0, wk.jsxs)(wk.Fragment, {
            children: [(0, wk.jsx)("div", {
              className: "CustomTextureFolderUploadIcon Active",
              children: (0, wk.jsx)(tk.e, {
                name: "folder-image"
              })
            }), (0, wk.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions Active",
              children: Fk
            })]
          }), !Kk && (Gk || !Fk) && (0, wk.jsxs)(wk.Fragment, {
            children: [(0, wk.jsx)("div", {
              className: "CustomTextureFolderUploadIcon",
              children: (0, wk.jsx)(tk.e, {
                name: "up-from-bracket"
              })
            }), (0, wk.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions",
              children: Pk((0, ek.d)() ? "customTexturePack:dropHere" : "customTexturePack:chooseZipInstructions")
            })]
          }), !Kk && (0, wk.jsx)(ek.c, {
            disabled: Hk,
            openFolderPicker: pk,
            onFiles: kk => {
              Ek(kk)
            }
          })]
        })]
      })
    }
  },
  5060: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Lk,
      d: () => qk
    });
    var Xk = Ik(58),
      Tk = Ik(1406),
      ik = Ik(1179),
      yk = Ik(95),
      lk = Ik(3078),
      ak = Ik(1096);

    function qk() {
      return !(0, yk.isMobile)()
    }

    function Lk(kk) {
      let {
        disabled: Fk,
        openFolderPicker: Ik,
        onFiles: yk
      } = kk;
      const {
        t: Lk
      } = (0, ik.y)(), tk = (0, Xk.useRef)(null);
      return (0, ak.jsxs)("div", {
        className: "PackPickButtons",
        "data-pad-mouse-only": !0,
        children: [(0, ak.jsx)("input", {
          ref: tk,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(kk) {
            const Fk = Array.from(kk.target.files);
            kk.target.value = "", yk(Fk)
          }
        }), qk() && (0, ak.jsx)(Tk.d, {
          disabled: Fk,
          onClick: Ik,
          children: Lk("general:chooseFolder")
        }), (0, ak.jsx)(Tk.d, {
          disabled: Fk,
          onClick: () => {
            (0, lk.e)(tk.current)
          },
          children: Lk("general:chooseZip")
        })]
      })
    }
  },
  4983: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => ek,
      h: () => Pk,
      j: () => wk,
      m: () => xk
    });
    var Xk = Ik(58),
      Tk = Ik(4988),
      ik = Ik(4338),
      yk = Ik(1333),
      lk = Ik(5016),
      ak = Ik(1055),
      qk = Ik.n(ak),
      Lk = Ik(1324),
      tk = Ik(1665),
      Zk = Ik(5022),
      jk = Ik(1096);

    function ek(kk) {
      let {
        label: Fk,
        onClick: Ik,
        checked: Xk,
        circleInfoText: Tk,
        className: lk,
        disabled: ak,
        note: Lk
      } = kk;
      return (0, jk.jsxs)("div", {
        "aria-disabled": ak || void 0,
        "data-pad-focusable": !0,
        className: qk()("SettingBox CheckboxContainer", {
          [lk]: lk,
          SettingBoxDisabled: ak
        }),
        onClick: () => {
          ak || Ik(!Xk)
        },
        children: [(0, jk.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, jk.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, jk.jsx)(ik.d, {
              className: "SettingsCheckbox",
              checked: Xk,
              disabled: ak,
              onChange: () => {}
            })
          }), (0, jk.jsxs)("div", {
            className: "CheckboxText",
            children: [Fk, Tk && (0, jk.jsx)("span", {
              onClick: kk => kk.stopPropagation(),
              children: (0, jk.jsx)(yk.c, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: Tk
              })
            })]
          })]
        }), Lk && (0, jk.jsx)("div", {
          className: "SettingNote",
          children: Lk
        })]
      })
    }

    function wk(kk) {
      let {
        name: Fk,
        onChange: Ik,
        min: Tk,
        max: ik,
        step: lk,
        initValue: ak,
        circleInfoText: Lk,
        format: tk,
        className: Zk,
        padStep: ek,
        disabled: wk = !1,
        selectableMax: Hk,
        cappedNote: xk,
        onChangeComplete: Pk
      } = kk;
      const [Kk, Qk] = (0, Xk.useState)(ak), sk = (0, Xk.useRef)(ak);
      (0, Xk.useEffect)((() => {
        sk.current = ak, Qk(ak)
      }), [ak]);
      const Vk = void 0 !== Hk && Hk < ik,
        zk = Vk ? {
          "--slider-selectable": (Hk - Tk) / (ik - Tk)
        } : void 0;
      return (0, jk.jsxs)("div", {
        className: qk()("SettingBox SettingsSliderDiv", {
          [Zk]: Zk,
          SettingBoxDisabled: wk,
          SliderCapped: Vk
        }),
        style: zk,
        children: [(0, jk.jsxs)("div", {
          className: "SliderText",
          children: [`${Fk}: ${tk?tk(Kk):Kk}`, Lk && (0, jk.jsx)(yk.c, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: Lk
          })]
        }), (0, jk.jsx)("div", {
          className: "SliderDiv",
          children: (0, jk.jsx)(Jk, {
            value: Kk,
            min: Tk,
            max: ik,
            step: lk,
            onChange: kk => {
              if (Vk && kk >= Hk && Kk === Hk) return;
              const Fk = Vk ? Math.min(kk, Hk) : kk;
              sk.current = Fk, Qk(Fk), Ik(Fk)
            },
            onChangeComplete: Pk && (() => {
              Pk(sk.current)
            }),
            format: tk,
            padStep: ek,
            disabled: wk
          })
        }), Vk && xk && (0, jk.jsx)("div", {
          className: "SettingNote",
          children: xk
        })]
      })
    }
    const Hk = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function Jk(kk) {
      var Fk;
      let {
        value: Ik,
        min: ik,
        max: yk,
        step: lk,
        onChange: ak,
        orientation: qk,
        reverse: Lk,
        setIsChanging: tk,
        tooltip: ek,
        labels: wk,
        handleLabel: Jk,
        format: xk,
        onChangeStart: Pk,
        onChangeComplete: Kk,
        padStep: Qk,
        disabled: sk = !1
      } = kk;
      const Vk = (0, Xk.useRef)(null),
        zk = (0, Xk.useRef)(null);
      (0, Xk.useLayoutEffect)((() => {
        var kk, Fk, Ik;
        const Xk = null !== (kk = null === (Fk = Vk.current) || void 0 === Fk ? void 0 : Fk.querySelector(".rangeslider")) && void 0 !== kk ? kk : null;
        null === Xk || void 0 === Xk || Xk.setAttribute("data-pad-slider", ""), null === Xk || void 0 === Xk || Xk.setAttribute("data-pad-focusable", ""), null === Xk || void 0 === Xk || null === (Ik = Xk.querySelector(".rangeslider__handle")) || void 0 === Ik || Ik.setAttribute("data-pad-slider-handle", ""), zk.current = Xk
      }), []), (0, Xk.useLayoutEffect)((() => {
        var kk, Fk;
        sk ? null === (kk = zk.current) || void 0 === kk || kk.setAttribute("aria-disabled", "true") : null === (Fk = zk.current) || void 0 === Fk || Fk.removeAttribute("aria-disabled")
      }), [sk]);
      const Sk = (null !== (Fk = String(lk).split(".")[1]) && void 0 !== Fk ? Fk : "").length,
        vk = kk => {
          const Fk = Number((Math.round((kk - ik) / lk) * lk + ik).toFixed(Sk));
          return Math.min(yk, Math.max(ik, Fk))
        },
        Ek = (0, Xk.useRef)(Kk);
      Ek.current = Kk, (0, Xk.useEffect)((() => {
        const kk = Vk.current;
        if (!kk) return;
        const Fk = kk => {
          var Fk;
          Hk.has(kk.key) && (null === (Fk = Ek.current) || void 0 === Fk || Fk.call(Ek))
        };
        return kk.addEventListener("keyup", Fk), () => {
          kk.removeEventListener("keyup", Fk)
        }
      }), []);
      const Ok = (0, Xk.useRef)(!1);
      return (0, Zk.g)(zk, {
        adjust: kk => {
          if (sk) return;
          const Fk = null !== Qk && void 0 !== Qk ? Qk : Math.max(lk, Math.round((yk - ik) / 20 / lk) * lk),
            Xk = vk(Ik + kk * Fk * (Lk ? -1 : 1));
          Xk !== Ik && (null === Pk || void 0 === Pk || Pk(), ak(Xk), null === Kk || void 0 === Kk || Kk())
        },
        setFraction: kk => {
          if (sk) return;
          const Fk = vk(ik + (Lk ? 1 - kk : kk) * (yk - ik));
          Fk !== Ik && (Ok.current || (Ok.current = !0, null === Pk || void 0 === Pk || Pk()), ak(Fk))
        },
        endDrag: () => {
          Ok.current && (Ok.current = !1, null === Kk || void 0 === Kk || Kk())
        }
      }), (0, jk.jsx)("div", {
        ref: Vk,
        style: {
          display: "contents"
        },
        children: (0, jk.jsx)(Tk.c, {
          value: Ik,
          min: ik,
          max: yk,
          step: lk,
          onChange: ak,
          orientation: qk,
          reverse: Lk,
          tooltip: ek,
          labels: wk,
          handleLabel: Jk,
          format: xk,
          onChangeStart: () => {
            null === Pk || void 0 === Pk || Pk(), null === tk || void 0 === tk || tk(!0)
          },
          onChangeComplete: () => {
            null === tk || void 0 === tk || tk(!1), null === Kk || void 0 === Kk || Kk()
          }
        })
      })
    }
    async function xk() {
      const kk = Lk.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await kk.getResult() && (0, tk.reloadBloxd)()
    }

    function Pk(kk) {
      let {
        label: Fk,
        options: Ik,
        value: Xk,
        onChange: Tk,
        circleInfoText: ik
      } = kk;
      return (0, jk.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, jk.jsxs)("div", {
          className: "SliderText",
          children: [Fk, ik && (0, jk.jsx)(yk.c, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: ik
          })]
        }), (0, jk.jsx)(lk.b, {
          ariaLabel: Fk,
          options: Ik,
          value: Xk,
          onChange: Tk
        })]
      })
    }
  },
  4978: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Hk,
      g: () => Jk
    });
    var Xk = Ik(3096),
      Tk = Ik(2071),
      ik = Ik(58),
      yk = Ik(1055),
      lk = Ik.n(yk),
      ak = Ik(1318),
      qk = Ik(3089),
      Lk = Ik(1324),
      tk = Ik(4983),
      Zk = Ik(5030),
      jk = Ik(646),
      ek = Ik(5063),
      wk = Ik(1096);

    function Hk(kk) {
      var Fk;
      let {
        setApplySettingsCallback: Ik
      } = kk;
      const [, yk] = (0, ik.useReducer)((kk => kk + 1), 0), lk = (0, ik.useRef)(!1), ak = (0, ik.useRef)(null);

      function Hk(kk, Fk) {
        qk.b.setFromJson(kk, "player");
        const Xk = qk.b.saveTexturePack();
        if (jk.x) {
          const kk = qk.b.toJson();
          Xk.then((Fk => {
            Fk && (0, ek.e)(kk)
          }))
        } else lk.current ||= Fk, ak.current !== qk.b.getId() || qk.b.getId() === Tk.l.CUSTOM && lk.current ? Ik((() => tk.m)) : Ik(null);
        yk()
      }
      async function xk(kk) {
        if (qk.b.getId() !== kk.metaData.id) {
          if (qk.b.getId() === Tk.l.CUSTOM && qk.b.getFromFolderName()) {
            const kk = Lk.NotificationProvider.showPromptPopup({
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
          Hk(kk, !1)
        }
      }(0, ik.useEffect)((() => {
        ak.current = qk.b.getId()
      }), []);
      const Pk = Xk.e,
        Kk = [Pk, ...Object.values(Tk.l).filter((kk => kk !== Pk))];
      return (0, wk.jsx)(wk.Fragment, {
        children: (0, wk.jsxs)("div", {
          className: "TexturePackCategory SettingsMenuRightInner",
          children: [(0, wk.jsx)("div", {
            className: "TexturePackList",
            children: Kk.map((kk => (0, wk.jsx)(Jk, {
              id: kk,
              isSelected: kk === qk.b.getId(),
              setSelected: xk
            }, kk)))
          }), qk.b.getId() === Tk.l.CUSTOM && (0, wk.jsx)(Zk.d, {
            folderName: null !== (Fk = qk.b.getFromFolderName()) && void 0 !== Fk ? Fk : null,
            onTexturePackUpdated: function(kk) {
              Hk(kk, !0)
            },
            packOwner: "player"
          })]
        })
      })
    }

    function Jk(kk) {
      let {
        id: Fk,
        isSelected: Ik,
        setSelected: yk,
        disabled: qk = !1
      } = kk;
      const [Lk, tk] = (0, ik.useState)(!0), [Zk, jk] = (0, ik.useState)(""), [ek, Hk] = (0, ik.useState)(""), [Jk, xk] = (0, ik.useState)(""), Pk = (0, ik.useRef)({});
      return (0, ik.useEffect)((() => {
        (0, Xk.o)(Fk).then((kk => {
          var Fk;
          kk && (Pk.current = kk, tk(!1), jk(Pk.current.metaData.name), Hk(Pk.current.metaData.author), xk(null !== (Fk = Pk.current.metaData.previewImage) && void 0 !== Fk ? Fk : ""))
        })).catch((kk => {
          console.warn(`Failed to fetch texture pack ${Fk}`, kk)
        }))
      }), [Fk]), (0, wk.jsxs)("div", {
        "data-pad-focusable": !0,
        "aria-disabled": qk || void 0,
        className: lk()("TexturePack", {
          Selected: Ik,
          Custom: Fk === Tk.l.CUSTOM,
          Disabled: qk
        }),
        onClick: () => {
          Lk || qk || yk(Pk.current)
        },
        children: [(0, wk.jsx)("div", {
          className: "TexturePackBg",
          style: {
            backgroundImage: Jk ? `url(${Jk})` : void 0
          }
        }), Lk && (0, wk.jsx)("div", {
          className: "TexturePackName",
          children: (0, wk.jsx)(ak.c, {})
        }), !Lk && Zk && (0, wk.jsx)("div", {
          className: "TexturePackName",
          children: Zk
        }), !Lk && ek && (0, wk.jsx)("div", {
          className: "TexturePackAuthor",
          children: ek
        })]
      })
    }
  },
  5038: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => lk,
      h: () => yk,
      k: () => ik
    });
    var Xk = Ik(5047);
    const Tk = [kk => kk.strict ? "strict" : "nonStrict", kk => kk.program];

    function ik(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const Xk = {};
      for (const Tk in Ik) Xk[Tk] = `\0${Tk}\0`;
      return kk(Fk, Xk).replace(/\0(\w+)\0/g, ((kk, Fk) => Ik[Fk]))
    }

    function yk(kk) {
      return null === kk.file ? null : kk.line > 0 ? `${kk.file}:${kk.line}` : kk.file
    }

    function lk(kk) {
      const Fk = new Map(kk.map((kk => [ak(kk).join("."), kk])));
      if (0 === Fk.size) return [];
      const Ik = Lk([...Fk.values()]);
      return 0 === Ik[0].length ? [] : Ik
    }

    function ak(kk) {
      return Tk.map((Fk => Fk(kk)))
    }
    const qk = Tk.map((kk => new Set(Xk.e.map(kk)).size));

    function Lk(kk) {
      const Fk = Tk.map((Fk => new Set(kk.map(Fk)))),
        Ik = Fk.reduce(((kk, Fk) => kk * Fk.size), 1),
        Xk = Fk.every(((kk, Fk) => 1 === kk.size || kk.size === qk[Fk]));
      if (Ik === kk.length && Xk) return [Tk.filter(((kk, Ik) => 1 === Fk[Ik].size)).map((Fk => Fk(kk[0])))];
      let ik = null;
      for (let yk = 0; yk < Tk.length; yk++) {
        if (1 === Fk[yk].size) continue;
        const Ik = tk(kk, Tk[yk]).flatMap(Lk);
        (null === ik || Ik.length < ik.length) && (ik = Ik)
      }
      return ik
    }

    function tk(kk, Fk) {
      const Ik = new Map;
      for (const Tk of kk) {
        var Xk;
        const kk = Fk(Tk);
        Ik.set(kk, [...null !== (Xk = Ik.get(kk)) && void 0 !== Xk ? Xk : [], Tk])
      }
      return [...Ik.values()]
    }
  },
  5016: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => yk
    });
    var Xk = Ik(1055),
      Tk = Ik.n(Xk),
      ik = Ik(1096);

    function yk(kk) {
      let {
        options: Fk,
        value: Ik,
        onChange: Xk,
        ariaLabel: yk,
        className: lk,
        reselectable: ak = !1,
        keepsFocus: qk = !1,
        padTabs: Lk
      } = kk;
      const tk = void 0 !== Lk;
      return (0, ik.jsx)("div", {
        className: Tk()("SegmentedToggle", lk),
        role: "group",
        "aria-label": yk,
        "data-pad-tabs": Lk,
        children: Fk.map((kk => {
          const Fk = kk.value === Ik;
          return (0, ik.jsx)("button", {
            type: "button",
            "aria-pressed": Fk,
            "data-pad-tab": tk || void 0,
            "data-pad-selected": tk && Fk ? "true" : void 0,
            "data-pad-default-focus": tk && Fk || void 0,
            "aria-label": kk.ariaLabel,
            title: kk.ariaLabel,
            className: Tk()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: Fk
            }),
            onMouseDown: qk ? kk => {
              kk.preventDefault()
            } : void 0,
            onClick: () => {
              Fk && !ak || Xk(kk.value)
            },
            children: kk.label
          }, kk.value)
        }))
      })
    }
  },
  5022: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => ik,
      g: () => yk
    });
    var Xk = Ik(58);
    const Tk = new WeakMap,
      ik = kk => {
        var Fk;
        const Ik = kk.closest("[data-pad-slider]");
        return Ik && null !== (Fk = Tk.get(Ik)) && void 0 !== Fk ? Fk : null
      },
      yk = (kk, Fk) => {
        const Ik = (0, Xk.useRef)(Fk);
        Ik.current = Fk, (0, Xk.useEffect)((() => {
          if (kk.current) return ((kk, Fk) => (Tk.set(kk, Fk), () => {
            Tk.get(kk) === Fk && Tk.delete(kk)
          }))(kk.current, {
            adjust: kk => {
              Ik.current.adjust(kk)
            },
            setFraction: kk => {
              Ik.current.setFraction(kk)
            },
            endDrag: () => {
              Ik.current.endDrag()
            }
          })
        }), [kk])
      }
  },
  5047: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Xk.d,
      e: () => Tk,
      i: () => Xk.m
    });
    var Xk = Ik(5053);
    const Tk = [!1, !0].flatMap((kk => ["terrain", "liquid", "model"].map((Fk => ({
      strict: kk,
      program: Fk
    })))))
  },
  5071: (kk, Fk, Ik) => {
    function Xk(kk, Fk) {
      return Tk(kk, Fk)
    }

    function Tk(kk, Fk) {
      if (kk === Fk) return !0;
      if ("object" !== typeof kk || "object" !== typeof Fk || null === kk || null === Fk || Array.isArray(kk) !== Array.isArray(Fk)) return !1;
      const Ik = kk,
        Xk = Fk,
        ik = Object.keys(Ik);
      return ik.length === Object.keys(Xk).length && ik.every((kk => Object.prototype.hasOwnProperty.call(Xk, kk) && Tk(Ik[kk], Xk[kk])))
    }
    Ik.d(Fk, {
      e: () => Xk
    })
  },
  5063: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => yk,
      i: () => lk
    });
    var Xk = Ik(2071),
      Tk = Ik(5071);
    let ik = null;

    function yk(kk) {
      ik = {
        pack: kk.metaData.id === Xk.b ? null : kk
      }
    }

    function lk(kk) {
      return !(null === ik || !(0, Tk.e)(ik.pack, kk)) && (ik = null, !0)
    }
  },
  5053: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => lk,
      c: () => yk,
      d: () => Xk,
      g: () => wk,
      k: () => tk,
      m: () => Tk,
      p: () => ik,
      t: () => qk,
      w: () => Lk,
      x: () => Zk
    });
    const Xk = 5;

    function Tk(kk) {
      return kk === Xk
    }

    function ik(kk) {
      return [...kk.features]
    }
    const yk = 262144,
      lk = 256,
      ak = 256;

    function qk(kk) {
      if ("object" !== typeof kk || null === kk || Array.isArray(kk)) return "The pack has no files.";
      const Fk = [];
      for (const [Ik, Xk] of Object.entries(kk)) {
        if ("string" !== typeof Xk) return `${Ik} isn't text.`;
        Fk.push({
          path: Ik,
          source: Xk
        })
      }
      return Fk.sort(((kk, Fk) => tk(kk.path, Fk.path))),
        function(kk) {
          if (0 === kk.length) return "The pack has no .wgsl files.";
          if (kk.length > lk) return `The pack has more than ${lk} .wgsl files.`;
          const Fk = new Set;
          for (const {
              path: Ik
            }
            of kk) {
            const kk = jk(Ik);
            if (null !== kk) return kk;
            if (Fk.has(Ik)) return `The pack has two files at ${Ik}.`;
            Fk.add(Ik)
          }
          return Zk(kk) > yk ? `The pack's .wgsl files are over ${yk/1024} KB in total.` : null
        }(Fk) ?? Fk
    }

    function Lk(kk) {
      const Fk = {};
      for (const Ik of kk) Fk[Ik.path] = Ik.source;
      return Fk
    }

    function tk(kk, Fk) {
      return kk < Fk ? -1 : kk > Fk ? 1 : 0
    }

    function Zk(kk) {
      const Fk = new TextEncoder;
      let Ik = 0;
      for (const {
          source: Xk
        }
        of kk) Ik += Fk.encode(Xk).byteLength;
      return Ik
    }

    function jk(kk) {
      if (!kk.toLowerCase().endsWith(".wgsl")) return `${kk} isn't a .wgsl file.`;
      if (kk.length > ak) return `A file path is over ${ak} characters.`;
      if (kk.includes("\\") || /[\u0000-\u001f]/.test(kk)) return `${kk} isn't a valid file path.`;
      return kk.split("/").some((kk => "" === kk || "." === kk || ".." === kk)) ? `${kk} isn't a valid file path.` : null
    }
    const ek = /^(.*)\[rot\[([1-4])$/;

    function wk(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const Xk = new Map;
      Fk.forEach(((kk, Fk) => {
        let {
          numAnimStates: Ik,
          animStartIdx: Tk
        } = kk;
        for (let ik = 1; ik < Ik; ik++) Xk.set(Tk + ik - 1, Fk)
      }));
      const Tk = Object.entries(kk),
        ik = new Map;
      for (const [wk, Hk] of Tk) {
        const kk = ek.exec(wk);
        "1" === kk?.[2] && ik.set(kk[1], Hk + 1)
      }
      const yk = kk => {
          const Fk = ek.exec(kk);
          return Fk && ik.has(Fk[1]) ? {
            root: Fk[1],
            rotation: Number(Fk[2]) - 1
          } : null
        },
        lk = new Set(Tk.map((kk => {
          let [Fk] = kk;
          return yk(Fk)?.root ?? Fk
        }))),
        ak = (kk, Ik) => {
          const Xk = kk.replace(/_?0$/, "");
          return (Fk[Ik]?.numAnimStates ?? 0) > 1 && !lk.has(Xk) ? Xk : kk
        },
        qk = new Map;
      for (const [ek, wk] of Tk) qk.set(wk, ak(yk(ek)?.root ?? ek, wk));
      const Lk = Tk.reduce(((kk, Fk) => {
          let [, Ik] = Fk;
          return Math.max(kk, Ik + 1)
        }), 0),
        tk = Array.from({
          length: Lk
        }, ((kk, Fk) => ({
          id: Fk + 1,
          rotation: 0
        }))),
        Zk = new Map,
        jk = new Map;
      for (const [ek, wk] of Tk) {
        const kk = yk(ek),
          Fk = Xk.get(wk);
        if (void 0 !== Fk) {
          const Ik = qk.get(Fk);
          jk.set(ek, {
            name: ek,
            texture: Ik,
            kind: "frame"
          }), kk && !jk.has(kk.root) && jk.set(kk.root, {
            name: kk.root,
            texture: Ik,
            kind: "frame"
          });
          continue
        }
        const Ik = qk.get(wk),
          Tk = kk?.root ?? ek;
        if (Ik !== Tk && jk.set(Tk, {
            name: Tk,
            texture: Ik,
            kind: "frame"
          }), kk) {
          const Fk = ik.get(kk.root);
          tk[wk] = {
            id: Fk,
            rotation: kk.rotation
          }, Zk.set(Ik, Fk), jk.set(ek, {
            name: ek,
            texture: Ik,
            kind: "rotation"
          })
        } else Zk.set(Ik, wk + 1)
      }
      for (const ek of Zk.keys()) jk.delete(ek);
      for (const [ek, wk] of Ik) {
        const kk = Zk.get(wk);
        void 0 === kk || Zk.has(ek) || (Zk.set(ek, kk), jk.delete(ek))
      }
      return {
        named: [...Zk].sort(((kk, Fk) => {
          let [Ik] = kk, [Xk] = Fk;
          return Ik < Xk ? -1 : Ik > Xk ? 1 : 0
        })).map((kk => {
          let [Fk, Ik] = kk;
          return {
            name: Fk,
            id: Ik
          }
        })),
        aliases: [...jk.values()],
        layers: tk
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);