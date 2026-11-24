export const id = 105;
export const ids = [105];
export const modules = {
  4931: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => tk,
      i: () => Lk,
      j: () => Zk
    });
    Ik(4936);
    var Xk = Ik(1179),
      Tk = Ik(1055),
      ik = Ik.n(Tk),
      yk = Ik(1333),
      lk = (Ik(58), Ik(4338)),
      ak = Ik(1066),
      qk = Ik(1096);

    function Lk(kk) {
      let {
        children: Fk,
        label: Ik,
        className: Tk,
        circleInfoText: lk,
        disabled: Lk,
        onLabelClick: tk
      } = kk;
      const {
        t: Zk
      } = (0, Xk.y)(), jk = (0, qk.jsxs)("div", {
        className: ik()("Label", {
          ClickableLabel: void 0 !== tk
        }),
        onClick: tk,
        children: [Zk(Ik), lk && (0, qk.jsx)(ak.e, {
          name: "circle-info"
        })]
      });
      return (0, qk.jsxs)("div", {
        className: ik()("LabeledInput", {
          [Tk]: Tk,
          DisabledLabelInput: Lk
        }),
        children: [lk && (0, qk.jsx)(yk.g, {
          tooltipInner: (0, qk.jsx)("div", {
            className: "LabeledInputTooltip",
            children: Zk(lk)
          }),
          children: jk
        }), !lk && jk, Fk]
      })
    }

    function tk(kk) {
      let {
        checked: Fk,
        setChecked: Ik
      } = kk;
      return (0, qk.jsx)("div", {
        className: "OtherInput ClickableOtherInput",
        "data-pad-focusable": !0,
        onClick: kk => {
          Ik(!Fk)
        },
        children: (0, qk.jsx)(lk.d, {
          checked: Fk,
          onChange: kk => {
            Ik(kk.target.checked)
          },
          disabled: !1
        })
      })
    }

    function Zk(kk) {
      let {
        checked: Fk,
        setChecked: Ik,
        disabled: Xk
      } = kk;
      return (0, qk.jsx)("div", {
        className: ik()("SwitchContainer", {
          SwitchContainerDisabled: Xk
        }),
        onClick: () => {
          Xk || Ik(!Fk)
        },
        children: (0, qk.jsx)(lk.d, {
          className: "SwitchCheckbox",
          checked: Fk,
          onChange: kk => {
            Ik(kk.target.checked)
          },
          disabled: !!Xk
        })
      })
    }
  },
  4938: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => qk
    });
    var Xk = Ik(1055),
      Tk = Ik.n(Xk),
      ik = Ik(4612),
      yk = Ik(1179),
      lk = Ik(1096);
    const ak = [...ik.i, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function qk(kk) {
      const {
        disabled: Fk,
        hideWrapper: Ik
      } = kk, {
        t: Xk
      } = (0, yk.y)(), qk = kk.advancedMode ? ak.map((Fk => [Fk, kk.callbacks[Fk]])) : ik.i.map((Fk => [Fk, kk.callbacks[Fk]])), tk = (0, lk.jsx)("div", {
        className: Tk()("PluginsGrid", {
          SectionBody: !Ik
        }),
        children: qk.map((kk => {
          let [Ik, Xk] = kk;
          return (0, lk.jsx)(Lk, {
            plugin: Ik,
            callbacks: Xk,
            disabled: Fk
          }, Ik)
        }))
      });
      return Ik ? tk : (0, lk.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, lk.jsx)("div", {
          className: "SectionTitle",
          children: Xk("worldBuilder:pluginsSection")
        }), tk]
      })
    }

    function Lk(kk) {
      let {
        plugin: Fk,
        callbacks: {
          isEnabled: Ik,
          Av: Xk
        },
        disabled: ik
      } = kk;
      const {
        t: ak
      } = (0, yk.y)(), qk = Ik();
      return (0, lk.jsxs)("div", {
        className: Tk()("PluginCard", {
          PluginCardEnabled: qk,
          PluginCardDisabledForm: ik
        }),
        "data-pad-focusable": !0,
        "aria-disabled": ik || void 0,
        onClick: () => {
          ik || Xk(!qk)
        },
        children: [(0, lk.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, lk.jsx)("img", {
            src: `/textures/games/classic/customGames/${Fk}.png`,
            alt: Fk
          })
        }), (0, lk.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, lk.jsx)("div", {
            className: "PluginCardTitle",
            children: ak(tk[Fk])
          }), (0, lk.jsx)("div", {
            className: "PluginCardDescription",
            children: ak(Zk[Fk])
          })]
        }), (0, lk.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: ak(qk ? "general:on" : "general:off")
        })]
      })
    }
    const tk = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      Zk = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  4929: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      f: () => iF,
      d: () => TF,
      e: () => XF,
      i: () => yF
    });
    var Xk = Ik(58),
      Tk = Ik(1324),
      ik = Ik(1406),
      yk = Ik(1617),
      lk = Ik(1179),
      ak = Ik(1318),
      qk = Ik(1333),
      Lk = Ik(1066),
      tk = Ik(1217),
      Zk = Ik(1055),
      jk = Ik.n(Zk),
      ek = Ik(318),
      wk = Ik(4612),
      Hk = Ik(1231),
      Jk = Ik(4931),
      xk = Ik(3065),
      Pk = Ik(4938),
      Kk = Ik(1096);

    function Qk(kk) {
      let {
        icon: Fk,
        title: Ik,
        disabled: Xk,
        children: Tk
      } = kk;
      return (0, Kk.jsxs)("div", {
        className: jk()("ManageCard", {
          ManageCardDisabled: Xk
        }),
        children: [(0, Kk.jsxs)("div", {
          className: "ManageCardHead",
          children: [(0, Kk.jsx)("div", {
            className: "ManageCardIcon",
            children: (0, Kk.jsx)(Lk.e, {
              name: Fk
            })
          }), (0, Kk.jsx)("div", {
            children: (0, Kk.jsx)("h2", {
              className: "ManageCardTitle",
              children: Ik
            })
          })]
        }), (0, Kk.jsxs)("div", {
          className: "ManageCardBody",
          children: [Tk, Xk && (0, Kk.jsx)("div", {
            className: "ManageCardDisabledOverlay"
          })]
        })]
      })
    }

    function sk(kk) {
      let {
        label: Fk,
        caption: Ik,
        children: Xk
      } = kk;
      return (0, Kk.jsxs)("div", {
        className: "ManageStackedField",
        children: [(0, Kk.jsx)("div", {
          className: "ManageStackedFieldLabel",
          children: Fk
        }), Xk, Ik && (0, Kk.jsx)("div", {
          className: "ManageStackedFieldCaption",
          children: Ik
        })]
      })
    }

    function Vk(kk) {
      let {
        label: Fk,
        caption: Ik,
        disabled: Xk,
        children: Tk
      } = kk;
      return (0, Kk.jsxs)("div", {
        className: jk()("ManageField", {
          ManageFieldDisabled: Xk
        }),
        children: [(0, Kk.jsxs)("div", {
          className: "ManageFieldText",
          children: [(0, Kk.jsx)("div", {
            className: "ManageFieldLabel",
            children: Fk
          }), (0, Kk.jsx)("div", {
            className: "ManageFieldCaption",
            children: Ik
          })]
        }), (0, Kk.jsx)("div", {
          className: "ManageFieldControl",
          children: Tk
        })]
      })
    }

    function zk(kk) {
      var Fk, Ik;
      let {
        schematicData: Xk,
        updateSchematicData: Tk,
        publishFormEnabled: ik,
        formEnabled: yk
      } = kk;
      const {
        t: ak
      } = (0, lk.y)(), qk = !ik, Lk = {
        tpRequests: {
          isEnabled: () => !Xk.disableTpRequests,
          Av: kk => Tk("disableTpRequests", !kk)
        },
        spawnProtection: {
          isEnabled: () => !Xk.disableSpawnProtection,
          Av: kk => Tk("disableSpawnProtection", !kk)
        },
        spawnReset: {
          isEnabled: () => !!Xk.enableSpawnReset,
          Av: kk => Tk("enableSpawnReset", kk)
        },
        smpMarketplace: {
          isEnabled: () => !!Xk.enableSmpMarketplace,
          Av: kk => Tk("enableSmpMarketplace", kk)
        },
        survivalGuns: {
          isEnabled: () => !!Xk.enableSurvivalGuns,
          Av: kk => Tk("enableSurvivalGuns", kk)
        },
        fallDamage: {
          isEnabled: () => !Xk.disableFallDamage,
          Av: kk => Tk("disableFallDamage", !kk)
        },
        dayNight: {
          isEnabled: () => !!Xk.enableDayNight,
          Av: kk => Tk("enableDayNight", kk)
        }
      };
      return (0, Kk.jsxs)(Kk.Fragment, {
        children: [!1 === Xk.schematicContainsSpawnBlock && (0, Kk.jsx)("div", {
          className: "ManageWarningBanner",
          children: ak("worldBuilder:mustContainSpawnBlock")
        }), (0, Kk.jsxs)("div", {
          className: "ManageSettingsGrid",
          children: [(0, Kk.jsxs)(Qk, {
            icon: "globe",
            title: ak("worldBuilder:worldRulesSection"),
            disabled: !yk,
            children: [(0, Kk.jsx)(Vk, {
              label: ak("classic:defaultGamemode"),
              caption: ak("classic:defaultGamemodeDescription"),
              disabled: qk,
              children: (0, Kk.jsx)(xk.e, {
                controlClassName: "ManageDropdown",
                options: wk.x.map((kk => ({
                  value: kk,
                  label: ek.t[kk]
                }))),
                value: Xk.defaultGamemode,
                onChange: kk => Tk("defaultGamemode", kk.value)
              })
            }), (0, Kk.jsx)(Vk, {
              label: ak("classic:voidDeathHeight"),
              caption: ak("classic:voidDeathHeightDescription"),
              disabled: qk,
              children: (0, Kk.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, Kk.jsx)("input", {
                  type: "number",
                  max: Hk.K,
                  value: null !== (Fk = Xk.voidDeathHeight) && void 0 !== Fk ? Fk : "",
                  onChange: kk => {
                    const Fk = parseInt(kk.target.value);
                    Tk("voidDeathHeight", Fk)
                  }
                }), (0, Kk.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: ak("worldBuilder:blocksUnit")
                })]
              })
            }), (0, Kk.jsx)(Vk, {
              label: ak("classic:worldBorder"),
              caption: ak("classic:worldBorderDescription"),
              disabled: qk,
              children: (0, Kk.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, Kk.jsx)("input", {
                  type: "number",
                  min: Hk.Q,
                  max: Hk.L,
                  placeholder: ak("worldBuilder:noWorldBorderLimit"),
                  value: null !== (Ik = Xk.worldBorder) && void 0 !== Ik ? Ik : "",
                  onChange: kk => {
                    const Fk = parseInt(kk.target.value);
                    Tk("worldBorder", isNaN(Fk) ? null : Fk)
                  }
                }), (0, Kk.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: ak("worldBuilder:blocksUnit")
                })]
              })
            }), (0, Kk.jsx)(Vk, {
              label: ak("classic:disableMobs"),
              caption: ak("classic:disableMobsDescription"),
              disabled: qk,
              children: (0, Kk.jsx)(Jk.j, {
                checked: Xk.disableMobs,
                setChecked: kk => Tk("disableMobs", kk),
                disabled: qk
              })
            })]
          }), (0, Kk.jsxs)(Qk, {
            icon: "user-group",
            title: ak("worldBuilder:playerAndLobbySection"),
            disabled: !yk,
            children: [(0, Kk.jsx)(Vk, {
              label: ak("classic:disableKeepInventory"),
              caption: ak("classic:disableKeepInventoryDescription"),
              disabled: qk,
              children: (0, Kk.jsx)(Jk.j, {
                checked: Xk.disableKeepInventory,
                setChecked: kk => Tk("disableKeepInventory", kk),
                disabled: qk
              })
            }), (0, Kk.jsx)(Vk, {
              label: ak("classic:persistInventory"),
              caption: ak("classic:persistInventoryDescription"),
              disabled: qk,
              children: (0, Kk.jsx)(xk.e, {
                controlClassName: "ManageDropdown",
                options: wk.j.map((kk => ({
                  value: kk,
                  label: ek.l[kk]
                }))),
                value: Xk.persistInventory,
                onChange: kk => Tk("persistInventory", kk.value)
              })
            }), (0, Kk.jsx)(Vk, {
              label: ak("classic:persistWorld"),
              caption: ak("classic:persistWorldDescription"),
              disabled: qk,
              children: (0, Kk.jsx)(Jk.j, {
                checked: Xk.persistWorld,
                setChecked: kk => Tk("persistWorld", kk),
                disabled: qk
              })
            }), (0, Kk.jsx)(Vk, {
              label: ak("classic:disableLobbySpawn"),
              caption: ak("classic:disableLobbySpawnDescription"),
              disabled: qk,
              children: (0, Kk.jsx)(Jk.j, {
                checked: Xk.disableLobbySpawn,
                setChecked: kk => Tk("disableLobbySpawn", kk),
                disabled: qk
              })
            }), (0, Kk.jsx)(Vk, {
              label: ak("classic:hideLobbyCode"),
              caption: ak("classic:hideLobbyCodeDescription"),
              disabled: qk,
              children: (0, Kk.jsx)(Jk.j, {
                checked: Xk.hideLobbyCode,
                setChecked: kk => Tk("hideLobbyCode", kk),
                disabled: qk
              })
            })]
          })]
        }), (0, Kk.jsx)(Qk, {
          icon: "layer-group",
          title: ak("worldBuilder:pluginsSection"),
          disabled: !yk,
          children: (0, Kk.jsx)(Pk.e, {
            callbacks: Lk,
            disabled: qk,
            advancedMode: !0,
            hideWrapper: !0
          })
        })]
      })
    }
    var Sk = Ik(4942),
      vk = Ik(4338),
      Ek = Ik(1453),
      Ok = Ik(3428),
      nk = Ik(1118),
      Gk = Ik(4911),
      pk = Ik(4944),
      uk = Ik(1415);
    const bk = 50,
      Rk = .3;
    async function Uk(kk) {
      const Fk = await
      function(kk) {
        return new Promise(((Fk, Ik) => {
          const Xk = new FileReader;
          Xk.onload = () => Fk(Xk.result), Xk.onerror = Ik, Xk.readAsDataURL(kk)
        }))
      }(kk), Ik = await
      function(kk) {
        return new Promise(((Fk, Ik) => {
          const Xk = new Image;
          Xk.onload = () => Fk(Xk), Xk.onerror = () => Ik(new Error("Failed to load image")), Xk.src = kk
        }))
      }(Fk);
      if (Ik.naturalHeight > Ik.naturalWidth) throw new Ck;
      const Xk = 1024 * bk,
        {
          dataUrl: Tk,
          finalQuality: ik
        } = function(kk, Fk) {
          const Ik = document.createElement("canvas");
          Ik.width = kk.naturalWidth, Ik.height = kk.naturalHeight, Ik.getContext("2d").drawImage(kk, 0, 0);
          let Xk = .92,
            Tk = Ik.toDataURL("image/jpeg", Xk);
          for (; .75 * Tk.length > Fk && Xk > .05;) Xk -= .05, Tk = Ik.toDataURL("image/jpeg", Xk);
          return {
            dataUrl: Tk,
            finalQuality: Xk
          }
        }(Ik, Xk);
      if (Math.ceil(.75 * Tk.length) > Xk) throw new Nk;
      return {
        base64Jpg: Tk,
        heavilyCompressed: ik < Rk
      }
    }
    class Ck extends Error {}
    class Nk extends Error {}
    var ck = function(kk) {
      return kk[kk.NOT_LOGGED_IN = 0] = "NOT_LOGGED_IN", kk[kk.THUMBNAIL_LIMIT_REACHED = 1] = "THUMBNAIL_LIMIT_REACHED", kk
    }(ck || {});

    function Wk(kk) {
      var Fk;
      let {
        schematicId: Ik,
        hasReadUploadPolicy: Tk,
        onPolicyValidationError: ak,
        onThumbnailReady: qk
      } = kk;
      const {
        t: Zk
      } = (0, lk.y)(), [ek, wk] = (0, Xk.useState)(null), [Hk, Jk] = (0, Xk.useState)(""), [xk, Pk] = (0, Xk.useState)(""), [Qk, sk] = (0, Xk.useState)(!0), [Vk, zk] = (0, Xk.useState)(!1), Sk = (0, Xk.useRef)(!1), [vk, Ek] = (0, Xk.useState)(null), [Ok, nk] = (0, Xk.useState)(!1), [Gk, uk] = (0, Xk.useState)(!1), bk = (0, Xk.useRef)(0), {
        getRootProps: Rk,
        getInputProps: ck,
        isDragActive: Wk
      } = (0, pk.c)({
        accept: {
          "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp"]
        },
        multiple: !1,
        onDrop: async kk => {
          if (0 === kk.length) return;
          const Fk = kk[0],
            Ik = ++bk.current;
          Ek(null), nk(!1), wk(null), Jk(Fk.name);
          try {
            const kk = await Uk(Fk);
            if (Ik !== bk.current) return;
            wk(kk), nk(kk.heavilyCompressed)
          } catch (Xk) {
            if (Ik !== bk.current) return;
            Ek(Zk(Xk instanceof Ck ? "thumbnail:portraitImagesNotAllowed" : Xk instanceof Nk ? "thumbnail:couldNotCompressImage" : "thumbnail:failedToUploadImage"))
          }
        },
        useFsAccessApi: !1
      }), fk = Hk.length <= 30 ? Hk : `${Hk.slice(0,27)}...`, Bk = null !== (Fk = null === ek || void 0 === ek ? void 0 : ek.base64Jpg) && void 0 !== Fk ? Fk : null, dk = xk.trim(), Yk = dk.length >= tk.m && dk.length <= tk.j, Ak = Gk && !ek && !vk, gk = Gk && !Yk;
      return (0, Kk.jsxs)("div", {
        className: "ThumbnailUploadContainer",
        children: [(0, Kk.jsxs)("div", {
          ...Rk({
            className: jk()("ThumbnailUploadDropzone", {
              ActiveDrag: Wk,
              ValidationError: Ak
            })
          }),
          children: [(0, Kk.jsx)("input", {
            ...ck()
          }), !Wk && Bk ? (0, Kk.jsxs)(Kk.Fragment, {
            children: [(0, Kk.jsxs)("div", {
              className: "ThumbnailAspectPreviews",
              children: [(0, Kk.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, Kk.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "1:1"
                }), (0, Kk.jsx)("div", {
                  className: "ThumbnailAspectFrame Square",
                  children: (0, Kk.jsx)("img", {
                    src: Bk,
                    alt: "1:1 preview"
                  })
                })]
              }), (0, Kk.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, Kk.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "16:9"
                }), (0, Kk.jsx)("div", {
                  className: "ThumbnailAspectFrame Wide",
                  children: (0, Kk.jsx)("img", {
                    src: Bk,
                    alt: "16:9 preview"
                  })
                })]
              })]
            }), (0, Kk.jsxs)("div", {
              children: [(0, Kk.jsx)("div", {
                className: "ThumbnailUploadInstructions Active",
                children: fk
              }), (0, Kk.jsx)("div", {
                className: "ThumbnailUploadInstructions Preview",
                children: Zk("thumbnail:preview")
              })]
            })]
          }) : (0, Kk.jsxs)(Kk.Fragment, {
            children: [(0, Kk.jsx)("div", {
              className: "ThumbnailUploadIcon",
              children: (0, Kk.jsx)(Lk.e, {
                name: "image"
              })
            }), (0, Kk.jsx)("div", {
              className: "ThumbnailUploadInstructions",
              children: Zk("thumbnail:dragImageHere")
            })]
          })]
        }), Ak && (0, Kk.jsx)("div", {
          className: "ThumbnailUploadError",
          children: Zk("thumbnail:imageRequired")
        }), (0, Kk.jsx)(yk.c, {
          className: jk()("ThumbnailUploadNameInput", {
            ValidationError: gk
          }),
          placeholderText: Zk("thumbnail:thumbnailName"),
          defaultValue: xk,
          onValueChange: kk => {
            Pk(kk)
          },
          maxLength: tk.j
        }), gk && (0, Kk.jsx)("div", {
          className: "ThumbnailUploadError",
          children: Zk("thumbnail:nameRequired", {
            min: tk.m,
            max: tk.j
          })
        }), (0, Kk.jsxs)("label", {
          className: "ThumbnailUploadCheckbox",
          children: [(0, Kk.jsx)("input", {
            type: "checkbox",
            checked: Qk,
            onChange: kk => {
              sk(kk.target.checked)
            }
          }), Zk("thumbnail:setAsThumbnailOnceApproved")]
        }), Ok && (0, Kk.jsx)("div", {
          className: "ThumbnailUploadWarning",
          children: Zk("thumbnail:heavyCompressionWarning")
        }), vk && (0, Kk.jsx)("div", {
          className: "ThumbnailUploadError",
          children: vk
        }), (0, Kk.jsx)(ik.m, {
          disabled: Vk,
          className: "ThumbnailUploadButton",
          onClick: async () => {
            if (uk(!0), !Sk.current && ek && Yk && Tk) {
              Sk.current = !0, zk(!0), Ek(null);
              try {
                await qk(ek.base64Jpg, dk, Qk ? Ik : null)
              } catch (kk) {
                Ek(kk.errorMessageForUser ? Zk(kk.errorMessageForUser, kk.errorMessageTranslationParams) : Zk("thumbnail:failedToUploadImage"))
              } finally {
                Sk.current = !1, zk(!1)
              }
            } else Tk || ak()
          },
          children: Zk(Vk ? "thumbnail:processing" : "thumbnail:uploadThumbnail")
        })]
      })
    }
    const fk = 2e3;

    function Bk(kk) {
      let {
        schematicId: Fk,
        ownedThumbnailCount: Ik,
        onClose: Tk,
        onThumbnailReady: ik
      } = kk;
      const {
        t: yk
      } = (0, lk.y)(), {
        userContext: ak
      } = (0, nk.d)(), [qk, Zk] = (0, Xk.useState)(!1), [ek, wk] = (0, Xk.useState)(!1), [Hk, Jk] = (0, Xk.useState)(!1), xk = (0, Xk.useRef)();
      (0, Xk.useEffect)((() => () => {
        clearTimeout(xk.current)
      }), []);
      const Pk = function(kk, Fk) {
        const Ik = [];
        return kk.isLoggedIn() || Ik.push(ck.NOT_LOGGED_IN), Fk >= tk.U && Ik.push(ck.THUMBNAIL_LIMIT_REACHED), Ik
      }(ak, Ik);
      if (Pk.length > 0) {
        const kk = {
          [ck.NOT_LOGGED_IN]: {
            key: "thumbnail:mustBeLoggedInToUpload"
          },
          [ck.THUMBNAIL_LIMIT_REACHED]: {
            key: "thumbnail:thumbnailLimitReachedPleaseDelete",
            params: {
              max: tk.U
            }
          }
        };
        return (0, Kk.jsxs)("div", {
          className: "ThumbnailUploaderInner",
          children: [(0, Kk.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: yk("thumbnail:cannotUploadThumbnail")
          }), Pk.map(((Fk, Ik) => {
            const Xk = kk[Fk];
            return (0, Kk.jsxs)("div", {
              className: "CannotUploadThumbnailItem",
              children: [(0, Kk.jsx)(Lk.e, {
                name: "triangle-exclamation"
              }), (0, Kk.jsx)("span", {
                children: yk(Xk.key, Xk.params)
              })]
            }, Ik)
          }))]
        })
      }
      return (0, Kk.jsxs)("div", {
        className: jk()("ThumbnailUploaderInner", {
          ThumbnailUploaderSuccess: qk
        }),
        children: [qk && (0, Kk.jsxs)("div", {
          className: "ThumbnailUploadSuccessOverlay",
          children: [(0, Kk.jsxs)("div", {
            className: "ThumbnailUploadSuccessIcon FullyFancyText AnimFadeInScaleUp",
            children: [(0, Kk.jsx)(Lk.e, {
              name: "check"
            }), (0, Kk.jsx)(uk.d, {})]
          }), (0, Kk.jsx)("div", {
            className: "ThumbnailUploadSuccessText AnimFadeInScaleUp",
            children: yk("thumbnail:thumbnailUploaded")
          })]
        }), (0, Kk.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: yk("thumbnail:uploadThumbnail")
        }), (0, Kk.jsxs)("div", {
          className: "ThumbnailUploaderBody",
          children: [(0, Kk.jsxs)("div", {
            className: "ThumbnailUploaderLeft",
            children: [(0, Kk.jsx)("h3", {
              className: "SchematicPopupSubtitle",
              children: yk("thumbnail:chooseImage", {
                maxSizeKb: bk
              })
            }), (0, Kk.jsx)(Wk, {
              schematicId: Fk,
              hasReadUploadPolicy: ek,
              onPolicyValidationError: () => {
                Jk(!0)
              },
              onThumbnailReady: async (kk, Fk, Ik) => {
                await ik(kk, Fk, Ik), Zk(!0), xk.current = setTimeout(Tk, fk)
              }
            })]
          }), (0, Kk.jsxs)("div", {
            className: "ThumbnailUploadPolicy",
            children: [(0, Kk.jsx)("h3", {
              className: "ThumbnailUploadPolicyTitle",
              children: yk("thumbnail:uploadPolicy")
            }), (0, Kk.jsxs)("ul", {
              className: "ThumbnailUploadPolicyList",
              children: [(0, Kk.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, Kk.jsx)(Lk.e, {
                  name: "check"
                }), (0, Kk.jsx)("span", {
                  children: yk("thumbnail:policyFollowGuidelines")
                })]
              }), (0, Kk.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, Kk.jsx)(Lk.e, {
                  name: "check"
                }), (0, Kk.jsx)("span", {
                  children: yk("thumbnail:policyInGameAssets")
                })]
              }), (0, Kk.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, Kk.jsx)(Lk.e, {
                  name: "check"
                }), (0, Kk.jsx)("span", {
                  children: yk("thumbnail:policyLimitText")
                })]
              }), (0, Kk.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, Kk.jsx)(Lk.e, {
                  name: "x"
                }), (0, Kk.jsx)("span", {
                  children: yk("thumbnail:policyCopyrightContent")
                })]
              }), (0, Kk.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, Kk.jsx)(Lk.e, {
                  name: "x"
                }), (0, Kk.jsx)("span", {
                  children: yk("thumbnail:policyOutOfGameAssets")
                })]
              }), (0, Kk.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, Kk.jsx)(Lk.e, {
                  name: "x"
                }), (0, Kk.jsx)("span", {
                  children: yk("thumbnail:policyBloxdTags")
                })]
              }), (0, Kk.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, Kk.jsx)(Lk.e, {
                  name: "x"
                }), (0, Kk.jsx)("span", {
                  children: yk("thumbnail:policyMustReflectGame")
                })]
              })]
            }), (0, Kk.jsxs)("label", {
              className: jk()("ThumbnailUploadCheckbox Policy", {
                ValidationError: Hk && !ek
              }),
              children: [(0, Kk.jsx)("input", {
                type: "checkbox",
                checked: ek,
                onChange: kk => {
                  wk(kk.target.checked)
                }
              }), yk("thumbnail:agreeToUploadPolicy")]
            }), Hk && !ek && (0, Kk.jsx)("div", {
              className: "ThumbnailPolicyError",
              children: yk("thumbnail:policyRequired")
            })]
          })]
        })]
      })
    }
    var dk = Ik(1194);
    const Yk = {
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

    function Ak(kk) {
      var Fk, Ik;
      let {
        schematicData: yk,
        updateSchematicData: qk,
        publishFormEnabled: tk,
        onClose: Zk
      } = kk;
      const {
        t: ek
      } = (0, lk.y)(), {
        userContext: wk,
        isUserContextUpdating: Hk
      } = (0, nk.d)(), Jk = (0, Ok.d)(), [xk, Pk] = (0, Xk.useState)([]), [Qk, sk] = (0, Xk.useState)([]), [Vk, zk] = (0, Xk.useState)(!0), [Sk, vk] = (0, Xk.useState)(null !== (Fk = yk.customThumbnailId) && void 0 !== Fk ? Fk : null), [pk, uk] = (0, Xk.useState)(null), bk = (0, Xk.useRef)(null !== (Ik = yk.customThumbnailId) && void 0 !== Ik ? Ik : null), Rk = (0, Xk.useRef)(0), Uk = (0, Xk.useRef)(null), Ck = (0, Xk.useRef)(null), Nk = (0, Xk.useRef)(null), ck = (0, Xk.useRef)(!1);

      function Wk(kk, Fk) {
        Nk.current && (clearTimeout(Nk.current), Nk.current = null), uk(kk), null !== kk && Fk && (Nk.current = setTimeout((() => {
          uk(null), Nk.current = null
        }), 5e3))
      }(0, Xk.useEffect)((() => () => {
        clearTimeout(Ck.current), clearTimeout(Nk.current)
      }), []);
      const fk = (0, Xk.useCallback)((() => {
        zk(!0), Ek.e.getOwnedThumbnails(wk).then((kk => {
          const Fk = [],
            Ik = [];
          for (const Xk of kk.thumbnails) Xk.rejectionPolicyId ? Fk.push(Xk) : Ik.push(Xk);
          Fk.sort(((kk, Fk) => kk.lastUpdatedAt - Fk.lastUpdatedAt)), Ik.sort(((kk, Fk) => {
            const Ik = kk.approved ? 1 : 0,
              Xk = (Fk.approved ? 1 : 0) - Ik;
            return 0 !== Xk ? Xk : Fk.lastUpdatedAt - kk.lastUpdatedAt
          })), sk(Fk), Pk(Ik)
        })).catch((kk => {
          console.error("Failed to fetch thumbnails:", kk)
        })).finally((() => {
          zk(!1)
        }))
      }), [wk]);
      async function Yk(kk, Fk, Ik) {
        return Ek.e.uploadSchematicThumbnail(wk, kk, Fk, Ik).then((() => {
          Wk({
            text: ek("thumbnail:uploadedAwaitingModeration"),
            type: "success"
          }, !0), fk()
        }))
      }

      function Ak() {
        Rk.current = Date.now(), Ck.current = null;
        const kk = Uk.current;
        Uk.current = null, Wk({
          text: ek("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), Ek.e.setSchematicThumbnail(wk, yk.schematicId, kk).then((() => {
          Jk.current && (Wk({
            text: ek("thumbnail:thumbnailUpdated"),
            type: "success"
          }, !0), bk.current = kk, qk("customThumbnailId", kk), qk("customThumbnailBlurhash", void 0), qk("customThumbnailVariants", void 0))
        })).catch((kk => {
          Jk.current && (Wk({
            text: kk.errorMessageForUser ? ek(kk.errorMessageForUser, kk.errorMessageTranslationParams) : ek("thumbnail:failedToSetThumbnail"),
            type: "error"
          }, !0), vk(bk.current))
        }))
      }

      function hk(kk) {
        vk(kk), Uk.current = kk;
        const Fk = Date.now() - Rk.current;
        Fk >= 1e3 ? Ak() : (Wk({
          text: ek("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), Ck.current || (Ck.current = setTimeout((() => {
          Ak()
        }), 1e3 - Fk)))
      }
      return (0, Xk.useEffect)((() => {
        !1 === Hk && fk()
      }), [Hk, fk]), Qk.length > 0 ? (0, Kk.jsx)(gk, {
        rejectedThumbnails: Qk,
        userContext: wk,
        isMountedRef: Jk,
        onAcknowledged: fk
      }) : (0, Kk.jsxs)("div", {
        className: "BloxdForm ThumbnailSection",
        children: [(0, Kk.jsxs)("div", {
          className: "SectionTitle",
          children: [ek("thumbnail:gameThumbnail"), pk && (0, Kk.jsx)("span", {
            className: jk()("ThumbnailActionMsg", `ThumbnailActionMsg--${pk.type}`),
            children: pk.text
          })]
        }), (0, Kk.jsx)("div", {
          className: "SectionBody",
          children: (0, Kk.jsxs)("div", {
            className: "ThumbnailGrid",
            children: [(0, Kk.jsxs)("div", {
              className: jk()("ThumbnailGridItem ThumbnailGridItemDefault", {
                ThumbnailGridItemSelected: null === Sk
              }),
              onClick: () => hk(null),
              children: [(0, Kk.jsx)(Gk.b, {
                game: {
                  schematicId: yk.schematicId,
                  imageBlurhash: yk.imageBlurhash
                }
              }), (0, Kk.jsx)("div", {
                className: "ThumbnailGridItemLabel ThumbnailDefaultLabel",
                children: ek("general:default")
              })]
            }), Vk && (0, Kk.jsx)(ak.c, {}), xk.map(((kk, Fk) => (0, Kk.jsxs)("div", {
              className: jk()("ThumbnailGridItem", {
                ThumbnailGridItemSelected: Sk === kk.id,
                ThumbnailGridItemPending: !kk.approved
              }),
              onClick: () => {
                kk.approved && hk(kk.id)
              },
              children: [kk.approved && (0, Kk.jsx)("img", {
                src: `${dk.clientSideServerUrls.s3Url}/customThumbnails/${kk.id}.jpg`,
                alt: "Thumbnail"
              }), kk.approved && (0, Kk.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: kk.name
              }), kk.id && (0, Kk.jsx)(ik.G, {
                className: "ThumbnailDeleteButton",
                onClick: Fk => async function(kk, Fk, Ik) {
                  kk.stopPropagation();
                  const Xk = await Tk.NotificationProvider.showCustomPopup({
                      body: kk => (0, Kk.jsx)(mk, {
                        thumbnailId: Fk,
                        thumbnailName: Ik,
                        onClose: Fk => {
                          Fk && (ck.current = !0), kk()
                        }
                      }),
                      middleScreenPopupClassName: "ThumbnailDeleteConfirmPopup",
                      onClose: Zk
                    }).getResult(),
                    ik = ck.current;
                  ck.current = !1, ik && !0 === Xk && (Jk.current && Wk({
                    text: ek("thumbnail:deletingThumbnail"),
                    type: "info"
                  }, !1), Ek.e.deleteSchematicThumbnail(wk, Fk).then((() => {
                    Jk.current && (Wk({
                      text: ek("thumbnail:thumbnailDeleted"),
                      type: "success"
                    }, !0), bk.current === Fk && hk(null), fk())
                  })).catch((kk => {
                    Jk.current && Wk({
                      text: kk.errorMessageForUser ? ek(kk.errorMessageForUser, kk.errorMessageTranslationParams) : ek("thumbnail:failedToDeleteThumbnail"),
                      type: "error"
                    }, !0)
                  })))
                }(Fk, kk.id, kk.name),
                children: (0, Kk.jsx)(Lk.e, {
                  name: "trash-can"
                })
              }), !kk.approved && (0, Kk.jsx)("div", {
                className: "ThumbnailUnapprovedIcon",
                children: (0, Kk.jsx)(Lk.e, {
                  name: "hourglass-clock"
                })
              }), !kk.approved && (0, Kk.jsxs)("div", {
                className: "ThumbnailGridItemLabel ThumbnailPendingLabel",
                children: [kk.name, (0, Kk.jsx)("br", {}), ek("thumbnail:pendingApproval")]
              })]
            }, Fk))), (0, Kk.jsxs)("div", {
              className: jk()("ThumbnailGridItem ThumbnailUploadTile", {
                ThumbnailUploadTileDisabled: !tk
              }),
              onClick: () => {
                tk && function(kk) {
                  let {
                    schematicId: Fk,
                    ownedThumbnailCount: Ik,
                    onThumbnailReady: Xk,
                    onClose: ik
                  } = kk;
                  Tk.NotificationProvider.showCustomPopup({
                    body: kk => (0, Kk.jsx)(Bk, {
                      schematicId: Fk,
                      ownedThumbnailCount: Ik,
                      onClose: kk,
                      onThumbnailReady: Xk
                    }),
                    middleScreenPopupClassName: "SchematicThumbnailPopup",
                    onClose: ik,
                    unlockPointerKey: "schematicThumbnailUploaderPopup"
                  })
                }({
                  schematicId: yk.schematicId,
                  ownedThumbnailCount: xk.length,
                  onThumbnailReady: Yk,
                  onClose: Zk
                })
              },
              children: [(0, Kk.jsx)(Lk.e, {
                name: "plus"
              }), (0, Kk.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: ek("thumbnail:uploadThumbnail")
              })]
            })]
          })
        })]
      })
    }

    function gk(kk) {
      let {
        rejectedThumbnails: Fk,
        userContext: Ik,
        isMountedRef: Tk,
        onAcknowledged: yk
      } = kk;
      const {
        t: qk
      } = (0, lk.y)(), [tk, Zk] = (0, Xk.useState)(!1), [jk, ek] = (0, Xk.useState)(!1), wk = function(kk) {
        const Fk = new Map;
        for (const Ik of kk) {
          const kk = Ik.rejectionPolicyId,
            Xk = Fk.get(kk);
          Xk ? Xk.push(Ik) : Fk.set(kk, [Ik])
        }
        return Fk
      }(Fk);
      return (0, Kk.jsxs)("div", {
        className: "ThumbnailRejectionNotice",
        children: [(0, Kk.jsxs)("div", {
          className: "ThumbnailRejectionNoticeTitle",
          children: [(0, Kk.jsx)(Lk.e, {
            name: "triangle-exclamation"
          }), " ", qk("thumbnail:thumbnailsRejected"), " ", (0, Kk.jsx)(Lk.e, {
            name: "triangle-exclamation"
          })]
        }), (0, Kk.jsx)("div", {
          className: "ThumbnailRejectionNoticeSubtitle",
          children: qk("thumbnail:thumbnailsRejectedDescription")
        }), (0, Kk.jsx)("div", {
          className: "ThumbnailRejectionNoticeList",
          children: [...wk.entries()].map((kk => {
            let [Fk, Ik] = kk;
            const Xk = Yk[Fk];
            return (0, Kk.jsxs)("div", {
              className: "ThumbnailRejectionNoticeGroup",
              children: [(0, Kk.jsx)("div", {
                className: "ThumbnailRejectionNoticeItems",
                children: Ik.map((kk => (0, Kk.jsxs)("div", {
                  className: "ThumbnailRejectionNoticeItem",
                  children: [(0, Kk.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemIcon",
                    children: (0, Kk.jsx)(Lk.e, {
                      name: "image-slash"
                    })
                  }), (0, Kk.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemDetails",
                    children: (0, Kk.jsx)("div", {
                      className: "ThumbnailRejectionNoticeItemName",
                      children: kk.name
                    })
                  })]
                }, kk.id)))
              }), (0, Kk.jsxs)("div", {
                className: "ThumbnailRejectionNoticeGroupReason",
                children: [qk("thumbnail:rejectionReason"), " ", Xk ? qk(Xk.reason) : Fk]
              }), Xk && (0, Kk.jsx)("ul", {
                className: "ThumbnailRejectionNoticeGroupTips",
                children: Xk.tips.map((kk => (0, Kk.jsx)("li", {
                  children: qk(kk)
                }, kk)))
              })]
            }, Fk)
          }))
        }), (0, Kk.jsxs)("label", {
          className: "ThumbnailRejectionNoticeCheckbox",
          children: [(0, Kk.jsx)(vk.d, {
            checked: tk,
            onChange: kk => Zk(kk.target.checked),
            disabled: jk
          }), (0, Kk.jsx)("span", {
            children: qk("thumbnail:haveReadRejectionReasons")
          })]
        }), (0, Kk.jsx)(ik.m, {
          onClick: async function() {
            ek(!0);
            const kk = await Promise.allSettled(Fk.map((kk => Ek.e.deleteSchematicThumbnail(Ik, kk.id))));
            if (!Tk.current) return;
            const Xk = kk.filter((kk => "rejected" === kk.status));
            Xk.length > 0 && console.error("Some rejected thumbnails failed to delete:", Xk), yk()
          },
          disabled: !tk || jk,
          className: "ThumbnailRejectionNoticeAcceptButton",
          children: jk ? (0, Kk.jsx)(ak.c, {}) : qk("general:accept")
        })]
      })
    }

    function mk(kk) {
      let {
        thumbnailId: Fk,
        thumbnailName: Ik,
        onClose: Xk
      } = kk;
      const {
        t: Tk
      } = (0, lk.y)();
      return (0, Kk.jsxs)("div", {
        className: "ThumbnailDeleteConfirm",
        children: [(0, Kk.jsx)("div", {
          className: "ThumbnailDeleteConfirmTitle",
          children: Tk("thumbnail:deleteThumbnail")
        }), (0, Kk.jsxs)("div", {
          className: "ThumbnailDeleteConfirmImageContainer",
          children: [(0, Kk.jsx)("img", {
            className: "ThumbnailDeleteConfirmImage",
            src: `${dk.clientSideServerUrls.s3Url}/customThumbnails/${Fk}.jpg`,
            alt: "Thumbnail to delete"
          }), (0, Kk.jsx)("div", {
            className: "ThumbnailGridItemLabel",
            children: Ik
          })]
        }), (0, Kk.jsx)("div", {
          className: "ThumbnailDeleteConfirmSubtitle",
          children: Tk("thumbnail:deleteThumbnailConfirmation")
        }), (0, Kk.jsxs)("div", {
          className: "ThumbnailDeleteConfirmButtons",
          children: [(0, Kk.jsxs)(ik.G, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => Xk(!0),
            children: [(0, Kk.jsx)(Lk.e, {
              name: "trash-can"
            }), " ", Tk("general:delete")]
          }), (0, Kk.jsx)(ik.g, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => Xk(!1),
            children: Tk("general:cancel")
          })]
        })]
      })
    }
    var hk = Ik(2071),
      rk = Ik(4976),
      Dk = Ik(4978),
      Mk = Ik(5030);

    function kF(kk) {
      let {
        schematicData: Fk,
        setTexturePack: Ik,
        initializeTexturePack: Tk,
        publishFormEnabled: ik
      } = kk;
      const {
        t: yk
      } = (0, lk.y)(), [ak, qk] = (0, Xk.useState)(null), [Lk, tk] = (0, Xk.useState)(null), [Zk, ek] = (0, Xk.useState)(!1), wk = (0, Ok.d)(), Hk = ik && !Zk, Jk = Fk.customTexturePackKey;

      function xk(kk) {
        var Fk;
        qk(kk.metaData.id), tk(null !== (Fk = kk.metaData.fromFolderName) && void 0 !== Fk ? Fk : null), (kk.metaData.id !== hk.l.CUSTOM || kk.metaData.fromFolderName) && Ik(kk)
      }
      return (0, Xk.useEffect)((() => {
        Jk && (ek(!0), (0, rk.c)(Jk).then((kk => {
          var Fk;
          wk.current && (kk ? (qk(kk.metaData.id), tk(null !== (Fk = kk.metaData.fromFolderName) && void 0 !== Fk ? Fk : null), Tk(kk)) : console.error(`No texture pack at ${Jk}`))
        })).catch((kk => {
          console.error("Error fetching texture pack: ", kk)
        })).finally((() => {
          ek(!1)
        })))
      }), [Jk, Tk, wk]), (0, Kk.jsxs)("div", {
        className: "BloxdForm TexturePackSection",
        children: [(0, Kk.jsx)("div", {
          className: "SectionTitle",
          children: yk("customTexturePack:customTexturePack")
        }), (0, Kk.jsxs)("div", {
          className: "TexturePackList",
          children: [(0, Kk.jsx)("div", {
            className: jk()("TexturePack", {
              Selected: null === ak && !Zk,
              Disabled: !Hk
            }),
            onClick: () => {
              Hk && (qk(null), Ik(null), tk(null))
            },
            children: (0, Kk.jsx)("div", {
              className: "TexturePackName",
              children: "No Override"
            })
          }), Object.values(hk.l).map((kk => (0, Kk.jsx)(Dk.g, {
            id: kk,
            isSelected: kk === ak,
            setSelected: xk,
            disabled: !Hk
          }, kk)))]
        }), ak === hk.l.CUSTOM && (0, Kk.jsx)(Mk.d, {
          folderName: Lk,
          onTexturePackUpdated: xk,
          disabled: !Hk,
          maxFileSizeMb: 25,
          packOwner: "customGame"
        })]
      })
    }
    var FF = Ik(5073);

    function IF(kk) {
      var Fk;
      let {
        gameCategory: Ik,
        setGameCategory: Xk,
        disabled: Tk
      } = kk;
      const yk = null !== (Fk = (0, ek.ib)(Ik)) && void 0 !== Fk ? Fk : "other";
      return (0, Kk.jsxs)("div", {
        className: "GameCategoryPicker",
        children: [(0, Kk.jsx)(Jk.i, {
          label: "worldBuilder:gameCategoryGroup",
          className: "GameCategoryGroup",
          disabled: Tk,
          children: (0, Kk.jsx)(xk.e, {
            options: ek.$.map((kk => ({
              value: kk,
              label: ek.Z[kk]
            }))),
            value: yk,
            onChange: kk => {
              kk.value !== yk && Xk(ek.U[kk.value][0])
            }
          })
        }), (0, Kk.jsx)(Jk.i, {
          label: "worldBuilder:gameCategory",
          className: "GameCategory",
          disabled: Tk,
          children: (0, Kk.jsx)("div", {
            className: "GameCategoryOptions",
            children: ek.U[yk].map((kk => (0, Kk.jsx)(ik.Q, {
              active: kk === Ik,
              onClick: () => {
                Xk(kk)
              },
              children: (0, ek.eb)(kk)
            }, kk)))
          })
        })]
      })
    }

    function XF(kk) {
      let {
        editor: Fk,
        onClose: Ik
      } = kk;
      const {
        t: Xk
      } = (0, lk.y)(), {
        schematicData: Tk,
        updateSchematicData: ik,
        publishFormEnabled: ak,
        formEnabled: qk
      } = Fk;
      return (0, Kk.jsxs)(Kk.Fragment, {
        children: [(0, Kk.jsxs)(Qk, {
          icon: "pen-to-square",
          title: Xk("worldBuilder:basicsSection"),
          disabled: !qk,
          children: [(0, Kk.jsx)(sk, {
            label: Xk("general:name"),
            caption: Xk("worldBuilder:schematicNameTagsHint"),
            children: (0, Kk.jsx)(yk.c, {
              className: "SchematicPageName",
              defaultValue: Tk.name,
              onValueChange: kk => ik("name", kk),
              placeholderText: Xk("worldBuilder:schematicNamePlaceholder"),
              maxLength: tk.pb
            })
          }), (0, Kk.jsx)(sk, {
            label: Xk("general:description"),
            children: (0, Kk.jsx)(yk.c, {
              className: "SchematicPageDescription",
              useTextarea: !0,
              defaultValue: Tk.description,
              onValueChange: kk => ik("description", kk),
              placeholderText: Xk("worldBuilder:schematicDescriptionPlaceholder"),
              maxLength: tk.ob
            })
          }), (0, Kk.jsx)(IF, {
            gameCategory: Tk.gameCategory,
            setGameCategory: kk => ik("gameCategory", kk),
            disabled: !ak
          }), !0 === Tk.gamePublished && (0, Kk.jsx)(Ak, {
            schematicData: Tk,
            updateSchematicData: ik,
            publishFormEnabled: ak,
            onClose: function() {
              null === Ik || void 0 === Ik || Ik()
            }
          })]
        }), (0, Kk.jsx)(zk, {
          schematicData: Tk,
          updateSchematicData: ik,
          publishFormEnabled: ak,
          formEnabled: qk
        }), !0 === Tk.gamePublished && (0, Kk.jsx)(Qk, {
          icon: "palette",
          title: Xk("worldBuilder:texturePackSection"),
          disabled: !qk,
          children: (0, Kk.jsx)(kF, {
            schematicData: Tk,
            setTexturePack: Fk.setTexturePack,
            initializeTexturePack: Fk.initializeTexturePack,
            publishFormEnabled: ak
          })
        })]
      })
    }

    function TF(kk) {
      let {
        editor: Fk
      } = kk;
      const {
        t: Ik
      } = (0, lk.y)(), {
        schematicData: Xk,
        formEnabled: Tk,
        hasUnsavedChanges: yk
      } = Fk, tk = Tk && yk;
      return (0, Kk.jsxs)("footer", {
        className: "SchematicPageFooter",
        children: [Tk && yk && (0, Kk.jsxs)("div", {
          className: "SchematicPageFooterStatus",
          children: [(0, Kk.jsx)("span", {
            className: "SchematicPageFooterStatusDot"
          }), Ik("worldBuilder:unsavedChanges")]
        }), (0, Kk.jsx)(qk.g, {
          tooltipInner: (0, Kk.jsx)("div", {
            className: "SaveButtonTooltip",
            children: Ik(Tk && !yk ? "worldBuilder:saveChangesNoneDescription" : "worldBuilder:saveChangesDescription")
          }),
          children: (0, Kk.jsxs)(ik.d, {
            className: "SaveChangesButton",
            onClick: () => Fk.saveSchematic(Xk.gamePublished),
            disabled: !tk,
            children: [(0, Kk.jsxs)("span", {
              className: Tk ? "" : "SaveChangesButtonBodyHidden",
              children: [(0, Kk.jsx)(Lk.e, {
                name: "wrench"
              }), " ", Ik("worldBuilder:saveChanges")]
            }), !Tk && (0, Kk.jsx)(ak.c, {})]
          })
        })]
      })
    }

    function iF(kk) {
      let {
        schematic: Fk,
        onSchematicUpdate: Ik,
        onClose: Tk,
        inSourceWorld: yk
      } = kk;
      const {
        t: ak
      } = (0, lk.y)();

      function qk() {
        null === Tk || void 0 === Tk || Tk()
      }
      const Lk = (0, FF.b)(Fk, {
        onNavigateAway: qk,
        inSourceWorld: yk
      });
      return (0, Xk.useEffect)((() => {
        null === Ik || void 0 === Ik || Ik(Lk.schematicData)
      }), [Lk.schematicData, Ik]), (0, Kk.jsxs)("div", {
        className: "SchematicPage SchematicPagePopupVariant",
        children: [(0, Kk.jsxs)("div", {
          className: "SchematicPageBody",
          children: [(0, Kk.jsx)(ik.c, {
            onClick: qk,
            children: ak("worldBuilder:back")
          }), (0, Kk.jsx)(Qk, {
            icon: "rocket-launch",
            title: ak("worldBuilder:actionsSection"),
            disabled: !Lk.formEnabled,
            children: (0, Kk.jsx)(Sk.d, {
              editor: Lk
            })
          }), (0, Kk.jsx)(XF, {
            editor: Lk,
            onClose: qk
          })]
        }), (0, Kk.jsx)(TF, {
          editor: Lk
        })]
      })
    }

    function yF(kk) {
      let {
        schematic: Fk,
        onSchematicUpdate: Ik,
        onClose: Xk,
        inSourceWorld: ik
      } = kk;
      Tk.NotificationProvider.showCustomPopup({
        body: kk => (0, Kk.jsx)(iF, {
          schematic: Fk,
          onSchematicUpdate: Ik,
          onClose: kk,
          inSourceWorld: ik
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: Xk,
        unlockPointerKey: "schematicPagePopup"
      })
    }
  },
  4942: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => tk
    });
    var Xk = Ik(1055),
      Tk = Ik.n(Xk),
      ik = Ik(1179),
      yk = Ik(1066),
      lk = Ik(1406),
      ak = Ik(1333),
      qk = Ik(1318),
      Lk = Ik(1096);

    function tk(kk) {
      let {
        editor: Fk,
        className: Ik
      } = kk;
      const {
        t: Xk
      } = (0, ik.y)(), {
        schematicData: tk,
        formEnabled: Zk,
        publishFormEnabled: jk
      } = Fk, ek = !Zk || !jk;
      return (0, Lk.jsxs)("div", {
        className: Tk()("PublishButtonContainer", Ik),
        children: [Fk.canEditSourceWorld && (0, Lk.jsxs)(lk.d, {
          onClick: Fk.editSourceWorld,
          disabled: ek,
          children: [(0, Lk.jsx)(yk.e, {
            name: "edit"
          }), " ", Xk("worldBuilder:editSourceWorld")]
        }), !tk.gamePublished && (0, Lk.jsx)(ak.g, {
          tooltipInner: (0, Lk.jsx)("div", {
            className: "PublishButtonTooltip",
            children: Xk("worldBuilder:publishAsGameDescription")
          }),
          children: (0, Lk.jsxs)(lk.m, {
            onClick: () => Fk.saveSchematic(!0),
            disabled: ek,
            children: [(0, Lk.jsx)(yk.e, {
              name: "rocket-launch"
            }), " ", Xk("worldBuilder:publishAsGame"), " ", (0, Lk.jsx)(yk.e, {
              name: "info-circle"
            })]
          })
        }), !0 === tk.gamePublished && (0, Lk.jsxs)(Lk.Fragment, {
          children: [(0, Lk.jsx)(ak.g, {
            tooltipInner: (0, Lk.jsx)("div", {
              className: "PublishButtonTooltip",
              children: Xk("worldBuilder:unpublishAsGameDescription")
            }),
            children: (0, Lk.jsxs)(lk.G, {
              onClick: Fk.unpublishSchematic,
              disabled: ek,
              children: [(0, Lk.jsx)(yk.e, {
                name: "rocket-launch"
              }), " ", Xk("worldBuilder:unpublishAsGame"), " ", (0, Lk.jsx)(yk.e, {
                name: "info-circle"
              })]
            })
          }), (0, Lk.jsxs)(lk.d, {
            onClick: Fk.playGame,
            disabled: ek,
            children: [(0, Lk.jsx)(yk.e, {
              name: "joystick"
            }), " ", Xk("general:playGame")]
          })]
        }), !Zk && (0, Lk.jsx)(qk.c, {
          loaderType: "Secondary"
        })]
      })
    }
  },
  4976: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Tk
    });
    var Xk = Ik(1194);
    async function Tk(kk) {
      const Fk = await fetch(`${Xk.clientSideServerUrls.s3Url}/${kk}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === Fk.status || 403 === Fk.status) return null;
      if (!Fk.ok) throw new Error(`Failed to download the texture pack (${Fk.status})`);
      return await Fk.json()
    }
  },
  5073: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Hk
    });
    var Xk = Ik(58),
      Tk = Ik(1308),
      ik = Ik(1018),
      yk = Ik(149),
      lk = Ik(1511),
      ak = Ik(25),
      qk = Ik(1875),
      Lk = Ik(1453),
      tk = Ik(4584),
      Zk = Ik(1324),
      jk = Ik(1118),
      ek = Ik(1475);

    function wk(kk, Fk) {
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

    function Hk(kk) {
      let {
        onNavigateAway: Fk,
        inSourceWorld: Ik = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const {
        userContext: Hk
      } = (0, jk.d)(), Jk = (0, ek.useNavigatePreserveSearch)(), [xk, Pk] = (0, Xk.useState)({
        ...kk
      }), [Kk, Qk] = (0, Xk.useState)("Enter"), [sk, Vk] = (0, Xk.useState)(void 0), zk = (0, Xk.useRef)(wk(kk, kk.gamePublished)), Sk = (0, Xk.useRef)(void 0), vk = "Enter" === Kk, Ek = Hk.playerHasRank("developer") || Hk.playerHasRank("admin") || "Enter" === Kk && !1 !== xk.schematicContainsSpawnBlock, Ok = void 0 !== sk && sk !== Sk.current || JSON.stringify(wk(xk, xk.gamePublished)) !== JSON.stringify(zk.current);

      function nk(kk, Fk) {
        Pk((Ik => ({
          ...Ik,
          [kk]: Fk
        })))
      }
      const Gk = (0, Xk.useCallback)((kk => {
        Sk.current = kk, Vk(kk)
      }), []);

      function pk(kk) {
        Qk("Loading");
        const Fk = wk(xk, kk),
          Ik = sk !== Sk.current ? sk : void 0;
        Lk.e.updateSchematic(Hk, Fk, Ik).then((Ik => {
          let {
            customTexturePackKey: Xk
          } = Ik;
          Qk("Success"), nk("customTexturePackKey", Xk), zk.current = Fk, Sk.current = void 0, Vk(void 0), setTimeout((() => {
            nk("gamePublished", kk), Qk("Enter")
          }), 1e3)
        })).catch((kk => {
          var Fk;
          (console.error("Failed to save schematic:", kk), Qk("Error"), kk instanceof yk.b && kk.errorMessageForUser) && Zk.NotificationProvider.showAlertPopup({
            title: "worldBuilder:changesNotSaved",
            subtitle: kk.errorMessageForUser,
            textOpts: {
              subtitle: null !== (Fk = kk.errorMessageTranslationParams) && void 0 !== Fk ? Fk : void 0
            },
            confirmText: "general:ok"
          });
          setTimeout((() => {
            Qk("Enter")
          }), 1e3)
        }))
      }
      return {
        schematicData: xk,
        updateSchematicData: nk,
        setTexturePack: Vk,
        initializeTexturePack: Gk,
        updateState: Kk,
        formEnabled: vk,
        publishFormEnabled: Ek,
        hasUnsavedChanges: Ok,
        canEditSourceWorld: !Ik,
        saveSchematic: pk,
        unpublishSchematic: function() {
          Zk.NotificationProvider.showPromptPopup({
            icon: "rocket-launch",
            title: "worldBuilder:unpublishAsGameConfirmTitle",
            subtitle: "worldBuilder:unpublishAsGameConfirmSubtitle",
            confirmText: "worldBuilder:unpublishAsGame",
            cancelText: "general:cancel",
            unlockPointerKey: "unpublishGamePrompt"
          }).getResult().then((kk => {
            !0 === kk && pk(!1)
          }))
        },
        editSourceWorld: function() {
          Qk("Loading"), tk.c.getSourceWorld(xk.schematicId).then((kk => {
            qk.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, ak.h)("other"), Jk((0, Tk.e)("classic", kk)), null === Fk || void 0 === Fk || Fk()
          })).catch((kk => {
            console.error("Failed to get source world:", kk), Qk("Error"), setTimeout((() => {
              Qk("Enter")
            }), 1e3)
          }))
        },
        playGame: function() {
          qk.gameBridge.send("leaveGame", {
            reloadPath: "/"
          }), Jk((0, lk.F)((0, ik.r)(xk.schematicId), xk)), null === Fk || void 0 === Fk || Fk()
        }
      }
    }
  },
  4936: () => {}
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);