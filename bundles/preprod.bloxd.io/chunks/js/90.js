export const id = 90;
export const ids = [90];
export const modules = {
  34849: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      EverythingMenu: () => cC
    });
    var AH = LH(45),
      rH = LH(1038),
      SH = LH.n(rH),
      hH = LH(1123),
      tH = LH(1315),
      zH = LH(2143),
      CH = LH(1455),
      EH = LH(1049),
      XH = LH(1225);

    function GH(HH) {
      let {
        items: BH,
        link: LH,
        onClick: AH,
        selectedItemId: rH,
        className: GH,
        padStartsOnTab: YH = !0
      } = HH;
      const {
        t: uH
      } = (0, hH.B)(), QH = (0, EH.k)(), WH = [];
      for (const SH of BH) {
        var MH;
        const HH = WH[WH.length - 1];
        var xH;
        if (HH && HH.title === (null !== (MH = SH.section) && void 0 !== MH ? MH : null)) HH.items.push(SH);
        else WH.push({
          title: null !== (xH = SH.section) && void 0 !== xH ? xH : null,
          items: [SH]
        })
      }
      return (0, XH.jsxs)("div", {
        className: SH()("MenuSideBarBody", GH),
        "data-pad-tabs": "2",
        children: [WH.map(((HH, BH) => {
          var LH;
          return (0, XH.jsxs)("div", {
            className: "MenuSideBarSection",
            children: [HH.title && (0, XH.jsx)("div", {
              className: "MenuSideBarSectionTitle",
              children: uH(HH.title)
            }), HH.items.map((HH => {
              var BH;
              const LH = !!HH.iconElement || !!HH.faIcon;
              return (0, XH.jsxs)("div", {
                "data-pad-tab": !0,
                "data-pad-selected": rH === HH.id ? "true" : void 0,
                "data-pad-default-focus": YH && rH === HH.id || void 0,
                className: SH()("MenuSideBarBodyTab", {
                  ActiveMenuSideBarBodyTab: rH === HH.id
                }),
                onClick: () => {
                  AH(HH.id)
                },
                children: [LH && (0, XH.jsx)("div", {
                  className: "MenuSideBarBodyTabIcon",
                  children: null !== (BH = HH.iconElement) && void 0 !== BH ? BH : (0, XH.jsx)(tH.c, {
                    name: HH.faIcon
                  })
                }), (!QH || !LH) && (0, XH.jsx)("div", {
                  children: uH(HH.title)
                }), HH.redDot && (0, XH.jsx)(zH.b, {
                  top: "-0.2rem",
                  right: "-1rem"
                })]
              }, HH.id)
            }))]
          }, null !== (LH = HH.title) && void 0 !== LH ? LH : BH)
        })), LH && (0, XH.jsxs)("div", {
          ...(0, CH.db)(),
          "data-pad-destructive": !0,
          className: "MenuSideBarBodyTab MenuSideBarLink",
          onClick: LH.onClick,
          children: [(0, XH.jsx)("div", {
            className: "MenuSideBarBodyTabIcon",
            children: (0, XH.jsx)(tH.c, {
              name: LH.faIcon
            })
          }), (0, XH.jsx)("div", {
            children: uH(LH.title)
          }), (0, XH.jsx)(tH.c, {
            name: "arrow-right",
            className: "MenuSideBarLinkArrow"
          })]
        })]
      })
    }
    var YH = LH(2800),
      uH = LH(1061),
      QH = LH(2628),
      WH = LH(3465),
      MH = LH(81),
      xH = LH(1998),
      vH = LH(2372),
      PH = LH(2381),
      TH = LH(1706),
      UH = LH(1313),
      VH = LH(5478),
      OH = LH(15),
      bH = LH(34856);

    function kH(HH) {
      let {
        setApplySettingsCallback: BH
      } = HH;
      const {
        clientEscMenuOptions: LH
      } = (0, OH.m)(["clientEscMenuOptions"]), [rH, SH] = (0, AH.useState)(!1), [hH, tH] = (0, AH.useState)(!1), [zH, EH] = (0, AH.useState)(6400), [GH, YH] = (0, AH.useState)(3600), [uH, QH] = (0, AH.useState)(!1), [WH, MH] = (0, AH.useState)(!1);

      function xH(HH) {
        const BH = "screenshot" === HH ? tH : SH;
        BH(!0);
        const LH = uH ? "normals" : WH ? "depth" : null;
        bH.devTools.downloadScene(HH, {
          width: zH,
          height: GH,
          colouring: LH
        }).catch((HH => {
          console.error("Couldn't download the scene", HH)
        })).finally((() => {
          BH(!1)
        }))
      }
      return (0, XH.jsxs)("div", {
        className: "DeveloperToolsCategory",
        children: [(0, XH.jsx)(VH.c, {
          label: "Disable Ambient Occlusion",
          checked: LH.disableAmbientOcclusion,
          onClick: HH => {
            OH.c.setClientEscMenuOptions({
              disableAmbientOcclusion: HH
            }), BH((() => VH.i))
          },
          circleInfoText: "Disables ambient occlusion which is the shadow effect that makes corners and crevices darker."
        }), bH.devTools.supports("ambientLight") && (0, XH.jsx)(VH.f, {
          name: "Ambient Lighting Intensity",
          min: 0,
          max: 1,
          step: .01,
          initValue: LH.ambientLightIntensity,
          onChange: HH => {
            bH.devTools.setAmbientLightIntensity(HH).then((() => {
              OH.c.setClientEscMenuOptions({
                ambientLightIntensity: HH
              })
            })).catch((HH => {
              console.error("Couldn't set the ambient light", HH)
            }))
          },
          circleInfoText: "Sets the intensity of the white ambient light in the scene. The default is 0.5."
        }), bH.devTools.supports("weaponRaycasts") && (0, XH.jsx)(VH.c, {
          label: "Show Weapon Raycasts",
          checked: LH.showWeaponRaycasts,
          onClick: HH => {
            OH.c.setClientEscMenuOptions({
              showWeaponRaycasts: HH
            })
          },
          circleInfoText: "Draws debug lines for the raw raycasts used by locally fired weapons."
        }), bH.devTools.supports("sceneDownload") && (0, XH.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, XH.jsxs)("div", {
            className: "SettingBox WarningBorder",
            children: [(0, XH.jsx)(VH.c, {
              label: "Apply normal-based coloring",
              checked: uH,
              onClick: HH => {
                QH(HH), HH && MH(!1)
              },
              circleInfoText: "Colors faces based on their normal direction (red=X, green=Y, blue=Z)."
            }), (0, XH.jsx)(VH.c, {
              label: "Apply depth-based coloring",
              checked: WH,
              onClick: HH => {
                MH(HH), HH && QH(!1)
              },
              circleInfoText: "Colors from white (near) to black (far) based on distance from camera. Only works for screenshot export."
            }), (0, XH.jsxs)("div", {
              className: "SettingBox DeveloperToolsCategoryScreenshotSettings",
              children: [(0, XH.jsx)("div", {
                className: "SettingLabel",
                children: "Screenshot size in pixels (width x height)"
              }), (0, XH.jsx)(TH.e, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (HH, BH) => {
                  const LH = parseInt(HH) || 6400;
                  EH(LH)
                },
                placeholderText: "width",
                maxLength: 10,
                defaultValue: zH.toString()
              }), (0, XH.jsx)("span", {
                children: "X"
              }), (0, XH.jsx)(TH.e, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (HH, BH) => {
                  const LH = parseInt(HH) || 3600;
                  YH(LH)
                },
                placeholderText: "height",
                maxLength: 10,
                defaultValue: GH.toString()
              })]
            }), (0, XH.jsxs)("div", {
              className: "DeveloperToolsCategoryExportButtons",
              children: [(0, XH.jsxs)(CH.i, {
                onClick: () => {
                  xH("screenshot")
                },
                disabled: hH,
                children: [hH && (0, XH.jsx)(UH.d, {}), "Download Screenshot"]
              }), (0, XH.jsxs)(CH.i, {
                onClick: () => {
                  xH("glb")
                },
                disabled: rH,
                children: [rH && (0, XH.jsx)(UH.d, {}), "Download GLB"]
              })]
            })]
          }), (0, XH.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: 'To download GLB of scene with textures you need to "Disable Block Texture Atlas" in graphic settings first (you will need to reload the page to apply the setting).'
          })]
        })]
      })
    }
    var mH = LH(120),
      oH = LH(1070),
      IH = LH(34867),
      fH = LH(3323),
      lH = LH(1509),
      KH = LH(1206),
      cH = LH(1179),
      eH = LH(2112),
      qH = LH(1502),
      gH = LH(317),
      NH = LH(1574),
      RH = LH(597),
      jH = LH(2486);
    const nH = "store:retiredRankEnds";

    function FH(HH) {
      let {
        until: BH,
        className: LH
      } = HH;
      const {
        t: AH,
        selectedLanguage: rH
      } = (0, hH.B)(), SH = new Date(BH).toLocaleDateString((0, hH.n)(rH.code, nH), {
        year: "numeric",
        month: "short",
        day: "numeric"
      });
      return (0, XH.jsx)("span", {
        className: LH,
        children: AH(nH, {
          date: SH
        })
      })
    }
    var DH = LH(2397),
      wH = LH(3353),
      ZH = LH(3346),
      dH = LH(186),
      aH = LH(1664),
      sH = LH(1194),
      JH = LH(3366);

    function iH(HH, BH, LH) {
      const AH = RH.m[(0, RH.f)(RH.m, BH)],
        rH = void 0 === AH ? void 0 : (0, dH.d)(HH.entitlements, AH.entitlementId);
      return void 0 === rH || null === rH.expiresAt || (0, ZH.e)(rH) <= LH ? null : rH.willRenew && null === rH.billingIssueDetectedAt ? {
        renews: !0,
        at: Math.max(rH.expiresAt, LH)
      } : {
        renews: !1,
        at: (0, ZH.e)(rH)
      }
    }
    var pH = LH(3337),
      yH = LH(3340);
    const HB = {
      cancel: !1,
      resume: !1,
      manage: !1
    };

    function BB(HH) {
      return HH instanceof wH.c && "storeUnavailable" === HH.code ? (console.warn("Billing: the store didn't take a subscription change:", HH), "store:subscriptionStoreUnavailable") : HH instanceof wH.c && "subscriptionActionUnavailable" === HH.code ? (console.warn("Billing: a subscription action billing no longer offers:", HH), "store:subscriptionActionUnavailable") : (console.error("Billing: changing a subscription failed:", HH), "store:subscriptionChangeFailed")
    }
    async function LB() {
      try {
        var HH;
        const {
          offering: BH
        } = await (0, yH.getBillingClient)().getOfferings((0, jH.u)(Date.now()).placementId);
        return null !== (HH = null === BH || void 0 === BH ? void 0 : BH.packages.find(pH.isPricedPackage)) && void 0 !== HH ? HH : null
      } catch (BH) {
        return console.warn("Billing: loading the rank plan's price failed:", BH), null
      }
    }

    function AB(HH) {
      const {
        userContext: BH
      } = (0, uH.e)(), {
        superRankInfo: LH
      } = BH, rH = (0, DH.usePurchasesAllowed)(), SH = (0, gH.Ec)(LH), hH = HH && rH && (SH || BH.ranksMayChange), [tH, zH] = (0, AH.useState)(null), [CH, EH] = (0, AH.useState)(!1), [XH, GH] = (0, AH.useState)(!1), [YH, QH] = (0, AH.useState)(null);
      (0, AH.useEffect)((() => {
        if (!hH) return;
        let HH = !1;
        const LH = () => {
          Promise.all([(0, yH.getBillingClient)().getSubscriptions(), LB()]).then((LH => {
            let [AH, rH] = LH;
            HH || (zH({
              for: BH,
              answer: AH,
              pkg: rH
            }), EH(!1))
          }), (BH => {
            console.error("Billing: loading the player's subscriptions failed:", BH), HH || EH(!0)
          }))
        };
        LH();
        const AH = aH.d.addRefetchListener("billing", LH);
        return () => {
          HH = !0, AH()
        }
      }), [hH, BH]);
      const WH = hH && SH && null !== tH && tH.for === BH ? function(HH, BH, LH, AH) {
        var rH;
        const {
          customerInfo: SH,
          actions: hH
        } = HH, tH = RH.m[(0, RH.f)(RH.m, BH)], zH = void 0 === tH ? void 0 : (0, dH.d)(SH.entitlements, tH.entitlementId), CH = iH(SH, BH, AH);
        if (void 0 === zH || null === CH) return null;
        const EH = Object.entries(SH.subscriptions).find((HH => {
          let [, BH] = HH;
          return BH.productId === zH.productId && BH.store === zH.store && !(0, ZH.k)(BH.status)
        }));
        if (void 0 === EH) return null;
        const [XH, GH] = EH;
        return {
          key: XH,
          tierId: BH,
          info: GH,
          actions: null !== (rH = (0, dH.d)(hH, XH)) && void 0 !== rH ? rH : HB,
          date: CH,
          pkg: (null === LH || void 0 === LH ? void 0 : LH.productId) === GH.productId ? LH : null
        }
      }(tH.answer, LH.tier, tH.pkg, Date.now()) : null;
      return {
        subscription: WH,
        loadFailed: hH && SH && CH,
        busy: XH,
        errorKey: YH,
        change: async function(HH) {
          if (null === WH || XH) return;
          GH(!0), QH(null);
          const LH = (0, yH.getBillingClient)();
          try {
            const AH = await ("cancel" === HH ? LH.cancelSubscription(WH.key) : LH.resumeSubscription(WH.key));
            zH({
              for: BH,
              answer: AH,
              pkg: WH.pkg
            }), (0, JH.d)()
          } catch (AH) {
            QH(BB(AH))
          } finally {
            GH(!1)
          }
        },
        openManagePage: async function() {
          if (null === WH || XH) return;
          const HH = window.open("", "_blank");
          GH(!0), QH(null);
          try {
            const BH = await (0, yH.getBillingClient)().subscriptionManagementUrl(WH.key, sH.g.get().getCurrentLanguageCode());
            null === HH ? window.open(BH, "_blank", "noopener") : (HH.opener = null, HH.location.href = BH)
          } catch (BH) {
            null === HH || void 0 === HH || HH.close(), QH(BB(BH))
          } finally {
            GH(!1)
          }
        }
      }
    }
    var rB = LH(1352),
      SB = LH(3392);

    function hB(HH, BH) {
      return new Date(HH).toLocaleDateString(BH, {
        year: "numeric",
        month: "short",
        day: "numeric"
      })
    }

    function tB(HH) {
      let {
        showing: BH,
        className: LH
      } = HH;
      const {
        t: AH,
        selectedLanguage: rH
      } = (0, hH.B)(), {
        subscription: zH,
        loadFailed: EH,
        busy: GH,
        errorKey: YH,
        change: uH,
        openManagePage: QH
      } = AB(BH);
      if (EH) return (0, XH.jsx)("div", {
        className: SH()("RankSubscriptionManage SmallTextBold RankSubscriptionManageError", LH),
        children: AH("store:subscriptionLoadFailed")
      });
      if (null === zH) return null;
      const {
        date: WH,
        info: MH,
        actions: xH,
        pkg: vH
      } = zH, PH = WH.renews ? "store:renewsOn" : "store:endsOn", TH = hB(WH.at, (0, hH.n)(rH.code, PH)), UH = AH((0, jH.o)(zH.tierId).nameKey), VH = null !== MH.billingIssueDetectedAt;
      return (0, XH.jsxs)("div", {
        className: SH()("RankSubscriptionManage", LH),
        children: [(0, XH.jsxs)("div", {
          className: "RankSubscriptionManageStatus SmallTextBold",
          children: [AH(PH, {
            date: TH
          }), WH.renews && null !== vH && (0, DH.subscriptionsSold)() && (0, XH.jsxs)(XH.Fragment, {
            children: [" \xb7 ", AH("store:pricePerMonth", {
              price: (0, SB.f)(vH)
            })]
          })]
        }), VH && (0, XH.jsxs)("div", {
          className: "RankSubscriptionManageWarning SmallTextBold",
          children: [(0, XH.jsx)(tH.c, {
            name: "triangle-exclamation"
          }), " ", AH("store:paymentFailing", {
            rank: UH
          })]
        }), (0, XH.jsxs)("div", {
          className: "RankSubscriptionManageActions",
          children: [xH.manage && (0, XH.jsx)(CH.m, {
            disabled: GH,
            onClick: () => {
              QH()
            },
            children: AH(VH ? "store:updatePayment" : "payments:manageSubscription")
          }), xH.resume && (0, XH.jsx)(CH.i, {
            loading: GH,
            onClick: () => {
              uH("resume")
            },
            children: AH("store:resumeSubscription")
          }), xH.cancel && (0, XH.jsx)(CH.O, {
            loading: GH,
            onClick: () => {
              (async function(HH, BH, LH) {
                const AH = Date.now() >= HH.info.currentPeriodEnd;
                return !0 === await rB.NotificationProvider.showPromptPopup({
                  title: "store:cancelSubscriptionTitle",
                  subtitle: AH ? "store:cancelEndsNow" : "store:cancelKeepsUntil",
                  textOpts: {
                    title: {
                      rank: BH
                    },
                    subtitle: {
                      rank: BH,
                      date: LH
                    }
                  },
                  confirmText: "store:cancelSubscription",
                  confirmTooltip: "",
                  cancelText: "store:keepSubscription",
                  cancelTooltip: "",
                  destructive: !0,
                  unlockPointerKey: "rankSubscriptionCancel"
                }).getResult()
              })(zH, UH, hB(MH.currentPeriodEnd, (0, hH.n)(rH.code, "store:cancelKeepsUntil"))).then((HH => {
                HH && uH("cancel")
              }))
            },
            children: AH("store:cancelSubscription")
          })]
        }), null !== YH && (0, XH.jsx)("div", {
          className: "RankSubscriptionManageError SmallTextBold",
          children: AH(YH)
        })]
      })
    }
    var zB = LH(2388),
      CB = LH(2936),
      EB = LH(1863);
    async function XB() {
      try {
        return function(HH) {
          const BH = new Map;
          for (const {
              store: LH,
              status: AH,
              autoRenewStatus: rH,
              managementUrl: SH
            }
            of Object.values(HH.subscriptions)) !(0, ZH.g)(LH) || (0, ZH.k)(AH) || "willNotRenew" === rH || BH.has(LH) || BH.set(LH, null !== SH && void 0 !== SH ? SH : ZH.l[LH]);
          return Array.from(BH, (HH => {
            let [BH, LH] = HH;
            return {
              store: BH,
              managementUrl: LH
            }
          }))
        }(await (0, EB.j)((0, yH.getBillingClient)().getCustomerInfo(), 5e3, "CustomerInfo got no answer in 5 s"))
      } catch (HH) {
        return console.error("Billing: loading CustomerInfo for the player's store subscriptions failed:", HH), null
      }
    }

    function GB(HH) {
      const {
        t: BH,
        selectedLanguage: LH
      } = (0, hH.B)(), {
        userContext: rH
      } = (0, uH.e)(), {
        superRankInfo: SH
      } = rH, tH = (0, DH.usePurchasesAllowed)(), zH = HH && ((0, gH.Ec)(SH) || rH.ranksMayChange) && tH, {
        accountId: CH,
        data: EH
      } = (0, CB.h)(JH.b, zH);
      if ((0, AH.useEffect)((() => {
          if (zH) return JH.b.watchAccount(), aH.d.addRefetchListener("billing", (HH => {
            "reconnected" === HH ? JH.b.refreshAfterReconnect() : JH.b.refresh()
          }))
        }), [zH]), !zH || !(0, gH.Ec)(SH) || null === EH || CH !== rH.whamm) return null;
      const XH = iH(EH, SH.tier, Date.now());
      if (null === XH) return null;
      const GH = XH.renews ? "store:renewsOn" : "store:endsOn",
        YH = (0, hH.h)(LH.code, GH, XH.at, {
          year: "numeric",
          month: "short",
          day: "numeric"
        }),
        QH = (0, DH.getBillingStore)(),
        WH = null !== QH && (0, ZH.g)(QH) ? function(HH, BH) {
          var LH;
          const AH = Object.values(HH.subscriptions).find((HH => HH.store === BH && !(0, ZH.k)(HH.status)));
          return void 0 === AH ? null : null !== (LH = AH.managementUrl) && void 0 !== LH ? LH : ZH.l[BH]
        }(EH, QH) : null;
      return {
        text: BH(GH, {
          date: YH
        }),
        manageUrl: WH
      }
    }
    var YB = LH(1365),
      uB = LH(1152),
      QB = LH(5367),
      WB = LH(1475),
      MB = LH(4044),
      xB = LH(2573);

    function vB(HH) {
      let {
        showing: BH
      } = HH;
      const {
        t: LH
      } = (0, hH.B)(), {
        data: AH,
        failed: rH
      } = (0, CB.h)(MB.h, BH);
      return 0 === (null === AH || void 0 === AH ? void 0 : AH.length) || null === AH && !rH ? null : (0, XH.jsxs)("div", {
        className: "SettingBox AccountSettingsPaymentHistory",
        children: [(0, XH.jsx)("div", {
          className: "AccountSettingsLabel",
          children: LH("paymentHistory:title")
        }), null === AH && rH && (0, XH.jsx)("div", {
          className: "AccountSettingsPaymentHistoryError",
          children: LH("paymentHistory:loadFailed")
        }), null !== AH && (0, XH.jsx)("ul", {
          className: "PaymentHistoryList",
          children: AH.map((HH => (0, XH.jsxs)("li", {
            className: "PaymentHistoryEntry",
            children: [(0, XH.jsx)(xB.e, {
              entry: HH
            }), (0, XH.jsxs)("div", {
              className: "PaymentHistoryEntryText",
              children: [(0, XH.jsx)("div", {
                children: (0, xB.m)(LH, HH)
              }), (0, XH.jsxs)("div", {
                className: "PaymentHistoryEntryDate",
                children: [new Date(HH.at).toLocaleDateString(), "number" === typeof HH.orderId && ` \xb7 ${LH("paymentHistory:order",{orderId:HH.orderId})}`]
              })]
            })]
          }, (0, MB.d)(HH))))
        })]
      })
    }
    var PB = LH(2401),
      TB = LH(2208);

    function UB() {
      (0, TB.b)({
        titleKey: "payments:logInToRestore"
      })
    }

    function VB(HH) {
      let {
        status: BH
      } = HH;
      switch (BH) {
        case "restored":
          return (0, JH.d)(), {
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

    function OB() {
      const HH = (0, yH.usePageBillingClient)(),
        {
          userContext: BH
        } = (0, uH.e)(),
        [LH, rH] = (0, AH.useState)(!1),
        [SH, hH] = (0, AH.useState)(null);
      return {
        restoring: LH,
        notice: SH,
        restore: () => {
          BH.isLoggedIn() ? (rH(!0), hH(null), HH.restorePurchases().then(VB, (HH => HH instanceof wH.c && "loginRequired" === HH.code ? (UB(), null) : function(HH) {
            return HH instanceof wH.c && "storeBusy" === HH.code ? {
              key: "payments:storeBusy",
              failed: !0
            } : (console.error("Billing: restoring purchases failed:", HH), (0, JH.d)(), {
              key: "payments:restoreFailed",
              failed: !0
            })
          }(HH))).then(hH).finally((() => {
            rH(!1)
          }))) : UB()
        }
      }
    }

    function bB(HH) {
      let {
        restoring: BH,
        notice: LH,
        restore: rH
      } = HH;
      const {
        t: tH
      } = (0, hH.B)(), zH = (0, DH.usePurchasesAllowed)(), EH = (0, DH.getBillingStore)(), GH = (0, AH.useRef)(null);
      return (0, AH.useEffect)((() => {
        var HH;
        null === (HH = GH.current) || void 0 === HH || HH.scrollIntoView({
          block: "nearest"
        })
      }), [LH]), zH && (0, PB.d)(EH) ? (0, XH.jsxs)("div", {
        className: "AccountSettingsRestorePurchases",
        children: [(0, XH.jsx)(CH.m, {
          className: "AccountSettingsRestorePurchasesButton",
          loading: BH,
          onClick: rH,
          children: tH("payments:restorePurchases")
        }), null !== LH && (0, XH.jsx)("div", {
          ref: GH,
          className: SH()("AccountSettingsRestorePurchasesNotice SmallTextBold", {
            AccountSettingsRestorePurchasesFailed: LH.failed
          }),
          children: tH(LH.key)
        })]
      }) : null
    }
    var kB = LH(1958),
      mB = LH(1188),
      oB = LH(1131),
      IB = LH(1287),
      fB = LH(304),
      lB = LH(2698);
    const KB = {
      appStore: {
        name: "App Store",
        ...fB.hc.appStore
      },
      googlePlay: {
        name: "Google Play",
        ...fB.hc.googlePlay
      },
      discord: {
        name: "Discord",
        ...fB.hc.discord
      }
    };

    function cB(HH) {
      let {
        warning: BH,
        subscriptions: LH
      } = HH;
      const {
        t: AH
      } = (0, hH.B)();
      return null !== LH && 0 === LH.length ? (0, XH.jsx)(XH.Fragment, {
        children: AH(BH)
      }) : (0, XH.jsxs)("div", {
        className: "DeleteAccountSubtitle",
        children: [AH(BH), null === LH && (0, XH.jsx)("div", {
          className: "DeleteAccountSubtitleNote",
          children: AH("auth:deleteAccountSubscriptionsLoadFailed")
        }), null !== LH && (0, XH.jsxs)(XH.Fragment, {
          children: [(0, XH.jsx)("div", {
            className: "DeleteAccountSubtitleNote",
            children: AH("auth:deleteAccountStoreSubscriptions")
          }), (0, XH.jsx)(lB.e, {
            className: "DeleteAccountSubtitleLinks",
            links: LH.map((HH => {
              let {
                store: BH,
                managementUrl: LH
              } = HH;
              return {
                ...KB[BH],
                url: LH
              }
            }))
          })]
        })]
      })
    }
    var eB = LH(5083);

    function qB(HH) {
      let {
        showing: BH
      } = HH;
      const {
        userContext: LH,
        isUserContextUpdating: rH
      } = (0, uH.e)(), {
        t: SH
      } = (0, hH.B)(), [tH, zH] = (0, AH.useState)(!1), [EH, GH] = (0, AH.useState)(null), YH = (0, AH.useRef)(BH);
      (0, AH.useEffect)((() => (YH.current = BH, () => {
        YH.current = !1
      })), [BH]);
      const QH = rH || tH;
      return (0, XH.jsxs)("div", {
        className: "AccountSettingsDeleteAccountButtonContainer",
        children: [(0, XH.jsxs)(CH.O, {
          onClick: async function() {
            if (!tH) {
              zH(!0);
              try {
                const HH = await async function() {
                  const [HH, BH] = await Promise.all([(0, kB.d)(LH.availableUserContextTypes) ? XB() : [], NB(LH)]);
                  if (!YH.current) return mB.e.ok();
                  const AH = (0, KH.b)(LH.getPlayerName(), !MH.featureFlags.canSeeRealPlayerNames);
                  if (!0 !== await rB.NotificationProvider.showPromptPopup({
                      title: "auth:deleteAccountPopupTitleNamed",
                      textOpts: {
                        title: {
                          playerName: AH
                        }
                      },
                      subtitle: (0, XH.jsx)(cB, {
                        warning: gB(LH.isLoggedIn(), BH),
                        subscriptions: HH
                      }),
                      confirmText: "auth:deleteAccount",
                      destructive: !0,
                      typedConfirm: BH ? SH("auth:deleteAccountTypedConfirm", {
                        playerName: AH
                      }) : void 0,
                      confirmTooltip: "auth:deleteAccountPopupConfirmTooltip",
                      cancelText: "general:cancel",
                      cancelTooltip: "auth:deleteAccountPopupCancelTooltip"
                    }).getResult()) return mB.e.ok();
                  const rH = await (0, oH.postJsonWithMetricsCookiesAndJsonResponse)(`${oB.clientSideServerUrls.indexUrl}/index/metrics/revoke-cookies`, {
                    gameState: OH.c.get("gameState")
                  }, {
                    retries: 3
                  }, LH.getMetricsCookies());
                  if (rH.error) return mB.e.error(rH.error);
                  (0, mH.isDiscordClient)() && (await IB.k.discordActivity()).exit("User deleted their account");
                  return eB.b.stopRecordingHere("the player deleted their account", {
                    forget: !0
                  }), (0, oH.forgetStoredGuestAccount)(LH.whamm), (0, oH.forceGlobalSignOut)(!0), mB.e.ok()
                }(), BH = HH.isError() ? HH.asError().message : null;
                GH(BH)
              } catch (HH) {
                console.error("Failed to delete account:", HH), GH(SH("auth:genericDeleteAccountError"))
              }
              zH(!1)
            }
          },
          className: "AccountSettingsDeleteAccountButton",
          disabled: QH,
          children: [QH && (0, XH.jsx)("div", {
            className: "DeletingAccountLoader",
            children: (0, XH.jsx)(UH.d, {})
          }), SH("auth:deleteAccount")]
        }), EH && (0, XH.jsx)("div", {
          className: "DeleteAccountError",
          children: EH
        })]
      })
    }

    function gB(HH, BH) {
      return (0, mH.isDiscordClient)() ? "auth:discordActivityDeleteAccountLossWarning" : HH ? "auth:deleteAccountLossWarning" : BH ? "auth:deleteGuestAccountLossWarning" : "auth:deleteGuestAccountWarning"
    }
    async function NB(HH) {
      try {
        const {
          accountCreatedAt: BH
        } = await (0, EB.j)(qH.d.getPlayerProfile(HH, {
          lowerCaseName: HH.getPlayerName().toLowerCase()
        }), 5e3, "The player's profile got no answer in 5 s");
        return null !== BH && Date.now() - BH >= 7 * gH.j
      } catch (BH) {
        return console.error("Delete Account: loading the account's age failed, so the prompt asks for its name:", BH), !0
      }
    }
    var RB = LH(3970),
      jB = LH(3988),
      nB = LH(3985);

    function FB(HH) {
      let {
        showing: BH
      } = HH;
      const {
        t: LH
      } = (0, hH.B)(), {
        data: AH,
        failed: rH
      } = (0, CB.h)(RB.d, BH), SH = null === AH ? null : (0, RB.e)(AH);
      return (0, XH.jsxs)("div", {
        className: "SettingBox BlockedAndIgnoredPlayers",
        children: [(0, XH.jsx)("div", {
          className: "AccountSettingsLabel",
          children: LH("settingsMenu:blockedAndIgnoredPlayers")
        }), null === SH && !rH && (0, XH.jsx)(UH.d, {}), null === SH && rH && (0, XH.jsxs)("div", {
          className: "BlockedAndIgnoredPlayersError",
          children: [LH("settingsMenu:blockedAndIgnoredPlayersLoadFailed"), (0, XH.jsx)(CH.i, {
            className: "SmallTextLight",
            onClick: () => {
              RB.d.refresh()
            },
            children: LH("general:tryAgain")
          })]
        }), 0 === (null === SH || void 0 === SH ? void 0 : SH.length) && (0, XH.jsx)("div", {
          className: "BlockedAndIgnoredPlayersEmpty",
          children: LH("settingsMenu:noBlockedOrIgnoredPlayers")
        }), null !== SH && SH.length > 0 && (0, XH.jsx)("ul", {
          className: "BlockedAndIgnoredPlayersList",
          children: SH.map((HH => {
            let {
              name: BH,
              exclusion: AH
            } = HH;
            const rH = nB.f[AH];
            return (0, XH.jsxs)("li", {
              className: "BlockedAndIgnoredPlayer",
              children: [(0, XH.jsx)("div", {
                className: "BlockedAndIgnoredPlayerName",
                children: BH
              }), (0, XH.jsx)(CH.m, {
                className: "SmallTextLight",
                onClick: () => {
                  (0, jB.c)(rH, BH, {
                    chatMessage: null
                  })
                },
                children: LH(nB.j[rH].text)
              })]
            }, BH)
          }))
        })]
      })
    }
    var DB = LH(5099),
      wB = LH(3751),
      ZB = LH(34870);

    function dB(HH) {
      let {
        userContext: BH
      } = HH;
      const {
        t: LH
      } = (0, hH.B)();
      return wB.d && (0, DB.m)() && BH !== oH.NULL_USER_CONTEXT ? (0, XH.jsxs)("div", {
        className: "SettingBox",
        children: [(0, XH.jsx)("div", {
          className: "AccountSettingsLabel",
          children: LH("settingsMenu:playerId")
        }), (0, XH.jsx)(ZB.e, {
          text: (0, DB.j)(BH)
        })]
      }) : null
    }
    const aB = (0, AH.memo)((function(HH) {
      var BH, LH;
      let {
        showing: rH,
        inGame: zH
      } = HH;
      const {
        t: EH,
        selectedLanguage: GH
      } = (0, hH.B)(), {
        hideSocialLocationFrom: QH
      } = (0, OH.m)(["hideSocialLocationFrom"]), WH = (0, DH.usePurchasesAllowed)(), xH = OB(), vH = (0, YH.e)(), {
        userContext: PH,
        isUserContextUpdating: bH
      } = (0, uH.e)(), [kH, nH] = (0, AH.useState)(null !== (BH = PH.getPlayerName()) && void 0 !== BH ? BH : ""), [wH, ZH] = (0, AH.useState)(null), {
        purchasing: dH,
        outcome: aH,
        purchase: sH
      } = (0, fH.e)("/super-rank-welcome"), JH = (0, gH.nc)((0, hH.n)(GH.code, "general:timeLeft"), PH.superRankInfo), iH = null === (LH = GB(rH)) || void 0 === LH ? void 0 : LH.text, pH = Date.now(), yH = (0, NH.g)(pH), HB = (0, jH.v)(pH), BB = (0, jH.o)(yH.id), LB = (0, jH.k)(PH.getPlayerRanks(), pH), AB = (0, jH.q)(PH.superRankInfo, pH), rB = yH.id !== RH.n.id, SB = rB && !LB && (0, gH.Ec)(PH.superRankInfo) ? PH.superRankInfo : null, hB = JH ? EH("general:timeLeft", {
        time: JH
      }) : !(rB && WH) && iH, [CB, EB] = (0, AH.useState)(!1), [XB, MB] = (0, AH.useState)(!1), xB = (0, AH.useRef)(null), PB = (0, AH.useRef)(null), TB = (0, eH.f)({
        showProgressUpdateMessage: !0,
        enabled: !0
      }), UB = null === TB, VB = null !== TB && void 0 !== TB ? TB : [], kB = PH !== oH.NULL_USER_CONTEXT && !PH.isLoggedIn(), mB = kB && 0 !== (null === TB || void 0 === TB ? void 0 : TB.length), [oB, IB] = (0, AH.useState)([]), [fB, lB] = (0, AH.useState)(!1), KB = PH.playerHasRank("youtuber"), cB = (0, AH.useCallback)((() => qH.d.getPlayerProfile(PH, {
        lowerCaseName: PH.getPlayerName().toLowerCase()
      }).then((HH => {
        IB(HH.socialLinks)
      })).catch((HH => {
        console.error("Failed to refresh social links", HH)
      }))), [PH]);

      function eB(HH) {
        HH !== kH && ((0, KH.k)(HH) ? (HH = (0, KH.n)(HH), ZH(EH("homePage:nameCharacters"))) : ZH(null), xB.current && (xB.current.value = HH), nH(HH))
      }
      return (0, AH.useEffect)((() => (!0 === rH ? (clearInterval(PB.current), PB.current = setInterval(vH, 1e3)) : clearInterval(PB.current), () => {
        clearInterval(PB.current)
      })), [rH, vH]), (0, AH.useEffect)((() => {
        var HH;
        nH(null !== (HH = PH.getPlayerName()) && void 0 !== HH ? HH : "")
      }), [PH]), (0, AH.useEffect)((() => {
        if (!rH || !KB || bH) return;
        let HH = !1;
        return lB(!0), IB([]), qH.d.getPlayerProfile(PH, {
          lowerCaseName: PH.getPlayerName().toLowerCase()
        }).then((BH => {
          HH || IB(BH.socialLinks)
        })).catch((HH => {
          console.error("Failed to load social links", HH)
        })).finally((() => {
          HH || lB(!1)
        })), () => {
          HH = !0
        }
      }), [rH, KB, bH, PH]), (0, XH.jsxs)("div", {
        className: SH()("SettingsMenuRightInner AccountSettings", {
          AccountSettingsLocked: zH
        }),
        children: [zH && (0, XH.jsx)("div", {
          className: "AccountSettingsInGameWarning",
          children: EH("settingsMenu:accountSettingsInGameWarning")
        }), (0, XH.jsxs)("div", {
          className: "SettingBox SetAccountNameDiv SmallTextLight",
          children: [(0, XH.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsNameLabel",
            children: [EH("homePage:discordNamePopupTitle"), (0, XH.jsxs)(lH.LinkPreserveSearch, {
              className: "AccountSettingsViewProfile",
              to: (0, cH.k)({
                name: PH.getPlayerName()
              }),
              onClick: () => {
                OH.c.set({
                  openEverythingMenuName: null
                })
              },
              children: [(0, XH.jsx)(tH.c, {
                name: "arrow-up-right-from-square"
              }), " ", EH("profileCard:viewProfile")]
            })]
          }), (0, XH.jsxs)("div", {
            className: "EnterAccNameDivWrapper",
            "data-pad-initial-area": !0,
            children: [(0, XH.jsxs)("div", {
              className: "EnterAccNameInputRow",
              children: [MH.featureFlags.canChangeName && (0, XH.jsx)(TH.e, {
                className: "EnterName",
                placeholderText: EH("homePage:enterName"),
                maxLength: KH.e,
                defaultValue: kH,
                onValueChange: HH => {
                  eB(HH)
                },
                forcedText: CB || !MH.featureFlags.canChangeName ? kH : null,
                blurOnEnter: !0,
                domRef: xB
              }), (0, XH.jsx)(CH.i, {
                className: "ChooseRandomNameButton",
                onClick: () => {
                  eB((0, KH.c)())
                },
                children: (0, XH.jsx)(tH.c, {
                  name: "dice",
                  className: "ChooseRandomNameIcon"
                })
              }), !MH.featureFlags.canChangeName && (0, XH.jsx)("div", {
                className: "EnterName NoInput",
                children: (0, KH.b)(kH, !MH.featureFlags.canSeeRealPlayerNames)
              })]
            }), (0, XH.jsx)(CH.i, {
              className: "ChooseNameButton",
              disabled: CB || kH === PH.getPlayerName(),
              onClick: () => {
                kH.length < KH.h ? ZH(EH("homePage:changeNameMinLengthError", {
                  length: KH.h
                })) : kH.length > KH.e ? ZH(EH("homePage:changeNameMaxLengthError", {
                  length: KH.e
                })) : (EB(!0), ZH(null), (0, IH.i)(PH, kH).then((HH => {
                  EB(!1), "taken" === HH.outcome ? ZH(EH("homePage:nameTaken")) : "refused" === HH.outcome ? ZH(HH.message) : "failed" === HH.outcome && ZH(EH((0, IH.e)(HH.failure)))
                })))
              },
              children: EH("general:choose")
            })]
          }), wH && (0, XH.jsx)("div", {
            className: "ChooseAccNameError",
            children: wH
          })]
        }), (0, XH.jsx)(dB, {
          userContext: PH
        }), (0, XH.jsx)(VH.c, {
          label: (() => {
            if ((0, uB.j)(QH)) {
              const HH = (0, hH.n)(GH.code, "general:timeLeft"),
                BH = (0, gH._)(HH, Date.now(), QH + uB.h);
              return `${EH("settingsMenu:hideSocialLocation")} (${EH("general:timeLeft",{time:BH})})`
            }
            return EH("settingsMenu:hideSocialLocation")
          })(),
          onClick: () => {
            const HH = !(0, uB.j)(QH);
            (0, WB.reportAnalyticsClick)({
              id: "social.hide_location",
              value: HH ? "on" : "off"
            }), MB(!0), qH.d.setHideSocialLocation(PH, HH).then((() => {
              OH.c.set({
                hideSocialLocationFrom: HH ? Date.now() : null
              })
            })).finally((() => {
              MB(!1)
            }))
          },
          checked: (0, uB.j)(QH),
          disabled: XB
        }), KB && (0, XH.jsxs)("div", {
          className: "SettingBox AccountSettingsSocialLinks",
          children: [(0, XH.jsx)("div", {
            className: "AccountSettingsLabel",
            children: EH("settingsMenu:socialLinks")
          }), fB && (0, XH.jsx)(UH.d, {}), !fB && (0, XH.jsx)(QB.b, {
            socialLinks: oB,
            editable: !0,
            userContext: PH,
            onLinksUpdated: cB
          })]
        }), (0, XH.jsxs)("div", {
          className: "SettingBox",
          children: [(0, XH.jsx)("div", {
            className: "AccountSettingsLabel",
            children: EH(mB ? "auth:loginOrSwitchAccount" : "auth:login")
          }), UB && (0, XH.jsx)(UH.d, {}), !UB && 0 === VB.length && (0, XH.jsx)("div", {
            className: "NoLoginOptions",
            children: EH("auth:noLoginOptions")
          }), !UB && VB.length > 0 && "crazygames" !== mH.siteUsed && (0, XH.jsx)("div", {
            className: "AccountSettingsLoginButtons",
            children: VB
          }), !UB && VB.length > 0 && "crazygames" === mH.siteUsed && (0, XH.jsxs)("div", {
            className: "AccountSettingsLoginButtons",
            children: [VB[0], VB.length > 1 && (0, XH.jsxs)(XH.Fragment, {
              children: [(0, XH.jsxs)("div", {
                className: "LegacyLoginOptionsHeader",
                children: [(0, XH.jsx)("span", {
                  className: "LegacyLoginOptionsTitle",
                  children: EH("auth:legacyLoginOptions")
                }), (0, XH.jsx)(YB.e, {
                  className: "LegacyLoginOptionsInfoIcon",
                  hoverInfo: EH("auth:legacyLoginOptionsInfo")
                })]
              }), (0, XH.jsx)("div", {
                className: "LegacyAccountSettingsLoginButtons",
                children: VB.slice(1)
              })]
            })]
          }), MH.featureFlags.useLogin && (null !== PH.loggedInInfo || PH.isLoggedIn()) && (0, XH.jsxs)(XH.Fragment, {
            children: [(0, XH.jsx)("div", {
              className: "AccountSettingsLoginDivider"
            }), (0, XH.jsxs)(CH.O, {
              onClick: () => {
                (0, oH.forceGlobalSignOut)()
              },
              className: "AccountSettingsSignedInButton",
              children: [(0, XH.jsx)(tH.c, {
                name: "right-from-bracket"
              }), EH("auth:signOut")]
            })]
          })]
        }), null !== SB && (0, XH.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, XH.jsx)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: (0, XH.jsx)(jH.i, {
              tierId: SB.tier
            })
          }), (0, XH.jsx)(tB, {
            showing: rH
          })]
        }), !LB && WH && (0, XH.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, XH.jsx)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: (0, XH.jsx)(jH.i, {
              tierId: yH.id
            })
          }), null !== AB && (0, XH.jsx)(FH, {
            className: "AccountSettingsSuperRankRetired SmallTextBold",
            until: AB
          }), (0, XH.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [(0, XH.jsxs)(CH.u, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, zB.k)({
                  mode: "self",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, XH.jsx)(tH.c, {
                name: "bolt"
              }), EH(null !== AB ? "store:upgradeToHyperRank" : BB.getKey)]
            }), (0, XH.jsxs)(CH.u, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, zB.k)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, XH.jsx)(tH.c, {
                name: "bolt"
              }), EH(BB.giftKey)]
            })]
          }), (0, XH.jsx)(bB, {
            ...xH
          })]
        }), LB && (0, XH.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, XH.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, XH.jsx)(jH.i, {
              tierId: yH.id
            }), hB && (0, XH.jsxs)("div", {
              className: "AccountSettingsSuperRankTimeLeft",
              children: ["(", hB, ")"]
            })]
          }), rB && (0, XH.jsx)(tB, {
            showing: rH
          }), WH && (0, XH.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [!(0, gH.Ec)(PH.superRankInfo) && (0, XH.jsxs)(CH.u, {
              className: "AccountSettingsSuperRankProlong",
              loading: dH,
              onClick: () => {
                sH(HB.id, null)
              },
              children: [(0, XH.jsx)(tH.c, {
                name: "bolt"
              }), EH("settingsMenu:getSuperRankAdditionalDaysPremiumCurrency", {
                days: HB.product.days,
                price: HB.price
              })]
            }), (0, XH.jsxs)(CH.u, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, zB.k)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, XH.jsx)(tH.c, {
                name: "bolt"
              }), EH(BB.giftKey)]
            })]
          }), aH && (0, XH.jsx)("div", {
            className: "AccountSettingsSuperRankProlongError SmallTextBold",
            children: EH(aH.translationKey)
          }), (0, XH.jsx)(bB, {
            ...xH
          })]
        }), (0, XH.jsx)(vB, {
          showing: rH
        }), MH.featureFlags.useSocialFeatures && (0, XH.jsx)(FB, {
          showing: rH
        }), (0, XH.jsxs)("div", {
          className: "SettingBoxGroup AccountSettingsDeleteAccountGroup",
          children: [(0, XH.jsxs)("div", {
            className: "SettingBox AccountSettingsDeleteAccount SettingBoxWarning",
            children: [(0, XH.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: EH(sB(kB, mB))
            }), (0, mH.isDiscordClient)() && (0, XH.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: EH("auth:discordActivityKickWarning")
            }), (0, XH.jsx)(qB, {
              showing: rH
            })]
          }), (0, XH.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: EH(kB ? "auth:deleteGuestAccountWarning" : "auth:deleteAccountLossWarning")
          })]
        })]
      })
    }));

    function sB(HH, BH) {
      return HH ? BH ? "auth:deleteGuestAccountButtonTitle" : "auth:deleteGuestAccountWarning" : "auth:deleteAccountButtonTitle"
    }
    var JB = LH(34877),
      iB = LH(3473),
      pB = LH(1440),
      yB = LH(2051),
      HL = LH(9584),
      BL = LH(34883);

    function LL() {
      const {
        t: HH
      } = (0, hH.B)();
      return (0, yB.e)("localPlayerAlive") ? (0, XH.jsx)(HL.c, {
        icon: "camera-alt",
        title: HH("screenshotMode:title"),
        sub: HH("screenshotMode:entrySub"),
        onClick: BL.e
      }) : null
    }
    var AL = LH(34898);
    const rL = (0, AH.memo)((function(HH) {
        let {
          inGame: BH
        } = HH;
        const {
          t: LH,
          selectedLanguage: AH
        } = (0, hH.B)(), {
          clientEscMenuOptions: rH,
          showDebugOverlay: SH,
          isTouchScreen: tH
        } = (0, OH.m)(["clientEscMenuOptions", "showDebugOverlay", "isTouchScreen"]), zH = (0, QH.j)("hideCoordinates");
        let CH = "settingsMenu:showCoordinates",
          EH = "settingsMenu:showChunkCoordinates";

        function GH(HH) {
          const BH = new Intl.DisplayNames([HH], {
            type: "language"
          }).of(HH);
          return BH.charAt(0).toUpperCase() + BH.slice(1)
        }
        return zH && (CH = "settingsMenu:showCoordinatesHidden", EH = "settingsMenu:showChunkCoordinatesHidden"), (0, XH.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [BH && MH.featureFlags.canUseInviteLinks && (0, XH.jsxs)("div", {
            className: "SettingBox",
            children: [(0, XH.jsx)("div", {
              className: "SettingsMenuInviteHeader",
              children: LH("settingsMenu:inviteLink")
            }), (0, XH.jsx)(JB.g, {})]
          }), (0, XH.jsxs)("div", {
            className: "SettingBox",
            children: [(0, XH.jsx)("div", {
              className: "SliderText",
              style: {
                marginBottom: "10px"
              },
              children: LH("settingsMenu:language")
            }), (0, XH.jsx)(iB.b, {
              options: Object.entries(hH.j).map((HH => {
                let [BH, LH] = HH;
                return {
                  label: (0, XH.jsxs)("div", {
                    className: "SettingsMenuLanguageOption",
                    children: [(0, XH.jsx)("img", {
                      src: LH.flagImg,
                      alt: "flag"
                    }), (0, XH.jsxs)("span", {
                      children: [GH(BH), " ", (0, XH.jsxs)("span", {
                        className: "SettingsMenuLanguageOptionCode",
                        children: ["(", BH, ")"]
                      })]
                    })]
                  }),
                  value: BH
                }
              })),
              value: AH.code,
              onChange: HH => {
                sH.g.get().setCurrentLanguage(HH.value)
              }
            })]
          }), BH && tH && (0, AL.c)() && (0, XH.jsx)(LL, {}), !(0, MH.isMobileApp)() && (0, pB.k)() && MH.featureFlags.useForceRotateForceFullscreenOverlay && (0, XH.jsx)(VH.c, {
            label: LH("settingsMenu:disableFullscreenMode"),
            checked: rH.disableFullscreen,
            onClick: HH => {
              OH.c.setClientEscMenuOptions({
                disableFullscreen: HH
              })
            }
          }), (0, XH.jsx)(VH.c, {
            label: LH(CH),
            checked: rH.showCoordinates,
            onClick: HH => {
              OH.c.setClientEscMenuOptions({
                showCoordinates: HH
              })
            },
            disabled: zH
          }), (0, XH.jsx)(VH.c, {
            label: LH(EH),
            checked: rH.showChunkCoordinates,
            onClick: HH => {
              OH.c.setClientEscMenuOptions({
                showChunkCoordinates: HH
              })
            },
            disabled: zH
          }), (0, XH.jsx)(VH.c, {
            label: LH("settingsMenu:showFps"),
            checked: rH.showFPS,
            onClick: HH => {
              OH.c.setClientEscMenuOptions({
                showFPS: HH
              })
            }
          }), (0, XH.jsx)(VH.c, {
            label: LH("settingsMenu:disableBunnyHopping"),
            checked: rH.disableBunnyHopping,
            onClick: HH => {
              OH.c.setClientEscMenuOptions({
                disableBunnyHopping: HH
              })
            }
          }), (0, IB.t)() && (0, XH.jsx)(VH.c, {
            label: LH("settingsMenu:showChat"),
            checked: rH.showChat,
            onClick: HH => {
              OH.c.setClientEscMenuOptions({
                showChat: HH
              })
            }
          }), (0, XH.jsx)(VH.c, {
            label: LH("settingsMenu:showDebugOverlay"),
            checked: SH,
            onClick: HH => {
              OH.c.set({
                showDebugOverlay: HH
              })
            }
          }), MH.featureFlags.useSocialFeatures && (0, XH.jsx)(VH.c, {
            label: LH("settingsMenu:showFriendOnlineToasts"),
            checked: rH.showFriendOnlineToasts,
            onClick: HH => {
              OH.c.setClientEscMenuOptions({
                showFriendOnlineToasts: HH
              })
            }
          }), (0, XH.jsx)(VH.c, {
            label: LH("settingsMenu:showNewItemIndicator"),
            checked: rH.showNewItemIndicator,
            onClick: HH => {
              OH.c.setClientEscMenuOptions({
                showNewItemIndicator: HH
              })
            }
          })]
        })
      })),
      SL = (0, AH.memo)((function() {
        const {
          t: HH
        } = (0, hH.B)(), {
          soundVolume: BH,
          musicVolume: LH
        } = (0, OH.m)(["soundVolume", "musicVolume"]);
        return (0, XH.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, XH.jsx)(VH.f, {
            name: HH("settingsMenu:musicVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: LH,
            onChange: HH => {
              OH.c.set({
                musicVolume: Math.round(100 * HH) / 100
              })
            },
            format: HH => HH.toFixed(2)
          }), (0, XH.jsx)(VH.f, {
            name: HH("settingsMenu:soundEffectsVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: BH,
            onChange: HH => {
              OH.c.set({
                soundVolume: Math.round(100 * HH) / 100
              })
            },
            format: HH => HH.toFixed(2)
          })]
        })
      }));
    var hL = LH(692),
      tL = LH(1450),
      zL = LH(2565),
      CL = LH(2556),
      EL = LH(3879);
    const XL = {
      app: "notificationSettings:pushTargetsApp",
      browser: "notificationSettings:pushTargetsBrowser",
      msnPlay: "notificationSettings:pushTargetsMsnPlay"
    };

    function GL() {
      const {
        t: HH
      } = (0, hH.B)(), BH = (0, EL.c)(), {
        mobilePushNotificationsCanAsk: LH
      } = (0, OH.m)(["mobilePushNotificationsCanAsk"]), [rH, SH] = (0, AH.useState)(null), [tH, zH] = (0, AH.useState)(!1), [EH, GH] = (0, AH.useState)(null), [YH, uH] = (0, AH.useState)(!1), QH = (0, AH.useCallback)((() => {
        (0, zL.d)().then((HH => {
          BH.current && (SH(HH), zH(!1))
        })).catch((HH => {
          console.error("Failed to load push notification targets:", HH), BH.current && zH(!0)
        }))
      }), [BH]), WH = (0, AH.useCallback)((() => {
        (0, CL.c)().then((HH => {
          BH.current && GH((() => HH))
        }))
      }), [BH]);
      (0, AH.useEffect)((() => {
        QH()
      }), [QH]), (0, AH.useEffect)((() => {
        WH()
      }), [WH, LH]), (0, tL.d)(zL.g, QH);
      const MH = null === rH ? [] : Object.keys(XL).filter((HH => rH[HH] > 0));
      return (0, XH.jsxs)("div", {
        className: "SettingBox PushNotificationSettings",
        children: [(0, XH.jsx)("div", {
          className: "SliderText",
          children: HH("notificationSettings:pushNotifications")
        }), null === rH && tH && (0, XH.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: HH("notificationSettings:pushTargetsLoadFailed")
        }), null !== rH && 0 === MH.length && (0, XH.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: HH("notificationSettings:pushTargetsNone")
        }), MH.length > 0 && (0, XH.jsx)("ul", {
          className: "PushNotificationSettingsTargets",
          children: MH.map((BH => {
            var LH;
            return (0, XH.jsx)("li", {
              children: HH(XL[BH], {
                count: null !== (LH = null === rH || void 0 === rH ? void 0 : rH[BH]) && void 0 !== LH ? LH : 0
              })
            }, BH)
          }))
        }), null !== EH && (0, XH.jsx)(CH.i, {
          className: "PushNotificationSettingsButton",
          loading: YH,
          onClick: () => {
            uH(!0), EH().catch((HH => {
              console.error("Failed to turn on push notifications:", HH)
            })).finally((() => {
              BH.current && (uH(!1), WH())
            }))
          },
          children: HH("notificationSettings:pushTurnOn")
        })]
      })
    }
    var YL = LH(2738),
      uL = LH(2543),
      QL = LH(1922),
      WL = LH(30);
    async function ML() {
      return "dailyDropReminderAsked_" + (await oH.userContextManager.getCurrentUserContext()).whamm
    }

    function xL(HH) {
      return async function(HH) {
        if (HH.remindersOn || (0, OH.g)(OH.c.get("gameState"))) return null;
        const BH = await ML();
        if (null !== WL.e.getItem(BH)) return null;
        const [LH, AH] = await Promise.all([(0, CL.c)().catch((HH => (console.error("Couldn't tell whether this device can take push notifications:", HH), null))), vL()]);
        if (null === LH && !AH) return null;
        if (null !== LH && ((0, uL.b)() || (0, CL.f)())) return null;
        return {
          askedKey: BH,
          requester: LH
        }
      }(HH).catch((HH => (console.error("Failed to tell whether to ask about Lucky Skin Block reminders:", HH), null)))
    }

    function vL() {
      return (0, zL.d)().then((HH => HH.app + HH.browser + HH.msnPlay > 0), (HH => (console.error("Couldn't tell where push notifications reach this account:", HH), !0)))
    }
    async function PL(HH) {
      const BH = (0, YL.t)({
          remindersOn: !0
        }),
        LH = null === HH ? Promise.resolve() : HH(),
        [AH, rH] = await Promise.allSettled([BH, LH]);
      "rejected" === AH.status && console.error("Failed to turn on Lucky Skin Block reminders:", AH.reason), "rejected" === rH.status && console.error("Failed to ask for push notifications for Lucky Skin Block reminders:", rH.reason), "rejected" !== AH.status && "rejected" !== rH.status || QL.h.showMessage({
        translationKey: "dailyDrop:remindFailed"
      })
    }
    const TL = {
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
      UL = {
        remindersOn: {
          label: "dailyDrop:settingReminders",
          reportAs: "reminders"
        },
        hidden: {
          label: "dailyDrop:settingHide",
          reportAs: "hidden"
        }
      };

    function VL(HH) {
      let {
        setting: BH,
        value: LH
      } = HH;
      const {
        t: rH
      } = (0, hH.B)(), tH = (0, EL.c)(), [zH, CH] = (0, AH.useState)(null), [EH, GH] = (0, AH.useState)(!1), [YH, uH] = (0, AH.useState)(null);
      return (0, AH.useEffect)((() => {
        "remindersOn" === BH && (0, CL.c)().then((HH => {
          tH.current && uH((() => HH))
        }), (HH => {
          console.error("Couldn't tell whether this device can take push notifications:", HH)
        }))
      }), [BH, tH]), (0, XH.jsx)(VH.c, {
        className: SH()({
          DailyDropSettingFailed: EH
        }),
        label: rH(UL[BH].label),
        checked: null !== zH && void 0 !== zH ? zH : LH,
        note: EH ? rH("dailyDrop:settingFailed") : void 0,
        onClick: HH => {
          null === zH && (CH(HH), GH(!1), HH && null !== YH && YH().catch((HH => {
            console.error("Failed to ask for push notifications for Lucky Skin Block reminders:", HH)
          })), (0, YL.q)("daily_drop.setting", `${UL[BH].reportAs}_${HH?"on":"off"}`), "remindersOn" === BH && ML().then((HH => {
            WL.e.setItem(HH, !0)
          }), (HH => {
            console.error("Failed to keep the Lucky Skin Block reminders choice:", HH)
          })), (0, YL.t)("hidden" === BH ? {
            hidden: HH
          } : {
            remindersOn: HH
          }).catch((HH => {
            console.error(`Failed to save the Lucky Skin Block's ${BH} setting:`, HH), tH.current && GH(!0)
          })).finally((() => {
            tH.current && CH(null)
          })))
        }
      })
    }
    const OL = (0, AH.memo)((function() {
      const {
        t: HH
      } = (0, hH.B)(), {
        clientEscMenuOptions: BH
      } = (0, OH.m)(["clientEscMenuOptions"]), {
        userContext: LH
      } = (0, uH.e)(), AH = LH.dailyDrop;
      return (0, XH.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [MH.featureFlags.useSocialFeatures && (0, XH.jsx)(VH.e, {
          label: HH("notificationSettings:friendRequests"),
          options: hL.b.map((BH => ({
            value: BH,
            label: HH(TL[BH].label)
          }))),
          value: BH.friendRequestNotifications,
          onChange: HH => {
            OH.c.setClientEscMenuOptions({
              friendRequestNotifications: HH
            })
          },
          circleInfoText: (0, XH.jsx)("div", {
            className: "NotificationSettingLevelsInfo",
            children: hL.b.map((BH => (0, XH.jsxs)("div", {
              children: [(0, XH.jsx)("b", {
                children: HH(TL[BH].label)
              }), ": ", HH(TL[BH].info)]
            }, BH)))
          })
        }), null !== AH && (0, XH.jsxs)(XH.Fragment, {
          children: [(0, XH.jsx)(VL, {
            setting: "remindersOn",
            value: AH.remindersOn
          }), (0, XH.jsx)(VL, {
            setting: "hidden",
            value: AH.hidden
          })]
        }), (0, XH.jsx)(GL, {})]
      })
    }));
    var bL = LH(4912),
      kL = LH(176),
      mL = LH(293),
      oL = LH(7209),
      IL = LH(3831),
      fL = LH(34901),
      lL = LH(619),
      KL = LH(18);
    var cL = LH(642),
      eL = LH(4753);
    const qL = new Map([
      ["chunkHorizAddDist", "horizontal"],
      ["chunkVertAddDist", "vertical"]
    ]);

    function gL(HH) {
      return qL.has(HH) ? xH.gameBridge.lookup("jT", null) : null
    }

    function NL(HH) {
      if (!(0, lL.M)(OH.c.get("clientEscMenuOptions")[HH])) return OH.c.get("clientEscMenuOptions")[HH];
      const BH = gL(HH);
      return null !== BH ? BH[qL.get(HH)] : WL.e.getItem(HH)
    }

    function RL(HH, BH) {
      if ("useTouchControls" === HH) return void(0, eL.d)(BH);
      HH in OH.c.get("clientEscMenuOptions") && OH.c.setClientEscMenuOptions({
        [HH]: BH
      });
      const LH = gL(HH);
      null !== LH && xH.gameBridge.send("setChunkAddDistance", {
        ...LH,
        [qL.get(HH)]: BH
      }), WL.e.setItem(HH, BH)
    }
    var jL = LH(4835),
      nL = LH(34908),
      FL = LH(34915),
      DL = LH(4904),
      wL = LH(34936);

    function ZL(HH) {
      var BH, rH, tH, zH;
      let {
        minChunkAddDist: CH,
        getValue: EH,
        onChange: GH,
        setApplySettingsCallback: YH
      } = HH;
      const {
        t: uH
      } = (0, hH.B)(), {
        clientEscMenuOptions: WH
      } = (0, OH.m)(["clientEscMenuOptions", "showDistantNametags"]), xH = (0, AH.useRef)(EH("showFog")), vH = (0, AH.useRef)(WH.antiAliasing), PH = (0, AH.useRef)(WH.useWebGpu), [TH, UH] = (0, AH.useState)(null), [kH, mH] = (0, AH.useState)(!1), [oH, IH] = (0, AH.useState)((() => (0, IL.h)(MH.featureFlags.settings.canUseShaderPacks))), [fH] = (0, AH.useState)((() => OH.c.isWebGpuDefaultOff())), [lH] = (0, AH.useState)(mL.l), [KH, cH] = (0, AH.useState)(!1);
      (0, AH.useEffect)((() => {
        const HH = () => {
          cH((0, FL.s)())
        };
        return HH(), (0, FL.z)(HH)
      }), []), (0, tL.d)("appManagerUpdated|clientEscMenuOptions", (() => {
        cH((0, FL.s)())
      }));
      const [eH] = (0, AH.useState)((() => !0 === WL.e.getItem(fB.zc))), [qH] = (0, AH.useState)((() => OH.c.isWebGpuOnStored()));
      (0, AH.useEffect)((() => {
        let HH = !1;
        return (0, MH.hasUsableWebGpuAdapter)().then((async BH => {
          const LH = eH || qH,
            AH = !BH && cL.K && await (0, wL.f)(LH);
          HH || (UH(BH || AH), mH(AH))
        })), (0, IL.m)(MH.featureFlags.settings.canUseShaderPacks) && (0, oL.e)().then((async BH => {
          const AH = null !== BH && await async function(HH) {
            const [{
              isShaderPackActive: BH
            }, {
              loadPageShaderPackCompiler: AH
            }] = await Promise.all([LH.e(153).then((() => LH(7201))), Promise.all([LH.e(89), LH.e(149), LH.e(152)]).then((() => LH(7165)))]);
            return BH(HH, await AH())
          }(BH);
          HH || IH(AH)
        })), () => {
          HH = !0
        }
      }), [eH, qH]);
      const gH = (!(oH && !eH) || !kH) && TH,
        NH = function(HH, BH, LH, AH, rH) {
          return (0, fL.c)(LH, AH) && !0 === BH ? {
            translationKey: "settingsMenu:newWebGpuForcedOnByShaderPack",
            checked: !0,
            disabled: !0
          } : {
            translationKey: !1 !== BH ? "settingsMenu:newWebGpu" : rH ? "settingsMenu:newWebGpuDisabledUntilRestart" : "settingsMenu:newWebGpuUnsupported",
            checked: HH && !1 !== BH,
            disabled: !0 !== BH
          }
        }(WH.useWebGpu, gH, oH, fH, lH),
        RH = (WH.useWebGpu || (0, fL.c)(oH, fH)) && oH && !0 === gH,
        jH = (0, QH.j)("lightingOverride"),
        nH = !(0, lL.M)(jH);
      let FH = "settingsMenu:enableLighting";
      nH && (FH = jH ? "settingsMenu:enableLightingForcedOn" : "settingsMenu:enableLightingForcedOff");
      const DH = HH => {
          var BH, LH, AH;
          const rH = null !== (BH = HH.showFog) && void 0 !== BH ? BH : EH("showFog"),
            SH = null !== (LH = HH.antiAliasing) && void 0 !== LH ? LH : WH.antiAliasing,
            hH = null !== (AH = HH.useWebGpu) && void 0 !== AH ? AH : WH.useWebGpu,
            tH = !cL.K && rH !== xH.current || SH !== vH.current || hH !== PH.current;
          YH(tH ? () => VH.i : null)
        },
        wH = (0, QH.j)("fogChunkDistanceOverride"),
        ZH = (0, QH.j)("fogBlockDistanceOverride"),
        dH = !(0, lL.M)(wH) || !(0, lL.M)(ZH),
        aH = dH ? "settingsMenu:showFogForcedOn" : "settingsMenu:showFog",
        [sH, JH] = (0, bL.g)(CH),
        [iH, pH] = (0, DL.g)(CH),
        yH = uH("settingsMenu:chunkLoadDistanceDeviceLimit"),
        HB = iH < sH,
        BB = Math.min(null !== (BH = EH("chunkHorizAddDist")) && void 0 !== BH ? BH : CH[0], iH),
        LB = !dH && function(HH, BH) {
          return !0 === HH.showFog && HH.fogChunkDistance > BH
        }(WH, BB);
      return (0, XH.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [(0, XH.jsx)(VH.f, {
          name: uH("settingsMenu:horizontalChunkLoadDistance"),
          min: CH[0],
          max: sH,
          selectableMax: iH,
          cappedNote: yH,
          step: 1,
          initValue: BB,
          onChange: HH => {
            !0 === EH("showFog") && HH < EH("fogChunkDistance") && GH("fogChunkDistance", HH), GH("chunkHorizAddDist", HH), KL.k.AX("updatedChunkLoadDist")
          },
          circleInfoText: uH("settingsMenu:chunkLoadDistanceInfo")
        }), (0, XH.jsx)(VH.f, {
          name: uH("settingsMenu:verticalChunkLoadDistance"),
          min: CH[1],
          max: JH,
          selectableMax: pH,
          cappedNote: HB ? void 0 : yH,
          step: 1,
          initValue: Math.min(null !== (rH = EH("chunkVertAddDist")) && void 0 !== rH ? rH : CH[1], pH),
          onChange: HH => {
            GH("chunkVertAddDist", HH), KL.k.AX("updatedChunkLoadDist")
          },
          circleInfoText: uH("settingsMenu:chunkLoadDistanceInfo"),
          className: "VerticalChunkLoadSlider"
        }), (0, XH.jsx)(VH.c, {
          label: uH("settingsMenu:chunkFadeIn"),
          checked: WH.chunkFadeIn,
          onClick: HH => {
            OH.c.setClientEscMenuOptions({
              chunkFadeIn: HH
            })
          },
          circleInfoText: uH("settingsMenu:chunkFadeInInfo")
        }), bH.devTools.supports("chunkBorders") && (0, XH.jsx)(VH.c, {
          label: uH("settingsMenu:showChunkBorders"),
          checked: WH.showChunkBorders,
          onClick: HH => {
            OH.c.setClientEscMenuOptions({
              showChunkBorders: HH
            })
          },
          circleInfoText: uH("settingsMenu:showChunkBordersInfo")
        }), (0, XH.jsx)(VH.c, {
          label: uH(FH),
          checked: WH.enableLighting,
          onClick: HH => {
            OH.c.setClientEscMenuOptions({
              enableLighting: HH
            })
          },
          disabled: nH
        }), (0, XH.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, XH.jsx)(VH.c, {
            label: uH(aH),
            checked: WH.showFog,
            onClick: HH => {
              DH({
                showFog: HH
              }), OH.c.setClientEscMenuOptions({
                showFog: HH
              })
            },
            disabled: dH,
            className: SH()({
              SettingBoxWarning: LB
            })
          }), (0, XH.jsx)(VH.f, {
            name: uH("settingsMenu:fogChunkDistance"),
            min: CH[0],
            max: kL.g.maxChunkHorizAddDistance,
            step: 1,
            initValue: null !== (tH = WH.fogChunkDistance) && void 0 !== tH ? tH : CH[0],
            onChange: HH => {
              OH.c.setClientEscMenuOptions({
                fogChunkDistance: HH
              }), KL.k.AX("fogChunkDistanceChanged", HH)
            },
            circleInfoText: uH("settingsMenu:fogChunkDistanceInfo"),
            disabled: dH || !1 === EH("showFog"),
            className: SH()({
              SettingBoxWarning: LB
            })
          }), LB && (0, XH.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: uH("settingsMenu:fogChunkDistanceInfo")
          })]
        }), !cL.K && (0, XH.jsx)(VH.c, {
          label: uH(RH ? "settingsMenu:disableBlockTextureAtlasUnavailableWithShaderPack" : "settingsMenu:disableBlockTextureAtlas"),
          checked: !RH && WH.disableTexAtlas,
          onClick: HH => {
            OH.c.setClientEscMenuOptions({
              disableTexAtlas: HH
            })
          },
          circleInfoText: uH("settingsMenu:disableBlockTextureAtlasInfo"),
          disabled: RH
        }), (0, XH.jsx)(VH.f, {
          name: uH("settingsMenu:fieldOfView"),
          min: 50,
          max: 160,
          step: 1,
          initValue: WH.cameraFOV,
          onChange: HH => {
            OH.c.setClientEscMenuOptions({
              cameraFOV: HH
            })
          }
        }), (0, XH.jsx)(VH.c, {
          label: uH("settingsMenu:disableViewBobbing"),
          checked: WH.disableBobbing,
          onClick: HH => {
            OH.c.setClientEscMenuOptions({
              disableBobbing: HH
            })
          },
          circleInfoText: uH("settingsMenu:disableViewBobbingInfo")
        }), (0, XH.jsx)(VH.c, {
          label: uH("settingsMenu:antiAliasing"),
          checked: WH.antiAliasing,
          onClick: HH => {
            DH({
              antiAliasing: HH
            }), (0, jL.i)("antiAliasing"), OH.c.setClientEscMenuOptions({
              antiAliasing: HH
            })
          },
          circleInfoText: uH("settingsMenu:antiAliasingInfo")
        }), (0, XH.jsx)(VH.f, {
          name: uH("settingsMenu:pixelScale"),
          min: 1,
          max: 8,
          step: 1,
          initValue: null !== (zH = WH.pixelScale) && void 0 !== zH ? zH : 1,
          onChange: HH => {
            (HH !== OH.c.get("clientEscMenuOptions").pixelScale || (0, FL.q)()) && (0, jL.i)("pixelScale"), OH.c.setClientEscMenuOptions({
              pixelScale: HH
            })
          },
          circleInfoText: uH("settingsMenu:pixelScaleInfo"),
          note: KH ? uH("settingsMenu:pixelScaleLowered") : void 0,
          format: HH => `${HH}x`
        }), (0, XH.jsx)(VH.c, {
          label: uH("settingsMenu:pixelSmoothing"),
          checked: WH.pixelSmoothing,
          onClick: HH => {
            OH.c.setClientEscMenuOptions({
              pixelSmoothing: HH
            })
          },
          circleInfoText: uH("settingsMenu:pixelSmoothingInfo")
        }), cL.K && (0, XH.jsx)(VH.c, {
          label: uH("settingsMenu:distantNametags"),
          checked: (0, nL.e)(),
          onClick: HH => {
            OH.c.set({
              showDistantNametags: HH
            })
          },
          circleInfoText: uH("settingsMenu:distantNametagsInfo")
        }), (0, XH.jsx)(VH.c, {
          label: uH(NH.translationKey),
          checked: NH.checked,
          onClick: HH => {
            DH({
              useWebGpu: HH
            }), OH.c.setClientEscMenuOptions({
              useWebGpu: HH
            })
          },
          circleInfoText: uH("settingsMenu:newWebGpuInfo"),
          disabled: NH.disabled
        })]
      })
    }
    var dL = LH(4832),
      aL = LH(9552),
      sL = LH(34942),
      JL = LH(9568),
      iL = LH(34946);
    const pL = {
        color: 16777215,
        name: "white"
      },
      yL = {
        color: 0,
        name: "black"
      },
      HA = [pL, {
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
      }, yL],
      BA = [yL, pL];

    function LA(HH) {
      return `${HH} px`
    }

    function AA(HH) {
      return `${HH}%`
    }

    function rA(HH) {
      let {
        label: BH,
        value: LH,
        swatches: AH,
        onChange: rH
      } = HH;
      const {
        t: tH
      } = (0, hH.B)(), zH = !AH.some((HH => HH.color === LH));
      return (0, XH.jsxs)("div", {
        className: "SettingBox CrosshairColorRow",
        children: [(0, XH.jsx)("div", {
          className: "SliderText",
          children: BH
        }), (0, XH.jsxs)("div", {
          className: "CrosshairSwatches",
          role: "radiogroup",
          "aria-label": BH,
          children: [AH.map((HH => {
            let {
              color: BH,
              name: AH
            } = HH;
            return (0, XH.jsx)("button", {
              type: "button",
              role: "radio",
              "aria-checked": BH === LH,
              "aria-label": tH(`crosshairSettings:color_${AH}`),
              "data-pad-focusable": !0,
              className: SH()("CrosshairSwatch", {
                Selected: BH === LH
              }),
              style: {
                background: (0, iL.e)(BH)
              },
              onClick: () => {
                rH(BH)
              }
            }, BH)
          })), (0, XH.jsx)("label", {
            className: SH()("CrosshairSwatch CrosshairSwatchCustom", {
              Selected: zH
            }),
            style: zH ? {
              background: (0, iL.e)(LH)
            } : void 0,
            title: tH("crosshairSettings:customColor"),
            "data-pad-focusable": !0,
            children: (0, XH.jsx)("input", {
              type: "color",
              "aria-label": tH("crosshairSettings:customColor"),
              value: (0, iL.e)(LH),
              onChange: HH => {
                const BH = (0, iL.i)(HH.target.value);
                null !== BH && rH(BH)
              }
            })
          })]
        })]
      })
    }

    function SA(HH) {
      let {
        settings: BH,
        onChange: LH
      } = HH;
      const {
        t: AH
      } = (0, hH.B)(), rH = (HH, AH) => {
        LH((0, iL.k)(BH, HH, AH))
      }, SH = function(HH, LH) {
        let AH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : LA;
        const {
          min: SH,
          max: hH,
          step: tH
        } = iL.b[HH];
        return (0, XH.jsx)(VH.f, {
          name: LH,
          min: SH,
          max: hH,
          step: tH,
          initValue: BH[HH],
          format: AH,
          onChange: BH => {
            rH(HH, BH)
          }
        }, HH)
      }, tH = ["lines", "dot", "circle"].filter((HH => BH[HH])), zH = (HH, LH, AH) => (0, XH.jsx)(VH.c, {
        label: LH,
        checked: BH[HH],
        disabled: 1 === tH.length && tH[0] === HH,
        circleInfoText: AH,
        onClick: BH => {
          rH(HH, BH)
        }
      }, HH), CH = "shapes" === BH.style;
      return (0, XH.jsxs)(XH.Fragment, {
        children: [(0, XH.jsx)(VH.e, {
          label: AH("crosshairSettings:style"),
          options: [{
            value: "classic",
            label: AH("crosshairSettings:styleClassic")
          }, {
            value: "shapes",
            label: AH("crosshairSettings:styleShapes")
          }],
          value: BH.style,
          onChange: HH => {
            rH("style", HH)
          }
        }), (0, XH.jsx)(rA, {
          label: AH("crosshairSettings:color"),
          value: BH.color,
          swatches: HA,
          onChange: HH => {
            rH("color", HH)
          }
        }), SH("opacity", AH("crosshairSettings:opacity"), AA), !CH && SH("size", AH("crosshairSettings:size"), AA), CH && (0, XH.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [zH("lines", AH("crosshairSettings:lines")), BH.lines && SH("lineLength", AH("crosshairSettings:lineLength")), BH.lines && SH("lineThickness", AH("crosshairSettings:lineThickness")), BH.lines && SH("gap", AH("crosshairSettings:gap")), BH.lines && zH("tStyle", AH("crosshairSettings:tStyle"))]
        }), CH && (0, XH.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [zH("dot", AH("crosshairSettings:dot")), BH.dot && SH("dotSize", AH("crosshairSettings:dotSize"))]
        }), CH && (0, XH.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [zH("circle", AH("crosshairSettings:circle")), BH.circle && SH("circleRadius", AH("crosshairSettings:circleRadius")), BH.circle && SH("circleThickness", AH("crosshairSettings:circleThickness"))]
        }), (0, XH.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [SH("outline", AH("crosshairSettings:outline"), (HH => HH > 0 ? LA(HH) : AH("crosshairSettings:off"))), BH.outline > 0 && (0, XH.jsx)(rA, {
            label: AH("crosshairSettings:outlineColor"),
            value: BH.outlineColor,
            swatches: BA,
            onChange: HH => {
              rH("outlineColor", HH)
            }
          })]
        }), zH("growOnClick", AH("crosshairSettings:growOnClick")), CH && zH("forGuns", AH("crosshairSettings:forGuns"), AH("crosshairSettings:forGunsInfo"))]
      })
    }
    var hA = LH(69),
      tA = LH(1214),
      zA = LH(13616),
      CA = LH(14791),
      EA = LH(16178),
      XA = LH(16699);
    const GA = ["sky", "grass", "stone", "sand", "snow", "night"],
      YA = "4rem";

    function uA(HH) {
      return {
        backgroundImage: `url(${HH})`,
        backgroundSize: `${YA} ${YA}`,
        backgroundRepeat: "repeat",
        imageRendering: "pixelated"
      }
    }

    function QA(HH) {
      return {
        ...(() => {
          switch (HH) {
            case "sky":
              return {
                backgroundImage: "linear-gradient(#3d8fe0 0%, #8cc8f5 45%, #d6eefc 58%, #6fae4a 58.01%, #4f8a33 100%)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              };
            case "grass":
              return uA(zA);
            case "stone":
              return uA(CA);
            case "sand":
              return uA(EA);
            case "snow":
              return uA(XA);
            case "night":
              return {
                backgroundImage: "radial-gradient(circle at 50% 50%, #1e2a4a 0%, #070b16 100vmax)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              }
          }
        })(),
        backgroundPosition: "center"
      }
    }

    function WA(HH) {
      return Object.freeze({
        ...iL.c,
        style: "shapes",
        outline: 1,
        lines: !1,
        ...HH
      })
    }
    const MA = [{
        id: "default",
        settings: iL.c
      }, {
        id: "cross",
        settings: WA({
          color: 5046092,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3
        })
      }, {
        id: "crossDot",
        settings: WA({
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
        settings: WA({
          dot: !0,
          dotSize: 4
        })
      }, {
        id: "circle",
        settings: WA({
          circle: !0,
          circleRadius: 12,
          circleThickness: 1.5,
          dot: !0,
          dotSize: 2
        })
      }, {
        id: "tShape",
        settings: WA({
          color: 16731391,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3,
          tStyle: !0
        })
      }, {
        id: "tiny",
        settings: WA({
          color: 16776960,
          lines: !0,
          lineLength: 3,
          lineThickness: 1,
          gap: 2
        })
      }, {
        id: "bold",
        settings: WA({
          lines: !0,
          lineLength: 10,
          lineThickness: 3,
          gap: 0,
          outline: 1.5
        })
      }],
      xA = ["growOnClick", "forGuns"];
    var vA = LH(34951);

    function PA(HH) {
      let {
        label: BH,
        selected: LH,
        onClick: AH,
        className: rH,
        style: hH,
        children: tH
      } = HH;
      return (0, XH.jsx)("button", {
        type: "button",
        role: "radio",
        "aria-checked": LH,
        title: BH,
        "aria-label": BH,
        "data-pad-focusable": !0,
        className: SH()("CrosshairBackdropSwatch", rH, {
          Selected: LH
        }),
        style: hH,
        onClick: AH,
        children: tH
      })
    }

    function TA(HH) {
      let {
        backdrop: BH,
        onChange: LH,
        game: AH
      } = HH;
      const {
        t: rH
      } = (0, hH.B)();
      return (0, XH.jsxs)("div", {
        className: "CrosshairBackdrops",
        role: "radiogroup",
        "aria-label": rH("crosshairSettings:background"),
        children: [AH && (0, XH.jsx)(PA, {
          label: rH("crosshairSettings:bg_game"),
          selected: AH.selected,
          onClick: AH.onSelect,
          className: "CrosshairGameSwatch",
          children: (0, XH.jsx)(tH.c, {
            name: "cube"
          })
        }), GA.map((HH => (0, XH.jsx)(PA, {
          label: rH(`crosshairSettings:bg_${HH}`),
          selected: !(null !== AH && void 0 !== AH && AH.selected) && HH === BH,
          style: QA(HH),
          onClick: () => {
            LH(HH)
          }
        }, HH)))]
      })
    }

    function UA(HH) {
      let {
        settings: BH,
        touch: LH,
        backdrop: AH,
        onChange: rH
      } = HH;
      const {
        t: tH
      } = (0, hH.B)(), zH = function(HH) {
        var BH;
        return null !== (BH = MA.find((BH => (0, iL.j)(BH.settings, HH, xA)))) && void 0 !== BH ? BH : null
      }(BH);
      return (0, XH.jsx)("div", {
        className: "CrosshairPresets",
        role: "radiogroup",
        "aria-label": tH("crosshairSettings:presets"),
        children: MA.map((HH => {
          const hH = (null === zH || void 0 === zH ? void 0 : zH.id) === HH.id;
          return (0, XH.jsxs)("button", {
            type: "button",
            role: "radio",
            "aria-checked": hH,
            "data-pad-focusable": !0,
            className: SH()("CrosshairPreset", {
              Selected: hH
            }),
            onClick: () => {
              rH(function(HH, BH) {
                return {
                  ...BH.settings,
                  growOnClick: HH.growOnClick,
                  forGuns: HH.forGuns
                }
              }(BH, HH))
            },
            children: [(0, XH.jsx)("div", {
              className: "CrosshairPresetStage",
              style: QA(AH),
              children: (0, XH.jsx)(vA.b, {
                settings: HH.settings,
                touch: LH,
                inPreview: !0
              })
            }), (0, XH.jsx)("div", {
              className: "CrosshairPresetName",
              children: tH(`crosshairSettings:preset_${HH.id}`)
            })]
          }, HH.id)
        }))
      })
    }
    var VA = LH(1701);

    function OA(HH, BH) {
      const [LH, rH] = (0, AH.useState)(!1), SH = () => {
        rH(!1)
      }, [hH, tH] = (0, AH.useState)(!1), zH = (0, AH.useRef)({
        growOnClick: HH.growOnClick,
        forGuns: HH.forGuns
      });
      (0, AH.useEffect)((() => {
        const BH = zH.current;
        zH.current = {
          growOnClick: HH.growOnClick,
          forGuns: HH.forGuns
        }, (HH.growOnClick && !BH.growOnClick || HH.forGuns && !BH.forGuns) && tH(!0)
      }), [HH.growOnClick, HH.forGuns]), (0, AH.useEffect)((() => {
        if (!hH) return;
        const HH = setTimeout((() => {
          tH(!1)
        }), 600);
        return () => {
          clearTimeout(HH)
        }
      }), [hH]);
      const CH = LH || hH;
      return {
        view: {
          pressed: CH,
          spread: CH && HH.forGuns && !HH.growOnClick ? 6 : 0
        },
        handlers: {
          onPointerDown: HH => {
            !HH.target.closest(BH) && (0, VA.b)(HH.currentTarget, HH.pointerId) && rH(!0)
          },
          onPointerUp: SH,
          onPointerCancel: SH,
          onLostPointerCapture: SH
        }
      }
    }

    function bA(HH) {
      let {
        settings: BH,
        touch: LH,
        backdrop: AH,
        className: rH,
        children: hH,
        label: tH
      } = HH;
      const zH = OA(BH, ".CrosshairStageControls");
      return (0, XH.jsxs)("div", {
        className: SH()("CrosshairStage", rH),
        style: QA(AH),
        ...zH.handlers,
        children: [(0, XH.jsx)("div", {
          className: "CrosshairStageHold",
          role: "img",
          "aria-label": tH,
          children: (0, XH.jsx)(vA.b, {
            settings: BH,
            touch: LH,
            inPreview: !0,
            ...zH.view
          })
        }), hH]
      })
    }
    const kA = "crosshairFullScreen";

    function mA(HH) {
      let {
        settings: BH,
        touch: LH,
        backdrop: rH,
        onBackdrop: zH,
        inGame: EH,
        onChange: GH,
        onClose: YH
      } = HH;
      const {
        t: uH
      } = (0, hH.B)(), QH = (0, AH.useRef)(null);
      (0, tA.r)("popup", QH, YH),
      function(HH) {
        const BH = (0, AH.useRef)(HH);
        BH.current = HH, (0, AH.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [kA]: !0
          }, "");
          let HH = !1;
          const LH = () => {
            HH = !0, BH.current()
          };
          return window.addEventListener("popstate", LH), () => {
            var BH;
            window.removeEventListener("popstate", LH), !HH && null !== (BH = window.history.state) && void 0 !== BH && BH[kA] && window.history.back()
          }
        }), [])
      }(YH);
      const WH = (0, AH.useRef)(YH);
      WH.current = YH, (0, AH.useEffect)((() => {
        function HH(HH) {
          "Escape" === HH.key && (HH.stopPropagation(), WH.current())
        }
        return window.addEventListener("keydown", HH, !0), () => {
          window.removeEventListener("keydown", HH, !0)
        }
      }), []);
      const MH = OA(BH, ".CrosshairFullScreenPanel"),
        [xH, vH] = (0, AH.useState)(!0),
        PH = xH && EH;
      (0, AH.useEffect)((() => {
        if (PH) return OH.c.set({
          crosshairGameView: !0
        }), () => {
          OH.c.set({
            crosshairGameView: !1
          })
        }
      }), [PH]);
      const [TH, UH] = (0, AH.useState)(!0);
      return (0, hA.createPortal)((0, XH.jsxs)("div", {
        ref: QH,
        className: "CrosshairFullScreen",
        style: PH ? void 0 : QA(rH),
        ...MH.handlers,
        children: [(0, XH.jsx)(vA.b, {
          settings: BH,
          touch: LH,
          inEditor: !0,
          ...MH.view
        }), (0, XH.jsxs)("div", {
          className: SH()("CrosshairFullScreenPanel", {
            Collapsed: !TH
          }),
          children: [(0, XH.jsxs)("div", {
            className: "CrosshairFullScreenBar",
            children: [(0, XH.jsx)(TA, {
              backdrop: rH,
              onChange: HH => {
                vH(!1), zH(HH)
              },
              game: EH ? {
                selected: PH,
                onSelect: () => {
                  vH(!0)
                }
              } : void 0
            }), (0, XH.jsx)(CH.W, {
              className: "CrosshairPanelToggle",
              ariaLabel: uH(TH ? "crosshairSettings:hideEditor" : "crosshairSettings:showEditor"),
              onClick: () => {
                UH(!TH)
              },
              children: (0, XH.jsx)(tH.c, {
                name: TH ? "caret-up" : "pen"
              })
            }), (0, XH.jsx)(CH.i, {
              className: "CrosshairFullScreenDone",
              onClick: YH,
              padDefaultFocus: !0,
              children: uH("crosshairSettings:done")
            })]
          }), TH && (0, XH.jsxs)("div", {
            className: "CrosshairFullScreenFields",
            children: [(0, XH.jsx)(UA, {
              settings: BH,
              touch: LH,
              backdrop: rH,
              onChange: GH
            }), (0, XH.jsx)(SA, {
              settings: BH,
              onChange: GH
            })]
          })]
        })]
      }), document.body)
    }
    var oA = LH(2924),
      IA = LH(34962);

    function fA(HH) {
      let {
        settings: BH,
        onChange: LH
      } = HH;
      const {
        t: rH
      } = (0, hH.B)(), zH = (0, IA.g)(BH), [EH, GH] = (0, oA.j)(), [YH, uH] = (0, AH.useState)(!1), QH = (0, AH.useRef)(null), [WH, MH] = (0, oA.j)(), [xH, vH] = (0, AH.useState)(!1);
      return (0, XH.jsxs)("div", {
        className: "SettingBox CrosshairShare",
        children: [(0, XH.jsxs)("div", {
          className: "CrosshairShareRow",
          children: [(0, XH.jsxs)(CH.W, {
            className: SH()("CrosshairCopy", {
              ActiveSecondaryButton: EH
            }),
            onClick: () => {
              (0, oA.f)(zH, {
                useShareSheet: !1,
                onOutcome: HH => {
                  uH("failed" === HH), "copied" === HH && GH()
                }
              })
            },
            children: [(0, XH.jsx)(tH.c, {
              name: EH ? "check" : "copy"
            }), " ", rH(EH ? "general:copied" : "crosshairSettings:copy")]
          }), (0, XH.jsx)(TH.e, {
            className: "CrosshairPaste",
            domRef: QH,
            ariaLabel: rH("crosshairSettings:paste"),
            placeholderText: rH("crosshairSettings:paste"),
            onValueChange: HH => {
              const BH = (0, IA.f)(HH);
              vH(!BH && HH.trim().length >= IA.b), BH && (LH(BH), QH.current.value = "", MH())
            }
          })]
        }), YH && (0, XH.jsx)("input", {
          className: "CrosshairCode",
          readOnly: !0,
          value: zH,
          "aria-label": rH("crosshairSettings:copy"),
          onFocus: HH => {
            HH.currentTarget.select()
          }
        }), (0, XH.jsxs)("div", {
          "aria-live": "polite",
          children: [xH && (0, XH.jsx)("div", {
            className: "CrosshairShareNote Error",
            children: rH("crosshairSettings:pasteInvalid")
          }), WH && !xH && (0, XH.jsx)("div", {
            className: "CrosshairShareNote",
            children: rH("crosshairSettings:applied")
          })]
        })]
      })
    }
    var lA = LH(34969);
    let KA = "sky";

    function cA(HH) {
      let {
        showing: BH
      } = HH;
      const {
        t: LH
      } = (0, hH.B)(), {
        isTouchScreen: rH,
        gameState: SH,
        clientEscMenuOptions: zH
      } = (0, OH.m)(["isTouchScreen", "gameState", "clientEscMenuOptions"]), EH = (0, lA.g)(), [GH, YH] = (0, AH.useState)(KA), uH = HH => {
        KA = HH, YH(HH)
      }, [QH, WH] = (0, AH.useState)(!1);
      return (0, AH.useEffect)((() => {
        BH || WH(!1)
      }), [BH]), (0, XH.jsxs)("div", {
        className: "SettingsMenuRightInner CrosshairCategory",
        children: [(0, XH.jsx)("div", {
          className: "CrosshairPreviewSticky",
          children: (0, XH.jsx)(bA, {
            className: "CrosshairPreviewStage",
            settings: EH,
            touch: rH,
            backdrop: GH,
            label: LH("crosshairSettings:preview"),
            children: (0, XH.jsxs)("div", {
              className: "CrosshairPreviewBar CrosshairStageControls",
              children: [(0, XH.jsx)(TA, {
                backdrop: GH,
                onChange: uH
              }), (0, XH.jsxs)(CH.W, {
                className: "CrosshairFullScreenButton",
                onClick: () => {
                  WH(!0)
                },
                children: [(0, XH.jsx)(tH.c, {
                  name: "expand"
                }), " ", LH("crosshairSettings:fullScreen")]
              })]
            })
          })
        }), (0, XH.jsx)("div", {
          className: "SettingBox",
          children: (0, XH.jsx)(UA, {
            settings: EH,
            touch: rH,
            backdrop: GH,
            onChange: lA.c
          })
        }), (0, XH.jsx)(fA, {
          settings: EH,
          onChange: lA.c
        }), rH && (0, XH.jsx)(JL.e, {
          note: (0, sL.g)(rH, zH.touchActionButtons) ? LH("crosshairSettings:touchNote") : void 0
        }), (0, XH.jsx)(SA, {
          settings: EH,
          onChange: lA.c
        }), QH && (0, XH.jsx)(mA, {
          settings: EH,
          touch: rH,
          backdrop: GH,
          onBackdrop: uH,
          inGame: "inGame" === SH,
          onChange: lA.c,
          onClose: () => {
            WH(!1)
          }
        })]
      })
    }
    var eA = LH(9561),
      qA = LH(1401),
      gA = LH(5476),
      NA = LH(34977),
      RA = LH(4657),
      jA = LH(2059),
      nA = LH(701);
    const FA = (0, AH.memo)((function() {
      const {
        clientEscMenuOptions: HH
      } = (0, OH.m)(["clientEscMenuOptions"]), {
        recording: BH,
        clipping: LH,
        hasClipBuffer: rH
      } = (0, yB.e)("replayRecorder"), hH = (0, yB.c)("connectedGame", (HH => HH.replay)), tH = (0, RA.k)(), zH = !1 === (0, QH.j)("canRecordReplays");
      (0, AH.useEffect)((() => {
        xH.gameBridge.send("setRecorderPrefs", {
          clipping: HH.enableClipping,
          clipSeconds: HH.clipDurationSeconds
        })
      }), [HH.enableClipping, HH.clipDurationSeconds]);
      const EH = tH || hH,
        GH = !EH && !zH,
        YH = BH || GH,
        uH = GH,
        WH = uH && LH && !BH;

      function MH() {
        YH && xH.gameBridge.send("toggleRecording", null)
      }
      return (0, XH.jsxs)("div", {
        className: "SettingsMenuRightInner ReplayViewerCategory",
        children: [(0, XH.jsxs)("div", {
          className: "SettingBox",
          children: [(0, XH.jsx)("div", {
            className: "ReplayViewerCategoryRecordingRow",
            children: BH ? (0, XH.jsxs)(XH.Fragment, {
              children: [(0, XH.jsxs)(CH.O, {
                className: "ReplayViewerCategoryButton",
                onClick: MH,
                disabled: !YH,
                children: [(0, XH.jsx)("span", {
                  children: "Stop Recording"
                }), (0, XH.jsx)(jA.b, {
                  noaAction: "recordGame"
                })]
              }), (0, XH.jsx)(NA.e, {
                className: "ReplayViewerCategoryRecordingIndicator"
              })]
            }) : (0, XH.jsxs)(CH.i, {
              className: "ReplayViewerCategoryButton",
              onClick: MH,
              disabled: !YH,
              children: [(0, XH.jsx)("span", {
                children: "Start Recording"
              }), (0, XH.jsx)(jA.b, {
                noaAction: "recordGame"
              })]
            })
          }), zH && (0, XH.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Recording is turned off in this game."
          }), EH && !BH && (0, XH.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Close Replay Mode to start recording."
          })]
        }), (0, XH.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, XH.jsx)(VH.c, {
            label: "Enable clipping",
            checked: HH.enableClipping,
            disabled: !uH,
            onClick: function(HH) {
              uH && OH.c.setClientEscMenuOptions({
                enableClipping: HH
              })
            },
            className: SH()({
              SettingBoxDisabled: !uH
            })
          }), (0, XH.jsx)(VH.f, {
            name: "Clip duration (seconds)",
            min: nA.n,
            max: nA.k,
            step: nA.c,
            initValue: HH.clipDurationSeconds,
            onChange: function(HH) {
              OH.c.setClientEscMenuOptions({
                clipDurationSeconds: HH
              })
            },
            circleInfoText: "Longer clip durations use more memory and may affect performance.",
            disabled: !uH || !HH.enableClipping
          })]
        }), (0, XH.jsxs)("div", {
          className: "SettingBox",
          children: [(0, XH.jsxs)(CH.i, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              WH && xH.gameBridge.send("saveClip", null)
            },
            disabled: !WH,
            children: [(0, XH.jsx)("span", {
              children: "Record clip"
            }), (0, XH.jsx)(jA.b, {
              noaAction: "recordClip"
            })]
          }), HH.enableClipping && !rH && uH && !BH && (0, XH.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clip buffer is filling \u2014 play for a moment, then save."
          }), BH && (0, XH.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clipping pauses while a full recording is active."
          })]
        }), (0, XH.jsxs)("div", {
          className: "SettingBox",
          children: [(0, XH.jsxs)(CH.i, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              (0, RA.g)(!0), OH.c.set({
                openEverythingMenuName: null
              })
            },
            disabled: tH,
            children: [(0, XH.jsx)("span", {
              children: "Open Replay Mode"
            }), (0, XH.jsx)(jA.b, {
              noaAction: "replayViewerOpen"
            })]
          }), tH && (0, XH.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Replay Mode is already open."
          })]
        }), (0, XH.jsxs)("div", {
          className: "SettingBox",
          children: [(0, XH.jsx)("div", {
            className: "ReplayViewerCategoryTutorialTitle",
            children: "How to use Replay Mode"
          }), (0, XH.jsx)("iframe", {
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
    var DA = LH(1962);
    const wA = {
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
        icon: () => (0, XH.jsx)("svg", {
          className: "svg-inline--fa",
          viewBox: "0 0 640 512",
          "aria-hidden": "true",
          children: (0, XH.jsx)("path", {
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
      Cu: {
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

    function ZA() {
      return Promise.all([LH.e(89), LH.e(149), LH.e(148), LH.e(144)]).then((() => LH(42378))).then((HH => ({
        default: HH.ShaderPackCategory
      })), (HH => (console.error("Failed to load the shader pack settings", HH), {
        default: dA
      })))
    }

    function dA() {
      const {
        t: HH
      } = (0, hH.B)();
      return (0, XH.jsx)("div", {
        className: "SettingsMenuRightInner",
        children: HH("shaderPack:tabLoadFailed")
      })
    }
    var aA = LH(1390),
      sA = LH(171);
    const JA = /party\s*voice/i;
    let iA = !1;

    function pA(HH) {
      return Object.keys(HH).some((HH => HH.startsWith("__reactFiber$")))
    }
    const yA = ".MenuSideBarBody, .MenuSideBarSection";

    function Hr(HH) {
      var BH;
      return (null !== (BH = HH.textContent) && void 0 !== BH ? BH : "").replace(/\s+/g, " ").trim()
    }

    function Br(HH) {
      for (const BH of function(HH) {
          const BH = new Set;
          for (const LH of HH.querySelectorAll(".MenuSideBarBodyTab, [data-pad-tab]")) BH.add(LH);
          for (const LH of [HH, ...HH.querySelectorAll(yA)])
            for (const HH of LH.children) BH.add(HH);
          return [...BH]
        }(HH))
        if (!pA(BH) || !BH.matches(yA) && JA.test(Hr(BH))) return BH;
      return null
    }

    function Lr(HH) {
      return HH.replace(/[^A-Za-z0-9_.-]+/g, "_").replace(/^_+|_+$/g, "")
    }
    const Ar = new Set(["STYLE", "SCRIPT", "TITLE"]);

    function rr(HH) {
      const BH = document.createTreeWalker(HH, NodeFilter.SHOW_TEXT, {
        acceptNode: HH => {
          var BH, LH;
          return Ar.has(null !== (BH = null === (LH = HH.parentElement) || void 0 === LH ? void 0 : LH.tagName.toUpperCase()) && void 0 !== BH ? BH : "") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
        }
      });
      for (let SH = BH.nextNode(); null !== SH; SH = BH.nextNode()) {
        var LH;
        const HH = (null !== (LH = SH.textContent) && void 0 !== LH ? LH : "").normalize("NFC").replace(/^[^\p{L}]+/u, "");
        if ("" !== HH) {
          var AH, rH;
          return (null !== (AH = null === (rH = HH.match(/^[\p{L}\p{M}\s]*/u)) || void 0 === rH ? void 0 : rH[0]) && void 0 !== AH ? AH : "").split(/\s+/).filter(Boolean).slice(0, 2).join(" ")
        }
      }
      return ""
    }

    function Sr(HH, BH) {
      const LH = Lr(BH).slice(0, 40) || "blank";
      return `${(Lr(HH.toLowerCase())||"none").slice(0,Math.max(23,sA.T-1-LH.length))}:${LH}`.slice(0, sA.T)
    }
    const hr = (0, AH.lazy)((() => LH.e(302).then((() => LH(42364))).then((HH => ({
        default: HH.BloxdInformation
      }))))),
      tr = (0, AH.lazy)(ZA);

    function zr(HH) {
      return HH ? "general" : "account"
    }
    const Cr = new Map,
      Er = (0, AH.memo)((function(HH) {
        let {
          show: BH,
          setBeforeResumeCallback: LH
        } = HH;
        (0, WH.b)();
        const {
          gameState: rH,
          openSettingsCategory: SH
        } = (0, OH.m)(["gameState", "openSettingsCategory"]), {
          userContext: zH
        } = (0, uH.e)(), {
          t: EH
        } = (0, hH.B)(), TH = (0, YH.e)(), UH = (0, QH.j)("minChunkAddDist"), VH = "inGame" === rH, [bH, oH] = (0, AH.useState)(zr(VH)), [IH, fH] = (0, AH.useState)(null), [lH, KH] = (0, AH.useState)([]), cH = (0, AH.useRef)(function() {
          const HH = new Date,
            BH = 6 * (HH.getMonth() + HH.getDate()) % fB.z.length;
          return [...fB.z, ...fB.z].slice(BH, BH + 6)
        }()), eH = (0, AH.useRef)(null), qH = (0, AH.useRef)(null), gH = (0, tL.e)(qA.i, (0, qA.e)()), NH = Object.keys(wA).filter((HH => {
          switch (HH) {
            case "replayViewer":
              return VH;
            case "developerTools":
              return zH.playerHasRank("developer") || !1;
            case "texturePack":
              return MH.featureFlags.settings.canChangeTexturePack;
            case "Cu":
              return MH.featureFlags.settings.canUseShaderPacks;
            case "notifications":
              return MH.featureFlags.useSocialFeatures || null !== zH.dailyDrop;
            case "alternativeDomains":
              return "crazygames" !== mH.siteUsed;
            case "controller":
              return MH.featureFlags.useControllerSupport && (gH || "controller" === bH);
            default:
              return !0
          }
        }));
        (0, tL.d)("toggleFullCoordinateOverlay", (() => {
          const HH = NL("showCoordinates") && NL("showChunkCoordinates") && NL("showFPS");
          RL("showCoordinates", !HH), RL("showChunkCoordinates", !HH), RL("showFPS", !HH), TH()
        })), (0, tL.d)("updatedChunkLoadDist", (() => {
          TH()
        })), (0, AH.useEffect)((() => {
          if (fH(null), null === OH.c.get("openSettingsCategory")) {
            const HH = (0, aA.m)() ? Cr.get(VH) : void 0;
            oH(HH && NH.includes(HH) ? HH : zr(VH))
          }
        }), [BH]), (0, AH.useEffect)((() => {
          if (BH && qH.current) return function(HH) {
            if (iA) return () => {};
            let BH = null,
              LH = null;
            const AH = () => {
                var HH;
                null !== LH && (clearTimeout(LH), LH = null), null === (HH = BH) || void 0 === HH || HH.disconnect(), BH = null
              },
              rH = () => {
                const BH = Br(HH);
                null !== BH && (iA = !0, AH(), (0, WB.reportAnalyticsClick)({
                  id: "settings.unknown_tab_seen",
                  value: Sr(window.location.hostname, rr(BH))
                }))
              };
            return LH = setTimeout((() => {
              LH = null, rH(), iA || (BH = new MutationObserver(rH), BH.observe(HH, {
                childList: !0,
                subtree: !0
              }))
            }), 2e3), AH
          }(qH.current)
        }), [BH]), (0, AH.useEffect)((() => {
          null !== SH && (oH(SH), Cr.set(VH, SH), OH.c.set({
            openSettingsCategory: null
          }))
        }), [SH, VH]), (0, AH.useLayoutEffect)((() => {
          eH.current && (eH.current.scrollTop = 0)
        }), [bH, BH]), (0, AH.useEffect)((() => {
          "updateLog" === bH && (0, PH.c)().then(KH)
        }), [bH]), (0, AH.useEffect)((() => {
          if ((0, lL.M)(UH)) return;
          const [HH, BH] = (0, dL.g)(), [LH, AH] = (0, bL.g)(UH), rH = (0, DA.f)(UH[0], HH, LH), SH = (0, DA.f)(UH[1], BH, AH);
          xH.gameBridge.send("setChunkAddDistance", {
            horizontal: rH,
            vertical: SH
          })
        }), [UH]);
        const RH = (0, AH.useCallback)((async () => {
          IH && (await IH(), fH(null))
        }), [IH]);

        function jH() {
          OH.c.set({
            openEverythingMenuName: null
          })
        }
        return (0, AH.useEffect)((() => {
          LH((() => RH))
        }), [RH, LH]), (0, XH.jsxs)("div", {
          className: "SettingsMenu Menu",
          style: BH ? {} : {
            display: "none"
          },
          children: [(0, XH.jsx)("div", {
            ref: qH,
            className: "MenuSideBar",
            children: (0, XH.jsx)("div", {
              className: "MenuSideBarBody",
              children: (0, XH.jsx)(GH, {
                items: NH.map((HH => {
                  const BH = wA[HH].icon;
                  return {
                    id: HH,
                    faIcon: "string" === typeof BH ? BH : void 0,
                    iconElement: "string" === typeof BH ? void 0 : (0, XH.jsx)(BH, {}),
                    title: EH(wA[HH].displayName),
                    redDot: !1
                  }
                })),
                selectedItemId: bH,
                onClick: HH => {
                  !async function(HH) {
                    await RH(), oH(HH), Cr.set(VH, HH)
                  }(HH)
                }
              })
            })
          }), (0, XH.jsxs)("div", {
            ref: eH,
            className: "MenuBody SettingsMenuRight",
            children: ["account" === bH && (0, XH.jsx)(aB, {
              showing: BH,
              inGame: VH
            }), "general" === bH && (0, XH.jsx)(rL, {
              inGame: VH
            }), "audio" === bH && (0, XH.jsx)(SL, {}), "notifications" === bH && (0, XH.jsx)(OL, {}), "graphics" === bH && (0, XH.jsx)(ZL, {
              minChunkAddDist: null !== UH && void 0 !== UH ? UH : [2, 2],
              getValue: NL,
              onChange: RL,
              setApplySettingsCallback: fH
            }), "controls" === bH && (0, XH.jsx)(aL.h, {}), "crosshair" === bH && (0, XH.jsx)(cA, {
              showing: BH
            }), "controller" === bH && MH.featureFlags.useControllerSupport && (0, XH.jsx)(eA.c, {}), MH.featureFlags.settings.canChangeTexturePack && "texturePack" === bH && (0, XH.jsx)(gA.c, {
              setApplySettingsCallback: fH
            }), MH.featureFlags.settings.canUseShaderPacks && "Cu" === bH && (0, XH.jsx)(AH.Suspense, {
              fallback: null,
              children: (0, XH.jsx)(tr, {
                setApplySettingsCallback: fH
              })
            }), "updateLog" === bH && (0, XH.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, XH.jsx)("div", {
                className: "UpdateLogsContainer",
                children: lH.map(((HH, BH) => (0, XH.jsx)(vH.b, {
                  updateLog: HH,
                  index: BH,
                  close: jH
                }, BH)))
              })
            }), "information" === bH && (0, XH.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, XH.jsx)(AH.Suspense, {
                fallback: null,
                children: (0, XH.jsx)(hr, {})
              })
            }), "alternativeDomains" === bH && (0, XH.jsxs)("div", {
              className: "SettingsMenuRightInner",
              children: [(0, XH.jsx)("div", {
                className: "AlternativeDomainsTitle",
                children: EH("settingsMenu:unblockedDomainsDescription")
              }), (0, XH.jsx)("div", {
                className: "AlternativeDomainsList",
                children: cH.current.map((HH => (0, XH.jsxs)(CH.i, {
                  onClick: () => {
                    window.open(`https://${HH}`)
                  },
                  children: [(0, XH.jsx)(tH.c, {
                    name: "arrow-up-right-from-square"
                  }), " ", HH]
                }, HH)))
              })]
            }), "replayViewer" === bH && (0, XH.jsx)(FA, {}), "developerTools" === bH && (0, XH.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, XH.jsx)(kH, {
                setApplySettingsCallback: fH
              })
            }), null !== IH && (0, XH.jsx)("div", {
              className: "SettingsMenuRightFooter",
              children: (0, XH.jsx)(CH.i, {
                className: "SettingsMenuRightFooterButton",
                onClick: RH,
                children: EH("general:apply")
              })
            })]
          })]
        })
      }));
    var Xr = LH(2859),
      Gr = LH(1580),
      Yr = LH(2464),
      ur = LH(4738);
    const Qr = (0, AH.lazy)((() => Promise.resolve().then((() => LH(5069))).then((HH => (HH.needGameClientAfterPaint(), (0, Xr.c)((HH => HH.loadCharacterCustomisationUI()), (HH => HH.CharacterCustomisationUI))))))),
      Wr = "openCustomisationTab";

    function Mr(HH) {
      var BH, LH, rH;
      let {
        show: SH
      } = HH;
      const {
        userContext: hH
      } = (0, uH.e)(), tH = (0, DH.usePurchasesAllowed)(), zH = (0, AH.useRef)(null);
      var CH, EH;
      hH !== oH.NULL_USER_CONTEXT && (null === (BH = zH.current) || void 0 === BH ? void 0 : BH.whamm) !== hH.whamm && (zH.current = {
        whamm: hH.whamm,
        mountKey: (null !== (CH = null === (EH = zH.current) || void 0 === EH ? void 0 : EH.mountKey) && void 0 !== CH ? CH : -1) + 1
      });
      const [YH, QH] = (0, AH.useState)("characters");
      if ((0, tL.d)(Wr, QH), !SH) return null;
      const WH = null !== (0, Gr.k)(Date.now()),
        MH = hH.getOwnedCosmeticPacks(),
        xH = fB.Yb.filter((HH => "pet" === HH || "aura" === HH ? WH || (0, Yr.o)(HH).some((BH => BH !== `${HH}_none` && (0, Yr.y)(HH, BH, MH))) : "cape" !== HH && "nameColour" !== HH || (0, RH.b)(hH.getPlayerRanks()) || tH)).map((HH => ({
          id: HH,
          faIcon: fB.H[HH],
          title: fB.L[HH],
          redDot: !1
        })));
      return (0, XH.jsxs)("div", {
        className: "Menu CharCustomisation",
        children: [(0, XH.jsx)("div", {
          className: "MenuSideBar",
          children: (0, XH.jsx)(GH, {
            items: xH,
            selectedItemId: YH,
            onClick: HH => {
              QH(HH)
            }
          })
        }), (0, XH.jsx)("div", {
          className: "MenuBody",
          children: (0, XH.jsx)(AH.Suspense, {
            fallback: (0, XH.jsx)("div", {
              className: "CharacterCustomisationLoading",
              children: (0, XH.jsx)(UH.d, {})
            }),
            children: (0, XH.jsx)(Qr, {
              selectedTab: YH,
              noWebGlFallback: vr
            }, null !== (LH = null === (rH = zH.current) || void 0 === rH ? void 0 : rH.mountKey) && void 0 !== LH ? LH : 0)
          })
        })]
      })
    }

    function xr() {
      const {
        t: HH
      } = (0, hH.B)();
      return (0, XH.jsx)("div", {
        className: "CharacterCustomisationNoWebGl SmallTextBold",
        children: HH((0, ur.h)((0, ur.e)()))
      })
    }
    const vr = (0, XH.jsx)(xr, {});
    var Pr = LH(1464),
      Tr = LH(1471),
      Ur = LH(34986),
      Vr = LH(4941),
      Or = LH(3788),
      br = LH(3870),
      kr = LH(35008),
      mr = LH(9475),
      or = LH(34993),
      Ir = LH(34999),
      fr = LH(1986),
      lr = LH(1967),
      Kr = LH(5383),
      cr = LH(1204),
      er = LH(1168),
      qr = LH(1696),
      gr = LH(9540),
      Nr = LH(2638),
      Rr = LH(2642);

    function jr(HH) {
      return HH ? Object.keys(HH).sort(((BH, LH) => {
        var AH, rH, SH, hH;
        const tH = (null !== (AH = null === (rH = HH[LH]) || void 0 === rH ? void 0 : rH.sortPriority) && void 0 !== AH ? AH : 0) - (null !== (SH = null === (hH = HH[BH]) || void 0 === hH ? void 0 : hH.sortPriority) && void 0 !== SH ? SH : 0);
        return 0 !== tH ? tH : BH.localeCompare(LH)
      })) : []
    }
    const nr = [{
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

    function Fr(HH) {
      for (const {
          threshold: BH,
          suffix: LH
        }
        of nr)
        if (HH >= BH) {
          const AH = HH / BH;
          return AH >= 100 ? `${Math.floor(AH)}${LH}` : AH >= 10 ? `${AH.toFixed(1).replace(/\.0$/,"")}${LH}` : `${AH.toFixed(2).replace(/\.?0+$/,"")}${LH}`
        } return String(HH)
    }
    var Dr = LH(5506);
    const wr = {
        normal: "0.8em",
        big: "1em"
      },
      Zr = (0, AH.memo)((function(HH) {
        let {
          item: BH,
          amount: LH = 0,
          size: AH = "normal",
          tier: rH = null
        } = HH;
        return (0, XH.jsx)("div", {
          className: SH()("SmpSlot", `SmpSlot-${AH}`),
          children: BH && (0, XH.jsx)(fr.e, {
            itemName: BH,
            amount: LH > 1 ? LH : 0,
            amountFontSize: wr[AH],
            enchantmentTier: rH
          })
        })
      }));

    function dr(HH) {
      let {
        amount: BH,
        exact: LH = !1,
        className: AH
      } = HH;
      return (0, XH.jsxs)("span", {
        className: SH()("SmpGold", AH),
        children: [(0, XH.jsx)("span", {
          className: "SmpCoin",
          children: (0, XH.jsx)(fr.e, {
            itemName: "Gold Coin",
            amount: 0
          })
        }), LH ? BH.toLocaleString("en-US") : Fr(BH)]
      })
    }

    function ar(HH) {
      let {
        count: BH = 5,
        grid: LH = !1
      } = HH;
      return (0, XH.jsx)("div", {
        className: LH ? "SmpCardGrid" : "SmpList",
        "aria-hidden": "true",
        children: Array.from({
          length: BH
        }, ((HH, BH) => (0, XH.jsxs)("div", {
          className: SH()(LH ? "SmpListingCard" : "SmpRow", "SmpSkeleton"),
          children: [(0, XH.jsx)("div", {
            className: SH()("SmpSlot", LH ? "SmpSlot-big" : "SmpSlot-normal")
          }), (0, XH.jsxs)("div", {
            className: "SmpRowText",
            children: [(0, XH.jsx)("b", {}), (0, XH.jsx)("small", {})]
          }), (0, XH.jsx)("div", {
            className: "SmpSkeletonButton"
          })]
        }, BH)))
      })
    }

    function sr(HH) {
      let {
        title: BH,
        children: LH
      } = HH;
      return (0, XH.jsxs)("div", {
        className: "SmpEmpty",
        children: [(0, XH.jsx)("b", {
          children: BH
        }), LH && (0, XH.jsx)("small", {
          children: LH
        })]
      })
    }

    function Jr(HH) {
      let {
        entry: BH
      } = HH;
      return (0, XH.jsx)(sr, {
        title: (0, XH.jsx)(lr.b, {
          text: BH.item.customTitle
        }),
        children: (0, XH.jsx)(lr.b, {
          text: BH.item.description
        })
      })
    }

    function ir(HH) {
      return (0, XH.jsx)(Dr.b, {
        ...HH,
        className: SH()("SmpChoice", HH.className),
        reselectable: !0
      })
    }

    function pr() {
      return (0, XH.jsx)("span", {
        className: "SmpLoader",
        children: (0, XH.jsx)(UH.d, {})
      })
    }

    function yr(HH) {
      let {
        value: BH,
        onChange: LH,
        min: rH = 1,
        max: SH,
        step: hH = 1,
        label: tH
      } = HH;
      const zH = (0, AH.useRef)(null),
        CH = (0, AH.useRef)(BH);
      CH.current = BH;
      const [EH, GH] = (0, AH.useState)(null), YH = HH => Math.max(rH, Math.min(SH, Math.floor(HH))), uH = HH => {
        const BH = CH.current,
          AH = "function" === typeof hH ? hH(BH, HH) : hH,
          rH = YH(BH + AH * HH);
        CH.current = rH, LH(rH)
      };
      (0, AH.useEffect)((() => {
        if (null === EH) return;
        let HH;
        const BH = () => {
            GH(null)
          },
          LH = setTimeout((() => {
            HH = setInterval((() => {
              uH(EH);
              const HH = CH.current;
              (EH > 0 ? HH >= SH : HH <= rH) && BH()
            }), 70)
          }), 380);
        return window.addEventListener("pointerup", BH), window.addEventListener("pointercancel", BH), window.addEventListener("blur", BH), () => {
          clearTimeout(LH), clearInterval(HH), window.removeEventListener("pointerup", BH), window.removeEventListener("pointercancel", BH), window.removeEventListener("blur", BH)
        }
      }), [EH]), (0, AH.useEffect)((() => {
        const HH = zH.current;
        HH && document.activeElement !== HH && HH.value !== String(BH) && (HH.value = String(BH))
      }), [BH]), (0, AH.useEffect)((() => {
        const HH = zH.current;
        if (!HH) return;
        const BH = () => {
          HH.value = String(CH.current)
        };
        return HH.addEventListener("blur", BH), () => {
          HH.removeEventListener("blur", BH)
        }
      }), []);
      const QH = HH => (0, XH.jsx)("button", {
        type: "button",
        className: "SmpStepButton",
        "aria-label": `${HH>0?"More":"Less"} ${tH}`,
        disabled: HH > 0 ? BH >= SH : BH <= rH,
        onPointerDown: BH => {
          0 === BH.button && (uH(HH), GH(HH))
        },
        onKeyDown: BH => {
          "Enter" !== BH.key && " " !== BH.key || uH(HH)
        },
        onContextMenu: HH => {
          HH.preventDefault()
        },
        children: HH > 0 ? "+" : "\u2212"
      });
      return (0, XH.jsxs)("div", {
        className: "SmpStepper",
        children: [QH(-1), (0, XH.jsx)(TH.e, {
          className: "SmpStepperInput",
          domRef: zH,
          defaultValue: String(BH),
          ariaLabel: tH,
          type: "text",
          blurOnEnter: !0,
          onValueChange: HH => {
            const BH = HH.replace(/[^\d]/g, "");
            zH.current && BH !== HH && (zH.current.value = BH), "" !== BH && LH(YH(Number(BH)))
          }
        }), QH(1)]
      })
    }

    function HS(HH) {
      return Math.max(1, 10 ** Math.max(0, Math.floor(Math.log10(Math.max(1, HH))) - 1))
    }
    var BS = LH(35006),
      LS = LH(1182);
    const AS = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"];
    LS.v, gH.Mc.length;
    new Map;
    var rS = LH(3639);

    function SS(HH, BH) {
      var LH;
      return BH && (null === (LH = HH[BH]) || void 0 === LH ? void 0 : LH.smp) || null
    }

    function hS(HH, BH) {
      const LH = [];
      for (const rH of jr(HH)) {
        var AH;
        const SH = HH[rH];
        (null === (AH = SH.smp) || void 0 === AH ? void 0 : AH.kind) === BH && LH.push({
          key: rH,
          item: SH,
          meta: SH.smp
        })
      }
      return LH
    }

    function tS(HH, BH) {
      var LH;
      return null !== (LH = hS(HH, BH)[0]) && void 0 !== LH ? LH : null
    }
    const zS = "50% 0% 50% 0%",
      CS = [{
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

    function ES(HH) {
      const BH = HH - (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now());
      for (const {
          divisor: LH,
          suffix: AH
        }
        of CS)
        if (BH >= LH) return `${Math.floor(BH/LH)}${AH}`;
      return "<1s"
    }

    function XS(HH) {
      const BH = HH.map(mr.f),
        LH = [];
      return BH.forEach(((HH, AH) => {
        const rH = function(HH) {
            const BH = HH.match(/\d+/);
            return BH ? Number(BH[0]) : 0
          }(HH),
          SH = AH === BH.length - 1;
        (SH || 1 === rH || 10 === rH || 100 === rH) && LH.push({
          label: HH,
          quantity: rH,
          isAll: SH
        })
      })), LH
    }
    let GS = null;

    function YS(HH, BH) {
      const LH = BH.trim().toLowerCase();
      if (!LH) return [];
      const AH = HH => {
          if (HH === LH) return 0;
          if (HH.startsWith(LH)) return 1;
          const BH = HH.indexOf(LH);
          return -1 === BH ? -1 : 2 + BH
        },
        rH = [];
      for (const tH of HH) {
        const HH = [AH(tH.lowerLabel), AH(tH.lowerName)].filter((HH => -1 !== HH));
        HH.length && rH.push({
          item: tH,
          rank: Math.min(...HH)
        })
      }
      if (rH.length > 0) return rH.sort(((HH, BH) => HH.rank - BH.rank)).map((HH => HH.item));
      const SH = [...LH],
        hH = HH => {
          let BH = 0;
          for (const LH of SH) {
            if (BH = HH.indexOf(LH, BH), -1 === BH) return !1;
            BH++
          }
          return !0
        };
      return HH.filter((HH => hH(HH.lowerLabel) || hH(HH.lowerName)))
    }

    function uS(HH, BH) {
      var LH;
      return null !== (LH = null === HH || void 0 === HH ? void 0 : HH[BH]) && void 0 !== LH ? LH : BH
    }

    function QS(HH, BH) {
      const LH = HH.userInput;
      return void 0 !== BH && "dropdown" === (null === LH || void 0 === LH ? void 0 : LH.type) && LH.dropdownOptions.map(mr.f).includes(BH) ? BH : function(HH) {
        const BH = HH.userInput;
        if ("dropdown" !== (null === BH || void 0 === BH ? void 0 : BH.type) || 0 === BH.dropdownOptions.length) return null;
        const LH = BH.dropdownOptions.map(mr.f);
        return BH.initialValue && LH.includes(BH.initialValue) ? BH.initialValue : LH[LH.length - 1]
      }(HH)
    }

    function WS(HH) {
      return void 0 === HH ? "" : JSON.stringify(HH)
    }
    const MS = (0, AH.createContext)(null);

    function xS() {
      return (0, AH.useContext)(MS)
    }
    var vS = LH(2946);
    const PS = (0, AH.memo)((function(HH) {
        let {
          name: BH,
          label: LH,
          onPick: AH
        } = HH;
        return (0, XH.jsxs)("button", {
          type: "button",
          className: "SmpCatalogueTile",
          title: LH,
          onClick: () => {
            AH(BH)
          },
          children: [(0, XH.jsx)(Zr, {
            item: BH,
            size: "big"
          }), (0, XH.jsx)("span", {
            children: LH
          })]
        })
      })),
      TS = (0, AH.memo)((function(HH) {
        let {
          items: BH,
          query: LH,
          onPick: rH
        } = HH;
        const {
          t: SH
        } = (0, hH.B)(), [tH, zH] = (0, AH.useState)(new Set), CH = (0, AH.useMemo)((() => function(HH) {
          const BH = new Map;
          for (const LH of HH) {
            let HH = BH.get(LH.category);
            HH || (HH = [], BH.set(LH.category, HH)), HH.push(LH)
          }
          return [...AS, "other"].filter((HH => BH.has(HH))).map((HH => ({
            category: HH,
            items: BH.get(HH)
          })))
        }(BH)), [BH]), EH = (0, AH.useMemo)((() => YS(BH, LH).slice(0, 60)), [BH, LH]);
        return LH.trim() ? 0 === EH.length ? (0, XH.jsx)(sr, {
          title: SH("smpShop:noItemsFound", {
            query: LH.trim()
          }),
          children: SH("smpShop:tryShorterName")
        }) : (0, XH.jsx)(vS.e, {
          lazyLoadedClassName: "SmpCatalogueGrid",
          observerRoot: "SmpBody",
          rootMargin: zS,
          observerUpdateDeps: [LH],
          children: EH.map((HH => (0, XH.jsx)(PS, {
            name: HH.name,
            label: HH.label,
            onPick: rH
          }, HH.name)))
        }) : (0, XH.jsx)(XH.Fragment, {
          children: CH.map((HH => {
            let {
              category: BH,
              items: LH
            } = HH;
            const AH = tH.has(BH) || LH.length <= 48,
              hH = AH ? LH : LH.slice(0, 48);
            return (0, XH.jsxs)("section", {
              className: "SmpCatalogueSection",
              children: [(0, XH.jsxs)("h4", {
                children: [SH("other" === BH ? "smpShop:otherItems" : `creativeInventory:${BH}`), !AH && (0, XH.jsx)("button", {
                  type: "button",
                  className: "SmpLink",
                  onClick: () => {
                    zH(new Set([...tH, BH]))
                  },
                  children: SH("smpShop:showAll", {
                    count: LH.length
                  })
                })]
              }), (0, XH.jsx)(vS.e, {
                lazyLoadedClassName: "SmpCatalogueGrid",
                observerRoot: "SmpBody",
                rootMargin: zS,
                observerUpdateDeps: [AH],
                children: hH.map((HH => (0, XH.jsx)(PS, {
                  name: HH.name,
                  label: HH.label,
                  onPick: rH
                }, HH.name)))
              })]
            }, BH)
          }))
        })
      }));

    function US(HH, BH) {
      const {
        searched: LH,
        shown: rH,
        searchFor: SH,
        loading: hH
      } = function(HH, BH) {
        var LH;
        const rH = xS(),
          [SH, hH] = (0, AH.useState)(void 0),
          tH = (0, AH.useRef)(void 0),
          zH = (0, AH.useRef)(0),
          CH = (0, AH.useRef)(void 0),
          EH = null !== (LH = null === HH || void 0 === HH ? void 0 : HH.meta.item) && void 0 !== LH ? LH : null,
          XH = !!HH && rH.isPending(HH.key);
        (0, AH.useEffect)((() => {
          if (!HH || XH || !BH || void 0 === SH || SH === EH) return;
          const LH = SH === tH.current && rH.gaveUpAt(HH.key) > zH.current && CH.current !== SH;
          (SH !== tH.current || LH) && rH.act(HH.key, null !== SH && void 0 !== SH ? SH : "*", LH) && (LH && (CH.current = SH), tH.current = SH, zH.current = Date.now())
        }), [HH, XH, BH, SH, EH, rH]);
        const GH = (0, AH.useCallback)((HH => {
            tH.current = void 0, CH.current = void 0, hH(HH)
          }), []),
          YH = void 0 !== SH && SH !== EH && (XH || tH.current !== SH);
        return {
          searched: EH,
          shown: YH ? SH : EH,
          searchFor: GH,
          loading: YH || XH || null !== EH && !BH
        }
      }(HH, BH), tH = (0, AH.useMemo)((() => function() {
        var HH;
        let BH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          LH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          AH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const rH = `${(0,rS.j)()}\x1f${BH.join("\x1e")}\x1f${LH.join("\x1e")}\x1f${JSON.stringify(AH)}`;
        if ((null === (HH = GS) || void 0 === HH ? void 0 : HH.key) === rH) return GS.items;
        const SH = new Set(LH),
          hH = new Set,
          tH = [],
          zH = (HH, BH) => {
            var LH;
            if (!HH || hH.has(HH) || SH.has(HH)) return;
            hH.add(HH);
            const rH = null !== (LH = AH[HH]) && void 0 !== LH ? LH : HH;
            tH.push({
              name: HH,
              label: rH,
              lowerLabel: rH.toLowerCase(),
              lowerName: HH.toLowerCase(),
              category: BH
            })
          };
        for (const EH of (0, BS.creativeItemIds)()) {
          var CH;
          (0, BS.itemIsDisabled)(EH, !0, !0, !1) || (0, BS.showOnlyInCreativeSearch)(EH) || zH((0, rS.h)(EH), null !== (CH = (0, BS.creativeCategoryOf)(EH)) && void 0 !== CH ? CH : "other")
        }
        for (const EH of BH) zH(EH, "other");
        return GS = {
          key: rH,
          items: tH
        }, tH
      }(null === HH || void 0 === HH ? void 0 : HH.meta.extra, null === HH || void 0 === HH ? void 0 : HH.meta.excluded, null === HH || void 0 === HH ? void 0 : HH.meta.names)), [null === HH || void 0 === HH ? void 0 : HH.meta.extra, null === HH || void 0 === HH ? void 0 : HH.meta.excluded, null === HH || void 0 === HH ? void 0 : HH.meta.names]), [zH, CH] = (0, AH.useState)(""), [EH, XH] = (0, AH.useState)(0), [GH, YH] = (0, AH.useState)("recent"), uH = (0, AH.useCallback)((HH => {
        CH(""), XH((HH => HH + 1)), SH(HH)
      }), [SH]), QH = "browse" === GH || "" !== zH.trim();
      return {
        searched: LH,
        shown: rH,
        searchFor: SH,
        loading: hH,
        catalogue: tH,
        names: null === HH || void 0 === HH ? void 0 : HH.meta.names,
        query: zH,
        setQuery: CH,
        searchBoxKey: EH,
        pickItem: uH,
        setView: YH,
        browsing: QH
      }
    }

    function VS(HH) {
      let {
        browser: BH,
        children: LH
      } = HH;
      const {
        t: AH
      } = (0, hH.B)(), rH = xS();
      return (0, XH.jsxs)("div", {
        className: "SmpTopBar",
        children: [(0, XH.jsx)("div", {
          className: "SmpSearch",
          children: (0, XH.jsx)(TH.e, {
            className: "SmpSearchInput",
            placeholderText: AH("smpShop:searchPlaceholder"),
            defaultValue: BH.query,
            onValueChange: HH => {
              BH.setQuery(HH), BH.searched && HH.trim() && BH.searchFor(null)
            },
            blurOnEnter: !0,
            onEnter: () => {
              const HH = YS(BH.catalogue, BH.query)[0];
              HH ? BH.pickItem(HH.name) : BH.query.trim() && rH.notify(AH("smpShop:noItemsFound", {
                query: BH.query.trim()
              }))
            }
          }, BH.searchBoxKey)
        }), LH]
      })
    }

    function OS(HH) {
      let {
        browser: BH,
        recentLabel: LH,
        children: AH
      } = HH;
      const {
        t: rH
      } = (0, hH.B)();
      return (0, XH.jsxs)("div", {
        className: "SmpViewBar",
        children: [(0, XH.jsx)(ir, {
          options: [{
            value: "recent",
            label: LH
          }, {
            value: "browse",
            label: rH("smpShop:browseItems")
          }],
          value: BH.browsing ? "browse" : "recent",
          onChange: BH.setView,
          ariaLabel: rH("smpShop:show")
        }), !BH.browsing && AH]
      })
    }

    function bS(HH) {
      let {
        item: BH,
        names: LH,
        summary: AH,
        onBack: rH,
        children: SH
      } = HH;
      const {
        t: tH
      } = (0, hH.B)();
      return (0, XH.jsxs)("div", {
        className: "SmpItemHeader",
        children: [(0, XH.jsx)(CH.e, {
          className: "SmpBackButton",
          onClick: rH,
          children: tH("general:back")
        }), (0, XH.jsx)(Zr, {
          item: BH,
          size: "big"
        }), (0, XH.jsxs)("div", {
          className: "SmpItemHeaderText",
          children: [(0, XH.jsx)("b", {
            children: uS(LH, BH)
          }), AH && (0, XH.jsx)("small", {
            children: AH
          })]
        }), SH]
      })
    }

    function kS(HH) {
      let {
        browser: BH,
        className: LH,
        action: AH,
        above: rH,
        list: hH,
        summary: tH,
        recentLabel: zH,
        listControls: CH,
        onBack: EH
      } = HH;
      return (0, XH.jsxs)("div", {
        className: SH()("SmpScreen", LH),
        children: [(0, XH.jsx)(VS, {
          browser: BH,
          children: AH
        }), BH.shown && (0, XH.jsx)(bS, {
          item: BH.shown,
          names: BH.names,
          summary: !BH.loading && tH,
          onBack: () => {
            null === EH || void 0 === EH || EH(), BH.searchFor(null)
          },
          children: CH
        }), rH, BH.shown ? hH : (0, XH.jsxs)(XH.Fragment, {
          children: [(0, XH.jsx)(OS, {
            browser: BH,
            recentLabel: zH,
            children: CH
          }), BH.browsing ? (0, XH.jsx)(TS, {
            items: BH.catalogue,
            query: BH.query,
            onPick: BH.pickItem
          }) : hH]
        })]
      })
    }

    function mS(HH, BH) {
      const LH = HH.map((HH => {
        let {
          meta: BH
        } = HH;
        return BH.pricePerItem
      }));
      return "min" === BH ? Math.min(...LH) : Math.max(...LH)
    }
    var oS = LH(7138);
    const IS = (0, AH.memo)((function(HH) {
      var BH;
      const {
        t: LH
      } = (0, hH.B)(), AH = null === HH.seller, rH = HH.quantity * HH.pricePerItem;
      return (0, XH.jsxs)("div", {
        className: HH.grid ? "SmpListingCard" : "SmpRow SmpListingRow",
        children: [(0, XH.jsx)(Zr, {
          item: HH.item,
          amount: HH.quantity,
          size: HH.grid ? "big" : "normal",
          tier: HH.tier
        }), (0, XH.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, XH.jsx)("b", {
            children: (0, XH.jsx)(lr.b, {
              text: null !== (BH = HH.title) && void 0 !== BH ? BH : `${HH.quantity}x ${HH.item}`
            })
          }), (0, XH.jsxs)("small", {
            className: "SmpListingFacts",
            children: [(0, XH.jsx)("span", {
              children: AH ? LH("smpShop:you") : (0, XH.jsx)(lr.b, {
                text: [{
                  entityName: HH.seller
                }]
              })
            }), (0, XH.jsx)("span", {
              children: LH("smpShop:timeLeft", {
                time: ES(HH.expiresAt)
              })
            })]
          })]
        }), (0, XH.jsxs)("div", {
          className: "SmpRowPrice",
          children: [(0, XH.jsx)(dr, {
            amount: HH.pricePerItem
          }), (0, XH.jsx)("small", {
            children: LH("smpShop:each")
          })]
        }), (0, XH.jsx)(CH.i, {
          className: "SmpBuyButton",
          disabled: AH || !HH.canAfford && !HH.busy,
          loading: HH.busy,
          onClick: () => {
            HH.onBuy(HH.itemKey)
          },
          children: AH ? LH("smpShop:yours") : (0, XH.jsx)(dr, {
            amount: rH
          })
        })]
      })
    }));

    function fS(HH) {
      let {
        view: BH,
        onChange: LH
      } = HH;
      const {
        t: AH
      } = (0, hH.B)();
      return (0, XH.jsx)(Dr.b, {
        className: "SmpChoice SmpViewToggle",
        ariaLabel: AH("smpShop:layout"),
        options: [{
          value: "list",
          label: (0, XH.jsx)(tH.c, {
            name: "list"
          }),
          ariaLabel: AH("smpShop:listView")
        }, {
          value: "grid",
          label: (0, XH.jsx)(tH.c, {
            name: "grid-2"
          }),
          ariaLabel: AH("smpShop:gridView")
        }],
        value: BH,
        onChange: LH
      })
    }

    function lS(HH) {
      let {
        entries: BH,
        view: LH
      } = HH;
      const {
        t: AH
      } = (0, hH.B)(), rH = xS(), SH = "grid" === LH;
      return (0, XH.jsxs)(XH.Fragment, {
        children: [!SH && (0, XH.jsxs)("div", {
          className: "SmpColumns",
          "aria-hidden": "true",
          children: [(0, XH.jsx)("span", {}), (0, XH.jsx)("span", {
            children: AH("smpShop:columnItem")
          }), (0, XH.jsx)("span", {
            children: AH("smpShop:columnPriceEach")
          }), (0, XH.jsx)("span", {
            children: AH("smpShop:columnTotal")
          })]
        }), (0, XH.jsx)(vS.e, {
          lazyLoadedClassName: SH ? "SmpCardGrid" : "SmpList",
          observerRoot: "SmpBody",
          rootMargin: zS,
          observerUpdateDeps: [BH.length],
          children: BH.map((HH => {
            var BH, LH;
            let {
              key: AH,
              item: hH,
              meta: tH
            } = HH;
            const zH = tH.quantity * tH.pricePerItem;
            return (0, XH.jsx)(IS, {
              itemKey: AH,
              item: tH.item,
              title: hH.customTitle,
              quantity: tH.quantity,
              pricePerItem: tH.pricePerItem,
              seller: tH.seller,
              expiresAt: tH.expiresAt,
              tier: null !== (BH = null === (LH = hH.enchant) || void 0 === LH ? void 0 : LH.tier) && void 0 !== BH ? BH : null,
              busy: rH.isPending(AH) || null !== tH.seller && !1 === hH.canBuy,
              canAfford: rH.canAfford(hH, zH),
              grid: SH,
              onBuy: rH.act
            }, AH)
          }))
        }, LH)]
      })
    }
    const KS = [1, 10, 100],
      cS = [1, 10, 100, 999];

    function eS(HH) {
      var BH, LH, rH, zH, EH, GH, YH, uH, QH, WH;
      const {
        t: MH
      } = (0, hH.B)(), xH = xS(), {
        creator: vH,
        mode: PH
      } = HH, [UH, VH] = (0, AH.useState)(null !== (BH = null === vH || void 0 === vH ? void 0 : vH.meta.item) && void 0 !== BH ? BH : null), [OH, bH] = (0, AH.useState)(1), [kH, mH] = (0, AH.useState)(0), [oH, IH] = (0, AH.useState)(""), [fH, lH] = (0, AH.useState)(0), KH = (0, AH.useRef)(UH), cH = (0, AH.useRef)(!1), [eH, qH] = (0, AH.useState)(!1), gH = null !== (LH = null === vH || void 0 === vH ? void 0 : vH.meta.item) && void 0 !== LH ? LH : null, NH = null !== (rH = null === vH || void 0 === vH ? void 0 : vH.meta.owned) && void 0 !== rH ? rH : 0;
      (0, AH.useEffect)((() => {
        HH.searching || null === gH || gH === KH.current || (KH.current = gH, cH.current = !1, VH(gH), mH(0), bH("list" === PH ? Math.max(1, NH) : 1))
      }), [gH, HH.searching]);
      const RH = !!vH && !!UH && vH.meta.item === UH,
        jH = RH ? vH.meta.owned : null !== (zH = null === (EH = HH.inventory) || void 0 === EH || null === (GH = EH.find((HH => HH.item === UH))) || void 0 === GH ? void 0 : GH.quantity) && void 0 !== zH ? zH : 0,
        nH = "list" === PH ? Math.max(1, jH) : 45954,
        FH = null !== (YH = HH.prices[0]) && void 0 !== YH ? YH : null,
        DH = HH.prices.length ? Math.round(HH.prices.reduce(((HH, BH) => HH + BH), 0) / HH.prices.length) : null,
        wH = null === (uH = HH.inventory) || void 0 === uH || null === (QH = uH.find((HH => HH.item === UH))) || void 0 === QH ? void 0 : QH.sellPrice;
      (0, AH.useEffect)((() => {
        var HH;
        RH && (bH((HH => "list" === PH ? Math.min(Math.max(1, HH), Math.max(1, jH)) : HH)), cH.current || mH(null !== (HH = null !== FH && void 0 !== FH ? FH : DH) && void 0 !== HH ? HH : Math.max(1, null !== wH && void 0 !== wH ? wH : 1)))
      }), [RH, jH, UH, FH, DH]);
      const ZH = HH => {
          cH.current = !0, mH(HH)
        },
        dH = BH => {
          var LH, AH, rH;
          KH.current = BH, cH.current = !1, qH(!1), IH(""), lH((HH => HH + 1)), VH(BH), mH(0), bH("list" === PH && null !== (LH = null === (AH = HH.inventory) || void 0 === AH || null === (rH = AH.find((HH => HH.item === BH))) || void 0 === rH ? void 0 : rH.quantity) && void 0 !== LH ? LH : 1), (null === vH || void 0 === vH ? void 0 : vH.meta.item) !== BH && HH.onPickItem(BH)
        },
        aH = OH * kH,
        sH = "list" === PH && null !== vH && void 0 !== vH && vH.meta.fee ? function(HH, BH) {
          const LH = Math.max(0, BH - HH.taxFreeAllowance);
          return Math.ceil(Math.round(LH * HH.rate * 1e6) / 1e6)
        }(vH.meta.fee, aH) : 0,
        JH = !!vH && xH.isPending(vH.key),
        iH = RH && !HH.searching && OH >= 1 && kH >= 1 && ("order" === PH || jH >= OH) && !JH,
        pH = !!UH && !RH && !HH.searching && OH >= 1 && kH >= 1,
        yH = () => {
          iH ? xH.act(vH.key, `${OH}|${kH}`) : pH && (HH.onPickItem(UH), qH(!0))
        };
      (0, AH.useEffect)((() => {
        eH && RH && !HH.searching && (qH(!1), yH())
      }), [eH, RH, HH.searching]);
      const HB = !!UH && !RH && (HH.searching || eH),
        BB = UH ? uS(HH.names, UH) : "",
        LB = (0, AH.useMemo)((() => YS(HH.catalogue, oH).slice(0, 8)), [HH.catalogue, oH]),
        AB = ("list" === PH ? KS.filter((HH => HH < jH)) : cS).map((HH => ({
          value: HH,
          label: String(HH)
        })));
      "list" === PH && jH > 0 && AB.push({
        value: jH,
        label: MH("smpShop:all", {
          count: jH
        })
      });
      const rB = [];
      return null !== FH && (FH > 1 && rB.push({
        value: FH - 1,
        label: MH("smpShop:undercut", {
          price: Fr(FH - 1)
        })
      }), rB.push({
        value: FH,
        label: MH("smpShop:lowest", {
          price: Fr(FH)
        })
      })), null !== DH && DH !== FH && rB.push({
        value: DH,
        label: MH("smpShop:average", {
          price: Fr(DH)
        })
      }), (0, XH.jsxs)("div", {
        className: "SmpTradeForm",
        children: [(0, XH.jsxs)("div", {
          className: "SmpTradeFormHead",
          children: [(0, XH.jsx)("b", {
            children: MH("list" === PH ? "smpShop:sellOnMarket" : "smpShop:createOrder")
          }), (0, XH.jsx)("button", {
            type: "button",
            className: "SmpIconButton",
            "aria-label": MH("smpShop:close"),
            onClick: HH.onClose,
            children: (0, XH.jsx)(tH.c, {
              name: "xmark"
            })
          })]
        }), "list" === PH && (0, XH.jsx)("div", {
          className: "SmpPicker",
          role: "listbox",
          children: null !== (WH = HH.inventory) && void 0 !== WH && WH.length ? HH.inventory.map((HH => {
            let {
              item: BH,
              quantity: LH
            } = HH;
            return (0, XH.jsx)("button", {
              type: "button",
              title: BH,
              className: SH()("SmpPickerSlot", {
                SmpPickerSlotOn: BH === UH
              }),
              onClick: () => {
                dH(BH)
              },
              children: (0, XH.jsx)(Zr, {
                item: BH,
                amount: LH
              })
            }, BH)
          })) : (0, XH.jsx)("span", {
            className: "SmpMuted",
            children: MH("smpShop:nothingToList")
          })
        }), ("list" === PH || !UH) && (0, XH.jsxs)("div", {
          className: "SmpItemSearch",
          children: [(0, XH.jsx)(TH.e, {
            className: "SmpSearchInput",
            placeholderText: MH("list" === PH ? "smpShop:listSearchPlaceholder" : "smpShop:orderSearchPlaceholder"),
            defaultValue: oH,
            onValueChange: IH,
            blurOnEnter: !0,
            onEnter: () => {
              LB[0] && dH(LB[0].name)
            }
          }, fH), LB.length > 0 && (0, XH.jsx)("div", {
            className: "SmpPicker",
            children: LB.map((HH => {
              let {
                name: BH
              } = HH;
              return (0, XH.jsx)("button", {
                type: "button",
                title: BH,
                className: SH()("SmpPickerSlot", {
                  SmpPickerSlotOn: BH === UH
                }),
                onClick: () => {
                  dH(BH)
                },
                children: (0, XH.jsx)(Zr, {
                  item: BH
                })
              }, BH)
            }))
          })]
        }), UH && (0, XH.jsxs)(XH.Fragment, {
          children: [(0, XH.jsxs)("div", {
            className: "SmpPickedName",
            children: [BB, HB && (0, XH.jsx)(pr, {})]
          }), (0, XH.jsxs)("div", {
            className: "SmpFormGrid",
            children: [(0, XH.jsxs)("div", {
              className: "SmpField",
              children: [(0, XH.jsxs)("span", {
                children: [MH("smpShop:quantity"), "list" === PH && RH && (0, XH.jsx)("small", {
                  children: MH("smpShop:youHave", {
                    count: jH
                  })
                })]
              }), (0, XH.jsx)(yr, {
                value: OH,
                onChange: bH,
                max: nH,
                label: MH("smpShop:quantity")
              }), (0, XH.jsx)(ir, {
                options: AB,
                value: OH,
                onChange: bH,
                ariaLabel: MH("smpShop:quantity")
              })]
            }), (0, XH.jsxs)("div", {
              className: "SmpField",
              children: [(0, XH.jsx)("span", {
                children: MH("smpShop:pricePerItem")
              }), (0, XH.jsx)(yr, {
                value: Math.max(1, kH),
                onChange: ZH,
                max: 9999999,
                step: HS,
                label: MH("smpShop:pricePerItem")
              }), (0, XH.jsx)(ir, {
                options: rB,
                value: kH,
                onChange: ZH,
                ariaLabel: MH("smpShop:pricePerItem")
              })]
            })]
          }), "list" === PH && (0, XH.jsxs)("div", {
            className: "SmpTradeSummary",
            children: [(0, XH.jsxs)("span", {
              children: [MH("smpShop:youGet"), " ", (0, XH.jsx)(dr, {
                amount: Math.max(0, aH - sH),
                exact: !0
              })]
            }), (0, XH.jsx)("small", {
              children: sH > 0 ? MH("smpShop:listingFee", {
                fee: sH.toLocaleString("en-US")
              }) : MH("smpShop:listingRules")
            })]
          }), (0, XH.jsx)(CH.x, {
            className: "SmpSubmit",
            disabled: !iH && !pH && !JH,
            loading: JH || HB || RH && HH.searching,
            onClick: yH,
            children: "list" === PH ? MH("smpShop:listButton", {
              count: OH,
              item: BB
            }) : (0, XH.jsxs)(XH.Fragment, {
              children: [MH("smpShop:orderButton", {
                count: OH,
                item: BB
              }), " ", kH >= 1 && (0, XH.jsx)(dr, {
                amount: aH
              })]
            })
          })]
        })]
      })
    }

    function qS() {
      var HH;
      const {
        t: BH
      } = (0, hH.B)(), LH = xS(), rH = null === (HH = LH.shopInfo[LH.categoryKey]) || void 0 === HH ? void 0 : HH.items, SH = tS(rH, "search"), tH = tS(rH, "creator"), zH = hS(rH, "enchantedCreator"), EH = hS(rH, "listing"), GH = tS(rH, "empty"), YH = US(SH, EH.length > 0 || null !== GH), {
        searched: uH,
        shown: QH,
        loading: WH
      } = YH, [MH, xH] = (0, AH.useState)(!1), [vH, PH] = function() {
        const [HH, BH] = (0, oS.b)("smpMarketView", "list");
        return ["grid" === HH ? "grid" : "list", BH]
      }(), TH = "grid" === vH, UH = (0, AH.useMemo)((() => EH.filter((HH => {
        let {
          meta: BH
        } = HH;
        return null !== BH.seller && BH.item === uH
      })).map((HH => {
        let {
          meta: BH
        } = HH;
        return BH.pricePerItem
      })).sort(((HH, BH) => HH - BH))), [EH, uH]), VH = (0, AH.useMemo)((() => {
        const HH = new Set(YH.catalogue.map((HH => {
          let {
            name: BH
          } = HH;
          return BH
        })));
        return function(HH) {
          for (const BH in HH)
            if ("sell" === HH[BH].smp) return hS(HH[BH].items, "sell").filter((HH => {
              let {
                item: BH
              } = HH;
              return !BH.enchant
            })).map((HH => {
              let {
                meta: BH
              } = HH;
              return {
                item: BH.item,
                quantity: BH.quantity,
                sellPrice: BH.pricePerItem
              }
            }));
          return []
        }(LH.shopInfo).filter((BH => {
          let {
            item: LH
          } = BH;
          return HH.has(LH)
        }))
      }), [LH.shopInfo, YH.catalogue]);
      return (0, XH.jsx)(kS, {
        browser: YH,
        className: "SmpMarketTab",
        recentLabel: BH("smpShop:recentlyListed"),
        action: (0, XH.jsx)(CH.x, {
          className: "SmpSellButton",
          onClick: () => {
            xH((HH => !HH))
          },
          children: BH("smpShop:sell")
        }),
        above: MH && (0, XH.jsxs)(XH.Fragment, {
          children: [(0, XH.jsx)(eS, {
            mode: "list",
            creator: tH,
            inventory: VH,
            catalogue: YH.catalogue,
            names: YH.names,
            searching: WH,
            prices: UH,
            onPickItem: YH.searchFor,
            onClose: () => {
              xH(!1)
            }
          }), zH.length > 0 && (0, XH.jsx)(gS, {
            entries: zH
          })]
        }),
        listControls: (0, XH.jsx)(fS, {
          view: vH,
          onChange: PH
        }),
        summary: QH && (EH.length > 0 ? BH(1 === EH.length ? "smpShop:listingSummaryOne" : "smpShop:listingSummary", {
          count: EH.length,
          price: Fr(mS(EH, "min"))
        }) : BH("smpShop:noOneSelling", {
          item: uS(YH.names, QH)
        })),
        list: WH ? (0, XH.jsx)(ar, {
          grid: TH
        }) : EH.length > 0 ? (0, XH.jsx)(lS, {
          entries: EH,
          view: vH
        }) : GH ? (0, XH.jsx)(Jr, {
          entry: GH
        }) : (0, XH.jsx)(ar, {
          count: 3,
          grid: TH
        })
      })
    }

    function gS(HH) {
      let {
        entries: BH
      } = HH;
      const {
        t: LH
      } = (0, hH.B)(), rH = xS(), [SH, tH] = (0, AH.useState)({});
      return (0, XH.jsx)("div", {
        className: "SmpList",
        children: BH.map((HH => {
          var BH, AH, hH;
          let {
            key: zH,
            item: EH,
            meta: GH
          } = HH;
          const YH = null !== (BH = SH[zH]) && void 0 !== BH ? BH : 1;
          return (0, XH.jsxs)("div", {
            className: "SmpRow",
            children: [(0, XH.jsx)(Zr, {
              item: GH.item,
              amount: GH.quantity,
              tier: null !== (AH = null === (hH = EH.enchant) || void 0 === hH ? void 0 : hH.tier) && void 0 !== AH ? AH : null
            }), (0, XH.jsxs)("div", {
              className: "SmpRowText",
              children: [(0, XH.jsx)("b", {
                children: (0, XH.jsx)(lr.b, {
                  text: EH.customTitle
                })
              }), (0, XH.jsx)("small", {
                children: LH("smpShop:enchantedListing")
              })]
            }), (0, XH.jsx)(yr, {
              value: YH,
              onChange: HH => {
                tH({
                  ...SH,
                  [zH]: HH
                })
              },
              max: 9999999,
              step: HS,
              label: LH("smpShop:pricePerItem")
            }), (0, XH.jsxs)(CH.x, {
              loading: rH.isPending(zH),
              onClick: () => {
                rH.act(zH, String(YH))
              },
              children: [LH("smpShop:list"), " ", (0, XH.jsx)(dr, {
                amount: YH
              })]
            })]
          }, zH)
        }))
      })
    }
    const NS = (0, AH.memo)((function(HH) {
      let {
        itemKey: BH,
        item: LH,
        quantity: AH,
        pricePerItem: rH,
        tier: hH,
        selected: tH,
        onSelect: zH
      } = HH;
      return (0, XH.jsxs)("button", {
        type: "button",
        className: SH()("SmpInventorySlot", {
          SmpInventorySlotOn: tH
        }),
        title: LH,
        onClick: () => {
          zH(BH)
        },
        children: [(0, XH.jsx)(Zr, {
          item: LH,
          amount: AH,
          tier: hH
        }), (0, XH.jsx)(dr, {
          amount: rH
        })]
      })
    }));

    function RS() {
      var HH;
      const {
        t: BH
      } = (0, hH.B)(), LH = xS(), rH = null === (HH = LH.shopInfo[LH.categoryKey]) || void 0 === HH ? void 0 : HH.items, tH = hS(rH, "sell"), zH = tS(rH, "empty"), [CH, EH] = (0, AH.useState)(null), [GH, YH] = (0, AH.useState)({}), uH = tH.find((HH => {
        let {
          key: BH
        } = HH;
        return BH === CH
      }));
      return 0 === tH.length ? (0, XH.jsx)("div", {
        className: "SmpScreen",
        children: (0, XH.jsx)(sr, {
          title: zH ? (0, XH.jsx)(lr.b, {
            text: zH.item.customTitle
          }) : BH("smpShop:nothingToSell"),
          children: zH && (0, XH.jsx)(lr.b, {
            text: zH.item.description
          })
        })
      }) : (0, XH.jsxs)("div", {
        className: "SmpScreen SmpInstantSellTab",
        children: [(0, XH.jsx)("div", {
          className: "SmpInventoryGrid",
          children: tH.map((HH => {
            var BH, LH;
            let {
              key: AH,
              item: rH,
              meta: SH
            } = HH;
            return (0, XH.jsx)(NS, {
              itemKey: AH,
              item: SH.item,
              quantity: SH.quantity,
              pricePerItem: SH.pricePerItem,
              tier: null !== (BH = null === (LH = rH.enchant) || void 0 === LH ? void 0 : LH.tier) && void 0 !== BH ? BH : null,
              selected: AH === CH,
              onSelect: EH
            }, AH)
          }))
        }), (0, XH.jsx)("div", {
          className: SH()("SmpSellBar", {
            SmpSellBarIdle: !uH
          }),
          children: uH ? (0, XH.jsx)(jS, {
            entry: uH,
            choice: QS(uH.item, GH[uH.key]),
            onChoose: HH => {
              YH({
                ...GH,
                [uH.key]: HH
              })
            }
          }) : (0, XH.jsx)("span", {
            className: "SmpMuted",
            children: BH("smpShop:tapToSell")
          })
        })]
      })
    }

    function jS(HH) {
      var BH, LH, AH, rH;
      let {
        entry: SH,
        choice: tH,
        onChoose: zH
      } = HH;
      const {
        t: EH
      } = (0, hH.B)(), GH = xS(), {
        key: YH,
        item: uH,
        meta: QH
      } = SH, WH = XS("dropdown" === (null === (BH = uH.userInput) || void 0 === BH ? void 0 : BH.type) ? uH.userInput.dropdownOptions : []), MH = null === tH ? 0 : -(0, mr.c)(uH, tH);
      return (0, XH.jsxs)(XH.Fragment, {
        children: [(0, XH.jsx)(Zr, {
          item: QH.item,
          amount: QH.quantity,
          tier: null !== (LH = null === (AH = uH.enchant) || void 0 === AH ? void 0 : AH.tier) && void 0 !== LH ? LH : null
        }), (0, XH.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, XH.jsx)("b", {
            children: (0, XH.jsx)(lr.b, {
              text: null !== (rH = uH.customTitle) && void 0 !== rH ? rH : QH.item
            })
          }), (0, XH.jsx)("small", {
            children: EH("smpShop:sellEach", {
              count: QH.quantity
            })
          })]
        }), (0, XH.jsx)(ir, {
          options: WH.map((HH => {
            let {
              label: BH,
              quantity: LH,
              isAll: AH
            } = HH;
            return {
              value: BH,
              label: AH ? EH("smpShop:all", {
                count: LH
              }) : String(LH)
            }
          })),
          value: tH,
          onChange: zH,
          ariaLabel: EH("smpShop:quantity")
        }), (0, XH.jsxs)(CH.x, {
          loading: GH.isPending(YH),
          disabled: null === tH,
          onClick: () => {
            GH.act(YH, tH)
          },
          children: [EH("smpShop:sellButton"), " ", (0, XH.jsx)(dr, {
            amount: MH
          })]
        })]
      })
    }

    function nS() {
      var HH;
      const {
        t: BH
      } = (0, hH.B)(), LH = xS(), AH = null === (HH = LH.shopInfo[LH.categoryKey]) || void 0 === HH ? void 0 : HH.items, rH = hS(AH, "collect"), SH = hS(AH, "myListing"), tH = (HH, BH) => LH.isPending(HH) || !1 === BH.canBuy;
      return (0, XH.jsxs)("div", {
        className: "SmpScreen",
        children: [(0, XH.jsx)("h3", {
          className: "SmpSectionTitle",
          children: BH("smpShop:readyToCollect")
        }), rH.length > 0 ? (0, XH.jsx)("div", {
          className: "SmpList",
          children: rH.map((HH => {
            var AH, rH;
            let {
              key: SH,
              item: hH,
              meta: zH
            } = HH;
            return (0, XH.jsxs)("div", {
              className: "SmpRow",
              children: [(0, XH.jsx)(Zr, {
                item: "sold" === zH.type ? "Gold Coin" : zH.item,
                amount: "sold" === zH.type ? 0 : zH.quantity,
                tier: null !== (AH = null === (rH = hH.enchant) || void 0 === rH ? void 0 : rH.tier) && void 0 !== AH ? AH : null
              }), (0, XH.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, XH.jsx)("b", {
                  children: (0, XH.jsx)(lr.b, {
                    text: hH.customTitle
                  })
                }), (0, XH.jsx)("small", {
                  children: (0, XH.jsx)(lr.b, {
                    text: hH.description
                  })
                })]
              }), (0, XH.jsx)(CH.u, {
                loading: tH(SH, hH),
                onClick: () => {
                  LH.act(SH)
                },
                children: BH("smpShop:collect")
              })]
            }, SH)
          }))
        }) : (0, XH.jsx)(sr, {
          title: BH("smpShop:nothingToCollect"),
          children: BH("smpShop:nothingToCollectHint")
        }), (0, XH.jsx)("h3", {
          className: "SmpSectionTitle",
          children: BH("smpShop:activeListings", {
            count: SH.length
          })
        }), SH.length > 0 ? (0, XH.jsx)("div", {
          className: "SmpList",
          children: SH.map((HH => {
            var AH, rH;
            let {
              key: SH,
              item: hH,
              meta: zH
            } = HH;
            return (0, XH.jsxs)("div", {
              className: "SmpRow",
              children: [(0, XH.jsx)(Zr, {
                item: zH.item,
                amount: zH.quantity,
                tier: null !== (AH = null === (rH = hH.enchant) || void 0 === rH ? void 0 : rH.tier) && void 0 !== AH ? AH : null
              }), (0, XH.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, XH.jsx)("b", {
                  children: (0, XH.jsx)(lr.b, {
                    text: hH.customTitle
                  })
                }), (0, XH.jsx)("small", {
                  children: BH("smpShop:timeLeft", {
                    time: ES(zH.expiresAt)
                  })
                })]
              }), (0, XH.jsxs)("div", {
                className: "SmpRowPrice",
                children: [(0, XH.jsx)(dr, {
                  amount: zH.pricePerItem
                }), (0, XH.jsx)("small", {
                  children: BH("smpShop:each")
                })]
              }), (0, XH.jsx)(CH.O, {
                loading: tH(SH, hH),
                onClick: () => {
                  LH.act(SH)
                },
                children: BH("smpShop:cancel")
              })]
            }, SH)
          }))
        }) : (0, XH.jsx)(sr, {
          title: BH("smpShop:noActiveListings"),
          children: BH("smpShop:noActiveListingsHint")
        })]
      })
    }

    function FS(HH) {
      let {
        done: BH,
        of: LH
      } = HH;
      return (0, XH.jsx)("span", {
        className: "SmpProgress",
        children: (0, XH.jsx)("i", {
          style: {
            width: `${Math.min(100,BH/Math.max(1,LH)*100)}%`
          }
        })
      })
    }

    function DS(HH) {
      var BH, LH, AH;
      let {
        entry: rH,
        choice: SH,
        onChoose: tH
      } = HH;
      const {
        t: zH
      } = (0, hH.B)(), EH = xS(), {
        key: GH,
        item: YH,
        meta: uH
      } = rH, QH = "dropdown" === (null === (BH = YH.userInput) || void 0 === BH ? void 0 : BH.type) ? YH.userInput.dropdownOptions : [], WH = !0 === uH.processing, MH = null !== uH.creator && (uH.owned > 0 || WH), xH = MH && uH.owned > 0 ? XS(QH) : [], vH = null === SH ? 0 : null !== (LH = null === (AH = xH.find((HH => HH.label === SH))) || void 0 === AH ? void 0 : AH.quantity) && void 0 !== LH ? LH : 0;
      return (0, XH.jsxs)("div", {
        className: "SmpRow SmpOrderRow",
        children: [(0, XH.jsx)(Zr, {
          item: uH.item
        }), (0, XH.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, XH.jsx)("b", {
            children: (0, XH.jsx)(lr.b, {
              text: YH.customTitle
            })
          }), (0, XH.jsxs)("small", {
            children: [(0, XH.jsx)(dr, {
              amount: uH.pricePerItem
            }), " ", zH("smpShop:each"), " \xb7", " ", null === uH.creator ? zH("smpShop:you") : (0, XH.jsx)(lr.b, {
              text: [{
                entityName: uH.creator
              }]
            })]
          }), (0, XH.jsx)(FS, {
            done: uH.delivered,
            of: uH.wanted
          })]
        }), MH ? (0, XH.jsxs)(XH.Fragment, {
          children: [(0, XH.jsx)(ir, {
            options: xH.map((HH => {
              let {
                label: BH,
                quantity: LH,
                isAll: AH
              } = HH;
              return {
                value: BH,
                label: AH ? zH("smpShop:max", {
                  count: LH
                }) : String(LH)
              }
            })),
            value: SH,
            onChange: tH,
            ariaLabel: zH("smpShop:quantity")
          }), (0, XH.jsxs)(CH.x, {
            loading: EH.isPending(GH) || WH,
            disabled: null === SH,
            onClick: () => {
              EH.act(GH, SH)
            },
            children: [zH("smpShop:deliver"), " ", (0, XH.jsx)(dr, {
              amount: vH * uH.pricePerItem
            })]
          })]
        }) : (0, XH.jsx)("span", {
          className: "SmpMuted SmpRowNote",
          children: null === uH.creator ? zH("smpShop:yourOrder") : zH("smpShop:youHave", {
            count: 0
          })
        })]
      })
    }

    function wS() {
      var HH;
      const {
        t: BH
      } = (0, hH.B)(), LH = xS(), rH = null === (HH = LH.shopInfo[LH.categoryKey]) || void 0 === HH ? void 0 : HH.items, SH = tS(rH, "search"), tH = tS(rH, "creator"), zH = hS(rH, "order"), EH = tS(rH, "empty"), GH = US(SH, zH.length > 0 || null !== EH), [YH, uH] = (0, AH.useState)(!1), [QH, WH] = (0, AH.useState)({});
      return (0, XH.jsx)(kS, {
        browser: GH,
        recentLabel: BH("smpShop:recentOrders"),
        action: (0, XH.jsx)(CH.x, {
          onClick: () => {
            uH((HH => !HH))
          },
          children: BH("smpShop:createOrder")
        }),
        above: YH && (0, XH.jsx)(eS, {
          mode: "order",
          creator: tH,
          catalogue: GH.catalogue,
          names: GH.names,
          searching: GH.loading,
          prices: [],
          onPickItem: GH.searchFor,
          onClose: () => {
            uH(!1)
          }
        }),
        onBack: () => {
          uH(!1)
        },
        summary: zH.length > 0 && BH(1 === zH.length ? "smpShop:orderSummaryOne" : "smpShop:orderSummary", {
          count: zH.length,
          price: Fr(mS(zH, "max"))
        }),
        list: GH.loading ? (0, XH.jsx)(ar, {}) : zH.length > 0 ? (0, XH.jsx)(vS.e, {
          lazyLoadedClassName: "SmpList",
          observerRoot: "SmpBody",
          rootMargin: zS,
          observerUpdateDeps: [zH.length],
          children: zH.map((HH => (0, XH.jsx)(DS, {
            entry: HH,
            choice: QS(HH.item, QH[HH.key]),
            onChoose: BH => {
              WH({
                ...QH,
                [HH.key]: BH
              })
            }
          }, HH.key)))
        }) : EH ? (0, XH.jsx)(Jr, {
          entry: EH
        }) : (0, XH.jsx)(ar, {
          count: 3
        })
      })
    }

    function ZS() {
      var HH;
      const {
        t: BH
      } = (0, hH.B)(), LH = xS(), AH = hS(null === (HH = LH.shopInfo[LH.categoryKey]) || void 0 === HH ? void 0 : HH.items, "myOrder");
      return 0 === AH.length ? (0, XH.jsx)("div", {
        className: "SmpScreen",
        children: (0, XH.jsx)(sr, {
          title: BH("smpShop:noOrders"),
          children: BH("smpShop:noOrdersHint")
        })
      }) : (0, XH.jsx)("div", {
        className: "SmpScreen",
        children: (0, XH.jsx)("div", {
          className: "SmpList",
          children: AH.map((HH => {
            let {
              key: AH,
              item: rH,
              meta: SH
            } = HH;
            const hH = LH.isPending(AH) || !1 === rH.canBuy;
            return (0, XH.jsxs)("div", {
              className: "SmpRow",
              children: [(0, XH.jsx)(Zr, {
                item: SH.item,
                amount: SH.collectable
              }), (0, XH.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, XH.jsx)("b", {
                  children: (0, XH.jsx)(lr.b, {
                    text: rH.customTitle
                  })
                }), (0, XH.jsxs)("small", {
                  children: [(0, XH.jsx)(dr, {
                    amount: SH.pricePerItem
                  }), " ", BH("smpShop:each"), SH.collectable > 0 && ` \xb7 ${BH("smpShop:readyCount",{count:SH.collectable})}`]
                }), (0, XH.jsx)(FS, {
                  done: SH.delivered,
                  of: SH.wanted
                })]
              }), SH.collectable > 0 ? (0, XH.jsx)(CH.u, {
                loading: hH,
                onClick: () => {
                  LH.act(AH)
                },
                children: BH("smpShop:collectCount", {
                  count: SH.collectable
                })
              }) : (0, XH.jsx)(CH.O, {
                loading: hH,
                onClick: () => {
                  LH.act(AH)
                },
                children: BH("smpShop:cancel")
              })]
            }, AH)
          }))
        })
      })
    }
    const dS = new Set(["search", "creator", "enchantedCreator", "collect", "myOrder", "order"]),
      aS = {
        sell: "coins",
        market: "store",
        collect: "backpack",
        orders: "file-clipboard",
        myOrders: "location-check"
      };

    function sS(HH, BH) {
      let LH = !1;
      const AH = {};
      for (const rH in HH) BH(rH, HH[rH]) ? AH[rH] = HH[rH] : LH = !0;
      return LH ? AH : HH
    }

    function JS(HH) {
      var BH, LH, rH, zH;
      const {
        show: CH,
        shopInfo: EH,
        selectedCategoryKey: GH
      } = HH, {
        t: YH
      } = (0, hH.B)(), uH = null !== GH && void 0 !== GH ? GH : "", QH = SS(EH, uH), WH = null === (BH = EH[uH]) || void 0 === BH ? void 0 : BH.items, MH = null !== QH, [xH, vH] = (0, AH.useState)({}), [PH, TH] = (0, AH.useState)([]), [UH, VH] = (0, AH.useState)(!1), [OH, bH] = (0, AH.useState)(null), [, kH] = (0, AH.useState)(0), mH = (0, AH.useRef)(0), oH = (0, AH.useRef)({}), IH = (0, AH.useRef)({
        items: WH,
        pending: xH,
        shopInfo: EH,
        active: MH,
        canAfford: HH.canAfford,
        buy: HH.buy
      });
      IH.current = {
        items: WH,
        pending: xH,
        shopInfo: EH,
        active: MH,
        canAfford: HH.canAfford,
        buy: HH.buy
      };
      const fH = (0, AH.useCallback)((HH => {
        mH.current++;
        const BH = mH.current;
        TH((LH => [{
          id: BH,
          text: HH
        }, ...LH].slice(0, 8))), bH(BH)
      }), []);
      (0, AH.useEffect)((() => {
        if (null === OH) return;
        const HH = setTimeout((() => {
          bH(null)
        }), 3e3);
        return () => {
          clearTimeout(HH)
        }
      }), [OH]), (0, AH.useEffect)((() => {
        const BH = HH.message;
        if (!BH) return;
        const {
          shopInfo: LH,
          active: AH,
          items: rH
        } = IH.current, SH = null !== BH.categoryKey ? null !== SS(LH, BH.categoryKey) : AH;
        (SH || AH) && fH(BH.text), SH && vH((HH => sS(HH, (HH => {
          var BH, LH;
          return !dS.has(null === rH || void 0 === rH || null === (BH = rH[HH]) || void 0 === BH || null === (LH = BH.smp) || void 0 === LH ? void 0 : LH.kind)
        }))))
      }), [HH.message, fH]), (0, AH.useEffect)((() => {
        vH((HH => sS(HH, ((HH, BH) => WS(null === WH || void 0 === WH ? void 0 : WH[HH]) === BH.snapshot))))
      }), [EH, WH]);
      const lH = Object.keys(xH).length > 0;
      (0, AH.useEffect)((() => {
        if (!lH) return;
        const HH = setInterval((() => {
          kH((HH => HH + 1));
          const HH = Date.now(),
            {
              pending: BH,
              items: LH
            } = IH.current,
            AH = Object.keys(BH).filter((LH => HH - BH[LH].at >= 12e3));
          if (0 === AH.length) return;
          const rH = AH.some((HH => {
            var AH, rH;
            return "search" !== (null === LH || void 0 === LH || null === (AH = LH[HH]) || void 0 === AH || null === (rH = AH.smp) || void 0 === rH ? void 0 : rH.kind) || BH[HH].resend
          }));
          for (const SH of AH) oH.current[SH] = HH;
          vH((HH => sS(HH, (HH => !AH.includes(HH))))), rH && fH(YH("smpShop:noAnswer"))
        }), 500);
        return () => {
          clearInterval(HH)
        }
      }), [lH]), (0, AH.useEffect)((() => {
        vH({})
      }), [uH]), (0, AH.useEffect)((() => {
        CH || VH(!1)
      }), [CH]);
      const KH = (0, AH.useCallback)((function(HH, BH) {
          let LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            items: AH,
            pending: rH,
            canAfford: SH,
            buy: hH
          } = IH.current, tH = null === AH || void 0 === AH ? void 0 : AH[HH];
          if (!tH || HH in rH || !1 === tH.canBuy) return !1;
          if (!SH(tH, (0, mr.c)(tH, BH))) return !1;
          hH(HH, tH, BH);
          const zH = {
            snapshot: WS(tH),
            at: Date.now(),
            resend: LH
          };
          return IH.current.pending = {
            ...IH.current.pending,
            [HH]: zH
          }, vH((BH => ({
            ...BH,
            [HH]: zH
          }))), !0
        }), []),
        cH = (0, AH.useMemo)((() => ({
          shopInfo: EH,
          categoryKey: uH,
          canAfford: HH.canAfford,
          isPending: HH => HH in xH,
          gaveUpAt: HH => {
            var BH;
            return null !== (BH = oH.current[HH]) && void 0 !== BH ? BH : 0
          },
          act: KH,
          notify: fH
        })), [EH, uH, HH.canAfford, xH, KH, fH]),
        eH = Math.min(...Object.values(xH).map((HH => HH.at))),
        qH = lH && Date.now() - eH > 1500,
        gH = PH.length > 1,
        NH = null !== (LH = null === (rH = EH[uH]) || void 0 === rH ? void 0 : rH.customTitle) && void 0 !== LH ? LH : uH,
        RH = null === (zH = EH[uH]) || void 0 === zH ? void 0 : zH.description;
      let jH = null;
      return "market" === QH ? jH = (0, XH.jsx)(qS, {}) : "sell" === QH ? jH = (0, XH.jsx)(RS, {}) : "collect" === QH ? jH = (0, XH.jsx)(nS, {}) : "orders" === QH ? jH = (0, XH.jsx)(wS, {}) : "myOrders" === QH && (jH = (0, XH.jsx)(ZS, {})), (0, XH.jsx)(MS.Provider, {
        value: cH,
        children: (0, XH.jsx)("div", {
          className: "SmpShopHost",
          hidden: !MH,
          children: (0, XH.jsxs)("div", {
            className: "SmpShop",
            children: [(0, XH.jsx)("header", {
              className: "SmpHeader",
              children: (0, XH.jsxs)("div", {
                className: "SmpHeaderTitle",
                children: [(0, XH.jsxs)("h2", {
                  children: [QH && (0, XH.jsx)(tH.c, {
                    name: aS[QH]
                  }), YH(NH)]
                }), RH && (0, XH.jsx)("p", {
                  children: (0, XH.jsx)(lr.b, {
                    text: RH
                  })
                })]
              })
            }), (0, XH.jsx)("main", {
              className: "SmpBody",
              "data-pad-initial-area": !0,
              children: CH && jH
            }), (0, XH.jsxs)("button", {
              type: "button",
              className: SH()("SmpStatus", {
                SmpStatusWaiting: lH,
                SmpStatusFresh: !lH && null !== OH,
                SmpStatusHasHistory: gH
              }),
              "aria-live": "polite",
              "aria-expanded": gH ? UH : void 0,
              onClick: () => {
                gH && VH((HH => !HH))
              },
              children: [lH ? (0, XH.jsxs)("span", {
                className: "SmpStatusText",
                children: [(0, XH.jsx)(pr, {}), YH(qH ? "smpShop:slowConnection" : "smpShop:waiting")]
              }) : PH[0] ? (0, XH.jsx)("span", {
                className: "SmpStatusText",
                children: (0, XH.jsx)(lr.b, {
                  text: PH[0].text
                })
              }, PH[0].id) : (0, XH.jsx)("span", {
                className: "SmpStatusText SmpMuted",
                children: YH("smpShop:ready")
              }), gH && (0, XH.jsx)("small", {
                children: YH("smpShop:recentMessages", {
                  count: PH.length
                })
              })]
            }), UH && gH && (0, XH.jsx)("div", {
              className: "SmpStatusHistory",
              children: PH.map((HH => (0, XH.jsx)("div", {
                children: (0, XH.jsx)(lr.b, {
                  text: HH.text
                })
              }, HH.id)))
            })]
          })
        })
      })
    }
    class iS {
      constructor(HH) {
        this.info = HH
      }
      static fromShopInfo(HH) {
        const BH = {};
        for (const LH in HH) {
          const AH = !0 === HH[LH].redDot && !0 !== HH[LH].forceRemoveRedDot;
          BH[LH] = {
            redDot: AH,
            items: {}
          };
          for (const rH in HH[LH].items) {
            const AH = HH[LH].items[rH],
              SH = !0 === AH.redDot && !0 !== AH.forceRemoveRedDot;
            BH[LH].items[rH] = {
              redDot: SH
            }
          }
        }
        return new iS(BH)
      }
      anyCategoryHasRedDots() {
        for (const HH in this.info)
          if (this.categoryHasRedDot(HH)) return !0;
        return !1
      }
      doesCategoryExist(HH) {
        return !(0, lL.M)(this.info[HH])
      }
      categoryHasRedDot(HH) {
        return !0 === this.info[HH].redDot
      }
      updateCategoryRedDot(HH, BH) {
        this.info[HH].redDot = BH
      }
      doesItemExist(HH, BH) {
        return this.doesCategoryExist(HH) && !(0, lL.M)(this.info[HH].items[BH])
      }
      itemHasRedDot(HH, BH) {
        return !0 === this.info[HH].items[BH].redDot
      }
      updateItemRedDot(HH, BH, LH) {
        this.info[HH].items[BH].redDot = LH
      }
      shallowCopy() {
        return new iS(this.info)
      }
    }

    function pS(HH, BH) {
      return `${HH}\x1f${BH}`
    }

    function yS(HH, BH) {
      return !(0, lL.M)(BH) && !(0, lL.M)(HH) && BH in HH
    }
    const Hh = (0, AH.memo)((function(HH) {
      var BH, LH;
      let {
        show: rH
      } = HH;
      const hH = (0, yB.c)("players", hh),
        tH = (0, yB.c)("players", th),
        EH = (0, Nr.e)(),
        [YH, uH] = (0, AH.useState)({
          shopInfo: {},
          userInputsPerItem: {},
          redDotInfo: iS.fromShopInfo({}),
          currencyAmounts: {},
          selectedCategoryKey: null,
          onBoughtInfo: null,
          awaitingPurchase: !1
        }),
        WH = (0, AH.useRef)(""),
        MH = (0, AH.useRef)(null),
        vH = (0, AH.useRef)(null),
        PH = (0, AH.useRef)(0),
        TH = (0, AH.useRef)(void 0),
        UH = (0, AH.useRef)(null),
        VH = (0, AH.useRef)(YH),
        bH = YH.redDotInfo.anyCategoryHasRedDots(),
        [kH, oH] = (0, AH.useState)(null),
        IH = (0, AH.useRef)(!1);
      let fH = !1,
        lH = 0,
        KH = 0;
      if (YH.currencyAmounts) {
        for (const HH in YH.currencyAmounts) {
          var cH;
          const BH = YH.currencyAmounts[HH];
          BH.hidden || (lH++, (null === (cH = BH.subtext) || void 0 === cH ? void 0 : cH.length) > 0 && KH++)
        }
        fH = lH + KH > 4
      }(0, AH.useEffect)((() => {
        KL.k.AX("showShopIconRedDot", bH, !0)
      }), [bH]), (0, AH.useEffect)((() => {
        xH.gameBridge.send("setShopOpen", rH), rH || (clearTimeout(TH.current), uH((HH => HH.awaitingPurchase ? {
          ...HH,
          awaitingPurchase: !1
        } : HH)))
      }), [rH]), (0, AH.useEffect)((() => () => {
        xH.gameBridge.send("setShopOpen", !1), clearTimeout(TH.current)
      }), []), (0, AH.useEffect)((() => {
        VH.current = YH
      }), [YH]), (0, AH.useEffect)((() => {
        if (null === kH) return;
        return (0, qr.e)("pointerdown", (HH => {
          const BH = HH.target;
          null !== BH && void 0 !== BH && BH.closest(".ShopItem") || oH(null)
        }))
      }), [kH]);
      const eH = HH => {
          uH((BH => ({
            ...BH,
            ...HH
          })))
        },
        qH = HH => {
          var BH;
          clearTimeout(null === (BH = YH.onBoughtInfo) || void 0 === BH ? void 0 : BH.timeout);
          const LH = setTimeout((() => {
            eH({
              onBoughtInfo: null
            })
          }), 3e3);
          WH.current = HH, eH({
            onBoughtInfo: {
              text: HH,
              timeout: LH,
              categoryKey: MH.current
            }
          })
        },
        NH = HH => {
          const {
            shopInfo: BH,
            userInputsPerItem: LH,
            redDotInfo: AH,
            autoSelectCategory: SH
          } = function(HH, BH, LH, AH, rH, SH) {
            if ((0, lL.M)(HH) || 0 === Object.keys(HH).length) return {
              shopInfo: {},
              userInputsPerItem: {},
              redDotInfo: iS.fromShopInfo({}),
              autoSelectCategory: null
            };
            const hH = mH.siteUsedData[mH.siteUsed].adConfig.showRewardedAds,
              tH = {};
            let zH = null;
            for (const WH in HH) {
              const BH = HH[WH],
                LH = {};
              let AH = !1;
              for (const HH in BH.items) {
                const rH = BH.items[HH];
                (0, mr.i)(rH, hH) && (LH[HH] = rH, AH = !0)
              }
              AH && (tH[WH] = {
                ...BH,
                items: LH
              }, !0 === BH.autoSelectCategory && (zH = WH))
            }
            const CH = {},
              EH = (HH, BH, AH, hH) => {
                var tH, zH;
                const EH = pS(HH, BH),
                  XH = null !== (tH = LH[EH]) && void 0 !== tH ? tH : LH[BH];
                if (null !== (zH = hH.userInput) && void 0 !== zH && zH.type) switch (hH.userInput.type) {
                  case "dropdown": {
                    var GH;
                    const HH = !XH || !hH.userInput.dropdownOptions.some((HH => (0, mr.f)(HH) === XH)),
                      BH = hH.userInput.shouldResetSelectionOnOptionsChange && ("dropdown" !== (null === AH || void 0 === AH || null === (GH = AH.userInput) || void 0 === GH ? void 0 : GH.type) || JSON.stringify(AH.userInput.dropdownOptions) !== JSON.stringify(hH.userInput.dropdownOptions)),
                      LH = hH.userInput,
                      rH = !(0, lL.M)(LH.initialValue) && LH.dropdownOptions.some((HH => (0, mr.f)(HH) === LH.initialValue));
                    var YH;
                    return void(HH || BH ? rH ? CH[EH] = null !== (YH = hH.userInput.initialValue) && void 0 !== YH ? YH : null : hH.userInput.dropdownOptions.length > 0 ? CH[EH] = (0, mr.f)(hH.userInput.dropdownOptions[0]) : CH[EH] = null : CH[EH] = XH)
                  }
                  case "text":
                  case "number":
                    var uH, QH, WH;
                    return void((null === AH || void 0 === AH ? void 0 : AH.userInput) !== hH.userInput ? CH[EH] = null !== (uH = null !== (QH = hH.userInput.initialValue) && void 0 !== QH ? QH : XH) && void 0 !== uH ? uH : "" : CH[EH] = null !== (WH = null !== XH && void 0 !== XH ? XH : hH.userInput.initialValue) && void 0 !== WH ? WH : "");
                  case "color":
                    var MH, xH, vH;
                    return void((null === AH || void 0 === AH ? void 0 : AH.userInput) !== hH.userInput ? CH[EH] = null !== (MH = null !== (xH = hH.userInput.initialValue) && void 0 !== xH ? xH : XH) && void 0 !== MH ? MH : "#000000" : CH[EH] = null !== (vH = null !== XH && void 0 !== XH ? XH : hH.userInput.initialValue) && void 0 !== vH ? vH : "#000000");
                  case "player": {
                    const HH = (0, mr.g)(rH, SH, hH.userInput);
                    return void(XH && HH.includes(XH) ? CH[EH] = XH : CH[EH] = HH.length > 0 ? HH[0] : null)
                  }
                }
              };
            for (const WH in tH)
              for (const HH in tH[WH].items) {
                var XH;
                const LH = tH[WH].items[HH];
                EH(WH, HH, null === (XH = BH[WH]) || void 0 === XH ? void 0 : XH.items[HH], LH)
              }
            const GH = iS.fromShopInfo(tH);
            for (const WH in tH) {
              var YH;
              if (AH.doesCategoryExist(WH)) {
                (null === (YH = BH[WH]) || void 0 === YH ? void 0 : YH.redDot) === tH[WH].redDot && GH.updateCategoryRedDot(WH, AH.categoryHasRedDot(WH));
                for (const HH in tH[WH].items) {
                  var uH, QH;
                  AH.doesItemExist(WH, HH) && (null === (uH = BH[WH]) || void 0 === uH || null === (QH = uH.items[HH]) || void 0 === QH ? void 0 : QH.redDot) === tH[WH].items[HH].redDot && GH.updateItemRedDot(WH, HH, AH.itemHasRedDot(WH, HH))
                }
              }
            }
            return {
              shopInfo: tH,
              userInputsPerItem: CH,
              redDotInfo: GH,
              autoSelectCategory: zH
            }
          }(HH, YH.shopInfo, YH.userInputsPerItem, YH.redDotInfo, hH, tH), zH = {
            shopInfo: BH,
            userInputsPerItem: LH,
            redDotInfo: AH
          };
          if (null === SH || rH)
            if (BH[YH.selectedCategoryKey]) zH.selectedCategoryKey = YH.selectedCategoryKey;
            else {
              const HH = jr(BH);
              zH.selectedCategoryKey = HH.length > 0 ? HH[0] : null
            }
          else zH.selectedCategoryKey = SH;
          return 0 === Object.keys(BH).length && rH && OH.c.set({
            openEverythingMenuName: null
          }), zH
        },
        RH = (HH, BH, LH) => {
          const AH = YH.selectedCategoryKey,
            rH = pS(AH, HH),
            SH = null !== LH && void 0 !== LH ? LH : YH.userInputsPerItem[rH],
            hH = {
              categoryKey: AH,
              itemKey: HH,
              userInput: SH
            };
          if (MH.current = AH, BH.isRewardedAd) {
            if (Date.now() - PH.current < 5e3) return;
            (0, IB.$)((() => {
              var LH, AH, SH;
              console.log("bought rewarded ad");
              const tH = hH.categoryKey ? null === (LH = VH.current.shopInfo[hH.categoryKey]) || void 0 === LH ? void 0 : LH.items[HH] : null;
              if (!tH || !tH.isRewardedAd) return void console.warn("Shop item no longer valid or a rewarded ad, early out");
              (null === (AH = BH.userInput) || void 0 === AH ? void 0 : AH.type) === (null === tH || void 0 === tH || null === (SH = tH.userInput) || void 0 === SH ? void 0 : SH.type) ? (hH.userInput = VH.current.userInputsPerItem[rH], xH.gameBridge.send("buyShopItem", hH), BH.onBoughtMessage && qH(BH.onBoughtMessage)) : console.warn("Shop item input type changed, early out")
            })), PH.current = Date.now()
          } else {
            xH.gameBridge.send("buyShopItem", hH), eH({
              awaitingPurchase: !0
            }), clearTimeout(TH.current), TH.current = setTimeout((() => {
              UH.current = null, eH({
                awaitingPurchase: !1
              })
            }), 1e3);
            const HH = (0, mr.c)(BH, SH);
            if (UH.current = null, !isNaN(HH) && yS(YH.currencyAmounts, BH.currency)) {
              0 !== HH && (UH.current = {
                currency: BH.currency,
                amountBefore: YH.currencyAmounts[BH.currency].amount
              });
              const LH = {
                ...YH.currencyAmounts
              };
              LH[BH.currency].amount -= HH, eH({
                currencyAmounts: LH
              })
            }
            BH.onBoughtMessage && qH(BH.onBoughtMessage)
          }
        },
        jH = (HH, BH) => {
          if (null === BH || !HH.shopInfo[BH]) return HH;
          let LH = HH.redDotInfo;
          return LH.categoryHasRedDot(BH) && (LH.updateCategoryRedDot(BH, !1), LH = LH.shallowCopy()), {
            ...HH,
            selectedCategoryKey: BH,
            redDotInfo: LH
          }
        },
        nH = HH => {
          uH((BH => jH(BH, HH)))
        };
      (0, tL.d)(gr.n, (() => {
        uH((HH => {
          const BH = (0, gr.p)(jr(HH.shopInfo), HH.selectedCategoryKey, (BH => (0, gr.l)(HH.shopInfo[BH].items)));
          return BH === HH.selectedCategoryKey ? HH : jH(HH, BH)
        }))
      })), (0, tL.d)("showShopFromServer", (HH => {
        let {
          toggle: BH,
          qS: LH
        } = HH;
        LH && nH(LH), 0 === Object.keys(YH.shopInfo).length || BH && rH ? OH.c.set({
          openEverythingMenuName: null
        }) : OH.c.set({
          openEverythingMenuName: fB.o.SHOP
        })
      })), (0, tL.d)("closeShopOnDamaged", (() => {
        rH && OH.c.set({
          openEverythingMenuName: null
        })
      })), (0, tL.d)("overShopInfo", (HH => {
        qH(HH)
      })), (0, QH.f)("currencyAmounts", (HH => {
        var BH;
        const LH = UH.current;
        LH && (null === HH || void 0 === HH || null === (BH = HH[LH.currency]) || void 0 === BH ? void 0 : BH.amount) === LH.amountBefore ? eH({
          currencyAmounts: HH
        }) : (UH.current = null, eH({
          currencyAmounts: HH,
          awaitingPurchase: !1
        }))
      })), (0, QH.f)("shopInfo", (HH => {
        eH({
          ...NH(HH),
          awaitingPurchase: !1
        })
      }));
      const FH = (0, AH.useRef)({
        playerIds: hH,
        localPlayerId: tH
      });
      (0, AH.useEffect)((() => {
        FH.current.playerIds === hH && FH.current.localPlayerId === tH || (FH.current = {
          playerIds: hH,
          localPlayerId: tH
        }, uH((HH => {
          const BH = NH(HH.shopInfo);
          return {
            ...HH,
            ...BH
          }
        })))
      }), [hH, tH]);
      const DH = YH.selectedCategoryKey,
        wH = (HH, BH) => {
          var LH, AH;
          return (isNaN(BH) || (0, lL.M)(HH.currency) || yS(YH.currencyAmounts, HH.currency) && BH <= YH.currencyAmounts[HH.currency].amount) && (null === (LH = HH.canBuy) || void 0 === LH || LH) && !(null !== (AH = HH.hidden) && void 0 !== AH && AH)
        },
        ZH = (HH, BH) => {
          var LH, AH, rH;
          const hH = pS(DH, HH),
            tH = YH.shopInfo[DH].items[HH],
            EH = YH.userInputsPerItem[hH],
            GH = (0, mr.c)(tH, EH),
            uH = wH(tH, GH),
            QH = tH.enchant,
            WH = QH ? (0, gH.pb)(null !== (LH = tH.customTitle) && void 0 !== LH ? LH : HH, {
              colour: gH.lb[QH.tier]
            }) : null !== (AH = tH.customTitle) && void 0 !== AH ? AH : HH,
            MH = BH => {
              const LH = null !== BH && void 0 !== BH ? BH : EH,
                AH = void 0 !== BH ? (0, mr.c)(tH, BH) : GH;
              wH(tH, AH) && null !== LH && RH(HH, tH, BH);
              let rH = YH.redDotInfo;
              rH.itemHasRedDot(DH, HH) && (rH.updateItemRedDot(DH, HH, !1), rH = rH.shallowCopy()), eH({
                redDotInfo: rH
              })
            };
          return (0, XH.jsxs)("div", {
            className: SH()("ShopItem", {
              ShopItemNoInput: !tH.userInput,
              ShopItemNoInputCanBuy: !tH.userInput && uH,
              ShopItemNoInputSelected: tH.isSelected,
              ShopItemEnchant: !!QH
            }),
            "data-pad-focusable": !tH.userInput || void 0,
            "data-pad-unavailable": !tH.userInput && !uH || void 0,
            "data-pad-repeat": null !== (rH = (0, gr.e)(tH)) && void 0 !== rH ? rH : void 0,
            "data-pad-repeat-wait": YH.awaitingPurchase || void 0,
            onClick: () => {
              if (QH && IH.current) {
                if (kH !== hH) return void oH(hH);
                oH(null)
              }
              tH.userInput || MH()
            },
            onPointerDown: HH => {
              QH && (IH.current = (0, Ir.p)(HH))
            },
            onPointerEnter: HH => {
              QH && !(0, Ir.p)(HH) && oH(hH)
            },
            onPointerLeave: HH => {
              QH && !(0, Ir.p)(HH) && oH((HH => HH === hH ? null : HH))
            },
            style: {
              zIndex: Object.keys(YH.shopInfo[DH].items).length - BH
            },
            children: [YH.redDotInfo.itemHasRedDot(DH, HH) && (0, XH.jsx)(zH.b, {
              top: "-6px",
              right: "-6px"
            }), tH.badge && (0, XH.jsx)("div", {
              className: "ShopBadgeContainer",
              children: (0, XH.jsx)("div", {
                className: SH()("ShopBadgeMain", tH.badge.type),
                children: (0, XH.jsx)(lr.b, {
                  text: tH.badge.text
                })
              })
            }), (0, XH.jsx)("div", {
              className: "ShopItemLeft",
              children: tH.image && (0, XH.jsx)(Bh, {
                item: tH,
                minWidth: 5,
                minHeight: 4.8
              })
            }), (0, XH.jsxs)("div", {
              className: "ShopItemRight",
              children: [(0, XH.jsxs)("div", {
                className: "ShopItemHeader",
                children: [(0, XH.jsx)("div", {
                  className: "ShopItemHeaderTitle",
                  children: (0, XH.jsx)(lr.b, {
                    text: WH
                  })
                }), (0, XH.jsx)("div", {
                  className: "ShopItemHeaderDescription",
                  children: (0, XH.jsx)(lr.b, {
                    text: tH.description
                  })
                })]
              }), tH.userInput && (0, XH.jsxs)("div", {
                className: "ShopItemInputsContainer",
                onClick: HH => {
                  HH.stopPropagation()
                },
                children: [(0, XH.jsx)(rh, {
                  item: tH,
                  currInput: EH,
                  updateInput: BH => {
                    ((HH, BH, LH) => {
                      const AH = pS(HH, BH),
                        rH = {
                          ...YH.userInputsPerItem
                        };
                      rH[AH] = LH, eH({
                        userInputsPerItem: rH
                      })
                    })(DH, HH, BH)
                  },
                  onSubmit: HH => {
                    MH(HH)
                  }
                }), ("dropdown" !== tH.userInput.type || !tH.userInput.autoSubmit) && (0, XH.jsx)(CH.i, {
                  className: "ItemCostButton",
                  disabled: !uH && null !== EH,
                  onClick: () => {
                    MH()
                  },
                  children: (0, XH.jsx)(Ah, {
                    item: tH,
                    cost: GH,
                    currencyAmounts: YH.currencyAmounts
                  })
                })]
              })]
            }), !tH.userInput && (0, XH.jsx)("div", {
              className: "ShopItemNoInputCost",
              children: (0, XH.jsx)(Ah, {
                item: tH,
                cost: GH,
                currencyAmounts: YH.currencyAmounts
              })
            }), QH && kH === hH && (0, XH.jsxs)("div", {
              className: "ShopItemEnchantInfo SmallTextBold",
              children: [(0, XH.jsx)(lr.b, {
                text: WH
              }), (0, XH.jsx)("div", {
                className: "ShopItemEnchantInfoDescription",
                children: (0, XH.jsx)(lr.b, {
                  text: (0, or.d)("", QH.enchantments, QH.enchantmentData)
                })
              })]
            })]
          }, hH)
        },
        dH = function(HH) {
          for (const BH in HH)
            if (HH[BH].smp) return !0;
          return !1
        }(YH.shopInfo),
        aH = SS(YH.shopInfo, DH);
      return (0, XH.jsx)(Or.d, {
        className: "Menu ShopBody",
        show: rH,
        children: 0 !== Object.keys(YH.shopInfo).length && (0, XH.jsxs)(XH.Fragment, {
          children: [(0, XH.jsxs)("div", {
            className: "MenuSideBar",
            children: [(0, XH.jsx)(GH, {
              items: jr(YH.shopInfo).map((HH => {
                var BH;
                return {
                  id: HH,
                  title: null !== (BH = YH.shopInfo[HH].customTitle) && void 0 !== BH ? BH : HH,
                  redDot: YH.redDotInfo.categoryHasRedDot(HH)
                }
              })),
              link: EH ? {
                faIcon: "users-gear",
                title: "lobbyManageEntry:manageLobby",
                onClick: () => {
                  (0, Rr.f)({
                    page: (0, Rr.b)(),
                    source: "shop"
                  })
                }
              } : void 0,
              selectedItemId: DH,
              onClick: nH,
              padStartsOnTab: (0, gr.i)(DH)
            }), (0, XH.jsx)("div", {
              className: "MenuSideBarFooter",
              children: YH.currencyAmounts && Object.keys(YH.currencyAmounts).map((HH => {
                var BH;
                const LH = YH.currencyAmounts[HH];
                return LH.hidden ? null : (0, XH.jsxs)("div", {
                  className: "ShopCurrencyDiv " + (fH ? "SmallText" : ""),
                  children: [(0, XH.jsxs)("div", {
                    className: "ShopCurrencyDetails",
                    children: [(0, XH.jsx)("div", {
                      className: "ShopCurrencyAmtIcon",
                      style: {
                        color: LH.iconColour
                      },
                      children: (0, XH.jsx)(zh, {
                        iconName: LH.icon
                      })
                    }), "\xa0", (0, kr.c)(LH.amount, 6)]
                  }), (null === (BH = LH.subtext) || void 0 === BH ? void 0 : BH.length) > 0 && (0, XH.jsx)("div", {
                    className: "ShopCurrencySubtext",
                    children: (0, XH.jsx)(lr.b, {
                      text: LH.subtext
                    })
                  })]
                }, HH)
              }))
            })]
          }), (0, XH.jsxs)("div", {
            className: "MenuBody ShopMenuBody",
            children: [dH && (0, XH.jsx)(JS, {
              show: rH,
              shopInfo: YH.shopInfo,
              selectedCategoryKey: DH,
              buy: (HH, BH, LH) => {
                RH(HH, BH, LH)
              },
              canAfford: wH,
              message: YH.onBoughtInfo
            }), null === aH && (0, XH.jsxs)(XH.Fragment, {
              children: [(0, XH.jsx)("div", {
                className: SH()("ShopOnBoughtInfo", {
                  ShopOnBoughtInfoShow: null !== YH.onBoughtInfo
                }),
                children: (0, XH.jsx)(lr.b, {
                  text: WH.current
                })
              }), (0, XH.jsx)("div", {
                className: "ShopItemsWrapper",
                children: (0, XH.jsxs)("div", {
                  className: "ShopItemsInner",
                  children: [(null === (BH = YH.shopInfo[DH]) || void 0 === BH ? void 0 : BH.description) && (0, XH.jsx)("div", {
                    className: "ShopCategoryDescription",
                    children: (0, XH.jsx)(lr.b, {
                      text: YH.shopInfo[DH].description
                    })
                  }), rH && (0, XH.jsx)("div", {
                    className: "ShopItems",
                    ref: vH,
                    "data-pad-initial-area": !0,
                    children: jr(null === (LH = YH.shopInfo[DH]) || void 0 === LH ? void 0 : LH.items).map(((HH, BH) => ZH(HH, BH)))
                  })]
                })
              })]
            })]
          })]
        })
      })
    }));

    function Bh(HH) {
      let {
        item: BH,
        minWidth: LH,
        minHeight: AH
      } = HH;
      const {
        image: rH,
        schematicId: SH,
        imageColour: hH
      } = BH;
      if (SH) return (0, XH.jsx)("div", {
        className: "ShopSchematic",
        style: {
          width: `${LH}rem`,
          height: `${AH}rem`
        },
        children: (0, XH.jsx)(Kr.b, {
          game: {
            schematicId: SH
          }
        })
      });
      var zH, CH;
      if ((0, fr.f)(rH)) return (0, XH.jsx)("div", {
        className: "ShopBlock",
        style: {
          minWidth: `${LH}rem`,
          height: "0",
          minHeight: `${AH}rem`
        },
        children: (0, XH.jsx)(fr.e, {
          itemName: rH,
          amount: null !== (zH = BH.amount) && void 0 !== zH ? zH : 0,
          amountFontSize: AH / 4 + "rem",
          enchantmentTier: null === (CH = BH.enchant) || void 0 === CH ? void 0 : CH.tier
        })
      });
      const EH = rH.slice(-4);
      return ".jpg" === EH || ".png" === EH ? (0, XH.jsx)(Lh, {
        image: rH,
        minWidth: LH
      }) : (0, XH.jsx)(tH.c, {
        name: rH,
        className: "SelectedItemImage",
        style: {
          color: hH
        }
      })
    }

    function Lh(HH) {
      let {
        image: BH,
        minWidth: LH
      } = HH;
      const {
        gameNameWithVariation: AH
      } = (0, yB.e)("connectedGame"), rH = BH.endsWith(".jpg");
      return (0, XH.jsx)("img", {
        className: SH()({
          ShopPixelImage: !rH
        }),
        style: {
          width: `${rH?1.6*LH:LH}rem`,
          height: "auto",
          fontSize: "1.25rem"
        },
        src: `/textures/games/${(0,gH.Wb)(AH)}/${BH}`,
        alt: BH,
        draggable: !1
      })
    }

    function Ah(HH) {
      let {
        item: BH,
        cost: LH,
        currencyAmounts: AH
      } = HH;
      const rH = !isNaN(LH) && 0 !== LH && yS(AH, BH.currency);
      let SH = null;
      return BH.buyButtonText ? SH = BH.buyButtonText : rH ? (SH = LH, BH.sell && (SH = -1 * LH), SH = SH.toString()) : 0 === LH ? SH = "Free" : BH.isRewardedAd && (SH = "Watch ad"), (0, lL.M)(SH) || " " === SH ? null : (0, XH.jsxs)("div", {
        className: "BuyItemCostAndIcon",
        children: [rH && (0, XH.jsx)("div", {
          style: {
            color: AH[BH.currency].iconColour
          },
          className: "BuyItemIcon",
          children: (0, XH.jsx)(zh, {
            iconName: AH[BH.currency].icon
          })
        }), (0, XH.jsx)("div", {
          className: "BuyItemCost",
          children: (0, XH.jsx)(lr.b, {
            text: SH
          })
        })]
      })
    }

    function rh(HH) {
      let {
        item: BH,
        currInput: LH,
        updateInput: rH,
        onSubmit: SH
      } = HH;
      const {
        t: tH
      } = (0, hH.B)(), zH = (0, AH.useRef)(null);
      if ((0, AH.useEffect)((() => {
          const HH = zH.current;
          HH && HH.value !== LH && document.activeElement !== HH && (HH.value = null !== LH && void 0 !== LH ? LH : "")
        }), [LH]), !BH.userInput) return null;
      let CH = BH.userInput;
      if (MH.featureFlags.sanitizeShopInput && "text" === BH.userInput.type && (CH = {
          type: "number",
          placeholderText: "Numbers Only"
        }), "text" === CH.type || "number" === CH.type) {
        var EH, GH;
        console.assert(void 0 !== LH, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(BH)}`);
        const HH = "text" === CH.type && CH.wordCharsOnly;
        return (0, XH.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputTextWrapper",
          children: (0, XH.jsx)(TH.e, {
            className: "ShopItemUserInputText",
            placeholderText: tH(CH.placeholderText),
            defaultValue: LH,
            domRef: zH,
            onValueChange: (BH, LH) => {
              !0 === HH && (BH = (0, er.hb)(BH)), zH.current.value = BH, rH(BH)
            },
            onEnter: SH,
            type: CH.type
          }, (null !== (EH = CH.initialValue) && void 0 !== EH ? EH : "") + (null !== (GH = CH.placeholderText) && void 0 !== GH ? GH : ""))
        })
      }
      if ("dropdown" === CH.type) {
        console.assert(void 0 !== LH, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(BH)}`);
        const HH = CH.autoSubmit;
        return (0, XH.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputDropdown",
          children: (0, XH.jsx)(iB.b, {
            options: CH.dropdownOptions.map((HH => (0, mr.f)(HH))),
            value: LH,
            onChange: BH => {
              let {
                value: LH
              } = BH;
              rH(LH), HH && SH(LH)
            }
          })
        })
      }
      return "player" === CH.type ? (0, XH.jsx)(Sh, {
        userInput: CH,
        currInput: LH,
        updateInput: rH
      }) : "color" === CH.type ? (0, XH.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputColor",
        children: (0, XH.jsx)("input", {
          type: "color",
          value: LH,
          onChange: HH => {
            rH(HH.target.value)
          }
        })
      }) : null
    }

    function Sh(HH) {
      let {
        userInput: BH,
        currInput: LH,
        updateInput: AH
      } = HH;
      const rH = (0, yB.e)("players"),
        SH = (0, yB.e)("hiddenPlayerNames"),
        hH = (0, mr.g)(rH.ids, rH.localId, BH);
      return (0, XH.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputDropdown",
        children: (0, XH.jsx)(iB.b, {
          options: hH.map((HH => {
            const {
              name: BH
            } = rH.byId[HH];
            return {
              value: HH,
              label: null === BH ? "" : (0, cr.f)(BH, SH)
            }
          })),
          value: LH,
          onChange: HH => {
            let {
              value: BH
            } = HH;
            AH(BH)
          }
        })
      })
    }

    function hh(HH) {
      let {
        ids: BH
      } = HH;
      return BH
    }

    function th(HH) {
      let {
        localId: BH
      } = HH;
      return BH
    }

    function zh(HH) {
      let {
        iconName: BH
      } = HH;
      return xH.gameBridge.lookup("isItemName", BH) ? (0, XH.jsx)(fr.e, {
        itemName: BH,
        amount: 1
      }) : (0, XH.jsx)(tH.c, {
        name: BH,
        className: "2x"
      })
    }
    var Ch = LH(1659);
    const Eh = (0, LH(1405).e)((HH => HH.PadLobbyShortcuts)),
      Xh = (0, AH.lazy)((() => Promise.resolve().then((() => LH(5069))).then((HH => ({
        default: HH.Lobbyleaderboard
      }))))),
      Gh = (0, AH.lazy)((() => LH.e(246).then((() => LH(42383))).then((HH => ({
        default: HH.LobbyManageView
      })))));

    function Yh(HH) {
      let {
        show: BH
      } = HH;
      return BH ? (0, XH.jsx)(uh, {}) : null
    }

    function uh() {
      const HH = (0, Nr.e)();
      return (0, XH.jsxs)(XH.Fragment, {
        children: [(0, XH.jsx)(Eh, {}), (0, XH.jsxs)(AH.Suspense, {
          fallback: (0, XH.jsx)("div", {
            className: "CharacterCustomisationLoading",
            children: (0, XH.jsx)(UH.d, {})
          }),
          children: [HH && (0, XH.jsx)(Gh, {
            leaderboard: (0, XH.jsx)(Xh, {})
          }), !HH && (0, XH.jsx)(Xh, {})]
        })]
      })
    }
    var Qh = LH(1556),
      Wh = LH(2495),
      Mh = LH(1789),
      xh = LH(3376),
      vh = LH(2930),
      Ph = LH(1497),
      Th = LH(1457),
      Uh = LH(3319),
      Vh = LH(3331),
      Oh = LH(2476);
    const bh = "storeRecentGiftRecipients",
      kh = new Map;

    function mh() {
      try {
        const HH = WL.e.getItem(bh);
        return Array.isArray(HH) ? HH.filter((HH => "string" === typeof(null === HH || void 0 === HH ? void 0 : HH.name) && HH.name.length > 0)).map((HH => ({
          name: HH.name,
          cosmetics: HH.cosmetics && "object" === typeof HH.cosmetics ? HH.cosmetics : null
        }))) : []
      } catch {
        return []
      }
    }

    function oh(HH, BH) {
      var LH;
      const [rH, SH] = (0, AH.useState)(""), [hH, tH] = (0, AH.useState)("search"), [zH, CH] = (0, AH.useState)(null), [EH, XH] = (0, AH.useState)(null), GH = (0, AH.useRef)(null), YH = (0, AH.useRef)(null);
      (0, AH.useEffect)((() => () => {
        GH.current && clearTimeout(GH.current)
      }), []), (0, AH.useEffect)((() => {
        BH || WH()
      }), [BH]);
      const uH = null !== (LH = null === zH || void 0 === zH ? void 0 : zH.name) && void 0 !== LH ? LH : null;

      function QH() {
        GH.current && (clearTimeout(GH.current), GH.current = null)
      }

      function WH() {
        QH(), SH(""), tH("search"), CH(null)
      }(0, AH.useEffect)((() => {
        if (null === uH || HH === oH.NULL_USER_CONTEXT) return;
        const BH = uH.toLowerCase();
        if (BH === HH.getPlayerName().toLowerCase()) return void XH({
          name: uH,
          result: {
            giftRecipientFound: !1,
            giftRecipientError: "store:giftRecipientIsYou"
          }
        });
        const LH = kh.get(BH);
        if (LH) return void XH({
          name: uH,
          result: LH
        });
        let AH = !1;
        return async function(HH, BH) {
          try {
            const LH = await (0, oH.postJsonWithMetricsCookiesAndJsonResponse)(`${oB.clientSideServerUrls.indexUrl}/index/store/gift-recipient`, {
              giftRecipientName: BH
            }, {
              retries: 1
            }, HH.getMetricsCookies());
            if ("boolean" !== typeof(null === LH || void 0 === LH ? void 0 : LH.giftRecipientFound)) throw new Error(`Unexpected gift recipient lookup response: ${JSON.stringify(LH)}`);
            return LH
          } catch (LH) {
            return console.error("Failed to look up gift recipient:", LH), {
              giftRecipientFound: !1,
              giftRecipientError: "store:giftRecipientLookupFailed"
            }
          }
        }(HH, uH).catch((HH => (console.error("Gift recipient lookup failed:", HH), {
          giftRecipientFound: !1,
          giftRecipientError: "store:giftRecipientLookupFailed"
        }))).then((HH => {
          !0 !== HH.giftRecipientFound && "store:giftRecipientLookupFailed" === HH.giftRecipientError || kh.set(BH, HH), AH || XH({
            name: uH,
            result: HH
          })
        })), () => {
          AH = !0
        }
      }), [uH, HH]);
      const MH = (0, AH.useMemo)((() => {
        const HH = rH.trim();
        if (!HH) return {
          status: "none"
        };
        if (!zH || zH.name !== HH || (null === EH || void 0 === EH ? void 0 : EH.name) !== zH.name) return {
          status: "pending",
          name: HH
        };
        const BH = EH.result;
        return !1 === BH.giftRecipientFound ? {
          status: "error",
          name: zH.name,
          error: BH.giftRecipientError
        } : {
          status: "found",
          name: BH.giftRecipientName,
          ownedPacks: BH.giftRecipientOwnedPacks,
          hasSuperRank: BH.giftRecipientHasSuperRank,
          isSubscriber: BH.giftRecipientIsSubscriber
        }
      }), [rH, zH, EH]);
      (0, AH.useEffect)((() => {
        "found" === MH.status && "typed" === (null === zH || void 0 === zH ? void 0 : zH.source) && YH.current !== MH.name && (YH.current = MH.name, (0, WB.reportAnalyticsClick)({
          id: "store.gift_recipient",
          value: "typed"
        }))
      }), [MH, zH]);
      const xH = (null === EH || void 0 === EH ? void 0 : EH.name) === (null === zH || void 0 === zH ? void 0 : zH.name) ? null === EH || void 0 === EH ? void 0 : EH.result : null,
        vH = !0 === (null === xH || void 0 === xH ? void 0 : xH.giftRecipientFound) ? xH.giftRecipientCosmetics : null;
      return {
        query: rH,
        via: hH,
        recipient: MH,
        recipientCosmetics: vH,
        type: function(HH) {
          SH(HH), tH("search"), QH();
          const BH = HH.trim();
          BH ? GH.current = setTimeout((() => {
            CH({
              name: BH,
              source: "typed"
            })
          }), 400) : CH(null)
        },
        choose: function(HH, BH) {
          QH(), SH(HH), tH("typed" === BH ? "search" : "prefilled" === BH ? "prefilled" : "suggestion"), CH({
            name: HH,
            source: BH
          }), "typed" !== BH && "prefilled" !== BH && (0, WB.reportAnalyticsClick)({
            id: "store.gift_recipient",
            value: BH
          })
        },
        clear: WH,
        recordGift: function(HH, BH) {
          ! function(HH) {
            kh.delete(HH.toLowerCase())
          }(HH), XH((LH => {
            if (!LH || LH.name.toLowerCase() !== HH.toLowerCase() || !0 !== LH.result.giftRecipientFound || "superRank" === BH) return LH;
            const AH = LH.result.giftRecipientOwnedPacks;
            return {
              ...LH,
              result: {
                ...LH.result,
                giftRecipientOwnedPacks: AH.includes(BH) ? AH : [...AH, BH]
              }
            }
          }))
        }
      }
    }
    var Ih = LH(2469),
      fh = LH(5077),
      lh = LH(225),
      Kh = LH(3206);
    const ch = ["pointerdown", "pointermove", "keydown", "wheel", "touchstart", "scroll", "blur", "focus"];
    var eh = LH(2406),
      qh = LH(602),
      gh = LH(2530),
      Nh = LH(2833);

    function Rh(HH) {
      let {
        cosmetics: BH
      } = HH;
      return (0, XH.jsx)("span", {
        className: "StoreRecipientAvatar",
        children: (0, XH.jsx)(gh.c, {
          cosmetics: BH
        })
      })
    }

    function jh(HH, BH) {
      var LH, AH;
      const rH = null !== (LH = HH.friend) && void 0 !== LH ? LH : {
        isError: !1,
        name: HH.name,
        ranks: [],
        cosmetics: null !== (AH = HH.cosmetics) && void 0 !== AH ? AH : {},
        nameColour: qh.c,
        location: {
          status: "noGamePlayed"
        }
      };
      return BH ? {
        ...rH,
        cosmetics: BH
      } : rH
    }

    function nh(HH) {
      let {
        pending: BH
      } = HH;
      return (0, XH.jsx)("span", {
        className: "StoreRecipientLoader",
        children: BH && (0, XH.jsx)(UH.d, {})
      })
    }

    function Fh(HH) {
      var BH;
      let {
        selfName: LH,
        giftRecipient: rH,
        suggestionsVersion: zH,
        pulseSignal: EH,
        disabled: GH
      } = HH;
      const {
        t: YH
      } = (0, hH.B)(), uH = (0, aH.l)(), QH = (0, AH.useRef)(null), WH = (0, AH.useRef)(null), {
        query: xH,
        via: vH,
        recipient: PH,
        recipientCosmetics: UH
      } = rH, VH = (0, Oh.p)(xH), OH = (0, AH.useMemo)((() => {
        const HH = MH.featureFlags.useSocialFeatures ? uH.friends.filter((HH => !HH.isError)) : [];
        return (0, Oh.i)({
          onlineFriends: (0, aH.e)(HH),
          recentRecipients: mh(),
          friends: HH,
          selfName: LH,
          max: 8
        })
      }), [uH.friends, LH, zH]), bH = xH.trim().toLowerCase(), kH = "search" !== vH && bH ? OH.find((HH => HH.name.toLowerCase() === bH)) : void 0, mH = kH && "prefilled" === vH ? [kH, ...OH.filter((HH => HH !== kH))] : OH, oH = "" !== bH && !kH, IH = oH ? xH : "", fH = mH.length > 0;
      (0, AH.useEffect)((() => {
        QH.current && QH.current.value !== IH && (QH.current.value = IH)
      }), [IH]), (0, AH.useEffect)((() => {
        QH.current && (QH.current.disabled = GH)
      }), [GH, EH]);
      const lH = (0, AH.useRef)(0);

      function cH() {
        "self" !== VH && (0, WB.reportAnalyticsClick)({
          id: "store.mode",
          value: "self"
        }), rH.clear()
      }

      function eH(HH) {
        var BH, LH;
        if (GH) return;
        if (" " === HH.key || "Enter" === HH.key) return HH.preventDefault(), void HH.currentTarget.click();
        const AH = Array.from(null !== (BH = null === (LH = WH.current) || void 0 === LH ? void 0 : LH.querySelectorAll("[role=radio]")) && void 0 !== BH ? BH : []),
          rH = AH.indexOf(HH.currentTarget);
        let SH;
        "ArrowRight" === HH.key || "ArrowDown" === HH.key ? SH = AH[(rH + 1) % AH.length] : "ArrowLeft" === HH.key || "ArrowUp" === HH.key ? SH = AH[(rH - 1 + AH.length) % AH.length] : "Home" === HH.key ? SH = AH[0] : "End" === HH.key && (SH = AH[AH.length - 1]), SH && (HH.preventDefault(), SH.focus(), SH.click())
      }(0, AH.useEffect)((() => {
        var HH;
        EH > lH.current && !GH && (lH.current = EH, null === (HH = QH.current) || void 0 === HH || HH.focus())
      }), [EH, GH]);
      const qH = "self" === VH,
        gH = null !== (BH = null === kH || void 0 === kH ? void 0 : kH.name) && void 0 !== BH ? BH : null,
        NH = "error" === PH.status ? PH.error : null,
        RH = "store:giftRecipientLookupFailed" === NH;
      return (0, XH.jsxs)("div", {
        className: SH()("StoreRecipientStrip", {
          StoreRecipientStripDisabled: GH,
          StoreRecipientStripNoChips: !fH
        }),
        children: [(0, XH.jsx)("span", {
          className: "StoreRecipientLabel",
          "aria-hidden": !0,
          children: YH("store:buyingFor")
        }), (0, XH.jsxs)("div", {
          ref: WH,
          className: "StoreRecipientRadios",
          role: "radiogroup",
          "aria-label": YH("store:whoIsItFor"),
          children: [(0, XH.jsxs)("div", {
            role: "radio",
            "data-pad-focusable": !0,
            "aria-checked": qH,
            tabIndex: GH || !qH && null !== gH ? -1 : 0,
            className: SH()("StoreRecipientMe", {
              StoreRecipientChecked: qH
            }),
            onClick: () => {
              GH || cH()
            },
            onKeyDown: eH,
            children: [(0, XH.jsx)(tH.c, {
              name: "user"
            }), " ", YH("store:me")]
          }), fH && (0, XH.jsx)("div", {
            className: "StoreRecipientChips",
            children: mH.map((HH => {
              const BH = HH === kH;
              return (0, XH.jsx)("div", {
                role: "radio",
                "data-pad-focusable": !0,
                "aria-checked": BH,
                tabIndex: !GH && BH ? 0 : -1,
                title: HH.name,
                className: SH()("StoreRecipientChip", {
                  StoreRecipientChecked: BH
                }),
                onClick: () => {
                  GH || function(HH) {
                    "gift" !== VH && (0, WB.reportAnalyticsClick)({
                      id: "store.mode",
                      value: "gift"
                    }), rH.choose(HH.name, HH.kind)
                  }(HH)
                },
                onKeyDown: eH,
                children: (0, XH.jsx)(Nh.g, {
                  playerSocialPreview: jh(HH, BH ? UH : null),
                  opensProfileCard: !1,
                  isFriend: null !== HH.friend,
                  hideFriendBadge: !0,
                  showLocation: null !== HH.friend,
                  status: null === HH.friend ? null : void 0,
                  trailing: BH ? (0, XH.jsx)(nh, {
                    pending: "pending" === PH.status
                  }) : void 0
                })
              }, HH.name)
            }))
          })]
        }), (0, XH.jsxs)("div", {
          className: SH()("StoreRecipientSearch", {
            StoreRecipientChecked: oH,
            StoreRecipientSearchPulse: EH > 0 && !oH,
            StoreRecipientSearchError: null !== NH && !RH
          }),
          onClick: () => {
            var HH;
            null === (HH = QH.current) || void 0 === HH || HH.focus()
          },
          children: [oH && "found" === PH.status && UH && (0, XH.jsx)(Rh, {
            cosmetics: UH
          }), !(oH && "found" === PH.status && UH) && (0, XH.jsx)(tH.c, {
            name: "magnifying-glass",
            className: "StoreRecipientSearchIcon"
          }), (0, XH.jsx)(TH.e, {
            className: "StoreRecipientSearchInput",
            domRef: QH,
            placeholderText: YH("store:searchName"),
            defaultValue: IH,
            maxLength: KH.e,
            onValueChange: function(HH) {
              "gift" !== VH && HH.trim() && (0, WB.reportAnalyticsClick)({
                id: "store.mode",
                value: "gift"
              }), rH.type(HH)
            },
            onEnter: () => {
              var HH;
              const BH = null === (HH = QH.current) || void 0 === HH ? void 0 : HH.value.trim();
              BH && rH.choose(BH, "typed")
            },
            blurOnEnter: !0
          }), oH && (0, XH.jsx)(nh, {
            pending: "pending" === PH.status
          }), oH && (0, XH.jsx)("div", {
            ...(0, CH.db)({
              disabled: GH
            }),
            "aria-label": YH("store:clearRecipient"),
            title: YH("store:clearRecipient"),
            className: "StoreRecipientClear",
            onClick: HH => {
              HH.stopPropagation(), GH || cH()
            },
            children: (0, XH.jsx)(tH.c, {
              name: "xmark"
            })
          })]
        }, EH), NH && (0, XH.jsx)("div", {
          className: SH()("StoreRecipientPopover", {
            StoreRecipientPopoverSoft: RH
          }),
          role: "status",
          children: YH(NH)
        })]
      })
    }
    var Dh = LH(2337),
      wh = LH(2580),
      Zh = LH(2851),
      dh = LH(3919),
      ah = LH(2413),
      sh = LH(3442),
      Jh = LH(3450),
      ih = LH(3414);
    const ph = [qh.s.yellow, qh.s.green, qh.s.aqua, qh.s.blue, qh.s.purple, qh.s.red];

    function yh(HH) {
      return "needsRecipient" === HH || "lookingUp" === HH || "gift" === HH || "recipientOwns" === HH || "recipientSharesOwned" === HH || "recipientSubscribed" === HH
    }

    function Ht(HH) {
      const {
        onKeyDown: BH,
        ...LH
      } = (0, CH.db)();
      return {
        ...LH,
        "aria-label": HH,
        onKeyDown: HH => {
          HH.target === HH.currentTarget && (null === BH || void 0 === BH || BH(HH))
        }
      }
    }

    function Bt(HH) {
      let {
        text: BH
      } = HH;
      return (0, XH.jsx)("span", {
        className: "StoreRainbowText",
        children: Array.from(BH).map(((HH, BH) => (0, XH.jsx)("span", {
          style: {
            color: ph[BH % ph.length]
          },
          children: HH
        }, BH)))
      })
    }
    const Lt = {
      recipientOwns: "store:alreadyOwns",
      sharesOwned: "store:sharesOwned",
      recipientSharesOwned: "store:recipientSharesOwned",
      subscribed: "store:subscribed",
      recipientSubscribed: "store:recipientSubscribed"
    };

    function At(HH) {
      let {
        state: BH,
        item: LH,
        price: AH,
        busy: rH,
        highlight: zH = !1,
        secondary: EH = !1,
        onAct: GH,
        onNeedRecipient: YH,
        onLogin: uH
      } = HH;
      const {
        t: QH
      } = (0, hH.B)(), WH = "superRank" === LH ? (0, jH.v)(Date.now()).product.days : null, MH = "superRank" === LH && "hyper" === (0, jH.u)(Date.now()).look ? CH.B : CH.u, xH = EH ? CH.m : MH, vH = HH => null === WH ? QH(HH ? "general:gift" : "general:buy") : QH(HH ? "store:giftDays" : "store:buyDays", {
        days: WH
      }), PH = (HH, BH) => {
        const LH = (0, XH.jsxs)(XH.Fragment, {
          children: [null === HH && (0, XH.jsx)("span", {
            className: "StoreCtaLabel StoreCtaLabelPending"
          }), null !== HH && (0, XH.jsx)("span", {
            className: "StoreCtaLabel",
            title: HH,
            children: HH
          })]
        });
        return null !== WH ? (0, XH.jsxs)(XH.Fragment, {
          children: [BH && (0, XH.jsx)("span", {
            className: "StoreCtaIcon",
            children: BH
          }), LH, (0, XH.jsxs)("span", {
            className: "StoreCtaPrice",
            children: ["\xb7", (0, XH.jsx)(wh.e, {
              amount: AH
            })]
          })]
        }) : (0, XH.jsxs)(XH.Fragment, {
          children: [(0, XH.jsxs)("span", {
            className: "StoreCtaLead",
            children: [LH, "\xb7"]
          }), (0, XH.jsxs)("span", {
            className: "StoreCtaPrice",
            children: [BH, (0, XH.jsx)(wh.e, {
              amount: AH
            })]
          })]
        })
      };
      let TH;
      switch (BH) {
        case "pending":
          TH = (0, XH.jsx)(MH, {
            className: "StoreCtaButton",
            disabled: !0,
            children: PH(null)
          });
          break;
        case "login":
          TH = (0, XH.jsx)(xH, {
            className: "StoreCtaButton",
            onClick: uH,
            children: PH(vH(!1))
          });
          break;
        case "owned":
          TH = (0, XH.jsx)(CH.m, {
            className: "StoreCtaButton",
            onClick: () => {
              (0, Dh.e)("store")
            },
            children: (0, XH.jsxs)("span", {
              className: "StoreCtaLabel",
              children: [(0, XH.jsx)(tH.c, {
                name: "shirt"
              }), " ", QH("store:equip")]
            })
          });
          break;
        case "recipientOwns":
        case "sharesOwned":
        case "recipientSharesOwned":
        case "subscribed":
        case "recipientSubscribed":
          TH = (0, XH.jsx)(MH, {
            className: "StoreCtaButton",
            disabled: !0,
            children: (0, XH.jsx)("span", {
              className: "StoreCtaLabel",
              children: QH(Lt[BH])
            })
          });
          break;
        case "needsRecipient":
        case "lookingUp":
        case "gift":
          TH = (0, XH.jsx)(MH, {
            className: "StoreCtaButton",
            disabled: "needsRecipient" === BH || null === AH,
            loading: "lookingUp" === BH || rH,
            onClick: GH,
            analyticsClick: {
              id: "store.gift",
              value: LH
            },
            children: PH(vH(!0), Oh.d)
          });
          break;
        case "buy":
        case "recharge":
          TH = (0, XH.jsx)(xH, {
            className: "StoreCtaButton",
            loading: rH,
            disabled: null === AH,
            onClick: GH,
            analyticsClick: {
              id: "store.buy",
              value: LH
            },
            children: PH(vH(!1))
          })
      }
      return (0, XH.jsx)("div", {
        className: SH()("StoreCta", {
          StoreCtaHighlight: zH,
          StoreCtaLabelFirst: null !== WH
        }),
        onClick: HH => {
          HH.stopPropagation(), "needsRecipient" === BH && YH()
        },
        children: TH
      })
    }
    const rt = {
      common: "StorePackTileCommon",
      rare: "StorePackTileRare",
      epic: "StorePackTileEpic",
      legendary: "StorePackTileLegendary",
      mythic: "StorePackTileMythic"
    };

    function St(HH) {
      var BH;
      let {
        pack: LH,
        state: rH,
        busy: zH,
        onOpen: CH,
        onAct: EH,
        onNeedRecipient: GH,
        onLogin: YH
      } = HH;
      const {
        t: uH
      } = (0, hH.B)(), QH = Qh.b[LH], WH = Uh.j[LH], MH = (0, eh.m)(LH), xH = (0, AH.useRef)(null);
      (0, sh.m)(LH, xH);
      const vH = yh(rH),
        PH = null !== (BH = QH.displayName) && void 0 !== BH ? BH : LH,
        TH = (0, dh.c)((() => {
          (0, Zh.f)();
          const HH = (0, sh.g)(LH);
          void 0 !== HH && (0, ah.g)((0, sh.e)(HH))
        })),
        [UH] = (0, AH.useState)(Kh.l);
      return (0, XH.jsxs)("div", {
        className: SH()("StoreTile StorePackTile", rt[QH.tier], {
          StorePackTileOwned: "owned" === rH,
          StorePackTileRecipientOwns: "recipientOwns" === rH,
          StoreTileGift: vH
        }),
        ...Ht(PH),
        ref: xH,
        "data-store-item": LH,
        onClick: CH,
        onPointerMove: HH => {
          "mouse" !== HH.pointerType || 0 === HH.movementX && 0 === HH.movementY || UH || TH.start()
        },
        onPointerLeave: TH.cancel,
        children: [WH && (0, XH.jsx)(WH, {
          simple: !0
        }), (0, XH.jsx)("div", {
          className: "StorePackCharacters",
          children: MH.map((HH => (0, XH.jsx)("div", {
            className: "StorePackCharacter",
            style: {
              backgroundImage: `url(${(0,eh.i)(HH)})`
            }
          }, HH)))
        }), (0, XH.jsx)("div", {
          className: "StoreTileScrim"
        }), vH && (0, XH.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, XH.jsx)(ih.b, {
          pack: LH,
          className: SH()({
            PackAnimatedBadgeBesideRibbon: vH
          })
        }), (0, XH.jsxs)("div", {
          className: "StoreTileContent",
          children: [(0, XH.jsx)("div", {
            className: "StoreTileTitle",
            children: PH
          }), (0, XH.jsxs)("div", {
            className: "StoreTileMeta",
            children: [(0, XH.jsx)(Jh.c, {
              tier: QH.tier
            }), " \xb7 ", uH("store:itemCount", {
              count: (0, Yr.i)(LH)
            }), "owned" === rH && (0, XH.jsxs)("span", {
              className: "StoreTileOwned",
              children: [" \xb7 ", (0, XH.jsx)(tH.c, {
                name: "check"
              }), " ", uH("general:owned")]
            })]
          }), (0, XH.jsx)(At, {
            state: rH,
            item: LH,
            price: (0, Wh.f)(LH),
            busy: zH,
            onAct: EH,
            onNeedRecipient: GH,
            onLogin: YH
          })]
        })]
      })
    }
    var ht = LH(3966),
      tt = LH(3467),
      zt = LH(4674),
      Ct = LH(3991);
    const Et = {
      cape: RH.e.cape
    };

    function Xt(HH) {
      var BH, LH;
      let {
        wearer: rH,
        active: tH,
        tryOn: zH = Et,
        className: CH
      } = HH;
      const {
        t: EH
      } = (0, hH.B)(), GH = (0, AH.useRef)(null), [YH] = (0, AH.useState)(Kh.l), uH = function(HH) {
        const [BH, LH] = (0, AH.useState)(!1);
        return (0, AH.useEffect)((() => {
          const BH = new IntersectionObserver((HH => {
            LH(HH[HH.length - 1].isIntersecting)
          }));
          return BH.observe(HH.current), () => {
            BH.disconnect()
          }
        }), [HH]), BH
      }(GH), QH = (0, Ct.f)("storeRank"), WH = null !== (BH = rH.name) && void 0 !== BH ? BH : EH(rH.gift ? "store:hyperWearerFriend" : "store:hyperWearerYou"), MH = null !== (LH = rH.cosmetics) && void 0 !== LH ? LH : {}, xH = `${WH}|${JSON.stringify(MH)}`, vH = tH && uH && !YH && !QH, [PH, TH] = (0, AH.useState)(null);
      vH || null === PH || TH(null);
      const UH = vH && PH === xH;
      return (0, XH.jsxs)("div", {
        ref: GH,
        className: SH()("HyperRankStage", CH, {
          HyperRankStageDrawn: UH
        }),
        children: [(0, XH.jsx)("div", {
          className: "HyperRankStageGlow"
        }), (0, XH.jsx)(jH.b, {
          className: "HyperRankStageStandIn"
        }), vH && (0, XH.jsx)(Gt, {
          name: WH,
          cosmetics: MH,
          tryOn: zH,
          onDrawn: () => {
            TH(xH)
          }
        }, xH), (0, XH.jsx)("div", {
          className: "HyperRankStageFloor"
        })]
      })
    }

    function Gt(HH) {
      let {
        name: BH,
        cosmetics: LH,
        tryOn: rH,
        onDrawn: SH
      } = HH;
      const hH = (0, AH.useRef)(null),
        tH = (0, AH.useMemo)((() => {
          var HH;
          return {
            name: BH,
            ranks: [RH.e.rank],
            nameColour: null !== (HH = LH.nameColour) && void 0 !== HH ? HH : qh.c
          }
        }), [BH, LH.nameColour]);
      return (0, XH.jsx)("div", {
        className: "HyperRankStageLive",
        children: (0, XH.jsx)(AH.Suspense, {
          fallback: null,
          children: (0, XH.jsx)(Zh.b, {
            ref: hH,
            owner: "storeRank",
            framing: "store",
            forcedCosmetics: rH,
            nametag: tH,
            onReady: () => {
              var HH;
              null === (HH = hH.current) || void 0 === HH || HH.setAllCosmetics(LH)
            },
            onDrawn: SH
          })
        })
      })
    }
    var Yt = LH(4683);

    function ut(HH) {
      var BH;
      return null !== (BH = (0, Gr.k)(HH)) && void 0 !== BH ? BH : Gr.o[Gr.o.length - 1]
    }

    function Qt(HH, BH) {
      return HH.tiers.flatMap((HH => {
        var LH;
        return null !== (LH = HH[BH]) && void 0 !== LH ? LH : []
      }))
    }

    function Wt(HH) {
      return Qt(HH, "hyper").filter((HH => "cosmetic" === HH.kind))
    }

    function Mt(HH, BH) {
      const LH = Qt(HH, BH).find((HH => "xpBoost" === HH.kind));
      return "xpBoost" === (null === LH || void 0 === LH ? void 0 : LH.kind) ? LH : null
    }

    function xt(HH) {
      return [{
        id: "colourfulNames",
        icon: "palette",
        title: (0, XH.jsx)(Bt, {
          text: HH("store:colourfulNames")
        }),
        detail: HH("store:perkColourfulNamesDetail")
      }, {
        id: "capes",
        icon: "shirt",
        title: HH("store:perkCapes"),
        detail: HH("store:perkCapesDetail")
      }, {
        id: "nametag",
        icon: "user",
        title: HH("store:perkNametag", {
          rank: HH((0, jH.o)(RH.e.id).nameKey)
        }),
        detail: HH("store:perkNametagDetail")
      }, {
        id: "noAdverts",
        icon: "eye-slash",
        title: HH("store:perkNoAdverts"),
        detail: HH("store:perkNoAdvertsDetail")
      }, {
        id: "friends",
        icon: "user-group",
        title: HH("store:perkFriends", {
          count: (0, uB.b)([RH.e.rank])
        }),
        detail: HH("store:perkFriendsDetail", {
          count: (0, uB.b)([])
        })
      }]
    }

    function vt() {
      const {
        t: HH
      } = (0, hH.B)(), BH = [{
        id: "battlePass",
        icon: "crown",
        title: HH("store:perkBattlePassTrack")
      }, ...xt(HH)];
      return (0, XH.jsx)("ul", {
        className: "HyperRankTilePerks",
        children: BH.map((HH => (0, XH.jsxs)("li", {
          children: [(0, XH.jsx)("span", {
            className: "HyperRankPerkIcon",
            children: (0, XH.jsx)(tH.c, {
              name: HH.icon
            })
          }), HH.title]
        }, HH.id)))
      })
    }

    function Pt() {
      const {
        t: HH
      } = (0, hH.B)();
      return (0, XH.jsxs)("div", {
        className: "HyperRankPerkTiles",
        children: [(0, XH.jsx)(Tt, {}), xt(HH).map((HH => (0, XH.jsxs)("div", {
          className: "HyperRankPerkTile",
          children: [(0, XH.jsx)("span", {
            className: "HyperRankPerkIcon",
            children: (0, XH.jsx)(tH.c, {
              name: HH.icon
            })
          }), (0, XH.jsxs)("div", {
            className: "HyperRankPerkText",
            children: [(0, XH.jsx)("b", {
              children: HH.title
            }), (0, XH.jsx)("small", {
              children: HH.detail
            })]
          })]
        }, HH.id)))]
      })
    }

    function Tt() {
      const {
        t: HH,
        selectedLanguage: BH
      } = (0, hH.B)(), LH = ut(Date.now()), AH = Wt(LH), rH = function(HH) {
        return Wt(HH).filter((HH => null !== (0, zt.r)(HH) || null !== (0, zt.t)(HH))).reverse()
      }(LH).slice(0, 4), SH = Mt(LH, "hyper"), zH = Mt(LH, "free"), CH = (0, hH.h)(BH.code, "store:battlePassTiersEnds", LH.endsAtMs, {
        month: "long",
        day: "numeric"
      });
      return (0, XH.jsxs)("div", {
        className: "HyperRankPerkTile HyperRankBattlePassPerk",
        children: [(0, XH.jsx)("span", {
          className: "HyperRankPerkIcon",
          children: (0, XH.jsx)(tH.c, {
            name: "crown"
          })
        }), (0, XH.jsxs)("div", {
          className: "HyperRankPerkText",
          children: [(0, XH.jsx)("b", {
            children: HH("store:battlePassSeason", {
              season: LH.seasonNumber
            })
          }), (0, XH.jsx)("small", {
            children: HH("store:battlePassTiersEnds", {
              tiers: LH.tierCount,
              date: CH
            })
          })]
        }), (0, XH.jsxs)("div", {
          className: "HyperRankBattlePassRewards",
          children: [(0, XH.jsx)("span", {
            className: "HyperRankBattlePassCount",
            children: 1 === AH.length ? HH("store:battlePassOneCosmetic") : HH("store:battlePassCosmetics", {
              count: AH.length
            })
          }), (0, XH.jsxs)("div", {
            className: "HyperRankBattlePassFeatured",
            children: [rH.map((BH => (0, XH.jsx)("span", {
              className: "HyperRankBattlePassReward",
              title: (0, zt.k)(BH, HH),
              children: (0, XH.jsx)(Yt.b, {
                reward: BH
              })
            }, BH.id))), AH.length > rH.length && (0, XH.jsx)("span", {
              className: "HyperRankBattlePassReward HyperRankBattlePassMore",
              children: HH("store:battlePassMore", {
                count: AH.length - rH.length
              })
            })]
          })]
        }), (0, XH.jsxs)("ul", {
          className: "HyperRankBattlePassFacts",
          children: [SH && zH && (0, XH.jsxs)("li", {
            children: [(0, XH.jsx)(tH.c, {
              name: "angles-up"
            }), HH("store:battlePassXp", {
              multiplier: SH.multiplier,
              minutes: SH.minutes,
              freeMinutes: zH.minutes
            })]
          }), (0, XH.jsxs)("li", {
            children: [(0, XH.jsx)(tH.c, {
              name: "lock-open"
            }), HH("store:battlePassUnlockAtOnce")]
          })]
        })]
      })
    }

    function Ut(HH, BH) {
      return Object.keys(HH.cosmetics).some((HH => HH in BH.cosmetics))
    }

    function Vt(HH) {
      let {
        wearer: BH
      } = HH;
      const {
        t: LH
      } = (0, hH.B)(), rH = (0, AH.useMemo)((() => function(HH) {
        const BH = ut(Date.now()).tiers.flatMap((BH => {
          const LH = BH.hyper;
          if ("cosmetic" !== (null === LH || void 0 === LH ? void 0 : LH.kind) || "profileEffect" === LH.cosmeticKind || "pet" === LH.cosmeticKind || null === (0, zt.r)(LH)) return [];
          const AH = (0, zt.q)(LH);
          return null !== AH && Object.keys(AH.cosmetics).length > 0 ? [{
            id: LH.id,
            label: (0, zt.k)(LH, HH),
            cosmetics: AH.cosmetics
          }] : []
        }));
        return [{
          id: "cape",
          label: HH("store:tryOnCape"),
          cosmetics: {
            cape: RH.e.cape
          }
        }, ...BH.reverse().slice(0, 3)]
      }(LH)), [LH]), [tH, zH] = (0, AH.useState)((() => {
        const [HH, ...BH] = rH, LH = BH.find((BH => !Ut(BH, HH)));
        return new Set([HH.id, ...LH ? [LH.id] : []])
      })), CH = (0, AH.useMemo)((() => {
        const HH = {};
        for (const BH of rH) tH.has(BH.id) && Object.assign(HH, BH.cosmetics);
        return HH
      }), [rH, tH]);
      return (0, XH.jsxs)("div", {
        className: "HyperRankShowcase",
        children: [(0, XH.jsx)(Xt, {
          className: "HyperRankShowcaseStage",
          wearer: BH,
          active: !0,
          tryOn: CH
        }), (0, XH.jsx)("div", {
          className: "HyperRankTryOn",
          children: rH.map((HH => {
            const BH = tH.has(HH.id);
            return (0, XH.jsx)("button", {
              type: "button",
              className: SH()("HyperRankTryOnChip", {
                HyperRankTryOnChipOn: BH
              }),
              title: HH.label,
              "aria-pressed": BH,
              "data-pad-key": `tryOn:${HH.id}`,
              ...(0, WB.getAnalyticsClickAttributes)({
                id: "store.try_on",
                value: `${BH?"off":"on"}:${HH.id}`
              }),
              onClick: () => {
                zH((BH => {
                  if (BH.has(HH.id)) {
                    const LH = new Set(BH);
                    return LH.delete(HH.id), LH
                  }
                  return new Set([HH.id, ...rH.filter((LH => BH.has(LH.id) && !Ut(LH, HH))).map((HH => HH.id))])
                }))
              },
              children: HH.label
            }, HH.id)
          }))
        })]
      })
    }
    const Ot = LH.p + "static/media/superRankPreviewPoster.e64783181b692cc31e08.webp";

    function bt() {
      (0, ah.g)(Ot, {
        lowPriority: !1
      })
    }

    function kt() {
      const {
        t: HH
      } = (0, hH.B)(), [BH, LH] = (0, AH.useState)("starting"), rH = (0, AH.useRef)(null), SH = (0, EL.c)(), zH = (0, AH.useRef)(null), EH = (0, AH.useCallback)((() => {
        const HH = rH.current;
        null !== HH.error && HH.load();
        const BH = HH.play();
        zH.current = BH, BH.catch((HH => {
          (0, ht.b)("Failed to play Super Rank video", HH), SH.current && zH.current === BH && LH("failed")
        }))
      }), [SH]);
      return (0, AH.useEffect)((() => {
        const HH = rH.current;
        let BH;

        function LH() {
          clearTimeout(BH), BH = setTimeout(EH, 3e3)
        }
        return EH(), HH.addEventListener("ended", LH), () => {
          clearTimeout(BH), HH.removeEventListener("ended", LH)
        }
      }), [EH]), (0, XH.jsxs)("div", {
        className: "StoreSuperRankVideo",
        children: [(0, XH.jsx)("video", {
          ref: rH,
          src: `${oB.clientSideServerUrls.staticUrl}/videos/SuperRankPreview.mp4`,
          poster: Ot,
          muted: !0,
          playsInline: !0,
          controls: "playing" === BH,
          onPlaying: () => {
            LH("playing")
          },
          onError: () => {
            LH("failed")
          }
        }), ("failed" === BH || "loading" === BH) && (0, XH.jsx)("div", {
          className: "StoreSuperRankPlay",
          children: (0, XH.jsx)(CH.i, {
            ariaLabel: HH("general:play"),
            loading: "loading" === BH,
            onClick: () => {
              LH("loading"), EH()
            },
            touchPressOn: "pointerup",
            children: (0, XH.jsx)(tH.c, {
              name: "play"
            })
          })
        })]
      })
    }

    function mt(HH) {
      let {
        tierId: BH,
        wearer: LH,
        onBack: AH,
        cta: rH,
        recipient: tH,
        afterCta: zH
      } = HH;
      const {
        t: EH
      } = (0, hH.B)(), GH = "hyper" === (0, jH.o)(BH).look;
      return (0, XH.jsxs)("div", {
        className: SH()("StoreSuperRankDetail", {
          StoreHyperRankDetail: GH
        }),
        children: [(0, XH.jsxs)("div", {
          className: "StoreDetailHeader",
          children: [(0, XH.jsx)(CH.e, {
            className: "StoreDetailBackButton",
            onClick: AH,
            padBack: !0,
            children: EH("general:back")
          }), (0, XH.jsx)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: (0, XH.jsx)(jH.i, {
              tierId: BH
            })
          }), tH]
        }), (0, XH.jsxs)("div", {
          className: "StoreSuperRankDetailBody",
          children: [GH && (0, XH.jsx)(Vt, {
            wearer: LH
          }), !GH && (0, XH.jsx)(kt, {}), (0, XH.jsxs)("div", {
            className: "StoreSuperRankDetailSide",
            children: [GH && (0, XH.jsx)(Pt, {}), !GH && (0, XH.jsx)("div", {
              className: "StoreSuperRankDetailTable",
              children: (0, XH.jsx)(tt.e, {
                tierId: BH
              })
            }), (0, XH.jsxs)("div", {
              className: "StoreTileActions",
              children: [rH, zH]
            })]
          })]
        })]
      })
    }
    var ot = LH(3401);

    function It(HH) {
      let {
        price: BH,
        perks: LH
      } = HH;
      const {
        t: AH
      } = (0, hH.B)();
      return (0, XH.jsxs)("div", {
        className: "StoreSubscriptionTerms",
        children: [LH, (0, XH.jsx)("div", {
          className: "SmallTextLight",
          children: AH("payments:subscriptionRenewsMonthly", {
            price: BH
          })
        }), (0, XH.jsxs)("div", {
          className: "StoreSubscriptionTermsLinks SmallTextLight",
          children: [(0, XH.jsx)("a", {
            href: "/terms-of-service",
            target: "_blank",
            rel: "noreferrer",
            children: AH("homePage:termsOfService")
          }), (0, XH.jsx)("a", {
            href: "/privacy-policy",
            target: "_blank",
            rel: "noreferrer",
            children: AH("homePage:privacyPolicy")
          })]
        })]
      })
    }
    var ft = LH(3422),
      lt = LH(3426),
      Kt = LH(3356);

    function ct(HH) {
      const {
        userContext: BH
      } = (0, uH.e)(), {
        purchaseUnderWay: LH,
        notice: rH,
        subscribe: SH
      } = (0, Kt.c)(), [hH, tH] = (0, AH.useState)(null), [zH, CH] = (0, AH.useState)(0), EH = (0, EL.c)(), XH = BH !== oH.NULL_USER_CONTEXT, GH = XH && (BH.mayBuy() || (0, DH.guestsMayBuy)()), YH = null !== hH && hH.loadedFor === BH ? hH.offer : null, QH = null === rH || void 0 === rH ? void 0 : rH.pendingIntentId, WH = (0, AH.useRef)(QH);

      function MH() {
        CH((HH => HH + 1))
      }
      return (0, AH.useEffect)((() => {
        void 0 !== WH.current && void 0 === QH && MH(), WH.current = QH
      }), [QH]), (0, AH.useEffect)((() => {
        if (!XH) return;
        let LH = !1;
        return async function(HH, BH) {
          const {
            offering: LH
          } = await (0, yH.getBillingClient)().getOfferings(HH), AH = null === LH || void 0 === LH ? void 0 : LH.packages.find(pH.isPricedPackage);
          if (void 0 === AH) return {
            kind: "unavailable"
          };
          if (!BH) return {
            kind: "loaded",
            pkg: AH,
            preview: {
              kind: "none"
            }
          };
          try {
            return {
              kind: "loaded",
              pkg: AH,
              preview: await (0, lt.f)(AH.productId)
            }
          } catch (rH) {
            if ((0, lt.j)(rH)) return {
              kind: "unavailable"
            };
            throw rH
          }
        }(HH, GH).catch((BH => (console.error(`Billing: loading the ${HH} subscription or its preview failed:`, BH), {
          kind: "loadFailed"
        }))).then((HH => {
          LH || tH((LH => "loadFailed" === HH.kind && (null === LH || void 0 === LH ? void 0 : LH.loadedFor) === BH ? LH : {
            loadedFor: BH,
            offer: HH
          }))
        })), () => {
          LH = !0
        }
      }), [HH, BH, XH, GH, zH]), {
        offer: YH,
        purchaseUnderWay: LH,
        notice: rH,
        pendingIntentId: QH,
        mountedRef: EH,
        checkOut: async function(HH) {
          const LH = await SH(HH);
          EH.current && ("unknownPackage" === LH.kind && tH({
            loadedFor: BH,
            offer: {
              kind: "unavailable"
            }
          }), MH())
        }
      }
    }

    function et(HH) {
      let {
        onOfferedChange: BH
      } = HH;
      return (0, DH.usePurchasesAllowed)() && (0, DH.subscriptionsSold)() ? (0, XH.jsx)(qt, {
        onOfferedChange: BH
      }) : null
    }

    function qt(HH) {
      let {
        onOfferedChange: BH
      } = HH;
      const {
        t: LH
      } = (0, hH.B)(), {
        offer: rH,
        purchaseUnderWay: SH,
        notice: tH,
        pendingIntentId: zH,
        mountedRef: EH,
        checkOut: GH
      } = ct((0, jH.o)(RH.e.id).placementId), [YH, uH] = (0, AH.useState)(!1), QH = null === rH || "loaded" === rH.kind && "refused" !== rH.preview.kind;
      if ((0, AH.useEffect)((() => {
          BH(QH)
        }), [QH]), null === rH || "unavailable" === rH.kind) return null;
      if ("loadFailed" === rH.kind) return (0, XH.jsx)(ot.e, {
        notice: {
          kind: "error",
          key: "payments:subscriptionLoadFailed"
        },
        className: "StoreSubscribe SmallTextBold"
      });
      const {
        pkg: WH,
        preview: xH
      } = rH;
      if ("refused" === xH.kind) return (0, XH.jsx)(ot.e, {
        notice: {
          kind: "error",
          key: "payments:subscribeRefusedGemRank",
          values: {
            date: new Date(xH.until).toLocaleDateString()
          }
        },
        className: "StoreSubscribe SmallTextBold"
      });
      const vH = (0, SB.f)(WH);
      return (0, XH.jsxs)("div", {
        className: "StoreSubscribe",
        onClick: HH => {
          HH.stopPropagation()
        },
        children: [(0, XH.jsx)(ot.e, {
          notice: tH,
          className: "SmallTextBold"
        }), (0, XH.jsx)(ot.b, {
          className: "SmallTextBold"
        }), (0, XH.jsx)("div", {
          className: "StoreCta",
          children: (0, XH.jsx)(CH.B, {
            className: "StoreSubscribeButton",
            onClick: () => {
              !async function(HH, BH) {
                if ("refund" === BH.kind) {
                  uH(!0);
                  const HH = await (0, ft.d)(BH, null);
                  if (!EH.current) return;
                  if (uH(!1), !HH) return
                }
                await GH(HH)
              }(WH, xH)
            },
            disabled: void 0 !== zH,
            loading: SH || YH,
            analyticsClick: {
              id: "store.buy",
              value: "subscription"
            },
            children: (0, XH.jsx)("span", {
              className: "StoreCtaLabel",
              children: LH("payments:subscribeContinue", {
                price: vH
              })
            })
          })
        }), (0, MH.isMobileApp)() && (0, XH.jsx)(It, {
          price: vH,
          perks: (0, XH.jsx)(vt, {})
        })]
      })
    }

    function gt() {
      const {
        t: HH
      } = (0, hH.B)();
      return (0, XH.jsxs)("ul", {
        className: "StorePerks",
        children: [(0, XH.jsxs)("li", {
          children: [(0, XH.jsx)(tH.c, {
            name: "check"
          }), (0, XH.jsx)(Bt, {
            text: HH("store:colourfulNames")
          })]
        }), (0, XH.jsxs)("li", {
          children: [(0, XH.jsx)(tH.c, {
            name: "check"
          }), HH("store:perkCapes")]
        }), (0, XH.jsxs)("li", {
          children: [(0, XH.jsx)(tH.c, {
            name: "check"
          }), HH("store:perkNoAdverts")]
        }), (0, XH.jsxs)("li", {
          children: [(0, XH.jsx)(tH.c, {
            name: "check"
          }), HH("store:perkFriends", {
            count: (0, uB.b)(["super"])
          })]
        })]
      })
    }

    function Nt(HH, BH) {
      return 1 === BH ? HH("store:oneDayLeft") : HH("store:daysLeft", {
        days: BH
      })
    }

    function Rt(HH) {
      let {
        daysLeft: BH,
        totalDays: LH,
        urgent: AH
      } = HH;
      const {
        t: rH
      } = (0, hH.B)(), tH = LH > 0 ? Math.min(1, Math.max(.03, BH / LH)) : 1;
      return (0, XH.jsxs)("div", {
        className: SH()("StoreSuperRankMeterArea", {
          StoreSuperRankMeterUrgent: AH
        }),
        children: [(0, XH.jsx)("span", {
          className: "StoreSuperRankDaysLeft",
          children: Nt(rH, BH)
        }), (0, XH.jsx)("div", {
          className: "StoreSuperRankMeter",
          children: (0, XH.jsx)("i", {
            style: {
              width: 100 * tH + "%"
            }
          })
        })]
      })
    }

    function jt(HH) {
      var BH;
      let {
        state: LH,
        urgent: rH,
        daysLeft: tH,
        totalDays: zH,
        recipientHasSuperRank: CH,
        busy: EH,
        highlight: GH,
        onOpen: YH,
        onAct: QH,
        onNeedRecipient: WH,
        onLogin: xH,
        wearer: vH,
        live: PH,
        onWake: TH
      } = HH;
      const {
        t: UH
      } = (0, hH.B)(), {
        userContext: VH
      } = (0, uH.e)(), OH = Date.now(), bH = (0, jH.u)(OH), kH = "hyper" === bH.look, mH = kH ? void 0 : bt, oH = yh(LH), IH = (0, jH.v)(OH), {
        days: fH
      } = IH.product, lH = UH("store:recipientHasSuperRank", {
        giftDays: fH
      }), KH = null === (BH = GB("subscribed" === LH)) || void 0 === BH ? void 0 : BH.text, cH = oH ? null : (0, jH.q)(VH.superRankInfo, OH), eH = kH && !oH && "subscribed" !== LH && "pending" !== LH && (0, DH.subscriptionsSold)() && !(0, MH.isMobileApp)(), [qH, gH] = (0, AH.useState)(!0);
      return (0, XH.jsxs)("div", {
        className: SH()("StoreTile StoreSuperRankTile", {
          StoreTileGift: oH,
          StoreSuperRankTileUrgent: "recharge" === LH && rH,
          StoreSuperRankTileWithChip: CH,
          StoreSuperRankTileGiftReady: "gift" === LH,
          StoreHyperRankTile: kH
        }),
        ...Ht(UH(bH.nameKey)),
        "data-store-item": "superRank",
        onPointerEnter: mH,
        onFocus: mH,
        onPointerMove: HH => {
          !kH || PH || "mouse" !== HH.pointerType || 0 === HH.movementX && 0 === HH.movementY || TH()
        },
        onClick: YH,
        children: [kH && (0, XH.jsx)(Xt, {
          className: "StoreHyperRankTileStage",
          wearer: vH,
          active: PH
        }), !kH && (0, XH.jsx)("div", {
          className: "StoreSuperRankArt",
          style: {
            backgroundImage: `url(${bH.artUrl})`
          }
        }), oH && (0, XH.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, XH.jsxs)("div", {
          className: "StoreTileContent",
          children: [CH && (0, XH.jsx)("span", {
            className: "StoreChip StoreChipGift",
            title: lH,
            children: lH
          }), (0, XH.jsx)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: (0, XH.jsx)(jH.i, {
              tierId: (0, NH.g)(OH).id
            })
          }), oH && (0, XH.jsx)("div", {
            className: "StoreTilePitch",
            children: UH("store:giftPitch", {
              days: fH
            })
          }), kH && ("buy" === LH || "login" === LH) && null === cH && (0, XH.jsx)("div", {
            className: "StoreTilePitch",
            children: UH("store:hyperHook")
          }), "recharge" === LH && (0, XH.jsx)(Rt, {
            daysLeft: tH,
            totalDays: zH,
            urgent: rH
          }), KH && (0, XH.jsx)("div", {
            className: "StoreSuperRankMeterArea",
            children: (0, XH.jsx)("span", {
              className: "StoreSuperRankDaysLeft",
              children: KH
            })
          }), null !== cH && (0, XH.jsx)("div", {
            className: "StoreSuperRankMeterArea",
            children: (0, XH.jsx)(FH, {
              className: "StoreSuperRankDaysLeft",
              until: cH
            })
          }), kH && (0, XH.jsx)(vt, {}), !kH && (0, XH.jsx)(gt, {}), (0, XH.jsxs)("div", {
            className: "StoreTileActions",
            children: [eH && (0, XH.jsx)(et, {
              onOfferedChange: gH
            }), (0, XH.jsx)(At, {
              state: LH,
              item: "superRank",
              price: IH.price,
              busy: EH,
              highlight: GH,
              secondary: eH && qH,
              onAct: QH,
              onNeedRecipient: WH,
              onLogin: xH
            }), "needsRecipient" === LH && (0, XH.jsx)("span", {
              className: "StoreTileNote StoreTileNoteGift",
              children: UH("store:pickRecipientFirst")
            }), "recharge" === LH && rH && (0, XH.jsx)("span", {
              className: "StoreTileNote StoreSuperRankEnding",
              children: 1 === tH ? UH("store:endsInOneDay") : UH("store:endsInDays", {
                days: tH
              })
            })]
          })]
        })]
      })
    }
    var nt = LH(1551),
      Ft = LH(1460),
      Dt = LH(3950);

    function wt() {
      return (0, XH.jsx)("span", {
        className: "NewBadge",
        children: "NEW"
      })
    }
    var Zt = LH(1344),
      dt = LH(1565),
      st = LH(35016);

    function Jt(HH) {
      let {
        character: BH,
        drawn: LH,
        onDrawn: rH
      } = HH;
      const hH = (0, AH.useRef)(null),
        tH = (0, st.g)(BH);
      return (0, XH.jsx)("div", {
        className: SH()("StoreCharacterLive", {
          StoreCharacterLiveDrawn: LH
        }),
        children: (0, XH.jsx)(AH.Suspense, {
          fallback: null,
          children: (0, XH.jsx)(Zh.b, {
            ref: hH,
            framing: "store",
            turntableFromYaw: LH ? tH.yaw : null,
            onReady: () => {
              var HH, LH;
              null === (HH = hH.current) || void 0 === HH || HH.setOrbit(tH), null === (LH = hH.current) || void 0 === LH || LH.setAllCosmetics(dt.c[BH].cosmetics)
            },
            onDrawn: rH
          })
        })
      })
    }
    const it = {
        common: "StoreCharacterCardCommon",
        rare: "StoreCharacterCardRare",
        epic: "StoreCharacterCardEpic",
        legendary: "StoreCharacterCardLegendary",
        mythic: "StoreCharacterCardMythic"
      },
      pt = new Set(["wildSpirits"]);

    function yt(HH) {
      var BH;
      let {
        tile: LH,
        design: rH,
        canGoLive: zH,
        live: CH,
        busy: EH,
        highlight: GH,
        onLiveStart: YH,
        onLiveEnd: uH,
        onOpen: QH,
        onAct: WH,
        onNeedRecipient: MH,
        onLogin: xH
      } = HH;
      const {
        t: vH
      } = (0, hH.B)(), {
        pack: PH,
        state: TH
      } = LH, UH = Qh.b[PH], VH = (0, Qh.c)(PH), OH = (0, eh.j)(PH), bH = Uh.j[OH], kH = pt.has(OH), {
        tier: mH
      } = UH, oH = "legendary" === mH || "mythic" === mH, IH = (0, AH.useRef)(null);
      (0, Zt.d)(IH, "epic" === mH || oH || kH);
      const [fH, KH] = (0, AH.useState)(!1);
      return !CH && fH && KH(!1), (0, XH.jsxs)("div", {
        ref: IH,
        className: SH()("StoreCharacterCard", `StoreCharacterCard${rH}`, it[mH], {
          StoreCharacterCardOwned: "owned" === TH || "recipientOwns" === TH,
          StoreCharacterCardGift: yh(TH),
          StoreCharacterCardItem: void 0 === VH
        }),
        onPointerMove: HH => {
          "mouse" !== HH.pointerType || 0 === HH.movementX && 0 === HH.movementY || !zH || CH || void 0 === VH || YH()
        },
        onPointerLeave: uH,
        children: [(0, XH.jsx)("div", {
          className: "StoreCharacterBackdrop",
          children: bH && (0, XH.jsx)(bH, {
            simple: !0
          })
        }), oH && (0, XH.jsx)("div", {
          className: "StoreCharacterRays"
        }), (0, XH.jsxs)(lH.LinkPreserveSearch, {
          className: "StoreCharacterLink",
          to: (0, nt.g)({
            kind: "pack",
            pack: PH
          }, Date.now()),
          "data-store-item": PH,
          onClick: HH => {
            (0, Ft.c)(HH) && (HH.preventDefault(), QH())
          },
          children: [(0, XH.jsxs)("div", {
            className: "StoreCharacterStage",
            children: [(0, XH.jsx)("div", {
              className: "StoreCharacterHalo"
            }), (0, XH.jsx)("div", {
              className: SH()("StoreCharacterFigure", {
                StoreCharacterFigureCovered: fH
              }),
              style: {
                backgroundImage: `url(${(0,eh.q)(PH)})`
              }
            }), CH && void 0 !== VH && (0, XH.jsx)(Jt, {
              character: VH,
              drawn: fH,
              onDrawn: () => {
                KH(!0)
              }
            })]
          }), (0, XH.jsx)("div", {
            className: "StoreCharacterName",
            children: null !== (BH = UH.displayName) && void 0 !== BH ? BH : PH
          }), (0, XH.jsx)(Jh.c, {
            tier: mH,
            className: "StoreCharacterTier"
          })]
        }), (0, XH.jsx)("div", {
          className: "StoreCharacterScrim"
        }), kH && (0, XH.jsx)("span", {
          className: "StoreCharacterNew",
          children: (0, XH.jsx)(wt, {})
        }), (0, XH.jsx)(ih.b, {
          pack: PH,
          iconOnly: !0,
          className: SH()({
            PackAnimatedBadgeBelowOwned: "owned" === TH
          })
        }), "owned" === TH && (0, XH.jsx)("span", {
          className: "StoreCharacterOwned",
          title: vH("general:owned"),
          "aria-label": vH("general:owned"),
          children: (0, XH.jsx)(tH.c, {
            name: "check"
          })
        }), (0, XH.jsx)("div", {
          className: "StoreCharacterPlate",
          children: (0, XH.jsx)(At, {
            state: TH,
            item: PH,
            price: (0, Wh.f)(PH),
            busy: EH,
            highlight: GH,
            onAct: WH,
            onNeedRecipient: MH,
            onLogin: xH
          })
        })]
      })
    }

    function Hz(HH) {
      let {
        tiles: BH,
        busy: LH,
        highlightItem: rH,
        onOpen: SH,
        onAct: hH,
        onNeedRecipient: tH,
        onLogin: zH,
        livePack: CH,
        setLivePack: EH
      } = HH;
      const GH = (0, Dt.w)("storeCharacterCardFoil"),
        YH = (0, Dt.w)("storeCharacterCardSpotlight"),
        uH = GH ? "Foil" : YH ? "Spotlight" : "Showcase",
        [QH] = (0, AH.useState)(Kh.l);
      return (0, XH.jsx)("div", {
        className: "StoreCharacterGrid",
        children: BH.map((HH => (0, XH.jsx)(yt, {
          tile: HH,
          design: uH,
          canGoLive: !QH,
          live: CH === HH.pack,
          busy: LH,
          highlight: rH === HH.pack,
          onLiveStart: () => {
            EH(HH.pack)
          },
          onLiveEnd: () => {
            EH((BH => BH === HH.pack ? null : BH))
          },
          onOpen: () => {
            SH(HH.pack)
          },
          onAct: () => {
            hH(HH.pack)
          },
          onNeedRecipient: tH,
          onLogin: () => {
            zH(HH.pack)
          }
        }, HH.pack)))
      })
    }
    var Bz = LH(35020);

    function Lz(HH) {
      let {
        title: BH
      } = HH;
      return (0, XH.jsx)("h2", {
        className: "StoreSectionDivider",
        children: (0, XH.jsx)("span", {
          className: "StoreSectionDividerTitle",
          children: BH
        })
      })
    }

    function Az(HH) {
      let {
        mountAtOnce: BH,
        children: LH
      } = HH;
      const rH = (0, AH.useRef)(null),
        [SH, hH] = (0, AH.useState)(BH),
        tH = (0, Bz.c)();
      return (0, AH.useLayoutEffect)((() => {
        const HH = rH.current;
        HH && HH.getBoundingClientRect().top < HH.parentElement.getBoundingClientRect().bottom && hH(!0)
      }), []), SH || tH ? (0, XH.jsx)(XH.Fragment, {
        children: LH
      }) : (0, XH.jsx)("div", {
        ref: rH
      })
    }

    function rz(HH) {
      let {
        layout: BH,
        mountAtOnce: LH,
        bundleGift: rH,
        superRankTotalDays: SH,
        busy: tH,
        highlightItem: zH,
        onOpen: CH,
        onAct: EH,
        onNeedRecipient: GH,
        onLogin: YH,
        dailyDropTile: uH,
        dealBanner: QH,
        rankWearer: WH
      } = HH;
      const {
        t: MH
      } = (0, hH.B)(), xH = BH.packs.filter((HH => void 0 === (0, Qh.c)(HH.pack) && !(0, Qh.e)(HH.pack))), vH = BH.packs.filter((HH => void 0 !== (0, Qh.c)(HH.pack))), PH = BH.packs.filter((HH => (0, Qh.e)(HH.pack))), [TH, UH] = (0, AH.useState)(null), [VH, bH] = (0, AH.useState)(!1), {
        gameState: kH
      } = (0, OH.m)(["gameState"]), mH = null === TH && (VH || "inGame" === kH);
      return (0, XH.jsxs)(XH.Fragment, {
        children: [(0, XH.jsx)(SB.e, {
          className: "StoreSuperGems",
          gift: rH,
          highlightSku: zH,
          leadingTile: uH,
          afterLeadingTile: QH
        }), (0, XH.jsx)(Lz, {
          title: MH("store:rank")
        }), (0, XH.jsx)(jt, {
          state: BH.superRank.state,
          urgent: BH.superRank.urgent,
          daysLeft: BH.superRankDaysLeft,
          totalDays: SH,
          recipientHasSuperRank: BH.recipientHasSuperRank,
          wearer: WH,
          live: mH,
          onWake: () => {
            bH(!0)
          },
          busy: tH,
          highlight: "superRank" === zH,
          onOpen: () => {
            CH("superRank")
          },
          onAct: () => {
            EH("superRank")
          },
          onNeedRecipient: GH,
          onLogin: () => {
            YH("superRank")
          }
        }), (0, XH.jsxs)(Az, {
          mountAtOnce: LH,
          children: [(0, XH.jsx)(Lz, {
            title: MH("store:bundles")
          }), (0, XH.jsx)("div", {
            className: "StorePackGrid",
            children: xH.map((HH => (0, XH.jsx)(St, {
              pack: HH.pack,
              state: HH.state,
              busy: tH,
              onOpen: () => {
                CH(HH.pack)
              },
              onAct: () => {
                EH(HH.pack)
              },
              onNeedRecipient: GH,
              onLogin: () => {
                YH(HH.pack)
              }
            }, HH.pack)))
          }), (0, XH.jsxs)(Az, {
            mountAtOnce: LH,
            children: [(0, XH.jsx)(Lz, {
              title: MH("store:characters")
            }), (0, XH.jsx)(Hz, {
              tiles: vH,
              busy: tH,
              highlightItem: zH,
              onOpen: CH,
              onAct: EH,
              onNeedRecipient: GH,
              onLogin: YH,
              livePack: TH,
              setLivePack: UH
            }), PH.length > 0 && (0, XH.jsxs)(XH.Fragment, {
              children: [(0, XH.jsx)(Lz, {
                title: MH("store:premiumItems")
              }), (0, XH.jsx)(Hz, {
                tiles: PH,
                busy: tH,
                highlightItem: zH,
                onOpen: CH,
                onAct: EH,
                onNeedRecipient: GH,
                onLogin: YH,
                livePack: TH,
                setLivePack: UH
              })]
            })]
          })]
        })]
      })
    }

    function Sz(HH) {
      let {
        giftName: BH,
        onChooseRecipient: LH
      } = HH;
      const {
        t: AH
      } = (0, hH.B)();
      return BH ? (0, XH.jsxs)("span", {
        className: "StoreDetailRecipient",
        title: AH("store:giftFor", {
          name: BH
        }),
        children: [Oh.d, " ", AH("store:giftFor", {
          name: BH
        })]
      }) : (0, XH.jsxs)("div", {
        ...(0, CH.db)(),
        className: "StoreDetailRecipient StoreDetailRecipientChoose",
        onClick: LH,
        children: [Oh.d, " ", AH("store:chooseRecipient")]
      })
    }

    function hz(HH) {
      return (0, NH.c)(Date.now()) ? (0, XH.jsx)(zz, {
        ...HH
      }) : (0, XH.jsx)(tz, {
        ...HH
      })
    }

    function tz(HH) {
      let {
        state: BH,
        wearer: LH,
        mode: AH,
        giftName: rH,
        busy: SH,
        highlight: tH,
        purchaseError: zH,
        onBack: CH,
        onChooseRecipient: EH,
        onAct: GH,
        onLogin: YH
      } = HH;
      const {
        t: uH
      } = (0, hH.B)(), QH = GB("gift" !== AH);
      return (0, XH.jsx)(mt, {
        tierId: RH.n.id,
        wearer: LH,
        onBack: CH,
        recipient: "gift" === AH && (0, XH.jsx)(Sz, {
          giftName: rH,
          onChooseRecipient: EH
        }),
        cta: (0, XH.jsx)(At, {
          state: BH,
          item: "superRank",
          price: (0, jH.v)(Date.now()).price,
          busy: SH,
          highlight: tH,
          onAct: GH,
          onNeedRecipient: EH,
          onLogin: YH
        }),
        afterCta: (0, XH.jsxs)(XH.Fragment, {
          children: [QH && (0, XH.jsx)("span", {
            className: "StoreTileNote",
            children: QH.text
          }), (null === QH || void 0 === QH ? void 0 : QH.manageUrl) && (0, XH.jsx)("a", {
            className: "StoreTileNote StoreManageSubscription",
            href: QH.manageUrl,
            target: "_blank",
            rel: "noreferrer",
            children: uH("payments:manageSubscription")
          }), zH && (0, XH.jsx)("span", {
            className: "StoreTileNote StoreTileNoteError",
            children: uH(zH)
          })]
        })
      })
    }

    function zz(HH) {
      let {
        state: BH,
        daysLeft: LH,
        wearer: rH,
        mode: SH,
        giftName: tH,
        busy: zH,
        highlight: CH,
        purchaseError: EH,
        onBack: GH,
        onChooseRecipient: YH,
        onAct: QH,
        onLogin: WH
      } = HH;
      const {
        t: MH
      } = (0, hH.B)(), {
        userContext: xH
      } = (0, uH.e)(), vH = Date.now(), PH = "gift" !== SH, TH = PH && "subscribed" === BH, UH = PH ? (0, jH.q)(xH.superRankInfo, vH) : null, VH = PH && !TH && "pending" !== BH && (0, DH.subscriptionsSold)(), [OH, bH] = (0, AH.useState)(!0);
      return (0, XH.jsx)(mt, {
        tierId: RH.e.id,
        wearer: rH,
        onBack: GH,
        recipient: !PH && (0, XH.jsx)(Sz, {
          giftName: tH,
          onChooseRecipient: YH
        }),
        cta: (0, XH.jsxs)(XH.Fragment, {
          children: [null !== UH && (0, XH.jsx)(FH, {
            className: "StoreTileNote StoreDetailNote",
            until: UH
          }), "recharge" === BH && LH > 0 && (0, XH.jsx)("span", {
            className: "StoreTileNote StoreDetailNote",
            children: Nt(MH, LH)
          }), VH && (0, XH.jsx)(et, {
            onOfferedChange: bH
          }), PH && (0, XH.jsx)(tB, {
            showing: !0
          }), !TH && (0, XH.jsx)(At, {
            state: BH,
            item: "superRank",
            price: (0, jH.v)(vH).price,
            busy: zH,
            highlight: CH,
            secondary: VH && OH,
            onAct: QH,
            onNeedRecipient: YH,
            onLogin: WH
          })]
        }),
        afterCta: EH && (0, XH.jsx)("span", {
          className: "StoreTileNote StoreDetailNote StoreTileNoteError",
          children: MH(EH)
        })
      })
    }

    function Cz(HH, BH) {
      const LH = Math.max(1, Math.round(BH / gH.j));
      return [1 === LH ? `${HH}OneDay` : HH, {
        days: LH.toLocaleString()
      }]
    }

    function Ez() {
      const HH = (0, DH.usePurchasesAllowed)();
      return "true" === new URLSearchParams(window.location.search).get("tempSubscription") && HH && (0, DH.subscriptionsSold)() ? (0, XH.jsx)(Xz, {}) : null
    }

    function Xz() {
      const {
        t: HH
      } = (0, hH.B)(), {
        offer: BH,
        purchaseUnderWay: LH,
        notice: rH,
        pendingIntentId: SH,
        checkOut: tH
      } = ct((0, jH.o)(RH.n.id).placementId), [zH, EH] = (0, AH.useState)(!1);
      if ((0, AH.useEffect)((() => {
          EH(!1)
        }), [BH]), null === BH) return null;
      if ("loaded" !== BH.kind) return (0, XH.jsx)(ot.e, {
        notice: {
          kind: "error",
          key: "unavailable" === BH.kind ? "payments:subscriptionUnavailable" : "payments:subscriptionLoadFailed"
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const {
        pkg: GH,
        preview: YH
      } = BH;
      if ("refused" === YH.kind) return (0, XH.jsx)(ot.e, {
        notice: {
          kind: "error",
          key: "payments:subscribeRefusedGemRank",
          values: {
            date: new Date(YH.until).toLocaleDateString()
          }
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const uH = (0, SB.f)(GH),
        QH = (0, MH.isMobileApp)() && (0, XH.jsx)(It, {
          price: uH,
          perks: (0, XH.jsx)(gt, {})
        });
      if (zH && "refund" === YH.kind) {
        const {
          refundedMs: BH,
          forfeitedMs: AH,
          premiumCurrency: rH
        } = YH, SH = AH + (0 === rH ? BH : 0), [hH, zH] = Cz("payments:subscribeRefundsGemRank", BH), [WH, MH] = Cz("payments:subscribeForfeitsGemRank", SH);
        return (0, XH.jsxs)("div", {
          className: "StoreTempSubscribe SmallTextBold",
          children: [(0, XH.jsx)("div", {
            children: HH("payments:subscribeEndsGemRank")
          }), rH > 0 && (0, XH.jsx)("div", {
            children: HH(hH, {
              ...zH,
              amount: rH.toLocaleString()
            })
          }), SH > 0 && (0, XH.jsx)("div", {
            children: HH(WH, MH)
          }), (0, XH.jsxs)("div", {
            className: "StoreTempSubscribeButtons",
            children: [(0, XH.jsx)(CH.m, {
              onClick: () => {
                EH(!1)
              },
              children: HH("general:cancel")
            }), (0, XH.jsx)(CH.u, {
              onClick: () => {
                EH(!1), tH(GH)
              },
              loading: LH,
              children: HH("payments:subscribeContinue", {
                price: uH
              })
            })]
          }), QH]
        })
      }
      return (0, XH.jsxs)("div", {
        className: "StoreTempSubscribe",
        children: [(0, XH.jsx)(ot.e, {
          notice: rH,
          className: "SmallTextBold"
        }), (0, XH.jsx)(ot.b, {
          className: "SmallTextBold"
        }), (0, XH.jsx)(CH.u, {
          onClick: () => {
            "refund" === YH.kind ? EH(!0) : tH(GH)
          },
          disabled: void 0 !== SH,
          loading: LH,
          children: HH("payments:subscribeToSuperRank", {
            price: uH
          })
        }), QH]
      })
    }
    var Gz = LH(2762);

    function Yz(HH) {
      let {
        state: BH,
        view: LH,
        claiming: rH,
        onOpen: tH
      } = HH;
      const {
        t: EH
      } = (0, hH.B)(), GH = (0, AH.useRef)(null), YH = "ready" === LH.kind;
      return (0, Zt.d)(GH, YH), (0, XH.jsxs)("div", {
        ref: GH,
        className: SH()("DailyDropTile", {
          DailyDropTileReady: YH
        }),
        children: [YH && (0, XH.jsx)(zH.b, {
          top: "0.25rem",
          right: "0.25rem"
        }), (0, XH.jsx)("div", {
          className: "DailyDropTileTitle",
          children: EH("dailyDrop:name")
        }), (0, XH.jsxs)("div", {
          className: "DailyDropTileArt",
          children: [(0, XH.jsx)(Gz.e, {
            className: "DailyDropTileBlock"
          }), (0, XH.jsx)("div", {
            className: "DailyDropTileInfo SmallTextLight",
            children: EH("dailyDrop:collected", {
              count: BH.collected.length,
              total: BH.total
            })
          })]
        }), "ready" === LH.kind && (0, XH.jsx)(CH.u, {
          className: "DailyDropTileOpen",
          onClick: tH,
          loading: rH,
          children: EH("dailyDrop:open")
        }), "waiting" === LH.kind && (0, XH.jsx)("div", {
          className: "DailyDropTileWait SmallTextBold",
          children: EH("dailyDrop:nextIn", {
            count: LH.hours
          })
        })]
      })
    }
    var uz = LH(2339);
    const Qz = Math.PI / 180;

    function Wz(HH) {
      return HH / (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 24) * 2 * Math.PI
    }

    function Mz(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 24;
      const AH = (HH / (2 * Math.PI / LH) % LH + LH) % LH;
      let rH = null,
        SH = 1 / 0;
      for (let hH = 0; hH < LH; hH++) {
        if (!BH[hH]) continue;
        const HH = Math.abs(hH - AH),
          tH = Math.min(HH, LH - HH);
        tH < SH && (rH = hH, SH = tH)
      }
      return rH
    }

    function xz(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 24;
      const AH = Mz(HH, BH, LH);
      if (null === AH) return HH;
      const rH = Wz(AH, LH) - HH;
      return HH + rH - 2 * Math.PI * Math.round(rH / (2 * Math.PI))
    }
    const vz = 32;

    function Pz(HH) {
      if (0 === HH.width || 0 === HH.height) return !0;
      const BH = document.createElement("canvas");
      BH.width = vz, BH.height = vz;
      const LH = BH.getContext("2d", {
        willReadFrequently: !0
      });
      if (!LH) return !0;
      LH.drawImage(HH, 0, 0, vz, vz);
      const {
        data: AH
      } = LH.getImageData(0, 0, vz, vz);
      for (let rH = 3; rH < AH.length; rH += 4)
        if (AH[rH] > 0) return !1;
      return !0
    }

    function Tz(HH) {
      const BH = document.createElement("canvas");
      BH.width = HH.width, BH.height = HH.height;
      const LH = BH.getContext("2d");
      return LH ? (LH.drawImage(HH, 0, 0), BH) : null
    }

    function Uz(HH) {
      let {
        cosmetics: BH
      } = HH;
      return (0, XH.jsx)("div", {
        className: "DailyDropRevealHead",
        children: (0, XH.jsx)(gh.c, {
          cosmetics: BH
        })
      })
    }

    function Vz(HH) {
      let {
        worn: BH,
        rh: LH,
        Sh: rH,
        prompting: zH,
        className: CH
      } = HH;
      const {
        t: EH
      } = (0, hH.B)(), GH = (0, AH.useRef)(null), [YH, uH] = (0, AH.useState)(null), [QH, WH] = (0, AH.useState)(!1), [MH, xH] = (0, AH.useState)(!1), vH = (0, AH.useRef)([]), PH = (0, AH.useRef)(null), TH = (0, AH.useRef)(0), VH = (0, AH.useRef)(null), OH = (0, AH.useRef)(!0), bH = (0, AH.useCallback)((() => {
        const HH = PH.current,
          BH = vH.current,
          LH = Mz(TH.current, BH),
          AH = null === LH ? null : BH[LH],
          rH = null === HH || void 0 === HH ? void 0 : HH.getContext("2d");
        HH && AH && rH && (HH.width === AH.width && HH.height === AH.height || (HH.width = AH.width, HH.height = AH.height), rH.clearRect(0, 0, HH.width, HH.height), rH.drawImage(AH, 0, 0))
      }), []);
      async function kH(HH, BH) {
        const LH = performance.now();
        let AH = 0;
        for (const rH of function() {
            let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24;
            const BH = [],
              LH = new Set;
            for (let AH = HH / 2; AH >= 1 && Number.isInteger(AH); AH /= 2)
              for (let rH = 0; rH < HH; rH += AH) LH.has(rH) || (LH.add(rH), BH.push(rH));
            for (let AH = 0; AH < HH; AH++) LH.has(AH) || BH.push(AH);
            return BH
          }()) {
          if (GH.current !== HH) break;
          if (0 !== rH && (HH.turnCamera(Wz(rH)), await new Promise((HH => {
              requestAnimationFrame((() => {
                requestAnimationFrame((() => {
                  HH()
                }))
              }))
            })), GH.current !== HH)) break;
          const LH = Pz(BH) ? null : Tz(BH);
          if (null !== LH) vH.current[rH] = LH, AH++, 0 === rH && uH("stills");
          else if (0 === rH) break
        }
        AH > 0 && console.info(`Lucky Skin Block's Before: ${AH} stills in ${Math.round(performance.now()-LH)} ms`)
      }

      function mH(HH) {
        var BH, LH;
        (null === (BH = VH.current) || void 0 === BH ? void 0 : BH.pointerId) === HH.pointerId && (VH.current = null, OH.current || (TH.current = xz(TH.current, vH.current), bH(), null === (LH = GH.current) || void 0 === LH || LH.turnCamera(TH.current)))
      }(0, AH.useEffect)((() => {
        "stills" === YH && bH()
      }), [YH, bH]), (0, AH.useEffect)((() => () => {
        for (const HH of vH.current) HH && (HH.width = 0, HH.height = 0);
        vH.current = []
      }), []);
      const oH = zH && !MH,
        IH = oH ? {
          onPointerDown: HH => {
            null === VH.current && (HH.currentTarget.setPointerCapture(HH.pointerId), VH.current = {
              pointerId: HH.pointerId,
              startX: HH.clientX,
              startTurn: TH.current
            })
          },
          onPointerMove: HH => {
            const BH = VH.current;
            var LH;
            null !== BH && BH.pointerId === HH.pointerId && (TH.current = BH.startTurn - (HH.clientX - BH.startX) * Qz, bH(), OH.current || null === (LH = GH.current) || void 0 === LH || LH.turnCamera(TH.current))
          },
          onPointerUp: mH,
          onPointerCancel: mH
        } : {};
      return (0, XH.jsxs)("div", {
        className: SH()("DailyDropRevealFigures", {
          DailyDropRevealFiguresTurnable: oH
        }, CH),
        children: [(0, XH.jsxs)("div", {
          className: "DailyDropRevealFigure",
          children: [(0, XH.jsxs)("div", {
            className: "DailyDropRevealFigureArt",
            ...IH,
            children: ["stills" === YH && (0, XH.jsx)("canvas", {
              ref: PH,
              className: "DailyDropRevealBeforeStill"
            }), "head" === YH && (0, XH.jsx)(Uz, {
              cosmetics: BH
            }), null === YH && (0, XH.jsx)(UH.d, {})]
          }), (0, XH.jsx)("span", {
            className: "DailyDropRevealFigureLabel SmallTextBold",
            children: EH("dailyDrop:before")
          })]
        }), (0, XH.jsx)(tH.c, {
          name: "arrow-right",
          className: "DailyDropRevealArrow"
        }), (0, XH.jsxs)("div", {
          className: "DailyDropRevealFigure DailyDropRevealAfter",
          children: [(0, XH.jsxs)("div", {
            className: "DailyDropRevealFigureArt",
            children: [(0, XH.jsx)("div", {
              className: SH()("DailyDropRevealLive", {
                DailyDropRevealLiveDrawn: QH
              }),
              children: (0, XH.jsx)(AH.Suspense, {
                fallback: null,
                children: (0, XH.jsx)(Zh.b, {
                  onNoWebGl: () => {
                    uH("head"), xH(!0)
                  },
                  ref: GH,
                  onReady: () => {
                    var HH, LH;
                    null === (HH = GH.current) || void 0 === HH || HH.resetCamera(), null === (LH = GH.current) || void 0 === LH || LH.setAllCosmetics(BH)
                  },
                  onDrawn: () => {
                    requestAnimationFrame((() => {
                      !async function() {
                        var HH;
                        const BH = GH.current;
                        if (!BH) return;
                        const AH = null === (HH = BH.getDevTools()) || void 0 === HH ? void 0 : HH.canvas();
                        try {
                          AH && await kH(BH, AH)
                        } catch (hH) {
                          console.warn("Couldn't read the character preview for the Lucky Skin Block's Before", hH)
                        } finally {
                          OH.current = !1
                        }
                        if (GH.current !== BH) return;
                        vH.current[0] || (console.warn("The character preview gave no front still: the Lucky Skin Block's Before shows the head"), uH("head")), null === VH.current && (TH.current = xz(TH.current, vH.current)), BH.turnCamera(TH.current), bH(), BH.updateCosmetic(LH, rH);
                        const SH = new Promise((HH => {
                          setTimeout(HH, 1e4)
                        }));
                        await Promise.race([BH.ensureReadyForCapture(LH), SH]).catch((HH => {
                          console.error("Failed to draw the Lucky Skin Block's piece on the character preview", HH)
                        })), GH.current === BH && WH(!0)
                      }()
                    }))
                  }
                })
              })
            }), MH && (LS.M.includes(LH) ? (0, XH.jsx)(Uz, {
              cosmetics: {
                ...BH,
                [LH]: rH
              }
            }) : (0, XH.jsx)("img", {
              className: "DailyDropRevealAfterPiece",
              src: `/textures/charSkins/previews/${(0,uz.h)(LH,rH).previewTex}.png`,
              alt: "",
              draggable: !1
            })), !QH && !MH && (0, XH.jsx)(UH.d, {}), (0, XH.jsx)("div", {
              className: "DailyDropRevealTurn",
              ...IH
            })]
          }), (0, XH.jsx)("span", {
            className: "DailyDropRevealFigureLabel SmallTextBold",
            children: EH("dailyDrop:after")
          })]
        })]
      })
    }
    const Oz = {
        closed: "opening",
        opening: "revealed",
        revealed: "shrinking",
        shrinking: "equip",
        equip: "equip",
        remind: "remind"
      },
      bz = {
        opening: 900,
        shrinking: 700
      };

    function kz(HH) {
      let {
        drop: BH,
        onClose: LH
      } = HH;
      const {
        t: rH
      } = (0, hH.B)(), {
        userContext: zH
      } = (0, uH.e)(), {
        state: EH,
        view: GH
      } = (0, YL.w)(), [YH, QH] = (0, AH.useState)("closed"), [WH] = (0, AH.useState)((() => ({
        ...zH.getPlayerCosmetics()
      }))), [MH] = (0, AH.useState)((() => (0, YL.h)(BH, WH))), [xH, vH] = (0, AH.useState)(!1), [PH, TH] = (0, AH.useState)(!1), [UH] = (0, AH.useState)((() => null === EH ? Promise.resolve(null) : xL(EH))), [VH, bH] = (0, AH.useState)(null), kH = (0, EL.c)(), {
        gameState: mH
      } = (0, OH.m)(["gameState"]);
      async function oH() {
        const HH = await UH;
        kH.current && (null === HH ? (LH(), async function(HH) {
          let BH = null;
          try {
            const LH = await ML();
            null === HH || HH.remindersOn || null !== WL.e.getItem(LH) || (BH = LH)
          } catch (AH) {
            console.error("Failed to tell whether Lucky Skin Block reminders were ever chosen:", AH)
          }
          if (null === BH) return void await (0, uL.j)("dailyDrop");
          const LH = BH;
          await (0, uL.j)("dailyDrop", {
            copy: {
              title: "mobilePushNotifications:optInTitle",
              subtitle: "mobilePushNotifications:offerSubtitleDailyDrop"
            },
            onAllow: () => {
              WL.e.setItem(LH, !0), PL(null)
            }
          })
        }(EH)) : ((0, uL.f)(), bH(HH), QH("remind")))
      }

      function IH(HH) {
        null !== VH && function(HH, BH) {
          WL.e.setItem(HH.askedKey, !0), (0, CL.g)(), (0, YL.q)("daily_drop.remind", BH ? "yes" : "no"), BH && PL(HH.requester)
        }(VH, HH), LH()
      }(0, AH.useEffect)((() => {
        (0, YL.q)("daily_drop.reveal_step", YH)
      }), [YH]), (0, AH.useEffect)((() => {
        const HH = bz[YH];
        if (void 0 === HH) return;
        const BH = setTimeout((() => {
          QH(Oz[YH])
        }), HH);
        return () => {
          clearTimeout(BH)
        }
      }), [YH]);
      const fH = rH(`dailyDrop:kind_${MH.rh}`),
        lH = EH && rH("dailyDrop:collected", {
          count: EH.collected.length,
          total: EH.total
        }),
        KH = "revealed" === YH || "shrinking" === YH,
        cH = "equip" !== YH && "remind" !== YH;
      return (0, XH.jsx)(Vr.b, {
        className: "DailyDropRevealScreen",
        close: "remind" === YH ? () => {
          IH(!1)
        } : LH,
        togglePointerLock: !1,
        closeOnPressBackground: !1,
        children: (0, XH.jsxs)("div", {
          className: SH()("DailyDropReveal", {
            DailyDropRevealOpening: "opening" === YH,
            DailyDropRevealShrinking: "shrinking" === YH,
            DailyDropRevealFiguresShown: "shrinking" === YH || "equip" === YH || "remind" === YH
          }),
          children: [(0, XH.jsxs)("div", {
            className: "DailyDropRevealStage",
            children: [(0, XH.jsx)(Vz, {
              className: "DailyDropRevealStageFigures",
              worn: WH,
              rh: MH.rh,
              Sh: MH.Sh,
              prompting: !cH
            }), ("closed" === YH || "opening" === YH) && (0, XH.jsx)(Gz.e, {
              className: "DailyDropRevealBlock",
              open: "opening" === YH
            }), KH && (0, XH.jsx)("div", {
              className: "DailyDropRevealPiece",
              children: (0, XH.jsx)("img", {
                src: `/textures/charSkins/previews/${(0,uz.h)(MH.rh,MH.Sh).previewTex}.png`,
                alt: fH,
                draggable: !1
              })
            })]
          }), cH && (0, XH.jsxs)(XH.Fragment, {
            children: [(0, XH.jsxs)("div", {
              className: "DailyDropRevealCaption",
              children: [(0, XH.jsx)("div", {
                className: "DailyDropRevealTitle SmallTextBold",
                children: KH ? fH : rH("dailyDrop:name")
              }), "closed" === YH && (0, XH.jsx)("div", {
                className: "DailyDropRevealHint SmallTextLight",
                children: rH("dailyDrop:tapToOpen")
              }), "revealed" === YH && (0, XH.jsx)("div", {
                className: "DailyDropRevealHint SmallTextLight",
                children: rH("dailyDrop:tapToContinue")
              })]
            }), (0, XH.jsx)("button", {
              type: "button",
              className: "DailyDropRevealTap",
              "data-pad-default-focus": !0,
              "aria-label": rH("closed" === YH ? "dailyDrop:tapToOpen" : "dailyDrop:tapToContinue"),
              onClick: () => {
                QH(Oz[YH])
              }
            })]
          }), "equip" === YH && (0, XH.jsxs)("div", {
            className: "DailyDropRevealEquip",
            children: [(0, XH.jsx)("div", {
              className: "DailyDropRevealKind SmallTextLight",
              children: fH
            }), (0, XH.jsx)("div", {
              className: "DailyDropRevealQuestion SmallTextBold",
              children: rH("dailyDrop:equipQuestion")
            }), (0, XH.jsxs)("div", {
              className: "DailyDropRevealButtons",
              children: [(0, XH.jsx)(CH.i, {
                className: "DailyDropRevealButton",
                disabled: xH,
                touchPressOn: "pointerup",
                onClick: () => {
                  (0, YL.q)("daily_drop.not_now", BH), oH()
                },
                children: rH("dailyDrop:notNow")
              }), (0, XH.jsx)(CH.i, {
                className: "DailyDropRevealButton",
                loading: xH,
                padDefaultFocus: !0,
                touchPressOn: "pointerup",
                onClick: () => {
                  !async function() {
                    (0, YL.q)("daily_drop.equip", BH), vH(!0), TH(!1);
                    try {
                      await (0, YL.g)(zH, MH.rh, MH.Sh)
                    } catch (HH) {
                      return console.error("Failed to equip the Lucky Skin Block's piece", HH), vH(!1), void TH(!0)
                    }
                    await oH()
                  }()
                },
                children: rH("dailyDrop:equip")
              })]
            }), PH && (0, XH.jsx)("div", {
              className: "DailyDropRevealError SmallTextBold",
              children: rH("dailyDrop:equipFailed")
            }), !(0, OH.g)(mH) && (0, XH.jsxs)("button", {
              type: "button",
              className: "DailyDropRevealCustomise",
              disabled: xH,
              onClick: () => {
                var HH;
                (0, YL.q)("daily_drop.customise", BH), HH = MH.rh, KL.k.AX(Wr, HH), OH.c.set({
                  openEverythingMenuName: fB.o.CUSTOMISATION
                }), LH()
              },
              children: [rH("dailyDrop:customise"), " ", (0, XH.jsx)(tH.c, {
                name: "arrow-right",
                className: "DailyDropRevealCustomiseArrow"
              })]
            }), lH && (0, XH.jsxs)("div", {
              className: "DailyDropRevealProgress SmallTextLight",
              children: [lH, "waiting" === (null === GH || void 0 === GH ? void 0 : GH.kind) && ` \xb7 ${rH("dailyDrop:nextInInline",{count:GH.hours})}`]
            })]
          }), "remind" === YH && (0, XH.jsxs)("div", {
            className: "DailyDropRevealEquip",
            children: [(0, XH.jsx)("div", {
              className: "DailyDropRevealQuestion SmallTextBold",
              children: rH("dailyDrop:remindTitle")
            }), (0, XH.jsx)("div", {
              className: "DailyDropRevealKind SmallTextLight",
              children: rH("dailyDrop:remindSubtitle")
            }), (0, XH.jsxs)("div", {
              className: "DailyDropRevealButtons",
              children: [(0, XH.jsx)(CH.i, {
                className: "DailyDropRevealButton",
                padDefaultFocus: !0,
                touchPressOn: "pointerup",
                onClick: () => {
                  IH(!1)
                },
                children: rH("dailyDrop:remindNo")
              }), (0, XH.jsx)(CH.i, {
                className: "DailyDropRevealButton",
                touchPressOn: "pointerup",
                onClick: () => {
                  IH(!0)
                },
                children: rH("dailyDrop:remindYes")
              })]
            })]
          })]
        })
      })
    }

    function mz(HH, BH) {
      const {
        t: LH
      } = (0, hH.B)(), rH = function(HH, BH) {
        const {
          state: LH,
          view: rH
        } = (0, YL.w)(), [SH, hH] = (0, AH.useState)(!1), [tH, zH] = (0, AH.useState)(!1), [CH, EH] = (0, AH.useState)(null), XH = (0, AH.useRef)(null), GH = (0, AH.useRef)(!1), YH = BH && "ready" === (null === rH || void 0 === rH ? void 0 : rH.kind);
        (0, AH.useEffect)((() => {
          HH ? YH && !GH.current && (GH.current = !0, (0, YL.q)("daily_drop.shown", "tile")) : GH.current = !1
        }), [HH, YH]), (0, AH.useEffect)((() => {
          HH || (MH(), zH(!1))
        }), [HH]);
        const uH = HH && null === CH && !(0, YL.o)(rH);
        (0, AH.useEffect)((() => {
          uH && OH.c.set({
            openEverythingMenuName: fB.o.CUSTOMISATION
          })
        }), [uH]);
        const QH = (0, AH.useRef)(!1),
          WH = (0, AH.useRef)(HH);

        function MH() {
          null !== XH.current && (XH.current = null, EH(null))
        }
        return WH.current = HH, {
          state: LH,
          view: rH,
          claiming: SH,
          claimFailed: tH,
          reveal: CH,
          open: async function() {
            if (!QH.current) {
              QH.current = !0, hH(!0), zH(!1);
              try {
                const {
                  state: HH,
                  drop: BH
                } = await (0, YL.c)();
                if (null === HH || null === BH) return;
                if (!WH.current) return;
                (0, YL.q)("daily_drop.open", BH), XH.current = {
                  state: HH,
                  drop: BH
                }, EH(XH.current)
              } catch (HH) {
                console.error("Failed to claim the Lucky Skin Block", HH), WH.current && zH(!0)
              } finally {
                QH.current = !1, hH(!1)
              }
            }
          },
          closeReveal: MH
        }
      }(HH, BH);
      return {
        shown: (0, YL.o)(rH.view) || null !== rH.reveal,
        tile: rH.state && rH.view && (0, XH.jsx)(Yz, {
          state: rH.state,
          view: rH.view,
          claiming: rH.claiming,
          onOpen: rH.open
        }),
        claimFailed: rH.claimFailed && (0, XH.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: LH("dailyDrop:claimFailed")
        }),
        reveal: rH.reveal && (0, XH.jsx)(kz, {
          drop: rH.reveal.drop,
          onClose: rH.closeReveal
        })
      }
    }

    function oz(HH) {
      let {
        show: BH
      } = HH;
      const LH = mz(BH, BH);
      return (0, zB.C)(BH && LH.shown, (0, zB.G)(), (HH => {
        (0, YL.q)("daily_drop.store_only_open", HH)
      })), BH && LH.shown ? (0, XH.jsxs)("div", {
        className: "Store StoreDailyDropOnly",
        children: [LH.claimFailed, LH.tile && (0, XH.jsx)("div", {
          className: "StoreDailyDropOnlyTile",
          children: LH.tile
        }), LH.reveal]
      }) : null
    }
    var Iz = LH(2771),
      fz = LH(35028),
      lz = LH(35037);

    function Kz(HH) {
      let {
        view: BH,
        highlight: LH,
        scrollSignal: rH,
        onScrolledIntoView: SH
      } = HH;
      const {
        t: tH
      } = (0, hH.B)(), {
        purchaseUnderWay: zH,
        notice: CH,
        needsLogin: EH,
        buyPack: GH
      } = (0, lz.e)("banner");
      (0, Iz.V)(BH.arm, "banner");
      const YH = (0, AH.useRef)(null);
      return (0, AH.useEffect)((() => {
        var HH;
        rH > 0 && (null === (HH = YH.current) || void 0 === HH || HH.scrollIntoView({
          block: "nearest"
        }), SH())
      }), [rH]), (0, XH.jsxs)("div", {
        ref: YH,
        className: "NewPlayerDealBanner",
        children: [(0, XH.jsxs)("div", {
          className: "NewPlayerDealBannerHead",
          children: [(0, XH.jsx)("div", {
            className: "NewPlayerDealBannerTitle",
            children: tH("newPlayerDeal:title")
          }), (0, XH.jsx)(fz.b, {
            endsAt: BH.endsAt
          })]
        }), (0, XH.jsx)(fz.c, {
          view: BH,
          needsLogin: EH,
          busy: zH,
          highlight: LH,
          onBuy: HH => {
            GH(BH, HH)
          }
        }), (0, XH.jsx)(ot.e, {
          notice: CH,
          className: "SmallTextBold NewPlayerDealNotice"
        })]
      })
    }
    LH(35030);
    var cz = LH(2780);

    function ez(HH) {
      let {
        wallet: BH,
        close: LH
      } = HH;
      const {
        t: AH
      } = (0, hH.B)();
      return (0, XH.jsxs)("div", {
        className: "NewPlayerDealGiftNotice",
        children: [(0, XH.jsxs)("div", {
          className: "NewPlayerDealGiftNoticeRows",
          children: [(0, XH.jsx)("span", {
            children: AH("newPlayerDeal:giftable")
          }), (0, XH.jsx)(wh.e, {
            amount: (0, vh.e)(BH)
          }), (0, XH.jsx)("span", {
            children: AH("newPlayerDeal:ungiftable")
          }), (0, XH.jsx)(wh.e, {
            amount: BH.ungiftable
          })]
        }), (0, XH.jsx)("div", {
          className: "NewPlayerDealGiftNoticeWhy",
          children: AH("newPlayerDeal:ungiftableWhy")
        }), (0, XH.jsx)(CH.u, {
          className: "NewPlayerDealGiftNoticeOk",
          onClick: LH,
          children: AH("general:ok")
        })]
      })
    }

    function qz(HH) {
      rB.NotificationProvider.showCustomPopup({
        body: BH => (0, XH.jsx)(ez, {
          wallet: HH,
          close: BH
        }),
        middleScreenPopupClassName: "NewPlayerDealGiftNoticePopup",
        disableExitButton: !0
      })
    }
    const gz = {
      kind: "board"
    };
    let Nz = !1;

    function Rz(HH) {
      return "found" === HH.status || "error" === HH.status && "store:giftRecipientLookupFailed" === HH.error ? HH.name : null
    }(0, zB.t)(pH.prefetchBillingOfferings);
    const jz = (0, AH.memo)((function(HH) {
      var BH;
      let {
        show: rH
      } = HH;
      const {
        t: tH
      } = (0, hH.B)(), {
        userContext: zH
      } = (0, uH.e)(), CH = (0, DH.usePurchasesAllowed)(), EH = zH !== oH.NULL_USER_CONTEXT, GH = oh(zH, rH), [YH, QH] = (0, WH.b)(), {
        page: MH,
        urlMode: xH,
        goTo: vH
      } = (0, Ih.h)(), PH = function(HH) {
        return "superRank" === HH.kind ? "superRank" : "pack" === HH.kind ? HH.pack : null
      }(MH), {
        openEverythingMenuName: TH,
        gameState: UH
      } = (0, OH.m)(["openEverythingMenuName", "gameState"]), VH = null !== TH;
      ! function(HH, BH) {
        const [rH] = (0, AH.useState)(Kh.l), [SH, hH] = (0, AH.useState)(!1);
        rH && BH && !SH && hH(!0);
        const tH = (0, aA.y)(),
          zH = rH && SH && HH && !tH;
        (0, AH.useEffect)((() => {
          if (!zH) return;
          let HH = null,
            BH = null,
            AH = null;
          const rH = () => !document.hasFocus() || document.activeElement instanceof HTMLIFrameElement || (0, yH.getBillingClient)().purchaseUnderWay,
            SH = () => {
              var LH;
              null === (LH = AH) || void 0 === LH || LH(), AH = null, null !== HH && (clearTimeout(HH), HH = null), null !== BH && (clearTimeout(BH), BH = null)
            },
            hH = () => {
              (0, fh.q)(!1), (0, fh.m)(!1), SH(), HH = setTimeout((() => {
                HH = null, AH = (0, lh.d)((() => {
                  AH = null, rH() ? hH() : ((0, fh.q)(!0), BH = setTimeout((() => {
                    BH = null, AH = (0, lh.d)((() => {
                      AH = null, rH() ? hH() : (0, fh.m)(!0)
                    }))
                  }), 3e3), Promise.resolve().then((() => LH(5069))).then((HH => {
                    HH.startBackgroundGameSetup()
                  }), (HH => {
                    console.warn("Background game setup: its chunk failed to load", HH)
                  })))
                }))
              }), 2e3)
            };
          for (const LH of ch) window.addEventListener(LH, hH, {
            capture: !0,
            passive: !0
          });
          return hH(), () => {
            for (const HH of ch) window.removeEventListener(HH, hH, {
              capture: !0
            });
            SH(), (0, fh.q)(!1), (0, fh.m)(!1)
          }
        }), [zH])
      }(rH && VH, "pack" === MH.kind);
      const bH = "landingPage" === UH;
      (0, AH.useEffect)((() => {
        VH && (0, pH.prefetchBillingOfferings)()
      }), [VH]), (0, AH.useEffect)((() => {
        VH && !rH && bH && (0, eh.s)()
      }), [VH, rH, bH]);
      const [kH, mH] = (0, AH.useState)(0), [IH, fH] = (0, AH.useState)(null), [lH, KH] = (0, AH.useState)(null), [cH, eH] = (0, AH.useState)(null), [qH, gH] = (0, AH.useState)(null), [RH, nH] = (0, AH.useState)(0), FH = (0, AH.useRef)(null), wH = (0, AH.useRef)(null), ZH = (0, AH.useRef)(null), dH = (0, AH.useRef)(!1), aH = (0, zB.G)(), sH = (0, AH.useRef)(0);

      function JH() {
        mH((HH => HH + 1))
      }(0, AH.useEffect)((() => {
        if (rH) {
          if (Nz = !0, (0, zB.j)(), aH && aH.seq !== sH.current) {
            var HH;
            sH.current = aH.seq, "loginResume" !== aH.source && (0, zB.z)();
            const BH = (0, zB.d)(aH);
            xH || vH(BH), gH(null !== (HH = aH.highlight) && void 0 !== HH ? HH : null);
            const LH = "newPlayerDeal" === aH.source || "loginResume" === aH.source && void 0 !== aH.highlight && (0, Iz.h)(zH).includes(aH.highlight);
            nH((HH => LH ? HH + 1 : 0)), KH(null), "gift" === aH.mode && aH.giftRecipientName ? GH.choose(aH.giftRecipientName, "prefilled") : GH.clear(), "gift" !== aH.mode || aH.giftRecipientName || JH()
          }
        } else nH(0)
      }), [rH, aH]), (0, zB.C)(rH, aH, (HH => {
        (0, WB.reportAnalyticsClick)({
          id: "store.open",
          value: HH
        })
      }));
      const iH = (0, Iz.S)(),
        HB = null !== qH && null === iH && null === (0, Iz.j)((0, Iz.e)(zH)) && (0, Iz.h)(zH).includes(qH);
      (0, AH.useEffect)((() => {
        if (!qH) return;
        const HH = setTimeout((() => {
          gH(null)
        }), HB ? 15e3 : 4e3);
        return () => {
          clearTimeout(HH)
        }
      }), [qH, HB]), (0, AH.useLayoutEffect)((() => {
        const HH = FH.current;
        if (!rH || !HH) return wH.current = null, void(ZH.current = null);
        var BH;
        if (PH) wH.current = PH, null === (BH = HH.querySelector(".StoreDetailBackButton, .CosmeticShopDetailBackButton")) || void 0 === BH || BH.focus();
        else if (wH.current) {
          const BH = ZH.current;
          null !== BH && (HH.scrollTop = BH);
          const LH = HH.querySelector(`[data-store-item="${wH.current}"]`);
          if (LH) {
            const AH = LH.getBoundingClientRect(),
              rH = HH.getBoundingClientRect();
            LH.focus({
              preventScroll: null !== BH && AH.bottom > rH.top && AH.top < rH.bottom
            })
          }
          wH.current = null
        }
      }), [PH, rH]), (0, AH.useEffect)((() => {
        KH(null)
      }), [GH.query]), (0, AH.useEffect)((() => {
        if (!cH) return;
        const HH = setTimeout((() => {
          eH(null)
        }), 8e3);
        return () => {
          clearTimeout(HH)
        }
      }), [cH]);
      const BB = zH.superRankInfo,
        LB = zH.isLoggedIn() || (0, DH.guestsMayBuy)(),
        AB = zH.getOwnedCosmeticPacks(),
        rB = (0, Oh.p)(GH.query),
        SB = (0, Oh.e)({
          mode: rB,
          loggedIn: EH ? LB : null,
          superRankInfo: BB,
          soldTierId: (0, jH.v)(Date.now()).product.tierId,
          now: Date.now(),
          ownedPacks: AB,
          packs: Qh.o,
          recipient: GH.recipient
        });
      (0, AH.useEffect)((() => {
        if (!LB || !rH) return;
        const HH = (0, Iz.h)(zH),
          BH = (0, zB.z)((BH => !HH.includes(BH.item))),
          LH = BH && (0, Oh.l)(BH, Qh.o);
        BH && LH && ((0, WB.reportAnalyticsClick)({
          id: "store.login_resume",
          value: BH.item
        }), (0, zB.k)(LH))
      }), [LB, rH]);
      const hB = rH && "gift" === rB,
        tB = (0, AH.useRef)(hB);
      tB.current = hB;
      const CB = "none" !== GH.recipient.status,
        EB = (0, AH.useRef)(!1);
      (0, AH.useEffect)((() => {
        hB ? CB && !EB.current && (EB.current = !0, async function(HH) {
          var BH;
          if ("gift" === (null === (BH = (0, cz.k)()) || void 0 === BH ? void 0 : BH.show)) return void qz(cz.e);
          const LH = await (0, vh.g)();
          null !== LH && LH.ungiftable > 0 && HH() && qz(LH)
        }((() => tB.current))) : EB.current = !1
      }), [hB, CB]);
      const XB = (0, Oh.s)({
        superRankDaysLeft: SB.superRankDaysLeft,
        openedThisSession: Nz || rH,
        seenNewItems: (0, zB.h)()
      });
      (0, AH.useEffect)((() => {
        (0, zB.v)(XB)
      }), [XB]);
      const GB = "self" === rB,
        YB = mz(rH, rH && GB && "board" === MH.kind);
      if (!rH || !CH) return null;
      const uB = QH > YH && YH <= 700,
        QB = !uB && QH <= 420,
        MB = "gift" === rB ? Rz(GH.recipient) : null,
        xB = null !== IH,
        vB = "gift" === rB ? {
          name: MB,
          cosmetics: GH.recipientCosmetics,
          gift: !0
        } : {
          name: EH && zH.getPlayerName() || null,
          cosmetics: zH.getPlayerCosmetics(),
          gift: !1
        };

      function PB(HH) {
        (0, xh.d)(HH, "gift" === rB ? GH.query.trim() : null)
      }

      function TB(HH, BH) {
        (0, WB.reportAnalyticsClick)({
          id: "store.purchase_done",
          value: `${BH?"gift":"self"}:${HH}`
        }), BH && (GH.recordGift(BH.name, HH), UB(BH))
      }

      function UB(HH) {
        ! function(HH) {
          try {
            WL.e.setItem(bh, (0, Oh.A)(mh(), HH))
          } catch {}
        }({
          name: HH.name,
          cosmetics: HH.cosmetics
        }), vH(gz), eH((BH => {
          var LH;
          return {
            name: HH.name,
            seq: (null !== (LH = null === BH || void 0 === BH ? void 0 : BH.seq) && void 0 !== LH ? LH : 0) + 1
          }
        }))
      }
      async function VB(HH) {
        var BH, LH;
        if (dH.current) return;
        if (!LB) return void PB(HH);
        KH(null), gH(null);
        const AH = "gift" === rB ? {
          name: Rz(GH.recipient),
          cosmetics: GH.recipientCosmetics
        } : null;
        if (AH && !AH.name) return void JH();
        const rH = "superRank" === HH ? (0, jH.v)(Date.now()).id : (0, Wh.b)(HH);
        dH.current = !0;
        const SH = await (0, Vh.b)(rH, null !== (BH = null === AH || void 0 === AH ? void 0 : AH.name) && void 0 !== BH ? BH : null);
        if (dH.current = !1, !SH) return;
        fH(HH);
        const hH = await vh.h.purchase(rH, null !== (LH = null === AH || void 0 === AH ? void 0 : AH.name) && void 0 !== LH ? LH : null);
        fH(null), hH ? KH(hH) : (TB(HH, AH), AH || (await (0, Ph.flushClientAnalyticsEvents)(), (0, Mh.refreshWithoutConfirmation)("superRank" === HH ? "/super-rank-welcome" : `/pack-welcome/${HH}`)))
      }
      const OB = SH()("Store", {
        StoreGift: "gift" === rB,
        StorePortrait: uB,
        StoreCompact: QB
      });
      if ("pack" === MH.kind) {
        const HH = MH.pack,
          BH = SB.packs.find((BH => BH.pack === HH));
        return (0, XH.jsx)("div", {
          ref: FH,
          className: "CosmeticShopContainer",
          children: (0, XH.jsx)(Uh.g, {
            pack: HH,
            onBack: () => {
              vH(gz)
            },
            onPurchased: BH => {
              TB(HH, BH ? {
                name: BH,
                cosmetics: null
              } : null)
            },
            giftCta: "gift" === rB && MB && BH && (0, XH.jsxs)(XH.Fragment, {
              children: [(0, XH.jsx)(At, {
                state: BH.state,
                item: HH,
                price: (bB = HH, "superRank" === bB ? (0, jH.v)(Date.now()).price : (0, Wh.f)(bB)),
                busy: xB,
                onAct: () => {
                  VB(HH)
                },
                onNeedRecipient: () => {
                  vH(gz), JH()
                },
                onLogin: () => {
                  PB(HH)
                },
                highlight: qH === HH
              }), lH && (0, XH.jsx)("span", {
                className: "CosmeticShopGiftError SmallTextBold",
                children: tH(lH)
              })]
            }),
            ownedPacks: AB,
            startAsGift: "gift" === rB,
            initialGiftRecipient: "gift" === rB ? null !== MB && void 0 !== MB ? MB : GH.query.trim() : "",
            highlightCta: qH === HH
          }, HH)
        })
      }
      var bB;
      return "superRank" === MH.kind ? (0, XH.jsx)("div", {
        ref: FH,
        className: SH()(OB, "StoreDetailView"),
        children: (0, XH.jsx)(hz, {
          state: SB.superRank.state,
          daysLeft: SB.superRankDaysLeft,
          wearer: vB,
          mode: rB,
          giftName: MB,
          busy: xB,
          highlight: "superRank" === qH,
          purchaseError: lH,
          onBack: () => {
            vH(gz)
          },
          onChooseRecipient: () => {
            vH(gz), JH()
          },
          onAct: () => {
            VB("superRank")
          },
          onLogin: () => {
            PB("superRank")
          }
        })
      }) : (0, XH.jsxs)("div", {
        ref: FH,
        className: OB,
        onScroll: HH => {
          ZH.current = HH.currentTarget.scrollTop
        },
        children: [(0, XH.jsx)("div", {
          className: "StoreTopRow",
          children: (0, XH.jsx)(Fh, {
            selfName: EH ? zH.getPlayerName() : "",
            giftRecipient: GH,
            suggestionsVersion: null !== (BH = null === cH || void 0 === cH ? void 0 : cH.seq) && void 0 !== BH ? BH : 0,
            pulseSignal: kH,
            disabled: xB || !EH
          })
        }), cH && (0, XH.jsxs)("div", {
          className: "StoreNotice StoreNoticeGiftSent",
          onClick: () => {
            eH(null)
          },
          children: [(0, XH.jsx)(Th.e, {
            showSignal: cH.seq
          }), Oh.d, " ", tH("store:giftSent", {
            name: cH.name
          })]
        }, cH.seq), !cH && lH && (0, XH.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: tH(lH)
        }), GB && YB.claimFailed, (0, XH.jsx)(rz, {
          layout: SB,
          mountAtOnce: null !== wH.current,
          bundleGift: "gift" === rB ? {
            recipientName: MB,
            lookingUp: "pending" === GH.recipient.status,
            busy: xB,
            onNeedRecipient: JH,
            onSent: HH => {
              (0, WB.reportAnalyticsClick)({
                id: "store.purchase_done",
                value: "gift:superGems"
              }), UB({
                name: HH,
                cosmetics: GH.recipientCosmetics
              })
            }
          } : null,
          superRankTotalDays: (0, Oh.v)(BB),
          busy: xB,
          highlightItem: qH,
          onOpen: function(HH) {
            (0, WB.reportAnalyticsClick)({
              id: "store.item_open",
              value: HH
            }), vH((0, zB.g)(HH))
          },
          onAct: VB,
          onNeedRecipient: JH,
          onLogin: PB,
          dailyDropTile: GB && YB.tile,
          rankWearer: vB,
          dealBanner: "self" === rB && null !== iH && (0, XH.jsx)(Kz, {
            view: iH,
            highlight: qH,
            scrollSignal: RH,
            onScrolledIntoView: () => {
              nH(0)
            }
          })
        }), "gift" !== rB && !(0, NH.c)(Date.now()) && (0, XH.jsx)(Ez, {}), YB.reveal]
      })
    }));
    var nz = LH(2926),
      Fz = LH(9537),
      Dz = LH(9356),
      wz = LH(3015),
      Zz = LH(2820),
      dz = LH(2877),
      az = LH(2893),
      sz = LH(2895),
      Jz = LH(2968),
      iz = LH(2954),
      pz = LH(2513),
      yz = LH(2587),
      HC = LH(2536),
      BC = LH(2108),
      LC = LH(2899),
      AC = LH(2596);

    function rC(HH) {
      let {
        show: BH
      } = HH;
      return BH ? (0, XH.jsx)(SC, {}) : null
    }

    function SC() {
      const {
        t: HH
      } = (0, hH.B)(), {
        followsLeader: BH
      } = (0, Zz.g)(), {
        loading: LH,
        friends: rH,
        requests: zH,
        invites: EH
      } = (0, aH.l)(), {
        userContext: GH
      } = (0, uH.e)(), [YH, QH] = (0, AH.useState)(AC.i);
      (0, AH.useEffect)((() => {
        (0, AC.e)()
      }), []);
      const WH = zH.map((HH => HH.name)),
        {
          state: MH,
          recentRequesters: xH
        } = (0, iz.n)(),
        vH = new Map([...("loaded" === MH.status ? MH.recentPlayers : []).map((HH => [HH.preview.name, HH])), ...xH.map((HH => [HH.name, HH]))]),
        PH = (0, AH.useRef)(null),
        [VH, OH] = (0, AH.useState)(""),
        [bH, kH] = (0, AH.useState)("Enter"),
        [mH, oH] = (0, AH.useState)(null);

      function IH() {
        VH && (kH("Loading"), (0, HC.j)(VH, "social_menu").then((HH => {
          if (PH.current) switch (HH.kind) {
            case "sent":
              kH("Success");
              break;
            case "becameFriends":
              kH("BecameFriends");
              break;
            case "failed":
              oH(HH.message), kH("Error")
          }
        })))
      }
      return (0, AH.useEffect)((() => {
        if ("Enter" === bH || "Loading" === bH) return;
        const HH = setTimeout((() => {
          PH.current.value = "", OH(""), kH("Enter")
        }), "Success" === bH ? 1e3 : 4e3);
        return () => {
          clearTimeout(HH)
        }
      }), [bH]), (0, XH.jsx)("div", {
        className: "SocialMenu",
        children: (0, XH.jsxs)("div", {
          className: "SocialMenuInner",
          children: [(0, XH.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, XH.jsxs)("div", {
              className: "SocialMenuBox SocialMenuAddFriend",
              children: [(0, XH.jsx)(sz.b, {
                label: HH("socialBar:addFriend")
              }), (0, XH.jsxs)("div", {
                className: "AddFriendBody",
                children: [(0, XH.jsxs)("div", {
                  className: SH()("AddFriendBodyOverlay", {
                    [`AddFriendBodyOverlay${bH}`]: !0
                  }),
                  children: ["Loading" === bH && (0, XH.jsx)(UH.d, {}), "Success" === bH && (0, XH.jsx)(tH.c, {
                    name: "check"
                  }), "BecameFriends" === bH && (0, XH.jsx)(XH.Fragment, {
                    children: HH("socialBar:nowFriends", {
                      playerName: VH
                    })
                  }), "Error" === bH && mH && (0, XH.jsx)(XH.Fragment, {
                    children: HH(mH.translationKey, mH.params)
                  })]
                }), (0, XH.jsxs)("div", {
                  className: "PlayerSearch",
                  children: [(0, XH.jsx)(TH.e, {
                    className: "PlayerSearchInput",
                    placeholderText: HH("socialBar:enterPlayerName"),
                    domRef: PH,
                    onValueChange: HH => {
                      OH((0, KH.n)(HH)), PH.current.value = (0, KH.n)(HH)
                    },
                    onEnter: () => {
                      VH && (0, WB.reportAnalyticsClick)({
                        id: "social.add_friend",
                        value: "social_menu"
                      }), IH()
                    }
                  }), (0, XH.jsxs)(CH.i, {
                    className: "PlayerSearchInputButton SmallTextLight",
                    onClick: () => {
                      IH()
                    },
                    analyticsClick: {
                      id: "social.add_friend",
                      value: "social_menu"
                    },
                    children: [(0, XH.jsx)(tH.c, {
                      name: "user-plus"
                    }), " ", HH("socialBar:sendRequest")]
                  })]
                })]
              }), (0, XH.jsx)(LC.d, {
                surface: "social_menu",
                prefetchOnMount: !0
              })]
            }), EH.length > 0 && (0, XH.jsxs)("div", {
              className: "SocialMenuBox SocialMenuInvites",
              children: [(0, XH.jsx)(sz.b, {
                label: HH("socialBar:invites"),
                meta: EH.length
              }), EH.map((BH => (0, XH.jsxs)("div", {
                className: "SocialMenuInvite",
                children: [(0, XH.jsx)("div", {
                  className: "SocialMenuInviteIcon",
                  children: (0, XH.jsx)(pz.b, {
                    invite: BH
                  })
                }), (0, XH.jsx)("div", {
                  className: "SocialMenuInviteText",
                  children: (0, XH.jsx)(pz.d, {
                    invite: BH
                  })
                }), (0, XH.jsx)(CH.u, {
                  className: "SocialMenuInviteJoin SmallTextLight",
                  onClick: () => {
                    (0, yz.g)(BH)
                  },
                  analyticsClick: {
                    id: "social.accept_invite",
                    value: `social_menu:${BH.destination.kind}`
                  },
                  children: HH("general:join")
                }), (0, XH.jsx)(YB.g, {
                  tooltipInner: (0, XH.jsx)(XH.Fragment, {
                    children: HH("general:decline")
                  }),
                  delayShow: 0,
                  children: (0, XH.jsx)(CH.m, {
                    className: "SocialMenuInviteDecline",
                    padDefaultFocus: "invite" === (null === YH || void 0 === YH ? void 0 : YH.kind) && YH.inviteId === BH.id,
                    onClick: () => {
                      aH.d.declineInvite(BH.id)
                    },
                    analyticsClick: {
                      id: "social.decline_invite",
                      value: `social_menu:${BH.destination.kind}`
                    },
                    children: (0, XH.jsx)(tH.c, {
                      name: "xmark"
                    })
                  })
                })]
              }, BH.id)))]
            }), (0, XH.jsxs)("div", {
              className: SH()("SocialMenuBox SocialMenuRequests", {
                SocialMenuBoxEmpty: !LH && 0 === zH.length
              }),
              children: [(0, XH.jsx)(sz.b, {
                label: (0, XH.jsxs)(XH.Fragment, {
                  children: [(0, XH.jsx)(tH.c, {
                    name: BC.g
                  }), " ", HH("socialBar:requests")]
                }),
                meta: (0, XH.jsxs)(XH.Fragment, {
                  children: [zH.length, zH.length === uB.l && (0, XH.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: HH("socialBar:limitReached")
                  })]
                })
              }), LH && (0, XH.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, XH.jsx)(UH.d, {})
              }), !LH && 0 === zH.length && (0, XH.jsx)("div", {
                className: "SocialMenuEmpty",
                children: HH("socialBar:noFriendRequests")
              }), !LH && zH.length > 0 && (0, XH.jsx)("div", {
                className: "PlayerRows",
                children: (0, XH.jsx)(vS.e, {
                  lazyLoadedClassName: "SocialMenuRequestsLazy",
                  observerUpdateDeps: [zH],
                  children: zH.map(((BH, LH) => {
                    const AH = vH.get(BH.name);
                    return (0, XH.jsxs)(az.d, {
                      playerSocialPreview: BH,
                      zIndex: zH.length - LH,
                      padDefaultFocus: (0, AC.g)(YH, BH.name, LH),
                      status: AH && (0, XH.jsx)(Jz.e, {
                        gameNameWithVariation: AH.gameNameWithVariation,
                        isPrivateLobby: AH.isPrivateLobby
                      }),
                      children: [(0, XH.jsx)(YB.g, {
                        tooltipInner: (0, XH.jsx)(XH.Fragment, {
                          children: HH("general:accept")
                        }),
                        delayShow: 0,
                        children: (0, XH.jsx)(CH.i, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            QH((0, AC.f)(WH, LH)), (0, HC.f)(BH.name, !0, {
                              source: "social_menu",
                              announceFriend: !1
                            })
                          },
                          analyticsClick: {
                            id: "social.accept_friend_request",
                            value: "social_menu"
                          },
                          children: (0, XH.jsx)(tH.c, {
                            name: "check"
                          })
                        })
                      }), (0, XH.jsx)(YB.g, {
                        tooltipInner: (0, XH.jsx)(XH.Fragment, {
                          children: HH("general:decline")
                        }),
                        delayShow: 0,
                        children: (0, XH.jsx)(CH.m, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            QH((0, AC.f)(WH, LH)), (0, HC.f)(BH.name, !1, {
                              source: "social_menu"
                            })
                          },
                          analyticsClick: {
                            id: "social.decline_friend_request",
                            value: "social_menu"
                          },
                          children: (0, XH.jsx)(tH.c, {
                            name: "xmark"
                          })
                        })
                      })]
                    }, `${BH.name}_${BH.isError}`)
                  }))
                })
              })]
            }), (0, XH.jsx)(Jz.k, {})]
          }), (0, XH.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, XH.jsxs)("div", {
              className: "SocialMenuBox SocialMenuParty",
              children: [(0, XH.jsx)(sz.b, {
                label: HH("socialBar:party")
              }), (0, XH.jsx)(dz.b, {})]
            }), (0, XH.jsxs)("div", {
              className: "SocialMenuBox SocialMenuFriends",
              children: [(0, XH.jsx)(sz.b, {
                label: (0, XH.jsxs)(XH.Fragment, {
                  children: [(0, XH.jsx)(tH.c, {
                    name: BC.e
                  }), " ", HH("socialBar:friends")]
                }),
                meta: (0, XH.jsxs)(XH.Fragment, {
                  children: [rH.length, rH.length >= (0, uB.b)(GH.getPlayerRanks()) && (0, XH.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: HH("socialBar:limitReached")
                  })]
                })
              }), LH && (0, XH.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, XH.jsx)(UH.d, {})
              }), !LH && 0 === rH.length && (0, XH.jsx)("div", {
                className: "SocialMenuEmpty",
                children: HH("socialBar:noFriends")
              }), !LH && rH.length > 0 && (0, XH.jsx)("div", {
                className: "PlayerRows",
                children: (0, XH.jsx)(vS.e, {
                  lazyLoadedClassName: "SocialMenuFriendsLazy",
                  observerUpdateDeps: [rH],
                  children: rH.map(((HH, LH) => (0, XH.jsx)(az.d, {
                    playerSocialPreview: HH,
                    isFriend: !0,
                    hideFriendBadge: !0,
                    onFriendRemoved: HH => {
                      aH.d.removeFriendFromState(HH)
                    },
                    zIndex: rH.length - LH,
                    children: (0, XH.jsx)(az.c, {
                      friend: HH,
                      followsLeader: BH,
                      analyticsSurface: "social_menu"
                    })
                  }, `${HH.name}_${HH.isError}`)))
                })
              })]
            })]
          })]
        })
      })
    }
    var hC = LH(2724),
      tC = LH(4002),
      zC = LH(1904),
      CC = LH(3998),
      EC = LH(4011);

    function XC(HH) {
      let {
        count: BH,
        claiming: LH
      } = HH;
      const {
        t: AH
      } = (0, hH.B)();
      return 0 === BH ? null : (0, XH.jsx)(CH.u, {
        className: "SeasonPassClaimAllButton",
        loading: LH,
        onClick: () => {
          tC.d.claimAll().catch((HH => {
            console.error("Failed to claim all season pass rewards", HH)
          }))
        },
        children: AH("seasonPass:claimAll", {
          count: BH
        })
      })
    }

    function GC(HH) {
      let {
        view: BH,
        claiming: LH
      } = HH;
      const {
        t: AH
      } = (0, hH.B)(), {
        userContext: rH
      } = (0, uH.e)(), {
        config: SH,
        state: zH,
        tier: CH,
        xpIntoTier: EH,
        xpForNextTier: GH
      } = BH, YH = Date.now(), QH = (0, EC.l)(BH, YH), WH = CH >= SH.tierCount, MH = QH && !WH && GH > 0, xH = GH > 0 && !WH ? Math.min(100, EH / GH * 100) : 100, vH = zH.xpToday >= SH.maxXpPerDay, PH = null !== BH.xpBoost && BH.xpBoost.endsAtMs > YH && !vH ? BH.xpBoost : null;
      return (0, XH.jsxs)("header", {
        className: "SeasonPassHeader",
        children: [(0, XH.jsx)("div", {
          className: "SeasonPassHeaderTitleBlock",
          children: (0, XH.jsx)("h1", {
            className: "SeasonPassHeaderTitle",
            children: AH("seasonPass:title", {
              season: zH.seasonNumber
            })
          })
        }), (0, XH.jsxs)("div", {
          className: "SeasonPassHeaderProgress",
          children: [(0, XH.jsxs)("div", {
            className: "SeasonPassHeaderProgressRow",
            children: [(0, XH.jsx)("span", {
              className: "SeasonPassHeaderTierBadge",
              title: AH("seasonPass:tier"),
              "aria-label": `${AH("seasonPass:tier")} ${CH}`,
              children: CH
            }), (0, XH.jsxs)("div", {
              className: "SeasonPassHeaderBar",
              role: "progressbar",
              "aria-valuemin": 0,
              "aria-valuemax": 100,
              "aria-valuenow": Math.round(xH),
              children: [(0, XH.jsx)("div", {
                className: "SeasonPassHeaderBarFill",
                style: {
                  width: `${xH}%`
                }
              }), (0, XH.jsxs)("span", {
                className: "SeasonPassHeaderBarText SmallTextBold",
                children: [WH && AH("seasonPass:passComplete"), MH && AH("seasonPass:xpProgress", {
                  xp: EH,
                  xpForNextTier: GH
                })]
              })]
            }), MH && (0, XH.jsxs)(XH.Fragment, {
              children: [(0, XH.jsx)(tH.c, {
                className: "SeasonPassHeaderNextArrow",
                name: "caret-right"
              }), (0, XH.jsx)("span", {
                className: "SeasonPassHeaderNextTier",
                children: CH + 1
              })]
            })]
          }), (0, XH.jsxs)("div", {
            className: "SeasonPassHeaderFootnotes",
            children: [(0, XH.jsxs)("span", {
              className: "SeasonPassHeaderTimeLeft",
              children: [(0, XH.jsx)(tH.c, {
                name: "hourglass"
              }), " ", QH ? AH("seasonPass:endsIn", {
                time: (0, CC.c)((BH.endsAtMs - YH) / 6e4)
              }) : (0, zt.c)(BH.claimEndsAtMs, AH, YH)]
            }), QH && !WH && (0, XH.jsx)("span", {
              className: vH ? "SeasonPassHeaderDailyCapped" : "SeasonPassHeaderDaily",
              children: vH ? AH("seasonPass:dailyCapReached") : AH("seasonPass:dailyXp", {
                xp: zH.xpToday,
                cap: SH.maxXpPerDay
              })
            }), QH && !WH && PH && (0, XH.jsxs)("span", {
              className: "SeasonPassHeaderBoost",
              children: [(0, XH.jsx)(tH.c, {
                name: "angles-up"
              }), " ", AH("seasonPass:xpBoostActive", {
                multiplier: PH.multiplier,
                time: (0, CC.c)(Math.ceil((PH.endsAtMs - YH) / 6e4))
              })]
            }), QH && !WH && !vH && !PH && (0, XH.jsx)("span", {
              className: "SeasonPassHeaderHint",
              children: AH("seasonPass:playToEarn")
            }), rH.type === zC.d.ANONYMOUS && (0, XH.jsx)("span", {
              className: "SeasonPassHeaderGuest",
              children: AH("seasonPass:logInToKeep")
            })]
          })]
        }), (0, XH.jsx)(XC, {
          count: BH.claimable.length,
          claiming: LH
        })]
      })
    }
    var YC = LH(3431),
      uC = LH(3436);

    function QC(HH) {
      return null !== (0, zt.t)(HH) || null !== (0, zt.q)(HH)
    }
    let WC = null;

    function MC() {
      var HH;
      null === (HH = WC) || void 0 === HH || HH.tearDownNotification()
    }

    function xC(HH) {
      let {
        reward: BH
      } = HH;
      const {
        t: LH
      } = (0, hH.B)(), {
        userContext: AH
      } = (0, uH.e)(), rH = (0, zt.t)(BH);
      return (0, XH.jsxs)("div", {
        className: "PromptGenericPopup SeasonPassRewardPreview",
        children: [(0, XH.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: (0, zt.k)(BH, LH)
        }), null !== rH && (0, XH.jsx)("div", {
          className: "SeasonPassRewardPreviewProfileEffect",
          children: (0, XH.jsx)(YC.e, {
            profileEffect: rH,
            name: AH.getPlayerName(),
            cosmetics: AH.getPlayerCosmetics()
          })
        }), null === rH && (0, XH.jsx)(vC, {
          reward: BH
        })]
      })
    }

    function vC(HH) {
      let {
        reward: BH
      } = HH;
      const {
        userContext: LH
      } = (0, uH.e)(), rH = (0, AH.useRef)(null), {
        previewEmote: SH,
        playEmote: hH
      } = (0, uC.e)(), tH = (0, AH.useMemo)((() => (0, zt.q)(BH)), [BH]), zH = tH.emote;
      return (0, XH.jsx)("div", {
        className: "SeasonPassRewardPreviewCharacter",
        children: (0, XH.jsx)(AH.Suspense, {
          fallback: (0, XH.jsx)(UH.d, {}),
          children: (0, XH.jsx)(Zh.b, {
            ref: rH,
            framing: "store",
            forcedCosmetics: tH.cosmetics,
            zE: SH.id,
            emotePlaySeq: SH.seq,
            onReady: () => {
              var HH, BH;
              null === (HH = rH.current) || void 0 === HH || HH.resetCamera(), null === (BH = rH.current) || void 0 === BH || BH.setAllCosmetics(LH.getPlayerCosmetics())
            },
            onDrawn: () => {
              null !== zH && hH(zH)
            }
          })
        })
      })
    }

    function PC(HH) {
      let {
        waitingCount: BH
      } = HH;
      const {
        t: LH
      } = (0, hH.B)();
      return (0, DH.usePurchasesAllowed)() ? (0, XH.jsxs)("div", {
        className: "SeasonPassHyperUpsell",
        children: [BH > 0 && (0, XH.jsx)("span", {
          className: "SeasonPassHyperUpsellText",
          children: 1 === BH ? LH("seasonPass:hyperRewardWaiting") : LH("seasonPass:hyperRewardsWaiting", {
            count: BH
          })
        }), (0, XH.jsxs)("span", {
          className: "SeasonPassHyperUpsellButtonWrapper",
          children: [(0, XH.jsxs)(CH.B, {
            className: "SeasonPassHyperUpsellButton",
            onClick: () => {
              (0, zB.k)({
                mode: "self",
                source: "seasonPass",
                openItem: "superRank"
              })
            },
            children: [(0, XH.jsx)(jH.b, {}), " ", LH("homePage:getHyperRank")]
          }), BH > 0 && (0, XH.jsx)("span", {
            className: "SeasonPassHyperUpsellCount",
            children: BH
          })]
        })]
      }) : null
    }
    var TC = LH(35040);

    function UC(HH) {
      let {
        stub: BH,
        name: LH
      } = HH;
      const {
        t: AH
      } = (0, hH.B)();
      return (0, XH.jsxs)("span", {
        className: "SeasonPassTrackLabelName",
        children: [(0, XH.jsx)("span", {
          className: "SeasonPassTicketStub",
          children: BH
        }), (0, XH.jsxs)("span", {
          className: "SeasonPassTicketBody",
          children: [(0, XH.jsx)("span", {
            className: "SeasonPassTicketPass",
            children: AH("seasonPass:trackTicketPass")
          }), (0, XH.jsx)("span", {
            className: "SeasonPassTicketName",
            children: LH
          })]
        })]
      })
    }

    function VC(HH) {
      var BH, LH;
      let {
        view: rH,
        claimingKeys: SH,
        hyperWaitingCount: zH,
        onClaim: CH
      } = HH;
      const {
        t: EH
      } = (0, hH.B)(), GH = (0, AH.useRef)(null), {
        config: YH,
        tier: uH,
        xpIntoTier: QH,
        xpForNextTier: WH,
        state: MH
      } = rH, xH = (0, EC.l)(rH), vH = (0, AH.useRef)(!1), PH = null !== (BH = null === (LH = rH.claimable[0]) || void 0 === LH ? void 0 : LH.tier) && void 0 !== BH ? BH : Math.min(uH + 1, YH.tierCount);
      (0, AH.useLayoutEffect)((() => {
        if (vH.current) return;
        const HH = GH.current,
          BH = HH.querySelector(`[data-tier="${PH}"]`).getBoundingClientRect(),
          LH = HH.getBoundingClientRect();
        HH.scrollLeft += BH.left - LH.left - .3 * HH.clientWidth, HH.scrollTop += BH.top - LH.top - .3 * HH.clientHeight
      }), [PH]), (0, AH.useEffect)((() => {
        const HH = GH.current;

        function BH(BH) {
          vH.current = !0, Math.abs(BH.deltaY) <= Math.abs(BH.deltaX) || HH.scrollWidth <= HH.clientWidth || (BH.preventDefault(), HH.scrollLeft += BH.deltaY)
        }
        return HH.addEventListener("wheel", BH, {
          passive: !1
        }), () => {
          HH.removeEventListener("wheel", BH)
        }
      }), []);
      const TH = WH > 0 ? QH / WH : 1;
      return (0, XH.jsxs)("div", {
        className: "SeasonPassTrack",
        children: [(0, XH.jsxs)("div", {
          className: "SeasonPassTrackLabels",
          children: [(0, XH.jsxs)("div", {
            className: "SeasonPassTrackLabel SeasonPassTrackLabelHyper",
            children: [(0, XH.jsx)(UC, {
              stub: (0, XH.jsx)(jH.b, {}),
              name: EH("seasonPass:hyperTrack")
            }), !MH.hasHyperRank && (0, XH.jsx)(PC, {
              waitingCount: zH
            })]
          }), (0, XH.jsxs)("div", {
            className: "SeasonPassTrackLabel SeasonPassTrackLabelFree",
            children: [(0, XH.jsx)(UC, {
              stub: (0, XH.jsx)(tH.c, {
                name: "star"
              }),
              name: EH("seasonPass:freeTrack")
            }), (0, XH.jsx)("span", {
              className: "SeasonPassTrackLabelHint",
              children: EH("seasonPass:freeTrackHint")
            })]
          })]
        }), (0, XH.jsx)("div", {
          className: "SeasonPassTrackScroller",
          ref: GH,
          onPointerDown: () => {
            vH.current = !0
          },
          children: (0, XH.jsx)("div", {
            className: "SeasonPassTrackRow",
            children: YH.tiers.map((HH => {
              const BH = HH.tier,
                LH = function(HH, BH, LH) {
                  if (HH <= BH) return "reached";
                  return LH && HH === BH + 1 ? "earning" : "locked"
                }(BH, uH, xH),
                AH = "earning" === LH;
              return (0, XH.jsx)(OC, {
                tierRewards: HH,
                nodeState: LH,
                progress: AH ? TH : 0,
                freeState: rH.tileState({
                  tier: BH,
                  track: "free"
                }),
                hyperState: rH.tileState({
                  tier: BH,
                  track: "hyper"
                }),
                freeClaiming: SH.has((0, EC.n)({
                  tier: BH,
                  track: "free"
                })),
                hyperClaiming: SH.has((0, EC.n)({
                  tier: BH,
                  track: "hyper"
                })),
                hasHyperRank: MH.hasHyperRank,
                onClaim: CH
              }, BH)
            }))
          })
        })]
      })
    }
    const OC = (0, AH.memo)((function(HH) {
      let {
        tierRewards: BH,
        nodeState: LH,
        progress: AH,
        freeState: rH,
        hyperState: hH,
        freeClaiming: tH,
        hyperClaiming: zH,
        hasHyperRank: CH,
        onClaim: EH
      } = HH;
      const {
        tier: GH
      } = BH;
      return (0, XH.jsxs)("div", {
        className: SH()("SeasonPassTrackColumn", {
          SeasonPassTrackColumnLocked: "reached" !== LH
        }),
        "data-tier": GH,
        children: [(0, XH.jsx)(bC, {
          tier: GH,
          track: "hyper",
          reward: BH.hyper,
          tileState: hH,
          claiming: zH,
          padlock: !CH && "claimed" !== hH,
          onClaim: EH
        }), (0, XH.jsxs)("div", {
          className: "SeasonPassTrackRoad",
          children: [(0, XH.jsx)("span", {
            className: SH()("SeasonPassTrackRoadHalf SeasonPassTrackRoadLeft", {
              SeasonPassTrackRoadFilled: "reached" === LH
            }),
            children: "earning" === LH && (0, XH.jsx)("span", {
              className: "SeasonPassTrackRoadProgress",
              style: {
                "--seasonPassRoadProgress": 100 * AH + "%"
              }
            })
          }), (0, XH.jsx)("span", {
            className: SH()("SeasonPassTrackRoadHalf SeasonPassTrackRoadRight", {
              SeasonPassTrackRoadFilled: "reached" === LH
            })
          }), (0, XH.jsx)(TC.c, {
            tier: GH,
            state: LH,
            progress: AH
          })]
        }), (0, XH.jsx)(bC, {
          tier: GH,
          track: "free",
          reward: BH.free,
          tileState: rH,
          claiming: tH,
          padlock: !1,
          onClaim: EH
        })]
      })
    }));

    function bC(HH) {
      let {
        tier: BH,
        track: LH,
        reward: AH,
        tileState: rH,
        claiming: SH,
        padlock: hH,
        onClaim: tH
      } = HH;
      return AH ? (0, XH.jsx)("div", {
        className: `SeasonPassTrackSlot SeasonPassTrackSlot-${LH}`,
        children: (0, XH.jsx)(Yt.d, {
          reward: AH,
          tileState: rH,
          track: LH,
          size: "large",
          onClaim: () => {
            tH({
              tier: BH,
              track: LH
            })
          },
          claiming: SH,
          padlock: hH,
          onPreview: QC(AH) ? () => {
            ! function(HH) {
              const BH = rB.NotificationProvider.showCustomPopup({
                body: (0, XH.jsx)(xC, {
                  reward: HH
                })
              });
              WC = BH, BH.getResult().finally((() => {
                WC === BH && (WC = null)
              }))
            }(AH)
          } : void 0
        })
      }) : (0, XH.jsx)("div", {
        className: `SeasonPassTrackSlot SeasonPassTrackSlot-${LH}`
      })
    }

    function kC(HH) {
      let {
        show: BH
      } = HH;
      return BH ? (0, XH.jsx)(mC, {}) : null
    }

    function mC() {
      const {
        t: HH
      } = (0, hH.B)(), BH = (0, tC.g)();
      return (0, AH.useEffect)((() => MC), []), (0, XH.jsxs)("div", {
        className: "SeasonPassScreen",
        children: ["loading" === BH.status && (0, XH.jsx)(UH.d, {}), "error" === BH.status && (0, XH.jsxs)("div", {
          className: "SeasonPassScreenNotice",
          children: [(0, XH.jsx)("p", {
            className: "SeasonPassScreenMessage",
            children: HH("seasonPass:errorLoad")
          }), (0, XH.jsx)(CH.i, {
            className: "SeasonPassScreenRetry",
            onClick: () => {
              tC.d.retry()
            },
            children: HH("seasonPass:retry")
          })]
        }), "noSeason" === BH.status && (0, XH.jsx)("div", {
          className: "SeasonPassScreenNotice",
          children: (0, XH.jsx)("p", {
            className: "SeasonPassScreenMessage",
            children: (0, zt.g)(HH)
          })
        }), "loaded" === BH.status && (0, XH.jsx)(oC, {
          view: BH.view,
          claimingKeys: BH.claimingKeys
        })]
      })
    }

    function oC(HH) {
      let {
        view: BH,
        claimingKeys: LH
      } = HH;
      const AH = BH.config.tiers.filter((HH => "needsHyper" === BH.tileState({
          tier: HH.tier,
          track: "hyper"
        }))).length,
        rH = LH.size > 0;
      return (0, XH.jsxs)("div", {
        className: "SeasonPassScreenLoaded",
        children: [(0, XH.jsx)(GC, {
          view: BH,
          claiming: rH
        }), (0, XH.jsx)(VC, {
          view: BH,
          claimingKeys: LH,
          hyperWaitingCount: AH,
          onClaim: IC
        }), (0, XH.jsxs)("div", {
          className: "SeasonPassScreenActions",
          children: [(0, XH.jsx)(XC, {
            count: BH.claimable.length,
            claiming: rH
          }), !BH.state.hasHyperRank && (0, XH.jsx)(PC, {
            waitingCount: AH
          })]
        })]
      })
    }

    function IC(HH) {
      tC.d.claim(HH).catch((HH => {
        console.error("Failed to claim season pass reward", HH)
      }))
    }
    var fC = LH(5165);
    var lC = LH(3251);
    const KC = HH => {
        let {
          action: BH,
          padAction: LH
        } = HH;
        const {
          isTouchScreen: AH
        } = (0, OH.m)(["isTouchScreen"]), rH = (0, aA.y)();
        return AH && !rH ? null : (0, XH.jsx)(jA.b, {
          className: "EverythingMenuTabKey",
          noaAction: BH,
          padHidesKey: !0,
          padMenuShortcut: LH
        })
      },
      cC = (0, AH.memo)((function() {
        const {
          t: HH
        } = (0, hH.B)(), {
          gameState: BH,
          openEverythingMenuName: LH,
          crosshairGameView: rH,
          everythingMenuOverLoadingScreen: tH
        } = (0, OH.m)(["gameState", "openEverythingMenuName", "crosshairGameView", "everythingMenuOverLoadingScreen"]), {
          userContext: zH
        } = (0, uH.e)(), EH = (0, Gr.k)(Date.now()), GH = (0, DH.usePurchasesAllowed)(), YH = (0, zB.K)(), {
          view: QH
        } = (0, YL.w)(), WH = "dot" === YH || null === YH && "ready" === (null === QH || void 0 === QH ? void 0 : QH.kind), xH = (HH, BH) => (0, XH.jsx)(KC, {
          action: HH,
          padAction: BH
        }), [vH, PH] = (0, AH.useState)(null), TH = (0, AH.useRef)(null), UH = (0, AH.useRef)(null);
        (0, AH.useEffect)((() => {
          var HH;
          const BH = null === (HH = UH.current) || void 0 === HH ? void 0 : HH.querySelector(".EverythingMenuTabActive");
          null === BH || void 0 === BH || BH.scrollIntoView({
            block: "nearest",
            inline: "nearest"
          })
        }), [LH]);
        const VH = {
            ..."inGame" === BH ? {} : (0, CH.db)({
              focusOnClick: !1
            }),
            ...Pr.c
          },
          bH = HH => {
            const BH = (0, Tr.c)((BH => {
              (0, CH.bb)(BH.currentTarget), OH.c.set({
                openEverythingMenuName: HH
              })
            }), "pointerup");
            return {
              ...VH,
              onPointerDown: HH => {
                VH.onPointerDown(HH), BH.onPointerDown(HH)
              },
              onPointerUp: HH => {
                VH.onPointerUp(HH), BH.onPointerUp(HH)
              },
              onClick: BH.onClick
            }
          },
          kH = null !== LH;
        (0, AH.useEffect)((() => {
          LH === fB.o.CUSTOMISATION ? (0, WB.reportAnalyticsClick)({
            id: "customise.open",
            value: (0, Dh.g)()
          }) : null === LH && OH.c.get("everythingMenuOverLoadingScreen") && OH.c.set({
            everythingMenuOverLoadingScreen: !1
          })
        }), [LH]);
        const oH = LH !== fB.o.COSMETIC_SHOP && !rH;
        async function IH() {
          await async function() {
            if (!vH) return;
            await vH(), PH(null)
          }(), OH.c.set({
            openEverythingMenuName: null
          })
        }
        const fH = (0, AH.useRef)(null),
          lH = (0, AH.useCallback)((() => null !== fH.current && (0, Dz.f)(fH.current)), []);

        function KH() {
          lH() || IH()
        }(0, AH.useEffect)((() => (0, Ch.z)(lH)), [lH]);
        const cH = (0, AH.useMemo)((() => "inGame" === BH ? {
            text: HH("settingsMenu:exitGame"),
            onClick: () => {
              (0, Fz.e)()
            }
          } : (0, mH.isDiscordClient)() ? {
            text: HH("settingsMenu:exitGame"),
            onClick: () => {
              IB.k.discordActivity().then((HH => {
                HH.exit("User exited the game")
              }))
            }
          } : null), [BH, HH]),
          eH = kH && !rH,
          qH = "inGame" !== BH,
          gH = eH && qH;
        (0, AH.useLayoutEffect)((() => {
          if (gH) return OH.c.set({
            menuCoversPage: !0
          }), () => {
            OH.c.set({
              menuCoversPage: !1
            })
          }
        }), [gH]);
        const NH = (0, AH.useRef)(null);
        ! function(HH, BH) {
          (0, AH.useEffect)((() => {
            var LH;
            const AH = (0, fC.e)();
            if (!BH || null === AH || !(0, fC.c)({
                site: mH.siteUsed,
                isMobileApp: (0, MH.isMobileApp)(),
                isTouchScreen: OH.c.get("isTouchScreen")
              })) return;
            const rH = null === (LH = HH.current) || void 0 === LH ? void 0 : LH.querySelector(".EverythingMenuBackButton");
            return rH ? AH(rH) : void 0
          }), [HH, BH])
        }(NH, eH && !(0, Ch.n)(LH) && "inGame" === BH);
        const RH = (0, XH.jsx)("div", {
          className: "EverythingMenuCloseButtonClickZone",
          onClick: KH,
          children: (0, XH.jsx)(CH.q, {
            className: "EverythingMenuCloseButton"
          })
        });
        return (0, XH.jsx)(Ur.e, {
          showing: kH,
          globallyUniqueKey: "EverythingMenu",
          alwaysMountChildren: !0,
          keepsMovement: LH === fB.o.SHOP,
          doGameplayStartStopOnShow: "inGame" === BH,
          children: (0, XH.jsx)(Or.d, {
            className: SH()("EverythingMenuContainer", {
              EverythingMenuOverLoadingScreen: tH
            }),
            show: eH,
            children: (0, XH.jsx)(Vr.b, {
              close: KH,
              togglePointerLock: !1,
              children: (0, XH.jsxs)("div", {
                className: "EverythingMenu",
                ref: NH,
                children: [!(0, Ch.n)(LH) && (0, XH.jsxs)("div", {
                  className: "EverythingMenuTabList",
                  children: [(0, XH.jsxs)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerStart",
                    children: [cH && (0, XH.jsx)(CH.e, {
                      className: "EverythingMenuBackButton",
                      padDestructive: !0,
                      onClick: () => {
                        cH.onClick()
                      },
                      children: cH.text
                    }), kH && GH && (0, XH.jsx)("div", {
                      ...VH,
                      className: "EverythingMenuWallet",
                      title: HH("homePage:getPremiumCurrency"),
                      onClick: () => {
                        (0, zB.k)({
                          mode: "self",
                          source: "menuWallet"
                        })
                      },
                      children: (0, XH.jsx)(nz.g, {})
                    })]
                  }), (0, XH.jsxs)("div", {
                    className: "EverythingMenuTabListInner",
                    ref: UH,
                    "data-pad-tabs": "1",
                    children: [(0, XH.jsxs)("div", {
                      ...bH(fB.o.SETTINGS),
                      "data-pad-tab": !0,
                      "data-pad-selected": LH === fB.o.SETTINGS ? "true" : void 0,
                      className: SH()("EverythingMenuTab", {
                        EverythingMenuTabActive: LH === fB.o.SETTINGS
                      }),
                      children: [HH("general:settings"), xH("OpenSettings", "pause")]
                    }), (0, XH.jsxs)("div", {
                      ...bH(fB.o.CUSTOMISATION),
                      "data-pad-tab": !0,
                      "data-pad-selected": LH === fB.o.CUSTOMISATION ? "true" : void 0,
                      className: SH()("EverythingMenuTab", {
                        EverythingMenuTabActive: LH === fB.o.CUSTOMISATION
                      }),
                      children: [HH("general:player"), xH("OpenCharacterCustomization")]
                    }), MH.featureFlags.useSocialFeatures && (0, XH.jsxs)("div", {
                      ...bH(fB.o.SOCIAL),
                      "data-pad-tab": !0,
                      "data-pad-selected": LH === fB.o.SOCIAL ? "true" : void 0,
                      className: SH()("EverythingMenuTab", {
                        EverythingMenuTabActive: LH === fB.o.SOCIAL
                      }),
                      ...(0, WB.getAnalyticsClickAttributes)({
                        id: "social.open_menu",
                        value: "menu_tab"
                      }, LH === fB.o.SOCIAL),
                      children: [HH("socialBar:social"), (0, XH.jsx)(hC.d, {})]
                    }), EH && (0, XH.jsx)("div", {
                      ...bH(fB.o.SEASON_PASS),
                      "data-pad-tab": !0,
                      "data-pad-selected": LH === fB.o.SEASON_PASS ? "true" : void 0,
                      className: SH()("EverythingMenuTab", {
                        EverythingMenuTabActive: LH === fB.o.SEASON_PASS
                      }),
                      children: HH("seasonPass:title", {
                        season: EH.seasonNumber
                      })
                    }), (0, YL.o)(QH) && (0, XH.jsxs)("div", {
                      ...bH(fB.o.COSMETIC_SHOP),
                      "data-pad-tab": !0,
                      "data-pad-selected": LH === fB.o.COSMETIC_SHOP ? "true" : void 0,
                      className: SH()("EverythingMenuTab EverythingMenuTabCosmeticShop", {
                        EverythingMenuTabActive: LH === fB.o.COSMETIC_SHOP
                      }),
                      children: [(0, XH.jsx)("span", {
                        className: "EverythingMenuTabCosmeticShopText",
                        children: HH("store:title")
                      }), "new" === YH && (0, XH.jsx)(wt, {}), WH && (0, XH.jsx)("span", {
                        className: "EverythingMenuTabStoreBadge EverythingMenuTabStoreDot"
                      })]
                    }), "inGame" === BH && (0, XH.jsxs)("div", {
                      ...bH(fB.o.LOBBY_LEADERBOARD),
                      "data-pad-tab": !0,
                      "data-pad-selected": LH === fB.o.LOBBY_LEADERBOARD ? "true" : void 0,
                      className: SH()("EverythingMenuTab", {
                        EverythingMenuTabActive: LH === fB.o.LOBBY_LEADERBOARD
                      }),
                      children: [HH("general:lobby"), xH("OpenLobbyLeaderboard", "leaderboard")]
                    })]
                  }), (0, XH.jsx)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerEnd",
                    children: RH
                  })]
                }), (0, Ch.n)(LH) && RH, (0, XH.jsxs)("div", {
                  ref: fH,
                  className: "EverythingMenuBody",
                  "data-pad-initial-area": !0,
                  style: {
                    "--everythingMenuBodyBackgroundOpacity": qH ? "1" : "0.85"
                  },
                  children: [(0, XH.jsx)(Er, {
                    show: LH === fB.o.SETTINGS,
                    setBeforeResumeCallback: PH
                  }), (0, XH.jsx)(Mr, {
                    show: LH === fB.o.CUSTOMISATION
                  }), (0, XH.jsx)(AH.Suspense, {
                    fallback: null,
                    children: (0, XH.jsx)(Hh, {
                      show: LH === fB.o.SHOP
                    })
                  }), (0, XH.jsx)(Yh, {
                    show: LH === fB.o.LOBBY_LEADERBOARD
                  }), GH && (0, XH.jsx)(jz, {
                    show: LH === fB.o.COSMETIC_SHOP
                  }), !GH && (0, XH.jsx)(oz, {
                    show: LH === fB.o.COSMETIC_SHOP
                  }), (0, XH.jsx)(rC, {
                    show: LH === fB.o.SOCIAL
                  }), (0, XH.jsx)(kC, {
                    show: LH === fB.o.SEASON_PASS
                  })]
                }), !(0, MH.isMobileApp)() && (0, lC.k)() && (0, br.f)(zH.getPlayerRanks()) && (0, XH.jsx)(Or.d, {
                  ref: TH,
                  className: "EverythingMenuBannerDiv",
                  show: oH,
                  "data-pad-hint-bar-avoid": !0,
                  "data-pad-no-step-in": !0,
                  children: (0, XH.jsx)(wz.b, {
                    info: {
                      adId: 2,
                      adType: "leaderboard",
                      adAlias: "banner_shop"
                    },
                    sizeInfo: {
                      parentRef: TH
                    },
                    showing: kH && oH,
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
  35028: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => uH,
      c: () => WH
    });
    LH(35030);
    var AH = LH(45),
      rH = LH(1038),
      SH = LH.n(rH),
      hH = LH(1123),
      tH = LH(1455),
      zH = LH(2795),
      CH = LH(1315),
      EH = LH(2580),
      XH = LH(3392),
      GH = LH(2406),
      YH = LH(1225);

    function uH(HH) {
      let {
        endsAt: BH,
        className: LH
      } = HH;
      return (0, YH.jsxs)("span", {
        className: SH()("NewPlayerDealClock", LH),
        children: [(0, YH.jsx)(CH.c, {
          name: "hourglass"
        }), (0, YH.jsx)(zH.i, {
          toTime: BH
        })]
      })
    }

    function QH(HH) {
      let {
        offered: BH,
        needsLogin: LH,
        busy: AH,
        highlight: rH,
        onBuy: zH
      } = HH;
      const {
        t: CH
      } = (0, hH.B)(), {
        pack: uH
      } = BH, QH = (0, XH.f)(BH.package);
      return (0, YH.jsxs)("div", {
        className: SH()("NewPlayerDealPack", {
          NewPlayerDealPackHighlight: rH
        }),
        children: [(0, YH.jsxs)("div", {
          className: "NewPlayerDealPackArt",
          children: [(0, YH.jsx)("img", {
            src: GH.d[BH.tier],
            alt: "",
            draggable: !1
          }), (0, YH.jsx)("span", {
            className: "NewPlayerDealTag",
            children: CH("newPlayerDeal:tag")
          })]
        }), (0, YH.jsx)("div", {
          className: "NewPlayerDealPackText",
          children: (0, YH.jsx)(EH.e, {
            className: "NewPlayerDealPackAmount",
            amount: uH.gems
          })
        }), (0, YH.jsx)(tH.u, {
          className: "NewPlayerDealBuy",
          loading: AH,
          onClick: zH,
          ariaLabel: CH("newPlayerDeal:buyLabel", {
            amount: uH.gems.toLocaleString(),
            price: QH
          }),
          children: CH(LH ? "newPlayerDeal:logInToBuy" : "newPlayerDeal:buy", {
            price: QH
          })
        })]
      })
    }

    function WH(HH) {
      let {
        view: BH,
        needsLogin: LH,
        busy: rH,
        highlight: tH,
        onBuy: zH
      } = HH;
      const {
        t: CH
      } = (0, hH.B)();
      return (0, YH.jsxs)("div", {
        className: SH()("NewPlayerDealPacks", BH.packs.length > 1 ? "NewPlayerDealPacksTwo" : "NewPlayerDealPacksOne"),
        children: [BH.packs.map(((HH, BH) => (0, YH.jsxs)(AH.Fragment, {
          children: [BH > 0 && (0, YH.jsx)("div", {
            className: "NewPlayerDealDivider",
            "aria-hidden": !0,
            children: (0, YH.jsx)("i", {})
          }), (0, YH.jsx)(QH, {
            offered: HH,
            needsLogin: LH,
            busy: rH,
            highlight: tH === HH.pack.packageId,
            onBuy: () => {
              zH(HH)
            }
          })]
        }, HH.pack.packageId))), (0, YH.jsx)("div", {
          className: "NewPlayerDealUnder",
          children: (0, YH.jsx)("span", {
            className: "NewPlayerDealLimit",
            children: CH("newPlayerDeal:limit")
          })
        })]
      })
    }
  },
  35037: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => bH,
      e: () => mH
    });
    LH(35030);
    var AH = LH(3388),
      rH = LH(1475),
      SH = LH(2397),
      hH = LH(3376),
      tH = LH(3356),
      zH = LH(3382),
      CH = LH(3340),
      EH = LH(1123),
      XH = LH(1352),
      GH = LH(1061),
      YH = LH(1455),
      uH = LH(1315),
      QH = LH(2580),
      WH = LH(2930),
      MH = LH(2771),
      xH = LH(2780),
      vH = LH(2789),
      PH = LH(1225);
    const TH = new zH.c(CH.getBillingClient, CH.addPurchaseRecordListener);
    let UH = !1;

    function VH(HH, BH) {
      null !== HH && (0, MH.q)(HH) || ((0, rH.reportAnalyticsClick)({
        id: "store.purchase_done",
        value: `self:${BH.pack.packageId}`
      }), null !== HH && (0, MH.w)(HH), bH(BH.pack.gems))
    }

    function OH(HH, BH, LH) {
      const rH = (0, MH.e)(BH);
      switch (HH.kind) {
        case "completed":
          VH(rH, LH);
          break;
        case "pending":
          SH = HH.intentId, hH = () => {
            WH.h.refresh(), VH(rH, LH)
          }, UH || (UH = !0, TH.listen()), TH.follow(SH, hH);
          break;
        case "unknownPackage":
          (0, MH.N)(BH, null);
          break;
        case "failed":
          HH.errorKey === AH.c.newPlayerDealUnavailable && (0, MH.N)(BH, null)
      }
      var SH, hH
    }

    function bH(HH) {
      XH.NotificationProvider.showCustomPopup({
        body: BH => (0, PH.jsx)(kH, {
          gems: HH,
          close: BH
        }),
        middleScreenPopupClassName: "NewPlayerDealAddedPopup",
        disableExitButton: !0
      })
    }

    function kH(HH) {
      let {
        gems: BH,
        close: LH
      } = HH;
      const {
        t: AH
      } = (0, EH.B)();
      return (0, PH.jsxs)("div", {
        className: "NewPlayerDealAdded",
        children: [(0, PH.jsxs)("div", {
          className: "NewPlayerDealAddedHead",
          children: [(0, PH.jsx)(uH.c, {
            name: "circle-check"
          }), (0, PH.jsx)(QH.e, {
            amount: BH
          }), (0, PH.jsx)("span", {
            children: AH("newPlayerDeal:added")
          })]
        }), (0, PH.jsx)(YH.u, {
          className: "NewPlayerDealAddedOk",
          onClick: LH,
          children: AH("general:ok")
        })]
      })
    }

    function mH(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hH.d;
      const {
        userContext: LH
      } = (0, GH.e)(), {
        purchaseUnderWay: AH,
        notice: rH,
        buy: zH
      } = (0, tH.c)(BH), CH = (0, xH.k)(), EH = LH.mayBuy() || (0, SH.guestsMayBuy)(), XH = null === CH ? !EH : CH.guest && !LH.isLoggedIn();
      return {
        purchaseUnderWay: AH,
        notice: rH,
        needsLogin: XH,
        buyPack: function(AH, rH) {
          (0, MH.F)("new_player_deal.buy", (0, vH.e)(AH.arm, HH, rH.pack.packageId)), null === CH ? zH(function(HH) {
            return {
              sku: HH.pack.packageId,
              tier: HH.tier,
              amount: HH.pack.gems,
              bonusPercent: 0,
              package: HH.package
            }
          }(rH), null, {
            followPending: !1
          }).then((HH => {
            OH(HH, LH, rH)
          })) : XH ? BH(rH.pack.packageId, null) : VH((0, MH.e)(LH), rH)
        }
      }
    }
  },
  5367: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => WH
    });
    var AH = LH(1038),
      rH = LH.n(AH),
      SH = LH(5046),
      hH = LH(1123),
      tH = LH(1315),
      zH = LH(1455),
      CH = LH(1502),
      EH = LH(1352),
      XH = LH(2703),
      GH = LH(1225);
    const YH = {
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

    function uH(HH) {
      let {
        platform: BH
      } = HH;
      const LH = "youtube" === BH;
      return (0, GH.jsxs)("span", {
        className: rH()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: LH
        }),
        children: [LH && (0, GH.jsx)(XH.d, {
          variant: "white"
        }), !LH && (0, GH.jsx)(tH.c, {
          name: YH[BH].icon,
          kit: "brands"
        })]
      })
    }

    function QH(HH) {
      let {
        platform: BH,
        link: LH,
        editable: AH,
        userContext: rH,
        onLinksUpdated: XH
      } = HH;
      const {
        t: QH
      } = (0, hH.B)(), WH = YH[BH];
      if (!LH && !AH) return null;

      function MH() {
        var HH;
        if (!rH || !XH) return;
        EH.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: WH.name
            }
          },
          prefixText: SH.w[BH],
          placeholderText: "playBloxd",
          initialValue: null !== (HH = null === LH || void 0 === LH ? void 0 : LH.handle) && void 0 !== HH ? HH : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: LH ? "general:remove" : void 0
        }).getResult().then((async HH => {
          if ("notificationTornDown" !== HH && null !== HH) try {
            "submit" === HH.type ? await CH.d.setSocialLink(rH, BH, HH.value) : await CH.d.clearSocialLink(rH, BH), XH()
          } catch (LH) {
            console.error("Failed to update social link", LH), EH.NotificationProvider.showAlertPopup({
              title: LH.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (LH) {
        const HH = `@${LH.handle}`;
        return (0, GH.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: WH.color
          },
          href: LH.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, GH.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, GH.jsx)(uH, {
              platform: BH
            }), (0, GH.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, GH.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: HH
              })
            })]
          }), AH && (0, GH.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, zH.db)({
              stopPropagation: !0
            }),
            onClick: HH => {
              HH.stopPropagation(), HH.preventDefault(), MH()
            },
            children: (0, GH.jsx)(tH.c, {
              name: "pen-to-square"
            })
          }), !AH && (0, GH.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, GH.jsx)(tH.c, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, GH.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: WH.color
        },
        ...(0, zH.db)(),
        onClick: () => {
          MH()
        },
        children: [(0, GH.jsx)(uH, {
          platform: BH
        }), (0, GH.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, GH.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: WH.name
          }), (0, GH.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: QH("homePage:profileSocialLinkAdd")
          })]
        }), (0, GH.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, GH.jsx)(tH.c, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function WH(HH) {
      let {
        socialLinks: BH,
        editable: LH = !1,
        userContext: AH,
        onLinksUpdated: rH
      } = HH;
      if (!LH && 0 === BH.length) return null;
      const hH = new Map(BH.map((HH => [HH.platform, HH]))),
        tH = LH ? SH.s : BH.map((HH => HH.platform));
      return (0, GH.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, GH.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: tH.map((HH => (0, GH.jsx)(QH, {
            platform: HH,
            link: hH.get(HH),
            editable: LH,
            userContext: AH,
            onLinksUpdated: rH
          }, HH)))
        })
      })
    }
  },
  35020: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => SH
    });
    var AH = LH(45),
      rH = LH(3811);

    function SH() {
      const [HH, BH] = (0, AH.useState)(!1);
      return (0, AH.useLayoutEffect)((() => {
        let HH = !0;
        return (0, rH.e)().then((() => {
          HH && BH(!0)
        })), () => {
          HH = !1
        }
      }), []), HH
    }
  },
  34951: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => QH,
      c: () => uH
    });
    LH(34960);
    var AH = LH(1038),
      rH = LH.n(AH),
      SH = LH(45),
      hH = LH(34946);

    function tH(HH, BH) {
      return Math.max(1, Math.round(HH * BH))
    }

    function zH(HH, BH) {
      const LH = BH * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
        AH = function(HH, BH) {
          if (HH.lines) return tH(HH.lineThickness, BH) % 2;
          if (HH.dot) return tH(HH.dotSize, BH) % 2;
          return CH(HH, BH) % 2
        }(HH, BH),
        rH = EH(HH.lineThickness * LH, AH),
        SH = tH(HH.lineLength, LH),
        hH = Math.round(HH.gap * LH),
        zH = HH.outline > 0 ? tH(HH.outline, LH) : 0,
        GH = [];
      if (HH.lines && (GH.push({
          x: rH + hH,
          y: 0,
          w: SH,
          h: rH,
          arm: "right"
        }), GH.push({
          x: -hH - SH,
          y: 0,
          w: SH,
          h: rH,
          arm: "left"
        }), GH.push({
          x: 0,
          y: rH + hH,
          w: rH,
          h: SH,
          arm: "down"
        }), HH.tStyle || GH.push({
          x: 0,
          y: -hH - SH,
          w: rH,
          h: SH,
          arm: "up"
        }), 0 === hH && GH.push({
          x: 0,
          y: 0,
          w: rH,
          h: rH
        })), HH.dot) {
        const BH = EH(HH.dotSize * LH, AH),
          SH = HH.lines && 0 === hH && HH.dotSize > HH.lineThickness ? Math.max(BH, rH + 2) : BH,
          tH = (rH - SH) / 2;
        GH.push({
          x: tH,
          y: tH,
          w: SH,
          h: SH
        })
      }
      const YH = GH.map((HH => ({
        ...HH,
        x: HH.x - zH,
        y: HH.y - zH,
        w: HH.w + 2 * zH,
        h: HH.h + 2 * zH
      })));
      let uH = null,
        QH = null;
      if (HH.circle) {
        const BH = tH(HH.circleThickness, LH),
          SH = function(HH, BH) {
            return HH + (HH % 2 === BH ? 0 : 1)
          }(CH(HH, LH), AH),
          hH = (rH - SH) / 2;
        uH = XH(hH, SH, BH), zH > 0 && (QH = XH(hH - zH, SH + 2 * zH, BH + 2 * zH))
      }
      return {
        cell: rH,
        fills: GH,
        outlines: zH > 0 ? YH : [],
        ring: uH,
        ringOutline: QH
      }
    }

    function CH(HH, BH) {
      return Math.round(HH.circleRadius * BH * 2 + tH(HH.circleThickness, BH))
    }

    function EH(HH, BH) {
      return Math.max(2 - BH, 2 * Math.round((HH - BH) / 2) + BH)
    }

    function XH(HH, BH, LH) {
      const AH = 2 * LH >= BH - 1;
      return {
        x: HH,
        y: HH,
        size: BH,
        border: Math.min(LH, Math.floor(BH / 2)),
        filled: AH
      }
    }
    var GH = LH(1225);
    const YH = 1.4;

    function uH(HH, BH) {
      return HH && BH ? `scale(${YH})` : "scale(1)"
    }

    function QH(HH) {
      return "classic" === HH.settings.style ? (0, GH.jsx)(xH, {
        ...HH
      }) : (0, GH.jsx)(bH, {
        ...HH
      })
    }
    const WH = .125;

    function MH(HH, BH) {
      const LH = {};
      if (HH.color !== hH.c.color && (LH.color = (0, hH.e)(HH.color)), HH.opacity !== hH.c.opacity && (LH.opacity = HH.opacity / 100), HH.outline !== hH.c.outline || HH.outlineColor !== hH.c.outlineColor) {
        const BH = HH.outline,
          AH = (0, hH.e)(HH.outlineColor);
        LH.textShadow = BH > 0 ? `-${BH}px 0 ${AH}, 0 ${BH}px ${AH}, ${BH}px 0 ${AH}, 0 -${BH}px ${AH}` : "none"
      }
      if (HH.size !== hH.c.size) {
        const AH = HH.size / 100;
        LH.fontSize = BH ? `calc(max(1.3rem, 18px) * ${AH})` : `calc(1.3rem * ${AH})`, LH.marginTop = `-${WH}em`, LH.transformOrigin = `50% calc(50% + ${WH}em)`
      }
      return LH
    }

    function xH(HH) {
      let {
        settings: BH,
        touch: LH,
        inPreview: AH,
        inEditor: SH,
        pressed: hH = !1,
        pressRef: tH
      } = HH;
      return (0, GH.jsx)("div", {
        className: rH()("Crosshair", {
          Touch: LH,
          CrosshairInPreview: AH,
          CrosshairInEditor: SH || AH
        }),
        ref: tH,
        style: {
          transform: uH(hH, BH.growOnClick),
          ...MH(BH, LH)
        },
        children: "+"
      })
    }

    function vH(HH, BH) {
      return HH / BH + "px"
    }

    function PH(HH, BH, LH, AH) {
      return {
        ...VH(HH, BH, LH),
        width: vH(HH.w, LH),
        height: vH(HH.h, LH),
        background: AH
      }
    }

    function TH(HH, BH, LH) {
      return {
        left: vH(HH.x, BH),
        top: vH(HH.y, BH),
        width: vH(HH.size, BH),
        height: vH(HH.size, BH),
        borderWidth: vH(HH.border, BH),
        borderColor: LH,
        background: HH.filled ? LH : void 0
      }
    }
    const UH = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function VH(HH, BH, LH) {
      const [AH, rH] = HH.arm ? UH[HH.arm] : [0, 0], SH = Math.round(BH * LH);
      return {
        left: vH(HH.x + AH * SH, LH),
        top: vH(HH.y + rH * SH, LH)
      }
    }

    function OH(HH) {
      return HH.arm ? {
        "data-arm": HH.arm,
        "data-x": HH.x,
        "data-y": HH.y
      } : {}
    }

    function bH(HH) {
      let {
        settings: BH,
        inPreview: LH,
        inEditor: AH,
        pressed: tH = !1,
        spread: CH,
        spreadRef: EH
      } = HH;
      const XH = (0, SH.useRef)(null),
        {
          box: uH,
          dpr: QH
        } = function(HH) {
          const [BH, LH] = (0, SH.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, SH.useLayoutEffect)((() => {
            const BH = HH.current;
            if (!BH) return;
            const AH = () => {
              const HH = BH.getBoundingClientRect(),
                AH = window.devicePixelRatio || 1;
              LH((BH => BH.dpr === AH && BH.box.left === HH.left && BH.box.top === HH.top && BH.box.width === HH.width && BH.box.height === HH.height ? BH : {
                box: {
                  left: HH.left,
                  top: HH.top,
                  width: HH.width,
                  height: HH.height
                },
                dpr: AH
              }))
            };
            AH();
            const rH = new ResizeObserver(AH);
            return rH.observe(BH), window.addEventListener("resize", AH), window.addEventListener("scroll", AH, !0), () => {
              rH.disconnect(), window.removeEventListener("resize", AH), window.removeEventListener("scroll", AH, !0)
            }
          }), [HH]), BH
        }(XH),
        WH = (0, SH.useRef)(QH);
      WH.current = QH;
      const MH = zH(BH, QH, tH && BH.growOnClick ? YH : 1),
        xH = function(HH, BH, LH) {
          const AH = Math.round((HH.left + HH.width / 2) * LH - BH / 2),
            rH = Math.round((HH.top + HH.height / 2) * LH - BH / 2);
          return {
            x: AH / LH - HH.left,
            y: rH / LH - HH.top
          }
        }(uH, MH.cell, QH),
        vH = (0, hH.e)(BH.color),
        UH = (0, hH.e)(BH.outlineColor),
        bH = (0, SH.useRef)(0);
      (0, SH.useLayoutEffect)((() => {
        if (EH) return EH.current = HH => {
          var BH;
          bH.current = HH, null === (BH = XH.current) || void 0 === BH || BH.querySelectorAll("[data-arm]").forEach((BH => {
            Object.assign(BH.style, VH(function(HH) {
              return {
                x: Number(HH.dataset.x),
                y: Number(HH.dataset.y),
                arm: HH.dataset.arm
              }
            }(BH), HH, WH.current))
          }))
        }, () => {
          EH.current = null
        }
      }), [EH]);
      const kH = null !== CH && void 0 !== CH ? CH : bH.current;
      return (0, GH.jsx)("div", {
        ref: XH,
        className: rH()("CrosshairShapes", {
          CrosshairInPreview: LH,
          CrosshairInEditor: AH || LH,
          CrosshairSpreads: void 0 !== EH
        }),
        children: (0, GH.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: xH.x,
            top: xH.y,
            opacity: BH.opacity / 100
          },
          children: (0, GH.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [MH.ringOutline && (0, GH.jsx)("div", {
              className: "CrosshairRing",
              style: TH(MH.ringOutline, QH, UH)
            }), MH.outlines.map(((HH, BH) => (0, GH.jsx)("div", {
              className: "CrosshairPart",
              ...OH(HH),
              style: PH(HH, kH, QH, UH)
            }, `o${BH}`))), MH.ring && (0, GH.jsx)("div", {
              className: "CrosshairRing",
              style: TH(MH.ring, QH, vH)
            }), MH.fills.map(((HH, BH) => (0, GH.jsx)("div", {
              className: "CrosshairPart",
              ...OH(HH),
              style: PH(HH, kH, QH, vH)
            }, `f${BH}`)))]
          })
        })
      })
    }
  },
  34962: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => EH,
      f: () => WH,
      g: () => QH
    });
    var AH = LH(34946);
    const rH = "XH1-",
      SH = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      hH = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      tH = ["color", "outlineColor"],
      zH = 1 + 3 * tH.length + hH.length + 1,
      CH = Math.ceil(8 * zH / Math.log2(62)),
      EH = rH.length + CH;

    function XH(HH) {
      let BH = 90;
      for (const LH of HH) BH = 31 * BH + LH & 255;
      return BH
    }
    const GH = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      YH = BigInt(GH.length);

    function uH(HH, BH) {
      let LH = 0n;
      for (const rH of HH) {
        const HH = GH.indexOf(rH);
        if (HH < 0) return null;
        LH = LH * YH + BigInt(HH)
      }
      if (LH >> BigInt(8 * BH) !== 0n) return null;
      const AH = [];
      for (let rH = 0; rH < BH; rH++) AH.unshift(Number(0xffn & LH)), LH >>= 8n;
      return AH
    }

    function QH(HH) {
      let BH = "shapes" === HH.style ? 1 : 0;
      SH.forEach(((LH, AH) => {
        HH[LH] && (BH |= 1 << AH + 1)
      }));
      const LH = [BH];
      for (const rH of tH) {
        const BH = (0, AH.d)(rH, HH[rH]);
        LH.push(BH >> 16 & 255, BH >> 8 & 255, 255 & BH)
      }
      for (const rH of hH) {
        const {
          min: BH,
          step: SH
        } = AH.b[rH];
        LH.push(Math.round(((0, AH.d)(rH, HH[rH]) - BH) / SH))
      }
      return LH.push(XH(LH)), rH + function(HH, BH) {
        let LH = 0n;
        for (const rH of HH) LH = LH << 8n | BigInt(rH);
        let AH = "";
        for (let rH = 0; rH < BH; rH++) AH = GH[Number(LH % YH)] + AH, LH /= YH;
        return AH
      }(LH, CH)
    }

    function WH(HH) {
      for (const BH of HH.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${CH}})`, "gi"))) {
        const HH = MH(uH(BH[1], zH));
        if (HH) return HH
      }
      return null
    }

    function MH(HH) {
      if (!HH || HH.length !== zH || XH(HH.slice(0, -1)) !== HH[HH.length - 1]) return null;
      const BH = HH[0],
        LH = {
          ...AH.c,
          style: 1 & BH ? "shapes" : "classic"
        };
      SH.forEach(((HH, AH) => {
        LH[HH] = 0 !== (BH & 1 << AH + 1)
      }));
      let rH = 1;
      for (const AH of tH) LH[AH] = HH[rH] << 16 | HH[rH + 1] << 8 | HH[rH + 2], rH += 3;
      for (const SH of hH) {
        const {
          min: BH,
          step: hH
        } = AH.b[SH];
        LH[SH] = (0, AH.d)(SH, BH + HH[rH] * hH), rH++
      }
      return LH
    }
  },
  34946: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => AH,
      c: () => rH,
      d: () => SH,
      e: () => CH,
      f: () => zH,
      i: () => EH,
      j: () => tH,
      k: () => hH
    });
    const AH = {
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
      rH = Object.freeze({
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

    function SH(HH, BH) {
      var LH;
      const {
        min: SH,
        max: hH,
        step: tH
      } = AH[HH];
      if (!Number.isFinite(BH)) return rH[HH];
      const zH = (null !== (LH = String(tH).split(".")[1]) && void 0 !== LH ? LH : "").length,
        CH = Number((Math.round(BH / tH) * tH).toFixed(zH));
      return Math.min(hH, Math.max(SH, CH))
    }

    function hH(HH, BH, LH) {
      const AH = "number" === typeof LH ? SH(BH, LH) : LH;
      return {
        ...HH,
        [BH]: AH
      }
    }

    function tH(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(rH).every((AH => LH.includes(AH) || HH[AH] === BH[AH]))
    }

    function zH(HH) {
      return tH(HH, rH)
    }

    function CH(HH) {
      return `#${HH.toString(16).padStart(6,"0")}`
    }

    function EH(HH) {
      const BH = /^#?([0-9a-f]{6})$/i.exec(HH.trim());
      return BH ? parseInt(BH[1], 16) : null
    }
  },
  34969: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => XH,
      g: () => GH
    });
    var AH = LH(45),
      rH = LH(30),
      SH = LH(34962),
      hH = LH(34946);
    const tH = "crosshairCode";
    let zH = null;
    const CH = new Set;

    function EH() {
      if (null === zH) {
        var HH;
        const BH = rH.e.getItem(tH);
        zH = null !== (HH = "string" === typeof BH ? (0, SH.f)(BH) : null) && void 0 !== HH ? HH : hH.c
      }
      return zH
    }

    function XH(HH) {
      zH = HH, (0, hH.f)(HH) ? rH.e.removeItem(tH) : rH.e.setItem(tH, (0, SH.g)(HH));
      for (const BH of CH) BH()
    }

    function GH() {
      const [HH, BH] = (0, AH.useState)(EH);
      return (0, AH.useEffect)((() => {
        const HH = () => {
          BH(EH())
        };
        return HH(), LH = HH, CH.add(LH), () => {
          CH.delete(LH)
        };
        var LH
      }), []), HH
    }
  },
  34942: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => SH,
      g: () => rH
    });
    var AH = LH(15);

    function rH(HH, BH) {
      return HH && !BH
    }

    function SH() {
      return rH(AH.c.get("isTouchScreen"), AH.c.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  5165: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => hH,
      e: () => SH,
      f: () => rH
    });
    let AH = null;

    function rH(HH) {
      AH = HH
    }

    function SH() {
      return AH
    }

    function hH(HH) {
      return "bloxd" === HH.site && !HH.isMobileApp && !HH.isTouchScreen
    }
  },
  34901: (HH, BH, LH) => {
    function AH(HH, BH) {
      return HH && !BH
    }
    LH.d(BH, {
      c: () => AH
    })
  },
  34929: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => SH
    });
    var AH = LH(1260);

    function rH() {
      var HH, BH;
      return null !== (HH = null === (BH = screen.orientation) || void 0 === BH ? void 0 : BH.type) && void 0 !== HH ? HH : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const SH = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && rH() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = rH(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, AH.TQ)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const HH of this.resizers) HH()
          }
        }), 1e3)
      }
      heldSizer(HH) {
        let BH = !1;
        return () => {
          if (BH && this.isHeld()) return null;
          const LH = HH();
          return BH ||= null !== LH, LH
        }
      }
      onRelease(HH) {
        return this.resizers.add(HH), () => {
          this.resizers.delete(HH)
        }
      }
    }
  },
  34867: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => xH,
      e: () => CH,
      i: () => QH,
      m: () => uH
    });
    var AH = LH(152),
      rH = LH(1206),
      SH = LH(1131),
      hH = LH(1070),
      tH = LH(1781);
    const zH = {
      offline: "homePage:onboardingNameNoAccount",
      outdated: "general:updatedReloading",
      busy: "homePage:changeNameTooFast",
      server: "homePage:changeNameFailed"
    };

    function CH(HH) {
      return zH[HH]
    }

    function EH(HH) {
      return (0, tH.e)(HH) ? "outdated" : HH instanceof AH.e ? 429 === HH.httpCode ? "busy" : "server" : "offline"
    }

    function XH(HH, BH, LH) {
      return (0, hH.postJsonWithMetricsCookiesAndJsonResponse)(`${SH.clientSideServerUrls.indexUrl}${BH}`, LH, {
        retries: 3
      }, HH.getMetricsCookies()).catch((HH => (console.error("Bad response from the server when trying to change name:", BH, HH), {
        outcome: "failed",
        failure: EH(HH)
      })))
    }

    function GH(HH) {
      return "outcome" in HH && "failed" === HH.outcome
    }

    function YH(HH) {
      return console.error("Error when trying to get with new name from DB", HH), {
        outcome: "refused",
        message: HH
      }
    }
    async function uH(HH) {
      const BH = await XH(HH, "/index/name/random", {});
      return GH(BH) ? BH : "err" in BH ? YH(BH.err) : (HH.setPlayerName(BH.name), {
        outcome: "changed",
        name: BH.name
      })
    }
    async function QH(HH, BH) {
      const LH = await XH(HH, "/index/name/update", {
        name: BH
      });
      return GH(LH) ? LH : "err" in LH ? YH(LH.err) : LH.nameExists ? {
        outcome: "taken"
      } : (HH.setPlayerName(BH), {
        outcome: "changed",
        name: BH
      })
    }

    function WH(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
      const AH = 1 === BH ? 1 : 10 ** (BH - 1),
        SH = String(AH + Math.floor(LH() * (10 ** BH - AH)));
      return `${HH.slice(0,rH.e-BH)}${SH}`
    }
    const MH = [1, 2, 3, 4];
    async function xH(HH, BH) {
      const LH = await QH(HH, BH);
      if ("taken" !== LH.outcome) return LH;
      for (const AH of MH) {
        const LH = WH(BH, AH),
          rH = await QH(HH, LH);
        if ("taken" !== rH.outcome) return rH
      }
      return {
        outcome: "taken"
      }
    }
  },
  34908: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => tH,
      i: () => zH
    });
    var AH = LH(15);
    const rH = 24,
      SH = "farNametags",
      hH = 1e5;

    function tH() {
      var HH;
      return null === (HH = AH.c.get("showDistantNametags")) || void 0 === HH || HH
    }

    function zH() {
      var HH;
      return null !== (HH = function() {
        const HH = new URLSearchParams(window.location.search).get(SH),
          BH = null === HH || "" === HH ? NaN : Number(HH);
        return Number.isFinite(BH) && BH >= 0 ? Math.min(BH, hH) : null
      }()) && void 0 !== HH ? HH : tH() ? 0 : rH
    }
  },
  34936: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => CH,
      f: () => XH,
      i: () => EH
    });
    var AH = LH(241),
      rH = LH(81),
      SH = LH(114),
      hH = LH(112),
      tH = LH(635);
    const zH = new Set(["mali_bifrost"]);

    function CH() {
      if (tH.g) return;
      const HH = (0, rH.pageOperatingSystem)();
      if ("android" !== HH && "windows" !== HH || (0, tH.e)("webgl_default")) return;
      if ("windows" === HH) return HH => "qualcomm" === (0, rH.normaliseGpuVendor)((0, hH.b)(HH).vendor);
      const BH = (0, SH.l)(),
        LH = null === BH ? (0, AH.x)() : (0, AH.k)(BH.vendor, BH.renderer);
      return null !== LH && zH.has(LH) ? HH => (0, AH.q)((0, hH.b)(HH).vendor, LH) : void 0
    }

    function EH(HH, BH) {
      return HH ? () => !0 : BH()
    }
    async function XH(HH) {
      try {
        const BH = EH(HH, CH),
          LH = navigator.gpu;
        if (void 0 === BH || void 0 === LH) return !1;
        const AH = await (0, hH.o)(LH, {
          seed: !1,
          compatibility: BH
        });
        return "string" !== typeof AH && AH.compatibility && !(0, hH.h)(AH.adapter)
      } catch (BH) {
        return console.error("WebGPU compatibility-mode adapter request failed.", BH), !1
      }
    }
  },
  35008: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => rH,
      f: () => hH
    });
    const AH = [{
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

    function rH(HH) {
      let BH, LH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof HH) {
        if (!Number.isFinite(HH)) return "0";
        if (Math.abs(HH) < 100) {
          const BH = HH < 0 ? "-" : "",
            LH = Math.abs(HH);
          return LH >= 10 ? `${BH}${LH.toFixed(1).replace(/\.0$/,"")}` : `${BH}${LH.toFixed(2).replace(/\.?0+$/,"")}`
        }
        BH = BigInt(Math.floor(HH))
      } else BH = HH;
      const rH = BH < 0n ? -BH : BH,
        SH = BH < 0n ? "-" : "",
        hH = rH.toString();
      if (hH.length <= LH) return `${SH}${hH}`;
      const tH = 3 * Math.floor((hH.length - 1) / 3);
      if (tH < 3) return `${SH}${hH}`;
      if (tH > 3 * AH.length) {
        const HH = hH[0],
          BH = hH.slice(1, 3).replace(/0+$/, "");
        return `${SH}${BH?`${HH}.${BH}`:HH}e${hH.length-1}`
      }
      const {
        threshold: zH,
        suffix: CH
      } = AH[AH.length - tH / 3], EH = rH / zH, XH = Number(1000n * (rH % zH) / zH), GH = Number(EH) + XH / 1e3;
      let YH;
      return YH = GH >= 100 ? Math.floor(GH).toString() : GH >= 10 ? GH.toFixed(1).replace(/\.0$/, "") : GH.toFixed(2).replace(/\.?0+$/, ""), `${SH}${YH}${CH}`
    }
    const SH = AH.map((HH => {
      let {
        threshold: BH,
        suffix: LH
      } = HH;
      return {
        threshold: Number(BH),
        suffix: LH
      }
    })).filter((HH => {
      let {
        threshold: BH
      } = HH;
      return Number.isFinite(BH)
    }));

    function hH(HH) {
      const BH = Math.abs(HH),
        LH = HH < 0 ? "-" : "";
      for (const {
          threshold: AH,
          suffix: rH
        }
        of SH)
        if (BH >= AH) {
          const HH = BH / AH;
          if (HH >= 1e3) return `${LH}${BH.toExponential(2).replace("e+","e")}`;
          let SH;
          return SH = HH >= 100 ? Math.floor(HH).toString() : HH >= 10 ? HH.toFixed(1).replace(/\.0$/, "") : HH.toFixed(2).replace(/\.?0+$/, ""), `${LH}${SH}${rH}`
        } return `${LH}${BH}`
    }
  },
  34996: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => EH,
      f: () => GH,
      h: () => XH,
      k: () => hH,
      o: () => CH,
      q: () => zH
    });
    var AH = LH(317);
    const rH = ["Wood Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table"],
      SH = {
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

    function hH(HH) {
      var BH;
      return null !== (BH = SH[HH]) && void 0 !== BH ? BH : {
        translationKey: ""
      }
    }
    const tH = {
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

    function zH(HH) {
      return rH.includes(HH)
    }

    function CH(HH) {
      var BH;
      return !0 === (null === HH || void 0 === HH || null === (BH = HH.customAttributes) || void 0 === BH ? void 0 : BH.cannotEnchant)
    }

    function EH(HH, BH) {
      const {
        max: LH
      } = tH[HH].at(-1);
      return BH <= LH
    }

    function XH(HH) {
      const BH = Math.sin(HH / 80),
        LH = HH => {
          if (HH <= 0) return 0;
          if (HH > 1) return 1;
          let BH = 0;
          const LH = [1, 7, 21, 35, 35, 21, 7, 1];
          for (let AH = 0; AH < LH.length; AH++) {
            BH += (AH % 2 === 0 ? 1 : -1) * LH[AH] * Math.pow(HH, 2 + AH) / (2 + AH)
          }
          return 72 * BH
        },
        AH = .3 - .78 * BH,
        rH = .5 - .78 * BH,
        SH = .6 - .7 * BH,
        hH = .8 - .6 * BH;
      let tH = LH(AH),
        zH = LH(rH) - tH,
        CH = LH(SH) - zH - tH,
        EH = LH(hH) - CH - zH - tH;
      AH < .041 && (zH /= 1 - tH, CH /= 1 - tH, EH /= 1 - tH, tH = 0), rH < .041 && (tH /= 1 - zH, CH /= 1 - zH, EH /= 1 - zH, zH = 0), SH < .041 && (tH /= 1 - CH, zH /= 1 - CH, EH /= 1 - CH, CH = 0), hH < .041 && (tH /= 1 - EH, zH /= 1 - EH, CH /= 1 - EH, EH = 0);
      return {
        commonProb: tH,
        uncommonProb: zH,
        rareProb: CH,
        epicProb: EH,
        legendaryProb: 1 - (EH + CH + zH + tH)
      }
    }

    function GH(HH, BH) {
      const {
        min: LH,
        max: rH
      } = tH[HH][BH], SH = AH.d.sampleUniformIntDistribution(LH, rH, "includeMax");
      return {
        ...XH(SH),
        level: SH
      }
    }
  },
  34960: () => {},
  35030: () => {},
  13616: HH => {
    HH.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAaUlEQVR4AWyOQQ6AIAwECwGNr/HkYzz4Hy9+WEkq01BDDCRDy3ZbGo9rU2c/V+1Bj9JOeW7RokaTBO0zpDxJXmYJKXjdohlwOqbWi4YaJFIgcYEIaGAT+JvHCDNQ8El9ziQz/BdzE00vAAAA//+cTXaSAAAABklEQVQDAHI9N5g1NM74AAAAAElFTkSuQmCC"
  },
  14791: HH => {
    HH.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAGBJREFUGJVNjjEOxEAIA+dW22Rpk2+nSndPZFtMewU6FBdIjJHx536+ABARUl7XCbjvyV9mJqX7BtY6RkS0t9bRc0op5ZuaGTAqtPZCpfG+AqSs8FFlulh7s6j7rh9d9wclFjd0V4Z2HAAAAABJRU5ErkJggg=="
  },
  16178: HH => {
    HH.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAbUlEQVR4nESOSwqAMAxEow0pive/gIcTBBdSsZh+NG20DlnkM8MLhnXuzHSnAwBaI8LIV2RXOiIkaGfMKfXGyByZparbyQZpGNUV/KaHGrWowZKVgSx8Qr8vzdXgAkYFCIn9mZP7E8pQ1Q9fzAMAAP//PTNTFgAAAAZJREFUAwAk1D9dXrbJngAAAABJRU5ErkJggg=="
  },
  16699: HH => {
    HH.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAE1JREFUGJVNjsEOwDAIQp/GZv3/j+xx5zVbsh0wZFxEImCsc88RRwHsB5OaI8SA636hjwosNXSUWuRTphxp5iahHX+pozQs+Yt0rU1SPg0CIfgDMgomAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);