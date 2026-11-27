export const id = 118;
export const ids = [118];
export const modules = {
  5731: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => mr
    });
    var Zr = Qr(1155),
      Wr = Qr.n(Zr),
      ar = Qr(1448),
      jr = Qr(1444),
      Ir = Qr(4759),
      fr = Qr(139),
      Er = Qr(4791),
      pr = Qr(4777),
      xr = Qr(1338);

    function mr(rr) {
      let {
        game: Sr
      } = rr;
      const Qr = (0, fr.is99NightsCrazyGamesBundle)() ? "large" : "small",
        Zr = (0, Er.g)(Sr, Qr),
        mr = (0, Ir.f)(Zr),
        Nr = void 0 !== mr.blurhash;
      return (0, xr.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [mr.isLoading && !Nr && (0, xr.jsx)(jr.c, {
          loaderType: "Secondary"
        }), !mr.failed && (null !== mr.src || Nr) && (0, xr.jsx)("div", {
          className: Wr()("SchematicImage", pr.j, {
            SchematicImageFadeIn: mr.fadeIn && !Nr
          }),
          style: (0, pr.g)(mr),
          children: (0, xr.jsx)(pr.c, {
            image: mr
          })
        }), mr.failed && (0, xr.jsx)("div", {
          className: "SchematicImageError",
          children: (0, xr.jsx)(ar.c, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  5991: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => hr
    });
    var Zr = Qr(72),
      Wr = Qr(1155),
      ar = Qr.n(Wr),
      jr = Qr(5919),
      Ir = Qr(1444),
      fr = Qr(1251),
      Er = Qr(4362),
      pr = Qr(4501),
      xr = Qr(1448),
      mr = Qr(4371),
      Nr = Qr(5998),
      Ur = Qr(6010),
      tr = Qr(1338);

    function hr(rr) {
      let {
        folderName: Sr,
        onTexturePackUpdated: Wr,
        disabled: hr = !1,
        maxFileSizeMb: zr,
        packOwner: Yr
      } = rr;
      const {
        t: nr
      } = (0, fr.E)(), [er, Kr] = (0, Zr.useState)(!1), [yr, Br] = (0, Zr.useState)(null), [Tr, vr] = (0, Zr.useState)(null), Or = (0, Zr.useRef)(null);
      async function Lr(rr) {
        Kr(!0);
        try {
          const Sr = await (0, Er.m)(rr);
          if ("customGame" === Yr && (0, pr.m)(Sr)) return void Br(nr(pr.d));
          if (void 0 !== zr) {
            const rr = JSON.stringify(Sr).length / 1048576;
            if (rr > zr) return void Br(nr("customTexturePack:packTooBig", {
              size: rr.toFixed(1),
              max: zr
            }))
          }
          Br(null), vr(null), Wr(Sr), Or.current = Sr,
            function(rr, Sr) {
              const Zr = rr.modelOverrides;
              Zr && Promise.all([Qr.e(234), Qr.e(233)]).then((() => Qr(35568))).then((Qr => {
                let {
                  packDisplayName: Wr,
                  refusedPackModels: ar,
                  packModelSummary: jr
                } = Qr;
                const Ir = Wr(rr.metaData);
                Sr(jr(Ir, ar(Ir, Zr, !1)))
              })).catch((rr => {
                console.error("Checking the texture pack's models failed:", rr)
              }))
            }(Sr, (rr => {
              Or.current === Sr && vr(rr)
            }))
        } catch (Sr) {
          if (Sr instanceof mr.b) {
            const rr = "customTexturePack:invalidPack" !== Sr.translationKey || (0, Ur.d)() ? Sr.translationKey : "customTexturePack:invalidPackZip";
            Br((0, Nr.g)(nr, rr, Sr.params))
          } else console.error("Couldn't read the texture pack", Sr), Br(nr("customTexturePack:errorTitle"))
        } finally {
          Kr(!1)
        }
      }
      const {
        getRootProps: lr,
        getInputProps: Xr,
        isDragActive: Pr,
        open: Hr
      } = (0, jr.b)({
        onDrop: Lr,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: hr
      });
      return (0, tr.jsxs)("div", {
        className: "CustomTexturePackContainer",
        children: [(0, tr.jsxs)("div", {
          className: "CustomTextureWarning",
          children: [nr("settingsMenu:customTextureWarning"), ".", (0, tr.jsx)("br", {}), nr("settingsMenu:viewDocumentation"), ":", " ", (0, tr.jsx)("a", {
            href: "https://github.com/Bloxdy/texturePacks",
            target: "_blank",
            rel: "noreferrer",
            children: "github.com/Bloxdy/texturePacks"
          })]
        }), yr && (0, tr.jsxs)("div", {
          className: "CustomTextureError",
          children: [nr("general:error"), ": ", yr]
        }), Tr && (0, tr.jsx)("div", {
          className: "CustomTextureError",
          children: Tr
        }), (0, tr.jsxs)("div", {
          ...lr({
            className: ar()("CustomTextureFolderUpload", {
              ActiveDrag: Pr,
              Disabled: hr
            })
          }),
          children: [(0, tr.jsx)("input", {
            ...Xr({
              webkitdirectory: "true"
            })
          }), er && (0, tr.jsx)("div", {
            className: "CustomTextureFolderUploadLoading",
            children: (0, tr.jsx)(Ir.c, {})
          }), !er && !Pr && Sr && (0, tr.jsxs)(tr.Fragment, {
            children: [(0, tr.jsx)("div", {
              className: "CustomTextureFolderUploadIcon Active",
              children: (0, tr.jsx)(xr.c, {
                name: "folder-image"
              })
            }), (0, tr.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions Active",
              children: Sr
            })]
          }), !er && (Pr || !Sr) && (0, tr.jsxs)(tr.Fragment, {
            children: [(0, tr.jsx)("div", {
              className: "CustomTextureFolderUploadIcon",
              children: (0, tr.jsx)(xr.c, {
                name: "up-from-bracket"
              })
            }), (0, tr.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions",
              children: nr((0, Ur.d)() ? "customTexturePack:dropHere" : "customTexturePack:chooseZipInstructions")
            })]
          }), !er && (0, tr.jsx)(Ur.c, {
            disabled: hr,
            openFolderPicker: Hr,
            onFiles: rr => {
              Lr(rr)
            }
          })]
        })]
      })
    }
  },
  6010: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => pr,
      d: () => Er
    });
    var Zr = Qr(72),
      Wr = Qr(1576),
      ar = Qr(1251),
      jr = Qr(109),
      Ir = Qr(4334),
      fr = Qr(1338);

    function Er() {
      return !(0, jr.isMobile)()
    }

    function pr(rr) {
      let {
        disabled: Sr,
        openFolderPicker: Qr,
        onFiles: jr
      } = rr;
      const {
        t: pr
      } = (0, ar.E)(), xr = (0, Zr.useRef)(null);
      return (0, fr.jsxs)("div", {
        className: "PackPickButtons",
        "data-pad-mouse-only": !0,
        children: [(0, fr.jsx)("input", {
          ref: xr,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(rr) {
            const Sr = Array.from(rr.target.files);
            rr.target.value = "", jr(Sr)
          }
        }), Er() && (0, fr.jsx)(Wr.h, {
          disabled: Sr,
          onClick: Qr,
          children: pr("general:chooseFolder")
        }), (0, fr.jsx)(Wr.h, {
          disabled: Sr,
          onClick: () => {
            (0, Ir.e)(xr.current)
          },
          children: pr("general:chooseZip")
        })]
      })
    }
  },
  5951: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Ur,
      e: () => er,
      f: () => tr,
      i: () => nr
    });
    var Zr = Qr(72),
      Wr = Qr(5960),
      ar = Qr(5065),
      jr = Qr(1489),
      Ir = Qr(4205),
      fr = Qr(1155),
      Er = Qr.n(fr),
      pr = Qr(1475),
      xr = Qr(1885),
      mr = Qr(5986),
      Nr = Qr(1338);

    function Ur(rr) {
      let {
        label: Sr,
        onClick: Qr,
        checked: Zr,
        circleInfoText: Wr,
        className: Ir,
        disabled: fr,
        note: pr
      } = rr;
      return (0, Nr.jsxs)("div", {
        "aria-disabled": fr || void 0,
        "data-pad-focusable": !0,
        className: Er()("SettingBox CheckboxContainer", {
          [Ir]: Ir,
          SettingBoxDisabled: fr
        }),
        onClick: () => {
          fr || Qr(!Zr)
        },
        children: [(0, Nr.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, Nr.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, Nr.jsx)(ar.e, {
              className: "SettingsCheckbox",
              checked: Zr,
              disabled: fr,
              onChange: () => {}
            })
          }), (0, Nr.jsxs)("div", {
            className: "CheckboxText",
            children: [Sr, Wr && (0, Nr.jsx)("span", {
              onClick: rr => rr.stopPropagation(),
              children: (0, Nr.jsx)(jr.d, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: Wr
              })
            })]
          })]
        }), pr && (0, Nr.jsx)("div", {
          className: "SettingNote",
          children: pr
        })]
      })
    }

    function tr(rr) {
      let {
        name: Sr,
        onChange: Qr,
        min: Wr,
        max: ar,
        step: Ir,
        initValue: fr,
        circleInfoText: pr,
        format: xr,
        className: mr,
        padStep: Ur,
        disabled: tr = !1,
        selectableMax: hr,
        cappedNote: zr,
        note: nr,
        onChangeComplete: er
      } = rr;
      const [Kr, yr] = (0, Zr.useState)(fr), Br = (0, Zr.useRef)(fr);
      (0, Zr.useEffect)((() => {
        Br.current = fr, yr(fr)
      }), [fr]);
      const Tr = void 0 !== hr && hr < ar,
        vr = Tr ? {
          "--slider-selectable": (hr - Wr) / (ar - Wr)
        } : void 0,
        Or = Tr && zr ? zr : nr;
      return (0, Nr.jsxs)("div", {
        className: Er()("SettingBox SettingsSliderDiv", {
          [mr]: mr,
          SettingBoxDisabled: tr,
          SliderCapped: Tr
        }),
        style: vr,
        children: [(0, Nr.jsxs)("div", {
          className: "SliderText",
          children: [`${Sr}: ${xr?xr(Kr):Kr}`, pr && (0, Nr.jsx)(jr.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: pr
          })]
        }), (0, Nr.jsx)("div", {
          className: "SliderDiv",
          children: (0, Nr.jsx)(Yr, {
            value: Kr,
            min: Wr,
            max: ar,
            step: Ir,
            onChange: rr => {
              if (Tr && rr >= hr && Kr === hr) return;
              const Sr = Tr ? Math.min(rr, hr) : rr;
              Br.current = Sr, yr(Sr), Qr(Sr)
            },
            onChangeComplete: er && (() => {
              er(Br.current)
            }),
            format: xr,
            padStep: Ur,
            disabled: tr
          })
        }), Or && (0, Nr.jsx)("div", {
          className: "SettingNote",
          children: Or
        })]
      })
    }
    const hr = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function zr(rr) {
      var Sr;
      return (null !== (Sr = String(rr).split(".")[1]) && void 0 !== Sr ? Sr : "").length
    }

    function Yr(rr) {
      let {
        value: Sr,
        min: Qr,
        max: ar,
        step: jr,
        onChange: Ir,
        orientation: fr,
        reverse: Er,
        setIsChanging: pr,
        tooltip: xr,
        labels: Ur,
        handleLabel: tr,
        format: Yr,
        onChangeStart: nr,
        onChangeComplete: er,
        padStep: Kr,
        disabled: yr = !1
      } = rr;
      const Br = (0, Zr.useRef)(null),
        Tr = (0, Zr.useRef)(null);
      (0, Zr.useLayoutEffect)((() => {
        var rr, Sr, Qr;
        const Zr = null !== (rr = null === (Sr = Br.current) || void 0 === Sr ? void 0 : Sr.querySelector(".rangeslider")) && void 0 !== rr ? rr : null;
        null === Zr || void 0 === Zr || Zr.setAttribute("data-pad-slider", ""), null === Zr || void 0 === Zr || Zr.setAttribute("data-pad-focusable", ""), null === Zr || void 0 === Zr || null === (Qr = Zr.querySelector(".rangeslider__handle")) || void 0 === Qr || Qr.setAttribute("data-pad-slider-handle", ""), Tr.current = Zr
      }), []), (0, Zr.useLayoutEffect)((() => {
        var rr, Sr;
        yr ? null === (rr = Tr.current) || void 0 === rr || rr.setAttribute("aria-disabled", "true") : null === (Sr = Tr.current) || void 0 === Sr || Sr.removeAttribute("aria-disabled")
      }), [yr]);
      const vr = Math.max(zr(jr), zr(Qr)),
        Or = rr => {
          if (rr >= ar) return ar;
          if (rr <= Qr) return Qr;
          const Sr = Number((Math.round((rr - Qr) / jr) * jr + Qr).toFixed(vr));
          return Math.min(ar, Math.max(Qr, Sr))
        },
        Lr = (0, Zr.useRef)(er);
      Lr.current = er, (0, Zr.useEffect)((() => {
        const rr = Br.current;
        if (!rr) return;
        const Sr = rr => {
          var Sr;
          hr.has(rr.key) && (null === (Sr = Lr.current) || void 0 === Sr || Sr.call(Lr))
        };
        return rr.addEventListener("keyup", Sr), () => {
          rr.removeEventListener("keyup", Sr)
        }
      }), []);
      const lr = (0, Zr.useRef)(!1);
      return (0, mr.c)(Tr, {
        adjust: rr => {
          if (yr) return;
          const Zr = null !== Kr && void 0 !== Kr ? Kr : Math.max(jr, Math.round((ar - Qr) / 20 / jr) * jr),
            Wr = Or(Sr + rr * Zr * (Er ? -1 : 1));
          Wr !== Sr && (null === nr || void 0 === nr || nr(), Ir(Wr), null === er || void 0 === er || er())
        },
        setFraction: rr => {
          if (yr) return;
          const Zr = Or(Qr + (Er ? 1 - rr : rr) * (ar - Qr));
          Zr !== Sr && (lr.current || (lr.current = !0, null === nr || void 0 === nr || nr()), Ir(Zr))
        },
        endDrag: () => {
          lr.current && (lr.current = !1, null === er || void 0 === er || er())
        }
      }), (0, Nr.jsx)("div", {
        ref: Br,
        style: {
          display: "contents"
        },
        children: (0, Nr.jsx)(Wr.c, {
          value: Sr,
          min: Qr,
          max: ar,
          step: jr,
          onChange: rr => {
            Ir(Or(rr))
          },
          orientation: fr,
          reverse: Er,
          tooltip: xr,
          labels: Ur,
          handleLabel: tr,
          format: Yr,
          onChangeStart: () => {
            null === nr || void 0 === nr || nr(), null === pr || void 0 === pr || pr(!0)
          },
          onChangeComplete: () => {
            null === pr || void 0 === pr || pr(!1), null === er || void 0 === er || er()
          }
        })
      })
    }
    async function nr() {
      const rr = pr.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await rr.getResult() && (0, xr.reloadBloxd)()
    }

    function er(rr) {
      let {
        label: Sr,
        options: Qr,
        value: Zr,
        onChange: Wr,
        circleInfoText: ar
      } = rr;
      return (0, Nr.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, Nr.jsxs)("div", {
          className: "SliderText",
          children: [Sr, ar && (0, Nr.jsx)(jr.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: ar
          })]
        }), (0, Nr.jsx)(Ir.d, {
          ariaLabel: Sr,
          options: Qr,
          value: Zr,
          onChange: Wr
        })]
      })
    }
  },
  5945: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => hr,
      g: () => zr
    });
    var Zr = Qr(4362),
      Wr = Qr(2325),
      ar = Qr(72),
      jr = Qr(1155),
      Ir = Qr.n(jr),
      fr = Qr(1444),
      Er = Qr(4354),
      pr = Qr(1475),
      xr = Qr(5951),
      mr = Qr(5991),
      Nr = Qr(712),
      Ur = Qr(6014),
      tr = Qr(1338);

    function hr(rr) {
      var Sr;
      let {
        setApplySettingsCallback: Qr
      } = rr;
      const [, jr] = (0, ar.useReducer)((rr => rr + 1), 0), Ir = (0, ar.useRef)(!1), fr = (0, ar.useRef)(null);

      function hr(rr, Sr) {
        Er.d.setFromJson(rr, "player");
        const Zr = Er.d.saveTexturePack();
        if (Nr.I) {
          const rr = Er.d.toJson();
          Zr.then((Sr => {
            Sr && (0, Ur.c)(rr)
          }))
        } else Ir.current ||= Sr, fr.current !== Er.d.getId() || Er.d.getId() === Wr.o.CUSTOM && Ir.current ? Qr((() => xr.i)) : Qr(null);
        jr()
      }
      async function Yr(rr) {
        if (Er.d.getId() !== rr.metaData.id) {
          if (Er.d.getId() === Wr.o.CUSTOM && Er.d.getFromFolderName()) {
            const rr = pr.NotificationProvider.showPromptPopup({
              title: "settingsMenu:loseChangesTitle",
              subtitle: "settingsMenu:loseChangesSubtitle",
              confirmText: "general:continue",
              destructive: !0,
              confirmTooltip: "",
              cancelText: "general:cancel",
              cancelTooltip: ""
            });
            if (!0 !== await rr.getResult()) return
          }
          hr(rr, !1)
        }
      }(0, ar.useEffect)((() => {
        fr.current = Er.d.getId()
      }), []);
      const nr = Zr.c,
        er = [nr, ...Object.values(Wr.o).filter((rr => rr !== nr))];
      return (0, tr.jsx)(tr.Fragment, {
        children: (0, tr.jsxs)("div", {
          className: "TexturePackCategory SettingsMenuRightInner",
          children: [(0, tr.jsx)("div", {
            className: "TexturePackList",
            children: er.map((rr => (0, tr.jsx)(zr, {
              id: rr,
              isSelected: rr === Er.d.getId(),
              setSelected: Yr
            }, rr)))
          }), Er.d.getId() === Wr.o.CUSTOM && (0, tr.jsx)(mr.b, {
            folderName: null !== (Sr = Er.d.getFromFolderName()) && void 0 !== Sr ? Sr : null,
            onTexturePackUpdated: function(rr) {
              hr(rr, !0)
            },
            packOwner: "player"
          })]
        })
      })
    }

    function zr(rr) {
      let {
        id: Sr,
        isSelected: Qr,
        setSelected: jr,
        disabled: Er = !1
      } = rr;
      const [pr, xr] = (0, ar.useState)(!0), [mr, Nr] = (0, ar.useState)(""), [Ur, hr] = (0, ar.useState)(""), [zr, Yr] = (0, ar.useState)(""), nr = (0, ar.useRef)({});
      return (0, ar.useEffect)((() => {
        (0, Zr.k)(Sr).then((rr => {
          var Sr;
          rr && (nr.current = rr, xr(!1), Nr(nr.current.metaData.name), hr(nr.current.metaData.author), Yr(null !== (Sr = nr.current.metaData.previewImage) && void 0 !== Sr ? Sr : ""))
        })).catch((rr => {
          console.warn(`Failed to fetch texture pack ${Sr}`, rr)
        }))
      }), [Sr]), (0, tr.jsxs)("div", {
        "data-pad-focusable": !0,
        "aria-disabled": Er || void 0,
        className: Ir()("TexturePack", {
          Selected: Qr,
          Custom: Sr === Wr.o.CUSTOM,
          Disabled: Er
        }),
        onClick: () => {
          pr || Er || jr(nr.current)
        },
        children: [(0, tr.jsx)("div", {
          className: "TexturePackBg",
          style: {
            backgroundImage: zr ? `url(${zr})` : void 0
          }
        }), pr && (0, tr.jsx)("div", {
          className: "TexturePackName",
          children: (0, tr.jsx)(fr.c, {})
        }), !pr && mr && (0, tr.jsx)("div", {
          className: "TexturePackName",
          children: mr
        }), !pr && Ur && (0, tr.jsx)("div", {
          className: "TexturePackAuthor",
          children: Ur
        })]
      })
    }
  },
  5998: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Ir,
      f: () => jr,
      g: () => ar
    });
    var Zr = Qr(6005);
    const Wr = [rr => rr.strict ? "strict" : "nonStrict", rr => rr.program];

    function ar(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const Zr = {};
      for (const Wr in Qr) Zr[Wr] = `\0${Wr}\0`;
      return rr(Sr, Zr).replace(/\0(\w+)\0/g, ((rr, Sr) => Qr[Sr]))
    }

    function jr(rr) {
      return null === rr.file ? null : rr.line > 0 ? `${rr.file}:${rr.line}` : rr.file
    }

    function Ir(rr) {
      const Sr = new Map(rr.map((rr => [fr(rr).join("."), rr])));
      if (0 === Sr.size) return [];
      const Qr = pr([...Sr.values()]);
      return 0 === Qr[0].length ? [] : Qr
    }

    function fr(rr) {
      return Wr.map((Sr => Sr(rr)))
    }
    const Er = Wr.map((rr => new Set(Zr.e.map(rr)).size));

    function pr(rr) {
      const Sr = Wr.map((Sr => new Set(rr.map(Sr)))),
        Qr = Sr.reduce(((rr, Sr) => rr * Sr.size), 1),
        Zr = Sr.every(((rr, Sr) => 1 === rr.size || rr.size === Er[Sr]));
      if (Qr === rr.length && Zr) return [Wr.filter(((rr, Qr) => 1 === Sr[Qr].size)).map((Sr => Sr(rr[0])))];
      let ar = null;
      for (let jr = 0; jr < Wr.length; jr++) {
        if (1 === Sr[jr].size) continue;
        const Qr = xr(rr, Wr[jr]).flatMap(pr);
        (null === ar || Qr.length < ar.length) && (ar = Qr)
      }
      return ar
    }

    function xr(rr, Sr) {
      const Qr = new Map;
      for (const Wr of rr) {
        var Zr;
        const rr = Sr(Wr);
        Qr.set(rr, [...null !== (Zr = Qr.get(rr)) && void 0 !== Zr ? Zr : [], Wr])
      }
      return [...Qr.values()]
    }
  },
  5986: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => ar,
      c: () => jr
    });
    var Zr = Qr(72);
    const Wr = new WeakMap,
      ar = rr => {
        var Sr;
        const Qr = rr.closest("[data-pad-slider]");
        return Qr && null !== (Sr = Wr.get(Qr)) && void 0 !== Sr ? Sr : null
      },
      jr = (rr, Sr) => {
        const Qr = (0, Zr.useRef)(Sr);
        Qr.current = Sr, (0, Zr.useEffect)((() => {
          if (rr.current) return ((rr, Sr) => (Wr.set(rr, Sr), () => {
            Wr.get(rr) === Sr && Wr.delete(rr)
          }))(rr.current, {
            adjust: rr => {
              Qr.current.adjust(rr)
            },
            setFraction: rr => {
              Qr.current.setFraction(rr)
            },
            endDrag: () => {
              Qr.current.endDrag()
            }
          })
        }), [rr])
      }
  },
  6005: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Zr.j,
      e: () => Wr,
      i: () => Zr.r
    });
    var Zr = Qr(6007);
    const Wr = [!1, !0].flatMap((rr => ["terrain", "liquid", "model"].map((Sr => ({
      strict: rr,
      program: Sr
    })))))
  },
  6017: (rr, Sr, Qr) => {
    function Zr(rr, Sr) {
      return Wr(rr, Sr)
    }

    function Wr(rr, Sr) {
      if (rr === Sr) return !0;
      if ("object" !== typeof rr || "object" !== typeof Sr || null === rr || null === Sr || Array.isArray(rr) !== Array.isArray(Sr)) return !1;
      const Qr = rr,
        Zr = Sr,
        ar = Object.keys(Qr);
      return ar.length === Object.keys(Zr).length && ar.every((rr => Object.prototype.hasOwnProperty.call(Zr, rr) && Wr(Qr[rr], Zr[rr])))
    }
    Qr.d(Sr, {
      b: () => Zr
    })
  },
  6014: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => jr,
      f: () => Ir
    });
    var Zr = Qr(2325),
      Wr = Qr(6017);
    let ar = null;

    function jr(rr) {
      ar = {
        pack: rr.metaData.id === Zr.e ? null : rr
      }
    }

    function Ir(rr) {
      return !(null === ar || !(0, Wr.b)(ar.pack, rr)) && (ar = null, !0)
    }
  },
  6007: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Ir,
      g: () => jr,
      j: () => Zr,
      k: () => tr,
      n: () => xr,
      r: () => Wr,
      s: () => ar,
      v: () => Er,
      w: () => pr,
      z: () => mr
    });
    const Zr = 5;

    function Wr(rr) {
      return rr === Zr
    }

    function ar(rr) {
      return [...rr.features]
    }
    const jr = 262144,
      Ir = 256,
      fr = 256;

    function Er(rr) {
      if ("object" !== typeof rr || null === rr || Array.isArray(rr)) return "The pack has no files.";
      const Sr = [];
      for (const [Qr, Zr] of Object.entries(rr)) {
        if ("string" !== typeof Zr) return `${Qr} isn't text.`;
        Sr.push({
          path: Qr,
          source: Zr
        })
      }
      return Sr.sort(((rr, Sr) => xr(rr.path, Sr.path))),
        function(rr) {
          if (0 === rr.length) return "The pack has no .wgsl files.";
          if (rr.length > Ir) return `The pack has more than ${Ir} .wgsl files.`;
          const Sr = new Set;
          for (const {
              path: Qr
            }
            of rr) {
            const rr = Nr(Qr);
            if (null !== rr) return rr;
            if (Sr.has(Qr)) return `The pack has two files at ${Qr}.`;
            Sr.add(Qr)
          }
          return mr(rr) > jr ? `The pack's .wgsl files are over ${jr/1024} KB in total.` : null
        }(Sr) ?? Sr
    }

    function pr(rr) {
      const Sr = {};
      for (const Qr of rr) Sr[Qr.path] = Qr.source;
      return Sr
    }

    function xr(rr, Sr) {
      return rr < Sr ? -1 : rr > Sr ? 1 : 0
    }

    function mr(rr) {
      const Sr = new TextEncoder;
      let Qr = 0;
      for (const {
          source: Zr
        }
        of rr) Qr += Sr.encode(Zr).byteLength;
      return Qr
    }

    function Nr(rr) {
      if (!rr.toLowerCase().endsWith(".wgsl")) return `${rr} isn't a .wgsl file.`;
      if (rr.length > fr) return `A file path is over ${fr} characters.`;
      if (rr.includes("\\") || /[\u0000-\u001f]/.test(rr)) return `${rr} isn't a valid file path.`;
      return rr.split("/").some((rr => "" === rr || "." === rr || ".." === rr)) ? `${rr} isn't a valid file path.` : null
    }
    const Ur = /^(.*)\[rot\[([1-4])$/;

    function tr(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const Zr = new Map;
      Sr.forEach(((rr, Sr) => {
        let {
          numAnimStates: Qr,
          animStartIdx: Wr
        } = rr;
        for (let ar = 1; ar < Qr; ar++) Zr.set(Wr + ar - 1, Sr)
      }));
      const Wr = Object.entries(rr),
        ar = new Map;
      for (const [tr, hr] of Wr) {
        const rr = Ur.exec(tr);
        "1" === rr?.[2] && ar.set(rr[1], hr + 1)
      }
      const jr = rr => {
          const Sr = Ur.exec(rr);
          return Sr && ar.has(Sr[1]) ? {
            root: Sr[1],
            rotation: Number(Sr[2]) - 1
          } : null
        },
        Ir = new Set(Wr.map((rr => {
          let [Sr] = rr;
          return jr(Sr)?.root ?? Sr
        }))),
        fr = (rr, Qr) => {
          const Zr = rr.replace(/_?0$/, "");
          return (Sr[Qr]?.numAnimStates ?? 0) > 1 && !Ir.has(Zr) ? Zr : rr
        },
        Er = new Map;
      for (const [Ur, tr] of Wr) Er.set(tr, fr(jr(Ur)?.root ?? Ur, tr));
      const pr = Wr.reduce(((rr, Sr) => {
          let [, Qr] = Sr;
          return Math.max(rr, Qr + 1)
        }), 0),
        xr = Array.from({
          length: pr
        }, ((rr, Sr) => ({
          id: Sr + 1,
          rotation: 0
        }))),
        mr = new Map,
        Nr = new Map;
      for (const [Ur, tr] of Wr) {
        const rr = jr(Ur),
          Sr = Zr.get(tr);
        if (void 0 !== Sr) {
          const Qr = Er.get(Sr);
          Nr.set(Ur, {
            name: Ur,
            texture: Qr,
            kind: "frame"
          }), rr && !Nr.has(rr.root) && Nr.set(rr.root, {
            name: rr.root,
            texture: Qr,
            kind: "frame"
          });
          continue
        }
        const Qr = Er.get(tr),
          Wr = rr?.root ?? Ur;
        if (Qr !== Wr && Nr.set(Wr, {
            name: Wr,
            texture: Qr,
            kind: "frame"
          }), rr) {
          const Sr = ar.get(rr.root);
          xr[tr] = {
            id: Sr,
            rotation: rr.rotation
          }, mr.set(Qr, Sr), Nr.set(Ur, {
            name: Ur,
            texture: Qr,
            kind: "rotation"
          })
        } else mr.set(Qr, tr + 1)
      }
      for (const Ur of mr.keys()) Nr.delete(Ur);
      for (const [Ur, tr] of Qr) {
        const rr = mr.get(tr);
        void 0 === rr || mr.has(Ur) || (mr.set(Ur, rr), Nr.delete(Ur))
      }
      return {
        named: [...mr].sort(((rr, Sr) => {
          let [Qr] = rr, [Zr] = Sr;
          return Qr < Zr ? -1 : Qr > Zr ? 1 : 0
        })).map((rr => {
          let [Sr, Qr] = rr;
          return {
            name: Sr,
            id: Qr
          }
        })),
        aliases: [...Nr.values()],
        layers: xr
      }
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);