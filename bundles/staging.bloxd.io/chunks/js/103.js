export const id = 103;
export const ids = [103];
export const modules = {
  4641: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Mb,
      f: () => fb,
      h: () => Xb
    });
    sb(4643);
    var kb = sb(1197),
      Wb = sb(1033),
      ab = sb.n(Wb),
      Tb = sb(1341),
      Ub = (sb(64), sb(4129)),
      Ib = sb(1039),
      Hb = sb(1087);

    function fb(bb) {
      let {
        children: cb,
        label: sb,
        className: Wb,
        circleInfoText: Ub,
        disabled: fb,
        onLabelClick: Mb
      } = bb;
      const {
        t: Xb
      } = (0, kb.E)(), nb = (0, Hb.jsxs)("div", {
        className: ab()("Label", {
          ClickableLabel: void 0 !== Mb
        }),
        onClick: Mb,
        children: [Xb(sb), Ub && (0, Hb.jsx)(Ib.b, {
          name: "circle-info"
        })]
      });
      return (0, Hb.jsxs)("div", {
        className: ab()("LabeledInput", {
          [Wb]: Wb,
          DisabledLabelInput: fb
        }),
        children: [Ub && (0, Hb.jsx)(Tb.f, {
          tooltipInner: (0, Hb.jsx)("div", {
            className: "LabeledInputTooltip",
            children: Xb(Ub)
          }),
          children: nb
        }), !Ub && nb, cb]
      })
    }

    function Mb(bb) {
      let {
        checked: cb,
        setChecked: sb
      } = bb;
      return (0, Hb.jsx)("div", {
        className: "OtherInput ClickableOtherInput",
        "data-pad-focusable": !0,
        onClick: bb => {
          sb(!cb)
        },
        children: (0, Hb.jsx)(Ub.e, {
          checked: cb,
          onChange: bb => {
            sb(bb.target.checked)
          },
          disabled: !1
        })
      })
    }

    function Xb(bb) {
      let {
        checked: cb,
        setChecked: sb,
        disabled: kb
      } = bb;
      return (0, Hb.jsx)("div", {
        className: ab()("SwitchContainer", {
          SwitchContainerDisabled: kb
        }),
        onClick: () => {
          kb || sb(!cb)
        },
        children: (0, Hb.jsx)(Ub.e, {
          className: "SwitchCheckbox",
          checked: cb,
          onChange: bb => {
            sb(bb.target.checked)
          },
          disabled: !!kb
        })
      })
    }
  },
  4648: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Hb
    });
    var kb = sb(1033),
      Wb = sb.n(kb),
      ab = sb(4371),
      Tb = sb(1197),
      Ub = sb(1087);
    const Ib = [...ab.l, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function Hb(bb) {
      const {
        disabled: cb,
        hideWrapper: sb
      } = bb, {
        t: kb
      } = (0, Tb.E)(), Hb = bb.advancedMode ? Ib.map((cb => [cb, bb.callbacks[cb]])) : ab.l.map((cb => [cb, bb.callbacks[cb]])), Mb = (0, Ub.jsx)("div", {
        className: Wb()("PluginsGrid", {
          SectionBody: !sb
        }),
        children: Hb.map((bb => {
          let [sb, kb] = bb;
          return (0, Ub.jsx)(fb, {
            plugin: sb,
            callbacks: kb,
            disabled: cb
          }, sb)
        }))
      });
      return sb ? Mb : (0, Ub.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, Ub.jsx)("div", {
          className: "SectionTitle",
          children: kb("worldBuilder:pluginsSection")
        }), Mb]
      })
    }

    function fb(bb) {
      let {
        plugin: cb,
        callbacks: {
          isEnabled: sb,
          GV: kb
        },
        disabled: ab
      } = bb;
      const {
        t: Ib
      } = (0, Tb.E)(), Hb = sb();
      return (0, Ub.jsxs)("div", {
        className: Wb()("PluginCard", {
          PluginCardEnabled: Hb,
          PluginCardDisabledForm: ab
        }),
        "data-pad-focusable": !0,
        "aria-disabled": ab || void 0,
        onClick: () => {
          ab || kb(!Hb)
        },
        children: [(0, Ub.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, Ub.jsx)("img", {
            src: `/textures/games/classic/customGames/${cb}.png`,
            alt: cb
          })
        }), (0, Ub.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, Ub.jsx)("div", {
            className: "PluginCardTitle",
            children: Ib(Mb[cb])
          }), (0, Ub.jsx)("div", {
            className: "PluginCardDescription",
            children: Ib(Xb[cb])
          })]
        }), (0, Ub.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: Ib(Hb ? "general:on" : "general:off")
        })]
      })
    }
    const Mb = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      Xb = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  4638: (bb, cb, sb) => {
    sb.d(cb, {
      g: () => Wc,
      b: () => kc,
      c: () => sc,
      i: () => ac
    });
    var kb = sb(64),
      Wb = sb(1332),
      ab = sb(1431),
      Tb = sb(1664),
      Ub = sb(1197),
      Ib = sb(1327),
      Hb = sb(1341),
      fb = sb(1039),
      Mb = sb(1235),
      Xb = sb(1033),
      nb = sb.n(Xb),
      mb = sb(334),
      lb = sb(4371),
      Qb = sb(1253),
      eb = sb(4641),
      Cb = sb(2889),
      Nb = sb(4648),
      Vb = sb(1087);

    function Lb(bb) {
      let {
        icon: cb,
        title: sb,
        disabled: kb,
        children: Wb
      } = bb;
      return (0, Vb.jsxs)("div", {
        className: nb()("ManageCard", {
          ManageCardDisabled: kb
        }),
        children: [(0, Vb.jsxs)("div", {
          className: "ManageCardHead",
          children: [(0, Vb.jsx)("div", {
            className: "ManageCardIcon",
            children: (0, Vb.jsx)(fb.b, {
              name: cb
            })
          }), (0, Vb.jsx)("div", {
            children: (0, Vb.jsx)("h2", {
              className: "ManageCardTitle",
              children: sb
            })
          })]
        }), (0, Vb.jsxs)("div", {
          className: "ManageCardBody",
          children: [Wb, kb && (0, Vb.jsx)("div", {
            className: "ManageCardDisabledOverlay"
          })]
        })]
      })
    }

    function ub(bb) {
      let {
        label: cb,
        caption: sb,
        children: kb
      } = bb;
      return (0, Vb.jsxs)("div", {
        className: "ManageStackedField",
        children: [(0, Vb.jsx)("div", {
          className: "ManageStackedFieldLabel",
          children: cb
        }), kb, sb && (0, Vb.jsx)("div", {
          className: "ManageStackedFieldCaption",
          children: sb
        })]
      })
    }

    function Yb(bb) {
      let {
        label: cb,
        caption: sb,
        disabled: kb,
        children: Wb
      } = bb;
      return (0, Vb.jsxs)("div", {
        className: nb()("ManageField", {
          ManageFieldDisabled: kb
        }),
        children: [(0, Vb.jsxs)("div", {
          className: "ManageFieldText",
          children: [(0, Vb.jsx)("div", {
            className: "ManageFieldLabel",
            children: cb
          }), (0, Vb.jsx)("div", {
            className: "ManageFieldCaption",
            children: sb
          })]
        }), (0, Vb.jsx)("div", {
          className: "ManageFieldControl",
          children: Wb
        })]
      })
    }

    function hb(bb) {
      var cb, sb;
      let {
        schematicData: kb,
        updateSchematicData: Wb,
        publishFormEnabled: ab,
        formEnabled: Tb
      } = bb;
      const {
        t: Ib
      } = (0, Ub.E)(), Hb = !ab, fb = {
        tpRequests: {
          isEnabled: () => !kb.disableTpRequests,
          GV: bb => Wb("disableTpRequests", !bb)
        },
        spawnProtection: {
          isEnabled: () => !kb.disableSpawnProtection,
          GV: bb => Wb("disableSpawnProtection", !bb)
        },
        spawnReset: {
          isEnabled: () => !!kb.enableSpawnReset,
          GV: bb => Wb("enableSpawnReset", bb)
        },
        smpMarketplace: {
          isEnabled: () => !!kb.enableSmpMarketplace,
          GV: bb => Wb("enableSmpMarketplace", bb)
        },
        survivalGuns: {
          isEnabled: () => !!kb.enableSurvivalGuns,
          GV: bb => Wb("enableSurvivalGuns", bb)
        },
        fallDamage: {
          isEnabled: () => !kb.disableFallDamage,
          GV: bb => Wb("disableFallDamage", !bb)
        },
        dayNight: {
          isEnabled: () => !!kb.enableDayNight,
          GV: bb => Wb("enableDayNight", bb)
        }
      };
      return (0, Vb.jsxs)(Vb.Fragment, {
        children: [!1 === kb.schematicContainsSpawnBlock && (0, Vb.jsx)("div", {
          className: "ManageWarningBanner",
          children: Ib("worldBuilder:mustContainSpawnBlock")
        }), (0, Vb.jsxs)("div", {
          className: "ManageSettingsGrid",
          children: [(0, Vb.jsxs)(Lb, {
            icon: "globe",
            title: Ib("worldBuilder:worldRulesSection"),
            disabled: !Tb,
            children: [(0, Vb.jsx)(Yb, {
              label: Ib("classic:defaultGamemode"),
              caption: Ib("classic:defaultGamemodeDescription"),
              disabled: Hb,
              children: (0, Vb.jsx)(Cb.e, {
                controlClassName: "ManageDropdown",
                options: lb.D.map((bb => ({
                  value: bb,
                  label: mb.s[bb]
                }))),
                value: kb.defaultGamemode,
                onChange: bb => Wb("defaultGamemode", bb.value)
              })
            }), (0, Vb.jsx)(Yb, {
              label: Ib("classic:voidDeathHeight"),
              caption: Ib("classic:voidDeathHeightDescription"),
              disabled: Hb,
              children: (0, Vb.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, Vb.jsx)("input", {
                  type: "number",
                  max: Qb.z,
                  value: null !== (cb = kb.voidDeathHeight) && void 0 !== cb ? cb : "",
                  onChange: bb => {
                    const cb = parseInt(bb.target.value);
                    Wb("voidDeathHeight", cb)
                  }
                }), (0, Vb.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: Ib("worldBuilder:blocksUnit")
                })]
              })
            }), (0, Vb.jsx)(Yb, {
              label: Ib("classic:worldBorder"),
              caption: Ib("classic:worldBorderDescription"),
              disabled: Hb,
              children: (0, Vb.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, Vb.jsx)("input", {
                  type: "number",
                  min: Qb.G,
                  max: Qb.D,
                  placeholder: Ib("worldBuilder:noWorldBorderLimit"),
                  value: null !== (sb = kb.worldBorder) && void 0 !== sb ? sb : "",
                  onChange: bb => {
                    const cb = parseInt(bb.target.value);
                    Wb("worldBorder", isNaN(cb) ? null : cb)
                  }
                }), (0, Vb.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: Ib("worldBuilder:blocksUnit")
                })]
              })
            }), (0, Vb.jsx)(Yb, {
              label: Ib("classic:disableMobs"),
              caption: Ib("classic:disableMobsDescription"),
              disabled: Hb,
              children: (0, Vb.jsx)(eb.h, {
                checked: kb.disableMobs,
                setChecked: bb => Wb("disableMobs", bb),
                disabled: Hb
              })
            })]
          }), (0, Vb.jsxs)(Lb, {
            icon: "user-group",
            title: Ib("worldBuilder:playerAndLobbySection"),
            disabled: !Tb,
            children: [(0, Vb.jsx)(Yb, {
              label: Ib("classic:disableKeepInventory"),
              caption: Ib("classic:disableKeepInventoryDescription"),
              disabled: Hb,
              children: (0, Vb.jsx)(eb.h, {
                checked: kb.disableKeepInventory,
                setChecked: bb => Wb("disableKeepInventory", bb),
                disabled: Hb
              })
            }), (0, Vb.jsx)(Yb, {
              label: Ib("classic:persistInventory"),
              caption: Ib("classic:persistInventoryDescription"),
              disabled: Hb,
              children: (0, Vb.jsx)(Cb.e, {
                controlClassName: "ManageDropdown",
                options: lb.p.map((bb => ({
                  value: bb,
                  label: mb.k[bb]
                }))),
                value: kb.persistInventory,
                onChange: bb => Wb("persistInventory", bb.value)
              })
            }), (0, Vb.jsx)(Yb, {
              label: Ib("classic:persistWorld"),
              caption: Ib("classic:persistWorldDescription"),
              disabled: Hb,
              children: (0, Vb.jsx)(eb.h, {
                checked: kb.persistWorld,
                setChecked: bb => Wb("persistWorld", bb),
                disabled: Hb
              })
            }), (0, Vb.jsx)(Yb, {
              label: Ib("classic:disableLobbySpawn"),
              caption: Ib("classic:disableLobbySpawnDescription"),
              disabled: Hb,
              children: (0, Vb.jsx)(eb.h, {
                checked: kb.disableLobbySpawn,
                setChecked: bb => Wb("disableLobbySpawn", bb),
                disabled: Hb
              })
            }), (0, Vb.jsx)(Yb, {
              label: Ib("classic:hideLobbyCode"),
              caption: Ib("classic:hideLobbyCodeDescription"),
              disabled: Hb,
              children: (0, Vb.jsx)(eb.h, {
                checked: kb.hideLobbyCode,
                setChecked: bb => Wb("hideLobbyCode", bb),
                disabled: Hb
              })
            })]
          })]
        }), (0, Vb.jsx)(Lb, {
          icon: "layer-group",
          title: Ib("worldBuilder:pluginsSection"),
          disabled: !Tb,
          children: (0, Vb.jsx)(Nb.b, {
            callbacks: fb,
            disabled: Hb,
            advancedMode: !0,
            hideWrapper: !0
          })
        })]
      })
    }
    var Jb = sb(4656),
      gb = sb(4129),
      Bb = sb(1474),
      tb = sb(3281),
      yb = sb(1117),
      Pb = sb(4615),
      Db = sb(4665),
      Eb = sb(1436);
    const ib = 50,
      Ob = .3;
    async function Gb(bb) {
      const cb = await
      function(bb) {
        return new Promise(((cb, sb) => {
          const kb = new FileReader;
          kb.onload = () => cb(kb.result), kb.onerror = sb, kb.readAsDataURL(bb)
        }))
      }(bb), sb = await
      function(bb) {
        return new Promise(((cb, sb) => {
          const kb = new Image;
          kb.onload = () => cb(kb), kb.onerror = () => sb(new Error("Failed to load image")), kb.src = bb
        }))
      }(cb);
      if (sb.naturalHeight > sb.naturalWidth) throw new Kb;
      const kb = 1024 * ib,
        {
          dataUrl: Wb,
          finalQuality: ab
        } = function(bb, cb) {
          const sb = document.createElement("canvas");
          sb.width = bb.naturalWidth, sb.height = bb.naturalHeight, sb.getContext("2d").drawImage(bb, 0, 0);
          let kb = .92,
            Wb = sb.toDataURL("image/jpeg", kb);
          for (; .75 * Wb.length > cb && kb > .05;) kb -= .05, Wb = sb.toDataURL("image/jpeg", kb);
          return {
            dataUrl: Wb,
            finalQuality: kb
          }
        }(sb, kb);
      if (Math.ceil(.75 * Wb.length) > kb) throw new Zb;
      return {
        base64Jpg: Wb,
        heavilyCompressed: ab < Ob
      }
    }
    class Kb extends Error {}
    class Zb extends Error {}
    var zb = function(bb) {
      return bb[bb.NOT_LOGGED_IN = 0] = "NOT_LOGGED_IN", bb[bb.THUMBNAIL_LIMIT_REACHED = 1] = "THUMBNAIL_LIMIT_REACHED", bb
    }(zb || {});

    function qb(bb) {
      var cb;
      let {
        schematicId: sb,
        hasReadUploadPolicy: Wb,
        onPolicyValidationError: Ib,
        onThumbnailReady: Hb
      } = bb;
      const {
        t: Xb
      } = (0, Ub.E)(), [mb, lb] = (0, kb.useState)(null), [Qb, eb] = (0, kb.useState)(""), [Cb, Nb] = (0, kb.useState)(""), [Lb, ub] = (0, kb.useState)(!0), [Yb, hb] = (0, kb.useState)(!1), Jb = (0, kb.useRef)(!1), [gb, Bb] = (0, kb.useState)(null), [tb, yb] = (0, kb.useState)(!1), [Pb, Eb] = (0, kb.useState)(!1), ib = (0, kb.useRef)(0), {
        getRootProps: Ob,
        getInputProps: zb,
        isDragActive: qb
      } = (0, Db.c)({
        accept: {
          "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp"]
        },
        multiple: !1,
        onDrop: async bb => {
          if (0 === bb.length) return;
          const cb = bb[0],
            sb = ++ib.current;
          Bb(null), yb(!1), lb(null), eb(cb.name);
          try {
            const bb = await Gb(cb);
            if (sb !== ib.current) return;
            lb(bb), yb(bb.heavilyCompressed)
          } catch (kb) {
            if (sb !== ib.current) return;
            Bb(Xb(kb instanceof Kb ? "thumbnail:portraitImagesNotAllowed" : kb instanceof Zb ? "thumbnail:couldNotCompressImage" : "thumbnail:failedToUploadImage"))
          }
        },
        useFsAccessApi: !1
      }), db = Qb.length <= 30 ? Qb : `${Qb.slice(0,27)}...`, Ab = null !== (cb = null === mb || void 0 === mb ? void 0 : mb.base64Jpg) && void 0 !== cb ? cb : null, wb = Cb.trim(), rb = wb.length >= Mb.l && wb.length <= Mb.i, ob = Pb && !mb && !gb, Sb = Pb && !rb;
      return (0, Vb.jsxs)("div", {
        className: "ThumbnailUploadContainer",
        children: [(0, Vb.jsxs)("div", {
          ...Ob({
            className: nb()("ThumbnailUploadDropzone", {
              ActiveDrag: qb,
              ValidationError: ob
            })
          }),
          children: [(0, Vb.jsx)("input", {
            ...zb()
          }), !qb && Ab ? (0, Vb.jsxs)(Vb.Fragment, {
            children: [(0, Vb.jsxs)("div", {
              className: "ThumbnailAspectPreviews",
              children: [(0, Vb.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, Vb.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "1:1"
                }), (0, Vb.jsx)("div", {
                  className: "ThumbnailAspectFrame Square",
                  children: (0, Vb.jsx)("img", {
                    src: Ab,
                    alt: "1:1 preview"
                  })
                })]
              }), (0, Vb.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, Vb.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "16:9"
                }), (0, Vb.jsx)("div", {
                  className: "ThumbnailAspectFrame Wide",
                  children: (0, Vb.jsx)("img", {
                    src: Ab,
                    alt: "16:9 preview"
                  })
                })]
              })]
            }), (0, Vb.jsxs)("div", {
              children: [(0, Vb.jsx)("div", {
                className: "ThumbnailUploadInstructions Active",
                children: db
              }), (0, Vb.jsx)("div", {
                className: "ThumbnailUploadInstructions Preview",
                children: Xb("thumbnail:preview")
              })]
            })]
          }) : (0, Vb.jsxs)(Vb.Fragment, {
            children: [(0, Vb.jsx)("div", {
              className: "ThumbnailUploadIcon",
              children: (0, Vb.jsx)(fb.b, {
                name: "image"
              })
            }), (0, Vb.jsx)("div", {
              className: "ThumbnailUploadInstructions",
              children: Xb("thumbnail:dragImageHere")
            })]
          })]
        }), ob && (0, Vb.jsx)("div", {
          className: "ThumbnailUploadError",
          children: Xb("thumbnail:imageRequired")
        }), (0, Vb.jsx)(Tb.c, {
          className: nb()("ThumbnailUploadNameInput", {
            ValidationError: Sb
          }),
          placeholderText: Xb("thumbnail:thumbnailName"),
          defaultValue: Cb,
          onValueChange: bb => {
            Nb(bb)
          },
          maxLength: Mb.i
        }), Sb && (0, Vb.jsx)("div", {
          className: "ThumbnailUploadError",
          children: Xb("thumbnail:nameRequired", {
            min: Mb.l,
            max: Mb.i
          })
        }), (0, Vb.jsxs)("label", {
          className: "ThumbnailUploadCheckbox",
          children: [(0, Vb.jsx)("input", {
            type: "checkbox",
            checked: Lb,
            onChange: bb => {
              ub(bb.target.checked)
            }
          }), Xb("thumbnail:setAsThumbnailOnceApproved")]
        }), tb && (0, Vb.jsx)("div", {
          className: "ThumbnailUploadWarning",
          children: Xb("thumbnail:heavyCompressionWarning")
        }), gb && (0, Vb.jsx)("div", {
          className: "ThumbnailUploadError",
          children: gb
        }), (0, Vb.jsx)(ab.n, {
          disabled: Yb,
          className: "ThumbnailUploadButton",
          onClick: async () => {
            if (Eb(!0), !Jb.current && mb && rb && Wb) {
              Jb.current = !0, hb(!0), Bb(null);
              try {
                await Hb(mb.base64Jpg, wb, Lb ? sb : null)
              } catch (bb) {
                Bb(bb.errorMessageForUser ? Xb(bb.errorMessageForUser, bb.errorMessageTranslationParams) : Xb("thumbnail:failedToUploadImage"))
              } finally {
                Jb.current = !1, hb(!1)
              }
            } else Wb || Ib()
          },
          children: Xb(Yb ? "thumbnail:processing" : "thumbnail:uploadThumbnail")
        })]
      })
    }
    const db = 2e3;

    function Ab(bb) {
      let {
        schematicId: cb,
        ownedThumbnailCount: sb,
        onClose: Wb,
        onThumbnailReady: ab
      } = bb;
      const {
        t: Tb
      } = (0, Ub.E)(), {
        userContext: Ib
      } = (0, yb.c)(), [Hb, Xb] = (0, kb.useState)(!1), [mb, lb] = (0, kb.useState)(!1), [Qb, eb] = (0, kb.useState)(!1), Cb = (0, kb.useRef)();
      (0, kb.useEffect)((() => () => {
        clearTimeout(Cb.current)
      }), []);
      const Nb = function(bb, cb) {
        const sb = [];
        return bb.isLoggedIn() || sb.push(zb.NOT_LOGGED_IN), cb >= Mb.O && sb.push(zb.THUMBNAIL_LIMIT_REACHED), sb
      }(Ib, sb);
      if (Nb.length > 0) {
        const bb = {
          [zb.NOT_LOGGED_IN]: {
            key: "thumbnail:mustBeLoggedInToUpload"
          },
          [zb.THUMBNAIL_LIMIT_REACHED]: {
            key: "thumbnail:thumbnailLimitReachedPleaseDelete",
            params: {
              max: Mb.O
            }
          }
        };
        return (0, Vb.jsxs)("div", {
          className: "ThumbnailUploaderInner",
          children: [(0, Vb.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: Tb("thumbnail:cannotUploadThumbnail")
          }), Nb.map(((cb, sb) => {
            const kb = bb[cb];
            return (0, Vb.jsxs)("div", {
              className: "CannotUploadThumbnailItem",
              children: [(0, Vb.jsx)(fb.b, {
                name: "triangle-exclamation"
              }), (0, Vb.jsx)("span", {
                children: Tb(kb.key, kb.params)
              })]
            }, sb)
          }))]
        })
      }
      return (0, Vb.jsxs)("div", {
        className: nb()("ThumbnailUploaderInner", {
          ThumbnailUploaderSuccess: Hb
        }),
        children: [Hb && (0, Vb.jsxs)("div", {
          className: "ThumbnailUploadSuccessOverlay",
          children: [(0, Vb.jsxs)("div", {
            className: "ThumbnailUploadSuccessIcon FullyFancyText AnimFadeInScaleUp",
            children: [(0, Vb.jsx)(fb.b, {
              name: "check"
            }), (0, Vb.jsx)(Eb.e, {})]
          }), (0, Vb.jsx)("div", {
            className: "ThumbnailUploadSuccessText AnimFadeInScaleUp",
            children: Tb("thumbnail:thumbnailUploaded")
          })]
        }), (0, Vb.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: Tb("thumbnail:uploadThumbnail")
        }), (0, Vb.jsxs)("div", {
          className: "ThumbnailUploaderBody",
          children: [(0, Vb.jsxs)("div", {
            className: "ThumbnailUploaderLeft",
            children: [(0, Vb.jsx)("h3", {
              className: "SchematicPopupSubtitle",
              children: Tb("thumbnail:chooseImage", {
                maxSizeKb: ib
              })
            }), (0, Vb.jsx)(qb, {
              schematicId: cb,
              hasReadUploadPolicy: mb,
              onPolicyValidationError: () => {
                eb(!0)
              },
              onThumbnailReady: async (bb, cb, sb) => {
                await ab(bb, cb, sb), Xb(!0), Cb.current = setTimeout(Wb, db)
              }
            })]
          }), (0, Vb.jsxs)("div", {
            className: "ThumbnailUploadPolicy",
            children: [(0, Vb.jsx)("h3", {
              className: "ThumbnailUploadPolicyTitle",
              children: Tb("thumbnail:uploadPolicy")
            }), (0, Vb.jsxs)("ul", {
              className: "ThumbnailUploadPolicyList",
              children: [(0, Vb.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, Vb.jsx)(fb.b, {
                  name: "check"
                }), (0, Vb.jsx)("span", {
                  children: Tb("thumbnail:policyFollowGuidelines")
                })]
              }), (0, Vb.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, Vb.jsx)(fb.b, {
                  name: "check"
                }), (0, Vb.jsx)("span", {
                  children: Tb("thumbnail:policyInGameAssets")
                })]
              }), (0, Vb.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, Vb.jsx)(fb.b, {
                  name: "check"
                }), (0, Vb.jsx)("span", {
                  children: Tb("thumbnail:policyLimitText")
                })]
              }), (0, Vb.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, Vb.jsx)(fb.b, {
                  name: "x"
                }), (0, Vb.jsx)("span", {
                  children: Tb("thumbnail:policyCopyrightContent")
                })]
              }), (0, Vb.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, Vb.jsx)(fb.b, {
                  name: "x"
                }), (0, Vb.jsx)("span", {
                  children: Tb("thumbnail:policyOutOfGameAssets")
                })]
              }), (0, Vb.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, Vb.jsx)(fb.b, {
                  name: "x"
                }), (0, Vb.jsx)("span", {
                  children: Tb("thumbnail:policyBloxdTags")
                })]
              }), (0, Vb.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, Vb.jsx)(fb.b, {
                  name: "x"
                }), (0, Vb.jsx)("span", {
                  children: Tb("thumbnail:policyMustReflectGame")
                })]
              })]
            }), (0, Vb.jsxs)("label", {
              className: nb()("ThumbnailUploadCheckbox Policy", {
                ValidationError: Qb && !mb
              }),
              children: [(0, Vb.jsx)("input", {
                type: "checkbox",
                checked: mb,
                onChange: bb => {
                  lb(bb.target.checked)
                }
              }), Tb("thumbnail:agreeToUploadPolicy")]
            }), Qb && !mb && (0, Vb.jsx)("div", {
              className: "ThumbnailPolicyError",
              children: Tb("thumbnail:policyRequired")
            })]
          })]
        })]
      })
    }
    var wb = sb(1208);
    const rb = {
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

    function ob(bb) {
      var cb, sb;
      let {
        schematicData: Tb,
        updateSchematicData: Hb,
        publishFormEnabled: Mb,
        onClose: Xb
      } = bb;
      const {
        t: mb
      } = (0, Ub.E)(), {
        userContext: lb,
        isUserContextUpdating: Qb
      } = (0, yb.c)(), eb = (0, tb.e)(), [Cb, Nb] = (0, kb.useState)([]), [Lb, ub] = (0, kb.useState)([]), [Yb, hb] = (0, kb.useState)(!0), [Jb, gb] = (0, kb.useState)(null !== (cb = Tb.customThumbnailId) && void 0 !== cb ? cb : null), [Db, Eb] = (0, kb.useState)(null), ib = (0, kb.useRef)(null !== (sb = Tb.customThumbnailId) && void 0 !== sb ? sb : null), Ob = (0, kb.useRef)(0), Gb = (0, kb.useRef)(null), Kb = (0, kb.useRef)(null), Zb = (0, kb.useRef)(null), zb = (0, kb.useRef)(!1);

      function qb(bb, cb) {
        Zb.current && (clearTimeout(Zb.current), Zb.current = null), Eb(bb), null !== bb && cb && (Zb.current = setTimeout((() => {
          Eb(null), Zb.current = null
        }), 5e3))
      }(0, kb.useEffect)((() => () => {
        clearTimeout(Kb.current), clearTimeout(Zb.current)
      }), []);
      const db = (0, kb.useCallback)((() => {
        hb(!0), Bb.b.getOwnedThumbnails(lb).then((bb => {
          const cb = [],
            sb = [];
          for (const kb of bb.thumbnails) kb.rejectionPolicyId ? cb.push(kb) : sb.push(kb);
          cb.sort(((bb, cb) => bb.lastUpdatedAt - cb.lastUpdatedAt)), sb.sort(((bb, cb) => {
            const sb = bb.approved ? 1 : 0,
              kb = (cb.approved ? 1 : 0) - sb;
            return 0 !== kb ? kb : cb.lastUpdatedAt - bb.lastUpdatedAt
          })), ub(cb), Nb(sb)
        })).catch((bb => {
          console.error("Failed to fetch thumbnails:", bb)
        })).finally((() => {
          hb(!1)
        }))
      }), [lb]);
      async function rb(bb, cb, sb) {
        return Bb.b.uploadSchematicThumbnail(lb, bb, cb, sb).then((() => {
          qb({
            text: mb("thumbnail:uploadedAwaitingModeration"),
            type: "success"
          }, !0), db()
        }))
      }

      function ob() {
        Ob.current = Date.now(), Kb.current = null;
        const bb = Gb.current;
        Gb.current = null, qb({
          text: mb("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), Bb.b.setSchematicThumbnail(lb, Tb.schematicId, bb).then((() => {
          eb.current && (qb({
            text: mb("thumbnail:thumbnailUpdated"),
            type: "success"
          }, !0), ib.current = bb, Hb("customThumbnailId", bb), Hb("customThumbnailBlurhash", void 0), Hb("customThumbnailVariants", void 0))
        })).catch((bb => {
          eb.current && (qb({
            text: bb.errorMessageForUser ? mb(bb.errorMessageForUser, bb.errorMessageTranslationParams) : mb("thumbnail:failedToSetThumbnail"),
            type: "error"
          }, !0), gb(ib.current))
        }))
      }

      function vb(bb) {
        gb(bb), Gb.current = bb;
        const cb = Date.now() - Ob.current;
        cb >= 1e3 ? ob() : (qb({
          text: mb("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), Kb.current || (Kb.current = setTimeout((() => {
          ob()
        }), 1e3 - cb)))
      }
      return (0, kb.useEffect)((() => {
        !1 === Qb && db()
      }), [Qb, db]), Lb.length > 0 ? (0, Vb.jsx)(Sb, {
        rejectedThumbnails: Lb,
        userContext: lb,
        isMountedRef: eb,
        onAcknowledged: db
      }) : (0, Vb.jsxs)("div", {
        className: "BloxdForm ThumbnailSection",
        children: [(0, Vb.jsxs)("div", {
          className: "SectionTitle",
          children: [mb("thumbnail:gameThumbnail"), Db && (0, Vb.jsx)("span", {
            className: nb()("ThumbnailActionMsg", `ThumbnailActionMsg--${Db.type}`),
            children: Db.text
          })]
        }), (0, Vb.jsx)("div", {
          className: "SectionBody",
          children: (0, Vb.jsxs)("div", {
            className: "ThumbnailGrid",
            children: [(0, Vb.jsxs)("div", {
              className: nb()("ThumbnailGridItem ThumbnailGridItemDefault", {
                ThumbnailGridItemSelected: null === Jb
              }),
              onClick: () => vb(null),
              children: [(0, Vb.jsx)(Pb.c, {
                game: {
                  schematicId: Tb.schematicId,
                  imageBlurhash: Tb.imageBlurhash
                }
              }), (0, Vb.jsx)("div", {
                className: "ThumbnailGridItemLabel ThumbnailDefaultLabel",
                children: mb("general:default")
              })]
            }), Yb && (0, Vb.jsx)(Ib.d, {}), Cb.map(((bb, cb) => (0, Vb.jsxs)("div", {
              className: nb()("ThumbnailGridItem", {
                ThumbnailGridItemSelected: Jb === bb.id,
                ThumbnailGridItemPending: !bb.approved
              }),
              onClick: () => {
                bb.approved && vb(bb.id)
              },
              children: [bb.approved && (0, Vb.jsx)("img", {
                src: `${wb.clientSideServerUrls.s3Url}/customThumbnails/${bb.id}.jpg`,
                alt: "Thumbnail"
              }), bb.approved && (0, Vb.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: bb.name
              }), bb.id && (0, Vb.jsx)(ab.G, {
                className: "ThumbnailDeleteButton",
                onClick: cb => async function(bb, cb, sb) {
                  bb.stopPropagation();
                  const kb = await Wb.NotificationProvider.showCustomPopup({
                      body: bb => (0, Vb.jsx)(Rb, {
                        thumbnailId: cb,
                        thumbnailName: sb,
                        onClose: cb => {
                          cb && (zb.current = !0), bb()
                        }
                      }),
                      middleScreenPopupClassName: "ThumbnailDeleteConfirmPopup",
                      onClose: Xb
                    }).getResult(),
                    ab = zb.current;
                  zb.current = !1, ab && !0 === kb && (eb.current && qb({
                    text: mb("thumbnail:deletingThumbnail"),
                    type: "info"
                  }, !1), Bb.b.deleteSchematicThumbnail(lb, cb).then((() => {
                    eb.current && (qb({
                      text: mb("thumbnail:thumbnailDeleted"),
                      type: "success"
                    }, !0), ib.current === cb && vb(null), db())
                  })).catch((bb => {
                    eb.current && qb({
                      text: bb.errorMessageForUser ? mb(bb.errorMessageForUser, bb.errorMessageTranslationParams) : mb("thumbnail:failedToDeleteThumbnail"),
                      type: "error"
                    }, !0)
                  })))
                }(cb, bb.id, bb.name),
                children: (0, Vb.jsx)(fb.b, {
                  name: "trash-can"
                })
              }), !bb.approved && (0, Vb.jsx)("div", {
                className: "ThumbnailUnapprovedIcon",
                children: (0, Vb.jsx)(fb.b, {
                  name: "hourglass-clock"
                })
              }), !bb.approved && (0, Vb.jsxs)("div", {
                className: "ThumbnailGridItemLabel ThumbnailPendingLabel",
                children: [bb.name, (0, Vb.jsx)("br", {}), mb("thumbnail:pendingApproval")]
              })]
            }, cb))), (0, Vb.jsxs)("div", {
              className: nb()("ThumbnailGridItem ThumbnailUploadTile", {
                ThumbnailUploadTileDisabled: !Mb
              }),
              onClick: () => {
                Mb && function(bb) {
                  let {
                    schematicId: cb,
                    ownedThumbnailCount: sb,
                    onThumbnailReady: kb,
                    onClose: ab
                  } = bb;
                  Wb.NotificationProvider.showCustomPopup({
                    body: bb => (0, Vb.jsx)(Ab, {
                      schematicId: cb,
                      ownedThumbnailCount: sb,
                      onClose: bb,
                      onThumbnailReady: kb
                    }),
                    middleScreenPopupClassName: "SchematicThumbnailPopup",
                    onClose: ab,
                    unlockPointerKey: "schematicThumbnailUploaderPopup"
                  })
                }({
                  schematicId: Tb.schematicId,
                  ownedThumbnailCount: Cb.length,
                  onThumbnailReady: rb,
                  onClose: Xb
                })
              },
              children: [(0, Vb.jsx)(fb.b, {
                name: "plus"
              }), (0, Vb.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: mb("thumbnail:uploadThumbnail")
              })]
            })]
          })
        })]
      })
    }

    function Sb(bb) {
      let {
        rejectedThumbnails: cb,
        userContext: sb,
        isMountedRef: Wb,
        onAcknowledged: Tb
      } = bb;
      const {
        t: Hb
      } = (0, Ub.E)(), [Mb, Xb] = (0, kb.useState)(!1), [nb, mb] = (0, kb.useState)(!1), lb = function(bb) {
        const cb = new Map;
        for (const sb of bb) {
          const bb = sb.rejectionPolicyId,
            kb = cb.get(bb);
          kb ? kb.push(sb) : cb.set(bb, [sb])
        }
        return cb
      }(cb);
      return (0, Vb.jsxs)("div", {
        className: "ThumbnailRejectionNotice",
        children: [(0, Vb.jsxs)("div", {
          className: "ThumbnailRejectionNoticeTitle",
          children: [(0, Vb.jsx)(fb.b, {
            name: "triangle-exclamation"
          }), " ", Hb("thumbnail:thumbnailsRejected"), " ", (0, Vb.jsx)(fb.b, {
            name: "triangle-exclamation"
          })]
        }), (0, Vb.jsx)("div", {
          className: "ThumbnailRejectionNoticeSubtitle",
          children: Hb("thumbnail:thumbnailsRejectedDescription")
        }), (0, Vb.jsx)("div", {
          className: "ThumbnailRejectionNoticeList",
          children: [...lb.entries()].map((bb => {
            let [cb, sb] = bb;
            const kb = rb[cb];
            return (0, Vb.jsxs)("div", {
              className: "ThumbnailRejectionNoticeGroup",
              children: [(0, Vb.jsx)("div", {
                className: "ThumbnailRejectionNoticeItems",
                children: sb.map((bb => (0, Vb.jsxs)("div", {
                  className: "ThumbnailRejectionNoticeItem",
                  children: [(0, Vb.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemIcon",
                    children: (0, Vb.jsx)(fb.b, {
                      name: "image-slash"
                    })
                  }), (0, Vb.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemDetails",
                    children: (0, Vb.jsx)("div", {
                      className: "ThumbnailRejectionNoticeItemName",
                      children: bb.name
                    })
                  })]
                }, bb.id)))
              }), (0, Vb.jsxs)("div", {
                className: "ThumbnailRejectionNoticeGroupReason",
                children: [Hb("thumbnail:rejectionReason"), " ", kb ? Hb(kb.reason) : cb]
              }), kb && (0, Vb.jsx)("ul", {
                className: "ThumbnailRejectionNoticeGroupTips",
                children: kb.tips.map((bb => (0, Vb.jsx)("li", {
                  children: Hb(bb)
                }, bb)))
              })]
            }, cb)
          }))
        }), (0, Vb.jsxs)("label", {
          className: "ThumbnailRejectionNoticeCheckbox",
          children: [(0, Vb.jsx)(gb.e, {
            checked: Mb,
            onChange: bb => Xb(bb.target.checked),
            disabled: nb
          }), (0, Vb.jsx)("span", {
            children: Hb("thumbnail:haveReadRejectionReasons")
          })]
        }), (0, Vb.jsx)(ab.n, {
          onClick: async function() {
            mb(!0);
            const bb = await Promise.allSettled(cb.map((bb => Bb.b.deleteSchematicThumbnail(sb, bb.id))));
            if (!Wb.current) return;
            const kb = bb.filter((bb => "rejected" === bb.status));
            kb.length > 0 && console.error("Some rejected thumbnails failed to delete:", kb), Tb()
          },
          disabled: !Mb || nb,
          className: "ThumbnailRejectionNoticeAcceptButton",
          children: nb ? (0, Vb.jsx)(Ib.d, {}) : Hb("general:accept")
        })]
      })
    }

    function Rb(bb) {
      let {
        thumbnailId: cb,
        thumbnailName: sb,
        onClose: kb
      } = bb;
      const {
        t: Wb
      } = (0, Ub.E)();
      return (0, Vb.jsxs)("div", {
        className: "ThumbnailDeleteConfirm",
        children: [(0, Vb.jsx)("div", {
          className: "ThumbnailDeleteConfirmTitle",
          children: Wb("thumbnail:deleteThumbnail")
        }), (0, Vb.jsxs)("div", {
          className: "ThumbnailDeleteConfirmImageContainer",
          children: [(0, Vb.jsx)("img", {
            className: "ThumbnailDeleteConfirmImage",
            src: `${wb.clientSideServerUrls.s3Url}/customThumbnails/${cb}.jpg`,
            alt: "Thumbnail to delete"
          }), (0, Vb.jsx)("div", {
            className: "ThumbnailGridItemLabel",
            children: sb
          })]
        }), (0, Vb.jsx)("div", {
          className: "ThumbnailDeleteConfirmSubtitle",
          children: Wb("thumbnail:deleteThumbnailConfirmation")
        }), (0, Vb.jsxs)("div", {
          className: "ThumbnailDeleteConfirmButtons",
          children: [(0, Vb.jsxs)(ab.G, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => kb(!0),
            children: [(0, Vb.jsx)(fb.b, {
              name: "trash-can"
            }), " ", Wb("general:delete")]
          }), (0, Vb.jsx)(ab.h, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => kb(!1),
            children: Wb("general:cancel")
          })]
        })]
      })
    }
    var vb = sb(2916),
      Fb = sb(4688),
      xb = sb(4694),
      jb = sb(4736);

    function pb(bb) {
      let {
        schematicData: cb,
        setTexturePack: sb,
        initializeTexturePack: Wb,
        publishFormEnabled: ab
      } = bb;
      const {
        t: Tb
      } = (0, Ub.E)(), [Ib, Hb] = (0, kb.useState)(null), [fb, Mb] = (0, kb.useState)(null), [Xb, mb] = (0, kb.useState)(!1), lb = (0, tb.e)(), Qb = ab && !Xb, eb = cb.customTexturePackKey;

      function Cb(bb) {
        var cb;
        Hb(bb.metaData.id), Mb(null !== (cb = bb.metaData.fromFolderName) && void 0 !== cb ? cb : null), (bb.metaData.id !== vb.o.CUSTOM || bb.metaData.fromFolderName) && sb(bb)
      }
      return (0, kb.useEffect)((() => {
        eb && (mb(!0), (0, Fb.e)(eb).then((bb => {
          var cb;
          lb.current && (bb ? (Hb(bb.metaData.id), Mb(null !== (cb = bb.metaData.fromFolderName) && void 0 !== cb ? cb : null), Wb(bb)) : console.error(`No texture pack at ${eb}`))
        })).catch((bb => {
          console.error("Error fetching texture pack: ", bb)
        })).finally((() => {
          mb(!1)
        })))
      }), [eb, Wb, lb]), (0, Vb.jsxs)("div", {
        className: "BloxdForm TexturePackSection",
        children: [(0, Vb.jsx)("div", {
          className: "SectionTitle",
          children: Tb("customTexturePack:customTexturePack")
        }), (0, Vb.jsxs)("div", {
          className: "TexturePackList",
          children: [(0, Vb.jsx)("div", {
            className: nb()("TexturePack", {
              Selected: null === Ib && !Xb,
              Disabled: !Qb
            }),
            onClick: () => {
              Qb && (Hb(null), sb(null), Mb(null))
            },
            children: (0, Vb.jsx)("div", {
              className: "TexturePackName",
              children: "No Override"
            })
          }), Object.values(vb.o).map((bb => (0, Vb.jsx)(xb.h, {
            id: bb,
            isSelected: bb === Ib,
            setSelected: Cb,
            disabled: !Qb
          }, bb)))]
        }), Ib === vb.o.CUSTOM && (0, Vb.jsx)(jb.b, {
          folderName: fb,
          onTexturePackUpdated: Cb,
          disabled: !Qb,
          maxFileSizeMb: 25,
          packOwner: "customGame"
        })]
      })
    }
    var bc = sb(4756);

    function cc(bb) {
      var cb;
      let {
        gameCategory: sb,
        setGameCategory: kb,
        disabled: Wb
      } = bb;
      const Tb = null !== (cb = (0, mb.nb)(sb)) && void 0 !== cb ? cb : "other";
      return (0, Vb.jsxs)("div", {
        className: "GameCategoryPicker",
        children: [(0, Vb.jsx)(eb.f, {
          label: "worldBuilder:gameCategoryGroup",
          className: "GameCategoryGroup",
          disabled: Wb,
          children: (0, Vb.jsx)(Cb.e, {
            options: mb.bb.map((bb => ({
              value: bb,
              label: mb.$[bb]
            }))),
            value: Tb,
            onChange: bb => {
              bb.value !== Tb && kb(mb.X[bb.value][0])
            }
          })
        }), (0, Vb.jsx)(eb.f, {
          label: "worldBuilder:gameCategory",
          className: "GameCategory",
          disabled: Wb,
          children: (0, Vb.jsx)("div", {
            className: "GameCategoryOptions",
            children: mb.X[Tb].map((bb => (0, Vb.jsx)(ab.M, {
              active: bb === sb,
              onClick: () => {
                kb(bb)
              },
              children: (0, mb.lb)(bb)
            }, bb)))
          })
        })]
      })
    }

    function sc(bb) {
      let {
        editor: cb,
        onClose: sb
      } = bb;
      const {
        t: kb
      } = (0, Ub.E)(), {
        schematicData: Wb,
        updateSchematicData: ab,
        publishFormEnabled: Ib,
        formEnabled: Hb
      } = cb;
      return (0, Vb.jsxs)(Vb.Fragment, {
        children: [(0, Vb.jsxs)(Lb, {
          icon: "pen-to-square",
          title: kb("worldBuilder:basicsSection"),
          disabled: !Hb,
          children: [(0, Vb.jsx)(ub, {
            label: kb("general:name"),
            caption: kb("worldBuilder:schematicNameTagsHint"),
            children: (0, Vb.jsx)(Tb.c, {
              className: "SchematicPageName",
              defaultValue: Wb.name,
              onValueChange: bb => ab("name", bb),
              placeholderText: kb("worldBuilder:schematicNamePlaceholder"),
              maxLength: Mb.ib
            })
          }), (0, Vb.jsx)(ub, {
            label: kb("general:description"),
            children: (0, Vb.jsx)(Tb.c, {
              className: "SchematicPageDescription",
              useTextarea: !0,
              defaultValue: Wb.description,
              onValueChange: bb => ab("description", bb),
              placeholderText: kb("worldBuilder:schematicDescriptionPlaceholder"),
              maxLength: Mb.fb
            })
          }), (0, Vb.jsx)(cc, {
            gameCategory: Wb.gameCategory,
            setGameCategory: bb => ab("gameCategory", bb),
            disabled: !Ib
          }), !0 === Wb.gamePublished && (0, Vb.jsx)(ob, {
            schematicData: Wb,
            updateSchematicData: ab,
            publishFormEnabled: Ib,
            onClose: function() {
              null === sb || void 0 === sb || sb()
            }
          })]
        }), (0, Vb.jsx)(hb, {
          schematicData: Wb,
          updateSchematicData: ab,
          publishFormEnabled: Ib,
          formEnabled: Hb
        }), !0 === Wb.gamePublished && (0, Vb.jsx)(Lb, {
          icon: "palette",
          title: kb("worldBuilder:texturePackSection"),
          disabled: !Hb,
          children: (0, Vb.jsx)(pb, {
            schematicData: Wb,
            setTexturePack: cb.setTexturePack,
            initializeTexturePack: cb.initializeTexturePack,
            publishFormEnabled: Ib
          })
        })]
      })
    }

    function kc(bb) {
      let {
        editor: cb
      } = bb;
      const {
        t: sb
      } = (0, Ub.E)(), {
        schematicData: kb,
        formEnabled: Wb,
        hasUnsavedChanges: Tb
      } = cb, Mb = Wb && Tb;
      return (0, Vb.jsxs)("footer", {
        className: "SchematicPageFooter",
        children: [Wb && Tb && (0, Vb.jsxs)("div", {
          className: "SchematicPageFooterStatus",
          children: [(0, Vb.jsx)("span", {
            className: "SchematicPageFooterStatusDot"
          }), sb("worldBuilder:unsavedChanges")]
        }), (0, Vb.jsx)(Hb.f, {
          tooltipInner: (0, Vb.jsx)("div", {
            className: "SaveButtonTooltip",
            children: sb(Wb && !Tb ? "worldBuilder:saveChangesNoneDescription" : "worldBuilder:saveChangesDescription")
          }),
          children: (0, Vb.jsxs)(ab.d, {
            className: "SaveChangesButton",
            onClick: () => cb.saveSchematic(kb.gamePublished),
            disabled: !Mb,
            children: [(0, Vb.jsxs)("span", {
              className: Wb ? "" : "SaveChangesButtonBodyHidden",
              children: [(0, Vb.jsx)(fb.b, {
                name: "wrench"
              }), " ", sb("worldBuilder:saveChanges")]
            }), !Wb && (0, Vb.jsx)(Ib.d, {})]
          })
        })]
      })
    }

    function Wc(bb) {
      let {
        schematic: cb,
        onSchematicUpdate: sb,
        onClose: Wb,
        inSourceWorld: Tb
      } = bb;
      const {
        t: Ib
      } = (0, Ub.E)();

      function Hb() {
        null === Wb || void 0 === Wb || Wb()
      }
      const fb = (0, bc.c)(cb, {
        onNavigateAway: Hb,
        inSourceWorld: Tb
      });
      return (0, kb.useEffect)((() => {
        null === sb || void 0 === sb || sb(fb.schematicData)
      }), [fb.schematicData, sb]), (0, Vb.jsxs)("div", {
        className: "SchematicPage SchematicPagePopupVariant",
        children: [(0, Vb.jsxs)("div", {
          className: "SchematicPageBody",
          children: [(0, Vb.jsx)(ab.b, {
            onClick: Hb,
            children: Ib("worldBuilder:back")
          }), (0, Vb.jsx)(Lb, {
            icon: "rocket-launch",
            title: Ib("worldBuilder:actionsSection"),
            disabled: !fb.formEnabled,
            children: (0, Vb.jsx)(Jb.d, {
              editor: fb
            })
          }), (0, Vb.jsx)(sc, {
            editor: fb,
            onClose: Hb
          })]
        }), (0, Vb.jsx)(kc, {
          editor: fb
        })]
      })
    }

    function ac(bb) {
      let {
        schematic: cb,
        onSchematicUpdate: sb,
        onClose: kb,
        inSourceWorld: ab
      } = bb;
      Wb.NotificationProvider.showCustomPopup({
        body: bb => (0, Vb.jsx)(Wc, {
          schematic: cb,
          onSchematicUpdate: sb,
          onClose: bb,
          inSourceWorld: ab
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: kb,
        unlockPointerKey: "schematicPagePopup"
      })
    }
  },
  4656: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Mb
    });
    var kb = sb(1033),
      Wb = sb.n(kb),
      ab = sb(1197),
      Tb = sb(1039),
      Ub = sb(1431),
      Ib = sb(1341),
      Hb = sb(1327),
      fb = sb(1087);

    function Mb(bb) {
      let {
        editor: cb,
        className: sb
      } = bb;
      const {
        t: kb
      } = (0, ab.E)(), {
        schematicData: Mb,
        formEnabled: Xb,
        publishFormEnabled: nb
      } = cb, mb = !Xb || !nb;
      return (0, fb.jsxs)("div", {
        className: Wb()("PublishButtonContainer", sb),
        children: [cb.canEditSourceWorld && (0, fb.jsxs)(Ub.d, {
          onClick: cb.editSourceWorld,
          disabled: mb,
          children: [(0, fb.jsx)(Tb.b, {
            name: "edit"
          }), " ", kb("worldBuilder:editSourceWorld")]
        }), !Mb.gamePublished && (0, fb.jsx)(Ib.f, {
          tooltipInner: (0, fb.jsx)("div", {
            className: "PublishButtonTooltip",
            children: kb("worldBuilder:publishAsGameDescription")
          }),
          children: (0, fb.jsxs)(Ub.n, {
            onClick: () => cb.saveSchematic(!0),
            disabled: mb,
            children: [(0, fb.jsx)(Tb.b, {
              name: "rocket-launch"
            }), " ", kb("worldBuilder:publishAsGame"), " ", (0, fb.jsx)(Tb.b, {
              name: "info-circle"
            })]
          })
        }), !0 === Mb.gamePublished && (0, fb.jsxs)(fb.Fragment, {
          children: [(0, fb.jsx)(Ib.f, {
            tooltipInner: (0, fb.jsx)("div", {
              className: "PublishButtonTooltip",
              children: kb("worldBuilder:unpublishAsGameDescription")
            }),
            children: (0, fb.jsxs)(Ub.G, {
              onClick: cb.unpublishSchematic,
              disabled: mb,
              children: [(0, fb.jsx)(Tb.b, {
                name: "rocket-launch"
              }), " ", kb("worldBuilder:unpublishAsGame"), " ", (0, fb.jsx)(Tb.b, {
                name: "info-circle"
              })]
            })
          }), (0, fb.jsxs)(Ub.d, {
            onClick: cb.playGame,
            disabled: mb,
            children: [(0, fb.jsx)(Tb.b, {
              name: "joystick"
            }), " ", kb("general:playGame")]
          })]
        }), !Xb && (0, fb.jsx)(Hb.d, {
          loaderType: "Secondary"
        })]
      })
    }
  },
  4688: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Wb
    });
    var kb = sb(1208);
    async function Wb(bb) {
      const cb = await fetch(`${kb.clientSideServerUrls.s3Url}/${bb}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === cb.status || 403 === cb.status) return null;
      if (!cb.ok) throw new Error(`Failed to download the texture pack (${cb.status})`);
      return await cb.json()
    }
  },
  4756: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Qb
    });
    var kb = sb(64),
      Wb = sb(1316),
      ab = sb(1008),
      Tb = sb(195),
      Ub = sb(1534),
      Ib = sb(19),
      Hb = sb(1870),
      fb = sb(1474),
      Mb = sb(4330),
      Xb = sb(1332),
      nb = sb(1117),
      mb = sb(1495);

    function lb(bb, cb) {
      return {
        schematicId: bb.schematicId,
        name: bb.name,
        description: bb.description,
        gamePublished: cb,
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

    function Qb(bb) {
      let {
        onNavigateAway: cb,
        inSourceWorld: sb = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const {
        userContext: Qb
      } = (0, nb.c)(), eb = (0, mb.useNavigatePreserveSearch)(), [Cb, Nb] = (0, kb.useState)({
        ...bb
      }), [Vb, Lb] = (0, kb.useState)("Enter"), [ub, Yb] = (0, kb.useState)(void 0), hb = (0, kb.useRef)(lb(bb, bb.gamePublished)), Jb = (0, kb.useRef)(void 0), gb = "Enter" === Vb, Bb = Qb.playerHasRank("developer") || Qb.playerHasRank("admin") || "Enter" === Vb && !1 !== Cb.schematicContainsSpawnBlock, tb = void 0 !== ub && ub !== Jb.current || JSON.stringify(lb(Cb, Cb.gamePublished)) !== JSON.stringify(hb.current);

      function yb(bb, cb) {
        Nb((sb => ({
          ...sb,
          [bb]: cb
        })))
      }
      const Pb = (0, kb.useCallback)((bb => {
        Jb.current = bb, Yb(bb)
      }), []);

      function Db(bb) {
        Lb("Loading");
        const cb = lb(Cb, bb),
          sb = ub !== Jb.current ? ub : void 0;
        fb.b.updateSchematic(Qb, cb, sb).then((sb => {
          let {
            customTexturePackKey: kb
          } = sb;
          Lb("Success"), yb("customTexturePackKey", kb), hb.current = cb, Jb.current = void 0, Yb(void 0), setTimeout((() => {
            yb("gamePublished", bb), Lb("Enter")
          }), 1e3)
        })).catch((bb => {
          var cb;
          (console.error("Failed to save schematic:", bb), Lb("Error"), bb instanceof Tb.d && bb.errorMessageForUser) && Xb.NotificationProvider.showAlertPopup({
            title: "worldBuilder:changesNotSaved",
            subtitle: bb.errorMessageForUser,
            textOpts: {
              subtitle: null !== (cb = bb.errorMessageTranslationParams) && void 0 !== cb ? cb : void 0
            },
            confirmText: "general:ok"
          });
          setTimeout((() => {
            Lb("Enter")
          }), 1e3)
        }))
      }
      return {
        schematicData: Cb,
        updateSchematicData: yb,
        setTexturePack: Yb,
        initializeTexturePack: Pb,
        updateState: Vb,
        formEnabled: gb,
        publishFormEnabled: Bb,
        hasUnsavedChanges: tb,
        canEditSourceWorld: !sb,
        saveSchematic: Db,
        unpublishSchematic: function() {
          Xb.NotificationProvider.showPromptPopup({
            icon: "rocket-launch",
            title: "worldBuilder:unpublishAsGameConfirmTitle",
            subtitle: "worldBuilder:unpublishAsGameConfirmSubtitle",
            confirmText: "worldBuilder:unpublishAsGame",
            cancelText: "general:cancel",
            unlockPointerKey: "unpublishGamePrompt"
          }).getResult().then((bb => {
            !0 === bb && Db(!1)
          }))
        },
        editSourceWorld: function() {
          Lb("Loading"), Mb.d.getSourceWorld(Cb.schematicId).then((bb => {
            Hb.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, Ib.l)("other"), eb((0, Wb.b)("classic", bb)), null === cb || void 0 === cb || cb()
          })).catch((bb => {
            console.error("Failed to get source world:", bb), Lb("Error"), setTimeout((() => {
              Lb("Enter")
            }), 1e3)
          }))
        },
        playGame: function() {
          Hb.gameBridge.send("leaveGame", {
            reloadPath: "/"
          }), eb((0, Ub.v)((0, ab.x)(Cb.schematicId), Cb)), null === cb || void 0 === cb || cb()
        }
      }
    }
  },
  4643: () => {}
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);