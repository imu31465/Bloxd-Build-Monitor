export const id = 103;
export const ids = [103];
export const modules = {
  4620: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Lb,
      g: () => vb,
      h: () => Pb
    });
    Ub(4629);
    var Ab = Ub(1134),
      Mb = Ub(984),
      Tb = Ub.n(Mb),
      Eb = Ub(1268),
      Yb = (Ub(52), Ub(4054)),
      Bb = Ub(990),
      eb = Ub(1023);

    function vb(bb) {
      let {
        children: ab,
        label: Ub,
        className: Mb,
        circleInfoText: Yb,
        disabled: vb,
        onLabelClick: Lb
      } = bb;
      const {
        t: Pb
      } = (0, Ab.A)(), Xb = (0, eb.jsxs)("div", {
        className: Tb()("Label", {
          ClickableLabel: void 0 !== Lb
        }),
        onClick: Lb,
        children: [Pb(Ub), Yb && (0, eb.jsx)(Bb.e, {
          name: "circle-info"
        })]
      });
      return (0, eb.jsxs)("div", {
        className: Tb()("LabeledInput", {
          [Mb]: Mb,
          DisabledLabelInput: vb
        }),
        children: [Yb && (0, eb.jsx)(Eb.g, {
          tooltipInner: (0, eb.jsx)("div", {
            className: "LabeledInputTooltip",
            children: Pb(Yb)
          }),
          children: Xb
        }), !Yb && Xb, ab]
      })
    }

    function Lb(bb) {
      let {
        checked: ab,
        setChecked: Ub
      } = bb;
      return (0, eb.jsx)("div", {
        className: "OtherInput ClickableOtherInput",
        "data-pad-focusable": !0,
        onClick: bb => {
          Ub(!ab)
        },
        children: (0, eb.jsx)(Yb.d, {
          checked: ab,
          onChange: bb => {
            Ub(bb.target.checked)
          },
          disabled: !1
        })
      })
    }

    function Pb(bb) {
      let {
        checked: ab,
        setChecked: Ub,
        disabled: Ab
      } = bb;
      return (0, eb.jsx)("div", {
        className: Tb()("SwitchContainer", {
          SwitchContainerDisabled: Ab
        }),
        onClick: () => {
          Ab || Ub(!ab)
        },
        children: (0, eb.jsx)(Yb.d, {
          className: "SwitchCheckbox",
          checked: ab,
          onChange: bb => {
            Ub(bb.target.checked)
          },
          disabled: !!Ab
        })
      })
    }
  },
  4631: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => eb
    });
    var Ab = Ub(984),
      Mb = Ub.n(Ab),
      Tb = Ub(4317),
      Eb = Ub(1134),
      Yb = Ub(1023);
    const Bb = [...Tb.n, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function eb(bb) {
      const {
        disabled: ab,
        hideWrapper: Ub
      } = bb, {
        t: Ab
      } = (0, Eb.A)(), eb = bb.advancedMode ? Bb.map((ab => [ab, bb.callbacks[ab]])) : Tb.n.map((ab => [ab, bb.callbacks[ab]])), Lb = (0, Yb.jsx)("div", {
        className: Mb()("PluginsGrid", {
          SectionBody: !Ub
        }),
        children: eb.map((bb => {
          let [Ub, Ab] = bb;
          return (0, Yb.jsx)(vb, {
            plugin: Ub,
            callbacks: Ab,
            disabled: ab
          }, Ub)
        }))
      });
      return Ub ? Lb : (0, Yb.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, Yb.jsx)("div", {
          className: "SectionTitle",
          children: Ab("worldBuilder:pluginsSection")
        }), Lb]
      })
    }

    function vb(bb) {
      let {
        plugin: ab,
        callbacks: {
          isEnabled: Ub,
          Yz: Ab
        },
        disabled: Tb
      } = bb;
      const {
        t: Bb
      } = (0, Eb.A)(), eb = Ub();
      return (0, Yb.jsxs)("div", {
        className: Mb()("PluginCard", {
          PluginCardEnabled: eb,
          PluginCardDisabledForm: Tb
        }),
        "data-pad-focusable": !0,
        "aria-disabled": Tb || void 0,
        onClick: () => {
          Tb || Ab(!eb)
        },
        children: [(0, Yb.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, Yb.jsx)("img", {
            src: `/textures/games/classic/customGames/${ab}.png`,
            alt: ab
          })
        }), (0, Yb.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, Yb.jsx)("div", {
            className: "PluginCardTitle",
            children: Bb(Lb[ab])
          }), (0, Yb.jsx)("div", {
            className: "PluginCardDescription",
            children: Bb(Pb[ab])
          })]
        }), (0, Yb.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: Bb(eb ? "general:on" : "general:off")
        })]
      })
    }
    const Lb = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      Pb = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  4616: (bb, ab, Ub) => {
    Ub.d(ab, {
      j: () => Ma,
      e: () => Aa,
      h: () => Ua,
      l: () => Ta
    });
    var Ab = Ub(52),
      Mb = Ub(1260),
      Tb = Ub(1352),
      Eb = Ub(1589),
      Yb = Ub(1134),
      Bb = Ub(1254),
      eb = Ub(1268),
      vb = Ub(990),
      Lb = Ub(1162),
      Pb = Ub(984),
      Xb = Ub.n(Pb),
      jb = Ub(307),
      Rb = Ub(4317),
      kb = Ub(1189),
      yb = Ub(4620),
      Zb = Ub(2851),
      Db = Ub(4631),
      zb = Ub(1023);

    function xb(bb) {
      let {
        icon: ab,
        title: Ub,
        disabled: Ab,
        children: Mb
      } = bb;
      return (0, zb.jsxs)("div", {
        className: Xb()("ManageCard", {
          ManageCardDisabled: Ab
        }),
        children: [(0, zb.jsxs)("div", {
          className: "ManageCardHead",
          children: [(0, zb.jsx)("div", {
            className: "ManageCardIcon",
            children: (0, zb.jsx)(vb.e, {
              name: ab
            })
          }), (0, zb.jsx)("div", {
            children: (0, zb.jsx)("h2", {
              className: "ManageCardTitle",
              children: Ub
            })
          })]
        }), (0, zb.jsxs)("div", {
          className: "ManageCardBody",
          children: [Mb, Ab && (0, zb.jsx)("div", {
            className: "ManageCardDisabledOverlay"
          })]
        })]
      })
    }

    function ib(bb) {
      let {
        label: ab,
        caption: Ub,
        children: Ab
      } = bb;
      return (0, zb.jsxs)("div", {
        className: "ManageStackedField",
        children: [(0, zb.jsx)("div", {
          className: "ManageStackedFieldLabel",
          children: ab
        }), Ab, Ub && (0, zb.jsx)("div", {
          className: "ManageStackedFieldCaption",
          children: Ub
        })]
      })
    }

    function fb(bb) {
      let {
        label: ab,
        caption: Ub,
        disabled: Ab,
        children: Mb
      } = bb;
      return (0, zb.jsxs)("div", {
        className: Xb()("ManageField", {
          ManageFieldDisabled: Ab
        }),
        children: [(0, zb.jsxs)("div", {
          className: "ManageFieldText",
          children: [(0, zb.jsx)("div", {
            className: "ManageFieldLabel",
            children: ab
          }), (0, zb.jsx)("div", {
            className: "ManageFieldCaption",
            children: Ub
          })]
        }), (0, zb.jsx)("div", {
          className: "ManageFieldControl",
          children: Mb
        })]
      })
    }

    function mb(bb) {
      var ab, Ub;
      let {
        schematicData: Ab,
        updateSchematicData: Mb,
        publishFormEnabled: Tb,
        formEnabled: Eb
      } = bb;
      const {
        t: Bb
      } = (0, Yb.A)(), eb = !Tb, vb = {
        tpRequests: {
          isEnabled: () => !Ab.disableTpRequests,
          Yz: bb => Mb("disableTpRequests", !bb)
        },
        spawnProtection: {
          isEnabled: () => !Ab.disableSpawnProtection,
          Yz: bb => Mb("disableSpawnProtection", !bb)
        },
        spawnReset: {
          isEnabled: () => !!Ab.enableSpawnReset,
          Yz: bb => Mb("enableSpawnReset", bb)
        },
        smpMarketplace: {
          isEnabled: () => !!Ab.enableSmpMarketplace,
          Yz: bb => Mb("enableSmpMarketplace", bb)
        },
        survivalGuns: {
          isEnabled: () => !!Ab.enableSurvivalGuns,
          Yz: bb => Mb("enableSurvivalGuns", bb)
        },
        fallDamage: {
          isEnabled: () => !Ab.disableFallDamage,
          Yz: bb => Mb("disableFallDamage", !bb)
        },
        dayNight: {
          isEnabled: () => !!Ab.enableDayNight,
          Yz: bb => Mb("enableDayNight", bb)
        }
      };
      return (0, zb.jsxs)(zb.Fragment, {
        children: [!1 === Ab.schematicContainsSpawnBlock && (0, zb.jsx)("div", {
          className: "ManageWarningBanner",
          children: Bb("worldBuilder:mustContainSpawnBlock")
        }), (0, zb.jsxs)("div", {
          className: "ManageSettingsGrid",
          children: [(0, zb.jsxs)(xb, {
            icon: "globe",
            title: Bb("worldBuilder:worldRulesSection"),
            disabled: !Eb,
            children: [(0, zb.jsx)(fb, {
              label: Bb("classic:defaultGamemode"),
              caption: Bb("classic:defaultGamemodeDescription"),
              disabled: eb,
              children: (0, zb.jsx)(Zb.c, {
                controlClassName: "ManageDropdown",
                options: Rb.F.map((bb => ({
                  value: bb,
                  label: jb.n[bb]
                }))),
                value: Ab.defaultGamemode,
                onChange: bb => Mb("defaultGamemode", bb.value)
              })
            }), (0, zb.jsx)(fb, {
              label: Bb("classic:voidDeathHeight"),
              caption: Bb("classic:voidDeathHeightDescription"),
              disabled: eb,
              children: (0, zb.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, zb.jsx)("input", {
                  type: "number",
                  max: kb.y,
                  value: null !== (ab = Ab.voidDeathHeight) && void 0 !== ab ? ab : "",
                  onChange: bb => {
                    const ab = parseInt(bb.target.value);
                    Mb("voidDeathHeight", ab)
                  }
                }), (0, zb.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: Bb("worldBuilder:blocksUnit")
                })]
              })
            }), (0, zb.jsx)(fb, {
              label: Bb("classic:worldBorder"),
              caption: Bb("classic:worldBorderDescription"),
              disabled: eb,
              children: (0, zb.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, zb.jsx)("input", {
                  type: "number",
                  min: kb.D,
                  max: kb.A,
                  placeholder: Bb("worldBuilder:noWorldBorderLimit"),
                  value: null !== (Ub = Ab.worldBorder) && void 0 !== Ub ? Ub : "",
                  onChange: bb => {
                    const ab = parseInt(bb.target.value);
                    Mb("worldBorder", isNaN(ab) ? null : ab)
                  }
                }), (0, zb.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: Bb("worldBuilder:blocksUnit")
                })]
              })
            }), (0, zb.jsx)(fb, {
              label: Bb("classic:disableMobs"),
              caption: Bb("classic:disableMobsDescription"),
              disabled: eb,
              children: (0, zb.jsx)(yb.h, {
                checked: Ab.disableMobs,
                setChecked: bb => Mb("disableMobs", bb),
                disabled: eb
              })
            })]
          }), (0, zb.jsxs)(xb, {
            icon: "user-group",
            title: Bb("worldBuilder:playerAndLobbySection"),
            disabled: !Eb,
            children: [(0, zb.jsx)(fb, {
              label: Bb("classic:disableKeepInventory"),
              caption: Bb("classic:disableKeepInventoryDescription"),
              disabled: eb,
              children: (0, zb.jsx)(yb.h, {
                checked: Ab.disableKeepInventory,
                setChecked: bb => Mb("disableKeepInventory", bb),
                disabled: eb
              })
            }), (0, zb.jsx)(fb, {
              label: Bb("classic:persistInventory"),
              caption: Bb("classic:persistInventoryDescription"),
              disabled: eb,
              children: (0, zb.jsx)(Zb.c, {
                controlClassName: "ManageDropdown",
                options: Rb.o.map((bb => ({
                  value: bb,
                  label: jb.e[bb]
                }))),
                value: Ab.persistInventory,
                onChange: bb => Mb("persistInventory", bb.value)
              })
            }), (0, zb.jsx)(fb, {
              label: Bb("classic:persistWorld"),
              caption: Bb("classic:persistWorldDescription"),
              disabled: eb,
              children: (0, zb.jsx)(yb.h, {
                checked: Ab.persistWorld,
                setChecked: bb => Mb("persistWorld", bb),
                disabled: eb
              })
            }), (0, zb.jsx)(fb, {
              label: Bb("classic:disableLobbySpawn"),
              caption: Bb("classic:disableLobbySpawnDescription"),
              disabled: eb,
              children: (0, zb.jsx)(yb.h, {
                checked: Ab.disableLobbySpawn,
                setChecked: bb => Mb("disableLobbySpawn", bb),
                disabled: eb
              })
            }), (0, zb.jsx)(fb, {
              label: Bb("classic:hideLobbyCode"),
              caption: Bb("classic:hideLobbyCodeDescription"),
              disabled: eb,
              children: (0, zb.jsx)(yb.h, {
                checked: Ab.hideLobbyCode,
                setChecked: bb => Mb("hideLobbyCode", bb),
                disabled: eb
              })
            })]
          })]
        }), (0, zb.jsx)(xb, {
          icon: "layer-group",
          title: Bb("worldBuilder:pluginsSection"),
          disabled: !Eb,
          children: (0, zb.jsx)(Db.d, {
            callbacks: vb,
            disabled: eb,
            advancedMode: !0,
            hideWrapper: !0
          })
        })]
      })
    }
    var pb = Ub(4635),
      Nb = Ub(4054),
      Wb = Ub(1413),
      Hb = Ub(3170),
      Ib = Ub(1060),
      db = Ub(4595),
      Fb = Ub(4638),
      hb = Ub(1358);
    const Gb = 50,
      Qb = .3;
    async function qb(bb) {
      const ab = await
      function(bb) {
        return new Promise(((ab, Ub) => {
          const Ab = new FileReader;
          Ab.onload = () => ab(Ab.result), Ab.onerror = Ub, Ab.readAsDataURL(bb)
        }))
      }(bb), Ub = await
      function(bb) {
        return new Promise(((ab, Ub) => {
          const Ab = new Image;
          Ab.onload = () => ab(Ab), Ab.onerror = () => Ub(new Error("Failed to load image")), Ab.src = bb
        }))
      }(ab);
      if (Ub.naturalHeight > Ub.naturalWidth) throw new ub;
      const Ab = 1024 * Gb,
        {
          dataUrl: Mb,
          finalQuality: Tb
        } = function(bb, ab) {
          const Ub = document.createElement("canvas");
          Ub.width = bb.naturalWidth, Ub.height = bb.naturalHeight, Ub.getContext("2d").drawImage(bb, 0, 0);
          let Ab = .92,
            Mb = Ub.toDataURL("image/jpeg", Ab);
          for (; .75 * Mb.length > ab && Ab > .05;) Ab -= .05, Mb = Ub.toDataURL("image/jpeg", Ab);
          return {
            dataUrl: Mb,
            finalQuality: Ab
          }
        }(Ub, Ab);
      if (Math.ceil(.75 * Mb.length) > Ab) throw new rb;
      return {
        base64Jpg: Mb,
        heavilyCompressed: Tb < Qb
      }
    }
    class ub extends Error {}
    class rb extends Error {}
    var Kb = function(bb) {
      return bb[bb.NOT_LOGGED_IN = 0] = "NOT_LOGGED_IN", bb[bb.THUMBNAIL_LIMIT_REACHED = 1] = "THUMBNAIL_LIMIT_REACHED", bb
    }(Kb || {});

    function ob(bb) {
      var ab;
      let {
        schematicId: Ub,
        hasReadUploadPolicy: Mb,
        onPolicyValidationError: Bb,
        onThumbnailReady: eb
      } = bb;
      const {
        t: Pb
      } = (0, Yb.A)(), [jb, Rb] = (0, Ab.useState)(null), [kb, yb] = (0, Ab.useState)(""), [Zb, Db] = (0, Ab.useState)(""), [xb, ib] = (0, Ab.useState)(!0), [fb, mb] = (0, Ab.useState)(!1), pb = (0, Ab.useRef)(!1), [Nb, Wb] = (0, Ab.useState)(null), [Hb, Ib] = (0, Ab.useState)(!1), [db, hb] = (0, Ab.useState)(!1), Gb = (0, Ab.useRef)(0), {
        getRootProps: Qb,
        getInputProps: Kb,
        isDragActive: ob
      } = (0, Fb.b)({
        accept: {
          "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp"]
        },
        multiple: !1,
        onDrop: async bb => {
          if (0 === bb.length) return;
          const ab = bb[0],
            Ub = ++Gb.current;
          Wb(null), Ib(!1), Rb(null), yb(ab.name);
          try {
            const bb = await qb(ab);
            if (Ub !== Gb.current) return;
            Rb(bb), Ib(bb.heavilyCompressed)
          } catch (Ab) {
            if (Ub !== Gb.current) return;
            Wb(Pb(Ab instanceof ub ? "thumbnail:portraitImagesNotAllowed" : Ab instanceof rb ? "thumbnail:couldNotCompressImage" : "thumbnail:failedToUploadImage"))
          }
        },
        useFsAccessApi: !1
      }), lb = kb.length <= 30 ? kb : `${kb.slice(0,27)}...`, tb = null !== (ab = null === jb || void 0 === jb ? void 0 : jb.base64Jpg) && void 0 !== ab ? ab : null, wb = Zb.trim(), sb = wb.length >= Lb.p && wb.length <= Lb.m, gb = db && !jb && !Nb, Cb = db && !sb;
      return (0, zb.jsxs)("div", {
        className: "ThumbnailUploadContainer",
        children: [(0, zb.jsxs)("div", {
          ...Qb({
            className: Xb()("ThumbnailUploadDropzone", {
              ActiveDrag: ob,
              ValidationError: gb
            })
          }),
          children: [(0, zb.jsx)("input", {
            ...Kb()
          }), !ob && tb ? (0, zb.jsxs)(zb.Fragment, {
            children: [(0, zb.jsxs)("div", {
              className: "ThumbnailAspectPreviews",
              children: [(0, zb.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, zb.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "1:1"
                }), (0, zb.jsx)("div", {
                  className: "ThumbnailAspectFrame Square",
                  children: (0, zb.jsx)("img", {
                    src: tb,
                    alt: "1:1 preview"
                  })
                })]
              }), (0, zb.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, zb.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "16:9"
                }), (0, zb.jsx)("div", {
                  className: "ThumbnailAspectFrame Wide",
                  children: (0, zb.jsx)("img", {
                    src: tb,
                    alt: "16:9 preview"
                  })
                })]
              })]
            }), (0, zb.jsxs)("div", {
              children: [(0, zb.jsx)("div", {
                className: "ThumbnailUploadInstructions Active",
                children: lb
              }), (0, zb.jsx)("div", {
                className: "ThumbnailUploadInstructions Preview",
                children: Pb("thumbnail:preview")
              })]
            })]
          }) : (0, zb.jsxs)(zb.Fragment, {
            children: [(0, zb.jsx)("div", {
              className: "ThumbnailUploadIcon",
              children: (0, zb.jsx)(vb.e, {
                name: "image"
              })
            }), (0, zb.jsx)("div", {
              className: "ThumbnailUploadInstructions",
              children: Pb("thumbnail:dragImageHere")
            })]
          })]
        }), gb && (0, zb.jsx)("div", {
          className: "ThumbnailUploadError",
          children: Pb("thumbnail:imageRequired")
        }), (0, zb.jsx)(Eb.c, {
          className: Xb()("ThumbnailUploadNameInput", {
            ValidationError: Cb
          }),
          placeholderText: Pb("thumbnail:thumbnailName"),
          defaultValue: Zb,
          onValueChange: bb => {
            Db(bb)
          },
          maxLength: Lb.m
        }), Cb && (0, zb.jsx)("div", {
          className: "ThumbnailUploadError",
          children: Pb("thumbnail:nameRequired", {
            min: Lb.p,
            max: Lb.m
          })
        }), (0, zb.jsxs)("label", {
          className: "ThumbnailUploadCheckbox",
          children: [(0, zb.jsx)("input", {
            type: "checkbox",
            checked: xb,
            onChange: bb => {
              ib(bb.target.checked)
            }
          }), Pb("thumbnail:setAsThumbnailOnceApproved")]
        }), Hb && (0, zb.jsx)("div", {
          className: "ThumbnailUploadWarning",
          children: Pb("thumbnail:heavyCompressionWarning")
        }), Nb && (0, zb.jsx)("div", {
          className: "ThumbnailUploadError",
          children: Nb
        }), (0, zb.jsx)(Tb.m, {
          disabled: fb,
          className: "ThumbnailUploadButton",
          onClick: async () => {
            if (hb(!0), !pb.current && jb && sb && Mb) {
              pb.current = !0, mb(!0), Wb(null);
              try {
                await eb(jb.base64Jpg, wb, xb ? Ub : null)
              } catch (bb) {
                Wb(bb.errorMessageForUser ? Pb(bb.errorMessageForUser, bb.errorMessageTranslationParams) : Pb("thumbnail:failedToUploadImage"))
              } finally {
                pb.current = !1, mb(!1)
              }
            } else Mb || Bb()
          },
          children: Pb(fb ? "thumbnail:processing" : "thumbnail:uploadThumbnail")
        })]
      })
    }
    const lb = 2e3;

    function tb(bb) {
      let {
        schematicId: ab,
        ownedThumbnailCount: Ub,
        onClose: Mb,
        onThumbnailReady: Tb
      } = bb;
      const {
        t: Eb
      } = (0, Yb.A)(), {
        userContext: Bb
      } = (0, Ib.c)(), [eb, Pb] = (0, Ab.useState)(!1), [jb, Rb] = (0, Ab.useState)(!1), [kb, yb] = (0, Ab.useState)(!1), Zb = (0, Ab.useRef)();
      (0, Ab.useEffect)((() => () => {
        clearTimeout(Zb.current)
      }), []);
      const Db = function(bb, ab) {
        const Ub = [];
        return bb.isLoggedIn() || Ub.push(Kb.NOT_LOGGED_IN), ab >= Lb.Y && Ub.push(Kb.THUMBNAIL_LIMIT_REACHED), Ub
      }(Bb, Ub);
      if (Db.length > 0) {
        const bb = {
          [Kb.NOT_LOGGED_IN]: {
            key: "thumbnail:mustBeLoggedInToUpload"
          },
          [Kb.THUMBNAIL_LIMIT_REACHED]: {
            key: "thumbnail:thumbnailLimitReachedPleaseDelete",
            params: {
              max: Lb.Y
            }
          }
        };
        return (0, zb.jsxs)("div", {
          className: "ThumbnailUploaderInner",
          children: [(0, zb.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: Eb("thumbnail:cannotUploadThumbnail")
          }), Db.map(((ab, Ub) => {
            const Ab = bb[ab];
            return (0, zb.jsxs)("div", {
              className: "CannotUploadThumbnailItem",
              children: [(0, zb.jsx)(vb.e, {
                name: "triangle-exclamation"
              }), (0, zb.jsx)("span", {
                children: Eb(Ab.key, Ab.params)
              })]
            }, Ub)
          }))]
        })
      }
      return (0, zb.jsxs)("div", {
        className: Xb()("ThumbnailUploaderInner", {
          ThumbnailUploaderSuccess: eb
        }),
        children: [eb && (0, zb.jsxs)("div", {
          className: "ThumbnailUploadSuccessOverlay",
          children: [(0, zb.jsxs)("div", {
            className: "ThumbnailUploadSuccessIcon FullyFancyText AnimFadeInScaleUp",
            children: [(0, zb.jsx)(vb.e, {
              name: "check"
            }), (0, zb.jsx)(hb.d, {})]
          }), (0, zb.jsx)("div", {
            className: "ThumbnailUploadSuccessText AnimFadeInScaleUp",
            children: Eb("thumbnail:thumbnailUploaded")
          })]
        }), (0, zb.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: Eb("thumbnail:uploadThumbnail")
        }), (0, zb.jsxs)("div", {
          className: "ThumbnailUploaderBody",
          children: [(0, zb.jsxs)("div", {
            className: "ThumbnailUploaderLeft",
            children: [(0, zb.jsx)("h3", {
              className: "SchematicPopupSubtitle",
              children: Eb("thumbnail:chooseImage", {
                maxSizeKb: Gb
              })
            }), (0, zb.jsx)(ob, {
              schematicId: ab,
              hasReadUploadPolicy: jb,
              onPolicyValidationError: () => {
                yb(!0)
              },
              onThumbnailReady: async (bb, ab, Ub) => {
                await Tb(bb, ab, Ub), Pb(!0), Zb.current = setTimeout(Mb, lb)
              }
            })]
          }), (0, zb.jsxs)("div", {
            className: "ThumbnailUploadPolicy",
            children: [(0, zb.jsx)("h3", {
              className: "ThumbnailUploadPolicyTitle",
              children: Eb("thumbnail:uploadPolicy")
            }), (0, zb.jsxs)("ul", {
              className: "ThumbnailUploadPolicyList",
              children: [(0, zb.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, zb.jsx)(vb.e, {
                  name: "check"
                }), (0, zb.jsx)("span", {
                  children: Eb("thumbnail:policyFollowGuidelines")
                })]
              }), (0, zb.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, zb.jsx)(vb.e, {
                  name: "check"
                }), (0, zb.jsx)("span", {
                  children: Eb("thumbnail:policyInGameAssets")
                })]
              }), (0, zb.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, zb.jsx)(vb.e, {
                  name: "check"
                }), (0, zb.jsx)("span", {
                  children: Eb("thumbnail:policyLimitText")
                })]
              }), (0, zb.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, zb.jsx)(vb.e, {
                  name: "x"
                }), (0, zb.jsx)("span", {
                  children: Eb("thumbnail:policyCopyrightContent")
                })]
              }), (0, zb.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, zb.jsx)(vb.e, {
                  name: "x"
                }), (0, zb.jsx)("span", {
                  children: Eb("thumbnail:policyOutOfGameAssets")
                })]
              }), (0, zb.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, zb.jsx)(vb.e, {
                  name: "x"
                }), (0, zb.jsx)("span", {
                  children: Eb("thumbnail:policyBloxdTags")
                })]
              }), (0, zb.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, zb.jsx)(vb.e, {
                  name: "x"
                }), (0, zb.jsx)("span", {
                  children: Eb("thumbnail:policyMustReflectGame")
                })]
              })]
            }), (0, zb.jsxs)("label", {
              className: Xb()("ThumbnailUploadCheckbox Policy", {
                ValidationError: kb && !jb
              }),
              children: [(0, zb.jsx)("input", {
                type: "checkbox",
                checked: jb,
                onChange: bb => {
                  Rb(bb.target.checked)
                }
              }), Eb("thumbnail:agreeToUploadPolicy")]
            }), kb && !jb && (0, zb.jsx)("div", {
              className: "ThumbnailPolicyError",
              children: Eb("thumbnail:policyRequired")
            })]
          })]
        })]
      })
    }
    var wb = Ub(1142);
    const sb = {
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

    function gb(bb) {
      var ab, Ub;
      let {
        schematicData: Eb,
        updateSchematicData: eb,
        publishFormEnabled: Lb,
        onClose: Pb
      } = bb;
      const {
        t: jb
      } = (0, Yb.A)(), {
        userContext: Rb,
        isUserContextUpdating: kb
      } = (0, Ib.c)(), yb = (0, Hb.b)(), [Zb, Db] = (0, Ab.useState)([]), [xb, ib] = (0, Ab.useState)([]), [fb, mb] = (0, Ab.useState)(!0), [pb, Nb] = (0, Ab.useState)(null !== (ab = Eb.customThumbnailId) && void 0 !== ab ? ab : null), [Fb, hb] = (0, Ab.useState)(null), Gb = (0, Ab.useRef)(null !== (Ub = Eb.customThumbnailId) && void 0 !== Ub ? Ub : null), Qb = (0, Ab.useRef)(0), qb = (0, Ab.useRef)(null), ub = (0, Ab.useRef)(null), rb = (0, Ab.useRef)(null), Kb = (0, Ab.useRef)(!1);

      function ob(bb, ab) {
        rb.current && (clearTimeout(rb.current), rb.current = null), hb(bb), null !== bb && ab && (rb.current = setTimeout((() => {
          hb(null), rb.current = null
        }), 5e3))
      }(0, Ab.useEffect)((() => () => {
        clearTimeout(ub.current), clearTimeout(rb.current)
      }), []);
      const lb = (0, Ab.useCallback)((() => {
        mb(!0), Wb.b.getOwnedThumbnails(Rb).then((bb => {
          const ab = [],
            Ub = [];
          for (const Ab of bb.thumbnails) Ab.rejectionPolicyId ? ab.push(Ab) : Ub.push(Ab);
          ab.sort(((bb, ab) => bb.lastUpdatedAt - ab.lastUpdatedAt)), Ub.sort(((bb, ab) => {
            const Ub = bb.approved ? 1 : 0,
              Ab = (ab.approved ? 1 : 0) - Ub;
            return 0 !== Ab ? Ab : ab.lastUpdatedAt - bb.lastUpdatedAt
          })), ib(ab), Db(Ub)
        })).catch((bb => {
          console.error("Failed to fetch thumbnails:", bb)
        })).finally((() => {
          mb(!1)
        }))
      }), [Rb]);
      async function sb(bb, ab, Ub) {
        return Wb.b.uploadSchematicThumbnail(Rb, bb, ab, Ub).then((() => {
          ob({
            text: jb("thumbnail:uploadedAwaitingModeration"),
            type: "success"
          }, !0), lb()
        }))
      }

      function gb() {
        Qb.current = Date.now(), ub.current = null;
        const bb = qb.current;
        qb.current = null, ob({
          text: jb("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), Wb.b.setSchematicThumbnail(Rb, Eb.schematicId, bb).then((() => {
          yb.current && (ob({
            text: jb("thumbnail:thumbnailUpdated"),
            type: "success"
          }, !0), Gb.current = bb, eb("customThumbnailId", bb), eb("customThumbnailBlurhash", void 0), eb("customThumbnailVariants", void 0))
        })).catch((bb => {
          yb.current && (ob({
            text: bb.errorMessageForUser ? jb(bb.errorMessageForUser, bb.errorMessageTranslationParams) : jb("thumbnail:failedToSetThumbnail"),
            type: "error"
          }, !0), Nb(Gb.current))
        }))
      }

      function Ob(bb) {
        Nb(bb), qb.current = bb;
        const ab = Date.now() - Qb.current;
        ab >= 1e3 ? gb() : (ob({
          text: jb("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), ub.current || (ub.current = setTimeout((() => {
          gb()
        }), 1e3 - ab)))
      }
      return (0, Ab.useEffect)((() => {
        !1 === kb && lb()
      }), [kb, lb]), xb.length > 0 ? (0, zb.jsx)(Cb, {
        rejectedThumbnails: xb,
        userContext: Rb,
        isMountedRef: yb,
        onAcknowledged: lb
      }) : (0, zb.jsxs)("div", {
        className: "BloxdForm ThumbnailSection",
        children: [(0, zb.jsxs)("div", {
          className: "SectionTitle",
          children: [jb("thumbnail:gameThumbnail"), Fb && (0, zb.jsx)("span", {
            className: Xb()("ThumbnailActionMsg", `ThumbnailActionMsg--${Fb.type}`),
            children: Fb.text
          })]
        }), (0, zb.jsx)("div", {
          className: "SectionBody",
          children: (0, zb.jsxs)("div", {
            className: "ThumbnailGrid",
            children: [(0, zb.jsxs)("div", {
              className: Xb()("ThumbnailGridItem ThumbnailGridItemDefault", {
                ThumbnailGridItemSelected: null === pb
              }),
              onClick: () => Ob(null),
              children: [(0, zb.jsx)(db.e, {
                game: {
                  schematicId: Eb.schematicId,
                  imageBlurhash: Eb.imageBlurhash
                }
              }), (0, zb.jsx)("div", {
                className: "ThumbnailGridItemLabel ThumbnailDefaultLabel",
                children: jb("general:default")
              })]
            }), fb && (0, zb.jsx)(Bb.b, {}), Zb.map(((bb, ab) => (0, zb.jsxs)("div", {
              className: Xb()("ThumbnailGridItem", {
                ThumbnailGridItemSelected: pb === bb.id,
                ThumbnailGridItemPending: !bb.approved
              }),
              onClick: () => {
                bb.approved && Ob(bb.id)
              },
              children: [bb.approved && (0, zb.jsx)("img", {
                src: `${wb.clientSideServerUrls.s3Url}/customThumbnails/${bb.id}.jpg`,
                alt: "Thumbnail"
              }), bb.approved && (0, zb.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: bb.name
              }), bb.id && (0, zb.jsx)(Tb.D, {
                className: "ThumbnailDeleteButton",
                onClick: ab => async function(bb, ab, Ub) {
                  bb.stopPropagation();
                  const Ab = await Mb.NotificationProvider.showCustomPopup({
                      body: bb => (0, zb.jsx)(Vb, {
                        thumbnailId: ab,
                        thumbnailName: Ub,
                        onClose: ab => {
                          ab && (Kb.current = !0), bb()
                        }
                      }),
                      middleScreenPopupClassName: "ThumbnailDeleteConfirmPopup",
                      onClose: Pb
                    }).getResult(),
                    Tb = Kb.current;
                  Kb.current = !1, Tb && !0 === Ab && (yb.current && ob({
                    text: jb("thumbnail:deletingThumbnail"),
                    type: "info"
                  }, !1), Wb.b.deleteSchematicThumbnail(Rb, ab).then((() => {
                    yb.current && (ob({
                      text: jb("thumbnail:thumbnailDeleted"),
                      type: "success"
                    }, !0), Gb.current === ab && Ob(null), lb())
                  })).catch((bb => {
                    yb.current && ob({
                      text: bb.errorMessageForUser ? jb(bb.errorMessageForUser, bb.errorMessageTranslationParams) : jb("thumbnail:failedToDeleteThumbnail"),
                      type: "error"
                    }, !0)
                  })))
                }(ab, bb.id, bb.name),
                children: (0, zb.jsx)(vb.e, {
                  name: "trash-can"
                })
              }), !bb.approved && (0, zb.jsx)("div", {
                className: "ThumbnailUnapprovedIcon",
                children: (0, zb.jsx)(vb.e, {
                  name: "hourglass-clock"
                })
              }), !bb.approved && (0, zb.jsxs)("div", {
                className: "ThumbnailGridItemLabel ThumbnailPendingLabel",
                children: [bb.name, (0, zb.jsx)("br", {}), jb("thumbnail:pendingApproval")]
              })]
            }, ab))), (0, zb.jsxs)("div", {
              className: Xb()("ThumbnailGridItem ThumbnailUploadTile", {
                ThumbnailUploadTileDisabled: !Lb
              }),
              onClick: () => {
                Lb && function(bb) {
                  let {
                    schematicId: ab,
                    ownedThumbnailCount: Ub,
                    onThumbnailReady: Ab,
                    onClose: Tb
                  } = bb;
                  Mb.NotificationProvider.showCustomPopup({
                    body: bb => (0, zb.jsx)(tb, {
                      schematicId: ab,
                      ownedThumbnailCount: Ub,
                      onClose: bb,
                      onThumbnailReady: Ab
                    }),
                    middleScreenPopupClassName: "SchematicThumbnailPopup",
                    onClose: Tb,
                    unlockPointerKey: "schematicThumbnailUploaderPopup"
                  })
                }({
                  schematicId: Eb.schematicId,
                  ownedThumbnailCount: Zb.length,
                  onThumbnailReady: sb,
                  onClose: Pb
                })
              },
              children: [(0, zb.jsx)(vb.e, {
                name: "plus"
              }), (0, zb.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: jb("thumbnail:uploadThumbnail")
              })]
            })]
          })
        })]
      })
    }

    function Cb(bb) {
      let {
        rejectedThumbnails: ab,
        userContext: Ub,
        isMountedRef: Mb,
        onAcknowledged: Eb
      } = bb;
      const {
        t: eb
      } = (0, Yb.A)(), [Lb, Pb] = (0, Ab.useState)(!1), [Xb, jb] = (0, Ab.useState)(!1), Rb = function(bb) {
        const ab = new Map;
        for (const Ub of bb) {
          const bb = Ub.rejectionPolicyId,
            Ab = ab.get(bb);
          Ab ? Ab.push(Ub) : ab.set(bb, [Ub])
        }
        return ab
      }(ab);
      return (0, zb.jsxs)("div", {
        className: "ThumbnailRejectionNotice",
        children: [(0, zb.jsxs)("div", {
          className: "ThumbnailRejectionNoticeTitle",
          children: [(0, zb.jsx)(vb.e, {
            name: "triangle-exclamation"
          }), " ", eb("thumbnail:thumbnailsRejected"), " ", (0, zb.jsx)(vb.e, {
            name: "triangle-exclamation"
          })]
        }), (0, zb.jsx)("div", {
          className: "ThumbnailRejectionNoticeSubtitle",
          children: eb("thumbnail:thumbnailsRejectedDescription")
        }), (0, zb.jsx)("div", {
          className: "ThumbnailRejectionNoticeList",
          children: [...Rb.entries()].map((bb => {
            let [ab, Ub] = bb;
            const Ab = sb[ab];
            return (0, zb.jsxs)("div", {
              className: "ThumbnailRejectionNoticeGroup",
              children: [(0, zb.jsx)("div", {
                className: "ThumbnailRejectionNoticeItems",
                children: Ub.map((bb => (0, zb.jsxs)("div", {
                  className: "ThumbnailRejectionNoticeItem",
                  children: [(0, zb.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemIcon",
                    children: (0, zb.jsx)(vb.e, {
                      name: "image-slash"
                    })
                  }), (0, zb.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemDetails",
                    children: (0, zb.jsx)("div", {
                      className: "ThumbnailRejectionNoticeItemName",
                      children: bb.name
                    })
                  })]
                }, bb.id)))
              }), (0, zb.jsxs)("div", {
                className: "ThumbnailRejectionNoticeGroupReason",
                children: [eb("thumbnail:rejectionReason"), " ", Ab ? eb(Ab.reason) : ab]
              }), Ab && (0, zb.jsx)("ul", {
                className: "ThumbnailRejectionNoticeGroupTips",
                children: Ab.tips.map((bb => (0, zb.jsx)("li", {
                  children: eb(bb)
                }, bb)))
              })]
            }, ab)
          }))
        }), (0, zb.jsxs)("label", {
          className: "ThumbnailRejectionNoticeCheckbox",
          children: [(0, zb.jsx)(Nb.d, {
            checked: Lb,
            onChange: bb => Pb(bb.target.checked),
            disabled: Xb
          }), (0, zb.jsx)("span", {
            children: eb("thumbnail:haveReadRejectionReasons")
          })]
        }), (0, zb.jsx)(Tb.m, {
          onClick: async function() {
            jb(!0);
            const bb = await Promise.allSettled(ab.map((bb => Wb.b.deleteSchematicThumbnail(Ub, bb.id))));
            if (!Mb.current) return;
            const Ab = bb.filter((bb => "rejected" === bb.status));
            Ab.length > 0 && console.error("Some rejected thumbnails failed to delete:", Ab), Eb()
          },
          disabled: !Lb || Xb,
          className: "ThumbnailRejectionNoticeAcceptButton",
          children: Xb ? (0, zb.jsx)(Bb.b, {}) : eb("general:accept")
        })]
      })
    }

    function Vb(bb) {
      let {
        thumbnailId: ab,
        thumbnailName: Ub,
        onClose: Ab
      } = bb;
      const {
        t: Mb
      } = (0, Yb.A)();
      return (0, zb.jsxs)("div", {
        className: "ThumbnailDeleteConfirm",
        children: [(0, zb.jsx)("div", {
          className: "ThumbnailDeleteConfirmTitle",
          children: Mb("thumbnail:deleteThumbnail")
        }), (0, zb.jsxs)("div", {
          className: "ThumbnailDeleteConfirmImageContainer",
          children: [(0, zb.jsx)("img", {
            className: "ThumbnailDeleteConfirmImage",
            src: `${wb.clientSideServerUrls.s3Url}/customThumbnails/${ab}.jpg`,
            alt: "Thumbnail to delete"
          }), (0, zb.jsx)("div", {
            className: "ThumbnailGridItemLabel",
            children: Ub
          })]
        }), (0, zb.jsx)("div", {
          className: "ThumbnailDeleteConfirmSubtitle",
          children: Mb("thumbnail:deleteThumbnailConfirmation")
        }), (0, zb.jsxs)("div", {
          className: "ThumbnailDeleteConfirmButtons",
          children: [(0, zb.jsxs)(Tb.D, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => Ab(!0),
            children: [(0, zb.jsx)(vb.e, {
              name: "trash-can"
            }), " ", Mb("general:delete")]
          }), (0, zb.jsx)(Tb.h, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => Ab(!1),
            children: Mb("general:cancel")
          })]
        })]
      })
    }
    var Ob = Ub(2890),
      cb = Ub(4659),
      Jb = Ub(4668),
      nb = Ub(4701);

    function Sb(bb) {
      let {
        schematicData: ab,
        setTexturePack: Ub,
        initializeTexturePack: Mb,
        publishFormEnabled: Tb
      } = bb;
      const {
        t: Eb
      } = (0, Yb.A)(), [Bb, eb] = (0, Ab.useState)(null), [vb, Lb] = (0, Ab.useState)(null), [Pb, jb] = (0, Ab.useState)(!1), Rb = (0, Hb.b)(), kb = Tb && !Pb, yb = ab.customTexturePackKey;

      function Zb(bb) {
        var ab;
        eb(bb.metaData.id), Lb(null !== (ab = bb.metaData.fromFolderName) && void 0 !== ab ? ab : null), (bb.metaData.id !== Ob.q.CUSTOM || bb.metaData.fromFolderName) && Ub(bb)
      }
      return (0, Ab.useEffect)((() => {
        yb && (jb(!0), (0, cb.e)(yb).then((bb => {
          var ab;
          Rb.current && (bb ? (eb(bb.metaData.id), Lb(null !== (ab = bb.metaData.fromFolderName) && void 0 !== ab ? ab : null), Mb(bb)) : console.error(`No texture pack at ${yb}`))
        })).catch((bb => {
          console.error("Error fetching texture pack: ", bb)
        })).finally((() => {
          jb(!1)
        })))
      }), [yb, Mb, Rb]), (0, zb.jsxs)("div", {
        className: "BloxdForm TexturePackSection",
        children: [(0, zb.jsx)("div", {
          className: "SectionTitle",
          children: Eb("customTexturePack:customTexturePack")
        }), (0, zb.jsxs)("div", {
          className: "TexturePackList",
          children: [(0, zb.jsx)("div", {
            className: Xb()("TexturePack", {
              Selected: null === Bb && !Pb,
              Disabled: !kb
            }),
            onClick: () => {
              kb && (eb(null), Ub(null), Lb(null))
            },
            children: (0, zb.jsx)("div", {
              className: "TexturePackName",
              children: "No Override"
            })
          }), Object.values(Ob.q).map((bb => (0, zb.jsx)(Jb.e, {
            id: bb,
            isSelected: bb === Bb,
            setSelected: Zb,
            disabled: !kb
          }, bb)))]
        }), Bb === Ob.q.CUSTOM && (0, zb.jsx)(nb.b, {
          folderName: vb,
          onTexturePackUpdated: Zb,
          disabled: !kb,
          maxFileSizeMb: 25,
          packOwner: "customGame"
        })]
      })
    }
    var ba = Ub(4714);

    function aa(bb) {
      var ab;
      let {
        gameCategory: Ub,
        setGameCategory: Ab,
        disabled: Mb
      } = bb;
      const Eb = null !== (ab = (0, jb.ab)(Ub)) && void 0 !== ab ? ab : "other";
      return (0, zb.jsxs)("div", {
        className: "GameCategoryPicker",
        children: [(0, zb.jsx)(yb.g, {
          label: "worldBuilder:gameCategoryGroup",
          className: "GameCategoryGroup",
          disabled: Mb,
          children: (0, zb.jsx)(Zb.c, {
            options: jb.S.map((bb => ({
              value: bb,
              label: jb.R[bb]
            }))),
            value: Eb,
            onChange: bb => {
              bb.value !== Eb && Ab(jb.K[bb.value][0])
            }
          })
        }), (0, zb.jsx)(yb.g, {
          label: "worldBuilder:gameCategory",
          className: "GameCategory",
          disabled: Mb,
          children: (0, zb.jsx)("div", {
            className: "GameCategoryOptions",
            children: jb.K[Eb].map((bb => (0, zb.jsx)(Tb.M, {
              active: bb === Ub,
              onClick: () => {
                Ab(bb)
              },
              children: (0, jb._)(bb)
            }, bb)))
          })
        })]
      })
    }

    function Ua(bb) {
      let {
        editor: ab,
        onClose: Ub
      } = bb;
      const {
        t: Ab
      } = (0, Yb.A)(), {
        schematicData: Mb,
        updateSchematicData: Tb,
        publishFormEnabled: Bb,
        formEnabled: eb
      } = ab;
      return (0, zb.jsxs)(zb.Fragment, {
        children: [(0, zb.jsxs)(xb, {
          icon: "pen-to-square",
          title: Ab("worldBuilder:basicsSection"),
          disabled: !eb,
          children: [(0, zb.jsx)(ib, {
            label: Ab("general:name"),
            caption: Ab("worldBuilder:schematicNameTagsHint"),
            children: (0, zb.jsx)(Eb.c, {
              className: "SchematicPageName",
              defaultValue: Mb.name,
              onValueChange: bb => Tb("name", bb),
              placeholderText: Ab("worldBuilder:schematicNamePlaceholder"),
              maxLength: Lb.wb
            })
          }), (0, zb.jsx)(ib, {
            label: Ab("general:description"),
            children: (0, zb.jsx)(Eb.c, {
              className: "SchematicPageDescription",
              useTextarea: !0,
              defaultValue: Mb.description,
              onValueChange: bb => Tb("description", bb),
              placeholderText: Ab("worldBuilder:schematicDescriptionPlaceholder"),
              maxLength: Lb.ub
            })
          }), (0, zb.jsx)(aa, {
            gameCategory: Mb.gameCategory,
            setGameCategory: bb => Tb("gameCategory", bb),
            disabled: !Bb
          }), !0 === Mb.gamePublished && (0, zb.jsx)(gb, {
            schematicData: Mb,
            updateSchematicData: Tb,
            publishFormEnabled: Bb,
            onClose: function() {
              null === Ub || void 0 === Ub || Ub()
            }
          })]
        }), (0, zb.jsx)(mb, {
          schematicData: Mb,
          updateSchematicData: Tb,
          publishFormEnabled: Bb,
          formEnabled: eb
        }), !0 === Mb.gamePublished && (0, zb.jsx)(xb, {
          icon: "palette",
          title: Ab("worldBuilder:texturePackSection"),
          disabled: !eb,
          children: (0, zb.jsx)(Sb, {
            schematicData: Mb,
            setTexturePack: ab.setTexturePack,
            initializeTexturePack: ab.initializeTexturePack,
            publishFormEnabled: Bb
          })
        })]
      })
    }

    function Aa(bb) {
      let {
        editor: ab
      } = bb;
      const {
        t: Ub
      } = (0, Yb.A)(), {
        schematicData: Ab,
        formEnabled: Mb,
        hasUnsavedChanges: Eb
      } = ab, Lb = Mb && Eb;
      return (0, zb.jsxs)("footer", {
        className: "SchematicPageFooter",
        children: [Mb && Eb && (0, zb.jsxs)("div", {
          className: "SchematicPageFooterStatus",
          children: [(0, zb.jsx)("span", {
            className: "SchematicPageFooterStatusDot"
          }), Ub("worldBuilder:unsavedChanges")]
        }), (0, zb.jsx)(eb.g, {
          tooltipInner: (0, zb.jsx)("div", {
            className: "SaveButtonTooltip",
            children: Ub(Mb && !Eb ? "worldBuilder:saveChangesNoneDescription" : "worldBuilder:saveChangesDescription")
          }),
          children: (0, zb.jsxs)(Tb.g, {
            className: "SaveChangesButton",
            onClick: () => ab.saveSchematic(Ab.gamePublished),
            disabled: !Lb,
            children: [(0, zb.jsxs)("span", {
              className: Mb ? "" : "SaveChangesButtonBodyHidden",
              children: [(0, zb.jsx)(vb.e, {
                name: "wrench"
              }), " ", Ub("worldBuilder:saveChanges")]
            }), !Mb && (0, zb.jsx)(Bb.b, {})]
          })
        })]
      })
    }

    function Ma(bb) {
      let {
        schematic: ab,
        onSchematicUpdate: Ub,
        onClose: Mb,
        inSourceWorld: Eb
      } = bb;
      const {
        t: Bb
      } = (0, Yb.A)();

      function eb() {
        null === Mb || void 0 === Mb || Mb()
      }
      const vb = (0, ba.d)(ab, {
        onNavigateAway: eb,
        inSourceWorld: Eb
      });
      return (0, Ab.useEffect)((() => {
        null === Ub || void 0 === Ub || Ub(vb.schematicData)
      }), [vb.schematicData, Ub]), (0, zb.jsxs)("div", {
        className: "SchematicPage SchematicPagePopupVariant",
        children: [(0, zb.jsxs)("div", {
          className: "SchematicPageBody",
          children: [(0, zb.jsx)(Tb.e, {
            onClick: eb,
            children: Bb("worldBuilder:back")
          }), (0, zb.jsx)(xb, {
            icon: "rocket-launch",
            title: Bb("worldBuilder:actionsSection"),
            disabled: !vb.formEnabled,
            children: (0, zb.jsx)(pb.d, {
              editor: vb
            })
          }), (0, zb.jsx)(Ua, {
            editor: vb,
            onClose: eb
          })]
        }), (0, zb.jsx)(Aa, {
          editor: vb
        })]
      })
    }

    function Ta(bb) {
      let {
        schematic: ab,
        onSchematicUpdate: Ub,
        onClose: Ab,
        inSourceWorld: Tb
      } = bb;
      Mb.NotificationProvider.showCustomPopup({
        body: bb => (0, zb.jsx)(Ma, {
          schematic: ab,
          onSchematicUpdate: Ub,
          onClose: bb,
          inSourceWorld: Tb
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: Ab,
        unlockPointerKey: "schematicPagePopup"
      })
    }
  },
  4635: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Lb
    });
    var Ab = Ub(984),
      Mb = Ub.n(Ab),
      Tb = Ub(1134),
      Eb = Ub(990),
      Yb = Ub(1352),
      Bb = Ub(1268),
      eb = Ub(1254),
      vb = Ub(1023);

    function Lb(bb) {
      let {
        editor: ab,
        className: Ub
      } = bb;
      const {
        t: Ab
      } = (0, Tb.A)(), {
        schematicData: Lb,
        formEnabled: Pb,
        publishFormEnabled: Xb
      } = ab, jb = !Pb || !Xb;
      return (0, vb.jsxs)("div", {
        className: Mb()("PublishButtonContainer", Ub),
        children: [ab.canEditSourceWorld && (0, vb.jsxs)(Yb.g, {
          onClick: ab.editSourceWorld,
          disabled: jb,
          children: [(0, vb.jsx)(Eb.e, {
            name: "edit"
          }), " ", Ab("worldBuilder:editSourceWorld")]
        }), !Lb.gamePublished && (0, vb.jsx)(Bb.g, {
          tooltipInner: (0, vb.jsx)("div", {
            className: "PublishButtonTooltip",
            children: Ab("worldBuilder:publishAsGameDescription")
          }),
          children: (0, vb.jsxs)(Yb.m, {
            onClick: () => ab.saveSchematic(!0),
            disabled: jb,
            children: [(0, vb.jsx)(Eb.e, {
              name: "rocket-launch"
            }), " ", Ab("worldBuilder:publishAsGame"), " ", (0, vb.jsx)(Eb.e, {
              name: "info-circle"
            })]
          })
        }), !0 === Lb.gamePublished && (0, vb.jsxs)(vb.Fragment, {
          children: [(0, vb.jsx)(Bb.g, {
            tooltipInner: (0, vb.jsx)("div", {
              className: "PublishButtonTooltip",
              children: Ab("worldBuilder:unpublishAsGameDescription")
            }),
            children: (0, vb.jsxs)(Yb.D, {
              onClick: ab.unpublishSchematic,
              disabled: jb,
              children: [(0, vb.jsx)(Eb.e, {
                name: "rocket-launch"
              }), " ", Ab("worldBuilder:unpublishAsGame"), " ", (0, vb.jsx)(Eb.e, {
                name: "info-circle"
              })]
            })
          }), (0, vb.jsxs)(Yb.g, {
            onClick: ab.playGame,
            disabled: jb,
            children: [(0, vb.jsx)(Eb.e, {
              name: "joystick"
            }), " ", Ab("general:playGame")]
          })]
        }), !Pb && (0, vb.jsx)(eb.b, {
          loaderType: "Secondary"
        })]
      })
    }
  },
  4659: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Mb
    });
    var Ab = Ub(1142);
    async function Mb(bb) {
      const ab = await fetch(`${Ab.clientSideServerUrls.s3Url}/${bb}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === ab.status || 403 === ab.status) return null;
      if (!ab.ok) throw new Error(`Failed to download the texture pack (${ab.status})`);
      return await ab.json()
    }
  },
  4714: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => kb
    });
    var Ab = Ub(52),
      Mb = Ub(1249),
      Tb = Ub(950),
      Eb = Ub(166),
      Yb = Ub(1464),
      Bb = Ub(19),
      eb = Ub(1824),
      vb = Ub(1413),
      Lb = Ub(4269),
      Pb = Ub(1260),
      Xb = Ub(1060),
      jb = Ub(1433);

    function Rb(bb, ab) {
      return {
        schematicId: bb.schematicId,
        name: bb.name,
        description: bb.description,
        gamePublished: ab,
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

    function kb(bb) {
      let {
        onNavigateAway: ab,
        inSourceWorld: Ub = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const {
        userContext: kb
      } = (0, Xb.c)(), yb = (0, jb.useNavigatePreserveSearch)(), [Zb, Db] = (0, Ab.useState)({
        ...bb
      }), [zb, xb] = (0, Ab.useState)("Enter"), [ib, fb] = (0, Ab.useState)(void 0), mb = (0, Ab.useRef)(Rb(bb, bb.gamePublished)), pb = (0, Ab.useRef)(void 0), Nb = "Enter" === zb, Wb = kb.playerHasRank("developer") || kb.playerHasRank("admin") || "Enter" === zb && !1 !== Zb.schematicContainsSpawnBlock, Hb = void 0 !== ib && ib !== pb.current || JSON.stringify(Rb(Zb, Zb.gamePublished)) !== JSON.stringify(mb.current);

      function Ib(bb, ab) {
        Db((Ub => ({
          ...Ub,
          [bb]: ab
        })))
      }
      const db = (0, Ab.useCallback)((bb => {
        pb.current = bb, fb(bb)
      }), []);

      function Fb(bb) {
        xb("Loading");
        const ab = Rb(Zb, bb),
          Ub = ib !== pb.current ? ib : void 0;
        vb.b.updateSchematic(kb, ab, Ub).then((Ub => {
          let {
            customTexturePackKey: Ab
          } = Ub;
          xb("Success"), Ib("customTexturePackKey", Ab), mb.current = ab, pb.current = void 0, fb(void 0), setTimeout((() => {
            Ib("gamePublished", bb), xb("Enter")
          }), 1e3)
        })).catch((bb => {
          var ab;
          (console.error("Failed to save schematic:", bb), xb("Error"), bb instanceof Eb.c && bb.errorMessageForUser) && Pb.NotificationProvider.showAlertPopup({
            title: "worldBuilder:changesNotSaved",
            subtitle: bb.errorMessageForUser,
            textOpts: {
              subtitle: null !== (ab = bb.errorMessageTranslationParams) && void 0 !== ab ? ab : void 0
            },
            confirmText: "general:ok"
          });
          setTimeout((() => {
            xb("Enter")
          }), 1e3)
        }))
      }
      return {
        schematicData: Zb,
        updateSchematicData: Ib,
        setTexturePack: fb,
        initializeTexturePack: db,
        updateState: zb,
        formEnabled: Nb,
        publishFormEnabled: Wb,
        hasUnsavedChanges: Hb,
        canEditSourceWorld: !Ub,
        saveSchematic: Fb,
        unpublishSchematic: function() {
          Pb.NotificationProvider.showPromptPopup({
            icon: "rocket-launch",
            title: "worldBuilder:unpublishAsGameConfirmTitle",
            subtitle: "worldBuilder:unpublishAsGameConfirmSubtitle",
            confirmText: "worldBuilder:unpublishAsGame",
            cancelText: "general:cancel",
            unlockPointerKey: "unpublishGamePrompt"
          }).getResult().then((bb => {
            !0 === bb && Fb(!1)
          }))
        },
        editSourceWorld: function() {
          xb("Loading"), Lb.c.getSourceWorld(Zb.schematicId).then((bb => {
            eb.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, Bb.k)("other"), yb((0, Mb.b)("classic", bb)), null === ab || void 0 === ab || ab()
          })).catch((bb => {
            console.error("Failed to get source world:", bb), xb("Error"), setTimeout((() => {
              xb("Enter")
            }), 1e3)
          }))
        },
        playGame: function() {
          eb.gameBridge.send("leaveGame", {
            reloadPath: "/"
          }), yb((0, Yb.v)((0, Tb.s)(Zb.schematicId), Zb)), null === ab || void 0 === ab || ab()
        }
      }
    }
  },
  4629: () => {}
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);