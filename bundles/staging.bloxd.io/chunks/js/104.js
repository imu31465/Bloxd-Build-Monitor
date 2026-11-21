export const id = 104;
export const ids = [104];
export const modules = {
  4821: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => od,
      c: () => Kd,
      g: () => ld
    });
    kd(4825);
    var pd = kd(1211),
      Nd = kd(1044),
      Wd = kd.n(Nd),
      Pd = kd(1384),
      Zd = (kd(56), kd(4203)),
      gd = kd(1059),
      Cd = kd(1103);

    function Kd(dd) {
      let {
        children: Jd,
        label: kd,
        className: Nd,
        circleInfoText: Zd,
        disabled: Kd,
        onLabelClick: od
      } = dd;
      const {
        t: ld
      } = (0, pd.B)(), Qd = (0, Cd.jsxs)("div", {
        className: Wd()("Label", {
          ClickableLabel: void 0 !== od
        }),
        onClick: od,
        children: [ld(kd), Zd && (0, Cd.jsx)(gd.e, {
          name: "circle-info"
        })]
      });
      return (0, Cd.jsxs)("div", {
        className: Wd()("LabeledInput", {
          [Nd]: Nd,
          DisabledLabelInput: Kd
        }),
        children: [Zd && (0, Cd.jsx)(Pd.f, {
          tooltipInner: (0, Cd.jsx)("div", {
            className: "LabeledInputTooltip",
            children: ld(Zd)
          }),
          children: Qd
        }), !Zd && Qd, Jd]
      })
    }

    function od(dd) {
      let {
        checked: Jd,
        setChecked: kd
      } = dd;
      return (0, Cd.jsx)("div", {
        className: "OtherInput ClickableOtherInput",
        "data-pad-focusable": !0,
        onClick: dd => {
          kd(!Jd)
        },
        children: (0, Cd.jsx)(Zd.e, {
          checked: Jd,
          onChange: dd => {
            kd(dd.target.checked)
          },
          disabled: !1
        })
      })
    }

    function ld(dd) {
      let {
        checked: Jd,
        setChecked: kd,
        disabled: pd
      } = dd;
      return (0, Cd.jsx)("div", {
        className: Wd()("SwitchContainer", {
          SwitchContainerDisabled: pd
        }),
        onClick: () => {
          pd || kd(!Jd)
        },
        children: (0, Cd.jsx)(Zd.e, {
          className: "SwitchCheckbox",
          checked: Jd,
          onChange: dd => {
            kd(dd.target.checked)
          },
          disabled: !!pd
        })
      })
    }
  },
  4829: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Cd
    });
    var pd = kd(1044),
      Nd = kd.n(pd),
      Wd = kd(4482),
      Pd = kd(1211),
      Zd = kd(1103);
    const gd = [...Wd.l, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function Cd(dd) {
      const {
        disabled: Jd,
        hideWrapper: kd
      } = dd, {
        t: pd
      } = (0, Pd.B)(), Cd = dd.advancedMode ? gd.map((Jd => [Jd, dd.callbacks[Jd]])) : Wd.l.map((Jd => [Jd, dd.callbacks[Jd]])), od = (0, Zd.jsx)("div", {
        className: Nd()("PluginsGrid", {
          SectionBody: !kd
        }),
        children: Cd.map((dd => {
          let [kd, pd] = dd;
          return (0, Zd.jsx)(Kd, {
            plugin: kd,
            callbacks: pd,
            disabled: Jd
          }, kd)
        }))
      });
      return kd ? od : (0, Zd.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, Zd.jsx)("div", {
          className: "SectionTitle",
          children: pd("worldBuilder:pluginsSection")
        }), od]
      })
    }

    function Kd(dd) {
      let {
        plugin: Jd,
        callbacks: {
          isEnabled: kd,
          XM: pd
        },
        disabled: Wd
      } = dd;
      const {
        t: gd
      } = (0, Pd.B)(), Cd = kd();
      return (0, Zd.jsxs)("div", {
        className: Nd()("PluginCard", {
          PluginCardEnabled: Cd,
          PluginCardDisabledForm: Wd
        }),
        "data-pad-focusable": !0,
        "aria-disabled": Wd || void 0,
        onClick: () => {
          Wd || pd(!Cd)
        },
        children: [(0, Zd.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, Zd.jsx)("img", {
            src: `/textures/games/classic/customGames/${Jd}.png`,
            alt: Jd
          })
        }), (0, Zd.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, Zd.jsx)("div", {
            className: "PluginCardTitle",
            children: gd(od[Jd])
          }), (0, Zd.jsx)("div", {
            className: "PluginCardDescription",
            children: gd(ld[Jd])
          })]
        }), (0, Zd.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: gd(Cd ? "general:on" : "general:off")
        })]
      })
    }
    const od = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      ld = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  4813: (dd, Jd, kd) => {
    kd.d(Jd, {
      g: () => WJ,
      d: () => NJ,
      e: () => pJ,
      i: () => PJ
    });
    var pd = kd(56),
      Nd = kd(1371),
      Wd = kd(1461),
      Pd = kd(1714),
      Zd = kd(1211),
      gd = kd(1359),
      Cd = kd(1384),
      Kd = kd(1059),
      od = kd(1245),
      ld = kd(1044),
      Qd = kd.n(ld),
      Ld = kd(300),
      Od = kd(4482),
      ed = kd(1260),
      Rd = kd(4821),
      Id = kd(2999),
      Gd = kd(4829),
      vd = kd(1103);

    function xd(dd) {
      let {
        icon: Jd,
        title: kd,
        disabled: pd,
        children: Nd
      } = dd;
      return (0, vd.jsxs)("div", {
        className: Qd()("ManageCard", {
          ManageCardDisabled: pd
        }),
        children: [(0, vd.jsxs)("div", {
          className: "ManageCardHead",
          children: [(0, vd.jsx)("div", {
            className: "ManageCardIcon",
            children: (0, vd.jsx)(Kd.e, {
              name: Jd
            })
          }), (0, vd.jsx)("div", {
            children: (0, vd.jsx)("h2", {
              className: "ManageCardTitle",
              children: kd
            })
          })]
        }), (0, vd.jsxs)("div", {
          className: "ManageCardBody",
          children: [Nd, pd && (0, vd.jsx)("div", {
            className: "ManageCardDisabledOverlay"
          })]
        })]
      })
    }

    function qd(dd) {
      let {
        label: Jd,
        caption: kd,
        children: pd
      } = dd;
      return (0, vd.jsxs)("div", {
        className: "ManageStackedField",
        children: [(0, vd.jsx)("div", {
          className: "ManageStackedFieldLabel",
          children: Jd
        }), pd, kd && (0, vd.jsx)("div", {
          className: "ManageStackedFieldCaption",
          children: kd
        })]
      })
    }

    function Bd(dd) {
      let {
        label: Jd,
        caption: kd,
        disabled: pd,
        children: Nd
      } = dd;
      return (0, vd.jsxs)("div", {
        className: Qd()("ManageField", {
          ManageFieldDisabled: pd
        }),
        children: [(0, vd.jsxs)("div", {
          className: "ManageFieldText",
          children: [(0, vd.jsx)("div", {
            className: "ManageFieldLabel",
            children: Jd
          }), (0, vd.jsx)("div", {
            className: "ManageFieldCaption",
            children: kd
          })]
        }), (0, vd.jsx)("div", {
          className: "ManageFieldControl",
          children: Nd
        })]
      })
    }

    function sd(dd) {
      var Jd, kd;
      let {
        schematicData: pd,
        updateSchematicData: Nd,
        publishFormEnabled: Wd,
        formEnabled: Pd
      } = dd;
      const {
        t: gd
      } = (0, Zd.B)(), Cd = !Wd, Kd = {
        tpRequests: {
          isEnabled: () => !pd.disableTpRequests,
          XM: dd => Nd("disableTpRequests", !dd)
        },
        spawnProtection: {
          isEnabled: () => !pd.disableSpawnProtection,
          XM: dd => Nd("disableSpawnProtection", !dd)
        },
        spawnReset: {
          isEnabled: () => !!pd.enableSpawnReset,
          XM: dd => Nd("enableSpawnReset", dd)
        },
        smpMarketplace: {
          isEnabled: () => !!pd.enableSmpMarketplace,
          XM: dd => Nd("enableSmpMarketplace", dd)
        },
        survivalGuns: {
          isEnabled: () => !!pd.enableSurvivalGuns,
          XM: dd => Nd("enableSurvivalGuns", dd)
        },
        fallDamage: {
          isEnabled: () => !pd.disableFallDamage,
          XM: dd => Nd("disableFallDamage", !dd)
        },
        dayNight: {
          isEnabled: () => !!pd.enableDayNight,
          XM: dd => Nd("enableDayNight", dd)
        }
      };
      return (0, vd.jsxs)(vd.Fragment, {
        children: [!1 === pd.schematicContainsSpawnBlock && (0, vd.jsx)("div", {
          className: "ManageWarningBanner",
          children: gd("worldBuilder:mustContainSpawnBlock")
        }), (0, vd.jsxs)("div", {
          className: "ManageSettingsGrid",
          children: [(0, vd.jsxs)(xd, {
            icon: "globe",
            title: gd("worldBuilder:worldRulesSection"),
            disabled: !Pd,
            children: [(0, vd.jsx)(Bd, {
              label: gd("classic:defaultGamemode"),
              caption: gd("classic:defaultGamemodeDescription"),
              disabled: Cd,
              children: (0, vd.jsx)(Id.c, {
                controlClassName: "ManageDropdown",
                options: Od.B.map((dd => ({
                  value: dd,
                  label: Ld.w[dd]
                }))),
                value: pd.defaultGamemode,
                onChange: dd => Nd("defaultGamemode", dd.value)
              })
            }), (0, vd.jsx)(Bd, {
              label: gd("classic:voidDeathHeight"),
              caption: gd("classic:voidDeathHeightDescription"),
              disabled: Cd,
              children: (0, vd.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, vd.jsx)("input", {
                  type: "number",
                  max: ed.F,
                  value: null !== (Jd = pd.voidDeathHeight) && void 0 !== Jd ? Jd : "",
                  onChange: dd => {
                    const Jd = parseInt(dd.target.value);
                    Nd("voidDeathHeight", Jd)
                  }
                }), (0, vd.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: gd("worldBuilder:blocksUnit")
                })]
              })
            }), (0, vd.jsx)(Bd, {
              label: gd("classic:worldBorder"),
              caption: gd("classic:worldBorderDescription"),
              disabled: Cd,
              children: (0, vd.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, vd.jsx)("input", {
                  type: "number",
                  min: ed.L,
                  max: ed.H,
                  placeholder: gd("worldBuilder:noWorldBorderLimit"),
                  value: null !== (kd = pd.worldBorder) && void 0 !== kd ? kd : "",
                  onChange: dd => {
                    const Jd = parseInt(dd.target.value);
                    Nd("worldBorder", isNaN(Jd) ? null : Jd)
                  }
                }), (0, vd.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: gd("worldBuilder:blocksUnit")
                })]
              })
            }), (0, vd.jsx)(Bd, {
              label: gd("classic:disableMobs"),
              caption: gd("classic:disableMobsDescription"),
              disabled: Cd,
              children: (0, vd.jsx)(Rd.g, {
                checked: pd.disableMobs,
                setChecked: dd => Nd("disableMobs", dd),
                disabled: Cd
              })
            })]
          }), (0, vd.jsxs)(xd, {
            icon: "user-group",
            title: gd("worldBuilder:playerAndLobbySection"),
            disabled: !Pd,
            children: [(0, vd.jsx)(Bd, {
              label: gd("classic:disableKeepInventory"),
              caption: gd("classic:disableKeepInventoryDescription"),
              disabled: Cd,
              children: (0, vd.jsx)(Rd.g, {
                checked: pd.disableKeepInventory,
                setChecked: dd => Nd("disableKeepInventory", dd),
                disabled: Cd
              })
            }), (0, vd.jsx)(Bd, {
              label: gd("classic:persistInventory"),
              caption: gd("classic:persistInventoryDescription"),
              disabled: Cd,
              children: (0, vd.jsx)(Id.c, {
                controlClassName: "ManageDropdown",
                options: Od.m.map((dd => ({
                  value: dd,
                  label: Ld.h[dd]
                }))),
                value: pd.persistInventory,
                onChange: dd => Nd("persistInventory", dd.value)
              })
            }), (0, vd.jsx)(Bd, {
              label: gd("classic:persistWorld"),
              caption: gd("classic:persistWorldDescription"),
              disabled: Cd,
              children: (0, vd.jsx)(Rd.g, {
                checked: pd.persistWorld,
                setChecked: dd => Nd("persistWorld", dd),
                disabled: Cd
              })
            }), (0, vd.jsx)(Bd, {
              label: gd("classic:disableLobbySpawn"),
              caption: gd("classic:disableLobbySpawnDescription"),
              disabled: Cd,
              children: (0, vd.jsx)(Rd.g, {
                checked: pd.disableLobbySpawn,
                setChecked: dd => Nd("disableLobbySpawn", dd),
                disabled: Cd
              })
            }), (0, vd.jsx)(Bd, {
              label: gd("classic:hideLobbyCode"),
              caption: gd("classic:hideLobbyCodeDescription"),
              disabled: Cd,
              children: (0, vd.jsx)(Rd.g, {
                checked: pd.hideLobbyCode,
                setChecked: dd => Nd("hideLobbyCode", dd),
                disabled: Cd
              })
            })]
          })]
        }), (0, vd.jsx)(xd, {
          icon: "layer-group",
          title: gd("worldBuilder:pluginsSection"),
          disabled: !Pd,
          children: (0, vd.jsx)(Gd.d, {
            callbacks: Kd,
            disabled: Cd,
            advancedMode: !0,
            hideWrapper: !0
          })
        })]
      })
    }
    var ad = kd(4837),
      Md = kd(4203),
      Fd = kd(1520),
      Yd = kd(3342),
      md = kd(1140),
      bd = kd(4794),
      Sd = kd(4841),
      jd = kd(1469);
    const Xd = 50,
      fd = .3;
    async function nd(dd) {
      const Jd = await
      function(dd) {
        return new Promise(((Jd, kd) => {
          const pd = new FileReader;
          pd.onload = () => Jd(pd.result), pd.onerror = kd, pd.readAsDataURL(dd)
        }))
      }(dd), kd = await
      function(dd) {
        return new Promise(((Jd, kd) => {
          const pd = new Image;
          pd.onload = () => Jd(pd), pd.onerror = () => kd(new Error("Failed to load image")), pd.src = dd
        }))
      }(Jd);
      if (kd.naturalHeight > kd.naturalWidth) throw new Ud;
      const pd = 1024 * Xd,
        {
          dataUrl: Nd,
          finalQuality: Wd
        } = function(dd, Jd) {
          const kd = document.createElement("canvas");
          kd.width = dd.naturalWidth, kd.height = dd.naturalHeight, kd.getContext("2d").drawImage(dd, 0, 0);
          let pd = .92,
            Nd = kd.toDataURL("image/jpeg", pd);
          for (; .75 * Nd.length > Jd && pd > .05;) pd -= .05, Nd = kd.toDataURL("image/jpeg", pd);
          return {
            dataUrl: Nd,
            finalQuality: pd
          }
        }(kd, pd);
      if (Math.ceil(.75 * Nd.length) > pd) throw new yd;
      return {
        base64Jpg: Nd,
        heavilyCompressed: Wd < fd
      }
    }
    class Ud extends Error {}
    class yd extends Error {}
    var Dd = function(dd) {
      return dd[dd.NOT_LOGGED_IN = 0] = "NOT_LOGGED_IN", dd[dd.THUMBNAIL_LIMIT_REACHED = 1] = "THUMBNAIL_LIMIT_REACHED", dd
    }(Dd || {});

    function Td(dd) {
      var Jd;
      let {
        schematicId: kd,
        hasReadUploadPolicy: Nd,
        onPolicyValidationError: gd,
        onThumbnailReady: Cd
      } = dd;
      const {
        t: ld
      } = (0, Zd.B)(), [Ld, Od] = (0, pd.useState)(null), [ed, Rd] = (0, pd.useState)(""), [Id, Gd] = (0, pd.useState)(""), [xd, qd] = (0, pd.useState)(!0), [Bd, sd] = (0, pd.useState)(!1), ad = (0, pd.useRef)(!1), [Md, Fd] = (0, pd.useState)(null), [Yd, md] = (0, pd.useState)(!1), [bd, jd] = (0, pd.useState)(!1), Xd = (0, pd.useRef)(0), {
        getRootProps: fd,
        getInputProps: Dd,
        isDragActive: Td
      } = (0, Sd.c)({
        accept: {
          "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp"]
        },
        multiple: !1,
        onDrop: async dd => {
          if (0 === dd.length) return;
          const Jd = dd[0],
            kd = ++Xd.current;
          Fd(null), md(!1), Od(null), Rd(Jd.name);
          try {
            const dd = await nd(Jd);
            if (kd !== Xd.current) return;
            Od(dd), md(dd.heavilyCompressed)
          } catch (pd) {
            if (kd !== Xd.current) return;
            Fd(ld(pd instanceof Ud ? "thumbnail:portraitImagesNotAllowed" : pd instanceof yd ? "thumbnail:couldNotCompressImage" : "thumbnail:failedToUploadImage"))
          }
        },
        useFsAccessApi: !1
      }), Ed = ed.length <= 30 ? ed : `${ed.slice(0,27)}...`, cd = null !== (Jd = null === Ld || void 0 === Ld ? void 0 : Ld.base64Jpg) && void 0 !== Jd ? Jd : null, hd = Id.trim(), rd = hd.length >= od.o && hd.length <= od.l, ud = bd && !Ld && !Md, td = bd && !rd;
      return (0, vd.jsxs)("div", {
        className: "ThumbnailUploadContainer",
        children: [(0, vd.jsxs)("div", {
          ...fd({
            className: Qd()("ThumbnailUploadDropzone", {
              ActiveDrag: Td,
              ValidationError: ud
            })
          }),
          children: [(0, vd.jsx)("input", {
            ...Dd()
          }), !Td && cd ? (0, vd.jsxs)(vd.Fragment, {
            children: [(0, vd.jsxs)("div", {
              className: "ThumbnailAspectPreviews",
              children: [(0, vd.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, vd.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "1:1"
                }), (0, vd.jsx)("div", {
                  className: "ThumbnailAspectFrame Square",
                  children: (0, vd.jsx)("img", {
                    src: cd,
                    alt: "1:1 preview"
                  })
                })]
              }), (0, vd.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, vd.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "16:9"
                }), (0, vd.jsx)("div", {
                  className: "ThumbnailAspectFrame Wide",
                  children: (0, vd.jsx)("img", {
                    src: cd,
                    alt: "16:9 preview"
                  })
                })]
              })]
            }), (0, vd.jsxs)("div", {
              children: [(0, vd.jsx)("div", {
                className: "ThumbnailUploadInstructions Active",
                children: Ed
              }), (0, vd.jsx)("div", {
                className: "ThumbnailUploadInstructions Preview",
                children: ld("thumbnail:preview")
              })]
            })]
          }) : (0, vd.jsxs)(vd.Fragment, {
            children: [(0, vd.jsx)("div", {
              className: "ThumbnailUploadIcon",
              children: (0, vd.jsx)(Kd.e, {
                name: "image"
              })
            }), (0, vd.jsx)("div", {
              className: "ThumbnailUploadInstructions",
              children: ld("thumbnail:dragImageHere")
            })]
          })]
        }), ud && (0, vd.jsx)("div", {
          className: "ThumbnailUploadError",
          children: ld("thumbnail:imageRequired")
        }), (0, vd.jsx)(Pd.e, {
          className: Qd()("ThumbnailUploadNameInput", {
            ValidationError: td
          }),
          placeholderText: ld("thumbnail:thumbnailName"),
          defaultValue: Id,
          onValueChange: dd => {
            Gd(dd)
          },
          maxLength: od.l
        }), td && (0, vd.jsx)("div", {
          className: "ThumbnailUploadError",
          children: ld("thumbnail:nameRequired", {
            min: od.o,
            max: od.l
          })
        }), (0, vd.jsxs)("label", {
          className: "ThumbnailUploadCheckbox",
          children: [(0, vd.jsx)("input", {
            type: "checkbox",
            checked: xd,
            onChange: dd => {
              qd(dd.target.checked)
            }
          }), ld("thumbnail:setAsThumbnailOnceApproved")]
        }), Yd && (0, vd.jsx)("div", {
          className: "ThumbnailUploadWarning",
          children: ld("thumbnail:heavyCompressionWarning")
        }), Md && (0, vd.jsx)("div", {
          className: "ThumbnailUploadError",
          children: Md
        }), (0, vd.jsx)(Wd.j, {
          disabled: Bd,
          className: "ThumbnailUploadButton",
          onClick: async () => {
            if (jd(!0), !ad.current && Ld && rd && Nd) {
              ad.current = !0, sd(!0), Fd(null);
              try {
                await Cd(Ld.base64Jpg, hd, xd ? kd : null)
              } catch (dd) {
                Fd(dd.errorMessageForUser ? ld(dd.errorMessageForUser, dd.errorMessageTranslationParams) : ld("thumbnail:failedToUploadImage"))
              } finally {
                ad.current = !1, sd(!1)
              }
            } else Nd || gd()
          },
          children: ld(Bd ? "thumbnail:processing" : "thumbnail:uploadThumbnail")
        })]
      })
    }
    const Ed = 2e3;

    function cd(dd) {
      let {
        schematicId: Jd,
        ownedThumbnailCount: kd,
        onClose: Nd,
        onThumbnailReady: Wd
      } = dd;
      const {
        t: Pd
      } = (0, Zd.B)(), {
        userContext: gd
      } = (0, md.c)(), [Cd, ld] = (0, pd.useState)(!1), [Ld, Od] = (0, pd.useState)(!1), [ed, Rd] = (0, pd.useState)(!1), Id = (0, pd.useRef)();
      (0, pd.useEffect)((() => () => {
        clearTimeout(Id.current)
      }), []);
      const Gd = function(dd, Jd) {
        const kd = [];
        return dd.isLoggedIn() || kd.push(Dd.NOT_LOGGED_IN), Jd >= od.T && kd.push(Dd.THUMBNAIL_LIMIT_REACHED), kd
      }(gd, kd);
      if (Gd.length > 0) {
        const dd = {
          [Dd.NOT_LOGGED_IN]: {
            key: "thumbnail:mustBeLoggedInToUpload"
          },
          [Dd.THUMBNAIL_LIMIT_REACHED]: {
            key: "thumbnail:thumbnailLimitReachedPleaseDelete",
            params: {
              max: od.T
            }
          }
        };
        return (0, vd.jsxs)("div", {
          className: "ThumbnailUploaderInner",
          children: [(0, vd.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: Pd("thumbnail:cannotUploadThumbnail")
          }), Gd.map(((Jd, kd) => {
            const pd = dd[Jd];
            return (0, vd.jsxs)("div", {
              className: "CannotUploadThumbnailItem",
              children: [(0, vd.jsx)(Kd.e, {
                name: "triangle-exclamation"
              }), (0, vd.jsx)("span", {
                children: Pd(pd.key, pd.params)
              })]
            }, kd)
          }))]
        })
      }
      return (0, vd.jsxs)("div", {
        className: Qd()("ThumbnailUploaderInner", {
          ThumbnailUploaderSuccess: Cd
        }),
        children: [Cd && (0, vd.jsxs)("div", {
          className: "ThumbnailUploadSuccessOverlay",
          children: [(0, vd.jsxs)("div", {
            className: "ThumbnailUploadSuccessIcon FullyFancyText AnimFadeInScaleUp",
            children: [(0, vd.jsx)(Kd.e, {
              name: "check"
            }), (0, vd.jsx)(jd.e, {})]
          }), (0, vd.jsx)("div", {
            className: "ThumbnailUploadSuccessText AnimFadeInScaleUp",
            children: Pd("thumbnail:thumbnailUploaded")
          })]
        }), (0, vd.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: Pd("thumbnail:uploadThumbnail")
        }), (0, vd.jsxs)("div", {
          className: "ThumbnailUploaderBody",
          children: [(0, vd.jsxs)("div", {
            className: "ThumbnailUploaderLeft",
            children: [(0, vd.jsx)("h3", {
              className: "SchematicPopupSubtitle",
              children: Pd("thumbnail:chooseImage", {
                maxSizeKb: Xd
              })
            }), (0, vd.jsx)(Td, {
              schematicId: Jd,
              hasReadUploadPolicy: Ld,
              onPolicyValidationError: () => {
                Rd(!0)
              },
              onThumbnailReady: async (dd, Jd, kd) => {
                await Wd(dd, Jd, kd), ld(!0), Id.current = setTimeout(Nd, Ed)
              }
            })]
          }), (0, vd.jsxs)("div", {
            className: "ThumbnailUploadPolicy",
            children: [(0, vd.jsx)("h3", {
              className: "ThumbnailUploadPolicyTitle",
              children: Pd("thumbnail:uploadPolicy")
            }), (0, vd.jsxs)("ul", {
              className: "ThumbnailUploadPolicyList",
              children: [(0, vd.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, vd.jsx)(Kd.e, {
                  name: "check"
                }), (0, vd.jsx)("span", {
                  children: Pd("thumbnail:policyFollowGuidelines")
                })]
              }), (0, vd.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, vd.jsx)(Kd.e, {
                  name: "check"
                }), (0, vd.jsx)("span", {
                  children: Pd("thumbnail:policyInGameAssets")
                })]
              }), (0, vd.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, vd.jsx)(Kd.e, {
                  name: "check"
                }), (0, vd.jsx)("span", {
                  children: Pd("thumbnail:policyLimitText")
                })]
              }), (0, vd.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, vd.jsx)(Kd.e, {
                  name: "x"
                }), (0, vd.jsx)("span", {
                  children: Pd("thumbnail:policyCopyrightContent")
                })]
              }), (0, vd.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, vd.jsx)(Kd.e, {
                  name: "x"
                }), (0, vd.jsx)("span", {
                  children: Pd("thumbnail:policyOutOfGameAssets")
                })]
              }), (0, vd.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, vd.jsx)(Kd.e, {
                  name: "x"
                }), (0, vd.jsx)("span", {
                  children: Pd("thumbnail:policyBloxdTags")
                })]
              }), (0, vd.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, vd.jsx)(Kd.e, {
                  name: "x"
                }), (0, vd.jsx)("span", {
                  children: Pd("thumbnail:policyMustReflectGame")
                })]
              })]
            }), (0, vd.jsxs)("label", {
              className: Qd()("ThumbnailUploadCheckbox Policy", {
                ValidationError: ed && !Ld
              }),
              children: [(0, vd.jsx)("input", {
                type: "checkbox",
                checked: Ld,
                onChange: dd => {
                  Od(dd.target.checked)
                }
              }), Pd("thumbnail:agreeToUploadPolicy")]
            }), ed && !Ld && (0, vd.jsx)("div", {
              className: "ThumbnailPolicyError",
              children: Pd("thumbnail:policyRequired")
            })]
          })]
        })]
      })
    }
    var hd = kd(1220);
    const rd = {
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

    function ud(dd) {
      var Jd, kd;
      let {
        schematicData: Pd,
        updateSchematicData: Cd,
        publishFormEnabled: od,
        onClose: ld
      } = dd;
      const {
        t: Ld
      } = (0, Zd.B)(), {
        userContext: Od,
        isUserContextUpdating: ed
      } = (0, md.c)(), Rd = (0, Yd.d)(), [Id, Gd] = (0, pd.useState)([]), [xd, qd] = (0, pd.useState)([]), [Bd, sd] = (0, pd.useState)(!0), [ad, Md] = (0, pd.useState)(null !== (Jd = Pd.customThumbnailId) && void 0 !== Jd ? Jd : null), [Sd, jd] = (0, pd.useState)(null), Xd = (0, pd.useRef)(null !== (kd = Pd.customThumbnailId) && void 0 !== kd ? kd : null), fd = (0, pd.useRef)(0), nd = (0, pd.useRef)(null), Ud = (0, pd.useRef)(null), yd = (0, pd.useRef)(null), Dd = (0, pd.useRef)(!1);

      function Td(dd, Jd) {
        yd.current && (clearTimeout(yd.current), yd.current = null), jd(dd), null !== dd && Jd && (yd.current = setTimeout((() => {
          jd(null), yd.current = null
        }), 5e3))
      }(0, pd.useEffect)((() => () => {
        clearTimeout(Ud.current), clearTimeout(yd.current)
      }), []);
      const Ed = (0, pd.useCallback)((() => {
        sd(!0), Fd.d.getOwnedThumbnails(Od).then((dd => {
          const Jd = [],
            kd = [];
          for (const pd of dd.thumbnails) pd.rejectionPolicyId ? Jd.push(pd) : kd.push(pd);
          Jd.sort(((dd, Jd) => dd.lastUpdatedAt - Jd.lastUpdatedAt)), kd.sort(((dd, Jd) => {
            const kd = dd.approved ? 1 : 0,
              pd = (Jd.approved ? 1 : 0) - kd;
            return 0 !== pd ? pd : Jd.lastUpdatedAt - dd.lastUpdatedAt
          })), qd(Jd), Gd(kd)
        })).catch((dd => {
          console.error("Failed to fetch thumbnails:", dd)
        })).finally((() => {
          sd(!1)
        }))
      }), [Od]);
      async function rd(dd, Jd, kd) {
        return Fd.d.uploadSchematicThumbnail(Od, dd, Jd, kd).then((() => {
          Td({
            text: Ld("thumbnail:uploadedAwaitingModeration"),
            type: "success"
          }, !0), Ed()
        }))
      }

      function ud() {
        fd.current = Date.now(), Ud.current = null;
        const dd = nd.current;
        nd.current = null, Td({
          text: Ld("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), Fd.d.setSchematicThumbnail(Od, Pd.schematicId, dd).then((() => {
          Rd.current && (Td({
            text: Ld("thumbnail:thumbnailUpdated"),
            type: "success"
          }, !0), Xd.current = dd, Cd("customThumbnailId", dd), Cd("customThumbnailBlurhash", void 0), Cd("customThumbnailVariants", void 0))
        })).catch((dd => {
          Rd.current && (Td({
            text: dd.errorMessageForUser ? Ld(dd.errorMessageForUser, dd.errorMessageTranslationParams) : Ld("thumbnail:failedToSetThumbnail"),
            type: "error"
          }, !0), Md(Xd.current))
        }))
      }

      function zd(dd) {
        Md(dd), nd.current = dd;
        const Jd = Date.now() - fd.current;
        Jd >= 1e3 ? ud() : (Td({
          text: Ld("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), Ud.current || (Ud.current = setTimeout((() => {
          ud()
        }), 1e3 - Jd)))
      }
      return (0, pd.useEffect)((() => {
        !1 === ed && Ed()
      }), [ed, Ed]), xd.length > 0 ? (0, vd.jsx)(td, {
        rejectedThumbnails: xd,
        userContext: Od,
        isMountedRef: Rd,
        onAcknowledged: Ed
      }) : (0, vd.jsxs)("div", {
        className: "BloxdForm ThumbnailSection",
        children: [(0, vd.jsxs)("div", {
          className: "SectionTitle",
          children: [Ld("thumbnail:gameThumbnail"), Sd && (0, vd.jsx)("span", {
            className: Qd()("ThumbnailActionMsg", `ThumbnailActionMsg--${Sd.type}`),
            children: Sd.text
          })]
        }), (0, vd.jsx)("div", {
          className: "SectionBody",
          children: (0, vd.jsxs)("div", {
            className: "ThumbnailGrid",
            children: [(0, vd.jsxs)("div", {
              className: Qd()("ThumbnailGridItem ThumbnailGridItemDefault", {
                ThumbnailGridItemSelected: null === ad
              }),
              onClick: () => zd(null),
              children: [(0, vd.jsx)(bd.c, {
                game: {
                  schematicId: Pd.schematicId,
                  imageBlurhash: Pd.imageBlurhash
                }
              }), (0, vd.jsx)("div", {
                className: "ThumbnailGridItemLabel ThumbnailDefaultLabel",
                children: Ld("general:default")
              })]
            }), Bd && (0, vd.jsx)(gd.b, {}), Id.map(((dd, Jd) => (0, vd.jsxs)("div", {
              className: Qd()("ThumbnailGridItem", {
                ThumbnailGridItemSelected: ad === dd.id,
                ThumbnailGridItemPending: !dd.approved
              }),
              onClick: () => {
                dd.approved && zd(dd.id)
              },
              children: [dd.approved && (0, vd.jsx)("img", {
                src: `${hd.clientSideServerUrls.s3Url}/customThumbnails/${dd.id}.jpg`,
                alt: "Thumbnail"
              }), dd.approved && (0, vd.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: dd.name
              }), dd.id && (0, vd.jsx)(Wd.B, {
                className: "ThumbnailDeleteButton",
                onClick: Jd => async function(dd, Jd, kd) {
                  dd.stopPropagation();
                  const pd = await Nd.NotificationProvider.showCustomPopup({
                      body: dd => (0, vd.jsx)(Vd, {
                        thumbnailId: Jd,
                        thumbnailName: kd,
                        onClose: Jd => {
                          Jd && (Dd.current = !0), dd()
                        }
                      }),
                      middleScreenPopupClassName: "ThumbnailDeleteConfirmPopup",
                      onClose: ld
                    }).getResult(),
                    Wd = Dd.current;
                  Dd.current = !1, Wd && !0 === pd && (Rd.current && Td({
                    text: Ld("thumbnail:deletingThumbnail"),
                    type: "info"
                  }, !1), Fd.d.deleteSchematicThumbnail(Od, Jd).then((() => {
                    Rd.current && (Td({
                      text: Ld("thumbnail:thumbnailDeleted"),
                      type: "success"
                    }, !0), Xd.current === Jd && zd(null), Ed())
                  })).catch((dd => {
                    Rd.current && Td({
                      text: dd.errorMessageForUser ? Ld(dd.errorMessageForUser, dd.errorMessageTranslationParams) : Ld("thumbnail:failedToDeleteThumbnail"),
                      type: "error"
                    }, !0)
                  })))
                }(Jd, dd.id, dd.name),
                children: (0, vd.jsx)(Kd.e, {
                  name: "trash-can"
                })
              }), !dd.approved && (0, vd.jsx)("div", {
                className: "ThumbnailUnapprovedIcon",
                children: (0, vd.jsx)(Kd.e, {
                  name: "hourglass-clock"
                })
              }), !dd.approved && (0, vd.jsxs)("div", {
                className: "ThumbnailGridItemLabel ThumbnailPendingLabel",
                children: [dd.name, (0, vd.jsx)("br", {}), Ld("thumbnail:pendingApproval")]
              })]
            }, Jd))), (0, vd.jsxs)("div", {
              className: Qd()("ThumbnailGridItem ThumbnailUploadTile", {
                ThumbnailUploadTileDisabled: !od
              }),
              onClick: () => {
                od && function(dd) {
                  let {
                    schematicId: Jd,
                    ownedThumbnailCount: kd,
                    onThumbnailReady: pd,
                    onClose: Wd
                  } = dd;
                  Nd.NotificationProvider.showCustomPopup({
                    body: dd => (0, vd.jsx)(cd, {
                      schematicId: Jd,
                      ownedThumbnailCount: kd,
                      onClose: dd,
                      onThumbnailReady: pd
                    }),
                    middleScreenPopupClassName: "SchematicThumbnailPopup",
                    onClose: Wd,
                    unlockPointerKey: "schematicThumbnailUploaderPopup"
                  })
                }({
                  schematicId: Pd.schematicId,
                  ownedThumbnailCount: Id.length,
                  onThumbnailReady: rd,
                  onClose: ld
                })
              },
              children: [(0, vd.jsx)(Kd.e, {
                name: "plus"
              }), (0, vd.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: Ld("thumbnail:uploadThumbnail")
              })]
            })]
          })
        })]
      })
    }

    function td(dd) {
      let {
        rejectedThumbnails: Jd,
        userContext: kd,
        isMountedRef: Nd,
        onAcknowledged: Pd
      } = dd;
      const {
        t: Cd
      } = (0, Zd.B)(), [od, ld] = (0, pd.useState)(!1), [Qd, Ld] = (0, pd.useState)(!1), Od = function(dd) {
        const Jd = new Map;
        for (const kd of dd) {
          const dd = kd.rejectionPolicyId,
            pd = Jd.get(dd);
          pd ? pd.push(kd) : Jd.set(dd, [kd])
        }
        return Jd
      }(Jd);
      return (0, vd.jsxs)("div", {
        className: "ThumbnailRejectionNotice",
        children: [(0, vd.jsxs)("div", {
          className: "ThumbnailRejectionNoticeTitle",
          children: [(0, vd.jsx)(Kd.e, {
            name: "triangle-exclamation"
          }), " ", Cd("thumbnail:thumbnailsRejected"), " ", (0, vd.jsx)(Kd.e, {
            name: "triangle-exclamation"
          })]
        }), (0, vd.jsx)("div", {
          className: "ThumbnailRejectionNoticeSubtitle",
          children: Cd("thumbnail:thumbnailsRejectedDescription")
        }), (0, vd.jsx)("div", {
          className: "ThumbnailRejectionNoticeList",
          children: [...Od.entries()].map((dd => {
            let [Jd, kd] = dd;
            const pd = rd[Jd];
            return (0, vd.jsxs)("div", {
              className: "ThumbnailRejectionNoticeGroup",
              children: [(0, vd.jsx)("div", {
                className: "ThumbnailRejectionNoticeItems",
                children: kd.map((dd => (0, vd.jsxs)("div", {
                  className: "ThumbnailRejectionNoticeItem",
                  children: [(0, vd.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemIcon",
                    children: (0, vd.jsx)(Kd.e, {
                      name: "image-slash"
                    })
                  }), (0, vd.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemDetails",
                    children: (0, vd.jsx)("div", {
                      className: "ThumbnailRejectionNoticeItemName",
                      children: dd.name
                    })
                  })]
                }, dd.id)))
              }), (0, vd.jsxs)("div", {
                className: "ThumbnailRejectionNoticeGroupReason",
                children: [Cd("thumbnail:rejectionReason"), " ", pd ? Cd(pd.reason) : Jd]
              }), pd && (0, vd.jsx)("ul", {
                className: "ThumbnailRejectionNoticeGroupTips",
                children: pd.tips.map((dd => (0, vd.jsx)("li", {
                  children: Cd(dd)
                }, dd)))
              })]
            }, Jd)
          }))
        }), (0, vd.jsxs)("label", {
          className: "ThumbnailRejectionNoticeCheckbox",
          children: [(0, vd.jsx)(Md.e, {
            checked: od,
            onChange: dd => ld(dd.target.checked),
            disabled: Qd
          }), (0, vd.jsx)("span", {
            children: Cd("thumbnail:haveReadRejectionReasons")
          })]
        }), (0, vd.jsx)(Wd.j, {
          onClick: async function() {
            Ld(!0);
            const dd = await Promise.allSettled(Jd.map((dd => Fd.d.deleteSchematicThumbnail(kd, dd.id))));
            if (!Nd.current) return;
            const pd = dd.filter((dd => "rejected" === dd.status));
            pd.length > 0 && console.error("Some rejected thumbnails failed to delete:", pd), Pd()
          },
          disabled: !od || Qd,
          className: "ThumbnailRejectionNoticeAcceptButton",
          children: Qd ? (0, vd.jsx)(gd.b, {}) : Cd("general:accept")
        })]
      })
    }

    function Vd(dd) {
      let {
        thumbnailId: Jd,
        thumbnailName: kd,
        onClose: pd
      } = dd;
      const {
        t: Nd
      } = (0, Zd.B)();
      return (0, vd.jsxs)("div", {
        className: "ThumbnailDeleteConfirm",
        children: [(0, vd.jsx)("div", {
          className: "ThumbnailDeleteConfirmTitle",
          children: Nd("thumbnail:deleteThumbnail")
        }), (0, vd.jsxs)("div", {
          className: "ThumbnailDeleteConfirmImageContainer",
          children: [(0, vd.jsx)("img", {
            className: "ThumbnailDeleteConfirmImage",
            src: `${hd.clientSideServerUrls.s3Url}/customThumbnails/${Jd}.jpg`,
            alt: "Thumbnail to delete"
          }), (0, vd.jsx)("div", {
            className: "ThumbnailGridItemLabel",
            children: kd
          })]
        }), (0, vd.jsx)("div", {
          className: "ThumbnailDeleteConfirmSubtitle",
          children: Nd("thumbnail:deleteThumbnailConfirmation")
        }), (0, vd.jsxs)("div", {
          className: "ThumbnailDeleteConfirmButtons",
          children: [(0, vd.jsxs)(Wd.B, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => pd(!0),
            children: [(0, vd.jsx)(Kd.e, {
              name: "trash-can"
            }), " ", Nd("general:delete")]
          }), (0, vd.jsx)(Wd.f, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => pd(!1),
            children: Nd("general:cancel")
          })]
        })]
      })
    }
    var zd = kd(3018),
      Hd = kd(4867),
      wd = kd(4869),
      Ad = kd(4909);

    function dJ(dd) {
      let {
        schematicData: Jd,
        setTexturePack: kd,
        initializeTexturePack: Nd,
        publishFormEnabled: Wd
      } = dd;
      const {
        t: Pd
      } = (0, Zd.B)(), [gd, Cd] = (0, pd.useState)(null), [Kd, od] = (0, pd.useState)(null), [ld, Ld] = (0, pd.useState)(!1), Od = (0, Yd.d)(), ed = Wd && !ld, Rd = Jd.customTexturePackKey;

      function Id(dd) {
        var Jd;
        Cd(dd.metaData.id), od(null !== (Jd = dd.metaData.fromFolderName) && void 0 !== Jd ? Jd : null), (dd.metaData.id !== zd.s.CUSTOM || dd.metaData.fromFolderName) && kd(dd)
      }
      return (0, pd.useEffect)((() => {
        Rd && (Ld(!0), (0, Hd.d)(Rd).then((dd => {
          var Jd;
          Od.current && (dd ? (Cd(dd.metaData.id), od(null !== (Jd = dd.metaData.fromFolderName) && void 0 !== Jd ? Jd : null), Nd(dd)) : console.error(`No texture pack at ${Rd}`))
        })).catch((dd => {
          console.error("Error fetching texture pack: ", dd)
        })).finally((() => {
          Ld(!1)
        })))
      }), [Rd, Nd, Od]), (0, vd.jsxs)("div", {
        className: "BloxdForm TexturePackSection",
        children: [(0, vd.jsx)("div", {
          className: "SectionTitle",
          children: Pd("customTexturePack:customTexturePack")
        }), (0, vd.jsxs)("div", {
          className: "TexturePackList",
          children: [(0, vd.jsx)("div", {
            className: Qd()("TexturePack", {
              Selected: null === gd && !ld,
              Disabled: !ed
            }),
            onClick: () => {
              ed && (Cd(null), kd(null), od(null))
            },
            children: (0, vd.jsx)("div", {
              className: "TexturePackName",
              children: "No Override"
            })
          }), Object.values(zd.s).map((dd => (0, vd.jsx)(wd.f, {
            id: dd,
            isSelected: dd === gd,
            setSelected: Id,
            disabled: !ed
          }, dd)))]
        }), gd === zd.s.CUSTOM && (0, vd.jsx)(Ad.c, {
          folderName: Kd,
          onTexturePackUpdated: Id,
          disabled: !ed,
          maxFileSizeMb: 25,
          packOwner: "customGame"
        })]
      })
    }
    var JJ = kd(4922);

    function kJ(dd) {
      var Jd;
      let {
        gameCategory: kd,
        setGameCategory: pd,
        disabled: Nd
      } = dd;
      const Pd = null !== (Jd = (0, Ld.hb)(kd)) && void 0 !== Jd ? Jd : "other";
      return (0, vd.jsxs)("div", {
        className: "GameCategoryPicker",
        children: [(0, vd.jsx)(Rd.c, {
          label: "worldBuilder:gameCategoryGroup",
          className: "GameCategoryGroup",
          disabled: Nd,
          children: (0, vd.jsx)(Id.c, {
            options: Ld.$.map((dd => ({
              value: dd,
              label: Ld.Y[dd]
            }))),
            value: Pd,
            onChange: dd => {
              dd.value !== Pd && pd(Ld.T[dd.value][0])
            }
          })
        }), (0, vd.jsx)(Rd.c, {
          label: "worldBuilder:gameCategory",
          className: "GameCategory",
          disabled: Nd,
          children: (0, vd.jsx)("div", {
            className: "GameCategoryOptions",
            children: Ld.T[Pd].map((dd => (0, vd.jsx)(Wd.G, {
              active: dd === kd,
              onClick: () => {
                pd(dd)
              },
              children: (0, Ld.eb)(dd)
            }, dd)))
          })
        })]
      })
    }

    function pJ(dd) {
      let {
        editor: Jd,
        onClose: kd
      } = dd;
      const {
        t: pd
      } = (0, Zd.B)(), {
        schematicData: Nd,
        updateSchematicData: Wd,
        publishFormEnabled: gd,
        formEnabled: Cd
      } = Jd;
      return (0, vd.jsxs)(vd.Fragment, {
        children: [(0, vd.jsxs)(xd, {
          icon: "pen-to-square",
          title: pd("worldBuilder:basicsSection"),
          disabled: !Cd,
          children: [(0, vd.jsx)(qd, {
            label: pd("general:name"),
            caption: pd("worldBuilder:schematicNameTagsHint"),
            children: (0, vd.jsx)(Pd.e, {
              className: "SchematicPageName",
              defaultValue: Nd.name,
              onValueChange: dd => Wd("name", dd),
              placeholderText: pd("worldBuilder:schematicNamePlaceholder"),
              maxLength: od.pb
            })
          }), (0, vd.jsx)(qd, {
            label: pd("general:description"),
            children: (0, vd.jsx)(Pd.e, {
              className: "SchematicPageDescription",
              useTextarea: !0,
              defaultValue: Nd.description,
              onValueChange: dd => Wd("description", dd),
              placeholderText: pd("worldBuilder:schematicDescriptionPlaceholder"),
              maxLength: od.mb
            })
          }), (0, vd.jsx)(kJ, {
            gameCategory: Nd.gameCategory,
            setGameCategory: dd => Wd("gameCategory", dd),
            disabled: !gd
          }), !0 === Nd.gamePublished && (0, vd.jsx)(ud, {
            schematicData: Nd,
            updateSchematicData: Wd,
            publishFormEnabled: gd,
            onClose: function() {
              null === kd || void 0 === kd || kd()
            }
          })]
        }), (0, vd.jsx)(sd, {
          schematicData: Nd,
          updateSchematicData: Wd,
          publishFormEnabled: gd,
          formEnabled: Cd
        }), !0 === Nd.gamePublished && (0, vd.jsx)(xd, {
          icon: "palette",
          title: pd("worldBuilder:texturePackSection"),
          disabled: !Cd,
          children: (0, vd.jsx)(dJ, {
            schematicData: Nd,
            setTexturePack: Jd.setTexturePack,
            initializeTexturePack: Jd.initializeTexturePack,
            publishFormEnabled: gd
          })
        })]
      })
    }

    function NJ(dd) {
      let {
        editor: Jd
      } = dd;
      const {
        t: kd
      } = (0, Zd.B)(), {
        schematicData: pd,
        formEnabled: Nd,
        hasUnsavedChanges: Pd
      } = Jd, od = Nd && Pd;
      return (0, vd.jsxs)("footer", {
        className: "SchematicPageFooter",
        children: [Nd && Pd && (0, vd.jsxs)("div", {
          className: "SchematicPageFooterStatus",
          children: [(0, vd.jsx)("span", {
            className: "SchematicPageFooterStatusDot"
          }), kd("worldBuilder:unsavedChanges")]
        }), (0, vd.jsx)(Cd.f, {
          tooltipInner: (0, vd.jsx)("div", {
            className: "SaveButtonTooltip",
            children: kd(Nd && !Pd ? "worldBuilder:saveChangesNoneDescription" : "worldBuilder:saveChangesDescription")
          }),
          children: (0, vd.jsxs)(Wd.d, {
            className: "SaveChangesButton",
            onClick: () => Jd.saveSchematic(pd.gamePublished),
            disabled: !od,
            children: [(0, vd.jsxs)("span", {
              className: Nd ? "" : "SaveChangesButtonBodyHidden",
              children: [(0, vd.jsx)(Kd.e, {
                name: "wrench"
              }), " ", kd("worldBuilder:saveChanges")]
            }), !Nd && (0, vd.jsx)(gd.b, {})]
          })
        })]
      })
    }

    function WJ(dd) {
      let {
        schematic: Jd,
        onSchematicUpdate: kd,
        onClose: Nd,
        inSourceWorld: Pd
      } = dd;
      const {
        t: gd
      } = (0, Zd.B)();

      function Cd() {
        null === Nd || void 0 === Nd || Nd()
      }
      const Kd = (0, JJ.c)(Jd, {
        onNavigateAway: Cd,
        inSourceWorld: Pd
      });
      return (0, pd.useEffect)((() => {
        null === kd || void 0 === kd || kd(Kd.schematicData)
      }), [Kd.schematicData, kd]), (0, vd.jsxs)("div", {
        className: "SchematicPage SchematicPagePopupVariant",
        children: [(0, vd.jsxs)("div", {
          className: "SchematicPageBody",
          children: [(0, vd.jsx)(Wd.b, {
            onClick: Cd,
            children: gd("worldBuilder:back")
          }), (0, vd.jsx)(xd, {
            icon: "rocket-launch",
            title: gd("worldBuilder:actionsSection"),
            disabled: !Kd.formEnabled,
            children: (0, vd.jsx)(ad.e, {
              editor: Kd
            })
          }), (0, vd.jsx)(pJ, {
            editor: Kd,
            onClose: Cd
          })]
        }), (0, vd.jsx)(NJ, {
          editor: Kd
        })]
      })
    }

    function PJ(dd) {
      let {
        schematic: Jd,
        onSchematicUpdate: kd,
        onClose: pd,
        inSourceWorld: Wd
      } = dd;
      Nd.NotificationProvider.showCustomPopup({
        body: dd => (0, vd.jsx)(WJ, {
          schematic: Jd,
          onSchematicUpdate: kd,
          onClose: dd,
          inSourceWorld: Wd
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: pd,
        unlockPointerKey: "schematicPagePopup"
      })
    }
  },
  4837: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => od
    });
    var pd = kd(1044),
      Nd = kd.n(pd),
      Wd = kd(1211),
      Pd = kd(1059),
      Zd = kd(1461),
      gd = kd(1384),
      Cd = kd(1359),
      Kd = kd(1103);

    function od(dd) {
      let {
        editor: Jd,
        className: kd
      } = dd;
      const {
        t: pd
      } = (0, Wd.B)(), {
        schematicData: od,
        formEnabled: ld,
        publishFormEnabled: Qd
      } = Jd, Ld = !ld || !Qd;
      return (0, Kd.jsxs)("div", {
        className: Nd()("PublishButtonContainer", kd),
        children: [Jd.canEditSourceWorld && (0, Kd.jsxs)(Zd.d, {
          onClick: Jd.editSourceWorld,
          disabled: Ld,
          children: [(0, Kd.jsx)(Pd.e, {
            name: "edit"
          }), " ", pd("worldBuilder:editSourceWorld")]
        }), !od.gamePublished && (0, Kd.jsx)(gd.f, {
          tooltipInner: (0, Kd.jsx)("div", {
            className: "PublishButtonTooltip",
            children: pd("worldBuilder:publishAsGameDescription")
          }),
          children: (0, Kd.jsxs)(Zd.j, {
            onClick: () => Jd.saveSchematic(!0),
            disabled: Ld,
            children: [(0, Kd.jsx)(Pd.e, {
              name: "rocket-launch"
            }), " ", pd("worldBuilder:publishAsGame"), " ", (0, Kd.jsx)(Pd.e, {
              name: "info-circle"
            })]
          })
        }), !0 === od.gamePublished && (0, Kd.jsxs)(Kd.Fragment, {
          children: [(0, Kd.jsx)(gd.f, {
            tooltipInner: (0, Kd.jsx)("div", {
              className: "PublishButtonTooltip",
              children: pd("worldBuilder:unpublishAsGameDescription")
            }),
            children: (0, Kd.jsxs)(Zd.B, {
              onClick: Jd.unpublishSchematic,
              disabled: Ld,
              children: [(0, Kd.jsx)(Pd.e, {
                name: "rocket-launch"
              }), " ", pd("worldBuilder:unpublishAsGame"), " ", (0, Kd.jsx)(Pd.e, {
                name: "info-circle"
              })]
            })
          }), (0, Kd.jsxs)(Zd.d, {
            onClick: Jd.playGame,
            disabled: Ld,
            children: [(0, Kd.jsx)(Pd.e, {
              name: "joystick"
            }), " ", pd("general:playGame")]
          })]
        }), !ld && (0, Kd.jsx)(Cd.b, {
          loaderType: "Secondary"
        })]
      })
    }
  },
  4867: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Nd
    });
    var pd = kd(1220);
    async function Nd(dd) {
      const Jd = await fetch(`${pd.clientSideServerUrls.s3Url}/${dd}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === Jd.status || 403 === Jd.status) return null;
      if (!Jd.ok) throw new Error(`Failed to download the texture pack (${Jd.status})`);
      return await Jd.json()
    }
  },
  4922: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => ed
    });
    var pd = kd(56),
      Nd = kd(1352),
      Wd = kd(1013),
      Pd = kd(149),
      Zd = kd(1578),
      gd = kd(22),
      Cd = kd(1932),
      Kd = kd(1520),
      od = kd(4434),
      ld = kd(1371),
      Qd = kd(1140),
      Ld = kd(1543);

    function Od(dd, Jd) {
      return {
        schematicId: dd.schematicId,
        name: dd.name,
        description: dd.description,
        gamePublished: Jd,
        gameCategory: dd.gameCategory,
        defaultGamemode: dd.defaultGamemode,
        voidDeathHeight: dd.voidDeathHeight,
        disableKeepInventory: dd.disableKeepInventory,
        disableTpRequests: dd.disableTpRequests,
        disableLobbySpawn: dd.disableLobbySpawn,
        disableMobs: dd.disableMobs,
        disableSpawnProtection: dd.disableSpawnProtection,
        disableFallDamage: dd.disableFallDamage,
        worldBorder: dd.worldBorder,
        hideLobbyCode: dd.hideLobbyCode,
        enableSmpMarketplace: dd.enableSmpMarketplace,
        enableSurvivalGuns: dd.enableSurvivalGuns,
        enableSpawnReset: dd.enableSpawnReset,
        enableDayNight: dd.enableDayNight,
        persistWorld: dd.persistWorld,
        persistInventory: dd.persistInventory
      }
    }

    function ed(dd) {
      let {
        onNavigateAway: Jd,
        inSourceWorld: kd = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const {
        userContext: ed
      } = (0, Qd.c)(), Rd = (0, Ld.useNavigatePreserveSearch)(), [Id, Gd] = (0, pd.useState)({
        ...dd
      }), [vd, xd] = (0, pd.useState)("Enter"), [qd, Bd] = (0, pd.useState)(void 0), sd = (0, pd.useRef)(Od(dd, dd.gamePublished)), ad = (0, pd.useRef)(void 0), Md = "Enter" === vd, Fd = ed.playerHasRank("developer") || ed.playerHasRank("admin") || "Enter" === vd && !1 !== Id.schematicContainsSpawnBlock, Yd = void 0 !== qd && qd !== ad.current || JSON.stringify(Od(Id, Id.gamePublished)) !== JSON.stringify(sd.current);

      function md(dd, Jd) {
        Gd((kd => ({
          ...kd,
          [dd]: Jd
        })))
      }
      const bd = (0, pd.useCallback)((dd => {
        ad.current = dd, Bd(dd)
      }), []);

      function Sd(dd) {
        xd("Loading");
        const Jd = Od(Id, dd),
          kd = qd !== ad.current ? qd : void 0;
        Kd.d.updateSchematic(ed, Jd, kd).then((kd => {
          let {
            customTexturePackKey: pd
          } = kd;
          xd("Success"), md("customTexturePackKey", pd), sd.current = Jd, ad.current = void 0, Bd(void 0), setTimeout((() => {
            md("gamePublished", dd), xd("Enter")
          }), 1e3)
        })).catch((dd => {
          var Jd;
          (console.error("Failed to save schematic:", dd), xd("Error"), dd instanceof Pd.c && dd.errorMessageForUser) && ld.NotificationProvider.showAlertPopup({
            title: "worldBuilder:changesNotSaved",
            subtitle: dd.errorMessageForUser,
            textOpts: {
              subtitle: null !== (Jd = dd.errorMessageTranslationParams) && void 0 !== Jd ? Jd : void 0
            },
            confirmText: "general:ok"
          });
          setTimeout((() => {
            xd("Enter")
          }), 1e3)
        }))
      }
      return {
        schematicData: Id,
        updateSchematicData: md,
        setTexturePack: Bd,
        initializeTexturePack: bd,
        updateState: vd,
        formEnabled: Md,
        publishFormEnabled: Fd,
        hasUnsavedChanges: Yd,
        canEditSourceWorld: !kd,
        saveSchematic: Sd,
        unpublishSchematic: function() {
          ld.NotificationProvider.showPromptPopup({
            icon: "rocket-launch",
            title: "worldBuilder:unpublishAsGameConfirmTitle",
            subtitle: "worldBuilder:unpublishAsGameConfirmSubtitle",
            confirmText: "worldBuilder:unpublishAsGame",
            cancelText: "general:cancel",
            unlockPointerKey: "unpublishGamePrompt"
          }).getResult().then((dd => {
            !0 === dd && Sd(!1)
          }))
        },
        editSourceWorld: function() {
          xd("Loading"), od.e.getSourceWorld(Id.schematicId).then((dd => {
            Cd.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, gd.f)("other"), Rd((0, Nd.c)("classic", dd)), null === Jd || void 0 === Jd || Jd()
          })).catch((dd => {
            console.error("Failed to get source world:", dd), xd("Error"), setTimeout((() => {
              xd("Enter")
            }), 1e3)
          }))
        },
        playGame: function() {
          Cd.gameBridge.send("leaveGame", {
            reloadPath: "/"
          }), Rd((0, Zd.v)((0, Wd.t)(Id.schematicId), Id)), null === Jd || void 0 === Jd || Jd()
        }
      }
    }
  },
  4825: () => {}
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);