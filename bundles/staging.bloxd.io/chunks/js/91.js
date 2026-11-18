export const id = 91;
export const ids = [91, 176];
export const modules = {
  8512: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      EverythingMenu: () => Uy
    });
    var VB = dB(62),
      yB = dB(933),
      pB = dB.n(yB),
      lB = dB(1078),
      JB = dB(946),
      YB = dB(1815),
      gB = dB(993),
      oB = dB(980);

    function kB(BB) {
      let {
        items: TB,
        onClick: dB,
        selectedItemId: VB,
        className: yB,
        padStartsOnTab: kB = !0
      } = BB;
      const {
        t: LB
      } = (0, lB.z)(), OB = (0, gB.i)(), DB = [];
      for (const pB of TB) {
        var uB;
        const BB = DB[DB.length - 1];
        var HB;
        if (BB && BB.title === (null !== (uB = pB.section) && void 0 !== uB ? uB : null)) BB.items.push(pB);
        else DB.push({
          title: null !== (HB = pB.section) && void 0 !== HB ? HB : null,
          items: [pB]
        })
      }
      return (0, oB.jsx)("div", {
        className: pB()("MenuSideBarBody", yB),
        "data-pad-tabs": "2",
        children: DB.map(((BB, TB) => {
          var yB;
          return (0, oB.jsxs)("div", {
            className: "MenuSideBarSection",
            children: [BB.title && (0, oB.jsx)("div", {
              className: "MenuSideBarSectionTitle",
              children: LB(BB.title)
            }), BB.items.map((BB => {
              var TB;
              const yB = !!BB.iconElement || !!BB.faIcon;
              return (0, oB.jsxs)("div", {
                "data-pad-tab": !0,
                "data-pad-selected": VB === BB.id ? "true" : void 0,
                "data-pad-default-focus": kB && VB === BB.id || void 0,
                className: pB()("MenuSideBarBodyTab", {
                  ActiveMenuSideBarBodyTab: VB === BB.id
                }),
                onClick: () => {
                  dB(BB.id)
                },
                children: [yB && (0, oB.jsx)("div", {
                  className: "MenuSideBarBodyTabIcon",
                  children: null !== (TB = BB.iconElement) && void 0 !== TB ? TB : (0, oB.jsx)(JB.e, {
                    name: BB.faIcon
                  })
                }), (!OB || !yB) && (0, oB.jsx)("div", {
                  children: LB(BB.title)
                }), BB.redDot && (0, oB.jsx)(YB.b, {
                  top: "-0.2rem",
                  right: "-1rem"
                })]
              }, BB.id)
            }))]
          }, null !== (yB = BB.title) && void 0 !== yB ? yB : TB)
        }))
      })
    }
    var LB = dB(2488),
      OB = dB(1011),
      DB = dB(2139),
      uB = dB(1002),
      HB = dB(1324),
      EB = dB(95),
      vB = dB(1679),
      mB = dB(2006),
      iB = dB(2011),
      NB = dB(1555),
      tB = dB(1225),
      fB = dB(4411),
      sB = dB(21),
      MB = dB(8520);

    function zB(BB) {
      let {
        setApplySettingsCallback: TB
      } = BB;
      const {
        clientEscMenuOptions: dB
      } = (0, sB.m)(["clientEscMenuOptions"]), [yB, pB] = (0, VB.useState)(!1), [lB, JB] = (0, VB.useState)(!1), [YB, gB] = (0, VB.useState)(6400), [kB, LB] = (0, VB.useState)(3600), [OB, DB] = (0, VB.useState)(!1), [uB, EB] = (0, VB.useState)(!1);

      function vB(BB) {
        const TB = "screenshot" === BB ? JB : pB;
        TB(!0);
        const dB = OB ? "normals" : uB ? "depth" : null;
        MB.devTools.downloadScene(BB, {
          width: YB,
          height: kB,
          colouring: dB
        }).catch((BB => {
          console.error("Couldn't download the scene", BB)
        })).finally((() => {
          TB(!1)
        }))
      }
      return (0, oB.jsxs)("div", {
        className: "DeveloperToolsCategory",
        children: [(0, oB.jsx)(fB.e, {
          label: "Disable Ambient Occlusion",
          checked: dB.disableAmbientOcclusion,
          onClick: BB => {
            sB.d.setClientEscMenuOptions({
              disableAmbientOcclusion: BB
            }), TB((() => fB.n))
          },
          circleInfoText: "Disables ambient occlusion which is the shadow effect that makes corners and crevices darker."
        }), MB.devTools.supports("ambientLight") && (0, oB.jsx)(fB.k, {
          name: "Ambient Lighting Intensity",
          min: 0,
          max: 1,
          step: .01,
          initValue: dB.ambientLightIntensity,
          onChange: BB => {
            MB.devTools.setAmbientLightIntensity(BB).then((() => {
              sB.d.setClientEscMenuOptions({
                ambientLightIntensity: BB
              })
            })).catch((BB => {
              console.error("Couldn't set the ambient light", BB)
            }))
          },
          circleInfoText: "Sets the intensity of the white ambient light in the scene. The default is 0.5."
        }), MB.devTools.supports("weaponRaycasts") && (0, oB.jsx)(fB.e, {
          label: "Show Weapon Raycasts",
          checked: dB.showWeaponRaycasts,
          onClick: BB => {
            sB.d.setClientEscMenuOptions({
              showWeaponRaycasts: BB
            })
          },
          circleInfoText: "Draws debug lines for the raw raycasts used by locally fired weapons."
        }), MB.devTools.supports("sceneDownload") && (0, oB.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, oB.jsxs)("div", {
            className: "SettingBox WarningBorder",
            children: [(0, oB.jsx)(fB.e, {
              label: "Apply normal-based coloring",
              checked: OB,
              onClick: BB => {
                DB(BB), BB && EB(!1)
              },
              circleInfoText: "Colors faces based on their normal direction (red=X, green=Y, blue=Z)."
            }), (0, oB.jsx)(fB.e, {
              label: "Apply depth-based coloring",
              checked: uB,
              onClick: BB => {
                EB(BB), BB && DB(!1)
              },
              circleInfoText: "Colors from white (near) to black (far) based on distance from camera. Only works for screenshot export."
            }), (0, oB.jsxs)("div", {
              className: "SettingBox DeveloperToolsCategoryScreenshotSettings",
              children: [(0, oB.jsx)("div", {
                className: "SettingLabel",
                children: "Screenshot size in pixels (width x height)"
              }), (0, oB.jsx)(NB.e, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (BB, TB) => {
                  const dB = parseInt(BB) || 6400;
                  gB(dB)
                },
                placeholderText: "width",
                maxLength: 10,
                defaultValue: YB.toString()
              }), (0, oB.jsx)("span", {
                children: "X"
              }), (0, oB.jsx)(NB.e, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (BB, TB) => {
                  const dB = parseInt(BB) || 3600;
                  LB(dB)
                },
                placeholderText: "height",
                maxLength: 10,
                defaultValue: kB.toString()
              })]
            }), (0, oB.jsxs)("div", {
              className: "DeveloperToolsCategoryExportButtons",
              children: [(0, oB.jsxs)(HB.d, {
                onClick: () => {
                  vB("screenshot")
                },
                disabled: lB,
                children: [lB && (0, oB.jsx)(tB.b, {}), "Download Screenshot"]
              }), (0, oB.jsxs)(HB.d, {
                onClick: () => {
                  vB("glb")
                },
                disabled: yB,
                children: [yB && (0, oB.jsx)(tB.b, {}), "Download GLB"]
              })]
            })]
          }), (0, oB.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: 'To download GLB of scene with textures you need to "Disable Block Texture Atlas" in graphic settings first (you will need to reload the page to apply the setting).'
          })]
        })]
      })
    }
    var wB = dB(138),
      UB = dB(1020),
      FB = dB(1089),
      KB = dB(2491),
      rB = dB(1407),
      IB = dB(1147),
      cB = dB(1113),
      SB = dB(2554),
      PB = dB(1791),
      QB = dB(1393),
      RB = dB(279),
      aB = dB(2015),
      ZB = dB(2028),
      XB = dB(1249),
      WB = dB(1096),
      hB = dB(4284),
      CB = dB(1353),
      GB = dB(3154),
      qB = dB(2315),
      xB = dB(1997);

    function jB(BB) {
      let {
        showing: TB
      } = BB;
      const {
        t: dB
      } = (0, lB.z)(), {
        data: VB,
        failed: yB
      } = (0, qB.e)(GB.c, TB);
      return 0 === (null === VB || void 0 === VB ? void 0 : VB.length) || null === VB && !yB ? null : (0, oB.jsxs)("div", {
        className: "SettingBox AccountSettingsPaymentHistory",
        children: [(0, oB.jsx)("div", {
          className: "AccountSettingsLabel",
          children: dB("paymentHistory:title")
        }), null === VB && yB && (0, oB.jsx)("div", {
          className: "AccountSettingsPaymentHistoryError",
          children: dB("paymentHistory:loadFailed")
        }), null !== VB && (0, oB.jsx)("ul", {
          className: "PaymentHistoryList",
          children: VB.map((BB => (0, oB.jsxs)("li", {
            className: "PaymentHistoryEntry",
            children: [(0, oB.jsx)(xB.d, {
              entry: BB
            }), (0, oB.jsxs)("div", {
              className: "PaymentHistoryEntryText",
              children: [(0, oB.jsx)("div", {
                children: (0, xB.j)(dB, BB)
              }), (0, oB.jsxs)("div", {
                className: "PaymentHistoryEntryDate",
                children: [new Date(BB.at).toLocaleDateString(), "number" === typeof BB.orderId && ` \xb7 ${dB("paymentHistory:order",{orderId:BB.orderId})}`]
              })]
            })]
          }, (0, GB.b)(BB))))
        })]
      })
    }
    var AB = dB(1126),
      bB = dB(1235),
      nB = dB(1201);

    function eB() {
      const {
        userContext: BB,
        isUserContextUpdating: TB
      } = (0, OB.b)(), {
        t: dB
      } = (0, lB.z)(), [yB, pB] = (0, VB.useState)(!1), [JB, YB] = (0, VB.useState)(null), gB = TB || yB;
      return (0, oB.jsxs)("div", {
        className: "AccountSettingsDeleteAccountButtonContainer",
        children: [(0, oB.jsxs)(HB.K, {
          onClick: async function() {
            if (!yB) {
              pB(!0);
              try {
                const TB = await async function() {
                  if (!0 !== await bB.NotificationProvider.showPromptPopup({
                      title: "auth:deleteAccountPopupTitleNamed",
                      textOpts: {
                        title: {
                          playerName: (0, IB.c)(BB.getPlayerName(), !EB.featureFlags.canSeeRealPlayerNames)
                        }
                      },
                      subtitle: (0, wB.d)() ? "auth:discordActivityDeleteAccountWarning" : "auth:deleteAccountWarning",
                      confirmText: "auth:deleteAccount",
                      destructive: !0,
                      confirmTooltip: "auth:deleteAccountPopupConfirmTooltip",
                      cancelText: "general:cancel",
                      cancelTooltip: "auth:deleteAccountPopupCancelTooltip"
                    }).getResult()) return AB.d.ok();
                  const TB = await (0, UB.postJsonWithMetricsCookiesAndJsonResponse)(`${FB.clientSideServerUrls.indexUrl}/index/metrics/revoke-cookies`, {
                    gameState: sB.d.get("gameState")
                  }, {
                    retries: 3
                  }, BB.getMetricsCookies());
                  if (TB.error) return AB.d.error(TB.error);
                  (0, wB.d)() && (await nB.k.discordActivity()).exit("User deleted their account");
                  return (0, UB.forgetStoredGuestAccount)(BB.whamm), (0, UB.forceGlobalSignOut)(!0), AB.d.ok()
                }(), dB = TB.isError() ? TB.asError().message : null;
                YB(dB)
              } catch (TB) {
                console.error("Failed to delete account:", TB), YB(dB("auth:genericDeleteAccountError"))
              }
              pB(!1)
            }
          },
          className: "AccountSettingsDeleteAccountButton",
          disabled: gB,
          children: [gB && (0, oB.jsx)("div", {
            className: "DeletingAccountLoader",
            children: (0, oB.jsx)(tB.b, {})
          }), dB("auth:deleteAccount")]
        }), JB && (0, oB.jsx)("div", {
          className: "DeleteAccountError",
          children: JB
        })]
      })
    }
    var BT = dB(3080),
      TT = dB(3099),
      dT = dB(3096);

    function VT(BB) {
      let {
        showing: TB
      } = BB;
      const {
        t: dB
      } = (0, lB.z)(), {
        data: VB,
        failed: yB
      } = (0, qB.e)(BT.b, TB), pB = null === VB ? null : (0, BT.c)(VB);
      return (0, oB.jsxs)("div", {
        className: "SettingBox BlockedAndIgnoredPlayers",
        children: [(0, oB.jsx)("div", {
          className: "AccountSettingsLabel",
          children: dB("settingsMenu:blockedAndIgnoredPlayers")
        }), null === pB && !yB && (0, oB.jsx)(tB.b, {}), null === pB && yB && (0, oB.jsxs)("div", {
          className: "BlockedAndIgnoredPlayersError",
          children: [dB("settingsMenu:blockedAndIgnoredPlayersLoadFailed"), (0, oB.jsx)(HB.d, {
            className: "SmallTextLight",
            onClick: () => {
              BT.b.refresh()
            },
            children: dB("general:tryAgain")
          })]
        }), 0 === (null === pB || void 0 === pB ? void 0 : pB.length) && (0, oB.jsx)("div", {
          className: "BlockedAndIgnoredPlayersEmpty",
          children: dB("settingsMenu:noBlockedOrIgnoredPlayers")
        }), null !== pB && pB.length > 0 && (0, oB.jsx)("ul", {
          className: "BlockedAndIgnoredPlayersList",
          children: pB.map((BB => {
            let {
              name: TB,
              exclusion: VB
            } = BB;
            const yB = dT.f[VB];
            return (0, oB.jsxs)("li", {
              className: "BlockedAndIgnoredPlayer",
              children: [(0, oB.jsx)("div", {
                className: "BlockedAndIgnoredPlayerName",
                children: TB
              }), (0, oB.jsx)(HB.g, {
                className: "SmallTextLight",
                onClick: () => {
                  (0, TT.f)(yB, TB)
                },
                children: dB(dT.g[yB].text)
              })]
            }, TB)
          }))
        })]
      })
    }
    const yT = (0, VB.memo)((function(BB) {
      var TB;
      let {
        showing: dB,
        inGame: yB
      } = BB;
      const {
        t: YB,
        selectedLanguage: gB
      } = (0, lB.z)(), {
        hideSocialLocationFrom: kB
      } = (0, sB.m)(["hideSocialLocationFrom"]), DB = (0, LB.b)(), {
        userContext: uB,
        isUserContextUpdating: vB
      } = (0, OB.b)(), [mB, iB] = (0, VB.useState)(null !== (TB = uB.getPlayerName()) && void 0 !== TB ? TB : ""), [MB, zB] = (0, VB.useState)(null), {
        purchasing: GB,
        outcome: qB,
        purchase: xB
      } = (0, KB.b)("/super-rank-welcome"), [AB, bB] = (0, VB.useState)(!1), [nB, BT] = (0, VB.useState)(!1), TT = (0, VB.useRef)(null), dT = (0, VB.useRef)(null), yT = (0, PB.e)({
        showProgressUpdateMessage: !0,
        enabled: !0
      }), pT = null === yT, lT = null !== yT && void 0 !== yT ? yT : [], [JT, YT] = (0, VB.useState)([]), [gT, oT] = (0, VB.useState)(!1), kT = uB.playerHasRank("youtuber"), LT = (0, VB.useCallback)((() => QB.c.getPlayerProfile(uB, {
        lowerCaseName: uB.getPlayerName().toLowerCase()
      }).then((BB => {
        YT(BB.socialLinks)
      })).catch((BB => {
        console.error("Failed to refresh social links", BB)
      }))), [uB]);

      function OT(BB) {
        BB !== mB && ((0, IB.k)(BB) ? (BB = (0, IB.n)(BB), zB("Only letters, numbers, and _")) : zB(null), TT.current && (TT.current.value = BB), iB(BB))
      }
      return (0, VB.useEffect)((() => (!0 === dB ? (clearInterval(dT.current), dT.current = setInterval(DB, 1e3)) : clearInterval(dT.current), () => {
        clearInterval(dT.current)
      })), [dB, DB]), (0, VB.useEffect)((() => {
        var BB;
        iB(null !== (BB = uB.getPlayerName()) && void 0 !== BB ? BB : "")
      }), [uB]), (0, VB.useEffect)((() => {
        if (!dB || !kT || vB) return;
        let BB = !1;
        return oT(!0), YT([]), QB.c.getPlayerProfile(uB, {
          lowerCaseName: uB.getPlayerName().toLowerCase()
        }).then((TB => {
          BB || YT(TB.socialLinks)
        })).catch((BB => {
          console.error("Failed to load social links", BB)
        })).finally((() => {
          BB || oT(!1)
        })), () => {
          BB = !0
        }
      }), [dB, kT, vB, uB]), (0, oB.jsxs)("div", {
        className: pB()("SettingsMenuRightInner AccountSettings", {
          AccountSettingsLocked: yB
        }),
        children: [yB && (0, oB.jsx)("div", {
          className: "AccountSettingsInGameWarning",
          children: YB("settingsMenu:accountSettingsInGameWarning")
        }), (0, oB.jsxs)("div", {
          className: "SettingBox SetAccountNameDiv SmallTextLight",
          children: [(0, oB.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsNameLabel",
            children: [YB("homePage:discordNamePopupTitle"), (0, oB.jsxs)(rB.LinkPreserveSearch, {
              className: "AccountSettingsViewProfile",
              to: (0, cB.h)({
                name: uB.getPlayerName()
              }),
              onClick: () => {
                sB.d.set({
                  openEverythingMenuName: null
                })
              },
              children: [(0, oB.jsx)(JB.e, {
                name: "arrow-up-right-from-square"
              }), " ", YB("profileCard:viewProfile")]
            })]
          }), (0, oB.jsxs)("div", {
            className: "EnterAccNameDivWrapper",
            "data-pad-initial-area": !0,
            children: [(0, oB.jsxs)("div", {
              className: "EnterAccNameInputRow",
              children: [EB.featureFlags.canChangeName && (0, oB.jsx)(NB.e, {
                className: "EnterName",
                placeholderText: YB("homePage:enterName"),
                maxLength: IB.e,
                defaultValue: mB,
                onValueChange: BB => {
                  OT(BB)
                },
                forcedText: AB || !EB.featureFlags.canChangeName ? mB : null,
                blurOnEnter: !0,
                domRef: TT
              }), (0, oB.jsx)(HB.d, {
                className: "ChooseRandomNameButton",
                onClick: () => {
                  OT((0, IB.d)())
                },
                children: (0, oB.jsx)(JB.e, {
                  name: "dice",
                  className: "ChooseRandomNameIcon"
                })
              }), !EB.featureFlags.canChangeName && (0, oB.jsx)("div", {
                className: "EnterName NoInput",
                children: (0, IB.c)(mB, !EB.featureFlags.canSeeRealPlayerNames)
              })]
            }), (0, oB.jsx)(HB.d, {
              className: "ChooseNameButton",
              disabled: AB || mB === uB.getPlayerName(),
              onClick: () => {
                mB.length < IB.i ? zB(YB("homePage:changeNameMinLengthError", {
                  length: IB.i
                })) : mB.length > IB.e ? zB(YB("homePage:changeNameMaxLengthError", {
                  length: IB.e
                })) : (bB(!0), zB(null), async function(BB, TB, dB, VB) {
                  const yB = await (0, UB.postJsonWithMetricsCookiesAndJsonResponse)(`${FB.clientSideServerUrls.indexUrl}/index/name/update`, {
                    name: BB
                  }, {
                    retries: 3
                  }, TB.getMetricsCookies()).catch((BB => (console.error("Bad response from the server when trying to update name:", BB), {
                    err: "An error occurred trying to change your name! Please report on discord what steps you took to get this error message."
                  })));
                  yB.err ? (console.error("Error when trying to get with new name from DB", yB.err), VB(yB.err)) : !0 === yB.nameExists ? VB("Name is already taken") : dB(BB)
                }(mB, uB, (BB => {
                  uB.setPlayerName(BB), bB(!1)
                }), (BB => {
                  zB(BB), bB(!1)
                })))
              },
              children: YB("general:choose")
            })]
          }), MB && (0, oB.jsx)("div", {
            className: "ChooseAccNameError",
            children: MB
          })]
        }), (0, oB.jsx)(fB.e, {
          label: (() => {
            if ((0, WB.m)(kB)) {
              const BB = (0, lB.m)(gB.code, "general:timeLeft"),
                TB = (0, RB.cb)(BB, Date.now(), kB + WB.l);
              return `${YB("settingsMenu:hideSocialLocation")} (${YB("general:timeLeft",{time:TB})})`
            }
            return YB("settingsMenu:hideSocialLocation")
          })(),
          onClick: () => {
            const BB = !(0, WB.m)(kB);
            (0, CB.f)({
              id: "social.hide_location",
              value: BB ? "on" : "off"
            }), BT(!0), QB.c.setHideSocialLocation(uB, BB).then((() => {
              sB.d.set({
                hideSocialLocationFrom: BB ? Date.now() : null
              })
            })).finally((() => {
              BT(!1)
            }))
          },
          checked: (0, WB.m)(kB),
          disabled: nB
        }), kT && (0, oB.jsxs)("div", {
          className: "SettingBox AccountSettingsSocialLinks",
          children: [(0, oB.jsx)("div", {
            className: "AccountSettingsLabel",
            children: YB("settingsMenu:socialLinks")
          }), gT && (0, oB.jsx)(tB.b, {}), !gT && (0, oB.jsx)(hB.e, {
            socialLinks: JT,
            editable: !0,
            userContext: uB,
            onLinksUpdated: LT
          })]
        }), (0, oB.jsxs)("div", {
          className: "SettingBox",
          children: [(0, oB.jsx)("div", {
            className: "AccountSettingsLabel",
            children: YB("auth:login")
          }), pT && (0, oB.jsx)(tB.b, {}), !pT && 0 === lT.length && (0, oB.jsx)("div", {
            className: "NoLoginOptions",
            children: YB("auth:noLoginOptions")
          }), !pT && lT.length > 0 && "crazygames" !== wB.v && (0, oB.jsx)("div", {
            className: "AccountSettingsLoginButtons",
            children: lT
          }), !pT && lT.length > 0 && "crazygames" === wB.v && (0, oB.jsxs)("div", {
            className: "AccountSettingsLoginButtons",
            children: [lT[0], lT.length > 1 && (0, oB.jsxs)(oB.Fragment, {
              children: [(0, oB.jsxs)("div", {
                className: "LegacyLoginOptionsHeader",
                children: [(0, oB.jsx)("span", {
                  className: "LegacyLoginOptionsTitle",
                  children: YB("auth:legacyLoginOptions")
                }), (0, oB.jsx)(XB.e, {
                  className: "LegacyLoginOptionsInfoIcon",
                  hoverInfo: YB("auth:legacyLoginOptionsInfo")
                })]
              }), (0, oB.jsx)("div", {
                className: "LegacyAccountSettingsLoginButtons",
                children: lT.slice(1)
              })]
            })]
          }), EB.featureFlags.useLogin && (null !== uB.loggedInInfo || uB.isLoggedIn()) && (0, oB.jsxs)(oB.Fragment, {
            children: [(0, oB.jsx)("div", {
              className: "AccountSettingsLoginDivider"
            }), (0, oB.jsxs)(HB.K, {
              onClick: () => {
                (0, UB.forceGlobalSignOut)()
              },
              className: "AccountSettingsSignedInButton",
              children: [(0, oB.jsx)(JB.e, {
                name: "right-from-bracket"
              }), YB("auth:signOut")]
            })]
          })]
        }), !uB.playerHasRank("super") && (0, ZB.siteSupportsPurchases)() && (0, oB.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, oB.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, oB.jsx)(JB.e, {
              name: "bolt"
            }), YB("homePage:superRank")]
          }), (0, oB.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [(0, oB.jsxs)(HB.k, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, aB.h)({
                  mode: "self",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, oB.jsx)(JB.e, {
                name: "bolt"
              }), YB("homePage:getSuperRank")]
            }), (0, oB.jsxs)(HB.k, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, aB.h)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, oB.jsx)(JB.e, {
                name: "bolt"
              }), YB("homePage:giftSuperRank")]
            })]
          })]
        }), uB.playerHasRank("super") && (0, oB.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, oB.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, oB.jsx)(JB.e, {
              name: "bolt"
            }), YB("homePage:superRank"), (0, oB.jsxs)("div", {
              className: "AccountSettingsSuperRankTimeLeft",
              children: ["(", YB("general:timeLeft", {
                time: (0, RB.lc)((0, lB.m)(gB.code, "general:timeLeft"), uB.superRankInfo)
              }), ")"]
            })]
          }), (0, ZB.siteSupportsPurchases)() && (0, oB.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [(0, oB.jsxs)(HB.k, {
              className: "AccountSettingsSuperRankProlong",
              loading: GB,
              onClick: () => {
                xB(SB.p.id, null)
              },
              children: [(0, oB.jsx)(JB.e, {
                name: "bolt"
              }), YB("settingsMenu:getSuperRankAdditionalDaysPremiumCurrency", {
                days: SB.p.product.days,
                price: SB.p.price
              })]
            }), (0, oB.jsxs)(HB.k, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, aB.h)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, oB.jsx)(JB.e, {
                name: "bolt"
              }), YB("homePage:giftSuperRank")]
            })]
          }), qB && (0, oB.jsx)("div", {
            className: "AccountSettingsSuperRankProlongError SmallTextBold",
            children: YB(qB.translationKey)
          })]
        }), (0, oB.jsx)(jB, {
          showing: dB
        }), EB.featureFlags.useSocialFeatures && (0, oB.jsx)(VT, {
          showing: dB
        }), (0, oB.jsxs)("div", {
          className: "SettingBoxGroup AccountSettingsDeleteAccountGroup",
          children: [(0, oB.jsxs)("div", {
            className: "SettingBox AccountSettingsDeleteAccount SettingBoxWarning",
            children: [(0, oB.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: YB("auth:deleteAccountButtonTitle")
            }), (0, wB.d)() && (0, oB.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: YB("auth:discordActivityKickWarning")
            }), (0, oB.jsx)(eB, {})]
          }), (0, oB.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: YB("auth:deleteAccountWarning")
          })]
        })]
      })
    }));
    var pT = dB(8529),
      lT = dB(2602),
      JT = dB(1133),
      YT = dB(1304);
    const gT = (0, VB.memo)((function(BB) {
        let {
          inGame: TB
        } = BB;
        const {
          t: dB,
          selectedLanguage: VB
        } = (0, lB.z)(), {
          clientEscMenuOptions: yB,
          showDebugOverlay: pB
        } = (0, sB.m)(["clientEscMenuOptions", "showDebugOverlay"]), JB = (0, DB.j)("hideCoordinates");
        let YB = "settingsMenu:showCoordinates",
          gB = "settingsMenu:showChunkCoordinates";

        function kB(BB) {
          const TB = new Intl.DisplayNames([BB], {
            type: "language"
          }).of(BB);
          return TB.charAt(0).toUpperCase() + TB.slice(1)
        }
        return JB && (YB = "settingsMenu:showCoordinatesHidden", gB = "settingsMenu:showChunkCoordinatesHidden"), (0, oB.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [TB && EB.featureFlags.canUseInviteLinks && (0, oB.jsxs)("div", {
            className: "SettingBox",
            children: [(0, oB.jsx)("div", {
              className: "SettingsMenuInviteHeader",
              children: dB("settingsMenu:inviteLink")
            }), (0, oB.jsx)(pT.f, {})]
          }), (0, oB.jsxs)("div", {
            className: "SettingBox",
            children: [(0, oB.jsx)("div", {
              className: "SliderText",
              style: {
                marginBottom: "10px"
              },
              children: dB("settingsMenu:language")
            }), (0, oB.jsx)(lT.e, {
              options: Object.entries(lB.f).map((BB => {
                let [TB, dB] = BB;
                return {
                  label: (0, oB.jsxs)("div", {
                    className: "SettingsMenuLanguageOption",
                    children: [(0, oB.jsx)("img", {
                      src: dB.flagImg,
                      alt: "flag"
                    }), (0, oB.jsxs)("span", {
                      children: [kB(TB), " ", (0, oB.jsxs)("span", {
                        className: "SettingsMenuLanguageOptionCode",
                        children: ["(", TB, ")"]
                      })]
                    })]
                  }),
                  value: TB
                }
              })),
              value: VB.code,
              onChange: BB => {
                JT.f.get().setCurrentLanguage(BB.value)
              }
            })]
          }), !(0, EB.isMobileApp)() && (0, YT.e)() && EB.featureFlags.useForceRotateForceFullscreenOverlay && (0, oB.jsx)(fB.e, {
            label: dB("settingsMenu:disableFullscreenMode"),
            checked: yB.disableFullscreen,
            onClick: BB => {
              sB.d.setClientEscMenuOptions({
                disableFullscreen: BB
              })
            }
          }), (0, oB.jsx)(fB.e, {
            label: dB(YB),
            checked: yB.showCoordinates,
            onClick: BB => {
              sB.d.setClientEscMenuOptions({
                showCoordinates: BB
              })
            },
            disabled: JB
          }), (0, oB.jsx)(fB.e, {
            label: dB(gB),
            checked: yB.showChunkCoordinates,
            onClick: BB => {
              sB.d.setClientEscMenuOptions({
                showChunkCoordinates: BB
              })
            },
            disabled: JB
          }), (0, oB.jsx)(fB.e, {
            label: dB("settingsMenu:showFps"),
            checked: yB.showFPS,
            onClick: BB => {
              sB.d.setClientEscMenuOptions({
                showFPS: BB
              })
            }
          }), (0, oB.jsx)(fB.e, {
            label: dB("settingsMenu:disableBunnyHopping"),
            checked: yB.disableBunnyHopping,
            onClick: BB => {
              sB.d.setClientEscMenuOptions({
                disableBunnyHopping: BB
              })
            }
          }), (0, nB.w)() && (0, oB.jsx)(fB.e, {
            label: dB("settingsMenu:showChat"),
            checked: yB.showChat,
            onClick: BB => {
              sB.d.setClientEscMenuOptions({
                showChat: BB
              })
            }
          }), (0, oB.jsx)(fB.e, {
            label: dB("settingsMenu:showDebugOverlay"),
            checked: pB,
            onClick: BB => {
              sB.d.set({
                showDebugOverlay: BB
              })
            }
          }), EB.featureFlags.useSocialFeatures && (0, oB.jsx)(fB.e, {
            label: dB("settingsMenu:showFriendOnlineToasts"),
            checked: yB.showFriendOnlineToasts,
            onClick: BB => {
              sB.d.setClientEscMenuOptions({
                showFriendOnlineToasts: BB
              })
            }
          }), (0, oB.jsx)(fB.e, {
            label: dB("settingsMenu:showNewItemIndicator"),
            checked: yB.showNewItemIndicator,
            onClick: BB => {
              sB.d.setClientEscMenuOptions({
                showNewItemIndicator: BB
              })
            }
          })]
        })
      })),
      oT = (0, VB.memo)((function() {
        const {
          t: BB
        } = (0, lB.z)(), {
          soundVolume: TB,
          musicVolume: dB
        } = (0, sB.m)(["soundVolume", "musicVolume"]);
        return (0, oB.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, oB.jsx)(fB.k, {
            name: BB("settingsMenu:musicVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: dB,
            onChange: BB => {
              sB.d.set({
                musicVolume: Math.round(100 * BB) / 100
              })
            },
            format: BB => BB.toFixed(2)
          }), (0, oB.jsx)(fB.k, {
            name: BB("settingsMenu:soundEffectsVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: TB,
            onChange: BB => {
              sB.d.set({
                soundVolume: Math.round(100 * BB) / 100
              })
            },
            format: BB => BB.toFixed(2)
          })]
        })
      }));
    var kT = dB(602),
      LT = dB(1317),
      OT = dB(3167),
      DT = dB(8531),
      uT = dB(2983);
    const HT = {
      app: "notificationSettings:pushTargetsApp",
      browser: "notificationSettings:pushTargetsBrowser",
      msnPlay: "notificationSettings:pushTargetsMsnPlay"
    };

    function ET() {
      const {
        t: BB
      } = (0, lB.z)(), TB = (0, uT.b)(), {
        mobilePushNotificationsCanAsk: dB
      } = (0, sB.m)(["mobilePushNotificationsCanAsk"]), [yB, pB] = (0, VB.useState)(null), [JB, YB] = (0, VB.useState)(!1), [gB, kB] = (0, VB.useState)(null), [LB, OB] = (0, VB.useState)(!1), DB = (0, VB.useCallback)((() => {
        (0, OT.b)().then((BB => {
          TB.current && (pB(BB), YB(!1))
        })).catch((BB => {
          console.error("Failed to load push notification targets:", BB), TB.current && YB(!0)
        }))
      }), [TB]), uB = (0, VB.useCallback)((() => {
        (0, DT.b)().then((BB => {
          TB.current && kB((() => BB))
        }))
      }), [TB]);
      (0, VB.useEffect)((() => {
        DB()
      }), [DB]), (0, VB.useEffect)((() => {
        uB()
      }), [uB, dB]), (0, LT.e)(OT.e, DB);
      const EB = null === yB ? [] : Object.keys(HT).filter((BB => yB[BB] > 0));
      return (0, oB.jsxs)("div", {
        className: "SettingBox PushNotificationSettings",
        children: [(0, oB.jsx)("div", {
          className: "SliderText",
          children: BB("notificationSettings:pushNotifications")
        }), null === yB && JB && (0, oB.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: BB("notificationSettings:pushTargetsLoadFailed")
        }), null !== yB && 0 === EB.length && (0, oB.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: BB("notificationSettings:pushTargetsNone")
        }), EB.length > 0 && (0, oB.jsx)("ul", {
          className: "PushNotificationSettingsTargets",
          children: EB.map((TB => {
            var dB;
            return (0, oB.jsx)("li", {
              children: BB(HT[TB], {
                count: null !== (dB = null === yB || void 0 === yB ? void 0 : yB[TB]) && void 0 !== dB ? dB : 0
              })
            }, TB)
          }))
        }), null !== gB && (0, oB.jsx)(HB.d, {
          className: "PushNotificationSettingsButton",
          loading: LB,
          onClick: () => {
            OB(!0), gB().catch((BB => {
              console.error("Failed to turn on push notifications:", BB)
            })).finally((() => {
              TB.current && (OB(!1), uB())
            }))
          },
          children: BB("notificationSettings:pushTurnOn")
        })]
      })
    }
    const vT = {
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
      mT = (0, VB.memo)((function() {
        const {
          t: BB
        } = (0, lB.z)(), {
          clientEscMenuOptions: TB
        } = (0, sB.m)(["clientEscMenuOptions"]);
        return (0, oB.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, oB.jsx)(fB.g, {
            label: BB("notificationSettings:friendRequests"),
            options: kT.d.map((TB => ({
              value: TB,
              label: BB(vT[TB].label)
            }))),
            value: TB.friendRequestNotifications,
            onChange: BB => {
              sB.d.setClientEscMenuOptions({
                friendRequestNotifications: BB
              })
            },
            circleInfoText: (0, oB.jsx)("div", {
              className: "NotificationSettingLevelsInfo",
              children: kT.d.map((TB => (0, oB.jsxs)("div", {
                children: [(0, oB.jsx)("b", {
                  children: BB(vT[TB].label)
                }), ": ", BB(vT[TB].info)]
              }, TB)))
            })
          }), (0, oB.jsx)(ET, {})]
        })
      }));
    var iT = dB(3924),
      NT = dB(184),
      tT = dB(256),
      fT = dB(5994),
      sT = dB(2939),
      MT = dB(8540),
      zT = dB(572),
      wT = dB(24);
    var UT = dB(586),
      FT = dB(33),
      KT = dB(3825);
    const rT = new Map([
      ["chunkHorizAddDist", "horizontal"],
      ["chunkVertAddDist", "vertical"]
    ]);

    function IT(BB) {
      return rT.has(BB) ? vB.gameBridge.lookup("Tm", null) : null
    }

    function cT(BB) {
      if (!(0, zT.M)(sB.d.get("clientEscMenuOptions")[BB])) return sB.d.get("clientEscMenuOptions")[BB];
      const TB = IT(BB);
      return null !== TB ? TB[rT.get(BB)] : FT.j.getItem(BB)
    }

    function ST(BB, TB) {
      if ("useTouchControls" === BB) return void(0, KT.e)(TB);
      BB in sB.d.get("clientEscMenuOptions") && sB.d.setClientEscMenuOptions({
        [BB]: TB
      });
      const dB = IT(BB);
      null !== dB && vB.gameBridge.send("setChunkAddDistance", {
        ...dB,
        [rT.get(BB)]: TB
      }), FT.j.setItem(BB, TB)
    }
    var PT = dB(8545),
      QT = dB(8547),
      RT = dB(8552),
      aT = dB(3921);

    function ZT(BB) {
      var TB, yB, JB, YB;
      let {
        minChunkAddDist: gB,
        getValue: kB,
        onChange: LB,
        setApplySettingsCallback: OB
      } = BB;
      const {
        t: uB
      } = (0, lB.z)(), {
        clientEscMenuOptions: HB
      } = (0, sB.m)(["clientEscMenuOptions", "showDistantNametags"]), vB = (0, VB.useRef)(kB("showFog")), mB = (0, VB.useRef)(HB.antiAliasing), iB = (0, VB.useRef)(HB.useWebGpu), [NB, tB] = (0, VB.useState)(null), [zB, wB] = (0, VB.useState)((() => (0, sT.f)(EB.featureFlags.settings.canUseShaderPacks))), [UB] = (0, VB.useState)((() => sB.d.isWebGpuDefaultOff())), [FB] = (0, VB.useState)(tT.g);
      (0, VB.useEffect)((() => {
        let BB = !1;
        return (0, EB.hasUsableWebGpuAdapter)().then((TB => {
          BB || tB(TB)
        })), (0, sT.k)(EB.featureFlags.settings.canUseShaderPacks) && (0, fT.d)().then((async TB => {
          const VB = null !== TB && await async function(BB) {
            const [{
              isShaderPackActive: TB
            }, {
              loadPageShaderPackCompiler: VB
            }] = await Promise.all([dB.e(120).then((() => dB(5987))), Promise.all([dB.e(126), dB.e(124), dB.e(123)]).then((() => dB(5949)))]);
            return TB(BB, await VB())
          }(TB);
          BB || wB(VB)
        })), () => {
          BB = !0
        }
      }), []);
      const KB = function(BB, TB, dB, VB, yB) {
          return (0, MT.d)(dB, VB) && !0 === TB ? {
            translationKey: "settingsMenu:newWebGpuForcedOnByShaderPack",
            checked: !0,
            disabled: !0
          } : {
            translationKey: !1 !== TB ? "settingsMenu:newWebGpu" : yB ? "settingsMenu:newWebGpuDisabledUntilRestart" : "settingsMenu:newWebGpuUnsupported",
            checked: BB && !1 !== TB,
            disabled: !0 !== TB
          }
        }(HB.useWebGpu, NB, zB, UB, FB),
        rB = (HB.useWebGpu || (0, MT.d)(zB, UB)) && zB && !0 === NB,
        IB = (0, DB.j)("lightingOverride"),
        cB = !(0, zT.M)(IB);
      let SB = "settingsMenu:enableLighting";
      cB && (SB = IB ? "settingsMenu:enableLightingForcedOn" : "settingsMenu:enableLightingForcedOff");
      const PB = BB => {
          var TB, dB, VB;
          const yB = null !== (TB = BB.showFog) && void 0 !== TB ? TB : kB("showFog"),
            pB = null !== (dB = BB.antiAliasing) && void 0 !== dB ? dB : HB.antiAliasing,
            lB = null !== (VB = BB.useWebGpu) && void 0 !== VB ? VB : HB.useWebGpu,
            JB = !UT.p && yB !== vB.current || pB !== mB.current || lB !== iB.current;
          OB(JB ? () => fB.n : null)
        },
        QB = (0, DB.j)("fogChunkDistanceOverride"),
        RB = (0, DB.j)("fogBlockDistanceOverride"),
        aB = !(0, zT.M)(QB) || !(0, zT.M)(RB),
        ZB = aB ? "settingsMenu:showFogForcedOn" : "settingsMenu:showFog",
        [XB, WB] = (0, iT.g)(gB),
        [hB, CB] = (0, aT.d)(gB),
        GB = uB("settingsMenu:chunkLoadDistanceDeviceLimit"),
        qB = hB < XB,
        xB = Math.min(null !== (TB = kB("chunkHorizAddDist")) && void 0 !== TB ? TB : gB[0], hB),
        jB = !aB && function(BB, TB) {
          return !0 === BB.showFog && BB.fogChunkDistance > TB
        }(HB, xB);
      return (0, oB.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [(0, oB.jsx)(fB.k, {
          name: uB("settingsMenu:horizontalChunkLoadDistance"),
          min: gB[0],
          max: XB,
          selectableMax: hB,
          cappedNote: GB,
          step: 1,
          initValue: xB,
          onChange: BB => {
            !0 === kB("showFog") && BB < kB("fogChunkDistance") && LB("fogChunkDistance", BB), LB("chunkHorizAddDist", BB), wT.h.yH("updatedChunkLoadDist")
          },
          circleInfoText: uB("settingsMenu:chunkLoadDistanceInfo")
        }), (0, oB.jsx)(fB.k, {
          name: uB("settingsMenu:verticalChunkLoadDistance"),
          min: gB[1],
          max: WB,
          selectableMax: CB,
          cappedNote: qB ? void 0 : GB,
          step: 1,
          initValue: Math.min(null !== (yB = kB("chunkVertAddDist")) && void 0 !== yB ? yB : gB[1], CB),
          onChange: BB => {
            LB("chunkVertAddDist", BB), wT.h.yH("updatedChunkLoadDist")
          },
          circleInfoText: uB("settingsMenu:chunkLoadDistanceInfo"),
          className: "VerticalChunkLoadSlider"
        }), (0, oB.jsx)(fB.e, {
          label: uB("settingsMenu:chunkFadeIn"),
          checked: HB.chunkFadeIn,
          onClick: BB => {
            sB.d.setClientEscMenuOptions({
              chunkFadeIn: BB
            })
          },
          circleInfoText: uB("settingsMenu:chunkFadeInInfo")
        }), MB.devTools.supports("chunkBorders") && (0, oB.jsx)(fB.e, {
          label: uB("settingsMenu:showChunkBorders"),
          checked: HB.showChunkBorders,
          onClick: BB => {
            sB.d.setClientEscMenuOptions({
              showChunkBorders: BB
            })
          },
          circleInfoText: uB("settingsMenu:showChunkBordersInfo")
        }), (0, oB.jsx)(fB.e, {
          label: uB(SB),
          checked: HB.enableLighting,
          onClick: BB => {
            sB.d.setClientEscMenuOptions({
              enableLighting: BB
            })
          },
          disabled: cB
        }), (0, oB.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, oB.jsx)(fB.e, {
            label: uB(ZB),
            checked: HB.showFog,
            onClick: BB => {
              PB({
                showFog: BB
              }), sB.d.setClientEscMenuOptions({
                showFog: BB
              })
            },
            disabled: aB,
            className: pB()({
              SettingBoxWarning: jB
            })
          }), (0, oB.jsx)(fB.k, {
            name: uB("settingsMenu:fogChunkDistance"),
            min: gB[0],
            max: NT.c.maxChunkHorizAddDistance,
            step: 1,
            initValue: null !== (JB = HB.fogChunkDistance) && void 0 !== JB ? JB : gB[0],
            onChange: BB => {
              sB.d.setClientEscMenuOptions({
                fogChunkDistance: BB
              }), wT.h.yH("fogChunkDistanceChanged", BB)
            },
            circleInfoText: uB("settingsMenu:fogChunkDistanceInfo"),
            disabled: aB || !1 === kB("showFog"),
            className: pB()({
              SettingBoxWarning: jB
            })
          }), jB && (0, oB.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: uB("settingsMenu:fogChunkDistanceInfo")
          })]
        }), !UT.p && (0, oB.jsx)(fB.e, {
          label: uB(rB ? "settingsMenu:disableBlockTextureAtlasUnavailableWithShaderPack" : "settingsMenu:disableBlockTextureAtlas"),
          checked: !rB && HB.disableTexAtlas,
          onClick: BB => {
            sB.d.setClientEscMenuOptions({
              disableTexAtlas: BB
            })
          },
          circleInfoText: uB("settingsMenu:disableBlockTextureAtlasInfo"),
          disabled: rB
        }), (0, oB.jsx)(fB.k, {
          name: uB("settingsMenu:fieldOfView"),
          min: 50,
          max: 160,
          step: 1,
          initValue: HB.cameraFOV,
          onChange: BB => {
            sB.d.setClientEscMenuOptions({
              cameraFOV: BB
            })
          }
        }), (0, oB.jsx)(fB.e, {
          label: uB("settingsMenu:disableViewBobbing"),
          checked: HB.disableBobbing,
          onClick: BB => {
            sB.d.setClientEscMenuOptions({
              disableBobbing: BB
            })
          },
          circleInfoText: uB("settingsMenu:disableViewBobbingInfo")
        }), (0, oB.jsx)(fB.e, {
          label: uB("settingsMenu:antiAliasing"),
          checked: HB.antiAliasing,
          onClick: BB => {
            PB({
              antiAliasing: BB
            }), (0, PT.e)("antiAliasing"), sB.d.setClientEscMenuOptions({
              antiAliasing: BB
            })
          },
          circleInfoText: uB("settingsMenu:antiAliasingInfo")
        }), (0, oB.jsx)(fB.k, {
          name: uB("settingsMenu:pixelScale"),
          min: 1,
          max: 8,
          step: 1,
          initValue: null !== (YB = HB.pixelScale) && void 0 !== YB ? YB : 1,
          onChange: BB => {
            (BB !== sB.d.get("clientEscMenuOptions").pixelScale || (0, RT.n)()) && (0, PT.e)("pixelScale"), sB.d.setClientEscMenuOptions({
              pixelScale: BB
            })
          },
          circleInfoText: uB("settingsMenu:pixelScaleInfo"),
          format: BB => `${BB}x`
        }), (0, oB.jsx)(fB.e, {
          label: uB("settingsMenu:pixelSmoothing"),
          checked: HB.pixelSmoothing,
          onClick: BB => {
            sB.d.setClientEscMenuOptions({
              pixelSmoothing: BB
            })
          },
          circleInfoText: uB("settingsMenu:pixelSmoothingInfo")
        }), UT.p && (0, oB.jsx)(fB.e, {
          label: uB("settingsMenu:distantNametags"),
          checked: (0, QT.b)(),
          onClick: BB => {
            sB.d.set({
              showDistantNametags: BB
            })
          },
          circleInfoText: uB("settingsMenu:distantNametagsInfo")
        }), (0, oB.jsx)(fB.e, {
          label: uB(KB.translationKey),
          checked: KB.checked,
          onClick: BB => {
            PB({
              useWebGpu: BB
            }), sB.d.setClientEscMenuOptions({
              useWebGpu: BB
            })
          },
          circleInfoText: uB("settingsMenu:newWebGpuInfo"),
          disabled: KB.disabled
        })]
      })
    }
    var XT = dB(8559),
      WT = dB(8194),
      hT = dB(8196),
      CT = dB(1277),
      GT = dB(4408),
      qT = dB(8565),
      xT = dB(1727),
      jT = dB(3762),
      AT = dB(1736),
      bT = dB(610);
    const nT = (0, VB.memo)((function() {
      const {
        clientEscMenuOptions: BB
      } = (0, sB.m)(["clientEscMenuOptions"]), {
        recording: TB,
        clipping: dB,
        hasClipBuffer: yB
      } = (0, xT.i)("replayRecorder"), lB = (0, xT.g)("connectedGame", (BB => BB.replay)), JB = (0, jT.l)(), YB = !1 === (0, DB.j)("canRecordReplays");
      (0, VB.useEffect)((() => {
        vB.gameBridge.send("setRecorderPrefs", {
          clipping: BB.enableClipping,
          clipSeconds: BB.clipDurationSeconds
        })
      }), [BB.enableClipping, BB.clipDurationSeconds]);
      const gB = JB || lB,
        kB = !gB && !YB,
        LB = TB || kB,
        OB = kB,
        uB = OB && dB && !TB;

      function EB() {
        LB && vB.gameBridge.send("toggleRecording", null)
      }
      return (0, oB.jsxs)("div", {
        className: "SettingsMenuRightInner ReplayViewerCategory",
        children: [(0, oB.jsxs)("div", {
          className: "SettingBox",
          children: [(0, oB.jsx)("div", {
            className: "ReplayViewerCategoryRecordingRow",
            children: TB ? (0, oB.jsxs)(oB.Fragment, {
              children: [(0, oB.jsxs)(HB.K, {
                className: "ReplayViewerCategoryButton",
                onClick: EB,
                disabled: !LB,
                children: [(0, oB.jsx)("span", {
                  children: "Stop Recording"
                }), (0, oB.jsx)(AT.d, {
                  noaAction: "recordGame"
                })]
              }), (0, oB.jsx)(qT.c, {
                className: "ReplayViewerCategoryRecordingIndicator"
              })]
            }) : (0, oB.jsxs)(HB.d, {
              className: "ReplayViewerCategoryButton",
              onClick: EB,
              disabled: !LB,
              children: [(0, oB.jsx)("span", {
                children: "Start Recording"
              }), (0, oB.jsx)(AT.d, {
                noaAction: "recordGame"
              })]
            })
          }), YB && (0, oB.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Recording is turned off in this game."
          }), gB && !TB && (0, oB.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Close Replay Mode to start recording."
          })]
        }), (0, oB.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, oB.jsx)(fB.e, {
            label: "Enable clipping",
            checked: BB.enableClipping,
            disabled: !OB,
            onClick: function(BB) {
              OB && sB.d.setClientEscMenuOptions({
                enableClipping: BB
              })
            },
            className: pB()({
              SettingBoxDisabled: !OB
            })
          }), (0, oB.jsx)(fB.k, {
            name: "Clip duration (seconds)",
            min: bT.i,
            max: bT.f,
            step: bT.b,
            initValue: BB.clipDurationSeconds,
            onChange: function(BB) {
              sB.d.setClientEscMenuOptions({
                clipDurationSeconds: BB
              })
            },
            circleInfoText: "Longer clip durations use more memory and may affect performance.",
            disabled: !OB || !BB.enableClipping
          })]
        }), (0, oB.jsxs)("div", {
          className: "SettingBox",
          children: [(0, oB.jsxs)(HB.d, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              uB && vB.gameBridge.send("saveClip", null)
            },
            disabled: !uB,
            children: [(0, oB.jsx)("span", {
              children: "Record clip"
            }), (0, oB.jsx)(AT.d, {
              noaAction: "recordClip"
            })]
          }), BB.enableClipping && !yB && OB && !TB && (0, oB.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clip buffer is filling \u2014 play for a moment, then save."
          }), TB && (0, oB.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clipping pauses while a full recording is active."
          })]
        }), (0, oB.jsxs)("div", {
          className: "SettingBox",
          children: [(0, oB.jsxs)(HB.d, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              (0, jT.j)(!0), sB.d.set({
                openEverythingMenuName: null
              })
            },
            disabled: JB,
            children: [(0, oB.jsx)("span", {
              children: "Open Replay Mode"
            }), (0, oB.jsx)(AT.d, {
              noaAction: "replayViewerOpen"
            })]
          }), JB && (0, oB.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Replay Mode is already open."
          })]
        }), (0, oB.jsxs)("div", {
          className: "SettingBox",
          children: [(0, oB.jsx)("div", {
            className: "ReplayViewerCategoryTutorialTitle",
            children: "How to use Replay Mode"
          }), (0, oB.jsx)("iframe", {
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
    var eT = dB(270),
      Bd = dB(1652);
    const Td = {
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
        icon: () => (0, oB.jsx)("svg", {
          className: "svg-inline--fa",
          viewBox: "0 0 640 512",
          "aria-hidden": "true",
          children: (0, oB.jsx)("path", {
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
      pD: {
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

    function dd() {
      return Promise.all([dB.e(126), dB.e(124), dB.e(118), dB.e(115)]).then((() => dB(39804))).then((BB => ({
        default: BB.ShaderPackCategory
      })), (BB => (console.error("Failed to load the shader pack settings", BB), {
        default: Vd
      })))
    }

    function Vd() {
      const {
        t: BB
      } = (0, lB.z)();
      return (0, oB.jsx)("div", {
        className: "SettingsMenuRightInner",
        children: BB("shaderPack:tabLoadFailed")
      })
    }
    var yd = dB(1275);
    const pd = (0, VB.lazy)((() => dB.e(252).then((() => dB(39788))).then((BB => ({
        default: BB.BloxdInformation
      }))))),
      ld = (0, VB.lazy)(dd);

    function Jd(BB) {
      return BB ? "general" : "account"
    }
    const Yd = new Map,
      gd = (0, VB.memo)((function(BB) {
        let {
          show: TB,
          setBeforeResumeCallback: dB
        } = BB;
        (0, uB.e)();
        const {
          gameState: yB,
          openSettingsCategory: pB
        } = (0, sB.m)(["gameState", "openSettingsCategory"]), {
          userContext: YB
        } = (0, OB.b)(), {
          t: gB
        } = (0, lB.z)(), NB = (0, LB.b)(), tB = (0, DB.j)("minChunkAddDist"), fB = "inGame" === yB, [MB, UB] = (0, VB.useState)(Jd(fB)), [FB, KB] = (0, VB.useState)(null), [rB, IB] = (0, VB.useState)([]), cB = (0, VB.useRef)(function() {
          const BB = new Date,
            TB = 6 * (BB.getMonth() + BB.getDate()) % eT.s.length;
          return [...eT.s, ...eT.s].slice(TB, TB + 6)
        }()), SB = (0, VB.useRef)(null), PB = (0, LT.f)(CT.j, (0, CT.c)()), QB = Object.keys(Td).filter((BB => {
          switch (BB) {
            case "replayViewer":
              return fB;
            case "developerTools":
              return YB.playerHasRank("developer") || !1;
            case "texturePack":
              return EB.featureFlags.settings.canChangeTexturePack;
            case "pD":
              return EB.featureFlags.settings.canUseShaderPacks;
            case "notifications":
              return EB.featureFlags.useSocialFeatures;
            case "alternativeDomains":
              return "crazygames" !== wB.v;
            case "controller":
              return EB.featureFlags.useControllerSupport && (PB || "controller" === MB);
            default:
              return !0
          }
        }));
        (0, LT.e)("toggleFullCoordinateOverlay", (() => {
          const BB = cT("showCoordinates") && cT("showChunkCoordinates") && cT("showFPS");
          ST("showCoordinates", !BB), ST("showChunkCoordinates", !BB), ST("showFPS", !BB), NB()
        })), (0, LT.e)("updatedChunkLoadDist", (() => {
          NB()
        })), (0, VB.useEffect)((() => {
          if (KB(null), null === sB.d.get("openSettingsCategory")) {
            const BB = (0, yd.i)() ? Yd.get(fB) : void 0;
            UB(BB && QB.includes(BB) ? BB : Jd(fB))
          }
        }), [TB]), (0, VB.useEffect)((() => {
          null !== pB && (UB(pB), Yd.set(fB, pB), sB.d.set({
            openSettingsCategory: null
          }))
        }), [pB, fB]), (0, VB.useLayoutEffect)((() => {
          SB.current && (SB.current.scrollTop = 0)
        }), [MB, TB]), (0, VB.useEffect)((() => {
          "updateLog" === MB && (0, iB.d)().then(IB)
        }), [MB]), (0, VB.useEffect)((() => {
          if ((0, zT.M)(tB)) return;
          const [BB, TB] = (0, XT.d)(), [dB, VB] = (0, iT.g)(tB), yB = (0, Bd.d)(tB[0], BB, dB), pB = (0, Bd.d)(tB[1], TB, VB);
          vB.gameBridge.send("setChunkAddDistance", {
            horizontal: yB,
            vertical: pB
          })
        }), [tB]);
        const RB = (0, VB.useCallback)((async () => {
          FB && (await FB(), KB(null))
        }), [FB]);

        function aB() {
          sB.d.set({
            openEverythingMenuName: null
          })
        }
        return (0, VB.useEffect)((() => {
          dB((() => RB))
        }), [RB, dB]), (0, oB.jsxs)("div", {
          className: "SettingsMenu Menu",
          style: TB ? {} : {
            display: "none"
          },
          children: [(0, oB.jsx)("div", {
            className: "MenuSideBar",
            children: (0, oB.jsx)("div", {
              className: "MenuSideBarBody",
              children: (0, oB.jsx)(kB, {
                items: QB.map((BB => {
                  const TB = Td[BB].icon;
                  return {
                    id: BB,
                    faIcon: "string" === typeof TB ? TB : void 0,
                    iconElement: "string" === typeof TB ? void 0 : (0, oB.jsx)(TB, {}),
                    title: gB(Td[BB].displayName),
                    redDot: !1
                  }
                })),
                selectedItemId: MB,
                onClick: BB => {
                  !async function(BB) {
                    await RB(), UB(BB), Yd.set(fB, BB)
                  }(BB)
                }
              })
            })
          }), (0, oB.jsxs)("div", {
            ref: SB,
            className: "MenuBody SettingsMenuRight",
            children: ["account" === MB && (0, oB.jsx)(yT, {
              showing: TB,
              inGame: fB
            }), "general" === MB && (0, oB.jsx)(gT, {
              inGame: fB
            }), "audio" === MB && (0, oB.jsx)(oT, {}), "notifications" === MB && (0, oB.jsx)(mT, {}), "graphics" === MB && (0, oB.jsx)(ZT, {
              minChunkAddDist: null !== tB && void 0 !== tB ? tB : [2, 2],
              getValue: cT,
              onChange: ST,
              setApplySettingsCallback: KB
            }), "controls" === MB && (0, oB.jsx)(WT.f, {}), "controller" === MB && EB.featureFlags.useControllerSupport && (0, oB.jsx)(hT.e, {}), EB.featureFlags.settings.canChangeTexturePack && "texturePack" === MB && (0, oB.jsx)(GT.c, {
              setApplySettingsCallback: KB
            }), EB.featureFlags.settings.canUseShaderPacks && "pD" === MB && (0, oB.jsx)(VB.Suspense, {
              fallback: null,
              children: (0, oB.jsx)(ld, {
                setApplySettingsCallback: KB
              })
            }), "updateLog" === MB && (0, oB.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, oB.jsx)("div", {
                className: "UpdateLogsContainer",
                children: rB.map(((BB, TB) => (0, oB.jsx)(mB.b, {
                  updateLog: BB,
                  index: TB,
                  close: aB
                }, TB)))
              })
            }), "information" === MB && (0, oB.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, oB.jsx)(VB.Suspense, {
                fallback: null,
                children: (0, oB.jsx)(pd, {})
              })
            }), "alternativeDomains" === MB && (0, oB.jsxs)("div", {
              className: "SettingsMenuRightInner",
              children: [(0, oB.jsx)("div", {
                className: "AlternativeDomainsTitle",
                children: gB("settingsMenu:unblockedDomainsDescription")
              }), (0, oB.jsx)("div", {
                className: "AlternativeDomainsList",
                children: cB.current.map((BB => (0, oB.jsxs)(HB.d, {
                  onClick: () => {
                    window.open(`https://${BB}`)
                  },
                  children: [(0, oB.jsx)(JB.e, {
                    name: "arrow-up-right-from-square"
                  }), " ", BB]
                }, BB)))
              })]
            }), "replayViewer" === MB && (0, oB.jsx)(nT, {}), "developerTools" === MB && (0, oB.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, oB.jsx)(zB, {
                setApplySettingsCallback: KB
              })
            }), null !== FB && (0, oB.jsx)("div", {
              className: "SettingsMenuRightFooter",
              children: (0, oB.jsx)(HB.d, {
                className: "SettingsMenuRightFooterButton",
                onClick: RB,
                children: gB("general:apply")
              })
            })]
          })]
        })
      }));
    var od = dB(2237);
    const kd = ["characters", "emote", "skin", "hat", "head", "eyebrows", "eyes", "back", "body", "legs", "shoes", "profileEffect", "cape", "nameColour"],
      Ld = (0, VB.lazy)((() => Promise.resolve().then((() => dB(4064))).then((BB => {
        BB.needGameClientAfterPaint();
        const TB = BB.matchmakingLibrariesPromise.then((BB => (0, od.e)(BB.loadCharacterCustomisationUI(), (BB => BB.CharacterCustomisationUI))));
        return Promise.all([BB.ensureGameSetup(), TB]).then((BB => {
          let [, TB] = BB;
          return TB
        }))
      }))));

    function Od(BB) {
      let {
        show: TB
      } = BB;
      const {
        userContext: dB
      } = (0, OB.b)(), [yB, pB] = (0, VB.useState)("characters");
      if (!TB) return null;
      const lB = kd.filter((BB => "cape" !== BB && "nameColour" !== BB || dB.getPlayerRanks().includes("super") || (0, ZB.siteSupportsPurchases)())).map((BB => ({
        id: BB,
        faIcon: eT.C[BB],
        title: eT.E[BB],
        redDot: !1
      })));
      return (0, oB.jsxs)("div", {
        className: "Menu CharCustomisation",
        children: [(0, oB.jsx)("div", {
          className: "MenuSideBar",
          children: (0, oB.jsx)(kB, {
            items: lB,
            selectedItemId: yB,
            onClick: BB => {
              pB(BB)
            }
          })
        }), (0, oB.jsx)("div", {
          className: "MenuBody",
          children: (0, oB.jsx)(VB.Suspense, {
            fallback: (0, oB.jsx)("div", {
              className: "CharacterCustomisationLoading",
              children: (0, oB.jsx)(tB.b, {})
            }),
            children: (0, oB.jsx)(Ld, {
              selectedTab: yB
            })
          })
        })]
      })
    }
    var Dd = dB(1345),
      ud = dB(8570),
      Hd = dB(3942),
      Ed = dB(2898),
      vd = dB(2947),
      md = dB(8594),
      Nd = dB(8075),
      td = dB(8578),
      fd = dB(8591),
      sd = dB(1666),
      Md = dB(1657),
      zd = dB(4312),
      wd = dB(1139),
      Ud = dB(1105),
      Fd = dB(1546),
      Kd = dB(8178);
    class rd {
      constructor(BB) {
        this.info = BB
      }
      static fromShopInfo(BB) {
        const TB = {};
        for (const dB in BB) {
          const VB = !0 === BB[dB].redDot && !0 !== BB[dB].forceRemoveRedDot;
          TB[dB] = {
            redDot: VB,
            items: {}
          };
          for (const yB in BB[dB].items) {
            const VB = BB[dB].items[yB],
              pB = !0 === VB.redDot && !0 !== VB.forceRemoveRedDot;
            TB[dB].items[yB] = {
              redDot: pB
            }
          }
        }
        return new rd(TB)
      }
      anyCategoryHasRedDots() {
        for (const BB in this.info)
          if (this.categoryHasRedDot(BB)) return !0;
        return !1
      }
      doesCategoryExist(BB) {
        return !(0, zT.M)(this.info[BB])
      }
      categoryHasRedDot(BB) {
        return !0 === this.info[BB].redDot
      }
      updateCategoryRedDot(BB, TB) {
        this.info[BB].redDot = TB
      }
      doesItemExist(BB, TB) {
        return this.doesCategoryExist(BB) && !(0, zT.M)(this.info[BB].items[TB])
      }
      itemHasRedDot(BB, TB) {
        return !0 === this.info[BB].items[TB].redDot
      }
      updateItemRedDot(BB, TB, dB) {
        this.info[BB].items[TB].redDot = dB
      }
      shallowCopy() {
        return new rd(this.info)
      }
    }

    function Id(BB, TB) {
      return `${BB}\x1f${TB}`
    }

    function cd(BB) {
      return BB ? Object.keys(BB).sort(((TB, dB) => {
        var VB, yB, pB, lB;
        const JB = (null !== (VB = null === (yB = BB[dB]) || void 0 === yB ? void 0 : yB.sortPriority) && void 0 !== VB ? VB : 0) - (null !== (pB = null === (lB = BB[TB]) || void 0 === lB ? void 0 : lB.sortPriority) && void 0 !== pB ? pB : 0);
        return 0 !== JB ? JB : TB.localeCompare(dB)
      })) : []
    }

    function Sd(BB, TB) {
      return !(0, zT.M)(TB) && !(0, zT.M)(BB) && TB in BB
    }
    const Pd = (0, VB.memo)((function(BB) {
      var TB, dB;
      let {
        show: yB
      } = BB;
      const lB = (0, xT.g)("players", Wd),
        JB = (0, xT.g)("players", hd),
        [gB, LB] = (0, VB.useState)({
          shopInfo: {},
          userInputsPerItem: {},
          redDotInfo: rd.fromShopInfo({}),
          currencyAmounts: {},
          selectedCategoryKey: null,
          onBoughtInfo: null,
          awaitingPurchase: !1
        }),
        OB = (0, VB.useRef)(""),
        uB = (0, VB.useRef)(null),
        EB = (0, VB.useRef)(0),
        mB = (0, VB.useRef)(void 0),
        iB = (0, VB.useRef)(null),
        NB = (0, VB.useRef)(gB),
        tB = gB.redDotInfo.anyCategoryHasRedDots(),
        [fB, MB] = (0, VB.useState)(null),
        zB = (0, VB.useRef)(!1);
      let UB = !1,
        FB = 0,
        KB = 0;
      if (gB.currencyAmounts) {
        for (const BB in gB.currencyAmounts) {
          var rB;
          const TB = gB.currencyAmounts[BB];
          TB.hidden || (FB++, (null === (rB = TB.subtext) || void 0 === rB ? void 0 : rB.length) > 0 && KB++)
        }
        UB = FB + KB > 4
      }(0, VB.useEffect)((() => {
        wT.h.yH("showShopIconRedDot", tB, !0)
      }), [tB]), (0, VB.useEffect)((() => {
        vB.gameBridge.send("setShopOpen", yB), yB || (clearTimeout(mB.current), LB((BB => BB.awaitingPurchase ? {
          ...BB,
          awaitingPurchase: !1
        } : BB)))
      }), [yB]), (0, VB.useEffect)((() => () => {
        vB.gameBridge.send("setShopOpen", !1), clearTimeout(mB.current)
      }), []), (0, VB.useEffect)((() => {
        NB.current = gB
      }), [gB]), (0, VB.useEffect)((() => {
        if (null === fB) return;
        return (0, Fd.c)("pointerdown", (BB => {
          const TB = BB.target;
          null !== TB && void 0 !== TB && TB.closest(".ShopItem") || MB(null)
        }))
      }), [fB]);
      const IB = BB => {
          LB((TB => ({
            ...TB,
            ...BB
          })))
        },
        cB = BB => {
          var TB;
          clearTimeout(null === (TB = gB.onBoughtInfo) || void 0 === TB ? void 0 : TB.timeout);
          const dB = setTimeout((() => {
            IB({
              onBoughtInfo: null
            })
          }), 3e3);
          OB.current = BB, IB({
            onBoughtInfo: {
              text: BB,
              timeout: dB
            }
          })
        },
        SB = BB => {
          const {
            shopInfo: TB,
            userInputsPerItem: dB,
            redDotInfo: VB,
            autoSelectCategory: pB
          } = function(BB, TB, dB, VB, yB, pB) {
            if ((0, zT.M)(BB) || 0 === Object.keys(BB).length) return {
              shopInfo: {},
              userInputsPerItem: {},
              redDotInfo: rd.fromShopInfo({}),
              autoSelectCategory: null
            };
            const lB = wB.q[wB.v].adConfig.showRewardedAds,
              JB = {};
            let YB = null;
            for (const HB in BB) {
              const TB = BB[HB],
                dB = {};
              let VB = !1;
              for (const BB in TB.items) {
                const yB = TB.items[BB];
                (0, Nd.m)(yB, lB) && (dB[BB] = yB, VB = !0)
              }
              VB && (JB[HB] = {
                ...TB,
                items: dB
              }, !0 === TB.autoSelectCategory && (YB = HB))
            }
            const gB = {},
              oB = (BB, TB, VB, lB) => {
                var JB, YB;
                const oB = Id(BB, TB),
                  kB = null !== (JB = dB[oB]) && void 0 !== JB ? JB : dB[TB];
                if (null !== (YB = lB.userInput) && void 0 !== YB && YB.type) switch (lB.userInput.type) {
                  case "dropdown": {
                    var LB;
                    const BB = !kB || !lB.userInput.dropdownOptions.some((BB => (0, Nd.i)(BB) === kB)),
                      TB = lB.userInput.shouldResetSelectionOnOptionsChange && ("dropdown" !== (null === VB || void 0 === VB || null === (LB = VB.userInput) || void 0 === LB ? void 0 : LB.type) || JSON.stringify(VB.userInput.dropdownOptions) !== JSON.stringify(lB.userInput.dropdownOptions)),
                      dB = lB.userInput,
                      yB = !(0, zT.M)(dB.initialValue) && dB.dropdownOptions.some((BB => (0, Nd.i)(BB) === dB.initialValue));
                    var OB;
                    return void(BB || TB ? yB ? gB[oB] = null !== (OB = lB.userInput.initialValue) && void 0 !== OB ? OB : null : lB.userInput.dropdownOptions.length > 0 ? gB[oB] = (0, Nd.i)(lB.userInput.dropdownOptions[0]) : gB[oB] = null : gB[oB] = kB)
                  }
                  case "text":
                  case "number":
                    var DB, uB, HB;
                    return void((null === VB || void 0 === VB ? void 0 : VB.userInput) !== lB.userInput ? gB[oB] = null !== (DB = null !== (uB = lB.userInput.initialValue) && void 0 !== uB ? uB : kB) && void 0 !== DB ? DB : "" : gB[oB] = null !== (HB = null !== kB && void 0 !== kB ? kB : lB.userInput.initialValue) && void 0 !== HB ? HB : "");
                  case "color":
                    var EB, vB, mB;
                    return void((null === VB || void 0 === VB ? void 0 : VB.userInput) !== lB.userInput ? gB[oB] = null !== (EB = null !== (vB = lB.userInput.initialValue) && void 0 !== vB ? vB : kB) && void 0 !== EB ? EB : "#000000" : gB[oB] = null !== (mB = null !== kB && void 0 !== kB ? kB : lB.userInput.initialValue) && void 0 !== mB ? mB : "#000000");
                  case "player": {
                    const BB = (0, Nd.k)(yB, pB, lB.userInput);
                    return void(kB && BB.includes(kB) ? gB[oB] = kB : gB[oB] = BB.length > 0 ? BB[0] : null)
                  }
                }
              };
            for (const HB in JB)
              for (const BB in JB[HB].items) {
                var kB;
                const dB = JB[HB].items[BB];
                oB(HB, BB, null === (kB = TB[HB]) || void 0 === kB ? void 0 : kB.items[BB], dB)
              }
            const LB = rd.fromShopInfo(JB);
            for (const HB in JB) {
              var OB;
              if (VB.doesCategoryExist(HB)) {
                (null === (OB = TB[HB]) || void 0 === OB ? void 0 : OB.redDot) === JB[HB].redDot && LB.updateCategoryRedDot(HB, VB.categoryHasRedDot(HB));
                for (const BB in JB[HB].items) {
                  var DB, uB;
                  VB.doesItemExist(HB, BB) && (null === (DB = TB[HB]) || void 0 === DB || null === (uB = DB.items[BB]) || void 0 === uB ? void 0 : uB.redDot) === JB[HB].items[BB].redDot && LB.updateItemRedDot(HB, BB, VB.itemHasRedDot(HB, BB))
                }
              }
            }
            return {
              shopInfo: JB,
              userInputsPerItem: gB,
              redDotInfo: LB,
              autoSelectCategory: YB
            }
          }(BB, gB.shopInfo, gB.userInputsPerItem, gB.redDotInfo, lB, JB), YB = {
            shopInfo: TB,
            userInputsPerItem: dB,
            redDotInfo: VB
          };
          if (null === pB || yB)
            if (TB[gB.selectedCategoryKey]) YB.selectedCategoryKey = gB.selectedCategoryKey;
            else {
              const BB = cd(TB);
              YB.selectedCategoryKey = BB.length > 0 ? BB[0] : null
            }
          else YB.selectedCategoryKey = pB;
          return 0 === Object.keys(TB).length && yB && sB.d.set({
            openEverythingMenuName: null
          }), YB
        },
        PB = (BB, TB) => {
          if (null === TB || !BB.shopInfo[TB]) return BB;
          let dB = BB.redDotInfo;
          return dB.categoryHasRedDot(TB) && (dB.updateCategoryRedDot(TB, !1), dB = dB.shallowCopy()), {
            ...BB,
            selectedCategoryKey: TB,
            redDotInfo: dB
          }
        },
        QB = BB => {
          LB((TB => PB(TB, BB)))
        };
      (0, LT.e)(Kd.k, (() => {
        LB((BB => {
          const TB = (0, Kd.o)(cd(BB.shopInfo), BB.selectedCategoryKey, (TB => (0, Kd.g)(BB.shopInfo[TB].items)));
          return TB === BB.selectedCategoryKey ? BB : PB(BB, TB)
        }))
      })), (0, LT.e)("showShopFromServer", (BB => {
        let {
          toggle: TB,
          kd: dB
        } = BB;
        dB && QB(dB), 0 === Object.keys(gB.shopInfo).length || TB && yB ? sB.d.set({
          openEverythingMenuName: null
        }) : sB.d.set({
          openEverythingMenuName: eT.m.SHOP
        })
      })), (0, LT.e)("closeShopOnDamaged", (() => {
        yB && sB.d.set({
          openEverythingMenuName: null
        })
      })), (0, LT.e)("overShopInfo", (BB => {
        cB(BB)
      })), (0, DB.i)("currencyAmounts", (BB => {
        var TB;
        const dB = iB.current;
        dB && (null === BB || void 0 === BB || null === (TB = BB[dB.currency]) || void 0 === TB ? void 0 : TB.amount) === dB.amountBefore ? IB({
          currencyAmounts: BB
        }) : (iB.current = null, IB({
          currencyAmounts: BB,
          awaitingPurchase: !1
        }))
      })), (0, DB.i)("shopInfo", (BB => {
        IB({
          ...SB(BB),
          awaitingPurchase: !1
        })
      }));
      const aB = (0, VB.useRef)({
        playerIds: lB,
        localPlayerId: JB
      });
      (0, VB.useEffect)((() => {
        aB.current.playerIds === lB && aB.current.localPlayerId === JB || (aB.current = {
          playerIds: lB,
          localPlayerId: JB
        }, LB((BB => {
          const TB = SB(BB.shopInfo);
          return {
            ...BB,
            ...TB
          }
        })))
      }), [lB, JB]);
      const ZB = gB.selectedCategoryKey,
        XB = (BB, TB) => {
          var dB, VB;
          return (isNaN(TB) || (0, zT.M)(BB.currency) || Sd(gB.currencyAmounts, BB.currency) && TB <= gB.currencyAmounts[BB.currency].amount) && (null === (dB = BB.canBuy) || void 0 === dB || dB) && !(null !== (VB = BB.hidden) && void 0 !== VB && VB)
        },
        WB = (BB, TB) => {
          var dB, VB, yB;
          const lB = Id(ZB, BB),
            JB = gB.shopInfo[ZB].items[BB],
            kB = gB.userInputsPerItem[lB],
            LB = (0, Nd.e)(JB, kB),
            OB = XB(JB, LB),
            DB = JB.enchant,
            uB = DB ? (0, RB.qb)(null !== (dB = JB.customTitle) && void 0 !== dB ? dB : BB, {
              colour: RB.lb[DB.tier]
            }) : null !== (VB = JB.customTitle) && void 0 !== VB ? VB : BB,
            tB = TB => {
              const dB = null !== TB && void 0 !== TB ? TB : kB,
                VB = void 0 !== TB ? (0, Nd.e)(JB, TB) : LB;
              XB(JB, VB) && null !== dB && ((BB, TB, dB) => {
                const VB = gB.selectedCategoryKey,
                  yB = Id(VB, BB),
                  pB = null !== dB && void 0 !== dB ? dB : gB.userInputsPerItem[yB],
                  lB = {
                    categoryKey: VB,
                    itemKey: BB,
                    userInput: pB
                  };
                if (TB.isRewardedAd) {
                  if (Date.now() - EB.current < 5e3) return;
                  (0, nB.$)((() => {
                    var dB, VB, pB;
                    console.log("bought rewarded ad");
                    const JB = lB.categoryKey ? null === (dB = NB.current.shopInfo[lB.categoryKey]) || void 0 === dB ? void 0 : dB.items[BB] : null;
                    JB && JB.isRewardedAd ? (null === (VB = TB.userInput) || void 0 === VB ? void 0 : VB.type) === (null === JB || void 0 === JB || null === (pB = JB.userInput) || void 0 === pB ? void 0 : pB.type) ? (lB.userInput = NB.current.userInputsPerItem[yB], vB.gameBridge.send("buyShopItem", lB), TB.onBoughtMessage && cB(TB.onBoughtMessage)) : console.warn("Shop item input type changed, early out") : console.warn("Shop item no longer valid or a rewarded ad, early out")
                  })), EB.current = Date.now()
                } else {
                  vB.gameBridge.send("buyShopItem", lB), IB({
                    awaitingPurchase: !0
                  }), clearTimeout(mB.current), mB.current = setTimeout((() => {
                    iB.current = null, IB({
                      awaitingPurchase: !1
                    })
                  }), 1e3);
                  const BB = (0, Nd.e)(TB, pB);
                  if (iB.current = null, !isNaN(BB) && Sd(gB.currencyAmounts, TB.currency)) {
                    0 !== BB && (iB.current = {
                      currency: TB.currency,
                      amountBefore: gB.currencyAmounts[TB.currency].amount
                    });
                    const dB = {
                      ...gB.currencyAmounts
                    };
                    dB[TB.currency].amount -= BB, IB({
                      currencyAmounts: dB
                    })
                  }
                  TB.onBoughtMessage && cB(TB.onBoughtMessage)
                }
              })(BB, JB, TB);
              let yB = gB.redDotInfo;
              yB.itemHasRedDot(ZB, BB) && (yB.updateItemRedDot(ZB, BB, !1), yB = yB.shallowCopy()), IB({
                redDotInfo: yB
              })
            };
          return (0, oB.jsxs)("div", {
            className: pB()("ShopItem", {
              ShopItemNoInput: !JB.userInput,
              ShopItemNoInputCanBuy: !JB.userInput && OB,
              ShopItemNoInputSelected: JB.isSelected,
              ShopItemEnchant: !!DB
            }),
            "data-pad-focusable": !JB.userInput || void 0,
            "data-pad-unavailable": !JB.userInput && !OB || void 0,
            "data-pad-repeat": null !== (yB = (0, Kd.b)(JB)) && void 0 !== yB ? yB : void 0,
            "data-pad-repeat-wait": gB.awaitingPurchase || void 0,
            onClick: () => {
              if (DB && zB.current) {
                if (fB !== lB) return void MB(lB);
                MB(null)
              }
              JB.userInput || tB()
            },
            onPointerDown: BB => {
              DB && (zB.current = (0, fd.r)(BB))
            },
            onPointerEnter: BB => {
              DB && !(0, fd.r)(BB) && MB(lB)
            },
            onPointerLeave: BB => {
              DB && !(0, fd.r)(BB) && MB((BB => BB === lB ? null : BB))
            },
            style: {
              zIndex: Object.keys(gB.shopInfo[ZB].items).length - TB
            },
            children: [gB.redDotInfo.itemHasRedDot(ZB, BB) && (0, oB.jsx)(YB.b, {
              top: "-6px",
              right: "-6px"
            }), JB.badge && (0, oB.jsx)("div", {
              className: "ShopBadgeContainer",
              children: (0, oB.jsx)("div", {
                className: pB()("ShopBadgeMain", JB.badge.type),
                children: (0, oB.jsx)(Md.e, {
                  text: JB.badge.text
                })
              })
            }), (0, oB.jsx)("div", {
              className: "ShopItemLeft",
              children: JB.image && (0, oB.jsx)(Qd, {
                item: JB,
                minWidth: 5,
                minHeight: 4.8
              })
            }), (0, oB.jsxs)("div", {
              className: "ShopItemRight",
              children: [(0, oB.jsxs)("div", {
                className: "ShopItemHeader",
                children: [(0, oB.jsx)("div", {
                  className: "ShopItemHeaderTitle",
                  children: (0, oB.jsx)(Md.e, {
                    text: uB
                  })
                }), (0, oB.jsx)("div", {
                  className: "ShopItemHeaderDescription",
                  children: (0, oB.jsx)(Md.e, {
                    text: JB.description
                  })
                })]
              }), JB.userInput && (0, oB.jsxs)("div", {
                className: "ShopItemInputsContainer",
                onClick: BB => {
                  BB.stopPropagation()
                },
                children: [(0, oB.jsx)(Zd, {
                  item: JB,
                  currInput: kB,
                  updateInput: TB => {
                    ((BB, TB, dB) => {
                      const VB = Id(BB, TB),
                        yB = {
                          ...gB.userInputsPerItem
                        };
                      yB[VB] = dB, IB({
                        userInputsPerItem: yB
                      })
                    })(ZB, BB, TB)
                  },
                  onSubmit: BB => {
                    tB(BB)
                  }
                }), ("dropdown" !== JB.userInput.type || !JB.userInput.autoSubmit) && (0, oB.jsx)(HB.d, {
                  className: "ItemCostButton",
                  disabled: !OB && null !== kB,
                  onClick: () => {
                    tB()
                  },
                  children: (0, oB.jsx)(ad, {
                    item: JB,
                    cost: LB,
                    currencyAmounts: gB.currencyAmounts
                  })
                })]
              })]
            }), !JB.userInput && (0, oB.jsx)("div", {
              className: "ShopItemNoInputCost",
              children: (0, oB.jsx)(ad, {
                item: JB,
                cost: LB,
                currencyAmounts: gB.currencyAmounts
              })
            }), DB && fB === lB && (0, oB.jsxs)("div", {
              className: "ShopItemEnchantInfo SmallTextBold",
              children: [(0, oB.jsx)(Md.e, {
                text: uB
              }), (0, oB.jsx)("div", {
                className: "ShopItemEnchantInfoDescription",
                children: (0, oB.jsx)(Md.e, {
                  text: (0, td.b)("", DB.enchantments, DB.enchantmentData)
                })
              })]
            })]
          }, lB)
        };
      return (0, oB.jsx)(Ed.c, {
        className: "Menu ShopBody",
        show: yB,
        children: 0 !== Object.keys(gB.shopInfo).length && (0, oB.jsxs)(oB.Fragment, {
          children: [(0, oB.jsxs)("div", {
            className: "MenuSideBar",
            children: [(0, oB.jsx)(kB, {
              items: cd(gB.shopInfo).map((BB => {
                var TB;
                return {
                  id: BB,
                  title: null !== (TB = gB.shopInfo[BB].customTitle) && void 0 !== TB ? TB : BB,
                  redDot: gB.redDotInfo.categoryHasRedDot(BB)
                }
              })),
              selectedItemId: ZB,
              onClick: QB,
              padStartsOnTab: (0, Kd.d)(ZB)
            }), (0, oB.jsx)("div", {
              className: "MenuSideBarFooter",
              children: gB.currencyAmounts && Object.keys(gB.currencyAmounts).map((BB => {
                var TB;
                const dB = gB.currencyAmounts[BB];
                return dB.hidden ? null : (0, oB.jsxs)("div", {
                  className: "ShopCurrencyDiv " + (UB ? "SmallText" : ""),
                  children: [(0, oB.jsxs)("div", {
                    className: "ShopCurrencyDetails",
                    children: [(0, oB.jsx)("div", {
                      className: "ShopCurrencyAmtIcon",
                      style: {
                        color: dB.iconColour
                      },
                      children: (0, oB.jsx)(Cd, {
                        iconName: dB.icon
                      })
                    }), "\xa0", (0, md.b)(dB.amount, 6)]
                  }), (null === (TB = dB.subtext) || void 0 === TB ? void 0 : TB.length) > 0 && (0, oB.jsx)("div", {
                    className: "ShopCurrencySubtext",
                    children: (0, oB.jsx)(Md.e, {
                      text: dB.subtext
                    })
                  })]
                }, BB)
              }))
            })]
          }), (0, oB.jsxs)("div", {
            className: "MenuBody ShopMenuBody",
            children: [(0, oB.jsx)("div", {
              className: pB()("ShopOnBoughtInfo", {
                ShopOnBoughtInfoShow: null !== gB.onBoughtInfo
              }),
              children: (0, oB.jsx)(Md.e, {
                text: OB.current
              })
            }), (0, oB.jsx)("div", {
              className: "ShopItemsWrapper",
              children: (0, oB.jsxs)("div", {
                className: "ShopItemsInner",
                children: [(null === (TB = gB.shopInfo[ZB]) || void 0 === TB ? void 0 : TB.description) && (0, oB.jsx)("div", {
                  className: "ShopCategoryDescription",
                  children: (0, oB.jsx)(Md.e, {
                    text: gB.shopInfo[ZB].description
                  })
                }), yB && (0, oB.jsx)("div", {
                  className: "ShopItems",
                  ref: uB,
                  "data-pad-initial-area": !0,
                  children: cd(null === (dB = gB.shopInfo[ZB]) || void 0 === dB ? void 0 : dB.items).map(((BB, TB) => WB(BB, TB)))
                })]
              })
            })]
          })]
        })
      })
    }));

    function Qd(BB) {
      let {
        item: TB,
        minWidth: dB,
        minHeight: VB
      } = BB;
      const {
        image: yB,
        schematicId: pB,
        imageColour: lB
      } = TB;
      if (pB) return (0, oB.jsx)("div", {
        className: "ShopSchematic",
        style: {
          width: `${dB}rem`,
          height: `${VB}rem`
        },
        children: (0, oB.jsx)(zd.e, {
          game: {
            schematicId: pB
          }
        })
      });
      var YB, gB;
      if ((0, sd.d)(yB)) return (0, oB.jsx)("div", {
        className: "ShopBlock",
        style: {
          minWidth: `${dB}rem`,
          height: "0",
          minHeight: `${VB}rem`
        },
        children: (0, oB.jsx)(sd.c, {
          itemName: yB,
          amount: null !== (YB = TB.amount) && void 0 !== YB ? YB : 0,
          amountFontSize: VB / 4 + "rem",
          enchantmentTier: null === (gB = TB.enchant) || void 0 === gB ? void 0 : gB.tier
        })
      });
      const kB = yB.slice(-4);
      return ".jpg" === kB || ".png" === kB ? (0, oB.jsx)(Rd, {
        image: yB,
        minWidth: dB
      }) : (0, oB.jsx)(JB.e, {
        name: yB,
        className: "SelectedItemImage",
        style: {
          color: lB
        }
      })
    }

    function Rd(BB) {
      let {
        image: TB,
        minWidth: dB
      } = BB;
      const {
        gameNameWithVariation: VB
      } = (0, xT.i)("connectedGame"), yB = TB.endsWith(".jpg");
      return (0, oB.jsx)("img", {
        className: pB()({
          ShopPixelImage: !yB
        }),
        style: {
          width: `${yB?1.6*dB:dB}rem`,
          height: "auto",
          fontSize: "1.25rem"
        },
        src: `/textures/games/${(0,RB.Vb)(VB)}/${TB}`,
        alt: TB,
        draggable: !1
      })
    }

    function ad(BB) {
      let {
        item: TB,
        cost: dB,
        currencyAmounts: VB
      } = BB;
      const yB = !isNaN(dB) && 0 !== dB && Sd(VB, TB.currency);
      let pB = null;
      return TB.buyButtonText ? pB = TB.buyButtonText : yB ? (pB = dB, TB.sell && (pB = -1 * dB), pB = pB.toString()) : 0 === dB ? pB = "Free" : TB.isRewardedAd && (pB = "Watch ad"), (0, zT.M)(pB) || " " === pB ? null : (0, oB.jsxs)("div", {
        className: "BuyItemCostAndIcon",
        children: [yB && (0, oB.jsx)("div", {
          style: {
            color: VB[TB.currency].iconColour
          },
          className: "BuyItemIcon",
          children: (0, oB.jsx)(Cd, {
            iconName: VB[TB.currency].icon
          })
        }), (0, oB.jsx)("div", {
          className: "BuyItemCost",
          children: (0, oB.jsx)(Md.e, {
            text: pB
          })
        })]
      })
    }

    function Zd(BB) {
      let {
        item: TB,
        currInput: dB,
        updateInput: yB,
        onSubmit: pB
      } = BB;
      const {
        t: JB
      } = (0, lB.z)(), YB = (0, VB.useRef)(null);
      if ((0, VB.useEffect)((() => {
          const BB = YB.current;
          BB && BB.value !== dB && document.activeElement !== BB && (BB.value = null !== dB && void 0 !== dB ? dB : "")
        }), [dB]), !TB.userInput) return null;
      let gB = TB.userInput;
      if (EB.featureFlags.sanitizeShopInput && "text" === TB.userInput.type && (gB = {
          type: "number",
          placeholderText: "Numbers Only"
        }), "text" === gB.type || "number" === gB.type) {
        var kB, LB;
        console.assert(void 0 !== dB, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(TB)}`);
        const BB = "text" === gB.type && gB.wordCharsOnly;
        return (0, oB.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputTextWrapper",
          children: (0, oB.jsx)(NB.e, {
            className: "ShopItemUserInputText",
            placeholderText: JB(gB.placeholderText),
            defaultValue: dB,
            domRef: YB,
            onValueChange: (TB, dB) => {
              !0 === BB && (TB = (0, Ud.qb)(TB)), YB.current.value = TB, yB(TB)
            },
            onEnter: pB,
            type: gB.type
          }, (null !== (kB = gB.initialValue) && void 0 !== kB ? kB : "") + (null !== (LB = gB.placeholderText) && void 0 !== LB ? LB : ""))
        })
      }
      if ("dropdown" === gB.type) {
        console.assert(void 0 !== dB, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(TB)}`);
        const BB = gB.autoSubmit;
        return (0, oB.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputDropdown",
          children: (0, oB.jsx)(lT.e, {
            options: gB.dropdownOptions.map((BB => (0, Nd.i)(BB))),
            value: dB,
            onChange: TB => {
              let {
                value: dB
              } = TB;
              yB(dB), BB && pB(dB)
            }
          })
        })
      }
      return "player" === gB.type ? (0, oB.jsx)(Xd, {
        userInput: gB,
        currInput: dB,
        updateInput: yB
      }) : "color" === gB.type ? (0, oB.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputColor",
        children: (0, oB.jsx)("input", {
          type: "color",
          value: dB,
          onChange: BB => {
            yB(BB.target.value)
          }
        })
      }) : null
    }

    function Xd(BB) {
      let {
        userInput: TB,
        currInput: dB,
        updateInput: VB
      } = BB;
      const yB = (0, xT.i)("players"),
        pB = (0, xT.i)("hiddenPlayerNames"),
        lB = (0, Nd.k)(yB.ids, yB.localId, TB);
      return (0, oB.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputDropdown",
        children: (0, oB.jsx)(lT.e, {
          options: lB.map((BB => {
            const {
              name: TB
            } = yB.byId[BB];
            return {
              value: BB,
              label: null === TB ? "" : (0, wd.g)(TB, pB)
            }
          })),
          value: dB,
          onChange: BB => {
            let {
              value: TB
            } = BB;
            VB(TB)
          }
        })
      })
    }

    function Wd(BB) {
      let {
        ids: TB
      } = BB;
      return TB
    }

    function hd(BB) {
      let {
        localId: TB
      } = BB;
      return TB
    }

    function Cd(BB) {
      let {
        iconName: TB
      } = BB;
      return vB.gameBridge.lookup("isItemName", TB) ? (0, oB.jsx)(sd.c, {
        itemName: TB,
        amount: 1
      }) : (0, oB.jsx)(JB.e, {
        name: TB,
        className: "2x"
      })
    }
    var Gd = dB(1507);
    const qd = (0, dB(1286).l)((BB => BB.PadLobbyShortcuts)),
      xd = (0, VB.lazy)((() => Promise.resolve().then((() => dB(4064))).then((BB => ({
        default: BB.Lobbyleaderboard
      })))));

    function jd(BB) {
      let {
        show: TB
      } = BB;
      return TB ? (0, oB.jsxs)(oB.Fragment, {
        children: [(0, oB.jsx)(qd, {}), (0, oB.jsx)(VB.Suspense, {
          fallback: (0, oB.jsx)("div", {
            className: "CharacterCustomisationLoading",
            children: (0, oB.jsx)(tB.b, {})
          }),
          children: (0, oB.jsx)(xd, {})
        })]
      }) : null
    }
    var Ad = dB(1457),
      bd = dB(2500),
      nd = dB(1596),
      ed = dB(2312),
      BV = dB(1385),
      TV = dB(1330),
      dV = dB(2485),
      VV = dB(1876),
      yV = dB(2498),
      pV = dB(2051);
    const lV = "storeRecentGiftRecipients",
      JV = new Map;

    function YV() {
      try {
        const BB = FT.j.getItem(lV);
        return Array.isArray(BB) ? BB.filter((BB => "string" === typeof(null === BB || void 0 === BB ? void 0 : BB.name) && BB.name.length > 0)).map((BB => ({
          name: BB.name,
          cosmetics: BB.cosmetics && "object" === typeof BB.cosmetics ? BB.cosmetics : null
        }))) : []
      } catch {
        return []
      }
    }

    function gV(BB) {
      var TB;
      const [dB, yB] = (0, VB.useState)(""), [pB, lB] = (0, VB.useState)("search"), [JB, YB] = (0, VB.useState)(null), [gB, oB] = (0, VB.useState)(null), kB = (0, VB.useRef)(null), LB = (0, VB.useRef)(null);
      (0, VB.useEffect)((() => () => {
        kB.current && clearTimeout(kB.current)
      }), []);
      const OB = null !== (TB = null === JB || void 0 === JB ? void 0 : JB.name) && void 0 !== TB ? TB : null;

      function DB() {
        kB.current && (clearTimeout(kB.current), kB.current = null)
      }(0, VB.useEffect)((() => {
        if (null === OB || BB === UB.NULL_USER_CONTEXT) return;
        const TB = OB.toLowerCase();
        if (TB === BB.getPlayerName().toLowerCase()) return void oB({
          name: OB,
          result: {
            giftRecipientFound: !1,
            giftRecipientError: "store:giftRecipientIsYou"
          }
        });
        const dB = JV.get(TB);
        if (dB) return void oB({
          name: OB,
          result: dB
        });
        let VB = !1;
        return async function(BB, TB) {
          try {
            const dB = await (0, UB.postJsonWithMetricsCookiesAndJsonResponse)(`${FB.clientSideServerUrls.indexUrl}/index/xsolla/gift-recipient`, {
              giftRecipientName: TB
            }, {
              retries: 1
            }, BB.getMetricsCookies());
            if ("boolean" !== typeof(null === dB || void 0 === dB ? void 0 : dB.giftRecipientFound)) throw new Error(`Unexpected gift recipient lookup response: ${JSON.stringify(dB)}`);
            return dB
          } catch (dB) {
            return console.error("Failed to look up gift recipient:", dB), {
              giftRecipientFound: !1,
              giftRecipientError: "store:giftRecipientLookupFailed"
            }
          }
        }(BB, OB).catch((BB => (console.error("Gift recipient lookup failed:", BB), {
          giftRecipientFound: !1,
          giftRecipientError: "store:giftRecipientLookupFailed"
        }))).then((BB => {
          !0 !== BB.giftRecipientFound && "store:giftRecipientLookupFailed" === BB.giftRecipientError || JV.set(TB, BB), VB || oB({
            name: OB,
            result: BB
          })
        })), () => {
          VB = !0
        }
      }), [OB, BB]);
      const uB = (0, VB.useMemo)((() => {
        const BB = dB.trim();
        if (!BB) return {
          status: "none"
        };
        if (!JB || JB.name !== BB || (null === gB || void 0 === gB ? void 0 : gB.name) !== JB.name) return {
          status: "pending",
          name: BB
        };
        const TB = gB.result;
        return !1 === TB.giftRecipientFound ? {
          status: "error",
          name: JB.name,
          error: TB.giftRecipientError
        } : {
          status: "found",
          name: TB.giftRecipientName,
          ownedPacks: TB.giftRecipientOwnedPacks,
          hasSuperRank: TB.giftRecipientHasSuperRank
        }
      }), [dB, JB, gB]);
      (0, VB.useEffect)((() => {
        "found" === uB.status && "typed" === (null === JB || void 0 === JB ? void 0 : JB.source) && LB.current !== uB.name && (LB.current = uB.name, (0, CB.f)({
          id: "store.gift_recipient",
          value: "typed"
        }))
      }), [uB, JB]);
      const HB = (null === gB || void 0 === gB ? void 0 : gB.name) === (null === JB || void 0 === JB ? void 0 : JB.name) ? null === gB || void 0 === gB ? void 0 : gB.result : null,
        EB = !0 === (null === HB || void 0 === HB ? void 0 : HB.giftRecipientFound) ? HB.giftRecipientCosmetics : null;
      return {
        query: dB,
        via: pB,
        recipient: uB,
        recipientCosmetics: EB,
        type: function(BB) {
          yB(BB), lB("search"), DB();
          const TB = BB.trim();
          TB ? kB.current = setTimeout((() => {
            YB({
              name: TB,
              source: "typed"
            })
          }), 400) : YB(null)
        },
        choose: function(BB, TB) {
          DB(), yB(BB), lB("typed" === TB ? "search" : "prefilled" === TB ? "prefilled" : "suggestion"), YB({
            name: BB,
            source: TB
          }), "typed" !== TB && "prefilled" !== TB && (0, CB.f)({
            id: "store.gift_recipient",
            value: TB
          })
        },
        clear: function() {
          DB(), yB(""), lB("search"), YB(null)
        },
        recordGift: function(BB, TB) {
          ! function(BB) {
            JV.delete(BB.toLowerCase())
          }(BB), oB((dB => {
            if (!dB || dB.name.toLowerCase() !== BB.toLowerCase() || !0 !== dB.result.giftRecipientFound || "superRank" === TB) return dB;
            const VB = dB.result.giftRecipientOwnedPacks;
            return {
              ...dB,
              result: {
                ...dB.result,
                giftRecipientOwnedPacks: VB.includes(TB) ? VB : [...VB, TB]
              }
            }
          }))
        }
      }
    }
    var oV = dB(2047),
      kV = dB(4070),
      LV = dB(232),
      OV = dB(2575);
    const DV = ["pointerdown", "pointermove", "keydown", "wheel", "touchstart", "scroll", "blur", "focus"];
    var uV = dB(2023),
      HV = dB(554),
      EV = dB(1514),
      vV = dB(2085),
      mV = dB(2208);

    function iV(BB) {
      let {
        cosmetics: TB
      } = BB;
      return (0, oB.jsx)("span", {
        className: "StoreRecipientAvatar",
        children: (0, oB.jsx)(vV.e, {
          cosmetics: TB
        })
      })
    }

    function NV(BB, TB) {
      var dB, VB;
      const yB = null !== (dB = BB.friend) && void 0 !== dB ? dB : {
        isError: !1,
        name: BB.name,
        ranks: [],
        cosmetics: null !== (VB = BB.cosmetics) && void 0 !== VB ? VB : {},
        nameColour: HV.d,
        location: {
          status: "noGamePlayed"
        }
      };
      return TB ? {
        ...yB,
        cosmetics: TB
      } : yB
    }

    function tV(BB) {
      let {
        recipient: TB
      } = BB;
      return "pending" === TB.status ? (0, oB.jsx)("span", {
        className: "StoreRecipientStatus",
        children: (0, oB.jsx)(tB.b, {})
      }) : "found" === TB.status ? (0, oB.jsx)(JB.e, {
        name: "check",
        className: "StoreRecipientStatus StoreRecipientStatusFound"
      }) : null
    }

    function fV(BB) {
      var TB;
      let {
        selfName: dB,
        giftRecipient: yB,
        suggestionsVersion: YB,
        pulseSignal: gB,
        disabled: kB
      } = BB;
      const {
        t: LB
      } = (0, lB.z)(), OB = (0, EV.k)(), DB = (0, VB.useRef)(null), uB = (0, VB.useRef)(null), {
        query: vB,
        via: mB,
        recipient: iB,
        recipientCosmetics: tB
      } = yB, fB = (0, pV.k)(vB), sB = (0, VB.useMemo)((() => {
        const BB = EB.featureFlags.useSocialFeatures ? OB.friends.filter((BB => !BB.isError)) : [];
        return (0, pV.g)({
          onlineFriends: (0, EV.f)(BB),
          recentRecipients: YV(),
          friends: BB,
          selfName: dB,
          max: 8
        })
      }), [OB.friends, dB, YB]), MB = vB.trim().toLowerCase(), zB = "search" !== mB && MB ? sB.find((BB => BB.name.toLowerCase() === MB)) : void 0, wB = zB && "prefilled" === mB ? [zB, ...sB.filter((BB => BB !== zB))] : sB, UB = "" !== MB && !zB, FB = UB ? vB : "", KB = wB.length > 0;
      (0, VB.useEffect)((() => {
        DB.current && DB.current.value !== FB && (DB.current.value = FB)
      }), [FB]), (0, VB.useEffect)((() => {
        DB.current && (DB.current.disabled = kB)
      }), [kB, gB]);
      const rB = (0, VB.useRef)(0);

      function cB() {
        "self" !== fB && (0, CB.f)({
          id: "store.mode",
          value: "self"
        }), yB.clear()
      }

      function SB(BB) {
        var TB, dB;
        if (kB) return;
        if (" " === BB.key || "Enter" === BB.key) return BB.preventDefault(), void BB.currentTarget.click();
        const VB = Array.from(null !== (TB = null === (dB = uB.current) || void 0 === dB ? void 0 : dB.querySelectorAll("[role=radio]")) && void 0 !== TB ? TB : []),
          yB = VB.indexOf(BB.currentTarget);
        let pB;
        "ArrowRight" === BB.key || "ArrowDown" === BB.key ? pB = VB[(yB + 1) % VB.length] : "ArrowLeft" === BB.key || "ArrowUp" === BB.key ? pB = VB[(yB - 1 + VB.length) % VB.length] : "Home" === BB.key ? pB = VB[0] : "End" === BB.key && (pB = VB[VB.length - 1]), pB && (BB.preventDefault(), pB.focus(), pB.click())
      }(0, VB.useEffect)((() => {
        var BB;
        gB > rB.current && !kB && (rB.current = gB, null === (BB = DB.current) || void 0 === BB || BB.focus())
      }), [gB, kB]);
      const PB = "self" === fB,
        QB = null !== (TB = null === zB || void 0 === zB ? void 0 : zB.name) && void 0 !== TB ? TB : null,
        RB = "error" === iB.status ? iB.error : null,
        aB = "store:giftRecipientLookupFailed" === RB;
      return (0, oB.jsxs)("div", {
        className: pB()("StoreRecipientStrip", {
          StoreRecipientStripDisabled: kB,
          StoreRecipientStripNoChips: !KB
        }),
        children: [(0, oB.jsx)("span", {
          className: "StoreRecipientLabel",
          "aria-hidden": !0,
          children: LB("store:buyingFor")
        }), (0, oB.jsxs)("div", {
          ref: uB,
          className: "StoreRecipientRadios",
          role: "radiogroup",
          "aria-label": LB("store:whoIsItFor"),
          children: [(0, oB.jsxs)("div", {
            role: "radio",
            "data-pad-focusable": !0,
            "aria-checked": PB,
            tabIndex: kB || !PB && null !== QB ? -1 : 0,
            className: pB()("StoreRecipientMe", {
              StoreRecipientChecked: PB
            }),
            onClick: () => {
              kB || cB()
            },
            onKeyDown: SB,
            children: [(0, oB.jsx)(JB.e, {
              name: "user"
            }), " ", LB("store:me")]
          }), KB && (0, oB.jsx)("div", {
            className: "StoreRecipientChips",
            children: wB.map((BB => {
              const TB = BB === zB;
              return (0, oB.jsx)("div", {
                role: "radio",
                "data-pad-focusable": !0,
                "aria-checked": TB,
                tabIndex: !kB && TB ? 0 : -1,
                title: BB.name,
                className: pB()("StoreRecipientChip", {
                  StoreRecipientChecked: TB
                }),
                onClick: () => {
                  kB || function(BB) {
                    "gift" !== fB && (0, CB.f)({
                      id: "store.mode",
                      value: "gift"
                    }), yB.choose(BB.name, BB.kind)
                  }(BB)
                },
                onKeyDown: SB,
                children: (0, oB.jsx)(mV.i, {
                  playerSocialPreview: NV(BB, TB ? tB : null),
                  opensProfileCard: !1,
                  isFriend: null !== BB.friend,
                  hideFriendBadge: !0,
                  showLocation: null !== BB.friend,
                  status: null === BB.friend ? null : void 0,
                  trailing: TB ? (0, oB.jsx)(tV, {
                    recipient: iB
                  }) : void 0
                })
              }, BB.name)
            }))
          })]
        }), (0, oB.jsxs)("div", {
          className: pB()("StoreRecipientSearch", {
            StoreRecipientChecked: UB,
            StoreRecipientSearchPulse: gB > 0 && !UB,
            StoreRecipientSearchError: null !== RB && !aB
          }),
          onClick: () => {
            var BB;
            null === (BB = DB.current) || void 0 === BB || BB.focus()
          },
          children: [UB && "found" === iB.status && tB && (0, oB.jsx)(iV, {
            cosmetics: tB
          }), !(UB && "found" === iB.status && tB) && (0, oB.jsx)(JB.e, {
            name: "magnifying-glass",
            className: "StoreRecipientSearchIcon"
          }), (0, oB.jsx)(NB.e, {
            className: "StoreRecipientSearchInput",
            domRef: DB,
            placeholderText: LB("store:searchName"),
            defaultValue: FB,
            maxLength: IB.e,
            onValueChange: function(BB) {
              "gift" !== fB && BB.trim() && (0, CB.f)({
                id: "store.mode",
                value: "gift"
              }), yB.type(BB)
            },
            onEnter: () => {
              var BB;
              const TB = null === (BB = DB.current) || void 0 === BB ? void 0 : BB.value.trim();
              TB && yB.choose(TB, "typed")
            },
            blurOnEnter: !0
          }), UB && (0, oB.jsx)(tV, {
            recipient: iB
          }), UB && (0, oB.jsx)("div", {
            ...(0, HB._)({
              disabled: kB
            }),
            "aria-label": LB("store:clearRecipient"),
            title: LB("store:clearRecipient"),
            className: "StoreRecipientClear",
            onClick: BB => {
              BB.stopPropagation(), kB || cB()
            },
            children: (0, oB.jsx)(JB.e, {
              name: "xmark"
            })
          })]
        }, gB), RB && (0, oB.jsx)("div", {
          className: pB()("StoreRecipientPopover", {
            StoreRecipientPopoverSoft: aB
          }),
          role: "status",
          children: LB(RB)
        })]
      })
    }
    var sV = dB(2053),
      MV = dB(2001),
      zV = dB(3078),
      wV = dB(2592),
      UV = dB(2034);
    const FV = dB.p + "static/media/superRankPreviewPoster.e64783181b692cc31e08.webp";

    function KV() {
      (0, UV.m)(FV, {
        lowPriority: !1
      })
    }

    function rV(BB) {
      let {
        onBack: TB,
        cta: dB,
        recipient: yB,
        afterCta: pB
      } = BB;
      const {
        t: YB
      } = (0, lB.z)(), [gB, kB] = (0, VB.useState)("starting"), LB = (0, VB.useRef)(null), OB = (0, uT.b)(), DB = (0, VB.useRef)(null), uB = (0, VB.useCallback)((() => {
        const BB = LB.current;
        null !== BB.error && BB.load();
        const TB = BB.play();
        DB.current = TB, TB.catch((BB => {
          (0, zV.e)("Failed to play Super Rank video", BB), OB.current && DB.current === TB && kB("failed")
        }))
      }), [OB]);
      return (0, VB.useEffect)((() => {
        const BB = LB.current;
        let TB;

        function dB() {
          clearTimeout(TB), TB = setTimeout(uB, 3e3)
        }
        return uB(), BB.addEventListener("ended", dB), () => {
          clearTimeout(TB), BB.removeEventListener("ended", dB)
        }
      }), [uB]), (0, oB.jsxs)("div", {
        className: "StoreSuperRankDetail",
        children: [(0, oB.jsxs)("div", {
          className: "StoreDetailHeader",
          children: [(0, oB.jsx)(HB.b, {
            className: "StoreDetailBackButton",
            onClick: TB,
            padBack: !0,
            children: YB("general:back")
          }), (0, oB.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, oB.jsx)(JB.e, {
              name: "bolt"
            }), " ", YB("homePage:superRank")]
          }), yB]
        }), (0, oB.jsxs)("div", {
          className: "StoreSuperRankDetailBody",
          children: [(0, oB.jsxs)("div", {
            className: "StoreSuperRankVideo",
            children: [(0, oB.jsx)("video", {
              ref: LB,
              src: `${FB.clientSideServerUrls.staticUrl}/videos/SuperRankPreview.mp4`,
              poster: FV,
              muted: !0,
              playsInline: !0,
              controls: "playing" === gB,
              onPlaying: () => {
                kB("playing")
              },
              onError: () => {
                kB("failed")
              }
            }), ("failed" === gB || "loading" === gB) && (0, oB.jsx)("div", {
              className: "StoreSuperRankPlay",
              children: (0, oB.jsx)(HB.d, {
                ariaLabel: YB("general:play"),
                loading: "loading" === gB,
                onClick: () => {
                  kB("loading"), uB()
                },
                touchPressOn: "pointerup",
                children: (0, oB.jsx)(JB.e, {
                  name: "play"
                })
              })
            })]
          }), (0, oB.jsxs)("div", {
            className: "StoreSuperRankDetailSide",
            children: [(0, oB.jsx)("div", {
              className: "StoreSuperRankDetailTable",
              children: (0, oB.jsx)(wV.b, {})
            }), (0, oB.jsxs)("div", {
              className: "StoreTileActions",
              children: [dB, pB]
            })]
          })]
        })]
      })
    }
    var IV = dB(2228),
      cV = dB(3031),
      SV = dB(2567);
    const PV = [HV.t.yellow, HV.t.green, HV.t.aqua, HV.t.blue, HV.t.purple, HV.t.red];

    function QV(BB) {
      return "needsRecipient" === BB || "lookingUp" === BB || "gift" === BB || "recipientOwns" === BB || "recipientSharesOwned" === BB
    }

    function RV(BB) {
      const {
        onKeyDown: TB,
        ...dB
      } = (0, HB._)();
      return {
        ...dB,
        "aria-label": BB,
        onKeyDown: BB => {
          BB.target === BB.currentTarget && (null === TB || void 0 === TB || TB(BB))
        }
      }
    }

    function aV(BB) {
      let {
        text: TB
      } = BB;
      return (0, oB.jsx)("span", {
        className: "StoreRainbowText",
        children: Array.from(TB).map(((BB, TB) => (0, oB.jsx)("span", {
          style: {
            color: PV[TB % PV.length]
          },
          children: BB
        }, TB)))
      })
    }
    const ZV = {
      recipientOwns: "store:alreadyOwns",
      sharesOwned: "store:sharesOwned",
      recipientSharesOwned: "store:recipientSharesOwned"
    };

    function XV(BB) {
      let {
        state: TB,
        item: dB,
        price: VB,
        busy: yB,
        highlight: YB = !1,
        onAct: gB,
        onNeedRecipient: kB,
        onLogin: LB = VV.d
      } = BB;
      const {
        t: OB
      } = (0, lB.z)(), DB = "superRank" === dB ? SB.p.product.days : null, uB = BB => null === DB ? OB(BB ? "general:gift" : "general:buy") : OB(BB ? "store:giftDays" : "store:buyDays", {
        days: DB
      }), EB = (BB, TB) => (0, oB.jsxs)(oB.Fragment, {
        children: [TB && (0, oB.jsx)("span", {
          className: "StoreCtaIcon",
          children: TB
        }), null === BB && (0, oB.jsx)("span", {
          className: "StoreCtaLabel StoreCtaLabelPending"
        }), null !== BB && (0, oB.jsx)("span", {
          className: "StoreCtaLabel",
          title: BB,
          children: BB
        }), (0, oB.jsxs)("span", {
          className: "StoreCtaPrice",
          children: ["\xb7", (0, oB.jsx)(MV.e, {
            amount: VB
          })]
        })]
      });
      let vB;
      switch (TB) {
        case "pending":
          vB = (0, oB.jsx)(HB.k, {
            className: "StoreCtaButton",
            disabled: !0,
            children: EB(null)
          });
          break;
        case "login":
          vB = (0, oB.jsx)(HB.k, {
            className: "StoreCtaButton",
            onClick: LB,
            children: EB(OB("store:logIn"))
          });
          break;
        case "owned":
          vB = (0, oB.jsx)(HB.g, {
            className: "StoreCtaButton",
            onClick: () => {
              sB.d.set({
                openEverythingMenuName: eT.m.CUSTOMISATION
              })
            },
            children: (0, oB.jsxs)("span", {
              className: "StoreCtaLabel",
              children: [(0, oB.jsx)(JB.e, {
                name: "shirt"
              }), " ", OB("store:equip")]
            })
          });
          break;
        case "recipientOwns":
        case "sharesOwned":
        case "recipientSharesOwned":
          vB = (0, oB.jsx)(HB.k, {
            className: "StoreCtaButton",
            disabled: !0,
            children: (0, oB.jsx)("span", {
              className: "StoreCtaLabel",
              children: OB(ZV[TB])
            })
          });
          break;
        case "needsRecipient":
        case "lookingUp":
        case "gift":
          vB = (0, oB.jsx)(HB.k, {
            className: "StoreCtaButton",
            disabled: "needsRecipient" === TB || null === VB,
            loading: "lookingUp" === TB || yB,
            onClick: gB,
            analyticsClick: {
              id: "store.gift",
              value: dB
            },
            children: EB(uB(!0), pV.d)
          });
          break;
        case "buy":
        case "recharge":
          vB = (0, oB.jsx)(HB.k, {
            className: "StoreCtaButton",
            loading: yB,
            disabled: null === VB,
            onClick: gB,
            analyticsClick: {
              id: "store.buy",
              value: dB
            },
            children: EB(uB(!1))
          })
      }
      return (0, oB.jsx)("div", {
        className: pB()("StoreCta", {
          StoreCtaHighlight: YB
        }),
        onClick: BB => {
          BB.stopPropagation(), "needsRecipient" === TB && kB()
        },
        children: vB
      })
    }

    function WV() {
      const {
        t: BB
      } = (0, lB.z)();
      return (0, oB.jsxs)("ul", {
        className: "StorePerks",
        children: [(0, oB.jsxs)("li", {
          children: [(0, oB.jsx)(JB.e, {
            name: "check"
          }), (0, oB.jsx)(aV, {
            text: BB("store:colourfulNames")
          })]
        }), (0, oB.jsxs)("li", {
          children: [(0, oB.jsx)(JB.e, {
            name: "check"
          }), BB("store:perkCapes")]
        }), (0, oB.jsxs)("li", {
          children: [(0, oB.jsx)(JB.e, {
            name: "check"
          }), BB("store:perkNoAdverts")]
        }), (0, oB.jsxs)("li", {
          children: [(0, oB.jsx)(JB.e, {
            name: "check"
          }), BB("store:perkFriends", {
            count: (0, WB.e)(["super"])
          })]
        })]
      })
    }

    function hV(BB) {
      let {
        daysLeft: TB,
        totalDays: dB,
        urgent: VB
      } = BB;
      const {
        t: yB
      } = (0, lB.z)(), JB = dB > 0 ? Math.min(1, Math.max(.03, TB / dB)) : 1;
      return (0, oB.jsxs)("div", {
        className: pB()("StoreSuperRankMeterArea", {
          StoreSuperRankMeterUrgent: VB
        }),
        children: [(0, oB.jsx)("span", {
          className: "StoreSuperRankDaysLeft",
          children: 1 === TB ? yB("store:oneDayLeft") : yB("store:daysLeft", {
            days: TB
          })
        }), (0, oB.jsx)("div", {
          className: "StoreSuperRankMeter",
          children: (0, oB.jsx)("i", {
            style: {
              width: 100 * JB + "%"
            }
          })
        })]
      })
    }

    function CV(BB) {
      let {
        state: TB,
        urgent: dB,
        daysLeft: VB,
        totalDays: yB,
        recipientHasSuperRank: YB,
        busy: gB,
        highlight: kB,
        onOpen: LB,
        onAct: OB,
        onNeedRecipient: DB,
        onLogin: uB
      } = BB;
      const {
        t: HB
      } = (0, lB.z)(), EB = QV(TB), {
        days: vB
      } = SB.p.product, mB = HB("store:recipientHasSuperRank", {
        giftDays: vB
      });
      return (0, oB.jsxs)("div", {
        className: pB()("StoreTile StoreSuperRankTile", {
          StoreTileGift: EB,
          StoreSuperRankTileUrgent: "recharge" === TB && dB,
          StoreSuperRankTileWithChip: YB,
          StoreSuperRankTileGiftReady: "gift" === TB
        }),
        ...RV(HB("homePage:superRank")),
        "data-store-item": "superRank",
        onPointerEnter: KV,
        onFocus: KV,
        onClick: LB,
        children: [(0, oB.jsx)("div", {
          className: "StoreSuperRankArt",
          style: {
            backgroundImage: `url(${uV.c})`
          }
        }), EB && (0, oB.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, oB.jsxs)("div", {
          className: "StoreTileContent",
          children: [YB && (0, oB.jsx)("span", {
            className: "StoreChip StoreChipGift",
            title: mB,
            children: mB
          }), (0, oB.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, oB.jsx)(JB.e, {
              name: "bolt"
            }), " ", HB("homePage:superRank")]
          }), EB && (0, oB.jsx)("div", {
            className: "StoreTilePitch",
            children: HB("store:giftPitch", {
              days: vB
            })
          }), "recharge" === TB && (0, oB.jsx)(hV, {
            daysLeft: VB,
            totalDays: yB,
            urgent: dB
          }), (0, oB.jsx)(WV, {}), (0, oB.jsxs)("div", {
            className: "StoreTileActions",
            children: [(0, oB.jsx)(XV, {
              state: TB,
              item: "superRank",
              price: SB.p.price,
              busy: gB,
              highlight: kB,
              onAct: OB,
              onNeedRecipient: DB,
              onLogin: uB
            }), "needsRecipient" === TB && (0, oB.jsx)("span", {
              className: "StoreTileNote StoreTileNoteGift",
              children: HB("store:pickRecipientFirst")
            }), "recharge" === TB && dB && (0, oB.jsx)("span", {
              className: "StoreTileNote StoreSuperRankEnding",
              children: 1 === VB ? HB("store:endsInOneDay") : HB("store:endsInDays", {
                days: VB
              })
            })]
          })]
        })]
      })
    }
    const GV = {
      standard: "StorePackTileStandard",
      enhanced: "StorePackTileEnhanced",
      premium: "StorePackTilePremium"
    };

    function qV(BB) {
      var TB;
      let {
        pack: dB,
        state: yB,
        busy: YB,
        onOpen: gB,
        onAct: kB,
        onNeedRecipient: LB,
        onLogin: OB
      } = BB;
      const {
        t: DB
      } = (0, lB.z)(), uB = Ad.c[dB], HB = dV.n[dB], EB = (0, uV.k)(dB), vB = (0, VB.useRef)(null);
      (0, SV.h)(dB, vB);
      const mB = QV(yB),
        iB = null !== (TB = uB.displayName) && void 0 !== TB ? TB : dB,
        NB = (0, cV.e)((() => {
          (0, IV.d)();
          const BB = (0, SV.e)(dB);
          void 0 !== BB && (0, UV.m)((0, SV.b)(BB))
        })),
        [tB] = (0, VB.useState)(OV.j);
      return (0, oB.jsxs)("div", {
        className: pB()("StoreTile StorePackTile", uB.tier && GV[uB.tier], {
          StorePackTileOwned: "owned" === yB,
          StorePackTileRecipientOwns: "recipientOwns" === yB,
          StoreTileGift: mB
        }),
        ...RV(iB),
        ref: vB,
        "data-store-item": dB,
        onClick: gB,
        onPointerMove: BB => {
          "mouse" !== BB.pointerType || 0 === BB.movementX && 0 === BB.movementY || tB || NB.start()
        },
        onPointerLeave: NB.cancel,
        children: [HB && (0, oB.jsx)(HB, {}), (0, oB.jsx)("div", {
          className: "StorePackCharacters",
          children: EB.map((BB => (0, oB.jsx)("div", {
            className: "StorePackCharacter",
            style: {
              backgroundImage: `url(${(0,uV.g)(BB)})`
            }
          }, BB)))
        }), (0, oB.jsx)("div", {
          className: "StoreTileScrim"
        }), mB && (0, oB.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, oB.jsxs)("div", {
          className: "StoreTileContent",
          children: [(0, oB.jsx)("div", {
            className: "StoreTileTitle",
            children: iB
          }), (0, oB.jsxs)("div", {
            className: "StoreTileMeta",
            children: [DB("store:itemCount", {
              count: (0, sV.e)(dB)
            }), "owned" === yB && (0, oB.jsxs)("span", {
              className: "StoreTileOwned",
              children: [" \xb7 ", (0, oB.jsx)(JB.e, {
                name: "check"
              }), " ", DB("general:owned")]
            })]
          }), (0, oB.jsx)(XV, {
            state: yB,
            item: dB,
            price: (0, SB.h)(dB),
            busy: YB,
            onAct: kB,
            onNeedRecipient: LB,
            onLogin: OB
          })]
        })]
      })
    }
    var xV = dB(2525),
      jV = dB(1229);
    const AV = {
      standard: "StoreCharacterCardStandard",
      enhanced: "StoreCharacterCardEnhanced",
      premium: "StoreCharacterCardPremium"
    };

    function bV(BB) {
      var TB, dB;
      let {
        tile: yB,
        busy: YB,
        highlight: gB,
        onAct: kB,
        onNeedRecipient: LB,
        onLogin: OB
      } = BB;
      const {
        t: DB
      } = (0, lB.z)(), {
        pack: uB,
        state: HB
      } = yB, EB = Ad.c[uB], vB = (0, Ad.d)(uB), mB = dV.n[(0, uV.i)(uB)], iB = null !== (TB = EB.tier) && void 0 !== TB ? TB : "standard", NB = (0, VB.useRef)(null);
      return (0, jV.e)(NB, "standard" !== iB), (0, oB.jsxs)("div", {
        ref: NB,
        className: pB()("StoreCharacterCard", AV[iB], {
          StoreCharacterCardOwned: "owned" === HB || "recipientOwns" === HB,
          StoreCharacterCardGift: QV(HB)
        }),
        "data-store-item": uB,
        children: [(0, oB.jsxs)("div", {
          className: "StoreCharacterArt",
          children: [mB && (0, oB.jsx)(mB, {
            simple: !0
          }), (0, oB.jsx)("div", {
            className: "StoreCharacterHalo"
          }), (0, oB.jsx)("div", {
            className: "StoreCharacterFigure",
            style: {
              backgroundImage: `url(${(0,uV.g)(vB)})`
            }
          }), "owned" === HB && (0, oB.jsx)("span", {
            className: "StoreCharacterOwned",
            title: DB("general:owned"),
            "aria-label": DB("general:owned"),
            children: (0, oB.jsx)(JB.e, {
              name: "check"
            })
          })]
        }), (0, oB.jsxs)("div", {
          className: "StoreCharacterPlate",
          children: [(0, oB.jsx)("div", {
            className: "StoreCharacterName",
            children: null !== (dB = EB.displayName) && void 0 !== dB ? dB : uB
          }), (0, oB.jsx)(XV, {
            state: HB,
            item: uB,
            price: (0, SB.h)(uB),
            busy: YB,
            highlight: gB,
            onAct: kB,
            onNeedRecipient: LB,
            onLogin: OB
          })]
        })]
      })
    }

    function nV(BB) {
      let {
        tiles: TB,
        busy: dB,
        highlightItem: VB,
        onAct: yB,
        onNeedRecipient: pB,
        onLogin: lB
      } = BB;
      return (0, oB.jsx)("div", {
        className: "StoreCharacterGrid",
        children: TB.map((BB => (0, oB.jsx)(bV, {
          tile: BB,
          busy: dB,
          highlight: VB === BB.pack,
          onAct: () => {
            yB(BB.pack)
          },
          onNeedRecipient: pB,
          onLogin: () => {
            lB(BB.pack)
          }
        }, BB.pack)))
      })
    }

    function eV(BB) {
      let {
        title: TB
      } = BB;
      return (0, oB.jsx)("h2", {
        className: "StoreSectionDivider",
        children: (0, oB.jsx)("span", {
          className: "StoreSectionDividerTitle",
          children: TB
        })
      })
    }

    function By(BB) {
      let {
        layout: TB,
        bundleGift: dB,
        superRankDaysLeft: VB,
        superRankTotalDays: yB,
        busy: pB,
        highlightItem: JB,
        onOpen: YB,
        onAct: gB,
        onNeedRecipient: kB,
        onLogin: LB
      } = BB;
      const {
        t: OB
      } = (0, lB.z)(), DB = TB.packs.filter((BB => void 0 === (0, Ad.d)(BB.pack))), uB = TB.packs.filter((BB => void 0 !== (0, Ad.d)(BB.pack)));
      return (0, oB.jsxs)(oB.Fragment, {
        children: [(0, oB.jsx)(xV.b, {
          className: "StoreSuperGems",
          gift: dB
        }), (0, oB.jsx)(eV, {
          title: OB("store:rank")
        }), (0, oB.jsx)(CV, {
          state: TB.superRank.state,
          urgent: TB.superRank.urgent,
          daysLeft: VB,
          totalDays: yB,
          recipientHasSuperRank: TB.recipientHasSuperRank,
          busy: pB,
          highlight: "superRank" === JB,
          onOpen: () => {
            YB("superRank")
          },
          onAct: () => {
            gB("superRank")
          },
          onNeedRecipient: kB,
          onLogin: () => {
            LB("superRank")
          }
        }), (0, oB.jsx)(eV, {
          title: OB("store:bundles")
        }), (0, oB.jsx)("div", {
          className: "StorePackGrid",
          children: DB.map((BB => (0, oB.jsx)(qV, {
            pack: BB.pack,
            state: BB.state,
            busy: pB,
            onOpen: () => {
              YB(BB.pack)
            },
            onAct: () => {
              gB(BB.pack)
            },
            onNeedRecipient: kB,
            onLogin: () => {
              LB(BB.pack)
            }
          }, BB.pack)))
        }), (0, oB.jsx)(eV, {
          title: OB("store:characters")
        }), (0, oB.jsx)(nV, {
          tiles: uB,
          busy: pB,
          highlightItem: JB,
          onAct: gB,
          onNeedRecipient: kB,
          onLogin: LB
        })]
      })
    }

    function Ty(BB) {
      let {
        state: TB,
        mode: dB,
        giftName: VB,
        busy: yB,
        highlight: pB,
        purchaseError: JB,
        onBack: YB,
        onChooseRecipient: gB,
        onAct: kB,
        onLogin: LB
      } = BB;
      const {
        t: OB
      } = (0, lB.z)();
      return (0, oB.jsx)(rV, {
        onBack: YB,
        recipient: "gift" === dB && (0, oB.jsxs)(oB.Fragment, {
          children: [VB && (0, oB.jsxs)("span", {
            className: "StoreDetailRecipient",
            title: OB("store:giftFor", {
              name: VB
            }),
            children: [pV.d, " ", OB("store:giftFor", {
              name: VB
            })]
          }), !VB && (0, oB.jsxs)("div", {
            ...(0, HB._)(),
            className: "StoreDetailRecipient StoreDetailRecipientChoose",
            onClick: gB,
            children: [pV.d, " ", OB("store:chooseRecipient")]
          })]
        }),
        cta: (0, oB.jsx)(XV, {
          state: TB,
          item: "superRank",
          price: SB.p.price,
          busy: yB,
          highlight: pB,
          onAct: kB,
          onNeedRecipient: gB,
          onLogin: LB
        }),
        afterCta: (0, oB.jsx)(oB.Fragment, {
          children: JB && (0, oB.jsx)("span", {
            className: "StoreTileNote StoreTileNoteError",
            children: OB(JB)
          })
        })
      })
    }
    const dy = {
        kind: "board"
      },
      Vy = [...Ad.n, ...Ad.l];
    let yy = !1;

    function py(BB) {
      return "superRank" === BB.kind ? "superRank" : "pack" === BB.kind ? BB.pack : null
    }

    function ly(BB) {
      return "found" === BB.status || "error" === BB.status && "store:giftRecipientLookupFailed" === BB.error ? BB.name : null
    }(0, aB.p)(bd.prefetchPremiumCurrencyBundles);
    const Jy = (0, VB.memo)((function(BB) {
      var TB, yB;
      let {
        show: JB
      } = BB;
      const {
        t: YB
      } = (0, lB.z)(), {
        userContext: gB
      } = (0, OB.b)(), kB = gB !== UB.NULL_USER_CONTEXT, LB = gV(gB), [DB, HB] = (0, uB.e)(), {
        page: EB,
        urlMode: vB,
        goTo: mB
      } = (0, oV.c)(), iB = py(EB), {
        openEverythingMenuName: NB,
        gameState: tB
      } = (0, sB.m)(["openEverythingMenuName", "gameState"]), fB = null !== NB;
      ! function(BB, TB) {
        const [yB] = (0, VB.useState)(OV.j), [pB, lB] = (0, VB.useState)(!1);
        yB && TB && !pB && lB(!0);
        const JB = (0, yd.r)(),
          YB = yB && pB && BB && !JB;
        (0, VB.useEffect)((() => {
          if (!YB) return;
          let BB = null,
            TB = null,
            VB = null;
          const yB = () => !document.hasFocus() || document.activeElement instanceof HTMLIFrameElement || (0, bd.isXsollaCheckoutInControl)(),
            pB = () => {
              var dB;
              null === (dB = VB) || void 0 === dB || dB(), VB = null, null !== BB && (clearTimeout(BB), BB = null), null !== TB && (clearTimeout(TB), TB = null)
            },
            lB = () => {
              (0, kV.n)(!1), (0, kV.m)(!1), pB(), BB = setTimeout((() => {
                BB = null, VB = (0, LV.e)((() => {
                  VB = null, yB() ? lB() : ((0, kV.n)(!0), TB = setTimeout((() => {
                    TB = null, VB = (0, LV.e)((() => {
                      VB = null, yB() ? lB() : (0, kV.m)(!0)
                    }))
                  }), 3e3), Promise.resolve().then((() => dB(4064))).then((BB => {
                    BB.startBackgroundGameSetup()
                  }), (BB => {
                    console.warn("Background game setup: its chunk failed to load", BB)
                  })))
                }))
              }), 2e3)
            };
          for (const dB of DV) window.addEventListener(dB, lB, {
            capture: !0,
            passive: !0
          });
          return lB(), () => {
            for (const BB of DV) window.removeEventListener(BB, lB, {
              capture: !0
            });
            pB(), (0, kV.n)(!1), (0, kV.m)(!1)
          }
        }), [YB])
      }(JB && fB, "pack" === EB.kind);
      const MB = "landingPage" === tB;
      (0, VB.useEffect)((() => {
        fB && (0, bd.prefetchPremiumCurrencyBundles)()
      }), [fB]), (0, VB.useEffect)((() => {
        fB && !JB && MB && (0, uV.p)()
      }), [fB, JB, MB]);
      const [zB, wB] = (0, VB.useState)(0), [FB, KB] = (0, VB.useState)(null), [rB, IB] = (0, VB.useState)(null), [cB, PB] = (0, VB.useState)(null), [QB, XB] = (0, VB.useState)(null), WB = (0, VB.useRef)(null), hB = (0, VB.useRef)(null), GB = (0, VB.useRef)(!1), qB = (0, aB.y)(), xB = (0, VB.useRef)(0), jB = (0, VB.useRef)(!1);

      function AB() {
        wB((BB => BB + 1))
      }(0, VB.useEffect)((() => {
        if (JB) {
          if (yy = !0, qB && qB.seq !== xB.current) {
            var BB, TB;
            xB.current = qB.seq;
            const dB = (0, aB.c)(qB);
            vB || mB(dB), XB(qB.highlight && null !== (BB = null !== (TB = py(dB)) && void 0 !== TB ? TB : qB.openItem) && void 0 !== BB ? BB : null), IB(null), "gift" === qB.mode && qB.giftRecipientName ? LB.choose(qB.giftRecipientName, "prefilled") : "current" !== qB.mode && LB.clear(), "gift" !== qB.mode || qB.giftRecipientName || AB(), (0, CB.f)({
              id: "store.open",
              value: qB.source
            })
          } else jB.current || (0, CB.f)({
            id: "store.open",
            value: "menuTab"
          });
          jB.current = !0
        } else jB.current = !1
      }), [JB, qB]), (0, VB.useEffect)((() => {
        if (!QB) return;
        const BB = setTimeout((() => {
          XB(null)
        }), 4e3);
        return () => {
          clearTimeout(BB)
        }
      }), [QB]), (0, VB.useEffect)((() => {
        const BB = WB.current;
        var TB;
        if (JB && BB)
          if (iB) hB.current = iB, null === (TB = BB.querySelector(".StoreDetailBackButton, .CosmeticShopDetailBackButton")) || void 0 === TB || TB.focus();
          else if (hB.current) {
          var dB;
          null === (dB = BB.querySelector(`[data-store-item="${hB.current}"]`)) || void 0 === dB || dB.focus(), hB.current = null
        }
      }), [iB, JB]), (0, VB.useEffect)((() => {
        IB(null)
      }), [LB.query]), (0, VB.useEffect)((() => {
        if (!cB) return;
        const BB = setTimeout((() => {
          PB(null)
        }), 8e3);
        return () => {
          clearTimeout(BB)
        }
      }), [cB]);
      const bB = gB.superRankInfo,
        nB = bB ? (0, RB.oc)(bB) : 0,
        eB = (0, pV.f)(nB),
        BT = nB > 0,
        TT = gB.isLoggedIn(),
        dT = gB.getOwnedCosmeticPacks(),
        VT = (0, pV.k)(LB.query),
        yT = (0, pV.e)({
          mode: VT,
          loggedIn: kB ? TT : null,
          hasSuperRank: BT,
          superRankDaysLeft: eB,
          ownedPacks: dT,
          packs: Vy,
          recipient: LB.recipient
        });
      (0, VB.useEffect)((() => {
        if (!TT || !JB) return;
        const BB = (0, aB.w)();
        var TB;
        BB && ("superRank" === (TB = BB.item) || Vy.includes(TB)) && ((0, CB.f)({
          id: "store.login_resume",
          value: BB.item
        }), (0, aB.h)({
          mode: BB.mode,
          source: "loginResume",
          giftRecipientName: "gift" === BB.mode && BB.recipient ? BB.recipient : void 0,
          openItem: BB.item,
          highlight: !0
        }))
      }), [TT, JB]);
      const pT = (0, pV.o)({
        hasSuperRank: TT && BT,
        superRankDaysLeft: eB,
        openedThisSession: yy || JB
      });
      if ((0, VB.useEffect)((() => {
          (0, aB.s)(pT)
        }), [pT]), !JB || !(0, ZB.siteSupportsPurchases)()) return null;
      const lT = HB > DB && DB <= 700,
        JT = !lT && HB <= 420,
        YT = "gift" === VT ? ly(LB.recipient) : null,
        gT = null !== FB;

      function oT(BB) {
        (0, aB.n)({
          item: BB,
          mode: VT,
          recipient: "gift" === VT ? LB.query.trim() : ""
        }), (0, VV.d)()
      }

      function kT(BB, TB) {
        (0, CB.f)({
          id: "store.purchase_done",
          value: `${TB?"gift":"self"}:${BB}`
        }), TB && (LB.recordGift(TB.name, BB), LT(TB))
      }

      function LT(BB) {
        ! function(BB) {
          try {
            FT.j.setItem(lV, (0, pV.s)(YV(), BB))
          } catch {}
        }({
          name: BB.name,
          cosmetics: BB.cosmetics
        }), mB(dy), PB((TB => {
          var dB;
          return {
            name: BB.name,
            seq: (null !== (dB = null === TB || void 0 === TB ? void 0 : TB.seq) && void 0 !== dB ? dB : 0) + 1
          }
        }))
      }
      async function OT(BB) {
        var TB, dB;
        if (GB.current) return;
        if (!TT) return void oT(BB);
        IB(null), XB(null);
        const VB = "gift" === VT ? {
          name: ly(LB.recipient),
          cosmetics: LB.recipientCosmetics
        } : null;
        if (VB && !VB.name) return void AB();
        const yB = "superRank" === BB ? SB.p.id : (0, SB.e)(BB);
        GB.current = !0;
        const pB = await (0, yV.b)(yB, null !== (TB = null === VB || void 0 === VB ? void 0 : VB.name) && void 0 !== TB ? TB : null);
        if (GB.current = !1, !pB) return;
        KB(BB);
        const lB = await ed.c.purchase(yB, null !== (dB = null === VB || void 0 === VB ? void 0 : VB.name) && void 0 !== dB ? dB : null);
        KB(null), lB ? IB(lB) : (kT(BB, VB), VB || (await (0, BV.flushClientAnalyticsEvents)(), (0, nd.refreshWithoutConfirmation)("superRank" === BB ? "/super-rank-welcome" : `/pack-welcome/${BB}`)))
      }
      const DT = pB()("Store", {
        StoreGift: "gift" === VT,
        StorePortrait: lT,
        StoreCompact: JT
      });
      if ("pack" === EB.kind) {
        const BB = EB.pack,
          TB = yT.packs.find((TB => TB.pack === BB));
        return (0, oB.jsx)("div", {
          ref: WB,
          className: "CosmeticShopContainer",
          children: (0, oB.jsx)(dV.h, {
            pack: BB,
            onBack: () => {
              mB(dy)
            },
            onPurchased: TB => {
              kT(BB, TB ? {
                name: TB,
                cosmetics: null
              } : null)
            },
            giftCta: "gift" === VT && YT && TB && (0, oB.jsxs)(oB.Fragment, {
              children: [(0, oB.jsx)(XV, {
                state: TB.state,
                item: BB,
                price: (uT = BB, "superRank" === uT ? SB.p.price : (0, SB.h)(uT)),
                busy: gT,
                onAct: () => {
                  OT(BB)
                },
                onNeedRecipient: () => {
                  mB(dy), AB()
                }
              }), rB && (0, oB.jsx)("span", {
                className: "CosmeticShopGiftError SmallTextBold",
                children: YB(rB)
              })]
            }),
            ownedPacks: dT,
            startAsGift: "gift" === VT,
            initialGiftRecipient: "gift" === VT ? null !== YT && void 0 !== YT ? YT : LB.query.trim() : "",
            highlightCta: QB === BB
          }, BB)
        })
      }
      var uT;
      return "superRank" === EB.kind ? (0, oB.jsx)("div", {
        ref: WB,
        className: pB()(DT, "StoreDetailView"),
        children: (0, oB.jsx)(Ty, {
          state: yT.superRank.state,
          mode: VT,
          giftName: YT,
          busy: gT,
          highlight: "superRank" === QB,
          purchaseError: rB,
          onBack: () => {
            mB(dy)
          },
          onChooseRecipient: () => {
            mB(dy), AB()
          },
          onAct: () => {
            OT("superRank")
          },
          onLogin: () => {
            oT("superRank")
          }
        })
      }) : (0, oB.jsxs)("div", {
        ref: WB,
        className: DT,
        children: [(0, oB.jsx)("div", {
          className: "StoreTopRow",
          children: (0, oB.jsx)(fV, {
            selfName: kB ? gB.getPlayerName() : "",
            giftRecipient: LB,
            suggestionsVersion: null !== (TB = null === cB || void 0 === cB ? void 0 : cB.seq) && void 0 !== TB ? TB : 0,
            pulseSignal: zB,
            disabled: gT || !kB
          })
        }), cB && (0, oB.jsxs)("div", {
          className: "StoreNotice StoreNoticeGiftSent",
          onClick: () => {
            PB(null)
          },
          children: [(0, oB.jsx)(TV.c, {
            showSignal: cB.seq
          }), pV.d, " ", YB("store:giftSent", {
            name: cB.name
          })]
        }, cB.seq), !cB && rB && (0, oB.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: YB(rB)
        }), (0, oB.jsx)(By, {
          layout: yT,
          bundleGift: "gift" === VT ? {
            recipientName: YT,
            lookingUp: "pending" === LB.recipient.status,
            busy: gT,
            onNeedRecipient: AB,
            onSent: BB => {
              (0, CB.f)({
                id: "store.purchase_done",
                value: "gift:superGems"
              }), LT({
                name: BB,
                cosmetics: LB.recipientCosmetics
              })
            }
          } : null,
          superRankDaysLeft: eB,
          superRankTotalDays: null !== (yB = null === bB || void 0 === bB ? void 0 : bB.superRankForDays) && void 0 !== yB ? yB : 0,
          busy: gT,
          highlightItem: QB,
          onOpen: function(BB) {
            (0, CB.f)({
              id: "store.item_open",
              value: BB
            }), mB((0, aB.e)(BB))
          },
          onAct: OT,
          onNeedRecipient: AB,
          onLogin: oT
        })]
      })
    }));
    var Yy = dB(2305),
      gy = dB(8175),
      oy = dB(2366),
      ky = dB(2195),
      Ly = dB(2258),
      Oy = dB(2264),
      Dy = dB(2271),
      uy = dB(2355),
      Hy = dB(2338),
      Ey = dB(2328),
      vy = dB(2063),
      my = dB(2094),
      iy = dB(2088),
      Ny = dB(1788),
      ty = dB(2277),
      fy = dB(2097);

    function sy(BB) {
      let {
        show: TB
      } = BB;
      return TB ? (0, oB.jsx)(My, {}) : null
    }

    function My() {
      const {
        t: BB
      } = (0, lB.z)(), {
        followsLeader: TB
      } = (0, ky.f)(), {
        loading: dB,
        friends: yB,
        requests: YB,
        invites: gB
      } = (0, EV.k)(), {
        userContext: kB
      } = (0, OB.b)(), [LB, DB] = (0, VB.useState)(fy.i);
      (0, VB.useEffect)((() => {
        (0, fy.b)()
      }), []);
      const uB = YB.map((BB => BB.name)),
        {
          state: EB,
          recentRequesters: vB
        } = (0, Hy.o)(),
        mB = new Map([...("loaded" === EB.status ? EB.recentPlayers : []).map((BB => [BB.preview.name, BB])), ...vB.map((BB => [BB.name, BB]))]),
        iB = (0, VB.useRef)(null),
        [fB, sB] = (0, VB.useState)(""),
        [MB, zB] = (0, VB.useState)("Enter"),
        [wB, UB] = (0, VB.useState)(null);

      function FB() {
        fB && (zB("Loading"), (0, iy.f)(fB, "social_menu").then((BB => {
          if (iB.current) switch (BB.kind) {
            case "sent":
              zB("Success");
              break;
            case "becameFriends":
              zB("BecameFriends");
              break;
            case "failed":
              UB(BB.message), zB("Error")
          }
        })))
      }
      return (0, VB.useEffect)((() => {
        if ("Enter" === MB || "Loading" === MB) return;
        const BB = setTimeout((() => {
          iB.current.value = "", sB(""), zB("Enter")
        }), "Success" === MB ? 1e3 : 4e3);
        return () => {
          clearTimeout(BB)
        }
      }), [MB]), (0, oB.jsx)("div", {
        className: "SocialMenu",
        children: (0, oB.jsxs)("div", {
          className: "SocialMenuInner",
          children: [(0, oB.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, oB.jsxs)("div", {
              className: "SocialMenuBox SocialMenuAddFriend",
              children: [(0, oB.jsx)(Dy.e, {
                label: BB("socialBar:addFriend")
              }), (0, oB.jsxs)("div", {
                className: "AddFriendBody",
                children: [(0, oB.jsxs)("div", {
                  className: pB()("AddFriendBodyOverlay", {
                    [`AddFriendBodyOverlay${MB}`]: !0
                  }),
                  children: ["Loading" === MB && (0, oB.jsx)(tB.b, {}), "Success" === MB && (0, oB.jsx)(JB.e, {
                    name: "check"
                  }), "BecameFriends" === MB && (0, oB.jsx)(oB.Fragment, {
                    children: BB("socialBar:nowFriends", {
                      playerName: fB
                    })
                  }), "Error" === MB && wB && (0, oB.jsx)(oB.Fragment, {
                    children: BB(wB.translationKey, wB.params)
                  })]
                }), (0, oB.jsxs)("div", {
                  className: "PlayerSearch",
                  children: [(0, oB.jsx)(NB.e, {
                    className: "PlayerSearchInput",
                    placeholderText: BB("socialBar:enterPlayerName"),
                    domRef: iB,
                    onValueChange: BB => {
                      sB((0, IB.n)(BB)), iB.current.value = (0, IB.n)(BB)
                    },
                    onEnter: () => {
                      fB && (0, CB.f)({
                        id: "social.add_friend",
                        value: "social_menu"
                      }), FB()
                    }
                  }), (0, oB.jsxs)(HB.d, {
                    className: "PlayerSearchInputButton SmallTextLight",
                    onClick: () => {
                      FB()
                    },
                    analyticsClick: {
                      id: "social.add_friend",
                      value: "social_menu"
                    },
                    children: [(0, oB.jsx)(JB.e, {
                      name: "user-plus"
                    }), " ", BB("socialBar:sendRequest")]
                  })]
                })]
              }), (0, oB.jsx)(ty.b, {
                surface: "social_menu",
                prefetchOnMount: !0
              })]
            }), gB.length > 0 && (0, oB.jsxs)("div", {
              className: "SocialMenuBox SocialMenuInvites",
              children: [(0, oB.jsx)(Dy.e, {
                label: BB("socialBar:invites"),
                meta: gB.length
              }), gB.map((TB => (0, oB.jsxs)("div", {
                className: "SocialMenuInvite",
                children: [(0, oB.jsx)("div", {
                  className: "SocialMenuInviteIcon",
                  children: (0, oB.jsx)(vy.e, {
                    invite: TB
                  })
                }), (0, oB.jsx)("div", {
                  className: "SocialMenuInviteText",
                  children: (0, oB.jsx)(vy.g, {
                    invite: TB
                  })
                }), (0, oB.jsx)(HB.k, {
                  className: "SocialMenuInviteJoin SmallTextLight",
                  onClick: () => {
                    (0, my.f)(TB)
                  },
                  analyticsClick: {
                    id: "social.accept_invite",
                    value: `social_menu:${TB.destination.kind}`
                  },
                  children: BB("general:join")
                }), (0, oB.jsx)(XB.h, {
                  tooltipInner: (0, oB.jsx)(oB.Fragment, {
                    children: BB("general:decline")
                  }),
                  delayShow: 0,
                  children: (0, oB.jsx)(HB.g, {
                    className: "SocialMenuInviteDecline",
                    padDefaultFocus: "invite" === (null === LB || void 0 === LB ? void 0 : LB.kind) && LB.inviteId === TB.id,
                    onClick: () => {
                      EV.e.declineInvite(TB.id)
                    },
                    analyticsClick: {
                      id: "social.decline_invite",
                      value: `social_menu:${TB.destination.kind}`
                    },
                    children: (0, oB.jsx)(JB.e, {
                      name: "xmark"
                    })
                  })
                })]
              }, TB.id)))]
            }), (0, oB.jsxs)("div", {
              className: pB()("SocialMenuBox SocialMenuRequests", {
                SocialMenuBoxEmpty: !dB && 0 === YB.length
              }),
              children: [(0, oB.jsx)(Dy.e, {
                label: (0, oB.jsxs)(oB.Fragment, {
                  children: [(0, oB.jsx)(JB.e, {
                    name: Ny.h
                  }), " ", BB("socialBar:requests")]
                }),
                meta: (0, oB.jsxs)(oB.Fragment, {
                  children: [YB.length, YB.length === WB.p && (0, oB.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: BB("socialBar:limitReached")
                  })]
                })
              }), dB && (0, oB.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, oB.jsx)(tB.b, {})
              }), !dB && 0 === YB.length && (0, oB.jsx)("div", {
                className: "SocialMenuEmpty",
                children: BB("socialBar:noFriendRequests")
              }), !dB && YB.length > 0 && (0, oB.jsx)("div", {
                className: "PlayerRows",
                children: (0, oB.jsx)(Ey.b, {
                  lazyLoadedClassName: "SocialMenuRequestsLazy",
                  observerUpdateDeps: [YB],
                  children: YB.map(((TB, dB) => {
                    const VB = mB.get(TB.name);
                    return (0, oB.jsxs)(Oy.g, {
                      playerSocialPreview: TB,
                      zIndex: YB.length - dB,
                      padDefaultFocus: (0, fy.f)(LB, TB.name, dB),
                      status: VB && (0, oB.jsx)(uy.e, {
                        gameNameWithVariation: VB.gameNameWithVariation,
                        isPrivateLobby: VB.isPrivateLobby
                      }),
                      children: [(0, oB.jsx)(XB.h, {
                        tooltipInner: (0, oB.jsx)(oB.Fragment, {
                          children: BB("general:accept")
                        }),
                        delayShow: 0,
                        children: (0, oB.jsx)(HB.d, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            DB((0, fy.e)(uB, dB)), (0, iy.d)(TB.name, !0, {
                              source: "social_menu",
                              announceFriend: !1
                            })
                          },
                          analyticsClick: {
                            id: "social.accept_friend_request",
                            value: "social_menu"
                          },
                          children: (0, oB.jsx)(JB.e, {
                            name: "check"
                          })
                        })
                      }), (0, oB.jsx)(XB.h, {
                        tooltipInner: (0, oB.jsx)(oB.Fragment, {
                          children: BB("general:decline")
                        }),
                        delayShow: 0,
                        children: (0, oB.jsx)(HB.g, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            DB((0, fy.e)(uB, dB)), (0, iy.d)(TB.name, !1, {
                              source: "social_menu"
                            })
                          },
                          analyticsClick: {
                            id: "social.decline_friend_request",
                            value: "social_menu"
                          },
                          children: (0, oB.jsx)(JB.e, {
                            name: "xmark"
                          })
                        })
                      })]
                    }, `${TB.name}_${TB.isError}`)
                  }))
                })
              })]
            }), (0, oB.jsx)(uy.j, {})]
          }), (0, oB.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, oB.jsxs)("div", {
              className: "SocialMenuBox SocialMenuParty",
              children: [(0, oB.jsx)(Dy.e, {
                label: BB("socialBar:party")
              }), (0, oB.jsx)(Ly.b, {})]
            }), (0, oB.jsxs)("div", {
              className: "SocialMenuBox SocialMenuFriends",
              children: [(0, oB.jsx)(Dy.e, {
                label: (0, oB.jsxs)(oB.Fragment, {
                  children: [(0, oB.jsx)(JB.e, {
                    name: Ny.e
                  }), " ", BB("socialBar:friends")]
                }),
                meta: (0, oB.jsxs)(oB.Fragment, {
                  children: [yB.length, yB.length >= (0, WB.e)(kB.getPlayerRanks()) && (0, oB.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: BB("socialBar:limitReached")
                  })]
                })
              }), dB && (0, oB.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, oB.jsx)(tB.b, {})
              }), !dB && 0 === yB.length && (0, oB.jsx)("div", {
                className: "SocialMenuEmpty",
                children: BB("socialBar:noFriends")
              }), !dB && yB.length > 0 && (0, oB.jsx)("div", {
                className: "PlayerRows",
                children: (0, oB.jsx)(Ey.b, {
                  lazyLoadedClassName: "SocialMenuFriendsLazy",
                  observerUpdateDeps: [yB],
                  children: yB.map(((BB, dB) => (0, oB.jsx)(Oy.g, {
                    playerSocialPreview: BB,
                    isFriend: !0,
                    hideFriendBadge: !0,
                    onFriendRemoved: BB => {
                      EV.e.removeFriendFromState(BB)
                    },
                    zIndex: yB.length - dB,
                    children: (0, oB.jsx)(Oy.c, {
                      friend: BB,
                      followsLeader: TB,
                      analyticsSurface: "social_menu"
                    })
                  }, `${BB.name}_${BB.isError}`)))
                })
              })]
            })]
          })]
        })
      })
    }
    var zy = dB(2180);
    const wy = BB => {
        let {
          action: TB,
          padAction: dB
        } = BB;
        const {
          isTouchScreen: VB
        } = (0, sB.m)(["isTouchScreen"]), yB = (0, yd.r)();
        return VB && !yB ? null : (0, oB.jsx)(AT.d, {
          className: "EverythingMenuTabKey",
          noaAction: TB,
          padHidesKey: !0,
          padMenuShortcut: dB
        })
      },
      Uy = (0, VB.memo)((function() {
        const {
          t: BB
        } = (0, lB.z)(), {
          gameState: TB,
          openEverythingMenuName: dB,
          initSdkSelectorFinished: yB
        } = (0, sB.m)(["gameState", "openEverythingMenuName", "initSdkSelectorFinished"]), {
          userContext: JB
        } = (0, OB.b)(), YB = (0, ZB.siteSupportsPurchases)(), gB = (0, aB.C)(), kB = (BB, TB) => (0, oB.jsx)(wy, {
          action: BB,
          padAction: TB
        }), [LB, DB] = (0, VB.useState)(null), uB = (0, VB.useRef)(null), vB = {
          ..."inGame" === TB ? {} : (0, HB._)({
            focusOnClick: !1
          }),
          ...Dd.e
        }, mB = null !== dB, iB = dB !== eT.m.COSMETIC_SHOP;
        async function NB() {
          await async function() {
            if (!LB) return;
            await LB(), DB(null)
          }(), sB.d.set({
            openEverythingMenuName: null
          })
        }
        const tB = (0, VB.useMemo)((() => "inGame" === TB ? {
          text: BB("settingsMenu:exitGame"),
          onClick: () => {
            (0, gy.d)()
          }
        } : (0, wB.d)() ? {
          text: BB("settingsMenu:exitGame"),
          onClick: () => {
            nB.k.discordActivity().then((BB => {
              BB.exit("User exited the game")
            }))
          }
        } : null), [TB, BB]);
        const fB = (0, oB.jsx)("div", {
          className: "EverythingMenuCloseButtonClickZone",
          onClick: () => {
            NB()
          },
          children: (0, oB.jsx)(HB.i, {
            className: "EverythingMenuCloseButton"
          })
        });
        return (0, oB.jsx)(ud.d, {
          showing: mB,
          globallyUniqueKey: "EverythingMenu",
          alwaysMountChildren: !0,
          keepsMovement: dB === eT.m.SHOP,
          doGameplayStartStopOnShow: "inGame" === TB,
          children: (0, oB.jsx)(Ed.c, {
            className: "EverythingMenuContainer",
            show: mB,
            children: (0, oB.jsx)(Hd.b, {
              close: () => {
                NB()
              },
              togglePointerLock: !1,
              children: (0, oB.jsxs)("div", {
                className: "EverythingMenu",
                children: [!(0, Gd.j)(dB) && (0, oB.jsxs)("div", {
                  className: "EverythingMenuTabList",
                  children: [(0, oB.jsxs)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerStart",
                    children: [tB && (0, oB.jsx)(HB.b, {
                      className: "EverythingMenuBackButton",
                      padDestructive: !0,
                      onClick: () => {
                        tB.onClick()
                      },
                      children: tB.text
                    }), mB && YB && (0, oB.jsx)("div", {
                      ...vB,
                      className: "EverythingMenuWallet",
                      title: BB("homePage:getPremiumCurrency"),
                      onClick: () => {
                        (0, aB.h)({
                          mode: "current",
                          source: "menuWallet"
                        })
                      },
                      children: (0, oB.jsx)(Yy.h, {})
                    })]
                  }), (0, oB.jsxs)("div", {
                    className: "EverythingMenuTabListInner",
                    "data-pad-tabs": "1",
                    children: [(0, oB.jsxs)("div", {
                      ...vB,
                      "data-pad-tab": !0,
                      "data-pad-selected": dB === eT.m.SETTINGS ? "true" : void 0,
                      className: pB()("EverythingMenuTab", {
                        EverythingMenuTabActive: dB === eT.m.SETTINGS
                      }),
                      onClick: () => {
                        sB.d.set({
                          openEverythingMenuName: eT.m.SETTINGS
                        })
                      },
                      children: [BB("general:settings"), kB("OpenSettings", "pause")]
                    }), (0, oB.jsxs)("div", {
                      ...vB,
                      "data-pad-tab": !0,
                      "data-pad-selected": dB === eT.m.CUSTOMISATION ? "true" : void 0,
                      className: pB()("EverythingMenuTab", {
                        EverythingMenuTabActive: dB === eT.m.CUSTOMISATION
                      }),
                      onClick: () => {
                        sB.d.set({
                          openEverythingMenuName: eT.m.CUSTOMISATION
                        })
                      },
                      children: [BB("general:player"), kB("OpenCharacterCustomization")]
                    }), EB.featureFlags.useSocialFeatures && (0, oB.jsxs)("div", {
                      ...vB,
                      "data-pad-tab": !0,
                      "data-pad-selected": dB === eT.m.SOCIAL ? "true" : void 0,
                      className: pB()("EverythingMenuTab", {
                        EverythingMenuTabActive: dB === eT.m.SOCIAL
                      }),
                      ...(0, CB.b)({
                        id: "social.open_menu",
                        value: "menu_tab"
                      }, dB === eT.m.SOCIAL),
                      onClick: () => {
                        sB.d.set({
                          openEverythingMenuName: eT.m.SOCIAL
                        })
                      },
                      children: [BB("socialBar:social"), (0, oB.jsx)(zy.c, {})]
                    }), YB && (0, oB.jsxs)("div", {
                      ...vB,
                      "data-pad-tab": !0,
                      "data-pad-selected": dB === eT.m.COSMETIC_SHOP ? "true" : void 0,
                      className: pB()("EverythingMenuTab EverythingMenuTabCosmeticShop", {
                        EverythingMenuTabActive: dB === eT.m.COSMETIC_SHOP
                      }),
                      onClick: () => {
                        sB.d.set({
                          openEverythingMenuName: eT.m.COSMETIC_SHOP
                        })
                      },
                      children: [(0, oB.jsx)("span", {
                        className: "EverythingMenuTabCosmeticShopText",
                        children: BB("store:title")
                      }), "dot" === gB && (0, oB.jsx)("span", {
                        className: "EverythingMenuTabStoreBadge EverythingMenuTabStoreDot"
                      })]
                    }), "inGame" === TB && (0, oB.jsxs)("div", {
                      ...vB,
                      "data-pad-tab": !0,
                      "data-pad-selected": dB === eT.m.LOBBY_LEADERBOARD ? "true" : void 0,
                      className: pB()("EverythingMenuTab", {
                        EverythingMenuTabActive: dB === eT.m.LOBBY_LEADERBOARD
                      }),
                      onClick: () => {
                        sB.d.set({
                          openEverythingMenuName: eT.m.LOBBY_LEADERBOARD
                        })
                      },
                      children: [BB("general:lobby"), kB("OpenLobbyLeaderboard", "leaderboard")]
                    })]
                  }), (0, oB.jsx)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerEnd",
                    children: fB
                  })]
                }), (0, Gd.j)(dB) && fB, (0, oB.jsxs)("div", {
                  className: "EverythingMenuBody",
                  "data-pad-initial-area": !0,
                  style: {
                    "--everythingMenuBodyBackgroundOpacity": "inGame" === TB ? "0.85" : "1"
                  },
                  children: [(0, oB.jsx)(gd, {
                    show: dB === eT.m.SETTINGS,
                    setBeforeResumeCallback: DB
                  }), (0, oB.jsx)(Od, {
                    show: dB === eT.m.CUSTOMISATION
                  }), (0, oB.jsx)(VB.Suspense, {
                    fallback: null,
                    children: (0, oB.jsx)(Pd, {
                      show: dB === eT.m.SHOP
                    })
                  }), (0, oB.jsx)(jd, {
                    show: dB === eT.m.LOBBY_LEADERBOARD
                  }), (0, oB.jsx)(Jy, {
                    show: dB === eT.m.COSMETIC_SHOP
                  }), (0, oB.jsx)(sy, {
                    show: dB === eT.m.SOCIAL
                  })]
                }), !(0, EB.isMobileApp)() && (0, vd.h)(JB.getPlayerRanks()) && (0, oB.jsx)(Ed.c, {
                  ref: uB,
                  className: "EverythingMenuBannerDiv",
                  show: iB,
                  "data-pad-hint-bar-avoid": !0,
                  "data-pad-no-step-in": !0,
                  children: (0, oB.jsx)(oy.b, {
                    info: {
                      adId: 2,
                      adType: "leaderboard",
                      adAlias: "banner_shop"
                    },
                    sizeInfo: {
                      parentRef: uB
                    },
                    showing: mB && iB,
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
  8578: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => pB
    });
    var VB = dB(279),
      yB = dB(8584);

    function pB(BB, TB, dB) {
      const pB = Object.entries(TB).sort(((BB, TB) => TB[1] - BB[1])),
        lB = (0, VB.qb)(BB);
      lB.push(BB ? "\n\n" : "\n");
      for (const [yB, DB] of pB) {
        var JB, YB, gB;
        const BB = null !== (JB = null === dB || void 0 === dB || null === (YB = dB[yB]) || void 0 === YB ? void 0 : YB.icon) && void 0 !== JB ? JB : `${yB} Enchantment`;
        lB.push({
          icon: BB,
          style: {
            fontSize: "1.5rem"
          }
        }), lB.push({
          str: `${yB} ${null!==(gB=(0,VB.U)(DB))&&void 0!==gB?gB:DB}\n`
        })
      }
      lB.push({
        str: "\n"
      });
      for (const [VB, DB] of pB) {
        var oB, kB, LB, OB;
        const BB = null !== (oB = null === dB || void 0 === dB || null === (kB = dB[VB]) || void 0 === kB ? void 0 : kB.icon) && void 0 !== oB ? oB : `${VB} Enchantment`,
          TB = null !== (LB = null === dB || void 0 === dB || null === (OB = dB[VB]) || void 0 === OB ? void 0 : OB.description) && void 0 !== LB ? LB : (0, yB.g)(VB);
        lB.push({
          icon: BB,
          style: {
            fontSize: "1.25rem",
            opacity: .75
          }
        }), lB.push({
          str: TB,
          style: {
            fontSize: "0.8em",
            fontWeight: "normal",
            opacity: .75
          }
        }), lB.push({
          str: "\n"
        })
      }
      return lB
    }
  },
  8591: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => gB,
      g: () => vB,
      j: () => HB,
      k: () => YB,
      m: () => EB,
      p: () => oB,
      r: () => LB,
      t: () => uB,
      v: () => kB
    });
    var VB = dB(270),
      yB = dB(572),
      pB = dB(279),
      lB = dB(3706),
      JB = dB(8578);

    function YB(BB, TB) {
      var dB;
      let {
        player: VB,
        chestOrCreative: yB
      } = BB;
      var pB;
      return TB < VB.length ? null !== (pB = VB[TB]) && void 0 !== pB ? pB : null : null !== (dB = yB[TB - VB.length]) && void 0 !== dB ? dB : null
    }

    function gB(BB) {
      var TB;
      return null !== (TB = BB.amount) && void 0 !== TB ? TB : 0
    }

    function oB(BB) {
      return 0 === BB.button || void 0 === BB.button
    }

    function kB(BB) {
      return !!BB.shiftKey
    }

    function LB(BB) {
      return "touches" in BB || "touch" === BB.pointerType || "pen" === BB.pointerType
    }
    const OB = new Set,
      DB = 50;

    function uB(BB, TB) {
      var dB;
      const VB = null === (dB = BB[TB]) || void 0 === dB ? void 0 : dB.displayName;
      return (0, yB.M)(VB) ? "string" !== typeof TB ? "" : (!OB.has(TB) && OB.size < DB && (OB.add(TB), console.warn(`No item called "${TB}", so its hover shows the name as given`)), TB) : VB
    }

    function HB(BB, TB, dB) {
      var YB, gB, oB, kB, LB, OB, DB, HB, EB, vB, mB, iB, NB, tB;
      const fB = BB.attributes,
        sB = null !== (YB = null === (gB = TB[BB.name]) || void 0 === gB ? void 0 : gB.rootName) && void 0 !== YB ? YB : BB.name,
        MB = null !== (oB = null !== (kB = fB.customDisplayName) && void 0 !== kB ? kB : null === (LB = TB[BB.name]) || void 0 === LB ? void 0 : LB.displayName) && void 0 !== oB ? oB : uB(TB, sB);
      let zB = MB;
      const wB = null === (OB = fB.customAttributes) || void 0 === OB ? void 0 : OB.enchantmentTier;
      wB && (zB = (0, pB.qb)(MB, {
        colour: pB.lb[wB]
      }));
      const UB = null !== (DB = null !== (HB = null !== (EB = function(BB, TB) {
        var dB;
        if (void 0 === BB || null !== (dB = TB.customAttributes) && void 0 !== dB && dB.author) return BB;
        const yB = (0, VB.hc)(BB);
        return yB.every((BB => "string" === typeof BB)) ? BB : yB.map((BB => "string" === typeof BB ? BB : {
          icon: BB.icon,
          style: {
            fontSize: "1.5em"
          }
        }))
      }(fB.customDescription, fB)) && void 0 !== EB ? EB : null === (vB = TB[BB.name]) || void 0 === vB ? void 0 : vB.description) && void 0 !== HB ? HB : null === (mB = TB[sB]) || void 0 === mB ? void 0 : mB.description) && void 0 !== DB ? DB : "";
      let FB = UB;
      if (null !== (iB = fB.customAttributes) && void 0 !== iB && iB.enchantments) FB = (0, JB.b)(UB, fB.customAttributes.enchantments, fB.customAttributes.enchantmentData);
      else if (dB[sB]) FB = (0, pB.qb)(UB), FB.push({
        str: "\n"
      }), FB.push({
        str: "Enchantable",
        style: {
          fontSize: "0.8em",
          fontWeight: "normal",
          opacity: .4
        }
      });
      else if (null !== (NB = fB.customAttributes) && void 0 !== NB && NB.mobSettings) {
        var KB, rB;
        const BB = fB.customAttributes.mobSettings;
        var IB, cB;
        if (FB = [], (0, yB.M)(fB.customAttributes.health) || (FB.push({
            str: "\n"
          }), FB.push({
            icon: "Health",
            style: {
              fontSize: "1.5em"
            }
          }), FB.push({
            str: " "
          }), FB.push({
            str: fB.customAttributes.health.toString()
          }), (0, yB.M)(BB.maxHealth) || (FB.push({
            str: "/"
          }), FB.push({
            str: BB.maxHealth.toString()
          }))), !(0, yB.M)(BB.attackDamage) && BB.attackDamage > 0 && (FB.push({
            str: "\n"
          }), FB.push({
            icon: "Iron Sword",
            style: {
              fontSize: "1.5em"
            }
          }), FB.push({
            str: " "
          }), FB.push({
            str: BB.attackDamage.toString()
          })), !(0, yB.M)(BB.secondaryAttackDamage) && BB.secondaryAttackDamage > 0 && (FB.push({
            str: "\n"
          }), FB.push({
            icon: "Stone Crossbow",
            style: {
              fontSize: "1.5em"
            }
          }), FB.push({
            str: " "
          }), FB.push({
            str: BB.secondaryAttackDamage.toString()
          })), (0, yB.M)(BB.baseRunningSpeed) || (FB.push({
            str: "\n"
          }), FB.push({
            icon: "Speed",
            style: {
              fontSize: "1.5em"
            }
          }), FB.push({
            str: " "
          }), FB.push({
            str: BB.baseRunningSpeed.toFixed(2)
          })), "Saddled" === BB.metaInfo) FB.push({
          str: "\n"
        }), FB.push({
          str: {
            translationKey: "general:has"
          }
        }), FB.push({
          str: " "
        }), FB.push({
          icon: null !== (IB = null === (cB = BB.tameInfo) || void 0 === cB ? void 0 : cB.saddleItemName) && void 0 !== IB ? IB : "Saddle",
          style: {
            fontSize: "1.5em"
          }
        });
        if (FB.push({
            str: "\n"
          }), FB.push({
            str: "\n"
          }), BB.petInfo && null !== (KB = BB.tameInfo) && void 0 !== KB && KB.supportsFriendship) {
          const TB = lB.e.getIconsFromFriendshipPoints(BB.petInfo.friendshipPoints);
          for (const BB of TB) FB.push({
            icon: BB,
            style: {
              fontSize: "1.5em"
            }
          });
          FB.push({
            str: "\n"
          });
          const dB = lB.e.getMobHungerLevel(BB.petInfo.lastFedAt);
          for (const BB of lB.e.hungerLevelIcons[dB]) FB.push({
            icon: BB,
            style: {
              fontSize: "1.5em"
            }
          });
          FB.push({
            str: " "
          }), FB.push({
            str: lB.e.hungerLevelTranslations[dB],
            style: {
              fontWeight: "bolder"
            }
          })
        }
        if (BB.tameInfo && null !== (rB = BB.tameInfo) && void 0 !== rB && rB.supportsFriendship) {
          var SB, PB;
          let TB = null !== (SB = BB.tameInfo.likedFoods) && void 0 !== SB ? SB : [];
          FB.push({
            str: "\n"
          }), FB.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: lB.e.feedTextColours[lB.e.MobFoodType.Superliked]
            }
          }), FB.push({
            str: " "
          }), null !== (PB = BB.petInfo) && void 0 !== PB && PB.superlikedFoodKnown ? (FB.push({
            icon: BB.petInfo.superlikedFood,
            style: {
              fontSize: "1.5em"
            }
          }), TB = TB.filter((TB => TB !== BB.petInfo.superlikedFood))) : FB.push({
            icon: "Question Mark",
            style: {
              fontSize: "1.5em"
            }
          }), FB.push({
            str: "\n"
          }), FB.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: lB.e.feedTextColours[lB.e.MobFoodType.Liked]
            }
          }), FB.push({
            str: " "
          });
          for (const BB of TB) FB.push({
            icon: BB,
            style: {
              fontSize: "1.5em"
            }
          });
          FB.push({
            str: "\n"
          }), FB.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: lB.e.feedTextColours[lB.e.MobFoodType.Neutral]
            }
          }), FB.push({
            str: " "
          });
          for (const dB of null !== (QB = BB.tameInfo.neutralFoods) && void 0 !== QB ? QB : []) {
            var QB;
            FB.push({
              icon: dB,
              style: {
                fontSize: "1.5em"
              }
            })
          }
          FB.push({
            str: "\n"
          }), FB.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: lB.e.feedTextColours[lB.e.MobFoodType.Disliked]
            }
          }), FB.push({
            str: " "
          });
          for (const dB of null !== (RB = BB.tameInfo.dislikedFoods) && void 0 !== RB ? RB : []) {
            var RB;
            FB.push({
              icon: dB,
              style: {
                fontSize: "1.5em"
              }
            })
          }
        }
        FB.length > 0 ? (FB.shift(), FB.unshift(...(0, pB.qb)(UB))) : FB = (0, pB.qb)(UB)
      }
      return {
        name: zB,
        desc: FB,
        fontStyle: null !== (tB = fB.customAttributes) && void 0 !== tB && tB.author ? "italic" : "normal"
      }
    }

    function EB(BB, TB, dB, VB) {
      const yB = YB(BB, dB),
        pB = YB(BB, VB);
      if (!yB) return !1;
      const lB = TB[yB.name].armourReduction,
        JB = TB[pB.name].armourReduction;
      if (JB === lB) {
        var gB, oB, kB, LB;
        const BB = null !== (gB = null === (oB = yB.attributes.customAttributes) || void 0 === oB ? void 0 : oB.enchantmentTier) && void 0 !== gB ? gB : "Tier 0",
          TB = null !== (kB = null === (LB = pB.attributes.customAttributes) || void 0 === LB ? void 0 : LB.enchantmentTier) && void 0 !== kB ? kB : "Tier 0";
        return parseInt(BB.replace("Tier ", "")) >= parseInt(TB.replace("Tier ", ""))
      }
      return lB > JB
    }

    function vB(BB) {
      let TB;
      if ("number" === typeof BB) {
        const dB = document.querySelector(`[data-inven-idx="${BB}"]`);
        if (!dB) return null;
        TB = dB.getBoundingClientRect()
      } else TB = BB.getBoundingClientRect();
      return {
        x: TB.left + TB.width / 2,
        y: TB.top + TB.height / 2
      }
    }
  },
  8529: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => OB,
      f: () => DB,
      g: () => uB
    });
    var VB = dB(1324),
      yB = dB(62),
      pB = dB(1201),
      lB = dB(3942),
      JB = dB(2068),
      YB = dB(1078),
      gB = dB(95),
      oB = dB(1727),
      kB = dB(1225),
      LB = dB(980);

    function OB(BB) {
      let {
        show: TB,
        onClose: dB
      } = BB;
      const {
        requestedGameNameWithVariation: VB,
        lobbyName: yB,
        shownLobbyName: pB
      } = (0, oB.i)("connectedGame"), YB = (0, JB.d)(VB, yB, !1);
      return gB.featureFlags.canUseInviteLinks && (0, LB.jsx)(lB.b, {
        show: TB,
        close: dB,
        padShowsHud: !0,
        togglePointerLock: !1,
        globallyUniqueKey: "InviteLinkBox",
        doGameplayStartStopOnShow: !0,
        children: (0, LB.jsxs)("div", {
          className: "InviteLinkBox AnimFadeInScaleUp",
          children: [(0, LB.jsx)("div", {
            className: "InviteLinkBoxHeader SmallTextBold",
            children: "Invite Friends"
          }), (0, LB.jsxs)("div", {
            className: "InviteLinkBoxDescription SmallTextLight",
            children: [(0, LB.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: '"Join Lobby Name" Button Info'
            }), "Game: ", null === YB ? (0, LB.jsx)(kB.b, {}) : YB, (0, LB.jsx)("br", {}), "Lobby Name: ", pB, (0, LB.jsx)("br", {}), (0, LB.jsx)("br", {}), (0, LB.jsx)("br", {}), (0, LB.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: "Link"
            })]
          }), (0, LB.jsx)(DB, {})]
        })
      })
    }

    function DB() {
      var BB;
      const {
        t: TB
      } = (0, YB.z)(), dB = null !== (BB = uB(gB.featureFlags.canUseInviteLinks)) && void 0 !== BB ? BB : "Loading Link...", [pB, lB] = (0, yB.useState)(0), [JB, oB] = (0, yB.useReducer)((BB => BB + 1), 0);
      return (0, yB.useEffect)((() => {
        const BB = setTimeout((() => {
          oB()
        }), 1100);
        return () => {
          clearTimeout(BB)
        }
      }), [pB]), gB.featureFlags.canUseInviteLinks && (0, LB.jsxs)("div", {
        className: "InviteLinkInnerWrapper",
        children: [(0, LB.jsx)("div", {
          className: "InviteLinkInner",
          children: dB
        }), (0, LB.jsx)(VB.d, {
          className: "InviteLinkCopyButton",
          onClick: () => {
            navigator.clipboard.writeText(dB).catch((BB => {
              console.error("Failed to copy invite link:", BB)
            })), lB(Date.now())
          },
          disabled: Date.now() - pB < 1e3,
          children: Date.now() - pB < 1e3 ? TB("general:copied") : TB("general:copy")
        })]
      })
    }

    function uB(BB) {
      const [TB, dB] = (0, yB.useState)(null);
      return (0, yB.useEffect)((() => {
        if (!BB) return;
        let TB = !0;
        return (0, pB.z)().then((BB => {
          TB && dB(BB)
        })).catch((BB => {
          console.error("Failed to get invite link:", BB)
        })), () => {
          TB = !1
        }
      }), [BB]), TB
    }
  },
  8565: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => gB
    });
    var VB = dB(62),
      yB = dB(933),
      pB = dB.n(yB),
      lB = dB(1727),
      JB = dB(980);

    function YB(BB) {
      const TB = Math.floor(BB / 3600),
        dB = Math.floor(BB % 3600 / 60),
        VB = Math.floor(BB % 60),
        yB = `${dB.toString().padStart(2,"0")}:${VB.toString().padStart(2,"0")}`;
      return TB > 0 ? `${TB}:${yB}` : yB
    }
    const gB = (0, VB.memo)((function(BB) {
      let {
        className: TB
      } = BB;
      const {
        recording: dB,
        seconds: VB
      } = (0, lB.i)("replayRecorder");
      return dB ? (0, JB.jsxs)("div", {
        className: pB()("RecordingIndicator", TB),
        children: [(0, JB.jsx)("span", {
          className: "RecordingIndicatorDot"
        }), (0, JB.jsx)("span", {
          className: "RecordingIndicatorLabel",
          children: "REC"
        }), (0, JB.jsx)("span", {
          className: "RecordingIndicatorTime",
          children: YB(VB)
        })]
      }) : null
    }))
  },
  8194: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => wB,
      f: () => zB
    });
    var VB = dB(1078),
      yB = dB(62),
      pB = dB(1738),
      lB = dB(1751),
      JB = dB(933),
      YB = dB.n(JB),
      gB = dB(1324),
      oB = dB(21),
      kB = dB(95),
      LB = dB(105),
      OB = dB(4411),
      DB = dB(2139),
      uB = dB(127),
      HB = dB(1754),
      EB = dB(1757),
      vB = dB(8196),
      mB = dB(270),
      iB = dB(980);
    const NB = {
      floating: "settingsMenu:joystickFloating",
      fixed_shown: "settingsMenu:joystickFixed",
      fixed_hidden: "settingsMenu:joystickHidden"
    };
    var tB = dB(8204);
    const fB = [function() {
      const {
        t: BB
      } = (0, VB.z)(), {
        joystickMode: TB,
        touchSpeedCurve: dB,
        autorun: yB,
        jumpLock: pB
      } = (0, oB.m)(["clientEscMenuOptions"]).clientEscMenuOptions;
      return (0, iB.jsxs)(iB.Fragment, {
        children: [(0, iB.jsx)(OB.g, {
          label: BB("settingsMenu:joystick"),
          options: mB.wb.map((TB => ({
            value: TB,
            label: BB(NB[TB])
          }))),
          value: TB,
          onChange: BB => {
            oB.d.setClientEscMenuOptions({
              joystickMode: BB
            })
          },
          circleInfoText: BB("settingsMenu:joystickInfo")
        }), (0, iB.jsx)(OB.e, {
          label: BB("settingsMenu:preciseWalking"),
          checked: dB,
          onClick: BB => {
            oB.d.setClientEscMenuOptions({
              touchSpeedCurve: BB
            })
          },
          circleInfoText: BB("settingsMenu:preciseWalkingInfo")
        }), (0, iB.jsx)(OB.e, {
          label: BB("settingsMenu:autoRun"),
          checked: yB,
          onClick: BB => {
            oB.d.setClientEscMenuOptions({
              autorun: BB
            })
          },
          circleInfoText: BB("settingsMenu:autoRunInfo")
        }), (0, iB.jsx)(OB.e, {
          label: BB("settingsMenu:jumpLock"),
          checked: pB,
          onClick: BB => {
            oB.d.setClientEscMenuOptions({
              jumpLock: BB
            })
          },
          circleInfoText: BB("settingsMenu:jumpLockInfo")
        })]
      })
    }, function() {
      const {
        t: BB
      } = (0, VB.z)(), {
        clientEscMenuOptions: TB
      } = (0, oB.m)(["clientEscMenuOptions"]);
      return (0, iB.jsx)(OB.e, {
        label: BB("touchSettings:actionButtons"),
        checked: TB.touchActionButtons,
        onClick: BB => {
          oB.d.setClientEscMenuOptions({
            touchActionButtons: BB
          })
        },
        circleInfoText: BB("touchSettings:actionButtonsInfo")
      })
    }, function() {
      const {
        t: BB
      } = (0, VB.z)(), {
        clientEscMenuOptions: TB
      } = (0, oB.m)(["clientEscMenuOptions"]);
      return (0, tB.c)() ? (0, iB.jsx)(OB.e, {
        label: BB("settingsMenu:vibration"),
        checked: TB.vibration,
        onClick: BB => {
          oB.d.setClientEscMenuOptions({
            vibration: BB
          })
        },
        circleInfoText: BB("settingsMenu:vibrationInfo")
      }) : null
    }];

    function sB() {
      return (0, iB.jsx)(iB.Fragment, {
        children: fB.map(((BB, TB) => (0, iB.jsx)(BB, {}, TB)))
      })
    }
    var MB = dB(3825);

    function zB() {
      const {
        t: BB
      } = (0, VB.z)(), {
        isTouchScreen: TB,
        clientEscMenuOptions: dB,
        gameState: lB
      } = (0, oB.m)(["isTouchScreen", "clientEscMenuOptions", "gameState"]), JB = (0, DB.j)("ezBridging"), YB = (0, DB.j)("ezTowering"), HB = "inGame" !== lB || !0 === JB, EB = (0, uB.h)() && ("inGame" !== lB || !0 === YB), [, mB] = (0, yB.useReducer)((BB => BB + 1), 0), NB = (0, vB.f)(), [tB, fB] = (0, yB.useState)(MB.f);
      return (0, iB.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [NB && (0, iB.jsxs)("div", {
          className: "SettingBox ControlsControllerNote",
          children: [(0, iB.jsx)("div", {
            children: BB("controller:settingsControlsNote")
          }), (0, iB.jsx)(gB.T, {
            onClick: () => {
              oB.d.set({
                openSettingsCategory: "controller"
              })
            },
            children: BB("controller:settingsOpenController")
          })]
        }), (0, kB.isTouchscreen)() && !(0, kB.isMobile)() ? (0, iB.jsx)(iB.Fragment, {
          children: (0, iB.jsx)(OB.e, {
            label: BB("settingsMenu:useTouchControls"),
            checked: tB,
            onClick: BB => {
              (0, MB.e)(BB), fB(BB)
            }
          })
        }) : null, TB && (0, iB.jsx)(sB, {}), HB && (0, iB.jsx)(OB.e, {
          label: BB("settingsMenu:ezBridging"),
          checked: dB.ezBridging,
          onClick: BB => {
            oB.d.setClientEscMenuOptions({
              ezBridging: BB
            })
          },
          circleInfoText: BB("settingsMenu:ezBridgingInfo")
        }), EB && (0, iB.jsx)(OB.e, {
          label: BB("settingsMenu:ezTowering"),
          checked: dB.ezTowering,
          onClick: BB => {
            oB.d.setClientEscMenuOptions({
              ezTowering: BB
            })
          },
          circleInfoText: BB("settingsMenu:ezToweringInfo")
        }), (0, iB.jsx)(OB.e, {
          label: BB("settingsMenu:crouchToggle"),
          checked: dB.crouchIsToggle,
          onClick: BB => {
            oB.d.setClientEscMenuOptions({
              crouchIsToggle: BB
            })
          },
          circleInfoText: BB("settingsMenu:crouchToggleInfo")
        }), (0, iB.jsx)(OB.e, {
          label: BB("settingsMenu:hideUiToggle"),
          checked: dB.hideUiIsToggle,
          onClick: BB => {
            oB.d.setClientEscMenuOptions({
              hideUiIsToggle: BB
            })
          },
          circleInfoText: BB("settingsMenu:hideUiToggleInfo")
        }), "mouseOnly" !== (0, LB.e)() && (0, iB.jsx)(OB.k, {
          name: BB("settingsMenu:touchscreenSensitivity"),
          min: 1,
          max: 900,
          step: 1,
          initValue: dB.touchscreenSensitivity,
          onChange: BB => {
            oB.d.setClientEscMenuOptions({
              touchscreenSensitivity: BB
            })
          }
        }), !(0, kB.isMobile)() && (0, iB.jsx)(OB.k, {
          name: BB("settingsMenu:mouseSensitivity"),
          min: 1,
          max: 200,
          step: 1,
          initValue: dB.mouseSensitivity,
          onChange: BB => {
            oB.d.setClientEscMenuOptions({
              mouseSensitivity: BB
            })
          }
        }), !(0, kB.isMobile)() && (0, iB.jsxs)("div", {
          className: "ControlsContainer",
          children: [(0, iB.jsx)("div", {
            className: "SliderText",
            children: BB("settingsMenu:keyBindings")
          }), pB.f.map((TB => (0, iB.jsx)(wB, {
            title: BB(TB.name.translationKey, TB.name.params),
            defaultOpen: pB.g.has(TB.id),
            children: TB.actions.map((BB => (0, iB.jsx)(UB, {
              noaAction: BB,
              forceUpdate: mB,
              clashesWith: TB.clashesWith,
              showPadGlyph: NB
            }, BB)))
          }, TB.name.translationKey))), (0, iB.jsx)(gB.K, {
            className: "ResetBindingsButton",
            onClick: () => {
              (0, pB.y)(), mB()
            },
            children: BB("controls:resetBindings")
          })]
        })]
      })
    }

    function wB(BB) {
      let {
        title: TB,
        defaultOpen: dB,
        children: VB
      } = BB;
      const [pB, lB] = (0, yB.useState)(dB);
      return (0, iB.jsxs)("div", {
        className: YB()("ControlsSection", {
          Collapsed: !pB
        }),
        children: [(0, iB.jsxs)("div", {
          className: "ControlsSectionHeader",
          "data-pad-focusable": !0,
          onClick: () => {
            lB(!pB)
          },
          children: [(0, iB.jsx)("div", {
            className: "ControlsSectionTitle",
            children: TB
          }), (0, iB.jsx)("div", {
            className: "ControlsSectionChevron",
            children: "\u25be"
          })]
        }), pB && (0, iB.jsx)("div", {
          className: "ControlsSectionRows",
          children: VB
        })]
      })
    }

    function UB(BB) {
      let {
        noaAction: TB,
        forceUpdate: dB,
        clashesWith: JB,
        showPadGlyph: oB
      } = BB;
      const {
        t: kB
      } = (0, VB.z)(), LB = (0, EB.b)(TB), [OB, DB] = (0, yB.useState)(!1), [uB, vB] = (0, yB.useState)("controls:clickToEnterNewBinding"), [mB, NB] = (0, yB.useState)(null), [tB, fB] = (0, yB.useState)(null), sB = (0, yB.useRef)(null);
      (0, yB.useEffect)((() => {
        OB && sB.current && sB.current.focus()
      }), [OB]);
      const MB = pB.r[TB].filter((BB => lB.j[BB]));
      let zB = null;
      const wB = [],
        UB = JB.flatMap((BB => {
          var TB, dB;
          return null !== (TB = null === (dB = pB.f.find((TB => TB.id === BB))) || void 0 === dB ? void 0 : dB.actions) && void 0 !== TB ? TB : []
        }));
      for (const VB of UB) {
        if (VB === TB) continue;
        const BB = pB.r[VB];
        for (const TB of BB) MB.includes(TB) && wB.push(kB(pB.u[VB].translationKey, pB.u[VB].params))
      }
      wB.length > 0 && (zB = kB("controls:sharedBindingsWarning") + " ", zB += wB.join(", "));
      const FB = () => {
          DB(!1), NB(null), vB("controls:clickToEnterNewBinding"), fB(null)
        },
        KB = () => "BindingInput_" + TB;
      return (0, iB.jsxs)("div", {
        className: YB()("ControlRow", {
          WarningBorder: null !== zB
        }),
        children: [(0, iB.jsxs)("div", {
          className: "ControlRowInner",
          children: [(0, iB.jsxs)("div", {
            className: "ControlName",
            children: [kB(pB.u[TB].translationKey, pB.u[TB].params), oB && LB && (0, iB.jsx)(HB.c, {
              glyph: LB,
              className: "ControlPadGlyph"
            })]
          }), (0, iB.jsxs)("div", {
            className: "ControlBindingsContainer",
            children: [(0, iB.jsxs)("div", {
              className: "ControlBindingsList",
              children: [MB.map((BB => (0, iB.jsxs)("div", {
                className: "ControlBinding",
                children: [(0, iB.jsx)("div", {
                  children: (0, pB.k)(BB)
                }), (0, iB.jsx)("div", {
                  className: "ControlBindingRemoveIcon",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    const VB = (0, pB.v)(TB, BB);
                    VB.isError() ? fB(VB.asError().message) : fB(null), dB()
                  },
                  children: "\xd7"
                })]
              }, BB))), !OB && (0, iB.jsx)("div", {
                className: "ControlBinding ControlBindingAdd",
                onClick: () => {
                  DB(!0), fB(null)
                },
                children: (0, iB.jsx)("div", {
                  className: "ControlBindingAddIcon",
                  children: "+"
                })
              })]
            }), OB && (0, iB.jsxs)("div", {
              className: "ControlBindingAddInput",
              children: [(0, iB.jsxs)("div", {
                className: "InputContainer",
                children: [(0, iB.jsx)("div", {
                  className: "InputOverlay",
                  children: mB ? (0, pB.k)(mB) : (0, iB.jsx)("div", {
                    className: "InputOverlayPlaceholder",
                    children: kB(uB)
                  })
                }), (0, iB.jsx)("input", {
                  ref: sB,
                  id: KB(),
                  "data-pad-no-osk": !0,
                  defaultValue: "",
                  onKeyDown: BB => {
                    if ("Escape" === BB.code) return FB(), BB.preventDefault(), void BB.stopPropagation();
                    const TB = BB.code;
                    lB.e.includes(TB) ? (fB(null), NB(TB)) : (fB("controls:keyIsReserved"), NB(null)), BB.preventDefault(), BB.stopPropagation()
                  },
                  onMouseDown: BB => {
                    const TB = "Mouse" + (BB.button + 1);
                    document.activeElement && document.activeElement.id === KB() ? lB.e.includes(TB) ? (fB(null), NB(TB)) : (fB("controls:keyIsReserved"), NB(null)) : vB("controls:enterNewBinding"), BB.stopPropagation()
                  },
                  onBlur: () => {
                    vB("controls:clickToEnterNewBinding")
                  }
                })]
              }), (0, iB.jsx)(gB.d, {
                onPointerDown: BB => {
                  BB.preventDefault()
                },
                onClick: () => {
                  (0, pB.e)(TB, mB), dB(), FB()
                },
                className: "ControlBindingAddButton",
                disabled: null === mB,
                children: kB("general:add")
              }), (0, iB.jsx)("div", {
                className: "ControlBindingAddCancel",
                onClick: () => {
                  FB()
                },
                children: "\xd7"
              })]
            }), tB && (0, iB.jsx)("div", {
              className: "ControlBindingError",
              children: kB(tB)
            })]
          })]
        }), zB && (0, iB.jsx)("div", {
          className: "ControlRowWarning",
          children: zB
        })]
      })
    }
  },
  4284: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => HB
    });
    var VB = dB(933),
      yB = dB.n(VB),
      pB = dB(4042),
      lB = dB(1078),
      JB = dB(946),
      YB = dB(1324),
      gB = dB(1393),
      oB = dB(1235),
      kB = dB(2160),
      LB = dB(980);
    const OB = {
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

    function DB(BB) {
      let {
        platform: TB
      } = BB;
      const dB = "youtube" === TB;
      return (0, LB.jsxs)("span", {
        className: yB()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: dB
        }),
        children: [dB && (0, LB.jsx)(kB.d, {
          variant: "white"
        }), !dB && (0, LB.jsx)(JB.e, {
          name: OB[TB].icon,
          kit: "brands"
        })]
      })
    }

    function uB(BB) {
      let {
        platform: TB,
        link: dB,
        editable: VB,
        userContext: yB,
        onLinksUpdated: kB
      } = BB;
      const {
        t: uB
      } = (0, lB.z)(), HB = OB[TB];
      if (!dB && !VB) return null;

      function EB() {
        var BB;
        if (!yB || !kB) return;
        oB.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: HB.name
            }
          },
          prefixText: pB.x[TB],
          placeholderText: "playBloxd",
          initialValue: null !== (BB = null === dB || void 0 === dB ? void 0 : dB.handle) && void 0 !== BB ? BB : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: dB ? "general:remove" : void 0
        }).getResult().then((async BB => {
          if ("notificationTornDown" !== BB && null !== BB) try {
            "submit" === BB.type ? await gB.c.setSocialLink(yB, TB, BB.value) : await gB.c.clearSocialLink(yB, TB), kB()
          } catch (dB) {
            console.error("Failed to update social link", dB), oB.NotificationProvider.showAlertPopup({
              title: dB.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (dB) {
        const BB = `@${dB.handle}`;
        return (0, LB.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: HB.color
          },
          href: dB.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, LB.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, LB.jsx)(DB, {
              platform: TB
            }), (0, LB.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, LB.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: BB
              })
            })]
          }), VB && (0, LB.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, YB._)({
              stopPropagation: !0
            }),
            onClick: BB => {
              BB.stopPropagation(), BB.preventDefault(), EB()
            },
            children: (0, LB.jsx)(JB.e, {
              name: "pen-to-square"
            })
          }), !VB && (0, LB.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, LB.jsx)(JB.e, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, LB.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: HB.color
        },
        ...(0, YB._)(),
        onClick: () => {
          EB()
        },
        children: [(0, LB.jsx)(DB, {
          platform: TB
        }), (0, LB.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, LB.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: HB.name
          }), (0, LB.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: uB("homePage:profileSocialLinkAdd")
          })]
        }), (0, LB.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, LB.jsx)(JB.e, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function HB(BB) {
      let {
        socialLinks: TB,
        editable: dB = !1,
        userContext: VB,
        onLinksUpdated: yB
      } = BB;
      if (!dB && 0 === TB.length) return null;
      const lB = new Map(TB.map((BB => [BB.platform, BB]))),
        JB = dB ? pB.w : TB.map((BB => BB.platform));
      return (0, LB.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, LB.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: JB.map((BB => (0, LB.jsx)(uB, {
            platform: BB,
            link: lB.get(BB),
            editable: dB,
            userContext: VB,
            onLinksUpdated: yB
          }, BB)))
        })
      })
    }
  },
  8570: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => pB
    });
    var VB = dB(3948),
      yB = dB(3951);

    function pB(BB) {
      let {
        children: TB,
        showing: dB,
        globallyUniqueKey: pB,
        alwaysMountChildren: lB = !1,
        doGameplayStartStopOnShow: JB = !0,
        keepsMovement: YB = !1
      } = BB;
      return (0, yB.d)(!0, dB, pB, YB), (0, VB.e)(JB, dB), dB || lB ? TB : null
    }
  },
  8175: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => JB
    });
    var VB = dB(21),
      yB = dB(2925),
      pB = dB(1235),
      lB = dB(1275);
    const JB = async () => {
      if ((0, lB.i)()) {
        if (!0 !== await pB.NotificationProvider.showPromptPopup({
            title: "controller:menusLeaveGameTitle",
            confirmText: "controller:menusLeaveGameLeave",
            cancelText: "controller:menusLeaveGameStay",
            destructive: !0
          }).getResult() || "inGame" !== VB.d.get("gameState")) return
      }(0, yB.b)()
    }
  },
  8178: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => YB,
      d: () => pB,
      g: () => lB,
      k: () => yB,
      o: () => JB
    });
    var VB = dB(1711);
    const yB = "controllerPadShopOpen",
      pB = BB => VB.f.includes(BB),
      lB = BB => Object.values(BB).some((BB => !1 !== BB.canBuy && !BB.isRewardedAd)),
      JB = (BB, TB, dB) => {
        var VB, yB, lB, JB;
        const YB = BB.filter((BB => !pB(BB))),
          gB = null !== TB && BB.includes(TB) ? TB : null;
        return null !== gB && !pB(gB) && dB(gB) ? gB : null !== (VB = null !== (yB = null !== (lB = null !== (JB = YB.find(dB)) && void 0 !== JB ? JB : YB[0]) && void 0 !== lB ? lB : gB) && void 0 !== yB ? yB : BB[0]) && void 0 !== VB ? VB : null
      },
      YB = BB => BB.userInput || BB.isRewardedAd || "boolean" === typeof BB.isSelected ? null : JSON.stringify([BB.image, BB.cost, BB.currency, BB.amount, BB.customTitle, BB.buyButtonText, BB.description, BB.canBuy])
  },
  8196: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => gB,
      f: () => oB
    });
    var VB = dB(62),
      yB = dB(1317),
      pB = dB(1764),
      lB = dB(1286),
      JB = dB(1299),
      YB = dB(980);
    const gB = () => {
        const BB = (0, lB.y)();
        if ((0, VB.useEffect)((() => {
            (0, lB.p)()
          }), []), !BB) return null;
        const {
          ControllerCategory: TB
        } = BB;
        return (0, YB.jsx)(JB.c, {
          children: (0, YB.jsx)(TB, {})
        })
      },
      oB = () => {
        var BB;
        const TB = (0, lB.y)(),
          [, dB] = (0, VB.useReducer)((BB => BB + 1), 0);
        return (0, yB.e)(pB.d, dB), null !== (BB = null === TB || void 0 === TB ? void 0 : TB.hasActivePad()) && void 0 !== BB && BB
      }
  },
  8527: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => VB
    });
    const VB = new Set(["chunkBorders"])
  },
  8520: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      ALL_DEV_TOOLS: () => lB,
      coreDevTools: () => gB,
      devTools: () => YB
    });
    var VB = dB(586),
      yB = dB(1185),
      pB = dB(8527);
    const lB = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function JB() {
      const {
        noaDevTools: BB
      } = await dB.e(218).then((() => dB(39796)));
      return BB
    }
    const YB = new class {
        constructor() {
          this.loadHost = JB, this.tools = lB
        }
        setHost(BB) {
          this.tools = null === BB ? lB : BB.tools, this.loadHost = null === BB ? JB : async () => BB
        }
        supports(BB) {
          return this.tools.has(BB)
        }
        async downloadScene(BB, TB) {
          const dB = await this.loadHost();
          await dB.downloadScene(BB, TB)
        }
        async setAmbientLightIntensity(BB) {
          const TB = await this.loadHost();
          await TB.setAmbientLightIntensity(BB)
        }
      },
      gB = {
        tools: pB.d,
        downloadScene: async () => {
          throw new Error("This client can't download the scene")
        },
        setAmbientLightIntensity: async () => {
          throw new Error("This client can't set the ambient light")
        }
      };
    VB.p && YB.setHost(gB), (0, yB.r)((() => {
      YB.setHost(gB)
    }))
  },
  5994: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => yB,
      d: () => pB
    });
    var VB = dB(33);
    const yB = "shaderPack";
    async function pB() {
      var BB;
      let TB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (BB = await VB.f.getItem(yB, TB)) && void 0 !== BB ? BB : null
    }
  },
  8540: (BB, TB, dB) => {
    function VB(BB, TB) {
      return BB && !TB
    }
    dB.d(TB, {
      d: () => VB
    })
  },
  8556: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => pB
    });
    var VB = dB(955);

    function yB() {
      var BB, TB;
      return null !== (BB = null === (TB = screen.orientation) || void 0 === TB ? void 0 : TB.type) && void 0 !== BB ? BB : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const pB = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && yB() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = yB(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, VB.wu)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const BB of this.resizers) BB()
          }
        }), 1e3)
      }
      heldSizer(BB) {
        let TB = !1;
        return () => {
          if (TB && this.isHeld()) return null;
          const dB = BB();
          return TB ||= null !== dB, dB
        }
      }
      onRelease(BB) {
        return this.resizers.add(BB), () => {
          this.resizers.delete(BB)
        }
      }
    }
  },
  8559: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => JB
    });
    var VB = dB(184),
      yB = dB(1652),
      pB = dB(33);
    const lB = 2;

    function JB() {
      let BB = YB("chunkHorizAddDist", VB.c.defaultChunkHorizAddDistance),
        TB = YB("chunkVertAddDist", VB.c.defaultChunkVertAddDistance);
      return BB = (0, yB.d)(BB, lB, VB.c.maxChunkHorizAddDistance), TB = (0, yB.d)(TB, lB, VB.c.maxChunkVertAddDistance), [BB, TB]
    }

    function YB(BB, TB) {
      const dB = pB.j.getItem(BB),
        VB = "number" === typeof dB || "string" === typeof dB ? Number(dB) : Number.NaN;
      return Number.isFinite(VB) ? VB : TB
    }
  },
  8204: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => JB,
      f: () => YB
    });
    var VB = dB(21),
      yB = dB(1209),
      pB = dB(95);
    const lB = {
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

    function JB() {
      return (0, pB.isMobile)() && "function" === typeof navigator.vibrate
    }
    const YB = new class {
      constructor(BB) {
        this.deps = BB, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(BB, TB) {
        var dB;
        if (!this.deps.enabled()) return;
        const VB = lB[BB],
          yB = null !== TB && void 0 !== TB ? TB : VB.pattern;
        if (null === yB) return void console.warn("No vibration pattern for", BB);
        const pB = this.deps.now();
        pB - this.lastAnyAt < 40 && VB.priority < this.playingPriority || pB - (null !== (dB = this.lastAt.get(BB)) && void 0 !== dB ? dB : -1 / 0) < VB.minGapMs || pB < this.playingUntil && VB.priority < this.playingPriority || (this.lastAt.set(BB, pB), this.lastAnyAt = pB, this.playingUntil = pB + yB.reduce(((BB, TB) => BB + TB), 0), this.playingPriority = VB.priority, this.deps.vibrate(yB))
      }
    }({
      vibrate: BB => {
        navigator.vibrate([...BB])
      },
      now: () => performance.now(),
      enabled: () => JB() && VB.d.get("isTouchScreen") && VB.d.get("clientEscMenuOptions").vibration && !(0, yB.h)()
    })
  },
  8531: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => OB,
      e: () => LB
    });
    var VB = dB(21),
      yB = dB(1573),
      pB = dB(33),
      lB = dB(1235),
      JB = dB(3160),
      YB = dB(1353),
      gB = dB(1275);
    const oB = 2592e5,
      kB = "notificationOptInLastPromptedAt";
    async function LB() {
      var BB;
      const TB = await OB();
      if (null === TB) return;
      const dB = null !== (BB = pB.j.getItem(kB)) && void 0 !== BB ? BB : 0;
      if (Date.now() - dB < oB) return;
      if ((0, gB.i)()) return;
      const VB = await lB.NotificationProvider.showPromptPopup({
        icon: "bell",
        title: "mobilePushNotifications:optInTitle",
        subtitle: yB.d.supports("notifications") ? "mobilePushNotifications:optInSubtitle" : "mobilePushNotifications:optInSubtitleBrowser",
        confirmText: "mobilePushNotifications:optInConfirm",
        cancelText: "mobilePushNotifications:optInCancel",
        padStartsOnCancel: !0
      }).getResult();
      "notificationTornDown" !== VB && (pB.j.setItem(kB, Date.now()), (0, YB.f)({
        id: !0 === VB ? "push.allow" : "push.deny",
        value: yB.d.supports("notifications") ? "app" : "browser"
      }), !0 === VB && TB().catch((BB => {
        console.error("Failed to ask for push notifications:", BB)
      })))
    }
    async function OB() {
      return await yB.d.ready, yB.d.supports("notifications") ? VB.d.get("mobilePushNotificationsCanAsk") ? async () => {
        yB.d.request("notifications.requestPermission", {}).then((BB => {
          let {
            canAsk: TB
          } = BB;
          VB.d.set({
            mobilePushNotificationsCanAsk: TB
          })
        }), (BB => {
          console.error("The app couldn't ask for push notifications:", BB)
        }))
      }: null: await JB.c.canAsk() ? () => JB.c.requestPermission() : null
    }
  },
  8547: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => JB,
      d: () => YB
    });
    var VB = dB(21);
    const yB = 24,
      pB = "farNametags",
      lB = 1e5;

    function JB() {
      var BB;
      return null === (BB = VB.d.get("showDistantNametags")) || void 0 === BB || BB
    }

    function YB() {
      var BB;
      return null !== (BB = function() {
        const BB = new URLSearchParams(window.location.search).get(pB),
          TB = null === BB || "" === BB ? NaN : Number(BB);
        return Number.isFinite(TB) && TB >= 0 ? Math.min(TB, lB) : null
      }()) && void 0 !== BB ? BB : JB() ? 0 : yB
    }
  },
  8594: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => yB,
      c: () => lB
    });
    const VB = [{
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

    function yB(BB) {
      let TB, dB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof BB) {
        if (!Number.isFinite(BB)) return "0";
        if (Math.abs(BB) < 100) {
          const TB = BB < 0 ? "-" : "",
            dB = Math.abs(BB);
          return dB >= 10 ? `${TB}${dB.toFixed(1).replace(/\.0$/,"")}` : `${TB}${dB.toFixed(2).replace(/\.?0+$/,"")}`
        }
        TB = BigInt(Math.floor(BB))
      } else TB = BB;
      const yB = TB < 0n ? -TB : TB,
        pB = TB < 0n ? "-" : "",
        lB = yB.toString();
      if (lB.length <= dB) return `${pB}${lB}`;
      const JB = 3 * Math.floor((lB.length - 1) / 3);
      if (JB < 3) return `${pB}${lB}`;
      if (JB > 3 * VB.length) {
        const BB = lB[0],
          TB = lB.slice(1, 3).replace(/0+$/, "");
        return `${pB}${TB?`${BB}.${TB}`:BB}e${lB.length-1}`
      }
      const {
        threshold: YB,
        suffix: gB
      } = VB[VB.length - JB / 3], oB = yB / YB, kB = Number(1000n * (yB % YB) / YB), LB = Number(oB) + kB / 1e3;
      let OB;
      return OB = LB >= 100 ? Math.floor(LB).toString() : LB >= 10 ? LB.toFixed(1).replace(/\.0$/, "") : LB.toFixed(2).replace(/\.?0+$/, ""), `${pB}${OB}${gB}`
    }
    const pB = VB.map((BB => {
      let {
        threshold: TB,
        suffix: dB
      } = BB;
      return {
        threshold: Number(TB),
        suffix: dB
      }
    })).filter((BB => {
      let {
        threshold: TB
      } = BB;
      return Number.isFinite(TB)
    }));

    function lB(BB) {
      const TB = Math.abs(BB),
        dB = BB < 0 ? "-" : "";
      for (const {
          threshold: VB,
          suffix: yB
        }
        of pB)
        if (TB >= VB) {
          const BB = TB / VB;
          if (BB >= 1e3) return `${dB}${TB.toExponential(2).replace("e+","e")}`;
          let pB;
          return pB = BB >= 100 ? Math.floor(BB).toString() : BB >= 10 ? BB.toFixed(1).replace(/\.0$/, "") : BB.toFixed(2).replace(/\.?0+$/, ""), `${dB}${pB}${yB}`
        } return `${dB}${TB}`
    }
  },
  8584: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => oB,
      c: () => LB,
      d: () => kB,
      g: () => lB,
      k: () => gB,
      o: () => YB
    });
    var VB = dB(279);
    const yB = ["Wood Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table"],
      pB = {
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

    function lB(BB) {
      var TB;
      return null !== (TB = pB[BB]) && void 0 !== TB ? TB : {
        translationKey: ""
      }
    }
    const JB = {
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

    function YB(BB) {
      return yB.includes(BB)
    }

    function gB(BB) {
      var TB;
      return !0 === (null === BB || void 0 === BB || null === (TB = BB.customAttributes) || void 0 === TB ? void 0 : TB.cannotEnchant)
    }

    function oB(BB, TB) {
      const {
        max: dB
      } = JB[BB].at(-1);
      return TB <= dB
    }

    function kB(BB) {
      const TB = Math.sin(BB / 80),
        dB = BB => {
          if (BB <= 0) return 0;
          if (BB > 1) return 1;
          let TB = 0;
          const dB = [1, 7, 21, 35, 35, 21, 7, 1];
          for (let VB = 0; VB < dB.length; VB++) {
            TB += (VB % 2 === 0 ? 1 : -1) * dB[VB] * Math.pow(BB, 2 + VB) / (2 + VB)
          }
          return 72 * TB
        },
        VB = .3 - .78 * TB,
        yB = .5 - .78 * TB,
        pB = .6 - .7 * TB,
        lB = .8 - .6 * TB;
      let JB = dB(VB),
        YB = dB(yB) - JB,
        gB = dB(pB) - YB - JB,
        oB = dB(lB) - gB - YB - JB;
      VB < .041 && (YB /= 1 - JB, gB /= 1 - JB, oB /= 1 - JB, JB = 0), yB < .041 && (JB /= 1 - YB, gB /= 1 - YB, oB /= 1 - YB, YB = 0), pB < .041 && (JB /= 1 - gB, YB /= 1 - gB, oB /= 1 - gB, gB = 0), lB < .041 && (JB /= 1 - oB, YB /= 1 - oB, gB /= 1 - oB, oB = 0);
      return {
        commonProb: JB,
        uncommonProb: YB,
        rareProb: gB,
        epicProb: oB,
        legendaryProb: 1 - (oB + gB + YB + JB)
      }
    }

    function LB(BB, TB) {
      const {
        min: dB,
        max: yB
      } = JB[BB][TB], pB = VB.e.sampleUniformIntDistribution(dB, yB, "includeMax");
      return {
        ...kB(pB),
        level: pB
      }
    }
  },
  8075: (BB, TB, dB) => {
    function VB(BB, TB) {
      return !BB.hidden && (TB || !BB.isRewardedAd)
    }

    function yB(BB) {
      return "object" === typeof BB ? BB.option : BB
    }

    function pB(BB, TB) {
      var dB;
      if ("dropdown" === (null === (dB = BB.userInput) || void 0 === dB ? void 0 : dB.type) && "object" === typeof BB.userInput.dropdownOptions[0]) {
        for (const dB of BB.userInput.dropdownOptions)
          if (yB(dB) === TB) return "object" === typeof dB ? dB.cost : BB.cost;
        console.error("Didn't find matching option for dropdown item. Item:", BB, "input:", TB)
      }
      return BB.cost
    }

    function lB(BB, TB, dB) {
      var VB;
      const yB = null !== (VB = dB.excludedPlayers) && void 0 !== VB ? VB : [TB];
      return BB.filter((BB => !yB.includes(BB)))
    }
    dB.d(TB, {
      e: () => pB,
      i: () => yB,
      k: () => lB,
      m: () => VB
    })
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);