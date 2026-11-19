export const id = 98;
export const ids = [98, 184];
export const modules = {
  8645: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      EverythingMenu: () => UW
    });
    var iT = IT(46),
      zT = IT(1042),
      kT = IT.n(zT),
      WT = IT(1171),
      XT = IT(1055),
      BT = IT(1880),
      FT = IT(1102),
      ST = IT(1083);

    function DT(TT) {
      let {
        items: oT,
        onClick: IT,
        selectedItemId: iT,
        className: zT,
        padStartsOnTab: DT = !0
      } = TT;
      const {
        t: LT
      } = (0, WT.t)(), xT = (0, FT.n)(), cT = [];
      for (const kT of oT) {
        var KT;
        const TT = cT[cT.length - 1];
        var MT;
        if (TT && TT.title === (null !== (KT = kT.section) && void 0 !== KT ? KT : null)) TT.items.push(kT);
        else cT.push({
          title: null !== (MT = kT.section) && void 0 !== MT ? MT : null,
          items: [kT]
        })
      }
      return (0, ST.jsx)("div", {
        className: kT()("MenuSideBarBody", zT),
        "data-pad-tabs": "2",
        children: cT.map(((TT, oT) => {
          var zT;
          return (0, ST.jsxs)("div", {
            className: "MenuSideBarSection",
            children: [TT.title && (0, ST.jsx)("div", {
              className: "MenuSideBarSectionTitle",
              children: LT(TT.title)
            }), TT.items.map((TT => {
              var oT;
              const zT = !!TT.iconElement || !!TT.faIcon;
              return (0, ST.jsxs)("div", {
                "data-pad-tab": !0,
                "data-pad-selected": iT === TT.id ? "true" : void 0,
                "data-pad-default-focus": DT && iT === TT.id || void 0,
                className: kT()("MenuSideBarBodyTab", {
                  ActiveMenuSideBarBodyTab: iT === TT.id
                }),
                onClick: () => {
                  IT(TT.id)
                },
                children: [zT && (0, ST.jsx)("div", {
                  className: "MenuSideBarBodyTabIcon",
                  children: null !== (oT = TT.iconElement) && void 0 !== oT ? oT : (0, ST.jsx)(XT.e, {
                    name: TT.faIcon
                  })
                }), (!xT || !zT) && (0, ST.jsx)("div", {
                  children: LT(TT.title)
                }), TT.redDot && (0, ST.jsx)(BT.d, {
                  top: "-0.2rem",
                  right: "-1rem"
                })]
              }, TT.id)
            }))]
          }, null !== (zT = TT.title) && void 0 !== zT ? zT : oT)
        }))
      })
    }
    var LT = IT(2610),
      xT = IT(1110),
      cT = IT(2227),
      KT = IT(1108),
      MT = IT(1408),
      rT = IT(90),
      AT = IT(1751),
      gT = IT(2054),
      hT = IT(2063),
      wT = IT(1624),
      mT = IT(1310),
      eT = IT(4481),
      RT = IT(12),
      uT = IT(8647);

    function vT(TT) {
      let {
        setApplySettingsCallback: oT
      } = TT;
      const {
        clientEscMenuOptions: IT
      } = (0, RT.k)(["clientEscMenuOptions"]), [zT, kT] = (0, iT.useState)(!1), [WT, XT] = (0, iT.useState)(!1), [BT, FT] = (0, iT.useState)(6400), [DT, LT] = (0, iT.useState)(3600), [xT, cT] = (0, iT.useState)(!1), [KT, rT] = (0, iT.useState)(!1);

      function AT(TT) {
        const oT = "screenshot" === TT ? XT : kT;
        oT(!0);
        const IT = xT ? "normals" : KT ? "depth" : null;
        uT.devTools.downloadScene(TT, {
          width: BT,
          height: DT,
          colouring: IT
        }).catch((TT => {
          console.error("Couldn't download the scene", TT)
        })).finally((() => {
          oT(!1)
        }))
      }
      return (0, ST.jsxs)("div", {
        className: "DeveloperToolsCategory",
        children: [(0, ST.jsx)(eT.e, {
          label: "Disable Ambient Occlusion",
          checked: IT.disableAmbientOcclusion,
          onClick: TT => {
            RT.c.setClientEscMenuOptions({
              disableAmbientOcclusion: TT
            }), oT((() => eT.n))
          },
          circleInfoText: "Disables ambient occlusion which is the shadow effect that makes corners and crevices darker."
        }), uT.devTools.supports("ambientLight") && (0, ST.jsx)(eT.k, {
          name: "Ambient Lighting Intensity",
          min: 0,
          max: 1,
          step: .01,
          initValue: IT.ambientLightIntensity,
          onChange: TT => {
            uT.devTools.setAmbientLightIntensity(TT).then((() => {
              RT.c.setClientEscMenuOptions({
                ambientLightIntensity: TT
              })
            })).catch((TT => {
              console.error("Couldn't set the ambient light", TT)
            }))
          },
          circleInfoText: "Sets the intensity of the white ambient light in the scene. The default is 0.5."
        }), uT.devTools.supports("weaponRaycasts") && (0, ST.jsx)(eT.e, {
          label: "Show Weapon Raycasts",
          checked: IT.showWeaponRaycasts,
          onClick: TT => {
            RT.c.setClientEscMenuOptions({
              showWeaponRaycasts: TT
            })
          },
          circleInfoText: "Draws debug lines for the raw raycasts used by locally fired weapons."
        }), uT.devTools.supports("sceneDownload") && (0, ST.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, ST.jsxs)("div", {
            className: "SettingBox WarningBorder",
            children: [(0, ST.jsx)(eT.e, {
              label: "Apply normal-based coloring",
              checked: xT,
              onClick: TT => {
                cT(TT), TT && rT(!1)
              },
              circleInfoText: "Colors faces based on their normal direction (red=X, green=Y, blue=Z)."
            }), (0, ST.jsx)(eT.e, {
              label: "Apply depth-based coloring",
              checked: KT,
              onClick: TT => {
                rT(TT), TT && cT(!1)
              },
              circleInfoText: "Colors from white (near) to black (far) based on distance from camera. Only works for screenshot export."
            }), (0, ST.jsxs)("div", {
              className: "SettingBox DeveloperToolsCategoryScreenshotSettings",
              children: [(0, ST.jsx)("div", {
                className: "SettingLabel",
                children: "Screenshot size in pixels (width x height)"
              }), (0, ST.jsx)(wT.e, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (TT, oT) => {
                  const IT = parseInt(TT) || 6400;
                  FT(IT)
                },
                placeholderText: "width",
                maxLength: 10,
                defaultValue: BT.toString()
              }), (0, ST.jsx)("span", {
                children: "X"
              }), (0, ST.jsx)(wT.e, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (TT, oT) => {
                  const IT = parseInt(TT) || 3600;
                  LT(IT)
                },
                placeholderText: "height",
                maxLength: 10,
                defaultValue: DT.toString()
              })]
            }), (0, ST.jsxs)("div", {
              className: "DeveloperToolsCategoryExportButtons",
              children: [(0, ST.jsxs)(MT.e, {
                onClick: () => {
                  AT("screenshot")
                },
                disabled: WT,
                children: [WT && (0, ST.jsx)(mT.d, {}), "Download Screenshot"]
              }), (0, ST.jsxs)(MT.e, {
                onClick: () => {
                  AT("glb")
                },
                disabled: zT,
                children: [zT && (0, ST.jsx)(mT.d, {}), "Download GLB"]
              })]
            })]
          }), (0, ST.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: 'To download GLB of scene with textures you need to "Disable Block Texture Atlas" in graphic settings first (you will need to reload the page to apply the setting).'
          })]
        })]
      })
    }
    var ET = IT(139),
      fT = IT(1117),
      CT = IT(1183),
      jT = IT(2613),
      JT = IT(1468),
      UT = IT(1236),
      aT = IT(1207),
      YT = IT(2664),
      QT = IT(1858),
      OT = IT(1451),
      HT = IT(314),
      nT = IT(2071),
      qT = IT(2084),
      ZT = IT(1337),
      lT = IT(1188),
      sT = IT(4375),
      tT = IT(1427),
      GT = IT(3225),
      pT = IT(2393),
      bT = IT(2041);

    function yT(TT) {
      let {
        showing: oT
      } = TT;
      const {
        t: IT
      } = (0, WT.t)(), {
        data: iT,
        failed: zT
      } = (0, pT.g)(GT.d, oT);
      return 0 === (null === iT || void 0 === iT ? void 0 : iT.length) || null === iT && !zT ? null : (0, ST.jsxs)("div", {
        className: "SettingBox AccountSettingsPaymentHistory",
        children: [(0, ST.jsx)("div", {
          className: "AccountSettingsLabel",
          children: IT("paymentHistory:title")
        }), null === iT && zT && (0, ST.jsx)("div", {
          className: "AccountSettingsPaymentHistoryError",
          children: IT("paymentHistory:loadFailed")
        }), null !== iT && (0, ST.jsx)("ul", {
          className: "PaymentHistoryList",
          children: iT.map((TT => (0, ST.jsxs)("li", {
            className: "PaymentHistoryEntry",
            children: [(0, ST.jsx)(bT.d, {
              entry: TT
            }), (0, ST.jsxs)("div", {
              className: "PaymentHistoryEntryText",
              children: [(0, ST.jsx)("div", {
                children: (0, bT.h)(IT, TT)
              }), (0, ST.jsxs)("div", {
                className: "PaymentHistoryEntryDate",
                children: [new Date(TT.at).toLocaleDateString(), "number" === typeof TT.orderId && ` \xb7 ${IT("paymentHistory:order",{orderId:TT.orderId})}`]
              })]
            })]
          }, (0, GT.b)(TT))))
        })]
      })
    }
    var NT = IT(1216),
      PT = IT(1325),
      dT = IT(1280);

    function VT() {
      const {
        userContext: TT,
        isUserContextUpdating: oT
      } = (0, xT.b)(), {
        t: IT
      } = (0, WT.t)(), [zT, kT] = (0, iT.useState)(!1), [XT, BT] = (0, iT.useState)(null), FT = oT || zT;
      return (0, ST.jsxs)("div", {
        className: "AccountSettingsDeleteAccountButtonContainer",
        children: [(0, ST.jsxs)(MT.C, {
          onClick: async function() {
            if (!zT) {
              kT(!0);
              try {
                const oT = await async function() {
                  if (!0 !== await PT.NotificationProvider.showPromptPopup({
                      title: "auth:deleteAccountPopupTitleNamed",
                      textOpts: {
                        title: {
                          playerName: (0, UT.b)(TT.getPlayerName(), !rT.featureFlags.canSeeRealPlayerNames)
                        }
                      },
                      subtitle: To(TT.isLoggedIn()),
                      confirmText: "auth:deleteAccount",
                      destructive: !0,
                      confirmTooltip: "auth:deleteAccountPopupConfirmTooltip",
                      cancelText: "general:cancel",
                      cancelTooltip: "auth:deleteAccountPopupCancelTooltip"
                    }).getResult()) return NT.b.ok();
                  const oT = await (0, fT.postJsonWithMetricsCookiesAndJsonResponse)(`${CT.clientSideServerUrls.indexUrl}/index/metrics/revoke-cookies`, {
                    gameState: RT.c.get("gameState")
                  }, {
                    retries: 3
                  }, TT.getMetricsCookies());
                  if (oT.error) return NT.b.error(oT.error);
                  (0, ET.c)() && (await dT.m.discordActivity()).exit("User deleted their account");
                  return (0, fT.forgetStoredGuestAccount)(TT.whamm), (0, fT.forceGlobalSignOut)(!0), NT.b.ok()
                }(), IT = oT.isError() ? oT.asError().message : null;
                BT(IT)
              } catch (oT) {
                console.error("Failed to delete account:", oT), BT(IT("auth:genericDeleteAccountError"))
              }
              kT(!1)
            }
          },
          className: "AccountSettingsDeleteAccountButton",
          disabled: FT,
          children: [FT && (0, ST.jsx)("div", {
            className: "DeletingAccountLoader",
            children: (0, ST.jsx)(mT.d, {})
          }), IT("auth:deleteAccount")]
        }), XT && (0, ST.jsx)("div", {
          className: "DeleteAccountError",
          children: XT
        })]
      })
    }

    function To(TT) {
      return (0, ET.c)() ? "auth:discordActivityDeleteAccountWarning" : TT ? "auth:deleteAccountWarning" : "auth:deleteGuestAccountWarning"
    }
    var oo = IT(3149),
      Io = IT(3163),
      io = IT(3155);

    function zo(TT) {
      let {
        showing: oT
      } = TT;
      const {
        t: IT
      } = (0, WT.t)(), {
        data: iT,
        failed: zT
      } = (0, pT.g)(oo.b, oT), kT = null === iT ? null : (0, oo.e)(iT);
      return (0, ST.jsxs)("div", {
        className: "SettingBox BlockedAndIgnoredPlayers",
        children: [(0, ST.jsx)("div", {
          className: "AccountSettingsLabel",
          children: IT("settingsMenu:blockedAndIgnoredPlayers")
        }), null === kT && !zT && (0, ST.jsx)(mT.d, {}), null === kT && zT && (0, ST.jsxs)("div", {
          className: "BlockedAndIgnoredPlayersError",
          children: [IT("settingsMenu:blockedAndIgnoredPlayersLoadFailed"), (0, ST.jsx)(MT.e, {
            className: "SmallTextLight",
            onClick: () => {
              oo.b.refresh()
            },
            children: IT("general:tryAgain")
          })]
        }), 0 === (null === kT || void 0 === kT ? void 0 : kT.length) && (0, ST.jsx)("div", {
          className: "BlockedAndIgnoredPlayersEmpty",
          children: IT("settingsMenu:noBlockedOrIgnoredPlayers")
        }), null !== kT && kT.length > 0 && (0, ST.jsx)("ul", {
          className: "BlockedAndIgnoredPlayersList",
          children: kT.map((TT => {
            let {
              name: oT,
              exclusion: iT
            } = TT;
            const zT = io.i[iT];
            return (0, ST.jsxs)("li", {
              className: "BlockedAndIgnoredPlayer",
              children: [(0, ST.jsx)("div", {
                className: "BlockedAndIgnoredPlayerName",
                children: oT
              }), (0, ST.jsx)(MT.i, {
                className: "SmallTextLight",
                onClick: () => {
                  (0, Io.g)(zT, oT, {
                    chatMessage: null
                  })
                },
                children: IT(io.j[zT].text)
              })]
            }, oT)
          }))
        })]
      })
    }
    const ko = (0, iT.memo)((function(TT) {
      var oT;
      let {
        showing: IT,
        inGame: zT
      } = TT;
      const {
        t: BT,
        selectedLanguage: FT
      } = (0, WT.t)(), {
        hideSocialLocationFrom: DT
      } = (0, RT.k)(["hideSocialLocationFrom"]), cT = (0, LT.c)(), {
        userContext: KT,
        isUserContextUpdating: AT
      } = (0, xT.b)(), [gT, hT] = (0, iT.useState)(null !== (oT = KT.getPlayerName()) && void 0 !== oT ? oT : ""), [uT, vT] = (0, iT.useState)(null), {
        purchasing: GT,
        outcome: pT,
        purchase: bT
      } = (0, jT.e)("/super-rank-welcome"), [NT, PT] = (0, iT.useState)(!1), [dT, To] = (0, iT.useState)(!1), oo = (0, iT.useRef)(null), Io = (0, iT.useRef)(null), io = (0, QT.i)({
        showProgressUpdateMessage: !0,
        enabled: !0
      }), ko = null === io, Xo = null !== io && void 0 !== io ? io : [], Bo = KT !== fT.NULL_USER_CONTEXT && !KT.isLoggedIn(), Fo = Bo && 0 !== (null === io || void 0 === io ? void 0 : io.length), [So, Do] = (0, iT.useState)([]), [Lo, xo] = (0, iT.useState)(!1), co = KT.playerHasRank("youtuber"), Ko = (0, iT.useCallback)((() => OT.e.getPlayerProfile(KT, {
        lowerCaseName: KT.getPlayerName().toLowerCase()
      }).then((TT => {
        Do(TT.socialLinks)
      })).catch((TT => {
        console.error("Failed to refresh social links", TT)
      }))), [KT]);

      function Mo(TT) {
        TT !== gT && ((0, UT.j)(TT) ? (TT = (0, UT.n)(TT), vT("Only letters, numbers, and _")) : vT(null), oo.current && (oo.current.value = TT), hT(TT))
      }
      return (0, iT.useEffect)((() => (!0 === IT ? (clearInterval(Io.current), Io.current = setInterval(cT, 1e3)) : clearInterval(Io.current), () => {
        clearInterval(Io.current)
      })), [IT, cT]), (0, iT.useEffect)((() => {
        var TT;
        hT(null !== (TT = KT.getPlayerName()) && void 0 !== TT ? TT : "")
      }), [KT]), (0, iT.useEffect)((() => {
        if (!IT || !co || AT) return;
        let TT = !1;
        return xo(!0), Do([]), OT.e.getPlayerProfile(KT, {
          lowerCaseName: KT.getPlayerName().toLowerCase()
        }).then((oT => {
          TT || Do(oT.socialLinks)
        })).catch((TT => {
          console.error("Failed to load social links", TT)
        })).finally((() => {
          TT || xo(!1)
        })), () => {
          TT = !0
        }
      }), [IT, co, AT, KT]), (0, ST.jsxs)("div", {
        className: kT()("SettingsMenuRightInner AccountSettings", {
          AccountSettingsLocked: zT
        }),
        children: [zT && (0, ST.jsx)("div", {
          className: "AccountSettingsInGameWarning",
          children: BT("settingsMenu:accountSettingsInGameWarning")
        }), (0, ST.jsxs)("div", {
          className: "SettingBox SetAccountNameDiv SmallTextLight",
          children: [(0, ST.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsNameLabel",
            children: [BT("homePage:discordNamePopupTitle"), (0, ST.jsxs)(JT.LinkPreserveSearch, {
              className: "AccountSettingsViewProfile",
              to: (0, aT.h)({
                name: KT.getPlayerName()
              }),
              onClick: () => {
                RT.c.set({
                  openEverythingMenuName: null
                })
              },
              children: [(0, ST.jsx)(XT.e, {
                name: "arrow-up-right-from-square"
              }), " ", BT("profileCard:viewProfile")]
            })]
          }), (0, ST.jsxs)("div", {
            className: "EnterAccNameDivWrapper",
            "data-pad-initial-area": !0,
            children: [(0, ST.jsxs)("div", {
              className: "EnterAccNameInputRow",
              children: [rT.featureFlags.canChangeName && (0, ST.jsx)(wT.e, {
                className: "EnterName",
                placeholderText: BT("homePage:enterName"),
                maxLength: UT.h,
                defaultValue: gT,
                onValueChange: TT => {
                  Mo(TT)
                },
                forcedText: NT || !rT.featureFlags.canChangeName ? gT : null,
                blurOnEnter: !0,
                domRef: oo
              }), (0, ST.jsx)(MT.e, {
                className: "ChooseRandomNameButton",
                onClick: () => {
                  Mo((0, UT.f)())
                },
                children: (0, ST.jsx)(XT.e, {
                  name: "dice",
                  className: "ChooseRandomNameIcon"
                })
              }), !rT.featureFlags.canChangeName && (0, ST.jsx)("div", {
                className: "EnterName NoInput",
                children: (0, UT.b)(gT, !rT.featureFlags.canSeeRealPlayerNames)
              })]
            }), (0, ST.jsx)(MT.e, {
              className: "ChooseNameButton",
              disabled: NT || gT === KT.getPlayerName(),
              onClick: () => {
                gT.length < UT.i ? vT(BT("homePage:changeNameMinLengthError", {
                  length: UT.i
                })) : gT.length > UT.h ? vT(BT("homePage:changeNameMaxLengthError", {
                  length: UT.h
                })) : (PT(!0), vT(null), async function(TT, oT, IT, iT) {
                  const zT = await (0, fT.postJsonWithMetricsCookiesAndJsonResponse)(`${CT.clientSideServerUrls.indexUrl}/index/name/update`, {
                    name: TT
                  }, {
                    retries: 3
                  }, oT.getMetricsCookies()).catch((TT => (console.error("Bad response from the server when trying to update name:", TT), {
                    err: "An error occurred trying to change your name! Please report on discord what steps you took to get this error message."
                  })));
                  zT.err ? (console.error("Error when trying to get with new name from DB", zT.err), iT(zT.err)) : !0 === zT.nameExists ? iT("Name is already taken") : IT(TT)
                }(gT, KT, (TT => {
                  KT.setPlayerName(TT), PT(!1)
                }), (TT => {
                  vT(TT), PT(!1)
                })))
              },
              children: BT("general:choose")
            })]
          }), uT && (0, ST.jsx)("div", {
            className: "ChooseAccNameError",
            children: uT
          })]
        }), (0, ST.jsx)(eT.e, {
          label: (() => {
            if ((0, lT.j)(DT)) {
              const TT = (0, WT.l)(FT.code, "general:timeLeft"),
                oT = (0, HT.cb)(TT, Date.now(), DT + lT.g);
              return `${BT("settingsMenu:hideSocialLocation")} (${BT("general:timeLeft",{time:oT})})`
            }
            return BT("settingsMenu:hideSocialLocation")
          })(),
          onClick: () => {
            const TT = !(0, lT.j)(DT);
            (0, tT.reportAnalyticsClick)({
              id: "social.hide_location",
              value: TT ? "on" : "off"
            }), To(!0), OT.e.setHideSocialLocation(KT, TT).then((() => {
              RT.c.set({
                hideSocialLocationFrom: TT ? Date.now() : null
              })
            })).finally((() => {
              To(!1)
            }))
          },
          checked: (0, lT.j)(DT),
          disabled: dT
        }), co && (0, ST.jsxs)("div", {
          className: "SettingBox AccountSettingsSocialLinks",
          children: [(0, ST.jsx)("div", {
            className: "AccountSettingsLabel",
            children: BT("settingsMenu:socialLinks")
          }), Lo && (0, ST.jsx)(mT.d, {}), !Lo && (0, ST.jsx)(sT.b, {
            socialLinks: So,
            editable: !0,
            userContext: KT,
            onLinksUpdated: Ko
          })]
        }), (0, ST.jsxs)("div", {
          className: "SettingBox",
          children: [(0, ST.jsx)("div", {
            className: "AccountSettingsLabel",
            children: BT(Fo ? "auth:loginOrSwitchAccount" : "auth:login")
          }), ko && (0, ST.jsx)(mT.d, {}), !ko && 0 === Xo.length && (0, ST.jsx)("div", {
            className: "NoLoginOptions",
            children: BT("auth:noLoginOptions")
          }), !ko && Xo.length > 0 && "crazygames" !== ET.p && (0, ST.jsx)("div", {
            className: "AccountSettingsLoginButtons",
            children: Xo
          }), !ko && Xo.length > 0 && "crazygames" === ET.p && (0, ST.jsxs)("div", {
            className: "AccountSettingsLoginButtons",
            children: [Xo[0], Xo.length > 1 && (0, ST.jsxs)(ST.Fragment, {
              children: [(0, ST.jsxs)("div", {
                className: "LegacyLoginOptionsHeader",
                children: [(0, ST.jsx)("span", {
                  className: "LegacyLoginOptionsTitle",
                  children: BT("auth:legacyLoginOptions")
                }), (0, ST.jsx)(ZT.d, {
                  className: "LegacyLoginOptionsInfoIcon",
                  hoverInfo: BT("auth:legacyLoginOptionsInfo")
                })]
              }), (0, ST.jsx)("div", {
                className: "LegacyAccountSettingsLoginButtons",
                children: Xo.slice(1)
              })]
            })]
          }), rT.featureFlags.useLogin && (null !== KT.loggedInInfo || KT.isLoggedIn()) && (0, ST.jsxs)(ST.Fragment, {
            children: [(0, ST.jsx)("div", {
              className: "AccountSettingsLoginDivider"
            }), (0, ST.jsxs)(MT.C, {
              onClick: () => {
                (0, fT.forceGlobalSignOut)()
              },
              className: "AccountSettingsSignedInButton",
              children: [(0, ST.jsx)(XT.e, {
                name: "right-from-bracket"
              }), BT("auth:signOut")]
            })]
          })]
        }), !KT.playerHasRank("super") && (0, qT.purchasesAllowed)() && (0, ST.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, ST.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, ST.jsx)(XT.e, {
              name: "bolt"
            }), BT("homePage:superRank")]
          }), (0, ST.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [(0, ST.jsxs)(MT.m, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, nT.k)({
                  mode: "self",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, ST.jsx)(XT.e, {
                name: "bolt"
              }), BT("homePage:getSuperRank")]
            }), (0, ST.jsxs)(MT.m, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, nT.k)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, ST.jsx)(XT.e, {
                name: "bolt"
              }), BT("homePage:giftSuperRank")]
            })]
          })]
        }), KT.playerHasRank("super") && (0, ST.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, ST.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, ST.jsx)(XT.e, {
              name: "bolt"
            }), BT("homePage:superRank"), (0, ST.jsxs)("div", {
              className: "AccountSettingsSuperRankTimeLeft",
              children: ["(", BT("general:timeLeft", {
                time: (0, HT.Wb)((0, WT.l)(FT.code, "general:timeLeft"), KT.superRankInfo)
              }), ")"]
            })]
          }), (0, qT.purchasesAllowed)() && (0, ST.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [(0, ST.jsxs)(MT.m, {
              className: "AccountSettingsSuperRankProlong",
              loading: GT,
              onClick: () => {
                bT(YT.h.id, null)
              },
              children: [(0, ST.jsx)(XT.e, {
                name: "bolt"
              }), BT("settingsMenu:getSuperRankAdditionalDaysPremiumCurrency", {
                days: YT.h.product.days,
                price: YT.h.price
              })]
            }), (0, ST.jsxs)(MT.m, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, nT.k)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, ST.jsx)(XT.e, {
                name: "bolt"
              }), BT("homePage:giftSuperRank")]
            })]
          }), pT && (0, ST.jsx)("div", {
            className: "AccountSettingsSuperRankProlongError SmallTextBold",
            children: BT(pT.translationKey)
          })]
        }), (0, ST.jsx)(yT, {
          showing: IT
        }), rT.featureFlags.useSocialFeatures && (0, ST.jsx)(zo, {
          showing: IT
        }), (0, ST.jsxs)("div", {
          className: "SettingBoxGroup AccountSettingsDeleteAccountGroup",
          children: [(0, ST.jsxs)("div", {
            className: "SettingBox AccountSettingsDeleteAccount SettingBoxWarning",
            children: [(0, ST.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: BT(Wo(Bo, Fo))
            }), (0, ET.c)() && (0, ST.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: BT("auth:discordActivityKickWarning")
            }), (0, ST.jsx)(VT, {})]
          }), (0, ST.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: BT("auth:deleteAccountWarning")
          })]
        })]
      })
    }));

    function Wo(TT, oT) {
      return TT ? oT ? "auth:deleteGuestAccountButtonTitle" : "auth:deleteGuestAccountWarning" : "auth:deleteAccountButtonTitle"
    }
    var Xo = IT(8652),
      Bo = IT(2695),
      Fo = IT(1220),
      So = IT(1398);
    const Do = (0, iT.memo)((function(TT) {
        let {
          inGame: oT
        } = TT;
        const {
          t: IT,
          selectedLanguage: iT
        } = (0, WT.t)(), {
          clientEscMenuOptions: zT,
          showDebugOverlay: kT
        } = (0, RT.k)(["clientEscMenuOptions", "showDebugOverlay"]), XT = (0, cT.g)("hideCoordinates");
        let BT = "settingsMenu:showCoordinates",
          FT = "settingsMenu:showChunkCoordinates";

        function DT(TT) {
          const oT = new Intl.DisplayNames([TT], {
            type: "language"
          }).of(TT);
          return oT.charAt(0).toUpperCase() + oT.slice(1)
        }
        return XT && (BT = "settingsMenu:showCoordinatesHidden", FT = "settingsMenu:showChunkCoordinatesHidden"), (0, ST.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [oT && rT.featureFlags.canUseInviteLinks && (0, ST.jsxs)("div", {
            className: "SettingBox",
            children: [(0, ST.jsx)("div", {
              className: "SettingsMenuInviteHeader",
              children: IT("settingsMenu:inviteLink")
            }), (0, ST.jsx)(Xo.f, {})]
          }), (0, ST.jsxs)("div", {
            className: "SettingBox",
            children: [(0, ST.jsx)("div", {
              className: "SliderText",
              style: {
                marginBottom: "10px"
              },
              children: IT("settingsMenu:language")
            }), (0, ST.jsx)(Bo.d, {
              options: Object.entries(WT.h).map((TT => {
                let [oT, IT] = TT;
                return {
                  label: (0, ST.jsxs)("div", {
                    className: "SettingsMenuLanguageOption",
                    children: [(0, ST.jsx)("img", {
                      src: IT.flagImg,
                      alt: "flag"
                    }), (0, ST.jsxs)("span", {
                      children: [DT(oT), " ", (0, ST.jsxs)("span", {
                        className: "SettingsMenuLanguageOptionCode",
                        children: ["(", oT, ")"]
                      })]
                    })]
                  }),
                  value: oT
                }
              })),
              value: iT.code,
              onChange: TT => {
                Fo.d.get().setCurrentLanguage(TT.value)
              }
            })]
          }), !(0, rT.isMobileApp)() && (0, So.f)() && rT.featureFlags.useForceRotateForceFullscreenOverlay && (0, ST.jsx)(eT.e, {
            label: IT("settingsMenu:disableFullscreenMode"),
            checked: zT.disableFullscreen,
            onClick: TT => {
              RT.c.setClientEscMenuOptions({
                disableFullscreen: TT
              })
            }
          }), (0, ST.jsx)(eT.e, {
            label: IT(BT),
            checked: zT.showCoordinates,
            onClick: TT => {
              RT.c.setClientEscMenuOptions({
                showCoordinates: TT
              })
            },
            disabled: XT
          }), (0, ST.jsx)(eT.e, {
            label: IT(FT),
            checked: zT.showChunkCoordinates,
            onClick: TT => {
              RT.c.setClientEscMenuOptions({
                showChunkCoordinates: TT
              })
            },
            disabled: XT
          }), (0, ST.jsx)(eT.e, {
            label: IT("settingsMenu:showFps"),
            checked: zT.showFPS,
            onClick: TT => {
              RT.c.setClientEscMenuOptions({
                showFPS: TT
              })
            }
          }), (0, ST.jsx)(eT.e, {
            label: IT("settingsMenu:disableBunnyHopping"),
            checked: zT.disableBunnyHopping,
            onClick: TT => {
              RT.c.setClientEscMenuOptions({
                disableBunnyHopping: TT
              })
            }
          }), (0, dT.z)() && (0, ST.jsx)(eT.e, {
            label: IT("settingsMenu:showChat"),
            checked: zT.showChat,
            onClick: TT => {
              RT.c.setClientEscMenuOptions({
                showChat: TT
              })
            }
          }), (0, ST.jsx)(eT.e, {
            label: IT("settingsMenu:showDebugOverlay"),
            checked: kT,
            onClick: TT => {
              RT.c.set({
                showDebugOverlay: TT
              })
            }
          }), rT.featureFlags.useSocialFeatures && (0, ST.jsx)(eT.e, {
            label: IT("settingsMenu:showFriendOnlineToasts"),
            checked: zT.showFriendOnlineToasts,
            onClick: TT => {
              RT.c.setClientEscMenuOptions({
                showFriendOnlineToasts: TT
              })
            }
          }), (0, ST.jsx)(eT.e, {
            label: IT("settingsMenu:showNewItemIndicator"),
            checked: zT.showNewItemIndicator,
            onClick: TT => {
              RT.c.setClientEscMenuOptions({
                showNewItemIndicator: TT
              })
            }
          })]
        })
      })),
      Lo = (0, iT.memo)((function() {
        const {
          t: TT
        } = (0, WT.t)(), {
          soundVolume: oT,
          musicVolume: IT
        } = (0, RT.k)(["soundVolume", "musicVolume"]);
        return (0, ST.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, ST.jsx)(eT.k, {
            name: TT("settingsMenu:musicVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: IT,
            onChange: TT => {
              RT.c.set({
                musicVolume: Math.round(100 * TT) / 100
              })
            },
            format: TT => TT.toFixed(2)
          }), (0, ST.jsx)(eT.k, {
            name: TT("settingsMenu:soundEffectsVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: oT,
            onChange: TT => {
              RT.c.set({
                soundVolume: Math.round(100 * TT) / 100
              })
            },
            format: TT => TT.toFixed(2)
          })]
        })
      }));
    var xo = IT(698),
      co = IT(1403),
      Ko = IT(3236),
      Mo = IT(8660),
      ro = IT(3049);
    const Ao = {
      app: "notificationSettings:pushTargetsApp",
      browser: "notificationSettings:pushTargetsBrowser",
      msnPlay: "notificationSettings:pushTargetsMsnPlay"
    };

    function go() {
      const {
        t: TT
      } = (0, WT.t)(), oT = (0, ro.c)(), {
        mobilePushNotificationsCanAsk: IT
      } = (0, RT.k)(["mobilePushNotificationsCanAsk"]), [zT, kT] = (0, iT.useState)(null), [XT, BT] = (0, iT.useState)(!1), [FT, DT] = (0, iT.useState)(null), [LT, xT] = (0, iT.useState)(!1), cT = (0, iT.useCallback)((() => {
        (0, Ko.c)().then((TT => {
          oT.current && (kT(TT), BT(!1))
        })).catch((TT => {
          console.error("Failed to load push notification targets:", TT), oT.current && BT(!0)
        }))
      }), [oT]), KT = (0, iT.useCallback)((() => {
        (0, Mo.b)().then((TT => {
          oT.current && DT((() => TT))
        }))
      }), [oT]);
      (0, iT.useEffect)((() => {
        cT()
      }), [cT]), (0, iT.useEffect)((() => {
        KT()
      }), [KT, IT]), (0, co.g)(Ko.i, cT);
      const rT = null === zT ? [] : Object.keys(Ao).filter((TT => zT[TT] > 0));
      return (0, ST.jsxs)("div", {
        className: "SettingBox PushNotificationSettings",
        children: [(0, ST.jsx)("div", {
          className: "SliderText",
          children: TT("notificationSettings:pushNotifications")
        }), null === zT && XT && (0, ST.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: TT("notificationSettings:pushTargetsLoadFailed")
        }), null !== zT && 0 === rT.length && (0, ST.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: TT("notificationSettings:pushTargetsNone")
        }), rT.length > 0 && (0, ST.jsx)("ul", {
          className: "PushNotificationSettingsTargets",
          children: rT.map((oT => {
            var IT;
            return (0, ST.jsx)("li", {
              children: TT(Ao[oT], {
                count: null !== (IT = null === zT || void 0 === zT ? void 0 : zT[oT]) && void 0 !== IT ? IT : 0
              })
            }, oT)
          }))
        }), null !== FT && (0, ST.jsx)(MT.e, {
          className: "PushNotificationSettingsButton",
          loading: LT,
          onClick: () => {
            xT(!0), FT().catch((TT => {
              console.error("Failed to turn on push notifications:", TT)
            })).finally((() => {
              oT.current && (xT(!1), KT())
            }))
          },
          children: TT("notificationSettings:pushTurnOn")
        })]
      })
    }
    const ho = {
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
      wo = (0, iT.memo)((function() {
        const {
          t: TT
        } = (0, WT.t)(), {
          clientEscMenuOptions: oT
        } = (0, RT.k)(["clientEscMenuOptions"]);
        return (0, ST.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, ST.jsx)(eT.h, {
            label: TT("notificationSettings:friendRequests"),
            options: xo.b.map((oT => ({
              value: oT,
              label: TT(ho[oT].label)
            }))),
            value: oT.friendRequestNotifications,
            onChange: TT => {
              RT.c.setClientEscMenuOptions({
                friendRequestNotifications: TT
              })
            },
            circleInfoText: (0, ST.jsx)("div", {
              className: "NotificationSettingLevelsInfo",
              children: xo.b.map((oT => (0, ST.jsxs)("div", {
                children: [(0, ST.jsx)("b", {
                  children: TT(ho[oT].label)
                }), ": ", TT(ho[oT].info)]
              }, oT)))
            })
          }), (0, ST.jsx)(go, {})]
        })
      }));
    var mo = IT(4024),
      eo = IT(193),
      Ro = IT(282),
      uo = IT(6158),
      vo = IT(3012),
      Eo = IT(8664),
      fo = IT(618),
      Co = IT(16);
    var jo = IT(637),
      Jo = IT(26),
      Uo = IT(3906);
    const ao = new Map([
      ["chunkHorizAddDist", "horizontal"],
      ["chunkVertAddDist", "vertical"]
    ]);

    function Yo(TT) {
      return ao.has(TT) ? AT.gameBridge.lookup("Jm", null) : null
    }

    function Qo(TT) {
      if (!(0, fo.K)(RT.c.get("clientEscMenuOptions")[TT])) return RT.c.get("clientEscMenuOptions")[TT];
      const oT = Yo(TT);
      return null !== oT ? oT[ao.get(TT)] : Jo.e.getItem(TT)
    }

    function Oo(TT, oT) {
      if ("useTouchControls" === TT) return void(0, Uo.c)(oT);
      TT in RT.c.get("clientEscMenuOptions") && RT.c.setClientEscMenuOptions({
        [TT]: oT
      });
      const IT = Yo(TT);
      null !== IT && AT.gameBridge.send("setChunkAddDistance", {
        ...IT,
        [ao.get(TT)]: oT
      }), Jo.e.setItem(TT, oT)
    }
    var Ho = IT(3945),
      no = IT(8668),
      qo = IT(8674),
      Zo = IT(4021);

    function so(TT) {
      var oT, zT, XT, BT;
      let {
        minChunkAddDist: FT,
        getValue: DT,
        onChange: LT,
        setApplySettingsCallback: xT
      } = TT;
      const {
        t: KT
      } = (0, WT.t)(), {
        clientEscMenuOptions: MT
      } = (0, RT.k)(["clientEscMenuOptions", "showDistantNametags"]), AT = (0, iT.useRef)(DT("showFog")), gT = (0, iT.useRef)(MT.antiAliasing), hT = (0, iT.useRef)(MT.useWebGpu), [wT, mT] = (0, iT.useState)(null), [vT, ET] = (0, iT.useState)((() => (0, vo.i)(rT.featureFlags.settings.canUseShaderPacks))), [fT] = (0, iT.useState)((() => RT.c.isWebGpuDefaultOff())), [CT] = (0, iT.useState)(Ro.h);
      (0, iT.useEffect)((() => {
        let TT = !1;
        return (0, rT.hasUsableWebGpuAdapter)().then((oT => {
          TT || mT(oT)
        })), (0, vo.l)(rT.featureFlags.settings.canUseShaderPacks) && (0, uo.e)().then((async oT => {
          const iT = null !== oT && await async function(TT) {
            const [{
              isShaderPackActive: oT
            }, {
              loadPageShaderPackCompiler: iT
            }] = await Promise.all([IT.e(128).then((() => IT(6154))), Promise.all([IT.e(74), IT.e(132), IT.e(131)]).then((() => IT(6114)))]);
            return oT(TT, await iT())
          }(oT);
          TT || ET(iT)
        })), () => {
          TT = !0
        }
      }), []);
      const jT = function(TT, oT, IT, iT, zT) {
          return (0, Eo.d)(IT, iT) && !0 === oT ? {
            translationKey: "settingsMenu:newWebGpuForcedOnByShaderPack",
            checked: !0,
            disabled: !0
          } : {
            translationKey: !1 !== oT ? "settingsMenu:newWebGpu" : zT ? "settingsMenu:newWebGpuDisabledUntilRestart" : "settingsMenu:newWebGpuUnsupported",
            checked: TT && !1 !== oT,
            disabled: !0 !== oT
          }
        }(MT.useWebGpu, wT, vT, fT, CT),
        JT = (MT.useWebGpu || (0, Eo.d)(vT, fT)) && vT && !0 === wT,
        UT = (0, cT.g)("lightingOverride"),
        aT = !(0, fo.K)(UT);
      let YT = "settingsMenu:enableLighting";
      aT && (YT = UT ? "settingsMenu:enableLightingForcedOn" : "settingsMenu:enableLightingForcedOff");
      const QT = TT => {
          var oT, IT, iT;
          const zT = null !== (oT = TT.showFog) && void 0 !== oT ? oT : DT("showFog"),
            kT = null !== (IT = TT.antiAliasing) && void 0 !== IT ? IT : MT.antiAliasing,
            WT = null !== (iT = TT.useWebGpu) && void 0 !== iT ? iT : MT.useWebGpu,
            XT = !jo.u && zT !== AT.current || kT !== gT.current || WT !== hT.current;
          xT(XT ? () => eT.n : null)
        },
        OT = (0, cT.g)("fogChunkDistanceOverride"),
        HT = (0, cT.g)("fogBlockDistanceOverride"),
        nT = !(0, fo.K)(OT) || !(0, fo.K)(HT),
        qT = nT ? "settingsMenu:showFogForcedOn" : "settingsMenu:showFog",
        [ZT, lT] = (0, mo.f)(FT),
        [sT, tT] = (0, Zo.c)(FT),
        GT = KT("settingsMenu:chunkLoadDistanceDeviceLimit"),
        pT = sT < ZT,
        bT = Math.min(null !== (oT = DT("chunkHorizAddDist")) && void 0 !== oT ? oT : FT[0], sT),
        yT = !nT && function(TT, oT) {
          return !0 === TT.showFog && TT.fogChunkDistance > oT
        }(MT, bT);
      return (0, ST.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [(0, ST.jsx)(eT.k, {
          name: KT("settingsMenu:horizontalChunkLoadDistance"),
          min: FT[0],
          max: ZT,
          selectableMax: sT,
          cappedNote: GT,
          step: 1,
          initValue: bT,
          onChange: TT => {
            !0 === DT("showFog") && TT < DT("fogChunkDistance") && LT("fogChunkDistance", TT), LT("chunkHorizAddDist", TT), Co.h.XM("updatedChunkLoadDist")
          },
          circleInfoText: KT("settingsMenu:chunkLoadDistanceInfo")
        }), (0, ST.jsx)(eT.k, {
          name: KT("settingsMenu:verticalChunkLoadDistance"),
          min: FT[1],
          max: lT,
          selectableMax: tT,
          cappedNote: pT ? void 0 : GT,
          step: 1,
          initValue: Math.min(null !== (zT = DT("chunkVertAddDist")) && void 0 !== zT ? zT : FT[1], tT),
          onChange: TT => {
            LT("chunkVertAddDist", TT), Co.h.XM("updatedChunkLoadDist")
          },
          circleInfoText: KT("settingsMenu:chunkLoadDistanceInfo"),
          className: "VerticalChunkLoadSlider"
        }), (0, ST.jsx)(eT.e, {
          label: KT("settingsMenu:chunkFadeIn"),
          checked: MT.chunkFadeIn,
          onClick: TT => {
            RT.c.setClientEscMenuOptions({
              chunkFadeIn: TT
            })
          },
          circleInfoText: KT("settingsMenu:chunkFadeInInfo")
        }), uT.devTools.supports("chunkBorders") && (0, ST.jsx)(eT.e, {
          label: KT("settingsMenu:showChunkBorders"),
          checked: MT.showChunkBorders,
          onClick: TT => {
            RT.c.setClientEscMenuOptions({
              showChunkBorders: TT
            })
          },
          circleInfoText: KT("settingsMenu:showChunkBordersInfo")
        }), (0, ST.jsx)(eT.e, {
          label: KT(YT),
          checked: MT.enableLighting,
          onClick: TT => {
            RT.c.setClientEscMenuOptions({
              enableLighting: TT
            })
          },
          disabled: aT
        }), (0, ST.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, ST.jsx)(eT.e, {
            label: KT(qT),
            checked: MT.showFog,
            onClick: TT => {
              QT({
                showFog: TT
              }), RT.c.setClientEscMenuOptions({
                showFog: TT
              })
            },
            disabled: nT,
            className: kT()({
              SettingBoxWarning: yT
            })
          }), (0, ST.jsx)(eT.k, {
            name: KT("settingsMenu:fogChunkDistance"),
            min: FT[0],
            max: eo.c.maxChunkHorizAddDistance,
            step: 1,
            initValue: null !== (XT = MT.fogChunkDistance) && void 0 !== XT ? XT : FT[0],
            onChange: TT => {
              RT.c.setClientEscMenuOptions({
                fogChunkDistance: TT
              }), Co.h.XM("fogChunkDistanceChanged", TT)
            },
            circleInfoText: KT("settingsMenu:fogChunkDistanceInfo"),
            disabled: nT || !1 === DT("showFog"),
            className: kT()({
              SettingBoxWarning: yT
            })
          }), yT && (0, ST.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: KT("settingsMenu:fogChunkDistanceInfo")
          })]
        }), !jo.u && (0, ST.jsx)(eT.e, {
          label: KT(JT ? "settingsMenu:disableBlockTextureAtlasUnavailableWithShaderPack" : "settingsMenu:disableBlockTextureAtlas"),
          checked: !JT && MT.disableTexAtlas,
          onClick: TT => {
            RT.c.setClientEscMenuOptions({
              disableTexAtlas: TT
            })
          },
          circleInfoText: KT("settingsMenu:disableBlockTextureAtlasInfo"),
          disabled: JT
        }), (0, ST.jsx)(eT.k, {
          name: KT("settingsMenu:fieldOfView"),
          min: 50,
          max: 160,
          step: 1,
          initValue: MT.cameraFOV,
          onChange: TT => {
            RT.c.setClientEscMenuOptions({
              cameraFOV: TT
            })
          }
        }), (0, ST.jsx)(eT.e, {
          label: KT("settingsMenu:disableViewBobbing"),
          checked: MT.disableBobbing,
          onClick: TT => {
            RT.c.setClientEscMenuOptions({
              disableBobbing: TT
            })
          },
          circleInfoText: KT("settingsMenu:disableViewBobbingInfo")
        }), (0, ST.jsx)(eT.e, {
          label: KT("settingsMenu:antiAliasing"),
          checked: MT.antiAliasing,
          onClick: TT => {
            QT({
              antiAliasing: TT
            }), (0, Ho.f)("antiAliasing"), RT.c.setClientEscMenuOptions({
              antiAliasing: TT
            })
          },
          circleInfoText: KT("settingsMenu:antiAliasingInfo")
        }), (0, ST.jsx)(eT.k, {
          name: KT("settingsMenu:pixelScale"),
          min: 1,
          max: 8,
          step: 1,
          initValue: null !== (BT = MT.pixelScale) && void 0 !== BT ? BT : 1,
          onChange: TT => {
            (TT !== RT.c.get("clientEscMenuOptions").pixelScale || (0, qo.q)()) && (0, Ho.f)("pixelScale"), RT.c.setClientEscMenuOptions({
              pixelScale: TT
            })
          },
          circleInfoText: KT("settingsMenu:pixelScaleInfo"),
          format: TT => `${TT}x`
        }), (0, ST.jsx)(eT.e, {
          label: KT("settingsMenu:pixelSmoothing"),
          checked: MT.pixelSmoothing,
          onClick: TT => {
            RT.c.setClientEscMenuOptions({
              pixelSmoothing: TT
            })
          },
          circleInfoText: KT("settingsMenu:pixelSmoothingInfo")
        }), jo.u && (0, ST.jsx)(eT.e, {
          label: KT("settingsMenu:distantNametags"),
          checked: (0, no.d)(),
          onClick: TT => {
            RT.c.set({
              showDistantNametags: TT
            })
          },
          circleInfoText: KT("settingsMenu:distantNametagsInfo")
        }), (0, ST.jsx)(eT.e, {
          label: KT(jT.translationKey),
          checked: jT.checked,
          onClick: TT => {
            QT({
              useWebGpu: TT
            }), RT.c.setClientEscMenuOptions({
              useWebGpu: TT
            })
          },
          circleInfoText: KT("settingsMenu:newWebGpuInfo"),
          disabled: jT.disabled
        })]
      })
    }
    var to = IT(3939),
      Go = IT(8290),
      po = IT(8682),
      bo = IT(8298),
      yo = IT(8684);
    const No = {
        color: 16777215,
        name: "white"
      },
      Po = {
        color: 0,
        name: "black"
      },
      Vo = [No, {
        color: 5046092,
        name: "green"
      }, {
        color: 16776960,
        name: "yellow"
      }, {
        color: 65535,
        name: "cyan"
      }, {
        color: 16731391,
        name: "pink"
      }, {
        color: 16726843,
        name: "red"
      }, Po],
      TI = [Po, No];

    function oI(TT) {
      return `${TT} px`
    }

    function II(TT) {
      return `${TT}%`
    }

    function iI(TT) {
      let {
        label: oT,
        value: IT,
        swatches: iT,
        onChange: zT
      } = TT;
      const {
        t: XT
      } = (0, WT.t)(), BT = !iT.some((TT => TT.color === IT));
      return (0, ST.jsxs)("div", {
        className: "SettingBox CrosshairColorRow",
        children: [(0, ST.jsx)("div", {
          className: "SliderText",
          children: oT
        }), (0, ST.jsxs)("div", {
          className: "CrosshairSwatches",
          role: "radiogroup",
          "aria-label": oT,
          children: [iT.map((TT => {
            let {
              color: oT,
              name: iT
            } = TT;
            return (0, ST.jsx)("button", {
              type: "button",
              role: "radio",
              "aria-checked": oT === IT,
              "aria-label": XT(`crosshairSettings:color_${iT}`),
              "data-pad-focusable": !0,
              className: kT()("CrosshairSwatch", {
                Selected: oT === IT
              }),
              style: {
                background: (0, yo.k)(oT)
              },
              onClick: () => {
                zT(oT)
              }
            }, oT)
          })), (0, ST.jsx)("label", {
            className: kT()("CrosshairSwatch CrosshairSwatchCustom", {
              Selected: BT
            }),
            style: BT ? {
              background: (0, yo.k)(IT)
            } : void 0,
            title: XT("crosshairSettings:customColor"),
            "data-pad-focusable": !0,
            children: (0, ST.jsx)("input", {
              type: "color",
              "aria-label": XT("crosshairSettings:customColor"),
              value: (0, yo.k)(IT),
              onChange: TT => {
                const oT = (0, yo.q)(TT.target.value);
                null !== oT && zT(oT)
              }
            })
          })]
        })]
      })
    }

    function zI(TT) {
      let {
        settings: oT,
        onChange: IT
      } = TT;
      const {
        t: iT
      } = (0, WT.t)(), zT = (TT, iT) => {
        IT((0, yo.w)(oT, TT, iT))
      }, kT = function(TT, IT) {
        let iT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : oI;
        const {
          min: kT,
          max: WT,
          step: XT
        } = yo.e[TT];
        return (0, ST.jsx)(eT.k, {
          name: IT,
          min: kT,
          max: WT,
          step: XT,
          initValue: oT[TT],
          format: iT,
          onChange: oT => {
            zT(TT, oT)
          }
        }, TT)
      }, XT = ["lines", "dot", "circle"].filter((TT => oT[TT])), BT = (TT, IT, iT) => (0, ST.jsx)(eT.e, {
        label: IT,
        checked: oT[TT],
        disabled: 1 === XT.length && XT[0] === TT,
        circleInfoText: iT,
        onClick: oT => {
          zT(TT, oT)
        }
      }, TT), FT = "shapes" === oT.style;
      return (0, ST.jsxs)(ST.Fragment, {
        children: [(0, ST.jsx)(eT.h, {
          label: iT("crosshairSettings:style"),
          options: [{
            value: "classic",
            label: iT("crosshairSettings:styleClassic")
          }, {
            value: "shapes",
            label: iT("crosshairSettings:styleShapes")
          }],
          value: oT.style,
          onChange: TT => {
            zT("style", TT)
          }
        }), (0, ST.jsx)(iI, {
          label: iT("crosshairSettings:color"),
          value: oT.color,
          swatches: Vo,
          onChange: TT => {
            zT("color", TT)
          }
        }), kT("opacity", iT("crosshairSettings:opacity"), II), !FT && kT("size", iT("crosshairSettings:size"), II), FT && (0, ST.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [BT("lines", iT("crosshairSettings:lines")), oT.lines && kT("lineLength", iT("crosshairSettings:lineLength")), oT.lines && kT("lineThickness", iT("crosshairSettings:lineThickness")), oT.lines && kT("gap", iT("crosshairSettings:gap")), oT.lines && BT("tStyle", iT("crosshairSettings:tStyle"))]
        }), FT && (0, ST.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [BT("dot", iT("crosshairSettings:dot")), oT.dot && kT("dotSize", iT("crosshairSettings:dotSize"))]
        }), FT && (0, ST.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [BT("circle", iT("crosshairSettings:circle")), oT.circle && kT("circleRadius", iT("crosshairSettings:circleRadius")), oT.circle && kT("circleThickness", iT("crosshairSettings:circleThickness"))]
        }), (0, ST.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [kT("outline", iT("crosshairSettings:outline"), (TT => TT > 0 ? oI(TT) : iT("crosshairSettings:off"))), oT.outline > 0 && (0, ST.jsx)(iI, {
            label: iT("crosshairSettings:outlineColor"),
            value: oT.outlineColor,
            swatches: TI,
            onChange: TT => {
              zT("outlineColor", TT)
            }
          })]
        }), BT("growOnClick", iT("crosshairSettings:growOnClick")), FT && BT("forGuns", iT("crosshairSettings:forGuns"), iT("crosshairSettings:forGunsInfo"))]
      })
    }
    var kI = IT(68),
      WI = IT(1249),
      XI = IT(8692),
      BI = IT(8695),
      FI = IT(8699),
      SI = IT(8704);
    const DI = ["sky", "grass", "stone", "sand", "snow", "night"],
      LI = "4rem";

    function xI(TT) {
      return {
        backgroundImage: `url(${TT})`,
        backgroundSize: `${LI} ${LI}`,
        backgroundRepeat: "repeat",
        imageRendering: "pixelated"
      }
    }

    function cI(TT) {
      return {
        ...(() => {
          switch (TT) {
            case "sky":
              return {
                backgroundImage: "linear-gradient(#3d8fe0 0%, #8cc8f5 45%, #d6eefc 58%, #6fae4a 58.01%, #4f8a33 100%)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              };
            case "grass":
              return xI(XI);
            case "stone":
              return xI(BI);
            case "sand":
              return xI(FI);
            case "snow":
              return xI(SI);
            case "night":
              return {
                backgroundImage: "radial-gradient(circle at 50% 50%, #1e2a4a 0%, #070b16 100vmax)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              }
          }
        })(),
        backgroundPosition: "center"
      }
    }

    function KI(TT) {
      return Object.freeze({
        ...yo.f,
        style: "shapes",
        outline: 1,
        lines: !1,
        ...TT
      })
    }
    const MI = [{
        id: "default",
        settings: yo.f
      }, {
        id: "cross",
        settings: KI({
          color: 5046092,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3
        })
      }, {
        id: "crossDot",
        settings: KI({
          color: 65535,
          lines: !0,
          lineLength: 6,
          lineThickness: 2,
          gap: 4,
          dot: !0,
          dotSize: 2
        })
      }, {
        id: "dot",
        settings: KI({
          dot: !0,
          dotSize: 4
        })
      }, {
        id: "circle",
        settings: KI({
          circle: !0,
          circleRadius: 12,
          circleThickness: 1.5,
          dot: !0,
          dotSize: 2
        })
      }, {
        id: "tShape",
        settings: KI({
          color: 16731391,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3,
          tStyle: !0
        })
      }, {
        id: "tiny",
        settings: KI({
          color: 16776960,
          lines: !0,
          lineLength: 3,
          lineThickness: 1,
          gap: 2
        })
      }, {
        id: "bold",
        settings: KI({
          lines: !0,
          lineLength: 10,
          lineThickness: 3,
          gap: 0,
          outline: 1.5
        })
      }],
      rI = ["growOnClick", "forGuns"];
    var AI = IT(8713);

    function gI(TT) {
      let {
        label: oT,
        selected: IT,
        onClick: iT,
        className: zT,
        style: WT,
        children: XT
      } = TT;
      return (0, ST.jsx)("button", {
        type: "button",
        role: "radio",
        "aria-checked": IT,
        title: oT,
        "aria-label": oT,
        "data-pad-focusable": !0,
        className: kT()("CrosshairBackdropSwatch", zT, {
          Selected: IT
        }),
        style: WT,
        onClick: iT,
        children: XT
      })
    }

    function hI(TT) {
      let {
        backdrop: oT,
        onChange: IT,
        game: iT
      } = TT;
      const {
        t: zT
      } = (0, WT.t)();
      return (0, ST.jsxs)("div", {
        className: "CrosshairBackdrops",
        role: "radiogroup",
        "aria-label": zT("crosshairSettings:background"),
        children: [iT && (0, ST.jsx)(gI, {
          label: zT("crosshairSettings:bg_game"),
          selected: iT.selected,
          onClick: iT.onSelect,
          className: "CrosshairGameSwatch",
          children: (0, ST.jsx)(XT.e, {
            name: "cube"
          })
        }), DI.map((TT => (0, ST.jsx)(gI, {
          label: zT(`crosshairSettings:bg_${TT}`),
          selected: !(null !== iT && void 0 !== iT && iT.selected) && TT === oT,
          style: cI(TT),
          onClick: () => {
            IT(TT)
          }
        }, TT)))]
      })
    }

    function wI(TT) {
      let {
        settings: oT,
        touch: IT,
        backdrop: iT,
        onChange: zT
      } = TT;
      const {
        t: XT
      } = (0, WT.t)(), BT = function(TT) {
        var oT;
        return null !== (oT = MI.find((oT => (0, yo.u)(oT.settings, TT, rI)))) && void 0 !== oT ? oT : null
      }(oT);
      return (0, ST.jsx)("div", {
        className: "CrosshairPresets",
        role: "radiogroup",
        "aria-label": XT("crosshairSettings:presets"),
        children: MI.map((TT => {
          const WT = (null === BT || void 0 === BT ? void 0 : BT.id) === TT.id;
          return (0, ST.jsxs)("button", {
            type: "button",
            role: "radio",
            "aria-checked": WT,
            "data-pad-focusable": !0,
            className: kT()("CrosshairPreset", {
              Selected: WT
            }),
            onClick: () => {
              zT(function(TT, oT) {
                return {
                  ...oT.settings,
                  growOnClick: TT.growOnClick,
                  forGuns: TT.forGuns
                }
              }(oT, TT))
            },
            children: [(0, ST.jsx)("div", {
              className: "CrosshairPresetStage",
              style: cI(iT),
              children: (0, ST.jsx)(AI.e, {
                settings: TT.settings,
                touch: IT,
                inPreview: !0
              })
            }), (0, ST.jsx)("div", {
              className: "CrosshairPresetName",
              children: XT(`crosshairSettings:preset_${TT.id}`)
            })]
          }, TT.id)
        }))
      })
    }
    var mI = IT(1615);

    function eI(TT, oT) {
      const [IT, zT] = (0, iT.useState)(!1), kT = () => {
        zT(!1)
      }, [WT, XT] = (0, iT.useState)(!1), BT = (0, iT.useRef)({
        growOnClick: TT.growOnClick,
        forGuns: TT.forGuns
      });
      (0, iT.useEffect)((() => {
        const oT = BT.current;
        BT.current = {
          growOnClick: TT.growOnClick,
          forGuns: TT.forGuns
        }, (TT.growOnClick && !oT.growOnClick || TT.forGuns && !oT.forGuns) && XT(!0)
      }), [TT.growOnClick, TT.forGuns]), (0, iT.useEffect)((() => {
        if (!WT) return;
        const TT = setTimeout((() => {
          XT(!1)
        }), 600);
        return () => {
          clearTimeout(TT)
        }
      }), [WT]);
      const FT = IT || WT;
      return {
        view: {
          pressed: FT,
          spread: FT && TT.forGuns && !TT.growOnClick ? 6 : 0
        },
        handlers: {
          onPointerDown: TT => {
            !TT.target.closest(oT) && (0, mI.e)(TT.currentTarget, TT.pointerId) && zT(!0)
          },
          onPointerUp: kT,
          onPointerCancel: kT,
          onLostPointerCapture: kT
        }
      }
    }

    function RI(TT) {
      let {
        settings: oT,
        touch: IT,
        backdrop: iT,
        className: zT,
        children: WT,
        label: XT
      } = TT;
      const BT = eI(oT, ".CrosshairStageControls");
      return (0, ST.jsxs)("div", {
        className: kT()("CrosshairStage", zT),
        style: cI(iT),
        ...BT.handlers,
        children: [(0, ST.jsx)("div", {
          className: "CrosshairStageHold",
          role: "img",
          "aria-label": XT,
          children: (0, ST.jsx)(AI.e, {
            settings: oT,
            touch: IT,
            inPreview: !0,
            ...BT.view
          })
        }), WT]
      })
    }
    const uI = "crosshairFullScreen";

    function vI(TT) {
      let {
        settings: oT,
        touch: IT,
        backdrop: zT,
        onBackdrop: BT,
        inGame: FT,
        onChange: DT,
        onClose: LT
      } = TT;
      const {
        t: xT
      } = (0, WT.t)(), cT = (0, iT.useRef)(null);
      (0, WI.s)("popup", cT, LT),
      function(TT) {
        const oT = (0, iT.useRef)(TT);
        oT.current = TT, (0, iT.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [uI]: !0
          }, "");
          let TT = !1;
          const IT = () => {
            TT = !0, oT.current()
          };
          return window.addEventListener("popstate", IT), () => {
            var oT;
            window.removeEventListener("popstate", IT), !TT && null !== (oT = window.history.state) && void 0 !== oT && oT[uI] && window.history.back()
          }
        }), [])
      }(LT);
      const KT = (0, iT.useRef)(LT);
      KT.current = LT, (0, iT.useEffect)((() => {
        function TT(TT) {
          "Escape" === TT.key && (TT.stopPropagation(), KT.current())
        }
        return window.addEventListener("keydown", TT, !0), () => {
          window.removeEventListener("keydown", TT, !0)
        }
      }), []);
      const rT = eI(oT, ".CrosshairFullScreenPanel"),
        [AT, gT] = (0, iT.useState)(!0),
        hT = AT && FT;
      (0, iT.useEffect)((() => {
        if (hT) return RT.c.set({
          crosshairGameView: !0
        }), () => {
          RT.c.set({
            crosshairGameView: !1
          })
        }
      }), [hT]);
      const [wT, mT] = (0, iT.useState)(!0);
      return (0, kI.createPortal)((0, ST.jsxs)("div", {
        ref: cT,
        className: "CrosshairFullScreen",
        style: hT ? void 0 : cI(zT),
        ...rT.handlers,
        children: [(0, ST.jsx)(AI.e, {
          settings: oT,
          touch: IT,
          inEditor: !0,
          ...rT.view
        }), (0, ST.jsxs)("div", {
          className: kT()("CrosshairFullScreenPanel", {
            Collapsed: !wT
          }),
          children: [(0, ST.jsxs)("div", {
            className: "CrosshairFullScreenBar",
            children: [(0, ST.jsx)(hI, {
              backdrop: zT,
              onChange: TT => {
                gT(!1), BT(TT)
              },
              game: FT ? {
                selected: hT,
                onSelect: () => {
                  gT(!0)
                }
              } : void 0
            }), (0, ST.jsx)(MT.J, {
              className: "CrosshairPanelToggle",
              ariaLabel: xT(wT ? "crosshairSettings:hideEditor" : "crosshairSettings:showEditor"),
              onClick: () => {
                mT(!wT)
              },
              children: (0, ST.jsx)(XT.e, {
                name: wT ? "caret-up" : "pen"
              })
            }), (0, ST.jsx)(MT.e, {
              className: "CrosshairFullScreenDone",
              onClick: LT,
              padDefaultFocus: !0,
              children: xT("crosshairSettings:done")
            })]
          }), wT && (0, ST.jsxs)("div", {
            className: "CrosshairFullScreenFields",
            children: [(0, ST.jsx)(wI, {
              settings: oT,
              touch: IT,
              backdrop: zT,
              onChange: DT
            }), (0, ST.jsx)(zI, {
              settings: oT,
              onChange: DT
            })]
          })]
        })]
      }), document.body)
    }
    var EI = IT(2382),
      fI = IT(8724);

    function CI(TT) {
      let {
        settings: oT,
        onChange: IT
      } = TT;
      const {
        t: zT
      } = (0, WT.t)(), BT = (0, fI.k)(oT), [FT, DT] = (0, EI.i)(), [LT, xT] = (0, iT.useState)(!1), cT = (0, iT.useRef)(null), [KT, rT] = (0, EI.i)(), [AT, gT] = (0, iT.useState)(!1);
      return (0, ST.jsxs)("div", {
        className: "SettingBox CrosshairShare",
        children: [(0, ST.jsxs)("div", {
          className: "CrosshairShareRow",
          children: [(0, ST.jsxs)(MT.J, {
            className: kT()("CrosshairCopy", {
              ActiveSecondaryButton: FT
            }),
            onClick: () => {
              (0, EI.f)(BT, {
                useShareSheet: !1,
                onOutcome: TT => {
                  xT("failed" === TT), "copied" === TT && DT()
                }
              })
            },
            children: [(0, ST.jsx)(XT.e, {
              name: FT ? "check" : "copy"
            }), " ", zT(FT ? "general:copied" : "crosshairSettings:copy")]
          }), (0, ST.jsx)(wT.e, {
            className: "CrosshairPaste",
            domRef: cT,
            ariaLabel: zT("crosshairSettings:paste"),
            placeholderText: zT("crosshairSettings:paste"),
            onValueChange: TT => {
              const oT = (0, fI.g)(TT);
              gT(!oT && TT.trim().length >= fI.d), oT && (IT(oT), cT.current.value = "", rT())
            }
          })]
        }), LT && (0, ST.jsx)("input", {
          className: "CrosshairCode",
          readOnly: !0,
          value: BT,
          "aria-label": zT("crosshairSettings:copy"),
          onFocus: TT => {
            TT.currentTarget.select()
          }
        }), (0, ST.jsxs)("div", {
          "aria-live": "polite",
          children: [AT && (0, ST.jsx)("div", {
            className: "CrosshairShareNote Error",
            children: zT("crosshairSettings:pasteInvalid")
          }), KT && !AT && (0, ST.jsx)("div", {
            className: "CrosshairShareNote",
            children: zT("crosshairSettings:applied")
          })]
        })]
      })
    }
    var jI = IT(8731);
    let JI = "sky";

    function UI(TT) {
      let {
        showing: oT
      } = TT;
      const {
        t: IT
      } = (0, WT.t)(), {
        isTouchScreen: zT,
        gameState: kT,
        clientEscMenuOptions: BT
      } = (0, RT.k)(["isTouchScreen", "gameState", "clientEscMenuOptions"]), FT = (0, jI.g)(), [DT, LT] = (0, iT.useState)(JI), xT = TT => {
        JI = TT, LT(TT)
      }, [cT, KT] = (0, iT.useState)(!1);
      return (0, iT.useEffect)((() => {
        oT || KT(!1)
      }), [oT]), (0, ST.jsxs)("div", {
        className: "SettingsMenuRightInner CrosshairCategory",
        children: [(0, ST.jsx)("div", {
          className: "CrosshairPreviewSticky",
          children: (0, ST.jsx)(RI, {
            className: "CrosshairPreviewStage",
            settings: FT,
            touch: zT,
            backdrop: DT,
            label: IT("crosshairSettings:preview"),
            children: (0, ST.jsxs)("div", {
              className: "CrosshairPreviewBar CrosshairStageControls",
              children: [(0, ST.jsx)(hI, {
                backdrop: DT,
                onChange: xT
              }), (0, ST.jsxs)(MT.J, {
                className: "CrosshairFullScreenButton",
                onClick: () => {
                  KT(!0)
                },
                children: [(0, ST.jsx)(XT.e, {
                  name: "expand"
                }), " ", IT("crosshairSettings:fullScreen")]
              })]
            })
          })
        }), (0, ST.jsx)("div", {
          className: "SettingBox",
          children: (0, ST.jsx)(wI, {
            settings: FT,
            touch: zT,
            backdrop: DT,
            onChange: jI.d
          })
        }), (0, ST.jsx)(CI, {
          settings: FT,
          onChange: jI.d
        }), zT && (0, ST.jsx)(bo.c, {
          note: (0, po.e)(zT, BT.touchActionButtons) ? IT("crosshairSettings:touchNote") : void 0
        }), (0, ST.jsx)(zI, {
          settings: FT,
          onChange: jI.d
        }), cT && (0, ST.jsx)(vI, {
          settings: FT,
          touch: zT,
          backdrop: DT,
          onBackdrop: xT,
          inGame: "inGame" === kT,
          onChange: jI.d,
          onClose: () => {
            KT(!1)
          }
        })]
      })
    }
    var aI = IT(8294),
      YI = IT(1363),
      QI = IT(4473),
      OI = IT(8735),
      HI = IT(1784),
      nI = IT(3841),
      qI = IT(1787),
      ZI = IT(703);
    const lI = (0, iT.memo)((function() {
      const {
        clientEscMenuOptions: TT
      } = (0, RT.k)(["clientEscMenuOptions"]), {
        recording: oT,
        clipping: IT,
        hasClipBuffer: zT
      } = (0, HI.f)("replayRecorder"), WT = (0, HI.d)("connectedGame", (TT => TT.replay)), XT = (0, nI.m)(), BT = !1 === (0, cT.g)("canRecordReplays");
      (0, iT.useEffect)((() => {
        AT.gameBridge.send("setRecorderPrefs", {
          clipping: TT.enableClipping,
          clipSeconds: TT.clipDurationSeconds
        })
      }), [TT.enableClipping, TT.clipDurationSeconds]);
      const FT = XT || WT,
        DT = !FT && !BT,
        LT = oT || DT,
        xT = DT,
        KT = xT && IT && !oT;

      function rT() {
        LT && AT.gameBridge.send("toggleRecording", null)
      }
      return (0, ST.jsxs)("div", {
        className: "SettingsMenuRightInner ReplayViewerCategory",
        children: [(0, ST.jsxs)("div", {
          className: "SettingBox",
          children: [(0, ST.jsx)("div", {
            className: "ReplayViewerCategoryRecordingRow",
            children: oT ? (0, ST.jsxs)(ST.Fragment, {
              children: [(0, ST.jsxs)(MT.C, {
                className: "ReplayViewerCategoryButton",
                onClick: rT,
                disabled: !LT,
                children: [(0, ST.jsx)("span", {
                  children: "Stop Recording"
                }), (0, ST.jsx)(qI.e, {
                  noaAction: "recordGame"
                })]
              }), (0, ST.jsx)(OI.b, {
                className: "ReplayViewerCategoryRecordingIndicator"
              })]
            }) : (0, ST.jsxs)(MT.e, {
              className: "ReplayViewerCategoryButton",
              onClick: rT,
              disabled: !LT,
              children: [(0, ST.jsx)("span", {
                children: "Start Recording"
              }), (0, ST.jsx)(qI.e, {
                noaAction: "recordGame"
              })]
            })
          }), BT && (0, ST.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Recording is turned off in this game."
          }), FT && !oT && (0, ST.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Close Replay Mode to start recording."
          })]
        }), (0, ST.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, ST.jsx)(eT.e, {
            label: "Enable clipping",
            checked: TT.enableClipping,
            disabled: !xT,
            onClick: function(TT) {
              xT && RT.c.setClientEscMenuOptions({
                enableClipping: TT
              })
            },
            className: kT()({
              SettingBoxDisabled: !xT
            })
          }), (0, ST.jsx)(eT.k, {
            name: "Clip duration (seconds)",
            min: ZI.k,
            max: ZI.g,
            step: ZI.d,
            initValue: TT.clipDurationSeconds,
            onChange: function(TT) {
              RT.c.setClientEscMenuOptions({
                clipDurationSeconds: TT
              })
            },
            circleInfoText: "Longer clip durations use more memory and may affect performance.",
            disabled: !xT || !TT.enableClipping
          })]
        }), (0, ST.jsxs)("div", {
          className: "SettingBox",
          children: [(0, ST.jsxs)(MT.e, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              KT && AT.gameBridge.send("saveClip", null)
            },
            disabled: !KT,
            children: [(0, ST.jsx)("span", {
              children: "Record clip"
            }), (0, ST.jsx)(qI.e, {
              noaAction: "recordClip"
            })]
          }), TT.enableClipping && !zT && xT && !oT && (0, ST.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clip buffer is filling \u2014 play for a moment, then save."
          }), oT && (0, ST.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clipping pauses while a full recording is active."
          })]
        }), (0, ST.jsxs)("div", {
          className: "SettingBox",
          children: [(0, ST.jsxs)(MT.e, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              (0, nI.i)(!0), RT.c.set({
                openEverythingMenuName: null
              })
            },
            disabled: XT,
            children: [(0, ST.jsx)("span", {
              children: "Open Replay Mode"
            }), (0, ST.jsx)(qI.e, {
              noaAction: "replayViewerOpen"
            })]
          }), XT && (0, ST.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Replay Mode is already open."
          })]
        }), (0, ST.jsxs)("div", {
          className: "SettingBox",
          children: [(0, ST.jsx)("div", {
            className: "ReplayViewerCategoryTutorialTitle",
            children: "How to use Replay Mode"
          }), (0, ST.jsx)("iframe", {
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
    var sI = IT(306),
      tI = IT(1724);
    const GI = {
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
        icon: () => (0, ST.jsx)("svg", {
          className: "svg-inline--fa",
          viewBox: "0 0 640 512",
          "aria-hidden": "true",
          children: (0, ST.jsx)("path", {
            fill: "currentColor",
            d: "M256 20H384A36 36 0 0 1 420 56V208A36 36 0 0 1 384 244H256A36 36 0 0 1 220 208V56A36 36 0 0 1 256 20ZM262 166L378 166L320 90ZM36 268H164A36 36 0 0 1 200 304V456A36 36 0 0 1 164 492H36A36 36 0 0 1 0 456V304A36 36 0 0 1 36 268ZM134 438L134 322L58 380ZM256 268H384A36 36 0 0 1 420 304V456A36 36 0 0 1 384 492H256A36 36 0 0 1 220 456V304A36 36 0 0 1 256 268ZM378 346L262 346L320 422ZM476 268H604A36 36 0 0 1 640 304V456A36 36 0 0 1 604 492H476A36 36 0 0 1 440 456V304A36 36 0 0 1 476 268ZM506 322L506 438L582 380Z"
          })
        }),
        displayName: "settingsMenu:controls"
      },
      crosshair: {
        icon: "fa-solid fa-crosshairs",
        displayName: "crosshairSettings:tab"
      },
      controller: {
        icon: "fa-solid fa-gamepad",
        displayName: "gamepadSettings:tab"
      },
      texturePack: {
        icon: "fa-solid fa-folder-image",
        displayName: "settingsMenu:texturePack"
      },
      Fc: {
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

    function pI() {
      return Promise.all([IT.e(74), IT.e(132), IT.e(126), IT.e(123)]).then((() => IT(39861))).then((TT => ({
        default: TT.ShaderPackCategory
      })), (TT => (console.error("Failed to load the shader pack settings", TT), {
        default: bI
      })))
    }

    function bI() {
      const {
        t: TT
      } = (0, WT.t)();
      return (0, ST.jsx)("div", {
        className: "SettingsMenuRightInner",
        children: TT("shaderPack:tabLoadFailed")
      })
    }
    var yI = IT(1357);
    const NI = (0, iT.lazy)((() => IT.e(262).then((() => IT(39843))).then((TT => ({
        default: TT.BloxdInformation
      }))))),
      PI = (0, iT.lazy)(pI);

    function dI(TT) {
      return TT ? "general" : "account"
    }
    const VI = new Map,
      Ti = (0, iT.memo)((function(TT) {
        let {
          show: oT,
          setBeforeResumeCallback: IT
        } = TT;
        (0, KT.e)();
        const {
          gameState: zT,
          openSettingsCategory: kT
        } = (0, RT.k)(["gameState", "openSettingsCategory"]), {
          userContext: BT
        } = (0, xT.b)(), {
          t: FT
        } = (0, WT.t)(), wT = (0, LT.c)(), mT = (0, cT.g)("minChunkAddDist"), eT = "inGame" === zT, [uT, fT] = (0, iT.useState)(dI(eT)), [CT, jT] = (0, iT.useState)(null), [JT, UT] = (0, iT.useState)([]), aT = (0, iT.useRef)(function() {
          const TT = new Date,
            oT = 6 * (TT.getMonth() + TT.getDate()) % sI.z.length;
          return [...sI.z, ...sI.z].slice(oT, oT + 6)
        }()), YT = (0, iT.useRef)(null), QT = (0, co.i)(YI.m, (0, YI.e)()), OT = Object.keys(GI).filter((TT => {
          switch (TT) {
            case "replayViewer":
              return eT;
            case "developerTools":
              return BT.playerHasRank("developer") || !1;
            case "texturePack":
              return rT.featureFlags.settings.canChangeTexturePack;
            case "Fc":
              return rT.featureFlags.settings.canUseShaderPacks;
            case "notifications":
              return rT.featureFlags.useSocialFeatures;
            case "alternativeDomains":
              return "crazygames" !== ET.p;
            case "controller":
              return rT.featureFlags.useControllerSupport && (QT || "controller" === uT);
            default:
              return !0
          }
        }));
        (0, co.g)("toggleFullCoordinateOverlay", (() => {
          const TT = Qo("showCoordinates") && Qo("showChunkCoordinates") && Qo("showFPS");
          Oo("showCoordinates", !TT), Oo("showChunkCoordinates", !TT), Oo("showFPS", !TT), wT()
        })), (0, co.g)("updatedChunkLoadDist", (() => {
          wT()
        })), (0, iT.useEffect)((() => {
          if (jT(null), null === RT.c.get("openSettingsCategory")) {
            const TT = (0, yI.f)() ? VI.get(eT) : void 0;
            fT(TT && OT.includes(TT) ? TT : dI(eT))
          }
        }), [oT]), (0, iT.useEffect)((() => {
          null !== kT && (fT(kT), VI.set(eT, kT), RT.c.set({
            openSettingsCategory: null
          }))
        }), [kT, eT]), (0, iT.useLayoutEffect)((() => {
          YT.current && (YT.current.scrollTop = 0)
        }), [uT, oT]), (0, iT.useEffect)((() => {
          "updateLog" === uT && (0, hT.d)().then(UT)
        }), [uT]), (0, iT.useEffect)((() => {
          if ((0, fo.K)(mT)) return;
          const [TT, oT] = (0, to.e)(), [IT, iT] = (0, mo.f)(mT), zT = (0, tI.g)(mT[0], TT, IT), kT = (0, tI.g)(mT[1], oT, iT);
          AT.gameBridge.send("setChunkAddDistance", {
            horizontal: zT,
            vertical: kT
          })
        }), [mT]);
        const HT = (0, iT.useCallback)((async () => {
          CT && (await CT(), jT(null))
        }), [CT]);

        function nT() {
          RT.c.set({
            openEverythingMenuName: null
          })
        }
        return (0, iT.useEffect)((() => {
          IT((() => HT))
        }), [HT, IT]), (0, ST.jsxs)("div", {
          className: "SettingsMenu Menu",
          style: oT ? {} : {
            display: "none"
          },
          children: [(0, ST.jsx)("div", {
            className: "MenuSideBar",
            children: (0, ST.jsx)("div", {
              className: "MenuSideBarBody",
              children: (0, ST.jsx)(DT, {
                items: OT.map((TT => {
                  const oT = GI[TT].icon;
                  return {
                    id: TT,
                    faIcon: "string" === typeof oT ? oT : void 0,
                    iconElement: "string" === typeof oT ? void 0 : (0, ST.jsx)(oT, {}),
                    title: FT(GI[TT].displayName),
                    redDot: !1
                  }
                })),
                selectedItemId: uT,
                onClick: TT => {
                  !async function(TT) {
                    await HT(), fT(TT), VI.set(eT, TT)
                  }(TT)
                }
              })
            })
          }), (0, ST.jsxs)("div", {
            ref: YT,
            className: "MenuBody SettingsMenuRight",
            children: ["account" === uT && (0, ST.jsx)(ko, {
              showing: oT,
              inGame: eT
            }), "general" === uT && (0, ST.jsx)(Do, {
              inGame: eT
            }), "audio" === uT && (0, ST.jsx)(Lo, {}), "notifications" === uT && (0, ST.jsx)(wo, {}), "graphics" === uT && (0, ST.jsx)(so, {
              minChunkAddDist: null !== mT && void 0 !== mT ? mT : [2, 2],
              getValue: Qo,
              onChange: Oo,
              setApplySettingsCallback: jT
            }), "controls" === uT && (0, ST.jsx)(Go.e, {}), "crosshair" === uT && (0, ST.jsx)(UI, {
              showing: oT
            }), "controller" === uT && rT.featureFlags.useControllerSupport && (0, ST.jsx)(aI.b, {}), rT.featureFlags.settings.canChangeTexturePack && "texturePack" === uT && (0, ST.jsx)(QI.e, {
              setApplySettingsCallback: jT
            }), rT.featureFlags.settings.canUseShaderPacks && "Fc" === uT && (0, ST.jsx)(iT.Suspense, {
              fallback: null,
              children: (0, ST.jsx)(PI, {
                setApplySettingsCallback: jT
              })
            }), "updateLog" === uT && (0, ST.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, ST.jsx)("div", {
                className: "UpdateLogsContainer",
                children: JT.map(((TT, oT) => (0, ST.jsx)(gT.c, {
                  updateLog: TT,
                  index: oT,
                  close: nT
                }, oT)))
              })
            }), "information" === uT && (0, ST.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, ST.jsx)(iT.Suspense, {
                fallback: null,
                children: (0, ST.jsx)(NI, {})
              })
            }), "alternativeDomains" === uT && (0, ST.jsxs)("div", {
              className: "SettingsMenuRightInner",
              children: [(0, ST.jsx)("div", {
                className: "AlternativeDomainsTitle",
                children: FT("settingsMenu:unblockedDomainsDescription")
              }), (0, ST.jsx)("div", {
                className: "AlternativeDomainsList",
                children: aT.current.map((TT => (0, ST.jsxs)(MT.e, {
                  onClick: () => {
                    window.open(`https://${TT}`)
                  },
                  children: [(0, ST.jsx)(XT.e, {
                    name: "arrow-up-right-from-square"
                  }), " ", TT]
                }, TT)))
              })]
            }), "replayViewer" === uT && (0, ST.jsx)(lI, {}), "developerTools" === uT && (0, ST.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, ST.jsx)(vT, {
                setApplySettingsCallback: jT
              })
            }), null !== CT && (0, ST.jsx)("div", {
              className: "SettingsMenuRightFooter",
              children: (0, ST.jsx)(MT.e, {
                className: "SettingsMenuRightFooterButton",
                onClick: HT,
                children: FT("general:apply")
              })
            })]
          })]
        })
      }));
    var oi = IT(2327);
    const Ii = ["characters", "emote", "skin", "hat", "head", "eyebrows", "eyes", "back", "body", "legs", "shoes", "profileEffect", "cape", "nameColour"],
      ii = (0, iT.lazy)((() => Promise.resolve().then((() => IT(4163))).then((TT => {
        TT.needGameClientAfterPaint();
        const oT = TT.matchmakingLibrariesPromise.then((TT => (0, oi.e)(TT.loadCharacterCustomisationUI(), (TT => TT.CharacterCustomisationUI))));
        return Promise.all([TT.ensureGameSetup(), oT]).then((TT => {
          let [, oT] = TT;
          return oT
        }))
      }))));

    function zi(TT) {
      let {
        show: oT
      } = TT;
      const {
        userContext: IT
      } = (0, xT.b)(), [zT, kT] = (0, iT.useState)("characters");
      if (!oT) return null;
      const WT = Ii.filter((TT => "cape" !== TT && "nameColour" !== TT || IT.getPlayerRanks().includes("super") || (0, qT.purchasesAllowed)())).map((TT => ({
        id: TT,
        faIcon: sI.G[TT],
        title: sI.H[TT],
        redDot: !1
      })));
      return (0, ST.jsxs)("div", {
        className: "Menu CharCustomisation",
        children: [(0, ST.jsx)("div", {
          className: "MenuSideBar",
          children: (0, ST.jsx)(DT, {
            items: WT,
            selectedItemId: zT,
            onClick: TT => {
              kT(TT)
            }
          })
        }), (0, ST.jsx)("div", {
          className: "MenuBody",
          children: (0, ST.jsx)(iT.Suspense, {
            fallback: (0, ST.jsx)("div", {
              className: "CharacterCustomisationLoading",
              children: (0, ST.jsx)(mT.d, {})
            }),
            children: (0, ST.jsx)(ii, {
              selectedTab: zT
            })
          })
        })]
      })
    }
    var ki = IT(1420),
      Wi = IT(8743),
      Xi = IT(4050),
      Bi = IT(2974),
      Fi = IT(3019),
      Si = IT(8766),
      Di = IT(8201),
      Li = IT(8745),
      xi = IT(8758),
      ci = IT(1747),
      Ki = IT(1729),
      Mi = IT(4398),
      ri = IT(1231),
      Ai = IT(1193),
      gi = IT(1612),
      wi = IT(8276);

    function mi(TT) {
      return TT ? Object.keys(TT).sort(((oT, IT) => {
        var iT, zT, kT, WT;
        const XT = (null !== (iT = null === (zT = TT[IT]) || void 0 === zT ? void 0 : zT.sortPriority) && void 0 !== iT ? iT : 0) - (null !== (kT = null === (WT = TT[oT]) || void 0 === WT ? void 0 : WT.sortPriority) && void 0 !== kT ? kT : 0);
        return 0 !== XT ? XT : oT.localeCompare(IT)
      })) : []
    }
    const ei = [{
      threshold: 1e12,
      suffix: "T"
    }, {
      threshold: 1e9,
      suffix: "B"
    }, {
      threshold: 1e6,
      suffix: "M"
    }, {
      threshold: 1e3,
      suffix: "K"
    }];

    function Ri(TT) {
      for (const {
          threshold: oT,
          suffix: IT
        }
        of ei)
        if (TT >= oT) {
          const iT = TT / oT;
          return iT >= 100 ? `${Math.floor(iT)}${IT}` : iT >= 10 ? `${iT.toFixed(1).replace(/\.0$/,"")}${IT}` : `${iT.toFixed(2).replace(/\.?0+$/,"")}${IT}`
        } return String(TT)
    }
    var ui = IT(4509);
    const vi = {
        normal: "0.8em",
        big: "1em"
      },
      Ei = (0, iT.memo)((function(TT) {
        let {
          item: oT,
          amount: IT = 0,
          size: iT = "normal",
          tier: zT = null
        } = TT;
        return (0, ST.jsx)("div", {
          className: kT()("SmpSlot", `SmpSlot-${iT}`),
          children: oT && (0, ST.jsx)(ci.c, {
            itemName: oT,
            amount: IT > 1 ? IT : 0,
            amountFontSize: vi[iT],
            enchantmentTier: zT
          })
        })
      }));

    function fi(TT) {
      let {
        amount: oT,
        exact: IT = !1,
        className: iT
      } = TT;
      return (0, ST.jsxs)("span", {
        className: kT()("SmpGold", iT),
        children: [(0, ST.jsx)("span", {
          className: "SmpCoin",
          children: (0, ST.jsx)(ci.c, {
            itemName: "Gold Coin",
            amount: 0
          })
        }), IT ? oT.toLocaleString("en-US") : Ri(oT)]
      })
    }

    function Ci(TT) {
      let {
        count: oT = 5,
        grid: IT = !1
      } = TT;
      return (0, ST.jsx)("div", {
        className: IT ? "SmpCardGrid" : "SmpList",
        "aria-hidden": "true",
        children: Array.from({
          length: oT
        }, ((TT, oT) => (0, ST.jsxs)("div", {
          className: kT()(IT ? "SmpListingCard" : "SmpRow", "SmpSkeleton"),
          children: [(0, ST.jsx)("div", {
            className: kT()("SmpSlot", IT ? "SmpSlot-big" : "SmpSlot-normal")
          }), (0, ST.jsxs)("div", {
            className: "SmpRowText",
            children: [(0, ST.jsx)("b", {}), (0, ST.jsx)("small", {})]
          }), (0, ST.jsx)("div", {
            className: "SmpSkeletonButton"
          })]
        }, oT)))
      })
    }

    function ji(TT) {
      let {
        title: oT,
        children: IT
      } = TT;
      return (0, ST.jsxs)("div", {
        className: "SmpEmpty",
        children: [(0, ST.jsx)("b", {
          children: oT
        }), IT && (0, ST.jsx)("small", {
          children: IT
        })]
      })
    }

    function Ji(TT) {
      let {
        entry: oT
      } = TT;
      return (0, ST.jsx)(ji, {
        title: (0, ST.jsx)(Ki.c, {
          text: oT.item.customTitle
        }),
        children: (0, ST.jsx)(Ki.c, {
          text: oT.item.description
        })
      })
    }

    function Ui(TT) {
      return (0, ST.jsx)(ui.e, {
        ...TT,
        className: kT()("SmpChoice", TT.className),
        reselectable: !0
      })
    }

    function ai() {
      return (0, ST.jsx)("span", {
        className: "SmpLoader",
        children: (0, ST.jsx)(mT.d, {})
      })
    }

    function Yi(TT) {
      let {
        value: oT,
        onChange: IT,
        min: zT = 1,
        max: kT,
        step: WT = 1,
        label: XT
      } = TT;
      const BT = (0, iT.useRef)(null),
        FT = (0, iT.useRef)(oT);
      FT.current = oT;
      const [DT, LT] = (0, iT.useState)(null), xT = TT => Math.max(zT, Math.min(kT, Math.floor(TT))), cT = TT => {
        const oT = FT.current,
          iT = "function" === typeof WT ? WT(oT, TT) : WT,
          zT = xT(oT + iT * TT);
        FT.current = zT, IT(zT)
      };
      (0, iT.useEffect)((() => {
        if (null === DT) return;
        let TT;
        const oT = () => {
            LT(null)
          },
          IT = setTimeout((() => {
            TT = setInterval((() => {
              cT(DT);
              const TT = FT.current;
              (DT > 0 ? TT >= kT : TT <= zT) && oT()
            }), 70)
          }), 380);
        return window.addEventListener("pointerup", oT), window.addEventListener("pointercancel", oT), window.addEventListener("blur", oT), () => {
          clearTimeout(IT), clearInterval(TT), window.removeEventListener("pointerup", oT), window.removeEventListener("pointercancel", oT), window.removeEventListener("blur", oT)
        }
      }), [DT]), (0, iT.useEffect)((() => {
        const TT = BT.current;
        TT && document.activeElement !== TT && TT.value !== String(oT) && (TT.value = String(oT))
      }), [oT]), (0, iT.useEffect)((() => {
        const TT = BT.current;
        if (!TT) return;
        const oT = () => {
          TT.value = String(FT.current)
        };
        return TT.addEventListener("blur", oT), () => {
          TT.removeEventListener("blur", oT)
        }
      }), []);
      const KT = TT => (0, ST.jsx)("button", {
        type: "button",
        className: "SmpStepButton",
        "aria-label": `${TT>0?"More":"Less"} ${XT}`,
        disabled: TT > 0 ? oT >= kT : oT <= zT,
        onPointerDown: oT => {
          0 === oT.button && (cT(TT), LT(TT))
        },
        onKeyDown: oT => {
          "Enter" !== oT.key && " " !== oT.key || cT(TT)
        },
        onContextMenu: TT => {
          TT.preventDefault()
        },
        children: TT > 0 ? "+" : "\u2212"
      });
      return (0, ST.jsxs)("div", {
        className: "SmpStepper",
        children: [KT(-1), (0, ST.jsx)(wT.e, {
          className: "SmpStepperInput",
          domRef: BT,
          defaultValue: String(oT),
          ariaLabel: XT,
          type: "text",
          blurOnEnter: !0,
          onValueChange: TT => {
            const oT = TT.replace(/[^\d]/g, "");
            BT.current && oT !== TT && (BT.current.value = oT), "" !== oT && IT(xT(Number(oT)))
          }
        }), KT(1)]
      })
    }

    function Qi(TT) {
      return Math.max(1, 10 ** Math.max(0, Math.floor(Math.log10(Math.max(1, TT))) - 1))
    }
    var Oi = IT(8763),
      Hi = IT(1214);
    const ni = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"];
    Hi.w, HT.vc.length;
    new Map;
    var qi = IT(2844);

    function Zi(TT, oT) {
      var IT;
      return oT && (null === (IT = TT[oT]) || void 0 === IT ? void 0 : IT.smp) || null
    }

    function li(TT, oT) {
      const IT = [];
      for (const zT of mi(TT)) {
        var iT;
        const kT = TT[zT];
        (null === (iT = kT.smp) || void 0 === iT ? void 0 : iT.kind) === oT && IT.push({
          key: zT,
          item: kT,
          meta: kT.smp
        })
      }
      return IT
    }

    function si(TT, oT) {
      var IT;
      return null !== (IT = li(TT, oT)[0]) && void 0 !== IT ? IT : null
    }
    const ti = "50% 0% 50% 0%",
      Gi = [{
        divisor: 864e5,
        suffix: "d"
      }, {
        divisor: 36e5,
        suffix: "h"
      }, {
        divisor: 6e4,
        suffix: "m"
      }, {
        divisor: 1e3,
        suffix: "s"
      }];

    function bi(TT) {
      const oT = TT - (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now());
      for (const {
          divisor: IT,
          suffix: iT
        }
        of Gi)
        if (oT >= IT) return `${Math.floor(oT/IT)}${iT}`;
      return "<1s"
    }

    function yi(TT) {
      const oT = TT.map(Di.f),
        IT = [];
      return oT.forEach(((TT, iT) => {
        const zT = function(TT) {
            const oT = TT.match(/\d+/);
            return oT ? Number(oT[0]) : 0
          }(TT),
          kT = iT === oT.length - 1;
        (kT || 1 === zT || 10 === zT || 100 === zT) && IT.push({
          label: TT,
          quantity: zT,
          isAll: kT
        })
      })), IT
    }
    let Ni = null;

    function Pi(TT, oT) {
      const IT = oT.trim().toLowerCase();
      if (!IT) return [];
      const iT = TT => {
          if (TT === IT) return 0;
          if (TT.startsWith(IT)) return 1;
          const oT = TT.indexOf(IT);
          return -1 === oT ? -1 : 2 + oT
        },
        zT = [];
      for (const XT of TT) {
        const TT = [iT(XT.lowerLabel), iT(XT.lowerName)].filter((TT => -1 !== TT));
        TT.length && zT.push({
          item: XT,
          rank: Math.min(...TT)
        })
      }
      if (zT.length > 0) return zT.sort(((TT, oT) => TT.rank - oT.rank)).map((TT => TT.item));
      const kT = [...IT],
        WT = TT => {
          let oT = 0;
          for (const IT of kT) {
            if (oT = TT.indexOf(IT, oT), -1 === oT) return !1;
            oT++
          }
          return !0
        };
      return TT.filter((TT => WT(TT.lowerLabel) || WT(TT.lowerName)))
    }

    function di(TT, oT) {
      var IT;
      return null !== (IT = null === TT || void 0 === TT ? void 0 : TT[oT]) && void 0 !== IT ? IT : oT
    }

    function Vi(TT, oT) {
      const IT = TT.userInput;
      return void 0 !== oT && "dropdown" === (null === IT || void 0 === IT ? void 0 : IT.type) && IT.dropdownOptions.map(Di.f).includes(oT) ? oT : function(TT) {
        const oT = TT.userInput;
        if ("dropdown" !== (null === oT || void 0 === oT ? void 0 : oT.type) || 0 === oT.dropdownOptions.length) return null;
        const IT = oT.dropdownOptions.map(Di.f);
        return oT.initialValue && IT.includes(oT.initialValue) ? oT.initialValue : IT[IT.length - 1]
      }(TT)
    }

    function Tz(TT) {
      return void 0 === TT ? "" : JSON.stringify(TT)
    }
    const oz = (0, iT.createContext)(null);

    function Iz() {
      return (0, iT.useContext)(oz)
    }
    var iz = IT(2404);
    const zz = (0, iT.memo)((function(TT) {
        let {
          name: oT,
          label: IT,
          onPick: iT
        } = TT;
        return (0, ST.jsxs)("button", {
          type: "button",
          className: "SmpCatalogueTile",
          title: IT,
          onClick: () => {
            iT(oT)
          },
          children: [(0, ST.jsx)(Ei, {
            item: oT,
            size: "big"
          }), (0, ST.jsx)("span", {
            children: IT
          })]
        })
      })),
      kz = (0, iT.memo)((function(TT) {
        let {
          items: oT,
          query: IT,
          onPick: zT
        } = TT;
        const {
          t: kT
        } = (0, WT.t)(), [XT, BT] = (0, iT.useState)(new Set), FT = (0, iT.useMemo)((() => function(TT) {
          const oT = new Map;
          for (const IT of TT) {
            let TT = oT.get(IT.category);
            TT || (TT = [], oT.set(IT.category, TT)), TT.push(IT)
          }
          return [...ni, "other"].filter((TT => oT.has(TT))).map((TT => ({
            category: TT,
            items: oT.get(TT)
          })))
        }(oT)), [oT]), DT = (0, iT.useMemo)((() => Pi(oT, IT).slice(0, 60)), [oT, IT]);
        return IT.trim() ? 0 === DT.length ? (0, ST.jsx)(ji, {
          title: kT("smpShop:noItemsFound", {
            query: IT.trim()
          }),
          children: kT("smpShop:tryShorterName")
        }) : (0, ST.jsx)(iz.d, {
          lazyLoadedClassName: "SmpCatalogueGrid",
          observerRoot: "SmpBody",
          rootMargin: ti,
          observerUpdateDeps: [IT],
          children: DT.map((TT => (0, ST.jsx)(zz, {
            name: TT.name,
            label: TT.label,
            onPick: zT
          }, TT.name)))
        }) : (0, ST.jsx)(ST.Fragment, {
          children: FT.map((TT => {
            let {
              category: oT,
              items: IT
            } = TT;
            const iT = XT.has(oT) || IT.length <= 48,
              WT = iT ? IT : IT.slice(0, 48);
            return (0, ST.jsxs)("section", {
              className: "SmpCatalogueSection",
              children: [(0, ST.jsxs)("h4", {
                children: [kT("other" === oT ? "smpShop:otherItems" : `creativeInventory:${oT}`), !iT && (0, ST.jsx)("button", {
                  type: "button",
                  className: "SmpLink",
                  onClick: () => {
                    BT(new Set([...XT, oT]))
                  },
                  children: kT("smpShop:showAll", {
                    count: IT.length
                  })
                })]
              }), (0, ST.jsx)(iz.d, {
                lazyLoadedClassName: "SmpCatalogueGrid",
                observerRoot: "SmpBody",
                rootMargin: ti,
                observerUpdateDeps: [iT],
                children: WT.map((TT => (0, ST.jsx)(zz, {
                  name: TT.name,
                  label: TT.label,
                  onPick: zT
                }, TT.name)))
              })]
            }, oT)
          }))
        })
      }));

    function Wz(TT, oT) {
      const {
        searched: IT,
        shown: zT,
        searchFor: kT,
        loading: WT
      } = function(TT, oT) {
        var IT;
        const zT = Iz(),
          [kT, WT] = (0, iT.useState)(void 0),
          XT = (0, iT.useRef)(void 0),
          BT = (0, iT.useRef)(0),
          FT = (0, iT.useRef)(void 0),
          ST = null !== (IT = null === TT || void 0 === TT ? void 0 : TT.meta.item) && void 0 !== IT ? IT : null,
          DT = !!TT && zT.isPending(TT.key);
        (0, iT.useEffect)((() => {
          if (!TT || DT || !oT || void 0 === kT || kT === ST) return;
          const IT = kT === XT.current && zT.gaveUpAt(TT.key) > BT.current && FT.current !== kT;
          (kT !== XT.current || IT) && zT.act(TT.key, null !== kT && void 0 !== kT ? kT : "*", IT) && (IT && (FT.current = kT), XT.current = kT, BT.current = Date.now())
        }), [TT, DT, oT, kT, ST, zT]);
        const LT = (0, iT.useCallback)((TT => {
            XT.current = void 0, FT.current = void 0, WT(TT)
          }), []),
          xT = void 0 !== kT && kT !== ST && (DT || XT.current !== kT);
        return {
          searched: ST,
          shown: xT ? kT : ST,
          searchFor: LT,
          loading: xT || DT || null !== ST && !oT
        }
      }(TT, oT), XT = (0, iT.useMemo)((() => function() {
        var TT;
        let oT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          IT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          iT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const zT = `${(0,qi.h)()}\x1f${oT.join("\x1e")}\x1f${IT.join("\x1e")}\x1f${JSON.stringify(iT)}`;
        if ((null === (TT = Ni) || void 0 === TT ? void 0 : TT.key) === zT) return Ni.items;
        const kT = new Set(IT),
          WT = new Set,
          XT = [],
          BT = (TT, oT) => {
            var IT;
            if (!TT || WT.has(TT) || kT.has(TT)) return;
            WT.add(TT);
            const zT = null !== (IT = iT[TT]) && void 0 !== IT ? IT : TT;
            XT.push({
              name: TT,
              label: zT,
              lowerLabel: zT.toLowerCase(),
              lowerName: TT.toLowerCase(),
              category: oT
            })
          };
        for (const ST of (0, Oi.creativeItemIds)()) {
          var FT;
          (0, Oi.itemIsDisabled)(ST, !0, !0, !1) || (0, Oi.showOnlyInCreativeSearch)(ST) || BT((0, qi.g)(ST), null !== (FT = (0, Oi.creativeCategoryOf)(ST)) && void 0 !== FT ? FT : "other")
        }
        for (const ST of oT) BT(ST, "other");
        return Ni = {
          key: zT,
          items: XT
        }, XT
      }(null === TT || void 0 === TT ? void 0 : TT.meta.extra, null === TT || void 0 === TT ? void 0 : TT.meta.excluded, null === TT || void 0 === TT ? void 0 : TT.meta.names)), [null === TT || void 0 === TT ? void 0 : TT.meta.extra, null === TT || void 0 === TT ? void 0 : TT.meta.excluded, null === TT || void 0 === TT ? void 0 : TT.meta.names]), [BT, FT] = (0, iT.useState)(""), [ST, DT] = (0, iT.useState)(0), [LT, xT] = (0, iT.useState)("recent"), cT = (0, iT.useCallback)((TT => {
        FT(""), DT((TT => TT + 1)), kT(TT)
      }), [kT]), KT = "browse" === LT || "" !== BT.trim();
      return {
        searched: IT,
        shown: zT,
        searchFor: kT,
        loading: WT,
        catalogue: XT,
        names: null === TT || void 0 === TT ? void 0 : TT.meta.names,
        query: BT,
        setQuery: FT,
        searchBoxKey: ST,
        pickItem: cT,
        setView: xT,
        browsing: KT
      }
    }

    function Xz(TT) {
      let {
        browser: oT,
        children: IT
      } = TT;
      const {
        t: iT
      } = (0, WT.t)(), zT = Iz();
      return (0, ST.jsxs)("div", {
        className: "SmpTopBar",
        children: [(0, ST.jsx)("div", {
          className: "SmpSearch",
          children: (0, ST.jsx)(wT.e, {
            className: "SmpSearchInput",
            placeholderText: iT("smpShop:searchPlaceholder"),
            defaultValue: oT.query,
            onValueChange: TT => {
              oT.setQuery(TT), oT.searched && TT.trim() && oT.searchFor(null)
            },
            blurOnEnter: !0,
            onEnter: () => {
              const TT = Pi(oT.catalogue, oT.query)[0];
              TT ? oT.pickItem(TT.name) : oT.query.trim() && zT.notify(iT("smpShop:noItemsFound", {
                query: oT.query.trim()
              }))
            }
          }, oT.searchBoxKey)
        }), IT]
      })
    }

    function Bz(TT) {
      let {
        browser: oT,
        recentLabel: IT,
        children: iT
      } = TT;
      const {
        t: zT
      } = (0, WT.t)();
      return (0, ST.jsxs)("div", {
        className: "SmpViewBar",
        children: [(0, ST.jsx)(Ui, {
          options: [{
            value: "recent",
            label: IT
          }, {
            value: "browse",
            label: zT("smpShop:browseItems")
          }],
          value: oT.browsing ? "browse" : "recent",
          onChange: oT.setView,
          ariaLabel: zT("smpShop:show")
        }), !oT.browsing && iT]
      })
    }

    function Fz(TT) {
      let {
        item: oT,
        names: IT,
        summary: iT,
        onBack: zT,
        children: kT
      } = TT;
      const {
        t: XT
      } = (0, WT.t)();
      return (0, ST.jsxs)("div", {
        className: "SmpItemHeader",
        children: [(0, ST.jsx)(MT.c, {
          className: "SmpBackButton",
          onClick: zT,
          children: XT("general:back")
        }), (0, ST.jsx)(Ei, {
          item: oT,
          size: "big"
        }), (0, ST.jsxs)("div", {
          className: "SmpItemHeaderText",
          children: [(0, ST.jsx)("b", {
            children: di(IT, oT)
          }), iT && (0, ST.jsx)("small", {
            children: iT
          })]
        }), kT]
      })
    }

    function Sz(TT) {
      let {
        browser: oT,
        className: IT,
        action: iT,
        above: zT,
        list: WT,
        summary: XT,
        recentLabel: BT,
        listControls: FT,
        onBack: DT
      } = TT;
      return (0, ST.jsxs)("div", {
        className: kT()("SmpScreen", IT),
        children: [(0, ST.jsx)(Xz, {
          browser: oT,
          children: iT
        }), oT.shown && (0, ST.jsx)(Fz, {
          item: oT.shown,
          names: oT.names,
          summary: !oT.loading && XT,
          onBack: () => {
            null === DT || void 0 === DT || DT(), oT.searchFor(null)
          },
          children: FT
        }), zT, oT.shown ? WT : (0, ST.jsxs)(ST.Fragment, {
          children: [(0, ST.jsx)(Bz, {
            browser: oT,
            recentLabel: BT,
            children: FT
          }), oT.browsing ? (0, ST.jsx)(kz, {
            items: oT.catalogue,
            query: oT.query,
            onPick: oT.pickItem
          }) : WT]
        })]
      })
    }

    function Dz(TT, oT) {
      const IT = TT.map((TT => {
        let {
          meta: oT
        } = TT;
        return oT.pricePerItem
      }));
      return "min" === oT ? Math.min(...IT) : Math.max(...IT)
    }
    var Lz = IT(6062);
    const xz = (0, iT.memo)((function(TT) {
      var oT;
      const {
        t: IT
      } = (0, WT.t)(), iT = null === TT.seller, zT = TT.quantity * TT.pricePerItem;
      return (0, ST.jsxs)("div", {
        className: TT.grid ? "SmpListingCard" : "SmpRow SmpListingRow",
        children: [(0, ST.jsx)(Ei, {
          item: TT.item,
          amount: TT.quantity,
          size: TT.grid ? "big" : "normal",
          tier: TT.tier
        }), (0, ST.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, ST.jsx)("b", {
            children: (0, ST.jsx)(Ki.c, {
              text: null !== (oT = TT.title) && void 0 !== oT ? oT : `${TT.quantity}x ${TT.item}`
            })
          }), (0, ST.jsxs)("small", {
            className: "SmpListingFacts",
            children: [(0, ST.jsx)("span", {
              children: iT ? IT("smpShop:you") : (0, ST.jsx)(Ki.c, {
                text: [{
                  entityName: TT.seller
                }]
              })
            }), (0, ST.jsx)("span", {
              children: IT("smpShop:timeLeft", {
                time: bi(TT.expiresAt)
              })
            })]
          })]
        }), (0, ST.jsxs)("div", {
          className: "SmpRowPrice",
          children: [(0, ST.jsx)(fi, {
            amount: TT.pricePerItem
          }), (0, ST.jsx)("small", {
            children: IT("smpShop:each")
          })]
        }), (0, ST.jsx)(MT.e, {
          className: "SmpBuyButton",
          disabled: iT || !TT.canAfford && !TT.busy,
          loading: TT.busy,
          onClick: () => {
            TT.onBuy(TT.itemKey)
          },
          children: iT ? IT("smpShop:yours") : (0, ST.jsx)(fi, {
            amount: zT
          })
        })]
      })
    }));

    function cz(TT) {
      let {
        view: oT,
        onChange: IT
      } = TT;
      const {
        t: iT
      } = (0, WT.t)();
      return (0, ST.jsx)(ui.e, {
        className: "SmpChoice SmpViewToggle",
        ariaLabel: iT("smpShop:layout"),
        options: [{
          value: "list",
          label: (0, ST.jsx)(XT.e, {
            name: "list"
          }),
          ariaLabel: iT("smpShop:listView")
        }, {
          value: "grid",
          label: (0, ST.jsx)(XT.e, {
            name: "grid-2"
          }),
          ariaLabel: iT("smpShop:gridView")
        }],
        value: oT,
        onChange: IT
      })
    }

    function Kz(TT) {
      let {
        entries: oT,
        view: IT
      } = TT;
      const {
        t: iT
      } = (0, WT.t)(), zT = Iz(), kT = "grid" === IT;
      return (0, ST.jsxs)(ST.Fragment, {
        children: [!kT && (0, ST.jsxs)("div", {
          className: "SmpColumns",
          "aria-hidden": "true",
          children: [(0, ST.jsx)("span", {}), (0, ST.jsx)("span", {
            children: iT("smpShop:columnItem")
          }), (0, ST.jsx)("span", {
            children: iT("smpShop:columnPriceEach")
          }), (0, ST.jsx)("span", {
            children: iT("smpShop:columnTotal")
          })]
        }), (0, ST.jsx)(iz.d, {
          lazyLoadedClassName: kT ? "SmpCardGrid" : "SmpList",
          observerRoot: "SmpBody",
          rootMargin: ti,
          observerUpdateDeps: [oT.length],
          children: oT.map((TT => {
            var oT, IT;
            let {
              key: iT,
              item: WT,
              meta: XT
            } = TT;
            const BT = XT.quantity * XT.pricePerItem;
            return (0, ST.jsx)(xz, {
              itemKey: iT,
              item: XT.item,
              title: WT.customTitle,
              quantity: XT.quantity,
              pricePerItem: XT.pricePerItem,
              seller: XT.seller,
              expiresAt: XT.expiresAt,
              tier: null !== (oT = null === (IT = WT.enchant) || void 0 === IT ? void 0 : IT.tier) && void 0 !== oT ? oT : null,
              busy: zT.isPending(iT) || null !== XT.seller && !1 === WT.canBuy,
              canAfford: zT.canAfford(WT, BT),
              grid: kT,
              onBuy: zT.act
            }, iT)
          }))
        }, IT)]
      })
    }
    const Mz = [1, 10, 100],
      rz = [1, 10, 100, 999];

    function Az(TT) {
      var oT, IT, zT, BT, FT, DT, LT, xT, cT, KT;
      const {
        t: rT
      } = (0, WT.t)(), AT = Iz(), {
        creator: gT,
        mode: hT
      } = TT, [mT, eT] = (0, iT.useState)(null !== (oT = null === gT || void 0 === gT ? void 0 : gT.meta.item) && void 0 !== oT ? oT : null), [RT, uT] = (0, iT.useState)(1), [vT, ET] = (0, iT.useState)(0), [fT, CT] = (0, iT.useState)(""), [jT, JT] = (0, iT.useState)(0), UT = (0, iT.useRef)(mT), aT = (0, iT.useRef)(!1), [YT, QT] = (0, iT.useState)(!1), OT = null !== (IT = null === gT || void 0 === gT ? void 0 : gT.meta.item) && void 0 !== IT ? IT : null, HT = null !== (zT = null === gT || void 0 === gT ? void 0 : gT.meta.kS) && void 0 !== zT ? zT : 0;
      (0, iT.useEffect)((() => {
        TT.searching || null === OT || OT === UT.current || (UT.current = OT, aT.current = !1, eT(OT), ET(0), uT("list" === hT ? Math.max(1, HT) : 1))
      }), [OT, TT.searching]);
      const nT = !!gT && !!mT && gT.meta.item === mT,
        qT = nT ? gT.meta.kS : null !== (BT = null === (FT = TT.inventory) || void 0 === FT || null === (DT = FT.find((TT => TT.item === mT))) || void 0 === DT ? void 0 : DT.quantity) && void 0 !== BT ? BT : 0,
        ZT = "list" === hT ? Math.max(1, qT) : 45954,
        lT = null !== (LT = TT.prices[0]) && void 0 !== LT ? LT : null,
        sT = TT.prices.length ? Math.round(TT.prices.reduce(((TT, oT) => TT + oT), 0) / TT.prices.length) : null,
        tT = null === (xT = TT.inventory) || void 0 === xT || null === (cT = xT.find((TT => TT.item === mT))) || void 0 === cT ? void 0 : cT.sellPrice;
      (0, iT.useEffect)((() => {
        var TT;
        nT && (uT((TT => "list" === hT ? Math.min(Math.max(1, TT), Math.max(1, qT)) : TT)), aT.current || ET(null !== (TT = null !== lT && void 0 !== lT ? lT : sT) && void 0 !== TT ? TT : Math.max(1, null !== tT && void 0 !== tT ? tT : 1)))
      }), [nT, qT, mT, lT, sT]);
      const GT = TT => {
          aT.current = !0, ET(TT)
        },
        pT = oT => {
          var IT, iT, zT;
          UT.current = oT, aT.current = !1, QT(!1), CT(""), JT((TT => TT + 1)), eT(oT), ET(0), uT("list" === hT && null !== (IT = null === (iT = TT.inventory) || void 0 === iT || null === (zT = iT.find((TT => TT.item === oT))) || void 0 === zT ? void 0 : zT.quantity) && void 0 !== IT ? IT : 1), (null === gT || void 0 === gT ? void 0 : gT.meta.item) !== oT && TT.onPickItem(oT)
        },
        bT = RT * vT,
        yT = "list" === hT && null !== gT && void 0 !== gT && gT.meta.fee ? function(TT, oT) {
          const IT = Math.max(0, oT - TT.taxFreeAllowance);
          return Math.ceil(Math.round(IT * TT.rate * 1e6) / 1e6)
        }(gT.meta.fee, bT) : 0,
        NT = !!gT && AT.isPending(gT.key),
        PT = nT && !TT.searching && RT >= 1 && vT >= 1 && ("order" === hT || qT >= RT) && !NT,
        dT = !!mT && !nT && !TT.searching && RT >= 1 && vT >= 1,
        VT = () => {
          PT ? AT.act(gT.key, `${RT}|${vT}`) : dT && (TT.onPickItem(mT), QT(!0))
        };
      (0, iT.useEffect)((() => {
        YT && nT && !TT.searching && (QT(!1), VT())
      }), [YT, nT, TT.searching]);
      const To = !!mT && !nT && (TT.searching || YT),
        oo = mT ? di(TT.names, mT) : "",
        Io = (0, iT.useMemo)((() => Pi(TT.catalogue, fT).slice(0, 8)), [TT.catalogue, fT]),
        io = ("list" === hT ? Mz.filter((TT => TT < qT)) : rz).map((TT => ({
          value: TT,
          label: String(TT)
        })));
      "list" === hT && qT > 0 && io.push({
        value: qT,
        label: rT("smpShop:all", {
          count: qT
        })
      });
      const zo = [];
      return null !== lT && (lT > 1 && zo.push({
        value: lT - 1,
        label: rT("smpShop:undercut", {
          price: Ri(lT - 1)
        })
      }), zo.push({
        value: lT,
        label: rT("smpShop:lowest", {
          price: Ri(lT)
        })
      })), null !== sT && sT !== lT && zo.push({
        value: sT,
        label: rT("smpShop:average", {
          price: Ri(sT)
        })
      }), (0, ST.jsxs)("div", {
        className: "SmpTradeForm",
        children: [(0, ST.jsxs)("div", {
          className: "SmpTradeFormHead",
          children: [(0, ST.jsx)("b", {
            children: rT("list" === hT ? "smpShop:sellOnMarket" : "smpShop:createOrder")
          }), (0, ST.jsx)("button", {
            type: "button",
            className: "SmpIconButton",
            "aria-label": rT("smpShop:close"),
            onClick: TT.onClose,
            children: (0, ST.jsx)(XT.e, {
              name: "xmark"
            })
          })]
        }), "list" === hT && (0, ST.jsx)("div", {
          className: "SmpPicker",
          role: "listbox",
          children: null !== (KT = TT.inventory) && void 0 !== KT && KT.length ? TT.inventory.map((TT => {
            let {
              item: oT,
              quantity: IT
            } = TT;
            return (0, ST.jsx)("button", {
              type: "button",
              title: oT,
              className: kT()("SmpPickerSlot", {
                SmpPickerSlotOn: oT === mT
              }),
              onClick: () => {
                pT(oT)
              },
              children: (0, ST.jsx)(Ei, {
                item: oT,
                amount: IT
              })
            }, oT)
          })) : (0, ST.jsx)("span", {
            className: "SmpMuted",
            children: rT("smpShop:nothingToList")
          })
        }), ("list" === hT || !mT) && (0, ST.jsxs)("div", {
          className: "SmpItemSearch",
          children: [(0, ST.jsx)(wT.e, {
            className: "SmpSearchInput",
            placeholderText: rT("list" === hT ? "smpShop:listSearchPlaceholder" : "smpShop:orderSearchPlaceholder"),
            defaultValue: fT,
            onValueChange: CT,
            blurOnEnter: !0,
            onEnter: () => {
              Io[0] && pT(Io[0].name)
            }
          }, jT), Io.length > 0 && (0, ST.jsx)("div", {
            className: "SmpPicker",
            children: Io.map((TT => {
              let {
                name: oT
              } = TT;
              return (0, ST.jsx)("button", {
                type: "button",
                title: oT,
                className: kT()("SmpPickerSlot", {
                  SmpPickerSlotOn: oT === mT
                }),
                onClick: () => {
                  pT(oT)
                },
                children: (0, ST.jsx)(Ei, {
                  item: oT
                })
              }, oT)
            }))
          })]
        }), mT && (0, ST.jsxs)(ST.Fragment, {
          children: [(0, ST.jsxs)("div", {
            className: "SmpPickedName",
            children: [oo, To && (0, ST.jsx)(ai, {})]
          }), (0, ST.jsxs)("div", {
            className: "SmpFormGrid",
            children: [(0, ST.jsxs)("div", {
              className: "SmpField",
              children: [(0, ST.jsxs)("span", {
                children: [rT("smpShop:quantity"), "list" === hT && nT && (0, ST.jsx)("small", {
                  children: rT("smpShop:youHave", {
                    count: qT
                  })
                })]
              }), (0, ST.jsx)(Yi, {
                value: RT,
                onChange: uT,
                max: ZT,
                label: rT("smpShop:quantity")
              }), (0, ST.jsx)(Ui, {
                options: io,
                value: RT,
                onChange: uT,
                ariaLabel: rT("smpShop:quantity")
              })]
            }), (0, ST.jsxs)("div", {
              className: "SmpField",
              children: [(0, ST.jsx)("span", {
                children: rT("smpShop:pricePerItem")
              }), (0, ST.jsx)(Yi, {
                value: Math.max(1, vT),
                onChange: GT,
                max: 9999999,
                step: Qi,
                label: rT("smpShop:pricePerItem")
              }), (0, ST.jsx)(Ui, {
                options: zo,
                value: vT,
                onChange: GT,
                ariaLabel: rT("smpShop:pricePerItem")
              })]
            })]
          }), "list" === hT && (0, ST.jsxs)("div", {
            className: "SmpTradeSummary",
            children: [(0, ST.jsxs)("span", {
              children: [rT("smpShop:youGet"), " ", (0, ST.jsx)(fi, {
                amount: Math.max(0, bT - yT),
                exact: !0
              })]
            }), (0, ST.jsx)("small", {
              children: yT > 0 ? rT("smpShop:listingFee", {
                fee: yT.toLocaleString("en-US")
              }) : rT("smpShop:listingRules")
            })]
          }), (0, ST.jsx)(MT.r, {
            className: "SmpSubmit",
            disabled: !PT && !dT && !NT,
            loading: NT || To || nT && TT.searching,
            onClick: VT,
            children: "list" === hT ? rT("smpShop:listButton", {
              count: RT,
              item: oo
            }) : (0, ST.jsxs)(ST.Fragment, {
              children: [rT("smpShop:orderButton", {
                count: RT,
                item: oo
              }), " ", vT >= 1 && (0, ST.jsx)(fi, {
                amount: bT
              })]
            })
          })]
        })]
      })
    }

    function gz() {
      var TT;
      const {
        t: oT
      } = (0, WT.t)(), IT = Iz(), zT = null === (TT = IT.shopInfo[IT.categoryKey]) || void 0 === TT ? void 0 : TT.items, kT = si(zT, "search"), XT = si(zT, "creator"), BT = li(zT, "enchantedCreator"), FT = li(zT, "listing"), DT = si(zT, "empty"), LT = Wz(kT, FT.length > 0 || null !== DT), {
        searched: xT,
        shown: cT,
        loading: KT
      } = LT, [rT, AT] = (0, iT.useState)(!1), [gT, hT] = function() {
        const [TT, oT] = (0, Lz.c)("smpMarketView", "list");
        return ["grid" === TT ? "grid" : "list", oT]
      }(), wT = "grid" === gT, mT = (0, iT.useMemo)((() => FT.filter((TT => {
        let {
          meta: oT
        } = TT;
        return null !== oT.seller && oT.item === xT
      })).map((TT => {
        let {
          meta: oT
        } = TT;
        return oT.pricePerItem
      })).sort(((TT, oT) => TT - oT))), [FT, xT]), eT = (0, iT.useMemo)((() => {
        const TT = new Set(LT.catalogue.map((TT => {
          let {
            name: oT
          } = TT;
          return oT
        })));
        return function(TT) {
          for (const oT in TT)
            if ("sell" === TT[oT].smp) return li(TT[oT].items, "sell").filter((TT => {
              let {
                item: oT
              } = TT;
              return !oT.enchant
            })).map((TT => {
              let {
                meta: oT
              } = TT;
              return {
                item: oT.item,
                quantity: oT.quantity,
                sellPrice: oT.pricePerItem
              }
            }));
          return []
        }(IT.shopInfo).filter((oT => {
          let {
            item: IT
          } = oT;
          return TT.has(IT)
        }))
      }), [IT.shopInfo, LT.catalogue]);
      return (0, ST.jsx)(Sz, {
        browser: LT,
        className: "SmpMarketTab",
        recentLabel: oT("smpShop:recentlyListed"),
        action: (0, ST.jsx)(MT.r, {
          className: "SmpSellButton",
          onClick: () => {
            AT((TT => !TT))
          },
          children: oT("smpShop:sell")
        }),
        above: rT && (0, ST.jsxs)(ST.Fragment, {
          children: [(0, ST.jsx)(Az, {
            mode: "list",
            creator: XT,
            inventory: eT,
            catalogue: LT.catalogue,
            names: LT.names,
            searching: KT,
            prices: mT,
            onPickItem: LT.searchFor,
            onClose: () => {
              AT(!1)
            }
          }), BT.length > 0 && (0, ST.jsx)(hz, {
            entries: BT
          })]
        }),
        listControls: (0, ST.jsx)(cz, {
          view: gT,
          onChange: hT
        }),
        summary: cT && (FT.length > 0 ? oT(1 === FT.length ? "smpShop:listingSummaryOne" : "smpShop:listingSummary", {
          count: FT.length,
          price: Ri(Dz(FT, "min"))
        }) : oT("smpShop:noOneSelling", {
          item: di(LT.names, cT)
        })),
        list: KT ? (0, ST.jsx)(Ci, {
          grid: wT
        }) : FT.length > 0 ? (0, ST.jsx)(Kz, {
          entries: FT,
          view: gT
        }) : DT ? (0, ST.jsx)(Ji, {
          entry: DT
        }) : (0, ST.jsx)(Ci, {
          count: 3,
          grid: wT
        })
      })
    }

    function hz(TT) {
      let {
        entries: oT
      } = TT;
      const {
        t: IT
      } = (0, WT.t)(), zT = Iz(), [kT, XT] = (0, iT.useState)({});
      return (0, ST.jsx)("div", {
        className: "SmpList",
        children: oT.map((TT => {
          var oT, iT, WT;
          let {
            key: BT,
            item: FT,
            meta: DT
          } = TT;
          const LT = null !== (oT = kT[BT]) && void 0 !== oT ? oT : 1;
          return (0, ST.jsxs)("div", {
            className: "SmpRow",
            children: [(0, ST.jsx)(Ei, {
              item: DT.item,
              amount: DT.quantity,
              tier: null !== (iT = null === (WT = FT.enchant) || void 0 === WT ? void 0 : WT.tier) && void 0 !== iT ? iT : null
            }), (0, ST.jsxs)("div", {
              className: "SmpRowText",
              children: [(0, ST.jsx)("b", {
                children: (0, ST.jsx)(Ki.c, {
                  text: FT.customTitle
                })
              }), (0, ST.jsx)("small", {
                children: IT("smpShop:enchantedListing")
              })]
            }), (0, ST.jsx)(Yi, {
              value: LT,
              onChange: TT => {
                XT({
                  ...kT,
                  [BT]: TT
                })
              },
              max: 9999999,
              step: Qi,
              label: IT("smpShop:pricePerItem")
            }), (0, ST.jsxs)(MT.r, {
              loading: zT.isPending(BT),
              onClick: () => {
                zT.act(BT, String(LT))
              },
              children: [IT("smpShop:list"), " ", (0, ST.jsx)(fi, {
                amount: LT
              })]
            })]
          }, BT)
        }))
      })
    }
    const wz = (0, iT.memo)((function(TT) {
      let {
        itemKey: oT,
        item: IT,
        quantity: iT,
        pricePerItem: zT,
        tier: WT,
        selected: XT,
        onSelect: BT
      } = TT;
      return (0, ST.jsxs)("button", {
        type: "button",
        className: kT()("SmpInventorySlot", {
          SmpInventorySlotOn: XT
        }),
        title: IT,
        onClick: () => {
          BT(oT)
        },
        children: [(0, ST.jsx)(Ei, {
          item: IT,
          amount: iT,
          tier: WT
        }), (0, ST.jsx)(fi, {
          amount: zT
        })]
      })
    }));

    function mz() {
      var TT;
      const {
        t: oT
      } = (0, WT.t)(), IT = Iz(), zT = null === (TT = IT.shopInfo[IT.categoryKey]) || void 0 === TT ? void 0 : TT.items, XT = li(zT, "sell"), BT = si(zT, "empty"), [FT, DT] = (0, iT.useState)(null), [LT, xT] = (0, iT.useState)({}), cT = XT.find((TT => {
        let {
          key: oT
        } = TT;
        return oT === FT
      }));
      return 0 === XT.length ? (0, ST.jsx)("div", {
        className: "SmpScreen",
        children: (0, ST.jsx)(ji, {
          title: BT ? (0, ST.jsx)(Ki.c, {
            text: BT.item.customTitle
          }) : oT("smpShop:nothingToSell"),
          children: BT && (0, ST.jsx)(Ki.c, {
            text: BT.item.description
          })
        })
      }) : (0, ST.jsxs)("div", {
        className: "SmpScreen SmpInstantSellTab",
        children: [(0, ST.jsx)("div", {
          className: "SmpInventoryGrid",
          children: XT.map((TT => {
            var oT, IT;
            let {
              key: iT,
              item: zT,
              meta: kT
            } = TT;
            return (0, ST.jsx)(wz, {
              itemKey: iT,
              item: kT.item,
              quantity: kT.quantity,
              pricePerItem: kT.pricePerItem,
              tier: null !== (oT = null === (IT = zT.enchant) || void 0 === IT ? void 0 : IT.tier) && void 0 !== oT ? oT : null,
              selected: iT === FT,
              onSelect: DT
            }, iT)
          }))
        }), (0, ST.jsx)("div", {
          className: kT()("SmpSellBar", {
            SmpSellBarIdle: !cT
          }),
          children: cT ? (0, ST.jsx)(ez, {
            entry: cT,
            choice: Vi(cT.item, LT[cT.key]),
            onChoose: TT => {
              xT({
                ...LT,
                [cT.key]: TT
              })
            }
          }) : (0, ST.jsx)("span", {
            className: "SmpMuted",
            children: oT("smpShop:tapToSell")
          })
        })]
      })
    }

    function ez(TT) {
      var oT, IT, iT, zT;
      let {
        entry: kT,
        choice: XT,
        onChoose: BT
      } = TT;
      const {
        t: FT
      } = (0, WT.t)(), DT = Iz(), {
        key: LT,
        item: xT,
        meta: cT
      } = kT, KT = yi("dropdown" === (null === (oT = xT.userInput) || void 0 === oT ? void 0 : oT.type) ? xT.userInput.dropdownOptions : []), rT = null === XT ? 0 : -(0, Di.e)(xT, XT);
      return (0, ST.jsxs)(ST.Fragment, {
        children: [(0, ST.jsx)(Ei, {
          item: cT.item,
          amount: cT.quantity,
          tier: null !== (IT = null === (iT = xT.enchant) || void 0 === iT ? void 0 : iT.tier) && void 0 !== IT ? IT : null
        }), (0, ST.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, ST.jsx)("b", {
            children: (0, ST.jsx)(Ki.c, {
              text: null !== (zT = xT.customTitle) && void 0 !== zT ? zT : cT.item
            })
          }), (0, ST.jsx)("small", {
            children: FT("smpShop:sellEach", {
              count: cT.quantity
            })
          })]
        }), (0, ST.jsx)(Ui, {
          options: KT.map((TT => {
            let {
              label: oT,
              quantity: IT,
              isAll: iT
            } = TT;
            return {
              value: oT,
              label: iT ? FT("smpShop:all", {
                count: IT
              }) : String(IT)
            }
          })),
          value: XT,
          onChange: BT,
          ariaLabel: FT("smpShop:quantity")
        }), (0, ST.jsxs)(MT.r, {
          loading: DT.isPending(LT),
          disabled: null === XT,
          onClick: () => {
            DT.act(LT, XT)
          },
          children: [FT("smpShop:sellButton"), " ", (0, ST.jsx)(fi, {
            amount: rT
          })]
        })]
      })
    }

    function Rz() {
      var TT;
      const {
        t: oT
      } = (0, WT.t)(), IT = Iz(), iT = null === (TT = IT.shopInfo[IT.categoryKey]) || void 0 === TT ? void 0 : TT.items, zT = li(iT, "collect"), kT = li(iT, "myListing"), XT = (TT, oT) => IT.isPending(TT) || !1 === oT.canBuy;
      return (0, ST.jsxs)("div", {
        className: "SmpScreen",
        children: [(0, ST.jsx)("h3", {
          className: "SmpSectionTitle",
          children: oT("smpShop:readyToCollect")
        }), zT.length > 0 ? (0, ST.jsx)("div", {
          className: "SmpList",
          children: zT.map((TT => {
            var iT, zT;
            let {
              key: kT,
              item: WT,
              meta: BT
            } = TT;
            return (0, ST.jsxs)("div", {
              className: "SmpRow",
              children: [(0, ST.jsx)(Ei, {
                item: "sold" === BT.type ? "Gold Coin" : BT.item,
                amount: "sold" === BT.type ? 0 : BT.quantity,
                tier: null !== (iT = null === (zT = WT.enchant) || void 0 === zT ? void 0 : zT.tier) && void 0 !== iT ? iT : null
              }), (0, ST.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, ST.jsx)("b", {
                  children: (0, ST.jsx)(Ki.c, {
                    text: WT.customTitle
                  })
                }), (0, ST.jsx)("small", {
                  children: (0, ST.jsx)(Ki.c, {
                    text: WT.description
                  })
                })]
              }), (0, ST.jsx)(MT.m, {
                loading: XT(kT, WT),
                onClick: () => {
                  IT.act(kT)
                },
                children: oT("smpShop:collect")
              })]
            }, kT)
          }))
        }) : (0, ST.jsx)(ji, {
          title: oT("smpShop:nothingToCollect"),
          children: oT("smpShop:nothingToCollectHint")
        }), (0, ST.jsx)("h3", {
          className: "SmpSectionTitle",
          children: oT("smpShop:activeListings", {
            count: kT.length
          })
        }), kT.length > 0 ? (0, ST.jsx)("div", {
          className: "SmpList",
          children: kT.map((TT => {
            var iT, zT;
            let {
              key: kT,
              item: WT,
              meta: BT
            } = TT;
            return (0, ST.jsxs)("div", {
              className: "SmpRow",
              children: [(0, ST.jsx)(Ei, {
                item: BT.item,
                amount: BT.quantity,
                tier: null !== (iT = null === (zT = WT.enchant) || void 0 === zT ? void 0 : zT.tier) && void 0 !== iT ? iT : null
              }), (0, ST.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, ST.jsx)("b", {
                  children: (0, ST.jsx)(Ki.c, {
                    text: WT.customTitle
                  })
                }), (0, ST.jsx)("small", {
                  children: oT("smpShop:timeLeft", {
                    time: bi(BT.expiresAt)
                  })
                })]
              }), (0, ST.jsxs)("div", {
                className: "SmpRowPrice",
                children: [(0, ST.jsx)(fi, {
                  amount: BT.pricePerItem
                }), (0, ST.jsx)("small", {
                  children: oT("smpShop:each")
                })]
              }), (0, ST.jsx)(MT.C, {
                loading: XT(kT, WT),
                onClick: () => {
                  IT.act(kT)
                },
                children: oT("smpShop:cancel")
              })]
            }, kT)
          }))
        }) : (0, ST.jsx)(ji, {
          title: oT("smpShop:noActiveListings"),
          children: oT("smpShop:noActiveListingsHint")
        })]
      })
    }

    function uz(TT) {
      let {
        done: oT,
        of: IT
      } = TT;
      return (0, ST.jsx)("span", {
        className: "SmpProgress",
        children: (0, ST.jsx)("i", {
          style: {
            width: `${Math.min(100,oT/Math.max(1,IT)*100)}%`
          }
        })
      })
    }

    function vz(TT) {
      var oT, IT, iT;
      let {
        entry: zT,
        choice: kT,
        onChoose: XT
      } = TT;
      const {
        t: BT
      } = (0, WT.t)(), FT = Iz(), {
        key: DT,
        item: LT,
        meta: xT
      } = zT, cT = "dropdown" === (null === (oT = LT.userInput) || void 0 === oT ? void 0 : oT.type) ? LT.userInput.dropdownOptions : [], KT = !0 === xT.processing, rT = null !== xT.creator && (xT.kS > 0 || KT), AT = rT && xT.kS > 0 ? yi(cT) : [], gT = null === kT ? 0 : null !== (IT = null === (iT = AT.find((TT => TT.label === kT))) || void 0 === iT ? void 0 : iT.quantity) && void 0 !== IT ? IT : 0;
      return (0, ST.jsxs)("div", {
        className: "SmpRow SmpOrderRow",
        children: [(0, ST.jsx)(Ei, {
          item: xT.item
        }), (0, ST.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, ST.jsx)("b", {
            children: (0, ST.jsx)(Ki.c, {
              text: LT.customTitle
            })
          }), (0, ST.jsxs)("small", {
            children: [(0, ST.jsx)(fi, {
              amount: xT.pricePerItem
            }), " ", BT("smpShop:each"), " \xb7", " ", null === xT.creator ? BT("smpShop:you") : (0, ST.jsx)(Ki.c, {
              text: [{
                entityName: xT.creator
              }]
            })]
          }), (0, ST.jsx)(uz, {
            done: xT.delivered,
            of: xT.wanted
          })]
        }), rT ? (0, ST.jsxs)(ST.Fragment, {
          children: [(0, ST.jsx)(Ui, {
            options: AT.map((TT => {
              let {
                label: oT,
                quantity: IT,
                isAll: iT
              } = TT;
              return {
                value: oT,
                label: iT ? BT("smpShop:max", {
                  count: IT
                }) : String(IT)
              }
            })),
            value: kT,
            onChange: XT,
            ariaLabel: BT("smpShop:quantity")
          }), (0, ST.jsxs)(MT.r, {
            loading: FT.isPending(DT) || KT,
            disabled: null === kT,
            onClick: () => {
              FT.act(DT, kT)
            },
            children: [BT("smpShop:deliver"), " ", (0, ST.jsx)(fi, {
              amount: gT * xT.pricePerItem
            })]
          })]
        }) : (0, ST.jsx)("span", {
          className: "SmpMuted SmpRowNote",
          children: null === xT.creator ? BT("smpShop:yourOrder") : BT("smpShop:youHave", {
            count: 0
          })
        })]
      })
    }

    function Ez() {
      var TT;
      const {
        t: oT
      } = (0, WT.t)(), IT = Iz(), zT = null === (TT = IT.shopInfo[IT.categoryKey]) || void 0 === TT ? void 0 : TT.items, kT = si(zT, "search"), XT = si(zT, "creator"), BT = li(zT, "order"), FT = si(zT, "empty"), DT = Wz(kT, BT.length > 0 || null !== FT), [LT, xT] = (0, iT.useState)(!1), [cT, KT] = (0, iT.useState)({});
      return (0, ST.jsx)(Sz, {
        browser: DT,
        recentLabel: oT("smpShop:recentOrders"),
        action: (0, ST.jsx)(MT.r, {
          onClick: () => {
            xT((TT => !TT))
          },
          children: oT("smpShop:createOrder")
        }),
        above: LT && (0, ST.jsx)(Az, {
          mode: "order",
          creator: XT,
          catalogue: DT.catalogue,
          names: DT.names,
          searching: DT.loading,
          prices: [],
          onPickItem: DT.searchFor,
          onClose: () => {
            xT(!1)
          }
        }),
        onBack: () => {
          xT(!1)
        },
        summary: BT.length > 0 && oT(1 === BT.length ? "smpShop:orderSummaryOne" : "smpShop:orderSummary", {
          count: BT.length,
          price: Ri(Dz(BT, "max"))
        }),
        list: DT.loading ? (0, ST.jsx)(Ci, {}) : BT.length > 0 ? (0, ST.jsx)(iz.d, {
          lazyLoadedClassName: "SmpList",
          observerRoot: "SmpBody",
          rootMargin: ti,
          observerUpdateDeps: [BT.length],
          children: BT.map((TT => (0, ST.jsx)(vz, {
            entry: TT,
            choice: Vi(TT.item, cT[TT.key]),
            onChoose: oT => {
              KT({
                ...cT,
                [TT.key]: oT
              })
            }
          }, TT.key)))
        }) : FT ? (0, ST.jsx)(Ji, {
          entry: FT
        }) : (0, ST.jsx)(Ci, {
          count: 3
        })
      })
    }

    function fz() {
      var TT;
      const {
        t: oT
      } = (0, WT.t)(), IT = Iz(), iT = li(null === (TT = IT.shopInfo[IT.categoryKey]) || void 0 === TT ? void 0 : TT.items, "myOrder");
      return 0 === iT.length ? (0, ST.jsx)("div", {
        className: "SmpScreen",
        children: (0, ST.jsx)(ji, {
          title: oT("smpShop:noOrders"),
          children: oT("smpShop:noOrdersHint")
        })
      }) : (0, ST.jsx)("div", {
        className: "SmpScreen",
        children: (0, ST.jsx)("div", {
          className: "SmpList",
          children: iT.map((TT => {
            let {
              key: iT,
              item: zT,
              meta: kT
            } = TT;
            const WT = IT.isPending(iT) || !1 === zT.canBuy;
            return (0, ST.jsxs)("div", {
              className: "SmpRow",
              children: [(0, ST.jsx)(Ei, {
                item: kT.item,
                amount: kT.collectable
              }), (0, ST.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, ST.jsx)("b", {
                  children: (0, ST.jsx)(Ki.c, {
                    text: zT.customTitle
                  })
                }), (0, ST.jsxs)("small", {
                  children: [(0, ST.jsx)(fi, {
                    amount: kT.pricePerItem
                  }), " ", oT("smpShop:each"), kT.collectable > 0 && ` \xb7 ${oT("smpShop:readyCount",{count:kT.collectable})}`]
                }), (0, ST.jsx)(uz, {
                  done: kT.delivered,
                  of: kT.wanted
                })]
              }), kT.collectable > 0 ? (0, ST.jsx)(MT.m, {
                loading: WT,
                onClick: () => {
                  IT.act(iT)
                },
                children: oT("smpShop:collectCount", {
                  count: kT.collectable
                })
              }) : (0, ST.jsx)(MT.C, {
                loading: WT,
                onClick: () => {
                  IT.act(iT)
                },
                children: oT("smpShop:cancel")
              })]
            }, iT)
          }))
        })
      })
    }
    const Cz = new Set(["search", "creator", "enchantedCreator", "collect", "myOrder", "order"]),
      jz = {
        sell: "coins",
        market: "store",
        collect: "backpack",
        orders: "file-clipboard",
        myOrders: "location-check"
      };

    function Jz(TT, oT) {
      let IT = !1;
      const iT = {};
      for (const zT in TT) oT(zT, TT[zT]) ? iT[zT] = TT[zT] : IT = !0;
      return IT ? iT : TT
    }

    function Uz(TT) {
      var oT, IT, zT, BT;
      const {
        show: FT,
        shopInfo: DT,
        selectedCategoryKey: LT
      } = TT, {
        t: xT
      } = (0, WT.t)(), cT = null !== LT && void 0 !== LT ? LT : "", KT = Zi(DT, cT), MT = null === (oT = DT[cT]) || void 0 === oT ? void 0 : oT.items, rT = null !== KT, [AT, gT] = (0, iT.useState)({}), [hT, wT] = (0, iT.useState)([]), [mT, eT] = (0, iT.useState)(!1), [RT, uT] = (0, iT.useState)(null), [, vT] = (0, iT.useState)(0), ET = (0, iT.useRef)(0), fT = (0, iT.useRef)({}), CT = (0, iT.useRef)({
        items: MT,
        pending: AT,
        shopInfo: DT,
        active: rT,
        canAfford: TT.canAfford,
        buy: TT.buy
      });
      CT.current = {
        items: MT,
        pending: AT,
        shopInfo: DT,
        active: rT,
        canAfford: TT.canAfford,
        buy: TT.buy
      };
      const jT = (0, iT.useCallback)((TT => {
        ET.current++;
        const oT = ET.current;
        wT((IT => [{
          id: oT,
          text: TT
        }, ...IT].slice(0, 8))), uT(oT)
      }), []);
      (0, iT.useEffect)((() => {
        if (null === RT) return;
        const TT = setTimeout((() => {
          uT(null)
        }), 3e3);
        return () => {
          clearTimeout(TT)
        }
      }), [RT]), (0, iT.useEffect)((() => {
        const oT = TT.message;
        if (!oT) return;
        const {
          shopInfo: IT,
          active: iT,
          items: zT
        } = CT.current, kT = null !== oT.categoryKey ? null !== Zi(IT, oT.categoryKey) : iT;
        (kT || iT) && jT(oT.text), kT && gT((TT => Jz(TT, (TT => {
          var oT, IT;
          return !Cz.has(null === zT || void 0 === zT || null === (oT = zT[TT]) || void 0 === oT || null === (IT = oT.smp) || void 0 === IT ? void 0 : IT.kind)
        }))))
      }), [TT.message, jT]), (0, iT.useEffect)((() => {
        gT((TT => Jz(TT, ((TT, oT) => Tz(null === MT || void 0 === MT ? void 0 : MT[TT]) === oT.snapshot))))
      }), [DT, MT]);
      const JT = Object.keys(AT).length > 0;
      (0, iT.useEffect)((() => {
        if (!JT) return;
        const TT = setInterval((() => {
          vT((TT => TT + 1));
          const TT = Date.now(),
            {
              pending: oT,
              items: IT
            } = CT.current,
            iT = Object.keys(oT).filter((IT => TT - oT[IT].at >= 12e3));
          if (0 === iT.length) return;
          const zT = iT.some((TT => {
            var iT, zT;
            return "search" !== (null === IT || void 0 === IT || null === (iT = IT[TT]) || void 0 === iT || null === (zT = iT.smp) || void 0 === zT ? void 0 : zT.kind) || oT[TT].resend
          }));
          for (const kT of iT) fT.current[kT] = TT;
          gT((TT => Jz(TT, (TT => !iT.includes(TT))))), zT && jT(xT("smpShop:noAnswer"))
        }), 500);
        return () => {
          clearInterval(TT)
        }
      }), [JT]), (0, iT.useEffect)((() => {
        gT({})
      }), [cT]), (0, iT.useEffect)((() => {
        FT || eT(!1)
      }), [FT]);
      const UT = (0, iT.useCallback)((function(TT, oT) {
          let IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            items: iT,
            pending: zT,
            canAfford: kT,
            buy: WT
          } = CT.current, XT = null === iT || void 0 === iT ? void 0 : iT[TT];
          if (!XT || TT in zT || !1 === XT.canBuy) return !1;
          if (!kT(XT, (0, Di.e)(XT, oT))) return !1;
          WT(TT, XT, oT);
          const BT = {
            snapshot: Tz(XT),
            at: Date.now(),
            resend: IT
          };
          return CT.current.pending = {
            ...CT.current.pending,
            [TT]: BT
          }, gT((oT => ({
            ...oT,
            [TT]: BT
          }))), !0
        }), []),
        aT = (0, iT.useMemo)((() => ({
          shopInfo: DT,
          categoryKey: cT,
          canAfford: TT.canAfford,
          isPending: TT => TT in AT,
          gaveUpAt: TT => {
            var oT;
            return null !== (oT = fT.current[TT]) && void 0 !== oT ? oT : 0
          },
          act: UT,
          notify: jT
        })), [DT, cT, TT.canAfford, AT, UT, jT]),
        YT = Math.min(...Object.values(AT).map((TT => TT.at))),
        QT = JT && Date.now() - YT > 1500,
        OT = hT.length > 1,
        HT = null !== (IT = null === (zT = DT[cT]) || void 0 === zT ? void 0 : zT.customTitle) && void 0 !== IT ? IT : cT,
        nT = null === (BT = DT[cT]) || void 0 === BT ? void 0 : BT.description;
      let qT = null;
      return "market" === KT ? qT = (0, ST.jsx)(gz, {}) : "sell" === KT ? qT = (0, ST.jsx)(mz, {}) : "collect" === KT ? qT = (0, ST.jsx)(Rz, {}) : "orders" === KT ? qT = (0, ST.jsx)(Ez, {}) : "myOrders" === KT && (qT = (0, ST.jsx)(fz, {})), (0, ST.jsx)(oz.Provider, {
        value: aT,
        children: (0, ST.jsx)("div", {
          className: "SmpShopHost",
          hidden: !rT,
          children: (0, ST.jsxs)("div", {
            className: "SmpShop",
            children: [(0, ST.jsx)("header", {
              className: "SmpHeader",
              children: (0, ST.jsxs)("div", {
                className: "SmpHeaderTitle",
                children: [(0, ST.jsxs)("h2", {
                  children: [KT && (0, ST.jsx)(XT.e, {
                    name: jz[KT]
                  }), xT(HT)]
                }), nT && (0, ST.jsx)("p", {
                  children: (0, ST.jsx)(Ki.c, {
                    text: nT
                  })
                })]
              })
            }), (0, ST.jsx)("main", {
              className: "SmpBody",
              "data-pad-initial-area": !0,
              children: FT && qT
            }), (0, ST.jsxs)("button", {
              type: "button",
              className: kT()("SmpStatus", {
                SmpStatusWaiting: JT,
                SmpStatusFresh: !JT && null !== RT,
                SmpStatusHasHistory: OT
              }),
              "aria-live": "polite",
              "aria-expanded": OT ? mT : void 0,
              onClick: () => {
                OT && eT((TT => !TT))
              },
              children: [JT ? (0, ST.jsxs)("span", {
                className: "SmpStatusText",
                children: [(0, ST.jsx)(ai, {}), xT(QT ? "smpShop:slowConnection" : "smpShop:waiting")]
              }) : hT[0] ? (0, ST.jsx)("span", {
                className: "SmpStatusText",
                children: (0, ST.jsx)(Ki.c, {
                  text: hT[0].text
                })
              }, hT[0].id) : (0, ST.jsx)("span", {
                className: "SmpStatusText SmpMuted",
                children: xT("smpShop:ready")
              }), OT && (0, ST.jsx)("small", {
                children: xT("smpShop:recentMessages", {
                  count: hT.length
                })
              })]
            }), mT && OT && (0, ST.jsx)("div", {
              className: "SmpStatusHistory",
              children: hT.map((TT => (0, ST.jsx)("div", {
                children: (0, ST.jsx)(Ki.c, {
                  text: TT.text
                })
              }, TT.id)))
            })]
          })
        })
      })
    }
    class az {
      constructor(TT) {
        this.info = TT
      }
      static fromShopInfo(TT) {
        const oT = {};
        for (const IT in TT) {
          const iT = !0 === TT[IT].redDot && !0 !== TT[IT].forceRemoveRedDot;
          oT[IT] = {
            redDot: iT,
            items: {}
          };
          for (const zT in TT[IT].items) {
            const iT = TT[IT].items[zT],
              kT = !0 === iT.redDot && !0 !== iT.forceRemoveRedDot;
            oT[IT].items[zT] = {
              redDot: kT
            }
          }
        }
        return new az(oT)
      }
      anyCategoryHasRedDots() {
        for (const TT in this.info)
          if (this.categoryHasRedDot(TT)) return !0;
        return !1
      }
      doesCategoryExist(TT) {
        return !(0, fo.K)(this.info[TT])
      }
      categoryHasRedDot(TT) {
        return !0 === this.info[TT].redDot
      }
      updateCategoryRedDot(TT, oT) {
        this.info[TT].redDot = oT
      }
      doesItemExist(TT, oT) {
        return this.doesCategoryExist(TT) && !(0, fo.K)(this.info[TT].items[oT])
      }
      itemHasRedDot(TT, oT) {
        return !0 === this.info[TT].items[oT].redDot
      }
      updateItemRedDot(TT, oT, IT) {
        this.info[TT].items[oT].redDot = IT
      }
      shallowCopy() {
        return new az(this.info)
      }
    }

    function Yz(TT, oT) {
      return `${TT}\x1f${oT}`
    }

    function Qz(TT, oT) {
      return !(0, fo.K)(oT) && !(0, fo.K)(TT) && oT in TT
    }
    const Oz = (0, iT.memo)((function(TT) {
      var oT, IT;
      let {
        show: zT
      } = TT;
      const WT = (0, HI.d)("players", sz),
        XT = (0, HI.d)("players", tz),
        [FT, LT] = (0, iT.useState)({
          shopInfo: {},
          userInputsPerItem: {},
          redDotInfo: az.fromShopInfo({}),
          currencyAmounts: {},
          selectedCategoryKey: null,
          onBoughtInfo: null,
          awaitingPurchase: !1
        }),
        xT = (0, iT.useRef)(""),
        KT = (0, iT.useRef)(null),
        rT = (0, iT.useRef)(null),
        gT = (0, iT.useRef)(0),
        hT = (0, iT.useRef)(void 0),
        wT = (0, iT.useRef)(null),
        mT = (0, iT.useRef)(FT),
        eT = FT.redDotInfo.anyCategoryHasRedDots(),
        [uT, vT] = (0, iT.useState)(null),
        fT = (0, iT.useRef)(!1);
      let CT = !1,
        jT = 0,
        JT = 0;
      if (FT.currencyAmounts) {
        for (const TT in FT.currencyAmounts) {
          var UT;
          const oT = FT.currencyAmounts[TT];
          oT.hidden || (jT++, (null === (UT = oT.subtext) || void 0 === UT ? void 0 : UT.length) > 0 && JT++)
        }
        CT = jT + JT > 4
      }(0, iT.useEffect)((() => {
        Co.h.XM("showShopIconRedDot", eT, !0)
      }), [eT]), (0, iT.useEffect)((() => {
        AT.gameBridge.send("setShopOpen", zT), zT || (clearTimeout(hT.current), LT((TT => TT.awaitingPurchase ? {
          ...TT,
          awaitingPurchase: !1
        } : TT)))
      }), [zT]), (0, iT.useEffect)((() => () => {
        AT.gameBridge.send("setShopOpen", !1), clearTimeout(hT.current)
      }), []), (0, iT.useEffect)((() => {
        mT.current = FT
      }), [FT]), (0, iT.useEffect)((() => {
        if (null === uT) return;
        return (0, gi.e)("pointerdown", (TT => {
          const oT = TT.target;
          null !== oT && void 0 !== oT && oT.closest(".ShopItem") || vT(null)
        }))
      }), [uT]);
      const aT = TT => {
          LT((oT => ({
            ...oT,
            ...TT
          })))
        },
        YT = TT => {
          var oT;
          clearTimeout(null === (oT = FT.onBoughtInfo) || void 0 === oT ? void 0 : oT.timeout);
          const IT = setTimeout((() => {
            aT({
              onBoughtInfo: null
            })
          }), 3e3);
          xT.current = TT, aT({
            onBoughtInfo: {
              text: TT,
              timeout: IT,
              categoryKey: KT.current
            }
          })
        },
        QT = TT => {
          const {
            shopInfo: oT,
            userInputsPerItem: IT,
            redDotInfo: iT,
            autoSelectCategory: kT
          } = function(TT, oT, IT, iT, zT, kT) {
            if ((0, fo.K)(TT) || 0 === Object.keys(TT).length) return {
              shopInfo: {},
              userInputsPerItem: {},
              redDotInfo: az.fromShopInfo({}),
              autoSelectCategory: null
            };
            const WT = ET.k[ET.p].adConfig.showRewardedAds,
              XT = {};
            let BT = null;
            for (const MT in TT) {
              const oT = TT[MT],
                IT = {};
              let iT = !1;
              for (const TT in oT.items) {
                const zT = oT.items[TT];
                (0, Di.k)(zT, WT) && (IT[TT] = zT, iT = !0)
              }
              iT && (XT[MT] = {
                ...oT,
                items: IT
              }, !0 === oT.autoSelectCategory && (BT = MT))
            }
            const FT = {},
              ST = (TT, oT, iT, WT) => {
                var XT, BT;
                const ST = Yz(TT, oT),
                  DT = null !== (XT = IT[ST]) && void 0 !== XT ? XT : IT[oT];
                if (null !== (BT = WT.userInput) && void 0 !== BT && BT.type) switch (WT.userInput.type) {
                  case "dropdown": {
                    var LT;
                    const TT = !DT || !WT.userInput.dropdownOptions.some((TT => (0, Di.f)(TT) === DT)),
                      oT = WT.userInput.shouldResetSelectionOnOptionsChange && ("dropdown" !== (null === iT || void 0 === iT || null === (LT = iT.userInput) || void 0 === LT ? void 0 : LT.type) || JSON.stringify(iT.userInput.dropdownOptions) !== JSON.stringify(WT.userInput.dropdownOptions)),
                      IT = WT.userInput,
                      zT = !(0, fo.K)(IT.initialValue) && IT.dropdownOptions.some((TT => (0, Di.f)(TT) === IT.initialValue));
                    var xT;
                    return void(TT || oT ? zT ? FT[ST] = null !== (xT = WT.userInput.initialValue) && void 0 !== xT ? xT : null : WT.userInput.dropdownOptions.length > 0 ? FT[ST] = (0, Di.f)(WT.userInput.dropdownOptions[0]) : FT[ST] = null : FT[ST] = DT)
                  }
                  case "text":
                  case "number":
                    var cT, KT, MT;
                    return void((null === iT || void 0 === iT ? void 0 : iT.userInput) !== WT.userInput ? FT[ST] = null !== (cT = null !== (KT = WT.userInput.initialValue) && void 0 !== KT ? KT : DT) && void 0 !== cT ? cT : "" : FT[ST] = null !== (MT = null !== DT && void 0 !== DT ? DT : WT.userInput.initialValue) && void 0 !== MT ? MT : "");
                  case "color":
                    var rT, AT, gT;
                    return void((null === iT || void 0 === iT ? void 0 : iT.userInput) !== WT.userInput ? FT[ST] = null !== (rT = null !== (AT = WT.userInput.initialValue) && void 0 !== AT ? AT : DT) && void 0 !== rT ? rT : "#000000" : FT[ST] = null !== (gT = null !== DT && void 0 !== DT ? DT : WT.userInput.initialValue) && void 0 !== gT ? gT : "#000000");
                  case "player": {
                    const TT = (0, Di.j)(zT, kT, WT.userInput);
                    return void(DT && TT.includes(DT) ? FT[ST] = DT : FT[ST] = TT.length > 0 ? TT[0] : null)
                  }
                }
              };
            for (const MT in XT)
              for (const TT in XT[MT].items) {
                var DT;
                const IT = XT[MT].items[TT];
                ST(MT, TT, null === (DT = oT[MT]) || void 0 === DT ? void 0 : DT.items[TT], IT)
              }
            const LT = az.fromShopInfo(XT);
            for (const MT in XT) {
              var xT;
              if (iT.doesCategoryExist(MT)) {
                (null === (xT = oT[MT]) || void 0 === xT ? void 0 : xT.redDot) === XT[MT].redDot && LT.updateCategoryRedDot(MT, iT.categoryHasRedDot(MT));
                for (const TT in XT[MT].items) {
                  var cT, KT;
                  iT.doesItemExist(MT, TT) && (null === (cT = oT[MT]) || void 0 === cT || null === (KT = cT.items[TT]) || void 0 === KT ? void 0 : KT.redDot) === XT[MT].items[TT].redDot && LT.updateItemRedDot(MT, TT, iT.itemHasRedDot(MT, TT))
                }
              }
            }
            return {
              shopInfo: XT,
              userInputsPerItem: FT,
              redDotInfo: LT,
              autoSelectCategory: BT
            }
          }(TT, FT.shopInfo, FT.userInputsPerItem, FT.redDotInfo, WT, XT), BT = {
            shopInfo: oT,
            userInputsPerItem: IT,
            redDotInfo: iT
          };
          if (null === kT || zT)
            if (oT[FT.selectedCategoryKey]) BT.selectedCategoryKey = FT.selectedCategoryKey;
            else {
              const TT = mi(oT);
              BT.selectedCategoryKey = TT.length > 0 ? TT[0] : null
            }
          else BT.selectedCategoryKey = kT;
          return 0 === Object.keys(oT).length && zT && RT.c.set({
            openEverythingMenuName: null
          }), BT
        },
        OT = (TT, oT, IT) => {
          const iT = FT.selectedCategoryKey,
            zT = Yz(iT, TT),
            kT = null !== IT && void 0 !== IT ? IT : FT.userInputsPerItem[zT],
            WT = {
              categoryKey: iT,
              itemKey: TT,
              userInput: kT
            };
          if (KT.current = iT, oT.isRewardedAd) {
            if (Date.now() - gT.current < 5e3) return;
            (0, dT.ab)((() => {
              var IT, iT, kT;
              console.log("bought rewarded ad");
              const XT = WT.categoryKey ? null === (IT = mT.current.shopInfo[WT.categoryKey]) || void 0 === IT ? void 0 : IT.items[TT] : null;
              if (!XT || !XT.isRewardedAd) return void console.warn("Shop item no longer valid or a rewarded ad, early out");
              (null === (iT = oT.userInput) || void 0 === iT ? void 0 : iT.type) === (null === XT || void 0 === XT || null === (kT = XT.userInput) || void 0 === kT ? void 0 : kT.type) ? (WT.userInput = mT.current.userInputsPerItem[zT], AT.gameBridge.send("buyShopItem", WT), oT.onBoughtMessage && YT(oT.onBoughtMessage)) : console.warn("Shop item input type changed, early out")
            })), gT.current = Date.now()
          } else {
            AT.gameBridge.send("buyShopItem", WT), aT({
              awaitingPurchase: !0
            }), clearTimeout(hT.current), hT.current = setTimeout((() => {
              wT.current = null, aT({
                awaitingPurchase: !1
              })
            }), 1e3);
            const TT = (0, Di.e)(oT, kT);
            if (wT.current = null, !isNaN(TT) && Qz(FT.currencyAmounts, oT.currency)) {
              0 !== TT && (wT.current = {
                currency: oT.currency,
                amountBefore: FT.currencyAmounts[oT.currency].amount
              });
              const IT = {
                ...FT.currencyAmounts
              };
              IT[oT.currency].amount -= TT, aT({
                currencyAmounts: IT
              })
            }
            oT.onBoughtMessage && YT(oT.onBoughtMessage)
          }
        },
        nT = (TT, oT) => {
          if (null === oT || !TT.shopInfo[oT]) return TT;
          let IT = TT.redDotInfo;
          return IT.categoryHasRedDot(oT) && (IT.updateCategoryRedDot(oT, !1), IT = IT.shallowCopy()), {
            ...TT,
            selectedCategoryKey: oT,
            redDotInfo: IT
          }
        },
        qT = TT => {
          LT((oT => nT(oT, TT)))
        };
      (0, co.g)(wi.k, (() => {
        LT((TT => {
          const oT = (0, wi.l)(mi(TT.shopInfo), TT.selectedCategoryKey, (oT => (0, wi.g)(TT.shopInfo[oT].items)));
          return oT === TT.selectedCategoryKey ? TT : nT(TT, oT)
        }))
      })), (0, co.g)("showShopFromServer", (TT => {
        let {
          toggle: oT,
          gI: IT
        } = TT;
        IT && qT(IT), 0 === Object.keys(FT.shopInfo).length || oT && zT ? RT.c.set({
          openEverythingMenuName: null
        }) : RT.c.set({
          openEverythingMenuName: sI.q.SHOP
        })
      })), (0, co.g)("closeShopOnDamaged", (() => {
        zT && RT.c.set({
          openEverythingMenuName: null
        })
      })), (0, co.g)("overShopInfo", (TT => {
        YT(TT)
      })), (0, cT.e)("currencyAmounts", (TT => {
        var oT;
        const IT = wT.current;
        IT && (null === TT || void 0 === TT || null === (oT = TT[IT.currency]) || void 0 === oT ? void 0 : oT.amount) === IT.amountBefore ? aT({
          currencyAmounts: TT
        }) : (wT.current = null, aT({
          currencyAmounts: TT,
          awaitingPurchase: !1
        }))
      })), (0, cT.e)("shopInfo", (TT => {
        aT({
          ...QT(TT),
          awaitingPurchase: !1
        })
      }));
      const ZT = (0, iT.useRef)({
        playerIds: WT,
        localPlayerId: XT
      });
      (0, iT.useEffect)((() => {
        ZT.current.playerIds === WT && ZT.current.localPlayerId === XT || (ZT.current = {
          playerIds: WT,
          localPlayerId: XT
        }, LT((TT => {
          const oT = QT(TT.shopInfo);
          return {
            ...TT,
            ...oT
          }
        })))
      }), [WT, XT]);
      const lT = FT.selectedCategoryKey,
        sT = (TT, oT) => {
          var IT, iT;
          return (isNaN(oT) || (0, fo.K)(TT.currency) || Qz(FT.currencyAmounts, TT.currency) && oT <= FT.currencyAmounts[TT.currency].amount) && (null === (IT = TT.canBuy) || void 0 === IT || IT) && !(null !== (iT = TT.hidden) && void 0 !== iT && iT)
        },
        tT = (TT, oT) => {
          var IT, iT, zT;
          const WT = Yz(lT, TT),
            XT = FT.shopInfo[lT].items[TT],
            DT = FT.userInputsPerItem[WT],
            LT = (0, Di.e)(XT, DT),
            xT = sT(XT, LT),
            cT = XT.enchant,
            KT = cT ? (0, HT.ob)(null !== (IT = XT.customTitle) && void 0 !== IT ? IT : TT, {
              colour: HT.lb[cT.tier]
            }) : null !== (iT = XT.customTitle) && void 0 !== iT ? iT : TT,
            rT = oT => {
              const IT = null !== oT && void 0 !== oT ? oT : DT,
                iT = void 0 !== oT ? (0, Di.e)(XT, oT) : LT;
              sT(XT, iT) && null !== IT && OT(TT, XT, oT);
              let zT = FT.redDotInfo;
              zT.itemHasRedDot(lT, TT) && (zT.updateItemRedDot(lT, TT, !1), zT = zT.shallowCopy()), aT({
                redDotInfo: zT
              })
            };
          return (0, ST.jsxs)("div", {
            className: kT()("ShopItem", {
              ShopItemNoInput: !XT.userInput,
              ShopItemNoInputCanBuy: !XT.userInput && xT,
              ShopItemNoInputSelected: XT.isSelected,
              ShopItemEnchant: !!cT
            }),
            "data-pad-focusable": !XT.userInput || void 0,
            "data-pad-unavailable": !XT.userInput && !xT || void 0,
            "data-pad-repeat": null !== (zT = (0, wi.b)(XT)) && void 0 !== zT ? zT : void 0,
            "data-pad-repeat-wait": FT.awaitingPurchase || void 0,
            onClick: () => {
              if (cT && fT.current) {
                if (uT !== WT) return void vT(WT);
                vT(null)
              }
              XT.userInput || rT()
            },
            onPointerDown: TT => {
              cT && (fT.current = (0, xi.o)(TT))
            },
            onPointerEnter: TT => {
              cT && !(0, xi.o)(TT) && vT(WT)
            },
            onPointerLeave: TT => {
              cT && !(0, xi.o)(TT) && vT((TT => TT === WT ? null : TT))
            },
            style: {
              zIndex: Object.keys(FT.shopInfo[lT].items).length - oT
            },
            children: [FT.redDotInfo.itemHasRedDot(lT, TT) && (0, ST.jsx)(BT.d, {
              top: "-6px",
              right: "-6px"
            }), XT.badge && (0, ST.jsx)("div", {
              className: "ShopBadgeContainer",
              children: (0, ST.jsx)("div", {
                className: kT()("ShopBadgeMain", XT.badge.type),
                children: (0, ST.jsx)(Ki.c, {
                  text: XT.badge.text
                })
              })
            }), (0, ST.jsx)("div", {
              className: "ShopItemLeft",
              children: XT.image && (0, ST.jsx)(Hz, {
                item: XT,
                minWidth: 5,
                minHeight: 4.8
              })
            }), (0, ST.jsxs)("div", {
              className: "ShopItemRight",
              children: [(0, ST.jsxs)("div", {
                className: "ShopItemHeader",
                children: [(0, ST.jsx)("div", {
                  className: "ShopItemHeaderTitle",
                  children: (0, ST.jsx)(Ki.c, {
                    text: KT
                  })
                }), (0, ST.jsx)("div", {
                  className: "ShopItemHeaderDescription",
                  children: (0, ST.jsx)(Ki.c, {
                    text: XT.description
                  })
                })]
              }), XT.userInput && (0, ST.jsxs)("div", {
                className: "ShopItemInputsContainer",
                onClick: TT => {
                  TT.stopPropagation()
                },
                children: [(0, ST.jsx)(Zz, {
                  item: XT,
                  currInput: DT,
                  updateInput: oT => {
                    ((TT, oT, IT) => {
                      const iT = Yz(TT, oT),
                        zT = {
                          ...FT.userInputsPerItem
                        };
                      zT[iT] = IT, aT({
                        userInputsPerItem: zT
                      })
                    })(lT, TT, oT)
                  },
                  onSubmit: TT => {
                    rT(TT)
                  }
                }), ("dropdown" !== XT.userInput.type || !XT.userInput.autoSubmit) && (0, ST.jsx)(MT.e, {
                  className: "ItemCostButton",
                  disabled: !xT && null !== DT,
                  onClick: () => {
                    rT()
                  },
                  children: (0, ST.jsx)(qz, {
                    item: XT,
                    cost: LT,
                    currencyAmounts: FT.currencyAmounts
                  })
                })]
              })]
            }), !XT.userInput && (0, ST.jsx)("div", {
              className: "ShopItemNoInputCost",
              children: (0, ST.jsx)(qz, {
                item: XT,
                cost: LT,
                currencyAmounts: FT.currencyAmounts
              })
            }), cT && uT === WT && (0, ST.jsxs)("div", {
              className: "ShopItemEnchantInfo SmallTextBold",
              children: [(0, ST.jsx)(Ki.c, {
                text: KT
              }), (0, ST.jsx)("div", {
                className: "ShopItemEnchantInfoDescription",
                children: (0, ST.jsx)(Ki.c, {
                  text: (0, Li.e)("", cT.enchantments, cT.enchantmentData)
                })
              })]
            })]
          }, WT)
        },
        GT = function(TT) {
          for (const oT in TT)
            if (TT[oT].smp) return !0;
          return !1
        }(FT.shopInfo),
        pT = Zi(FT.shopInfo, lT);
      return (0, ST.jsx)(Bi.c, {
        className: "Menu ShopBody",
        show: zT,
        children: 0 !== Object.keys(FT.shopInfo).length && (0, ST.jsxs)(ST.Fragment, {
          children: [(0, ST.jsxs)("div", {
            className: "MenuSideBar",
            children: [(0, ST.jsx)(DT, {
              items: mi(FT.shopInfo).map((TT => {
                var oT;
                return {
                  id: TT,
                  title: null !== (oT = FT.shopInfo[TT].customTitle) && void 0 !== oT ? oT : TT,
                  redDot: FT.redDotInfo.categoryHasRedDot(TT)
                }
              })),
              selectedItemId: lT,
              onClick: qT,
              padStartsOnTab: (0, wi.f)(lT)
            }), (0, ST.jsx)("div", {
              className: "MenuSideBarFooter",
              children: FT.currencyAmounts && Object.keys(FT.currencyAmounts).map((TT => {
                var oT;
                const IT = FT.currencyAmounts[TT];
                return IT.hidden ? null : (0, ST.jsxs)("div", {
                  className: "ShopCurrencyDiv " + (CT ? "SmallText" : ""),
                  children: [(0, ST.jsxs)("div", {
                    className: "ShopCurrencyDetails",
                    children: [(0, ST.jsx)("div", {
                      className: "ShopCurrencyAmtIcon",
                      style: {
                        color: IT.iconColour
                      },
                      children: (0, ST.jsx)(Gz, {
                        iconName: IT.icon
                      })
                    }), "\xa0", (0, Si.c)(IT.amount, 6)]
                  }), (null === (oT = IT.subtext) || void 0 === oT ? void 0 : oT.length) > 0 && (0, ST.jsx)("div", {
                    className: "ShopCurrencySubtext",
                    children: (0, ST.jsx)(Ki.c, {
                      text: IT.subtext
                    })
                  })]
                }, TT)
              }))
            })]
          }), (0, ST.jsxs)("div", {
            className: "MenuBody ShopMenuBody",
            children: [GT && (0, ST.jsx)(Uz, {
              show: zT,
              shopInfo: FT.shopInfo,
              selectedCategoryKey: lT,
              buy: (TT, oT, IT) => {
                OT(TT, oT, IT)
              },
              canAfford: sT,
              message: FT.onBoughtInfo
            }), null === pT && (0, ST.jsxs)(ST.Fragment, {
              children: [(0, ST.jsx)("div", {
                className: kT()("ShopOnBoughtInfo", {
                  ShopOnBoughtInfoShow: null !== FT.onBoughtInfo
                }),
                children: (0, ST.jsx)(Ki.c, {
                  text: xT.current
                })
              }), (0, ST.jsx)("div", {
                className: "ShopItemsWrapper",
                children: (0, ST.jsxs)("div", {
                  className: "ShopItemsInner",
                  children: [(null === (oT = FT.shopInfo[lT]) || void 0 === oT ? void 0 : oT.description) && (0, ST.jsx)("div", {
                    className: "ShopCategoryDescription",
                    children: (0, ST.jsx)(Ki.c, {
                      text: FT.shopInfo[lT].description
                    })
                  }), zT && (0, ST.jsx)("div", {
                    className: "ShopItems",
                    ref: rT,
                    "data-pad-initial-area": !0,
                    children: mi(null === (IT = FT.shopInfo[lT]) || void 0 === IT ? void 0 : IT.items).map(((TT, oT) => tT(TT, oT)))
                  })]
                })
              })]
            })]
          })]
        })
      })
    }));

    function Hz(TT) {
      let {
        item: oT,
        minWidth: IT,
        minHeight: iT
      } = TT;
      const {
        image: zT,
        schematicId: kT,
        imageColour: WT
      } = oT;
      if (kT) return (0, ST.jsx)("div", {
        className: "ShopSchematic",
        style: {
          width: `${IT}rem`,
          height: `${iT}rem`
        },
        children: (0, ST.jsx)(Mi.e, {
          game: {
            schematicId: kT
          }
        })
      });
      var BT, FT;
      if ((0, ci.g)(zT)) return (0, ST.jsx)("div", {
        className: "ShopBlock",
        style: {
          minWidth: `${IT}rem`,
          height: "0",
          minHeight: `${iT}rem`
        },
        children: (0, ST.jsx)(ci.c, {
          itemName: zT,
          amount: null !== (BT = oT.amount) && void 0 !== BT ? BT : 0,
          amountFontSize: iT / 4 + "rem",
          enchantmentTier: null === (FT = oT.enchant) || void 0 === FT ? void 0 : FT.tier
        })
      });
      const DT = zT.slice(-4);
      return ".jpg" === DT || ".png" === DT ? (0, ST.jsx)(nz, {
        image: zT,
        minWidth: IT
      }) : (0, ST.jsx)(XT.e, {
        name: zT,
        className: "SelectedItemImage",
        style: {
          color: WT
        }
      })
    }

    function nz(TT) {
      let {
        image: oT,
        minWidth: IT
      } = TT;
      const {
        gameNameWithVariation: iT
      } = (0, HI.f)("connectedGame"), zT = oT.endsWith(".jpg");
      return (0, ST.jsx)("img", {
        className: kT()({
          ShopPixelImage: !zT
        }),
        style: {
          width: `${zT?1.6*IT:IT}rem`,
          height: "auto",
          fontSize: "1.25rem"
        },
        src: `/textures/games/${(0,HT.Ib)(iT)}/${oT}`,
        alt: oT,
        draggable: !1
      })
    }

    function qz(TT) {
      let {
        item: oT,
        cost: IT,
        currencyAmounts: iT
      } = TT;
      const zT = !isNaN(IT) && 0 !== IT && Qz(iT, oT.currency);
      let kT = null;
      return oT.buyButtonText ? kT = oT.buyButtonText : zT ? (kT = IT, oT.sell && (kT = -1 * IT), kT = kT.toString()) : 0 === IT ? kT = "Free" : oT.isRewardedAd && (kT = "Watch ad"), (0, fo.K)(kT) || " " === kT ? null : (0, ST.jsxs)("div", {
        className: "BuyItemCostAndIcon",
        children: [zT && (0, ST.jsx)("div", {
          style: {
            color: iT[oT.currency].iconColour
          },
          className: "BuyItemIcon",
          children: (0, ST.jsx)(Gz, {
            iconName: iT[oT.currency].icon
          })
        }), (0, ST.jsx)("div", {
          className: "BuyItemCost",
          children: (0, ST.jsx)(Ki.c, {
            text: kT
          })
        })]
      })
    }

    function Zz(TT) {
      let {
        item: oT,
        currInput: IT,
        updateInput: zT,
        onSubmit: kT
      } = TT;
      const {
        t: XT
      } = (0, WT.t)(), BT = (0, iT.useRef)(null);
      if ((0, iT.useEffect)((() => {
          const TT = BT.current;
          TT && TT.value !== IT && document.activeElement !== TT && (TT.value = null !== IT && void 0 !== IT ? IT : "")
        }), [IT]), !oT.userInput) return null;
      let FT = oT.userInput;
      if (rT.featureFlags.sanitizeShopInput && "text" === oT.userInput.type && (FT = {
          type: "number",
          placeholderText: "Numbers Only"
        }), "text" === FT.type || "number" === FT.type) {
        var DT, LT;
        console.assert(void 0 !== IT, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(oT)}`);
        const TT = "text" === FT.type && FT.wordCharsOnly;
        return (0, ST.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputTextWrapper",
          children: (0, ST.jsx)(wT.e, {
            className: "ShopItemUserInputText",
            placeholderText: XT(FT.placeholderText),
            defaultValue: IT,
            domRef: BT,
            onValueChange: (oT, IT) => {
              !0 === TT && (oT = (0, Ai.ob)(oT)), BT.current.value = oT, zT(oT)
            },
            onEnter: kT,
            type: FT.type
          }, (null !== (DT = FT.initialValue) && void 0 !== DT ? DT : "") + (null !== (LT = FT.placeholderText) && void 0 !== LT ? LT : ""))
        })
      }
      if ("dropdown" === FT.type) {
        console.assert(void 0 !== IT, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(oT)}`);
        const TT = FT.autoSubmit;
        return (0, ST.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputDropdown",
          children: (0, ST.jsx)(Bo.d, {
            options: FT.dropdownOptions.map((TT => (0, Di.f)(TT))),
            value: IT,
            onChange: oT => {
              let {
                value: IT
              } = oT;
              zT(IT), TT && kT(IT)
            }
          })
        })
      }
      return "player" === FT.type ? (0, ST.jsx)(lz, {
        userInput: FT,
        currInput: IT,
        updateInput: zT
      }) : "color" === FT.type ? (0, ST.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputColor",
        children: (0, ST.jsx)("input", {
          type: "color",
          value: IT,
          onChange: TT => {
            zT(TT.target.value)
          }
        })
      }) : null
    }

    function lz(TT) {
      let {
        userInput: oT,
        currInput: IT,
        updateInput: iT
      } = TT;
      const zT = (0, HI.f)("players"),
        kT = (0, HI.f)("hiddenPlayerNames"),
        WT = (0, Di.j)(zT.ids, zT.localId, oT);
      return (0, ST.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputDropdown",
        children: (0, ST.jsx)(Bo.d, {
          options: WT.map((TT => {
            const {
              name: oT
            } = zT.byId[TT];
            return {
              value: TT,
              label: null === oT ? "" : (0, ri.f)(oT, kT)
            }
          })),
          value: IT,
          onChange: TT => {
            let {
              value: oT
            } = TT;
            iT(oT)
          }
        })
      })
    }

    function sz(TT) {
      let {
        ids: oT
      } = TT;
      return oT
    }

    function tz(TT) {
      let {
        localId: oT
      } = TT;
      return oT
    }

    function Gz(TT) {
      let {
        iconName: oT
      } = TT;
      return AT.gameBridge.lookup("isItemName", oT) ? (0, ST.jsx)(ci.c, {
        itemName: oT,
        amount: 1
      }) : (0, ST.jsx)(XT.e, {
        name: oT,
        className: "2x"
      })
    }
    var pz = IT(1585);
    const bz = (0, IT(1365).f)((TT => TT.PadLobbyShortcuts)),
      yz = (0, iT.lazy)((() => Promise.resolve().then((() => IT(4163))).then((TT => ({
        default: TT.Lobbyleaderboard
      })))));

    function Nz(TT) {
      let {
        show: oT
      } = TT;
      return oT ? (0, ST.jsxs)(ST.Fragment, {
        children: [(0, ST.jsx)(bz, {}), (0, ST.jsx)(iT.Suspense, {
          fallback: (0, ST.jsx)("div", {
            className: "CharacterCustomisationLoading",
            children: (0, ST.jsx)(mT.d, {})
          }),
          children: (0, ST.jsx)(yz, {})
        })]
      }) : null
    }
    var Pz = IT(1509),
      dz = IT(2624),
      Vz = IT(1665),
      Tk = IT(2386),
      Ik = IT(1444),
      ik = IT(1412),
      zk = IT(2603),
      kk = IT(1938),
      Wk = IT(2620),
      Xk = IT(2145);
    const Bk = "storeRecentGiftRecipients",
      Fk = new Map;

    function Sk() {
      try {
        const TT = Jo.e.getItem(Bk);
        return Array.isArray(TT) ? TT.filter((TT => "string" === typeof(null === TT || void 0 === TT ? void 0 : TT.name) && TT.name.length > 0)).map((TT => ({
          name: TT.name,
          cosmetics: TT.cosmetics && "object" === typeof TT.cosmetics ? TT.cosmetics : null
        }))) : []
      } catch {
        return []
      }
    }

    function Dk(TT) {
      var oT;
      const [IT, zT] = (0, iT.useState)(""), [kT, WT] = (0, iT.useState)("search"), [XT, BT] = (0, iT.useState)(null), [FT, ST] = (0, iT.useState)(null), DT = (0, iT.useRef)(null), LT = (0, iT.useRef)(null);
      (0, iT.useEffect)((() => () => {
        DT.current && clearTimeout(DT.current)
      }), []);
      const xT = null !== (oT = null === XT || void 0 === XT ? void 0 : XT.name) && void 0 !== oT ? oT : null;

      function cT() {
        DT.current && (clearTimeout(DT.current), DT.current = null)
      }(0, iT.useEffect)((() => {
        if (null === xT || TT === fT.NULL_USER_CONTEXT) return;
        const oT = xT.toLowerCase();
        if (oT === TT.getPlayerName().toLowerCase()) return void ST({
          name: xT,
          result: {
            giftRecipientFound: !1,
            giftRecipientError: "store:giftRecipientIsYou"
          }
        });
        const IT = Fk.get(oT);
        if (IT) return void ST({
          name: xT,
          result: IT
        });
        let iT = !1;
        return async function(TT, oT) {
          try {
            const IT = await (0, fT.postJsonWithMetricsCookiesAndJsonResponse)(`${CT.clientSideServerUrls.indexUrl}/index/store/gift-recipient`, {
              giftRecipientName: oT
            }, {
              retries: 1
            }, TT.getMetricsCookies());
            if ("boolean" !== typeof(null === IT || void 0 === IT ? void 0 : IT.giftRecipientFound)) throw new Error(`Unexpected gift recipient lookup response: ${JSON.stringify(IT)}`);
            return IT
          } catch (IT) {
            return console.error("Failed to look up gift recipient:", IT), {
              giftRecipientFound: !1,
              giftRecipientError: "store:giftRecipientLookupFailed"
            }
          }
        }(TT, xT).catch((TT => (console.error("Gift recipient lookup failed:", TT), {
          giftRecipientFound: !1,
          giftRecipientError: "store:giftRecipientLookupFailed"
        }))).then((TT => {
          !0 !== TT.giftRecipientFound && "store:giftRecipientLookupFailed" === TT.giftRecipientError || Fk.set(oT, TT), iT || ST({
            name: xT,
            result: TT
          })
        })), () => {
          iT = !0
        }
      }), [xT, TT]);
      const KT = (0, iT.useMemo)((() => {
        const TT = IT.trim();
        if (!TT) return {
          status: "none"
        };
        if (!XT || XT.name !== TT || (null === FT || void 0 === FT ? void 0 : FT.name) !== XT.name) return {
          status: "pending",
          name: TT
        };
        const oT = FT.result;
        return !1 === oT.giftRecipientFound ? {
          status: "error",
          name: XT.name,
          error: oT.giftRecipientError
        } : {
          status: "found",
          name: oT.giftRecipientName,
          ownedPacks: oT.giftRecipientOwnedPacks,
          hasSuperRank: oT.giftRecipientHasSuperRank
        }
      }), [IT, XT, FT]);
      (0, iT.useEffect)((() => {
        "found" === KT.status && "typed" === (null === XT || void 0 === XT ? void 0 : XT.source) && LT.current !== KT.name && (LT.current = KT.name, (0, tT.reportAnalyticsClick)({
          id: "store.gift_recipient",
          value: "typed"
        }))
      }), [KT, XT]);
      const MT = (null === FT || void 0 === FT ? void 0 : FT.name) === (null === XT || void 0 === XT ? void 0 : XT.name) ? null === FT || void 0 === FT ? void 0 : FT.result : null,
        rT = !0 === (null === MT || void 0 === MT ? void 0 : MT.giftRecipientFound) ? MT.giftRecipientCosmetics : null;
      return {
        query: IT,
        via: kT,
        recipient: KT,
        recipientCosmetics: rT,
        type: function(TT) {
          zT(TT), WT("search"), cT();
          const oT = TT.trim();
          oT ? DT.current = setTimeout((() => {
            BT({
              name: oT,
              source: "typed"
            })
          }), 400) : BT(null)
        },
        choose: function(TT, oT) {
          cT(), zT(TT), WT("typed" === oT ? "search" : "prefilled" === oT ? "prefilled" : "suggestion"), BT({
            name: TT,
            source: oT
          }), "typed" !== oT && "prefilled" !== oT && (0, tT.reportAnalyticsClick)({
            id: "store.gift_recipient",
            value: oT
          })
        },
        clear: function() {
          cT(), zT(""), WT("search"), BT(null)
        },
        recordGift: function(TT, oT) {
          ! function(TT) {
            Fk.delete(TT.toLowerCase())
          }(TT), ST((IT => {
            if (!IT || IT.name.toLowerCase() !== TT.toLowerCase() || !0 !== IT.result.giftRecipientFound || "superRank" === oT) return IT;
            const iT = IT.result.giftRecipientOwnedPacks;
            return {
              ...IT,
              result: {
                ...IT.result,
                giftRecipientOwnedPacks: iT.includes(oT) ? iT : [...iT, oT]
              }
            }
          }))
        }
      }
    }
    var Lk = IT(2136),
      xk = IT(4169),
      ck = IT(250),
      Kk = IT(2679),
      Mk = IT(2626);
    const rk = ["pointerdown", "pointermove", "keydown", "wheel", "touchstart", "scroll", "blur", "focus"];
    var Ak = IT(2080),
      gk = IT(596),
      hk = IT(1591),
      wk = IT(2176),
      mk = IT(2303);

    function ek(TT) {
      let {
        cosmetics: oT
      } = TT;
      return (0, ST.jsx)("span", {
        className: "StoreRecipientAvatar",
        children: (0, ST.jsx)(wk.b, {
          cosmetics: oT
        })
      })
    }

    function Rk(TT, oT) {
      var IT, iT;
      const zT = null !== (IT = TT.friend) && void 0 !== IT ? IT : {
        isError: !1,
        name: TT.name,
        ranks: [],
        cosmetics: null !== (iT = TT.cosmetics) && void 0 !== iT ? iT : {},
        nameColour: gk.d,
        location: {
          status: "noGamePlayed"
        }
      };
      return oT ? {
        ...zT,
        cosmetics: oT
      } : zT
    }

    function uk(TT) {
      let {
        recipient: oT
      } = TT;
      return "pending" === oT.status ? (0, ST.jsx)("span", {
        className: "StoreRecipientStatus",
        children: (0, ST.jsx)(mT.d, {})
      }) : "found" === oT.status ? (0, ST.jsx)(XT.e, {
        name: "check",
        className: "StoreRecipientStatus StoreRecipientStatusFound"
      }) : null
    }

    function vk(TT) {
      var oT;
      let {
        selfName: IT,
        giftRecipient: zT,
        suggestionsVersion: BT,
        pulseSignal: FT,
        disabled: DT
      } = TT;
      const {
        t: LT
      } = (0, WT.t)(), xT = (0, hk.l)(), cT = (0, iT.useRef)(null), KT = (0, iT.useRef)(null), {
        query: AT,
        via: gT,
        recipient: hT,
        recipientCosmetics: mT
      } = zT, eT = (0, Xk.j)(AT), RT = (0, iT.useMemo)((() => {
        const TT = rT.featureFlags.useSocialFeatures ? xT.friends.filter((TT => !TT.isError)) : [];
        return (0, Xk.h)({
          onlineFriends: (0, hk.f)(TT),
          recentRecipients: Sk(),
          friends: TT,
          selfName: IT,
          max: 8
        })
      }), [xT.friends, IT, BT]), uT = AT.trim().toLowerCase(), vT = "search" !== gT && uT ? RT.find((TT => TT.name.toLowerCase() === uT)) : void 0, ET = vT && "prefilled" === gT ? [vT, ...RT.filter((TT => TT !== vT))] : RT, fT = "" !== uT && !vT, CT = fT ? AT : "", jT = ET.length > 0;
      (0, iT.useEffect)((() => {
        cT.current && cT.current.value !== CT && (cT.current.value = CT)
      }), [CT]), (0, iT.useEffect)((() => {
        cT.current && (cT.current.disabled = DT)
      }), [DT, FT]);
      const JT = (0, iT.useRef)(0);

      function aT() {
        "self" !== eT && (0, tT.reportAnalyticsClick)({
          id: "store.mode",
          value: "self"
        }), zT.clear()
      }

      function YT(TT) {
        var oT, IT;
        if (DT) return;
        if (" " === TT.key || "Enter" === TT.key) return TT.preventDefault(), void TT.currentTarget.click();
        const iT = Array.from(null !== (oT = null === (IT = KT.current) || void 0 === IT ? void 0 : IT.querySelectorAll("[role=radio]")) && void 0 !== oT ? oT : []),
          zT = iT.indexOf(TT.currentTarget);
        let kT;
        "ArrowRight" === TT.key || "ArrowDown" === TT.key ? kT = iT[(zT + 1) % iT.length] : "ArrowLeft" === TT.key || "ArrowUp" === TT.key ? kT = iT[(zT - 1 + iT.length) % iT.length] : "Home" === TT.key ? kT = iT[0] : "End" === TT.key && (kT = iT[iT.length - 1]), kT && (TT.preventDefault(), kT.focus(), kT.click())
      }(0, iT.useEffect)((() => {
        var TT;
        FT > JT.current && !DT && (JT.current = FT, null === (TT = cT.current) || void 0 === TT || TT.focus())
      }), [FT, DT]);
      const QT = "self" === eT,
        OT = null !== (oT = null === vT || void 0 === vT ? void 0 : vT.name) && void 0 !== oT ? oT : null,
        HT = "error" === hT.status ? hT.error : null,
        nT = "store:giftRecipientLookupFailed" === HT;
      return (0, ST.jsxs)("div", {
        className: kT()("StoreRecipientStrip", {
          StoreRecipientStripDisabled: DT,
          StoreRecipientStripNoChips: !jT
        }),
        children: [(0, ST.jsx)("span", {
          className: "StoreRecipientLabel",
          "aria-hidden": !0,
          children: LT("store:buyingFor")
        }), (0, ST.jsxs)("div", {
          ref: KT,
          className: "StoreRecipientRadios",
          role: "radiogroup",
          "aria-label": LT("store:whoIsItFor"),
          children: [(0, ST.jsxs)("div", {
            role: "radio",
            "data-pad-focusable": !0,
            "aria-checked": QT,
            tabIndex: DT || !QT && null !== OT ? -1 : 0,
            className: kT()("StoreRecipientMe", {
              StoreRecipientChecked: QT
            }),
            onClick: () => {
              DT || aT()
            },
            onKeyDown: YT,
            children: [(0, ST.jsx)(XT.e, {
              name: "user"
            }), " ", LT("store:me")]
          }), jT && (0, ST.jsx)("div", {
            className: "StoreRecipientChips",
            children: ET.map((TT => {
              const oT = TT === vT;
              return (0, ST.jsx)("div", {
                role: "radio",
                "data-pad-focusable": !0,
                "aria-checked": oT,
                tabIndex: !DT && oT ? 0 : -1,
                title: TT.name,
                className: kT()("StoreRecipientChip", {
                  StoreRecipientChecked: oT
                }),
                onClick: () => {
                  DT || function(TT) {
                    "gift" !== eT && (0, tT.reportAnalyticsClick)({
                      id: "store.mode",
                      value: "gift"
                    }), zT.choose(TT.name, TT.kind)
                  }(TT)
                },
                onKeyDown: YT,
                children: (0, ST.jsx)(mk.g, {
                  playerSocialPreview: Rk(TT, oT ? mT : null),
                  opensProfileCard: !1,
                  isFriend: null !== TT.friend,
                  hideFriendBadge: !0,
                  showLocation: null !== TT.friend,
                  status: null === TT.friend ? null : void 0,
                  trailing: oT ? (0, ST.jsx)(uk, {
                    recipient: hT
                  }) : void 0
                })
              }, TT.name)
            }))
          })]
        }), (0, ST.jsxs)("div", {
          className: kT()("StoreRecipientSearch", {
            StoreRecipientChecked: fT,
            StoreRecipientSearchPulse: FT > 0 && !fT,
            StoreRecipientSearchError: null !== HT && !nT
          }),
          onClick: () => {
            var TT;
            null === (TT = cT.current) || void 0 === TT || TT.focus()
          },
          children: [fT && "found" === hT.status && mT && (0, ST.jsx)(ek, {
            cosmetics: mT
          }), !(fT && "found" === hT.status && mT) && (0, ST.jsx)(XT.e, {
            name: "magnifying-glass",
            className: "StoreRecipientSearchIcon"
          }), (0, ST.jsx)(wT.e, {
            className: "StoreRecipientSearchInput",
            domRef: cT,
            placeholderText: LT("store:searchName"),
            defaultValue: CT,
            maxLength: UT.h,
            onValueChange: function(TT) {
              "gift" !== eT && TT.trim() && (0, tT.reportAnalyticsClick)({
                id: "store.mode",
                value: "gift"
              }), zT.type(TT)
            },
            onEnter: () => {
              var TT;
              const oT = null === (TT = cT.current) || void 0 === TT ? void 0 : TT.value.trim();
              oT && zT.choose(oT, "typed")
            },
            blurOnEnter: !0
          }), fT && (0, ST.jsx)(uk, {
            recipient: hT
          }), fT && (0, ST.jsx)("div", {
            ...(0, MT.Q)({
              disabled: DT
            }),
            "aria-label": LT("store:clearRecipient"),
            title: LT("store:clearRecipient"),
            className: "StoreRecipientClear",
            onClick: TT => {
              TT.stopPropagation(), DT || aT()
            },
            children: (0, ST.jsx)(XT.e, {
              name: "xmark"
            })
          })]
        }, FT), HT && (0, ST.jsx)("div", {
          className: kT()("StoreRecipientPopover", {
            StoreRecipientPopoverSoft: nT
          }),
          role: "status",
          children: LT(HT)
        })]
      })
    }
    var Ek = IT(2150),
      fk = IT(2045),
      Ck = IT(3143),
      jk = IT(2687),
      Jk = IT(2089);
    const Uk = IT.p + "static/media/superRankPreviewPoster.e64783181b692cc31e08.webp";

    function ak() {
      (0, Jk.f)(Uk, {
        lowPriority: !1
      })
    }

    function Yk(TT) {
      let {
        onBack: oT,
        cta: IT,
        recipient: zT,
        afterCta: kT
      } = TT;
      const {
        t: BT
      } = (0, WT.t)(), [FT, DT] = (0, iT.useState)("starting"), LT = (0, iT.useRef)(null), xT = (0, ro.c)(), cT = (0, iT.useRef)(null), KT = (0, iT.useCallback)((() => {
        const TT = LT.current;
        null !== TT.error && TT.load();
        const oT = TT.play();
        cT.current = oT, oT.catch((TT => {
          (0, Ck.d)("Failed to play Super Rank video", TT), xT.current && cT.current === oT && DT("failed")
        }))
      }), [xT]);
      return (0, iT.useEffect)((() => {
        const TT = LT.current;
        let oT;

        function IT() {
          clearTimeout(oT), oT = setTimeout(KT, 3e3)
        }
        return KT(), TT.addEventListener("ended", IT), () => {
          clearTimeout(oT), TT.removeEventListener("ended", IT)
        }
      }), [KT]), (0, ST.jsxs)("div", {
        className: "StoreSuperRankDetail",
        children: [(0, ST.jsxs)("div", {
          className: "StoreDetailHeader",
          children: [(0, ST.jsx)(MT.c, {
            className: "StoreDetailBackButton",
            onClick: oT,
            padBack: !0,
            children: BT("general:back")
          }), (0, ST.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, ST.jsx)(XT.e, {
              name: "bolt"
            }), " ", BT("homePage:superRank")]
          }), zT]
        }), (0, ST.jsxs)("div", {
          className: "StoreSuperRankDetailBody",
          children: [(0, ST.jsxs)("div", {
            className: "StoreSuperRankVideo",
            children: [(0, ST.jsx)("video", {
              ref: LT,
              src: `${CT.clientSideServerUrls.staticUrl}/videos/SuperRankPreview.mp4`,
              poster: Uk,
              muted: !0,
              playsInline: !0,
              controls: "playing" === FT,
              onPlaying: () => {
                DT("playing")
              },
              onError: () => {
                DT("failed")
              }
            }), ("failed" === FT || "loading" === FT) && (0, ST.jsx)("div", {
              className: "StoreSuperRankPlay",
              children: (0, ST.jsx)(MT.e, {
                ariaLabel: BT("general:play"),
                loading: "loading" === FT,
                onClick: () => {
                  DT("loading"), KT()
                },
                touchPressOn: "pointerup",
                children: (0, ST.jsx)(XT.e, {
                  name: "play"
                })
              })
            })]
          }), (0, ST.jsxs)("div", {
            className: "StoreSuperRankDetailSide",
            children: [(0, ST.jsx)("div", {
              className: "StoreSuperRankDetailTable",
              children: (0, ST.jsx)(jk.e, {})
            }), (0, ST.jsxs)("div", {
              className: "StoreTileActions",
              children: [IT, kT]
            })]
          })]
        })]
      })
    }
    var Qk = IT(2322),
      Ok = IT(3098),
      Hk = IT(2675);
    const nk = [gk.t.yellow, gk.t.green, gk.t.aqua, gk.t.blue, gk.t.purple, gk.t.red];

    function qk(TT) {
      return "needsRecipient" === TT || "lookingUp" === TT || "gift" === TT || "recipientOwns" === TT || "recipientSharesOwned" === TT
    }

    function Zk(TT) {
      const {
        onKeyDown: oT,
        ...IT
      } = (0, MT.Q)();
      return {
        ...IT,
        "aria-label": TT,
        onKeyDown: TT => {
          TT.target === TT.currentTarget && (null === oT || void 0 === oT || oT(TT))
        }
      }
    }

    function lk(TT) {
      let {
        text: oT
      } = TT;
      return (0, ST.jsx)("span", {
        className: "StoreRainbowText",
        children: Array.from(oT).map(((TT, oT) => (0, ST.jsx)("span", {
          style: {
            color: nk[oT % nk.length]
          },
          children: TT
        }, oT)))
      })
    }
    const sk = {
      recipientOwns: "store:alreadyOwns",
      sharesOwned: "store:sharesOwned",
      recipientSharesOwned: "store:recipientSharesOwned"
    };

    function tk(TT) {
      let {
        state: oT,
        item: IT,
        price: iT,
        busy: zT,
        highlight: BT = !1,
        onAct: FT,
        onNeedRecipient: DT,
        onLogin: LT = kk.b
      } = TT;
      const {
        t: xT
      } = (0, WT.t)(), cT = "superRank" === IT ? YT.h.product.days : null, KT = TT => null === cT ? xT(TT ? "general:gift" : "general:buy") : xT(TT ? "store:giftDays" : "store:buyDays", {
        days: cT
      }), rT = (TT, oT) => (0, ST.jsxs)(ST.Fragment, {
        children: [oT && (0, ST.jsx)("span", {
          className: "StoreCtaIcon",
          children: oT
        }), null === TT && (0, ST.jsx)("span", {
          className: "StoreCtaLabel StoreCtaLabelPending"
        }), null !== TT && (0, ST.jsx)("span", {
          className: "StoreCtaLabel",
          title: TT,
          children: TT
        }), (0, ST.jsxs)("span", {
          className: "StoreCtaPrice",
          children: ["\xb7", (0, ST.jsx)(fk.b, {
            amount: iT
          })]
        })]
      });
      let AT;
      switch (oT) {
        case "pending":
          AT = (0, ST.jsx)(MT.m, {
            className: "StoreCtaButton",
            disabled: !0,
            children: rT(null)
          });
          break;
        case "login":
          AT = (0, ST.jsx)(MT.m, {
            className: "StoreCtaButton",
            onClick: LT,
            children: rT(xT("store:logIn"))
          });
          break;
        case "owned":
          AT = (0, ST.jsx)(MT.i, {
            className: "StoreCtaButton",
            onClick: () => {
              RT.c.set({
                openEverythingMenuName: sI.q.CUSTOMISATION
              })
            },
            children: (0, ST.jsxs)("span", {
              className: "StoreCtaLabel",
              children: [(0, ST.jsx)(XT.e, {
                name: "shirt"
              }), " ", xT("store:equip")]
            })
          });
          break;
        case "recipientOwns":
        case "sharesOwned":
        case "recipientSharesOwned":
          AT = (0, ST.jsx)(MT.m, {
            className: "StoreCtaButton",
            disabled: !0,
            children: (0, ST.jsx)("span", {
              className: "StoreCtaLabel",
              children: xT(sk[oT])
            })
          });
          break;
        case "needsRecipient":
        case "lookingUp":
        case "gift":
          AT = (0, ST.jsx)(MT.m, {
            className: "StoreCtaButton",
            disabled: "needsRecipient" === oT || null === iT,
            loading: "lookingUp" === oT || zT,
            onClick: FT,
            analyticsClick: {
              id: "store.gift",
              value: IT
            },
            children: rT(KT(!0), Xk.b)
          });
          break;
        case "buy":
        case "recharge":
          AT = (0, ST.jsx)(MT.m, {
            className: "StoreCtaButton",
            loading: zT,
            disabled: null === iT,
            onClick: FT,
            analyticsClick: {
              id: "store.buy",
              value: IT
            },
            children: rT(KT(!1))
          })
      }
      return (0, ST.jsx)("div", {
        className: kT()("StoreCta", {
          StoreCtaHighlight: BT
        }),
        onClick: TT => {
          TT.stopPropagation(), "needsRecipient" === oT && DT()
        },
        children: AT
      })
    }

    function Gk() {
      const {
        t: TT
      } = (0, WT.t)();
      return (0, ST.jsxs)("ul", {
        className: "StorePerks",
        children: [(0, ST.jsxs)("li", {
          children: [(0, ST.jsx)(XT.e, {
            name: "check"
          }), (0, ST.jsx)(lk, {
            text: TT("store:colourfulNames")
          })]
        }), (0, ST.jsxs)("li", {
          children: [(0, ST.jsx)(XT.e, {
            name: "check"
          }), TT("store:perkCapes")]
        }), (0, ST.jsxs)("li", {
          children: [(0, ST.jsx)(XT.e, {
            name: "check"
          }), TT("store:perkNoAdverts")]
        }), (0, ST.jsxs)("li", {
          children: [(0, ST.jsx)(XT.e, {
            name: "check"
          }), TT("store:perkFriends", {
            count: (0, lT.b)(["super"])
          })]
        })]
      })
    }

    function pk(TT) {
      let {
        daysLeft: oT,
        totalDays: IT,
        urgent: iT
      } = TT;
      const {
        t: zT
      } = (0, WT.t)(), XT = IT > 0 ? Math.min(1, Math.max(.03, oT / IT)) : 1;
      return (0, ST.jsxs)("div", {
        className: kT()("StoreSuperRankMeterArea", {
          StoreSuperRankMeterUrgent: iT
        }),
        children: [(0, ST.jsx)("span", {
          className: "StoreSuperRankDaysLeft",
          children: 1 === oT ? zT("store:oneDayLeft") : zT("store:daysLeft", {
            days: oT
          })
        }), (0, ST.jsx)("div", {
          className: "StoreSuperRankMeter",
          children: (0, ST.jsx)("i", {
            style: {
              width: 100 * XT + "%"
            }
          })
        })]
      })
    }

    function bk(TT) {
      let {
        state: oT,
        urgent: IT,
        daysLeft: iT,
        totalDays: zT,
        recipientHasSuperRank: BT,
        busy: FT,
        highlight: DT,
        onOpen: LT,
        onAct: xT,
        onNeedRecipient: cT,
        onLogin: KT
      } = TT;
      const {
        t: MT
      } = (0, WT.t)(), rT = qk(oT), {
        days: AT
      } = YT.h.product, gT = MT("store:recipientHasSuperRank", {
        giftDays: AT
      });
      return (0, ST.jsxs)("div", {
        className: kT()("StoreTile StoreSuperRankTile", {
          StoreTileGift: rT,
          StoreSuperRankTileUrgent: "recharge" === oT && IT,
          StoreSuperRankTileWithChip: BT,
          StoreSuperRankTileGiftReady: "gift" === oT
        }),
        ...Zk(MT("homePage:superRank")),
        "data-store-item": "superRank",
        onPointerEnter: ak,
        onFocus: ak,
        onClick: LT,
        children: [(0, ST.jsx)("div", {
          className: "StoreSuperRankArt",
          style: {
            backgroundImage: `url(${Ak.f})`
          }
        }), rT && (0, ST.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, ST.jsxs)("div", {
          className: "StoreTileContent",
          children: [BT && (0, ST.jsx)("span", {
            className: "StoreChip StoreChipGift",
            title: gT,
            children: gT
          }), (0, ST.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, ST.jsx)(XT.e, {
              name: "bolt"
            }), " ", MT("homePage:superRank")]
          }), rT && (0, ST.jsx)("div", {
            className: "StoreTilePitch",
            children: MT("store:giftPitch", {
              days: AT
            })
          }), "recharge" === oT && (0, ST.jsx)(pk, {
            daysLeft: iT,
            totalDays: zT,
            urgent: IT
          }), (0, ST.jsx)(Gk, {}), (0, ST.jsxs)("div", {
            className: "StoreTileActions",
            children: [(0, ST.jsx)(tk, {
              state: oT,
              item: "superRank",
              price: YT.h.price,
              busy: FT,
              highlight: DT,
              onAct: xT,
              onNeedRecipient: cT,
              onLogin: KT
            }), "needsRecipient" === oT && (0, ST.jsx)("span", {
              className: "StoreTileNote StoreTileNoteGift",
              children: MT("store:pickRecipientFirst")
            }), "recharge" === oT && IT && (0, ST.jsx)("span", {
              className: "StoreTileNote StoreSuperRankEnding",
              children: 1 === iT ? MT("store:endsInOneDay") : MT("store:endsInDays", {
                days: iT
              })
            })]
          })]
        })]
      })
    }
    const yk = {
      standard: "StorePackTileStandard",
      enhanced: "StorePackTileEnhanced",
      premium: "StorePackTilePremium"
    };

    function Nk(TT) {
      var oT;
      let {
        pack: IT,
        state: zT,
        busy: BT,
        onOpen: FT,
        onAct: DT,
        onNeedRecipient: LT,
        onLogin: xT
      } = TT;
      const {
        t: cT
      } = (0, WT.t)(), KT = Pz.b[IT], MT = zk.i[IT], rT = (0, Ak.m)(IT), AT = (0, iT.useRef)(null);
      (0, Hk.j)(IT, AT);
      const gT = qk(zT),
        hT = null !== (oT = KT.displayName) && void 0 !== oT ? oT : IT,
        wT = (0, Ok.e)((() => {
          (0, Qk.d)();
          const TT = (0, Hk.f)(IT);
          void 0 !== TT && (0, Jk.f)((0, Hk.d)(TT))
        })),
        [mT] = (0, iT.useState)(Kk.h);
      return (0, ST.jsxs)("div", {
        className: kT()("StoreTile StorePackTile", KT.tier && yk[KT.tier], {
          StorePackTileOwned: "owned" === zT,
          StorePackTileRecipientOwns: "recipientOwns" === zT,
          StoreTileGift: gT
        }),
        ...Zk(hT),
        ref: AT,
        "data-store-item": IT,
        onClick: FT,
        onPointerMove: TT => {
          "mouse" !== TT.pointerType || 0 === TT.movementX && 0 === TT.movementY || mT || wT.start()
        },
        onPointerLeave: wT.cancel,
        children: [MT && (0, ST.jsx)(MT, {}), (0, ST.jsx)("div", {
          className: "StorePackCharacters",
          children: rT.map((TT => (0, ST.jsx)("div", {
            className: "StorePackCharacter",
            style: {
              backgroundImage: `url(${(0,Ak.g)(TT)})`
            }
          }, TT)))
        }), (0, ST.jsx)("div", {
          className: "StoreTileScrim"
        }), gT && (0, ST.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, ST.jsxs)("div", {
          className: "StoreTileContent",
          children: [(0, ST.jsx)("div", {
            className: "StoreTileTitle",
            children: hT
          }), (0, ST.jsxs)("div", {
            className: "StoreTileMeta",
            children: [cT("store:itemCount", {
              count: (0, Ek.c)(IT)
            }), "owned" === zT && (0, ST.jsxs)("span", {
              className: "StoreTileOwned",
              children: [" \xb7 ", (0, ST.jsx)(XT.e, {
                name: "check"
              }), " ", cT("general:owned")]
            })]
          }), (0, ST.jsx)(tk, {
            state: zT,
            item: IT,
            price: (0, YT.c)(IT),
            busy: BT,
            onAct: DT,
            onNeedRecipient: LT,
            onLogin: xT
          })]
        })]
      })
    }
    var Pk = IT(2652),
      dk = IT(1316);
    const Vk = {
      standard: "StoreCharacterCardStandard",
      enhanced: "StoreCharacterCardEnhanced",
      premium: "StoreCharacterCardPremium"
    };

    function TW(TT) {
      var oT, IT;
      let {
        tile: zT,
        busy: BT,
        highlight: FT,
        onAct: DT,
        onNeedRecipient: LT,
        onLogin: xT
      } = TT;
      const {
        t: cT
      } = (0, WT.t)(), {
        pack: KT,
        state: MT
      } = zT, rT = Pz.b[KT], AT = (0, Pz.d)(KT), gT = zk.i[(0, Ak.i)(KT)], hT = null !== (oT = rT.tier) && void 0 !== oT ? oT : "standard", wT = (0, iT.useRef)(null);
      return (0, dk.c)(wT, "standard" !== hT), (0, ST.jsxs)("div", {
        ref: wT,
        className: kT()("StoreCharacterCard", Vk[hT], {
          StoreCharacterCardOwned: "owned" === MT || "recipientOwns" === MT,
          StoreCharacterCardGift: qk(MT)
        }),
        "data-store-item": KT,
        children: [(0, ST.jsxs)("div", {
          className: "StoreCharacterArt",
          children: [gT && (0, ST.jsx)(gT, {
            simple: !0
          }), (0, ST.jsx)("div", {
            className: "StoreCharacterHalo"
          }), (0, ST.jsx)("div", {
            className: "StoreCharacterFigure",
            style: {
              backgroundImage: `url(${(0,Ak.g)(AT)})`
            }
          }), "owned" === MT && (0, ST.jsx)("span", {
            className: "StoreCharacterOwned",
            title: cT("general:owned"),
            "aria-label": cT("general:owned"),
            children: (0, ST.jsx)(XT.e, {
              name: "check"
            })
          })]
        }), (0, ST.jsxs)("div", {
          className: "StoreCharacterPlate",
          children: [(0, ST.jsx)("div", {
            className: "StoreCharacterName",
            children: null !== (IT = rT.displayName) && void 0 !== IT ? IT : KT
          }), (0, ST.jsx)(tk, {
            state: MT,
            item: KT,
            price: (0, YT.c)(KT),
            busy: BT,
            highlight: FT,
            onAct: DT,
            onNeedRecipient: LT,
            onLogin: xT
          })]
        })]
      })
    }

    function oW(TT) {
      let {
        tiles: oT,
        busy: IT,
        highlightItem: iT,
        onAct: zT,
        onNeedRecipient: kT,
        onLogin: WT
      } = TT;
      return (0, ST.jsx)("div", {
        className: "StoreCharacterGrid",
        children: oT.map((TT => (0, ST.jsx)(TW, {
          tile: TT,
          busy: IT,
          highlight: iT === TT.pack,
          onAct: () => {
            zT(TT.pack)
          },
          onNeedRecipient: kT,
          onLogin: () => {
            WT(TT.pack)
          }
        }, TT.pack)))
      })
    }
    var IW = IT(8783);

    function iW(TT) {
      let {
        title: oT
      } = TT;
      return (0, ST.jsx)("h2", {
        className: "StoreSectionDivider",
        children: (0, ST.jsx)("span", {
          className: "StoreSectionDividerTitle",
          children: oT
        })
      })
    }

    function zW(TT) {
      let {
        mountAtOnce: oT,
        children: IT
      } = TT;
      const zT = (0, iT.useRef)(null),
        [kT, WT] = (0, iT.useState)(oT),
        XT = (0, IW.b)();
      return (0, iT.useLayoutEffect)((() => {
        const TT = zT.current;
        TT && TT.getBoundingClientRect().top < TT.parentElement.getBoundingClientRect().bottom && WT(!0)
      }), []), kT || XT ? (0, ST.jsx)(ST.Fragment, {
        children: IT
      }) : (0, ST.jsx)("div", {
        ref: zT
      })
    }

    function kW(TT) {
      let {
        layout: oT,
        mountAtOnce: IT,
        bundleGift: iT,
        superRankDaysLeft: zT,
        superRankTotalDays: kT,
        busy: XT,
        highlightItem: BT,
        onOpen: FT,
        onAct: DT,
        onNeedRecipient: LT,
        onLogin: xT
      } = TT;
      const {
        t: cT
      } = (0, WT.t)(), KT = oT.packs.filter((TT => void 0 === (0, Pz.d)(TT.pack))), MT = oT.packs.filter((TT => void 0 !== (0, Pz.d)(TT.pack)));
      return (0, ST.jsxs)(ST.Fragment, {
        children: [(0, ST.jsx)(Pk.d, {
          className: "StoreSuperGems",
          gift: iT
        }), (0, ST.jsx)(iW, {
          title: cT("store:rank")
        }), (0, ST.jsx)(bk, {
          state: oT.superRank.state,
          urgent: oT.superRank.urgent,
          daysLeft: zT,
          totalDays: kT,
          recipientHasSuperRank: oT.recipientHasSuperRank,
          busy: XT,
          highlight: "superRank" === BT,
          onOpen: () => {
            FT("superRank")
          },
          onAct: () => {
            DT("superRank")
          },
          onNeedRecipient: LT,
          onLogin: () => {
            xT("superRank")
          }
        }), (0, ST.jsxs)(zW, {
          mountAtOnce: IT,
          children: [(0, ST.jsx)(iW, {
            title: cT("store:bundles")
          }), (0, ST.jsx)("div", {
            className: "StorePackGrid",
            children: KT.map((TT => (0, ST.jsx)(Nk, {
              pack: TT.pack,
              state: TT.state,
              busy: XT,
              onOpen: () => {
                FT(TT.pack)
              },
              onAct: () => {
                DT(TT.pack)
              },
              onNeedRecipient: LT,
              onLogin: () => {
                xT(TT.pack)
              }
            }, TT.pack)))
          }), (0, ST.jsxs)(zW, {
            mountAtOnce: IT,
            children: [(0, ST.jsx)(iW, {
              title: cT("store:characters")
            }), (0, ST.jsx)(oW, {
              tiles: MT,
              busy: XT,
              highlightItem: BT,
              onAct: DT,
              onNeedRecipient: LT,
              onLogin: xT
            })]
          })]
        })]
      })
    }

    function WW(TT) {
      let {
        state: oT,
        mode: IT,
        giftName: iT,
        busy: zT,
        highlight: kT,
        purchaseError: XT,
        onBack: BT,
        onChooseRecipient: FT,
        onAct: DT,
        onLogin: LT
      } = TT;
      const {
        t: xT
      } = (0, WT.t)();
      return (0, ST.jsx)(Yk, {
        onBack: BT,
        recipient: "gift" === IT && (0, ST.jsxs)(ST.Fragment, {
          children: [iT && (0, ST.jsxs)("span", {
            className: "StoreDetailRecipient",
            title: xT("store:giftFor", {
              name: iT
            }),
            children: [Xk.b, " ", xT("store:giftFor", {
              name: iT
            })]
          }), !iT && (0, ST.jsxs)("div", {
            ...(0, MT.Q)(),
            className: "StoreDetailRecipient StoreDetailRecipientChoose",
            onClick: FT,
            children: [Xk.b, " ", xT("store:chooseRecipient")]
          })]
        }),
        cta: (0, ST.jsx)(tk, {
          state: oT,
          item: "superRank",
          price: YT.h.price,
          busy: zT,
          highlight: kT,
          onAct: DT,
          onNeedRecipient: FT,
          onLogin: LT
        }),
        afterCta: (0, ST.jsx)(ST.Fragment, {
          children: XT && (0, ST.jsx)("span", {
            className: "StoreTileNote StoreTileNoteError",
            children: xT(XT)
          })
        })
      })
    }
    const XW = {
        kind: "board"
      },
      BW = [...Pz.j, ...Pz.i];
    let FW = !1;

    function SW(TT) {
      return "superRank" === TT.kind ? "superRank" : "pack" === TT.kind ? TT.pack : null
    }

    function DW(TT) {
      return "found" === TT.status || "error" === TT.status && "store:giftRecipientLookupFailed" === TT.error ? TT.name : null
    }(0, nT.u)(dz.prefetchBillingOfferings);
    const LW = (0, iT.memo)((function(TT) {
      var oT, zT;
      let {
        show: XT
      } = TT;
      const {
        t: BT
      } = (0, WT.t)(), {
        userContext: FT
      } = (0, xT.b)(), DT = FT !== fT.NULL_USER_CONTEXT, LT = Dk(FT), [cT, MT] = (0, KT.e)(), {
        page: rT,
        urlMode: AT,
        goTo: gT
      } = (0, Lk.e)(), hT = SW(rT), {
        openEverythingMenuName: wT,
        gameState: mT
      } = (0, RT.k)(["openEverythingMenuName", "gameState"]), eT = null !== wT;
      ! function(TT, oT) {
        const [zT] = (0, iT.useState)(Kk.h), [kT, WT] = (0, iT.useState)(!1);
        zT && oT && !kT && WT(!0);
        const XT = (0, yI.p)(),
          BT = zT && kT && TT && !XT;
        (0, iT.useEffect)((() => {
          if (!BT) return;
          let TT = null,
            oT = null,
            iT = null;
          const zT = () => !document.hasFocus() || document.activeElement instanceof HTMLIFrameElement || (0, Mk.e)().purchaseUnderWay,
            kT = () => {
              var IT;
              null === (IT = iT) || void 0 === IT || IT(), iT = null, null !== TT && (clearTimeout(TT), TT = null), null !== oT && (clearTimeout(oT), oT = null)
            },
            WT = () => {
              (0, xk.p)(!1), (0, xk.l)(!1), kT(), TT = setTimeout((() => {
                TT = null, iT = (0, ck.b)((() => {
                  iT = null, zT() ? WT() : ((0, xk.p)(!0), oT = setTimeout((() => {
                    oT = null, iT = (0, ck.b)((() => {
                      iT = null, zT() ? WT() : (0, xk.l)(!0)
                    }))
                  }), 3e3), Promise.resolve().then((() => IT(4163))).then((TT => {
                    TT.startBackgroundGameSetup()
                  }), (TT => {
                    console.warn("Background game setup: its chunk failed to load", TT)
                  })))
                }))
              }), 2e3)
            };
          for (const IT of rk) window.addEventListener(IT, WT, {
            capture: !0,
            passive: !0
          });
          return WT(), () => {
            for (const TT of rk) window.removeEventListener(TT, WT, {
              capture: !0
            });
            kT(), (0, xk.p)(!1), (0, xk.l)(!1)
          }
        }), [BT])
      }(XT && eT, "pack" === rT.kind);
      const uT = "landingPage" === mT;
      (0, iT.useEffect)((() => {
        eT && (0, dz.prefetchBillingOfferings)()
      }), [eT]), (0, iT.useEffect)((() => {
        eT && !XT && uT && (0, Ak.r)()
      }), [eT, XT, uT]);
      const [vT, ET] = (0, iT.useState)(0), [CT, jT] = (0, iT.useState)(null), [JT, UT] = (0, iT.useState)(null), [aT, QT] = (0, iT.useState)(null), [OT, ZT] = (0, iT.useState)(null), lT = (0, iT.useRef)(null), sT = (0, iT.useRef)(null), GT = (0, iT.useRef)(!1), pT = (0, nT.z)(), bT = (0, iT.useRef)(0), yT = (0, iT.useRef)(!1);

      function NT() {
        ET((TT => TT + 1))
      }(0, iT.useEffect)((() => {
        if (XT) {
          if (FW = !0, pT && pT.seq !== bT.current) {
            var TT, oT;
            bT.current = pT.seq;
            const IT = (0, nT.d)(pT);
            AT || gT(IT), ZT(pT.highlight && null !== (TT = null !== (oT = SW(IT)) && void 0 !== oT ? oT : pT.openItem) && void 0 !== TT ? TT : null), UT(null), "gift" === pT.mode && pT.giftRecipientName ? LT.choose(pT.giftRecipientName, "prefilled") : "current" !== pT.mode && LT.clear(), "gift" !== pT.mode || pT.giftRecipientName || NT(), (0, tT.reportAnalyticsClick)({
              id: "store.open",
              value: pT.source
            })
          } else yT.current || (0, tT.reportAnalyticsClick)({
            id: "store.open",
            value: "menuTab"
          });
          yT.current = !0
        } else yT.current = !1
      }), [XT, pT]), (0, iT.useEffect)((() => {
        if (!OT) return;
        const TT = setTimeout((() => {
          ZT(null)
        }), 4e3);
        return () => {
          clearTimeout(TT)
        }
      }), [OT]), (0, iT.useEffect)((() => {
        const TT = lT.current;
        var oT;
        if (XT && TT) {
          if (hT) sT.current = hT, null === (oT = TT.querySelector(".StoreDetailBackButton, .CosmeticShopDetailBackButton")) || void 0 === oT || oT.focus();
          else if (sT.current) {
            var IT;
            null === (IT = TT.querySelector(`[data-store-item="${sT.current}"]`)) || void 0 === IT || IT.focus(), sT.current = null
          }
        } else sT.current = null
      }), [hT, XT]), (0, iT.useEffect)((() => {
        UT(null)
      }), [LT.query]), (0, iT.useEffect)((() => {
        if (!aT) return;
        const TT = setTimeout((() => {
          QT(null)
        }), 8e3);
        return () => {
          clearTimeout(TT)
        }
      }), [aT]);
      const PT = FT.superRankInfo,
        dT = PT ? (0, HT.Xb)(PT) : 0,
        VT = (0, Xk.g)(dT),
        To = dT > 0,
        oo = FT.isLoggedIn() || (0, qT.guestsMayBuy)(),
        Io = FT.getOwnedCosmeticPacks(),
        io = (0, Xk.j)(LT.query),
        zo = (0, Xk.c)({
          mode: io,
          loggedIn: DT ? oo : null,
          hasSuperRank: To,
          superRankDaysLeft: VT,
          ownedPacks: Io,
          packs: BW,
          recipient: LT.recipient
        });
      (0, iT.useEffect)((() => {
        if (!oo || !XT) return;
        const TT = (0, nT.w)();
        var oT;
        TT && ("superRank" === (oT = TT.item) || BW.includes(oT)) && ((0, tT.reportAnalyticsClick)({
          id: "store.login_resume",
          value: TT.item
        }), (0, nT.k)({
          mode: TT.mode,
          source: "loginResume",
          giftRecipientName: "gift" === TT.mode && TT.recipient ? TT.recipient : void 0,
          openItem: TT.item,
          highlight: !0
        }))
      }), [oo, XT]);
      const ko = (0, Xk.l)({
        hasSuperRank: oo && To,
        superRankDaysLeft: VT,
        openedThisSession: FW || XT
      });
      if ((0, iT.useEffect)((() => {
          (0, nT.v)(ko)
        }), [ko]), !XT || !(0, qT.purchasesAllowed)()) return null;
      const Wo = MT > cT && cT <= 700,
        Xo = !Wo && MT <= 420,
        Bo = "gift" === io ? DW(LT.recipient) : null,
        Fo = null !== CT;

      function So(TT) {
        (0, nT.r)({
          item: TT,
          mode: io,
          recipient: "gift" === io ? LT.query.trim() : ""
        }), (0, kk.b)()
      }

      function Do(TT, oT) {
        (0, tT.reportAnalyticsClick)({
          id: "store.purchase_done",
          value: `${oT?"gift":"self"}:${TT}`
        }), oT && (LT.recordGift(oT.name, TT), Lo(oT))
      }

      function Lo(TT) {
        ! function(TT) {
          try {
            Jo.e.setItem(Bk, (0, Xk.o)(Sk(), TT))
          } catch {}
        }({
          name: TT.name,
          cosmetics: TT.cosmetics
        }), gT(XW), QT((oT => {
          var IT;
          return {
            name: TT.name,
            seq: (null !== (IT = null === oT || void 0 === oT ? void 0 : oT.seq) && void 0 !== IT ? IT : 0) + 1
          }
        }))
      }
      async function xo(TT) {
        var oT, IT;
        if (GT.current) return;
        if (!oo) return void So(TT);
        UT(null), ZT(null);
        const iT = "gift" === io ? {
          name: DW(LT.recipient),
          cosmetics: LT.recipientCosmetics
        } : null;
        if (iT && !iT.name) return void NT();
        const zT = "superRank" === TT ? YT.h.id : (0, YT.b)(TT);
        GT.current = !0;
        const kT = await (0, Wk.d)(zT, null !== (oT = null === iT || void 0 === iT ? void 0 : iT.name) && void 0 !== oT ? oT : null);
        if (GT.current = !1, !kT) return;
        jT(TT);
        const WT = await Tk.d.purchase(zT, null !== (IT = null === iT || void 0 === iT ? void 0 : iT.name) && void 0 !== IT ? IT : null);
        jT(null), WT ? UT(WT) : (Do(TT, iT), iT || (await (0, Ik.flushClientAnalyticsEvents)(), (0, Vz.refreshWithoutConfirmation)("superRank" === TT ? "/super-rank-welcome" : `/pack-welcome/${TT}`)))
      }
      const co = kT()("Store", {
        StoreGift: "gift" === io,
        StorePortrait: Wo,
        StoreCompact: Xo
      });
      if ("pack" === rT.kind) {
        const TT = rT.pack,
          oT = zo.packs.find((oT => oT.pack === TT));
        return (0, ST.jsx)("div", {
          ref: lT,
          className: "CosmeticShopContainer",
          children: (0, ST.jsx)(zk.f, {
            pack: TT,
            onBack: () => {
              gT(XW)
            },
            onPurchased: oT => {
              Do(TT, oT ? {
                name: oT,
                cosmetics: null
              } : null)
            },
            giftCta: "gift" === io && Bo && oT && (0, ST.jsxs)(ST.Fragment, {
              children: [(0, ST.jsx)(tk, {
                state: oT.state,
                item: TT,
                price: (Ko = TT, "superRank" === Ko ? YT.h.price : (0, YT.c)(Ko)),
                busy: Fo,
                onAct: () => {
                  xo(TT)
                },
                onNeedRecipient: () => {
                  gT(XW), NT()
                }
              }), JT && (0, ST.jsx)("span", {
                className: "CosmeticShopGiftError SmallTextBold",
                children: BT(JT)
              })]
            }),
            ownedPacks: Io,
            startAsGift: "gift" === io,
            initialGiftRecipient: "gift" === io ? null !== Bo && void 0 !== Bo ? Bo : LT.query.trim() : "",
            highlightCta: OT === TT
          }, TT)
        })
      }
      var Ko;
      return "superRank" === rT.kind ? (0, ST.jsx)("div", {
        ref: lT,
        className: kT()(co, "StoreDetailView"),
        children: (0, ST.jsx)(WW, {
          state: zo.superRank.state,
          mode: io,
          giftName: Bo,
          busy: Fo,
          highlight: "superRank" === OT,
          purchaseError: JT,
          onBack: () => {
            gT(XW)
          },
          onChooseRecipient: () => {
            gT(XW), NT()
          },
          onAct: () => {
            xo("superRank")
          },
          onLogin: () => {
            So("superRank")
          }
        })
      }) : (0, ST.jsxs)("div", {
        ref: lT,
        className: co,
        children: [(0, ST.jsx)("div", {
          className: "StoreTopRow",
          children: (0, ST.jsx)(vk, {
            selfName: DT ? FT.getPlayerName() : "",
            giftRecipient: LT,
            suggestionsVersion: null !== (oT = null === aT || void 0 === aT ? void 0 : aT.seq) && void 0 !== oT ? oT : 0,
            pulseSignal: vT,
            disabled: Fo || !DT
          })
        }), aT && (0, ST.jsxs)("div", {
          className: "StoreNotice StoreNoticeGiftSent",
          onClick: () => {
            QT(null)
          },
          children: [(0, ST.jsx)(ik.d, {
            showSignal: aT.seq
          }), Xk.b, " ", BT("store:giftSent", {
            name: aT.name
          })]
        }, aT.seq), !aT && JT && (0, ST.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: BT(JT)
        }), (0, ST.jsx)(kW, {
          layout: zo,
          mountAtOnce: null !== sT.current,
          bundleGift: "gift" === io ? {
            recipientName: Bo,
            lookingUp: "pending" === LT.recipient.status,
            busy: Fo,
            onNeedRecipient: NT,
            onSent: TT => {
              (0, tT.reportAnalyticsClick)({
                id: "store.purchase_done",
                value: "gift:superGems"
              }), Lo({
                name: TT,
                cosmetics: LT.recipientCosmetics
              })
            }
          } : null,
          superRankDaysLeft: VT,
          superRankTotalDays: null !== (zT = null === PT || void 0 === PT ? void 0 : PT.superRankForDays) && void 0 !== zT ? zT : 0,
          busy: Fo,
          highlightItem: OT,
          onOpen: function(TT) {
            (0, tT.reportAnalyticsClick)({
              id: "store.item_open",
              value: TT
            }), gT((0, nT.g)(TT))
          },
          onAct: xo,
          onNeedRecipient: NT,
          onLogin: So
        })]
      })
    }));
    var xW = IT(2384),
      cW = IT(8267),
      KW = IT(2445),
      MW = IT(2290),
      rW = IT(2344),
      AW = IT(2357),
      gW = IT(2363),
      hW = IT(2429),
      wW = IT(2417),
      mW = IT(2160),
      eW = IT(2189),
      RW = IT(2180),
      uW = IT(1852),
      vW = IT(2369),
      EW = IT(2193);

    function fW(TT) {
      let {
        show: oT
      } = TT;
      return oT ? (0, ST.jsx)(CW, {}) : null
    }

    function CW() {
      const {
        t: TT
      } = (0, WT.t)(), {
        followsLeader: oT
      } = (0, MW.i)(), {
        loading: IT,
        friends: zT,
        requests: BT,
        invites: FT
      } = (0, hk.l)(), {
        userContext: DT
      } = (0, xT.b)(), [LT, cT] = (0, iT.useState)(EW.l);
      (0, iT.useEffect)((() => {
        (0, EW.c)()
      }), []);
      const KT = BT.map((TT => TT.name)),
        {
          state: rT,
          recentRequesters: AT
        } = (0, wW.k)(),
        gT = new Map([...("loaded" === rT.status ? rT.recentPlayers : []).map((TT => [TT.preview.name, TT])), ...AT.map((TT => [TT.name, TT]))]),
        hT = (0, iT.useRef)(null),
        [eT, RT] = (0, iT.useState)(""),
        [uT, vT] = (0, iT.useState)("Enter"),
        [ET, fT] = (0, iT.useState)(null);

      function CT() {
        eT && (vT("Loading"), (0, RW.i)(eT, "social_menu").then((TT => {
          if (hT.current) switch (TT.kind) {
            case "sent":
              vT("Success");
              break;
            case "becameFriends":
              vT("BecameFriends");
              break;
            case "failed":
              fT(TT.message), vT("Error")
          }
        })))
      }
      return (0, iT.useEffect)((() => {
        if ("Enter" === uT || "Loading" === uT) return;
        const TT = setTimeout((() => {
          hT.current.value = "", RT(""), vT("Enter")
        }), "Success" === uT ? 1e3 : 4e3);
        return () => {
          clearTimeout(TT)
        }
      }), [uT]), (0, ST.jsx)("div", {
        className: "SocialMenu",
        children: (0, ST.jsxs)("div", {
          className: "SocialMenuInner",
          children: [(0, ST.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, ST.jsxs)("div", {
              className: "SocialMenuBox SocialMenuAddFriend",
              children: [(0, ST.jsx)(gW.d, {
                label: TT("socialBar:addFriend")
              }), (0, ST.jsxs)("div", {
                className: "AddFriendBody",
                children: [(0, ST.jsxs)("div", {
                  className: kT()("AddFriendBodyOverlay", {
                    [`AddFriendBodyOverlay${uT}`]: !0
                  }),
                  children: ["Loading" === uT && (0, ST.jsx)(mT.d, {}), "Success" === uT && (0, ST.jsx)(XT.e, {
                    name: "check"
                  }), "BecameFriends" === uT && (0, ST.jsx)(ST.Fragment, {
                    children: TT("socialBar:nowFriends", {
                      playerName: eT
                    })
                  }), "Error" === uT && ET && (0, ST.jsx)(ST.Fragment, {
                    children: TT(ET.translationKey, ET.params)
                  })]
                }), (0, ST.jsxs)("div", {
                  className: "PlayerSearch",
                  children: [(0, ST.jsx)(wT.e, {
                    className: "PlayerSearchInput",
                    placeholderText: TT("socialBar:enterPlayerName"),
                    domRef: hT,
                    onValueChange: TT => {
                      RT((0, UT.n)(TT)), hT.current.value = (0, UT.n)(TT)
                    },
                    onEnter: () => {
                      eT && (0, tT.reportAnalyticsClick)({
                        id: "social.add_friend",
                        value: "social_menu"
                      }), CT()
                    }
                  }), (0, ST.jsxs)(MT.e, {
                    className: "PlayerSearchInputButton SmallTextLight",
                    onClick: () => {
                      CT()
                    },
                    analyticsClick: {
                      id: "social.add_friend",
                      value: "social_menu"
                    },
                    children: [(0, ST.jsx)(XT.e, {
                      name: "user-plus"
                    }), " ", TT("socialBar:sendRequest")]
                  })]
                })]
              }), (0, ST.jsx)(vW.d, {
                surface: "social_menu",
                prefetchOnMount: !0
              })]
            }), FT.length > 0 && (0, ST.jsxs)("div", {
              className: "SocialMenuBox SocialMenuInvites",
              children: [(0, ST.jsx)(gW.d, {
                label: TT("socialBar:invites"),
                meta: FT.length
              }), FT.map((oT => (0, ST.jsxs)("div", {
                className: "SocialMenuInvite",
                children: [(0, ST.jsx)("div", {
                  className: "SocialMenuInviteIcon",
                  children: (0, ST.jsx)(mW.b, {
                    invite: oT
                  })
                }), (0, ST.jsx)("div", {
                  className: "SocialMenuInviteText",
                  children: (0, ST.jsx)(mW.f, {
                    invite: oT
                  })
                }), (0, ST.jsx)(MT.m, {
                  className: "SocialMenuInviteJoin SmallTextLight",
                  onClick: () => {
                    (0, eW.g)(oT)
                  },
                  analyticsClick: {
                    id: "social.accept_invite",
                    value: `social_menu:${oT.destination.kind}`
                  },
                  children: TT("general:join")
                }), (0, ST.jsx)(ZT.e, {
                  tooltipInner: (0, ST.jsx)(ST.Fragment, {
                    children: TT("general:decline")
                  }),
                  delayShow: 0,
                  children: (0, ST.jsx)(MT.i, {
                    className: "SocialMenuInviteDecline",
                    padDefaultFocus: "invite" === (null === LT || void 0 === LT ? void 0 : LT.kind) && LT.inviteId === oT.id,
                    onClick: () => {
                      hk.e.declineInvite(oT.id)
                    },
                    analyticsClick: {
                      id: "social.decline_invite",
                      value: `social_menu:${oT.destination.kind}`
                    },
                    children: (0, ST.jsx)(XT.e, {
                      name: "xmark"
                    })
                  })
                })]
              }, oT.id)))]
            }), (0, ST.jsxs)("div", {
              className: kT()("SocialMenuBox SocialMenuRequests", {
                SocialMenuBoxEmpty: !IT && 0 === BT.length
              }),
              children: [(0, ST.jsx)(gW.d, {
                label: (0, ST.jsxs)(ST.Fragment, {
                  children: [(0, ST.jsx)(XT.e, {
                    name: uW.d
                  }), " ", TT("socialBar:requests")]
                }),
                meta: (0, ST.jsxs)(ST.Fragment, {
                  children: [BT.length, BT.length === lT.n && (0, ST.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: TT("socialBar:limitReached")
                  })]
                })
              }), IT && (0, ST.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, ST.jsx)(mT.d, {})
              }), !IT && 0 === BT.length && (0, ST.jsx)("div", {
                className: "SocialMenuEmpty",
                children: TT("socialBar:noFriendRequests")
              }), !IT && BT.length > 0 && (0, ST.jsx)("div", {
                className: "PlayerRows",
                children: (0, ST.jsx)(iz.d, {
                  lazyLoadedClassName: "SocialMenuRequestsLazy",
                  observerUpdateDeps: [BT],
                  children: BT.map(((oT, IT) => {
                    const iT = gT.get(oT.name);
                    return (0, ST.jsxs)(AW.c, {
                      playerSocialPreview: oT,
                      zIndex: BT.length - IT,
                      padDefaultFocus: (0, EW.i)(LT, oT.name, IT),
                      status: iT && (0, ST.jsx)(hW.b, {
                        gameNameWithVariation: iT.gameNameWithVariation,
                        isPrivateLobby: iT.isPrivateLobby
                      }),
                      children: [(0, ST.jsx)(ZT.e, {
                        tooltipInner: (0, ST.jsx)(ST.Fragment, {
                          children: TT("general:accept")
                        }),
                        delayShow: 0,
                        children: (0, ST.jsx)(MT.e, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            cT((0, EW.e)(KT, IT)), (0, RW.e)(oT.name, !0, {
                              source: "social_menu",
                              announceFriend: !1
                            })
                          },
                          analyticsClick: {
                            id: "social.accept_friend_request",
                            value: "social_menu"
                          },
                          children: (0, ST.jsx)(XT.e, {
                            name: "check"
                          })
                        })
                      }), (0, ST.jsx)(ZT.e, {
                        tooltipInner: (0, ST.jsx)(ST.Fragment, {
                          children: TT("general:decline")
                        }),
                        delayShow: 0,
                        children: (0, ST.jsx)(MT.i, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            cT((0, EW.e)(KT, IT)), (0, RW.e)(oT.name, !1, {
                              source: "social_menu"
                            })
                          },
                          analyticsClick: {
                            id: "social.decline_friend_request",
                            value: "social_menu"
                          },
                          children: (0, ST.jsx)(XT.e, {
                            name: "xmark"
                          })
                        })
                      })]
                    }, `${oT.name}_${oT.isError}`)
                  }))
                })
              })]
            }), (0, ST.jsx)(hW.e, {})]
          }), (0, ST.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, ST.jsxs)("div", {
              className: "SocialMenuBox SocialMenuParty",
              children: [(0, ST.jsx)(gW.d, {
                label: TT("socialBar:party")
              }), (0, ST.jsx)(rW.b, {})]
            }), (0, ST.jsxs)("div", {
              className: "SocialMenuBox SocialMenuFriends",
              children: [(0, ST.jsx)(gW.d, {
                label: (0, ST.jsxs)(ST.Fragment, {
                  children: [(0, ST.jsx)(XT.e, {
                    name: uW.c
                  }), " ", TT("socialBar:friends")]
                }),
                meta: (0, ST.jsxs)(ST.Fragment, {
                  children: [zT.length, zT.length >= (0, lT.b)(DT.getPlayerRanks()) && (0, ST.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: TT("socialBar:limitReached")
                  })]
                })
              }), IT && (0, ST.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, ST.jsx)(mT.d, {})
              }), !IT && 0 === zT.length && (0, ST.jsx)("div", {
                className: "SocialMenuEmpty",
                children: TT("socialBar:noFriends")
              }), !IT && zT.length > 0 && (0, ST.jsx)("div", {
                className: "PlayerRows",
                children: (0, ST.jsx)(iz.d, {
                  lazyLoadedClassName: "SocialMenuFriendsLazy",
                  observerUpdateDeps: [zT],
                  children: zT.map(((TT, IT) => (0, ST.jsx)(AW.c, {
                    playerSocialPreview: TT,
                    isFriend: !0,
                    hideFriendBadge: !0,
                    onFriendRemoved: TT => {
                      hk.e.removeFriendFromState(TT)
                    },
                    zIndex: zT.length - IT,
                    children: (0, ST.jsx)(AW.b, {
                      friend: TT,
                      followsLeader: oT,
                      analyticsSurface: "social_menu"
                    })
                  }, `${TT.name}_${TT.isError}`)))
                })
              })]
            })]
          })]
        })
      })
    }
    var jW = IT(2274);
    const JW = TT => {
        let {
          action: oT,
          padAction: IT
        } = TT;
        const {
          isTouchScreen: iT
        } = (0, RT.k)(["isTouchScreen"]), zT = (0, yI.p)();
        return iT && !zT ? null : (0, ST.jsx)(qI.e, {
          className: "EverythingMenuTabKey",
          noaAction: oT,
          padHidesKey: !0,
          padMenuShortcut: IT
        })
      },
      UW = (0, iT.memo)((function() {
        const {
          t: TT
        } = (0, WT.t)(), {
          gameState: oT,
          openEverythingMenuName: IT,
          initSdkSelectorFinished: zT,
          crosshairGameView: XT
        } = (0, RT.k)(["gameState", "openEverythingMenuName", "initSdkSelectorFinished", "crosshairGameView"]), {
          userContext: BT
        } = (0, xT.b)(), FT = (0, qT.purchasesAllowed)(), DT = (0, nT.C)(), LT = (TT, oT) => (0, ST.jsx)(JW, {
          action: TT,
          padAction: oT
        }), [cT, KT] = (0, iT.useState)(null), AT = (0, iT.useRef)(null), gT = {
          ..."inGame" === oT ? {} : (0, MT.Q)({
            focusOnClick: !1
          }),
          ...ki.d
        }, hT = null !== IT, wT = IT !== sI.q.COSMETIC_SHOP && !XT;
        async function mT() {
          await async function() {
            if (!cT) return;
            await cT(), KT(null)
          }(), RT.c.set({
            openEverythingMenuName: null
          })
        }
        const eT = (0, iT.useMemo)((() => "inGame" === oT ? {
          text: TT("settingsMenu:exitGame"),
          onClick: () => {
            (0, cW.b)()
          }
        } : (0, ET.c)() ? {
          text: TT("settingsMenu:exitGame"),
          onClick: () => {
            dT.m.discordActivity().then((TT => {
              TT.exit("User exited the game")
            }))
          }
        } : null), [oT, TT]);
        const uT = (0, ST.jsx)("div", {
          className: "EverythingMenuCloseButtonClickZone",
          onClick: () => {
            mT()
          },
          children: (0, ST.jsx)(MT.j, {
            className: "EverythingMenuCloseButton"
          })
        });
        return (0, ST.jsx)(Wi.c, {
          showing: hT,
          globallyUniqueKey: "EverythingMenu",
          alwaysMountChildren: !0,
          keepsMovement: IT === sI.q.SHOP,
          doGameplayStartStopOnShow: "inGame" === oT,
          children: (0, ST.jsx)(Bi.c, {
            className: "EverythingMenuContainer",
            show: hT && !XT,
            children: (0, ST.jsx)(Xi.e, {
              close: () => {
                mT()
              },
              togglePointerLock: !1,
              children: (0, ST.jsxs)("div", {
                className: "EverythingMenu",
                children: [!(0, pz.n)(IT) && (0, ST.jsxs)("div", {
                  className: "EverythingMenuTabList",
                  children: [(0, ST.jsxs)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerStart",
                    children: [eT && (0, ST.jsx)(MT.c, {
                      className: "EverythingMenuBackButton",
                      padDestructive: !0,
                      onClick: () => {
                        eT.onClick()
                      },
                      children: eT.text
                    }), hT && FT && (0, ST.jsx)("div", {
                      ...gT,
                      className: "EverythingMenuWallet",
                      title: TT("homePage:getPremiumCurrency"),
                      onClick: () => {
                        (0, nT.k)({
                          mode: "current",
                          source: "menuWallet"
                        })
                      },
                      children: (0, ST.jsx)(xW.e, {})
                    })]
                  }), (0, ST.jsxs)("div", {
                    className: "EverythingMenuTabListInner",
                    "data-pad-tabs": "1",
                    children: [(0, ST.jsxs)("div", {
                      ...gT,
                      "data-pad-tab": !0,
                      "data-pad-selected": IT === sI.q.SETTINGS ? "true" : void 0,
                      className: kT()("EverythingMenuTab", {
                        EverythingMenuTabActive: IT === sI.q.SETTINGS
                      }),
                      onClick: () => {
                        RT.c.set({
                          openEverythingMenuName: sI.q.SETTINGS
                        })
                      },
                      children: [TT("general:settings"), LT("OpenSettings", "pause")]
                    }), (0, ST.jsxs)("div", {
                      ...gT,
                      "data-pad-tab": !0,
                      "data-pad-selected": IT === sI.q.CUSTOMISATION ? "true" : void 0,
                      className: kT()("EverythingMenuTab", {
                        EverythingMenuTabActive: IT === sI.q.CUSTOMISATION
                      }),
                      onClick: () => {
                        RT.c.set({
                          openEverythingMenuName: sI.q.CUSTOMISATION
                        })
                      },
                      children: [TT("general:player"), LT("OpenCharacterCustomization")]
                    }), rT.featureFlags.useSocialFeatures && (0, ST.jsxs)("div", {
                      ...gT,
                      "data-pad-tab": !0,
                      "data-pad-selected": IT === sI.q.SOCIAL ? "true" : void 0,
                      className: kT()("EverythingMenuTab", {
                        EverythingMenuTabActive: IT === sI.q.SOCIAL
                      }),
                      ...(0, tT.c)({
                        id: "social.open_menu",
                        value: "menu_tab"
                      }, IT === sI.q.SOCIAL),
                      onClick: () => {
                        RT.c.set({
                          openEverythingMenuName: sI.q.SOCIAL
                        })
                      },
                      children: [TT("socialBar:social"), (0, ST.jsx)(jW.c, {})]
                    }), FT && (0, ST.jsxs)("div", {
                      ...gT,
                      "data-pad-tab": !0,
                      "data-pad-selected": IT === sI.q.COSMETIC_SHOP ? "true" : void 0,
                      className: kT()("EverythingMenuTab EverythingMenuTabCosmeticShop", {
                        EverythingMenuTabActive: IT === sI.q.COSMETIC_SHOP
                      }),
                      onClick: () => {
                        RT.c.set({
                          openEverythingMenuName: sI.q.COSMETIC_SHOP
                        })
                      },
                      children: [(0, ST.jsx)("span", {
                        className: "EverythingMenuTabCosmeticShopText",
                        children: TT("store:title")
                      }), "dot" === DT && (0, ST.jsx)("span", {
                        className: "EverythingMenuTabStoreBadge EverythingMenuTabStoreDot"
                      })]
                    }), "inGame" === oT && (0, ST.jsxs)("div", {
                      ...gT,
                      "data-pad-tab": !0,
                      "data-pad-selected": IT === sI.q.LOBBY_LEADERBOARD ? "true" : void 0,
                      className: kT()("EverythingMenuTab", {
                        EverythingMenuTabActive: IT === sI.q.LOBBY_LEADERBOARD
                      }),
                      onClick: () => {
                        RT.c.set({
                          openEverythingMenuName: sI.q.LOBBY_LEADERBOARD
                        })
                      },
                      children: [TT("general:lobby"), LT("OpenLobbyLeaderboard", "leaderboard")]
                    })]
                  }), (0, ST.jsx)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerEnd",
                    children: uT
                  })]
                }), (0, pz.n)(IT) && uT, (0, ST.jsxs)("div", {
                  className: "EverythingMenuBody",
                  "data-pad-initial-area": !0,
                  style: {
                    "--everythingMenuBodyBackgroundOpacity": "inGame" === oT ? "0.85" : "1"
                  },
                  children: [(0, ST.jsx)(Ti, {
                    show: IT === sI.q.SETTINGS,
                    setBeforeResumeCallback: KT
                  }), (0, ST.jsx)(zi, {
                    show: IT === sI.q.CUSTOMISATION
                  }), (0, ST.jsx)(iT.Suspense, {
                    fallback: null,
                    children: (0, ST.jsx)(Oz, {
                      show: IT === sI.q.SHOP
                    })
                  }), (0, ST.jsx)(Nz, {
                    show: IT === sI.q.LOBBY_LEADERBOARD
                  }), (0, ST.jsx)(LW, {
                    show: IT === sI.q.COSMETIC_SHOP
                  }), (0, ST.jsx)(fW, {
                    show: IT === sI.q.SOCIAL
                  })]
                }), !(0, rT.isMobileApp)() && (0, Fi.i)(BT.getPlayerRanks()) && (0, ST.jsx)(Bi.c, {
                  ref: AT,
                  className: "EverythingMenuBannerDiv",
                  show: wT,
                  "data-pad-hint-bar-avoid": !0,
                  "data-pad-no-step-in": !0,
                  children: (0, ST.jsx)(KW.c, {
                    info: {
                      adId: 2,
                      adType: "leaderboard",
                      adAlias: "banner_shop"
                    },
                    sizeInfo: {
                      parentRef: AT
                    },
                    showing: hT && wT,
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
  8745: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => kT
    });
    var iT = IT(314),
      zT = IT(8754);

    function kT(TT, oT, IT) {
      const kT = Object.entries(oT).sort(((TT, oT) => oT[1] - TT[1])),
        WT = (0, iT.ob)(TT);
      WT.push(TT ? "\n\n" : "\n");
      for (const [zT, cT] of kT) {
        var XT, BT, FT;
        const TT = null !== (XT = null === IT || void 0 === IT || null === (BT = IT[zT]) || void 0 === BT ? void 0 : BT.icon) && void 0 !== XT ? XT : `${zT} Enchantment`;
        WT.push({
          icon: TT,
          style: {
            fontSize: "1.5rem"
          }
        }), WT.push({
          str: `${zT} ${null!==(FT=(0,iT.U)(cT))&&void 0!==FT?FT:cT}\n`
        })
      }
      WT.push({
        str: "\n"
      });
      for (const [iT, cT] of kT) {
        var ST, DT, LT, xT;
        const TT = null !== (ST = null === IT || void 0 === IT || null === (DT = IT[iT]) || void 0 === DT ? void 0 : DT.icon) && void 0 !== ST ? ST : `${iT} Enchantment`,
          oT = null !== (LT = null === IT || void 0 === IT || null === (xT = IT[iT]) || void 0 === xT ? void 0 : xT.description) && void 0 !== LT ? LT : (0, zT.k)(iT);
        WT.push({
          icon: TT,
          style: {
            fontSize: "1.25rem",
            opacity: .75
          }
        }), WT.push({
          str: oT,
          style: {
            fontSize: "0.8em",
            fontWeight: "normal",
            opacity: .75
          }
        }), WT.push({
          str: "\n"
        })
      }
      return WT
    }
  },
  8758: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => FT,
      d: () => AT,
      g: () => MT,
      h: () => BT,
      i: () => rT,
      k: () => ST,
      o: () => LT,
      q: () => KT,
      r: () => DT
    });
    var iT = IT(306),
      zT = IT(618),
      kT = IT(314),
      WT = IT(3800),
      XT = IT(8745);

    function BT(TT, oT) {
      var IT;
      let {
        player: iT,
        chestOrCreative: zT
      } = TT;
      var kT;
      return oT < iT.length ? null !== (kT = iT[oT]) && void 0 !== kT ? kT : null : null !== (IT = zT[oT - iT.length]) && void 0 !== IT ? IT : null
    }

    function FT(TT) {
      var oT;
      return null !== (oT = TT.amount) && void 0 !== oT ? oT : 0
    }

    function ST(TT) {
      return 0 === TT.button || void 0 === TT.button
    }

    function DT(TT) {
      return !!TT.shiftKey
    }

    function LT(TT) {
      return "touches" in TT || "touch" === TT.pointerType || "pen" === TT.pointerType
    }
    const xT = new Set,
      cT = 50;

    function KT(TT, oT) {
      var IT;
      const iT = null === (IT = TT[oT]) || void 0 === IT ? void 0 : IT.displayName;
      return (0, zT.K)(iT) ? "string" !== typeof oT ? "" : (!xT.has(oT) && xT.size < cT && (xT.add(oT), console.warn(`No item called "${oT}", so its hover shows the name as given`)), oT) : iT
    }

    function MT(TT, oT, IT) {
      var BT, FT, ST, DT, LT, xT, cT, MT, rT, AT, gT, hT, wT, mT;
      const eT = TT.attributes,
        RT = null !== (BT = null === (FT = oT[TT.name]) || void 0 === FT ? void 0 : FT.rootName) && void 0 !== BT ? BT : TT.name,
        uT = null !== (ST = null !== (DT = eT.customDisplayName) && void 0 !== DT ? DT : null === (LT = oT[TT.name]) || void 0 === LT ? void 0 : LT.displayName) && void 0 !== ST ? ST : KT(oT, RT);
      let vT = uT;
      const ET = null === (xT = eT.customAttributes) || void 0 === xT ? void 0 : xT.enchantmentTier;
      ET && (vT = (0, kT.ob)(uT, {
        colour: kT.lb[ET]
      }));
      const fT = null !== (cT = null !== (MT = null !== (rT = function(TT, oT) {
        var IT;
        if (void 0 === TT || null !== (IT = oT.customAttributes) && void 0 !== IT && IT.author) return TT;
        const zT = (0, iT.ac)(TT);
        return zT.every((TT => "string" === typeof TT)) ? TT : zT.map((TT => "string" === typeof TT ? TT : {
          icon: TT.icon,
          style: {
            fontSize: "1.5em"
          }
        }))
      }(eT.customDescription, eT)) && void 0 !== rT ? rT : null === (AT = oT[TT.name]) || void 0 === AT ? void 0 : AT.description) && void 0 !== MT ? MT : null === (gT = oT[RT]) || void 0 === gT ? void 0 : gT.description) && void 0 !== cT ? cT : "";
      let CT = fT;
      if (null !== (hT = eT.customAttributes) && void 0 !== hT && hT.enchantments) CT = (0, XT.e)(fT, eT.customAttributes.enchantments, eT.customAttributes.enchantmentData);
      else if (IT[RT]) CT = (0, kT.ob)(fT), CT.push({
        str: "\n"
      }), CT.push({
        str: "Enchantable",
        style: {
          fontSize: "0.8em",
          fontWeight: "normal",
          opacity: .4
        }
      });
      else if (null !== (wT = eT.customAttributes) && void 0 !== wT && wT.mobSettings) {
        var jT, JT;
        const TT = eT.customAttributes.mobSettings;
        var UT, aT;
        if (CT = [], (0, zT.K)(eT.customAttributes.health) || (CT.push({
            str: "\n"
          }), CT.push({
            icon: "Health",
            style: {
              fontSize: "1.5em"
            }
          }), CT.push({
            str: " "
          }), CT.push({
            str: eT.customAttributes.health.toString()
          }), (0, zT.K)(TT.maxHealth) || (CT.push({
            str: "/"
          }), CT.push({
            str: TT.maxHealth.toString()
          }))), !(0, zT.K)(TT.attackDamage) && TT.attackDamage > 0 && (CT.push({
            str: "\n"
          }), CT.push({
            icon: "Iron Sword",
            style: {
              fontSize: "1.5em"
            }
          }), CT.push({
            str: " "
          }), CT.push({
            str: TT.attackDamage.toString()
          })), !(0, zT.K)(TT.secondaryAttackDamage) && TT.secondaryAttackDamage > 0 && (CT.push({
            str: "\n"
          }), CT.push({
            icon: "Stone Crossbow",
            style: {
              fontSize: "1.5em"
            }
          }), CT.push({
            str: " "
          }), CT.push({
            str: TT.secondaryAttackDamage.toString()
          })), (0, zT.K)(TT.baseRunningSpeed) || (CT.push({
            str: "\n"
          }), CT.push({
            icon: "Speed",
            style: {
              fontSize: "1.5em"
            }
          }), CT.push({
            str: " "
          }), CT.push({
            str: TT.baseRunningSpeed.toFixed(2)
          })), "Saddled" === TT.metaInfo) CT.push({
          str: "\n"
        }), CT.push({
          str: {
            translationKey: "general:has"
          }
        }), CT.push({
          str: " "
        }), CT.push({
          icon: null !== (UT = null === (aT = TT.tameInfo) || void 0 === aT ? void 0 : aT.saddleItemName) && void 0 !== UT ? UT : "Saddle",
          style: {
            fontSize: "1.5em"
          }
        });
        if (CT.push({
            str: "\n"
          }), CT.push({
            str: "\n"
          }), TT.petInfo && null !== (jT = TT.tameInfo) && void 0 !== jT && jT.supportsFriendship) {
          const oT = WT.d.getIconsFromFriendshipPoints(TT.petInfo.friendshipPoints);
          for (const TT of oT) CT.push({
            icon: TT,
            style: {
              fontSize: "1.5em"
            }
          });
          CT.push({
            str: "\n"
          });
          const IT = WT.d.getMobHungerLevel(TT.petInfo.lastFedAt);
          for (const TT of WT.d.hungerLevelIcons[IT]) CT.push({
            icon: TT,
            style: {
              fontSize: "1.5em"
            }
          });
          CT.push({
            str: " "
          }), CT.push({
            str: WT.d.hungerLevelTranslations[IT],
            style: {
              fontWeight: "bolder"
            }
          })
        }
        if (TT.tameInfo && null !== (JT = TT.tameInfo) && void 0 !== JT && JT.supportsFriendship) {
          var YT, QT;
          let oT = null !== (YT = TT.tameInfo.likedFoods) && void 0 !== YT ? YT : [];
          CT.push({
            str: "\n"
          }), CT.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: WT.d.feedTextColours[WT.d.MobFoodType.Superliked]
            }
          }), CT.push({
            str: " "
          }), null !== (QT = TT.petInfo) && void 0 !== QT && QT.superlikedFoodKnown ? (CT.push({
            icon: TT.petInfo.superlikedFood,
            style: {
              fontSize: "1.5em"
            }
          }), oT = oT.filter((oT => oT !== TT.petInfo.superlikedFood))) : CT.push({
            icon: "Question Mark",
            style: {
              fontSize: "1.5em"
            }
          }), CT.push({
            str: "\n"
          }), CT.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: WT.d.feedTextColours[WT.d.MobFoodType.Liked]
            }
          }), CT.push({
            str: " "
          });
          for (const TT of oT) CT.push({
            icon: TT,
            style: {
              fontSize: "1.5em"
            }
          });
          CT.push({
            str: "\n"
          }), CT.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: WT.d.feedTextColours[WT.d.MobFoodType.Neutral]
            }
          }), CT.push({
            str: " "
          });
          for (const IT of null !== (OT = TT.tameInfo.neutralFoods) && void 0 !== OT ? OT : []) {
            var OT;
            CT.push({
              icon: IT,
              style: {
                fontSize: "1.5em"
              }
            })
          }
          CT.push({
            str: "\n"
          }), CT.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: WT.d.feedTextColours[WT.d.MobFoodType.Disliked]
            }
          }), CT.push({
            str: " "
          });
          for (const IT of null !== (HT = TT.tameInfo.dislikedFoods) && void 0 !== HT ? HT : []) {
            var HT;
            CT.push({
              icon: IT,
              style: {
                fontSize: "1.5em"
              }
            })
          }
        }
        CT.length > 0 ? (CT.shift(), CT.unshift(...(0, kT.ob)(fT))) : CT = (0, kT.ob)(fT)
      }
      return {
        name: vT,
        desc: CT,
        fontStyle: null !== (mT = eT.customAttributes) && void 0 !== mT && mT.author ? "italic" : "normal"
      }
    }

    function rT(TT, oT, IT, iT) {
      const zT = BT(TT, IT),
        kT = BT(TT, iT);
      if (!zT) return !1;
      const WT = oT[zT.name].armourReduction,
        XT = oT[kT.name].armourReduction;
      if (XT === WT) {
        var FT, ST, DT, LT;
        const TT = null !== (FT = null === (ST = zT.attributes.customAttributes) || void 0 === ST ? void 0 : ST.enchantmentTier) && void 0 !== FT ? FT : "Tier 0",
          oT = null !== (DT = null === (LT = kT.attributes.customAttributes) || void 0 === LT ? void 0 : LT.enchantmentTier) && void 0 !== DT ? DT : "Tier 0";
        return parseInt(TT.replace("Tier ", "")) >= parseInt(oT.replace("Tier ", ""))
      }
      return WT > XT
    }

    function AT(TT) {
      let oT;
      if ("number" === typeof TT) {
        const IT = document.querySelector(`[data-inven-idx="${TT}"]`);
        if (!IT) return null;
        oT = IT.getBoundingClientRect()
      } else oT = TT.getBoundingClientRect();
      return {
        x: oT.left + oT.width / 2,
        y: oT.top + oT.height / 2
      }
    }
  },
  8652: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => xT,
      f: () => cT,
      h: () => KT
    });
    var iT = IT(1408),
      zT = IT(46),
      kT = IT(1280),
      WT = IT(4050),
      XT = IT(2168),
      BT = IT(1171),
      FT = IT(90),
      ST = IT(1784),
      DT = IT(1310),
      LT = IT(1083);

    function xT(TT) {
      let {
        show: oT,
        onClose: IT
      } = TT;
      const {
        requestedGameNameWithVariation: iT,
        lobbyName: zT,
        shownLobbyName: kT
      } = (0, ST.f)("connectedGame"), BT = (0, XT.c)(iT, zT, !1);
      return FT.featureFlags.canUseInviteLinks && (0, LT.jsx)(WT.e, {
        show: oT,
        close: IT,
        padShowsHud: !0,
        togglePointerLock: !1,
        globallyUniqueKey: "InviteLinkBox",
        doGameplayStartStopOnShow: !0,
        children: (0, LT.jsxs)("div", {
          className: "InviteLinkBox AnimFadeInScaleUp",
          children: [(0, LT.jsx)("div", {
            className: "InviteLinkBoxHeader SmallTextBold",
            children: "Invite Friends"
          }), (0, LT.jsxs)("div", {
            className: "InviteLinkBoxDescription SmallTextLight",
            children: [(0, LT.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: '"Join Lobby Name" Button Info'
            }), "Game: ", null === BT ? (0, LT.jsx)(DT.d, {}) : BT, (0, LT.jsx)("br", {}), "Lobby Name: ", kT, (0, LT.jsx)("br", {}), (0, LT.jsx)("br", {}), (0, LT.jsx)("br", {}), (0, LT.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: "Link"
            })]
          }), (0, LT.jsx)(cT, {})]
        })
      })
    }

    function cT() {
      var TT;
      const {
        t: oT
      } = (0, BT.t)(), IT = null !== (TT = KT(FT.featureFlags.canUseInviteLinks)) && void 0 !== TT ? TT : "Loading Link...", [kT, WT] = (0, zT.useState)(0), [XT, ST] = (0, zT.useReducer)((TT => TT + 1), 0);
      return (0, zT.useEffect)((() => {
        const TT = setTimeout((() => {
          ST()
        }), 1100);
        return () => {
          clearTimeout(TT)
        }
      }), [kT]), FT.featureFlags.canUseInviteLinks && (0, LT.jsxs)("div", {
        className: "InviteLinkInnerWrapper",
        children: [(0, LT.jsx)("div", {
          className: "InviteLinkInner",
          children: IT
        }), (0, LT.jsx)(iT.e, {
          className: "InviteLinkCopyButton",
          onClick: () => {
            navigator.clipboard.writeText(IT).catch((TT => {
              console.error("Failed to copy invite link:", TT)
            })), WT(Date.now())
          },
          disabled: Date.now() - kT < 1e3,
          children: Date.now() - kT < 1e3 ? oT("general:copied") : oT("general:copy")
        })]
      })
    }

    function KT(TT) {
      const [oT, IT] = (0, zT.useState)(null);
      return (0, zT.useEffect)((() => {
        if (!TT) return;
        let oT = !0;
        return (0, kT.D)().then((TT => {
          oT && IT(TT)
        })).catch((TT => {
          console.error("Failed to get invite link:", TT)
        })), () => {
          oT = !1
        }
      }), [TT]), oT
    }
  },
  8735: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => FT
    });
    var iT = IT(46),
      zT = IT(1042),
      kT = IT.n(zT),
      WT = IT(1784),
      XT = IT(1083);

    function BT(TT) {
      const oT = Math.floor(TT / 3600),
        IT = Math.floor(TT % 3600 / 60),
        iT = Math.floor(TT % 60),
        zT = `${IT.toString().padStart(2,"0")}:${iT.toString().padStart(2,"0")}`;
      return oT > 0 ? `${oT}:${zT}` : zT
    }
    const FT = (0, iT.memo)((function(TT) {
      let {
        className: oT
      } = TT;
      const {
        recording: IT,
        seconds: iT
      } = (0, WT.f)("replayRecorder");
      return IT ? (0, XT.jsxs)("div", {
        className: kT()("RecordingIndicator", oT),
        children: [(0, XT.jsx)("span", {
          className: "RecordingIndicatorDot"
        }), (0, XT.jsx)("span", {
          className: "RecordingIndicatorLabel",
          children: "REC"
        }), (0, XT.jsx)("span", {
          className: "RecordingIndicatorTime",
          children: BT(iT)
        })]
      }) : null
    }))
  },
  4375: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => MT
    });
    var iT = IT(1042),
      zT = IT.n(iT),
      kT = IT(4145),
      WT = IT(1171),
      XT = IT(1055),
      BT = IT(1408),
      FT = IT(1451),
      ST = IT(1325),
      DT = IT(2251),
      LT = IT(1083);
    const xT = {
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

    function cT(TT) {
      let {
        platform: oT
      } = TT;
      const IT = "youtube" === oT;
      return (0, LT.jsxs)("span", {
        className: zT()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: IT
        }),
        children: [IT && (0, LT.jsx)(DT.d, {
          variant: "white"
        }), !IT && (0, LT.jsx)(XT.e, {
          name: xT[oT].icon,
          kit: "brands"
        })]
      })
    }

    function KT(TT) {
      let {
        platform: oT,
        link: IT,
        editable: iT,
        userContext: zT,
        onLinksUpdated: DT
      } = TT;
      const {
        t: KT
      } = (0, WT.t)(), MT = xT[oT];
      if (!IT && !iT) return null;

      function rT() {
        var TT;
        if (!zT || !DT) return;
        ST.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: MT.name
            }
          },
          prefixText: kT.w[oT],
          placeholderText: "playBloxd",
          initialValue: null !== (TT = null === IT || void 0 === IT ? void 0 : IT.handle) && void 0 !== TT ? TT : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: IT ? "general:remove" : void 0
        }).getResult().then((async TT => {
          if ("notificationTornDown" !== TT && null !== TT) try {
            "submit" === TT.type ? await FT.e.setSocialLink(zT, oT, TT.value) : await FT.e.clearSocialLink(zT, oT), DT()
          } catch (IT) {
            console.error("Failed to update social link", IT), ST.NotificationProvider.showAlertPopup({
              title: IT.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (IT) {
        const TT = `@${IT.handle}`;
        return (0, LT.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: MT.color
          },
          href: IT.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, LT.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, LT.jsx)(cT, {
              platform: oT
            }), (0, LT.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, LT.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: TT
              })
            })]
          }), iT && (0, LT.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, BT.Q)({
              stopPropagation: !0
            }),
            onClick: TT => {
              TT.stopPropagation(), TT.preventDefault(), rT()
            },
            children: (0, LT.jsx)(XT.e, {
              name: "pen-to-square"
            })
          }), !iT && (0, LT.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, LT.jsx)(XT.e, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, LT.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: MT.color
        },
        ...(0, BT.Q)(),
        onClick: () => {
          rT()
        },
        children: [(0, LT.jsx)(cT, {
          platform: oT
        }), (0, LT.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, LT.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: MT.name
          }), (0, LT.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: KT("homePage:profileSocialLinkAdd")
          })]
        }), (0, LT.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, LT.jsx)(XT.e, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function MT(TT) {
      let {
        socialLinks: oT,
        editable: IT = !1,
        userContext: iT,
        onLinksUpdated: zT
      } = TT;
      if (!IT && 0 === oT.length) return null;
      const WT = new Map(oT.map((TT => [TT.platform, TT]))),
        XT = IT ? kT.s : oT.map((TT => TT.platform));
      return (0, LT.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, LT.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: XT.map((TT => (0, LT.jsx)(KT, {
            platform: TT,
            link: WT.get(TT),
            editable: IT,
            userContext: iT,
            onLinksUpdated: zT
          }, TT)))
        })
      })
    }
  },
  8743: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => kT
    });
    var iT = IT(4057),
      zT = IT(4061);

    function kT(TT) {
      let {
        children: oT,
        showing: IT,
        globallyUniqueKey: kT,
        alwaysMountChildren: WT = !1,
        doGameplayStartStopOnShow: XT = !0,
        keepsMovement: BT = !1
      } = TT;
      return (0, zT.d)(!0, IT, kT, BT), (0, iT.e)(XT, IT), IT || WT ? oT : null
    }
  },
  8783: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => kT
    });
    var iT = IT(46),
      zT = IT(3138);

    function kT() {
      const [TT, oT] = (0, iT.useState)(!1);
      return (0, iT.useLayoutEffect)((() => {
        let TT = !0;
        return (0, zT.c)().then((() => {
          TT && oT(!0)
        })), () => {
          TT = !1
        }
      }), []), TT
    }
  },
  6062: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => kT
    });
    var iT = IT(46),
      zT = IT(26);

    function kT(TT, oT) {
      var IT;
      const [kT, WT] = (0, iT.useState)(null !== (IT = zT.e.getItem(TT)) && void 0 !== IT ? IT : oT);
      return [kT, oT => {
        zT.e.setItem(TT, oT), WT(oT)
      }]
    }
  },
  8713: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => LT,
      i: () => DT
    });
    IT(8715);
    var iT = IT(1042),
      zT = IT.n(iT),
      kT = IT(46),
      WT = IT(8684);

    function XT(TT, oT) {
      return Math.max(1, Math.round(TT * oT))
    }

    function BT(TT, oT, IT) {
      const iT = 2 * IT >= oT - 1;
      return {
        x: TT,
        y: TT,
        size: oT,
        border: Math.min(IT, Math.floor(oT / 2)),
        filled: iT
      }
    }
    var FT = IT(1083);
    const ST = 1.4;

    function DT(TT, oT) {
      return TT && oT ? `scale(${ST})` : "scale(1)"
    }

    function LT(TT) {
      return "classic" === TT.settings.style ? (0, FT.jsx)(KT, {
        ...TT
      }) : (0, FT.jsx)(mT, {
        ...TT
      })
    }
    const xT = .125;

    function cT(TT, oT) {
      const IT = {};
      if (TT.color !== WT.f.color && (IT.color = (0, WT.k)(TT.color)), TT.opacity !== WT.f.opacity && (IT.opacity = TT.opacity / 100), TT.outline !== WT.f.outline || TT.outlineColor !== WT.f.outlineColor) {
        const oT = TT.outline,
          iT = (0, WT.k)(TT.outlineColor);
        IT.textShadow = oT > 0 ? `-${oT}px 0 ${iT}, 0 ${oT}px ${iT}, ${oT}px 0 ${iT}, 0 -${oT}px ${iT}` : "none"
      }
      if (TT.size !== WT.f.size) {
        const iT = TT.size / 100;
        IT.fontSize = oT ? `calc(max(1.3rem, 18px) * ${iT})` : `calc(1.3rem * ${iT})`, IT.marginTop = `-${xT}em`, IT.transformOrigin = `50% calc(50% + ${xT}em)`
      }
      return IT
    }

    function KT(TT) {
      let {
        settings: oT,
        touch: IT,
        inPreview: iT,
        inEditor: kT,
        pressed: WT = !1,
        pressRef: XT
      } = TT;
      return (0, FT.jsx)("div", {
        className: zT()("Crosshair", {
          Touch: IT,
          CrosshairInPreview: iT,
          CrosshairInEditor: kT || iT
        }),
        ref: XT,
        style: {
          transform: DT(WT, oT.growOnClick),
          ...cT(oT, IT)
        },
        children: "+"
      })
    }

    function MT(TT, oT) {
      return TT / oT + "px"
    }

    function rT(TT, oT, IT, iT) {
      return {
        ...hT(TT, oT, IT),
        width: MT(TT.w, IT),
        height: MT(TT.h, IT),
        background: iT
      }
    }

    function AT(TT, oT, IT) {
      return {
        left: MT(TT.x, oT),
        top: MT(TT.y, oT),
        width: MT(TT.size, oT),
        height: MT(TT.size, oT),
        borderWidth: MT(TT.border, oT),
        borderColor: IT,
        background: TT.filled ? IT : void 0
      }
    }
    const gT = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function hT(TT, oT, IT) {
      const [iT, zT] = TT.arm ? gT[TT.arm] : [0, 0], kT = Math.round(oT * IT);
      return {
        left: MT(TT.x + iT * kT, IT),
        top: MT(TT.y + zT * kT, IT)
      }
    }

    function wT(TT) {
      return TT.arm ? {
        "data-arm": TT.arm,
        "data-x": TT.x,
        "data-y": TT.y
      } : {}
    }

    function mT(TT) {
      let {
        settings: oT,
        inPreview: IT,
        inEditor: iT,
        pressed: DT = !1,
        spread: LT,
        spreadRef: xT
      } = TT;
      const cT = (0, kT.useRef)(null),
        {
          box: KT,
          dpr: MT
        } = function(TT) {
          const [oT, IT] = (0, kT.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, kT.useLayoutEffect)((() => {
            const oT = TT.current;
            if (!oT) return;
            const iT = () => {
              const TT = oT.getBoundingClientRect(),
                iT = window.devicePixelRatio || 1;
              IT((oT => oT.dpr === iT && oT.box.left === TT.left && oT.box.top === TT.top && oT.box.width === TT.width && oT.box.height === TT.height ? oT : {
                box: {
                  left: TT.left,
                  top: TT.top,
                  width: TT.width,
                  height: TT.height
                },
                dpr: iT
              }))
            };
            iT();
            const zT = new ResizeObserver(iT);
            return zT.observe(oT), window.addEventListener("resize", iT), window.addEventListener("scroll", iT, !0), () => {
              zT.disconnect(), window.removeEventListener("resize", iT), window.removeEventListener("scroll", iT, !0)
            }
          }), [TT]), oT
        }(cT),
        gT = (0, kT.useRef)(MT);
      gT.current = MT;
      const mT = function(TT, oT) {
          const IT = XT(TT.lineThickness, oT),
            iT = XT(TT.lineLength, oT),
            zT = Math.round(TT.gap * oT),
            kT = XT(TT.dotSize, oT),
            WT = TT.outline > 0 ? XT(TT.outline, oT) : 0,
            FT = XT(TT.circleThickness, oT),
            ST = TT.circle ? Math.round(TT.circleRadius * oT * 2 + FT) : 0,
            DT = function(TT, oT, IT, iT) {
              return TT.lines ? oT : TT.dot ? IT : TT.circle && iT % 2 === 0 ? 2 : 1
            }(TT, IT, kT, ST),
            LT = [];
          if (TT.lines && (LT.push({
              x: DT + zT,
              y: 0,
              w: iT,
              h: IT,
              arm: "right"
            }), LT.push({
              x: -zT - iT,
              y: 0,
              w: iT,
              h: IT,
              arm: "left"
            }), LT.push({
              x: 0,
              y: DT + zT,
              w: IT,
              h: iT,
              arm: "down"
            }), TT.tStyle || LT.push({
              x: 0,
              y: -zT - iT,
              w: IT,
              h: iT,
              arm: "up"
            }), 0 === zT && LT.push({
              x: 0,
              y: 0,
              w: IT,
              h: IT
            })), TT.dot) {
            const TT = Math.floor((DT - kT) / 2);
            LT.push({
              x: TT,
              y: TT,
              w: kT,
              h: kT
            })
          }
          const xT = LT.map((TT => ({
            ...TT,
            x: TT.x - WT,
            y: TT.y - WT,
            w: TT.w + 2 * WT,
            h: TT.h + 2 * WT
          })));
          let cT = null,
            KT = null;
          if (TT.circle) {
            const TT = ST + ((ST - DT) % 2 === 0 ? 0 : 1),
              oT = (DT - TT) / 2;
            cT = BT(oT, TT, FT), WT > 0 && (KT = BT(oT - WT, TT + 2 * WT, FT + 2 * WT))
          }
          return {
            cell: DT,
            fills: LT,
            outlines: WT > 0 ? xT : [],
            ring: cT,
            ringOutline: KT
          }
        }(DT && oT.growOnClick ? function(TT, oT) {
          return {
            ...TT,
            outline: TT.outline * oT,
            lineLength: TT.lineLength * oT,
            lineThickness: TT.lineThickness * oT,
            gap: TT.gap * oT,
            dotSize: TT.dotSize * oT,
            circleRadius: TT.circleRadius * oT,
            circleThickness: TT.circleThickness * oT
          }
        }(oT, ST) : oT, MT),
        eT = function(TT, oT, IT) {
          const iT = Math.round((TT.left + TT.width / 2) * IT - oT / 2),
            zT = Math.round((TT.top + TT.height / 2) * IT - oT / 2);
          return {
            x: iT / IT - TT.left,
            y: zT / IT - TT.top
          }
        }(KT, mT.cell, MT),
        RT = (0, WT.k)(oT.color),
        uT = (0, WT.k)(oT.outlineColor),
        vT = (0, kT.useRef)(0);
      (0, kT.useLayoutEffect)((() => {
        if (xT) return xT.current = TT => {
          var oT;
          vT.current = TT, null === (oT = cT.current) || void 0 === oT || oT.querySelectorAll("[data-arm]").forEach((oT => {
            Object.assign(oT.style, hT(function(TT) {
              return {
                x: Number(TT.dataset.x),
                y: Number(TT.dataset.y),
                arm: TT.dataset.arm
              }
            }(oT), TT, gT.current))
          }))
        }, () => {
          xT.current = null
        }
      }), [xT]);
      const ET = null !== LT && void 0 !== LT ? LT : vT.current;
      return (0, FT.jsx)("div", {
        ref: cT,
        className: zT()("CrosshairShapes", {
          CrosshairInPreview: IT,
          CrosshairInEditor: iT || IT,
          CrosshairSpreads: void 0 !== xT
        }),
        children: (0, FT.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: eT.x,
            top: eT.y,
            opacity: oT.opacity / 100
          },
          children: (0, FT.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [mT.ringOutline && (0, FT.jsx)("div", {
              className: "CrosshairRing",
              style: AT(mT.ringOutline, MT, uT)
            }), mT.outlines.map(((TT, oT) => (0, FT.jsx)("div", {
              className: "CrosshairPart",
              ...wT(TT),
              style: rT(TT, ET, MT, uT)
            }, `o${oT}`))), mT.ring && (0, FT.jsx)("div", {
              className: "CrosshairRing",
              style: AT(mT.ring, MT, RT)
            }), mT.fills.map(((TT, oT) => (0, FT.jsx)("div", {
              className: "CrosshairPart",
              ...wT(TT),
              style: rT(TT, ET, MT, RT)
            }, `f${oT}`)))]
          })
        })
      })
    }
  },
  8724: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => ST,
      g: () => MT,
      k: () => KT
    });
    var iT = IT(8684);
    const zT = "XH1-",
      kT = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      WT = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      XT = ["color", "outlineColor"],
      BT = 1 + 3 * XT.length + WT.length + 1,
      FT = Math.ceil(8 * BT / Math.log2(62)),
      ST = zT.length + FT;

    function DT(TT) {
      let oT = 90;
      for (const IT of TT) oT = 31 * oT + IT & 255;
      return oT
    }
    const LT = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      xT = BigInt(LT.length);

    function cT(TT, oT) {
      let IT = 0n;
      for (const zT of TT) {
        const TT = LT.indexOf(zT);
        if (TT < 0) return null;
        IT = IT * xT + BigInt(TT)
      }
      if (IT >> BigInt(8 * oT) !== 0n) return null;
      const iT = [];
      for (let zT = 0; zT < oT; zT++) iT.unshift(Number(0xffn & IT)), IT >>= 8n;
      return iT
    }

    function KT(TT) {
      let oT = "shapes" === TT.style ? 1 : 0;
      kT.forEach(((IT, iT) => {
        TT[IT] && (oT |= 1 << iT + 1)
      }));
      const IT = [oT];
      for (const zT of XT) {
        const oT = (0, iT.h)(zT, TT[zT]);
        IT.push(oT >> 16 & 255, oT >> 8 & 255, 255 & oT)
      }
      for (const zT of WT) {
        const {
          min: oT,
          step: kT
        } = iT.e[zT];
        IT.push(Math.round(((0, iT.h)(zT, TT[zT]) - oT) / kT))
      }
      return IT.push(DT(IT)), zT + function(TT, oT) {
        let IT = 0n;
        for (const zT of TT) IT = IT << 8n | BigInt(zT);
        let iT = "";
        for (let zT = 0; zT < oT; zT++) iT = LT[Number(IT % xT)] + iT, IT /= xT;
        return iT
      }(IT, FT)
    }

    function MT(TT) {
      for (const oT of TT.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${FT}})`, "gi"))) {
        const TT = rT(cT(oT[1], BT));
        if (TT) return TT
      }
      return null
    }

    function rT(TT) {
      if (!TT || TT.length !== BT || DT(TT.slice(0, -1)) !== TT[TT.length - 1]) return null;
      const oT = TT[0],
        IT = {
          ...iT.f,
          style: 1 & oT ? "shapes" : "classic"
        };
      kT.forEach(((TT, iT) => {
        IT[TT] = 0 !== (oT & 1 << iT + 1)
      }));
      let zT = 1;
      for (const iT of XT) IT[iT] = TT[zT] << 16 | TT[zT + 1] << 8 | TT[zT + 2], zT += 3;
      for (const kT of WT) {
        const {
          min: oT,
          step: WT
        } = iT.e[kT];
        IT[kT] = (0, iT.h)(kT, oT + TT[zT] * WT), zT++
      }
      return IT
    }
  },
  8684: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => iT,
      f: () => zT,
      h: () => kT,
      k: () => FT,
      o: () => BT,
      q: () => ST,
      u: () => XT,
      w: () => WT
    });
    const iT = {
        opacity: {
          min: 5,
          max: 100,
          step: 1
        },
        outline: {
          min: 0,
          max: 4,
          step: .1
        },
        size: {
          min: 25,
          max: 400,
          step: 5
        },
        lineLength: {
          min: .5,
          max: 40,
          step: .5
        },
        lineThickness: {
          min: .5,
          max: 10,
          step: .5
        },
        gap: {
          min: 0,
          max: 40,
          step: .5
        },
        dotSize: {
          min: .5,
          max: 12,
          step: .5
        },
        circleRadius: {
          min: 1,
          max: 60,
          step: .5
        },
        circleThickness: {
          min: .5,
          max: 6,
          step: .5
        },
        color: {
          min: 0,
          max: 16777215,
          step: 1
        },
        outlineColor: {
          min: 0,
          max: 16777215,
          step: 1
        }
      },
      zT = Object.freeze({
        style: "classic",
        color: 16777215,
        opacity: 100,
        outline: 1.2,
        outlineColor: 0,
        growOnClick: !0,
        size: 100,
        lines: !0,
        lineLength: 6,
        lineThickness: 2,
        gap: 3,
        tStyle: !1,
        dot: !1,
        dotSize: 2,
        circle: !1,
        circleRadius: 10,
        circleThickness: 1,
        forGuns: !1
      });

    function kT(TT, oT) {
      var IT;
      const {
        min: kT,
        max: WT,
        step: XT
      } = iT[TT];
      if (!Number.isFinite(oT)) return zT[TT];
      const BT = (null !== (IT = String(XT).split(".")[1]) && void 0 !== IT ? IT : "").length,
        FT = Number((Math.round(oT / XT) * XT).toFixed(BT));
      return Math.min(WT, Math.max(kT, FT))
    }

    function WT(TT, oT, IT) {
      const iT = "number" === typeof IT ? kT(oT, IT) : IT;
      return {
        ...TT,
        [oT]: iT
      }
    }

    function XT(TT, oT) {
      let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(zT).every((iT => IT.includes(iT) || TT[iT] === oT[iT]))
    }

    function BT(TT) {
      return XT(TT, zT)
    }

    function FT(TT) {
      return `#${TT.toString(16).padStart(6,"0")}`
    }

    function ST(TT) {
      const oT = /^#?([0-9a-f]{6})$/i.exec(TT.trim());
      return oT ? parseInt(oT[1], 16) : null
    }
  },
  8731: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => DT,
      g: () => LT
    });
    var iT = IT(46),
      zT = IT(26),
      kT = IT(8724),
      WT = IT(8684);
    const XT = "crosshairCode";
    let BT = null;
    const FT = new Set;

    function ST() {
      if (null === BT) {
        var TT;
        const oT = zT.e.getItem(XT);
        BT = null !== (TT = "string" === typeof oT ? (0, kT.g)(oT) : null) && void 0 !== TT ? TT : WT.f
      }
      return BT
    }

    function DT(TT) {
      BT = TT, (0, WT.o)(TT) ? zT.e.removeItem(XT) : zT.e.setItem(XT, (0, kT.k)(TT));
      for (const oT of FT) oT()
    }

    function LT() {
      const [TT, oT] = (0, iT.useState)(ST);
      return (0, iT.useEffect)((() => {
        const TT = () => {
          oT(ST())
        };
        return TT(), IT = TT, FT.add(IT), () => {
          FT.delete(IT)
        };
        var IT
      }), []), TT
    }
  },
  8682: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => kT,
      e: () => zT
    });
    var iT = IT(12);

    function zT(TT, oT) {
      return TT && !oT
    }

    function kT() {
      return zT(iT.c.get("isTouchScreen"), iT.c.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  8649: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => iT
    });
    const iT = new Set(["chunkBorders"])
  },
  8647: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      ALL_DEV_TOOLS: () => WT,
      coreDevTools: () => FT,
      devTools: () => BT
    });
    var iT = IT(637),
      zT = IT(1266),
      kT = IT(8649);
    const WT = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function XT() {
      const {
        noaDevTools: TT
      } = await IT.e(226).then((() => IT(39852)));
      return TT
    }
    const BT = new class {
        constructor() {
          this.loadHost = XT, this.tools = WT
        }
        setHost(TT) {
          this.tools = null === TT ? WT : TT.tools, this.loadHost = null === TT ? XT : async () => TT
        }
        supports(TT) {
          return this.tools.has(TT)
        }
        async downloadScene(TT, oT) {
          const IT = await this.loadHost();
          await IT.downloadScene(TT, oT)
        }
        async setAmbientLightIntensity(TT) {
          const oT = await this.loadHost();
          await oT.setAmbientLightIntensity(TT)
        }
      },
      FT = {
        tools: kT.e,
        downloadScene: async () => {
          throw new Error("This client can't download the scene")
        },
        setAmbientLightIntensity: async () => {
          throw new Error("This client can't set the ambient light")
        }
      };
    iT.u && BT.setHost(FT), (0, zT.r)((() => {
      BT.setHost(FT)
    }))
  },
  6158: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => zT,
      e: () => kT
    });
    var iT = IT(26);
    const zT = "shaderPack";
    async function kT() {
      var TT;
      let oT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (TT = await iT.c.getItem(zT, oT)) && void 0 !== TT ? TT : null
    }
  },
  8664: (TT, oT, IT) => {
    function iT(TT, oT) {
      return TT && !oT
    }
    IT.d(oT, {
      d: () => iT
    })
  },
  8680: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => kT
    });
    var iT = IT(1071);

    function zT() {
      var TT, oT;
      return null !== (TT = null === (oT = screen.orientation) || void 0 === oT ? void 0 : oT.type) && void 0 !== TT ? TT : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const kT = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && zT() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = zT(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, iT.JK)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const TT of this.resizers) TT()
          }
        }), 1e3)
      }
      heldSizer(TT) {
        let oT = !1;
        return () => {
          if (oT && this.isHeld()) return null;
          const IT = TT();
          return oT ||= null !== IT, IT
        }
      }
      onRelease(TT) {
        return this.resizers.add(TT), () => {
          this.resizers.delete(TT)
        }
      }
    }
  },
  8660: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => xT,
      d: () => LT
    });
    var iT = IT(12),
      zT = IT(1635),
      kT = IT(26),
      WT = IT(1325),
      XT = IT(3232),
      BT = IT(1427),
      FT = IT(1357);
    const ST = 2592e5,
      DT = "notificationOptInLastPromptedAt";
    async function LT() {
      var TT;
      const oT = await xT();
      if (null === oT) return;
      const IT = null !== (TT = kT.e.getItem(DT)) && void 0 !== TT ? TT : 0;
      if (Date.now() - IT < ST) return;
      if ((0, FT.f)()) return;
      const iT = await WT.NotificationProvider.showPromptPopup({
        icon: "bell",
        title: "mobilePushNotifications:optInTitle",
        subtitle: zT.c.supports("notifications") ? "mobilePushNotifications:optInSubtitle" : "mobilePushNotifications:optInSubtitleBrowser",
        confirmText: "mobilePushNotifications:optInConfirm",
        cancelText: "mobilePushNotifications:optInCancel",
        padStartsOnCancel: !0
      }).getResult();
      "notificationTornDown" !== iT && (kT.e.setItem(DT, Date.now()), (0, BT.reportAnalyticsClick)({
        id: !0 === iT ? "push.allow" : "push.deny",
        value: zT.c.supports("notifications") ? "app" : "browser"
      }), !0 === iT && oT().catch((TT => {
        console.error("Failed to ask for push notifications:", TT)
      })))
    }
    async function xT() {
      return await zT.c.ready, zT.c.supports("notifications") ? iT.c.get("mobilePushNotificationsCanAsk") ? async () => {
        zT.c.request("notifications.requestPermission", {}).then((TT => {
          let {
            canAsk: oT
          } = TT;
          iT.c.set({
            mobilePushNotificationsCanAsk: oT
          })
        }), (TT => {
          console.error("The app couldn't ask for push notifications:", TT)
        }))
      }: null: await XT.b.canAsk() ? () => XT.b.requestPermission() : null
    }
  },
  8668: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => XT,
      e: () => BT
    });
    var iT = IT(12);
    const zT = 24,
      kT = "farNametags",
      WT = 1e5;

    function XT() {
      var TT;
      return null === (TT = iT.c.get("showDistantNametags")) || void 0 === TT || TT
    }

    function BT() {
      var TT;
      return null !== (TT = function() {
        const TT = new URLSearchParams(window.location.search).get(kT),
          oT = null === TT || "" === TT ? NaN : Number(TT);
        return Number.isFinite(oT) && oT >= 0 ? Math.min(oT, WT) : null
      }()) && void 0 !== TT ? TT : XT() ? 0 : zT
    }
  },
  8766: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => zT,
      d: () => WT
    });
    const iT = [{
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

    function zT(TT) {
      let oT, IT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof TT) {
        if (!Number.isFinite(TT)) return "0";
        if (Math.abs(TT) < 100) {
          const oT = TT < 0 ? "-" : "",
            IT = Math.abs(TT);
          return IT >= 10 ? `${oT}${IT.toFixed(1).replace(/\.0$/,"")}` : `${oT}${IT.toFixed(2).replace(/\.?0+$/,"")}`
        }
        oT = BigInt(Math.floor(TT))
      } else oT = TT;
      const zT = oT < 0n ? -oT : oT,
        kT = oT < 0n ? "-" : "",
        WT = zT.toString();
      if (WT.length <= IT) return `${kT}${WT}`;
      const XT = 3 * Math.floor((WT.length - 1) / 3);
      if (XT < 3) return `${kT}${WT}`;
      if (XT > 3 * iT.length) {
        const TT = WT[0],
          oT = WT.slice(1, 3).replace(/0+$/, "");
        return `${kT}${oT?`${TT}.${oT}`:TT}e${WT.length-1}`
      }
      const {
        threshold: BT,
        suffix: FT
      } = iT[iT.length - XT / 3], ST = zT / BT, DT = Number(1000n * (zT % BT) / BT), LT = Number(ST) + DT / 1e3;
      let xT;
      return xT = LT >= 100 ? Math.floor(LT).toString() : LT >= 10 ? LT.toFixed(1).replace(/\.0$/, "") : LT.toFixed(2).replace(/\.?0+$/, ""), `${kT}${xT}${FT}`
    }
    const kT = iT.map((TT => {
      let {
        threshold: oT,
        suffix: IT
      } = TT;
      return {
        threshold: Number(oT),
        suffix: IT
      }
    })).filter((TT => {
      let {
        threshold: oT
      } = TT;
      return Number.isFinite(oT)
    }));

    function WT(TT) {
      const oT = Math.abs(TT),
        IT = TT < 0 ? "-" : "";
      for (const {
          threshold: iT,
          suffix: zT
        }
        of kT)
        if (oT >= iT) {
          const TT = oT / iT;
          if (TT >= 1e3) return `${IT}${oT.toExponential(2).replace("e+","e")}`;
          let kT;
          return kT = TT >= 100 ? Math.floor(TT).toString() : TT >= 10 ? TT.toFixed(1).replace(/\.0$/, "") : TT.toFixed(2).replace(/\.?0+$/, ""), `${IT}${kT}${zT}`
        } return `${IT}${oT}`
    }
  },
  8754: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => ST,
      f: () => LT,
      h: () => DT,
      k: () => WT,
      n: () => FT,
      r: () => BT
    });
    var iT = IT(314);
    const zT = ["Wood Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table"],
      kT = {
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

    function WT(TT) {
      var oT;
      return null !== (oT = kT[TT]) && void 0 !== oT ? oT : {
        translationKey: ""
      }
    }
    const XT = {
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

    function BT(TT) {
      return zT.includes(TT)
    }

    function FT(TT) {
      var oT;
      return !0 === (null === TT || void 0 === TT || null === (oT = TT.customAttributes) || void 0 === oT ? void 0 : oT.cannotEnchant)
    }

    function ST(TT, oT) {
      const {
        max: IT
      } = XT[TT].at(-1);
      return oT <= IT
    }

    function DT(TT) {
      const oT = Math.sin(TT / 80),
        IT = TT => {
          if (TT <= 0) return 0;
          if (TT > 1) return 1;
          let oT = 0;
          const IT = [1, 7, 21, 35, 35, 21, 7, 1];
          for (let iT = 0; iT < IT.length; iT++) {
            oT += (iT % 2 === 0 ? 1 : -1) * IT[iT] * Math.pow(TT, 2 + iT) / (2 + iT)
          }
          return 72 * oT
        },
        iT = .3 - .78 * oT,
        zT = .5 - .78 * oT,
        kT = .6 - .7 * oT,
        WT = .8 - .6 * oT;
      let XT = IT(iT),
        BT = IT(zT) - XT,
        FT = IT(kT) - BT - XT,
        ST = IT(WT) - FT - BT - XT;
      iT < .041 && (BT /= 1 - XT, FT /= 1 - XT, ST /= 1 - XT, XT = 0), zT < .041 && (XT /= 1 - BT, FT /= 1 - BT, ST /= 1 - BT, BT = 0), kT < .041 && (XT /= 1 - FT, BT /= 1 - FT, ST /= 1 - FT, FT = 0), WT < .041 && (XT /= 1 - ST, BT /= 1 - ST, FT /= 1 - ST, ST = 0);
      return {
        commonProb: XT,
        uncommonProb: BT,
        rareProb: FT,
        epicProb: ST,
        legendaryProb: 1 - (ST + FT + BT + XT)
      }
    }

    function LT(TT, oT) {
      const {
        min: IT,
        max: zT
      } = XT[TT][oT], kT = iT.e.sampleUniformIntDistribution(IT, zT, "includeMax");
      return {
        ...DT(kT),
        level: kT
      }
    }
  },
  8715: () => {},
  8692: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAaUlEQVR4AWyOQQ6AIAwECwGNr/HkYzz4Hy9+WEkq01BDDCRDy3ZbGo9rU2c/V+1Bj9JOeW7RokaTBO0zpDxJXmYJKXjdohlwOqbWi4YaJFIgcYEIaGAT+JvHCDNQ8El9ziQz/BdzE00vAAAA//+cTXaSAAAABklEQVQDAHI9N5g1NM74AAAAAElFTkSuQmCC"
  },
  8695: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAGBJREFUGJVNjjEOxEAIA+dW22Rpk2+nSndPZFtMewU6FBdIjJHx536+ABARUl7XCbjvyV9mJqX7BtY6RkS0t9bRc0op5ZuaGTAqtPZCpfG+AqSs8FFlulh7s6j7rh9d9wclFjd0V4Z2HAAAAABJRU5ErkJggg=="
  },
  8699: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAbUlEQVR4nESOSwqAMAxEow0pive/gIcTBBdSsZh+NG20DlnkM8MLhnXuzHSnAwBaI8LIV2RXOiIkaGfMKfXGyByZparbyQZpGNUV/KaHGrWowZKVgSx8Qr8vzdXgAkYFCIn9mZP7E8pQ1Q9fzAMAAP//PTNTFgAAAAZJREFUAwAk1D9dXrbJngAAAABJRU5ErkJggg=="
  },
  8704: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAE1JREFUGJVNjsEOwDAIQp/GZv3/j+xx5zVbsh0wZFxEImCsc88RRwHsB5OaI8SA636hjwosNXSUWuRTphxp5iahHX+pozQs+Yt0rU1SPg0CIfgDMgomAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);