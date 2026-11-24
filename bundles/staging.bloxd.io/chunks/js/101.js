export const id = 101;
export const ids = [101];
export const modules = {
  34143: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      EverythingMenu: () => Gn
    });
    var WT = mT(63),
      zT = mT(1126),
      MT = mT.n(zT),
      gT = mT(1288),
      nT = mT(1135),
      HT = mT(2183),
      kT = mT(1569),
      jT = mT(1213),
      lT = mT(1188);

    function LT(TT) {
      let {
        items: UT,
        link: mT,
        onClick: WT,
        selectedItemId: zT,
        className: LT,
        padStartsOnTab: pT = !0
      } = TT;
      const {
        t: BT
      } = (0, gT.z)(), ZT = (0, jT.i)(), cT = [];
      for (const MT of UT) {
        var vT;
        const TT = cT[cT.length - 1];
        var fT;
        if (TT && TT.title === (null !== (vT = MT.section) && void 0 !== vT ? vT : null)) TT.items.push(MT);
        else cT.push({
          title: null !== (fT = MT.section) && void 0 !== fT ? fT : null,
          items: [MT]
        })
      }
      return (0, lT.jsxs)("div", {
        className: MT()("MenuSideBarBody", LT),
        "data-pad-tabs": "2",
        children: [cT.map(((TT, UT) => {
          var mT;
          return (0, lT.jsxs)("div", {
            className: "MenuSideBarSection",
            children: [TT.title && (0, lT.jsx)("div", {
              className: "MenuSideBarSectionTitle",
              children: BT(TT.title)
            }), TT.items.map((TT => {
              var UT;
              const mT = !!TT.iconElement || !!TT.faIcon;
              return (0, lT.jsxs)("div", {
                "data-pad-tab": !0,
                "data-pad-selected": zT === TT.id ? "true" : void 0,
                "data-pad-default-focus": pT && zT === TT.id || void 0,
                className: MT()("MenuSideBarBodyTab", {
                  ActiveMenuSideBarBodyTab: zT === TT.id
                }),
                onClick: () => {
                  WT(TT.id)
                },
                children: [mT && (0, lT.jsx)("div", {
                  className: "MenuSideBarBodyTabIcon",
                  children: null !== (UT = TT.iconElement) && void 0 !== UT ? UT : (0, lT.jsx)(nT.c, {
                    name: TT.faIcon
                  })
                }), (!ZT || !mT) && (0, lT.jsx)("div", {
                  children: BT(TT.title)
                }), TT.redDot && (0, lT.jsx)(HT.c, {
                  top: "-0.2rem",
                  right: "-1rem"
                })]
              }, TT.id)
            }))]
          }, null !== (mT = TT.title) && void 0 !== mT ? mT : UT)
        })), mT && (0, lT.jsxs)("div", {
          ...(0, kT.R)(),
          "data-pad-destructive": !0,
          className: "MenuSideBarBodyTab MenuSideBarLink",
          onClick: mT.onClick,
          children: [(0, lT.jsx)("div", {
            className: "MenuSideBarBodyTabIcon",
            children: (0, lT.jsx)(nT.c, {
              name: mT.faIcon
            })
          }), (0, lT.jsx)("div", {
            children: BT(mT.title)
          }), (0, lT.jsx)(nT.c, {
            name: "arrow-right",
            className: "MenuSideBarLinkArrow"
          })]
        })]
      })
    }
    var pT = mT(3137),
      BT = mT(1225),
      ZT = mT(2552),
      cT = mT(3239),
      vT = mT(102),
      fT = mT(2046),
      qT = mT(2376),
      iT = mT(2385),
      bT = mT(1792),
      OT = mT(1446),
      eT = mT(5090),
      YT = mT(25),
      JT = mT(34152);

    function xT(TT) {
      let {
        setApplySettingsCallback: UT
      } = TT;
      const {
        clientEscMenuOptions: mT
      } = (0, YT.h)(["clientEscMenuOptions"]), [zT, MT] = (0, WT.useState)(!1), [gT, nT] = (0, WT.useState)(!1), [HT, jT] = (0, WT.useState)(6400), [LT, pT] = (0, WT.useState)(3600), [BT, ZT] = (0, WT.useState)(!1), [cT, vT] = (0, WT.useState)(!1);

      function fT(TT) {
        const UT = "screenshot" === TT ? nT : MT;
        UT(!0);
        const mT = BT ? "normals" : cT ? "depth" : null;
        JT.devTools.downloadScene(TT, {
          width: HT,
          height: LT,
          colouring: mT
        }).catch((TT => {
          console.error("Couldn't download the scene", TT)
        })).finally((() => {
          UT(!1)
        }))
      }
      return (0, lT.jsxs)("div", {
        className: "DeveloperToolsCategory",
        children: [(0, lT.jsx)(eT.b, {
          label: "Disable Ambient Occlusion",
          checked: mT.disableAmbientOcclusion,
          onClick: TT => {
            YT.b.setClientEscMenuOptions({
              disableAmbientOcclusion: TT
            }), UT((() => eT.l))
          },
          circleInfoText: "Disables ambient occlusion which is the shadow effect that makes corners and crevices darker."
        }), JT.devTools.supports("ambientLight") && (0, lT.jsx)(eT.j, {
          name: "Ambient Lighting Intensity",
          min: 0,
          max: 1,
          step: .01,
          initValue: mT.ambientLightIntensity,
          onChange: TT => {
            JT.devTools.setAmbientLightIntensity(TT).then((() => {
              YT.b.setClientEscMenuOptions({
                ambientLightIntensity: TT
              })
            })).catch((TT => {
              console.error("Couldn't set the ambient light", TT)
            }))
          },
          circleInfoText: "Sets the intensity of the white ambient light in the scene. The default is 0.5."
        }), JT.devTools.supports("weaponRaycasts") && (0, lT.jsx)(eT.b, {
          label: "Show Weapon Raycasts",
          checked: mT.showWeaponRaycasts,
          onClick: TT => {
            YT.b.setClientEscMenuOptions({
              showWeaponRaycasts: TT
            })
          },
          circleInfoText: "Draws debug lines for the raw raycasts used by locally fired weapons."
        }), JT.devTools.supports("sceneDownload") && (0, lT.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, lT.jsxs)("div", {
            className: "SettingBox WarningBorder",
            children: [(0, lT.jsx)(eT.b, {
              label: "Apply normal-based coloring",
              checked: BT,
              onClick: TT => {
                ZT(TT), TT && vT(!1)
              },
              circleInfoText: "Colors faces based on their normal direction (red=X, green=Y, blue=Z)."
            }), (0, lT.jsx)(eT.b, {
              label: "Apply depth-based coloring",
              checked: cT,
              onClick: TT => {
                vT(TT), TT && ZT(!1)
              },
              circleInfoText: "Colors from white (near) to black (far) based on distance from camera. Only works for screenshot export."
            }), (0, lT.jsxs)("div", {
              className: "SettingBox DeveloperToolsCategoryScreenshotSettings",
              children: [(0, lT.jsx)("div", {
                className: "SettingLabel",
                children: "Screenshot size in pixels (width x height)"
              }), (0, lT.jsx)(bT.e, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (TT, UT) => {
                  const mT = parseInt(TT) || 6400;
                  jT(mT)
                },
                placeholderText: "width",
                maxLength: 10,
                defaultValue: HT.toString()
              }), (0, lT.jsx)("span", {
                children: "X"
              }), (0, lT.jsx)(bT.e, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (TT, UT) => {
                  const mT = parseInt(TT) || 3600;
                  pT(mT)
                },
                placeholderText: "height",
                maxLength: 10,
                defaultValue: LT.toString()
              })]
            }), (0, lT.jsxs)("div", {
              className: "DeveloperToolsCategoryExportButtons",
              children: [(0, lT.jsxs)(kT.e, {
                onClick: () => {
                  fT("screenshot")
                },
                disabled: gT,
                children: [gT && (0, lT.jsx)(OT.c, {}), "Download Screenshot"]
              }), (0, lT.jsxs)(kT.e, {
                onClick: () => {
                  fT("glb")
                },
                disabled: zT,
                children: [zT && (0, lT.jsx)(OT.c, {}), "Download GLB"]
              })]
            })]
          }), (0, lT.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: 'To download GLB of scene with textures you need to "Disable Block Texture Atlas" in graphic settings first (you will need to reload the page to apply the setting).'
          })]
        })]
      })
    }
    var dT = mT(133),
      wT = mT(1231),
      tT = mT(34164),
      aT = mT(3140),
      yT = mT(1633),
      XT = mT(1367),
      IT = mT(1327),
      QT = mT(3210),
      sT = mT(2151),
      FT = mT(1613),
      PT = mT(366),
      VT = mT(2391),
      uT = mT(2395),
      CT = mT(3163),
      rT = mT(2805),
      KT = mT(1758),
      ST = mT(3179),
      GT = mT(3212),
      NT = mT(218);
    var ET = mT(1926),
      hT = mT(3161);
    async function DT() {
      try {
        return function(TT) {
          const UT = new Map;
          for (const {
              store: mT,
              status: WT,
              autoRenewStatus: zT,
              managementUrl: MT
            }
            of Object.values(TT.subscriptions)) !(0, CT.g)(mT) || (0, CT.h)(WT) || "willNotRenew" === zT || UT.has(mT) || UT.set(mT, null !== MT && void 0 !== MT ? MT : CT.i[mT]);
          return Array.from(UT, (TT => {
            let [UT, mT] = TT;
            return {
              store: UT,
              managementUrl: mT
            }
          }))
        }(await (0, ET.l)((0, hT.getBillingClient)().getCustomerInfo(), 5e3, "CustomerInfo got no answer in 5 s"))
      } catch (TT) {
        return console.error("Billing: loading CustomerInfo for the player's store subscriptions failed:", TT), null
      }
    }

    function oT(TT) {
      const {
        t: UT,
        selectedLanguage: mT
      } = (0, gT.z)(), {
        userContext: zT
      } = (0, BT.d)(), {
        superRankInfo: MT
      } = zT, nT = (0, uT.usePurchasesAllowed)(), HT = TT && ((0, PT.Sc)(MT) || zT.ranksMayChange) && nT, {
        accountId: kT,
        data: jT
      } = (0, rT.h)(ST.e, HT);
      if ((0, WT.useEffect)((() => {
          if (HT) return ST.e.watchAccount(), KT.e.addRefetchListener("billing", (TT => {
            "reconnected" === TT ? ST.e.refreshAfterReconnect() : ST.e.refresh()
          }))
        }), [HT]), !HT || !(0, PT.Sc)(MT) || null === jT || kT !== zT.whamm) return null;
      const lT = function(TT, UT, mT) {
        const WT = GT.j[(0, GT.c)(GT.j, UT)],
          zT = void 0 === WT ? void 0 : (0, NT.b)(TT.entitlements, WT.entitlementId);
        return void 0 === zT || null === zT.expiresAt || (0, CT.f)(zT) <= mT ? null : zT.willRenew && null === zT.billingIssueDetectedAt ? {
          renews: !0,
          at: Math.max(zT.expiresAt, mT)
        } : {
          renews: !1,
          at: (0, CT.f)(zT)
        }
      }(jT, MT.tier, Date.now());
      if (null === lT) return null;
      const LT = lT.renews ? "store:renewsOn" : "store:endsOn",
        pT = new Date(lT.at).toLocaleDateString((0, gT.m)(mT.code, LT), {
          year: "numeric",
          month: "short",
          day: "numeric"
        }),
        ZT = (0, uT.getBillingStore)(),
        cT = null !== ZT && (0, CT.g)(ZT) ? function(TT, UT) {
          var mT;
          const WT = Object.values(TT.subscriptions).find((TT => TT.store === UT && !(0, CT.h)(TT.status)));
          return void 0 === WT ? null : null !== (mT = WT.managementUrl) && void 0 !== mT ? mT : CT.i[UT]
        }(jT, ZT) : null;
      return {
        text: UT(LT, {
          date: pT
        }),
        manageUrl: cT
      }
    }
    var AT = mT(1475),
      RT = mT(1314),
      TU = mT(4995),
      UU = mT(1593),
      mU = mT(3758),
      WU = mT(2364);

    function zU(TT) {
      let {
        showing: UT
      } = TT;
      const {
        t: mT
      } = (0, gT.z)(), {
        data: WT,
        failed: zT
      } = (0, rT.h)(mU.h, UT);
      return 0 === (null === WT || void 0 === WT ? void 0 : WT.length) || null === WT && !zT ? null : (0, lT.jsxs)("div", {
        className: "SettingBox AccountSettingsPaymentHistory",
        children: [(0, lT.jsx)("div", {
          className: "AccountSettingsLabel",
          children: mT("paymentHistory:title")
        }), null === WT && zT && (0, lT.jsx)("div", {
          className: "AccountSettingsPaymentHistoryError",
          children: mT("paymentHistory:loadFailed")
        }), null !== WT && (0, lT.jsx)("ul", {
          className: "PaymentHistoryList",
          children: WT.map((TT => (0, lT.jsxs)("li", {
            className: "PaymentHistoryEntry",
            children: [(0, lT.jsx)(WU.e, {
              entry: TT
            }), (0, lT.jsxs)("div", {
              className: "PaymentHistoryEntryText",
              children: [(0, lT.jsx)("div", {
                children: (0, WU.m)(mT, TT)
              }), (0, lT.jsxs)("div", {
                className: "PaymentHistoryEntryDate",
                children: [new Date(TT.at).toLocaleDateString(), "number" === typeof TT.orderId && ` \xb7 ${mT("paymentHistory:order",{orderId:TT.orderId})}`]
              })]
            })]
          }, (0, mU.d)(TT))))
        })]
      })
    }
    var MU = mT(3165),
      gU = mT(2398),
      nU = mT(2241);

    function HU() {
      (0, nU.b)({
        titleKey: "payments:logInToRestore"
      })
    }

    function kU(TT) {
      let {
        status: UT
      } = TT;
      switch (UT) {
        case "restored":
          return (0, ST.i)(), {
            key: "payments:purchasesRestored",
            failed: !1
          };
        case "nothingToRestore":
          return {
            key: "payments:nothingToRestore", failed: !1
          };
        case "dismissed":
          return null
      }
    }

    function jU() {
      const TT = (0, hT.usePageBillingClient)(),
        {
          userContext: UT
        } = (0, BT.d)(),
        [mT, zT] = (0, WT.useState)(!1),
        [MT, gT] = (0, WT.useState)(null);
      return {
        restoring: mT,
        notice: MT,
        restore: () => {
          UT.isLoggedIn() ? (zT(!0), gT(null), TT.restorePurchases().then(kU, (TT => TT instanceof MU.e && "loginRequired" === TT.code ? (HU(), null) : function(TT) {
            return TT instanceof MU.e && "storeBusy" === TT.code ? {
              key: "payments:storeBusy",
              failed: !0
            } : (console.error("Billing: restoring purchases failed:", TT), (0, ST.i)(), {
              key: "payments:restoreFailed",
              failed: !0
            })
          }(TT))).then(gT).finally((() => {
            zT(!1)
          }))) : HU()
        }
      }
    }

    function lU(TT) {
      let {
        restoring: UT,
        notice: mT,
        restore: zT
      } = TT;
      const {
        t: nT
      } = (0, gT.z)(), HT = (0, uT.usePurchasesAllowed)(), jT = (0, uT.getBillingStore)(), LT = (0, WT.useRef)(null);
      return (0, WT.useEffect)((() => {
        var TT;
        null === (TT = LT.current) || void 0 === TT || TT.scrollIntoView({
          block: "nearest"
        })
      }), [mT]), HT && (0, gU.e)(jT) ? (0, lT.jsxs)("div", {
        className: "AccountSettingsRestorePurchases",
        children: [(0, lT.jsx)(kT.g, {
          className: "AccountSettingsRestorePurchasesButton",
          loading: UT,
          onClick: zT,
          children: nT("payments:restorePurchases")
        }), null !== mT && (0, lT.jsx)("div", {
          ref: LT,
          className: MT()("AccountSettingsRestorePurchasesNotice SmallTextBold", {
            AccountSettingsRestorePurchasesFailed: mT.failed
          }),
          children: nT(mT.key)
        })]
      }) : null
    }
    var LU = mT(2010),
      pU = mT(1341),
      BU = mT(1457),
      ZU = mT(1302),
      cU = mT(1416),
      vU = mT(351),
      fU = mT(2623);
    const qU = {
      appStore: {
        name: "App Store",
        ...vU.Mb.appStore
      },
      googlePlay: {
        name: "Google Play",
        ...vU.Mb.googlePlay
      },
      discord: {
        name: "Discord",
        ...vU.Mb.discord
      }
    };

    function iU(TT) {
      let {
        warning: UT,
        subscriptions: mT
      } = TT;
      const {
        t: WT
      } = (0, gT.z)();
      return null !== mT && 0 === mT.length ? (0, lT.jsx)(lT.Fragment, {
        children: WT(UT)
      }) : (0, lT.jsxs)("div", {
        className: "DeleteAccountSubtitle",
        children: [WT(UT), null === mT && (0, lT.jsx)("div", {
          className: "DeleteAccountSubtitleNote",
          children: WT("auth:deleteAccountSubscriptionsLoadFailed")
        }), null !== mT && (0, lT.jsxs)(lT.Fragment, {
          children: [(0, lT.jsx)("div", {
            className: "DeleteAccountSubtitleNote",
            children: WT("auth:deleteAccountStoreSubscriptions")
          }), (0, lT.jsx)(fU.b, {
            className: "DeleteAccountSubtitleLinks",
            links: mT.map((TT => {
              let {
                store: UT,
                managementUrl: mT
              } = TT;
              return {
                ...qU[UT],
                url: mT
              }
            }))
          })]
        })]
      })
    }

    function bU(TT) {
      let {
        showing: UT
      } = TT;
      const {
        userContext: mT,
        isUserContextUpdating: zT
      } = (0, BT.d)(), {
        t: MT
      } = (0, gT.z)(), [nT, HT] = (0, WT.useState)(!1), [jT, LT] = (0, WT.useState)(null), pT = (0, WT.useRef)(UT);
      (0, WT.useEffect)((() => (pT.current = UT, () => {
        pT.current = !1
      })), [UT]);
      const ZT = zT || nT;
      return (0, lT.jsxs)("div", {
        className: "AccountSettingsDeleteAccountButtonContainer",
        children: [(0, lT.jsxs)(kT.I, {
          onClick: async function() {
            if (!nT) {
              HT(!0);
              try {
                const TT = await async function() {
                  const [TT, UT] = await Promise.all([(0, LU.e)(mT.availableUserContextTypes) ? DT() : [], eU(mT)]);
                  if (!pT.current) return pU.c.ok();
                  const WT = (0, XT.d)(mT.getPlayerName(), !vT.featureFlags.canSeeRealPlayerNames);
                  if (!0 !== await BU.NotificationProvider.showPromptPopup({
                      title: "auth:deleteAccountPopupTitleNamed",
                      textOpts: {
                        title: {
                          playerName: WT
                        }
                      },
                      subtitle: (0, lT.jsx)(iU, {
                        warning: OU(mT.isLoggedIn(), UT),
                        subscriptions: TT
                      }),
                      confirmText: "auth:deleteAccount",
                      destructive: !0,
                      typedConfirm: UT ? MT("auth:deleteAccountTypedConfirm", {
                        playerName: WT
                      }) : void 0,
                      confirmTooltip: "auth:deleteAccountPopupConfirmTooltip",
                      cancelText: "general:cancel",
                      cancelTooltip: "auth:deleteAccountPopupCancelTooltip"
                    }).getResult()) return pU.c.ok();
                  const zT = await (0, wT.postJsonWithMetricsCookiesAndJsonResponse)(`${ZU.clientSideServerUrls.indexUrl}/index/metrics/revoke-cookies`, {
                    gameState: YT.b.get("gameState")
                  }, {
                    retries: 3
                  }, mT.getMetricsCookies());
                  if (zT.error) return pU.c.error(zT.error);
                  (0, dT.isDiscordClient)() && (await cU.n.discordActivity()).exit("User deleted their account");
                  return (0, wT.forgetStoredGuestAccount)(mT.whamm), (0, wT.forceGlobalSignOut)(!0), pU.c.ok()
                }(), UT = TT.isError() ? TT.asError().message : null;
                LT(UT)
              } catch (TT) {
                console.error("Failed to delete account:", TT), LT(MT("auth:genericDeleteAccountError"))
              }
              HT(!1)
            }
          },
          className: "AccountSettingsDeleteAccountButton",
          disabled: ZT,
          children: [ZT && (0, lT.jsx)("div", {
            className: "DeletingAccountLoader",
            children: (0, lT.jsx)(OT.c, {})
          }), MT("auth:deleteAccount")]
        }), jT && (0, lT.jsx)("div", {
          className: "DeleteAccountError",
          children: jT
        })]
      })
    }

    function OU(TT, UT) {
      return (0, dT.isDiscordClient)() ? "auth:discordActivityDeleteAccountLossWarning" : TT ? "auth:deleteAccountLossWarning" : UT ? "auth:deleteGuestAccountLossWarning" : "auth:deleteGuestAccountWarning"
    }
    async function eU(TT) {
      try {
        const {
          accountCreatedAt: UT
        } = await (0, ET.l)(FT.b.getPlayerProfile(TT, {
          lowerCaseName: TT.getPlayerName().toLowerCase()
        }), 5e3, "The player's profile got no answer in 5 s");
        return null !== UT && Date.now() - UT >= 7 * PT.k
      } catch (UT) {
        return console.error("Delete Account: loading the account's age failed, so the prompt asks for its name:", UT), !0
      }
    }
    var YU = mT(3689),
      JU = mT(3704),
      xU = mT(3701);

    function dU(TT) {
      let {
        showing: UT
      } = TT;
      const {
        t: mT
      } = (0, gT.z)(), {
        data: WT,
        failed: zT
      } = (0, rT.h)(YU.c, UT), MT = null === WT ? null : (0, YU.f)(WT);
      return (0, lT.jsxs)("div", {
        className: "SettingBox BlockedAndIgnoredPlayers",
        children: [(0, lT.jsx)("div", {
          className: "AccountSettingsLabel",
          children: mT("settingsMenu:blockedAndIgnoredPlayers")
        }), null === MT && !zT && (0, lT.jsx)(OT.c, {}), null === MT && zT && (0, lT.jsxs)("div", {
          className: "BlockedAndIgnoredPlayersError",
          children: [mT("settingsMenu:blockedAndIgnoredPlayersLoadFailed"), (0, lT.jsx)(kT.e, {
            className: "SmallTextLight",
            onClick: () => {
              YU.c.refresh()
            },
            children: mT("general:tryAgain")
          })]
        }), 0 === (null === MT || void 0 === MT ? void 0 : MT.length) && (0, lT.jsx)("div", {
          className: "BlockedAndIgnoredPlayersEmpty",
          children: mT("settingsMenu:noBlockedOrIgnoredPlayers")
        }), null !== MT && MT.length > 0 && (0, lT.jsx)("ul", {
          className: "BlockedAndIgnoredPlayersList",
          children: MT.map((TT => {
            let {
              name: UT,
              exclusion: WT
            } = TT;
            const zT = xU.f[WT];
            return (0, lT.jsxs)("li", {
              className: "BlockedAndIgnoredPlayer",
              children: [(0, lT.jsx)("div", {
                className: "BlockedAndIgnoredPlayerName",
                children: UT
              }), (0, lT.jsx)(kT.g, {
                className: "SmallTextLight",
                onClick: () => {
                  (0, JU.h)(zT, UT, {
                    chatMessage: null
                  })
                },
                children: mT(xU.h[zT].text)
              })]
            }, UT)
          }))
        })]
      })
    }
    const wU = (0, WT.memo)((function(TT) {
      var UT, mT;
      let {
        showing: zT,
        inGame: HT
      } = TT;
      const {
        t: jT,
        selectedLanguage: LT
      } = (0, gT.z)(), {
        hideSocialLocationFrom: ZT
      } = (0, YT.h)(["hideSocialLocationFrom"]), cT = (0, uT.usePurchasesAllowed)(), fT = jU(), qT = (0, pT.d)(), {
        userContext: iT,
        isUserContextUpdating: JT
      } = (0, BT.d)(), [xT, CT] = (0, WT.useState)(null !== (UT = iT.getPlayerName()) && void 0 !== UT ? UT : ""), [rT, KT] = (0, WT.useState)(null), {
        purchasing: ST,
        outcome: GT,
        purchase: NT
      } = (0, aT.e)("/super-rank-welcome"), ET = (0, PT.uc)((0, gT.m)(LT.code, "general:timeLeft"), iT.superRankInfo), hT = null === (mT = oT(zT)) || void 0 === mT ? void 0 : mT.text, DT = ET ? jT("general:timeLeft", {
        time: ET
      }) : hT, [mU, WU] = (0, WT.useState)(!1), [MU, gU] = (0, WT.useState)(!1), nU = (0, WT.useRef)(null), HU = (0, WT.useRef)(null), kU = (0, sT.g)({
        showProgressUpdateMessage: !0,
        enabled: !0
      }), LU = null === kU, pU = null !== kU && void 0 !== kU ? kU : [], BU = iT !== wT.NULL_USER_CONTEXT && !iT.isLoggedIn(), ZU = BU && 0 !== (null === kU || void 0 === kU ? void 0 : kU.length), [cU, vU] = (0, WT.useState)([]), [fU, qU] = (0, WT.useState)(!1), iU = iT.playerHasRank("youtuber"), OU = (0, WT.useCallback)((() => FT.b.getPlayerProfile(iT, {
        lowerCaseName: iT.getPlayerName().toLowerCase()
      }).then((TT => {
        vU(TT.socialLinks)
      })).catch((TT => {
        console.error("Failed to refresh social links", TT)
      }))), [iT]);

      function eU(TT) {
        TT !== xT && ((0, XT.l)(TT) ? (TT = (0, XT.n)(TT), KT(jT("homePage:nameCharacters"))) : KT(null), nU.current && (nU.current.value = TT), CT(TT))
      }
      return (0, WT.useEffect)((() => (!0 === zT ? (clearInterval(HU.current), HU.current = setInterval(qT, 1e3)) : clearInterval(HU.current), () => {
        clearInterval(HU.current)
      })), [zT, qT]), (0, WT.useEffect)((() => {
        var TT;
        CT(null !== (TT = iT.getPlayerName()) && void 0 !== TT ? TT : "")
      }), [iT]), (0, WT.useEffect)((() => {
        if (!zT || !iU || JT) return;
        let TT = !1;
        return qU(!0), vU([]), FT.b.getPlayerProfile(iT, {
          lowerCaseName: iT.getPlayerName().toLowerCase()
        }).then((UT => {
          TT || vU(UT.socialLinks)
        })).catch((TT => {
          console.error("Failed to load social links", TT)
        })).finally((() => {
          TT || qU(!1)
        })), () => {
          TT = !0
        }
      }), [zT, iU, JT, iT]), (0, lT.jsxs)("div", {
        className: MT()("SettingsMenuRightInner AccountSettings", {
          AccountSettingsLocked: HT
        }),
        children: [HT && (0, lT.jsx)("div", {
          className: "AccountSettingsInGameWarning",
          children: jT("settingsMenu:accountSettingsInGameWarning")
        }), (0, lT.jsxs)("div", {
          className: "SettingBox SetAccountNameDiv SmallTextLight",
          children: [(0, lT.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsNameLabel",
            children: [jT("homePage:discordNamePopupTitle"), (0, lT.jsxs)(yT.LinkPreserveSearch, {
              className: "AccountSettingsViewProfile",
              to: (0, IT.m)({
                name: iT.getPlayerName()
              }),
              onClick: () => {
                YT.b.set({
                  openEverythingMenuName: null
                })
              },
              children: [(0, lT.jsx)(nT.c, {
                name: "arrow-up-right-from-square"
              }), " ", jT("profileCard:viewProfile")]
            })]
          }), (0, lT.jsxs)("div", {
            className: "EnterAccNameDivWrapper",
            "data-pad-initial-area": !0,
            children: [(0, lT.jsxs)("div", {
              className: "EnterAccNameInputRow",
              children: [vT.featureFlags.canChangeName && (0, lT.jsx)(bT.e, {
                className: "EnterName",
                placeholderText: jT("homePage:enterName"),
                maxLength: XT.h,
                defaultValue: xT,
                onValueChange: TT => {
                  eU(TT)
                },
                forcedText: mU || !vT.featureFlags.canChangeName ? xT : null,
                blurOnEnter: !0,
                domRef: nU
              }), (0, lT.jsx)(kT.e, {
                className: "ChooseRandomNameButton",
                onClick: () => {
                  eU((0, XT.f)())
                },
                children: (0, lT.jsx)(nT.c, {
                  name: "dice",
                  className: "ChooseRandomNameIcon"
                })
              }), !vT.featureFlags.canChangeName && (0, lT.jsx)("div", {
                className: "EnterName NoInput",
                children: (0, XT.d)(xT, !vT.featureFlags.canSeeRealPlayerNames)
              })]
            }), (0, lT.jsx)(kT.e, {
              className: "ChooseNameButton",
              disabled: mU || xT === iT.getPlayerName(),
              onClick: () => {
                xT.length < XT.i ? KT(jT("homePage:changeNameMinLengthError", {
                  length: XT.i
                })) : xT.length > XT.h ? KT(jT("homePage:changeNameMaxLengthError", {
                  length: XT.h
                })) : (WU(!0), KT(null), (0, tT.k)(iT, xT).then((TT => {
                  WU(!1), "taken" === TT.outcome ? KT(jT("homePage:nameTaken")) : "refused" === TT.outcome ? KT(TT.message) : "failed" === TT.outcome && KT(jT((0, tT.g)(TT.failure)))
                })))
              },
              children: jT("general:choose")
            })]
          }), rT && (0, lT.jsx)("div", {
            className: "ChooseAccNameError",
            children: rT
          })]
        }), (0, lT.jsx)(eT.b, {
          label: (() => {
            if ((0, RT.o)(ZT)) {
              const TT = (0, gT.m)(LT.code, "general:timeLeft"),
                UT = (0, PT.nb)(TT, Date.now(), ZT + RT.k);
              return `${jT("settingsMenu:hideSocialLocation")} (${jT("general:timeLeft",{time:UT})})`
            }
            return jT("settingsMenu:hideSocialLocation")
          })(),
          onClick: () => {
            const TT = !(0, RT.o)(ZT);
            (0, UU.reportAnalyticsClick)({
              id: "social.hide_location",
              value: TT ? "on" : "off"
            }), gU(!0), FT.b.setHideSocialLocation(iT, TT).then((() => {
              YT.b.set({
                hideSocialLocationFrom: TT ? Date.now() : null
              })
            })).finally((() => {
              gU(!1)
            }))
          },
          checked: (0, RT.o)(ZT),
          disabled: MU
        }), iU && (0, lT.jsxs)("div", {
          className: "SettingBox AccountSettingsSocialLinks",
          children: [(0, lT.jsx)("div", {
            className: "AccountSettingsLabel",
            children: jT("settingsMenu:socialLinks")
          }), fU && (0, lT.jsx)(OT.c, {}), !fU && (0, lT.jsx)(TU.d, {
            socialLinks: cU,
            editable: !0,
            userContext: iT,
            onLinksUpdated: OU
          })]
        }), (0, lT.jsxs)("div", {
          className: "SettingBox",
          children: [(0, lT.jsx)("div", {
            className: "AccountSettingsLabel",
            children: jT(ZU ? "auth:loginOrSwitchAccount" : "auth:login")
          }), LU && (0, lT.jsx)(OT.c, {}), !LU && 0 === pU.length && (0, lT.jsx)("div", {
            className: "NoLoginOptions",
            children: jT("auth:noLoginOptions")
          }), !LU && pU.length > 0 && "crazygames" !== dT.siteUsed && (0, lT.jsx)("div", {
            className: "AccountSettingsLoginButtons",
            children: pU
          }), !LU && pU.length > 0 && "crazygames" === dT.siteUsed && (0, lT.jsxs)("div", {
            className: "AccountSettingsLoginButtons",
            children: [pU[0], pU.length > 1 && (0, lT.jsxs)(lT.Fragment, {
              children: [(0, lT.jsxs)("div", {
                className: "LegacyLoginOptionsHeader",
                children: [(0, lT.jsx)("span", {
                  className: "LegacyLoginOptionsTitle",
                  children: jT("auth:legacyLoginOptions")
                }), (0, lT.jsx)(AT.c, {
                  className: "LegacyLoginOptionsInfoIcon",
                  hoverInfo: jT("auth:legacyLoginOptionsInfo")
                })]
              }), (0, lT.jsx)("div", {
                className: "LegacyAccountSettingsLoginButtons",
                children: pU.slice(1)
              })]
            })]
          }), vT.featureFlags.useLogin && (null !== iT.loggedInInfo || iT.isLoggedIn()) && (0, lT.jsxs)(lT.Fragment, {
            children: [(0, lT.jsx)("div", {
              className: "AccountSettingsLoginDivider"
            }), (0, lT.jsxs)(kT.I, {
              onClick: () => {
                (0, wT.forceGlobalSignOut)()
              },
              className: "AccountSettingsSignedInButton",
              children: [(0, lT.jsx)(nT.c, {
                name: "right-from-bracket"
              }), jT("auth:signOut")]
            })]
          })]
        }), !iT.playerHasRank("super") && cT && (0, lT.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, lT.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, lT.jsx)(nT.c, {
              name: "bolt"
            }), jT("homePage:superRank")]
          }), (0, lT.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [(0, lT.jsxs)(kT.l, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, VT.p)({
                  mode: "self",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, lT.jsx)(nT.c, {
                name: "bolt"
              }), jT("homePage:getSuperRank")]
            }), (0, lT.jsxs)(kT.l, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, VT.p)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, lT.jsx)(nT.c, {
                name: "bolt"
              }), jT("homePage:giftSuperRank")]
            })]
          }), (0, lT.jsx)(lU, {
            ...fT
          })]
        }), iT.playerHasRank("super") && (0, lT.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, lT.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, lT.jsx)(nT.c, {
              name: "bolt"
            }), jT("homePage:superRank"), DT && (0, lT.jsxs)("div", {
              className: "AccountSettingsSuperRankTimeLeft",
              children: ["(", DT, ")"]
            })]
          }), cT && (0, lT.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [!(0, PT.Sc)(iT.superRankInfo) && (0, lT.jsxs)(kT.l, {
              className: "AccountSettingsSuperRankProlong",
              loading: ST,
              onClick: () => {
                NT(QT.m.id, null)
              },
              children: [(0, lT.jsx)(nT.c, {
                name: "bolt"
              }), jT("settingsMenu:getSuperRankAdditionalDaysPremiumCurrency", {
                days: QT.m.product.days,
                price: QT.m.price
              })]
            }), (0, lT.jsxs)(kT.l, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, VT.p)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, lT.jsx)(nT.c, {
                name: "bolt"
              }), jT("homePage:giftSuperRank")]
            })]
          }), GT && (0, lT.jsx)("div", {
            className: "AccountSettingsSuperRankProlongError SmallTextBold",
            children: jT(GT.translationKey)
          }), (0, lT.jsx)(lU, {
            ...fT
          })]
        }), (0, lT.jsx)(zU, {
          showing: zT
        }), vT.featureFlags.useSocialFeatures && (0, lT.jsx)(dU, {
          showing: zT
        }), (0, lT.jsxs)("div", {
          className: "SettingBoxGroup AccountSettingsDeleteAccountGroup",
          children: [(0, lT.jsxs)("div", {
            className: "SettingBox AccountSettingsDeleteAccount SettingBoxWarning",
            children: [(0, lT.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: jT(tU(BU, ZU))
            }), (0, dT.isDiscordClient)() && (0, lT.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: jT("auth:discordActivityKickWarning")
            }), (0, lT.jsx)(bU, {
              showing: zT
            })]
          }), (0, lT.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: jT(BU ? "auth:deleteGuestAccountWarning" : "auth:deleteAccountLossWarning")
          })]
        })]
      })
    }));

    function tU(TT, UT) {
      return TT ? UT ? "auth:deleteGuestAccountButtonTitle" : "auth:deleteGuestAccountWarning" : "auth:deleteAccountButtonTitle"
    }
    var aU = mT(34167),
      yU = mT(3267),
      XU = mT(1345),
      IU = mT(1554),
      QU = mT(2089),
      sU = mT(8989),
      FU = mT(34169);

    function PU() {
      const {
        t: TT
      } = (0, gT.z)();
      return (0, QU.i)("localPlayerAlive") ? (0, lT.jsx)(sU.e, {
        icon: "camera-alt",
        title: TT("screenshotMode:title"),
        sub: TT("screenshotMode:entrySub"),
        onClick: FU.c
      }) : null
    }
    var VU = mT(34185);
    const uU = (0, WT.memo)((function(TT) {
        let {
          inGame: UT
        } = TT;
        const {
          t: mT,
          selectedLanguage: WT
        } = (0, gT.z)(), {
          clientEscMenuOptions: zT,
          showDebugOverlay: MT,
          isTouchScreen: nT
        } = (0, YT.h)(["clientEscMenuOptions", "showDebugOverlay", "isTouchScreen"]), HT = (0, ZT.f)("hideCoordinates");
        let kT = "settingsMenu:showCoordinates",
          jT = "settingsMenu:showChunkCoordinates";

        function LT(TT) {
          const UT = new Intl.DisplayNames([TT], {
            type: "language"
          }).of(TT);
          return UT.charAt(0).toUpperCase() + UT.slice(1)
        }
        return HT && (kT = "settingsMenu:showCoordinatesHidden", jT = "settingsMenu:showChunkCoordinatesHidden"), (0, lT.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [UT && vT.featureFlags.canUseInviteLinks && (0, lT.jsxs)("div", {
            className: "SettingBox",
            children: [(0, lT.jsx)("div", {
              className: "SettingsMenuInviteHeader",
              children: mT("settingsMenu:inviteLink")
            }), (0, lT.jsx)(aU.f, {})]
          }), (0, lT.jsxs)("div", {
            className: "SettingBox",
            children: [(0, lT.jsx)("div", {
              className: "SliderText",
              style: {
                marginBottom: "10px"
              },
              children: mT("settingsMenu:language")
            }), (0, lT.jsx)(yU.d, {
              options: Object.entries(gT.i).map((TT => {
                let [UT, mT] = TT;
                return {
                  label: (0, lT.jsxs)("div", {
                    className: "SettingsMenuLanguageOption",
                    children: [(0, lT.jsx)("img", {
                      src: mT.flagImg,
                      alt: "flag"
                    }), (0, lT.jsxs)("span", {
                      children: [LT(UT), " ", (0, lT.jsxs)("span", {
                        className: "SettingsMenuLanguageOptionCode",
                        children: ["(", UT, ")"]
                      })]
                    })]
                  }),
                  value: UT
                }
              })),
              value: WT.code,
              onChange: TT => {
                XU.f.get().setCurrentLanguage(TT.value)
              }
            })]
          }), UT && nT && (0, VU.c)() && (0, lT.jsx)(PU, {}), !(0, vT.isMobileApp)() && (0, IU.i)() && vT.featureFlags.useForceRotateForceFullscreenOverlay && (0, lT.jsx)(eT.b, {
            label: mT("settingsMenu:disableFullscreenMode"),
            checked: zT.disableFullscreen,
            onClick: TT => {
              YT.b.setClientEscMenuOptions({
                disableFullscreen: TT
              })
            }
          }), (0, lT.jsx)(eT.b, {
            label: mT(kT),
            checked: zT.showCoordinates,
            onClick: TT => {
              YT.b.setClientEscMenuOptions({
                showCoordinates: TT
              })
            },
            disabled: HT
          }), (0, lT.jsx)(eT.b, {
            label: mT(jT),
            checked: zT.showChunkCoordinates,
            onClick: TT => {
              YT.b.setClientEscMenuOptions({
                showChunkCoordinates: TT
              })
            },
            disabled: HT
          }), (0, lT.jsx)(eT.b, {
            label: mT("settingsMenu:showFps"),
            checked: zT.showFPS,
            onClick: TT => {
              YT.b.setClientEscMenuOptions({
                showFPS: TT
              })
            }
          }), (0, lT.jsx)(eT.b, {
            label: mT("settingsMenu:disableBunnyHopping"),
            checked: zT.disableBunnyHopping,
            onClick: TT => {
              YT.b.setClientEscMenuOptions({
                disableBunnyHopping: TT
              })
            }
          }), (0, cU.y)() && (0, lT.jsx)(eT.b, {
            label: mT("settingsMenu:showChat"),
            checked: zT.showChat,
            onClick: TT => {
              YT.b.setClientEscMenuOptions({
                showChat: TT
              })
            }
          }), (0, lT.jsx)(eT.b, {
            label: mT("settingsMenu:showDebugOverlay"),
            checked: MT,
            onClick: TT => {
              YT.b.set({
                showDebugOverlay: TT
              })
            }
          }), vT.featureFlags.useSocialFeatures && (0, lT.jsx)(eT.b, {
            label: mT("settingsMenu:showFriendOnlineToasts"),
            checked: zT.showFriendOnlineToasts,
            onClick: TT => {
              YT.b.setClientEscMenuOptions({
                showFriendOnlineToasts: TT
              })
            }
          }), (0, lT.jsx)(eT.b, {
            label: mT("settingsMenu:showNewItemIndicator"),
            checked: zT.showNewItemIndicator,
            onClick: TT => {
              YT.b.setClientEscMenuOptions({
                showNewItemIndicator: TT
              })
            }
          })]
        })
      })),
      CU = (0, WT.memo)((function() {
        const {
          t: TT
        } = (0, gT.z)(), {
          soundVolume: UT,
          musicVolume: mT
        } = (0, YT.h)(["soundVolume", "musicVolume"]);
        return (0, lT.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, lT.jsx)(eT.j, {
            name: TT("settingsMenu:musicVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: mT,
            onChange: TT => {
              YT.b.set({
                musicVolume: Math.round(100 * TT) / 100
              })
            },
            format: TT => TT.toFixed(2)
          }), (0, lT.jsx)(eT.j, {
            name: TT("settingsMenu:soundEffectsVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: UT,
            onChange: TT => {
              YT.b.set({
                soundVolume: Math.round(100 * TT) / 100
              })
            },
            format: TT => TT.toFixed(2)
          })]
        })
      }));
    var rU = mT(744),
      KU = mT(1567),
      SU = mT(3768),
      GU = mT(34191),
      NU = mT(3582);
    const EU = {
      app: "notificationSettings:pushTargetsApp",
      browser: "notificationSettings:pushTargetsBrowser",
      msnPlay: "notificationSettings:pushTargetsMsnPlay"
    };

    function hU() {
      const {
        t: TT
      } = (0, gT.z)(), UT = (0, NU.c)(), {
        mobilePushNotificationsCanAsk: mT
      } = (0, YT.h)(["mobilePushNotificationsCanAsk"]), [zT, MT] = (0, WT.useState)(null), [nT, HT] = (0, WT.useState)(!1), [jT, LT] = (0, WT.useState)(null), [pT, BT] = (0, WT.useState)(!1), ZT = (0, WT.useCallback)((() => {
        (0, SU.b)().then((TT => {
          UT.current && (MT(TT), HT(!1))
        })).catch((TT => {
          console.error("Failed to load push notification targets:", TT), UT.current && HT(!0)
        }))
      }), [UT]), cT = (0, WT.useCallback)((() => {
        (0, GU.g)().then((TT => {
          UT.current && LT((() => TT))
        }))
      }), [UT]);
      (0, WT.useEffect)((() => {
        ZT()
      }), [ZT]), (0, WT.useEffect)((() => {
        cT()
      }), [cT, mT]), (0, KU.g)(SU.i, ZT);
      const vT = null === zT ? [] : Object.keys(EU).filter((TT => zT[TT] > 0));
      return (0, lT.jsxs)("div", {
        className: "SettingBox PushNotificationSettings",
        children: [(0, lT.jsx)("div", {
          className: "SliderText",
          children: TT("notificationSettings:pushNotifications")
        }), null === zT && nT && (0, lT.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: TT("notificationSettings:pushTargetsLoadFailed")
        }), null !== zT && 0 === vT.length && (0, lT.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: TT("notificationSettings:pushTargetsNone")
        }), vT.length > 0 && (0, lT.jsx)("ul", {
          className: "PushNotificationSettingsTargets",
          children: vT.map((UT => {
            var mT;
            return (0, lT.jsx)("li", {
              children: TT(EU[UT], {
                count: null !== (mT = null === zT || void 0 === zT ? void 0 : zT[UT]) && void 0 !== mT ? mT : 0
              })
            }, UT)
          }))
        }), null !== jT && (0, lT.jsx)(kT.e, {
          className: "PushNotificationSettingsButton",
          loading: pT,
          onClick: () => {
            BT(!0), jT().catch((TT => {
              console.error("Failed to turn on push notifications:", TT)
            })).finally((() => {
              UT.current && (BT(!1), cT())
            }))
          },
          children: TT("notificationSettings:pushTurnOn")
        })]
      })
    }
    var DU = mT(2673);
    const oU = {
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
      AU = {
        remindersOn: {
          label: "dailyDrop:settingReminders",
          reportAs: "reminders"
        },
        hidden: {
          label: "dailyDrop:settingHide",
          reportAs: "hidden"
        }
      };

    function RU(TT) {
      let {
        setting: UT,
        value: mT
      } = TT;
      const {
        t: zT
      } = (0, gT.z)(), nT = (0, NU.c)(), [HT, kT] = (0, WT.useState)(null), [jT, LT] = (0, WT.useState)(!1), [pT, BT] = (0, WT.useState)(null);
      return (0, WT.useEffect)((() => {
        "remindersOn" === UT && (0, GU.g)().then((TT => {
          nT.current && BT((() => TT))
        }), (TT => {
          console.error("Couldn't tell whether this device can take push notifications:", TT)
        }))
      }), [UT, nT]), (0, lT.jsx)(eT.b, {
        className: MT()({
          DailyDropSettingFailed: jT
        }),
        label: zT(AU[UT].label),
        checked: null !== HT && void 0 !== HT ? HT : mT,
        note: jT ? zT("dailyDrop:settingFailed") : void 0,
        onClick: TT => {
          null === HT && (kT(TT), LT(!1), TT && null !== pT && pT().catch((TT => {
            console.error("Failed to ask for push notifications for Lucky Skin Block reminders:", TT)
          })), (0, DU.s)("daily_drop.setting", `${AU[UT].reportAs}_${TT?"on":"off"}`), (0, DU.u)("hidden" === UT ? {
            hidden: TT
          } : {
            remindersOn: TT
          }).catch((TT => {
            console.error(`Failed to save the Lucky Skin Block's ${UT} setting:`, TT), nT.current && LT(!0)
          })).finally((() => {
            nT.current && kT(null)
          })))
        }
      })
    }
    const Tm = (0, WT.memo)((function() {
      const {
        t: TT
      } = (0, gT.z)(), {
        clientEscMenuOptions: UT
      } = (0, YT.h)(["clientEscMenuOptions"]), {
        userContext: mT
      } = (0, BT.d)(), WT = mT.dailyDrop;
      return (0, lT.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [vT.featureFlags.useSocialFeatures && (0, lT.jsx)(eT.f, {
          label: TT("notificationSettings:friendRequests"),
          options: rU.d.map((UT => ({
            value: UT,
            label: TT(oU[UT].label)
          }))),
          value: UT.friendRequestNotifications,
          onChange: TT => {
            YT.b.setClientEscMenuOptions({
              friendRequestNotifications: TT
            })
          },
          circleInfoText: (0, lT.jsx)("div", {
            className: "NotificationSettingLevelsInfo",
            children: rU.d.map((UT => (0, lT.jsxs)("div", {
              children: [(0, lT.jsx)("b", {
                children: TT(oU[UT].label)
              }), ": ", TT(oU[UT].info)]
            }, UT)))
          })
        }), null !== WT && (0, lT.jsxs)(lT.Fragment, {
          children: [(0, lT.jsx)(RU, {
            setting: "remindersOn",
            value: WT.remindersOn
          }), (0, lT.jsx)(RU, {
            setting: "hidden",
            value: WT.hidden
          })]
        }), (0, lT.jsx)(hU, {})]
      })
    }));
    var Um = mT(4610),
      mm = mT(208),
      Wm = mT(340),
      zm = mT(6723),
      Mm = mT(3551),
      gm = mT(34198),
      nm = mT(653),
      Hm = mT(31);
    var km = mT(681),
      jm = mT(44),
      lm = mT(4477);
    const Lm = new Map([
      ["chunkHorizAddDist", "horizontal"],
      ["chunkVertAddDist", "vertical"]
    ]);

    function pm(TT) {
      return Lm.has(TT) ? fT.gameBridge.lookup("mY", null) : null
    }

    function Bm(TT) {
      if (!(0, nm.E)(YT.b.get("clientEscMenuOptions")[TT])) return YT.b.get("clientEscMenuOptions")[TT];
      const UT = pm(TT);
      return null !== UT ? UT[Lm.get(TT)] : jm.l.getItem(TT)
    }

    function Zm(TT, UT) {
      if ("useTouchControls" === TT) return void(0, lm.d)(UT);
      TT in YT.b.get("clientEscMenuOptions") && YT.b.setClientEscMenuOptions({
        [TT]: UT
      });
      const mT = pm(TT);
      null !== mT && fT.gameBridge.send("setChunkAddDistance", {
        ...mT,
        [Lm.get(TT)]: UT
      }), jm.l.setItem(TT, UT)
    }
    var cm = mT(4539),
      fm = mT(34204),
      qm = mT(34206),
      im = mT(4608),
      bm = mT(34219);

    function Om(TT) {
      var UT, zT, nT, HT;
      let {
        minChunkAddDist: kT,
        getValue: jT,
        onChange: LT,
        setApplySettingsCallback: pT
      } = TT;
      const {
        t: BT
      } = (0, gT.z)(), {
        clientEscMenuOptions: cT
      } = (0, YT.h)(["clientEscMenuOptions", "showDistantNametags"]), fT = (0, WT.useRef)(jT("showFog")), qT = (0, WT.useRef)(cT.antiAliasing), iT = (0, WT.useRef)(cT.useWebGpu), [bT, OT] = (0, WT.useState)(null), [xT, dT] = (0, WT.useState)(!1), [wT, tT] = (0, WT.useState)((() => (0, Mm.i)(vT.featureFlags.settings.canUseShaderPacks))), [aT] = (0, WT.useState)((() => YT.b.isWebGpuDefaultOff())), [yT] = (0, WT.useState)(Wm.h), [XT] = (0, WT.useState)((() => !0 === jm.l.getItem(vU.ac))), [IT] = (0, WT.useState)((() => YT.b.isWebGpuOnStored()));
      (0, WT.useEffect)((() => {
        let TT = !1;
        return (0, vT.hasUsableWebGpuAdapter)().then((async UT => {
          const mT = XT || IT,
            WT = !UT && km.B && await (0, bm.e)(mT);
          TT || (OT(UT || WT), dT(WT))
        })), (0, Mm.q)(vT.featureFlags.settings.canUseShaderPacks) && (0, zm.h)().then((async UT => {
          const WT = null !== UT && await async function(TT) {
            const [{
              isShaderPackActive: UT
            }, {
              loadPageShaderPackCompiler: WT
            }] = await Promise.all([mT.e(139).then((() => mT(6719))), Promise.all([mT.e(78), mT.e(136), mT.e(138)]).then((() => mT(6682)))]);
            return UT(TT, await WT())
          }(UT);
          TT || tT(WT)
        })), () => {
          TT = !0
        }
      }), [XT, IT]);
      const QT = (!(wT && !XT) || !xT) && bT,
        sT = function(TT, UT, mT, WT, zT) {
          return (0, gm.c)(mT, WT) && !0 === UT ? {
            translationKey: "settingsMenu:newWebGpuForcedOnByShaderPack",
            checked: !0,
            disabled: !0
          } : {
            translationKey: !1 !== UT ? "settingsMenu:newWebGpu" : zT ? "settingsMenu:newWebGpuDisabledUntilRestart" : "settingsMenu:newWebGpuUnsupported",
            checked: TT && !1 !== UT,
            disabled: !0 !== UT
          }
        }(cT.useWebGpu, QT, wT, aT, yT),
        FT = (cT.useWebGpu || (0, gm.c)(wT, aT)) && wT && !0 === QT,
        PT = (0, ZT.f)("lightingOverride"),
        VT = !(0, nm.E)(PT);
      let uT = "settingsMenu:enableLighting";
      VT && (uT = PT ? "settingsMenu:enableLightingForcedOn" : "settingsMenu:enableLightingForcedOff");
      const CT = TT => {
          var UT, mT, WT;
          const zT = null !== (UT = TT.showFog) && void 0 !== UT ? UT : jT("showFog"),
            MT = null !== (mT = TT.antiAliasing) && void 0 !== mT ? mT : cT.antiAliasing,
            gT = null !== (WT = TT.useWebGpu) && void 0 !== WT ? WT : cT.useWebGpu,
            nT = !km.B && zT !== fT.current || MT !== qT.current || gT !== iT.current;
          pT(nT ? () => eT.l : null)
        },
        rT = (0, ZT.f)("fogChunkDistanceOverride"),
        KT = (0, ZT.f)("fogBlockDistanceOverride"),
        ST = !(0, nm.E)(rT) || !(0, nm.E)(KT),
        GT = ST ? "settingsMenu:showFogForcedOn" : "settingsMenu:showFog",
        [NT, ET] = (0, Um.i)(kT),
        [hT, DT] = (0, im.h)(kT),
        oT = BT("settingsMenu:chunkLoadDistanceDeviceLimit"),
        AT = hT < NT,
        RT = Math.min(null !== (UT = jT("chunkHorizAddDist")) && void 0 !== UT ? UT : kT[0], hT),
        TU = !ST && function(TT, UT) {
          return !0 === TT.showFog && TT.fogChunkDistance > UT
        }(cT, RT);
      return (0, lT.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [(0, lT.jsx)(eT.j, {
          name: BT("settingsMenu:horizontalChunkLoadDistance"),
          min: kT[0],
          max: NT,
          selectableMax: hT,
          cappedNote: oT,
          step: 1,
          initValue: RT,
          onChange: TT => {
            !0 === jT("showFog") && TT < jT("fogChunkDistance") && LT("fogChunkDistance", TT), LT("chunkHorizAddDist", TT), Hm.j.EZ("updatedChunkLoadDist")
          },
          circleInfoText: BT("settingsMenu:chunkLoadDistanceInfo")
        }), (0, lT.jsx)(eT.j, {
          name: BT("settingsMenu:verticalChunkLoadDistance"),
          min: kT[1],
          max: ET,
          selectableMax: DT,
          cappedNote: AT ? void 0 : oT,
          step: 1,
          initValue: Math.min(null !== (zT = jT("chunkVertAddDist")) && void 0 !== zT ? zT : kT[1], DT),
          onChange: TT => {
            LT("chunkVertAddDist", TT), Hm.j.EZ("updatedChunkLoadDist")
          },
          circleInfoText: BT("settingsMenu:chunkLoadDistanceInfo"),
          className: "VerticalChunkLoadSlider"
        }), (0, lT.jsx)(eT.b, {
          label: BT("settingsMenu:chunkFadeIn"),
          checked: cT.chunkFadeIn,
          onClick: TT => {
            YT.b.setClientEscMenuOptions({
              chunkFadeIn: TT
            })
          },
          circleInfoText: BT("settingsMenu:chunkFadeInInfo")
        }), JT.devTools.supports("chunkBorders") && (0, lT.jsx)(eT.b, {
          label: BT("settingsMenu:showChunkBorders"),
          checked: cT.showChunkBorders,
          onClick: TT => {
            YT.b.setClientEscMenuOptions({
              showChunkBorders: TT
            })
          },
          circleInfoText: BT("settingsMenu:showChunkBordersInfo")
        }), (0, lT.jsx)(eT.b, {
          label: BT(uT),
          checked: cT.enableLighting,
          onClick: TT => {
            YT.b.setClientEscMenuOptions({
              enableLighting: TT
            })
          },
          disabled: VT
        }), (0, lT.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, lT.jsx)(eT.b, {
            label: BT(GT),
            checked: cT.showFog,
            onClick: TT => {
              CT({
                showFog: TT
              }), YT.b.setClientEscMenuOptions({
                showFog: TT
              })
            },
            disabled: ST,
            className: MT()({
              SettingBoxWarning: TU
            })
          }), (0, lT.jsx)(eT.j, {
            name: BT("settingsMenu:fogChunkDistance"),
            min: kT[0],
            max: mm.f.maxChunkHorizAddDistance,
            step: 1,
            initValue: null !== (nT = cT.fogChunkDistance) && void 0 !== nT ? nT : kT[0],
            onChange: TT => {
              YT.b.setClientEscMenuOptions({
                fogChunkDistance: TT
              }), Hm.j.EZ("fogChunkDistanceChanged", TT)
            },
            circleInfoText: BT("settingsMenu:fogChunkDistanceInfo"),
            disabled: ST || !1 === jT("showFog"),
            className: MT()({
              SettingBoxWarning: TU
            })
          }), TU && (0, lT.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: BT("settingsMenu:fogChunkDistanceInfo")
          })]
        }), !km.B && (0, lT.jsx)(eT.b, {
          label: BT(FT ? "settingsMenu:disableBlockTextureAtlasUnavailableWithShaderPack" : "settingsMenu:disableBlockTextureAtlas"),
          checked: !FT && cT.disableTexAtlas,
          onClick: TT => {
            YT.b.setClientEscMenuOptions({
              disableTexAtlas: TT
            })
          },
          circleInfoText: BT("settingsMenu:disableBlockTextureAtlasInfo"),
          disabled: FT
        }), (0, lT.jsx)(eT.j, {
          name: BT("settingsMenu:fieldOfView"),
          min: 50,
          max: 160,
          step: 1,
          initValue: cT.cameraFOV,
          onChange: TT => {
            YT.b.setClientEscMenuOptions({
              cameraFOV: TT
            })
          }
        }), (0, lT.jsx)(eT.b, {
          label: BT("settingsMenu:disableViewBobbing"),
          checked: cT.disableBobbing,
          onClick: TT => {
            YT.b.setClientEscMenuOptions({
              disableBobbing: TT
            })
          },
          circleInfoText: BT("settingsMenu:disableViewBobbingInfo")
        }), (0, lT.jsx)(eT.b, {
          label: BT("settingsMenu:antiAliasing"),
          checked: cT.antiAliasing,
          onClick: TT => {
            CT({
              antiAliasing: TT
            }), (0, cm.g)("antiAliasing"), YT.b.setClientEscMenuOptions({
              antiAliasing: TT
            })
          },
          circleInfoText: BT("settingsMenu:antiAliasingInfo")
        }), (0, lT.jsx)(eT.j, {
          name: BT("settingsMenu:pixelScale"),
          min: 1,
          max: 8,
          step: 1,
          initValue: null !== (HT = cT.pixelScale) && void 0 !== HT ? HT : 1,
          onChange: TT => {
            (TT !== YT.b.get("clientEscMenuOptions").pixelScale || (0, qm.m)()) && (0, cm.g)("pixelScale"), YT.b.setClientEscMenuOptions({
              pixelScale: TT
            })
          },
          circleInfoText: BT("settingsMenu:pixelScaleInfo"),
          format: TT => `${TT}x`
        }), (0, lT.jsx)(eT.b, {
          label: BT("settingsMenu:pixelSmoothing"),
          checked: cT.pixelSmoothing,
          onClick: TT => {
            YT.b.setClientEscMenuOptions({
              pixelSmoothing: TT
            })
          },
          circleInfoText: BT("settingsMenu:pixelSmoothingInfo")
        }), km.B && (0, lT.jsx)(eT.b, {
          label: BT("settingsMenu:distantNametags"),
          checked: (0, fm.d)(),
          onClick: TT => {
            YT.b.set({
              showDistantNametags: TT
            })
          },
          circleInfoText: BT("settingsMenu:distantNametagsInfo")
        }), (0, lT.jsx)(eT.b, {
          label: BT(sT.translationKey),
          checked: sT.checked,
          onClick: TT => {
            CT({
              useWebGpu: TT
            }), YT.b.setClientEscMenuOptions({
              useWebGpu: TT
            })
          },
          circleInfoText: BT("settingsMenu:newWebGpuInfo"),
          disabled: sT.disabled
        })]
      })
    }
    var em = mT(4531),
      Ym = mT(8972),
      Jm = mT(34227),
      xm = mT(8984),
      dm = mT(34233);
    const wm = {
        color: 16777215,
        name: "white"
      },
      tm = {
        color: 0,
        name: "black"
      },
      am = [wm, {
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
      }, tm],
      ym = [tm, wm];

    function Xm(TT) {
      return `${TT} px`
    }

    function Im(TT) {
      return `${TT}%`
    }

    function Qm(TT) {
      let {
        label: UT,
        value: mT,
        swatches: WT,
        onChange: zT
      } = TT;
      const {
        t: nT
      } = (0, gT.z)(), HT = !WT.some((TT => TT.color === mT));
      return (0, lT.jsxs)("div", {
        className: "SettingBox CrosshairColorRow",
        children: [(0, lT.jsx)("div", {
          className: "SliderText",
          children: UT
        }), (0, lT.jsxs)("div", {
          className: "CrosshairSwatches",
          role: "radiogroup",
          "aria-label": UT,
          children: [WT.map((TT => {
            let {
              color: UT,
              name: WT
            } = TT;
            return (0, lT.jsx)("button", {
              type: "button",
              role: "radio",
              "aria-checked": UT === mT,
              "aria-label": nT(`crosshairSettings:color_${WT}`),
              "data-pad-focusable": !0,
              className: MT()("CrosshairSwatch", {
                Selected: UT === mT
              }),
              style: {
                background: (0, dm.i)(UT)
              },
              onClick: () => {
                zT(UT)
              }
            }, UT)
          })), (0, lT.jsx)("label", {
            className: MT()("CrosshairSwatch CrosshairSwatchCustom", {
              Selected: HT
            }),
            style: HT ? {
              background: (0, dm.i)(mT)
            } : void 0,
            title: nT("crosshairSettings:customColor"),
            "data-pad-focusable": !0,
            children: (0, lT.jsx)("input", {
              type: "color",
              "aria-label": nT("crosshairSettings:customColor"),
              value: (0, dm.i)(mT),
              onChange: TT => {
                const UT = (0, dm.n)(TT.target.value);
                null !== UT && zT(UT)
              }
            })
          })]
        })]
      })
    }

    function sm(TT) {
      let {
        settings: UT,
        onChange: mT
      } = TT;
      const {
        t: WT
      } = (0, gT.z)(), zT = (TT, WT) => {
        mT((0, dm.s)(UT, TT, WT))
      }, MT = function(TT, mT) {
        let WT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Xm;
        const {
          min: MT,
          max: gT,
          step: nT
        } = dm.b[TT];
        return (0, lT.jsx)(eT.j, {
          name: mT,
          min: MT,
          max: gT,
          step: nT,
          initValue: UT[TT],
          format: WT,
          onChange: UT => {
            zT(TT, UT)
          }
        }, TT)
      }, nT = ["lines", "dot", "circle"].filter((TT => UT[TT])), HT = (TT, mT, WT) => (0, lT.jsx)(eT.b, {
        label: mT,
        checked: UT[TT],
        disabled: 1 === nT.length && nT[0] === TT,
        circleInfoText: WT,
        onClick: UT => {
          zT(TT, UT)
        }
      }, TT), kT = "shapes" === UT.style;
      return (0, lT.jsxs)(lT.Fragment, {
        children: [(0, lT.jsx)(eT.f, {
          label: WT("crosshairSettings:style"),
          options: [{
            value: "classic",
            label: WT("crosshairSettings:styleClassic")
          }, {
            value: "shapes",
            label: WT("crosshairSettings:styleShapes")
          }],
          value: UT.style,
          onChange: TT => {
            zT("style", TT)
          }
        }), (0, lT.jsx)(Qm, {
          label: WT("crosshairSettings:color"),
          value: UT.color,
          swatches: am,
          onChange: TT => {
            zT("color", TT)
          }
        }), MT("opacity", WT("crosshairSettings:opacity"), Im), !kT && MT("size", WT("crosshairSettings:size"), Im), kT && (0, lT.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [HT("lines", WT("crosshairSettings:lines")), UT.lines && MT("lineLength", WT("crosshairSettings:lineLength")), UT.lines && MT("lineThickness", WT("crosshairSettings:lineThickness")), UT.lines && MT("gap", WT("crosshairSettings:gap")), UT.lines && HT("tStyle", WT("crosshairSettings:tStyle"))]
        }), kT && (0, lT.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [HT("dot", WT("crosshairSettings:dot")), UT.dot && MT("dotSize", WT("crosshairSettings:dotSize"))]
        }), kT && (0, lT.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [HT("circle", WT("crosshairSettings:circle")), UT.circle && MT("circleRadius", WT("crosshairSettings:circleRadius")), UT.circle && MT("circleThickness", WT("crosshairSettings:circleThickness"))]
        }), (0, lT.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [MT("outline", WT("crosshairSettings:outline"), (TT => TT > 0 ? Xm(TT) : WT("crosshairSettings:off"))), UT.outline > 0 && (0, lT.jsx)(Qm, {
            label: WT("crosshairSettings:outlineColor"),
            value: UT.outlineColor,
            swatches: ym,
            onChange: TT => {
              zT("outlineColor", TT)
            }
          })]
        }), HT("growOnClick", WT("crosshairSettings:growOnClick")), kT && HT("forGuns", WT("crosshairSettings:forGuns"), WT("crosshairSettings:forGunsInfo"))]
      })
    }
    var Fm = mT(85),
      Pm = mT(1376),
      Vm = mT(13036),
      um = mT(14128),
      Cm = mT(15592),
      rm = mT(16108);
    const Km = ["sky", "grass", "stone", "sand", "snow", "night"],
      Sm = "4rem";

    function Gm(TT) {
      return {
        backgroundImage: `url(${TT})`,
        backgroundSize: `${Sm} ${Sm}`,
        backgroundRepeat: "repeat",
        imageRendering: "pixelated"
      }
    }

    function Nm(TT) {
      return {
        ...(() => {
          switch (TT) {
            case "sky":
              return {
                backgroundImage: "linear-gradient(#3d8fe0 0%, #8cc8f5 45%, #d6eefc 58%, #6fae4a 58.01%, #4f8a33 100%)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              };
            case "grass":
              return Gm(Vm);
            case "stone":
              return Gm(um);
            case "sand":
              return Gm(Cm);
            case "snow":
              return Gm(rm);
            case "night":
              return {
                backgroundImage: "radial-gradient(circle at 50% 50%, #1e2a4a 0%, #070b16 100vmax)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              }
          }
        })(),
        backgroundPosition: "center"
      }
    }

    function Em(TT) {
      return Object.freeze({
        ...dm.e,
        style: "shapes",
        outline: 1,
        lines: !1,
        ...TT
      })
    }
    const hm = [{
        id: "default",
        settings: dm.e
      }, {
        id: "cross",
        settings: Em({
          color: 5046092,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3
        })
      }, {
        id: "crossDot",
        settings: Em({
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
        settings: Em({
          dot: !0,
          dotSize: 4
        })
      }, {
        id: "circle",
        settings: Em({
          circle: !0,
          circleRadius: 12,
          circleThickness: 1.5,
          dot: !0,
          dotSize: 2
        })
      }, {
        id: "tShape",
        settings: Em({
          color: 16731391,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3,
          tStyle: !0
        })
      }, {
        id: "tiny",
        settings: Em({
          color: 16776960,
          lines: !0,
          lineLength: 3,
          lineThickness: 1,
          gap: 2
        })
      }, {
        id: "bold",
        settings: Em({
          lines: !0,
          lineLength: 10,
          lineThickness: 3,
          gap: 0,
          outline: 1.5
        })
      }],
      Dm = ["growOnClick", "forGuns"];
    var om = mT(34237);

    function Am(TT) {
      let {
        label: UT,
        selected: mT,
        onClick: WT,
        className: zT,
        style: gT,
        children: nT
      } = TT;
      return (0, lT.jsx)("button", {
        type: "button",
        role: "radio",
        "aria-checked": mT,
        title: UT,
        "aria-label": UT,
        "data-pad-focusable": !0,
        className: MT()("CrosshairBackdropSwatch", zT, {
          Selected: mT
        }),
        style: gT,
        onClick: WT,
        children: nT
      })
    }

    function Rm(TT) {
      let {
        backdrop: UT,
        onChange: mT,
        game: WT
      } = TT;
      const {
        t: zT
      } = (0, gT.z)();
      return (0, lT.jsxs)("div", {
        className: "CrosshairBackdrops",
        role: "radiogroup",
        "aria-label": zT("crosshairSettings:background"),
        children: [WT && (0, lT.jsx)(Am, {
          label: zT("crosshairSettings:bg_game"),
          selected: WT.selected,
          onClick: WT.onSelect,
          className: "CrosshairGameSwatch",
          children: (0, lT.jsx)(nT.c, {
            name: "cube"
          })
        }), Km.map((TT => (0, lT.jsx)(Am, {
          label: zT(`crosshairSettings:bg_${TT}`),
          selected: !(null !== WT && void 0 !== WT && WT.selected) && TT === UT,
          style: Nm(TT),
          onClick: () => {
            mT(TT)
          }
        }, TT)))]
      })
    }

    function TW(TT) {
      let {
        settings: UT,
        touch: mT,
        backdrop: WT,
        onChange: zT
      } = TT;
      const {
        t: nT
      } = (0, gT.z)(), HT = function(TT) {
        var UT;
        return null !== (UT = hm.find((UT => (0, dm.o)(UT.settings, TT, Dm)))) && void 0 !== UT ? UT : null
      }(UT);
      return (0, lT.jsx)("div", {
        className: "CrosshairPresets",
        role: "radiogroup",
        "aria-label": nT("crosshairSettings:presets"),
        children: hm.map((TT => {
          const gT = (null === HT || void 0 === HT ? void 0 : HT.id) === TT.id;
          return (0, lT.jsxs)("button", {
            type: "button",
            role: "radio",
            "aria-checked": gT,
            "data-pad-focusable": !0,
            className: MT()("CrosshairPreset", {
              Selected: gT
            }),
            onClick: () => {
              zT(function(TT, UT) {
                return {
                  ...UT.settings,
                  growOnClick: TT.growOnClick,
                  forGuns: TT.forGuns
                }
              }(UT, TT))
            },
            children: [(0, lT.jsx)("div", {
              className: "CrosshairPresetStage",
              style: Nm(WT),
              children: (0, lT.jsx)(om.b, {
                settings: TT.settings,
                touch: mT,
                inPreview: !0
              })
            }), (0, lT.jsx)("div", {
              className: "CrosshairPresetName",
              children: nT(`crosshairSettings:preset_${TT.id}`)
            })]
          }, TT.id)
        }))
      })
    }
    var UW = mT(1785);

    function mW(TT, UT) {
      const [mT, zT] = (0, WT.useState)(!1), MT = () => {
        zT(!1)
      }, [gT, nT] = (0, WT.useState)(!1), HT = (0, WT.useRef)({
        growOnClick: TT.growOnClick,
        forGuns: TT.forGuns
      });
      (0, WT.useEffect)((() => {
        const UT = HT.current;
        HT.current = {
          growOnClick: TT.growOnClick,
          forGuns: TT.forGuns
        }, (TT.growOnClick && !UT.growOnClick || TT.forGuns && !UT.forGuns) && nT(!0)
      }), [TT.growOnClick, TT.forGuns]), (0, WT.useEffect)((() => {
        if (!gT) return;
        const TT = setTimeout((() => {
          nT(!1)
        }), 600);
        return () => {
          clearTimeout(TT)
        }
      }), [gT]);
      const kT = mT || gT;
      return {
        view: {
          pressed: kT,
          spread: kT && TT.forGuns && !TT.growOnClick ? 6 : 0
        },
        handlers: {
          onPointerDown: TT => {
            !TT.target.closest(UT) && (0, UW.d)(TT.currentTarget, TT.pointerId) && zT(!0)
          },
          onPointerUp: MT,
          onPointerCancel: MT,
          onLostPointerCapture: MT
        }
      }
    }

    function WW(TT) {
      let {
        settings: UT,
        touch: mT,
        backdrop: WT,
        className: zT,
        children: gT,
        label: nT
      } = TT;
      const HT = mW(UT, ".CrosshairStageControls");
      return (0, lT.jsxs)("div", {
        className: MT()("CrosshairStage", zT),
        style: Nm(WT),
        ...HT.handlers,
        children: [(0, lT.jsx)("div", {
          className: "CrosshairStageHold",
          role: "img",
          "aria-label": nT,
          children: (0, lT.jsx)(om.b, {
            settings: UT,
            touch: mT,
            inPreview: !0,
            ...HT.view
          })
        }), gT]
      })
    }
    const zW = "crosshairFullScreen";

    function MW(TT) {
      let {
        settings: UT,
        touch: mT,
        backdrop: zT,
        onBackdrop: HT,
        inGame: jT,
        onChange: LT,
        onClose: pT
      } = TT;
      const {
        t: BT
      } = (0, gT.z)(), ZT = (0, WT.useRef)(null);
      (0, Pm.p)("popup", ZT, pT),
      function(TT) {
        const UT = (0, WT.useRef)(TT);
        UT.current = TT, (0, WT.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [zW]: !0
          }, "");
          let TT = !1;
          const mT = () => {
            TT = !0, UT.current()
          };
          return window.addEventListener("popstate", mT), () => {
            var UT;
            window.removeEventListener("popstate", mT), !TT && null !== (UT = window.history.state) && void 0 !== UT && UT[zW] && window.history.back()
          }
        }), [])
      }(pT);
      const cT = (0, WT.useRef)(pT);
      cT.current = pT, (0, WT.useEffect)((() => {
        function TT(TT) {
          "Escape" === TT.key && (TT.stopPropagation(), cT.current())
        }
        return window.addEventListener("keydown", TT, !0), () => {
          window.removeEventListener("keydown", TT, !0)
        }
      }), []);
      const vT = mW(UT, ".CrosshairFullScreenPanel"),
        [fT, qT] = (0, WT.useState)(!0),
        iT = fT && jT;
      (0, WT.useEffect)((() => {
        if (iT) return YT.b.set({
          crosshairGameView: !0
        }), () => {
          YT.b.set({
            crosshairGameView: !1
          })
        }
      }), [iT]);
      const [bT, OT] = (0, WT.useState)(!0);
      return (0, Fm.createPortal)((0, lT.jsxs)("div", {
        ref: ZT,
        className: "CrosshairFullScreen",
        style: iT ? void 0 : Nm(zT),
        ...vT.handlers,
        children: [(0, lT.jsx)(om.b, {
          settings: UT,
          touch: mT,
          inEditor: !0,
          ...vT.view
        }), (0, lT.jsxs)("div", {
          className: MT()("CrosshairFullScreenPanel", {
            Collapsed: !bT
          }),
          children: [(0, lT.jsxs)("div", {
            className: "CrosshairFullScreenBar",
            children: [(0, lT.jsx)(Rm, {
              backdrop: zT,
              onChange: TT => {
                qT(!1), HT(TT)
              },
              game: jT ? {
                selected: iT,
                onSelect: () => {
                  qT(!0)
                }
              } : void 0
            }), (0, lT.jsx)(kT.L, {
              className: "CrosshairPanelToggle",
              ariaLabel: BT(bT ? "crosshairSettings:hideEditor" : "crosshairSettings:showEditor"),
              onClick: () => {
                OT(!bT)
              },
              children: (0, lT.jsx)(nT.c, {
                name: bT ? "caret-up" : "pen"
              })
            }), (0, lT.jsx)(kT.e, {
              className: "CrosshairFullScreenDone",
              onClick: pT,
              padDefaultFocus: !0,
              children: BT("crosshairSettings:done")
            })]
          }), bT && (0, lT.jsxs)("div", {
            className: "CrosshairFullScreenFields",
            children: [(0, lT.jsx)(TW, {
              settings: UT,
              touch: mT,
              backdrop: zT,
              onChange: LT
            }), (0, lT.jsx)(sm, {
              settings: UT,
              onChange: LT
            })]
          })]
        })]
      }), document.body)
    }
    var gW = mT(2784),
      nW = mT(34245);

    function HW(TT) {
      let {
        settings: UT,
        onChange: mT
      } = TT;
      const {
        t: zT
      } = (0, gT.z)(), HT = (0, nW.h)(UT), [jT, LT] = (0, gW.h)(), [pT, BT] = (0, WT.useState)(!1), ZT = (0, WT.useRef)(null), [cT, vT] = (0, gW.h)(), [fT, qT] = (0, WT.useState)(!1);
      return (0, lT.jsxs)("div", {
        className: "SettingBox CrosshairShare",
        children: [(0, lT.jsxs)("div", {
          className: "CrosshairShareRow",
          children: [(0, lT.jsxs)(kT.L, {
            className: MT()("CrosshairCopy", {
              ActiveSecondaryButton: jT
            }),
            onClick: () => {
              (0, gW.f)(HT, {
                useShareSheet: !1,
                onOutcome: TT => {
                  BT("failed" === TT), "copied" === TT && LT()
                }
              })
            },
            children: [(0, lT.jsx)(nT.c, {
              name: jT ? "check" : "copy"
            }), " ", zT(jT ? "general:copied" : "crosshairSettings:copy")]
          }), (0, lT.jsx)(bT.e, {
            className: "CrosshairPaste",
            domRef: ZT,
            ariaLabel: zT("crosshairSettings:paste"),
            placeholderText: zT("crosshairSettings:paste"),
            onValueChange: TT => {
              const UT = (0, nW.f)(TT);
              qT(!UT && TT.trim().length >= nW.b), UT && (mT(UT), ZT.current.value = "", vT())
            }
          })]
        }), pT && (0, lT.jsx)("input", {
          className: "CrosshairCode",
          readOnly: !0,
          value: HT,
          "aria-label": zT("crosshairSettings:copy"),
          onFocus: TT => {
            TT.currentTarget.select()
          }
        }), (0, lT.jsxs)("div", {
          "aria-live": "polite",
          children: [fT && (0, lT.jsx)("div", {
            className: "CrosshairShareNote Error",
            children: zT("crosshairSettings:pasteInvalid")
          }), cT && !fT && (0, lT.jsx)("div", {
            className: "CrosshairShareNote",
            children: zT("crosshairSettings:applied")
          })]
        })]
      })
    }
    var kW = mT(34253);
    let jW = "sky";

    function lW(TT) {
      let {
        showing: UT
      } = TT;
      const {
        t: mT
      } = (0, gT.z)(), {
        isTouchScreen: zT,
        gameState: MT,
        clientEscMenuOptions: HT
      } = (0, YT.h)(["isTouchScreen", "gameState", "clientEscMenuOptions"]), jT = (0, kW.g)(), [LT, pT] = (0, WT.useState)(jW), BT = TT => {
        jW = TT, pT(TT)
      }, [ZT, cT] = (0, WT.useState)(!1);
      return (0, WT.useEffect)((() => {
        UT || cT(!1)
      }), [UT]), (0, lT.jsxs)("div", {
        className: "SettingsMenuRightInner CrosshairCategory",
        children: [(0, lT.jsx)("div", {
          className: "CrosshairPreviewSticky",
          children: (0, lT.jsx)(WW, {
            className: "CrosshairPreviewStage",
            settings: jT,
            touch: zT,
            backdrop: LT,
            label: mT("crosshairSettings:preview"),
            children: (0, lT.jsxs)("div", {
              className: "CrosshairPreviewBar CrosshairStageControls",
              children: [(0, lT.jsx)(Rm, {
                backdrop: LT,
                onChange: BT
              }), (0, lT.jsxs)(kT.L, {
                className: "CrosshairFullScreenButton",
                onClick: () => {
                  cT(!0)
                },
                children: [(0, lT.jsx)(nT.c, {
                  name: "expand"
                }), " ", mT("crosshairSettings:fullScreen")]
              })]
            })
          })
        }), (0, lT.jsx)("div", {
          className: "SettingBox",
          children: (0, lT.jsx)(TW, {
            settings: jT,
            touch: zT,
            backdrop: LT,
            onChange: kW.d
          })
        }), (0, lT.jsx)(HW, {
          settings: jT,
          onChange: kW.d
        }), zT && (0, lT.jsx)(xm.b, {
          note: (0, Jm.h)(zT, HT.touchActionButtons) ? mT("crosshairSettings:touchNote") : void 0
        }), (0, lT.jsx)(sm, {
          settings: jT,
          onChange: kW.d
        }), ZT && (0, lT.jsx)(MW, {
          settings: jT,
          touch: zT,
          backdrop: LT,
          onBackdrop: BT,
          inGame: "inGame" === MT,
          onChange: kW.d,
          onClose: () => {
            cT(!1)
          }
        })]
      })
    }
    var LW = mT(8977),
      pW = mT(1517),
      BW = mT(5083),
      ZW = mT(34262),
      cW = mT(4370),
      vW = mT(2095),
      fW = mT(746);
    const qW = (0, WT.memo)((function() {
      const {
        clientEscMenuOptions: TT
      } = (0, YT.h)(["clientEscMenuOptions"]), {
        recording: UT,
        clipping: mT,
        hasClipBuffer: zT
      } = (0, QU.i)("replayRecorder"), gT = (0, QU.f)("connectedGame", (TT => TT.replay)), nT = (0, cW.i)(), HT = !1 === (0, ZT.f)("canRecordReplays");
      (0, WT.useEffect)((() => {
        fT.gameBridge.send("setRecorderPrefs", {
          clipping: TT.enableClipping,
          clipSeconds: TT.clipDurationSeconds
        })
      }), [TT.enableClipping, TT.clipDurationSeconds]);
      const jT = nT || gT,
        LT = !jT && !HT,
        pT = UT || LT,
        BT = LT,
        cT = BT && mT && !UT;

      function vT() {
        pT && fT.gameBridge.send("toggleRecording", null)
      }
      return (0, lT.jsxs)("div", {
        className: "SettingsMenuRightInner ReplayViewerCategory",
        children: [(0, lT.jsxs)("div", {
          className: "SettingBox",
          children: [(0, lT.jsx)("div", {
            className: "ReplayViewerCategoryRecordingRow",
            children: UT ? (0, lT.jsxs)(lT.Fragment, {
              children: [(0, lT.jsxs)(kT.I, {
                className: "ReplayViewerCategoryButton",
                onClick: vT,
                disabled: !pT,
                children: [(0, lT.jsx)("span", {
                  children: "Stop Recording"
                }), (0, lT.jsx)(vW.c, {
                  noaAction: "recordGame"
                })]
              }), (0, lT.jsx)(ZW.b, {
                className: "ReplayViewerCategoryRecordingIndicator"
              })]
            }) : (0, lT.jsxs)(kT.e, {
              className: "ReplayViewerCategoryButton",
              onClick: vT,
              disabled: !pT,
              children: [(0, lT.jsx)("span", {
                children: "Start Recording"
              }), (0, lT.jsx)(vW.c, {
                noaAction: "recordGame"
              })]
            })
          }), HT && (0, lT.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Recording is turned off in this game."
          }), jT && !UT && (0, lT.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Close Replay Mode to start recording."
          })]
        }), (0, lT.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, lT.jsx)(eT.b, {
            label: "Enable clipping",
            checked: TT.enableClipping,
            disabled: !BT,
            onClick: function(TT) {
              BT && YT.b.setClientEscMenuOptions({
                enableClipping: TT
              })
            },
            className: MT()({
              SettingBoxDisabled: !BT
            })
          }), (0, lT.jsx)(eT.j, {
            name: "Clip duration (seconds)",
            min: fW.l,
            max: fW.j,
            step: fW.e,
            initValue: TT.clipDurationSeconds,
            onChange: function(TT) {
              YT.b.setClientEscMenuOptions({
                clipDurationSeconds: TT
              })
            },
            circleInfoText: "Longer clip durations use more memory and may affect performance.",
            disabled: !BT || !TT.enableClipping
          })]
        }), (0, lT.jsxs)("div", {
          className: "SettingBox",
          children: [(0, lT.jsxs)(kT.e, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              cT && fT.gameBridge.send("saveClip", null)
            },
            disabled: !cT,
            children: [(0, lT.jsx)("span", {
              children: "Record clip"
            }), (0, lT.jsx)(vW.c, {
              noaAction: "recordClip"
            })]
          }), TT.enableClipping && !zT && BT && !UT && (0, lT.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clip buffer is filling \u2014 play for a moment, then save."
          }), UT && (0, lT.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clipping pauses while a full recording is active."
          })]
        }), (0, lT.jsxs)("div", {
          className: "SettingBox",
          children: [(0, lT.jsxs)(kT.e, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              (0, cW.h)(!0), YT.b.set({
                openEverythingMenuName: null
              })
            },
            disabled: nT,
            children: [(0, lT.jsx)("span", {
              children: "Open Replay Mode"
            }), (0, lT.jsx)(vW.c, {
              noaAction: "replayViewerOpen"
            })]
          }), nT && (0, lT.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Replay Mode is already open."
          })]
        }), (0, lT.jsxs)("div", {
          className: "SettingBox",
          children: [(0, lT.jsx)("div", {
            className: "ReplayViewerCategoryTutorialTitle",
            children: "How to use Replay Mode"
          }), (0, lT.jsx)("iframe", {
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
    var iW = mT(2014);
    const bW = {
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
        icon: () => (0, lT.jsx)("svg", {
          className: "svg-inline--fa",
          viewBox: "0 0 640 512",
          "aria-hidden": "true",
          children: (0, lT.jsx)("path", {
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
      Np: {
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

    function OW() {
      return Promise.all([mT.e(78), mT.e(136), mT.e(135), mT.e(131)]).then((() => mT(41213))).then((TT => ({
        default: TT.ShaderPackCategory
      })), (TT => (console.error("Failed to load the shader pack settings", TT), {
        default: eW
      })))
    }

    function eW() {
      const {
        t: TT
      } = (0, gT.z)();
      return (0, lT.jsx)("div", {
        className: "SettingsMenuRightInner",
        children: TT("shaderPack:tabLoadFailed")
      })
    }
    var YW = mT(1513);
    const JW = (0, WT.lazy)((() => mT.e(278).then((() => mT(41198))).then((TT => ({
        default: TT.BloxdInformation
      }))))),
      xW = (0, WT.lazy)(OW);

    function dW(TT) {
      return TT ? "general" : "account"
    }
    const wW = new Map,
      tW = (0, WT.memo)((function(TT) {
        let {
          show: UT,
          setBeforeResumeCallback: mT
        } = TT;
        (0, cT.e)();
        const {
          gameState: zT,
          openSettingsCategory: MT
        } = (0, YT.h)(["gameState", "openSettingsCategory"]), {
          userContext: HT
        } = (0, BT.d)(), {
          t: jT
        } = (0, gT.z)(), bT = (0, pT.d)(), OT = (0, ZT.f)("minChunkAddDist"), eT = "inGame" === zT, [JT, wT] = (0, WT.useState)(dW(eT)), [tT, aT] = (0, WT.useState)(null), [yT, XT] = (0, WT.useState)([]), IT = (0, WT.useRef)(function() {
          const TT = new Date,
            UT = 6 * (TT.getMonth() + TT.getDate()) % vU.t.length;
          return [...vU.t, ...vU.t].slice(UT, UT + 6)
        }()), QT = (0, WT.useRef)(null), sT = (0, KU.j)(pW.g, (0, pW.c)()), FT = Object.keys(bW).filter((TT => {
          switch (TT) {
            case "replayViewer":
              return eT;
            case "developerTools":
              return HT.playerHasRank("developer") || !1;
            case "texturePack":
              return vT.featureFlags.settings.canChangeTexturePack;
            case "Np":
              return vT.featureFlags.settings.canUseShaderPacks;
            case "notifications":
              return vT.featureFlags.useSocialFeatures || null !== HT.dailyDrop;
            case "alternativeDomains":
              return "crazygames" !== dT.siteUsed;
            case "controller":
              return vT.featureFlags.useControllerSupport && (sT || "controller" === JT);
            default:
              return !0
          }
        }));
        (0, KU.g)("toggleFullCoordinateOverlay", (() => {
          const TT = Bm("showCoordinates") && Bm("showChunkCoordinates") && Bm("showFPS");
          Zm("showCoordinates", !TT), Zm("showChunkCoordinates", !TT), Zm("showFPS", !TT), bT()
        })), (0, KU.g)("updatedChunkLoadDist", (() => {
          bT()
        })), (0, WT.useEffect)((() => {
          if (aT(null), null === YT.b.get("openSettingsCategory")) {
            const TT = (0, YW.k)() ? wW.get(eT) : void 0;
            wT(TT && FT.includes(TT) ? TT : dW(eT))
          }
        }), [UT]), (0, WT.useEffect)((() => {
          null !== MT && (wT(MT), wW.set(eT, MT), YT.b.set({
            openSettingsCategory: null
          }))
        }), [MT, eT]), (0, WT.useLayoutEffect)((() => {
          QT.current && (QT.current.scrollTop = 0)
        }), [JT, UT]), (0, WT.useEffect)((() => {
          "updateLog" === JT && (0, iT.e)().then(XT)
        }), [JT]), (0, WT.useEffect)((() => {
          if ((0, nm.E)(OT)) return;
          const [TT, UT] = (0, em.e)(), [mT, WT] = (0, Um.i)(OT), zT = (0, iW.e)(OT[0], TT, mT), MT = (0, iW.e)(OT[1], UT, WT);
          fT.gameBridge.send("setChunkAddDistance", {
            horizontal: zT,
            vertical: MT
          })
        }), [OT]);
        const PT = (0, WT.useCallback)((async () => {
          tT && (await tT(), aT(null))
        }), [tT]);

        function VT() {
          YT.b.set({
            openEverythingMenuName: null
          })
        }
        return (0, WT.useEffect)((() => {
          mT((() => PT))
        }), [PT, mT]), (0, lT.jsxs)("div", {
          className: "SettingsMenu Menu",
          style: UT ? {} : {
            display: "none"
          },
          children: [(0, lT.jsx)("div", {
            className: "MenuSideBar",
            children: (0, lT.jsx)("div", {
              className: "MenuSideBarBody",
              children: (0, lT.jsx)(LT, {
                items: FT.map((TT => {
                  const UT = bW[TT].icon;
                  return {
                    id: TT,
                    faIcon: "string" === typeof UT ? UT : void 0,
                    iconElement: "string" === typeof UT ? void 0 : (0, lT.jsx)(UT, {}),
                    title: jT(bW[TT].displayName),
                    redDot: !1
                  }
                })),
                selectedItemId: JT,
                onClick: TT => {
                  !async function(TT) {
                    await PT(), wT(TT), wW.set(eT, TT)
                  }(TT)
                }
              })
            })
          }), (0, lT.jsxs)("div", {
            ref: QT,
            className: "MenuBody SettingsMenuRight",
            children: ["account" === JT && (0, lT.jsx)(wU, {
              showing: UT,
              inGame: eT
            }), "general" === JT && (0, lT.jsx)(uU, {
              inGame: eT
            }), "audio" === JT && (0, lT.jsx)(CU, {}), "notifications" === JT && (0, lT.jsx)(Tm, {}), "graphics" === JT && (0, lT.jsx)(Om, {
              minChunkAddDist: null !== OT && void 0 !== OT ? OT : [2, 2],
              getValue: Bm,
              onChange: Zm,
              setApplySettingsCallback: aT
            }), "controls" === JT && (0, lT.jsx)(Ym.f, {}), "crosshair" === JT && (0, lT.jsx)(lW, {
              showing: UT
            }), "controller" === JT && vT.featureFlags.useControllerSupport && (0, lT.jsx)(LW.b, {}), vT.featureFlags.settings.canChangeTexturePack && "texturePack" === JT && (0, lT.jsx)(BW.e, {
              setApplySettingsCallback: aT
            }), vT.featureFlags.settings.canUseShaderPacks && "Np" === JT && (0, lT.jsx)(WT.Suspense, {
              fallback: null,
              children: (0, lT.jsx)(xW, {
                setApplySettingsCallback: aT
              })
            }), "updateLog" === JT && (0, lT.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, lT.jsx)("div", {
                className: "UpdateLogsContainer",
                children: yT.map(((TT, UT) => (0, lT.jsx)(qT.b, {
                  updateLog: TT,
                  index: UT,
                  close: VT
                }, UT)))
              })
            }), "information" === JT && (0, lT.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, lT.jsx)(WT.Suspense, {
                fallback: null,
                children: (0, lT.jsx)(JW, {})
              })
            }), "alternativeDomains" === JT && (0, lT.jsxs)("div", {
              className: "SettingsMenuRightInner",
              children: [(0, lT.jsx)("div", {
                className: "AlternativeDomainsTitle",
                children: jT("settingsMenu:unblockedDomainsDescription")
              }), (0, lT.jsx)("div", {
                className: "AlternativeDomainsList",
                children: IT.current.map((TT => (0, lT.jsxs)(kT.e, {
                  onClick: () => {
                    window.open(`https://${TT}`)
                  },
                  children: [(0, lT.jsx)(nT.c, {
                    name: "arrow-up-right-from-square"
                  }), " ", TT]
                }, TT)))
              })]
            }), "replayViewer" === JT && (0, lT.jsx)(qW, {}), "developerTools" === JT && (0, lT.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, lT.jsx)(xT, {
                setApplySettingsCallback: aT
              })
            }), null !== tT && (0, lT.jsx)("div", {
              className: "SettingsMenuRightFooter",
              children: (0, lT.jsx)(kT.e, {
                className: "SettingsMenuRightFooterButton",
                onClick: PT,
                children: jT("general:apply")
              })
            })]
          })]
        })
      }));
    var aW = mT(2731);
    const yW = ["characters", "emote", "skin", "hat", "head", "eyebrows", "eyes", "back", "body", "legs", "shoes", "profileEffect", "cape", "nameColour"],
      XW = (0, WT.lazy)((() => Promise.resolve().then((() => mT(4749))).then((TT => {
        TT.needGameClientAfterPaint();
        const UT = TT.matchmakingLibrariesPromise.then((TT => (0, aW.b)(TT.loadCharacterCustomisationUI(), (TT => TT.CharacterCustomisationUI))));
        return Promise.all([TT.ensureGameSetup(), UT]).then((TT => {
          let [, UT] = TT;
          return UT
        }))
      })))),
      IW = "openCustomisationTab";

    function QW(TT) {
      var UT, mT, zT;
      let {
        show: MT
      } = TT;
      const {
        userContext: gT
      } = (0, BT.d)(), nT = (0, uT.usePurchasesAllowed)(), HT = (0, WT.useRef)(null);
      var kT, jT;
      gT !== wT.NULL_USER_CONTEXT && (null === (UT = HT.current) || void 0 === UT ? void 0 : UT.whamm) !== gT.whamm && (HT.current = {
        whamm: gT.whamm,
        mountKey: (null !== (kT = null === (jT = HT.current) || void 0 === jT ? void 0 : jT.mountKey) && void 0 !== kT ? kT : -1) + 1
      });
      const [pT, ZT] = (0, WT.useState)("characters");
      if ((0, KU.g)(IW, ZT), !MT) return null;
      const cT = yW.filter((TT => "cape" !== TT && "nameColour" !== TT || gT.getPlayerRanks().includes("super") || nT)).map((TT => ({
        id: TT,
        faIcon: vU.A[TT],
        title: vU.B[TT],
        redDot: !1
      })));
      return (0, lT.jsxs)("div", {
        className: "Menu CharCustomisation",
        children: [(0, lT.jsx)("div", {
          className: "MenuSideBar",
          children: (0, lT.jsx)(LT, {
            items: cT,
            selectedItemId: pT,
            onClick: TT => {
              ZT(TT)
            }
          })
        }), (0, lT.jsx)("div", {
          className: "MenuBody",
          children: (0, lT.jsx)(WT.Suspense, {
            fallback: (0, lT.jsx)("div", {
              className: "CharacterCustomisationLoading",
              children: (0, lT.jsx)(OT.c, {})
            }),
            children: (0, lT.jsx)(XW, {
              selectedTab: pT
            }, null !== (mT = null === (zT = HT.current) || void 0 === zT ? void 0 : zT.mountKey) && void 0 !== mT ? mT : 0)
          })
        })]
      })
    }
    var sW = mT(1585),
      FW = mT(1591),
      PW = mT(34270),
      VW = mT(4639),
      uW = mT(3520),
      CW = mT(3561),
      rW = mT(34298),
      KW = mT(8901),
      SW = mT(34272),
      GW = mT(34288),
      NW = mT(2034),
      EW = mT(2023),
      hW = mT(5013),
      DW = mT(1360),
      oW = mT(1321),
      AW = mT(1783),
      RW = mT(8964),
      Tz = mT(2564),
      Uz = mT(2569);

    function mz(TT) {
      return TT ? Object.keys(TT).sort(((UT, mT) => {
        var WT, zT, MT, gT;
        const nT = (null !== (WT = null === (zT = TT[mT]) || void 0 === zT ? void 0 : zT.sortPriority) && void 0 !== WT ? WT : 0) - (null !== (MT = null === (gT = TT[UT]) || void 0 === gT ? void 0 : gT.sortPriority) && void 0 !== MT ? MT : 0);
        return 0 !== nT ? nT : UT.localeCompare(mT)
      })) : []
    }
    const Wz = [{
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

    function zz(TT) {
      for (const {
          threshold: UT,
          suffix: mT
        }
        of Wz)
        if (TT >= UT) {
          const WT = TT / UT;
          return WT >= 100 ? `${Math.floor(WT)}${mT}` : WT >= 10 ? `${WT.toFixed(1).replace(/\.0$/,"")}${mT}` : `${WT.toFixed(2).replace(/\.?0+$/,"")}${mT}`
        } return String(TT)
    }
    var Mz = mT(5116);
    const gz = {
        normal: "0.8em",
        big: "1em"
      },
      nz = (0, WT.memo)((function(TT) {
        let {
          item: UT,
          amount: mT = 0,
          size: WT = "normal",
          tier: zT = null
        } = TT;
        return (0, lT.jsx)("div", {
          className: MT()("SmpSlot", `SmpSlot-${WT}`),
          children: UT && (0, lT.jsx)(NW.b, {
            itemName: UT,
            amount: mT > 1 ? mT : 0,
            amountFontSize: gz[WT],
            enchantmentTier: zT
          })
        })
      }));

    function Hz(TT) {
      let {
        amount: UT,
        exact: mT = !1,
        className: WT
      } = TT;
      return (0, lT.jsxs)("span", {
        className: MT()("SmpGold", WT),
        children: [(0, lT.jsx)("span", {
          className: "SmpCoin",
          children: (0, lT.jsx)(NW.b, {
            itemName: "Gold Coin",
            amount: 0
          })
        }), mT ? UT.toLocaleString("en-US") : zz(UT)]
      })
    }

    function kz(TT) {
      let {
        count: UT = 5,
        grid: mT = !1
      } = TT;
      return (0, lT.jsx)("div", {
        className: mT ? "SmpCardGrid" : "SmpList",
        "aria-hidden": "true",
        children: Array.from({
          length: UT
        }, ((TT, UT) => (0, lT.jsxs)("div", {
          className: MT()(mT ? "SmpListingCard" : "SmpRow", "SmpSkeleton"),
          children: [(0, lT.jsx)("div", {
            className: MT()("SmpSlot", mT ? "SmpSlot-big" : "SmpSlot-normal")
          }), (0, lT.jsxs)("div", {
            className: "SmpRowText",
            children: [(0, lT.jsx)("b", {}), (0, lT.jsx)("small", {})]
          }), (0, lT.jsx)("div", {
            className: "SmpSkeletonButton"
          })]
        }, UT)))
      })
    }

    function jz(TT) {
      let {
        title: UT,
        children: mT
      } = TT;
      return (0, lT.jsxs)("div", {
        className: "SmpEmpty",
        children: [(0, lT.jsx)("b", {
          children: UT
        }), mT && (0, lT.jsx)("small", {
          children: mT
        })]
      })
    }

    function lz(TT) {
      let {
        entry: UT
      } = TT;
      return (0, lT.jsx)(jz, {
        title: (0, lT.jsx)(EW.e, {
          text: UT.item.customTitle
        }),
        children: (0, lT.jsx)(EW.e, {
          text: UT.item.description
        })
      })
    }

    function Lz(TT) {
      return (0, lT.jsx)(Mz.c, {
        ...TT,
        className: MT()("SmpChoice", TT.className),
        reselectable: !0
      })
    }

    function pz() {
      return (0, lT.jsx)("span", {
        className: "SmpLoader",
        children: (0, lT.jsx)(OT.c, {})
      })
    }

    function Bz(TT) {
      let {
        value: UT,
        onChange: mT,
        min: zT = 1,
        max: MT,
        step: gT = 1,
        label: nT
      } = TT;
      const HT = (0, WT.useRef)(null),
        kT = (0, WT.useRef)(UT);
      kT.current = UT;
      const [jT, LT] = (0, WT.useState)(null), pT = TT => Math.max(zT, Math.min(MT, Math.floor(TT))), BT = TT => {
        const UT = kT.current,
          WT = "function" === typeof gT ? gT(UT, TT) : gT,
          zT = pT(UT + WT * TT);
        kT.current = zT, mT(zT)
      };
      (0, WT.useEffect)((() => {
        if (null === jT) return;
        let TT;
        const UT = () => {
            LT(null)
          },
          mT = setTimeout((() => {
            TT = setInterval((() => {
              BT(jT);
              const TT = kT.current;
              (jT > 0 ? TT >= MT : TT <= zT) && UT()
            }), 70)
          }), 380);
        return window.addEventListener("pointerup", UT), window.addEventListener("pointercancel", UT), window.addEventListener("blur", UT), () => {
          clearTimeout(mT), clearInterval(TT), window.removeEventListener("pointerup", UT), window.removeEventListener("pointercancel", UT), window.removeEventListener("blur", UT)
        }
      }), [jT]), (0, WT.useEffect)((() => {
        const TT = HT.current;
        TT && document.activeElement !== TT && TT.value !== String(UT) && (TT.value = String(UT))
      }), [UT]), (0, WT.useEffect)((() => {
        const TT = HT.current;
        if (!TT) return;
        const UT = () => {
          TT.value = String(kT.current)
        };
        return TT.addEventListener("blur", UT), () => {
          TT.removeEventListener("blur", UT)
        }
      }), []);
      const ZT = TT => (0, lT.jsx)("button", {
        type: "button",
        className: "SmpStepButton",
        "aria-label": `${TT>0?"More":"Less"} ${nT}`,
        disabled: TT > 0 ? UT >= MT : UT <= zT,
        onPointerDown: UT => {
          0 === UT.button && (BT(TT), LT(TT))
        },
        onKeyDown: UT => {
          "Enter" !== UT.key && " " !== UT.key || BT(TT)
        },
        onContextMenu: TT => {
          TT.preventDefault()
        },
        children: TT > 0 ? "+" : "\u2212"
      });
      return (0, lT.jsxs)("div", {
        className: "SmpStepper",
        children: [ZT(-1), (0, lT.jsx)(bT.e, {
          className: "SmpStepperInput",
          domRef: HT,
          defaultValue: String(UT),
          ariaLabel: nT,
          type: "text",
          blurOnEnter: !0,
          onValueChange: TT => {
            const UT = TT.replace(/[^\d]/g, "");
            HT.current && UT !== TT && (HT.current.value = UT), "" !== UT && mT(pT(Number(UT)))
          }
        }), ZT(1)]
      })
    }

    function Zz(TT) {
      return Math.max(1, 10 ** Math.max(0, Math.floor(Math.log10(Math.max(1, TT))) - 1))
    }
    var cz = mT(34291),
      vz = mT(1336);
    const fz = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"];
    vz.v, PT._c.length;
    new Map;
    var qz = mT(3411);

    function iz(TT, UT) {
      var mT;
      return UT && (null === (mT = TT[UT]) || void 0 === mT ? void 0 : mT.smp) || null
    }

    function bz(TT, UT) {
      const mT = [];
      for (const zT of mz(TT)) {
        var WT;
        const MT = TT[zT];
        (null === (WT = MT.smp) || void 0 === WT ? void 0 : WT.kind) === UT && mT.push({
          key: zT,
          item: MT,
          meta: MT.smp
        })
      }
      return mT
    }

    function Oz(TT, UT) {
      var mT;
      return null !== (mT = bz(TT, UT)[0]) && void 0 !== mT ? mT : null
    }
    const ez = "50% 0% 50% 0%",
      Yz = [{
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

    function Jz(TT) {
      const UT = TT - (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now());
      for (const {
          divisor: mT,
          suffix: WT
        }
        of Yz)
        if (UT >= mT) return `${Math.floor(UT/mT)}${WT}`;
      return "<1s"
    }

    function xz(TT) {
      const UT = TT.map(KW.g),
        mT = [];
      return UT.forEach(((TT, WT) => {
        const zT = function(TT) {
            const UT = TT.match(/\d+/);
            return UT ? Number(UT[0]) : 0
          }(TT),
          MT = WT === UT.length - 1;
        (MT || 1 === zT || 10 === zT || 100 === zT) && mT.push({
          label: TT,
          quantity: zT,
          isAll: MT
        })
      })), mT
    }
    let dz = null;

    function wz(TT, UT) {
      const mT = UT.trim().toLowerCase();
      if (!mT) return [];
      const WT = TT => {
          if (TT === mT) return 0;
          if (TT.startsWith(mT)) return 1;
          const UT = TT.indexOf(mT);
          return -1 === UT ? -1 : 2 + UT
        },
        zT = [];
      for (const nT of TT) {
        const TT = [WT(nT.lowerLabel), WT(nT.lowerName)].filter((TT => -1 !== TT));
        TT.length && zT.push({
          item: nT,
          rank: Math.min(...TT)
        })
      }
      if (zT.length > 0) return zT.sort(((TT, UT) => TT.rank - UT.rank)).map((TT => TT.item));
      const MT = [...mT],
        gT = TT => {
          let UT = 0;
          for (const mT of MT) {
            if (UT = TT.indexOf(mT, UT), -1 === UT) return !1;
            UT++
          }
          return !0
        };
      return TT.filter((TT => gT(TT.lowerLabel) || gT(TT.lowerName)))
    }

    function tz(TT, UT) {
      var mT;
      return null !== (mT = null === TT || void 0 === TT ? void 0 : TT[UT]) && void 0 !== mT ? mT : UT
    }

    function az(TT, UT) {
      const mT = TT.userInput;
      return void 0 !== UT && "dropdown" === (null === mT || void 0 === mT ? void 0 : mT.type) && mT.dropdownOptions.map(KW.g).includes(UT) ? UT : function(TT) {
        const UT = TT.userInput;
        if ("dropdown" !== (null === UT || void 0 === UT ? void 0 : UT.type) || 0 === UT.dropdownOptions.length) return null;
        const mT = UT.dropdownOptions.map(KW.g);
        return UT.initialValue && mT.includes(UT.initialValue) ? UT.initialValue : mT[mT.length - 1]
      }(TT)
    }

    function yz(TT) {
      return void 0 === TT ? "" : JSON.stringify(TT)
    }
    const Xz = (0, WT.createContext)(null);

    function Iz() {
      return (0, WT.useContext)(Xz)
    }
    var Qz = mT(2810);
    const sz = (0, WT.memo)((function(TT) {
        let {
          name: UT,
          label: mT,
          onPick: WT
        } = TT;
        return (0, lT.jsxs)("button", {
          type: "button",
          className: "SmpCatalogueTile",
          title: mT,
          onClick: () => {
            WT(UT)
          },
          children: [(0, lT.jsx)(nz, {
            item: UT,
            size: "big"
          }), (0, lT.jsx)("span", {
            children: mT
          })]
        })
      })),
      Fz = (0, WT.memo)((function(TT) {
        let {
          items: UT,
          query: mT,
          onPick: zT
        } = TT;
        const {
          t: MT
        } = (0, gT.z)(), [nT, HT] = (0, WT.useState)(new Set), kT = (0, WT.useMemo)((() => function(TT) {
          const UT = new Map;
          for (const mT of TT) {
            let TT = UT.get(mT.category);
            TT || (TT = [], UT.set(mT.category, TT)), TT.push(mT)
          }
          return [...fz, "other"].filter((TT => UT.has(TT))).map((TT => ({
            category: TT,
            items: UT.get(TT)
          })))
        }(UT)), [UT]), jT = (0, WT.useMemo)((() => wz(UT, mT).slice(0, 60)), [UT, mT]);
        return mT.trim() ? 0 === jT.length ? (0, lT.jsx)(jz, {
          title: MT("smpShop:noItemsFound", {
            query: mT.trim()
          }),
          children: MT("smpShop:tryShorterName")
        }) : (0, lT.jsx)(Qz.c, {
          lazyLoadedClassName: "SmpCatalogueGrid",
          observerRoot: "SmpBody",
          rootMargin: ez,
          observerUpdateDeps: [mT],
          children: jT.map((TT => (0, lT.jsx)(sz, {
            name: TT.name,
            label: TT.label,
            onPick: zT
          }, TT.name)))
        }) : (0, lT.jsx)(lT.Fragment, {
          children: kT.map((TT => {
            let {
              category: UT,
              items: mT
            } = TT;
            const WT = nT.has(UT) || mT.length <= 48,
              gT = WT ? mT : mT.slice(0, 48);
            return (0, lT.jsxs)("section", {
              className: "SmpCatalogueSection",
              children: [(0, lT.jsxs)("h4", {
                children: [MT("other" === UT ? "smpShop:otherItems" : `creativeInventory:${UT}`), !WT && (0, lT.jsx)("button", {
                  type: "button",
                  className: "SmpLink",
                  onClick: () => {
                    HT(new Set([...nT, UT]))
                  },
                  children: MT("smpShop:showAll", {
                    count: mT.length
                  })
                })]
              }), (0, lT.jsx)(Qz.c, {
                lazyLoadedClassName: "SmpCatalogueGrid",
                observerRoot: "SmpBody",
                rootMargin: ez,
                observerUpdateDeps: [WT],
                children: gT.map((TT => (0, lT.jsx)(sz, {
                  name: TT.name,
                  label: TT.label,
                  onPick: zT
                }, TT.name)))
              })]
            }, UT)
          }))
        })
      }));

    function Pz(TT, UT) {
      const {
        searched: mT,
        shown: zT,
        searchFor: MT,
        loading: gT
      } = function(TT, UT) {
        var mT;
        const zT = Iz(),
          [MT, gT] = (0, WT.useState)(void 0),
          nT = (0, WT.useRef)(void 0),
          HT = (0, WT.useRef)(0),
          kT = (0, WT.useRef)(void 0),
          jT = null !== (mT = null === TT || void 0 === TT ? void 0 : TT.meta.item) && void 0 !== mT ? mT : null,
          lT = !!TT && zT.isPending(TT.key);
        (0, WT.useEffect)((() => {
          if (!TT || lT || !UT || void 0 === MT || MT === jT) return;
          const mT = MT === nT.current && zT.gaveUpAt(TT.key) > HT.current && kT.current !== MT;
          (MT !== nT.current || mT) && zT.act(TT.key, null !== MT && void 0 !== MT ? MT : "*", mT) && (mT && (kT.current = MT), nT.current = MT, HT.current = Date.now())
        }), [TT, lT, UT, MT, jT, zT]);
        const LT = (0, WT.useCallback)((TT => {
            nT.current = void 0, kT.current = void 0, gT(TT)
          }), []),
          pT = void 0 !== MT && MT !== jT && (lT || nT.current !== MT);
        return {
          searched: jT,
          shown: pT ? MT : jT,
          searchFor: LT,
          loading: pT || lT || null !== jT && !UT
        }
      }(TT, UT), nT = (0, WT.useMemo)((() => function() {
        var TT;
        let UT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          mT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          WT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const zT = `${(0,qz.h)()}\x1f${UT.join("\x1e")}\x1f${mT.join("\x1e")}\x1f${JSON.stringify(WT)}`;
        if ((null === (TT = dz) || void 0 === TT ? void 0 : TT.key) === zT) return dz.items;
        const MT = new Set(mT),
          gT = new Set,
          nT = [],
          HT = (TT, UT) => {
            var mT;
            if (!TT || gT.has(TT) || MT.has(TT)) return;
            gT.add(TT);
            const zT = null !== (mT = WT[TT]) && void 0 !== mT ? mT : TT;
            nT.push({
              name: TT,
              label: zT,
              lowerLabel: zT.toLowerCase(),
              lowerName: TT.toLowerCase(),
              category: UT
            })
          };
        for (const jT of (0, cz.creativeItemIds)()) {
          var kT;
          (0, cz.itemIsDisabled)(jT, !0, !0, !1) || (0, cz.showOnlyInCreativeSearch)(jT) || HT((0, qz.f)(jT), null !== (kT = (0, cz.creativeCategoryOf)(jT)) && void 0 !== kT ? kT : "other")
        }
        for (const jT of UT) HT(jT, "other");
        return dz = {
          key: zT,
          items: nT
        }, nT
      }(null === TT || void 0 === TT ? void 0 : TT.meta.extra, null === TT || void 0 === TT ? void 0 : TT.meta.excluded, null === TT || void 0 === TT ? void 0 : TT.meta.names)), [null === TT || void 0 === TT ? void 0 : TT.meta.extra, null === TT || void 0 === TT ? void 0 : TT.meta.excluded, null === TT || void 0 === TT ? void 0 : TT.meta.names]), [HT, kT] = (0, WT.useState)(""), [jT, lT] = (0, WT.useState)(0), [LT, pT] = (0, WT.useState)("recent"), BT = (0, WT.useCallback)((TT => {
        kT(""), lT((TT => TT + 1)), MT(TT)
      }), [MT]), ZT = "browse" === LT || "" !== HT.trim();
      return {
        searched: mT,
        shown: zT,
        searchFor: MT,
        loading: gT,
        catalogue: nT,
        names: null === TT || void 0 === TT ? void 0 : TT.meta.names,
        query: HT,
        setQuery: kT,
        searchBoxKey: jT,
        pickItem: BT,
        setView: pT,
        browsing: ZT
      }
    }

    function Vz(TT) {
      let {
        browser: UT,
        children: mT
      } = TT;
      const {
        t: WT
      } = (0, gT.z)(), zT = Iz();
      return (0, lT.jsxs)("div", {
        className: "SmpTopBar",
        children: [(0, lT.jsx)("div", {
          className: "SmpSearch",
          children: (0, lT.jsx)(bT.e, {
            className: "SmpSearchInput",
            placeholderText: WT("smpShop:searchPlaceholder"),
            defaultValue: UT.query,
            onValueChange: TT => {
              UT.setQuery(TT), UT.searched && TT.trim() && UT.searchFor(null)
            },
            blurOnEnter: !0,
            onEnter: () => {
              const TT = wz(UT.catalogue, UT.query)[0];
              TT ? UT.pickItem(TT.name) : UT.query.trim() && zT.notify(WT("smpShop:noItemsFound", {
                query: UT.query.trim()
              }))
            }
          }, UT.searchBoxKey)
        }), mT]
      })
    }

    function uz(TT) {
      let {
        browser: UT,
        recentLabel: mT,
        children: WT
      } = TT;
      const {
        t: zT
      } = (0, gT.z)();
      return (0, lT.jsxs)("div", {
        className: "SmpViewBar",
        children: [(0, lT.jsx)(Lz, {
          options: [{
            value: "recent",
            label: mT
          }, {
            value: "browse",
            label: zT("smpShop:browseItems")
          }],
          value: UT.browsing ? "browse" : "recent",
          onChange: UT.setView,
          ariaLabel: zT("smpShop:show")
        }), !UT.browsing && WT]
      })
    }

    function Cz(TT) {
      let {
        item: UT,
        names: mT,
        summary: WT,
        onBack: zT,
        children: MT
      } = TT;
      const {
        t: nT
      } = (0, gT.z)();
      return (0, lT.jsxs)("div", {
        className: "SmpItemHeader",
        children: [(0, lT.jsx)(kT.d, {
          className: "SmpBackButton",
          onClick: zT,
          children: nT("general:back")
        }), (0, lT.jsx)(nz, {
          item: UT,
          size: "big"
        }), (0, lT.jsxs)("div", {
          className: "SmpItemHeaderText",
          children: [(0, lT.jsx)("b", {
            children: tz(mT, UT)
          }), WT && (0, lT.jsx)("small", {
            children: WT
          })]
        }), MT]
      })
    }

    function rz(TT) {
      let {
        browser: UT,
        className: mT,
        action: WT,
        above: zT,
        list: gT,
        summary: nT,
        recentLabel: HT,
        listControls: kT,
        onBack: jT
      } = TT;
      return (0, lT.jsxs)("div", {
        className: MT()("SmpScreen", mT),
        children: [(0, lT.jsx)(Vz, {
          browser: UT,
          children: WT
        }), UT.shown && (0, lT.jsx)(Cz, {
          item: UT.shown,
          names: UT.names,
          summary: !UT.loading && nT,
          onBack: () => {
            null === jT || void 0 === jT || jT(), UT.searchFor(null)
          },
          children: kT
        }), zT, UT.shown ? gT : (0, lT.jsxs)(lT.Fragment, {
          children: [(0, lT.jsx)(uz, {
            browser: UT,
            recentLabel: HT,
            children: kT
          }), UT.browsing ? (0, lT.jsx)(Fz, {
            items: UT.catalogue,
            query: UT.query,
            onPick: UT.pickItem
          }) : gT]
        })]
      })
    }

    function Kz(TT, UT) {
      const mT = TT.map((TT => {
        let {
          meta: UT
        } = TT;
        return UT.pricePerItem
      }));
      return "min" === UT ? Math.min(...mT) : Math.max(...mT)
    }
    var Sz = mT(6648);
    const Gz = (0, WT.memo)((function(TT) {
      var UT;
      const {
        t: mT
      } = (0, gT.z)(), WT = null === TT.seller, zT = TT.quantity * TT.pricePerItem;
      return (0, lT.jsxs)("div", {
        className: TT.grid ? "SmpListingCard" : "SmpRow SmpListingRow",
        children: [(0, lT.jsx)(nz, {
          item: TT.item,
          amount: TT.quantity,
          size: TT.grid ? "big" : "normal",
          tier: TT.tier
        }), (0, lT.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, lT.jsx)("b", {
            children: (0, lT.jsx)(EW.e, {
              text: null !== (UT = TT.title) && void 0 !== UT ? UT : `${TT.quantity}x ${TT.item}`
            })
          }), (0, lT.jsxs)("small", {
            className: "SmpListingFacts",
            children: [(0, lT.jsx)("span", {
              children: WT ? mT("smpShop:you") : (0, lT.jsx)(EW.e, {
                text: [{
                  entityName: TT.seller
                }]
              })
            }), (0, lT.jsx)("span", {
              children: mT("smpShop:timeLeft", {
                time: Jz(TT.expiresAt)
              })
            })]
          })]
        }), (0, lT.jsxs)("div", {
          className: "SmpRowPrice",
          children: [(0, lT.jsx)(Hz, {
            amount: TT.pricePerItem
          }), (0, lT.jsx)("small", {
            children: mT("smpShop:each")
          })]
        }), (0, lT.jsx)(kT.e, {
          className: "SmpBuyButton",
          disabled: WT || !TT.canAfford && !TT.busy,
          loading: TT.busy,
          onClick: () => {
            TT.onBuy(TT.itemKey)
          },
          children: WT ? mT("smpShop:yours") : (0, lT.jsx)(Hz, {
            amount: zT
          })
        })]
      })
    }));

    function Nz(TT) {
      let {
        view: UT,
        onChange: mT
      } = TT;
      const {
        t: WT
      } = (0, gT.z)();
      return (0, lT.jsx)(Mz.c, {
        className: "SmpChoice SmpViewToggle",
        ariaLabel: WT("smpShop:layout"),
        options: [{
          value: "list",
          label: (0, lT.jsx)(nT.c, {
            name: "list"
          }),
          ariaLabel: WT("smpShop:listView")
        }, {
          value: "grid",
          label: (0, lT.jsx)(nT.c, {
            name: "grid-2"
          }),
          ariaLabel: WT("smpShop:gridView")
        }],
        value: UT,
        onChange: mT
      })
    }

    function Ez(TT) {
      let {
        entries: UT,
        view: mT
      } = TT;
      const {
        t: WT
      } = (0, gT.z)(), zT = Iz(), MT = "grid" === mT;
      return (0, lT.jsxs)(lT.Fragment, {
        children: [!MT && (0, lT.jsxs)("div", {
          className: "SmpColumns",
          "aria-hidden": "true",
          children: [(0, lT.jsx)("span", {}), (0, lT.jsx)("span", {
            children: WT("smpShop:columnItem")
          }), (0, lT.jsx)("span", {
            children: WT("smpShop:columnPriceEach")
          }), (0, lT.jsx)("span", {
            children: WT("smpShop:columnTotal")
          })]
        }), (0, lT.jsx)(Qz.c, {
          lazyLoadedClassName: MT ? "SmpCardGrid" : "SmpList",
          observerRoot: "SmpBody",
          rootMargin: ez,
          observerUpdateDeps: [UT.length],
          children: UT.map((TT => {
            var UT, mT;
            let {
              key: WT,
              item: gT,
              meta: nT
            } = TT;
            const HT = nT.quantity * nT.pricePerItem;
            return (0, lT.jsx)(Gz, {
              itemKey: WT,
              item: nT.item,
              title: gT.customTitle,
              quantity: nT.quantity,
              pricePerItem: nT.pricePerItem,
              seller: nT.seller,
              expiresAt: nT.expiresAt,
              tier: null !== (UT = null === (mT = gT.enchant) || void 0 === mT ? void 0 : mT.tier) && void 0 !== UT ? UT : null,
              busy: zT.isPending(WT) || null !== nT.seller && !1 === gT.canBuy,
              canAfford: zT.canAfford(gT, HT),
              grid: MT,
              onBuy: zT.act
            }, WT)
          }))
        }, mT)]
      })
    }
    const hz = [1, 10, 100],
      Dz = [1, 10, 100, 999];

    function oz(TT) {
      var UT, mT, zT, HT, jT, LT, pT, BT, ZT, cT;
      const {
        t: vT
      } = (0, gT.z)(), fT = Iz(), {
        creator: qT,
        mode: iT
      } = TT, [OT, eT] = (0, WT.useState)(null !== (UT = null === qT || void 0 === qT ? void 0 : qT.meta.item) && void 0 !== UT ? UT : null), [YT, JT] = (0, WT.useState)(1), [xT, dT] = (0, WT.useState)(0), [wT, tT] = (0, WT.useState)(""), [aT, yT] = (0, WT.useState)(0), XT = (0, WT.useRef)(OT), IT = (0, WT.useRef)(!1), [QT, sT] = (0, WT.useState)(!1), FT = null !== (mT = null === qT || void 0 === qT ? void 0 : qT.meta.item) && void 0 !== mT ? mT : null, PT = null !== (zT = null === qT || void 0 === qT ? void 0 : qT.meta.owned) && void 0 !== zT ? zT : 0;
      (0, WT.useEffect)((() => {
        TT.searching || null === FT || FT === XT.current || (XT.current = FT, IT.current = !1, eT(FT), dT(0), JT("list" === iT ? Math.max(1, PT) : 1))
      }), [FT, TT.searching]);
      const VT = !!qT && !!OT && qT.meta.item === OT,
        uT = VT ? qT.meta.owned : null !== (HT = null === (jT = TT.inventory) || void 0 === jT || null === (LT = jT.find((TT => TT.item === OT))) || void 0 === LT ? void 0 : LT.quantity) && void 0 !== HT ? HT : 0,
        CT = "list" === iT ? Math.max(1, uT) : 45954,
        rT = null !== (pT = TT.prices[0]) && void 0 !== pT ? pT : null,
        KT = TT.prices.length ? Math.round(TT.prices.reduce(((TT, UT) => TT + UT), 0) / TT.prices.length) : null,
        ST = null === (BT = TT.inventory) || void 0 === BT || null === (ZT = BT.find((TT => TT.item === OT))) || void 0 === ZT ? void 0 : ZT.sellPrice;
      (0, WT.useEffect)((() => {
        var TT;
        VT && (JT((TT => "list" === iT ? Math.min(Math.max(1, TT), Math.max(1, uT)) : TT)), IT.current || dT(null !== (TT = null !== rT && void 0 !== rT ? rT : KT) && void 0 !== TT ? TT : Math.max(1, null !== ST && void 0 !== ST ? ST : 1)))
      }), [VT, uT, OT, rT, KT]);
      const GT = TT => {
          IT.current = !0, dT(TT)
        },
        NT = UT => {
          var mT, WT, zT;
          XT.current = UT, IT.current = !1, sT(!1), tT(""), yT((TT => TT + 1)), eT(UT), dT(0), JT("list" === iT && null !== (mT = null === (WT = TT.inventory) || void 0 === WT || null === (zT = WT.find((TT => TT.item === UT))) || void 0 === zT ? void 0 : zT.quantity) && void 0 !== mT ? mT : 1), (null === qT || void 0 === qT ? void 0 : qT.meta.item) !== UT && TT.onPickItem(UT)
        },
        ET = YT * xT,
        hT = "list" === iT && null !== qT && void 0 !== qT && qT.meta.fee ? function(TT, UT) {
          const mT = Math.max(0, UT - TT.taxFreeAllowance);
          return Math.ceil(Math.round(mT * TT.rate * 1e6) / 1e6)
        }(qT.meta.fee, ET) : 0,
        DT = !!qT && fT.isPending(qT.key),
        oT = VT && !TT.searching && YT >= 1 && xT >= 1 && ("order" === iT || uT >= YT) && !DT,
        AT = !!OT && !VT && !TT.searching && YT >= 1 && xT >= 1,
        RT = () => {
          oT ? fT.act(qT.key, `${YT}|${xT}`) : AT && (TT.onPickItem(OT), sT(!0))
        };
      (0, WT.useEffect)((() => {
        QT && VT && !TT.searching && (sT(!1), RT())
      }), [QT, VT, TT.searching]);
      const TU = !!OT && !VT && (TT.searching || QT),
        UU = OT ? tz(TT.names, OT) : "",
        mU = (0, WT.useMemo)((() => wz(TT.catalogue, wT).slice(0, 8)), [TT.catalogue, wT]),
        WU = ("list" === iT ? hz.filter((TT => TT < uT)) : Dz).map((TT => ({
          value: TT,
          label: String(TT)
        })));
      "list" === iT && uT > 0 && WU.push({
        value: uT,
        label: vT("smpShop:all", {
          count: uT
        })
      });
      const zU = [];
      return null !== rT && (rT > 1 && zU.push({
        value: rT - 1,
        label: vT("smpShop:undercut", {
          price: zz(rT - 1)
        })
      }), zU.push({
        value: rT,
        label: vT("smpShop:lowest", {
          price: zz(rT)
        })
      })), null !== KT && KT !== rT && zU.push({
        value: KT,
        label: vT("smpShop:average", {
          price: zz(KT)
        })
      }), (0, lT.jsxs)("div", {
        className: "SmpTradeForm",
        children: [(0, lT.jsxs)("div", {
          className: "SmpTradeFormHead",
          children: [(0, lT.jsx)("b", {
            children: vT("list" === iT ? "smpShop:sellOnMarket" : "smpShop:createOrder")
          }), (0, lT.jsx)("button", {
            type: "button",
            className: "SmpIconButton",
            "aria-label": vT("smpShop:close"),
            onClick: TT.onClose,
            children: (0, lT.jsx)(nT.c, {
              name: "xmark"
            })
          })]
        }), "list" === iT && (0, lT.jsx)("div", {
          className: "SmpPicker",
          role: "listbox",
          children: null !== (cT = TT.inventory) && void 0 !== cT && cT.length ? TT.inventory.map((TT => {
            let {
              item: UT,
              quantity: mT
            } = TT;
            return (0, lT.jsx)("button", {
              type: "button",
              title: UT,
              className: MT()("SmpPickerSlot", {
                SmpPickerSlotOn: UT === OT
              }),
              onClick: () => {
                NT(UT)
              },
              children: (0, lT.jsx)(nz, {
                item: UT,
                amount: mT
              })
            }, UT)
          })) : (0, lT.jsx)("span", {
            className: "SmpMuted",
            children: vT("smpShop:nothingToList")
          })
        }), ("list" === iT || !OT) && (0, lT.jsxs)("div", {
          className: "SmpItemSearch",
          children: [(0, lT.jsx)(bT.e, {
            className: "SmpSearchInput",
            placeholderText: vT("list" === iT ? "smpShop:listSearchPlaceholder" : "smpShop:orderSearchPlaceholder"),
            defaultValue: wT,
            onValueChange: tT,
            blurOnEnter: !0,
            onEnter: () => {
              mU[0] && NT(mU[0].name)
            }
          }, aT), mU.length > 0 && (0, lT.jsx)("div", {
            className: "SmpPicker",
            children: mU.map((TT => {
              let {
                name: UT
              } = TT;
              return (0, lT.jsx)("button", {
                type: "button",
                title: UT,
                className: MT()("SmpPickerSlot", {
                  SmpPickerSlotOn: UT === OT
                }),
                onClick: () => {
                  NT(UT)
                },
                children: (0, lT.jsx)(nz, {
                  item: UT
                })
              }, UT)
            }))
          })]
        }), OT && (0, lT.jsxs)(lT.Fragment, {
          children: [(0, lT.jsxs)("div", {
            className: "SmpPickedName",
            children: [UU, TU && (0, lT.jsx)(pz, {})]
          }), (0, lT.jsxs)("div", {
            className: "SmpFormGrid",
            children: [(0, lT.jsxs)("div", {
              className: "SmpField",
              children: [(0, lT.jsxs)("span", {
                children: [vT("smpShop:quantity"), "list" === iT && VT && (0, lT.jsx)("small", {
                  children: vT("smpShop:youHave", {
                    count: uT
                  })
                })]
              }), (0, lT.jsx)(Bz, {
                value: YT,
                onChange: JT,
                max: CT,
                label: vT("smpShop:quantity")
              }), (0, lT.jsx)(Lz, {
                options: WU,
                value: YT,
                onChange: JT,
                ariaLabel: vT("smpShop:quantity")
              })]
            }), (0, lT.jsxs)("div", {
              className: "SmpField",
              children: [(0, lT.jsx)("span", {
                children: vT("smpShop:pricePerItem")
              }), (0, lT.jsx)(Bz, {
                value: Math.max(1, xT),
                onChange: GT,
                max: 9999999,
                step: Zz,
                label: vT("smpShop:pricePerItem")
              }), (0, lT.jsx)(Lz, {
                options: zU,
                value: xT,
                onChange: GT,
                ariaLabel: vT("smpShop:pricePerItem")
              })]
            })]
          }), "list" === iT && (0, lT.jsxs)("div", {
            className: "SmpTradeSummary",
            children: [(0, lT.jsxs)("span", {
              children: [vT("smpShop:youGet"), " ", (0, lT.jsx)(Hz, {
                amount: Math.max(0, ET - hT),
                exact: !0
              })]
            }), (0, lT.jsx)("small", {
              children: hT > 0 ? vT("smpShop:listingFee", {
                fee: hT.toLocaleString("en-US")
              }) : vT("smpShop:listingRules")
            })]
          }), (0, lT.jsx)(kT.s, {
            className: "SmpSubmit",
            disabled: !oT && !AT && !DT,
            loading: DT || TU || VT && TT.searching,
            onClick: RT,
            children: "list" === iT ? vT("smpShop:listButton", {
              count: YT,
              item: UU
            }) : (0, lT.jsxs)(lT.Fragment, {
              children: [vT("smpShop:orderButton", {
                count: YT,
                item: UU
              }), " ", xT >= 1 && (0, lT.jsx)(Hz, {
                amount: ET
              })]
            })
          })]
        })]
      })
    }

    function Az() {
      var TT;
      const {
        t: UT
      } = (0, gT.z)(), mT = Iz(), zT = null === (TT = mT.shopInfo[mT.categoryKey]) || void 0 === TT ? void 0 : TT.items, MT = Oz(zT, "search"), nT = Oz(zT, "creator"), HT = bz(zT, "enchantedCreator"), jT = bz(zT, "listing"), LT = Oz(zT, "empty"), pT = Pz(MT, jT.length > 0 || null !== LT), {
        searched: BT,
        shown: ZT,
        loading: cT
      } = pT, [vT, fT] = (0, WT.useState)(!1), [qT, iT] = function() {
        const [TT, UT] = (0, Sz.b)("smpMarketView", "list");
        return ["grid" === TT ? "grid" : "list", UT]
      }(), bT = "grid" === qT, OT = (0, WT.useMemo)((() => jT.filter((TT => {
        let {
          meta: UT
        } = TT;
        return null !== UT.seller && UT.item === BT
      })).map((TT => {
        let {
          meta: UT
        } = TT;
        return UT.pricePerItem
      })).sort(((TT, UT) => TT - UT))), [jT, BT]), eT = (0, WT.useMemo)((() => {
        const TT = new Set(pT.catalogue.map((TT => {
          let {
            name: UT
          } = TT;
          return UT
        })));
        return function(TT) {
          for (const UT in TT)
            if ("sell" === TT[UT].smp) return bz(TT[UT].items, "sell").filter((TT => {
              let {
                item: UT
              } = TT;
              return !UT.enchant
            })).map((TT => {
              let {
                meta: UT
              } = TT;
              return {
                item: UT.item,
                quantity: UT.quantity,
                sellPrice: UT.pricePerItem
              }
            }));
          return []
        }(mT.shopInfo).filter((UT => {
          let {
            item: mT
          } = UT;
          return TT.has(mT)
        }))
      }), [mT.shopInfo, pT.catalogue]);
      return (0, lT.jsx)(rz, {
        browser: pT,
        className: "SmpMarketTab",
        recentLabel: UT("smpShop:recentlyListed"),
        action: (0, lT.jsx)(kT.s, {
          className: "SmpSellButton",
          onClick: () => {
            fT((TT => !TT))
          },
          children: UT("smpShop:sell")
        }),
        above: vT && (0, lT.jsxs)(lT.Fragment, {
          children: [(0, lT.jsx)(oz, {
            mode: "list",
            creator: nT,
            inventory: eT,
            catalogue: pT.catalogue,
            names: pT.names,
            searching: cT,
            prices: OT,
            onPickItem: pT.searchFor,
            onClose: () => {
              fT(!1)
            }
          }), HT.length > 0 && (0, lT.jsx)(Rz, {
            entries: HT
          })]
        }),
        listControls: (0, lT.jsx)(Nz, {
          view: qT,
          onChange: iT
        }),
        summary: ZT && (jT.length > 0 ? UT(1 === jT.length ? "smpShop:listingSummaryOne" : "smpShop:listingSummary", {
          count: jT.length,
          price: zz(Kz(jT, "min"))
        }) : UT("smpShop:noOneSelling", {
          item: tz(pT.names, ZT)
        })),
        list: cT ? (0, lT.jsx)(kz, {
          grid: bT
        }) : jT.length > 0 ? (0, lT.jsx)(Ez, {
          entries: jT,
          view: qT
        }) : LT ? (0, lT.jsx)(lz, {
          entry: LT
        }) : (0, lT.jsx)(kz, {
          count: 3,
          grid: bT
        })
      })
    }

    function Rz(TT) {
      let {
        entries: UT
      } = TT;
      const {
        t: mT
      } = (0, gT.z)(), zT = Iz(), [MT, nT] = (0, WT.useState)({});
      return (0, lT.jsx)("div", {
        className: "SmpList",
        children: UT.map((TT => {
          var UT, WT, gT;
          let {
            key: HT,
            item: jT,
            meta: LT
          } = TT;
          const pT = null !== (UT = MT[HT]) && void 0 !== UT ? UT : 1;
          return (0, lT.jsxs)("div", {
            className: "SmpRow",
            children: [(0, lT.jsx)(nz, {
              item: LT.item,
              amount: LT.quantity,
              tier: null !== (WT = null === (gT = jT.enchant) || void 0 === gT ? void 0 : gT.tier) && void 0 !== WT ? WT : null
            }), (0, lT.jsxs)("div", {
              className: "SmpRowText",
              children: [(0, lT.jsx)("b", {
                children: (0, lT.jsx)(EW.e, {
                  text: jT.customTitle
                })
              }), (0, lT.jsx)("small", {
                children: mT("smpShop:enchantedListing")
              })]
            }), (0, lT.jsx)(Bz, {
              value: pT,
              onChange: TT => {
                nT({
                  ...MT,
                  [HT]: TT
                })
              },
              max: 9999999,
              step: Zz,
              label: mT("smpShop:pricePerItem")
            }), (0, lT.jsxs)(kT.s, {
              loading: zT.isPending(HT),
              onClick: () => {
                zT.act(HT, String(pT))
              },
              children: [mT("smpShop:list"), " ", (0, lT.jsx)(Hz, {
                amount: pT
              })]
            })]
          }, HT)
        }))
      })
    }
    const TM = (0, WT.memo)((function(TT) {
      let {
        itemKey: UT,
        item: mT,
        quantity: WT,
        pricePerItem: zT,
        tier: gT,
        selected: nT,
        onSelect: HT
      } = TT;
      return (0, lT.jsxs)("button", {
        type: "button",
        className: MT()("SmpInventorySlot", {
          SmpInventorySlotOn: nT
        }),
        title: mT,
        onClick: () => {
          HT(UT)
        },
        children: [(0, lT.jsx)(nz, {
          item: mT,
          amount: WT,
          tier: gT
        }), (0, lT.jsx)(Hz, {
          amount: zT
        })]
      })
    }));

    function UM() {
      var TT;
      const {
        t: UT
      } = (0, gT.z)(), mT = Iz(), zT = null === (TT = mT.shopInfo[mT.categoryKey]) || void 0 === TT ? void 0 : TT.items, nT = bz(zT, "sell"), HT = Oz(zT, "empty"), [kT, jT] = (0, WT.useState)(null), [LT, pT] = (0, WT.useState)({}), BT = nT.find((TT => {
        let {
          key: UT
        } = TT;
        return UT === kT
      }));
      return 0 === nT.length ? (0, lT.jsx)("div", {
        className: "SmpScreen",
        children: (0, lT.jsx)(jz, {
          title: HT ? (0, lT.jsx)(EW.e, {
            text: HT.item.customTitle
          }) : UT("smpShop:nothingToSell"),
          children: HT && (0, lT.jsx)(EW.e, {
            text: HT.item.description
          })
        })
      }) : (0, lT.jsxs)("div", {
        className: "SmpScreen SmpInstantSellTab",
        children: [(0, lT.jsx)("div", {
          className: "SmpInventoryGrid",
          children: nT.map((TT => {
            var UT, mT;
            let {
              key: WT,
              item: zT,
              meta: MT
            } = TT;
            return (0, lT.jsx)(TM, {
              itemKey: WT,
              item: MT.item,
              quantity: MT.quantity,
              pricePerItem: MT.pricePerItem,
              tier: null !== (UT = null === (mT = zT.enchant) || void 0 === mT ? void 0 : mT.tier) && void 0 !== UT ? UT : null,
              selected: WT === kT,
              onSelect: jT
            }, WT)
          }))
        }), (0, lT.jsx)("div", {
          className: MT()("SmpSellBar", {
            SmpSellBarIdle: !BT
          }),
          children: BT ? (0, lT.jsx)(mM, {
            entry: BT,
            choice: az(BT.item, LT[BT.key]),
            onChoose: TT => {
              pT({
                ...LT,
                [BT.key]: TT
              })
            }
          }) : (0, lT.jsx)("span", {
            className: "SmpMuted",
            children: UT("smpShop:tapToSell")
          })
        })]
      })
    }

    function mM(TT) {
      var UT, mT, WT, zT;
      let {
        entry: MT,
        choice: nT,
        onChoose: HT
      } = TT;
      const {
        t: jT
      } = (0, gT.z)(), LT = Iz(), {
        key: pT,
        item: BT,
        meta: ZT
      } = MT, cT = xz("dropdown" === (null === (UT = BT.userInput) || void 0 === UT ? void 0 : UT.type) ? BT.userInput.dropdownOptions : []), vT = null === nT ? 0 : -(0, KW.e)(BT, nT);
      return (0, lT.jsxs)(lT.Fragment, {
        children: [(0, lT.jsx)(nz, {
          item: ZT.item,
          amount: ZT.quantity,
          tier: null !== (mT = null === (WT = BT.enchant) || void 0 === WT ? void 0 : WT.tier) && void 0 !== mT ? mT : null
        }), (0, lT.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, lT.jsx)("b", {
            children: (0, lT.jsx)(EW.e, {
              text: null !== (zT = BT.customTitle) && void 0 !== zT ? zT : ZT.item
            })
          }), (0, lT.jsx)("small", {
            children: jT("smpShop:sellEach", {
              count: ZT.quantity
            })
          })]
        }), (0, lT.jsx)(Lz, {
          options: cT.map((TT => {
            let {
              label: UT,
              quantity: mT,
              isAll: WT
            } = TT;
            return {
              value: UT,
              label: WT ? jT("smpShop:all", {
                count: mT
              }) : String(mT)
            }
          })),
          value: nT,
          onChange: HT,
          ariaLabel: jT("smpShop:quantity")
        }), (0, lT.jsxs)(kT.s, {
          loading: LT.isPending(pT),
          disabled: null === nT,
          onClick: () => {
            LT.act(pT, nT)
          },
          children: [jT("smpShop:sellButton"), " ", (0, lT.jsx)(Hz, {
            amount: vT
          })]
        })]
      })
    }

    function WM() {
      var TT;
      const {
        t: UT
      } = (0, gT.z)(), mT = Iz(), WT = null === (TT = mT.shopInfo[mT.categoryKey]) || void 0 === TT ? void 0 : TT.items, zT = bz(WT, "collect"), MT = bz(WT, "myListing"), nT = (TT, UT) => mT.isPending(TT) || !1 === UT.canBuy;
      return (0, lT.jsxs)("div", {
        className: "SmpScreen",
        children: [(0, lT.jsx)("h3", {
          className: "SmpSectionTitle",
          children: UT("smpShop:readyToCollect")
        }), zT.length > 0 ? (0, lT.jsx)("div", {
          className: "SmpList",
          children: zT.map((TT => {
            var WT, zT;
            let {
              key: MT,
              item: gT,
              meta: HT
            } = TT;
            return (0, lT.jsxs)("div", {
              className: "SmpRow",
              children: [(0, lT.jsx)(nz, {
                item: "sold" === HT.type ? "Gold Coin" : HT.item,
                amount: "sold" === HT.type ? 0 : HT.quantity,
                tier: null !== (WT = null === (zT = gT.enchant) || void 0 === zT ? void 0 : zT.tier) && void 0 !== WT ? WT : null
              }), (0, lT.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, lT.jsx)("b", {
                  children: (0, lT.jsx)(EW.e, {
                    text: gT.customTitle
                  })
                }), (0, lT.jsx)("small", {
                  children: (0, lT.jsx)(EW.e, {
                    text: gT.description
                  })
                })]
              }), (0, lT.jsx)(kT.l, {
                loading: nT(MT, gT),
                onClick: () => {
                  mT.act(MT)
                },
                children: UT("smpShop:collect")
              })]
            }, MT)
          }))
        }) : (0, lT.jsx)(jz, {
          title: UT("smpShop:nothingToCollect"),
          children: UT("smpShop:nothingToCollectHint")
        }), (0, lT.jsx)("h3", {
          className: "SmpSectionTitle",
          children: UT("smpShop:activeListings", {
            count: MT.length
          })
        }), MT.length > 0 ? (0, lT.jsx)("div", {
          className: "SmpList",
          children: MT.map((TT => {
            var WT, zT;
            let {
              key: MT,
              item: gT,
              meta: HT
            } = TT;
            return (0, lT.jsxs)("div", {
              className: "SmpRow",
              children: [(0, lT.jsx)(nz, {
                item: HT.item,
                amount: HT.quantity,
                tier: null !== (WT = null === (zT = gT.enchant) || void 0 === zT ? void 0 : zT.tier) && void 0 !== WT ? WT : null
              }), (0, lT.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, lT.jsx)("b", {
                  children: (0, lT.jsx)(EW.e, {
                    text: gT.customTitle
                  })
                }), (0, lT.jsx)("small", {
                  children: UT("smpShop:timeLeft", {
                    time: Jz(HT.expiresAt)
                  })
                })]
              }), (0, lT.jsxs)("div", {
                className: "SmpRowPrice",
                children: [(0, lT.jsx)(Hz, {
                  amount: HT.pricePerItem
                }), (0, lT.jsx)("small", {
                  children: UT("smpShop:each")
                })]
              }), (0, lT.jsx)(kT.I, {
                loading: nT(MT, gT),
                onClick: () => {
                  mT.act(MT)
                },
                children: UT("smpShop:cancel")
              })]
            }, MT)
          }))
        }) : (0, lT.jsx)(jz, {
          title: UT("smpShop:noActiveListings"),
          children: UT("smpShop:noActiveListingsHint")
        })]
      })
    }

    function zM(TT) {
      let {
        done: UT,
        of: mT
      } = TT;
      return (0, lT.jsx)("span", {
        className: "SmpProgress",
        children: (0, lT.jsx)("i", {
          style: {
            width: `${Math.min(100,UT/Math.max(1,mT)*100)}%`
          }
        })
      })
    }

    function MM(TT) {
      var UT, mT, WT;
      let {
        entry: zT,
        choice: MT,
        onChoose: nT
      } = TT;
      const {
        t: HT
      } = (0, gT.z)(), jT = Iz(), {
        key: LT,
        item: pT,
        meta: BT
      } = zT, ZT = "dropdown" === (null === (UT = pT.userInput) || void 0 === UT ? void 0 : UT.type) ? pT.userInput.dropdownOptions : [], cT = !0 === BT.processing, vT = null !== BT.creator && (BT.owned > 0 || cT), fT = vT && BT.owned > 0 ? xz(ZT) : [], qT = null === MT ? 0 : null !== (mT = null === (WT = fT.find((TT => TT.label === MT))) || void 0 === WT ? void 0 : WT.quantity) && void 0 !== mT ? mT : 0;
      return (0, lT.jsxs)("div", {
        className: "SmpRow SmpOrderRow",
        children: [(0, lT.jsx)(nz, {
          item: BT.item
        }), (0, lT.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, lT.jsx)("b", {
            children: (0, lT.jsx)(EW.e, {
              text: pT.customTitle
            })
          }), (0, lT.jsxs)("small", {
            children: [(0, lT.jsx)(Hz, {
              amount: BT.pricePerItem
            }), " ", HT("smpShop:each"), " \xb7", " ", null === BT.creator ? HT("smpShop:you") : (0, lT.jsx)(EW.e, {
              text: [{
                entityName: BT.creator
              }]
            })]
          }), (0, lT.jsx)(zM, {
            done: BT.delivered,
            of: BT.wanted
          })]
        }), vT ? (0, lT.jsxs)(lT.Fragment, {
          children: [(0, lT.jsx)(Lz, {
            options: fT.map((TT => {
              let {
                label: UT,
                quantity: mT,
                isAll: WT
              } = TT;
              return {
                value: UT,
                label: WT ? HT("smpShop:max", {
                  count: mT
                }) : String(mT)
              }
            })),
            value: MT,
            onChange: nT,
            ariaLabel: HT("smpShop:quantity")
          }), (0, lT.jsxs)(kT.s, {
            loading: jT.isPending(LT) || cT,
            disabled: null === MT,
            onClick: () => {
              jT.act(LT, MT)
            },
            children: [HT("smpShop:deliver"), " ", (0, lT.jsx)(Hz, {
              amount: qT * BT.pricePerItem
            })]
          })]
        }) : (0, lT.jsx)("span", {
          className: "SmpMuted SmpRowNote",
          children: null === BT.creator ? HT("smpShop:yourOrder") : HT("smpShop:youHave", {
            count: 0
          })
        })]
      })
    }

    function gM() {
      var TT;
      const {
        t: UT
      } = (0, gT.z)(), mT = Iz(), zT = null === (TT = mT.shopInfo[mT.categoryKey]) || void 0 === TT ? void 0 : TT.items, MT = Oz(zT, "search"), nT = Oz(zT, "creator"), HT = bz(zT, "order"), jT = Oz(zT, "empty"), LT = Pz(MT, HT.length > 0 || null !== jT), [pT, BT] = (0, WT.useState)(!1), [ZT, cT] = (0, WT.useState)({});
      return (0, lT.jsx)(rz, {
        browser: LT,
        recentLabel: UT("smpShop:recentOrders"),
        action: (0, lT.jsx)(kT.s, {
          onClick: () => {
            BT((TT => !TT))
          },
          children: UT("smpShop:createOrder")
        }),
        above: pT && (0, lT.jsx)(oz, {
          mode: "order",
          creator: nT,
          catalogue: LT.catalogue,
          names: LT.names,
          searching: LT.loading,
          prices: [],
          onPickItem: LT.searchFor,
          onClose: () => {
            BT(!1)
          }
        }),
        onBack: () => {
          BT(!1)
        },
        summary: HT.length > 0 && UT(1 === HT.length ? "smpShop:orderSummaryOne" : "smpShop:orderSummary", {
          count: HT.length,
          price: zz(Kz(HT, "max"))
        }),
        list: LT.loading ? (0, lT.jsx)(kz, {}) : HT.length > 0 ? (0, lT.jsx)(Qz.c, {
          lazyLoadedClassName: "SmpList",
          observerRoot: "SmpBody",
          rootMargin: ez,
          observerUpdateDeps: [HT.length],
          children: HT.map((TT => (0, lT.jsx)(MM, {
            entry: TT,
            choice: az(TT.item, ZT[TT.key]),
            onChoose: UT => {
              cT({
                ...ZT,
                [TT.key]: UT
              })
            }
          }, TT.key)))
        }) : jT ? (0, lT.jsx)(lz, {
          entry: jT
        }) : (0, lT.jsx)(kz, {
          count: 3
        })
      })
    }

    function nM() {
      var TT;
      const {
        t: UT
      } = (0, gT.z)(), mT = Iz(), WT = bz(null === (TT = mT.shopInfo[mT.categoryKey]) || void 0 === TT ? void 0 : TT.items, "myOrder");
      return 0 === WT.length ? (0, lT.jsx)("div", {
        className: "SmpScreen",
        children: (0, lT.jsx)(jz, {
          title: UT("smpShop:noOrders"),
          children: UT("smpShop:noOrdersHint")
        })
      }) : (0, lT.jsx)("div", {
        className: "SmpScreen",
        children: (0, lT.jsx)("div", {
          className: "SmpList",
          children: WT.map((TT => {
            let {
              key: WT,
              item: zT,
              meta: MT
            } = TT;
            const gT = mT.isPending(WT) || !1 === zT.canBuy;
            return (0, lT.jsxs)("div", {
              className: "SmpRow",
              children: [(0, lT.jsx)(nz, {
                item: MT.item,
                amount: MT.collectable
              }), (0, lT.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, lT.jsx)("b", {
                  children: (0, lT.jsx)(EW.e, {
                    text: zT.customTitle
                  })
                }), (0, lT.jsxs)("small", {
                  children: [(0, lT.jsx)(Hz, {
                    amount: MT.pricePerItem
                  }), " ", UT("smpShop:each"), MT.collectable > 0 && ` \xb7 ${UT("smpShop:readyCount",{count:MT.collectable})}`]
                }), (0, lT.jsx)(zM, {
                  done: MT.delivered,
                  of: MT.wanted
                })]
              }), MT.collectable > 0 ? (0, lT.jsx)(kT.l, {
                loading: gT,
                onClick: () => {
                  mT.act(WT)
                },
                children: UT("smpShop:collectCount", {
                  count: MT.collectable
                })
              }) : (0, lT.jsx)(kT.I, {
                loading: gT,
                onClick: () => {
                  mT.act(WT)
                },
                children: UT("smpShop:cancel")
              })]
            }, WT)
          }))
        })
      })
    }
    const HM = new Set(["search", "creator", "enchantedCreator", "collect", "myOrder", "order"]),
      kM = {
        sell: "coins",
        market: "store",
        collect: "backpack",
        orders: "file-clipboard",
        myOrders: "location-check"
      };

    function jM(TT, UT) {
      let mT = !1;
      const WT = {};
      for (const zT in TT) UT(zT, TT[zT]) ? WT[zT] = TT[zT] : mT = !0;
      return mT ? WT : TT
    }

    function lM(TT) {
      var UT, mT, zT, HT;
      const {
        show: kT,
        shopInfo: jT,
        selectedCategoryKey: LT
      } = TT, {
        t: pT
      } = (0, gT.z)(), BT = null !== LT && void 0 !== LT ? LT : "", ZT = iz(jT, BT), cT = null === (UT = jT[BT]) || void 0 === UT ? void 0 : UT.items, vT = null !== ZT, [fT, qT] = (0, WT.useState)({}), [iT, bT] = (0, WT.useState)([]), [OT, eT] = (0, WT.useState)(!1), [YT, JT] = (0, WT.useState)(null), [, xT] = (0, WT.useState)(0), dT = (0, WT.useRef)(0), wT = (0, WT.useRef)({}), tT = (0, WT.useRef)({
        items: cT,
        pending: fT,
        shopInfo: jT,
        active: vT,
        canAfford: TT.canAfford,
        buy: TT.buy
      });
      tT.current = {
        items: cT,
        pending: fT,
        shopInfo: jT,
        active: vT,
        canAfford: TT.canAfford,
        buy: TT.buy
      };
      const aT = (0, WT.useCallback)((TT => {
        dT.current++;
        const UT = dT.current;
        bT((mT => [{
          id: UT,
          text: TT
        }, ...mT].slice(0, 8))), JT(UT)
      }), []);
      (0, WT.useEffect)((() => {
        if (null === YT) return;
        const TT = setTimeout((() => {
          JT(null)
        }), 3e3);
        return () => {
          clearTimeout(TT)
        }
      }), [YT]), (0, WT.useEffect)((() => {
        const UT = TT.message;
        if (!UT) return;
        const {
          shopInfo: mT,
          active: WT,
          items: zT
        } = tT.current, MT = null !== UT.categoryKey ? null !== iz(mT, UT.categoryKey) : WT;
        (MT || WT) && aT(UT.text), MT && qT((TT => jM(TT, (TT => {
          var UT, mT;
          return !HM.has(null === zT || void 0 === zT || null === (UT = zT[TT]) || void 0 === UT || null === (mT = UT.smp) || void 0 === mT ? void 0 : mT.kind)
        }))))
      }), [TT.message, aT]), (0, WT.useEffect)((() => {
        qT((TT => jM(TT, ((TT, UT) => yz(null === cT || void 0 === cT ? void 0 : cT[TT]) === UT.snapshot))))
      }), [jT, cT]);
      const yT = Object.keys(fT).length > 0;
      (0, WT.useEffect)((() => {
        if (!yT) return;
        const TT = setInterval((() => {
          xT((TT => TT + 1));
          const TT = Date.now(),
            {
              pending: UT,
              items: mT
            } = tT.current,
            WT = Object.keys(UT).filter((mT => TT - UT[mT].at >= 12e3));
          if (0 === WT.length) return;
          const zT = WT.some((TT => {
            var WT, zT;
            return "search" !== (null === mT || void 0 === mT || null === (WT = mT[TT]) || void 0 === WT || null === (zT = WT.smp) || void 0 === zT ? void 0 : zT.kind) || UT[TT].resend
          }));
          for (const MT of WT) wT.current[MT] = TT;
          qT((TT => jM(TT, (TT => !WT.includes(TT))))), zT && aT(pT("smpShop:noAnswer"))
        }), 500);
        return () => {
          clearInterval(TT)
        }
      }), [yT]), (0, WT.useEffect)((() => {
        qT({})
      }), [BT]), (0, WT.useEffect)((() => {
        kT || eT(!1)
      }), [kT]);
      const XT = (0, WT.useCallback)((function(TT, UT) {
          let mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            items: WT,
            pending: zT,
            canAfford: MT,
            buy: gT
          } = tT.current, nT = null === WT || void 0 === WT ? void 0 : WT[TT];
          if (!nT || TT in zT || !1 === nT.canBuy) return !1;
          if (!MT(nT, (0, KW.e)(nT, UT))) return !1;
          gT(TT, nT, UT);
          const HT = {
            snapshot: yz(nT),
            at: Date.now(),
            resend: mT
          };
          return tT.current.pending = {
            ...tT.current.pending,
            [TT]: HT
          }, qT((UT => ({
            ...UT,
            [TT]: HT
          }))), !0
        }), []),
        IT = (0, WT.useMemo)((() => ({
          shopInfo: jT,
          categoryKey: BT,
          canAfford: TT.canAfford,
          isPending: TT => TT in fT,
          gaveUpAt: TT => {
            var UT;
            return null !== (UT = wT.current[TT]) && void 0 !== UT ? UT : 0
          },
          act: XT,
          notify: aT
        })), [jT, BT, TT.canAfford, fT, XT, aT]),
        QT = Math.min(...Object.values(fT).map((TT => TT.at))),
        sT = yT && Date.now() - QT > 1500,
        FT = iT.length > 1,
        PT = null !== (mT = null === (zT = jT[BT]) || void 0 === zT ? void 0 : zT.customTitle) && void 0 !== mT ? mT : BT,
        VT = null === (HT = jT[BT]) || void 0 === HT ? void 0 : HT.description;
      let uT = null;
      return "market" === ZT ? uT = (0, lT.jsx)(Az, {}) : "sell" === ZT ? uT = (0, lT.jsx)(UM, {}) : "collect" === ZT ? uT = (0, lT.jsx)(WM, {}) : "orders" === ZT ? uT = (0, lT.jsx)(gM, {}) : "myOrders" === ZT && (uT = (0, lT.jsx)(nM, {})), (0, lT.jsx)(Xz.Provider, {
        value: IT,
        children: (0, lT.jsx)("div", {
          className: "SmpShopHost",
          hidden: !vT,
          children: (0, lT.jsxs)("div", {
            className: "SmpShop",
            children: [(0, lT.jsx)("header", {
              className: "SmpHeader",
              children: (0, lT.jsxs)("div", {
                className: "SmpHeaderTitle",
                children: [(0, lT.jsxs)("h2", {
                  children: [ZT && (0, lT.jsx)(nT.c, {
                    name: kM[ZT]
                  }), pT(PT)]
                }), VT && (0, lT.jsx)("p", {
                  children: (0, lT.jsx)(EW.e, {
                    text: VT
                  })
                })]
              })
            }), (0, lT.jsx)("main", {
              className: "SmpBody",
              "data-pad-initial-area": !0,
              children: kT && uT
            }), (0, lT.jsxs)("button", {
              type: "button",
              className: MT()("SmpStatus", {
                SmpStatusWaiting: yT,
                SmpStatusFresh: !yT && null !== YT,
                SmpStatusHasHistory: FT
              }),
              "aria-live": "polite",
              "aria-expanded": FT ? OT : void 0,
              onClick: () => {
                FT && eT((TT => !TT))
              },
              children: [yT ? (0, lT.jsxs)("span", {
                className: "SmpStatusText",
                children: [(0, lT.jsx)(pz, {}), pT(sT ? "smpShop:slowConnection" : "smpShop:waiting")]
              }) : iT[0] ? (0, lT.jsx)("span", {
                className: "SmpStatusText",
                children: (0, lT.jsx)(EW.e, {
                  text: iT[0].text
                })
              }, iT[0].id) : (0, lT.jsx)("span", {
                className: "SmpStatusText SmpMuted",
                children: pT("smpShop:ready")
              }), FT && (0, lT.jsx)("small", {
                children: pT("smpShop:recentMessages", {
                  count: iT.length
                })
              })]
            }), OT && FT && (0, lT.jsx)("div", {
              className: "SmpStatusHistory",
              children: iT.map((TT => (0, lT.jsx)("div", {
                children: (0, lT.jsx)(EW.e, {
                  text: TT.text
                })
              }, TT.id)))
            })]
          })
        })
      })
    }
    class LM {
      constructor(TT) {
        this.info = TT
      }
      static fromShopInfo(TT) {
        const UT = {};
        for (const mT in TT) {
          const WT = !0 === TT[mT].redDot && !0 !== TT[mT].forceRemoveRedDot;
          UT[mT] = {
            redDot: WT,
            items: {}
          };
          for (const zT in TT[mT].items) {
            const WT = TT[mT].items[zT],
              MT = !0 === WT.redDot && !0 !== WT.forceRemoveRedDot;
            UT[mT].items[zT] = {
              redDot: MT
            }
          }
        }
        return new LM(UT)
      }
      anyCategoryHasRedDots() {
        for (const TT in this.info)
          if (this.categoryHasRedDot(TT)) return !0;
        return !1
      }
      doesCategoryExist(TT) {
        return !(0, nm.E)(this.info[TT])
      }
      categoryHasRedDot(TT) {
        return !0 === this.info[TT].redDot
      }
      updateCategoryRedDot(TT, UT) {
        this.info[TT].redDot = UT
      }
      doesItemExist(TT, UT) {
        return this.doesCategoryExist(TT) && !(0, nm.E)(this.info[TT].items[UT])
      }
      itemHasRedDot(TT, UT) {
        return !0 === this.info[TT].items[UT].redDot
      }
      updateItemRedDot(TT, UT, mT) {
        this.info[TT].items[UT].redDot = mT
      }
      shallowCopy() {
        return new LM(this.info)
      }
    }

    function pM(TT, UT) {
      return `${TT}\x1f${UT}`
    }

    function BM(TT, UT) {
      return !(0, nm.E)(UT) && !(0, nm.E)(TT) && UT in TT
    }
    const ZM = (0, WT.memo)((function(TT) {
      var UT, mT;
      let {
        show: zT
      } = TT;
      const gT = (0, QU.f)("players", bM),
        nT = (0, QU.f)("players", OM),
        jT = (0, Tz.b)(),
        [pT, BT] = (0, WT.useState)({
          shopInfo: {},
          userInputsPerItem: {},
          redDotInfo: LM.fromShopInfo({}),
          currencyAmounts: {},
          selectedCategoryKey: null,
          onBoughtInfo: null,
          awaitingPurchase: !1
        }),
        cT = (0, WT.useRef)(""),
        vT = (0, WT.useRef)(null),
        qT = (0, WT.useRef)(null),
        iT = (0, WT.useRef)(0),
        bT = (0, WT.useRef)(void 0),
        OT = (0, WT.useRef)(null),
        eT = (0, WT.useRef)(pT),
        JT = pT.redDotInfo.anyCategoryHasRedDots(),
        [xT, wT] = (0, WT.useState)(null),
        tT = (0, WT.useRef)(!1);
      let aT = !1,
        yT = 0,
        XT = 0;
      if (pT.currencyAmounts) {
        for (const TT in pT.currencyAmounts) {
          var IT;
          const UT = pT.currencyAmounts[TT];
          UT.hidden || (yT++, (null === (IT = UT.subtext) || void 0 === IT ? void 0 : IT.length) > 0 && XT++)
        }
        aT = yT + XT > 4
      }(0, WT.useEffect)((() => {
        Hm.j.EZ("showShopIconRedDot", JT, !0)
      }), [JT]), (0, WT.useEffect)((() => {
        fT.gameBridge.send("setShopOpen", zT), zT || (clearTimeout(bT.current), BT((TT => TT.awaitingPurchase ? {
          ...TT,
          awaitingPurchase: !1
        } : TT)))
      }), [zT]), (0, WT.useEffect)((() => () => {
        fT.gameBridge.send("setShopOpen", !1), clearTimeout(bT.current)
      }), []), (0, WT.useEffect)((() => {
        eT.current = pT
      }), [pT]), (0, WT.useEffect)((() => {
        if (null === xT) return;
        return (0, AW.c)("pointerdown", (TT => {
          const UT = TT.target;
          null !== UT && void 0 !== UT && UT.closest(".ShopItem") || wT(null)
        }))
      }), [xT]);
      const QT = TT => {
          BT((UT => ({
            ...UT,
            ...TT
          })))
        },
        sT = TT => {
          var UT;
          clearTimeout(null === (UT = pT.onBoughtInfo) || void 0 === UT ? void 0 : UT.timeout);
          const mT = setTimeout((() => {
            QT({
              onBoughtInfo: null
            })
          }), 3e3);
          cT.current = TT, QT({
            onBoughtInfo: {
              text: TT,
              timeout: mT,
              categoryKey: vT.current
            }
          })
        },
        FT = TT => {
          const {
            shopInfo: UT,
            userInputsPerItem: mT,
            redDotInfo: WT,
            autoSelectCategory: MT
          } = function(TT, UT, mT, WT, zT, MT) {
            if ((0, nm.E)(TT) || 0 === Object.keys(TT).length) return {
              shopInfo: {},
              userInputsPerItem: {},
              redDotInfo: LM.fromShopInfo({}),
              autoSelectCategory: null
            };
            const gT = dT.siteUsedData[dT.siteUsed].adConfig.showRewardedAds,
              nT = {};
            let HT = null;
            for (const cT in TT) {
              const UT = TT[cT],
                mT = {};
              let WT = !1;
              for (const TT in UT.items) {
                const zT = UT.items[TT];
                (0, KW.j)(zT, gT) && (mT[TT] = zT, WT = !0)
              }
              WT && (nT[cT] = {
                ...UT,
                items: mT
              }, !0 === UT.autoSelectCategory && (HT = cT))
            }
            const kT = {},
              jT = (TT, UT, WT, gT) => {
                var nT, HT;
                const jT = pM(TT, UT),
                  lT = null !== (nT = mT[jT]) && void 0 !== nT ? nT : mT[UT];
                if (null !== (HT = gT.userInput) && void 0 !== HT && HT.type) switch (gT.userInput.type) {
                  case "dropdown": {
                    var LT;
                    const TT = !lT || !gT.userInput.dropdownOptions.some((TT => (0, KW.g)(TT) === lT)),
                      UT = gT.userInput.shouldResetSelectionOnOptionsChange && ("dropdown" !== (null === WT || void 0 === WT || null === (LT = WT.userInput) || void 0 === LT ? void 0 : LT.type) || JSON.stringify(WT.userInput.dropdownOptions) !== JSON.stringify(gT.userInput.dropdownOptions)),
                      mT = gT.userInput,
                      zT = !(0, nm.E)(mT.initialValue) && mT.dropdownOptions.some((TT => (0, KW.g)(TT) === mT.initialValue));
                    var pT;
                    return void(TT || UT ? zT ? kT[jT] = null !== (pT = gT.userInput.initialValue) && void 0 !== pT ? pT : null : gT.userInput.dropdownOptions.length > 0 ? kT[jT] = (0, KW.g)(gT.userInput.dropdownOptions[0]) : kT[jT] = null : kT[jT] = lT)
                  }
                  case "text":
                  case "number":
                    var BT, ZT, cT;
                    return void((null === WT || void 0 === WT ? void 0 : WT.userInput) !== gT.userInput ? kT[jT] = null !== (BT = null !== (ZT = gT.userInput.initialValue) && void 0 !== ZT ? ZT : lT) && void 0 !== BT ? BT : "" : kT[jT] = null !== (cT = null !== lT && void 0 !== lT ? lT : gT.userInput.initialValue) && void 0 !== cT ? cT : "");
                  case "color":
                    var vT, fT, qT;
                    return void((null === WT || void 0 === WT ? void 0 : WT.userInput) !== gT.userInput ? kT[jT] = null !== (vT = null !== (fT = gT.userInput.initialValue) && void 0 !== fT ? fT : lT) && void 0 !== vT ? vT : "#000000" : kT[jT] = null !== (qT = null !== lT && void 0 !== lT ? lT : gT.userInput.initialValue) && void 0 !== qT ? qT : "#000000");
                  case "player": {
                    const TT = (0, KW.i)(zT, MT, gT.userInput);
                    return void(lT && TT.includes(lT) ? kT[jT] = lT : kT[jT] = TT.length > 0 ? TT[0] : null)
                  }
                }
              };
            for (const cT in nT)
              for (const TT in nT[cT].items) {
                var lT;
                const mT = nT[cT].items[TT];
                jT(cT, TT, null === (lT = UT[cT]) || void 0 === lT ? void 0 : lT.items[TT], mT)
              }
            const LT = LM.fromShopInfo(nT);
            for (const cT in nT) {
              var pT;
              if (WT.doesCategoryExist(cT)) {
                (null === (pT = UT[cT]) || void 0 === pT ? void 0 : pT.redDot) === nT[cT].redDot && LT.updateCategoryRedDot(cT, WT.categoryHasRedDot(cT));
                for (const TT in nT[cT].items) {
                  var BT, ZT;
                  WT.doesItemExist(cT, TT) && (null === (BT = UT[cT]) || void 0 === BT || null === (ZT = BT.items[TT]) || void 0 === ZT ? void 0 : ZT.redDot) === nT[cT].items[TT].redDot && LT.updateItemRedDot(cT, TT, WT.itemHasRedDot(cT, TT))
                }
              }
            }
            return {
              shopInfo: nT,
              userInputsPerItem: kT,
              redDotInfo: LT,
              autoSelectCategory: HT
            }
          }(TT, pT.shopInfo, pT.userInputsPerItem, pT.redDotInfo, gT, nT), HT = {
            shopInfo: UT,
            userInputsPerItem: mT,
            redDotInfo: WT
          };
          if (null === MT || zT)
            if (UT[pT.selectedCategoryKey]) HT.selectedCategoryKey = pT.selectedCategoryKey;
            else {
              const TT = mz(UT);
              HT.selectedCategoryKey = TT.length > 0 ? TT[0] : null
            }
          else HT.selectedCategoryKey = MT;
          return 0 === Object.keys(UT).length && zT && YT.b.set({
            openEverythingMenuName: null
          }), HT
        },
        VT = (TT, UT, mT) => {
          const WT = pT.selectedCategoryKey,
            zT = pM(WT, TT),
            MT = null !== mT && void 0 !== mT ? mT : pT.userInputsPerItem[zT],
            gT = {
              categoryKey: WT,
              itemKey: TT,
              userInput: MT
            };
          if (vT.current = WT, UT.isRewardedAd) {
            if (Date.now() - iT.current < 5e3) return;
            (0, cU.ab)((() => {
              var mT, WT, MT;
              console.log("bought rewarded ad");
              const nT = gT.categoryKey ? null === (mT = eT.current.shopInfo[gT.categoryKey]) || void 0 === mT ? void 0 : mT.items[TT] : null;
              if (!nT || !nT.isRewardedAd) return void console.warn("Shop item no longer valid or a rewarded ad, early out");
              (null === (WT = UT.userInput) || void 0 === WT ? void 0 : WT.type) === (null === nT || void 0 === nT || null === (MT = nT.userInput) || void 0 === MT ? void 0 : MT.type) ? (gT.userInput = eT.current.userInputsPerItem[zT], fT.gameBridge.send("buyShopItem", gT), UT.onBoughtMessage && sT(UT.onBoughtMessage)) : console.warn("Shop item input type changed, early out")
            })), iT.current = Date.now()
          } else {
            fT.gameBridge.send("buyShopItem", gT), QT({
              awaitingPurchase: !0
            }), clearTimeout(bT.current), bT.current = setTimeout((() => {
              OT.current = null, QT({
                awaitingPurchase: !1
              })
            }), 1e3);
            const TT = (0, KW.e)(UT, MT);
            if (OT.current = null, !isNaN(TT) && BM(pT.currencyAmounts, UT.currency)) {
              0 !== TT && (OT.current = {
                currency: UT.currency,
                amountBefore: pT.currencyAmounts[UT.currency].amount
              });
              const mT = {
                ...pT.currencyAmounts
              };
              mT[UT.currency].amount -= TT, QT({
                currencyAmounts: mT
              })
            }
            UT.onBoughtMessage && sT(UT.onBoughtMessage)
          }
        },
        uT = (TT, UT) => {
          if (null === UT || !TT.shopInfo[UT]) return TT;
          let mT = TT.redDotInfo;
          return mT.categoryHasRedDot(UT) && (mT.updateCategoryRedDot(UT, !1), mT = mT.shallowCopy()), {
            ...TT,
            selectedCategoryKey: UT,
            redDotInfo: mT
          }
        },
        CT = TT => {
          BT((UT => uT(UT, TT)))
        };
      (0, KU.g)(RW.m, (() => {
        BT((TT => {
          const UT = (0, RW.o)(mz(TT.shopInfo), TT.selectedCategoryKey, (UT => (0, RW.i)(TT.shopInfo[UT].items)));
          return UT === TT.selectedCategoryKey ? TT : uT(TT, UT)
        }))
      })), (0, KU.g)("showShopFromServer", (TT => {
        let {
          toggle: UT,
          HT: mT
        } = TT;
        mT && CT(mT), 0 === Object.keys(pT.shopInfo).length || UT && zT ? YT.b.set({
          openEverythingMenuName: null
        }) : YT.b.set({
          openEverythingMenuName: vU.k.SHOP
        })
      })), (0, KU.g)("closeShopOnDamaged", (() => {
        zT && YT.b.set({
          openEverythingMenuName: null
        })
      })), (0, KU.g)("overShopInfo", (TT => {
        sT(TT)
      })), (0, ZT.d)("currencyAmounts", (TT => {
        var UT;
        const mT = OT.current;
        mT && (null === TT || void 0 === TT || null === (UT = TT[mT.currency]) || void 0 === UT ? void 0 : UT.amount) === mT.amountBefore ? QT({
          currencyAmounts: TT
        }) : (OT.current = null, QT({
          currencyAmounts: TT,
          awaitingPurchase: !1
        }))
      })), (0, ZT.d)("shopInfo", (TT => {
        QT({
          ...FT(TT),
          awaitingPurchase: !1
        })
      }));
      const rT = (0, WT.useRef)({
        playerIds: gT,
        localPlayerId: nT
      });
      (0, WT.useEffect)((() => {
        rT.current.playerIds === gT && rT.current.localPlayerId === nT || (rT.current = {
          playerIds: gT,
          localPlayerId: nT
        }, BT((TT => {
          const UT = FT(TT.shopInfo);
          return {
            ...TT,
            ...UT
          }
        })))
      }), [gT, nT]);
      const KT = pT.selectedCategoryKey,
        ST = (TT, UT) => {
          var mT, WT;
          return (isNaN(UT) || (0, nm.E)(TT.currency) || BM(pT.currencyAmounts, TT.currency) && UT <= pT.currencyAmounts[TT.currency].amount) && (null === (mT = TT.canBuy) || void 0 === mT || mT) && !(null !== (WT = TT.hidden) && void 0 !== WT && WT)
        },
        GT = (TT, UT) => {
          var mT, WT, zT;
          const gT = pM(KT, TT),
            nT = pT.shopInfo[KT].items[TT],
            jT = pT.userInputsPerItem[gT],
            LT = (0, KW.e)(nT, jT),
            BT = ST(nT, LT),
            ZT = nT.enchant,
            cT = ZT ? (0, PT.Hb)(null !== (mT = nT.customTitle) && void 0 !== mT ? mT : TT, {
              colour: PT.Cb[ZT.tier]
            }) : null !== (WT = nT.customTitle) && void 0 !== WT ? WT : TT,
            vT = UT => {
              const mT = null !== UT && void 0 !== UT ? UT : jT,
                WT = void 0 !== UT ? (0, KW.e)(nT, UT) : LT;
              ST(nT, WT) && null !== mT && VT(TT, nT, UT);
              let zT = pT.redDotInfo;
              zT.itemHasRedDot(KT, TT) && (zT.updateItemRedDot(KT, TT, !1), zT = zT.shallowCopy()), QT({
                redDotInfo: zT
              })
            };
          return (0, lT.jsxs)("div", {
            className: MT()("ShopItem", {
              ShopItemNoInput: !nT.userInput,
              ShopItemNoInputCanBuy: !nT.userInput && BT,
              ShopItemNoInputSelected: nT.isSelected,
              ShopItemEnchant: !!ZT
            }),
            "data-pad-focusable": !nT.userInput || void 0,
            "data-pad-unavailable": !nT.userInput && !BT || void 0,
            "data-pad-repeat": null !== (zT = (0, RW.d)(nT)) && void 0 !== zT ? zT : void 0,
            "data-pad-repeat-wait": pT.awaitingPurchase || void 0,
            onClick: () => {
              if (ZT && tT.current) {
                if (xT !== gT) return void wT(gT);
                wT(null)
              }
              nT.userInput || vT()
            },
            onPointerDown: TT => {
              ZT && (tT.current = (0, GW.u)(TT))
            },
            onPointerEnter: TT => {
              ZT && !(0, GW.u)(TT) && wT(gT)
            },
            onPointerLeave: TT => {
              ZT && !(0, GW.u)(TT) && wT((TT => TT === gT ? null : TT))
            },
            style: {
              zIndex: Object.keys(pT.shopInfo[KT].items).length - UT
            },
            children: [pT.redDotInfo.itemHasRedDot(KT, TT) && (0, lT.jsx)(HT.c, {
              top: "-6px",
              right: "-6px"
            }), nT.badge && (0, lT.jsx)("div", {
              className: "ShopBadgeContainer",
              children: (0, lT.jsx)("div", {
                className: MT()("ShopBadgeMain", nT.badge.type),
                children: (0, lT.jsx)(EW.e, {
                  text: nT.badge.text
                })
              })
            }), (0, lT.jsx)("div", {
              className: "ShopItemLeft",
              children: nT.image && (0, lT.jsx)(cM, {
                item: nT,
                minWidth: 5,
                minHeight: 4.8
              })
            }), (0, lT.jsxs)("div", {
              className: "ShopItemRight",
              children: [(0, lT.jsxs)("div", {
                className: "ShopItemHeader",
                children: [(0, lT.jsx)("div", {
                  className: "ShopItemHeaderTitle",
                  children: (0, lT.jsx)(EW.e, {
                    text: cT
                  })
                }), (0, lT.jsx)("div", {
                  className: "ShopItemHeaderDescription",
                  children: (0, lT.jsx)(EW.e, {
                    text: nT.description
                  })
                })]
              }), nT.userInput && (0, lT.jsxs)("div", {
                className: "ShopItemInputsContainer",
                onClick: TT => {
                  TT.stopPropagation()
                },
                children: [(0, lT.jsx)(qM, {
                  item: nT,
                  currInput: jT,
                  updateInput: UT => {
                    ((TT, UT, mT) => {
                      const WT = pM(TT, UT),
                        zT = {
                          ...pT.userInputsPerItem
                        };
                      zT[WT] = mT, QT({
                        userInputsPerItem: zT
                      })
                    })(KT, TT, UT)
                  },
                  onSubmit: TT => {
                    vT(TT)
                  }
                }), ("dropdown" !== nT.userInput.type || !nT.userInput.autoSubmit) && (0, lT.jsx)(kT.e, {
                  className: "ItemCostButton",
                  disabled: !BT && null !== jT,
                  onClick: () => {
                    vT()
                  },
                  children: (0, lT.jsx)(fM, {
                    item: nT,
                    cost: LT,
                    currencyAmounts: pT.currencyAmounts
                  })
                })]
              })]
            }), !nT.userInput && (0, lT.jsx)("div", {
              className: "ShopItemNoInputCost",
              children: (0, lT.jsx)(fM, {
                item: nT,
                cost: LT,
                currencyAmounts: pT.currencyAmounts
              })
            }), ZT && xT === gT && (0, lT.jsxs)("div", {
              className: "ShopItemEnchantInfo SmallTextBold",
              children: [(0, lT.jsx)(EW.e, {
                text: cT
              }), (0, lT.jsx)("div", {
                className: "ShopItemEnchantInfoDescription",
                children: (0, lT.jsx)(EW.e, {
                  text: (0, SW.b)("", ZT.enchantments, ZT.enchantmentData)
                })
              })]
            })]
          }, gT)
        },
        NT = function(TT) {
          for (const UT in TT)
            if (TT[UT].smp) return !0;
          return !1
        }(pT.shopInfo),
        ET = iz(pT.shopInfo, KT);
      return (0, lT.jsx)(uW.e, {
        className: "Menu ShopBody",
        show: zT,
        children: 0 !== Object.keys(pT.shopInfo).length && (0, lT.jsxs)(lT.Fragment, {
          children: [(0, lT.jsxs)("div", {
            className: "MenuSideBar",
            children: [(0, lT.jsx)(LT, {
              items: mz(pT.shopInfo).map((TT => {
                var UT;
                return {
                  id: TT,
                  title: null !== (UT = pT.shopInfo[TT].customTitle) && void 0 !== UT ? UT : TT,
                  redDot: pT.redDotInfo.categoryHasRedDot(TT)
                }
              })),
              link: jT ? {
                faIcon: "users-gear",
                title: "lobbyManageEntry:manageLobby",
                onClick: () => {
                  (0, Uz.d)({
                    page: (0, Uz.b)(),
                    source: "shop"
                  })
                }
              } : void 0,
              selectedItemId: KT,
              onClick: CT,
              padStartsOnTab: (0, RW.f)(KT)
            }), (0, lT.jsx)("div", {
              className: "MenuSideBarFooter",
              children: pT.currencyAmounts && Object.keys(pT.currencyAmounts).map((TT => {
                var UT;
                const mT = pT.currencyAmounts[TT];
                return mT.hidden ? null : (0, lT.jsxs)("div", {
                  className: "ShopCurrencyDiv " + (aT ? "SmallText" : ""),
                  children: [(0, lT.jsxs)("div", {
                    className: "ShopCurrencyDetails",
                    children: [(0, lT.jsx)("div", {
                      className: "ShopCurrencyAmtIcon",
                      style: {
                        color: mT.iconColour
                      },
                      children: (0, lT.jsx)(eM, {
                        iconName: mT.icon
                      })
                    }), "\xa0", (0, rW.d)(mT.amount, 6)]
                  }), (null === (UT = mT.subtext) || void 0 === UT ? void 0 : UT.length) > 0 && (0, lT.jsx)("div", {
                    className: "ShopCurrencySubtext",
                    children: (0, lT.jsx)(EW.e, {
                      text: mT.subtext
                    })
                  })]
                }, TT)
              }))
            })]
          }), (0, lT.jsxs)("div", {
            className: "MenuBody ShopMenuBody",
            children: [NT && (0, lT.jsx)(lM, {
              show: zT,
              shopInfo: pT.shopInfo,
              selectedCategoryKey: KT,
              buy: (TT, UT, mT) => {
                VT(TT, UT, mT)
              },
              canAfford: ST,
              message: pT.onBoughtInfo
            }), null === ET && (0, lT.jsxs)(lT.Fragment, {
              children: [(0, lT.jsx)("div", {
                className: MT()("ShopOnBoughtInfo", {
                  ShopOnBoughtInfoShow: null !== pT.onBoughtInfo
                }),
                children: (0, lT.jsx)(EW.e, {
                  text: cT.current
                })
              }), (0, lT.jsx)("div", {
                className: "ShopItemsWrapper",
                children: (0, lT.jsxs)("div", {
                  className: "ShopItemsInner",
                  children: [(null === (UT = pT.shopInfo[KT]) || void 0 === UT ? void 0 : UT.description) && (0, lT.jsx)("div", {
                    className: "ShopCategoryDescription",
                    children: (0, lT.jsx)(EW.e, {
                      text: pT.shopInfo[KT].description
                    })
                  }), zT && (0, lT.jsx)("div", {
                    className: "ShopItems",
                    ref: qT,
                    "data-pad-initial-area": !0,
                    children: mz(null === (mT = pT.shopInfo[KT]) || void 0 === mT ? void 0 : mT.items).map(((TT, UT) => GT(TT, UT)))
                  })]
                })
              })]
            })]
          })]
        })
      })
    }));

    function cM(TT) {
      let {
        item: UT,
        minWidth: mT,
        minHeight: WT
      } = TT;
      const {
        image: zT,
        schematicId: MT,
        imageColour: gT
      } = UT;
      if (MT) return (0, lT.jsx)("div", {
        className: "ShopSchematic",
        style: {
          width: `${mT}rem`,
          height: `${WT}rem`
        },
        children: (0, lT.jsx)(hW.c, {
          game: {
            schematicId: MT
          }
        })
      });
      var HT, kT;
      if ((0, NW.e)(zT)) return (0, lT.jsx)("div", {
        className: "ShopBlock",
        style: {
          minWidth: `${mT}rem`,
          height: "0",
          minHeight: `${WT}rem`
        },
        children: (0, lT.jsx)(NW.b, {
          itemName: zT,
          amount: null !== (HT = UT.amount) && void 0 !== HT ? HT : 0,
          amountFontSize: WT / 4 + "rem",
          enchantmentTier: null === (kT = UT.enchant) || void 0 === kT ? void 0 : kT.tier
        })
      });
      const jT = zT.slice(-4);
      return ".jpg" === jT || ".png" === jT ? (0, lT.jsx)(vM, {
        image: zT,
        minWidth: mT
      }) : (0, lT.jsx)(nT.c, {
        name: zT,
        className: "SelectedItemImage",
        style: {
          color: gT
        }
      })
    }

    function vM(TT) {
      let {
        image: UT,
        minWidth: mT
      } = TT;
      const {
        gameNameWithVariation: WT
      } = (0, QU.i)("connectedGame"), zT = UT.endsWith(".jpg");
      return (0, lT.jsx)("img", {
        className: MT()({
          ShopPixelImage: !zT
        }),
        style: {
          width: `${zT?1.6*mT:mT}rem`,
          height: "auto",
          fontSize: "1.25rem"
        },
        src: `/textures/games/${(0,PT.dc)(WT)}/${UT}`,
        alt: UT,
        draggable: !1
      })
    }

    function fM(TT) {
      let {
        item: UT,
        cost: mT,
        currencyAmounts: WT
      } = TT;
      const zT = !isNaN(mT) && 0 !== mT && BM(WT, UT.currency);
      let MT = null;
      return UT.buyButtonText ? MT = UT.buyButtonText : zT ? (MT = mT, UT.sell && (MT = -1 * mT), MT = MT.toString()) : 0 === mT ? MT = "Free" : UT.isRewardedAd && (MT = "Watch ad"), (0, nm.E)(MT) || " " === MT ? null : (0, lT.jsxs)("div", {
        className: "BuyItemCostAndIcon",
        children: [zT && (0, lT.jsx)("div", {
          style: {
            color: WT[UT.currency].iconColour
          },
          className: "BuyItemIcon",
          children: (0, lT.jsx)(eM, {
            iconName: WT[UT.currency].icon
          })
        }), (0, lT.jsx)("div", {
          className: "BuyItemCost",
          children: (0, lT.jsx)(EW.e, {
            text: MT
          })
        })]
      })
    }

    function qM(TT) {
      let {
        item: UT,
        currInput: mT,
        updateInput: zT,
        onSubmit: MT
      } = TT;
      const {
        t: nT
      } = (0, gT.z)(), HT = (0, WT.useRef)(null);
      if ((0, WT.useEffect)((() => {
          const TT = HT.current;
          TT && TT.value !== mT && document.activeElement !== TT && (TT.value = null !== mT && void 0 !== mT ? mT : "")
        }), [mT]), !UT.userInput) return null;
      let kT = UT.userInput;
      if (vT.featureFlags.sanitizeShopInput && "text" === UT.userInput.type && (kT = {
          type: "number",
          placeholderText: "Numbers Only"
        }), "text" === kT.type || "number" === kT.type) {
        var jT, LT;
        console.assert(void 0 !== mT, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(UT)}`);
        const TT = "text" === kT.type && kT.wordCharsOnly;
        return (0, lT.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputTextWrapper",
          children: (0, lT.jsx)(bT.e, {
            className: "ShopItemUserInputText",
            placeholderText: nT(kT.placeholderText),
            defaultValue: mT,
            domRef: HT,
            onValueChange: (UT, mT) => {
              !0 === TT && (UT = (0, oW.tb)(UT)), HT.current.value = UT, zT(UT)
            },
            onEnter: MT,
            type: kT.type
          }, (null !== (jT = kT.initialValue) && void 0 !== jT ? jT : "") + (null !== (LT = kT.placeholderText) && void 0 !== LT ? LT : ""))
        })
      }
      if ("dropdown" === kT.type) {
        console.assert(void 0 !== mT, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(UT)}`);
        const TT = kT.autoSubmit;
        return (0, lT.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputDropdown",
          children: (0, lT.jsx)(yU.d, {
            options: kT.dropdownOptions.map((TT => (0, KW.g)(TT))),
            value: mT,
            onChange: UT => {
              let {
                value: mT
              } = UT;
              zT(mT), TT && MT(mT)
            }
          })
        })
      }
      return "player" === kT.type ? (0, lT.jsx)(iM, {
        userInput: kT,
        currInput: mT,
        updateInput: zT
      }) : "color" === kT.type ? (0, lT.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputColor",
        children: (0, lT.jsx)("input", {
          type: "color",
          value: mT,
          onChange: TT => {
            zT(TT.target.value)
          }
        })
      }) : null
    }

    function iM(TT) {
      let {
        userInput: UT,
        currInput: mT,
        updateInput: WT
      } = TT;
      const zT = (0, QU.i)("players"),
        MT = (0, QU.i)("hiddenPlayerNames"),
        gT = (0, KW.i)(zT.ids, zT.localId, UT);
      return (0, lT.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputDropdown",
        children: (0, lT.jsx)(yU.d, {
          options: gT.map((TT => {
            const {
              name: UT
            } = zT.byId[TT];
            return {
              value: TT,
              label: null === UT ? "" : (0, DW.f)(UT, MT)
            }
          })),
          value: mT,
          onChange: TT => {
            let {
              value: UT
            } = TT;
            WT(UT)
          }
        })
      })
    }

    function bM(TT) {
      let {
        ids: UT
      } = TT;
      return UT
    }

    function OM(TT) {
      let {
        localId: UT
      } = TT;
      return UT
    }

    function eM(TT) {
      let {
        iconName: UT
      } = TT;
      return fT.gameBridge.lookup("isItemName", UT) ? (0, lT.jsx)(NW.b, {
        itemName: UT,
        amount: 1
      }) : (0, lT.jsx)(nT.c, {
        name: UT,
        className: "2x"
      })
    }
    var YM = mT(1752);
    const JM = (0, mT(1526).j)((TT => TT.PadLobbyShortcuts)),
      xM = (0, WT.lazy)((() => Promise.resolve().then((() => mT(4749))).then((TT => ({
        default: TT.Lobbyleaderboard
      }))))),
      dM = (0, WT.lazy)((() => mT.e(223).then((() => mT(41218))).then((TT => ({
        default: TT.LobbyManageView
      })))));

    function wM(TT) {
      let {
        show: UT
      } = TT;
      return UT ? (0, lT.jsx)(tM, {}) : null
    }

    function tM() {
      const TT = (0, Tz.b)();
      return (0, lT.jsxs)(lT.Fragment, {
        children: [(0, lT.jsx)(JM, {}), (0, lT.jsxs)(WT.Suspense, {
          fallback: (0, lT.jsx)("div", {
            className: "CharacterCustomisationLoading",
            children: (0, lT.jsx)(OT.c, {})
          }),
          children: [TT && (0, lT.jsx)(dM, {
            leaderboard: (0, lT.jsx)(xM, {})
          }), !TT && (0, lT.jsx)(xM, {})]
        })]
      })
    }
    var aM = mT(1685),
      yM = mT(3154),
      XM = mT(1863),
      IM = mT(3191),
      QM = mT(2797),
      sM = mT(1607),
      FM = mT(1576),
      PM = mT(3130),
      VM = mT(3148),
      uM = mT(2462);
    const CM = "storeRecentGiftRecipients",
      rM = new Map;

    function KM() {
      try {
        const TT = jm.l.getItem(CM);
        return Array.isArray(TT) ? TT.filter((TT => "string" === typeof(null === TT || void 0 === TT ? void 0 : TT.name) && TT.name.length > 0)).map((TT => ({
          name: TT.name,
          cosmetics: TT.cosmetics && "object" === typeof TT.cosmetics ? TT.cosmetics : null
        }))) : []
      } catch {
        return []
      }
    }

    function SM(TT) {
      var UT;
      const [mT, zT] = (0, WT.useState)(""), [MT, gT] = (0, WT.useState)("search"), [nT, HT] = (0, WT.useState)(null), [kT, jT] = (0, WT.useState)(null), lT = (0, WT.useRef)(null), LT = (0, WT.useRef)(null);
      (0, WT.useEffect)((() => () => {
        lT.current && clearTimeout(lT.current)
      }), []);
      const pT = null !== (UT = null === nT || void 0 === nT ? void 0 : nT.name) && void 0 !== UT ? UT : null;

      function BT() {
        lT.current && (clearTimeout(lT.current), lT.current = null)
      }(0, WT.useEffect)((() => {
        if (null === pT || TT === wT.NULL_USER_CONTEXT) return;
        const UT = pT.toLowerCase();
        if (UT === TT.getPlayerName().toLowerCase()) return void jT({
          name: pT,
          result: {
            giftRecipientFound: !1,
            giftRecipientError: "store:giftRecipientIsYou"
          }
        });
        const mT = rM.get(UT);
        if (mT) return void jT({
          name: pT,
          result: mT
        });
        let WT = !1;
        return async function(TT, UT) {
          try {
            const mT = await (0, wT.postJsonWithMetricsCookiesAndJsonResponse)(`${ZU.clientSideServerUrls.indexUrl}/index/store/gift-recipient`, {
              giftRecipientName: UT
            }, {
              retries: 1
            }, TT.getMetricsCookies());
            if ("boolean" !== typeof(null === mT || void 0 === mT ? void 0 : mT.giftRecipientFound)) throw new Error(`Unexpected gift recipient lookup response: ${JSON.stringify(mT)}`);
            return mT
          } catch (mT) {
            return console.error("Failed to look up gift recipient:", mT), {
              giftRecipientFound: !1,
              giftRecipientError: "store:giftRecipientLookupFailed"
            }
          }
        }(TT, pT).catch((TT => (console.error("Gift recipient lookup failed:", TT), {
          giftRecipientFound: !1,
          giftRecipientError: "store:giftRecipientLookupFailed"
        }))).then((TT => {
          !0 !== TT.giftRecipientFound && "store:giftRecipientLookupFailed" === TT.giftRecipientError || rM.set(UT, TT), WT || jT({
            name: pT,
            result: TT
          })
        })), () => {
          WT = !0
        }
      }), [pT, TT]);
      const ZT = (0, WT.useMemo)((() => {
        const TT = mT.trim();
        if (!TT) return {
          status: "none"
        };
        if (!nT || nT.name !== TT || (null === kT || void 0 === kT ? void 0 : kT.name) !== nT.name) return {
          status: "pending",
          name: TT
        };
        const UT = kT.result;
        return !1 === UT.giftRecipientFound ? {
          status: "error",
          name: nT.name,
          error: UT.giftRecipientError
        } : {
          status: "found",
          name: UT.giftRecipientName,
          ownedPacks: UT.giftRecipientOwnedPacks,
          hasSuperRank: UT.giftRecipientHasSuperRank,
          isSubscriber: UT.giftRecipientIsSubscriber
        }
      }), [mT, nT, kT]);
      (0, WT.useEffect)((() => {
        "found" === ZT.status && "typed" === (null === nT || void 0 === nT ? void 0 : nT.source) && LT.current !== ZT.name && (LT.current = ZT.name, (0, UU.reportAnalyticsClick)({
          id: "store.gift_recipient",
          value: "typed"
        }))
      }), [ZT, nT]);
      const cT = (null === kT || void 0 === kT ? void 0 : kT.name) === (null === nT || void 0 === nT ? void 0 : nT.name) ? null === kT || void 0 === kT ? void 0 : kT.result : null,
        vT = !0 === (null === cT || void 0 === cT ? void 0 : cT.giftRecipientFound) ? cT.giftRecipientCosmetics : null;
      return {
        query: mT,
        via: MT,
        recipient: ZT,
        recipientCosmetics: vT,
        type: function(TT) {
          zT(TT), gT("search"), BT();
          const UT = TT.trim();
          UT ? lT.current = setTimeout((() => {
            HT({
              name: UT,
              source: "typed"
            })
          }), 400) : HT(null)
        },
        choose: function(TT, UT) {
          BT(), zT(TT), gT("typed" === UT ? "search" : "prefilled" === UT ? "prefilled" : "suggestion"), HT({
            name: TT,
            source: UT
          }), "typed" !== UT && "prefilled" !== UT && (0, UU.reportAnalyticsClick)({
            id: "store.gift_recipient",
            value: UT
          })
        },
        clear: function() {
          BT(), zT(""), gT("search"), HT(null)
        },
        recordGift: function(TT, UT) {
          ! function(TT) {
            rM.delete(TT.toLowerCase())
          }(TT), jT((mT => {
            if (!mT || mT.name.toLowerCase() !== TT.toLowerCase() || !0 !== mT.result.giftRecipientFound || "superRank" === UT) return mT;
            const WT = mT.result.giftRecipientOwnedPacks;
            return {
              ...mT,
              result: {
                ...mT.result,
                giftRecipientOwnedPacks: WT.includes(UT) ? WT : [...WT, UT]
              }
            }
          }))
        }
      }
    }
    var GM = mT(2453),
      NM = mT(4751),
      EM = mT(265),
      hM = mT(3247);
    const DM = ["pointerdown", "pointermove", "keydown", "wheel", "touchstart", "scroll", "blur", "focus"];
    var oM = mT(2400),
      AM = mT(641),
      RM = mT(2493),
      Tg = mT(2713);

    function Ug(TT) {
      let {
        cosmetics: UT
      } = TT;
      return (0, lT.jsx)("span", {
        className: "StoreRecipientAvatar",
        children: (0, lT.jsx)(RM.e, {
          cosmetics: UT
        })
      })
    }

    function mg(TT, UT) {
      var mT, WT;
      const zT = null !== (mT = TT.friend) && void 0 !== mT ? mT : {
        isError: !1,
        name: TT.name,
        ranks: [],
        cosmetics: null !== (WT = TT.cosmetics) && void 0 !== WT ? WT : {},
        nameColour: AM.c,
        location: {
          status: "noGamePlayed"
        }
      };
      return UT ? {
        ...zT,
        cosmetics: UT
      } : zT
    }

    function Wg(TT) {
      let {
        pending: UT
      } = TT;
      return (0, lT.jsx)("span", {
        className: "StoreRecipientLoader",
        children: UT && (0, lT.jsx)(OT.c, {})
      })
    }

    function zg(TT) {
      var UT;
      let {
        selfName: mT,
        giftRecipient: zT,
        suggestionsVersion: HT,
        pulseSignal: jT,
        disabled: LT
      } = TT;
      const {
        t: pT
      } = (0, gT.z)(), BT = (0, KT.n)(), ZT = (0, WT.useRef)(null), cT = (0, WT.useRef)(null), {
        query: fT,
        via: qT,
        recipient: iT,
        recipientCosmetics: OT
      } = zT, eT = (0, uM.r)(fT), YT = (0, WT.useMemo)((() => {
        const TT = vT.featureFlags.useSocialFeatures ? BT.friends.filter((TT => !TT.isError)) : [];
        return (0, uM.j)({
          onlineFriends: (0, KT.i)(TT),
          recentRecipients: KM(),
          friends: TT,
          selfName: mT,
          max: 8
        })
      }), [BT.friends, mT, HT]), JT = fT.trim().toLowerCase(), xT = "search" !== qT && JT ? YT.find((TT => TT.name.toLowerCase() === JT)) : void 0, dT = xT && "prefilled" === qT ? [xT, ...YT.filter((TT => TT !== xT))] : YT, wT = "" !== JT && !xT, tT = wT ? fT : "", aT = dT.length > 0;
      (0, WT.useEffect)((() => {
        ZT.current && ZT.current.value !== tT && (ZT.current.value = tT)
      }), [tT]), (0, WT.useEffect)((() => {
        ZT.current && (ZT.current.disabled = LT)
      }), [LT, jT]);
      const yT = (0, WT.useRef)(0);

      function IT() {
        "self" !== eT && (0, UU.reportAnalyticsClick)({
          id: "store.mode",
          value: "self"
        }), zT.clear()
      }

      function QT(TT) {
        var UT, mT;
        if (LT) return;
        if (" " === TT.key || "Enter" === TT.key) return TT.preventDefault(), void TT.currentTarget.click();
        const WT = Array.from(null !== (UT = null === (mT = cT.current) || void 0 === mT ? void 0 : mT.querySelectorAll("[role=radio]")) && void 0 !== UT ? UT : []),
          zT = WT.indexOf(TT.currentTarget);
        let MT;
        "ArrowRight" === TT.key || "ArrowDown" === TT.key ? MT = WT[(zT + 1) % WT.length] : "ArrowLeft" === TT.key || "ArrowUp" === TT.key ? MT = WT[(zT - 1 + WT.length) % WT.length] : "Home" === TT.key ? MT = WT[0] : "End" === TT.key && (MT = WT[WT.length - 1]), MT && (TT.preventDefault(), MT.focus(), MT.click())
      }(0, WT.useEffect)((() => {
        var TT;
        jT > yT.current && !LT && (yT.current = jT, null === (TT = ZT.current) || void 0 === TT || TT.focus())
      }), [jT, LT]);
      const sT = "self" === eT,
        FT = null !== (UT = null === xT || void 0 === xT ? void 0 : xT.name) && void 0 !== UT ? UT : null,
        PT = "error" === iT.status ? iT.error : null,
        VT = "store:giftRecipientLookupFailed" === PT;
      return (0, lT.jsxs)("div", {
        className: MT()("StoreRecipientStrip", {
          StoreRecipientStripDisabled: LT,
          StoreRecipientStripNoChips: !aT
        }),
        children: [(0, lT.jsx)("span", {
          className: "StoreRecipientLabel",
          "aria-hidden": !0,
          children: pT("store:buyingFor")
        }), (0, lT.jsxs)("div", {
          ref: cT,
          className: "StoreRecipientRadios",
          role: "radiogroup",
          "aria-label": pT("store:whoIsItFor"),
          children: [(0, lT.jsxs)("div", {
            role: "radio",
            "data-pad-focusable": !0,
            "aria-checked": sT,
            tabIndex: LT || !sT && null !== FT ? -1 : 0,
            className: MT()("StoreRecipientMe", {
              StoreRecipientChecked: sT
            }),
            onClick: () => {
              LT || IT()
            },
            onKeyDown: QT,
            children: [(0, lT.jsx)(nT.c, {
              name: "user"
            }), " ", pT("store:me")]
          }), aT && (0, lT.jsx)("div", {
            className: "StoreRecipientChips",
            children: dT.map((TT => {
              const UT = TT === xT;
              return (0, lT.jsx)("div", {
                role: "radio",
                "data-pad-focusable": !0,
                "aria-checked": UT,
                tabIndex: !LT && UT ? 0 : -1,
                title: TT.name,
                className: MT()("StoreRecipientChip", {
                  StoreRecipientChecked: UT
                }),
                onClick: () => {
                  LT || function(TT) {
                    "gift" !== eT && (0, UU.reportAnalyticsClick)({
                      id: "store.mode",
                      value: "gift"
                    }), zT.choose(TT.name, TT.kind)
                  }(TT)
                },
                onKeyDown: QT,
                children: (0, lT.jsx)(Tg.i, {
                  playerSocialPreview: mg(TT, UT ? OT : null),
                  opensProfileCard: !1,
                  isFriend: null !== TT.friend,
                  hideFriendBadge: !0,
                  showLocation: null !== TT.friend,
                  status: null === TT.friend ? null : void 0,
                  trailing: UT ? (0, lT.jsx)(Wg, {
                    pending: "pending" === iT.status
                  }) : void 0
                })
              }, TT.name)
            }))
          })]
        }), (0, lT.jsxs)("div", {
          className: MT()("StoreRecipientSearch", {
            StoreRecipientChecked: wT,
            StoreRecipientSearchPulse: jT > 0 && !wT,
            StoreRecipientSearchError: null !== PT && !VT
          }),
          onClick: () => {
            var TT;
            null === (TT = ZT.current) || void 0 === TT || TT.focus()
          },
          children: [wT && "found" === iT.status && OT && (0, lT.jsx)(Ug, {
            cosmetics: OT
          }), !(wT && "found" === iT.status && OT) && (0, lT.jsx)(nT.c, {
            name: "magnifying-glass",
            className: "StoreRecipientSearchIcon"
          }), (0, lT.jsx)(bT.e, {
            className: "StoreRecipientSearchInput",
            domRef: ZT,
            placeholderText: pT("store:searchName"),
            defaultValue: tT,
            maxLength: XT.h,
            onValueChange: function(TT) {
              "gift" !== eT && TT.trim() && (0, UU.reportAnalyticsClick)({
                id: "store.mode",
                value: "gift"
              }), zT.type(TT)
            },
            onEnter: () => {
              var TT;
              const UT = null === (TT = ZT.current) || void 0 === TT ? void 0 : TT.value.trim();
              UT && zT.choose(UT, "typed")
            },
            blurOnEnter: !0
          }), wT && (0, lT.jsx)(Wg, {
            pending: "pending" === iT.status
          }), wT && (0, lT.jsx)("div", {
            ...(0, kT.R)({
              disabled: LT
            }),
            "aria-label": pT("store:clearRecipient"),
            title: pT("store:clearRecipient"),
            className: "StoreRecipientClear",
            onClick: TT => {
              TT.stopPropagation(), LT || IT()
            },
            children: (0, lT.jsx)(nT.c, {
              name: "xmark"
            })
          })]
        }, jT), PT && (0, lT.jsx)("div", {
          className: MT()("StoreRecipientPopover", {
            StoreRecipientPopoverSoft: VT
          }),
          role: "status",
          children: pT(PT)
        })]
      })
    }
    var Mg = mT(2446),
      gg = mT(2373),
      ng = mT(3681),
      Hg = mT(3253),
      kg = mT(2404);
    const jg = mT.p + "static/media/superRankPreviewPoster.e64783181b692cc31e08.webp";

    function lg() {
      (0, kg.i)(jg, {
        lowPriority: !1
      })
    }

    function Lg(TT) {
      let {
        onBack: UT,
        cta: mT,
        recipient: zT,
        afterCta: MT
      } = TT;
      const {
        t: HT
      } = (0, gT.z)(), [jT, LT] = (0, WT.useState)("starting"), pT = (0, WT.useRef)(null), BT = (0, NU.c)(), ZT = (0, WT.useRef)(null), cT = (0, WT.useCallback)((() => {
        const TT = pT.current;
        null !== TT.error && TT.load();
        const UT = TT.play();
        ZT.current = UT, UT.catch((TT => {
          (0, ng.d)("Failed to play Super Rank video", TT), BT.current && ZT.current === UT && LT("failed")
        }))
      }), [BT]);
      return (0, WT.useEffect)((() => {
        const TT = pT.current;
        let UT;

        function mT() {
          clearTimeout(UT), UT = setTimeout(cT, 3e3)
        }
        return cT(), TT.addEventListener("ended", mT), () => {
          clearTimeout(UT), TT.removeEventListener("ended", mT)
        }
      }), [cT]), (0, lT.jsxs)("div", {
        className: "StoreSuperRankDetail",
        children: [(0, lT.jsxs)("div", {
          className: "StoreDetailHeader",
          children: [(0, lT.jsx)(kT.d, {
            className: "StoreDetailBackButton",
            onClick: UT,
            padBack: !0,
            children: HT("general:back")
          }), (0, lT.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, lT.jsx)(nT.c, {
              name: "bolt"
            }), " ", HT("homePage:superRank")]
          }), zT]
        }), (0, lT.jsxs)("div", {
          className: "StoreSuperRankDetailBody",
          children: [(0, lT.jsxs)("div", {
            className: "StoreSuperRankVideo",
            children: [(0, lT.jsx)("video", {
              ref: pT,
              src: `${ZU.clientSideServerUrls.staticUrl}/videos/SuperRankPreview.mp4`,
              poster: jg,
              muted: !0,
              playsInline: !0,
              controls: "playing" === jT,
              onPlaying: () => {
                LT("playing")
              },
              onError: () => {
                LT("failed")
              }
            }), ("failed" === jT || "loading" === jT) && (0, lT.jsx)("div", {
              className: "StoreSuperRankPlay",
              children: (0, lT.jsx)(kT.e, {
                ariaLabel: HT("general:play"),
                loading: "loading" === jT,
                onClick: () => {
                  LT("loading"), cT()
                },
                touchPressOn: "pointerup",
                children: (0, lT.jsx)(nT.c, {
                  name: "play"
                })
              })
            })]
          }), (0, lT.jsxs)("div", {
            className: "StoreSuperRankDetailSide",
            children: [(0, lT.jsx)("div", {
              className: "StoreSuperRankDetailTable",
              children: (0, lT.jsx)(Hg.d, {})
            }), (0, lT.jsxs)("div", {
              className: "StoreTileActions",
              children: [mT, MT]
            })]
          })]
        })]
      })
    }
    var pg = mT(2727),
      Bg = mT(3635),
      Zg = mT(3226),
      cg = mT(3235);
    const vg = [AM.u.yellow, AM.u.green, AM.u.aqua, AM.u.blue, AM.u.purple, AM.u.red];

    function fg(TT) {
      return "needsRecipient" === TT || "lookingUp" === TT || "gift" === TT || "recipientOwns" === TT || "recipientSharesOwned" === TT || "recipientSubscribed" === TT
    }

    function qg(TT) {
      const {
        onKeyDown: UT,
        ...mT
      } = (0, kT.R)();
      return {
        ...mT,
        "aria-label": TT,
        onKeyDown: TT => {
          TT.target === TT.currentTarget && (null === UT || void 0 === UT || UT(TT))
        }
      }
    }

    function ig(TT) {
      let {
        text: UT
      } = TT;
      return (0, lT.jsx)("span", {
        className: "StoreRainbowText",
        children: Array.from(UT).map(((TT, UT) => (0, lT.jsx)("span", {
          style: {
            color: vg[UT % vg.length]
          },
          children: TT
        }, UT)))
      })
    }
    const bg = {
      recipientOwns: "store:alreadyOwns",
      sharesOwned: "store:sharesOwned",
      recipientSharesOwned: "store:recipientSharesOwned",
      subscribed: "store:subscribed",
      recipientSubscribed: "store:recipientSubscribed"
    };

    function Og(TT) {
      let {
        state: UT,
        item: mT,
        price: WT,
        busy: zT,
        highlight: HT = !1,
        onAct: jT,
        onNeedRecipient: LT,
        onLogin: pT
      } = TT;
      const {
        t: BT
      } = (0, gT.z)(), ZT = "superRank" === mT ? QT.m.product.days : null, cT = TT => null === ZT ? BT(TT ? "general:gift" : "general:buy") : BT(TT ? "store:giftDays" : "store:buyDays", {
        days: ZT
      }), vT = (TT, UT) => {
        const mT = (0, lT.jsxs)(lT.Fragment, {
          children: [null === TT && (0, lT.jsx)("span", {
            className: "StoreCtaLabel StoreCtaLabelPending"
          }), null !== TT && (0, lT.jsx)("span", {
            className: "StoreCtaLabel",
            title: TT,
            children: TT
          })]
        });
        return null !== ZT ? (0, lT.jsxs)(lT.Fragment, {
          children: [UT && (0, lT.jsx)("span", {
            className: "StoreCtaIcon",
            children: UT
          }), mT, (0, lT.jsxs)("span", {
            className: "StoreCtaPrice",
            children: ["\xb7", (0, lT.jsx)(gg.d, {
              amount: WT
            })]
          })]
        }) : (0, lT.jsxs)(lT.Fragment, {
          children: [(0, lT.jsxs)("span", {
            className: "StoreCtaLead",
            children: [mT, "\xb7"]
          }), (0, lT.jsxs)("span", {
            className: "StoreCtaPrice",
            children: [UT, (0, lT.jsx)(gg.d, {
              amount: WT
            })]
          })]
        })
      };
      let fT;
      switch (UT) {
        case "pending":
          fT = (0, lT.jsx)(kT.l, {
            className: "StoreCtaButton",
            disabled: !0,
            children: vT(null)
          });
          break;
        case "login":
          fT = (0, lT.jsx)(kT.l, {
            className: "StoreCtaButton",
            onClick: pT,
            children: vT(cT(!1))
          });
          break;
        case "owned":
          fT = (0, lT.jsx)(kT.g, {
            className: "StoreCtaButton",
            onClick: () => {
              YT.b.set({
                openEverythingMenuName: vU.k.CUSTOMISATION
              })
            },
            children: (0, lT.jsxs)("span", {
              className: "StoreCtaLabel",
              children: [(0, lT.jsx)(nT.c, {
                name: "shirt"
              }), " ", BT("store:equip")]
            })
          });
          break;
        case "recipientOwns":
        case "sharesOwned":
        case "recipientSharesOwned":
        case "subscribed":
        case "recipientSubscribed":
          fT = (0, lT.jsx)(kT.l, {
            className: "StoreCtaButton",
            disabled: !0,
            children: (0, lT.jsx)("span", {
              className: "StoreCtaLabel",
              children: BT(bg[UT])
            })
          });
          break;
        case "needsRecipient":
        case "lookingUp":
        case "gift":
          fT = (0, lT.jsx)(kT.l, {
            className: "StoreCtaButton",
            disabled: "needsRecipient" === UT || null === WT,
            loading: "lookingUp" === UT || zT,
            onClick: jT,
            analyticsClick: {
              id: "store.gift",
              value: mT
            },
            children: vT(cT(!0), uM.e)
          });
          break;
        case "buy":
        case "recharge":
          fT = (0, lT.jsx)(kT.l, {
            className: "StoreCtaButton",
            loading: zT,
            disabled: null === WT,
            onClick: jT,
            analyticsClick: {
              id: "store.buy",
              value: mT
            },
            children: vT(cT(!1))
          })
      }
      return (0, lT.jsx)("div", {
        className: MT()("StoreCta", {
          StoreCtaHighlight: HT,
          StoreCtaLabelFirst: null !== ZT
        }),
        onClick: TT => {
          TT.stopPropagation(), "needsRecipient" === UT && LT()
        },
        children: fT
      })
    }

    function eg() {
      const {
        t: TT
      } = (0, gT.z)();
      return (0, lT.jsxs)("ul", {
        className: "StorePerks",
        children: [(0, lT.jsxs)("li", {
          children: [(0, lT.jsx)(nT.c, {
            name: "check"
          }), (0, lT.jsx)(ig, {
            text: TT("store:colourfulNames")
          })]
        }), (0, lT.jsxs)("li", {
          children: [(0, lT.jsx)(nT.c, {
            name: "check"
          }), TT("store:perkCapes")]
        }), (0, lT.jsxs)("li", {
          children: [(0, lT.jsx)(nT.c, {
            name: "check"
          }), TT("store:perkNoAdverts")]
        }), (0, lT.jsxs)("li", {
          children: [(0, lT.jsx)(nT.c, {
            name: "check"
          }), TT("store:perkFriends", {
            count: (0, RT.c)(["super"])
          })]
        })]
      })
    }

    function Yg(TT) {
      let {
        daysLeft: UT,
        totalDays: mT,
        urgent: WT
      } = TT;
      const {
        t: zT
      } = (0, gT.z)(), nT = mT > 0 ? Math.min(1, Math.max(.03, UT / mT)) : 1;
      return (0, lT.jsxs)("div", {
        className: MT()("StoreSuperRankMeterArea", {
          StoreSuperRankMeterUrgent: WT
        }),
        children: [(0, lT.jsx)("span", {
          className: "StoreSuperRankDaysLeft",
          children: 1 === UT ? zT("store:oneDayLeft") : zT("store:daysLeft", {
            days: UT
          })
        }), (0, lT.jsx)("div", {
          className: "StoreSuperRankMeter",
          children: (0, lT.jsx)("i", {
            style: {
              width: 100 * nT + "%"
            }
          })
        })]
      })
    }

    function Jg(TT) {
      var UT;
      let {
        state: mT,
        urgent: WT,
        daysLeft: zT,
        totalDays: HT,
        recipientHasSuperRank: kT,
        busy: jT,
        highlight: LT,
        onOpen: pT,
        onAct: BT,
        onNeedRecipient: ZT,
        onLogin: cT
      } = TT;
      const {
        t: vT
      } = (0, gT.z)(), fT = fg(mT), {
        days: qT
      } = QT.m.product, iT = vT("store:recipientHasSuperRank", {
        giftDays: qT
      }), bT = null === (UT = oT("subscribed" === mT)) || void 0 === UT ? void 0 : UT.text;
      return (0, lT.jsxs)("div", {
        className: MT()("StoreTile StoreSuperRankTile", {
          StoreTileGift: fT,
          StoreSuperRankTileUrgent: "recharge" === mT && WT,
          StoreSuperRankTileWithChip: kT,
          StoreSuperRankTileGiftReady: "gift" === mT
        }),
        ...qg(vT("homePage:superRank")),
        "data-store-item": "superRank",
        onPointerEnter: lg,
        onFocus: lg,
        onClick: pT,
        children: [(0, lT.jsx)("div", {
          className: "StoreSuperRankArt",
          style: {
            backgroundImage: `url(${oM.g})`
          }
        }), fT && (0, lT.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, lT.jsxs)("div", {
          className: "StoreTileContent",
          children: [kT && (0, lT.jsx)("span", {
            className: "StoreChip StoreChipGift",
            title: iT,
            children: iT
          }), (0, lT.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, lT.jsx)(nT.c, {
              name: "bolt"
            }), " ", vT("homePage:superRank")]
          }), fT && (0, lT.jsx)("div", {
            className: "StoreTilePitch",
            children: vT("store:giftPitch", {
              days: qT
            })
          }), "recharge" === mT && (0, lT.jsx)(Yg, {
            daysLeft: zT,
            totalDays: HT,
            urgent: WT
          }), bT && (0, lT.jsx)("div", {
            className: "StoreSuperRankMeterArea",
            children: (0, lT.jsx)("span", {
              className: "StoreSuperRankDaysLeft",
              children: bT
            })
          }), (0, lT.jsx)(eg, {}), (0, lT.jsxs)("div", {
            className: "StoreTileActions",
            children: [(0, lT.jsx)(Og, {
              state: mT,
              item: "superRank",
              price: QT.m.price,
              busy: jT,
              highlight: LT,
              onAct: BT,
              onNeedRecipient: ZT,
              onLogin: cT
            }), "needsRecipient" === mT && (0, lT.jsx)("span", {
              className: "StoreTileNote StoreTileNoteGift",
              children: vT("store:pickRecipientFirst")
            }), "recharge" === mT && WT && (0, lT.jsx)("span", {
              className: "StoreTileNote StoreSuperRankEnding",
              children: 1 === zT ? vT("store:endsInOneDay") : vT("store:endsInDays", {
                days: zT
              })
            })]
          })]
        })]
      })
    }
    const xg = {
      common: "StorePackTileCommon",
      rare: "StorePackTileRare",
      epic: "StorePackTileEpic",
      legendary: "StorePackTileLegendary",
      mythic: "StorePackTileMythic"
    };

    function dg(TT) {
      var UT;
      let {
        pack: mT,
        state: zT,
        busy: HT,
        onOpen: kT,
        onAct: jT,
        onNeedRecipient: LT,
        onLogin: pT
      } = TT;
      const {
        t: BT
      } = (0, gT.z)(), ZT = aM.b[mT], cT = PM.l[mT], vT = (0, oM.n)(mT), fT = (0, WT.useRef)(null);
      (0, Zg.k)(mT, fT);
      const qT = fg(zT),
        iT = null !== (UT = ZT.displayName) && void 0 !== UT ? UT : mT,
        bT = (0, Bg.c)((() => {
          (0, pg.h)();
          const TT = (0, Zg.d)(mT);
          void 0 !== TT && (0, kg.i)((0, Zg.c)(TT))
        })),
        [OT] = (0, WT.useState)(hM.k);
      return (0, lT.jsxs)("div", {
        className: MT()("StoreTile StorePackTile", xg[ZT.tier], {
          StorePackTileOwned: "owned" === zT,
          StorePackTileRecipientOwns: "recipientOwns" === zT,
          StoreTileGift: qT
        }),
        ...qg(iT),
        ref: fT,
        "data-store-item": mT,
        onClick: kT,
        onPointerMove: TT => {
          "mouse" !== TT.pointerType || 0 === TT.movementX && 0 === TT.movementY || OT || bT.start()
        },
        onPointerLeave: bT.cancel,
        children: [cT && (0, lT.jsx)(cT, {}), (0, lT.jsx)("div", {
          className: "StorePackCharacters",
          children: vT.map((TT => (0, lT.jsx)("div", {
            className: "StorePackCharacter",
            style: {
              backgroundImage: `url(${(0,oM.i)(TT)})`
            }
          }, TT)))
        }), (0, lT.jsx)("div", {
          className: "StoreTileScrim"
        }), qT && (0, lT.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, lT.jsxs)("div", {
          className: "StoreTileContent",
          children: [(0, lT.jsx)("div", {
            className: "StoreTileTitle",
            children: iT
          }), (0, lT.jsxs)("div", {
            className: "StoreTileMeta",
            children: [(0, lT.jsx)(cg.b, {
              tier: ZT.tier
            }), " \xb7 ", BT("store:itemCount", {
              count: (0, Mg.g)(mT)
            }), "owned" === zT && (0, lT.jsxs)("span", {
              className: "StoreTileOwned",
              children: [" \xb7 ", (0, lT.jsx)(nT.c, {
                name: "check"
              }), " ", BT("general:owned")]
            })]
          }), (0, lT.jsx)(Og, {
            state: zT,
            item: mT,
            price: (0, QT.i)(mT),
            busy: HT,
            onAct: jT,
            onNeedRecipient: LT,
            onLogin: pT
          })]
        })]
      })
    }
    var wg = mT(3195),
      tg = mT(1676),
      ag = mT(1580),
      yg = mT(3672);

    function Xg() {
      return (0, lT.jsx)("span", {
        className: "NewBadge",
        children: "NEW"
      })
    }
    var Ig = mT(1452),
      Qg = mT(1688),
      sg = mT(34311);

    function Fg(TT) {
      let {
        character: UT,
        drawn: mT,
        onDrawn: zT
      } = TT;
      const gT = (0, WT.useRef)(null),
        nT = (0, sg.d)(UT);
      return (0, lT.jsx)("div", {
        className: MT()("StoreCharacterLive", {
          StoreCharacterLiveDrawn: mT
        }),
        children: (0, lT.jsx)(WT.Suspense, {
          fallback: null,
          children: (0, lT.jsx)(pg.e, {
            ref: gT,
            framing: "store",
            turntableFromYaw: mT ? nT.yaw : null,
            onReady: () => {
              var TT, mT;
              null === (TT = gT.current) || void 0 === TT || TT.setOrbit(nT), null === (mT = gT.current) || void 0 === mT || mT.setAllCosmetics(Qg.e[UT].cosmetics)
            },
            onDrawn: zT
          })
        })
      })
    }
    const Pg = {
        common: "StoreCharacterCardCommon",
        rare: "StoreCharacterCardRare",
        epic: "StoreCharacterCardEpic",
        legendary: "StoreCharacterCardLegendary",
        mythic: "StoreCharacterCardMythic"
      },
      Vg = new Set(["wildSpirits"]);

    function ug(TT) {
      var UT;
      let {
        tile: mT,
        design: zT,
        canGoLive: HT,
        live: kT,
        busy: jT,
        highlight: LT,
        onLiveStart: pT,
        onLiveEnd: BT,
        onOpen: ZT,
        onAct: cT,
        onNeedRecipient: vT,
        onLogin: fT
      } = TT;
      const {
        t: qT
      } = (0, gT.z)(), {
        pack: iT,
        state: bT
      } = mT, OT = aM.b[iT], eT = (0, aM.f)(iT), YT = (0, oM.j)(iT), JT = PM.l[YT], xT = Vg.has(YT), {
        tier: dT
      } = OT, wT = "legendary" === dT || "mythic" === dT, tT = (0, WT.useRef)(null);
      (0, Ig.c)(tT, "epic" === dT || wT || xT);
      const [aT, XT] = (0, WT.useState)(!1);
      return !kT && aT && XT(!1), (0, lT.jsxs)("div", {
        ref: tT,
        className: MT()("StoreCharacterCard", `StoreCharacterCard${zT}`, Pg[dT], {
          StoreCharacterCardOwned: "owned" === bT || "recipientOwns" === bT,
          StoreCharacterCardGift: fg(bT),
          StoreCharacterCardItem: void 0 === eT
        }),
        onPointerMove: TT => {
          "mouse" !== TT.pointerType || 0 === TT.movementX && 0 === TT.movementY || !HT || kT || void 0 === eT || pT()
        },
        onPointerLeave: BT,
        children: [(0, lT.jsx)("div", {
          className: "StoreCharacterBackdrop",
          children: JT && (0, lT.jsx)(JT, {
            simple: !0
          })
        }), wT && (0, lT.jsx)("div", {
          className: "StoreCharacterRays"
        }), (0, lT.jsxs)(yT.LinkPreserveSearch, {
          className: "StoreCharacterLink",
          to: (0, tg.e)({
            kind: "pack",
            pack: iT
          }),
          "data-store-item": iT,
          onClick: TT => {
            (0, ag.e)(TT) && (TT.preventDefault(), ZT())
          },
          children: [(0, lT.jsxs)("div", {
            className: "StoreCharacterStage",
            children: [(0, lT.jsx)("div", {
              className: "StoreCharacterHalo"
            }), (0, lT.jsx)("div", {
              className: MT()("StoreCharacterFigure", {
                StoreCharacterFigureCovered: aT
              }),
              style: {
                backgroundImage: `url(${(0,oM.s)(iT)})`
              }
            }), kT && void 0 !== eT && (0, lT.jsx)(Fg, {
              character: eT,
              drawn: aT,
              onDrawn: () => {
                XT(!0)
              }
            })]
          }), (0, lT.jsx)("div", {
            className: "StoreCharacterName",
            children: null !== (UT = OT.displayName) && void 0 !== UT ? UT : iT
          }), (0, lT.jsx)(cg.b, {
            tier: dT,
            className: "StoreCharacterTier"
          })]
        }), (0, lT.jsx)("div", {
          className: "StoreCharacterScrim"
        }), xT && (0, lT.jsx)("span", {
          className: "StoreCharacterNew",
          children: (0, lT.jsx)(Xg, {})
        }), "owned" === bT && (0, lT.jsx)("span", {
          className: "StoreCharacterOwned",
          title: qT("general:owned"),
          "aria-label": qT("general:owned"),
          children: (0, lT.jsx)(nT.c, {
            name: "check"
          })
        }), (0, lT.jsx)("div", {
          className: "StoreCharacterPlate",
          children: (0, lT.jsx)(Og, {
            state: bT,
            item: iT,
            price: (0, QT.i)(iT),
            busy: jT,
            highlight: LT,
            onAct: cT,
            onNeedRecipient: vT,
            onLogin: fT
          })
        })]
      })
    }

    function Cg(TT) {
      let {
        tiles: UT,
        busy: mT,
        highlightItem: zT,
        onOpen: MT,
        onAct: gT,
        onNeedRecipient: nT,
        onLogin: HT
      } = TT;
      const kT = (0, yg.v)("storeCharacterCardFoil"),
        jT = (0, yg.v)("storeCharacterCardSpotlight"),
        LT = kT ? "Foil" : jT ? "Spotlight" : "Showcase",
        [pT] = (0, WT.useState)(hM.k),
        [BT, ZT] = (0, WT.useState)(null);
      return (0, lT.jsx)("div", {
        className: "StoreCharacterGrid",
        children: UT.map((TT => (0, lT.jsx)(ug, {
          tile: TT,
          design: LT,
          canGoLive: !pT,
          live: BT === TT.pack,
          busy: mT,
          highlight: zT === TT.pack,
          onLiveStart: () => {
            ZT(TT.pack)
          },
          onLiveEnd: () => {
            ZT((UT => UT === TT.pack ? null : UT))
          },
          onOpen: () => {
            MT(TT.pack)
          },
          onAct: () => {
            gT(TT.pack)
          },
          onNeedRecipient: nT,
          onLogin: () => {
            HT(TT.pack)
          }
        }, TT.pack)))
      })
    }
    var rg = mT(34323);

    function Kg(TT) {
      let {
        title: UT
      } = TT;
      return (0, lT.jsx)("h2", {
        className: "StoreSectionDivider",
        children: (0, lT.jsx)("span", {
          className: "StoreSectionDividerTitle",
          children: UT
        })
      })
    }

    function Sg(TT) {
      let {
        mountAtOnce: UT,
        children: mT
      } = TT;
      const zT = (0, WT.useRef)(null),
        [MT, gT] = (0, WT.useState)(UT),
        nT = (0, rg.d)();
      return (0, WT.useLayoutEffect)((() => {
        const TT = zT.current;
        TT && TT.getBoundingClientRect().top < TT.parentElement.getBoundingClientRect().bottom && gT(!0)
      }), []), MT || nT ? (0, lT.jsx)(lT.Fragment, {
        children: mT
      }) : (0, lT.jsx)("div", {
        ref: zT
      })
    }

    function Gg(TT) {
      let {
        layout: UT,
        mountAtOnce: mT,
        bundleGift: WT,
        superRankTotalDays: zT,
        busy: MT,
        highlightItem: nT,
        onOpen: HT,
        onAct: kT,
        onNeedRecipient: jT,
        onLogin: LT,
        dailyDropTile: pT
      } = TT;
      const {
        t: BT
      } = (0, gT.z)(), ZT = UT.packs.filter((TT => void 0 === (0, aM.f)(TT.pack) && !(0, aM.m)(TT.pack))), cT = UT.packs.filter((TT => void 0 !== (0, aM.f)(TT.pack))), vT = UT.packs.filter((TT => (0, aM.m)(TT.pack)));
      return (0, lT.jsxs)(lT.Fragment, {
        children: [(0, lT.jsx)(wg.b, {
          className: "StoreSuperGems",
          gift: WT,
          highlightSku: nT,
          leadingTile: pT
        }), (0, lT.jsx)(Kg, {
          title: BT("store:rank")
        }), (0, lT.jsx)(Jg, {
          state: UT.superRank.state,
          urgent: UT.superRank.urgent,
          daysLeft: UT.superRankDaysLeft,
          totalDays: zT,
          recipientHasSuperRank: UT.recipientHasSuperRank,
          busy: MT,
          highlight: "superRank" === nT,
          onOpen: () => {
            HT("superRank")
          },
          onAct: () => {
            kT("superRank")
          },
          onNeedRecipient: jT,
          onLogin: () => {
            LT("superRank")
          }
        }), (0, lT.jsxs)(Sg, {
          mountAtOnce: mT,
          children: [(0, lT.jsx)(Kg, {
            title: BT("store:bundles")
          }), (0, lT.jsx)("div", {
            className: "StorePackGrid",
            children: ZT.map((TT => (0, lT.jsx)(dg, {
              pack: TT.pack,
              state: TT.state,
              busy: MT,
              onOpen: () => {
                HT(TT.pack)
              },
              onAct: () => {
                kT(TT.pack)
              },
              onNeedRecipient: jT,
              onLogin: () => {
                LT(TT.pack)
              }
            }, TT.pack)))
          }), (0, lT.jsxs)(Sg, {
            mountAtOnce: mT,
            children: [(0, lT.jsx)(Kg, {
              title: BT("store:characters")
            }), (0, lT.jsx)(Cg, {
              tiles: cT,
              busy: MT,
              highlightItem: nT,
              onOpen: HT,
              onAct: kT,
              onNeedRecipient: jT,
              onLogin: LT
            }), vT.length > 0 && (0, lT.jsxs)(lT.Fragment, {
              children: [(0, lT.jsx)(Kg, {
                title: BT("store:premiumItems")
              }), (0, lT.jsx)(Cg, {
                tiles: vT,
                busy: MT,
                highlightItem: nT,
                onOpen: HT,
                onAct: kT,
                onNeedRecipient: jT,
                onLogin: LT
              })]
            })]
          })]
        })]
      })
    }

    function Ng(TT) {
      let {
        state: UT,
        mode: mT,
        giftName: WT,
        busy: zT,
        highlight: MT,
        purchaseError: nT,
        onBack: HT,
        onChooseRecipient: jT,
        onAct: LT,
        onLogin: pT
      } = TT;
      const {
        t: BT
      } = (0, gT.z)(), ZT = oT("gift" !== mT);
      return (0, lT.jsx)(Lg, {
        onBack: HT,
        recipient: "gift" === mT && (0, lT.jsxs)(lT.Fragment, {
          children: [WT && (0, lT.jsxs)("span", {
            className: "StoreDetailRecipient",
            title: BT("store:giftFor", {
              name: WT
            }),
            children: [uM.e, " ", BT("store:giftFor", {
              name: WT
            })]
          }), !WT && (0, lT.jsxs)("div", {
            ...(0, kT.R)(),
            className: "StoreDetailRecipient StoreDetailRecipientChoose",
            onClick: jT,
            children: [uM.e, " ", BT("store:chooseRecipient")]
          })]
        }),
        cta: (0, lT.jsx)(Og, {
          state: UT,
          item: "superRank",
          price: QT.m.price,
          busy: zT,
          highlight: MT,
          onAct: LT,
          onNeedRecipient: jT,
          onLogin: pT
        }),
        afterCta: (0, lT.jsxs)(lT.Fragment, {
          children: [ZT && (0, lT.jsx)("span", {
            className: "StoreTileNote",
            children: ZT.text
          }), (null === ZT || void 0 === ZT ? void 0 : ZT.manageUrl) && (0, lT.jsx)("a", {
            className: "StoreTileNote StoreManageSubscription",
            href: ZT.manageUrl,
            target: "_blank",
            rel: "noreferrer",
            children: BT("payments:manageSubscription")
          }), nT && (0, lT.jsx)("span", {
            className: "StoreTileNote StoreTileNoteError",
            children: BT(nT)
          })]
        })
      })
    }
    var Eg = mT(149);
    const hg = Eg.q("kind", [Eg.L({
      kind: Eg.w("refused"),
      heldTierId: Eg._(),
      until: Eg.I()
    }), Eg.L({
      kind: Eg.w("refund"),
      tierId: Eg._(),
      refundedMs: Eg.I(),
      forfeitedMs: Eg.I(),
      premiumCurrency: Eg.I()
    }), Eg.L({
      kind: Eg.w("none")
    })]);
    async function Dg(TT) {
      const UT = await (0, wT.postJsonWithMetricsCookiesAndJsonResponse)(`${ZU.clientSideServerUrls.indexUrl}/index/ranks/subscribe-preview`, {
        productId: TT
      }, {
        retries: 1
      });
      return hg.parse(UT)
    }
    var og = mT(3168),
      Ag = mT(3202);

    function Rg(TT, UT) {
      const mT = Math.max(1, Math.round(UT / PT.k));
      return [1 === mT ? `${TT}OneDay` : TT, {
        days: mT.toLocaleString()
      }]
    }

    function Tn(TT) {
      let {
        price: UT
      } = TT;
      const {
        t: mT
      } = (0, gT.z)();
      return (0, lT.jsxs)("div", {
        className: "StoreSubscriptionTerms",
        children: [(0, lT.jsx)(eg, {}), (0, lT.jsx)("div", {
          className: "SmallTextLight",
          children: mT("payments:subscriptionRenewsMonthly", {
            price: UT
          })
        }), (0, lT.jsxs)("div", {
          className: "StoreSubscriptionTermsLinks SmallTextLight",
          children: [(0, lT.jsx)("a", {
            href: "/terms-of-service",
            target: "_blank",
            rel: "noreferrer",
            children: mT("homePage:termsOfService")
          }), (0, lT.jsx)("a", {
            href: "/privacy-policy",
            target: "_blank",
            rel: "noreferrer",
            children: mT("homePage:privacyPolicy")
          })]
        })]
      })
    }

    function Un() {
      const TT = (0, uT.usePurchasesAllowed)();
      return "true" === new URLSearchParams(window.location.search).get("tempSubscription") && TT && (0, uT.subscriptionsSold)() ? (0, lT.jsx)(mn, {}) : null
    }

    function mn() {
      const {
        t: TT
      } = (0, gT.z)(), {
        userContext: UT
      } = (0, BT.d)(), {
        purchaseUnderWay: mT,
        notice: zT,
        subscribe: MT
      } = (0, og.b)(), [nT, HT] = (0, WT.useState)(null), [jT, LT] = (0, WT.useState)(0), [pT, ZT] = (0, WT.useState)(!1), cT = (0, WT.useRef)(!0), fT = UT !== wT.NULL_USER_CONTEXT, qT = null !== nT && nT.loadedFor === UT ? nT.offer : null, iT = null === zT || void 0 === zT ? void 0 : zT.pendingIntentId, bT = (0, WT.useRef)(iT);

      function OT() {
        LT((TT => TT + 1))
      }
      async function eT(TT) {
        ZT(!1), await MT(TT), cT.current && OT()
      }
      if ((0, WT.useEffect)((() => (cT.current = !0, () => {
          cT.current = !1
        })), []), (0, WT.useEffect)((() => {
          void 0 !== bT.current && void 0 === iT && OT(), bT.current = iT
        }), [iT]), (0, WT.useEffect)((() => {
          if (!fT) return;
          let TT = !1;
          return ZT(!1), async function() {
            const {
              offering: TT
            } = await (0, hT.getBillingClient)().getOfferings("superRankPage"), UT = null === TT || void 0 === TT ? void 0 : TT.packages.find(yM.isPricedPackage);
            return void 0 === UT ? {
              kind: "unavailable"
            } : {
              kind: "loaded",
              pkg: UT,
              preview: await Dg(UT.productId)
            }
          }().catch((TT => (console.error("Billing: loading the Super Rank subscription or its preview failed:", TT), {
            kind: "loadFailed"
          }))).then((mT => {
            TT || HT((TT => "loadFailed" === mT.kind && (null === TT || void 0 === TT ? void 0 : TT.loadedFor) === UT ? TT : {
              loadedFor: UT,
              offer: mT
            }))
          })), () => {
            TT = !0
          }
        }), [UT, fT, jT]), null === qT) return null;
      if ("loaded" !== qT.kind) return (0, lT.jsx)(Ag.i, {
        notice: {
          kind: "error",
          key: "unavailable" === qT.kind ? "payments:subscriptionUnavailable" : "payments:subscriptionLoadFailed"
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const {
        pkg: YT,
        preview: JT
      } = qT;
      if ("refused" === JT.kind) return (0, lT.jsx)(Ag.i, {
        notice: {
          kind: "error",
          key: "payments:subscribeRefusedGemRank",
          values: {
            date: new Date(JT.until).toLocaleDateString()
          }
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const xT = (0, wg.d)(YT),
        dT = (0, vT.isMobileApp)() && (0, lT.jsx)(Tn, {
          price: xT
        });
      if (pT && "refund" === JT.kind) {
        const {
          refundedMs: UT,
          forfeitedMs: WT,
          premiumCurrency: zT
        } = JT, MT = WT + (0 === zT ? UT : 0), [gT, nT] = Rg("payments:subscribeRefundsGemRank", UT), [HT, jT] = Rg("payments:subscribeForfeitsGemRank", MT);
        return (0, lT.jsxs)("div", {
          className: "StoreTempSubscribe SmallTextBold",
          children: [(0, lT.jsx)("div", {
            children: TT("payments:subscribeEndsGemRank")
          }), zT > 0 && (0, lT.jsx)("div", {
            children: TT(gT, {
              ...nT,
              amount: zT.toLocaleString()
            })
          }), MT > 0 && (0, lT.jsx)("div", {
            children: TT(HT, jT)
          }), (0, lT.jsxs)("div", {
            className: "StoreTempSubscribeButtons",
            children: [(0, lT.jsx)(kT.g, {
              onClick: () => {
                ZT(!1)
              },
              children: TT("general:cancel")
            }), (0, lT.jsx)(kT.l, {
              onClick: () => {
                eT(YT)
              },
              loading: mT,
              children: TT("payments:subscribeContinue", {
                price: xT
              })
            })]
          }), dT]
        })
      }
      return (0, lT.jsxs)("div", {
        className: "StoreTempSubscribe",
        children: [(0, lT.jsx)(Ag.i, {
          notice: zT,
          className: "SmallTextBold"
        }), (0, lT.jsx)(Ag.d, {
          className: "SmallTextBold"
        }), (0, lT.jsx)(kT.l, {
          onClick: () => {
            "refund" === JT.kind ? ZT(!0) : eT(YT)
          },
          disabled: void 0 !== iT,
          loading: mT,
          children: TT("payments:subscribeToSuperRank", {
            price: xT
          })
        }), dT]
      })
    }
    var Wn = mT(2687);

    function zn(TT) {
      let {
        state: UT,
        view: mT,
        claiming: zT,
        onOpen: nT
      } = TT;
      const {
        t: jT
      } = (0, gT.z)(), LT = (0, WT.useRef)(null), pT = "ready" === mT.kind;
      (0, Ig.c)(LT, pT);
      const BT = (0, DU.i)(UT);
      return (0, lT.jsxs)("div", {
        ref: LT,
        className: MT()("DailyDropTile", {
          DailyDropTileReady: pT
        }),
        children: [pT && (0, lT.jsx)(HT.c, {
          top: "0.25rem",
          right: "0.25rem"
        }), (0, lT.jsx)("div", {
          className: "DailyDropTileTitle",
          children: jT("dailyDrop:name")
        }), (0, lT.jsxs)("div", {
          className: "DailyDropTileArt",
          children: [(0, lT.jsx)(Wn.d, {
            className: "DailyDropTileBlock"
          }), (0, lT.jsxs)("div", {
            className: "DailyDropTileInfo SmallTextLight",
            children: [(0, lT.jsx)("span", {
              children: jT("dailyDrop:collected", {
                count: UT.collected.length,
                total: UT.total
              })
            }), null !== BT && (0, lT.jsx)("span", {
              className: "DailyDropTileOdds",
              children: jT("dailyDrop:odds", {
                percent: BT.toLocaleString(void 0, {
                  maximumFractionDigits: 1
                })
              })
            })]
          })]
        }), "ready" === mT.kind && (0, lT.jsx)(kT.l, {
          className: "DailyDropTileOpen",
          onClick: nT,
          loading: zT,
          children: jT("dailyDrop:open")
        }), "waiting" === mT.kind && (0, lT.jsx)("div", {
          className: "DailyDropTileWait SmallTextBold",
          children: jT("dailyDrop:nextIn", {
            count: mT.hours
          })
        })]
      })
    }
    var Mn = mT(2348);
    const gn = 32;

    function nn(TT) {
      let {
        worn: UT,
        wM: mT,
        tM: zT,
        className: HT
      } = TT;
      const {
        t: kT
      } = (0, gT.z)(), jT = (0, WT.useRef)(null), [LT, pT] = (0, WT.useState)(null), [BT, ZT] = (0, WT.useState)(!1);
      async function cT() {
        var TT;
        const UT = jT.current;
        if (!UT) return;
        const WT = null === (TT = UT.getDevTools()) || void 0 === TT ? void 0 : TT.canvas();
        let MT = null;
        try {
          MT = WT ? function(TT) {
            if (0 === TT.width || 0 === TT.height) return null;
            const UT = document.createElement("canvas");
            UT.width = gn, UT.height = gn;
            const mT = UT.getContext("2d", {
              willReadFrequently: !0
            });
            if (!mT) return null;
            mT.drawImage(TT, 0, 0, gn, gn);
            const {
              data: WT
            } = mT.getImageData(0, 0, gn, gn);
            for (let zT = 3; zT < WT.length; zT += 4)
              if (WT[zT] > 0) return TT.toDataURL("image/png");
            return null
          }(WT) : null
        } catch (nT) {
          console.warn("Couldn't read the character preview for the Lucky Skin Block's Before", nT)
        }
        null === MT && console.warn("The character preview read back blank: the Lucky Skin Block's Before shows the head"), pT(null === MT ? {
          kind: "head"
        } : {
          kind: "still",
          src: MT
        }), UT.updateCosmetic(mT, zT);
        const gT = new Promise((TT => {
          setTimeout(TT, 1e4)
        }));
        await Promise.race([UT.ensureReadyForCapture(mT), gT]).catch((TT => {
          console.error("Failed to draw the Lucky Skin Block's piece on the character preview", TT)
        })), jT.current === UT && ZT(!0)
      }
      return (0, lT.jsxs)("div", {
        className: MT()("DailyDropRevealFigures", HT),
        children: [(0, lT.jsxs)("div", {
          className: "DailyDropRevealFigure",
          children: [(0, lT.jsxs)("div", {
            className: "DailyDropRevealFigureArt",
            children: ["still" === (null === LT || void 0 === LT ? void 0 : LT.kind) && (0, lT.jsx)("img", {
              className: "DailyDropRevealBeforeStill",
              src: LT.src,
              alt: "",
              draggable: !1
            }), "head" === (null === LT || void 0 === LT ? void 0 : LT.kind) && (0, lT.jsx)("div", {
              className: "DailyDropRevealBeforeHead",
              children: (0, lT.jsx)(RM.e, {
                cosmetics: UT
              })
            }), null === LT && (0, lT.jsx)(OT.c, {})]
          }), (0, lT.jsx)("span", {
            className: "DailyDropRevealFigureLabel SmallTextBold",
            children: kT("dailyDrop:before")
          })]
        }), (0, lT.jsx)(nT.c, {
          name: "arrow-right",
          className: "DailyDropRevealArrow"
        }), (0, lT.jsxs)("div", {
          className: "DailyDropRevealFigure DailyDropRevealAfter",
          children: [(0, lT.jsxs)("div", {
            className: "DailyDropRevealFigureArt",
            children: [(0, lT.jsx)("div", {
              className: MT()("DailyDropRevealLive", {
                DailyDropRevealLiveDrawn: BT
              }),
              children: (0, lT.jsx)(WT.Suspense, {
                fallback: null,
                children: (0, lT.jsx)(pg.e, {
                  ref: jT,
                  onReady: () => {
                    var TT, mT;
                    null === (TT = jT.current) || void 0 === TT || TT.resetCamera(), null === (mT = jT.current) || void 0 === mT || mT.setAllCosmetics(UT)
                  },
                  onDrawn: () => {
                    requestAnimationFrame((() => {
                      cT()
                    }))
                  }
                })
              })
            }), !BT && (0, lT.jsx)(OT.c, {})]
          }), (0, lT.jsx)("span", {
            className: "DailyDropRevealFigureLabel SmallTextBold",
            children: kT("dailyDrop:after")
          })]
        })]
      })
    }
    var Hn = mT(1976);
    const kn = "dailyDropReminderAsked_";

    function jn(TT) {
      return async function(TT) {
        if (TT.remindersOn || (0, YT.c)(YT.b.get("gameState"))) return null;
        const UT = await wT.userContextManager.getCurrentUserContext(),
          mT = kn + UT.whamm;
        if (null !== jm.l.getItem(mT)) return null;
        const [WT, zT] = await Promise.all([(0, GU.g)().catch((TT => (console.error("Couldn't tell whether this device can take push notifications:", TT), null))), pn()]);
        if (null === WT && !zT) return null;
        return {
          askedKey: mT,
          requester: WT
        }
      }(TT).catch((TT => (console.error("Failed to tell whether to ask about Lucky Skin Block reminders:", TT), null)))
    }

    function Ln(TT, UT) {
      jm.l.setItem(TT.askedKey, !0), (0, DU.s)("daily_drop.remind", UT ? "yes" : "no"), UT && async function(TT) {
        const UT = (0, DU.u)({
            remindersOn: !0
          }),
          mT = null === TT ? Promise.resolve() : TT(),
          [WT, zT] = await Promise.allSettled([UT, mT]);
        "rejected" === WT.status && console.error("Failed to turn on Lucky Skin Block reminders:", WT.reason);
        "rejected" === zT.status && console.error("Failed to ask for push notifications for Lucky Skin Block reminders:", zT.reason);
        "rejected" !== WT.status && "rejected" !== zT.status || Hn.i.showMessage({
          translationKey: "dailyDrop:remindFailed"
        })
      }(TT.requester)
    }

    function pn() {
      return (0, SU.b)().then((TT => TT.app + TT.browser + TT.msnPlay > 0), (TT => (console.error("Couldn't tell where push notifications reach this account:", TT), !0)))
    }
    const Bn = {
        closed: "opening",
        opening: "revealed",
        revealed: "shrinking",
        shrinking: "equip",
        equip: "equip",
        remind: "remind"
      },
      Zn = {
        opening: 900,
        shrinking: 700
      };

    function cn(TT) {
      let {
        drop: UT,
        onClose: mT
      } = TT;
      const {
        t: zT
      } = (0, gT.z)(), {
        userContext: HT
      } = (0, BT.d)(), {
        state: jT,
        view: LT
      } = (0, DU.x)(), [pT, ZT] = (0, WT.useState)("closed"), [cT] = (0, WT.useState)((() => ({
        ...HT.getPlayerCosmetics()
      }))), [vT] = (0, WT.useState)((() => (0, DU.j)(UT, cT))), [fT, qT] = (0, WT.useState)(!1), [iT, bT] = (0, WT.useState)(!1), [OT] = (0, WT.useState)((() => null === jT ? Promise.resolve(null) : jn(jT))), [eT, JT] = (0, WT.useState)(null), xT = (0, NU.c)(), {
        gameState: dT
      } = (0, YT.h)(["gameState"]);
      async function wT() {
        const TT = await OT;
        xT.current && (null === TT ? mT() : (JT(TT), ZT("remind")))
      }

      function tT(TT) {
        null !== eT && Ln(eT, TT), mT()
      }(0, WT.useEffect)((() => {
        const TT = Zn[pT];
        if (void 0 === TT) return;
        const UT = setTimeout((() => {
          ZT(Bn[pT])
        }), TT);
        return () => {
          clearTimeout(UT)
        }
      }), [pT]);
      const aT = zT(`dailyDrop:kind_${vT.wM}`),
        yT = jT && zT("dailyDrop:collected", {
          count: jT.collected.length,
          total: jT.total
        }),
        XT = "revealed" === pT || "shrinking" === pT,
        IT = "equip" !== pT && "remind" !== pT;
      return (0, lT.jsx)(VW.e, {
        className: "DailyDropRevealScreen",
        close: "remind" === pT ? () => {
          tT(!1)
        } : mT,
        togglePointerLock: !1,
        closeOnPressBackground: !1,
        children: (0, lT.jsxs)("div", {
          className: MT()("DailyDropReveal", {
            DailyDropRevealOpening: "opening" === pT,
            DailyDropRevealShrinking: "shrinking" === pT,
            DailyDropRevealFiguresShown: "shrinking" === pT || "equip" === pT || "remind" === pT
          }),
          children: [(0, lT.jsxs)("div", {
            className: "DailyDropRevealStage",
            children: [(0, lT.jsx)(nn, {
              className: "DailyDropRevealStageFigures",
              worn: cT,
              wM: vT.wM,
              tM: vT.tM
            }), ("closed" === pT || "opening" === pT) && (0, lT.jsx)(Wn.d, {
              className: "DailyDropRevealBlock",
              open: "opening" === pT
            }), XT && (0, lT.jsx)("div", {
              className: "DailyDropRevealPiece",
              children: (0, lT.jsx)("img", {
                src: `/textures/charSkins/previews/${(0,Mn.j)(vT.wM,vT.tM).previewTex}.png`,
                alt: aT,
                draggable: !1
              })
            })]
          }), IT && (0, lT.jsxs)(lT.Fragment, {
            children: [(0, lT.jsxs)("div", {
              className: "DailyDropRevealCaption",
              children: [(0, lT.jsx)("div", {
                className: "DailyDropRevealTitle SmallTextBold",
                children: XT ? aT : zT("dailyDrop:name")
              }), "closed" === pT && (0, lT.jsx)("div", {
                className: "DailyDropRevealHint SmallTextLight",
                children: zT("dailyDrop:tapToOpen")
              }), "revealed" === pT && (0, lT.jsx)("div", {
                className: "DailyDropRevealHint SmallTextLight",
                children: zT("dailyDrop:tapToContinue")
              })]
            }), (0, lT.jsx)("button", {
              type: "button",
              className: "DailyDropRevealTap",
              "data-pad-default-focus": !0,
              "aria-label": zT("closed" === pT ? "dailyDrop:tapToOpen" : "dailyDrop:tapToContinue"),
              onClick: () => {
                ZT(Bn[pT])
              }
            })]
          }), "equip" === pT && (0, lT.jsxs)("div", {
            className: "DailyDropRevealEquip",
            children: [(0, lT.jsx)("div", {
              className: "DailyDropRevealKind SmallTextLight",
              children: aT
            }), (0, lT.jsx)("div", {
              className: "DailyDropRevealQuestion SmallTextBold",
              children: zT("dailyDrop:equipQuestion")
            }), (0, lT.jsxs)("div", {
              className: "DailyDropRevealButtons",
              children: [(0, lT.jsx)(kT.e, {
                className: "DailyDropRevealButton",
                disabled: fT,
                touchPressOn: "pointerup",
                onClick: () => {
                  (0, DU.s)("daily_drop.not_now", UT), wT()
                },
                children: zT("dailyDrop:notNow")
              }), (0, lT.jsx)(kT.e, {
                className: "DailyDropRevealButton",
                loading: fT,
                padDefaultFocus: !0,
                touchPressOn: "pointerup",
                onClick: () => {
                  !async function() {
                    (0, DU.s)("daily_drop.equip", UT), qT(!0), bT(!1);
                    try {
                      await (0, DU.g)(HT, vT.wM, vT.tM)
                    } catch (TT) {
                      return console.error("Failed to equip the Lucky Skin Block's piece", TT), qT(!1), void bT(!0)
                    }
                    await wT()
                  }()
                },
                children: zT("dailyDrop:equip")
              })]
            }), iT && (0, lT.jsx)("div", {
              className: "DailyDropRevealError SmallTextBold",
              children: zT("dailyDrop:equipFailed")
            }), !(0, YT.c)(dT) && (0, lT.jsxs)("button", {
              type: "button",
              className: "DailyDropRevealCustomise",
              disabled: fT,
              onClick: () => {
                var TT;
                (0, DU.s)("daily_drop.customise", UT), TT = vT.wM, Hm.j.EZ(IW, TT), YT.b.set({
                  openEverythingMenuName: vU.k.CUSTOMISATION
                }), mT()
              },
              children: [zT("dailyDrop:customise"), " ", (0, lT.jsx)(nT.c, {
                name: "arrow-right",
                className: "DailyDropRevealCustomiseArrow"
              })]
            }), yT && (0, lT.jsxs)("div", {
              className: "DailyDropRevealProgress SmallTextLight",
              children: [yT, "waiting" === (null === LT || void 0 === LT ? void 0 : LT.kind) && ` \xb7 ${zT("dailyDrop:nextInInline",{count:LT.hours})}`]
            })]
          }), "remind" === pT && (0, lT.jsxs)("div", {
            className: "DailyDropRevealEquip",
            children: [(0, lT.jsx)("div", {
              className: "DailyDropRevealQuestion SmallTextBold",
              children: zT("dailyDrop:remindTitle")
            }), (0, lT.jsx)("div", {
              className: "DailyDropRevealKind SmallTextLight",
              children: zT("dailyDrop:remindSubtitle")
            }), (0, lT.jsxs)("div", {
              className: "DailyDropRevealButtons",
              children: [(0, lT.jsx)(kT.e, {
                className: "DailyDropRevealButton",
                padDefaultFocus: !0,
                touchPressOn: "pointerup",
                onClick: () => {
                  tT(!1)
                },
                children: zT("dailyDrop:remindNo")
              }), (0, lT.jsx)(kT.e, {
                className: "DailyDropRevealButton",
                touchPressOn: "pointerup",
                onClick: () => {
                  tT(!0)
                },
                children: zT("dailyDrop:remindYes")
              })]
            })]
          })]
        })
      })
    }

    function vn(TT, UT) {
      const {
        t: mT
      } = (0, gT.z)(), zT = function(TT, UT) {
        const {
          state: mT,
          view: zT
        } = (0, DU.x)(), [MT, gT] = (0, WT.useState)(!1), [nT, HT] = (0, WT.useState)(!1), [kT, jT] = (0, WT.useState)(null), lT = (0, WT.useRef)(null), LT = (0, WT.useRef)(!1), pT = UT && "ready" === (null === zT || void 0 === zT ? void 0 : zT.kind);
        (0, WT.useEffect)((() => {
          TT ? pT && !LT.current && (LT.current = !0, (0, DU.s)("daily_drop.shown", "tile")) : LT.current = !1
        }), [TT, pT]), (0, WT.useEffect)((() => {
          TT || (vT(), HT(!1))
        }), [TT]);
        const BT = TT && null === kT && !(0, DU.p)(zT);
        (0, WT.useEffect)((() => {
          BT && YT.b.set({
            openEverythingMenuName: vU.k.CUSTOMISATION
          })
        }), [BT]);
        const ZT = (0, WT.useRef)(!1),
          cT = (0, WT.useRef)(TT);

        function vT() {
          null !== lT.current && (lT.current = null, jT(null))
        }
        return cT.current = TT, {
          state: mT,
          view: zT,
          claiming: MT,
          claimFailed: nT,
          reveal: kT,
          open: async function() {
            if (!ZT.current) {
              ZT.current = !0, gT(!0), HT(!1);
              try {
                const {
                  state: TT,
                  drop: UT
                } = await (0, DU.c)();
                if (null === TT || null === UT) return;
                if (!cT.current) return;
                (0, DU.s)("daily_drop.open", UT), lT.current = {
                  state: TT,
                  drop: UT
                }, jT(lT.current)
              } catch (TT) {
                console.error("Failed to claim the Lucky Skin Block", TT), cT.current && HT(!0)
              } finally {
                ZT.current = !1, gT(!1)
              }
            }
          },
          closeReveal: vT
        }
      }(TT, UT);
      return {
        shown: (0, DU.p)(zT.view) || null !== zT.reveal,
        tile: zT.state && zT.view && (0, lT.jsx)(zn, {
          state: zT.state,
          view: zT.view,
          claiming: zT.claiming,
          onOpen: zT.open
        }),
        claimFailed: zT.claimFailed && (0, lT.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: mT("dailyDrop:claimFailed")
        }),
        reveal: zT.reveal && (0, lT.jsx)(cn, {
          drop: zT.reveal.drop,
          onClose: zT.closeReveal
        })
      }
    }

    function fn(TT) {
      let {
        show: UT
      } = TT;
      const mT = vn(UT, UT);
      return UT && mT.shown ? (0, lT.jsxs)("div", {
        className: "Store StoreDailyDropOnly",
        children: [mT.claimFailed, mT.tile && (0, lT.jsx)("div", {
          className: "StoreDailyDropOnlyTile",
          children: mT.tile
        }), mT.reveal]
      }) : null
    }
    const qn = {
      kind: "board"
    };
    let bn = !1;

    function On(TT) {
      return "found" === TT.status || "error" === TT.status && "store:giftRecipientLookupFailed" === TT.error ? TT.name : null
    }(0, VT.w)(yM.prefetchBillingOfferings);
    const en = (0, WT.memo)((function(TT) {
      var UT;
      let {
        show: zT
      } = TT;
      const {
        t: nT
      } = (0, gT.z)(), {
        userContext: HT
      } = (0, BT.d)(), kT = (0, uT.usePurchasesAllowed)(), jT = HT !== wT.NULL_USER_CONTEXT, LT = SM(HT), [pT, ZT] = (0, cT.e)(), {
        page: vT,
        urlMode: fT,
        goTo: qT
      } = (0, GM.e)(), iT = function(TT) {
        return "superRank" === TT.kind ? "superRank" : "pack" === TT.kind ? TT.pack : null
      }(vT), {
        openEverythingMenuName: bT,
        gameState: OT
      } = (0, YT.h)(["openEverythingMenuName", "gameState"]), eT = null !== bT;
      ! function(TT, UT) {
        const [zT] = (0, WT.useState)(hM.k), [MT, gT] = (0, WT.useState)(!1);
        zT && UT && !MT && gT(!0);
        const nT = (0, YW.w)(),
          HT = zT && MT && TT && !nT;
        (0, WT.useEffect)((() => {
          if (!HT) return;
          let TT = null,
            UT = null,
            WT = null;
          const zT = () => !document.hasFocus() || document.activeElement instanceof HTMLIFrameElement || (0, hT.getBillingClient)().purchaseUnderWay,
            MT = () => {
              var mT;
              null === (mT = WT) || void 0 === mT || mT(), WT = null, null !== TT && (clearTimeout(TT), TT = null), null !== UT && (clearTimeout(UT), UT = null)
            },
            gT = () => {
              (0, NM.o)(!1), (0, NM.n)(!1), MT(), TT = setTimeout((() => {
                TT = null, WT = (0, EM.e)((() => {
                  WT = null, zT() ? gT() : ((0, NM.o)(!0), UT = setTimeout((() => {
                    UT = null, WT = (0, EM.e)((() => {
                      WT = null, zT() ? gT() : (0, NM.n)(!0)
                    }))
                  }), 3e3), Promise.resolve().then((() => mT(4749))).then((TT => {
                    TT.startBackgroundGameSetup()
                  }), (TT => {
                    console.warn("Background game setup: its chunk failed to load", TT)
                  })))
                }))
              }), 2e3)
            };
          for (const mT of DM) window.addEventListener(mT, gT, {
            capture: !0,
            passive: !0
          });
          return gT(), () => {
            for (const TT of DM) window.removeEventListener(TT, gT, {
              capture: !0
            });
            MT(), (0, NM.o)(!1), (0, NM.n)(!1)
          }
        }), [HT])
      }(zT && eT, "pack" === vT.kind);
      const JT = "landingPage" === OT;
      (0, WT.useEffect)((() => {
        eT && (0, yM.prefetchBillingOfferings)()
      }), [eT]), (0, WT.useEffect)((() => {
        eT && !zT && JT && (0, oM.t)()
      }), [eT, zT, JT]);
      const [xT, dT] = (0, WT.useState)(0), [tT, aT] = (0, WT.useState)(null), [yT, XT] = (0, WT.useState)(null), [IT, sT] = (0, WT.useState)(null), [FT, PT] = (0, WT.useState)(null), CT = (0, WT.useRef)(null), rT = (0, WT.useRef)(null), KT = (0, WT.useRef)(null), ST = (0, WT.useRef)(!1), GT = (0, VT.G)(), NT = (0, WT.useRef)(0), ET = (0, WT.useRef)(!1);

      function DT() {
        dT((TT => TT + 1))
      }(0, WT.useEffect)((() => {
        if (zT) {
          if (bn = !0, (0, VT.m)(), GT && GT.seq !== NT.current) {
            var TT;
            NT.current = GT.seq, "loginResume" !== GT.source && (0, VT.D)();
            const UT = (0, VT.e)(GT);
            fT || qT(UT), PT(null !== (TT = GT.highlight) && void 0 !== TT ? TT : null), XT(null), "gift" === GT.mode && GT.giftRecipientName ? LT.choose(GT.giftRecipientName, "prefilled") : "current" !== GT.mode && LT.clear(), "gift" !== GT.mode || GT.giftRecipientName || DT(), (0, UU.reportAnalyticsClick)({
              id: "store.open",
              value: GT.source
            })
          } else ET.current || (0, UU.reportAnalyticsClick)({
            id: "store.open",
            value: "menuTab"
          });
          ET.current = !0
        } else ET.current = !1
      }), [zT, GT]), (0, WT.useEffect)((() => {
        if (!FT) return;
        const TT = setTimeout((() => {
          PT(null)
        }), 4e3);
        return () => {
          clearTimeout(TT)
        }
      }), [FT]), (0, WT.useLayoutEffect)((() => {
        const TT = CT.current;
        if (!zT || !TT) return rT.current = null, void(KT.current = null);
        var UT;
        if (iT) rT.current = iT, null === (UT = TT.querySelector(".StoreDetailBackButton, .CosmeticShopDetailBackButton")) || void 0 === UT || UT.focus();
        else if (rT.current) {
          const UT = KT.current;
          null !== UT && (TT.scrollTop = UT);
          const mT = TT.querySelector(`[data-store-item="${rT.current}"]`);
          if (mT) {
            const WT = mT.getBoundingClientRect(),
              zT = TT.getBoundingClientRect();
            mT.focus({
              preventScroll: null !== UT && WT.bottom > zT.top && WT.top < zT.bottom
            })
          }
          rT.current = null
        }
      }), [iT, zT]), (0, WT.useEffect)((() => {
        XT(null)
      }), [LT.query]), (0, WT.useEffect)((() => {
        if (!IT) return;
        const TT = setTimeout((() => {
          sT(null)
        }), 8e3);
        return () => {
          clearTimeout(TT)
        }
      }), [IT]);
      const oT = HT.superRankInfo,
        AT = HT.isLoggedIn() || (0, uT.guestsMayBuy)(),
        RT = HT.getOwnedCosmeticPacks(),
        TU = (0, uM.r)(LT.query),
        mU = (0, uM.h)({
          mode: TU,
          loggedIn: jT ? AT : null,
          superRankInfo: oT,
          now: Date.now(),
          ownedPacks: RT,
          packs: aM.s,
          recipient: LT.recipient
        });
      (0, WT.useEffect)((() => {
        if (!AT || !zT) return;
        const TT = (0, VT.D)(),
          UT = TT && (0, uM.n)(TT, aM.s);
        TT && UT && ((0, UU.reportAnalyticsClick)({
          id: "store.login_resume",
          value: TT.item
        }), (0, VT.p)(UT))
      }), [AT, zT]);
      const WU = (0, uM.s)({
        superRankDaysLeft: mU.superRankDaysLeft,
        openedThisSession: bn || zT,
        seenNewItems: (0, VT.k)()
      });
      (0, WT.useEffect)((() => {
        (0, VT.A)(WU)
      }), [WU]);
      const zU = "self" === TU,
        MU = vn(zT, zT && zU && "board" === vT.kind);
      if (!zT || !kT) return null;
      const gU = ZT > pT && pT <= 700,
        nU = !gU && ZT <= 420,
        HU = "gift" === TU ? On(LT.recipient) : null,
        kU = null !== tT;

      function jU(TT) {
        (0, IM.b)(TT, "gift" === TU ? LT.query.trim() : null)
      }

      function lU(TT, UT) {
        (0, UU.reportAnalyticsClick)({
          id: "store.purchase_done",
          value: `${UT?"gift":"self"}:${TT}`
        }), UT && (LT.recordGift(UT.name, TT), LU(UT))
      }

      function LU(TT) {
        ! function(TT) {
          try {
            jm.l.setItem(CM, (0, uM.A)(KM(), TT))
          } catch {}
        }({
          name: TT.name,
          cosmetics: TT.cosmetics
        }), qT(qn), sT((UT => {
          var mT;
          return {
            name: TT.name,
            seq: (null !== (mT = null === UT || void 0 === UT ? void 0 : UT.seq) && void 0 !== mT ? mT : 0) + 1
          }
        }))
      }
      async function pU(TT) {
        var UT, mT;
        if (ST.current) return;
        if (!AT) return void jU(TT);
        XT(null), PT(null);
        const WT = "gift" === TU ? {
          name: On(LT.recipient),
          cosmetics: LT.recipientCosmetics
        } : null;
        if (WT && !WT.name) return void DT();
        const zT = "superRank" === TT ? QT.m.id : (0, QT.e)(TT);
        ST.current = !0;
        const MT = await (0, VM.e)(zT, null !== (UT = null === WT || void 0 === WT ? void 0 : WT.name) && void 0 !== UT ? UT : null);
        if (ST.current = !1, !MT) return;
        aT(TT);
        const gT = await QM.c.purchase(zT, null !== (mT = null === WT || void 0 === WT ? void 0 : WT.name) && void 0 !== mT ? mT : null);
        aT(null), gT ? XT(gT) : (lU(TT, WT), WT || (await (0, sM.flushClientAnalyticsEvents)(), (0, XM.refreshWithoutConfirmation)("superRank" === TT ? "/super-rank-welcome" : `/pack-welcome/${TT}`)))
      }
      const BU = MT()("Store", {
        StoreGift: "gift" === TU,
        StorePortrait: gU,
        StoreCompact: nU
      });
      if ("pack" === vT.kind) {
        const TT = vT.pack,
          UT = mU.packs.find((UT => UT.pack === TT));
        return (0, lT.jsx)("div", {
          ref: CT,
          className: "CosmeticShopContainer",
          children: (0, lT.jsx)(PM.h, {
            pack: TT,
            onBack: () => {
              qT(qn)
            },
            onPurchased: UT => {
              lU(TT, UT ? {
                name: UT,
                cosmetics: null
              } : null)
            },
            giftCta: "gift" === TU && HU && UT && (0, lT.jsxs)(lT.Fragment, {
              children: [(0, lT.jsx)(Og, {
                state: UT.state,
                item: TT,
                price: (ZU = TT, "superRank" === ZU ? QT.m.price : (0, QT.i)(ZU)),
                busy: kU,
                onAct: () => {
                  pU(TT)
                },
                onNeedRecipient: () => {
                  qT(qn), DT()
                },
                onLogin: () => {
                  jU(TT)
                },
                highlight: FT === TT
              }), yT && (0, lT.jsx)("span", {
                className: "CosmeticShopGiftError SmallTextBold",
                children: nT(yT)
              })]
            }),
            ownedPacks: RT,
            startAsGift: "gift" === TU,
            initialGiftRecipient: "gift" === TU ? null !== HU && void 0 !== HU ? HU : LT.query.trim() : "",
            highlightCta: FT === TT
          }, TT)
        })
      }
      var ZU;
      return "superRank" === vT.kind ? (0, lT.jsx)("div", {
        ref: CT,
        className: MT()(BU, "StoreDetailView"),
        children: (0, lT.jsx)(Ng, {
          state: mU.superRank.state,
          mode: TU,
          giftName: HU,
          busy: kU,
          highlight: "superRank" === FT,
          purchaseError: yT,
          onBack: () => {
            qT(qn)
          },
          onChooseRecipient: () => {
            qT(qn), DT()
          },
          onAct: () => {
            pU("superRank")
          },
          onLogin: () => {
            jU("superRank")
          }
        })
      }) : (0, lT.jsxs)("div", {
        ref: CT,
        className: BU,
        onScroll: TT => {
          KT.current = TT.currentTarget.scrollTop
        },
        children: [(0, lT.jsx)("div", {
          className: "StoreTopRow",
          children: (0, lT.jsx)(zg, {
            selfName: jT ? HT.getPlayerName() : "",
            giftRecipient: LT,
            suggestionsVersion: null !== (UT = null === IT || void 0 === IT ? void 0 : IT.seq) && void 0 !== UT ? UT : 0,
            pulseSignal: xT,
            disabled: kU || !jT
          })
        }), IT && (0, lT.jsxs)("div", {
          className: "StoreNotice StoreNoticeGiftSent",
          onClick: () => {
            sT(null)
          },
          children: [(0, lT.jsx)(FM.b, {
            showSignal: IT.seq
          }), uM.e, " ", nT("store:giftSent", {
            name: IT.name
          })]
        }, IT.seq), !IT && yT && (0, lT.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: nT(yT)
        }), zU && MU.claimFailed, (0, lT.jsx)(Gg, {
          layout: mU,
          mountAtOnce: null !== rT.current,
          bundleGift: "gift" === TU ? {
            recipientName: HU,
            lookingUp: "pending" === LT.recipient.status,
            busy: kU,
            onNeedRecipient: DT,
            onSent: TT => {
              (0, UU.reportAnalyticsClick)({
                id: "store.purchase_done",
                value: "gift:superGems"
              }), LU({
                name: TT,
                cosmetics: LT.recipientCosmetics
              })
            }
          } : null,
          superRankTotalDays: (0, uM.t)(oT),
          busy: kU,
          highlightItem: FT,
          onOpen: function(TT) {
            (0, UU.reportAnalyticsClick)({
              id: "store.item_open",
              value: TT
            }), qT((0, VT.i)(TT))
          },
          onAct: pU,
          onNeedRecipient: DT,
          onLogin: jU,
          dailyDropTile: zU && MU.tile
        }), "gift" !== TU && (0, lT.jsx)(Un, {}), MU.reveal]
      })
    }));
    var Yn = mT(2793),
      Jn = mT(8955),
      xn = mT(8799),
      dn = mT(2850),
      wn = mT(2704),
      tn = mT(2740),
      an = mT(2754),
      yn = mT(2761),
      Xn = mT(2836),
      In = mT(2822),
      Qn = mT(2484),
      sn = mT(2511),
      Fn = mT(2498),
      Pn = mT(2144),
      Vn = mT(2764),
      un = mT(2515);

    function Cn(TT) {
      let {
        show: UT
      } = TT;
      return UT ? (0, lT.jsx)(rn, {}) : null
    }

    function rn() {
      const {
        t: TT
      } = (0, gT.z)(), {
        followsLeader: UT
      } = (0, wn.g)(), {
        loading: mT,
        friends: zT,
        requests: HT,
        invites: jT
      } = (0, KT.n)(), {
        userContext: LT
      } = (0, BT.d)(), [pT, ZT] = (0, WT.useState)(un.g);
      (0, WT.useEffect)((() => {
        (0, un.b)()
      }), []);
      const cT = HT.map((TT => TT.name)),
        {
          state: vT,
          recentRequesters: fT
        } = (0, In.l)(),
        qT = new Map([...("loaded" === vT.status ? vT.recentPlayers : []).map((TT => [TT.preview.name, TT])), ...fT.map((TT => [TT.name, TT]))]),
        iT = (0, WT.useRef)(null),
        [eT, YT] = (0, WT.useState)(""),
        [JT, xT] = (0, WT.useState)("Enter"),
        [dT, wT] = (0, WT.useState)(null);

      function tT() {
        eT && (xT("Loading"), (0, Fn.f)(eT, "social_menu").then((TT => {
          if (iT.current) switch (TT.kind) {
            case "sent":
              xT("Success");
              break;
            case "becameFriends":
              xT("BecameFriends");
              break;
            case "failed":
              wT(TT.message), xT("Error")
          }
        })))
      }
      return (0, WT.useEffect)((() => {
        if ("Enter" === JT || "Loading" === JT) return;
        const TT = setTimeout((() => {
          iT.current.value = "", YT(""), xT("Enter")
        }), "Success" === JT ? 1e3 : 4e3);
        return () => {
          clearTimeout(TT)
        }
      }), [JT]), (0, lT.jsx)("div", {
        className: "SocialMenu",
        children: (0, lT.jsxs)("div", {
          className: "SocialMenuInner",
          children: [(0, lT.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, lT.jsxs)("div", {
              className: "SocialMenuBox SocialMenuAddFriend",
              children: [(0, lT.jsx)(yn.e, {
                label: TT("socialBar:addFriend")
              }), (0, lT.jsxs)("div", {
                className: "AddFriendBody",
                children: [(0, lT.jsxs)("div", {
                  className: MT()("AddFriendBodyOverlay", {
                    [`AddFriendBodyOverlay${JT}`]: !0
                  }),
                  children: ["Loading" === JT && (0, lT.jsx)(OT.c, {}), "Success" === JT && (0, lT.jsx)(nT.c, {
                    name: "check"
                  }), "BecameFriends" === JT && (0, lT.jsx)(lT.Fragment, {
                    children: TT("socialBar:nowFriends", {
                      playerName: eT
                    })
                  }), "Error" === JT && dT && (0, lT.jsx)(lT.Fragment, {
                    children: TT(dT.translationKey, dT.params)
                  })]
                }), (0, lT.jsxs)("div", {
                  className: "PlayerSearch",
                  children: [(0, lT.jsx)(bT.e, {
                    className: "PlayerSearchInput",
                    placeholderText: TT("socialBar:enterPlayerName"),
                    domRef: iT,
                    onValueChange: TT => {
                      YT((0, XT.n)(TT)), iT.current.value = (0, XT.n)(TT)
                    },
                    onEnter: () => {
                      eT && (0, UU.reportAnalyticsClick)({
                        id: "social.add_friend",
                        value: "social_menu"
                      }), tT()
                    }
                  }), (0, lT.jsxs)(kT.e, {
                    className: "PlayerSearchInputButton SmallTextLight",
                    onClick: () => {
                      tT()
                    },
                    analyticsClick: {
                      id: "social.add_friend",
                      value: "social_menu"
                    },
                    children: [(0, lT.jsx)(nT.c, {
                      name: "user-plus"
                    }), " ", TT("socialBar:sendRequest")]
                  })]
                })]
              }), (0, lT.jsx)(Vn.c, {
                surface: "social_menu",
                prefetchOnMount: !0
              })]
            }), jT.length > 0 && (0, lT.jsxs)("div", {
              className: "SocialMenuBox SocialMenuInvites",
              children: [(0, lT.jsx)(yn.e, {
                label: TT("socialBar:invites"),
                meta: jT.length
              }), jT.map((UT => (0, lT.jsxs)("div", {
                className: "SocialMenuInvite",
                children: [(0, lT.jsx)("div", {
                  className: "SocialMenuInviteIcon",
                  children: (0, lT.jsx)(Qn.c, {
                    invite: UT
                  })
                }), (0, lT.jsx)("div", {
                  className: "SocialMenuInviteText",
                  children: (0, lT.jsx)(Qn.f, {
                    invite: UT
                  })
                }), (0, lT.jsx)(kT.l, {
                  className: "SocialMenuInviteJoin SmallTextLight",
                  onClick: () => {
                    (0, sn.e)(UT)
                  },
                  analyticsClick: {
                    id: "social.accept_invite",
                    value: `social_menu:${UT.destination.kind}`
                  },
                  children: TT("general:join")
                }), (0, lT.jsx)(AT.e, {
                  tooltipInner: (0, lT.jsx)(lT.Fragment, {
                    children: TT("general:decline")
                  }),
                  delayShow: 0,
                  children: (0, lT.jsx)(kT.g, {
                    className: "SocialMenuInviteDecline",
                    padDefaultFocus: "invite" === (null === pT || void 0 === pT ? void 0 : pT.kind) && pT.inviteId === UT.id,
                    onClick: () => {
                      KT.e.declineInvite(UT.id)
                    },
                    analyticsClick: {
                      id: "social.decline_invite",
                      value: `social_menu:${UT.destination.kind}`
                    },
                    children: (0, lT.jsx)(nT.c, {
                      name: "xmark"
                    })
                  })
                })]
              }, UT.id)))]
            }), (0, lT.jsxs)("div", {
              className: MT()("SocialMenuBox SocialMenuRequests", {
                SocialMenuBoxEmpty: !mT && 0 === HT.length
              }),
              children: [(0, lT.jsx)(yn.e, {
                label: (0, lT.jsxs)(lT.Fragment, {
                  children: [(0, lT.jsx)(nT.c, {
                    name: Pn.e
                  }), " ", TT("socialBar:requests")]
                }),
                meta: (0, lT.jsxs)(lT.Fragment, {
                  children: [HT.length, HT.length === RT.q && (0, lT.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: TT("socialBar:limitReached")
                  })]
                })
              }), mT && (0, lT.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, lT.jsx)(OT.c, {})
              }), !mT && 0 === HT.length && (0, lT.jsx)("div", {
                className: "SocialMenuEmpty",
                children: TT("socialBar:noFriendRequests")
              }), !mT && HT.length > 0 && (0, lT.jsx)("div", {
                className: "PlayerRows",
                children: (0, lT.jsx)(Qz.c, {
                  lazyLoadedClassName: "SocialMenuRequestsLazy",
                  observerUpdateDeps: [HT],
                  children: HT.map(((UT, mT) => {
                    const WT = qT.get(UT.name);
                    return (0, lT.jsxs)(an.f, {
                      playerSocialPreview: UT,
                      zIndex: HT.length - mT,
                      padDefaultFocus: (0, un.e)(pT, UT.name, mT),
                      status: WT && (0, lT.jsx)(Xn.c, {
                        gameNameWithVariation: WT.gameNameWithVariation,
                        isPrivateLobby: WT.isPrivateLobby
                      }),
                      children: [(0, lT.jsx)(AT.e, {
                        tooltipInner: (0, lT.jsx)(lT.Fragment, {
                          children: TT("general:accept")
                        }),
                        delayShow: 0,
                        children: (0, lT.jsx)(kT.e, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            ZT((0, un.d)(cT, mT)), (0, Fn.e)(UT.name, !0, {
                              source: "social_menu",
                              announceFriend: !1
                            })
                          },
                          analyticsClick: {
                            id: "social.accept_friend_request",
                            value: "social_menu"
                          },
                          children: (0, lT.jsx)(nT.c, {
                            name: "check"
                          })
                        })
                      }), (0, lT.jsx)(AT.e, {
                        tooltipInner: (0, lT.jsx)(lT.Fragment, {
                          children: TT("general:decline")
                        }),
                        delayShow: 0,
                        children: (0, lT.jsx)(kT.g, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            ZT((0, un.d)(cT, mT)), (0, Fn.e)(UT.name, !1, {
                              source: "social_menu"
                            })
                          },
                          analyticsClick: {
                            id: "social.decline_friend_request",
                            value: "social_menu"
                          },
                          children: (0, lT.jsx)(nT.c, {
                            name: "xmark"
                          })
                        })
                      })]
                    }, `${UT.name}_${UT.isError}`)
                  }))
                })
              })]
            }), (0, lT.jsx)(Xn.h, {})]
          }), (0, lT.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, lT.jsxs)("div", {
              className: "SocialMenuBox SocialMenuParty",
              children: [(0, lT.jsx)(yn.e, {
                label: TT("socialBar:party")
              }), (0, lT.jsx)(tn.d, {})]
            }), (0, lT.jsxs)("div", {
              className: "SocialMenuBox SocialMenuFriends",
              children: [(0, lT.jsx)(yn.e, {
                label: (0, lT.jsxs)(lT.Fragment, {
                  children: [(0, lT.jsx)(nT.c, {
                    name: Pn.b
                  }), " ", TT("socialBar:friends")]
                }),
                meta: (0, lT.jsxs)(lT.Fragment, {
                  children: [zT.length, zT.length >= (0, RT.c)(LT.getPlayerRanks()) && (0, lT.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: TT("socialBar:limitReached")
                  })]
                })
              }), mT && (0, lT.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, lT.jsx)(OT.c, {})
              }), !mT && 0 === zT.length && (0, lT.jsx)("div", {
                className: "SocialMenuEmpty",
                children: TT("socialBar:noFriends")
              }), !mT && zT.length > 0 && (0, lT.jsx)("div", {
                className: "PlayerRows",
                children: (0, lT.jsx)(Qz.c, {
                  lazyLoadedClassName: "SocialMenuFriendsLazy",
                  observerUpdateDeps: [zT],
                  children: zT.map(((TT, mT) => (0, lT.jsx)(an.f, {
                    playerSocialPreview: TT,
                    isFriend: !0,
                    hideFriendBadge: !0,
                    onFriendRemoved: TT => {
                      KT.e.removeFriendFromState(TT)
                    },
                    zIndex: zT.length - mT,
                    children: (0, lT.jsx)(an.e, {
                      friend: TT,
                      followsLeader: UT,
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
    var Kn = mT(2661);
    const Sn = TT => {
        let {
          action: UT,
          padAction: mT
        } = TT;
        const {
          isTouchScreen: WT
        } = (0, YT.h)(["isTouchScreen"]), zT = (0, YW.w)();
        return WT && !zT ? null : (0, lT.jsx)(vW.c, {
          className: "EverythingMenuTabKey",
          noaAction: UT,
          padHidesKey: !0,
          padMenuShortcut: mT
        })
      },
      Gn = (0, WT.memo)((function() {
        const {
          t: TT
        } = (0, gT.z)(), {
          gameState: UT,
          openEverythingMenuName: mT,
          crosshairGameView: zT
        } = (0, YT.h)(["gameState", "openEverythingMenuName", "crosshairGameView"]), {
          userContext: nT
        } = (0, BT.d)(), HT = (0, uT.usePurchasesAllowed)(), jT = (0, VT.H)(), {
          view: LT
        } = (0, DU.x)(), pT = "dot" === jT || null === jT && "ready" === (null === LT || void 0 === LT ? void 0 : LT.kind), ZT = (TT, UT) => (0, lT.jsx)(Sn, {
          action: TT,
          padAction: UT
        }), [cT, fT] = (0, WT.useState)(null), qT = (0, WT.useRef)(null), iT = {
          ..."inGame" === UT ? {} : (0, kT.R)({
            focusOnClick: !1
          }),
          ...sW.e
        }, bT = TT => {
          const UT = (0, FW.g)((UT => {
            (0, kT.Q)(UT.currentTarget), YT.b.set({
              openEverythingMenuName: TT
            })
          }), "pointerup");
          return {
            ...iT,
            onPointerDown: TT => {
              iT.onPointerDown(TT), UT.onPointerDown(TT)
            },
            onPointerUp: TT => {
              iT.onPointerUp(TT), UT.onPointerUp(TT)
            },
            onClick: UT.onClick
          }
        }, OT = null !== mT, eT = mT !== vU.k.COSMETIC_SHOP && !zT;
        async function JT() {
          await async function() {
            if (!cT) return;
            await cT(), fT(null)
          }(), YT.b.set({
            openEverythingMenuName: null
          })
        }
        const xT = (0, WT.useRef)(null),
          wT = (0, WT.useCallback)((() => null !== xT.current && (0, xn.g)(xT.current)), []);

        function tT() {
          wT() || JT()
        }(0, WT.useEffect)((() => (0, YM.p)(wT)), [wT]);
        const aT = (0, WT.useMemo)((() => "inGame" === UT ? {
          text: TT("settingsMenu:exitGame"),
          onClick: () => {
            (0, Jn.d)()
          }
        } : (0, dT.isDiscordClient)() ? {
          text: TT("settingsMenu:exitGame"),
          onClick: () => {
            cU.n.discordActivity().then((TT => {
              TT.exit("User exited the game")
            }))
          }
        } : null), [UT, TT]);
        const yT = (0, lT.jsx)("div", {
          className: "EverythingMenuCloseButtonClickZone",
          onClick: tT,
          children: (0, lT.jsx)(kT.k, {
            className: "EverythingMenuCloseButton"
          })
        });
        return (0, lT.jsx)(PW.e, {
          showing: OT,
          globallyUniqueKey: "EverythingMenu",
          alwaysMountChildren: !0,
          keepsMovement: mT === vU.k.SHOP,
          doGameplayStartStopOnShow: "inGame" === UT,
          children: (0, lT.jsx)(uW.e, {
            className: "EverythingMenuContainer",
            show: OT && !zT,
            children: (0, lT.jsx)(VW.e, {
              close: tT,
              togglePointerLock: !1,
              children: (0, lT.jsxs)("div", {
                className: "EverythingMenu",
                children: [!(0, YM.g)(mT) && (0, lT.jsxs)("div", {
                  className: "EverythingMenuTabList",
                  children: [(0, lT.jsxs)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerStart",
                    children: [aT && (0, lT.jsx)(kT.d, {
                      className: "EverythingMenuBackButton",
                      padDestructive: !0,
                      onClick: () => {
                        aT.onClick()
                      },
                      children: aT.text
                    }), OT && HT && (0, lT.jsx)("div", {
                      ...iT,
                      className: "EverythingMenuWallet",
                      title: TT("homePage:getPremiumCurrency"),
                      onClick: () => {
                        (0, VT.p)({
                          mode: "current",
                          source: "menuWallet"
                        })
                      },
                      children: (0, lT.jsx)(Yn.h, {})
                    })]
                  }), (0, lT.jsxs)("div", {
                    className: "EverythingMenuTabListInner",
                    "data-pad-tabs": "1",
                    children: [(0, lT.jsxs)("div", {
                      ...bT(vU.k.SETTINGS),
                      "data-pad-tab": !0,
                      "data-pad-selected": mT === vU.k.SETTINGS ? "true" : void 0,
                      className: MT()("EverythingMenuTab", {
                        EverythingMenuTabActive: mT === vU.k.SETTINGS
                      }),
                      children: [TT("general:settings"), ZT("OpenSettings", "pause")]
                    }), (0, lT.jsxs)("div", {
                      ...bT(vU.k.CUSTOMISATION),
                      "data-pad-tab": !0,
                      "data-pad-selected": mT === vU.k.CUSTOMISATION ? "true" : void 0,
                      className: MT()("EverythingMenuTab", {
                        EverythingMenuTabActive: mT === vU.k.CUSTOMISATION
                      }),
                      children: [TT("general:player"), ZT("OpenCharacterCustomization")]
                    }), vT.featureFlags.useSocialFeatures && (0, lT.jsxs)("div", {
                      ...bT(vU.k.SOCIAL),
                      "data-pad-tab": !0,
                      "data-pad-selected": mT === vU.k.SOCIAL ? "true" : void 0,
                      className: MT()("EverythingMenuTab", {
                        EverythingMenuTabActive: mT === vU.k.SOCIAL
                      }),
                      ...(0, UU.getAnalyticsClickAttributes)({
                        id: "social.open_menu",
                        value: "menu_tab"
                      }, mT === vU.k.SOCIAL),
                      children: [TT("socialBar:social"), (0, lT.jsx)(Kn.d, {})]
                    }), (0, DU.p)(LT) && (0, lT.jsxs)("div", {
                      ...bT(vU.k.COSMETIC_SHOP),
                      "data-pad-tab": !0,
                      "data-pad-selected": mT === vU.k.COSMETIC_SHOP ? "true" : void 0,
                      className: MT()("EverythingMenuTab EverythingMenuTabCosmeticShop", {
                        EverythingMenuTabActive: mT === vU.k.COSMETIC_SHOP
                      }),
                      children: [(0, lT.jsx)("span", {
                        className: "EverythingMenuTabCosmeticShopText",
                        children: TT("store:title")
                      }), "new" === jT && (0, lT.jsx)(Xg, {}), pT && (0, lT.jsx)("span", {
                        className: "EverythingMenuTabStoreBadge EverythingMenuTabStoreDot"
                      })]
                    }), "inGame" === UT && (0, lT.jsxs)("div", {
                      ...bT(vU.k.LOBBY_LEADERBOARD),
                      "data-pad-tab": !0,
                      "data-pad-selected": mT === vU.k.LOBBY_LEADERBOARD ? "true" : void 0,
                      className: MT()("EverythingMenuTab", {
                        EverythingMenuTabActive: mT === vU.k.LOBBY_LEADERBOARD
                      }),
                      children: [TT("general:lobby"), ZT("OpenLobbyLeaderboard", "leaderboard")]
                    })]
                  }), (0, lT.jsx)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerEnd",
                    children: yT
                  })]
                }), (0, YM.g)(mT) && yT, (0, lT.jsxs)("div", {
                  ref: xT,
                  className: "EverythingMenuBody",
                  "data-pad-initial-area": !0,
                  style: {
                    "--everythingMenuBodyBackgroundOpacity": "inGame" === UT ? "0.85" : "1"
                  },
                  children: [(0, lT.jsx)(tW, {
                    show: mT === vU.k.SETTINGS,
                    setBeforeResumeCallback: fT
                  }), (0, lT.jsx)(QW, {
                    show: mT === vU.k.CUSTOMISATION
                  }), (0, lT.jsx)(WT.Suspense, {
                    fallback: null,
                    children: (0, lT.jsx)(ZM, {
                      show: mT === vU.k.SHOP
                    })
                  }), (0, lT.jsx)(wM, {
                    show: mT === vU.k.LOBBY_LEADERBOARD
                  }), HT && (0, lT.jsx)(en, {
                    show: mT === vU.k.COSMETIC_SHOP
                  }), !HT && (0, lT.jsx)(fn, {
                    show: mT === vU.k.COSMETIC_SHOP
                  }), (0, lT.jsx)(Cn, {
                    show: mT === vU.k.SOCIAL
                  })]
                }), !(0, vT.isMobileApp)() && (0, CW.h)(nT.getPlayerRanks()) && (0, lT.jsx)(uW.e, {
                  ref: qT,
                  className: "EverythingMenuBannerDiv",
                  show: eT,
                  "data-pad-hint-bar-avoid": !0,
                  "data-pad-no-step-in": !0,
                  children: (0, lT.jsx)(dn.b, {
                    info: {
                      adId: 2,
                      adType: "leaderboard",
                      adAlias: "banner_shop"
                    },
                    sizeInfo: {
                      parentRef: qT
                    },
                    showing: OT && eT,
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
  4995: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => cT
    });
    var WT = mT(1126),
      zT = mT.n(WT),
      MT = mT(4731),
      gT = mT(1288),
      nT = mT(1135),
      HT = mT(1569),
      kT = mT(1613),
      jT = mT(1457),
      lT = mT(2632),
      LT = mT(1188);
    const pT = {
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

    function BT(TT) {
      let {
        platform: UT
      } = TT;
      const mT = "youtube" === UT;
      return (0, LT.jsxs)("span", {
        className: zT()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: mT
        }),
        children: [mT && (0, LT.jsx)(lT.c, {
          variant: "white"
        }), !mT && (0, LT.jsx)(nT.c, {
          name: pT[UT].icon,
          kit: "brands"
        })]
      })
    }

    function ZT(TT) {
      let {
        platform: UT,
        link: mT,
        editable: WT,
        userContext: zT,
        onLinksUpdated: lT
      } = TT;
      const {
        t: ZT
      } = (0, gT.z)(), cT = pT[UT];
      if (!mT && !WT) return null;

      function vT() {
        var TT;
        if (!zT || !lT) return;
        jT.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: cT.name
            }
          },
          prefixText: MT.o[UT],
          placeholderText: "playBloxd",
          initialValue: null !== (TT = null === mT || void 0 === mT ? void 0 : mT.handle) && void 0 !== TT ? TT : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: mT ? "general:remove" : void 0
        }).getResult().then((async TT => {
          if ("notificationTornDown" !== TT && null !== TT) try {
            "submit" === TT.type ? await kT.b.setSocialLink(zT, UT, TT.value) : await kT.b.clearSocialLink(zT, UT), lT()
          } catch (mT) {
            console.error("Failed to update social link", mT), jT.NotificationProvider.showAlertPopup({
              title: mT.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (mT) {
        const TT = `@${mT.handle}`;
        return (0, LT.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: cT.color
          },
          href: mT.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, LT.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, LT.jsx)(BT, {
              platform: UT
            }), (0, LT.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, LT.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: TT
              })
            })]
          }), WT && (0, LT.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, HT.R)({
              stopPropagation: !0
            }),
            onClick: TT => {
              TT.stopPropagation(), TT.preventDefault(), vT()
            },
            children: (0, LT.jsx)(nT.c, {
              name: "pen-to-square"
            })
          }), !WT && (0, LT.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, LT.jsx)(nT.c, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, LT.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: cT.color
        },
        ...(0, HT.R)(),
        onClick: () => {
          vT()
        },
        children: [(0, LT.jsx)(BT, {
          platform: UT
        }), (0, LT.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, LT.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: cT.name
          }), (0, LT.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: ZT("homePage:profileSocialLinkAdd")
          })]
        }), (0, LT.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, LT.jsx)(nT.c, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function cT(TT) {
      let {
        socialLinks: UT,
        editable: mT = !1,
        userContext: WT,
        onLinksUpdated: zT
      } = TT;
      if (!mT && 0 === UT.length) return null;
      const gT = new Map(UT.map((TT => [TT.platform, TT]))),
        nT = mT ? MT.n : UT.map((TT => TT.platform));
      return (0, LT.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, LT.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: nT.map((TT => (0, LT.jsx)(ZT, {
            platform: TT,
            link: gT.get(TT),
            editable: mT,
            userContext: WT,
            onLinksUpdated: zT
          }, TT)))
        })
      })
    }
  },
  34323: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => MT
    });
    var WT = mT(63),
      zT = mT(3536);

    function MT() {
      const [TT, UT] = (0, WT.useState)(!1);
      return (0, WT.useLayoutEffect)((() => {
        let TT = !0;
        return (0, zT.h)().then((() => {
          TT && UT(!0)
        })), () => {
          TT = !1
        }
      }), []), TT
    }
  },
  34237: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => ZT,
      c: () => BT
    });
    mT(34243);
    var WT = mT(1126),
      zT = mT.n(WT),
      MT = mT(63),
      gT = mT(34233);

    function nT(TT, UT) {
      return Math.max(1, Math.round(TT * UT))
    }

    function HT(TT, UT) {
      const mT = UT * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
        WT = function(TT, UT) {
          if (TT.lines) return nT(TT.lineThickness, UT) % 2;
          if (TT.dot) return nT(TT.dotSize, UT) % 2;
          return kT(TT, UT) % 2
        }(TT, UT),
        zT = jT(TT.lineThickness * mT, WT),
        MT = nT(TT.lineLength, mT),
        gT = Math.round(TT.gap * mT),
        HT = TT.outline > 0 ? nT(TT.outline, mT) : 0,
        LT = [];
      if (TT.lines && (LT.push({
          x: zT + gT,
          y: 0,
          w: MT,
          h: zT,
          arm: "right"
        }), LT.push({
          x: -gT - MT,
          y: 0,
          w: MT,
          h: zT,
          arm: "left"
        }), LT.push({
          x: 0,
          y: zT + gT,
          w: zT,
          h: MT,
          arm: "down"
        }), TT.tStyle || LT.push({
          x: 0,
          y: -gT - MT,
          w: zT,
          h: MT,
          arm: "up"
        }), 0 === gT && LT.push({
          x: 0,
          y: 0,
          w: zT,
          h: zT
        })), TT.dot) {
        const UT = jT(TT.dotSize * mT, WT),
          MT = TT.lines && 0 === gT && TT.dotSize > TT.lineThickness ? Math.max(UT, zT + 2) : UT,
          nT = (zT - MT) / 2;
        LT.push({
          x: nT,
          y: nT,
          w: MT,
          h: MT
        })
      }
      const pT = LT.map((TT => ({
        ...TT,
        x: TT.x - HT,
        y: TT.y - HT,
        w: TT.w + 2 * HT,
        h: TT.h + 2 * HT
      })));
      let BT = null,
        ZT = null;
      if (TT.circle) {
        const UT = nT(TT.circleThickness, mT),
          MT = function(TT, UT) {
            return TT + (TT % 2 === UT ? 0 : 1)
          }(kT(TT, mT), WT),
          gT = (zT - MT) / 2;
        BT = lT(gT, MT, UT), HT > 0 && (ZT = lT(gT - HT, MT + 2 * HT, UT + 2 * HT))
      }
      return {
        cell: zT,
        fills: LT,
        outlines: HT > 0 ? pT : [],
        ring: BT,
        ringOutline: ZT
      }
    }

    function kT(TT, UT) {
      return Math.round(TT.circleRadius * UT * 2 + nT(TT.circleThickness, UT))
    }

    function jT(TT, UT) {
      return Math.max(2 - UT, 2 * Math.round((TT - UT) / 2) + UT)
    }

    function lT(TT, UT, mT) {
      const WT = 2 * mT >= UT - 1;
      return {
        x: TT,
        y: TT,
        size: UT,
        border: Math.min(mT, Math.floor(UT / 2)),
        filled: WT
      }
    }
    var LT = mT(1188);
    const pT = 1.4;

    function BT(TT, UT) {
      return TT && UT ? `scale(${pT})` : "scale(1)"
    }

    function ZT(TT) {
      return "classic" === TT.settings.style ? (0, LT.jsx)(fT, {
        ...TT
      }) : (0, LT.jsx)(JT, {
        ...TT
      })
    }
    const cT = .125;

    function vT(TT, UT) {
      const mT = {};
      if (TT.color !== gT.e.color && (mT.color = (0, gT.i)(TT.color)), TT.opacity !== gT.e.opacity && (mT.opacity = TT.opacity / 100), TT.outline !== gT.e.outline || TT.outlineColor !== gT.e.outlineColor) {
        const UT = TT.outline,
          WT = (0, gT.i)(TT.outlineColor);
        mT.textShadow = UT > 0 ? `-${UT}px 0 ${WT}, 0 ${UT}px ${WT}, ${UT}px 0 ${WT}, 0 -${UT}px ${WT}` : "none"
      }
      if (TT.size !== gT.e.size) {
        const WT = TT.size / 100;
        mT.fontSize = UT ? `calc(max(1.3rem, 18px) * ${WT})` : `calc(1.3rem * ${WT})`, mT.marginTop = `-${cT}em`, mT.transformOrigin = `50% calc(50% + ${cT}em)`
      }
      return mT
    }

    function fT(TT) {
      let {
        settings: UT,
        touch: mT,
        inPreview: WT,
        inEditor: MT,
        pressed: gT = !1,
        pressRef: nT
      } = TT;
      return (0, LT.jsx)("div", {
        className: zT()("Crosshair", {
          Touch: mT,
          CrosshairInPreview: WT,
          CrosshairInEditor: MT || WT
        }),
        ref: nT,
        style: {
          transform: BT(gT, UT.growOnClick),
          ...vT(UT, mT)
        },
        children: "+"
      })
    }

    function qT(TT, UT) {
      return TT / UT + "px"
    }

    function iT(TT, UT, mT, WT) {
      return {
        ...eT(TT, UT, mT),
        width: qT(TT.w, mT),
        height: qT(TT.h, mT),
        background: WT
      }
    }

    function bT(TT, UT, mT) {
      return {
        left: qT(TT.x, UT),
        top: qT(TT.y, UT),
        width: qT(TT.size, UT),
        height: qT(TT.size, UT),
        borderWidth: qT(TT.border, UT),
        borderColor: mT,
        background: TT.filled ? mT : void 0
      }
    }
    const OT = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function eT(TT, UT, mT) {
      const [WT, zT] = TT.arm ? OT[TT.arm] : [0, 0], MT = Math.round(UT * mT);
      return {
        left: qT(TT.x + WT * MT, mT),
        top: qT(TT.y + zT * MT, mT)
      }
    }

    function YT(TT) {
      return TT.arm ? {
        "data-arm": TT.arm,
        "data-x": TT.x,
        "data-y": TT.y
      } : {}
    }

    function JT(TT) {
      let {
        settings: UT,
        inPreview: mT,
        inEditor: WT,
        pressed: nT = !1,
        spread: kT,
        spreadRef: jT
      } = TT;
      const lT = (0, MT.useRef)(null),
        {
          box: BT,
          dpr: ZT
        } = function(TT) {
          const [UT, mT] = (0, MT.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, MT.useLayoutEffect)((() => {
            const UT = TT.current;
            if (!UT) return;
            const WT = () => {
              const TT = UT.getBoundingClientRect(),
                WT = window.devicePixelRatio || 1;
              mT((UT => UT.dpr === WT && UT.box.left === TT.left && UT.box.top === TT.top && UT.box.width === TT.width && UT.box.height === TT.height ? UT : {
                box: {
                  left: TT.left,
                  top: TT.top,
                  width: TT.width,
                  height: TT.height
                },
                dpr: WT
              }))
            };
            WT();
            const zT = new ResizeObserver(WT);
            return zT.observe(UT), window.addEventListener("resize", WT), window.addEventListener("scroll", WT, !0), () => {
              zT.disconnect(), window.removeEventListener("resize", WT), window.removeEventListener("scroll", WT, !0)
            }
          }), [TT]), UT
        }(lT),
        cT = (0, MT.useRef)(ZT);
      cT.current = ZT;
      const vT = HT(UT, ZT, nT && UT.growOnClick ? pT : 1),
        fT = function(TT, UT, mT) {
          const WT = Math.round((TT.left + TT.width / 2) * mT - UT / 2),
            zT = Math.round((TT.top + TT.height / 2) * mT - UT / 2);
          return {
            x: WT / mT - TT.left,
            y: zT / mT - TT.top
          }
        }(BT, vT.cell, ZT),
        qT = (0, gT.i)(UT.color),
        OT = (0, gT.i)(UT.outlineColor),
        JT = (0, MT.useRef)(0);
      (0, MT.useLayoutEffect)((() => {
        if (jT) return jT.current = TT => {
          var UT;
          JT.current = TT, null === (UT = lT.current) || void 0 === UT || UT.querySelectorAll("[data-arm]").forEach((UT => {
            Object.assign(UT.style, eT(function(TT) {
              return {
                x: Number(TT.dataset.x),
                y: Number(TT.dataset.y),
                arm: TT.dataset.arm
              }
            }(UT), TT, cT.current))
          }))
        }, () => {
          jT.current = null
        }
      }), [jT]);
      const xT = null !== kT && void 0 !== kT ? kT : JT.current;
      return (0, LT.jsx)("div", {
        ref: lT,
        className: zT()("CrosshairShapes", {
          CrosshairInPreview: mT,
          CrosshairInEditor: WT || mT,
          CrosshairSpreads: void 0 !== jT
        }),
        children: (0, LT.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: fT.x,
            top: fT.y,
            opacity: UT.opacity / 100
          },
          children: (0, LT.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [vT.ringOutline && (0, LT.jsx)("div", {
              className: "CrosshairRing",
              style: bT(vT.ringOutline, ZT, OT)
            }), vT.outlines.map(((TT, UT) => (0, LT.jsx)("div", {
              className: "CrosshairPart",
              ...YT(TT),
              style: iT(TT, xT, ZT, OT)
            }, `o${UT}`))), vT.ring && (0, LT.jsx)("div", {
              className: "CrosshairRing",
              style: bT(vT.ring, ZT, qT)
            }), vT.fills.map(((TT, UT) => (0, LT.jsx)("div", {
              className: "CrosshairPart",
              ...YT(TT),
              style: iT(TT, xT, ZT, qT)
            }, `f${UT}`)))]
          })
        })
      })
    }
  },
  34245: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => jT,
      f: () => cT,
      h: () => ZT
    });
    var WT = mT(34233);
    const zT = "XH1-",
      MT = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      gT = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      nT = ["color", "outlineColor"],
      HT = 1 + 3 * nT.length + gT.length + 1,
      kT = Math.ceil(8 * HT / Math.log2(62)),
      jT = zT.length + kT;

    function lT(TT) {
      let UT = 90;
      for (const mT of TT) UT = 31 * UT + mT & 255;
      return UT
    }
    const LT = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      pT = BigInt(LT.length);

    function BT(TT, UT) {
      let mT = 0n;
      for (const zT of TT) {
        const TT = LT.indexOf(zT);
        if (TT < 0) return null;
        mT = mT * pT + BigInt(TT)
      }
      if (mT >> BigInt(8 * UT) !== 0n) return null;
      const WT = [];
      for (let zT = 0; zT < UT; zT++) WT.unshift(Number(0xffn & mT)), mT >>= 8n;
      return WT
    }

    function ZT(TT) {
      let UT = "shapes" === TT.style ? 1 : 0;
      MT.forEach(((mT, WT) => {
        TT[mT] && (UT |= 1 << WT + 1)
      }));
      const mT = [UT];
      for (const zT of nT) {
        const UT = (0, WT.g)(zT, TT[zT]);
        mT.push(UT >> 16 & 255, UT >> 8 & 255, 255 & UT)
      }
      for (const zT of gT) {
        const {
          min: UT,
          step: MT
        } = WT.b[zT];
        mT.push(Math.round(((0, WT.g)(zT, TT[zT]) - UT) / MT))
      }
      return mT.push(lT(mT)), zT + function(TT, UT) {
        let mT = 0n;
        for (const zT of TT) mT = mT << 8n | BigInt(zT);
        let WT = "";
        for (let zT = 0; zT < UT; zT++) WT = LT[Number(mT % pT)] + WT, mT /= pT;
        return WT
      }(mT, kT)
    }

    function cT(TT) {
      for (const UT of TT.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${kT}})`, "gi"))) {
        const TT = vT(BT(UT[1], HT));
        if (TT) return TT
      }
      return null
    }

    function vT(TT) {
      if (!TT || TT.length !== HT || lT(TT.slice(0, -1)) !== TT[TT.length - 1]) return null;
      const UT = TT[0],
        mT = {
          ...WT.e,
          style: 1 & UT ? "shapes" : "classic"
        };
      MT.forEach(((TT, WT) => {
        mT[TT] = 0 !== (UT & 1 << WT + 1)
      }));
      let zT = 1;
      for (const WT of nT) mT[WT] = TT[zT] << 16 | TT[zT + 1] << 8 | TT[zT + 2], zT += 3;
      for (const MT of gT) {
        const {
          min: UT,
          step: gT
        } = WT.b[MT];
        mT[MT] = (0, WT.g)(MT, UT + TT[zT] * gT), zT++
      }
      return mT
    }
  },
  34233: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => WT,
      e: () => zT,
      g: () => MT,
      i: () => kT,
      m: () => HT,
      n: () => jT,
      o: () => nT,
      s: () => gT
    });
    const WT = {
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

    function MT(TT, UT) {
      var mT;
      const {
        min: MT,
        max: gT,
        step: nT
      } = WT[TT];
      if (!Number.isFinite(UT)) return zT[TT];
      const HT = (null !== (mT = String(nT).split(".")[1]) && void 0 !== mT ? mT : "").length,
        kT = Number((Math.round(UT / nT) * nT).toFixed(HT));
      return Math.min(gT, Math.max(MT, kT))
    }

    function gT(TT, UT, mT) {
      const WT = "number" === typeof mT ? MT(UT, mT) : mT;
      return {
        ...TT,
        [UT]: WT
      }
    }

    function nT(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(zT).every((WT => mT.includes(WT) || TT[WT] === UT[WT]))
    }

    function HT(TT) {
      return nT(TT, zT)
    }

    function kT(TT) {
      return `#${TT.toString(16).padStart(6,"0")}`
    }

    function jT(TT) {
      const UT = /^#?([0-9a-f]{6})$/i.exec(TT.trim());
      return UT ? parseInt(UT[1], 16) : null
    }
  },
  34253: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => lT,
      g: () => LT
    });
    var WT = mT(63),
      zT = mT(44),
      MT = mT(34245),
      gT = mT(34233);
    const nT = "crosshairCode";
    let HT = null;
    const kT = new Set;

    function jT() {
      if (null === HT) {
        var TT;
        const UT = zT.l.getItem(nT);
        HT = null !== (TT = "string" === typeof UT ? (0, MT.f)(UT) : null) && void 0 !== TT ? TT : gT.e
      }
      return HT
    }

    function lT(TT) {
      HT = TT, (0, gT.m)(TT) ? zT.l.removeItem(nT) : zT.l.setItem(nT, (0, MT.h)(TT));
      for (const UT of kT) UT()
    }

    function LT() {
      const [TT, UT] = (0, WT.useState)(jT);
      return (0, WT.useEffect)((() => {
        const TT = () => {
          UT(jT())
        };
        return TT(), mT = TT, kT.add(mT), () => {
          kT.delete(mT)
        };
        var mT
      }), []), TT
    }
  },
  34227: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => MT,
      h: () => zT
    });
    var WT = mT(25);

    function zT(TT, UT) {
      return TT && !UT
    }

    function MT() {
      return zT(WT.b.get("isTouchScreen"), WT.b.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  34198: (TT, UT, mT) => {
    function WT(TT, UT) {
      return TT && !UT
    }
    mT.d(UT, {
      c: () => WT
    })
  },
  34215: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => MT
    });
    var WT = mT(1153);

    function zT() {
      var TT, UT;
      return null !== (TT = null === (UT = screen.orientation) || void 0 === UT ? void 0 : UT.type) && void 0 !== TT ? TT : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const MT = new class {
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
          this.holding && (0, WT.cZ)(new Error("Game view size held for 60 s"))
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
        let UT = !1;
        return () => {
          if (UT && this.isHeld()) return null;
          const mT = TT();
          return UT ||= null !== mT, mT
        }
      }
      onRelease(TT) {
        return this.resizers.add(TT), () => {
          this.resizers.delete(TT)
        }
      }
    }
  },
  34164: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => fT,
      g: () => kT,
      k: () => ZT,
      m: () => BT
    });
    var WT = mT(166),
      zT = mT(1367),
      MT = mT(1302),
      gT = mT(1231),
      nT = mT(1854);
    const HT = {
      offline: "homePage:onboardingNameNoAccount",
      outdated: "general:updatedReloading",
      busy: "homePage:changeNameTooFast",
      server: "homePage:changeNameFailed"
    };

    function kT(TT) {
      return HT[TT]
    }

    function jT(TT) {
      return (0, nT.d)(TT) ? "outdated" : TT instanceof WT.d ? 429 === TT.httpCode ? "busy" : "server" : "offline"
    }

    function lT(TT, UT, mT) {
      return (0, gT.postJsonWithMetricsCookiesAndJsonResponse)(`${MT.clientSideServerUrls.indexUrl}${UT}`, mT, {
        retries: 3
      }, TT.getMetricsCookies()).catch((TT => (console.error("Bad response from the server when trying to change name:", UT, TT), {
        outcome: "failed",
        failure: jT(TT)
      })))
    }

    function LT(TT) {
      return "outcome" in TT && "failed" === TT.outcome
    }

    function pT(TT) {
      return console.error("Error when trying to get with new name from DB", TT), {
        outcome: "refused",
        message: TT
      }
    }
    async function BT(TT) {
      const UT = await lT(TT, "/index/name/random", {});
      return LT(UT) ? UT : "err" in UT ? pT(UT.err) : (TT.setPlayerName(UT.name), {
        outcome: "changed",
        name: UT.name
      })
    }
    async function ZT(TT, UT) {
      const mT = await lT(TT, "/index/name/update", {
        name: UT
      });
      return LT(mT) ? mT : "err" in mT ? pT(mT.err) : mT.nameExists ? {
        outcome: "taken"
      } : (TT.setPlayerName(UT), {
        outcome: "changed",
        name: UT
      })
    }

    function cT(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
      const WT = 1 === UT ? 1 : 10 ** (UT - 1),
        MT = String(WT + Math.floor(mT() * (10 ** UT - WT)));
      return `${TT.slice(0,zT.h-UT)}${MT}`
    }
    const vT = [1, 2, 3, 4];
    async function fT(TT, UT) {
      const mT = await ZT(TT, UT);
      if ("taken" !== mT.outcome) return mT;
      for (const WT of vT) {
        const mT = cT(UT, WT),
          zT = await ZT(TT, mT);
        if ("taken" !== zT.outcome) return zT
      }
      return {
        outcome: "taken"
      }
    }
  },
  34204: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => nT,
      f: () => HT
    });
    var WT = mT(25);
    const zT = 24,
      MT = "farNametags",
      gT = 1e5;

    function nT() {
      var TT;
      return null === (TT = WT.b.get("showDistantNametags")) || void 0 === TT || TT
    }

    function HT() {
      var TT;
      return null !== (TT = function() {
        const TT = new URLSearchParams(window.location.search).get(MT),
          UT = null === TT || "" === TT ? NaN : Number(TT);
        return Number.isFinite(UT) && UT >= 0 ? Math.min(UT, gT) : null
      }()) && void 0 !== TT ? TT : nT() ? 0 : zT
    }
  },
  34219: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => kT,
      e: () => lT,
      i: () => jT
    });
    var WT = mT(280),
      zT = mT(102),
      MT = mT(130),
      gT = mT(126),
      nT = mT(677);
    const HT = new Set(["mali_bifrost"]);

    function kT() {
      if ("android" !== (0, zT.pageOperatingSystem)() || nT.h || (0, nT.d)("webgl_default")) return;
      const TT = (0, MT.l)(),
        UT = null === TT ? (0, WT.u)() : (0, WT.i)(TT.vendor, TT.renderer);
      return null !== UT && HT.has(UT) ? TT => (0, WT.n)((0, gT.c)(TT).vendor, UT) : void 0
    }

    function jT(TT, UT) {
      return TT ? () => !0 : UT()
    }
    async function lT(TT) {
      try {
        const UT = jT(TT, kT),
          mT = navigator.gpu;
        if (void 0 === UT || void 0 === mT) return !1;
        const WT = await (0, gT.o)(mT, {
          seed: !1,
          compatibility: UT
        });
        return "string" !== typeof WT && WT.compatibility && !(0, gT.g)(WT.adapter)
      } catch (UT) {
        return console.error("WebGPU compatibility-mode adapter request failed.", UT), !1
      }
    }
  },
  34298: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => zT,
      h: () => gT
    });
    const WT = [{
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
      let UT, mT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof TT) {
        if (!Number.isFinite(TT)) return "0";
        if (Math.abs(TT) < 100) {
          const UT = TT < 0 ? "-" : "",
            mT = Math.abs(TT);
          return mT >= 10 ? `${UT}${mT.toFixed(1).replace(/\.0$/,"")}` : `${UT}${mT.toFixed(2).replace(/\.?0+$/,"")}`
        }
        UT = BigInt(Math.floor(TT))
      } else UT = TT;
      const zT = UT < 0n ? -UT : UT,
        MT = UT < 0n ? "-" : "",
        gT = zT.toString();
      if (gT.length <= mT) return `${MT}${gT}`;
      const nT = 3 * Math.floor((gT.length - 1) / 3);
      if (nT < 3) return `${MT}${gT}`;
      if (nT > 3 * WT.length) {
        const TT = gT[0],
          UT = gT.slice(1, 3).replace(/0+$/, "");
        return `${MT}${UT?`${TT}.${UT}`:TT}e${gT.length-1}`
      }
      const {
        threshold: HT,
        suffix: kT
      } = WT[WT.length - nT / 3], jT = zT / HT, lT = Number(1000n * (zT % HT) / HT), LT = Number(jT) + lT / 1e3;
      let pT;
      return pT = LT >= 100 ? Math.floor(LT).toString() : LT >= 10 ? LT.toFixed(1).replace(/\.0$/, "") : LT.toFixed(2).replace(/\.?0+$/, ""), `${MT}${pT}${kT}`
    }
    const MT = WT.map((TT => {
      let {
        threshold: UT,
        suffix: mT
      } = TT;
      return {
        threshold: Number(UT),
        suffix: mT
      }
    })).filter((TT => {
      let {
        threshold: UT
      } = TT;
      return Number.isFinite(UT)
    }));

    function gT(TT) {
      const UT = Math.abs(TT),
        mT = TT < 0 ? "-" : "";
      for (const {
          threshold: WT,
          suffix: zT
        }
        of MT)
        if (UT >= WT) {
          const TT = UT / WT;
          if (TT >= 1e3) return `${mT}${UT.toExponential(2).replace("e+","e")}`;
          let MT;
          return MT = TT >= 100 ? Math.floor(TT).toString() : TT >= 10 ? TT.toFixed(1).replace(/\.0$/, "") : TT.toFixed(2).replace(/\.?0+$/, ""), `${mT}${MT}${zT}`
        } return `${mT}${UT}`
    }
  },
  34280: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => jT,
      i: () => LT,
      j: () => lT,
      l: () => gT,
      p: () => kT,
      q: () => HT
    });
    var WT = mT(366);
    const zT = ["Wood Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table"],
      MT = {
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

    function gT(TT) {
      var UT;
      return null !== (UT = MT[TT]) && void 0 !== UT ? UT : {
        translationKey: ""
      }
    }
    const nT = {
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

    function HT(TT) {
      return zT.includes(TT)
    }

    function kT(TT) {
      var UT;
      return !0 === (null === TT || void 0 === TT || null === (UT = TT.customAttributes) || void 0 === UT ? void 0 : UT.cannotEnchant)
    }

    function jT(TT, UT) {
      const {
        max: mT
      } = nT[TT].at(-1);
      return UT <= mT
    }

    function lT(TT) {
      const UT = Math.sin(TT / 80),
        mT = TT => {
          if (TT <= 0) return 0;
          if (TT > 1) return 1;
          let UT = 0;
          const mT = [1, 7, 21, 35, 35, 21, 7, 1];
          for (let WT = 0; WT < mT.length; WT++) {
            UT += (WT % 2 === 0 ? 1 : -1) * mT[WT] * Math.pow(TT, 2 + WT) / (2 + WT)
          }
          return 72 * UT
        },
        WT = .3 - .78 * UT,
        zT = .5 - .78 * UT,
        MT = .6 - .7 * UT,
        gT = .8 - .6 * UT;
      let nT = mT(WT),
        HT = mT(zT) - nT,
        kT = mT(MT) - HT - nT,
        jT = mT(gT) - kT - HT - nT;
      WT < .041 && (HT /= 1 - nT, kT /= 1 - nT, jT /= 1 - nT, nT = 0), zT < .041 && (nT /= 1 - HT, kT /= 1 - HT, jT /= 1 - HT, HT = 0), MT < .041 && (nT /= 1 - kT, HT /= 1 - kT, jT /= 1 - kT, kT = 0), gT < .041 && (nT /= 1 - jT, HT /= 1 - jT, kT /= 1 - jT, jT = 0);
      return {
        commonProb: nT,
        uncommonProb: HT,
        rareProb: kT,
        epicProb: jT,
        legendaryProb: 1 - (jT + kT + HT + nT)
      }
    }

    function LT(TT, UT) {
      const {
        min: mT,
        max: zT
      } = nT[TT][UT], MT = WT.e.sampleUniformIntDistribution(mT, zT, "includeMax");
      return {
        ...lT(MT),
        level: MT
      }
    }
  },
  34243: () => {},
  13036: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAaUlEQVR4AWyOQQ6AIAwECwGNr/HkYzz4Hy9+WEkq01BDDCRDy3ZbGo9rU2c/V+1Bj9JOeW7RokaTBO0zpDxJXmYJKXjdohlwOqbWi4YaJFIgcYEIaGAT+JvHCDNQ8El9ziQz/BdzE00vAAAA//+cTXaSAAAABklEQVQDAHI9N5g1NM74AAAAAElFTkSuQmCC"
  },
  14128: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAGBJREFUGJVNjjEOxEAIA+dW22Rpk2+nSndPZFtMewU6FBdIjJHx536+ABARUl7XCbjvyV9mJqX7BtY6RkS0t9bRc0op5ZuaGTAqtPZCpfG+AqSs8FFlulh7s6j7rh9d9wclFjd0V4Z2HAAAAABJRU5ErkJggg=="
  },
  15592: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAbUlEQVR4nESOSwqAMAxEow0pive/gIcTBBdSsZh+NG20DlnkM8MLhnXuzHSnAwBaI8LIV2RXOiIkaGfMKfXGyByZparbyQZpGNUV/KaHGrWowZKVgSx8Qr8vzdXgAkYFCIn9mZP7E8pQ1Q9fzAMAAP//PTNTFgAAAAZJREFUAwAk1D9dXrbJngAAAABJRU5ErkJggg=="
  },
  16108: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAE1JREFUGJVNjsEOwDAIQp/GZv3/j+xx5zVbsh0wZFxEImCsc88RRwHsB5OaI8SA636hjwosNXSUWuRTphxp5iahHX+pozQs+Yt0rU1SPg0CIfgDMgomAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);