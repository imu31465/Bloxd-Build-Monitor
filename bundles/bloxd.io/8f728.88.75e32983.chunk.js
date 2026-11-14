export const id = 88;
export const ids = [88];
export const modules = {
  3985: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Oc,
      f: () => qB,
      i: () => Tc
    });
    var Vc = nc(1051),
      Ic = nc(912),
      rB = nc.n(Ic),
      uc = nc(1205),
      sc = (nc(73), nc(3551)),
      Mc = nc(926),
      Pc = nc(957);

    function qB(cB) {
      let {
        children: Bc,
        label: nc,
        className: Ic,
        circleInfoText: sc,
        disabled: qB
      } = cB;
      const {
        t: Oc
      } = (0, Vc.x)();
      return (0, Pc.jsxs)("div", {
        className: rB()("LabeledInput", {
          [Ic]: Ic,
          DisabledLabelInput: qB
        }),
        children: [sc && (0, Pc.jsx)(uc.d, {
          tooltipInner: (0, Pc.jsx)("div", {
            className: "LabeledInputTooltip",
            children: Oc(sc)
          }),
          children: (0, Pc.jsxs)("div", {
            className: "Label",
            children: [Oc(nc), (0, Pc.jsx)(Mc.e, {
              name: "circle-info"
            })]
          })
        }), !sc && (0, Pc.jsx)("div", {
          className: "Label",
          children: Oc(nc)
        }), Bc]
      })
    }

    function Oc(cB) {
      let {
        checked: Bc,
        setChecked: nc
      } = cB;
      return (0, Pc.jsx)("div", {
        className: "OtherInput ClickableOtherInput",
        "data-pad-focusable": !0,
        onClick: cB => {
          nc(!Bc)
        },
        children: (0, Pc.jsx)(sc.c, {
          checked: Bc,
          onChange: cB => {
            nc(cB.target.checked)
          },
          disabled: !1
        })
      })
    }

    function Tc(cB) {
      let {
        checked: Bc,
        setChecked: nc,
        disabled: Vc
      } = cB;
      return (0, Pc.jsx)("div", {
        className: rB()("SwitchContainer", {
          SwitchContainerDisabled: Vc
        }),
        onClick: () => {
          Vc || nc(!Bc)
        },
        children: (0, Pc.jsx)(sc.c, {
          className: "SwitchCheckbox",
          checked: Bc,
          onChange: cB => {
            nc(cB.target.checked)
          },
          disabled: !!Vc
        })
      })
    }
  },
  3993: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Pc
    });
    var Vc = nc(912),
      Ic = nc.n(Vc),
      rB = nc(1051),
      uc = nc(957);
    const sc = ["tpRequests", "spawnProtection", "spawnReset", "smpMarketplace", "survivalGuns", "fallDamage", "dayNight"],
      Mc = ["survivalGuns", "fallDamage", "dayNight"];

    function Pc(cB) {
      let {
        callbacks: Bc,
        disabled: nc,
        advancedMode: Vc,
        hideWrapper: Pc
      } = cB;
      const {
        t: Oc
      } = (0, rB.x)(), Tc = (0, uc.jsx)("div", {
        className: Ic()("PluginsGrid", {
          SectionBody: !Pc
        }),
        children: (Vc ? sc : Mc).map((cB => (0, uc.jsx)(qB, {
          plugin: cB,
          callbacks: Bc[cB],
          disabled: nc
        }, cB)))
      });
      return Pc ? Tc : (0, uc.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, uc.jsx)("div", {
          className: "SectionTitle",
          children: Oc("worldBuilder:pluginsSection")
        }), Tc]
      })
    }

    function qB(cB) {
      let {
        plugin: Bc,
        callbacks: {
          isEnabled: nc,
          jnc: Vc
        },
        disabled: sc
      } = cB;
      const {
        t: Mc
      } = (0, rB.x)(), Pc = nc();
      return (0, uc.jsxs)("div", {
        className: Ic()("PluginCard", {
          PluginCardEnabled: Pc,
          PluginCardDisabledForm: sc
        }),
        "data-pad-focusable": !0,
        "aria-disabled": sc || void 0,
        onClick: () => {
          sc || Vc(!Pc)
        },
        children: [(0, uc.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, uc.jsx)("img", {
            src: `/textures/games/classic/customGames/${Bc}.png`,
            alt: Bc
          })
        }), (0, uc.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, uc.jsx)("div", {
            className: "PluginCardTitle",
            children: Mc(Oc[Bc])
          }), (0, uc.jsx)("div", {
            className: "PluginCardDescription",
            children: Mc(Tc[Bc])
          })]
        }), (0, uc.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: Mc(Pc ? "general:on" : "general:off")
        })]
      })
    }
    const Oc = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      Tc = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  3977: (cB, Bc, nc) => {
    nc.d(Bc, {
      h: () => IB,
      c: () => VB,
      e: () => nB,
      j: () => rn
    });
    var Vc = nc(73),
      Ic = nc(1194),
      rB = nc(1255),
      uc = nc(1485),
      sc = nc(1051),
      Mc = nc(1188),
      Pc = nc(1205),
      qB = nc(926),
      Oc = nc(1090),
      Tc = nc(912),
      fc = nc.n(Tc),
      mB = nc(244),
      ec = nc(3999),
      tB = nc(1108),
      Sc = nc(3985),
      yB = nc(2311),
      zB = nc(3993),
      pc = nc(957);

    function hc(cB) {
      let {
        icon: Bc,
        title: nc,
        disabled: Vc,
        children: Ic
      } = cB;
      return (0, pc.jsxs)("div", {
        className: fc()("ManageCard", {
          ManageCardDisabled: Vc
        }),
        children: [(0, pc.jsxs)("div", {
          className: "ManageCardHead",
          children: [(0, pc.jsx)("div", {
            className: "ManageCardIcon",
            children: (0, pc.jsx)(qB.e, {
              name: Bc
            })
          }), (0, pc.jsx)("div", {
            children: (0, pc.jsx)("h2", {
              className: "ManageCardTitle",
              children: nc
            })
          })]
        }), (0, pc.jsxs)("div", {
          className: "ManageCardBody",
          children: [Ic, Vc && (0, pc.jsx)("div", {
            className: "ManageCardDisabledOverlay"
          })]
        })]
      })
    }

    function aB(cB) {
      let {
        label: Bc,
        caption: nc,
        children: Vc
      } = cB;
      return (0, pc.jsxs)("div", {
        className: "ManageStackedField",
        children: [(0, pc.jsx)("div", {
          className: "ManageStackedFieldLabel",
          children: Bc
        }), Vc, nc && (0, pc.jsx)("div", {
          className: "ManageStackedFieldCaption",
          children: nc
        })]
      })
    }

    function lc(cB) {
      let {
        label: Bc,
        caption: nc,
        disabled: Vc,
        children: Ic
      } = cB;
      return (0, pc.jsxs)("div", {
        className: fc()("ManageField", {
          ManageFieldDisabled: Vc
        }),
        children: [(0, pc.jsxs)("div", {
          className: "ManageFieldText",
          children: [(0, pc.jsx)("div", {
            className: "ManageFieldLabel",
            children: Bc
          }), (0, pc.jsx)("div", {
            className: "ManageFieldCaption",
            children: nc
          })]
        }), (0, pc.jsx)("div", {
          className: "ManageFieldControl",
          children: Ic
        })]
      })
    }

    function Yc(cB) {
      var Bc, nc;
      let {
        schematicData: Vc,
        updateSchematicData: Ic,
        publishFormEnabled: rB,
        formEnabled: uc
      } = cB;
      const {
        t: Mc
      } = (0, sc.x)(), Pc = !rB, qB = {
        tpRequests: {
          isEnabled: () => !Vc.disableTpRequests,
          jnc: cB => Ic("disableTpRequests", !cB)
        },
        spawnProtection: {
          isEnabled: () => !Vc.disableSpawnProtection,
          jnc: cB => Ic("disableSpawnProtection", !cB)
        },
        spawnReset: {
          isEnabled: () => !!Vc.enableSpawnReset,
          jnc: cB => Ic("enableSpawnReset", cB)
        },
        smpMarketplace: {
          isEnabled: () => !!Vc.enableSmpMarketplace,
          jnc: cB => Ic("enableSmpMarketplace", cB)
        },
        survivalGuns: {
          isEnabled: () => !!Vc.enableSurvivalGuns,
          jnc: cB => Ic("enableSurvivalGuns", cB)
        },
        fallDamage: {
          isEnabled: () => !Vc.disableFallDamage,
          jnc: cB => Ic("disableFallDamage", !cB)
        },
        dayNight: {
          isEnabled: () => !!Vc.enableDayNight,
          jnc: cB => Ic("enableDayNight", cB)
        }
      };
      return (0, pc.jsxs)(pc.Fragment, {
        children: [!1 === Vc.schematicContainsSpawnBlock && (0, pc.jsx)("div", {
          className: "ManageWarningBanner",
          children: Mc("worldBuilder:mustContainSpawnBlock")
        }), (0, pc.jsxs)("div", {
          className: "ManageSettingsGrid",
          children: [(0, pc.jsxs)(hc, {
            icon: "globe",
            title: Mc("worldBuilder:worldRulesSection"),
            disabled: !uc,
            children: [(0, pc.jsx)(lc, {
              label: Mc("classic:defaultGamemode"),
              caption: Mc("classic:defaultGamemodeDescription"),
              disabled: Pc,
              children: (0, pc.jsx)(yB.c, {
                controlClassName: "ManageDropdown",
                options: ec.q.map((cB => ({
                  value: cB,
                  label: mB.k[cB]
                }))),
                value: Vc.defaultGamemode,
                onChange: cB => Ic("defaultGamemode", cB.value)
              })
            }), (0, pc.jsx)(lc, {
              label: Mc("classic:voidDeathHeight"),
              caption: Mc("classic:voidDeathHeightDescription"),
              disabled: Pc,
              children: (0, pc.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, pc.jsx)("input", {
                  type: "number",
                  max: tB.H,
                  value: null !== (Bc = Vc.voidDeathHeight) && void 0 !== Bc ? Bc : "",
                  onChange: cB => {
                    const Bc = parseInt(cB.target.value);
                    Ic("voidDeathHeight", Bc)
                  }
                }), (0, pc.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: Mc("worldBuilder:blocksUnit")
                })]
              })
            }), (0, pc.jsx)(lc, {
              label: Mc("classic:worldBorder"),
              caption: Mc("classic:worldBorderDescription"),
              disabled: Pc,
              children: (0, pc.jsxs)("div", {
                className: "ManageNumberField",
                children: [(0, pc.jsx)("input", {
                  type: "number",
                  min: tB.O,
                  max: tB.K,
                  placeholder: Mc("worldBuilder:noWorldBorderLimit"),
                  value: null !== (nc = Vc.worldBorder) && void 0 !== nc ? nc : "",
                  onChange: cB => {
                    const Bc = parseInt(cB.target.value);
                    Ic("worldBorder", isNaN(Bc) ? null : Bc)
                  }
                }), (0, pc.jsx)("span", {
                  className: "ManageFieldUnit",
                  children: Mc("worldBuilder:blocksUnit")
                })]
              })
            }), (0, pc.jsx)(lc, {
              label: Mc("classic:disableMobs"),
              caption: Mc("classic:disableMobsDescription"),
              disabled: Pc,
              children: (0, pc.jsx)(Sc.i, {
                checked: Vc.disableMobs,
                setChecked: cB => Ic("disableMobs", cB),
                disabled: Pc
              })
            })]
          }), (0, pc.jsxs)(hc, {
            icon: "user-group",
            title: Mc("worldBuilder:playerAndLobbySection"),
            disabled: !uc,
            children: [(0, pc.jsx)(lc, {
              label: Mc("classic:disableKeepInventory"),
              caption: Mc("classic:disableKeepInventoryDescription"),
              disabled: Pc,
              children: (0, pc.jsx)(Sc.i, {
                checked: Vc.disableKeepInventory,
                setChecked: cB => Ic("disableKeepInventory", cB),
                disabled: Pc
              })
            }), (0, pc.jsx)(lc, {
              label: Mc("classic:persistInventory"),
              caption: Mc("classic:persistInventoryDescription"),
              disabled: Pc,
              children: (0, pc.jsx)(yB.c, {
                controlClassName: "ManageDropdown",
                options: ec.h.map((cB => ({
                  value: cB,
                  label: mB.d[cB]
                }))),
                value: Vc.persistInventory,
                onChange: cB => Ic("persistInventory", cB.value)
              })
            }), (0, pc.jsx)(lc, {
              label: Mc("classic:persistWorld"),
              caption: Mc("classic:persistWorldDescription"),
              disabled: Pc,
              children: (0, pc.jsx)(Sc.i, {
                checked: Vc.persistWorld,
                setChecked: cB => Ic("persistWorld", cB),
                disabled: Pc
              })
            }), (0, pc.jsx)(lc, {
              label: Mc("classic:disableLobbySpawn"),
              caption: Mc("classic:disableLobbySpawnDescription"),
              disabled: Pc,
              children: (0, pc.jsx)(Sc.i, {
                checked: Vc.disableLobbySpawn,
                setChecked: cB => Ic("disableLobbySpawn", cB),
                disabled: Pc
              })
            }), (0, pc.jsx)(lc, {
              label: Mc("classic:hideLobbyCode"),
              caption: Mc("classic:hideLobbyCodeDescription"),
              disabled: Pc,
              children: (0, pc.jsx)(Sc.i, {
                checked: Vc.hideLobbyCode,
                setChecked: cB => Ic("hideLobbyCode", cB),
                disabled: Pc
              })
            })]
          })]
        }), (0, pc.jsx)(hc, {
          icon: "layer-group",
          title: Mc("worldBuilder:pluginsSection"),
          disabled: !uc,
          children: (0, pc.jsx)(zB.e, {
            callbacks: qB,
            disabled: Pc,
            advancedMode: !0,
            hideWrapper: !0
          })
        })]
      })
    }
    var Lc = nc(4002),
      gB = nc(3551),
      Uc = nc(1314),
      bB = nc(2659),
      Zc = nc(985),
      Qc = nc(3959),
      Cc = nc(4006),
      vB = nc(1259);
    const Dc = 50,
      Nc = .3;
    async function Ec(cB) {
      const Bc = await
      function(cB) {
        return new Promise(((Bc, nc) => {
          const Vc = new FileReader;
          Vc.onload = () => Bc(Vc.result), Vc.onerror = nc, Vc.readAsDataURL(cB)
        }))
      }(cB), nc = await
      function(cB) {
        return new Promise(((Bc, nc) => {
          const Vc = new Image;
          Vc.onload = () => Bc(Vc), Vc.onerror = () => nc(new Error("Failed to load image")), Vc.src = cB
        }))
      }(Bc);
      if (nc.naturalHeight > nc.naturalWidth) throw new oc;
      const Vc = 1024 * Dc,
        {
          dataUrl: Ic,
          finalQuality: rB
        } = function(cB, Bc) {
          const nc = document.createElement("canvas");
          nc.width = cB.naturalWidth, nc.height = cB.naturalHeight, nc.getContext("2d").drawImage(cB, 0, 0);
          let Vc = .92,
            Ic = nc.toDataURL("image/jpeg", Vc);
          for (; .75 * Ic.length > Bc && Vc > .05;) Vc -= .05, Ic = nc.toDataURL("image/jpeg", Vc);
          return {
            dataUrl: Ic,
            finalQuality: Vc
          }
        }(nc, Vc);
      if (Math.ceil(.75 * Ic.length) > Vc) throw new Wc;
      return {
        base64Jpg: Ic,
        heavilyCompressed: rB < Nc
      }
    }
    class oc extends Error {}
    class Wc extends Error {}
    var wc = function(cB) {
      return cB[cB.NOT_LOGGED_IN = 0] = "NOT_LOGGED_IN", cB[cB.THUMBNAIL_LIMIT_REACHED = 1] = "THUMBNAIL_LIMIT_REACHED", cB
    }(wc || {});

    function kB(cB) {
      var Bc;
      let {
        schematicId: nc,
        hasReadUploadPolicy: Ic,
        onPolicyValidationError: Mc,
        onThumbnailReady: Pc
      } = cB;
      const {
        t: Tc
      } = (0, sc.x)(), [mB, ec] = (0, Vc.useState)(null), [tB, Sc] = (0, Vc.useState)(""), [yB, zB] = (0, Vc.useState)(""), [hc, aB] = (0, Vc.useState)(!0), [lc, Yc] = (0, Vc.useState)(!1), Lc = (0, Vc.useRef)(!1), [gB, Uc] = (0, Vc.useState)(null), [bB, Zc] = (0, Vc.useState)(!1), [Qc, vB] = (0, Vc.useState)(!1), Dc = (0, Vc.useRef)(0), {
        getRootProps: Nc,
        getInputProps: wc,
        isDragActive: kB
      } = (0, Cc.b)({
        accept: {
          "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp"]
        },
        multiple: !1,
        onDrop: async cB => {
          if (0 === cB.length) return;
          const Bc = cB[0],
            nc = ++Dc.current;
          Uc(null), Zc(!1), ec(null), Sc(Bc.name);
          try {
            const cB = await Ec(Bc);
            if (nc !== Dc.current) return;
            ec(cB), Zc(cB.heavilyCompressed)
          } catch (Vc) {
            if (nc !== Dc.current) return;
            Uc(Tc(Vc instanceof oc ? "thumbnail:portraitImagesNotAllowed" : Vc instanceof Wc ? "thumbnail:couldNotCompressImage" : "thumbnail:failedToUploadImage"))
          }
        },
        useFsAccessApi: !1
      }), Xc = tB.length <= 30 ? tB : `${tB.slice(0,27)}...`, Hc = null !== (Bc = null === mB || void 0 === mB ? void 0 : mB.base64Jpg) && void 0 !== Bc ? Bc : null, Fc = yB.trim(), Jc = Fc.length >= Oc.n && Fc.length <= Oc.j, jB = Qc && !mB && !gB, Rc = Qc && !Jc;
      return (0, pc.jsxs)("div", {
        className: "ThumbnailUploadContainer",
        children: [(0, pc.jsxs)("div", {
          ...Nc({
            className: fc()("ThumbnailUploadDropzone", {
              ActiveDrag: kB,
              ValidationError: jB
            })
          }),
          children: [(0, pc.jsx)("input", {
            ...wc()
          }), !kB && Hc ? (0, pc.jsxs)(pc.Fragment, {
            children: [(0, pc.jsxs)("div", {
              className: "ThumbnailAspectPreviews",
              children: [(0, pc.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, pc.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "1:1"
                }), (0, pc.jsx)("div", {
                  className: "ThumbnailAspectFrame Square",
                  children: (0, pc.jsx)("img", {
                    src: Hc,
                    alt: "1:1 preview"
                  })
                })]
              }), (0, pc.jsxs)("div", {
                className: "ThumbnailAspectPreview",
                children: [(0, pc.jsx)("div", {
                  className: "ThumbnailAspectLabel",
                  children: "16:9"
                }), (0, pc.jsx)("div", {
                  className: "ThumbnailAspectFrame Wide",
                  children: (0, pc.jsx)("img", {
                    src: Hc,
                    alt: "16:9 preview"
                  })
                })]
              })]
            }), (0, pc.jsxs)("div", {
              children: [(0, pc.jsx)("div", {
                className: "ThumbnailUploadInstructions Active",
                children: Xc
              }), (0, pc.jsx)("div", {
                className: "ThumbnailUploadInstructions Preview",
                children: Tc("thumbnail:preview")
              })]
            })]
          }) : (0, pc.jsxs)(pc.Fragment, {
            children: [(0, pc.jsx)("div", {
              className: "ThumbnailUploadIcon",
              children: (0, pc.jsx)(qB.e, {
                name: "image"
              })
            }), (0, pc.jsx)("div", {
              className: "ThumbnailUploadInstructions",
              children: Tc("thumbnail:dragImageHere")
            })]
          })]
        }), jB && (0, pc.jsx)("div", {
          className: "ThumbnailUploadError",
          children: Tc("thumbnail:imageRequired")
        }), (0, pc.jsx)(uc.e, {
          className: fc()("ThumbnailUploadNameInput", {
            ValidationError: Rc
          }),
          placeholderText: Tc("thumbnail:thumbnailName"),
          defaultValue: yB,
          onValueChange: cB => {
            zB(cB)
          },
          maxLength: Oc.j
        }), Rc && (0, pc.jsx)("div", {
          className: "ThumbnailUploadError",
          children: Tc("thumbnail:nameRequired", {
            min: Oc.n,
            max: Oc.j
          })
        }), (0, pc.jsxs)("label", {
          className: "ThumbnailUploadCheckbox",
          children: [(0, pc.jsx)("input", {
            type: "checkbox",
            checked: hc,
            onChange: cB => {
              aB(cB.target.checked)
            }
          }), Tc("thumbnail:setAsThumbnailOnceApproved")]
        }), bB && (0, pc.jsx)("div", {
          className: "ThumbnailUploadWarning",
          children: Tc("thumbnail:heavyCompressionWarning")
        }), gB && (0, pc.jsx)("div", {
          className: "ThumbnailUploadError",
          children: gB
        }), (0, pc.jsx)(rB.n, {
          disabled: lc,
          className: "ThumbnailUploadButton",
          onClick: async () => {
            if (vB(!0), !Lc.current && mB && Jc && Ic) {
              Lc.current = !0, Yc(!0), Uc(null);
              try {
                await Pc(mB.base64Jpg, Fc, hc ? nc : null)
              } catch (cB) {
                Uc(cB.errorMessageForUser ? Tc(cB.errorMessageForUser, cB.errorMessageTranslationParams) : Tc("thumbnail:failedToUploadImage"))
              } finally {
                Lc.current = !1, Yc(!1)
              }
            } else Ic || Mc()
          },
          children: Tc(lc ? "thumbnail:processing" : "thumbnail:uploadThumbnail")
        })]
      })
    }
    const Xc = 2e3;

    function Hc(cB) {
      let {
        schematicId: Bc,
        ownedThumbnailCount: nc,
        onClose: Ic,
        onThumbnailReady: rB
      } = cB;
      const {
        t: uc
      } = (0, sc.x)(), {
        userContext: Mc
      } = (0, Zc.c)(), [Pc, Tc] = (0, Vc.useState)(!1), [mB, ec] = (0, Vc.useState)(!1), [tB, Sc] = (0, Vc.useState)(!1), yB = (0, Vc.useRef)();
      (0, Vc.useEffect)((() => () => {
        clearTimeout(yB.current)
      }), []);
      const zB = function(cB, Bc) {
        const nc = [];
        return cB.isLoggedIn() || nc.push(wc.NOT_LOGGED_IN), Bc >= Oc.Q && nc.push(wc.THUMBNAIL_LIMIT_REACHED), nc
      }(Mc, nc);
      if (zB.length > 0) {
        const cB = {
          [wc.NOT_LOGGED_IN]: {
            key: "thumbnail:mustBeLoggedInToUpload"
          },
          [wc.THUMBNAIL_LIMIT_REACHED]: {
            key: "thumbnail:thumbnailLimitReachedPleaseDelete",
            params: {
              max: Oc.Q
            }
          }
        };
        return (0, pc.jsxs)("div", {
          className: "ThumbnailUploaderInner",
          children: [(0, pc.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: uc("thumbnail:cannotUploadThumbnail")
          }), zB.map(((Bc, nc) => {
            const Vc = cB[Bc];
            return (0, pc.jsxs)("div", {
              className: "CannotUploadThumbnailItem",
              children: [(0, pc.jsx)(qB.e, {
                name: "triangle-exclamation"
              }), (0, pc.jsx)("span", {
                children: uc(Vc.key, Vc.params)
              })]
            }, nc)
          }))]
        })
      }
      return (0, pc.jsxs)("div", {
        className: fc()("ThumbnailUploaderInner", {
          ThumbnailUploaderSuccess: Pc
        }),
        children: [Pc && (0, pc.jsxs)("div", {
          className: "ThumbnailUploadSuccessOverlay",
          children: [(0, pc.jsxs)("div", {
            className: "ThumbnailUploadSuccessIcon FullyFancyText AnimFadeInScaleUp",
            children: [(0, pc.jsx)(qB.e, {
              name: "check"
            }), (0, pc.jsx)(vB.c, {})]
          }), (0, pc.jsx)("div", {
            className: "ThumbnailUploadSuccessText AnimFadeInScaleUp",
            children: uc("thumbnail:thumbnailUploaded")
          })]
        }), (0, pc.jsx)("h1", {
          className: "SchematicPopupTitle",
          children: uc("thumbnail:uploadThumbnail")
        }), (0, pc.jsxs)("div", {
          className: "ThumbnailUploaderBody",
          children: [(0, pc.jsxs)("div", {
            className: "ThumbnailUploaderLeft",
            children: [(0, pc.jsx)("h3", {
              className: "SchematicPopupSubtitle",
              children: uc("thumbnail:chooseImage", {
                maxSizeKb: Dc
              })
            }), (0, pc.jsx)(kB, {
              schematicId: Bc,
              hasReadUploadPolicy: mB,
              onPolicyValidationError: () => {
                Sc(!0)
              },
              onThumbnailReady: async (cB, Bc, nc) => {
                await rB(cB, Bc, nc), Tc(!0), yB.current = setTimeout(Ic, Xc)
              }
            })]
          }), (0, pc.jsxs)("div", {
            className: "ThumbnailUploadPolicy",
            children: [(0, pc.jsx)("h3", {
              className: "ThumbnailUploadPolicyTitle",
              children: uc("thumbnail:uploadPolicy")
            }), (0, pc.jsxs)("ul", {
              className: "ThumbnailUploadPolicyList",
              children: [(0, pc.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, pc.jsx)(qB.e, {
                  name: "check"
                }), (0, pc.jsx)("span", {
                  children: uc("thumbnail:policyFollowGuidelines")
                })]
              }), (0, pc.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, pc.jsx)(qB.e, {
                  name: "check"
                }), (0, pc.jsx)("span", {
                  children: uc("thumbnail:policyInGameAssets")
                })]
              }), (0, pc.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem Allowed",
                children: [(0, pc.jsx)(qB.e, {
                  name: "check"
                }), (0, pc.jsx)("span", {
                  children: uc("thumbnail:policyLimitText")
                })]
              }), (0, pc.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, pc.jsx)(qB.e, {
                  name: "x"
                }), (0, pc.jsx)("span", {
                  children: uc("thumbnail:policyCopyrightContent")
                })]
              }), (0, pc.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, pc.jsx)(qB.e, {
                  name: "x"
                }), (0, pc.jsx)("span", {
                  children: uc("thumbnail:policyOutOfGameAssets")
                })]
              }), (0, pc.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, pc.jsx)(qB.e, {
                  name: "x"
                }), (0, pc.jsx)("span", {
                  children: uc("thumbnail:policyBloxdTags")
                })]
              }), (0, pc.jsxs)("li", {
                className: "ThumbnailUploadPolicyItem NotAllowed",
                children: [(0, pc.jsx)(qB.e, {
                  name: "x"
                }), (0, pc.jsx)("span", {
                  children: uc("thumbnail:policyMustReflectGame")
                })]
              })]
            }), (0, pc.jsxs)("label", {
              className: fc()("ThumbnailUploadCheckbox Policy", {
                ValidationError: tB && !mB
              }),
              children: [(0, pc.jsx)("input", {
                type: "checkbox",
                checked: mB,
                onChange: cB => {
                  ec(cB.target.checked)
                }
              }), uc("thumbnail:agreeToUploadPolicy")]
            }), tB && !mB && (0, pc.jsx)("div", {
              className: "ThumbnailPolicyError",
              children: uc("thumbnail:policyRequired")
            })]
          })]
        })]
      })
    }
    var Fc = nc(1062);
    const Jc = {
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

    function jB(cB) {
      var Bc, nc;
      let {
        schematicData: uc,
        updateSchematicData: Pc,
        publishFormEnabled: Oc,
        onClose: Tc
      } = cB;
      const {
        t: mB
      } = (0, sc.x)(), {
        userContext: ec,
        isUserContextUpdating: tB
      } = (0, Zc.c)(), Sc = (0, bB.e)(), [yB, zB] = (0, Vc.useState)([]), [hc, aB] = (0, Vc.useState)([]), [lc, Yc] = (0, Vc.useState)(!0), [Lc, gB] = (0, Vc.useState)(null !== (Bc = uc.customThumbnailId) && void 0 !== Bc ? Bc : null), [Cc, vB] = (0, Vc.useState)(null), Dc = (0, Vc.useRef)(null !== (nc = uc.customThumbnailId) && void 0 !== nc ? nc : null), Nc = (0, Vc.useRef)(0), Ec = (0, Vc.useRef)(null), oc = (0, Vc.useRef)(null), Wc = (0, Vc.useRef)(null), wc = (0, Vc.useRef)(!1);

      function kB(cB, Bc) {
        Wc.current && (clearTimeout(Wc.current), Wc.current = null), vB(cB), null !== cB && Bc && (Wc.current = setTimeout((() => {
          vB(null), Wc.current = null
        }), 5e3))
      }(0, Vc.useEffect)((() => () => {
        clearTimeout(oc.current), clearTimeout(Wc.current)
      }), []);
      const Xc = (0, Vc.useCallback)((() => {
        Yc(!0), Uc.e.getOwnedThumbnails(ec).then((cB => {
          const Bc = [],
            nc = [];
          for (const Vc of cB.thumbnails) Vc.rejectionPolicyId ? Bc.push(Vc) : nc.push(Vc);
          Bc.sort(((cB, Bc) => cB.lastUpdatedAt - Bc.lastUpdatedAt)), nc.sort(((cB, Bc) => {
            const nc = cB.approved ? 1 : 0,
              Vc = (Bc.approved ? 1 : 0) - nc;
            return 0 !== Vc ? Vc : Bc.lastUpdatedAt - cB.lastUpdatedAt
          })), aB(Bc), zB(nc)
        })).catch((cB => {
          console.error("Failed to fetch thumbnails:", cB)
        })).finally((() => {
          Yc(!1)
        }))
      }), [ec]);
      async function Jc(cB, Bc, nc) {
        return Uc.e.uploadSchematicThumbnail(ec, cB, Bc, nc).then((() => {
          kB({
            text: mB("thumbnail:uploadedAwaitingModeration"),
            type: "success"
          }, !0), Xc()
        }))
      }

      function jB() {
        Nc.current = Date.now(), oc.current = null;
        const cB = Ec.current;
        Ec.current = null, kB({
          text: mB("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), Uc.e.setSchematicThumbnail(ec, uc.schematicId, cB).then((() => {
          Sc.current && (kB({
            text: mB("thumbnail:thumbnailUpdated"),
            type: "success"
          }, !0), Dc.current = cB, Pc("customThumbnailId", cB), Pc("customThumbnailBlurhash", void 0), Pc("customThumbnailVariants", void 0))
        })).catch((cB => {
          Sc.current && (kB({
            text: cB.errorMessageForUser ? mB(cB.errorMessageForUser, cB.errorMessageTranslationParams) : mB("thumbnail:failedToSetThumbnail"),
            type: "error"
          }, !0), gB(Dc.current))
        }))
      }

      function Kc(cB) {
        gB(cB), Ec.current = cB;
        const Bc = Date.now() - Nc.current;
        Bc >= 1e3 ? jB() : (kB({
          text: mB("thumbnail:settingThumbnail"),
          type: "info"
        }, !1), oc.current || (oc.current = setTimeout((() => {
          jB()
        }), 1e3 - Bc)))
      }
      return (0, Vc.useEffect)((() => {
        !1 === tB && Xc()
      }), [tB, Xc]), hc.length > 0 ? (0, pc.jsx)(Rc, {
        rejectedThumbnails: hc,
        userContext: ec,
        isMountedRef: Sc,
        onAcknowledged: Xc
      }) : (0, pc.jsxs)("div", {
        className: "BloxdForm ThumbnailSection",
        children: [(0, pc.jsxs)("div", {
          className: "SectionTitle",
          children: [mB("thumbnail:gameThumbnail"), Cc && (0, pc.jsx)("span", {
            className: fc()("ThumbnailActionMsg", `ThumbnailActionMsg--${Cc.type}`),
            children: Cc.text
          })]
        }), (0, pc.jsx)("div", {
          className: "SectionBody",
          children: (0, pc.jsxs)("div", {
            className: "ThumbnailGrid",
            children: [(0, pc.jsxs)("div", {
              className: fc()("ThumbnailGridItem ThumbnailGridItemDefault", {
                ThumbnailGridItemSelected: null === Lc
              }),
              onClick: () => Kc(null),
              children: [(0, pc.jsx)(Qc.c, {
                game: {
                  schematicId: uc.schematicId,
                  imageBlurhash: uc.imageBlurhash
                }
              }), (0, pc.jsx)("div", {
                className: "ThumbnailGridItemLabel ThumbnailDefaultLabel",
                children: mB("general:default")
              })]
            }), lc && (0, pc.jsx)(Mc.e, {}), yB.map(((cB, Bc) => (0, pc.jsxs)("div", {
              className: fc()("ThumbnailGridItem", {
                ThumbnailGridItemSelected: Lc === cB.id,
                ThumbnailGridItemPending: !cB.approved
              }),
              onClick: () => {
                cB.approved && Kc(cB.id)
              },
              children: [cB.approved && (0, pc.jsx)("img", {
                src: `${Fc.clientSideServerUrls.s3Url}/customThumbnails/${cB.id}.jpg`,
                alt: "Thumbnail"
              }), cB.approved && (0, pc.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: cB.name
              }), cB.id && (0, pc.jsx)(rB.L, {
                className: "ThumbnailDeleteButton",
                onClick: Bc => async function(cB, Bc, nc) {
                  cB.stopPropagation();
                  const Vc = await Ic.NotificationProvider.showCustomPopup({
                      body: cB => (0, pc.jsx)(iB, {
                        thumbnailId: Bc,
                        thumbnailName: nc,
                        onClose: Bc => {
                          Bc && (wc.current = !0), cB()
                        }
                      }),
                      middleScreenPopupClassName: "ThumbnailDeleteConfirmPopup",
                      onClose: Tc
                    }).getResult(),
                    rB = wc.current;
                  wc.current = !1, rB && !0 === Vc && (Sc.current && kB({
                    text: mB("thumbnail:deletingThumbnail"),
                    type: "info"
                  }, !1), Uc.e.deleteSchematicThumbnail(ec, Bc).then((() => {
                    Sc.current && (kB({
                      text: mB("thumbnail:thumbnailDeleted"),
                      type: "success"
                    }, !0), Dc.current === Bc && Kc(null), Xc())
                  })).catch((cB => {
                    Sc.current && kB({
                      text: cB.errorMessageForUser ? mB(cB.errorMessageForUser, cB.errorMessageTranslationParams) : mB("thumbnail:failedToDeleteThumbnail"),
                      type: "error"
                    }, !0)
                  })))
                }(Bc, cB.id, cB.name),
                children: (0, pc.jsx)(qB.e, {
                  name: "trash-can"
                })
              }), !cB.approved && (0, pc.jsx)("div", {
                className: "ThumbnailUnapprovedIcon",
                children: (0, pc.jsx)(qB.e, {
                  name: "hourglass-clock"
                })
              }), !cB.approved && (0, pc.jsxs)("div", {
                className: "ThumbnailGridItemLabel ThumbnailPendingLabel",
                children: [cB.name, (0, pc.jsx)("br", {}), mB("thumbnail:pendingApproval")]
              })]
            }, Bc))), (0, pc.jsxs)("div", {
              className: fc()("ThumbnailGridItem ThumbnailUploadTile", {
                ThumbnailUploadTileDisabled: !Oc
              }),
              onClick: () => {
                Oc && function(cB) {
                  let {
                    schematicId: Bc,
                    ownedThumbnailCount: nc,
                    onThumbnailReady: Vc,
                    onClose: rB
                  } = cB;
                  Ic.NotificationProvider.showCustomPopup({
                    body: cB => (0, pc.jsx)(Hc, {
                      schematicId: Bc,
                      ownedThumbnailCount: nc,
                      onClose: cB,
                      onThumbnailReady: Vc
                    }),
                    middleScreenPopupClassName: "SchematicThumbnailPopup",
                    onClose: rB,
                    unlockPointerKey: "schematicThumbnailUploaderPopup"
                  })
                }({
                  schematicId: uc.schematicId,
                  ownedThumbnailCount: yB.length,
                  onThumbnailReady: Jc,
                  onClose: Tc
                })
              },
              children: [(0, pc.jsx)(qB.e, {
                name: "plus"
              }), (0, pc.jsx)("div", {
                className: "ThumbnailGridItemLabel",
                children: mB("thumbnail:uploadThumbnail")
              })]
            })]
          })
        })]
      })
    }

    function Rc(cB) {
      let {
        rejectedThumbnails: Bc,
        userContext: nc,
        isMountedRef: Ic,
        onAcknowledged: uc
      } = cB;
      const {
        t: Pc
      } = (0, sc.x)(), [Oc, Tc] = (0, Vc.useState)(!1), [fc, mB] = (0, Vc.useState)(!1), ec = function(cB) {
        const Bc = new Map;
        for (const nc of cB) {
          const cB = nc.rejectionPolicyId,
            Vc = Bc.get(cB);
          Vc ? Vc.push(nc) : Bc.set(cB, [nc])
        }
        return Bc
      }(Bc);
      return (0, pc.jsxs)("div", {
        className: "ThumbnailRejectionNotice",
        children: [(0, pc.jsxs)("div", {
          className: "ThumbnailRejectionNoticeTitle",
          children: [(0, pc.jsx)(qB.e, {
            name: "triangle-exclamation"
          }), " ", Pc("thumbnail:thumbnailsRejected"), " ", (0, pc.jsx)(qB.e, {
            name: "triangle-exclamation"
          })]
        }), (0, pc.jsx)("div", {
          className: "ThumbnailRejectionNoticeSubtitle",
          children: Pc("thumbnail:thumbnailsRejectedDescription")
        }), (0, pc.jsx)("div", {
          className: "ThumbnailRejectionNoticeList",
          children: [...ec.entries()].map((cB => {
            let [Bc, nc] = cB;
            const Vc = Jc[Bc];
            return (0, pc.jsxs)("div", {
              className: "ThumbnailRejectionNoticeGroup",
              children: [(0, pc.jsx)("div", {
                className: "ThumbnailRejectionNoticeItems",
                children: nc.map((cB => (0, pc.jsxs)("div", {
                  className: "ThumbnailRejectionNoticeItem",
                  children: [(0, pc.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemIcon",
                    children: (0, pc.jsx)(qB.e, {
                      name: "image-slash"
                    })
                  }), (0, pc.jsx)("div", {
                    className: "ThumbnailRejectionNoticeItemDetails",
                    children: (0, pc.jsx)("div", {
                      className: "ThumbnailRejectionNoticeItemName",
                      children: cB.name
                    })
                  })]
                }, cB.id)))
              }), (0, pc.jsxs)("div", {
                className: "ThumbnailRejectionNoticeGroupReason",
                children: [Pc("thumbnail:rejectionReason"), " ", Vc ? Pc(Vc.reason) : Bc]
              }), Vc && (0, pc.jsx)("ul", {
                className: "ThumbnailRejectionNoticeGroupTips",
                children: Vc.tips.map((cB => (0, pc.jsx)("li", {
                  children: Pc(cB)
                }, cB)))
              })]
            }, Bc)
          }))
        }), (0, pc.jsxs)("label", {
          className: "ThumbnailRejectionNoticeCheckbox",
          children: [(0, pc.jsx)(gB.c, {
            checked: Oc,
            onChange: cB => Tc(cB.target.checked),
            disabled: fc
          }), (0, pc.jsx)("span", {
            children: Pc("thumbnail:haveReadRejectionReasons")
          })]
        }), (0, pc.jsx)(rB.n, {
          onClick: async function() {
            mB(!0);
            const cB = await Promise.allSettled(Bc.map((cB => Uc.e.deleteSchematicThumbnail(nc, cB.id))));
            if (!Ic.current) return;
            const Vc = cB.filter((cB => "rejected" === cB.status));
            Vc.length > 0 && console.error("Some rejected thumbnails failed to delete:", Vc), uc()
          },
          disabled: !Oc || fc,
          className: "ThumbnailRejectionNoticeAcceptButton",
          children: fc ? (0, pc.jsx)(Mc.e, {}) : Pc("general:accept")
        })]
      })
    }

    function iB(cB) {
      let {
        thumbnailId: Bc,
        thumbnailName: nc,
        onClose: Vc
      } = cB;
      const {
        t: Ic
      } = (0, sc.x)();
      return (0, pc.jsxs)("div", {
        className: "ThumbnailDeleteConfirm",
        children: [(0, pc.jsx)("div", {
          className: "ThumbnailDeleteConfirmTitle",
          children: Ic("thumbnail:deleteThumbnail")
        }), (0, pc.jsxs)("div", {
          className: "ThumbnailDeleteConfirmImageContainer",
          children: [(0, pc.jsx)("img", {
            className: "ThumbnailDeleteConfirmImage",
            src: `${Fc.clientSideServerUrls.s3Url}/customThumbnails/${Bc}.jpg`,
            alt: "Thumbnail to delete"
          }), (0, pc.jsx)("div", {
            className: "ThumbnailGridItemLabel",
            children: nc
          })]
        }), (0, pc.jsx)("div", {
          className: "ThumbnailDeleteConfirmSubtitle",
          children: Ic("thumbnail:deleteThumbnailConfirmation")
        }), (0, pc.jsxs)("div", {
          className: "ThumbnailDeleteConfirmButtons",
          children: [(0, pc.jsxs)(rB.L, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => Vc(!0),
            children: [(0, pc.jsx)(qB.e, {
              name: "trash-can"
            }), " ", Ic("general:delete")]
          }), (0, pc.jsx)(rB.g, {
            className: "ThumbnailDeleteConfirmButton",
            onClick: () => Vc(!1),
            children: Ic("general:cancel")
          })]
        })]
      })
    }
    var Kc = nc(2339),
      xB = nc(4031),
      dc = nc(4033),
      Ac = nc(4076);

    function Gc(cB) {
      let {
        schematicData: Bc,
        setTexturePack: nc,
        initializeTexturePack: Ic,
        publishFormEnabled: rB
      } = cB;
      const {
        t: uc
      } = (0, sc.x)(), [Mc, Pc] = (0, Vc.useState)(null), [qB, Oc] = (0, Vc.useState)(null), [Tc, mB] = (0, Vc.useState)(!1), ec = (0, bB.e)(), tB = rB && !Tc, Sc = Bc.customTexturePackKey;

      function yB(cB) {
        var Bc;
        Pc(cB.metaData.id), Oc(null !== (Bc = cB.metaData.fromFolderName) && void 0 !== Bc ? Bc : null), (cB.metaData.id !== Kc.o.CUSTOM || cB.metaData.fromFolderName) && nc(cB)
      }
      return (0, Vc.useEffect)((() => {
        Sc && (mB(!0), (0, xB.b)(Sc).then((cB => {
          var Bc;
          ec.current && (cB ? (Pc(cB.metaData.id), Oc(null !== (Bc = cB.metaData.fromFolderName) && void 0 !== Bc ? Bc : null), Ic(cB)) : console.error(`No texture pack at ${Sc}`))
        })).catch((cB => {
          console.error("Error fetching texture pack: ", cB)
        })).finally((() => {
          mB(!1)
        })))
      }), [Sc, Ic, ec]), (0, pc.jsxs)("div", {
        className: "BloxdForm TexturePackSection",
        children: [(0, pc.jsx)("div", {
          className: "SectionTitle",
          children: uc("customTexturePack:customTexturePack")
        }), (0, pc.jsxs)("div", {
          className: "TexturePackList",
          children: [(0, pc.jsx)("div", {
            className: fc()("TexturePack", {
              Selected: null === Mc && !Tc,
              Disabled: !tB
            }),
            onClick: () => {
              tB && (Pc(null), nc(null), Oc(null))
            },
            children: (0, pc.jsx)("div", {
              className: "TexturePackName",
              children: "No Override"
            })
          }), Object.values(Kc.o).map((cB => (0, pc.jsx)(dc.g, {
            id: cB,
            isSelected: cB === Mc,
            setSelected: yB,
            disabled: !tB
          }, cB)))]
        }), Mc === Kc.o.CUSTOM && (0, pc.jsx)(Ac.b, {
          folderName: qB,
          onTexturePackUpdated: yB,
          disabled: !tB,
          maxFileSizeMb: 25,
          packOwner: "customGame"
        })]
      })
    }
    var cn = nc(4084);

    function BB(cB) {
      var Bc;
      let {
        gameCategory: nc,
        setGameCategory: Vc,
        disabled: Ic
      } = cB;
      const uc = null !== (Bc = (0, mB.eb)(nc)) && void 0 !== Bc ? Bc : "other";
      return (0, pc.jsxs)("div", {
        className: "GameCategoryPicker",
        children: [(0, pc.jsx)(Sc.f, {
          label: "worldBuilder:gameCategoryGroup",
          className: "GameCategoryGroup",
          disabled: Ic,
          children: (0, pc.jsx)(yB.c, {
            options: mB.W.map((cB => ({
              value: cB,
              label: mB.V[cB]
            }))),
            value: uc,
            onChange: cB => {
              cB.value !== uc && Vc(mB.Q[cB.value][0])
            }
          })
        }), (0, pc.jsx)(Sc.f, {
          label: "worldBuilder:gameCategory",
          className: "GameCategory",
          disabled: Ic,
          children: (0, pc.jsx)("div", {
            className: "GameCategoryOptions",
            children: mB.Q[uc].map((cB => (0, pc.jsx)(rB.Q, {
              active: cB === nc,
              onClick: () => {
                Vc(cB)
              },
              children: (0, mB.db)(cB)
            }, cB)))
          })
        })]
      })
    }

    function nB(cB) {
      let {
        editor: Bc,
        onClose: nc
      } = cB;
      const {
        t: Vc
      } = (0, sc.x)(), {
        schematicData: Ic,
        updateSchematicData: rB,
        publishFormEnabled: Mc,
        formEnabled: Pc
      } = Bc;
      return (0, pc.jsxs)(pc.Fragment, {
        children: [(0, pc.jsxs)(hc, {
          icon: "pen-to-square",
          title: Vc("worldBuilder:basicsSection"),
          disabled: !Pc,
          children: [(0, pc.jsx)(aB, {
            label: Vc("general:name"),
            caption: Vc("worldBuilder:schematicNameTagsHint"),
            children: (0, pc.jsx)(uc.e, {
              className: "SchematicPageName",
              defaultValue: Ic.name,
              onValueChange: cB => rB("name", cB),
              placeholderText: Vc("worldBuilder:schematicNamePlaceholder"),
              maxLength: Oc.lb
            })
          }), (0, pc.jsx)(aB, {
            label: Vc("general:description"),
            children: (0, pc.jsx)(uc.e, {
              className: "SchematicPageDescription",
              useTextarea: !0,
              defaultValue: Ic.description,
              onValueChange: cB => rB("description", cB),
              placeholderText: Vc("worldBuilder:schematicDescriptionPlaceholder"),
              maxLength: Oc.hb
            })
          }), (0, pc.jsx)(BB, {
            gameCategory: Ic.gameCategory,
            setGameCategory: cB => rB("gameCategory", cB),
            disabled: !Mc
          }), !0 === Ic.gamePublished && (0, pc.jsx)(jB, {
            schematicData: Ic,
            updateSchematicData: rB,
            publishFormEnabled: Mc,
            onClose: function() {
              null === nc || void 0 === nc || nc()
            }
          })]
        }), (0, pc.jsx)(Yc, {
          schematicData: Ic,
          updateSchematicData: rB,
          publishFormEnabled: Mc,
          formEnabled: Pc
        }), !0 === Ic.gamePublished && (0, pc.jsx)(hc, {
          icon: "palette",
          title: Vc("worldBuilder:texturePackSection"),
          disabled: !Pc,
          children: (0, pc.jsx)(Gc, {
            schematicData: Ic,
            setTexturePack: Bc.setTexturePack,
            initializeTexturePack: Bc.initializeTexturePack,
            publishFormEnabled: Mc
          })
        })]
      })
    }

    function VB(cB) {
      let {
        editor: Bc
      } = cB;
      const {
        t: nc
      } = (0, sc.x)(), {
        schematicData: Vc,
        formEnabled: Ic,
        hasUnsavedChanges: uc
      } = Bc, Oc = Ic && uc;
      return (0, pc.jsxs)("footer", {
        className: "SchematicPageFooter",
        children: [Ic && uc && (0, pc.jsxs)("div", {
          className: "SchematicPageFooterStatus",
          children: [(0, pc.jsx)("span", {
            className: "SchematicPageFooterStatusDot"
          }), nc("worldBuilder:unsavedChanges")]
        }), (0, pc.jsx)(Pc.d, {
          tooltipInner: (0, pc.jsx)("div", {
            className: "SaveButtonTooltip",
            children: nc(Ic && !uc ? "worldBuilder:saveChangesNoneDescription" : "worldBuilder:saveChangesDescription")
          }),
          children: (0, pc.jsxs)(rB.d, {
            className: "SaveChangesButton",
            onClick: () => Bc.saveSchematic(Vc.gamePublished),
            disabled: !Oc,
            children: [(0, pc.jsxs)("span", {
              className: Ic ? "" : "SaveChangesButtonBodyHidden",
              children: [(0, pc.jsx)(qB.e, {
                name: "wrench"
              }), " ", nc("worldBuilder:saveChanges")]
            }), !Ic && (0, pc.jsx)(Mc.e, {})]
          })
        })]
      })
    }

    function IB(cB) {
      let {
        schematic: Bc,
        onSchematicUpdate: nc,
        onClose: Ic,
        inSourceWorld: uc
      } = cB;
      const {
        t: Mc
      } = (0, sc.x)();

      function Pc() {
        null === Ic || void 0 === Ic || Ic()
      }
      const qB = (0, cn.c)(Bc, {
        onNavigateAway: Pc,
        inSourceWorld: uc
      });
      return (0, Vc.useEffect)((() => {
        null === nc || void 0 === nc || nc(qB.schematicData)
      }), [qB.schematicData, nc]), (0, pc.jsxs)("div", {
        className: "SchematicPage SchematicPagePopupVariant",
        children: [(0, pc.jsxs)("div", {
          className: "SchematicPageBody",
          children: [(0, pc.jsx)(rB.c, {
            onClick: Pc,
            children: Mc("worldBuilder:back")
          }), (0, pc.jsx)(hc, {
            icon: "rocket-launch",
            title: Mc("worldBuilder:actionsSection"),
            disabled: !qB.formEnabled,
            children: (0, pc.jsx)(Lc.e, {
              editor: qB
            })
          }), (0, pc.jsx)(nB, {
            editor: qB,
            onClose: Pc
          })]
        }), (0, pc.jsx)(VB, {
          editor: qB
        })]
      })
    }

    function rn(cB) {
      let {
        schematic: Bc,
        onSchematicUpdate: nc,
        onClose: Vc,
        inSourceWorld: rB
      } = cB;
      Ic.NotificationProvider.showCustomPopup({
        body: cB => (0, pc.jsx)(IB, {
          schematic: Bc,
          onSchematicUpdate: nc,
          onClose: cB,
          inSourceWorld: rB
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: Vc,
        unlockPointerKey: "schematicPagePopup"
      })
    }
  },
  4002: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Oc
    });
    var Vc = nc(912),
      Ic = nc.n(Vc),
      rB = nc(1051),
      uc = nc(926),
      sc = nc(1255),
      Mc = nc(1205),
      Pc = nc(1188),
      qB = nc(957);

    function Oc(cB) {
      let {
        editor: Bc,
        className: nc
      } = cB;
      const {
        t: Vc
      } = (0, rB.x)(), {
        schematicData: Oc,
        formEnabled: Tc,
        publishFormEnabled: fc
      } = Bc, mB = !Tc || !fc;
      return (0, qB.jsxs)("div", {
        className: Ic()("PublishButtonContainer", nc),
        children: [Bc.canEditSourceWorld && (0, qB.jsxs)(sc.d, {
          onClick: Bc.editSourceWorld,
          disabled: mB,
          children: [(0, qB.jsx)(uc.e, {
            name: "edit"
          }), " ", Vc("worldBuilder:editSourceWorld")]
        }), !Oc.gamePublished && (0, qB.jsx)(Mc.d, {
          tooltipInner: (0, qB.jsx)("div", {
            className: "PublishButtonTooltip",
            children: Vc("worldBuilder:publishAsGameDescription")
          }),
          children: (0, qB.jsxs)(sc.n, {
            onClick: () => Bc.saveSchematic(!0),
            disabled: mB,
            children: [(0, qB.jsx)(uc.e, {
              name: "rocket-launch"
            }), " ", Vc("worldBuilder:publishAsGame"), " ", (0, qB.jsx)(uc.e, {
              name: "info-circle"
            })]
          })
        }), !0 === Oc.gamePublished && (0, qB.jsxs)(qB.Fragment, {
          children: [(0, qB.jsx)(Mc.d, {
            tooltipInner: (0, qB.jsx)("div", {
              className: "PublishButtonTooltip",
              children: Vc("worldBuilder:unpublishAsGameDescription")
            }),
            children: (0, qB.jsxs)(sc.L, {
              onClick: Bc.unpublishSchematic,
              disabled: mB,
              children: [(0, qB.jsx)(uc.e, {
                name: "rocket-launch"
              }), " ", Vc("worldBuilder:unpublishAsGame"), " ", (0, qB.jsx)(uc.e, {
                name: "info-circle"
              })]
            })
          }), (0, qB.jsxs)(sc.d, {
            onClick: Bc.playGame,
            disabled: mB,
            children: [(0, qB.jsx)(uc.e, {
              name: "joystick"
            }), " ", Vc("general:playGame")]
          })]
        }), !Tc && (0, qB.jsx)(Pc.e, {
          loaderType: "Secondary"
        })]
      })
    }
  },
  3959: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Tc
    });
    var Vc = nc(912),
      Ic = nc.n(Vc),
      rB = nc(926),
      uc = nc(1188),
      sc = nc(2672),
      Mc = nc(145),
      Pc = nc(2716),
      qB = nc(2701),
      Oc = nc(957);

    function Tc(cB) {
      let {
        game: Bc
      } = cB;
      const nc = (0, Mc.l)() ? "large" : "small",
        Vc = (0, Pc.f)(Bc, nc),
        Tc = (0, sc.c)(Vc),
        fc = void 0 !== Tc.blurhash;
      return (0, Oc.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [Tc.isLoading && !fc && (0, Oc.jsx)(uc.e, {
          loaderType: "Secondary"
        }), !Tc.failed && (null !== Tc.src || fc) && (0, Oc.jsx)("div", {
          className: Ic()("SchematicImage", qB.g, {
            SchematicImageFadeIn: Tc.fadeIn && !fc
          }),
          style: (0, qB.d)(Tc),
          children: (0, Oc.jsx)(qB.b, {
            image: Tc
          })
        }), Tc.failed && (0, Oc.jsx)("div", {
          className: "SchematicImageError",
          children: (0, Oc.jsx)(rB.e, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  4031: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Ic
    });
    var Vc = nc(1062);
    async function Ic(cB) {
      const Bc = await fetch(`${Vc.clientSideServerUrls.s3Url}/${cB}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === Bc.status || 403 === Bc.status) return null;
      if (!Bc.ok) throw new Error(`Failed to download the texture pack (${Bc.status})`);
      return await Bc.json()
    }
  },
  4084: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => tB
    });
    var Vc = nc(73),
      Ic = nc(1373),
      rB = nc(867),
      uc = nc(152),
      sc = nc(1370),
      Mc = nc(27),
      Pc = nc(1566),
      qB = nc(1314),
      Oc = nc(3690),
      Tc = nc(1194),
      fc = nc(985),
      mB = nc(1330);

    function ec(cB, Bc) {
      return {
        schematicId: cB.schematicId,
        name: cB.name,
        description: cB.description,
        gamePublished: Bc,
        gameCategory: cB.gameCategory,
        defaultGamemode: cB.defaultGamemode,
        voidDeathHeight: cB.voidDeathHeight,
        disableKeepInventory: cB.disableKeepInventory,
        disableTpRequests: cB.disableTpRequests,
        disableLobbySpawn: cB.disableLobbySpawn,
        disableMobs: cB.disableMobs,
        disableSpawnProtection: cB.disableSpawnProtection,
        disableFallDamage: cB.disableFallDamage,
        worldBorder: cB.worldBorder,
        hideLobbyCode: cB.hideLobbyCode,
        enableSmpMarketplace: cB.enableSmpMarketplace,
        enableSurvivalGuns: cB.enableSurvivalGuns,
        enableSpawnReset: cB.enableSpawnReset,
        enableDayNight: cB.enableDayNight,
        persistWorld: cB.persistWorld,
        persistInventory: cB.persistInventory
      }
    }

    function tB(cB) {
      let {
        onNavigateAway: Bc,
        inSourceWorld: nc = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const {
        userContext: tB
      } = (0, fc.c)(), Sc = (0, mB.useNavigatePreserveSearch)(), [yB, zB] = (0, Vc.useState)({
        ...cB
      }), [pc, hc] = (0, Vc.useState)("Enter"), [aB, lc] = (0, Vc.useState)(void 0), Yc = (0, Vc.useRef)(ec(cB, cB.gamePublished)), Lc = (0, Vc.useRef)(void 0), gB = "Enter" === pc, Uc = tB.playerHasRank("developer") || tB.playerHasRank("admin") || "Enter" === pc && !1 !== yB.schematicContainsSpawnBlock, bB = void 0 !== aB && aB !== Lc.current || JSON.stringify(ec(yB, yB.gamePublished)) !== JSON.stringify(Yc.current);

      function Zc(cB, Bc) {
        zB((nc => ({
          ...nc,
          [cB]: Bc
        })))
      }
      const Qc = (0, Vc.useCallback)((cB => {
        Lc.current = cB, lc(cB)
      }), []);

      function Cc(cB) {
        hc("Loading");
        const Bc = ec(yB, cB),
          nc = aB !== Lc.current ? aB : void 0;
        qB.e.updateSchematic(tB, Bc, nc).then((nc => {
          let {
            customTexturePackKey: Vc
          } = nc;
          hc("Success"), Zc("customTexturePackKey", Vc), Yc.current = Bc, Lc.current = void 0, lc(void 0), setTimeout((() => {
            Zc("gamePublished", cB), hc("Enter")
          }), 1e3)
        })).catch((cB => {
          var Bc;
          (console.error("Failed to save schematic:", cB), hc("Error"), cB instanceof uc.c && cB.errorMessageForUser) && Tc.NotificationProvider.showAlertPopup({
            title: "worldBuilder:changesNotSaved",
            subtitle: cB.errorMessageForUser,
            textOpts: {
              subtitle: null !== (Bc = cB.errorMessageTranslationParams) && void 0 !== Bc ? Bc : void 0
            },
            confirmText: "general:ok"
          });
          setTimeout((() => {
            hc("Enter")
          }), 1e3)
        }))
      }
      return {
        schematicData: yB,
        updateSchematicData: Zc,
        setTexturePack: lc,
        initializeTexturePack: Qc,
        updateState: pc,
        formEnabled: gB,
        publishFormEnabled: Uc,
        hasUnsavedChanges: bB,
        canEditSourceWorld: !nc,
        saveSchematic: Cc,
        unpublishSchematic: function() {
          Tc.NotificationProvider.showPromptPopup({
            icon: "rocket-launch",
            title: "worldBuilder:unpublishAsGameConfirmTitle",
            subtitle: "worldBuilder:unpublishAsGameConfirmSubtitle",
            confirmText: "worldBuilder:unpublishAsGame",
            cancelText: "general:cancel",
            unlockPointerKey: "unpublishGamePrompt"
          }).getResult().then((cB => {
            !0 === cB && Cc(!1)
          }))
        },
        editSourceWorld: function() {
          hc("Loading"), Oc.c.getSourceWorld(yB.schematicId).then((cB => {
            Pc.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, Mc.h)("other"), Sc((0, Ic.e)("classic", cB)), null === Bc || void 0 === Bc || Bc()
          })).catch((cB => {
            console.error("Failed to get source world:", cB), hc("Error"), setTimeout((() => {
              hc("Enter")
            }), 1e3)
          }))
        },
        playGame: function() {
          Pc.gameBridge.send("leaveGame", {
            reloadPath: "/"
          }), Sc((0, sc.w)((0, rB.v)(yB.schematicId), yB)), null === Bc || void 0 === Bc || Bc()
        }
      }
    }
  },
  4076: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => fc
    });
    var Vc = nc(73),
      Ic = nc(912),
      rB = nc.n(Ic),
      uc = nc(4006),
      sc = nc(1188),
      Mc = nc(1051),
      Pc = nc(2333),
      qB = nc(2458),
      Oc = nc(926),
      Tc = nc(957);

    function fc(cB) {
      let {
        folderName: Bc,
        onTexturePackUpdated: Ic,
        disabled: fc = !1,
        maxFileSizeMb: mB,
        packOwner: ec
      } = cB;
      const {
        t: tB
      } = (0, Mc.x)(), [Sc, yB] = (0, Vc.useState)(!1), [zB, pc] = (0, Vc.useState)(null), [hc, aB] = (0, Vc.useState)(null), lc = (0, Vc.useRef)(null);
      const {
        getRootProps: Yc,
        getInputProps: Lc,
        isDragActive: gB
      } = (0, uc.b)({
        onDrop: async function(cB) {
          yB(!0);
          try {
            const Bc = await (0, Pc.o)(cB);
            if ("customGame" === ec && (0, qB.f)(Bc)) return void pc(tB(qB.b));
            if (void 0 !== mB) {
              const cB = JSON.stringify(Bc).length / 1048576;
              if (cB > mB) return void pc(`File size is too large. Max size is ${mB}MB. Current size is ${cB}MB.`)
            }
            pc(null), aB(null), Ic(Bc), lc.current = Bc,
              function(cB, Bc) {
                const Vc = cB.modelOverrides;
                Vc && Promise.all([nc.e(184), nc.e(183)]).then((() => nc(33032))).then((nc => {
                  let {
                    packDisplayName: Ic,
                    refusedPackModels: rB,
                    packModelSummary: uc
                  } = nc;
                  const sc = Ic(cB.metaData);
                  Bc(uc(sc, rB(sc, Vc, !1)))
                })).catch((cB => {
                  console.error("Checking the texture pack's models failed:", cB)
                }))
              }(Bc, (cB => {
                lc.current === Bc && aB(cB)
              }))
          } catch {
            pc("Invalid Texture Pack Folder")
          } finally {
            yB(!1)
          }
        },
        useFsAccessApi: !1,
        disabled: fc
      });
      return (0, Tc.jsxs)("div", {
        className: "CustomTexturePackContainer",
        children: [(0, Tc.jsxs)("div", {
          className: "CustomTextureWarning",
          children: [tB("settingsMenu:customTextureWarning"), ".", (0, Tc.jsx)("br", {}), tB("settingsMenu:viewDocumentation"), ":", " ", (0, Tc.jsx)("a", {
            href: "https://github.com/Bloxdy/texturePacks",
            target: "_blank",
            rel: "noreferrer",
            children: "github.com/Bloxdy/texturePacks"
          })]
        }), zB && (0, Tc.jsxs)("div", {
          className: "CustomTextureError",
          children: [tB("general:error"), ": ", zB]
        }), hc && (0, Tc.jsx)("div", {
          className: "CustomTextureError",
          children: hc
        }), (0, Tc.jsxs)("div", {
          ...Yc({
            className: rB()("CustomTextureFolderUpload", {
              ActiveDrag: gB,
              Disabled: fc
            })
          }),
          children: [(0, Tc.jsx)("input", {
            ...Lc({
              webkitdirectory: "true"
            })
          }), Sc && (0, Tc.jsx)("div", {
            className: "CustomTextureFolderUploadLoading",
            children: (0, Tc.jsx)(sc.e, {})
          }), !Sc && !gB && Bc && (0, Tc.jsxs)(Tc.Fragment, {
            children: [(0, Tc.jsx)("div", {
              className: "CustomTextureFolderUploadIcon Active",
              children: (0, Tc.jsx)(Oc.e, {
                name: "folder-image"
              })
            }), (0, Tc.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions Active",
              children: Bc
            })]
          }), !Sc && (gB || !Bc) && (0, Tc.jsxs)(Tc.Fragment, {
            children: [(0, Tc.jsx)("div", {
              className: "CustomTextureFolderUploadIcon",
              children: (0, Tc.jsx)(Oc.e, {
                name: "up-from-bracket"
              })
            }), (0, Tc.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions",
              children: "Drag and drop a Texture Pack folder here"
            })]
          })]
        })]
      })
    }
  },
  4035: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => mB,
      f: () => yB,
      g: () => ec,
      i: () => Sc
    });
    var Vc = nc(73),
      Ic = nc(4041),
      rB = nc(3551),
      uc = nc(1205),
      sc = nc(4066),
      Mc = nc(912),
      Pc = nc.n(Mc),
      qB = nc(1194),
      Oc = nc(1495),
      Tc = nc(4073),
      fc = nc(957);

    function mB(cB) {
      let {
        label: Bc,
        onClick: nc,
        checked: Vc,
        circleInfoText: Ic,
        className: sc,
        disabled: Mc
      } = cB;
      return (0, fc.jsx)("div", {
        "aria-disabled": Mc || void 0,
        "data-pad-focusable": !0,
        className: Pc()("SettingBox CheckboxContainer", {
          [sc]: sc,
          SettingBoxDisabled: Mc
        }),
        onClick: () => {
          Mc || nc(!Vc)
        },
        children: (0, fc.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, fc.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, fc.jsx)(rB.c, {
              className: "SettingsCheckbox",
              checked: Vc,
              disabled: Mc,
              onChange: () => {}
            })
          }), (0, fc.jsxs)("div", {
            className: "CheckboxText",
            children: [Bc, Ic && (0, fc.jsx)("span", {
              onClick: cB => cB.stopPropagation(),
              children: (0, fc.jsx)(uc.c, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: Ic
              })
            })]
          })]
        })
      })
    }

    function ec(cB) {
      let {
        name: Bc,
        onChange: nc,
        min: Ic,
        max: rB,
        step: sc,
        initValue: Mc,
        circleInfoText: qB,
        format: Oc,
        className: Tc,
        padStep: mB,
        disabled: ec = !1,
        selectableMax: Sc,
        cappedNote: yB
      } = cB;
      const [zB, pc] = (0, Vc.useState)(Mc);
      (0, Vc.useEffect)((() => {
        pc(Mc)
      }), [Mc]);
      const hc = void 0 !== Sc && Sc < rB,
        aB = hc ? {
          "--slider-selectable": (Sc - Ic) / (rB - Ic)
        } : void 0;
      return (0, fc.jsxs)("div", {
        className: Pc()("SettingBox SettingsSliderDiv", {
          [Tc]: Tc,
          SettingBoxDisabled: ec,
          SliderCapped: hc
        }),
        style: aB,
        children: [(0, fc.jsxs)("div", {
          className: "SliderText",
          children: [`${Bc}: ${Oc?Oc(zB):zB}`, qB && (0, fc.jsx)(uc.c, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: qB
          })]
        }), (0, fc.jsx)("div", {
          className: "SliderDiv",
          children: (0, fc.jsx)(tB, {
            value: zB,
            min: Ic,
            max: rB,
            step: sc,
            onChange: cB => {
              if (hc && cB >= Sc && zB === Sc) return;
              const Bc = hc ? Math.min(cB, Sc) : cB;
              pc(Bc), nc(Bc)
            },
            format: Oc,
            padStep: mB,
            disabled: ec
          })
        }), hc && yB && (0, fc.jsx)("div", {
          className: "SliderNote",
          children: yB
        })]
      })
    }

    function tB(cB) {
      var Bc;
      let {
        value: nc,
        min: rB,
        max: uc,
        step: sc,
        onChange: Mc,
        orientation: Pc,
        reverse: qB,
        setIsChanging: Oc,
        tooltip: mB,
        labels: ec,
        handleLabel: tB,
        format: Sc,
        onChangeStart: yB,
        onChangeComplete: zB,
        padStep: pc,
        disabled: hc = !1
      } = cB;
      const aB = (0, Vc.useRef)(null),
        lc = (0, Vc.useRef)(null);
      (0, Vc.useLayoutEffect)((() => {
        var cB, Bc, nc;
        const Vc = null !== (cB = null === (Bc = aB.current) || void 0 === Bc ? void 0 : Bc.querySelector(".rangeslider")) && void 0 !== cB ? cB : null;
        null === Vc || void 0 === Vc || Vc.setAttribute("data-pad-slider", ""), null === Vc || void 0 === Vc || Vc.setAttribute("data-pad-focusable", ""), null === Vc || void 0 === Vc || null === (nc = Vc.querySelector(".rangeslider__handle")) || void 0 === nc || nc.setAttribute("data-pad-slider-handle", ""), lc.current = Vc
      }), []), (0, Vc.useLayoutEffect)((() => {
        var cB, Bc;
        hc ? null === (cB = lc.current) || void 0 === cB || cB.setAttribute("aria-disabled", "true") : null === (Bc = lc.current) || void 0 === Bc || Bc.removeAttribute("aria-disabled")
      }), [hc]);
      const Yc = (null !== (Bc = String(sc).split(".")[1]) && void 0 !== Bc ? Bc : "").length,
        Lc = cB => {
          const Bc = Number((Math.round((cB - rB) / sc) * sc + rB).toFixed(Yc));
          return Math.min(uc, Math.max(rB, Bc))
        },
        gB = (0, Vc.useRef)(!1);
      return (0, Tc.g)(lc, {
        adjust: cB => {
          if (hc) return;
          const Bc = null !== pc && void 0 !== pc ? pc : Math.max(sc, Math.round((uc - rB) / 20 / sc) * sc),
            Vc = Lc(nc + cB * Bc * (qB ? -1 : 1));
          Vc !== nc && (null === yB || void 0 === yB || yB(), Mc(Vc), null === zB || void 0 === zB || zB())
        },
        setFraction: cB => {
          if (hc) return;
          const Bc = Lc(rB + (qB ? 1 - cB : cB) * (uc - rB));
          Bc !== nc && (gB.current || (gB.current = !0, null === yB || void 0 === yB || yB()), Mc(Bc))
        },
        endDrag: () => {
          gB.current && (gB.current = !1, null === zB || void 0 === zB || zB())
        }
      }), (0, fc.jsx)("div", {
        ref: aB,
        style: {
          display: "contents"
        },
        children: (0, fc.jsx)(Ic.e, {
          value: nc,
          min: rB,
          max: uc,
          step: sc,
          onChange: Mc,
          orientation: Pc,
          reverse: qB,
          tooltip: mB,
          labels: ec,
          handleLabel: tB,
          format: Sc,
          onChangeStart: () => {
            null === yB || void 0 === yB || yB(), null === Oc || void 0 === Oc || Oc(!0)
          },
          onChangeComplete: () => {
            null === Oc || void 0 === Oc || Oc(!1), null === zB || void 0 === zB || zB()
          }
        })
      })
    }
    async function Sc() {
      const cB = qB.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await cB.getResult() && (0, Oc.reloadBloxd)()
    }

    function yB(cB) {
      let {
        label: Bc,
        options: nc,
        value: Vc,
        onChange: Ic,
        circleInfoText: rB
      } = cB;
      return (0, fc.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, fc.jsxs)("div", {
          className: "SliderText",
          children: [Bc, rB && (0, fc.jsx)(uc.c, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: rB
          })]
        }), (0, fc.jsx)(sc.e, {
          ariaLabel: Bc,
          options: nc,
          value: Vc,
          onChange: Ic
        })]
      })
    }
  },
  4033: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => mB,
      g: () => ec
    });
    var Vc = nc(2333),
      Ic = nc(2339),
      rB = nc(73),
      uc = nc(912),
      sc = nc.n(uc),
      Mc = nc(1188),
      Pc = nc(2329),
      qB = nc(1194),
      Oc = nc(4035),
      Tc = nc(4076),
      fc = nc(957);

    function mB(cB) {
      var Bc;
      let {
        setApplySettingsCallback: nc
      } = cB;
      const [, uc] = (0, rB.useReducer)((cB => cB + 1), 0), sc = (0, rB.useRef)(!1), Mc = (0, rB.useRef)(null);

      function mB() {
        Mc.current !== Pc.c.getId() || Pc.c.getId() === Ic.o.CUSTOM && sc.current ? nc((() => Oc.i)) : nc(null)
      }
      async function tB(cB) {
        if (Pc.c.getId() !== cB.metaData.id) {
          if (Pc.c.getId() === Ic.o.CUSTOM && Pc.c.getFromFolderName()) {
            const cB = qB.NotificationProvider.showPromptPopup({
              title: "settingsMenu:loseChangesTitle",
              subtitle: "settingsMenu:loseChangesSubtitle",
              confirmText: "general:continue",
              destructive: !0,
              confirmTooltip: "",
              cancelText: "general:cancel",
              cancelTooltip: ""
            });
            if (!0 !== await cB.getResult()) return
          }
          Pc.c.setFromJson(cB, "player"), Pc.c.saveTexturePack(), mB(), uc()
        }
      }(0, rB.useEffect)((() => {
        Mc.current = Pc.c.getId()
      }), []);
      const Sc = Vc.e,
        yB = [Sc, ...Object.values(Ic.o).filter((cB => cB !== Sc))];
      return (0, fc.jsx)(fc.Fragment, {
        children: (0, fc.jsxs)("div", {
          className: "TexturePackCategory SettingsMenuRightInner",
          children: [(0, fc.jsx)("div", {
            className: "TexturePackList",
            children: yB.map((cB => (0, fc.jsx)(ec, {
              id: cB,
              isSelected: cB === Pc.c.getId(),
              setSelected: tB
            }, cB)))
          }), Pc.c.getId() === Ic.o.CUSTOM && (0, fc.jsx)(Tc.b, {
            folderName: null !== (Bc = Pc.c.getFromFolderName()) && void 0 !== Bc ? Bc : null,
            onTexturePackUpdated: function(cB) {
              Pc.c.setFromJson(cB, "player"), Pc.c.saveTexturePack(), sc.current = !0, mB(), uc()
            },
            packOwner: "player"
          })]
        })
      })
    }

    function ec(cB) {
      let {
        id: Bc,
        isSelected: nc,
        setSelected: uc,
        disabled: Pc = !1
      } = cB;
      const [qB, Oc] = (0, rB.useState)(!0), [Tc, mB] = (0, rB.useState)(""), [ec, tB] = (0, rB.useState)(""), [Sc, yB] = (0, rB.useState)(""), zB = (0, rB.useRef)({});
      return (0, rB.useEffect)((() => {
        (0, Vc.m)(Bc).then((cB => {
          var Bc;
          cB && (zB.current = cB, Oc(!1), mB(zB.current.metaData.name), tB(zB.current.metaData.author), yB(null !== (Bc = zB.current.metaData.previewImage) && void 0 !== Bc ? Bc : ""))
        })).catch((cB => {
          console.warn(`Failed to fetch texture pack ${Bc}`, cB)
        }))
      }), [Bc]), (0, fc.jsxs)("div", {
        "data-pad-focusable": !0,
        "aria-disabled": Pc || void 0,
        className: sc()("TexturePack", {
          Selected: nc,
          Custom: Bc === Ic.o.CUSTOM,
          Disabled: Pc
        }),
        onClick: () => {
          qB || Pc || uc(zB.current)
        },
        children: [(0, fc.jsx)("div", {
          className: "TexturePackBg",
          style: {
            backgroundImage: Sc ? `url(${Sc})` : void 0
          }
        }), qB && (0, fc.jsx)("div", {
          className: "TexturePackName",
          children: (0, fc.jsx)(Mc.e, {})
        }), !qB && Tc && (0, fc.jsx)("div", {
          className: "TexturePackName",
          children: Tc
        }), !qB && ec && (0, fc.jsx)("div", {
          className: "TexturePackAuthor",
          children: ec
        })]
      })
    }
  },
  4066: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => uc
    });
    var Vc = nc(912),
      Ic = nc.n(Vc),
      rB = nc(957);

    function uc(cB) {
      let {
        options: Bc,
        value: nc,
        onChange: Vc,
        ariaLabel: uc
      } = cB;
      return (0, rB.jsx)("div", {
        className: "SegmentedToggle",
        role: "group",
        "aria-label": uc,
        children: Bc.map((cB => {
          const Bc = cB.value === nc;
          return (0, rB.jsx)("button", {
            type: "button",
            "aria-pressed": Bc,
            className: Ic()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: Bc
            }),
            onClick: () => {
              Bc || Vc(cB.value)
            },
            children: cB.label
          }, cB.value)
        }))
      })
    }
  },
  4073: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => rB,
      g: () => uc
    });
    var Vc = nc(73);
    const Ic = new WeakMap,
      rB = cB => {
        var Bc;
        const nc = cB.closest("[data-pad-slider]");
        return nc && null !== (Bc = Ic.get(nc)) && void 0 !== Bc ? Bc : null
      },
      uc = (cB, Bc) => {
        const nc = (0, Vc.useRef)(Bc);
        nc.current = Bc, (0, Vc.useEffect)((() => {
          if (cB.current) return ((cB, Bc) => (Ic.set(cB, Bc), () => {
            Ic.get(cB) === Bc && Ic.delete(cB)
          }))(cB.current, {
            adjust: cB => {
              nc.current.adjust(cB)
            },
            setFraction: cB => {
              nc.current.setFraction(cB)
            },
            endDrag: () => {
              nc.current.endDrag()
            }
          })
        }), [cB])
      }
  },
  3999: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => rB,
      f: () => Ic,
      h: () => Pc,
      k: () => sc,
      o: () => Vc,
      q: () => uc,
      t: () => Mc
    });
    const Vc = ["public", "unlisted", "private"],
      Ic = {
        public: "Public",
        unlisted: "Unlisted",
        private: "Private"
      },
      rB = {
        adminLocked: "Lobby was locked by a Bloxd admin.",
        banned: "Banned from lobby.",
        private: "Lobby was locked by owner.",
        notWhitelisted: "Only players on this world's whitelist can join."
      },
      uc = ["survival", "peaceful", "creative", "survivaladventure", "peacefuladventure", "spectator"],
      sc = ["default", "customSchematic"],
      Mc = ["default", "flat", "twoDimensions", "skyGrid", "customSchematic"],
      Pc = ["global", "perLobby", "none"]
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);