export const id = 104;
export const ids = [104];
export const modules = {
  4700: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Hb,
      g: () => ab,
      h: () => wb
    });
    hb(4707);
    var Bb = hb(1095),
      Ob = hb(958),
      Gb = hb.n(Ob),
      Ub = hb(1260),
      Lb = (hb(49), hb(4123)),
      Yb = hb(966),
      Sb = hb(1007);

    function ab(bb) {
      let {
        children: ub,
        label: hb,
        className: Ob,
        circleInfoText: Lb,
        disabled: ab,
        onLabelClick: Hb
      } = bb;
      const {
        t: wb
      } = (0, Bb.K)(), Zb = (0, Sb.jsxs)("div", {
        className: Gb()("Label", {
          ClickableLabel: void 0 !== Hb
        }),
        onClick: Hb,
        children: [wb(hb), Lb && (0, Sb.jsx)(Yb.e, {
          name: "circle-info"
        })]
      });
      return (0, Sb.jsxs)("div", {
        className: Gb()("LabeledInput", {
          [Ob]: Ob,
          DisabledLabelInput: ab
        }),
        children: [Lb && (0, Sb.jsx)(Ub.d, {
          tooltipInner: (0, Sb.jsx)("div", {
            className: "LabeledInputTooltip",
            children: wb(Lb)
          }),
          children: Zb
        }), !Lb && Zb, ub]
      })
    }

    function Hb(bb) {
      let {
        checked: ub,
        setChecked: hb
      } = bb;
      return (0, Sb.jsx)("div", {
        className: "OtherInput ClickableOtherInput",
        "data-pad-focusable": !0,
        onClick: bb => {
          hb(!ub)
        },
        children: (0, Sb.jsx)(Lb.d, {
          checked: ub,
          onChange: bb => {
            hb(bb.target.checked)
          },
          disabled: !1
        })
      })
    }

    function wb(bb) {
      let {
        checked: ub,
        setChecked: hb,
        disabled: Bb
      } = bb;
      return (0, Sb.jsx)("div", {
        className: Gb()("SwitchContainer", {
          SwitchContainerDisabled: Bb
        }),
        onClick: () => {
          Bb || hb(!ub)
        },
        children: (0, Sb.jsx)(Lb.d, {
          className: "SwitchCheckbox",
          checked: ub,
          onChange: bb => {
            hb(bb.target.checked)
          },
          disabled: !!Bb
        })
      })
    }
  },
  4710: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Sb
    });
    var Bb = hb(958),
      Ob = hb.n(Bb),
      Gb = hb(4393),
      Ub = hb(1095),
      Lb = hb(1007);
    const Yb = [...Gb.j, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function Sb(bb) {
      const {
        disabled: ub,
        hideWrapper: hb
      } = bb, {
        t: Bb
      } = (0, Ub.K)(), Sb = bb.advancedMode ? Yb.map((ub => [ub, bb.callbacks[ub]])) : Gb.j.map((ub => [ub, bb.callbacks[ub]])), Hb = (0, Lb.jsx)("div", {
        className: Ob()("PluginsGrid", {
          SectionBody: !hb
        }),
        children: Sb.map((bb => {
          let [hb, Bb] = bb;
          return (0, Lb.jsx)(ab, {
            plugin: hb,
            callbacks: Bb,
            disabled: ub
          }, hb)
        }))
      });
      return hb ? Hb : (0, Lb.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, Lb.jsx)("div", {
          className: "SectionTitle",
          children: Bb("worldBuilder:pluginsSection")
        }), Hb]
      })
    }

    function ab(bb) {
      let {
        plugin: ub,
        callbacks: {
          isEnabled: hb,
          Zx: Bb
        },
        disabled: Gb
      } = bb;
      const {
        t: Yb
      } = (0, Ub.K)(), Sb = hb();
      return (0, Lb.jsxs)("div", {
        className: Ob()("PluginCard", {
          PluginCardEnabled: Sb,
          PluginCardDisabledForm: Gb
        }),
        "data-pad-focusable": !0,
        "aria-disabled": Gb || void 0,
        onClick: () => {
          Gb || Bb(!Sb)
        },
        children: [(0, Lb.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, Lb.jsx)("img", {
            src: `/textures/games/classic/customGames/${ub}.png`,
            alt: ub
          })
        }), (0, Lb.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, Lb.jsx)("div", {
            className: "PluginCardTitle",
            children: Yb(Hb[ub])
          }), (0, Lb.jsx)("div", {
            className: "PluginCardDescription",
            children: Yb(wb[ub])
          })]
        }), (0, Lb.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: Yb(Sb ? "general:on" : "general:off")
        })]
      })
    }
    const Hb = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      wb = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  4694: (bb, ub, hb) => {
    hb.d(ub, {
      i: () => Ou,
      d: () => Bu,
      h: () => hu,
      m: () => Gu
    });
    var Bb = hb(49),
      Ob = hb(1249),
      Gb = hb(1357),
      Ub = hb(1585),
      Lb = hb(1095),
      Yb = hb(1242),
      Sb = hb(1260),
      ab = hb(966),
      Hb = hb(1124),
      wb = hb(958),
      Zb = hb.n(wb),
      Xb = hb(298),
      pb = hb(4393),
      ob = hb(1133),
      Ab = hb(4700),
      lb = hb(2925),
      Kb = hb(4710),
      Wb = hb(1007);

    function Cb(bb) {
      let {
        icon: ub,
        title: hb,
        disabled: Bb,
        children: Ob
      } = bb;
      return (0, Wb.jsxs)("div", {
        className: Zb()("ManageCard", {
          ManageCardDisabled: Bb
        }),
        children: [(0, Wb.jsxs)("div", {
          className: "ManageCardHead",
          children: [(0, Wb.jsx)("div", {
            className: "ManageCardIcon",
            children: (0, Wb.jsx)(ab.e, {
              name: ub
            })
          }), (0, Wb.jsx)("div", {
            children: (0, Wb.jsx)("h2", {
              className: "ManageCardTitle",
              children: hb
            })
          })]
        }), (0, Wb.jsxs)("div", {
          className: "ManageCardBody",
          children: [Ob, Bb && (0, Wb.jsx)("div", {
            className: "ManageCardDisabledOverlay"
          })]
        })]
      })
    }

    function db(bb) {
      let {
        label: ub,
        caption: hb,
        children: Bb
      } = bb;
      return (0, Wb.jsxs)("div", {
        className: "ManageStackedField",
        children: [(0, Wb.jsx)("div", {
          className: "ManageStackedFieldLabel",
          children: ub
        }), Bb, hb && (0, Wb.jsx)("div", {
          className: "ManageStackedFieldCaption",
          children: hb
        })]
      })
    }

    function rb(bb) {
      let {
        label: ub,
        caption: hb,
        disabled: Bb,
        children: Ob
      } = bb;
      return (0, Wb.jsxs)("div", {
        className: Zb()("ManageField", {
          ManageFieldDisabled: Bb
        }),
        children: [(0, Wb.jsxs)("div", {
          className: "ManageFieldText",
          children: [(0, Wb.jsx)("div", {
            className: "ManageFieldLabel",
            children: ub
          }), (0, Wb.jsx)("div", {
            className: "ManageFieldCaption",
            children: hb
          })]
        }), (0, Wb.jsx)("div", {
          className: "ManageFieldControl",
          children: Ob
        })]
      })
    }

    function jb(bb) {
      var ub, hb;
      let {
        schematicData: Bb,
        updateSchematicData: Ob,
        publishFormEnabled: Gb,
        formEnabled: Ub
      } = bb;
      const {
        t: Yb
      } = (0, Lb.K)(), Sb = !Gb, ab = {
        tpRequests: {
          isEnabled: () => !Bb.disableTpRequests,
          Zx: bb => Ob("disableTpRequests", !bb)
        },
        spawnProtection: {
          isEnabled: () => !Bb.disableSpawnProtection,
          Zx: bb => Ob("disableSpawnProtection", !bb)
        },
        spawnReset: {
          isEnabled: () => !!Bb.enableSpawnReset,
          Zx: bb => Ob("enableSpawnReset", bb)
        },
        smpMarketplace: {
          isEnabled: () => !!Bb.enableSmpMarketplace,
          Zx: bb => Ob("enableSmpMarketplace", bb)
        },
        survivalGuns: {
          isEnabled: () => !!Bb.enableSurvivalGuns,
          Zx: bb => Ob("enableSurvivalGuns", bb)
        },
        fallDamage: {
          isEnabled: () => !Bb.disableFallDamage,
          Zx: bb => Ob("disableFallDamage", !bb)
        },
        dayNight: {
          isEnabled: () => !!Bb.enableDayNight,
          Zx: bb => Ob("enableDayNight", bb)
        }
      };
      return (0, Wb.jsxs)(Wb.Fragment, {
        children: [!1 === Bb.schematicContainsSpawnBlock && (0, Wb.jsx)("div", {
          className: "ManageWarningBanner",
          children: Yb("worldBuilder:mustContainSpawnBlock")
        }), (0, Wb.jsxs)("div", {
          className: "ManageSettingsGrid",
          children: [(0, Wb.jsxs)(Cb, {
            icon: "globe",
            title: Yb("worldBuilder:worldRulesSection"),
            disabled: !Ub,
            children: [(0, Wb.jsx)(rb, {
              label: Yb("classic:defaultGamemode"),
              caption: Yb("classic:defaultGamemodeDescription"),
              disabled: Sb,
              children: (0, Wb.jsx)(lb.b, {
                controlClassName: "ManageDropdown",
                options: pb.I.map((bb => ({
                  value: bb,
                  label: Xb.x[bb]
                }))),
                value: Bb.defaultGamemode,
                onChange: bb => Ob("defaultGamemode", bb.value)
              })
            }), (0, Wb.jsx)(rb, {
              label: Yb("classic:voidDeathHeight"),
              caption: Yb("classic:voidDeathHeightDescription"),
              disabled: Sb,
              children: (0, Wb.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, Wb.jsx)("input", {
                  type: "number",
                  max: ob.J,
                  value: null !== (ub = Bb.voidDeathHeight) && void 0 !== ub ? ub : "",
                  onChange: bb => {
                    const ub = parseInt(bb.target.value);
                    Ob("voidDeathHeight", ub)
                  }
                }), (0, Wb.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: Yb("worldBuilder:blocksUnit")
                })]
              })
            }), (0, Wb.jsx)(rb, {
              label: Yb("classic:worldBorder"),
              caption: Yb("classic:worldBorderDescription"),
              disabled: Sb,
              children: (0, Wb.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, Wb.jsx)("input", {
                  type: "number",
                  min: ob.R,
                  max: ob.N,
                  placeholder: Yb("worldBuilder:noWorldBorderLimit"),
                  value: null !== (hb = Bb.worldBorder) && void 0 !== hb ? hb : "",
                  onChange: bb => {
                    const ub = parseInt(bb.target.value);
                    Ob("worldBorder", isNaN(ub) ? null : ub)
                  }
                }), (0, Wb.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: Yb("worldBuilder:blocksUnit")
                })]
              })
            }), (0, Wb.jsx)(rb, {
              label: Yb("classic:disableMobs"),
              caption: Yb("classic:disableMobsDescription"),
              disabled: Sb,
              children: (0, Wb.jsx)(Ab.h, {
                checked: Bb.disableMobs,
                setChecked: bb => Ob("disableMobs", bb),
                disabled: Sb
              })
            })]
          }), (0, Wb.jsxs)(Cb, {
            icon: "user-group",
            title: Yb("worldBuilder:playerAndLobbySection"),
            disabled: !Ub,
            children: [(0, Wb.jsx)(rb, {
              label: Yb("classic:disableKeepInventory"),
              caption: Yb("classic:disableKeepInventoryDescription"),
              disabled: Sb,
              children: (0, Wb.jsx)(Ab.h, {
                checked: Bb.disableKeepInventory,
                setChecked: bb => Ob("disableKeepInventory", bb),
                disabled: Sb
              })
            }), (0, Wb.jsx)(rb, {
              label: Yb("classic:persistInventory"),
              caption: Yb("classic:persistInventoryDescription"),
              disabled: Sb,
              children: (0, Wb.jsx)(lb.b, {
                controlClassName: "ManageDropdown",
                options: pb.k.map((bb => ({
                  value: bb,
                  label: Xb.j[bb]
                }))),
                value: Bb.persistInventory,
                onChange: bb => Ob("persistInventory", bb.value)
              })
            }), (0, Wb.jsx)(rb, {
              label: Yb("classic:persistWorld"),
              caption: Yb("classic:persistWorldDescription"),
              disabled: Sb,
              children: (0, Wb.jsx)(Ab.h, {
                checked: Bb.persistWorld,
                setChecked: bb => Ob("persistWorld", bb),
                disabled: Sb
              })
            }), (0, Wb.jsx)(rb, {
              label: Yb("classic:disableLobbySpawn"),
              caption: Yb("classic:disableLobbySpawnDescription"),
              disabled: Sb,
              children: (0, Wb.jsx)(Ab.h, {
                checked: Bb.disableLobbySpawn,
                setChecked: bb => Ob("disableLobbySpawn", bb),
                disabled: Sb
              })
            }), (0, Wb.jsx)(rb, {
              label: Yb("classic:hideLobbyCode"),
              caption: Yb("classic:hideLobbyCodeDescription"),
              disabled: Sb,
              children: (0, Wb.jsx)(Ab.h, {
                checked: Bb.hideLobbyCode,
                setChecked: bb => Ob("hideLobbyCode", bb),
                disabled: Sb
              })
            })]
          })]
        }), (0, Wb.jsx)(Cb, {
          icon: "layer-group",
          title: Yb("worldBuilder:pluginsSection"),
          disabled: !Ub,
          children: (0, Wb.jsx)(Kb.d, {
            callbacks: ab,
            disabled: Sb,
            advancedMode: !0,
            hideWrapper: !0
          })
        })]
      })
    }
    var nb = hb(4719),
      Db = hb(4123),
      xb = hb(1398),
      zb = hb(3278),
      gb = hb(1029),
      ib = hb(4672),
      vb = hb(4723),
      tb = hb(1359);
    const Jb = 50,
      eb = .3;
    async function Nb(bb) {
      const ub = await
      function(bb) {
        return new Promise(((ub, hb) => {
          const Bb = new FileReader;
          Bb.onload = () => ub(Bb.result), Bb.onerror = hb, Bb.readAsDataURL(bb)
        }))
      }(bb), hb = await
      function(bb) {
        return new Promise(((ub, hb) => {
          const Bb = new Image;
          Bb.onload = () => ub(Bb), Bb.onerror = () => hb(new Error("Failed to load image")), Bb.src = bb
        }))
      }(ub);
      if (hb.naturalHeight > hb.naturalWidth) throw new sb;
      const Bb = 1024 * Jb,
        {
          dataUrl: Ob,
          finalQuality: Gb
        } = function(bb, ub) {
          const hb = document.createElement("canvas");
          hb.width = bb.naturalWidth, hb.height = bb.naturalHeight, hb.getContext("2d").drawImage(bb, 0, 0);
          let Bb = .92,
            Ob = hb.toDataURL("image/jpeg", Bb);
          for (; .75 * Ob.length > ub && Bb > .05;) Bb -= .05, Ob = hb.toDataURL("image/jpeg", Bb);
          return {
            dataUrl: Ob,
            finalQuality: Bb
          }
        }(hb, Bb);
      if (Math.ceil(.75 * Ob.length) > Bb) throw new Mb;
      return {
        base64Jpg: Ob,
        heavilyCompressed: Gb < eb
      }
    }
    class sb extends Error {}
    class Mb extends Error {}
    var mb = function(bb) {
      return bb[bb.NOT_LOGGED_IN = 0] = "NOT_LOGGED_IN", bb[bb.THUMBNAIL_LIMIT_REACHED = 1] = "THUMBNAIL_LIMIT_REACHED", bb
    }(mb || {});

    function Ib(bb) {
      var ub;
      let {
        schematicId: hb,
        hasReadUploadPolicy: Ob,
        onPolicyValidationError: Yb,
        onThumbnailReady: Sb
      } = bb;
      const {
        t: wb
      } = (0, Lb.K)(), [Xb, pb] = (0, Bb.useState)(null), [ob, Ab] = (0, Bb.useState)(""), [lb, Kb] = (0, Bb.useState)(""), [Cb, db] = (0, Bb.useState)(!0), [rb, jb] = (0, Bb.useState)(!1), nb = (0, Bb.useRef)(!1), [Db, xb] = (0, Bb.useState)(null), [zb, gb] = (0, Bb.useState)(!1), [ib, tb] = (0, Bb.useState)(!1), Jb = (0, Bb.useRef)(0), {
        getRootProps: eb,
        getInputProps: mb,
        isDragActive: Ib
      } = (0, vb.e)({
        accept: {
          "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp"]
        },
        multiple: !1,
        onDrop: async bb => {
          if (0 === bb.length) return;
          const ub = bb[0],
            hb = ++Jb.current;
          xb(null), gb(!1), pb(null), Ab(ub.name);
          try {
            const bb = await Nb(ub);
            if (hb !== Jb.current) return;
            pb(bb), gb(bb.heavilyCompressed)
          } catch (Bb) {
            if (hb !== Jb.current) return;
            xb(wb(Bb instanceof sb ? "thumbnail:portraitImagesNotAllowed" : Bb instanceof Mb ? "thumbnail:couldNotCompressImage" : "thumbnail:failedToUploadImage"))
          }
        },
        useFsAccessApi: !1
      }), Pb = ob.length <= 30 ? ob : `${ob.slice(0,27)}...`, qb = null !== (ub = null === Xb || void 0 === Xb ? void 0 : Xb.base64Jpg) && void 0 !== ub ? ub : null, Eb = lb.trim(), yb = Eb.length >= Hb.q && Eb.length <= Hb.m, Vb = ib && !Xb && !Db, Fb = ib && !yb;
      return (0, Wb.jsxs)("div", {
        className: "ThumbnailUploadContainer",
        children: [(0, Wb.jsxs)("div", {
          ...eb({
            className: Zb()("ThumbnailUploadDropzone", {
              ActiveDrag: Ib,
              ValidationError: Vb
            })
          }),
          children: [(0, Wb.jsx)("input", {
            ...mb()
          }), !Ib && qb ? (0, Wb.jsxs)(Wb.Fragment, {
            children: [(0, Wb.jsxs)("div", {
              className: "ThumbnailAspectPreviews",
              children: [(0, Wb.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, Wb.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "1:1"
                }), (0, Wb.jsx)("div", {
                  className: "ThumbnailAspectFrame Square",
                  children: (0, Wb.jsx)("img", {
                    src: qb,
                    alt: "1:1 preview"
                  })
                })]
              }), (0, Wb.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, Wb.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "16:9"
                }), (0, Wb.jsx)("div", {
                  className: "ThumbnailAspectFrame Wide",
                  children: (0, Wb.jsx)("img", {
                    src: qb,
                    alt: "16:9 preview"
                  })
                })]
              })]
            }), (0, Wb.jsxs)("div", {
              children: [(0, Wb.jsx)("div", {
                className: "ThumbnailUploadInstructions Active",
                children: Pb
              }), (0, Wb.jsx)("div", {
                className: "ThumbnailUploadInstructions Preview",
                children: wb("thumbnail:preview")
              })]
            })]
          }) : (0, Wb.jsxs)(Wb.Fragment, {
            children: [(0, Wb.jsx)("div", {
              className: "ThumbnailUploadIcon",
              children: (0, Wb.jsx)(ab.e, {
                name: "image"
              })
            }), (0, Wb.jsx)("div", {
              className: "ThumbnailUploadInstructions",
              children: wb("thumbnail:dragImageHere")
            })]
          })]
        }), Vb && (0, Wb.jsx)("div", {
          className: "ThumbnailUploadError",
          children: wb("thumbnail:imageRequired")
        }), (0, Wb.jsx)(Ub.b, {
          className: Zb()("ThumbnailUploadNameInput", {
            ValidationError: Fb
          }),
          placeholderText: wb("thumbnail:thumbnailName"),
          defaultValue: lb,
          onValueChange: bb => {
            Kb(bb)
          },
          maxLength: Hb.m
        }), Fb && (0, Wb.jsx)("div", {
          className: "ThumbnailUploadError",
          children: wb("thumbnail:nameRequired", {
            min: Hb.q,
            max: Hb.m
          })
        }), (0, Wb.jsxs)("label", {
          className: "ThumbnailUploadCheckbox",
          children: [(0, Wb.jsx)("input", {
            type: "checkbox",
            checked: Cb,
            onChange: bb => {
              db(bb.target.checked)
            }
          }), wb("thumbnail:setAsThumbnailOnceApproved")]
        }), zb && (0, Wb.jsx)("div", {
          className: "ThumbnailUploadWarning",
          children: wb("thumbnail:heavyCompressionWarning")
        }), Db && (0, Wb.jsx)("div", {
          className: "ThumbnailUploadError",
          children: Db
        }), (0, Wb.jsx)(Gb.m, {
          disabled: rb,
          className: "ThumbnailUploadButton",
          onClick: async () => {
            if (tb(!0), !nb.current && Xb && yb && Ob) {
              nb.current = !0, jb(!0), xb(null);
              try {
                await Sb(Xb.base64Jpg, Eb, Cb ? hb : null)
              } catch (bb) {
                xb(bb.errorMessageForUser ? wb(bb.errorMessageForUser, bb.errorMessageTranslationParams) : wb("thumbnail:failedToUploadImage"))
              } finally {
                nb.current = !1, jb(!1)
              }
            } else Ob || Yb()
          },
          children: wb(rb ? "thumbnail:processing" : "thumbnail:uploadThumbnail")
        })]
      })
    }
    const Pb = 2e3;

    function qb(bb) {
      let {
        schematicId: ub,
        ownedThumbnailCount: hb,
        onClose: Ob,
        onThumbnailReady: Gb
      } = bb;
      const {
        t: Ub
      } = (0, Lb.K)(), {
        userContext: Yb
      } = (0, gb.d)(), [Sb, wb] = (0, Bb.useState)(!1), [Xb, pb] = (0, Bb.useState)(!1), [ob, Ab] = (0, Bb.useState)(!1), lb = (0, Bb.useRef)();
      (0, Bb.useEffect)((() => () => {
        clearTimeout(lb.current)
      }), []);
      const Kb = function(bb, ub) {
        const hb = [];
        return bb.isLoggedIn() || hb.push(mb.NOT_LOGGED_IN), ub >= Hb.fb && hb.push(mb.THUMBNAIL_LIMIT_REACHED), hb
      }(Yb, hb);
      if (Kb.length > 0) {
        const bb = {
          [mb.NOT_LOGGED_IN]: {
            key: "thumbnail:mustBeLoggedInToUpload"
          },
          [mb.THUMBNAIL_LIMIT_REACHED]: {
            key: "thumbnail:thumbnailLimitReachedPleaseDelete",
            params: {
              max: Hb.fb
            }
          }
        };
        return (0, Wb.jsxs)("div", {
          className: "ThumbnailUploaderInner",
          children: [(0, Wb.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: Ub("thumbnail:cannotUploadThumbnail")
          }), Kb.map(((ub, hb) => {
            const Bb = bb[ub];
            return (0, Wb.jsxs)("div", {
              className: "CannotUploadThumbnailItem",
              children: [(0, Wb.jsx)(ab.e, {
                name: "triangle-exclamation"
              }), (0, Wb.jsx)("span", {
                children: Ub(Bb.key, Bb.params)
              })]
            }, hb)
          }))]
        })
      }
      return (0, Wb.jsxs)("div", {
        className: Zb()("ThumbnailUploaderInner", {
          ThumbnailUploaderSuccess: Sb
        }),
        children: [Sb && (0, Wb.jsxs)("div", {
          className: "ThumbnailUploadSuccessOverlay",
          children: [(0, Wb.jsxs)("div", {
            className: "ThumbnailUploadSuccessIcon FullyFancyText AnimFadeInScaleUp",
            children: [(0, Wb.jsx)(ab.e, {
              name: "check"
            }), (0, Wb.jsx)(tb.b, {})]
          }), (0, Wb.jsx)("div", {
            className: "ThumbnailUploadSuccessText AnimFadeInScaleUp",
            children: Ub("thumbnail:thumbnailUploaded")
          })]
        }), (0, Wb.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: Ub("thumbnail:uploadThumbnail")
        }), (0, Wb.jsxs)("div", {
          className: "ThumbnailUploaderBody",
          children: [(0, Wb.jsxs)("div", {
            className: "ThumbnailUploaderLeft",
            children: [(0, Wb.jsx)("h3", {
              className: "SchematicPopupSubtitle",
              children: Ub("thumbnail:chooseImage", {
                maxSizeKb: Jb
              })
            }), (0, Wb.jsx)(Ib, {
              schematicId: ub,
              hasReadUploadPolicy: Xb,
              onPolicyValidationError: () => {
                Ab(!0)
              },
              onThumbnailReady: async (bb, ub, hb) => {
                await Gb(bb, ub, hb), wb(!0), lb.current = setTimeout(Ob, Pb)
              }
            })]
          }), (0, Wb.jsxs)("div", {
            className: "ThumbnailUploadPolicy",
            children: [(0, Wb.jsx)("h3", {
              className: "ThumbnailUploadPolicyTitle",
              children: Ub("thumbnail:uploadPolicy")
            }), (0, Wb.jsxs)("ul", {
              className: "ThumbnailUploadPolicyList",
              children: [(0, Wb.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, Wb.jsx)(ab.e, {
                  name: "check"
                }), (0, Wb.jsx)("span", {
                  children: Ub("thumbnail:policyFollowGuidelines")
                })]
              }), (0, Wb.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, Wb.jsx)(ab.e, {
                  name: "check"
                }), (0, Wb.jsx)("span", {
                  children: Ub("thumbnail:policyInGameAssets")
                })]
              }), (0, Wb.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, Wb.jsx)(ab.e, {
                  name: "check"
                }), (0, Wb.jsx)("span", {
                  children: Ub("thumbnail:policyLimitText")
                })]
              }), (0, Wb.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, Wb.jsx)(ab.e, {
                  name: "x"
                }), (0, Wb.jsx)("span", {
                  children: Ub("thumbnail:policyCopyrightContent")
                })]
              }), (0, Wb.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, Wb.jsx)(ab.e, {
                  name: "x"
                }), (0, Wb.jsx)("span", {
                  children: Ub("thumbnail:policyOutOfGameAssets")
                })]
              }), (0, Wb.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, Wb.jsx)(ab.e, {
                  name: "x"
                }), (0, Wb.jsx)("span", {
                  children: Ub("thumbnail:policyBloxdTags")
                })]
              }), (0, Wb.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, Wb.jsx)(ab.e, {
                  name: "x"
                }), (0, Wb.jsx)("span", {
                  children: Ub("thumbnail:policyMustReflectGame")
                })]
              })]
            }), (0, Wb.jsxs)("label", {
              className: Zb()("ThumbnailUploadCheckbox Policy", {
                ValidationError: ob && !Xb
              }),
              children: [(0, Wb.jsx)("input", {
                type: "checkbox",
                checked: Xb,
                onChange: bb => {
                  pb(bb.target.checked)
                }
              }), Ub("thumbnail:agreeToUploadPolicy")]
            }), ob && !Xb && (0, Wb.jsx)("div", {
              className: "ThumbnailPolicyError",
              children: Ub("thumbnail:policyRequired")
            })]
          })]
        })]
      })
    }
    var Eb = hb(1103);
    const yb = {
      "custom-game-bad-thumbnail": {
        reason: "thumbnail:rejectionInappropriate",
        tips: ["thumbnail:rejectionInappropriateTip1", "thumbnail:rejectionInappropriateTip2", "thumbnail:rejectionInappropriateTip3"]
      },
      "thumbnail-copyright-content": {
        reason: "thumbnail:rejectionCopyright",
        tips: ["thumbnail:rejectionCopyrightTip1", "thumbnail:rejectionCopyrightTip2", "thumbnail:rejectionCopyrightTip3"]
      },
      "thumbnail-random-irrelevant-content": {
        reason: "thumbnail:rejectionIrrelevant",
        tips: ["thumbnail:rejectionIrrelevantTip1", "thumbnail:rejectionIrrelevantTip2", "thumbnail:rejectionIrrelevantTip3"]
      },
      "thumbnail-sexual-content": {
        reason: "thumbnail:rejectionSexual",
        tips: ["thumbnail:rejectionSexualTip1", "thumbnail:rejectionSexualTip2", "thumbnail:rejectionSexualTip3"]
      },
      "thumbnail-substances-content": {
        reason: "thumbnail:rejectionSubstances",
        tips: ["thumbnail:rejectionSubstancesTip1", "thumbnail:rejectionSubstancesTip2"]
      },
      "thumbnail-unauthorized-bloxd-branding": {
        reason: "thumbnail:rejectionUnauthorisedBranding",
        tips: ["thumbnail:rejectionUnauthorisedBrandingTip1", "thumbnail:rejectionUnauthorisedBrandingTip2", "thumbnail:rejectionUnauthorisedBrandingTip3", "thumbnail:rejectionUnauthorisedBrandingTip4"]
      },
      "thumbnail-violent-gore-content": {
        reason: "thumbnail:rejectionViolence",
        tips: ["thumbnail:rejectionViolenceTip1", "thumbnail:rejectionViolenceTip2", "thumbnail:rejectionViolenceTip3", "thumbnail:rejectionViolenceTip4"]
      }
    };

    function Vb(bb) {
      var ub, hb;
      let {
        schematicData: Ub,
        updateSchematicData: Sb,
        publishFormEnabled: Hb,
        onClose: wb
      } = bb;
      const {
        t: Xb
      } = (0, Lb.K)(), {
        userContext: pb,
        isUserContextUpdating: ob
      } = (0, gb.d)(), Ab = (0, zb.d)(), [lb, Kb] = (0, Bb.useState)([]), [Cb, db] = (0, Bb.useState)([]), [rb, jb] = (0, Bb.useState)(!0), [nb, Db] = (0, Bb.useState)(null !== (ub = Ub.customThumbnailId) && void 0 !== ub ? ub : null), [vb, tb] = (0, Bb.useState)(null), Jb = (0, Bb.useRef)(null !== (hb = Ub.customThumbnailId) && void 0 !== hb ? hb : null), eb = (0, Bb.useRef)(0), Nb = (0, Bb.useRef)(null), sb = (0, Bb.useRef)(null), Mb = (0, Bb.useRef)(null), mb = (0, Bb.useRef)(!1);

      function Ib(bb, ub) {
        Mb.current && (clearTimeout(Mb.current), Mb.current = null), tb(bb), null !== bb && ub && (Mb.current = setTimeout((() => {
          tb(null), Mb.current = null
        }), 5e3))
      }(0, Bb.useEffect)((() => () => {
        clearTimeout(sb.current), clearTimeout(Mb.current)
      }), []);
      const Pb = (0, Bb.useCallback)((() => {
        jb(!0), xb.e.getOwnedThumbnails(pb).then((bb => {
          const ub = [],
            hb = [];
          for (const Bb of bb.thumbnails) Bb.rejectionPolicyId ? ub.push(Bb) : hb.push(Bb);
          ub.sort(((bb, ub) => bb.lastUpdatedAt - ub.lastUpdatedAt)), hb.sort(((bb, ub) => {
            const hb = bb.approved ? 1 : 0,
              Bb = (ub.approved ? 1 : 0) - hb;
            return 0 !== Bb ? Bb : ub.lastUpdatedAt - bb.lastUpdatedAt
          })), db(ub), Kb(hb)
        })).catch((bb => {
          console.error("Failed to fetch thumbnails:", bb)
        })).finally((() => {
          jb(!1)
        }))
      }), [pb]);
      async function yb(bb, ub, hb) {
        return xb.e.uploadSchematicThumbnail(pb, bb, ub, hb).then((() => {
          Ib({
            text: Xb("thumbnail:uploadedAwaitingModeration"),
            type: "success"
          }, !0), Pb()
        }))
      }

      function Vb() {
        eb.current = Date.now(), sb.current = null;
        const bb = Nb.current;
        Nb.current = null, Ib({
          text: Xb("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), xb.e.setSchematicThumbnail(pb, Ub.schematicId, bb).then((() => {
          Ab.current && (Ib({
            text: Xb("thumbnail:thumbnailUpdated"),
            type: "success"
          }, !0), Jb.current = bb, Sb("customThumbnailId", bb), Sb("customThumbnailBlurhash", void 0), Sb("customThumbnailVariants", void 0))
        })).catch((bb => {
          Ab.current && (Ib({
            text: bb.errorMessageForUser ? Xb(bb.errorMessageForUser, bb.errorMessageTranslationParams) : Xb("thumbnail:failedToSetThumbnail"),
            type: "error"
          }, !0), Db(Jb.current))
        }))
      }

      function kb(bb) {
        Db(bb), Nb.current = bb;
        const ub = Date.now() - eb.current;
        ub >= 1e3 ? Vb() : (Ib({
          text: Xb("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), sb.current || (sb.current = setTimeout((() => {
          Vb()
        }), 1e3 - ub)))
      }
      return (0, Bb.useEffect)((() => {
        !1 === ob && Pb()
      }), [ob, Pb]), Cb.length > 0 ? (0, Wb.jsx)(Fb, {
        rejectedThumbnails: Cb,
        userContext: pb,
        isMountedRef: Ab,
        onAcknowledged: Pb
      }) : (0, Wb.jsxs)("div", {
        className: "BloxdForm ThumbnailSection",
        children: [(0, Wb.jsxs)("div", {
          className: "SectionTitle",
          children: [Xb("thumbnail:gameThumbnail"), vb && (0, Wb.jsx)("span", {
            className: Zb()("ThumbnailActionMsg", `ThumbnailActionMsg--${vb.type}`),
            children: vb.text
          })]
        }), (0, Wb.jsx)("div", {
          className: "SectionBody",
          children: (0, Wb.jsxs)("div", {
            className: "ThumbnailGrid",
            children: [(0, Wb.jsxs)("div", {
              className: Zb()("ThumbnailGridItem ThumbnailGridItemDefault", {
                ThumbnailGridItemSelected: null === nb
              }),
              onClick: () => kb(null),
              children: [(0, Wb.jsx)(ib.b, {
                game: {
                  schematicId: Ub.schematicId,
                  imageBlurhash: Ub.imageBlurhash
                }
              }), (0, Wb.jsx)("div", {
                className: "ThumbnailGridItemLabel ThumbnailDefaultLabel",
                children: Xb("general:default")
              })]
            }), rb && (0, Wb.jsx)(Yb.c, {}), lb.map(((bb, ub) => (0, Wb.jsxs)("div", {
              className: Zb()("ThumbnailGridItem", {
                ThumbnailGridItemSelected: nb === bb.id,
                ThumbnailGridItemPending: !bb.approved
              }),
              onClick: () => {
                bb.approved && kb(bb.id)
              },
              children: [bb.approved && (0, Wb.jsx)("img", {
                src: `${Eb.clientSideServerUrls.s3Url}/customThumbnails/${bb.id}.jpg`,
                alt: "Thumbnail"
              }), bb.approved && (0, Wb.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: bb.name
              }), bb.id && (0, Wb.jsx)(Gb.H, {
                className: "ThumbnailDeleteButton",
                onClick: ub => async function(bb, ub, hb) {
                  bb.stopPropagation();
                  const Bb = await Ob.NotificationProvider.showCustomPopup({
                      body: bb => (0, Wb.jsx)(fb, {
                        thumbnailId: ub,
                        thumbnailName: hb,
                        onClose: ub => {
                          ub && (mb.current = !0), bb()
                        }
                      }),
                      middleScreenPopupClassName: "ThumbnailDeleteConfirmPopup",
                      onClose: wb
                    }).getResult(),
                    Gb = mb.current;
                  mb.current = !1, Gb && !0 === Bb && (Ab.current && Ib({
                    text: Xb("thumbnail:deletingThumbnail"),
                    type: "info"
                  }, !1), xb.e.deleteSchematicThumbnail(pb, ub).then((() => {
                    Ab.current && (Ib({
                      text: Xb("thumbnail:thumbnailDeleted"),
                      type: "success"
                    }, !0), Jb.current === ub && kb(null), Pb())
                  })).catch((bb => {
                    Ab.current && Ib({
                      text: bb.errorMessageForUser ? Xb(bb.errorMessageForUser, bb.errorMessageTranslationParams) : Xb("thumbnail:failedToDeleteThumbnail"),
                      type: "error"
                    }, !0)
                  })))
                }(ub, bb.id, bb.name),
                children: (0, Wb.jsx)(ab.e, {
                  name: "trash-can"
                })
              }), !bb.approved && (0, Wb.jsx)("div", {
                className: "ThumbnailUnapprovedIcon",
                children: (0, Wb.jsx)(ab.e, {
                  name: "hourglass-clock"
                })
              }), !bb.approved && (0, Wb.jsxs)("div", {
                className: "ThumbnailGridItemLabel ThumbnailPendingLabel",
                children: [bb.name, (0, Wb.jsx)("br", {}), Xb("thumbnail:pendingApproval")]
              })]
            }, ub))), (0, Wb.jsxs)("div", {
              className: Zb()("ThumbnailGridItem ThumbnailUploadTile", {
                ThumbnailUploadTileDisabled: !Hb
              }),
              onClick: () => {
                Hb && function(bb) {
                  let {
                    schematicId: ub,
                    ownedThumbnailCount: hb,
                    onThumbnailReady: Bb,
                    onClose: Gb
                  } = bb;
                  Ob.NotificationProvider.showCustomPopup({
                    body: bb => (0, Wb.jsx)(qb, {
                      schematicId: ub,
                      ownedThumbnailCount: hb,
                      onClose: bb,
                      onThumbnailReady: Bb
                    }),
                    middleScreenPopupClassName: "SchematicThumbnailPopup",
                    onClose: Gb,
                    unlockPointerKey: "schematicThumbnailUploaderPopup"
                  })
                }({
                  schematicId: Ub.schematicId,
                  ownedThumbnailCount: lb.length,
                  onThumbnailReady: yb,
                  onClose: wb
                })
              },
              children: [(0, Wb.jsx)(ab.e, {
                name: "plus"
              }), (0, Wb.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: Xb("thumbnail:uploadThumbnail")
              })]
            })]
          })
        })]
      })
    }

    function Fb(bb) {
      let {
        rejectedThumbnails: ub,
        userContext: hb,
        isMountedRef: Ob,
        onAcknowledged: Ub
      } = bb;
      const {
        t: Sb
      } = (0, Lb.K)(), [Hb, wb] = (0, Bb.useState)(!1), [Zb, Xb] = (0, Bb.useState)(!1), pb = function(bb) {
        const ub = new Map;
        for (const hb of bb) {
          const bb = hb.rejectionPolicyId,
            Bb = ub.get(bb);
          Bb ? Bb.push(hb) : ub.set(bb, [hb])
        }
        return ub
      }(ub);
      return (0, Wb.jsxs)("div", {
        className: "ThumbnailRejectionNotice",
        children: [(0, Wb.jsxs)("div", {
          className: "ThumbnailRejectionNoticeTitle",
          children: [(0, Wb.jsx)(ab.e, {
            name: "triangle-exclamation"
          }), " ", Sb("thumbnail:thumbnailsRejected"), " ", (0, Wb.jsx)(ab.e, {
            name: "triangle-exclamation"
          })]
        }), (0, Wb.jsx)("div", {
          className: "ThumbnailRejectionNoticeSubtitle",
          children: Sb("thumbnail:thumbnailsRejectedDescription")
        }), (0, Wb.jsx)("div", {
          className: "ThumbnailRejectionNoticeList",
          children: [...pb.entries()].map((bb => {
            let [ub, hb] = bb;
            const Bb = yb[ub];
            return (0, Wb.jsxs)("div", {
              className: "ThumbnailRejectionNoticeGroup",
              children: [(0, Wb.jsx)("div", {
                className: "ThumbnailRejectionNoticeItems",
                children: hb.map((bb => (0, Wb.jsxs)("div", {
                  className: "ThumbnailRejectionNoticeItem",
                  children: [(0, Wb.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemIcon",
                    children: (0, Wb.jsx)(ab.e, {
                      name: "image-slash"
                    })
                  }), (0, Wb.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemDetails",
                    children: (0, Wb.jsx)("div", {
                      className: "ThumbnailRejectionNoticeItemName",
                      children: bb.name
                    })
                  })]
                }, bb.id)))
              }), (0, Wb.jsxs)("div", {
                className: "ThumbnailRejectionNoticeGroupReason",
                children: [Sb("thumbnail:rejectionReason"), " ", Bb ? Sb(Bb.reason) : ub]
              }), Bb && (0, Wb.jsx)("ul", {
                className: "ThumbnailRejectionNoticeGroupTips",
                children: Bb.tips.map((bb => (0, Wb.jsx)("li", {
                  children: Sb(bb)
                }, bb)))
              })]
            }, ub)
          }))
        }), (0, Wb.jsxs)("label", {
          className: "ThumbnailRejectionNoticeCheckbox",
          children: [(0, Wb.jsx)(Db.d, {
            checked: Hb,
            onChange: bb => wb(bb.target.checked),
            disabled: Zb
          }), (0, Wb.jsx)("span", {
            children: Sb("thumbnail:haveReadRejectionReasons")
          })]
        }), (0, Wb.jsx)(Gb.m, {
          onClick: async function() {
            Xb(!0);
            const bb = await Promise.allSettled(ub.map((bb => xb.e.deleteSchematicThumbnail(hb, bb.id))));
            if (!Ob.current) return;
            const Bb = bb.filter((bb => "rejected" === bb.status));
            Bb.length > 0 && console.error("Some rejected thumbnails failed to delete:", Bb), Ub()
          },
          disabled: !Hb || Zb,
          className: "ThumbnailRejectionNoticeAcceptButton",
          children: Zb ? (0, Wb.jsx)(Yb.c, {}) : Sb("general:accept")
        })]
      })
    }

    function fb(bb) {
      let {
        thumbnailId: ub,
        thumbnailName: hb,
        onClose: Bb
      } = bb;
      const {
        t: Ob
      } = (0, Lb.K)();
      return (0, Wb.jsxs)("div", {
        className: "ThumbnailDeleteConfirm",
        children: [(0, Wb.jsx)("div", {
          className: "ThumbnailDeleteConfirmTitle",
          children: Ob("thumbnail:deleteThumbnail")
        }), (0, Wb.jsxs)("div", {
          className: "ThumbnailDeleteConfirmImageContainer",
          children: [(0, Wb.jsx)("img", {
            className: "ThumbnailDeleteConfirmImage",
            src: `${Eb.clientSideServerUrls.s3Url}/customThumbnails/${ub}.jpg`,
            alt: "Thumbnail to delete"
          }), (0, Wb.jsx)("div", {
            className: "ThumbnailGridItemLabel",
            children: hb
          })]
        }), (0, Wb.jsx)("div", {
          className: "ThumbnailDeleteConfirmSubtitle",
          children: Ob("thumbnail:deleteThumbnailConfirmation")
        }), (0, Wb.jsxs)("div", {
          className: "ThumbnailDeleteConfirmButtons",
          children: [(0, Wb.jsxs)(Gb.H, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => Bb(!0),
            children: [(0, Wb.jsx)(ab.e, {
              name: "trash-can"
            }), " ", Ob("general:delete")]
          }), (0, Wb.jsx)(Gb.g, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => Bb(!1),
            children: Ob("general:cancel")
          })]
        })]
      })
    }
    var kb = hb(2951),
      Tb = hb(4756),
      cb = hb(4760),
      Qb = hb(4807);

    function Rb(bb) {
      let {
        schematicData: ub,
        setTexturePack: hb,
        initializeTexturePack: Ob,
        publishFormEnabled: Gb
      } = bb;
      const {
        t: Ub
      } = (0, Lb.K)(), [Yb, Sb] = (0, Bb.useState)(null), [ab, Hb] = (0, Bb.useState)(null), [wb, Xb] = (0, Bb.useState)(!1), pb = (0, zb.d)(), ob = Gb && !wb, Ab = ub.customTexturePackKey;

      function lb(bb) {
        var ub;
        Sb(bb.metaData.id), Hb(null !== (ub = bb.metaData.fromFolderName) && void 0 !== ub ? ub : null), (bb.metaData.id !== kb.m.CUSTOM || bb.metaData.fromFolderName) && hb(bb)
      }
      return (0, Bb.useEffect)((() => {
        Ab && (Xb(!0), (0, Tb.e)(Ab).then((bb => {
          var ub;
          pb.current && (bb ? (Sb(bb.metaData.id), Hb(null !== (ub = bb.metaData.fromFolderName) && void 0 !== ub ? ub : null), Ob(bb)) : console.error(`No texture pack at ${Ab}`))
        })).catch((bb => {
          console.error("Error fetching texture pack: ", bb)
        })).finally((() => {
          Xb(!1)
        })))
      }), [Ab, Ob, pb]), (0, Wb.jsxs)("div", {
        className: "BloxdForm TexturePackSection",
        children: [(0, Wb.jsx)("div", {
          className: "SectionTitle",
          children: Ub("customTexturePack:customTexturePack")
        }), (0, Wb.jsxs)("div", {
          className: "TexturePackList",
          children: [(0, Wb.jsx)("div", {
            className: Zb()("TexturePack", {
              Selected: null === Yb && !wb,
              Disabled: !ob
            }),
            onClick: () => {
              ob && (Sb(null), hb(null), Hb(null))
            },
            children: (0, Wb.jsx)("div", {
              className: "TexturePackName",
              children: "No Override"
            })
          }), Object.values(kb.m).map((bb => (0, Wb.jsx)(cb.d, {
            id: bb,
            isSelected: bb === Yb,
            setSelected: lb,
            disabled: !ob
          }, bb)))]
        }), Yb === kb.m.CUSTOM && (0, Wb.jsx)(Qb.b, {
          folderName: ab,
          onTexturePackUpdated: lb,
          disabled: !ob,
          maxFileSizeMb: 25,
          packOwner: "customGame"
        })]
      })
    }
    var bu = hb(4822);

    function uu(bb) {
      var ub;
      let {
        gameCategory: hb,
        setGameCategory: Bb,
        disabled: Ob
      } = bb;
      const Ub = null !== (ub = (0, Xb.pb)(hb)) && void 0 !== ub ? ub : "other";
      return (0, Wb.jsxs)("div", {
        className: "GameCategoryPicker",
        children: [(0, Wb.jsx)(Ab.g, {
          label: "worldBuilder:gameCategoryGroup",
          className: "GameCategoryGroup",
          disabled: Ob,
          children: (0, Wb.jsx)(lb.b, {
            options: Xb.hb.map((bb => ({
              value: bb,
              label: Xb.db[bb]
            }))),
            value: Ub,
            onChange: bb => {
              bb.value !== Ub && Bb(Xb.Y[bb.value][0])
            }
          })
        }), (0, Wb.jsx)(Ab.g, {
          label: "worldBuilder:gameCategory",
          className: "GameCategory",
          disabled: Ob,
          children: (0, Wb.jsx)("div", {
            className: "GameCategoryOptions",
            children: Xb.Y[Ub].map((bb => (0, Wb.jsx)(Gb.O, {
              active: bb === hb,
              onClick: () => {
                Bb(bb)
              },
              children: (0, Xb.mb)(bb)
            }, bb)))
          })
        })]
      })
    }

    function hu(bb) {
      let {
        editor: ub,
        onClose: hb
      } = bb;
      const {
        t: Bb
      } = (0, Lb.K)(), {
        schematicData: Ob,
        updateSchematicData: Gb,
        publishFormEnabled: Yb,
        formEnabled: Sb
      } = ub;
      return (0, Wb.jsxs)(Wb.Fragment, {
        children: [(0, Wb.jsxs)(Cb, {
          icon: "pen-to-square",
          title: Bb("worldBuilder:basicsSection"),
          disabled: !Sb,
          children: [(0, Wb.jsx)(db, {
            label: Bb("general:name"),
            caption: Bb("worldBuilder:schematicNameTagsHint"),
            children: (0, Wb.jsx)(Ub.b, {
              className: "SchematicPageName",
              defaultValue: Ob.name,
              onValueChange: bb => Gb("name", bb),
              placeholderText: Bb("worldBuilder:schematicNamePlaceholder"),
              maxLength: Hb.Fb
            })
          }), (0, Wb.jsx)(db, {
            label: Bb("general:description"),
            children: (0, Wb.jsx)(Ub.b, {
              className: "SchematicPageDescription",
              useTextarea: !0,
              defaultValue: Ob.description,
              onValueChange: bb => Gb("description", bb),
              placeholderText: Bb("worldBuilder:schematicDescriptionPlaceholder"),
              maxLength: Hb.Bb
            })
          }), (0, Wb.jsx)(uu, {
            gameCategory: Ob.gameCategory,
            setGameCategory: bb => Gb("gameCategory", bb),
            disabled: !Yb
          }), !0 === Ob.gamePublished && (0, Wb.jsx)(Vb, {
            schematicData: Ob,
            updateSchematicData: Gb,
            publishFormEnabled: Yb,
            onClose: function() {
              null === hb || void 0 === hb || hb()
            }
          })]
        }), (0, Wb.jsx)(jb, {
          schematicData: Ob,
          updateSchematicData: Gb,
          publishFormEnabled: Yb,
          formEnabled: Sb
        }), !0 === Ob.gamePublished && (0, Wb.jsx)(Cb, {
          icon: "palette",
          title: Bb("worldBuilder:texturePackSection"),
          disabled: !Sb,
          children: (0, Wb.jsx)(Rb, {
            schematicData: Ob,
            setTexturePack: ub.setTexturePack,
            initializeTexturePack: ub.initializeTexturePack,
            publishFormEnabled: Yb
          })
        })]
      })
    }

    function Bu(bb) {
      let {
        editor: ub
      } = bb;
      const {
        t: hb
      } = (0, Lb.K)(), {
        schematicData: Bb,
        formEnabled: Ob,
        hasUnsavedChanges: Ub
      } = ub, Hb = Ob && Ub;
      return (0, Wb.jsxs)("footer", {
        className: "SchematicPageFooter",
        children: [Ob && Ub && (0, Wb.jsxs)("div", {
          className: "SchematicPageFooterStatus",
          children: [(0, Wb.jsx)("span", {
            className: "SchematicPageFooterStatusDot"
          }), hb("worldBuilder:unsavedChanges")]
        }), (0, Wb.jsx)(Sb.d, {
          tooltipInner: (0, Wb.jsx)("div", {
            className: "SaveButtonTooltip",
            children: hb(Ob && !Ub ? "worldBuilder:saveChangesNoneDescription" : "worldBuilder:saveChangesDescription")
          }),
          children: (0, Wb.jsxs)(Gb.e, {
            className: "SaveChangesButton",
            onClick: () => ub.saveSchematic(Bb.gamePublished),
            disabled: !Hb,
            children: [(0, Wb.jsxs)("span", {
              className: Ob ? "" : "SaveChangesButtonBodyHidden",
              children: [(0, Wb.jsx)(ab.e, {
                name: "wrench"
              }), " ", hb("worldBuilder:saveChanges")]
            }), !Ob && (0, Wb.jsx)(Yb.c, {})]
          })
        })]
      })
    }

    function Ou(bb) {
      let {
        schematic: ub,
        onSchematicUpdate: hb,
        onClose: Ob,
        inSourceWorld: Ub
      } = bb;
      const {
        t: Yb
      } = (0, Lb.K)();

      function Sb() {
        null === Ob || void 0 === Ob || Ob()
      }
      const ab = (0, bu.d)(ub, {
        onNavigateAway: Sb,
        inSourceWorld: Ub
      });
      return (0, Bb.useEffect)((() => {
        null === hb || void 0 === hb || hb(ab.schematicData)
      }), [ab.schematicData, hb]), (0, Wb.jsxs)("div", {
        className: "SchematicPage SchematicPagePopupVariant",
        children: [(0, Wb.jsxs)("div", {
          className: "SchematicPageBody",
          children: [(0, Wb.jsx)(Gb.d, {
            onClick: Sb,
            children: Yb("worldBuilder:back")
          }), (0, Wb.jsx)(Cb, {
            icon: "rocket-launch",
            title: Yb("worldBuilder:actionsSection"),
            disabled: !ab.formEnabled,
            children: (0, Wb.jsx)(nb.b, {
              editor: ab
            })
          }), (0, Wb.jsx)(hu, {
            editor: ab,
            onClose: Sb
          })]
        }), (0, Wb.jsx)(Bu, {
          editor: ab
        })]
      })
    }

    function Gu(bb) {
      let {
        schematic: ub,
        onSchematicUpdate: hb,
        onClose: Bb,
        inSourceWorld: Gb
      } = bb;
      Ob.NotificationProvider.showCustomPopup({
        body: bb => (0, Wb.jsx)(Ou, {
          schematic: ub,
          onSchematicUpdate: hb,
          onClose: bb,
          inSourceWorld: Gb
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: Bb,
        unlockPointerKey: "schematicPagePopup"
      })
    }
  },
  4719: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Hb
    });
    var Bb = hb(958),
      Ob = hb.n(Bb),
      Gb = hb(1095),
      Ub = hb(966),
      Lb = hb(1357),
      Yb = hb(1260),
      Sb = hb(1242),
      ab = hb(1007);

    function Hb(bb) {
      let {
        editor: ub,
        className: hb
      } = bb;
      const {
        t: Bb
      } = (0, Gb.K)(), {
        schematicData: Hb,
        formEnabled: wb,
        publishFormEnabled: Zb
      } = ub, Xb = !wb || !Zb;
      return (0, ab.jsxs)("div", {
        className: Ob()("PublishButtonContainer", hb),
        children: [ub.canEditSourceWorld && (0, ab.jsxs)(Lb.e, {
          onClick: ub.editSourceWorld,
          disabled: Xb,
          children: [(0, ab.jsx)(Ub.e, {
            name: "edit"
          }), " ", Bb("worldBuilder:editSourceWorld")]
        }), !Hb.gamePublished && (0, ab.jsx)(Yb.d, {
          tooltipInner: (0, ab.jsx)("div", {
            className: "PublishButtonTooltip",
            children: Bb("worldBuilder:publishAsGameDescription")
          }),
          children: (0, ab.jsxs)(Lb.m, {
            onClick: () => ub.saveSchematic(!0),
            disabled: Xb,
            children: [(0, ab.jsx)(Ub.e, {
              name: "rocket-launch"
            }), " ", Bb("worldBuilder:publishAsGame"), " ", (0, ab.jsx)(Ub.e, {
              name: "info-circle"
            })]
          })
        }), !0 === Hb.gamePublished && (0, ab.jsxs)(ab.Fragment, {
          children: [(0, ab.jsx)(Yb.d, {
            tooltipInner: (0, ab.jsx)("div", {
              className: "PublishButtonTooltip",
              children: Bb("worldBuilder:unpublishAsGameDescription")
            }),
            children: (0, ab.jsxs)(Lb.H, {
              onClick: ub.unpublishSchematic,
              disabled: Xb,
              children: [(0, ab.jsx)(Ub.e, {
                name: "rocket-launch"
              }), " ", Bb("worldBuilder:unpublishAsGame"), " ", (0, ab.jsx)(Ub.e, {
                name: "info-circle"
              })]
            })
          }), (0, ab.jsxs)(Lb.e, {
            onClick: ub.playGame,
            disabled: Xb,
            children: [(0, ab.jsx)(Ub.e, {
              name: "joystick"
            }), " ", Bb("general:playGame")]
          })]
        }), !wb && (0, ab.jsx)(Sb.c, {
          loaderType: "Secondary"
        })]
      })
    }
  },
  4756: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Ob
    });
    var Bb = hb(1103);
    async function Ob(bb) {
      const ub = await fetch(`${Bb.clientSideServerUrls.s3Url}/${bb}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === ub.status || 403 === ub.status) return null;
      if (!ub.ok) throw new Error(`Failed to download the texture pack (${ub.status})`);
      return await ub.json()
    }
  },
  4822: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => ob
    });
    var Bb = hb(49),
      Ob = hb(1227),
      Gb = hb(934),
      Ub = hb(148),
      Lb = hb(1447),
      Yb = hb(13),
      Sb = hb(1811),
      ab = hb(1398),
      Hb = hb(4353),
      wb = hb(1249),
      Zb = hb(1029),
      Xb = hb(1415);

    function pb(bb, ub) {
      return {
        schematicId: bb.schematicId,
        name: bb.name,
        description: bb.description,
        gamePublished: ub,
        gameCategory: bb.gameCategory,
        defaultGamemode: bb.defaultGamemode,
        voidDeathHeight: bb.voidDeathHeight,
        disableKeepInventory: bb.disableKeepInventory,
        disableTpRequests: bb.disableTpRequests,
        disableLobbySpawn: bb.disableLobbySpawn,
        disableMobs: bb.disableMobs,
        disableSpawnProtection: bb.disableSpawnProtection,
        disableFallDamage: bb.disableFallDamage,
        worldBorder: bb.worldBorder,
        hideLobbyCode: bb.hideLobbyCode,
        enableSmpMarketplace: bb.enableSmpMarketplace,
        enableSurvivalGuns: bb.enableSurvivalGuns,
        enableSpawnReset: bb.enableSpawnReset,
        enableDayNight: bb.enableDayNight,
        persistWorld: bb.persistWorld,
        persistInventory: bb.persistInventory
      }
    }

    function ob(bb) {
      let {
        onNavigateAway: ub,
        inSourceWorld: hb = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const {
        userContext: ob
      } = (0, Zb.d)(), Ab = (0, Xb.useNavigatePreserveSearch)(), [lb, Kb] = (0, Bb.useState)({
        ...bb
      }), [Wb, Cb] = (0, Bb.useState)("Enter"), [db, rb] = (0, Bb.useState)(void 0), jb = (0, Bb.useRef)(pb(bb, bb.gamePublished)), nb = (0, Bb.useRef)(void 0), Db = "Enter" === Wb, xb = ob.playerHasRank("developer") || ob.playerHasRank("admin") || "Enter" === Wb && !1 !== lb.schematicContainsSpawnBlock, zb = void 0 !== db && db !== nb.current || JSON.stringify(pb(lb, lb.gamePublished)) !== JSON.stringify(jb.current);

      function gb(bb, ub) {
        Kb((hb => ({
          ...hb,
          [bb]: ub
        })))
      }
      const ib = (0, Bb.useCallback)((bb => {
        nb.current = bb, rb(bb)
      }), []);

      function vb(bb) {
        Cb("Loading");
        const ub = pb(lb, bb),
          hb = db !== nb.current ? db : void 0;
        ab.e.updateSchematic(ob, ub, hb).then((hb => {
          let {
            customTexturePackKey: Bb
          } = hb;
          Cb("Success"), gb("customTexturePackKey", Bb), jb.current = ub, nb.current = void 0, rb(void 0), setTimeout((() => {
            gb("gamePublished", bb), Cb("Enter")
          }), 1e3)
        })).catch((bb => {
          var ub;
          (console.error("Failed to save schematic:", bb), Cb("Error"), bb instanceof Ub.b && bb.errorMessageForUser) && wb.NotificationProvider.showAlertPopup({
            title: "worldBuilder:changesNotSaved",
            subtitle: bb.errorMessageForUser,
            textOpts: {
              subtitle: null !== (ub = bb.errorMessageTranslationParams) && void 0 !== ub ? ub : void 0
            },
            confirmText: "general:ok"
          });
          setTimeout((() => {
            Cb("Enter")
          }), 1e3)
        }))
      }
      return {
        schematicData: lb,
        updateSchematicData: gb,
        setTexturePack: rb,
        initializeTexturePack: ib,
        updateState: Wb,
        formEnabled: Db,
        publishFormEnabled: xb,
        hasUnsavedChanges: zb,
        canEditSourceWorld: !hb,
        saveSchematic: vb,
        unpublishSchematic: function() {
          wb.NotificationProvider.showPromptPopup({
            icon: "rocket-launch",
            title: "worldBuilder:unpublishAsGameConfirmTitle",
            subtitle: "worldBuilder:unpublishAsGameConfirmSubtitle",
            confirmText: "worldBuilder:unpublishAsGame",
            cancelText: "general:cancel",
            unlockPointerKey: "unpublishGamePrompt"
          }).getResult().then((bb => {
            !0 === bb && vb(!1)
          }))
        },
        editSourceWorld: function() {
          Cb("Loading"), Hb.d.getSourceWorld(lb.schematicId).then((bb => {
            Sb.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, Yb.h)("other"), Ab((0, Ob.e)("classic", bb)), null === ub || void 0 === ub || ub()
          })).catch((bb => {
            console.error("Failed to get source world:", bb), Cb("Error"), setTimeout((() => {
              Cb("Enter")
            }), 1e3)
          }))
        },
        playGame: function() {
          Sb.gameBridge.send("leaveGame", {
            reloadPath: "/"
          }), Ab((0, Lb.r)((0, Gb.s)(lb.schematicId), lb)), null === ub || void 0 === ub || ub()
        }
      }
    }
  },
  4707: () => {}
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);