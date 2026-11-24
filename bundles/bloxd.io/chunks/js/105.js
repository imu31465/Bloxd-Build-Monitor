export const id = 105;
export const ids = [105];
export const modules = {
  4881: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => pm,
      h: () => Rm,
      i: () => Em
    });
    fm(4887);
    var hm = fm(1208),
      Am = fm(1080),
      am = fm.n(Am),
      xm = fm(1362),
      wm = (fm(59), fm(4304)),
      Dm = fm(1089),
      im = fm(1135);

    function Rm(mm) {
      let {
        children: Tm,
        label: fm,
        className: Am,
        circleInfoText: wm,
        disabled: Rm,
        onLabelClick: pm
      } = mm;
      const {
        t: Em
      } = (0, hm.A)(), om = (0, im.jsxs)("div", {
        className: am()("Label", {
          ClickableLabel: void 0 !== pm
        }),
        onClick: pm,
        children: [Em(fm), wm && (0, im.jsx)(Dm.c, {
          name: "circle-info"
        })]
      });
      return (0, im.jsxs)("div", {
        className: am()("LabeledInput", {
          [Am]: Am,
          DisabledLabelInput: Rm
        }),
        children: [wm && (0, im.jsx)(xm.h, {
          tooltipInner: (0, im.jsx)("div", {
            className: "LabeledInputTooltip",
            children: Em(wm)
          }),
          children: om
        }), !wm && om, Tm]
      })
    }

    function pm(mm) {
      let {
        checked: Tm,
        setChecked: fm
      } = mm;
      return (0, im.jsx)("div", {
        className: "OtherInput ClickableOtherInput",
        "data-pad-focusable": !0,
        onClick: mm => {
          fm(!Tm)
        },
        children: (0, im.jsx)(wm.b, {
          checked: Tm,
          onChange: mm => {
            fm(mm.target.checked)
          },
          disabled: !1
        })
      })
    }

    function Em(mm) {
      let {
        checked: Tm,
        setChecked: fm,
        disabled: hm
      } = mm;
      return (0, im.jsx)("div", {
        className: am()("SwitchContainer", {
          SwitchContainerDisabled: hm
        }),
        onClick: () => {
          hm || fm(!Tm)
        },
        children: (0, im.jsx)(wm.b, {
          className: "SwitchCheckbox",
          checked: Tm,
          onChange: mm => {
            fm(mm.target.checked)
          },
          disabled: !!hm
        })
      })
    }
  },
  4889: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => im
    });
    var hm = fm(1080),
      Am = fm.n(hm),
      am = fm(4564),
      xm = fm(1208),
      wm = fm(1135);
    const Dm = [...am.h, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function im(mm) {
      const {
        disabled: Tm,
        hideWrapper: fm
      } = mm, {
        t: hm
      } = (0, xm.A)(), im = mm.advancedMode ? Dm.map((Tm => [Tm, mm.callbacks[Tm]])) : am.h.map((Tm => [Tm, mm.callbacks[Tm]])), pm = (0, wm.jsx)("div", {
        className: Am()("PluginsGrid", {
          SectionBody: !fm
        }),
        children: im.map((mm => {
          let [fm, hm] = mm;
          return (0, wm.jsx)(Rm, {
            plugin: fm,
            callbacks: hm,
            disabled: Tm
          }, fm)
        }))
      });
      return fm ? pm : (0, wm.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, wm.jsx)("div", {
          className: "SectionTitle",
          children: hm("worldBuilder:pluginsSection")
        }), pm]
      })
    }

    function Rm(mm) {
      let {
        plugin: Tm,
        callbacks: {
          isEnabled: fm,
          Dk: hm
        },
        disabled: am
      } = mm;
      const {
        t: Dm
      } = (0, xm.A)(), im = fm();
      return (0, wm.jsxs)("div", {
        className: Am()("PluginCard", {
          PluginCardEnabled: im,
          PluginCardDisabledForm: am
        }),
        "data-pad-focusable": !0,
        "aria-disabled": am || void 0,
        onClick: () => {
          am || hm(!im)
        },
        children: [(0, wm.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, wm.jsx)("img", {
            src: `/textures/games/classic/customGames/${Tm}.png`,
            alt: Tm
          })
        }), (0, wm.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, wm.jsx)("div", {
            className: "PluginCardTitle",
            children: Dm(pm[Tm])
          }), (0, wm.jsx)("div", {
            className: "PluginCardDescription",
            children: Dm(Em[Tm])
          })]
        }), (0, wm.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: Dm(im ? "general:on" : "general:off")
        })]
      })
    }
    const pm = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      Em = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  4877: (mm, Tm, fm) => {
    fm.d(Tm, {
      h: () => aT,
      d: () => AT,
      f: () => hT,
      j: () => xT
    });
    var hm = fm(59),
      Am = fm(1354),
      am = fm(1454),
      xm = fm(1676),
      wm = fm(1208),
      Dm = fm(1345),
      im = fm(1362),
      Rm = fm(1089),
      pm = fm(1235),
      Em = fm(1080),
      om = fm.n(Em),
      Om = fm(339),
      Ym = fm(4564),
      qm = fm(1247),
      jm = fm(4881),
      Vm = fm(3127),
      Im = fm(4889),
      Km = fm(1135);

    function Qm(mm) {
      let {
        icon: Tm,
        title: fm,
        disabled: hm,
        children: Am
      } = mm;
      return (0, Km.jsxs)("div", {
        className: om()("ManageCard", {
          ManageCardDisabled: hm
        }),
        children: [(0, Km.jsxs)("div", {
          className: "ManageCardHead",
          children: [(0, Km.jsx)("div", {
            className: "ManageCardIcon",
            children: (0, Km.jsx)(Rm.c, {
              name: Tm
            })
          }), (0, Km.jsx)("div", {
            children: (0, Km.jsx)("h2", {
              className: "ManageCardTitle",
              children: fm
            })
          })]
        }), (0, Km.jsxs)("div", {
          className: "ManageCardBody",
          children: [Am, hm && (0, Km.jsx)("div", {
            className: "ManageCardDisabledOverlay"
          })]
        })]
      })
    }

    function nm(mm) {
      let {
        label: Tm,
        caption: fm,
        children: hm
      } = mm;
      return (0, Km.jsxs)("div", {
        className: "ManageStackedField",
        children: [(0, Km.jsx)("div", {
          className: "ManageStackedFieldLabel",
          children: Tm
        }), hm, fm && (0, Km.jsx)("div", {
          className: "ManageStackedFieldCaption",
          children: fm
        })]
      })
    }

    function Jm(mm) {
      let {
        label: Tm,
        caption: fm,
        disabled: hm,
        children: Am
      } = mm;
      return (0, Km.jsxs)("div", {
        className: om()("ManageField", {
          ManageFieldDisabled: hm
        }),
        children: [(0, Km.jsxs)("div", {
          className: "ManageFieldText",
          children: [(0, Km.jsx)("div", {
            className: "ManageFieldLabel",
            children: Tm
          }), (0, Km.jsx)("div", {
            className: "ManageFieldCaption",
            children: fm
          })]
        }), (0, Km.jsx)("div", {
          className: "ManageFieldControl",
          children: Am
        })]
      })
    }

    function cm(mm) {
      var Tm, fm;
      let {
        schematicData: hm,
        updateSchematicData: Am,
        publishFormEnabled: am,
        formEnabled: xm
      } = mm;
      const {
        t: Dm
      } = (0, wm.A)(), im = !am, Rm = {
        tpRequests: {
          isEnabled: () => !hm.disableTpRequests,
          Dk: mm => Am("disableTpRequests", !mm)
        },
        spawnProtection: {
          isEnabled: () => !hm.disableSpawnProtection,
          Dk: mm => Am("disableSpawnProtection", !mm)
        },
        spawnReset: {
          isEnabled: () => !!hm.enableSpawnReset,
          Dk: mm => Am("enableSpawnReset", mm)
        },
        smpMarketplace: {
          isEnabled: () => !!hm.enableSmpMarketplace,
          Dk: mm => Am("enableSmpMarketplace", mm)
        },
        survivalGuns: {
          isEnabled: () => !!hm.enableSurvivalGuns,
          Dk: mm => Am("enableSurvivalGuns", mm)
        },
        fallDamage: {
          isEnabled: () => !hm.disableFallDamage,
          Dk: mm => Am("disableFallDamage", !mm)
        },
        dayNight: {
          isEnabled: () => !!hm.enableDayNight,
          Dk: mm => Am("enableDayNight", mm)
        }
      };
      return (0, Km.jsxs)(Km.Fragment, {
        children: [!1 === hm.schematicContainsSpawnBlock && (0, Km.jsx)("div", {
          className: "ManageWarningBanner",
          children: Dm("worldBuilder:mustContainSpawnBlock")
        }), (0, Km.jsxs)("div", {
          className: "ManageSettingsGrid",
          children: [(0, Km.jsxs)(Qm, {
            icon: "globe",
            title: Dm("worldBuilder:worldRulesSection"),
            disabled: !xm,
            children: [(0, Km.jsx)(Jm, {
              label: Dm("classic:defaultGamemode"),
              caption: Dm("classic:defaultGamemodeDescription"),
              disabled: im,
              children: (0, Km.jsx)(Vm.d, {
                controlClassName: "ManageDropdown",
                options: Ym.B.map((mm => ({
                  value: mm,
                  label: Om.q[mm]
                }))),
                value: hm.defaultGamemode,
                onChange: mm => Am("defaultGamemode", mm.value)
              })
            }), (0, Km.jsx)(Jm, {
              label: Dm("classic:voidDeathHeight"),
              caption: Dm("classic:voidDeathHeightDescription"),
              disabled: im,
              children: (0, Km.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, Km.jsx)("input", {
                  type: "number",
                  max: qm.x,
                  value: null !== (Tm = hm.voidDeathHeight) && void 0 !== Tm ? Tm : "",
                  onChange: mm => {
                    const Tm = parseInt(mm.target.value);
                    Am("voidDeathHeight", Tm)
                  }
                }), (0, Km.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: Dm("worldBuilder:blocksUnit")
                })]
              })
            }), (0, Km.jsx)(Jm, {
              label: Dm("classic:worldBorder"),
              caption: Dm("classic:worldBorderDescription"),
              disabled: im,
              children: (0, Km.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, Km.jsx)("input", {
                  type: "number",
                  min: qm.C,
                  max: qm.z,
                  placeholder: Dm("worldBuilder:noWorldBorderLimit"),
                  value: null !== (fm = hm.worldBorder) && void 0 !== fm ? fm : "",
                  onChange: mm => {
                    const Tm = parseInt(mm.target.value);
                    Am("worldBorder", isNaN(Tm) ? null : Tm)
                  }
                }), (0, Km.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: Dm("worldBuilder:blocksUnit")
                })]
              })
            }), (0, Km.jsx)(Jm, {
              label: Dm("classic:disableMobs"),
              caption: Dm("classic:disableMobsDescription"),
              disabled: im,
              children: (0, Km.jsx)(jm.i, {
                checked: hm.disableMobs,
                setChecked: mm => Am("disableMobs", mm),
                disabled: im
              })
            })]
          }), (0, Km.jsxs)(Qm, {
            icon: "user-group",
            title: Dm("worldBuilder:playerAndLobbySection"),
            disabled: !xm,
            children: [(0, Km.jsx)(Jm, {
              label: Dm("classic:disableKeepInventory"),
              caption: Dm("classic:disableKeepInventoryDescription"),
              disabled: im,
              children: (0, Km.jsx)(jm.i, {
                checked: hm.disableKeepInventory,
                setChecked: mm => Am("disableKeepInventory", mm),
                disabled: im
              })
            }), (0, Km.jsx)(Jm, {
              label: Dm("classic:persistInventory"),
              caption: Dm("classic:persistInventoryDescription"),
              disabled: im,
              children: (0, Km.jsx)(Vm.d, {
                controlClassName: "ManageDropdown",
                options: Ym.l.map((mm => ({
                  value: mm,
                  label: Om.g[mm]
                }))),
                value: hm.persistInventory,
                onChange: mm => Am("persistInventory", mm.value)
              })
            }), (0, Km.jsx)(Jm, {
              label: Dm("classic:persistWorld"),
              caption: Dm("classic:persistWorldDescription"),
              disabled: im,
              children: (0, Km.jsx)(jm.i, {
                checked: hm.persistWorld,
                setChecked: mm => Am("persistWorld", mm),
                disabled: im
              })
            }), (0, Km.jsx)(Jm, {
              label: Dm("classic:disableLobbySpawn"),
              caption: Dm("classic:disableLobbySpawnDescription"),
              disabled: im,
              children: (0, Km.jsx)(jm.i, {
                checked: hm.disableLobbySpawn,
                setChecked: mm => Am("disableLobbySpawn", mm),
                disabled: im
              })
            }), (0, Km.jsx)(Jm, {
              label: Dm("classic:hideLobbyCode"),
              caption: Dm("classic:hideLobbyCodeDescription"),
              disabled: im,
              children: (0, Km.jsx)(jm.i, {
                checked: hm.hideLobbyCode,
                setChecked: mm => Am("hideLobbyCode", mm),
                disabled: im
              })
            })]
          })]
        }), (0, Km.jsx)(Qm, {
          icon: "layer-group",
          title: Dm("worldBuilder:pluginsSection"),
          disabled: !xm,
          children: (0, Km.jsx)(Im.c, {
            callbacks: Rm,
            disabled: im,
            advancedMode: !0,
            hideWrapper: !0
          })
        })]
      })
    }
    var zm = fm(4897),
      Zm = fm(4304),
      km = fm(1494),
      bm = fm(3486),
      Sm = fm(1160),
      em = fm(4848),
      Nm = fm(4904),
      Gm = fm(1456);
    const Xm = 50,
      Pm = .3;
    async function Hm(mm) {
      const Tm = await
      function(mm) {
        return new Promise(((Tm, fm) => {
          const hm = new FileReader;
          hm.onload = () => Tm(hm.result), hm.onerror = fm, hm.readAsDataURL(mm)
        }))
      }(mm), fm = await
      function(mm) {
        return new Promise(((Tm, fm) => {
          const hm = new Image;
          hm.onload = () => Tm(hm), hm.onerror = () => fm(new Error("Failed to load image")), hm.src = mm
        }))
      }(Tm);
      if (fm.naturalHeight > fm.naturalWidth) throw new ym;
      const hm = 1024 * Xm,
        {
          dataUrl: Am,
          finalQuality: am
        } = function(mm, Tm) {
          const fm = document.createElement("canvas");
          fm.width = mm.naturalWidth, fm.height = mm.naturalHeight, fm.getContext("2d").drawImage(mm, 0, 0);
          let hm = .92,
            Am = fm.toDataURL("image/jpeg", hm);
          for (; .75 * Am.length > Tm && hm > .05;) hm -= .05, Am = fm.toDataURL("image/jpeg", hm);
          return {
            dataUrl: Am,
            finalQuality: hm
          }
        }(fm, hm);
      if (Math.ceil(.75 * Am.length) > hm) throw new Cm;
      return {
        base64Jpg: Am,
        heavilyCompressed: am < Pm
      }
    }
    class ym extends Error {}
    class Cm extends Error {}
    var rm = function(mm) {
      return mm[mm.NOT_LOGGED_IN = 0] = "NOT_LOGGED_IN", mm[mm.THUMBNAIL_LIMIT_REACHED = 1] = "THUMBNAIL_LIMIT_REACHED", mm
    }(rm || {});

    function sm(mm) {
      var Tm;
      let {
        schematicId: fm,
        hasReadUploadPolicy: Am,
        onPolicyValidationError: Dm,
        onThumbnailReady: im
      } = mm;
      const {
        t: Em
      } = (0, wm.A)(), [Om, Ym] = (0, hm.useState)(null), [qm, jm] = (0, hm.useState)(""), [Vm, Im] = (0, hm.useState)(""), [Qm, nm] = (0, hm.useState)(!0), [Jm, cm] = (0, hm.useState)(!1), zm = (0, hm.useRef)(!1), [Zm, km] = (0, hm.useState)(null), [bm, Sm] = (0, hm.useState)(!1), [em, Gm] = (0, hm.useState)(!1), Xm = (0, hm.useRef)(0), {
        getRootProps: Pm,
        getInputProps: rm,
        isDragActive: sm
      } = (0, Nm.e)({
        accept: {
          "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp"]
        },
        multiple: !1,
        onDrop: async mm => {
          if (0 === mm.length) return;
          const Tm = mm[0],
            fm = ++Xm.current;
          km(null), Sm(!1), Ym(null), jm(Tm.name);
          try {
            const mm = await Hm(Tm);
            if (fm !== Xm.current) return;
            Ym(mm), Sm(mm.heavilyCompressed)
          } catch (hm) {
            if (fm !== Xm.current) return;
            km(Em(hm instanceof ym ? "thumbnail:portraitImagesNotAllowed" : hm instanceof Cm ? "thumbnail:couldNotCompressImage" : "thumbnail:failedToUploadImage"))
          }
        },
        useFsAccessApi: !1
      }), lm = qm.length <= 30 ? qm : `${qm.slice(0,27)}...`, Mm = null !== (Tm = null === Om || void 0 === Om ? void 0 : Om.base64Jpg) && void 0 !== Tm ? Tm : null, um = Vm.trim(), Bm = um.length >= pm.m && um.length <= pm.j, Lm = em && !Om && !Zm, tm = em && !Bm;
      return (0, Km.jsxs)("div", {
        className: "ThumbnailUploadContainer",
        children: [(0, Km.jsxs)("div", {
          ...Pm({
            className: om()("ThumbnailUploadDropzone", {
              ActiveDrag: sm,
              ValidationError: Lm
            })
          }),
          children: [(0, Km.jsx)("input", {
            ...rm()
          }), !sm && Mm ? (0, Km.jsxs)(Km.Fragment, {
            children: [(0, Km.jsxs)("div", {
              className: "ThumbnailAspectPreviews",
              children: [(0, Km.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, Km.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "1:1"
                }), (0, Km.jsx)("div", {
                  className: "ThumbnailAspectFrame Square",
                  children: (0, Km.jsx)("img", {
                    src: Mm,
                    alt: "1:1 preview"
                  })
                })]
              }), (0, Km.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, Km.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "16:9"
                }), (0, Km.jsx)("div", {
                  className: "ThumbnailAspectFrame Wide",
                  children: (0, Km.jsx)("img", {
                    src: Mm,
                    alt: "16:9 preview"
                  })
                })]
              })]
            }), (0, Km.jsxs)("div", {
              children: [(0, Km.jsx)("div", {
                className: "ThumbnailUploadInstructions Active",
                children: lm
              }), (0, Km.jsx)("div", {
                className: "ThumbnailUploadInstructions Preview",
                children: Em("thumbnail:preview")
              })]
            })]
          }) : (0, Km.jsxs)(Km.Fragment, {
            children: [(0, Km.jsx)("div", {
              className: "ThumbnailUploadIcon",
              children: (0, Km.jsx)(Rm.c, {
                name: "image"
              })
            }), (0, Km.jsx)("div", {
              className: "ThumbnailUploadInstructions",
              children: Em("thumbnail:dragImageHere")
            })]
          })]
        }), Lm && (0, Km.jsx)("div", {
          className: "ThumbnailUploadError",
          children: Em("thumbnail:imageRequired")
        }), (0, Km.jsx)(xm.e, {
          className: om()("ThumbnailUploadNameInput", {
            ValidationError: tm
          }),
          placeholderText: Em("thumbnail:thumbnailName"),
          defaultValue: Vm,
          onValueChange: mm => {
            Im(mm)
          },
          maxLength: pm.j
        }), tm && (0, Km.jsx)("div", {
          className: "ThumbnailUploadError",
          children: Em("thumbnail:nameRequired", {
            min: pm.m,
            max: pm.j
          })
        }), (0, Km.jsxs)("label", {
          className: "ThumbnailUploadCheckbox",
          children: [(0, Km.jsx)("input", {
            type: "checkbox",
            checked: Qm,
            onChange: mm => {
              nm(mm.target.checked)
            }
          }), Em("thumbnail:setAsThumbnailOnceApproved")]
        }), bm && (0, Km.jsx)("div", {
          className: "ThumbnailUploadWarning",
          children: Em("thumbnail:heavyCompressionWarning")
        }), Zm && (0, Km.jsx)("div", {
          className: "ThumbnailUploadError",
          children: Zm
        }), (0, Km.jsx)(am.m, {
          disabled: Jm,
          className: "ThumbnailUploadButton",
          onClick: async () => {
            if (Gm(!0), !zm.current && Om && Bm && Am) {
              zm.current = !0, cm(!0), km(null);
              try {
                await im(Om.base64Jpg, um, Qm ? fm : null)
              } catch (mm) {
                km(mm.errorMessageForUser ? Em(mm.errorMessageForUser, mm.errorMessageTranslationParams) : Em("thumbnail:failedToUploadImage"))
              } finally {
                zm.current = !1, cm(!1)
              }
            } else Am || Dm()
          },
          children: Em(Jm ? "thumbnail:processing" : "thumbnail:uploadThumbnail")
        })]
      })
    }
    const lm = 2e3;

    function Mm(mm) {
      let {
        schematicId: Tm,
        ownedThumbnailCount: fm,
        onClose: Am,
        onThumbnailReady: am
      } = mm;
      const {
        t: xm
      } = (0, wm.A)(), {
        userContext: Dm
      } = (0, Sm.e)(), [im, Em] = (0, hm.useState)(!1), [Om, Ym] = (0, hm.useState)(!1), [qm, jm] = (0, hm.useState)(!1), Vm = (0, hm.useRef)();
      (0, hm.useEffect)((() => () => {
        clearTimeout(Vm.current)
      }), []);
      const Im = function(mm, Tm) {
        const fm = [];
        return mm.isLoggedIn() || fm.push(rm.NOT_LOGGED_IN), Tm >= pm.N && fm.push(rm.THUMBNAIL_LIMIT_REACHED), fm
      }(Dm, fm);
      if (Im.length > 0) {
        const mm = {
          [rm.NOT_LOGGED_IN]: {
            key: "thumbnail:mustBeLoggedInToUpload"
          },
          [rm.THUMBNAIL_LIMIT_REACHED]: {
            key: "thumbnail:thumbnailLimitReachedPleaseDelete",
            params: {
              max: pm.N
            }
          }
        };
        return (0, Km.jsxs)("div", {
          className: "ThumbnailUploaderInner",
          children: [(0, Km.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: xm("thumbnail:cannotUploadThumbnail")
          }), Im.map(((Tm, fm) => {
            const hm = mm[Tm];
            return (0, Km.jsxs)("div", {
              className: "CannotUploadThumbnailItem",
              children: [(0, Km.jsx)(Rm.c, {
                name: "triangle-exclamation"
              }), (0, Km.jsx)("span", {
                children: xm(hm.key, hm.params)
              })]
            }, fm)
          }))]
        })
      }
      return (0, Km.jsxs)("div", {
        className: om()("ThumbnailUploaderInner", {
          ThumbnailUploaderSuccess: im
        }),
        children: [im && (0, Km.jsxs)("div", {
          className: "ThumbnailUploadSuccessOverlay",
          children: [(0, Km.jsxs)("div", {
            className: "ThumbnailUploadSuccessIcon FullyFancyText AnimFadeInScaleUp",
            children: [(0, Km.jsx)(Rm.c, {
              name: "check"
            }), (0, Km.jsx)(Gm.d, {})]
          }), (0, Km.jsx)("div", {
            className: "ThumbnailUploadSuccessText AnimFadeInScaleUp",
            children: xm("thumbnail:thumbnailUploaded")
          })]
        }), (0, Km.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: xm("thumbnail:uploadThumbnail")
        }), (0, Km.jsxs)("div", {
          className: "ThumbnailUploaderBody",
          children: [(0, Km.jsxs)("div", {
            className: "ThumbnailUploaderLeft",
            children: [(0, Km.jsx)("h3", {
              className: "SchematicPopupSubtitle",
              children: xm("thumbnail:chooseImage", {
                maxSizeKb: Xm
              })
            }), (0, Km.jsx)(sm, {
              schematicId: Tm,
              hasReadUploadPolicy: Om,
              onPolicyValidationError: () => {
                jm(!0)
              },
              onThumbnailReady: async (mm, Tm, fm) => {
                await am(mm, Tm, fm), Em(!0), Vm.current = setTimeout(Am, lm)
              }
            })]
          }), (0, Km.jsxs)("div", {
            className: "ThumbnailUploadPolicy",
            children: [(0, Km.jsx)("h3", {
              className: "ThumbnailUploadPolicyTitle",
              children: xm("thumbnail:uploadPolicy")
            }), (0, Km.jsxs)("ul", {
              className: "ThumbnailUploadPolicyList",
              children: [(0, Km.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, Km.jsx)(Rm.c, {
                  name: "check"
                }), (0, Km.jsx)("span", {
                  children: xm("thumbnail:policyFollowGuidelines")
                })]
              }), (0, Km.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, Km.jsx)(Rm.c, {
                  name: "check"
                }), (0, Km.jsx)("span", {
                  children: xm("thumbnail:policyInGameAssets")
                })]
              }), (0, Km.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, Km.jsx)(Rm.c, {
                  name: "check"
                }), (0, Km.jsx)("span", {
                  children: xm("thumbnail:policyLimitText")
                })]
              }), (0, Km.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, Km.jsx)(Rm.c, {
                  name: "x"
                }), (0, Km.jsx)("span", {
                  children: xm("thumbnail:policyCopyrightContent")
                })]
              }), (0, Km.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, Km.jsx)(Rm.c, {
                  name: "x"
                }), (0, Km.jsx)("span", {
                  children: xm("thumbnail:policyOutOfGameAssets")
                })]
              }), (0, Km.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, Km.jsx)(Rm.c, {
                  name: "x"
                }), (0, Km.jsx)("span", {
                  children: xm("thumbnail:policyBloxdTags")
                })]
              }), (0, Km.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, Km.jsx)(Rm.c, {
                  name: "x"
                }), (0, Km.jsx)("span", {
                  children: xm("thumbnail:policyMustReflectGame")
                })]
              })]
            }), (0, Km.jsxs)("label", {
              className: om()("ThumbnailUploadCheckbox Policy", {
                ValidationError: qm && !Om
              }),
              children: [(0, Km.jsx)("input", {
                type: "checkbox",
                checked: Om,
                onChange: mm => {
                  Ym(mm.target.checked)
                }
              }), xm("thumbnail:agreeToUploadPolicy")]
            }), qm && !Om && (0, Km.jsx)("div", {
              className: "ThumbnailPolicyError",
              children: xm("thumbnail:policyRequired")
            })]
          })]
        })]
      })
    }
    var um = fm(1214);
    const Bm = {
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

    function Lm(mm) {
      var Tm, fm;
      let {
        schematicData: xm,
        updateSchematicData: im,
        publishFormEnabled: pm,
        onClose: Em
      } = mm;
      const {
        t: Om
      } = (0, wm.A)(), {
        userContext: Ym,
        isUserContextUpdating: qm
      } = (0, Sm.e)(), jm = (0, bm.c)(), [Vm, Im] = (0, hm.useState)([]), [Qm, nm] = (0, hm.useState)([]), [Jm, cm] = (0, hm.useState)(!0), [zm, Zm] = (0, hm.useState)(null !== (Tm = xm.customThumbnailId) && void 0 !== Tm ? Tm : null), [Nm, Gm] = (0, hm.useState)(null), Xm = (0, hm.useRef)(null !== (fm = xm.customThumbnailId) && void 0 !== fm ? fm : null), Pm = (0, hm.useRef)(0), Hm = (0, hm.useRef)(null), ym = (0, hm.useRef)(null), Cm = (0, hm.useRef)(null), rm = (0, hm.useRef)(!1);

      function sm(mm, Tm) {
        Cm.current && (clearTimeout(Cm.current), Cm.current = null), Gm(mm), null !== mm && Tm && (Cm.current = setTimeout((() => {
          Gm(null), Cm.current = null
        }), 5e3))
      }(0, hm.useEffect)((() => () => {
        clearTimeout(ym.current), clearTimeout(Cm.current)
      }), []);
      const lm = (0, hm.useCallback)((() => {
        cm(!0), km.d.getOwnedThumbnails(Ym).then((mm => {
          const Tm = [],
            fm = [];
          for (const hm of mm.thumbnails) hm.rejectionPolicyId ? Tm.push(hm) : fm.push(hm);
          Tm.sort(((mm, Tm) => mm.lastUpdatedAt - Tm.lastUpdatedAt)), fm.sort(((mm, Tm) => {
            const fm = mm.approved ? 1 : 0,
              hm = (Tm.approved ? 1 : 0) - fm;
            return 0 !== hm ? hm : Tm.lastUpdatedAt - mm.lastUpdatedAt
          })), nm(Tm), Im(fm)
        })).catch((mm => {
          console.error("Failed to fetch thumbnails:", mm)
        })).finally((() => {
          cm(!1)
        }))
      }), [Ym]);
      async function Bm(mm, Tm, fm) {
        return km.d.uploadSchematicThumbnail(Ym, mm, Tm, fm).then((() => {
          sm({
            text: Om("thumbnail:uploadedAwaitingModeration"),
            type: "success"
          }, !0), lm()
        }))
      }

      function Lm() {
        Pm.current = Date.now(), ym.current = null;
        const mm = Hm.current;
        Hm.current = null, sm({
          text: Om("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), km.d.setSchematicThumbnail(Ym, xm.schematicId, mm).then((() => {
          jm.current && (sm({
            text: Om("thumbnail:thumbnailUpdated"),
            type: "success"
          }, !0), Xm.current = mm, im("customThumbnailId", mm), im("customThumbnailBlurhash", void 0), im("customThumbnailVariants", void 0))
        })).catch((mm => {
          jm.current && (sm({
            text: mm.errorMessageForUser ? Om(mm.errorMessageForUser, mm.errorMessageTranslationParams) : Om("thumbnail:failedToSetThumbnail"),
            type: "error"
          }, !0), Zm(Xm.current))
        }))
      }

      function dm(mm) {
        Zm(mm), Hm.current = mm;
        const Tm = Date.now() - Pm.current;
        Tm >= 1e3 ? Lm() : (sm({
          text: Om("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), ym.current || (ym.current = setTimeout((() => {
          Lm()
        }), 1e3 - Tm)))
      }
      return (0, hm.useEffect)((() => {
        !1 === qm && lm()
      }), [qm, lm]), Qm.length > 0 ? (0, Km.jsx)(tm, {
        rejectedThumbnails: Qm,
        userContext: Ym,
        isMountedRef: jm,
        onAcknowledged: lm
      }) : (0, Km.jsxs)("div", {
        className: "BloxdForm ThumbnailSection",
        children: [(0, Km.jsxs)("div", {
          className: "SectionTitle",
          children: [Om("thumbnail:gameThumbnail"), Nm && (0, Km.jsx)("span", {
            className: om()("ThumbnailActionMsg", `ThumbnailActionMsg--${Nm.type}`),
            children: Nm.text
          })]
        }), (0, Km.jsx)("div", {
          className: "SectionBody",
          children: (0, Km.jsxs)("div", {
            className: "ThumbnailGrid",
            children: [(0, Km.jsxs)("div", {
              className: om()("ThumbnailGridItem ThumbnailGridItemDefault", {
                ThumbnailGridItemSelected: null === zm
              }),
              onClick: () => dm(null),
              children: [(0, Km.jsx)(em.c, {
                game: {
                  schematicId: xm.schematicId,
                  imageBlurhash: xm.imageBlurhash
                }
              }), (0, Km.jsx)("div", {
                className: "ThumbnailGridItemLabel ThumbnailDefaultLabel",
                children: Om("general:default")
              })]
            }), Jm && (0, Km.jsx)(Dm.c, {}), Vm.map(((mm, Tm) => (0, Km.jsxs)("div", {
              className: om()("ThumbnailGridItem", {
                ThumbnailGridItemSelected: zm === mm.id,
                ThumbnailGridItemPending: !mm.approved
              }),
              onClick: () => {
                mm.approved && dm(mm.id)
              },
              children: [mm.approved && (0, Km.jsx)("img", {
                src: `${um.clientSideServerUrls.s3Url}/customThumbnails/${mm.id}.jpg`,
                alt: "Thumbnail"
              }), mm.approved && (0, Km.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: mm.name
              }), mm.id && (0, Km.jsx)(am.O, {
                className: "ThumbnailDeleteButton",
                onClick: Tm => async function(mm, Tm, fm) {
                  mm.stopPropagation();
                  const hm = await Am.NotificationProvider.showCustomPopup({
                      body: mm => (0, Km.jsx)(Um, {
                        thumbnailId: Tm,
                        thumbnailName: fm,
                        onClose: Tm => {
                          Tm && (rm.current = !0), mm()
                        }
                      }),
                      middleScreenPopupClassName: "ThumbnailDeleteConfirmPopup",
                      onClose: Em
                    }).getResult(),
                    am = rm.current;
                  rm.current = !1, am && !0 === hm && (jm.current && sm({
                    text: Om("thumbnail:deletingThumbnail"),
                    type: "info"
                  }, !1), km.d.deleteSchematicThumbnail(Ym, Tm).then((() => {
                    jm.current && (sm({
                      text: Om("thumbnail:thumbnailDeleted"),
                      type: "success"
                    }, !0), Xm.current === Tm && dm(null), lm())
                  })).catch((mm => {
                    jm.current && sm({
                      text: mm.errorMessageForUser ? Om(mm.errorMessageForUser, mm.errorMessageTranslationParams) : Om("thumbnail:failedToDeleteThumbnail"),
                      type: "error"
                    }, !0)
                  })))
                }(Tm, mm.id, mm.name),
                children: (0, Km.jsx)(Rm.c, {
                  name: "trash-can"
                })
              }), !mm.approved && (0, Km.jsx)("div", {
                className: "ThumbnailUnapprovedIcon",
                children: (0, Km.jsx)(Rm.c, {
                  name: "hourglass-clock"
                })
              }), !mm.approved && (0, Km.jsxs)("div", {
                className: "ThumbnailGridItemLabel ThumbnailPendingLabel",
                children: [mm.name, (0, Km.jsx)("br", {}), Om("thumbnail:pendingApproval")]
              })]
            }, Tm))), (0, Km.jsxs)("div", {
              className: om()("ThumbnailGridItem ThumbnailUploadTile", {
                ThumbnailUploadTileDisabled: !pm
              }),
              onClick: () => {
                pm && function(mm) {
                  let {
                    schematicId: Tm,
                    ownedThumbnailCount: fm,
                    onThumbnailReady: hm,
                    onClose: am
                  } = mm;
                  Am.NotificationProvider.showCustomPopup({
                    body: mm => (0, Km.jsx)(Mm, {
                      schematicId: Tm,
                      ownedThumbnailCount: fm,
                      onClose: mm,
                      onThumbnailReady: hm
                    }),
                    middleScreenPopupClassName: "SchematicThumbnailPopup",
                    onClose: am,
                    unlockPointerKey: "schematicThumbnailUploaderPopup"
                  })
                }({
                  schematicId: xm.schematicId,
                  ownedThumbnailCount: Vm.length,
                  onThumbnailReady: Bm,
                  onClose: Em
                })
              },
              children: [(0, Km.jsx)(Rm.c, {
                name: "plus"
              }), (0, Km.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: Om("thumbnail:uploadThumbnail")
              })]
            })]
          })
        })]
      })
    }

    function tm(mm) {
      let {
        rejectedThumbnails: Tm,
        userContext: fm,
        isMountedRef: Am,
        onAcknowledged: xm
      } = mm;
      const {
        t: im
      } = (0, wm.A)(), [pm, Em] = (0, hm.useState)(!1), [om, Om] = (0, hm.useState)(!1), Ym = function(mm) {
        const Tm = new Map;
        for (const fm of mm) {
          const mm = fm.rejectionPolicyId,
            hm = Tm.get(mm);
          hm ? hm.push(fm) : Tm.set(mm, [fm])
        }
        return Tm
      }(Tm);
      return (0, Km.jsxs)("div", {
        className: "ThumbnailRejectionNotice",
        children: [(0, Km.jsxs)("div", {
          className: "ThumbnailRejectionNoticeTitle",
          children: [(0, Km.jsx)(Rm.c, {
            name: "triangle-exclamation"
          }), " ", im("thumbnail:thumbnailsRejected"), " ", (0, Km.jsx)(Rm.c, {
            name: "triangle-exclamation"
          })]
        }), (0, Km.jsx)("div", {
          className: "ThumbnailRejectionNoticeSubtitle",
          children: im("thumbnail:thumbnailsRejectedDescription")
        }), (0, Km.jsx)("div", {
          className: "ThumbnailRejectionNoticeList",
          children: [...Ym.entries()].map((mm => {
            let [Tm, fm] = mm;
            const hm = Bm[Tm];
            return (0, Km.jsxs)("div", {
              className: "ThumbnailRejectionNoticeGroup",
              children: [(0, Km.jsx)("div", {
                className: "ThumbnailRejectionNoticeItems",
                children: fm.map((mm => (0, Km.jsxs)("div", {
                  className: "ThumbnailRejectionNoticeItem",
                  children: [(0, Km.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemIcon",
                    children: (0, Km.jsx)(Rm.c, {
                      name: "image-slash"
                    })
                  }), (0, Km.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemDetails",
                    children: (0, Km.jsx)("div", {
                      className: "ThumbnailRejectionNoticeItemName",
                      children: mm.name
                    })
                  })]
                }, mm.id)))
              }), (0, Km.jsxs)("div", {
                className: "ThumbnailRejectionNoticeGroupReason",
                children: [im("thumbnail:rejectionReason"), " ", hm ? im(hm.reason) : Tm]
              }), hm && (0, Km.jsx)("ul", {
                className: "ThumbnailRejectionNoticeGroupTips",
                children: hm.tips.map((mm => (0, Km.jsx)("li", {
                  children: im(mm)
                }, mm)))
              })]
            }, Tm)
          }))
        }), (0, Km.jsxs)("label", {
          className: "ThumbnailRejectionNoticeCheckbox",
          children: [(0, Km.jsx)(Zm.b, {
            checked: pm,
            onChange: mm => Em(mm.target.checked),
            disabled: om
          }), (0, Km.jsx)("span", {
            children: im("thumbnail:haveReadRejectionReasons")
          })]
        }), (0, Km.jsx)(am.m, {
          onClick: async function() {
            Om(!0);
            const mm = await Promise.allSettled(Tm.map((mm => km.d.deleteSchematicThumbnail(fm, mm.id))));
            if (!Am.current) return;
            const hm = mm.filter((mm => "rejected" === mm.status));
            hm.length > 0 && console.error("Some rejected thumbnails failed to delete:", hm), xm()
          },
          disabled: !pm || om,
          className: "ThumbnailRejectionNoticeAcceptButton",
          children: om ? (0, Km.jsx)(Dm.c, {}) : im("general:accept")
        })]
      })
    }

    function Um(mm) {
      let {
        thumbnailId: Tm,
        thumbnailName: fm,
        onClose: hm
      } = mm;
      const {
        t: Am
      } = (0, wm.A)();
      return (0, Km.jsxs)("div", {
        className: "ThumbnailDeleteConfirm",
        children: [(0, Km.jsx)("div", {
          className: "ThumbnailDeleteConfirmTitle",
          children: Am("thumbnail:deleteThumbnail")
        }), (0, Km.jsxs)("div", {
          className: "ThumbnailDeleteConfirmImageContainer",
          children: [(0, Km.jsx)("img", {
            className: "ThumbnailDeleteConfirmImage",
            src: `${um.clientSideServerUrls.s3Url}/customThumbnails/${Tm}.jpg`,
            alt: "Thumbnail to delete"
          }), (0, Km.jsx)("div", {
            className: "ThumbnailGridItemLabel",
            children: fm
          })]
        }), (0, Km.jsx)("div", {
          className: "ThumbnailDeleteConfirmSubtitle",
          children: Am("thumbnail:deleteThumbnailConfirmation")
        }), (0, Km.jsxs)("div", {
          className: "ThumbnailDeleteConfirmButtons",
          children: [(0, Km.jsxs)(am.O, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => hm(!0),
            children: [(0, Km.jsx)(Rm.c, {
              name: "trash-can"
            }), " ", Am("general:delete")]
          }), (0, Km.jsx)(am.g, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => hm(!1),
            children: Am("general:cancel")
          })]
        })]
      })
    }
    var dm = fm(2123),
      gm = fm(4938),
      Wm = fm(4946),
      Fm = fm(4976);

    function mT(mm) {
      let {
        schematicData: Tm,
        setTexturePack: fm,
        initializeTexturePack: Am,
        publishFormEnabled: am
      } = mm;
      const {
        t: xm
      } = (0, wm.A)(), [Dm, im] = (0, hm.useState)(null), [Rm, pm] = (0, hm.useState)(null), [Em, Om] = (0, hm.useState)(!1), Ym = (0, bm.c)(), qm = am && !Em, jm = Tm.customTexturePackKey;

      function Vm(mm) {
        var Tm;
        im(mm.metaData.id), pm(null !== (Tm = mm.metaData.fromFolderName) && void 0 !== Tm ? Tm : null), (mm.metaData.id !== dm.l.CUSTOM || mm.metaData.fromFolderName) && fm(mm)
      }
      return (0, hm.useEffect)((() => {
        jm && (Om(!0), (0, gm.e)(jm).then((mm => {
          var Tm;
          Ym.current && (mm ? (im(mm.metaData.id), pm(null !== (Tm = mm.metaData.fromFolderName) && void 0 !== Tm ? Tm : null), Am(mm)) : console.error(`No texture pack at ${jm}`))
        })).catch((mm => {
          console.error("Error fetching texture pack: ", mm)
        })).finally((() => {
          Om(!1)
        })))
      }), [jm, Am, Ym]), (0, Km.jsxs)("div", {
        className: "BloxdForm TexturePackSection",
        children: [(0, Km.jsx)("div", {
          className: "SectionTitle",
          children: xm("customTexturePack:customTexturePack")
        }), (0, Km.jsxs)("div", {
          className: "TexturePackList",
          children: [(0, Km.jsx)("div", {
            className: om()("TexturePack", {
              Selected: null === Dm && !Em,
              Disabled: !qm
            }),
            onClick: () => {
              qm && (im(null), fm(null), pm(null))
            },
            children: (0, Km.jsx)("div", {
              className: "TexturePackName",
              children: "No Override"
            })
          }), Object.values(dm.l).map((mm => (0, Km.jsx)(Wm.g, {
            id: mm,
            isSelected: mm === Dm,
            setSelected: Vm,
            disabled: !qm
          }, mm)))]
        }), Dm === dm.l.CUSTOM && (0, Km.jsx)(Fm.b, {
          folderName: Rm,
          onTexturePackUpdated: Vm,
          disabled: !qm,
          maxFileSizeMb: 25,
          packOwner: "customGame"
        })]
      })
    }
    var TT = fm(5013);

    function fT(mm) {
      var Tm;
      let {
        gameCategory: fm,
        setGameCategory: hm,
        disabled: Am
      } = mm;
      const xm = null !== (Tm = (0, Om.hb)(fm)) && void 0 !== Tm ? Tm : "other";
      return (0, Km.jsxs)("div", {
        className: "GameCategoryPicker",
        children: [(0, Km.jsx)(jm.h, {
          label: "worldBuilder:gameCategoryGroup",
          className: "GameCategoryGroup",
          disabled: Am,
          children: (0, Km.jsx)(Vm.d, {
            options: Om.$.map((mm => ({
              value: mm,
              label: Om.Z[mm]
            }))),
            value: xm,
            onChange: mm => {
              mm.value !== xm && hm(Om.R[mm.value][0])
            }
          })
        }), (0, Km.jsx)(jm.h, {
          label: "worldBuilder:gameCategory",
          className: "GameCategory",
          disabled: Am,
          children: (0, Km.jsx)("div", {
            className: "GameCategoryOptions",
            children: Om.R[xm].map((mm => (0, Km.jsx)(am.V, {
              active: mm === fm,
              onClick: () => {
                hm(mm)
              },
              children: (0, Om.gb)(mm)
            }, mm)))
          })
        })]
      })
    }

    function hT(mm) {
      let {
        editor: Tm,
        onClose: fm
      } = mm;
      const {
        t: hm
      } = (0, wm.A)(), {
        schematicData: Am,
        updateSchematicData: am,
        publishFormEnabled: Dm,
        formEnabled: im
      } = Tm;
      return (0, Km.jsxs)(Km.Fragment, {
        children: [(0, Km.jsxs)(Qm, {
          icon: "pen-to-square",
          title: hm("worldBuilder:basicsSection"),
          disabled: !im,
          children: [(0, Km.jsx)(nm, {
            label: hm("general:name"),
            caption: hm("worldBuilder:schematicNameTagsHint"),
            children: (0, Km.jsx)(xm.e, {
              className: "SchematicPageName",
              defaultValue: Am.name,
              onValueChange: mm => am("name", mm),
              placeholderText: hm("worldBuilder:schematicNamePlaceholder"),
              maxLength: pm.gb
            })
          }), (0, Km.jsx)(nm, {
            label: hm("general:description"),
            children: (0, Km.jsx)(xm.e, {
              className: "SchematicPageDescription",
              useTextarea: !0,
              defaultValue: Am.description,
              onValueChange: mm => am("description", mm),
              placeholderText: hm("worldBuilder:schematicDescriptionPlaceholder"),
              maxLength: pm.db
            })
          }), (0, Km.jsx)(fT, {
            gameCategory: Am.gameCategory,
            setGameCategory: mm => am("gameCategory", mm),
            disabled: !Dm
          }), !0 === Am.gamePublished && (0, Km.jsx)(Lm, {
            schematicData: Am,
            updateSchematicData: am,
            publishFormEnabled: Dm,
            onClose: function() {
              null === fm || void 0 === fm || fm()
            }
          })]
        }), (0, Km.jsx)(cm, {
          schematicData: Am,
          updateSchematicData: am,
          publishFormEnabled: Dm,
          formEnabled: im
        }), !0 === Am.gamePublished && (0, Km.jsx)(Qm, {
          icon: "palette",
          title: hm("worldBuilder:texturePackSection"),
          disabled: !im,
          children: (0, Km.jsx)(mT, {
            schematicData: Am,
            setTexturePack: Tm.setTexturePack,
            initializeTexturePack: Tm.initializeTexturePack,
            publishFormEnabled: Dm
          })
        })]
      })
    }

    function AT(mm) {
      let {
        editor: Tm
      } = mm;
      const {
        t: fm
      } = (0, wm.A)(), {
        schematicData: hm,
        formEnabled: Am,
        hasUnsavedChanges: xm
      } = Tm, pm = Am && xm;
      return (0, Km.jsxs)("footer", {
        className: "SchematicPageFooter",
        children: [Am && xm && (0, Km.jsxs)("div", {
          className: "SchematicPageFooterStatus",
          children: [(0, Km.jsx)("span", {
            className: "SchematicPageFooterStatusDot"
          }), fm("worldBuilder:unsavedChanges")]
        }), (0, Km.jsx)(im.h, {
          tooltipInner: (0, Km.jsx)("div", {
            className: "SaveButtonTooltip",
            children: fm(Am && !xm ? "worldBuilder:saveChangesNoneDescription" : "worldBuilder:saveChangesDescription")
          }),
          children: (0, Km.jsxs)(am.e, {
            className: "SaveChangesButton",
            onClick: () => Tm.saveSchematic(hm.gamePublished),
            disabled: !pm,
            children: [(0, Km.jsxs)("span", {
              className: Am ? "" : "SaveChangesButtonBodyHidden",
              children: [(0, Km.jsx)(Rm.c, {
                name: "wrench"
              }), " ", fm("worldBuilder:saveChanges")]
            }), !Am && (0, Km.jsx)(Dm.c, {})]
          })
        })]
      })
    }

    function aT(mm) {
      let {
        schematic: Tm,
        onSchematicUpdate: fm,
        onClose: Am,
        inSourceWorld: xm
      } = mm;
      const {
        t: Dm
      } = (0, wm.A)();

      function im() {
        null === Am || void 0 === Am || Am()
      }
      const Rm = (0, TT.d)(Tm, {
        onNavigateAway: im,
        inSourceWorld: xm
      });
      return (0, hm.useEffect)((() => {
        null === fm || void 0 === fm || fm(Rm.schematicData)
      }), [Rm.schematicData, fm]), (0, Km.jsxs)("div", {
        className: "SchematicPage SchematicPagePopupVariant",
        children: [(0, Km.jsxs)("div", {
          className: "SchematicPageBody",
          children: [(0, Km.jsx)(am.d, {
            onClick: im,
            children: Dm("worldBuilder:back")
          }), (0, Km.jsx)(Qm, {
            icon: "rocket-launch",
            title: Dm("worldBuilder:actionsSection"),
            disabled: !Rm.formEnabled,
            children: (0, Km.jsx)(zm.d, {
              editor: Rm
            })
          }), (0, Km.jsx)(hT, {
            editor: Rm,
            onClose: im
          })]
        }), (0, Km.jsx)(AT, {
          editor: Rm
        })]
      })
    }

    function xT(mm) {
      let {
        schematic: Tm,
        onSchematicUpdate: fm,
        onClose: hm,
        inSourceWorld: am
      } = mm;
      Am.NotificationProvider.showCustomPopup({
        body: mm => (0, Km.jsx)(aT, {
          schematic: Tm,
          onSchematicUpdate: fm,
          onClose: mm,
          inSourceWorld: am
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: hm,
        unlockPointerKey: "schematicPagePopup"
      })
    }
  },
  4897: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => pm
    });
    var hm = fm(1080),
      Am = fm.n(hm),
      am = fm(1208),
      xm = fm(1089),
      wm = fm(1454),
      Dm = fm(1362),
      im = fm(1345),
      Rm = fm(1135);

    function pm(mm) {
      let {
        editor: Tm,
        className: fm
      } = mm;
      const {
        t: hm
      } = (0, am.A)(), {
        schematicData: pm,
        formEnabled: Em,
        publishFormEnabled: om
      } = Tm, Om = !Em || !om;
      return (0, Rm.jsxs)("div", {
        className: Am()("PublishButtonContainer", fm),
        children: [Tm.canEditSourceWorld && (0, Rm.jsxs)(wm.e, {
          onClick: Tm.editSourceWorld,
          disabled: Om,
          children: [(0, Rm.jsx)(xm.c, {
            name: "edit"
          }), " ", hm("worldBuilder:editSourceWorld")]
        }), !pm.gamePublished && (0, Rm.jsx)(Dm.h, {
          tooltipInner: (0, Rm.jsx)("div", {
            className: "PublishButtonTooltip",
            children: hm("worldBuilder:publishAsGameDescription")
          }),
          children: (0, Rm.jsxs)(wm.m, {
            onClick: () => Tm.saveSchematic(!0),
            disabled: Om,
            children: [(0, Rm.jsx)(xm.c, {
              name: "rocket-launch"
            }), " ", hm("worldBuilder:publishAsGame"), " ", (0, Rm.jsx)(xm.c, {
              name: "info-circle"
            })]
          })
        }), !0 === pm.gamePublished && (0, Rm.jsxs)(Rm.Fragment, {
          children: [(0, Rm.jsx)(Dm.h, {
            tooltipInner: (0, Rm.jsx)("div", {
              className: "PublishButtonTooltip",
              children: hm("worldBuilder:unpublishAsGameDescription")
            }),
            children: (0, Rm.jsxs)(wm.O, {
              onClick: Tm.unpublishSchematic,
              disabled: Om,
              children: [(0, Rm.jsx)(xm.c, {
                name: "rocket-launch"
              }), " ", hm("worldBuilder:unpublishAsGame"), " ", (0, Rm.jsx)(xm.c, {
                name: "info-circle"
              })]
            })
          }), (0, Rm.jsxs)(wm.e, {
            onClick: Tm.playGame,
            disabled: Om,
            children: [(0, Rm.jsx)(xm.c, {
              name: "joystick"
            }), " ", hm("general:playGame")]
          })]
        }), !Em && (0, Rm.jsx)(im.c, {
          loaderType: "Secondary"
        })]
      })
    }
  },
  4938: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => Am
    });
    var hm = fm(1214);
    async function Am(mm) {
      const Tm = await fetch(`${hm.clientSideServerUrls.s3Url}/${mm}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === Tm.status || 403 === Tm.status) return null;
      if (!Tm.ok) throw new Error(`Failed to download the texture pack (${Tm.status})`);
      return await Tm.json()
    }
  },
  5013: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => qm
    });
    var hm = fm(59),
      Am = fm(1329),
      am = fm(1041),
      xm = fm(168),
      wm = fm(1555),
      Dm = fm(23),
      im = fm(1905),
      Rm = fm(1494),
      pm = fm(4523),
      Em = fm(1354),
      om = fm(1160),
      Om = fm(1519);

    function Ym(mm, Tm) {
      return {
        schematicId: mm.schematicId,
        name: mm.name,
        description: mm.description,
        gamePublished: Tm,
        gameCategory: mm.gameCategory,
        defaultGamemode: mm.defaultGamemode,
        voidDeathHeight: mm.voidDeathHeight,
        disableKeepInventory: mm.disableKeepInventory,
        disableTpRequests: mm.disableTpRequests,
        disableLobbySpawn: mm.disableLobbySpawn,
        disableMobs: mm.disableMobs,
        disableSpawnProtection: mm.disableSpawnProtection,
        disableFallDamage: mm.disableFallDamage,
        worldBorder: mm.worldBorder,
        hideLobbyCode: mm.hideLobbyCode,
        enableSmpMarketplace: mm.enableSmpMarketplace,
        enableSurvivalGuns: mm.enableSurvivalGuns,
        enableSpawnReset: mm.enableSpawnReset,
        enableDayNight: mm.enableDayNight,
        persistWorld: mm.persistWorld,
        persistInventory: mm.persistInventory
      }
    }

    function qm(mm) {
      let {
        onNavigateAway: Tm,
        inSourceWorld: fm = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const {
        userContext: qm
      } = (0, om.e)(), jm = (0, Om.useNavigatePreserveSearch)(), [Vm, Im] = (0, hm.useState)({
        ...mm
      }), [Km, Qm] = (0, hm.useState)("Enter"), [nm, Jm] = (0, hm.useState)(void 0), cm = (0, hm.useRef)(Ym(mm, mm.gamePublished)), zm = (0, hm.useRef)(void 0), Zm = "Enter" === Km, km = qm.playerHasRank("developer") || qm.playerHasRank("admin") || "Enter" === Km && !1 !== Vm.schematicContainsSpawnBlock, bm = void 0 !== nm && nm !== zm.current || JSON.stringify(Ym(Vm, Vm.gamePublished)) !== JSON.stringify(cm.current);

      function Sm(mm, Tm) {
        Im((fm => ({
          ...fm,
          [mm]: Tm
        })))
      }
      const em = (0, hm.useCallback)((mm => {
        zm.current = mm, Jm(mm)
      }), []);

      function Nm(mm) {
        Qm("Loading");
        const Tm = Ym(Vm, mm),
          fm = nm !== zm.current ? nm : void 0;
        Rm.d.updateSchematic(qm, Tm, fm).then((fm => {
          let {
            customTexturePackKey: hm
          } = fm;
          Qm("Success"), Sm("customTexturePackKey", hm), cm.current = Tm, zm.current = void 0, Jm(void 0), setTimeout((() => {
            Sm("gamePublished", mm), Qm("Enter")
          }), 1e3)
        })).catch((mm => {
          var Tm;
          (console.error("Failed to save schematic:", mm), Qm("Error"), mm instanceof xm.d && mm.errorMessageForUser) && Em.NotificationProvider.showAlertPopup({
            title: "worldBuilder:changesNotSaved",
            subtitle: mm.errorMessageForUser,
            textOpts: {
              subtitle: null !== (Tm = mm.errorMessageTranslationParams) && void 0 !== Tm ? Tm : void 0
            },
            confirmText: "general:ok"
          });
          setTimeout((() => {
            Qm("Enter")
          }), 1e3)
        }))
      }
      return {
        schematicData: Vm,
        updateSchematicData: Sm,
        setTexturePack: Jm,
        initializeTexturePack: em,
        updateState: Km,
        formEnabled: Zm,
        publishFormEnabled: km,
        hasUnsavedChanges: bm,
        canEditSourceWorld: !fm,
        saveSchematic: Nm,
        unpublishSchematic: function() {
          Em.NotificationProvider.showPromptPopup({
            icon: "rocket-launch",
            title: "worldBuilder:unpublishAsGameConfirmTitle",
            subtitle: "worldBuilder:unpublishAsGameConfirmSubtitle",
            confirmText: "worldBuilder:unpublishAsGame",
            cancelText: "general:cancel",
            unlockPointerKey: "unpublishGamePrompt"
          }).getResult().then((mm => {
            !0 === mm && Nm(!1)
          }))
        },
        editSourceWorld: function() {
          Qm("Loading"), pm.b.getSourceWorld(Vm.schematicId).then((mm => {
            im.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, Dm.l)("other"), jm((0, Am.e)("classic", mm)), null === Tm || void 0 === Tm || Tm()
          })).catch((mm => {
            console.error("Failed to get source world:", mm), Qm("Error"), setTimeout((() => {
              Qm("Enter")
            }), 1e3)
          }))
        },
        playGame: function() {
          im.gameBridge.send("leaveGame", {
            reloadPath: "/"
          }), jm((0, wm.v)((0, am.q)(Vm.schematicId), Vm)), null === Tm || void 0 === Tm || Tm()
        }
      }
    }
  },
  4887: () => {}
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);