export const id = 91;
export const ids = [91, 176];
export const modules = {
  8468: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      EverythingMenu: () => IU
    });
    var FJ = ZJ(47),
      UJ = ZJ(926),
      eJ = ZJ.n(UJ),
      XJ = ZJ(1086),
      AJ = ZJ(942),
      qJ = ZJ(1843),
      jJ = ZJ(1009),
      YJ = ZJ(990);

    function hJ(JJ) {
      let {
        items: cJ,
        onClick: ZJ,
        selectedItemId: FJ,
        className: UJ,
        padStartsOnTab: hJ = !0
      } = JJ;
      const {
        t: DJ
      } = (0, XJ.F)(), sJ = (0, jJ.h)(), nJ = [];
      for (const eJ of cJ) {
        var GJ;
        const JJ = nJ[nJ.length - 1];
        var fJ;
        if (JJ && JJ.title === (null !== (GJ = eJ.section) && void 0 !== GJ ? GJ : null)) JJ.items.push(eJ);
        else nJ.push({
          title: null !== (fJ = eJ.section) && void 0 !== fJ ? fJ : null,
          items: [eJ]
        })
      }
      return (0, YJ.jsx)("div", {
        className: eJ()("MenuSideBarBody", UJ),
        "data-pad-tabs": "2",
        children: nJ.map(((JJ, cJ) => {
          var UJ;
          return (0, YJ.jsxs)("div", {
            className: "MenuSideBarSection",
            children: [JJ.title && (0, YJ.jsx)("div", {
              className: "MenuSideBarSectionTitle",
              children: DJ(JJ.title)
            }), JJ.items.map((JJ => {
              var cJ;
              const UJ = !!JJ.iconElement || !!JJ.faIcon;
              return (0, YJ.jsxs)("div", {
                "data-pad-tab": !0,
                "data-pad-selected": FJ === JJ.id ? "true" : void 0,
                "data-pad-default-focus": hJ && FJ === JJ.id || void 0,
                className: eJ()("MenuSideBarBodyTab", {
                  ActiveMenuSideBarBodyTab: FJ === JJ.id
                }),
                onClick: () => {
                  ZJ(JJ.id)
                },
                children: [UJ && (0, YJ.jsx)("div", {
                  className: "MenuSideBarBodyTabIcon",
                  children: null !== (cJ = JJ.iconElement) && void 0 !== cJ ? cJ : (0, YJ.jsx)(AJ.c, {
                    name: JJ.faIcon
                  })
                }), (!sJ || !UJ) && (0, YJ.jsx)("div", {
                  children: DJ(JJ.title)
                }), JJ.redDot && (0, YJ.jsx)(qJ.e, {
                  top: "-0.2rem",
                  right: "-1rem"
                })]
              }, JJ.id)
            }))]
          }, null !== (UJ = JJ.title) && void 0 !== UJ ? UJ : cJ)
        }))
      })
    }
    var DJ = ZJ(2514),
      sJ = ZJ(1022),
      nJ = ZJ(2175),
      GJ = ZJ(1017),
      fJ = ZJ(1329),
      xJ = ZJ(80),
      rJ = ZJ(1703),
      vJ = ZJ(2017),
      mJ = ZJ(2023),
      QJ = ZJ(1566),
      EJ = ZJ(1232),
      VJ = ZJ(4401),
      KJ = ZJ(13),
      yJ = ZJ(8476);

    function SJ(JJ) {
      let {
        setApplySettingsCallback: cJ
      } = JJ;
      const {
        clientEscMenuOptions: ZJ
      } = (0, KJ.j)(["clientEscMenuOptions"]), [UJ, eJ] = (0, FJ.useState)(!1), [XJ, AJ] = (0, FJ.useState)(!1), [qJ, jJ] = (0, FJ.useState)(6400), [hJ, DJ] = (0, FJ.useState)(3600), [sJ, nJ] = (0, FJ.useState)(!1), [GJ, xJ] = (0, FJ.useState)(!1);

      function rJ(JJ) {
        const cJ = "screenshot" === JJ ? AJ : eJ;
        cJ(!0);
        const ZJ = sJ ? "normals" : GJ ? "depth" : null;
        yJ.devTools.downloadScene(JJ, {
          width: qJ,
          height: hJ,
          colouring: ZJ
        }).catch((JJ => {
          console.error("Couldn't download the scene", JJ)
        })).finally((() => {
          cJ(!1)
        }))
      }
      return (0, YJ.jsxs)("div", {
        className: "DeveloperToolsCategory",
        children: [(0, YJ.jsx)(VJ.e, {
          label: "Disable Ambient Occlusion",
          checked: ZJ.disableAmbientOcclusion,
          onClick: JJ => {
            KJ.d.setClientEscMenuOptions({
              disableAmbientOcclusion: JJ
            }), cJ((() => VJ.l))
          },
          circleInfoText: "Disables ambient occlusion which is the shadow effect that makes corners and crevices darker."
        }), yJ.devTools.supports("ambientLight") && (0, YJ.jsx)(VJ.h, {
          name: "Ambient Lighting Intensity",
          min: 0,
          max: 1,
          step: .01,
          initValue: ZJ.ambientLightIntensity,
          onChange: JJ => {
            yJ.devTools.setAmbientLightIntensity(JJ).then((() => {
              KJ.d.setClientEscMenuOptions({
                ambientLightIntensity: JJ
              })
            })).catch((JJ => {
              console.error("Couldn't set the ambient light", JJ)
            }))
          },
          circleInfoText: "Sets the intensity of the white ambient light in the scene. The default is 0.5."
        }), yJ.devTools.supports("weaponRaycasts") && (0, YJ.jsx)(VJ.e, {
          label: "Show Weapon Raycasts",
          checked: ZJ.showWeaponRaycasts,
          onClick: JJ => {
            KJ.d.setClientEscMenuOptions({
              showWeaponRaycasts: JJ
            })
          },
          circleInfoText: "Draws debug lines for the raw raycasts used by locally fired weapons."
        }), yJ.devTools.supports("sceneDownload") && (0, YJ.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, YJ.jsxs)("div", {
            className: "SettingBox WarningBorder",
            children: [(0, YJ.jsx)(VJ.e, {
              label: "Apply normal-based coloring",
              checked: sJ,
              onClick: JJ => {
                nJ(JJ), JJ && xJ(!1)
              },
              circleInfoText: "Colors faces based on their normal direction (red=X, green=Y, blue=Z)."
            }), (0, YJ.jsx)(VJ.e, {
              label: "Apply depth-based coloring",
              checked: GJ,
              onClick: JJ => {
                xJ(JJ), JJ && nJ(!1)
              },
              circleInfoText: "Colors from white (near) to black (far) based on distance from camera. Only works for screenshot export."
            }), (0, YJ.jsxs)("div", {
              className: "SettingBox DeveloperToolsCategoryScreenshotSettings",
              children: [(0, YJ.jsx)("div", {
                className: "SettingLabel",
                children: "Screenshot size in pixels (width x height)"
              }), (0, YJ.jsx)(QJ.e, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (JJ, cJ) => {
                  const ZJ = parseInt(JJ) || 6400;
                  jJ(ZJ)
                },
                placeholderText: "width",
                maxLength: 10,
                defaultValue: qJ.toString()
              }), (0, YJ.jsx)("span", {
                children: "X"
              }), (0, YJ.jsx)(QJ.e, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (JJ, cJ) => {
                  const ZJ = parseInt(JJ) || 3600;
                  DJ(ZJ)
                },
                placeholderText: "height",
                maxLength: 10,
                defaultValue: hJ.toString()
              })]
            }), (0, YJ.jsxs)("div", {
              className: "DeveloperToolsCategoryExportButtons",
              children: [(0, YJ.jsxs)(fJ.d, {
                onClick: () => {
                  rJ("screenshot")
                },
                disabled: XJ,
                children: [XJ && (0, YJ.jsx)(EJ.c, {}), "Download Screenshot"]
              }), (0, YJ.jsxs)(fJ.d, {
                onClick: () => {
                  rJ("glb")
                },
                disabled: UJ,
                children: [UJ && (0, YJ.jsx)(EJ.c, {}), "Download GLB"]
              })]
            })]
          }), (0, YJ.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: 'To download GLB of scene with textures you need to "Disable Block Texture Atlas" in graphic settings first (you will need to reload the page to apply the setting).'
          })]
        })]
      })
    }
    var IJ = ZJ(112),
      MJ = ZJ(1028),
      bJ = ZJ(1098),
      wJ = ZJ(2516),
      WJ = ZJ(1406),
      gJ = ZJ(1168),
      HJ = ZJ(1133),
      PJ = ZJ(2578),
      kJ = ZJ(1817),
      pJ = ZJ(1389),
      dJ = ZJ(235),
      zJ = ZJ(2027),
      NJ = ZJ(2039),
      OJ = ZJ(1259),
      TJ = ZJ(1112),
      CJ = ZJ(4301),
      uJ = ZJ(1357),
      iJ = ZJ(3129),
      RJ = ZJ(2328),
      LJ = ZJ(2009);

    function aJ(JJ) {
      let {
        showing: cJ
      } = JJ;
      const {
        t: ZJ
      } = (0, XJ.F)(), {
        data: FJ,
        failed: UJ
      } = (0, RJ.d)(iJ.h, cJ);
      return 0 === (null === FJ || void 0 === FJ ? void 0 : FJ.length) || null === FJ && !UJ ? null : (0, YJ.jsxs)("div", {
        className: "SettingBox AccountSettingsPaymentHistory",
        children: [(0, YJ.jsx)("div", {
          className: "AccountSettingsLabel",
          children: ZJ("paymentHistory:title")
        }), null === FJ && UJ && (0, YJ.jsx)("div", {
          className: "AccountSettingsPaymentHistoryError",
          children: ZJ("paymentHistory:loadFailed")
        }), null !== FJ && (0, YJ.jsx)("ul", {
          className: "PaymentHistoryList",
          children: FJ.map((JJ => (0, YJ.jsxs)("li", {
            className: "PaymentHistoryEntry",
            children: [(0, YJ.jsx)(LJ.b, {
              entry: JJ
            }), (0, YJ.jsxs)("div", {
              className: "PaymentHistoryEntryText",
              children: [(0, YJ.jsx)("div", {
                children: (0, LJ.j)(ZJ, JJ)
              }), (0, YJ.jsxs)("div", {
                className: "PaymentHistoryEntryDate",
                children: [new Date(JJ.at).toLocaleDateString(), "number" === typeof JJ.orderId && ` \xb7 ${ZJ("paymentHistory:order",{orderId:JJ.orderId})}`]
              })]
            })]
          }, (0, iJ.e)(JJ))))
        })]
      })
    }
    var BJ = ZJ(1144),
      tJ = ZJ(1247),
      oJ = ZJ(1201);

    function lJ() {
      const {
        userContext: JJ,
        isUserContextUpdating: cJ
      } = (0, sJ.d)(), {
        t: ZJ
      } = (0, XJ.F)(), [UJ, eJ] = (0, FJ.useState)(!1), [AJ, qJ] = (0, FJ.useState)(null), jJ = cJ || UJ;
      return (0, YJ.jsxs)("div", {
        className: "AccountSettingsDeleteAccountButtonContainer",
        children: [(0, YJ.jsxs)(fJ.I, {
          onClick: async function() {
            if (!UJ) {
              eJ(!0);
              try {
                const cJ = await async function() {
                  if (!0 !== await tJ.NotificationProvider.showPromptPopup({
                      title: "auth:deleteAccountPopupTitleNamed",
                      textOpts: {
                        title: {
                          playerName: (0, gJ.d)(JJ.getPlayerName(), !xJ.featureFlags.canSeeRealPlayerNames)
                        }
                      },
                      subtitle: (0, IJ.b)() ? "auth:discordActivityDeleteAccountWarning" : "auth:deleteAccountWarning",
                      confirmText: "auth:deleteAccount",
                      destructive: !0,
                      confirmTooltip: "auth:deleteAccountPopupConfirmTooltip",
                      cancelText: "general:cancel",
                      cancelTooltip: "auth:deleteAccountPopupCancelTooltip"
                    }).getResult()) return BJ.b.ok();
                  const cJ = await (0, MJ.postJsonWithMetricsCookiesAndJsonResponse)(`${bJ.clientSideServerUrls.indexUrl}/index/metrics/revoke-cookies`, {
                    gameState: KJ.d.get("gameState")
                  }, {
                    retries: 3
                  }, JJ.getMetricsCookies());
                  if (cJ.error) return BJ.b.error(cJ.error);
                  (0, IJ.b)() && (await oJ.j.discordActivity()).exit("User deleted their account");
                  return (0, MJ.forgetStoredGuestAccount)(JJ.whamm), (0, MJ.forceGlobalSignOut)(!0), BJ.b.ok()
                }(), ZJ = cJ.isError() ? cJ.asError().message : null;
                qJ(ZJ)
              } catch (cJ) {
                console.error("Failed to delete account:", cJ), qJ(ZJ("auth:genericDeleteAccountError"))
              }
              eJ(!1)
            }
          },
          className: "AccountSettingsDeleteAccountButton",
          disabled: jJ,
          children: [jJ && (0, YJ.jsx)("div", {
            className: "DeletingAccountLoader",
            children: (0, YJ.jsx)(EJ.c, {})
          }), ZJ("auth:deleteAccount")]
        }), AJ && (0, YJ.jsx)("div", {
          className: "DeleteAccountError",
          children: AJ
        })]
      })
    }
    var Jc = ZJ(3072),
      cc = ZJ(3086),
      Zc = ZJ(3080);

    function Fc(JJ) {
      let {
        showing: cJ
      } = JJ;
      const {
        t: ZJ
      } = (0, XJ.F)(), {
        data: FJ,
        failed: UJ
      } = (0, RJ.d)(Jc.e, cJ), eJ = null === FJ ? null : (0, Jc.h)(FJ);
      return (0, YJ.jsxs)("div", {
        className: "SettingBox BlockedAndIgnoredPlayers",
        children: [(0, YJ.jsx)("div", {
          className: "AccountSettingsLabel",
          children: ZJ("settingsMenu:blockedAndIgnoredPlayers")
        }), null === eJ && !UJ && (0, YJ.jsx)(EJ.c, {}), null === eJ && UJ && (0, YJ.jsxs)("div", {
          className: "BlockedAndIgnoredPlayersError",
          children: [ZJ("settingsMenu:blockedAndIgnoredPlayersLoadFailed"), (0, YJ.jsx)(fJ.d, {
            className: "SmallTextLight",
            onClick: () => {
              Jc.e.refresh()
            },
            children: ZJ("general:tryAgain")
          })]
        }), 0 === (null === eJ || void 0 === eJ ? void 0 : eJ.length) && (0, YJ.jsx)("div", {
          className: "BlockedAndIgnoredPlayersEmpty",
          children: ZJ("settingsMenu:noBlockedOrIgnoredPlayers")
        }), null !== eJ && eJ.length > 0 && (0, YJ.jsx)("ul", {
          className: "BlockedAndIgnoredPlayersList",
          children: eJ.map((JJ => {
            let {
              name: cJ,
              exclusion: FJ
            } = JJ;
            const UJ = Zc.f[FJ];
            return (0, YJ.jsxs)("li", {
              className: "BlockedAndIgnoredPlayer",
              children: [(0, YJ.jsx)("div", {
                className: "BlockedAndIgnoredPlayerName",
                children: cJ
              }), (0, YJ.jsx)(fJ.g, {
                className: "SmallTextLight",
                onClick: () => {
                  (0, cc.e)(UJ, cJ)
                },
                children: ZJ(Zc.h[UJ].text)
              })]
            }, cJ)
          }))
        })]
      })
    }
    const Uc = (0, FJ.memo)((function(JJ) {
      var cJ;
      let {
        showing: ZJ,
        inGame: UJ
      } = JJ;
      const {
        t: qJ,
        selectedLanguage: jJ
      } = (0, XJ.F)(), {
        hideSocialLocationFrom: hJ
      } = (0, KJ.j)(["hideSocialLocationFrom"]), nJ = (0, DJ.c)(), {
        userContext: GJ,
        isUserContextUpdating: rJ
      } = (0, sJ.d)(), [vJ, mJ] = (0, FJ.useState)(null !== (cJ = GJ.getPlayerName()) && void 0 !== cJ ? cJ : ""), [yJ, SJ] = (0, FJ.useState)(null), {
        purchasing: iJ,
        outcome: RJ,
        purchase: LJ
      } = (0, wJ.e)("/super-rank-welcome"), [BJ, tJ] = (0, FJ.useState)(!1), [oJ, Jc] = (0, FJ.useState)(!1), cc = (0, FJ.useRef)(null), Zc = (0, FJ.useRef)(null), Uc = (0, kJ.e)({
        showProgressUpdateMessage: !0,
        enabled: !0
      }), ec = null === Uc, Xc = null !== Uc && void 0 !== Uc ? Uc : [], [Ac, qc] = (0, FJ.useState)([]), [jc, Yc] = (0, FJ.useState)(!1), hc = GJ.playerHasRank("youtuber"), Dc = (0, FJ.useCallback)((() => pJ.c.getPlayerProfile(GJ, {
        lowerCaseName: GJ.getPlayerName().toLowerCase()
      }).then((JJ => {
        qc(JJ.socialLinks)
      })).catch((JJ => {
        console.error("Failed to refresh social links", JJ)
      }))), [GJ]);

      function sc(JJ) {
        JJ !== vJ && ((0, gJ.l)(JJ) ? (JJ = (0, gJ.p)(JJ), SJ("Only letters, numbers, and _")) : SJ(null), cc.current && (cc.current.value = JJ), mJ(JJ))
      }
      return (0, FJ.useEffect)((() => (!0 === ZJ ? (clearInterval(Zc.current), Zc.current = setInterval(nJ, 1e3)) : clearInterval(Zc.current), () => {
        clearInterval(Zc.current)
      })), [ZJ, nJ]), (0, FJ.useEffect)((() => {
        var JJ;
        mJ(null !== (JJ = GJ.getPlayerName()) && void 0 !== JJ ? JJ : "")
      }), [GJ]), (0, FJ.useEffect)((() => {
        if (!ZJ || !hc || rJ) return;
        let JJ = !1;
        return Yc(!0), qc([]), pJ.c.getPlayerProfile(GJ, {
          lowerCaseName: GJ.getPlayerName().toLowerCase()
        }).then((cJ => {
          JJ || qc(cJ.socialLinks)
        })).catch((JJ => {
          console.error("Failed to load social links", JJ)
        })).finally((() => {
          JJ || Yc(!1)
        })), () => {
          JJ = !0
        }
      }), [ZJ, hc, rJ, GJ]), (0, YJ.jsxs)("div", {
        className: eJ()("SettingsMenuRightInner AccountSettings", {
          AccountSettingsLocked: UJ
        }),
        children: [UJ && (0, YJ.jsx)("div", {
          className: "AccountSettingsInGameWarning",
          children: qJ("settingsMenu:accountSettingsInGameWarning")
        }), (0, YJ.jsxs)("div", {
          className: "SettingBox SetAccountNameDiv SmallTextLight",
          children: [(0, YJ.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsNameLabel",
            children: [qJ("homePage:discordNamePopupTitle"), (0, YJ.jsxs)(WJ.LinkPreserveSearch, {
              className: "AccountSettingsViewProfile",
              to: (0, HJ.h)({
                name: GJ.getPlayerName()
              }),
              onClick: () => {
                KJ.d.set({
                  openEverythingMenuName: null
                })
              },
              children: [(0, YJ.jsx)(AJ.c, {
                name: "arrow-up-right-from-square"
              }), " ", qJ("profileCard:viewProfile")]
            })]
          }), (0, YJ.jsxs)("div", {
            className: "EnterAccNameDivWrapper",
            "data-pad-initial-area": !0,
            children: [(0, YJ.jsxs)("div", {
              className: "EnterAccNameInputRow",
              children: [xJ.featureFlags.canChangeName && (0, YJ.jsx)(QJ.e, {
                className: "EnterName",
                placeholderText: qJ("homePage:enterName"),
                maxLength: gJ.i,
                defaultValue: vJ,
                onValueChange: JJ => {
                  sc(JJ)
                },
                forcedText: BJ || !xJ.featureFlags.canChangeName ? vJ : null,
                blurOnEnter: !0,
                domRef: cc
              }), (0, YJ.jsx)(fJ.d, {
                className: "ChooseRandomNameButton",
                onClick: () => {
                  sc((0, gJ.g)())
                },
                children: (0, YJ.jsx)(AJ.c, {
                  name: "dice",
                  className: "ChooseRandomNameIcon"
                })
              }), !xJ.featureFlags.canChangeName && (0, YJ.jsx)("div", {
                className: "EnterName NoInput",
                children: (0, gJ.d)(vJ, !xJ.featureFlags.canSeeRealPlayerNames)
              })]
            }), (0, YJ.jsx)(fJ.d, {
              className: "ChooseNameButton",
              disabled: BJ || vJ === GJ.getPlayerName(),
              onClick: () => {
                vJ.length < gJ.k ? SJ(qJ("homePage:changeNameMinLengthError", {
                  length: gJ.k
                })) : vJ.length > gJ.i ? SJ(qJ("homePage:changeNameMaxLengthError", {
                  length: gJ.i
                })) : (tJ(!0), SJ(null), async function(JJ, cJ, ZJ, FJ) {
                  const UJ = await (0, MJ.postJsonWithMetricsCookiesAndJsonResponse)(`${bJ.clientSideServerUrls.indexUrl}/index/name/update`, {
                    name: JJ
                  }, {
                    retries: 3
                  }, cJ.getMetricsCookies()).catch((JJ => (console.error("Bad response from the server when trying to update name:", JJ), {
                    err: "An error occurred trying to change your name! Please report on discord what steps you took to get this error message."
                  })));
                  UJ.err ? (console.error("Error when trying to get with new name from DB", UJ.err), FJ(UJ.err)) : !0 === UJ.nameExists ? FJ("Name is already taken") : ZJ(JJ)
                }(vJ, GJ, (JJ => {
                  GJ.setPlayerName(JJ), tJ(!1)
                }), (JJ => {
                  SJ(JJ), tJ(!1)
                })))
              },
              children: qJ("general:choose")
            })]
          }), yJ && (0, YJ.jsx)("div", {
            className: "ChooseAccNameError",
            children: yJ
          })]
        }), (0, YJ.jsx)(VJ.e, {
          label: (() => {
            if ((0, TJ.j)(hJ)) {
              const JJ = (0, XJ.q)(jJ.code, "general:timeLeft"),
                cJ = (0, dJ._)(JJ, Date.now(), hJ + TJ.i);
              return `${qJ("settingsMenu:hideSocialLocation")} (${qJ("general:timeLeft",{time:cJ})})`
            }
            return qJ("settingsMenu:hideSocialLocation")
          })(),
          onClick: () => {
            const JJ = !(0, TJ.j)(hJ);
            (0, uJ.f)({
              id: "social.hide_location",
              value: JJ ? "on" : "off"
            }), Jc(!0), pJ.c.setHideSocialLocation(GJ, JJ).then((() => {
              KJ.d.set({
                hideSocialLocationFrom: JJ ? Date.now() : null
              })
            })).finally((() => {
              Jc(!1)
            }))
          },
          checked: (0, TJ.j)(hJ),
          disabled: oJ
        }), hc && (0, YJ.jsxs)("div", {
          className: "SettingBox AccountSettingsSocialLinks",
          children: [(0, YJ.jsx)("div", {
            className: "AccountSettingsLabel",
            children: qJ("settingsMenu:socialLinks")
          }), jc && (0, YJ.jsx)(EJ.c, {}), !jc && (0, YJ.jsx)(CJ.d, {
            socialLinks: Ac,
            editable: !0,
            userContext: GJ,
            onLinksUpdated: Dc
          })]
        }), (0, YJ.jsxs)("div", {
          className: "SettingBox",
          children: [(0, YJ.jsx)("div", {
            className: "AccountSettingsLabel",
            children: qJ("auth:login")
          }), ec && (0, YJ.jsx)(EJ.c, {}), !ec && 0 === Xc.length && (0, YJ.jsx)("div", {
            className: "NoLoginOptions",
            children: qJ("auth:noLoginOptions")
          }), !ec && Xc.length > 0 && "crazygames" !== IJ.n && (0, YJ.jsx)("div", {
            className: "AccountSettingsLoginButtons",
            children: Xc
          }), !ec && Xc.length > 0 && "crazygames" === IJ.n && (0, YJ.jsxs)("div", {
            className: "AccountSettingsLoginButtons",
            children: [Xc[0], Xc.length > 1 && (0, YJ.jsxs)(YJ.Fragment, {
              children: [(0, YJ.jsxs)("div", {
                className: "LegacyLoginOptionsHeader",
                children: [(0, YJ.jsx)("span", {
                  className: "LegacyLoginOptionsTitle",
                  children: qJ("auth:legacyLoginOptions")
                }), (0, YJ.jsx)(OJ.e, {
                  className: "LegacyLoginOptionsInfoIcon",
                  hoverInfo: qJ("auth:legacyLoginOptionsInfo")
                })]
              }), (0, YJ.jsx)("div", {
                className: "LegacyAccountSettingsLoginButtons",
                children: Xc.slice(1)
              })]
            })]
          }), xJ.featureFlags.useLogin && (null !== GJ.loggedInInfo || GJ.isLoggedIn()) && (0, YJ.jsxs)(YJ.Fragment, {
            children: [(0, YJ.jsx)("div", {
              className: "AccountSettingsLoginDivider"
            }), (0, YJ.jsxs)(fJ.I, {
              onClick: () => {
                (0, MJ.forceGlobalSignOut)()
              },
              className: "AccountSettingsSignedInButton",
              children: [(0, YJ.jsx)(AJ.c, {
                name: "right-from-bracket"
              }), qJ("auth:signOut")]
            })]
          })]
        }), !GJ.playerHasRank("super") && (0, NJ.siteSupportsPurchases)() && (0, YJ.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, YJ.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, YJ.jsx)(AJ.c, {
              name: "bolt"
            }), qJ("homePage:superRank")]
          }), (0, YJ.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [(0, YJ.jsxs)(fJ.m, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, zJ.i)({
                  mode: "self",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, YJ.jsx)(AJ.c, {
                name: "bolt"
              }), qJ("homePage:getSuperRank")]
            }), (0, YJ.jsxs)(fJ.m, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, zJ.i)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, YJ.jsx)(AJ.c, {
                name: "bolt"
              }), qJ("homePage:giftSuperRank")]
            })]
          })]
        }), GJ.playerHasRank("super") && (0, YJ.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, YJ.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, YJ.jsx)(AJ.c, {
              name: "bolt"
            }), qJ("homePage:superRank"), (0, YJ.jsxs)("div", {
              className: "AccountSettingsSuperRankTimeLeft",
              children: ["(", qJ("general:timeLeft", {
                time: (0, dJ.$b)((0, XJ.q)(jJ.code, "general:timeLeft"), GJ.superRankInfo)
              }), ")"]
            })]
          }), (0, NJ.siteSupportsPurchases)() && (0, YJ.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [(0, YJ.jsxs)(fJ.m, {
              className: "AccountSettingsSuperRankProlong",
              loading: iJ,
              onClick: () => {
                LJ(PJ.i.id, null)
              },
              children: [(0, YJ.jsx)(AJ.c, {
                name: "bolt"
              }), qJ("settingsMenu:getSuperRankAdditionalDaysPremiumCurrency", {
                days: PJ.i.product.days,
                price: PJ.i.price
              })]
            }), (0, YJ.jsxs)(fJ.m, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, zJ.i)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, YJ.jsx)(AJ.c, {
                name: "bolt"
              }), qJ("homePage:giftSuperRank")]
            })]
          }), RJ && (0, YJ.jsx)("div", {
            className: "AccountSettingsSuperRankProlongError SmallTextBold",
            children: qJ(RJ.translationKey)
          })]
        }), (0, YJ.jsx)(aJ, {
          showing: ZJ
        }), xJ.featureFlags.useSocialFeatures && (0, YJ.jsx)(Fc, {
          showing: ZJ
        }), (0, YJ.jsxs)("div", {
          className: "SettingBoxGroup AccountSettingsDeleteAccountGroup",
          children: [(0, YJ.jsxs)("div", {
            className: "SettingBox AccountSettingsDeleteAccount SettingBoxWarning",
            children: [(0, YJ.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: qJ("auth:deleteAccountButtonTitle")
            }), (0, IJ.b)() && (0, YJ.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: qJ("auth:discordActivityKickWarning")
            }), (0, YJ.jsx)(lJ, {})]
          }), (0, YJ.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: qJ("auth:deleteAccountWarning")
          })]
        })]
      })
    }));
    var ec = ZJ(8487),
      Xc = ZJ(2623),
      Ac = ZJ(1151),
      qc = ZJ(1319);
    const jc = (0, FJ.memo)((function(JJ) {
        let {
          inGame: cJ
        } = JJ;
        const {
          t: ZJ,
          selectedLanguage: FJ
        } = (0, XJ.F)(), {
          clientEscMenuOptions: UJ,
          showDebugOverlay: eJ
        } = (0, KJ.j)(["clientEscMenuOptions", "showDebugOverlay"]), AJ = (0, nJ.f)("hideCoordinates");
        let qJ = "settingsMenu:showCoordinates",
          jJ = "settingsMenu:showChunkCoordinates";

        function hJ(JJ) {
          const cJ = new Intl.DisplayNames([JJ], {
            type: "language"
          }).of(JJ);
          return cJ.charAt(0).toUpperCase() + cJ.slice(1)
        }
        return AJ && (qJ = "settingsMenu:showCoordinatesHidden", jJ = "settingsMenu:showChunkCoordinatesHidden"), (0, YJ.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [cJ && xJ.featureFlags.canUseInviteLinks && (0, YJ.jsxs)("div", {
            className: "SettingBox",
            children: [(0, YJ.jsx)("div", {
              className: "SettingsMenuInviteHeader",
              children: ZJ("settingsMenu:inviteLink")
            }), (0, YJ.jsx)(ec.g, {})]
          }), (0, YJ.jsxs)("div", {
            className: "SettingBox",
            children: [(0, YJ.jsx)("div", {
              className: "SliderText",
              style: {
                marginBottom: "10px"
              },
              children: ZJ("settingsMenu:language")
            }), (0, YJ.jsx)(Xc.d, {
              options: Object.entries(XJ.k).map((JJ => {
                let [cJ, ZJ] = JJ;
                return {
                  label: (0, YJ.jsxs)("div", {
                    className: "SettingsMenuLanguageOption",
                    children: [(0, YJ.jsx)("img", {
                      src: ZJ.flagImg,
                      alt: "flag"
                    }), (0, YJ.jsxs)("span", {
                      children: [hJ(cJ), " ", (0, YJ.jsxs)("span", {
                        className: "SettingsMenuLanguageOptionCode",
                        children: ["(", cJ, ")"]
                      })]
                    })]
                  }),
                  value: cJ
                }
              })),
              value: FJ.code,
              onChange: JJ => {
                Ac.e.get().setCurrentLanguage(JJ.value)
              }
            })]
          }), !(0, xJ.isMobileApp)() && (0, qc.g)() && xJ.featureFlags.useForceRotateForceFullscreenOverlay && (0, YJ.jsx)(VJ.e, {
            label: ZJ("settingsMenu:disableFullscreenMode"),
            checked: UJ.disableFullscreen,
            onClick: JJ => {
              KJ.d.setClientEscMenuOptions({
                disableFullscreen: JJ
              })
            }
          }), (0, YJ.jsx)(VJ.e, {
            label: ZJ(qJ),
            checked: UJ.showCoordinates,
            onClick: JJ => {
              KJ.d.setClientEscMenuOptions({
                showCoordinates: JJ
              })
            },
            disabled: AJ
          }), (0, YJ.jsx)(VJ.e, {
            label: ZJ(jJ),
            checked: UJ.showChunkCoordinates,
            onClick: JJ => {
              KJ.d.setClientEscMenuOptions({
                showChunkCoordinates: JJ
              })
            },
            disabled: AJ
          }), (0, YJ.jsx)(VJ.e, {
            label: ZJ("settingsMenu:showFps"),
            checked: UJ.showFPS,
            onClick: JJ => {
              KJ.d.setClientEscMenuOptions({
                showFPS: JJ
              })
            }
          }), (0, YJ.jsx)(VJ.e, {
            label: ZJ("settingsMenu:disableBunnyHopping"),
            checked: UJ.disableBunnyHopping,
            onClick: JJ => {
              KJ.d.setClientEscMenuOptions({
                disableBunnyHopping: JJ
              })
            }
          }), (0, oJ.v)() && (0, YJ.jsx)(VJ.e, {
            label: ZJ("settingsMenu:showChat"),
            checked: UJ.showChat,
            onClick: JJ => {
              KJ.d.setClientEscMenuOptions({
                showChat: JJ
              })
            }
          }), (0, YJ.jsx)(VJ.e, {
            label: ZJ("settingsMenu:showDebugOverlay"),
            checked: eJ,
            onClick: JJ => {
              KJ.d.set({
                showDebugOverlay: JJ
              })
            }
          }), xJ.featureFlags.useSocialFeatures && (0, YJ.jsx)(VJ.e, {
            label: ZJ("settingsMenu:showFriendOnlineToasts"),
            checked: UJ.showFriendOnlineToasts,
            onClick: JJ => {
              KJ.d.setClientEscMenuOptions({
                showFriendOnlineToasts: JJ
              })
            }
          }), (0, YJ.jsx)(VJ.e, {
            label: ZJ("settingsMenu:showNewItemIndicator"),
            checked: UJ.showNewItemIndicator,
            onClick: JJ => {
              KJ.d.setClientEscMenuOptions({
                showNewItemIndicator: JJ
              })
            }
          })]
        })
      })),
      Yc = (0, FJ.memo)((function() {
        const {
          t: JJ
        } = (0, XJ.F)(), {
          soundVolume: cJ,
          musicVolume: ZJ
        } = (0, KJ.j)(["soundVolume", "musicVolume"]);
        return (0, YJ.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, YJ.jsx)(VJ.h, {
            name: JJ("settingsMenu:musicVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: ZJ,
            onChange: JJ => {
              KJ.d.set({
                musicVolume: Math.round(100 * JJ) / 100
              })
            },
            format: JJ => JJ.toFixed(2)
          }), (0, YJ.jsx)(VJ.h, {
            name: JJ("settingsMenu:soundEffectsVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: cJ,
            onChange: JJ => {
              KJ.d.set({
                soundVolume: Math.round(100 * JJ) / 100
              })
            },
            format: JJ => JJ.toFixed(2)
          })]
        })
      }));
    var hc = ZJ(563),
      Dc = ZJ(1326),
      sc = ZJ(3137),
      nc = ZJ(8493),
      Gc = ZJ(2975);
    const fc = {
      app: "notificationSettings:pushTargetsApp",
      browser: "notificationSettings:pushTargetsBrowser",
      msnPlay: "notificationSettings:pushTargetsMsnPlay"
    };

    function xc() {
      const {
        t: JJ
      } = (0, XJ.F)(), cJ = (0, Gc.e)(), {
        mobilePushNotificationsCanAsk: ZJ
      } = (0, KJ.j)(["mobilePushNotificationsCanAsk"]), [UJ, eJ] = (0, FJ.useState)(null), [AJ, qJ] = (0, FJ.useState)(!1), [jJ, hJ] = (0, FJ.useState)(null), [DJ, sJ] = (0, FJ.useState)(!1), nJ = (0, FJ.useCallback)((() => {
        (0, sc.d)().then((JJ => {
          cJ.current && (eJ(JJ), qJ(!1))
        })).catch((JJ => {
          console.error("Failed to load push notification targets:", JJ), cJ.current && qJ(!0)
        }))
      }), [cJ]), GJ = (0, FJ.useCallback)((() => {
        (0, nc.c)().then((JJ => {
          cJ.current && hJ((() => JJ))
        }))
      }), [cJ]);
      (0, FJ.useEffect)((() => {
        nJ()
      }), [nJ]), (0, FJ.useEffect)((() => {
        GJ()
      }), [GJ, ZJ]), (0, Dc.i)(sc.k, nJ);
      const xJ = null === UJ ? [] : Object.keys(fc).filter((JJ => UJ[JJ] > 0));
      return (0, YJ.jsxs)("div", {
        className: "SettingBox PushNotificationSettings",
        children: [(0, YJ.jsx)("div", {
          className: "SliderText",
          children: JJ("notificationSettings:pushNotifications")
        }), null === UJ && AJ && (0, YJ.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: JJ("notificationSettings:pushTargetsLoadFailed")
        }), null !== UJ && 0 === xJ.length && (0, YJ.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: JJ("notificationSettings:pushTargetsNone")
        }), xJ.length > 0 && (0, YJ.jsx)("ul", {
          className: "PushNotificationSettingsTargets",
          children: xJ.map((cJ => {
            var ZJ;
            return (0, YJ.jsx)("li", {
              children: JJ(fc[cJ], {
                count: null !== (ZJ = null === UJ || void 0 === UJ ? void 0 : UJ[cJ]) && void 0 !== ZJ ? ZJ : 0
              })
            }, cJ)
          }))
        }), null !== jJ && (0, YJ.jsx)(fJ.d, {
          className: "PushNotificationSettingsButton",
          loading: DJ,
          onClick: () => {
            sJ(!0), jJ().catch((JJ => {
              console.error("Failed to turn on push notifications:", JJ)
            })).finally((() => {
              cJ.current && (sJ(!1), GJ())
            }))
          },
          children: JJ("notificationSettings:pushTurnOn")
        })]
      })
    }
    const rc = {
        toastAndTray: {
          label: "notificationSettings:friendRequestsAll",
          info: "notificationSettings:friendRequestsAllInfo"
        },
        trayOnly: {
          label: "notificationSettings:friendRequestsQuiet",
          info: "notificationSettings:friendRequestsQuietInfo"
        },
        off: {
          label: "notificationSettings:friendRequestsOff",
          info: "notificationSettings:friendRequestsOffInfo"
        }
      },
      vc = (0, FJ.memo)((function() {
        const {
          t: JJ
        } = (0, XJ.F)(), {
          clientEscMenuOptions: cJ
        } = (0, KJ.j)(["clientEscMenuOptions"]);
        return (0, YJ.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, YJ.jsx)(VJ.f, {
            label: JJ("notificationSettings:friendRequests"),
            options: hc.b.map((cJ => ({
              value: cJ,
              label: JJ(rc[cJ].label)
            }))),
            value: cJ.friendRequestNotifications,
            onChange: JJ => {
              KJ.d.setClientEscMenuOptions({
                friendRequestNotifications: JJ
              })
            },
            circleInfoText: (0, YJ.jsx)("div", {
              className: "NotificationSettingLevelsInfo",
              children: hc.b.map((cJ => (0, YJ.jsxs)("div", {
                children: [(0, YJ.jsx)("b", {
                  children: JJ(rc[cJ].label)
                }), ": ", JJ(rc[cJ].info)]
              }, cJ)))
            })
          }), (0, YJ.jsx)(xc, {})]
        })
      }));
    var mc = ZJ(3933),
      Qc = ZJ(157),
      Ec = ZJ(223),
      Vc = ZJ(6004),
      Kc = ZJ(2938),
      yc = ZJ(8502),
      Sc = ZJ(535),
      Ic = ZJ(17);
    var Mc = ZJ(547),
      bc = ZJ(29),
      wc = ZJ(3833);
    const Wc = new Map([
      ["chunkHorizAddDist", "horizontal"],
      ["chunkVertAddDist", "vertical"]
    ]);

    function gc(JJ) {
      return Wc.has(JJ) ? rJ.gameBridge.lookup("EQ", null) : null
    }

    function Hc(JJ) {
      if (!(0, Sc.P)(KJ.d.get("clientEscMenuOptions")[JJ])) return KJ.d.get("clientEscMenuOptions")[JJ];
      const cJ = gc(JJ);
      return null !== cJ ? cJ[Wc.get(JJ)] : bc.j.getItem(JJ)
    }

    function Pc(JJ, cJ) {
      if ("useTouchControls" === JJ) return void(0, wc.b)(cJ);
      JJ in KJ.d.get("clientEscMenuOptions") && KJ.d.setClientEscMenuOptions({
        [JJ]: cJ
      });
      const ZJ = gc(JJ);
      null !== ZJ && rJ.gameBridge.send("setChunkAddDistance", {
        ...ZJ,
        [Wc.get(JJ)]: cJ
      }), bc.j.setItem(JJ, cJ)
    }
    var kc = ZJ(8511),
      pc = ZJ(8517),
      dc = ZJ(8526),
      zc = ZJ(3926);

    function Nc(JJ) {
      var cJ, UJ, AJ, qJ;
      let {
        minChunkAddDist: jJ,
        getValue: hJ,
        onChange: DJ,
        setApplySettingsCallback: sJ
      } = JJ;
      const {
        t: GJ
      } = (0, XJ.F)(), {
        clientEscMenuOptions: fJ
      } = (0, KJ.j)(["clientEscMenuOptions", "showDistantNametags"]), rJ = (0, FJ.useRef)(hJ("showFog")), vJ = (0, FJ.useRef)(fJ.antiAliasing), mJ = (0, FJ.useRef)(fJ.useWebGpu), [QJ, EJ] = (0, FJ.useState)(null), [SJ, IJ] = (0, FJ.useState)((() => (0, Kc.d)(xJ.featureFlags.settings.canUseShaderPacks))), [MJ] = (0, FJ.useState)((() => KJ.d.isWebGpuDefaultOff())), [bJ] = (0, FJ.useState)(Ec.e);
      (0, FJ.useEffect)((() => {
        let JJ = !1;
        return (0, xJ.hasUsableWebGpuAdapter)().then((cJ => {
          JJ || EJ(cJ)
        })), (0, Kc.k)(xJ.featureFlags.settings.canUseShaderPacks) && (0, Vc.f)().then((async cJ => {
          const FJ = null !== cJ && await async function(JJ) {
            const [{
              isShaderPackActive: cJ
            }, {
              loadPageShaderPackCompiler: FJ
            }] = await Promise.all([ZJ.e(120).then((() => ZJ(5996))), Promise.all([ZJ.e(126), ZJ.e(124), ZJ.e(123)]).then((() => ZJ(5960)))]);
            return cJ(JJ, await FJ())
          }(cJ);
          JJ || IJ(FJ)
        })), () => {
          JJ = !0
        }
      }), []);
      const wJ = function(JJ, cJ, ZJ, FJ, UJ) {
          return (0, yc.e)(ZJ, FJ) && !0 === cJ ? {
            translationKey: "settingsMenu:newWebGpuForcedOnByShaderPack",
            checked: !0,
            disabled: !0
          } : {
            translationKey: !1 !== cJ ? "settingsMenu:newWebGpu" : UJ ? "settingsMenu:newWebGpuDisabledUntilRestart" : "settingsMenu:newWebGpuUnsupported",
            checked: JJ && !1 !== cJ,
            disabled: !0 !== cJ
          }
        }(fJ.useWebGpu, QJ, SJ, MJ, bJ),
        WJ = (fJ.useWebGpu || (0, yc.e)(SJ, MJ)) && SJ && !0 === QJ,
        gJ = (0, nJ.f)("lightingOverride"),
        HJ = !(0, Sc.P)(gJ);
      let PJ = "settingsMenu:enableLighting";
      HJ && (PJ = gJ ? "settingsMenu:enableLightingForcedOn" : "settingsMenu:enableLightingForcedOff");
      const kJ = JJ => {
          var cJ, ZJ, FJ;
          const UJ = null !== (cJ = JJ.showFog) && void 0 !== cJ ? cJ : hJ("showFog"),
            eJ = null !== (ZJ = JJ.antiAliasing) && void 0 !== ZJ ? ZJ : fJ.antiAliasing,
            XJ = null !== (FJ = JJ.useWebGpu) && void 0 !== FJ ? FJ : fJ.useWebGpu,
            AJ = !Mc.r && UJ !== rJ.current || eJ !== vJ.current || XJ !== mJ.current;
          sJ(AJ ? () => VJ.l : null)
        },
        pJ = (0, nJ.f)("fogChunkDistanceOverride"),
        dJ = (0, nJ.f)("fogBlockDistanceOverride"),
        zJ = !(0, Sc.P)(pJ) || !(0, Sc.P)(dJ),
        NJ = zJ ? "settingsMenu:showFogForcedOn" : "settingsMenu:showFog",
        [OJ, TJ] = (0, mc.e)(jJ),
        [CJ, uJ] = (0, zc.c)(jJ),
        iJ = GJ("settingsMenu:chunkLoadDistanceDeviceLimit"),
        RJ = CJ < OJ,
        LJ = Math.min(null !== (cJ = hJ("chunkHorizAddDist")) && void 0 !== cJ ? cJ : jJ[0], CJ),
        aJ = !zJ && function(JJ, cJ) {
          return !0 === JJ.showFog && JJ.fogChunkDistance > cJ
        }(fJ, LJ);
      return (0, YJ.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [(0, YJ.jsx)(VJ.h, {
          name: GJ("settingsMenu:horizontalChunkLoadDistance"),
          min: jJ[0],
          max: OJ,
          selectableMax: CJ,
          cappedNote: iJ,
          step: 1,
          initValue: LJ,
          onChange: JJ => {
            !0 === hJ("showFog") && JJ < hJ("fogChunkDistance") && DJ("fogChunkDistance", JJ), DJ("chunkHorizAddDist", JJ), Ic.i.Uf("updatedChunkLoadDist")
          },
          circleInfoText: GJ("settingsMenu:chunkLoadDistanceInfo")
        }), (0, YJ.jsx)(VJ.h, {
          name: GJ("settingsMenu:verticalChunkLoadDistance"),
          min: jJ[1],
          max: TJ,
          selectableMax: uJ,
          cappedNote: RJ ? void 0 : iJ,
          step: 1,
          initValue: Math.min(null !== (UJ = hJ("chunkVertAddDist")) && void 0 !== UJ ? UJ : jJ[1], uJ),
          onChange: JJ => {
            DJ("chunkVertAddDist", JJ), Ic.i.Uf("updatedChunkLoadDist")
          },
          circleInfoText: GJ("settingsMenu:chunkLoadDistanceInfo"),
          className: "VerticalChunkLoadSlider"
        }), (0, YJ.jsx)(VJ.e, {
          label: GJ("settingsMenu:chunkFadeIn"),
          checked: fJ.chunkFadeIn,
          onClick: JJ => {
            KJ.d.setClientEscMenuOptions({
              chunkFadeIn: JJ
            })
          },
          circleInfoText: GJ("settingsMenu:chunkFadeInInfo")
        }), yJ.devTools.supports("chunkBorders") && (0, YJ.jsx)(VJ.e, {
          label: GJ("settingsMenu:showChunkBorders"),
          checked: fJ.showChunkBorders,
          onClick: JJ => {
            KJ.d.setClientEscMenuOptions({
              showChunkBorders: JJ
            })
          },
          circleInfoText: GJ("settingsMenu:showChunkBordersInfo")
        }), (0, YJ.jsx)(VJ.e, {
          label: GJ(PJ),
          checked: fJ.enableLighting,
          onClick: JJ => {
            KJ.d.setClientEscMenuOptions({
              enableLighting: JJ
            })
          },
          disabled: HJ
        }), (0, YJ.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, YJ.jsx)(VJ.e, {
            label: GJ(NJ),
            checked: fJ.showFog,
            onClick: JJ => {
              kJ({
                showFog: JJ
              }), KJ.d.setClientEscMenuOptions({
                showFog: JJ
              })
            },
            disabled: zJ,
            className: eJ()({
              SettingBoxWarning: aJ
            })
          }), (0, YJ.jsx)(VJ.h, {
            name: GJ("settingsMenu:fogChunkDistance"),
            min: jJ[0],
            max: Qc.c.maxChunkHorizAddDistance,
            step: 1,
            initValue: null !== (AJ = fJ.fogChunkDistance) && void 0 !== AJ ? AJ : jJ[0],
            onChange: JJ => {
              KJ.d.setClientEscMenuOptions({
                fogChunkDistance: JJ
              }), Ic.i.Uf("fogChunkDistanceChanged", JJ)
            },
            circleInfoText: GJ("settingsMenu:fogChunkDistanceInfo"),
            disabled: zJ || !1 === hJ("showFog"),
            className: eJ()({
              SettingBoxWarning: aJ
            })
          }), aJ && (0, YJ.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: GJ("settingsMenu:fogChunkDistanceInfo")
          })]
        }), !Mc.r && (0, YJ.jsx)(VJ.e, {
          label: GJ(WJ ? "settingsMenu:disableBlockTextureAtlasUnavailableWithShaderPack" : "settingsMenu:disableBlockTextureAtlas"),
          checked: !WJ && fJ.disableTexAtlas,
          onClick: JJ => {
            KJ.d.setClientEscMenuOptions({
              disableTexAtlas: JJ
            })
          },
          circleInfoText: GJ("settingsMenu:disableBlockTextureAtlasInfo"),
          disabled: WJ
        }), (0, YJ.jsx)(VJ.h, {
          name: GJ("settingsMenu:fieldOfView"),
          min: 50,
          max: 160,
          step: 1,
          initValue: fJ.cameraFOV,
          onChange: JJ => {
            KJ.d.setClientEscMenuOptions({
              cameraFOV: JJ
            })
          }
        }), (0, YJ.jsx)(VJ.e, {
          label: GJ("settingsMenu:disableViewBobbing"),
          checked: fJ.disableBobbing,
          onClick: JJ => {
            KJ.d.setClientEscMenuOptions({
              disableBobbing: JJ
            })
          },
          circleInfoText: GJ("settingsMenu:disableViewBobbingInfo")
        }), (0, YJ.jsx)(VJ.e, {
          label: GJ("settingsMenu:antiAliasing"),
          checked: fJ.antiAliasing,
          onClick: JJ => {
            kJ({
              antiAliasing: JJ
            }), (0, kc.e)("antiAliasing"), KJ.d.setClientEscMenuOptions({
              antiAliasing: JJ
            })
          },
          circleInfoText: GJ("settingsMenu:antiAliasingInfo")
        }), (0, YJ.jsx)(VJ.h, {
          name: GJ("settingsMenu:pixelScale"),
          min: 1,
          max: 8,
          step: 1,
          initValue: null !== (qJ = fJ.pixelScale) && void 0 !== qJ ? qJ : 1,
          onChange: JJ => {
            (JJ !== KJ.d.get("clientEscMenuOptions").pixelScale || (0, dc.n)()) && (0, kc.e)("pixelScale"), KJ.d.setClientEscMenuOptions({
              pixelScale: JJ
            })
          },
          circleInfoText: GJ("settingsMenu:pixelScaleInfo"),
          format: JJ => `${JJ}x`
        }), (0, YJ.jsx)(VJ.e, {
          label: GJ("settingsMenu:pixelSmoothing"),
          checked: fJ.pixelSmoothing,
          onClick: JJ => {
            KJ.d.setClientEscMenuOptions({
              pixelSmoothing: JJ
            })
          },
          circleInfoText: GJ("settingsMenu:pixelSmoothingInfo")
        }), Mc.r && (0, YJ.jsx)(VJ.e, {
          label: GJ("settingsMenu:distantNametags"),
          checked: (0, pc.b)(),
          onClick: JJ => {
            KJ.d.set({
              showDistantNametags: JJ
            })
          },
          circleInfoText: GJ("settingsMenu:distantNametagsInfo")
        }), (0, YJ.jsx)(VJ.e, {
          label: GJ(wJ.translationKey),
          checked: wJ.checked,
          onClick: JJ => {
            kJ({
              useWebGpu: JJ
            }), KJ.d.setClientEscMenuOptions({
              useWebGpu: JJ
            })
          },
          circleInfoText: GJ("settingsMenu:newWebGpuInfo"),
          disabled: wJ.disabled
        })]
      })
    }
    var Oc = ZJ(8546),
      Tc = ZJ(8167),
      Cc = ZJ(8176),
      uc = ZJ(1297),
      ic = ZJ(4397),
      Rc = ZJ(8550),
      Lc = ZJ(1743),
      ac = ZJ(3758),
      Bc = ZJ(1747),
      tc = ZJ(567);
    const oc = (0, FJ.memo)((function() {
      const {
        clientEscMenuOptions: JJ
      } = (0, KJ.j)(["clientEscMenuOptions"]), {
        recording: cJ,
        clipping: ZJ,
        hasClipBuffer: UJ
      } = (0, Lc.f)("replayRecorder"), XJ = (0, Lc.d)("connectedGame", (JJ => JJ.replay)), AJ = (0, ac.f)(), qJ = !1 === (0, nJ.f)("canRecordReplays");
      (0, FJ.useEffect)((() => {
        rJ.gameBridge.send("setRecorderPrefs", {
          clipping: JJ.enableClipping,
          clipSeconds: JJ.clipDurationSeconds
        })
      }), [JJ.enableClipping, JJ.clipDurationSeconds]);
      const jJ = AJ || XJ,
        hJ = !jJ && !qJ,
        DJ = cJ || hJ,
        sJ = hJ,
        GJ = sJ && ZJ && !cJ;

      function xJ() {
        DJ && rJ.gameBridge.send("toggleRecording", null)
      }
      return (0, YJ.jsxs)("div", {
        className: "SettingsMenuRightInner ReplayViewerCategory",
        children: [(0, YJ.jsxs)("div", {
          className: "SettingBox",
          children: [(0, YJ.jsx)("div", {
            className: "ReplayViewerCategoryRecordingRow",
            children: cJ ? (0, YJ.jsxs)(YJ.Fragment, {
              children: [(0, YJ.jsxs)(fJ.I, {
                className: "ReplayViewerCategoryButton",
                onClick: xJ,
                disabled: !DJ,
                children: [(0, YJ.jsx)("span", {
                  children: "Stop Recording"
                }), (0, YJ.jsx)(Bc.e, {
                  noaAction: "recordGame"
                })]
              }), (0, YJ.jsx)(Rc.d, {
                className: "ReplayViewerCategoryRecordingIndicator"
              })]
            }) : (0, YJ.jsxs)(fJ.d, {
              className: "ReplayViewerCategoryButton",
              onClick: xJ,
              disabled: !DJ,
              children: [(0, YJ.jsx)("span", {
                children: "Start Recording"
              }), (0, YJ.jsx)(Bc.e, {
                noaAction: "recordGame"
              })]
            })
          }), qJ && (0, YJ.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Recording is turned off in this game."
          }), jJ && !cJ && (0, YJ.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Close Replay Mode to start recording."
          })]
        }), (0, YJ.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, YJ.jsx)(VJ.e, {
            label: "Enable clipping",
            checked: JJ.enableClipping,
            disabled: !sJ,
            onClick: function(JJ) {
              sJ && KJ.d.setClientEscMenuOptions({
                enableClipping: JJ
              })
            },
            className: eJ()({
              SettingBoxDisabled: !sJ
            })
          }), (0, YJ.jsx)(VJ.h, {
            name: "Clip duration (seconds)",
            min: tc.j,
            max: tc.i,
            step: tc.c,
            initValue: JJ.clipDurationSeconds,
            onChange: function(JJ) {
              KJ.d.setClientEscMenuOptions({
                clipDurationSeconds: JJ
              })
            },
            circleInfoText: "Longer clip durations use more memory and may affect performance.",
            disabled: !sJ || !JJ.enableClipping
          })]
        }), (0, YJ.jsxs)("div", {
          className: "SettingBox",
          children: [(0, YJ.jsxs)(fJ.d, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              GJ && rJ.gameBridge.send("saveClip", null)
            },
            disabled: !GJ,
            children: [(0, YJ.jsx)("span", {
              children: "Record clip"
            }), (0, YJ.jsx)(Bc.e, {
              noaAction: "recordClip"
            })]
          }), JJ.enableClipping && !UJ && sJ && !cJ && (0, YJ.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clip buffer is filling \u2014 play for a moment, then save."
          }), cJ && (0, YJ.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clipping pauses while a full recording is active."
          })]
        }), (0, YJ.jsxs)("div", {
          className: "SettingBox",
          children: [(0, YJ.jsxs)(fJ.d, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              (0, ac.d)(!0), KJ.d.set({
                openEverythingMenuName: null
              })
            },
            disabled: AJ,
            children: [(0, YJ.jsx)("span", {
              children: "Open Replay Mode"
            }), (0, YJ.jsx)(Bc.e, {
              noaAction: "replayViewerOpen"
            })]
          }), AJ && (0, YJ.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Replay Mode is already open."
          })]
        }), (0, YJ.jsxs)("div", {
          className: "SettingBox",
          children: [(0, YJ.jsx)("div", {
            className: "ReplayViewerCategoryTutorialTitle",
            children: "How to use Replay Mode"
          }), (0, YJ.jsx)("iframe", {
            className: "ReplayViewerCategoryTutorial",
            src: "https://www.youtube.com/embed/-FsT0rNSuYA?playsinline=1&rel=0",
            title: "How to use Replay Mode",
            allow: "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
            allowFullScreen: !0,
            loading: "lazy"
          })]
        })]
      })
    }));
    var lc = ZJ(227),
      JZ = ZJ(1671);
    const cZ = {
      account: {
        icon: "fa-solid fa-user",
        displayName: "homePage:account"
      },
      general: {
        icon: "fa-solid fa-gear",
        displayName: "settingsMenu:general"
      },
      audio: {
        icon: "fa-solid fa-volume",
        displayName: "settingsMenu:audio"
      },
      notifications: {
        icon: "fa-solid fa-bell",
        displayName: "notificationSettings:notifications"
      },
      graphics: {
        icon: "fa-solid fa-cube",
        displayName: "settingsMenu:graphics"
      },
      controls: {
        icon: () => (0, YJ.jsx)("svg", {
          className: "svg-inline--fa",
          viewBox: "0 0 640 512",
          "aria-hidden": "true",
          children: (0, YJ.jsx)("path", {
            fill: "currentColor",
            d: "M256 20H384A36 36 0 0 1 420 56V208A36 36 0 0 1 384 244H256A36 36 0 0 1 220 208V56A36 36 0 0 1 256 20ZM262 166L378 166L320 90ZM36 268H164A36 36 0 0 1 200 304V456A36 36 0 0 1 164 492H36A36 36 0 0 1 0 456V304A36 36 0 0 1 36 268ZM134 438L134 322L58 380ZM256 268H384A36 36 0 0 1 420 304V456A36 36 0 0 1 384 492H256A36 36 0 0 1 220 456V304A36 36 0 0 1 256 268ZM378 346L262 346L320 422ZM476 268H604A36 36 0 0 1 640 304V456A36 36 0 0 1 604 492H476A36 36 0 0 1 440 456V304A36 36 0 0 1 476 268ZM506 322L506 438L582 380Z"
          })
        }),
        displayName: "settingsMenu:controls"
      },
      controller: {
        icon: "fa-solid fa-gamepad",
        displayName: "gamepadSettings:tab"
      },
      texturePack: {
        icon: "fa-solid fa-folder-image",
        displayName: "settingsMenu:texturePack"
      },
      Jn: {
        icon: "fa-solid fa-sparkle",
        displayName: "settingsMenu:shaderPack"
      },
      updateLog: {
        icon: "fa-solid fa-clock-rotate-left",
        displayName: "homePage:updateLog"
      },
      information: {
        icon: "fa-solid fa-circle-info",
        displayName: "homePage:info"
      },
      alternativeDomains: {
        icon: "fa-solid fa-globe",
        displayName: "settingsMenu:unblockedDomains"
      },
      replayViewer: {
        icon: "fa-solid fa-video",
        displayName: "Replay Mode"
      },
      developerTools: {
        icon: "fa-solid fa-terminal",
        displayName: "Developer Tools"
      }
    };

    function ZZ() {
      return Promise.all([ZJ.e(126), ZJ.e(124), ZJ.e(118), ZJ.e(115)]).then((() => ZJ(39853))).then((JJ => ({
        default: JJ.ShaderPackCategory
      })), (JJ => (console.error("Failed to load the shader pack settings", JJ), {
        default: FZ
      })))
    }

    function FZ() {
      const {
        t: JJ
      } = (0, XJ.F)();
      return (0, YJ.jsx)("div", {
        className: "SettingsMenuRightInner",
        children: JJ("shaderPack:tabLoadFailed")
      })
    }
    var UZ = ZJ(1294);
    const eZ = (0, FJ.lazy)((() => ZJ.e(252).then((() => ZJ(39846))).then((JJ => ({
        default: JJ.BloxdInformation
      }))))),
      XZ = (0, FJ.lazy)(ZZ);

    function AZ(JJ) {
      return JJ ? "general" : "account"
    }
    const qZ = new Map,
      jZ = (0, FJ.memo)((function(JJ) {
        let {
          show: cJ,
          setBeforeResumeCallback: ZJ
        } = JJ;
        (0, GJ.d)();
        const {
          gameState: UJ,
          openSettingsCategory: eJ
        } = (0, KJ.j)(["gameState", "openSettingsCategory"]), {
          userContext: qJ
        } = (0, sJ.d)(), {
          t: jJ
        } = (0, XJ.F)(), QJ = (0, DJ.c)(), EJ = (0, nJ.f)("minChunkAddDist"), VJ = "inGame" === UJ, [yJ, MJ] = (0, FJ.useState)(AZ(VJ)), [bJ, wJ] = (0, FJ.useState)(null), [WJ, gJ] = (0, FJ.useState)([]), HJ = (0, FJ.useRef)(function() {
          const JJ = new Date,
            cJ = 6 * (JJ.getMonth() + JJ.getDate()) % lc.r.length;
          return [...lc.r, ...lc.r].slice(cJ, cJ + 6)
        }()), PJ = (0, FJ.useRef)(null), kJ = (0, Dc.m)(uc.i, (0, uc.e)()), pJ = Object.keys(cZ).filter((JJ => {
          switch (JJ) {
            case "replayViewer":
              return VJ;
            case "developerTools":
              return qJ.playerHasRank("developer") || !1;
            case "texturePack":
              return xJ.featureFlags.settings.canChangeTexturePack;
            case "Jn":
              return xJ.featureFlags.settings.canUseShaderPacks;
            case "notifications":
              return xJ.featureFlags.useSocialFeatures;
            case "alternativeDomains":
              return "crazygames" !== IJ.n;
            case "controller":
              return xJ.featureFlags.useControllerSupport && (kJ || "controller" === yJ);
            default:
              return !0
          }
        }));
        (0, Dc.i)("toggleFullCoordinateOverlay", (() => {
          const JJ = Hc("showCoordinates") && Hc("showChunkCoordinates") && Hc("showFPS");
          Pc("showCoordinates", !JJ), Pc("showChunkCoordinates", !JJ), Pc("showFPS", !JJ), QJ()
        })), (0, Dc.i)("updatedChunkLoadDist", (() => {
          QJ()
        })), (0, FJ.useEffect)((() => {
          if (wJ(null), null === KJ.d.get("openSettingsCategory")) {
            const JJ = (0, UZ.e)() ? qZ.get(VJ) : void 0;
            MJ(JJ && pJ.includes(JJ) ? JJ : AZ(VJ))
          }
        }), [cJ]), (0, FJ.useEffect)((() => {
          null !== eJ && (MJ(eJ), qZ.set(VJ, eJ), KJ.d.set({
            openSettingsCategory: null
          }))
        }), [eJ, VJ]), (0, FJ.useLayoutEffect)((() => {
          PJ.current && (PJ.current.scrollTop = 0)
        }), [yJ, cJ]), (0, FJ.useEffect)((() => {
          "updateLog" === yJ && (0, mJ.e)().then(gJ)
        }), [yJ]), (0, FJ.useEffect)((() => {
          if ((0, Sc.P)(EJ)) return;
          const [JJ, cJ] = (0, Oc.b)(), [ZJ, FJ] = (0, mc.e)(EJ), UJ = (0, JZ.f)(EJ[0], JJ, ZJ), eJ = (0, JZ.f)(EJ[1], cJ, FJ);
          rJ.gameBridge.send("setChunkAddDistance", {
            horizontal: UJ,
            vertical: eJ
          })
        }), [EJ]);
        const dJ = (0, FJ.useCallback)((async () => {
          bJ && (await bJ(), wJ(null))
        }), [bJ]);

        function zJ() {
          KJ.d.set({
            openEverythingMenuName: null
          })
        }
        return (0, FJ.useEffect)((() => {
          ZJ((() => dJ))
        }), [dJ, ZJ]), (0, YJ.jsxs)("div", {
          className: "SettingsMenu Menu",
          style: cJ ? {} : {
            display: "none"
          },
          children: [(0, YJ.jsx)("div", {
            className: "MenuSideBar",
            children: (0, YJ.jsx)("div", {
              className: "MenuSideBarBody",
              children: (0, YJ.jsx)(hJ, {
                items: pJ.map((JJ => {
                  const cJ = cZ[JJ].icon;
                  return {
                    id: JJ,
                    faIcon: "string" === typeof cJ ? cJ : void 0,
                    iconElement: "string" === typeof cJ ? void 0 : (0, YJ.jsx)(cJ, {}),
                    title: jJ(cZ[JJ].displayName),
                    redDot: !1
                  }
                })),
                selectedItemId: yJ,
                onClick: JJ => {
                  !async function(JJ) {
                    await dJ(), MJ(JJ), qZ.set(VJ, JJ)
                  }(JJ)
                }
              })
            })
          }), (0, YJ.jsxs)("div", {
            ref: PJ,
            className: "MenuBody SettingsMenuRight",
            children: ["account" === yJ && (0, YJ.jsx)(Uc, {
              showing: cJ,
              inGame: VJ
            }), "general" === yJ && (0, YJ.jsx)(jc, {
              inGame: VJ
            }), "audio" === yJ && (0, YJ.jsx)(Yc, {}), "notifications" === yJ && (0, YJ.jsx)(vc, {}), "graphics" === yJ && (0, YJ.jsx)(Nc, {
              minChunkAddDist: null !== EJ && void 0 !== EJ ? EJ : [2, 2],
              getValue: Hc,
              onChange: Pc,
              setApplySettingsCallback: wJ
            }), "controls" === yJ && (0, YJ.jsx)(Tc.h, {}), "controller" === yJ && xJ.featureFlags.useControllerSupport && (0, YJ.jsx)(Cc.b, {}), xJ.featureFlags.settings.canChangeTexturePack && "texturePack" === yJ && (0, YJ.jsx)(ic.e, {
              setApplySettingsCallback: wJ
            }), xJ.featureFlags.settings.canUseShaderPacks && "Jn" === yJ && (0, YJ.jsx)(FJ.Suspense, {
              fallback: null,
              children: (0, YJ.jsx)(XZ, {
                setApplySettingsCallback: wJ
              })
            }), "updateLog" === yJ && (0, YJ.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, YJ.jsx)("div", {
                className: "UpdateLogsContainer",
                children: WJ.map(((JJ, cJ) => (0, YJ.jsx)(vJ.d, {
                  updateLog: JJ,
                  index: cJ,
                  close: zJ
                }, cJ)))
              })
            }), "information" === yJ && (0, YJ.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, YJ.jsx)(FJ.Suspense, {
                fallback: null,
                children: (0, YJ.jsx)(eZ, {})
              })
            }), "alternativeDomains" === yJ && (0, YJ.jsxs)("div", {
              className: "SettingsMenuRightInner",
              children: [(0, YJ.jsx)("div", {
                className: "AlternativeDomainsTitle",
                children: jJ("settingsMenu:unblockedDomainsDescription")
              }), (0, YJ.jsx)("div", {
                className: "AlternativeDomainsList",
                children: HJ.current.map((JJ => (0, YJ.jsxs)(fJ.d, {
                  onClick: () => {
                    window.open(`https://${JJ}`)
                  },
                  children: [(0, YJ.jsx)(AJ.c, {
                    name: "arrow-up-right-from-square"
                  }), " ", JJ]
                }, JJ)))
              })]
            }), "replayViewer" === yJ && (0, YJ.jsx)(oc, {}), "developerTools" === yJ && (0, YJ.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, YJ.jsx)(SJ, {
                setApplySettingsCallback: wJ
              })
            }), null !== bJ && (0, YJ.jsx)("div", {
              className: "SettingsMenuRightFooter",
              children: (0, YJ.jsx)(fJ.d, {
                className: "SettingsMenuRightFooterButton",
                onClick: dJ,
                children: jJ("general:apply")
              })
            })]
          })]
        })
      }));
    var YZ = ZJ(2260);
    const hZ = ["characters", "emote", "skin", "hat", "head", "eyebrows", "eyes", "back", "body", "legs", "shoes", "profileEffect", "cape", "nameColour"],
      DZ = (0, FJ.lazy)((() => Promise.resolve().then((() => ZJ(4069))).then((JJ => {
        JJ.needGameClientAfterPaint();
        const cJ = JJ.matchmakingLibrariesPromise.then((JJ => (0, YZ.e)(JJ.loadCharacterCustomisationUI(), (JJ => JJ.CharacterCustomisationUI))));
        return Promise.all([JJ.ensureGameSetup(), cJ]).then((JJ => {
          let [, cJ] = JJ;
          return cJ
        }))
      }))));

    function sZ(JJ) {
      let {
        show: cJ
      } = JJ;
      const {
        userContext: ZJ
      } = (0, sJ.d)(), [UJ, eJ] = (0, FJ.useState)("characters");
      if (!cJ) return null;
      const XJ = hZ.filter((JJ => "cape" !== JJ && "nameColour" !== JJ || ZJ.getPlayerRanks().includes("super") || (0, NJ.siteSupportsPurchases)())).map((JJ => ({
        id: JJ,
        faIcon: lc.x[JJ],
        title: lc.z[JJ],
        redDot: !1
      })));
      return (0, YJ.jsxs)("div", {
        className: "Menu CharCustomisation",
        children: [(0, YJ.jsx)("div", {
          className: "MenuSideBar",
          children: (0, YJ.jsx)(hJ, {
            items: XJ,
            selectedItemId: UJ,
            onClick: JJ => {
              eJ(JJ)
            }
          })
        }), (0, YJ.jsx)("div", {
          className: "MenuBody",
          children: (0, YJ.jsx)(FJ.Suspense, {
            fallback: (0, YJ.jsx)("div", {
              className: "CharacterCustomisationLoading",
              children: (0, YJ.jsx)(EJ.c, {})
            }),
            children: (0, YJ.jsx)(DZ, {
              selectedTab: UJ
            })
          })
        })]
      })
    }
    var nZ = ZJ(1341),
      GZ = ZJ(8557),
      fZ = ZJ(3950),
      xZ = ZJ(2910),
      rZ = ZJ(2946),
      vZ = ZJ(8580),
      mZ = ZJ(8052),
      QZ = ZJ(8563),
      EZ = ZJ(8571),
      VZ = ZJ(1688),
      KZ = ZJ(1675),
      yZ = ZJ(4323),
      SZ = ZJ(1162),
      IZ = ZJ(1122),
      MZ = ZJ(1560),
      bZ = ZJ(8145);
    class wZ {
      constructor(JJ) {
        this.info = JJ
      }
      static fromShopInfo(JJ) {
        const cJ = {};
        for (const ZJ in JJ) {
          const FJ = !0 === JJ[ZJ].redDot && !0 !== JJ[ZJ].forceRemoveRedDot;
          cJ[ZJ] = {
            redDot: FJ,
            items: {}
          };
          for (const UJ in JJ[ZJ].items) {
            const FJ = JJ[ZJ].items[UJ],
              eJ = !0 === FJ.redDot && !0 !== FJ.forceRemoveRedDot;
            cJ[ZJ].items[UJ] = {
              redDot: eJ
            }
          }
        }
        return new wZ(cJ)
      }
      anyCategoryHasRedDots() {
        for (const JJ in this.info)
          if (this.categoryHasRedDot(JJ)) return !0;
        return !1
      }
      doesCategoryExist(JJ) {
        return !(0, Sc.P)(this.info[JJ])
      }
      categoryHasRedDot(JJ) {
        return !0 === this.info[JJ].redDot
      }
      updateCategoryRedDot(JJ, cJ) {
        this.info[JJ].redDot = cJ
      }
      doesItemExist(JJ, cJ) {
        return this.doesCategoryExist(JJ) && !(0, Sc.P)(this.info[JJ].items[cJ])
      }
      itemHasRedDot(JJ, cJ) {
        return !0 === this.info[JJ].items[cJ].redDot
      }
      updateItemRedDot(JJ, cJ, ZJ) {
        this.info[JJ].items[cJ].redDot = ZJ
      }
      shallowCopy() {
        return new wZ(this.info)
      }
    }

    function WZ(JJ, cJ) {
      return `${JJ}\x1f${cJ}`
    }

    function gZ(JJ) {
      return JJ ? Object.keys(JJ).sort(((cJ, ZJ) => {
        var FJ, UJ, eJ, XJ;
        const AJ = (null !== (FJ = null === (UJ = JJ[ZJ]) || void 0 === UJ ? void 0 : UJ.sortPriority) && void 0 !== FJ ? FJ : 0) - (null !== (eJ = null === (XJ = JJ[cJ]) || void 0 === XJ ? void 0 : XJ.sortPriority) && void 0 !== eJ ? eJ : 0);
        return 0 !== AJ ? AJ : cJ.localeCompare(ZJ)
      })) : []
    }

    function HZ(JJ, cJ) {
      return !(0, Sc.P)(cJ) && !(0, Sc.P)(JJ) && cJ in JJ
    }
    const PZ = (0, FJ.memo)((function(JJ) {
      var cJ, ZJ;
      let {
        show: UJ
      } = JJ;
      const XJ = (0, Lc.d)("players", OZ),
        AJ = (0, Lc.d)("players", TZ),
        [jJ, DJ] = (0, FJ.useState)({
          shopInfo: {},
          userInputsPerItem: {},
          redDotInfo: wZ.fromShopInfo({}),
          currencyAmounts: {},
          selectedCategoryKey: null,
          onBoughtInfo: null,
          awaitingPurchase: !1
        }),
        sJ = (0, FJ.useRef)(""),
        GJ = (0, FJ.useRef)(null),
        xJ = (0, FJ.useRef)(0),
        vJ = (0, FJ.useRef)(void 0),
        mJ = (0, FJ.useRef)(null),
        QJ = (0, FJ.useRef)(jJ),
        EJ = jJ.redDotInfo.anyCategoryHasRedDots(),
        [VJ, yJ] = (0, FJ.useState)(null),
        SJ = (0, FJ.useRef)(!1);
      let MJ = !1,
        bJ = 0,
        wJ = 0;
      if (jJ.currencyAmounts) {
        for (const JJ in jJ.currencyAmounts) {
          var WJ;
          const cJ = jJ.currencyAmounts[JJ];
          cJ.hidden || (bJ++, (null === (WJ = cJ.subtext) || void 0 === WJ ? void 0 : WJ.length) > 0 && wJ++)
        }
        MJ = bJ + wJ > 4
      }(0, FJ.useEffect)((() => {
        Ic.i.Uf("showShopIconRedDot", EJ, !0)
      }), [EJ]), (0, FJ.useEffect)((() => {
        rJ.gameBridge.send("setShopOpen", UJ), UJ || (clearTimeout(vJ.current), DJ((JJ => JJ.awaitingPurchase ? {
          ...JJ,
          awaitingPurchase: !1
        } : JJ)))
      }), [UJ]), (0, FJ.useEffect)((() => () => {
        rJ.gameBridge.send("setShopOpen", !1), clearTimeout(vJ.current)
      }), []), (0, FJ.useEffect)((() => {
        QJ.current = jJ
      }), [jJ]), (0, FJ.useEffect)((() => {
        if (null === VJ) return;
        return (0, MZ.d)("pointerdown", (JJ => {
          const cJ = JJ.target;
          null !== cJ && void 0 !== cJ && cJ.closest(".ShopItem") || yJ(null)
        }))
      }), [VJ]);
      const gJ = JJ => {
          DJ((cJ => ({
            ...cJ,
            ...JJ
          })))
        },
        HJ = JJ => {
          var cJ;
          clearTimeout(null === (cJ = jJ.onBoughtInfo) || void 0 === cJ ? void 0 : cJ.timeout);
          const ZJ = setTimeout((() => {
            gJ({
              onBoughtInfo: null
            })
          }), 3e3);
          sJ.current = JJ, gJ({
            onBoughtInfo: {
              text: JJ,
              timeout: ZJ
            }
          })
        },
        PJ = JJ => {
          const {
            shopInfo: cJ,
            userInputsPerItem: ZJ,
            redDotInfo: FJ,
            autoSelectCategory: eJ
          } = function(JJ, cJ, ZJ, FJ, UJ, eJ) {
            if ((0, Sc.P)(JJ) || 0 === Object.keys(JJ).length) return {
              shopInfo: {},
              userInputsPerItem: {},
              redDotInfo: wZ.fromShopInfo({}),
              autoSelectCategory: null
            };
            const XJ = IJ.i[IJ.n].adConfig.showRewardedAds,
              AJ = {};
            let qJ = null;
            for (const fJ in JJ) {
              const cJ = JJ[fJ],
                ZJ = {};
              let FJ = !1;
              for (const JJ in cJ.items) {
                const UJ = cJ.items[JJ];
                (0, mZ.n)(UJ, XJ) && (ZJ[JJ] = UJ, FJ = !0)
              }
              FJ && (AJ[fJ] = {
                ...cJ,
                items: ZJ
              }, !0 === cJ.autoSelectCategory && (qJ = fJ))
            }
            const jJ = {},
              YJ = (JJ, cJ, FJ, XJ) => {
                var AJ, qJ;
                const YJ = WZ(JJ, cJ),
                  hJ = null !== (AJ = ZJ[YJ]) && void 0 !== AJ ? AJ : ZJ[cJ];
                if (null !== (qJ = XJ.userInput) && void 0 !== qJ && qJ.type) switch (XJ.userInput.type) {
                  case "dropdown": {
                    var DJ;
                    const JJ = !hJ || !XJ.userInput.dropdownOptions.some((JJ => (0, mZ.g)(JJ) === hJ)),
                      cJ = XJ.userInput.shouldResetSelectionOnOptionsChange && ("dropdown" !== (null === FJ || void 0 === FJ || null === (DJ = FJ.userInput) || void 0 === DJ ? void 0 : DJ.type) || JSON.stringify(FJ.userInput.dropdownOptions) !== JSON.stringify(XJ.userInput.dropdownOptions)),
                      ZJ = XJ.userInput,
                      UJ = !(0, Sc.P)(ZJ.initialValue) && ZJ.dropdownOptions.some((JJ => (0, mZ.g)(JJ) === ZJ.initialValue));
                    var sJ;
                    return void(JJ || cJ ? UJ ? jJ[YJ] = null !== (sJ = XJ.userInput.initialValue) && void 0 !== sJ ? sJ : null : XJ.userInput.dropdownOptions.length > 0 ? jJ[YJ] = (0, mZ.g)(XJ.userInput.dropdownOptions[0]) : jJ[YJ] = null : jJ[YJ] = hJ)
                  }
                  case "text":
                  case "number":
                    var nJ, GJ, fJ;
                    return void((null === FJ || void 0 === FJ ? void 0 : FJ.userInput) !== XJ.userInput ? jJ[YJ] = null !== (nJ = null !== (GJ = XJ.userInput.initialValue) && void 0 !== GJ ? GJ : hJ) && void 0 !== nJ ? nJ : "" : jJ[YJ] = null !== (fJ = null !== hJ && void 0 !== hJ ? hJ : XJ.userInput.initialValue) && void 0 !== fJ ? fJ : "");
                  case "color":
                    var xJ, rJ, vJ;
                    return void((null === FJ || void 0 === FJ ? void 0 : FJ.userInput) !== XJ.userInput ? jJ[YJ] = null !== (xJ = null !== (rJ = XJ.userInput.initialValue) && void 0 !== rJ ? rJ : hJ) && void 0 !== xJ ? xJ : "#000000" : jJ[YJ] = null !== (vJ = null !== hJ && void 0 !== hJ ? hJ : XJ.userInput.initialValue) && void 0 !== vJ ? vJ : "#000000");
                  case "player": {
                    const JJ = (0, mZ.k)(UJ, eJ, XJ.userInput);
                    return void(hJ && JJ.includes(hJ) ? jJ[YJ] = hJ : jJ[YJ] = JJ.length > 0 ? JJ[0] : null)
                  }
                }
              };
            for (const fJ in AJ)
              for (const JJ in AJ[fJ].items) {
                var hJ;
                const ZJ = AJ[fJ].items[JJ];
                YJ(fJ, JJ, null === (hJ = cJ[fJ]) || void 0 === hJ ? void 0 : hJ.items[JJ], ZJ)
              }
            const DJ = wZ.fromShopInfo(AJ);
            for (const fJ in AJ) {
              var sJ;
              if (FJ.doesCategoryExist(fJ)) {
                (null === (sJ = cJ[fJ]) || void 0 === sJ ? void 0 : sJ.redDot) === AJ[fJ].redDot && DJ.updateCategoryRedDot(fJ, FJ.categoryHasRedDot(fJ));
                for (const JJ in AJ[fJ].items) {
                  var nJ, GJ;
                  FJ.doesItemExist(fJ, JJ) && (null === (nJ = cJ[fJ]) || void 0 === nJ || null === (GJ = nJ.items[JJ]) || void 0 === GJ ? void 0 : GJ.redDot) === AJ[fJ].items[JJ].redDot && DJ.updateItemRedDot(fJ, JJ, FJ.itemHasRedDot(fJ, JJ))
                }
              }
            }
            return {
              shopInfo: AJ,
              userInputsPerItem: jJ,
              redDotInfo: DJ,
              autoSelectCategory: qJ
            }
          }(JJ, jJ.shopInfo, jJ.userInputsPerItem, jJ.redDotInfo, XJ, AJ), qJ = {
            shopInfo: cJ,
            userInputsPerItem: ZJ,
            redDotInfo: FJ
          };
          if (null === eJ || UJ)
            if (cJ[jJ.selectedCategoryKey]) qJ.selectedCategoryKey = jJ.selectedCategoryKey;
            else {
              const JJ = gZ(cJ);
              qJ.selectedCategoryKey = JJ.length > 0 ? JJ[0] : null
            }
          else qJ.selectedCategoryKey = eJ;
          return 0 === Object.keys(cJ).length && UJ && KJ.d.set({
            openEverythingMenuName: null
          }), qJ
        },
        kJ = (JJ, cJ) => {
          if (null === cJ || !JJ.shopInfo[cJ]) return JJ;
          let ZJ = JJ.redDotInfo;
          return ZJ.categoryHasRedDot(cJ) && (ZJ.updateCategoryRedDot(cJ, !1), ZJ = ZJ.shallowCopy()), {
            ...JJ,
            selectedCategoryKey: cJ,
            redDotInfo: ZJ
          }
        },
        pJ = JJ => {
          DJ((cJ => kJ(cJ, JJ)))
        };
      (0, Dc.i)(bZ.j, (() => {
        DJ((JJ => {
          const cJ = (0, bZ.l)(gZ(JJ.shopInfo), JJ.selectedCategoryKey, (cJ => (0, bZ.i)(JJ.shopInfo[cJ].items)));
          return cJ === JJ.selectedCategoryKey ? JJ : kJ(JJ, cJ)
        }))
      })), (0, Dc.i)("showShopFromServer", (JJ => {
        let {
          toggle: cJ,
          WZ: ZJ
        } = JJ;
        ZJ && pJ(ZJ), 0 === Object.keys(jJ.shopInfo).length || cJ && UJ ? KJ.d.set({
          openEverythingMenuName: null
        }) : KJ.d.set({
          openEverythingMenuName: lc.m.SHOP
        })
      })), (0, Dc.i)("closeShopOnDamaged", (() => {
        UJ && KJ.d.set({
          openEverythingMenuName: null
        })
      })), (0, Dc.i)("overShopInfo", (JJ => {
        HJ(JJ)
      })), (0, nJ.e)("currencyAmounts", (JJ => {
        var cJ;
        const ZJ = mJ.current;
        ZJ && (null === JJ || void 0 === JJ || null === (cJ = JJ[ZJ.currency]) || void 0 === cJ ? void 0 : cJ.amount) === ZJ.amountBefore ? gJ({
          currencyAmounts: JJ
        }) : (mJ.current = null, gJ({
          currencyAmounts: JJ,
          awaitingPurchase: !1
        }))
      })), (0, nJ.e)("shopInfo", (JJ => {
        gJ({
          ...PJ(JJ),
          awaitingPurchase: !1
        })
      }));
      const zJ = (0, FJ.useRef)({
        playerIds: XJ,
        localPlayerId: AJ
      });
      (0, FJ.useEffect)((() => {
        zJ.current.playerIds === XJ && zJ.current.localPlayerId === AJ || (zJ.current = {
          playerIds: XJ,
          localPlayerId: AJ
        }, DJ((JJ => {
          const cJ = PJ(JJ.shopInfo);
          return {
            ...JJ,
            ...cJ
          }
        })))
      }), [XJ, AJ]);
      const NJ = jJ.selectedCategoryKey,
        OJ = (JJ, cJ) => {
          var ZJ, FJ;
          return (isNaN(cJ) || (0, Sc.P)(JJ.currency) || HZ(jJ.currencyAmounts, JJ.currency) && cJ <= jJ.currencyAmounts[JJ.currency].amount) && (null === (ZJ = JJ.canBuy) || void 0 === ZJ || ZJ) && !(null !== (FJ = JJ.hidden) && void 0 !== FJ && FJ)
        },
        TJ = (JJ, cJ) => {
          var ZJ, FJ, UJ;
          const XJ = WZ(NJ, JJ),
            AJ = jJ.shopInfo[NJ].items[JJ],
            hJ = jJ.userInputsPerItem[XJ],
            DJ = (0, mZ.e)(AJ, hJ),
            sJ = OJ(AJ, DJ),
            nJ = AJ.enchant,
            GJ = nJ ? (0, dJ.lb)(null !== (ZJ = AJ.customTitle) && void 0 !== ZJ ? ZJ : JJ, {
              colour: dJ.gb[nJ.tier]
            }) : null !== (FJ = AJ.customTitle) && void 0 !== FJ ? FJ : JJ,
            EJ = cJ => {
              const ZJ = null !== cJ && void 0 !== cJ ? cJ : hJ,
                FJ = void 0 !== cJ ? (0, mZ.e)(AJ, cJ) : DJ;
              OJ(AJ, FJ) && null !== ZJ && ((JJ, cJ, ZJ) => {
                const FJ = jJ.selectedCategoryKey,
                  UJ = WZ(FJ, JJ),
                  eJ = null !== ZJ && void 0 !== ZJ ? ZJ : jJ.userInputsPerItem[UJ],
                  XJ = {
                    categoryKey: FJ,
                    itemKey: JJ,
                    userInput: eJ
                  };
                if (cJ.isRewardedAd) {
                  if (Date.now() - xJ.current < 5e3) return;
                  (0, oJ.bb)((() => {
                    var ZJ, FJ, eJ;
                    console.log("bought rewarded ad");
                    const AJ = XJ.categoryKey ? null === (ZJ = QJ.current.shopInfo[XJ.categoryKey]) || void 0 === ZJ ? void 0 : ZJ.items[JJ] : null;
                    AJ && AJ.isRewardedAd ? (null === (FJ = cJ.userInput) || void 0 === FJ ? void 0 : FJ.type) === (null === AJ || void 0 === AJ || null === (eJ = AJ.userInput) || void 0 === eJ ? void 0 : eJ.type) ? (XJ.userInput = QJ.current.userInputsPerItem[UJ], rJ.gameBridge.send("buyShopItem", XJ), cJ.onBoughtMessage && HJ(cJ.onBoughtMessage)) : console.warn("Shop item input type changed, early out") : console.warn("Shop item no longer valid or a rewarded ad, early out")
                  })), xJ.current = Date.now()
                } else {
                  rJ.gameBridge.send("buyShopItem", XJ), gJ({
                    awaitingPurchase: !0
                  }), clearTimeout(vJ.current), vJ.current = setTimeout((() => {
                    mJ.current = null, gJ({
                      awaitingPurchase: !1
                    })
                  }), 1e3);
                  const JJ = (0, mZ.e)(cJ, eJ);
                  if (mJ.current = null, !isNaN(JJ) && HZ(jJ.currencyAmounts, cJ.currency)) {
                    0 !== JJ && (mJ.current = {
                      currency: cJ.currency,
                      amountBefore: jJ.currencyAmounts[cJ.currency].amount
                    });
                    const ZJ = {
                      ...jJ.currencyAmounts
                    };
                    ZJ[cJ.currency].amount -= JJ, gJ({
                      currencyAmounts: ZJ
                    })
                  }
                  cJ.onBoughtMessage && HJ(cJ.onBoughtMessage)
                }
              })(JJ, AJ, cJ);
              let UJ = jJ.redDotInfo;
              UJ.itemHasRedDot(NJ, JJ) && (UJ.updateItemRedDot(NJ, JJ, !1), UJ = UJ.shallowCopy()), gJ({
                redDotInfo: UJ
              })
            };
          return (0, YJ.jsxs)("div", {
            className: eJ()("ShopItem", {
              ShopItemNoInput: !AJ.userInput,
              ShopItemNoInputCanBuy: !AJ.userInput && sJ,
              ShopItemNoInputSelected: AJ.isSelected,
              ShopItemEnchant: !!nJ
            }),
            "data-pad-focusable": !AJ.userInput || void 0,
            "data-pad-unavailable": !AJ.userInput && !sJ || void 0,
            "data-pad-repeat": null !== (UJ = (0, bZ.b)(AJ)) && void 0 !== UJ ? UJ : void 0,
            "data-pad-repeat-wait": jJ.awaitingPurchase || void 0,
            onClick: () => {
              if (nJ && SJ.current) {
                if (VJ !== XJ) return void yJ(XJ);
                yJ(null)
              }
              AJ.userInput || EJ()
            },
            onPointerDown: JJ => {
              nJ && (SJ.current = (0, EZ.t)(JJ))
            },
            onPointerEnter: JJ => {
              nJ && !(0, EZ.t)(JJ) && yJ(XJ)
            },
            onPointerLeave: JJ => {
              nJ && !(0, EZ.t)(JJ) && yJ((JJ => JJ === XJ ? null : JJ))
            },
            style: {
              zIndex: Object.keys(jJ.shopInfo[NJ].items).length - cJ
            },
            children: [jJ.redDotInfo.itemHasRedDot(NJ, JJ) && (0, YJ.jsx)(qJ.e, {
              top: "-6px",
              right: "-6px"
            }), AJ.badge && (0, YJ.jsx)("div", {
              className: "ShopBadgeContainer",
              children: (0, YJ.jsx)("div", {
                className: eJ()("ShopBadgeMain", AJ.badge.type),
                children: (0, YJ.jsx)(KZ.d, {
                  text: AJ.badge.text
                })
              })
            }), (0, YJ.jsx)("div", {
              className: "ShopItemLeft",
              children: AJ.image && (0, YJ.jsx)(kZ, {
                item: AJ,
                minWidth: 5,
                minHeight: 4.8
              })
            }), (0, YJ.jsxs)("div", {
              className: "ShopItemRight",
              children: [(0, YJ.jsxs)("div", {
                className: "ShopItemHeader",
                children: [(0, YJ.jsx)("div", {
                  className: "ShopItemHeaderTitle",
                  children: (0, YJ.jsx)(KZ.d, {
                    text: GJ
                  })
                }), (0, YJ.jsx)("div", {
                  className: "ShopItemHeaderDescription",
                  children: (0, YJ.jsx)(KZ.d, {
                    text: AJ.description
                  })
                })]
              }), AJ.userInput && (0, YJ.jsxs)("div", {
                className: "ShopItemInputsContainer",
                onClick: JJ => {
                  JJ.stopPropagation()
                },
                children: [(0, YJ.jsx)(zZ, {
                  item: AJ,
                  currInput: hJ,
                  updateInput: cJ => {
                    ((JJ, cJ, ZJ) => {
                      const FJ = WZ(JJ, cJ),
                        UJ = {
                          ...jJ.userInputsPerItem
                        };
                      UJ[FJ] = ZJ, gJ({
                        userInputsPerItem: UJ
                      })
                    })(NJ, JJ, cJ)
                  },
                  onSubmit: JJ => {
                    EJ(JJ)
                  }
                }), ("dropdown" !== AJ.userInput.type || !AJ.userInput.autoSubmit) && (0, YJ.jsx)(fJ.d, {
                  className: "ItemCostButton",
                  disabled: !sJ && null !== hJ,
                  onClick: () => {
                    EJ()
                  },
                  children: (0, YJ.jsx)(dZ, {
                    item: AJ,
                    cost: DJ,
                    currencyAmounts: jJ.currencyAmounts
                  })
                })]
              })]
            }), !AJ.userInput && (0, YJ.jsx)("div", {
              className: "ShopItemNoInputCost",
              children: (0, YJ.jsx)(dZ, {
                item: AJ,
                cost: DJ,
                currencyAmounts: jJ.currencyAmounts
              })
            }), nJ && VJ === XJ && (0, YJ.jsxs)("div", {
              className: "ShopItemEnchantInfo SmallTextBold",
              children: [(0, YJ.jsx)(KZ.d, {
                text: GJ
              }), (0, YJ.jsx)("div", {
                className: "ShopItemEnchantInfoDescription",
                children: (0, YJ.jsx)(KZ.d, {
                  text: (0, QZ.d)("", nJ.enchantments, nJ.enchantmentData)
                })
              })]
            })]
          }, XJ)
        };
      return (0, YJ.jsx)(xZ.b, {
        className: "Menu ShopBody",
        show: UJ,
        children: 0 !== Object.keys(jJ.shopInfo).length && (0, YJ.jsxs)(YJ.Fragment, {
          children: [(0, YJ.jsxs)("div", {
            className: "MenuSideBar",
            children: [(0, YJ.jsx)(hJ, {
              items: gZ(jJ.shopInfo).map((JJ => {
                var cJ;
                return {
                  id: JJ,
                  title: null !== (cJ = jJ.shopInfo[JJ].customTitle) && void 0 !== cJ ? cJ : JJ,
                  redDot: jJ.redDotInfo.categoryHasRedDot(JJ)
                }
              })),
              selectedItemId: NJ,
              onClick: pJ,
              padStartsOnTab: (0, bZ.e)(NJ)
            }), (0, YJ.jsx)("div", {
              className: "MenuSideBarFooter",
              children: jJ.currencyAmounts && Object.keys(jJ.currencyAmounts).map((JJ => {
                var cJ;
                const ZJ = jJ.currencyAmounts[JJ];
                return ZJ.hidden ? null : (0, YJ.jsxs)("div", {
                  className: "ShopCurrencyDiv " + (MJ ? "SmallText" : ""),
                  children: [(0, YJ.jsxs)("div", {
                    className: "ShopCurrencyDetails",
                    children: [(0, YJ.jsx)("div", {
                      className: "ShopCurrencyAmtIcon",
                      style: {
                        color: ZJ.iconColour
                      },
                      children: (0, YJ.jsx)(CZ, {
                        iconName: ZJ.icon
                      })
                    }), "\xa0", (0, vZ.b)(ZJ.amount, 6)]
                  }), (null === (cJ = ZJ.subtext) || void 0 === cJ ? void 0 : cJ.length) > 0 && (0, YJ.jsx)("div", {
                    className: "ShopCurrencySubtext",
                    children: (0, YJ.jsx)(KZ.d, {
                      text: ZJ.subtext
                    })
                  })]
                }, JJ)
              }))
            })]
          }), (0, YJ.jsxs)("div", {
            className: "MenuBody ShopMenuBody",
            children: [(0, YJ.jsx)("div", {
              className: eJ()("ShopOnBoughtInfo", {
                ShopOnBoughtInfoShow: null !== jJ.onBoughtInfo
              }),
              children: (0, YJ.jsx)(KZ.d, {
                text: sJ.current
              })
            }), (0, YJ.jsx)("div", {
              className: "ShopItemsWrapper",
              children: (0, YJ.jsxs)("div", {
                className: "ShopItemsInner",
                children: [(null === (cJ = jJ.shopInfo[NJ]) || void 0 === cJ ? void 0 : cJ.description) && (0, YJ.jsx)("div", {
                  className: "ShopCategoryDescription",
                  children: (0, YJ.jsx)(KZ.d, {
                    text: jJ.shopInfo[NJ].description
                  })
                }), UJ && (0, YJ.jsx)("div", {
                  className: "ShopItems",
                  ref: GJ,
                  "data-pad-initial-area": !0,
                  children: gZ(null === (ZJ = jJ.shopInfo[NJ]) || void 0 === ZJ ? void 0 : ZJ.items).map(((JJ, cJ) => TJ(JJ, cJ)))
                })]
              })
            })]
          })]
        })
      })
    }));

    function kZ(JJ) {
      let {
        item: cJ,
        minWidth: ZJ,
        minHeight: FJ
      } = JJ;
      const {
        image: UJ,
        schematicId: eJ,
        imageColour: XJ
      } = cJ;
      if (eJ) return (0, YJ.jsx)("div", {
        className: "ShopSchematic",
        style: {
          width: `${ZJ}rem`,
          height: `${FJ}rem`
        },
        children: (0, YJ.jsx)(yZ.e, {
          game: {
            schematicId: eJ
          }
        })
      });
      var qJ, jJ;
      if ((0, VZ.e)(UJ)) return (0, YJ.jsx)("div", {
        className: "ShopBlock",
        style: {
          minWidth: `${ZJ}rem`,
          height: "0",
          minHeight: `${FJ}rem`
        },
        children: (0, YJ.jsx)(VZ.d, {
          itemName: UJ,
          amount: null !== (qJ = cJ.amount) && void 0 !== qJ ? qJ : 0,
          amountFontSize: FJ / 4 + "rem",
          enchantmentTier: null === (jJ = cJ.enchant) || void 0 === jJ ? void 0 : jJ.tier
        })
      });
      const hJ = UJ.slice(-4);
      return ".jpg" === hJ || ".png" === hJ ? (0, YJ.jsx)(pZ, {
        image: UJ,
        minWidth: ZJ
      }) : (0, YJ.jsx)(AJ.c, {
        name: UJ,
        className: "SelectedItemImage",
        style: {
          color: XJ
        }
      })
    }

    function pZ(JJ) {
      let {
        image: cJ,
        minWidth: ZJ
      } = JJ;
      const {
        gameNameWithVariation: FJ
      } = (0, Lc.f)("connectedGame"), UJ = cJ.endsWith(".jpg");
      return (0, YJ.jsx)("img", {
        className: eJ()({
          ShopPixelImage: !UJ
        }),
        style: {
          width: `${UJ?1.6*ZJ:ZJ}rem`,
          height: "auto",
          fontSize: "1.25rem"
        },
        src: `/textures/games/${(0,dJ.Jb)(FJ)}/${cJ}`,
        alt: cJ,
        draggable: !1
      })
    }

    function dZ(JJ) {
      let {
        item: cJ,
        cost: ZJ,
        currencyAmounts: FJ
      } = JJ;
      const UJ = !isNaN(ZJ) && 0 !== ZJ && HZ(FJ, cJ.currency);
      let eJ = null;
      return cJ.buyButtonText ? eJ = cJ.buyButtonText : UJ ? (eJ = ZJ, cJ.sell && (eJ = -1 * ZJ), eJ = eJ.toString()) : 0 === ZJ ? eJ = "Free" : cJ.isRewardedAd && (eJ = "Watch ad"), (0, Sc.P)(eJ) || " " === eJ ? null : (0, YJ.jsxs)("div", {
        className: "BuyItemCostAndIcon",
        children: [UJ && (0, YJ.jsx)("div", {
          style: {
            color: FJ[cJ.currency].iconColour
          },
          className: "BuyItemIcon",
          children: (0, YJ.jsx)(CZ, {
            iconName: FJ[cJ.currency].icon
          })
        }), (0, YJ.jsx)("div", {
          className: "BuyItemCost",
          children: (0, YJ.jsx)(KZ.d, {
            text: eJ
          })
        })]
      })
    }

    function zZ(JJ) {
      let {
        item: cJ,
        currInput: ZJ,
        updateInput: UJ,
        onSubmit: eJ
      } = JJ;
      const {
        t: AJ
      } = (0, XJ.F)(), qJ = (0, FJ.useRef)(null);
      if ((0, FJ.useEffect)((() => {
          const JJ = qJ.current;
          JJ && JJ.value !== ZJ && document.activeElement !== JJ && (JJ.value = null !== ZJ && void 0 !== ZJ ? ZJ : "")
        }), [ZJ]), !cJ.userInput) return null;
      let jJ = cJ.userInput;
      if (xJ.featureFlags.sanitizeShopInput && "text" === cJ.userInput.type && (jJ = {
          type: "number",
          placeholderText: "Numbers Only"
        }), "text" === jJ.type || "number" === jJ.type) {
        var hJ, DJ;
        console.assert(void 0 !== ZJ, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(cJ)}`);
        const JJ = "text" === jJ.type && jJ.wordCharsOnly;
        return (0, YJ.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputTextWrapper",
          children: (0, YJ.jsx)(QJ.e, {
            className: "ShopItemUserInputText",
            placeholderText: AJ(jJ.placeholderText),
            defaultValue: ZJ,
            domRef: qJ,
            onValueChange: (cJ, ZJ) => {
              !0 === JJ && (cJ = (0, IZ.hb)(cJ)), qJ.current.value = cJ, UJ(cJ)
            },
            onEnter: eJ,
            type: jJ.type
          }, (null !== (hJ = jJ.initialValue) && void 0 !== hJ ? hJ : "") + (null !== (DJ = jJ.placeholderText) && void 0 !== DJ ? DJ : ""))
        })
      }
      if ("dropdown" === jJ.type) {
        console.assert(void 0 !== ZJ, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(cJ)}`);
        const JJ = jJ.autoSubmit;
        return (0, YJ.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputDropdown",
          children: (0, YJ.jsx)(Xc.d, {
            options: jJ.dropdownOptions.map((JJ => (0, mZ.g)(JJ))),
            value: ZJ,
            onChange: cJ => {
              let {
                value: ZJ
              } = cJ;
              UJ(ZJ), JJ && eJ(ZJ)
            }
          })
        })
      }
      return "player" === jJ.type ? (0, YJ.jsx)(NZ, {
        userInput: jJ,
        currInput: ZJ,
        updateInput: UJ
      }) : "color" === jJ.type ? (0, YJ.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputColor",
        children: (0, YJ.jsx)("input", {
          type: "color",
          value: ZJ,
          onChange: JJ => {
            UJ(JJ.target.value)
          }
        })
      }) : null
    }

    function NZ(JJ) {
      let {
        userInput: cJ,
        currInput: ZJ,
        updateInput: FJ
      } = JJ;
      const UJ = (0, Lc.f)("players"),
        eJ = (0, Lc.f)("hiddenPlayerNames"),
        XJ = (0, mZ.k)(UJ.ids, UJ.localId, cJ);
      return (0, YJ.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputDropdown",
        children: (0, YJ.jsx)(Xc.d, {
          options: XJ.map((JJ => {
            const {
              name: cJ
            } = UJ.byId[JJ];
            return {
              value: JJ,
              label: null === cJ ? "" : (0, SZ.g)(cJ, eJ)
            }
          })),
          value: ZJ,
          onChange: JJ => {
            let {
              value: cJ
            } = JJ;
            FJ(cJ)
          }
        })
      })
    }

    function OZ(JJ) {
      let {
        ids: cJ
      } = JJ;
      return cJ
    }

    function TZ(JJ) {
      let {
        localId: cJ
      } = JJ;
      return cJ
    }

    function CZ(JJ) {
      let {
        iconName: cJ
      } = JJ;
      return rJ.gameBridge.lookup("isItemName", cJ) ? (0, YJ.jsx)(VZ.d, {
        itemName: cJ,
        amount: 1
      }) : (0, YJ.jsx)(AJ.c, {
        name: cJ,
        className: "2x"
      })
    }
    var uZ = ZJ(1528);
    const iZ = (0, ZJ(1300).g)((JJ => JJ.PadLobbyShortcuts)),
      RZ = (0, FJ.lazy)((() => Promise.resolve().then((() => ZJ(4069))).then((JJ => ({
        default: JJ.Lobbyleaderboard
      })))));

    function LZ(JJ) {
      let {
        show: cJ
      } = JJ;
      return cJ ? (0, YJ.jsxs)(YJ.Fragment, {
        children: [(0, YJ.jsx)(iZ, {}), (0, YJ.jsx)(FJ.Suspense, {
          fallback: (0, YJ.jsx)("div", {
            className: "CharacterCustomisationLoading",
            children: (0, YJ.jsx)(EJ.c, {})
          }),
          children: (0, YJ.jsx)(RZ, {})
        })]
      }) : null
    }
    var aZ = ZJ(1454),
      BZ = ZJ(2527),
      tZ = ZJ(1599),
      oZ = ZJ(2324),
      lZ = ZJ(1387),
      JF = ZJ(1335),
      cF = ZJ(2508),
      ZF = ZJ(1906),
      FF = ZJ(2518),
      UF = ZJ(2077);
    const eF = "storeRecentGiftRecipients",
      XF = new Map;

    function AF() {
      try {
        const JJ = bc.j.getItem(eF);
        return Array.isArray(JJ) ? JJ.filter((JJ => "string" === typeof(null === JJ || void 0 === JJ ? void 0 : JJ.name) && JJ.name.length > 0)).map((JJ => ({
          name: JJ.name,
          cosmetics: JJ.cosmetics && "object" === typeof JJ.cosmetics ? JJ.cosmetics : null
        }))) : []
      } catch {
        return []
      }
    }

    function qF(JJ) {
      var cJ;
      const [ZJ, UJ] = (0, FJ.useState)(""), [eJ, XJ] = (0, FJ.useState)("search"), [AJ, qJ] = (0, FJ.useState)(null), [jJ, YJ] = (0, FJ.useState)(null), hJ = (0, FJ.useRef)(null), DJ = (0, FJ.useRef)(null);
      (0, FJ.useEffect)((() => () => {
        hJ.current && clearTimeout(hJ.current)
      }), []);
      const sJ = null !== (cJ = null === AJ || void 0 === AJ ? void 0 : AJ.name) && void 0 !== cJ ? cJ : null;

      function nJ() {
        hJ.current && (clearTimeout(hJ.current), hJ.current = null)
      }(0, FJ.useEffect)((() => {
        if (null === sJ || JJ === MJ.NULL_USER_CONTEXT) return;
        const cJ = sJ.toLowerCase();
        if (cJ === JJ.getPlayerName().toLowerCase()) return void YJ({
          name: sJ,
          result: {
            giftRecipientFound: !1,
            giftRecipientError: "store:giftRecipientIsYou"
          }
        });
        const ZJ = XF.get(cJ);
        if (ZJ) return void YJ({
          name: sJ,
          result: ZJ
        });
        let FJ = !1;
        return async function(JJ, cJ) {
          try {
            const ZJ = await (0, MJ.postJsonWithMetricsCookiesAndJsonResponse)(`${bJ.clientSideServerUrls.indexUrl}/index/xsolla/gift-recipient`, {
              giftRecipientName: cJ
            }, {
              retries: 1
            }, JJ.getMetricsCookies());
            if ("boolean" !== typeof(null === ZJ || void 0 === ZJ ? void 0 : ZJ.giftRecipientFound)) throw new Error(`Unexpected gift recipient lookup response: ${JSON.stringify(ZJ)}`);
            return ZJ
          } catch (ZJ) {
            return console.error("Failed to look up gift recipient:", ZJ), {
              giftRecipientFound: !1,
              giftRecipientError: "store:giftRecipientLookupFailed"
            }
          }
        }(JJ, sJ).catch((JJ => (console.error("Gift recipient lookup failed:", JJ), {
          giftRecipientFound: !1,
          giftRecipientError: "store:giftRecipientLookupFailed"
        }))).then((JJ => {
          !0 !== JJ.giftRecipientFound && "store:giftRecipientLookupFailed" === JJ.giftRecipientError || XF.set(cJ, JJ), FJ || YJ({
            name: sJ,
            result: JJ
          })
        })), () => {
          FJ = !0
        }
      }), [sJ, JJ]);
      const GJ = (0, FJ.useMemo)((() => {
        const JJ = ZJ.trim();
        if (!JJ) return {
          status: "none"
        };
        if (!AJ || AJ.name !== JJ || (null === jJ || void 0 === jJ ? void 0 : jJ.name) !== AJ.name) return {
          status: "pending",
          name: JJ
        };
        const cJ = jJ.result;
        return !1 === cJ.giftRecipientFound ? {
          status: "error",
          name: AJ.name,
          error: cJ.giftRecipientError
        } : {
          status: "found",
          name: cJ.giftRecipientName,
          ownedPacks: cJ.giftRecipientOwnedPacks,
          hasSuperRank: cJ.giftRecipientHasSuperRank
        }
      }), [ZJ, AJ, jJ]);
      (0, FJ.useEffect)((() => {
        "found" === GJ.status && "typed" === (null === AJ || void 0 === AJ ? void 0 : AJ.source) && DJ.current !== GJ.name && (DJ.current = GJ.name, (0, uJ.f)({
          id: "store.gift_recipient",
          value: "typed"
        }))
      }), [GJ, AJ]);
      const fJ = (null === jJ || void 0 === jJ ? void 0 : jJ.name) === (null === AJ || void 0 === AJ ? void 0 : AJ.name) ? null === jJ || void 0 === jJ ? void 0 : jJ.result : null,
        xJ = !0 === (null === fJ || void 0 === fJ ? void 0 : fJ.giftRecipientFound) ? fJ.giftRecipientCosmetics : null;
      return {
        query: ZJ,
        via: eJ,
        recipient: GJ,
        recipientCosmetics: xJ,
        type: function(JJ) {
          UJ(JJ), XJ("search"), nJ();
          const cJ = JJ.trim();
          cJ ? hJ.current = setTimeout((() => {
            qJ({
              name: cJ,
              source: "typed"
            })
          }), 400) : qJ(null)
        },
        choose: function(JJ, cJ) {
          nJ(), UJ(JJ), XJ("typed" === cJ ? "search" : "prefilled" === cJ ? "prefilled" : "suggestion"), qJ({
            name: JJ,
            source: cJ
          }), "typed" !== cJ && "prefilled" !== cJ && (0, uJ.f)({
            id: "store.gift_recipient",
            value: cJ
          })
        },
        clear: function() {
          nJ(), UJ(""), XJ("search"), qJ(null)
        },
        recordGift: function(JJ, cJ) {
          ! function(JJ) {
            XF.delete(JJ.toLowerCase())
          }(JJ), YJ((ZJ => {
            if (!ZJ || ZJ.name.toLowerCase() !== JJ.toLowerCase() || !0 !== ZJ.result.giftRecipientFound || "superRank" === cJ) return ZJ;
            const FJ = ZJ.result.giftRecipientOwnedPacks;
            return {
              ...ZJ,
              result: {
                ...ZJ.result,
                giftRecipientOwnedPacks: FJ.includes(cJ) ? FJ : [...FJ, cJ]
              }
            }
          }))
        }
      }
    }
    var jF = ZJ(2068),
      YF = ZJ(4073),
      hF = ZJ(2595),
      DF = ZJ(2601);
    const sF = ["pointerdown", "pointermove", "keydown", "wheel", "touchstart", "scroll", "blur", "focus"];
    var nF = ZJ(2032),
      GF = ZJ(521),
      fF = ZJ(1537),
      xF = ZJ(2112),
      rF = ZJ(2246);

    function vF(JJ) {
      let {
        cosmetics: cJ
      } = JJ;
      return (0, YJ.jsx)("span", {
        className: "StoreRecipientAvatar",
        children: (0, YJ.jsx)(xF.e, {
          cosmetics: cJ
        })
      })
    }

    function mF(JJ, cJ) {
      var ZJ, FJ;
      const UJ = null !== (ZJ = JJ.friend) && void 0 !== ZJ ? ZJ : {
        isError: !1,
        name: JJ.name,
        ranks: [],
        cosmetics: null !== (FJ = JJ.cosmetics) && void 0 !== FJ ? FJ : {},
        nameColour: GF.d,
        location: {
          status: "noGamePlayed"
        }
      };
      return cJ ? {
        ...UJ,
        cosmetics: cJ
      } : UJ
    }

    function QF(JJ) {
      let {
        recipient: cJ
      } = JJ;
      return "pending" === cJ.status ? (0, YJ.jsx)("span", {
        className: "StoreRecipientStatus",
        children: (0, YJ.jsx)(EJ.c, {})
      }) : "found" === cJ.status ? (0, YJ.jsx)(AJ.c, {
        name: "check",
        className: "StoreRecipientStatus StoreRecipientStatusFound"
      }) : null
    }

    function EF(JJ) {
      var cJ;
      let {
        selfName: ZJ,
        giftRecipient: UJ,
        suggestionsVersion: qJ,
        pulseSignal: jJ,
        disabled: hJ
      } = JJ;
      const {
        t: DJ
      } = (0, XJ.F)(), sJ = (0, fF.k)(), nJ = (0, FJ.useRef)(null), GJ = (0, FJ.useRef)(null), {
        query: rJ,
        via: vJ,
        recipient: mJ,
        recipientCosmetics: EJ
      } = UJ, VJ = (0, UF.j)(rJ), KJ = (0, FJ.useMemo)((() => {
        const JJ = xJ.featureFlags.useSocialFeatures ? sJ.friends.filter((JJ => !JJ.isError)) : [];
        return (0, UF.h)({
          onlineFriends: (0, fF.f)(JJ),
          recentRecipients: AF(),
          friends: JJ,
          selfName: ZJ,
          max: 8
        })
      }), [sJ.friends, ZJ, qJ]), yJ = rJ.trim().toLowerCase(), SJ = "search" !== vJ && yJ ? KJ.find((JJ => JJ.name.toLowerCase() === yJ)) : void 0, IJ = SJ && "prefilled" === vJ ? [SJ, ...KJ.filter((JJ => JJ !== SJ))] : KJ, MJ = "" !== yJ && !SJ, bJ = MJ ? rJ : "", wJ = IJ.length > 0;
      (0, FJ.useEffect)((() => {
        nJ.current && nJ.current.value !== bJ && (nJ.current.value = bJ)
      }), [bJ]), (0, FJ.useEffect)((() => {
        nJ.current && (nJ.current.disabled = hJ)
      }), [hJ, jJ]);
      const WJ = (0, FJ.useRef)(0);

      function HJ() {
        "self" !== VJ && (0, uJ.f)({
          id: "store.mode",
          value: "self"
        }), UJ.clear()
      }

      function PJ(JJ) {
        var cJ, ZJ;
        if (hJ) return;
        if (" " === JJ.key || "Enter" === JJ.key) return JJ.preventDefault(), void JJ.currentTarget.click();
        const FJ = Array.from(null !== (cJ = null === (ZJ = GJ.current) || void 0 === ZJ ? void 0 : ZJ.querySelectorAll("[role=radio]")) && void 0 !== cJ ? cJ : []),
          UJ = FJ.indexOf(JJ.currentTarget);
        let eJ;
        "ArrowRight" === JJ.key || "ArrowDown" === JJ.key ? eJ = FJ[(UJ + 1) % FJ.length] : "ArrowLeft" === JJ.key || "ArrowUp" === JJ.key ? eJ = FJ[(UJ - 1 + FJ.length) % FJ.length] : "Home" === JJ.key ? eJ = FJ[0] : "End" === JJ.key && (eJ = FJ[FJ.length - 1]), eJ && (JJ.preventDefault(), eJ.focus(), eJ.click())
      }(0, FJ.useEffect)((() => {
        var JJ;
        jJ > WJ.current && !hJ && (WJ.current = jJ, null === (JJ = nJ.current) || void 0 === JJ || JJ.focus())
      }), [jJ, hJ]);
      const kJ = "self" === VJ,
        pJ = null !== (cJ = null === SJ || void 0 === SJ ? void 0 : SJ.name) && void 0 !== cJ ? cJ : null,
        dJ = "error" === mJ.status ? mJ.error : null,
        zJ = "store:giftRecipientLookupFailed" === dJ;
      return (0, YJ.jsxs)("div", {
        className: eJ()("StoreRecipientStrip", {
          StoreRecipientStripDisabled: hJ,
          StoreRecipientStripNoChips: !wJ
        }),
        children: [(0, YJ.jsx)("span", {
          className: "StoreRecipientLabel",
          "aria-hidden": !0,
          children: DJ("store:buyingFor")
        }), (0, YJ.jsxs)("div", {
          ref: GJ,
          className: "StoreRecipientRadios",
          role: "radiogroup",
          "aria-label": DJ("store:whoIsItFor"),
          children: [(0, YJ.jsxs)("div", {
            role: "radio",
            "data-pad-focusable": !0,
            "aria-checked": kJ,
            tabIndex: hJ || !kJ && null !== pJ ? -1 : 0,
            className: eJ()("StoreRecipientMe", {
              StoreRecipientChecked: kJ
            }),
            onClick: () => {
              hJ || HJ()
            },
            onKeyDown: PJ,
            children: [(0, YJ.jsx)(AJ.c, {
              name: "user"
            }), " ", DJ("store:me")]
          }), wJ && (0, YJ.jsx)("div", {
            className: "StoreRecipientChips",
            children: IJ.map((JJ => {
              const cJ = JJ === SJ;
              return (0, YJ.jsx)("div", {
                role: "radio",
                "data-pad-focusable": !0,
                "aria-checked": cJ,
                tabIndex: !hJ && cJ ? 0 : -1,
                title: JJ.name,
                className: eJ()("StoreRecipientChip", {
                  StoreRecipientChecked: cJ
                }),
                onClick: () => {
                  hJ || function(JJ) {
                    "gift" !== VJ && (0, uJ.f)({
                      id: "store.mode",
                      value: "gift"
                    }), UJ.choose(JJ.name, JJ.kind)
                  }(JJ)
                },
                onKeyDown: PJ,
                children: (0, YJ.jsx)(rF.g, {
                  playerSocialPreview: mF(JJ, cJ ? EJ : null),
                  opensProfileCard: !1,
                  isFriend: null !== JJ.friend,
                  hideFriendBadge: !0,
                  showLocation: null !== JJ.friend,
                  status: null === JJ.friend ? null : void 0,
                  trailing: cJ ? (0, YJ.jsx)(QF, {
                    recipient: mJ
                  }) : void 0
                })
              }, JJ.name)
            }))
          })]
        }), (0, YJ.jsxs)("div", {
          className: eJ()("StoreRecipientSearch", {
            StoreRecipientChecked: MJ,
            StoreRecipientSearchPulse: jJ > 0 && !MJ,
            StoreRecipientSearchError: null !== dJ && !zJ
          }),
          onClick: () => {
            var JJ;
            null === (JJ = nJ.current) || void 0 === JJ || JJ.focus()
          },
          children: [MJ && "found" === mJ.status && EJ && (0, YJ.jsx)(vF, {
            cosmetics: EJ
          }), !(MJ && "found" === mJ.status && EJ) && (0, YJ.jsx)(AJ.c, {
            name: "magnifying-glass",
            className: "StoreRecipientSearchIcon"
          }), (0, YJ.jsx)(QJ.e, {
            className: "StoreRecipientSearchInput",
            domRef: nJ,
            placeholderText: DJ("store:searchName"),
            defaultValue: bJ,
            maxLength: gJ.i,
            onValueChange: function(JJ) {
              "gift" !== VJ && JJ.trim() && (0, uJ.f)({
                id: "store.mode",
                value: "gift"
              }), UJ.type(JJ)
            },
            onEnter: () => {
              var JJ;
              const cJ = null === (JJ = nJ.current) || void 0 === JJ ? void 0 : JJ.value.trim();
              cJ && UJ.choose(cJ, "typed")
            },
            blurOnEnter: !0
          }), MJ && (0, YJ.jsx)(QF, {
            recipient: mJ
          }), MJ && (0, YJ.jsx)("div", {
            ...(0, fJ.U)({
              disabled: hJ
            }),
            "aria-label": DJ("store:clearRecipient"),
            title: DJ("store:clearRecipient"),
            className: "StoreRecipientClear",
            onClick: JJ => {
              JJ.stopPropagation(), hJ || HJ()
            },
            children: (0, YJ.jsx)(AJ.c, {
              name: "xmark"
            })
          })]
        }, jJ), dJ && (0, YJ.jsx)("div", {
          className: eJ()("StoreRecipientPopover", {
            StoreRecipientPopoverSoft: zJ
          }),
          role: "status",
          children: DJ(dJ)
        })]
      })
    }
    var VF = ZJ(2085),
      KF = ZJ(2013),
      yF = ZJ(3065),
      SF = ZJ(2615),
      IF = ZJ(2042);
    const MF = ZJ.p + "static/media/superRankPreviewPoster.e64783181b692cc31e08.webp";

    function bF() {
      (0, IF.f)(MF, {
        lowPriority: !1
      })
    }

    function wF(JJ) {
      let {
        onBack: cJ,
        cta: ZJ,
        recipient: UJ,
        afterCta: eJ
      } = JJ;
      const {
        t: qJ
      } = (0, XJ.F)(), [jJ, hJ] = (0, FJ.useState)("starting"), DJ = (0, FJ.useRef)(null), sJ = (0, Gc.e)(), nJ = (0, FJ.useRef)(null), GJ = (0, FJ.useCallback)((() => {
        const JJ = DJ.current;
        null !== JJ.error && JJ.load();
        const cJ = JJ.play();
        nJ.current = cJ, cJ.catch((JJ => {
          (0, yF.c)("Failed to play Super Rank video", JJ), sJ.current && nJ.current === cJ && hJ("failed")
        }))
      }), [sJ]);
      return (0, FJ.useEffect)((() => {
        const JJ = DJ.current;
        let cJ;

        function ZJ() {
          clearTimeout(cJ), cJ = setTimeout(GJ, 3e3)
        }
        return GJ(), JJ.addEventListener("ended", ZJ), () => {
          clearTimeout(cJ), JJ.removeEventListener("ended", ZJ)
        }
      }), [GJ]), (0, YJ.jsxs)("div", {
        className: "StoreSuperRankDetail",
        children: [(0, YJ.jsxs)("div", {
          className: "StoreDetailHeader",
          children: [(0, YJ.jsx)(fJ.b, {
            className: "StoreDetailBackButton",
            onClick: cJ,
            padBack: !0,
            children: qJ("general:back")
          }), (0, YJ.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, YJ.jsx)(AJ.c, {
              name: "bolt"
            }), " ", qJ("homePage:superRank")]
          }), UJ]
        }), (0, YJ.jsxs)("div", {
          className: "StoreSuperRankDetailBody",
          children: [(0, YJ.jsxs)("div", {
            className: "StoreSuperRankVideo",
            children: [(0, YJ.jsx)("video", {
              ref: DJ,
              src: `${bJ.clientSideServerUrls.staticUrl}/videos/SuperRankPreview.mp4`,
              poster: MF,
              muted: !0,
              playsInline: !0,
              controls: "playing" === jJ,
              onPlaying: () => {
                hJ("playing")
              },
              onError: () => {
                hJ("failed")
              }
            }), ("failed" === jJ || "loading" === jJ) && (0, YJ.jsx)("div", {
              className: "StoreSuperRankPlay",
              children: (0, YJ.jsx)(fJ.d, {
                ariaLabel: qJ("general:play"),
                loading: "loading" === jJ,
                onClick: () => {
                  hJ("loading"), GJ()
                },
                touchPressOn: "pointerup",
                children: (0, YJ.jsx)(AJ.c, {
                  name: "play"
                })
              })
            })]
          }), (0, YJ.jsxs)("div", {
            className: "StoreSuperRankDetailSide",
            children: [(0, YJ.jsx)("div", {
              className: "StoreSuperRankDetailTable",
              children: (0, YJ.jsx)(SF.c, {})
            }), (0, YJ.jsxs)("div", {
              className: "StoreTileActions",
              children: [ZJ, eJ]
            })]
          })]
        })]
      })
    }
    var WF = ZJ(2258),
      gF = ZJ(3019),
      HF = ZJ(2589);
    const PF = [GF.w.yellow, GF.w.green, GF.w.aqua, GF.w.blue, GF.w.purple, GF.w.red];

    function kF(JJ) {
      return "needsRecipient" === JJ || "lookingUp" === JJ || "gift" === JJ || "recipientOwns" === JJ || "recipientSharesOwned" === JJ
    }

    function pF(JJ) {
      const {
        onKeyDown: cJ,
        ...ZJ
      } = (0, fJ.U)();
      return {
        ...ZJ,
        "aria-label": JJ,
        onKeyDown: JJ => {
          JJ.target === JJ.currentTarget && (null === cJ || void 0 === cJ || cJ(JJ))
        }
      }
    }

    function dF(JJ) {
      let {
        text: cJ
      } = JJ;
      return (0, YJ.jsx)("span", {
        className: "StoreRainbowText",
        children: Array.from(cJ).map(((JJ, cJ) => (0, YJ.jsx)("span", {
          style: {
            color: PF[cJ % PF.length]
          },
          children: JJ
        }, cJ)))
      })
    }
    const zF = {
      recipientOwns: "store:alreadyOwns",
      sharesOwned: "store:sharesOwned",
      recipientSharesOwned: "store:recipientSharesOwned"
    };

    function NF(JJ) {
      let {
        state: cJ,
        item: ZJ,
        price: FJ,
        busy: UJ,
        highlight: qJ = !1,
        onAct: jJ,
        onNeedRecipient: hJ,
        onLogin: DJ = ZF.b
      } = JJ;
      const {
        t: sJ
      } = (0, XJ.F)(), nJ = "superRank" === ZJ ? PJ.i.product.days : null, GJ = JJ => null === nJ ? sJ(JJ ? "general:gift" : "general:buy") : sJ(JJ ? "store:giftDays" : "store:buyDays", {
        days: nJ
      }), xJ = (JJ, cJ) => (0, YJ.jsxs)(YJ.Fragment, {
        children: [cJ && (0, YJ.jsx)("span", {
          className: "StoreCtaIcon",
          children: cJ
        }), null === JJ && (0, YJ.jsx)("span", {
          className: "StoreCtaLabel StoreCtaLabelPending"
        }), null !== JJ && (0, YJ.jsx)("span", {
          className: "StoreCtaLabel",
          title: JJ,
          children: JJ
        }), (0, YJ.jsxs)("span", {
          className: "StoreCtaPrice",
          children: ["\xb7", (0, YJ.jsx)(KF.e, {
            amount: FJ
          })]
        })]
      });
      let rJ;
      switch (cJ) {
        case "pending":
          rJ = (0, YJ.jsx)(fJ.m, {
            className: "StoreCtaButton",
            disabled: !0,
            children: xJ(null)
          });
          break;
        case "login":
          rJ = (0, YJ.jsx)(fJ.m, {
            className: "StoreCtaButton",
            onClick: DJ,
            children: xJ(sJ("store:logIn"))
          });
          break;
        case "owned":
          rJ = (0, YJ.jsx)(fJ.g, {
            className: "StoreCtaButton",
            onClick: () => {
              KJ.d.set({
                openEverythingMenuName: lc.m.CUSTOMISATION
              })
            },
            children: (0, YJ.jsxs)("span", {
              className: "StoreCtaLabel",
              children: [(0, YJ.jsx)(AJ.c, {
                name: "shirt"
              }), " ", sJ("store:equip")]
            })
          });
          break;
        case "recipientOwns":
        case "sharesOwned":
        case "recipientSharesOwned":
          rJ = (0, YJ.jsx)(fJ.m, {
            className: "StoreCtaButton",
            disabled: !0,
            children: (0, YJ.jsx)("span", {
              className: "StoreCtaLabel",
              children: sJ(zF[cJ])
            })
          });
          break;
        case "needsRecipient":
        case "lookingUp":
        case "gift":
          rJ = (0, YJ.jsx)(fJ.m, {
            className: "StoreCtaButton",
            disabled: "needsRecipient" === cJ || null === FJ,
            loading: "lookingUp" === cJ || UJ,
            onClick: jJ,
            analyticsClick: {
              id: "store.gift",
              value: ZJ
            },
            children: xJ(GJ(!0), UF.b)
          });
          break;
        case "buy":
        case "recharge":
          rJ = (0, YJ.jsx)(fJ.m, {
            className: "StoreCtaButton",
            loading: UJ,
            disabled: null === FJ,
            onClick: jJ,
            analyticsClick: {
              id: "store.buy",
              value: ZJ
            },
            children: xJ(GJ(!1))
          })
      }
      return (0, YJ.jsx)("div", {
        className: eJ()("StoreCta", {
          StoreCtaHighlight: qJ
        }),
        onClick: JJ => {
          JJ.stopPropagation(), "needsRecipient" === cJ && hJ()
        },
        children: rJ
      })
    }

    function OF() {
      const {
        t: JJ
      } = (0, XJ.F)();
      return (0, YJ.jsxs)("ul", {
        className: "StorePerks",
        children: [(0, YJ.jsxs)("li", {
          children: [(0, YJ.jsx)(AJ.c, {
            name: "check"
          }), (0, YJ.jsx)(dF, {
            text: JJ("store:colourfulNames")
          })]
        }), (0, YJ.jsxs)("li", {
          children: [(0, YJ.jsx)(AJ.c, {
            name: "check"
          }), JJ("store:perkCapes")]
        }), (0, YJ.jsxs)("li", {
          children: [(0, YJ.jsx)(AJ.c, {
            name: "check"
          }), JJ("store:perkNoAdverts")]
        }), (0, YJ.jsxs)("li", {
          children: [(0, YJ.jsx)(AJ.c, {
            name: "check"
          }), JJ("store:perkFriends", {
            count: (0, TJ.b)(["super"])
          })]
        })]
      })
    }

    function TF(JJ) {
      let {
        daysLeft: cJ,
        totalDays: ZJ,
        urgent: FJ
      } = JJ;
      const {
        t: UJ
      } = (0, XJ.F)(), AJ = ZJ > 0 ? Math.min(1, Math.max(.03, cJ / ZJ)) : 1;
      return (0, YJ.jsxs)("div", {
        className: eJ()("StoreSuperRankMeterArea", {
          StoreSuperRankMeterUrgent: FJ
        }),
        children: [(0, YJ.jsx)("span", {
          className: "StoreSuperRankDaysLeft",
          children: 1 === cJ ? UJ("store:oneDayLeft") : UJ("store:daysLeft", {
            days: cJ
          })
        }), (0, YJ.jsx)("div", {
          className: "StoreSuperRankMeter",
          children: (0, YJ.jsx)("i", {
            style: {
              width: 100 * AJ + "%"
            }
          })
        })]
      })
    }

    function CF(JJ) {
      let {
        state: cJ,
        urgent: ZJ,
        daysLeft: FJ,
        totalDays: UJ,
        recipientHasSuperRank: qJ,
        busy: jJ,
        highlight: hJ,
        onOpen: DJ,
        onAct: sJ,
        onNeedRecipient: nJ,
        onLogin: GJ
      } = JJ;
      const {
        t: fJ
      } = (0, XJ.F)(), xJ = kF(cJ), {
        days: rJ
      } = PJ.i.product, vJ = fJ("store:recipientHasSuperRank", {
        giftDays: rJ
      });
      return (0, YJ.jsxs)("div", {
        className: eJ()("StoreTile StoreSuperRankTile", {
          StoreTileGift: xJ,
          StoreSuperRankTileUrgent: "recharge" === cJ && ZJ,
          StoreSuperRankTileWithChip: qJ,
          StoreSuperRankTileGiftReady: "gift" === cJ
        }),
        ...pF(fJ("homePage:superRank")),
        "data-store-item": "superRank",
        onPointerEnter: bF,
        onFocus: bF,
        onClick: DJ,
        children: [(0, YJ.jsx)("div", {
          className: "StoreSuperRankArt",
          style: {
            backgroundImage: `url(${nF.d})`
          }
        }), xJ && (0, YJ.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, YJ.jsxs)("div", {
          className: "StoreTileContent",
          children: [qJ && (0, YJ.jsx)("span", {
            className: "StoreChip StoreChipGift",
            title: vJ,
            children: vJ
          }), (0, YJ.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, YJ.jsx)(AJ.c, {
              name: "bolt"
            }), " ", fJ("homePage:superRank")]
          }), xJ && (0, YJ.jsx)("div", {
            className: "StoreTilePitch",
            children: fJ("store:giftPitch", {
              days: rJ
            })
          }), "recharge" === cJ && (0, YJ.jsx)(TF, {
            daysLeft: FJ,
            totalDays: UJ,
            urgent: ZJ
          }), (0, YJ.jsx)(OF, {}), (0, YJ.jsxs)("div", {
            className: "StoreTileActions",
            children: [(0, YJ.jsx)(NF, {
              state: cJ,
              item: "superRank",
              price: PJ.i.price,
              busy: jJ,
              highlight: hJ,
              onAct: sJ,
              onNeedRecipient: nJ,
              onLogin: GJ
            }), "needsRecipient" === cJ && (0, YJ.jsx)("span", {
              className: "StoreTileNote StoreTileNoteGift",
              children: fJ("store:pickRecipientFirst")
            }), "recharge" === cJ && ZJ && (0, YJ.jsx)("span", {
              className: "StoreTileNote StoreSuperRankEnding",
              children: 1 === FJ ? fJ("store:endsInOneDay") : fJ("store:endsInDays", {
                days: FJ
              })
            })]
          })]
        })]
      })
    }
    const uF = {
      standard: "StorePackTileStandard",
      enhanced: "StorePackTileEnhanced",
      premium: "StorePackTilePremium"
    };

    function iF(JJ) {
      var cJ;
      let {
        pack: ZJ,
        state: UJ,
        busy: qJ,
        onOpen: jJ,
        onAct: hJ,
        onNeedRecipient: DJ,
        onLogin: sJ
      } = JJ;
      const {
        t: nJ
      } = (0, XJ.F)(), GJ = aZ.e[ZJ], fJ = cF.h[ZJ], xJ = (0, nF.l)(ZJ), rJ = (0, FJ.useRef)(null);
      (0, HF.j)(ZJ, rJ);
      const vJ = kF(UJ),
        mJ = null !== (cJ = GJ.displayName) && void 0 !== cJ ? cJ : ZJ,
        QJ = (0, gF.b)((() => {
          (0, WF.d)();
          const JJ = (0, HF.d)(ZJ);
          void 0 !== JJ && (0, IF.f)((0, HF.c)(JJ))
        })),
        [EJ] = (0, FJ.useState)(DF.j);
      return (0, YJ.jsxs)("div", {
        className: eJ()("StoreTile StorePackTile", GJ.tier && uF[GJ.tier], {
          StorePackTileOwned: "owned" === UJ,
          StorePackTileRecipientOwns: "recipientOwns" === UJ,
          StoreTileGift: vJ
        }),
        ...pF(mJ),
        ref: rJ,
        "data-store-item": ZJ,
        onClick: jJ,
        onPointerMove: JJ => {
          "mouse" !== JJ.pointerType || 0 === JJ.movementX && 0 === JJ.movementY || EJ || QJ.start()
        },
        onPointerLeave: QJ.cancel,
        children: [fJ && (0, YJ.jsx)(fJ, {}), (0, YJ.jsx)("div", {
          className: "StorePackCharacters",
          children: xJ.map((JJ => (0, YJ.jsx)("div", {
            className: "StorePackCharacter",
            style: {
              backgroundImage: `url(${(0,nF.h)(JJ)})`
            }
          }, JJ)))
        }), (0, YJ.jsx)("div", {
          className: "StoreTileScrim"
        }), vJ && (0, YJ.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, YJ.jsxs)("div", {
          className: "StoreTileContent",
          children: [(0, YJ.jsx)("div", {
            className: "StoreTileTitle",
            children: mJ
          }), (0, YJ.jsxs)("div", {
            className: "StoreTileMeta",
            children: [nJ("store:itemCount", {
              count: (0, VF.d)(ZJ)
            }), "owned" === UJ && (0, YJ.jsxs)("span", {
              className: "StoreTileOwned",
              children: [" \xb7 ", (0, YJ.jsx)(AJ.c, {
                name: "check"
              }), " ", nJ("general:owned")]
            })]
          }), (0, YJ.jsx)(NF, {
            state: UJ,
            item: ZJ,
            price: (0, PJ.f)(ZJ),
            busy: qJ,
            onAct: hJ,
            onNeedRecipient: DJ,
            onLogin: sJ
          })]
        })]
      })
    }
    var RF = ZJ(2556),
      LF = ZJ(1239);
    const aF = {
      standard: "StoreCharacterCardStandard",
      enhanced: "StoreCharacterCardEnhanced",
      premium: "StoreCharacterCardPremium"
    };

    function BF(JJ) {
      var cJ, ZJ;
      let {
        tile: UJ,
        busy: qJ,
        highlight: jJ,
        onAct: hJ,
        onNeedRecipient: DJ,
        onLogin: sJ
      } = JJ;
      const {
        t: nJ
      } = (0, XJ.F)(), {
        pack: GJ,
        state: fJ
      } = UJ, xJ = aZ.e[GJ], rJ = (0, aZ.i)(GJ), vJ = cF.h[(0, nF.k)(GJ)], mJ = null !== (cJ = xJ.tier) && void 0 !== cJ ? cJ : "standard", QJ = (0, FJ.useRef)(null);
      return (0, LF.e)(QJ, "standard" !== mJ), (0, YJ.jsxs)("div", {
        ref: QJ,
        className: eJ()("StoreCharacterCard", aF[mJ], {
          StoreCharacterCardOwned: "owned" === fJ || "recipientOwns" === fJ,
          StoreCharacterCardGift: kF(fJ)
        }),
        "data-store-item": GJ,
        children: [(0, YJ.jsxs)("div", {
          className: "StoreCharacterArt",
          children: [vJ && (0, YJ.jsx)(vJ, {
            simple: !0
          }), (0, YJ.jsx)("div", {
            className: "StoreCharacterHalo"
          }), (0, YJ.jsx)("div", {
            className: "StoreCharacterFigure",
            style: {
              backgroundImage: `url(${(0,nF.h)(rJ)})`
            }
          }), "owned" === fJ && (0, YJ.jsx)("span", {
            className: "StoreCharacterOwned",
            title: nJ("general:owned"),
            "aria-label": nJ("general:owned"),
            children: (0, YJ.jsx)(AJ.c, {
              name: "check"
            })
          })]
        }), (0, YJ.jsxs)("div", {
          className: "StoreCharacterPlate",
          children: [(0, YJ.jsx)("div", {
            className: "StoreCharacterName",
            children: null !== (ZJ = xJ.displayName) && void 0 !== ZJ ? ZJ : GJ
          }), (0, YJ.jsx)(NF, {
            state: fJ,
            item: GJ,
            price: (0, PJ.f)(GJ),
            busy: qJ,
            highlight: jJ,
            onAct: hJ,
            onNeedRecipient: DJ,
            onLogin: sJ
          })]
        })]
      })
    }

    function tF(JJ) {
      let {
        tiles: cJ,
        busy: ZJ,
        highlightItem: FJ,
        onAct: UJ,
        onNeedRecipient: eJ,
        onLogin: XJ
      } = JJ;
      return (0, YJ.jsx)("div", {
        className: "StoreCharacterGrid",
        children: cJ.map((JJ => (0, YJ.jsx)(BF, {
          tile: JJ,
          busy: ZJ,
          highlight: FJ === JJ.pack,
          onAct: () => {
            UJ(JJ.pack)
          },
          onNeedRecipient: eJ,
          onLogin: () => {
            XJ(JJ.pack)
          }
        }, JJ.pack)))
      })
    }

    function oF(JJ) {
      let {
        title: cJ
      } = JJ;
      return (0, YJ.jsx)("h2", {
        className: "StoreSectionDivider",
        children: (0, YJ.jsx)("span", {
          className: "StoreSectionDividerTitle",
          children: cJ
        })
      })
    }

    function lF(JJ) {
      let {
        layout: cJ,
        bundleGift: ZJ,
        superRankDaysLeft: FJ,
        superRankTotalDays: UJ,
        busy: eJ,
        highlightItem: AJ,
        onOpen: qJ,
        onAct: jJ,
        onNeedRecipient: hJ,
        onLogin: DJ
      } = JJ;
      const {
        t: sJ
      } = (0, XJ.F)(), nJ = cJ.packs.filter((JJ => void 0 === (0, aZ.i)(JJ.pack))), GJ = cJ.packs.filter((JJ => void 0 !== (0, aZ.i)(JJ.pack)));
      return (0, YJ.jsxs)(YJ.Fragment, {
        children: [(0, YJ.jsx)(RF.d, {
          className: "StoreSuperGems",
          gift: ZJ
        }), (0, YJ.jsx)(oF, {
          title: sJ("store:rank")
        }), (0, YJ.jsx)(CF, {
          state: cJ.superRank.state,
          urgent: cJ.superRank.urgent,
          daysLeft: FJ,
          totalDays: UJ,
          recipientHasSuperRank: cJ.recipientHasSuperRank,
          busy: eJ,
          highlight: "superRank" === AJ,
          onOpen: () => {
            qJ("superRank")
          },
          onAct: () => {
            jJ("superRank")
          },
          onNeedRecipient: hJ,
          onLogin: () => {
            DJ("superRank")
          }
        }), (0, YJ.jsx)(oF, {
          title: sJ("store:bundles")
        }), (0, YJ.jsx)("div", {
          className: "StorePackGrid",
          children: nJ.map((JJ => (0, YJ.jsx)(iF, {
            pack: JJ.pack,
            state: JJ.state,
            busy: eJ,
            onOpen: () => {
              qJ(JJ.pack)
            },
            onAct: () => {
              jJ(JJ.pack)
            },
            onNeedRecipient: hJ,
            onLogin: () => {
              DJ(JJ.pack)
            }
          }, JJ.pack)))
        }), (0, YJ.jsx)(oF, {
          title: sJ("store:characters")
        }), (0, YJ.jsx)(tF, {
          tiles: GJ,
          busy: eJ,
          highlightItem: AJ,
          onAct: jJ,
          onNeedRecipient: hJ,
          onLogin: DJ
        })]
      })
    }

    function JU(JJ) {
      let {
        state: cJ,
        mode: ZJ,
        giftName: FJ,
        busy: UJ,
        highlight: eJ,
        purchaseError: AJ,
        onBack: qJ,
        onChooseRecipient: jJ,
        onAct: hJ,
        onLogin: DJ
      } = JJ;
      const {
        t: sJ
      } = (0, XJ.F)();
      return (0, YJ.jsx)(wF, {
        onBack: qJ,
        recipient: "gift" === ZJ && (0, YJ.jsxs)(YJ.Fragment, {
          children: [FJ && (0, YJ.jsxs)("span", {
            className: "StoreDetailRecipient",
            title: sJ("store:giftFor", {
              name: FJ
            }),
            children: [UF.b, " ", sJ("store:giftFor", {
              name: FJ
            })]
          }), !FJ && (0, YJ.jsxs)("div", {
            ...(0, fJ.U)(),
            className: "StoreDetailRecipient StoreDetailRecipientChoose",
            onClick: jJ,
            children: [UF.b, " ", sJ("store:chooseRecipient")]
          })]
        }),
        cta: (0, YJ.jsx)(NF, {
          state: cJ,
          item: "superRank",
          price: PJ.i.price,
          busy: UJ,
          highlight: eJ,
          onAct: hJ,
          onNeedRecipient: jJ,
          onLogin: DJ
        }),
        afterCta: (0, YJ.jsx)(YJ.Fragment, {
          children: AJ && (0, YJ.jsx)("span", {
            className: "StoreTileNote StoreTileNoteError",
            children: sJ(AJ)
          })
        })
      })
    }
    const cU = {
        kind: "board"
      },
      ZU = [...aZ.p, ...aZ.m];
    let FU = !1;

    function UU(JJ) {
      return "superRank" === JJ.kind ? "superRank" : "pack" === JJ.kind ? JJ.pack : null
    }

    function eU(JJ) {
      return "found" === JJ.status || "error" === JJ.status && "store:giftRecipientLookupFailed" === JJ.error ? JJ.name : null
    }(0, zJ.q)(BZ.prefetchPremiumCurrencyBundles);
    const XU = (0, FJ.memo)((function(JJ) {
      var cJ, UJ;
      let {
        show: AJ
      } = JJ;
      const {
        t: qJ
      } = (0, XJ.F)(), {
        userContext: jJ
      } = (0, sJ.d)(), hJ = jJ !== MJ.NULL_USER_CONTEXT, DJ = qF(jJ), [nJ, fJ] = (0, GJ.d)(), {
        page: xJ,
        urlMode: rJ,
        goTo: vJ
      } = (0, jF.f)(), mJ = UU(xJ), {
        openEverythingMenuName: QJ,
        gameState: EJ
      } = (0, KJ.j)(["openEverythingMenuName", "gameState"]), VJ = null !== QJ;
      ! function(JJ, cJ) {
        const [UJ] = (0, FJ.useState)(DF.j), [eJ, XJ] = (0, FJ.useState)(!1);
        UJ && cJ && !eJ && XJ(!0);
        const AJ = (0, UZ.q)(),
          qJ = UJ && eJ && JJ && !AJ;
        (0, FJ.useEffect)((() => {
          if (!qJ) return;
          let JJ = null,
            cJ = null,
            FJ = null;
          const UJ = () => !document.hasFocus() || document.activeElement instanceof HTMLIFrameElement || (0, BZ.isXsollaCheckoutInControl)(),
            eJ = () => {
              var ZJ;
              null === (ZJ = FJ) || void 0 === ZJ || ZJ(), FJ = null, null !== JJ && (clearTimeout(JJ), JJ = null), null !== cJ && (clearTimeout(cJ), cJ = null)
            },
            XJ = () => {
              (0, YF.m)(!1), (0, YF.l)(!1), eJ(), JJ = setTimeout((() => {
                JJ = null, FJ = (0, hF.e)((() => {
                  FJ = null, UJ() ? XJ() : ((0, YF.m)(!0), cJ = setTimeout((() => {
                    cJ = null, FJ = (0, hF.e)((() => {
                      FJ = null, UJ() ? XJ() : (0, YF.l)(!0)
                    }))
                  }), 3e3), Promise.resolve().then((() => ZJ(4069))).then((JJ => {
                    JJ.startBackgroundGameSetup()
                  }), (JJ => {
                    console.warn("Background game setup: its chunk failed to load", JJ)
                  })))
                }))
              }), 2e3)
            };
          for (const ZJ of sF) window.addEventListener(ZJ, XJ, {
            capture: !0,
            passive: !0
          });
          return XJ(), () => {
            for (const JJ of sF) window.removeEventListener(JJ, XJ, {
              capture: !0
            });
            eJ(), (0, YF.m)(!1), (0, YF.l)(!1)
          }
        }), [qJ])
      }(AJ && VJ, "pack" === xJ.kind);
      const yJ = "landingPage" === EJ;
      (0, FJ.useEffect)((() => {
        VJ && (0, BZ.prefetchPremiumCurrencyBundles)()
      }), [VJ]), (0, FJ.useEffect)((() => {
        VJ && !AJ && yJ && (0, nF.t)()
      }), [VJ, AJ, yJ]);
      const [SJ, IJ] = (0, FJ.useState)(0), [bJ, wJ] = (0, FJ.useState)(null), [WJ, gJ] = (0, FJ.useState)(null), [HJ, kJ] = (0, FJ.useState)(null), [pJ, OJ] = (0, FJ.useState)(null), TJ = (0, FJ.useRef)(null), CJ = (0, FJ.useRef)(null), iJ = (0, FJ.useRef)(!1), RJ = (0, zJ.z)(), LJ = (0, FJ.useRef)(0), aJ = (0, FJ.useRef)(!1);

      function BJ() {
        IJ((JJ => JJ + 1))
      }(0, FJ.useEffect)((() => {
        if (AJ) {
          if (FU = !0, RJ && RJ.seq !== LJ.current) {
            var JJ, cJ;
            LJ.current = RJ.seq;
            const ZJ = (0, zJ.c)(RJ);
            rJ || vJ(ZJ), OJ(RJ.highlight && null !== (JJ = null !== (cJ = UU(ZJ)) && void 0 !== cJ ? cJ : RJ.openItem) && void 0 !== JJ ? JJ : null), gJ(null), "gift" === RJ.mode && RJ.giftRecipientName ? DJ.choose(RJ.giftRecipientName, "prefilled") : "current" !== RJ.mode && DJ.clear(), "gift" !== RJ.mode || RJ.giftRecipientName || BJ(), (0, uJ.f)({
              id: "store.open",
              value: RJ.source
            })
          } else aJ.current || (0, uJ.f)({
            id: "store.open",
            value: "menuTab"
          });
          aJ.current = !0
        } else aJ.current = !1
      }), [AJ, RJ]), (0, FJ.useEffect)((() => {
        if (!pJ) return;
        const JJ = setTimeout((() => {
          OJ(null)
        }), 4e3);
        return () => {
          clearTimeout(JJ)
        }
      }), [pJ]), (0, FJ.useEffect)((() => {
        const JJ = TJ.current;
        var cJ;
        if (AJ && JJ)
          if (mJ) CJ.current = mJ, null === (cJ = JJ.querySelector(".StoreDetailBackButton, .CosmeticShopDetailBackButton")) || void 0 === cJ || cJ.focus();
          else if (CJ.current) {
          var ZJ;
          null === (ZJ = JJ.querySelector(`[data-store-item="${CJ.current}"]`)) || void 0 === ZJ || ZJ.focus(), CJ.current = null
        }
      }), [mJ, AJ]), (0, FJ.useEffect)((() => {
        gJ(null)
      }), [DJ.query]), (0, FJ.useEffect)((() => {
        if (!HJ) return;
        const JJ = setTimeout((() => {
          kJ(null)
        }), 8e3);
        return () => {
          clearTimeout(JJ)
        }
      }), [HJ]);
      const tJ = jJ.superRankInfo,
        oJ = tJ ? (0, dJ.ac)(tJ) : 0,
        lJ = (0, UF.f)(oJ),
        Jc = oJ > 0,
        cc = jJ.isLoggedIn(),
        Zc = jJ.getOwnedCosmeticPacks(),
        Fc = (0, UF.j)(DJ.query),
        Uc = (0, UF.e)({
          mode: Fc,
          loggedIn: hJ ? cc : null,
          hasSuperRank: Jc,
          superRankDaysLeft: lJ,
          ownedPacks: Zc,
          packs: ZU,
          recipient: DJ.recipient
        });
      (0, FJ.useEffect)((() => {
        if (!cc || !AJ) return;
        const JJ = (0, zJ.y)();
        var cJ;
        JJ && ("superRank" === (cJ = JJ.item) || ZU.includes(cJ)) && ((0, uJ.f)({
          id: "store.login_resume",
          value: JJ.item
        }), (0, zJ.i)({
          mode: JJ.mode,
          source: "loginResume",
          giftRecipientName: "gift" === JJ.mode && JJ.recipient ? JJ.recipient : void 0,
          openItem: JJ.item,
          highlight: !0
        }))
      }), [cc, AJ]);
      const ec = (0, UF.l)({
        hasSuperRank: cc && Jc,
        superRankDaysLeft: lJ,
        openedThisSession: FU || AJ
      });
      if ((0, FJ.useEffect)((() => {
          (0, zJ.u)(ec)
        }), [ec]), !AJ || !(0, NJ.siteSupportsPurchases)()) return null;
      const Xc = fJ > nJ && nJ <= 700,
        Ac = !Xc && fJ <= 420,
        qc = "gift" === Fc ? eU(DJ.recipient) : null,
        jc = null !== bJ;

      function Yc(JJ) {
        (0, zJ.o)({
          item: JJ,
          mode: Fc,
          recipient: "gift" === Fc ? DJ.query.trim() : ""
        }), (0, ZF.b)()
      }

      function hc(JJ, cJ) {
        (0, uJ.f)({
          id: "store.purchase_done",
          value: `${cJ?"gift":"self"}:${JJ}`
        }), cJ && (DJ.recordGift(cJ.name, JJ), Dc(cJ))
      }

      function Dc(JJ) {
        ! function(JJ) {
          try {
            bc.j.setItem(eF, (0, UF.p)(AF(), JJ))
          } catch {}
        }({
          name: JJ.name,
          cosmetics: JJ.cosmetics
        }), vJ(cU), kJ((cJ => {
          var ZJ;
          return {
            name: JJ.name,
            seq: (null !== (ZJ = null === cJ || void 0 === cJ ? void 0 : cJ.seq) && void 0 !== ZJ ? ZJ : 0) + 1
          }
        }))
      }
      async function sc(JJ) {
        var cJ, ZJ;
        if (iJ.current) return;
        if (!cc) return void Yc(JJ);
        gJ(null), OJ(null);
        const FJ = "gift" === Fc ? {
          name: eU(DJ.recipient),
          cosmetics: DJ.recipientCosmetics
        } : null;
        if (FJ && !FJ.name) return void BJ();
        const UJ = "superRank" === JJ ? PJ.i.id : (0, PJ.e)(JJ);
        iJ.current = !0;
        const eJ = await (0, FF.e)(UJ, null !== (cJ = null === FJ || void 0 === FJ ? void 0 : FJ.name) && void 0 !== cJ ? cJ : null);
        if (iJ.current = !1, !eJ) return;
        wJ(JJ);
        const XJ = await oZ.c.purchase(UJ, null !== (ZJ = null === FJ || void 0 === FJ ? void 0 : FJ.name) && void 0 !== ZJ ? ZJ : null);
        wJ(null), XJ ? gJ(XJ) : (hc(JJ, FJ), FJ || (await (0, lZ.flushClientAnalyticsEvents)(), (0, tZ.refreshWithoutConfirmation)("superRank" === JJ ? "/super-rank-welcome" : `/pack-welcome/${JJ}`)))
      }
      const nc = eJ()("Store", {
        StoreGift: "gift" === Fc,
        StorePortrait: Xc,
        StoreCompact: Ac
      });
      if ("pack" === xJ.kind) {
        const JJ = xJ.pack,
          cJ = Uc.packs.find((cJ => cJ.pack === JJ));
        return (0, YJ.jsx)("div", {
          ref: TJ,
          className: "CosmeticShopContainer",
          children: (0, YJ.jsx)(cF.e, {
            pack: JJ,
            onBack: () => {
              vJ(cU)
            },
            onPurchased: cJ => {
              hc(JJ, cJ ? {
                name: cJ,
                cosmetics: null
              } : null)
            },
            giftCta: "gift" === Fc && qc && cJ && (0, YJ.jsxs)(YJ.Fragment, {
              children: [(0, YJ.jsx)(NF, {
                state: cJ.state,
                item: JJ,
                price: (Gc = JJ, "superRank" === Gc ? PJ.i.price : (0, PJ.f)(Gc)),
                busy: jc,
                onAct: () => {
                  sc(JJ)
                },
                onNeedRecipient: () => {
                  vJ(cU), BJ()
                }
              }), WJ && (0, YJ.jsx)("span", {
                className: "CosmeticShopGiftError SmallTextBold",
                children: qJ(WJ)
              })]
            }),
            ownedPacks: Zc,
            startAsGift: "gift" === Fc,
            initialGiftRecipient: "gift" === Fc ? null !== qc && void 0 !== qc ? qc : DJ.query.trim() : "",
            highlightCta: pJ === JJ
          }, JJ)
        })
      }
      var Gc;
      return "superRank" === xJ.kind ? (0, YJ.jsx)("div", {
        ref: TJ,
        className: eJ()(nc, "StoreDetailView"),
        children: (0, YJ.jsx)(JU, {
          state: Uc.superRank.state,
          mode: Fc,
          giftName: qc,
          busy: jc,
          highlight: "superRank" === pJ,
          purchaseError: WJ,
          onBack: () => {
            vJ(cU)
          },
          onChooseRecipient: () => {
            vJ(cU), BJ()
          },
          onAct: () => {
            sc("superRank")
          },
          onLogin: () => {
            Yc("superRank")
          }
        })
      }) : (0, YJ.jsxs)("div", {
        ref: TJ,
        className: nc,
        children: [(0, YJ.jsx)("div", {
          className: "StoreTopRow",
          children: (0, YJ.jsx)(EF, {
            selfName: hJ ? jJ.getPlayerName() : "",
            giftRecipient: DJ,
            suggestionsVersion: null !== (cJ = null === HJ || void 0 === HJ ? void 0 : HJ.seq) && void 0 !== cJ ? cJ : 0,
            pulseSignal: SJ,
            disabled: jc || !hJ
          })
        }), HJ && (0, YJ.jsxs)("div", {
          className: "StoreNotice StoreNoticeGiftSent",
          onClick: () => {
            kJ(null)
          },
          children: [(0, YJ.jsx)(JF.c, {
            showSignal: HJ.seq
          }), UF.b, " ", qJ("store:giftSent", {
            name: HJ.name
          })]
        }, HJ.seq), !HJ && WJ && (0, YJ.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: qJ(WJ)
        }), (0, YJ.jsx)(lF, {
          layout: Uc,
          bundleGift: "gift" === Fc ? {
            recipientName: qc,
            lookingUp: "pending" === DJ.recipient.status,
            busy: jc,
            onNeedRecipient: BJ,
            onSent: JJ => {
              (0, uJ.f)({
                id: "store.purchase_done",
                value: "gift:superGems"
              }), Dc({
                name: JJ,
                cosmetics: DJ.recipientCosmetics
              })
            }
          } : null,
          superRankDaysLeft: lJ,
          superRankTotalDays: null !== (UJ = null === tJ || void 0 === tJ ? void 0 : tJ.superRankForDays) && void 0 !== UJ ? UJ : 0,
          busy: jc,
          highlightItem: pJ,
          onOpen: function(JJ) {
            (0, uJ.f)({
              id: "store.item_open",
              value: JJ
            }), vJ((0, zJ.f)(JJ))
          },
          onAct: sc,
          onNeedRecipient: BJ,
          onLogin: Yc
        })]
      })
    }));
    var AU = ZJ(2321),
      qU = ZJ(8139),
      jU = ZJ(2381),
      YU = ZJ(2240),
      hU = ZJ(2275),
      DU = ZJ(2289),
      sU = ZJ(2292),
      nU = ZJ(2372),
      GU = ZJ(2359),
      fU = ZJ(2344),
      xU = ZJ(2100),
      rU = ZJ(2133),
      vU = ZJ(2117),
      mU = ZJ(1813),
      QU = ZJ(2294),
      EU = ZJ(2142);

    function VU(JJ) {
      let {
        show: cJ
      } = JJ;
      return cJ ? (0, YJ.jsx)(KU, {}) : null
    }

    function KU() {
      const {
        t: JJ
      } = (0, XJ.F)(), {
        followsLeader: cJ
      } = (0, YU.g)(), {
        loading: ZJ,
        friends: UJ,
        requests: qJ,
        invites: jJ
      } = (0, fF.k)(), {
        userContext: hJ
      } = (0, sJ.d)(), [DJ, nJ] = (0, FJ.useState)(EU.i);
      (0, FJ.useEffect)((() => {
        (0, EU.b)()
      }), []);
      const GJ = qJ.map((JJ => JJ.name)),
        {
          state: xJ,
          recentRequesters: rJ
        } = (0, GU.j)(),
        vJ = new Map([...("loaded" === xJ.status ? xJ.recentPlayers : []).map((JJ => [JJ.preview.name, JJ])), ...rJ.map((JJ => [JJ.name, JJ]))]),
        mJ = (0, FJ.useRef)(null),
        [VJ, KJ] = (0, FJ.useState)(""),
        [yJ, SJ] = (0, FJ.useState)("Enter"),
        [IJ, MJ] = (0, FJ.useState)(null);

      function bJ() {
        VJ && (SJ("Loading"), (0, vU.j)(VJ, "social_menu").then((JJ => {
          if (mJ.current) switch (JJ.kind) {
            case "sent":
              SJ("Success");
              break;
            case "becameFriends":
              SJ("BecameFriends");
              break;
            case "failed":
              MJ(JJ.message), SJ("Error")
          }
        })))
      }
      return (0, FJ.useEffect)((() => {
        if ("Enter" === yJ || "Loading" === yJ) return;
        const JJ = setTimeout((() => {
          mJ.current.value = "", KJ(""), SJ("Enter")
        }), "Success" === yJ ? 1e3 : 4e3);
        return () => {
          clearTimeout(JJ)
        }
      }), [yJ]), (0, YJ.jsx)("div", {
        className: "SocialMenu",
        children: (0, YJ.jsxs)("div", {
          className: "SocialMenuInner",
          children: [(0, YJ.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, YJ.jsxs)("div", {
              className: "SocialMenuBox SocialMenuAddFriend",
              children: [(0, YJ.jsx)(sU.c, {
                label: JJ("socialBar:addFriend")
              }), (0, YJ.jsxs)("div", {
                className: "AddFriendBody",
                children: [(0, YJ.jsxs)("div", {
                  className: eJ()("AddFriendBodyOverlay", {
                    [`AddFriendBodyOverlay${yJ}`]: !0
                  }),
                  children: ["Loading" === yJ && (0, YJ.jsx)(EJ.c, {}), "Success" === yJ && (0, YJ.jsx)(AJ.c, {
                    name: "check"
                  }), "BecameFriends" === yJ && (0, YJ.jsx)(YJ.Fragment, {
                    children: JJ("socialBar:nowFriends", {
                      playerName: VJ
                    })
                  }), "Error" === yJ && IJ && (0, YJ.jsx)(YJ.Fragment, {
                    children: JJ(IJ.translationKey, IJ.params)
                  })]
                }), (0, YJ.jsxs)("div", {
                  className: "PlayerSearch",
                  children: [(0, YJ.jsx)(QJ.e, {
                    className: "PlayerSearchInput",
                    placeholderText: JJ("socialBar:enterPlayerName"),
                    domRef: mJ,
                    onValueChange: JJ => {
                      KJ((0, gJ.p)(JJ)), mJ.current.value = (0, gJ.p)(JJ)
                    },
                    onEnter: () => {
                      VJ && (0, uJ.f)({
                        id: "social.add_friend",
                        value: "social_menu"
                      }), bJ()
                    }
                  }), (0, YJ.jsxs)(fJ.d, {
                    className: "PlayerSearchInputButton SmallTextLight",
                    onClick: () => {
                      bJ()
                    },
                    analyticsClick: {
                      id: "social.add_friend",
                      value: "social_menu"
                    },
                    children: [(0, YJ.jsx)(AJ.c, {
                      name: "user-plus"
                    }), " ", JJ("socialBar:sendRequest")]
                  })]
                })]
              }), (0, YJ.jsx)(QU.b, {
                surface: "social_menu",
                prefetchOnMount: !0
              })]
            }), jJ.length > 0 && (0, YJ.jsxs)("div", {
              className: "SocialMenuBox SocialMenuInvites",
              children: [(0, YJ.jsx)(sU.c, {
                label: JJ("socialBar:invites"),
                meta: jJ.length
              }), jJ.map((cJ => (0, YJ.jsxs)("div", {
                className: "SocialMenuInvite",
                children: [(0, YJ.jsx)("div", {
                  className: "SocialMenuInviteIcon",
                  children: (0, YJ.jsx)(xU.c, {
                    invite: cJ
                  })
                }), (0, YJ.jsx)("div", {
                  className: "SocialMenuInviteText",
                  children: (0, YJ.jsx)(xU.d, {
                    invite: cJ
                  })
                }), (0, YJ.jsx)(fJ.m, {
                  className: "SocialMenuInviteJoin SmallTextLight",
                  onClick: () => {
                    (0, rU.e)(cJ)
                  },
                  analyticsClick: {
                    id: "social.accept_invite",
                    value: `social_menu:${cJ.destination.kind}`
                  },
                  children: JJ("general:join")
                }), (0, YJ.jsx)(OJ.g, {
                  tooltipInner: (0, YJ.jsx)(YJ.Fragment, {
                    children: JJ("general:decline")
                  }),
                  delayShow: 0,
                  children: (0, YJ.jsx)(fJ.g, {
                    className: "SocialMenuInviteDecline",
                    padDefaultFocus: "invite" === (null === DJ || void 0 === DJ ? void 0 : DJ.kind) && DJ.inviteId === cJ.id,
                    onClick: () => {
                      fF.b.declineInvite(cJ.id)
                    },
                    analyticsClick: {
                      id: "social.decline_invite",
                      value: `social_menu:${cJ.destination.kind}`
                    },
                    children: (0, YJ.jsx)(AJ.c, {
                      name: "xmark"
                    })
                  })
                })]
              }, cJ.id)))]
            }), (0, YJ.jsxs)("div", {
              className: eJ()("SocialMenuBox SocialMenuRequests", {
                SocialMenuBoxEmpty: !ZJ && 0 === qJ.length
              }),
              children: [(0, YJ.jsx)(sU.c, {
                label: (0, YJ.jsxs)(YJ.Fragment, {
                  children: [(0, YJ.jsx)(AJ.c, {
                    name: mU.g
                  }), " ", JJ("socialBar:requests")]
                }),
                meta: (0, YJ.jsxs)(YJ.Fragment, {
                  children: [qJ.length, qJ.length === TJ.n && (0, YJ.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: JJ("socialBar:limitReached")
                  })]
                })
              }), ZJ && (0, YJ.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, YJ.jsx)(EJ.c, {})
              }), !ZJ && 0 === qJ.length && (0, YJ.jsx)("div", {
                className: "SocialMenuEmpty",
                children: JJ("socialBar:noFriendRequests")
              }), !ZJ && qJ.length > 0 && (0, YJ.jsx)("div", {
                className: "PlayerRows",
                children: (0, YJ.jsx)(fU.c, {
                  lazyLoadedClassName: "SocialMenuRequestsLazy",
                  observerUpdateDeps: [qJ],
                  children: qJ.map(((cJ, ZJ) => {
                    const FJ = vJ.get(cJ.name);
                    return (0, YJ.jsxs)(DU.e, {
                      playerSocialPreview: cJ,
                      zIndex: qJ.length - ZJ,
                      padDefaultFocus: (0, EU.g)(DJ, cJ.name, ZJ),
                      status: FJ && (0, YJ.jsx)(nU.e, {
                        gameNameWithVariation: FJ.gameNameWithVariation,
                        isPrivateLobby: FJ.isPrivateLobby
                      }),
                      children: [(0, YJ.jsx)(OJ.g, {
                        tooltipInner: (0, YJ.jsx)(YJ.Fragment, {
                          children: JJ("general:accept")
                        }),
                        delayShow: 0,
                        children: (0, YJ.jsx)(fJ.d, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            nJ((0, EU.e)(GJ, ZJ)), (0, vU.h)(cJ.name, !0, {
                              source: "social_menu",
                              announceFriend: !1
                            })
                          },
                          analyticsClick: {
                            id: "social.accept_friend_request",
                            value: "social_menu"
                          },
                          children: (0, YJ.jsx)(AJ.c, {
                            name: "check"
                          })
                        })
                      }), (0, YJ.jsx)(OJ.g, {
                        tooltipInner: (0, YJ.jsx)(YJ.Fragment, {
                          children: JJ("general:decline")
                        }),
                        delayShow: 0,
                        children: (0, YJ.jsx)(fJ.g, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            nJ((0, EU.e)(GJ, ZJ)), (0, vU.h)(cJ.name, !1, {
                              source: "social_menu"
                            })
                          },
                          analyticsClick: {
                            id: "social.decline_friend_request",
                            value: "social_menu"
                          },
                          children: (0, YJ.jsx)(AJ.c, {
                            name: "xmark"
                          })
                        })
                      })]
                    }, `${cJ.name}_${cJ.isError}`)
                  }))
                })
              })]
            }), (0, YJ.jsx)(nU.k, {})]
          }), (0, YJ.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, YJ.jsxs)("div", {
              className: "SocialMenuBox SocialMenuParty",
              children: [(0, YJ.jsx)(sU.c, {
                label: JJ("socialBar:party")
              }), (0, YJ.jsx)(hU.d, {})]
            }), (0, YJ.jsxs)("div", {
              className: "SocialMenuBox SocialMenuFriends",
              children: [(0, YJ.jsx)(sU.c, {
                label: (0, YJ.jsxs)(YJ.Fragment, {
                  children: [(0, YJ.jsx)(AJ.c, {
                    name: mU.e
                  }), " ", JJ("socialBar:friends")]
                }),
                meta: (0, YJ.jsxs)(YJ.Fragment, {
                  children: [UJ.length, UJ.length >= (0, TJ.b)(hJ.getPlayerRanks()) && (0, YJ.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: JJ("socialBar:limitReached")
                  })]
                })
              }), ZJ && (0, YJ.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, YJ.jsx)(EJ.c, {})
              }), !ZJ && 0 === UJ.length && (0, YJ.jsx)("div", {
                className: "SocialMenuEmpty",
                children: JJ("socialBar:noFriends")
              }), !ZJ && UJ.length > 0 && (0, YJ.jsx)("div", {
                className: "PlayerRows",
                children: (0, YJ.jsx)(fU.c, {
                  lazyLoadedClassName: "SocialMenuFriendsLazy",
                  observerUpdateDeps: [UJ],
                  children: UJ.map(((JJ, ZJ) => (0, YJ.jsx)(DU.e, {
                    playerSocialPreview: JJ,
                    isFriend: !0,
                    hideFriendBadge: !0,
                    onFriendRemoved: JJ => {
                      fF.b.removeFriendFromState(JJ)
                    },
                    zIndex: UJ.length - ZJ,
                    children: (0, YJ.jsx)(DU.d, {
                      friend: JJ,
                      followsLeader: cJ,
                      analyticsSurface: "social_menu"
                    })
                  }, `${JJ.name}_${JJ.isError}`)))
                })
              })]
            })]
          })]
        })
      })
    }
    var yU = ZJ(2215);
    const SU = JJ => {
        let {
          action: cJ,
          padAction: ZJ
        } = JJ;
        const {
          isTouchScreen: FJ
        } = (0, KJ.j)(["isTouchScreen"]), UJ = (0, UZ.q)();
        return FJ && !UJ ? null : (0, YJ.jsx)(Bc.e, {
          className: "EverythingMenuTabKey",
          noaAction: cJ,
          padHidesKey: !0,
          padMenuShortcut: ZJ
        })
      },
      IU = (0, FJ.memo)((function() {
        const {
          t: JJ
        } = (0, XJ.F)(), {
          gameState: cJ,
          openEverythingMenuName: ZJ,
          initSdkSelectorFinished: UJ
        } = (0, KJ.j)(["gameState", "openEverythingMenuName", "initSdkSelectorFinished"]), {
          userContext: AJ
        } = (0, sJ.d)(), qJ = (0, NJ.siteSupportsPurchases)(), jJ = (0, zJ.B)(), hJ = (JJ, cJ) => (0, YJ.jsx)(SU, {
          action: JJ,
          padAction: cJ
        }), [DJ, nJ] = (0, FJ.useState)(null), GJ = (0, FJ.useRef)(null), rJ = {
          ..."inGame" === cJ ? {} : (0, fJ.U)({
            focusOnClick: !1
          }),
          ...nZ.e
        }, vJ = null !== ZJ, mJ = ZJ !== lc.m.COSMETIC_SHOP;
        async function QJ() {
          await async function() {
            if (!DJ) return;
            await DJ(), nJ(null)
          }(), KJ.d.set({
            openEverythingMenuName: null
          })
        }
        const EJ = (0, FJ.useMemo)((() => "inGame" === cJ ? {
          text: JJ("settingsMenu:exitGame"),
          onClick: () => {
            (0, qU.c)()
          }
        } : (0, IJ.b)() ? {
          text: JJ("settingsMenu:exitGame"),
          onClick: () => {
            oJ.j.discordActivity().then((JJ => {
              JJ.exit("User exited the game")
            }))
          }
        } : null), [cJ, JJ]);
        const VJ = (0, YJ.jsx)("div", {
          className: "EverythingMenuCloseButtonClickZone",
          onClick: () => {
            QJ()
          },
          children: (0, YJ.jsx)(fJ.j, {
            className: "EverythingMenuCloseButton"
          })
        });
        return (0, YJ.jsx)(GZ.c, {
          showing: vJ,
          globallyUniqueKey: "EverythingMenu",
          alwaysMountChildren: !0,
          keepsMovement: ZJ === lc.m.SHOP,
          doGameplayStartStopOnShow: "inGame" === cJ,
          children: (0, YJ.jsx)(xZ.b, {
            className: "EverythingMenuContainer",
            show: vJ,
            children: (0, YJ.jsx)(fZ.c, {
              close: () => {
                QJ()
              },
              togglePointerLock: !1,
              children: (0, YJ.jsxs)("div", {
                className: "EverythingMenu",
                children: [!(0, uZ.k)(ZJ) && (0, YJ.jsxs)("div", {
                  className: "EverythingMenuTabList",
                  children: [(0, YJ.jsxs)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerStart",
                    children: [EJ && (0, YJ.jsx)(fJ.b, {
                      className: "EverythingMenuBackButton",
                      padDestructive: !0,
                      onClick: () => {
                        EJ.onClick()
                      },
                      children: EJ.text
                    }), vJ && qJ && (0, YJ.jsx)("div", {
                      ...rJ,
                      className: "EverythingMenuWallet",
                      title: JJ("homePage:getPremiumCurrency"),
                      onClick: () => {
                        (0, zJ.i)({
                          mode: "current",
                          source: "menuWallet"
                        })
                      },
                      children: (0, YJ.jsx)(AU.c, {})
                    })]
                  }), (0, YJ.jsxs)("div", {
                    className: "EverythingMenuTabListInner",
                    "data-pad-tabs": "1",
                    children: [(0, YJ.jsxs)("div", {
                      ...rJ,
                      "data-pad-tab": !0,
                      "data-pad-selected": ZJ === lc.m.SETTINGS ? "true" : void 0,
                      className: eJ()("EverythingMenuTab", {
                        EverythingMenuTabActive: ZJ === lc.m.SETTINGS
                      }),
                      onClick: () => {
                        KJ.d.set({
                          openEverythingMenuName: lc.m.SETTINGS
                        })
                      },
                      children: [JJ("general:settings"), hJ("OpenSettings", "pause")]
                    }), (0, YJ.jsxs)("div", {
                      ...rJ,
                      "data-pad-tab": !0,
                      "data-pad-selected": ZJ === lc.m.CUSTOMISATION ? "true" : void 0,
                      className: eJ()("EverythingMenuTab", {
                        EverythingMenuTabActive: ZJ === lc.m.CUSTOMISATION
                      }),
                      onClick: () => {
                        KJ.d.set({
                          openEverythingMenuName: lc.m.CUSTOMISATION
                        })
                      },
                      children: [JJ("general:player"), hJ("OpenCharacterCustomization")]
                    }), xJ.featureFlags.useSocialFeatures && (0, YJ.jsxs)("div", {
                      ...rJ,
                      "data-pad-tab": !0,
                      "data-pad-selected": ZJ === lc.m.SOCIAL ? "true" : void 0,
                      className: eJ()("EverythingMenuTab", {
                        EverythingMenuTabActive: ZJ === lc.m.SOCIAL
                      }),
                      ...(0, uJ.d)({
                        id: "social.open_menu",
                        value: "menu_tab"
                      }, ZJ === lc.m.SOCIAL),
                      onClick: () => {
                        KJ.d.set({
                          openEverythingMenuName: lc.m.SOCIAL
                        })
                      },
                      children: [JJ("socialBar:social"), (0, YJ.jsx)(yU.d, {})]
                    }), qJ && (0, YJ.jsxs)("div", {
                      ...rJ,
                      "data-pad-tab": !0,
                      "data-pad-selected": ZJ === lc.m.COSMETIC_SHOP ? "true" : void 0,
                      className: eJ()("EverythingMenuTab EverythingMenuTabCosmeticShop", {
                        EverythingMenuTabActive: ZJ === lc.m.COSMETIC_SHOP
                      }),
                      onClick: () => {
                        KJ.d.set({
                          openEverythingMenuName: lc.m.COSMETIC_SHOP
                        })
                      },
                      children: [(0, YJ.jsx)("span", {
                        className: "EverythingMenuTabCosmeticShopText",
                        children: JJ("store:title")
                      }), "dot" === jJ && (0, YJ.jsx)("span", {
                        className: "EverythingMenuTabStoreBadge EverythingMenuTabStoreDot"
                      })]
                    }), "inGame" === cJ && (0, YJ.jsxs)("div", {
                      ...rJ,
                      "data-pad-tab": !0,
                      "data-pad-selected": ZJ === lc.m.LOBBY_LEADERBOARD ? "true" : void 0,
                      className: eJ()("EverythingMenuTab", {
                        EverythingMenuTabActive: ZJ === lc.m.LOBBY_LEADERBOARD
                      }),
                      onClick: () => {
                        KJ.d.set({
                          openEverythingMenuName: lc.m.LOBBY_LEADERBOARD
                        })
                      },
                      children: [JJ("general:lobby"), hJ("OpenLobbyLeaderboard", "leaderboard")]
                    })]
                  }), (0, YJ.jsx)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerEnd",
                    children: VJ
                  })]
                }), (0, uZ.k)(ZJ) && VJ, (0, YJ.jsxs)("div", {
                  className: "EverythingMenuBody",
                  "data-pad-initial-area": !0,
                  style: {
                    "--everythingMenuBodyBackgroundOpacity": "inGame" === cJ ? "0.85" : "1"
                  },
                  children: [(0, YJ.jsx)(jZ, {
                    show: ZJ === lc.m.SETTINGS,
                    setBeforeResumeCallback: nJ
                  }), (0, YJ.jsx)(sZ, {
                    show: ZJ === lc.m.CUSTOMISATION
                  }), (0, YJ.jsx)(FJ.Suspense, {
                    fallback: null,
                    children: (0, YJ.jsx)(PZ, {
                      show: ZJ === lc.m.SHOP
                    })
                  }), (0, YJ.jsx)(LZ, {
                    show: ZJ === lc.m.LOBBY_LEADERBOARD
                  }), (0, YJ.jsx)(XU, {
                    show: ZJ === lc.m.COSMETIC_SHOP
                  }), (0, YJ.jsx)(VU, {
                    show: ZJ === lc.m.SOCIAL
                  })]
                }), !(0, xJ.isMobileApp)() && (0, rZ.f)(AJ.getPlayerRanks()) && (0, YJ.jsx)(xZ.b, {
                  ref: GJ,
                  className: "EverythingMenuBannerDiv",
                  show: mJ,
                  "data-pad-hint-bar-avoid": !0,
                  "data-pad-no-step-in": !0,
                  children: (0, YJ.jsx)(jU.b, {
                    info: {
                      adId: 2,
                      adType: "leaderboard",
                      adAlias: "banner_shop"
                    },
                    sizeInfo: {
                      parentRef: GJ
                    },
                    showing: vJ && mJ,
                    verticalAlign: "center",
                    horizontalAlign: "center",
                    noFillShowBloxdAdProbability: 1
                  })
                })]
              })
            })
          })
        })
      }))
  },
  8563: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => eJ
    });
    var FJ = ZJ(235),
      UJ = ZJ(8565);

    function eJ(JJ, cJ, ZJ) {
      const eJ = Object.entries(cJ).sort(((JJ, cJ) => cJ[1] - JJ[1])),
        XJ = (0, FJ.lb)(JJ);
      XJ.push(JJ ? "\n\n" : "\n");
      for (const [UJ, nJ] of eJ) {
        var AJ, qJ, jJ;
        const JJ = null !== (AJ = null === ZJ || void 0 === ZJ || null === (qJ = ZJ[UJ]) || void 0 === qJ ? void 0 : qJ.icon) && void 0 !== AJ ? AJ : `${UJ} Enchantment`;
        XJ.push({
          icon: JJ,
          style: {
            fontSize: "1.5rem"
          }
        }), XJ.push({
          str: `${UJ} ${null!==(jJ=(0,FJ.O)(nJ))&&void 0!==jJ?jJ:nJ}\n`
        })
      }
      XJ.push({
        str: "\n"
      });
      for (const [FJ, nJ] of eJ) {
        var YJ, hJ, DJ, sJ;
        const JJ = null !== (YJ = null === ZJ || void 0 === ZJ || null === (hJ = ZJ[FJ]) || void 0 === hJ ? void 0 : hJ.icon) && void 0 !== YJ ? YJ : `${FJ} Enchantment`,
          cJ = null !== (DJ = null === ZJ || void 0 === ZJ || null === (sJ = ZJ[FJ]) || void 0 === sJ ? void 0 : sJ.description) && void 0 !== DJ ? DJ : (0, UJ.j)(FJ);
        XJ.push({
          icon: JJ,
          style: {
            fontSize: "1.25rem",
            opacity: .75
          }
        }), XJ.push({
          str: cJ,
          style: {
            fontSize: "0.8em",
            fontWeight: "normal",
            opacity: .75
          }
        }), XJ.push({
          str: "\n"
        })
      }
      return XJ
    }
  },
  8571: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => jJ,
      f: () => rJ,
      j: () => fJ,
      l: () => qJ,
      m: () => xJ,
      q: () => YJ,
      t: () => DJ,
      x: () => GJ,
      z: () => hJ
    });
    var FJ = ZJ(227),
      UJ = ZJ(535),
      eJ = ZJ(235),
      XJ = ZJ(3715),
      AJ = ZJ(8563);

    function qJ(JJ, cJ) {
      var ZJ;
      let {
        player: FJ,
        chestOrCreative: UJ
      } = JJ;
      var eJ;
      return cJ < FJ.length ? null !== (eJ = FJ[cJ]) && void 0 !== eJ ? eJ : null : null !== (ZJ = UJ[cJ - FJ.length]) && void 0 !== ZJ ? ZJ : null
    }

    function jJ(JJ) {
      var cJ;
      return null !== (cJ = JJ.amount) && void 0 !== cJ ? cJ : 0
    }

    function YJ(JJ) {
      return 0 === JJ.button || void 0 === JJ.button
    }

    function hJ(JJ) {
      return !!JJ.shiftKey
    }

    function DJ(JJ) {
      return "touches" in JJ || "touch" === JJ.pointerType || "pen" === JJ.pointerType
    }
    const sJ = new Set,
      nJ = 50;

    function GJ(JJ, cJ) {
      var ZJ;
      const FJ = null === (ZJ = JJ[cJ]) || void 0 === ZJ ? void 0 : ZJ.displayName;
      return (0, UJ.P)(FJ) ? "string" !== typeof cJ ? "" : (!sJ.has(cJ) && sJ.size < nJ && (sJ.add(cJ), console.warn(`No item called "${cJ}", so its hover shows the name as given`)), cJ) : FJ
    }

    function fJ(JJ, cJ, ZJ) {
      var qJ, jJ, YJ, hJ, DJ, sJ, nJ, fJ, xJ, rJ, vJ, mJ, QJ, EJ;
      const VJ = JJ.attributes,
        KJ = null !== (qJ = null === (jJ = cJ[JJ.name]) || void 0 === jJ ? void 0 : jJ.rootName) && void 0 !== qJ ? qJ : JJ.name,
        yJ = null !== (YJ = null !== (hJ = VJ.customDisplayName) && void 0 !== hJ ? hJ : null === (DJ = cJ[JJ.name]) || void 0 === DJ ? void 0 : DJ.displayName) && void 0 !== YJ ? YJ : GJ(cJ, KJ);
      let SJ = yJ;
      const IJ = null === (sJ = VJ.customAttributes) || void 0 === sJ ? void 0 : sJ.enchantmentTier;
      IJ && (SJ = (0, eJ.lb)(yJ, {
        colour: eJ.gb[IJ]
      }));
      const MJ = null !== (nJ = null !== (fJ = null !== (xJ = function(JJ, cJ) {
        var ZJ;
        if (void 0 === JJ || null !== (ZJ = cJ.customAttributes) && void 0 !== ZJ && ZJ.author) return JJ;
        const UJ = (0, FJ.Sb)(JJ);
        return UJ.every((JJ => "string" === typeof JJ)) ? JJ : UJ.map((JJ => "string" === typeof JJ ? JJ : {
          icon: JJ.icon,
          style: {
            fontSize: "1.5em"
          }
        }))
      }(VJ.customDescription, VJ)) && void 0 !== xJ ? xJ : null === (rJ = cJ[JJ.name]) || void 0 === rJ ? void 0 : rJ.description) && void 0 !== fJ ? fJ : null === (vJ = cJ[KJ]) || void 0 === vJ ? void 0 : vJ.description) && void 0 !== nJ ? nJ : "";
      let bJ = MJ;
      if (null !== (mJ = VJ.customAttributes) && void 0 !== mJ && mJ.enchantments) bJ = (0, AJ.d)(MJ, VJ.customAttributes.enchantments, VJ.customAttributes.enchantmentData);
      else if (ZJ[KJ]) bJ = (0, eJ.lb)(MJ), bJ.push({
        str: "\n"
      }), bJ.push({
        str: "Enchantable",
        style: {
          fontSize: "0.8em",
          fontWeight: "normal",
          opacity: .4
        }
      });
      else if (null !== (QJ = VJ.customAttributes) && void 0 !== QJ && QJ.mobSettings) {
        var wJ, WJ;
        const JJ = VJ.customAttributes.mobSettings;
        var gJ, HJ;
        if (bJ = [], (0, UJ.P)(VJ.customAttributes.health) || (bJ.push({
            str: "\n"
          }), bJ.push({
            icon: "Health",
            style: {
              fontSize: "1.5em"
            }
          }), bJ.push({
            str: " "
          }), bJ.push({
            str: VJ.customAttributes.health.toString()
          }), (0, UJ.P)(JJ.maxHealth) || (bJ.push({
            str: "/"
          }), bJ.push({
            str: JJ.maxHealth.toString()
          }))), !(0, UJ.P)(JJ.attackDamage) && JJ.attackDamage > 0 && (bJ.push({
            str: "\n"
          }), bJ.push({
            icon: "Iron Sword",
            style: {
              fontSize: "1.5em"
            }
          }), bJ.push({
            str: " "
          }), bJ.push({
            str: JJ.attackDamage.toString()
          })), !(0, UJ.P)(JJ.secondaryAttackDamage) && JJ.secondaryAttackDamage > 0 && (bJ.push({
            str: "\n"
          }), bJ.push({
            icon: "Stone Crossbow",
            style: {
              fontSize: "1.5em"
            }
          }), bJ.push({
            str: " "
          }), bJ.push({
            str: JJ.secondaryAttackDamage.toString()
          })), (0, UJ.P)(JJ.baseRunningSpeed) || (bJ.push({
            str: "\n"
          }), bJ.push({
            icon: "Speed",
            style: {
              fontSize: "1.5em"
            }
          }), bJ.push({
            str: " "
          }), bJ.push({
            str: JJ.baseRunningSpeed.toFixed(2)
          })), "Saddled" === JJ.metaInfo) bJ.push({
          str: "\n"
        }), bJ.push({
          str: {
            translationKey: "general:has"
          }
        }), bJ.push({
          str: " "
        }), bJ.push({
          icon: null !== (gJ = null === (HJ = JJ.tameInfo) || void 0 === HJ ? void 0 : HJ.saddleItemName) && void 0 !== gJ ? gJ : "Saddle",
          style: {
            fontSize: "1.5em"
          }
        });
        if (bJ.push({
            str: "\n"
          }), bJ.push({
            str: "\n"
          }), JJ.petInfo && null !== (wJ = JJ.tameInfo) && void 0 !== wJ && wJ.supportsFriendship) {
          const cJ = XJ.b.getIconsFromFriendshipPoints(JJ.petInfo.friendshipPoints);
          for (const JJ of cJ) bJ.push({
            icon: JJ,
            style: {
              fontSize: "1.5em"
            }
          });
          bJ.push({
            str: "\n"
          });
          const ZJ = XJ.b.getMobHungerLevel(JJ.petInfo.lastFedAt);
          for (const JJ of XJ.b.hungerLevelIcons[ZJ]) bJ.push({
            icon: JJ,
            style: {
              fontSize: "1.5em"
            }
          });
          bJ.push({
            str: " "
          }), bJ.push({
            str: XJ.b.hungerLevelTranslations[ZJ],
            style: {
              fontWeight: "bolder"
            }
          })
        }
        if (JJ.tameInfo && null !== (WJ = JJ.tameInfo) && void 0 !== WJ && WJ.supportsFriendship) {
          var PJ, kJ;
          let cJ = null !== (PJ = JJ.tameInfo.likedFoods) && void 0 !== PJ ? PJ : [];
          bJ.push({
            str: "\n"
          }), bJ.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: XJ.b.feedTextColours[XJ.b.MobFoodType.Superliked]
            }
          }), bJ.push({
            str: " "
          }), null !== (kJ = JJ.petInfo) && void 0 !== kJ && kJ.superlikedFoodKnown ? (bJ.push({
            icon: JJ.petInfo.superlikedFood,
            style: {
              fontSize: "1.5em"
            }
          }), cJ = cJ.filter((cJ => cJ !== JJ.petInfo.superlikedFood))) : bJ.push({
            icon: "Question Mark",
            style: {
              fontSize: "1.5em"
            }
          }), bJ.push({
            str: "\n"
          }), bJ.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: XJ.b.feedTextColours[XJ.b.MobFoodType.Liked]
            }
          }), bJ.push({
            str: " "
          });
          for (const JJ of cJ) bJ.push({
            icon: JJ,
            style: {
              fontSize: "1.5em"
            }
          });
          bJ.push({
            str: "\n"
          }), bJ.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: XJ.b.feedTextColours[XJ.b.MobFoodType.Neutral]
            }
          }), bJ.push({
            str: " "
          });
          for (const ZJ of null !== (pJ = JJ.tameInfo.neutralFoods) && void 0 !== pJ ? pJ : []) {
            var pJ;
            bJ.push({
              icon: ZJ,
              style: {
                fontSize: "1.5em"
              }
            })
          }
          bJ.push({
            str: "\n"
          }), bJ.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: XJ.b.feedTextColours[XJ.b.MobFoodType.Disliked]
            }
          }), bJ.push({
            str: " "
          });
          for (const ZJ of null !== (dJ = JJ.tameInfo.dislikedFoods) && void 0 !== dJ ? dJ : []) {
            var dJ;
            bJ.push({
              icon: ZJ,
              style: {
                fontSize: "1.5em"
              }
            })
          }
        }
        bJ.length > 0 ? (bJ.shift(), bJ.unshift(...(0, eJ.lb)(MJ))) : bJ = (0, eJ.lb)(MJ)
      }
      return {
        name: SJ,
        desc: bJ,
        fontStyle: null !== (EJ = VJ.customAttributes) && void 0 !== EJ && EJ.author ? "italic" : "normal"
      }
    }

    function xJ(JJ, cJ, ZJ, FJ) {
      const UJ = qJ(JJ, ZJ),
        eJ = qJ(JJ, FJ);
      if (!UJ) return !1;
      const XJ = cJ[UJ.name].armourReduction,
        AJ = cJ[eJ.name].armourReduction;
      if (AJ === XJ) {
        var jJ, YJ, hJ, DJ;
        const JJ = null !== (jJ = null === (YJ = UJ.attributes.customAttributes) || void 0 === YJ ? void 0 : YJ.enchantmentTier) && void 0 !== jJ ? jJ : "Tier 0",
          cJ = null !== (hJ = null === (DJ = eJ.attributes.customAttributes) || void 0 === DJ ? void 0 : DJ.enchantmentTier) && void 0 !== hJ ? hJ : "Tier 0";
        return parseInt(JJ.replace("Tier ", "")) >= parseInt(cJ.replace("Tier ", ""))
      }
      return XJ > AJ
    }

    function rJ(JJ) {
      let cJ;
      if ("number" === typeof JJ) {
        const ZJ = document.querySelector(`[data-inven-idx="${JJ}"]`);
        if (!ZJ) return null;
        cJ = ZJ.getBoundingClientRect()
      } else cJ = JJ.getBoundingClientRect();
      return {
        x: cJ.left + cJ.width / 2,
        y: cJ.top + cJ.height / 2
      }
    }
  },
  8487: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => sJ,
      g: () => nJ,
      j: () => GJ
    });
    var FJ = ZJ(1329),
      UJ = ZJ(47),
      eJ = ZJ(1201),
      XJ = ZJ(3950),
      AJ = ZJ(2102),
      qJ = ZJ(1086),
      jJ = ZJ(80),
      YJ = ZJ(1743),
      hJ = ZJ(1232),
      DJ = ZJ(990);

    function sJ(JJ) {
      let {
        show: cJ,
        onClose: ZJ
      } = JJ;
      const {
        requestedGameNameWithVariation: FJ,
        lobbyName: UJ,
        shownLobbyName: eJ
      } = (0, YJ.f)("connectedGame"), qJ = (0, AJ.c)(FJ, UJ, !1);
      return jJ.featureFlags.canUseInviteLinks && (0, DJ.jsx)(XJ.c, {
        show: cJ,
        close: ZJ,
        padShowsHud: !0,
        togglePointerLock: !1,
        globallyUniqueKey: "InviteLinkBox",
        doGameplayStartStopOnShow: !0,
        children: (0, DJ.jsxs)("div", {
          className: "InviteLinkBox AnimFadeInScaleUp",
          children: [(0, DJ.jsx)("div", {
            className: "InviteLinkBoxHeader SmallTextBold",
            children: "Invite Friends"
          }), (0, DJ.jsxs)("div", {
            className: "InviteLinkBoxDescription SmallTextLight",
            children: [(0, DJ.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: '"Join Lobby Name" Button Info'
            }), "Game: ", null === qJ ? (0, DJ.jsx)(hJ.c, {}) : qJ, (0, DJ.jsx)("br", {}), "Lobby Name: ", eJ, (0, DJ.jsx)("br", {}), (0, DJ.jsx)("br", {}), (0, DJ.jsx)("br", {}), (0, DJ.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: "Link"
            })]
          }), (0, DJ.jsx)(nJ, {})]
        })
      })
    }

    function nJ() {
      var JJ;
      const {
        t: cJ
      } = (0, qJ.F)(), ZJ = null !== (JJ = GJ(jJ.featureFlags.canUseInviteLinks)) && void 0 !== JJ ? JJ : "Loading Link...", [eJ, XJ] = (0, UJ.useState)(0), [AJ, YJ] = (0, UJ.useReducer)((JJ => JJ + 1), 0);
      return (0, UJ.useEffect)((() => {
        const JJ = setTimeout((() => {
          YJ()
        }), 1100);
        return () => {
          clearTimeout(JJ)
        }
      }), [eJ]), jJ.featureFlags.canUseInviteLinks && (0, DJ.jsxs)("div", {
        className: "InviteLinkInnerWrapper",
        children: [(0, DJ.jsx)("div", {
          className: "InviteLinkInner",
          children: ZJ
        }), (0, DJ.jsx)(FJ.d, {
          className: "InviteLinkCopyButton",
          onClick: () => {
            navigator.clipboard.writeText(ZJ).catch((JJ => {
              console.error("Failed to copy invite link:", JJ)
            })), XJ(Date.now())
          },
          disabled: Date.now() - eJ < 1e3,
          children: Date.now() - eJ < 1e3 ? cJ("general:copied") : cJ("general:copy")
        })]
      })
    }

    function GJ(JJ) {
      const [cJ, ZJ] = (0, UJ.useState)(null);
      return (0, UJ.useEffect)((() => {
        if (!JJ) return;
        let cJ = !0;
        return (0, eJ.y)().then((JJ => {
          cJ && ZJ(JJ)
        })).catch((JJ => {
          console.error("Failed to get invite link:", JJ)
        })), () => {
          cJ = !1
        }
      }), [JJ]), cJ
    }
  },
  8550: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => jJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(926),
      eJ = ZJ.n(UJ),
      XJ = ZJ(1743),
      AJ = ZJ(990);

    function qJ(JJ) {
      const cJ = Math.floor(JJ / 3600),
        ZJ = Math.floor(JJ % 3600 / 60),
        FJ = Math.floor(JJ % 60),
        UJ = `${ZJ.toString().padStart(2,"0")}:${FJ.toString().padStart(2,"0")}`;
      return cJ > 0 ? `${cJ}:${UJ}` : UJ
    }
    const jJ = (0, FJ.memo)((function(JJ) {
      let {
        className: cJ
      } = JJ;
      const {
        recording: ZJ,
        seconds: FJ
      } = (0, XJ.f)("replayRecorder");
      return ZJ ? (0, AJ.jsxs)("div", {
        className: eJ()("RecordingIndicator", cJ),
        children: [(0, AJ.jsx)("span", {
          className: "RecordingIndicatorDot"
        }), (0, AJ.jsx)("span", {
          className: "RecordingIndicatorLabel",
          children: "REC"
        }), (0, AJ.jsx)("span", {
          className: "RecordingIndicatorTime",
          children: qJ(FJ)
        })]
      }) : null
    }))
  },
  8167: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => IJ,
      h: () => SJ
    });
    var FJ = ZJ(1086),
      UJ = ZJ(47),
      eJ = ZJ(1756),
      XJ = ZJ(1769),
      AJ = ZJ(926),
      qJ = ZJ.n(AJ),
      jJ = ZJ(1329),
      YJ = ZJ(13),
      hJ = ZJ(80),
      DJ = ZJ(93),
      sJ = ZJ(4401),
      nJ = ZJ(2175),
      GJ = ZJ(105),
      fJ = ZJ(1778),
      xJ = ZJ(1782),
      rJ = ZJ(8176),
      vJ = ZJ(227),
      mJ = ZJ(990);
    const QJ = {
      floating: "settingsMenu:joystickFloating",
      fixed_shown: "settingsMenu:joystickFixed",
      fixed_hidden: "settingsMenu:joystickHidden"
    };
    var EJ = ZJ(8178);
    const VJ = [function() {
      const {
        t: JJ
      } = (0, FJ.F)(), {
        joystickMode: cJ,
        touchSpeedCurve: ZJ,
        autorun: UJ,
        jumpLock: eJ
      } = (0, YJ.j)(["clientEscMenuOptions"]).clientEscMenuOptions;
      return (0, mJ.jsxs)(mJ.Fragment, {
        children: [(0, mJ.jsx)(sJ.f, {
          label: JJ("settingsMenu:joystick"),
          options: vJ.nb.map((cJ => ({
            value: cJ,
            label: JJ(QJ[cJ])
          }))),
          value: cJ,
          onChange: JJ => {
            YJ.d.setClientEscMenuOptions({
              joystickMode: JJ
            })
          },
          circleInfoText: JJ("settingsMenu:joystickInfo")
        }), (0, mJ.jsx)(sJ.e, {
          label: JJ("settingsMenu:preciseWalking"),
          checked: ZJ,
          onClick: JJ => {
            YJ.d.setClientEscMenuOptions({
              touchSpeedCurve: JJ
            })
          },
          circleInfoText: JJ("settingsMenu:preciseWalkingInfo")
        }), (0, mJ.jsx)(sJ.e, {
          label: JJ("settingsMenu:autoRun"),
          checked: UJ,
          onClick: JJ => {
            YJ.d.setClientEscMenuOptions({
              autorun: JJ
            })
          },
          circleInfoText: JJ("settingsMenu:autoRunInfo")
        }), (0, mJ.jsx)(sJ.e, {
          label: JJ("settingsMenu:jumpLock"),
          checked: eJ,
          onClick: JJ => {
            YJ.d.setClientEscMenuOptions({
              jumpLock: JJ
            })
          },
          circleInfoText: JJ("settingsMenu:jumpLockInfo")
        })]
      })
    }, function() {
      const {
        t: JJ
      } = (0, FJ.F)(), {
        clientEscMenuOptions: cJ
      } = (0, YJ.j)(["clientEscMenuOptions"]);
      return (0, mJ.jsx)(sJ.e, {
        label: JJ("touchSettings:actionButtons"),
        checked: cJ.touchActionButtons,
        onClick: JJ => {
          YJ.d.setClientEscMenuOptions({
            touchActionButtons: JJ
          })
        },
        circleInfoText: JJ("touchSettings:actionButtonsInfo")
      })
    }, function() {
      const {
        t: JJ
      } = (0, FJ.F)(), {
        clientEscMenuOptions: cJ
      } = (0, YJ.j)(["clientEscMenuOptions"]);
      return (0, EJ.e)() ? (0, mJ.jsx)(sJ.e, {
        label: JJ("settingsMenu:vibration"),
        checked: cJ.vibration,
        onClick: JJ => {
          YJ.d.setClientEscMenuOptions({
            vibration: JJ
          })
        },
        circleInfoText: JJ("settingsMenu:vibrationInfo")
      }) : null
    }];

    function KJ() {
      return (0, mJ.jsx)(mJ.Fragment, {
        children: VJ.map(((JJ, cJ) => (0, mJ.jsx)(JJ, {}, cJ)))
      })
    }
    var yJ = ZJ(3833);

    function SJ() {
      const {
        t: JJ
      } = (0, FJ.F)(), {
        isTouchScreen: cJ,
        clientEscMenuOptions: ZJ,
        gameState: XJ
      } = (0, YJ.j)(["isTouchScreen", "clientEscMenuOptions", "gameState"]), AJ = (0, nJ.f)("ezBridging"), qJ = (0, nJ.f)("ezTowering"), fJ = "inGame" !== XJ || !0 === AJ, xJ = (0, GJ.e)() && ("inGame" !== XJ || !0 === qJ), [, vJ] = (0, UJ.useReducer)((JJ => JJ + 1), 0), QJ = (0, rJ.d)(), [EJ, VJ] = (0, UJ.useState)(yJ.e);
      return (0, mJ.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [QJ && (0, mJ.jsxs)("div", {
          className: "SettingBox ControlsControllerNote",
          children: [(0, mJ.jsx)("div", {
            children: JJ("controller:settingsControlsNote")
          }), (0, mJ.jsx)(jJ.O, {
            onClick: () => {
              YJ.d.set({
                openSettingsCategory: "controller"
              })
            },
            children: JJ("controller:settingsOpenController")
          })]
        }), (0, hJ.isTouchscreen)() && !(0, hJ.isMobile)() ? (0, mJ.jsx)(mJ.Fragment, {
          children: (0, mJ.jsx)(sJ.e, {
            label: JJ("settingsMenu:useTouchControls"),
            checked: EJ,
            onClick: JJ => {
              (0, yJ.b)(JJ), VJ(JJ)
            }
          })
        }) : null, cJ && (0, mJ.jsx)(KJ, {}), fJ && (0, mJ.jsx)(sJ.e, {
          label: JJ("settingsMenu:ezBridging"),
          checked: ZJ.ezBridging,
          onClick: JJ => {
            YJ.d.setClientEscMenuOptions({
              ezBridging: JJ
            })
          },
          circleInfoText: JJ("settingsMenu:ezBridgingInfo")
        }), xJ && (0, mJ.jsx)(sJ.e, {
          label: JJ("settingsMenu:ezTowering"),
          checked: ZJ.ezTowering,
          onClick: JJ => {
            YJ.d.setClientEscMenuOptions({
              ezTowering: JJ
            })
          },
          circleInfoText: JJ("settingsMenu:ezToweringInfo")
        }), (0, mJ.jsx)(sJ.e, {
          label: JJ("settingsMenu:crouchToggle"),
          checked: ZJ.crouchIsToggle,
          onClick: JJ => {
            YJ.d.setClientEscMenuOptions({
              crouchIsToggle: JJ
            })
          },
          circleInfoText: JJ("settingsMenu:crouchToggleInfo")
        }), (0, mJ.jsx)(sJ.e, {
          label: JJ("settingsMenu:hideUiToggle"),
          checked: ZJ.hideUiIsToggle,
          onClick: JJ => {
            YJ.d.setClientEscMenuOptions({
              hideUiIsToggle: JJ
            })
          },
          circleInfoText: JJ("settingsMenu:hideUiToggleInfo")
        }), "mouseOnly" !== (0, DJ.e)() && (0, mJ.jsx)(sJ.h, {
          name: JJ("settingsMenu:touchscreenSensitivity"),
          min: 1,
          max: 900,
          step: 1,
          initValue: ZJ.touchscreenSensitivity,
          onChange: JJ => {
            YJ.d.setClientEscMenuOptions({
              touchscreenSensitivity: JJ
            })
          }
        }), !(0, hJ.isMobile)() && (0, mJ.jsx)(sJ.h, {
          name: JJ("settingsMenu:mouseSensitivity"),
          min: 1,
          max: 200,
          step: 1,
          initValue: ZJ.mouseSensitivity,
          onChange: JJ => {
            YJ.d.setClientEscMenuOptions({
              mouseSensitivity: JJ
            })
          }
        }), !(0, hJ.isMobile)() && (0, mJ.jsxs)("div", {
          className: "ControlsContainer",
          children: [(0, mJ.jsx)("div", {
            className: "SliderText",
            children: JJ("settingsMenu:keyBindings")
          }), eJ.f.map((cJ => (0, mJ.jsx)(IJ, {
            title: JJ(cJ.name.translationKey, cJ.name.params),
            defaultOpen: eJ.j.has(cJ.id),
            children: cJ.actions.map((JJ => (0, mJ.jsx)(MJ, {
              noaAction: JJ,
              forceUpdate: vJ,
              clashesWith: cJ.clashesWith,
              showPadGlyph: QJ
            }, JJ)))
          }, cJ.name.translationKey))), (0, mJ.jsx)(jJ.I, {
            className: "ResetBindingsButton",
            onClick: () => {
              (0, eJ.H)(), vJ()
            },
            children: JJ("controls:resetBindings")
          })]
        })]
      })
    }

    function IJ(JJ) {
      let {
        title: cJ,
        defaultOpen: ZJ,
        children: FJ
      } = JJ;
      const [eJ, XJ] = (0, UJ.useState)(ZJ);
      return (0, mJ.jsxs)("div", {
        className: qJ()("ControlsSection", {
          Collapsed: !eJ
        }),
        children: [(0, mJ.jsxs)("div", {
          className: "ControlsSectionHeader",
          "data-pad-focusable": !0,
          onClick: () => {
            XJ(!eJ)
          },
          children: [(0, mJ.jsx)("div", {
            className: "ControlsSectionTitle",
            children: cJ
          }), (0, mJ.jsx)("div", {
            className: "ControlsSectionChevron",
            children: "\u25be"
          })]
        }), eJ && (0, mJ.jsx)("div", {
          className: "ControlsSectionRows",
          children: FJ
        })]
      })
    }

    function MJ(JJ) {
      let {
        noaAction: cJ,
        forceUpdate: ZJ,
        clashesWith: AJ,
        showPadGlyph: YJ
      } = JJ;
      const {
        t: hJ
      } = (0, FJ.F)(), DJ = (0, xJ.b)(cJ), [sJ, nJ] = (0, UJ.useState)(!1), [GJ, rJ] = (0, UJ.useState)("controls:clickToEnterNewBinding"), [vJ, QJ] = (0, UJ.useState)(null), [EJ, VJ] = (0, UJ.useState)(null), KJ = (0, UJ.useRef)(null);
      (0, UJ.useEffect)((() => {
        sJ && KJ.current && KJ.current.focus()
      }), [sJ]);
      const yJ = eJ.z[cJ].filter((JJ => XJ.f[JJ]));
      let SJ = null;
      const IJ = [],
        MJ = AJ.flatMap((JJ => {
          var cJ, ZJ;
          return null !== (cJ = null === (ZJ = eJ.f.find((cJ => cJ.id === JJ))) || void 0 === ZJ ? void 0 : ZJ.actions) && void 0 !== cJ ? cJ : []
        }));
      for (const FJ of MJ) {
        if (FJ === cJ) continue;
        const JJ = eJ.z[FJ];
        for (const cJ of JJ) yJ.includes(cJ) && IJ.push(hJ(eJ.A[FJ].translationKey, eJ.A[FJ].params))
      }
      IJ.length > 0 && (SJ = hJ("controls:sharedBindingsWarning") + " ", SJ += IJ.join(", "));
      const bJ = () => {
          nJ(!1), QJ(null), rJ("controls:clickToEnterNewBinding"), VJ(null)
        },
        wJ = () => "BindingInput_" + cJ;
      return (0, mJ.jsxs)("div", {
        className: qJ()("ControlRow", {
          WarningBorder: null !== SJ
        }),
        children: [(0, mJ.jsxs)("div", {
          className: "ControlRowInner",
          children: [(0, mJ.jsxs)("div", {
            className: "ControlName",
            children: [hJ(eJ.A[cJ].translationKey, eJ.A[cJ].params), YJ && DJ && (0, mJ.jsx)(fJ.e, {
              glyph: DJ,
              className: "ControlPadGlyph"
            })]
          }), (0, mJ.jsxs)("div", {
            className: "ControlBindingsContainer",
            children: [(0, mJ.jsxs)("div", {
              className: "ControlBindingsList",
              children: [yJ.map((JJ => (0, mJ.jsxs)("div", {
                className: "ControlBinding",
                children: [(0, mJ.jsx)("div", {
                  children: (0, eJ.r)(JJ)
                }), (0, mJ.jsx)("div", {
                  className: "ControlBindingRemoveIcon",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    const FJ = (0, eJ.C)(cJ, JJ);
                    FJ.isError() ? VJ(FJ.asError().message) : VJ(null), ZJ()
                  },
                  children: "\xd7"
                })]
              }, JJ))), !sJ && (0, mJ.jsx)("div", {
                className: "ControlBinding ControlBindingAdd",
                onClick: () => {
                  nJ(!0), VJ(null)
                },
                children: (0, mJ.jsx)("div", {
                  className: "ControlBindingAddIcon",
                  children: "+"
                })
              })]
            }), sJ && (0, mJ.jsxs)("div", {
              className: "ControlBindingAddInput",
              children: [(0, mJ.jsxs)("div", {
                className: "InputContainer",
                children: [(0, mJ.jsx)("div", {
                  className: "InputOverlay",
                  children: vJ ? (0, eJ.r)(vJ) : (0, mJ.jsx)("div", {
                    className: "InputOverlayPlaceholder",
                    children: hJ(GJ)
                  })
                }), (0, mJ.jsx)("input", {
                  ref: KJ,
                  id: wJ(),
                  "data-pad-no-osk": !0,
                  defaultValue: "",
                  onKeyDown: JJ => {
                    if ("Escape" === JJ.code) return bJ(), JJ.preventDefault(), void JJ.stopPropagation();
                    const cJ = JJ.code;
                    XJ.c.includes(cJ) ? (VJ(null), QJ(cJ)) : (VJ("controls:keyIsReserved"), QJ(null)), JJ.preventDefault(), JJ.stopPropagation()
                  },
                  onMouseDown: JJ => {
                    const cJ = "Mouse" + (JJ.button + 1);
                    document.activeElement && document.activeElement.id === wJ() ? XJ.c.includes(cJ) ? (VJ(null), QJ(cJ)) : (VJ("controls:keyIsReserved"), QJ(null)) : rJ("controls:enterNewBinding"), JJ.stopPropagation()
                  },
                  onBlur: () => {
                    rJ("controls:clickToEnterNewBinding")
                  }
                })]
              }), (0, mJ.jsx)(jJ.d, {
                onPointerDown: JJ => {
                  JJ.preventDefault()
                },
                onClick: () => {
                  (0, eJ.e)(cJ, vJ), ZJ(), bJ()
                },
                className: "ControlBindingAddButton",
                disabled: null === vJ,
                children: hJ("general:add")
              }), (0, mJ.jsx)("div", {
                className: "ControlBindingAddCancel",
                onClick: () => {
                  bJ()
                },
                children: "\xd7"
              })]
            }), EJ && (0, mJ.jsx)("div", {
              className: "ControlBindingError",
              children: hJ(EJ)
            })]
          })]
        }), SJ && (0, mJ.jsx)("div", {
          className: "ControlRowWarning",
          children: SJ
        })]
      })
    }
  },
  4301: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => fJ
    });
    var FJ = ZJ(926),
      UJ = ZJ.n(FJ),
      eJ = ZJ(4054),
      XJ = ZJ(1086),
      AJ = ZJ(942),
      qJ = ZJ(1329),
      jJ = ZJ(1389),
      YJ = ZJ(1247),
      hJ = ZJ(2189),
      DJ = ZJ(990);
    const sJ = {
      youtube: {
        icon: "youtube",
        color: "#FF0033",
        name: "YouTube"
      },
      tiktok: {
        icon: "tiktok",
        color: "#0F0F0F",
        name: "TikTok"
      },
      instagram: {
        icon: "instagram",
        color: "#E1306C",
        name: "Instagram"
      },
      twitter: {
        icon: "x-twitter",
        color: "#0F0F0F",
        name: "X"
      },
      twitch: {
        icon: "twitch",
        color: "#9146FF",
        name: "Twitch"
      }
    };

    function nJ(JJ) {
      let {
        platform: cJ
      } = JJ;
      const ZJ = "youtube" === cJ;
      return (0, DJ.jsxs)("span", {
        className: UJ()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: ZJ
        }),
        children: [ZJ && (0, DJ.jsx)(hJ.d, {
          variant: "white"
        }), !ZJ && (0, DJ.jsx)(AJ.c, {
          name: sJ[cJ].icon,
          kit: "brands"
        })]
      })
    }

    function GJ(JJ) {
      let {
        platform: cJ,
        link: ZJ,
        editable: FJ,
        userContext: UJ,
        onLinksUpdated: hJ
      } = JJ;
      const {
        t: GJ
      } = (0, XJ.F)(), fJ = sJ[cJ];
      if (!ZJ && !FJ) return null;

      function xJ() {
        var JJ;
        if (!UJ || !hJ) return;
        YJ.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: fJ.name
            }
          },
          prefixText: eJ.s[cJ],
          placeholderText: "playBloxd",
          initialValue: null !== (JJ = null === ZJ || void 0 === ZJ ? void 0 : ZJ.handle) && void 0 !== JJ ? JJ : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: ZJ ? "general:remove" : void 0
        }).getResult().then((async JJ => {
          if ("notificationTornDown" !== JJ && null !== JJ) try {
            "submit" === JJ.type ? await jJ.c.setSocialLink(UJ, cJ, JJ.value) : await jJ.c.clearSocialLink(UJ, cJ), hJ()
          } catch (ZJ) {
            console.error("Failed to update social link", ZJ), YJ.NotificationProvider.showAlertPopup({
              title: ZJ.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (ZJ) {
        const JJ = `@${ZJ.handle}`;
        return (0, DJ.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: fJ.color
          },
          href: ZJ.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, DJ.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, DJ.jsx)(nJ, {
              platform: cJ
            }), (0, DJ.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, DJ.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: JJ
              })
            })]
          }), FJ && (0, DJ.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, qJ.U)({
              stopPropagation: !0
            }),
            onClick: JJ => {
              JJ.stopPropagation(), JJ.preventDefault(), xJ()
            },
            children: (0, DJ.jsx)(AJ.c, {
              name: "pen-to-square"
            })
          }), !FJ && (0, DJ.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, DJ.jsx)(AJ.c, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, DJ.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: fJ.color
        },
        ...(0, qJ.U)(),
        onClick: () => {
          xJ()
        },
        children: [(0, DJ.jsx)(nJ, {
          platform: cJ
        }), (0, DJ.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, DJ.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: fJ.name
          }), (0, DJ.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: GJ("homePage:profileSocialLinkAdd")
          })]
        }), (0, DJ.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, DJ.jsx)(AJ.c, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function fJ(JJ) {
      let {
        socialLinks: cJ,
        editable: ZJ = !1,
        userContext: FJ,
        onLinksUpdated: UJ
      } = JJ;
      if (!ZJ && 0 === cJ.length) return null;
      const XJ = new Map(cJ.map((JJ => [JJ.platform, JJ]))),
        AJ = ZJ ? eJ.o : cJ.map((JJ => JJ.platform));
      return (0, DJ.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, DJ.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: AJ.map((JJ => (0, DJ.jsx)(GJ, {
            platform: JJ,
            link: XJ.get(JJ),
            editable: ZJ,
            userContext: FJ,
            onLinksUpdated: UJ
          }, JJ)))
        })
      })
    }
  },
  8557: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => eJ
    });
    var FJ = ZJ(3957),
      UJ = ZJ(3966);

    function eJ(JJ) {
      let {
        children: cJ,
        showing: ZJ,
        globallyUniqueKey: eJ,
        alwaysMountChildren: XJ = !1,
        doGameplayStartStopOnShow: AJ = !0,
        keepsMovement: qJ = !1
      } = JJ;
      return (0, UJ.c)(!0, ZJ, eJ, qJ), (0, FJ.c)(AJ, ZJ), ZJ || XJ ? cJ : null
    }
  },
  8139: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => AJ
    });
    var FJ = ZJ(13),
      UJ = ZJ(2924),
      eJ = ZJ(1247),
      XJ = ZJ(1294);
    const AJ = async () => {
      if ((0, XJ.e)()) {
        if (!0 !== await eJ.NotificationProvider.showPromptPopup({
            title: "controller:menusLeaveGameTitle",
            confirmText: "controller:menusLeaveGameLeave",
            cancelText: "controller:menusLeaveGameStay",
            destructive: !0
          }).getResult() || "inGame" !== FJ.d.get("gameState")) return
      }(0, UJ.e)()
    }
  },
  8145: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => qJ,
      e: () => eJ,
      i: () => XJ,
      j: () => UJ,
      l: () => AJ
    });
    var FJ = ZJ(1734);
    const UJ = "controllerPadShopOpen",
      eJ = JJ => FJ.j.includes(JJ),
      XJ = JJ => Object.values(JJ).some((JJ => !1 !== JJ.canBuy && !JJ.isRewardedAd)),
      AJ = (JJ, cJ, ZJ) => {
        var FJ, UJ, XJ, AJ;
        const qJ = JJ.filter((JJ => !eJ(JJ))),
          jJ = null !== cJ && JJ.includes(cJ) ? cJ : null;
        return null !== jJ && !eJ(jJ) && ZJ(jJ) ? jJ : null !== (FJ = null !== (UJ = null !== (XJ = null !== (AJ = qJ.find(ZJ)) && void 0 !== AJ ? AJ : qJ[0]) && void 0 !== XJ ? XJ : jJ) && void 0 !== UJ ? UJ : JJ[0]) && void 0 !== FJ ? FJ : null
      },
      qJ = JJ => JJ.userInput || JJ.isRewardedAd || "boolean" === typeof JJ.isSelected ? null : JSON.stringify([JJ.image, JJ.cost, JJ.currency, JJ.amount, JJ.customTitle, JJ.buyButtonText, JJ.description, JJ.canBuy])
  },
  8176: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => jJ,
      d: () => YJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(1326),
      eJ = ZJ(1786),
      XJ = ZJ(1300),
      AJ = ZJ(1314),
      qJ = ZJ(990);
    const jJ = () => {
        const JJ = (0, XJ.s)();
        if ((0, FJ.useEffect)((() => {
            (0, XJ.k)()
          }), []), !JJ) return null;
        const {
          ControllerCategory: cJ
        } = JJ;
        return (0, qJ.jsx)(AJ.e, {
          children: (0, qJ.jsx)(cJ, {})
        })
      },
      YJ = () => {
        var JJ;
        const cJ = (0, XJ.s)(),
          [, ZJ] = (0, FJ.useReducer)((JJ => JJ + 1), 0);
        return (0, UJ.i)(eJ.b, ZJ), null !== (JJ = null === cJ || void 0 === cJ ? void 0 : cJ.hasActivePad()) && void 0 !== JJ && JJ
      }
  },
  8482: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => FJ
    });
    const FJ = new Set(["chunkBorders"])
  },
  8476: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      ALL_DEV_TOOLS: () => XJ,
      coreDevTools: () => jJ,
      devTools: () => qJ
    });
    var FJ = ZJ(547),
      UJ = ZJ(1192),
      eJ = ZJ(8482);
    const XJ = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function AJ() {
      const {
        noaDevTools: JJ
      } = await ZJ.e(218).then((() => ZJ(39848)));
      return JJ
    }
    const qJ = new class {
        constructor() {
          this.loadHost = AJ, this.tools = XJ
        }
        setHost(JJ) {
          this.tools = null === JJ ? XJ : JJ.tools, this.loadHost = null === JJ ? AJ : async () => JJ
        }
        supports(JJ) {
          return this.tools.has(JJ)
        }
        async downloadScene(JJ, cJ) {
          const ZJ = await this.loadHost();
          await ZJ.downloadScene(JJ, cJ)
        }
        async setAmbientLightIntensity(JJ) {
          const cJ = await this.loadHost();
          await cJ.setAmbientLightIntensity(JJ)
        }
      },
      jJ = {
        tools: eJ.c,
        downloadScene: async () => {
          throw new Error("This client can't download the scene")
        },
        setAmbientLightIntensity: async () => {
          throw new Error("This client can't set the ambient light")
        }
      };
    FJ.r && qJ.setHost(jJ), (0, UJ.s)((() => {
      qJ.setHost(jJ)
    }))
  },
  6004: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => UJ,
      f: () => eJ
    });
    var FJ = ZJ(29);
    const UJ = "shaderPack";
    async function eJ() {
      var JJ;
      let cJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (JJ = await FJ.g.getItem(UJ, cJ)) && void 0 !== JJ ? JJ : null
    }
  },
  8502: (JJ, cJ, ZJ) => {
    function FJ(JJ, cJ) {
      return JJ && !cJ
    }
    ZJ.d(cJ, {
      e: () => FJ
    })
  },
  8541: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => eJ
    });
    var FJ = ZJ(957);

    function UJ() {
      var JJ, cJ;
      return null !== (JJ = null === (cJ = screen.orientation) || void 0 === cJ ? void 0 : cJ.type) && void 0 !== JJ ? JJ : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const eJ = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && UJ() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = UJ(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, FJ.MG)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const JJ of this.resizers) JJ()
          }
        }), 1e3)
      }
      heldSizer(JJ) {
        let cJ = !1;
        return () => {
          if (cJ && this.isHeld()) return null;
          const ZJ = JJ();
          return cJ ||= null !== ZJ, ZJ
        }
      }
      onRelease(JJ) {
        return this.resizers.add(JJ), () => {
          this.resizers.delete(JJ)
        }
      }
    }
  },
  8546: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => AJ
    });
    var FJ = ZJ(157),
      UJ = ZJ(1671),
      eJ = ZJ(29);
    const XJ = 2;

    function AJ() {
      let JJ = qJ("chunkHorizAddDist", FJ.c.defaultChunkHorizAddDistance),
        cJ = qJ("chunkVertAddDist", FJ.c.defaultChunkVertAddDistance);
      return JJ = (0, UJ.f)(JJ, XJ, FJ.c.maxChunkHorizAddDistance), cJ = (0, UJ.f)(cJ, XJ, FJ.c.maxChunkVertAddDistance), [JJ, cJ]
    }

    function qJ(JJ, cJ) {
      const ZJ = eJ.j.getItem(JJ),
        FJ = "number" === typeof ZJ || "string" === typeof ZJ ? Number(ZJ) : Number.NaN;
      return Number.isFinite(FJ) ? FJ : cJ
    }
  },
  8178: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => AJ,
      g: () => qJ
    });
    var FJ = ZJ(13),
      UJ = ZJ(1213),
      eJ = ZJ(80);
    const XJ = {
      blockMined: {
        pattern: [18],
        priority: 1,
        minGapMs: 120
      },
      hitLanded: {
        pattern: [20],
        priority: 2,
        minGapMs: 80
      },
      damageTaken: {
        pattern: [45],
        priority: 3,
        minGapMs: 250
      },
      fishBite: {
        pattern: null,
        priority: 3,
        minGapMs: 0
      },
      death: {
        pattern: [60, 70, 120],
        priority: 4,
        minGapMs: 0
      },
      lockReady: {
        pattern: [8],
        priority: 2,
        minGapMs: 0
      },
      lockLocked: {
        pattern: [15, 50, 15],
        priority: 2,
        minGapMs: 0
      },
      autorunLedgeStop: {
        pattern: [40],
        priority: 3,
        minGapMs: 0
      }
    };

    function AJ() {
      return (0, eJ.isMobile)() && "function" === typeof navigator.vibrate
    }
    const qJ = new class {
      constructor(JJ) {
        this.deps = JJ, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(JJ, cJ) {
        var ZJ;
        if (!this.deps.enabled()) return;
        const FJ = XJ[JJ],
          UJ = null !== cJ && void 0 !== cJ ? cJ : FJ.pattern;
        if (null === UJ) return void console.warn("No vibration pattern for", JJ);
        const eJ = this.deps.now();
        eJ - this.lastAnyAt < 40 && FJ.priority < this.playingPriority || eJ - (null !== (ZJ = this.lastAt.get(JJ)) && void 0 !== ZJ ? ZJ : -1 / 0) < FJ.minGapMs || eJ < this.playingUntil && FJ.priority < this.playingPriority || (this.lastAt.set(JJ, eJ), this.lastAnyAt = eJ, this.playingUntil = eJ + UJ.reduce(((JJ, cJ) => JJ + cJ), 0), this.playingPriority = FJ.priority, this.deps.vibrate(UJ))
      }
    }({
      vibrate: JJ => {
        navigator.vibrate([...JJ])
      },
      now: () => performance.now(),
      enabled: () => AJ() && FJ.d.get("isTouchScreen") && FJ.d.get("clientEscMenuOptions").vibration && !(0, UJ.g)()
    })
  },
  8493: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => sJ,
      d: () => DJ
    });
    var FJ = ZJ(13),
      UJ = ZJ(1572),
      eJ = ZJ(29),
      XJ = ZJ(1247),
      AJ = ZJ(3134),
      qJ = ZJ(1357),
      jJ = ZJ(1294);
    const YJ = 2592e5,
      hJ = "notificationOptInLastPromptedAt";
    async function DJ() {
      var JJ;
      const cJ = await sJ();
      if (null === cJ) return;
      const ZJ = null !== (JJ = eJ.j.getItem(hJ)) && void 0 !== JJ ? JJ : 0;
      if (Date.now() - ZJ < YJ) return;
      if ((0, jJ.e)()) return;
      const FJ = await XJ.NotificationProvider.showPromptPopup({
        icon: "bell",
        title: "mobilePushNotifications:optInTitle",
        subtitle: UJ.d.supports("notifications") ? "mobilePushNotifications:optInSubtitle" : "mobilePushNotifications:optInSubtitleBrowser",
        confirmText: "mobilePushNotifications:optInConfirm",
        cancelText: "mobilePushNotifications:optInCancel",
        padStartsOnCancel: !0
      }).getResult();
      "notificationTornDown" !== FJ && (eJ.j.setItem(hJ, Date.now()), (0, qJ.f)({
        id: !0 === FJ ? "push.allow" : "push.deny",
        value: UJ.d.supports("notifications") ? "app" : "browser"
      }), !0 === FJ && cJ().catch((JJ => {
        console.error("Failed to ask for push notifications:", JJ)
      })))
    }
    async function sJ() {
      return await UJ.d.ready, UJ.d.supports("notifications") ? FJ.d.get("mobilePushNotificationsCanAsk") ? async () => {
        UJ.d.request("notifications.requestPermission", {}).then((JJ => {
          let {
            canAsk: cJ
          } = JJ;
          FJ.d.set({
            mobilePushNotificationsCanAsk: cJ
          })
        }), (JJ => {
          console.error("The app couldn't ask for push notifications:", JJ)
        }))
      }: null: await AJ.d.canAsk() ? () => AJ.d.requestPermission() : null
    }
  },
  8517: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => AJ,
      d: () => qJ
    });
    var FJ = ZJ(13);
    const UJ = 24,
      eJ = "farNametags",
      XJ = 1e5;

    function AJ() {
      var JJ;
      return null === (JJ = FJ.d.get("showDistantNametags")) || void 0 === JJ || JJ
    }

    function qJ() {
      var JJ;
      return null !== (JJ = function() {
        const JJ = new URLSearchParams(window.location.search).get(eJ),
          cJ = null === JJ || "" === JJ ? NaN : Number(JJ);
        return Number.isFinite(cJ) && cJ >= 0 ? Math.min(cJ, XJ) : null
      }()) && void 0 !== JJ ? JJ : AJ() ? 0 : UJ
    }
  },
  8580: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => UJ,
      e: () => XJ
    });
    const FJ = [{
      threshold: 10n ** 180n,
      suffix: "NoQig"
    }, {
      threshold: 10n ** 177n,
      suffix: "OcQig"
    }, {
      threshold: 10n ** 174n,
      suffix: "SpQig"
    }, {
      threshold: 10n ** 171n,
      suffix: "SQig"
    }, {
      threshold: 10n ** 168n,
      suffix: "QiQig"
    }, {
      threshold: 10n ** 165n,
      suffix: "QaQig"
    }, {
      threshold: 10n ** 162n,
      suffix: "TQig"
    }, {
      threshold: 10n ** 159n,
      suffix: "DQig"
    }, {
      threshold: 10n ** 156n,
      suffix: "UQig"
    }, {
      threshold: 10n ** 153n,
      suffix: "Qig"
    }, {
      threshold: 10n ** 150n,
      suffix: "NoQag"
    }, {
      threshold: 10n ** 147n,
      suffix: "OcQag"
    }, {
      threshold: 10n ** 144n,
      suffix: "SpQag"
    }, {
      threshold: 10n ** 141n,
      suffix: "SQag"
    }, {
      threshold: 10n ** 138n,
      suffix: "QiQag"
    }, {
      threshold: 10n ** 135n,
      suffix: "QaQag"
    }, {
      threshold: 10n ** 132n,
      suffix: "TQag"
    }, {
      threshold: 10n ** 129n,
      suffix: "DQag"
    }, {
      threshold: 10n ** 126n,
      suffix: "UQag"
    }, {
      threshold: 10n ** 123n,
      suffix: "Qag"
    }, {
      threshold: 10n ** 120n,
      suffix: "NoTg"
    }, {
      threshold: 10n ** 117n,
      suffix: "OcTg"
    }, {
      threshold: 10n ** 114n,
      suffix: "SpTg"
    }, {
      threshold: 10n ** 111n,
      suffix: "STg"
    }, {
      threshold: 10n ** 108n,
      suffix: "QiTg"
    }, {
      threshold: 10n ** 105n,
      suffix: "QaTg"
    }, {
      threshold: 10n ** 102n,
      suffix: "TTg"
    }, {
      threshold: 10n ** 99n,
      suffix: "DTg"
    }, {
      threshold: 10n ** 96n,
      suffix: "UTg"
    }, {
      threshold: 10n ** 93n,
      suffix: "Tg"
    }, {
      threshold: 10n ** 90n,
      suffix: "NoVg"
    }, {
      threshold: 10n ** 87n,
      suffix: "OcVg"
    }, {
      threshold: 10n ** 84n,
      suffix: "SpVg"
    }, {
      threshold: 10n ** 81n,
      suffix: "SVg"
    }, {
      threshold: 10n ** 78n,
      suffix: "QiVg"
    }, {
      threshold: 10n ** 75n,
      suffix: "QaVg"
    }, {
      threshold: 10n ** 72n,
      suffix: "TVg"
    }, {
      threshold: 10n ** 69n,
      suffix: "DVg"
    }, {
      threshold: 10n ** 66n,
      suffix: "UVg"
    }, {
      threshold: 10n ** 63n,
      suffix: "Vg"
    }, {
      threshold: 10n ** 60n,
      suffix: "NoD"
    }, {
      threshold: 10n ** 57n,
      suffix: "OcD"
    }, {
      threshold: 10n ** 54n,
      suffix: "SpD"
    }, {
      threshold: 10n ** 51n,
      suffix: "SD"
    }, {
      threshold: 10n ** 48n,
      suffix: "QiD"
    }, {
      threshold: 10n ** 45n,
      suffix: "QaD"
    }, {
      threshold: 10n ** 42n,
      suffix: "TD"
    }, {
      threshold: 10n ** 39n,
      suffix: "DD"
    }, {
      threshold: 10n ** 36n,
      suffix: "UD"
    }, {
      threshold: 10n ** 33n,
      suffix: "D"
    }, {
      threshold: 10n ** 30n,
      suffix: "No"
    }, {
      threshold: 10n ** 27n,
      suffix: "Oc"
    }, {
      threshold: 10n ** 24n,
      suffix: "Sep"
    }, {
      threshold: 10n ** 21n,
      suffix: "S"
    }, {
      threshold: 10n ** 18n,
      suffix: "Qi"
    }, {
      threshold: 10n ** 15n,
      suffix: "Qa"
    }, {
      threshold: 10n ** 12n,
      suffix: "T"
    }, {
      threshold: 10n ** 9n,
      suffix: "B"
    }, {
      threshold: 10n ** 6n,
      suffix: "M"
    }, {
      threshold: 1000n,
      suffix: "K"
    }];

    function UJ(JJ) {
      let cJ, ZJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof JJ) {
        if (!Number.isFinite(JJ)) return "0";
        if (Math.abs(JJ) < 100) {
          const cJ = JJ < 0 ? "-" : "",
            ZJ = Math.abs(JJ);
          return ZJ >= 10 ? `${cJ}${ZJ.toFixed(1).replace(/\.0$/,"")}` : `${cJ}${ZJ.toFixed(2).replace(/\.?0+$/,"")}`
        }
        cJ = BigInt(Math.floor(JJ))
      } else cJ = JJ;
      const UJ = cJ < 0n ? -cJ : cJ,
        eJ = cJ < 0n ? "-" : "",
        XJ = UJ.toString();
      if (XJ.length <= ZJ) return `${eJ}${XJ}`;
      const AJ = 3 * Math.floor((XJ.length - 1) / 3);
      if (AJ < 3) return `${eJ}${XJ}`;
      if (AJ > 3 * FJ.length) {
        const JJ = XJ[0],
          cJ = XJ.slice(1, 3).replace(/0+$/, "");
        return `${eJ}${cJ?`${JJ}.${cJ}`:JJ}e${XJ.length-1}`
      }
      const {
        threshold: qJ,
        suffix: jJ
      } = FJ[FJ.length - AJ / 3], YJ = UJ / qJ, hJ = Number(1000n * (UJ % qJ) / qJ), DJ = Number(YJ) + hJ / 1e3;
      let sJ;
      return sJ = DJ >= 100 ? Math.floor(DJ).toString() : DJ >= 10 ? DJ.toFixed(1).replace(/\.0$/, "") : DJ.toFixed(2).replace(/\.?0+$/, ""), `${eJ}${sJ}${jJ}`
    }
    const eJ = FJ.map((JJ => {
      let {
        threshold: cJ,
        suffix: ZJ
      } = JJ;
      return {
        threshold: Number(cJ),
        suffix: ZJ
      }
    })).filter((JJ => {
      let {
        threshold: cJ
      } = JJ;
      return Number.isFinite(cJ)
    }));

    function XJ(JJ) {
      const cJ = Math.abs(JJ),
        ZJ = JJ < 0 ? "-" : "";
      for (const {
          threshold: FJ,
          suffix: UJ
        }
        of eJ)
        if (cJ >= FJ) {
          const JJ = cJ / FJ;
          if (JJ >= 1e3) return `${ZJ}${cJ.toExponential(2).replace("e+","e")}`;
          let eJ;
          return eJ = JJ >= 100 ? Math.floor(JJ).toString() : JJ >= 10 ? JJ.toFixed(1).replace(/\.0$/, "") : JJ.toFixed(2).replace(/\.?0+$/, ""), `${ZJ}${eJ}${UJ}`
        } return `${ZJ}${cJ}`
    }
  },
  8565: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => YJ,
      e: () => DJ,
      h: () => hJ,
      j: () => XJ,
      n: () => jJ,
      p: () => qJ
    });
    var FJ = ZJ(235);
    const UJ = ["Wood Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table"],
      eJ = {
        Damage: {
          translationKey: "enchantments:damageDescription"
        },
        "Attack Speed": {
          translationKey: "enchantments:attackSpeedDescription"
        },
        "Critical Damage": {
          translationKey: "enchantments:criticalDamageDescription"
        },
        Protection: {
          translationKey: "enchantments:protectionDescription"
        },
        Health: {
          translationKey: "enchantments:healthDescription"
        },
        "Health Regen": {
          translationKey: "enchantments:healthRegenDescription"
        },
        "Stomp Damage": {
          translationKey: "enchantments:stompDamageDescription"
        },
        "Knockback Resist": {
          translationKey: "enchantments:knockbackResistDescription"
        },
        "Arrow Speed": {
          translationKey: "enchantments:arrowSpeedDescription"
        },
        "Arrow Damage": {
          translationKey: "enchantments:arrowDamageDescription"
        },
        "Quick Charge": {
          translationKey: "enchantments:quickChargeDescription"
        },
        "Break Speed": {
          translationKey: "enchantments:breakSpeedDescription"
        },
        Momentum: {
          translationKey: "enchantments:momentumDescription"
        },
        "Mining Yield": {
          translationKey: "enchantments:miningYieldDescription"
        },
        "Farming Yield": {
          translationKey: "enchantments:farmingYieldDescription"
        },
        "Mining Aura": {
          translationKey: "enchantments:miningAuraDescription"
        },
        "Digging Aura": {
          translationKey: "enchantments:diggingAuraDescription"
        },
        "Lumber Aura": {
          translationKey: "enchantments:lumberAuraDescription"
        },
        "Farming Aura": {
          translationKey: "enchantments:farmingAuraDescription"
        },
        "Horizontal Knockback": {
          translationKey: "enchantments:horizontalKnockbackDescription"
        },
        "Vertical Knockback": {
          translationKey: "enchantments:verticalKnockbackDescription"
        },
        "Firecracker Cooldown": {
          translationKey: "enchantments:firecrackerCooldownDescription"
        },
        "Firecracker Boost": {
          translationKey: "enchantments:firecrackerBoostDescription"
        },
        "Gliding Speed": {
          translationKey: "enchantments:glidingSpeedDescription"
        }
      };

    function XJ(JJ) {
      var cJ;
      return null !== (cJ = eJ[JJ]) && void 0 !== cJ ? cJ : {
        translationKey: ""
      }
    }
    const AJ = {
      "Wood Enchanting Table": [{
        min: 1,
        max: 2
      }, {
        min: 3,
        max: 4
      }, {
        min: 5,
        max: 6
      }],
      "Stone Enchanting Table": [{
        min: 2,
        max: 4
      }, {
        min: 5,
        max: 10
      }, {
        min: 11,
        max: 15
      }],
      "Iron Enchanting Table": [{
        min: 5,
        max: 10
      }, {
        min: 11,
        max: 20
      }, {
        min: 21,
        max: 30
      }],
      "Gold Enchanting Table": [{
        min: 20,
        max: 30
      }, {
        min: 31,
        max: 40
      }, {
        min: 41,
        max: 50
      }],
      "Diamond Enchanting Table": [{
        min: 40,
        max: 50
      }, {
        min: 50,
        max: 70
      }, {
        min: 71,
        max: 80
      }]
    };

    function qJ(JJ) {
      return UJ.includes(JJ)
    }

    function jJ(JJ) {
      var cJ;
      return !0 === (null === JJ || void 0 === JJ || null === (cJ = JJ.customAttributes) || void 0 === cJ ? void 0 : cJ.cannotEnchant)
    }

    function YJ(JJ, cJ) {
      const {
        max: ZJ
      } = AJ[JJ].at(-1);
      return cJ <= ZJ
    }

    function hJ(JJ) {
      const cJ = Math.sin(JJ / 80),
        ZJ = JJ => {
          if (JJ <= 0) return 0;
          if (JJ > 1) return 1;
          let cJ = 0;
          const ZJ = [1, 7, 21, 35, 35, 21, 7, 1];
          for (let FJ = 0; FJ < ZJ.length; FJ++) {
            cJ += (FJ % 2 === 0 ? 1 : -1) * ZJ[FJ] * Math.pow(JJ, 2 + FJ) / (2 + FJ)
          }
          return 72 * cJ
        },
        FJ = .3 - .78 * cJ,
        UJ = .5 - .78 * cJ,
        eJ = .6 - .7 * cJ,
        XJ = .8 - .6 * cJ;
      let AJ = ZJ(FJ),
        qJ = ZJ(UJ) - AJ,
        jJ = ZJ(eJ) - qJ - AJ,
        YJ = ZJ(XJ) - jJ - qJ - AJ;
      FJ < .041 && (qJ /= 1 - AJ, jJ /= 1 - AJ, YJ /= 1 - AJ, AJ = 0), UJ < .041 && (AJ /= 1 - qJ, jJ /= 1 - qJ, YJ /= 1 - qJ, qJ = 0), eJ < .041 && (AJ /= 1 - jJ, qJ /= 1 - jJ, YJ /= 1 - jJ, jJ = 0), XJ < .041 && (AJ /= 1 - YJ, qJ /= 1 - YJ, jJ /= 1 - YJ, YJ = 0);
      return {
        commonProb: AJ,
        uncommonProb: qJ,
        rareProb: jJ,
        epicProb: YJ,
        legendaryProb: 1 - (YJ + jJ + qJ + AJ)
      }
    }

    function DJ(JJ, cJ) {
      const {
        min: ZJ,
        max: UJ
      } = AJ[JJ][cJ], eJ = FJ.c.sampleUniformIntDistribution(ZJ, UJ, "includeMax");
      return {
        ...hJ(eJ),
        level: eJ
      }
    }
  },
  8052: (JJ, cJ, ZJ) => {
    function FJ(JJ, cJ) {
      return !JJ.hidden && (cJ || !JJ.isRewardedAd)
    }

    function UJ(JJ) {
      return "object" === typeof JJ ? JJ.option : JJ
    }

    function eJ(JJ, cJ) {
      var ZJ;
      if ("dropdown" === (null === (ZJ = JJ.userInput) || void 0 === ZJ ? void 0 : ZJ.type) && "object" === typeof JJ.userInput.dropdownOptions[0]) {
        for (const ZJ of JJ.userInput.dropdownOptions)
          if (UJ(ZJ) === cJ) return "object" === typeof ZJ ? ZJ.cost : JJ.cost;
        console.error("Didn't find matching option for dropdown item. Item:", JJ, "input:", cJ)
      }
      return JJ.cost
    }

    function XJ(JJ, cJ, ZJ) {
      var FJ;
      const UJ = null !== (FJ = ZJ.excludedPlayers) && void 0 !== FJ ? FJ : [cJ];
      return JJ.filter((JJ => !UJ.includes(JJ)))
    }
    ZJ.d(cJ, {
      e: () => eJ,
      g: () => UJ,
      k: () => XJ,
      n: () => FJ
    })
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);