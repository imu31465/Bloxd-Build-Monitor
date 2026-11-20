export const id = 103;
export const ids = [103];
export const modules = {
  4643: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Vk,
      f: () => sk,
      h: () => Jk
    });
    Bk(4645);
    var Rk = Bk(1149),
      tk = Bk(1020),
      ak = Bk.n(tk),
      Xk = Bk(1312),
      bk = (Bk(61), Bk(4121)),
      wk = Bk(1028),
      dk = Bk(1069);

    function sk(kk) {
      let {
        children: Fk,
        label: Bk,
        className: tk,
        circleInfoText: bk,
        disabled: sk,
        onLabelClick: Vk
      } = kk;
      const {
        t: Jk
      } = (0, Rk.x)(), Ak = (0, dk.jsxs)("div", {
        className: ak()("Label", {
          ClickableLabel: void 0 !== Vk
        }),
        onClick: Vk,
        children: [Jk(Bk), bk && (0, dk.jsx)(wk.d, {
          name: "circle-info"
        })]
      });
      return (0, dk.jsxs)("div", {
        className: ak()("LabeledInput", {
          [tk]: tk,
          DisabledLabelInput: sk
        }),
        children: [bk && (0, dk.jsx)(Xk.d, {
          tooltipInner: (0, dk.jsx)("div", {
            className: "LabeledInputTooltip",
            children: Jk(bk)
          }),
          children: Ak
        }), !bk && Ak, Fk]
      })
    }

    function Vk(kk) {
      let {
        checked: Fk,
        setChecked: Bk
      } = kk;
      return (0, dk.jsx)("div", {
        className: "OtherInput ClickableOtherInput",
        "data-pad-focusable": !0,
        onClick: kk => {
          Bk(!Fk)
        },
        children: (0, dk.jsx)(bk.c, {
          checked: Fk,
          onChange: kk => {
            Bk(kk.target.checked)
          },
          disabled: !1
        })
      })
    }

    function Jk(kk) {
      let {
        checked: Fk,
        setChecked: Bk,
        disabled: Rk
      } = kk;
      return (0, dk.jsx)("div", {
        className: ak()("SwitchContainer", {
          SwitchContainerDisabled: Rk
        }),
        onClick: () => {
          Rk || Bk(!Fk)
        },
        children: (0, dk.jsx)(bk.c, {
          className: "SwitchCheckbox",
          checked: Fk,
          onChange: kk => {
            Bk(kk.target.checked)
          },
          disabled: !!Rk
        })
      })
    }
  },
  4650: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => dk
    });
    var Rk = Bk(1020),
      tk = Bk.n(Rk),
      ak = Bk(4366),
      Xk = Bk(1149),
      bk = Bk(1069);
    const wk = [...ak.j, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function dk(kk) {
      const {
        disabled: Fk,
        hideWrapper: Bk
      } = kk, {
        t: Rk
      } = (0, Xk.x)(), dk = kk.advancedMode ? wk.map((Fk => [Fk, kk.callbacks[Fk]])) : ak.j.map((Fk => [Fk, kk.callbacks[Fk]])), Vk = (0, bk.jsx)("div", {
        className: tk()("PluginsGrid", {
          SectionBody: !Bk
        }),
        children: dk.map((kk => {
          let [Bk, Rk] = kk;
          return (0, bk.jsx)(sk, {
            plugin: Bk,
            callbacks: Rk,
            disabled: Fk
          }, Bk)
        }))
      });
      return Bk ? Vk : (0, bk.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, bk.jsx)("div", {
          className: "SectionTitle",
          children: Rk("worldBuilder:pluginsSection")
        }), Vk]
      })
    }

    function sk(kk) {
      let {
        plugin: Fk,
        callbacks: {
          isEnabled: Bk,
          lY: Rk
        },
        disabled: ak
      } = kk;
      const {
        t: wk
      } = (0, Xk.x)(), dk = Bk();
      return (0, bk.jsxs)("div", {
        className: tk()("PluginCard", {
          PluginCardEnabled: dk,
          PluginCardDisabledForm: ak
        }),
        "data-pad-focusable": !0,
        "aria-disabled": ak || void 0,
        onClick: () => {
          ak || Rk(!dk)
        },
        children: [(0, bk.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, bk.jsx)("img", {
            src: `/textures/games/classic/customGames/${Fk}.png`,
            alt: Fk
          })
        }), (0, bk.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, bk.jsx)("div", {
            className: "PluginCardTitle",
            children: wk(Vk[Fk])
          }), (0, bk.jsx)("div", {
            className: "PluginCardDescription",
            children: wk(Jk[Fk])
          })]
        }), (0, bk.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: wk(dk ? "general:on" : "general:off")
        })]
      })
    }
    const Vk = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      Jk = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  4635: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      h: () => aF,
      d: () => tF,
      e: () => RF,
      i: () => XF
    });
    var Rk = Bk(61),
      tk = Bk(1300),
      ak = Bk(1389),
      Xk = Bk(1620),
      bk = Bk(1149),
      wk = Bk(1288),
      dk = Bk(1312),
      sk = Bk(1028),
      Vk = Bk(1173),
      Jk = Bk(1020),
      Ak = Bk.n(Jk),
      ek = Bk(279),
      yk = Bk(4366),
      fk = Bk(1192),
      mk = Bk(4643),
      Wk = Bk(2926),
      vk = Bk(4650),
      ik = Bk(1069);

    function Yk(kk) {
      let {
        icon: Fk,
        title: Bk,
        disabled: Rk,
        children: tk
      } = kk;
      return (0, ik.jsxs)("div", {
        className: Ak()("ManageCard", {
          ManageCardDisabled: Rk
        }),
        children: [(0, ik.jsxs)("div", {
          className: "ManageCardHead",
          children: [(0, ik.jsx)("div", {
            className: "ManageCardIcon",
            children: (0, ik.jsx)(sk.d, {
              name: Fk
            })
          }), (0, ik.jsx)("div", {
            children: (0, ik.jsx)("h2", {
              className: "ManageCardTitle",
              children: Bk
            })
          })]
        }), (0, ik.jsxs)("div", {
          className: "ManageCardBody",
          children: [tk, Rk && (0, ik.jsx)("div", {
            className: "ManageCardDisabledOverlay"
          })]
        })]
      })
    }

    function Lk(kk) {
      let {
        label: Fk,
        caption: Bk,
        children: Rk
      } = kk;
      return (0, ik.jsxs)("div", {
        className: "ManageStackedField",
        children: [(0, ik.jsx)("div", {
          className: "ManageStackedFieldLabel",
          children: Fk
        }), Rk, Bk && (0, ik.jsx)("div", {
          className: "ManageStackedFieldCaption",
          children: Bk
        })]
      })
    }

    function Ok(kk) {
      let {
        label: Fk,
        caption: Bk,
        disabled: Rk,
        children: tk
      } = kk;
      return (0, ik.jsxs)("div", {
        className: Ak()("ManageField", {
          ManageFieldDisabled: Rk
        }),
        children: [(0, ik.jsxs)("div", {
          className: "ManageFieldText",
          children: [(0, ik.jsx)("div", {
            className: "ManageFieldLabel",
            children: Fk
          }), (0, ik.jsx)("div", {
            className: "ManageFieldCaption",
            children: Bk
          })]
        }), (0, ik.jsx)("div", {
          className: "ManageFieldControl",
          children: tk
        })]
      })
    }

    function Ek(kk) {
      var Fk, Bk;
      let {
        schematicData: Rk,
        updateSchematicData: tk,
        publishFormEnabled: ak,
        formEnabled: Xk
      } = kk;
      const {
        t: wk
      } = (0, bk.x)(), dk = !ak, sk = {
        tpRequests: {
          isEnabled: () => !Rk.disableTpRequests,
          lY: kk => tk("disableTpRequests", !kk)
        },
        spawnProtection: {
          isEnabled: () => !Rk.disableSpawnProtection,
          lY: kk => tk("disableSpawnProtection", !kk)
        },
        spawnReset: {
          isEnabled: () => !!Rk.enableSpawnReset,
          lY: kk => tk("enableSpawnReset", kk)
        },
        smpMarketplace: {
          isEnabled: () => !!Rk.enableSmpMarketplace,
          lY: kk => tk("enableSmpMarketplace", kk)
        },
        survivalGuns: {
          isEnabled: () => !!Rk.enableSurvivalGuns,
          lY: kk => tk("enableSurvivalGuns", kk)
        },
        fallDamage: {
          isEnabled: () => !Rk.disableFallDamage,
          lY: kk => tk("disableFallDamage", !kk)
        },
        dayNight: {
          isEnabled: () => !!Rk.enableDayNight,
          lY: kk => tk("enableDayNight", kk)
        }
      };
      return (0, ik.jsxs)(ik.Fragment, {
        children: [!1 === Rk.schematicContainsSpawnBlock && (0, ik.jsx)("div", {
          className: "ManageWarningBanner",
          children: wk("worldBuilder:mustContainSpawnBlock")
        }), (0, ik.jsxs)("div", {
          className: "ManageSettingsGrid",
          children: [(0, ik.jsxs)(Yk, {
            icon: "globe",
            title: wk("worldBuilder:worldRulesSection"),
            disabled: !Xk,
            children: [(0, ik.jsx)(Ok, {
              label: wk("classic:defaultGamemode"),
              caption: wk("classic:defaultGamemodeDescription"),
              disabled: dk,
              children: (0, ik.jsx)(Wk.c, {
                controlClassName: "ManageDropdown",
                options: yk.C.map((kk => ({
                  value: kk,
                  label: ek.r[kk]
                }))),
                value: Rk.defaultGamemode,
                onChange: kk => tk("defaultGamemode", kk.value)
              })
            }), (0, ik.jsx)(Ok, {
              label: wk("classic:voidDeathHeight"),
              caption: wk("classic:voidDeathHeightDescription"),
              disabled: dk,
              children: (0, ik.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, ik.jsx)("input", {
                  type: "number",
                  max: fk.z,
                  value: null !== (Fk = Rk.voidDeathHeight) && void 0 !== Fk ? Fk : "",
                  onChange: kk => {
                    const Fk = parseInt(kk.target.value);
                    tk("voidDeathHeight", Fk)
                  }
                }), (0, ik.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: wk("worldBuilder:blocksUnit")
                })]
              })
            }), (0, ik.jsx)(Ok, {
              label: wk("classic:worldBorder"),
              caption: wk("classic:worldBorderDescription"),
              disabled: dk,
              children: (0, ik.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, ik.jsx)("input", {
                  type: "number",
                  min: fk.J,
                  max: fk.C,
                  placeholder: wk("worldBuilder:noWorldBorderLimit"),
                  value: null !== (Bk = Rk.worldBorder) && void 0 !== Bk ? Bk : "",
                  onChange: kk => {
                    const Fk = parseInt(kk.target.value);
                    tk("worldBorder", isNaN(Fk) ? null : Fk)
                  }
                }), (0, ik.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: wk("worldBuilder:blocksUnit")
                })]
              })
            }), (0, ik.jsx)(Ok, {
              label: wk("classic:disableMobs"),
              caption: wk("classic:disableMobsDescription"),
              disabled: dk,
              children: (0, ik.jsx)(mk.h, {
                checked: Rk.disableMobs,
                setChecked: kk => tk("disableMobs", kk),
                disabled: dk
              })
            })]
          }), (0, ik.jsxs)(Yk, {
            icon: "user-group",
            title: wk("worldBuilder:playerAndLobbySection"),
            disabled: !Xk,
            children: [(0, ik.jsx)(Ok, {
              label: wk("classic:disableKeepInventory"),
              caption: wk("classic:disableKeepInventoryDescription"),
              disabled: dk,
              children: (0, ik.jsx)(mk.h, {
                checked: Rk.disableKeepInventory,
                setChecked: kk => tk("disableKeepInventory", kk),
                disabled: dk
              })
            }), (0, ik.jsx)(Ok, {
              label: wk("classic:persistInventory"),
              caption: wk("classic:persistInventoryDescription"),
              disabled: dk,
              children: (0, ik.jsx)(Wk.c, {
                controlClassName: "ManageDropdown",
                options: yk.m.map((kk => ({
                  value: kk,
                  label: ek.g[kk]
                }))),
                value: Rk.persistInventory,
                onChange: kk => tk("persistInventory", kk.value)
              })
            }), (0, ik.jsx)(Ok, {
              label: wk("classic:persistWorld"),
              caption: wk("classic:persistWorldDescription"),
              disabled: dk,
              children: (0, ik.jsx)(mk.h, {
                checked: Rk.persistWorld,
                setChecked: kk => tk("persistWorld", kk),
                disabled: dk
              })
            }), (0, ik.jsx)(Ok, {
              label: wk("classic:disableLobbySpawn"),
              caption: wk("classic:disableLobbySpawnDescription"),
              disabled: dk,
              children: (0, ik.jsx)(mk.h, {
                checked: Rk.disableLobbySpawn,
                setChecked: kk => tk("disableLobbySpawn", kk),
                disabled: dk
              })
            }), (0, ik.jsx)(Ok, {
              label: wk("classic:hideLobbyCode"),
              caption: wk("classic:hideLobbyCodeDescription"),
              disabled: dk,
              children: (0, ik.jsx)(mk.h, {
                checked: Rk.hideLobbyCode,
                setChecked: kk => tk("hideLobbyCode", kk),
                disabled: dk
              })
            })]
          })]
        }), (0, ik.jsx)(Yk, {
          icon: "layer-group",
          title: wk("worldBuilder:pluginsSection"),
          disabled: !Xk,
          children: (0, ik.jsx)(vk.b, {
            callbacks: sk,
            disabled: dk,
            advancedMode: !0,
            hideWrapper: !0
          })
        })]
      })
    }
    var Sk = Bk(4655),
      Nk = Bk(4121),
      Hk = Bk(1441),
      uk = Bk(3294),
      Mk = Bk(1096),
      gk = Bk(4612),
      Uk = Bk(4664),
      ck = Bk(1396);
    const Gk = 50,
      Tk = .3;
    async function rk(kk) {
      const Fk = await
      function(kk) {
        return new Promise(((Fk, Bk) => {
          const Rk = new FileReader;
          Rk.onload = () => Fk(Rk.result), Rk.onerror = Bk, Rk.readAsDataURL(kk)
        }))
      }(kk), Bk = await
      function(kk) {
        return new Promise(((Fk, Bk) => {
          const Rk = new Image;
          Rk.onload = () => Fk(Rk), Rk.onerror = () => Bk(new Error("Failed to load image")), Rk.src = kk
        }))
      }(Fk);
      if (Bk.naturalHeight > Bk.naturalWidth) throw new Dk;
      const Rk = 1024 * Gk,
        {
          dataUrl: tk,
          finalQuality: ak
        } = function(kk, Fk) {
          const Bk = document.createElement("canvas");
          Bk.width = kk.naturalWidth, Bk.height = kk.naturalHeight, Bk.getContext("2d").drawImage(kk, 0, 0);
          let Rk = .92,
            tk = Bk.toDataURL("image/jpeg", Rk);
          for (; .75 * tk.length > Fk && Rk > .05;) Rk -= .05, tk = Bk.toDataURL("image/jpeg", Rk);
          return {
            dataUrl: tk,
            finalQuality: Rk
          }
        }(Bk, Rk);
      if (Math.ceil(.75 * tk.length) > Rk) throw new zk;
      return {
        base64Jpg: tk,
        heavilyCompressed: ak < Tk
      }
    }
    class Dk extends Error {}
    class zk extends Error {}
    var Pk = function(kk) {
      return kk[kk.NOT_LOGGED_IN = 0] = "NOT_LOGGED_IN", kk[kk.THUMBNAIL_LIMIT_REACHED = 1] = "THUMBNAIL_LIMIT_REACHED", kk
    }(Pk || {});

    function hk(kk) {
      var Fk;
      let {
        schematicId: Bk,
        hasReadUploadPolicy: tk,
        onPolicyValidationError: wk,
        onThumbnailReady: dk
      } = kk;
      const {
        t: Jk
      } = (0, bk.x)(), [ek, yk] = (0, Rk.useState)(null), [fk, mk] = (0, Rk.useState)(""), [Wk, vk] = (0, Rk.useState)(""), [Yk, Lk] = (0, Rk.useState)(!0), [Ok, Ek] = (0, Rk.useState)(!1), Sk = (0, Rk.useRef)(!1), [Nk, Hk] = (0, Rk.useState)(null), [uk, Mk] = (0, Rk.useState)(!1), [gk, ck] = (0, Rk.useState)(!1), Gk = (0, Rk.useRef)(0), {
        getRootProps: Tk,
        getInputProps: Pk,
        isDragActive: hk
      } = (0, Uk.d)({
        accept: {
          "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp"]
        },
        multiple: !1,
        onDrop: async kk => {
          if (0 === kk.length) return;
          const Fk = kk[0],
            Bk = ++Gk.current;
          Hk(null), Mk(!1), yk(null), mk(Fk.name);
          try {
            const kk = await rk(Fk);
            if (Bk !== Gk.current) return;
            yk(kk), Mk(kk.heavilyCompressed)
          } catch (Rk) {
            if (Bk !== Gk.current) return;
            Hk(Jk(Rk instanceof Dk ? "thumbnail:portraitImagesNotAllowed" : Rk instanceof zk ? "thumbnail:couldNotCompressImage" : "thumbnail:failedToUploadImage"))
          }
        },
        useFsAccessApi: !1
      }), qk = fk.length <= 30 ? fk : `${fk.slice(0,27)}...`, Ck = null !== (Fk = null === ek || void 0 === ek ? void 0 : ek.base64Jpg) && void 0 !== Fk ? Fk : null, Zk = Wk.trim(), pk = Zk.length >= Vk.o && Zk.length <= Vk.m, Kk = gk && !ek && !Nk, xk = gk && !pk;
      return (0, ik.jsxs)("div", {
        className: "ThumbnailUploadContainer",
        children: [(0, ik.jsxs)("div", {
          ...Tk({
            className: Ak()("ThumbnailUploadDropzone", {
              ActiveDrag: hk,
              ValidationError: Kk
            })
          }),
          children: [(0, ik.jsx)("input", {
            ...Pk()
          }), !hk && Ck ? (0, ik.jsxs)(ik.Fragment, {
            children: [(0, ik.jsxs)("div", {
              className: "ThumbnailAspectPreviews",
              children: [(0, ik.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, ik.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "1:1"
                }), (0, ik.jsx)("div", {
                  className: "ThumbnailAspectFrame Square",
                  children: (0, ik.jsx)("img", {
                    src: Ck,
                    alt: "1:1 preview"
                  })
                })]
              }), (0, ik.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, ik.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "16:9"
                }), (0, ik.jsx)("div", {
                  className: "ThumbnailAspectFrame Wide",
                  children: (0, ik.jsx)("img", {
                    src: Ck,
                    alt: "16:9 preview"
                  })
                })]
              })]
            }), (0, ik.jsxs)("div", {
              children: [(0, ik.jsx)("div", {
                className: "ThumbnailUploadInstructions Active",
                children: qk
              }), (0, ik.jsx)("div", {
                className: "ThumbnailUploadInstructions Preview",
                children: Jk("thumbnail:preview")
              })]
            })]
          }) : (0, ik.jsxs)(ik.Fragment, {
            children: [(0, ik.jsx)("div", {
              className: "ThumbnailUploadIcon",
              children: (0, ik.jsx)(sk.d, {
                name: "image"
              })
            }), (0, ik.jsx)("div", {
              className: "ThumbnailUploadInstructions",
              children: Jk("thumbnail:dragImageHere")
            })]
          })]
        }), Kk && (0, ik.jsx)("div", {
          className: "ThumbnailUploadError",
          children: Jk("thumbnail:imageRequired")
        }), (0, ik.jsx)(Xk.e, {
          className: Ak()("ThumbnailUploadNameInput", {
            ValidationError: xk
          }),
          placeholderText: Jk("thumbnail:thumbnailName"),
          defaultValue: Wk,
          onValueChange: kk => {
            vk(kk)
          },
          maxLength: Vk.m
        }), xk && (0, ik.jsx)("div", {
          className: "ThumbnailUploadError",
          children: Jk("thumbnail:nameRequired", {
            min: Vk.o,
            max: Vk.m
          })
        }), (0, ik.jsxs)("label", {
          className: "ThumbnailUploadCheckbox",
          children: [(0, ik.jsx)("input", {
            type: "checkbox",
            checked: Yk,
            onChange: kk => {
              Lk(kk.target.checked)
            }
          }), Jk("thumbnail:setAsThumbnailOnceApproved")]
        }), uk && (0, ik.jsx)("div", {
          className: "ThumbnailUploadWarning",
          children: Jk("thumbnail:heavyCompressionWarning")
        }), Nk && (0, ik.jsx)("div", {
          className: "ThumbnailUploadError",
          children: Nk
        }), (0, ik.jsx)(ak.o, {
          disabled: Ok,
          className: "ThumbnailUploadButton",
          onClick: async () => {
            if (ck(!0), !Sk.current && ek && pk && tk) {
              Sk.current = !0, Ek(!0), Hk(null);
              try {
                await dk(ek.base64Jpg, Zk, Yk ? Bk : null)
              } catch (kk) {
                Hk(kk.errorMessageForUser ? Jk(kk.errorMessageForUser, kk.errorMessageTranslationParams) : Jk("thumbnail:failedToUploadImage"))
              } finally {
                Sk.current = !1, Ek(!1)
              }
            } else tk || wk()
          },
          children: Jk(Ok ? "thumbnail:processing" : "thumbnail:uploadThumbnail")
        })]
      })
    }
    const qk = 2e3;

    function Ck(kk) {
      let {
        schematicId: Fk,
        ownedThumbnailCount: Bk,
        onClose: tk,
        onThumbnailReady: ak
      } = kk;
      const {
        t: Xk
      } = (0, bk.x)(), {
        userContext: wk
      } = (0, Mk.e)(), [dk, Jk] = (0, Rk.useState)(!1), [ek, yk] = (0, Rk.useState)(!1), [fk, mk] = (0, Rk.useState)(!1), Wk = (0, Rk.useRef)();
      (0, Rk.useEffect)((() => () => {
        clearTimeout(Wk.current)
      }), []);
      const vk = function(kk, Fk) {
        const Bk = [];
        return kk.isLoggedIn() || Bk.push(Pk.NOT_LOGGED_IN), Fk >= Vk.W && Bk.push(Pk.THUMBNAIL_LIMIT_REACHED), Bk
      }(wk, Bk);
      if (vk.length > 0) {
        const kk = {
          [Pk.NOT_LOGGED_IN]: {
            key: "thumbnail:mustBeLoggedInToUpload"
          },
          [Pk.THUMBNAIL_LIMIT_REACHED]: {
            key: "thumbnail:thumbnailLimitReachedPleaseDelete",
            params: {
              max: Vk.W
            }
          }
        };
        return (0, ik.jsxs)("div", {
          className: "ThumbnailUploaderInner",
          children: [(0, ik.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: Xk("thumbnail:cannotUploadThumbnail")
          }), vk.map(((Fk, Bk) => {
            const Rk = kk[Fk];
            return (0, ik.jsxs)("div", {
              className: "CannotUploadThumbnailItem",
              children: [(0, ik.jsx)(sk.d, {
                name: "triangle-exclamation"
              }), (0, ik.jsx)("span", {
                children: Xk(Rk.key, Rk.params)
              })]
            }, Bk)
          }))]
        })
      }
      return (0, ik.jsxs)("div", {
        className: Ak()("ThumbnailUploaderInner", {
          ThumbnailUploaderSuccess: dk
        }),
        children: [dk && (0, ik.jsxs)("div", {
          className: "ThumbnailUploadSuccessOverlay",
          children: [(0, ik.jsxs)("div", {
            className: "ThumbnailUploadSuccessIcon FullyFancyText AnimFadeInScaleUp",
            children: [(0, ik.jsx)(sk.d, {
              name: "check"
            }), (0, ik.jsx)(ck.d, {})]
          }), (0, ik.jsx)("div", {
            className: "ThumbnailUploadSuccessText AnimFadeInScaleUp",
            children: Xk("thumbnail:thumbnailUploaded")
          })]
        }), (0, ik.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: Xk("thumbnail:uploadThumbnail")
        }), (0, ik.jsxs)("div", {
          className: "ThumbnailUploaderBody",
          children: [(0, ik.jsxs)("div", {
            className: "ThumbnailUploaderLeft",
            children: [(0, ik.jsx)("h3", {
              className: "SchematicPopupSubtitle",
              children: Xk("thumbnail:chooseImage", {
                maxSizeKb: Gk
              })
            }), (0, ik.jsx)(hk, {
              schematicId: Fk,
              hasReadUploadPolicy: ek,
              onPolicyValidationError: () => {
                mk(!0)
              },
              onThumbnailReady: async (kk, Fk, Bk) => {
                await ak(kk, Fk, Bk), Jk(!0), Wk.current = setTimeout(tk, qk)
              }
            })]
          }), (0, ik.jsxs)("div", {
            className: "ThumbnailUploadPolicy",
            children: [(0, ik.jsx)("h3", {
              className: "ThumbnailUploadPolicyTitle",
              children: Xk("thumbnail:uploadPolicy")
            }), (0, ik.jsxs)("ul", {
              className: "ThumbnailUploadPolicyList",
              children: [(0, ik.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, ik.jsx)(sk.d, {
                  name: "check"
                }), (0, ik.jsx)("span", {
                  children: Xk("thumbnail:policyFollowGuidelines")
                })]
              }), (0, ik.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, ik.jsx)(sk.d, {
                  name: "check"
                }), (0, ik.jsx)("span", {
                  children: Xk("thumbnail:policyInGameAssets")
                })]
              }), (0, ik.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, ik.jsx)(sk.d, {
                  name: "check"
                }), (0, ik.jsx)("span", {
                  children: Xk("thumbnail:policyLimitText")
                })]
              }), (0, ik.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, ik.jsx)(sk.d, {
                  name: "x"
                }), (0, ik.jsx)("span", {
                  children: Xk("thumbnail:policyCopyrightContent")
                })]
              }), (0, ik.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, ik.jsx)(sk.d, {
                  name: "x"
                }), (0, ik.jsx)("span", {
                  children: Xk("thumbnail:policyOutOfGameAssets")
                })]
              }), (0, ik.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, ik.jsx)(sk.d, {
                  name: "x"
                }), (0, ik.jsx)("span", {
                  children: Xk("thumbnail:policyBloxdTags")
                })]
              }), (0, ik.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, ik.jsx)(sk.d, {
                  name: "x"
                }), (0, ik.jsx)("span", {
                  children: Xk("thumbnail:policyMustReflectGame")
                })]
              })]
            }), (0, ik.jsxs)("label", {
              className: Ak()("ThumbnailUploadCheckbox Policy", {
                ValidationError: fk && !ek
              }),
              children: [(0, ik.jsx)("input", {
                type: "checkbox",
                checked: ek,
                onChange: kk => {
                  yk(kk.target.checked)
                }
              }), Xk("thumbnail:agreeToUploadPolicy")]
            }), fk && !ek && (0, ik.jsx)("div", {
              className: "ThumbnailPolicyError",
              children: Xk("thumbnail:policyRequired")
            })]
          })]
        })]
      })
    }
    var Zk = Bk(1154);
    const pk = {
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

    function Kk(kk) {
      var Fk, Bk;
      let {
        schematicData: Xk,
        updateSchematicData: dk,
        publishFormEnabled: Vk,
        onClose: Jk
      } = kk;
      const {
        t: ek
      } = (0, bk.x)(), {
        userContext: yk,
        isUserContextUpdating: fk
      } = (0, Mk.e)(), mk = (0, uk.d)(), [Wk, vk] = (0, Rk.useState)([]), [Yk, Lk] = (0, Rk.useState)([]), [Ok, Ek] = (0, Rk.useState)(!0), [Sk, Nk] = (0, Rk.useState)(null !== (Fk = Xk.customThumbnailId) && void 0 !== Fk ? Fk : null), [Uk, ck] = (0, Rk.useState)(null), Gk = (0, Rk.useRef)(null !== (Bk = Xk.customThumbnailId) && void 0 !== Bk ? Bk : null), Tk = (0, Rk.useRef)(0), rk = (0, Rk.useRef)(null), Dk = (0, Rk.useRef)(null), zk = (0, Rk.useRef)(null), Pk = (0, Rk.useRef)(!1);

      function hk(kk, Fk) {
        zk.current && (clearTimeout(zk.current), zk.current = null), ck(kk), null !== kk && Fk && (zk.current = setTimeout((() => {
          ck(null), zk.current = null
        }), 5e3))
      }(0, Rk.useEffect)((() => () => {
        clearTimeout(Dk.current), clearTimeout(zk.current)
      }), []);
      const qk = (0, Rk.useCallback)((() => {
        Ek(!0), Hk.b.getOwnedThumbnails(yk).then((kk => {
          const Fk = [],
            Bk = [];
          for (const Rk of kk.thumbnails) Rk.rejectionPolicyId ? Fk.push(Rk) : Bk.push(Rk);
          Fk.sort(((kk, Fk) => kk.lastUpdatedAt - Fk.lastUpdatedAt)), Bk.sort(((kk, Fk) => {
            const Bk = kk.approved ? 1 : 0,
              Rk = (Fk.approved ? 1 : 0) - Bk;
            return 0 !== Rk ? Rk : Fk.lastUpdatedAt - kk.lastUpdatedAt
          })), Lk(Fk), vk(Bk)
        })).catch((kk => {
          console.error("Failed to fetch thumbnails:", kk)
        })).finally((() => {
          Ek(!1)
        }))
      }), [yk]);
      async function pk(kk, Fk, Bk) {
        return Hk.b.uploadSchematicThumbnail(yk, kk, Fk, Bk).then((() => {
          hk({
            text: ek("thumbnail:uploadedAwaitingModeration"),
            type: "success"
          }, !0), qk()
        }))
      }

      function Kk() {
        Tk.current = Date.now(), Dk.current = null;
        const kk = rk.current;
        rk.current = null, hk({
          text: ek("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), Hk.b.setSchematicThumbnail(yk, Xk.schematicId, kk).then((() => {
          mk.current && (hk({
            text: ek("thumbnail:thumbnailUpdated"),
            type: "success"
          }, !0), Gk.current = kk, dk("customThumbnailId", kk), dk("customThumbnailBlurhash", void 0), dk("customThumbnailVariants", void 0))
        })).catch((kk => {
          mk.current && (hk({
            text: kk.errorMessageForUser ? ek(kk.errorMessageForUser, kk.errorMessageTranslationParams) : ek("thumbnail:failedToSetThumbnail"),
            type: "error"
          }, !0), Nk(Gk.current))
        }))
      }

      function lk(kk) {
        Nk(kk), rk.current = kk;
        const Fk = Date.now() - Tk.current;
        Fk >= 1e3 ? Kk() : (hk({
          text: ek("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), Dk.current || (Dk.current = setTimeout((() => {
          Kk()
        }), 1e3 - Fk)))
      }
      return (0, Rk.useEffect)((() => {
        !1 === fk && qk()
      }), [fk, qk]), Yk.length > 0 ? (0, ik.jsx)(xk, {
        rejectedThumbnails: Yk,
        userContext: yk,
        isMountedRef: mk,
        onAcknowledged: qk
      }) : (0, ik.jsxs)("div", {
        className: "BloxdForm ThumbnailSection",
        children: [(0, ik.jsxs)("div", {
          className: "SectionTitle",
          children: [ek("thumbnail:gameThumbnail"), Uk && (0, ik.jsx)("span", {
            className: Ak()("ThumbnailActionMsg", `ThumbnailActionMsg--${Uk.type}`),
            children: Uk.text
          })]
        }), (0, ik.jsx)("div", {
          className: "SectionBody",
          children: (0, ik.jsxs)("div", {
            className: "ThumbnailGrid",
            children: [(0, ik.jsxs)("div", {
              className: Ak()("ThumbnailGridItem ThumbnailGridItemDefault", {
                ThumbnailGridItemSelected: null === Sk
              }),
              onClick: () => lk(null),
              children: [(0, ik.jsx)(gk.c, {
                game: {
                  schematicId: Xk.schematicId,
                  imageBlurhash: Xk.imageBlurhash
                }
              }), (0, ik.jsx)("div", {
                className: "ThumbnailGridItemLabel ThumbnailDefaultLabel",
                children: ek("general:default")
              })]
            }), Ok && (0, ik.jsx)(wk.b, {}), Wk.map(((kk, Fk) => (0, ik.jsxs)("div", {
              className: Ak()("ThumbnailGridItem", {
                ThumbnailGridItemSelected: Sk === kk.id,
                ThumbnailGridItemPending: !kk.approved
              }),
              onClick: () => {
                kk.approved && lk(kk.id)
              },
              children: [kk.approved && (0, ik.jsx)("img", {
                src: `${Zk.clientSideServerUrls.s3Url}/customThumbnails/${kk.id}.jpg`,
                alt: "Thumbnail"
              }), kk.approved && (0, ik.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: kk.name
              }), kk.id && (0, ik.jsx)(ak.J, {
                className: "ThumbnailDeleteButton",
                onClick: Fk => async function(kk, Fk, Bk) {
                  kk.stopPropagation();
                  const Rk = await tk.NotificationProvider.showCustomPopup({
                      body: kk => (0, ik.jsx)(jk, {
                        thumbnailId: Fk,
                        thumbnailName: Bk,
                        onClose: Fk => {
                          Fk && (Pk.current = !0), kk()
                        }
                      }),
                      middleScreenPopupClassName: "ThumbnailDeleteConfirmPopup",
                      onClose: Jk
                    }).getResult(),
                    ak = Pk.current;
                  Pk.current = !1, ak && !0 === Rk && (mk.current && hk({
                    text: ek("thumbnail:deletingThumbnail"),
                    type: "info"
                  }, !1), Hk.b.deleteSchematicThumbnail(yk, Fk).then((() => {
                    mk.current && (hk({
                      text: ek("thumbnail:thumbnailDeleted"),
                      type: "success"
                    }, !0), Gk.current === Fk && lk(null), qk())
                  })).catch((kk => {
                    mk.current && hk({
                      text: kk.errorMessageForUser ? ek(kk.errorMessageForUser, kk.errorMessageTranslationParams) : ek("thumbnail:failedToDeleteThumbnail"),
                      type: "error"
                    }, !0)
                  })))
                }(Fk, kk.id, kk.name),
                children: (0, ik.jsx)(sk.d, {
                  name: "trash-can"
                })
              }), !kk.approved && (0, ik.jsx)("div", {
                className: "ThumbnailUnapprovedIcon",
                children: (0, ik.jsx)(sk.d, {
                  name: "hourglass-clock"
                })
              }), !kk.approved && (0, ik.jsxs)("div", {
                className: "ThumbnailGridItemLabel ThumbnailPendingLabel",
                children: [kk.name, (0, ik.jsx)("br", {}), ek("thumbnail:pendingApproval")]
              })]
            }, Fk))), (0, ik.jsxs)("div", {
              className: Ak()("ThumbnailGridItem ThumbnailUploadTile", {
                ThumbnailUploadTileDisabled: !Vk
              }),
              onClick: () => {
                Vk && function(kk) {
                  let {
                    schematicId: Fk,
                    ownedThumbnailCount: Bk,
                    onThumbnailReady: Rk,
                    onClose: ak
                  } = kk;
                  tk.NotificationProvider.showCustomPopup({
                    body: kk => (0, ik.jsx)(Ck, {
                      schematicId: Fk,
                      ownedThumbnailCount: Bk,
                      onClose: kk,
                      onThumbnailReady: Rk
                    }),
                    middleScreenPopupClassName: "SchematicThumbnailPopup",
                    onClose: ak,
                    unlockPointerKey: "schematicThumbnailUploaderPopup"
                  })
                }({
                  schematicId: Xk.schematicId,
                  ownedThumbnailCount: Wk.length,
                  onThumbnailReady: pk,
                  onClose: Jk
                })
              },
              children: [(0, ik.jsx)(sk.d, {
                name: "plus"
              }), (0, ik.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: ek("thumbnail:uploadThumbnail")
              })]
            })]
          })
        })]
      })
    }

    function xk(kk) {
      let {
        rejectedThumbnails: Fk,
        userContext: Bk,
        isMountedRef: tk,
        onAcknowledged: Xk
      } = kk;
      const {
        t: dk
      } = (0, bk.x)(), [Vk, Jk] = (0, Rk.useState)(!1), [Ak, ek] = (0, Rk.useState)(!1), yk = function(kk) {
        const Fk = new Map;
        for (const Bk of kk) {
          const kk = Bk.rejectionPolicyId,
            Rk = Fk.get(kk);
          Rk ? Rk.push(Bk) : Fk.set(kk, [Bk])
        }
        return Fk
      }(Fk);
      return (0, ik.jsxs)("div", {
        className: "ThumbnailRejectionNotice",
        children: [(0, ik.jsxs)("div", {
          className: "ThumbnailRejectionNoticeTitle",
          children: [(0, ik.jsx)(sk.d, {
            name: "triangle-exclamation"
          }), " ", dk("thumbnail:thumbnailsRejected"), " ", (0, ik.jsx)(sk.d, {
            name: "triangle-exclamation"
          })]
        }), (0, ik.jsx)("div", {
          className: "ThumbnailRejectionNoticeSubtitle",
          children: dk("thumbnail:thumbnailsRejectedDescription")
        }), (0, ik.jsx)("div", {
          className: "ThumbnailRejectionNoticeList",
          children: [...yk.entries()].map((kk => {
            let [Fk, Bk] = kk;
            const Rk = pk[Fk];
            return (0, ik.jsxs)("div", {
              className: "ThumbnailRejectionNoticeGroup",
              children: [(0, ik.jsx)("div", {
                className: "ThumbnailRejectionNoticeItems",
                children: Bk.map((kk => (0, ik.jsxs)("div", {
                  className: "ThumbnailRejectionNoticeItem",
                  children: [(0, ik.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemIcon",
                    children: (0, ik.jsx)(sk.d, {
                      name: "image-slash"
                    })
                  }), (0, ik.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemDetails",
                    children: (0, ik.jsx)("div", {
                      className: "ThumbnailRejectionNoticeItemName",
                      children: kk.name
                    })
                  })]
                }, kk.id)))
              }), (0, ik.jsxs)("div", {
                className: "ThumbnailRejectionNoticeGroupReason",
                children: [dk("thumbnail:rejectionReason"), " ", Rk ? dk(Rk.reason) : Fk]
              }), Rk && (0, ik.jsx)("ul", {
                className: "ThumbnailRejectionNoticeGroupTips",
                children: Rk.tips.map((kk => (0, ik.jsx)("li", {
                  children: dk(kk)
                }, kk)))
              })]
            }, Fk)
          }))
        }), (0, ik.jsxs)("label", {
          className: "ThumbnailRejectionNoticeCheckbox",
          children: [(0, ik.jsx)(Nk.c, {
            checked: Vk,
            onChange: kk => Jk(kk.target.checked),
            disabled: Ak
          }), (0, ik.jsx)("span", {
            children: dk("thumbnail:haveReadRejectionReasons")
          })]
        }), (0, ik.jsx)(ak.o, {
          onClick: async function() {
            ek(!0);
            const kk = await Promise.allSettled(Fk.map((kk => Hk.b.deleteSchematicThumbnail(Bk, kk.id))));
            if (!tk.current) return;
            const Rk = kk.filter((kk => "rejected" === kk.status));
            Rk.length > 0 && console.error("Some rejected thumbnails failed to delete:", Rk), Xk()
          },
          disabled: !Vk || Ak,
          className: "ThumbnailRejectionNoticeAcceptButton",
          children: Ak ? (0, ik.jsx)(wk.b, {}) : dk("general:accept")
        })]
      })
    }

    function jk(kk) {
      let {
        thumbnailId: Fk,
        thumbnailName: Bk,
        onClose: Rk
      } = kk;
      const {
        t: tk
      } = (0, bk.x)();
      return (0, ik.jsxs)("div", {
        className: "ThumbnailDeleteConfirm",
        children: [(0, ik.jsx)("div", {
          className: "ThumbnailDeleteConfirmTitle",
          children: tk("thumbnail:deleteThumbnail")
        }), (0, ik.jsxs)("div", {
          className: "ThumbnailDeleteConfirmImageContainer",
          children: [(0, ik.jsx)("img", {
            className: "ThumbnailDeleteConfirmImage",
            src: `${Zk.clientSideServerUrls.s3Url}/customThumbnails/${Fk}.jpg`,
            alt: "Thumbnail to delete"
          }), (0, ik.jsx)("div", {
            className: "ThumbnailGridItemLabel",
            children: Bk
          })]
        }), (0, ik.jsx)("div", {
          className: "ThumbnailDeleteConfirmSubtitle",
          children: tk("thumbnail:deleteThumbnailConfirmation")
        }), (0, ik.jsxs)("div", {
          className: "ThumbnailDeleteConfirmButtons",
          children: [(0, ik.jsxs)(ak.J, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => Rk(!0),
            children: [(0, ik.jsx)(sk.d, {
              name: "trash-can"
            }), " ", tk("general:delete")]
          }), (0, ik.jsx)(ak.j, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => Rk(!1),
            children: tk("general:cancel")
          })]
        })]
      })
    }
    var lk = Bk(2954),
      nk = Bk(4681),
      Ik = Bk(4686),
      Qk = Bk(4724);

    function kF(kk) {
      let {
        schematicData: Fk,
        setTexturePack: Bk,
        initializeTexturePack: tk,
        publishFormEnabled: ak
      } = kk;
      const {
        t: Xk
      } = (0, bk.x)(), [wk, dk] = (0, Rk.useState)(null), [sk, Vk] = (0, Rk.useState)(null), [Jk, ek] = (0, Rk.useState)(!1), yk = (0, uk.d)(), fk = ak && !Jk, mk = Fk.customTexturePackKey;

      function Wk(kk) {
        var Fk;
        dk(kk.metaData.id), Vk(null !== (Fk = kk.metaData.fromFolderName) && void 0 !== Fk ? Fk : null), (kk.metaData.id !== lk.p.CUSTOM || kk.metaData.fromFolderName) && Bk(kk)
      }
      return (0, Rk.useEffect)((() => {
        mk && (ek(!0), (0, nk.d)(mk).then((kk => {
          var Fk;
          yk.current && (kk ? (dk(kk.metaData.id), Vk(null !== (Fk = kk.metaData.fromFolderName) && void 0 !== Fk ? Fk : null), tk(kk)) : console.error(`No texture pack at ${mk}`))
        })).catch((kk => {
          console.error("Error fetching texture pack: ", kk)
        })).finally((() => {
          ek(!1)
        })))
      }), [mk, tk, yk]), (0, ik.jsxs)("div", {
        className: "BloxdForm TexturePackSection",
        children: [(0, ik.jsx)("div", {
          className: "SectionTitle",
          children: Xk("customTexturePack:customTexturePack")
        }), (0, ik.jsxs)("div", {
          className: "TexturePackList",
          children: [(0, ik.jsx)("div", {
            className: Ak()("TexturePack", {
              Selected: null === wk && !Jk,
              Disabled: !fk
            }),
            onClick: () => {
              fk && (dk(null), Bk(null), Vk(null))
            },
            children: (0, ik.jsx)("div", {
              className: "TexturePackName",
              children: "No Override"
            })
          }), Object.values(lk.p).map((kk => (0, ik.jsx)(Ik.f, {
            id: kk,
            isSelected: kk === wk,
            setSelected: Wk,
            disabled: !fk
          }, kk)))]
        }), wk === lk.p.CUSTOM && (0, ik.jsx)(Qk.d, {
          folderName: sk,
          onTexturePackUpdated: Wk,
          disabled: !fk,
          maxFileSizeMb: 25,
          packOwner: "customGame"
        })]
      })
    }
    var FF = Bk(4735);

    function BF(kk) {
      var Fk;
      let {
        gameCategory: Bk,
        setGameCategory: Rk,
        disabled: tk
      } = kk;
      const Xk = null !== (Fk = (0, ek.db)(Bk)) && void 0 !== Fk ? Fk : "other";
      return (0, ik.jsxs)("div", {
        className: "GameCategoryPicker",
        children: [(0, ik.jsx)(mk.f, {
          label: "worldBuilder:gameCategoryGroup",
          className: "GameCategoryGroup",
          disabled: tk,
          children: (0, ik.jsx)(Wk.c, {
            options: ek.V.map((kk => ({
              value: kk,
              label: ek.R[kk]
            }))),
            value: Xk,
            onChange: kk => {
              kk.value !== Xk && Rk(ek.M[kk.value][0])
            }
          })
        }), (0, ik.jsx)(mk.f, {
          label: "worldBuilder:gameCategory",
          className: "GameCategory",
          disabled: tk,
          children: (0, ik.jsx)("div", {
            className: "GameCategoryOptions",
            children: ek.M[Xk].map((kk => (0, ik.jsx)(ak.O, {
              active: kk === Bk,
              onClick: () => {
                Rk(kk)
              },
              children: (0, ek.cb)(kk)
            }, kk)))
          })
        })]
      })
    }

    function RF(kk) {
      let {
        editor: Fk,
        onClose: Bk
      } = kk;
      const {
        t: Rk
      } = (0, bk.x)(), {
        schematicData: tk,
        updateSchematicData: ak,
        publishFormEnabled: wk,
        formEnabled: dk
      } = Fk;
      return (0, ik.jsxs)(ik.Fragment, {
        children: [(0, ik.jsxs)(Yk, {
          icon: "pen-to-square",
          title: Rk("worldBuilder:basicsSection"),
          disabled: !dk,
          children: [(0, ik.jsx)(Lk, {
            label: Rk("general:name"),
            caption: Rk("worldBuilder:schematicNameTagsHint"),
            children: (0, ik.jsx)(Xk.e, {
              className: "SchematicPageName",
              defaultValue: tk.name,
              onValueChange: kk => ak("name", kk),
              placeholderText: Rk("worldBuilder:schematicNamePlaceholder"),
              maxLength: Vk.rb
            })
          }), (0, ik.jsx)(Lk, {
            label: Rk("general:description"),
            children: (0, ik.jsx)(Xk.e, {
              className: "SchematicPageDescription",
              useTextarea: !0,
              defaultValue: tk.description,
              onValueChange: kk => ak("description", kk),
              placeholderText: Rk("worldBuilder:schematicDescriptionPlaceholder"),
              maxLength: Vk.nb
            })
          }), (0, ik.jsx)(BF, {
            gameCategory: tk.gameCategory,
            setGameCategory: kk => ak("gameCategory", kk),
            disabled: !wk
          }), !0 === tk.gamePublished && (0, ik.jsx)(Kk, {
            schematicData: tk,
            updateSchematicData: ak,
            publishFormEnabled: wk,
            onClose: function() {
              null === Bk || void 0 === Bk || Bk()
            }
          })]
        }), (0, ik.jsx)(Ek, {
          schematicData: tk,
          updateSchematicData: ak,
          publishFormEnabled: wk,
          formEnabled: dk
        }), !0 === tk.gamePublished && (0, ik.jsx)(Yk, {
          icon: "palette",
          title: Rk("worldBuilder:texturePackSection"),
          disabled: !dk,
          children: (0, ik.jsx)(kF, {
            schematicData: tk,
            setTexturePack: Fk.setTexturePack,
            initializeTexturePack: Fk.initializeTexturePack,
            publishFormEnabled: wk
          })
        })]
      })
    }

    function tF(kk) {
      let {
        editor: Fk
      } = kk;
      const {
        t: Bk
      } = (0, bk.x)(), {
        schematicData: Rk,
        formEnabled: tk,
        hasUnsavedChanges: Xk
      } = Fk, Vk = tk && Xk;
      return (0, ik.jsxs)("footer", {
        className: "SchematicPageFooter",
        children: [tk && Xk && (0, ik.jsxs)("div", {
          className: "SchematicPageFooterStatus",
          children: [(0, ik.jsx)("span", {
            className: "SchematicPageFooterStatusDot"
          }), Bk("worldBuilder:unsavedChanges")]
        }), (0, ik.jsx)(dk.d, {
          tooltipInner: (0, ik.jsx)("div", {
            className: "SaveButtonTooltip",
            children: Bk(tk && !Xk ? "worldBuilder:saveChangesNoneDescription" : "worldBuilder:saveChangesDescription")
          }),
          children: (0, ik.jsxs)(ak.g, {
            className: "SaveChangesButton",
            onClick: () => Fk.saveSchematic(Rk.gamePublished),
            disabled: !Vk,
            children: [(0, ik.jsxs)("span", {
              className: tk ? "" : "SaveChangesButtonBodyHidden",
              children: [(0, ik.jsx)(sk.d, {
                name: "wrench"
              }), " ", Bk("worldBuilder:saveChanges")]
            }), !tk && (0, ik.jsx)(wk.b, {})]
          })
        })]
      })
    }

    function aF(kk) {
      let {
        schematic: Fk,
        onSchematicUpdate: Bk,
        onClose: tk,
        inSourceWorld: Xk
      } = kk;
      const {
        t: wk
      } = (0, bk.x)();

      function dk() {
        null === tk || void 0 === tk || tk()
      }
      const sk = (0, FF.c)(Fk, {
        onNavigateAway: dk,
        inSourceWorld: Xk
      });
      return (0, Rk.useEffect)((() => {
        null === Bk || void 0 === Bk || Bk(sk.schematicData)
      }), [sk.schematicData, Bk]), (0, ik.jsxs)("div", {
        className: "SchematicPage SchematicPagePopupVariant",
        children: [(0, ik.jsxs)("div", {
          className: "SchematicPageBody",
          children: [(0, ik.jsx)(ak.c, {
            onClick: dk,
            children: wk("worldBuilder:back")
          }), (0, ik.jsx)(Yk, {
            icon: "rocket-launch",
            title: wk("worldBuilder:actionsSection"),
            disabled: !sk.formEnabled,
            children: (0, ik.jsx)(Sk.e, {
              editor: sk
            })
          }), (0, ik.jsx)(RF, {
            editor: sk,
            onClose: dk
          })]
        }), (0, ik.jsx)(tF, {
          editor: sk
        })]
      })
    }

    function XF(kk) {
      let {
        schematic: Fk,
        onSchematicUpdate: Bk,
        onClose: Rk,
        inSourceWorld: ak
      } = kk;
      tk.NotificationProvider.showCustomPopup({
        body: kk => (0, ik.jsx)(aF, {
          schematic: Fk,
          onSchematicUpdate: Bk,
          onClose: kk,
          inSourceWorld: ak
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: Rk,
        unlockPointerKey: "schematicPagePopup"
      })
    }
  },
  4655: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Vk
    });
    var Rk = Bk(1020),
      tk = Bk.n(Rk),
      ak = Bk(1149),
      Xk = Bk(1028),
      bk = Bk(1389),
      wk = Bk(1312),
      dk = Bk(1288),
      sk = Bk(1069);

    function Vk(kk) {
      let {
        editor: Fk,
        className: Bk
      } = kk;
      const {
        t: Rk
      } = (0, ak.x)(), {
        schematicData: Vk,
        formEnabled: Jk,
        publishFormEnabled: Ak
      } = Fk, ek = !Jk || !Ak;
      return (0, sk.jsxs)("div", {
        className: tk()("PublishButtonContainer", Bk),
        children: [Fk.canEditSourceWorld && (0, sk.jsxs)(bk.g, {
          onClick: Fk.editSourceWorld,
          disabled: ek,
          children: [(0, sk.jsx)(Xk.d, {
            name: "edit"
          }), " ", Rk("worldBuilder:editSourceWorld")]
        }), !Vk.gamePublished && (0, sk.jsx)(wk.d, {
          tooltipInner: (0, sk.jsx)("div", {
            className: "PublishButtonTooltip",
            children: Rk("worldBuilder:publishAsGameDescription")
          }),
          children: (0, sk.jsxs)(bk.o, {
            onClick: () => Fk.saveSchematic(!0),
            disabled: ek,
            children: [(0, sk.jsx)(Xk.d, {
              name: "rocket-launch"
            }), " ", Rk("worldBuilder:publishAsGame"), " ", (0, sk.jsx)(Xk.d, {
              name: "info-circle"
            })]
          })
        }), !0 === Vk.gamePublished && (0, sk.jsxs)(sk.Fragment, {
          children: [(0, sk.jsx)(wk.d, {
            tooltipInner: (0, sk.jsx)("div", {
              className: "PublishButtonTooltip",
              children: Rk("worldBuilder:unpublishAsGameDescription")
            }),
            children: (0, sk.jsxs)(bk.J, {
              onClick: Fk.unpublishSchematic,
              disabled: ek,
              children: [(0, sk.jsx)(Xk.d, {
                name: "rocket-launch"
              }), " ", Rk("worldBuilder:unpublishAsGame"), " ", (0, sk.jsx)(Xk.d, {
                name: "info-circle"
              })]
            })
          }), (0, sk.jsxs)(bk.g, {
            onClick: Fk.playGame,
            disabled: ek,
            children: [(0, sk.jsx)(Xk.d, {
              name: "joystick"
            }), " ", Rk("general:playGame")]
          })]
        }), !Jk && (0, sk.jsx)(dk.b, {
          loaderType: "Secondary"
        })]
      })
    }
  },
  4681: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => tk
    });
    var Rk = Bk(1154);
    async function tk(kk) {
      const Fk = await fetch(`${Rk.clientSideServerUrls.s3Url}/${kk}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === Fk.status || 403 === Fk.status) return null;
      if (!Fk.ok) throw new Error(`Failed to download the texture pack (${Fk.status})`);
      return await Fk.json()
    }
  },
  4735: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => fk
    });
    var Rk = Bk(61),
      tk = Bk(1273),
      ak = Bk(994),
      Xk = Bk(152),
      bk = Bk(1490),
      wk = Bk(22),
      dk = Bk(1847),
      sk = Bk(1441),
      Vk = Bk(4324),
      Jk = Bk(1300),
      Ak = Bk(1096),
      ek = Bk(1459);

    function yk(kk, Fk) {
      return {
        schematicId: kk.schematicId,
        name: kk.name,
        description: kk.description,
        gamePublished: Fk,
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

    function fk(kk) {
      let {
        onNavigateAway: Fk,
        inSourceWorld: Bk = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const {
        userContext: fk
      } = (0, Ak.e)(), mk = (0, ek.useNavigatePreserveSearch)(), [Wk, vk] = (0, Rk.useState)({
        ...kk
      }), [ik, Yk] = (0, Rk.useState)("Enter"), [Lk, Ok] = (0, Rk.useState)(void 0), Ek = (0, Rk.useRef)(yk(kk, kk.gamePublished)), Sk = (0, Rk.useRef)(void 0), Nk = "Enter" === ik, Hk = fk.playerHasRank("developer") || fk.playerHasRank("admin") || "Enter" === ik && !1 !== Wk.schematicContainsSpawnBlock, uk = void 0 !== Lk && Lk !== Sk.current || JSON.stringify(yk(Wk, Wk.gamePublished)) !== JSON.stringify(Ek.current);

      function Mk(kk, Fk) {
        vk((Bk => ({
          ...Bk,
          [kk]: Fk
        })))
      }
      const gk = (0, Rk.useCallback)((kk => {
        Sk.current = kk, Ok(kk)
      }), []);

      function Uk(kk) {
        Yk("Loading");
        const Fk = yk(Wk, kk),
          Bk = Lk !== Sk.current ? Lk : void 0;
        sk.b.updateSchematic(fk, Fk, Bk).then((Bk => {
          let {
            customTexturePackKey: Rk
          } = Bk;
          Yk("Success"), Mk("customTexturePackKey", Rk), Ek.current = Fk, Sk.current = void 0, Ok(void 0), setTimeout((() => {
            Mk("gamePublished", kk), Yk("Enter")
          }), 1e3)
        })).catch((kk => {
          var Fk;
          (console.error("Failed to save schematic:", kk), Yk("Error"), kk instanceof Xk.c && kk.errorMessageForUser) && Jk.NotificationProvider.showAlertPopup({
            title: "worldBuilder:changesNotSaved",
            subtitle: kk.errorMessageForUser,
            textOpts: {
              subtitle: null !== (Fk = kk.errorMessageTranslationParams) && void 0 !== Fk ? Fk : void 0
            },
            confirmText: "general:ok"
          });
          setTimeout((() => {
            Yk("Enter")
          }), 1e3)
        }))
      }
      return {
        schematicData: Wk,
        updateSchematicData: Mk,
        setTexturePack: Ok,
        initializeTexturePack: gk,
        updateState: ik,
        formEnabled: Nk,
        publishFormEnabled: Hk,
        hasUnsavedChanges: uk,
        canEditSourceWorld: !Bk,
        saveSchematic: Uk,
        unpublishSchematic: function() {
          Jk.NotificationProvider.showPromptPopup({
            icon: "rocket-launch",
            title: "worldBuilder:unpublishAsGameConfirmTitle",
            subtitle: "worldBuilder:unpublishAsGameConfirmSubtitle",
            confirmText: "worldBuilder:unpublishAsGame",
            cancelText: "general:cancel",
            unlockPointerKey: "unpublishGamePrompt"
          }).getResult().then((kk => {
            !0 === kk && Uk(!1)
          }))
        },
        editSourceWorld: function() {
          Yk("Loading"), Vk.c.getSourceWorld(Wk.schematicId).then((kk => {
            dk.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, wk.f)("other"), mk((0, tk.b)("classic", kk)), null === Fk || void 0 === Fk || Fk()
          })).catch((kk => {
            console.error("Failed to get source world:", kk), Yk("Error"), setTimeout((() => {
              Yk("Enter")
            }), 1e3)
          }))
        },
        playGame: function() {
          dk.gameBridge.send("leaveGame", {
            reloadPath: "/"
          }), mk((0, bk.y)((0, ak.C)(Wk.schematicId), Wk)), null === Fk || void 0 === Fk || Fk()
        }
      }
    }
  },
  4645: () => {}
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);