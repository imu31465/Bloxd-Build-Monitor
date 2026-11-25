export const id = 107;
export const ids = [107];
export const modules = {
  5104: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Qt,
      i: () => Xt,
      j: () => lt
    });
    Vt(5108);
    var Ot = Vt(1286),
      qt = Vt(1140),
      Dt = Vt.n(qt),
      mt = Vt(1464),
      dt = (Vt(63), Vt(4475)),
      jt = Vt(1152),
      Ht = Vt(1188);

    function Xt(tt) {
      let {
        children: et,
        label: Vt,
        className: qt,
        circleInfoText: dt,
        disabled: Xt,
        onLabelClick: Qt
      } = tt;
      const {
        t: lt
      } = (0, Ot.H)(), Et = (0, Ht.jsxs)("div", {
        className: Dt()("Label", {
          ClickableLabel: void 0 !== Qt
        }),
        onClick: Qt,
        children: [lt(Vt), dt && (0, Ht.jsx)(jt.b, {
          name: "circle-info"
        })]
      });
      return (0, Ht.jsxs)("div", {
        className: Dt()("LabeledInput", {
          [qt]: qt,
          DisabledLabelInput: Xt
        }),
        children: [dt && (0, Ht.jsx)(mt.g, {
          tooltipInner: (0, Ht.jsx)("div", {
            className: "LabeledInputTooltip",
            children: lt(dt)
          }),
          children: Et
        }), !dt && Et, et]
      })
    }

    function Qt(tt) {
      let {
        checked: et,
        setChecked: Vt
      } = tt;
      return (0, Ht.jsx)("div", {
        className: "OtherInput ClickableOtherInput",
        "data-pad-focusable": !0,
        onClick: tt => {
          Vt(!et)
        },
        children: (0, Ht.jsx)(dt.b, {
          checked: et,
          onChange: tt => {
            Vt(tt.target.checked)
          },
          disabled: !1
        })
      })
    }

    function lt(tt) {
      let {
        checked: et,
        setChecked: Vt,
        disabled: Ot
      } = tt;
      return (0, Ht.jsx)("div", {
        className: Dt()("SwitchContainer", {
          SwitchContainerDisabled: Ot
        }),
        onClick: () => {
          Ot || Vt(!et)
        },
        children: (0, Ht.jsx)(dt.b, {
          className: "SwitchCheckbox",
          checked: et,
          onChange: tt => {
            Vt(tt.target.checked)
          },
          disabled: !!Ot
        })
      })
    }
  },
  5116: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Ht
    });
    var Ot = Vt(1140),
      qt = Vt.n(Ot),
      Dt = Vt(4771),
      mt = Vt(1286),
      dt = Vt(1188);
    const jt = [...Dt.k, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function Ht(tt) {
      const {
        disabled: et,
        hideWrapper: Vt
      } = tt, {
        t: Ot
      } = (0, mt.H)(), Ht = tt.advancedMode ? jt.map((et => [et, tt.callbacks[et]])) : Dt.k.map((et => [et, tt.callbacks[et]])), Qt = (0, dt.jsx)("div", {
        className: qt()("PluginsGrid", {
          SectionBody: !Vt
        }),
        children: Ht.map((tt => {
          let [Vt, Ot] = tt;
          return (0, dt.jsx)(Xt, {
            plugin: Vt,
            callbacks: Ot,
            disabled: et
          }, Vt)
        }))
      });
      return Vt ? Qt : (0, dt.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, dt.jsx)("div", {
          className: "SectionTitle",
          children: Ot("worldBuilder:pluginsSection")
        }), Qt]
      })
    }

    function Xt(tt) {
      let {
        plugin: et,
        callbacks: {
          isEnabled: Vt,
          Av: Ot
        },
        disabled: Dt
      } = tt;
      const {
        t: jt
      } = (0, mt.H)(), Ht = Vt();
      return (0, dt.jsxs)("div", {
        className: qt()("PluginCard", {
          PluginCardEnabled: Ht,
          PluginCardDisabledForm: Dt
        }),
        "data-pad-focusable": !0,
        "aria-disabled": Dt || void 0,
        onClick: () => {
          Dt || Ot(!Ht)
        },
        children: [(0, dt.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, dt.jsx)("img", {
            src: `/textures/games/classic/customGames/${et}.png`,
            alt: et
          })
        }), (0, dt.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, dt.jsx)("div", {
            className: "PluginCardTitle",
            children: jt(Qt[et])
          }), (0, dt.jsx)("div", {
            className: "PluginCardDescription",
            children: jt(lt[et])
          })]
        }), (0, dt.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: jt(Ht ? "general:on" : "general:off")
        })]
      })
    }
    const Qt = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      lt = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  5101: (tt, et, Vt) => {
    Vt.d(et, {
      k: () => De,
      d: () => qe,
      g: () => Oe,
      o: () => me
    });
    var Ot = Vt(63),
      qt = Vt(1450),
      Dt = Vt(1556),
      mt = Vt(1770),
      dt = Vt(1286),
      jt = Vt(1436),
      Ht = Vt(1464),
      Xt = Vt(1152),
      Qt = Vt(1308),
      lt = Vt(1140),
      Et = Vt.n(lt),
      ft = Vt(377),
      wt = Vt(4771),
      yt = Vt(1325),
      Nt = Vt(5104),
      Mt = Vt(3192),
      bt = Vt(5116),
      Jt = Vt(1188);

    function Ct(tt) {
      let {
        icon: et,
        title: Vt,
        disabled: Ot,
        children: qt
      } = tt;
      return (0, Jt.jsxs)("div", {
        className: Et()("ManageCard", {
          ManageCardDisabled: Ot
        }),
        children: [(0, Jt.jsxs)("div", {
          className: "ManageCardHead",
          children: [(0, Jt.jsx)("div", {
            className: "ManageCardIcon",
            children: (0, Jt.jsx)(Xt.b, {
              name: et
            })
          }), (0, Jt.jsx)("div", {
            children: (0, Jt.jsx)("h2", {
              className: "ManageCardTitle",
              children: Vt
            })
          })]
        }), (0, Jt.jsxs)("div", {
          className: "ManageCardBody",
          children: [qt, Ot && (0, Jt.jsx)("div", {
            className: "ManageCardDisabledOverlay"
          })]
        })]
      })
    }

    function ut(tt) {
      let {
        label: et,
        caption: Vt,
        children: Ot
      } = tt;
      return (0, Jt.jsxs)("div", {
        className: "ManageStackedField",
        children: [(0, Jt.jsx)("div", {
          className: "ManageStackedFieldLabel",
          children: et
        }), Ot, Vt && (0, Jt.jsx)("div", {
          className: "ManageStackedFieldCaption",
          children: Vt
        })]
      })
    }

    function Kt(tt) {
      let {
        label: et,
        caption: Vt,
        disabled: Ot,
        children: qt
      } = tt;
      return (0, Jt.jsxs)("div", {
        className: Et()("ManageField", {
          ManageFieldDisabled: Ot
        }),
        children: [(0, Jt.jsxs)("div", {
          className: "ManageFieldText",
          children: [(0, Jt.jsx)("div", {
            className: "ManageFieldLabel",
            children: et
          }), (0, Jt.jsx)("div", {
            className: "ManageFieldCaption",
            children: Vt
          })]
        }), (0, Jt.jsx)("div", {
          className: "ManageFieldControl",
          children: qt
        })]
      })
    }

    function ht(tt) {
      var et, Vt;
      let {
        schematicData: Ot,
        updateSchematicData: qt,
        publishFormEnabled: Dt,
        formEnabled: mt
      } = tt;
      const {
        t: jt
      } = (0, dt.H)(), Ht = !Dt, Xt = {
        tpRequests: {
          isEnabled: () => !Ot.disableTpRequests,
          Av: tt => qt("disableTpRequests", !tt)
        },
        spawnProtection: {
          isEnabled: () => !Ot.disableSpawnProtection,
          Av: tt => qt("disableSpawnProtection", !tt)
        },
        spawnReset: {
          isEnabled: () => !!Ot.enableSpawnReset,
          Av: tt => qt("enableSpawnReset", tt)
        },
        smpMarketplace: {
          isEnabled: () => !!Ot.enableSmpMarketplace,
          Av: tt => qt("enableSmpMarketplace", tt)
        },
        survivalGuns: {
          isEnabled: () => !!Ot.enableSurvivalGuns,
          Av: tt => qt("enableSurvivalGuns", tt)
        },
        fallDamage: {
          isEnabled: () => !Ot.disableFallDamage,
          Av: tt => qt("disableFallDamage", !tt)
        },
        dayNight: {
          isEnabled: () => !!Ot.enableDayNight,
          Av: tt => qt("enableDayNight", tt)
        }
      };
      return (0, Jt.jsxs)(Jt.Fragment, {
        children: [!1 === Ot.schematicContainsSpawnBlock && (0, Jt.jsx)("div", {
          className: "ManageWarningBanner",
          children: jt("worldBuilder:mustContainSpawnBlock")
        }), (0, Jt.jsxs)("div", {
          className: "ManageSettingsGrid",
          children: [(0, Jt.jsxs)(Ct, {
            icon: "globe",
            title: jt("worldBuilder:worldRulesSection"),
            disabled: !mt,
            children: [(0, Jt.jsx)(Kt, {
              label: jt("classic:defaultGamemode"),
              caption: jt("classic:defaultGamemodeDescription"),
              disabled: Ht,
              children: (0, Jt.jsx)(Mt.e, {
                controlClassName: "ManageDropdown",
                options: wt.I.map((tt => ({
                  value: tt,
                  label: ft.p[tt]
                }))),
                value: Ot.defaultGamemode,
                onChange: tt => qt("defaultGamemode", tt.value)
              })
            }), (0, Jt.jsx)(Kt, {
              label: jt("classic:voidDeathHeight"),
              caption: jt("classic:voidDeathHeightDescription"),
              disabled: Ht,
              children: (0, Jt.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, Jt.jsx)("input", {
                  type: "number",
                  max: yt.H,
                  value: null !== (et = Ot.voidDeathHeight) && void 0 !== et ? et : "",
                  onChange: tt => {
                    const et = parseInt(tt.target.value);
                    qt("voidDeathHeight", et)
                  }
                }), (0, Jt.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: jt("worldBuilder:blocksUnit")
                })]
              })
            }), (0, Jt.jsx)(Kt, {
              label: jt("classic:worldBorder"),
              caption: jt("classic:worldBorderDescription"),
              disabled: Ht,
              children: (0, Jt.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, Jt.jsx)("input", {
                  type: "number",
                  min: yt.M,
                  max: yt.J,
                  placeholder: jt("worldBuilder:noWorldBorderLimit"),
                  value: null !== (Vt = Ot.worldBorder) && void 0 !== Vt ? Vt : "",
                  onChange: tt => {
                    const et = parseInt(tt.target.value);
                    qt("worldBorder", isNaN(et) ? null : et)
                  }
                }), (0, Jt.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: jt("worldBuilder:blocksUnit")
                })]
              })
            }), (0, Jt.jsx)(Kt, {
              label: jt("classic:disableMobs"),
              caption: jt("classic:disableMobsDescription"),
              disabled: Ht,
              children: (0, Jt.jsx)(Nt.j, {
                checked: Ot.disableMobs,
                setChecked: tt => qt("disableMobs", tt),
                disabled: Ht
              })
            })]
          }), (0, Jt.jsxs)(Ct, {
            icon: "user-group",
            title: jt("worldBuilder:playerAndLobbySection"),
            disabled: !mt,
            children: [(0, Jt.jsx)(Kt, {
              label: jt("classic:disableKeepInventory"),
              caption: jt("classic:disableKeepInventoryDescription"),
              disabled: Ht,
              children: (0, Jt.jsx)(Nt.j, {
                checked: Ot.disableKeepInventory,
                setChecked: tt => qt("disableKeepInventory", tt),
                disabled: Ht
              })
            }), (0, Jt.jsx)(Kt, {
              label: jt("classic:persistInventory"),
              caption: jt("classic:persistInventoryDescription"),
              disabled: Ht,
              children: (0, Jt.jsx)(Mt.e, {
                controlClassName: "ManageDropdown",
                options: wt.l.map((tt => ({
                  value: tt,
                  label: ft.f[tt]
                }))),
                value: Ot.persistInventory,
                onChange: tt => qt("persistInventory", tt.value)
              })
            }), (0, Jt.jsx)(Kt, {
              label: jt("classic:persistWorld"),
              caption: jt("classic:persistWorldDescription"),
              disabled: Ht,
              children: (0, Jt.jsx)(Nt.j, {
                checked: Ot.persistWorld,
                setChecked: tt => qt("persistWorld", tt),
                disabled: Ht
              })
            }), (0, Jt.jsx)(Kt, {
              label: jt("classic:disableLobbySpawn"),
              caption: jt("classic:disableLobbySpawnDescription"),
              disabled: Ht,
              children: (0, Jt.jsx)(Nt.j, {
                checked: Ot.disableLobbySpawn,
                setChecked: tt => qt("disableLobbySpawn", tt),
                disabled: Ht
              })
            }), (0, Jt.jsx)(Kt, {
              label: jt("classic:hideLobbyCode"),
              caption: jt("classic:hideLobbyCodeDescription"),
              disabled: Ht,
              children: (0, Jt.jsx)(Nt.j, {
                checked: Ot.hideLobbyCode,
                setChecked: tt => qt("hideLobbyCode", tt),
                disabled: Ht
              })
            })]
          })]
        }), (0, Jt.jsx)(Ct, {
          icon: "layer-group",
          title: jt("worldBuilder:pluginsSection"),
          disabled: !mt,
          children: (0, Jt.jsx)(bt.c, {
            callbacks: Xt,
            disabled: Ht,
            advancedMode: !0,
            hideWrapper: !0
          })
        })]
      })
    }
    var vt = Vt(5118),
      Wt = Vt(4475),
      St = Vt(1600),
      ct = Vt(3555),
      Rt = Vt(1218),
      It = Vt(5081),
      Pt = Vt(5124),
      Zt = Vt(1564);
    const Lt = 50,
      Ft = .3;
    async function kt(tt) {
      const et = await
      function(tt) {
        return new Promise(((et, Vt) => {
          const Ot = new FileReader;
          Ot.onload = () => et(Ot.result), Ot.onerror = Vt, Ot.readAsDataURL(tt)
        }))
      }(tt), Vt = await
      function(tt) {
        return new Promise(((et, Vt) => {
          const Ot = new Image;
          Ot.onload = () => et(Ot), Ot.onerror = () => Vt(new Error("Failed to load image")), Ot.src = tt
        }))
      }(et);
      if (Vt.naturalHeight > Vt.naturalWidth) throw new Gt;
      const Ot = 1024 * Lt,
        {
          dataUrl: qt,
          finalQuality: Dt
        } = function(tt, et) {
          const Vt = document.createElement("canvas");
          Vt.width = tt.naturalWidth, Vt.height = tt.naturalHeight, Vt.getContext("2d").drawImage(tt, 0, 0);
          let Ot = .92,
            qt = Vt.toDataURL("image/jpeg", Ot);
          for (; .75 * qt.length > et && Ot > .05;) Ot -= .05, qt = Vt.toDataURL("image/jpeg", Ot);
          return {
            dataUrl: qt,
            finalQuality: Ot
          }
        }(Vt, Ot);
      if (Math.ceil(.75 * qt.length) > Ot) throw new zt;
      return {
        base64Jpg: qt,
        heavilyCompressed: Dt < Ft
      }
    }
    class Gt extends Error {}
    class zt extends Error {}
    var ot = function(tt) {
      return tt[tt.NOT_LOGGED_IN = 0] = "NOT_LOGGED_IN", tt[tt.THUMBNAIL_LIMIT_REACHED = 1] = "THUMBNAIL_LIMIT_REACHED", tt
    }(ot || {});

    function rt(tt) {
      var et;
      let {
        schematicId: Vt,
        hasReadUploadPolicy: qt,
        onPolicyValidationError: jt,
        onThumbnailReady: Ht
      } = tt;
      const {
        t: lt
      } = (0, dt.H)(), [ft, wt] = (0, Ot.useState)(null), [yt, Nt] = (0, Ot.useState)(""), [Mt, bt] = (0, Ot.useState)(""), [Ct, ut] = (0, Ot.useState)(!0), [Kt, ht] = (0, Ot.useState)(!1), vt = (0, Ot.useRef)(!1), [Wt, St] = (0, Ot.useState)(null), [ct, Rt] = (0, Ot.useState)(!1), [It, Zt] = (0, Ot.useState)(!1), Lt = (0, Ot.useRef)(0), {
        getRootProps: Ft,
        getInputProps: ot,
        isDragActive: rt
      } = (0, Pt.e)({
        accept: {
          "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp"]
        },
        multiple: !1,
        onDrop: async tt => {
          if (0 === tt.length) return;
          const et = tt[0],
            Vt = ++Lt.current;
          St(null), Rt(!1), wt(null), Nt(et.name);
          try {
            const tt = await kt(et);
            if (Vt !== Lt.current) return;
            wt(tt), Rt(tt.heavilyCompressed)
          } catch (Ot) {
            if (Vt !== Lt.current) return;
            St(lt(Ot instanceof Gt ? "thumbnail:portraitImagesNotAllowed" : Ot instanceof zt ? "thumbnail:couldNotCompressImage" : "thumbnail:failedToUploadImage"))
          }
        },
        useFsAccessApi: !1
      }), Ut = yt.length <= 30 ? yt : `${yt.slice(0,27)}...`, At = null !== (et = null === ft || void 0 === ft ? void 0 : ft.base64Jpg) && void 0 !== et ? et : null, it = Mt.trim(), Yt = it.length >= Qt.k && it.length <= Qt.i, Bt = It && !ft && !Wt, pt = It && !Yt;
      return (0, Jt.jsxs)("div", {
        className: "ThumbnailUploadContainer",
        children: [(0, Jt.jsxs)("div", {
          ...Ft({
            className: Et()("ThumbnailUploadDropzone", {
              ActiveDrag: rt,
              ValidationError: Bt
            })
          }),
          children: [(0, Jt.jsx)("input", {
            ...ot()
          }), !rt && At ? (0, Jt.jsxs)(Jt.Fragment, {
            children: [(0, Jt.jsxs)("div", {
              className: "ThumbnailAspectPreviews",
              children: [(0, Jt.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, Jt.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "1:1"
                }), (0, Jt.jsx)("div", {
                  className: "ThumbnailAspectFrame Square",
                  children: (0, Jt.jsx)("img", {
                    src: At,
                    alt: "1:1 preview"
                  })
                })]
              }), (0, Jt.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, Jt.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "16:9"
                }), (0, Jt.jsx)("div", {
                  className: "ThumbnailAspectFrame Wide",
                  children: (0, Jt.jsx)("img", {
                    src: At,
                    alt: "16:9 preview"
                  })
                })]
              })]
            }), (0, Jt.jsxs)("div", {
              children: [(0, Jt.jsx)("div", {
                className: "ThumbnailUploadInstructions Active",
                children: Ut
              }), (0, Jt.jsx)("div", {
                className: "ThumbnailUploadInstructions Preview",
                children: lt("thumbnail:preview")
              })]
            })]
          }) : (0, Jt.jsxs)(Jt.Fragment, {
            children: [(0, Jt.jsx)("div", {
              className: "ThumbnailUploadIcon",
              children: (0, Jt.jsx)(Xt.b, {
                name: "image"
              })
            }), (0, Jt.jsx)("div", {
              className: "ThumbnailUploadInstructions",
              children: lt("thumbnail:dragImageHere")
            })]
          })]
        }), Bt && (0, Jt.jsx)("div", {
          className: "ThumbnailUploadError",
          children: lt("thumbnail:imageRequired")
        }), (0, Jt.jsx)(mt.d, {
          className: Et()("ThumbnailUploadNameInput", {
            ValidationError: pt
          }),
          placeholderText: lt("thumbnail:thumbnailName"),
          defaultValue: Mt,
          onValueChange: tt => {
            bt(tt)
          },
          maxLength: Qt.i
        }), pt && (0, Jt.jsx)("div", {
          className: "ThumbnailUploadError",
          children: lt("thumbnail:nameRequired", {
            min: Qt.k,
            max: Qt.i
          })
        }), (0, Jt.jsxs)("label", {
          className: "ThumbnailUploadCheckbox",
          children: [(0, Jt.jsx)("input", {
            type: "checkbox",
            checked: Ct,
            onChange: tt => {
              ut(tt.target.checked)
            }
          }), lt("thumbnail:setAsThumbnailOnceApproved")]
        }), ct && (0, Jt.jsx)("div", {
          className: "ThumbnailUploadWarning",
          children: lt("thumbnail:heavyCompressionWarning")
        }), Wt && (0, Jt.jsx)("div", {
          className: "ThumbnailUploadError",
          children: Wt
        }), (0, Jt.jsx)(Dt.m, {
          disabled: Kt,
          className: "ThumbnailUploadButton",
          onClick: async () => {
            if (Zt(!0), !vt.current && ft && Yt && qt) {
              vt.current = !0, ht(!0), St(null);
              try {
                await Ht(ft.base64Jpg, it, Ct ? Vt : null)
              } catch (tt) {
                St(tt.errorMessageForUser ? lt(tt.errorMessageForUser, tt.errorMessageTranslationParams) : lt("thumbnail:failedToUploadImage"))
              } finally {
                vt.current = !1, ht(!1)
              }
            } else qt || jt()
          },
          children: lt(Kt ? "thumbnail:processing" : "thumbnail:uploadThumbnail")
        })]
      })
    }
    const Ut = 2e3;

    function At(tt) {
      let {
        schematicId: et,
        ownedThumbnailCount: Vt,
        onClose: qt,
        onThumbnailReady: Dt
      } = tt;
      const {
        t: mt
      } = (0, dt.H)(), {
        userContext: jt
      } = (0, Rt.d)(), [Ht, lt] = (0, Ot.useState)(!1), [ft, wt] = (0, Ot.useState)(!1), [yt, Nt] = (0, Ot.useState)(!1), Mt = (0, Ot.useRef)();
      (0, Ot.useEffect)((() => () => {
        clearTimeout(Mt.current)
      }), []);
      const bt = function(tt, et) {
        const Vt = [];
        return tt.isLoggedIn() || Vt.push(ot.NOT_LOGGED_IN), et >= Qt.Y && Vt.push(ot.THUMBNAIL_LIMIT_REACHED), Vt
      }(jt, Vt);
      if (bt.length > 0) {
        const tt = {
          [ot.NOT_LOGGED_IN]: {
            key: "thumbnail:mustBeLoggedInToUpload"
          },
          [ot.THUMBNAIL_LIMIT_REACHED]: {
            key: "thumbnail:thumbnailLimitReachedPleaseDelete",
            params: {
              max: Qt.Y
            }
          }
        };
        return (0, Jt.jsxs)("div", {
          className: "ThumbnailUploaderInner",
          children: [(0, Jt.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: mt("thumbnail:cannotUploadThumbnail")
          }), bt.map(((et, Vt) => {
            const Ot = tt[et];
            return (0, Jt.jsxs)("div", {
              className: "CannotUploadThumbnailItem",
              children: [(0, Jt.jsx)(Xt.b, {
                name: "triangle-exclamation"
              }), (0, Jt.jsx)("span", {
                children: mt(Ot.key, Ot.params)
              })]
            }, Vt)
          }))]
        })
      }
      return (0, Jt.jsxs)("div", {
        className: Et()("ThumbnailUploaderInner", {
          ThumbnailUploaderSuccess: Ht
        }),
        children: [Ht && (0, Jt.jsxs)("div", {
          className: "ThumbnailUploadSuccessOverlay",
          children: [(0, Jt.jsxs)("div", {
            className: "ThumbnailUploadSuccessIcon FullyFancyText AnimFadeInScaleUp",
            children: [(0, Jt.jsx)(Xt.b, {
              name: "check"
            }), (0, Jt.jsx)(Zt.e, {})]
          }), (0, Jt.jsx)("div", {
            className: "ThumbnailUploadSuccessText AnimFadeInScaleUp",
            children: mt("thumbnail:thumbnailUploaded")
          })]
        }), (0, Jt.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: mt("thumbnail:uploadThumbnail")
        }), (0, Jt.jsxs)("div", {
          className: "ThumbnailUploaderBody",
          children: [(0, Jt.jsxs)("div", {
            className: "ThumbnailUploaderLeft",
            children: [(0, Jt.jsx)("h3", {
              className: "SchematicPopupSubtitle",
              children: mt("thumbnail:chooseImage", {
                maxSizeKb: Lt
              })
            }), (0, Jt.jsx)(rt, {
              schematicId: et,
              hasReadUploadPolicy: ft,
              onPolicyValidationError: () => {
                Nt(!0)
              },
              onThumbnailReady: async (tt, et, Vt) => {
                await Dt(tt, et, Vt), lt(!0), Mt.current = setTimeout(qt, Ut)
              }
            })]
          }), (0, Jt.jsxs)("div", {
            className: "ThumbnailUploadPolicy",
            children: [(0, Jt.jsx)("h3", {
              className: "ThumbnailUploadPolicyTitle",
              children: mt("thumbnail:uploadPolicy")
            }), (0, Jt.jsxs)("ul", {
              className: "ThumbnailUploadPolicyList",
              children: [(0, Jt.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, Jt.jsx)(Xt.b, {
                  name: "check"
                }), (0, Jt.jsx)("span", {
                  children: mt("thumbnail:policyFollowGuidelines")
                })]
              }), (0, Jt.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, Jt.jsx)(Xt.b, {
                  name: "check"
                }), (0, Jt.jsx)("span", {
                  children: mt("thumbnail:policyInGameAssets")
                })]
              }), (0, Jt.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, Jt.jsx)(Xt.b, {
                  name: "check"
                }), (0, Jt.jsx)("span", {
                  children: mt("thumbnail:policyLimitText")
                })]
              }), (0, Jt.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, Jt.jsx)(Xt.b, {
                  name: "x"
                }), (0, Jt.jsx)("span", {
                  children: mt("thumbnail:policyCopyrightContent")
                })]
              }), (0, Jt.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, Jt.jsx)(Xt.b, {
                  name: "x"
                }), (0, Jt.jsx)("span", {
                  children: mt("thumbnail:policyOutOfGameAssets")
                })]
              }), (0, Jt.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, Jt.jsx)(Xt.b, {
                  name: "x"
                }), (0, Jt.jsx)("span", {
                  children: mt("thumbnail:policyBloxdTags")
                })]
              }), (0, Jt.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, Jt.jsx)(Xt.b, {
                  name: "x"
                }), (0, Jt.jsx)("span", {
                  children: mt("thumbnail:policyMustReflectGame")
                })]
              })]
            }), (0, Jt.jsxs)("label", {
              className: Et()("ThumbnailUploadCheckbox Policy", {
                ValidationError: yt && !ft
              }),
              children: [(0, Jt.jsx)("input", {
                type: "checkbox",
                checked: ft,
                onChange: tt => {
                  wt(tt.target.checked)
                }
              }), mt("thumbnail:agreeToUploadPolicy")]
            }), yt && !ft && (0, Jt.jsx)("div", {
              className: "ThumbnailPolicyError",
              children: mt("thumbnail:policyRequired")
            })]
          })]
        })]
      })
    }
    var it = Vt(1293);
    const Yt = {
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

    function Bt(tt) {
      var et, Vt;
      let {
        schematicData: mt,
        updateSchematicData: Ht,
        publishFormEnabled: Qt,
        onClose: lt
      } = tt;
      const {
        t: ft
      } = (0, dt.H)(), {
        userContext: wt,
        isUserContextUpdating: yt
      } = (0, Rt.d)(), Nt = (0, ct.b)(), [Mt, bt] = (0, Ot.useState)([]), [Ct, ut] = (0, Ot.useState)([]), [Kt, ht] = (0, Ot.useState)(!0), [vt, Wt] = (0, Ot.useState)(null !== (et = mt.customThumbnailId) && void 0 !== et ? et : null), [Pt, Zt] = (0, Ot.useState)(null), Lt = (0, Ot.useRef)(null !== (Vt = mt.customThumbnailId) && void 0 !== Vt ? Vt : null), Ft = (0, Ot.useRef)(0), kt = (0, Ot.useRef)(null), Gt = (0, Ot.useRef)(null), zt = (0, Ot.useRef)(null), ot = (0, Ot.useRef)(!1);

      function rt(tt, et) {
        zt.current && (clearTimeout(zt.current), zt.current = null), Zt(tt), null !== tt && et && (zt.current = setTimeout((() => {
          Zt(null), zt.current = null
        }), 5e3))
      }(0, Ot.useEffect)((() => () => {
        clearTimeout(Gt.current), clearTimeout(zt.current)
      }), []);
      const Ut = (0, Ot.useCallback)((() => {
        ht(!0), St.e.getOwnedThumbnails(wt).then((tt => {
          const et = [],
            Vt = [];
          for (const Ot of tt.thumbnails) Ot.rejectionPolicyId ? et.push(Ot) : Vt.push(Ot);
          et.sort(((tt, et) => tt.lastUpdatedAt - et.lastUpdatedAt)), Vt.sort(((tt, et) => {
            const Vt = tt.approved ? 1 : 0,
              Ot = (et.approved ? 1 : 0) - Vt;
            return 0 !== Ot ? Ot : et.lastUpdatedAt - tt.lastUpdatedAt
          })), ut(et), bt(Vt)
        })).catch((tt => {
          console.error("Failed to fetch thumbnails:", tt)
        })).finally((() => {
          ht(!1)
        }))
      }), [wt]);
      async function Yt(tt, et, Vt) {
        return St.e.uploadSchematicThumbnail(wt, tt, et, Vt).then((() => {
          rt({
            text: ft("thumbnail:uploadedAwaitingModeration"),
            type: "success"
          }, !0), Ut()
        }))
      }

      function Bt() {
        Ft.current = Date.now(), Gt.current = null;
        const tt = kt.current;
        kt.current = null, rt({
          text: ft("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), St.e.setSchematicThumbnail(wt, mt.schematicId, tt).then((() => {
          Nt.current && (rt({
            text: ft("thumbnail:thumbnailUpdated"),
            type: "success"
          }, !0), Lt.current = tt, Ht("customThumbnailId", tt), Ht("customThumbnailBlurhash", void 0), Ht("customThumbnailVariants", void 0))
        })).catch((tt => {
          Nt.current && (rt({
            text: tt.errorMessageForUser ? ft(tt.errorMessageForUser, tt.errorMessageTranslationParams) : ft("thumbnail:failedToSetThumbnail"),
            type: "error"
          }, !0), Wt(Lt.current))
        }))
      }

      function Tt(tt) {
        Wt(tt), kt.current = tt;
        const et = Date.now() - Ft.current;
        et >= 1e3 ? Bt() : (rt({
          text: ft("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), Gt.current || (Gt.current = setTimeout((() => {
          Bt()
        }), 1e3 - et)))
      }
      return (0, Ot.useEffect)((() => {
        !1 === yt && Ut()
      }), [yt, Ut]), Ct.length > 0 ? (0, Jt.jsx)(pt, {
        rejectedThumbnails: Ct,
        userContext: wt,
        isMountedRef: Nt,
        onAcknowledged: Ut
      }) : (0, Jt.jsxs)("div", {
        className: "BloxdForm ThumbnailSection",
        children: [(0, Jt.jsxs)("div", {
          className: "SectionTitle",
          children: [ft("thumbnail:gameThumbnail"), Pt && (0, Jt.jsx)("span", {
            className: Et()("ThumbnailActionMsg", `ThumbnailActionMsg--${Pt.type}`),
            children: Pt.text
          })]
        }), (0, Jt.jsx)("div", {
          className: "SectionBody",
          children: (0, Jt.jsxs)("div", {
            className: "ThumbnailGrid",
            children: [(0, Jt.jsxs)("div", {
              className: Et()("ThumbnailGridItem ThumbnailGridItemDefault", {
                ThumbnailGridItemSelected: null === vt
              }),
              onClick: () => Tt(null),
              children: [(0, Jt.jsx)(It.b, {
                game: {
                  schematicId: mt.schematicId,
                  imageBlurhash: mt.imageBlurhash
                }
              }), (0, Jt.jsx)("div", {
                className: "ThumbnailGridItemLabel ThumbnailDefaultLabel",
                children: ft("general:default")
              })]
            }), Kt && (0, Jt.jsx)(jt.b, {}), Mt.map(((tt, et) => (0, Jt.jsxs)("div", {
              className: Et()("ThumbnailGridItem", {
                ThumbnailGridItemSelected: vt === tt.id,
                ThumbnailGridItemPending: !tt.approved
              }),
              onClick: () => {
                tt.approved && Tt(tt.id)
              },
              children: [tt.approved && (0, Jt.jsx)("img", {
                src: `${it.clientSideServerUrls.s3Url}/customThumbnails/${tt.id}.jpg`,
                alt: "Thumbnail"
              }), tt.approved && (0, Jt.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: tt.name
              }), tt.id && (0, Jt.jsx)(Dt.G, {
                className: "ThumbnailDeleteButton",
                onClick: et => async function(tt, et, Vt) {
                  tt.stopPropagation();
                  const Ot = await qt.NotificationProvider.showCustomPopup({
                      body: tt => (0, Jt.jsx)(xt, {
                        thumbnailId: et,
                        thumbnailName: Vt,
                        onClose: et => {
                          et && (ot.current = !0), tt()
                        }
                      }),
                      middleScreenPopupClassName: "ThumbnailDeleteConfirmPopup",
                      onClose: lt
                    }).getResult(),
                    Dt = ot.current;
                  ot.current = !1, Dt && !0 === Ot && (Nt.current && rt({
                    text: ft("thumbnail:deletingThumbnail"),
                    type: "info"
                  }, !1), St.e.deleteSchematicThumbnail(wt, et).then((() => {
                    Nt.current && (rt({
                      text: ft("thumbnail:thumbnailDeleted"),
                      type: "success"
                    }, !0), Lt.current === et && Tt(null), Ut())
                  })).catch((tt => {
                    Nt.current && rt({
                      text: tt.errorMessageForUser ? ft(tt.errorMessageForUser, tt.errorMessageTranslationParams) : ft("thumbnail:failedToDeleteThumbnail"),
                      type: "error"
                    }, !0)
                  })))
                }(et, tt.id, tt.name),
                children: (0, Jt.jsx)(Xt.b, {
                  name: "trash-can"
                })
              }), !tt.approved && (0, Jt.jsx)("div", {
                className: "ThumbnailUnapprovedIcon",
                children: (0, Jt.jsx)(Xt.b, {
                  name: "hourglass-clock"
                })
              }), !tt.approved && (0, Jt.jsxs)("div", {
                className: "ThumbnailGridItemLabel ThumbnailPendingLabel",
                children: [tt.name, (0, Jt.jsx)("br", {}), ft("thumbnail:pendingApproval")]
              })]
            }, et))), (0, Jt.jsxs)("div", {
              className: Et()("ThumbnailGridItem ThumbnailUploadTile", {
                ThumbnailUploadTileDisabled: !Qt
              }),
              onClick: () => {
                Qt && function(tt) {
                  let {
                    schematicId: et,
                    ownedThumbnailCount: Vt,
                    onThumbnailReady: Ot,
                    onClose: Dt
                  } = tt;
                  qt.NotificationProvider.showCustomPopup({
                    body: tt => (0, Jt.jsx)(At, {
                      schematicId: et,
                      ownedThumbnailCount: Vt,
                      onClose: tt,
                      onThumbnailReady: Ot
                    }),
                    middleScreenPopupClassName: "SchematicThumbnailPopup",
                    onClose: Dt,
                    unlockPointerKey: "schematicThumbnailUploaderPopup"
                  })
                }({
                  schematicId: mt.schematicId,
                  ownedThumbnailCount: Mt.length,
                  onThumbnailReady: Yt,
                  onClose: lt
                })
              },
              children: [(0, Jt.jsx)(Xt.b, {
                name: "plus"
              }), (0, Jt.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: ft("thumbnail:uploadThumbnail")
              })]
            })]
          })
        })]
      })
    }

    function pt(tt) {
      let {
        rejectedThumbnails: et,
        userContext: Vt,
        isMountedRef: qt,
        onAcknowledged: mt
      } = tt;
      const {
        t: Ht
      } = (0, dt.H)(), [Qt, lt] = (0, Ot.useState)(!1), [Et, ft] = (0, Ot.useState)(!1), wt = function(tt) {
        const et = new Map;
        for (const Vt of tt) {
          const tt = Vt.rejectionPolicyId,
            Ot = et.get(tt);
          Ot ? Ot.push(Vt) : et.set(tt, [Vt])
        }
        return et
      }(et);
      return (0, Jt.jsxs)("div", {
        className: "ThumbnailRejectionNotice",
        children: [(0, Jt.jsxs)("div", {
          className: "ThumbnailRejectionNoticeTitle",
          children: [(0, Jt.jsx)(Xt.b, {
            name: "triangle-exclamation"
          }), " ", Ht("thumbnail:thumbnailsRejected"), " ", (0, Jt.jsx)(Xt.b, {
            name: "triangle-exclamation"
          })]
        }), (0, Jt.jsx)("div", {
          className: "ThumbnailRejectionNoticeSubtitle",
          children: Ht("thumbnail:thumbnailsRejectedDescription")
        }), (0, Jt.jsx)("div", {
          className: "ThumbnailRejectionNoticeList",
          children: [...wt.entries()].map((tt => {
            let [et, Vt] = tt;
            const Ot = Yt[et];
            return (0, Jt.jsxs)("div", {
              className: "ThumbnailRejectionNoticeGroup",
              children: [(0, Jt.jsx)("div", {
                className: "ThumbnailRejectionNoticeItems",
                children: Vt.map((tt => (0, Jt.jsxs)("div", {
                  className: "ThumbnailRejectionNoticeItem",
                  children: [(0, Jt.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemIcon",
                    children: (0, Jt.jsx)(Xt.b, {
                      name: "image-slash"
                    })
                  }), (0, Jt.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemDetails",
                    children: (0, Jt.jsx)("div", {
                      className: "ThumbnailRejectionNoticeItemName",
                      children: tt.name
                    })
                  })]
                }, tt.id)))
              }), (0, Jt.jsxs)("div", {
                className: "ThumbnailRejectionNoticeGroupReason",
                children: [Ht("thumbnail:rejectionReason"), " ", Ot ? Ht(Ot.reason) : et]
              }), Ot && (0, Jt.jsx)("ul", {
                className: "ThumbnailRejectionNoticeGroupTips",
                children: Ot.tips.map((tt => (0, Jt.jsx)("li", {
                  children: Ht(tt)
                }, tt)))
              })]
            }, et)
          }))
        }), (0, Jt.jsxs)("label", {
          className: "ThumbnailRejectionNoticeCheckbox",
          children: [(0, Jt.jsx)(Wt.b, {
            checked: Qt,
            onChange: tt => lt(tt.target.checked),
            disabled: Et
          }), (0, Jt.jsx)("span", {
            children: Ht("thumbnail:haveReadRejectionReasons")
          })]
        }), (0, Jt.jsx)(Dt.m, {
          onClick: async function() {
            ft(!0);
            const tt = await Promise.allSettled(et.map((tt => St.e.deleteSchematicThumbnail(Vt, tt.id))));
            if (!qt.current) return;
            const Ot = tt.filter((tt => "rejected" === tt.status));
            Ot.length > 0 && console.error("Some rejected thumbnails failed to delete:", Ot), mt()
          },
          disabled: !Qt || Et,
          className: "ThumbnailRejectionNoticeAcceptButton",
          children: Et ? (0, Jt.jsx)(jt.b, {}) : Ht("general:accept")
        })]
      })
    }

    function xt(tt) {
      let {
        thumbnailId: et,
        thumbnailName: Vt,
        onClose: Ot
      } = tt;
      const {
        t: qt
      } = (0, dt.H)();
      return (0, Jt.jsxs)("div", {
        className: "ThumbnailDeleteConfirm",
        children: [(0, Jt.jsx)("div", {
          className: "ThumbnailDeleteConfirmTitle",
          children: qt("thumbnail:deleteThumbnail")
        }), (0, Jt.jsxs)("div", {
          className: "ThumbnailDeleteConfirmImageContainer",
          children: [(0, Jt.jsx)("img", {
            className: "ThumbnailDeleteConfirmImage",
            src: `${it.clientSideServerUrls.s3Url}/customThumbnails/${et}.jpg`,
            alt: "Thumbnail to delete"
          }), (0, Jt.jsx)("div", {
            className: "ThumbnailGridItemLabel",
            children: Vt
          })]
        }), (0, Jt.jsx)("div", {
          className: "ThumbnailDeleteConfirmSubtitle",
          children: qt("thumbnail:deleteThumbnailConfirmation")
        }), (0, Jt.jsxs)("div", {
          className: "ThumbnailDeleteConfirmButtons",
          children: [(0, Jt.jsxs)(Dt.G, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => Ot(!0),
            children: [(0, Jt.jsx)(Xt.b, {
              name: "trash-can"
            }), " ", qt("general:delete")]
          }), (0, Jt.jsx)(Dt.g, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => Ot(!1),
            children: qt("general:cancel")
          })]
        })]
      })
    }
    var Tt = Vt(2219),
      gt = Vt(5145),
      st = Vt(5150),
      nt = Vt(5200);

    function te(tt) {
      let {
        schematicData: et,
        setTexturePack: Vt,
        initializeTexturePack: qt,
        publishFormEnabled: Dt
      } = tt;
      const {
        t: mt
      } = (0, dt.H)(), [jt, Ht] = (0, Ot.useState)(null), [Xt, Qt] = (0, Ot.useState)(null), [lt, ft] = (0, Ot.useState)(!1), wt = (0, ct.b)(), yt = Dt && !lt, Nt = et.customTexturePackKey;

      function Mt(tt) {
        var et;
        Ht(tt.metaData.id), Qt(null !== (et = tt.metaData.fromFolderName) && void 0 !== et ? et : null), (tt.metaData.id !== Tt.p.CUSTOM || tt.metaData.fromFolderName) && Vt(tt)
      }
      return (0, Ot.useEffect)((() => {
        Nt && (ft(!0), (0, gt.e)(Nt).then((tt => {
          var et;
          wt.current && (tt ? (Ht(tt.metaData.id), Qt(null !== (et = tt.metaData.fromFolderName) && void 0 !== et ? et : null), qt(tt)) : console.error(`No texture pack at ${Nt}`))
        })).catch((tt => {
          console.error("Error fetching texture pack: ", tt)
        })).finally((() => {
          ft(!1)
        })))
      }), [Nt, qt, wt]), (0, Jt.jsxs)("div", {
        className: "BloxdForm TexturePackSection",
        children: [(0, Jt.jsx)("div", {
          className: "SectionTitle",
          children: mt("customTexturePack:customTexturePack")
        }), (0, Jt.jsxs)("div", {
          className: "TexturePackList",
          children: [(0, Jt.jsx)("div", {
            className: Et()("TexturePack", {
              Selected: null === jt && !lt,
              Disabled: !yt
            }),
            onClick: () => {
              yt && (Ht(null), Vt(null), Qt(null))
            },
            children: (0, Jt.jsx)("div", {
              className: "TexturePackName",
              children: "No Override"
            })
          }), Object.values(Tt.p).map((tt => (0, Jt.jsx)(st.g, {
            id: tt,
            isSelected: tt === jt,
            setSelected: Mt,
            disabled: !yt
          }, tt)))]
        }), jt === Tt.p.CUSTOM && (0, Jt.jsx)(nt.c, {
          folderName: Xt,
          onTexturePackUpdated: Mt,
          disabled: !yt,
          maxFileSizeMb: 25,
          packOwner: "customGame"
        })]
      })
    }
    var ee = Vt(5248);

    function Ve(tt) {
      var et;
      let {
        gameCategory: Vt,
        setGameCategory: Ot,
        disabled: qt
      } = tt;
      const mt = null !== (et = (0, ft.Z)(Vt)) && void 0 !== et ? et : "other";
      return (0, Jt.jsxs)("div", {
        className: "GameCategoryPicker",
        children: [(0, Jt.jsx)(Nt.i, {
          label: "worldBuilder:gameCategoryGroup",
          className: "GameCategoryGroup",
          disabled: qt,
          children: (0, Jt.jsx)(Mt.e, {
            options: ft.N.map((tt => ({
              value: tt,
              label: ft.M[tt]
            }))),
            value: mt,
            onChange: tt => {
              tt.value !== mt && Ot(ft.I[tt.value][0])
            }
          })
        }), (0, Jt.jsx)(Nt.i, {
          label: "worldBuilder:gameCategory",
          className: "GameCategory",
          disabled: qt,
          children: (0, Jt.jsx)("div", {
            className: "GameCategoryOptions",
            children: ft.I[mt].map((tt => (0, Jt.jsx)(Dt.Q, {
              active: tt === Vt,
              onClick: () => {
                Ot(tt)
              },
              children: (0, ft.Y)(tt)
            }, tt)))
          })
        })]
      })
    }

    function Oe(tt) {
      let {
        editor: et,
        onClose: Vt
      } = tt;
      const {
        t: Ot
      } = (0, dt.H)(), {
        schematicData: qt,
        updateSchematicData: Dt,
        publishFormEnabled: jt,
        formEnabled: Ht
      } = et;
      return (0, Jt.jsxs)(Jt.Fragment, {
        children: [(0, Jt.jsxs)(Ct, {
          icon: "pen-to-square",
          title: Ot("worldBuilder:basicsSection"),
          disabled: !Ht,
          children: [(0, Jt.jsx)(ut, {
            label: Ot("general:name"),
            caption: Ot("worldBuilder:schematicNameTagsHint"),
            children: (0, Jt.jsx)(mt.d, {
              className: "SchematicPageName",
              defaultValue: qt.name,
              onValueChange: tt => Dt("name", tt),
              placeholderText: Ot("worldBuilder:schematicNamePlaceholder"),
              maxLength: Qt.ub
            })
          }), (0, Jt.jsx)(ut, {
            label: Ot("general:description"),
            children: (0, Jt.jsx)(mt.d, {
              className: "SchematicPageDescription",
              useTextarea: !0,
              defaultValue: qt.description,
              onValueChange: tt => Dt("description", tt),
              placeholderText: Ot("worldBuilder:schematicDescriptionPlaceholder"),
              maxLength: Qt.qb
            })
          }), (0, Jt.jsx)(Ve, {
            gameCategory: qt.gameCategory,
            setGameCategory: tt => Dt("gameCategory", tt),
            disabled: !jt
          }), !0 === qt.gamePublished && (0, Jt.jsx)(Bt, {
            schematicData: qt,
            updateSchematicData: Dt,
            publishFormEnabled: jt,
            onClose: function() {
              null === Vt || void 0 === Vt || Vt()
            }
          })]
        }), (0, Jt.jsx)(ht, {
          schematicData: qt,
          updateSchematicData: Dt,
          publishFormEnabled: jt,
          formEnabled: Ht
        }), !0 === qt.gamePublished && (0, Jt.jsx)(Ct, {
          icon: "palette",
          title: Ot("worldBuilder:texturePackSection"),
          disabled: !Ht,
          children: (0, Jt.jsx)(te, {
            schematicData: qt,
            setTexturePack: et.setTexturePack,
            initializeTexturePack: et.initializeTexturePack,
            publishFormEnabled: jt
          })
        })]
      })
    }

    function qe(tt) {
      let {
        editor: et
      } = tt;
      const {
        t: Vt
      } = (0, dt.H)(), {
        schematicData: Ot,
        formEnabled: qt,
        hasUnsavedChanges: mt
      } = et, Qt = qt && mt;
      return (0, Jt.jsxs)("footer", {
        className: "SchematicPageFooter",
        children: [qt && mt && (0, Jt.jsxs)("div", {
          className: "SchematicPageFooterStatus",
          children: [(0, Jt.jsx)("span", {
            className: "SchematicPageFooterStatusDot"
          }), Vt("worldBuilder:unsavedChanges")]
        }), (0, Jt.jsx)(Ht.g, {
          tooltipInner: (0, Jt.jsx)("div", {
            className: "SaveButtonTooltip",
            children: Vt(qt && !mt ? "worldBuilder:saveChangesNoneDescription" : "worldBuilder:saveChangesDescription")
          }),
          children: (0, Jt.jsxs)(Dt.f, {
            className: "SaveChangesButton",
            onClick: () => et.saveSchematic(Ot.gamePublished),
            disabled: !Qt,
            children: [(0, Jt.jsxs)("span", {
              className: qt ? "" : "SaveChangesButtonBodyHidden",
              children: [(0, Jt.jsx)(Xt.b, {
                name: "wrench"
              }), " ", Vt("worldBuilder:saveChanges")]
            }), !qt && (0, Jt.jsx)(jt.b, {})]
          })
        })]
      })
    }

    function De(tt) {
      let {
        schematic: et,
        onSchematicUpdate: Vt,
        onClose: qt,
        inSourceWorld: mt
      } = tt;
      const {
        t: jt
      } = (0, dt.H)();

      function Ht() {
        null === qt || void 0 === qt || qt()
      }
      const Xt = (0, ee.d)(et, {
        onNavigateAway: Ht,
        inSourceWorld: mt
      });
      return (0, Ot.useEffect)((() => {
        null === Vt || void 0 === Vt || Vt(Xt.schematicData)
      }), [Xt.schematicData, Vt]), (0, Jt.jsxs)("div", {
        className: "SchematicPage SchematicPagePopupVariant",
        children: [(0, Jt.jsxs)("div", {
          className: "SchematicPageBody",
          children: [(0, Jt.jsx)(Dt.d, {
            onClick: Ht,
            children: jt("worldBuilder:back")
          }), (0, Jt.jsx)(Ct, {
            icon: "rocket-launch",
            title: jt("worldBuilder:actionsSection"),
            disabled: !Xt.formEnabled,
            children: (0, Jt.jsx)(vt.c, {
              editor: Xt
            })
          }), (0, Jt.jsx)(Oe, {
            editor: Xt,
            onClose: Ht
          })]
        }), (0, Jt.jsx)(qe, {
          editor: Xt
        })]
      })
    }

    function me(tt) {
      let {
        schematic: et,
        onSchematicUpdate: Vt,
        onClose: Ot,
        inSourceWorld: Dt
      } = tt;
      qt.NotificationProvider.showCustomPopup({
        body: tt => (0, Jt.jsx)(De, {
          schematic: et,
          onSchematicUpdate: Vt,
          onClose: tt,
          inSourceWorld: Dt
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: Ot,
        unlockPointerKey: "schematicPagePopup"
      })
    }
  },
  5118: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Qt
    });
    var Ot = Vt(1140),
      qt = Vt.n(Ot),
      Dt = Vt(1286),
      mt = Vt(1152),
      dt = Vt(1556),
      jt = Vt(1464),
      Ht = Vt(1436),
      Xt = Vt(1188);

    function Qt(tt) {
      let {
        editor: et,
        className: Vt
      } = tt;
      const {
        t: Ot
      } = (0, Dt.H)(), {
        schematicData: Qt,
        formEnabled: lt,
        publishFormEnabled: Et
      } = et, ft = !lt || !Et;
      return (0, Xt.jsxs)("div", {
        className: qt()("PublishButtonContainer", Vt),
        children: [et.canEditSourceWorld && (0, Xt.jsxs)(dt.f, {
          onClick: et.editSourceWorld,
          disabled: ft,
          children: [(0, Xt.jsx)(mt.b, {
            name: "edit"
          }), " ", Ot("worldBuilder:editSourceWorld")]
        }), !Qt.gamePublished && (0, Xt.jsx)(jt.g, {
          tooltipInner: (0, Xt.jsx)("div", {
            className: "PublishButtonTooltip",
            children: Ot("worldBuilder:publishAsGameDescription")
          }),
          children: (0, Xt.jsxs)(dt.m, {
            onClick: () => et.saveSchematic(!0),
            disabled: ft,
            children: [(0, Xt.jsx)(mt.b, {
              name: "rocket-launch"
            }), " ", Ot("worldBuilder:publishAsGame"), " ", (0, Xt.jsx)(mt.b, {
              name: "info-circle"
            })]
          })
        }), !0 === Qt.gamePublished && (0, Xt.jsxs)(Xt.Fragment, {
          children: [(0, Xt.jsx)(jt.g, {
            tooltipInner: (0, Xt.jsx)("div", {
              className: "PublishButtonTooltip",
              children: Ot("worldBuilder:unpublishAsGameDescription")
            }),
            children: (0, Xt.jsxs)(dt.G, {
              onClick: et.unpublishSchematic,
              disabled: ft,
              children: [(0, Xt.jsx)(mt.b, {
                name: "rocket-launch"
              }), " ", Ot("worldBuilder:unpublishAsGame"), " ", (0, Xt.jsx)(mt.b, {
                name: "info-circle"
              })]
            })
          }), (0, Xt.jsxs)(dt.f, {
            onClick: et.playGame,
            disabled: ft,
            children: [(0, Xt.jsx)(mt.b, {
              name: "joystick"
            }), " ", Ot("general:playGame")]
          })]
        }), !lt && (0, Xt.jsx)(Ht.b, {
          loaderType: "Secondary"
        })]
      })
    }
  },
  5145: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => qt
    });
    var Ot = Vt(1293);
    async function qt(tt) {
      const et = await fetch(`${Ot.clientSideServerUrls.s3Url}/${tt}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === et.status || 403 === et.status) return null;
      if (!et.ok) throw new Error(`Failed to download the texture pack (${et.status})`);
      return await et.json()
    }
  },
  5248: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => yt
    });
    var Ot = Vt(63),
      qt = Vt(1429),
      Dt = Vt(1103),
      mt = Vt(184),
      dt = Vt(1641),
      jt = Vt(26),
      Ht = Vt(2024),
      Xt = Vt(1600),
      Qt = Vt(4725),
      lt = Vt(1450),
      Et = Vt(1218),
      ft = Vt(1613);

    function wt(tt, et) {
      return {
        schematicId: tt.schematicId,
        name: tt.name,
        description: tt.description,
        gamePublished: et,
        gameCategory: tt.gameCategory,
        defaultGamemode: tt.defaultGamemode,
        voidDeathHeight: tt.voidDeathHeight,
        disableKeepInventory: tt.disableKeepInventory,
        disableTpRequests: tt.disableTpRequests,
        disableLobbySpawn: tt.disableLobbySpawn,
        disableMobs: tt.disableMobs,
        disableSpawnProtection: tt.disableSpawnProtection,
        disableFallDamage: tt.disableFallDamage,
        worldBorder: tt.worldBorder,
        hideLobbyCode: tt.hideLobbyCode,
        enableSmpMarketplace: tt.enableSmpMarketplace,
        enableSurvivalGuns: tt.enableSurvivalGuns,
        enableSpawnReset: tt.enableSpawnReset,
        enableDayNight: tt.enableDayNight,
        persistWorld: tt.persistWorld,
        persistInventory: tt.persistInventory
      }
    }

    function yt(tt) {
      let {
        onNavigateAway: et,
        inSourceWorld: Vt = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const {
        userContext: yt
      } = (0, Et.d)(), Nt = (0, ft.useNavigatePreserveSearch)(), [Mt, bt] = (0, Ot.useState)({
        ...tt
      }), [Jt, Ct] = (0, Ot.useState)("Enter"), [ut, Kt] = (0, Ot.useState)(void 0), ht = (0, Ot.useRef)(wt(tt, tt.gamePublished)), vt = (0, Ot.useRef)(void 0), Wt = "Enter" === Jt, St = yt.playerHasRank("developer") || yt.playerHasRank("admin") || "Enter" === Jt && !1 !== Mt.schematicContainsSpawnBlock, ct = void 0 !== ut && ut !== vt.current || JSON.stringify(wt(Mt, Mt.gamePublished)) !== JSON.stringify(ht.current);

      function Rt(tt, et) {
        bt((Vt => ({
          ...Vt,
          [tt]: et
        })))
      }
      const It = (0, Ot.useCallback)((tt => {
        vt.current = tt, Kt(tt)
      }), []);

      function Pt(tt) {
        Ct("Loading");
        const et = wt(Mt, tt),
          Vt = ut !== vt.current ? ut : void 0;
        Xt.e.updateSchematic(yt, et, Vt).then((Vt => {
          let {
            customTexturePackKey: Ot
          } = Vt;
          Ct("Success"), Rt("customTexturePackKey", Ot), ht.current = et, vt.current = void 0, Kt(void 0), setTimeout((() => {
            Rt("gamePublished", tt), Ct("Enter")
          }), 1e3)
        })).catch((tt => {
          var et;
          (console.error("Failed to save schematic:", tt), Ct("Error"), tt instanceof mt.e && tt.errorMessageForUser) && lt.NotificationProvider.showAlertPopup({
            title: "worldBuilder:changesNotSaved",
            subtitle: tt.errorMessageForUser,
            textOpts: {
              subtitle: null !== (et = tt.errorMessageTranslationParams) && void 0 !== et ? et : void 0
            },
            confirmText: "general:ok"
          });
          setTimeout((() => {
            Ct("Enter")
          }), 1e3)
        }))
      }
      return {
        schematicData: Mt,
        updateSchematicData: Rt,
        setTexturePack: Kt,
        initializeTexturePack: It,
        updateState: Jt,
        formEnabled: Wt,
        publishFormEnabled: St,
        hasUnsavedChanges: ct,
        canEditSourceWorld: !Vt,
        saveSchematic: Pt,
        unpublishSchematic: function() {
          lt.NotificationProvider.showPromptPopup({
            icon: "rocket-launch",
            title: "worldBuilder:unpublishAsGameConfirmTitle",
            subtitle: "worldBuilder:unpublishAsGameConfirmSubtitle",
            confirmText: "worldBuilder:unpublishAsGame",
            cancelText: "general:cancel",
            unlockPointerKey: "unpublishGamePrompt"
          }).getResult().then((tt => {
            !0 === tt && Pt(!1)
          }))
        },
        editSourceWorld: function() {
          Ct("Loading"), Qt.e.getSourceWorld(Mt.schematicId).then((tt => {
            Ht.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, jt.i)("other"), Nt((0, qt.c)("classic", tt)), null === et || void 0 === et || et()
          })).catch((tt => {
            console.error("Failed to get source world:", tt), Ct("Error"), setTimeout((() => {
              Ct("Enter")
            }), 1e3)
          }))
        },
        playGame: function() {
          Ht.gameBridge.send("leaveGame", {
            reloadPath: "/"
          }), Nt((0, dt.v)((0, Dt.u)(Mt.schematicId), Mt)), null === et || void 0 === et || et()
        }
      }
    }
  },
  5108: () => {}
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);