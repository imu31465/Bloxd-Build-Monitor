export const id = 103;
export const ids = [103];
export const modules = {
  4840: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => xk
    });
    var Dk = ik(1021),
      fk = ik.n(Dk),
      Sk = ik(1033),
      bk = ik(1327),
      rk = ik(3456),
      Pk = ik(131),
      mk = ik(3487),
      Mk = ik(3475),
      Kk = ik(1066);

    function xk(kk) {
      let {
        game: ek
      } = kk;
      const ik = (0, Pk.m)() ? "large" : "small",
        Dk = (0, mk.g)(ek, ik),
        xk = (0, rk.d)(Dk),
        nk = void 0 !== xk.blurhash;
      return (0, Kk.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [xk.isLoading && !nk && (0, Kk.jsx)(bk.d, {
          loaderType: "Secondary"
        }), !xk.failed && (null !== xk.src || nk) && (0, Kk.jsx)("div", {
          className: fk()("SchematicImage", Mk.k, {
            SchematicImageFadeIn: xk.fadeIn && !nk
          }),
          style: (0, Mk.g)(xk),
          children: (0, Kk.jsx)(Mk.d, {
            image: xk
          })
        }), xk.failed && (0, Kk.jsx)("div", {
          className: "SchematicImageError",
          children: (0, Kk.jsx)(Sk.d, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  4955: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => wk
    });
    var Dk = ik(60),
      fk = ik(1021),
      Sk = ik.n(fk),
      bk = ik(4888),
      rk = ik(1327),
      Pk = ik(1172),
      mk = ik(3128),
      Mk = ik(3271),
      Kk = ik(1033),
      xk = ik(3131),
      nk = ik(4959),
      Uk = ik(4970),
      Hk = ik(1066);

    function wk(kk) {
      let {
        folderName: ek,
        onTexturePackUpdated: fk,
        disabled: wk = !1,
        maxFileSizeMb: lk,
        packOwner: pk
      } = kk;
      const {
        t: yk
      } = (0, Pk.D)(), [Yk, Lk] = (0, Dk.useState)(!1), [Ck, Ak] = (0, Dk.useState)(null), [jk, sk] = (0, Dk.useState)(null), dk = (0, Dk.useRef)(null);
      async function Vk(kk) {
        Lk(!0);
        try {
          const ek = await (0, mk.o)(kk);
          if ("customGame" === pk && (0, Mk.n)(ek)) return void Ak(yk(Mk.e));
          if (void 0 !== lk) {
            const kk = JSON.stringify(ek).length / 1048576;
            if (kk > lk) return void Ak(yk("customTexturePack:packTooBig", {
              size: kk.toFixed(1),
              max: lk
            }))
          }
          Ak(null), sk(null), fk(ek), dk.current = ek,
            function(kk, ek) {
              const Dk = kk.modelOverrides;
              Dk && Promise.all([ik.e(205), ik.e(204)]).then((() => ik(33831))).then((ik => {
                let {
                  packDisplayName: fk,
                  refusedPackModels: Sk,
                  packModelSummary: bk
                } = ik;
                const rk = fk(kk.metaData);
                ek(bk(rk, Sk(rk, Dk, !1)))
              })).catch((kk => {
                console.error("Checking the texture pack's models failed:", kk)
              }))
            }(ek, (kk => {
              dk.current === ek && sk(kk)
            }))
        } catch (ek) {
          if (ek instanceof xk.c) {
            const kk = "customTexturePack:invalidPack" !== ek.translationKey || (0, Uk.e)() ? ek.translationKey : "customTexturePack:invalidPackZip";
            Ak((0, nk.j)(yk, kk, ek.params))
          } else console.error("Couldn't read the texture pack", ek), Ak(yk("customTexturePack:errorTitle"))
        } finally {
          Lk(!1)
        }
      }
      const {
        getRootProps: Fk,
        getInputProps: uk,
        isDragActive: qk,
        open: Ik
      } = (0, bk.e)({
        onDrop: Vk,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: wk
      });
      return (0, Hk.jsxs)("div", {
        className: "CustomTexturePackContainer",
        children: [(0, Hk.jsxs)("div", {
          className: "CustomTextureWarning",
          children: [yk("settingsMenu:customTextureWarning"), ".", (0, Hk.jsx)("br", {}), yk("settingsMenu:viewDocumentation"), ":", " ", (0, Hk.jsx)("a", {
            href: "https://github.com/Bloxdy/texturePacks",
            target: "_blank",
            rel: "noreferrer",
            children: "github.com/Bloxdy/texturePacks"
          })]
        }), Ck && (0, Hk.jsxs)("div", {
          className: "CustomTextureError",
          children: [yk("general:error"), ": ", Ck]
        }), jk && (0, Hk.jsx)("div", {
          className: "CustomTextureError",
          children: jk
        }), (0, Hk.jsxs)("div", {
          ...Fk({
            className: Sk()("CustomTextureFolderUpload", {
              ActiveDrag: qk,
              Disabled: wk
            })
          }),
          children: [(0, Hk.jsx)("input", {
            ...uk({
              webkitdirectory: "true"
            })
          }), Yk && (0, Hk.jsx)("div", {
            className: "CustomTextureFolderUploadLoading",
            children: (0, Hk.jsx)(rk.d, {})
          }), !Yk && !qk && ek && (0, Hk.jsxs)(Hk.Fragment, {
            children: [(0, Hk.jsx)("div", {
              className: "CustomTextureFolderUploadIcon Active",
              children: (0, Hk.jsx)(Kk.d, {
                name: "folder-image"
              })
            }), (0, Hk.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions Active",
              children: ek
            })]
          }), !Yk && (qk || !ek) && (0, Hk.jsxs)(Hk.Fragment, {
            children: [(0, Hk.jsx)("div", {
              className: "CustomTextureFolderUploadIcon",
              children: (0, Hk.jsx)(Kk.d, {
                name: "up-from-bracket"
              })
            }), (0, Hk.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions",
              children: yk((0, Uk.e)() ? "customTexturePack:dropHere" : "customTexturePack:chooseZipInstructions")
            })]
          }), !Yk && (0, Hk.jsx)(Uk.d, {
            disabled: wk,
            openFolderPicker: Ik,
            onFiles: kk => {
              Vk(kk)
            }
          })]
        })]
      })
    }
  },
  4970: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => mk,
      e: () => Pk
    });
    var Dk = ik(60),
      fk = ik(1410),
      Sk = ik(1172),
      bk = ik(99),
      rk = ik(1066);

    function Pk() {
      return !(0, bk.isMobile)()
    }

    function mk(kk) {
      let {
        disabled: ek,
        openFolderPicker: ik,
        onFiles: bk
      } = kk;
      const {
        t: mk
      } = (0, Sk.D)(), Mk = (0, Dk.useRef)(null);
      return (0, rk.jsxs)("div", {
        className: "PackPickButtons",
        "data-pad-mouse-only": !0,
        children: [(0, rk.jsx)("input", {
          ref: Mk,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(kk) {
            const ek = Array.from(kk.target.files);
            kk.target.value = "", bk(ek)
          }
        }), Pk() && (0, rk.jsx)(fk.f, {
          disabled: ek,
          onClick: ik,
          children: mk("general:chooseFolder")
        }), (0, rk.jsx)(fk.f, {
          disabled: ek,
          onClick: () => {
            Mk.current.click()
          },
          children: mk("general:chooseZip")
        })]
      })
    }
  },
  4926: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Uk,
      i: () => yk,
      m: () => Hk,
      q: () => pk
    });
    var Dk = ik(60),
      fk = ik(4935),
      Sk = ik(4319),
      bk = ik(1345),
      rk = ik(4946),
      Pk = ik(1021),
      mk = ik.n(Pk),
      Mk = ik(1333),
      Kk = ik(1688),
      xk = ik(4951),
      nk = ik(1066);

    function Uk(kk) {
      let {
        label: ek,
        onClick: ik,
        checked: Dk,
        circleInfoText: fk,
        className: rk,
        disabled: Pk,
        note: Mk
      } = kk;
      return (0, nk.jsxs)("div", {
        "aria-disabled": Pk || void 0,
        "data-pad-focusable": !0,
        className: mk()("SettingBox CheckboxContainer", {
          [rk]: rk,
          SettingBoxDisabled: Pk
        }),
        onClick: () => {
          Pk || ik(!Dk)
        },
        children: [(0, nk.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, nk.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, nk.jsx)(Sk.d, {
              className: "SettingsCheckbox",
              checked: Dk,
              disabled: Pk,
              onChange: () => {}
            })
          }), (0, nk.jsxs)("div", {
            className: "CheckboxText",
            children: [ek, fk && (0, nk.jsx)("span", {
              onClick: kk => kk.stopPropagation(),
              children: (0, nk.jsx)(bk.e, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: fk
              })
            })]
          })]
        }), Mk && (0, nk.jsx)("div", {
          className: "SettingNote",
          children: Mk
        })]
      })
    }

    function Hk(kk) {
      let {
        name: ek,
        onChange: ik,
        min: fk,
        max: Sk,
        step: rk,
        initValue: Pk,
        circleInfoText: Mk,
        format: Kk,
        className: xk,
        padStep: Uk,
        disabled: Hk = !1,
        selectableMax: wk,
        cappedNote: pk,
        onChangeComplete: yk
      } = kk;
      const [Yk, Lk] = (0, Dk.useState)(Pk), Ck = (0, Dk.useRef)(Pk);
      (0, Dk.useEffect)((() => {
        Ck.current = Pk, Lk(Pk)
      }), [Pk]);
      const Ak = void 0 !== wk && wk < Sk,
        jk = Ak ? {
          "--slider-selectable": (wk - fk) / (Sk - fk)
        } : void 0;
      return (0, nk.jsxs)("div", {
        className: mk()("SettingBox SettingsSliderDiv", {
          [xk]: xk,
          SettingBoxDisabled: Hk,
          SliderCapped: Ak
        }),
        style: jk,
        children: [(0, nk.jsxs)("div", {
          className: "SliderText",
          children: [`${ek}: ${Kk?Kk(Yk):Yk}`, Mk && (0, nk.jsx)(bk.e, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: Mk
          })]
        }), (0, nk.jsx)("div", {
          className: "SliderDiv",
          children: (0, nk.jsx)(lk, {
            value: Yk,
            min: fk,
            max: Sk,
            step: rk,
            onChange: kk => {
              if (Ak && kk >= wk && Yk === wk) return;
              const ek = Ak ? Math.min(kk, wk) : kk;
              Ck.current = ek, Lk(ek), ik(ek)
            },
            onChangeComplete: yk && (() => {
              yk(Ck.current)
            }),
            format: Kk,
            padStep: Uk,
            disabled: Hk
          })
        }), Ak && pk && (0, nk.jsx)("div", {
          className: "SettingNote",
          children: pk
        })]
      })
    }
    const wk = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function lk(kk) {
      var ek;
      let {
        value: ik,
        min: Sk,
        max: bk,
        step: rk,
        onChange: Pk,
        orientation: mk,
        reverse: Mk,
        setIsChanging: Kk,
        tooltip: Uk,
        labels: Hk,
        handleLabel: lk,
        format: pk,
        onChangeStart: yk,
        onChangeComplete: Yk,
        padStep: Lk,
        disabled: Ck = !1
      } = kk;
      const Ak = (0, Dk.useRef)(null),
        jk = (0, Dk.useRef)(null);
      (0, Dk.useLayoutEffect)((() => {
        var kk, ek, ik;
        const Dk = null !== (kk = null === (ek = Ak.current) || void 0 === ek ? void 0 : ek.querySelector(".rangeslider")) && void 0 !== kk ? kk : null;
        null === Dk || void 0 === Dk || Dk.setAttribute("data-pad-slider", ""), null === Dk || void 0 === Dk || Dk.setAttribute("data-pad-focusable", ""), null === Dk || void 0 === Dk || null === (ik = Dk.querySelector(".rangeslider__handle")) || void 0 === ik || ik.setAttribute("data-pad-slider-handle", ""), jk.current = Dk
      }), []), (0, Dk.useLayoutEffect)((() => {
        var kk, ek;
        Ck ? null === (kk = jk.current) || void 0 === kk || kk.setAttribute("aria-disabled", "true") : null === (ek = jk.current) || void 0 === ek || ek.removeAttribute("aria-disabled")
      }), [Ck]);
      const sk = (null !== (ek = String(rk).split(".")[1]) && void 0 !== ek ? ek : "").length,
        dk = kk => {
          const ek = Number((Math.round((kk - Sk) / rk) * rk + Sk).toFixed(sk));
          return Math.min(bk, Math.max(Sk, ek))
        },
        Vk = (0, Dk.useRef)(Yk);
      Vk.current = Yk, (0, Dk.useEffect)((() => {
        const kk = Ak.current;
        if (!kk) return;
        const ek = kk => {
          var ek;
          wk.has(kk.key) && (null === (ek = Vk.current) || void 0 === ek || ek.call(Vk))
        };
        return kk.addEventListener("keyup", ek), () => {
          kk.removeEventListener("keyup", ek)
        }
      }), []);
      const Fk = (0, Dk.useRef)(!1);
      return (0, xk.f)(jk, {
        adjust: kk => {
          if (Ck) return;
          const ek = null !== Lk && void 0 !== Lk ? Lk : Math.max(rk, Math.round((bk - Sk) / 20 / rk) * rk),
            Dk = dk(ik + kk * ek * (Mk ? -1 : 1));
          Dk !== ik && (null === yk || void 0 === yk || yk(), Pk(Dk), null === Yk || void 0 === Yk || Yk())
        },
        setFraction: kk => {
          if (Ck) return;
          const ek = dk(Sk + (Mk ? 1 - kk : kk) * (bk - Sk));
          ek !== ik && (Fk.current || (Fk.current = !0, null === yk || void 0 === yk || yk()), Pk(ek))
        },
        endDrag: () => {
          Fk.current && (Fk.current = !1, null === Yk || void 0 === Yk || Yk())
        }
      }), (0, nk.jsx)("div", {
        ref: Ak,
        style: {
          display: "contents"
        },
        children: (0, nk.jsx)(fk.e, {
          value: ik,
          min: Sk,
          max: bk,
          step: rk,
          onChange: Pk,
          orientation: mk,
          reverse: Mk,
          tooltip: Uk,
          labels: Hk,
          handleLabel: lk,
          format: pk,
          onChangeStart: () => {
            null === yk || void 0 === yk || yk(), null === Kk || void 0 === Kk || Kk(!0)
          },
          onChangeComplete: () => {
            null === Kk || void 0 === Kk || Kk(!1), null === Yk || void 0 === Yk || Yk()
          }
        })
      })
    }
    async function pk() {
      const kk = Mk.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await kk.getResult() && (0, Kk.reloadBloxd)()
    }

    function yk(kk) {
      let {
        label: ek,
        options: ik,
        value: Dk,
        onChange: fk,
        circleInfoText: Sk
      } = kk;
      return (0, nk.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, nk.jsxs)("div", {
          className: "SliderText",
          children: [ek, Sk && (0, nk.jsx)(bk.e, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: Sk
          })]
        }), (0, nk.jsx)(rk.b, {
          ariaLabel: ek,
          options: ik,
          value: Dk,
          onChange: fk
        })]
      })
    }
  },
  4924: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => wk,
      c: () => lk
    });
    var Dk = ik(3128),
      fk = ik(2107),
      Sk = ik(60),
      bk = ik(1021),
      rk = ik.n(bk),
      Pk = ik(1327),
      mk = ik(3121),
      Mk = ik(1333),
      Kk = ik(4926),
      xk = ik(4955),
      nk = ik(610),
      Uk = ik(4974),
      Hk = ik(1066);

    function wk(kk) {
      var ek;
      let {
        setApplySettingsCallback: ik
      } = kk;
      const [, bk] = (0, Sk.useReducer)((kk => kk + 1), 0), rk = (0, Sk.useRef)(!1), Pk = (0, Sk.useRef)(null);

      function wk(kk, ek) {
        mk.e.setFromJson(kk, "player");
        const Dk = mk.e.saveTexturePack();
        if (nk.s) {
          const kk = mk.e.toJson();
          Dk.then((ek => {
            ek && (0, Uk.e)(kk)
          }))
        } else rk.current ||= ek, Pk.current !== mk.e.getId() || mk.e.getId() === fk.u.CUSTOM && rk.current ? ik((() => Kk.q)) : ik(null);
        bk()
      }
      async function pk(kk) {
        if (mk.e.getId() !== kk.metaData.id) {
          if (mk.e.getId() === fk.u.CUSTOM && mk.e.getFromFolderName()) {
            const kk = Mk.NotificationProvider.showPromptPopup({
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
          wk(kk, !1)
        }
      }(0, Sk.useEffect)((() => {
        Pk.current = mk.e.getId()
      }), []);
      const yk = Dk.c,
        Yk = [yk, ...Object.values(fk.u).filter((kk => kk !== yk))];
      return (0, Hk.jsx)(Hk.Fragment, {
        children: (0, Hk.jsxs)("div", {
          className: "TexturePackCategory SettingsMenuRightInner",
          children: [(0, Hk.jsx)("div", {
            className: "TexturePackList",
            children: Yk.map((kk => (0, Hk.jsx)(lk, {
              id: kk,
              isSelected: kk === mk.e.getId(),
              setSelected: pk
            }, kk)))
          }), mk.e.getId() === fk.u.CUSTOM && (0, Hk.jsx)(xk.c, {
            folderName: null !== (ek = mk.e.getFromFolderName()) && void 0 !== ek ? ek : null,
            onTexturePackUpdated: function(kk) {
              wk(kk, !0)
            },
            packOwner: "player"
          })]
        })
      })
    }

    function lk(kk) {
      let {
        id: ek,
        isSelected: ik,
        setSelected: bk,
        disabled: mk = !1
      } = kk;
      const [Mk, Kk] = (0, Sk.useState)(!0), [xk, nk] = (0, Sk.useState)(""), [Uk, wk] = (0, Sk.useState)(""), [lk, pk] = (0, Sk.useState)(""), yk = (0, Sk.useRef)({});
      return (0, Sk.useEffect)((() => {
        (0, Dk.l)(ek).then((kk => {
          var ek;
          kk && (yk.current = kk, Kk(!1), nk(yk.current.metaData.name), wk(yk.current.metaData.author), pk(null !== (ek = yk.current.metaData.previewImage) && void 0 !== ek ? ek : ""))
        })).catch((kk => {
          console.warn(`Failed to fetch texture pack ${ek}`, kk)
        }))
      }), [ek]), (0, Hk.jsxs)("div", {
        "data-pad-focusable": !0,
        "aria-disabled": mk || void 0,
        className: rk()("TexturePack", {
          Selected: ik,
          Custom: ek === fk.u.CUSTOM,
          Disabled: mk
        }),
        onClick: () => {
          Mk || mk || bk(yk.current)
        },
        children: [(0, Hk.jsx)("div", {
          className: "TexturePackBg",
          style: {
            backgroundImage: lk ? `url(${lk})` : void 0
          }
        }), Mk && (0, Hk.jsx)("div", {
          className: "TexturePackName",
          children: (0, Hk.jsx)(Pk.d, {})
        }), !Mk && xk && (0, Hk.jsx)("div", {
          className: "TexturePackName",
          children: xk
        }), !Mk && Uk && (0, Hk.jsx)("div", {
          className: "TexturePackAuthor",
          children: Uk
        })]
      })
    }
  },
  4959: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => rk,
      g: () => bk,
      j: () => Sk
    });
    var Dk = ik(4961);
    const fk = [kk => kk.strict ? "strict" : "nonStrict", kk => kk.program];

    function Sk(kk, ek) {
      let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const Dk = {};
      for (const fk in ik) Dk[fk] = `\0${fk}\0`;
      return kk(ek, Dk).replace(/\0(\w+)\0/g, ((kk, ek) => ik[ek]))
    }

    function bk(kk) {
      return null === kk.file ? null : kk.line > 0 ? `${kk.file}:${kk.line}` : kk.file
    }

    function rk(kk) {
      const ek = new Map(kk.map((kk => [Pk(kk).join("."), kk])));
      if (0 === ek.size) return [];
      const ik = Mk([...ek.values()]);
      return 0 === ik[0].length ? [] : ik
    }

    function Pk(kk) {
      return fk.map((ek => ek(kk)))
    }
    const mk = fk.map((kk => new Set(Dk.e.map(kk)).size));

    function Mk(kk) {
      const ek = fk.map((ek => new Set(kk.map(ek)))),
        ik = ek.reduce(((kk, ek) => kk * ek.size), 1),
        Dk = ek.every(((kk, ek) => 1 === kk.size || kk.size === mk[ek]));
      if (ik === kk.length && Dk) return [fk.filter(((kk, ik) => 1 === ek[ik].size)).map((ek => ek(kk[0])))];
      let Sk = null;
      for (let bk = 0; bk < fk.length; bk++) {
        if (1 === ek[bk].size) continue;
        const ik = Kk(kk, fk[bk]).flatMap(Mk);
        (null === Sk || ik.length < Sk.length) && (Sk = ik)
      }
      return Sk
    }

    function Kk(kk, ek) {
      const ik = new Map;
      for (const fk of kk) {
        var Dk;
        const kk = ek(fk);
        ik.set(kk, [...null !== (Dk = ik.get(kk)) && void 0 !== Dk ? Dk : [], fk])
      }
      return [...ik.values()]
    }
  },
  4946: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => bk
    });
    var Dk = ik(1021),
      fk = ik.n(Dk),
      Sk = ik(1066);

    function bk(kk) {
      let {
        options: ek,
        value: ik,
        onChange: Dk,
        ariaLabel: bk,
        className: rk,
        reselectable: Pk = !1,
        keepsFocus: mk = !1,
        padTabs: Mk
      } = kk;
      const Kk = void 0 !== Mk;
      return (0, Sk.jsx)("div", {
        className: fk()("SegmentedToggle", rk),
        role: "group",
        "aria-label": bk,
        "data-pad-tabs": Mk,
        children: ek.map((kk => {
          const ek = kk.value === ik;
          return (0, Sk.jsx)("button", {
            type: "button",
            "aria-pressed": ek,
            "data-pad-tab": Kk || void 0,
            "data-pad-selected": Kk && ek ? "true" : void 0,
            "data-pad-default-focus": Kk && ek || void 0,
            "aria-label": kk.ariaLabel,
            title: kk.ariaLabel,
            className: fk()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: ek
            }),
            onMouseDown: mk ? kk => {
              kk.preventDefault()
            } : void 0,
            onClick: () => {
              ek && !Pk || Dk(kk.value)
            },
            children: kk.label
          }, kk.value)
        }))
      })
    }
  },
  4951: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Sk,
      f: () => bk
    });
    var Dk = ik(60);
    const fk = new WeakMap,
      Sk = kk => {
        var ek;
        const ik = kk.closest("[data-pad-slider]");
        return ik && null !== (ek = fk.get(ik)) && void 0 !== ek ? ek : null
      },
      bk = (kk, ek) => {
        const ik = (0, Dk.useRef)(ek);
        ik.current = ek, (0, Dk.useEffect)((() => {
          if (kk.current) return ((kk, ek) => (fk.set(kk, ek), () => {
            fk.get(kk) === ek && fk.delete(kk)
          }))(kk.current, {
            adjust: kk => {
              ik.current.adjust(kk)
            },
            setFraction: kk => {
              ik.current.setFraction(kk)
            },
            endDrag: () => {
              ik.current.endDrag()
            }
          })
        }), [kk])
      }
  },
  4961: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Dk.g,
      e: () => fk,
      g: () => Dk.l
    });
    var Dk = ik(4965);
    const fk = [!1, !0].flatMap((kk => ["terrain", "liquid", "model"].map((ek => ({
      strict: kk,
      program: ek
    })))))
  },
  4977: (kk, ek, ik) => {
    function Dk(kk, ek) {
      return fk(kk, ek)
    }

    function fk(kk, ek) {
      if (kk === ek) return !0;
      if ("object" !== typeof kk || "object" !== typeof ek || null === kk || null === ek || Array.isArray(kk) !== Array.isArray(ek)) return !1;
      const ik = kk,
        Dk = ek,
        Sk = Object.keys(ik);
      return Sk.length === Object.keys(Dk).length && Sk.every((kk => Object.prototype.hasOwnProperty.call(Dk, kk) && fk(ik[kk], Dk[kk])))
    }
    ik.d(ek, {
      e: () => Dk
    })
  },
  4974: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => bk,
      i: () => rk
    });
    var Dk = ik(2107),
      fk = ik(4977);
    let Sk = null;

    function bk(kk) {
      Sk = {
        pack: kk.metaData.id === Dk.d ? null : kk
      }
    }

    function rk(kk) {
      return !(null === Sk || !(0, fk.e)(Sk.pack, kk)) && (Sk = null, !0)
    }
  },
  4965: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => rk,
      c: () => bk,
      g: () => Dk,
      h: () => Hk,
      i: () => Kk,
      l: () => fk,
      p: () => Sk,
      r: () => mk,
      t: () => Mk,
      u: () => xk
    });
    const Dk = 5;

    function fk(kk) {
      return kk === Dk
    }

    function Sk(kk) {
      return [...kk.features]
    }
    const bk = 262144,
      rk = 256,
      Pk = 256;

    function mk(kk) {
      if ("object" !== typeof kk || null === kk || Array.isArray(kk)) return "The pack has no files.";
      const ek = [];
      for (const [ik, Dk] of Object.entries(kk)) {
        if ("string" !== typeof Dk) return `${ik} isn't text.`;
        ek.push({
          path: ik,
          source: Dk
        })
      }
      return ek.sort(((kk, ek) => Kk(kk.path, ek.path))),
        function(kk) {
          if (0 === kk.length) return "The pack has no .wgsl files.";
          if (kk.length > rk) return `The pack has more than ${rk} .wgsl files.`;
          const ek = new Set;
          for (const {
              path: ik
            }
            of kk) {
            const kk = nk(ik);
            if (null !== kk) return kk;
            if (ek.has(ik)) return `The pack has two files at ${ik}.`;
            ek.add(ik)
          }
          return xk(kk) > bk ? `The pack's .wgsl files are over ${bk/1024} KB in total.` : null
        }(ek) ?? ek
    }

    function Mk(kk) {
      const ek = {};
      for (const ik of kk) ek[ik.path] = ik.source;
      return ek
    }

    function Kk(kk, ek) {
      return kk < ek ? -1 : kk > ek ? 1 : 0
    }

    function xk(kk) {
      const ek = new TextEncoder;
      let ik = 0;
      for (const {
          source: Dk
        }
        of kk) ik += ek.encode(Dk).byteLength;
      return ik
    }

    function nk(kk) {
      if (!kk.toLowerCase().endsWith(".wgsl")) return `${kk} isn't a .wgsl file.`;
      if (kk.length > Pk) return `A file path is over ${Pk} characters.`;
      if (kk.includes("\\") || /[\u0000-\u001f]/.test(kk)) return `${kk} isn't a valid file path.`;
      return kk.split("/").some((kk => "" === kk || "." === kk || ".." === kk)) ? `${kk} isn't a valid file path.` : null
    }
    const Uk = /^(.*)\[rot\[([1-4])$/;

    function Hk(kk, ek) {
      let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const Dk = new Map;
      ek.forEach(((kk, ek) => {
        let {
          numAnimStates: ik,
          animStartIdx: fk
        } = kk;
        for (let Sk = 1; Sk < ik; Sk++) Dk.set(fk + Sk - 1, ek)
      }));
      const fk = Object.entries(kk),
        Sk = new Map;
      for (const [Hk, wk] of fk) {
        const kk = Uk.exec(Hk);
        "1" === kk?.[2] && Sk.set(kk[1], wk + 1)
      }
      const bk = kk => {
          const ek = Uk.exec(kk);
          return ek && Sk.has(ek[1]) ? {
            root: ek[1],
            rotation: Number(ek[2]) - 1
          } : null
        },
        rk = new Set(fk.map((kk => {
          let [ek] = kk;
          return bk(ek)?.root ?? ek
        }))),
        Pk = (kk, ik) => {
          const Dk = kk.replace(/_?0$/, "");
          return (ek[ik]?.numAnimStates ?? 0) > 1 && !rk.has(Dk) ? Dk : kk
        },
        mk = new Map;
      for (const [Uk, Hk] of fk) mk.set(Hk, Pk(bk(Uk)?.root ?? Uk, Hk));
      const Mk = fk.reduce(((kk, ek) => {
          let [, ik] = ek;
          return Math.max(kk, ik + 1)
        }), 0),
        Kk = Array.from({
          length: Mk
        }, ((kk, ek) => ({
          id: ek + 1,
          rotation: 0
        }))),
        xk = new Map,
        nk = new Map;
      for (const [Uk, Hk] of fk) {
        const kk = bk(Uk),
          ek = Dk.get(Hk);
        if (void 0 !== ek) {
          const ik = mk.get(ek);
          nk.set(Uk, {
            name: Uk,
            texture: ik,
            kind: "frame"
          }), kk && !nk.has(kk.root) && nk.set(kk.root, {
            name: kk.root,
            texture: ik,
            kind: "frame"
          });
          continue
        }
        const ik = mk.get(Hk),
          fk = kk?.root ?? Uk;
        if (ik !== fk && nk.set(fk, {
            name: fk,
            texture: ik,
            kind: "frame"
          }), kk) {
          const ek = Sk.get(kk.root);
          Kk[Hk] = {
            id: ek,
            rotation: kk.rotation
          }, xk.set(ik, ek), nk.set(Uk, {
            name: Uk,
            texture: ik,
            kind: "rotation"
          })
        } else xk.set(ik, Hk + 1)
      }
      for (const Uk of xk.keys()) nk.delete(Uk);
      for (const [Uk, Hk] of ik) {
        const kk = xk.get(Hk);
        void 0 === kk || xk.has(Uk) || (xk.set(Uk, kk), nk.delete(Uk))
      }
      return {
        named: [...xk].sort(((kk, ek) => {
          let [ik] = kk, [Dk] = ek;
          return ik < Dk ? -1 : ik > Dk ? 1 : 0
        })).map((kk => {
          let [ek, ik] = kk;
          return {
            name: ek,
            id: ik
          }
        })),
        aliases: [...nk.values()],
        layers: Kk
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);