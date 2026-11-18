export const id = 91;
export const ids = [91];
export const modules = {
  4111: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => ey
    });
    var Uy = Wy(898),
      hy = Wy.n(Uy),
      fy = Wy(910),
      Zy = Wy(1194),
      cb = Wy(2802),
      Py = Wy(139),
      oy = Wy(2837),
      By = Wy(2829),
      Ky = Wy(952);

    function ey(yb) {
      let {
        game: bb
      } = yb;
      const Wy = (0, Py.o)() ? "large" : "small",
        Uy = (0, oy.c)(bb, Wy),
        ey = (0, cb.e)(Uy),
        qb = void 0 !== ey.blurhash;
      return (0, Ky.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [ey.isLoading && !qb && (0, Ky.jsx)(Zy.e, {
          loaderType: "Secondary"
        }), !ey.failed && (null !== ey.src || qb) && (0, Ky.jsx)("div", {
          className: hy()("SchematicImage", By.i, {
            SchematicImageFadeIn: ey.fadeIn && !qb
          }),
          style: (0, By.h)(ey),
          children: (0, Ky.jsx)(By.e, {
            image: ey
          })
        }), ey.failed && (0, Ky.jsx)("div", {
          className: "SchematicImageError",
          children: (0, Ky.jsx)(fy.e, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  4237: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => qb
    });
    var Uy = Wy(55),
      hy = Wy(898),
      fy = Wy.n(hy),
      Zy = Wy(4168),
      cb = Wy(1194),
      Py = Wy(1042),
      oy = Wy(2479),
      By = Wy(2609),
      Ky = Wy(910),
      ey = Wy(952);

    function qb(yb) {
      let {
        folderName: bb,
        onTexturePackUpdated: hy,
        disabled: qb = !1,
        maxFileSizeMb: sy,
        packOwner: Sy
      } = yb;
      const {
        t: Ey
      } = (0, Py.D)(), [ly, mb] = (0, Uy.useState)(!1), [Cy, Ty] = (0, Uy.useState)(null), [Vy, Jy] = (0, Uy.useState)(null), gb = (0, Uy.useRef)(null);
      const {
        getRootProps: Gy,
        getInputProps: Oy,
        isDragActive: Ry
      } = (0, Zy.e)({
        onDrop: async function(yb) {
          mb(!0);
          try {
            const bb = await (0, oy.q)(yb);
            if ("customGame" === Sy && (0, By.m)(bb)) return void Ty(Ey(By.d));
            if (void 0 !== sy) {
              const yb = JSON.stringify(bb).length / 1048576;
              if (yb > sy) return void Ty(`File size is too large. Max size is ${sy}MB. Current size is ${yb}MB.`)
            }
            Ty(null), Jy(null), hy(bb), gb.current = bb,
              function(yb, bb) {
                const Uy = yb.modelOverrides;
                Uy && Promise.all([Wy.e(185), Wy.e(184)]).then((() => Wy(33189))).then((Wy => {
                  let {
                    packDisplayName: hy,
                    refusedPackModels: fy,
                    packModelSummary: Zy
                  } = Wy;
                  const cb = hy(yb.metaData);
                  bb(Zy(cb, fy(cb, Uy, !1)))
                })).catch((yb => {
                  console.error("Checking the texture pack's models failed:", yb)
                }))
              }(bb, (yb => {
                gb.current === bb && Jy(yb)
              }))
          } catch {
            Ty("Invalid Texture Pack Folder")
          } finally {
            mb(!1)
          }
        },
        useFsAccessApi: !1,
        disabled: qb
      });
      return (0, ey.jsxs)("div", {
        className: "CustomTexturePackContainer",
        children: [(0, ey.jsxs)("div", {
          className: "CustomTextureWarning",
          children: [Ey("settingsMenu:customTextureWarning"), ".", (0, ey.jsx)("br", {}), Ey("settingsMenu:viewDocumentation"), ":", " ", (0, ey.jsx)("a", {
            href: "https://github.com/Bloxdy/texturePacks",
            target: "_blank",
            rel: "noreferrer",
            children: "github.com/Bloxdy/texturePacks"
          })]
        }), Cy && (0, ey.jsxs)("div", {
          className: "CustomTextureError",
          children: [Ey("general:error"), ": ", Cy]
        }), Vy && (0, ey.jsx)("div", {
          className: "CustomTextureError",
          children: Vy
        }), (0, ey.jsxs)("div", {
          ...Gy({
            className: fy()("CustomTextureFolderUpload", {
              ActiveDrag: Ry,
              Disabled: qb
            })
          }),
          children: [(0, ey.jsx)("input", {
            ...Oy({
              webkitdirectory: "true"
            })
          }), ly && (0, ey.jsx)("div", {
            className: "CustomTextureFolderUploadLoading",
            children: (0, ey.jsx)(cb.e, {})
          }), !ly && !Ry && bb && (0, ey.jsxs)(ey.Fragment, {
            children: [(0, ey.jsx)("div", {
              className: "CustomTextureFolderUploadIcon Active",
              children: (0, ey.jsx)(Ky.e, {
                name: "folder-image"
              })
            }), (0, ey.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions Active",
              children: bb
            })]
          }), !ly && (Ry || !bb) && (0, ey.jsxs)(ey.Fragment, {
            children: [(0, ey.jsx)("div", {
              className: "CustomTextureFolderUploadIcon",
              children: (0, ey.jsx)(Ky.e, {
                name: "up-from-bracket"
              })
            }), (0, ey.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions",
              children: "Drag and drop a Texture Pack folder here"
            })]
          })]
        })]
      })
    }
  },
  4200: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => sy,
      d: () => mb,
      f: () => Sy,
      g: () => ly
    });
    var Uy = Wy(55),
      hy = Wy(4207),
      fy = Wy(3630),
      Zy = Wy(1217),
      cb = Wy(4222),
      Py = Wy(898),
      oy = Wy.n(Py),
      By = Wy(1207),
      Ky = Wy(1496),
      ey = Wy(4229),
      qb = Wy(952);

    function sy(yb) {
      let {
        label: bb,
        onClick: Wy,
        checked: Uy,
        circleInfoText: hy,
        className: cb,
        disabled: Py
      } = yb;
      return (0, qb.jsx)("div", {
        "aria-disabled": Py || void 0,
        "data-pad-focusable": !0,
        className: oy()("SettingBox CheckboxContainer", {
          [cb]: cb,
          SettingBoxDisabled: Py
        }),
        onClick: () => {
          Py || Wy(!Uy)
        },
        children: (0, qb.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, qb.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, qb.jsx)(fy.c, {
              className: "SettingsCheckbox",
              checked: Uy,
              disabled: Py,
              onChange: () => {}
            })
          }), (0, qb.jsxs)("div", {
            className: "CheckboxText",
            children: [bb, hy && (0, qb.jsx)("span", {
              onClick: yb => yb.stopPropagation(),
              children: (0, qb.jsx)(Zy.c, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: hy
              })
            })]
          })]
        })
      })
    }

    function Sy(yb) {
      let {
        name: bb,
        onChange: Wy,
        min: hy,
        max: fy,
        step: cb,
        initValue: Py,
        circleInfoText: By,
        format: Ky,
        className: ey,
        padStep: sy,
        disabled: Sy = !1,
        selectableMax: ly,
        cappedNote: mb
      } = yb;
      const [Cy, Ty] = (0, Uy.useState)(Py);
      (0, Uy.useEffect)((() => {
        Ty(Py)
      }), [Py]);
      const Vy = void 0 !== ly && ly < fy,
        Jy = Vy ? {
          "--slider-selectable": (ly - hy) / (fy - hy)
        } : void 0;
      return (0, qb.jsxs)("div", {
        className: oy()("SettingBox SettingsSliderDiv", {
          [ey]: ey,
          SettingBoxDisabled: Sy,
          SliderCapped: Vy
        }),
        style: Jy,
        children: [(0, qb.jsxs)("div", {
          className: "SliderText",
          children: [`${bb}: ${Ky?Ky(Cy):Cy}`, By && (0, qb.jsx)(Zy.c, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: By
          })]
        }), (0, qb.jsx)("div", {
          className: "SliderDiv",
          children: (0, qb.jsx)(Ey, {
            value: Cy,
            min: hy,
            max: fy,
            step: cb,
            onChange: yb => {
              if (Vy && yb >= ly && Cy === ly) return;
              const bb = Vy ? Math.min(yb, ly) : yb;
              Ty(bb), Wy(bb)
            },
            format: Ky,
            padStep: sy,
            disabled: Sy
          })
        }), Vy && mb && (0, qb.jsx)("div", {
          className: "SliderNote",
          children: mb
        })]
      })
    }

    function Ey(yb) {
      var bb;
      let {
        value: Wy,
        min: fy,
        max: Zy,
        step: cb,
        onChange: Py,
        orientation: oy,
        reverse: By,
        setIsChanging: Ky,
        tooltip: sy,
        labels: Sy,
        handleLabel: Ey,
        format: ly,
        onChangeStart: mb,
        onChangeComplete: Cy,
        padStep: Ty,
        disabled: Vy = !1
      } = yb;
      const Jy = (0, Uy.useRef)(null),
        gb = (0, Uy.useRef)(null);
      (0, Uy.useLayoutEffect)((() => {
        var yb, bb, Wy;
        const Uy = null !== (yb = null === (bb = Jy.current) || void 0 === bb ? void 0 : bb.querySelector(".rangeslider")) && void 0 !== yb ? yb : null;
        null === Uy || void 0 === Uy || Uy.setAttribute("data-pad-slider", ""), null === Uy || void 0 === Uy || Uy.setAttribute("data-pad-focusable", ""), null === Uy || void 0 === Uy || null === (Wy = Uy.querySelector(".rangeslider__handle")) || void 0 === Wy || Wy.setAttribute("data-pad-slider-handle", ""), gb.current = Uy
      }), []), (0, Uy.useLayoutEffect)((() => {
        var yb, bb;
        Vy ? null === (yb = gb.current) || void 0 === yb || yb.setAttribute("aria-disabled", "true") : null === (bb = gb.current) || void 0 === bb || bb.removeAttribute("aria-disabled")
      }), [Vy]);
      const Gy = (null !== (bb = String(cb).split(".")[1]) && void 0 !== bb ? bb : "").length,
        Oy = yb => {
          const bb = Number((Math.round((yb - fy) / cb) * cb + fy).toFixed(Gy));
          return Math.min(Zy, Math.max(fy, bb))
        },
        Ry = (0, Uy.useRef)(!1);
      return (0, ey.h)(gb, {
        adjust: yb => {
          if (Vy) return;
          const bb = null !== Ty && void 0 !== Ty ? Ty : Math.max(cb, Math.round((Zy - fy) / 20 / cb) * cb),
            Uy = Oy(Wy + yb * bb * (By ? -1 : 1));
          Uy !== Wy && (null === mb || void 0 === mb || mb(), Py(Uy), null === Cy || void 0 === Cy || Cy())
        },
        setFraction: yb => {
          if (Vy) return;
          const bb = Oy(fy + (By ? 1 - yb : yb) * (Zy - fy));
          bb !== Wy && (Ry.current || (Ry.current = !0, null === mb || void 0 === mb || mb()), Py(bb))
        },
        endDrag: () => {
          Ry.current && (Ry.current = !1, null === Cy || void 0 === Cy || Cy())
        }
      }), (0, qb.jsx)("div", {
        ref: Jy,
        style: {
          display: "contents"
        },
        children: (0, qb.jsx)(hy.b, {
          value: Wy,
          min: fy,
          max: Zy,
          step: cb,
          onChange: Py,
          orientation: oy,
          reverse: By,
          tooltip: sy,
          labels: Sy,
          handleLabel: Ey,
          format: ly,
          onChangeStart: () => {
            null === mb || void 0 === mb || mb(), null === Ky || void 0 === Ky || Ky(!0)
          },
          onChangeComplete: () => {
            null === Ky || void 0 === Ky || Ky(!1), null === Cy || void 0 === Cy || Cy()
          }
        })
      })
    }
    async function ly() {
      let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      const bb = By.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: "",
        unlockPointerKey: yb
      });
      !0 === await bb.getResult() && (0, Ky.reloadBloxd)()
    }

    function mb(yb) {
      let {
        label: bb,
        options: Wy,
        value: Uy,
        onChange: hy,
        circleInfoText: fy
      } = yb;
      return (0, qb.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, qb.jsxs)("div", {
          className: "SliderText",
          children: [bb, fy && (0, qb.jsx)(Zy.c, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: fy
          })]
        }), (0, qb.jsx)(cb.c, {
          ariaLabel: bb,
          options: Wy,
          value: Uy,
          onChange: hy
        })]
      })
    }
  },
  4195: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => ly,
      f: () => mb
    });
    var Uy = Wy(2479),
      hy = Wy(2481),
      fy = Wy(55),
      Zy = Wy(898),
      cb = Wy.n(Zy),
      Py = Wy(1194),
      oy = Wy(2476),
      By = Wy(1207),
      Ky = Wy(4200),
      ey = Wy(4237),
      qb = Wy(562),
      sy = Wy(4243),
      Sy = Wy(952);

    function Ey() {
      (0, Ky.g)("texturePackPickReload")
    }

    function ly(yb) {
      var bb;
      let {
        setApplySettingsCallback: Wy
      } = yb;
      const [, Zy] = (0, fy.useReducer)((yb => yb + 1), 0), cb = (0, fy.useRef)(!1), Py = (0, fy.useRef)(null);

      function ly(yb, bb) {
        oy.e.setFromJson(yb, "player");
        const Uy = oy.e.saveTexturePack();
        if (qb.q) {
          const yb = oy.e.toJson();
          Uy.then((bb => {
            bb && (0, sy.c)(yb, Ey)
          }))
        } else cb.current ||= bb, Py.current !== oy.e.getId() || oy.e.getId() === hy.m.CUSTOM && cb.current ? Wy((() => Ky.g)) : Wy(null);
        Zy()
      }
      async function Cy(yb) {
        if (oy.e.getId() !== yb.metaData.id) {
          if (oy.e.getId() === hy.m.CUSTOM && oy.e.getFromFolderName()) {
            const yb = By.NotificationProvider.showPromptPopup({
              title: "settingsMenu:loseChangesTitle",
              subtitle: "settingsMenu:loseChangesSubtitle",
              confirmText: "general:continue",
              destructive: !0,
              confirmTooltip: "",
              cancelText: "general:cancel",
              cancelTooltip: ""
            });
            if (!0 !== await yb.getResult()) return
          }
          ly(yb, !1)
        }
      }(0, fy.useEffect)((() => {
        Py.current = oy.e.getId()
      }), []);
      const Ty = Uy.e,
        Vy = [Ty, ...Object.values(hy.m).filter((yb => yb !== Ty))];
      return (0, Sy.jsx)(Sy.Fragment, {
        children: (0, Sy.jsxs)("div", {
          className: "TexturePackCategory SettingsMenuRightInner",
          children: [(0, Sy.jsx)("div", {
            className: "TexturePackList",
            children: Vy.map((yb => (0, Sy.jsx)(mb, {
              id: yb,
              isSelected: yb === oy.e.getId(),
              setSelected: Cy
            }, yb)))
          }), oy.e.getId() === hy.m.CUSTOM && (0, Sy.jsx)(ey.d, {
            folderName: null !== (bb = oy.e.getFromFolderName()) && void 0 !== bb ? bb : null,
            onTexturePackUpdated: function(yb) {
              ly(yb, !0)
            },
            packOwner: "player"
          })]
        })
      })
    }

    function mb(yb) {
      let {
        id: bb,
        isSelected: Wy,
        setSelected: Zy,
        disabled: oy = !1
      } = yb;
      const [By, Ky] = (0, fy.useState)(!0), [ey, qb] = (0, fy.useState)(""), [sy, Ey] = (0, fy.useState)(""), [ly, mb] = (0, fy.useState)(""), Cy = (0, fy.useRef)({});
      return (0, fy.useEffect)((() => {
        (0, Uy.p)(bb).then((yb => {
          var bb;
          yb && (Cy.current = yb, Ky(!1), qb(Cy.current.metaData.name), Ey(Cy.current.metaData.author), mb(null !== (bb = Cy.current.metaData.previewImage) && void 0 !== bb ? bb : ""))
        })).catch((yb => {
          console.warn(`Failed to fetch texture pack ${bb}`, yb)
        }))
      }), [bb]), (0, Sy.jsxs)("div", {
        "data-pad-focusable": !0,
        "aria-disabled": oy || void 0,
        className: cb()("TexturePack", {
          Selected: Wy,
          Custom: bb === hy.m.CUSTOM,
          Disabled: oy
        }),
        onClick: () => {
          By || oy || Zy(Cy.current)
        },
        children: [(0, Sy.jsx)("div", {
          className: "TexturePackBg",
          style: {
            backgroundImage: ly ? `url(${ly})` : void 0
          }
        }), By && (0, Sy.jsx)("div", {
          className: "TexturePackName",
          children: (0, Sy.jsx)(Py.e, {})
        }), !By && ey && (0, Sy.jsx)("div", {
          className: "TexturePackName",
          children: ey
        }), !By && sy && (0, Sy.jsx)("div", {
          className: "TexturePackAuthor",
          children: sy
        })]
      })
    }
  },
  4222: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Zy
    });
    var Uy = Wy(898),
      hy = Wy.n(Uy),
      fy = Wy(952);

    function Zy(yb) {
      let {
        options: bb,
        value: Wy,
        onChange: Uy,
        ariaLabel: Zy
      } = yb;
      return (0, fy.jsx)("div", {
        className: "SegmentedToggle",
        role: "group",
        "aria-label": Zy,
        children: bb.map((yb => {
          const bb = yb.value === Wy;
          return (0, fy.jsx)("button", {
            type: "button",
            "aria-pressed": bb,
            className: hy()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: bb
            }),
            onClick: () => {
              bb || Uy(yb.value)
            },
            children: yb.label
          }, yb.value)
        }))
      })
    }
  },
  4229: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => fy,
      h: () => Zy
    });
    var Uy = Wy(55);
    const hy = new WeakMap,
      fy = yb => {
        var bb;
        const Wy = yb.closest("[data-pad-slider]");
        return Wy && null !== (bb = hy.get(Wy)) && void 0 !== bb ? bb : null
      },
      Zy = (yb, bb) => {
        const Wy = (0, Uy.useRef)(bb);
        Wy.current = bb, (0, Uy.useEffect)((() => {
          if (yb.current) return ((yb, bb) => (hy.set(yb, bb), () => {
            hy.get(yb) === bb && hy.delete(yb)
          }))(yb.current, {
            adjust: yb => {
              Wy.current.adjust(yb)
            },
            setFraction: yb => {
              Wy.current.setFraction(yb)
            },
            endDrag: () => {
              Wy.current.endDrag()
            }
          })
        }), [yb])
      }
  },
  4243: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => cb,
      c: () => Zy
    });
    var Uy = Wy(2481),
      hy = Wy(4246);
    let fy = null;

    function Zy(yb, bb) {
      fy = {
        pack: yb.metaData.id === Uy.c ? null : yb,
        prompt: bb
      }
    }

    function cb(yb, bb) {
      const Wy = fy;
      null !== Wy && (0, hy.c)(Wy.pack, yb) && (fy = null, bb && Wy.prompt())
    }
  },
  4246: (yb, bb, Wy) => {
    function Uy(yb, bb) {
      return hy(yb, bb)
    }

    function hy(yb, bb) {
      if (yb === bb) return !0;
      if ("object" !== typeof yb || "object" !== typeof bb || null === yb || null === bb || Array.isArray(yb) !== Array.isArray(bb)) return !1;
      const Wy = yb,
        Uy = bb,
        fy = Object.keys(Wy);
      return fy.length === Object.keys(Uy).length && fy.every((yb => Object.prototype.hasOwnProperty.call(Uy, yb) && hy(Wy[yb], Uy[yb])))
    }
    Wy.d(bb, {
      c: () => Uy
    })
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);