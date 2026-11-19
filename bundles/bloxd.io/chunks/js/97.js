export const id = 97;
export const ids = [97, 185];
export const modules = {
  8916: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      EverythingMenu: () => ib
    });
    var ID = cD(53),
      pD = cD(1049),
      iD = cD.n(pD),
      fD = cD(1192),
      bD = cD(1064),
      QD = cD(2031),
      wD = cD(1108),
      SD = cD(1093);

    function BD(DD) {
      let {
        items: CD,
        onClick: cD,
        selectedItemId: ID,
        className: pD,
        padStartsOnTab: BD = !0
      } = DD;
      const {
        t: yD
      } = (0, fD.F)(), MD = (0, wD.o)(), tD = [];
      for (const iD of CD) {
        var ZD;
        const DD = tD[tD.length - 1];
        var oD;
        if (DD && DD.title === (null !== (ZD = iD.section) && void 0 !== ZD ? ZD : null)) DD.items.push(iD);
        else tD.push({
          title: null !== (oD = iD.section) && void 0 !== oD ? oD : null,
          items: [iD]
        })
      }
      return (0, SD.jsx)("div", {
        className: iD()("MenuSideBarBody", pD),
        "data-pad-tabs": "2",
        children: tD.map(((DD, CD) => {
          var pD;
          return (0, SD.jsxs)("div", {
            className: "MenuSideBarSection",
            children: [DD.title && (0, SD.jsx)("div", {
              className: "MenuSideBarSectionTitle",
              children: yD(DD.title)
            }), DD.items.map((DD => {
              var CD;
              const pD = !!DD.iconElement || !!DD.faIcon;
              return (0, SD.jsxs)("div", {
                "data-pad-tab": !0,
                "data-pad-selected": ID === DD.id ? "true" : void 0,
                "data-pad-default-focus": BD && ID === DD.id || void 0,
                className: iD()("MenuSideBarBodyTab", {
                  ActiveMenuSideBarBodyTab: ID === DD.id
                }),
                onClick: () => {
                  cD(DD.id)
                },
                children: [pD && (0, SD.jsx)("div", {
                  className: "MenuSideBarBodyTabIcon",
                  children: null !== (CD = DD.iconElement) && void 0 !== CD ? CD : (0, SD.jsx)(bD.c, {
                    name: DD.faIcon
                  })
                }), (!MD || !pD) && (0, SD.jsx)("div", {
                  children: yD(DD.title)
                }), DD.redDot && (0, SD.jsx)(QD.e, {
                  top: "-0.2rem",
                  right: "-1rem"
                })]
              }, DD.id)
            }))]
          }, null !== (pD = DD.title) && void 0 !== pD ? pD : CD)
        }))
      })
    }
    var yD = cD(2790),
      MD = cD(1120),
      tD = cD(2358),
      ZD = cD(1113),
      oD = cD(1442),
      vD = cD(90),
      ND = cD(1905),
      gD = cD(2216),
      XD = cD(2224),
      mD = cD(1655),
      nD = cD(1328),
      OD = cD(4770),
      PD = cD(16),
      HD = cD(8925);

    function UD(DD) {
      let {
        setApplySettingsCallback: CD
      } = DD;
      const {
        clientEscMenuOptions: cD
      } = (0, PD.o)(["clientEscMenuOptions"]), [pD, iD] = (0, ID.useState)(!1), [fD, bD] = (0, ID.useState)(!1), [QD, wD] = (0, ID.useState)(6400), [BD, yD] = (0, ID.useState)(3600), [MD, tD] = (0, ID.useState)(!1), [ZD, vD] = (0, ID.useState)(!1);

      function ND(DD) {
        const CD = "screenshot" === DD ? bD : iD;
        CD(!0);
        const cD = MD ? "normals" : ZD ? "depth" : null;
        HD.devTools.downloadScene(DD, {
          width: QD,
          height: BD,
          colouring: cD
        }).catch((DD => {
          console.error("Couldn't download the scene", DD)
        })).finally((() => {
          CD(!1)
        }))
      }
      return (0, SD.jsxs)("div", {
        className: "DeveloperToolsCategory",
        children: [(0, SD.jsx)(OD.e, {
          label: "Disable Ambient Occlusion",
          checked: cD.disableAmbientOcclusion,
          onClick: DD => {
            PD.d.setClientEscMenuOptions({
              disableAmbientOcclusion: DD
            }), CD((() => OD.j))
          },
          circleInfoText: "Disables ambient occlusion which is the shadow effect that makes corners and crevices darker."
        }), HD.devTools.supports("ambientLight") && (0, SD.jsx)(OD.i, {
          name: "Ambient Lighting Intensity",
          min: 0,
          max: 1,
          step: .01,
          initValue: cD.ambientLightIntensity,
          onChange: DD => {
            HD.devTools.setAmbientLightIntensity(DD).then((() => {
              PD.d.setClientEscMenuOptions({
                ambientLightIntensity: DD
              })
            })).catch((DD => {
              console.error("Couldn't set the ambient light", DD)
            }))
          },
          circleInfoText: "Sets the intensity of the white ambient light in the scene. The default is 0.5."
        }), HD.devTools.supports("weaponRaycasts") && (0, SD.jsx)(OD.e, {
          label: "Show Weapon Raycasts",
          checked: cD.showWeaponRaycasts,
          onClick: DD => {
            PD.d.setClientEscMenuOptions({
              showWeaponRaycasts: DD
            })
          },
          circleInfoText: "Draws debug lines for the raw raycasts used by locally fired weapons."
        }), HD.devTools.supports("sceneDownload") && (0, SD.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, SD.jsxs)("div", {
            className: "SettingBox WarningBorder",
            children: [(0, SD.jsx)(OD.e, {
              label: "Apply normal-based coloring",
              checked: MD,
              onClick: DD => {
                tD(DD), DD && vD(!1)
              },
              circleInfoText: "Colors faces based on their normal direction (red=X, green=Y, blue=Z)."
            }), (0, SD.jsx)(OD.e, {
              label: "Apply depth-based coloring",
              checked: ZD,
              onClick: DD => {
                vD(DD), DD && tD(!1)
              },
              circleInfoText: "Colors from white (near) to black (far) based on distance from camera. Only works for screenshot export."
            }), (0, SD.jsxs)("div", {
              className: "SettingBox DeveloperToolsCategoryScreenshotSettings",
              children: [(0, SD.jsx)("div", {
                className: "SettingLabel",
                children: "Screenshot size in pixels (width x height)"
              }), (0, SD.jsx)(mD.b, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (DD, CD) => {
                  const cD = parseInt(DD) || 6400;
                  wD(cD)
                },
                placeholderText: "width",
                maxLength: 10,
                defaultValue: QD.toString()
              }), (0, SD.jsx)("span", {
                children: "X"
              }), (0, SD.jsx)(mD.b, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (DD, CD) => {
                  const cD = parseInt(DD) || 3600;
                  yD(cD)
                },
                placeholderText: "height",
                maxLength: 10,
                defaultValue: BD.toString()
              })]
            }), (0, SD.jsxs)("div", {
              className: "DeveloperToolsCategoryExportButtons",
              children: [(0, SD.jsxs)(oD.i, {
                onClick: () => {
                  ND("screenshot")
                },
                disabled: fD,
                children: [fD && (0, SD.jsx)(nD.e, {}), "Download Screenshot"]
              }), (0, SD.jsxs)(oD.i, {
                onClick: () => {
                  ND("glb")
                },
                disabled: pD,
                children: [pD && (0, SD.jsx)(nD.e, {}), "Download GLB"]
              })]
            })]
          }), (0, SD.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: 'To download GLB of scene with textures you need to "Disable Block Texture Atlas" in graphic settings first (you will need to reload the page to apply the setting).'
          })]
        })]
      })
    }
    var xD = cD(120),
      qD = cD(1127),
      JD = cD(1199),
      KD = cD(2799),
      aD = cD(1508),
      VD = cD(1266),
      zD = cD(1232),
      jD = cD(2886),
      lD = cD(2015),
      LD = cD(1497),
      TD = cD(326),
      GD = cD(2228),
      RD = cD(2238),
      kD = cD(2572),
      dD = cD(1629),
      YD = cD(2867),
      WD = cD(2837),
      sD = cD(2893),
      ED = cD(208);

    function eD(DD) {
      const {
        t: CD,
        selectedLanguage: cD
      } = (0, fD.F)(), {
        userContext: pD
      } = (0, MD.c)(), {
        superRankInfo: iD
      } = pD, bD = DD && ((0, TD.Ac)(iD) || pD.ranksMayChange) && (0, RD.purchasesAllowed)(), {
        accountId: QD,
        data: wD
      } = (0, kD.h)(YD.e, bD);
      if ((0, ID.useEffect)((() => {
          if (bD) return YD.e.watchAccount(), dD.e.addRefetchListener("billing", (DD => {
            "reconnected" === DD ? YD.e.refreshAfterReconnect() : YD.e.refresh()
          }))
        }), [bD]), !bD || !(0, TD.Ac)(iD) || null === wD || QD !== pD.whamm) return null;
      const SD = function(DD, CD, cD) {
        const ID = sD.i[(0, sD.d)(sD.i, CD)],
          pD = void 0 === ID ? void 0 : (0, ED.c)(DD.entitlements, ID.entitlementId);
        return void 0 === pD || null === pD.expiresAt || (0, WD.e)(pD) <= cD ? null : pD.willRenew && null === pD.billingIssueDetectedAt ? {
          renews: !0,
          at: Math.max(pD.expiresAt, cD)
        } : {
          renews: !1,
          at: (0, WD.e)(pD)
        }
      }(wD, iD.tier, Date.now());
      if (null === SD) return null;
      const BD = SD.renews ? "store:renewsOn" : "store:endsOn";
      return CD(BD, {
        date: new Date(SD.at).toLocaleDateString((0, fD.m)(cD.code, BD), {
          year: "numeric",
          month: "short",
          day: "numeric"
        })
      })
    }
    var uD = cD(1356),
      hD = cD(1210),
      rD = cD(4648),
      AD = cD(1471),
      FD = cD(3467),
      DC = cD(2205);

    function CC(DD) {
      let {
        showing: CD
      } = DD;
      const {
        t: cD
      } = (0, fD.F)(), {
        data: ID,
        failed: pD
      } = (0, kD.h)(FD.h, CD);
      return 0 === (null === ID || void 0 === ID ? void 0 : ID.length) || null === ID && !pD ? null : (0, SD.jsxs)("div", {
        className: "SettingBox AccountSettingsPaymentHistory",
        children: [(0, SD.jsx)("div", {
          className: "AccountSettingsLabel",
          children: cD("paymentHistory:title")
        }), null === ID && pD && (0, SD.jsx)("div", {
          className: "AccountSettingsPaymentHistoryError",
          children: cD("paymentHistory:loadFailed")
        }), null !== ID && (0, SD.jsx)("ul", {
          className: "PaymentHistoryList",
          children: ID.map((DD => (0, SD.jsxs)("li", {
            className: "PaymentHistoryEntry",
            children: [(0, SD.jsx)(DC.d, {
              entry: DD
            }), (0, SD.jsxs)("div", {
              className: "PaymentHistoryEntryText",
              children: [(0, SD.jsx)("div", {
                children: (0, DC.i)(cD, DD)
              }), (0, SD.jsxs)("div", {
                className: "PaymentHistoryEntryDate",
                children: [new Date(DD.at).toLocaleDateString(), "number" === typeof DD.orderId && ` \xb7 ${cD("paymentHistory:order",{orderId:DD.orderId})}`]
              })]
            })]
          }, (0, FD.e)(DD))))
        })]
      })
    }
    var cC = cD(1857),
      IC = cD(1243),
      pC = cD(1340),
      iC = cD(1305),
      fC = cD(1763),
      bC = cD(2821);
    async function QC() {
      try {
        return function(DD) {
          const CD = new Map;
          for (const {
              store: cD,
              status: ID,
              autoRenewStatus: pD,
              managementUrl: iD
            }
            of Object.values(DD.subscriptions)) !(0, WD.g)(cD) || (0, WD.j)(ID) || "willNotRenew" === pD || CD.has(cD) || CD.set(cD, null !== iD && void 0 !== iD ? iD : WD.l[cD]);
          return Array.from(CD, (DD => {
            let [CD, cD] = DD;
            return {
              store: CD,
              managementUrl: cD
            }
          }))
        }(await (0, fC.k)((0, bC.h)().getCustomerInfo(), 5e3, "CustomerInfo got no answer in 5 s"))
      } catch (DD) {
        return console.error("Billing: loading CustomerInfo for the player's store subscriptions failed:", DD), null
      }
    }
    var wC = cD(312),
      SC = cD(2414);
    const BC = {
      appStore: {
        name: "App Store",
        ...wC.Wb.appStore
      },
      googlePlay: {
        name: "Google Play",
        ...wC.Wb.googlePlay
      },
      discord: {
        name: "Discord",
        ...wC.Wb.discord
      }
    };

    function yC(DD) {
      let {
        warning: CD,
        subscriptions: cD
      } = DD;
      const {
        t: ID
      } = (0, fD.F)();
      return null !== cD && 0 === cD.length ? (0, SD.jsx)(SD.Fragment, {
        children: ID(CD)
      }) : (0, SD.jsxs)("div", {
        className: "DeleteAccountSubtitle",
        children: [ID(CD), null === cD && (0, SD.jsx)("div", {
          className: "DeleteAccountSubtitleNote",
          children: ID("auth:deleteAccountSubscriptionsLoadFailed")
        }), null !== cD && (0, SD.jsxs)(SD.Fragment, {
          children: [(0, SD.jsx)("div", {
            className: "DeleteAccountSubtitleNote",
            children: ID("auth:deleteAccountStoreSubscriptions")
          }), (0, SD.jsx)(SC.b, {
            className: "DeleteAccountSubtitleLinks",
            links: cD.map((DD => {
              let {
                store: CD,
                managementUrl: cD
              } = DD;
              return {
                ...BC[CD],
                url: cD
              }
            }))
          })]
        })]
      })
    }

    function MC(DD) {
      let {
        showing: CD
      } = DD;
      const {
        userContext: cD,
        isUserContextUpdating: pD
      } = (0, MD.c)(), {
        t: iD
      } = (0, fD.F)(), [bD, QD] = (0, ID.useState)(!1), [wD, BD] = (0, ID.useState)(null), yD = (0, ID.useRef)(CD);
      (0, ID.useEffect)((() => (yD.current = CD, () => {
        yD.current = !1
      })), [CD]);
      const tD = pD || bD;
      async function ZD() {
        const DD = function(DD) {
            if ((0, xD.c)()) return "auth:discordActivityDeleteAccountWarning";
            return DD ? "auth:deleteAccountWarning" : "auth:deleteGuestAccountWarning"
          }(cD.isLoggedIn()),
          CD = (0, cC.e)(cD.availableUserContextTypes) ? await QC() : [];
        if (!yD.current) return IC.e.ok();
        if (!0 !== await pC.NotificationProvider.showPromptPopup({
            title: "auth:deleteAccountPopupTitleNamed",
            textOpts: {
              title: {
                playerName: (0, VD.d)(cD.getPlayerName(), !vD.featureFlags.canSeeRealPlayerNames)
              }
            },
            subtitle: (0, SD.jsx)(yC, {
              warning: DD,
              subscriptions: CD
            }),
            confirmText: "auth:deleteAccount",
            destructive: !0,
            confirmTooltip: "auth:deleteAccountPopupConfirmTooltip",
            cancelText: "general:cancel",
            cancelTooltip: "auth:deleteAccountPopupCancelTooltip"
          }).getResult()) return IC.e.ok();
        const ID = await (0, qD.postJsonWithMetricsCookiesAndJsonResponse)(`${JD.clientSideServerUrls.indexUrl}/index/metrics/revoke-cookies`, {
          gameState: PD.d.get("gameState")
        }, {
          retries: 3
        }, cD.getMetricsCookies());
        if (ID.error) return IC.e.error(ID.error);
        if ((0, xD.c)()) {
          (await iC.i.discordActivity()).exit("User deleted their account")
        }
        return (0, qD.forgetStoredGuestAccount)(cD.whamm), (0, qD.forceGlobalSignOut)(!0), IC.e.ok()
      }
      return (0, SD.jsxs)("div", {
        className: "AccountSettingsDeleteAccountButtonContainer",
        children: [(0, SD.jsxs)(oD.J, {
          onClick: async function() {
            if (!bD) {
              QD(!0);
              try {
                const DD = await ZD(),
                  CD = DD.isError() ? DD.asError().message : null;
                BD(CD)
              } catch (DD) {
                console.error("Failed to delete account:", DD), BD(iD("auth:genericDeleteAccountError"))
              }
              QD(!1)
            }
          },
          className: "AccountSettingsDeleteAccountButton",
          disabled: tD,
          children: [tD && (0, SD.jsx)("div", {
            className: "DeletingAccountLoader",
            children: (0, SD.jsx)(nD.e, {})
          }), iD("auth:deleteAccount")]
        }), wD && (0, SD.jsx)("div", {
          className: "DeleteAccountError",
          children: wD
        })]
      })
    }
    var tC = cD(3395),
      ZC = cD(3410),
      oC = cD(3406);

    function vC(DD) {
      let {
        showing: CD
      } = DD;
      const {
        t: cD
      } = (0, fD.F)(), {
        data: ID,
        failed: pD
      } = (0, kD.h)(tC.b, CD), iD = null === ID ? null : (0, tC.d)(ID);
      return (0, SD.jsxs)("div", {
        className: "SettingBox BlockedAndIgnoredPlayers",
        children: [(0, SD.jsx)("div", {
          className: "AccountSettingsLabel",
          children: cD("settingsMenu:blockedAndIgnoredPlayers")
        }), null === iD && !pD && (0, SD.jsx)(nD.e, {}), null === iD && pD && (0, SD.jsxs)("div", {
          className: "BlockedAndIgnoredPlayersError",
          children: [cD("settingsMenu:blockedAndIgnoredPlayersLoadFailed"), (0, SD.jsx)(oD.i, {
            className: "SmallTextLight",
            onClick: () => {
              tC.b.refresh()
            },
            children: cD("general:tryAgain")
          })]
        }), 0 === (null === iD || void 0 === iD ? void 0 : iD.length) && (0, SD.jsx)("div", {
          className: "BlockedAndIgnoredPlayersEmpty",
          children: cD("settingsMenu:noBlockedOrIgnoredPlayers")
        }), null !== iD && iD.length > 0 && (0, SD.jsx)("ul", {
          className: "BlockedAndIgnoredPlayersList",
          children: iD.map((DD => {
            let {
              name: CD,
              exclusion: ID
            } = DD;
            const pD = oC.f[ID];
            return (0, SD.jsxs)("li", {
              className: "BlockedAndIgnoredPlayer",
              children: [(0, SD.jsx)("div", {
                className: "BlockedAndIgnoredPlayerName",
                children: CD
              }), (0, SD.jsx)(oD.k, {
                className: "SmallTextLight",
                onClick: () => {
                  (0, ZC.f)(pD, CD, {
                    chatMessage: null
                  })
                },
                children: cD(oC.g[pD].text)
              })]
            }, CD)
          }))
        })]
      })
    }
    const NC = (0, ID.memo)((function(DD) {
      var CD;
      let {
        showing: cD,
        inGame: pD
      } = DD;
      const {
        t: QD,
        selectedLanguage: wD
      } = (0, fD.F)(), {
        hideSocialLocationFrom: BD
      } = (0, PD.o)(["hideSocialLocationFrom"]), tD = (0, yD.b)(), {
        userContext: ZD,
        isUserContextUpdating: ND
      } = (0, MD.c)(), [gD, XD] = (0, ID.useState)(null !== (CD = ZD.getPlayerName()) && void 0 !== CD ? CD : ""), [HD, UD] = (0, ID.useState)(null), {
        purchasing: kD,
        outcome: dD,
        purchase: YD
      } = (0, KD.e)("/super-rank-welcome"), WD = (0, TD.hc)((0, fD.m)(wD.code, "general:timeLeft"), ZD.superRankInfo), sD = eD(cD), ED = WD ? QD("general:timeLeft", {
        time: WD
      }) : sD, [FD, DC] = (0, ID.useState)(!1), [cC, IC] = (0, ID.useState)(!1), pC = (0, ID.useRef)(null), iC = (0, ID.useRef)(null), fC = (0, lD.e)({
        showProgressUpdateMessage: !0,
        enabled: !0
      }), bC = null === fC, QC = null !== fC && void 0 !== fC ? fC : [], wC = ZD !== qD.NULL_USER_CONTEXT && !ZD.isLoggedIn(), SC = wC && 0 !== (null === fC || void 0 === fC ? void 0 : fC.length), [BC, yC] = (0, ID.useState)([]), [tC, ZC] = (0, ID.useState)(!1), oC = ZD.playerHasRank("youtuber"), NC = (0, ID.useCallback)((() => LD.c.getPlayerProfile(ZD, {
        lowerCaseName: ZD.getPlayerName().toLowerCase()
      }).then((DD => {
        yC(DD.socialLinks)
      })).catch((DD => {
        console.error("Failed to refresh social links", DD)
      }))), [ZD]);

      function XC(DD) {
        DD !== gD && ((0, VD.k)(DD) ? (DD = (0, VD.o)(DD), UD("Only letters, numbers, and _")) : UD(null), pC.current && (pC.current.value = DD), XD(DD))
      }
      return (0, ID.useEffect)((() => (!0 === cD ? (clearInterval(iC.current), iC.current = setInterval(tD, 1e3)) : clearInterval(iC.current), () => {
        clearInterval(iC.current)
      })), [cD, tD]), (0, ID.useEffect)((() => {
        var DD;
        XD(null !== (DD = ZD.getPlayerName()) && void 0 !== DD ? DD : "")
      }), [ZD]), (0, ID.useEffect)((() => {
        if (!cD || !oC || ND) return;
        let DD = !1;
        return ZC(!0), yC([]), LD.c.getPlayerProfile(ZD, {
          lowerCaseName: ZD.getPlayerName().toLowerCase()
        }).then((CD => {
          DD || yC(CD.socialLinks)
        })).catch((DD => {
          console.error("Failed to load social links", DD)
        })).finally((() => {
          DD || ZC(!1)
        })), () => {
          DD = !0
        }
      }), [cD, oC, ND, ZD]), (0, SD.jsxs)("div", {
        className: iD()("SettingsMenuRightInner AccountSettings", {
          AccountSettingsLocked: pD
        }),
        children: [pD && (0, SD.jsx)("div", {
          className: "AccountSettingsInGameWarning",
          children: QD("settingsMenu:accountSettingsInGameWarning")
        }), (0, SD.jsxs)("div", {
          className: "SettingBox SetAccountNameDiv SmallTextLight",
          children: [(0, SD.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsNameLabel",
            children: [QD("homePage:discordNamePopupTitle"), (0, SD.jsxs)(aD.LinkPreserveSearch, {
              className: "AccountSettingsViewProfile",
              to: (0, zD.h)({
                name: ZD.getPlayerName()
              }),
              onClick: () => {
                PD.d.set({
                  openEverythingMenuName: null
                })
              },
              children: [(0, SD.jsx)(bD.c, {
                name: "arrow-up-right-from-square"
              }), " ", QD("profileCard:viewProfile")]
            })]
          }), (0, SD.jsxs)("div", {
            className: "EnterAccNameDivWrapper",
            "data-pad-initial-area": !0,
            children: [(0, SD.jsxs)("div", {
              className: "EnterAccNameInputRow",
              children: [vD.featureFlags.canChangeName && (0, SD.jsx)(mD.b, {
                className: "EnterName",
                placeholderText: QD("homePage:enterName"),
                maxLength: VD.i,
                defaultValue: gD,
                onValueChange: DD => {
                  XC(DD)
                },
                forcedText: FD || !vD.featureFlags.canChangeName ? gD : null,
                blurOnEnter: !0,
                domRef: pC
              }), (0, SD.jsx)(oD.i, {
                className: "ChooseRandomNameButton",
                onClick: () => {
                  XC((0, VD.h)())
                },
                children: (0, SD.jsx)(bD.c, {
                  name: "dice",
                  className: "ChooseRandomNameIcon"
                })
              }), !vD.featureFlags.canChangeName && (0, SD.jsx)("div", {
                className: "EnterName NoInput",
                children: (0, VD.d)(gD, !vD.featureFlags.canSeeRealPlayerNames)
              })]
            }), (0, SD.jsx)(oD.i, {
              className: "ChooseNameButton",
              disabled: FD || gD === ZD.getPlayerName(),
              onClick: () => {
                gD.length < VD.j ? UD(QD("homePage:changeNameMinLengthError", {
                  length: VD.j
                })) : gD.length > VD.i ? UD(QD("homePage:changeNameMaxLengthError", {
                  length: VD.i
                })) : (DC(!0), UD(null), async function(DD, CD, cD, ID) {
                  const pD = await (0, qD.postJsonWithMetricsCookiesAndJsonResponse)(`${JD.clientSideServerUrls.indexUrl}/index/name/update`, {
                    name: DD
                  }, {
                    retries: 3
                  }, CD.getMetricsCookies()).catch((DD => (console.error("Bad response from the server when trying to update name:", DD), {
                    err: "An error occurred trying to change your name! Please report on discord what steps you took to get this error message."
                  })));
                  pD.err ? (console.error("Error when trying to get with new name from DB", pD.err), ID(pD.err)) : !0 === pD.nameExists ? ID("Name is already taken") : cD(DD)
                }(gD, ZD, (DD => {
                  ZD.setPlayerName(DD), DC(!1)
                }), (DD => {
                  UD(DD), DC(!1)
                })))
              },
              children: QD("general:choose")
            })]
          }), HD && (0, SD.jsx)("div", {
            className: "ChooseAccNameError",
            children: HD
          })]
        }), (0, SD.jsx)(OD.e, {
          label: (() => {
            if ((0, hD.o)(BD)) {
              const DD = (0, fD.m)(wD.code, "general:timeLeft"),
                CD = (0, TD.cb)(DD, Date.now(), BD + hD.l);
              return `${QD("settingsMenu:hideSocialLocation")} (${QD("general:timeLeft",{time:CD})})`
            }
            return QD("settingsMenu:hideSocialLocation")
          })(),
          onClick: () => {
            const DD = !(0, hD.o)(BD);
            (0, AD.reportAnalyticsClick)({
              id: "social.hide_location",
              value: DD ? "on" : "off"
            }), IC(!0), LD.c.setHideSocialLocation(ZD, DD).then((() => {
              PD.d.set({
                hideSocialLocationFrom: DD ? Date.now() : null
              })
            })).finally((() => {
              IC(!1)
            }))
          },
          checked: (0, hD.o)(BD),
          disabled: cC
        }), oC && (0, SD.jsxs)("div", {
          className: "SettingBox AccountSettingsSocialLinks",
          children: [(0, SD.jsx)("div", {
            className: "AccountSettingsLabel",
            children: QD("settingsMenu:socialLinks")
          }), tC && (0, SD.jsx)(nD.e, {}), !tC && (0, SD.jsx)(rD.c, {
            socialLinks: BC,
            editable: !0,
            userContext: ZD,
            onLinksUpdated: NC
          })]
        }), (0, SD.jsxs)("div", {
          className: "SettingBox",
          children: [(0, SD.jsx)("div", {
            className: "AccountSettingsLabel",
            children: QD(SC ? "auth:loginOrSwitchAccount" : "auth:login")
          }), bC && (0, SD.jsx)(nD.e, {}), !bC && 0 === QC.length && (0, SD.jsx)("div", {
            className: "NoLoginOptions",
            children: QD("auth:noLoginOptions")
          }), !bC && QC.length > 0 && "crazygames" !== xD.p && (0, SD.jsx)("div", {
            className: "AccountSettingsLoginButtons",
            children: QC
          }), !bC && QC.length > 0 && "crazygames" === xD.p && (0, SD.jsxs)("div", {
            className: "AccountSettingsLoginButtons",
            children: [QC[0], QC.length > 1 && (0, SD.jsxs)(SD.Fragment, {
              children: [(0, SD.jsxs)("div", {
                className: "LegacyLoginOptionsHeader",
                children: [(0, SD.jsx)("span", {
                  className: "LegacyLoginOptionsTitle",
                  children: QD("auth:legacyLoginOptions")
                }), (0, SD.jsx)(uD.d, {
                  className: "LegacyLoginOptionsInfoIcon",
                  hoverInfo: QD("auth:legacyLoginOptionsInfo")
                })]
              }), (0, SD.jsx)("div", {
                className: "LegacyAccountSettingsLoginButtons",
                children: QC.slice(1)
              })]
            })]
          }), vD.featureFlags.useLogin && (null !== ZD.loggedInInfo || ZD.isLoggedIn()) && (0, SD.jsxs)(SD.Fragment, {
            children: [(0, SD.jsx)("div", {
              className: "AccountSettingsLoginDivider"
            }), (0, SD.jsxs)(oD.J, {
              onClick: () => {
                (0, qD.forceGlobalSignOut)()
              },
              className: "AccountSettingsSignedInButton",
              children: [(0, SD.jsx)(bD.c, {
                name: "right-from-bracket"
              }), QD("auth:signOut")]
            })]
          })]
        }), !ZD.playerHasRank("super") && (0, RD.purchasesAllowed)() && (0, SD.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, SD.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, SD.jsx)(bD.c, {
              name: "bolt"
            }), QD("homePage:superRank")]
          }), (0, SD.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [(0, SD.jsxs)(oD.o, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, GD.p)({
                  mode: "self",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, SD.jsx)(bD.c, {
                name: "bolt"
              }), QD("homePage:getSuperRank")]
            }), (0, SD.jsxs)(oD.o, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, GD.p)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, SD.jsx)(bD.c, {
                name: "bolt"
              }), QD("homePage:giftSuperRank")]
            })]
          })]
        }), ZD.playerHasRank("super") && (0, SD.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, SD.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, SD.jsx)(bD.c, {
              name: "bolt"
            }), QD("homePage:superRank"), ED && (0, SD.jsxs)("div", {
              className: "AccountSettingsSuperRankTimeLeft",
              children: ["(", ED, ")"]
            })]
          }), (0, RD.purchasesAllowed)() && (0, SD.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [!(0, TD.Ac)(ZD.superRankInfo) && (0, SD.jsxs)(oD.o, {
              className: "AccountSettingsSuperRankProlong",
              loading: kD,
              onClick: () => {
                YD(jD.g.id, null)
              },
              children: [(0, SD.jsx)(bD.c, {
                name: "bolt"
              }), QD("settingsMenu:getSuperRankAdditionalDaysPremiumCurrency", {
                days: jD.g.product.days,
                price: jD.g.price
              })]
            }), (0, SD.jsxs)(oD.o, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, GD.p)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, SD.jsx)(bD.c, {
                name: "bolt"
              }), QD("homePage:giftSuperRank")]
            })]
          }), dD && (0, SD.jsx)("div", {
            className: "AccountSettingsSuperRankProlongError SmallTextBold",
            children: QD(dD.translationKey)
          })]
        }), (0, SD.jsx)(CC, {
          showing: cD
        }), vD.featureFlags.useSocialFeatures && (0, SD.jsx)(vC, {
          showing: cD
        }), (0, SD.jsxs)("div", {
          className: "SettingBoxGroup AccountSettingsDeleteAccountGroup",
          children: [(0, SD.jsxs)("div", {
            className: "SettingBox AccountSettingsDeleteAccount SettingBoxWarning",
            children: [(0, SD.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: QD(gC(wC, SC))
            }), (0, xD.c)() && (0, SD.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: QD("auth:discordActivityKickWarning")
            }), (0, SD.jsx)(MC, {
              showing: cD
            })]
          }), (0, SD.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: QD("auth:deleteAccountWarning")
          })]
        })]
      })
    }));

    function gC(DD, CD) {
      return DD ? CD ? "auth:deleteGuestAccountButtonTitle" : "auth:deleteGuestAccountWarning" : "auth:deleteAccountButtonTitle"
    }
    var XC = cD(8940),
      mC = cD(2921),
      nC = cD(1250),
      OC = cD(1425);
    const PC = (0, ID.memo)((function(DD) {
        let {
          inGame: CD
        } = DD;
        const {
          t: cD,
          selectedLanguage: ID
        } = (0, fD.F)(), {
          clientEscMenuOptions: pD,
          showDebugOverlay: iD
        } = (0, PD.o)(["clientEscMenuOptions", "showDebugOverlay"]), bD = (0, tD.h)("hideCoordinates");
        let QD = "settingsMenu:showCoordinates",
          wD = "settingsMenu:showChunkCoordinates";

        function BD(DD) {
          const CD = new Intl.DisplayNames([DD], {
            type: "language"
          }).of(DD);
          return CD.charAt(0).toUpperCase() + CD.slice(1)
        }
        return bD && (QD = "settingsMenu:showCoordinatesHidden", wD = "settingsMenu:showChunkCoordinatesHidden"), (0, SD.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [CD && vD.featureFlags.canUseInviteLinks && (0, SD.jsxs)("div", {
            className: "SettingBox",
            children: [(0, SD.jsx)("div", {
              className: "SettingsMenuInviteHeader",
              children: cD("settingsMenu:inviteLink")
            }), (0, SD.jsx)(XC.h, {})]
          }), (0, SD.jsxs)("div", {
            className: "SettingBox",
            children: [(0, SD.jsx)("div", {
              className: "SliderText",
              style: {
                marginBottom: "10px"
              },
              children: cD("settingsMenu:language")
            }), (0, SD.jsx)(mC.b, {
              options: Object.entries(fD.f).map((DD => {
                let [CD, cD] = DD;
                return {
                  label: (0, SD.jsxs)("div", {
                    className: "SettingsMenuLanguageOption",
                    children: [(0, SD.jsx)("img", {
                      src: cD.flagImg,
                      alt: "flag"
                    }), (0, SD.jsxs)("span", {
                      children: [BD(CD), " ", (0, SD.jsxs)("span", {
                        className: "SettingsMenuLanguageOptionCode",
                        children: ["(", CD, ")"]
                      })]
                    })]
                  }),
                  value: CD
                }
              })),
              value: ID.code,
              onChange: DD => {
                nC.e.get().setCurrentLanguage(DD.value)
              }
            })]
          }), !(0, vD.isMobileApp)() && (0, OC.c)() && vD.featureFlags.useForceRotateForceFullscreenOverlay && (0, SD.jsx)(OD.e, {
            label: cD("settingsMenu:disableFullscreenMode"),
            checked: pD.disableFullscreen,
            onClick: DD => {
              PD.d.setClientEscMenuOptions({
                disableFullscreen: DD
              })
            }
          }), (0, SD.jsx)(OD.e, {
            label: cD(QD),
            checked: pD.showCoordinates,
            onClick: DD => {
              PD.d.setClientEscMenuOptions({
                showCoordinates: DD
              })
            },
            disabled: bD
          }), (0, SD.jsx)(OD.e, {
            label: cD(wD),
            checked: pD.showChunkCoordinates,
            onClick: DD => {
              PD.d.setClientEscMenuOptions({
                showChunkCoordinates: DD
              })
            },
            disabled: bD
          }), (0, SD.jsx)(OD.e, {
            label: cD("settingsMenu:showFps"),
            checked: pD.showFPS,
            onClick: DD => {
              PD.d.setClientEscMenuOptions({
                showFPS: DD
              })
            }
          }), (0, SD.jsx)(OD.e, {
            label: cD("settingsMenu:disableBunnyHopping"),
            checked: pD.disableBunnyHopping,
            onClick: DD => {
              PD.d.setClientEscMenuOptions({
                disableBunnyHopping: DD
              })
            }
          }), (0, iC.t)() && (0, SD.jsx)(OD.e, {
            label: cD("settingsMenu:showChat"),
            checked: pD.showChat,
            onClick: DD => {
              PD.d.setClientEscMenuOptions({
                showChat: DD
              })
            }
          }), (0, SD.jsx)(OD.e, {
            label: cD("settingsMenu:showDebugOverlay"),
            checked: iD,
            onClick: DD => {
              PD.d.set({
                showDebugOverlay: DD
              })
            }
          }), vD.featureFlags.useSocialFeatures && (0, SD.jsx)(OD.e, {
            label: cD("settingsMenu:showFriendOnlineToasts"),
            checked: pD.showFriendOnlineToasts,
            onClick: DD => {
              PD.d.setClientEscMenuOptions({
                showFriendOnlineToasts: DD
              })
            }
          }), (0, SD.jsx)(OD.e, {
            label: cD("settingsMenu:showNewItemIndicator"),
            checked: pD.showNewItemIndicator,
            onClick: DD => {
              PD.d.setClientEscMenuOptions({
                showNewItemIndicator: DD
              })
            }
          })]
        })
      })),
      HC = (0, ID.memo)((function() {
        const {
          t: DD
        } = (0, fD.F)(), {
          soundVolume: CD,
          musicVolume: cD
        } = (0, PD.o)(["soundVolume", "musicVolume"]);
        return (0, SD.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, SD.jsx)(OD.i, {
            name: DD("settingsMenu:musicVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: cD,
            onChange: DD => {
              PD.d.set({
                musicVolume: Math.round(100 * DD) / 100
              })
            },
            format: DD => DD.toFixed(2)
          }), (0, SD.jsx)(OD.i, {
            name: DD("settingsMenu:soundEffectsVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: CD,
            onChange: DD => {
              PD.d.set({
                soundVolume: Math.round(100 * DD) / 100
              })
            },
            format: DD => DD.toFixed(2)
          })]
        })
      }));
    var UC = cD(723),
      xC = cD(1440),
      qC = cD(3479),
      JC = cD(8944),
      KC = cD(3306);
    const aC = {
      app: "notificationSettings:pushTargetsApp",
      browser: "notificationSettings:pushTargetsBrowser",
      msnPlay: "notificationSettings:pushTargetsMsnPlay"
    };

    function VC() {
      const {
        t: DD
      } = (0, fD.F)(), CD = (0, KC.d)(), {
        mobilePushNotificationsCanAsk: cD
      } = (0, PD.o)(["mobilePushNotificationsCanAsk"]), [pD, iD] = (0, ID.useState)(null), [bD, QD] = (0, ID.useState)(!1), [wD, BD] = (0, ID.useState)(null), [yD, MD] = (0, ID.useState)(!1), tD = (0, ID.useCallback)((() => {
        (0, qC.c)().then((DD => {
          CD.current && (iD(DD), QD(!1))
        })).catch((DD => {
          console.error("Failed to load push notification targets:", DD), CD.current && QD(!0)
        }))
      }), [CD]), ZD = (0, ID.useCallback)((() => {
        (0, JC.d)().then((DD => {
          CD.current && BD((() => DD))
        }))
      }), [CD]);
      (0, ID.useEffect)((() => {
        tD()
      }), [tD]), (0, ID.useEffect)((() => {
        ZD()
      }), [ZD, cD]), (0, xC.f)(qC.g, tD);
      const vD = null === pD ? [] : Object.keys(aC).filter((DD => pD[DD] > 0));
      return (0, SD.jsxs)("div", {
        className: "SettingBox PushNotificationSettings",
        children: [(0, SD.jsx)("div", {
          className: "SliderText",
          children: DD("notificationSettings:pushNotifications")
        }), null === pD && bD && (0, SD.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: DD("notificationSettings:pushTargetsLoadFailed")
        }), null !== pD && 0 === vD.length && (0, SD.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: DD("notificationSettings:pushTargetsNone")
        }), vD.length > 0 && (0, SD.jsx)("ul", {
          className: "PushNotificationSettingsTargets",
          children: vD.map((CD => {
            var cD;
            return (0, SD.jsx)("li", {
              children: DD(aC[CD], {
                count: null !== (cD = null === pD || void 0 === pD ? void 0 : pD[CD]) && void 0 !== cD ? cD : 0
              })
            }, CD)
          }))
        }), null !== wD && (0, SD.jsx)(oD.i, {
          className: "PushNotificationSettingsButton",
          loading: yD,
          onClick: () => {
            MD(!0), wD().catch((DD => {
              console.error("Failed to turn on push notifications:", DD)
            })).finally((() => {
              CD.current && (MD(!1), ZD())
            }))
          },
          children: DD("notificationSettings:pushTurnOn")
        })]
      })
    }
    const zC = {
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
      jC = (0, ID.memo)((function() {
        const {
          t: DD
        } = (0, fD.F)(), {
          clientEscMenuOptions: CD
        } = (0, PD.o)(["clientEscMenuOptions"]);
        return (0, SD.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, SD.jsx)(OD.g, {
            label: DD("notificationSettings:friendRequests"),
            options: UC.e.map((CD => ({
              value: CD,
              label: DD(zC[CD].label)
            }))),
            value: CD.friendRequestNotifications,
            onChange: DD => {
              PD.d.setClientEscMenuOptions({
                friendRequestNotifications: DD
              })
            },
            circleInfoText: (0, SD.jsx)("div", {
              className: "NotificationSettingLevelsInfo",
              children: UC.e.map((CD => (0, SD.jsxs)("div", {
                children: [(0, SD.jsx)("b", {
                  children: DD(zC[CD].label)
                }), ": ", DD(zC[CD].info)]
              }, CD)))
            })
          }), (0, SD.jsx)(VC, {})]
        })
      }));
    var lC = cD(4301),
      LC = cD(194),
      TC = cD(298),
      GC = cD(6409),
      RC = cD(3255),
      kC = cD(8950),
      dC = cD(624),
      YC = cD(20);
    var WC = cD(646),
      sC = cD(36),
      EC = cD(4184);
    const eC = new Map([
      ["chunkHorizAddDist", "horizontal"],
      ["chunkVertAddDist", "vertical"]
    ]);

    function uC(DD) {
      return eC.has(DD) ? ND.gameBridge.lookup("Om", null) : null
    }

    function hC(DD) {
      if (!(0, dC.C)(PD.d.get("clientEscMenuOptions")[DD])) return PD.d.get("clientEscMenuOptions")[DD];
      const CD = uC(DD);
      return null !== CD ? CD[eC.get(DD)] : sC.h.getItem(DD)
    }

    function rC(DD, CD) {
      if ("useTouchControls" === DD) return void(0, EC.b)(CD);
      DD in PD.d.get("clientEscMenuOptions") && PD.d.setClientEscMenuOptions({
        [DD]: CD
      });
      const cD = uC(DD);
      null !== cD && ND.gameBridge.send("setChunkAddDistance", {
        ...cD,
        [eC.get(DD)]: CD
      }), sC.h.setItem(DD, CD)
    }
    var AC = cD(4220),
      FC = cD(8958),
      Dc = cD(8967),
      Cc = cD(4296);

    function cc(DD) {
      var CD, pD, bD, QD;
      let {
        minChunkAddDist: wD,
        getValue: BD,
        onChange: yD,
        setApplySettingsCallback: MD
      } = DD;
      const {
        t: ZD
      } = (0, fD.F)(), {
        clientEscMenuOptions: oD
      } = (0, PD.o)(["clientEscMenuOptions", "showDistantNametags"]), ND = (0, ID.useRef)(BD("showFog")), gD = (0, ID.useRef)(oD.antiAliasing), XD = (0, ID.useRef)(oD.useWebGpu), [mD, nD] = (0, ID.useState)(null), [UD, xD] = (0, ID.useState)((() => (0, RC.g)(vD.featureFlags.settings.canUseShaderPacks))), [qD] = (0, ID.useState)((() => PD.d.isWebGpuDefaultOff())), [JD] = (0, ID.useState)(TC.f);
      (0, ID.useEffect)((() => {
        let DD = !1;
        return (0, vD.hasUsableWebGpuAdapter)().then((CD => {
          DD || nD(CD)
        })), (0, RC.o)(vD.featureFlags.settings.canUseShaderPacks) && (0, GC.d)().then((async CD => {
          const ID = null !== CD && await async function(DD) {
            const [{
              isShaderPackActive: CD
            }, {
              loadPageShaderPackCompiler: ID
            }] = await Promise.all([cD.e(127).then((() => cD(6404))), Promise.all([cD.e(74), cD.e(131), cD.e(130)]).then((() => cD(6366)))]);
            return CD(DD, await ID())
          }(CD);
          DD || xD(ID)
        })), () => {
          DD = !0
        }
      }), []);
      const KD = function(DD, CD, cD, ID, pD) {
          return (0, kC.e)(cD, ID) && !0 === CD ? {
            translationKey: "settingsMenu:newWebGpuForcedOnByShaderPack",
            checked: !0,
            disabled: !0
          } : {
            translationKey: !1 !== CD ? "settingsMenu:newWebGpu" : pD ? "settingsMenu:newWebGpuDisabledUntilRestart" : "settingsMenu:newWebGpuUnsupported",
            checked: DD && !1 !== CD,
            disabled: !0 !== CD
          }
        }(oD.useWebGpu, mD, UD, qD, JD),
        aD = (oD.useWebGpu || (0, kC.e)(UD, qD)) && UD && !0 === mD,
        VD = (0, tD.h)("lightingOverride"),
        zD = !(0, dC.C)(VD);
      let jD = "settingsMenu:enableLighting";
      zD && (jD = VD ? "settingsMenu:enableLightingForcedOn" : "settingsMenu:enableLightingForcedOff");
      const lD = DD => {
          var CD, cD, ID;
          const pD = null !== (CD = DD.showFog) && void 0 !== CD ? CD : BD("showFog"),
            iD = null !== (cD = DD.antiAliasing) && void 0 !== cD ? cD : oD.antiAliasing,
            fD = null !== (ID = DD.useWebGpu) && void 0 !== ID ? ID : oD.useWebGpu,
            bD = !WC.q && pD !== ND.current || iD !== gD.current || fD !== XD.current;
          MD(bD ? () => OD.j : null)
        },
        LD = (0, tD.h)("fogChunkDistanceOverride"),
        TD = (0, tD.h)("fogBlockDistanceOverride"),
        GD = !(0, dC.C)(LD) || !(0, dC.C)(TD),
        RD = GD ? "settingsMenu:showFogForcedOn" : "settingsMenu:showFog",
        [kD, dD] = (0, lC.f)(wD),
        [YD, WD] = (0, Cc.c)(wD),
        sD = ZD("settingsMenu:chunkLoadDistanceDeviceLimit"),
        ED = YD < kD,
        eD = Math.min(null !== (CD = BD("chunkHorizAddDist")) && void 0 !== CD ? CD : wD[0], YD),
        uD = !GD && function(DD, CD) {
          return !0 === DD.showFog && DD.fogChunkDistance > CD
        }(oD, eD);
      return (0, SD.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [(0, SD.jsx)(OD.i, {
          name: ZD("settingsMenu:horizontalChunkLoadDistance"),
          min: wD[0],
          max: kD,
          selectableMax: YD,
          cappedNote: sD,
          step: 1,
          initValue: eD,
          onChange: DD => {
            !0 === BD("showFog") && DD < BD("fogChunkDistance") && yD("fogChunkDistance", DD), yD("chunkHorizAddDist", DD), YC.i.Uo("updatedChunkLoadDist")
          },
          circleInfoText: ZD("settingsMenu:chunkLoadDistanceInfo")
        }), (0, SD.jsx)(OD.i, {
          name: ZD("settingsMenu:verticalChunkLoadDistance"),
          min: wD[1],
          max: dD,
          selectableMax: WD,
          cappedNote: ED ? void 0 : sD,
          step: 1,
          initValue: Math.min(null !== (pD = BD("chunkVertAddDist")) && void 0 !== pD ? pD : wD[1], WD),
          onChange: DD => {
            yD("chunkVertAddDist", DD), YC.i.Uo("updatedChunkLoadDist")
          },
          circleInfoText: ZD("settingsMenu:chunkLoadDistanceInfo"),
          className: "VerticalChunkLoadSlider"
        }), (0, SD.jsx)(OD.e, {
          label: ZD("settingsMenu:chunkFadeIn"),
          checked: oD.chunkFadeIn,
          onClick: DD => {
            PD.d.setClientEscMenuOptions({
              chunkFadeIn: DD
            })
          },
          circleInfoText: ZD("settingsMenu:chunkFadeInInfo")
        }), HD.devTools.supports("chunkBorders") && (0, SD.jsx)(OD.e, {
          label: ZD("settingsMenu:showChunkBorders"),
          checked: oD.showChunkBorders,
          onClick: DD => {
            PD.d.setClientEscMenuOptions({
              showChunkBorders: DD
            })
          },
          circleInfoText: ZD("settingsMenu:showChunkBordersInfo")
        }), (0, SD.jsx)(OD.e, {
          label: ZD(jD),
          checked: oD.enableLighting,
          onClick: DD => {
            PD.d.setClientEscMenuOptions({
              enableLighting: DD
            })
          },
          disabled: zD
        }), (0, SD.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, SD.jsx)(OD.e, {
            label: ZD(RD),
            checked: oD.showFog,
            onClick: DD => {
              lD({
                showFog: DD
              }), PD.d.setClientEscMenuOptions({
                showFog: DD
              })
            },
            disabled: GD,
            className: iD()({
              SettingBoxWarning: uD
            })
          }), (0, SD.jsx)(OD.i, {
            name: ZD("settingsMenu:fogChunkDistance"),
            min: wD[0],
            max: LC.h.maxChunkHorizAddDistance,
            step: 1,
            initValue: null !== (bD = oD.fogChunkDistance) && void 0 !== bD ? bD : wD[0],
            onChange: DD => {
              PD.d.setClientEscMenuOptions({
                fogChunkDistance: DD
              }), YC.i.Uo("fogChunkDistanceChanged", DD)
            },
            circleInfoText: ZD("settingsMenu:fogChunkDistanceInfo"),
            disabled: GD || !1 === BD("showFog"),
            className: iD()({
              SettingBoxWarning: uD
            })
          }), uD && (0, SD.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: ZD("settingsMenu:fogChunkDistanceInfo")
          })]
        }), !WC.q && (0, SD.jsx)(OD.e, {
          label: ZD(aD ? "settingsMenu:disableBlockTextureAtlasUnavailableWithShaderPack" : "settingsMenu:disableBlockTextureAtlas"),
          checked: !aD && oD.disableTexAtlas,
          onClick: DD => {
            PD.d.setClientEscMenuOptions({
              disableTexAtlas: DD
            })
          },
          circleInfoText: ZD("settingsMenu:disableBlockTextureAtlasInfo"),
          disabled: aD
        }), (0, SD.jsx)(OD.i, {
          name: ZD("settingsMenu:fieldOfView"),
          min: 50,
          max: 160,
          step: 1,
          initValue: oD.cameraFOV,
          onChange: DD => {
            PD.d.setClientEscMenuOptions({
              cameraFOV: DD
            })
          }
        }), (0, SD.jsx)(OD.e, {
          label: ZD("settingsMenu:disableViewBobbing"),
          checked: oD.disableBobbing,
          onClick: DD => {
            PD.d.setClientEscMenuOptions({
              disableBobbing: DD
            })
          },
          circleInfoText: ZD("settingsMenu:disableViewBobbingInfo")
        }), (0, SD.jsx)(OD.e, {
          label: ZD("settingsMenu:antiAliasing"),
          checked: oD.antiAliasing,
          onClick: DD => {
            lD({
              antiAliasing: DD
            }), (0, AC.g)("antiAliasing"), PD.d.setClientEscMenuOptions({
              antiAliasing: DD
            })
          },
          circleInfoText: ZD("settingsMenu:antiAliasingInfo")
        }), (0, SD.jsx)(OD.i, {
          name: ZD("settingsMenu:pixelScale"),
          min: 1,
          max: 8,
          step: 1,
          initValue: null !== (QD = oD.pixelScale) && void 0 !== QD ? QD : 1,
          onChange: DD => {
            (DD !== PD.d.get("clientEscMenuOptions").pixelScale || (0, Dc.r)()) && (0, AC.g)("pixelScale"), PD.d.setClientEscMenuOptions({
              pixelScale: DD
            })
          },
          circleInfoText: ZD("settingsMenu:pixelScaleInfo"),
          format: DD => `${DD}x`
        }), (0, SD.jsx)(OD.e, {
          label: ZD("settingsMenu:pixelSmoothing"),
          checked: oD.pixelSmoothing,
          onClick: DD => {
            PD.d.setClientEscMenuOptions({
              pixelSmoothing: DD
            })
          },
          circleInfoText: ZD("settingsMenu:pixelSmoothingInfo")
        }), WC.q && (0, SD.jsx)(OD.e, {
          label: ZD("settingsMenu:distantNametags"),
          checked: (0, FC.e)(),
          onClick: DD => {
            PD.d.set({
              showDistantNametags: DD
            })
          },
          circleInfoText: ZD("settingsMenu:distantNametagsInfo")
        }), (0, SD.jsx)(OD.e, {
          label: ZD(KD.translationKey),
          checked: KD.checked,
          onClick: DD => {
            lD({
              useWebGpu: DD
            }), PD.d.setClientEscMenuOptions({
              useWebGpu: DD
            })
          },
          circleInfoText: ZD("settingsMenu:newWebGpuInfo"),
          disabled: KD.disabled
        })]
      })
    }
    var Ic = cD(4213),
      pc = cD(8564),
      ic = cD(8986),
      fc = cD(8574),
      bc = cD(8991);
    const Qc = {
        color: 16777215,
        name: "white"
      },
      wc = {
        color: 0,
        name: "black"
      },
      Sc = [Qc, {
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
      }, wc],
      Bc = [wc, Qc];

    function yc(DD) {
      return `${DD} px`
    }

    function Mc(DD) {
      return `${DD}%`
    }

    function tc(DD) {
      let {
        label: CD,
        value: cD,
        swatches: ID,
        onChange: pD
      } = DD;
      const {
        t: bD
      } = (0, fD.F)(), QD = !ID.some((DD => DD.color === cD));
      return (0, SD.jsxs)("div", {
        className: "SettingBox CrosshairColorRow",
        children: [(0, SD.jsx)("div", {
          className: "SliderText",
          children: CD
        }), (0, SD.jsxs)("div", {
          className: "CrosshairSwatches",
          role: "radiogroup",
          "aria-label": CD,
          children: [ID.map((DD => {
            let {
              color: CD,
              name: ID
            } = DD;
            return (0, SD.jsx)("button", {
              type: "button",
              role: "radio",
              "aria-checked": CD === cD,
              "aria-label": bD(`crosshairSettings:color_${ID}`),
              "data-pad-focusable": !0,
              className: iD()("CrosshairSwatch", {
                Selected: CD === cD
              }),
              style: {
                background: (0, bc.o)(CD)
              },
              onClick: () => {
                pD(CD)
              }
            }, CD)
          })), (0, SD.jsx)("label", {
            className: iD()("CrosshairSwatch CrosshairSwatchCustom", {
              Selected: QD
            }),
            style: QD ? {
              background: (0, bc.o)(cD)
            } : void 0,
            title: bD("crosshairSettings:customColor"),
            "data-pad-focusable": !0,
            children: (0, SD.jsx)("input", {
              type: "color",
              "aria-label": bD("crosshairSettings:customColor"),
              value: (0, bc.o)(cD),
              onChange: DD => {
                const CD = (0, bc.u)(DD.target.value);
                null !== CD && pD(CD)
              }
            })
          })]
        })]
      })
    }

    function Zc(DD) {
      let {
        settings: CD,
        onChange: cD
      } = DD;
      const {
        t: ID
      } = (0, fD.F)(), pD = (DD, ID) => {
        cD((0, bc.A)(CD, DD, ID))
      }, iD = function(DD, cD) {
        let ID = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : yc;
        const {
          min: iD,
          max: fD,
          step: bD
        } = bc.e[DD];
        return (0, SD.jsx)(OD.i, {
          name: cD,
          min: iD,
          max: fD,
          step: bD,
          initValue: CD[DD],
          format: ID,
          onChange: CD => {
            pD(DD, CD)
          }
        }, DD)
      }, bD = ["lines", "dot", "circle"].filter((DD => CD[DD])), QD = (DD, cD, ID) => (0, SD.jsx)(OD.e, {
        label: cD,
        checked: CD[DD],
        disabled: 1 === bD.length && bD[0] === DD,
        circleInfoText: ID,
        onClick: CD => {
          pD(DD, CD)
        }
      }, DD), wD = "shapes" === CD.style;
      return (0, SD.jsxs)(SD.Fragment, {
        children: [(0, SD.jsx)(OD.g, {
          label: ID("crosshairSettings:style"),
          options: [{
            value: "classic",
            label: ID("crosshairSettings:styleClassic")
          }, {
            value: "shapes",
            label: ID("crosshairSettings:styleShapes")
          }],
          value: CD.style,
          onChange: DD => {
            pD("style", DD)
          }
        }), (0, SD.jsx)(tc, {
          label: ID("crosshairSettings:color"),
          value: CD.color,
          swatches: Sc,
          onChange: DD => {
            pD("color", DD)
          }
        }), iD("opacity", ID("crosshairSettings:opacity"), Mc), !wD && iD("size", ID("crosshairSettings:size"), Mc), wD && (0, SD.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [QD("lines", ID("crosshairSettings:lines")), CD.lines && iD("lineLength", ID("crosshairSettings:lineLength")), CD.lines && iD("lineThickness", ID("crosshairSettings:lineThickness")), CD.lines && iD("gap", ID("crosshairSettings:gap")), CD.lines && QD("tStyle", ID("crosshairSettings:tStyle"))]
        }), wD && (0, SD.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [QD("dot", ID("crosshairSettings:dot")), CD.dot && iD("dotSize", ID("crosshairSettings:dotSize"))]
        }), wD && (0, SD.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [QD("circle", ID("crosshairSettings:circle")), CD.circle && iD("circleRadius", ID("crosshairSettings:circleRadius")), CD.circle && iD("circleThickness", ID("crosshairSettings:circleThickness"))]
        }), (0, SD.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [iD("outline", ID("crosshairSettings:outline"), (DD => DD > 0 ? yc(DD) : ID("crosshairSettings:off"))), CD.outline > 0 && (0, SD.jsx)(tc, {
            label: ID("crosshairSettings:outlineColor"),
            value: CD.outlineColor,
            swatches: Bc,
            onChange: DD => {
              pD("outlineColor", DD)
            }
          })]
        }), QD("growOnClick", ID("crosshairSettings:growOnClick")), wD && QD("forGuns", ID("crosshairSettings:forGuns"), ID("crosshairSettings:forGunsInfo"))]
      })
    }
    var oc = cD(62),
      vc = cD(1280),
      Nc = cD(8998),
      gc = cD(9003),
      Xc = cD(9012),
      mc = cD(9014);
    const nc = ["sky", "grass", "stone", "sand", "snow", "night"],
      Oc = "4rem";

    function Pc(DD) {
      return {
        backgroundImage: `url(${DD})`,
        backgroundSize: `${Oc} ${Oc}`,
        backgroundRepeat: "repeat",
        imageRendering: "pixelated"
      }
    }

    function Hc(DD) {
      return {
        ...(() => {
          switch (DD) {
            case "sky":
              return {
                backgroundImage: "linear-gradient(#3d8fe0 0%, #8cc8f5 45%, #d6eefc 58%, #6fae4a 58.01%, #4f8a33 100%)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              };
            case "grass":
              return Pc(Nc);
            case "stone":
              return Pc(gc);
            case "sand":
              return Pc(Xc);
            case "snow":
              return Pc(mc);
            case "night":
              return {
                backgroundImage: "radial-gradient(circle at 50% 50%, #1e2a4a 0%, #070b16 100vmax)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              }
          }
        })(),
        backgroundPosition: "center"
      }
    }

    function Uc(DD) {
      return Object.freeze({
        ...bc.h,
        style: "shapes",
        outline: 1,
        lines: !1,
        ...DD
      })
    }
    const xc = [{
        id: "default",
        settings: bc.h
      }, {
        id: "cross",
        settings: Uc({
          color: 5046092,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3
        })
      }, {
        id: "crossDot",
        settings: Uc({
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
        settings: Uc({
          dot: !0,
          dotSize: 4
        })
      }, {
        id: "circle",
        settings: Uc({
          circle: !0,
          circleRadius: 12,
          circleThickness: 1.5,
          dot: !0,
          dotSize: 2
        })
      }, {
        id: "tShape",
        settings: Uc({
          color: 16731391,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3,
          tStyle: !0
        })
      }, {
        id: "tiny",
        settings: Uc({
          color: 16776960,
          lines: !0,
          lineLength: 3,
          lineThickness: 1,
          gap: 2
        })
      }, {
        id: "bold",
        settings: Uc({
          lines: !0,
          lineLength: 10,
          lineThickness: 3,
          gap: 0,
          outline: 1.5
        })
      }],
      qc = ["growOnClick", "forGuns"];
    var Jc = cD(9021);

    function Kc(DD) {
      let {
        label: CD,
        selected: cD,
        onClick: ID,
        className: pD,
        style: fD,
        children: bD
      } = DD;
      return (0, SD.jsx)("button", {
        type: "button",
        role: "radio",
        "aria-checked": cD,
        title: CD,
        "aria-label": CD,
        "data-pad-focusable": !0,
        className: iD()("CrosshairBackdropSwatch", pD, {
          Selected: cD
        }),
        style: fD,
        onClick: ID,
        children: bD
      })
    }

    function ac(DD) {
      let {
        backdrop: CD,
        onChange: cD,
        game: ID
      } = DD;
      const {
        t: pD
      } = (0, fD.F)();
      return (0, SD.jsxs)("div", {
        className: "CrosshairBackdrops",
        role: "radiogroup",
        "aria-label": pD("crosshairSettings:background"),
        children: [ID && (0, SD.jsx)(Kc, {
          label: pD("crosshairSettings:bg_game"),
          selected: ID.selected,
          onClick: ID.onSelect,
          className: "CrosshairGameSwatch",
          children: (0, SD.jsx)(bD.c, {
            name: "cube"
          })
        }), nc.map((DD => (0, SD.jsx)(Kc, {
          label: pD(`crosshairSettings:bg_${DD}`),
          selected: !(null !== ID && void 0 !== ID && ID.selected) && DD === CD,
          style: Hc(DD),
          onClick: () => {
            cD(DD)
          }
        }, DD)))]
      })
    }

    function Vc(DD) {
      let {
        settings: CD,
        touch: cD,
        backdrop: ID,
        onChange: pD
      } = DD;
      const {
        t: bD
      } = (0, fD.F)(), QD = function(DD) {
        var CD;
        return null !== (CD = xc.find((CD => (0, bc.w)(CD.settings, DD, qc)))) && void 0 !== CD ? CD : null
      }(CD);
      return (0, SD.jsx)("div", {
        className: "CrosshairPresets",
        role: "radiogroup",
        "aria-label": bD("crosshairSettings:presets"),
        children: xc.map((DD => {
          const fD = (null === QD || void 0 === QD ? void 0 : QD.id) === DD.id;
          return (0, SD.jsxs)("button", {
            type: "button",
            role: "radio",
            "aria-checked": fD,
            "data-pad-focusable": !0,
            className: iD()("CrosshairPreset", {
              Selected: fD
            }),
            onClick: () => {
              pD(function(DD, CD) {
                return {
                  ...CD.settings,
                  growOnClick: DD.growOnClick,
                  forGuns: DD.forGuns
                }
              }(CD, DD))
            },
            children: [(0, SD.jsx)("div", {
              className: "CrosshairPresetStage",
              style: Hc(ID),
              children: (0, SD.jsx)(Jc.e, {
                settings: DD.settings,
                touch: cD,
                inPreview: !0
              })
            }), (0, SD.jsx)("div", {
              className: "CrosshairPresetName",
              children: bD(`crosshairSettings:preset_${DD.id}`)
            })]
          }, DD.id)
        }))
      })
    }
    var zc = cD(1647);

    function jc(DD, CD) {
      const [cD, pD] = (0, ID.useState)(!1), iD = () => {
        pD(!1)
      }, [fD, bD] = (0, ID.useState)(!1), QD = (0, ID.useRef)({
        growOnClick: DD.growOnClick,
        forGuns: DD.forGuns
      });
      (0, ID.useEffect)((() => {
        const CD = QD.current;
        QD.current = {
          growOnClick: DD.growOnClick,
          forGuns: DD.forGuns
        }, (DD.growOnClick && !CD.growOnClick || DD.forGuns && !CD.forGuns) && bD(!0)
      }), [DD.growOnClick, DD.forGuns]), (0, ID.useEffect)((() => {
        if (!fD) return;
        const DD = setTimeout((() => {
          bD(!1)
        }), 600);
        return () => {
          clearTimeout(DD)
        }
      }), [fD]);
      const wD = cD || fD;
      return {
        view: {
          pressed: wD,
          spread: wD && DD.forGuns && !DD.growOnClick ? 6 : 0
        },
        handlers: {
          onPointerDown: DD => {
            !DD.target.closest(CD) && (0, zc.e)(DD.currentTarget, DD.pointerId) && pD(!0)
          },
          onPointerUp: iD,
          onPointerCancel: iD,
          onLostPointerCapture: iD
        }
      }
    }

    function lc(DD) {
      let {
        settings: CD,
        touch: cD,
        backdrop: ID,
        className: pD,
        children: fD,
        label: bD
      } = DD;
      const QD = jc(CD, ".CrosshairStageControls");
      return (0, SD.jsxs)("div", {
        className: iD()("CrosshairStage", pD),
        style: Hc(ID),
        ...QD.handlers,
        children: [(0, SD.jsx)("div", {
          className: "CrosshairStageHold",
          role: "img",
          "aria-label": bD,
          children: (0, SD.jsx)(Jc.e, {
            settings: CD,
            touch: cD,
            inPreview: !0,
            ...QD.view
          })
        }), fD]
      })
    }
    const Lc = "crosshairFullScreen";

    function Tc(DD) {
      let {
        settings: CD,
        touch: cD,
        backdrop: pD,
        onBackdrop: QD,
        inGame: wD,
        onChange: BD,
        onClose: yD
      } = DD;
      const {
        t: MD
      } = (0, fD.F)(), tD = (0, ID.useRef)(null);
      (0, vc.t)("popup", tD, yD),
      function(DD) {
        const CD = (0, ID.useRef)(DD);
        CD.current = DD, (0, ID.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [Lc]: !0
          }, "");
          let DD = !1;
          const cD = () => {
            DD = !0, CD.current()
          };
          return window.addEventListener("popstate", cD), () => {
            var CD;
            window.removeEventListener("popstate", cD), !DD && null !== (CD = window.history.state) && void 0 !== CD && CD[Lc] && window.history.back()
          }
        }), [])
      }(yD);
      const ZD = (0, ID.useRef)(yD);
      ZD.current = yD, (0, ID.useEffect)((() => {
        function DD(DD) {
          "Escape" === DD.key && (DD.stopPropagation(), ZD.current())
        }
        return window.addEventListener("keydown", DD, !0), () => {
          window.removeEventListener("keydown", DD, !0)
        }
      }), []);
      const vD = jc(CD, ".CrosshairFullScreenPanel"),
        [ND, gD] = (0, ID.useState)(!0),
        XD = ND && wD;
      (0, ID.useEffect)((() => {
        if (XD) return PD.d.set({
          crosshairGameView: !0
        }), () => {
          PD.d.set({
            crosshairGameView: !1
          })
        }
      }), [XD]);
      const [mD, nD] = (0, ID.useState)(!0);
      return (0, oc.createPortal)((0, SD.jsxs)("div", {
        ref: tD,
        className: "CrosshairFullScreen",
        style: XD ? void 0 : Hc(pD),
        ...vD.handlers,
        children: [(0, SD.jsx)(Jc.e, {
          settings: CD,
          touch: cD,
          inEditor: !0,
          ...vD.view
        }), (0, SD.jsxs)("div", {
          className: iD()("CrosshairFullScreenPanel", {
            Collapsed: !mD
          }),
          children: [(0, SD.jsxs)("div", {
            className: "CrosshairFullScreenBar",
            children: [(0, SD.jsx)(ac, {
              backdrop: pD,
              onChange: DD => {
                gD(!1), QD(DD)
              },
              game: wD ? {
                selected: XD,
                onSelect: () => {
                  gD(!0)
                }
              } : void 0
            }), (0, SD.jsx)(oD.P, {
              className: "CrosshairPanelToggle",
              ariaLabel: MD(mD ? "crosshairSettings:hideEditor" : "crosshairSettings:showEditor"),
              onClick: () => {
                nD(!mD)
              },
              children: (0, SD.jsx)(bD.c, {
                name: mD ? "caret-up" : "pen"
              })
            }), (0, SD.jsx)(oD.i, {
              className: "CrosshairFullScreenDone",
              onClick: yD,
              padDefaultFocus: !0,
              children: MD("crosshairSettings:done")
            })]
          }), mD && (0, SD.jsxs)("div", {
            className: "CrosshairFullScreenFields",
            children: [(0, SD.jsx)(Vc, {
              settings: CD,
              touch: cD,
              backdrop: pD,
              onChange: BD
            }), (0, SD.jsx)(Zc, {
              settings: CD,
              onChange: BD
            })]
          })]
        })]
      }), document.body)
    }
    var Gc = cD(2551),
      Rc = cD(9028);

    function kc(DD) {
      let {
        settings: CD,
        onChange: cD
      } = DD;
      const {
        t: pD
      } = (0, fD.F)(), QD = (0, Rc.g)(CD), [wD, BD] = (0, Gc.h)(), [yD, MD] = (0, ID.useState)(!1), tD = (0, ID.useRef)(null), [ZD, vD] = (0, Gc.h)(), [ND, gD] = (0, ID.useState)(!1);
      return (0, SD.jsxs)("div", {
        className: "SettingBox CrosshairShare",
        children: [(0, SD.jsxs)("div", {
          className: "CrosshairShareRow",
          children: [(0, SD.jsxs)(oD.P, {
            className: iD()("CrosshairCopy", {
              ActiveSecondaryButton: wD
            }),
            onClick: () => {
              (0, Gc.d)(QD, {
                useShareSheet: !1,
                onOutcome: DD => {
                  MD("failed" === DD), "copied" === DD && BD()
                }
              })
            },
            children: [(0, SD.jsx)(bD.c, {
              name: wD ? "check" : "copy"
            }), " ", pD(wD ? "general:copied" : "crosshairSettings:copy")]
          }), (0, SD.jsx)(mD.b, {
            className: "CrosshairPaste",
            domRef: tD,
            ariaLabel: pD("crosshairSettings:paste"),
            placeholderText: pD("crosshairSettings:paste"),
            onValueChange: DD => {
              const CD = (0, Rc.e)(DD);
              gD(!CD && DD.trim().length >= Rc.d), CD && (cD(CD), tD.current.value = "", vD())
            }
          })]
        }), yD && (0, SD.jsx)("input", {
          className: "CrosshairCode",
          readOnly: !0,
          value: QD,
          "aria-label": pD("crosshairSettings:copy"),
          onFocus: DD => {
            DD.currentTarget.select()
          }
        }), (0, SD.jsxs)("div", {
          "aria-live": "polite",
          children: [ND && (0, SD.jsx)("div", {
            className: "CrosshairShareNote Error",
            children: pD("crosshairSettings:pasteInvalid")
          }), ZD && !ND && (0, SD.jsx)("div", {
            className: "CrosshairShareNote",
            children: pD("crosshairSettings:applied")
          })]
        })]
      })
    }
    var dc = cD(9037);
    let Yc = "sky";

    function Wc(DD) {
      let {
        showing: CD
      } = DD;
      const {
        t: cD
      } = (0, fD.F)(), {
        isTouchScreen: pD,
        gameState: iD,
        clientEscMenuOptions: QD
      } = (0, PD.o)(["isTouchScreen", "gameState", "clientEscMenuOptions"]), wD = (0, dc.h)(), [BD, yD] = (0, ID.useState)(Yc), MD = DD => {
        Yc = DD, yD(DD)
      }, [tD, ZD] = (0, ID.useState)(!1);
      return (0, ID.useEffect)((() => {
        CD || ZD(!1)
      }), [CD]), (0, SD.jsxs)("div", {
        className: "SettingsMenuRightInner CrosshairCategory",
        children: [(0, SD.jsx)("div", {
          className: "CrosshairPreviewSticky",
          children: (0, SD.jsx)(lc, {
            className: "CrosshairPreviewStage",
            settings: wD,
            touch: pD,
            backdrop: BD,
            label: cD("crosshairSettings:preview"),
            children: (0, SD.jsxs)("div", {
              className: "CrosshairPreviewBar CrosshairStageControls",
              children: [(0, SD.jsx)(ac, {
                backdrop: BD,
                onChange: MD
              }), (0, SD.jsxs)(oD.P, {
                className: "CrosshairFullScreenButton",
                onClick: () => {
                  ZD(!0)
                },
                children: [(0, SD.jsx)(bD.c, {
                  name: "expand"
                }), " ", cD("crosshairSettings:fullScreen")]
              })]
            })
          })
        }), (0, SD.jsx)("div", {
          className: "SettingBox",
          children: (0, SD.jsx)(Vc, {
            settings: wD,
            touch: pD,
            backdrop: BD,
            onChange: dc.e
          })
        }), (0, SD.jsx)(kc, {
          settings: wD,
          onChange: dc.e
        }), pD && (0, SD.jsx)(fc.b, {
          note: (0, ic.g)(pD, QD.touchActionButtons) ? cD("crosshairSettings:touchNote") : void 0
        }), (0, SD.jsx)(Zc, {
          settings: wD,
          onChange: dc.e
        }), tD && (0, SD.jsx)(Tc, {
          settings: wD,
          touch: pD,
          backdrop: BD,
          onBackdrop: MD,
          inGame: "inGame" === iD,
          onChange: dc.e,
          onClose: () => {
            ZD(!1)
          }
        })]
      })
    }
    var sc = cD(8572),
      Ec = cD(1396),
      ec = cD(4767),
      uc = cD(9039),
      hc = cD(1954),
      rc = cD(4119),
      Ac = cD(1957),
      Fc = cD(728);
    const DI = (0, ID.memo)((function() {
      const {
        clientEscMenuOptions: DD
      } = (0, PD.o)(["clientEscMenuOptions"]), {
        recording: CD,
        clipping: cD,
        hasClipBuffer: pD
      } = (0, hc.h)("replayRecorder"), fD = (0, hc.g)("connectedGame", (DD => DD.replay)), bD = (0, rc.o)(), QD = !1 === (0, tD.h)("canRecordReplays");
      (0, ID.useEffect)((() => {
        ND.gameBridge.send("setRecorderPrefs", {
          clipping: DD.enableClipping,
          clipSeconds: DD.clipDurationSeconds
        })
      }), [DD.enableClipping, DD.clipDurationSeconds]);
      const wD = bD || fD,
        BD = !wD && !QD,
        yD = CD || BD,
        MD = BD,
        ZD = MD && cD && !CD;

      function vD() {
        yD && ND.gameBridge.send("toggleRecording", null)
      }
      return (0, SD.jsxs)("div", {
        className: "SettingsMenuRightInner ReplayViewerCategory",
        children: [(0, SD.jsxs)("div", {
          className: "SettingBox",
          children: [(0, SD.jsx)("div", {
            className: "ReplayViewerCategoryRecordingRow",
            children: CD ? (0, SD.jsxs)(SD.Fragment, {
              children: [(0, SD.jsxs)(oD.J, {
                className: "ReplayViewerCategoryButton",
                onClick: vD,
                disabled: !yD,
                children: [(0, SD.jsx)("span", {
                  children: "Stop Recording"
                }), (0, SD.jsx)(Ac.d, {
                  noaAction: "recordGame"
                })]
              }), (0, SD.jsx)(uc.c, {
                className: "ReplayViewerCategoryRecordingIndicator"
              })]
            }) : (0, SD.jsxs)(oD.i, {
              className: "ReplayViewerCategoryButton",
              onClick: vD,
              disabled: !yD,
              children: [(0, SD.jsx)("span", {
                children: "Start Recording"
              }), (0, SD.jsx)(Ac.d, {
                noaAction: "recordGame"
              })]
            })
          }), QD && (0, SD.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Recording is turned off in this game."
          }), wD && !CD && (0, SD.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Close Replay Mode to start recording."
          })]
        }), (0, SD.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, SD.jsx)(OD.e, {
            label: "Enable clipping",
            checked: DD.enableClipping,
            disabled: !MD,
            onClick: function(DD) {
              MD && PD.d.setClientEscMenuOptions({
                enableClipping: DD
              })
            },
            className: iD()({
              SettingBoxDisabled: !MD
            })
          }), (0, SD.jsx)(OD.i, {
            name: "Clip duration (seconds)",
            min: Fc.i,
            max: Fc.h,
            step: Fc.c,
            initValue: DD.clipDurationSeconds,
            onChange: function(DD) {
              PD.d.setClientEscMenuOptions({
                clipDurationSeconds: DD
              })
            },
            circleInfoText: "Longer clip durations use more memory and may affect performance.",
            disabled: !MD || !DD.enableClipping
          })]
        }), (0, SD.jsxs)("div", {
          className: "SettingBox",
          children: [(0, SD.jsxs)(oD.i, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              ZD && ND.gameBridge.send("saveClip", null)
            },
            disabled: !ZD,
            children: [(0, SD.jsx)("span", {
              children: "Record clip"
            }), (0, SD.jsx)(Ac.d, {
              noaAction: "recordClip"
            })]
          }), DD.enableClipping && !pD && MD && !CD && (0, SD.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clip buffer is filling \u2014 play for a moment, then save."
          }), CD && (0, SD.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clipping pauses while a full recording is active."
          })]
        }), (0, SD.jsxs)("div", {
          className: "SettingBox",
          children: [(0, SD.jsxs)(oD.i, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              (0, rc.l)(!0), PD.d.set({
                openEverythingMenuName: null
              })
            },
            disabled: bD,
            children: [(0, SD.jsx)("span", {
              children: "Open Replay Mode"
            }), (0, SD.jsx)(Ac.d, {
              noaAction: "replayViewerOpen"
            })]
          }), bD && (0, SD.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Replay Mode is already open."
          })]
        }), (0, SD.jsxs)("div", {
          className: "SettingBox",
          children: [(0, SD.jsx)("div", {
            className: "ReplayViewerCategoryTutorialTitle",
            children: "How to use Replay Mode"
          }), (0, SD.jsx)("iframe", {
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
    var CI = cD(1865);
    const cI = {
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
        icon: () => (0, SD.jsx)("svg", {
          className: "svg-inline--fa",
          viewBox: "0 0 640 512",
          "aria-hidden": "true",
          children: (0, SD.jsx)("path", {
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
      gt: {
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

    function II() {
      return Promise.all([cD.e(74), cD.e(131), cD.e(125), cD.e(122)]).then((() => cD(40151))).then((DD => ({
        default: DD.ShaderPackCategory
      })), (DD => (console.error("Failed to load the shader pack settings", DD), {
        default: pI
      })))
    }

    function pI() {
      const {
        t: DD
      } = (0, fD.F)();
      return (0, SD.jsx)("div", {
        className: "SettingsMenuRightInner",
        children: DD("shaderPack:tabLoadFailed")
      })
    }
    var iI = cD(1388);
    const fI = (0, ID.lazy)((() => cD.e(263).then((() => cD(40143))).then((DD => ({
        default: DD.BloxdInformation
      }))))),
      bI = (0, ID.lazy)(II);

    function QI(DD) {
      return DD ? "general" : "account"
    }
    const wI = new Map,
      SI = (0, ID.memo)((function(DD) {
        let {
          show: CD,
          setBeforeResumeCallback: cD
        } = DD;
        (0, ZD.b)();
        const {
          gameState: pD,
          openSettingsCategory: iD
        } = (0, PD.o)(["gameState", "openSettingsCategory"]), {
          userContext: QD
        } = (0, MD.c)(), {
          t: wD
        } = (0, fD.F)(), mD = (0, yD.b)(), nD = (0, tD.h)("minChunkAddDist"), OD = "inGame" === pD, [HD, qD] = (0, ID.useState)(QI(OD)), [JD, KD] = (0, ID.useState)(null), [aD, VD] = (0, ID.useState)([]), zD = (0, ID.useRef)(function() {
          const DD = new Date,
            CD = 6 * (DD.getMonth() + DD.getDate()) % wC.x.length;
          return [...wC.x, ...wC.x].slice(CD, CD + 6)
        }()), jD = (0, ID.useRef)(null), lD = (0, xC.g)(Ec.k, (0, Ec.e)()), LD = Object.keys(cI).filter((DD => {
          switch (DD) {
            case "replayViewer":
              return OD;
            case "developerTools":
              return QD.playerHasRank("developer") || !1;
            case "texturePack":
              return vD.featureFlags.settings.canChangeTexturePack;
            case "gt":
              return vD.featureFlags.settings.canUseShaderPacks;
            case "notifications":
              return vD.featureFlags.useSocialFeatures;
            case "alternativeDomains":
              return "crazygames" !== xD.p;
            case "controller":
              return vD.featureFlags.useControllerSupport && (lD || "controller" === HD);
            default:
              return !0
          }
        }));
        (0, xC.f)("toggleFullCoordinateOverlay", (() => {
          const DD = hC("showCoordinates") && hC("showChunkCoordinates") && hC("showFPS");
          rC("showCoordinates", !DD), rC("showChunkCoordinates", !DD), rC("showFPS", !DD), mD()
        })), (0, xC.f)("updatedChunkLoadDist", (() => {
          mD()
        })), (0, ID.useEffect)((() => {
          if (KD(null), null === PD.d.get("openSettingsCategory")) {
            const DD = (0, iI.e)() ? wI.get(OD) : void 0;
            qD(DD && LD.includes(DD) ? DD : QI(OD))
          }
        }), [CD]), (0, ID.useEffect)((() => {
          null !== iD && (qD(iD), wI.set(OD, iD), PD.d.set({
            openSettingsCategory: null
          }))
        }), [iD, OD]), (0, ID.useLayoutEffect)((() => {
          jD.current && (jD.current.scrollTop = 0)
        }), [HD, CD]), (0, ID.useEffect)((() => {
          "updateLog" === HD && (0, XD.d)().then(VD)
        }), [HD]), (0, ID.useEffect)((() => {
          if ((0, dC.C)(nD)) return;
          const [DD, CD] = (0, Ic.g)(), [cD, ID] = (0, lC.f)(nD), pD = (0, CI.h)(nD[0], DD, cD), iD = (0, CI.h)(nD[1], CD, ID);
          ND.gameBridge.send("setChunkAddDistance", {
            horizontal: pD,
            vertical: iD
          })
        }), [nD]);
        const TD = (0, ID.useCallback)((async () => {
          JD && (await JD(), KD(null))
        }), [JD]);

        function GD() {
          PD.d.set({
            openEverythingMenuName: null
          })
        }
        return (0, ID.useEffect)((() => {
          cD((() => TD))
        }), [TD, cD]), (0, SD.jsxs)("div", {
          className: "SettingsMenu Menu",
          style: CD ? {} : {
            display: "none"
          },
          children: [(0, SD.jsx)("div", {
            className: "MenuSideBar",
            children: (0, SD.jsx)("div", {
              className: "MenuSideBarBody",
              children: (0, SD.jsx)(BD, {
                items: LD.map((DD => {
                  const CD = cI[DD].icon;
                  return {
                    id: DD,
                    faIcon: "string" === typeof CD ? CD : void 0,
                    iconElement: "string" === typeof CD ? void 0 : (0, SD.jsx)(CD, {}),
                    title: wD(cI[DD].displayName),
                    redDot: !1
                  }
                })),
                selectedItemId: HD,
                onClick: DD => {
                  !async function(DD) {
                    await TD(), qD(DD), wI.set(OD, DD)
                  }(DD)
                }
              })
            })
          }), (0, SD.jsxs)("div", {
            ref: jD,
            className: "MenuBody SettingsMenuRight",
            children: ["account" === HD && (0, SD.jsx)(NC, {
              showing: CD,
              inGame: OD
            }), "general" === HD && (0, SD.jsx)(PC, {
              inGame: OD
            }), "audio" === HD && (0, SD.jsx)(HC, {}), "notifications" === HD && (0, SD.jsx)(jC, {}), "graphics" === HD && (0, SD.jsx)(cc, {
              minChunkAddDist: null !== nD && void 0 !== nD ? nD : [2, 2],
              getValue: hC,
              onChange: rC,
              setApplySettingsCallback: KD
            }), "controls" === HD && (0, SD.jsx)(pc.h, {}), "crosshair" === HD && (0, SD.jsx)(Wc, {
              showing: CD
            }), "controller" === HD && vD.featureFlags.useControllerSupport && (0, SD.jsx)(sc.c, {}), vD.featureFlags.settings.canChangeTexturePack && "texturePack" === HD && (0, SD.jsx)(ec.e, {
              setApplySettingsCallback: KD
            }), vD.featureFlags.settings.canUseShaderPacks && "gt" === HD && (0, SD.jsx)(ID.Suspense, {
              fallback: null,
              children: (0, SD.jsx)(bI, {
                setApplySettingsCallback: KD
              })
            }), "updateLog" === HD && (0, SD.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, SD.jsx)("div", {
                className: "UpdateLogsContainer",
                children: aD.map(((DD, CD) => (0, SD.jsx)(gD.c, {
                  updateLog: DD,
                  index: CD,
                  close: GD
                }, CD)))
              })
            }), "information" === HD && (0, SD.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, SD.jsx)(ID.Suspense, {
                fallback: null,
                children: (0, SD.jsx)(fI, {})
              })
            }), "alternativeDomains" === HD && (0, SD.jsxs)("div", {
              className: "SettingsMenuRightInner",
              children: [(0, SD.jsx)("div", {
                className: "AlternativeDomainsTitle",
                children: wD("settingsMenu:unblockedDomainsDescription")
              }), (0, SD.jsx)("div", {
                className: "AlternativeDomainsList",
                children: zD.current.map((DD => (0, SD.jsxs)(oD.i, {
                  onClick: () => {
                    window.open(`https://${DD}`)
                  },
                  children: [(0, SD.jsx)(bD.c, {
                    name: "arrow-up-right-from-square"
                  }), " ", DD]
                }, DD)))
              })]
            }), "replayViewer" === HD && (0, SD.jsx)(DI, {}), "developerTools" === HD && (0, SD.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, SD.jsx)(UD, {
                setApplySettingsCallback: KD
              })
            }), null !== JD && (0, SD.jsx)("div", {
              className: "SettingsMenuRightFooter",
              children: (0, SD.jsx)(oD.i, {
                className: "SettingsMenuRightFooterButton",
                onClick: TD,
                children: wD("general:apply")
              })
            })]
          })]
        })
      }));
    var BI = cD(2482);
    const yI = ["characters", "emote", "skin", "hat", "head", "eyebrows", "eyes", "back", "body", "legs", "shoes", "profileEffect", "cape", "nameColour"],
      MI = (0, ID.lazy)((() => Promise.resolve().then((() => cD(4452))).then((DD => {
        DD.needGameClientAfterPaint();
        const CD = DD.matchmakingLibrariesPromise.then((DD => (0, BI.c)(DD.loadCharacterCustomisationUI(), (DD => DD.CharacterCustomisationUI))));
        return Promise.all([DD.ensureGameSetup(), CD]).then((DD => {
          let [, CD] = DD;
          return CD
        }))
      }))));

    function tI(DD) {
      let {
        show: CD
      } = DD;
      const {
        userContext: cD
      } = (0, MD.c)(), [pD, iD] = (0, ID.useState)("characters");
      if (!CD) return null;
      const fD = yI.filter((DD => "cape" !== DD && "nameColour" !== DD || cD.getPlayerRanks().includes("super") || (0, RD.purchasesAllowed)())).map((DD => ({
        id: DD,
        faIcon: wC.F[DD],
        title: wC.J[DD],
        redDot: !1
      })));
      return (0, SD.jsxs)("div", {
        className: "Menu CharCustomisation",
        children: [(0, SD.jsx)("div", {
          className: "MenuSideBar",
          children: (0, SD.jsx)(BD, {
            items: fD,
            selectedItemId: pD,
            onClick: DD => {
              iD(DD)
            }
          })
        }), (0, SD.jsx)("div", {
          className: "MenuBody",
          children: (0, SD.jsx)(ID.Suspense, {
            fallback: (0, SD.jsx)("div", {
              className: "CharacterCustomisationLoading",
              children: (0, SD.jsx)(nD.e, {})
            }),
            children: (0, SD.jsx)(MI, {
              selectedTab: pD
            })
          })
        })]
      })
    }
    var ZI = cD(1460),
      oI = cD(9041),
      vI = cD(4325),
      NI = cD(3211),
      gI = cD(3266),
      XI = cD(9065),
      mI = cD(8463),
      nI = cD(9045),
      OI = cD(9057),
      PI = cD(1893),
      HI = cD(1872),
      UI = cD(4677),
      xI = cD(1260),
      qI = cD(1221),
      JI = cD(1645),
      KI = cD(8548);

    function aI(DD) {
      return DD ? Object.keys(DD).sort(((CD, cD) => {
        var ID, pD, iD, fD;
        const bD = (null !== (ID = null === (pD = DD[cD]) || void 0 === pD ? void 0 : pD.sortPriority) && void 0 !== ID ? ID : 0) - (null !== (iD = null === (fD = DD[CD]) || void 0 === fD ? void 0 : fD.sortPriority) && void 0 !== iD ? iD : 0);
        return 0 !== bD ? bD : CD.localeCompare(cD)
      })) : []
    }
    const VI = [{
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

    function zI(DD) {
      for (const {
          threshold: CD,
          suffix: cD
        }
        of VI)
        if (DD >= CD) {
          const ID = DD / CD;
          return ID >= 100 ? `${Math.floor(ID)}${cD}` : ID >= 10 ? `${ID.toFixed(1).replace(/\.0$/,"")}${cD}` : `${ID.toFixed(2).replace(/\.?0+$/,"")}${cD}`
        } return String(DD)
    }
    var jI = cD(4799);
    const lI = {
        normal: "0.8em",
        big: "1em"
      },
      LI = (0, ID.memo)((function(DD) {
        let {
          item: CD,
          amount: cD = 0,
          size: ID = "normal",
          tier: pD = null
        } = DD;
        return (0, SD.jsx)("div", {
          className: iD()("SmpSlot", `SmpSlot-${ID}`),
          children: CD && (0, SD.jsx)(PI.d, {
            itemName: CD,
            amount: cD > 1 ? cD : 0,
            amountFontSize: lI[ID],
            enchantmentTier: pD
          })
        })
      }));

    function TI(DD) {
      let {
        amount: CD,
        exact: cD = !1,
        className: ID
      } = DD;
      return (0, SD.jsxs)("span", {
        className: iD()("SmpGold", ID),
        children: [(0, SD.jsx)("span", {
          className: "SmpCoin",
          children: (0, SD.jsx)(PI.d, {
            itemName: "Gold Coin",
            amount: 0
          })
        }), cD ? CD.toLocaleString("en-US") : zI(CD)]
      })
    }

    function GI(DD) {
      let {
        count: CD = 5,
        grid: cD = !1
      } = DD;
      return (0, SD.jsx)("div", {
        className: cD ? "SmpCardGrid" : "SmpList",
        "aria-hidden": "true",
        children: Array.from({
          length: CD
        }, ((DD, CD) => (0, SD.jsxs)("div", {
          className: iD()(cD ? "SmpListingCard" : "SmpRow", "SmpSkeleton"),
          children: [(0, SD.jsx)("div", {
            className: iD()("SmpSlot", cD ? "SmpSlot-big" : "SmpSlot-normal")
          }), (0, SD.jsxs)("div", {
            className: "SmpRowText",
            children: [(0, SD.jsx)("b", {}), (0, SD.jsx)("small", {})]
          }), (0, SD.jsx)("div", {
            className: "SmpSkeletonButton"
          })]
        }, CD)))
      })
    }

    function RI(DD) {
      let {
        title: CD,
        children: cD
      } = DD;
      return (0, SD.jsxs)("div", {
        className: "SmpEmpty",
        children: [(0, SD.jsx)("b", {
          children: CD
        }), cD && (0, SD.jsx)("small", {
          children: cD
        })]
      })
    }

    function kI(DD) {
      let {
        entry: CD
      } = DD;
      return (0, SD.jsx)(RI, {
        title: (0, SD.jsx)(HI.c, {
          text: CD.item.customTitle
        }),
        children: (0, SD.jsx)(HI.c, {
          text: CD.item.description
        })
      })
    }

    function dI(DD) {
      return (0, SD.jsx)(jI.b, {
        ...DD,
        className: iD()("SmpChoice", DD.className),
        reselectable: !0
      })
    }

    function YI() {
      return (0, SD.jsx)("span", {
        className: "SmpLoader",
        children: (0, SD.jsx)(nD.e, {})
      })
    }

    function WI(DD) {
      let {
        value: CD,
        onChange: cD,
        min: pD = 1,
        max: iD,
        step: fD = 1,
        label: bD
      } = DD;
      const QD = (0, ID.useRef)(null),
        wD = (0, ID.useRef)(CD);
      wD.current = CD;
      const [BD, yD] = (0, ID.useState)(null), MD = DD => Math.max(pD, Math.min(iD, Math.floor(DD))), tD = DD => {
        const CD = wD.current,
          ID = "function" === typeof fD ? fD(CD, DD) : fD,
          pD = MD(CD + ID * DD);
        wD.current = pD, cD(pD)
      };
      (0, ID.useEffect)((() => {
        if (null === BD) return;
        let DD;
        const CD = () => {
            yD(null)
          },
          cD = setTimeout((() => {
            DD = setInterval((() => {
              tD(BD);
              const DD = wD.current;
              (BD > 0 ? DD >= iD : DD <= pD) && CD()
            }), 70)
          }), 380);
        return window.addEventListener("pointerup", CD), window.addEventListener("pointercancel", CD), window.addEventListener("blur", CD), () => {
          clearTimeout(cD), clearInterval(DD), window.removeEventListener("pointerup", CD), window.removeEventListener("pointercancel", CD), window.removeEventListener("blur", CD)
        }
      }), [BD]), (0, ID.useEffect)((() => {
        const DD = QD.current;
        DD && document.activeElement !== DD && DD.value !== String(CD) && (DD.value = String(CD))
      }), [CD]), (0, ID.useEffect)((() => {
        const DD = QD.current;
        if (!DD) return;
        const CD = () => {
          DD.value = String(wD.current)
        };
        return DD.addEventListener("blur", CD), () => {
          DD.removeEventListener("blur", CD)
        }
      }), []);
      const ZD = DD => (0, SD.jsx)("button", {
        type: "button",
        className: "SmpStepButton",
        "aria-label": `${DD>0?"More":"Less"} ${bD}`,
        disabled: DD > 0 ? CD >= iD : CD <= pD,
        onPointerDown: CD => {
          0 === CD.button && (tD(DD), yD(DD))
        },
        onKeyDown: CD => {
          "Enter" !== CD.key && " " !== CD.key || tD(DD)
        },
        onContextMenu: DD => {
          DD.preventDefault()
        },
        children: DD > 0 ? "+" : "\u2212"
      });
      return (0, SD.jsxs)("div", {
        className: "SmpStepper",
        children: [ZD(-1), (0, SD.jsx)(mD.b, {
          className: "SmpStepperInput",
          domRef: QD,
          defaultValue: String(CD),
          ariaLabel: bD,
          type: "text",
          blurOnEnter: !0,
          onValueChange: DD => {
            const CD = DD.replace(/[^\d]/g, "");
            QD.current && CD !== DD && (QD.current.value = CD), "" !== CD && cD(MD(Number(CD)))
          }
        }), ZD(1)]
      })
    }

    function sI(DD) {
      return Math.max(1, 10 ** Math.max(0, Math.floor(Math.log10(Math.max(1, DD))) - 1))
    }
    var EI = cD(9062),
      eI = cD(1240);
    const uI = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"];
    eI.v, TD.Gc.length;
    new Map;
    var hI = cD(3083);

    function rI(DD, CD) {
      var cD;
      return CD && (null === (cD = DD[CD]) || void 0 === cD ? void 0 : cD.smp) || null
    }

    function AI(DD, CD) {
      const cD = [];
      for (const pD of aI(DD)) {
        var ID;
        const iD = DD[pD];
        (null === (ID = iD.smp) || void 0 === ID ? void 0 : ID.kind) === CD && cD.push({
          key: pD,
          item: iD,
          meta: iD.smp
        })
      }
      return cD
    }

    function FI(DD, CD) {
      var cD;
      return null !== (cD = AI(DD, CD)[0]) && void 0 !== cD ? cD : null
    }
    const Dp = "50% 0% 50% 0%",
      Cp = [{
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

    function cp(DD) {
      const CD = DD - (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now());
      for (const {
          divisor: cD,
          suffix: ID
        }
        of Cp)
        if (CD >= cD) return `${Math.floor(CD/cD)}${ID}`;
      return "<1s"
    }

    function Ip(DD) {
      const CD = DD.map(mI.d),
        cD = [];
      return CD.forEach(((DD, ID) => {
        const pD = function(DD) {
            const CD = DD.match(/\d+/);
            return CD ? Number(CD[0]) : 0
          }(DD),
          iD = ID === CD.length - 1;
        (iD || 1 === pD || 10 === pD || 100 === pD) && cD.push({
          label: DD,
          quantity: pD,
          isAll: iD
        })
      })), cD
    }
    let pp = null;

    function ip(DD, CD) {
      const cD = CD.trim().toLowerCase();
      if (!cD) return [];
      const ID = DD => {
          if (DD === cD) return 0;
          if (DD.startsWith(cD)) return 1;
          const CD = DD.indexOf(cD);
          return -1 === CD ? -1 : 2 + CD
        },
        pD = [];
      for (const bD of DD) {
        const DD = [ID(bD.lowerLabel), ID(bD.lowerName)].filter((DD => -1 !== DD));
        DD.length && pD.push({
          item: bD,
          rank: Math.min(...DD)
        })
      }
      if (pD.length > 0) return pD.sort(((DD, CD) => DD.rank - CD.rank)).map((DD => DD.item));
      const iD = [...cD],
        fD = DD => {
          let CD = 0;
          for (const cD of iD) {
            if (CD = DD.indexOf(cD, CD), -1 === CD) return !1;
            CD++
          }
          return !0
        };
      return DD.filter((DD => fD(DD.lowerLabel) || fD(DD.lowerName)))
    }

    function fp(DD, CD) {
      var cD;
      return null !== (cD = null === DD || void 0 === DD ? void 0 : DD[CD]) && void 0 !== cD ? cD : CD
    }

    function bp(DD, CD) {
      const cD = DD.userInput;
      return void 0 !== CD && "dropdown" === (null === cD || void 0 === cD ? void 0 : cD.type) && cD.dropdownOptions.map(mI.d).includes(CD) ? CD : function(DD) {
        const CD = DD.userInput;
        if ("dropdown" !== (null === CD || void 0 === CD ? void 0 : CD.type) || 0 === CD.dropdownOptions.length) return null;
        const cD = CD.dropdownOptions.map(mI.d);
        return CD.initialValue && cD.includes(CD.initialValue) ? CD.initialValue : cD[cD.length - 1]
      }(DD)
    }

    function Qp(DD) {
      return void 0 === DD ? "" : JSON.stringify(DD)
    }
    const wp = (0, ID.createContext)(null);

    function Sp() {
      return (0, ID.useContext)(wp)
    }
    var Bp = cD(2587);
    const yp = (0, ID.memo)((function(DD) {
        let {
          name: CD,
          label: cD,
          onPick: ID
        } = DD;
        return (0, SD.jsxs)("button", {
          type: "button",
          className: "SmpCatalogueTile",
          title: cD,
          onClick: () => {
            ID(CD)
          },
          children: [(0, SD.jsx)(LI, {
            item: CD,
            size: "big"
          }), (0, SD.jsx)("span", {
            children: cD
          })]
        })
      })),
      Mp = (0, ID.memo)((function(DD) {
        let {
          items: CD,
          query: cD,
          onPick: pD
        } = DD;
        const {
          t: iD
        } = (0, fD.F)(), [bD, QD] = (0, ID.useState)(new Set), wD = (0, ID.useMemo)((() => function(DD) {
          const CD = new Map;
          for (const cD of DD) {
            let DD = CD.get(cD.category);
            DD || (DD = [], CD.set(cD.category, DD)), DD.push(cD)
          }
          return [...uI, "other"].filter((DD => CD.has(DD))).map((DD => ({
            category: DD,
            items: CD.get(DD)
          })))
        }(CD)), [CD]), BD = (0, ID.useMemo)((() => ip(CD, cD).slice(0, 60)), [CD, cD]);
        return cD.trim() ? 0 === BD.length ? (0, SD.jsx)(RI, {
          title: iD("smpShop:noItemsFound", {
            query: cD.trim()
          }),
          children: iD("smpShop:tryShorterName")
        }) : (0, SD.jsx)(Bp.c, {
          lazyLoadedClassName: "SmpCatalogueGrid",
          observerRoot: "SmpBody",
          rootMargin: Dp,
          observerUpdateDeps: [cD],
          children: BD.map((DD => (0, SD.jsx)(yp, {
            name: DD.name,
            label: DD.label,
            onPick: pD
          }, DD.name)))
        }) : (0, SD.jsx)(SD.Fragment, {
          children: wD.map((DD => {
            let {
              category: CD,
              items: cD
            } = DD;
            const ID = bD.has(CD) || cD.length <= 48,
              fD = ID ? cD : cD.slice(0, 48);
            return (0, SD.jsxs)("section", {
              className: "SmpCatalogueSection",
              children: [(0, SD.jsxs)("h4", {
                children: [iD("other" === CD ? "smpShop:otherItems" : `creativeInventory:${CD}`), !ID && (0, SD.jsx)("button", {
                  type: "button",
                  className: "SmpLink",
                  onClick: () => {
                    QD(new Set([...bD, CD]))
                  },
                  children: iD("smpShop:showAll", {
                    count: cD.length
                  })
                })]
              }), (0, SD.jsx)(Bp.c, {
                lazyLoadedClassName: "SmpCatalogueGrid",
                observerRoot: "SmpBody",
                rootMargin: Dp,
                observerUpdateDeps: [ID],
                children: fD.map((DD => (0, SD.jsx)(yp, {
                  name: DD.name,
                  label: DD.label,
                  onPick: pD
                }, DD.name)))
              })]
            }, CD)
          }))
        })
      }));

    function tp(DD, CD) {
      const {
        searched: cD,
        shown: pD,
        searchFor: iD,
        loading: fD
      } = function(DD, CD) {
        var cD;
        const pD = Sp(),
          [iD, fD] = (0, ID.useState)(void 0),
          bD = (0, ID.useRef)(void 0),
          QD = (0, ID.useRef)(0),
          wD = (0, ID.useRef)(void 0),
          SD = null !== (cD = null === DD || void 0 === DD ? void 0 : DD.meta.item) && void 0 !== cD ? cD : null,
          BD = !!DD && pD.isPending(DD.key);
        (0, ID.useEffect)((() => {
          if (!DD || BD || !CD || void 0 === iD || iD === SD) return;
          const cD = iD === bD.current && pD.gaveUpAt(DD.key) > QD.current && wD.current !== iD;
          (iD !== bD.current || cD) && pD.act(DD.key, null !== iD && void 0 !== iD ? iD : "*", cD) && (cD && (wD.current = iD), bD.current = iD, QD.current = Date.now())
        }), [DD, BD, CD, iD, SD, pD]);
        const yD = (0, ID.useCallback)((DD => {
            bD.current = void 0, wD.current = void 0, fD(DD)
          }), []),
          MD = void 0 !== iD && iD !== SD && (BD || bD.current !== iD);
        return {
          searched: SD,
          shown: MD ? iD : SD,
          searchFor: yD,
          loading: MD || BD || null !== SD && !CD
        }
      }(DD, CD), bD = (0, ID.useMemo)((() => function() {
        var DD;
        let CD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          cD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          ID = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const pD = `${(0,hI.l)()}\x1f${CD.join("\x1e")}\x1f${cD.join("\x1e")}\x1f${JSON.stringify(ID)}`;
        if ((null === (DD = pp) || void 0 === DD ? void 0 : DD.key) === pD) return pp.items;
        const iD = new Set(cD),
          fD = new Set,
          bD = [],
          QD = (DD, CD) => {
            var cD;
            if (!DD || fD.has(DD) || iD.has(DD)) return;
            fD.add(DD);
            const pD = null !== (cD = ID[DD]) && void 0 !== cD ? cD : DD;
            bD.push({
              name: DD,
              label: pD,
              lowerLabel: pD.toLowerCase(),
              lowerName: DD.toLowerCase(),
              category: CD
            })
          };
        for (const SD of (0, EI.creativeItemIds)()) {
          var wD;
          (0, EI.itemIsDisabled)(SD, !0, !0, !1) || (0, EI.showOnlyInCreativeSearch)(SD) || QD((0, hI.h)(SD), null !== (wD = (0, EI.creativeCategoryOf)(SD)) && void 0 !== wD ? wD : "other")
        }
        for (const SD of CD) QD(SD, "other");
        return pp = {
          key: pD,
          items: bD
        }, bD
      }(null === DD || void 0 === DD ? void 0 : DD.meta.extra, null === DD || void 0 === DD ? void 0 : DD.meta.excluded, null === DD || void 0 === DD ? void 0 : DD.meta.names)), [null === DD || void 0 === DD ? void 0 : DD.meta.extra, null === DD || void 0 === DD ? void 0 : DD.meta.excluded, null === DD || void 0 === DD ? void 0 : DD.meta.names]), [QD, wD] = (0, ID.useState)(""), [SD, BD] = (0, ID.useState)(0), [yD, MD] = (0, ID.useState)("recent"), tD = (0, ID.useCallback)((DD => {
        wD(""), BD((DD => DD + 1)), iD(DD)
      }), [iD]), ZD = "browse" === yD || "" !== QD.trim();
      return {
        searched: cD,
        shown: pD,
        searchFor: iD,
        loading: fD,
        catalogue: bD,
        names: null === DD || void 0 === DD ? void 0 : DD.meta.names,
        query: QD,
        setQuery: wD,
        searchBoxKey: SD,
        pickItem: tD,
        setView: MD,
        browsing: ZD
      }
    }

    function Zp(DD) {
      let {
        browser: CD,
        children: cD
      } = DD;
      const {
        t: ID
      } = (0, fD.F)(), pD = Sp();
      return (0, SD.jsxs)("div", {
        className: "SmpTopBar",
        children: [(0, SD.jsx)("div", {
          className: "SmpSearch",
          children: (0, SD.jsx)(mD.b, {
            className: "SmpSearchInput",
            placeholderText: ID("smpShop:searchPlaceholder"),
            defaultValue: CD.query,
            onValueChange: DD => {
              CD.setQuery(DD), CD.searched && DD.trim() && CD.searchFor(null)
            },
            blurOnEnter: !0,
            onEnter: () => {
              const DD = ip(CD.catalogue, CD.query)[0];
              DD ? CD.pickItem(DD.name) : CD.query.trim() && pD.notify(ID("smpShop:noItemsFound", {
                query: CD.query.trim()
              }))
            }
          }, CD.searchBoxKey)
        }), cD]
      })
    }

    function op(DD) {
      let {
        browser: CD,
        recentLabel: cD,
        children: ID
      } = DD;
      const {
        t: pD
      } = (0, fD.F)();
      return (0, SD.jsxs)("div", {
        className: "SmpViewBar",
        children: [(0, SD.jsx)(dI, {
          options: [{
            value: "recent",
            label: cD
          }, {
            value: "browse",
            label: pD("smpShop:browseItems")
          }],
          value: CD.browsing ? "browse" : "recent",
          onChange: CD.setView,
          ariaLabel: pD("smpShop:show")
        }), !CD.browsing && ID]
      })
    }

    function vp(DD) {
      let {
        item: CD,
        names: cD,
        summary: ID,
        onBack: pD,
        children: iD
      } = DD;
      const {
        t: bD
      } = (0, fD.F)();
      return (0, SD.jsxs)("div", {
        className: "SmpItemHeader",
        children: [(0, SD.jsx)(oD.e, {
          className: "SmpBackButton",
          onClick: pD,
          children: bD("general:back")
        }), (0, SD.jsx)(LI, {
          item: CD,
          size: "big"
        }), (0, SD.jsxs)("div", {
          className: "SmpItemHeaderText",
          children: [(0, SD.jsx)("b", {
            children: fp(cD, CD)
          }), ID && (0, SD.jsx)("small", {
            children: ID
          })]
        }), iD]
      })
    }

    function Np(DD) {
      let {
        browser: CD,
        className: cD,
        action: ID,
        above: pD,
        list: fD,
        summary: bD,
        recentLabel: QD,
        listControls: wD,
        onBack: BD
      } = DD;
      return (0, SD.jsxs)("div", {
        className: iD()("SmpScreen", cD),
        children: [(0, SD.jsx)(Zp, {
          browser: CD,
          children: ID
        }), CD.shown && (0, SD.jsx)(vp, {
          item: CD.shown,
          names: CD.names,
          summary: !CD.loading && bD,
          onBack: () => {
            null === BD || void 0 === BD || BD(), CD.searchFor(null)
          },
          children: wD
        }), pD, CD.shown ? fD : (0, SD.jsxs)(SD.Fragment, {
          children: [(0, SD.jsx)(op, {
            browser: CD,
            recentLabel: QD,
            children: wD
          }), CD.browsing ? (0, SD.jsx)(Mp, {
            items: CD.catalogue,
            query: CD.query,
            onPick: CD.pickItem
          }) : fD]
        })]
      })
    }

    function gp(DD, CD) {
      const cD = DD.map((DD => {
        let {
          meta: CD
        } = DD;
        return CD.pricePerItem
      }));
      return "min" === CD ? Math.min(...cD) : Math.max(...cD)
    }
    var Xp = cD(6320);
    const mp = (0, ID.memo)((function(DD) {
      var CD;
      const {
        t: cD
      } = (0, fD.F)(), ID = null === DD.seller, pD = DD.quantity * DD.pricePerItem;
      return (0, SD.jsxs)("div", {
        className: DD.grid ? "SmpListingCard" : "SmpRow SmpListingRow",
        children: [(0, SD.jsx)(LI, {
          item: DD.item,
          amount: DD.quantity,
          size: DD.grid ? "big" : "normal",
          tier: DD.tier
        }), (0, SD.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, SD.jsx)("b", {
            children: (0, SD.jsx)(HI.c, {
              text: null !== (CD = DD.title) && void 0 !== CD ? CD : `${DD.quantity}x ${DD.item}`
            })
          }), (0, SD.jsxs)("small", {
            className: "SmpListingFacts",
            children: [(0, SD.jsx)("span", {
              children: ID ? cD("smpShop:you") : (0, SD.jsx)(HI.c, {
                text: [{
                  entityName: DD.seller
                }]
              })
            }), (0, SD.jsx)("span", {
              children: cD("smpShop:timeLeft", {
                time: cp(DD.expiresAt)
              })
            })]
          })]
        }), (0, SD.jsxs)("div", {
          className: "SmpRowPrice",
          children: [(0, SD.jsx)(TI, {
            amount: DD.pricePerItem
          }), (0, SD.jsx)("small", {
            children: cD("smpShop:each")
          })]
        }), (0, SD.jsx)(oD.i, {
          className: "SmpBuyButton",
          disabled: ID || !DD.canAfford && !DD.busy,
          loading: DD.busy,
          onClick: () => {
            DD.onBuy(DD.itemKey)
          },
          children: ID ? cD("smpShop:yours") : (0, SD.jsx)(TI, {
            amount: pD
          })
        })]
      })
    }));

    function np(DD) {
      let {
        view: CD,
        onChange: cD
      } = DD;
      const {
        t: ID
      } = (0, fD.F)();
      return (0, SD.jsx)(jI.b, {
        className: "SmpChoice SmpViewToggle",
        ariaLabel: ID("smpShop:layout"),
        options: [{
          value: "list",
          label: (0, SD.jsx)(bD.c, {
            name: "list"
          }),
          ariaLabel: ID("smpShop:listView")
        }, {
          value: "grid",
          label: (0, SD.jsx)(bD.c, {
            name: "grid-2"
          }),
          ariaLabel: ID("smpShop:gridView")
        }],
        value: CD,
        onChange: cD
      })
    }

    function Op(DD) {
      let {
        entries: CD,
        view: cD
      } = DD;
      const {
        t: ID
      } = (0, fD.F)(), pD = Sp(), iD = "grid" === cD;
      return (0, SD.jsxs)(SD.Fragment, {
        children: [!iD && (0, SD.jsxs)("div", {
          className: "SmpColumns",
          "aria-hidden": "true",
          children: [(0, SD.jsx)("span", {}), (0, SD.jsx)("span", {
            children: ID("smpShop:columnItem")
          }), (0, SD.jsx)("span", {
            children: ID("smpShop:columnPriceEach")
          }), (0, SD.jsx)("span", {
            children: ID("smpShop:columnTotal")
          })]
        }), (0, SD.jsx)(Bp.c, {
          lazyLoadedClassName: iD ? "SmpCardGrid" : "SmpList",
          observerRoot: "SmpBody",
          rootMargin: Dp,
          observerUpdateDeps: [CD.length],
          children: CD.map((DD => {
            var CD, cD;
            let {
              key: ID,
              item: fD,
              meta: bD
            } = DD;
            const QD = bD.quantity * bD.pricePerItem;
            return (0, SD.jsx)(mp, {
              itemKey: ID,
              item: bD.item,
              title: fD.customTitle,
              quantity: bD.quantity,
              pricePerItem: bD.pricePerItem,
              seller: bD.seller,
              expiresAt: bD.expiresAt,
              tier: null !== (CD = null === (cD = fD.enchant) || void 0 === cD ? void 0 : cD.tier) && void 0 !== CD ? CD : null,
              busy: pD.isPending(ID) || null !== bD.seller && !1 === fD.canBuy,
              canAfford: pD.canAfford(fD, QD),
              grid: iD,
              onBuy: pD.act
            }, ID)
          }))
        }, cD)]
      })
    }
    const Pp = [1, 10, 100],
      Hp = [1, 10, 100, 999];

    function Up(DD) {
      var CD, cD, pD, QD, wD, BD, yD, MD, tD, ZD;
      const {
        t: vD
      } = (0, fD.F)(), ND = Sp(), {
        creator: gD,
        mode: XD
      } = DD, [nD, OD] = (0, ID.useState)(null !== (CD = null === gD || void 0 === gD ? void 0 : gD.meta.item) && void 0 !== CD ? CD : null), [PD, HD] = (0, ID.useState)(1), [UD, xD] = (0, ID.useState)(0), [qD, JD] = (0, ID.useState)(""), [KD, aD] = (0, ID.useState)(0), VD = (0, ID.useRef)(nD), zD = (0, ID.useRef)(!1), [jD, lD] = (0, ID.useState)(!1), LD = null !== (cD = null === gD || void 0 === gD ? void 0 : gD.meta.item) && void 0 !== cD ? cD : null, TD = null !== (pD = null === gD || void 0 === gD ? void 0 : gD.meta.Lb) && void 0 !== pD ? pD : 0;
      (0, ID.useEffect)((() => {
        DD.searching || null === LD || LD === VD.current || (VD.current = LD, zD.current = !1, OD(LD), xD(0), HD("list" === XD ? Math.max(1, TD) : 1))
      }), [LD, DD.searching]);
      const GD = !!gD && !!nD && gD.meta.item === nD,
        RD = GD ? gD.meta.Lb : null !== (QD = null === (wD = DD.inventory) || void 0 === wD || null === (BD = wD.find((DD => DD.item === nD))) || void 0 === BD ? void 0 : BD.quantity) && void 0 !== QD ? QD : 0,
        kD = "list" === XD ? Math.max(1, RD) : 45954,
        dD = null !== (yD = DD.prices[0]) && void 0 !== yD ? yD : null,
        YD = DD.prices.length ? Math.round(DD.prices.reduce(((DD, CD) => DD + CD), 0) / DD.prices.length) : null,
        WD = null === (MD = DD.inventory) || void 0 === MD || null === (tD = MD.find((DD => DD.item === nD))) || void 0 === tD ? void 0 : tD.sellPrice;
      (0, ID.useEffect)((() => {
        var DD;
        GD && (HD((DD => "list" === XD ? Math.min(Math.max(1, DD), Math.max(1, RD)) : DD)), zD.current || xD(null !== (DD = null !== dD && void 0 !== dD ? dD : YD) && void 0 !== DD ? DD : Math.max(1, null !== WD && void 0 !== WD ? WD : 1)))
      }), [GD, RD, nD, dD, YD]);
      const sD = DD => {
          zD.current = !0, xD(DD)
        },
        ED = CD => {
          var cD, ID, pD;
          VD.current = CD, zD.current = !1, lD(!1), JD(""), aD((DD => DD + 1)), OD(CD), xD(0), HD("list" === XD && null !== (cD = null === (ID = DD.inventory) || void 0 === ID || null === (pD = ID.find((DD => DD.item === CD))) || void 0 === pD ? void 0 : pD.quantity) && void 0 !== cD ? cD : 1), (null === gD || void 0 === gD ? void 0 : gD.meta.item) !== CD && DD.onPickItem(CD)
        },
        eD = PD * UD,
        uD = "list" === XD && null !== gD && void 0 !== gD && gD.meta.fee ? function(DD, CD) {
          const cD = Math.max(0, CD - DD.taxFreeAllowance);
          return Math.ceil(Math.round(cD * DD.rate * 1e6) / 1e6)
        }(gD.meta.fee, eD) : 0,
        hD = !!gD && ND.isPending(gD.key),
        rD = GD && !DD.searching && PD >= 1 && UD >= 1 && ("order" === XD || RD >= PD) && !hD,
        AD = !!nD && !GD && !DD.searching && PD >= 1 && UD >= 1,
        FD = () => {
          rD ? ND.act(gD.key, `${PD}|${UD}`) : AD && (DD.onPickItem(nD), lD(!0))
        };
      (0, ID.useEffect)((() => {
        jD && GD && !DD.searching && (lD(!1), FD())
      }), [jD, GD, DD.searching]);
      const DC = !!nD && !GD && (DD.searching || jD),
        CC = nD ? fp(DD.names, nD) : "",
        cC = (0, ID.useMemo)((() => ip(DD.catalogue, qD).slice(0, 8)), [DD.catalogue, qD]),
        IC = ("list" === XD ? Pp.filter((DD => DD < RD)) : Hp).map((DD => ({
          value: DD,
          label: String(DD)
        })));
      "list" === XD && RD > 0 && IC.push({
        value: RD,
        label: vD("smpShop:all", {
          count: RD
        })
      });
      const pC = [];
      return null !== dD && (dD > 1 && pC.push({
        value: dD - 1,
        label: vD("smpShop:undercut", {
          price: zI(dD - 1)
        })
      }), pC.push({
        value: dD,
        label: vD("smpShop:lowest", {
          price: zI(dD)
        })
      })), null !== YD && YD !== dD && pC.push({
        value: YD,
        label: vD("smpShop:average", {
          price: zI(YD)
        })
      }), (0, SD.jsxs)("div", {
        className: "SmpTradeForm",
        children: [(0, SD.jsxs)("div", {
          className: "SmpTradeFormHead",
          children: [(0, SD.jsx)("b", {
            children: vD("list" === XD ? "smpShop:sellOnMarket" : "smpShop:createOrder")
          }), (0, SD.jsx)("button", {
            type: "button",
            className: "SmpIconButton",
            "aria-label": vD("smpShop:close"),
            onClick: DD.onClose,
            children: (0, SD.jsx)(bD.c, {
              name: "xmark"
            })
          })]
        }), "list" === XD && (0, SD.jsx)("div", {
          className: "SmpPicker",
          role: "listbox",
          children: null !== (ZD = DD.inventory) && void 0 !== ZD && ZD.length ? DD.inventory.map((DD => {
            let {
              item: CD,
              quantity: cD
            } = DD;
            return (0, SD.jsx)("button", {
              type: "button",
              title: CD,
              className: iD()("SmpPickerSlot", {
                SmpPickerSlotOn: CD === nD
              }),
              onClick: () => {
                ED(CD)
              },
              children: (0, SD.jsx)(LI, {
                item: CD,
                amount: cD
              })
            }, CD)
          })) : (0, SD.jsx)("span", {
            className: "SmpMuted",
            children: vD("smpShop:nothingToList")
          })
        }), ("list" === XD || !nD) && (0, SD.jsxs)("div", {
          className: "SmpItemSearch",
          children: [(0, SD.jsx)(mD.b, {
            className: "SmpSearchInput",
            placeholderText: vD("list" === XD ? "smpShop:listSearchPlaceholder" : "smpShop:orderSearchPlaceholder"),
            defaultValue: qD,
            onValueChange: JD,
            blurOnEnter: !0,
            onEnter: () => {
              cC[0] && ED(cC[0].name)
            }
          }, KD), cC.length > 0 && (0, SD.jsx)("div", {
            className: "SmpPicker",
            children: cC.map((DD => {
              let {
                name: CD
              } = DD;
              return (0, SD.jsx)("button", {
                type: "button",
                title: CD,
                className: iD()("SmpPickerSlot", {
                  SmpPickerSlotOn: CD === nD
                }),
                onClick: () => {
                  ED(CD)
                },
                children: (0, SD.jsx)(LI, {
                  item: CD
                })
              }, CD)
            }))
          })]
        }), nD && (0, SD.jsxs)(SD.Fragment, {
          children: [(0, SD.jsxs)("div", {
            className: "SmpPickedName",
            children: [CC, DC && (0, SD.jsx)(YI, {})]
          }), (0, SD.jsxs)("div", {
            className: "SmpFormGrid",
            children: [(0, SD.jsxs)("div", {
              className: "SmpField",
              children: [(0, SD.jsxs)("span", {
                children: [vD("smpShop:quantity"), "list" === XD && GD && (0, SD.jsx)("small", {
                  children: vD("smpShop:youHave", {
                    count: RD
                  })
                })]
              }), (0, SD.jsx)(WI, {
                value: PD,
                onChange: HD,
                max: kD,
                label: vD("smpShop:quantity")
              }), (0, SD.jsx)(dI, {
                options: IC,
                value: PD,
                onChange: HD,
                ariaLabel: vD("smpShop:quantity")
              })]
            }), (0, SD.jsxs)("div", {
              className: "SmpField",
              children: [(0, SD.jsx)("span", {
                children: vD("smpShop:pricePerItem")
              }), (0, SD.jsx)(WI, {
                value: Math.max(1, UD),
                onChange: sD,
                max: 9999999,
                step: sI,
                label: vD("smpShop:pricePerItem")
              }), (0, SD.jsx)(dI, {
                options: pC,
                value: UD,
                onChange: sD,
                ariaLabel: vD("smpShop:pricePerItem")
              })]
            })]
          }), "list" === XD && (0, SD.jsxs)("div", {
            className: "SmpTradeSummary",
            children: [(0, SD.jsxs)("span", {
              children: [vD("smpShop:youGet"), " ", (0, SD.jsx)(TI, {
                amount: Math.max(0, eD - uD),
                exact: !0
              })]
            }), (0, SD.jsx)("small", {
              children: uD > 0 ? vD("smpShop:listingFee", {
                fee: uD.toLocaleString("en-US")
              }) : vD("smpShop:listingRules")
            })]
          }), (0, SD.jsx)(oD.r, {
            className: "SmpSubmit",
            disabled: !rD && !AD && !hD,
            loading: hD || DC || GD && DD.searching,
            onClick: FD,
            children: "list" === XD ? vD("smpShop:listButton", {
              count: PD,
              item: CC
            }) : (0, SD.jsxs)(SD.Fragment, {
              children: [vD("smpShop:orderButton", {
                count: PD,
                item: CC
              }), " ", UD >= 1 && (0, SD.jsx)(TI, {
                amount: eD
              })]
            })
          })]
        })]
      })
    }

    function xp() {
      var DD;
      const {
        t: CD
      } = (0, fD.F)(), cD = Sp(), pD = null === (DD = cD.shopInfo[cD.categoryKey]) || void 0 === DD ? void 0 : DD.items, iD = FI(pD, "search"), bD = FI(pD, "creator"), QD = AI(pD, "enchantedCreator"), wD = AI(pD, "listing"), BD = FI(pD, "empty"), yD = tp(iD, wD.length > 0 || null !== BD), {
        searched: MD,
        shown: tD,
        loading: ZD
      } = yD, [vD, ND] = (0, ID.useState)(!1), [gD, XD] = function() {
        const [DD, CD] = (0, Xp.c)("smpMarketView", "list");
        return ["grid" === DD ? "grid" : "list", CD]
      }(), mD = "grid" === gD, nD = (0, ID.useMemo)((() => wD.filter((DD => {
        let {
          meta: CD
        } = DD;
        return null !== CD.seller && CD.item === MD
      })).map((DD => {
        let {
          meta: CD
        } = DD;
        return CD.pricePerItem
      })).sort(((DD, CD) => DD - CD))), [wD, MD]), OD = (0, ID.useMemo)((() => {
        const DD = new Set(yD.catalogue.map((DD => {
          let {
            name: CD
          } = DD;
          return CD
        })));
        return function(DD) {
          for (const CD in DD)
            if ("sell" === DD[CD].smp) return AI(DD[CD].items, "sell").filter((DD => {
              let {
                item: CD
              } = DD;
              return !CD.enchant
            })).map((DD => {
              let {
                meta: CD
              } = DD;
              return {
                item: CD.item,
                quantity: CD.quantity,
                sellPrice: CD.pricePerItem
              }
            }));
          return []
        }(cD.shopInfo).filter((CD => {
          let {
            item: cD
          } = CD;
          return DD.has(cD)
        }))
      }), [cD.shopInfo, yD.catalogue]);
      return (0, SD.jsx)(Np, {
        browser: yD,
        className: "SmpMarketTab",
        recentLabel: CD("smpShop:recentlyListed"),
        action: (0, SD.jsx)(oD.r, {
          className: "SmpSellButton",
          onClick: () => {
            ND((DD => !DD))
          },
          children: CD("smpShop:sell")
        }),
        above: vD && (0, SD.jsxs)(SD.Fragment, {
          children: [(0, SD.jsx)(Up, {
            mode: "list",
            creator: bD,
            inventory: OD,
            catalogue: yD.catalogue,
            names: yD.names,
            searching: ZD,
            prices: nD,
            onPickItem: yD.searchFor,
            onClose: () => {
              ND(!1)
            }
          }), QD.length > 0 && (0, SD.jsx)(qp, {
            entries: QD
          })]
        }),
        listControls: (0, SD.jsx)(np, {
          view: gD,
          onChange: XD
        }),
        summary: tD && (wD.length > 0 ? CD(1 === wD.length ? "smpShop:listingSummaryOne" : "smpShop:listingSummary", {
          count: wD.length,
          price: zI(gp(wD, "min"))
        }) : CD("smpShop:noOneSelling", {
          item: fp(yD.names, tD)
        })),
        list: ZD ? (0, SD.jsx)(GI, {
          grid: mD
        }) : wD.length > 0 ? (0, SD.jsx)(Op, {
          entries: wD,
          view: gD
        }) : BD ? (0, SD.jsx)(kI, {
          entry: BD
        }) : (0, SD.jsx)(GI, {
          count: 3,
          grid: mD
        })
      })
    }

    function qp(DD) {
      let {
        entries: CD
      } = DD;
      const {
        t: cD
      } = (0, fD.F)(), pD = Sp(), [iD, bD] = (0, ID.useState)({});
      return (0, SD.jsx)("div", {
        className: "SmpList",
        children: CD.map((DD => {
          var CD, ID, fD;
          let {
            key: QD,
            item: wD,
            meta: BD
          } = DD;
          const yD = null !== (CD = iD[QD]) && void 0 !== CD ? CD : 1;
          return (0, SD.jsxs)("div", {
            className: "SmpRow",
            children: [(0, SD.jsx)(LI, {
              item: BD.item,
              amount: BD.quantity,
              tier: null !== (ID = null === (fD = wD.enchant) || void 0 === fD ? void 0 : fD.tier) && void 0 !== ID ? ID : null
            }), (0, SD.jsxs)("div", {
              className: "SmpRowText",
              children: [(0, SD.jsx)("b", {
                children: (0, SD.jsx)(HI.c, {
                  text: wD.customTitle
                })
              }), (0, SD.jsx)("small", {
                children: cD("smpShop:enchantedListing")
              })]
            }), (0, SD.jsx)(WI, {
              value: yD,
              onChange: DD => {
                bD({
                  ...iD,
                  [QD]: DD
                })
              },
              max: 9999999,
              step: sI,
              label: cD("smpShop:pricePerItem")
            }), (0, SD.jsxs)(oD.r, {
              loading: pD.isPending(QD),
              onClick: () => {
                pD.act(QD, String(yD))
              },
              children: [cD("smpShop:list"), " ", (0, SD.jsx)(TI, {
                amount: yD
              })]
            })]
          }, QD)
        }))
      })
    }
    const Jp = (0, ID.memo)((function(DD) {
      let {
        itemKey: CD,
        item: cD,
        quantity: ID,
        pricePerItem: pD,
        tier: fD,
        selected: bD,
        onSelect: QD
      } = DD;
      return (0, SD.jsxs)("button", {
        type: "button",
        className: iD()("SmpInventorySlot", {
          SmpInventorySlotOn: bD
        }),
        title: cD,
        onClick: () => {
          QD(CD)
        },
        children: [(0, SD.jsx)(LI, {
          item: cD,
          amount: ID,
          tier: fD
        }), (0, SD.jsx)(TI, {
          amount: pD
        })]
      })
    }));

    function Kp() {
      var DD;
      const {
        t: CD
      } = (0, fD.F)(), cD = Sp(), pD = null === (DD = cD.shopInfo[cD.categoryKey]) || void 0 === DD ? void 0 : DD.items, bD = AI(pD, "sell"), QD = FI(pD, "empty"), [wD, BD] = (0, ID.useState)(null), [yD, MD] = (0, ID.useState)({}), tD = bD.find((DD => {
        let {
          key: CD
        } = DD;
        return CD === wD
      }));
      return 0 === bD.length ? (0, SD.jsx)("div", {
        className: "SmpScreen",
        children: (0, SD.jsx)(RI, {
          title: QD ? (0, SD.jsx)(HI.c, {
            text: QD.item.customTitle
          }) : CD("smpShop:nothingToSell"),
          children: QD && (0, SD.jsx)(HI.c, {
            text: QD.item.description
          })
        })
      }) : (0, SD.jsxs)("div", {
        className: "SmpScreen SmpInstantSellTab",
        children: [(0, SD.jsx)("div", {
          className: "SmpInventoryGrid",
          children: bD.map((DD => {
            var CD, cD;
            let {
              key: ID,
              item: pD,
              meta: iD
            } = DD;
            return (0, SD.jsx)(Jp, {
              itemKey: ID,
              item: iD.item,
              quantity: iD.quantity,
              pricePerItem: iD.pricePerItem,
              tier: null !== (CD = null === (cD = pD.enchant) || void 0 === cD ? void 0 : cD.tier) && void 0 !== CD ? CD : null,
              selected: ID === wD,
              onSelect: BD
            }, ID)
          }))
        }), (0, SD.jsx)("div", {
          className: iD()("SmpSellBar", {
            SmpSellBarIdle: !tD
          }),
          children: tD ? (0, SD.jsx)(ap, {
            entry: tD,
            choice: bp(tD.item, yD[tD.key]),
            onChoose: DD => {
              MD({
                ...yD,
                [tD.key]: DD
              })
            }
          }) : (0, SD.jsx)("span", {
            className: "SmpMuted",
            children: CD("smpShop:tapToSell")
          })
        })]
      })
    }

    function ap(DD) {
      var CD, cD, ID, pD;
      let {
        entry: iD,
        choice: bD,
        onChoose: QD
      } = DD;
      const {
        t: wD
      } = (0, fD.F)(), BD = Sp(), {
        key: yD,
        item: MD,
        meta: tD
      } = iD, ZD = Ip("dropdown" === (null === (CD = MD.userInput) || void 0 === CD ? void 0 : CD.type) ? MD.userInput.dropdownOptions : []), vD = null === bD ? 0 : -(0, mI.c)(MD, bD);
      return (0, SD.jsxs)(SD.Fragment, {
        children: [(0, SD.jsx)(LI, {
          item: tD.item,
          amount: tD.quantity,
          tier: null !== (cD = null === (ID = MD.enchant) || void 0 === ID ? void 0 : ID.tier) && void 0 !== cD ? cD : null
        }), (0, SD.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, SD.jsx)("b", {
            children: (0, SD.jsx)(HI.c, {
              text: null !== (pD = MD.customTitle) && void 0 !== pD ? pD : tD.item
            })
          }), (0, SD.jsx)("small", {
            children: wD("smpShop:sellEach", {
              count: tD.quantity
            })
          })]
        }), (0, SD.jsx)(dI, {
          options: ZD.map((DD => {
            let {
              label: CD,
              quantity: cD,
              isAll: ID
            } = DD;
            return {
              value: CD,
              label: ID ? wD("smpShop:all", {
                count: cD
              }) : String(cD)
            }
          })),
          value: bD,
          onChange: QD,
          ariaLabel: wD("smpShop:quantity")
        }), (0, SD.jsxs)(oD.r, {
          loading: BD.isPending(yD),
          disabled: null === bD,
          onClick: () => {
            BD.act(yD, bD)
          },
          children: [wD("smpShop:sellButton"), " ", (0, SD.jsx)(TI, {
            amount: vD
          })]
        })]
      })
    }

    function Vp() {
      var DD;
      const {
        t: CD
      } = (0, fD.F)(), cD = Sp(), ID = null === (DD = cD.shopInfo[cD.categoryKey]) || void 0 === DD ? void 0 : DD.items, pD = AI(ID, "collect"), iD = AI(ID, "myListing"), bD = (DD, CD) => cD.isPending(DD) || !1 === CD.canBuy;
      return (0, SD.jsxs)("div", {
        className: "SmpScreen",
        children: [(0, SD.jsx)("h3", {
          className: "SmpSectionTitle",
          children: CD("smpShop:readyToCollect")
        }), pD.length > 0 ? (0, SD.jsx)("div", {
          className: "SmpList",
          children: pD.map((DD => {
            var ID, pD;
            let {
              key: iD,
              item: fD,
              meta: QD
            } = DD;
            return (0, SD.jsxs)("div", {
              className: "SmpRow",
              children: [(0, SD.jsx)(LI, {
                item: "sold" === QD.type ? "Gold Coin" : QD.item,
                amount: "sold" === QD.type ? 0 : QD.quantity,
                tier: null !== (ID = null === (pD = fD.enchant) || void 0 === pD ? void 0 : pD.tier) && void 0 !== ID ? ID : null
              }), (0, SD.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, SD.jsx)("b", {
                  children: (0, SD.jsx)(HI.c, {
                    text: fD.customTitle
                  })
                }), (0, SD.jsx)("small", {
                  children: (0, SD.jsx)(HI.c, {
                    text: fD.description
                  })
                })]
              }), (0, SD.jsx)(oD.o, {
                loading: bD(iD, fD),
                onClick: () => {
                  cD.act(iD)
                },
                children: CD("smpShop:collect")
              })]
            }, iD)
          }))
        }) : (0, SD.jsx)(RI, {
          title: CD("smpShop:nothingToCollect"),
          children: CD("smpShop:nothingToCollectHint")
        }), (0, SD.jsx)("h3", {
          className: "SmpSectionTitle",
          children: CD("smpShop:activeListings", {
            count: iD.length
          })
        }), iD.length > 0 ? (0, SD.jsx)("div", {
          className: "SmpList",
          children: iD.map((DD => {
            var ID, pD;
            let {
              key: iD,
              item: fD,
              meta: QD
            } = DD;
            return (0, SD.jsxs)("div", {
              className: "SmpRow",
              children: [(0, SD.jsx)(LI, {
                item: QD.item,
                amount: QD.quantity,
                tier: null !== (ID = null === (pD = fD.enchant) || void 0 === pD ? void 0 : pD.tier) && void 0 !== ID ? ID : null
              }), (0, SD.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, SD.jsx)("b", {
                  children: (0, SD.jsx)(HI.c, {
                    text: fD.customTitle
                  })
                }), (0, SD.jsx)("small", {
                  children: CD("smpShop:timeLeft", {
                    time: cp(QD.expiresAt)
                  })
                })]
              }), (0, SD.jsxs)("div", {
                className: "SmpRowPrice",
                children: [(0, SD.jsx)(TI, {
                  amount: QD.pricePerItem
                }), (0, SD.jsx)("small", {
                  children: CD("smpShop:each")
                })]
              }), (0, SD.jsx)(oD.J, {
                loading: bD(iD, fD),
                onClick: () => {
                  cD.act(iD)
                },
                children: CD("smpShop:cancel")
              })]
            }, iD)
          }))
        }) : (0, SD.jsx)(RI, {
          title: CD("smpShop:noActiveListings"),
          children: CD("smpShop:noActiveListingsHint")
        })]
      })
    }

    function zp(DD) {
      let {
        done: CD,
        of: cD
      } = DD;
      return (0, SD.jsx)("span", {
        className: "SmpProgress",
        children: (0, SD.jsx)("i", {
          style: {
            width: `${Math.min(100,CD/Math.max(1,cD)*100)}%`
          }
        })
      })
    }

    function jp(DD) {
      var CD, cD, ID;
      let {
        entry: pD,
        choice: iD,
        onChoose: bD
      } = DD;
      const {
        t: QD
      } = (0, fD.F)(), wD = Sp(), {
        key: BD,
        item: yD,
        meta: MD
      } = pD, tD = "dropdown" === (null === (CD = yD.userInput) || void 0 === CD ? void 0 : CD.type) ? yD.userInput.dropdownOptions : [], ZD = !0 === MD.processing, vD = null !== MD.creator && (MD.Lb > 0 || ZD), ND = vD && MD.Lb > 0 ? Ip(tD) : [], gD = null === iD ? 0 : null !== (cD = null === (ID = ND.find((DD => DD.label === iD))) || void 0 === ID ? void 0 : ID.quantity) && void 0 !== cD ? cD : 0;
      return (0, SD.jsxs)("div", {
        className: "SmpRow SmpOrderRow",
        children: [(0, SD.jsx)(LI, {
          item: MD.item
        }), (0, SD.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, SD.jsx)("b", {
            children: (0, SD.jsx)(HI.c, {
              text: yD.customTitle
            })
          }), (0, SD.jsxs)("small", {
            children: [(0, SD.jsx)(TI, {
              amount: MD.pricePerItem
            }), " ", QD("smpShop:each"), " \xb7", " ", null === MD.creator ? QD("smpShop:you") : (0, SD.jsx)(HI.c, {
              text: [{
                entityName: MD.creator
              }]
            })]
          }), (0, SD.jsx)(zp, {
            done: MD.delivered,
            of: MD.wanted
          })]
        }), vD ? (0, SD.jsxs)(SD.Fragment, {
          children: [(0, SD.jsx)(dI, {
            options: ND.map((DD => {
              let {
                label: CD,
                quantity: cD,
                isAll: ID
              } = DD;
              return {
                value: CD,
                label: ID ? QD("smpShop:max", {
                  count: cD
                }) : String(cD)
              }
            })),
            value: iD,
            onChange: bD,
            ariaLabel: QD("smpShop:quantity")
          }), (0, SD.jsxs)(oD.r, {
            loading: wD.isPending(BD) || ZD,
            disabled: null === iD,
            onClick: () => {
              wD.act(BD, iD)
            },
            children: [QD("smpShop:deliver"), " ", (0, SD.jsx)(TI, {
              amount: gD * MD.pricePerItem
            })]
          })]
        }) : (0, SD.jsx)("span", {
          className: "SmpMuted SmpRowNote",
          children: null === MD.creator ? QD("smpShop:yourOrder") : QD("smpShop:youHave", {
            count: 0
          })
        })]
      })
    }

    function lp() {
      var DD;
      const {
        t: CD
      } = (0, fD.F)(), cD = Sp(), pD = null === (DD = cD.shopInfo[cD.categoryKey]) || void 0 === DD ? void 0 : DD.items, iD = FI(pD, "search"), bD = FI(pD, "creator"), QD = AI(pD, "order"), wD = FI(pD, "empty"), BD = tp(iD, QD.length > 0 || null !== wD), [yD, MD] = (0, ID.useState)(!1), [tD, ZD] = (0, ID.useState)({});
      return (0, SD.jsx)(Np, {
        browser: BD,
        recentLabel: CD("smpShop:recentOrders"),
        action: (0, SD.jsx)(oD.r, {
          onClick: () => {
            MD((DD => !DD))
          },
          children: CD("smpShop:createOrder")
        }),
        above: yD && (0, SD.jsx)(Up, {
          mode: "order",
          creator: bD,
          catalogue: BD.catalogue,
          names: BD.names,
          searching: BD.loading,
          prices: [],
          onPickItem: BD.searchFor,
          onClose: () => {
            MD(!1)
          }
        }),
        onBack: () => {
          MD(!1)
        },
        summary: QD.length > 0 && CD(1 === QD.length ? "smpShop:orderSummaryOne" : "smpShop:orderSummary", {
          count: QD.length,
          price: zI(gp(QD, "max"))
        }),
        list: BD.loading ? (0, SD.jsx)(GI, {}) : QD.length > 0 ? (0, SD.jsx)(Bp.c, {
          lazyLoadedClassName: "SmpList",
          observerRoot: "SmpBody",
          rootMargin: Dp,
          observerUpdateDeps: [QD.length],
          children: QD.map((DD => (0, SD.jsx)(jp, {
            entry: DD,
            choice: bp(DD.item, tD[DD.key]),
            onChoose: CD => {
              ZD({
                ...tD,
                [DD.key]: CD
              })
            }
          }, DD.key)))
        }) : wD ? (0, SD.jsx)(kI, {
          entry: wD
        }) : (0, SD.jsx)(GI, {
          count: 3
        })
      })
    }

    function Lp() {
      var DD;
      const {
        t: CD
      } = (0, fD.F)(), cD = Sp(), ID = AI(null === (DD = cD.shopInfo[cD.categoryKey]) || void 0 === DD ? void 0 : DD.items, "myOrder");
      return 0 === ID.length ? (0, SD.jsx)("div", {
        className: "SmpScreen",
        children: (0, SD.jsx)(RI, {
          title: CD("smpShop:noOrders"),
          children: CD("smpShop:noOrdersHint")
        })
      }) : (0, SD.jsx)("div", {
        className: "SmpScreen",
        children: (0, SD.jsx)("div", {
          className: "SmpList",
          children: ID.map((DD => {
            let {
              key: ID,
              item: pD,
              meta: iD
            } = DD;
            const fD = cD.isPending(ID) || !1 === pD.canBuy;
            return (0, SD.jsxs)("div", {
              className: "SmpRow",
              children: [(0, SD.jsx)(LI, {
                item: iD.item,
                amount: iD.collectable
              }), (0, SD.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, SD.jsx)("b", {
                  children: (0, SD.jsx)(HI.c, {
                    text: pD.customTitle
                  })
                }), (0, SD.jsxs)("small", {
                  children: [(0, SD.jsx)(TI, {
                    amount: iD.pricePerItem
                  }), " ", CD("smpShop:each"), iD.collectable > 0 && ` \xb7 ${CD("smpShop:readyCount",{count:iD.collectable})}`]
                }), (0, SD.jsx)(zp, {
                  done: iD.delivered,
                  of: iD.wanted
                })]
              }), iD.collectable > 0 ? (0, SD.jsx)(oD.o, {
                loading: fD,
                onClick: () => {
                  cD.act(ID)
                },
                children: CD("smpShop:collectCount", {
                  count: iD.collectable
                })
              }) : (0, SD.jsx)(oD.J, {
                loading: fD,
                onClick: () => {
                  cD.act(ID)
                },
                children: CD("smpShop:cancel")
              })]
            }, ID)
          }))
        })
      })
    }
    const Tp = new Set(["search", "creator", "enchantedCreator", "collect", "myOrder", "order"]),
      Gp = {
        sell: "coins",
        market: "store",
        collect: "backpack",
        orders: "file-clipboard",
        myOrders: "location-check"
      };

    function Rp(DD, CD) {
      let cD = !1;
      const ID = {};
      for (const pD in DD) CD(pD, DD[pD]) ? ID[pD] = DD[pD] : cD = !0;
      return cD ? ID : DD
    }

    function kp(DD) {
      var CD, cD, pD, QD;
      const {
        show: wD,
        shopInfo: BD,
        selectedCategoryKey: yD
      } = DD, {
        t: MD
      } = (0, fD.F)(), tD = null !== yD && void 0 !== yD ? yD : "", ZD = rI(BD, tD), oD = null === (CD = BD[tD]) || void 0 === CD ? void 0 : CD.items, vD = null !== ZD, [ND, gD] = (0, ID.useState)({}), [XD, mD] = (0, ID.useState)([]), [nD, OD] = (0, ID.useState)(!1), [PD, HD] = (0, ID.useState)(null), [, UD] = (0, ID.useState)(0), xD = (0, ID.useRef)(0), qD = (0, ID.useRef)({}), JD = (0, ID.useRef)({
        items: oD,
        pending: ND,
        shopInfo: BD,
        active: vD,
        canAfford: DD.canAfford,
        buy: DD.buy
      });
      JD.current = {
        items: oD,
        pending: ND,
        shopInfo: BD,
        active: vD,
        canAfford: DD.canAfford,
        buy: DD.buy
      };
      const KD = (0, ID.useCallback)((DD => {
        xD.current++;
        const CD = xD.current;
        mD((cD => [{
          id: CD,
          text: DD
        }, ...cD].slice(0, 8))), HD(CD)
      }), []);
      (0, ID.useEffect)((() => {
        if (null === PD) return;
        const DD = setTimeout((() => {
          HD(null)
        }), 3e3);
        return () => {
          clearTimeout(DD)
        }
      }), [PD]), (0, ID.useEffect)((() => {
        const CD = DD.message;
        if (!CD) return;
        const {
          shopInfo: cD,
          active: ID,
          items: pD
        } = JD.current, iD = null !== CD.categoryKey ? null !== rI(cD, CD.categoryKey) : ID;
        (iD || ID) && KD(CD.text), iD && gD((DD => Rp(DD, (DD => {
          var CD, cD;
          return !Tp.has(null === pD || void 0 === pD || null === (CD = pD[DD]) || void 0 === CD || null === (cD = CD.smp) || void 0 === cD ? void 0 : cD.kind)
        }))))
      }), [DD.message, KD]), (0, ID.useEffect)((() => {
        gD((DD => Rp(DD, ((DD, CD) => Qp(null === oD || void 0 === oD ? void 0 : oD[DD]) === CD.snapshot))))
      }), [BD, oD]);
      const aD = Object.keys(ND).length > 0;
      (0, ID.useEffect)((() => {
        if (!aD) return;
        const DD = setInterval((() => {
          UD((DD => DD + 1));
          const DD = Date.now(),
            {
              pending: CD,
              items: cD
            } = JD.current,
            ID = Object.keys(CD).filter((cD => DD - CD[cD].at >= 12e3));
          if (0 === ID.length) return;
          const pD = ID.some((DD => {
            var ID, pD;
            return "search" !== (null === cD || void 0 === cD || null === (ID = cD[DD]) || void 0 === ID || null === (pD = ID.smp) || void 0 === pD ? void 0 : pD.kind) || CD[DD].resend
          }));
          for (const iD of ID) qD.current[iD] = DD;
          gD((DD => Rp(DD, (DD => !ID.includes(DD))))), pD && KD(MD("smpShop:noAnswer"))
        }), 500);
        return () => {
          clearInterval(DD)
        }
      }), [aD]), (0, ID.useEffect)((() => {
        gD({})
      }), [tD]), (0, ID.useEffect)((() => {
        wD || OD(!1)
      }), [wD]);
      const VD = (0, ID.useCallback)((function(DD, CD) {
          let cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            items: ID,
            pending: pD,
            canAfford: iD,
            buy: fD
          } = JD.current, bD = null === ID || void 0 === ID ? void 0 : ID[DD];
          if (!bD || DD in pD || !1 === bD.canBuy) return !1;
          if (!iD(bD, (0, mI.c)(bD, CD))) return !1;
          fD(DD, bD, CD);
          const QD = {
            snapshot: Qp(bD),
            at: Date.now(),
            resend: cD
          };
          return JD.current.pending = {
            ...JD.current.pending,
            [DD]: QD
          }, gD((CD => ({
            ...CD,
            [DD]: QD
          }))), !0
        }), []),
        zD = (0, ID.useMemo)((() => ({
          shopInfo: BD,
          categoryKey: tD,
          canAfford: DD.canAfford,
          isPending: DD => DD in ND,
          gaveUpAt: DD => {
            var CD;
            return null !== (CD = qD.current[DD]) && void 0 !== CD ? CD : 0
          },
          act: VD,
          notify: KD
        })), [BD, tD, DD.canAfford, ND, VD, KD]),
        jD = Math.min(...Object.values(ND).map((DD => DD.at))),
        lD = aD && Date.now() - jD > 1500,
        LD = XD.length > 1,
        TD = null !== (cD = null === (pD = BD[tD]) || void 0 === pD ? void 0 : pD.customTitle) && void 0 !== cD ? cD : tD,
        GD = null === (QD = BD[tD]) || void 0 === QD ? void 0 : QD.description;
      let RD = null;
      return "market" === ZD ? RD = (0, SD.jsx)(xp, {}) : "sell" === ZD ? RD = (0, SD.jsx)(Kp, {}) : "collect" === ZD ? RD = (0, SD.jsx)(Vp, {}) : "orders" === ZD ? RD = (0, SD.jsx)(lp, {}) : "myOrders" === ZD && (RD = (0, SD.jsx)(Lp, {})), (0, SD.jsx)(wp.Provider, {
        value: zD,
        children: (0, SD.jsx)("div", {
          className: "SmpShopHost",
          hidden: !vD,
          children: (0, SD.jsxs)("div", {
            className: "SmpShop",
            children: [(0, SD.jsx)("header", {
              className: "SmpHeader",
              children: (0, SD.jsxs)("div", {
                className: "SmpHeaderTitle",
                children: [(0, SD.jsxs)("h2", {
                  children: [ZD && (0, SD.jsx)(bD.c, {
                    name: Gp[ZD]
                  }), MD(TD)]
                }), GD && (0, SD.jsx)("p", {
                  children: (0, SD.jsx)(HI.c, {
                    text: GD
                  })
                })]
              })
            }), (0, SD.jsx)("main", {
              className: "SmpBody",
              "data-pad-initial-area": !0,
              children: wD && RD
            }), (0, SD.jsxs)("button", {
              type: "button",
              className: iD()("SmpStatus", {
                SmpStatusWaiting: aD,
                SmpStatusFresh: !aD && null !== PD,
                SmpStatusHasHistory: LD
              }),
              "aria-live": "polite",
              "aria-expanded": LD ? nD : void 0,
              onClick: () => {
                LD && OD((DD => !DD))
              },
              children: [aD ? (0, SD.jsxs)("span", {
                className: "SmpStatusText",
                children: [(0, SD.jsx)(YI, {}), MD(lD ? "smpShop:slowConnection" : "smpShop:waiting")]
              }) : XD[0] ? (0, SD.jsx)("span", {
                className: "SmpStatusText",
                children: (0, SD.jsx)(HI.c, {
                  text: XD[0].text
                })
              }, XD[0].id) : (0, SD.jsx)("span", {
                className: "SmpStatusText SmpMuted",
                children: MD("smpShop:ready")
              }), LD && (0, SD.jsx)("small", {
                children: MD("smpShop:recentMessages", {
                  count: XD.length
                })
              })]
            }), nD && LD && (0, SD.jsx)("div", {
              className: "SmpStatusHistory",
              children: XD.map((DD => (0, SD.jsx)("div", {
                children: (0, SD.jsx)(HI.c, {
                  text: DD.text
                })
              }, DD.id)))
            })]
          })
        })
      })
    }
    class dp {
      constructor(DD) {
        this.info = DD
      }
      static fromShopInfo(DD) {
        const CD = {};
        for (const cD in DD) {
          const ID = !0 === DD[cD].redDot && !0 !== DD[cD].forceRemoveRedDot;
          CD[cD] = {
            redDot: ID,
            items: {}
          };
          for (const pD in DD[cD].items) {
            const ID = DD[cD].items[pD],
              iD = !0 === ID.redDot && !0 !== ID.forceRemoveRedDot;
            CD[cD].items[pD] = {
              redDot: iD
            }
          }
        }
        return new dp(CD)
      }
      anyCategoryHasRedDots() {
        for (const DD in this.info)
          if (this.categoryHasRedDot(DD)) return !0;
        return !1
      }
      doesCategoryExist(DD) {
        return !(0, dC.C)(this.info[DD])
      }
      categoryHasRedDot(DD) {
        return !0 === this.info[DD].redDot
      }
      updateCategoryRedDot(DD, CD) {
        this.info[DD].redDot = CD
      }
      doesItemExist(DD, CD) {
        return this.doesCategoryExist(DD) && !(0, dC.C)(this.info[DD].items[CD])
      }
      itemHasRedDot(DD, CD) {
        return !0 === this.info[DD].items[CD].redDot
      }
      updateItemRedDot(DD, CD, cD) {
        this.info[DD].items[CD].redDot = cD
      }
      shallowCopy() {
        return new dp(this.info)
      }
    }

    function Yp(DD, CD) {
      return `${DD}\x1f${CD}`
    }

    function Wp(DD, CD) {
      return !(0, dC.C)(CD) && !(0, dC.C)(DD) && CD in DD
    }
    const sp = (0, ID.memo)((function(DD) {
      var CD, cD;
      let {
        show: pD
      } = DD;
      const fD = (0, hc.g)("players", Fp),
        bD = (0, hc.g)("players", Di),
        [wD, yD] = (0, ID.useState)({
          shopInfo: {},
          userInputsPerItem: {},
          redDotInfo: dp.fromShopInfo({}),
          currencyAmounts: {},
          selectedCategoryKey: null,
          onBoughtInfo: null,
          awaitingPurchase: !1
        }),
        MD = (0, ID.useRef)(""),
        ZD = (0, ID.useRef)(null),
        vD = (0, ID.useRef)(null),
        gD = (0, ID.useRef)(0),
        XD = (0, ID.useRef)(void 0),
        mD = (0, ID.useRef)(null),
        nD = (0, ID.useRef)(wD),
        OD = wD.redDotInfo.anyCategoryHasRedDots(),
        [HD, UD] = (0, ID.useState)(null),
        qD = (0, ID.useRef)(!1);
      let JD = !1,
        KD = 0,
        aD = 0;
      if (wD.currencyAmounts) {
        for (const DD in wD.currencyAmounts) {
          var VD;
          const CD = wD.currencyAmounts[DD];
          CD.hidden || (KD++, (null === (VD = CD.subtext) || void 0 === VD ? void 0 : VD.length) > 0 && aD++)
        }
        JD = KD + aD > 4
      }(0, ID.useEffect)((() => {
        YC.i.Uo("showShopIconRedDot", OD, !0)
      }), [OD]), (0, ID.useEffect)((() => {
        ND.gameBridge.send("setShopOpen", pD), pD || (clearTimeout(XD.current), yD((DD => DD.awaitingPurchase ? {
          ...DD,
          awaitingPurchase: !1
        } : DD)))
      }), [pD]), (0, ID.useEffect)((() => () => {
        ND.gameBridge.send("setShopOpen", !1), clearTimeout(XD.current)
      }), []), (0, ID.useEffect)((() => {
        nD.current = wD
      }), [wD]), (0, ID.useEffect)((() => {
        if (null === HD) return;
        return (0, JI.d)("pointerdown", (DD => {
          const CD = DD.target;
          null !== CD && void 0 !== CD && CD.closest(".ShopItem") || UD(null)
        }))
      }), [HD]);
      const zD = DD => {
          yD((CD => ({
            ...CD,
            ...DD
          })))
        },
        jD = DD => {
          var CD;
          clearTimeout(null === (CD = wD.onBoughtInfo) || void 0 === CD ? void 0 : CD.timeout);
          const cD = setTimeout((() => {
            zD({
              onBoughtInfo: null
            })
          }), 3e3);
          MD.current = DD, zD({
            onBoughtInfo: {
              text: DD,
              timeout: cD,
              categoryKey: ZD.current
            }
          })
        },
        lD = DD => {
          const {
            shopInfo: CD,
            userInputsPerItem: cD,
            redDotInfo: ID,
            autoSelectCategory: iD
          } = function(DD, CD, cD, ID, pD, iD) {
            if ((0, dC.C)(DD) || 0 === Object.keys(DD).length) return {
              shopInfo: {},
              userInputsPerItem: {},
              redDotInfo: dp.fromShopInfo({}),
              autoSelectCategory: null
            };
            const fD = xD.j[xD.p].adConfig.showRewardedAds,
              bD = {};
            let QD = null;
            for (const oD in DD) {
              const CD = DD[oD],
                cD = {};
              let ID = !1;
              for (const DD in CD.items) {
                const pD = CD.items[DD];
                (0, mI.i)(pD, fD) && (cD[DD] = pD, ID = !0)
              }
              ID && (bD[oD] = {
                ...CD,
                items: cD
              }, !0 === CD.autoSelectCategory && (QD = oD))
            }
            const wD = {},
              SD = (DD, CD, ID, fD) => {
                var bD, QD;
                const SD = Yp(DD, CD),
                  BD = null !== (bD = cD[SD]) && void 0 !== bD ? bD : cD[CD];
                if (null !== (QD = fD.userInput) && void 0 !== QD && QD.type) switch (fD.userInput.type) {
                  case "dropdown": {
                    var yD;
                    const DD = !BD || !fD.userInput.dropdownOptions.some((DD => (0, mI.d)(DD) === BD)),
                      CD = fD.userInput.shouldResetSelectionOnOptionsChange && ("dropdown" !== (null === ID || void 0 === ID || null === (yD = ID.userInput) || void 0 === yD ? void 0 : yD.type) || JSON.stringify(ID.userInput.dropdownOptions) !== JSON.stringify(fD.userInput.dropdownOptions)),
                      cD = fD.userInput,
                      pD = !(0, dC.C)(cD.initialValue) && cD.dropdownOptions.some((DD => (0, mI.d)(DD) === cD.initialValue));
                    var MD;
                    return void(DD || CD ? pD ? wD[SD] = null !== (MD = fD.userInput.initialValue) && void 0 !== MD ? MD : null : fD.userInput.dropdownOptions.length > 0 ? wD[SD] = (0, mI.d)(fD.userInput.dropdownOptions[0]) : wD[SD] = null : wD[SD] = BD)
                  }
                  case "text":
                  case "number":
                    var tD, ZD, oD;
                    return void((null === ID || void 0 === ID ? void 0 : ID.userInput) !== fD.userInput ? wD[SD] = null !== (tD = null !== (ZD = fD.userInput.initialValue) && void 0 !== ZD ? ZD : BD) && void 0 !== tD ? tD : "" : wD[SD] = null !== (oD = null !== BD && void 0 !== BD ? BD : fD.userInput.initialValue) && void 0 !== oD ? oD : "");
                  case "color":
                    var vD, ND, gD;
                    return void((null === ID || void 0 === ID ? void 0 : ID.userInput) !== fD.userInput ? wD[SD] = null !== (vD = null !== (ND = fD.userInput.initialValue) && void 0 !== ND ? ND : BD) && void 0 !== vD ? vD : "#000000" : wD[SD] = null !== (gD = null !== BD && void 0 !== BD ? BD : fD.userInput.initialValue) && void 0 !== gD ? gD : "#000000");
                  case "player": {
                    const DD = (0, mI.f)(pD, iD, fD.userInput);
                    return void(BD && DD.includes(BD) ? wD[SD] = BD : wD[SD] = DD.length > 0 ? DD[0] : null)
                  }
                }
              };
            for (const oD in bD)
              for (const DD in bD[oD].items) {
                var BD;
                const cD = bD[oD].items[DD];
                SD(oD, DD, null === (BD = CD[oD]) || void 0 === BD ? void 0 : BD.items[DD], cD)
              }
            const yD = dp.fromShopInfo(bD);
            for (const oD in bD) {
              var MD;
              if (ID.doesCategoryExist(oD)) {
                (null === (MD = CD[oD]) || void 0 === MD ? void 0 : MD.redDot) === bD[oD].redDot && yD.updateCategoryRedDot(oD, ID.categoryHasRedDot(oD));
                for (const DD in bD[oD].items) {
                  var tD, ZD;
                  ID.doesItemExist(oD, DD) && (null === (tD = CD[oD]) || void 0 === tD || null === (ZD = tD.items[DD]) || void 0 === ZD ? void 0 : ZD.redDot) === bD[oD].items[DD].redDot && yD.updateItemRedDot(oD, DD, ID.itemHasRedDot(oD, DD))
                }
              }
            }
            return {
              shopInfo: bD,
              userInputsPerItem: wD,
              redDotInfo: yD,
              autoSelectCategory: QD
            }
          }(DD, wD.shopInfo, wD.userInputsPerItem, wD.redDotInfo, fD, bD), QD = {
            shopInfo: CD,
            userInputsPerItem: cD,
            redDotInfo: ID
          };
          if (null === iD || pD)
            if (CD[wD.selectedCategoryKey]) QD.selectedCategoryKey = wD.selectedCategoryKey;
            else {
              const DD = aI(CD);
              QD.selectedCategoryKey = DD.length > 0 ? DD[0] : null
            }
          else QD.selectedCategoryKey = iD;
          return 0 === Object.keys(CD).length && pD && PD.d.set({
            openEverythingMenuName: null
          }), QD
        },
        LD = (DD, CD, cD) => {
          const ID = wD.selectedCategoryKey,
            pD = Yp(ID, DD),
            iD = null !== cD && void 0 !== cD ? cD : wD.userInputsPerItem[pD],
            fD = {
              categoryKey: ID,
              itemKey: DD,
              userInput: iD
            };
          if (ZD.current = ID, CD.isRewardedAd) {
            if (Date.now() - gD.current < 5e3) return;
            (0, iC.Z)((() => {
              var cD, ID, iD;
              console.log("bought rewarded ad");
              const bD = fD.categoryKey ? null === (cD = nD.current.shopInfo[fD.categoryKey]) || void 0 === cD ? void 0 : cD.items[DD] : null;
              if (!bD || !bD.isRewardedAd) return void console.warn("Shop item no longer valid or a rewarded ad, early out");
              (null === (ID = CD.userInput) || void 0 === ID ? void 0 : ID.type) === (null === bD || void 0 === bD || null === (iD = bD.userInput) || void 0 === iD ? void 0 : iD.type) ? (fD.userInput = nD.current.userInputsPerItem[pD], ND.gameBridge.send("buyShopItem", fD), CD.onBoughtMessage && jD(CD.onBoughtMessage)) : console.warn("Shop item input type changed, early out")
            })), gD.current = Date.now()
          } else {
            ND.gameBridge.send("buyShopItem", fD), zD({
              awaitingPurchase: !0
            }), clearTimeout(XD.current), XD.current = setTimeout((() => {
              mD.current = null, zD({
                awaitingPurchase: !1
              })
            }), 1e3);
            const DD = (0, mI.c)(CD, iD);
            if (mD.current = null, !isNaN(DD) && Wp(wD.currencyAmounts, CD.currency)) {
              0 !== DD && (mD.current = {
                currency: CD.currency,
                amountBefore: wD.currencyAmounts[CD.currency].amount
              });
              const cD = {
                ...wD.currencyAmounts
              };
              cD[CD.currency].amount -= DD, zD({
                currencyAmounts: cD
              })
            }
            CD.onBoughtMessage && jD(CD.onBoughtMessage)
          }
        },
        GD = (DD, CD) => {
          if (null === CD || !DD.shopInfo[CD]) return DD;
          let cD = DD.redDotInfo;
          return cD.categoryHasRedDot(CD) && (cD.updateCategoryRedDot(CD, !1), cD = cD.shallowCopy()), {
            ...DD,
            selectedCategoryKey: CD,
            redDotInfo: cD
          }
        },
        RD = DD => {
          yD((CD => GD(CD, DD)))
        };
      (0, xC.f)(KI.j, (() => {
        yD((DD => {
          const CD = (0, KI.m)(aI(DD.shopInfo), DD.selectedCategoryKey, (CD => (0, KI.g)(DD.shopInfo[CD].items)));
          return CD === DD.selectedCategoryKey ? DD : GD(DD, CD)
        }))
      })), (0, xC.f)("showShopFromServer", (DD => {
        let {
          toggle: CD,
          SC: cD
        } = DD;
        cD && RD(cD), 0 === Object.keys(wD.shopInfo).length || CD && pD ? PD.d.set({
          openEverythingMenuName: null
        }) : PD.d.set({
          openEverythingMenuName: wC.q.SHOP
        })
      })), (0, xC.f)("closeShopOnDamaged", (() => {
        pD && PD.d.set({
          openEverythingMenuName: null
        })
      })), (0, xC.f)("overShopInfo", (DD => {
        jD(DD)
      })), (0, tD.e)("currencyAmounts", (DD => {
        var CD;
        const cD = mD.current;
        cD && (null === DD || void 0 === DD || null === (CD = DD[cD.currency]) || void 0 === CD ? void 0 : CD.amount) === cD.amountBefore ? zD({
          currencyAmounts: DD
        }) : (mD.current = null, zD({
          currencyAmounts: DD,
          awaitingPurchase: !1
        }))
      })), (0, tD.e)("shopInfo", (DD => {
        zD({
          ...lD(DD),
          awaitingPurchase: !1
        })
      }));
      const kD = (0, ID.useRef)({
        playerIds: fD,
        localPlayerId: bD
      });
      (0, ID.useEffect)((() => {
        kD.current.playerIds === fD && kD.current.localPlayerId === bD || (kD.current = {
          playerIds: fD,
          localPlayerId: bD
        }, yD((DD => {
          const CD = lD(DD.shopInfo);
          return {
            ...DD,
            ...CD
          }
        })))
      }), [fD, bD]);
      const dD = wD.selectedCategoryKey,
        YD = (DD, CD) => {
          var cD, ID;
          return (isNaN(CD) || (0, dC.C)(DD.currency) || Wp(wD.currencyAmounts, DD.currency) && CD <= wD.currencyAmounts[DD.currency].amount) && (null === (cD = DD.canBuy) || void 0 === cD || cD) && !(null !== (ID = DD.hidden) && void 0 !== ID && ID)
        },
        WD = (DD, CD) => {
          var cD, ID, pD;
          const fD = Yp(dD, DD),
            bD = wD.shopInfo[dD].items[DD],
            BD = wD.userInputsPerItem[fD],
            yD = (0, mI.c)(bD, BD),
            MD = YD(bD, yD),
            tD = bD.enchant,
            ZD = tD ? (0, TD.tb)(null !== (cD = bD.customTitle) && void 0 !== cD ? cD : DD, {
              colour: TD.lb[tD.tier]
            }) : null !== (ID = bD.customTitle) && void 0 !== ID ? ID : DD,
            vD = CD => {
              const cD = null !== CD && void 0 !== CD ? CD : BD,
                ID = void 0 !== CD ? (0, mI.c)(bD, CD) : yD;
              YD(bD, ID) && null !== cD && LD(DD, bD, CD);
              let pD = wD.redDotInfo;
              pD.itemHasRedDot(dD, DD) && (pD.updateItemRedDot(dD, DD, !1), pD = pD.shallowCopy()), zD({
                redDotInfo: pD
              })
            };
          return (0, SD.jsxs)("div", {
            className: iD()("ShopItem", {
              ShopItemNoInput: !bD.userInput,
              ShopItemNoInputCanBuy: !bD.userInput && MD,
              ShopItemNoInputSelected: bD.isSelected,
              ShopItemEnchant: !!tD
            }),
            "data-pad-focusable": !bD.userInput || void 0,
            "data-pad-unavailable": !bD.userInput && !MD || void 0,
            "data-pad-repeat": null !== (pD = (0, KI.d)(bD)) && void 0 !== pD ? pD : void 0,
            "data-pad-repeat-wait": wD.awaitingPurchase || void 0,
            onClick: () => {
              if (tD && qD.current) {
                if (HD !== fD) return void UD(fD);
                UD(null)
              }
              bD.userInput || vD()
            },
            onPointerDown: DD => {
              tD && (qD.current = (0, OI.r)(DD))
            },
            onPointerEnter: DD => {
              tD && !(0, OI.r)(DD) && UD(fD)
            },
            onPointerLeave: DD => {
              tD && !(0, OI.r)(DD) && UD((DD => DD === fD ? null : DD))
            },
            style: {
              zIndex: Object.keys(wD.shopInfo[dD].items).length - CD
            },
            children: [wD.redDotInfo.itemHasRedDot(dD, DD) && (0, SD.jsx)(QD.e, {
              top: "-6px",
              right: "-6px"
            }), bD.badge && (0, SD.jsx)("div", {
              className: "ShopBadgeContainer",
              children: (0, SD.jsx)("div", {
                className: iD()("ShopBadgeMain", bD.badge.type),
                children: (0, SD.jsx)(HI.c, {
                  text: bD.badge.text
                })
              })
            }), (0, SD.jsx)("div", {
              className: "ShopItemLeft",
              children: bD.image && (0, SD.jsx)(Ep, {
                item: bD,
                minWidth: 5,
                minHeight: 4.8
              })
            }), (0, SD.jsxs)("div", {
              className: "ShopItemRight",
              children: [(0, SD.jsxs)("div", {
                className: "ShopItemHeader",
                children: [(0, SD.jsx)("div", {
                  className: "ShopItemHeaderTitle",
                  children: (0, SD.jsx)(HI.c, {
                    text: ZD
                  })
                }), (0, SD.jsx)("div", {
                  className: "ShopItemHeaderDescription",
                  children: (0, SD.jsx)(HI.c, {
                    text: bD.description
                  })
                })]
              }), bD.userInput && (0, SD.jsxs)("div", {
                className: "ShopItemInputsContainer",
                onClick: DD => {
                  DD.stopPropagation()
                },
                children: [(0, SD.jsx)(rp, {
                  item: bD,
                  currInput: BD,
                  updateInput: CD => {
                    ((DD, CD, cD) => {
                      const ID = Yp(DD, CD),
                        pD = {
                          ...wD.userInputsPerItem
                        };
                      pD[ID] = cD, zD({
                        userInputsPerItem: pD
                      })
                    })(dD, DD, CD)
                  },
                  onSubmit: DD => {
                    vD(DD)
                  }
                }), ("dropdown" !== bD.userInput.type || !bD.userInput.autoSubmit) && (0, SD.jsx)(oD.i, {
                  className: "ItemCostButton",
                  disabled: !MD && null !== BD,
                  onClick: () => {
                    vD()
                  },
                  children: (0, SD.jsx)(hp, {
                    item: bD,
                    cost: yD,
                    currencyAmounts: wD.currencyAmounts
                  })
                })]
              })]
            }), !bD.userInput && (0, SD.jsx)("div", {
              className: "ShopItemNoInputCost",
              children: (0, SD.jsx)(hp, {
                item: bD,
                cost: yD,
                currencyAmounts: wD.currencyAmounts
              })
            }), tD && HD === fD && (0, SD.jsxs)("div", {
              className: "ShopItemEnchantInfo SmallTextBold",
              children: [(0, SD.jsx)(HI.c, {
                text: ZD
              }), (0, SD.jsx)("div", {
                className: "ShopItemEnchantInfoDescription",
                children: (0, SD.jsx)(HI.c, {
                  text: (0, nI.d)("", tD.enchantments, tD.enchantmentData)
                })
              })]
            })]
          }, fD)
        },
        sD = function(DD) {
          for (const CD in DD)
            if (DD[CD].smp) return !0;
          return !1
        }(wD.shopInfo),
        ED = rI(wD.shopInfo, dD);
      return (0, SD.jsx)(NI.c, {
        className: "Menu ShopBody",
        show: pD,
        children: 0 !== Object.keys(wD.shopInfo).length && (0, SD.jsxs)(SD.Fragment, {
          children: [(0, SD.jsxs)("div", {
            className: "MenuSideBar",
            children: [(0, SD.jsx)(BD, {
              items: aI(wD.shopInfo).map((DD => {
                var CD;
                return {
                  id: DD,
                  title: null !== (CD = wD.shopInfo[DD].customTitle) && void 0 !== CD ? CD : DD,
                  redDot: wD.redDotInfo.categoryHasRedDot(DD)
                }
              })),
              selectedItemId: dD,
              onClick: RD,
              padStartsOnTab: (0, KI.e)(dD)
            }), (0, SD.jsx)("div", {
              className: "MenuSideBarFooter",
              children: wD.currencyAmounts && Object.keys(wD.currencyAmounts).map((DD => {
                var CD;
                const cD = wD.currencyAmounts[DD];
                return cD.hidden ? null : (0, SD.jsxs)("div", {
                  className: "ShopCurrencyDiv " + (JD ? "SmallText" : ""),
                  children: [(0, SD.jsxs)("div", {
                    className: "ShopCurrencyDetails",
                    children: [(0, SD.jsx)("div", {
                      className: "ShopCurrencyAmtIcon",
                      style: {
                        color: cD.iconColour
                      },
                      children: (0, SD.jsx)(Ci, {
                        iconName: cD.icon
                      })
                    }), "\xa0", (0, XI.e)(cD.amount, 6)]
                  }), (null === (CD = cD.subtext) || void 0 === CD ? void 0 : CD.length) > 0 && (0, SD.jsx)("div", {
                    className: "ShopCurrencySubtext",
                    children: (0, SD.jsx)(HI.c, {
                      text: cD.subtext
                    })
                  })]
                }, DD)
              }))
            })]
          }), (0, SD.jsxs)("div", {
            className: "MenuBody ShopMenuBody",
            children: [sD && (0, SD.jsx)(kp, {
              show: pD,
              shopInfo: wD.shopInfo,
              selectedCategoryKey: dD,
              buy: (DD, CD, cD) => {
                LD(DD, CD, cD)
              },
              canAfford: YD,
              message: wD.onBoughtInfo
            }), null === ED && (0, SD.jsxs)(SD.Fragment, {
              children: [(0, SD.jsx)("div", {
                className: iD()("ShopOnBoughtInfo", {
                  ShopOnBoughtInfoShow: null !== wD.onBoughtInfo
                }),
                children: (0, SD.jsx)(HI.c, {
                  text: MD.current
                })
              }), (0, SD.jsx)("div", {
                className: "ShopItemsWrapper",
                children: (0, SD.jsxs)("div", {
                  className: "ShopItemsInner",
                  children: [(null === (CD = wD.shopInfo[dD]) || void 0 === CD ? void 0 : CD.description) && (0, SD.jsx)("div", {
                    className: "ShopCategoryDescription",
                    children: (0, SD.jsx)(HI.c, {
                      text: wD.shopInfo[dD].description
                    })
                  }), pD && (0, SD.jsx)("div", {
                    className: "ShopItems",
                    ref: vD,
                    "data-pad-initial-area": !0,
                    children: aI(null === (cD = wD.shopInfo[dD]) || void 0 === cD ? void 0 : cD.items).map(((DD, CD) => WD(DD, CD)))
                  })]
                })
              })]
            })]
          })]
        })
      })
    }));

    function Ep(DD) {
      let {
        item: CD,
        minWidth: cD,
        minHeight: ID
      } = DD;
      const {
        image: pD,
        schematicId: iD,
        imageColour: fD
      } = CD;
      if (iD) return (0, SD.jsx)("div", {
        className: "ShopSchematic",
        style: {
          width: `${cD}rem`,
          height: `${ID}rem`
        },
        children: (0, SD.jsx)(UI.e, {
          game: {
            schematicId: iD
          }
        })
      });
      var QD, wD;
      if ((0, PI.g)(pD)) return (0, SD.jsx)("div", {
        className: "ShopBlock",
        style: {
          minWidth: `${cD}rem`,
          height: "0",
          minHeight: `${ID}rem`
        },
        children: (0, SD.jsx)(PI.d, {
          itemName: pD,
          amount: null !== (QD = CD.amount) && void 0 !== QD ? QD : 0,
          amountFontSize: ID / 4 + "rem",
          enchantmentTier: null === (wD = CD.enchant) || void 0 === wD ? void 0 : wD.tier
        })
      });
      const BD = pD.slice(-4);
      return ".jpg" === BD || ".png" === BD ? (0, SD.jsx)(ep, {
        image: pD,
        minWidth: cD
      }) : (0, SD.jsx)(bD.c, {
        name: pD,
        className: "SelectedItemImage",
        style: {
          color: fD
        }
      })
    }

    function ep(DD) {
      let {
        image: CD,
        minWidth: cD
      } = DD;
      const {
        gameNameWithVariation: ID
      } = (0, hc.h)("connectedGame"), pD = CD.endsWith(".jpg");
      return (0, SD.jsx)("img", {
        className: iD()({
          ShopPixelImage: !pD
        }),
        style: {
          width: `${pD?1.6*cD:cD}rem`,
          height: "auto",
          fontSize: "1.25rem"
        },
        src: `/textures/games/${(0,TD.Vb)(ID)}/${CD}`,
        alt: CD,
        draggable: !1
      })
    }

    function hp(DD) {
      let {
        item: CD,
        cost: cD,
        currencyAmounts: ID
      } = DD;
      const pD = !isNaN(cD) && 0 !== cD && Wp(ID, CD.currency);
      let iD = null;
      return CD.buyButtonText ? iD = CD.buyButtonText : pD ? (iD = cD, CD.sell && (iD = -1 * cD), iD = iD.toString()) : 0 === cD ? iD = "Free" : CD.isRewardedAd && (iD = "Watch ad"), (0, dC.C)(iD) || " " === iD ? null : (0, SD.jsxs)("div", {
        className: "BuyItemCostAndIcon",
        children: [pD && (0, SD.jsx)("div", {
          style: {
            color: ID[CD.currency].iconColour
          },
          className: "BuyItemIcon",
          children: (0, SD.jsx)(Ci, {
            iconName: ID[CD.currency].icon
          })
        }), (0, SD.jsx)("div", {
          className: "BuyItemCost",
          children: (0, SD.jsx)(HI.c, {
            text: iD
          })
        })]
      })
    }

    function rp(DD) {
      let {
        item: CD,
        currInput: cD,
        updateInput: pD,
        onSubmit: iD
      } = DD;
      const {
        t: bD
      } = (0, fD.F)(), QD = (0, ID.useRef)(null);
      if ((0, ID.useEffect)((() => {
          const DD = QD.current;
          DD && DD.value !== cD && document.activeElement !== DD && (DD.value = null !== cD && void 0 !== cD ? cD : "")
        }), [cD]), !CD.userInput) return null;
      let wD = CD.userInput;
      if (vD.featureFlags.sanitizeShopInput && "text" === CD.userInput.type && (wD = {
          type: "number",
          placeholderText: "Numbers Only"
        }), "text" === wD.type || "number" === wD.type) {
        var BD, yD;
        console.assert(void 0 !== cD, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(CD)}`);
        const DD = "text" === wD.type && wD.wordCharsOnly;
        return (0, SD.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputTextWrapper",
          children: (0, SD.jsx)(mD.b, {
            className: "ShopItemUserInputText",
            placeholderText: bD(wD.placeholderText),
            defaultValue: cD,
            domRef: QD,
            onValueChange: (CD, cD) => {
              !0 === DD && (CD = (0, qI.kb)(CD)), QD.current.value = CD, pD(CD)
            },
            onEnter: iD,
            type: wD.type
          }, (null !== (BD = wD.initialValue) && void 0 !== BD ? BD : "") + (null !== (yD = wD.placeholderText) && void 0 !== yD ? yD : ""))
        })
      }
      if ("dropdown" === wD.type) {
        console.assert(void 0 !== cD, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(CD)}`);
        const DD = wD.autoSubmit;
        return (0, SD.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputDropdown",
          children: (0, SD.jsx)(mC.b, {
            options: wD.dropdownOptions.map((DD => (0, mI.d)(DD))),
            value: cD,
            onChange: CD => {
              let {
                value: cD
              } = CD;
              pD(cD), DD && iD(cD)
            }
          })
        })
      }
      return "player" === wD.type ? (0, SD.jsx)(Ap, {
        userInput: wD,
        currInput: cD,
        updateInput: pD
      }) : "color" === wD.type ? (0, SD.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputColor",
        children: (0, SD.jsx)("input", {
          type: "color",
          value: cD,
          onChange: DD => {
            pD(DD.target.value)
          }
        })
      }) : null
    }

    function Ap(DD) {
      let {
        userInput: CD,
        currInput: cD,
        updateInput: ID
      } = DD;
      const pD = (0, hc.h)("players"),
        iD = (0, hc.h)("hiddenPlayerNames"),
        fD = (0, mI.f)(pD.ids, pD.localId, CD);
      return (0, SD.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputDropdown",
        children: (0, SD.jsx)(mC.b, {
          options: fD.map((DD => {
            const {
              name: CD
            } = pD.byId[DD];
            return {
              value: DD,
              label: null === CD ? "" : (0, xI.f)(CD, iD)
            }
          })),
          value: cD,
          onChange: DD => {
            let {
              value: CD
            } = DD;
            ID(CD)
          }
        })
      })
    }

    function Fp(DD) {
      let {
        ids: CD
      } = DD;
      return CD
    }

    function Di(DD) {
      let {
        localId: CD
      } = DD;
      return CD
    }

    function Ci(DD) {
      let {
        iconName: CD
      } = DD;
      return ND.gameBridge.lookup("isItemName", CD) ? (0, SD.jsx)(PI.d, {
        itemName: CD,
        amount: 1
      }) : (0, SD.jsx)(bD.c, {
        name: CD,
        className: "2x"
      })
    }
    var ci = cD(1627);
    const Ii = (0, cD(1403).e)((DD => DD.PadLobbyShortcuts)),
      ii = (0, ID.lazy)((() => Promise.resolve().then((() => cD(4452))).then((DD => ({
        default: DD.Lobbyleaderboard
      })))));

    function fi(DD) {
      let {
        show: CD
      } = DD;
      return CD ? (0, SD.jsxs)(SD.Fragment, {
        children: [(0, SD.jsx)(Ii, {}), (0, SD.jsx)(ID.Suspense, {
          fallback: (0, SD.jsx)("div", {
            className: "CharacterCustomisationLoading",
            children: (0, SD.jsx)(nD.e, {})
          }),
          children: (0, SD.jsx)(ii, {})
        })]
      }) : null
    }
    var bi = cD(1556),
      Qi = cD(2813),
      wi = cD(1701),
      Si = cD(2879),
      Bi = cD(2567),
      yi = cD(1488),
      Mi = cD(1444),
      ti = cD(2788),
      Zi = cD(2805),
      oi = cD(2280);
    const vi = "storeRecentGiftRecipients",
      Ni = new Map;

    function gi() {
      try {
        const DD = sC.h.getItem(vi);
        return Array.isArray(DD) ? DD.filter((DD => "string" === typeof(null === DD || void 0 === DD ? void 0 : DD.name) && DD.name.length > 0)).map((DD => ({
          name: DD.name,
          cosmetics: DD.cosmetics && "object" === typeof DD.cosmetics ? DD.cosmetics : null
        }))) : []
      } catch {
        return []
      }
    }

    function Xi(DD) {
      var CD;
      const [cD, pD] = (0, ID.useState)(""), [iD, fD] = (0, ID.useState)("search"), [bD, QD] = (0, ID.useState)(null), [wD, SD] = (0, ID.useState)(null), BD = (0, ID.useRef)(null), yD = (0, ID.useRef)(null);
      (0, ID.useEffect)((() => () => {
        BD.current && clearTimeout(BD.current)
      }), []);
      const MD = null !== (CD = null === bD || void 0 === bD ? void 0 : bD.name) && void 0 !== CD ? CD : null;

      function tD() {
        BD.current && (clearTimeout(BD.current), BD.current = null)
      }(0, ID.useEffect)((() => {
        if (null === MD || DD === qD.NULL_USER_CONTEXT) return;
        const CD = MD.toLowerCase();
        if (CD === DD.getPlayerName().toLowerCase()) return void SD({
          name: MD,
          result: {
            giftRecipientFound: !1,
            giftRecipientError: "store:giftRecipientIsYou"
          }
        });
        const cD = Ni.get(CD);
        if (cD) return void SD({
          name: MD,
          result: cD
        });
        let ID = !1;
        return async function(DD, CD) {
          try {
            const cD = await (0, qD.postJsonWithMetricsCookiesAndJsonResponse)(`${JD.clientSideServerUrls.indexUrl}/index/store/gift-recipient`, {
              giftRecipientName: CD
            }, {
              retries: 1
            }, DD.getMetricsCookies());
            if ("boolean" !== typeof(null === cD || void 0 === cD ? void 0 : cD.giftRecipientFound)) throw new Error(`Unexpected gift recipient lookup response: ${JSON.stringify(cD)}`);
            return cD
          } catch (cD) {
            return console.error("Failed to look up gift recipient:", cD), {
              giftRecipientFound: !1,
              giftRecipientError: "store:giftRecipientLookupFailed"
            }
          }
        }(DD, MD).catch((DD => (console.error("Gift recipient lookup failed:", DD), {
          giftRecipientFound: !1,
          giftRecipientError: "store:giftRecipientLookupFailed"
        }))).then((DD => {
          !0 !== DD.giftRecipientFound && "store:giftRecipientLookupFailed" === DD.giftRecipientError || Ni.set(CD, DD), ID || SD({
            name: MD,
            result: DD
          })
        })), () => {
          ID = !0
        }
      }), [MD, DD]);
      const ZD = (0, ID.useMemo)((() => {
        const DD = cD.trim();
        if (!DD) return {
          status: "none"
        };
        if (!bD || bD.name !== DD || (null === wD || void 0 === wD ? void 0 : wD.name) !== bD.name) return {
          status: "pending",
          name: DD
        };
        const CD = wD.result;
        return !1 === CD.giftRecipientFound ? {
          status: "error",
          name: bD.name,
          error: CD.giftRecipientError
        } : {
          status: "found",
          name: CD.giftRecipientName,
          ownedPacks: CD.giftRecipientOwnedPacks,
          hasSuperRank: CD.giftRecipientHasSuperRank,
          isSubscriber: CD.giftRecipientIsSubscriber
        }
      }), [cD, bD, wD]);
      (0, ID.useEffect)((() => {
        "found" === ZD.status && "typed" === (null === bD || void 0 === bD ? void 0 : bD.source) && yD.current !== ZD.name && (yD.current = ZD.name, (0, AD.reportAnalyticsClick)({
          id: "store.gift_recipient",
          value: "typed"
        }))
      }), [ZD, bD]);
      const oD = (null === wD || void 0 === wD ? void 0 : wD.name) === (null === bD || void 0 === bD ? void 0 : bD.name) ? null === wD || void 0 === wD ? void 0 : wD.result : null,
        vD = !0 === (null === oD || void 0 === oD ? void 0 : oD.giftRecipientFound) ? oD.giftRecipientCosmetics : null;
      return {
        query: cD,
        via: iD,
        recipient: ZD,
        recipientCosmetics: vD,
        type: function(DD) {
          pD(DD), fD("search"), tD();
          const CD = DD.trim();
          CD ? BD.current = setTimeout((() => {
            QD({
              name: CD,
              source: "typed"
            })
          }), 400) : QD(null)
        },
        choose: function(DD, CD) {
          tD(), pD(DD), fD("typed" === CD ? "search" : "prefilled" === CD ? "prefilled" : "suggestion"), QD({
            name: DD,
            source: CD
          }), "typed" !== CD && "prefilled" !== CD && (0, AD.reportAnalyticsClick)({
            id: "store.gift_recipient",
            value: CD
          })
        },
        clear: function() {
          tD(), pD(""), fD("search"), QD(null)
        },
        recordGift: function(DD, CD) {
          ! function(DD) {
            Ni.delete(DD.toLowerCase())
          }(DD), SD((cD => {
            if (!cD || cD.name.toLowerCase() !== DD.toLowerCase() || !0 !== cD.result.giftRecipientFound || "superRank" === CD) return cD;
            const ID = cD.result.giftRecipientOwnedPacks;
            return {
              ...cD,
              result: {
                ...cD.result,
                giftRecipientOwnedPacks: ID.includes(CD) ? ID : [...ID, CD]
              }
            }
          }))
        }
      }
    }
    var mi = cD(2272),
      ni = cD(4459),
      Oi = cD(266),
      Pi = cD(2908);
    const Hi = ["pointerdown", "pointermove", "keydown", "wheel", "touchstart", "scroll", "blur", "focus"];
    var Ui = cD(2235),
      xi = cD(611),
      qi = cD(2308),
      Ji = cD(2466);

    function Ki(DD) {
      let {
        cosmetics: CD
      } = DD;
      return (0, SD.jsx)("span", {
        className: "StoreRecipientAvatar",
        children: (0, SD.jsx)(qi.e, {
          cosmetics: CD
        })
      })
    }

    function ai(DD, CD) {
      var cD, ID;
      const pD = null !== (cD = DD.friend) && void 0 !== cD ? cD : {
        isError: !1,
        name: DD.name,
        ranks: [],
        cosmetics: null !== (ID = DD.cosmetics) && void 0 !== ID ? ID : {},
        nameColour: xi.b,
        location: {
          status: "noGamePlayed"
        }
      };
      return CD ? {
        ...pD,
        cosmetics: CD
      } : pD
    }

    function Vi(DD) {
      let {
        recipient: CD
      } = DD;
      return "pending" === CD.status ? (0, SD.jsx)("span", {
        className: "StoreRecipientStatus",
        children: (0, SD.jsx)(nD.e, {})
      }) : "found" === CD.status ? (0, SD.jsx)(bD.c, {
        name: "check",
        className: "StoreRecipientStatus StoreRecipientStatusFound"
      }) : null
    }

    function zi(DD) {
      var CD;
      let {
        selfName: cD,
        giftRecipient: pD,
        suggestionsVersion: QD,
        pulseSignal: wD,
        disabled: BD
      } = DD;
      const {
        t: yD
      } = (0, fD.F)(), MD = (0, dD.m)(), tD = (0, ID.useRef)(null), ZD = (0, ID.useRef)(null), {
        query: ND,
        via: gD,
        recipient: XD,
        recipientCosmetics: nD
      } = pD, OD = (0, oi.o)(ND), PD = (0, ID.useMemo)((() => {
        const DD = vD.featureFlags.useSocialFeatures ? MD.friends.filter((DD => !DD.isError)) : [];
        return (0, oi.g)({
          onlineFriends: (0, dD.f)(DD),
          recentRecipients: gi(),
          friends: DD,
          selfName: cD,
          max: 8
        })
      }), [MD.friends, cD, QD]), HD = ND.trim().toLowerCase(), UD = "search" !== gD && HD ? PD.find((DD => DD.name.toLowerCase() === HD)) : void 0, xD = UD && "prefilled" === gD ? [UD, ...PD.filter((DD => DD !== UD))] : PD, qD = "" !== HD && !UD, JD = qD ? ND : "", KD = xD.length > 0;
      (0, ID.useEffect)((() => {
        tD.current && tD.current.value !== JD && (tD.current.value = JD)
      }), [JD]), (0, ID.useEffect)((() => {
        tD.current && (tD.current.disabled = BD)
      }), [BD, wD]);
      const aD = (0, ID.useRef)(0);

      function zD() {
        "self" !== OD && (0, AD.reportAnalyticsClick)({
          id: "store.mode",
          value: "self"
        }), pD.clear()
      }

      function jD(DD) {
        var CD, cD;
        if (BD) return;
        if (" " === DD.key || "Enter" === DD.key) return DD.preventDefault(), void DD.currentTarget.click();
        const ID = Array.from(null !== (CD = null === (cD = ZD.current) || void 0 === cD ? void 0 : cD.querySelectorAll("[role=radio]")) && void 0 !== CD ? CD : []),
          pD = ID.indexOf(DD.currentTarget);
        let iD;
        "ArrowRight" === DD.key || "ArrowDown" === DD.key ? iD = ID[(pD + 1) % ID.length] : "ArrowLeft" === DD.key || "ArrowUp" === DD.key ? iD = ID[(pD - 1 + ID.length) % ID.length] : "Home" === DD.key ? iD = ID[0] : "End" === DD.key && (iD = ID[ID.length - 1]), iD && (DD.preventDefault(), iD.focus(), iD.click())
      }(0, ID.useEffect)((() => {
        var DD;
        wD > aD.current && !BD && (aD.current = wD, null === (DD = tD.current) || void 0 === DD || DD.focus())
      }), [wD, BD]);
      const lD = "self" === OD,
        LD = null !== (CD = null === UD || void 0 === UD ? void 0 : UD.name) && void 0 !== CD ? CD : null,
        TD = "error" === XD.status ? XD.error : null,
        GD = "store:giftRecipientLookupFailed" === TD;
      return (0, SD.jsxs)("div", {
        className: iD()("StoreRecipientStrip", {
          StoreRecipientStripDisabled: BD,
          StoreRecipientStripNoChips: !KD
        }),
        children: [(0, SD.jsx)("span", {
          className: "StoreRecipientLabel",
          "aria-hidden": !0,
          children: yD("store:buyingFor")
        }), (0, SD.jsxs)("div", {
          ref: ZD,
          className: "StoreRecipientRadios",
          role: "radiogroup",
          "aria-label": yD("store:whoIsItFor"),
          children: [(0, SD.jsxs)("div", {
            role: "radio",
            "data-pad-focusable": !0,
            "aria-checked": lD,
            tabIndex: BD || !lD && null !== LD ? -1 : 0,
            className: iD()("StoreRecipientMe", {
              StoreRecipientChecked: lD
            }),
            onClick: () => {
              BD || zD()
            },
            onKeyDown: jD,
            children: [(0, SD.jsx)(bD.c, {
              name: "user"
            }), " ", yD("store:me")]
          }), KD && (0, SD.jsx)("div", {
            className: "StoreRecipientChips",
            children: xD.map((DD => {
              const CD = DD === UD;
              return (0, SD.jsx)("div", {
                role: "radio",
                "data-pad-focusable": !0,
                "aria-checked": CD,
                tabIndex: !BD && CD ? 0 : -1,
                title: DD.name,
                className: iD()("StoreRecipientChip", {
                  StoreRecipientChecked: CD
                }),
                onClick: () => {
                  BD || function(DD) {
                    "gift" !== OD && (0, AD.reportAnalyticsClick)({
                      id: "store.mode",
                      value: "gift"
                    }), pD.choose(DD.name, DD.kind)
                  }(DD)
                },
                onKeyDown: jD,
                children: (0, SD.jsx)(Ji.h, {
                  playerSocialPreview: ai(DD, CD ? nD : null),
                  opensProfileCard: !1,
                  isFriend: null !== DD.friend,
                  hideFriendBadge: !0,
                  showLocation: null !== DD.friend,
                  status: null === DD.friend ? null : void 0,
                  trailing: CD ? (0, SD.jsx)(Vi, {
                    recipient: XD
                  }) : void 0
                })
              }, DD.name)
            }))
          })]
        }), (0, SD.jsxs)("div", {
          className: iD()("StoreRecipientSearch", {
            StoreRecipientChecked: qD,
            StoreRecipientSearchPulse: wD > 0 && !qD,
            StoreRecipientSearchError: null !== TD && !GD
          }),
          onClick: () => {
            var DD;
            null === (DD = tD.current) || void 0 === DD || DD.focus()
          },
          children: [qD && "found" === XD.status && nD && (0, SD.jsx)(Ki, {
            cosmetics: nD
          }), !(qD && "found" === XD.status && nD) && (0, SD.jsx)(bD.c, {
            name: "magnifying-glass",
            className: "StoreRecipientSearchIcon"
          }), (0, SD.jsx)(mD.b, {
            className: "StoreRecipientSearchInput",
            domRef: tD,
            placeholderText: yD("store:searchName"),
            defaultValue: JD,
            maxLength: VD.i,
            onValueChange: function(DD) {
              "gift" !== OD && DD.trim() && (0, AD.reportAnalyticsClick)({
                id: "store.mode",
                value: "gift"
              }), pD.type(DD)
            },
            onEnter: () => {
              var DD;
              const CD = null === (DD = tD.current) || void 0 === DD ? void 0 : DD.value.trim();
              CD && pD.choose(CD, "typed")
            },
            blurOnEnter: !0
          }), qD && (0, SD.jsx)(Vi, {
            recipient: XD
          }), qD && (0, SD.jsx)("div", {
            ...(0, oD.U)({
              disabled: BD
            }),
            "aria-label": yD("store:clearRecipient"),
            title: yD("store:clearRecipient"),
            className: "StoreRecipientClear",
            onClick: DD => {
              DD.stopPropagation(), BD || zD()
            },
            children: (0, SD.jsx)(bD.c, {
              name: "xmark"
            })
          })]
        }, wD), TD && (0, SD.jsx)("div", {
          className: iD()("StoreRecipientPopover", {
            StoreRecipientPopoverSoft: GD
          }),
          role: "status",
          children: yD(TD)
        })]
      })
    }
    var ji = cD(2268),
      li = cD(2209),
      Li = cD(3389),
      Ti = cD(2911),
      Gi = cD(2245);
    const Ri = cD.p + "static/media/superRankPreviewPoster.e64783181b692cc31e08.webp";

    function ki() {
      (0, Gi.f)(Ri, {
        lowPriority: !1
      })
    }

    function di(DD) {
      let {
        onBack: CD,
        cta: cD,
        recipient: pD,
        afterCta: iD
      } = DD;
      const {
        t: QD
      } = (0, fD.F)(), [wD, BD] = (0, ID.useState)("starting"), yD = (0, ID.useRef)(null), MD = (0, KC.d)(), tD = (0, ID.useRef)(null), ZD = (0, ID.useCallback)((() => {
        const DD = yD.current;
        null !== DD.error && DD.load();
        const CD = DD.play();
        tD.current = CD, CD.catch((DD => {
          (0, Li.d)("Failed to play Super Rank video", DD), MD.current && tD.current === CD && BD("failed")
        }))
      }), [MD]);
      return (0, ID.useEffect)((() => {
        const DD = yD.current;
        let CD;

        function cD() {
          clearTimeout(CD), CD = setTimeout(ZD, 3e3)
        }
        return ZD(), DD.addEventListener("ended", cD), () => {
          clearTimeout(CD), DD.removeEventListener("ended", cD)
        }
      }), [ZD]), (0, SD.jsxs)("div", {
        className: "StoreSuperRankDetail",
        children: [(0, SD.jsxs)("div", {
          className: "StoreDetailHeader",
          children: [(0, SD.jsx)(oD.e, {
            className: "StoreDetailBackButton",
            onClick: CD,
            padBack: !0,
            children: QD("general:back")
          }), (0, SD.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, SD.jsx)(bD.c, {
              name: "bolt"
            }), " ", QD("homePage:superRank")]
          }), pD]
        }), (0, SD.jsxs)("div", {
          className: "StoreSuperRankDetailBody",
          children: [(0, SD.jsxs)("div", {
            className: "StoreSuperRankVideo",
            children: [(0, SD.jsx)("video", {
              ref: yD,
              src: `${JD.clientSideServerUrls.staticUrl}/videos/SuperRankPreview.mp4`,
              poster: Ri,
              muted: !0,
              playsInline: !0,
              controls: "playing" === wD,
              onPlaying: () => {
                BD("playing")
              },
              onError: () => {
                BD("failed")
              }
            }), ("failed" === wD || "loading" === wD) && (0, SD.jsx)("div", {
              className: "StoreSuperRankPlay",
              children: (0, SD.jsx)(oD.i, {
                ariaLabel: QD("general:play"),
                loading: "loading" === wD,
                onClick: () => {
                  BD("loading"), ZD()
                },
                touchPressOn: "pointerup",
                children: (0, SD.jsx)(bD.c, {
                  name: "play"
                })
              })
            })]
          }), (0, SD.jsxs)("div", {
            className: "StoreSuperRankDetailSide",
            children: [(0, SD.jsx)("div", {
              className: "StoreSuperRankDetailTable",
              children: (0, SD.jsx)(Ti.d, {})
            }), (0, SD.jsxs)("div", {
              className: "StoreTileActions",
              children: [cD, iD]
            })]
          })]
        })]
      })
    }
    var Yi = cD(2478),
      Wi = cD(3344),
      si = cD(2901),
      Ei = cD(2906);
    const ei = [xi.p.yellow, xi.p.green, xi.p.aqua, xi.p.blue, xi.p.purple, xi.p.red];

    function ui(DD) {
      return "needsRecipient" === DD || "lookingUp" === DD || "gift" === DD || "recipientOwns" === DD || "recipientSharesOwned" === DD || "recipientSubscribed" === DD
    }

    function ri(DD) {
      const {
        onKeyDown: CD,
        ...cD
      } = (0, oD.U)();
      return {
        ...cD,
        "aria-label": DD,
        onKeyDown: DD => {
          DD.target === DD.currentTarget && (null === CD || void 0 === CD || CD(DD))
        }
      }
    }

    function Ai(DD) {
      let {
        text: CD
      } = DD;
      return (0, SD.jsx)("span", {
        className: "StoreRainbowText",
        children: Array.from(CD).map(((DD, CD) => (0, SD.jsx)("span", {
          style: {
            color: ei[CD % ei.length]
          },
          children: DD
        }, CD)))
      })
    }
    const Fi = {
      recipientOwns: "store:alreadyOwns",
      sharesOwned: "store:sharesOwned",
      recipientSharesOwned: "store:recipientSharesOwned",
      subscribed: "store:subscribed",
      recipientSubscribed: "store:recipientSubscribed"
    };

    function Df(DD) {
      let {
        state: CD,
        item: cD,
        price: ID,
        busy: pD,
        highlight: QD = !1,
        onAct: wD,
        onNeedRecipient: BD,
        onLogin: yD
      } = DD;
      const {
        t: MD
      } = (0, fD.F)(), tD = "superRank" === cD ? jD.g.product.days : null, ZD = DD => null === tD ? MD(DD ? "general:gift" : "general:buy") : MD(DD ? "store:giftDays" : "store:buyDays", {
        days: tD
      }), vD = (DD, CD) => (0, SD.jsxs)(SD.Fragment, {
        children: [CD && (0, SD.jsx)("span", {
          className: "StoreCtaIcon",
          children: CD
        }), null === DD && (0, SD.jsx)("span", {
          className: "StoreCtaLabel StoreCtaLabelPending"
        }), null !== DD && (0, SD.jsx)("span", {
          className: "StoreCtaLabel",
          title: DD,
          children: DD
        }), (0, SD.jsxs)("span", {
          className: "StoreCtaPrice",
          children: ["\xb7", (0, SD.jsx)(li.d, {
            amount: ID
          })]
        })]
      });
      let ND;
      switch (CD) {
        case "pending":
          ND = (0, SD.jsx)(oD.o, {
            className: "StoreCtaButton",
            disabled: !0,
            children: vD(null)
          });
          break;
        case "login":
          ND = (0, SD.jsx)(oD.o, {
            className: "StoreCtaButton",
            onClick: yD,
            children: vD(ZD(!1))
          });
          break;
        case "owned":
          ND = (0, SD.jsx)(oD.k, {
            className: "StoreCtaButton",
            onClick: () => {
              PD.d.set({
                openEverythingMenuName: wC.q.CUSTOMISATION
              })
            },
            children: (0, SD.jsxs)("span", {
              className: "StoreCtaLabel",
              children: [(0, SD.jsx)(bD.c, {
                name: "shirt"
              }), " ", MD("store:equip")]
            })
          });
          break;
        case "recipientOwns":
        case "sharesOwned":
        case "recipientSharesOwned":
        case "subscribed":
        case "recipientSubscribed":
          ND = (0, SD.jsx)(oD.o, {
            className: "StoreCtaButton",
            disabled: !0,
            children: (0, SD.jsx)("span", {
              className: "StoreCtaLabel",
              children: MD(Fi[CD])
            })
          });
          break;
        case "needsRecipient":
        case "lookingUp":
        case "gift":
          ND = (0, SD.jsx)(oD.o, {
            className: "StoreCtaButton",
            disabled: "needsRecipient" === CD || null === ID,
            loading: "lookingUp" === CD || pD,
            onClick: wD,
            analyticsClick: {
              id: "store.gift",
              value: cD
            },
            children: vD(ZD(!0), oi.c)
          });
          break;
        case "buy":
        case "recharge":
          ND = (0, SD.jsx)(oD.o, {
            className: "StoreCtaButton",
            loading: pD,
            disabled: null === ID,
            onClick: wD,
            analyticsClick: {
              id: "store.buy",
              value: cD
            },
            children: vD(ZD(!1))
          })
      }
      return (0, SD.jsx)("div", {
        className: iD()("StoreCta", {
          StoreCtaHighlight: QD
        }),
        onClick: DD => {
          DD.stopPropagation(), "needsRecipient" === CD && BD()
        },
        children: ND
      })
    }

    function Cf() {
      const {
        t: DD
      } = (0, fD.F)();
      return (0, SD.jsxs)("ul", {
        className: "StorePerks",
        children: [(0, SD.jsxs)("li", {
          children: [(0, SD.jsx)(bD.c, {
            name: "check"
          }), (0, SD.jsx)(Ai, {
            text: DD("store:colourfulNames")
          })]
        }), (0, SD.jsxs)("li", {
          children: [(0, SD.jsx)(bD.c, {
            name: "check"
          }), DD("store:perkCapes")]
        }), (0, SD.jsxs)("li", {
          children: [(0, SD.jsx)(bD.c, {
            name: "check"
          }), DD("store:perkNoAdverts")]
        }), (0, SD.jsxs)("li", {
          children: [(0, SD.jsx)(bD.c, {
            name: "check"
          }), DD("store:perkFriends", {
            count: (0, hD.e)(["super"])
          })]
        })]
      })
    }

    function If(DD) {
      let {
        daysLeft: CD,
        totalDays: cD,
        urgent: ID
      } = DD;
      const {
        t: pD
      } = (0, fD.F)(), bD = cD > 0 ? Math.min(1, Math.max(.03, CD / cD)) : 1;
      return (0, SD.jsxs)("div", {
        className: iD()("StoreSuperRankMeterArea", {
          StoreSuperRankMeterUrgent: ID
        }),
        children: [(0, SD.jsx)("span", {
          className: "StoreSuperRankDaysLeft",
          children: 1 === CD ? pD("store:oneDayLeft") : pD("store:daysLeft", {
            days: CD
          })
        }), (0, SD.jsx)("div", {
          className: "StoreSuperRankMeter",
          children: (0, SD.jsx)("i", {
            style: {
              width: 100 * bD + "%"
            }
          })
        })]
      })
    }

    function pf(DD) {
      let {
        state: CD,
        urgent: cD,
        daysLeft: ID,
        totalDays: pD,
        recipientHasSuperRank: QD,
        busy: wD,
        highlight: BD,
        onOpen: yD,
        onAct: MD,
        onNeedRecipient: tD,
        onLogin: ZD
      } = DD;
      const {
        t: oD
      } = (0, fD.F)(), vD = ui(CD), {
        days: ND
      } = jD.g.product, gD = oD("store:recipientHasSuperRank", {
        giftDays: ND
      }), XD = eD("subscribed" === CD);
      return (0, SD.jsxs)("div", {
        className: iD()("StoreTile StoreSuperRankTile", {
          StoreTileGift: vD,
          StoreSuperRankTileUrgent: "recharge" === CD && cD,
          StoreSuperRankTileWithChip: QD,
          StoreSuperRankTileGiftReady: "gift" === CD
        }),
        ...ri(oD("homePage:superRank")),
        "data-store-item": "superRank",
        onPointerEnter: ki,
        onFocus: ki,
        onClick: yD,
        children: [(0, SD.jsx)("div", {
          className: "StoreSuperRankArt",
          style: {
            backgroundImage: `url(${Ui.i})`
          }
        }), vD && (0, SD.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, SD.jsxs)("div", {
          className: "StoreTileContent",
          children: [QD && (0, SD.jsx)("span", {
            className: "StoreChip StoreChipGift",
            title: gD,
            children: gD
          }), (0, SD.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, SD.jsx)(bD.c, {
              name: "bolt"
            }), " ", oD("homePage:superRank")]
          }), vD && (0, SD.jsx)("div", {
            className: "StoreTilePitch",
            children: oD("store:giftPitch", {
              days: ND
            })
          }), "recharge" === CD && (0, SD.jsx)(If, {
            daysLeft: ID,
            totalDays: pD,
            urgent: cD
          }), XD && (0, SD.jsx)("div", {
            className: "StoreSuperRankMeterArea",
            children: (0, SD.jsx)("span", {
              className: "StoreSuperRankDaysLeft",
              children: XD
            })
          }), (0, SD.jsx)(Cf, {}), (0, SD.jsxs)("div", {
            className: "StoreTileActions",
            children: [(0, SD.jsx)(Df, {
              state: CD,
              item: "superRank",
              price: jD.g.price,
              busy: wD,
              highlight: BD,
              onAct: MD,
              onNeedRecipient: tD,
              onLogin: ZD
            }), "needsRecipient" === CD && (0, SD.jsx)("span", {
              className: "StoreTileNote StoreTileNoteGift",
              children: oD("store:pickRecipientFirst")
            }), "recharge" === CD && cD && (0, SD.jsx)("span", {
              className: "StoreTileNote StoreSuperRankEnding",
              children: 1 === ID ? oD("store:endsInOneDay") : oD("store:endsInDays", {
                days: ID
              })
            })]
          })]
        })]
      })
    }
    const ff = {
      common: "StorePackTileCommon",
      rare: "StorePackTileRare",
      epic: "StorePackTileEpic",
      legendary: "StorePackTileLegendary",
      mythic: "StorePackTileMythic"
    };

    function bf(DD) {
      var CD;
      let {
        pack: cD,
        state: pD,
        busy: QD,
        onOpen: wD,
        onAct: BD,
        onNeedRecipient: yD,
        onLogin: MD
      } = DD;
      const {
        t: tD
      } = (0, fD.F)(), ZD = bi.c[cD], oD = ti.i[cD], vD = (0, Ui.p)(cD), ND = (0, ID.useRef)(null);
      (0, si.h)(cD, ND);
      const gD = ui(pD),
        XD = null !== (CD = ZD.displayName) && void 0 !== CD ? CD : cD,
        mD = (0, Wi.d)((() => {
          (0, Yi.f)();
          const DD = (0, si.e)(cD);
          void 0 !== DD && (0, Gi.f)((0, si.d)(DD))
        })),
        [nD] = (0, ID.useState)(Pi.j);
      return (0, SD.jsxs)("div", {
        className: iD()("StoreTile StorePackTile", ff[ZD.tier], {
          StorePackTileOwned: "owned" === pD,
          StorePackTileRecipientOwns: "recipientOwns" === pD,
          StoreTileGift: gD
        }),
        ...ri(XD),
        ref: ND,
        "data-store-item": cD,
        onClick: wD,
        onPointerMove: DD => {
          "mouse" !== DD.pointerType || 0 === DD.movementX && 0 === DD.movementY || nD || mD.start()
        },
        onPointerLeave: mD.cancel,
        children: [oD && (0, SD.jsx)(oD, {}), (0, SD.jsx)("div", {
          className: "StorePackCharacters",
          children: vD.map((DD => (0, SD.jsx)("div", {
            className: "StorePackCharacter",
            style: {
              backgroundImage: `url(${(0,Ui.k)(DD)})`
            }
          }, DD)))
        }), (0, SD.jsx)("div", {
          className: "StoreTileScrim"
        }), gD && (0, SD.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, SD.jsxs)("div", {
          className: "StoreTileContent",
          children: [(0, SD.jsx)("div", {
            className: "StoreTileTitle",
            children: XD
          }), (0, SD.jsxs)("div", {
            className: "StoreTileMeta",
            children: [(0, SD.jsx)(Ei.d, {
              tier: ZD.tier
            }), " \xb7 ", tD("store:itemCount", {
              count: (0, ji.h)(cD)
            }), "owned" === pD && (0, SD.jsxs)("span", {
              className: "StoreTileOwned",
              children: [" \xb7 ", (0, SD.jsx)(bD.c, {
                name: "check"
              }), " ", tD("general:owned")]
            })]
          }), (0, SD.jsx)(Df, {
            state: pD,
            item: cD,
            price: (0, jD.d)(cD),
            busy: QD,
            onAct: BD,
            onNeedRecipient: yD,
            onLogin: MD
          })]
        })]
      })
    }
    var Qf = cD(2881),
      wf = cD(1548),
      Sf = cD(1451),
      Bf = cD(3378);

    function yf() {
      return (0, SD.jsx)("span", {
        className: "NewBadge",
        children: "NEW"
      })
    }
    var Mf = cD(1331),
      tf = cD(1562),
      Zf = cD(9074);

    function of(DD) {
      let {
        character: CD,
        drawn: cD,
        onDrawn: pD
      } = DD;
      const fD = (0, ID.useRef)(null),
        bD = (0, Zf.e)(CD);
      return (0, SD.jsx)("div", {
        className: iD()("StoreCharacterLive", {
          StoreCharacterLiveDrawn: cD
        }),
        children: (0, SD.jsx)(ID.Suspense, {
          fallback: null,
          children: (0, SD.jsx)(Yi.d, {
            ref: fD,
            framing: "store",
            turntableFromYaw: cD ? bD.yaw : null,
            onReady: () => {
              var DD, cD;
              null === (DD = fD.current) || void 0 === DD || DD.setOrbit(bD), null === (cD = fD.current) || void 0 === cD || cD.setAllCosmetics(tf.c[CD].cosmetics)
            },
            onDrawn: pD
          })
        })
      })
    }
    const vf = {
        common: "StoreCharacterCardCommon",
        rare: "StoreCharacterCardRare",
        epic: "StoreCharacterCardEpic",
        legendary: "StoreCharacterCardLegendary",
        mythic: "StoreCharacterCardMythic"
      },
      Nf = new Set(["wildSpirits"]);

    function gf(DD) {
      var CD;
      let {
        tile: cD,
        design: pD,
        canGoLive: QD,
        live: wD,
        busy: BD,
        highlight: yD,
        onLiveStart: MD,
        onLiveEnd: tD,
        onOpen: ZD,
        onAct: oD,
        onNeedRecipient: vD,
        onLogin: ND
      } = DD;
      const {
        t: gD
      } = (0, fD.F)(), {
        pack: XD,
        state: mD
      } = cD, nD = bi.c[XD], OD = (0, bi.e)(XD), PD = (0, Ui.n)(XD), HD = ti.i[PD], UD = Nf.has(PD), {
        tier: xD
      } = nD, qD = "legendary" === xD || "mythic" === xD, JD = (0, ID.useRef)(null);
      (0, Mf.b)(JD, "epic" === xD || qD || UD);
      const [KD, VD] = (0, ID.useState)(!1);
      return !wD && KD && VD(!1), (0, SD.jsxs)("div", {
        ref: JD,
        className: iD()("StoreCharacterCard", `StoreCharacterCard${pD}`, vf[xD], {
          StoreCharacterCardOwned: "owned" === mD || "recipientOwns" === mD,
          StoreCharacterCardGift: ui(mD),
          StoreCharacterCardItem: void 0 === OD
        }),
        onPointerMove: DD => {
          "mouse" !== DD.pointerType || 0 === DD.movementX && 0 === DD.movementY || !QD || wD || void 0 === OD || MD()
        },
        onPointerLeave: tD,
        children: [(0, SD.jsx)("div", {
          className: "StoreCharacterBackdrop",
          children: HD && (0, SD.jsx)(HD, {
            simple: !0
          })
        }), qD && (0, SD.jsx)("div", {
          className: "StoreCharacterRays"
        }), (0, SD.jsxs)(aD.LinkPreserveSearch, {
          className: "StoreCharacterLink",
          to: (0, wf.d)({
            kind: "pack",
            pack: XD
          }),
          "data-store-item": XD,
          onClick: DD => {
            (0, Sf.d)(DD) && (DD.preventDefault(), ZD())
          },
          children: [(0, SD.jsxs)("div", {
            className: "StoreCharacterStage",
            children: [(0, SD.jsx)("div", {
              className: "StoreCharacterHalo"
            }), (0, SD.jsx)("div", {
              className: iD()("StoreCharacterFigure", {
                StoreCharacterFigureCovered: KD
              }),
              style: {
                backgroundImage: `url(${(0,Ui.s)(XD)})`
              }
            }), wD && void 0 !== OD && (0, SD.jsx)(of, {
              character: OD,
              drawn: KD,
              onDrawn: () => {
                VD(!0)
              }
            })]
          }), (0, SD.jsx)("div", {
            className: "StoreCharacterName",
            children: null !== (CD = nD.displayName) && void 0 !== CD ? CD : XD
          }), (0, SD.jsx)(Ei.d, {
            tier: xD,
            className: "StoreCharacterTier"
          })]
        }), (0, SD.jsx)("div", {
          className: "StoreCharacterScrim"
        }), UD && (0, SD.jsx)("span", {
          className: "StoreCharacterNew",
          children: (0, SD.jsx)(yf, {})
        }), "owned" === mD && (0, SD.jsx)("span", {
          className: "StoreCharacterOwned",
          title: gD("general:owned"),
          "aria-label": gD("general:owned"),
          children: (0, SD.jsx)(bD.c, {
            name: "check"
          })
        }), (0, SD.jsx)("div", {
          className: "StoreCharacterPlate",
          children: (0, SD.jsx)(Df, {
            state: mD,
            item: XD,
            price: (0, jD.d)(XD),
            busy: BD,
            highlight: yD,
            onAct: oD,
            onNeedRecipient: vD,
            onLogin: ND
          })
        })]
      })
    }

    function Xf(DD) {
      let {
        tiles: CD,
        busy: cD,
        highlightItem: pD,
        onOpen: iD,
        onAct: fD,
        onNeedRecipient: bD,
        onLogin: QD
      } = DD;
      const wD = (0, Bf.h)("storeCharacterCardFoil"),
        BD = (0, Bf.h)("storeCharacterCardSpotlight"),
        yD = wD ? "Foil" : BD ? "Spotlight" : "Showcase",
        [MD] = (0, ID.useState)(Pi.j),
        [tD, ZD] = (0, ID.useState)(null);
      return (0, SD.jsx)("div", {
        className: "StoreCharacterGrid",
        children: CD.map((DD => (0, SD.jsx)(gf, {
          tile: DD,
          design: yD,
          canGoLive: !MD,
          live: tD === DD.pack,
          busy: cD,
          highlight: pD === DD.pack,
          onLiveStart: () => {
            ZD(DD.pack)
          },
          onLiveEnd: () => {
            ZD((CD => CD === DD.pack ? null : CD))
          },
          onOpen: () => {
            iD(DD.pack)
          },
          onAct: () => {
            fD(DD.pack)
          },
          onNeedRecipient: bD,
          onLogin: () => {
            QD(DD.pack)
          }
        }, DD.pack)))
      })
    }
    var mf = cD(9084);

    function nf(DD) {
      let {
        title: CD
      } = DD;
      return (0, SD.jsx)("h2", {
        className: "StoreSectionDivider",
        children: (0, SD.jsx)("span", {
          className: "StoreSectionDividerTitle",
          children: CD
        })
      })
    }

    function Of(DD) {
      let {
        mountAtOnce: CD,
        children: cD
      } = DD;
      const pD = (0, ID.useRef)(null),
        [iD, fD] = (0, ID.useState)(CD),
        bD = (0, mf.d)();
      return (0, ID.useLayoutEffect)((() => {
        const DD = pD.current;
        DD && DD.getBoundingClientRect().top < DD.parentElement.getBoundingClientRect().bottom && fD(!0)
      }), []), iD || bD ? (0, SD.jsx)(SD.Fragment, {
        children: cD
      }) : (0, SD.jsx)("div", {
        ref: pD
      })
    }

    function Pf(DD) {
      let {
        layout: CD,
        mountAtOnce: cD,
        bundleGift: ID,
        superRankTotalDays: pD,
        busy: iD,
        highlightItem: bD,
        onOpen: QD,
        onAct: wD,
        onNeedRecipient: BD,
        onLogin: yD
      } = DD;
      const {
        t: MD
      } = (0, fD.F)(), tD = CD.packs.filter((DD => void 0 === (0, bi.e)(DD.pack) && !(0, bi.h)(DD.pack))), ZD = CD.packs.filter((DD => void 0 !== (0, bi.e)(DD.pack))), oD = CD.packs.filter((DD => (0, bi.h)(DD.pack)));
      return (0, SD.jsxs)(SD.Fragment, {
        children: [(0, SD.jsx)(Qf.d, {
          className: "StoreSuperGems",
          gift: ID,
          highlightSku: bD
        }), (0, SD.jsx)(nf, {
          title: MD("store:rank")
        }), (0, SD.jsx)(pf, {
          state: CD.superRank.state,
          urgent: CD.superRank.urgent,
          daysLeft: CD.superRankDaysLeft,
          totalDays: pD,
          recipientHasSuperRank: CD.recipientHasSuperRank,
          busy: iD,
          highlight: "superRank" === bD,
          onOpen: () => {
            QD("superRank")
          },
          onAct: () => {
            wD("superRank")
          },
          onNeedRecipient: BD,
          onLogin: () => {
            yD("superRank")
          }
        }), (0, SD.jsxs)(Of, {
          mountAtOnce: cD,
          children: [(0, SD.jsx)(nf, {
            title: MD("store:bundles")
          }), (0, SD.jsx)("div", {
            className: "StorePackGrid",
            children: tD.map((DD => (0, SD.jsx)(bf, {
              pack: DD.pack,
              state: DD.state,
              busy: iD,
              onOpen: () => {
                QD(DD.pack)
              },
              onAct: () => {
                wD(DD.pack)
              },
              onNeedRecipient: BD,
              onLogin: () => {
                yD(DD.pack)
              }
            }, DD.pack)))
          }), (0, SD.jsxs)(Of, {
            mountAtOnce: cD,
            children: [(0, SD.jsx)(nf, {
              title: MD("store:characters")
            }), (0, SD.jsx)(Xf, {
              tiles: ZD,
              busy: iD,
              highlightItem: bD,
              onOpen: QD,
              onAct: wD,
              onNeedRecipient: BD,
              onLogin: yD
            }), oD.length > 0 && (0, SD.jsxs)(SD.Fragment, {
              children: [(0, SD.jsx)(nf, {
                title: MD("store:premiumItems")
              }), (0, SD.jsx)(Xf, {
                tiles: oD,
                busy: iD,
                highlightItem: bD,
                onOpen: QD,
                onAct: wD,
                onNeedRecipient: BD,
                onLogin: yD
              })]
            })]
          })]
        })]
      })
    }

    function Hf(DD) {
      let {
        state: CD,
        mode: cD,
        giftName: ID,
        busy: pD,
        highlight: iD,
        purchaseError: bD,
        onBack: QD,
        onChooseRecipient: wD,
        onAct: BD,
        onLogin: yD
      } = DD;
      const {
        t: MD
      } = (0, fD.F)(), tD = eD("gift" !== cD);
      return (0, SD.jsx)(di, {
        onBack: QD,
        recipient: "gift" === cD && (0, SD.jsxs)(SD.Fragment, {
          children: [ID && (0, SD.jsxs)("span", {
            className: "StoreDetailRecipient",
            title: MD("store:giftFor", {
              name: ID
            }),
            children: [oi.c, " ", MD("store:giftFor", {
              name: ID
            })]
          }), !ID && (0, SD.jsxs)("div", {
            ...(0, oD.U)(),
            className: "StoreDetailRecipient StoreDetailRecipientChoose",
            onClick: wD,
            children: [oi.c, " ", MD("store:chooseRecipient")]
          })]
        }),
        cta: (0, SD.jsx)(Df, {
          state: CD,
          item: "superRank",
          price: jD.g.price,
          busy: pD,
          highlight: iD,
          onAct: BD,
          onNeedRecipient: wD,
          onLogin: yD
        }),
        afterCta: (0, SD.jsxs)(SD.Fragment, {
          children: [tD && (0, SD.jsx)("span", {
            className: "StoreTileNote",
            children: tD
          }), bD && (0, SD.jsx)("span", {
            className: "StoreTileNote StoreTileNoteError",
            children: MD(bD)
          })]
        })
      })
    }
    var Uf = cD(136);
    const xf = Uf.o("kind", [Uf.y({
      kind: Uf.t("refused"),
      heldTierId: Uf.O(),
      until: Uf.v()
    }), Uf.y({
      kind: Uf.t("refund"),
      tierId: Uf.O(),
      refundedMs: Uf.v(),
      forfeitedMs: Uf.v(),
      premiumCurrency: Uf.v()
    }), Uf.y({
      kind: Uf.t("none")
    })]);
    async function qf(DD) {
      const CD = await (0, qD.postJsonWithMetricsCookiesAndJsonResponse)(`${JD.clientSideServerUrls.indexUrl}/index/ranks/subscribe-preview`, {
        productId: DD
      }, {
        retries: 1
      });
      return xf.parse(CD)
    }
    var Jf = cD(2852),
      Kf = cD(2884);

    function af(DD, CD) {
      const cD = Math.max(1, Math.round(CD / TD.i));
      return [1 === cD ? `${DD}OneDay` : DD, {
        days: cD.toLocaleString()
      }]
    }

    function Vf() {
      return "true" === new URLSearchParams(window.location.search).get("tempSubscription") && (0, RD.purchasesAllowed)() ? (0, SD.jsx)(zf, {}) : null
    }

    function zf() {
      const {
        t: DD
      } = (0, fD.F)(), {
        userContext: CD
      } = (0, MD.c)(), {
        purchaseUnderWay: cD,
        notice: pD,
        subscribe: iD
      } = (0, Jf.c)(), [bD, QD] = (0, ID.useState)(null), [wD, BD] = (0, ID.useState)(0), [yD, tD] = (0, ID.useState)(!1), ZD = (0, ID.useRef)(!0), vD = CD !== qD.NULL_USER_CONTEXT, ND = null !== bD && bD.loadedFor === CD ? bD.offer : null, gD = null === pD || void 0 === pD ? void 0 : pD.pendingIntentId, XD = (0, ID.useRef)(gD);

      function mD() {
        BD((DD => DD + 1))
      }
      async function nD(DD) {
        tD(!1), await iD(DD), ZD.current && mD()
      }
      if ((0, ID.useEffect)((() => (ZD.current = !0, () => {
          ZD.current = !1
        })), []), (0, ID.useEffect)((() => {
          void 0 !== XD.current && void 0 === gD && mD(), XD.current = gD
        }), [gD]), (0, ID.useEffect)((() => {
          if (!vD) return;
          let DD = !1;
          return tD(!1), async function() {
            const {
              offering: DD
            } = await (0, bC.h)().getOfferings("superRankPage"), CD = null === DD || void 0 === DD ? void 0 : DD.packages.find((DD => null !== DD.price));
            return void 0 === CD ? {
              kind: "unavailable"
            } : {
              kind: "loaded",
              pkg: CD,
              preview: await qf(CD.productId)
            }
          }().catch((DD => (console.error("Billing: loading the Super Rank subscription or its preview failed:", DD), {
            kind: "loadFailed"
          }))).then((cD => {
            DD || QD((DD => "loadFailed" === cD.kind && (null === DD || void 0 === DD ? void 0 : DD.loadedFor) === CD ? DD : {
              loadedFor: CD,
              offer: cD
            }))
          })), () => {
            DD = !0
          }
        }), [CD, vD, wD]), null === ND) return null;
      if ("loaded" !== ND.kind) return (0, SD.jsx)(Kf.j, {
        notice: {
          kind: "error",
          key: "unavailable" === ND.kind ? "payments:subscriptionUnavailable" : "payments:subscriptionLoadFailed"
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const {
        pkg: OD,
        preview: PD
      } = ND;
      if ("refused" === PD.kind) return (0, SD.jsx)(Kf.j, {
        notice: {
          kind: "error",
          key: "payments:subscribeRefusedGemRank",
          values: {
            date: new Date(PD.until).toLocaleDateString()
          }
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const HD = (0, Qf.g)(OD.price);
      if (yD && "refund" === PD.kind) {
        const {
          refundedMs: CD,
          forfeitedMs: ID,
          premiumCurrency: pD
        } = PD, iD = ID + (0 === pD ? CD : 0), [fD, bD] = af("payments:subscribeRefundsGemRank", CD), [QD, wD] = af("payments:subscribeForfeitsGemRank", iD);
        return (0, SD.jsxs)("div", {
          className: "StoreTempSubscribe SmallTextBold",
          children: [(0, SD.jsx)("div", {
            children: DD("payments:subscribeEndsGemRank")
          }), pD > 0 && (0, SD.jsx)("div", {
            children: DD(fD, {
              ...bD,
              amount: pD.toLocaleString()
            })
          }), iD > 0 && (0, SD.jsx)("div", {
            children: DD(QD, wD)
          }), (0, SD.jsxs)("div", {
            className: "StoreTempSubscribeButtons",
            children: [(0, SD.jsx)(oD.k, {
              onClick: () => {
                tD(!1)
              },
              children: DD("general:cancel")
            }), (0, SD.jsx)(oD.o, {
              onClick: () => {
                nD(OD)
              },
              loading: cD,
              children: DD("payments:subscribeContinue", {
                price: HD
              })
            })]
          })]
        })
      }
      return (0, SD.jsxs)("div", {
        className: "StoreTempSubscribe",
        children: [(0, SD.jsx)(Kf.j, {
          notice: pD,
          className: "SmallTextBold"
        }), (0, SD.jsx)(Kf.d, {
          className: "SmallTextBold"
        }), (0, SD.jsx)(oD.o, {
          onClick: () => {
            "refund" === PD.kind ? tD(!0) : nD(OD)
          },
          disabled: void 0 !== gD,
          loading: cD,
          children: DD("payments:subscribeToSuperRank", {
            price: HD
          })
        })]
      })
    }
    const jf = {
      kind: "board"
    };
    let lf = !1;

    function Lf(DD) {
      return "found" === DD.status || "error" === DD.status && "store:giftRecipientLookupFailed" === DD.error ? DD.name : null
    }(0, GD.z)(Qi.prefetchBillingOfferings);
    const Tf = (0, ID.memo)((function(DD) {
      var CD;
      let {
        show: pD
      } = DD;
      const {
        t: bD
      } = (0, fD.F)(), {
        userContext: QD
      } = (0, MD.c)(), wD = QD !== qD.NULL_USER_CONTEXT, BD = Xi(QD), [yD, tD] = (0, ZD.b)(), {
        page: oD,
        urlMode: vD,
        goTo: ND
      } = (0, mi.e)(), gD = function(DD) {
        return "superRank" === DD.kind ? "superRank" : "pack" === DD.kind ? DD.pack : null
      }(oD), {
        openEverythingMenuName: XD,
        gameState: mD
      } = (0, PD.o)(["openEverythingMenuName", "gameState"]), nD = null !== XD;
      ! function(DD, CD) {
        const [pD] = (0, ID.useState)(Pi.j), [iD, fD] = (0, ID.useState)(!1);
        pD && CD && !iD && fD(!0);
        const bD = (0, iI.p)(),
          QD = pD && iD && DD && !bD;
        (0, ID.useEffect)((() => {
          if (!QD) return;
          let DD = null,
            CD = null,
            ID = null;
          const pD = () => !document.hasFocus() || document.activeElement instanceof HTMLIFrameElement || (0, bC.h)().purchaseUnderWay,
            iD = () => {
              var cD;
              null === (cD = ID) || void 0 === cD || cD(), ID = null, null !== DD && (clearTimeout(DD), DD = null), null !== CD && (clearTimeout(CD), CD = null)
            },
            fD = () => {
              (0, ni.t)(!1), (0, ni.s)(!1), iD(), DD = setTimeout((() => {
                DD = null, ID = (0, Oi.e)((() => {
                  ID = null, pD() ? fD() : ((0, ni.t)(!0), CD = setTimeout((() => {
                    CD = null, ID = (0, Oi.e)((() => {
                      ID = null, pD() ? fD() : (0, ni.s)(!0)
                    }))
                  }), 3e3), Promise.resolve().then((() => cD(4452))).then((DD => {
                    DD.startBackgroundGameSetup()
                  }), (DD => {
                    console.warn("Background game setup: its chunk failed to load", DD)
                  })))
                }))
              }), 2e3)
            };
          for (const cD of Hi) window.addEventListener(cD, fD, {
            capture: !0,
            passive: !0
          });
          return fD(), () => {
            for (const DD of Hi) window.removeEventListener(DD, fD, {
              capture: !0
            });
            iD(), (0, ni.t)(!1), (0, ni.s)(!1)
          }
        }), [QD])
      }(pD && nD, "pack" === oD.kind);
      const OD = "landingPage" === mD;
      (0, ID.useEffect)((() => {
        nD && (0, Qi.prefetchBillingOfferings)()
      }), [nD]), (0, ID.useEffect)((() => {
        nD && !pD && OD && (0, Ui.t)()
      }), [nD, pD, OD]);
      const [HD, UD] = (0, ID.useState)(0), [xD, JD] = (0, ID.useState)(null), [KD, aD] = (0, ID.useState)(null), [VD, zD] = (0, ID.useState)(null), [lD, LD] = (0, ID.useState)(null), TD = (0, ID.useRef)(null), kD = (0, ID.useRef)(null), dD = (0, ID.useRef)(!1), YD = (0, GD.F)(), WD = (0, ID.useRef)(0), sD = (0, ID.useRef)(!1);

      function ED() {
        UD((DD => DD + 1))
      }(0, ID.useEffect)((() => {
        if (pD) {
          if (lf = !0, (0, GD.o)(), YD && YD.seq !== WD.current) {
            var DD;
            WD.current = YD.seq, "loginResume" !== YD.source && (0, GD.B)();
            const CD = (0, GD.e)(YD);
            vD || ND(CD), LD(null !== (DD = YD.highlight) && void 0 !== DD ? DD : null), aD(null), "gift" === YD.mode && YD.giftRecipientName ? BD.choose(YD.giftRecipientName, "prefilled") : "current" !== YD.mode && BD.clear(), "gift" !== YD.mode || YD.giftRecipientName || ED(), (0, AD.reportAnalyticsClick)({
              id: "store.open",
              value: YD.source
            })
          } else sD.current || (0, AD.reportAnalyticsClick)({
            id: "store.open",
            value: "menuTab"
          });
          sD.current = !0
        } else sD.current = !1
      }), [pD, YD]), (0, ID.useEffect)((() => {
        if (!lD) return;
        const DD = setTimeout((() => {
          LD(null)
        }), 4e3);
        return () => {
          clearTimeout(DD)
        }
      }), [lD]), (0, ID.useEffect)((() => {
        const DD = TD.current;
        var CD;
        if (pD && DD) {
          if (gD) kD.current = gD, null === (CD = DD.querySelector(".StoreDetailBackButton, .CosmeticShopDetailBackButton")) || void 0 === CD || CD.focus();
          else if (kD.current) {
            var cD;
            null === (cD = DD.querySelector(`[data-store-item="${kD.current}"]`)) || void 0 === cD || cD.focus(), kD.current = null
          }
        } else kD.current = null
      }), [gD, pD]), (0, ID.useEffect)((() => {
        aD(null)
      }), [BD.query]), (0, ID.useEffect)((() => {
        if (!VD) return;
        const DD = setTimeout((() => {
          zD(null)
        }), 8e3);
        return () => {
          clearTimeout(DD)
        }
      }), [VD]);
      const eD = QD.superRankInfo,
        uD = QD.isLoggedIn() || (0, RD.guestsMayBuy)(),
        hD = QD.getOwnedCosmeticPacks(),
        rD = (0, oi.o)(BD.query),
        FD = (0, oi.f)({
          mode: rD,
          loggedIn: wD ? uD : null,
          superRankInfo: eD,
          now: Date.now(),
          ownedPacks: hD,
          packs: bi.r,
          recipient: BD.recipient
        });
      (0, ID.useEffect)((() => {
        if (!uD || !pD) return;
        const DD = (0, GD.B)(),
          CD = DD && (0, oi.k)(DD, bi.r);
        DD && CD && ((0, AD.reportAnalyticsClick)({
          id: "store.login_resume",
          value: DD.item
        }), (0, GD.p)(CD))
      }), [uD, pD]);
      const DC = (0, oi.s)({
        superRankDaysLeft: FD.superRankDaysLeft,
        openedThisSession: lf || pD,
        seenNewItems: (0, GD.l)()
      });
      if ((0, ID.useEffect)((() => {
          (0, GD.A)(DC)
        }), [DC]), !pD || !(0, RD.purchasesAllowed)()) return null;
      const CC = tD > yD && yD <= 700,
        cC = !CC && tD <= 420,
        IC = "gift" === rD ? Lf(BD.recipient) : null,
        pC = null !== xD;

      function iC(DD) {
        (0, Si.d)(DD, "gift" === rD ? BD.query.trim() : null)
      }

      function fC(DD, CD) {
        (0, AD.reportAnalyticsClick)({
          id: "store.purchase_done",
          value: `${CD?"gift":"self"}:${DD}`
        }), CD && (BD.recordGift(CD.name, DD), QC(CD))
      }

      function QC(DD) {
        ! function(DD) {
          try {
            sC.h.setItem(vi, (0, oi.D)(gi(), DD))
          } catch {}
        }({
          name: DD.name,
          cosmetics: DD.cosmetics
        }), ND(jf), zD((CD => {
          var cD;
          return {
            name: DD.name,
            seq: (null !== (cD = null === CD || void 0 === CD ? void 0 : CD.seq) && void 0 !== cD ? cD : 0) + 1
          }
        }))
      }
      async function wC(DD) {
        var CD, cD;
        if (dD.current) return;
        if (!uD) return void iC(DD);
        aD(null), LD(null);
        const ID = "gift" === rD ? {
          name: Lf(BD.recipient),
          cosmetics: BD.recipientCosmetics
        } : null;
        if (ID && !ID.name) return void ED();
        const pD = "superRank" === DD ? jD.g.id : (0, jD.c)(DD);
        dD.current = !0;
        const iD = await (0, Zi.d)(pD, null !== (CD = null === ID || void 0 === ID ? void 0 : ID.name) && void 0 !== CD ? CD : null);
        if (dD.current = !1, !iD) return;
        JD(DD);
        const fD = await Bi.e.purchase(pD, null !== (cD = null === ID || void 0 === ID ? void 0 : ID.name) && void 0 !== cD ? cD : null);
        JD(null), fD ? aD(fD) : (fC(DD, ID), ID || (await (0, yi.flushClientAnalyticsEvents)(), (0, wi.refreshWithoutConfirmation)("superRank" === DD ? "/super-rank-welcome" : `/pack-welcome/${DD}`)))
      }
      const SC = iD()("Store", {
        StoreGift: "gift" === rD,
        StorePortrait: CC,
        StoreCompact: cC
      });
      if ("pack" === oD.kind) {
        const DD = oD.pack,
          CD = FD.packs.find((CD => CD.pack === DD));
        return (0, SD.jsx)("div", {
          ref: TD,
          className: "CosmeticShopContainer",
          children: (0, SD.jsx)(ti.f, {
            pack: DD,
            onBack: () => {
              ND(jf)
            },
            onPurchased: CD => {
              fC(DD, CD ? {
                name: CD,
                cosmetics: null
              } : null)
            },
            giftCta: "gift" === rD && IC && CD && (0, SD.jsxs)(SD.Fragment, {
              children: [(0, SD.jsx)(Df, {
                state: CD.state,
                item: DD,
                price: (BC = DD, "superRank" === BC ? jD.g.price : (0, jD.d)(BC)),
                busy: pC,
                onAct: () => {
                  wC(DD)
                },
                onNeedRecipient: () => {
                  ND(jf), ED()
                },
                onLogin: () => {
                  iC(DD)
                },
                highlight: lD === DD
              }), KD && (0, SD.jsx)("span", {
                className: "CosmeticShopGiftError SmallTextBold",
                children: bD(KD)
              })]
            }),
            ownedPacks: hD,
            startAsGift: "gift" === rD,
            initialGiftRecipient: "gift" === rD ? null !== IC && void 0 !== IC ? IC : BD.query.trim() : "",
            highlightCta: lD === DD
          }, DD)
        })
      }
      var BC;
      return "superRank" === oD.kind ? (0, SD.jsx)("div", {
        ref: TD,
        className: iD()(SC, "StoreDetailView"),
        children: (0, SD.jsx)(Hf, {
          state: FD.superRank.state,
          mode: rD,
          giftName: IC,
          busy: pC,
          highlight: "superRank" === lD,
          purchaseError: KD,
          onBack: () => {
            ND(jf)
          },
          onChooseRecipient: () => {
            ND(jf), ED()
          },
          onAct: () => {
            wC("superRank")
          },
          onLogin: () => {
            iC("superRank")
          }
        })
      }) : (0, SD.jsxs)("div", {
        ref: TD,
        className: SC,
        children: [(0, SD.jsx)("div", {
          className: "StoreTopRow",
          children: (0, SD.jsx)(zi, {
            selfName: wD ? QD.getPlayerName() : "",
            giftRecipient: BD,
            suggestionsVersion: null !== (CD = null === VD || void 0 === VD ? void 0 : VD.seq) && void 0 !== CD ? CD : 0,
            pulseSignal: HD,
            disabled: pC || !wD
          })
        }), VD && (0, SD.jsxs)("div", {
          className: "StoreNotice StoreNoticeGiftSent",
          onClick: () => {
            zD(null)
          },
          children: [(0, SD.jsx)(Mi.c, {
            showSignal: VD.seq
          }), oi.c, " ", bD("store:giftSent", {
            name: VD.name
          })]
        }, VD.seq), !VD && KD && (0, SD.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: bD(KD)
        }), (0, SD.jsx)(Pf, {
          layout: FD,
          mountAtOnce: null !== kD.current,
          bundleGift: "gift" === rD ? {
            recipientName: IC,
            lookingUp: "pending" === BD.recipient.status,
            busy: pC,
            onNeedRecipient: ED,
            onSent: DD => {
              (0, AD.reportAnalyticsClick)({
                id: "store.purchase_done",
                value: "gift:superGems"
              }), QC({
                name: DD,
                cosmetics: BD.recipientCosmetics
              })
            }
          } : null,
          superRankTotalDays: (0, oi.w)(eD),
          busy: pC,
          highlightItem: lD,
          onOpen: function(DD) {
            (0, AD.reportAnalyticsClick)({
              id: "store.item_open",
              value: DD
            }), ND((0, GD.i)(DD))
          },
          onAct: wC,
          onNeedRecipient: ED,
          onLogin: iC
        }), "gift" !== rD && (0, SD.jsx)(Vf, {})]
      })
    }));
    var Gf = cD(2560),
      Rf = cD(8545),
      kf = cD(2619),
      df = cD(2456),
      Yf = cD(2501),
      Wf = cD(2515),
      sf = cD(2519),
      Ef = cD(2607),
      ef = cD(2600),
      uf = cD(2293),
      hf = cD(2328),
      rf = cD(2317),
      Af = cD(2010),
      Ff = cD(2528),
      Db = cD(2335);

    function Cb(DD) {
      let {
        show: CD
      } = DD;
      return CD ? (0, SD.jsx)(cb, {}) : null
    }

    function cb() {
      const {
        t: DD
      } = (0, fD.F)(), {
        followsLeader: CD
      } = (0, df.d)(), {
        loading: cD,
        friends: pD,
        requests: QD,
        invites: wD
      } = (0, dD.m)(), {
        userContext: BD
      } = (0, MD.c)(), [yD, tD] = (0, ID.useState)(Db.k);
      (0, ID.useEffect)((() => {
        (0, Db.c)()
      }), []);
      const ZD = QD.map((DD => DD.name)),
        {
          state: vD,
          recentRequesters: ND
        } = (0, ef.m)(),
        gD = new Map([...("loaded" === vD.status ? vD.recentPlayers : []).map((DD => [DD.preview.name, DD])), ...ND.map((DD => [DD.name, DD]))]),
        XD = (0, ID.useRef)(null),
        [OD, PD] = (0, ID.useState)(""),
        [HD, UD] = (0, ID.useState)("Enter"),
        [xD, qD] = (0, ID.useState)(null);

      function JD() {
        OD && (UD("Loading"), (0, rf.d)(OD, "social_menu").then((DD => {
          if (XD.current) switch (DD.kind) {
            case "sent":
              UD("Success");
              break;
            case "becameFriends":
              UD("BecameFriends");
              break;
            case "failed":
              qD(DD.message), UD("Error")
          }
        })))
      }
      return (0, ID.useEffect)((() => {
        if ("Enter" === HD || "Loading" === HD) return;
        const DD = setTimeout((() => {
          XD.current.value = "", PD(""), UD("Enter")
        }), "Success" === HD ? 1e3 : 4e3);
        return () => {
          clearTimeout(DD)
        }
      }), [HD]), (0, SD.jsx)("div", {
        className: "SocialMenu",
        children: (0, SD.jsxs)("div", {
          className: "SocialMenuInner",
          children: [(0, SD.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, SD.jsxs)("div", {
              className: "SocialMenuBox SocialMenuAddFriend",
              children: [(0, SD.jsx)(sf.d, {
                label: DD("socialBar:addFriend")
              }), (0, SD.jsxs)("div", {
                className: "AddFriendBody",
                children: [(0, SD.jsxs)("div", {
                  className: iD()("AddFriendBodyOverlay", {
                    [`AddFriendBodyOverlay${HD}`]: !0
                  }),
                  children: ["Loading" === HD && (0, SD.jsx)(nD.e, {}), "Success" === HD && (0, SD.jsx)(bD.c, {
                    name: "check"
                  }), "BecameFriends" === HD && (0, SD.jsx)(SD.Fragment, {
                    children: DD("socialBar:nowFriends", {
                      playerName: OD
                    })
                  }), "Error" === HD && xD && (0, SD.jsx)(SD.Fragment, {
                    children: DD(xD.translationKey, xD.params)
                  })]
                }), (0, SD.jsxs)("div", {
                  className: "PlayerSearch",
                  children: [(0, SD.jsx)(mD.b, {
                    className: "PlayerSearchInput",
                    placeholderText: DD("socialBar:enterPlayerName"),
                    domRef: XD,
                    onValueChange: DD => {
                      PD((0, VD.o)(DD)), XD.current.value = (0, VD.o)(DD)
                    },
                    onEnter: () => {
                      OD && (0, AD.reportAnalyticsClick)({
                        id: "social.add_friend",
                        value: "social_menu"
                      }), JD()
                    }
                  }), (0, SD.jsxs)(oD.i, {
                    className: "PlayerSearchInputButton SmallTextLight",
                    onClick: () => {
                      JD()
                    },
                    analyticsClick: {
                      id: "social.add_friend",
                      value: "social_menu"
                    },
                    children: [(0, SD.jsx)(bD.c, {
                      name: "user-plus"
                    }), " ", DD("socialBar:sendRequest")]
                  })]
                })]
              }), (0, SD.jsx)(Ff.b, {
                surface: "social_menu",
                prefetchOnMount: !0
              })]
            }), wD.length > 0 && (0, SD.jsxs)("div", {
              className: "SocialMenuBox SocialMenuInvites",
              children: [(0, SD.jsx)(sf.d, {
                label: DD("socialBar:invites"),
                meta: wD.length
              }), wD.map((CD => (0, SD.jsxs)("div", {
                className: "SocialMenuInvite",
                children: [(0, SD.jsx)("div", {
                  className: "SocialMenuInviteIcon",
                  children: (0, SD.jsx)(uf.b, {
                    invite: CD
                  })
                }), (0, SD.jsx)("div", {
                  className: "SocialMenuInviteText",
                  children: (0, SD.jsx)(uf.f, {
                    invite: CD
                  })
                }), (0, SD.jsx)(oD.o, {
                  className: "SocialMenuInviteJoin SmallTextLight",
                  onClick: () => {
                    (0, hf.e)(CD)
                  },
                  analyticsClick: {
                    id: "social.accept_invite",
                    value: `social_menu:${CD.destination.kind}`
                  },
                  children: DD("general:join")
                }), (0, SD.jsx)(uD.f, {
                  tooltipInner: (0, SD.jsx)(SD.Fragment, {
                    children: DD("general:decline")
                  }),
                  delayShow: 0,
                  children: (0, SD.jsx)(oD.k, {
                    className: "SocialMenuInviteDecline",
                    padDefaultFocus: "invite" === (null === yD || void 0 === yD ? void 0 : yD.kind) && yD.inviteId === CD.id,
                    onClick: () => {
                      dD.e.declineInvite(CD.id)
                    },
                    analyticsClick: {
                      id: "social.decline_invite",
                      value: `social_menu:${CD.destination.kind}`
                    },
                    children: (0, SD.jsx)(bD.c, {
                      name: "xmark"
                    })
                  })
                })]
              }, CD.id)))]
            }), (0, SD.jsxs)("div", {
              className: iD()("SocialMenuBox SocialMenuRequests", {
                SocialMenuBoxEmpty: !cD && 0 === QD.length
              }),
              children: [(0, SD.jsx)(sf.d, {
                label: (0, SD.jsxs)(SD.Fragment, {
                  children: [(0, SD.jsx)(bD.c, {
                    name: Af.e
                  }), " ", DD("socialBar:requests")]
                }),
                meta: (0, SD.jsxs)(SD.Fragment, {
                  children: [QD.length, QD.length === hD.s && (0, SD.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: DD("socialBar:limitReached")
                  })]
                })
              }), cD && (0, SD.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, SD.jsx)(nD.e, {})
              }), !cD && 0 === QD.length && (0, SD.jsx)("div", {
                className: "SocialMenuEmpty",
                children: DD("socialBar:noFriendRequests")
              }), !cD && QD.length > 0 && (0, SD.jsx)("div", {
                className: "PlayerRows",
                children: (0, SD.jsx)(Bp.c, {
                  lazyLoadedClassName: "SocialMenuRequestsLazy",
                  observerUpdateDeps: [QD],
                  children: QD.map(((CD, cD) => {
                    const ID = gD.get(CD.name);
                    return (0, SD.jsxs)(Wf.d, {
                      playerSocialPreview: CD,
                      zIndex: QD.length - cD,
                      padDefaultFocus: (0, Db.h)(yD, CD.name, cD),
                      status: ID && (0, SD.jsx)(Ef.b, {
                        gameNameWithVariation: ID.gameNameWithVariation,
                        isPrivateLobby: ID.isPrivateLobby
                      }),
                      children: [(0, SD.jsx)(uD.f, {
                        tooltipInner: (0, SD.jsx)(SD.Fragment, {
                          children: DD("general:accept")
                        }),
                        delayShow: 0,
                        children: (0, SD.jsx)(oD.i, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            tD((0, Db.e)(ZD, cD)), (0, rf.c)(CD.name, !0, {
                              source: "social_menu",
                              announceFriend: !1
                            })
                          },
                          analyticsClick: {
                            id: "social.accept_friend_request",
                            value: "social_menu"
                          },
                          children: (0, SD.jsx)(bD.c, {
                            name: "check"
                          })
                        })
                      }), (0, SD.jsx)(uD.f, {
                        tooltipInner: (0, SD.jsx)(SD.Fragment, {
                          children: DD("general:decline")
                        }),
                        delayShow: 0,
                        children: (0, SD.jsx)(oD.k, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            tD((0, Db.e)(ZD, cD)), (0, rf.c)(CD.name, !1, {
                              source: "social_menu"
                            })
                          },
                          analyticsClick: {
                            id: "social.decline_friend_request",
                            value: "social_menu"
                          },
                          children: (0, SD.jsx)(bD.c, {
                            name: "xmark"
                          })
                        })
                      })]
                    }, `${CD.name}_${CD.isError}`)
                  }))
                })
              })]
            }), (0, SD.jsx)(Ef.f, {})]
          }), (0, SD.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, SD.jsxs)("div", {
              className: "SocialMenuBox SocialMenuParty",
              children: [(0, SD.jsx)(sf.d, {
                label: DD("socialBar:party")
              }), (0, SD.jsx)(Yf.e, {})]
            }), (0, SD.jsxs)("div", {
              className: "SocialMenuBox SocialMenuFriends",
              children: [(0, SD.jsx)(sf.d, {
                label: (0, SD.jsxs)(SD.Fragment, {
                  children: [(0, SD.jsx)(bD.c, {
                    name: Af.d
                  }), " ", DD("socialBar:friends")]
                }),
                meta: (0, SD.jsxs)(SD.Fragment, {
                  children: [pD.length, pD.length >= (0, hD.e)(BD.getPlayerRanks()) && (0, SD.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: DD("socialBar:limitReached")
                  })]
                })
              }), cD && (0, SD.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, SD.jsx)(nD.e, {})
              }), !cD && 0 === pD.length && (0, SD.jsx)("div", {
                className: "SocialMenuEmpty",
                children: DD("socialBar:noFriends")
              }), !cD && pD.length > 0 && (0, SD.jsx)("div", {
                className: "PlayerRows",
                children: (0, SD.jsx)(Bp.c, {
                  lazyLoadedClassName: "SocialMenuFriendsLazy",
                  observerUpdateDeps: [pD],
                  children: pD.map(((DD, cD) => (0, SD.jsx)(Wf.d, {
                    playerSocialPreview: DD,
                    isFriend: !0,
                    hideFriendBadge: !0,
                    onFriendRemoved: DD => {
                      dD.e.removeFriendFromState(DD)
                    },
                    zIndex: pD.length - cD,
                    children: (0, SD.jsx)(Wf.c, {
                      friend: DD,
                      followsLeader: CD,
                      analyticsSurface: "social_menu"
                    })
                  }, `${DD.name}_${DD.isError}`)))
                })
              })]
            })]
          })]
        })
      })
    }
    var Ib = cD(2442);
    const pb = DD => {
        let {
          action: CD,
          padAction: cD
        } = DD;
        const {
          isTouchScreen: ID
        } = (0, PD.o)(["isTouchScreen"]), pD = (0, iI.p)();
        return ID && !pD ? null : (0, SD.jsx)(Ac.d, {
          className: "EverythingMenuTabKey",
          noaAction: CD,
          padHidesKey: !0,
          padMenuShortcut: cD
        })
      },
      ib = (0, ID.memo)((function() {
        const {
          t: DD
        } = (0, fD.F)(), {
          gameState: CD,
          openEverythingMenuName: cD,
          initSdkSelectorFinished: pD,
          crosshairGameView: bD
        } = (0, PD.o)(["gameState", "openEverythingMenuName", "initSdkSelectorFinished", "crosshairGameView"]), {
          userContext: QD
        } = (0, MD.c)(), wD = (0, RD.purchasesAllowed)(), BD = (0, GD.I)(), yD = (DD, CD) => (0, SD.jsx)(pb, {
          action: DD,
          padAction: CD
        }), [tD, ZD] = (0, ID.useState)(null), ND = (0, ID.useRef)(null), gD = {
          ..."inGame" === CD ? {} : (0, oD.U)({
            focusOnClick: !1
          }),
          ...ZI.h
        }, XD = null !== cD, mD = cD !== wC.q.COSMETIC_SHOP && !bD;
        async function nD() {
          await async function() {
            if (!tD) return;
            await tD(), ZD(null)
          }(), PD.d.set({
            openEverythingMenuName: null
          })
        }
        const OD = (0, ID.useMemo)((() => "inGame" === CD ? {
          text: DD("settingsMenu:exitGame"),
          onClick: () => {
            (0, Rf.c)()
          }
        } : (0, xD.c)() ? {
          text: DD("settingsMenu:exitGame"),
          onClick: () => {
            iC.i.discordActivity().then((DD => {
              DD.exit("User exited the game")
            }))
          }
        } : null), [CD, DD]);
        const HD = (0, SD.jsx)("div", {
          className: "EverythingMenuCloseButtonClickZone",
          onClick: () => {
            nD()
          },
          children: (0, SD.jsx)(oD.l, {
            className: "EverythingMenuCloseButton"
          })
        });
        return (0, SD.jsx)(oI.c, {
          showing: XD,
          globallyUniqueKey: "EverythingMenu",
          alwaysMountChildren: !0,
          keepsMovement: cD === wC.q.SHOP,
          doGameplayStartStopOnShow: "inGame" === CD,
          children: (0, SD.jsx)(NI.c, {
            className: "EverythingMenuContainer",
            show: XD && !bD,
            children: (0, SD.jsx)(vI.e, {
              close: () => {
                nD()
              },
              togglePointerLock: !1,
              children: (0, SD.jsxs)("div", {
                className: "EverythingMenu",
                children: [!(0, ci.n)(cD) && (0, SD.jsxs)("div", {
                  className: "EverythingMenuTabList",
                  children: [(0, SD.jsxs)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerStart",
                    children: [OD && (0, SD.jsx)(oD.e, {
                      className: "EverythingMenuBackButton",
                      padDestructive: !0,
                      onClick: () => {
                        OD.onClick()
                      },
                      children: OD.text
                    }), XD && wD && (0, SD.jsx)("div", {
                      ...gD,
                      className: "EverythingMenuWallet",
                      title: DD("homePage:getPremiumCurrency"),
                      onClick: () => {
                        (0, GD.p)({
                          mode: "current",
                          source: "menuWallet"
                        })
                      },
                      children: (0, SD.jsx)(Gf.e, {})
                    })]
                  }), (0, SD.jsxs)("div", {
                    className: "EverythingMenuTabListInner",
                    "data-pad-tabs": "1",
                    children: [(0, SD.jsxs)("div", {
                      ...gD,
                      "data-pad-tab": !0,
                      "data-pad-selected": cD === wC.q.SETTINGS ? "true" : void 0,
                      className: iD()("EverythingMenuTab", {
                        EverythingMenuTabActive: cD === wC.q.SETTINGS
                      }),
                      onClick: () => {
                        PD.d.set({
                          openEverythingMenuName: wC.q.SETTINGS
                        })
                      },
                      children: [DD("general:settings"), yD("OpenSettings", "pause")]
                    }), (0, SD.jsxs)("div", {
                      ...gD,
                      "data-pad-tab": !0,
                      "data-pad-selected": cD === wC.q.CUSTOMISATION ? "true" : void 0,
                      className: iD()("EverythingMenuTab", {
                        EverythingMenuTabActive: cD === wC.q.CUSTOMISATION
                      }),
                      onClick: () => {
                        PD.d.set({
                          openEverythingMenuName: wC.q.CUSTOMISATION
                        })
                      },
                      children: [DD("general:player"), yD("OpenCharacterCustomization")]
                    }), vD.featureFlags.useSocialFeatures && (0, SD.jsxs)("div", {
                      ...gD,
                      "data-pad-tab": !0,
                      "data-pad-selected": cD === wC.q.SOCIAL ? "true" : void 0,
                      className: iD()("EverythingMenuTab", {
                        EverythingMenuTabActive: cD === wC.q.SOCIAL
                      }),
                      ...(0, AD.c)({
                        id: "social.open_menu",
                        value: "menu_tab"
                      }, cD === wC.q.SOCIAL),
                      onClick: () => {
                        PD.d.set({
                          openEverythingMenuName: wC.q.SOCIAL
                        })
                      },
                      children: [DD("socialBar:social"), (0, SD.jsx)(Ib.b, {})]
                    }), wD && (0, SD.jsxs)("div", {
                      ...gD,
                      "data-pad-tab": !0,
                      "data-pad-selected": cD === wC.q.COSMETIC_SHOP ? "true" : void 0,
                      className: iD()("EverythingMenuTab EverythingMenuTabCosmeticShop", {
                        EverythingMenuTabActive: cD === wC.q.COSMETIC_SHOP
                      }),
                      onClick: () => {
                        PD.d.set({
                          openEverythingMenuName: wC.q.COSMETIC_SHOP
                        })
                      },
                      children: [(0, SD.jsx)("span", {
                        className: "EverythingMenuTabCosmeticShopText",
                        children: DD("store:title")
                      }), "new" === BD && (0, SD.jsx)(yf, {}), "dot" === BD && (0, SD.jsx)("span", {
                        className: "EverythingMenuTabStoreBadge EverythingMenuTabStoreDot"
                      })]
                    }), "inGame" === CD && (0, SD.jsxs)("div", {
                      ...gD,
                      "data-pad-tab": !0,
                      "data-pad-selected": cD === wC.q.LOBBY_LEADERBOARD ? "true" : void 0,
                      className: iD()("EverythingMenuTab", {
                        EverythingMenuTabActive: cD === wC.q.LOBBY_LEADERBOARD
                      }),
                      onClick: () => {
                        PD.d.set({
                          openEverythingMenuName: wC.q.LOBBY_LEADERBOARD
                        })
                      },
                      children: [DD("general:lobby"), yD("OpenLobbyLeaderboard", "leaderboard")]
                    })]
                  }), (0, SD.jsx)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerEnd",
                    children: HD
                  })]
                }), (0, ci.n)(cD) && HD, (0, SD.jsxs)("div", {
                  className: "EverythingMenuBody",
                  "data-pad-initial-area": !0,
                  style: {
                    "--everythingMenuBodyBackgroundOpacity": "inGame" === CD ? "0.85" : "1"
                  },
                  children: [(0, SD.jsx)(SI, {
                    show: cD === wC.q.SETTINGS,
                    setBeforeResumeCallback: ZD
                  }), (0, SD.jsx)(tI, {
                    show: cD === wC.q.CUSTOMISATION
                  }), (0, SD.jsx)(ID.Suspense, {
                    fallback: null,
                    children: (0, SD.jsx)(sp, {
                      show: cD === wC.q.SHOP
                    })
                  }), (0, SD.jsx)(fi, {
                    show: cD === wC.q.LOBBY_LEADERBOARD
                  }), (0, SD.jsx)(Tf, {
                    show: cD === wC.q.COSMETIC_SHOP
                  }), (0, SD.jsx)(Cb, {
                    show: cD === wC.q.SOCIAL
                  })]
                }), !(0, vD.isMobileApp)() && (0, gI.e)(QD.getPlayerRanks()) && (0, SD.jsx)(NI.c, {
                  ref: ND,
                  className: "EverythingMenuBannerDiv",
                  show: mD,
                  "data-pad-hint-bar-avoid": !0,
                  "data-pad-no-step-in": !0,
                  children: (0, SD.jsx)(kf.b, {
                    info: {
                      adId: 2,
                      adType: "leaderboard",
                      adAlias: "banner_shop"
                    },
                    sizeInfo: {
                      parentRef: ND
                    },
                    showing: XD && mD,
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
  9045: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => iD
    });
    var ID = cD(326),
      pD = cD(9050);

    function iD(DD, CD, cD) {
      const iD = Object.entries(CD).sort(((DD, CD) => CD[1] - DD[1])),
        fD = (0, ID.tb)(DD);
      fD.push(DD ? "\n\n" : "\n");
      for (const [pD, tD] of iD) {
        var bD, QD, wD;
        const DD = null !== (bD = null === cD || void 0 === cD || null === (QD = cD[pD]) || void 0 === QD ? void 0 : QD.icon) && void 0 !== bD ? bD : `${pD} Enchantment`;
        fD.push({
          icon: DD,
          style: {
            fontSize: "1.5rem"
          }
        }), fD.push({
          str: `${pD} ${null!==(wD=(0,ID.S)(tD))&&void 0!==wD?wD:tD}\n`
        })
      }
      fD.push({
        str: "\n"
      });
      for (const [ID, tD] of iD) {
        var SD, BD, yD, MD;
        const DD = null !== (SD = null === cD || void 0 === cD || null === (BD = cD[ID]) || void 0 === BD ? void 0 : BD.icon) && void 0 !== SD ? SD : `${ID} Enchantment`,
          CD = null !== (yD = null === cD || void 0 === cD || null === (MD = cD[ID]) || void 0 === MD ? void 0 : MD.description) && void 0 !== yD ? yD : (0, pD.j)(ID);
        fD.push({
          icon: DD,
          style: {
            fontSize: "1.25rem",
            opacity: .75
          }
        }), fD.push({
          str: CD,
          style: {
            fontSize: "0.8em",
            fontWeight: "normal",
            opacity: .75
          }
        }), fD.push({
          str: "\n"
        })
      }
      return fD
    }
  },
  9057: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => wD,
      f: () => ND,
      h: () => oD,
      i: () => QD,
      l: () => vD,
      n: () => SD,
      r: () => yD,
      t: () => ZD,
      w: () => BD
    });
    var ID = cD(312),
      pD = cD(624),
      iD = cD(326),
      fD = cD(4070),
      bD = cD(9045);

    function QD(DD, CD) {
      var cD;
      let {
        player: ID,
        chestOrCreative: pD
      } = DD;
      var iD;
      return CD < ID.length ? null !== (iD = ID[CD]) && void 0 !== iD ? iD : null : null !== (cD = pD[CD - ID.length]) && void 0 !== cD ? cD : null
    }

    function wD(DD) {
      var CD;
      return null !== (CD = DD.amount) && void 0 !== CD ? CD : 0
    }

    function SD(DD) {
      return 0 === DD.button || void 0 === DD.button
    }

    function BD(DD) {
      return !!DD.shiftKey
    }

    function yD(DD) {
      return "touches" in DD || "touch" === DD.pointerType || "pen" === DD.pointerType
    }
    const MD = new Set,
      tD = 50;

    function ZD(DD, CD) {
      var cD;
      const ID = null === (cD = DD[CD]) || void 0 === cD ? void 0 : cD.displayName;
      return (0, pD.C)(ID) ? "string" !== typeof CD ? "" : (!MD.has(CD) && MD.size < tD && (MD.add(CD), console.warn(`No item called "${CD}", so its hover shows the name as given`)), CD) : ID
    }

    function oD(DD, CD, cD) {
      var QD, wD, SD, BD, yD, MD, tD, oD, vD, ND, gD, XD, mD, nD;
      const OD = DD.attributes,
        PD = null !== (QD = null === (wD = CD[DD.name]) || void 0 === wD ? void 0 : wD.rootName) && void 0 !== QD ? QD : DD.name,
        HD = null !== (SD = null !== (BD = OD.customDisplayName) && void 0 !== BD ? BD : null === (yD = CD[DD.name]) || void 0 === yD ? void 0 : yD.displayName) && void 0 !== SD ? SD : ZD(CD, PD);
      let UD = HD;
      const xD = null === (MD = OD.customAttributes) || void 0 === MD ? void 0 : MD.enchantmentTier;
      xD && (UD = (0, iD.tb)(HD, {
        colour: iD.lb[xD]
      }));
      const qD = null !== (tD = null !== (oD = null !== (vD = function(DD, CD) {
        var cD;
        if (void 0 === DD || null !== (cD = CD.customAttributes) && void 0 !== cD && cD.author) return DD;
        const pD = (0, ID.bc)(DD);
        return pD.every((DD => "string" === typeof DD)) ? DD : pD.map((DD => "string" === typeof DD ? DD : {
          icon: DD.icon,
          style: {
            fontSize: "1.5em"
          }
        }))
      }(OD.customDescription, OD)) && void 0 !== vD ? vD : null === (ND = CD[DD.name]) || void 0 === ND ? void 0 : ND.description) && void 0 !== oD ? oD : null === (gD = CD[PD]) || void 0 === gD ? void 0 : gD.description) && void 0 !== tD ? tD : "";
      let JD = qD;
      if (null !== (XD = OD.customAttributes) && void 0 !== XD && XD.enchantments) JD = (0, bD.d)(qD, OD.customAttributes.enchantments, OD.customAttributes.enchantmentData);
      else if (cD[PD]) JD = (0, iD.tb)(qD), JD.push({
        str: "\n"
      }), JD.push({
        str: "Enchantable",
        style: {
          fontSize: "0.8em",
          fontWeight: "normal",
          opacity: .4
        }
      });
      else if (null !== (mD = OD.customAttributes) && void 0 !== mD && mD.mobSettings) {
        var KD, aD;
        const DD = OD.customAttributes.mobSettings;
        var VD, zD;
        if (JD = [], (0, pD.C)(OD.customAttributes.health) || (JD.push({
            str: "\n"
          }), JD.push({
            icon: "Health",
            style: {
              fontSize: "1.5em"
            }
          }), JD.push({
            str: " "
          }), JD.push({
            str: OD.customAttributes.health.toString()
          }), (0, pD.C)(DD.maxHealth) || (JD.push({
            str: "/"
          }), JD.push({
            str: DD.maxHealth.toString()
          }))), !(0, pD.C)(DD.attackDamage) && DD.attackDamage > 0 && (JD.push({
            str: "\n"
          }), JD.push({
            icon: "Iron Sword",
            style: {
              fontSize: "1.5em"
            }
          }), JD.push({
            str: " "
          }), JD.push({
            str: DD.attackDamage.toString()
          })), !(0, pD.C)(DD.secondaryAttackDamage) && DD.secondaryAttackDamage > 0 && (JD.push({
            str: "\n"
          }), JD.push({
            icon: "Stone Crossbow",
            style: {
              fontSize: "1.5em"
            }
          }), JD.push({
            str: " "
          }), JD.push({
            str: DD.secondaryAttackDamage.toString()
          })), (0, pD.C)(DD.baseRunningSpeed) || (JD.push({
            str: "\n"
          }), JD.push({
            icon: "Speed",
            style: {
              fontSize: "1.5em"
            }
          }), JD.push({
            str: " "
          }), JD.push({
            str: DD.baseRunningSpeed.toFixed(2)
          })), "Saddled" === DD.metaInfo) JD.push({
          str: "\n"
        }), JD.push({
          str: {
            translationKey: "general:has"
          }
        }), JD.push({
          str: " "
        }), JD.push({
          icon: null !== (VD = null === (zD = DD.tameInfo) || void 0 === zD ? void 0 : zD.saddleItemName) && void 0 !== VD ? VD : "Saddle",
          style: {
            fontSize: "1.5em"
          }
        });
        if (JD.push({
            str: "\n"
          }), JD.push({
            str: "\n"
          }), DD.petInfo && null !== (KD = DD.tameInfo) && void 0 !== KD && KD.supportsFriendship) {
          const CD = fD.b.getIconsFromFriendshipPoints(DD.petInfo.friendshipPoints);
          for (const DD of CD) JD.push({
            icon: DD,
            style: {
              fontSize: "1.5em"
            }
          });
          JD.push({
            str: "\n"
          });
          const cD = fD.b.getMobHungerLevel(DD.petInfo.lastFedAt);
          for (const DD of fD.b.hungerLevelIcons[cD]) JD.push({
            icon: DD,
            style: {
              fontSize: "1.5em"
            }
          });
          JD.push({
            str: " "
          }), JD.push({
            str: fD.b.hungerLevelTranslations[cD],
            style: {
              fontWeight: "bolder"
            }
          })
        }
        if (DD.tameInfo && null !== (aD = DD.tameInfo) && void 0 !== aD && aD.supportsFriendship) {
          var jD, lD;
          let CD = null !== (jD = DD.tameInfo.likedFoods) && void 0 !== jD ? jD : [];
          JD.push({
            str: "\n"
          }), JD.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: fD.b.feedTextColours[fD.b.MobFoodType.Superliked]
            }
          }), JD.push({
            str: " "
          }), null !== (lD = DD.petInfo) && void 0 !== lD && lD.superlikedFoodKnown ? (JD.push({
            icon: DD.petInfo.superlikedFood,
            style: {
              fontSize: "1.5em"
            }
          }), CD = CD.filter((CD => CD !== DD.petInfo.superlikedFood))) : JD.push({
            icon: "Question Mark",
            style: {
              fontSize: "1.5em"
            }
          }), JD.push({
            str: "\n"
          }), JD.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: fD.b.feedTextColours[fD.b.MobFoodType.Liked]
            }
          }), JD.push({
            str: " "
          });
          for (const DD of CD) JD.push({
            icon: DD,
            style: {
              fontSize: "1.5em"
            }
          });
          JD.push({
            str: "\n"
          }), JD.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: fD.b.feedTextColours[fD.b.MobFoodType.Neutral]
            }
          }), JD.push({
            str: " "
          });
          for (const cD of null !== (LD = DD.tameInfo.neutralFoods) && void 0 !== LD ? LD : []) {
            var LD;
            JD.push({
              icon: cD,
              style: {
                fontSize: "1.5em"
              }
            })
          }
          JD.push({
            str: "\n"
          }), JD.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: fD.b.feedTextColours[fD.b.MobFoodType.Disliked]
            }
          }), JD.push({
            str: " "
          });
          for (const cD of null !== (TD = DD.tameInfo.dislikedFoods) && void 0 !== TD ? TD : []) {
            var TD;
            JD.push({
              icon: cD,
              style: {
                fontSize: "1.5em"
              }
            })
          }
        }
        JD.length > 0 ? (JD.shift(), JD.unshift(...(0, iD.tb)(qD))) : JD = (0, iD.tb)(qD)
      }
      return {
        name: UD,
        desc: JD,
        fontStyle: null !== (nD = OD.customAttributes) && void 0 !== nD && nD.author ? "italic" : "normal"
      }
    }

    function vD(DD, CD, cD, ID) {
      const pD = QD(DD, cD),
        iD = QD(DD, ID);
      if (!pD) return !1;
      const fD = CD[pD.name].armourReduction,
        bD = CD[iD.name].armourReduction;
      if (bD === fD) {
        var wD, SD, BD, yD;
        const DD = null !== (wD = null === (SD = pD.attributes.customAttributes) || void 0 === SD ? void 0 : SD.enchantmentTier) && void 0 !== wD ? wD : "Tier 0",
          CD = null !== (BD = null === (yD = iD.attributes.customAttributes) || void 0 === yD ? void 0 : yD.enchantmentTier) && void 0 !== BD ? BD : "Tier 0";
        return parseInt(DD.replace("Tier ", "")) >= parseInt(CD.replace("Tier ", ""))
      }
      return fD > bD
    }

    function ND(DD) {
      let CD;
      if ("number" === typeof DD) {
        const cD = document.querySelector(`[data-inven-idx="${DD}"]`);
        if (!cD) return null;
        CD = cD.getBoundingClientRect()
      } else CD = DD.getBoundingClientRect();
      return {
        x: CD.left + CD.width / 2,
        y: CD.top + CD.height / 2
      }
    }
  },
  8940: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => MD,
      h: () => tD,
      k: () => ZD
    });
    var ID = cD(1442),
      pD = cD(53),
      iD = cD(1305),
      fD = cD(4325),
      bD = cD(2295),
      QD = cD(1192),
      wD = cD(90),
      SD = cD(1954),
      BD = cD(1328),
      yD = cD(1093);

    function MD(DD) {
      let {
        show: CD,
        onClose: cD
      } = DD;
      const {
        requestedGameNameWithVariation: ID,
        lobbyName: pD,
        shownLobbyName: iD
      } = (0, SD.h)("connectedGame"), QD = (0, bD.b)(ID, pD, !1);
      return wD.featureFlags.canUseInviteLinks && (0, yD.jsx)(fD.e, {
        show: CD,
        close: cD,
        padShowsHud: !0,
        togglePointerLock: !1,
        globallyUniqueKey: "InviteLinkBox",
        doGameplayStartStopOnShow: !0,
        children: (0, yD.jsxs)("div", {
          className: "InviteLinkBox AnimFadeInScaleUp",
          children: [(0, yD.jsx)("div", {
            className: "InviteLinkBoxHeader SmallTextBold",
            children: "Invite Friends"
          }), (0, yD.jsxs)("div", {
            className: "InviteLinkBoxDescription SmallTextLight",
            children: [(0, yD.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: '"Join Lobby Name" Button Info'
            }), "Game: ", null === QD ? (0, yD.jsx)(BD.e, {}) : QD, (0, yD.jsx)("br", {}), "Lobby Name: ", iD, (0, yD.jsx)("br", {}), (0, yD.jsx)("br", {}), (0, yD.jsx)("br", {}), (0, yD.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: "Link"
            })]
          }), (0, yD.jsx)(tD, {})]
        })
      })
    }

    function tD() {
      var DD;
      const {
        t: CD
      } = (0, QD.F)(), cD = null !== (DD = ZD(wD.featureFlags.canUseInviteLinks)) && void 0 !== DD ? DD : "Loading Link...", [iD, fD] = (0, pD.useState)(0), [bD, SD] = (0, pD.useReducer)((DD => DD + 1), 0);
      return (0, pD.useEffect)((() => {
        const DD = setTimeout((() => {
          SD()
        }), 1100);
        return () => {
          clearTimeout(DD)
        }
      }), [iD]), wD.featureFlags.canUseInviteLinks && (0, yD.jsxs)("div", {
        className: "InviteLinkInnerWrapper",
        children: [(0, yD.jsx)("div", {
          className: "InviteLinkInner",
          children: cD
        }), (0, yD.jsx)(ID.i, {
          className: "InviteLinkCopyButton",
          onClick: () => {
            navigator.clipboard.writeText(cD).catch((DD => {
              console.error("Failed to copy invite link:", DD)
            })), fD(Date.now())
          },
          disabled: Date.now() - iD < 1e3,
          children: Date.now() - iD < 1e3 ? CD("general:copied") : CD("general:copy")
        })]
      })
    }

    function ZD(DD) {
      const [CD, cD] = (0, pD.useState)(null);
      return (0, pD.useEffect)((() => {
        if (!DD) return;
        let CD = !0;
        return (0, iD.u)().then((DD => {
          CD && cD(DD)
        })).catch((DD => {
          console.error("Failed to get invite link:", DD)
        })), () => {
          CD = !1
        }
      }), [DD]), CD
    }
  },
  9039: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => wD
    });
    var ID = cD(53),
      pD = cD(1049),
      iD = cD.n(pD),
      fD = cD(1954),
      bD = cD(1093);

    function QD(DD) {
      const CD = Math.floor(DD / 3600),
        cD = Math.floor(DD % 3600 / 60),
        ID = Math.floor(DD % 60),
        pD = `${cD.toString().padStart(2,"0")}:${ID.toString().padStart(2,"0")}`;
      return CD > 0 ? `${CD}:${pD}` : pD
    }
    const wD = (0, ID.memo)((function(DD) {
      let {
        className: CD
      } = DD;
      const {
        recording: cD,
        seconds: ID
      } = (0, fD.h)("replayRecorder");
      return cD ? (0, bD.jsxs)("div", {
        className: iD()("RecordingIndicator", CD),
        children: [(0, bD.jsx)("span", {
          className: "RecordingIndicatorDot"
        }), (0, bD.jsx)("span", {
          className: "RecordingIndicatorLabel",
          children: "REC"
        }), (0, bD.jsx)("span", {
          className: "RecordingIndicatorTime",
          children: QD(ID)
        })]
      }) : null
    }))
  },
  4648: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => oD
    });
    var ID = cD(1049),
      pD = cD.n(ID),
      iD = cD(4438),
      fD = cD(1192),
      bD = cD(1064),
      QD = cD(1442),
      wD = cD(1497),
      SD = cD(1340),
      BD = cD(2421),
      yD = cD(1093);
    const MD = {
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

    function tD(DD) {
      let {
        platform: CD
      } = DD;
      const cD = "youtube" === CD;
      return (0, yD.jsxs)("span", {
        className: pD()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: cD
        }),
        children: [cD && (0, yD.jsx)(BD.c, {
          variant: "white"
        }), !cD && (0, yD.jsx)(bD.c, {
          name: MD[CD].icon,
          kit: "brands"
        })]
      })
    }

    function ZD(DD) {
      let {
        platform: CD,
        link: cD,
        editable: ID,
        userContext: pD,
        onLinksUpdated: BD
      } = DD;
      const {
        t: ZD
      } = (0, fD.F)(), oD = MD[CD];
      if (!cD && !ID) return null;

      function vD() {
        var DD;
        if (!pD || !BD) return;
        SD.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: oD.name
            }
          },
          prefixText: iD.x[CD],
          placeholderText: "playBloxd",
          initialValue: null !== (DD = null === cD || void 0 === cD ? void 0 : cD.handle) && void 0 !== DD ? DD : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: cD ? "general:remove" : void 0
        }).getResult().then((async DD => {
          if ("notificationTornDown" !== DD && null !== DD) try {
            "submit" === DD.type ? await wD.c.setSocialLink(pD, CD, DD.value) : await wD.c.clearSocialLink(pD, CD), BD()
          } catch (cD) {
            console.error("Failed to update social link", cD), SD.NotificationProvider.showAlertPopup({
              title: cD.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (cD) {
        const DD = `@${cD.handle}`;
        return (0, yD.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: oD.color
          },
          href: cD.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, yD.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, yD.jsx)(tD, {
              platform: CD
            }), (0, yD.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, yD.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: DD
              })
            })]
          }), ID && (0, yD.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, QD.U)({
              stopPropagation: !0
            }),
            onClick: DD => {
              DD.stopPropagation(), DD.preventDefault(), vD()
            },
            children: (0, yD.jsx)(bD.c, {
              name: "pen-to-square"
            })
          }), !ID && (0, yD.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, yD.jsx)(bD.c, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, yD.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: oD.color
        },
        ...(0, QD.U)(),
        onClick: () => {
          vD()
        },
        children: [(0, yD.jsx)(tD, {
          platform: CD
        }), (0, yD.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, yD.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: oD.name
          }), (0, yD.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: ZD("homePage:profileSocialLinkAdd")
          })]
        }), (0, yD.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, yD.jsx)(bD.c, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function oD(DD) {
      let {
        socialLinks: CD,
        editable: cD = !1,
        userContext: ID,
        onLinksUpdated: pD
      } = DD;
      if (!cD && 0 === CD.length) return null;
      const fD = new Map(CD.map((DD => [DD.platform, DD]))),
        bD = cD ? iD.u : CD.map((DD => DD.platform));
      return (0, yD.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, yD.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: bD.map((DD => (0, yD.jsx)(ZD, {
            platform: DD,
            link: fD.get(DD),
            editable: cD,
            userContext: ID,
            onLinksUpdated: pD
          }, DD)))
        })
      })
    }
  },
  9041: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => iD
    });
    var ID = cD(4329),
      pD = cD(4337);

    function iD(DD) {
      let {
        children: CD,
        showing: cD,
        globallyUniqueKey: iD,
        alwaysMountChildren: fD = !1,
        doGameplayStartStopOnShow: bD = !0,
        keepsMovement: QD = !1
      } = DD;
      return (0, pD.e)(!0, cD, iD, QD), (0, ID.b)(bD, cD), cD || fD ? CD : null
    }
  },
  9084: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => iD
    });
    var ID = cD(53),
      pD = cD(3387);

    function iD() {
      const [DD, CD] = (0, ID.useState)(!1);
      return (0, ID.useLayoutEffect)((() => {
        let DD = !0;
        return (0, pD.d)().then((() => {
          DD && CD(!0)
        })), () => {
          DD = !1
        }
      }), []), DD
    }
  },
  6320: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => iD
    });
    var ID = cD(53),
      pD = cD(36);

    function iD(DD, CD) {
      var cD;
      const [iD, fD] = (0, ID.useState)(null !== (cD = pD.h.getItem(DD)) && void 0 !== cD ? cD : CD);
      return [iD, CD => {
        pD.h.setItem(DD, CD), fD(CD)
      }]
    }
  },
  9021: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => yD,
      h: () => BD
    });
    cD(9026);
    var ID = cD(1049),
      pD = cD.n(ID),
      iD = cD(53),
      fD = cD(8991);

    function bD(DD, CD) {
      return Math.max(1, Math.round(DD * CD))
    }

    function QD(DD, CD, cD) {
      const ID = 2 * cD >= CD - 1;
      return {
        x: DD,
        y: DD,
        size: CD,
        border: Math.min(cD, Math.floor(CD / 2)),
        filled: ID
      }
    }
    var wD = cD(1093);
    const SD = 1.4;

    function BD(DD, CD) {
      return DD && CD ? `scale(${SD})` : "scale(1)"
    }

    function yD(DD) {
      return "classic" === DD.settings.style ? (0, wD.jsx)(ZD, {
        ...DD
      }) : (0, wD.jsx)(nD, {
        ...DD
      })
    }
    const MD = .125;

    function tD(DD, CD) {
      const cD = {};
      if (DD.color !== fD.h.color && (cD.color = (0, fD.o)(DD.color)), DD.opacity !== fD.h.opacity && (cD.opacity = DD.opacity / 100), DD.outline !== fD.h.outline || DD.outlineColor !== fD.h.outlineColor) {
        const CD = DD.outline,
          ID = (0, fD.o)(DD.outlineColor);
        cD.textShadow = CD > 0 ? `-${CD}px 0 ${ID}, 0 ${CD}px ${ID}, ${CD}px 0 ${ID}, 0 -${CD}px ${ID}` : "none"
      }
      if (DD.size !== fD.h.size) {
        const ID = DD.size / 100;
        cD.fontSize = CD ? `calc(max(1.3rem, 18px) * ${ID})` : `calc(1.3rem * ${ID})`, cD.marginTop = `-${MD}em`, cD.transformOrigin = `50% calc(50% + ${MD}em)`
      }
      return cD
    }

    function ZD(DD) {
      let {
        settings: CD,
        touch: cD,
        inPreview: ID,
        inEditor: iD,
        pressed: fD = !1,
        pressRef: bD
      } = DD;
      return (0, wD.jsx)("div", {
        className: pD()("Crosshair", {
          Touch: cD,
          CrosshairInPreview: ID,
          CrosshairInEditor: iD || ID
        }),
        ref: bD,
        style: {
          transform: BD(fD, CD.growOnClick),
          ...tD(CD, cD)
        },
        children: "+"
      })
    }

    function oD(DD, CD) {
      return DD / CD + "px"
    }

    function vD(DD, CD, cD, ID) {
      return {
        ...XD(DD, CD, cD),
        width: oD(DD.w, cD),
        height: oD(DD.h, cD),
        background: ID
      }
    }

    function ND(DD, CD, cD) {
      return {
        left: oD(DD.x, CD),
        top: oD(DD.y, CD),
        width: oD(DD.size, CD),
        height: oD(DD.size, CD),
        borderWidth: oD(DD.border, CD),
        borderColor: cD,
        background: DD.filled ? cD : void 0
      }
    }
    const gD = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function XD(DD, CD, cD) {
      const [ID, pD] = DD.arm ? gD[DD.arm] : [0, 0], iD = Math.round(CD * cD);
      return {
        left: oD(DD.x + ID * iD, cD),
        top: oD(DD.y + pD * iD, cD)
      }
    }

    function mD(DD) {
      return DD.arm ? {
        "data-arm": DD.arm,
        "data-x": DD.x,
        "data-y": DD.y
      } : {}
    }

    function nD(DD) {
      let {
        settings: CD,
        inPreview: cD,
        inEditor: ID,
        pressed: BD = !1,
        spread: yD,
        spreadRef: MD
      } = DD;
      const tD = (0, iD.useRef)(null),
        {
          box: ZD,
          dpr: oD
        } = function(DD) {
          const [CD, cD] = (0, iD.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, iD.useLayoutEffect)((() => {
            const CD = DD.current;
            if (!CD) return;
            const ID = () => {
              const DD = CD.getBoundingClientRect(),
                ID = window.devicePixelRatio || 1;
              cD((CD => CD.dpr === ID && CD.box.left === DD.left && CD.box.top === DD.top && CD.box.width === DD.width && CD.box.height === DD.height ? CD : {
                box: {
                  left: DD.left,
                  top: DD.top,
                  width: DD.width,
                  height: DD.height
                },
                dpr: ID
              }))
            };
            ID();
            const pD = new ResizeObserver(ID);
            return pD.observe(CD), window.addEventListener("resize", ID), window.addEventListener("scroll", ID, !0), () => {
              pD.disconnect(), window.removeEventListener("resize", ID), window.removeEventListener("scroll", ID, !0)
            }
          }), [DD]), CD
        }(tD),
        gD = (0, iD.useRef)(oD);
      gD.current = oD;
      const nD = function(DD, CD) {
          const cD = bD(DD.lineThickness, CD),
            ID = bD(DD.lineLength, CD),
            pD = Math.round(DD.gap * CD),
            iD = bD(DD.dotSize, CD),
            fD = DD.outline > 0 ? bD(DD.outline, CD) : 0,
            wD = bD(DD.circleThickness, CD),
            SD = DD.circle ? Math.round(DD.circleRadius * CD * 2 + wD) : 0,
            BD = function(DD, CD, cD, ID) {
              return DD.lines ? CD : DD.dot ? cD : DD.circle && ID % 2 === 0 ? 2 : 1
            }(DD, cD, iD, SD),
            yD = [];
          if (DD.lines && (yD.push({
              x: BD + pD,
              y: 0,
              w: ID,
              h: cD,
              arm: "right"
            }), yD.push({
              x: -pD - ID,
              y: 0,
              w: ID,
              h: cD,
              arm: "left"
            }), yD.push({
              x: 0,
              y: BD + pD,
              w: cD,
              h: ID,
              arm: "down"
            }), DD.tStyle || yD.push({
              x: 0,
              y: -pD - ID,
              w: cD,
              h: ID,
              arm: "up"
            }), 0 === pD && yD.push({
              x: 0,
              y: 0,
              w: cD,
              h: cD
            })), DD.dot) {
            const DD = Math.floor((BD - iD) / 2);
            yD.push({
              x: DD,
              y: DD,
              w: iD,
              h: iD
            })
          }
          const MD = yD.map((DD => ({
            ...DD,
            x: DD.x - fD,
            y: DD.y - fD,
            w: DD.w + 2 * fD,
            h: DD.h + 2 * fD
          })));
          let tD = null,
            ZD = null;
          if (DD.circle) {
            const DD = SD + ((SD - BD) % 2 === 0 ? 0 : 1),
              CD = (BD - DD) / 2;
            tD = QD(CD, DD, wD), fD > 0 && (ZD = QD(CD - fD, DD + 2 * fD, wD + 2 * fD))
          }
          return {
            cell: BD,
            fills: yD,
            outlines: fD > 0 ? MD : [],
            ring: tD,
            ringOutline: ZD
          }
        }(BD && CD.growOnClick ? function(DD, CD) {
          return {
            ...DD,
            outline: DD.outline * CD,
            lineLength: DD.lineLength * CD,
            lineThickness: DD.lineThickness * CD,
            gap: DD.gap * CD,
            dotSize: DD.dotSize * CD,
            circleRadius: DD.circleRadius * CD,
            circleThickness: DD.circleThickness * CD
          }
        }(CD, SD) : CD, oD),
        OD = function(DD, CD, cD) {
          const ID = Math.round((DD.left + DD.width / 2) * cD - CD / 2),
            pD = Math.round((DD.top + DD.height / 2) * cD - CD / 2);
          return {
            x: ID / cD - DD.left,
            y: pD / cD - DD.top
          }
        }(ZD, nD.cell, oD),
        PD = (0, fD.o)(CD.color),
        HD = (0, fD.o)(CD.outlineColor),
        UD = (0, iD.useRef)(0);
      (0, iD.useLayoutEffect)((() => {
        if (MD) return MD.current = DD => {
          var CD;
          UD.current = DD, null === (CD = tD.current) || void 0 === CD || CD.querySelectorAll("[data-arm]").forEach((CD => {
            Object.assign(CD.style, XD(function(DD) {
              return {
                x: Number(DD.dataset.x),
                y: Number(DD.dataset.y),
                arm: DD.dataset.arm
              }
            }(CD), DD, gD.current))
          }))
        }, () => {
          MD.current = null
        }
      }), [MD]);
      const xD = null !== yD && void 0 !== yD ? yD : UD.current;
      return (0, wD.jsx)("div", {
        ref: tD,
        className: pD()("CrosshairShapes", {
          CrosshairInPreview: cD,
          CrosshairInEditor: ID || cD,
          CrosshairSpreads: void 0 !== MD
        }),
        children: (0, wD.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: OD.x,
            top: OD.y,
            opacity: CD.opacity / 100
          },
          children: (0, wD.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [nD.ringOutline && (0, wD.jsx)("div", {
              className: "CrosshairRing",
              style: ND(nD.ringOutline, oD, HD)
            }), nD.outlines.map(((DD, CD) => (0, wD.jsx)("div", {
              className: "CrosshairPart",
              ...mD(DD),
              style: vD(DD, xD, oD, HD)
            }, `o${CD}`))), nD.ring && (0, wD.jsx)("div", {
              className: "CrosshairRing",
              style: ND(nD.ring, oD, PD)
            }), nD.fills.map(((DD, CD) => (0, wD.jsx)("div", {
              className: "CrosshairPart",
              ...mD(DD),
              style: vD(DD, xD, oD, PD)
            }, `f${CD}`)))]
          })
        })
      })
    }
  },
  9028: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => SD,
      e: () => oD,
      g: () => ZD
    });
    var ID = cD(8991);
    const pD = "XH1-",
      iD = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      fD = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      bD = ["color", "outlineColor"],
      QD = 1 + 3 * bD.length + fD.length + 1,
      wD = Math.ceil(8 * QD / Math.log2(62)),
      SD = pD.length + wD;

    function BD(DD) {
      let CD = 90;
      for (const cD of DD) CD = 31 * CD + cD & 255;
      return CD
    }
    const yD = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      MD = BigInt(yD.length);

    function tD(DD, CD) {
      let cD = 0n;
      for (const pD of DD) {
        const DD = yD.indexOf(pD);
        if (DD < 0) return null;
        cD = cD * MD + BigInt(DD)
      }
      if (cD >> BigInt(8 * CD) !== 0n) return null;
      const ID = [];
      for (let pD = 0; pD < CD; pD++) ID.unshift(Number(0xffn & cD)), cD >>= 8n;
      return ID
    }

    function ZD(DD) {
      let CD = "shapes" === DD.style ? 1 : 0;
      iD.forEach(((cD, ID) => {
        DD[cD] && (CD |= 1 << ID + 1)
      }));
      const cD = [CD];
      for (const pD of bD) {
        const CD = (0, ID.l)(pD, DD[pD]);
        cD.push(CD >> 16 & 255, CD >> 8 & 255, 255 & CD)
      }
      for (const pD of fD) {
        const {
          min: CD,
          step: iD
        } = ID.e[pD];
        cD.push(Math.round(((0, ID.l)(pD, DD[pD]) - CD) / iD))
      }
      return cD.push(BD(cD)), pD + function(DD, CD) {
        let cD = 0n;
        for (const pD of DD) cD = cD << 8n | BigInt(pD);
        let ID = "";
        for (let pD = 0; pD < CD; pD++) ID = yD[Number(cD % MD)] + ID, cD /= MD;
        return ID
      }(cD, wD)
    }

    function oD(DD) {
      for (const CD of DD.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${wD}})`, "gi"))) {
        const DD = vD(tD(CD[1], QD));
        if (DD) return DD
      }
      return null
    }

    function vD(DD) {
      if (!DD || DD.length !== QD || BD(DD.slice(0, -1)) !== DD[DD.length - 1]) return null;
      const CD = DD[0],
        cD = {
          ...ID.h,
          style: 1 & CD ? "shapes" : "classic"
        };
      iD.forEach(((DD, ID) => {
        cD[DD] = 0 !== (CD & 1 << ID + 1)
      }));
      let pD = 1;
      for (const ID of bD) cD[ID] = DD[pD] << 16 | DD[pD + 1] << 8 | DD[pD + 2], pD += 3;
      for (const iD of fD) {
        const {
          min: CD,
          step: fD
        } = ID.e[iD];
        cD[iD] = (0, ID.l)(iD, CD + DD[pD] * fD), pD++
      }
      return cD
    }
  },
  8991: (DD, CD, cD) => {
    cD.d(CD, {
      A: () => fD,
      e: () => ID,
      h: () => pD,
      l: () => iD,
      o: () => wD,
      s: () => QD,
      u: () => SD,
      w: () => bD
    });
    const ID = {
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
      pD = Object.freeze({
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

    function iD(DD, CD) {
      var cD;
      const {
        min: iD,
        max: fD,
        step: bD
      } = ID[DD];
      if (!Number.isFinite(CD)) return pD[DD];
      const QD = (null !== (cD = String(bD).split(".")[1]) && void 0 !== cD ? cD : "").length,
        wD = Number((Math.round(CD / bD) * bD).toFixed(QD));
      return Math.min(fD, Math.max(iD, wD))
    }

    function fD(DD, CD, cD) {
      const ID = "number" === typeof cD ? iD(CD, cD) : cD;
      return {
        ...DD,
        [CD]: ID
      }
    }

    function bD(DD, CD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(pD).every((ID => cD.includes(ID) || DD[ID] === CD[ID]))
    }

    function QD(DD) {
      return bD(DD, pD)
    }

    function wD(DD) {
      return `#${DD.toString(16).padStart(6,"0")}`
    }

    function SD(DD) {
      const CD = /^#?([0-9a-f]{6})$/i.exec(DD.trim());
      return CD ? parseInt(CD[1], 16) : null
    }
  },
  9037: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => BD,
      h: () => yD
    });
    var ID = cD(53),
      pD = cD(36),
      iD = cD(9028),
      fD = cD(8991);
    const bD = "crosshairCode";
    let QD = null;
    const wD = new Set;

    function SD() {
      if (null === QD) {
        var DD;
        const CD = pD.h.getItem(bD);
        QD = null !== (DD = "string" === typeof CD ? (0, iD.e)(CD) : null) && void 0 !== DD ? DD : fD.h
      }
      return QD
    }

    function BD(DD) {
      QD = DD, (0, fD.s)(DD) ? pD.h.removeItem(bD) : pD.h.setItem(bD, (0, iD.g)(DD));
      for (const CD of wD) CD()
    }

    function yD() {
      const [DD, CD] = (0, ID.useState)(SD);
      return (0, ID.useEffect)((() => {
        const DD = () => {
          CD(SD())
        };
        return DD(), cD = DD, wD.add(cD), () => {
          wD.delete(cD)
        };
        var cD
      }), []), DD
    }
  },
  8591: (DD, CD, cD) => {
    function ID(DD) {
      return {
        x: (DD.left + DD.right) / 2,
        y: (DD.top + DD.bottom) / 2
      }
    }

    function pD(DD) {
      return 0 === DD.length ? null : DD.reduce(((DD, CD) => ({
        left: Math.min(DD.left, CD.left),
        top: Math.min(DD.top, CD.top),
        right: Math.max(DD.right, CD.right),
        bottom: Math.max(DD.bottom, CD.bottom)
      })))
    }

    function iD(DD, CD) {
      const cD = Math.max(0, (CD - (DD.right - DD.left)) / 2),
        ID = Math.max(0, (CD - (DD.bottom - DD.top)) / 2);
      return {
        left: DD.left - cD,
        top: DD.top - ID,
        right: DD.right + cD,
        bottom: DD.bottom + ID
      }
    }

    function fD(DD, CD) {
      return CD.x >= DD.left && CD.x <= DD.right && CD.y >= DD.top && CD.y <= DD.bottom
    }

    function bD(DD, CD, cD) {
      let pD = null,
        bD = 1 / 0;
      for (const {
          id: ID,
          box: iD
        }
        of CD) {
        const CD = (iD.right - iD.left) * (iD.bottom - iD.top);
        fD(iD, DD) && CD < bD && (bD = CD, pD = ID)
      }
      if (null !== pD) return pD;
      let QD = 1 / 0;
      for (const {
          id: wD,
          box: SD
        }
        of CD) {
        if (!fD(iD(SD, cD), DD)) continue;
        const CD = ID(SD),
          bD = Math.hypot(DD.x - CD.x, DD.y - CD.y);
        bD < QD && (QD = bD, pD = wD)
      }
      return pD
    }

    function QD(DD, CD, cD) {
      return {
        left: cD.left,
        top: cD.top,
        right: DD - cD.right,
        bottom: CD - cD.bottom
      }
    }

    function wD(DD, CD, cD, ID) {
      const pD = (DD, CD, cD) => Math.max(Math.min(CD, 0), Math.min(Math.max(cD, 0), DD));
      return {
        x: pD(CD, ID.left - DD.left, ID.right - DD.right),
        y: pD(cD, ID.top - DD.top, ID.bottom - DD.bottom)
      }
    }

    function SD(DD, CD, cD, ID, pD) {
      const iD = DD.dx * ID + CD,
        fD = DD.dy * pD + cD,
        bD = DD => Math.max(-1, Math.min(1, DD));
      return {
        dx: bD(iD / ID),
        dy: bD(fD / pD)
      }
    }

    function BD(DD, CD, cD, ID) {
      return CD <= 0 || cD <= 0 ? 1 : Math.max(.05, Math.min(1, DD / CD, ID / cD))
    }

    function yD(DD, CD, cD) {
      return Math.min(DD.right, CD.right) - Math.max(DD.left, CD.left) > cD && Math.min(DD.bottom, CD.bottom) - Math.max(DD.top, CD.top) > cD
    }

    function MD(DD, CD) {
      const cD = (DD, CD, cD, ID) => CD - DD > ID - cD ? cD - DD > CD - ID ? ID - CD : cD - DD : DD < cD ? cD - DD : CD > ID ? ID - CD : 0;
      return {
        x: cD(DD.left, DD.right, CD.left, CD.right),
        y: cD(DD.top, DD.bottom, CD.top, CD.bottom)
      }
    }

    function tD(DD, CD) {
      let {
        avoid: cD = null,
        bounds: ID = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, pD = 0, iD = 1 / 0;
      return DD.forEach(((DD, fD) => {
        const bD = CD.filter((CD => yD(DD, CD, 0))).length,
          QD = null !== ID && (DD.left < ID.left || DD.top < ID.top || DD.right > ID.right || DD.bottom > ID.bottom),
          wD = bD + (cD && yD(DD, cD, 0) ? 1e3 : 0) + (QD ? 1e6 : 0);
        wD < iD && (pD = fD, iD = wD)
      })), pD
    }
    cD.d(CD, {
      B: () => BD,
      F: () => QD,
      I: () => MD,
      J: () => pD,
      c: () => ID,
      f: () => fD,
      j: () => yD,
      m: () => wD,
      q: () => iD,
      s: () => tD,
      v: () => SD,
      y: () => bD
    })
  },
  8986: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => iD,
      g: () => pD
    });
    var ID = cD(16);

    function pD(DD, CD) {
      return DD && !CD
    }

    function iD() {
      return pD(ID.d.get("isTouchScreen"), ID.d.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  8934: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => ID
    });
    const ID = new Set(["chunkBorders"])
  },
  8925: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      ALL_DEV_TOOLS: () => fD,
      coreDevTools: () => wD,
      devTools: () => QD
    });
    var ID = cD(646),
      pD = cD(1294),
      iD = cD(8934);
    const fD = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function bD() {
      const {
        noaDevTools: DD
      } = await cD.e(230).then((() => cD(40148)));
      return DD
    }
    const QD = new class {
        constructor() {
          this.loadHost = bD, this.tools = fD
        }
        setHost(DD) {
          this.tools = null === DD ? fD : DD.tools, this.loadHost = null === DD ? bD : async () => DD
        }
        supports(DD) {
          return this.tools.has(DD)
        }
        async downloadScene(DD, CD) {
          const cD = await this.loadHost();
          await cD.downloadScene(DD, CD)
        }
        async setAmbientLightIntensity(DD) {
          const CD = await this.loadHost();
          await CD.setAmbientLightIntensity(DD)
        }
      },
      wD = {
        tools: iD.d,
        downloadScene: async () => {
          throw new Error("This client can't download the scene")
        },
        setAmbientLightIntensity: async () => {
          throw new Error("This client can't set the ambient light")
        }
      };
    ID.q && QD.setHost(wD), (0, pD.s)((() => {
      QD.setHost(wD)
    }))
  },
  9080: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => fD,
      g: () => pD,
      h: () => SD
    });
    var ID = cD(1562);

    function pD(DD) {
      var CD;
      return {
        ...fD.store,
        yaw: fD.store.yaw + (null !== (CD = ID.c[DD].previewYaw) && void 0 !== CD ? CD : 0)
      }
    }
    const iD = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      fD = {
        player: iD,
        store: {
          ...iD,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function bD(DD, CD) {
      DD instanceof Promise ? DD.then(CD).catch((DD => {
        console.error("Couldn't open the preview", DD)
      })) : CD(DD)
    }
    class QD {
      constructor(DD) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, bD(DD, (DD => {
          this.closed ? DD.close() : (this.opened = DD, null !== this.size && DD.resize(this.size.width, this.size.height), null !== this.view && DD.show(this.view))
        }))
      }
      show(DD) {
        var CD;
        this.view = DD, null === (CD = this.opened) || void 0 === CD || CD.show(DD)
      }
      resize(DD, CD) {
        var cD;
        this.size = {
          width: DD,
          height: CD
        }, null === (cD = this.opened) || void 0 === cD || cD.resize(DD, CD)
      }
      close() {
        var DD;
        this.closed = !0, null === (DD = this.opened) || void 0 === DD || DD.close(), this.opened = null
      }
    }
    class wD {
      constructor(DD) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(DD).then((DD => DD.ready)), bD(DD, (DD => {
          this.closed ? DD.close() : (this.opened = DD, null !== this.size && DD.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var DD, CD;
        return null !== (DD = null === (CD = this.opened) || void 0 === CD ? void 0 : CD.isReady()) && void 0 !== DD && DD
      }
      setCosmetic(DD, CD) {
        var cD;
        null === (cD = this.opened) || void 0 === cD || cD.setCosmetic(DD, CD)
      }
      playEmote(DD) {
        var CD;
        null === (CD = this.opened) || void 0 === CD || CD.playEmote(DD)
      }
      setOrbit(DD) {
        var CD;
        null === (CD = this.opened) || void 0 === CD || CD.setOrbit(DD)
      }
      resetCamera() {
        var DD;
        null === (DD = this.opened) || void 0 === DD || DD.resetCamera()
      }
      async untilDrawn(DD) {
        var CD;
        await this.ready, await (null === (CD = this.opened) || void 0 === CD ? void 0 : CD.untilDrawn(DD))
      }
      resize(DD, CD) {
        var cD;
        this.size = {
          width: DD,
          height: CD
        }, null === (cD = this.opened) || void 0 === cD || cD.resize(DD, CD)
      }
      close() {
        var DD;
        this.closed = !0, null === (DD = this.opened) || void 0 === DD || DD.close(), this.opened = null
      }
    }
    const SD = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(DD) {
        this.host = DD
      }
      setDefaultHost(DD) {
        this.makeDefault = DD
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(DD) {
        return new QD(this.current().openMob(DD))
      }
      openPet(DD) {
        return new QD(this.current().openPet(DD))
      }
      openMobLineup(DD) {
        return new QD(this.current().openMobLineup(DD))
      }
      openCharacter(DD, CD) {
        return new wD(this.current().openCharacter(DD, CD))
      }
    }
  },
  9074: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => ID.c,
      e: () => ID.g,
      f: () => ID.h
    });
    var ID = cD(9080);
    class pD {
      constructor(DD) {
        this.load = DD, this.loaded = null, this.loading = null
      }
      run(DD) {
        return null !== this.loaded ? DD(this.loaded) : (this.loading ??= this.load().then((DD => (this.loaded = DD, DD)), (DD => {
          throw this.loading = null, DD
        })), this.loading.then(DD))
      }
    }
    class iD {
      constructor() {
        this.mobScene = new pD((() => Promise.all([cD.e(69), cD.e(226), cD.e(225), cD.e(244), cD.e(94), cD.e(245), cD.e(72), cD.e(71), cD.e(242), cD.e(70), cD.e(252), cD.e(246), cD.e(251), cD.e(249), cD.e(241), cD.e(218), cD.e(264), cD.e(222), cD.e(236), cD.e(247), cD.e(250), cD.e(74), cD.e(196), cD.e(215), cD.e(219), cD.e(93), cD.e(113), cD.e(234), cD.e(73), cD.e(112), cD.e(153)]).then((() => cD(40157))))), this.characterScene = new pD((() => Promise.all([cD.e(69), cD.e(226), cD.e(225), cD.e(244), cD.e(94), cD.e(245), cD.e(72), cD.e(71), cD.e(242), cD.e(70), cD.e(252), cD.e(246), cD.e(251), cD.e(249), cD.e(241), cD.e(218), cD.e(264), cD.e(222), cD.e(236), cD.e(247), cD.e(250), cD.e(74), cD.e(196), cD.e(215), cD.e(219), cD.e(93), cD.e(113), cD.e(234), cD.e(73), cD.e(112), cD.e(152)]).then((() => cD(40228)))))
      }
      openMob(DD) {
        return this.mobScene.run((CD => CD.openMobPreview(DD)))
      }
      openPet(DD) {
        return this.mobScene.run((CD => CD.openPetPreview(DD)))
      }
      openMobLineup(DD) {
        return this.mobScene.run((CD => CD.openMobLineupPreview(DD)))
      }
      openCharacter(DD, CD) {
        return this.characterScene.run((cD => cD.openCharacterPreview(DD, CD)))
      }
    }
    ID.h.setDefaultHost((() => new iD))
  },
  6409: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => pD,
      d: () => iD
    });
    var ID = cD(36);
    const pD = "shaderPack";
    async function iD() {
      var DD;
      let CD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (DD = await ID.f.getItem(pD, CD)) && void 0 !== DD ? DD : null
    }
  },
  8950: (DD, CD, cD) => {
    function ID(DD, CD) {
      return DD && !CD
    }
    cD.d(CD, {
      e: () => ID
    })
  },
  8983: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => iD
    });
    var ID = cD(1077);

    function pD() {
      var DD, CD;
      return null !== (DD = null === (CD = screen.orientation) || void 0 === CD ? void 0 : CD.type) && void 0 !== DD ? DD : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const iD = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && pD() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = pD(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, ID.WZ)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const DD of this.resizers) DD()
          }
        }), 1e3)
      }
      heldSizer(DD) {
        let CD = !1;
        return () => {
          if (CD && this.isHeld()) return null;
          const cD = DD();
          return CD ||= null !== cD, cD
        }
      }
      onRelease(DD) {
        return this.resizers.add(DD), () => {
          this.resizers.delete(DD)
        }
      }
    }
  },
  8583: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => bD,
      d: () => QD
    });
    var ID = cD(16),
      pD = cD(1317),
      iD = cD(90);
    const fD = {
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

    function bD() {
      return (0, iD.isMobile)() && "function" === typeof navigator.vibrate
    }
    const QD = new class {
      constructor(DD) {
        this.deps = DD, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(DD, CD) {
        var cD;
        if (!this.deps.enabled()) return;
        const ID = fD[DD],
          pD = null !== CD && void 0 !== CD ? CD : ID.pattern;
        if (null === pD) return void console.warn("No vibration pattern for", DD);
        const iD = this.deps.now();
        iD - this.lastAnyAt < 40 && ID.priority < this.playingPriority || iD - (null !== (cD = this.lastAt.get(DD)) && void 0 !== cD ? cD : -1 / 0) < ID.minGapMs || iD < this.playingUntil && ID.priority < this.playingPriority || (this.lastAt.set(DD, iD), this.lastAnyAt = iD, this.playingUntil = iD + pD.reduce(((DD, CD) => DD + CD), 0), this.playingPriority = ID.priority, this.deps.vibrate(pD))
      }
    }({
      vibrate: DD => {
        navigator.vibrate([...DD])
      },
      now: () => performance.now(),
      enabled: () => bD() && ID.d.get("isTouchScreen") && ID.d.get("clientEscMenuOptions").vibration && !(0, pD.c)()
    })
  },
  8944: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => MD,
      g: () => yD
    });
    var ID = cD(16),
      pD = cD(1664),
      iD = cD(36),
      fD = cD(1340),
      bD = cD(3474),
      QD = cD(1471),
      wD = cD(1388);
    const SD = 2592e5,
      BD = "notificationOptInLastPromptedAt";
    async function yD() {
      var DD;
      const CD = await MD();
      if (null === CD) return;
      const cD = null !== (DD = iD.h.getItem(BD)) && void 0 !== DD ? DD : 0;
      if (Date.now() - cD < SD) return;
      if ((0, wD.e)()) return;
      const ID = await fD.NotificationProvider.showPromptPopup({
        icon: "bell",
        title: "mobilePushNotifications:optInTitle",
        subtitle: pD.b.supports("notifications") ? "mobilePushNotifications:optInSubtitle" : "mobilePushNotifications:optInSubtitleBrowser",
        confirmText: "mobilePushNotifications:optInConfirm",
        cancelText: "mobilePushNotifications:optInCancel",
        padStartsOn: "cancel"
      }).getResult();
      "notificationTornDown" !== ID && (iD.h.setItem(BD, Date.now()), (0, QD.reportAnalyticsClick)({
        id: !0 === ID ? "push.allow" : "push.deny",
        value: pD.b.supports("notifications") ? "app" : "browser"
      }), !0 === ID && CD().catch((DD => {
        console.error("Failed to ask for push notifications:", DD)
      })))
    }
    async function MD() {
      return await pD.b.ready, pD.b.supports("notifications") ? ID.d.get("mobilePushNotificationsCanAsk") ? async () => {
        pD.b.request("notifications.requestPermission", {}).then((DD => {
          let {
            canAsk: CD
          } = DD;
          ID.d.set({
            mobilePushNotificationsCanAsk: CD
          })
        }), (DD => {
          console.error("The app couldn't ask for push notifications:", DD)
        }))
      }: null: await bD.c.canAsk() ? () => bD.c.requestPermission() : null
    }
  },
  8958: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => bD,
      f: () => QD
    });
    var ID = cD(16);
    const pD = 24,
      iD = "farNametags",
      fD = 1e5;

    function bD() {
      var DD;
      return null === (DD = ID.d.get("showDistantNametags")) || void 0 === DD || DD
    }

    function QD() {
      var DD;
      return null !== (DD = function() {
        const DD = new URLSearchParams(window.location.search).get(iD),
          CD = null === DD || "" === DD ? NaN : Number(DD);
        return Number.isFinite(CD) && CD >= 0 ? Math.min(CD, fD) : null
      }()) && void 0 !== DD ? DD : bD() ? 0 : pD
    }
  },
  9065: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => pD,
      g: () => fD
    });
    const ID = [{
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

    function pD(DD) {
      let CD, cD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof DD) {
        if (!Number.isFinite(DD)) return "0";
        if (Math.abs(DD) < 100) {
          const CD = DD < 0 ? "-" : "",
            cD = Math.abs(DD);
          return cD >= 10 ? `${CD}${cD.toFixed(1).replace(/\.0$/,"")}` : `${CD}${cD.toFixed(2).replace(/\.?0+$/,"")}`
        }
        CD = BigInt(Math.floor(DD))
      } else CD = DD;
      const pD = CD < 0n ? -CD : CD,
        iD = CD < 0n ? "-" : "",
        fD = pD.toString();
      if (fD.length <= cD) return `${iD}${fD}`;
      const bD = 3 * Math.floor((fD.length - 1) / 3);
      if (bD < 3) return `${iD}${fD}`;
      if (bD > 3 * ID.length) {
        const DD = fD[0],
          CD = fD.slice(1, 3).replace(/0+$/, "");
        return `${iD}${CD?`${DD}.${CD}`:DD}e${fD.length-1}`
      }
      const {
        threshold: QD,
        suffix: wD
      } = ID[ID.length - bD / 3], SD = pD / QD, BD = Number(1000n * (pD % QD) / QD), yD = Number(SD) + BD / 1e3;
      let MD;
      return MD = yD >= 100 ? Math.floor(yD).toString() : yD >= 10 ? yD.toFixed(1).replace(/\.0$/, "") : yD.toFixed(2).replace(/\.?0+$/, ""), `${iD}${MD}${wD}`
    }
    const iD = ID.map((DD => {
      let {
        threshold: CD,
        suffix: cD
      } = DD;
      return {
        threshold: Number(CD),
        suffix: cD
      }
    })).filter((DD => {
      let {
        threshold: CD
      } = DD;
      return Number.isFinite(CD)
    }));

    function fD(DD) {
      const CD = Math.abs(DD),
        cD = DD < 0 ? "-" : "";
      for (const {
          threshold: ID,
          suffix: pD
        }
        of iD)
        if (CD >= ID) {
          const DD = CD / ID;
          if (DD >= 1e3) return `${cD}${CD.toExponential(2).replace("e+","e")}`;
          let iD;
          return iD = DD >= 100 ? Math.floor(DD).toString() : DD >= 10 ? DD.toFixed(1).replace(/\.0$/, "") : DD.toFixed(2).replace(/\.?0+$/, ""), `${cD}${iD}${pD}`
        } return `${cD}${CD}`
    }
  },
  9050: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => SD,
      f: () => yD,
      i: () => BD,
      j: () => fD,
      l: () => wD,
      n: () => QD
    });
    var ID = cD(326);
    const pD = ["Wood Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table"],
      iD = {
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

    function fD(DD) {
      var CD;
      return null !== (CD = iD[DD]) && void 0 !== CD ? CD : {
        translationKey: ""
      }
    }
    const bD = {
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

    function QD(DD) {
      return pD.includes(DD)
    }

    function wD(DD) {
      var CD;
      return !0 === (null === DD || void 0 === DD || null === (CD = DD.customAttributes) || void 0 === CD ? void 0 : CD.cannotEnchant)
    }

    function SD(DD, CD) {
      const {
        max: cD
      } = bD[DD].at(-1);
      return CD <= cD
    }

    function BD(DD) {
      const CD = Math.sin(DD / 80),
        cD = DD => {
          if (DD <= 0) return 0;
          if (DD > 1) return 1;
          let CD = 0;
          const cD = [1, 7, 21, 35, 35, 21, 7, 1];
          for (let ID = 0; ID < cD.length; ID++) {
            CD += (ID % 2 === 0 ? 1 : -1) * cD[ID] * Math.pow(DD, 2 + ID) / (2 + ID)
          }
          return 72 * CD
        },
        ID = .3 - .78 * CD,
        pD = .5 - .78 * CD,
        iD = .6 - .7 * CD,
        fD = .8 - .6 * CD;
      let bD = cD(ID),
        QD = cD(pD) - bD,
        wD = cD(iD) - QD - bD,
        SD = cD(fD) - wD - QD - bD;
      ID < .041 && (QD /= 1 - bD, wD /= 1 - bD, SD /= 1 - bD, bD = 0), pD < .041 && (bD /= 1 - QD, wD /= 1 - QD, SD /= 1 - QD, QD = 0), iD < .041 && (bD /= 1 - wD, QD /= 1 - wD, SD /= 1 - wD, wD = 0), fD < .041 && (bD /= 1 - SD, QD /= 1 - SD, wD /= 1 - SD, SD = 0);
      return {
        commonProb: bD,
        uncommonProb: QD,
        rareProb: wD,
        epicProb: SD,
        legendaryProb: 1 - (SD + wD + QD + bD)
      }
    }

    function yD(DD, CD) {
      const {
        min: cD,
        max: pD
      } = bD[DD][CD], iD = ID.e.sampleUniformIntDistribution(cD, pD, "includeMax");
      return {
        ...BD(iD),
        level: iD
      }
    }
  },
  8463: (DD, CD, cD) => {
    function ID(DD, CD) {
      return !DD.hidden && (CD || !DD.isRewardedAd)
    }

    function pD(DD) {
      return "object" === typeof DD ? DD.option : DD
    }

    function iD(DD, CD) {
      var cD;
      if ("dropdown" === (null === (cD = DD.userInput) || void 0 === cD ? void 0 : cD.type) && "object" === typeof DD.userInput.dropdownOptions[0]) {
        for (const cD of DD.userInput.dropdownOptions)
          if (pD(cD) === CD) return "object" === typeof cD ? cD.cost : DD.cost;
        console.error("Didn't find matching option for dropdown item. Item:", DD, "input:", CD)
      }
      return DD.cost
    }

    function fD(DD, CD, cD) {
      var ID;
      const pD = null !== (ID = cD.excludedPlayers) && void 0 !== ID ? ID : [CD];
      return DD.filter((DD => !pD.includes(DD)))
    }
    cD.d(CD, {
      c: () => iD,
      d: () => pD,
      f: () => fD,
      i: () => ID
    })
  },
  9026: () => {},
  8998: DD => {
    DD.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAaUlEQVR4AWyOQQ6AIAwECwGNr/HkYzz4Hy9+WEkq01BDDCRDy3ZbGo9rU2c/V+1Bj9JOeW7RokaTBO0zpDxJXmYJKXjdohlwOqbWi4YaJFIgcYEIaGAT+JvHCDNQ8El9ziQz/BdzE00vAAAA//+cTXaSAAAABklEQVQDAHI9N5g1NM74AAAAAElFTkSuQmCC"
  },
  9003: DD => {
    DD.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAGBJREFUGJVNjjEOxEAIA+dW22Rpk2+nSndPZFtMewU6FBdIjJHx536+ABARUl7XCbjvyV9mJqX7BtY6RkS0t9bRc0op5ZuaGTAqtPZCpfG+AqSs8FFlulh7s6j7rh9d9wclFjd0V4Z2HAAAAABJRU5ErkJggg=="
  },
  9012: DD => {
    DD.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAbUlEQVR4nESOSwqAMAxEow0pive/gIcTBBdSsZh+NG20DlnkM8MLhnXuzHSnAwBaI8LIV2RXOiIkaGfMKfXGyByZparbyQZpGNUV/KaHGrWowZKVgSx8Qr8vzdXgAkYFCIn9mZP7E8pQ1Q9fzAMAAP//PTNTFgAAAAZJREFUAwAk1D9dXrbJngAAAABJRU5ErkJggg=="
  },
  9014: DD => {
    DD.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAE1JREFUGJVNjsEOwDAIQp/GZv3/j+xx5zVbsh0wZFxEImCsc88RRwHsB5OaI8SA636hjwosNXSUWuRTphxp5iahHX+pozQs+Yt0rU1SPg0CIfgDMgomAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);