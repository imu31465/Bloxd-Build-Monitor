export const id = 105;
export const ids = [105];
export const modules = {
  5025: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Pp
    });
    var Op = cp(1049),
      op = cp.n(Op),
      Ip = cp(1060),
      Sp = cp(1361),
      xp = cp(3607),
      Lp = cp(131),
      Yp = cp(3641),
      Dp = cp(3628),
      Ap = cp(1112);

    function Pp(pp) {
      let {
        game: ip
      } = pp;
      const cp = (0, Lp.is99NightsCrazyGamesBundle)() ? "large" : "small",
        Op = (0, Yp.f)(ip, cp),
        Pp = (0, xp.d)(Op),
        Wp = void 0 !== Pp.blurhash;
      return (0, Ap.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [Pp.isLoading && !Wp && (0, Ap.jsx)(Sp.c, {
          loaderType: "Secondary"
        }), !Pp.failed && (null !== Pp.src || Wp) && (0, Ap.jsx)("div", {
          className: op()("SchematicImage", Dp.g, {
            SchematicImageFadeIn: Pp.fadeIn && !Wp
          }),
          style: (0, Dp.f)(Pp),
          children: (0, Ap.jsx)(Dp.c, {
            image: Pp
          })
        }), Pp.failed && (0, Ap.jsx)("div", {
          className: "SchematicImageError",
          children: (0, Ap.jsx)(Ip.d, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  5152: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => wp
    });
    var Op = cp(62),
      op = cp(1049),
      Ip = cp.n(op),
      Sp = cp(5076),
      xp = cp(1361),
      Lp = cp(1201),
      Yp = cp(3250),
      Dp = cp(3412),
      Ap = cp(1060),
      Pp = cp(3259),
      Wp = cp(5156),
      yp = cp(5173),
      Up = cp(1112);

    function wp(pp) {
      let {
        folderName: ip,
        onTexturePackUpdated: op,
        disabled: wp = !1,
        maxFileSizeMb: vp,
        packOwner: tp
      } = pp;
      const {
        t: Hp
      } = (0, Lp.H)(), [dp, ep] = (0, Op.useState)(!1), [jp, kp] = (0, Op.useState)(null), [mp, Rp] = (0, Op.useState)(null), qp = (0, Op.useRef)(null);
      async function Mp(pp) {
        ep(!0);
        try {
          const ip = await (0, Yp.o)(pp);
          if ("customGame" === tp && (0, Dp.m)(ip)) return void kp(Hp(Dp.e));
          if (void 0 !== vp) {
            const pp = JSON.stringify(ip).length / 1048576;
            if (pp > vp) return void kp(Hp("customTexturePack:packTooBig", {
              size: pp.toFixed(1),
              max: vp
            }))
          }
          kp(null), Rp(null), op(ip), qp.current = ip,
            function(pp, ip) {
              const Op = pp.modelOverrides;
              Op && Promise.all([cp.e(206), cp.e(205)]).then((() => cp(34484))).then((cp => {
                let {
                  packDisplayName: op,
                  refusedPackModels: Ip,
                  packModelSummary: Sp
                } = cp;
                const xp = op(pp.metaData);
                ip(Sp(xp, Ip(xp, Op, !1)))
              })).catch((pp => {
                console.error("Checking the texture pack's models failed:", pp)
              }))
            }(ip, (pp => {
              qp.current === ip && Rp(pp)
            }))
        } catch (ip) {
          if (ip instanceof Pp.b) {
            const pp = "customTexturePack:invalidPack" !== ip.translationKey || (0, yp.e)() ? ip.translationKey : "customTexturePack:invalidPackZip";
            kp((0, Wp.f)(Hp, pp, ip.params))
          } else console.error("Couldn't read the texture pack", ip), kp(Hp("customTexturePack:errorTitle"))
        } finally {
          ep(!1)
        }
      }
      const {
        getRootProps: Cp,
        getInputProps: Ep,
        isDragActive: Xp,
        open: lp
      } = (0, Sp.c)({
        onDrop: Mp,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: wp
      });
      return (0, Up.jsxs)("div", {
        className: "CustomTexturePackContainer",
        children: [(0, Up.jsxs)("div", {
          className: "CustomTextureWarning",
          children: [Hp("settingsMenu:customTextureWarning"), ".", (0, Up.jsx)("br", {}), Hp("settingsMenu:viewDocumentation"), ":", " ", (0, Up.jsx)("a", {
            href: "https://github.com/Bloxdy/texturePacks",
            target: "_blank",
            rel: "noreferrer",
            children: "github.com/Bloxdy/texturePacks"
          })]
        }), jp && (0, Up.jsxs)("div", {
          className: "CustomTextureError",
          children: [Hp("general:error"), ": ", jp]
        }), mp && (0, Up.jsx)("div", {
          className: "CustomTextureError",
          children: mp
        }), (0, Up.jsxs)("div", {
          ...Cp({
            className: Ip()("CustomTextureFolderUpload", {
              ActiveDrag: Xp,
              Disabled: wp
            })
          }),
          children: [(0, Up.jsx)("input", {
            ...Ep({
              webkitdirectory: "true"
            })
          }), dp && (0, Up.jsx)("div", {
            className: "CustomTextureFolderUploadLoading",
            children: (0, Up.jsx)(xp.c, {})
          }), !dp && !Xp && ip && (0, Up.jsxs)(Up.Fragment, {
            children: [(0, Up.jsx)("div", {
              className: "CustomTextureFolderUploadIcon Active",
              children: (0, Up.jsx)(Ap.d, {
                name: "folder-image"
              })
            }), (0, Up.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions Active",
              children: ip
            })]
          }), !dp && (Xp || !ip) && (0, Up.jsxs)(Up.Fragment, {
            children: [(0, Up.jsx)("div", {
              className: "CustomTextureFolderUploadIcon",
              children: (0, Up.jsx)(Ap.d, {
                name: "up-from-bracket"
              })
            }), (0, Up.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions",
              children: Hp((0, yp.e)() ? "customTexturePack:dropHere" : "customTexturePack:chooseZipInstructions")
            })]
          }), !dp && (0, Up.jsx)(yp.d, {
            disabled: wp,
            openFolderPicker: lp,
            onFiles: pp => {
              Mp(pp)
            }
          })]
        })]
      })
    }
  },
  5173: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Dp,
      e: () => Yp
    });
    var Op = cp(62),
      op = cp(1480),
      Ip = cp(1201),
      Sp = cp(104),
      xp = cp(3235),
      Lp = cp(1112);

    function Yp() {
      return !(0, Sp.isMobile)()
    }

    function Dp(pp) {
      let {
        disabled: ip,
        openFolderPicker: cp,
        onFiles: Sp
      } = pp;
      const {
        t: Dp
      } = (0, Ip.H)(), Ap = (0, Op.useRef)(null);
      return (0, Lp.jsxs)("div", {
        className: "PackPickButtons",
        "data-pad-mouse-only": !0,
        children: [(0, Lp.jsx)("input", {
          ref: Ap,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(pp) {
            const ip = Array.from(pp.target.files);
            pp.target.value = "", Sp(ip)
          }
        }), Yp() && (0, Lp.jsx)(op.f, {
          disabled: ip,
          onClick: cp,
          children: Dp("general:chooseFolder")
        }), (0, Lp.jsx)(op.f, {
          disabled: ip,
          onClick: () => {
            (0, xp.h)(Ap.current)
          },
          children: Dp("general:chooseZip")
        })]
      })
    }
  },
  5113: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => yp,
      f: () => Hp,
      i: () => Up,
      l: () => tp
    });
    var Op = cp(62),
      op = cp(5122),
      Ip = cp(4462),
      Sp = cp(1387),
      xp = cp(5146),
      Lp = cp(1049),
      Yp = cp.n(Lp),
      Dp = cp(1372),
      Ap = cp(1765),
      Pp = cp(5149),
      Wp = cp(1112);

    function yp(pp) {
      let {
        label: ip,
        onClick: cp,
        checked: Op,
        circleInfoText: op,
        className: xp,
        disabled: Lp,
        note: Dp
      } = pp;
      return (0, Wp.jsxs)("div", {
        "aria-disabled": Lp || void 0,
        "data-pad-focusable": !0,
        className: Yp()("SettingBox CheckboxContainer", {
          [xp]: xp,
          SettingBoxDisabled: Lp
        }),
        onClick: () => {
          Lp || cp(!Op)
        },
        children: [(0, Wp.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, Wp.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, Wp.jsx)(Ip.b, {
              className: "SettingsCheckbox",
              checked: Op,
              disabled: Lp,
              onChange: () => {}
            })
          }), (0, Wp.jsxs)("div", {
            className: "CheckboxText",
            children: [ip, op && (0, Wp.jsx)("span", {
              onClick: pp => pp.stopPropagation(),
              children: (0, Wp.jsx)(Sp.d, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: op
              })
            })]
          })]
        }), Dp && (0, Wp.jsx)("div", {
          className: "SettingNote",
          children: Dp
        })]
      })
    }

    function Up(pp) {
      let {
        name: ip,
        onChange: cp,
        min: op,
        max: Ip,
        step: xp,
        initValue: Lp,
        circleInfoText: Dp,
        format: Ap,
        className: Pp,
        padStep: yp,
        disabled: Up = !1,
        selectableMax: wp,
        cappedNote: tp,
        onChangeComplete: Hp
      } = pp;
      const [dp, ep] = (0, Op.useState)(Lp), jp = (0, Op.useRef)(Lp);
      (0, Op.useEffect)((() => {
        jp.current = Lp, ep(Lp)
      }), [Lp]);
      const kp = void 0 !== wp && wp < Ip,
        mp = kp ? {
          "--slider-selectable": (wp - op) / (Ip - op)
        } : void 0;
      return (0, Wp.jsxs)("div", {
        className: Yp()("SettingBox SettingsSliderDiv", {
          [Pp]: Pp,
          SettingBoxDisabled: Up,
          SliderCapped: kp
        }),
        style: mp,
        children: [(0, Wp.jsxs)("div", {
          className: "SliderText",
          children: [`${ip}: ${Ap?Ap(dp):dp}`, Dp && (0, Wp.jsx)(Sp.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: Dp
          })]
        }), (0, Wp.jsx)("div", {
          className: "SliderDiv",
          children: (0, Wp.jsx)(vp, {
            value: dp,
            min: op,
            max: Ip,
            step: xp,
            onChange: pp => {
              if (kp && pp >= wp && dp === wp) return;
              const ip = kp ? Math.min(pp, wp) : pp;
              jp.current = ip, ep(ip), cp(ip)
            },
            onChangeComplete: Hp && (() => {
              Hp(jp.current)
            }),
            format: Ap,
            padStep: yp,
            disabled: Up
          })
        }), kp && tp && (0, Wp.jsx)("div", {
          className: "SettingNote",
          children: tp
        })]
      })
    }
    const wp = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function vp(pp) {
      var ip;
      let {
        value: cp,
        min: Ip,
        max: Sp,
        step: xp,
        onChange: Lp,
        orientation: Yp,
        reverse: Dp,
        setIsChanging: Ap,
        tooltip: yp,
        labels: Up,
        handleLabel: vp,
        format: tp,
        onChangeStart: Hp,
        onChangeComplete: dp,
        padStep: ep,
        disabled: jp = !1
      } = pp;
      const kp = (0, Op.useRef)(null),
        mp = (0, Op.useRef)(null);
      (0, Op.useLayoutEffect)((() => {
        var pp, ip, cp;
        const Op = null !== (pp = null === (ip = kp.current) || void 0 === ip ? void 0 : ip.querySelector(".rangeslider")) && void 0 !== pp ? pp : null;
        null === Op || void 0 === Op || Op.setAttribute("data-pad-slider", ""), null === Op || void 0 === Op || Op.setAttribute("data-pad-focusable", ""), null === Op || void 0 === Op || null === (cp = Op.querySelector(".rangeslider__handle")) || void 0 === cp || cp.setAttribute("data-pad-slider-handle", ""), mp.current = Op
      }), []), (0, Op.useLayoutEffect)((() => {
        var pp, ip;
        jp ? null === (pp = mp.current) || void 0 === pp || pp.setAttribute("aria-disabled", "true") : null === (ip = mp.current) || void 0 === ip || ip.removeAttribute("aria-disabled")
      }), [jp]);
      const Rp = (null !== (ip = String(xp).split(".")[1]) && void 0 !== ip ? ip : "").length,
        qp = pp => {
          const ip = Number((Math.round((pp - Ip) / xp) * xp + Ip).toFixed(Rp));
          return Math.min(Sp, Math.max(Ip, ip))
        },
        Mp = (0, Op.useRef)(dp);
      Mp.current = dp, (0, Op.useEffect)((() => {
        const pp = kp.current;
        if (!pp) return;
        const ip = pp => {
          var ip;
          wp.has(pp.key) && (null === (ip = Mp.current) || void 0 === ip || ip.call(Mp))
        };
        return pp.addEventListener("keyup", ip), () => {
          pp.removeEventListener("keyup", ip)
        }
      }), []);
      const Cp = (0, Op.useRef)(!1);
      return (0, Pp.h)(mp, {
        adjust: pp => {
          if (jp) return;
          const ip = null !== ep && void 0 !== ep ? ep : Math.max(xp, Math.round((Sp - Ip) / 20 / xp) * xp),
            Op = qp(cp + pp * ip * (Dp ? -1 : 1));
          Op !== cp && (null === Hp || void 0 === Hp || Hp(), Lp(Op), null === dp || void 0 === dp || dp())
        },
        setFraction: pp => {
          if (jp) return;
          const ip = qp(Ip + (Dp ? 1 - pp : pp) * (Sp - Ip));
          ip !== cp && (Cp.current || (Cp.current = !0, null === Hp || void 0 === Hp || Hp()), Lp(ip))
        },
        endDrag: () => {
          Cp.current && (Cp.current = !1, null === dp || void 0 === dp || dp())
        }
      }), (0, Wp.jsx)("div", {
        ref: kp,
        style: {
          display: "contents"
        },
        children: (0, Wp.jsx)(op.b, {
          value: cp,
          min: Ip,
          max: Sp,
          step: xp,
          onChange: Lp,
          orientation: Yp,
          reverse: Dp,
          tooltip: yp,
          labels: Up,
          handleLabel: vp,
          format: tp,
          onChangeStart: () => {
            null === Hp || void 0 === Hp || Hp(), null === Ap || void 0 === Ap || Ap(!0)
          },
          onChangeComplete: () => {
            null === Ap || void 0 === Ap || Ap(!1), null === dp || void 0 === dp || dp()
          }
        })
      })
    }
    async function tp() {
      const pp = Dp.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await pp.getResult() && (0, Ap.reloadBloxd)()
    }

    function Hp(pp) {
      let {
        label: ip,
        options: cp,
        value: Op,
        onChange: op,
        circleInfoText: Ip
      } = pp;
      return (0, Wp.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, Wp.jsxs)("div", {
          className: "SliderText",
          children: [ip, Ip && (0, Wp.jsx)(Sp.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: Ip
          })]
        }), (0, Wp.jsx)(xp.b, {
          ariaLabel: ip,
          options: cp,
          value: Op,
          onChange: op
        })]
      })
    }
  },
  5107: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => wp,
      f: () => vp
    });
    var Op = cp(3250),
      op = cp(2187),
      Ip = cp(62),
      Sp = cp(1049),
      xp = cp.n(Sp),
      Lp = cp(1361),
      Yp = cp(3246),
      Dp = cp(1372),
      Ap = cp(5113),
      Pp = cp(5152),
      Wp = cp(657),
      yp = cp(5178),
      Up = cp(1112);

    function wp(pp) {
      var ip;
      let {
        setApplySettingsCallback: cp
      } = pp;
      const [, Sp] = (0, Ip.useReducer)((pp => pp + 1), 0), xp = (0, Ip.useRef)(!1), Lp = (0, Ip.useRef)(null);

      function wp(pp, ip) {
        Yp.d.setFromJson(pp, "player");
        const Op = Yp.d.saveTexturePack();
        if (Wp.z) {
          const pp = Yp.d.toJson();
          Op.then((ip => {
            ip && (0, yp.c)(pp)
          }))
        } else xp.current ||= ip, Lp.current !== Yp.d.getId() || Yp.d.getId() === op.q.CUSTOM && xp.current ? cp((() => Ap.l)) : cp(null);
        Sp()
      }
      async function tp(pp) {
        if (Yp.d.getId() !== pp.metaData.id) {
          if (Yp.d.getId() === op.q.CUSTOM && Yp.d.getFromFolderName()) {
            const pp = Dp.NotificationProvider.showPromptPopup({
              title: "settingsMenu:loseChangesTitle",
              subtitle: "settingsMenu:loseChangesSubtitle",
              confirmText: "general:continue",
              destructive: !0,
              confirmTooltip: "",
              cancelText: "general:cancel",
              cancelTooltip: ""
            });
            if (!0 !== await pp.getResult()) return
          }
          wp(pp, !1)
        }
      }(0, Ip.useEffect)((() => {
        Lp.current = Yp.d.getId()
      }), []);
      const Hp = Op.b,
        dp = [Hp, ...Object.values(op.q).filter((pp => pp !== Hp))];
      return (0, Up.jsx)(Up.Fragment, {
        children: (0, Up.jsxs)("div", {
          className: "TexturePackCategory SettingsMenuRightInner",
          children: [(0, Up.jsx)("div", {
            className: "TexturePackList",
            children: dp.map((pp => (0, Up.jsx)(vp, {
              id: pp,
              isSelected: pp === Yp.d.getId(),
              setSelected: tp
            }, pp)))
          }), Yp.d.getId() === op.q.CUSTOM && (0, Up.jsx)(Pp.b, {
            folderName: null !== (ip = Yp.d.getFromFolderName()) && void 0 !== ip ? ip : null,
            onTexturePackUpdated: function(pp) {
              wp(pp, !0)
            },
            packOwner: "player"
          })]
        })
      })
    }

    function vp(pp) {
      let {
        id: ip,
        isSelected: cp,
        setSelected: Sp,
        disabled: Yp = !1
      } = pp;
      const [Dp, Ap] = (0, Ip.useState)(!0), [Pp, Wp] = (0, Ip.useState)(""), [yp, wp] = (0, Ip.useState)(""), [vp, tp] = (0, Ip.useState)(""), Hp = (0, Ip.useRef)({});
      return (0, Ip.useEffect)((() => {
        (0, Op.n)(ip).then((pp => {
          var ip;
          pp && (Hp.current = pp, Ap(!1), Wp(Hp.current.metaData.name), wp(Hp.current.metaData.author), tp(null !== (ip = Hp.current.metaData.previewImage) && void 0 !== ip ? ip : ""))
        })).catch((pp => {
          console.warn(`Failed to fetch texture pack ${ip}`, pp)
        }))
      }), [ip]), (0, Up.jsxs)("div", {
        "data-pad-focusable": !0,
        "aria-disabled": Yp || void 0,
        className: xp()("TexturePack", {
          Selected: cp,
          Custom: ip === op.q.CUSTOM,
          Disabled: Yp
        }),
        onClick: () => {
          Dp || Yp || Sp(Hp.current)
        },
        children: [(0, Up.jsx)("div", {
          className: "TexturePackBg",
          style: {
            backgroundImage: vp ? `url(${vp})` : void 0
          }
        }), Dp && (0, Up.jsx)("div", {
          className: "TexturePackName",
          children: (0, Up.jsx)(Lp.c, {})
        }), !Dp && Pp && (0, Up.jsx)("div", {
          className: "TexturePackName",
          children: Pp
        }), !Dp && yp && (0, Up.jsx)("div", {
          className: "TexturePackAuthor",
          children: yp
        })]
      })
    }
  },
  5156: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => xp,
      e: () => Sp,
      f: () => Ip
    });
    var Op = cp(5159);
    const op = [pp => pp.strict ? "strict" : "nonStrict", pp => pp.program];

    function Ip(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const Op = {};
      for (const op in cp) Op[op] = `\0${op}\0`;
      return pp(ip, Op).replace(/\0(\w+)\0/g, ((pp, ip) => cp[ip]))
    }

    function Sp(pp) {
      return null === pp.file ? null : pp.line > 0 ? `${pp.file}:${pp.line}` : pp.file
    }

    function xp(pp) {
      const ip = new Map(pp.map((pp => [Lp(pp).join("."), pp])));
      if (0 === ip.size) return [];
      const cp = Dp([...ip.values()]);
      return 0 === cp[0].length ? [] : cp
    }

    function Lp(pp) {
      return op.map((ip => ip(pp)))
    }
    const Yp = op.map((pp => new Set(Op.g.map(pp)).size));

    function Dp(pp) {
      const ip = op.map((ip => new Set(pp.map(ip)))),
        cp = ip.reduce(((pp, ip) => pp * ip.size), 1),
        Op = ip.every(((pp, ip) => 1 === pp.size || pp.size === Yp[ip]));
      if (cp === pp.length && Op) return [op.filter(((pp, cp) => 1 === ip[cp].size)).map((ip => ip(pp[0])))];
      let Ip = null;
      for (let Sp = 0; Sp < op.length; Sp++) {
        if (1 === ip[Sp].size) continue;
        const cp = Ap(pp, op[Sp]).flatMap(Dp);
        (null === Ip || cp.length < Ip.length) && (Ip = cp)
      }
      return Ip
    }

    function Ap(pp, ip) {
      const cp = new Map;
      for (const op of pp) {
        var Op;
        const pp = ip(op);
        cp.set(pp, [...null !== (Op = cp.get(pp)) && void 0 !== Op ? Op : [], op])
      }
      return [...cp.values()]
    }
  },
  5146: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Sp
    });
    var Op = cp(1049),
      op = cp.n(Op),
      Ip = cp(1112);

    function Sp(pp) {
      let {
        options: ip,
        value: cp,
        onChange: Op,
        ariaLabel: Sp,
        className: xp,
        reselectable: Lp = !1,
        keepsFocus: Yp = !1,
        padTabs: Dp
      } = pp;
      const Ap = void 0 !== Dp;
      return (0, Ip.jsx)("div", {
        className: op()("SegmentedToggle", xp),
        role: "group",
        "aria-label": Sp,
        "data-pad-tabs": Dp,
        children: ip.map((pp => {
          const ip = pp.value === cp;
          return (0, Ip.jsx)("button", {
            type: "button",
            "aria-pressed": ip,
            "data-pad-tab": Ap || void 0,
            "data-pad-selected": Ap && ip ? "true" : void 0,
            "data-pad-default-focus": Ap && ip || void 0,
            "aria-label": pp.ariaLabel,
            title: pp.ariaLabel,
            className: op()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: ip
            }),
            onMouseDown: Yp ? pp => {
              pp.preventDefault()
            } : void 0,
            onClick: () => {
              ip && !Lp || Op(pp.value)
            },
            children: pp.label
          }, pp.value)
        }))
      })
    }
  },
  5149: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Ip,
      h: () => Sp
    });
    var Op = cp(62);
    const op = new WeakMap,
      Ip = pp => {
        var ip;
        const cp = pp.closest("[data-pad-slider]");
        return cp && null !== (ip = op.get(cp)) && void 0 !== ip ? ip : null
      },
      Sp = (pp, ip) => {
        const cp = (0, Op.useRef)(ip);
        cp.current = ip, (0, Op.useEffect)((() => {
          if (pp.current) return ((pp, ip) => (op.set(pp, ip), () => {
            op.get(pp) === ip && op.delete(pp)
          }))(pp.current, {
            adjust: pp => {
              cp.current.adjust(pp)
            },
            setFraction: pp => {
              cp.current.setFraction(pp)
            },
            endDrag: () => {
              cp.current.endDrag()
            }
          })
        }), [pp])
      }
  },
  5159: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Op.f,
      g: () => op,
      k: () => Op.o
    });
    var Op = cp(5167);
    const op = [!1, !0].flatMap((pp => ["terrain", "liquid", "model"].map((ip => ({
      strict: pp,
      program: ip
    })))))
  },
  5183: (pp, ip, cp) => {
    function Op(pp, ip) {
      return op(pp, ip)
    }

    function op(pp, ip) {
      if (pp === ip) return !0;
      if ("object" !== typeof pp || "object" !== typeof ip || null === pp || null === ip || Array.isArray(pp) !== Array.isArray(ip)) return !1;
      const cp = pp,
        Op = ip,
        Ip = Object.keys(cp);
      return Ip.length === Object.keys(Op).length && Ip.every((pp => Object.prototype.hasOwnProperty.call(Op, pp) && op(cp[pp], Op[pp])))
    }
    cp.d(ip, {
      b: () => Op
    })
  },
  5178: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Sp,
      d: () => xp
    });
    var Op = cp(2187),
      op = cp(5183);
    let Ip = null;

    function Sp(pp) {
      Ip = {
        pack: pp.metaData.id === Op.b ? null : pp
      }
    }

    function xp(pp) {
      return !(null === Ip || !(0, op.b)(Ip.pack, pp)) && (Ip = null, !0)
    }
  },
  5167: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => xp,
      e: () => Sp,
      f: () => Op,
      j: () => Up,
      m: () => Ap,
      o: () => op,
      p: () => Ip,
      s: () => Yp,
      v: () => Dp,
      z: () => Pp
    });
    const Op = 5;

    function op(pp) {
      return pp === Op
    }

    function Ip(pp) {
      return [...pp.features]
    }
    const Sp = 262144,
      xp = 256,
      Lp = 256;

    function Yp(pp) {
      if ("object" !== typeof pp || null === pp || Array.isArray(pp)) return "The pack has no files.";
      const ip = [];
      for (const [cp, Op] of Object.entries(pp)) {
        if ("string" !== typeof Op) return `${cp} isn't text.`;
        ip.push({
          path: cp,
          source: Op
        })
      }
      return ip.sort(((pp, ip) => Ap(pp.path, ip.path))),
        function(pp) {
          if (0 === pp.length) return "The pack has no .wgsl files.";
          if (pp.length > xp) return `The pack has more than ${xp} .wgsl files.`;
          const ip = new Set;
          for (const {
              path: cp
            }
            of pp) {
            const pp = Wp(cp);
            if (null !== pp) return pp;
            if (ip.has(cp)) return `The pack has two files at ${cp}.`;
            ip.add(cp)
          }
          return Pp(pp) > Sp ? `The pack's .wgsl files are over ${Sp/1024} KB in total.` : null
        }(ip) ?? ip
    }

    function Dp(pp) {
      const ip = {};
      for (const cp of pp) ip[cp.path] = cp.source;
      return ip
    }

    function Ap(pp, ip) {
      return pp < ip ? -1 : pp > ip ? 1 : 0
    }

    function Pp(pp) {
      const ip = new TextEncoder;
      let cp = 0;
      for (const {
          source: Op
        }
        of pp) cp += ip.encode(Op).byteLength;
      return cp
    }

    function Wp(pp) {
      if (!pp.toLowerCase().endsWith(".wgsl")) return `${pp} isn't a .wgsl file.`;
      if (pp.length > Lp) return `A file path is over ${Lp} characters.`;
      if (pp.includes("\\") || /[\u0000-\u001f]/.test(pp)) return `${pp} isn't a valid file path.`;
      return pp.split("/").some((pp => "" === pp || "." === pp || ".." === pp)) ? `${pp} isn't a valid file path.` : null
    }
    const yp = /^(.*)\[rot\[([1-4])$/;

    function Up(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const Op = new Map;
      ip.forEach(((pp, ip) => {
        let {
          numAnimStates: cp,
          animStartIdx: op
        } = pp;
        for (let Ip = 1; Ip < cp; Ip++) Op.set(op + Ip - 1, ip)
      }));
      const op = Object.entries(pp),
        Ip = new Map;
      for (const [Up, wp] of op) {
        const pp = yp.exec(Up);
        "1" === pp?.[2] && Ip.set(pp[1], wp + 1)
      }
      const Sp = pp => {
          const ip = yp.exec(pp);
          return ip && Ip.has(ip[1]) ? {
            root: ip[1],
            rotation: Number(ip[2]) - 1
          } : null
        },
        xp = new Set(op.map((pp => {
          let [ip] = pp;
          return Sp(ip)?.root ?? ip
        }))),
        Lp = (pp, cp) => {
          const Op = pp.replace(/_?0$/, "");
          return (ip[cp]?.numAnimStates ?? 0) > 1 && !xp.has(Op) ? Op : pp
        },
        Yp = new Map;
      for (const [yp, Up] of op) Yp.set(Up, Lp(Sp(yp)?.root ?? yp, Up));
      const Dp = op.reduce(((pp, ip) => {
          let [, cp] = ip;
          return Math.max(pp, cp + 1)
        }), 0),
        Ap = Array.from({
          length: Dp
        }, ((pp, ip) => ({
          id: ip + 1,
          rotation: 0
        }))),
        Pp = new Map,
        Wp = new Map;
      for (const [yp, Up] of op) {
        const pp = Sp(yp),
          ip = Op.get(Up);
        if (void 0 !== ip) {
          const cp = Yp.get(ip);
          Wp.set(yp, {
            name: yp,
            texture: cp,
            kind: "frame"
          }), pp && !Wp.has(pp.root) && Wp.set(pp.root, {
            name: pp.root,
            texture: cp,
            kind: "frame"
          });
          continue
        }
        const cp = Yp.get(Up),
          op = pp?.root ?? yp;
        if (cp !== op && Wp.set(op, {
            name: op,
            texture: cp,
            kind: "frame"
          }), pp) {
          const ip = Ip.get(pp.root);
          Ap[Up] = {
            id: ip,
            rotation: pp.rotation
          }, Pp.set(cp, ip), Wp.set(yp, {
            name: yp,
            texture: cp,
            kind: "rotation"
          })
        } else Pp.set(cp, Up + 1)
      }
      for (const yp of Pp.keys()) Wp.delete(yp);
      for (const [yp, Up] of cp) {
        const pp = Pp.get(Up);
        void 0 === pp || Pp.has(yp) || (Pp.set(yp, pp), Wp.delete(yp))
      }
      return {
        named: [...Pp].sort(((pp, ip) => {
          let [cp] = pp, [Op] = ip;
          return cp < Op ? -1 : cp > Op ? 1 : 0
        })).map((pp => {
          let [ip, cp] = pp;
          return {
            name: ip,
            id: cp
          }
        })),
        aliases: [...Wp.values()],
        layers: Ap
      }
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);