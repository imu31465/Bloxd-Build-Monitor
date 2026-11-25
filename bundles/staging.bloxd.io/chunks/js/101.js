export const id = 101;
export const ids = [101];
export const modules = {
  34359: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      EverythingMenu: () => Rk
    });
    var wG = ZG(51),
      SG = ZG(1006),
      LG = ZG.n(SG),
      yG = ZG(1151),
      kG = ZG(1016),
      UG = ZG(2053),
      YG = ZG(1393),
      VG = ZG(1081),
      pG = ZG(1067);

    function fG(GG) {
      let {
        items: bG,
        link: ZG,
        onClick: wG,
        selectedItemId: SG,
        className: fG,
        padStartsOnTab: QG = !0
      } = GG;
      const {
        t: KG
      } = (0, yG.w)(), hG = (0, VG.g)(), dG = [];
      for (const LG of bG) {
        var JG;
        const GG = dG[dG.length - 1];
        var rG;
        if (GG && GG.title === (null !== (JG = LG.section) && void 0 !== JG ? JG : null)) GG.items.push(LG);
        else dG.push({
          title: null !== (rG = LG.section) && void 0 !== rG ? rG : null,
          items: [LG]
        })
      }
      return (0, pG.jsxs)("div", {
        className: LG()("MenuSideBarBody", fG),
        "data-pad-tabs": "2",
        children: [dG.map(((GG, bG) => {
          var ZG;
          return (0, pG.jsxs)("div", {
            className: "MenuSideBarSection",
            children: [GG.title && (0, pG.jsx)("div", {
              className: "MenuSideBarSectionTitle",
              children: KG(GG.title)
            }), GG.items.map((GG => {
              var bG;
              const ZG = !!GG.iconElement || !!GG.faIcon;
              return (0, pG.jsxs)("div", {
                "data-pad-tab": !0,
                "data-pad-selected": SG === GG.id ? "true" : void 0,
                "data-pad-default-focus": QG && SG === GG.id || void 0,
                className: LG()("MenuSideBarBodyTab", {
                  ActiveMenuSideBarBodyTab: SG === GG.id
                }),
                onClick: () => {
                  wG(GG.id)
                },
                children: [ZG && (0, pG.jsx)("div", {
                  className: "MenuSideBarBodyTabIcon",
                  children: null !== (bG = GG.iconElement) && void 0 !== bG ? bG : (0, pG.jsx)(kG.c, {
                    name: GG.faIcon
                  })
                }), (!hG || !ZG) && (0, pG.jsx)("div", {
                  children: KG(GG.title)
                }), GG.redDot && (0, pG.jsx)(UG.e, {
                  top: "-0.2rem",
                  right: "-1rem"
                })]
              }, GG.id)
            }))]
          }, null !== (ZG = GG.title) && void 0 !== ZG ? ZG : bG)
        })), ZG && (0, pG.jsxs)("div", {
          ...(0, YG.P)(),
          "data-pad-destructive": !0,
          className: "MenuSideBarBodyTab MenuSideBarLink",
          onClick: ZG.onClick,
          children: [(0, pG.jsx)("div", {
            className: "MenuSideBarBodyTabIcon",
            children: (0, pG.jsx)(kG.c, {
              name: ZG.faIcon
            })
          }), (0, pG.jsx)("div", {
            children: KG(ZG.title)
          }), (0, pG.jsx)(kG.c, {
            name: "arrow-right",
            className: "MenuSideBarLinkArrow"
          })]
        })]
      })
    }
    var QG = ZG(3004),
      KG = ZG(1092),
      hG = ZG(2409),
      dG = ZG(3100),
      JG = ZG(80),
      rG = ZG(1895),
      zG = ZG(2249),
      EG = ZG(2256),
      oG = ZG(1621),
      XG = ZG(1302),
      uG = ZG(5019),
      iG = ZG(17),
      CG = ZG(34362);

    function WG(GG) {
      let {
        setApplySettingsCallback: bG
      } = GG;
      const {
        clientEscMenuOptions: ZG
      } = (0, iG.o)(["clientEscMenuOptions"]), [SG, LG] = (0, wG.useState)(!1), [yG, kG] = (0, wG.useState)(!1), [UG, VG] = (0, wG.useState)(6400), [fG, QG] = (0, wG.useState)(3600), [KG, hG] = (0, wG.useState)(!1), [dG, JG] = (0, wG.useState)(!1);

      function rG(GG) {
        const bG = "screenshot" === GG ? kG : LG;
        bG(!0);
        const ZG = KG ? "normals" : dG ? "depth" : null;
        CG.devTools.downloadScene(GG, {
          width: UG,
          height: fG,
          colouring: ZG
        }).catch((GG => {
          console.error("Couldn't download the scene", GG)
        })).finally((() => {
          bG(!1)
        }))
      }
      return (0, pG.jsxs)("div", {
        className: "DeveloperToolsCategory",
        children: [(0, pG.jsx)(uG.c, {
          label: "Disable Ambient Occlusion",
          checked: ZG.disableAmbientOcclusion,
          onClick: GG => {
            iG.e.setClientEscMenuOptions({
              disableAmbientOcclusion: GG
            }), bG((() => uG.g))
          },
          circleInfoText: "Disables ambient occlusion which is the shadow effect that makes corners and crevices darker."
        }), CG.devTools.supports("ambientLight") && (0, pG.jsx)(uG.f, {
          name: "Ambient Lighting Intensity",
          min: 0,
          max: 1,
          step: .01,
          initValue: ZG.ambientLightIntensity,
          onChange: GG => {
            CG.devTools.setAmbientLightIntensity(GG).then((() => {
              iG.e.setClientEscMenuOptions({
                ambientLightIntensity: GG
              })
            })).catch((GG => {
              console.error("Couldn't set the ambient light", GG)
            }))
          },
          circleInfoText: "Sets the intensity of the white ambient light in the scene. The default is 0.5."
        }), CG.devTools.supports("weaponRaycasts") && (0, pG.jsx)(uG.c, {
          label: "Show Weapon Raycasts",
          checked: ZG.showWeaponRaycasts,
          onClick: GG => {
            iG.e.setClientEscMenuOptions({
              showWeaponRaycasts: GG
            })
          },
          circleInfoText: "Draws debug lines for the raw raycasts used by locally fired weapons."
        }), CG.devTools.supports("sceneDownload") && (0, pG.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, pG.jsxs)("div", {
            className: "SettingBox WarningBorder",
            children: [(0, pG.jsx)(uG.c, {
              label: "Apply normal-based coloring",
              checked: KG,
              onClick: GG => {
                hG(GG), GG && JG(!1)
              },
              circleInfoText: "Colors faces based on their normal direction (red=X, green=Y, blue=Z)."
            }), (0, pG.jsx)(uG.c, {
              label: "Apply depth-based coloring",
              checked: dG,
              onClick: GG => {
                JG(GG), GG && hG(!1)
              },
              circleInfoText: "Colors from white (near) to black (far) based on distance from camera. Only works for screenshot export."
            }), (0, pG.jsxs)("div", {
              className: "SettingBox DeveloperToolsCategoryScreenshotSettings",
              children: [(0, pG.jsx)("div", {
                className: "SettingLabel",
                children: "Screenshot size in pixels (width x height)"
              }), (0, pG.jsx)(oG.b, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (GG, bG) => {
                  const ZG = parseInt(GG) || 6400;
                  VG(ZG)
                },
                placeholderText: "width",
                maxLength: 10,
                defaultValue: UG.toString()
              }), (0, pG.jsx)("span", {
                children: "X"
              }), (0, pG.jsx)(oG.b, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (GG, bG) => {
                  const ZG = parseInt(GG) || 3600;
                  QG(ZG)
                },
                placeholderText: "height",
                maxLength: 10,
                defaultValue: fG.toString()
              })]
            }), (0, pG.jsxs)("div", {
              className: "DeveloperToolsCategoryExportButtons",
              children: [(0, pG.jsxs)(YG.d, {
                onClick: () => {
                  rG("screenshot")
                },
                disabled: yG,
                children: [yG && (0, pG.jsx)(XG.b, {}), "Download Screenshot"]
              }), (0, pG.jsxs)(YG.d, {
                onClick: () => {
                  rG("glb")
                },
                disabled: SG,
                children: [SG && (0, pG.jsx)(XG.b, {}), "Download GLB"]
              })]
            })]
          }), (0, pG.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: 'To download GLB of scene with textures you need to "Disable Block Texture Atlas" in graphic settings first (you will need to reload the page to apply the setting).'
          })]
        })]
      })
    }
    var mG = ZG(116),
      IG = ZG(1096),
      FG = ZG(34370),
      vG = ZG(3011),
      aG = ZG(1444),
      cG = ZG(1230),
      lG = ZG(1192),
      jG = ZG(3078),
      PG = ZG(2015),
      MG = ZG(1431),
      AG = ZG(352),
      sG = ZG(2264),
      qG = ZG(2266),
      nG = ZG(3033),
      gG = ZG(2671),
      eG = ZG(1583),
      RG = ZG(3055),
      TG = ZG(3080),
      HG = ZG(200);
    var tG = ZG(1775),
      DG = ZG(3026);
    async function NG() {
      try {
        return function(GG) {
          const bG = new Map;
          for (const {
              store: ZG,
              status: wG,
              autoRenewStatus: SG,
              managementUrl: LG
            }
            of Object.values(GG.subscriptions)) !(0, nG.e)(ZG) || (0, nG.f)(wG) || "willNotRenew" === SG || bG.has(ZG) || bG.set(ZG, null !== LG && void 0 !== LG ? LG : nG.j[ZG]);
          return Array.from(bG, (GG => {
            let [bG, ZG] = GG;
            return {
              store: bG,
              managementUrl: ZG
            }
          }))
        }(await (0, tG.n)((0, DG.getBillingClient)().getCustomerInfo(), 5e3, "CustomerInfo got no answer in 5 s"))
      } catch (GG) {
        return console.error("Billing: loading CustomerInfo for the player's store subscriptions failed:", GG), null
      }
    }

    function OG(GG) {
      const {
        t: bG,
        selectedLanguage: ZG
      } = (0, yG.w)(), {
        userContext: SG
      } = (0, KG.e)(), {
        superRankInfo: LG
      } = SG, kG = (0, qG.usePurchasesAllowed)(), UG = GG && ((0, AG.Jc)(LG) || SG.ranksMayChange) && kG, {
        accountId: YG,
        data: VG
      } = (0, gG.i)(RG.e, UG);
      if ((0, wG.useEffect)((() => {
          if (UG) return RG.e.watchAccount(), eG.b.addRefetchListener("billing", (GG => {
            "reconnected" === GG ? RG.e.refreshAfterReconnect() : RG.e.refresh()
          }))
        }), [UG]), !UG || !(0, AG.Jc)(LG) || null === VG || YG !== SG.whamm) return null;
      const pG = function(GG, bG, ZG) {
        const wG = TG.g[(0, TG.e)(TG.g, bG)],
          SG = void 0 === wG ? void 0 : (0, HG.c)(GG.entitlements, wG.entitlementId);
        return void 0 === SG || null === SG.expiresAt || (0, nG.c)(SG) <= ZG ? null : SG.willRenew && null === SG.billingIssueDetectedAt ? {
          renews: !0,
          at: Math.max(SG.expiresAt, ZG)
        } : {
          renews: !1,
          at: (0, nG.c)(SG)
        }
      }(VG, LG.tier, Date.now());
      if (null === pG) return null;
      const fG = pG.renews ? "store:renewsOn" : "store:endsOn",
        QG = new Date(pG.at).toLocaleDateString((0, yG.j)(ZG.code, fG), {
          year: "numeric",
          month: "short",
          day: "numeric"
        }),
        hG = (0, qG.getBillingStore)(),
        dG = null !== hG && (0, nG.e)(hG) ? function(GG, bG) {
          var ZG;
          const wG = Object.values(GG.subscriptions).find((GG => GG.store === bG && !(0, nG.f)(GG.status)));
          return void 0 === wG ? null : null !== (ZG = wG.managementUrl) && void 0 !== ZG ? ZG : nG.j[bG]
        }(VG, hG) : null;
      return {
        text: bG(fG, {
          date: QG
        }),
        manageUrl: dG
      }
    }
    var xG = ZG(1320),
      BG = ZG(1173),
      Gb = ZG(4911),
      bb = ZG(1415),
      Zb = ZG(3651),
      wb = ZG(2239);

    function Sb(GG) {
      let {
        showing: bG
      } = GG;
      const {
        t: ZG
      } = (0, yG.w)(), {
        data: wG,
        failed: SG
      } = (0, gG.i)(Zb.f, bG);
      return 0 === (null === wG || void 0 === wG ? void 0 : wG.length) || null === wG && !SG ? null : (0, pG.jsxs)("div", {
        className: "SettingBox AccountSettingsPaymentHistory",
        children: [(0, pG.jsx)("div", {
          className: "AccountSettingsLabel",
          children: ZG("paymentHistory:title")
        }), null === wG && SG && (0, pG.jsx)("div", {
          className: "AccountSettingsPaymentHistoryError",
          children: ZG("paymentHistory:loadFailed")
        }), null !== wG && (0, pG.jsx)("ul", {
          className: "PaymentHistoryList",
          children: wG.map((GG => (0, pG.jsxs)("li", {
            className: "PaymentHistoryEntry",
            children: [(0, pG.jsx)(wb.b, {
              entry: GG
            }), (0, pG.jsxs)("div", {
              className: "PaymentHistoryEntryText",
              children: [(0, pG.jsx)("div", {
                children: (0, wb.f)(ZG, GG)
              }), (0, pG.jsxs)("div", {
                className: "PaymentHistoryEntryDate",
                children: [new Date(GG.at).toLocaleDateString(), "number" === typeof GG.orderId && ` \xb7 ${ZG("paymentHistory:order",{orderId:GG.orderId})}`]
              })]
            })]
          }, (0, Zb.d)(GG))))
        })]
      })
    }
    var Lb = ZG(3037),
      yb = ZG(2273),
      kb = ZG(2123);

    function Ub() {
      (0, kb.c)({
        titleKey: "payments:logInToRestore"
      })
    }

    function Yb(GG) {
      let {
        status: bG
      } = GG;
      switch (bG) {
        case "restored":
          return (0, RG.g)(), {
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

    function Vb() {
      const GG = (0, DG.usePageBillingClient)(),
        {
          userContext: bG
        } = (0, KG.e)(),
        [ZG, SG] = (0, wG.useState)(!1),
        [LG, yG] = (0, wG.useState)(null);
      return {
        restoring: ZG,
        notice: LG,
        restore: () => {
          bG.isLoggedIn() ? (SG(!0), yG(null), GG.restorePurchases().then(Yb, (GG => GG instanceof Lb.e && "loginRequired" === GG.code ? (Ub(), null) : function(GG) {
            return GG instanceof Lb.e && "storeBusy" === GG.code ? {
              key: "payments:storeBusy",
              failed: !0
            } : (console.error("Billing: restoring purchases failed:", GG), (0, RG.g)(), {
              key: "payments:restoreFailed",
              failed: !0
            })
          }(GG))).then(yG).finally((() => {
            SG(!1)
          }))) : Ub()
        }
      }
    }

    function pb(GG) {
      let {
        restoring: bG,
        notice: ZG,
        restore: SG
      } = GG;
      const {
        t: kG
      } = (0, yG.w)(), UG = (0, qG.usePurchasesAllowed)(), VG = (0, qG.getBillingStore)(), fG = (0, wG.useRef)(null);
      return (0, wG.useEffect)((() => {
        var GG;
        null === (GG = fG.current) || void 0 === GG || GG.scrollIntoView({
          block: "nearest"
        })
      }), [ZG]), UG && (0, yb.b)(VG) ? (0, pG.jsxs)("div", {
        className: "AccountSettingsRestorePurchases",
        children: [(0, pG.jsx)(YG.h, {
          className: "AccountSettingsRestorePurchasesButton",
          loading: bG,
          onClick: SG,
          children: kG("payments:restorePurchases")
        }), null !== ZG && (0, pG.jsx)("div", {
          ref: fG,
          className: LG()("AccountSettingsRestorePurchasesNotice SmallTextBold", {
            AccountSettingsRestorePurchasesFailed: ZG.failed
          }),
          children: kG(ZG.key)
        })]
      }) : null
    }
    var fb = ZG(1868),
      Qb = ZG(1202),
      Kb = ZG(1311),
      hb = ZG(1163),
      db = ZG(1275),
      Jb = ZG(333),
      rb = ZG(2472);
    const zb = {
      appStore: {
        name: "App Store",
        ...Jb.mc.appStore
      },
      googlePlay: {
        name: "Google Play",
        ...Jb.mc.googlePlay
      },
      discord: {
        name: "Discord",
        ...Jb.mc.discord
      }
    };

    function Eb(GG) {
      let {
        warning: bG,
        subscriptions: ZG
      } = GG;
      const {
        t: wG
      } = (0, yG.w)();
      return null !== ZG && 0 === ZG.length ? (0, pG.jsx)(pG.Fragment, {
        children: wG(bG)
      }) : (0, pG.jsxs)("div", {
        className: "DeleteAccountSubtitle",
        children: [wG(bG), null === ZG && (0, pG.jsx)("div", {
          className: "DeleteAccountSubtitleNote",
          children: wG("auth:deleteAccountSubscriptionsLoadFailed")
        }), null !== ZG && (0, pG.jsxs)(pG.Fragment, {
          children: [(0, pG.jsx)("div", {
            className: "DeleteAccountSubtitleNote",
            children: wG("auth:deleteAccountStoreSubscriptions")
          }), (0, pG.jsx)(rb.b, {
            className: "DeleteAccountSubtitleLinks",
            links: ZG.map((GG => {
              let {
                store: bG,
                managementUrl: ZG
              } = GG;
              return {
                ...zb[bG],
                url: ZG
              }
            }))
          })]
        })]
      })
    }

    function ob(GG) {
      let {
        showing: bG
      } = GG;
      const {
        userContext: ZG,
        isUserContextUpdating: SG
      } = (0, KG.e)(), {
        t: LG
      } = (0, yG.w)(), [kG, UG] = (0, wG.useState)(!1), [VG, fG] = (0, wG.useState)(null), QG = (0, wG.useRef)(bG);
      (0, wG.useEffect)((() => (QG.current = bG, () => {
        QG.current = !1
      })), [bG]);
      const hG = SG || kG;
      return (0, pG.jsxs)("div", {
        className: "AccountSettingsDeleteAccountButtonContainer",
        children: [(0, pG.jsxs)(YG.C, {
          onClick: async function() {
            if (!kG) {
              UG(!0);
              try {
                const GG = await async function() {
                  const [GG, bG] = await Promise.all([(0, fb.b)(ZG.availableUserContextTypes) ? NG() : [], ub(ZG)]);
                  if (!QG.current) return Qb.d.ok();
                  const wG = (0, cG.b)(ZG.getPlayerName(), !JG.featureFlags.canSeeRealPlayerNames);
                  if (!0 !== await Kb.NotificationProvider.showPromptPopup({
                      title: "auth:deleteAccountPopupTitleNamed",
                      textOpts: {
                        title: {
                          playerName: wG
                        }
                      },
                      subtitle: (0, pG.jsx)(Eb, {
                        warning: Xb(ZG.isLoggedIn(), bG),
                        subscriptions: GG
                      }),
                      confirmText: "auth:deleteAccount",
                      destructive: !0,
                      typedConfirm: bG ? LG("auth:deleteAccountTypedConfirm", {
                        playerName: wG
                      }) : void 0,
                      confirmTooltip: "auth:deleteAccountPopupConfirmTooltip",
                      cancelText: "general:cancel",
                      cancelTooltip: "auth:deleteAccountPopupCancelTooltip"
                    }).getResult()) return Qb.d.ok();
                  const SG = await (0, IG.postJsonWithMetricsCookiesAndJsonResponse)(`${hb.clientSideServerUrls.indexUrl}/index/metrics/revoke-cookies`, {
                    gameState: iG.e.get("gameState")
                  }, {
                    retries: 3
                  }, ZG.getMetricsCookies());
                  if (SG.error) return Qb.d.error(SG.error);
                  (0, mG.isDiscordClient)() && (await db.l.discordActivity()).exit("User deleted their account");
                  return (0, IG.forgetStoredGuestAccount)(ZG.whamm), (0, IG.forceGlobalSignOut)(!0), Qb.d.ok()
                }(), bG = GG.isError() ? GG.asError().message : null;
                fG(bG)
              } catch (GG) {
                console.error("Failed to delete account:", GG), fG(LG("auth:genericDeleteAccountError"))
              }
              UG(!1)
            }
          },
          className: "AccountSettingsDeleteAccountButton",
          disabled: hG,
          children: [hG && (0, pG.jsx)("div", {
            className: "DeletingAccountLoader",
            children: (0, pG.jsx)(XG.b, {})
          }), LG("auth:deleteAccount")]
        }), VG && (0, pG.jsx)("div", {
          className: "DeleteAccountError",
          children: VG
        })]
      })
    }

    function Xb(GG, bG) {
      return (0, mG.isDiscordClient)() ? "auth:discordActivityDeleteAccountLossWarning" : GG ? "auth:deleteAccountLossWarning" : bG ? "auth:deleteGuestAccountLossWarning" : "auth:deleteGuestAccountWarning"
    }
    async function ub(GG) {
      try {
        const {
          accountCreatedAt: bG
        } = await (0, tG.n)(MG.d.getPlayerProfile(GG, {
          lowerCaseName: GG.getPlayerName().toLowerCase()
        }), 5e3, "The player's profile got no answer in 5 s");
        return null !== bG && Date.now() - bG >= 7 * AG.j
      } catch (bG) {
        return console.error("Delete Account: loading the account's age failed, so the prompt asks for its name:", bG), !0
      }
    }
    var ib = ZG(3574),
      Cb = ZG(3590),
      Wb = ZG(3585);

    function mb(GG) {
      let {
        showing: bG
      } = GG;
      const {
        t: ZG
      } = (0, yG.w)(), {
        data: wG,
        failed: SG
      } = (0, gG.i)(ib.e, bG), LG = null === wG ? null : (0, ib.f)(wG);
      return (0, pG.jsxs)("div", {
        className: "SettingBox BlockedAndIgnoredPlayers",
        children: [(0, pG.jsx)("div", {
          className: "AccountSettingsLabel",
          children: ZG("settingsMenu:blockedAndIgnoredPlayers")
        }), null === LG && !SG && (0, pG.jsx)(XG.b, {}), null === LG && SG && (0, pG.jsxs)("div", {
          className: "BlockedAndIgnoredPlayersError",
          children: [ZG("settingsMenu:blockedAndIgnoredPlayersLoadFailed"), (0, pG.jsx)(YG.d, {
            className: "SmallTextLight",
            onClick: () => {
              ib.e.refresh()
            },
            children: ZG("general:tryAgain")
          })]
        }), 0 === (null === LG || void 0 === LG ? void 0 : LG.length) && (0, pG.jsx)("div", {
          className: "BlockedAndIgnoredPlayersEmpty",
          children: ZG("settingsMenu:noBlockedOrIgnoredPlayers")
        }), null !== LG && LG.length > 0 && (0, pG.jsx)("ul", {
          className: "BlockedAndIgnoredPlayersList",
          children: LG.map((GG => {
            let {
              name: bG,
              exclusion: wG
            } = GG;
            const SG = Wb.d[wG];
            return (0, pG.jsxs)("li", {
              className: "BlockedAndIgnoredPlayer",
              children: [(0, pG.jsx)("div", {
                className: "BlockedAndIgnoredPlayerName",
                children: bG
              }), (0, pG.jsx)(YG.h, {
                className: "SmallTextLight",
                onClick: () => {
                  (0, Cb.f)(SG, bG, {
                    chatMessage: null
                  })
                },
                children: ZG(Wb.f[SG].text)
              })]
            }, bG)
          }))
        })]
      })
    }
    const Ib = (0, wG.memo)((function(GG) {
      var bG, ZG;
      let {
        showing: SG,
        inGame: UG
      } = GG;
      const {
        t: VG,
        selectedLanguage: fG
      } = (0, yG.w)(), {
        hideSocialLocationFrom: hG
      } = (0, iG.o)(["hideSocialLocationFrom"]), dG = (0, qG.usePurchasesAllowed)(), rG = Vb(), zG = (0, QG.d)(), {
        userContext: EG,
        isUserContextUpdating: CG
      } = (0, KG.e)(), [WG, nG] = (0, wG.useState)(null !== (bG = EG.getPlayerName()) && void 0 !== bG ? bG : ""), [gG, eG] = (0, wG.useState)(null), {
        purchasing: RG,
        outcome: TG,
        purchase: HG
      } = (0, vG.d)("/super-rank-welcome"), tG = (0, AG.mc)((0, yG.j)(fG.code, "general:timeLeft"), EG.superRankInfo), DG = null === (ZG = OG(SG)) || void 0 === ZG ? void 0 : ZG.text, NG = tG ? VG("general:timeLeft", {
        time: tG
      }) : DG, [Zb, wb] = (0, wG.useState)(!1), [Lb, yb] = (0, wG.useState)(!1), kb = (0, wG.useRef)(null), Ub = (0, wG.useRef)(null), Yb = (0, PG.f)({
        showProgressUpdateMessage: !0,
        enabled: !0
      }), fb = null === Yb, Qb = null !== Yb && void 0 !== Yb ? Yb : [], Kb = EG !== IG.NULL_USER_CONTEXT && !EG.isLoggedIn(), hb = Kb && 0 !== (null === Yb || void 0 === Yb ? void 0 : Yb.length), [db, Jb] = (0, wG.useState)([]), [rb, zb] = (0, wG.useState)(!1), Eb = EG.playerHasRank("youtuber"), Xb = (0, wG.useCallback)((() => MG.d.getPlayerProfile(EG, {
        lowerCaseName: EG.getPlayerName().toLowerCase()
      }).then((GG => {
        Jb(GG.socialLinks)
      })).catch((GG => {
        console.error("Failed to refresh social links", GG)
      }))), [EG]);

      function ub(GG) {
        GG !== WG && ((0, cG.l)(GG) ? (GG = (0, cG.n)(GG), eG(VG("homePage:nameCharacters"))) : eG(null), kb.current && (kb.current.value = GG), nG(GG))
      }
      return (0, wG.useEffect)((() => (!0 === SG ? (clearInterval(Ub.current), Ub.current = setInterval(zG, 1e3)) : clearInterval(Ub.current), () => {
        clearInterval(Ub.current)
      })), [SG, zG]), (0, wG.useEffect)((() => {
        var GG;
        nG(null !== (GG = EG.getPlayerName()) && void 0 !== GG ? GG : "")
      }), [EG]), (0, wG.useEffect)((() => {
        if (!SG || !Eb || CG) return;
        let GG = !1;
        return zb(!0), Jb([]), MG.d.getPlayerProfile(EG, {
          lowerCaseName: EG.getPlayerName().toLowerCase()
        }).then((bG => {
          GG || Jb(bG.socialLinks)
        })).catch((GG => {
          console.error("Failed to load social links", GG)
        })).finally((() => {
          GG || zb(!1)
        })), () => {
          GG = !0
        }
      }), [SG, Eb, CG, EG]), (0, pG.jsxs)("div", {
        className: LG()("SettingsMenuRightInner AccountSettings", {
          AccountSettingsLocked: UG
        }),
        children: [UG && (0, pG.jsx)("div", {
          className: "AccountSettingsInGameWarning",
          children: VG("settingsMenu:accountSettingsInGameWarning")
        }), (0, pG.jsxs)("div", {
          className: "SettingBox SetAccountNameDiv SmallTextLight",
          children: [(0, pG.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsNameLabel",
            children: [VG("homePage:discordNamePopupTitle"), (0, pG.jsxs)(aG.LinkPreserveSearch, {
              className: "AccountSettingsViewProfile",
              to: (0, lG.k)({
                name: EG.getPlayerName()
              }),
              onClick: () => {
                iG.e.set({
                  openEverythingMenuName: null
                })
              },
              children: [(0, pG.jsx)(kG.c, {
                name: "arrow-up-right-from-square"
              }), " ", VG("profileCard:viewProfile")]
            })]
          }), (0, pG.jsxs)("div", {
            className: "EnterAccNameDivWrapper",
            "data-pad-initial-area": !0,
            children: [(0, pG.jsxs)("div", {
              className: "EnterAccNameInputRow",
              children: [JG.featureFlags.canChangeName && (0, pG.jsx)(oG.b, {
                className: "EnterName",
                placeholderText: VG("homePage:enterName"),
                maxLength: cG.g,
                defaultValue: WG,
                onValueChange: GG => {
                  ub(GG)
                },
                forcedText: Zb || !JG.featureFlags.canChangeName ? WG : null,
                blurOnEnter: !0,
                domRef: kb
              }), (0, pG.jsx)(YG.d, {
                className: "ChooseRandomNameButton",
                onClick: () => {
                  ub((0, cG.f)())
                },
                children: (0, pG.jsx)(kG.c, {
                  name: "dice",
                  className: "ChooseRandomNameIcon"
                })
              }), !JG.featureFlags.canChangeName && (0, pG.jsx)("div", {
                className: "EnterName NoInput",
                children: (0, cG.b)(WG, !JG.featureFlags.canSeeRealPlayerNames)
              })]
            }), (0, pG.jsx)(YG.d, {
              className: "ChooseNameButton",
              disabled: Zb || WG === EG.getPlayerName(),
              onClick: () => {
                WG.length < cG.k ? eG(VG("homePage:changeNameMinLengthError", {
                  length: cG.k
                })) : WG.length > cG.g ? eG(VG("homePage:changeNameMaxLengthError", {
                  length: cG.g
                })) : (wb(!0), eG(null), (0, FG.h)(EG, WG).then((GG => {
                  wb(!1), "taken" === GG.outcome ? eG(VG("homePage:nameTaken")) : "refused" === GG.outcome ? eG(GG.message) : "failed" === GG.outcome && eG(VG((0, FG.g)(GG.failure)))
                })))
              },
              children: VG("general:choose")
            })]
          }), gG && (0, pG.jsx)("div", {
            className: "ChooseAccNameError",
            children: gG
          })]
        }), (0, pG.jsx)(uG.c, {
          label: (() => {
            if ((0, BG.j)(hG)) {
              const GG = (0, yG.j)(fG.code, "general:timeLeft"),
                bG = (0, AG.lb)(GG, Date.now(), hG + BG.i);
              return `${VG("settingsMenu:hideSocialLocation")} (${VG("general:timeLeft",{time:bG})})`
            }
            return VG("settingsMenu:hideSocialLocation")
          })(),
          onClick: () => {
            const GG = !(0, BG.j)(hG);
            (0, bb.reportAnalyticsClick)({
              id: "social.hide_location",
              value: GG ? "on" : "off"
            }), yb(!0), MG.d.setHideSocialLocation(EG, GG).then((() => {
              iG.e.set({
                hideSocialLocationFrom: GG ? Date.now() : null
              })
            })).finally((() => {
              yb(!1)
            }))
          },
          checked: (0, BG.j)(hG),
          disabled: Lb
        }), Eb && (0, pG.jsxs)("div", {
          className: "SettingBox AccountSettingsSocialLinks",
          children: [(0, pG.jsx)("div", {
            className: "AccountSettingsLabel",
            children: VG("settingsMenu:socialLinks")
          }), rb && (0, pG.jsx)(XG.b, {}), !rb && (0, pG.jsx)(Gb.b, {
            socialLinks: db,
            editable: !0,
            userContext: EG,
            onLinksUpdated: Xb
          })]
        }), (0, pG.jsxs)("div", {
          className: "SettingBox",
          children: [(0, pG.jsx)("div", {
            className: "AccountSettingsLabel",
            children: VG(hb ? "auth:loginOrSwitchAccount" : "auth:login")
          }), fb && (0, pG.jsx)(XG.b, {}), !fb && 0 === Qb.length && (0, pG.jsx)("div", {
            className: "NoLoginOptions",
            children: VG("auth:noLoginOptions")
          }), !fb && Qb.length > 0 && "crazygames" !== mG.siteUsed && (0, pG.jsx)("div", {
            className: "AccountSettingsLoginButtons",
            children: Qb
          }), !fb && Qb.length > 0 && "crazygames" === mG.siteUsed && (0, pG.jsxs)("div", {
            className: "AccountSettingsLoginButtons",
            children: [Qb[0], Qb.length > 1 && (0, pG.jsxs)(pG.Fragment, {
              children: [(0, pG.jsxs)("div", {
                className: "LegacyLoginOptionsHeader",
                children: [(0, pG.jsx)("span", {
                  className: "LegacyLoginOptionsTitle",
                  children: VG("auth:legacyLoginOptions")
                }), (0, pG.jsx)(xG.d, {
                  className: "LegacyLoginOptionsInfoIcon",
                  hoverInfo: VG("auth:legacyLoginOptionsInfo")
                })]
              }), (0, pG.jsx)("div", {
                className: "LegacyAccountSettingsLoginButtons",
                children: Qb.slice(1)
              })]
            })]
          }), JG.featureFlags.useLogin && (null !== EG.loggedInInfo || EG.isLoggedIn()) && (0, pG.jsxs)(pG.Fragment, {
            children: [(0, pG.jsx)("div", {
              className: "AccountSettingsLoginDivider"
            }), (0, pG.jsxs)(YG.C, {
              onClick: () => {
                (0, IG.forceGlobalSignOut)()
              },
              className: "AccountSettingsSignedInButton",
              children: [(0, pG.jsx)(kG.c, {
                name: "right-from-bracket"
              }), VG("auth:signOut")]
            })]
          })]
        }), !EG.playerHasRank("super") && dG && (0, pG.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, pG.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, pG.jsx)(kG.c, {
              name: "bolt"
            }), VG("homePage:superRank")]
          }), (0, pG.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [(0, pG.jsxs)(YG.k, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, sG.n)({
                  mode: "self",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, pG.jsx)(kG.c, {
                name: "bolt"
              }), VG("homePage:getSuperRank")]
            }), (0, pG.jsxs)(YG.k, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, sG.n)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, pG.jsx)(kG.c, {
                name: "bolt"
              }), VG("homePage:giftSuperRank")]
            })]
          }), (0, pG.jsx)(pb, {
            ...rG
          })]
        }), EG.playerHasRank("super") && (0, pG.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, pG.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, pG.jsx)(kG.c, {
              name: "bolt"
            }), VG("homePage:superRank"), NG && (0, pG.jsxs)("div", {
              className: "AccountSettingsSuperRankTimeLeft",
              children: ["(", NG, ")"]
            })]
          }), dG && (0, pG.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [!(0, AG.Jc)(EG.superRankInfo) && (0, pG.jsxs)(YG.k, {
              className: "AccountSettingsSuperRankProlong",
              loading: RG,
              onClick: () => {
                HG(jG.j.id, null)
              },
              children: [(0, pG.jsx)(kG.c, {
                name: "bolt"
              }), VG("settingsMenu:getSuperRankAdditionalDaysPremiumCurrency", {
                days: jG.j.product.days,
                price: jG.j.price
              })]
            }), (0, pG.jsxs)(YG.k, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, sG.n)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, pG.jsx)(kG.c, {
                name: "bolt"
              }), VG("homePage:giftSuperRank")]
            })]
          }), TG && (0, pG.jsx)("div", {
            className: "AccountSettingsSuperRankProlongError SmallTextBold",
            children: VG(TG.translationKey)
          }), (0, pG.jsx)(pb, {
            ...rG
          })]
        }), (0, pG.jsx)(Sb, {
          showing: SG
        }), JG.featureFlags.useSocialFeatures && (0, pG.jsx)(mb, {
          showing: SG
        }), (0, pG.jsxs)("div", {
          className: "SettingBoxGroup AccountSettingsDeleteAccountGroup",
          children: [(0, pG.jsxs)("div", {
            className: "SettingBox AccountSettingsDeleteAccount SettingBoxWarning",
            children: [(0, pG.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: VG(Fb(Kb, hb))
            }), (0, mG.isDiscordClient)() && (0, pG.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: VG("auth:discordActivityKickWarning")
            }), (0, pG.jsx)(ob, {
              showing: SG
            })]
          }), (0, pG.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: VG(Kb ? "auth:deleteGuestAccountWarning" : "auth:deleteAccountLossWarning")
          })]
        })]
      })
    }));

    function Fb(GG, bG) {
      return GG ? bG ? "auth:deleteGuestAccountButtonTitle" : "auth:deleteGuestAccountWarning" : "auth:deleteAccountButtonTitle"
    }
    var vb = ZG(34376),
      ab = ZG(3113),
      cb = ZG(1204),
      lb = ZG(1385),
      jb = ZG(1945),
      Pb = ZG(8933),
      Mb = ZG(34384);

    function Ab() {
      const {
        t: GG
      } = (0, yG.w)();
      return (0, jb.f)("localPlayerAlive") ? (0, pG.jsx)(Pb.e, {
        icon: "camera-alt",
        title: GG("screenshotMode:title"),
        sub: GG("screenshotMode:entrySub"),
        onClick: Mb.c
      }) : null
    }
    var sb = ZG(34393);
    const qb = (0, wG.memo)((function(GG) {
        let {
          inGame: bG
        } = GG;
        const {
          t: ZG,
          selectedLanguage: wG
        } = (0, yG.w)(), {
          clientEscMenuOptions: SG,
          showDebugOverlay: LG,
          isTouchScreen: kG
        } = (0, iG.o)(["clientEscMenuOptions", "showDebugOverlay", "isTouchScreen"]), UG = (0, hG.i)("hideCoordinates");
        let YG = "settingsMenu:showCoordinates",
          VG = "settingsMenu:showChunkCoordinates";

        function fG(GG) {
          const bG = new Intl.DisplayNames([GG], {
            type: "language"
          }).of(GG);
          return bG.charAt(0).toUpperCase() + bG.slice(1)
        }
        return UG && (YG = "settingsMenu:showCoordinatesHidden", VG = "settingsMenu:showChunkCoordinatesHidden"), (0, pG.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [bG && JG.featureFlags.canUseInviteLinks && (0, pG.jsxs)("div", {
            className: "SettingBox",
            children: [(0, pG.jsx)("div", {
              className: "SettingsMenuInviteHeader",
              children: ZG("settingsMenu:inviteLink")
            }), (0, pG.jsx)(vb.g, {})]
          }), (0, pG.jsxs)("div", {
            className: "SettingBox",
            children: [(0, pG.jsx)("div", {
              className: "SliderText",
              style: {
                marginBottom: "10px"
              },
              children: ZG("settingsMenu:language")
            }), (0, pG.jsx)(ab.b, {
              options: Object.entries(yG.g).map((GG => {
                let [bG, ZG] = GG;
                return {
                  label: (0, pG.jsxs)("div", {
                    className: "SettingsMenuLanguageOption",
                    children: [(0, pG.jsx)("img", {
                      src: ZG.flagImg,
                      alt: "flag"
                    }), (0, pG.jsxs)("span", {
                      children: [fG(bG), " ", (0, pG.jsxs)("span", {
                        className: "SettingsMenuLanguageOptionCode",
                        children: ["(", bG, ")"]
                      })]
                    })]
                  }),
                  value: bG
                }
              })),
              value: wG.code,
              onChange: GG => {
                cb.d.get().setCurrentLanguage(GG.value)
              }
            })]
          }), bG && kG && (0, sb.d)() && (0, pG.jsx)(Ab, {}), !(0, JG.isMobileApp)() && (0, lb.j)() && JG.featureFlags.useForceRotateForceFullscreenOverlay && (0, pG.jsx)(uG.c, {
            label: ZG("settingsMenu:disableFullscreenMode"),
            checked: SG.disableFullscreen,
            onClick: GG => {
              iG.e.setClientEscMenuOptions({
                disableFullscreen: GG
              })
            }
          }), (0, pG.jsx)(uG.c, {
            label: ZG(YG),
            checked: SG.showCoordinates,
            onClick: GG => {
              iG.e.setClientEscMenuOptions({
                showCoordinates: GG
              })
            },
            disabled: UG
          }), (0, pG.jsx)(uG.c, {
            label: ZG(VG),
            checked: SG.showChunkCoordinates,
            onClick: GG => {
              iG.e.setClientEscMenuOptions({
                showChunkCoordinates: GG
              })
            },
            disabled: UG
          }), (0, pG.jsx)(uG.c, {
            label: ZG("settingsMenu:showFps"),
            checked: SG.showFPS,
            onClick: GG => {
              iG.e.setClientEscMenuOptions({
                showFPS: GG
              })
            }
          }), (0, pG.jsx)(uG.c, {
            label: ZG("settingsMenu:disableBunnyHopping"),
            checked: SG.disableBunnyHopping,
            onClick: GG => {
              iG.e.setClientEscMenuOptions({
                disableBunnyHopping: GG
              })
            }
          }), (0, db.y)() && (0, pG.jsx)(uG.c, {
            label: ZG("settingsMenu:showChat"),
            checked: SG.showChat,
            onClick: GG => {
              iG.e.setClientEscMenuOptions({
                showChat: GG
              })
            }
          }), (0, pG.jsx)(uG.c, {
            label: ZG("settingsMenu:showDebugOverlay"),
            checked: LG,
            onClick: GG => {
              iG.e.set({
                showDebugOverlay: GG
              })
            }
          }), JG.featureFlags.useSocialFeatures && (0, pG.jsx)(uG.c, {
            label: ZG("settingsMenu:showFriendOnlineToasts"),
            checked: SG.showFriendOnlineToasts,
            onClick: GG => {
              iG.e.setClientEscMenuOptions({
                showFriendOnlineToasts: GG
              })
            }
          }), (0, pG.jsx)(uG.c, {
            label: ZG("settingsMenu:showNewItemIndicator"),
            checked: SG.showNewItemIndicator,
            onClick: GG => {
              iG.e.setClientEscMenuOptions({
                showNewItemIndicator: GG
              })
            }
          })]
        })
      })),
      nb = (0, wG.memo)((function() {
        const {
          t: GG
        } = (0, yG.w)(), {
          soundVolume: bG,
          musicVolume: ZG
        } = (0, iG.o)(["soundVolume", "musicVolume"]);
        return (0, pG.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, pG.jsx)(uG.f, {
            name: GG("settingsMenu:musicVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: ZG,
            onChange: GG => {
              iG.e.set({
                musicVolume: Math.round(100 * GG) / 100
              })
            },
            format: GG => GG.toFixed(2)
          }), (0, pG.jsx)(uG.f, {
            name: GG("settingsMenu:soundEffectsVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: bG,
            onChange: GG => {
              iG.e.set({
                soundVolume: Math.round(100 * GG) / 100
              })
            },
            format: GG => GG.toFixed(2)
          })]
        })
      }));
    var gb = ZG(693),
      eb = ZG(1389),
      Rb = ZG(3662),
      Tb = ZG(34400),
      Hb = ZG(3465);
    const tb = {
      app: "notificationSettings:pushTargetsApp",
      browser: "notificationSettings:pushTargetsBrowser",
      msnPlay: "notificationSettings:pushTargetsMsnPlay"
    };

    function Db() {
      const {
        t: GG
      } = (0, yG.w)(), bG = (0, Hb.c)(), {
        mobilePushNotificationsCanAsk: ZG
      } = (0, iG.o)(["mobilePushNotificationsCanAsk"]), [SG, LG] = (0, wG.useState)(null), [kG, UG] = (0, wG.useState)(!1), [VG, fG] = (0, wG.useState)(null), [QG, KG] = (0, wG.useState)(!1), hG = (0, wG.useCallback)((() => {
        (0, Rb.c)().then((GG => {
          bG.current && (LG(GG), UG(!1))
        })).catch((GG => {
          console.error("Failed to load push notification targets:", GG), bG.current && UG(!0)
        }))
      }), [bG]), dG = (0, wG.useCallback)((() => {
        (0, Tb.e)().then((GG => {
          bG.current && fG((() => GG))
        }))
      }), [bG]);
      (0, wG.useEffect)((() => {
        hG()
      }), [hG]), (0, wG.useEffect)((() => {
        dG()
      }), [dG, ZG]), (0, eb.g)(Rb.h, hG);
      const JG = null === SG ? [] : Object.keys(tb).filter((GG => SG[GG] > 0));
      return (0, pG.jsxs)("div", {
        className: "SettingBox PushNotificationSettings",
        children: [(0, pG.jsx)("div", {
          className: "SliderText",
          children: GG("notificationSettings:pushNotifications")
        }), null === SG && kG && (0, pG.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: GG("notificationSettings:pushTargetsLoadFailed")
        }), null !== SG && 0 === JG.length && (0, pG.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: GG("notificationSettings:pushTargetsNone")
        }), JG.length > 0 && (0, pG.jsx)("ul", {
          className: "PushNotificationSettingsTargets",
          children: JG.map((bG => {
            var ZG;
            return (0, pG.jsx)("li", {
              children: GG(tb[bG], {
                count: null !== (ZG = null === SG || void 0 === SG ? void 0 : SG[bG]) && void 0 !== ZG ? ZG : 0
              })
            }, bG)
          }))
        }), null !== VG && (0, pG.jsx)(YG.d, {
          className: "PushNotificationSettingsButton",
          loading: QG,
          onClick: () => {
            KG(!0), VG().catch((GG => {
              console.error("Failed to turn on push notifications:", GG)
            })).finally((() => {
              bG.current && (KG(!1), dG())
            }))
          },
          children: GG("notificationSettings:pushTurnOn")
        })]
      })
    }
    var Nb = ZG(2516);
    const Ob = {
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
      xb = {
        remindersOn: {
          label: "dailyDrop:settingReminders",
          reportAs: "reminders"
        },
        hidden: {
          label: "dailyDrop:settingHide",
          reportAs: "hidden"
        }
      };

    function Bb(GG) {
      let {
        setting: bG,
        value: ZG
      } = GG;
      const {
        t: SG
      } = (0, yG.w)(), kG = (0, Hb.c)(), [UG, YG] = (0, wG.useState)(null), [VG, fG] = (0, wG.useState)(!1), [QG, KG] = (0, wG.useState)(null);
      return (0, wG.useEffect)((() => {
        "remindersOn" === bG && (0, Tb.e)().then((GG => {
          kG.current && KG((() => GG))
        }), (GG => {
          console.error("Couldn't tell whether this device can take push notifications:", GG)
        }))
      }), [bG, kG]), (0, pG.jsx)(uG.c, {
        className: LG()({
          DailyDropSettingFailed: VG
        }),
        label: SG(xb[bG].label),
        checked: null !== UG && void 0 !== UG ? UG : ZG,
        note: VG ? SG("dailyDrop:settingFailed") : void 0,
        onClick: GG => {
          null === UG && (YG(GG), fG(!1), GG && null !== QG && QG().catch((GG => {
            console.error("Failed to ask for push notifications for Lucky Skin Block reminders:", GG)
          })), (0, Nb.t)("daily_drop.setting", `${xb[bG].reportAs}_${GG?"on":"off"}`), (0, Nb.u)("hidden" === bG ? {
            hidden: GG
          } : {
            remindersOn: GG
          }).catch((GG => {
            console.error(`Failed to save the Lucky Skin Block's ${bG} setting:`, GG), kG.current && fG(!0)
          })).finally((() => {
            kG.current && YG(null)
          })))
        }
      })
    }
    const GZ = (0, wG.memo)((function() {
      const {
        t: GG
      } = (0, yG.w)(), {
        clientEscMenuOptions: bG
      } = (0, iG.o)(["clientEscMenuOptions"]), {
        userContext: ZG
      } = (0, KG.e)(), wG = ZG.dailyDrop;
      return (0, pG.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [JG.featureFlags.useSocialFeatures && (0, pG.jsx)(uG.e, {
          label: GG("notificationSettings:friendRequests"),
          options: gb.b.map((bG => ({
            value: bG,
            label: GG(Ob[bG].label)
          }))),
          value: bG.friendRequestNotifications,
          onChange: GG => {
            iG.e.setClientEscMenuOptions({
              friendRequestNotifications: GG
            })
          },
          circleInfoText: (0, pG.jsx)("div", {
            className: "NotificationSettingLevelsInfo",
            children: gb.b.map((bG => (0, pG.jsxs)("div", {
              children: [(0, pG.jsx)("b", {
                children: GG(Ob[bG].label)
              }), ": ", GG(Ob[bG].info)]
            }, bG)))
          })
        }), null !== wG && (0, pG.jsxs)(pG.Fragment, {
          children: [(0, pG.jsx)(Bb, {
            setting: "remindersOn",
            value: wG.remindersOn
          }), (0, pG.jsx)(Bb, {
            setting: "hidden",
            value: wG.hidden
          })]
        }), (0, pG.jsx)(Db, {})]
      })
    }));
    var bZ = ZG(4518),
      ZZ = ZG(188),
      wZ = ZG(318),
      SZ = ZG(6661),
      LZ = ZG(3441),
      yZ = ZG(34405),
      kZ = ZG(604),
      UZ = ZG(19);
    var YZ = ZG(631),
      VZ = ZG(29),
      pZ = ZG(4398);
    const fZ = new Map([
      ["chunkHorizAddDist", "horizontal"],
      ["chunkVertAddDist", "vertical"]
    ]);

    function QZ(GG) {
      return fZ.has(GG) ? rG.gameBridge.lookup("Vr", null) : null
    }

    function KZ(GG) {
      if (!(0, kZ.L)(iG.e.get("clientEscMenuOptions")[GG])) return iG.e.get("clientEscMenuOptions")[GG];
      const bG = QZ(GG);
      return null !== bG ? bG[fZ.get(GG)] : VZ.h.getItem(GG)
    }

    function hZ(GG, bG) {
      if ("useTouchControls" === GG) return void(0, pZ.b)(bG);
      GG in iG.e.get("clientEscMenuOptions") && iG.e.setClientEscMenuOptions({
        [GG]: bG
      });
      const ZG = QZ(GG);
      null !== ZG && rG.gameBridge.send("setChunkAddDistance", {
        ...ZG,
        [fZ.get(GG)]: bG
      }), VZ.h.setItem(GG, bG)
    }
    var dZ = ZG(4437),
      JZ = ZG(34411),
      rZ = ZG(34414),
      zZ = ZG(4514),
      EZ = ZG(34429);

    function oZ(GG) {
      var bG, SG, kG, UG;
      let {
        minChunkAddDist: YG,
        getValue: VG,
        onChange: fG,
        setApplySettingsCallback: QG
      } = GG;
      const {
        t: KG
      } = (0, yG.w)(), {
        clientEscMenuOptions: dG
      } = (0, iG.o)(["clientEscMenuOptions", "showDistantNametags"]), rG = (0, wG.useRef)(VG("showFog")), zG = (0, wG.useRef)(dG.antiAliasing), EG = (0, wG.useRef)(dG.useWebGpu), [oG, XG] = (0, wG.useState)(null), [WG, mG] = (0, wG.useState)(!1), [IG, FG] = (0, wG.useState)((() => (0, LZ.e)(JG.featureFlags.settings.canUseShaderPacks))), [vG] = (0, wG.useState)((() => iG.e.isWebGpuDefaultOff())), [aG] = (0, wG.useState)(wZ.k), [cG] = (0, wG.useState)((() => !0 === VZ.h.getItem(Jb.Cc))), [lG] = (0, wG.useState)((() => iG.e.isWebGpuOnStored()));
      (0, wG.useEffect)((() => {
        let GG = !1;
        return (0, JG.hasUsableWebGpuAdapter)().then((async bG => {
          const ZG = cG || lG,
            wG = !bG && YZ.B && await (0, EZ.f)(ZG);
          GG || (XG(bG || wG), mG(wG))
        })), (0, LZ.j)(JG.featureFlags.settings.canUseShaderPacks) && (0, SZ.e)().then((async bG => {
          const wG = null !== bG && await async function(GG) {
            const [{
              isShaderPackActive: bG
            }, {
              loadPageShaderPackCompiler: wG
            }] = await Promise.all([ZG.e(139).then((() => ZG(6653))), Promise.all([ZG.e(78), ZG.e(136), ZG.e(138)]).then((() => ZG(6608)))]);
            return bG(GG, await wG())
          }(bG);
          GG || FG(wG)
        })), () => {
          GG = !0
        }
      }), [cG, lG]);
      const jG = (!(IG && !cG) || !WG) && oG,
        PG = function(GG, bG, ZG, wG, SG) {
          return (0, yZ.b)(ZG, wG) && !0 === bG ? {
            translationKey: "settingsMenu:newWebGpuForcedOnByShaderPack",
            checked: !0,
            disabled: !0
          } : {
            translationKey: !1 !== bG ? "settingsMenu:newWebGpu" : SG ? "settingsMenu:newWebGpuDisabledUntilRestart" : "settingsMenu:newWebGpuUnsupported",
            checked: GG && !1 !== bG,
            disabled: !0 !== bG
          }
        }(dG.useWebGpu, jG, IG, vG, aG),
        MG = (dG.useWebGpu || (0, yZ.b)(IG, vG)) && IG && !0 === jG,
        AG = (0, hG.i)("lightingOverride"),
        sG = !(0, kZ.L)(AG);
      let qG = "settingsMenu:enableLighting";
      sG && (qG = AG ? "settingsMenu:enableLightingForcedOn" : "settingsMenu:enableLightingForcedOff");
      const nG = GG => {
          var bG, ZG, wG;
          const SG = null !== (bG = GG.showFog) && void 0 !== bG ? bG : VG("showFog"),
            LG = null !== (ZG = GG.antiAliasing) && void 0 !== ZG ? ZG : dG.antiAliasing,
            yG = null !== (wG = GG.useWebGpu) && void 0 !== wG ? wG : dG.useWebGpu,
            kG = !YZ.B && SG !== rG.current || LG !== zG.current || yG !== EG.current;
          QG(kG ? () => uG.g : null)
        },
        gG = (0, hG.i)("fogChunkDistanceOverride"),
        eG = (0, hG.i)("fogBlockDistanceOverride"),
        RG = !(0, kZ.L)(gG) || !(0, kZ.L)(eG),
        TG = RG ? "settingsMenu:showFogForcedOn" : "settingsMenu:showFog",
        [HG, tG] = (0, bZ.i)(YG),
        [DG, NG] = (0, zZ.e)(YG),
        OG = KG("settingsMenu:chunkLoadDistanceDeviceLimit"),
        xG = DG < HG,
        BG = Math.min(null !== (bG = VG("chunkHorizAddDist")) && void 0 !== bG ? bG : YG[0], DG),
        Gb = !RG && function(GG, bG) {
          return !0 === GG.showFog && GG.fogChunkDistance > bG
        }(dG, BG);
      return (0, pG.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [(0, pG.jsx)(uG.f, {
          name: KG("settingsMenu:horizontalChunkLoadDistance"),
          min: YG[0],
          max: HG,
          selectableMax: DG,
          cappedNote: OG,
          step: 1,
          initValue: BG,
          onChange: GG => {
            !0 === VG("showFog") && GG < VG("fogChunkDistance") && fG("fogChunkDistance", GG), fG("chunkHorizAddDist", GG), UZ.l.xh("updatedChunkLoadDist")
          },
          circleInfoText: KG("settingsMenu:chunkLoadDistanceInfo")
        }), (0, pG.jsx)(uG.f, {
          name: KG("settingsMenu:verticalChunkLoadDistance"),
          min: YG[1],
          max: tG,
          selectableMax: NG,
          cappedNote: xG ? void 0 : OG,
          step: 1,
          initValue: Math.min(null !== (SG = VG("chunkVertAddDist")) && void 0 !== SG ? SG : YG[1], NG),
          onChange: GG => {
            fG("chunkVertAddDist", GG), UZ.l.xh("updatedChunkLoadDist")
          },
          circleInfoText: KG("settingsMenu:chunkLoadDistanceInfo"),
          className: "VerticalChunkLoadSlider"
        }), (0, pG.jsx)(uG.c, {
          label: KG("settingsMenu:chunkFadeIn"),
          checked: dG.chunkFadeIn,
          onClick: GG => {
            iG.e.setClientEscMenuOptions({
              chunkFadeIn: GG
            })
          },
          circleInfoText: KG("settingsMenu:chunkFadeInInfo")
        }), CG.devTools.supports("chunkBorders") && (0, pG.jsx)(uG.c, {
          label: KG("settingsMenu:showChunkBorders"),
          checked: dG.showChunkBorders,
          onClick: GG => {
            iG.e.setClientEscMenuOptions({
              showChunkBorders: GG
            })
          },
          circleInfoText: KG("settingsMenu:showChunkBordersInfo")
        }), (0, pG.jsx)(uG.c, {
          label: KG(qG),
          checked: dG.enableLighting,
          onClick: GG => {
            iG.e.setClientEscMenuOptions({
              enableLighting: GG
            })
          },
          disabled: sG
        }), (0, pG.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, pG.jsx)(uG.c, {
            label: KG(TG),
            checked: dG.showFog,
            onClick: GG => {
              nG({
                showFog: GG
              }), iG.e.setClientEscMenuOptions({
                showFog: GG
              })
            },
            disabled: RG,
            className: LG()({
              SettingBoxWarning: Gb
            })
          }), (0, pG.jsx)(uG.f, {
            name: KG("settingsMenu:fogChunkDistance"),
            min: YG[0],
            max: ZZ.d.maxChunkHorizAddDistance,
            step: 1,
            initValue: null !== (kG = dG.fogChunkDistance) && void 0 !== kG ? kG : YG[0],
            onChange: GG => {
              iG.e.setClientEscMenuOptions({
                fogChunkDistance: GG
              }), UZ.l.xh("fogChunkDistanceChanged", GG)
            },
            circleInfoText: KG("settingsMenu:fogChunkDistanceInfo"),
            disabled: RG || !1 === VG("showFog"),
            className: LG()({
              SettingBoxWarning: Gb
            })
          }), Gb && (0, pG.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: KG("settingsMenu:fogChunkDistanceInfo")
          })]
        }), !YZ.B && (0, pG.jsx)(uG.c, {
          label: KG(MG ? "settingsMenu:disableBlockTextureAtlasUnavailableWithShaderPack" : "settingsMenu:disableBlockTextureAtlas"),
          checked: !MG && dG.disableTexAtlas,
          onClick: GG => {
            iG.e.setClientEscMenuOptions({
              disableTexAtlas: GG
            })
          },
          circleInfoText: KG("settingsMenu:disableBlockTextureAtlasInfo"),
          disabled: MG
        }), (0, pG.jsx)(uG.f, {
          name: KG("settingsMenu:fieldOfView"),
          min: 50,
          max: 160,
          step: 1,
          initValue: dG.cameraFOV,
          onChange: GG => {
            iG.e.setClientEscMenuOptions({
              cameraFOV: GG
            })
          }
        }), (0, pG.jsx)(uG.c, {
          label: KG("settingsMenu:disableViewBobbing"),
          checked: dG.disableBobbing,
          onClick: GG => {
            iG.e.setClientEscMenuOptions({
              disableBobbing: GG
            })
          },
          circleInfoText: KG("settingsMenu:disableViewBobbingInfo")
        }), (0, pG.jsx)(uG.c, {
          label: KG("settingsMenu:antiAliasing"),
          checked: dG.antiAliasing,
          onClick: GG => {
            nG({
              antiAliasing: GG
            }), (0, dZ.e)("antiAliasing"), iG.e.setClientEscMenuOptions({
              antiAliasing: GG
            })
          },
          circleInfoText: KG("settingsMenu:antiAliasingInfo")
        }), (0, pG.jsx)(uG.f, {
          name: KG("settingsMenu:pixelScale"),
          min: 1,
          max: 8,
          step: 1,
          initValue: null !== (UG = dG.pixelScale) && void 0 !== UG ? UG : 1,
          onChange: GG => {
            (GG !== iG.e.get("clientEscMenuOptions").pixelScale || (0, rZ.p)()) && (0, dZ.e)("pixelScale"), iG.e.setClientEscMenuOptions({
              pixelScale: GG
            })
          },
          circleInfoText: KG("settingsMenu:pixelScaleInfo"),
          format: GG => `${GG}x`
        }), (0, pG.jsx)(uG.c, {
          label: KG("settingsMenu:pixelSmoothing"),
          checked: dG.pixelSmoothing,
          onClick: GG => {
            iG.e.setClientEscMenuOptions({
              pixelSmoothing: GG
            })
          },
          circleInfoText: KG("settingsMenu:pixelSmoothingInfo")
        }), YZ.B && (0, pG.jsx)(uG.c, {
          label: KG("settingsMenu:distantNametags"),
          checked: (0, JZ.d)(),
          onClick: GG => {
            iG.e.set({
              showDistantNametags: GG
            })
          },
          circleInfoText: KG("settingsMenu:distantNametagsInfo")
        }), (0, pG.jsx)(uG.c, {
          label: KG(PG.translationKey),
          checked: PG.checked,
          onClick: GG => {
            nG({
              useWebGpu: GG
            }), iG.e.setClientEscMenuOptions({
              useWebGpu: GG
            })
          },
          circleInfoText: KG("settingsMenu:newWebGpuInfo"),
          disabled: PG.disabled
        })]
      })
    }
    var XZ = ZG(4434),
      uZ = ZG(8900),
      iZ = ZG(34432),
      CZ = ZG(8917),
      WZ = ZG(34439);
    const mZ = {
        color: 16777215,
        name: "white"
      },
      IZ = {
        color: 0,
        name: "black"
      },
      FZ = [mZ, {
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
      }, IZ],
      vZ = [IZ, mZ];

    function aZ(GG) {
      return `${GG} px`
    }

    function cZ(GG) {
      return `${GG}%`
    }

    function lZ(GG) {
      let {
        label: bG,
        value: ZG,
        swatches: wG,
        onChange: SG
      } = GG;
      const {
        t: kG
      } = (0, yG.w)(), UG = !wG.some((GG => GG.color === ZG));
      return (0, pG.jsxs)("div", {
        className: "SettingBox CrosshairColorRow",
        children: [(0, pG.jsx)("div", {
          className: "SliderText",
          children: bG
        }), (0, pG.jsxs)("div", {
          className: "CrosshairSwatches",
          role: "radiogroup",
          "aria-label": bG,
          children: [wG.map((GG => {
            let {
              color: bG,
              name: wG
            } = GG;
            return (0, pG.jsx)("button", {
              type: "button",
              role: "radio",
              "aria-checked": bG === ZG,
              "aria-label": kG(`crosshairSettings:color_${wG}`),
              "data-pad-focusable": !0,
              className: LG()("CrosshairSwatch", {
                Selected: bG === ZG
              }),
              style: {
                background: (0, WZ.k)(bG)
              },
              onClick: () => {
                SG(bG)
              }
            }, bG)
          })), (0, pG.jsx)("label", {
            className: LG()("CrosshairSwatch CrosshairSwatchCustom", {
              Selected: UG
            }),
            style: UG ? {
              background: (0, WZ.k)(ZG)
            } : void 0,
            title: kG("crosshairSettings:customColor"),
            "data-pad-focusable": !0,
            children: (0, pG.jsx)("input", {
              type: "color",
              "aria-label": kG("crosshairSettings:customColor"),
              value: (0, WZ.k)(ZG),
              onChange: GG => {
                const bG = (0, WZ.m)(GG.target.value);
                null !== bG && SG(bG)
              }
            })
          })]
        })]
      })
    }

    function jZ(GG) {
      let {
        settings: bG,
        onChange: ZG
      } = GG;
      const {
        t: wG
      } = (0, yG.w)(), SG = (GG, wG) => {
        ZG((0, WZ.o)(bG, GG, wG))
      }, LG = function(GG, ZG) {
        let wG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : aZ;
        const {
          min: LG,
          max: yG,
          step: kG
        } = WZ.b[GG];
        return (0, pG.jsx)(uG.f, {
          name: ZG,
          min: LG,
          max: yG,
          step: kG,
          initValue: bG[GG],
          format: wG,
          onChange: bG => {
            SG(GG, bG)
          }
        }, GG)
      }, kG = ["lines", "dot", "circle"].filter((GG => bG[GG])), UG = (GG, ZG, wG) => (0, pG.jsx)(uG.c, {
        label: ZG,
        checked: bG[GG],
        disabled: 1 === kG.length && kG[0] === GG,
        circleInfoText: wG,
        onClick: bG => {
          SG(GG, bG)
        }
      }, GG), YG = "shapes" === bG.style;
      return (0, pG.jsxs)(pG.Fragment, {
        children: [(0, pG.jsx)(uG.e, {
          label: wG("crosshairSettings:style"),
          options: [{
            value: "classic",
            label: wG("crosshairSettings:styleClassic")
          }, {
            value: "shapes",
            label: wG("crosshairSettings:styleShapes")
          }],
          value: bG.style,
          onChange: GG => {
            SG("style", GG)
          }
        }), (0, pG.jsx)(lZ, {
          label: wG("crosshairSettings:color"),
          value: bG.color,
          swatches: FZ,
          onChange: GG => {
            SG("color", GG)
          }
        }), LG("opacity", wG("crosshairSettings:opacity"), cZ), !YG && LG("size", wG("crosshairSettings:size"), cZ), YG && (0, pG.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [UG("lines", wG("crosshairSettings:lines")), bG.lines && LG("lineLength", wG("crosshairSettings:lineLength")), bG.lines && LG("lineThickness", wG("crosshairSettings:lineThickness")), bG.lines && LG("gap", wG("crosshairSettings:gap")), bG.lines && UG("tStyle", wG("crosshairSettings:tStyle"))]
        }), YG && (0, pG.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [UG("dot", wG("crosshairSettings:dot")), bG.dot && LG("dotSize", wG("crosshairSettings:dotSize"))]
        }), YG && (0, pG.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [UG("circle", wG("crosshairSettings:circle")), bG.circle && LG("circleRadius", wG("crosshairSettings:circleRadius")), bG.circle && LG("circleThickness", wG("crosshairSettings:circleThickness"))]
        }), (0, pG.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [LG("outline", wG("crosshairSettings:outline"), (GG => GG > 0 ? aZ(GG) : wG("crosshairSettings:off"))), bG.outline > 0 && (0, pG.jsx)(lZ, {
            label: wG("crosshairSettings:outlineColor"),
            value: bG.outlineColor,
            swatches: vZ,
            onChange: GG => {
              SG("outlineColor", GG)
            }
          })]
        }), UG("growOnClick", wG("crosshairSettings:growOnClick")), YG && UG("forGuns", wG("crosshairSettings:forGuns"), wG("crosshairSettings:forGunsInfo"))]
      })
    }
    var PZ = ZG(59),
      MZ = ZG(1239),
      AZ = ZG(12875),
      sZ = ZG(14030),
      qZ = ZG(15464),
      nZ = ZG(15973);
    const gZ = ["sky", "grass", "stone", "sand", "snow", "night"],
      eZ = "4rem";

    function RZ(GG) {
      return {
        backgroundImage: `url(${GG})`,
        backgroundSize: `${eZ} ${eZ}`,
        backgroundRepeat: "repeat",
        imageRendering: "pixelated"
      }
    }

    function TZ(GG) {
      return {
        ...(() => {
          switch (GG) {
            case "sky":
              return {
                backgroundImage: "linear-gradient(#3d8fe0 0%, #8cc8f5 45%, #d6eefc 58%, #6fae4a 58.01%, #4f8a33 100%)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              };
            case "grass":
              return RZ(AZ);
            case "stone":
              return RZ(sZ);
            case "sand":
              return RZ(qZ);
            case "snow":
              return RZ(nZ);
            case "night":
              return {
                backgroundImage: "radial-gradient(circle at 50% 50%, #1e2a4a 0%, #070b16 100vmax)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              }
          }
        })(),
        backgroundPosition: "center"
      }
    }

    function HZ(GG) {
      return Object.freeze({
        ...WZ.f,
        style: "shapes",
        outline: 1,
        lines: !1,
        ...GG
      })
    }
    const tZ = [{
        id: "default",
        settings: WZ.f
      }, {
        id: "cross",
        settings: HZ({
          color: 5046092,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3
        })
      }, {
        id: "crossDot",
        settings: HZ({
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
        settings: HZ({
          dot: !0,
          dotSize: 4
        })
      }, {
        id: "circle",
        settings: HZ({
          circle: !0,
          circleRadius: 12,
          circleThickness: 1.5,
          dot: !0,
          dotSize: 2
        })
      }, {
        id: "tShape",
        settings: HZ({
          color: 16731391,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3,
          tStyle: !0
        })
      }, {
        id: "tiny",
        settings: HZ({
          color: 16776960,
          lines: !0,
          lineLength: 3,
          lineThickness: 1,
          gap: 2
        })
      }, {
        id: "bold",
        settings: HZ({
          lines: !0,
          lineLength: 10,
          lineThickness: 3,
          gap: 0,
          outline: 1.5
        })
      }],
      DZ = ["growOnClick", "forGuns"];
    var NZ = ZG(34446);

    function OZ(GG) {
      let {
        label: bG,
        selected: ZG,
        onClick: wG,
        className: SG,
        style: yG,
        children: kG
      } = GG;
      return (0, pG.jsx)("button", {
        type: "button",
        role: "radio",
        "aria-checked": ZG,
        title: bG,
        "aria-label": bG,
        "data-pad-focusable": !0,
        className: LG()("CrosshairBackdropSwatch", SG, {
          Selected: ZG
        }),
        style: yG,
        onClick: wG,
        children: kG
      })
    }

    function xZ(GG) {
      let {
        backdrop: bG,
        onChange: ZG,
        game: wG
      } = GG;
      const {
        t: SG
      } = (0, yG.w)();
      return (0, pG.jsxs)("div", {
        className: "CrosshairBackdrops",
        role: "radiogroup",
        "aria-label": SG("crosshairSettings:background"),
        children: [wG && (0, pG.jsx)(OZ, {
          label: SG("crosshairSettings:bg_game"),
          selected: wG.selected,
          onClick: wG.onSelect,
          className: "CrosshairGameSwatch",
          children: (0, pG.jsx)(kG.c, {
            name: "cube"
          })
        }), gZ.map((GG => (0, pG.jsx)(OZ, {
          label: SG(`crosshairSettings:bg_${GG}`),
          selected: !(null !== wG && void 0 !== wG && wG.selected) && GG === bG,
          style: TZ(GG),
          onClick: () => {
            ZG(GG)
          }
        }, GG)))]
      })
    }

    function BZ(GG) {
      let {
        settings: bG,
        touch: ZG,
        backdrop: wG,
        onChange: SG
      } = GG;
      const {
        t: kG
      } = (0, yG.w)(), UG = function(GG) {
        var bG;
        return null !== (bG = tZ.find((bG => (0, WZ.n)(bG.settings, GG, DZ)))) && void 0 !== bG ? bG : null
      }(bG);
      return (0, pG.jsx)("div", {
        className: "CrosshairPresets",
        role: "radiogroup",
        "aria-label": kG("crosshairSettings:presets"),
        children: tZ.map((GG => {
          const yG = (null === UG || void 0 === UG ? void 0 : UG.id) === GG.id;
          return (0, pG.jsxs)("button", {
            type: "button",
            role: "radio",
            "aria-checked": yG,
            "data-pad-focusable": !0,
            className: LG()("CrosshairPreset", {
              Selected: yG
            }),
            onClick: () => {
              SG(function(GG, bG) {
                return {
                  ...bG.settings,
                  growOnClick: GG.growOnClick,
                  forGuns: GG.forGuns
                }
              }(bG, GG))
            },
            children: [(0, pG.jsx)("div", {
              className: "CrosshairPresetStage",
              style: TZ(wG),
              children: (0, pG.jsx)(NZ.d, {
                settings: GG.settings,
                touch: ZG,
                inPreview: !0
              })
            }), (0, pG.jsx)("div", {
              className: "CrosshairPresetName",
              children: kG(`crosshairSettings:preset_${GG.id}`)
            })]
          }, GG.id)
        }))
      })
    }
    var Gw = ZG(1614);

    function bw(GG, bG) {
      const [ZG, SG] = (0, wG.useState)(!1), LG = () => {
        SG(!1)
      }, [yG, kG] = (0, wG.useState)(!1), UG = (0, wG.useRef)({
        growOnClick: GG.growOnClick,
        forGuns: GG.forGuns
      });
      (0, wG.useEffect)((() => {
        const bG = UG.current;
        UG.current = {
          growOnClick: GG.growOnClick,
          forGuns: GG.forGuns
        }, (GG.growOnClick && !bG.growOnClick || GG.forGuns && !bG.forGuns) && kG(!0)
      }), [GG.growOnClick, GG.forGuns]), (0, wG.useEffect)((() => {
        if (!yG) return;
        const GG = setTimeout((() => {
          kG(!1)
        }), 600);
        return () => {
          clearTimeout(GG)
        }
      }), [yG]);
      const YG = ZG || yG;
      return {
        view: {
          pressed: YG,
          spread: YG && GG.forGuns && !GG.growOnClick ? 6 : 0
        },
        handlers: {
          onPointerDown: GG => {
            !GG.target.closest(bG) && (0, Gw.b)(GG.currentTarget, GG.pointerId) && SG(!0)
          },
          onPointerUp: LG,
          onPointerCancel: LG,
          onLostPointerCapture: LG
        }
      }
    }

    function Zw(GG) {
      let {
        settings: bG,
        touch: ZG,
        backdrop: wG,
        className: SG,
        children: yG,
        label: kG
      } = GG;
      const UG = bw(bG, ".CrosshairStageControls");
      return (0, pG.jsxs)("div", {
        className: LG()("CrosshairStage", SG),
        style: TZ(wG),
        ...UG.handlers,
        children: [(0, pG.jsx)("div", {
          className: "CrosshairStageHold",
          role: "img",
          "aria-label": kG,
          children: (0, pG.jsx)(NZ.d, {
            settings: bG,
            touch: ZG,
            inPreview: !0,
            ...UG.view
          })
        }), yG]
      })
    }
    const ww = "crosshairFullScreen";

    function Sw(GG) {
      let {
        settings: bG,
        touch: ZG,
        backdrop: SG,
        onBackdrop: UG,
        inGame: VG,
        onChange: fG,
        onClose: QG
      } = GG;
      const {
        t: KG
      } = (0, yG.w)(), hG = (0, wG.useRef)(null);
      (0, MZ.w)("popup", hG, QG),
      function(GG) {
        const bG = (0, wG.useRef)(GG);
        bG.current = GG, (0, wG.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [ww]: !0
          }, "");
          let GG = !1;
          const ZG = () => {
            GG = !0, bG.current()
          };
          return window.addEventListener("popstate", ZG), () => {
            var bG;
            window.removeEventListener("popstate", ZG), !GG && null !== (bG = window.history.state) && void 0 !== bG && bG[ww] && window.history.back()
          }
        }), [])
      }(QG);
      const dG = (0, wG.useRef)(QG);
      dG.current = QG, (0, wG.useEffect)((() => {
        function GG(GG) {
          "Escape" === GG.key && (GG.stopPropagation(), dG.current())
        }
        return window.addEventListener("keydown", GG, !0), () => {
          window.removeEventListener("keydown", GG, !0)
        }
      }), []);
      const JG = bw(bG, ".CrosshairFullScreenPanel"),
        [rG, zG] = (0, wG.useState)(!0),
        EG = rG && VG;
      (0, wG.useEffect)((() => {
        if (EG) return iG.e.set({
          crosshairGameView: !0
        }), () => {
          iG.e.set({
            crosshairGameView: !1
          })
        }
      }), [EG]);
      const [oG, XG] = (0, wG.useState)(!0);
      return (0, PZ.createPortal)((0, pG.jsxs)("div", {
        ref: hG,
        className: "CrosshairFullScreen",
        style: EG ? void 0 : TZ(SG),
        ...JG.handlers,
        children: [(0, pG.jsx)(NZ.d, {
          settings: bG,
          touch: ZG,
          inEditor: !0,
          ...JG.view
        }), (0, pG.jsxs)("div", {
          className: LG()("CrosshairFullScreenPanel", {
            Collapsed: !oG
          }),
          children: [(0, pG.jsxs)("div", {
            className: "CrosshairFullScreenBar",
            children: [(0, pG.jsx)(xZ, {
              backdrop: SG,
              onChange: GG => {
                zG(!1), UG(GG)
              },
              game: VG ? {
                selected: EG,
                onSelect: () => {
                  zG(!0)
                }
              } : void 0
            }), (0, pG.jsx)(YG.K, {
              className: "CrosshairPanelToggle",
              ariaLabel: KG(oG ? "crosshairSettings:hideEditor" : "crosshairSettings:showEditor"),
              onClick: () => {
                XG(!oG)
              },
              children: (0, pG.jsx)(kG.c, {
                name: oG ? "caret-up" : "pen"
              })
            }), (0, pG.jsx)(YG.d, {
              className: "CrosshairFullScreenDone",
              onClick: QG,
              padDefaultFocus: !0,
              children: KG("crosshairSettings:done")
            })]
          }), oG && (0, pG.jsxs)("div", {
            className: "CrosshairFullScreenFields",
            children: [(0, pG.jsx)(BZ, {
              settings: bG,
              touch: ZG,
              backdrop: SG,
              onChange: fG
            }), (0, pG.jsx)(jZ, {
              settings: bG,
              onChange: fG
            })]
          })]
        })]
      }), document.body)
    }
    var Lw = ZG(2657),
      yw = ZG(34461);

    function kw(GG) {
      let {
        settings: bG,
        onChange: ZG
      } = GG;
      const {
        t: SG
      } = (0, yG.w)(), UG = (0, yw.j)(bG), [VG, fG] = (0, Lw.j)(), [QG, KG] = (0, wG.useState)(!1), hG = (0, wG.useRef)(null), [dG, JG] = (0, Lw.j)(), [rG, zG] = (0, wG.useState)(!1);
      return (0, pG.jsxs)("div", {
        className: "SettingBox CrosshairShare",
        children: [(0, pG.jsxs)("div", {
          className: "CrosshairShareRow",
          children: [(0, pG.jsxs)(YG.K, {
            className: LG()("CrosshairCopy", {
              ActiveSecondaryButton: VG
            }),
            onClick: () => {
              (0, Lw.h)(UG, {
                useShareSheet: !1,
                onOutcome: GG => {
                  KG("failed" === GG), "copied" === GG && fG()
                }
              })
            },
            children: [(0, pG.jsx)(kG.c, {
              name: VG ? "check" : "copy"
            }), " ", SG(VG ? "general:copied" : "crosshairSettings:copy")]
          }), (0, pG.jsx)(oG.b, {
            className: "CrosshairPaste",
            domRef: hG,
            ariaLabel: SG("crosshairSettings:paste"),
            placeholderText: SG("crosshairSettings:paste"),
            onValueChange: GG => {
              const bG = (0, yw.g)(GG);
              zG(!bG && GG.trim().length >= yw.e), bG && (ZG(bG), hG.current.value = "", JG())
            }
          })]
        }), QG && (0, pG.jsx)("input", {
          className: "CrosshairCode",
          readOnly: !0,
          value: UG,
          "aria-label": SG("crosshairSettings:copy"),
          onFocus: GG => {
            GG.currentTarget.select()
          }
        }), (0, pG.jsxs)("div", {
          "aria-live": "polite",
          children: [rG && (0, pG.jsx)("div", {
            className: "CrosshairShareNote Error",
            children: SG("crosshairSettings:pasteInvalid")
          }), dG && !rG && (0, pG.jsx)("div", {
            className: "CrosshairShareNote",
            children: SG("crosshairSettings:applied")
          })]
        })]
      })
    }
    var Uw = ZG(34463);
    let Yw = "sky";

    function Vw(GG) {
      let {
        showing: bG
      } = GG;
      const {
        t: ZG
      } = (0, yG.w)(), {
        isTouchScreen: SG,
        gameState: LG,
        clientEscMenuOptions: UG
      } = (0, iG.o)(["isTouchScreen", "gameState", "clientEscMenuOptions"]), VG = (0, Uw.h)(), [fG, QG] = (0, wG.useState)(Yw), KG = GG => {
        Yw = GG, QG(GG)
      }, [hG, dG] = (0, wG.useState)(!1);
      return (0, wG.useEffect)((() => {
        bG || dG(!1)
      }), [bG]), (0, pG.jsxs)("div", {
        className: "SettingsMenuRightInner CrosshairCategory",
        children: [(0, pG.jsx)("div", {
          className: "CrosshairPreviewSticky",
          children: (0, pG.jsx)(Zw, {
            className: "CrosshairPreviewStage",
            settings: VG,
            touch: SG,
            backdrop: fG,
            label: ZG("crosshairSettings:preview"),
            children: (0, pG.jsxs)("div", {
              className: "CrosshairPreviewBar CrosshairStageControls",
              children: [(0, pG.jsx)(xZ, {
                backdrop: fG,
                onChange: KG
              }), (0, pG.jsxs)(YG.K, {
                className: "CrosshairFullScreenButton",
                onClick: () => {
                  dG(!0)
                },
                children: [(0, pG.jsx)(kG.c, {
                  name: "expand"
                }), " ", ZG("crosshairSettings:fullScreen")]
              })]
            })
          })
        }), (0, pG.jsx)("div", {
          className: "SettingBox",
          children: (0, pG.jsx)(BZ, {
            settings: VG,
            touch: SG,
            backdrop: fG,
            onChange: Uw.e
          })
        }), (0, pG.jsx)(kw, {
          settings: VG,
          onChange: Uw.e
        }), SG && (0, pG.jsx)(CZ.b, {
          note: (0, iZ.f)(SG, UG.touchActionButtons) ? ZG("crosshairSettings:touchNote") : void 0
        }), (0, pG.jsx)(jZ, {
          settings: VG,
          onChange: Uw.e
        }), hG && (0, pG.jsx)(Sw, {
          settings: VG,
          touch: SG,
          backdrop: fG,
          onBackdrop: KG,
          inGame: "inGame" === LG,
          onChange: Uw.e,
          onClose: () => {
            dG(!1)
          }
        })]
      })
    }
    var pw = ZG(8909),
      fw = ZG(1357),
      Qw = ZG(5012),
      Kw = ZG(34466),
      hw = ZG(4293),
      dw = ZG(1953),
      Jw = ZG(701);
    const rw = (0, wG.memo)((function() {
      const {
        clientEscMenuOptions: GG
      } = (0, iG.o)(["clientEscMenuOptions"]), {
        recording: bG,
        clipping: ZG,
        hasClipBuffer: SG
      } = (0, jb.f)("replayRecorder"), yG = (0, jb.c)("connectedGame", (GG => GG.replay)), kG = (0, hw.j)(), UG = !1 === (0, hG.i)("canRecordReplays");
      (0, wG.useEffect)((() => {
        rG.gameBridge.send("setRecorderPrefs", {
          clipping: GG.enableClipping,
          clipSeconds: GG.clipDurationSeconds
        })
      }), [GG.enableClipping, GG.clipDurationSeconds]);
      const VG = kG || yG,
        fG = !VG && !UG,
        QG = bG || fG,
        KG = fG,
        dG = KG && ZG && !bG;

      function JG() {
        QG && rG.gameBridge.send("toggleRecording", null)
      }
      return (0, pG.jsxs)("div", {
        className: "SettingsMenuRightInner ReplayViewerCategory",
        children: [(0, pG.jsxs)("div", {
          className: "SettingBox",
          children: [(0, pG.jsx)("div", {
            className: "ReplayViewerCategoryRecordingRow",
            children: bG ? (0, pG.jsxs)(pG.Fragment, {
              children: [(0, pG.jsxs)(YG.C, {
                className: "ReplayViewerCategoryButton",
                onClick: JG,
                disabled: !QG,
                children: [(0, pG.jsx)("span", {
                  children: "Stop Recording"
                }), (0, pG.jsx)(dw.e, {
                  noaAction: "recordGame"
                })]
              }), (0, pG.jsx)(Kw.d, {
                className: "ReplayViewerCategoryRecordingIndicator"
              })]
            }) : (0, pG.jsxs)(YG.d, {
              className: "ReplayViewerCategoryButton",
              onClick: JG,
              disabled: !QG,
              children: [(0, pG.jsx)("span", {
                children: "Start Recording"
              }), (0, pG.jsx)(dw.e, {
                noaAction: "recordGame"
              })]
            })
          }), UG && (0, pG.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Recording is turned off in this game."
          }), VG && !bG && (0, pG.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Close Replay Mode to start recording."
          })]
        }), (0, pG.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, pG.jsx)(uG.c, {
            label: "Enable clipping",
            checked: GG.enableClipping,
            disabled: !KG,
            onClick: function(GG) {
              KG && iG.e.setClientEscMenuOptions({
                enableClipping: GG
              })
            },
            className: LG()({
              SettingBoxDisabled: !KG
            })
          }), (0, pG.jsx)(uG.f, {
            name: "Clip duration (seconds)",
            min: Jw.j,
            max: Jw.f,
            step: Jw.c,
            initValue: GG.clipDurationSeconds,
            onChange: function(GG) {
              iG.e.setClientEscMenuOptions({
                clipDurationSeconds: GG
              })
            },
            circleInfoText: "Longer clip durations use more memory and may affect performance.",
            disabled: !KG || !GG.enableClipping
          })]
        }), (0, pG.jsxs)("div", {
          className: "SettingBox",
          children: [(0, pG.jsxs)(YG.d, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              dG && rG.gameBridge.send("saveClip", null)
            },
            disabled: !dG,
            children: [(0, pG.jsx)("span", {
              children: "Record clip"
            }), (0, pG.jsx)(dw.e, {
              noaAction: "recordClip"
            })]
          }), GG.enableClipping && !SG && KG && !bG && (0, pG.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clip buffer is filling \u2014 play for a moment, then save."
          }), bG && (0, pG.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clipping pauses while a full recording is active."
          })]
        }), (0, pG.jsxs)("div", {
          className: "SettingBox",
          children: [(0, pG.jsxs)(YG.d, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              (0, hw.g)(!0), iG.e.set({
                openEverythingMenuName: null
              })
            },
            disabled: kG,
            children: [(0, pG.jsx)("span", {
              children: "Open Replay Mode"
            }), (0, pG.jsx)(dw.e, {
              noaAction: "replayViewerOpen"
            })]
          }), kG && (0, pG.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Replay Mode is already open."
          })]
        }), (0, pG.jsxs)("div", {
          className: "SettingBox",
          children: [(0, pG.jsx)("div", {
            className: "ReplayViewerCategoryTutorialTitle",
            children: "How to use Replay Mode"
          }), (0, pG.jsx)("iframe", {
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
    var zw = ZG(1873);
    const Ew = {
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
        icon: () => (0, pG.jsx)("svg", {
          className: "svg-inline--fa",
          viewBox: "0 0 640 512",
          "aria-hidden": "true",
          children: (0, pG.jsx)("path", {
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
      OQ: {
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

    function ow() {
      return Promise.all([ZG.e(78), ZG.e(136), ZG.e(135), ZG.e(131)]).then((() => ZG(41462))).then((GG => ({
        default: GG.ShaderPackCategory
      })), (GG => (console.error("Failed to load the shader pack settings", GG), {
        default: Xw
      })))
    }

    function Xw() {
      const {
        t: GG
      } = (0, yG.w)();
      return (0, pG.jsx)("div", {
        className: "SettingsMenuRightInner",
        children: GG("shaderPack:tabLoadFailed")
      })
    }
    var uw = ZG(1343);
    const iw = (0, wG.lazy)((() => ZG.e(278).then((() => ZG(41449))).then((GG => ({
        default: GG.BloxdInformation
      }))))),
      Cw = (0, wG.lazy)(ow);

    function Ww(GG) {
      return GG ? "general" : "account"
    }
    const mw = new Map,
      Iw = (0, wG.memo)((function(GG) {
        let {
          show: bG,
          setBeforeResumeCallback: ZG
        } = GG;
        (0, dG.b)();
        const {
          gameState: SG,
          openSettingsCategory: LG
        } = (0, iG.o)(["gameState", "openSettingsCategory"]), {
          userContext: UG
        } = (0, KG.e)(), {
          t: VG
        } = (0, yG.w)(), oG = (0, QG.d)(), XG = (0, hG.i)("minChunkAddDist"), uG = "inGame" === SG, [CG, IG] = (0, wG.useState)(Ww(uG)), [FG, vG] = (0, wG.useState)(null), [aG, cG] = (0, wG.useState)([]), lG = (0, wG.useRef)(function() {
          const GG = new Date,
            bG = 6 * (GG.getMonth() + GG.getDate()) % Jb.F.length;
          return [...Jb.F, ...Jb.F].slice(bG, bG + 6)
        }()), jG = (0, wG.useRef)(null), PG = (0, eb.j)(fw.f, (0, fw.b)()), MG = Object.keys(Ew).filter((GG => {
          switch (GG) {
            case "replayViewer":
              return uG;
            case "developerTools":
              return UG.playerHasRank("developer") || !1;
            case "texturePack":
              return JG.featureFlags.settings.canChangeTexturePack;
            case "OQ":
              return JG.featureFlags.settings.canUseShaderPacks;
            case "notifications":
              return JG.featureFlags.useSocialFeatures || null !== UG.dailyDrop;
            case "alternativeDomains":
              return "crazygames" !== mG.siteUsed;
            case "controller":
              return JG.featureFlags.useControllerSupport && (PG || "controller" === CG);
            default:
              return !0
          }
        }));
        (0, eb.g)("toggleFullCoordinateOverlay", (() => {
          const GG = KZ("showCoordinates") && KZ("showChunkCoordinates") && KZ("showFPS");
          hZ("showCoordinates", !GG), hZ("showChunkCoordinates", !GG), hZ("showFPS", !GG), oG()
        })), (0, eb.g)("updatedChunkLoadDist", (() => {
          oG()
        })), (0, wG.useEffect)((() => {
          if (vG(null), null === iG.e.get("openSettingsCategory")) {
            const GG = (0, uw.k)() ? mw.get(uG) : void 0;
            IG(GG && MG.includes(GG) ? GG : Ww(uG))
          }
        }), [bG]), (0, wG.useEffect)((() => {
          null !== LG && (IG(LG), mw.set(uG, LG), iG.e.set({
            openSettingsCategory: null
          }))
        }), [LG, uG]), (0, wG.useLayoutEffect)((() => {
          jG.current && (jG.current.scrollTop = 0)
        }), [CG, bG]), (0, wG.useEffect)((() => {
          "updateLog" === CG && (0, EG.e)().then(cG)
        }), [CG]), (0, wG.useEffect)((() => {
          if ((0, kZ.L)(XG)) return;
          const [GG, bG] = (0, XZ.f)(), [ZG, wG] = (0, bZ.i)(XG), SG = (0, zw.d)(XG[0], GG, ZG), LG = (0, zw.d)(XG[1], bG, wG);
          rG.gameBridge.send("setChunkAddDistance", {
            horizontal: SG,
            vertical: LG
          })
        }), [XG]);
        const AG = (0, wG.useCallback)((async () => {
          FG && (await FG(), vG(null))
        }), [FG]);

        function sG() {
          iG.e.set({
            openEverythingMenuName: null
          })
        }
        return (0, wG.useEffect)((() => {
          ZG((() => AG))
        }), [AG, ZG]), (0, pG.jsxs)("div", {
          className: "SettingsMenu Menu",
          style: bG ? {} : {
            display: "none"
          },
          children: [(0, pG.jsx)("div", {
            className: "MenuSideBar",
            children: (0, pG.jsx)("div", {
              className: "MenuSideBarBody",
              children: (0, pG.jsx)(fG, {
                items: MG.map((GG => {
                  const bG = Ew[GG].icon;
                  return {
                    id: GG,
                    faIcon: "string" === typeof bG ? bG : void 0,
                    iconElement: "string" === typeof bG ? void 0 : (0, pG.jsx)(bG, {}),
                    title: VG(Ew[GG].displayName),
                    redDot: !1
                  }
                })),
                selectedItemId: CG,
                onClick: GG => {
                  !async function(GG) {
                    await AG(), IG(GG), mw.set(uG, GG)
                  }(GG)
                }
              })
            })
          }), (0, pG.jsxs)("div", {
            ref: jG,
            className: "MenuBody SettingsMenuRight",
            children: ["account" === CG && (0, pG.jsx)(Ib, {
              showing: bG,
              inGame: uG
            }), "general" === CG && (0, pG.jsx)(qb, {
              inGame: uG
            }), "audio" === CG && (0, pG.jsx)(nb, {}), "notifications" === CG && (0, pG.jsx)(GZ, {}), "graphics" === CG && (0, pG.jsx)(oZ, {
              minChunkAddDist: null !== XG && void 0 !== XG ? XG : [2, 2],
              getValue: KZ,
              onChange: hZ,
              setApplySettingsCallback: vG
            }), "controls" === CG && (0, pG.jsx)(uZ.e, {}), "crosshair" === CG && (0, pG.jsx)(Vw, {
              showing: bG
            }), "controller" === CG && JG.featureFlags.useControllerSupport && (0, pG.jsx)(pw.c, {}), JG.featureFlags.settings.canChangeTexturePack && "texturePack" === CG && (0, pG.jsx)(Qw.d, {
              setApplySettingsCallback: vG
            }), JG.featureFlags.settings.canUseShaderPacks && "OQ" === CG && (0, pG.jsx)(wG.Suspense, {
              fallback: null,
              children: (0, pG.jsx)(Cw, {
                setApplySettingsCallback: vG
              })
            }), "updateLog" === CG && (0, pG.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, pG.jsx)("div", {
                className: "UpdateLogsContainer",
                children: aG.map(((GG, bG) => (0, pG.jsx)(zG.d, {
                  updateLog: GG,
                  index: bG,
                  close: sG
                }, bG)))
              })
            }), "information" === CG && (0, pG.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, pG.jsx)(wG.Suspense, {
                fallback: null,
                children: (0, pG.jsx)(iw, {})
              })
            }), "alternativeDomains" === CG && (0, pG.jsxs)("div", {
              className: "SettingsMenuRightInner",
              children: [(0, pG.jsx)("div", {
                className: "AlternativeDomainsTitle",
                children: VG("settingsMenu:unblockedDomainsDescription")
              }), (0, pG.jsx)("div", {
                className: "AlternativeDomainsList",
                children: lG.current.map((GG => (0, pG.jsxs)(YG.d, {
                  onClick: () => {
                    window.open(`https://${GG}`)
                  },
                  children: [(0, pG.jsx)(kG.c, {
                    name: "arrow-up-right-from-square"
                  }), " ", GG]
                }, GG)))
              })]
            }), "replayViewer" === CG && (0, pG.jsx)(rw, {}), "developerTools" === CG && (0, pG.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, pG.jsx)(WG, {
                setApplySettingsCallback: vG
              })
            }), null !== FG && (0, pG.jsx)("div", {
              className: "SettingsMenuRightFooter",
              children: (0, pG.jsx)(YG.d, {
                className: "SettingsMenuRightFooterButton",
                onClick: AG,
                children: VG("general:apply")
              })
            })]
          })]
        })
      }));
    var Fw = ZG(2602);
    const vw = ["characters", "emote", "skin", "hat", "head", "eyebrows", "eyes", "back", "body", "legs", "shoes", "profileEffect", "cape", "nameColour"],
      aw = (0, wG.lazy)((() => Promise.resolve().then((() => ZG(4678))).then((GG => {
        GG.needGameClientAfterPaint();
        const bG = GG.matchmakingLibrariesPromise.then((GG => (0, Fw.e)(GG.loadCharacterCustomisationUI(), (GG => GG.CharacterCustomisationUI))));
        return Promise.all([GG.ensureGameSetup(), bG]).then((GG => {
          let [, bG] = GG;
          return bG
        }))
      })))),
      lw = "openCustomisationTab";

    function jw(GG) {
      var bG, ZG, SG;
      let {
        show: LG
      } = GG;
      const {
        userContext: yG
      } = (0, KG.e)(), kG = (0, qG.usePurchasesAllowed)(), UG = (0, wG.useRef)(null);
      var YG, VG;
      yG !== IG.NULL_USER_CONTEXT && (null === (bG = UG.current) || void 0 === bG ? void 0 : bG.whamm) !== yG.whamm && (UG.current = {
        whamm: yG.whamm,
        mountKey: (null !== (YG = null === (VG = UG.current) || void 0 === VG ? void 0 : VG.mountKey) && void 0 !== YG ? YG : -1) + 1
      });
      const [QG, hG] = (0, wG.useState)("characters");
      if ((0, eb.g)(lw, hG), !LG) return null;
      const dG = vw.filter((GG => "cape" !== GG && "nameColour" !== GG || yG.getPlayerRanks().includes("super") || kG)).map((GG => ({
        id: GG,
        faIcon: Jb.P[GG],
        title: Jb.R[GG],
        redDot: !1
      })));
      return (0, pG.jsxs)("div", {
        className: "Menu CharCustomisation",
        children: [(0, pG.jsx)("div", {
          className: "MenuSideBar",
          children: (0, pG.jsx)(fG, {
            items: dG,
            selectedItemId: QG,
            onClick: GG => {
              hG(GG)
            }
          })
        }), (0, pG.jsx)("div", {
          className: "MenuBody",
          children: (0, pG.jsx)(wG.Suspense, {
            fallback: (0, pG.jsx)("div", {
              className: "CharacterCustomisationLoading",
              children: (0, pG.jsx)(XG.b, {})
            }),
            children: (0, pG.jsx)(aw, {
              selectedTab: QG
            }, null !== (ZG = null === (SG = UG.current) || void 0 === SG ? void 0 : SG.mountKey) && void 0 !== ZG ? ZG : 0)
          })
        })]
      })
    }
    var Pw = ZG(1405),
      Mw = ZG(1409),
      Aw = ZG(34472),
      sw = ZG(4549),
      qw = ZG(3404),
      nw = ZG(3449),
      gw = ZG(34499),
      ew = ZG(8830),
      Rw = ZG(34481),
      Tw = ZG(34489),
      Hw = ZG(1889),
      tw = ZG(1876),
      Dw = ZG(4933),
      Nw = ZG(1222),
      Ow = ZG(1177),
      xw = ZG(1606),
      Bw = ZG(8882),
      GS = ZG(2421),
      bS = ZG(2428);

    function ZS(GG) {
      return GG ? Object.keys(GG).sort(((bG, ZG) => {
        var wG, SG, LG, yG;
        const kG = (null !== (wG = null === (SG = GG[ZG]) || void 0 === SG ? void 0 : SG.sortPriority) && void 0 !== wG ? wG : 0) - (null !== (LG = null === (yG = GG[bG]) || void 0 === yG ? void 0 : yG.sortPriority) && void 0 !== LG ? LG : 0);
        return 0 !== kG ? kG : bG.localeCompare(ZG)
      })) : []
    }
    const wS = [{
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

    function SS(GG) {
      for (const {
          threshold: bG,
          suffix: ZG
        }
        of wS)
        if (GG >= bG) {
          const wG = GG / bG;
          return wG >= 100 ? `${Math.floor(wG)}${ZG}` : wG >= 10 ? `${wG.toFixed(1).replace(/\.0$/,"")}${ZG}` : `${wG.toFixed(2).replace(/\.?0+$/,"")}${ZG}`
        } return String(GG)
    }
    var LS = ZG(5039);
    const yS = {
        normal: "0.8em",
        big: "1em"
      },
      kS = (0, wG.memo)((function(GG) {
        let {
          item: bG,
          amount: ZG = 0,
          size: wG = "normal",
          tier: SG = null
        } = GG;
        return (0, pG.jsx)("div", {
          className: LG()("SmpSlot", `SmpSlot-${wG}`),
          children: bG && (0, pG.jsx)(Hw.b, {
            itemName: bG,
            amount: ZG > 1 ? ZG : 0,
            amountFontSize: yS[wG],
            enchantmentTier: SG
          })
        })
      }));

    function US(GG) {
      let {
        amount: bG,
        exact: ZG = !1,
        className: wG
      } = GG;
      return (0, pG.jsxs)("span", {
        className: LG()("SmpGold", wG),
        children: [(0, pG.jsx)("span", {
          className: "SmpCoin",
          children: (0, pG.jsx)(Hw.b, {
            itemName: "Gold Coin",
            amount: 0
          })
        }), ZG ? bG.toLocaleString("en-US") : SS(bG)]
      })
    }

    function YS(GG) {
      let {
        count: bG = 5,
        grid: ZG = !1
      } = GG;
      return (0, pG.jsx)("div", {
        className: ZG ? "SmpCardGrid" : "SmpList",
        "aria-hidden": "true",
        children: Array.from({
          length: bG
        }, ((GG, bG) => (0, pG.jsxs)("div", {
          className: LG()(ZG ? "SmpListingCard" : "SmpRow", "SmpSkeleton"),
          children: [(0, pG.jsx)("div", {
            className: LG()("SmpSlot", ZG ? "SmpSlot-big" : "SmpSlot-normal")
          }), (0, pG.jsxs)("div", {
            className: "SmpRowText",
            children: [(0, pG.jsx)("b", {}), (0, pG.jsx)("small", {})]
          }), (0, pG.jsx)("div", {
            className: "SmpSkeletonButton"
          })]
        }, bG)))
      })
    }

    function VS(GG) {
      let {
        title: bG,
        children: ZG
      } = GG;
      return (0, pG.jsxs)("div", {
        className: "SmpEmpty",
        children: [(0, pG.jsx)("b", {
          children: bG
        }), ZG && (0, pG.jsx)("small", {
          children: ZG
        })]
      })
    }

    function pS(GG) {
      let {
        entry: bG
      } = GG;
      return (0, pG.jsx)(VS, {
        title: (0, pG.jsx)(tw.c, {
          text: bG.item.customTitle
        }),
        children: (0, pG.jsx)(tw.c, {
          text: bG.item.description
        })
      })
    }

    function fS(GG) {
      return (0, pG.jsx)(LS.c, {
        ...GG,
        className: LG()("SmpChoice", GG.className),
        reselectable: !0
      })
    }

    function QS() {
      return (0, pG.jsx)("span", {
        className: "SmpLoader",
        children: (0, pG.jsx)(XG.b, {})
      })
    }

    function KS(GG) {
      let {
        value: bG,
        onChange: ZG,
        min: SG = 1,
        max: LG,
        step: yG = 1,
        label: kG
      } = GG;
      const UG = (0, wG.useRef)(null),
        YG = (0, wG.useRef)(bG);
      YG.current = bG;
      const [VG, fG] = (0, wG.useState)(null), QG = GG => Math.max(SG, Math.min(LG, Math.floor(GG))), KG = GG => {
        const bG = YG.current,
          wG = "function" === typeof yG ? yG(bG, GG) : yG,
          SG = QG(bG + wG * GG);
        YG.current = SG, ZG(SG)
      };
      (0, wG.useEffect)((() => {
        if (null === VG) return;
        let GG;
        const bG = () => {
            fG(null)
          },
          ZG = setTimeout((() => {
            GG = setInterval((() => {
              KG(VG);
              const GG = YG.current;
              (VG > 0 ? GG >= LG : GG <= SG) && bG()
            }), 70)
          }), 380);
        return window.addEventListener("pointerup", bG), window.addEventListener("pointercancel", bG), window.addEventListener("blur", bG), () => {
          clearTimeout(ZG), clearInterval(GG), window.removeEventListener("pointerup", bG), window.removeEventListener("pointercancel", bG), window.removeEventListener("blur", bG)
        }
      }), [VG]), (0, wG.useEffect)((() => {
        const GG = UG.current;
        GG && document.activeElement !== GG && GG.value !== String(bG) && (GG.value = String(bG))
      }), [bG]), (0, wG.useEffect)((() => {
        const GG = UG.current;
        if (!GG) return;
        const bG = () => {
          GG.value = String(YG.current)
        };
        return GG.addEventListener("blur", bG), () => {
          GG.removeEventListener("blur", bG)
        }
      }), []);
      const hG = GG => (0, pG.jsx)("button", {
        type: "button",
        className: "SmpStepButton",
        "aria-label": `${GG>0?"More":"Less"} ${kG}`,
        disabled: GG > 0 ? bG >= LG : bG <= SG,
        onPointerDown: bG => {
          0 === bG.button && (KG(GG), fG(GG))
        },
        onKeyDown: bG => {
          "Enter" !== bG.key && " " !== bG.key || KG(GG)
        },
        onContextMenu: GG => {
          GG.preventDefault()
        },
        children: GG > 0 ? "+" : "\u2212"
      });
      return (0, pG.jsxs)("div", {
        className: "SmpStepper",
        children: [hG(-1), (0, pG.jsx)(oG.b, {
          className: "SmpStepperInput",
          domRef: UG,
          defaultValue: String(bG),
          ariaLabel: kG,
          type: "text",
          blurOnEnter: !0,
          onValueChange: GG => {
            const bG = GG.replace(/[^\d]/g, "");
            UG.current && bG !== GG && (UG.current.value = bG), "" !== bG && ZG(QG(Number(bG)))
          }
        }), hG(1)]
      })
    }

    function hS(GG) {
      return Math.max(1, 10 ** Math.max(0, Math.floor(Math.log10(Math.max(1, GG))) - 1))
    }
    var dS = ZG(34492),
      JS = ZG(1198);
    const rS = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"];
    JS.z, AG.Sc.length;
    new Map;
    var zS = ZG(3267);

    function ES(GG, bG) {
      var ZG;
      return bG && (null === (ZG = GG[bG]) || void 0 === ZG ? void 0 : ZG.smp) || null
    }

    function oS(GG, bG) {
      const ZG = [];
      for (const SG of ZS(GG)) {
        var wG;
        const LG = GG[SG];
        (null === (wG = LG.smp) || void 0 === wG ? void 0 : wG.kind) === bG && ZG.push({
          key: SG,
          item: LG,
          meta: LG.smp
        })
      }
      return ZG
    }

    function XS(GG, bG) {
      var ZG;
      return null !== (ZG = oS(GG, bG)[0]) && void 0 !== ZG ? ZG : null
    }
    const uS = "50% 0% 50% 0%",
      iS = [{
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

    function CS(GG) {
      const bG = GG - (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now());
      for (const {
          divisor: ZG,
          suffix: wG
        }
        of iS)
        if (bG >= ZG) return `${Math.floor(bG/ZG)}${wG}`;
      return "<1s"
    }

    function WS(GG) {
      const bG = GG.map(ew.h),
        ZG = [];
      return bG.forEach(((GG, wG) => {
        const SG = function(GG) {
            const bG = GG.match(/\d+/);
            return bG ? Number(bG[0]) : 0
          }(GG),
          LG = wG === bG.length - 1;
        (LG || 1 === SG || 10 === SG || 100 === SG) && ZG.push({
          label: GG,
          quantity: SG,
          isAll: LG
        })
      })), ZG
    }
    let mS = null;

    function IS(GG, bG) {
      const ZG = bG.trim().toLowerCase();
      if (!ZG) return [];
      const wG = GG => {
          if (GG === ZG) return 0;
          if (GG.startsWith(ZG)) return 1;
          const bG = GG.indexOf(ZG);
          return -1 === bG ? -1 : 2 + bG
        },
        SG = [];
      for (const kG of GG) {
        const GG = [wG(kG.lowerLabel), wG(kG.lowerName)].filter((GG => -1 !== GG));
        GG.length && SG.push({
          item: kG,
          rank: Math.min(...GG)
        })
      }
      if (SG.length > 0) return SG.sort(((GG, bG) => GG.rank - bG.rank)).map((GG => GG.item));
      const LG = [...ZG],
        yG = GG => {
          let bG = 0;
          for (const ZG of LG) {
            if (bG = GG.indexOf(ZG, bG), -1 === bG) return !1;
            bG++
          }
          return !0
        };
      return GG.filter((GG => yG(GG.lowerLabel) || yG(GG.lowerName)))
    }

    function FS(GG, bG) {
      var ZG;
      return null !== (ZG = null === GG || void 0 === GG ? void 0 : GG[bG]) && void 0 !== ZG ? ZG : bG
    }

    function vS(GG, bG) {
      const ZG = GG.userInput;
      return void 0 !== bG && "dropdown" === (null === ZG || void 0 === ZG ? void 0 : ZG.type) && ZG.dropdownOptions.map(ew.h).includes(bG) ? bG : function(GG) {
        const bG = GG.userInput;
        if ("dropdown" !== (null === bG || void 0 === bG ? void 0 : bG.type) || 0 === bG.dropdownOptions.length) return null;
        const ZG = bG.dropdownOptions.map(ew.h);
        return bG.initialValue && ZG.includes(bG.initialValue) ? bG.initialValue : ZG[ZG.length - 1]
      }(GG)
    }

    function aS(GG) {
      return void 0 === GG ? "" : JSON.stringify(GG)
    }
    const cS = (0, wG.createContext)(null);

    function lS() {
      return (0, wG.useContext)(cS)
    }
    var jS = ZG(2684);
    const PS = (0, wG.memo)((function(GG) {
        let {
          name: bG,
          label: ZG,
          onPick: wG
        } = GG;
        return (0, pG.jsxs)("button", {
          type: "button",
          className: "SmpCatalogueTile",
          title: ZG,
          onClick: () => {
            wG(bG)
          },
          children: [(0, pG.jsx)(kS, {
            item: bG,
            size: "big"
          }), (0, pG.jsx)("span", {
            children: ZG
          })]
        })
      })),
      MS = (0, wG.memo)((function(GG) {
        let {
          items: bG,
          query: ZG,
          onPick: SG
        } = GG;
        const {
          t: LG
        } = (0, yG.w)(), [kG, UG] = (0, wG.useState)(new Set), YG = (0, wG.useMemo)((() => function(GG) {
          const bG = new Map;
          for (const ZG of GG) {
            let GG = bG.get(ZG.category);
            GG || (GG = [], bG.set(ZG.category, GG)), GG.push(ZG)
          }
          return [...rS, "other"].filter((GG => bG.has(GG))).map((GG => ({
            category: GG,
            items: bG.get(GG)
          })))
        }(bG)), [bG]), VG = (0, wG.useMemo)((() => IS(bG, ZG).slice(0, 60)), [bG, ZG]);
        return ZG.trim() ? 0 === VG.length ? (0, pG.jsx)(VS, {
          title: LG("smpShop:noItemsFound", {
            query: ZG.trim()
          }),
          children: LG("smpShop:tryShorterName")
        }) : (0, pG.jsx)(jS.d, {
          lazyLoadedClassName: "SmpCatalogueGrid",
          observerRoot: "SmpBody",
          rootMargin: uS,
          observerUpdateDeps: [ZG],
          children: VG.map((GG => (0, pG.jsx)(PS, {
            name: GG.name,
            label: GG.label,
            onPick: SG
          }, GG.name)))
        }) : (0, pG.jsx)(pG.Fragment, {
          children: YG.map((GG => {
            let {
              category: bG,
              items: ZG
            } = GG;
            const wG = kG.has(bG) || ZG.length <= 48,
              yG = wG ? ZG : ZG.slice(0, 48);
            return (0, pG.jsxs)("section", {
              className: "SmpCatalogueSection",
              children: [(0, pG.jsxs)("h4", {
                children: [LG("other" === bG ? "smpShop:otherItems" : `creativeInventory:${bG}`), !wG && (0, pG.jsx)("button", {
                  type: "button",
                  className: "SmpLink",
                  onClick: () => {
                    UG(new Set([...kG, bG]))
                  },
                  children: LG("smpShop:showAll", {
                    count: ZG.length
                  })
                })]
              }), (0, pG.jsx)(jS.d, {
                lazyLoadedClassName: "SmpCatalogueGrid",
                observerRoot: "SmpBody",
                rootMargin: uS,
                observerUpdateDeps: [wG],
                children: yG.map((GG => (0, pG.jsx)(PS, {
                  name: GG.name,
                  label: GG.label,
                  onPick: SG
                }, GG.name)))
              })]
            }, bG)
          }))
        })
      }));

    function AS(GG, bG) {
      const {
        searched: ZG,
        shown: SG,
        searchFor: LG,
        loading: yG
      } = function(GG, bG) {
        var ZG;
        const SG = lS(),
          [LG, yG] = (0, wG.useState)(void 0),
          kG = (0, wG.useRef)(void 0),
          UG = (0, wG.useRef)(0),
          YG = (0, wG.useRef)(void 0),
          VG = null !== (ZG = null === GG || void 0 === GG ? void 0 : GG.meta.item) && void 0 !== ZG ? ZG : null,
          pG = !!GG && SG.isPending(GG.key);
        (0, wG.useEffect)((() => {
          if (!GG || pG || !bG || void 0 === LG || LG === VG) return;
          const ZG = LG === kG.current && SG.gaveUpAt(GG.key) > UG.current && YG.current !== LG;
          (LG !== kG.current || ZG) && SG.act(GG.key, null !== LG && void 0 !== LG ? LG : "*", ZG) && (ZG && (YG.current = LG), kG.current = LG, UG.current = Date.now())
        }), [GG, pG, bG, LG, VG, SG]);
        const fG = (0, wG.useCallback)((GG => {
            kG.current = void 0, YG.current = void 0, yG(GG)
          }), []),
          QG = void 0 !== LG && LG !== VG && (pG || kG.current !== LG);
        return {
          searched: VG,
          shown: QG ? LG : VG,
          searchFor: fG,
          loading: QG || pG || null !== VG && !bG
        }
      }(GG, bG), kG = (0, wG.useMemo)((() => function() {
        var GG;
        let bG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          ZG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          wG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const SG = `${(0,zS.j)()}\x1f${bG.join("\x1e")}\x1f${ZG.join("\x1e")}\x1f${JSON.stringify(wG)}`;
        if ((null === (GG = mS) || void 0 === GG ? void 0 : GG.key) === SG) return mS.items;
        const LG = new Set(ZG),
          yG = new Set,
          kG = [],
          UG = (GG, bG) => {
            var ZG;
            if (!GG || yG.has(GG) || LG.has(GG)) return;
            yG.add(GG);
            const SG = null !== (ZG = wG[GG]) && void 0 !== ZG ? ZG : GG;
            kG.push({
              name: GG,
              label: SG,
              lowerLabel: SG.toLowerCase(),
              lowerName: GG.toLowerCase(),
              category: bG
            })
          };
        for (const VG of (0, dS.creativeItemIds)()) {
          var YG;
          (0, dS.itemIsDisabled)(VG, !0, !0, !1) || (0, dS.showOnlyInCreativeSearch)(VG) || UG((0, zS.f)(VG), null !== (YG = (0, dS.creativeCategoryOf)(VG)) && void 0 !== YG ? YG : "other")
        }
        for (const VG of bG) UG(VG, "other");
        return mS = {
          key: SG,
          items: kG
        }, kG
      }(null === GG || void 0 === GG ? void 0 : GG.meta.extra, null === GG || void 0 === GG ? void 0 : GG.meta.excluded, null === GG || void 0 === GG ? void 0 : GG.meta.names)), [null === GG || void 0 === GG ? void 0 : GG.meta.extra, null === GG || void 0 === GG ? void 0 : GG.meta.excluded, null === GG || void 0 === GG ? void 0 : GG.meta.names]), [UG, YG] = (0, wG.useState)(""), [VG, pG] = (0, wG.useState)(0), [fG, QG] = (0, wG.useState)("recent"), KG = (0, wG.useCallback)((GG => {
        YG(""), pG((GG => GG + 1)), LG(GG)
      }), [LG]), hG = "browse" === fG || "" !== UG.trim();
      return {
        searched: ZG,
        shown: SG,
        searchFor: LG,
        loading: yG,
        catalogue: kG,
        names: null === GG || void 0 === GG ? void 0 : GG.meta.names,
        query: UG,
        setQuery: YG,
        searchBoxKey: VG,
        pickItem: KG,
        setView: QG,
        browsing: hG
      }
    }

    function sS(GG) {
      let {
        browser: bG,
        children: ZG
      } = GG;
      const {
        t: wG
      } = (0, yG.w)(), SG = lS();
      return (0, pG.jsxs)("div", {
        className: "SmpTopBar",
        children: [(0, pG.jsx)("div", {
          className: "SmpSearch",
          children: (0, pG.jsx)(oG.b, {
            className: "SmpSearchInput",
            placeholderText: wG("smpShop:searchPlaceholder"),
            defaultValue: bG.query,
            onValueChange: GG => {
              bG.setQuery(GG), bG.searched && GG.trim() && bG.searchFor(null)
            },
            blurOnEnter: !0,
            onEnter: () => {
              const GG = IS(bG.catalogue, bG.query)[0];
              GG ? bG.pickItem(GG.name) : bG.query.trim() && SG.notify(wG("smpShop:noItemsFound", {
                query: bG.query.trim()
              }))
            }
          }, bG.searchBoxKey)
        }), ZG]
      })
    }

    function qS(GG) {
      let {
        browser: bG,
        recentLabel: ZG,
        children: wG
      } = GG;
      const {
        t: SG
      } = (0, yG.w)();
      return (0, pG.jsxs)("div", {
        className: "SmpViewBar",
        children: [(0, pG.jsx)(fS, {
          options: [{
            value: "recent",
            label: ZG
          }, {
            value: "browse",
            label: SG("smpShop:browseItems")
          }],
          value: bG.browsing ? "browse" : "recent",
          onChange: bG.setView,
          ariaLabel: SG("smpShop:show")
        }), !bG.browsing && wG]
      })
    }

    function nS(GG) {
      let {
        item: bG,
        names: ZG,
        summary: wG,
        onBack: SG,
        children: LG
      } = GG;
      const {
        t: kG
      } = (0, yG.w)();
      return (0, pG.jsxs)("div", {
        className: "SmpItemHeader",
        children: [(0, pG.jsx)(YG.b, {
          className: "SmpBackButton",
          onClick: SG,
          children: kG("general:back")
        }), (0, pG.jsx)(kS, {
          item: bG,
          size: "big"
        }), (0, pG.jsxs)("div", {
          className: "SmpItemHeaderText",
          children: [(0, pG.jsx)("b", {
            children: FS(ZG, bG)
          }), wG && (0, pG.jsx)("small", {
            children: wG
          })]
        }), LG]
      })
    }

    function gS(GG) {
      let {
        browser: bG,
        className: ZG,
        action: wG,
        above: SG,
        list: yG,
        summary: kG,
        recentLabel: UG,
        listControls: YG,
        onBack: VG
      } = GG;
      return (0, pG.jsxs)("div", {
        className: LG()("SmpScreen", ZG),
        children: [(0, pG.jsx)(sS, {
          browser: bG,
          children: wG
        }), bG.shown && (0, pG.jsx)(nS, {
          item: bG.shown,
          names: bG.names,
          summary: !bG.loading && kG,
          onBack: () => {
            null === VG || void 0 === VG || VG(), bG.searchFor(null)
          },
          children: YG
        }), SG, bG.shown ? yG : (0, pG.jsxs)(pG.Fragment, {
          children: [(0, pG.jsx)(qS, {
            browser: bG,
            recentLabel: UG,
            children: YG
          }), bG.browsing ? (0, pG.jsx)(MS, {
            items: bG.catalogue,
            query: bG.query,
            onPick: bG.pickItem
          }) : yG]
        })]
      })
    }

    function eS(GG, bG) {
      const ZG = GG.map((GG => {
        let {
          meta: bG
        } = GG;
        return bG.pricePerItem
      }));
      return "min" === bG ? Math.min(...ZG) : Math.max(...ZG)
    }
    var RS = ZG(6580);
    const TS = (0, wG.memo)((function(GG) {
      var bG;
      const {
        t: ZG
      } = (0, yG.w)(), wG = null === GG.seller, SG = GG.quantity * GG.pricePerItem;
      return (0, pG.jsxs)("div", {
        className: GG.grid ? "SmpListingCard" : "SmpRow SmpListingRow",
        children: [(0, pG.jsx)(kS, {
          item: GG.item,
          amount: GG.quantity,
          size: GG.grid ? "big" : "normal",
          tier: GG.tier
        }), (0, pG.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, pG.jsx)("b", {
            children: (0, pG.jsx)(tw.c, {
              text: null !== (bG = GG.title) && void 0 !== bG ? bG : `${GG.quantity}x ${GG.item}`
            })
          }), (0, pG.jsxs)("small", {
            className: "SmpListingFacts",
            children: [(0, pG.jsx)("span", {
              children: wG ? ZG("smpShop:you") : (0, pG.jsx)(tw.c, {
                text: [{
                  entityName: GG.seller
                }]
              })
            }), (0, pG.jsx)("span", {
              children: ZG("smpShop:timeLeft", {
                time: CS(GG.expiresAt)
              })
            })]
          })]
        }), (0, pG.jsxs)("div", {
          className: "SmpRowPrice",
          children: [(0, pG.jsx)(US, {
            amount: GG.pricePerItem
          }), (0, pG.jsx)("small", {
            children: ZG("smpShop:each")
          })]
        }), (0, pG.jsx)(YG.d, {
          className: "SmpBuyButton",
          disabled: wG || !GG.canAfford && !GG.busy,
          loading: GG.busy,
          onClick: () => {
            GG.onBuy(GG.itemKey)
          },
          children: wG ? ZG("smpShop:yours") : (0, pG.jsx)(US, {
            amount: SG
          })
        })]
      })
    }));

    function HS(GG) {
      let {
        view: bG,
        onChange: ZG
      } = GG;
      const {
        t: wG
      } = (0, yG.w)();
      return (0, pG.jsx)(LS.c, {
        className: "SmpChoice SmpViewToggle",
        ariaLabel: wG("smpShop:layout"),
        options: [{
          value: "list",
          label: (0, pG.jsx)(kG.c, {
            name: "list"
          }),
          ariaLabel: wG("smpShop:listView")
        }, {
          value: "grid",
          label: (0, pG.jsx)(kG.c, {
            name: "grid-2"
          }),
          ariaLabel: wG("smpShop:gridView")
        }],
        value: bG,
        onChange: ZG
      })
    }

    function tS(GG) {
      let {
        entries: bG,
        view: ZG
      } = GG;
      const {
        t: wG
      } = (0, yG.w)(), SG = lS(), LG = "grid" === ZG;
      return (0, pG.jsxs)(pG.Fragment, {
        children: [!LG && (0, pG.jsxs)("div", {
          className: "SmpColumns",
          "aria-hidden": "true",
          children: [(0, pG.jsx)("span", {}), (0, pG.jsx)("span", {
            children: wG("smpShop:columnItem")
          }), (0, pG.jsx)("span", {
            children: wG("smpShop:columnPriceEach")
          }), (0, pG.jsx)("span", {
            children: wG("smpShop:columnTotal")
          })]
        }), (0, pG.jsx)(jS.d, {
          lazyLoadedClassName: LG ? "SmpCardGrid" : "SmpList",
          observerRoot: "SmpBody",
          rootMargin: uS,
          observerUpdateDeps: [bG.length],
          children: bG.map((GG => {
            var bG, ZG;
            let {
              key: wG,
              item: yG,
              meta: kG
            } = GG;
            const UG = kG.quantity * kG.pricePerItem;
            return (0, pG.jsx)(TS, {
              itemKey: wG,
              item: kG.item,
              title: yG.customTitle,
              quantity: kG.quantity,
              pricePerItem: kG.pricePerItem,
              seller: kG.seller,
              expiresAt: kG.expiresAt,
              tier: null !== (bG = null === (ZG = yG.enchant) || void 0 === ZG ? void 0 : ZG.tier) && void 0 !== bG ? bG : null,
              busy: SG.isPending(wG) || null !== kG.seller && !1 === yG.canBuy,
              canAfford: SG.canAfford(yG, UG),
              grid: LG,
              onBuy: SG.act
            }, wG)
          }))
        }, ZG)]
      })
    }
    const DS = [1, 10, 100],
      NS = [1, 10, 100, 999];

    function OS(GG) {
      var bG, ZG, SG, UG, VG, fG, QG, KG, hG, dG;
      const {
        t: JG
      } = (0, yG.w)(), rG = lS(), {
        creator: zG,
        mode: EG
      } = GG, [XG, uG] = (0, wG.useState)(null !== (bG = null === zG || void 0 === zG ? void 0 : zG.meta.item) && void 0 !== bG ? bG : null), [iG, CG] = (0, wG.useState)(1), [WG, mG] = (0, wG.useState)(0), [IG, FG] = (0, wG.useState)(""), [vG, aG] = (0, wG.useState)(0), cG = (0, wG.useRef)(XG), lG = (0, wG.useRef)(!1), [jG, PG] = (0, wG.useState)(!1), MG = null !== (ZG = null === zG || void 0 === zG ? void 0 : zG.meta.item) && void 0 !== ZG ? ZG : null, AG = null !== (SG = null === zG || void 0 === zG ? void 0 : zG.meta.owned) && void 0 !== SG ? SG : 0;
      (0, wG.useEffect)((() => {
        GG.searching || null === MG || MG === cG.current || (cG.current = MG, lG.current = !1, uG(MG), mG(0), CG("list" === EG ? Math.max(1, AG) : 1))
      }), [MG, GG.searching]);
      const sG = !!zG && !!XG && zG.meta.item === XG,
        qG = sG ? zG.meta.owned : null !== (UG = null === (VG = GG.inventory) || void 0 === VG || null === (fG = VG.find((GG => GG.item === XG))) || void 0 === fG ? void 0 : fG.quantity) && void 0 !== UG ? UG : 0,
        nG = "list" === EG ? Math.max(1, qG) : 45954,
        gG = null !== (QG = GG.prices[0]) && void 0 !== QG ? QG : null,
        eG = GG.prices.length ? Math.round(GG.prices.reduce(((GG, bG) => GG + bG), 0) / GG.prices.length) : null,
        RG = null === (KG = GG.inventory) || void 0 === KG || null === (hG = KG.find((GG => GG.item === XG))) || void 0 === hG ? void 0 : hG.sellPrice;
      (0, wG.useEffect)((() => {
        var GG;
        sG && (CG((GG => "list" === EG ? Math.min(Math.max(1, GG), Math.max(1, qG)) : GG)), lG.current || mG(null !== (GG = null !== gG && void 0 !== gG ? gG : eG) && void 0 !== GG ? GG : Math.max(1, null !== RG && void 0 !== RG ? RG : 1)))
      }), [sG, qG, XG, gG, eG]);
      const TG = GG => {
          lG.current = !0, mG(GG)
        },
        HG = bG => {
          var ZG, wG, SG;
          cG.current = bG, lG.current = !1, PG(!1), FG(""), aG((GG => GG + 1)), uG(bG), mG(0), CG("list" === EG && null !== (ZG = null === (wG = GG.inventory) || void 0 === wG || null === (SG = wG.find((GG => GG.item === bG))) || void 0 === SG ? void 0 : SG.quantity) && void 0 !== ZG ? ZG : 1), (null === zG || void 0 === zG ? void 0 : zG.meta.item) !== bG && GG.onPickItem(bG)
        },
        tG = iG * WG,
        DG = "list" === EG && null !== zG && void 0 !== zG && zG.meta.fee ? function(GG, bG) {
          const ZG = Math.max(0, bG - GG.taxFreeAllowance);
          return Math.ceil(Math.round(ZG * GG.rate * 1e6) / 1e6)
        }(zG.meta.fee, tG) : 0,
        NG = !!zG && rG.isPending(zG.key),
        OG = sG && !GG.searching && iG >= 1 && WG >= 1 && ("order" === EG || qG >= iG) && !NG,
        xG = !!XG && !sG && !GG.searching && iG >= 1 && WG >= 1,
        BG = () => {
          OG ? rG.act(zG.key, `${iG}|${WG}`) : xG && (GG.onPickItem(XG), PG(!0))
        };
      (0, wG.useEffect)((() => {
        jG && sG && !GG.searching && (PG(!1), BG())
      }), [jG, sG, GG.searching]);
      const Gb = !!XG && !sG && (GG.searching || jG),
        bb = XG ? FS(GG.names, XG) : "",
        Zb = (0, wG.useMemo)((() => IS(GG.catalogue, IG).slice(0, 8)), [GG.catalogue, IG]),
        wb = ("list" === EG ? DS.filter((GG => GG < qG)) : NS).map((GG => ({
          value: GG,
          label: String(GG)
        })));
      "list" === EG && qG > 0 && wb.push({
        value: qG,
        label: JG("smpShop:all", {
          count: qG
        })
      });
      const Sb = [];
      return null !== gG && (gG > 1 && Sb.push({
        value: gG - 1,
        label: JG("smpShop:undercut", {
          price: SS(gG - 1)
        })
      }), Sb.push({
        value: gG,
        label: JG("smpShop:lowest", {
          price: SS(gG)
        })
      })), null !== eG && eG !== gG && Sb.push({
        value: eG,
        label: JG("smpShop:average", {
          price: SS(eG)
        })
      }), (0, pG.jsxs)("div", {
        className: "SmpTradeForm",
        children: [(0, pG.jsxs)("div", {
          className: "SmpTradeFormHead",
          children: [(0, pG.jsx)("b", {
            children: JG("list" === EG ? "smpShop:sellOnMarket" : "smpShop:createOrder")
          }), (0, pG.jsx)("button", {
            type: "button",
            className: "SmpIconButton",
            "aria-label": JG("smpShop:close"),
            onClick: GG.onClose,
            children: (0, pG.jsx)(kG.c, {
              name: "xmark"
            })
          })]
        }), "list" === EG && (0, pG.jsx)("div", {
          className: "SmpPicker",
          role: "listbox",
          children: null !== (dG = GG.inventory) && void 0 !== dG && dG.length ? GG.inventory.map((GG => {
            let {
              item: bG,
              quantity: ZG
            } = GG;
            return (0, pG.jsx)("button", {
              type: "button",
              title: bG,
              className: LG()("SmpPickerSlot", {
                SmpPickerSlotOn: bG === XG
              }),
              onClick: () => {
                HG(bG)
              },
              children: (0, pG.jsx)(kS, {
                item: bG,
                amount: ZG
              })
            }, bG)
          })) : (0, pG.jsx)("span", {
            className: "SmpMuted",
            children: JG("smpShop:nothingToList")
          })
        }), ("list" === EG || !XG) && (0, pG.jsxs)("div", {
          className: "SmpItemSearch",
          children: [(0, pG.jsx)(oG.b, {
            className: "SmpSearchInput",
            placeholderText: JG("list" === EG ? "smpShop:listSearchPlaceholder" : "smpShop:orderSearchPlaceholder"),
            defaultValue: IG,
            onValueChange: FG,
            blurOnEnter: !0,
            onEnter: () => {
              Zb[0] && HG(Zb[0].name)
            }
          }, vG), Zb.length > 0 && (0, pG.jsx)("div", {
            className: "SmpPicker",
            children: Zb.map((GG => {
              let {
                name: bG
              } = GG;
              return (0, pG.jsx)("button", {
                type: "button",
                title: bG,
                className: LG()("SmpPickerSlot", {
                  SmpPickerSlotOn: bG === XG
                }),
                onClick: () => {
                  HG(bG)
                },
                children: (0, pG.jsx)(kS, {
                  item: bG
                })
              }, bG)
            }))
          })]
        }), XG && (0, pG.jsxs)(pG.Fragment, {
          children: [(0, pG.jsxs)("div", {
            className: "SmpPickedName",
            children: [bb, Gb && (0, pG.jsx)(QS, {})]
          }), (0, pG.jsxs)("div", {
            className: "SmpFormGrid",
            children: [(0, pG.jsxs)("div", {
              className: "SmpField",
              children: [(0, pG.jsxs)("span", {
                children: [JG("smpShop:quantity"), "list" === EG && sG && (0, pG.jsx)("small", {
                  children: JG("smpShop:youHave", {
                    count: qG
                  })
                })]
              }), (0, pG.jsx)(KS, {
                value: iG,
                onChange: CG,
                max: nG,
                label: JG("smpShop:quantity")
              }), (0, pG.jsx)(fS, {
                options: wb,
                value: iG,
                onChange: CG,
                ariaLabel: JG("smpShop:quantity")
              })]
            }), (0, pG.jsxs)("div", {
              className: "SmpField",
              children: [(0, pG.jsx)("span", {
                children: JG("smpShop:pricePerItem")
              }), (0, pG.jsx)(KS, {
                value: Math.max(1, WG),
                onChange: TG,
                max: 9999999,
                step: hS,
                label: JG("smpShop:pricePerItem")
              }), (0, pG.jsx)(fS, {
                options: Sb,
                value: WG,
                onChange: TG,
                ariaLabel: JG("smpShop:pricePerItem")
              })]
            })]
          }), "list" === EG && (0, pG.jsxs)("div", {
            className: "SmpTradeSummary",
            children: [(0, pG.jsxs)("span", {
              children: [JG("smpShop:youGet"), " ", (0, pG.jsx)(US, {
                amount: Math.max(0, tG - DG),
                exact: !0
              })]
            }), (0, pG.jsx)("small", {
              children: DG > 0 ? JG("smpShop:listingFee", {
                fee: DG.toLocaleString("en-US")
              }) : JG("smpShop:listingRules")
            })]
          }), (0, pG.jsx)(YG.n, {
            className: "SmpSubmit",
            disabled: !OG && !xG && !NG,
            loading: NG || Gb || sG && GG.searching,
            onClick: BG,
            children: "list" === EG ? JG("smpShop:listButton", {
              count: iG,
              item: bb
            }) : (0, pG.jsxs)(pG.Fragment, {
              children: [JG("smpShop:orderButton", {
                count: iG,
                item: bb
              }), " ", WG >= 1 && (0, pG.jsx)(US, {
                amount: tG
              })]
            })
          })]
        })]
      })
    }

    function xS() {
      var GG;
      const {
        t: bG
      } = (0, yG.w)(), ZG = lS(), SG = null === (GG = ZG.shopInfo[ZG.categoryKey]) || void 0 === GG ? void 0 : GG.items, LG = XS(SG, "search"), kG = XS(SG, "creator"), UG = oS(SG, "enchantedCreator"), VG = oS(SG, "listing"), fG = XS(SG, "empty"), QG = AS(LG, VG.length > 0 || null !== fG), {
        searched: KG,
        shown: hG,
        loading: dG
      } = QG, [JG, rG] = (0, wG.useState)(!1), [zG, EG] = function() {
        const [GG, bG] = (0, RS.b)("smpMarketView", "list");
        return ["grid" === GG ? "grid" : "list", bG]
      }(), oG = "grid" === zG, XG = (0, wG.useMemo)((() => VG.filter((GG => {
        let {
          meta: bG
        } = GG;
        return null !== bG.seller && bG.item === KG
      })).map((GG => {
        let {
          meta: bG
        } = GG;
        return bG.pricePerItem
      })).sort(((GG, bG) => GG - bG))), [VG, KG]), uG = (0, wG.useMemo)((() => {
        const GG = new Set(QG.catalogue.map((GG => {
          let {
            name: bG
          } = GG;
          return bG
        })));
        return function(GG) {
          for (const bG in GG)
            if ("sell" === GG[bG].smp) return oS(GG[bG].items, "sell").filter((GG => {
              let {
                item: bG
              } = GG;
              return !bG.enchant
            })).map((GG => {
              let {
                meta: bG
              } = GG;
              return {
                item: bG.item,
                quantity: bG.quantity,
                sellPrice: bG.pricePerItem
              }
            }));
          return []
        }(ZG.shopInfo).filter((bG => {
          let {
            item: ZG
          } = bG;
          return GG.has(ZG)
        }))
      }), [ZG.shopInfo, QG.catalogue]);
      return (0, pG.jsx)(gS, {
        browser: QG,
        className: "SmpMarketTab",
        recentLabel: bG("smpShop:recentlyListed"),
        action: (0, pG.jsx)(YG.n, {
          className: "SmpSellButton",
          onClick: () => {
            rG((GG => !GG))
          },
          children: bG("smpShop:sell")
        }),
        above: JG && (0, pG.jsxs)(pG.Fragment, {
          children: [(0, pG.jsx)(OS, {
            mode: "list",
            creator: kG,
            inventory: uG,
            catalogue: QG.catalogue,
            names: QG.names,
            searching: dG,
            prices: XG,
            onPickItem: QG.searchFor,
            onClose: () => {
              rG(!1)
            }
          }), UG.length > 0 && (0, pG.jsx)(BS, {
            entries: UG
          })]
        }),
        listControls: (0, pG.jsx)(HS, {
          view: zG,
          onChange: EG
        }),
        summary: hG && (VG.length > 0 ? bG(1 === VG.length ? "smpShop:listingSummaryOne" : "smpShop:listingSummary", {
          count: VG.length,
          price: SS(eS(VG, "min"))
        }) : bG("smpShop:noOneSelling", {
          item: FS(QG.names, hG)
        })),
        list: dG ? (0, pG.jsx)(YS, {
          grid: oG
        }) : VG.length > 0 ? (0, pG.jsx)(tS, {
          entries: VG,
          view: zG
        }) : fG ? (0, pG.jsx)(pS, {
          entry: fG
        }) : (0, pG.jsx)(YS, {
          count: 3,
          grid: oG
        })
      })
    }

    function BS(GG) {
      let {
        entries: bG
      } = GG;
      const {
        t: ZG
      } = (0, yG.w)(), SG = lS(), [LG, kG] = (0, wG.useState)({});
      return (0, pG.jsx)("div", {
        className: "SmpList",
        children: bG.map((GG => {
          var bG, wG, yG;
          let {
            key: UG,
            item: VG,
            meta: fG
          } = GG;
          const QG = null !== (bG = LG[UG]) && void 0 !== bG ? bG : 1;
          return (0, pG.jsxs)("div", {
            className: "SmpRow",
            children: [(0, pG.jsx)(kS, {
              item: fG.item,
              amount: fG.quantity,
              tier: null !== (wG = null === (yG = VG.enchant) || void 0 === yG ? void 0 : yG.tier) && void 0 !== wG ? wG : null
            }), (0, pG.jsxs)("div", {
              className: "SmpRowText",
              children: [(0, pG.jsx)("b", {
                children: (0, pG.jsx)(tw.c, {
                  text: VG.customTitle
                })
              }), (0, pG.jsx)("small", {
                children: ZG("smpShop:enchantedListing")
              })]
            }), (0, pG.jsx)(KS, {
              value: QG,
              onChange: GG => {
                kG({
                  ...LG,
                  [UG]: GG
                })
              },
              max: 9999999,
              step: hS,
              label: ZG("smpShop:pricePerItem")
            }), (0, pG.jsxs)(YG.n, {
              loading: SG.isPending(UG),
              onClick: () => {
                SG.act(UG, String(QG))
              },
              children: [ZG("smpShop:list"), " ", (0, pG.jsx)(US, {
                amount: QG
              })]
            })]
          }, UG)
        }))
      })
    }
    const GL = (0, wG.memo)((function(GG) {
      let {
        itemKey: bG,
        item: ZG,
        quantity: wG,
        pricePerItem: SG,
        tier: yG,
        selected: kG,
        onSelect: UG
      } = GG;
      return (0, pG.jsxs)("button", {
        type: "button",
        className: LG()("SmpInventorySlot", {
          SmpInventorySlotOn: kG
        }),
        title: ZG,
        onClick: () => {
          UG(bG)
        },
        children: [(0, pG.jsx)(kS, {
          item: ZG,
          amount: wG,
          tier: yG
        }), (0, pG.jsx)(US, {
          amount: SG
        })]
      })
    }));

    function bL() {
      var GG;
      const {
        t: bG
      } = (0, yG.w)(), ZG = lS(), SG = null === (GG = ZG.shopInfo[ZG.categoryKey]) || void 0 === GG ? void 0 : GG.items, kG = oS(SG, "sell"), UG = XS(SG, "empty"), [YG, VG] = (0, wG.useState)(null), [fG, QG] = (0, wG.useState)({}), KG = kG.find((GG => {
        let {
          key: bG
        } = GG;
        return bG === YG
      }));
      return 0 === kG.length ? (0, pG.jsx)("div", {
        className: "SmpScreen",
        children: (0, pG.jsx)(VS, {
          title: UG ? (0, pG.jsx)(tw.c, {
            text: UG.item.customTitle
          }) : bG("smpShop:nothingToSell"),
          children: UG && (0, pG.jsx)(tw.c, {
            text: UG.item.description
          })
        })
      }) : (0, pG.jsxs)("div", {
        className: "SmpScreen SmpInstantSellTab",
        children: [(0, pG.jsx)("div", {
          className: "SmpInventoryGrid",
          children: kG.map((GG => {
            var bG, ZG;
            let {
              key: wG,
              item: SG,
              meta: LG
            } = GG;
            return (0, pG.jsx)(GL, {
              itemKey: wG,
              item: LG.item,
              quantity: LG.quantity,
              pricePerItem: LG.pricePerItem,
              tier: null !== (bG = null === (ZG = SG.enchant) || void 0 === ZG ? void 0 : ZG.tier) && void 0 !== bG ? bG : null,
              selected: wG === YG,
              onSelect: VG
            }, wG)
          }))
        }), (0, pG.jsx)("div", {
          className: LG()("SmpSellBar", {
            SmpSellBarIdle: !KG
          }),
          children: KG ? (0, pG.jsx)(ZL, {
            entry: KG,
            choice: vS(KG.item, fG[KG.key]),
            onChoose: GG => {
              QG({
                ...fG,
                [KG.key]: GG
              })
            }
          }) : (0, pG.jsx)("span", {
            className: "SmpMuted",
            children: bG("smpShop:tapToSell")
          })
        })]
      })
    }

    function ZL(GG) {
      var bG, ZG, wG, SG;
      let {
        entry: LG,
        choice: kG,
        onChoose: UG
      } = GG;
      const {
        t: VG
      } = (0, yG.w)(), fG = lS(), {
        key: QG,
        item: KG,
        meta: hG
      } = LG, dG = WS("dropdown" === (null === (bG = KG.userInput) || void 0 === bG ? void 0 : bG.type) ? KG.userInput.dropdownOptions : []), JG = null === kG ? 0 : -(0, ew.d)(KG, kG);
      return (0, pG.jsxs)(pG.Fragment, {
        children: [(0, pG.jsx)(kS, {
          item: hG.item,
          amount: hG.quantity,
          tier: null !== (ZG = null === (wG = KG.enchant) || void 0 === wG ? void 0 : wG.tier) && void 0 !== ZG ? ZG : null
        }), (0, pG.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, pG.jsx)("b", {
            children: (0, pG.jsx)(tw.c, {
              text: null !== (SG = KG.customTitle) && void 0 !== SG ? SG : hG.item
            })
          }), (0, pG.jsx)("small", {
            children: VG("smpShop:sellEach", {
              count: hG.quantity
            })
          })]
        }), (0, pG.jsx)(fS, {
          options: dG.map((GG => {
            let {
              label: bG,
              quantity: ZG,
              isAll: wG
            } = GG;
            return {
              value: bG,
              label: wG ? VG("smpShop:all", {
                count: ZG
              }) : String(ZG)
            }
          })),
          value: kG,
          onChange: UG,
          ariaLabel: VG("smpShop:quantity")
        }), (0, pG.jsxs)(YG.n, {
          loading: fG.isPending(QG),
          disabled: null === kG,
          onClick: () => {
            fG.act(QG, kG)
          },
          children: [VG("smpShop:sellButton"), " ", (0, pG.jsx)(US, {
            amount: JG
          })]
        })]
      })
    }

    function wL() {
      var GG;
      const {
        t: bG
      } = (0, yG.w)(), ZG = lS(), wG = null === (GG = ZG.shopInfo[ZG.categoryKey]) || void 0 === GG ? void 0 : GG.items, SG = oS(wG, "collect"), LG = oS(wG, "myListing"), kG = (GG, bG) => ZG.isPending(GG) || !1 === bG.canBuy;
      return (0, pG.jsxs)("div", {
        className: "SmpScreen",
        children: [(0, pG.jsx)("h3", {
          className: "SmpSectionTitle",
          children: bG("smpShop:readyToCollect")
        }), SG.length > 0 ? (0, pG.jsx)("div", {
          className: "SmpList",
          children: SG.map((GG => {
            var wG, SG;
            let {
              key: LG,
              item: yG,
              meta: UG
            } = GG;
            return (0, pG.jsxs)("div", {
              className: "SmpRow",
              children: [(0, pG.jsx)(kS, {
                item: "sold" === UG.type ? "Gold Coin" : UG.item,
                amount: "sold" === UG.type ? 0 : UG.quantity,
                tier: null !== (wG = null === (SG = yG.enchant) || void 0 === SG ? void 0 : SG.tier) && void 0 !== wG ? wG : null
              }), (0, pG.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, pG.jsx)("b", {
                  children: (0, pG.jsx)(tw.c, {
                    text: yG.customTitle
                  })
                }), (0, pG.jsx)("small", {
                  children: (0, pG.jsx)(tw.c, {
                    text: yG.description
                  })
                })]
              }), (0, pG.jsx)(YG.k, {
                loading: kG(LG, yG),
                onClick: () => {
                  ZG.act(LG)
                },
                children: bG("smpShop:collect")
              })]
            }, LG)
          }))
        }) : (0, pG.jsx)(VS, {
          title: bG("smpShop:nothingToCollect"),
          children: bG("smpShop:nothingToCollectHint")
        }), (0, pG.jsx)("h3", {
          className: "SmpSectionTitle",
          children: bG("smpShop:activeListings", {
            count: LG.length
          })
        }), LG.length > 0 ? (0, pG.jsx)("div", {
          className: "SmpList",
          children: LG.map((GG => {
            var wG, SG;
            let {
              key: LG,
              item: yG,
              meta: UG
            } = GG;
            return (0, pG.jsxs)("div", {
              className: "SmpRow",
              children: [(0, pG.jsx)(kS, {
                item: UG.item,
                amount: UG.quantity,
                tier: null !== (wG = null === (SG = yG.enchant) || void 0 === SG ? void 0 : SG.tier) && void 0 !== wG ? wG : null
              }), (0, pG.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, pG.jsx)("b", {
                  children: (0, pG.jsx)(tw.c, {
                    text: yG.customTitle
                  })
                }), (0, pG.jsx)("small", {
                  children: bG("smpShop:timeLeft", {
                    time: CS(UG.expiresAt)
                  })
                })]
              }), (0, pG.jsxs)("div", {
                className: "SmpRowPrice",
                children: [(0, pG.jsx)(US, {
                  amount: UG.pricePerItem
                }), (0, pG.jsx)("small", {
                  children: bG("smpShop:each")
                })]
              }), (0, pG.jsx)(YG.C, {
                loading: kG(LG, yG),
                onClick: () => {
                  ZG.act(LG)
                },
                children: bG("smpShop:cancel")
              })]
            }, LG)
          }))
        }) : (0, pG.jsx)(VS, {
          title: bG("smpShop:noActiveListings"),
          children: bG("smpShop:noActiveListingsHint")
        })]
      })
    }

    function SL(GG) {
      let {
        done: bG,
        of: ZG
      } = GG;
      return (0, pG.jsx)("span", {
        className: "SmpProgress",
        children: (0, pG.jsx)("i", {
          style: {
            width: `${Math.min(100,bG/Math.max(1,ZG)*100)}%`
          }
        })
      })
    }

    function LL(GG) {
      var bG, ZG, wG;
      let {
        entry: SG,
        choice: LG,
        onChoose: kG
      } = GG;
      const {
        t: UG
      } = (0, yG.w)(), VG = lS(), {
        key: fG,
        item: QG,
        meta: KG
      } = SG, hG = "dropdown" === (null === (bG = QG.userInput) || void 0 === bG ? void 0 : bG.type) ? QG.userInput.dropdownOptions : [], dG = !0 === KG.processing, JG = null !== KG.creator && (KG.owned > 0 || dG), rG = JG && KG.owned > 0 ? WS(hG) : [], zG = null === LG ? 0 : null !== (ZG = null === (wG = rG.find((GG => GG.label === LG))) || void 0 === wG ? void 0 : wG.quantity) && void 0 !== ZG ? ZG : 0;
      return (0, pG.jsxs)("div", {
        className: "SmpRow SmpOrderRow",
        children: [(0, pG.jsx)(kS, {
          item: KG.item
        }), (0, pG.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, pG.jsx)("b", {
            children: (0, pG.jsx)(tw.c, {
              text: QG.customTitle
            })
          }), (0, pG.jsxs)("small", {
            children: [(0, pG.jsx)(US, {
              amount: KG.pricePerItem
            }), " ", UG("smpShop:each"), " \xb7", " ", null === KG.creator ? UG("smpShop:you") : (0, pG.jsx)(tw.c, {
              text: [{
                entityName: KG.creator
              }]
            })]
          }), (0, pG.jsx)(SL, {
            done: KG.delivered,
            of: KG.wanted
          })]
        }), JG ? (0, pG.jsxs)(pG.Fragment, {
          children: [(0, pG.jsx)(fS, {
            options: rG.map((GG => {
              let {
                label: bG,
                quantity: ZG,
                isAll: wG
              } = GG;
              return {
                value: bG,
                label: wG ? UG("smpShop:max", {
                  count: ZG
                }) : String(ZG)
              }
            })),
            value: LG,
            onChange: kG,
            ariaLabel: UG("smpShop:quantity")
          }), (0, pG.jsxs)(YG.n, {
            loading: VG.isPending(fG) || dG,
            disabled: null === LG,
            onClick: () => {
              VG.act(fG, LG)
            },
            children: [UG("smpShop:deliver"), " ", (0, pG.jsx)(US, {
              amount: zG * KG.pricePerItem
            })]
          })]
        }) : (0, pG.jsx)("span", {
          className: "SmpMuted SmpRowNote",
          children: null === KG.creator ? UG("smpShop:yourOrder") : UG("smpShop:youHave", {
            count: 0
          })
        })]
      })
    }

    function yL() {
      var GG;
      const {
        t: bG
      } = (0, yG.w)(), ZG = lS(), SG = null === (GG = ZG.shopInfo[ZG.categoryKey]) || void 0 === GG ? void 0 : GG.items, LG = XS(SG, "search"), kG = XS(SG, "creator"), UG = oS(SG, "order"), VG = XS(SG, "empty"), fG = AS(LG, UG.length > 0 || null !== VG), [QG, KG] = (0, wG.useState)(!1), [hG, dG] = (0, wG.useState)({});
      return (0, pG.jsx)(gS, {
        browser: fG,
        recentLabel: bG("smpShop:recentOrders"),
        action: (0, pG.jsx)(YG.n, {
          onClick: () => {
            KG((GG => !GG))
          },
          children: bG("smpShop:createOrder")
        }),
        above: QG && (0, pG.jsx)(OS, {
          mode: "order",
          creator: kG,
          catalogue: fG.catalogue,
          names: fG.names,
          searching: fG.loading,
          prices: [],
          onPickItem: fG.searchFor,
          onClose: () => {
            KG(!1)
          }
        }),
        onBack: () => {
          KG(!1)
        },
        summary: UG.length > 0 && bG(1 === UG.length ? "smpShop:orderSummaryOne" : "smpShop:orderSummary", {
          count: UG.length,
          price: SS(eS(UG, "max"))
        }),
        list: fG.loading ? (0, pG.jsx)(YS, {}) : UG.length > 0 ? (0, pG.jsx)(jS.d, {
          lazyLoadedClassName: "SmpList",
          observerRoot: "SmpBody",
          rootMargin: uS,
          observerUpdateDeps: [UG.length],
          children: UG.map((GG => (0, pG.jsx)(LL, {
            entry: GG,
            choice: vS(GG.item, hG[GG.key]),
            onChoose: bG => {
              dG({
                ...hG,
                [GG.key]: bG
              })
            }
          }, GG.key)))
        }) : VG ? (0, pG.jsx)(pS, {
          entry: VG
        }) : (0, pG.jsx)(YS, {
          count: 3
        })
      })
    }

    function kL() {
      var GG;
      const {
        t: bG
      } = (0, yG.w)(), ZG = lS(), wG = oS(null === (GG = ZG.shopInfo[ZG.categoryKey]) || void 0 === GG ? void 0 : GG.items, "myOrder");
      return 0 === wG.length ? (0, pG.jsx)("div", {
        className: "SmpScreen",
        children: (0, pG.jsx)(VS, {
          title: bG("smpShop:noOrders"),
          children: bG("smpShop:noOrdersHint")
        })
      }) : (0, pG.jsx)("div", {
        className: "SmpScreen",
        children: (0, pG.jsx)("div", {
          className: "SmpList",
          children: wG.map((GG => {
            let {
              key: wG,
              item: SG,
              meta: LG
            } = GG;
            const yG = ZG.isPending(wG) || !1 === SG.canBuy;
            return (0, pG.jsxs)("div", {
              className: "SmpRow",
              children: [(0, pG.jsx)(kS, {
                item: LG.item,
                amount: LG.collectable
              }), (0, pG.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, pG.jsx)("b", {
                  children: (0, pG.jsx)(tw.c, {
                    text: SG.customTitle
                  })
                }), (0, pG.jsxs)("small", {
                  children: [(0, pG.jsx)(US, {
                    amount: LG.pricePerItem
                  }), " ", bG("smpShop:each"), LG.collectable > 0 && ` \xb7 ${bG("smpShop:readyCount",{count:LG.collectable})}`]
                }), (0, pG.jsx)(SL, {
                  done: LG.delivered,
                  of: LG.wanted
                })]
              }), LG.collectable > 0 ? (0, pG.jsx)(YG.k, {
                loading: yG,
                onClick: () => {
                  ZG.act(wG)
                },
                children: bG("smpShop:collectCount", {
                  count: LG.collectable
                })
              }) : (0, pG.jsx)(YG.C, {
                loading: yG,
                onClick: () => {
                  ZG.act(wG)
                },
                children: bG("smpShop:cancel")
              })]
            }, wG)
          }))
        })
      })
    }
    const UL = new Set(["search", "creator", "enchantedCreator", "collect", "myOrder", "order"]),
      YL = {
        sell: "coins",
        market: "store",
        collect: "backpack",
        orders: "file-clipboard",
        myOrders: "location-check"
      };

    function VL(GG, bG) {
      let ZG = !1;
      const wG = {};
      for (const SG in GG) bG(SG, GG[SG]) ? wG[SG] = GG[SG] : ZG = !0;
      return ZG ? wG : GG
    }

    function pL(GG) {
      var bG, ZG, SG, UG;
      const {
        show: YG,
        shopInfo: VG,
        selectedCategoryKey: fG
      } = GG, {
        t: QG
      } = (0, yG.w)(), KG = null !== fG && void 0 !== fG ? fG : "", hG = ES(VG, KG), dG = null === (bG = VG[KG]) || void 0 === bG ? void 0 : bG.items, JG = null !== hG, [rG, zG] = (0, wG.useState)({}), [EG, oG] = (0, wG.useState)([]), [XG, uG] = (0, wG.useState)(!1), [iG, CG] = (0, wG.useState)(null), [, WG] = (0, wG.useState)(0), mG = (0, wG.useRef)(0), IG = (0, wG.useRef)({}), FG = (0, wG.useRef)({
        items: dG,
        pending: rG,
        shopInfo: VG,
        active: JG,
        canAfford: GG.canAfford,
        buy: GG.buy
      });
      FG.current = {
        items: dG,
        pending: rG,
        shopInfo: VG,
        active: JG,
        canAfford: GG.canAfford,
        buy: GG.buy
      };
      const vG = (0, wG.useCallback)((GG => {
        mG.current++;
        const bG = mG.current;
        oG((ZG => [{
          id: bG,
          text: GG
        }, ...ZG].slice(0, 8))), CG(bG)
      }), []);
      (0, wG.useEffect)((() => {
        if (null === iG) return;
        const GG = setTimeout((() => {
          CG(null)
        }), 3e3);
        return () => {
          clearTimeout(GG)
        }
      }), [iG]), (0, wG.useEffect)((() => {
        const bG = GG.message;
        if (!bG) return;
        const {
          shopInfo: ZG,
          active: wG,
          items: SG
        } = FG.current, LG = null !== bG.categoryKey ? null !== ES(ZG, bG.categoryKey) : wG;
        (LG || wG) && vG(bG.text), LG && zG((GG => VL(GG, (GG => {
          var bG, ZG;
          return !UL.has(null === SG || void 0 === SG || null === (bG = SG[GG]) || void 0 === bG || null === (ZG = bG.smp) || void 0 === ZG ? void 0 : ZG.kind)
        }))))
      }), [GG.message, vG]), (0, wG.useEffect)((() => {
        zG((GG => VL(GG, ((GG, bG) => aS(null === dG || void 0 === dG ? void 0 : dG[GG]) === bG.snapshot))))
      }), [VG, dG]);
      const aG = Object.keys(rG).length > 0;
      (0, wG.useEffect)((() => {
        if (!aG) return;
        const GG = setInterval((() => {
          WG((GG => GG + 1));
          const GG = Date.now(),
            {
              pending: bG,
              items: ZG
            } = FG.current,
            wG = Object.keys(bG).filter((ZG => GG - bG[ZG].at >= 12e3));
          if (0 === wG.length) return;
          const SG = wG.some((GG => {
            var wG, SG;
            return "search" !== (null === ZG || void 0 === ZG || null === (wG = ZG[GG]) || void 0 === wG || null === (SG = wG.smp) || void 0 === SG ? void 0 : SG.kind) || bG[GG].resend
          }));
          for (const LG of wG) IG.current[LG] = GG;
          zG((GG => VL(GG, (GG => !wG.includes(GG))))), SG && vG(QG("smpShop:noAnswer"))
        }), 500);
        return () => {
          clearInterval(GG)
        }
      }), [aG]), (0, wG.useEffect)((() => {
        zG({})
      }), [KG]), (0, wG.useEffect)((() => {
        YG || uG(!1)
      }), [YG]);
      const cG = (0, wG.useCallback)((function(GG, bG) {
          let ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            items: wG,
            pending: SG,
            canAfford: LG,
            buy: yG
          } = FG.current, kG = null === wG || void 0 === wG ? void 0 : wG[GG];
          if (!kG || GG in SG || !1 === kG.canBuy) return !1;
          if (!LG(kG, (0, ew.d)(kG, bG))) return !1;
          yG(GG, kG, bG);
          const UG = {
            snapshot: aS(kG),
            at: Date.now(),
            resend: ZG
          };
          return FG.current.pending = {
            ...FG.current.pending,
            [GG]: UG
          }, zG((bG => ({
            ...bG,
            [GG]: UG
          }))), !0
        }), []),
        lG = (0, wG.useMemo)((() => ({
          shopInfo: VG,
          categoryKey: KG,
          canAfford: GG.canAfford,
          isPending: GG => GG in rG,
          gaveUpAt: GG => {
            var bG;
            return null !== (bG = IG.current[GG]) && void 0 !== bG ? bG : 0
          },
          act: cG,
          notify: vG
        })), [VG, KG, GG.canAfford, rG, cG, vG]),
        jG = Math.min(...Object.values(rG).map((GG => GG.at))),
        PG = aG && Date.now() - jG > 1500,
        MG = EG.length > 1,
        AG = null !== (ZG = null === (SG = VG[KG]) || void 0 === SG ? void 0 : SG.customTitle) && void 0 !== ZG ? ZG : KG,
        sG = null === (UG = VG[KG]) || void 0 === UG ? void 0 : UG.description;
      let qG = null;
      return "market" === hG ? qG = (0, pG.jsx)(xS, {}) : "sell" === hG ? qG = (0, pG.jsx)(bL, {}) : "collect" === hG ? qG = (0, pG.jsx)(wL, {}) : "orders" === hG ? qG = (0, pG.jsx)(yL, {}) : "myOrders" === hG && (qG = (0, pG.jsx)(kL, {})), (0, pG.jsx)(cS.Provider, {
        value: lG,
        children: (0, pG.jsx)("div", {
          className: "SmpShopHost",
          hidden: !JG,
          children: (0, pG.jsxs)("div", {
            className: "SmpShop",
            children: [(0, pG.jsx)("header", {
              className: "SmpHeader",
              children: (0, pG.jsxs)("div", {
                className: "SmpHeaderTitle",
                children: [(0, pG.jsxs)("h2", {
                  children: [hG && (0, pG.jsx)(kG.c, {
                    name: YL[hG]
                  }), QG(AG)]
                }), sG && (0, pG.jsx)("p", {
                  children: (0, pG.jsx)(tw.c, {
                    text: sG
                  })
                })]
              })
            }), (0, pG.jsx)("main", {
              className: "SmpBody",
              "data-pad-initial-area": !0,
              children: YG && qG
            }), (0, pG.jsxs)("button", {
              type: "button",
              className: LG()("SmpStatus", {
                SmpStatusWaiting: aG,
                SmpStatusFresh: !aG && null !== iG,
                SmpStatusHasHistory: MG
              }),
              "aria-live": "polite",
              "aria-expanded": MG ? XG : void 0,
              onClick: () => {
                MG && uG((GG => !GG))
              },
              children: [aG ? (0, pG.jsxs)("span", {
                className: "SmpStatusText",
                children: [(0, pG.jsx)(QS, {}), QG(PG ? "smpShop:slowConnection" : "smpShop:waiting")]
              }) : EG[0] ? (0, pG.jsx)("span", {
                className: "SmpStatusText",
                children: (0, pG.jsx)(tw.c, {
                  text: EG[0].text
                })
              }, EG[0].id) : (0, pG.jsx)("span", {
                className: "SmpStatusText SmpMuted",
                children: QG("smpShop:ready")
              }), MG && (0, pG.jsx)("small", {
                children: QG("smpShop:recentMessages", {
                  count: EG.length
                })
              })]
            }), XG && MG && (0, pG.jsx)("div", {
              className: "SmpStatusHistory",
              children: EG.map((GG => (0, pG.jsx)("div", {
                children: (0, pG.jsx)(tw.c, {
                  text: GG.text
                })
              }, GG.id)))
            })]
          })
        })
      })
    }
    class fL {
      constructor(GG) {
        this.info = GG
      }
      static fromShopInfo(GG) {
        const bG = {};
        for (const ZG in GG) {
          const wG = !0 === GG[ZG].redDot && !0 !== GG[ZG].forceRemoveRedDot;
          bG[ZG] = {
            redDot: wG,
            items: {}
          };
          for (const SG in GG[ZG].items) {
            const wG = GG[ZG].items[SG],
              LG = !0 === wG.redDot && !0 !== wG.forceRemoveRedDot;
            bG[ZG].items[SG] = {
              redDot: LG
            }
          }
        }
        return new fL(bG)
      }
      anyCategoryHasRedDots() {
        for (const GG in this.info)
          if (this.categoryHasRedDot(GG)) return !0;
        return !1
      }
      doesCategoryExist(GG) {
        return !(0, kZ.L)(this.info[GG])
      }
      categoryHasRedDot(GG) {
        return !0 === this.info[GG].redDot
      }
      updateCategoryRedDot(GG, bG) {
        this.info[GG].redDot = bG
      }
      doesItemExist(GG, bG) {
        return this.doesCategoryExist(GG) && !(0, kZ.L)(this.info[GG].items[bG])
      }
      itemHasRedDot(GG, bG) {
        return !0 === this.info[GG].items[bG].redDot
      }
      updateItemRedDot(GG, bG, ZG) {
        this.info[GG].items[bG].redDot = ZG
      }
      shallowCopy() {
        return new fL(this.info)
      }
    }

    function QL(GG, bG) {
      return `${GG}\x1f${bG}`
    }

    function KL(GG, bG) {
      return !(0, kZ.L)(bG) && !(0, kZ.L)(GG) && bG in GG
    }
    const hL = (0, wG.memo)((function(GG) {
      var bG, ZG;
      let {
        show: SG
      } = GG;
      const yG = (0, jb.c)("players", oL),
        kG = (0, jb.c)("players", XL),
        VG = (0, GS.c)(),
        [QG, KG] = (0, wG.useState)({
          shopInfo: {},
          userInputsPerItem: {},
          redDotInfo: fL.fromShopInfo({}),
          currencyAmounts: {},
          selectedCategoryKey: null,
          onBoughtInfo: null,
          awaitingPurchase: !1
        }),
        dG = (0, wG.useRef)(""),
        JG = (0, wG.useRef)(null),
        zG = (0, wG.useRef)(null),
        EG = (0, wG.useRef)(0),
        oG = (0, wG.useRef)(void 0),
        XG = (0, wG.useRef)(null),
        uG = (0, wG.useRef)(QG),
        CG = QG.redDotInfo.anyCategoryHasRedDots(),
        [WG, IG] = (0, wG.useState)(null),
        FG = (0, wG.useRef)(!1);
      let vG = !1,
        aG = 0,
        cG = 0;
      if (QG.currencyAmounts) {
        for (const GG in QG.currencyAmounts) {
          var lG;
          const bG = QG.currencyAmounts[GG];
          bG.hidden || (aG++, (null === (lG = bG.subtext) || void 0 === lG ? void 0 : lG.length) > 0 && cG++)
        }
        vG = aG + cG > 4
      }(0, wG.useEffect)((() => {
        UZ.l.xh("showShopIconRedDot", CG, !0)
      }), [CG]), (0, wG.useEffect)((() => {
        rG.gameBridge.send("setShopOpen", SG), SG || (clearTimeout(oG.current), KG((GG => GG.awaitingPurchase ? {
          ...GG,
          awaitingPurchase: !1
        } : GG)))
      }), [SG]), (0, wG.useEffect)((() => () => {
        rG.gameBridge.send("setShopOpen", !1), clearTimeout(oG.current)
      }), []), (0, wG.useEffect)((() => {
        uG.current = QG
      }), [QG]), (0, wG.useEffect)((() => {
        if (null === WG) return;
        return (0, xw.d)("pointerdown", (GG => {
          const bG = GG.target;
          null !== bG && void 0 !== bG && bG.closest(".ShopItem") || IG(null)
        }))
      }), [WG]);
      const jG = GG => {
          KG((bG => ({
            ...bG,
            ...GG
          })))
        },
        PG = GG => {
          var bG;
          clearTimeout(null === (bG = QG.onBoughtInfo) || void 0 === bG ? void 0 : bG.timeout);
          const ZG = setTimeout((() => {
            jG({
              onBoughtInfo: null
            })
          }), 3e3);
          dG.current = GG, jG({
            onBoughtInfo: {
              text: GG,
              timeout: ZG,
              categoryKey: JG.current
            }
          })
        },
        MG = GG => {
          const {
            shopInfo: bG,
            userInputsPerItem: ZG,
            redDotInfo: wG,
            autoSelectCategory: LG
          } = function(GG, bG, ZG, wG, SG, LG) {
            if ((0, kZ.L)(GG) || 0 === Object.keys(GG).length) return {
              shopInfo: {},
              userInputsPerItem: {},
              redDotInfo: fL.fromShopInfo({}),
              autoSelectCategory: null
            };
            const yG = mG.siteUsedData[mG.siteUsed].adConfig.showRewardedAds,
              kG = {};
            let UG = null;
            for (const dG in GG) {
              const bG = GG[dG],
                ZG = {};
              let wG = !1;
              for (const GG in bG.items) {
                const SG = bG.items[GG];
                (0, ew.m)(SG, yG) && (ZG[GG] = SG, wG = !0)
              }
              wG && (kG[dG] = {
                ...bG,
                items: ZG
              }, !0 === bG.autoSelectCategory && (UG = dG))
            }
            const YG = {},
              VG = (GG, bG, wG, yG) => {
                var kG, UG;
                const VG = QL(GG, bG),
                  pG = null !== (kG = ZG[VG]) && void 0 !== kG ? kG : ZG[bG];
                if (null !== (UG = yG.userInput) && void 0 !== UG && UG.type) switch (yG.userInput.type) {
                  case "dropdown": {
                    var fG;
                    const GG = !pG || !yG.userInput.dropdownOptions.some((GG => (0, ew.h)(GG) === pG)),
                      bG = yG.userInput.shouldResetSelectionOnOptionsChange && ("dropdown" !== (null === wG || void 0 === wG || null === (fG = wG.userInput) || void 0 === fG ? void 0 : fG.type) || JSON.stringify(wG.userInput.dropdownOptions) !== JSON.stringify(yG.userInput.dropdownOptions)),
                      ZG = yG.userInput,
                      SG = !(0, kZ.L)(ZG.initialValue) && ZG.dropdownOptions.some((GG => (0, ew.h)(GG) === ZG.initialValue));
                    var QG;
                    return void(GG || bG ? SG ? YG[VG] = null !== (QG = yG.userInput.initialValue) && void 0 !== QG ? QG : null : yG.userInput.dropdownOptions.length > 0 ? YG[VG] = (0, ew.h)(yG.userInput.dropdownOptions[0]) : YG[VG] = null : YG[VG] = pG)
                  }
                  case "text":
                  case "number":
                    var KG, hG, dG;
                    return void((null === wG || void 0 === wG ? void 0 : wG.userInput) !== yG.userInput ? YG[VG] = null !== (KG = null !== (hG = yG.userInput.initialValue) && void 0 !== hG ? hG : pG) && void 0 !== KG ? KG : "" : YG[VG] = null !== (dG = null !== pG && void 0 !== pG ? pG : yG.userInput.initialValue) && void 0 !== dG ? dG : "");
                  case "color":
                    var JG, rG, zG;
                    return void((null === wG || void 0 === wG ? void 0 : wG.userInput) !== yG.userInput ? YG[VG] = null !== (JG = null !== (rG = yG.userInput.initialValue) && void 0 !== rG ? rG : pG) && void 0 !== JG ? JG : "#000000" : YG[VG] = null !== (zG = null !== pG && void 0 !== pG ? pG : yG.userInput.initialValue) && void 0 !== zG ? zG : "#000000");
                  case "player": {
                    const GG = (0, ew.k)(SG, LG, yG.userInput);
                    return void(pG && GG.includes(pG) ? YG[VG] = pG : YG[VG] = GG.length > 0 ? GG[0] : null)
                  }
                }
              };
            for (const dG in kG)
              for (const GG in kG[dG].items) {
                var pG;
                const ZG = kG[dG].items[GG];
                VG(dG, GG, null === (pG = bG[dG]) || void 0 === pG ? void 0 : pG.items[GG], ZG)
              }
            const fG = fL.fromShopInfo(kG);
            for (const dG in kG) {
              var QG;
              if (wG.doesCategoryExist(dG)) {
                (null === (QG = bG[dG]) || void 0 === QG ? void 0 : QG.redDot) === kG[dG].redDot && fG.updateCategoryRedDot(dG, wG.categoryHasRedDot(dG));
                for (const GG in kG[dG].items) {
                  var KG, hG;
                  wG.doesItemExist(dG, GG) && (null === (KG = bG[dG]) || void 0 === KG || null === (hG = KG.items[GG]) || void 0 === hG ? void 0 : hG.redDot) === kG[dG].items[GG].redDot && fG.updateItemRedDot(dG, GG, wG.itemHasRedDot(dG, GG))
                }
              }
            }
            return {
              shopInfo: kG,
              userInputsPerItem: YG,
              redDotInfo: fG,
              autoSelectCategory: UG
            }
          }(GG, QG.shopInfo, QG.userInputsPerItem, QG.redDotInfo, yG, kG), UG = {
            shopInfo: bG,
            userInputsPerItem: ZG,
            redDotInfo: wG
          };
          if (null === LG || SG)
            if (bG[QG.selectedCategoryKey]) UG.selectedCategoryKey = QG.selectedCategoryKey;
            else {
              const GG = ZS(bG);
              UG.selectedCategoryKey = GG.length > 0 ? GG[0] : null
            }
          else UG.selectedCategoryKey = LG;
          return 0 === Object.keys(bG).length && SG && iG.e.set({
            openEverythingMenuName: null
          }), UG
        },
        sG = (GG, bG, ZG) => {
          const wG = QG.selectedCategoryKey,
            SG = QL(wG, GG),
            LG = null !== ZG && void 0 !== ZG ? ZG : QG.userInputsPerItem[SG],
            yG = {
              categoryKey: wG,
              itemKey: GG,
              userInput: LG
            };
          if (JG.current = wG, bG.isRewardedAd) {
            if (Date.now() - EG.current < 5e3) return;
            (0, db.bb)((() => {
              var ZG, wG, LG;
              console.log("bought rewarded ad");
              const kG = yG.categoryKey ? null === (ZG = uG.current.shopInfo[yG.categoryKey]) || void 0 === ZG ? void 0 : ZG.items[GG] : null;
              if (!kG || !kG.isRewardedAd) return void console.warn("Shop item no longer valid or a rewarded ad, early out");
              (null === (wG = bG.userInput) || void 0 === wG ? void 0 : wG.type) === (null === kG || void 0 === kG || null === (LG = kG.userInput) || void 0 === LG ? void 0 : LG.type) ? (yG.userInput = uG.current.userInputsPerItem[SG], rG.gameBridge.send("buyShopItem", yG), bG.onBoughtMessage && PG(bG.onBoughtMessage)) : console.warn("Shop item input type changed, early out")
            })), EG.current = Date.now()
          } else {
            rG.gameBridge.send("buyShopItem", yG), jG({
              awaitingPurchase: !0
            }), clearTimeout(oG.current), oG.current = setTimeout((() => {
              XG.current = null, jG({
                awaitingPurchase: !1
              })
            }), 1e3);
            const GG = (0, ew.d)(bG, LG);
            if (XG.current = null, !isNaN(GG) && KL(QG.currencyAmounts, bG.currency)) {
              0 !== GG && (XG.current = {
                currency: bG.currency,
                amountBefore: QG.currencyAmounts[bG.currency].amount
              });
              const ZG = {
                ...QG.currencyAmounts
              };
              ZG[bG.currency].amount -= GG, jG({
                currencyAmounts: ZG
              })
            }
            bG.onBoughtMessage && PG(bG.onBoughtMessage)
          }
        },
        qG = (GG, bG) => {
          if (null === bG || !GG.shopInfo[bG]) return GG;
          let ZG = GG.redDotInfo;
          return ZG.categoryHasRedDot(bG) && (ZG.updateCategoryRedDot(bG, !1), ZG = ZG.shallowCopy()), {
            ...GG,
            selectedCategoryKey: bG,
            redDotInfo: ZG
          }
        },
        nG = GG => {
          KG((bG => qG(bG, GG)))
        };
      (0, eb.g)(Bw.m, (() => {
        KG((GG => {
          const bG = (0, Bw.n)(ZS(GG.shopInfo), GG.selectedCategoryKey, (bG => (0, Bw.j)(GG.shopInfo[bG].items)));
          return bG === GG.selectedCategoryKey ? GG : qG(GG, bG)
        }))
      })), (0, eb.g)("showShopFromServer", (GG => {
        let {
          toggle: bG,
          UG: ZG
        } = GG;
        ZG && nG(ZG), 0 === Object.keys(QG.shopInfo).length || bG && SG ? iG.e.set({
          openEverythingMenuName: null
        }) : iG.e.set({
          openEverythingMenuName: Jb.u.SHOP
        })
      })), (0, eb.g)("closeShopOnDamaged", (() => {
        SG && iG.e.set({
          openEverythingMenuName: null
        })
      })), (0, eb.g)("overShopInfo", (GG => {
        PG(GG)
      })), (0, hG.h)("currencyAmounts", (GG => {
        var bG;
        const ZG = XG.current;
        ZG && (null === GG || void 0 === GG || null === (bG = GG[ZG.currency]) || void 0 === bG ? void 0 : bG.amount) === ZG.amountBefore ? jG({
          currencyAmounts: GG
        }) : (XG.current = null, jG({
          currencyAmounts: GG,
          awaitingPurchase: !1
        }))
      })), (0, hG.h)("shopInfo", (GG => {
        jG({
          ...MG(GG),
          awaitingPurchase: !1
        })
      }));
      const gG = (0, wG.useRef)({
        playerIds: yG,
        localPlayerId: kG
      });
      (0, wG.useEffect)((() => {
        gG.current.playerIds === yG && gG.current.localPlayerId === kG || (gG.current = {
          playerIds: yG,
          localPlayerId: kG
        }, KG((GG => {
          const bG = MG(GG.shopInfo);
          return {
            ...GG,
            ...bG
          }
        })))
      }), [yG, kG]);
      const eG = QG.selectedCategoryKey,
        RG = (GG, bG) => {
          var ZG, wG;
          return (isNaN(bG) || (0, kZ.L)(GG.currency) || KL(QG.currencyAmounts, GG.currency) && bG <= QG.currencyAmounts[GG.currency].amount) && (null === (ZG = GG.canBuy) || void 0 === ZG || ZG) && !(null !== (wG = GG.hidden) && void 0 !== wG && wG)
        },
        TG = (GG, bG) => {
          var ZG, wG, SG;
          const yG = QL(eG, GG),
            kG = QG.shopInfo[eG].items[GG],
            VG = QG.userInputsPerItem[yG],
            fG = (0, ew.d)(kG, VG),
            KG = RG(kG, fG),
            hG = kG.enchant,
            dG = hG ? (0, AG.Bb)(null !== (ZG = kG.customTitle) && void 0 !== ZG ? ZG : GG, {
              colour: AG.wb[hG.tier]
            }) : null !== (wG = kG.customTitle) && void 0 !== wG ? wG : GG,
            JG = bG => {
              const ZG = null !== bG && void 0 !== bG ? bG : VG,
                wG = void 0 !== bG ? (0, ew.d)(kG, bG) : fG;
              RG(kG, wG) && null !== ZG && sG(GG, kG, bG);
              let SG = QG.redDotInfo;
              SG.itemHasRedDot(eG, GG) && (SG.updateItemRedDot(eG, GG, !1), SG = SG.shallowCopy()), jG({
                redDotInfo: SG
              })
            };
          return (0, pG.jsxs)("div", {
            className: LG()("ShopItem", {
              ShopItemNoInput: !kG.userInput,
              ShopItemNoInputCanBuy: !kG.userInput && KG,
              ShopItemNoInputSelected: kG.isSelected,
              ShopItemEnchant: !!hG
            }),
            "data-pad-focusable": !kG.userInput || void 0,
            "data-pad-unavailable": !kG.userInput && !KG || void 0,
            "data-pad-repeat": null !== (SG = (0, Bw.d)(kG)) && void 0 !== SG ? SG : void 0,
            "data-pad-repeat-wait": QG.awaitingPurchase || void 0,
            onClick: () => {
              if (hG && FG.current) {
                if (WG !== yG) return void IG(yG);
                IG(null)
              }
              kG.userInput || JG()
            },
            onPointerDown: GG => {
              hG && (FG.current = (0, Tw.t)(GG))
            },
            onPointerEnter: GG => {
              hG && !(0, Tw.t)(GG) && IG(yG)
            },
            onPointerLeave: GG => {
              hG && !(0, Tw.t)(GG) && IG((GG => GG === yG ? null : GG))
            },
            style: {
              zIndex: Object.keys(QG.shopInfo[eG].items).length - bG
            },
            children: [QG.redDotInfo.itemHasRedDot(eG, GG) && (0, pG.jsx)(UG.e, {
              top: "-6px",
              right: "-6px"
            }), kG.badge && (0, pG.jsx)("div", {
              className: "ShopBadgeContainer",
              children: (0, pG.jsx)("div", {
                className: LG()("ShopBadgeMain", kG.badge.type),
                children: (0, pG.jsx)(tw.c, {
                  text: kG.badge.text
                })
              })
            }), (0, pG.jsx)("div", {
              className: "ShopItemLeft",
              children: kG.image && (0, pG.jsx)(dL, {
                item: kG,
                minWidth: 5,
                minHeight: 4.8
              })
            }), (0, pG.jsxs)("div", {
              className: "ShopItemRight",
              children: [(0, pG.jsxs)("div", {
                className: "ShopItemHeader",
                children: [(0, pG.jsx)("div", {
                  className: "ShopItemHeaderTitle",
                  children: (0, pG.jsx)(tw.c, {
                    text: dG
                  })
                }), (0, pG.jsx)("div", {
                  className: "ShopItemHeaderDescription",
                  children: (0, pG.jsx)(tw.c, {
                    text: kG.description
                  })
                })]
              }), kG.userInput && (0, pG.jsxs)("div", {
                className: "ShopItemInputsContainer",
                onClick: GG => {
                  GG.stopPropagation()
                },
                children: [(0, pG.jsx)(zL, {
                  item: kG,
                  currInput: VG,
                  updateInput: bG => {
                    ((GG, bG, ZG) => {
                      const wG = QL(GG, bG),
                        SG = {
                          ...QG.userInputsPerItem
                        };
                      SG[wG] = ZG, jG({
                        userInputsPerItem: SG
                      })
                    })(eG, GG, bG)
                  },
                  onSubmit: GG => {
                    JG(GG)
                  }
                }), ("dropdown" !== kG.userInput.type || !kG.userInput.autoSubmit) && (0, pG.jsx)(YG.d, {
                  className: "ItemCostButton",
                  disabled: !KG && null !== VG,
                  onClick: () => {
                    JG()
                  },
                  children: (0, pG.jsx)(rL, {
                    item: kG,
                    cost: fG,
                    currencyAmounts: QG.currencyAmounts
                  })
                })]
              })]
            }), !kG.userInput && (0, pG.jsx)("div", {
              className: "ShopItemNoInputCost",
              children: (0, pG.jsx)(rL, {
                item: kG,
                cost: fG,
                currencyAmounts: QG.currencyAmounts
              })
            }), hG && WG === yG && (0, pG.jsxs)("div", {
              className: "ShopItemEnchantInfo SmallTextBold",
              children: [(0, pG.jsx)(tw.c, {
                text: dG
              }), (0, pG.jsx)("div", {
                className: "ShopItemEnchantInfoDescription",
                children: (0, pG.jsx)(tw.c, {
                  text: (0, Rw.c)("", hG.enchantments, hG.enchantmentData)
                })
              })]
            })]
          }, yG)
        },
        HG = function(GG) {
          for (const bG in GG)
            if (GG[bG].smp) return !0;
          return !1
        }(QG.shopInfo),
        tG = ES(QG.shopInfo, eG);
      return (0, pG.jsx)(qw.d, {
        className: "Menu ShopBody",
        show: SG,
        children: 0 !== Object.keys(QG.shopInfo).length && (0, pG.jsxs)(pG.Fragment, {
          children: [(0, pG.jsxs)("div", {
            className: "MenuSideBar",
            children: [(0, pG.jsx)(fG, {
              items: ZS(QG.shopInfo).map((GG => {
                var bG;
                return {
                  id: GG,
                  title: null !== (bG = QG.shopInfo[GG].customTitle) && void 0 !== bG ? bG : GG,
                  redDot: QG.redDotInfo.categoryHasRedDot(GG)
                }
              })),
              link: VG ? {
                faIcon: "users-gear",
                title: "lobbyManageEntry:manageLobby",
                onClick: () => {
                  (0, bS.e)({
                    page: (0, bS.b)(),
                    source: "shop"
                  })
                }
              } : void 0,
              selectedItemId: eG,
              onClick: nG,
              padStartsOnTab: (0, Bw.h)(eG)
            }), (0, pG.jsx)("div", {
              className: "MenuSideBarFooter",
              children: QG.currencyAmounts && Object.keys(QG.currencyAmounts).map((GG => {
                var bG;
                const ZG = QG.currencyAmounts[GG];
                return ZG.hidden ? null : (0, pG.jsxs)("div", {
                  className: "ShopCurrencyDiv " + (vG ? "SmallText" : ""),
                  children: [(0, pG.jsxs)("div", {
                    className: "ShopCurrencyDetails",
                    children: [(0, pG.jsx)("div", {
                      className: "ShopCurrencyAmtIcon",
                      style: {
                        color: ZG.iconColour
                      },
                      children: (0, pG.jsx)(uL, {
                        iconName: ZG.icon
                      })
                    }), "\xa0", (0, gw.c)(ZG.amount, 6)]
                  }), (null === (bG = ZG.subtext) || void 0 === bG ? void 0 : bG.length) > 0 && (0, pG.jsx)("div", {
                    className: "ShopCurrencySubtext",
                    children: (0, pG.jsx)(tw.c, {
                      text: ZG.subtext
                    })
                  })]
                }, GG)
              }))
            })]
          }), (0, pG.jsxs)("div", {
            className: "MenuBody ShopMenuBody",
            children: [HG && (0, pG.jsx)(pL, {
              show: SG,
              shopInfo: QG.shopInfo,
              selectedCategoryKey: eG,
              buy: (GG, bG, ZG) => {
                sG(GG, bG, ZG)
              },
              canAfford: RG,
              message: QG.onBoughtInfo
            }), null === tG && (0, pG.jsxs)(pG.Fragment, {
              children: [(0, pG.jsx)("div", {
                className: LG()("ShopOnBoughtInfo", {
                  ShopOnBoughtInfoShow: null !== QG.onBoughtInfo
                }),
                children: (0, pG.jsx)(tw.c, {
                  text: dG.current
                })
              }), (0, pG.jsx)("div", {
                className: "ShopItemsWrapper",
                children: (0, pG.jsxs)("div", {
                  className: "ShopItemsInner",
                  children: [(null === (bG = QG.shopInfo[eG]) || void 0 === bG ? void 0 : bG.description) && (0, pG.jsx)("div", {
                    className: "ShopCategoryDescription",
                    children: (0, pG.jsx)(tw.c, {
                      text: QG.shopInfo[eG].description
                    })
                  }), SG && (0, pG.jsx)("div", {
                    className: "ShopItems",
                    ref: zG,
                    "data-pad-initial-area": !0,
                    children: ZS(null === (ZG = QG.shopInfo[eG]) || void 0 === ZG ? void 0 : ZG.items).map(((GG, bG) => TG(GG, bG)))
                  })]
                })
              })]
            })]
          })]
        })
      })
    }));

    function dL(GG) {
      let {
        item: bG,
        minWidth: ZG,
        minHeight: wG
      } = GG;
      const {
        image: SG,
        schematicId: LG,
        imageColour: yG
      } = bG;
      if (LG) return (0, pG.jsx)("div", {
        className: "ShopSchematic",
        style: {
          width: `${ZG}rem`,
          height: `${wG}rem`
        },
        children: (0, pG.jsx)(Dw.e, {
          game: {
            schematicId: LG
          }
        })
      });
      var UG, YG;
      if ((0, Hw.e)(SG)) return (0, pG.jsx)("div", {
        className: "ShopBlock",
        style: {
          minWidth: `${ZG}rem`,
          height: "0",
          minHeight: `${wG}rem`
        },
        children: (0, pG.jsx)(Hw.b, {
          itemName: SG,
          amount: null !== (UG = bG.amount) && void 0 !== UG ? UG : 0,
          amountFontSize: wG / 4 + "rem",
          enchantmentTier: null === (YG = bG.enchant) || void 0 === YG ? void 0 : YG.tier
        })
      });
      const VG = SG.slice(-4);
      return ".jpg" === VG || ".png" === VG ? (0, pG.jsx)(JL, {
        image: SG,
        minWidth: ZG
      }) : (0, pG.jsx)(kG.c, {
        name: SG,
        className: "SelectedItemImage",
        style: {
          color: yG
        }
      })
    }

    function JL(GG) {
      let {
        image: bG,
        minWidth: ZG
      } = GG;
      const {
        gameNameWithVariation: wG
      } = (0, jb.f)("connectedGame"), SG = bG.endsWith(".jpg");
      return (0, pG.jsx)("img", {
        className: LG()({
          ShopPixelImage: !SG
        }),
        style: {
          width: `${SG?1.6*ZG:ZG}rem`,
          height: "auto",
          fontSize: "1.25rem"
        },
        src: `/textures/games/${(0,AG.Yb)(wG)}/${bG}`,
        alt: bG,
        draggable: !1
      })
    }

    function rL(GG) {
      let {
        item: bG,
        cost: ZG,
        currencyAmounts: wG
      } = GG;
      const SG = !isNaN(ZG) && 0 !== ZG && KL(wG, bG.currency);
      let LG = null;
      return bG.buyButtonText ? LG = bG.buyButtonText : SG ? (LG = ZG, bG.sell && (LG = -1 * ZG), LG = LG.toString()) : 0 === ZG ? LG = "Free" : bG.isRewardedAd && (LG = "Watch ad"), (0, kZ.L)(LG) || " " === LG ? null : (0, pG.jsxs)("div", {
        className: "BuyItemCostAndIcon",
        children: [SG && (0, pG.jsx)("div", {
          style: {
            color: wG[bG.currency].iconColour
          },
          className: "BuyItemIcon",
          children: (0, pG.jsx)(uL, {
            iconName: wG[bG.currency].icon
          })
        }), (0, pG.jsx)("div", {
          className: "BuyItemCost",
          children: (0, pG.jsx)(tw.c, {
            text: LG
          })
        })]
      })
    }

    function zL(GG) {
      let {
        item: bG,
        currInput: ZG,
        updateInput: SG,
        onSubmit: LG
      } = GG;
      const {
        t: kG
      } = (0, yG.w)(), UG = (0, wG.useRef)(null);
      if ((0, wG.useEffect)((() => {
          const GG = UG.current;
          GG && GG.value !== ZG && document.activeElement !== GG && (GG.value = null !== ZG && void 0 !== ZG ? ZG : "")
        }), [ZG]), !bG.userInput) return null;
      let YG = bG.userInput;
      if (JG.featureFlags.sanitizeShopInput && "text" === bG.userInput.type && (YG = {
          type: "number",
          placeholderText: "Numbers Only"
        }), "text" === YG.type || "number" === YG.type) {
        var VG, fG;
        console.assert(void 0 !== ZG, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(bG)}`);
        const GG = "text" === YG.type && YG.wordCharsOnly;
        return (0, pG.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputTextWrapper",
          children: (0, pG.jsx)(oG.b, {
            className: "ShopItemUserInputText",
            placeholderText: kG(YG.placeholderText),
            defaultValue: ZG,
            domRef: UG,
            onValueChange: (bG, ZG) => {
              !0 === GG && (bG = (0, Ow.ib)(bG)), UG.current.value = bG, SG(bG)
            },
            onEnter: LG,
            type: YG.type
          }, (null !== (VG = YG.initialValue) && void 0 !== VG ? VG : "") + (null !== (fG = YG.placeholderText) && void 0 !== fG ? fG : ""))
        })
      }
      if ("dropdown" === YG.type) {
        console.assert(void 0 !== ZG, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(bG)}`);
        const GG = YG.autoSubmit;
        return (0, pG.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputDropdown",
          children: (0, pG.jsx)(ab.b, {
            options: YG.dropdownOptions.map((GG => (0, ew.h)(GG))),
            value: ZG,
            onChange: bG => {
              let {
                value: ZG
              } = bG;
              SG(ZG), GG && LG(ZG)
            }
          })
        })
      }
      return "player" === YG.type ? (0, pG.jsx)(EL, {
        userInput: YG,
        currInput: ZG,
        updateInput: SG
      }) : "color" === YG.type ? (0, pG.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputColor",
        children: (0, pG.jsx)("input", {
          type: "color",
          value: ZG,
          onChange: GG => {
            SG(GG.target.value)
          }
        })
      }) : null
    }

    function EL(GG) {
      let {
        userInput: bG,
        currInput: ZG,
        updateInput: wG
      } = GG;
      const SG = (0, jb.f)("players"),
        LG = (0, jb.f)("hiddenPlayerNames"),
        yG = (0, ew.k)(SG.ids, SG.localId, bG);
      return (0, pG.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputDropdown",
        children: (0, pG.jsx)(ab.b, {
          options: yG.map((GG => {
            const {
              name: bG
            } = SG.byId[GG];
            return {
              value: GG,
              label: null === bG ? "" : (0, Nw.g)(bG, LG)
            }
          })),
          value: ZG,
          onChange: GG => {
            let {
              value: bG
            } = GG;
            wG(bG)
          }
        })
      })
    }

    function oL(GG) {
      let {
        ids: bG
      } = GG;
      return bG
    }

    function XL(GG) {
      let {
        localId: bG
      } = GG;
      return bG
    }

    function uL(GG) {
      let {
        iconName: bG
      } = GG;
      return rG.gameBridge.lookup("isItemName", bG) ? (0, pG.jsx)(Hw.b, {
        itemName: bG,
        amount: 1
      }) : (0, pG.jsx)(kG.c, {
        name: bG,
        className: "2x"
      })
    }
    var iL = ZG(1579);
    const CL = (0, ZG(1359).i)((GG => GG.PadLobbyShortcuts)),
      WL = (0, wG.lazy)((() => Promise.resolve().then((() => ZG(4678))).then((GG => ({
        default: GG.Lobbyleaderboard
      }))))),
      mL = (0, wG.lazy)((() => ZG.e(223).then((() => ZG(41470))).then((GG => ({
        default: GG.LobbyManageView
      })))));

    function IL(GG) {
      let {
        show: bG
      } = GG;
      return bG ? (0, pG.jsx)(FL, {}) : null
    }

    function FL() {
      const GG = (0, GS.c)();
      return (0, pG.jsxs)(pG.Fragment, {
        children: [(0, pG.jsx)(CL, {}), (0, pG.jsxs)(wG.Suspense, {
          fallback: (0, pG.jsx)("div", {
            className: "CharacterCustomisationLoading",
            children: (0, pG.jsx)(XG.b, {})
          }),
          children: [GG && (0, pG.jsx)(mL, {
            leaderboard: (0, pG.jsx)(WL, {})
          }), !GG && (0, pG.jsx)(WL, {})]
        })]
      })
    }
    var vL = ZG(1501),
      aL = ZG(3022),
      cL = ZG(1702),
      lL = ZG(3067),
      jL = ZG(2667),
      PL = ZG(1428),
      ML = ZG(1396),
      AL = ZG(2999),
      sL = ZG(3013),
      qL = ZG(2328);
    const nL = "storeRecentGiftRecipients",
      gL = new Map;

    function eL() {
      try {
        const GG = VZ.h.getItem(nL);
        return Array.isArray(GG) ? GG.filter((GG => "string" === typeof(null === GG || void 0 === GG ? void 0 : GG.name) && GG.name.length > 0)).map((GG => ({
          name: GG.name,
          cosmetics: GG.cosmetics && "object" === typeof GG.cosmetics ? GG.cosmetics : null
        }))) : []
      } catch {
        return []
      }
    }

    function RL(GG) {
      var bG;
      const [ZG, SG] = (0, wG.useState)(""), [LG, yG] = (0, wG.useState)("search"), [kG, UG] = (0, wG.useState)(null), [YG, VG] = (0, wG.useState)(null), pG = (0, wG.useRef)(null), fG = (0, wG.useRef)(null);
      (0, wG.useEffect)((() => () => {
        pG.current && clearTimeout(pG.current)
      }), []);
      const QG = null !== (bG = null === kG || void 0 === kG ? void 0 : kG.name) && void 0 !== bG ? bG : null;

      function KG() {
        pG.current && (clearTimeout(pG.current), pG.current = null)
      }(0, wG.useEffect)((() => {
        if (null === QG || GG === IG.NULL_USER_CONTEXT) return;
        const bG = QG.toLowerCase();
        if (bG === GG.getPlayerName().toLowerCase()) return void VG({
          name: QG,
          result: {
            giftRecipientFound: !1,
            giftRecipientError: "store:giftRecipientIsYou"
          }
        });
        const ZG = gL.get(bG);
        if (ZG) return void VG({
          name: QG,
          result: ZG
        });
        let wG = !1;
        return async function(GG, bG) {
          try {
            const ZG = await (0, IG.postJsonWithMetricsCookiesAndJsonResponse)(`${hb.clientSideServerUrls.indexUrl}/index/store/gift-recipient`, {
              giftRecipientName: bG
            }, {
              retries: 1
            }, GG.getMetricsCookies());
            if ("boolean" !== typeof(null === ZG || void 0 === ZG ? void 0 : ZG.giftRecipientFound)) throw new Error(`Unexpected gift recipient lookup response: ${JSON.stringify(ZG)}`);
            return ZG
          } catch (ZG) {
            return console.error("Failed to look up gift recipient:", ZG), {
              giftRecipientFound: !1,
              giftRecipientError: "store:giftRecipientLookupFailed"
            }
          }
        }(GG, QG).catch((GG => (console.error("Gift recipient lookup failed:", GG), {
          giftRecipientFound: !1,
          giftRecipientError: "store:giftRecipientLookupFailed"
        }))).then((GG => {
          !0 !== GG.giftRecipientFound && "store:giftRecipientLookupFailed" === GG.giftRecipientError || gL.set(bG, GG), wG || VG({
            name: QG,
            result: GG
          })
        })), () => {
          wG = !0
        }
      }), [QG, GG]);
      const hG = (0, wG.useMemo)((() => {
        const GG = ZG.trim();
        if (!GG) return {
          status: "none"
        };
        if (!kG || kG.name !== GG || (null === YG || void 0 === YG ? void 0 : YG.name) !== kG.name) return {
          status: "pending",
          name: GG
        };
        const bG = YG.result;
        return !1 === bG.giftRecipientFound ? {
          status: "error",
          name: kG.name,
          error: bG.giftRecipientError
        } : {
          status: "found",
          name: bG.giftRecipientName,
          ownedPacks: bG.giftRecipientOwnedPacks,
          hasSuperRank: bG.giftRecipientHasSuperRank,
          isSubscriber: bG.giftRecipientIsSubscriber
        }
      }), [ZG, kG, YG]);
      (0, wG.useEffect)((() => {
        "found" === hG.status && "typed" === (null === kG || void 0 === kG ? void 0 : kG.source) && fG.current !== hG.name && (fG.current = hG.name, (0, bb.reportAnalyticsClick)({
          id: "store.gift_recipient",
          value: "typed"
        }))
      }), [hG, kG]);
      const dG = (null === YG || void 0 === YG ? void 0 : YG.name) === (null === kG || void 0 === kG ? void 0 : kG.name) ? null === YG || void 0 === YG ? void 0 : YG.result : null,
        JG = !0 === (null === dG || void 0 === dG ? void 0 : dG.giftRecipientFound) ? dG.giftRecipientCosmetics : null;
      return {
        query: ZG,
        via: LG,
        recipient: hG,
        recipientCosmetics: JG,
        type: function(GG) {
          SG(GG), yG("search"), KG();
          const bG = GG.trim();
          bG ? pG.current = setTimeout((() => {
            UG({
              name: bG,
              source: "typed"
            })
          }), 400) : UG(null)
        },
        choose: function(GG, bG) {
          KG(), SG(GG), yG("typed" === bG ? "search" : "prefilled" === bG ? "prefilled" : "suggestion"), UG({
            name: GG,
            source: bG
          }), "typed" !== bG && "prefilled" !== bG && (0, bb.reportAnalyticsClick)({
            id: "store.gift_recipient",
            value: bG
          })
        },
        clear: function() {
          KG(), SG(""), yG("search"), UG(null)
        },
        recordGift: function(GG, bG) {
          ! function(GG) {
            gL.delete(GG.toLowerCase())
          }(GG), VG((ZG => {
            if (!ZG || ZG.name.toLowerCase() !== GG.toLowerCase() || !0 !== ZG.result.giftRecipientFound || "superRank" === bG) return ZG;
            const wG = ZG.result.giftRecipientOwnedPacks;
            return {
              ...ZG,
              result: {
                ...ZG.result,
                giftRecipientOwnedPacks: wG.includes(bG) ? wG : [...wG, bG]
              }
            }
          }))
        }
      }
    }
    var TL = ZG(2322),
      HL = ZG(4683),
      tL = ZG(252),
      DL = ZG(3104);
    const NL = ["pointerdown", "pointermove", "keydown", "wheel", "touchstart", "scroll", "blur", "focus"];
    var OL = ZG(2281),
      xL = ZG(580),
      BL = ZG(2359),
      Gy = ZG(2575);

    function by(GG) {
      let {
        cosmetics: bG
      } = GG;
      return (0, pG.jsx)("span", {
        className: "StoreRecipientAvatar",
        children: (0, pG.jsx)(BL.c, {
          cosmetics: bG
        })
      })
    }

    function Zy(GG, bG) {
      var ZG, wG;
      const SG = null !== (ZG = GG.friend) && void 0 !== ZG ? ZG : {
        isError: !1,
        name: GG.name,
        ranks: [],
        cosmetics: null !== (wG = GG.cosmetics) && void 0 !== wG ? wG : {},
        nameColour: xL.d,
        location: {
          status: "noGamePlayed"
        }
      };
      return bG ? {
        ...SG,
        cosmetics: bG
      } : SG
    }

    function wy(GG) {
      let {
        pending: bG
      } = GG;
      return (0, pG.jsx)("span", {
        className: "StoreRecipientLoader",
        children: bG && (0, pG.jsx)(XG.b, {})
      })
    }

    function Sy(GG) {
      var bG;
      let {
        selfName: ZG,
        giftRecipient: SG,
        suggestionsVersion: UG,
        pulseSignal: VG,
        disabled: fG
      } = GG;
      const {
        t: QG
      } = (0, yG.w)(), KG = (0, eG.k)(), hG = (0, wG.useRef)(null), dG = (0, wG.useRef)(null), {
        query: rG,
        via: zG,
        recipient: EG,
        recipientCosmetics: XG
      } = SG, uG = (0, qL.o)(rG), iG = (0, wG.useMemo)((() => {
        const GG = JG.featureFlags.useSocialFeatures ? KG.friends.filter((GG => !GG.isError)) : [];
        return (0, qL.g)({
          onlineFriends: (0, eG.e)(GG),
          recentRecipients: eL(),
          friends: GG,
          selfName: ZG,
          max: 8
        })
      }), [KG.friends, ZG, UG]), CG = rG.trim().toLowerCase(), WG = "search" !== zG && CG ? iG.find((GG => GG.name.toLowerCase() === CG)) : void 0, mG = WG && "prefilled" === zG ? [WG, ...iG.filter((GG => GG !== WG))] : iG, IG = "" !== CG && !WG, FG = IG ? rG : "", vG = mG.length > 0;
      (0, wG.useEffect)((() => {
        hG.current && hG.current.value !== FG && (hG.current.value = FG)
      }), [FG]), (0, wG.useEffect)((() => {
        hG.current && (hG.current.disabled = fG)
      }), [fG, VG]);
      const aG = (0, wG.useRef)(0);

      function lG() {
        "self" !== uG && (0, bb.reportAnalyticsClick)({
          id: "store.mode",
          value: "self"
        }), SG.clear()
      }

      function jG(GG) {
        var bG, ZG;
        if (fG) return;
        if (" " === GG.key || "Enter" === GG.key) return GG.preventDefault(), void GG.currentTarget.click();
        const wG = Array.from(null !== (bG = null === (ZG = dG.current) || void 0 === ZG ? void 0 : ZG.querySelectorAll("[role=radio]")) && void 0 !== bG ? bG : []),
          SG = wG.indexOf(GG.currentTarget);
        let LG;
        "ArrowRight" === GG.key || "ArrowDown" === GG.key ? LG = wG[(SG + 1) % wG.length] : "ArrowLeft" === GG.key || "ArrowUp" === GG.key ? LG = wG[(SG - 1 + wG.length) % wG.length] : "Home" === GG.key ? LG = wG[0] : "End" === GG.key && (LG = wG[wG.length - 1]), LG && (GG.preventDefault(), LG.focus(), LG.click())
      }(0, wG.useEffect)((() => {
        var GG;
        VG > aG.current && !fG && (aG.current = VG, null === (GG = hG.current) || void 0 === GG || GG.focus())
      }), [VG, fG]);
      const PG = "self" === uG,
        MG = null !== (bG = null === WG || void 0 === WG ? void 0 : WG.name) && void 0 !== bG ? bG : null,
        AG = "error" === EG.status ? EG.error : null,
        sG = "store:giftRecipientLookupFailed" === AG;
      return (0, pG.jsxs)("div", {
        className: LG()("StoreRecipientStrip", {
          StoreRecipientStripDisabled: fG,
          StoreRecipientStripNoChips: !vG
        }),
        children: [(0, pG.jsx)("span", {
          className: "StoreRecipientLabel",
          "aria-hidden": !0,
          children: QG("store:buyingFor")
        }), (0, pG.jsxs)("div", {
          ref: dG,
          className: "StoreRecipientRadios",
          role: "radiogroup",
          "aria-label": QG("store:whoIsItFor"),
          children: [(0, pG.jsxs)("div", {
            role: "radio",
            "data-pad-focusable": !0,
            "aria-checked": PG,
            tabIndex: fG || !PG && null !== MG ? -1 : 0,
            className: LG()("StoreRecipientMe", {
              StoreRecipientChecked: PG
            }),
            onClick: () => {
              fG || lG()
            },
            onKeyDown: jG,
            children: [(0, pG.jsx)(kG.c, {
              name: "user"
            }), " ", QG("store:me")]
          }), vG && (0, pG.jsx)("div", {
            className: "StoreRecipientChips",
            children: mG.map((GG => {
              const bG = GG === WG;
              return (0, pG.jsx)("div", {
                role: "radio",
                "data-pad-focusable": !0,
                "aria-checked": bG,
                tabIndex: !fG && bG ? 0 : -1,
                title: GG.name,
                className: LG()("StoreRecipientChip", {
                  StoreRecipientChecked: bG
                }),
                onClick: () => {
                  fG || function(GG) {
                    "gift" !== uG && (0, bb.reportAnalyticsClick)({
                      id: "store.mode",
                      value: "gift"
                    }), SG.choose(GG.name, GG.kind)
                  }(GG)
                },
                onKeyDown: jG,
                children: (0, pG.jsx)(Gy.h, {
                  playerSocialPreview: Zy(GG, bG ? XG : null),
                  opensProfileCard: !1,
                  isFriend: null !== GG.friend,
                  hideFriendBadge: !0,
                  showLocation: null !== GG.friend,
                  status: null === GG.friend ? null : void 0,
                  trailing: bG ? (0, pG.jsx)(wy, {
                    pending: "pending" === EG.status
                  }) : void 0
                })
              }, GG.name)
            }))
          })]
        }), (0, pG.jsxs)("div", {
          className: LG()("StoreRecipientSearch", {
            StoreRecipientChecked: IG,
            StoreRecipientSearchPulse: VG > 0 && !IG,
            StoreRecipientSearchError: null !== AG && !sG
          }),
          onClick: () => {
            var GG;
            null === (GG = hG.current) || void 0 === GG || GG.focus()
          },
          children: [IG && "found" === EG.status && XG && (0, pG.jsx)(by, {
            cosmetics: XG
          }), !(IG && "found" === EG.status && XG) && (0, pG.jsx)(kG.c, {
            name: "magnifying-glass",
            className: "StoreRecipientSearchIcon"
          }), (0, pG.jsx)(oG.b, {
            className: "StoreRecipientSearchInput",
            domRef: hG,
            placeholderText: QG("store:searchName"),
            defaultValue: FG,
            maxLength: cG.g,
            onValueChange: function(GG) {
              "gift" !== uG && GG.trim() && (0, bb.reportAnalyticsClick)({
                id: "store.mode",
                value: "gift"
              }), SG.type(GG)
            },
            onEnter: () => {
              var GG;
              const bG = null === (GG = hG.current) || void 0 === GG ? void 0 : GG.value.trim();
              bG && SG.choose(bG, "typed")
            },
            blurOnEnter: !0
          }), IG && (0, pG.jsx)(wy, {
            pending: "pending" === EG.status
          }), IG && (0, pG.jsx)("div", {
            ...(0, YG.P)({
              disabled: fG
            }),
            "aria-label": QG("store:clearRecipient"),
            title: QG("store:clearRecipient"),
            className: "StoreRecipientClear",
            onClick: GG => {
              GG.stopPropagation(), fG || lG()
            },
            children: (0, pG.jsx)(kG.c, {
              name: "xmark"
            })
          })]
        }, VG), AG && (0, pG.jsx)("div", {
          className: LG()("StoreRecipientPopover", {
            StoreRecipientPopoverSoft: sG
          }),
          role: "status",
          children: QG(AG)
        })]
      })
    }
    var Ly = ZG(2320),
      yy = ZG(2247),
      ky = ZG(3566),
      Uy = ZG(3107),
      Yy = ZG(2290);
    const Vy = ZG.p + "static/media/superRankPreviewPoster.e64783181b692cc31e08.webp";

    function py() {
      (0, Yy.i)(Vy, {
        lowPriority: !1
      })
    }

    function fy(GG) {
      let {
        onBack: bG,
        cta: ZG,
        recipient: SG,
        afterCta: LG
      } = GG;
      const {
        t: UG
      } = (0, yG.w)(), [VG, fG] = (0, wG.useState)("starting"), QG = (0, wG.useRef)(null), KG = (0, Hb.c)(), hG = (0, wG.useRef)(null), dG = (0, wG.useCallback)((() => {
        const GG = QG.current;
        null !== GG.error && GG.load();
        const bG = GG.play();
        hG.current = bG, bG.catch((GG => {
          (0, ky.d)("Failed to play Super Rank video", GG), KG.current && hG.current === bG && fG("failed")
        }))
      }), [KG]);
      return (0, wG.useEffect)((() => {
        const GG = QG.current;
        let bG;

        function ZG() {
          clearTimeout(bG), bG = setTimeout(dG, 3e3)
        }
        return dG(), GG.addEventListener("ended", ZG), () => {
          clearTimeout(bG), GG.removeEventListener("ended", ZG)
        }
      }), [dG]), (0, pG.jsxs)("div", {
        className: "StoreSuperRankDetail",
        children: [(0, pG.jsxs)("div", {
          className: "StoreDetailHeader",
          children: [(0, pG.jsx)(YG.b, {
            className: "StoreDetailBackButton",
            onClick: bG,
            padBack: !0,
            children: UG("general:back")
          }), (0, pG.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, pG.jsx)(kG.c, {
              name: "bolt"
            }), " ", UG("homePage:superRank")]
          }), SG]
        }), (0, pG.jsxs)("div", {
          className: "StoreSuperRankDetailBody",
          children: [(0, pG.jsxs)("div", {
            className: "StoreSuperRankVideo",
            children: [(0, pG.jsx)("video", {
              ref: QG,
              src: `${hb.clientSideServerUrls.staticUrl}/videos/SuperRankPreview.mp4`,
              poster: Vy,
              muted: !0,
              playsInline: !0,
              controls: "playing" === VG,
              onPlaying: () => {
                fG("playing")
              },
              onError: () => {
                fG("failed")
              }
            }), ("failed" === VG || "loading" === VG) && (0, pG.jsx)("div", {
              className: "StoreSuperRankPlay",
              children: (0, pG.jsx)(YG.d, {
                ariaLabel: UG("general:play"),
                loading: "loading" === VG,
                onClick: () => {
                  fG("loading"), dG()
                },
                touchPressOn: "pointerup",
                children: (0, pG.jsx)(kG.c, {
                  name: "play"
                })
              })
            })]
          }), (0, pG.jsxs)("div", {
            className: "StoreSuperRankDetailSide",
            children: [(0, pG.jsx)("div", {
              className: "StoreSuperRankDetailTable",
              children: (0, pG.jsx)(Uy.e, {})
            }), (0, pG.jsxs)("div", {
              className: "StoreTileActions",
              children: [ZG, LG]
            })]
          })]
        })]
      })
    }
    var Qy = ZG(2595),
      Ky = ZG(3507),
      hy = ZG(3087),
      dy = ZG(3096);
    const Jy = [xL.o.yellow, xL.o.green, xL.o.aqua, xL.o.blue, xL.o.purple, xL.o.red];

    function ry(GG) {
      return "needsRecipient" === GG || "lookingUp" === GG || "gift" === GG || "recipientOwns" === GG || "recipientSharesOwned" === GG || "recipientSubscribed" === GG
    }

    function zy(GG) {
      const {
        onKeyDown: bG,
        ...ZG
      } = (0, YG.P)();
      return {
        ...ZG,
        "aria-label": GG,
        onKeyDown: GG => {
          GG.target === GG.currentTarget && (null === bG || void 0 === bG || bG(GG))
        }
      }
    }

    function Ey(GG) {
      let {
        text: bG
      } = GG;
      return (0, pG.jsx)("span", {
        className: "StoreRainbowText",
        children: Array.from(bG).map(((GG, bG) => (0, pG.jsx)("span", {
          style: {
            color: Jy[bG % Jy.length]
          },
          children: GG
        }, bG)))
      })
    }
    const oy = {
      recipientOwns: "store:alreadyOwns",
      sharesOwned: "store:sharesOwned",
      recipientSharesOwned: "store:recipientSharesOwned",
      subscribed: "store:subscribed",
      recipientSubscribed: "store:recipientSubscribed"
    };

    function Xy(GG) {
      let {
        state: bG,
        item: ZG,
        price: wG,
        busy: SG,
        highlight: UG = !1,
        onAct: VG,
        onNeedRecipient: fG,
        onLogin: QG
      } = GG;
      const {
        t: KG
      } = (0, yG.w)(), hG = "superRank" === ZG ? jG.j.product.days : null, dG = GG => null === hG ? KG(GG ? "general:gift" : "general:buy") : KG(GG ? "store:giftDays" : "store:buyDays", {
        days: hG
      }), JG = (GG, bG) => {
        const ZG = (0, pG.jsxs)(pG.Fragment, {
          children: [null === GG && (0, pG.jsx)("span", {
            className: "StoreCtaLabel StoreCtaLabelPending"
          }), null !== GG && (0, pG.jsx)("span", {
            className: "StoreCtaLabel",
            title: GG,
            children: GG
          })]
        });
        return null !== hG ? (0, pG.jsxs)(pG.Fragment, {
          children: [bG && (0, pG.jsx)("span", {
            className: "StoreCtaIcon",
            children: bG
          }), ZG, (0, pG.jsxs)("span", {
            className: "StoreCtaPrice",
            children: ["\xb7", (0, pG.jsx)(yy.c, {
              amount: wG
            })]
          })]
        }) : (0, pG.jsxs)(pG.Fragment, {
          children: [(0, pG.jsxs)("span", {
            className: "StoreCtaLead",
            children: [ZG, "\xb7"]
          }), (0, pG.jsxs)("span", {
            className: "StoreCtaPrice",
            children: [bG, (0, pG.jsx)(yy.c, {
              amount: wG
            })]
          })]
        })
      };
      let rG;
      switch (bG) {
        case "pending":
          rG = (0, pG.jsx)(YG.k, {
            className: "StoreCtaButton",
            disabled: !0,
            children: JG(null)
          });
          break;
        case "login":
          rG = (0, pG.jsx)(YG.k, {
            className: "StoreCtaButton",
            onClick: QG,
            children: JG(dG(!1))
          });
          break;
        case "owned":
          rG = (0, pG.jsx)(YG.h, {
            className: "StoreCtaButton",
            onClick: () => {
              iG.e.set({
                openEverythingMenuName: Jb.u.CUSTOMISATION
              })
            },
            children: (0, pG.jsxs)("span", {
              className: "StoreCtaLabel",
              children: [(0, pG.jsx)(kG.c, {
                name: "shirt"
              }), " ", KG("store:equip")]
            })
          });
          break;
        case "recipientOwns":
        case "sharesOwned":
        case "recipientSharesOwned":
        case "subscribed":
        case "recipientSubscribed":
          rG = (0, pG.jsx)(YG.k, {
            className: "StoreCtaButton",
            disabled: !0,
            children: (0, pG.jsx)("span", {
              className: "StoreCtaLabel",
              children: KG(oy[bG])
            })
          });
          break;
        case "needsRecipient":
        case "lookingUp":
        case "gift":
          rG = (0, pG.jsx)(YG.k, {
            className: "StoreCtaButton",
            disabled: "needsRecipient" === bG || null === wG,
            loading: "lookingUp" === bG || SG,
            onClick: VG,
            analyticsClick: {
              id: "store.gift",
              value: ZG
            },
            children: JG(dG(!0), qL.b)
          });
          break;
        case "buy":
        case "recharge":
          rG = (0, pG.jsx)(YG.k, {
            className: "StoreCtaButton",
            loading: SG,
            disabled: null === wG,
            onClick: VG,
            analyticsClick: {
              id: "store.buy",
              value: ZG
            },
            children: JG(dG(!1))
          })
      }
      return (0, pG.jsx)("div", {
        className: LG()("StoreCta", {
          StoreCtaHighlight: UG,
          StoreCtaLabelFirst: null !== hG
        }),
        onClick: GG => {
          GG.stopPropagation(), "needsRecipient" === bG && fG()
        },
        children: rG
      })
    }

    function uy() {
      const {
        t: GG
      } = (0, yG.w)();
      return (0, pG.jsxs)("ul", {
        className: "StorePerks",
        children: [(0, pG.jsxs)("li", {
          children: [(0, pG.jsx)(kG.c, {
            name: "check"
          }), (0, pG.jsx)(Ey, {
            text: GG("store:colourfulNames")
          })]
        }), (0, pG.jsxs)("li", {
          children: [(0, pG.jsx)(kG.c, {
            name: "check"
          }), GG("store:perkCapes")]
        }), (0, pG.jsxs)("li", {
          children: [(0, pG.jsx)(kG.c, {
            name: "check"
          }), GG("store:perkNoAdverts")]
        }), (0, pG.jsxs)("li", {
          children: [(0, pG.jsx)(kG.c, {
            name: "check"
          }), GG("store:perkFriends", {
            count: (0, BG.c)(["super"])
          })]
        })]
      })
    }

    function iy(GG) {
      let {
        daysLeft: bG,
        totalDays: ZG,
        urgent: wG
      } = GG;
      const {
        t: SG
      } = (0, yG.w)(), kG = ZG > 0 ? Math.min(1, Math.max(.03, bG / ZG)) : 1;
      return (0, pG.jsxs)("div", {
        className: LG()("StoreSuperRankMeterArea", {
          StoreSuperRankMeterUrgent: wG
        }),
        children: [(0, pG.jsx)("span", {
          className: "StoreSuperRankDaysLeft",
          children: 1 === bG ? SG("store:oneDayLeft") : SG("store:daysLeft", {
            days: bG
          })
        }), (0, pG.jsx)("div", {
          className: "StoreSuperRankMeter",
          children: (0, pG.jsx)("i", {
            style: {
              width: 100 * kG + "%"
            }
          })
        })]
      })
    }

    function Cy(GG) {
      var bG;
      let {
        state: ZG,
        urgent: wG,
        daysLeft: SG,
        totalDays: UG,
        recipientHasSuperRank: YG,
        busy: VG,
        highlight: fG,
        onOpen: QG,
        onAct: KG,
        onNeedRecipient: hG,
        onLogin: dG
      } = GG;
      const {
        t: JG
      } = (0, yG.w)(), rG = ry(ZG), {
        days: zG
      } = jG.j.product, EG = JG("store:recipientHasSuperRank", {
        giftDays: zG
      }), oG = null === (bG = OG("subscribed" === ZG)) || void 0 === bG ? void 0 : bG.text;
      return (0, pG.jsxs)("div", {
        className: LG()("StoreTile StoreSuperRankTile", {
          StoreTileGift: rG,
          StoreSuperRankTileUrgent: "recharge" === ZG && wG,
          StoreSuperRankTileWithChip: YG,
          StoreSuperRankTileGiftReady: "gift" === ZG
        }),
        ...zy(JG("homePage:superRank")),
        "data-store-item": "superRank",
        onPointerEnter: py,
        onFocus: py,
        onClick: QG,
        children: [(0, pG.jsx)("div", {
          className: "StoreSuperRankArt",
          style: {
            backgroundImage: `url(${OL.c})`
          }
        }), rG && (0, pG.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, pG.jsxs)("div", {
          className: "StoreTileContent",
          children: [YG && (0, pG.jsx)("span", {
            className: "StoreChip StoreChipGift",
            title: EG,
            children: EG
          }), (0, pG.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, pG.jsx)(kG.c, {
              name: "bolt"
            }), " ", JG("homePage:superRank")]
          }), rG && (0, pG.jsx)("div", {
            className: "StoreTilePitch",
            children: JG("store:giftPitch", {
              days: zG
            })
          }), "recharge" === ZG && (0, pG.jsx)(iy, {
            daysLeft: SG,
            totalDays: UG,
            urgent: wG
          }), oG && (0, pG.jsx)("div", {
            className: "StoreSuperRankMeterArea",
            children: (0, pG.jsx)("span", {
              className: "StoreSuperRankDaysLeft",
              children: oG
            })
          }), (0, pG.jsx)(uy, {}), (0, pG.jsxs)("div", {
            className: "StoreTileActions",
            children: [(0, pG.jsx)(Xy, {
              state: ZG,
              item: "superRank",
              price: jG.j.price,
              busy: VG,
              highlight: fG,
              onAct: KG,
              onNeedRecipient: hG,
              onLogin: dG
            }), "needsRecipient" === ZG && (0, pG.jsx)("span", {
              className: "StoreTileNote StoreTileNoteGift",
              children: JG("store:pickRecipientFirst")
            }), "recharge" === ZG && wG && (0, pG.jsx)("span", {
              className: "StoreTileNote StoreSuperRankEnding",
              children: 1 === SG ? JG("store:endsInOneDay") : JG("store:endsInDays", {
                days: SG
              })
            })]
          })]
        })]
      })
    }
    const Wy = {
      common: "StorePackTileCommon",
      rare: "StorePackTileRare",
      epic: "StorePackTileEpic",
      legendary: "StorePackTileLegendary",
      mythic: "StorePackTileMythic"
    };

    function my(GG) {
      var bG;
      let {
        pack: ZG,
        state: SG,
        busy: UG,
        onOpen: YG,
        onAct: VG,
        onNeedRecipient: fG,
        onLogin: QG
      } = GG;
      const {
        t: KG
      } = (0, yG.w)(), hG = vL.c[ZG], dG = AL.h[ZG], JG = (0, OL.i)(ZG), rG = (0, wG.useRef)(null);
      (0, hy.m)(ZG, rG);
      const zG = ry(SG),
        EG = null !== (bG = hG.displayName) && void 0 !== bG ? bG : ZG,
        oG = (0, Ky.d)((() => {
          (0, Qy.c)();
          const GG = (0, hy.g)(ZG);
          void 0 !== GG && (0, Yy.i)((0, hy.d)(GG))
        })),
        [XG] = (0, wG.useState)(DL.j);
      return (0, pG.jsxs)("div", {
        className: LG()("StoreTile StorePackTile", Wy[hG.tier], {
          StorePackTileOwned: "owned" === SG,
          StorePackTileRecipientOwns: "recipientOwns" === SG,
          StoreTileGift: zG
        }),
        ...zy(EG),
        ref: rG,
        "data-store-item": ZG,
        onClick: YG,
        onPointerMove: GG => {
          "mouse" !== GG.pointerType || 0 === GG.movementX && 0 === GG.movementY || XG || oG.start()
        },
        onPointerLeave: oG.cancel,
        children: [dG && (0, pG.jsx)(dG, {}), (0, pG.jsx)("div", {
          className: "StorePackCharacters",
          children: JG.map((GG => (0, pG.jsx)("div", {
            className: "StorePackCharacter",
            style: {
              backgroundImage: `url(${(0,OL.g)(GG)})`
            }
          }, GG)))
        }), (0, pG.jsx)("div", {
          className: "StoreTileScrim"
        }), zG && (0, pG.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, pG.jsxs)("div", {
          className: "StoreTileContent",
          children: [(0, pG.jsx)("div", {
            className: "StoreTileTitle",
            children: EG
          }), (0, pG.jsxs)("div", {
            className: "StoreTileMeta",
            children: [(0, pG.jsx)(dy.e, {
              tier: hG.tier
            }), " \xb7 ", KG("store:itemCount", {
              count: (0, Ly.h)(ZG)
            }), "owned" === SG && (0, pG.jsxs)("span", {
              className: "StoreTileOwned",
              children: [" \xb7 ", (0, pG.jsx)(kG.c, {
                name: "check"
              }), " ", KG("general:owned")]
            })]
          }), (0, pG.jsx)(Xy, {
            state: SG,
            item: ZG,
            price: (0, jG.e)(ZG),
            busy: UG,
            onAct: VG,
            onNeedRecipient: fG,
            onLogin: QG
          })]
        })]
      })
    }
    var Iy = ZG(3071),
      Fy = ZG(1493),
      vy = ZG(1398),
      ay = ZG(3543);

    function cy() {
      return (0, pG.jsx)("span", {
        className: "NewBadge",
        children: "NEW"
      })
    }
    var ly = ZG(1304),
      jy = ZG(1509),
      Py = ZG(34515);

    function My(GG) {
      let {
        character: bG,
        drawn: ZG,
        onDrawn: SG
      } = GG;
      const yG = (0, wG.useRef)(null),
        kG = (0, Py.c)(bG);
      return (0, pG.jsx)("div", {
        className: LG()("StoreCharacterLive", {
          StoreCharacterLiveDrawn: ZG
        }),
        children: (0, pG.jsx)(wG.Suspense, {
          fallback: null,
          children: (0, pG.jsx)(Qy.b, {
            ref: yG,
            framing: "store",
            turntableFromYaw: ZG ? kG.yaw : null,
            onReady: () => {
              var GG, ZG;
              null === (GG = yG.current) || void 0 === GG || GG.setOrbit(kG), null === (ZG = yG.current) || void 0 === ZG || ZG.setAllCosmetics(jy.d[bG].cosmetics)
            },
            onDrawn: SG
          })
        })
      })
    }
    const Ay = {
        common: "StoreCharacterCardCommon",
        rare: "StoreCharacterCardRare",
        epic: "StoreCharacterCardEpic",
        legendary: "StoreCharacterCardLegendary",
        mythic: "StoreCharacterCardMythic"
      },
      sy = new Set(["wildSpirits"]);

    function qy(GG) {
      var bG;
      let {
        tile: ZG,
        design: SG,
        canGoLive: UG,
        live: YG,
        busy: VG,
        highlight: fG,
        onLiveStart: QG,
        onLiveEnd: KG,
        onOpen: hG,
        onAct: dG,
        onNeedRecipient: JG,
        onLogin: rG
      } = GG;
      const {
        t: zG
      } = (0, yG.w)(), {
        pack: EG,
        state: oG
      } = ZG, XG = vL.c[EG], uG = (0, vL.d)(EG), iG = (0, OL.h)(EG), CG = AL.h[iG], WG = sy.has(iG), {
        tier: mG
      } = XG, IG = "legendary" === mG || "mythic" === mG, FG = (0, wG.useRef)(null);
      (0, ly.e)(FG, "epic" === mG || IG || WG);
      const [vG, cG] = (0, wG.useState)(!1);
      return !YG && vG && cG(!1), (0, pG.jsxs)("div", {
        ref: FG,
        className: LG()("StoreCharacterCard", `StoreCharacterCard${SG}`, Ay[mG], {
          StoreCharacterCardOwned: "owned" === oG || "recipientOwns" === oG,
          StoreCharacterCardGift: ry(oG),
          StoreCharacterCardItem: void 0 === uG
        }),
        onPointerMove: GG => {
          "mouse" !== GG.pointerType || 0 === GG.movementX && 0 === GG.movementY || !UG || YG || void 0 === uG || QG()
        },
        onPointerLeave: KG,
        children: [(0, pG.jsx)("div", {
          className: "StoreCharacterBackdrop",
          children: CG && (0, pG.jsx)(CG, {
            simple: !0
          })
        }), IG && (0, pG.jsx)("div", {
          className: "StoreCharacterRays"
        }), (0, pG.jsxs)(aG.LinkPreserveSearch, {
          className: "StoreCharacterLink",
          to: (0, Fy.d)({
            kind: "pack",
            pack: EG
          }),
          "data-store-item": EG,
          onClick: GG => {
            (0, vy.d)(GG) && (GG.preventDefault(), hG())
          },
          children: [(0, pG.jsxs)("div", {
            className: "StoreCharacterStage",
            children: [(0, pG.jsx)("div", {
              className: "StoreCharacterHalo"
            }), (0, pG.jsx)("div", {
              className: LG()("StoreCharacterFigure", {
                StoreCharacterFigureCovered: vG
              }),
              style: {
                backgroundImage: `url(${(0,OL.p)(EG)})`
              }
            }), YG && void 0 !== uG && (0, pG.jsx)(My, {
              character: uG,
              drawn: vG,
              onDrawn: () => {
                cG(!0)
              }
            })]
          }), (0, pG.jsx)("div", {
            className: "StoreCharacterName",
            children: null !== (bG = XG.displayName) && void 0 !== bG ? bG : EG
          }), (0, pG.jsx)(dy.e, {
            tier: mG,
            className: "StoreCharacterTier"
          })]
        }), (0, pG.jsx)("div", {
          className: "StoreCharacterScrim"
        }), WG && (0, pG.jsx)("span", {
          className: "StoreCharacterNew",
          children: (0, pG.jsx)(cy, {})
        }), "owned" === oG && (0, pG.jsx)("span", {
          className: "StoreCharacterOwned",
          title: zG("general:owned"),
          "aria-label": zG("general:owned"),
          children: (0, pG.jsx)(kG.c, {
            name: "check"
          })
        }), (0, pG.jsx)("div", {
          className: "StoreCharacterPlate",
          children: (0, pG.jsx)(Xy, {
            state: oG,
            item: EG,
            price: (0, jG.e)(EG),
            busy: VG,
            highlight: fG,
            onAct: dG,
            onNeedRecipient: JG,
            onLogin: rG
          })
        })]
      })
    }

    function ny(GG) {
      let {
        tiles: bG,
        busy: ZG,
        highlightItem: SG,
        onOpen: LG,
        onAct: yG,
        onNeedRecipient: kG,
        onLogin: UG
      } = GG;
      const YG = (0, ay.o)("storeCharacterCardFoil"),
        VG = (0, ay.o)("storeCharacterCardSpotlight"),
        fG = YG ? "Foil" : VG ? "Spotlight" : "Showcase",
        [QG] = (0, wG.useState)(DL.j),
        [KG, hG] = (0, wG.useState)(null);
      return (0, pG.jsx)("div", {
        className: "StoreCharacterGrid",
        children: bG.map((GG => (0, pG.jsx)(qy, {
          tile: GG,
          design: fG,
          canGoLive: !QG,
          live: KG === GG.pack,
          busy: ZG,
          highlight: SG === GG.pack,
          onLiveStart: () => {
            hG(GG.pack)
          },
          onLiveEnd: () => {
            hG((bG => bG === GG.pack ? null : bG))
          },
          onOpen: () => {
            LG(GG.pack)
          },
          onAct: () => {
            yG(GG.pack)
          },
          onNeedRecipient: kG,
          onLogin: () => {
            UG(GG.pack)
          }
        }, GG.pack)))
      })
    }
    var gy = ZG(34528);

    function ey(GG) {
      let {
        title: bG
      } = GG;
      return (0, pG.jsx)("h2", {
        className: "StoreSectionDivider",
        children: (0, pG.jsx)("span", {
          className: "StoreSectionDividerTitle",
          children: bG
        })
      })
    }

    function Ry(GG) {
      let {
        mountAtOnce: bG,
        children: ZG
      } = GG;
      const SG = (0, wG.useRef)(null),
        [LG, yG] = (0, wG.useState)(bG),
        kG = (0, gy.b)();
      return (0, wG.useLayoutEffect)((() => {
        const GG = SG.current;
        GG && GG.getBoundingClientRect().top < GG.parentElement.getBoundingClientRect().bottom && yG(!0)
      }), []), LG || kG ? (0, pG.jsx)(pG.Fragment, {
        children: ZG
      }) : (0, pG.jsx)("div", {
        ref: SG
      })
    }

    function Ty(GG) {
      let {
        layout: bG,
        mountAtOnce: ZG,
        bundleGift: wG,
        superRankTotalDays: SG,
        busy: LG,
        highlightItem: kG,
        onOpen: UG,
        onAct: YG,
        onNeedRecipient: VG,
        onLogin: fG,
        dailyDropTile: QG
      } = GG;
      const {
        t: KG
      } = (0, yG.w)(), hG = bG.packs.filter((GG => void 0 === (0, vL.d)(GG.pack) && !(0, vL.g)(GG.pack))), dG = bG.packs.filter((GG => void 0 !== (0, vL.d)(GG.pack))), JG = bG.packs.filter((GG => (0, vL.g)(GG.pack)));
      return (0, pG.jsxs)(pG.Fragment, {
        children: [(0, pG.jsx)(Iy.b, {
          className: "StoreSuperGems",
          gift: wG,
          highlightSku: kG,
          leadingTile: QG
        }), (0, pG.jsx)(ey, {
          title: KG("store:rank")
        }), (0, pG.jsx)(Cy, {
          state: bG.superRank.state,
          urgent: bG.superRank.urgent,
          daysLeft: bG.superRankDaysLeft,
          totalDays: SG,
          recipientHasSuperRank: bG.recipientHasSuperRank,
          busy: LG,
          highlight: "superRank" === kG,
          onOpen: () => {
            UG("superRank")
          },
          onAct: () => {
            YG("superRank")
          },
          onNeedRecipient: VG,
          onLogin: () => {
            fG("superRank")
          }
        }), (0, pG.jsxs)(Ry, {
          mountAtOnce: ZG,
          children: [(0, pG.jsx)(ey, {
            title: KG("store:bundles")
          }), (0, pG.jsx)("div", {
            className: "StorePackGrid",
            children: hG.map((GG => (0, pG.jsx)(my, {
              pack: GG.pack,
              state: GG.state,
              busy: LG,
              onOpen: () => {
                UG(GG.pack)
              },
              onAct: () => {
                YG(GG.pack)
              },
              onNeedRecipient: VG,
              onLogin: () => {
                fG(GG.pack)
              }
            }, GG.pack)))
          }), (0, pG.jsxs)(Ry, {
            mountAtOnce: ZG,
            children: [(0, pG.jsx)(ey, {
              title: KG("store:characters")
            }), (0, pG.jsx)(ny, {
              tiles: dG,
              busy: LG,
              highlightItem: kG,
              onOpen: UG,
              onAct: YG,
              onNeedRecipient: VG,
              onLogin: fG
            }), JG.length > 0 && (0, pG.jsxs)(pG.Fragment, {
              children: [(0, pG.jsx)(ey, {
                title: KG("store:premiumItems")
              }), (0, pG.jsx)(ny, {
                tiles: JG,
                busy: LG,
                highlightItem: kG,
                onOpen: UG,
                onAct: YG,
                onNeedRecipient: VG,
                onLogin: fG
              })]
            })]
          })]
        })]
      })
    }

    function Hy(GG) {
      let {
        state: bG,
        mode: ZG,
        giftName: wG,
        busy: SG,
        highlight: LG,
        purchaseError: kG,
        onBack: UG,
        onChooseRecipient: VG,
        onAct: fG,
        onLogin: QG
      } = GG;
      const {
        t: KG
      } = (0, yG.w)(), hG = OG("gift" !== ZG);
      return (0, pG.jsx)(fy, {
        onBack: UG,
        recipient: "gift" === ZG && (0, pG.jsxs)(pG.Fragment, {
          children: [wG && (0, pG.jsxs)("span", {
            className: "StoreDetailRecipient",
            title: KG("store:giftFor", {
              name: wG
            }),
            children: [qL.b, " ", KG("store:giftFor", {
              name: wG
            })]
          }), !wG && (0, pG.jsxs)("div", {
            ...(0, YG.P)(),
            className: "StoreDetailRecipient StoreDetailRecipientChoose",
            onClick: VG,
            children: [qL.b, " ", KG("store:chooseRecipient")]
          })]
        }),
        cta: (0, pG.jsx)(Xy, {
          state: bG,
          item: "superRank",
          price: jG.j.price,
          busy: SG,
          highlight: LG,
          onAct: fG,
          onNeedRecipient: VG,
          onLogin: QG
        }),
        afterCta: (0, pG.jsxs)(pG.Fragment, {
          children: [hG && (0, pG.jsx)("span", {
            className: "StoreTileNote",
            children: hG.text
          }), (null === hG || void 0 === hG ? void 0 : hG.manageUrl) && (0, pG.jsx)("a", {
            className: "StoreTileNote StoreManageSubscription",
            href: hG.manageUrl,
            target: "_blank",
            rel: "noreferrer",
            children: KG("payments:manageSubscription")
          }), kG && (0, pG.jsx)("span", {
            className: "StoreTileNote StoreTileNoteError",
            children: KG(kG)
          })]
        })
      })
    }
    var ty = ZG(126);
    const Dy = ty.k("kind", [ty.B({
      kind: ty.o("refused"),
      heldTierId: ty.R(),
      until: ty.y()
    }), ty.B({
      kind: ty.o("refund"),
      tierId: ty.R(),
      refundedMs: ty.y(),
      forfeitedMs: ty.y(),
      premiumCurrency: ty.y()
    }), ty.B({
      kind: ty.o("none")
    })]);
    async function Ny(GG) {
      const bG = await (0, IG.postJsonWithMetricsCookiesAndJsonResponse)(`${hb.clientSideServerUrls.indexUrl}/index/ranks/subscribe-preview`, {
        productId: GG
      }, {
        retries: 1
      });
      return Dy.parse(bG)
    }
    var Oy = ZG(3040),
      xy = ZG(3075);

    function By(GG, bG) {
      const ZG = Math.max(1, Math.round(bG / AG.j));
      return [1 === ZG ? `${GG}OneDay` : GG, {
        days: ZG.toLocaleString()
      }]
    }

    function Gk(GG) {
      let {
        price: bG
      } = GG;
      const {
        t: ZG
      } = (0, yG.w)();
      return (0, pG.jsxs)("div", {
        className: "StoreSubscriptionTerms",
        children: [(0, pG.jsx)(uy, {}), (0, pG.jsx)("div", {
          className: "SmallTextLight",
          children: ZG("payments:subscriptionRenewsMonthly", {
            price: bG
          })
        }), (0, pG.jsxs)("div", {
          className: "StoreSubscriptionTermsLinks SmallTextLight",
          children: [(0, pG.jsx)("a", {
            href: "/terms-of-service",
            target: "_blank",
            rel: "noreferrer",
            children: ZG("homePage:termsOfService")
          }), (0, pG.jsx)("a", {
            href: "/privacy-policy",
            target: "_blank",
            rel: "noreferrer",
            children: ZG("homePage:privacyPolicy")
          })]
        })]
      })
    }

    function bk() {
      const GG = (0, qG.usePurchasesAllowed)();
      return "true" === new URLSearchParams(window.location.search).get("tempSubscription") && GG && (0, qG.subscriptionsSold)() ? (0, pG.jsx)(Zk, {}) : null
    }

    function Zk() {
      const {
        t: GG
      } = (0, yG.w)(), {
        userContext: bG
      } = (0, KG.e)(), {
        purchaseUnderWay: ZG,
        notice: SG,
        subscribe: LG
      } = (0, Oy.c)(), [kG, UG] = (0, wG.useState)(null), [VG, fG] = (0, wG.useState)(0), [QG, hG] = (0, wG.useState)(!1), dG = (0, wG.useRef)(!0), rG = bG !== IG.NULL_USER_CONTEXT, zG = null !== kG && kG.loadedFor === bG ? kG.offer : null, EG = null === SG || void 0 === SG ? void 0 : SG.pendingIntentId, oG = (0, wG.useRef)(EG);

      function XG() {
        fG((GG => GG + 1))
      }
      async function uG(GG) {
        hG(!1), await LG(GG), dG.current && XG()
      }
      if ((0, wG.useEffect)((() => (dG.current = !0, () => {
          dG.current = !1
        })), []), (0, wG.useEffect)((() => {
          void 0 !== oG.current && void 0 === EG && XG(), oG.current = EG
        }), [EG]), (0, wG.useEffect)((() => {
          if (!rG) return;
          let GG = !1;
          return hG(!1), async function() {
            const {
              offering: GG
            } = await (0, DG.getBillingClient)().getOfferings("superRankPage"), bG = null === GG || void 0 === GG ? void 0 : GG.packages.find(aL.isPricedPackage);
            return void 0 === bG ? {
              kind: "unavailable"
            } : {
              kind: "loaded",
              pkg: bG,
              preview: await Ny(bG.productId)
            }
          }().catch((GG => (console.error("Billing: loading the Super Rank subscription or its preview failed:", GG), {
            kind: "loadFailed"
          }))).then((ZG => {
            GG || UG((GG => "loadFailed" === ZG.kind && (null === GG || void 0 === GG ? void 0 : GG.loadedFor) === bG ? GG : {
              loadedFor: bG,
              offer: ZG
            }))
          })), () => {
            GG = !0
          }
        }), [bG, rG, VG]), null === zG) return null;
      if ("loaded" !== zG.kind) return (0, pG.jsx)(xy.i, {
        notice: {
          kind: "error",
          key: "unavailable" === zG.kind ? "payments:subscriptionUnavailable" : "payments:subscriptionLoadFailed"
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const {
        pkg: iG,
        preview: CG
      } = zG;
      if ("refused" === CG.kind) return (0, pG.jsx)(xy.i, {
        notice: {
          kind: "error",
          key: "payments:subscribeRefusedGemRank",
          values: {
            date: new Date(CG.until).toLocaleDateString()
          }
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const WG = (0, Iy.f)(iG),
        mG = (0, JG.isMobileApp)() && (0, pG.jsx)(Gk, {
          price: WG
        });
      if (QG && "refund" === CG.kind) {
        const {
          refundedMs: bG,
          forfeitedMs: wG,
          premiumCurrency: SG
        } = CG, LG = wG + (0 === SG ? bG : 0), [yG, kG] = By("payments:subscribeRefundsGemRank", bG), [UG, VG] = By("payments:subscribeForfeitsGemRank", LG);
        return (0, pG.jsxs)("div", {
          className: "StoreTempSubscribe SmallTextBold",
          children: [(0, pG.jsx)("div", {
            children: GG("payments:subscribeEndsGemRank")
          }), SG > 0 && (0, pG.jsx)("div", {
            children: GG(yG, {
              ...kG,
              amount: SG.toLocaleString()
            })
          }), LG > 0 && (0, pG.jsx)("div", {
            children: GG(UG, VG)
          }), (0, pG.jsxs)("div", {
            className: "StoreTempSubscribeButtons",
            children: [(0, pG.jsx)(YG.h, {
              onClick: () => {
                hG(!1)
              },
              children: GG("general:cancel")
            }), (0, pG.jsx)(YG.k, {
              onClick: () => {
                uG(iG)
              },
              loading: ZG,
              children: GG("payments:subscribeContinue", {
                price: WG
              })
            })]
          }), mG]
        })
      }
      return (0, pG.jsxs)("div", {
        className: "StoreTempSubscribe",
        children: [(0, pG.jsx)(xy.i, {
          notice: SG,
          className: "SmallTextBold"
        }), (0, pG.jsx)(xy.d, {
          className: "SmallTextBold"
        }), (0, pG.jsx)(YG.k, {
          onClick: () => {
            "refund" === CG.kind ? hG(!0) : uG(iG)
          },
          disabled: void 0 !== EG,
          loading: ZG,
          children: GG("payments:subscribeToSuperRank", {
            price: WG
          })
        }), mG]
      })
    }
    var wk = ZG(2541);

    function Sk(GG) {
      let {
        state: bG,
        view: ZG,
        claiming: SG,
        onOpen: kG
      } = GG;
      const {
        t: VG
      } = (0, yG.w)(), fG = (0, wG.useRef)(null), QG = "ready" === ZG.kind;
      (0, ly.e)(fG, QG);
      const KG = (0, Nb.h)(bG);
      return (0, pG.jsxs)("div", {
        ref: fG,
        className: LG()("DailyDropTile", {
          DailyDropTileReady: QG
        }),
        children: [QG && (0, pG.jsx)(UG.e, {
          top: "0.25rem",
          right: "0.25rem"
        }), (0, pG.jsx)("div", {
          className: "DailyDropTileTitle",
          children: VG("dailyDrop:name")
        }), (0, pG.jsxs)("div", {
          className: "DailyDropTileArt",
          children: [(0, pG.jsx)(wk.e, {
            className: "DailyDropTileBlock"
          }), (0, pG.jsxs)("div", {
            className: "DailyDropTileInfo SmallTextLight",
            children: [(0, pG.jsx)("span", {
              children: VG("dailyDrop:collected", {
                count: bG.collected.length,
                total: bG.total
              })
            }), null !== KG && (0, pG.jsx)("span", {
              className: "DailyDropTileOdds",
              children: VG("dailyDrop:odds", {
                percent: KG.toLocaleString(void 0, {
                  maximumFractionDigits: 1
                })
              })
            })]
          })]
        }), "ready" === ZG.kind && (0, pG.jsx)(YG.k, {
          className: "DailyDropTileOpen",
          onClick: kG,
          loading: SG,
          children: VG("dailyDrop:open")
        }), "waiting" === ZG.kind && (0, pG.jsx)("div", {
          className: "DailyDropTileWait SmallTextBold",
          children: VG("dailyDrop:nextIn", {
            count: ZG.hours
          })
        })]
      })
    }
    var Lk = ZG(2222);
    const yk = 32;

    function kk(GG) {
      let {
        worn: bG,
        FL: ZG,
        vL: SG,
        className: UG
      } = GG;
      const {
        t: YG
      } = (0, yG.w)(), VG = (0, wG.useRef)(null), [fG, QG] = (0, wG.useState)(null), [KG, hG] = (0, wG.useState)(!1);
      async function dG() {
        var GG;
        const bG = VG.current;
        if (!bG) return;
        const wG = null === (GG = bG.getDevTools()) || void 0 === GG ? void 0 : GG.canvas();
        let LG = null;
        try {
          LG = wG ? function(GG) {
            if (0 === GG.width || 0 === GG.height) return null;
            const bG = document.createElement("canvas");
            bG.width = yk, bG.height = yk;
            const ZG = bG.getContext("2d", {
              willReadFrequently: !0
            });
            if (!ZG) return null;
            ZG.drawImage(GG, 0, 0, yk, yk);
            const {
              data: wG
            } = ZG.getImageData(0, 0, yk, yk);
            for (let SG = 3; SG < wG.length; SG += 4)
              if (wG[SG] > 0) return GG.toDataURL("image/png");
            return null
          }(wG) : null
        } catch (kG) {
          console.warn("Couldn't read the character preview for the Lucky Skin Block's Before", kG)
        }
        null === LG && console.warn("The character preview read back blank: the Lucky Skin Block's Before shows the head"), QG(null === LG ? {
          kind: "head"
        } : {
          kind: "still",
          src: LG
        }), bG.updateCosmetic(ZG, SG);
        const yG = new Promise((GG => {
          setTimeout(GG, 1e4)
        }));
        await Promise.race([bG.ensureReadyForCapture(ZG), yG]).catch((GG => {
          console.error("Failed to draw the Lucky Skin Block's piece on the character preview", GG)
        })), VG.current === bG && hG(!0)
      }
      return (0, pG.jsxs)("div", {
        className: LG()("DailyDropRevealFigures", UG),
        children: [(0, pG.jsxs)("div", {
          className: "DailyDropRevealFigure",
          children: [(0, pG.jsxs)("div", {
            className: "DailyDropRevealFigureArt",
            children: ["still" === (null === fG || void 0 === fG ? void 0 : fG.kind) && (0, pG.jsx)("img", {
              className: "DailyDropRevealBeforeStill",
              src: fG.src,
              alt: "",
              draggable: !1
            }), "head" === (null === fG || void 0 === fG ? void 0 : fG.kind) && (0, pG.jsx)("div", {
              className: "DailyDropRevealBeforeHead",
              children: (0, pG.jsx)(BL.c, {
                cosmetics: bG
              })
            }), null === fG && (0, pG.jsx)(XG.b, {})]
          }), (0, pG.jsx)("span", {
            className: "DailyDropRevealFigureLabel SmallTextBold",
            children: YG("dailyDrop:before")
          })]
        }), (0, pG.jsx)(kG.c, {
          name: "arrow-right",
          className: "DailyDropRevealArrow"
        }), (0, pG.jsxs)("div", {
          className: "DailyDropRevealFigure DailyDropRevealAfter",
          children: [(0, pG.jsxs)("div", {
            className: "DailyDropRevealFigureArt",
            children: [(0, pG.jsx)("div", {
              className: LG()("DailyDropRevealLive", {
                DailyDropRevealLiveDrawn: KG
              }),
              children: (0, pG.jsx)(wG.Suspense, {
                fallback: null,
                children: (0, pG.jsx)(Qy.b, {
                  ref: VG,
                  onReady: () => {
                    var GG, ZG;
                    null === (GG = VG.current) || void 0 === GG || GG.resetCamera(), null === (ZG = VG.current) || void 0 === ZG || ZG.setAllCosmetics(bG)
                  },
                  onDrawn: () => {
                    requestAnimationFrame((() => {
                      dG()
                    }))
                  }
                })
              })
            }), !KG && (0, pG.jsx)(XG.b, {})]
          }), (0, pG.jsx)("span", {
            className: "DailyDropRevealFigureLabel SmallTextBold",
            children: YG("dailyDrop:after")
          })]
        })]
      })
    }
    var Uk = ZG(1827);
    const Yk = "dailyDropReminderAsked_";

    function Vk(GG) {
      return async function(GG) {
        if (GG.remindersOn || (0, iG.i)(iG.e.get("gameState"))) return null;
        const bG = await IG.userContextManager.getCurrentUserContext(),
          ZG = Yk + bG.whamm;
        if (null !== VZ.h.getItem(ZG)) return null;
        const [wG, SG] = await Promise.all([(0, Tb.e)().catch((GG => (console.error("Couldn't tell whether this device can take push notifications:", GG), null))), fk()]);
        if (null === wG && !SG) return null;
        return {
          askedKey: ZG,
          requester: wG
        }
      }(GG).catch((GG => (console.error("Failed to tell whether to ask about Lucky Skin Block reminders:", GG), null)))
    }

    function pk(GG, bG) {
      VZ.h.setItem(GG.askedKey, !0), (0, Nb.t)("daily_drop.remind", bG ? "yes" : "no"), bG && async function(GG) {
        const bG = (0, Nb.u)({
            remindersOn: !0
          }),
          ZG = null === GG ? Promise.resolve() : GG(),
          [wG, SG] = await Promise.allSettled([bG, ZG]);
        "rejected" === wG.status && console.error("Failed to turn on Lucky Skin Block reminders:", wG.reason);
        "rejected" === SG.status && console.error("Failed to ask for push notifications for Lucky Skin Block reminders:", SG.reason);
        "rejected" !== wG.status && "rejected" !== SG.status || Uk.g.showMessage({
          translationKey: "dailyDrop:remindFailed"
        })
      }(GG.requester)
    }

    function fk() {
      return (0, Rb.c)().then((GG => GG.app + GG.browser + GG.msnPlay > 0), (GG => (console.error("Couldn't tell where push notifications reach this account:", GG), !0)))
    }
    const Qk = {
        closed: "opening",
        opening: "revealed",
        revealed: "shrinking",
        shrinking: "equip",
        equip: "equip",
        remind: "remind"
      },
      Kk = {
        opening: 900,
        shrinking: 700
      };

    function hk(GG) {
      let {
        drop: bG,
        onClose: ZG
      } = GG;
      const {
        t: SG
      } = (0, yG.w)(), {
        userContext: UG
      } = (0, KG.e)(), {
        state: VG,
        view: fG
      } = (0, Nb.w)(), [QG, hG] = (0, wG.useState)("closed"), [dG] = (0, wG.useState)((() => ({
        ...UG.getPlayerCosmetics()
      }))), [JG] = (0, wG.useState)((() => (0, Nb.k)(bG, dG))), [rG, zG] = (0, wG.useState)(!1), [EG, oG] = (0, wG.useState)(!1), [XG] = (0, wG.useState)((() => null === VG ? Promise.resolve(null) : Vk(VG))), [uG, CG] = (0, wG.useState)(null), WG = (0, Hb.c)(), {
        gameState: mG
      } = (0, iG.o)(["gameState"]);
      async function IG() {
        const GG = await XG;
        WG.current && (null === GG ? ZG() : (CG(GG), hG("remind")))
      }

      function FG(GG) {
        null !== uG && pk(uG, GG), ZG()
      }(0, wG.useEffect)((() => {
        const GG = Kk[QG];
        if (void 0 === GG) return;
        const bG = setTimeout((() => {
          hG(Qk[QG])
        }), GG);
        return () => {
          clearTimeout(bG)
        }
      }), [QG]);
      const vG = SG(`dailyDrop:kind_${JG.FL}`),
        aG = VG && SG("dailyDrop:collected", {
          count: VG.collected.length,
          total: VG.total
        }),
        cG = "revealed" === QG || "shrinking" === QG,
        lG = "equip" !== QG && "remind" !== QG;
      return (0, pG.jsx)(sw.b, {
        className: "DailyDropRevealScreen",
        close: "remind" === QG ? () => {
          FG(!1)
        } : ZG,
        togglePointerLock: !1,
        closeOnPressBackground: !1,
        children: (0, pG.jsxs)("div", {
          className: LG()("DailyDropReveal", {
            DailyDropRevealOpening: "opening" === QG,
            DailyDropRevealShrinking: "shrinking" === QG,
            DailyDropRevealFiguresShown: "shrinking" === QG || "equip" === QG || "remind" === QG
          }),
          children: [(0, pG.jsxs)("div", {
            className: "DailyDropRevealStage",
            children: [(0, pG.jsx)(kk, {
              className: "DailyDropRevealStageFigures",
              worn: dG,
              FL: JG.FL,
              vL: JG.vL
            }), ("closed" === QG || "opening" === QG) && (0, pG.jsx)(wk.e, {
              className: "DailyDropRevealBlock",
              open: "opening" === QG
            }), cG && (0, pG.jsx)("div", {
              className: "DailyDropRevealPiece",
              children: (0, pG.jsx)("img", {
                src: `/textures/charSkins/previews/${(0,Lk.k)(JG.FL,JG.vL).previewTex}.png`,
                alt: vG,
                draggable: !1
              })
            })]
          }), lG && (0, pG.jsxs)(pG.Fragment, {
            children: [(0, pG.jsxs)("div", {
              className: "DailyDropRevealCaption",
              children: [(0, pG.jsx)("div", {
                className: "DailyDropRevealTitle SmallTextBold",
                children: cG ? vG : SG("dailyDrop:name")
              }), "closed" === QG && (0, pG.jsx)("div", {
                className: "DailyDropRevealHint SmallTextLight",
                children: SG("dailyDrop:tapToOpen")
              }), "revealed" === QG && (0, pG.jsx)("div", {
                className: "DailyDropRevealHint SmallTextLight",
                children: SG("dailyDrop:tapToContinue")
              })]
            }), (0, pG.jsx)("button", {
              type: "button",
              className: "DailyDropRevealTap",
              "data-pad-default-focus": !0,
              "aria-label": SG("closed" === QG ? "dailyDrop:tapToOpen" : "dailyDrop:tapToContinue"),
              onClick: () => {
                hG(Qk[QG])
              }
            })]
          }), "equip" === QG && (0, pG.jsxs)("div", {
            className: "DailyDropRevealEquip",
            children: [(0, pG.jsx)("div", {
              className: "DailyDropRevealKind SmallTextLight",
              children: vG
            }), (0, pG.jsx)("div", {
              className: "DailyDropRevealQuestion SmallTextBold",
              children: SG("dailyDrop:equipQuestion")
            }), (0, pG.jsxs)("div", {
              className: "DailyDropRevealButtons",
              children: [(0, pG.jsx)(YG.d, {
                className: "DailyDropRevealButton",
                disabled: rG,
                touchPressOn: "pointerup",
                onClick: () => {
                  (0, Nb.t)("daily_drop.not_now", bG), IG()
                },
                children: SG("dailyDrop:notNow")
              }), (0, pG.jsx)(YG.d, {
                className: "DailyDropRevealButton",
                loading: rG,
                padDefaultFocus: !0,
                touchPressOn: "pointerup",
                onClick: () => {
                  !async function() {
                    (0, Nb.t)("daily_drop.equip", bG), zG(!0), oG(!1);
                    try {
                      await (0, Nb.g)(UG, JG.FL, JG.vL)
                    } catch (GG) {
                      return console.error("Failed to equip the Lucky Skin Block's piece", GG), zG(!1), void oG(!0)
                    }
                    await IG()
                  }()
                },
                children: SG("dailyDrop:equip")
              })]
            }), EG && (0, pG.jsx)("div", {
              className: "DailyDropRevealError SmallTextBold",
              children: SG("dailyDrop:equipFailed")
            }), !(0, iG.i)(mG) && (0, pG.jsxs)("button", {
              type: "button",
              className: "DailyDropRevealCustomise",
              disabled: rG,
              onClick: () => {
                var GG;
                (0, Nb.t)("daily_drop.customise", bG), GG = JG.FL, UZ.l.xh(lw, GG), iG.e.set({
                  openEverythingMenuName: Jb.u.CUSTOMISATION
                }), ZG()
              },
              children: [SG("dailyDrop:customise"), " ", (0, pG.jsx)(kG.c, {
                name: "arrow-right",
                className: "DailyDropRevealCustomiseArrow"
              })]
            }), aG && (0, pG.jsxs)("div", {
              className: "DailyDropRevealProgress SmallTextLight",
              children: [aG, "waiting" === (null === fG || void 0 === fG ? void 0 : fG.kind) && ` \xb7 ${SG("dailyDrop:nextInInline",{count:fG.hours})}`]
            })]
          }), "remind" === QG && (0, pG.jsxs)("div", {
            className: "DailyDropRevealEquip",
            children: [(0, pG.jsx)("div", {
              className: "DailyDropRevealQuestion SmallTextBold",
              children: SG("dailyDrop:remindTitle")
            }), (0, pG.jsx)("div", {
              className: "DailyDropRevealKind SmallTextLight",
              children: SG("dailyDrop:remindSubtitle")
            }), (0, pG.jsxs)("div", {
              className: "DailyDropRevealButtons",
              children: [(0, pG.jsx)(YG.d, {
                className: "DailyDropRevealButton",
                padDefaultFocus: !0,
                touchPressOn: "pointerup",
                onClick: () => {
                  FG(!1)
                },
                children: SG("dailyDrop:remindNo")
              }), (0, pG.jsx)(YG.d, {
                className: "DailyDropRevealButton",
                touchPressOn: "pointerup",
                onClick: () => {
                  FG(!0)
                },
                children: SG("dailyDrop:remindYes")
              })]
            })]
          })]
        })
      })
    }

    function dk(GG, bG) {
      const {
        t: ZG
      } = (0, yG.w)(), SG = function(GG, bG) {
        const {
          state: ZG,
          view: SG
        } = (0, Nb.w)(), [LG, yG] = (0, wG.useState)(!1), [kG, UG] = (0, wG.useState)(!1), [YG, VG] = (0, wG.useState)(null), pG = (0, wG.useRef)(null), fG = (0, wG.useRef)(!1), QG = bG && "ready" === (null === SG || void 0 === SG ? void 0 : SG.kind);
        (0, wG.useEffect)((() => {
          GG ? QG && !fG.current && (fG.current = !0, (0, Nb.t)("daily_drop.shown", "tile")) : fG.current = !1
        }), [GG, QG]), (0, wG.useEffect)((() => {
          GG || (JG(), UG(!1))
        }), [GG]);
        const KG = GG && null === YG && !(0, Nb.q)(SG);
        (0, wG.useEffect)((() => {
          KG && iG.e.set({
            openEverythingMenuName: Jb.u.CUSTOMISATION
          })
        }), [KG]);
        const hG = (0, wG.useRef)(!1),
          dG = (0, wG.useRef)(GG);

        function JG() {
          null !== pG.current && (pG.current = null, VG(null))
        }
        return dG.current = GG, {
          state: ZG,
          view: SG,
          claiming: LG,
          claimFailed: kG,
          reveal: YG,
          open: async function() {
            if (!hG.current) {
              hG.current = !0, yG(!0), UG(!1);
              try {
                const {
                  state: GG,
                  drop: bG
                } = await (0, Nb.d)();
                if (null === GG || null === bG) return;
                if (!dG.current) return;
                (0, Nb.t)("daily_drop.open", bG), pG.current = {
                  state: GG,
                  drop: bG
                }, VG(pG.current)
              } catch (GG) {
                console.error("Failed to claim the Lucky Skin Block", GG), dG.current && UG(!0)
              } finally {
                hG.current = !1, yG(!1)
              }
            }
          },
          closeReveal: JG
        }
      }(GG, bG);
      return {
        shown: (0, Nb.q)(SG.view) || null !== SG.reveal,
        tile: SG.state && SG.view && (0, pG.jsx)(Sk, {
          state: SG.state,
          view: SG.view,
          claiming: SG.claiming,
          onOpen: SG.open
        }),
        claimFailed: SG.claimFailed && (0, pG.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: ZG("dailyDrop:claimFailed")
        }),
        reveal: SG.reveal && (0, pG.jsx)(hk, {
          drop: SG.reveal.drop,
          onClose: SG.closeReveal
        })
      }
    }

    function Jk(GG) {
      let {
        show: bG
      } = GG;
      const ZG = dk(bG, bG);
      return bG && ZG.shown ? (0, pG.jsxs)("div", {
        className: "Store StoreDailyDropOnly",
        children: [ZG.claimFailed, ZG.tile && (0, pG.jsx)("div", {
          className: "StoreDailyDropOnlyTile",
          children: ZG.tile
        }), ZG.reveal]
      }) : null
    }
    const rk = {
      kind: "board"
    };
    let zk = !1;

    function Ek(GG) {
      return "found" === GG.status || "error" === GG.status && "store:giftRecipientLookupFailed" === GG.error ? GG.name : null
    }(0, sG.s)(aL.prefetchBillingOfferings);
    const Xk = (0, wG.memo)((function(GG) {
      var bG;
      let {
        show: SG
      } = GG;
      const {
        t: kG
      } = (0, yG.w)(), {
        userContext: UG
      } = (0, KG.e)(), YG = (0, qG.usePurchasesAllowed)(), VG = UG !== IG.NULL_USER_CONTEXT, fG = RL(UG), [QG, hG] = (0, dG.b)(), {
        page: JG,
        urlMode: rG,
        goTo: zG
      } = (0, TL.g)(), EG = function(GG) {
        return "superRank" === GG.kind ? "superRank" : "pack" === GG.kind ? GG.pack : null
      }(JG), {
        openEverythingMenuName: oG,
        gameState: XG
      } = (0, iG.o)(["openEverythingMenuName", "gameState"]), uG = null !== oG;
      ! function(GG, bG) {
        const [SG] = (0, wG.useState)(DL.j), [LG, yG] = (0, wG.useState)(!1);
        SG && bG && !LG && yG(!0);
        const kG = (0, uw.w)(),
          UG = SG && LG && GG && !kG;
        (0, wG.useEffect)((() => {
          if (!UG) return;
          let GG = null,
            bG = null,
            wG = null;
          const SG = () => !document.hasFocus() || document.activeElement instanceof HTMLIFrameElement || (0, DG.getBillingClient)().purchaseUnderWay,
            LG = () => {
              var ZG;
              null === (ZG = wG) || void 0 === ZG || ZG(), wG = null, null !== GG && (clearTimeout(GG), GG = null), null !== bG && (clearTimeout(bG), bG = null)
            },
            yG = () => {
              (0, HL.r)(!1), (0, HL.o)(!1), LG(), GG = setTimeout((() => {
                GG = null, wG = (0, tL.b)((() => {
                  wG = null, SG() ? yG() : ((0, HL.r)(!0), bG = setTimeout((() => {
                    bG = null, wG = (0, tL.b)((() => {
                      wG = null, SG() ? yG() : (0, HL.o)(!0)
                    }))
                  }), 3e3), Promise.resolve().then((() => ZG(4678))).then((GG => {
                    GG.startBackgroundGameSetup()
                  }), (GG => {
                    console.warn("Background game setup: its chunk failed to load", GG)
                  })))
                }))
              }), 2e3)
            };
          for (const ZG of NL) window.addEventListener(ZG, yG, {
            capture: !0,
            passive: !0
          });
          return yG(), () => {
            for (const GG of NL) window.removeEventListener(GG, yG, {
              capture: !0
            });
            LG(), (0, HL.r)(!1), (0, HL.o)(!1)
          }
        }), [UG])
      }(SG && uG, "pack" === JG.kind);
      const CG = "landingPage" === XG;
      (0, wG.useEffect)((() => {
        uG && (0, aL.prefetchBillingOfferings)()
      }), [uG]), (0, wG.useEffect)((() => {
        uG && !SG && CG && (0, OL.r)()
      }), [uG, SG, CG]);
      const [WG, mG] = (0, wG.useState)(0), [FG, vG] = (0, wG.useState)(null), [aG, cG] = (0, wG.useState)(null), [lG, PG] = (0, wG.useState)(null), [MG, AG] = (0, wG.useState)(null), nG = (0, wG.useRef)(null), gG = (0, wG.useRef)(null), eG = (0, wG.useRef)(null), RG = (0, wG.useRef)(!1), TG = (0, sG.C)(), HG = (0, wG.useRef)(0), tG = (0, wG.useRef)(!1);

      function NG() {
        mG((GG => GG + 1))
      }(0, wG.useEffect)((() => {
        if (SG) {
          if (zk = !0, (0, sG.k)(), TG && TG.seq !== HG.current) {
            var GG;
            HG.current = TG.seq, "loginResume" !== TG.source && (0, sG.y)();
            const bG = (0, sG.e)(TG);
            rG || zG(bG), AG(null !== (GG = TG.highlight) && void 0 !== GG ? GG : null), cG(null), "gift" === TG.mode && TG.giftRecipientName ? fG.choose(TG.giftRecipientName, "prefilled") : "current" !== TG.mode && fG.clear(), "gift" !== TG.mode || TG.giftRecipientName || NG(), (0, bb.reportAnalyticsClick)({
              id: "store.open",
              value: TG.source
            })
          } else tG.current || (0, bb.reportAnalyticsClick)({
            id: "store.open",
            value: "menuTab"
          });
          tG.current = !0
        } else tG.current = !1
      }), [SG, TG]), (0, wG.useEffect)((() => {
        if (!MG) return;
        const GG = setTimeout((() => {
          AG(null)
        }), 4e3);
        return () => {
          clearTimeout(GG)
        }
      }), [MG]), (0, wG.useLayoutEffect)((() => {
        const GG = nG.current;
        if (!SG || !GG) return gG.current = null, void(eG.current = null);
        var bG;
        if (EG) gG.current = EG, null === (bG = GG.querySelector(".StoreDetailBackButton, .CosmeticShopDetailBackButton")) || void 0 === bG || bG.focus();
        else if (gG.current) {
          const bG = eG.current;
          null !== bG && (GG.scrollTop = bG);
          const ZG = GG.querySelector(`[data-store-item="${gG.current}"]`);
          if (ZG) {
            const wG = ZG.getBoundingClientRect(),
              SG = GG.getBoundingClientRect();
            ZG.focus({
              preventScroll: null !== bG && wG.bottom > SG.top && wG.top < SG.bottom
            })
          }
          gG.current = null
        }
      }), [EG, SG]), (0, wG.useEffect)((() => {
        cG(null)
      }), [fG.query]), (0, wG.useEffect)((() => {
        if (!lG) return;
        const GG = setTimeout((() => {
          PG(null)
        }), 8e3);
        return () => {
          clearTimeout(GG)
        }
      }), [lG]);
      const OG = UG.superRankInfo,
        xG = UG.isLoggedIn() || (0, qG.guestsMayBuy)(),
        BG = UG.getOwnedCosmeticPacks(),
        Gb = (0, qL.o)(fG.query),
        Zb = (0, qL.f)({
          mode: Gb,
          loggedIn: VG ? xG : null,
          superRankInfo: OG,
          now: Date.now(),
          ownedPacks: BG,
          packs: vL.q,
          recipient: fG.recipient
        });
      (0, wG.useEffect)((() => {
        if (!xG || !SG) return;
        const GG = (0, sG.y)(),
          bG = GG && (0, qL.k)(GG, vL.q);
        GG && bG && ((0, bb.reportAnalyticsClick)({
          id: "store.login_resume",
          value: GG.item
        }), (0, sG.n)(bG))
      }), [xG, SG]);
      const wb = (0, qL.r)({
        superRankDaysLeft: Zb.superRankDaysLeft,
        openedThisSession: zk || SG,
        seenNewItems: (0, sG.j)()
      });
      (0, wG.useEffect)((() => {
        (0, sG.v)(wb)
      }), [wb]);
      const Sb = "self" === Gb,
        Lb = dk(SG, SG && Sb && "board" === JG.kind);
      if (!SG || !YG) return null;
      const yb = hG > QG && QG <= 700,
        kb = !yb && hG <= 420,
        Ub = "gift" === Gb ? Ek(fG.recipient) : null,
        Yb = null !== FG;

      function Vb(GG) {
        (0, lL.b)(GG, "gift" === Gb ? fG.query.trim() : null)
      }

      function pb(GG, bG) {
        (0, bb.reportAnalyticsClick)({
          id: "store.purchase_done",
          value: `${bG?"gift":"self"}:${GG}`
        }), bG && (fG.recordGift(bG.name, GG), fb(bG))
      }

      function fb(GG) {
        ! function(GG) {
          try {
            VZ.h.setItem(nL, (0, qL.A)(eL(), GG))
          } catch {}
        }({
          name: GG.name,
          cosmetics: GG.cosmetics
        }), zG(rk), PG((bG => {
          var ZG;
          return {
            name: GG.name,
            seq: (null !== (ZG = null === bG || void 0 === bG ? void 0 : bG.seq) && void 0 !== ZG ? ZG : 0) + 1
          }
        }))
      }
      async function Qb(GG) {
        var bG, ZG;
        if (RG.current) return;
        if (!xG) return void Vb(GG);
        cG(null), AG(null);
        const wG = "gift" === Gb ? {
          name: Ek(fG.recipient),
          cosmetics: fG.recipientCosmetics
        } : null;
        if (wG && !wG.name) return void NG();
        const SG = "superRank" === GG ? jG.j.id : (0, jG.b)(GG);
        RG.current = !0;
        const LG = await (0, sL.e)(SG, null !== (bG = null === wG || void 0 === wG ? void 0 : wG.name) && void 0 !== bG ? bG : null);
        if (RG.current = !1, !LG) return;
        vG(GG);
        const yG = await jL.e.purchase(SG, null !== (ZG = null === wG || void 0 === wG ? void 0 : wG.name) && void 0 !== ZG ? ZG : null);
        vG(null), yG ? cG(yG) : (pb(GG, wG), wG || (await (0, PL.flushClientAnalyticsEvents)(), (0, cL.refreshWithoutConfirmation)("superRank" === GG ? "/super-rank-welcome" : `/pack-welcome/${GG}`)))
      }
      const Kb = LG()("Store", {
        StoreGift: "gift" === Gb,
        StorePortrait: yb,
        StoreCompact: kb
      });
      if ("pack" === JG.kind) {
        const GG = JG.pack,
          bG = Zb.packs.find((bG => bG.pack === GG));
        return (0, pG.jsx)("div", {
          ref: nG,
          className: "CosmeticShopContainer",
          children: (0, pG.jsx)(AL.e, {
            pack: GG,
            onBack: () => {
              zG(rk)
            },
            onPurchased: bG => {
              pb(GG, bG ? {
                name: bG,
                cosmetics: null
              } : null)
            },
            giftCta: "gift" === Gb && Ub && bG && (0, pG.jsxs)(pG.Fragment, {
              children: [(0, pG.jsx)(Xy, {
                state: bG.state,
                item: GG,
                price: (hb = GG, "superRank" === hb ? jG.j.price : (0, jG.e)(hb)),
                busy: Yb,
                onAct: () => {
                  Qb(GG)
                },
                onNeedRecipient: () => {
                  zG(rk), NG()
                },
                onLogin: () => {
                  Vb(GG)
                },
                highlight: MG === GG
              }), aG && (0, pG.jsx)("span", {
                className: "CosmeticShopGiftError SmallTextBold",
                children: kG(aG)
              })]
            }),
            ownedPacks: BG,
            startAsGift: "gift" === Gb,
            initialGiftRecipient: "gift" === Gb ? null !== Ub && void 0 !== Ub ? Ub : fG.query.trim() : "",
            highlightCta: MG === GG
          }, GG)
        })
      }
      var hb;
      return "superRank" === JG.kind ? (0, pG.jsx)("div", {
        ref: nG,
        className: LG()(Kb, "StoreDetailView"),
        children: (0, pG.jsx)(Hy, {
          state: Zb.superRank.state,
          mode: Gb,
          giftName: Ub,
          busy: Yb,
          highlight: "superRank" === MG,
          purchaseError: aG,
          onBack: () => {
            zG(rk)
          },
          onChooseRecipient: () => {
            zG(rk), NG()
          },
          onAct: () => {
            Qb("superRank")
          },
          onLogin: () => {
            Vb("superRank")
          }
        })
      }) : (0, pG.jsxs)("div", {
        ref: nG,
        className: Kb,
        onScroll: GG => {
          eG.current = GG.currentTarget.scrollTop
        },
        children: [(0, pG.jsx)("div", {
          className: "StoreTopRow",
          children: (0, pG.jsx)(Sy, {
            selfName: VG ? UG.getPlayerName() : "",
            giftRecipient: fG,
            suggestionsVersion: null !== (bG = null === lG || void 0 === lG ? void 0 : lG.seq) && void 0 !== bG ? bG : 0,
            pulseSignal: WG,
            disabled: Yb || !VG
          })
        }), lG && (0, pG.jsxs)("div", {
          className: "StoreNotice StoreNoticeGiftSent",
          onClick: () => {
            PG(null)
          },
          children: [(0, pG.jsx)(ML.d, {
            showSignal: lG.seq
          }), qL.b, " ", kG("store:giftSent", {
            name: lG.name
          })]
        }, lG.seq), !lG && aG && (0, pG.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: kG(aG)
        }), Sb && Lb.claimFailed, (0, pG.jsx)(Ty, {
          layout: Zb,
          mountAtOnce: null !== gG.current,
          bundleGift: "gift" === Gb ? {
            recipientName: Ub,
            lookingUp: "pending" === fG.recipient.status,
            busy: Yb,
            onNeedRecipient: NG,
            onSent: GG => {
              (0, bb.reportAnalyticsClick)({
                id: "store.purchase_done",
                value: "gift:superGems"
              }), fb({
                name: GG,
                cosmetics: fG.recipientCosmetics
              })
            }
          } : null,
          superRankTotalDays: (0, qL.t)(OG),
          busy: Yb,
          highlightItem: MG,
          onOpen: function(GG) {
            (0, bb.reportAnalyticsClick)({
              id: "store.item_open",
              value: GG
            }), zG((0, sG.f)(GG))
          },
          onAct: Qb,
          onNeedRecipient: NG,
          onLogin: Vb,
          dailyDropTile: Sb && Lb.tile
        }), "gift" !== Gb && (0, pG.jsx)(bk, {}), Lb.reveal]
      })
    }));
    var uk = ZG(2659),
      ik = ZG(8878),
      Ck = ZG(8715),
      Wk = ZG(2724),
      mk = ZG(2557),
      Ik = ZG(2619),
      Fk = ZG(2630),
      vk = ZG(2632),
      ak = ZG(2719),
      ck = ZG(2693),
      lk = ZG(2342),
      jk = ZG(2369),
      Pk = ZG(2362),
      Mk = ZG(2013),
      Ak = ZG(2639),
      sk = ZG(2375);

    function qk(GG) {
      let {
        show: bG
      } = GG;
      return bG ? (0, pG.jsx)(nk, {}) : null
    }

    function nk() {
      const {
        t: GG
      } = (0, yG.w)(), {
        followsLeader: bG
      } = (0, mk.i)(), {
        loading: ZG,
        friends: SG,
        requests: UG,
        invites: VG
      } = (0, eG.k)(), {
        userContext: fG
      } = (0, KG.e)(), [QG, hG] = (0, wG.useState)(sk.l);
      (0, wG.useEffect)((() => {
        (0, sk.e)()
      }), []);
      const dG = UG.map((GG => GG.name)),
        {
          state: JG,
          recentRequesters: rG
        } = (0, ck.k)(),
        zG = new Map([...("loaded" === JG.status ? JG.recentPlayers : []).map((GG => [GG.preview.name, GG])), ...rG.map((GG => [GG.name, GG]))]),
        EG = (0, wG.useRef)(null),
        [uG, iG] = (0, wG.useState)(""),
        [CG, WG] = (0, wG.useState)("Enter"),
        [mG, IG] = (0, wG.useState)(null);

      function FG() {
        uG && (WG("Loading"), (0, Pk.j)(uG, "social_menu").then((GG => {
          if (EG.current) switch (GG.kind) {
            case "sent":
              WG("Success");
              break;
            case "becameFriends":
              WG("BecameFriends");
              break;
            case "failed":
              IG(GG.message), WG("Error")
          }
        })))
      }
      return (0, wG.useEffect)((() => {
        if ("Enter" === CG || "Loading" === CG) return;
        const GG = setTimeout((() => {
          EG.current.value = "", iG(""), WG("Enter")
        }), "Success" === CG ? 1e3 : 4e3);
        return () => {
          clearTimeout(GG)
        }
      }), [CG]), (0, pG.jsx)("div", {
        className: "SocialMenu",
        children: (0, pG.jsxs)("div", {
          className: "SocialMenuInner",
          children: [(0, pG.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, pG.jsxs)("div", {
              className: "SocialMenuBox SocialMenuAddFriend",
              children: [(0, pG.jsx)(vk.e, {
                label: GG("socialBar:addFriend")
              }), (0, pG.jsxs)("div", {
                className: "AddFriendBody",
                children: [(0, pG.jsxs)("div", {
                  className: LG()("AddFriendBodyOverlay", {
                    [`AddFriendBodyOverlay${CG}`]: !0
                  }),
                  children: ["Loading" === CG && (0, pG.jsx)(XG.b, {}), "Success" === CG && (0, pG.jsx)(kG.c, {
                    name: "check"
                  }), "BecameFriends" === CG && (0, pG.jsx)(pG.Fragment, {
                    children: GG("socialBar:nowFriends", {
                      playerName: uG
                    })
                  }), "Error" === CG && mG && (0, pG.jsx)(pG.Fragment, {
                    children: GG(mG.translationKey, mG.params)
                  })]
                }), (0, pG.jsxs)("div", {
                  className: "PlayerSearch",
                  children: [(0, pG.jsx)(oG.b, {
                    className: "PlayerSearchInput",
                    placeholderText: GG("socialBar:enterPlayerName"),
                    domRef: EG,
                    onValueChange: GG => {
                      iG((0, cG.n)(GG)), EG.current.value = (0, cG.n)(GG)
                    },
                    onEnter: () => {
                      uG && (0, bb.reportAnalyticsClick)({
                        id: "social.add_friend",
                        value: "social_menu"
                      }), FG()
                    }
                  }), (0, pG.jsxs)(YG.d, {
                    className: "PlayerSearchInputButton SmallTextLight",
                    onClick: () => {
                      FG()
                    },
                    analyticsClick: {
                      id: "social.add_friend",
                      value: "social_menu"
                    },
                    children: [(0, pG.jsx)(kG.c, {
                      name: "user-plus"
                    }), " ", GG("socialBar:sendRequest")]
                  })]
                })]
              }), (0, pG.jsx)(Ak.d, {
                surface: "social_menu",
                prefetchOnMount: !0
              })]
            }), VG.length > 0 && (0, pG.jsxs)("div", {
              className: "SocialMenuBox SocialMenuInvites",
              children: [(0, pG.jsx)(vk.e, {
                label: GG("socialBar:invites"),
                meta: VG.length
              }), VG.map((bG => (0, pG.jsxs)("div", {
                className: "SocialMenuInvite",
                children: [(0, pG.jsx)("div", {
                  className: "SocialMenuInviteIcon",
                  children: (0, pG.jsx)(lk.c, {
                    invite: bG
                  })
                }), (0, pG.jsx)("div", {
                  className: "SocialMenuInviteText",
                  children: (0, pG.jsx)(lk.d, {
                    invite: bG
                  })
                }), (0, pG.jsx)(YG.k, {
                  className: "SocialMenuInviteJoin SmallTextLight",
                  onClick: () => {
                    (0, jk.i)(bG)
                  },
                  analyticsClick: {
                    id: "social.accept_invite",
                    value: `social_menu:${bG.destination.kind}`
                  },
                  children: GG("general:join")
                }), (0, pG.jsx)(xG.h, {
                  tooltipInner: (0, pG.jsx)(pG.Fragment, {
                    children: GG("general:decline")
                  }),
                  delayShow: 0,
                  children: (0, pG.jsx)(YG.h, {
                    className: "SocialMenuInviteDecline",
                    padDefaultFocus: "invite" === (null === QG || void 0 === QG ? void 0 : QG.kind) && QG.inviteId === bG.id,
                    onClick: () => {
                      eG.b.declineInvite(bG.id)
                    },
                    analyticsClick: {
                      id: "social.decline_invite",
                      value: `social_menu:${bG.destination.kind}`
                    },
                    children: (0, pG.jsx)(kG.c, {
                      name: "xmark"
                    })
                  })
                })]
              }, bG.id)))]
            }), (0, pG.jsxs)("div", {
              className: LG()("SocialMenuBox SocialMenuRequests", {
                SocialMenuBoxEmpty: !ZG && 0 === UG.length
              }),
              children: [(0, pG.jsx)(vk.e, {
                label: (0, pG.jsxs)(pG.Fragment, {
                  children: [(0, pG.jsx)(kG.c, {
                    name: Mk.d
                  }), " ", GG("socialBar:requests")]
                }),
                meta: (0, pG.jsxs)(pG.Fragment, {
                  children: [UG.length, UG.length === BG.k && (0, pG.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: GG("socialBar:limitReached")
                  })]
                })
              }), ZG && (0, pG.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, pG.jsx)(XG.b, {})
              }), !ZG && 0 === UG.length && (0, pG.jsx)("div", {
                className: "SocialMenuEmpty",
                children: GG("socialBar:noFriendRequests")
              }), !ZG && UG.length > 0 && (0, pG.jsx)("div", {
                className: "PlayerRows",
                children: (0, pG.jsx)(jS.d, {
                  lazyLoadedClassName: "SocialMenuRequestsLazy",
                  observerUpdateDeps: [UG],
                  children: UG.map(((bG, ZG) => {
                    const wG = zG.get(bG.name);
                    return (0, pG.jsxs)(Fk.h, {
                      playerSocialPreview: bG,
                      zIndex: UG.length - ZG,
                      padDefaultFocus: (0, sk.h)(QG, bG.name, ZG),
                      status: wG && (0, pG.jsx)(ak.d, {
                        gameNameWithVariation: wG.gameNameWithVariation,
                        isPrivateLobby: wG.isPrivateLobby
                      }),
                      children: [(0, pG.jsx)(xG.h, {
                        tooltipInner: (0, pG.jsx)(pG.Fragment, {
                          children: GG("general:accept")
                        }),
                        delayShow: 0,
                        children: (0, pG.jsx)(YG.d, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            hG((0, sk.g)(dG, ZG)), (0, Pk.f)(bG.name, !0, {
                              source: "social_menu",
                              announceFriend: !1
                            })
                          },
                          analyticsClick: {
                            id: "social.accept_friend_request",
                            value: "social_menu"
                          },
                          children: (0, pG.jsx)(kG.c, {
                            name: "check"
                          })
                        })
                      }), (0, pG.jsx)(xG.h, {
                        tooltipInner: (0, pG.jsx)(pG.Fragment, {
                          children: GG("general:decline")
                        }),
                        delayShow: 0,
                        children: (0, pG.jsx)(YG.h, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            hG((0, sk.g)(dG, ZG)), (0, Pk.f)(bG.name, !1, {
                              source: "social_menu"
                            })
                          },
                          analyticsClick: {
                            id: "social.decline_friend_request",
                            value: "social_menu"
                          },
                          children: (0, pG.jsx)(kG.c, {
                            name: "xmark"
                          })
                        })
                      })]
                    }, `${bG.name}_${bG.isError}`)
                  }))
                })
              })]
            }), (0, pG.jsx)(ak.j, {})]
          }), (0, pG.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, pG.jsxs)("div", {
              className: "SocialMenuBox SocialMenuParty",
              children: [(0, pG.jsx)(vk.e, {
                label: GG("socialBar:party")
              }), (0, pG.jsx)(Ik.d, {})]
            }), (0, pG.jsxs)("div", {
              className: "SocialMenuBox SocialMenuFriends",
              children: [(0, pG.jsx)(vk.e, {
                label: (0, pG.jsxs)(pG.Fragment, {
                  children: [(0, pG.jsx)(kG.c, {
                    name: Mk.c
                  }), " ", GG("socialBar:friends")]
                }),
                meta: (0, pG.jsxs)(pG.Fragment, {
                  children: [SG.length, SG.length >= (0, BG.c)(fG.getPlayerRanks()) && (0, pG.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: GG("socialBar:limitReached")
                  })]
                })
              }), ZG && (0, pG.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, pG.jsx)(XG.b, {})
              }), !ZG && 0 === SG.length && (0, pG.jsx)("div", {
                className: "SocialMenuEmpty",
                children: GG("socialBar:noFriends")
              }), !ZG && SG.length > 0 && (0, pG.jsx)("div", {
                className: "PlayerRows",
                children: (0, pG.jsx)(jS.d, {
                  lazyLoadedClassName: "SocialMenuFriendsLazy",
                  observerUpdateDeps: [SG],
                  children: SG.map(((GG, ZG) => (0, pG.jsx)(Fk.h, {
                    playerSocialPreview: GG,
                    isFriend: !0,
                    hideFriendBadge: !0,
                    onFriendRemoved: GG => {
                      eG.b.removeFriendFromState(GG)
                    },
                    zIndex: SG.length - ZG,
                    children: (0, pG.jsx)(Fk.d, {
                      friend: GG,
                      followsLeader: bG,
                      analyticsSurface: "social_menu"
                    })
                  }, `${GG.name}_${GG.isError}`)))
                })
              })]
            })]
          })]
        })
      })
    }
    var gk = ZG(2505);
    const ek = GG => {
        let {
          action: bG,
          padAction: ZG
        } = GG;
        const {
          isTouchScreen: wG
        } = (0, iG.o)(["isTouchScreen"]), SG = (0, uw.w)();
        return wG && !SG ? null : (0, pG.jsx)(dw.e, {
          className: "EverythingMenuTabKey",
          noaAction: bG,
          padHidesKey: !0,
          padMenuShortcut: ZG
        })
      },
      Rk = (0, wG.memo)((function() {
        const {
          t: GG
        } = (0, yG.w)(), {
          gameState: bG,
          openEverythingMenuName: ZG,
          crosshairGameView: SG
        } = (0, iG.o)(["gameState", "openEverythingMenuName", "crosshairGameView"]), {
          userContext: kG
        } = (0, KG.e)(), UG = (0, qG.usePurchasesAllowed)(), VG = (0, sG.E)(), {
          view: fG
        } = (0, Nb.w)(), QG = "dot" === VG || null === VG && "ready" === (null === fG || void 0 === fG ? void 0 : fG.kind), hG = (GG, bG) => (0, pG.jsx)(ek, {
          action: GG,
          padAction: bG
        }), [dG, rG] = (0, wG.useState)(null), zG = (0, wG.useRef)(null), EG = {
          ..."inGame" === bG ? {} : (0, YG.P)({
            focusOnClick: !1
          }),
          ...Pw.d
        }, oG = GG => {
          const bG = (0, Mw.h)((bG => {
            (0, YG.O)(bG.currentTarget), iG.e.set({
              openEverythingMenuName: GG
            })
          }), "pointerup");
          return {
            ...EG,
            onPointerDown: GG => {
              EG.onPointerDown(GG), bG.onPointerDown(GG)
            },
            onPointerUp: GG => {
              EG.onPointerUp(GG), bG.onPointerUp(GG)
            },
            onClick: bG.onClick
          }
        }, XG = null !== ZG, uG = ZG !== Jb.u.COSMETIC_SHOP && !SG;
        async function CG() {
          await async function() {
            if (!dG) return;
            await dG(), rG(null)
          }(), iG.e.set({
            openEverythingMenuName: null
          })
        }
        const WG = (0, wG.useRef)(null),
          IG = (0, wG.useCallback)((() => null !== WG.current && (0, Ck.f)(WG.current)), []);

        function FG() {
          IG() || CG()
        }(0, wG.useEffect)((() => (0, iL.v)(IG)), [IG]);
        const vG = (0, wG.useMemo)((() => "inGame" === bG ? {
          text: GG("settingsMenu:exitGame"),
          onClick: () => {
            (0, ik.b)()
          }
        } : (0, mG.isDiscordClient)() ? {
          text: GG("settingsMenu:exitGame"),
          onClick: () => {
            db.l.discordActivity().then((GG => {
              GG.exit("User exited the game")
            }))
          }
        } : null), [bG, GG]);
        const aG = (0, pG.jsx)("div", {
          className: "EverythingMenuCloseButtonClickZone",
          onClick: FG,
          children: (0, pG.jsx)(YG.j, {
            className: "EverythingMenuCloseButton"
          })
        });
        return (0, pG.jsx)(Aw.b, {
          showing: XG,
          globallyUniqueKey: "EverythingMenu",
          alwaysMountChildren: !0,
          keepsMovement: ZG === Jb.u.SHOP,
          doGameplayStartStopOnShow: "inGame" === bG,
          children: (0, pG.jsx)(qw.d, {
            className: "EverythingMenuContainer",
            show: XG && !SG,
            children: (0, pG.jsx)(sw.b, {
              close: FG,
              togglePointerLock: !1,
              children: (0, pG.jsxs)("div", {
                className: "EverythingMenu",
                children: [!(0, iL.m)(ZG) && (0, pG.jsxs)("div", {
                  className: "EverythingMenuTabList",
                  children: [(0, pG.jsxs)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerStart",
                    children: [vG && (0, pG.jsx)(YG.b, {
                      className: "EverythingMenuBackButton",
                      padDestructive: !0,
                      onClick: () => {
                        vG.onClick()
                      },
                      children: vG.text
                    }), XG && UG && (0, pG.jsx)("div", {
                      ...EG,
                      className: "EverythingMenuWallet",
                      title: GG("homePage:getPremiumCurrency"),
                      onClick: () => {
                        (0, sG.n)({
                          mode: "current",
                          source: "menuWallet"
                        })
                      },
                      children: (0, pG.jsx)(uk.f, {})
                    })]
                  }), (0, pG.jsxs)("div", {
                    className: "EverythingMenuTabListInner",
                    "data-pad-tabs": "1",
                    children: [(0, pG.jsxs)("div", {
                      ...oG(Jb.u.SETTINGS),
                      "data-pad-tab": !0,
                      "data-pad-selected": ZG === Jb.u.SETTINGS ? "true" : void 0,
                      className: LG()("EverythingMenuTab", {
                        EverythingMenuTabActive: ZG === Jb.u.SETTINGS
                      }),
                      children: [GG("general:settings"), hG("OpenSettings", "pause")]
                    }), (0, pG.jsxs)("div", {
                      ...oG(Jb.u.CUSTOMISATION),
                      "data-pad-tab": !0,
                      "data-pad-selected": ZG === Jb.u.CUSTOMISATION ? "true" : void 0,
                      className: LG()("EverythingMenuTab", {
                        EverythingMenuTabActive: ZG === Jb.u.CUSTOMISATION
                      }),
                      children: [GG("general:player"), hG("OpenCharacterCustomization")]
                    }), JG.featureFlags.useSocialFeatures && (0, pG.jsxs)("div", {
                      ...oG(Jb.u.SOCIAL),
                      "data-pad-tab": !0,
                      "data-pad-selected": ZG === Jb.u.SOCIAL ? "true" : void 0,
                      className: LG()("EverythingMenuTab", {
                        EverythingMenuTabActive: ZG === Jb.u.SOCIAL
                      }),
                      ...(0, bb.getAnalyticsClickAttributes)({
                        id: "social.open_menu",
                        value: "menu_tab"
                      }, ZG === Jb.u.SOCIAL),
                      children: [GG("socialBar:social"), (0, pG.jsx)(gk.e, {})]
                    }), (0, Nb.q)(fG) && (0, pG.jsxs)("div", {
                      ...oG(Jb.u.COSMETIC_SHOP),
                      "data-pad-tab": !0,
                      "data-pad-selected": ZG === Jb.u.COSMETIC_SHOP ? "true" : void 0,
                      className: LG()("EverythingMenuTab EverythingMenuTabCosmeticShop", {
                        EverythingMenuTabActive: ZG === Jb.u.COSMETIC_SHOP
                      }),
                      children: [(0, pG.jsx)("span", {
                        className: "EverythingMenuTabCosmeticShopText",
                        children: GG("store:title")
                      }), "new" === VG && (0, pG.jsx)(cy, {}), QG && (0, pG.jsx)("span", {
                        className: "EverythingMenuTabStoreBadge EverythingMenuTabStoreDot"
                      })]
                    }), "inGame" === bG && (0, pG.jsxs)("div", {
                      ...oG(Jb.u.LOBBY_LEADERBOARD),
                      "data-pad-tab": !0,
                      "data-pad-selected": ZG === Jb.u.LOBBY_LEADERBOARD ? "true" : void 0,
                      className: LG()("EverythingMenuTab", {
                        EverythingMenuTabActive: ZG === Jb.u.LOBBY_LEADERBOARD
                      }),
                      children: [GG("general:lobby"), hG("OpenLobbyLeaderboard", "leaderboard")]
                    })]
                  }), (0, pG.jsx)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerEnd",
                    children: aG
                  })]
                }), (0, iL.m)(ZG) && aG, (0, pG.jsxs)("div", {
                  ref: WG,
                  className: "EverythingMenuBody",
                  "data-pad-initial-area": !0,
                  style: {
                    "--everythingMenuBodyBackgroundOpacity": "inGame" === bG ? "0.85" : "1"
                  },
                  children: [(0, pG.jsx)(Iw, {
                    show: ZG === Jb.u.SETTINGS,
                    setBeforeResumeCallback: rG
                  }), (0, pG.jsx)(jw, {
                    show: ZG === Jb.u.CUSTOMISATION
                  }), (0, pG.jsx)(wG.Suspense, {
                    fallback: null,
                    children: (0, pG.jsx)(hL, {
                      show: ZG === Jb.u.SHOP
                    })
                  }), (0, pG.jsx)(IL, {
                    show: ZG === Jb.u.LOBBY_LEADERBOARD
                  }), UG && (0, pG.jsx)(Xk, {
                    show: ZG === Jb.u.COSMETIC_SHOP
                  }), !UG && (0, pG.jsx)(Jk, {
                    show: ZG === Jb.u.COSMETIC_SHOP
                  }), (0, pG.jsx)(qk, {
                    show: ZG === Jb.u.SOCIAL
                  })]
                }), !(0, JG.isMobileApp)() && (0, nw.h)(kG.getPlayerRanks()) && (0, pG.jsx)(qw.d, {
                  ref: zG,
                  className: "EverythingMenuBannerDiv",
                  show: uG,
                  "data-pad-hint-bar-avoid": !0,
                  "data-pad-no-step-in": !0,
                  children: (0, pG.jsx)(Wk.e, {
                    info: {
                      adId: 2,
                      adType: "leaderboard",
                      adAlias: "banner_shop"
                    },
                    sizeInfo: {
                      parentRef: zG
                    },
                    showing: XG && uG,
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
  4911: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => dG
    });
    var wG = ZG(1006),
      SG = ZG.n(wG),
      LG = ZG(4664),
      yG = ZG(1151),
      kG = ZG(1016),
      UG = ZG(1393),
      YG = ZG(1431),
      VG = ZG(1311),
      pG = ZG(2477),
      fG = ZG(1067);
    const QG = {
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

    function KG(GG) {
      let {
        platform: bG
      } = GG;
      const ZG = "youtube" === bG;
      return (0, fG.jsxs)("span", {
        className: SG()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: ZG
        }),
        children: [ZG && (0, fG.jsx)(pG.b, {
          variant: "white"
        }), !ZG && (0, fG.jsx)(kG.c, {
          name: QG[bG].icon,
          kit: "brands"
        })]
      })
    }

    function hG(GG) {
      let {
        platform: bG,
        link: ZG,
        editable: wG,
        userContext: SG,
        onLinksUpdated: pG
      } = GG;
      const {
        t: hG
      } = (0, yG.w)(), dG = QG[bG];
      if (!ZG && !wG) return null;

      function JG() {
        var GG;
        if (!SG || !pG) return;
        VG.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: dG.name
            }
          },
          prefixText: LG.t[bG],
          placeholderText: "playBloxd",
          initialValue: null !== (GG = null === ZG || void 0 === ZG ? void 0 : ZG.handle) && void 0 !== GG ? GG : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: ZG ? "general:remove" : void 0
        }).getResult().then((async GG => {
          if ("notificationTornDown" !== GG && null !== GG) try {
            "submit" === GG.type ? await YG.d.setSocialLink(SG, bG, GG.value) : await YG.d.clearSocialLink(SG, bG), pG()
          } catch (ZG) {
            console.error("Failed to update social link", ZG), VG.NotificationProvider.showAlertPopup({
              title: ZG.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (ZG) {
        const GG = `@${ZG.handle}`;
        return (0, fG.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: dG.color
          },
          href: ZG.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, fG.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, fG.jsx)(KG, {
              platform: bG
            }), (0, fG.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, fG.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: GG
              })
            })]
          }), wG && (0, fG.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, UG.P)({
              stopPropagation: !0
            }),
            onClick: GG => {
              GG.stopPropagation(), GG.preventDefault(), JG()
            },
            children: (0, fG.jsx)(kG.c, {
              name: "pen-to-square"
            })
          }), !wG && (0, fG.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, fG.jsx)(kG.c, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, fG.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: dG.color
        },
        ...(0, UG.P)(),
        onClick: () => {
          JG()
        },
        children: [(0, fG.jsx)(KG, {
          platform: bG
        }), (0, fG.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, fG.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: dG.name
          }), (0, fG.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: hG("homePage:profileSocialLinkAdd")
          })]
        }), (0, fG.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, fG.jsx)(kG.c, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function dG(GG) {
      let {
        socialLinks: bG,
        editable: ZG = !1,
        userContext: wG,
        onLinksUpdated: SG
      } = GG;
      if (!ZG && 0 === bG.length) return null;
      const yG = new Map(bG.map((GG => [GG.platform, GG]))),
        kG = ZG ? LG.s : bG.map((GG => GG.platform));
      return (0, fG.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, fG.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: kG.map((GG => (0, fG.jsx)(hG, {
            platform: GG,
            link: yG.get(GG),
            editable: ZG,
            userContext: wG,
            onLinksUpdated: SG
          }, GG)))
        })
      })
    }
  },
  34528: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => LG
    });
    var wG = ZG(51),
      SG = ZG(3423);

    function LG() {
      const [GG, bG] = (0, wG.useState)(!1);
      return (0, wG.useLayoutEffect)((() => {
        let GG = !0;
        return (0, SG.e)().then((() => {
          GG && bG(!0)
        })), () => {
          GG = !1
        }
      }), []), GG
    }
  },
  34446: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => hG,
      f: () => KG
    });
    ZG(34454);
    var wG = ZG(1006),
      SG = ZG.n(wG),
      LG = ZG(51),
      yG = ZG(34439);

    function kG(GG, bG) {
      return Math.max(1, Math.round(GG * bG))
    }

    function UG(GG, bG) {
      const ZG = bG * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
        wG = function(GG, bG) {
          if (GG.lines) return kG(GG.lineThickness, bG) % 2;
          if (GG.dot) return kG(GG.dotSize, bG) % 2;
          return YG(GG, bG) % 2
        }(GG, bG),
        SG = VG(GG.lineThickness * ZG, wG),
        LG = kG(GG.lineLength, ZG),
        yG = Math.round(GG.gap * ZG),
        UG = GG.outline > 0 ? kG(GG.outline, ZG) : 0,
        fG = [];
      if (GG.lines && (fG.push({
          x: SG + yG,
          y: 0,
          w: LG,
          h: SG,
          arm: "right"
        }), fG.push({
          x: -yG - LG,
          y: 0,
          w: LG,
          h: SG,
          arm: "left"
        }), fG.push({
          x: 0,
          y: SG + yG,
          w: SG,
          h: LG,
          arm: "down"
        }), GG.tStyle || fG.push({
          x: 0,
          y: -yG - LG,
          w: SG,
          h: LG,
          arm: "up"
        }), 0 === yG && fG.push({
          x: 0,
          y: 0,
          w: SG,
          h: SG
        })), GG.dot) {
        const bG = VG(GG.dotSize * ZG, wG),
          LG = GG.lines && 0 === yG && GG.dotSize > GG.lineThickness ? Math.max(bG, SG + 2) : bG,
          kG = (SG - LG) / 2;
        fG.push({
          x: kG,
          y: kG,
          w: LG,
          h: LG
        })
      }
      const QG = fG.map((GG => ({
        ...GG,
        x: GG.x - UG,
        y: GG.y - UG,
        w: GG.w + 2 * UG,
        h: GG.h + 2 * UG
      })));
      let KG = null,
        hG = null;
      if (GG.circle) {
        const bG = kG(GG.circleThickness, ZG),
          LG = function(GG, bG) {
            return GG + (GG % 2 === bG ? 0 : 1)
          }(YG(GG, ZG), wG),
          yG = (SG - LG) / 2;
        KG = pG(yG, LG, bG), UG > 0 && (hG = pG(yG - UG, LG + 2 * UG, bG + 2 * UG))
      }
      return {
        cell: SG,
        fills: fG,
        outlines: UG > 0 ? QG : [],
        ring: KG,
        ringOutline: hG
      }
    }

    function YG(GG, bG) {
      return Math.round(GG.circleRadius * bG * 2 + kG(GG.circleThickness, bG))
    }

    function VG(GG, bG) {
      return Math.max(2 - bG, 2 * Math.round((GG - bG) / 2) + bG)
    }

    function pG(GG, bG, ZG) {
      const wG = 2 * ZG >= bG - 1;
      return {
        x: GG,
        y: GG,
        size: bG,
        border: Math.min(ZG, Math.floor(bG / 2)),
        filled: wG
      }
    }
    var fG = ZG(1067);
    const QG = 1.4;

    function KG(GG, bG) {
      return GG && bG ? `scale(${QG})` : "scale(1)"
    }

    function hG(GG) {
      return "classic" === GG.settings.style ? (0, fG.jsx)(rG, {
        ...GG
      }) : (0, fG.jsx)(CG, {
        ...GG
      })
    }
    const dG = .125;

    function JG(GG, bG) {
      const ZG = {};
      if (GG.color !== yG.f.color && (ZG.color = (0, yG.k)(GG.color)), GG.opacity !== yG.f.opacity && (ZG.opacity = GG.opacity / 100), GG.outline !== yG.f.outline || GG.outlineColor !== yG.f.outlineColor) {
        const bG = GG.outline,
          wG = (0, yG.k)(GG.outlineColor);
        ZG.textShadow = bG > 0 ? `-${bG}px 0 ${wG}, 0 ${bG}px ${wG}, ${bG}px 0 ${wG}, 0 -${bG}px ${wG}` : "none"
      }
      if (GG.size !== yG.f.size) {
        const wG = GG.size / 100;
        ZG.fontSize = bG ? `calc(max(1.3rem, 18px) * ${wG})` : `calc(1.3rem * ${wG})`, ZG.marginTop = `-${dG}em`, ZG.transformOrigin = `50% calc(50% + ${dG}em)`
      }
      return ZG
    }

    function rG(GG) {
      let {
        settings: bG,
        touch: ZG,
        inPreview: wG,
        inEditor: LG,
        pressed: yG = !1,
        pressRef: kG
      } = GG;
      return (0, fG.jsx)("div", {
        className: SG()("Crosshair", {
          Touch: ZG,
          CrosshairInPreview: wG,
          CrosshairInEditor: LG || wG
        }),
        ref: kG,
        style: {
          transform: KG(yG, bG.growOnClick),
          ...JG(bG, ZG)
        },
        children: "+"
      })
    }

    function zG(GG, bG) {
      return GG / bG + "px"
    }

    function EG(GG, bG, ZG, wG) {
      return {
        ...uG(GG, bG, ZG),
        width: zG(GG.w, ZG),
        height: zG(GG.h, ZG),
        background: wG
      }
    }

    function oG(GG, bG, ZG) {
      return {
        left: zG(GG.x, bG),
        top: zG(GG.y, bG),
        width: zG(GG.size, bG),
        height: zG(GG.size, bG),
        borderWidth: zG(GG.border, bG),
        borderColor: ZG,
        background: GG.filled ? ZG : void 0
      }
    }
    const XG = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function uG(GG, bG, ZG) {
      const [wG, SG] = GG.arm ? XG[GG.arm] : [0, 0], LG = Math.round(bG * ZG);
      return {
        left: zG(GG.x + wG * LG, ZG),
        top: zG(GG.y + SG * LG, ZG)
      }
    }

    function iG(GG) {
      return GG.arm ? {
        "data-arm": GG.arm,
        "data-x": GG.x,
        "data-y": GG.y
      } : {}
    }

    function CG(GG) {
      let {
        settings: bG,
        inPreview: ZG,
        inEditor: wG,
        pressed: kG = !1,
        spread: YG,
        spreadRef: VG
      } = GG;
      const pG = (0, LG.useRef)(null),
        {
          box: KG,
          dpr: hG
        } = function(GG) {
          const [bG, ZG] = (0, LG.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, LG.useLayoutEffect)((() => {
            const bG = GG.current;
            if (!bG) return;
            const wG = () => {
              const GG = bG.getBoundingClientRect(),
                wG = window.devicePixelRatio || 1;
              ZG((bG => bG.dpr === wG && bG.box.left === GG.left && bG.box.top === GG.top && bG.box.width === GG.width && bG.box.height === GG.height ? bG : {
                box: {
                  left: GG.left,
                  top: GG.top,
                  width: GG.width,
                  height: GG.height
                },
                dpr: wG
              }))
            };
            wG();
            const SG = new ResizeObserver(wG);
            return SG.observe(bG), window.addEventListener("resize", wG), window.addEventListener("scroll", wG, !0), () => {
              SG.disconnect(), window.removeEventListener("resize", wG), window.removeEventListener("scroll", wG, !0)
            }
          }), [GG]), bG
        }(pG),
        dG = (0, LG.useRef)(hG);
      dG.current = hG;
      const JG = UG(bG, hG, kG && bG.growOnClick ? QG : 1),
        rG = function(GG, bG, ZG) {
          const wG = Math.round((GG.left + GG.width / 2) * ZG - bG / 2),
            SG = Math.round((GG.top + GG.height / 2) * ZG - bG / 2);
          return {
            x: wG / ZG - GG.left,
            y: SG / ZG - GG.top
          }
        }(KG, JG.cell, hG),
        zG = (0, yG.k)(bG.color),
        XG = (0, yG.k)(bG.outlineColor),
        CG = (0, LG.useRef)(0);
      (0, LG.useLayoutEffect)((() => {
        if (VG) return VG.current = GG => {
          var bG;
          CG.current = GG, null === (bG = pG.current) || void 0 === bG || bG.querySelectorAll("[data-arm]").forEach((bG => {
            Object.assign(bG.style, uG(function(GG) {
              return {
                x: Number(GG.dataset.x),
                y: Number(GG.dataset.y),
                arm: GG.dataset.arm
              }
            }(bG), GG, dG.current))
          }))
        }, () => {
          VG.current = null
        }
      }), [VG]);
      const WG = null !== YG && void 0 !== YG ? YG : CG.current;
      return (0, fG.jsx)("div", {
        ref: pG,
        className: SG()("CrosshairShapes", {
          CrosshairInPreview: ZG,
          CrosshairInEditor: wG || ZG,
          CrosshairSpreads: void 0 !== VG
        }),
        children: (0, fG.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: rG.x,
            top: rG.y,
            opacity: bG.opacity / 100
          },
          children: (0, fG.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [JG.ringOutline && (0, fG.jsx)("div", {
              className: "CrosshairRing",
              style: oG(JG.ringOutline, hG, XG)
            }), JG.outlines.map(((GG, bG) => (0, fG.jsx)("div", {
              className: "CrosshairPart",
              ...iG(GG),
              style: EG(GG, WG, hG, XG)
            }, `o${bG}`))), JG.ring && (0, fG.jsx)("div", {
              className: "CrosshairRing",
              style: oG(JG.ring, hG, zG)
            }), JG.fills.map(((GG, bG) => (0, fG.jsx)("div", {
              className: "CrosshairPart",
              ...iG(GG),
              style: EG(GG, WG, hG, zG)
            }, `f${bG}`)))]
          })
        })
      })
    }
  },
  34461: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => VG,
      g: () => dG,
      j: () => hG
    });
    var wG = ZG(34439);
    const SG = "XH1-",
      LG = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      yG = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      kG = ["color", "outlineColor"],
      UG = 1 + 3 * kG.length + yG.length + 1,
      YG = Math.ceil(8 * UG / Math.log2(62)),
      VG = SG.length + YG;

    function pG(GG) {
      let bG = 90;
      for (const ZG of GG) bG = 31 * bG + ZG & 255;
      return bG
    }
    const fG = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      QG = BigInt(fG.length);

    function KG(GG, bG) {
      let ZG = 0n;
      for (const SG of GG) {
        const GG = fG.indexOf(SG);
        if (GG < 0) return null;
        ZG = ZG * QG + BigInt(GG)
      }
      if (ZG >> BigInt(8 * bG) !== 0n) return null;
      const wG = [];
      for (let SG = 0; SG < bG; SG++) wG.unshift(Number(0xffn & ZG)), ZG >>= 8n;
      return wG
    }

    function hG(GG) {
      let bG = "shapes" === GG.style ? 1 : 0;
      LG.forEach(((ZG, wG) => {
        GG[ZG] && (bG |= 1 << wG + 1)
      }));
      const ZG = [bG];
      for (const SG of kG) {
        const bG = (0, wG.g)(SG, GG[SG]);
        ZG.push(bG >> 16 & 255, bG >> 8 & 255, 255 & bG)
      }
      for (const SG of yG) {
        const {
          min: bG,
          step: LG
        } = wG.b[SG];
        ZG.push(Math.round(((0, wG.g)(SG, GG[SG]) - bG) / LG))
      }
      return ZG.push(pG(ZG)), SG + function(GG, bG) {
        let ZG = 0n;
        for (const SG of GG) ZG = ZG << 8n | BigInt(SG);
        let wG = "";
        for (let SG = 0; SG < bG; SG++) wG = fG[Number(ZG % QG)] + wG, ZG /= QG;
        return wG
      }(ZG, YG)
    }

    function dG(GG) {
      for (const bG of GG.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${YG}})`, "gi"))) {
        const GG = JG(KG(bG[1], UG));
        if (GG) return GG
      }
      return null
    }

    function JG(GG) {
      if (!GG || GG.length !== UG || pG(GG.slice(0, -1)) !== GG[GG.length - 1]) return null;
      const bG = GG[0],
        ZG = {
          ...wG.f,
          style: 1 & bG ? "shapes" : "classic"
        };
      LG.forEach(((GG, wG) => {
        ZG[GG] = 0 !== (bG & 1 << wG + 1)
      }));
      let SG = 1;
      for (const wG of kG) ZG[wG] = GG[SG] << 16 | GG[SG + 1] << 8 | GG[SG + 2], SG += 3;
      for (const LG of yG) {
        const {
          min: bG,
          step: yG
        } = wG.b[LG];
        ZG[LG] = (0, wG.g)(LG, bG + GG[SG] * yG), SG++
      }
      return ZG
    }
  },
  34439: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => wG,
      f: () => SG,
      g: () => LG,
      k: () => YG,
      l: () => UG,
      m: () => VG,
      n: () => kG,
      o: () => yG
    });
    const wG = {
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
      SG = Object.freeze({
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

    function LG(GG, bG) {
      var ZG;
      const {
        min: LG,
        max: yG,
        step: kG
      } = wG[GG];
      if (!Number.isFinite(bG)) return SG[GG];
      const UG = (null !== (ZG = String(kG).split(".")[1]) && void 0 !== ZG ? ZG : "").length,
        YG = Number((Math.round(bG / kG) * kG).toFixed(UG));
      return Math.min(yG, Math.max(LG, YG))
    }

    function yG(GG, bG, ZG) {
      const wG = "number" === typeof ZG ? LG(bG, ZG) : ZG;
      return {
        ...GG,
        [bG]: wG
      }
    }

    function kG(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(SG).every((wG => ZG.includes(wG) || GG[wG] === bG[wG]))
    }

    function UG(GG) {
      return kG(GG, SG)
    }

    function YG(GG) {
      return `#${GG.toString(16).padStart(6,"0")}`
    }

    function VG(GG) {
      const bG = /^#?([0-9a-f]{6})$/i.exec(GG.trim());
      return bG ? parseInt(bG[1], 16) : null
    }
  },
  34463: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => pG,
      h: () => fG
    });
    var wG = ZG(51),
      SG = ZG(29),
      LG = ZG(34461),
      yG = ZG(34439);
    const kG = "crosshairCode";
    let UG = null;
    const YG = new Set;

    function VG() {
      if (null === UG) {
        var GG;
        const bG = SG.h.getItem(kG);
        UG = null !== (GG = "string" === typeof bG ? (0, LG.g)(bG) : null) && void 0 !== GG ? GG : yG.f
      }
      return UG
    }

    function pG(GG) {
      UG = GG, (0, yG.l)(GG) ? SG.h.removeItem(kG) : SG.h.setItem(kG, (0, LG.j)(GG));
      for (const bG of YG) bG()
    }

    function fG() {
      const [GG, bG] = (0, wG.useState)(VG);
      return (0, wG.useEffect)((() => {
        const GG = () => {
          bG(VG())
        };
        return GG(), ZG = GG, YG.add(ZG), () => {
          YG.delete(ZG)
        };
        var ZG
      }), []), GG
    }
  },
  34432: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => LG,
      f: () => SG
    });
    var wG = ZG(17);

    function SG(GG, bG) {
      return GG && !bG
    }

    function LG() {
      return SG(wG.e.get("isTouchScreen"), wG.e.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  34405: (GG, bG, ZG) => {
    function wG(GG, bG) {
      return GG && !bG
    }
    ZG.d(bG, {
      b: () => wG
    })
  },
  34425: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => LG
    });
    var wG = ZG(1032);

    function SG() {
      var GG, bG;
      return null !== (GG = null === (bG = screen.orientation) || void 0 === bG ? void 0 : bG.type) && void 0 !== GG ? GG : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const LG = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && SG() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = SG(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, wG.rh)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const GG of this.resizers) GG()
          }
        }), 1e3)
      }
      heldSizer(GG) {
        let bG = !1;
        return () => {
          if (bG && this.isHeld()) return null;
          const ZG = GG();
          return bG ||= null !== ZG, ZG
        }
      }
      onRelease(GG) {
        return this.resizers.add(GG), () => {
          this.resizers.delete(GG)
        }
      }
    }
  },
  34370: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => rG,
      g: () => YG,
      h: () => hG,
      j: () => KG
    });
    var wG = ZG(140),
      SG = ZG(1230),
      LG = ZG(1163),
      yG = ZG(1096),
      kG = ZG(1694);
    const UG = {
      offline: "homePage:onboardingNameNoAccount",
      outdated: "general:updatedReloading",
      busy: "homePage:changeNameTooFast",
      server: "homePage:changeNameFailed"
    };

    function YG(GG) {
      return UG[GG]
    }

    function VG(GG) {
      return (0, kG.d)(GG) ? "outdated" : GG instanceof wG.b ? 429 === GG.httpCode ? "busy" : "server" : "offline"
    }

    function pG(GG, bG, ZG) {
      return (0, yG.postJsonWithMetricsCookiesAndJsonResponse)(`${LG.clientSideServerUrls.indexUrl}${bG}`, ZG, {
        retries: 3
      }, GG.getMetricsCookies()).catch((GG => (console.error("Bad response from the server when trying to change name:", bG, GG), {
        outcome: "failed",
        failure: VG(GG)
      })))
    }

    function fG(GG) {
      return "outcome" in GG && "failed" === GG.outcome
    }

    function QG(GG) {
      return console.error("Error when trying to get with new name from DB", GG), {
        outcome: "refused",
        message: GG
      }
    }
    async function KG(GG) {
      const bG = await pG(GG, "/index/name/random", {});
      return fG(bG) ? bG : "err" in bG ? QG(bG.err) : (GG.setPlayerName(bG.name), {
        outcome: "changed",
        name: bG.name
      })
    }
    async function hG(GG, bG) {
      const ZG = await pG(GG, "/index/name/update", {
        name: bG
      });
      return fG(ZG) ? ZG : "err" in ZG ? QG(ZG.err) : ZG.nameExists ? {
        outcome: "taken"
      } : (GG.setPlayerName(bG), {
        outcome: "changed",
        name: bG
      })
    }

    function dG(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
      const wG = 1 === bG ? 1 : 10 ** (bG - 1),
        LG = String(wG + Math.floor(ZG() * (10 ** bG - wG)));
      return `${GG.slice(0,SG.g-bG)}${LG}`
    }
    const JG = [1, 2, 3, 4];
    async function rG(GG, bG) {
      const ZG = await hG(GG, bG);
      if ("taken" !== ZG.outcome) return ZG;
      for (const wG of JG) {
        const ZG = dG(bG, wG),
          SG = await hG(GG, ZG);
        if ("taken" !== SG.outcome) return SG
      }
      return {
        outcome: "taken"
      }
    }
  },
  34411: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => kG,
      g: () => UG
    });
    var wG = ZG(17);
    const SG = 24,
      LG = "farNametags",
      yG = 1e5;

    function kG() {
      var GG;
      return null === (GG = wG.e.get("showDistantNametags")) || void 0 === GG || GG
    }

    function UG() {
      var GG;
      return null !== (GG = function() {
        const GG = new URLSearchParams(window.location.search).get(LG),
          bG = null === GG || "" === GG ? NaN : Number(GG);
        return Number.isFinite(bG) && bG >= 0 ? Math.min(bG, yG) : null
      }()) && void 0 !== GG ? GG : kG() ? 0 : SG
    }
  },
  34429: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => YG,
      f: () => pG,
      j: () => VG
    });
    var wG = ZG(273),
      SG = ZG(80),
      LG = ZG(111),
      yG = ZG(105),
      kG = ZG(626);
    const UG = new Set(["mali_bifrost"]);

    function YG() {
      if ("android" !== (0, SG.pageOperatingSystem)() || kG.i || (0, kG.e)("webgl_default")) return;
      const GG = (0, LG.l)(),
        bG = null === GG ? (0, wG.q)() : (0, wG.h)(GG.vendor, GG.renderer);
      return null !== bG && UG.has(bG) ? GG => (0, wG.m)((0, yG.c)(GG).vendor, bG) : void 0
    }

    function VG(GG, bG) {
      return GG ? () => !0 : bG()
    }
    async function pG(GG) {
      try {
        const bG = VG(GG, YG),
          ZG = navigator.gpu;
        if (void 0 === bG || void 0 === ZG) return !1;
        const wG = await (0, yG.l)(ZG, {
          seed: !1,
          compatibility: bG
        });
        return "string" !== typeof wG && wG.compatibility && !(0, yG.g)(wG.adapter)
      } catch (bG) {
        return console.error("WebGPU compatibility-mode adapter request failed.", bG), !1
      }
    }
  },
  34499: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => SG,
      e: () => yG
    });
    const wG = [{
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

    function SG(GG) {
      let bG, ZG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof GG) {
        if (!Number.isFinite(GG)) return "0";
        if (Math.abs(GG) < 100) {
          const bG = GG < 0 ? "-" : "",
            ZG = Math.abs(GG);
          return ZG >= 10 ? `${bG}${ZG.toFixed(1).replace(/\.0$/,"")}` : `${bG}${ZG.toFixed(2).replace(/\.?0+$/,"")}`
        }
        bG = BigInt(Math.floor(GG))
      } else bG = GG;
      const SG = bG < 0n ? -bG : bG,
        LG = bG < 0n ? "-" : "",
        yG = SG.toString();
      if (yG.length <= ZG) return `${LG}${yG}`;
      const kG = 3 * Math.floor((yG.length - 1) / 3);
      if (kG < 3) return `${LG}${yG}`;
      if (kG > 3 * wG.length) {
        const GG = yG[0],
          bG = yG.slice(1, 3).replace(/0+$/, "");
        return `${LG}${bG?`${GG}.${bG}`:GG}e${yG.length-1}`
      }
      const {
        threshold: UG,
        suffix: YG
      } = wG[wG.length - kG / 3], VG = SG / UG, pG = Number(1000n * (SG % UG) / UG), fG = Number(VG) + pG / 1e3;
      let QG;
      return QG = fG >= 100 ? Math.floor(fG).toString() : fG >= 10 ? fG.toFixed(1).replace(/\.0$/, "") : fG.toFixed(2).replace(/\.?0+$/, ""), `${LG}${QG}${YG}`
    }
    const LG = wG.map((GG => {
      let {
        threshold: bG,
        suffix: ZG
      } = GG;
      return {
        threshold: Number(bG),
        suffix: ZG
      }
    })).filter((GG => {
      let {
        threshold: bG
      } = GG;
      return Number.isFinite(bG)
    }));

    function yG(GG) {
      const bG = Math.abs(GG),
        ZG = GG < 0 ? "-" : "";
      for (const {
          threshold: wG,
          suffix: SG
        }
        of LG)
        if (bG >= wG) {
          const GG = bG / wG;
          if (GG >= 1e3) return `${ZG}${bG.toExponential(2).replace("e+","e")}`;
          let LG;
          return LG = GG >= 100 ? Math.floor(GG).toString() : GG >= 10 ? GG.toFixed(1).replace(/\.0$/, "") : GG.toFixed(2).replace(/\.?0+$/, ""), `${ZG}${LG}${SG}`
        } return `${ZG}${bG}`
    }
  },
  34483: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => VG,
      g: () => fG,
      h: () => pG,
      l: () => yG,
      m: () => YG,
      o: () => UG
    });
    var wG = ZG(352);
    const SG = ["Wood Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table"],
      LG = {
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

    function yG(GG) {
      var bG;
      return null !== (bG = LG[GG]) && void 0 !== bG ? bG : {
        translationKey: ""
      }
    }
    const kG = {
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

    function UG(GG) {
      return SG.includes(GG)
    }

    function YG(GG) {
      var bG;
      return !0 === (null === GG || void 0 === GG || null === (bG = GG.customAttributes) || void 0 === bG ? void 0 : bG.cannotEnchant)
    }

    function VG(GG, bG) {
      const {
        max: ZG
      } = kG[GG].at(-1);
      return bG <= ZG
    }

    function pG(GG) {
      const bG = Math.sin(GG / 80),
        ZG = GG => {
          if (GG <= 0) return 0;
          if (GG > 1) return 1;
          let bG = 0;
          const ZG = [1, 7, 21, 35, 35, 21, 7, 1];
          for (let wG = 0; wG < ZG.length; wG++) {
            bG += (wG % 2 === 0 ? 1 : -1) * ZG[wG] * Math.pow(GG, 2 + wG) / (2 + wG)
          }
          return 72 * bG
        },
        wG = .3 - .78 * bG,
        SG = .5 - .78 * bG,
        LG = .6 - .7 * bG,
        yG = .8 - .6 * bG;
      let kG = ZG(wG),
        UG = ZG(SG) - kG,
        YG = ZG(LG) - UG - kG,
        VG = ZG(yG) - YG - UG - kG;
      wG < .041 && (UG /= 1 - kG, YG /= 1 - kG, VG /= 1 - kG, kG = 0), SG < .041 && (kG /= 1 - UG, YG /= 1 - UG, VG /= 1 - UG, UG = 0), LG < .041 && (kG /= 1 - YG, UG /= 1 - YG, VG /= 1 - YG, YG = 0), yG < .041 && (kG /= 1 - VG, UG /= 1 - VG, YG /= 1 - VG, VG = 0);
      return {
        commonProb: kG,
        uncommonProb: UG,
        rareProb: YG,
        epicProb: VG,
        legendaryProb: 1 - (VG + YG + UG + kG)
      }
    }

    function fG(GG, bG) {
      const {
        min: ZG,
        max: SG
      } = kG[GG][bG], LG = wG.c.sampleUniformIntDistribution(ZG, SG, "includeMax");
      return {
        ...pG(LG),
        level: LG
      }
    }
  },
  34454: () => {},
  12875: GG => {
    GG.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAaUlEQVR4AWyOQQ6AIAwECwGNr/HkYzz4Hy9+WEkq01BDDCRDy3ZbGo9rU2c/V+1Bj9JOeW7RokaTBO0zpDxJXmYJKXjdohlwOqbWi4YaJFIgcYEIaGAT+JvHCDNQ8El9ziQz/BdzE00vAAAA//+cTXaSAAAABklEQVQDAHI9N5g1NM74AAAAAElFTkSuQmCC"
  },
  14030: GG => {
    GG.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAGBJREFUGJVNjjEOxEAIA+dW22Rpk2+nSndPZFtMewU6FBdIjJHx536+ABARUl7XCbjvyV9mJqX7BtY6RkS0t9bRc0op5ZuaGTAqtPZCpfG+AqSs8FFlulh7s6j7rh9d9wclFjd0V4Z2HAAAAABJRU5ErkJggg=="
  },
  15464: GG => {
    GG.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAbUlEQVR4nESOSwqAMAxEow0pive/gIcTBBdSsZh+NG20DlnkM8MLhnXuzHSnAwBaI8LIV2RXOiIkaGfMKfXGyByZparbyQZpGNUV/KaHGrWowZKVgSx8Qr8vzdXgAkYFCIn9mZP7E8pQ1Q9fzAMAAP//PTNTFgAAAAZJREFUAwAk1D9dXrbJngAAAABJRU5ErkJggg=="
  },
  15973: GG => {
    GG.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAE1JREFUGJVNjsEOwDAIQp/GZv3/j+xx5zVbsh0wZFxEImCsc88RRwHsB5OaI8SA636hjwosNXSUWuRTphxp5iahHX+pozQs+Yt0rU1SPg0CIfgDMgomAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);