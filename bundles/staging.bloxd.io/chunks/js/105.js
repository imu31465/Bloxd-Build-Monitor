export const id = 105;
export const ids = [105];
export const modules = {
  4869: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Kk,
      f: () => Mk,
      i: () => xk
    });
    ik(4872);
    var Dk = ik(1172),
      fk = ik(1021),
      Sk = ik.n(fk),
      bk = ik(1345),
      rk = (ik(60), ik(4319)),
      Pk = ik(1033),
      mk = ik(1066);

    function Mk(kk) {
      let {
        children: ek,
        label: ik,
        className: fk,
        circleInfoText: rk,
        disabled: Mk,
        onLabelClick: Kk
      } = kk;
      const {
        t: xk
      } = (0, Dk.D)(), nk = (0, mk.jsxs)("div", {
        className: Sk()("Label", {
          ClickableLabel: void 0 !== Kk
        }),
        onClick: Kk,
        children: [xk(ik), rk && (0, mk.jsx)(Pk.d, {
          name: "circle-info"
        })]
      });
      return (0, mk.jsxs)("div", {
        className: Sk()("LabeledInput", {
          [fk]: fk,
          DisabledLabelInput: Mk
        }),
        children: [rk && (0, mk.jsx)(bk.i, {
          tooltipInner: (0, mk.jsx)("div", {
            className: "LabeledInputTooltip",
            children: xk(rk)
          }),
          children: nk
        }), !rk && nk, ek]
      })
    }

    function Kk(kk) {
      let {
        checked: ek,
        setChecked: ik
      } = kk;
      return (0, mk.jsx)("div", {
        className: "OtherInput ClickableOtherInput",
        "data-pad-focusable": !0,
        onClick: kk => {
          ik(!ek)
        },
        children: (0, mk.jsx)(rk.d, {
          checked: ek,
          onChange: kk => {
            ik(kk.target.checked)
          },
          disabled: !1
        })
      })
    }

    function xk(kk) {
      let {
        checked: ek,
        setChecked: ik,
        disabled: Dk
      } = kk;
      return (0, mk.jsx)("div", {
        className: Sk()("SwitchContainer", {
          SwitchContainerDisabled: Dk
        }),
        onClick: () => {
          Dk || ik(!ek)
        },
        children: (0, mk.jsx)(rk.d, {
          className: "SwitchCheckbox",
          checked: ek,
          onChange: kk => {
            ik(kk.target.checked)
          },
          disabled: !!Dk
        })
      })
    }
  },
  4874: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => mk
    });
    var Dk = ik(1021),
      fk = ik.n(Dk),
      Sk = ik(4563),
      bk = ik(1172),
      rk = ik(1066);
    const Pk = [...Sk.k, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function mk(kk) {
      const {
        disabled: ek,
        hideWrapper: ik
      } = kk, {
        t: Dk
      } = (0, bk.D)(), mk = kk.advancedMode ? Pk.map((ek => [ek, kk.callbacks[ek]])) : Sk.k.map((ek => [ek, kk.callbacks[ek]])), Kk = (0, rk.jsx)("div", {
        className: fk()("PluginsGrid", {
          SectionBody: !ik
        }),
        children: mk.map((kk => {
          let [ik, Dk] = kk;
          return (0, rk.jsx)(Mk, {
            plugin: ik,
            callbacks: Dk,
            disabled: ek
          }, ik)
        }))
      });
      return ik ? Kk : (0, rk.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, rk.jsx)("div", {
          className: "SectionTitle",
          children: Dk("worldBuilder:pluginsSection")
        }), Kk]
      })
    }

    function Mk(kk) {
      let {
        plugin: ek,
        callbacks: {
          isEnabled: ik,
          bV: Dk
        },
        disabled: Sk
      } = kk;
      const {
        t: Pk
      } = (0, bk.D)(), mk = ik();
      return (0, rk.jsxs)("div", {
        className: fk()("PluginCard", {
          PluginCardEnabled: mk,
          PluginCardDisabledForm: Sk
        }),
        "data-pad-focusable": !0,
        "aria-disabled": Sk || void 0,
        onClick: () => {
          Sk || Dk(!mk)
        },
        children: [(0, rk.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, rk.jsx)("img", {
            src: `/textures/games/classic/customGames/${ek}.png`,
            alt: ek
          })
        }), (0, rk.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, rk.jsx)("div", {
            className: "PluginCardTitle",
            children: Pk(Kk[ek])
          }), (0, rk.jsx)("div", {
            className: "PluginCardDescription",
            children: Pk(xk[ek])
          })]
        }), (0, rk.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: Pk(mk ? "general:on" : "general:off")
        })]
      })
    }
    const Kk = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      xk = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  4860: (kk, ek, ik) => {
    ik.d(ek, {
      h: () => Se,
      c: () => fe,
      e: () => De,
      l: () => be
    });
    var Dk = ik(60),
      fk = ik(1333),
      Sk = ik(1410),
      bk = ik(1648),
      rk = ik(1172),
      Pk = ik(1327),
      mk = ik(1345),
      Mk = ik(1033),
      Kk = ik(1207),
      xk = ik(1021),
      nk = ik.n(xk),
      Uk = ik(302),
      Hk = ik(4563),
      wk = ik(1218),
      lk = ik(4869),
      pk = ik(3098),
      yk = ik(4874),
      Yk = ik(1066);

    function Lk(kk) {
      let {
        icon: ek,
        title: ik,
        disabled: Dk,
        children: fk
      } = kk;
      return (0, Yk.jsxs)("div", {
        className: nk()("ManageCard", {
          ManageCardDisabled: Dk
        }),
        children: [(0, Yk.jsxs)("div", {
          className: "ManageCardHead",
          children: [(0, Yk.jsx)("div", {
            className: "ManageCardIcon",
            children: (0, Yk.jsx)(Mk.d, {
              name: ek
            })
          }), (0, Yk.jsx)("div", {
            children: (0, Yk.jsx)("h2", {
              className: "ManageCardTitle",
              children: ik
            })
          })]
        }), (0, Yk.jsxs)("div", {
          className: "ManageCardBody",
          children: [fk, Dk && (0, Yk.jsx)("div", {
            className: "ManageCardDisabledOverlay"
          })]
        })]
      })
    }

    function Ck(kk) {
      let {
        label: ek,
        caption: ik,
        children: Dk
      } = kk;
      return (0, Yk.jsxs)("div", {
        className: "ManageStackedField",
        children: [(0, Yk.jsx)("div", {
          className: "ManageStackedFieldLabel",
          children: ek
        }), Dk, ik && (0, Yk.jsx)("div", {
          className: "ManageStackedFieldCaption",
          children: ik
        })]
      })
    }

    function Ak(kk) {
      let {
        label: ek,
        caption: ik,
        disabled: Dk,
        children: fk
      } = kk;
      return (0, Yk.jsxs)("div", {
        className: nk()("ManageField", {
          ManageFieldDisabled: Dk
        }),
        children: [(0, Yk.jsxs)("div", {
          className: "ManageFieldText",
          children: [(0, Yk.jsx)("div", {
            className: "ManageFieldLabel",
            children: ek
          }), (0, Yk.jsx)("div", {
            className: "ManageFieldCaption",
            children: ik
          })]
        }), (0, Yk.jsx)("div", {
          className: "ManageFieldControl",
          children: fk
        })]
      })
    }

    function jk(kk) {
      var ek, ik;
      let {
        schematicData: Dk,
        updateSchematicData: fk,
        publishFormEnabled: Sk,
        formEnabled: bk
      } = kk;
      const {
        t: Pk
      } = (0, rk.D)(), mk = !Sk, Mk = {
        tpRequests: {
          isEnabled: () => !Dk.disableTpRequests,
          bV: kk => fk("disableTpRequests", !kk)
        },
        spawnProtection: {
          isEnabled: () => !Dk.disableSpawnProtection,
          bV: kk => fk("disableSpawnProtection", !kk)
        },
        spawnReset: {
          isEnabled: () => !!Dk.enableSpawnReset,
          bV: kk => fk("enableSpawnReset", kk)
        },
        smpMarketplace: {
          isEnabled: () => !!Dk.enableSmpMarketplace,
          bV: kk => fk("enableSmpMarketplace", kk)
        },
        survivalGuns: {
          isEnabled: () => !!Dk.enableSurvivalGuns,
          bV: kk => fk("enableSurvivalGuns", kk)
        },
        fallDamage: {
          isEnabled: () => !Dk.disableFallDamage,
          bV: kk => fk("disableFallDamage", !kk)
        },
        dayNight: {
          isEnabled: () => !!Dk.enableDayNight,
          bV: kk => fk("enableDayNight", kk)
        }
      };
      return (0, Yk.jsxs)(Yk.Fragment, {
        children: [!1 === Dk.schematicContainsSpawnBlock && (0, Yk.jsx)("div", {
          className: "ManageWarningBanner",
          children: Pk("worldBuilder:mustContainSpawnBlock")
        }), (0, Yk.jsxs)("div", {
          className: "ManageSettingsGrid",
          children: [(0, Yk.jsxs)(Lk, {
            icon: "globe",
            title: Pk("worldBuilder:worldRulesSection"),
            disabled: !bk,
            children: [(0, Yk.jsx)(Ak, {
              label: Pk("classic:defaultGamemode"),
              caption: Pk("classic:defaultGamemodeDescription"),
              disabled: mk,
              children: (0, Yk.jsx)(pk.e, {
                controlClassName: "ManageDropdown",
                options: Hk.G.map((kk => ({
                  value: kk,
                  label: Uk.t[kk]
                }))),
                value: Dk.defaultGamemode,
                onChange: kk => fk("defaultGamemode", kk.value)
              })
            }), (0, Yk.jsx)(Ak, {
              label: Pk("classic:voidDeathHeight"),
              caption: Pk("classic:voidDeathHeightDescription"),
              disabled: mk,
              children: (0, Yk.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, Yk.jsx)("input", {
                  type: "number",
                  max: wk.F,
                  value: null !== (ek = Dk.voidDeathHeight) && void 0 !== ek ? ek : "",
                  onChange: kk => {
                    const ek = parseInt(kk.target.value);
                    fk("voidDeathHeight", ek)
                  }
                }), (0, Yk.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: Pk("worldBuilder:blocksUnit")
                })]
              })
            }), (0, Yk.jsx)(Ak, {
              label: Pk("classic:worldBorder"),
              caption: Pk("classic:worldBorderDescription"),
              disabled: mk,
              children: (0, Yk.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, Yk.jsx)("input", {
                  type: "number",
                  min: wk.M,
                  max: wk.G,
                  placeholder: Pk("worldBuilder:noWorldBorderLimit"),
                  value: null !== (ik = Dk.worldBorder) && void 0 !== ik ? ik : "",
                  onChange: kk => {
                    const ek = parseInt(kk.target.value);
                    fk("worldBorder", isNaN(ek) ? null : ek)
                  }
                }), (0, Yk.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: Pk("worldBuilder:blocksUnit")
                })]
              })
            }), (0, Yk.jsx)(Ak, {
              label: Pk("classic:disableMobs"),
              caption: Pk("classic:disableMobsDescription"),
              disabled: mk,
              children: (0, Yk.jsx)(lk.i, {
                checked: Dk.disableMobs,
                setChecked: kk => fk("disableMobs", kk),
                disabled: mk
              })
            })]
          }), (0, Yk.jsxs)(Lk, {
            icon: "user-group",
            title: Pk("worldBuilder:playerAndLobbySection"),
            disabled: !bk,
            children: [(0, Yk.jsx)(Ak, {
              label: Pk("classic:disableKeepInventory"),
              caption: Pk("classic:disableKeepInventoryDescription"),
              disabled: mk,
              children: (0, Yk.jsx)(lk.i, {
                checked: Dk.disableKeepInventory,
                setChecked: kk => fk("disableKeepInventory", kk),
                disabled: mk
              })
            }), (0, Yk.jsx)(Ak, {
              label: Pk("classic:persistInventory"),
              caption: Pk("classic:persistInventoryDescription"),
              disabled: mk,
              children: (0, Yk.jsx)(pk.e, {
                controlClassName: "ManageDropdown",
                options: Hk.l.map((kk => ({
                  value: kk,
                  label: Uk.h[kk]
                }))),
                value: Dk.persistInventory,
                onChange: kk => fk("persistInventory", kk.value)
              })
            }), (0, Yk.jsx)(Ak, {
              label: Pk("classic:persistWorld"),
              caption: Pk("classic:persistWorldDescription"),
              disabled: mk,
              children: (0, Yk.jsx)(lk.i, {
                checked: Dk.persistWorld,
                setChecked: kk => fk("persistWorld", kk),
                disabled: mk
              })
            }), (0, Yk.jsx)(Ak, {
              label: Pk("classic:disableLobbySpawn"),
              caption: Pk("classic:disableLobbySpawnDescription"),
              disabled: mk,
              children: (0, Yk.jsx)(lk.i, {
                checked: Dk.disableLobbySpawn,
                setChecked: kk => fk("disableLobbySpawn", kk),
                disabled: mk
              })
            }), (0, Yk.jsx)(Ak, {
              label: Pk("classic:hideLobbyCode"),
              caption: Pk("classic:hideLobbyCodeDescription"),
              disabled: mk,
              children: (0, Yk.jsx)(lk.i, {
                checked: Dk.hideLobbyCode,
                setChecked: kk => fk("hideLobbyCode", kk),
                disabled: mk
              })
            })]
          })]
        }), (0, Yk.jsx)(Lk, {
          icon: "layer-group",
          title: Pk("worldBuilder:pluginsSection"),
          disabled: !bk,
          children: (0, Yk.jsx)(yk.e, {
            callbacks: Mk,
            disabled: mk,
            advancedMode: !0,
            hideWrapper: !0
          })
        })]
      })
    }
    var sk = ik(4879),
      dk = ik(4319),
      Vk = ik(1459),
      Fk = ik(3447),
      uk = ik(1095),
      qk = ik(4840),
      Ik = ik(4888),
      zk = ik(1415);
    const Qk = 50,
      vk = .3;
    async function Ek(kk) {
      const ek = await
      function(kk) {
        return new Promise(((ek, ik) => {
          const Dk = new FileReader;
          Dk.onload = () => ek(Dk.result), Dk.onerror = ik, Dk.readAsDataURL(kk)
        }))
      }(kk), ik = await
      function(kk) {
        return new Promise(((ek, ik) => {
          const Dk = new Image;
          Dk.onload = () => ek(Dk), Dk.onerror = () => ik(new Error("Failed to load image")), Dk.src = kk
        }))
      }(ek);
      if (ik.naturalHeight > ik.naturalWidth) throw new hk;
      const Dk = 1024 * Qk,
        {
          dataUrl: fk,
          finalQuality: Sk
        } = function(kk, ek) {
          const ik = document.createElement("canvas");
          ik.width = kk.naturalWidth, ik.height = kk.naturalHeight, ik.getContext("2d").drawImage(kk, 0, 0);
          let Dk = .92,
            fk = ik.toDataURL("image/jpeg", Dk);
          for (; .75 * fk.length > ek && Dk > .05;) Dk -= .05, fk = ik.toDataURL("image/jpeg", Dk);
          return {
            dataUrl: fk,
            finalQuality: Dk
          }
        }(ik, Dk);
      if (Math.ceil(.75 * fk.length) > Dk) throw new ak;
      return {
        base64Jpg: fk,
        heavilyCompressed: Sk < vk
      }
    }
    class hk extends Error {}
    class ak extends Error {}
    var Wk = function(kk) {
      return kk[kk.NOT_LOGGED_IN = 0] = "NOT_LOGGED_IN", kk[kk.THUMBNAIL_LIMIT_REACHED = 1] = "THUMBNAIL_LIMIT_REACHED", kk
    }(Wk || {});

    function tk(kk) {
      var ek;
      let {
        schematicId: ik,
        hasReadUploadPolicy: fk,
        onPolicyValidationError: Pk,
        onThumbnailReady: mk
      } = kk;
      const {
        t: xk
      } = (0, rk.D)(), [Uk, Hk] = (0, Dk.useState)(null), [wk, lk] = (0, Dk.useState)(""), [pk, yk] = (0, Dk.useState)(""), [Lk, Ck] = (0, Dk.useState)(!0), [Ak, jk] = (0, Dk.useState)(!1), sk = (0, Dk.useRef)(!1), [dk, Vk] = (0, Dk.useState)(null), [Fk, uk] = (0, Dk.useState)(!1), [qk, zk] = (0, Dk.useState)(!1), Qk = (0, Dk.useRef)(0), {
        getRootProps: vk,
        getInputProps: Wk,
        isDragActive: tk
      } = (0, Ik.e)({
        accept: {
          "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp"]
        },
        multiple: !1,
        onDrop: async kk => {
          if (0 === kk.length) return;
          const ek = kk[0],
            ik = ++Qk.current;
          Vk(null), uk(!1), Hk(null), lk(ek.name);
          try {
            const kk = await Ek(ek);
            if (ik !== Qk.current) return;
            Hk(kk), uk(kk.heavilyCompressed)
          } catch (Dk) {
            if (ik !== Qk.current) return;
            Vk(xk(Dk instanceof hk ? "thumbnail:portraitImagesNotAllowed" : Dk instanceof ak ? "thumbnail:couldNotCompressImage" : "thumbnail:failedToUploadImage"))
          }
        },
        useFsAccessApi: !1
      }), Xk = wk.length <= 30 ? wk : `${wk.slice(0,27)}...`, Bk = null !== (ek = null === Uk || void 0 === Uk ? void 0 : Uk.base64Jpg) && void 0 !== ek ? ek : null, ck = pk.trim(), Tk = ck.length >= Kk.k && ck.length <= Kk.i, Zk = qk && !Uk && !dk, Ok = qk && !Tk;
      return (0, Yk.jsxs)("div", {
        className: "ThumbnailUploadContainer",
        children: [(0, Yk.jsxs)("div", {
          ...vk({
            className: nk()("ThumbnailUploadDropzone", {
              ActiveDrag: tk,
              ValidationError: Zk
            })
          }),
          children: [(0, Yk.jsx)("input", {
            ...Wk()
          }), !tk && Bk ? (0, Yk.jsxs)(Yk.Fragment, {
            children: [(0, Yk.jsxs)("div", {
              className: "ThumbnailAspectPreviews",
              children: [(0, Yk.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, Yk.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "1:1"
                }), (0, Yk.jsx)("div", {
                  className: "ThumbnailAspectFrame Square",
                  children: (0, Yk.jsx)("img", {
                    src: Bk,
                    alt: "1:1 preview"
                  })
                })]
              }), (0, Yk.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, Yk.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "16:9"
                }), (0, Yk.jsx)("div", {
                  className: "ThumbnailAspectFrame Wide",
                  children: (0, Yk.jsx)("img", {
                    src: Bk,
                    alt: "16:9 preview"
                  })
                })]
              })]
            }), (0, Yk.jsxs)("div", {
              children: [(0, Yk.jsx)("div", {
                className: "ThumbnailUploadInstructions Active",
                children: Xk
              }), (0, Yk.jsx)("div", {
                className: "ThumbnailUploadInstructions Preview",
                children: xk("thumbnail:preview")
              })]
            })]
          }) : (0, Yk.jsxs)(Yk.Fragment, {
            children: [(0, Yk.jsx)("div", {
              className: "ThumbnailUploadIcon",
              children: (0, Yk.jsx)(Mk.d, {
                name: "image"
              })
            }), (0, Yk.jsx)("div", {
              className: "ThumbnailUploadInstructions",
              children: xk("thumbnail:dragImageHere")
            })]
          })]
        }), Zk && (0, Yk.jsx)("div", {
          className: "ThumbnailUploadError",
          children: xk("thumbnail:imageRequired")
        }), (0, Yk.jsx)(bk.b, {
          className: nk()("ThumbnailUploadNameInput", {
            ValidationError: Ok
          }),
          placeholderText: xk("thumbnail:thumbnailName"),
          defaultValue: pk,
          onValueChange: kk => {
            yk(kk)
          },
          maxLength: Kk.i
        }), Ok && (0, Yk.jsx)("div", {
          className: "ThumbnailUploadError",
          children: xk("thumbnail:nameRequired", {
            min: Kk.k,
            max: Kk.i
          })
        }), (0, Yk.jsxs)("label", {
          className: "ThumbnailUploadCheckbox",
          children: [(0, Yk.jsx)("input", {
            type: "checkbox",
            checked: Lk,
            onChange: kk => {
              Ck(kk.target.checked)
            }
          }), xk("thumbnail:setAsThumbnailOnceApproved")]
        }), Fk && (0, Yk.jsx)("div", {
          className: "ThumbnailUploadWarning",
          children: xk("thumbnail:heavyCompressionWarning")
        }), dk && (0, Yk.jsx)("div", {
          className: "ThumbnailUploadError",
          children: dk
        }), (0, Yk.jsx)(Sk.r, {
          disabled: Ak,
          className: "ThumbnailUploadButton",
          onClick: async () => {
            if (zk(!0), !sk.current && Uk && Tk && fk) {
              sk.current = !0, jk(!0), Vk(null);
              try {
                await mk(Uk.base64Jpg, ck, Lk ? ik : null)
              } catch (kk) {
                Vk(kk.errorMessageForUser ? xk(kk.errorMessageForUser, kk.errorMessageTranslationParams) : xk("thumbnail:failedToUploadImage"))
              } finally {
                sk.current = !1, jk(!1)
              }
            } else fk || Pk()
          },
          children: xk(Ak ? "thumbnail:processing" : "thumbnail:uploadThumbnail")
        })]
      })
    }
    const Xk = 2e3;

    function Bk(kk) {
      let {
        schematicId: ek,
        ownedThumbnailCount: ik,
        onClose: fk,
        onThumbnailReady: Sk
      } = kk;
      const {
        t: bk
      } = (0, rk.D)(), {
        userContext: Pk
      } = (0, uk.d)(), [mk, xk] = (0, Dk.useState)(!1), [Uk, Hk] = (0, Dk.useState)(!1), [wk, lk] = (0, Dk.useState)(!1), pk = (0, Dk.useRef)();
      (0, Dk.useEffect)((() => () => {
        clearTimeout(pk.current)
      }), []);
      const yk = function(kk, ek) {
        const ik = [];
        return kk.isLoggedIn() || ik.push(Wk.NOT_LOGGED_IN), ek >= Kk.W && ik.push(Wk.THUMBNAIL_LIMIT_REACHED), ik
      }(Pk, ik);
      if (yk.length > 0) {
        const kk = {
          [Wk.NOT_LOGGED_IN]: {
            key: "thumbnail:mustBeLoggedInToUpload"
          },
          [Wk.THUMBNAIL_LIMIT_REACHED]: {
            key: "thumbnail:thumbnailLimitReachedPleaseDelete",
            params: {
              max: Kk.W
            }
          }
        };
        return (0, Yk.jsxs)("div", {
          className: "ThumbnailUploaderInner",
          children: [(0, Yk.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: bk("thumbnail:cannotUploadThumbnail")
          }), yk.map(((ek, ik) => {
            const Dk = kk[ek];
            return (0, Yk.jsxs)("div", {
              className: "CannotUploadThumbnailItem",
              children: [(0, Yk.jsx)(Mk.d, {
                name: "triangle-exclamation"
              }), (0, Yk.jsx)("span", {
                children: bk(Dk.key, Dk.params)
              })]
            }, ik)
          }))]
        })
      }
      return (0, Yk.jsxs)("div", {
        className: nk()("ThumbnailUploaderInner", {
          ThumbnailUploaderSuccess: mk
        }),
        children: [mk && (0, Yk.jsxs)("div", {
          className: "ThumbnailUploadSuccessOverlay",
          children: [(0, Yk.jsxs)("div", {
            className: "ThumbnailUploadSuccessIcon FullyFancyText AnimFadeInScaleUp",
            children: [(0, Yk.jsx)(Mk.d, {
              name: "check"
            }), (0, Yk.jsx)(zk.b, {})]
          }), (0, Yk.jsx)("div", {
            className: "ThumbnailUploadSuccessText AnimFadeInScaleUp",
            children: bk("thumbnail:thumbnailUploaded")
          })]
        }), (0, Yk.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: bk("thumbnail:uploadThumbnail")
        }), (0, Yk.jsxs)("div", {
          className: "ThumbnailUploaderBody",
          children: [(0, Yk.jsxs)("div", {
            className: "ThumbnailUploaderLeft",
            children: [(0, Yk.jsx)("h3", {
              className: "SchematicPopupSubtitle",
              children: bk("thumbnail:chooseImage", {
                maxSizeKb: Qk
              })
            }), (0, Yk.jsx)(tk, {
              schematicId: ek,
              hasReadUploadPolicy: Uk,
              onPolicyValidationError: () => {
                lk(!0)
              },
              onThumbnailReady: async (kk, ek, ik) => {
                await Sk(kk, ek, ik), xk(!0), pk.current = setTimeout(fk, Xk)
              }
            })]
          }), (0, Yk.jsxs)("div", {
            className: "ThumbnailUploadPolicy",
            children: [(0, Yk.jsx)("h3", {
              className: "ThumbnailUploadPolicyTitle",
              children: bk("thumbnail:uploadPolicy")
            }), (0, Yk.jsxs)("ul", {
              className: "ThumbnailUploadPolicyList",
              children: [(0, Yk.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, Yk.jsx)(Mk.d, {
                  name: "check"
                }), (0, Yk.jsx)("span", {
                  children: bk("thumbnail:policyFollowGuidelines")
                })]
              }), (0, Yk.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, Yk.jsx)(Mk.d, {
                  name: "check"
                }), (0, Yk.jsx)("span", {
                  children: bk("thumbnail:policyInGameAssets")
                })]
              }), (0, Yk.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, Yk.jsx)(Mk.d, {
                  name: "check"
                }), (0, Yk.jsx)("span", {
                  children: bk("thumbnail:policyLimitText")
                })]
              }), (0, Yk.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, Yk.jsx)(Mk.d, {
                  name: "x"
                }), (0, Yk.jsx)("span", {
                  children: bk("thumbnail:policyCopyrightContent")
                })]
              }), (0, Yk.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, Yk.jsx)(Mk.d, {
                  name: "x"
                }), (0, Yk.jsx)("span", {
                  children: bk("thumbnail:policyOutOfGameAssets")
                })]
              }), (0, Yk.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, Yk.jsx)(Mk.d, {
                  name: "x"
                }), (0, Yk.jsx)("span", {
                  children: bk("thumbnail:policyBloxdTags")
                })]
              }), (0, Yk.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, Yk.jsx)(Mk.d, {
                  name: "x"
                }), (0, Yk.jsx)("span", {
                  children: bk("thumbnail:policyMustReflectGame")
                })]
              })]
            }), (0, Yk.jsxs)("label", {
              className: nk()("ThumbnailUploadCheckbox Policy", {
                ValidationError: wk && !Uk
              }),
              children: [(0, Yk.jsx)("input", {
                type: "checkbox",
                checked: Uk,
                onChange: kk => {
                  Hk(kk.target.checked)
                }
              }), bk("thumbnail:agreeToUploadPolicy")]
            }), wk && !Uk && (0, Yk.jsx)("div", {
              className: "ThumbnailPolicyError",
              children: bk("thumbnail:policyRequired")
            })]
          })]
        })]
      })
    }
    var ck = ik(1177);
    const Tk = {
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

    function Zk(kk) {
      var ek, ik;
      let {
        schematicData: bk,
        updateSchematicData: mk,
        publishFormEnabled: Kk,
        onClose: xk
      } = kk;
      const {
        t: Uk
      } = (0, rk.D)(), {
        userContext: Hk,
        isUserContextUpdating: wk
      } = (0, uk.d)(), lk = (0, Fk.e)(), [pk, yk] = (0, Dk.useState)([]), [Lk, Ck] = (0, Dk.useState)([]), [Ak, jk] = (0, Dk.useState)(!0), [sk, dk] = (0, Dk.useState)(null !== (ek = bk.customThumbnailId) && void 0 !== ek ? ek : null), [Ik, zk] = (0, Dk.useState)(null), Qk = (0, Dk.useRef)(null !== (ik = bk.customThumbnailId) && void 0 !== ik ? ik : null), vk = (0, Dk.useRef)(0), Ek = (0, Dk.useRef)(null), hk = (0, Dk.useRef)(null), ak = (0, Dk.useRef)(null), Wk = (0, Dk.useRef)(!1);

      function tk(kk, ek) {
        ak.current && (clearTimeout(ak.current), ak.current = null), zk(kk), null !== kk && ek && (ak.current = setTimeout((() => {
          zk(null), ak.current = null
        }), 5e3))
      }(0, Dk.useEffect)((() => () => {
        clearTimeout(hk.current), clearTimeout(ak.current)
      }), []);
      const Xk = (0, Dk.useCallback)((() => {
        jk(!0), Vk.b.getOwnedThumbnails(Hk).then((kk => {
          const ek = [],
            ik = [];
          for (const Dk of kk.thumbnails) Dk.rejectionPolicyId ? ek.push(Dk) : ik.push(Dk);
          ek.sort(((kk, ek) => kk.lastUpdatedAt - ek.lastUpdatedAt)), ik.sort(((kk, ek) => {
            const ik = kk.approved ? 1 : 0,
              Dk = (ek.approved ? 1 : 0) - ik;
            return 0 !== Dk ? Dk : ek.lastUpdatedAt - kk.lastUpdatedAt
          })), Ck(ek), yk(ik)
        })).catch((kk => {
          console.error("Failed to fetch thumbnails:", kk)
        })).finally((() => {
          jk(!1)
        }))
      }), [Hk]);
      async function Tk(kk, ek, ik) {
        return Vk.b.uploadSchematicThumbnail(Hk, kk, ek, ik).then((() => {
          tk({
            text: Uk("thumbnail:uploadedAwaitingModeration"),
            type: "success"
          }, !0), Xk()
        }))
      }

      function Zk() {
        vk.current = Date.now(), hk.current = null;
        const kk = Ek.current;
        Ek.current = null, tk({
          text: Uk("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), Vk.b.setSchematicThumbnail(Hk, bk.schematicId, kk).then((() => {
          lk.current && (tk({
            text: Uk("thumbnail:thumbnailUpdated"),
            type: "success"
          }, !0), Qk.current = kk, mk("customThumbnailId", kk), mk("customThumbnailBlurhash", void 0), mk("customThumbnailVariants", void 0))
        })).catch((kk => {
          lk.current && (tk({
            text: kk.errorMessageForUser ? Uk(kk.errorMessageForUser, kk.errorMessageTranslationParams) : Uk("thumbnail:failedToSetThumbnail"),
            type: "error"
          }, !0), dk(Qk.current))
        }))
      }

      function Gk(kk) {
        dk(kk), Ek.current = kk;
        const ek = Date.now() - vk.current;
        ek >= 1e3 ? Zk() : (tk({
          text: Uk("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), hk.current || (hk.current = setTimeout((() => {
          Zk()
        }), 1e3 - ek)))
      }
      return (0, Dk.useEffect)((() => {
        !1 === wk && Xk()
      }), [wk, Xk]), Lk.length > 0 ? (0, Yk.jsx)(Ok, {
        rejectedThumbnails: Lk,
        userContext: Hk,
        isMountedRef: lk,
        onAcknowledged: Xk
      }) : (0, Yk.jsxs)("div", {
        className: "BloxdForm ThumbnailSection",
        children: [(0, Yk.jsxs)("div", {
          className: "SectionTitle",
          children: [Uk("thumbnail:gameThumbnail"), Ik && (0, Yk.jsx)("span", {
            className: nk()("ThumbnailActionMsg", `ThumbnailActionMsg--${Ik.type}`),
            children: Ik.text
          })]
        }), (0, Yk.jsx)("div", {
          className: "SectionBody",
          children: (0, Yk.jsxs)("div", {
            className: "ThumbnailGrid",
            children: [(0, Yk.jsxs)("div", {
              className: nk()("ThumbnailGridItem ThumbnailGridItemDefault", {
                ThumbnailGridItemSelected: null === sk
              }),
              onClick: () => Gk(null),
              children: [(0, Yk.jsx)(qk.e, {
                game: {
                  schematicId: bk.schematicId,
                  imageBlurhash: bk.imageBlurhash
                }
              }), (0, Yk.jsx)("div", {
                className: "ThumbnailGridItemLabel ThumbnailDefaultLabel",
                children: Uk("general:default")
              })]
            }), Ak && (0, Yk.jsx)(Pk.d, {}), pk.map(((kk, ek) => (0, Yk.jsxs)("div", {
              className: nk()("ThumbnailGridItem", {
                ThumbnailGridItemSelected: sk === kk.id,
                ThumbnailGridItemPending: !kk.approved
              }),
              onClick: () => {
                kk.approved && Gk(kk.id)
              },
              children: [kk.approved && (0, Yk.jsx)("img", {
                src: `${ck.clientSideServerUrls.s3Url}/customThumbnails/${kk.id}.jpg`,
                alt: "Thumbnail"
              }), kk.approved && (0, Yk.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: kk.name
              }), kk.id && (0, Yk.jsx)(Sk.R, {
                className: "ThumbnailDeleteButton",
                onClick: ek => async function(kk, ek, ik) {
                  kk.stopPropagation();
                  const Dk = await fk.NotificationProvider.showCustomPopup({
                      body: kk => (0, Yk.jsx)(gk, {
                        thumbnailId: ek,
                        thumbnailName: ik,
                        onClose: ek => {
                          ek && (Wk.current = !0), kk()
                        }
                      }),
                      middleScreenPopupClassName: "ThumbnailDeleteConfirmPopup",
                      onClose: xk
                    }).getResult(),
                    Sk = Wk.current;
                  Wk.current = !1, Sk && !0 === Dk && (lk.current && tk({
                    text: Uk("thumbnail:deletingThumbnail"),
                    type: "info"
                  }, !1), Vk.b.deleteSchematicThumbnail(Hk, ek).then((() => {
                    lk.current && (tk({
                      text: Uk("thumbnail:thumbnailDeleted"),
                      type: "success"
                    }, !0), Qk.current === ek && Gk(null), Xk())
                  })).catch((kk => {
                    lk.current && tk({
                      text: kk.errorMessageForUser ? Uk(kk.errorMessageForUser, kk.errorMessageTranslationParams) : Uk("thumbnail:failedToDeleteThumbnail"),
                      type: "error"
                    }, !0)
                  })))
                }(ek, kk.id, kk.name),
                children: (0, Yk.jsx)(Mk.d, {
                  name: "trash-can"
                })
              }), !kk.approved && (0, Yk.jsx)("div", {
                className: "ThumbnailUnapprovedIcon",
                children: (0, Yk.jsx)(Mk.d, {
                  name: "hourglass-clock"
                })
              }), !kk.approved && (0, Yk.jsxs)("div", {
                className: "ThumbnailGridItemLabel ThumbnailPendingLabel",
                children: [kk.name, (0, Yk.jsx)("br", {}), Uk("thumbnail:pendingApproval")]
              })]
            }, ek))), (0, Yk.jsxs)("div", {
              className: nk()("ThumbnailGridItem ThumbnailUploadTile", {
                ThumbnailUploadTileDisabled: !Kk
              }),
              onClick: () => {
                Kk && function(kk) {
                  let {
                    schematicId: ek,
                    ownedThumbnailCount: ik,
                    onThumbnailReady: Dk,
                    onClose: Sk
                  } = kk;
                  fk.NotificationProvider.showCustomPopup({
                    body: kk => (0, Yk.jsx)(Bk, {
                      schematicId: ek,
                      ownedThumbnailCount: ik,
                      onClose: kk,
                      onThumbnailReady: Dk
                    }),
                    middleScreenPopupClassName: "SchematicThumbnailPopup",
                    onClose: Sk,
                    unlockPointerKey: "schematicThumbnailUploaderPopup"
                  })
                }({
                  schematicId: bk.schematicId,
                  ownedThumbnailCount: pk.length,
                  onThumbnailReady: Tk,
                  onClose: xk
                })
              },
              children: [(0, Yk.jsx)(Mk.d, {
                name: "plus"
              }), (0, Yk.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: Uk("thumbnail:uploadThumbnail")
              })]
            })]
          })
        })]
      })
    }

    function Ok(kk) {
      let {
        rejectedThumbnails: ek,
        userContext: ik,
        isMountedRef: fk,
        onAcknowledged: bk
      } = kk;
      const {
        t: mk
      } = (0, rk.D)(), [Kk, xk] = (0, Dk.useState)(!1), [nk, Uk] = (0, Dk.useState)(!1), Hk = function(kk) {
        const ek = new Map;
        for (const ik of kk) {
          const kk = ik.rejectionPolicyId,
            Dk = ek.get(kk);
          Dk ? Dk.push(ik) : ek.set(kk, [ik])
        }
        return ek
      }(ek);
      return (0, Yk.jsxs)("div", {
        className: "ThumbnailRejectionNotice",
        children: [(0, Yk.jsxs)("div", {
          className: "ThumbnailRejectionNoticeTitle",
          children: [(0, Yk.jsx)(Mk.d, {
            name: "triangle-exclamation"
          }), " ", mk("thumbnail:thumbnailsRejected"), " ", (0, Yk.jsx)(Mk.d, {
            name: "triangle-exclamation"
          })]
        }), (0, Yk.jsx)("div", {
          className: "ThumbnailRejectionNoticeSubtitle",
          children: mk("thumbnail:thumbnailsRejectedDescription")
        }), (0, Yk.jsx)("div", {
          className: "ThumbnailRejectionNoticeList",
          children: [...Hk.entries()].map((kk => {
            let [ek, ik] = kk;
            const Dk = Tk[ek];
            return (0, Yk.jsxs)("div", {
              className: "ThumbnailRejectionNoticeGroup",
              children: [(0, Yk.jsx)("div", {
                className: "ThumbnailRejectionNoticeItems",
                children: ik.map((kk => (0, Yk.jsxs)("div", {
                  className: "ThumbnailRejectionNoticeItem",
                  children: [(0, Yk.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemIcon",
                    children: (0, Yk.jsx)(Mk.d, {
                      name: "image-slash"
                    })
                  }), (0, Yk.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemDetails",
                    children: (0, Yk.jsx)("div", {
                      className: "ThumbnailRejectionNoticeItemName",
                      children: kk.name
                    })
                  })]
                }, kk.id)))
              }), (0, Yk.jsxs)("div", {
                className: "ThumbnailRejectionNoticeGroupReason",
                children: [mk("thumbnail:rejectionReason"), " ", Dk ? mk(Dk.reason) : ek]
              }), Dk && (0, Yk.jsx)("ul", {
                className: "ThumbnailRejectionNoticeGroupTips",
                children: Dk.tips.map((kk => (0, Yk.jsx)("li", {
                  children: mk(kk)
                }, kk)))
              })]
            }, ek)
          }))
        }), (0, Yk.jsxs)("label", {
          className: "ThumbnailRejectionNoticeCheckbox",
          children: [(0, Yk.jsx)(dk.d, {
            checked: Kk,
            onChange: kk => xk(kk.target.checked),
            disabled: nk
          }), (0, Yk.jsx)("span", {
            children: mk("thumbnail:haveReadRejectionReasons")
          })]
        }), (0, Yk.jsx)(Sk.r, {
          onClick: async function() {
            Uk(!0);
            const kk = await Promise.allSettled(ek.map((kk => Vk.b.deleteSchematicThumbnail(ik, kk.id))));
            if (!fk.current) return;
            const Dk = kk.filter((kk => "rejected" === kk.status));
            Dk.length > 0 && console.error("Some rejected thumbnails failed to delete:", Dk), bk()
          },
          disabled: !Kk || nk,
          className: "ThumbnailRejectionNoticeAcceptButton",
          children: nk ? (0, Yk.jsx)(Pk.d, {}) : mk("general:accept")
        })]
      })
    }

    function gk(kk) {
      let {
        thumbnailId: ek,
        thumbnailName: ik,
        onClose: Dk
      } = kk;
      const {
        t: fk
      } = (0, rk.D)();
      return (0, Yk.jsxs)("div", {
        className: "ThumbnailDeleteConfirm",
        children: [(0, Yk.jsx)("div", {
          className: "ThumbnailDeleteConfirmTitle",
          children: fk("thumbnail:deleteThumbnail")
        }), (0, Yk.jsxs)("div", {
          className: "ThumbnailDeleteConfirmImageContainer",
          children: [(0, Yk.jsx)("img", {
            className: "ThumbnailDeleteConfirmImage",
            src: `${ck.clientSideServerUrls.s3Url}/customThumbnails/${ek}.jpg`,
            alt: "Thumbnail to delete"
          }), (0, Yk.jsx)("div", {
            className: "ThumbnailGridItemLabel",
            children: ik
          })]
        }), (0, Yk.jsx)("div", {
          className: "ThumbnailDeleteConfirmSubtitle",
          children: fk("thumbnail:deleteThumbnailConfirmation")
        }), (0, Yk.jsxs)("div", {
          className: "ThumbnailDeleteConfirmButtons",
          children: [(0, Yk.jsxs)(Sk.R, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => Dk(!0),
            children: [(0, Yk.jsx)(Mk.d, {
              name: "trash-can"
            }), " ", fk("general:delete")]
          }), (0, Yk.jsx)(Sk.j, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => Dk(!1),
            children: fk("general:cancel")
          })]
        })]
      })
    }
    var Gk = ik(2107),
      Nk = ik(4915),
      Rk = ik(4924),
      Jk = ik(4955);

    function ke(kk) {
      let {
        schematicData: ek,
        setTexturePack: ik,
        initializeTexturePack: fk,
        publishFormEnabled: Sk
      } = kk;
      const {
        t: bk
      } = (0, rk.D)(), [Pk, mk] = (0, Dk.useState)(null), [Mk, Kk] = (0, Dk.useState)(null), [xk, Uk] = (0, Dk.useState)(!1), Hk = (0, Fk.e)(), wk = Sk && !xk, lk = ek.customTexturePackKey;

      function pk(kk) {
        var ek;
        mk(kk.metaData.id), Kk(null !== (ek = kk.metaData.fromFolderName) && void 0 !== ek ? ek : null), (kk.metaData.id !== Gk.u.CUSTOM || kk.metaData.fromFolderName) && ik(kk)
      }
      return (0, Dk.useEffect)((() => {
        lk && (Uk(!0), (0, Nk.e)(lk).then((kk => {
          var ek;
          Hk.current && (kk ? (mk(kk.metaData.id), Kk(null !== (ek = kk.metaData.fromFolderName) && void 0 !== ek ? ek : null), fk(kk)) : console.error(`No texture pack at ${lk}`))
        })).catch((kk => {
          console.error("Error fetching texture pack: ", kk)
        })).finally((() => {
          Uk(!1)
        })))
      }), [lk, fk, Hk]), (0, Yk.jsxs)("div", {
        className: "BloxdForm TexturePackSection",
        children: [(0, Yk.jsx)("div", {
          className: "SectionTitle",
          children: bk("customTexturePack:customTexturePack")
        }), (0, Yk.jsxs)("div", {
          className: "TexturePackList",
          children: [(0, Yk.jsx)("div", {
            className: nk()("TexturePack", {
              Selected: null === Pk && !xk,
              Disabled: !wk
            }),
            onClick: () => {
              wk && (mk(null), ik(null), Kk(null))
            },
            children: (0, Yk.jsx)("div", {
              className: "TexturePackName",
              children: "No Override"
            })
          }), Object.values(Gk.u).map((kk => (0, Yk.jsx)(Rk.c, {
            id: kk,
            isSelected: kk === Pk,
            setSelected: pk,
            disabled: !wk
          }, kk)))]
        }), Pk === Gk.u.CUSTOM && (0, Yk.jsx)(Jk.c, {
          folderName: Mk,
          onTexturePackUpdated: pk,
          disabled: !wk,
          maxFileSizeMb: 25,
          packOwner: "customGame"
        })]
      })
    }
    var ee = ik(4979);

    function ie(kk) {
      var ek;
      let {
        gameCategory: ik,
        setGameCategory: Dk,
        disabled: fk
      } = kk;
      const bk = null !== (ek = (0, Uk.ib)(ik)) && void 0 !== ek ? ek : "other";
      return (0, Yk.jsxs)("div", {
        className: "GameCategoryPicker",
        children: [(0, Yk.jsx)(lk.f, {
          label: "worldBuilder:gameCategoryGroup",
          className: "GameCategoryGroup",
          disabled: fk,
          children: (0, Yk.jsx)(pk.e, {
            options: Uk.$.map((kk => ({
              value: kk,
              label: Uk.X[kk]
            }))),
            value: bk,
            onChange: kk => {
              kk.value !== bk && Dk(Uk.Q[kk.value][0])
            }
          })
        }), (0, Yk.jsx)(lk.f, {
          label: "worldBuilder:gameCategory",
          className: "GameCategory",
          disabled: fk,
          children: (0, Yk.jsx)("div", {
            className: "GameCategoryOptions",
            children: Uk.Q[bk].map((kk => (0, Yk.jsx)(Sk.X, {
              active: kk === ik,
              onClick: () => {
                Dk(kk)
              },
              children: (0, Uk.gb)(kk)
            }, kk)))
          })
        })]
      })
    }

    function De(kk) {
      let {
        editor: ek,
        onClose: ik
      } = kk;
      const {
        t: Dk
      } = (0, rk.D)(), {
        schematicData: fk,
        updateSchematicData: Sk,
        publishFormEnabled: Pk,
        formEnabled: mk
      } = ek;
      return (0, Yk.jsxs)(Yk.Fragment, {
        children: [(0, Yk.jsxs)(Lk, {
          icon: "pen-to-square",
          title: Dk("worldBuilder:basicsSection"),
          disabled: !mk,
          children: [(0, Yk.jsx)(Ck, {
            label: Dk("general:name"),
            caption: Dk("worldBuilder:schematicNameTagsHint"),
            children: (0, Yk.jsx)(bk.b, {
              className: "SchematicPageName",
              defaultValue: fk.name,
              onValueChange: kk => Sk("name", kk),
              placeholderText: Dk("worldBuilder:schematicNamePlaceholder"),
              maxLength: Kk.qb
            })
          }), (0, Yk.jsx)(Ck, {
            label: Dk("general:description"),
            children: (0, Yk.jsx)(bk.b, {
              className: "SchematicPageDescription",
              useTextarea: !0,
              defaultValue: fk.description,
              onValueChange: kk => Sk("description", kk),
              placeholderText: Dk("worldBuilder:schematicDescriptionPlaceholder"),
              maxLength: Kk.nb
            })
          }), (0, Yk.jsx)(ie, {
            gameCategory: fk.gameCategory,
            setGameCategory: kk => Sk("gameCategory", kk),
            disabled: !Pk
          }), !0 === fk.gamePublished && (0, Yk.jsx)(Zk, {
            schematicData: fk,
            updateSchematicData: Sk,
            publishFormEnabled: Pk,
            onClose: function() {
              null === ik || void 0 === ik || ik()
            }
          })]
        }), (0, Yk.jsx)(jk, {
          schematicData: fk,
          updateSchematicData: Sk,
          publishFormEnabled: Pk,
          formEnabled: mk
        }), !0 === fk.gamePublished && (0, Yk.jsx)(Lk, {
          icon: "palette",
          title: Dk("worldBuilder:texturePackSection"),
          disabled: !mk,
          children: (0, Yk.jsx)(ke, {
            schematicData: fk,
            setTexturePack: ek.setTexturePack,
            initializeTexturePack: ek.initializeTexturePack,
            publishFormEnabled: Pk
          })
        })]
      })
    }

    function fe(kk) {
      let {
        editor: ek
      } = kk;
      const {
        t: ik
      } = (0, rk.D)(), {
        schematicData: Dk,
        formEnabled: fk,
        hasUnsavedChanges: bk
      } = ek, Kk = fk && bk;
      return (0, Yk.jsxs)("footer", {
        className: "SchematicPageFooter",
        children: [fk && bk && (0, Yk.jsxs)("div", {
          className: "SchematicPageFooterStatus",
          children: [(0, Yk.jsx)("span", {
            className: "SchematicPageFooterStatusDot"
          }), ik("worldBuilder:unsavedChanges")]
        }), (0, Yk.jsx)(mk.i, {
          tooltipInner: (0, Yk.jsx)("div", {
            className: "SaveButtonTooltip",
            children: ik(fk && !bk ? "worldBuilder:saveChangesNoneDescription" : "worldBuilder:saveChangesDescription")
          }),
          children: (0, Yk.jsxs)(Sk.f, {
            className: "SaveChangesButton",
            onClick: () => ek.saveSchematic(Dk.gamePublished),
            disabled: !Kk,
            children: [(0, Yk.jsxs)("span", {
              className: fk ? "" : "SaveChangesButtonBodyHidden",
              children: [(0, Yk.jsx)(Mk.d, {
                name: "wrench"
              }), " ", ik("worldBuilder:saveChanges")]
            }), !fk && (0, Yk.jsx)(Pk.d, {})]
          })
        })]
      })
    }

    function Se(kk) {
      let {
        schematic: ek,
        onSchematicUpdate: ik,
        onClose: fk,
        inSourceWorld: bk
      } = kk;
      const {
        t: Pk
      } = (0, rk.D)();

      function mk() {
        null === fk || void 0 === fk || fk()
      }
      const Mk = (0, ee.c)(ek, {
        onNavigateAway: mk,
        inSourceWorld: bk
      });
      return (0, Dk.useEffect)((() => {
        null === ik || void 0 === ik || ik(Mk.schematicData)
      }), [Mk.schematicData, ik]), (0, Yk.jsxs)("div", {
        className: "SchematicPage SchematicPagePopupVariant",
        children: [(0, Yk.jsxs)("div", {
          className: "SchematicPageBody",
          children: [(0, Yk.jsx)(Sk.e, {
            onClick: mk,
            children: Pk("worldBuilder:back")
          }), (0, Yk.jsx)(Lk, {
            icon: "rocket-launch",
            title: Pk("worldBuilder:actionsSection"),
            disabled: !Mk.formEnabled,
            children: (0, Yk.jsx)(sk.c, {
              editor: Mk
            })
          }), (0, Yk.jsx)(De, {
            editor: Mk,
            onClose: mk
          })]
        }), (0, Yk.jsx)(fe, {
          editor: Mk
        })]
      })
    }

    function be(kk) {
      let {
        schematic: ek,
        onSchematicUpdate: ik,
        onClose: Dk,
        inSourceWorld: Sk
      } = kk;
      fk.NotificationProvider.showCustomPopup({
        body: kk => (0, Yk.jsx)(Se, {
          schematic: ek,
          onSchematicUpdate: ik,
          onClose: kk,
          inSourceWorld: Sk
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: Dk,
        unlockPointerKey: "schematicPagePopup"
      })
    }
  },
  4879: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Kk
    });
    var Dk = ik(1021),
      fk = ik.n(Dk),
      Sk = ik(1172),
      bk = ik(1033),
      rk = ik(1410),
      Pk = ik(1345),
      mk = ik(1327),
      Mk = ik(1066);

    function Kk(kk) {
      let {
        editor: ek,
        className: ik
      } = kk;
      const {
        t: Dk
      } = (0, Sk.D)(), {
        schematicData: Kk,
        formEnabled: xk,
        publishFormEnabled: nk
      } = ek, Uk = !xk || !nk;
      return (0, Mk.jsxs)("div", {
        className: fk()("PublishButtonContainer", ik),
        children: [ek.canEditSourceWorld && (0, Mk.jsxs)(rk.f, {
          onClick: ek.editSourceWorld,
          disabled: Uk,
          children: [(0, Mk.jsx)(bk.d, {
            name: "edit"
          }), " ", Dk("worldBuilder:editSourceWorld")]
        }), !Kk.gamePublished && (0, Mk.jsx)(Pk.i, {
          tooltipInner: (0, Mk.jsx)("div", {
            className: "PublishButtonTooltip",
            children: Dk("worldBuilder:publishAsGameDescription")
          }),
          children: (0, Mk.jsxs)(rk.r, {
            onClick: () => ek.saveSchematic(!0),
            disabled: Uk,
            children: [(0, Mk.jsx)(bk.d, {
              name: "rocket-launch"
            }), " ", Dk("worldBuilder:publishAsGame"), " ", (0, Mk.jsx)(bk.d, {
              name: "info-circle"
            })]
          })
        }), !0 === Kk.gamePublished && (0, Mk.jsxs)(Mk.Fragment, {
          children: [(0, Mk.jsx)(Pk.i, {
            tooltipInner: (0, Mk.jsx)("div", {
              className: "PublishButtonTooltip",
              children: Dk("worldBuilder:unpublishAsGameDescription")
            }),
            children: (0, Mk.jsxs)(rk.R, {
              onClick: ek.unpublishSchematic,
              disabled: Uk,
              children: [(0, Mk.jsx)(bk.d, {
                name: "rocket-launch"
              }), " ", Dk("worldBuilder:unpublishAsGame"), " ", (0, Mk.jsx)(bk.d, {
                name: "info-circle"
              })]
            })
          }), (0, Mk.jsxs)(rk.f, {
            onClick: ek.playGame,
            disabled: Uk,
            children: [(0, Mk.jsx)(bk.d, {
              name: "joystick"
            }), " ", Dk("general:playGame")]
          })]
        }), !xk && (0, Mk.jsx)(mk.d, {
          loaderType: "Secondary"
        })]
      })
    }
  },
  4915: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => fk
    });
    var Dk = ik(1177);
    async function fk(kk) {
      const ek = await fetch(`${Dk.clientSideServerUrls.s3Url}/${kk}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === ek.status || 403 === ek.status) return null;
      if (!ek.ok) throw new Error(`Failed to download the texture pack (${ek.status})`);
      return await ek.json()
    }
  },
  4979: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => wk
    });
    var Dk = ik(60),
      fk = ik(1311),
      Sk = ik(996),
      bk = ik(165),
      rk = ik(1519),
      Pk = ik(22),
      mk = ik(1893),
      Mk = ik(1459),
      Kk = ik(4528),
      xk = ik(1333),
      nk = ik(1095),
      Uk = ik(1479);

    function Hk(kk, ek) {
      return {
        schematicId: kk.schematicId,
        name: kk.name,
        description: kk.description,
        gamePublished: ek,
        gameCategory: kk.gameCategory,
        defaultGamemode: kk.defaultGamemode,
        voidDeathHeight: kk.voidDeathHeight,
        disableKeepInventory: kk.disableKeepInventory,
        disableTpRequests: kk.disableTpRequests,
        disableLobbySpawn: kk.disableLobbySpawn,
        disableMobs: kk.disableMobs,
        disableSpawnProtection: kk.disableSpawnProtection,
        disableFallDamage: kk.disableFallDamage,
        worldBorder: kk.worldBorder,
        hideLobbyCode: kk.hideLobbyCode,
        enableSmpMarketplace: kk.enableSmpMarketplace,
        enableSurvivalGuns: kk.enableSurvivalGuns,
        enableSpawnReset: kk.enableSpawnReset,
        enableDayNight: kk.enableDayNight,
        persistWorld: kk.persistWorld,
        persistInventory: kk.persistInventory
      }
    }

    function wk(kk) {
      let {
        onNavigateAway: ek,
        inSourceWorld: ik = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const {
        userContext: wk
      } = (0, nk.d)(), lk = (0, Uk.useNavigatePreserveSearch)(), [pk, yk] = (0, Dk.useState)({
        ...kk
      }), [Yk, Lk] = (0, Dk.useState)("Enter"), [Ck, Ak] = (0, Dk.useState)(void 0), jk = (0, Dk.useRef)(Hk(kk, kk.gamePublished)), sk = (0, Dk.useRef)(void 0), dk = "Enter" === Yk, Vk = wk.playerHasRank("developer") || wk.playerHasRank("admin") || "Enter" === Yk && !1 !== pk.schematicContainsSpawnBlock, Fk = void 0 !== Ck && Ck !== sk.current || JSON.stringify(Hk(pk, pk.gamePublished)) !== JSON.stringify(jk.current);

      function uk(kk, ek) {
        yk((ik => ({
          ...ik,
          [kk]: ek
        })))
      }
      const qk = (0, Dk.useCallback)((kk => {
        sk.current = kk, Ak(kk)
      }), []);

      function Ik(kk) {
        Lk("Loading");
        const ek = Hk(pk, kk),
          ik = Ck !== sk.current ? Ck : void 0;
        Mk.b.updateSchematic(wk, ek, ik).then((ik => {
          let {
            customTexturePackKey: Dk
          } = ik;
          Lk("Success"), uk("customTexturePackKey", Dk), jk.current = ek, sk.current = void 0, Ak(void 0), setTimeout((() => {
            uk("gamePublished", kk), Lk("Enter")
          }), 1e3)
        })).catch((kk => {
          var ek;
          (console.error("Failed to save schematic:", kk), Lk("Error"), kk instanceof bk.d && kk.errorMessageForUser) && xk.NotificationProvider.showAlertPopup({
            title: "worldBuilder:changesNotSaved",
            subtitle: kk.errorMessageForUser,
            textOpts: {
              subtitle: null !== (ek = kk.errorMessageTranslationParams) && void 0 !== ek ? ek : void 0
            },
            confirmText: "general:ok"
          });
          setTimeout((() => {
            Lk("Enter")
          }), 1e3)
        }))
      }
      return {
        schematicData: pk,
        updateSchematicData: uk,
        setTexturePack: Ak,
        initializeTexturePack: qk,
        updateState: Yk,
        formEnabled: dk,
        publishFormEnabled: Vk,
        hasUnsavedChanges: Fk,
        canEditSourceWorld: !ik,
        saveSchematic: Ik,
        unpublishSchematic: function() {
          xk.NotificationProvider.showPromptPopup({
            icon: "rocket-launch",
            title: "worldBuilder:unpublishAsGameConfirmTitle",
            subtitle: "worldBuilder:unpublishAsGameConfirmSubtitle",
            confirmText: "worldBuilder:unpublishAsGame",
            cancelText: "general:cancel",
            unlockPointerKey: "unpublishGamePrompt"
          }).getResult().then((kk => {
            !0 === kk && Ik(!1)
          }))
        },
        editSourceWorld: function() {
          Lk("Loading"), Kk.d.getSourceWorld(pk.schematicId).then((kk => {
            mk.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, Pk.j)("other"), lk((0, fk.d)("classic", kk)), null === ek || void 0 === ek || ek()
          })).catch((kk => {
            console.error("Failed to get source world:", kk), Lk("Error"), setTimeout((() => {
              Lk("Enter")
            }), 1e3)
          }))
        },
        playGame: function() {
          mk.gameBridge.send("leaveGame", {
            reloadPath: "/"
          }), lk((0, rk.y)((0, Sk.t)(pk.schematicId), pk)), null === ek || void 0 === ek || ek()
        }
      }
    }
  },
  4872: () => {}
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);